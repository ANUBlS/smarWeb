/*
 * Mock Oracle gateway.  Synthesises realistic, consistent rows for any SQL the
 * Delphi code issues (based on its select list, tables and bind filters) and
 * keeps edits made through datasets for the browser session.
 */
import type {
  OracleApi, LogonRequest, LogonResult, QueryRequest, QueryResult, ExecuteRequest, ExecuteResult,
  PackageCallRequest, PackageCallResult, ApplyRecordRequest, ApplyRecordResult, ColumnDef, OraType,
} from './types';
import { OracleError } from './types';
import { inspectSql, SelectInfo } from './sqlparse';
import {
  hash, pick, rnd, CURRENCIES, FILIALS, CUSTOMERS, BAL_ACCOUNTS, BANKS, USERS, PURPOSES, COMPANIES, ACCOUNTS, iban,
} from './mockdata';
import { logger } from '../runtime/log';

type Entity = 'account' | 'customer' | 'currency' | 'filial' | 'bank' | 'user' | 'balance' | 'company' | 'generic';

function tableEntity(t: string): Entity {
  const u = t.toUpperCase();
  if (/COMPAN/.test(u)) return 'company';
  if (/AVALUTE|VALUT|CURRENC|KURS|RATE/.test(u)) return 'currency';
  if (/FILIAL|BRANCH/.test(u)) return 'filial';
  if (/BANK/.test(u)) return 'bank';
  if (/USER|SB_USR|SBUSR|ISTIFAD|OPERATOR/.test(u)) return 'user';
  if (/BAL_?PLAN|BAL_?SCH|BALANCE_?REF|BALREF|BAL_ACC|BALACC|SACC|SCHET|BALANS/.test(u)) return 'balance';
  if (/^ACC|ACCOUNT|HESAB|TENOSTAT|TEMPOST|LAZYREST|OSTAT/.test(u)) return 'account';
  if (/KLI|CUST|CLIENT|MUSTERI|MUSHTERI/.test(u)) return 'customer';
  return 'generic';
}

const POOL_SIZE: Record<Entity, number> = {
  account: ACCOUNTS.length, customer: CUSTOMERS.length, currency: CURRENCIES.length, filial: FILIALS.length,
  bank: BANKS.length, user: USERS.length, balance: BAL_ACCOUNTS.length, company: COMPANIES.length, generic: 36,
};

const today = new Date();
function isoDate(daysAgo: number, withTime = false) {
  const d = new Date(today.getFullYear(), today.getMonth(), today.getDate() - daysAgo,
    withTime ? 9 + (daysAgo % 8) : 0, withTime ? (daysAgo * 7) % 60 : 0);
  const p = (n: number) => String(n).padStart(2, '0');
  return `${d.getFullYear()}-${p(d.getMonth() + 1)}-${p(d.getDate())}T${p(d.getHours())}:${p(d.getMinutes())}:00`;
}

/* ------------------------------------------------------------------ column classification */

type Kind = 'rowid' | 'date' | 'id' | 'accno' | 'swift' | 'inn' | 'phone' | 'address' | 'bankname' | 'filialname'
  | 'curname' | 'curcode' | 'user' | 'name' | 'purpose' | 'rate' | 'percent' | 'bal' | 'amount' | 'lamount' | 'code'
  | 'flag' | 'count' | 'generic';

function classify(col: string): Kind {
  const c = col.toUpperCase();
  if (c === 'ROWID' || c === 'ROW_ID') return 'rowid';
  if (/^(VALUE|VAL_VALUE|PARAM_?VALUE|SETTING_?VALUE|OPT_?VALUE|PVALUE|DEF_?VALUE)$/.test(c)) return 'count';
  if (/(^|_)(DAT|DATE|DT|TARIX|TIME)(_|$)|DATE$|DAT$|^DAT|DATE_|BEGIN_?D|END_?D|START_?D/.test(c)) return 'date';
  if (/^POK_|LAMOUNT|EKV|EQUIV|^L_?SUM|LSUMMA|_LOC$|NATIONAL/.test(c)) return 'lamount';
  if (/^VAL_?ACC$|^VALUTE$|^VAL_?CODE|^CURR?_?CODE|CURRENCY_?ID|^VAL_?ID|CURRENCYID|VALID$/.test(c)) return 'curcode';
  if (/ACC_?NO|ACCNO|ACCOUNT_?NO|HESAB_?NO|^ACC$|IBAN|CORR_?ACC|KORR|CORACC|_ACC$|^ACCOUNT$/.test(c)) return 'accno';
  if (/SWIFT|BIC/.test(c)) return 'swift';
  if (/(^|_)(INN|VOEN|TIN)($|_)|INN$|VOEN/.test(c)) return 'inn';
  if (/PHONE|TEL(_|$|EFON)|MOBIL/.test(c)) return 'phone';
  if (/ADDR|UNVAN|ADRES/.test(c)) return 'address';
  if (/BANK.*NAME|BANKNAME|BANK_AD/.test(c)) return 'bankname';
  if (/FIL.*NAME|BRANCH.*NAME/.test(c)) return 'filialname';
  if (/(VAL|CUR|CURRENC|VALUT).*(S?NAME|ABBR|SHORT)|^VAL_NAME$|^CURRENCY$|^VALUTA$|SNAME|^VAL$/.test(c)) return 'curname';
  if (/(^ID$|_ID$|ID$|^ID_)/.test(c) && !/(VALID|PAID|SID#)/.test(c)) return 'id';
  if (/USER|OPERATOR|USNAME|EXECUTOR|LOGIN|ISTIFADE|CREATED_BY|AUTHOR/.test(c)) return 'user';
  if (/PURPOSE|TEYINAT|DESCR|NOTE|COMMENT|MEQSED|REMARK|INFO|TEXT|REASON|SEBEB|ACIQLAMA/.test(c)) return 'purpose';
  if (/KURS|RATE|COURSE/.test(c)) return 'rate';
  if (/PERCENT|FAIZ|PROC|PCT|_PRC/.test(c)) return 'percent';
  if (/NAME|ADI$|^AD$|_AD$|FIO|OWNER|CUSTOMER$|CLIENT$|MUSTERI|BENEFIC|PAYER|RECEIVER/.test(c)) return 'name';
  if (/BAL_?CN|^SACC|^BAL$|BALANS|BAL_ACC|SCHET|BALANCE_?ACC|BALACC|^BAL\d/.test(c)) return 'bal';
  if (/OSTAT|AMOUNT|AMMOUNT|SUMM?A?($|_)|SUM_|MEBLEG|QALIQ|OBR|TURN|DEBIT|DEBET|CREDIT|KREDIT|LIMIT|PRICE|COST|REST|SALDO|ODENIS|PAY|TOTAL|COMMIS|FEE|BALANCE$/.test(c)) return 'amount';
  if (/CODE|KOD|NUM|NO$|NOMER|NUMBER|SYMBOL|SIMV|SHIFR|SIM_/.test(c)) return 'code';
  if (/STATUS|STATE|FLAG|SIGN|TYPE|TIP|KIND|NOV|^IS_|ACTIVE|ARCHIV|CLOSED|PRIZ|INSIDER|MODE|LEVEL/.test(c)) return 'flag';
  if (/COUNT|CNT|QTY|SAY$|KOL/.test(c)) return 'count';
  return 'generic';
}

function guessType(kind: Kind, hint?: OraType): OraType {
  if (hint && hint !== 'unknown') return hint;
  switch (kind) {
    case 'date': return 'date';
    case 'id': case 'bal': case 'flag': case 'count': case 'curcode': return 'integer';
    case 'rate': case 'percent': case 'amount': case 'lamount': return 'float';
    default: return 'string';
  }
}

/* ------------------------------------------------------------------ row synthesis */

interface RowCtx { entity: Entity; idx: number; table: string; seed: string }

function custOf(r: RowCtx) {
  if (r.entity === 'customer') return CUSTOMERS[r.idx % CUSTOMERS.length];
  if (r.entity === 'account') return ACCOUNTS[r.idx % ACCOUNTS.length].cust;
  return CUSTOMERS[hash(r.seed + 'cust') % CUSTOMERS.length];
}
function accOf(r: RowCtx) {
  if (r.entity === 'account') return ACCOUNTS[r.idx % ACCOUNTS.length];
  if (r.entity === 'customer') return ACCOUNTS.find((a) => a.cust.id === CUSTOMERS[r.idx % CUSTOMERS.length].id) ?? ACCOUNTS[0];
  return ACCOUNTS[hash(r.seed + 'acc') % ACCOUNTS.length];
}
function curOf(r: RowCtx) {
  if (r.entity === 'currency') return CURRENCIES[r.idx % CURRENCIES.length];
  if (r.entity === 'account') return ACCOUNTS[r.idx % ACCOUNTS.length].cur;
  return hash(r.seed + 'cur') % 3 === 0 ? CURRENCIES[1] : CURRENCIES[0];
}

let seqCounter = 900000;

function valueFor(col: string, expr: string, type: OraType, r: RowCtx, isPrimaryId: boolean): unknown {
  const kind = classify(col);
  const c = col.toUpperCase();
  const s = r.seed + ':' + c;
  if (/NEXTVAL/i.test(expr)) return ++seqCounter;
  if (/SYSDATE|CURRENT_DATE/i.test(expr) && type !== 'string') return isoDate(0, true);
  const lit = /^'([^']*)'$/.exec(expr.trim());
  if (lit) return lit[1];
  if (/^-?\d+(\.\d+)?$/.test(expr.trim())) return Number(expr);

  if (kind === 'date' && (type === 'float' || type === 'integer')) {
    // date columns read into numeric fields arrive as TDateTime numbers
    const d = new Date(isoDate(hash(s) % 45));
    return Math.round((Date.UTC(d.getFullYear(), d.getMonth(), d.getDate()) - Date.UTC(1899, 11, 30)) / 86400000);
  }
  if (type === 'date' || kind === 'date') {
    if (/CLOSE|END|EXPIR|BITME/.test(c)) return r.entity === 'account' && ACCOUNTS[r.idx % ACCOUNTS.length].close ? isoDate(5) : (/END|EXPIR|BITME/.test(c) ? isoDate(-30 - (hash(s) % 700)) : null);
    if (/OPEN|BEGIN|START|REG|ACIL/.test(c)) return isoDate(30 + (hash(s) % 1500));
    return isoDate(hash(s) % 45, /TIME|DT$/.test(c));
  }
  switch (kind) {
    case 'rowid': return `AAA${r.table.slice(0, 6)}${String(r.idx).padStart(6, '0')}`;
    case 'id': {
      if (isPrimaryId) {
        switch (r.entity) {
          case 'account': return ACCOUNTS[r.idx % ACCOUNTS.length].id;
          case 'customer': return CUSTOMERS[r.idx % CUSTOMERS.length].id;
          case 'currency': return CURRENCIES[r.idx % CURRENCIES.length].code;
          case 'filial': return FILIALS[r.idx % FILIALS.length].id;
          case 'bank': return BANKS[r.idx % BANKS.length].id;
          case 'user': return USERS[r.idx % USERS.length].id;
          case 'company': return COMPANIES[r.idx % COMPANIES.length].id;
          case 'balance': return BAL_ACCOUNTS[r.idx % BAL_ACCOUNTS.length].code;
          default: return 1 + r.idx;
        }
      }
      if (/KLI|CUST|CLIENT|MUSTERI|OWNER/.test(c)) return custOf(r).id;
      if (/ACC|HESAB/.test(c)) return accOf(r).id;
      if (/VAL|CUR/.test(c)) return curOf(r).code;
      if (/FIL|BRANCH/.test(c)) return custOf(r).filial;
      if (/USER|OPER|EXEC/.test(c)) return USERS[hash(s) % USERS.length].id;
      if (/BANK/.test(c)) return BANKS[hash(s) % BANKS.length].id;
      if (/COMP/.test(c)) return 1;
      return 1 + (hash(s) % 40);
    }
    case 'accno':
      if (/CORR|KORR|COR/.test(c)) return BANKS[hash(s) % BANKS.length].corr;
      if (/IBAN/.test(c)) return iban(accOf(r).accNo);
      // the credit side of a transaction is a different account than the debit side
      if (/CR|KR|CREDIT|KREDIT|RECEIV|BENEF|TO_/.test(c) && r.entity !== 'account') return ACCOUNTS[hash(r.seed + 'credit') % ACCOUNTS.length].accNo;
      return accOf(r).accNo;
    case 'swift': return r.entity === 'bank' ? BANKS[r.idx % BANKS.length].swift : pick(BANKS, s).swift;
    case 'inn': return custOf(r).inn;
    case 'phone': return custOf(r).phone;
    case 'address': return custOf(r).address;
    case 'bankname': return r.entity === 'bank' ? BANKS[r.idx % BANKS.length].name : pick(BANKS, s).name;
    case 'filialname': return FILIALS[(custOf(r).filial - 1) % FILIALS.length].name;
    case 'curname':
      if (type === 'integer' || type === 'float') return curOf(r).code;
      return /FULL|LONG/.test(c) || (r.entity === 'currency' && /^NAME$/.test(c)) ? curOf(r).name : curOf(r).sname;
    case 'curcode': return type === 'string' ? curOf(r).sname : curOf(r).code;
    case 'user':
      if (type === 'integer' || type === 'float') return USERS[hash(s) % USERS.length].id;
      return r.entity === 'user' ? USERS[r.idx % USERS.length].login : USERS[hash(s) % USERS.length].login;
    case 'name':
      switch (r.entity) {
        case 'currency': return curOf(r).name;
        case 'filial': return FILIALS[r.idx % FILIALS.length].name;
        case 'bank': return BANKS[r.idx % BANKS.length].name;
        case 'user': return USERS[r.idx % USERS.length].name;
        case 'balance': return BAL_ACCOUNTS[r.idx % BAL_ACCOUNTS.length].name;
        case 'company': return COMPANIES[r.idx % COMPANIES.length].name;
        case 'account': return ACCOUNTS[r.idx % ACCOUNTS.length].name;
        default: return /BENEF|RECEIV/.test(c) ? pick(CUSTOMERS, s).name : custOf(r).name;
      }
    case 'purpose': return pick(PURPOSES, s);
    case 'rate': return /KURS|COURSE/.test(c) || r.entity === 'currency' ? curOf(r).rate : Math.round(rnd(s) * 2000) / 100;
    case 'percent': return Math.round((2 + rnd(s) * 22) * 100) / 100;
    case 'bal':
      if (r.entity === 'balance') return BAL_ACCOUNTS[r.idx % BAL_ACCOUNTS.length].code;
      if (/2|3|4$/.test(c) && /BAL_?CN[234]|SACC[234]/.test(c)) return Number(String(accOf(r).bal).slice(0, c.endsWith('2') ? 3 : c.endsWith('3') ? 2 : 1));
      return accOf(r).bal;
    case 'amount': {
      if (r.entity === 'account' && /^OSTAT$|^AMOUNT$|^QALIQ$/.test(c)) return ACCOUNTS[r.idx % ACCOUNTS.length].amount;
      const base = Math.round(rnd(s) * 85000 * 100) / 100;
      if (/LIMIT/.test(c)) return Math.round(rnd(s) * 20) * 5000;
      return /DELAY|LAZY|ARREST|AREST/.test(c) ? (hash(s) % 5 === 0 ? base / 10 : 0) : base;
    }
    case 'lamount': {
      const a = r.entity === 'account' ? ACCOUNTS[r.idx % ACCOUNTS.length] : accOf(r);
      return Math.round(a.amount * a.cur.rate * 100) / 100;
    }
    case 'code':
      if (type === 'integer' || type === 'float') return 1 + (hash(s) % 99);
      if (r.entity === 'filial') return FILIALS[r.idx % FILIALS.length].code;
      if (r.entity === 'bank') return BANKS[r.idx % BANKS.length].code;
      return String(100 + (hash(s) % 900));
    case 'flag':
      if (type === 'string') return pick(['A', 'A', 'A', 'B', 'N'], s);
      return /INSIDER|ARCHIV|CLOSED|IS_/.test(c) ? (hash(s) % 9 === 0 ? 1 : 0) : hash(s) % 3;
    case 'count':
      if (/VALUE/.test(c)) return type === 'string' ? '0' : 0;
      return 1 + (hash(s) % 25);
    default:
      if (type === 'integer') return hash(s) % 100;
      if (type === 'float') return Math.round(rnd(s) * 1000 * 100) / 100;
      if (type === 'boolean') return hash(s) % 2 === 0;
      return pick(['Əsas', 'Aktiv', 'Cari', 'Standart', 'Xüsusi', 'Əlavə', 'Daxili', 'Xarici'], s);
  }
}

/* ------------------------------------------------------------------ session edits */

interface TableEdits { updates: Map<string, Record<string, unknown>>; deleted: Set<string>; inserted: Record<string, unknown>[] }
const edits = new Map<string, TableEdits>();
function editsFor(t: string) {
  let e = edits.get(t);
  if (!e) { e = { updates: new Map(), deleted: new Set(), inserted: [] }; edits.set(t, e); }
  return e;
}

/* ------------------------------------------------------------------ the gateway */

const delay = (ms: number) => new Promise((r) => setTimeout(r, ms));

export class MockOracleApi implements OracleApi {
  readonly name = 'mock';
  private sid = 1000 + Math.floor(Math.random() * 8000);

  async logon(r: LogonRequest): Promise<LogonResult> {
    await delay(250);
    if (!r.username) throw new OracleError(1017, 'ORA-01017: invalid username/password; logon denied');
    logger.api(`logon ${r.username.toUpperCase()}@${r.database} (mock)`);
    return { sessionId: 'mock-' + Date.now(), username: r.username.toUpperCase(), database: r.database, sid: this.sid,
      serverDate: isoDate(0) };
  }
  async logoff() { /* */ }

  async query(r: QueryRequest): Promise<QueryResult> {
    await delay(20);
    const info = inspectSql(r.sql);
    const res = this.synthesize(info, r);
    logger.api(`query ${r.source} → ${res.rows.length} row(s) [${info.tables.map((t) => t.name).join(', ') || '—'}]`);
    logger.debug(r.sql.trim().replace(/\s+/g, ' ').slice(0, 600));
    return res;
  }

  private synthesize(info: SelectInfo, r: QueryRequest): QueryResult {
    const hints = new Map((r.fieldHints ?? []).map((h) => [h.name.toUpperCase(), h]));
    const vars = new Map(r.variables.map((v) => [v.name.replace(/^:/, '').toUpperCase(), v.value]));
    const mainTable = info.tables.find((t) => t.name !== 'DUAL' && t.name !== 'SUBQUERY')?.name ?? (info.fromDual ? 'DUAL' : 'GENERIC');
    let entity = tableEntity(mainTable);
    // columns
    let cols: { alias: string; expr: string; source: string; aggregate: boolean }[] = info.columns;
    if (info.star || cols.length === 0) {
      const extra = [...hints.keys()].filter((h) => !cols.some((c) => c.alias === h));
      cols = [...cols, ...extra.map((h) => ({ alias: h, expr: h, source: h, aggregate: false }))];
      if (cols.length === 0) cols = defaultColumns(entity);
    }
    // fields declared in the DFM but not in the SQL (calculated/lookup) are not returned by Oracle either
    const columns: ColumnDef[] = cols.map((c) => {
      const h = hints.get(c.alias);
      return { name: c.alias, type: guessType(classify(c.source || c.alias), h?.type), size: h?.size };
    });
    const allAgg = cols.length > 0 && cols.every((c) => c.aggregate || /\b(COUNT|SUM|MAX|MIN|AVG)\s*\(/i.test(c.expr) || /^'.*'$|^\d+$/.test(c.expr.trim()));
    const single = info.fromDual || (allAgg && !info.groupBy);

    // row index set, honouring `ID = :x` style filters
    let indices: number[];
    let fixed: Record<string, unknown> = {};
    if (single) indices = [0];
    else {
      const n = POOL_SIZE[entity];
      indices = Array.from({ length: n }, (_, i) => i);
      for (const f of info.eqFilters) {
        const v = vars.get(f.variable);
        if (v === undefined || v === null || v === '') continue;
        const k = classify(f.column);
        const primary = (k === 'id' && isPrimaryIdCol(f.column, mainTable)) || (entity === 'currency' && /VALUTE|CODE/.test(f.column));
        if (primary) {
          indices = indices.filter((i) => String(valueFor(f.column, f.column, guessType(k), { entity, idx: i, table: mainTable, seed: mainTable + i }, true)) === String(v));
          if (!indices.length) indices = [0];
        } else {
          fixed[f.column] = v;
          if (entity === 'generic' || indices.length > 12) indices = indices.slice(0, 4 + (hash(String(v)) % 9));
        }
      }
    }
    const ed = editsFor(mainTable);
    const rows: unknown[][] = [];
    const primaryIdCol = cols.find((c) => classify(c.source) === 'id' && isPrimaryIdCol(c.source, mainTable))?.alias
      ?? cols.find((c) => classify(c.source) === 'id')?.alias;
    for (const i of indices) {
      const ctx: RowCtx = { entity, idx: i, table: mainTable, seed: mainTable + i + JSON.stringify(fixed) };
      const row: Record<string, unknown> = {};
      for (const c of cols) {
        const t = columns.find((x) => x.name === c.alias)!.type;
        const hint = hints.get(c.alias);
        let v: unknown;
        if (c.aggregate || (single && /\b(COUNT|SUM|MAX|MIN|AVG)\s*\(/i.test(c.expr))) v = aggregateValue(c.expr.replace(/^\w+\s*\(\s*/, (m) => (/^(nvl|trunc|round|abs|to_number)/i.test(m) ? '' : m)), entity, info, t);
        else if (fixed[c.source] !== undefined) v = fixed[c.source];
        else v = valueFor(c.source || c.alias, c.expr, t, ctx, c.alias === primaryIdCol);
        if (hint?.type === 'string' && v !== null && typeof v !== 'string') v = String(v);
        if (hint?.size && typeof v === 'string' && v.length > hint.size) v = v.slice(0, hint.size);
        row[c.alias] = v;
      }
      const rowid = (row.ROWID as string) ?? `${mainTable}:${i}`;
      if (ed.deleted.has(rowid)) continue;
      Object.assign(row, ed.updates.get(rowid) ?? {});
      rows.push(cols.map((c) => row[c.alias]));
    }
    if (!single && Object.keys(fixed).length === 0) {
      for (const ins of ed.inserted) rows.push(cols.map((c) => ins[c.alias] ?? null));
    }
    return { columns, rows };
  }

  async execute(r: ExecuteRequest): Promise<ExecuteResult> {
    await delay(10);
    const info = inspectSql(r.sql);
    const vars: Record<string, unknown> = {};
    for (const v of r.variables) vars[v.name.replace(/^:/, '').toUpperCase()] = v.value;
    logger.api(`execute ${r.source} [${info.kind}]`);
    logger.debug(r.sql.trim().replace(/\s+/g, ' ').slice(0, 600));
    if (info.kind === 'select') {
      const q = this.synthesize(info, { source: r.source, sql: r.sql, variables: r.variables });
      return { rowsProcessed: q.rows.length, variables: vars, columns: q.columns, rows: q.rows };
    }
    if (info.kind === 'plsql') {
      // OUT binds of anonymous blocks: assign plausible values to NULL outputs
      for (const k of Object.keys(vars)) if (vars[k] === null || vars[k] === undefined) vars[k] = mockScalar(k);
    }
    return { rowsProcessed: info.kind === 'plsql' ? 0 : 1, variables: vars };
  }

  async callPackage(r: PackageCallRequest): Promise<PackageCallResult> {
    await delay(3);
    const full = `${r.package}.${r.name}`.toUpperCase();
    let result: unknown = null;
    switch (r.kind) {
      case 'date': result = isoDate(0); break;
      case 'integer': result = /COUNT|CNT|ERR|EXIST|CHECK|LOCK|CLOSED|ARCHIV/.test(full) ? 0
        : /FILIAL|BRANCH|USER|GROUP|COMPANY|LANG/.test(full) ? 1 : /ID|SEQ|NEW|NEXT/.test(full) ? ++seqCounter : 1; break;
      case 'float': result = /RATE|KURS/.test(full) ? 1.7 : 0; break;
      case 'boolean': result = !/EXIST|ERROR|LOCK|CLOSED|ARCHIV/.test(full) || /CAN|ALLOW|ACCESS|GRANT/.test(full); break;
      case 'string': result = /USER|NAME/.test(full) ? 'SABUHI' : /VERSION/.test(full) ? '4.0' : ''; break;
      case 'variant': result = null; break;
      default: result = null;
    }
    const outParams: Record<number, unknown> = {};
    r.params.forEach((p, i) => { if (p && typeof p === 'object' && 'out' in (p as object)) outParams[i] = mockScalar((p as { out: OraType }).out); });
    logger.api(`call ${full}${r.kind === 'procedure' ? '' : ' → ' + JSON.stringify(result)}`);
    return { result, outParams };
  }

  async applyRecord(r: ApplyRecordRequest): Promise<ApplyRecordResult> {
    await delay(10);
    const info = inspectSql(r.sql);
    const table = (r.updatingTable ?? info.tables[0]?.name ?? 'GENERIC').toUpperCase();
    const ed = editsFor(table);
    logger.api(`apply ${r.action} ${table}${r.rowid ? ' ' + r.rowid : ''}`);
    switch (r.action) {
      case 'insert': {
        const rowid = `${table}:new${ed.inserted.length + 1}`;
        ed.inserted.push({ ...r.values, ROWID: rowid });
        return { rowid, values: r.values };
      }
      case 'update':
        if (r.rowid) {
          const ins = ed.inserted.find((x) => x.ROWID === r.rowid);
          if (ins) Object.assign(ins, r.values);
          else ed.updates.set(r.rowid, { ...(ed.updates.get(r.rowid) ?? {}), ...r.values });
        }
        return { rowid: r.rowid, values: r.values };
      case 'delete':
        if (r.rowid) { ed.deleted.add(r.rowid); ed.inserted = ed.inserted.filter((x) => x.ROWID !== r.rowid); }
        return { rowid: r.rowid };
      default:
        return { rowid: r.rowid, values: r.values };
    }
  }

  async commit() { logger.api('commit'); }
  async rollback() { logger.api('rollback'); }
  async savepoint(n: string) { logger.api('savepoint ' + n); }
  async rollbackToSavepoint(n: string) { logger.api('rollback to ' + n); }
}

function isPrimaryIdCol(col: string, table: string) {
  const c = col.toUpperCase();
  const t = table.toUpperCase();
  if (c === 'ID') return true;
  const e = tableEntity(t);
  if (e === 'account' && /^ACC_?ID$|^ACCID$/.test(c) && !/TRANS|TR_|OPER|DOC/.test(t)) return /^ACC/.test(t) || t === 'ACCOUNT';
  if (e === 'customer' && /^(KLI|CUST|CLIENT)_?ID$|^CUSTOMERID$/.test(c)) return /^(KLI|CUST|CLIENT)/.test(t);
  return c === t + '_ID';
}

function aggregateValue(expr: string, entity: Entity, info: SelectInfo, t: OraType): unknown {
  const fn = /^(\w+)/.exec(expr)?.[1].toUpperCase();
  if (fn === 'COUNT') return info.eqFilters.length ? 1 : POOL_SIZE[entity];
  if (t === 'date') return isoDate(0);
  if ((fn === 'MAX' || fn === 'MIN') && /ID|NUM|NO\b|NOMER|CODE|KOD|SEQ|N\b/i.test(expr)) return POOL_SIZE[entity] + 1 + (/\+\s*1/.test(expr) ? 1 : 0);
  return Math.round(rnd(expr) * 500000 * 100) / 100;
}

function mockScalar(nameOrType: string): unknown {
  const n = nameOrType.toUpperCase();
  if (n === 'DATE' || /DAT/.test(n)) return isoDate(0);
  if (n === 'STRING') return '';
  if (n === 'INTEGER' || n === 'FLOAT' || /ID|NUM|CNT|COUNT|RES|ERR/.test(n)) return /ERR/.test(n) ? 0 : 1;
  return null;
}

function defaultColumns(e: Entity) {
  const mk = (...names: string[]) => names.map((n) => ({ alias: n, expr: n, source: n, aggregate: false }));
  switch (e) {
    case 'account': return mk('ID', 'ACC_NO', 'NAME', 'VAL_ACC', 'BAL_CN1', 'KLI_ID', 'OPEN_DAT', 'CLOSE_DAT');
    case 'customer': return mk('ID', 'NAME', 'INN', 'ADDRESS', 'PHONE', 'FILIAL');
    case 'currency': return mk('VALUTE', 'VAL_NAME', 'NAME', 'KURS');
    case 'bank': return mk('ID', 'NAME', 'SWIFT', 'CODE', 'CORR_ACC');
    case 'filial': return mk('ID', 'NAME', 'CODE');
    case 'user': return mk('ID', 'USERNAME', 'NAME');
    case 'company': return mk('ID', 'COMPANY_NAME');
    case 'balance': return mk('BAL', 'NAME');
    default: return mk('ID', 'NAME', 'CODE');
  }
}

/** Mock-only: invent a column the code reads by name but the SQL text does not list (e.g. `select *`). */
export function synthesizeColumn(sql: string, col: string, rows: number): { type: OraType; values: unknown[] } {
  const info = inspectSql(sql);
  const mainTable = info.tables.find((t) => t.name !== 'DUAL' && t.name !== 'SUBQUERY')?.name ?? 'GENERIC';
  const entity = tableEntity(mainTable);
  const kind = classify(col);
  const type = guessType(kind);
  const values = Array.from({ length: rows }, (_, i) => valueFor(col, col, type, { entity, idx: i, table: mainTable, seed: mainTable + i + '{}' }, isPrimaryIdCol(col, mainTable)));
  return { type, values };
}
