# SmartWeb — SmartBank in the browser

A modern web client for the SmartBank Delphi/Oracle core banking system. The
original Delphi logic is **transpiled**, not rewritten: every module form keeps
its layout (button and field positions come straight from the `.dfm` files) and
every event handler runs the same Pascal statements, translated to JavaScript.
Oracle stays the system of record; all database access goes through four API
calls that a Node/Express service will implement against the existing schema
and PL/SQL packages.

Reports (QuickReport layouts under *Bankın hesabatları*) are out of scope for
this phase and show a notice in the menu.

## Run it

```bash
npm install
npm run dev          # http://localhost:5173 — mock API, log in with any user name
npm start            # production server for the built app on port 8086
npm run build        # production bundle in dist/
```

Switch to the real backend once it exists:

```bash
VITE_API_MODE=http VITE_API_URL=https://smartweb.example.az/api npm run build
```

## Deploy on 192.168.2.93:8086

Requirements on the server: **Node.js 18+** (20 LTS recommended). The build needs the npm registry once;
the running app needs no internet access (fonts are bundled).

### Linux (systemd)

```bash
sudo mkdir -p /opt/smartweb && sudo chown $USER /opt/smartweb
git clone https://github.com/ANUBlS/smarWeb.git /opt/smartweb      # or: git pull in an existing clone
cd /opt/smartweb/web
npm ci
npm run build
sudo useradd -r -s /usr/sbin/nologin smartweb || true
sudo cp deploy/smartweb.service /etc/systemd/system/
sudo systemctl daemon-reload && sudo systemctl enable --now smartweb
sudo firewall-cmd --add-port=8086/tcp --permanent && sudo firewall-cmd --reload   # or: sudo ufw allow 8086/tcp
```

Open **http://192.168.2.93:8086** from any workstation. Logs: `journalctl -u smartweb -f`.

### Windows Server

```bat
git clone https://github.com/ANUBlS/smarWeb.git C:\smartweb
cd C:\smartweb\web
npm ci
npm run build
netsh advfirewall firewall add rule name="SmartWeb 8086" dir=in action=allow protocol=TCP localport=8086
deploy\start-smartweb.bat
```

To keep it running as a service use NSSM (`nssm install SmartWeb "C:\Program Files\nodejs\node.exe" server.mjs`,
startup directory `C:\smartweb\web`, environment `PORT=8086`) or `npx pm2 start server.mjs --name smartweb`.

### Docker

```bash
cd web && docker build -t smartweb . && docker run -d --name smartweb --restart=always -p 8086:8086 smartweb
```

### Quick check without installing a service

```bash
cd web && npm ci && npm run build && PORT=8086 npm start      # Windows: set PORT=8086 && npm start
```

### Updating

```bash
cd /opt/smartweb && git pull && cd web && npm ci && npm run build && sudo systemctl restart smartweb
```

### Connecting the real Oracle API later

Build the client for HTTP mode and let `server.mjs` forward `/api` to the gateway:

```bash
VITE_API_MODE=http VITE_API_URL=/api npm run build
API_TARGET=http://127.0.0.1:3000 PORT=8086 npm start          # systemd: uncomment API_TARGET in the unit
```

## How it is built

```
smarWeb (Delphi repo)
  ├─ SmartBank.ini ── menu tree, action #n → ActiveX GUID → package
  ├─ *.dfm ────────── tools/dfm2json.py ──► src/generated/**/<Unit>.dfm.json   (layouts)
  └─ *.pas ────────── tools/pas2js.py ────► src/generated/**/<Unit>.js        (logic)
                       tools/build.py drives both, resolves each module's `uses` closure
```

| Layer | Path | What it does |
|---|---|---|
| Generator | `tools/` | Python: DFM parser, Object Pascal → async JS transpiler, module/menu builder. Re-run with `npm run regen`. |
| Pascal runtime | `src/runtime/pascal.ts`, `core.ts`, `env.ts` | Case-insensitive name resolution, `with`, var parameters, sets, 1-based strings, exceptions, `inherited`, units and classes. |
| RTL | `src/runtime/stdlib.ts`, `datetime.ts`, `dialogs.ts` | SysUtils/StrUtils/DateUtils/Variants/Dialogs equivalents with Delphi semantics (`Format`, `FormatFloat`, `TDateTime`, `MessageDlg` …). |
| VCL | `src/runtime/vcl/` | Forms, controls, actions, menus, data-aware controls, DFM streaming, layout. |
| DOA | `src/runtime/data/` | `TOracleSession`, `TOracleDataSet`, `TOracleQuery`, `TOraclePackage`, fields, filters, master/detail. |
| API | `src/api/` | Gateway contract (`types.ts`), HTTP client (`http.ts`), mock backend (`mock.ts`). |
| UI | `src/ui/` | Shell (logon, menu tree, MDI workspace, task bar, output log) and the control renderer. |

### Module hosting

Each menu node opens its module exactly as the old plugin host did: create the
ActiveForm (fires `OnCreate`), pass node parameters through `Set_Params`
(e.g. `RefName=customer_relation`), call `InstanceInitialize`, then
`UIObjectActivate`.

## Oracle gateway API (to implement in Node/Express)

All requests are `POST` with JSON and carry `X-SB-Session` after logon. Errors
must be returned as `{ "errorCode": 20001, "message": "ORA-20001: …" }` with a
non-2xx status so `on E: EOracleError do` blocks keep working.

| Endpoint | Request | Response | Used by |
|---|---|---|---|
| `/api/logon` | `{username, password, database}` | `{sessionId, username, database, sid, serverDate}` | Logon screen |
| `/api/query` | `{source, sql, variables:[{name,type,value}]}` | `{columns:[{name,type,size}], rows:[[…]]}` | `TOracleDataSet.Open/Refresh` |
| `/api/execute` | `{source, sql, variables}` | `{rowsProcessed, variables, columns?, rows?}` | `TOracleQuery.Execute`, `ExecSQL`, PL/SQL blocks (OUT binds returned in `variables`) |
| `/api/package` | `{source, package, name, kind, mode, params}` | `{result, outParams}` | `TOraclePackage.CallProcedure / Call*Function` (`mode: named` → `[name, value, …]`) |
| `/api/apply-record` | `{source, sql, updatingTable, action, rowid, values, oldValues, fields}` | `{rowid, values}` | Dataset `Post`/`Delete` (DOA derives the DML from the SELECT and `ROWID`) |
| `/api/commit`, `/api/rollback`, `/api/savepoint` | — | — | `Session.Commit/Rollback`, `CommitOnPost` |

Dates travel as ISO strings (`2026-10-25T00:00:00`). `source` identifies the
issuing component (`TAccountMainForm.AccountsData`) for logging and auditing.

Because the SQL text comes from the client, the server should only accept
statements it recognises: generate an allow-list from `src/generated`
(static SQL in DFMs and unit constants) plus the statements built at run time
(`BuildAccsQuery` and similar), or run them under a least-privilege Oracle user
with the same grants the desktop users had. `report.json` lists every module's
units and any routine that could not be converted.

## Tests

With `npm run dev` running:

```bash
python3 tools/smoke.py              # logs in, opens every module from the menu tree, screenshots + warnings
python3 tools/interact.py 0.0.0 '["row:0","tb:Yeni hesab","btn:İmtina","dlg:Bəli"]'   # drive a workflow
```

Current status: all 50 non-report menu nodes open without runtime warnings; Accounts add/edit/cancel,
Customers master–detail, Transactions refresh and the payment order form were exercised end to end.

## Regenerating after Delphi changes

```bash
python3 tools/build.py      # run inside web/; reads the Delphi sources from the repository root (override with SMARWEB_REPO)
```

`src/generated/report.json` lists unit parse errors, binary (report) DFMs that
were skipped, missing units and routines that could not be converted
(currently none besides `asm` blocks).

## Known gaps in this phase

- Reports (QuickReport) and Excel/Word OLE automation are not rendered; calls
  are logged to the Output panel.
- Toolbar bitmaps from `TImageList` are replaced by icons chosen from the
  action name/caption.
- Windows API calls (registry, files, printers) are browser-safe no-ops; file
  writes become downloads.
- The mock backend fabricates plausible data from the SQL; business rules that
  live in PL/SQL are only exercised once the real API is connected.
