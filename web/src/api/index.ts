/*
 * Active Oracle gateway.  Mock by default; switch to the real API with
 *   VITE_API_MODE=http  VITE_API_URL=https://<host>/api
 *
 * Every call that changes data (DML / PL/SQL blocks, package calls, record posts, commit, rollback)
 * is also written to the application log when user-action logging is active (İdarəetmə / Jurnal
 * ayarları); queries are not.
 */
import type { OracleApi } from './types';
import { MockOracleApi } from './mock';
import { HttpOracleApi } from './http';
import { audit, show } from '../runtime/audit';

const mode = (import.meta.env.VITE_API_MODE as string | undefined) ?? 'mock';
const raw: OracleApi = mode === 'http'
  ? new HttpOracleApi((import.meta.env.VITE_API_URL as string | undefined) ?? '/api')
  : new MockOracleApi();

/** Read-only routines that are not worth a log line (operational date, options, lookups). */
const QUIET_CALL = /^(get|is|has|fn_get|check|exist)/i;
const oneLine = (s: string, n = 400) => s.replace(/\s+/g, ' ').trim().slice(0, n);

function audited(a: OracleApi): OracleApi {
  return new Proxy(a, {
    get(target, prop, recv) {
      const v = Reflect.get(target, prop, recv);
      if (typeof v !== 'function') return v;
      switch (prop) {
        case 'execute': return async (r: Parameters<OracleApi['execute']>[0]) => {
          const res = await v.call(target, r);
          if (!/^\s*(select|with)\b/i.test(r.sql)) {
            const binds = r.variables.map((b) => `${b.name}=${show(b.value)}`).join(', ');
            audit('change', `SQL ${r.source}: ${oneLine(r.sql)}${binds ? ` [${binds}]` : ''} → ${res.rowsProcessed} sətir`);
          }
          return res;
        };
        case 'callPackage': return async (r: Parameters<OracleApi['callPackage']>[0]) => {
          const res = await v.call(target, r);
          if (!QUIET_CALL.test(r.name)) {
            const ps = r.mode === 'named'
              ? r.params.reduce<string[]>((o, x, i, arr) => (i % 2 === 0 ? [...o, `${String(x)} => ${show(arr[i + 1])}`] : o), [])
              : r.params.map((x) => show(x));
            audit('call', `${r.package ? r.package + '.' : ''}${r.name}(${ps.join(', ')})${r.kind !== 'procedure' ? ` → ${show(res.result)}` : ''}`);
          }
          return res;
        };
        case 'applyRecord': return async (r: Parameters<OracleApi['applyRecord']>[0]) => {
          const res = await v.call(target, r);
          if (r.action === 'insert' || r.action === 'update' || r.action === 'delete') {
            const changed = r.action === 'update'
              ? Object.keys(r.values).filter((k) => show(r.values[k]) !== show(r.oldValues[k])).map((k) => `${k}: ${show(r.oldValues[k])} → ${show(r.values[k])}`)
              : r.action === 'insert'
                ? Object.keys(r.values).filter((k) => r.values[k] !== null && r.values[k] !== undefined).map((k) => `${k}=${show(r.values[k])}`)
                : Object.keys(r.oldValues).slice(0, 6).map((k) => `${k}=${show(r.oldValues[k])}`);
            const what = { insert: 'Yeni qeyd', update: 'Dəyişiklik', delete: 'Silinmə' }[r.action];
            audit('change', `${what} ${r.updatingTable || r.source}${r.rowid ? ` (${r.rowid})` : ''}: ${changed.length ? changed.join('; ').slice(0, 3000) : 'dəyişiklik yoxdur'}`);
          }
          return res;
        };
        case 'commit': return async () => { await v.call(target); audit('change', 'Commit'); };
        case 'rollback': return async () => { await v.call(target); audit('change', 'Rollback'); };
        default: return v.bind(target);
      }
    },
  });
}

export const api: OracleApi = audited(raw);

export * from './types';
