/* TDataSet.Filter expression evaluator: comparisons, AND/OR/NOT, LIKE, IS NULL, '*' partial match. */

type Get = (field: string) => unknown;
type Pred = (get: Get) => boolean;
type Val = (get: Get) => unknown;

export function compileFilter(expr: string, options: string[] = []): Pred {
  const ci = options.map((o) => o.toLowerCase()).includes('focaseinsensitive');
  const noPartial = options.map((o) => o.toLowerCase()).includes('fonopartialcompare');
  const toks = tokenize(expr);
  let i = 0;
  const peek = () => toks[i];
  const next = () => toks[i++];
  const isKw = (t: string | undefined, k: string) => !!t && t.toUpperCase() === k;

  function parseOr(): Pred {
    let l = parseAnd();
    while (isKw(peek(), 'OR')) { next(); const r = parseAnd(); const a = l; l = (g) => a(g) || r(g); }
    return l;
  }
  function parseAnd(): Pred {
    let l = parseNot();
    while (isKw(peek(), 'AND')) { next(); const r = parseNot(); const a = l; l = (g) => a(g) && r(g); }
    return l;
  }
  function parseNot(): Pred {
    if (isKw(peek(), 'NOT')) { next(); const p = parseNot(); return (g) => !p(g); }
    return parseCmp();
  }
  function parseCmp(): Pred {
    if (peek() === '(') {
      const save = i;
      next();
      try {
        const p = parseOr();
        if (peek() === ')') { next(); return p; }
      } catch { /* fall through */ }
      i = save;
    }
    const a = parseOperand();
    const op = peek();
    if (isKw(op, 'IS')) {
      next();
      const neg = isKw(peek(), 'NOT');
      if (neg) next();
      next(); // NULL
      return (g) => { const v = a(g); const isNull = v === null || v === undefined || v === ''; return neg ? !isNull : isNull; };
    }
    if (isKw(op, 'LIKE')) {
      next();
      const b = parseOperand();
      return (g) => {
        const pat = String(b(g) ?? '').replace(/[.+?^${}()|[\]\\]/g, '\\$&').replace(/%|\*/g, '.*').replace(/_/g, '.');
        return new RegExp('^' + pat + '$', ci ? 'i' : '').test(String(a(g) ?? ''));
      };
    }
    if (op && ['=', '<>', '<', '>', '<=', '>='].includes(op)) {
      next();
      const b = parseOperand();
      return (g) => compare(a(g), b(g), op);
    }
    return (g) => !!a(g);
  }
  function parseOperand(): Val {
    const t = next();
    if (t === undefined) return () => null;
    if (t.startsWith("'")) {
      const s = t.slice(1, -1).replace(/''/g, "'");
      return () => s;
    }
    if (/^-?\d+(\.\d+)?$/.test(t)) { const n = Number(t); return () => n; }
    if (t.toUpperCase() === 'NULL') return () => null;
    if (t.startsWith('[')) { const f = t.slice(1, -1); return (g) => g(f); }
    if (t === '(') { const v = parseOperand(); next(); return v; }
    return (g) => g(t);
  }
  function compare(a: unknown, b: unknown, op: string): boolean {
    if (typeof b === 'string' && typeof a !== 'number') {
      let x = String(a ?? ''), y = b;
      if (ci) { x = x.toLowerCase(); y = y.toLowerCase(); }
      if (!noPartial && y.endsWith('*') && (op === '=' || op === '<>')) {
        const m = x.startsWith(y.slice(0, -1));
        return op === '=' ? m : !m;
      }
      switch (op) {
        case '=': return x === y; case '<>': return x !== y; case '<': return x < y; case '>': return x > y;
        case '<=': return x <= y; case '>=': return x >= y;
      }
    }
    const x = Number(a), y = Number(b);
    if (a === null || a === undefined) return op === '<>' ? b !== null : b === null && op === '=';
    switch (op) {
      case '=': return x === y; case '<>': return x !== y; case '<': return x < y; case '>': return x > y;
      case '<=': return x <= y; case '>=': return x >= y;
    }
    return false;
  }
  const p = parseOr();
  return p;
}

function tokenize(s: string): string[] {
  const out: string[] = [];
  let i = 0;
  while (i < s.length) {
    const c = s[i];
    if (/\s/.test(c)) { i++; continue; }
    if (c === "'") {
      let j = i + 1;
      while (j < s.length) { if (s[j] === "'" && s[j + 1] === "'") { j += 2; continue; } if (s[j] === "'") break; j++; }
      out.push(s.slice(i, j + 1)); i = j + 1; continue;
    }
    if (c === '[') { const j = s.indexOf(']', i); out.push(s.slice(i, j + 1)); i = j + 1; continue; }
    const two = s.slice(i, i + 2);
    if (two === '<>' || two === '<=' || two === '>=') { out.push(two); i += 2; continue; }
    if ('=<>()'.includes(c)) { out.push(c); i++; continue; }
    const m = /^[^\s=<>()']+/.exec(s.slice(i));
    if (m) { out.push(m[0]); i += m[0].length; continue; }
    i++;
  }
  return out;
}
