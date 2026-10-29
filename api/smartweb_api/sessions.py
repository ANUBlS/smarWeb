"""Web sessions: one Oracle connection per logged-on user, exactly like the desktop SmartBank
(one TOracleSession per user, AutoCommit off, explicit Commit/Rollback).

Requests of one session are serialized (an Oracle connection is not used concurrently), and idle
sessions are closed after SB_SESSION_TIMEOUT minutes.
"""
from __future__ import annotations

import re
import secrets
import threading
import time
from dataclasses import dataclass, field
from typing import Any, Callable

import oracledb

from .config import settings

_thick_done = False


def _ensure_mode() -> None:
    global _thick_done
    if settings.oracle_client_lib and not _thick_done:
        oracledb.init_oracle_client(lib_dir=settings.oracle_client_lib)
        _thick_done = True


# Factory used to open connections; tests replace it with a fake driver.
Connector = Callable[[str, str, str], Any]


def _connect(user: str, password: str, dsn: str):
    _ensure_mode()
    conn = oracledb.connect(user=user, password=password, dsn=dsn)
    conn.autocommit = False
    return conn


connector: Connector = _connect

NLS_SAFE = re.compile(r"^[\w .,/:\-]*$")


def _apply_nls(conn) -> None:
    """Session date format etc. as on the desktop clients: SQL that compares a DATE with a string
    (`sys_date between :begin_dat` with an otString variable) depends on it."""
    parts = []
    for key, value in (('NLS_DATE_FORMAT', settings.nls_date_format), ('NLS_NUMERIC_CHARACTERS', settings.nls_numeric_characters)):
        if value:
            if not NLS_SAFE.match(value):
                raise ValueError(f'SB_{key}: invalid value {value!r}')
            parts.append(f"{key} = '{value}'")
    if parts:
        cur = conn.cursor()
        try:
            cur.execute('alter session set ' + ' '.join(parts))
        finally:
            cur.close()


@dataclass
class Session:
    id: str
    username: str
    database: str
    conn: Any
    sid: int = 0
    lock: threading.RLock = field(default_factory=threading.RLock)
    last_used: float = field(default_factory=time.monotonic)
    # per-session caches (column lists of updating tables, PL/SQL argument lists)
    table_cols: dict = field(default_factory=dict)
    arguments: dict = field(default_factory=dict)

    def touch(self):
        self.last_used = time.monotonic()


class SessionStore:
    def __init__(self):
        self._items: dict[str, Session] = {}
        self._lock = threading.Lock()

    def open(self, username: str, password: str, database: str) -> Session:
        dsn = settings.dsn_for(database)
        conn = connector(username, password, dsn)
        _apply_nls(conn)
        s = Session(id=secrets.token_urlsafe(24), username=username.upper(),
                    database=(database or settings.default_database).upper(), conn=conn)
        with self._lock:
            self._items[s.id] = s
        return s

    def get(self, sid: str | None) -> Session | None:
        self.sweep()
        if not sid:
            return None
        with self._lock:
            s = self._items.get(sid)
        if s:
            s.touch()
        return s

    def close(self, sid: str) -> None:
        with self._lock:
            s = self._items.pop(sid, None)
        if s:
            try:
                with s.lock:
                    s.conn.rollback()
                    s.conn.close()
            except Exception:  # noqa: BLE001 - connection may already be gone
                pass

    def sweep(self) -> None:
        limit = settings.session_timeout_min * 60
        now = time.monotonic()
        with self._lock:
            idle = [k for k, s in self._items.items() if now - s.last_used > limit]
        for k in idle:
            self.close(k)

    def count(self) -> int:
        with self._lock:
            return len(self._items)


store = SessionStore()
