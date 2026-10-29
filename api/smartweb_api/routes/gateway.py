"""Oracle gateway — the endpoints every SmartWeb module uses (web/src/api/http.ts)."""
from __future__ import annotations

from fastapi import APIRouter, Depends, Header

from .. import gateway, registry
from ..config import settings
from ..schemas import (ApplyRecordRequest, ApplyRecordResult, ErrorBody, ExecuteRequest, ExecuteResult, LogonRequest,
                       LogonResult, OkResult, PackageCallRequest, PackageCallResult, QueryRequest, QueryResult,
                       SavepointRequest)
from ..sessions import Session, store

router = APIRouter(prefix='/api', tags=['Gateway'], responses={400: {'model': ErrorBody}, 401: {'model': ErrorBody}})


def current(x_sb_session: str | None = Header(None, description='sessionId returned by /api/logon')) -> Session:
    s = store.get(x_sb_session)
    if not s:
        raise gateway.GatewayError(401, 'Session expired or not logged on', status=401)
    return s


def _check(sql: str, source: str, s: Session):
    try:
        registry.check(sql, source, s.username)
    except PermissionError as e:
        raise gateway.GatewayError(20403, str(e), status=403) from e


@router.post('/logon', response_model=LogonResult, summary='Log on (TOracleSession.LogOn)')
def logon(r: LogonRequest):
    """Opens an Oracle connection with the user's own credentials, like the desktop logon dialog."""
    try:
        s = store.open(r.username, r.password, r.database)
    except KeyError as e:
        raise gateway.GatewayError(12154, f'ORA-12154: TNS:could not resolve the connect identifier {e}') from e
    except Exception as e:  # noqa: BLE001 - driver error
        raise gateway.oracle_error(e) from e
    info = gateway.session_info(s)
    return LogonResult(sessionId=s.id, username=s.username, database=s.database, **info)


@router.post('/logoff', response_model=OkResult, summary='Log off (rolls back and closes the connection)')
def logoff(s: Session = Depends(current)):
    store.close(s.id)
    return OkResult()


@router.post('/query', response_model=QueryResult, summary='Open a dataset (TOracleDataSet.Open)')
def query(r: QueryRequest, s: Session = Depends(current)):
    _check(r.sql, r.source, s)
    return gateway.query(s, r.sql, [v.model_dump() for v in r.variables], r.maxRows)


@router.post('/execute', response_model=ExecuteResult, summary='Execute SQL / PL/SQL (TOracleQuery.Execute)')
def execute(r: ExecuteRequest, s: Session = Depends(current)):
    _check(r.sql, r.source, s)
    return gateway.execute(s, r.sql, [v.model_dump() for v in r.variables])


@router.post('/package', response_model=PackageCallResult, summary='Call a package routine (TOraclePackage.Call…)')
def package(r: PackageCallRequest, s: Session = Depends(current)):
    return gateway.call_package(s, r.package, r.name, r.kind, r.mode, r.params)


@router.post('/apply-record', response_model=ApplyRecordResult, summary='Post / delete a dataset record (DOA DML by ROWID)')
def apply_record(r: ApplyRecordRequest, s: Session = Depends(current)):
    return gateway.apply_record(s, r.model_dump())


@router.post('/commit', response_model=OkResult, summary='Session.Commit')
def commit(s: Session = Depends(current)):
    gateway.transaction(s, 'commit')
    return OkResult()


@router.post('/rollback', response_model=OkResult, summary='Session.Rollback / RollbackToSavepoint')
def rollback(r: SavepointRequest | None = None, s: Session = Depends(current)):
    gateway.transaction(s, 'rollback', r.savepoint if r else None)
    return OkResult()


@router.post('/savepoint', response_model=OkResult, summary='Session.Savepoint')
def savepoint(r: SavepointRequest, s: Session = Depends(current)):
    gateway.transaction(s, 'savepoint', r.name)
    return OkResult()


@router.get('/databases', response_model=list[str], summary='Database aliases for the logon screen')
def databases():
    """The aliases of SB_DATABASES (default first) — what TOracleLogon offered as databases."""
    d = list(settings.databases)
    if settings.default_database in d:
        d.remove(settings.default_database)
        d.insert(0, settings.default_database)
    return d


@router.get('/health', tags=['Service'], summary='Liveness and configuration summary')
def health():
    return {'status': 'ok', 'sessions': store.count(), 'databases': list(settings.databases),
            'allowlist': settings.allowlist, 'modules': len(registry.index())}
