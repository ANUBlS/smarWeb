/*
 * HTTP implementation of the Oracle gateway — the SmartWeb API (api/, FastAPI).
 * Enable with VITE_API_MODE=http and VITE_API_URL=/api (server.mjs proxies /api to API_TARGET).
 */
import type {
  OracleApi, LogonRequest, LogonResult, QueryRequest, QueryResult, ExecuteRequest, ExecuteResult,
  PackageCallRequest, PackageCallResult, ApplyRecordRequest, ApplyRecordResult,
} from './types';
import { OracleError } from './types';

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
  query(r: QueryRequest) { return this.post<QueryResult>('/query', { ...r, fieldHints: undefined }); }
  fetchRows(cursorId: string, count: number) { return this.post<{ rows: unknown[][]; more: boolean }>('/fetch', { cursorId, count }); }
  async closeCursor(cursorId: string) { await this.post('/close-cursor', { cursorId }); }
  execute(r: ExecuteRequest) { return this.post<ExecuteResult>('/execute', r); }
  callPackage(r: PackageCallRequest) { return this.post<PackageCallResult>('/package', r); }
  applyRecord(r: ApplyRecordRequest) { return this.post<ApplyRecordResult>('/apply-record', r); }
  async commit() { await this.post('/commit'); }
  async rollback() { await this.post('/rollback'); }
  async savepoint(name: string) { await this.post('/savepoint', { name }); }
  async rollbackToSavepoint(name: string) { await this.post('/rollback', { savepoint: name }); }
}
