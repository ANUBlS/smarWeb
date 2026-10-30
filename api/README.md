# SmartWeb API

FastAPI service between the SmartWeb browser client (`web/`) and the SmartBank Oracle database.

The transpiled Delphi modules keep talking to Oracle exactly as the desktop application did (Direct
Oracle Access: `TOracleSession`, `TOracleDataSet`, `TOracleQuery`, `TOraclePackage`). Every database
round-trip is one of the **gateway** endpoints below; all business rules stay in the existing PL/SQL
packages — the API contains no banking logic.

| Endpoint | Delphi / DOA | What it does |
|---|---|---|
| `POST /api/logon` | `TOracleLogon` / `Session.LogOn` | Oracle connection with the user's own credentials → `sessionId` |
| `POST /api/query` | `TOracleDataSet.Open` | SELECT with bind variables |
| `POST /api/execute` | `TOracleQuery.Execute`, PL/SQL blocks | DML / blocks; variables are IN OUT |
| `POST /api/package` | `TOraclePackage.CallProcedure / Call…Function` | positional or named parameters; argument types read from `ALL_ARGUMENTS` (Delphi `TDateTime` → `DATE`, PL/SQL `BOOLEAN`); an empty `package` calls a schema-level procedure/function (TOraclePackage without PackageName) |
| `POST /api/apply-record` | dataset `Post` / `Delete` | insert/update/delete/lock on the updating table by `ROWID`, only changed columns |
| `POST /api/commit`, `/rollback`, `/savepoint` | `Session.Commit / Rollback / Savepoint` | transaction control (AutoCommit off, as before) |
| `GET /api/databases` | logon dialog | database aliases from `SB_DATABASES` |

Oracle errors come back as `{"errorCode": 1403, "message": "ORA-01403: …"}`, so `on E: EOracleError`
handlers in the Delphi code keep working. One web session = one Oracle connection (one user, one
transaction), like one desktop SmartBank.

**Swagger UI: `/api/docs`** (ReDoc `/api/redoc`, OpenAPI `/api/openapi.json`). Log on with
`/api/logon`, press *Authorize* and paste the `sessionId` as `X-SB-Session`.

## Modules

Besides the gateway, every module that is **API-ready** has its own Swagger section with what its code
uses — generated from the transpiled client by `tools/build_registry.py`:

- `GET /api/modules/{module}` — datasets (SQL, declared variables), package routines, statements
- `POST /api/modules/{module}/datasets/{dataset}` — open a dataset with its registered SQL
- `POST /api/modules/{module}/packages/{component}/{routine}` — call a routine the module calls

`GET /api/modules` lists all 285 registry entries (161 menu modules, 21 dialogs, 109 run-time
packages, and *Common* — the shared `sboapi50` units) with `apiReady`. A module becomes ready when its
name is added to `smartweb_api/registry/ready.json` after its checks pass (see *Tests*).

| Module | Status |
|---|---|
| Common — shared SmartBank API units (sboapi50, 592 datasets, 75 packages) | ✅ ready |
| Accounts — Balans / Əməliyyat günü / Hesablar | ✅ ready |
| Customers — Balans / Müştərilər / Bankın müştəriləri (23 datasets; OPCust → SBREF, sb_custInfo named) | ✅ ready |
| XTaxes — Əlavə modullar / Ödənişlər və köçürmələr / Vergi ödənişləri (5 datasets; pg_pcustservice.get_vergul_tax, sb_taxs.report_tax) | ✅ ready |
| XOutAvalute — Əlavə modullar / Mühasibat və balans / Valyutalar (balansdankənar) (4 datasets; P_AVALUTE.add_avalute / upd_avalute, named, from OnApplyRecord) | ✅ ready |
| XProblemCreditMgr — Əlavə modullar / Kreditlər / Problemli kreditlərin idarə olunması (3 datasets, read-only; PrViewDSet reads dba_col_comments) | ✅ ready |
| Transactions — "Transaction manager" (menu item Əməliyyat günü / Əməliyyatlar removed; 22 datasets; SBREP.TrBuildQuery builds the grid SQL on the server; SB_COMPLEX_TRANSACTIONS; EXCHANGE_CALLBACK schema-level; saving through SB_TRANSACTION in Common) | ✅ ready |
| TransactionManager — Balans / Əməliyyat günü / Günün sənədləri (20 datasets; add / edit / delete / confirm / reject through SB_TRANSACTION; SB_COMPLEX_TRANSACTIONS.SetTransactions; threaded currency/operation filter lists) | ✅ ready |
| Account — Balans / Əməliyyat günü / Yeni hesablar (23 datasets; SBOP.GenerateAccountNumber (Ctrl+H) / add_account / upd_account / close_account from OnApplyRecord; account turnover over a REF CURSOR, pkg_report.get_account_turnover) | ✅ ready |
| PaymentDecree — Balans / Əməliyyat günü / Ödəmə tapşırığı (16 datasets; sb_PaymentDecree.add_payment / update_payment / delete_payment, positional, DATE arguments typed from ALL_ARGUMENTS; archive) | ✅ ready |
| all others | gateway works; own Swagger section pending |

The web client uses the gateway for **every** module already; the per-module sections document and
check each module one by one.

### Session date format

At logon the API runs `alter session set NLS_DATE_FORMAT = 'DD.MM.YYYY'` (`SB_NLS_DATE_FORMAT`, empty =
Oracle default), as the desktop clients had it from their NLS settings. Delphi code that passes dates as
text depends on it, e.g. Vergi ödənişləri: `sys_date between :begin_dat` with `BEGIN_DAT` declared as a
string and filled with `FormatDateTime('DD/MM/YYYY', …)`. Date variables given as text are read day-first
(`29.10.2026`, `29/10/2026`). `SB_NLS_NUMERIC_CHARACTERS` is available too.

### Substitution variables

DOA `otSubst` variables (`order by :Title`, `and cust_type :Cond`) are spliced into the SQL text, not
bound — as in the desktop application. On the module endpoints their value may contain column names,
numbers, operators, lists and quoted literals, but no statement keywords, comments or `;`. An empty value
drops a preceding `ORDER BY` / `GROUP BY` (the first open of a grid before any sort is chosen).

### Statement allow-list

`SB_ALLOWLIST=audit` (default) accepts every statement and writes those not found in the registry to
`logs/unknown-sql.log` (statements the Delphi code builds at run time — filters, sort orders). After a
test period, copy the reviewed statements into `smartweb_api/registry/approved.sql` (separated by a line
with `/`) and switch to `enforce`: then only registered statements run.

## Run

Python 3.12 or newer (tested with 3.13). python-oracledb works without Oracle Client for Oracle 12.1+;
for Oracle 11g set `SB_ORACLE_CLIENT_LIB` to an Instant Client folder.

```bash
cd api
python3 -m venv .venv && .venv/bin/pip install -r requirements.txt
cp .env.example .env              # set SB_DATABASES
.venv/bin/uvicorn smartweb_api.main:app --host 127.0.0.1 --port 8000
```

Run **one worker process**: sessions (Oracle connections) live in the process.

### On 192.168.2.93 together with the web app (port 8086)

```bash
cd /opt/smartweb && git pull
# API
cd api && python3 -m venv .venv && .venv/bin/pip install -r requirements.txt && cp -n .env.example .env
nano .env                                             # SB_DATABASES={"PDBNBC": "<oracle-host>:1521/PDBNBC"}
sudo cp deploy/smartweb-api.service /etc/systemd/system/
sudo systemctl daemon-reload && sudo systemctl enable --now smartweb-api
# web app in HTTP mode, forwarding /api to the API
cd ../web && npm ci && VITE_API_MODE=http VITE_API_URL=/api npm run build
sudo systemctl edit smartweb      # [Service]  Environment=API_TARGET=http://127.0.0.1:8000
sudo systemctl restart smartweb
```

Open http://192.168.2.93:8086 (log on with an Oracle user) and http://192.168.2.93:8086/api/docs.
Windows: `deploy\start-api.bat`, and `set API_TARGET=http://127.0.0.1:8000` before
`web\deploy\start-smartweb.bat`. Docker: see `Dockerfile`.

## Tests

```bash
.venv/bin/pip install -r requirements-dev.txt
.venv/bin/python -m pytest -q tests
```

The tests use a fake python-oracledb connection (`tests/fake_oracle.py`) that records every statement
and bind: gateway semantics (binds, types, DOA DML, package calls, transactions, errors) and, for each
API-ready module, every dataset and package routine of its registry.

`python -m tests.synthetic_db` starts the API with a driver that answers any SELECT with three rows
shaped from its select list — for running the web client end to end without a database
(`VITE_API_MODE=http` build behind `server.mjs` with `API_TARGET=http://127.0.0.1:8000`).

## Registry

```bash
python3 web/tools/build.py          # after Delphi changes: regenerate the client
python3 api/tools/build_registry.py # then the API registry
```
