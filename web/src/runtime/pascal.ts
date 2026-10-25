/*
 * `$` — the helper object every transpiled unit receives.  Implements Pascal
 * semantics on top of JS: identifier resolution through scope chains, `with`
 * blocks, auto-calling parameterless routines, 1-based strings, sets, var
 * parameters, exceptions and `inherited`.
 */
import {
  NOTFOUND, Found, Routine, routine, isRoutine, isType, PType, isPObj, PasException, AbortSignal, Ref, ValueRef,
  TObject, inheritsFrom, reflectGet,
} from './core';
import { Env, UnitObj, getBuiltin, pickOverload } from './env';
import { logger } from './log';

type Chain = unknown[];
type Accessor = { get: () => Promise<unknown>; set: (v: unknown) => Promise<void>; local: true };

const records = new Map<string, Record<string, () => unknown>>();

/* ------------------------------------------------------------------ member protocol */

export async function getMember(obj: unknown, lname: string): Promise<Found> {
  if (obj == null) throw accessViolation(lname);
  if (isPObj(obj)) return await obj.pget(lname);
  if (isType(obj)) return typeMember(obj, lname);
  if (typeof obj === 'object') {
    if (obj instanceof PasException) return excMember(obj, lname);
    const rec = obj as Record<string, unknown>;
    if (lname in rec) return rec[lname];
    for (const k of Object.keys(rec)) if (k.toLowerCase() === lname) return rec[k];
    return NOTFOUND;
  }
  return NOTFOUND;
}

export async function setMember(obj: unknown, lname: string, v: unknown): Promise<boolean> {
  if (obj == null) throw accessViolation(lname);
  if (isPObj(obj)) return await obj.pset(lname, v);
  if (typeof obj === 'object') {
    (obj as Record<string, unknown>)[lname] = v;
    return true;
  }
  return false;
}

function typeMember(t: PType, lname: string): Found {
  switch (lname) {
    case 'create':
      return routine((...args: any[]) => t.create(args), 'Create');
    case 'classname':
      return t.name;
    case 'inheritsfrom':
      return routine((n: any) => t.isAncestorOf?.(typeof n === 'string' ? n : n?.name) ?? false);
  }
  // class methods (class function / class procedure) on user classes
  const def = (t as any).def as import('./env').ClassDef | undefined;
  const m = def?.findMethod(lname);
  if (m) return routine((...a: any[]) => m(t, ...a), m.__name, m.__meta);
  return NOTFOUND;
}

function excMember(e: PasException, lname: string): Found {
  if (lname === 'message') return e.message;
  if (lname === 'classname') return e.className;
  if (lname === 'errorcode') return (e as any).errorCode ?? 0;
  if (e.obj) return reflectGet(e.obj, lname);
  return NOTFOUND;
}

function accessViolation(name: string) {
  return new PasException('EAccessViolation', `Access violation: '${name}' on nil`, ['exception']);
}

/* ------------------------------------------------------------------ calling */

export async function callValue(f: unknown, args: unknown[]): Promise<unknown> {
  if (isRoutine(f) || typeof f === 'function') return await (f as Routine)(...args);
  if (isType(f)) return args[0]; // typecast  TFoo(x)
  if (args.length === 0) return f;
  // Variant arrays / indexed default property used with () syntax
  if (isPObj(f) && typeof (f as any).pindex === 'function') return (f as any).pindex(args);
  throw new PasException('EInvalidOp', `Value is not callable`, ['exception']);
}

async function autoCall(v: unknown): Promise<unknown> {
  // A routine that needs parameters cannot be called without arguments in Pascal:
  // a bare reference to it is a method pointer (e.g. `DelCol := HeaderDel;`).
  if (isRoutine(v)) return v.__meta?.params?.length ? v : await v();
  return v;
}

/* ------------------------------------------------------------------ scope resolution */

function envOf(C: Chain): Env {
  const u = C[C.length - 1] as UnitObj;
  return u.env;
}

async function resolve(C: Chain, lname: string): Promise<Found> {
  for (const s of C) {
    if (s == null) continue;
    const r = s instanceof UnitObj ? await s.pget(lname) : await getMember(s, lname);
    if (r !== NOTFOUND) return r;
  }
  return await envOf(C).lookup(lname);
}

function unknownIdent(name: string): never {
  throw new PasException('EUndeclared', `Undeclared identifier '${name}' (not available in web runtime)`,
    ['exception']);
}

/* ------------------------------------------------------------------ operators */

function isNullish(v: unknown) { return v === null || v === undefined; }
function num(v: unknown): number {
  if (typeof v === 'number') return v;
  if (typeof v === 'boolean') return v ? 1 : 0;
  if (isNullish(v)) return 0;
  if (typeof v === 'string') {
    if (v.length === 1 && !/[0-9]/.test(v)) return v.charCodeAt(0);
    const n = Number(v.replace(',', '.'));
    return isNaN(n) ? 0 : n;
  }
  return Number(v);
}

function cmpVals(a: unknown, b: unknown): number {
  if (typeof a === 'string' && typeof b === 'string') return a < b ? -1 : a > b ? 1 : 0;
  if (typeof a === 'string' && typeof b === 'number') { const n = Number(a); if (!isNaN(n)) return n - b; }
  if (typeof b === 'string' && typeof a === 'number') { const n = Number(b); if (!isNaN(n)) return a - n; }
  return num(a) - num(b);
}

function eq(a: unknown, b: unknown): boolean {
  if (a === b) return true;
  if (isNullish(a) || isNullish(b)) {
    // Variant Null vs '' / 0 are different in Delphi; nil vs object
    return isNullish(a) && isNullish(b);
  }
  if (typeof a === 'object' || typeof b === 'object') {
    if (Array.isArray(a) && Array.isArray(b)) return a.length === b.length && a.every((x) => b.some((y) => eq(x, y)));
    return false;
  }
  if (typeof a === 'boolean' || typeof b === 'boolean') return num(a) === num(b);
  if (typeof a === 'string' && typeof b === 'string') return a === b;
  return cmpVals(a, b) === 0;
}

function toSet(v: unknown): unknown[] { return Array.isArray(v) ? v : isNullish(v) ? [] : [v]; }

export function rangeOf(a: unknown, b: unknown): unknown[] {
  const out: unknown[] = [];
  if (typeof a === 'string' && typeof b === 'string') {
    for (let c = a.charCodeAt(0); c <= b.charCodeAt(0); c++) out.push(String.fromCharCode(c));
  } else {
    for (let i = num(a); i <= num(b); i++) out.push(i);
  }
  return out;
}

/* ------------------------------------------------------------------ the $ object */

let tickCount = 0;

export function makeDollar(env: Env) {
  const $ = {
    env,

    unit(name: string, uses: string[]) {
      const u = new UnitObj(name, uses, env);
      env.addUnit(u);
      return u;
    },

    chain(Self: unknown, U: UnitObj): Chain { return Self == null ? [U] : [Self, U]; },

    async v(C: Chain, name: string) {
      const r = await resolve(C, name.toLowerCase());
      if (r === NOTFOUND) unknownIdent(name);
      return autoCall(r);
    },

    async ref_(C: Chain, name: string) {
      const r = await resolve(C, name.toLowerCase());
      if (r === NOTFOUND) unknownIdent(name);
      return r;
    },

    async call(C: Chain, name: string, args: unknown[]) {
      const r = await resolve(C, name.toLowerCase());
      if (r === NOTFOUND) unknownIdent(name);
      return callValue(r, args);
    },

    callv: callValue,

    async set(C: Chain, name: string, v: unknown) {
      const l = name.toLowerCase();
      for (const s of C) {
        if (s == null) continue;
        if (await setMember(s, l, v)) return;
      }
      if (envOf(C).assign(l, v)) return;
      logger.debug(`Assignment to unknown identifier '${name}' ignored`);
    },

    async mv(obj: unknown, name: string) {
      const r = await getMember(obj, name.toLowerCase());
      if (r === NOTFOUND) return missingMember(obj, name);
      return autoCall(r);
    },

    async mref(obj: unknown, name: string) {
      const r = await getMember(obj, name.toLowerCase());
      if (r === NOTFOUND) return missingMember(obj, name);
      return r;
    },

    async mcall(obj: unknown, name: string, args: unknown[]) {
      const r = await getMember(obj, name.toLowerCase());
      if (r === NOTFOUND) return missingMember(obj, name, true);
      return callValue(r, args);
    },

    async mset(obj: unknown, name: string, v: unknown) {
      if (!(await setMember(obj, name.toLowerCase(), v))) {
        logger.debug(`Property '${name}' not settable on ${className(obj)}`);
      }
    },

    async idx(obj: unknown, idx: unknown[]) {
      if (typeof obj === 'string') {
        const i = num(idx[0]);
        return obj.charAt(i - 1);
      }
      if (obj == null) throw accessViolation('[]');
      if (isPObj(obj) && typeof (obj as any).pindex === 'function') return await (obj as any).pindex(idx);
      if (Array.isArray(obj)) return obj[num(idx[0])];
      if (typeof obj === 'object') return (obj as Record<string, unknown>)[String(idx[0])];
      return undefined;
    },

    /** Indexed assignment. Returns a new value when the container is immutable (strings). */
    async iset(obj: unknown, idx: unknown[], v: unknown) {
      if (typeof obj === 'string' || obj == null) {
        const s = (obj ?? '') as string;
        const i = num(idx[0]) - 1;
        const padded = s.length <= i ? s.padEnd(i + 1, ' ') : s;
        return padded.slice(0, i) + String(v).charAt(0) + padded.slice(i + 1);
      }
      if (isPObj(obj) && typeof (obj as any).pindexSet === 'function') {
        await (obj as any).pindexSet(idx, v);
        return undefined;
      }
      if (Array.isArray(obj)) { obj[num(idx[0])] = v; return undefined; }
      (obj as Record<string, unknown>)[String(idx[0])] = v;
      return undefined;
    },

    /* with-blocks: W = with objects (outer→inner), fb = local accessor or scope chain */
    async wv(W: unknown[], name: string, fb: Accessor | Chain, nocall: boolean) {
      const l = name.toLowerCase();
      for (let i = W.length - 1; i >= 0; i--) {
        const o = W[i];
        if (o == null) continue;
        const r = await getMember(o, l);
        if (r !== NOTFOUND) return nocall ? r : autoCall(r);
      }
      if (Array.isArray(fb)) return nocall ? $.ref_(fb, name) : $.v(fb, name);
      return fb.get();
    },

    async wset(W: unknown[], name: string, v: unknown, fb: Accessor | Chain) {
      const l = name.toLowerCase();
      for (let i = W.length - 1; i >= 0; i--) {
        const o = W[i];
        if (o == null) continue;
        if (await hasMember(o, l)) { if (await setMember(o, l, v)) return; }
      }
      if (Array.isArray(fb)) return $.set(fb, name, v);
      return fb.set(v);
    },

    async wcall(W: unknown[], name: string, args: unknown[], fb: Accessor | Chain) {
      const l = name.toLowerCase();
      for (let i = W.length - 1; i >= 0; i--) {
        const o = W[i];
        if (o == null) continue;
        const r = await getMember(o, l);
        if (r !== NOTFOUND) return callValue(r, args);
      }
      if (Array.isArray(fb)) return $.call(fb, name, args);
      return callValue(await fb.get(), args);
    },

    async stmt(v: unknown) {
      if (v && typeof (v as Promise<unknown>).then === 'function') v = await v;
      if (isRoutine(v) && !v.__meta?.params?.length) await v();
    },

    truthy(v: unknown) {
      if (typeof v === 'boolean') return v;
      if (isNullish(v)) return false;
      if (typeof v === 'number') return v !== 0;
      if (typeof v === 'string') return v !== '' && v.toLowerCase() !== 'false' && v !== '0';
      return !!v;
    },

    not(v: unknown) {
      if (typeof v === 'number') return ~v;
      return !$.truthy(v);
    },

    async and_(a: unknown, b: () => Promise<unknown>) {
      if (typeof a === 'number') return a & num(await b());
      if (!$.truthy(a)) return false;
      return $.truthy(await b());
    },

    async or_(a: unknown, b: () => Promise<unknown>) {
      if (typeof a === 'number') return a | num(await b());
      if ($.truthy(a)) return true;
      return $.truthy(await b());
    },

    eq,
    ne: (a: unknown, b: unknown) => !eq(a, b),
    lt: (a: unknown, b: unknown) => cmpVals(a, b) < 0,
    gt: (a: unknown, b: unknown) => cmpVals(a, b) > 0,
    le: (a: unknown, b: unknown) => (Array.isArray(a) ? toSet(a).every((x) => toSet(b).some((y) => eq(x, y))) : cmpVals(a, b) <= 0),
    ge: (a: unknown, b: unknown) => (Array.isArray(a) ? toSet(b).every((x) => toSet(a).some((y) => eq(x, y))) : cmpVals(a, b) >= 0),

    add(a: unknown, b: unknown) {
      if (Array.isArray(a) || Array.isArray(b)) {
        const out = [...toSet(a)];
        for (const x of toSet(b)) if (!out.some((y) => eq(x, y))) out.push(x);
        return out;
      }
      if (typeof a === 'string' || typeof b === 'string') return str(a) + str(b);
      if (isNullish(a) && isNullish(b)) return null;
      return num(a) + num(b);
    },
    sub(a: unknown, b: unknown) {
      if (Array.isArray(a)) return a.filter((x) => !toSet(b).some((y) => eq(x, y)));
      return num(a) - num(b);
    },
    mul(a: unknown, b: unknown) {
      if (Array.isArray(a)) return a.filter((x) => toSet(b).some((y) => eq(x, y)));
      return num(a) * num(b);
    },
    fdiv(a: unknown, b: unknown) {
      const d = num(b);
      if (d === 0) throw new PasException('EZeroDivide', 'Floating point division by zero', ['ematherror', 'exception']);
      return num(a) / d;
    },
    idiv(a: unknown, b: unknown) {
      const d = num(b);
      if (d === 0) throw new PasException('EDivByZero', 'Division by zero', ['eintoverflow', 'exception']);
      return Math.trunc(num(a) / d);
    },
    mod(a: unknown, b: unknown) {
      const d = num(b);
      if (d === 0) throw new PasException('EDivByZero', 'Division by zero', ['exception']);
      return num(a) % d;
    },
    xor(a: unknown, b: unknown) {
      if (typeof a === 'boolean') return a !== $.truthy(b);
      return num(a) ^ num(b);
    },
    shl: (a: unknown, b: unknown) => num(a) << num(b),
    shr: (a: unknown, b: unknown) => num(a) >>> num(b),
    in_(x: unknown, s: unknown) { return toSet(s).some((y) => eq(x, y)); },
    range: rangeOf,
    inRange(x: unknown, a: unknown, b: unknown) { return cmpVals(x, a) >= 0 && cmpVals(x, b) <= 0; },
    ord(x: unknown) { return typeof x === 'string' ? (x.length ? x.charCodeAt(0) : 0) : num(x); },
    succ(x: unknown, step: number) {
      if (typeof x === 'string') return String.fromCharCode(x.charCodeAt(0) + step);
      return num(x) + step;
    },
    async tick() {
      if (++tickCount % 2000 === 0) await new Promise((r) => setTimeout(r, 0));
    },
    async iter(coll: unknown): Promise<unknown[]> {
      if (Array.isArray(coll)) return coll;
      if (typeof coll === 'string') return [...coll];
      if (coll && typeof (coll as any).piter === 'function') return (coll as any).piter();
      return [];
    },

    is_(obj: unknown, typeName: string) { return inheritsFrom(obj, typeName); },

    raise(obj: unknown): unknown {
      if (obj instanceof PasException) return obj;
      if (obj instanceof TObject && (obj as any).__exception) return (obj as any).__exception;
      if (obj instanceof Error) return obj;
      return new PasException('Exception', String(obj), ['exception']);
    },

    exc(e: unknown): unknown {
      if (e instanceof PasException) return e;
      if (e instanceof Error) {
        const pe = new PasException('Exception', e.message, ['exception']);
        (pe as any).jsError = e;
        return pe;
      }
      return new PasException('Exception', String(e), ['exception']);
    },

    excIs(e: unknown, typeName: string) {
      const l = typeName.toLowerCase();
      if (l === 'exception' || l === 'tobject') return true;
      if (e instanceof PasException) return e.chain().includes(l);
      // JS runtime errors behave like EAccessViolation / generic exceptions
      return l === 'eaccessviolation' || l === 'eexternal';
    },

    rethrowControl(_e: unknown) { /* no internal control-flow exceptions currently */ },
    handled(e: unknown) {
      if (!(e instanceof PasException)) logger.debug(`Exception swallowed by except-block: ${(e as Error)?.message}`);
    },

    abort(): never { throw new AbortSignal(); },

    async notPorted(name: string, reason: string) {
      logger.warn(`Routine ${name} could not be converted automatically (${reason}). See tools/report.`);
      return undefined;
    },

    asRef(p: unknown) { return p instanceof Ref ? p : new ValueRef(p); },
    ref(get: () => Promise<unknown>, set: (v: unknown) => Promise<void>) { return new Ref(get, set); },
    copyArg(p: unknown) { return p; },
    async fixArgs(L: Record<string, unknown>, names: string[]) {
      for (const n of names) { const v = L[n]; if (v instanceof Ref) L[n] = await v.get(); }
    },

    rec(name: string) {
      const f = records.get(name.toLowerCase());
      const o: Record<string, unknown> = {};
      if (f) for (const [k, init] of Object.entries(f)) o[k] = init();
      return o;
    },
    defRecord(name: string, fields: Record<string, () => unknown>) { records.set(name.toLowerCase(), fields); },
    sarr() { return {} as Record<string, unknown>; },

    fn(f: (...a: any[]) => Promise<unknown>) { return routine(f); },

    async inherited(Self: any, clsName: string, method: string, args: unknown[] | null, argsObj: IArguments) {
      const callArgs = args ?? Array.prototype.slice.call(argsObj, 1);
      const l = method.toLowerCase();
      const def = env.findClass(clsName);
      const m = def?.findMethodAbove(l, callArgs.length);
      if (m) return m(Self, ...callArgs);
      // builtin ancestor implementation (e.g. TForm.Create, TCustomForm.FormCreate)
      if (Self && typeof Self === 'object') {
        const builtin = findBuiltinMethod(Self, l);
        if (builtin) return builtin.apply(Self, callArgs);
      }
      return undefined;
    },
  };
  return $;
}

function findBuiltinMethod(obj: object, lname: string): ((...a: any[]) => any) | undefined {
  for (let p = Object.getPrototypeOf(obj); p && p !== Object.prototype; p = Object.getPrototypeOf(p)) {
    for (const k of Object.getOwnPropertyNames(p)) {
      if (k.toLowerCase() === lname && typeof (p as any)[k] === 'function' && k !== 'constructor') return (p as any)[k];
    }
  }
  return undefined;
}

async function hasMember(o: unknown, l: string) {
  if (isPObj(o)) {
    const r = await o.pget(l);
    return r !== NOTFOUND;
  }
  return typeof o === 'object' && o !== null && Object.keys(o).some((k) => k.toLowerCase() === l);
}

function className(o: unknown) {
  return (o as any)?.ClassName ?? (o as any)?.__className ?? typeof o;
}

function missingMember(obj: unknown, name: string, call = false): unknown {
  logger.debug(`Member '${name}' not implemented on ${className(obj)}${call ? ' (call ignored)' : ''}`);
  return undefined;
}

export function str(v: unknown): string {
  if (isNullish(v)) return '';
  if (typeof v === 'number') return Number.isInteger(v) ? String(v) : formatFloatGeneral(v);
  if (typeof v === 'boolean') return v ? 'True' : 'False';
  return String(v);
}

function formatFloatGeneral(v: number) {
  const s = v.toPrecision(15);
  return String(Number(s));
}

export { num, eq, cmpVals, pickOverload };
