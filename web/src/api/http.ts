/*
 * HTTP implementation of the Oracle gateway — used once the Node/Express API
 * exists.  Enable with VITE_API_MODE=http and VITE_API_URL=https://host/api.
 */
import type {
  OracleApi, LogonRequest, LogonResult, QueryRequest, QueryResult, ExecuteRequest, ExecuteResult,
  PackageCallRequest, PackageCallResult, ApplyRecordRequest, ApplyRecordResult,
} from './types';
import { OracleError } from './types';

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
    if (!res.ok) {
      // Server maps ORA-nnnnn errors to { errorCode, message } so EOracleError handlers keep working.
      throw new OracleError(Number(data.errorCode ?? res.status), String(data.message ?? res.statusText));
    }
    return data as T;
  }

  async logon(r: LogonRequest): Promise<LogonResult> {
    const res = await this.post<LogonResult>('/logon', r);
    this.session = res.sessionId;
    return res;
  }
  async logoff() { await this.post('/logoff'); this.session = null; }
  query(r: QueryRequest) { return this.post<QueryResult>('/query', { ...r, fieldHints: undefined }); }
  execute(r: ExecuteRequest) { return this.post<ExecuteResult>('/execute', r); }
  callPackage(r: PackageCallRequest) { return this.post<PackageCallResult>('/package', r); }
  applyRecord(r: ApplyRecordRequest) { return this.post<ApplyRecordResult>('/apply-record', r); }
  async commit() { await this.post('/commit'); }
  async rollback() { await this.post('/rollback'); }
  async savepoint(name: string) { await this.post('/savepoint', { name }); }
  async rollbackToSavepoint(name: string) { await this.post('/rollback', { savepoint: name }); }
}
