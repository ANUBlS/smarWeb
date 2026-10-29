/* Direct Oracle Access (DOA) components, routed to the Oracle gateway API. */
import { PasException, routine, ValueRef, TObject } from '../core';
import { registerBuiltin } from '../env';
import { num, str } from '../pascal';
import { invalidate } from '../ui';
import { TComponent } from '../vcl/component';
import { TStrings, Indexed } from '../vcl/classes';
import { TDataSet, Row } from './dataset';
import { TField } from './fields';
import { defineGlobal } from '../stdlib';
import { synthesizeColumn } from '../../api/mock';
import { api, OracleError, BindValue, OraType, PackageCallKind, ColumnDef } from '../../api';
import { toDelphi, fromDelphi } from '../datetime';
import { logger } from '../log';

/* ------------------------------------------------------------------ connection state */

export const oraSession = {
  connected: false,
  username: '',
  password: '',
  database: '',
  sid: 0,
  serverDate: '',
};

export function toOracleError(e: unknown): never {
  if (e instanceof OracleError) {
    const pe = new PasException('EOracleError', e.message, ['edatabaseerror', 'exception']);
    (pe as any).errorCode = e.errorCode;
    throw pe;
  }
  throw e;
}

/** Values sent to the gateway: TDateTime numbers become ISO strings for date variables. */
function bindOut(v: unknown, type?: OraType): unknown {
  if (type === 'date' && typeof v === 'number') {
    const d = fromDelphi(v);
    const p = (n: number) => String(n).padStart(2, '0');
    return `${d.getFullYear()}-${p(d.getMonth() + 1)}-${p(d.getDate())}T${p(d.getHours())}:${p(d.getMinutes())}:${p(d.getSeconds())}`;
  }
  return v === undefined ? null : v;
}
function bindIn(v: unknown, type?: OraType): unknown {
  if ((type === 'date') && typeof v === 'string') { const d = new Date(v); return isNaN(d.getTime()) ? v : toDelphi(d); }
  return v;
}

/* DOA variable type constants (otString …) and parameter-out markers (parString …). */
const OT: Record<string, OraType> = {
  otinteger: 'integer', otfloat: 'float', otstring: 'string', otdate: 'date', otlong: 'string', otlongraw: 'blob',
  otblob: 'blob', otclob: 'clob', otcursor: 'cursor', otchar: 'string', otvarchar2: 'string', otsubst: 'string',
  otboolean: 'boolean', otraw: 'blob', otplsqlstring: 'string', ottimestamp: 'date', otnumber: 'float',
};
const OT_CODES: Record<number, OraType> = { 3: 'integer', 4: 'float', 5: 'string', 12: 'date', 8: 'string', 102: 'cursor', 113: 'blob', 112: 'clob', 252: 'boolean', 1: 'string', 96: 'string' };
for (const [k, v] of Object.entries(OT)) defineGlobal(k, k);
const PAR: Record<string, OraType> = { parstring: 'string', parinteger: 'integer', parfloat: 'float', pardate: 'date', parboolean: 'boolean', parcursor: 'cursor', parblob: 'blob', parclob: 'clob' };
export class OutParam { constructor(public out: OraType) {} }
for (const [k, v] of Object.entries(PAR)) defineGlobal(k, new OutParam(v));
defineGlobal('pmNamed', 'pmnamed');
defineGlobal('pmPositional', 'pmpositional');

function otType(t: unknown): OraType {
  if (typeof t === 'number') return OT_CODES[t] ?? 'string';
  return OT[String(t ?? '').toLowerCase()] ?? 'string';
}

/* ------------------------------------------------------------------ variables mixin */

class Variables {
  map = new Map<string, { name: string; type: OraType; value: unknown }>();
  static key(n: unknown) { return str(n).replace(/^:/, '').toUpperCase(); }
  declare(name: unknown, type: unknown) {
    const k = Variables.key(name);
    if (!this.map.has(k)) this.map.set(k, { name: k, type: otType(type), value: null });
    else this.map.get(k)!.type = otType(type);
    // otSubst (DFM code 1): the value is spliced into the SQL text, never bound
    (this.map.get(k) as any).subst = type === 1 || String(type ?? '').toLowerCase() === 'otsubst';
  }
  declareIfMissing(name: unknown, type: unknown) { if (!this.map.has(Variables.key(name))) this.declare(name, type); }
  set(name: unknown, v: unknown) {
    const k = Variables.key(name);
    const e = this.map.get(k);
    if (e) e.value = v; else this.map.set(k, { name: k, type: typeof v === 'number' ? 'float' : 'string', value: v });
  }
  get(name: unknown) { return this.map.get(Variables.key(name))?.value ?? null; }
  binds(sql: string): BindValue[] {
    // send declared variables that occur in the SQL (DOA ignores others); substitution vars are inlined.
    const out: BindValue[] = [];
    for (const v of this.map.values()) {
      if ((v as any).subst) continue;
      if (new RegExp(':' + v.name.replace(/[$#]/g, '\\$&') + '\\b', 'i').test(sql)) out.push({ name: v.name, type: v.type, value: bindOut(v.value, v.type) });
    }
    return out;
  }
  substitute(sql: string) {
    // otSubst variables are textually replaced before execution (DOA semantics)
    let s = sql;
    for (const v of this.map.values()) {
      if (!(v as any).subst) continue;
      const name = v.name.replace(/[$#]/g, '\\$&');
      const text = str(v.value);
      // an unassigned sort variable ("order by :Title" before the first title click) drops the clause
      if (!text.trim()) s = s.replace(new RegExp('\\b(order|group)\\s+by\\s+:' + name + '\\b', 'gi'), '');
      s = s.replace(new RegExp(':' + name + '\\b', 'gi'), text);
    }
    return s;
  }
}

/** TVariables view of a DOA dataset / query: forwards to the owner's variable methods. */
class TVariablesView extends TObject {
  constructor(private owner: any) { super(); }
  SetVariable(n: unknown, v: unknown) { return this.owner.SetVariable(n, v); }
  GetVariable(n: unknown) { return this.owner.GetVariable(n); }
  DeclareVariable(n: unknown, t: unknown) { return this.owner.DeclareVariable(n, t); }
  DeleteVariable(n: unknown) { return this.owner.DeleteVariable(n); }
  DeleteVariables() { return this.owner.DeleteVariables(); }
  ClearVariables() { return this.owner.ClearVariables?.(); }
  get Count() { return this.owner.vars.map.size; }
  Name(i: unknown) { return [...this.owner.vars.map.keys()][num(i)] ?? ''; }
  Exists(n: unknown) { return this.owner.vars.map.has(Variables.key(n)); }
}
const variableViews = new WeakMap<object, TVariablesView>();
function variablesOf(owner: object) {
  let v = variableViews.get(owner);
  if (!v) { v = new TVariablesView(owner); variableViews.set(owner, v); }
  return v;
}

function initVarsFromDfm(vars: Variables, dfm: Record<string, any>) {
  const list = dfm['Variables.Data'];
  if (Array.isArray(list)) for (const v of list) vars.declare(v.name, v.type);
}

/* ------------------------------------------------------------------ TOracleSession */

export class TOracleSession extends TComponent {
  LogonUsername = '';
  LogonPassword = '';
  LogonDatabase = '';
  AutoCommit = false;
  ThreadSafe = false;
  Pooling = 'spnone';
  Preferences = { UseOCI7: false, ConvertCRLF: true, TrimStringFields: true };
  BytesPerCharacter = 'bcautodetect';
  NullValue = 'nvnull';
  OptimizerGoal = 'ogunchanged';
  IsolationLevel = 'ilunchanged';
  SQLTrace = 'stunchanged';
  StatementCache = false;
  DesignConnection = false;
  RollbackOnDisconnect = false;
  get Connected() { return oraSession.connected; }
  set Connected(v: boolean) { if (v) void this.LogOn(); else void this.LogOff(); }
  override pset(l: string, v: unknown) {
    if (l === 'connected') return (v ? this.LogOn() : this.LogOff()).then(() => true);
    return super.pset(l, v);
  }
  async LogOn() {
    if (oraSession.connected) return;
    try {
      const r = await api.logon({ username: this.LogonUsername, password: this.LogonPassword, database: this.LogonDatabase });
      Object.assign(oraSession, { connected: true, username: r.username, database: r.database, sid: r.sid, serverDate: r.serverDate });
    } catch (e) { toOracleError(e); }
    invalidate();
  }
  async LogOff() { /* the shell owns the connection */ }
  async Commit() { try { await api.commit(); } catch (e) { toOracleError(e); } }
  async Rollback() { try { await api.rollback(); } catch (e) { toOracleError(e); } }
  async Savepoint(n: unknown) { await api.savepoint(str(n)); }
  async RollbackToSavepoint(n: unknown) { await api.rollbackToSavepoint(str(n)); }
  async CheckConnection() { return oraSession.connected ? 'ccok' : 'ccerror'; }
  get InTransaction() { return false; }
  get ServerVersion() { return 'Oracle Database (gateway)'; }
  get ExternalSVC() { return 0; }
  get ExternalENV() { return 0; }
  get SID() { return oraSession.sid; }
  async ExecSQL(sql: unknown) {
    try { const r = await api.execute({ source: this.Name, sql: str(sql), variables: [] }); return r.rowsProcessed; } catch (e) { toOracleError(e); }
  }
  ApplyUpdates() { /* */ }
  Share() { /* */ }
  DBMS_Application_Info = { Set_Module: () => undefined, Set_Action: () => undefined, Set_Client_Info: () => undefined };
}
registerBuiltin('TOracleSession', TOracleSession);

/* ------------------------------------------------------------------ TOracleDataSet */

export class TOracleDataSet extends TDataSet {
  /** DOA writes a field assigned in dsBrowse into the current record buffer (nothing is posted);
   *  SmartBank code relies on it (e.g. setting defaults right after Open, before Insert). */
  protected override browseWrite(f: import('./fields').TField, v: unknown) {
    const row = this.curRow();
    if (row) row.v[f.key] = v;
    return true;
  }
  SQL: TStrings;
  Session: TOracleSession | null = null;
  vars = new Variables();
  LockingMode = 'lmcheckimmediate';
  QueryAllRecords = true;
  CountAllRecords = false;
  CommitOnPost = true;
  UpdatingTable = '';
  UniqueFields = '';
  SequenceField: unknown = null;
  RefreshOptions: string[] = [];
  ReturnOptions = 'roalways';
  MasterFields = '';
  DetailFields = '';
  QBEMode = false;
  Optimize = true;
  Debug = false;
  StringFieldsOnly = false;
  Unidirectional = false;
  RowsProcessed = 0;
  protected _master: TDataSet | null = null;
  /** Identifier sent with queries so the backend can map statements (module/unit/component). */
  source = '';

  constructor() {
    super();
    this.SQL = new TStrings();
    this.SQL.onChange = () => {
      if (this.Active) { this._state = 'dsinactive'; this.rows = []; this.view = []; this.cur = -1; this._bof = this._eof = true; invalidate(); }
    };
  }
  initFromDfm() { initVarsFromDfm(this.vars, this.dfm); }

  get Master() { return this._master; }
  set Master(m: TDataSet | null) {
    this._master?.details.delete(this);
    this._master = m;
    m?.details.add(this);
  }

  /* variables */
  /** DOA `Variables` (TVariables): `with Variables do SetVariable(…)`, Variables.Count … */
  get Variables() { return variablesOf(this as any); }
  DeclareVariable(n: unknown, t: unknown) { this.vars.declare(n, t); }
  DeleteVariable(n: unknown) { this.vars.map.delete(Variables.key(n)); }
  DeleteVariables() { this.vars.map.clear(); }
  ClearVariables() { for (const v of this.vars.map.values()) v.value = null; }
  SetVariable(n: unknown, v: unknown) { this.vars.set(n, v); }
  GetVariable(n: unknown) { return this.vars.get(n); }
  get VariableCount() { return this.vars.map.size; }
  VariableName(i: unknown) { return ':' + [...this.vars.map.keys()][num(i)]; }
  VariableIndex(n: unknown) { return [...this.vars.map.keys()].indexOf(Variables.key(n)); }
  VariableType(i: unknown) { return [...this.vars.map.values()][num(i)]?.type ?? 'string'; }
  SetComplexVariable(n: unknown, v: unknown) { this.vars.set(n, v); }
  SetLongVariable(n: unknown, v: unknown) { this.vars.set(n, v); }

  protected sourceId() { return this.source || `${this.root?.__cls?.name ?? this.root?.Name ?? '?'}.${this.Name}`; }

  protected override async doOpen() {
    const sql = this.vars.substitute(this.SQL.Text);
    if (!sql.trim()) throw new PasException('EOracleError', `${this.Name}: SQL is empty`, ['edatabaseerror', 'exception']);
    try {
      const hints: ColumnDef[] = this.fields.filter((f) => f.FieldKind === 'fkdata').map((f) => ({
        name: f.FieldName,
        type: f.fieldType === 'datetime' || f.fieldType === 'time' ? 'date' : f.fieldType === 'memo' ? 'clob' : (f.fieldType as OraType),
        size: f.Size,
      }));
      const r = await api.query({ source: this.sourceId(), sql, variables: this.vars.binds(sql), fieldHints: hints });
      this.loadRows(r.columns, r.rows);
      this.RowsProcessed = r.rows.length;
    } catch (e) { toOracleError(e); }
  }

  protected override missingField(name: string): TField | null {
    if (api.name !== 'mock' || this.persistentFields || !this.Active || !name) return null;
    const { type, values } = synthesizeColumn(this.SQL.Text, name, this.rows.length);
    const ft = type === 'integer' ? 'integer' : type === 'float' ? 'float' : type === 'date' ? 'datetime' : 'string';
    const vals = ft === 'datetime' ? values.map((v) => (typeof v === 'string' ? toDelphi(new Date(v)) : v)) : values;
    return this.addSyntheticField(name, ft, vals);
  }

  /** DOA: refreshing an inactive dataset opens it. */
  override async Refresh() {
    if (!this.Active) { await this.Open(); return; }
    await super.Refresh();
  }

  override async Open() {
    // DOA: a detail dataset takes its variables from the master before opening.
    if (this._master && this._master.Active) this.copyMasterValues();
    await super.Open();
  }

  private copyMasterValues() {
    if (!this._master) return;
    const mf = this.MasterFields.split(';').map((s) => s.trim()).filter(Boolean);
    const df = this.DetailFields.split(';').map((s) => s.trim()).filter(Boolean);
    mf.forEach((m, i) => {
      const f = this._master!.FindField(m);
      const name = df[i] ?? m;
      // DOA binds master values with the master field's type (a date stays a DATE)
      if (f) this.vars.declareIfMissing(name, f.fieldType.startsWith('date') || f.fieldType === 'time' ? 'otdate'
        : f.fieldType === 'integer' ? 'otinteger' : f.fieldType === 'float' ? 'otfloat' : 'otstring');
      this.vars.set(name, f ? f.Value : null);
    });
  }
  override async masterChanged() {
    if (!this._master) return;
    if (!this._master.Active) { await this.Close(); return; }
    this.copyMasterValues();
    if (this.Active) await this.Refresh();
    // a closed detail whose SQL is only assigned by code later (SQL.Text := … ; Open) waits for that Open
    else if (this.SQL.Text.trim() !== '') await this.Open();
  }

  protected override async applyRecord(action: 'insert' | 'update' | 'delete', row: Row, values: Record<string, unknown>, old: Record<string, unknown>) {
    if (this.hasHandler('OnApplyRecord')) {
      const applied = new ValueRef(false);
      const newRowId = new ValueRef('');
      await this.fireRaw('OnApplyRecord', this, action === 'insert' ? 'I' : action === 'update' ? 'U' : 'D', applied, newRowId);
      if (applied.value) {
        // DOA commits after the post however the record was applied (here: by a package call)
        if (this.CommitOnPost) { try { await api.commit(); } catch (e) { toOracleError(e); } }
        return { rowid: newRowId.value || row.rowid };
      }
    }
    if (this.ReadOnly) throw new PasException('EDatabaseError', `${this.Name}: Cannot modify a read-only dataset`, ['exception']);
    const fieldNames = this.fields.filter((f) => f.FieldKind === 'fkdata').map((f) => f.key);
    const toApi = (o: Record<string, unknown>) => {
      const out: Record<string, unknown> = {};
      for (const f of this.fields) if (f.FieldKind === 'fkdata') out[f.key] = bindOut(o[f.key], f.fieldType.startsWith('date') || f.fieldType === 'time' ? 'date' : undefined);
      return out;
    };
    try {
      const r = await api.applyRecord({ source: this.sourceId(), sql: this.SQL.Text, updatingTable: this.UpdatingTable || undefined,
        action, rowid: row.rowid ?? null, values: toApi(values), oldValues: toApi(old), fields: fieldNames });
      if (this.CommitOnPost) await api.commit();
      const back: Record<string, unknown> = {};
      if (r.values) for (const f of this.fields) if (f.key in r.values) back[f.key] = bindIn(r.values[f.key], f.fieldType.startsWith('date') ? 'date' : undefined);
      return { rowid: r.rowid, values: back };
    } catch (e) { toOracleError(e); }
  }

  async ExecSQL() {
    try {
      const sql = this.vars.substitute(this.SQL.Text);
      const r = await api.execute({ source: this.sourceId(), sql, variables: this.vars.binds(sql) });
      for (const [k, v] of Object.entries(r.variables ?? {})) this.vars.set(k, v);
      this.RowsProcessed = r.rowsProcessed;
    } catch (e) { toOracleError(e); }
  }
  async RefreshRecord() { await this.notifyDataChange(null); }
  async Lock() { /* */ }
  async CountQueryHits() { return this.RecordCount; }
  async FetchAll() { /* rows are fetched completely */ }
  get QBEDefinition() { return {}; }
  async ExecuteQBE() { await this.Refresh(); }
  CreateFieldsFromDictionary() { /* */ }
  get UpdatesPendingCount() { return 0; }
  RecordIsLocked() { return false; }
}
registerBuiltin('TOracleDataSet', TOracleDataSet);
registerBuiltin('TOracleQueryDataSet', TOracleDataSet);
registerBuiltin('TOraQuery', TOracleDataSet);
registerBuiltin('TQuery', TOracleDataSet);
registerBuiltin('TADOQuery', TOracleDataSet);

/* ------------------------------------------------------------------ TOracleQuery */

export class TOracleQuery extends TComponent {
  SQL: TStrings;
  Session: TOracleSession | null = null;
  vars = new Variables();
  Debug = false;
  Optimize = true;
  Threaded = false;
  Cursor = 0;
  ReadBuffer = 25;
  RowsProcessed = 0;
  protected cols: ColumnDef[] = [];
  protected data: unknown[][] = [];
  protected pos = 0;
  protected executed = false;

  constructor() { super(); this.SQL = new TStrings(); }
  Create(owner?: unknown) { super.Create(owner); }
  initFromDfm() { initVarsFromDfm(this.vars, this.dfm); }

  /** DOA `Variables` (TVariables): `with Variables do SetVariable(…)`, Variables.Count … */
  get Variables() { return variablesOf(this as any); }
  DeclareVariable(n: unknown, t: unknown) { this.vars.declare(n, t); }
  DeleteVariable(n: unknown) { this.vars.map.delete(Variables.key(n)); }
  DeleteVariables() { this.vars.map.clear(); }
  ClearVariables() { for (const v of this.vars.map.values()) v.value = null; }
  SetVariable(n: unknown, v: unknown) { this.vars.set(n, v); }
  GetVariable(n: unknown) {
    const e = this.vars.map.get(Variables.key(n));
    return e ? bindIn(e.value, e.type) : null;
  }
  get VariableCount() { return this.vars.map.size; }
  VariableName(i: unknown) { return ':' + [...this.vars.map.keys()][num(i)]; }
  VariableIndex(n: unknown) { return [...this.vars.map.keys()].indexOf(Variables.key(n)); }
  SetComplexVariable(n: unknown, v: unknown) { this.vars.set(n, v); }
  SetLongVariable(n: unknown, v: unknown) { this.vars.set(n, v); }

  protected sourceId() { return `${this.root?.__cls?.name ?? this.root?.Name ?? '?'}.${this.Name}`; }

  async Execute() {
    const sql = this.vars.substitute(this.SQL.Text);
    try {
      const r = await api.execute({ source: this.sourceId(), sql, variables: this.vars.binds(sql) });
      for (const [k, v] of Object.entries(r.variables ?? {})) {
        const e = this.vars.map.get(Variables.key(k));
        if (e) e.value = v;
      }
      this.cols = r.columns ?? [];
      this.data = r.rows ?? [];
      this.pos = 0;
      this.RowsProcessed = r.rowsProcessed;
      this.executed = true;
    } catch (e) { toOracleError(e); }
  }
  async ExecuteArray() { await this.Execute(); }
  async Describe() { /* */ }
  Close() { this.data = []; this.pos = 0; this.executed = false; }
  get Eof() { return this.pos >= this.data.length; }
  get RowCount() { return this.pos + (this.pos < this.data.length ? 1 : 0); }
  get FieldCount() { return this.cols.length; }
  get StatementType() { return /^\s*select/i.test(this.SQL.Text) ? 'stselect' : 'stother'; }
  Next() { if (this.pos < this.data.length) this.pos++; }
  private colIndex(f: unknown) {
    if (typeof f === 'number') return f;
    const l = str(f).toUpperCase();
    const i = this.cols.findIndex((c) => c.name.toUpperCase() === l);
    if (i < 0) throw new PasException('EOracleError', `Field '${str(f)}' does not exist`, ['edatabaseerror', 'exception']);
    return i;
  }
  Field(f: unknown) {
    const i = this.colIndex(f);
    const v = this.data[this.pos]?.[i] ?? null;
    return bindIn(v, this.cols[i]?.type);
  }
  FieldAsString(f: unknown) { const v = this.Field(f); return v === null ? '' : typeof v === 'number' && this.cols[this.colIndex(f)]?.type === 'date' ? String(v) : str(v); }
  FieldAsInteger(f: unknown) { return Math.trunc(num(this.Field(f))); }
  FieldAsFloat(f: unknown) { return num(this.Field(f)); }
  FieldAsDate(f: unknown) { return num(this.Field(f)); }
  FieldIsNull(f: unknown) { const v = this.Field(f); return v === null || v === undefined || v === ''; }
  FieldName(i: unknown) { return this.cols[num(i)]?.name ?? ''; }
  FieldIndex(n: unknown) { const l = str(n).toUpperCase(); return this.cols.findIndex((c) => c.name.toUpperCase() === l); }
  FieldType(i: unknown) { return this.cols[num(i)]?.type ?? 'string'; }
  FieldSize(i: unknown) { return this.cols[num(i)]?.size ?? 0; }
  FieldExists(n: unknown) { return this.FieldIndex(n) >= 0; }
  get ErrorCode() { return 0; }
  get ErrorMessage() { return ''; }
}
registerBuiltin('TOracleQuery', TOracleQuery);

/* ------------------------------------------------------------------ TOraclePackage */

export class TOraclePackage extends TComponent {
  PackageName = '';
  ParameterMode = 'pmpositional';
  OptionalParameters = true;
  Session: TOracleSession | null = null;
  Cursor = 0;
  Debug = false;
  protected out: Record<number, unknown> = {};

  private async call(kind: PackageCallKind, name: unknown, params: unknown) {
    const arr = Array.isArray(params) ? params : params === undefined ? [] : [params];
    const sent = arr.map((p) => (p instanceof OutParam ? { out: p.out } : typeof p === 'number' || typeof p === 'string' || typeof p === 'boolean' || p === null ? p : str(p)));
    try {
      const r = await api.callPackage({
        source: `${this.root?.__cls?.name ?? this.root?.Name ?? '?'}.${this.Name}`, package: this.PackageName,
        name: str(name), kind, mode: this.ParameterMode === 'pmnamed' ? 'named' : 'positional', params: sent,
      });
      this.out = r.outParams ?? {};
      return kind === 'date' ? bindIn(r.result, 'date') : r.result;
    } catch (e) { toOracleError(e); }
  }
  async CallProcedure(n: unknown, p: unknown) { await this.call('procedure', n, p); }
  async CallIntegerFunction(n: unknown, p: unknown) { return Math.trunc(num(await this.call('integer', n, p))); }
  async CallFloatFunction(n: unknown, p: unknown) { return num(await this.call('float', n, p)); }
  async CallStringFunction(n: unknown, p: unknown) { return str(await this.call('string', n, p)); }
  async CallDateFunction(n: unknown, p: unknown) { return num(await this.call('date', n, p)); }
  async CallBooleanFunction(n: unknown, p: unknown) { return !!(await this.call('boolean', n, p)); }
  async CallVariantFunction(n: unknown, p: unknown) { return this.call('variant', n, p); }
  GetParameter(i: unknown) { return this.out[num(i)] ?? null; }
  override pset(l: string, v: unknown) {
    if (l === 'parametermode') v = String(v).toLowerCase();
    return super.pset(l, v);
  }
}
registerBuiltin('TOraclePackage', TOraclePackage);
registerBuiltin('TOracleStoredProc', TOraclePackage);

export { TField, Indexed, routine, logger };
