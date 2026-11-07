"""The database operations behind the gateway endpoints, with Direct Oracle Access (DOA) semantics:

  query          TOracleDataSet.Open / Refresh                 — SELECT with bind variables
  execute        TOracleQuery.Execute / ExecSQL, PL/SQL blocks  — DML or blocks; variables are IN OUT
  call_package   TOraclePackage.CallProcedure / Call*Function   — positional or named (ParameterMode)
  apply_record   dataset Post / Delete                          — DML on the updating table by ROWID

Nothing here contains business logic: the statements come from the transpiled Delphi code and all
rules stay in the existing PL/SQL packages.
"""
from __future__ import annotations

import re
import secrets
import threading
import time
from datetime import datetime
from typing import Any

import oracledb

from . import convert
from .config import settings
from .sessions import Session

IDENT = re.compile(r'^[A-Za-z][\w$#]*(\.[A-Za-z][\w$#]*){0,2}$')


class GatewayError(Exception):
    """An error reported to the client as {errorCode, message} (EOracleError on the Delphi side)."""

    def __init__(self, code: int, message: str, status: int = 400):
        super().__init__(message)
        self.code, self.message, self.status = code, message, status


def oracle_error(e: Exception) -> GatewayError:
    err = e.args[0] if e.args else None
    code = getattr(err, 'code', 0) or 0
    msg = getattr(err, 'message', None) or str(e)
    return GatewayError(int(code), str(msg).strip())


def _check_ident(name: str, what: str) -> str:
    if not name or not IDENT.match(name):
        raise GatewayError(20000, f'Invalid {what} name: {name!r}')
    return name


# --------------------------------------------------------------------------- binds

def _bind_names(cur, sql: str) -> list[str]:
    cur.prepare(sql)
    return [n.upper() for n in cur.bindnames()]


def _bind_map(variables: list[dict]) -> dict[str, dict]:
    return {str(v['name']).lstrip(':').upper(): v for v in variables or []}


def _rows(cur, limit: int | None = None) -> list[list]:
    return _rows_t(cur, limit)[0]


def _rows_t(cur, limit: int | None = None) -> tuple[list[list], bool]:
    """All rows up to `limit` / SB_MAX_ROWS, and whether more were left (the result is cut off)."""
    cap = min(limit or settings.max_rows, settings.max_rows)
    out = []
    while True:
        batch = cur.fetchmany(1000)
        if not batch:
            return out, False
        out.extend([convert.to_json(x) for x in r] for r in batch)
        if len(out) > cap:
            return out[:cap], True
        if len(out) == cap:
            return out, bool(cur.fetchmany(1))


# --------------------------------------------------------------------------- partitions

# `FROM ACCOUNT PARTITION (ACTIVACC)` (DebitAccData, CreditAccData, …) works only where ACCOUNT is the partitioned
# table. Where the login user's ACCOUNT is a view, Oracle answers ORA-14109; the partition is then replaced by its
# definition (SQL_credit/all_smart_t.sql). NULL partition keys belong to the MAXVALUE partition.
PARTITIONS = {
    ('ACCOUNT', 'ACTIVACC'): "close_dat is null or close_dat >= date '2100-01-01'",
    ('ACCOUNT', 'CLOSEACC'): "close_dat < date '2100-01-01'",
    ('OUT_ACCOUNT', 'ACTIVACC'): "close_dat is null or close_dat >= date '2100-01-01'",
    ('OUT_ACCOUNT', 'CLOSEACC'): "close_dat < date '2100-01-01'",
    ('OPERKURS', 'ARCHIVALDAY'): 'shifr < 1',
    ('OPERKURS', 'RESERVE'): 'shifr >= 1 and shifr < 2',
    ('OPERKURS', 'YESTERDAY'): 'shifr >= 2 and shifr < 3',
    ('OPERKURS', 'TODAY'): 'shifr >= 3 and shifr < 4',
}
_NOT_ALIAS = ('where|order|group|having|union|minus|intersect|connect|start|for|join|inner|left|right|full|cross|'
              'natural|on|using|fetch|offset|model|pivot|unpivot|partition|sample|as')
_PARTITION = re.compile(
    r'(?<![\w$#."])("?[A-Za-z][\w$#]*"?(?:\."?[A-Za-z][\w$#]*"?)?)\s+partition\s*\(\s*"?([A-Za-z][\w$#]*)"?\s*\)'
    rf'(\s+(?!(?:{_NOT_ALIAS})\b)[A-Za-z][\w$#]*)?', re.I)


def rewrite_partitions(sql: str) -> str | None:
    """The statement with partition-extended names replaced by filtered inline views; None when a partition is unknown."""
    unknown = False

    def rep(m: re.Match) -> str:
        nonlocal unknown
        table = m.group(1).replace('"', '')
        base = table.split('.')[-1].upper()
        cond = PARTITIONS.get((base, m.group(2).upper()))
        if cond is None:
            unknown = True
            return m.group(0)
        alias = (m.group(3) or '').strip() or base
        return f'(select * from {table} where {cond}) {alias}'

    out = _PARTITION.sub(rep, sql)
    return None if unknown else out


def _with_partitions(s: Session, sql: str, run):
    if s.no_partitions:
        sql = rewrite_partitions(sql) or sql
        return run(sql)
    try:
        return run(sql)
    except oracledb.DatabaseError as e:
        if oracle_error(e).code != 14109:
            raise
        fixed = rewrite_partitions(sql)
        if not fixed or fixed == sql:
            raise
        s.no_partitions = True
        return run(fixed)


# --------------------------------------------------------------------------- slow statements

_slow_lock = threading.Lock()


def _log_slow(s: Session, kind: str, source: str, sql: str, started: float, rows: int | None, error: str = '') -> None:
    ms = int((time.monotonic() - started) * 1000)
    if not settings.slow_ms or ms < settings.slow_ms:
        return
    try:
        settings.slow_file.parent.mkdir(parents=True, exist_ok=True)
        line = '\t'.join([datetime.now().isoformat(timespec='seconds'), s.username, kind, source or '-', f'{ms} ms',
                          f'{rows} rows' if rows is not None else '-', error[:200], ' '.join(sql.split())[:1000]])
        with _slow_lock, settings.slow_file.open('a', encoding='utf-8') as fh:
            fh.write(line + '\n')
    except OSError:
        pass


def _log_truncated(s: Session, source: str, sql: str, rows: int) -> None:
    """Always written (slow-sql.log): a result cut off at SB_MAX_ROWS makes the module see incomplete data."""
    try:
        settings.slow_file.parent.mkdir(parents=True, exist_ok=True)
        line = '\t'.join([datetime.now().isoformat(timespec='seconds'), s.username, 'TRUNCATED', source or '-',
                          f'{rows} rows (SB_MAX_ROWS)', ' '.join(sql.split())[:1000]])
        with _slow_lock, settings.slow_file.open('a', encoding='utf-8') as fh:
            fh.write(line + '\n')
    except OSError:
        pass


# --------------------------------------------------------------------------- query / execute

MAX_CURSORS = 30


def _page(s: Session, cur, cols: list, max_rows: int | None, fetch: int | None) -> dict:
    """All rows, or with `fetch` (DOA QueryAllRecords = False) the first rows; the cursor stays open for /api/fetch."""
    if not fetch:
        rows, cut = _rows_t(cur, max_rows)
        res = {'columns': cols, 'rows': rows}
        if cut and not max_rows:
            # a dataset the Delphi code reads completely (lookup lists …) is incomplete: SB_MAX_ROWS is too small
            res['truncated'] = True
        return res
    fetch = max(1, min(fetch, settings.max_rows))
    rows = [[convert.to_json(x) for x in r] for r in cur.fetchmany(fetch + 1)]
    if len(rows) <= fetch:
        cur.close()
        return {'columns': cols, 'rows': rows}
    pending = [rows.pop()]
    while len(s.cursors) >= MAX_CURSORS:  # a client that never fetched to the end or closed
        close_cursor(s, next(iter(s.cursors)))
    cid = secrets.token_urlsafe(12)
    s.cursors[cid] = {'cur': cur, 'pending': pending, 'sent': len(rows)}
    return {'columns': cols, 'rows': rows, 'cursorId': cid, 'more': True}


def query(s: Session, sql: str, variables: list[dict], max_rows: int | None = None, fetch: int | None = None,
          source: str = '') -> dict:
    with s.lock:
        started, res, err = time.monotonic(), None, ''
        try:
            res = _with_partitions(s, sql, lambda q: _query(s, q, variables, max_rows, fetch))
            return res
        except oracledb.DatabaseError as e:
            ge = oracle_error(e)
            err = ge.message
            raise ge from e
        finally:
            if res and res.get('truncated'):
                _log_truncated(s, source, sql, len(res['rows']))
            _log_slow(s, 'query', source, sql, started, len(res['rows']) if res else None, err)


def _query(s: Session, sql: str, variables: list[dict], max_rows: int | None, fetch: int | None) -> dict:
    cur = s.conn.cursor()
    cur.arraysize = max(500, (fetch or 0) + 1)
    names = _bind_names(cur, sql)
    given = _bind_map(variables)
    cursors = [n for n in names if (given.get(n) or {}).get('type') == 'cursor']
    if cursors:
        # DOA dataset over a PL/SQL block returning a REF CURSOR:
        #   begin pkg_report.get_customers(p_result => :p_result); end;
        binds: dict[str, Any] = {}
        for n in names:
            if n in cursors:
                binds[n] = cur.var(oracledb.DB_TYPE_CURSOR)
            else:
                binds[n] = convert.to_db(given[n].get('value'), given[n].get('type')) if n in given else None
        cur.execute(None, binds)
        rc = binds[cursors[0]].getvalue()
        if rc is None or rc.description is None:  # the routine did not open the cursor
            return {'columns': [], 'rows': []}
        rc.arraysize = max(500, (fetch or 0) + 1)
        return _page(s, rc, convert.columns_of(rc.description), max_rows, fetch)
    binds = {n: convert.to_db(given[n].get('value'), given[n].get('type')) if n in given else None for n in names}
    cur.execute(None, binds)
    return _page(s, cur, convert.columns_of(cur.description), max_rows, fetch)


def fetch_rows(s: Session, cursor_id: str, count: int) -> dict:
    """Next rows of a dataset opened with `fetch` (scrolling the grid, Next past the last fetched record, Last, Locate).
    count <= 0: all remaining rows (up to SB_MAX_ROWS in total)."""
    with s.lock:
        c = s.cursors.get(cursor_id)
        if not c:
            return {'rows': [], 'more': False}
        room = settings.max_rows - c['sent']
        limit = room if count <= 0 else min(count, room)
        rows, c['pending'] = c['pending'], []
        try:
            while len(rows) < limit + 1:
                batch = c['cur'].fetchmany(min(1000, limit + 1 - len(rows)))
                if not batch:
                    break
                rows.extend([convert.to_json(x) for x in r] for r in batch)
        except oracledb.DatabaseError as e:
            close_cursor(s, cursor_id)
            raise oracle_error(e) from e
        more = len(rows) > limit
        if more:
            c['pending'] = rows[limit:]
            rows = rows[:limit]
        c['sent'] += len(rows)
        if not more or c['sent'] >= settings.max_rows:
            close_cursor(s, cursor_id)
            more = False
        return {'rows': rows, 'more': more}


def close_cursor(s: Session, cursor_id: str) -> None:
    with s.lock:
        c = s.cursors.pop(cursor_id, None)
        if c:
            try:
                c['cur'].close()
            except Exception:  # noqa: BLE001 - connection may be gone
                pass


def execute(s: Session, sql: str, variables: list[dict], source: str = '') -> dict:
    """DOA TOracleQuery: every declared variable is IN OUT; their values come back after execution."""
    with s.lock:
        started, err = time.monotonic(), ''
        try:
            return _with_partitions(s, sql, lambda q: _execute(s, q, variables))
        except oracledb.DatabaseError as e:
            ge = oracle_error(e)
            err = ge.message
            raise ge from e
        finally:
            _log_slow(s, 'execute', source, sql, started, None, err)


def _execute(s: Session, sql: str, variables: list[dict]) -> dict:
    cur = s.conn.cursor()
    names = _bind_names(cur, sql)
    given = _bind_map(variables)
    binds: dict[str, Any] = {}
    for n in names:
        v = given.get(n, {})
        t = v.get('type') or _guess_type(v.get('value'))
        var = cur.var(convert.DB_TYPE_OF.get(t, oracledb.DB_TYPE_VARCHAR),
                      size=32767 if t in ('string', None) else 0)
        if t != 'cursor':
            var.setvalue(0, convert.to_db(v.get('value'), t))
        binds[n] = var
    cur.execute(None, binds)
    res: dict[str, Any] = {'rowsProcessed': cur.rowcount if cur.rowcount is not None else 0,
                           'variables': {n: convert.to_json(b.getvalue()) for n, b in binds.items()}}
    if cur.description:
        res['columns'] = convert.columns_of(cur.description)
        res['rows'] = _rows(cur)
        res['rowsProcessed'] = len(res['rows'])
    return res


def _guess_type(v: Any) -> str:
    if isinstance(v, bool):
        return 'boolean'
    if isinstance(v, int):
        return 'integer'
    if isinstance(v, float):
        return 'float'
    return 'string'


def transaction(s: Session, op: str, savepoint: str | None = None) -> None:
    with s.lock:
        try:
            if op == 'commit':
                s.conn.commit()
            elif op == 'rollback' and savepoint:
                s.conn.cursor().execute(f'rollback to savepoint {_check_ident(savepoint, "savepoint")}')
            elif op == 'rollback':
                s.conn.rollback()
            elif op == 'savepoint':
                s.conn.cursor().execute(f'savepoint {_check_ident(savepoint or "", "savepoint")}')
        except oracledb.DatabaseError as e:
            raise oracle_error(e) from e


# --------------------------------------------------------------------------- packages

def _arguments(s: Session, package: str, name: str) -> list[list[dict]]:
    """ALL_ARGUMENTS of package.name, grouped by overload (position 0 = function result)."""
    key = f'{package}.{name}'.upper()
    if key in s.arguments:
        return s.arguments[key]
    if not package:
        return _standalone_arguments(s, name, key)
    parts = package.upper().split('.')
    owner, pkg = (parts[0], parts[1]) if len(parts) == 2 else (None, parts[0])
    cur = s.conn.cursor()
    try:
        cur.execute(
            """select nvl(overload, '0'), position, argument_name, data_type, in_out
                 from all_arguments
                where package_name = :pkg and object_name = :obj and data_level = 0
                  and owner = nvl(:own, (select table_owner from all_synonyms
                                          where synonym_name = :pkg and owner in (user, 'PUBLIC') and rownum = 1))
                order by 1, 2""",
            pkg=pkg, obj=name.upper(), own=owner)
        rows = cur.fetchall()
        if not rows and owner is None:
            cur.execute(
                """select nvl(overload, '0'), position, argument_name, data_type, in_out
                     from user_arguments where package_name = :pkg and object_name = :obj and data_level = 0
                    order by 1, 2""", pkg=pkg, obj=name.upper())
            rows = cur.fetchall()
    except oracledb.DatabaseError:
        rows = []
    groups: dict[str, list[dict]] = {}
    for ov, pos, arg, dtype, io in rows:
        groups.setdefault(ov, []).append({'position': pos, 'name': (arg or '').upper(), 'type': dtype, 'inout': io})
    s.arguments[key] = list(groups.values())
    return s.arguments[key]


def _standalone_arguments(s: Session, name: str, key: str) -> list[list[dict]]:
    """Arguments of a schema-level procedure/function (TOraclePackage without PackageName)."""
    parts = name.upper().split('.')
    owner, obj = (parts[0], parts[1]) if len(parts) == 2 else (None, parts[0])
    cur = s.conn.cursor()
    try:
        cur.execute(
            """select nvl(overload, '0'), position, argument_name, data_type, in_out
                 from all_arguments
                where package_name is null and object_name = :obj and data_level = 0
                  and owner = nvl(:own, nvl((select table_owner from all_synonyms
                                              where synonym_name = :obj and owner in (user, 'PUBLIC') and rownum = 1), user))
                order by 1, 2""", obj=obj, own=owner)
        rows = cur.fetchall()
    except oracledb.DatabaseError:
        rows = []
    groups: dict[str, list[dict]] = {}
    for ov, pos, arg, dtype, io in rows:
        groups.setdefault(ov, []).append({'position': pos, 'name': (arg or '').upper(), 'type': dtype, 'inout': io})
    s.arguments[key] = list(groups.values())
    return s.arguments[key]


def call_package(s: Session, package: str, name: str, kind: str, mode: str, params: list) -> dict:
    # DOA: an empty PackageName calls a schema-level procedure / function
    if package:
        _check_ident(package, 'package')
    _check_ident(name, 'procedure')
    with s.lock:
        try:
            # (name or None, value) pairs
            pairs: list[tuple[str | None, Any]] = []
            if mode == 'named':
                for i in range(0, len(params) - 1, 2):
                    pairs.append((str(params[i]).upper(), params[i + 1]))
            else:
                pairs = [(None, p) for p in params]
            overloads = _arguments(s, package, name)
            args = _pick_overload(overloads, pairs, kind != 'procedure')
            cur = s.conn.cursor()
            binds: dict[str, Any] = {}
            exprs: list[str] = []
            for i, (pname, value) in enumerate(pairs):
                meta = _arg_meta(args, pname, i)
                t = convert.plsql_type(meta['type']) if meta else None
                is_out = isinstance(value, dict) and 'out' in value
                if is_out:
                    t = t or value.get('out') or 'string'
                t = t or _guess_type(value)
                b = f'p{i}'
                var = cur.var(convert.DB_TYPE_OF.get(t if t != 'boolean' else 'integer', oracledb.DB_TYPE_VARCHAR),
                              size=32767 if t == 'string' else 0)
                if not is_out and t != 'cursor':
                    var.setvalue(0, convert.to_db(value, t))
                binds[b] = var
                ref = f':{b}'
                if t == 'boolean':
                    ref = f'sys.diutil.int_to_bool(:{b})'
                exprs.append(f'{pname} => {ref}' if pname else ref)
            call = (f'{package}.{name}' if package else name) + (f'({", ".join(exprs)})' if exprs else '')
            if kind == 'procedure':
                block = f'begin {call}; end;'
            else:
                rtype = _result_type(args) or ('integer' if kind == 'integer' else 'float' if kind == 'float'
                                               else 'date' if kind == 'date' else 'string')
                if kind == 'boolean' or rtype == 'boolean':
                    block = f'begin :r := case when {call} then 1 else 0 end; end;'
                    binds['r'] = cur.var(oracledb.DB_TYPE_NUMBER)
                else:
                    block = f'begin :r := {call}; end;'
                    binds['r'] = cur.var(convert.DB_TYPE_OF.get(rtype, oracledb.DB_TYPE_VARCHAR),
                                         size=32767 if rtype == 'string' else 0)
            cur.execute(block, binds)
            result = None
            if 'r' in binds:
                result = convert.to_json(binds['r'].getvalue())
                if kind == 'boolean':
                    result = bool(result)
            out = {i: convert.to_json(binds[f'p{i}'].getvalue()) for i in range(len(pairs))}
            return {'result': result, 'outParams': out}
        except oracledb.DatabaseError as e:
            raise oracle_error(e) from e


def _pick_overload(overloads: list[list[dict]], pairs, is_function: bool) -> list[dict]:
    if not overloads:
        return []
    n = len(pairs)
    best = None
    for args in overloads:
        params = [a for a in args if a['position'] > 0]
        has_result = any(a['position'] == 0 for a in args)
        if has_result != is_function:
            continue
        if len(params) >= n and (best is None or len(params) < len([a for a in best if a['position'] > 0])):
            best = args
    return best or overloads[0]


def _arg_meta(args: list[dict], pname: str | None, index: int) -> dict | None:
    params = [a for a in args if a['position'] > 0]
    if pname:
        return next((a for a in params if a['name'] == pname), None)
    return params[index] if index < len(params) else None


def _result_type(args: list[dict]) -> str | None:
    r = next((a for a in args if a['position'] == 0), None)
    return convert.plsql_type(r['type']) if r else None


# --------------------------------------------------------------------------- apply record

_FROM = re.compile(r'\bfrom\s+("?[\w$#]+"?(?:\."?[\w$#]+"?)?)', re.I)


def updating_table(sql: str, explicit: str | None) -> str:
    """DOA: the UpdatingTable property, or the first table of the FROM clause."""
    if explicit:
        return _check_ident(explicit.replace('"', ''), 'table')
    clean = re.sub(r"'(?:[^']|'')*'", "''", re.sub(r'--[^\n]*|/\*.*?\*/', ' ', sql, flags=re.S))
    m = _FROM.search(clean)
    if not m:
        raise GatewayError(20000, 'Updating table cannot be determined from the dataset SQL')
    return _check_ident(m.group(1).replace('"', ''), 'table')


def _table_columns(s: Session, table: str) -> dict[str, str]:
    key = table.upper()
    if key not in s.table_cols:
        cur = s.conn.cursor()
        cur.execute(f'select * from {table} where 1 = 0')
        s.table_cols[key] = {c['name']: c['type'] for c in convert.columns_of(cur.description)}
    return s.table_cols[key]


def _reselect(cur, table: str, rowid: str) -> dict:
    cur.execute(f'select t.*, t.rowid from {table} t where t.rowid = :rid', rid=rowid)
    row = cur.fetchone()
    if not row:
        return {}
    cols = [c['name'] for c in convert.columns_of(cur.description)]
    return {c: convert.to_json(v) for c, v in zip(cols, row)}


def apply_record(s: Session, req: dict) -> dict:
    with s.lock:
        try:
            table = updating_table(req.get('sql', ''), req.get('updatingTable'))
            cols = _table_columns(s, table)
            values = {k.upper(): v for k, v in (req.get('values') or {}).items()}
            old = {k.upper(): v for k, v in (req.get('oldValues') or {}).items()}
            fields = [f.upper() for f in req.get('fields') or values.keys()]
            own = [f for f in fields if f in cols and f not in ('ROWID',)]
            action = req.get('action')
            rowid = req.get('rowid')
            cur = s.conn.cursor()
            if action == 'insert':
                ins = [f for f in own if values.get(f) is not None]
                rid = cur.var(oracledb.DB_TYPE_ROWID)
                binds = {f'v{i}': convert.to_db(values[f], cols[f]) for i, f in enumerate(ins)}
                binds['rid'] = rid
                cur.execute(f'insert into {table} ({", ".join(ins)}) values ({", ".join(f":v{i}" for i in range(len(ins)))}) '
                            f'returning rowid into :rid', binds)
                rowid = rid.getvalue()
                rowid = rowid[0] if isinstance(rowid, list) else rowid
                return {'rowid': rowid, 'values': _reselect(cur, table, rowid) if rowid else {}}
            if not rowid:
                raise GatewayError(20000, f'{table}: ROWID is not selected by the dataset, the record cannot be located')
            if action == 'update':
                changed = [f for f in own if values.get(f) != old.get(f)]
                if changed:
                    binds = {f'v{i}': convert.to_db(values.get(f), cols[f]) for i, f in enumerate(changed)}
                    binds['rid'] = rowid
                    cur.execute(f'update {table} set {", ".join(f"{f} = :v{i}" for i, f in enumerate(changed))} '
                                f'where rowid = :rid', binds)
                    if cur.rowcount == 0:
                        raise GatewayError(20000, 'Record has been deleted by another user')
                return {'rowid': rowid, 'values': _reselect(cur, table, rowid)}
            if action == 'delete':
                cur.execute(f'delete from {table} where rowid = :rid', rid=rowid)
                return {'rowid': rowid}
            if action == 'lock':
                cur.execute(f'select rowid from {table} where rowid = :rid for update nowait', rid=rowid)
                return {'rowid': rowid}
            if action == 'refresh':
                return {'rowid': rowid, 'values': _reselect(cur, table, rowid)}
            raise GatewayError(20000, f'Unknown action {action!r}')
        except oracledb.DatabaseError as e:
            raise oracle_error(e) from e


# --------------------------------------------------------------------------- logon

def session_info(s: Session) -> dict:
    with s.lock:
        cur = s.conn.cursor()
        cur.execute("select sys_context('USERENV', 'SID'), sysdate from dual")
        sid, now = cur.fetchone()
        s.sid = int(sid)
        return {'sid': s.sid, 'serverDate': convert.to_json(now)}
