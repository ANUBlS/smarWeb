/*
 * Application log (İdarəetmə / Jurnal ayarları): internal errors and — when activated — user actions,
 * written by the web server to logs/smartweb-YYYY-MM-DD.log (see web/applog.mjs).
 *
 * audit(kind, msg) is cheap: entries are filtered by the shared settings, buffered and sent in batches.
 */
export type AuditKind = 'logon' | 'module' | 'form' | 'action' | 'change' | 'call' | 'error' | 'settings';

export interface LogSettings {
  errors: boolean;
  actions: boolean;
  allModules: boolean;
  modules: string[];
  kinds: Record<string, boolean>;
  updatedAt?: string;
  updatedBy?: string;
}

export const DEFAULT_LOG_SETTINGS: LogSettings = {
  errors: true, actions: false, allModules: true, modules: [],
  kinds: { logon: true, module: true, form: true, action: true, change: true, call: true, error: true },
};

let settings: LogSettings = DEFAULT_LOG_SETTINGS;
let who = { user: '', db: '' };
let buffer: { t: string; user: string; db: string; module: string; kind: AuditKind; msg: string }[] = [];
let timer: ReturnType<typeof setTimeout> | null = null;
let available = true;
/** Resolves the module of the window the user works in (set by the window manager). */
let moduleResolver: () => string = () => '';

export function setModuleResolver(f: () => string) { moduleResolver = f; }
export function setAuditUser(user: string, db: string) { who = { user, db }; }
export function logSettings() { return settings; }

export async function loadLogSettings(): Promise<LogSettings> {
  try {
    const r = await fetch('/applog/settings', { cache: 'no-store' });
    if (r.ok) settings = { ...DEFAULT_LOG_SETTINGS, ...(await r.json()) };
    available = r.ok;
  } catch { available = false; }
  return settings;
}

export async function saveLogSettings(s: LogSettings): Promise<LogSettings> {
  const r = await fetch('/applog/settings', { method: 'PUT', headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ ...s, updatedBy: who.user }) });
  if (!r.ok) throw new Error(`Jurnal ayarları saxlanmadı (${r.status})`);
  settings = { ...DEFAULT_LOG_SETTINGS, ...(await r.json()) };
  return settings;
}

function wanted(kind: AuditKind, module: string): boolean {
  if (kind === 'error') return settings.errors;
  if (!settings.actions || settings.kinds[kind] === false) return false;
  if (kind === 'logon' || kind === 'settings' || settings.allModules) return true;
  return !!module && settings.modules.includes(module);
}

/** Record one entry; module defaults to the module of the active window. */
export function audit(kind: AuditKind, msg: string, module?: string) {
  if (!available) return;
  const mod = module ?? safeModule();
  if (!wanted(kind, mod)) return;
  buffer.push({ t: new Date().toISOString(), user: who.user, db: who.db, module: mod, kind, msg: msg.slice(0, 4000) });
  if (buffer.length >= 200) void flush();
  else if (!timer) timer = setTimeout(() => void flush(), 1500);
}

function safeModule() { try { return moduleResolver() || ''; } catch { return ''; } }

export async function flush(beacon = false) {
  if (timer) { clearTimeout(timer); timer = null; }
  if (!buffer.length) return;
  const entries = buffer;
  buffer = [];
  const body = JSON.stringify({ entries });
  try {
    if (beacon && navigator.sendBeacon) { navigator.sendBeacon('/applog', new Blob([body], { type: 'application/json' })); return; }
    const r = await fetch('/applog', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body, keepalive: true });
    if (r.status === 404 || r.status === 405) available = false; // served without the log endpoint (vite preview …)
  } catch { /* the log is best-effort */ }
}

if (typeof window !== 'undefined') {
  window.addEventListener('pagehide', () => void flush(true));
}

/** Short, single-line rendering of a value for the log. */
export function show(v: unknown): string {
  if (v === null || v === undefined) return 'null';
  if (typeof v === 'string') return JSON.stringify(v.length > 120 ? v.slice(0, 120) + '…' : v);
  if (typeof v === 'number' || typeof v === 'boolean') return String(v);
  try { const s = JSON.stringify(v); return s.length > 120 ? s.slice(0, 120) + '…' : s; } catch { return String(v); }
}

/** "Düymə "Yeni Kontrakt" (TBNew)" — caption (or hint / action caption) and component name. */
export function auditClick(c: { Name?: string; Caption?: string; Hint?: string; _action?: any }, what = 'Düymə') {
  const raw = String(c.Caption || c._action?.Caption || c.Hint || '').replace(/&(?!&)/g, '').replace(/\s+/g, ' ').trim();
  audit('action', `${what} "${raw || c.Name}"${raw && c.Name ? ` (${c.Name})` : ''}`);
}
