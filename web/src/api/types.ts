/*
 * Oracle gateway contract.
 *
 * The transpiled Delphi code talks to Oracle exactly as before (DOA components:
 * TOracleSession, TOracleDataSet, TOracleQuery, TOraclePackage).  Every database
 * round-trip ends up in one of the calls below, so the real backend (Node /
 * Express, to be written) only has to implement these endpoints against the
 * existing Oracle schema and PL/SQL packages — no business logic moves.
 *
 *   POST /api/logon          LogonRequest        -> LogonResult
 *   POST /api/logoff
 *   POST /api/query          QueryRequest        -> QueryResult
 *   POST /api/execute        ExecuteRequest      -> ExecuteResult
 *   POST /api/package        PackageCallRequest  -> PackageCallResult
 *   POST /api/apply-record   ApplyRecordRequest  -> ApplyRecordResult
 *   POST /api/commit | /api/rollback | /api/savepoint
 *
 * All requests carry the session id returned by logon (header X-SB-Session).
 */

export type OraType = 'string' | 'integer' | 'float' | 'date' | 'boolean' | 'blob' | 'clob' | 'cursor' | 'unknown';

export interface LogonRequest { username: string; password: string; database: string }
export interface LogonResult {
  sessionId: string;
  username: string;
  database: string;
  /** Oracle session id (V$SESSION.SID) used by SmartBank's alerts (MsgToUser_%d). */
  sid: number;
  serverDate: string;
}

export interface ColumnDef { name: string; type: OraType; size?: number; precision?: number; scale?: number }

export interface BindValue { name: string; type?: OraType; value: unknown }

export interface QueryRequest {
  /** Stable id of the component issuing the query: "<Module>/<Unit>/<Form>.<DataSet>". */
  source: string;
  sql: string;
  variables: BindValue[];
  /** Mock mode only: field definitions from the DFM help synthesise realistic rows. */
  fieldHints?: ColumnDef[];
  maxRows?: number;
}
export interface QueryResult {
  columns: ColumnDef[];
  /** Row values in column order; dates as ISO strings. ROWID, if selected, is a normal column. */
  rows: unknown[][];
}

export interface ExecuteRequest { source: string; sql: string; variables: BindValue[] }
export interface ExecuteResult {
  rowsProcessed: number;
  /** Values of OUT / IN OUT bind variables after execution. */
  variables: Record<string, unknown>;
  /** For SELECT executed through TOracleQuery: fetched rows. */
  columns?: ColumnDef[];
  rows?: unknown[][];
}

export type PackageCallKind = 'procedure' | 'integer' | 'float' | 'string' | 'date' | 'boolean' | 'variant';
export interface PackageCallRequest {
  source: string;
  package: string;
  name: string;
  kind: PackageCallKind;
  /** DOA ParameterMode: 'named' → [name, value, name, value…]; 'positional' → [value…]. */
  mode: 'named' | 'positional';
  /** Parameters; OUT parameters are given as {out: OraType}. */
  params: (unknown | { out: OraType })[];
}
export interface PackageCallResult {
  result: unknown;
  /** OUT parameter values by position (DOA GetParameter(index)). */
  outParams: Record<number, unknown>;
}

export type ApplyAction = 'insert' | 'update' | 'delete' | 'lock' | 'refresh';
export interface ApplyRecordRequest {
  source: string;
  /** The dataset SELECT, from which the server derives the updating table (DOA semantics). */
  sql: string;
  updatingTable?: string;
  action: ApplyAction;
  rowid?: string | null;
  values: Record<string, unknown>;
  oldValues: Record<string, unknown>;
  /** Fields belonging to the updating table (non-calculated, non-lookup). */
  fields: string[];
}
export interface ApplyRecordResult { rowid?: string | null; values?: Record<string, unknown> }

export interface OracleApi {
  readonly name: string;
  logon(r: LogonRequest): Promise<LogonResult>;
  logoff(): Promise<void>;
  query(r: QueryRequest): Promise<QueryResult>;
  execute(r: ExecuteRequest): Promise<ExecuteResult>;
  callPackage(r: PackageCallRequest): Promise<PackageCallResult>;
  applyRecord(r: ApplyRecordRequest): Promise<ApplyRecordResult>;
  commit(): Promise<void>;
  rollback(): Promise<void>;
  savepoint(name: string): Promise<void>;
  rollbackToSavepoint(name: string): Promise<void>;
}

export class OracleError extends Error {
  constructor(public errorCode: number, message: string) { super(message); }
}
