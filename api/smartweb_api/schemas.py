"""Request/response models — the same contract as web/src/api/types.ts."""
from __future__ import annotations

from typing import Any, Literal

from pydantic import BaseModel, Field

OraType = Literal['string', 'integer', 'float', 'date', 'boolean', 'blob', 'clob', 'cursor', 'unknown']


class ErrorBody(BaseModel):
    errorCode: int = Field(description='ORA error number (EOracleError.ErrorCode), 401 for an unknown session')
    message: str = Field(examples=['ORA-01403: no data found'])


class LogonRequest(BaseModel):
    username: str = Field(examples=['SABUHI'])
    password: str
    database: str = Field('', description='Alias from SB_DATABASES (TOracleSession.LogonDatabase)', examples=['PDBNBC'])


class LogonResult(BaseModel):
    sessionId: str = Field(description='Send it back in the X-SB-Session header')
    username: str
    database: str
    sid: int = Field(description='V$SESSION.SID of the Oracle session')
    serverDate: str = Field(examples=['2026-10-29T12:00:00'])


class ColumnDef(BaseModel):
    name: str
    type: OraType
    size: int | None = None
    precision: int | None = None
    scale: int | None = None


class BindValue(BaseModel):
    name: str = Field(examples=['ACCID'])
    type: OraType | None = Field(None, description='DOA variable type; dates are ISO strings')
    value: Any = None


class QueryRequest(BaseModel):
    source: str = Field('', description='Issuing component, "<Form class>.<Dataset>"', examples=['TAccountMainForm.AccountsData'])
    sql: str = Field(examples=['select * from avalute where valute = :VAL'])
    variables: list[BindValue] = []
    maxRows: int | None = None
    fieldHints: list[ColumnDef] | None = Field(None, description='Ignored by the server (mock mode only)')


class QueryResult(BaseModel):
    columns: list[ColumnDef]
    rows: list[list[Any]]


class ExecuteRequest(BaseModel):
    source: str = ''
    sql: str = Field(examples=['begin sb_adm.set_company(:COMP_ID); end;'])
    variables: list[BindValue] = []


class ExecuteResult(BaseModel):
    rowsProcessed: int
    variables: dict[str, Any] = Field(description='Values of all bind variables after execution (IN OUT)')
    columns: list[ColumnDef] | None = None
    rows: list[list[Any]] | None = None


class PackageCallRequest(BaseModel):
    source: str = ''
    package: str = Field(examples=['SBOP'], description="Package name; '' calls a schema-level procedure/function (DOA TOraclePackage without PackageName)")
    name: str = Field(examples=['GetCurrentDate'])
    kind: Literal['procedure', 'integer', 'float', 'string', 'date', 'boolean', 'variant'] = 'procedure'
    mode: Literal['named', 'positional'] = Field('positional', description="DOA ParameterMode; named: [name, value, name, value …]")
    params: list[Any] = Field([], description='Values; an OUT parameter is given as {"out": "<type>"}')


class PackageCallResult(BaseModel):
    result: Any = None
    outParams: dict[int, Any] = Field({}, description='Parameter values after the call, by position (GetParameter)')


class ApplyRecordRequest(BaseModel):
    source: str = ''
    sql: str = Field(description='The dataset SELECT; the updating table is its first FROM table (DOA)')
    updatingTable: str | None = None
    action: Literal['insert', 'update', 'delete', 'lock', 'refresh']
    rowid: str | None = None
    values: dict[str, Any] = {}
    oldValues: dict[str, Any] = {}
    fields: list[str] = []


class ApplyRecordResult(BaseModel):
    rowid: str | None = None
    values: dict[str, Any] | None = None


class SavepointRequest(BaseModel):
    name: str | None = None
    savepoint: str | None = Field(None, description='/rollback only: roll back to this savepoint')


class OkResult(BaseModel):
    ok: bool = True
