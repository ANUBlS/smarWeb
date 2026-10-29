"""A fake Oracle that answers any statement with plausible data, for end-to-end runs of the web client
against the real API without a database:

  python -m tests.synthetic_db            # API on 127.0.0.1:8000 with this driver

SELECTs return three rows whose columns come from the select list (types guessed from names);
DML reports one processed row; PL/SQL leaves variables unchanged. Every statement is printed.
"""
from __future__ import annotations

import datetime as dt
import re
import sys

from tests.fake_oracle import FakeConnection, FakeCursor


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


def select_list(sql: str) -> list[str]:
    s = re.sub(r'--[^\n]*|/\*.*?\*/', ' ', sql, flags=re.S)
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
            names += ['ROWID', 'ID', 'NAME', 'CODE', 'DAT', 'AMMOUNT']
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
    if re.search(r'ID$|^ID|_ID|NO$|COUNT|CNT|KOD|CODE|VALUTE|VAL_ACC|STATUS|FLAG|TYPE|FIL', n):
        return 'INT'
    if re.search(r'AMM|AMOUNT|SUM|OSTAT|RATE|KURS|PERCENT|FAIZ|QALIQ|BAL', n):
        return 'NUMBER'
    return 'VARCHAR2'


def value(name: str, t: str, i: int):
    if t == 'ROWID':
        return f'AAAR{i:04d}'
    if t == 'DATE':
        return dt.datetime(2026, 10, 1 + i * 7)
    if t == 'INT':
        return i + 1
    if t == 'NUMBER':
        return round(1250.75 * (i + 1), 2)
    return f'{name.title()} {i + 1}'


class SyntheticCursor(FakeCursor):
    def execute(self, sql, binds=None, **kw):
        if sql is None:
            sql = self._sql
        if re.match(r'\s*(select|with)\b', sql, re.I) and not re.search(r'all_arguments|user_arguments|sys_context', sql, re.I):
            self._sql = sql
            self.conn.log.append((' '.join(sql.split()), dict(binds or {}, **kw)))
            print('SQL', ' '.join(sql.split())[:160], file=sys.stderr)
            names = select_list(sql) or ['VALUE']
            types = [guess(n) for n in names]
            cols = [(n, {'INT': 'NUMBER', 'ROWID': 'ROWID'}.get(t, t)) + ((10, 0) if t == 'INT' else ()) for n, t in zip(names, types)]
            one = bool(re.search(r'\bfrom\s+dual\b', sql, re.I)) or re.search(r'\b(count|sum|max|min)\s*\(', sql, re.I)
            self._set(cols, [tuple(value(n, t, i) for n, t in zip(names, types)) for i in range(1 if one else 3)])
            self.rowcount = len(self._rows)
            return
        print('SQL', ' '.join((sql or '').split())[:160], file=sys.stderr)
        super().execute(sql, binds, **kw)
        if re.match(r'\s*(insert|update|delete)\b', sql or '', re.I):
            self.rowcount = 1


class SyntheticConnection(FakeConnection):
    def cursor(self):
        return SyntheticCursor(self)


if __name__ == '__main__':
    import uvicorn

    from smartweb_api import sessions
    sessions.connector = lambda u, p, d: SyntheticConnection()
    from smartweb_api.main import create_app
    uvicorn.run(create_app(), host='127.0.0.1', port=int(sys.argv[1]) if len(sys.argv) > 1 else 8000, log_level='warning')
