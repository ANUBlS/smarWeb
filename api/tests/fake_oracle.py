"""A stand-in for a python-oracledb connection: records statements and binds, returns canned results.

  conn = FakeConnection()
  conn.on(r'from avalute', columns=[('VALUTE', 'NUMBER', 3, 0), ('VAL_NAME', 'VARCHAR2')], rows=[(944, 'AZN')])
  conn.arguments['SBOP.GETDATE'] = [(0, None, 'DATE', 'OUT')]
"""
from __future__ import annotations

import datetime as dt
import re
from dataclasses import dataclass, field
from typing import Any

import oracledb

TYPES = {'NUMBER': oracledb.DB_TYPE_NUMBER, 'VARCHAR2': oracledb.DB_TYPE_VARCHAR, 'DATE': oracledb.DB_TYPE_DATE,
         'CLOB': oracledb.DB_TYPE_CLOB, 'ROWID': oracledb.DB_TYPE_ROWID}


class FakeVar:
    def __init__(self, dbtype, size=0):
        self.type, self.size, self.value = dbtype, size, None

    def setvalue(self, _pos, v):
        self.value = v

    def getvalue(self, _pos=0):
        return self.value


@dataclass
class Rule:
    pattern: re.Pattern
    columns: list = field(default_factory=list)
    rows: list = field(default_factory=list)
    rowcount: int = 0
    out: dict = field(default_factory=dict)  # bind name -> value set after execute
    error: tuple | None = None               # (code, message)


class FakeError:
    def __init__(self, code, message):
        self.code, self.message, self.full_code = code, message, f'ORA-{code:05d}'


class FakeCursor:
    def __init__(self, conn):
        self.conn = conn
        self.description = None
        self.rowcount = 0
        self.arraysize = 100
        self._rows: list = []
        self._sql = ''

    # oracledb API -------------------------------------------------------------
    def prepare(self, sql):
        self._sql = sql

    def bindnames(self):
        clean = re.sub(r"'(?:[^']|'')*'", "''", re.sub(r'--[^\n]*|/\*.*?\*/', ' ', self._sql, flags=re.S))
        seen = []
        for n in re.findall(r'(?<![\w:]):([A-Za-z_][\w$#]*)', clean):
            if n.upper() not in seen:
                seen.append(n.upper())
        return seen

    def var(self, dbtype, size=0, **_kw):
        return FakeVar(dbtype, size)

    def close(self):
        pass

    def execute(self, sql, binds=None, **kw):
        if sql is None:
            sql = self._sql
        self._sql = sql
        binds = dict(binds or {}, **kw)
        plain = {k.upper(): (v.value if isinstance(v, FakeVar) else v) for k, v in binds.items()}
        self.conn.log.append((' '.join(sql.split()), plain))
        if re.search(r'from all_arguments|from user_arguments', sql, re.I):
            key = f"{binds.get('pkg', '')}.{binds.get('obj', '')}".upper()
            self._set([('O', 'VARCHAR2'), ('POSITION', 'NUMBER'), ('ARGUMENT_NAME', 'VARCHAR2'),
                       ('DATA_TYPE', 'VARCHAR2'), ('IN_OUT', 'VARCHAR2')],
                      [('0', p, n, t, io) for p, n, t, io in self.conn.arguments.get(key, [])])
            return
        for r in self.conn.rules:
            if r.pattern.search(sql):
                if r.error:
                    raise oracledb.DatabaseError(FakeError(*r.error))
                self._set(r.columns, list(r.rows))
                self.rowcount = r.rowcount if not r.columns else len(r.rows)
                for k, v in r.out.items():
                    b = binds.get(k) or binds.get(k.lower())
                    if isinstance(b, FakeVar):
                        b.value = v(plain) if callable(v) else v
                return
        self._set([], [])

    def fetchmany(self, n=100):
        out, self._rows = self._rows[:n], self._rows[n:]
        return out

    def fetchall(self):
        out, self._rows = self._rows, []
        return out

    def fetchone(self):
        return self._rows.pop(0) if self._rows else None

    def _set(self, columns, rows):
        if columns:
            self.description = [(c[0], TYPES.get(c[1], oracledb.DB_TYPE_VARCHAR), None, None,
                                 c[2] if len(c) > 2 else None, c[3] if len(c) > 3 else None, True) for c in columns]
        else:
            self.description = None
        self._rows = rows


class FakeConnection:
    def __init__(self):
        self.log: list[tuple[str, dict]] = []
        self.rules: list[Rule] = []
        self.arguments: dict[str, list] = {}
        self.autocommit = False
        self.commits = 0
        self.rollbacks = 0
        self.closed = False
        self.on(r"sys_context\('USERENV', 'SID'\)", columns=[('SID', 'NUMBER', 10, 0), ('NOW', 'DATE')],
                rows=[(4711, dt.datetime(2026, 10, 29, 9, 30, 0))])

    def on(self, pattern: str, **kw) -> 'FakeConnection':
        self.rules.insert(0, Rule(re.compile(pattern, re.I | re.S), **kw))
        return self

    def cursor(self):
        return FakeCursor(self)

    def commit(self):
        self.commits += 1

    def rollback(self):
        self.rollbacks += 1

    def close(self):
        self.closed = True

    def statements(self, pattern: str) -> list[tuple[str, dict]]:
        return [x for x in self.log if re.search(pattern, x[0], re.I)]
