"""Values between JSON (the web client) and Oracle (python-oracledb).

Dates travel as ISO strings ("2026-10-25T00:00:00"); the Delphi code works with TDateTime
numbers (days since 1899-12-30), which also arrive for PL/SQL arguments typed DATE.
"""
from __future__ import annotations

import base64
import datetime as dt
from decimal import Decimal
from typing import Any

import oracledb

DELPHI_EPOCH = dt.datetime(1899, 12, 30)


def ora_type(dbtype: Any, precision: int | None, scale: int | None) -> str:
    """oracledb column type -> the client's OraType."""
    t = dbtype
    if t in (oracledb.DB_TYPE_NUMBER,):
        if scale == 0 and (precision or 0) > 0:
            return 'integer'
        return 'float'
    if t in (oracledb.DB_TYPE_BINARY_INTEGER,):
        return 'integer'
    if t in (oracledb.DB_TYPE_BINARY_FLOAT, oracledb.DB_TYPE_BINARY_DOUBLE):
        return 'float'
    if t in (oracledb.DB_TYPE_DATE, oracledb.DB_TYPE_TIMESTAMP, oracledb.DB_TYPE_TIMESTAMP_TZ,
             oracledb.DB_TYPE_TIMESTAMP_LTZ):
        return 'date'
    if t in (oracledb.DB_TYPE_CLOB, oracledb.DB_TYPE_NCLOB, oracledb.DB_TYPE_LONG):
        return 'clob'
    if t in (oracledb.DB_TYPE_BLOB, oracledb.DB_TYPE_RAW, oracledb.DB_TYPE_LONG_RAW, oracledb.DB_TYPE_BFILE):
        return 'blob'
    if t in (oracledb.DB_TYPE_CURSOR,):
        return 'cursor'
    if t in (oracledb.DB_TYPE_BOOLEAN,):
        return 'boolean'
    return 'string'


def columns_of(description) -> list[dict]:
    out = []
    for d in description or []:
        name, dbtype, _disp, size, precision, scale = d[0], d[1], d[2], d[3], d[4], d[5]
        col = {'name': str(name).upper(), 'type': ora_type(dbtype, precision, scale)}
        if size:
            col['size'] = int(size)
        if precision:
            col['precision'] = int(precision)
        if scale not in (None, -127):
            col['scale'] = int(scale)
        out.append(col)
    return out


def to_json(v: Any) -> Any:
    """A fetched value -> JSON."""
    if v is None:
        return None
    if isinstance(v, dt.datetime):
        return v.replace(tzinfo=None).isoformat(timespec='seconds')
    if isinstance(v, dt.date):
        return dt.datetime(v.year, v.month, v.day).isoformat(timespec='seconds')
    if isinstance(v, Decimal):
        return int(v) if v == v.to_integral_value() else float(v)
    if isinstance(v, (bytes, bytearray)):
        return base64.b64encode(bytes(v)).decode('ascii')
    if isinstance(v, dt.timedelta):
        return v.total_seconds() / 86400
    if hasattr(v, 'read'):  # LOB
        return to_json(v.read())
    if isinstance(v, oracledb.Cursor):
        return {'columns': columns_of(v.description), 'rows': [[to_json(x) for x in r] for r in v.fetchall()]}
    return v


def parse_date(v: Any) -> dt.datetime | None:
    """ISO string, TDateTime number or None -> datetime."""
    if v is None or v == '':
        return None
    if isinstance(v, dt.datetime):
        return v
    if isinstance(v, (int, float)):
        return DELPHI_EPOCH + dt.timedelta(days=float(v))
    s = str(v).strip().replace('Z', '')
    try:
        return dt.datetime.fromisoformat(s)
    except ValueError:
        # Delphi code passes dates to otDate variables as text in the local (day-first) format
        for fmt in ('%d.%m.%Y %H:%M:%S', '%d.%m.%Y %H:%M', '%d.%m.%Y', '%d/%m/%Y %H:%M:%S', '%d/%m/%Y', '%d-%m-%Y',
                    '%d.%m.%y', '%d/%m/%y', '%d-%b-%Y', '%d-%b-%y', '%Y%m%d'):
            try:
                return dt.datetime.strptime(s, fmt)
            except ValueError:
                pass
    raise ValueError(f'not a date: {v!r}')


def to_db(value: Any, ora: str | None) -> Any:
    """A JSON value of the given OraType -> a python value for binding."""
    if value is None:
        return None
    if ora == 'date':
        return parse_date(value)
    if ora == 'integer':
        if isinstance(value, bool):
            return int(value)
        if isinstance(value, str):
            value = value.strip().replace(',', '.')
            return None if value == '' else int(float(value))
        return int(value)
    if ora == 'float':
        if isinstance(value, str):
            value = value.strip().replace(',', '.')
            return None if value == '' else float(value)
        return float(value)
    if ora == 'boolean':
        return 1 if value in (True, 1, '1', 'true', 'True', 'T', 'Y') else 0
    if ora == 'blob' and isinstance(value, str):
        return base64.b64decode(value)
    if ora in ('string', 'clob'):
        return value if isinstance(value, str) else str(value)
    return value


DB_TYPE_OF = {
    'string': oracledb.DB_TYPE_VARCHAR,
    'integer': oracledb.DB_TYPE_NUMBER,
    'float': oracledb.DB_TYPE_NUMBER,
    'date': oracledb.DB_TYPE_DATE,
    'boolean': oracledb.DB_TYPE_NUMBER,
    'clob': oracledb.DB_TYPE_CLOB,
    'blob': oracledb.DB_TYPE_BLOB,
    'cursor': oracledb.DB_TYPE_CURSOR,
}

# ALL_ARGUMENTS.DATA_TYPE -> OraType
PLSQL_TYPE = {
    'NUMBER': 'float', 'INTEGER': 'integer', 'BINARY_INTEGER': 'integer', 'PLS_INTEGER': 'integer',
    'FLOAT': 'float', 'BINARY_FLOAT': 'float', 'BINARY_DOUBLE': 'float',
    'DATE': 'date', 'TIMESTAMP': 'date',
    'VARCHAR2': 'string', 'VARCHAR': 'string', 'CHAR': 'string', 'NVARCHAR2': 'string', 'NCHAR': 'string',
    'LONG': 'string', 'ROWID': 'string', 'CLOB': 'clob', 'NCLOB': 'clob', 'BLOB': 'blob', 'RAW': 'blob',
    'REF CURSOR': 'cursor', 'PL/SQL BOOLEAN': 'boolean', 'BOOLEAN': 'boolean',
}


def plsql_type(data_type: str | None) -> str:
    if not data_type:
        return 'string'
    d = data_type.upper()
    if d.startswith('TIMESTAMP'):
        return 'date'
    return PLSQL_TYPE.get(d, 'string')
