/*
 * SmartWeb application log (no dependencies) — used by server.mjs and the Vite dev server.
 *
 *   POST /applog                 {entries: [{t, user, db, module, kind, msg}]}  → appended to the day's file
 *   GET  /applog/settings        → settings JSON
 *   PUT  /applog/settings        ← settings JSON (İdarəetmə / Jurnal ayarları)
 *   GET  /applog/files           → [{name, size, modified}]
 *   GET  /applog/files/<name>    → text of one day's file
 *
 * Files: $SB_LOG_DIR (default ./logs next to this file)/smartweb-YYYY-MM-DD.log, one line per entry:
 *   2026-10-30 08:24:13.512 | 192.168.2.15 | SABUHI@PDBNBC | Customers | ACTION | "Yeni" (TBNew)
 */
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const HERE = path.dirname(fileURLToPath(import.meta.url));
export const LOG_DIR = path.resolve(HERE, process.env.SB_LOG_DIR || 'logs');
const SETTINGS = path.join(LOG_DIR, 'settings.json');
const MAX_BODY = 512 * 1024;
const FILE_RE = /^smartweb-\d{4}-\d{2}-\d{2}\.log$/;

/** errors: internal errors (access violations …); actions: user actions; modules: [] = all modules. */
export const DEFAULT_SETTINGS = {
  errors: true,
  actions: false,
  allModules: true,
  modules: [],
  kinds: { logon: true, module: true, form: true, action: true, change: true, call: true, error: true },
};

function ensureDir() { fs.mkdirSync(LOG_DIR, { recursive: true }); }

export function readSettings() {
  try {
    return { ...DEFAULT_SETTINGS, ...JSON.parse(fs.readFileSync(SETTINGS, 'utf8')) };
  } catch {
    return { ...DEFAULT_SETTINGS };
  }
}

function writeSettings(s) {
  ensureDir();
  const clean = {
    errors: !!s.errors,
    actions: !!s.actions,
    allModules: !!s.allModules,
    modules: Array.isArray(s.modules) ? s.modules.filter((m) => typeof m === 'string' && /^[\w.-]{1,80}$/.test(m)).slice(0, 1000) : [],
    kinds: Object.fromEntries(Object.keys(DEFAULT_SETTINGS.kinds).map((k) => [k, s.kinds ? s.kinds[k] !== false : true])),
    updatedAt: new Date().toISOString(),
    updatedBy: typeof s.updatedBy === 'string' ? s.updatedBy.slice(0, 80) : '',
  };
  fs.writeFileSync(SETTINGS + '.tmp', JSON.stringify(clean, null, 2));
  fs.renameSync(SETTINGS + '.tmp', SETTINGS);
  return clean;
}

const pad = (n, w = 2) => String(n).padStart(w, '0');
function stamp(d) {
  return `${d.getFullYear()}-${pad(d.getMonth() + 1)}-${pad(d.getDate())} ${pad(d.getHours())}:${pad(d.getMinutes())}:${pad(d.getSeconds())}.${pad(d.getMilliseconds(), 3)}`;
}
const one = (v, max) => String(v ?? '').replace(/[\r\n\t]+/g, ' ').replace(/\|/g, '¦').slice(0, max);

function append(entries, ip) {
  ensureDir();
  const byFile = new Map();
  for (const e of entries.slice(0, 1000)) {
    const d = new Date(Number.isFinite(Date.parse(e.t)) ? e.t : Date.now());
    const file = `smartweb-${d.getFullYear()}-${pad(d.getMonth() + 1)}-${pad(d.getDate())}.log`;
    const line = [stamp(d), one(ip, 45), one(e.user || '-', 80) + (e.db ? '@' + one(e.db, 40) : ''), one(e.module || '-', 80),
      one(e.kind || 'info', 12).toUpperCase(), one(e.msg, 4000)].join(' | ');
    if (!byFile.has(file)) byFile.set(file, []);
    byFile.get(file).push(line);
  }
  for (const [file, lines] of byFile) fs.appendFileSync(path.join(LOG_DIR, file), lines.join('\n') + '\n');
}

function readBody(req) {
  return new Promise((resolve, reject) => {
    let size = 0;
    const chunks = [];
    req.on('data', (c) => { size += c.length; if (size > MAX_BODY) { reject(new Error('too large')); req.destroy(); } else chunks.push(c); });
    req.on('end', () => resolve(Buffer.concat(chunks).toString('utf8')));
    req.on('error', reject);
  });
}

function send(res, status, body, type = 'application/json; charset=utf-8') {
  res.writeHead(status, { 'Content-Type': type, 'Cache-Control': 'no-store' });
  res.end(typeof body === 'string' ? body : JSON.stringify(body));
}

/** Handles /applog… requests; returns false for other URLs. */
export function handleAppLog(req, res) {
  const url = new URL(req.url, 'http://x');
  if (!url.pathname.startsWith('/applog')) return false;
  const ip = (req.headers['x-forwarded-for'] || '').split(',')[0].trim() || req.socket.remoteAddress || '';
  (async () => {
    try {
      if (url.pathname === '/applog' && req.method === 'POST') {
        const body = JSON.parse((await readBody(req)) || '{}');
        if (Array.isArray(body.entries)) append(body.entries, ip);
        return send(res, 204, '');
      }
      if (url.pathname === '/applog/settings') {
        if (req.method === 'GET') return send(res, 200, readSettings());
        if (req.method === 'PUT') {
          const s = writeSettings(JSON.parse((await readBody(req)) || '{}'));
          append([{ t: new Date().toISOString(), user: s.updatedBy, module: 'İdarəetmə', kind: 'settings',
            msg: `Jurnal ayarları dəyişdi: xətalar=${s.errors ? 'aktiv' : 'deaktiv'}, istifadəçi əməliyyatları=${s.actions ? 'aktiv' : 'deaktiv'}, modullar=${s.allModules ? 'hamısı' : s.modules.join(',') || '-'}` }], ip);
          return send(res, 200, s);
        }
      }
      if (url.pathname === '/applog/files' && req.method === 'GET') {
        ensureDir();
        const files = fs.readdirSync(LOG_DIR).filter((f) => FILE_RE.test(f)).sort().reverse()
          .map((f) => { const st = fs.statSync(path.join(LOG_DIR, f)); return { name: f, size: st.size, modified: st.mtime.toISOString() }; });
        return send(res, 200, files);
      }
      const m = url.pathname.match(/^\/applog\/files\/([^/]+)$/);
      if (m && req.method === 'GET') {
        const name = decodeURIComponent(m[1]);
        if (!FILE_RE.test(name)) return send(res, 400, { message: 'bad file name' });
        const file = path.join(LOG_DIR, name);
        if (!fs.existsSync(file)) return send(res, 404, { message: 'not found' });
        const st = fs.statSync(file);
        // last 2 MB at most (the page shows the newest lines)
        const from = Math.max(0, st.size - 2 * 1024 * 1024);
        const fd = fs.openSync(file, 'r');
        const buf = Buffer.alloc(st.size - from);
        fs.readSync(fd, buf, 0, buf.length, from);
        fs.closeSync(fd);
        return send(res, 200, buf.toString('utf8'), 'text/plain; charset=utf-8');
      }
      return send(res, 405, { message: 'method not allowed' });
    } catch (e) {
      return send(res, 400, { message: String(e?.message || e) });
    }
  })();
  return true;
}
