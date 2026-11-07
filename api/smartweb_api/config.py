"""Settings, read from environment variables (or an .env file next to the api folder).

  SB_DATABASES          JSON map of database alias -> DSN, e.g.
                        {"PDBNBC": "192.168.2.10:1521/PDBNBC", "TEST": "10.0.0.5:1521/ORCLPDB"}
                        The alias is what users pick on the logon screen (TOracleSession.LogonDatabase).
  SB_DEFAULT_DATABASE   alias used when the client sends none (default: first entry)
  SB_ORACLE_CLIENT_LIB  path of Oracle Instant Client -> python-oracledb "thick" mode
                        (needed for Oracle 11g and older; 12.1+ works in the default thin mode)
  SB_SESSION_TIMEOUT    idle minutes before a web session's Oracle connection is closed (default 60)
  SB_MAX_ROWS           upper bound of rows returned by one query (default 1000000; a cut-off result is logged as TRUNCATED)
  SB_ALLOWLIST          off | audit | enforce  — statements not found in the module registry are
                        allowed (off), allowed and written to SB_AUDIT_FILE (audit, default), or refused
  SB_AUDIT_FILE         default: api/logs/unknown-sql.log
  SB_SLOW_MS            statements slower than this (milliseconds) are written to SB_SLOW_FILE (default 2000, 0 = off)
  SB_SLOW_FILE          default: api/logs/slow-sql.log
  SB_CORS_ORIGINS       comma-separated origins allowed to call the API directly (default: none;
                        the web app normally reaches the API through its own server's /api proxy)
"""
from __future__ import annotations

import json
import os
from dataclasses import dataclass, field
from pathlib import Path

API_DIR = Path(__file__).resolve().parent.parent


def _load_dotenv() -> None:
    env = API_DIR / '.env'
    if not env.exists():
        return
    for line in env.read_text(encoding='utf-8').splitlines():
        line = line.strip()
        if not line or line.startswith('#') or '=' not in line:
            continue
        k, v = line.split('=', 1)
        os.environ.setdefault(k.strip(), v.strip().strip('"').strip("'"))


@dataclass
class Settings:
    databases: dict[str, str] = field(default_factory=dict)
    default_database: str = ''
    oracle_client_lib: str = ''
    session_timeout_min: int = 60
    max_rows: int = 1_000_000
    allowlist: str = 'audit'
    audit_file: Path = API_DIR / 'logs' / 'unknown-sql.log'
    cors_origins: list[str] = field(default_factory=list)
    slow_ms: int = 2000
    slow_file: Path = API_DIR / 'logs' / 'slow-sql.log'
    # ALTER SESSION at logon (the desktop clients got these from NLS_* in the Windows registry)
    nls_date_format: str = 'DD.MM.YYYY'
    nls_numeric_characters: str = ''

    @classmethod
    def from_env(cls) -> 'Settings':
        _load_dotenv()
        dbs = json.loads(os.environ.get('SB_DATABASES', '{}') or '{}')
        dbs = {str(k).upper(): str(v) for k, v in dbs.items()}
        s = cls(
            databases=dbs,
            default_database=os.environ.get('SB_DEFAULT_DATABASE', '').upper() or (next(iter(dbs), '')),
            oracle_client_lib=os.environ.get('SB_ORACLE_CLIENT_LIB', ''),
            session_timeout_min=int(os.environ.get('SB_SESSION_TIMEOUT', '60')),
            max_rows=int(os.environ.get('SB_MAX_ROWS', '1000000')),
            allowlist=os.environ.get('SB_ALLOWLIST', 'audit').lower(),
            audit_file=Path(os.environ.get('SB_AUDIT_FILE', str(API_DIR / 'logs' / 'unknown-sql.log'))),
            slow_ms=int(os.environ.get('SB_SLOW_MS', '2000')),
            slow_file=Path(os.environ.get('SB_SLOW_FILE', str(API_DIR / 'logs' / 'slow-sql.log'))),
            cors_origins=[o.strip() for o in os.environ.get('SB_CORS_ORIGINS', '').split(',') if o.strip()],
            nls_date_format=os.environ.get('SB_NLS_DATE_FORMAT', 'DD.MM.YYYY'),
            nls_numeric_characters=os.environ.get('SB_NLS_NUMERIC_CHARACTERS', ''),
        )
        if s.allowlist not in ('off', 'audit', 'enforce'):
            raise ValueError('SB_ALLOWLIST must be off, audit or enforce')
        return s

    def dsn_for(self, alias: str) -> str:
        a = (alias or self.default_database).upper()
        if a in self.databases:
            return self.databases[a]
        if not self.databases:
            # no map configured: the alias itself is a TNS name or an Easy Connect string
            return alias
        raise KeyError(a)


settings = Settings.from_env()
