/* Minimal SQL inspection used by the mock backend (not a full parser). */

export interface SelectInfo {
  kind: 'select' | 'insert' | 'update' | 'delete' | 'plsql' | 'other';
  columns: { alias: string; expr: string; source: string; aggregate: boolean }[];
  star: boolean;
  tables: { name: string; alias: string }[];
  binds: string[];
  /** Equality filters `col = :var` / `:var = col` (column name upper-case, var upper-case without colon). */
  eqFilters: { column: string; variable: string }[];
  groupBy: boolean;
  fromDual: boolean;
}

function stripComments(sql: string) {
  return sql.replace(/--[^\n]*/g, ' ').replace(/\/\*[\s\S]*?\*\//g, ' ');
}

function splitTop(s: string, sep = ','): string[] {
  const out: string[] = [];
  let depth = 0;
  let q = false;
  let cur = '';
  for (let i = 0; i < s.length; i++) {
    const c = s[i];
    if (c === "'") q = !q;
    if (!q) {
      if (c === '(') depth++;
      else if (c === ')') depth--;
      else if (c === sep && depth === 0) { out.push(cur); cur = ''; continue; }
    }
    cur += c;
  }
  if (cur.trim()) out.push(cur);
  return out;
}

/** Find a top-level keyword position (outside parentheses/quotes). */
function findTop(s: string, kw: RegExp, from = 0): number {
  let depth = 0;
  let q = false;
  for (let i = from; i < s.length; i++) {
    const c = s[i];
    if (c === "'") q = !q;
    if (q) continue;
    if (c === '(') depth++;
    else if (c === ')') depth--;
    else if (depth === 0) {
      kw.lastIndex = 0;
      const m = kw.exec(s.slice(i, i + 40));
      if (m && m.index === 0 && (i === 0 || /[\s)]/.test(s[i - 1]))) return i;
    }
  }
  return -1;
}

export function inspectSql(sqlIn: string): SelectInfo {
  const sql = stripComments(sqlIn).trim();
  const up = sql.toUpperCase();
  const info: SelectInfo = {
    kind: 'other', columns: [], star: false, tables: [], binds: [], eqFilters: [], groupBy: false, fromDual: false,
  };
  info.binds = [...new Set([...sql.matchAll(/:([A-Za-z_][\w$#]*)/g)].map((m) => m[1].toUpperCase()))];
  if (/^(BEGIN|DECLARE)\b/.test(up)) { info.kind = 'plsql'; return info; }
  if (/^INSERT\b/.test(up)) { info.kind = 'insert'; return info; }
  if (/^UPDATE\b/.test(up)) { info.kind = 'update'; return info; }
  if (/^DELETE\b/.test(up)) { info.kind = 'delete'; return info; }
  if (!/^(SELECT|WITH)\b/.test(up)) return info;
  info.kind = 'select';

  // skip WITH ... AS (...) blocks: take the last top-level SELECT
  let body = sql;
  if (/^WITH\b/i.test(body)) {
    const idx = findTop(body, /SELECT\b/i, 4);
    if (idx > 0) body = body.slice(idx);
  }
  const selStart = body.search(/SELECT\b/i) + 6;
  const fromIdx = findTop(body, /FROM\b/i, selStart);
  const selectList = body.slice(selStart, fromIdx < 0 ? undefined : fromIdx).replace(/^\s*(DISTINCT|UNIQUE|ALL)\s+/i, '');
  for (const raw of splitTop(selectList)) {
    const e = raw.trim();
    if (e === '*' || /\.\*$/.test(e)) { info.star = true; continue; }
    let alias = '';
    let expr = e;
    const asM = /^([\s\S]*\S)\s+AS\s+("?[A-Za-z_][\w$#]*"?)$/i.exec(e);
    const bareM = /^([\s\S]*[\w$#)'"])\s+("?[A-Za-z_][\w$#]*"?)$/.exec(e);
    if (asM) { expr = asM[1].trim(); alias = asM[2].replace(/"/g, ''); }
    else if (bareM && !/^(END|NULL)$/i.test(bareM[2])) { expr = bareM[1].trim(); alias = bareM[2].replace(/"/g, ''); }
    const lastId = /([A-Za-z_][\w$#]*)\s*$/.exec(expr.replace(/\(.*\)/s, ''))?.[1] ?? expr;
    if (!alias) alias = /^[\w$#.]+$/.test(expr) ? expr.split('.').pop()! : lastId;
    const aggregate = /^(COUNT|SUM|MAX|MIN|AVG)\s*\(/i.test(expr);
    const source = /^[\w$#.]+$/.test(expr) ? expr.split('.').pop()!.toUpperCase()
      : aggregate ? (/\(\s*(?:DISTINCT\s+)?(?:[\w$#]+\.)?([\w$#*]+)/i.exec(expr)?.[1] ?? alias).toUpperCase()
        : (/(?:NVL|TRUNC|ROUND|TO_CHAR|TO_DATE|ABS|DECODE|UPPER|LOWER|TRIM)\s*\(\s*(?:[\w$#]+\.)?([\w$#]+)/i.exec(expr)?.[1] ?? alias).toUpperCase();
    info.columns.push({ alias: alias.toUpperCase(), expr, source, aggregate });
  }
  if (fromIdx >= 0) {
    const rest = body.slice(fromIdx + 4);
    const endIdx = (() => {
      let best = rest.length;
      for (const kw of [/WHERE\b/i, /GROUP\s+BY\b/i, /ORDER\s+BY\b/i, /CONNECT\s+BY\b/i, /START\s+WITH\b/i, /UNION\b/i, /HAVING\b/i, /FOR\s+UPDATE\b/i, /MINUS\b/i]) {
        const i = findTop(rest, kw);
        if (i >= 0 && i < best) best = i;
      }
      return best;
    })();
    const fromList = rest.slice(0, endIdx);
    for (const t of splitTop(fromList.replace(/\b(LEFT|RIGHT|FULL|INNER|OUTER|CROSS)?\s*JOIN\b/gi, ',').replace(/\bON\b[\s\S]*?(?=,|$)/gi, ''))) {
      const tm = /^\s*([\w$#.]+|\([\s\S]*\))\s*([\w$#]*)\s*$/.exec(t.trim());
      if (tm) {
        const name = tm[1].startsWith('(') ? 'SUBQUERY' : tm[1].split('.').pop()!.toUpperCase();
        info.tables.push({ name, alias: (tm[2] || name).toUpperCase() });
      }
    }
    info.fromDual = info.tables.length === 1 && info.tables[0].name === 'DUAL';
    info.groupBy = /\bGROUP\s+BY\b/i.test(rest);
    const whereIdx = findTop(rest, /WHERE\b/i);
    if (whereIdx >= 0) {
      const where = rest.slice(whereIdx);
      for (const m of where.matchAll(/(?:[\w$#]+\.)?([\w$#]+)\s*=\s*:([\w$#]+)/g)) info.eqFilters.push({ column: m[1].toUpperCase(), variable: m[2].toUpperCase() });
      for (const m of where.matchAll(/:([\w$#]+)\s*=\s*(?:[\w$#]+\.)?([\w$#]+)/g)) info.eqFilters.push({ column: m[2].toUpperCase(), variable: m[1].toUpperCase() });
    }
  }
  return info;
}
