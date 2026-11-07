"""A fake Oracle that answers any statement with plausible data, for end-to-end runs of the web client
against the real API without a database:

  python -m tests.synthetic_db            # API on 127.0.0.1:8000 with this driver

SELECTs return three rows whose columns come from the select list (types guessed from names);
DML reports one processed row; PL/SQL leaves variables unchanged. Every statement is printed.
"""
from __future__ import annotations

import datetime as dt
import os
import re

import oracledb
from pathlib import Path
import sys

from tests.fake_oracle import FakeConnection, FakeCursor

# rows per SELECT (SB_SYNTH_ROWS=500 to try incremental fetching of big grids)
SYNTH_ROWS = int(os.environ.get('SB_SYNTH_ROWS', '3'))
# SELECTs matching SB_SYNTH_BIG (regex) get SB_SYNTH_BIG_ROWS rows: big lookup lists without making every query big
SYNTH_BIG = re.compile(os.environ['SB_SYNTH_BIG'], re.I | re.S) if os.environ.get('SB_SYNTH_BIG') else None
SYNTH_BIG_ROWS = int(os.environ.get('SB_SYNTH_BIG_ROWS', '100000'))


def split_top(s: str, sep=',') -> list[str]:
    out, depth, cur, q = [], 0, [], False
    for ch in s:
        if ch == "'":
            q = not q
        if not q:
            if ch == '(':
                depth += 1
            elif ch == ')':
                depth -= 1
            elif ch == sep and depth == 0:
                out.append(''.join(cur))
                cur = []
                continue
        cur.append(ch)
    out.append(''.join(cur))
    return out


TABLE_COLS: dict[str, set[str]] = {}


def from_table(sql: str):
    m = re.search(r'[\s*]from\s+([\w$#.]+)\s*(?:\w+\s*)?(?:where|order|group|$|\))', sql, re.I)
    return m.group(1).split('.')[-1].upper() if m else None


def learn_tables():
    """Columns per table from every single-table SELECT in the registry, so `select * from T` gets the
    columns the module's code reads."""
    from smartweb_api import registry
    for name in [m['name'] for m in registry.index()]:
        for d in registry.module(name)['datasets']:
            t = from_table(d['sql'])
            if t and not re.search(r'\bjoin\b|,\s*\w+\s+\w+\s+where', d['sql'], re.I):
                cols = [c for c in select_list(d['sql']) if c not in ('*',)]
                if cols and not any(c.endswith('*') for c in cols):
                    TABLE_COLS.setdefault(t, set()).update(c for c in cols if re.fullmatch(r'[A-Z_][\w$#]*', c))
            learn_join_columns(d['sql'])


def learn_join_columns(sql: str):
    """`select tr.buy_rate, c.val_name … from temprate tr, avalute c`: alias-qualified columns belong to
    the aliased tables (the gateway updates a join dataset's first table through these columns)."""
    s = re.sub(r'--[^\n]*|/\*.*?\*/', ' ', sql or '', flags=re.S)
    m = re.search(r'^\s*select\s+(?:distinct\s+)?(.*?)\s+from\s+(.*?)(?:\s+where\s|\s+order\s|\s+group\s|$)', s, re.I | re.S)
    if not m:
        return
    aliases = {}
    for part in m.group(2).split(','):
        w = part.split()
        if len(w) >= 2 and re.fullmatch(r'[\w$#.]+', w[0]) and re.fullmatch(r'\w+', w[1]):
            aliases[w[1].lower()] = w[0].split('.')[-1].upper()
    if not aliases:
        return
    for item in split_top(m.group(1)):
        im = re.fullmatch(r'\s*(\w+)\.(\w+)(?:\s+(?:as\s+)?\w+)?\s*', item, re.I)
        if im and im.group(1).lower() in aliases and im.group(2).lower() != 'rowid':
            TABLE_COLS.setdefault(aliases[im.group(1).lower()], set()).add(im.group(2).upper())


def learn_dfm_fields():
    """Persistent fields of single-table datasets in the forms (`select a.* from out_avalute a` with
    fields VALUTE, VAL_NAME …): the columns the code reads exist in the real tables."""
    import glob
    import json
    root = Path(__file__).resolve().parents[2] / 'web' / 'src' / 'generated'
    # grid → DataSource → DataSet may cross forms of one module (a grid on the form, its dataset on the data module)
    mod_sqls: dict[str, dict[str, str]] = {}
    mod_sources: dict[str, dict[str, str]] = {}
    mod_grids: dict[str, list[tuple[str, list[str]]]] = {}
    for f in glob.glob(str(root / '**' / '*.dfm.json'), recursive=True):
        try:
            tree = json.load(open(f, encoding='utf-8'))
        except (OSError, ValueError):
            continue
        mod = str(Path(f).parent)
        # grid columns name the columns too: grid → DataSource → DataSet → table
        sqls = mod_sqls.setdefault(mod, {})
        sources = mod_sources.setdefault(mod, {})
        grids = mod_grids.setdefault(mod, [])
        walk = [tree]
        while walk:
            o = walk.pop()
            walk.extend(o.get('children', []))
            p = o.get('props', {})
            if p.get('SQL.Strings'):
                sqls[o.get('name', '')] = '\n'.join(p['SQL.Strings'])
            if isinstance(p.get('DataSet'), dict) and 'i' in p['DataSet']:
                sources[o.get('name', '')] = p['DataSet']['i']
            if isinstance(p.get('Columns'), list) and isinstance(p.get('DataSource'), dict):
                grids.append((p['DataSource'].get('i', ''), [c.get('FieldName') for c in p['Columns'] if isinstance(c, dict)]))
        stack = [tree]
        while stack:
            o = stack.pop()
            stack.extend(o.get('children', []))
            sql = '\n'.join(o.get('props', {}).get('SQL.Strings') or [])
            if not sql or re.search(r'\bjoin\b', sql, re.I):
                continue
            t = from_table(sql)
            # `select*from countries order by id`: the sort columns exist too
            om = re.search(r'\border\s+by\s+([\w$#,\s]+?)\s*$', sql, re.I)
            if t and om and not re.search(r'\bfrom\s+[\w$#.]+\s*\w*\s*,', sql, re.I):
                TABLE_COLS.setdefault(t, set()).update(c.split()[0].upper() for c in om.group(1).split(',')
                                                       if c.strip() and re.fullmatch(r'[A-Za-z_][\w$#]*', c.split()[0]))
            names = [c.get('props', {}).get('FieldName') for c in o.get('children', []) if c.get('class', '').endswith('Field')]
            if t and names and not re.search(r'\bfrom\s+[\w$#.]+\s*\w*\s*,', sql, re.I):
                TABLE_COLS.setdefault(t, set()).update(n.upper() for n in names if n and re.fullmatch(r'[A-Za-z_][\w$#]*', n))
    for mod, grids in mod_grids.items():
        sqls, sources = mod_sqls[mod], mod_sources[mod]
        for src, cols in grids:
            sql = sqls.get(sources.get(src.split('.')[-1], ''), '')
            t = from_table(sql) if sql and not re.search(r'\bjoin\b|\bfrom\s+[\w$#.]+\s*\w*\s*,', sql, re.I) else None
            if t:
                TABLE_COLS.setdefault(t, set()).update(n.upper() for n in cols if n and re.fullmatch(r'[A-Za-z_][\w$#]*', n))



def top_select(sql: str) -> str:
    """The outermost select list (text between SELECT and its FROM at parenthesis depth 0): aggregates in
    sub-selects (… (select count(*) …) as n …) do not make a one-row result."""
    m = re.search(r'\bselect\b', sql, re.I)
    if not m:
        return ''
    depth, i = 0, m.end()
    low = sql.lower()
    while i < len(sql):
        ch = sql[i]
        if ch == '(':
            depth += 1
        elif ch == ')':
            depth -= 1
        elif depth == 0 and low.startswith('from', i) and (i == 0 or not (low[i - 1].isalnum() or low[i - 1] == '_')):
            return sql[m.end():i]
        i += 1
    return sql[m.end():]

def select_list(sql: str) -> list[str]:
    s = re.sub(r'--[^\n]*|/\*.*?\*/', ' ', sql, flags=re.S)
    s = re.sub(r'^\s*\(+', '', s)  # (select filialid from …)
    s = re.sub(r'(?i)\bselect\*', 'select *', s)  # select*from countries
    s = re.sub(r'(?i)\*from\b', '* from', s)
    m = re.search(r'^\s*select\s+(distinct\s+)?(.*?)\s+from\s', s, re.I | re.S)
    if not m:
        return []
    depth, i, body = 0, 0, s[m.start(2):]
    # cut at the FROM of the outer query
    for i, ch in enumerate(body):
        if ch == '(':
            depth += 1
        elif ch == ')':
            depth -= 1
        elif depth == 0 and re.match(r'\sfrom\s', body[i:i + 6], re.I):
            break
    names = []
    for item in split_top(body[:i]):
        it = item.strip()
        if not it:
            continue
        if it == '*' or it.endswith('.*'):
            t = from_table(s)
            names += ['ROWID'] + sorted(TABLE_COLS.get(t, {'ID', 'NAME', 'CODE', 'DAT', 'AMMOUNT'}) - {'ROWID'})
            continue
        a = re.search(r'\s+(?:as\s+)?"?([A-Za-z_][\w$#]*)"?\s*$', it, re.I)
        if a and not re.search(r'[\w)]\s*$', it[:a.start()].strip()) is None:
            names.append(a.group(1).upper())
        else:
            names.append(re.sub(r'.*\.', '', it).strip('"').upper()[:30])
    return names


def guess(name: str) -> str:
    n = name.upper()
    if n == 'ROWID':
        return 'ROWID'
    if re.search(r'DAT|DATE|TIME', n):
        return 'DATE'
    # BAL_CN, BAL_CN1 … are balance account numbers (integers), not balances
    if re.search(r'ID$|^ID|_ID|NO$|COUNT|CNT|KOD|CODE|VALUTE|VAL_ACC|STATUS|FLAG|TYPE|FIL|^BAL_CN', n):
        return 'INT'
    if re.search(r'AMM|AMOUNT|SUM|OSTAT|RATE|KURS|PERCENT|FAIZ|QALIQ|BAL', n):
        return 'NUMBER'
    return 'VARCHAR2'


def value(name: str, t: str, i: int):
    if t == 'ROWID':
        return f'AAAR{i:04d}'
    if t == 'DATE' and name.upper() == 'HDATE':
        # history tables (SBCM_Interests …) are read in insertion order: ascending dates
        return dt.datetime.combine(dt.date.today(), dt.time()) - dt.timedelta(days=30 * (3 - i))
    if t == 'DATE':
        # first row dated today (operational-day checks: only today's documents may be changed), then older
        return dt.datetime.combine(dt.date.today(), dt.time()) - dt.timedelta(days=7 * i)
    if t == 'INT':
        return i + 1
    # column lists of grids (cm_fields_list: FieldName → the grid column of that field): common field names
    if name.upper() == 'FIELDNAME':
        return ('ID', 'NAME', 'STATUS')[i % 3]
    if t == 'NUMBER':
        return round(1250.75 * (i + 1), 2)
    # as in web/src/api/mock.ts: unclassified columns are mostly NUMBER in this schema (read with StrToFloat)
    if re.search(r'NAME|DESC|TEXT|NOTE|TITLE|COMMENT|LABEL|CAPTION|MSG|MESSAGE|REMARK|REASON|STR|ADI|ADDR|UNVAN|SEBEB|QEYD|IZAH|PURPOSE|INFO', name.upper()):
        return f'{name.title()} {i + 1}'
    return str(i + 1)


class SyntheticCursor(FakeCursor):
    def execute(self, sql, binds=None, **kw):
        if sql is None:
            sql = self._sql
        lead = re.sub(r'^(\s*(--[^\n]*\n|/\*.*?\*/))*', '', sql or '', flags=re.S)  # leading comments
        if re.match(r'[\s(]*(select|with)\b', lead, re.I) and not re.search(r'all_arguments|user_arguments|sys_context', sql, re.I):
            self._sql = sql
            self.conn.log.append((' '.join(sql.split()), dict(binds or {}, **kw)))
            flat = ' '.join(sql.split())
            shown = {k: (v.value if hasattr(v, 'value') else v) for k, v in dict(binds or {}, **kw).items()}
            print('SQL', flat if len(flat) < 220 else flat[:150] + ' … ' + flat[-60:], shown or '', file=sys.stderr)
            names = select_list(sql) or ['VALUE']
            types = [guess(n) for n in names]
            cols = [(n, {'INT': 'NUMBER', 'ROWID': 'ROWID'}.get(t, t)) + ((10, 0) if t == 'INT' else ()) for n, t in zip(names, types)]
            head = top_select(sql)
            rest = sql[sql.find(head) + len(head):] if head else sql
            one = bool(re.match(r'\s*from\s+dual\b', rest, re.I)) or bool(re.search(r'\b(count|sum|max|min)\s*\(', head, re.I))
            # -1 is the code's "nothing" key (MedioCrity = :AccountSide with -1 …): real tables have no such rows
            vals = [getattr(v, 'value', v) for v in dict(binds or {}, **kw).values()]
            n = 0 if any(v == -1 for v in vals) else 1 if one else SYNTH_ROWS
            big = bool(n and not one and SYNTH_BIG and SYNTH_BIG.search(sql))
            if big:
                n = SYNTH_BIG_ROWS
            # in a big list, currency columns repeat (1..3) as in a real account table: filters keep large subsets
            cyc = {k for k, n_ in enumerate(names) if big and re.fullmatch(r'VAL_ACC|VALUTE|CURRENCY|VAL_KOD', n_.upper())}
            self._set(cols, [tuple((i % 3) + 1 if k in cyc else value(n_, t, i) for k, (n_, t) in enumerate(zip(names, types)))
                             for i in range(n)])
            self.rowcount = len(self._rows)
            return
        shown = {k: (v.getvalue() if hasattr(v, 'getvalue') else getattr(v, 'value', v)) for k, v in dict(binds or {}, **kw).items()}
        print('SQL', ' '.join((sql or '').split())[:160], shown or '', file=sys.stderr)
        super().execute(sql, binds, **kw)
        # REF CURSOR out variables (datasets over begin pkg.get_x(p_result => :p_result); end;)
        for b in dict(binds or {}, **kw).values():
            if getattr(b, 'type', None) is oracledb.DB_TYPE_CURSOR and getattr(b, 'value', None) is None:
                rc = SyntheticCursor(self.conn)
                names = ['ID', 'NAME', 'CODE', 'DAT', 'AMMOUNT']
                types = [guess(n) for n in names]
                rc._set([(n, {'INT': 'NUMBER'}.get(t, t)) for n, t in zip(names, types)],
                        [tuple(value(n, t, i) for n, t in zip(names, types)) for i in range(3)])
                b.value = rc
        # date functions (SBOP.get_date = operational day …) answer today
        m = re.search(r':(\w+)\s*:=\s*\w+\.(\w*date)\b', sql or '', re.I)
        if m:
            b = dict(binds or {}, **kw).get(m.group(1))
            if b is not None and hasattr(b, 'setvalue'):
                b.setvalue(0, dt.datetime.combine(dt.date.today(), dt.time()))
        # server-side query builders (SBREP.TrBuildQuery …) return SQL text: answer with the base table
        m = re.search(r':(\w+)\s*:=\s*\w+\.(\w*BuildQuery)\b', sql or '', re.I)
        if m:
            b = dict(binds or {}, **kw).get(m.group(1)) or dict(binds or {}, **kw).get(m.group(1).lower())
            if b is not None and hasattr(b, 'setvalue'):
                b.setvalue(0, 'SELECT p.rowid, p.* FROM TRANSACTIONS p ORDER BY p.ID')
        # module/plugin access checks (CM_ADMINISTRATION.pluginaccess …) allow the test user
        m = re.search(r':(\w+)\s*:=\s*case when \w+\.(\w*access)\b', sql or '', re.I)
        if m:
            b = dict(binds or {}, **kw).get(m.group(1)) or dict(binds or {}, **kw).get(m.group(1).lower())
            if b is not None and hasattr(b, 'setvalue'):
                b.setvalue(0, 1)
        # the operational day is open while people work (SBSYS.is_day_opened …)
        m = re.search(r':(\w+)\s*:=\s*case when \w+\.(is_?day_?opened)\b', sql or '', re.I)
        if m:
            b = dict(binds or {}, **kw).get(m.group(1)) or dict(binds or {}, **kw).get(m.group(1).lower())
            if b is not None and hasattr(b, 'setvalue'):
                b.setvalue(0, 1)
        # account number generators answer a 20-digit number
        m = re.search(r':(\w+)\s*:=\s*\w+\.(Generate\w*Number)\b', sql or '', re.I)
        if m:
            b = dict(binds or {}, **kw).get(m.group(1)) or dict(binds or {}, **kw).get(m.group(1).lower())
            if b is not None and hasattr(b, 'setvalue'):
                b.setvalue(0, '33010019440000000001')
        if re.match(r'\s*(insert|update|delete)\b', sql or '', re.I):
            self.rowcount = 1


class SyntheticConnection(FakeConnection):
    def cursor(self):
        return SyntheticCursor(self)


if __name__ == '__main__':
    import uvicorn

    from smartweb_api import sessions
    sessions.connector = lambda u, p, d: SyntheticConnection()
    learn_tables()
    learn_dfm_fields()
    print('tables learned:', len(TABLE_COLS), file=sys.stderr)
    from smartweb_api.main import create_app
    uvicorn.run(create_app(), host='127.0.0.1', port=int(sys.argv[1]) if len(sys.argv) > 1 else 8000, log_level='warning')
