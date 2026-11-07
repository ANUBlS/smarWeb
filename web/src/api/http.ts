/*
 * HTTP implementation of the Oracle gateway — the SmartWeb API (api/, FastAPI).
 * Enable with VITE_API_MODE=http and VITE_API_URL=/api (server.mjs proxies /api to API_TARGET).
 */
import type {
  OracleApi, LogonRequest, LogonResult, QueryRequest, QueryResult, ExecuteRequest, ExecuteResult,
  PackageCallRequest, PackageCallResult, ApplyRecordRequest, ApplyRecordResult,
} from './types';
import { OracleError } from './types';
import { logger } from '../runtime/log';
import { currentModule } from '../runtime/audit';

/** Set when the API answered 401 for this session; error boxes are not shown any more until the next logon. */
export const sessionExpired = { value: false };

export class HttpOracleApi implements OracleApi {
  readonly name = 'http';
  private session: string | null = null;
  constructor(private base: string) {}

  private async post<T>(path: string, body?: unknown): Promise<T> {
    const res = await fetch(this.base.replace(/\/$/, '') + path, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', ...(this.session ? { 'X-SB-Session': this.session } : {}) },
      body: body === undefined ? undefined : JSON.stringify(body),
    });
    const data = await res.json().catch(() => ({}));
    if (res.status === 401 && this.session && path !== '/logon') {
      // the API no longer knows this session (restarted, or idle past SB_SESSION_TIMEOUT): back to the logon
      this.session = null;
      sessionExpired.value = true;
      window.dispatchEvent(new CustomEvent('sb-session-expired'));
    }
    if (!res.ok) {
      // Server maps ORA-nnnnn errors to { errorCode, message } so EOracleError handlers keep working.
      throw new OracleError(Number(data.errorCode ?? res.status), String(data.message ?? res.statusText));
    }
    return data as T;
  }

  async databases(): Promise<string[]> {
    const res = await fetch(this.base.replace(/\/$/, '') + '/databases');
    return res.ok ? ((await res.json()) as string[]) : [];
  }
  async logon(r: LogonRequest): Promise<LogonResult> {
    const res = await this.post<LogonResult>('/logon', r);
    sessionExpired.value = false;
    this.session = res.sessionId;
    return res;
  }
  async logoff() { await this.post('/logoff'); this.session = null; }
  /** Çıxışlar → "Oracle sorğuları": every call with its module, dataset, rows and time; the SQL text at debug level. */
  private async traced<T>(kind: string, source: string | undefined, sql: string | undefined, f: () => Promise<T>, info: (r: T) => string): Promise<T> {
    const t0 = performance.now();
    const who = `${currentModule() || '-'} | ${kind} ${source ?? ''}`;
    try {
      const r = await f();
      logger.api(`${who} → ${info(r)} (${Math.round(performance.now() - t0)} ms)`);
      if (sql) logger.debug(sql.trim().replace(/\s+/g, ' ').slice(0, 1000));
      return r;
    } catch (e) {
      logger.api(`${who} ✗ ${(e as Error)?.message?.split('\n')[0] ?? e} (${Math.round(performance.now() - t0)} ms)`);
      if (sql) logger.debug(sql.trim().replace(/\s+/g, ' ').slice(0, 1000));
      throw e;
    }
  }
  query(r: QueryRequest) {
    return this.traced('query', r.source, r.sql, () => this.post<QueryResult>('/query', { ...r, fieldHints: undefined }),
      (x) => `${x.rows?.length ?? 0} row(s)${x.more ? '+' : ''}`);
  }
  fetchRows(cursorId: string, count: number) { return this.post<{ rows: unknown[][]; more: boolean }>('/fetch', { cursorId, count }); }
  async closeCursor(cursorId: string) { await this.post('/close-cursor', { cursorId }); }
  execute(r: ExecuteRequest) {
    return this.traced('execute', r.source, r.sql, () => this.post<ExecuteResult>('/execute', r), (x) => `${x.rowsProcessed ?? 0} row(s) processed`);
  }
  callPackage(r: PackageCallRequest) {
    return this.traced('package', `${r.source} ${r.package}.${r.name}`, undefined,
      () => this.post<PackageCallResult>('/package', r), () => 'ok');
  }
  applyRecord(r: ApplyRecordRequest) {
    return this.traced('apply', r.source, undefined, () => this.post<ApplyRecordResult>('/apply-record', r), () => 'ok');
  }
  async commit() { await this.post('/commit'); }
  async rollback() { await this.post('/rollback'); }
  async savepoint(name: string) { await this.post('/savepoint', { name }); }
  async rollbackToSavepoint(name: string) { await this.post('/rollback', { savepoint: name }); }
}
