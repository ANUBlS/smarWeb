#!/usr/bin/env node
/*
 * SmartWeb production server — no dependencies, Node 18+.
 *
 *   node server.mjs                       # http://0.0.0.0:8086
 *   HOST=192.168.2.93 PORT=8086 node server.mjs
 *   API_TARGET=http://127.0.0.1:8000 node server.mjs   # forward /api/* to the SmartWeb API (api/)
 *   DIST_DIR=dist-http node server.mjs                 # serve another build folder
 *
 * Serves the built app from ./dist with long-term caching for hashed assets,
 * falls back to index.html for client routes, and proxies /api when API_TARGET is set.
 */
import http from 'node:http';
import fs from 'node:fs';
import path from 'node:path';
import zlib from 'node:zlib';
import { fileURLToPath } from 'node:url';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), process.env.DIST_DIR || 'dist');
const HOST = process.env.HOST || '0.0.0.0';
const PORT = Number(process.env.PORT || 8086);
const API_TARGET = process.env.API_TARGET ? new URL(process.env.API_TARGET) : null;

const TYPES = {
  '.html': 'text/html; charset=utf-8', '.js': 'text/javascript; charset=utf-8', '.mjs': 'text/javascript; charset=utf-8',
  '.css': 'text/css; charset=utf-8', '.json': 'application/json; charset=utf-8', '.svg': 'image/svg+xml',
  '.png': 'image/png', '.jpg': 'image/jpeg', '.ico': 'image/x-icon', '.woff': 'font/woff', '.woff2': 'font/woff2',
  '.txt': 'text/plain; charset=utf-8', '.map': 'application/json',
};
const COMPRESSIBLE = new Set(['.html', '.js', '.mjs', '.css', '.json', '.svg', '.txt', '.map']);

if (!fs.existsSync(path.join(ROOT, 'index.html'))) {
  console.error(`dist/index.html not found — run "npm run build" first (looked in ${ROOT})`);
  process.exit(1);
}

function log(req, status, start) {
  const ms = Date.now() - start;
  console.log(`${new Date().toISOString()} ${req.socket.remoteAddress} ${req.method} ${req.url} ${status} ${ms}ms`);
}

function proxy(req, res, start) {
  const target = new URL(req.url, API_TARGET);
  const p = http.request(target, { method: req.method, headers: { ...req.headers, host: API_TARGET.host } }, (r) => {
    res.writeHead(r.statusCode || 502, r.headers);
    r.pipe(res);
    log(req, r.statusCode, start);
  });
  p.on('error', (e) => {
    res.writeHead(502, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({ errorCode: 502, message: `API gateway unavailable: ${e.message}` }));
    log(req, 502, start);
  });
  req.pipe(p);
}

const server = http.createServer((req, res) => {
  const start = Date.now();
  if (API_TARGET && req.url.startsWith('/api/')) return proxy(req, res, start);
  if (req.method !== 'GET' && req.method !== 'HEAD') {
    res.writeHead(405); res.end(); return log(req, 405, start);
  }
  const urlPath = decodeURIComponent(new URL(req.url, 'http://x').pathname);
  let file = path.normalize(path.join(ROOT, urlPath));
  if (!file.startsWith(ROOT)) { res.writeHead(403); res.end(); return log(req, 403, start); }
  if (!fs.existsSync(file) || fs.statSync(file).isDirectory()) file = path.join(ROOT, 'index.html');
  const ext = path.extname(file).toLowerCase();
  const hashed = urlPath.startsWith('/assets/');
  const headers = {
    'Content-Type': TYPES[ext] || 'application/octet-stream',
    'Cache-Control': hashed ? 'public, max-age=31536000, immutable' : 'no-cache',
    'X-Content-Type-Options': 'nosniff',
  };
  const gzip = COMPRESSIBLE.has(ext) && /\bgzip\b/.test(req.headers['accept-encoding'] || '');
  if (gzip) { headers['Content-Encoding'] = 'gzip'; headers['Vary'] = 'Accept-Encoding'; }
  res.writeHead(200, headers);
  if (req.method === 'HEAD') { res.end(); return log(req, 200, start); }
  const stream = fs.createReadStream(file);
  (gzip ? stream.pipe(zlib.createGzip()) : stream).pipe(res);
  log(req, 200, start);
});

server.listen(PORT, HOST, () => {
  console.log(`SmartWeb listening on http://${HOST}:${PORT}${API_TARGET ? ` (API → ${API_TARGET.origin})` : ' (mock API)'}`);
});
