/*
 * Core object protocol for transpiled Delphi code.
 *
 * Pascal is case-insensitive and lets you call parameterless routines without
 * parentheses, so the runtime resolves every member by lower-cased name and
 * "auto-calls" values that are routines when they are read.
 *
 * Builtin VCL emulation classes expose Pascal-visible members by naming them
 * with a leading capital letter (methods, getters/setters and fields).
 */

export const NOTFOUND: unique symbol = Symbol('notfound');
export type Found<T = unknown> = T | typeof NOTFOUND;

/** A Pascal routine value: auto-invoked when read without arguments. */
export type Routine = ((...args: any[]) => any) & { __routine: true; __name?: string; __meta?: RoutineMeta };

export interface RoutineMeta {
  params?: string[];
  ptypes?: (string | null)[];
  kind?: string;
  error?: string;
  src?: string;
}

export function routine<T extends (...args: any[]) => any>(fn: T, name?: string, meta?: RoutineMeta): Routine {
  const r = fn as unknown as Routine;
  r.__routine = true;
  if (name) r.__name = name;
  if (meta) r.__meta = meta;
  return r;
}

export function isRoutine(v: unknown): v is Routine {
  return typeof v === 'function' && (v as Routine).__routine === true;
}

/** Class reference value (e.g. `TStringList`, `TAccountForm`). */
export interface PType {
  __type: true;
  name: string;
  create(args: any[]): Promise<any>;
  isAncestorOf?(name: string): boolean;
}

export function isType(v: unknown): v is PType {
  return !!v && typeof v === 'object' && (v as PType).__type === true;
}

/* ------------------------------------------------------------------ reflection */

interface MemberInfo {
  name: string;
  kind: 'method' | 'accessor' | 'field';
  get?: boolean;
  set?: boolean;
}

const reflectCache = new WeakMap<object, Map<string, MemberInfo>>();

function isPascalName(n: string) {
  const c = n.charCodeAt(0);
  return c >= 65 && c <= 90; // A-Z
}

/** Lower-case → member map of Pascal-visible members along the prototype chain. */
export function reflect(proto: object): Map<string, MemberInfo> {
  let m = reflectCache.get(proto);
  if (m) return m;
  m = new Map();
  const chain: object[] = [];
  for (let p: object | null = proto; p && p !== Object.prototype; p = Object.getPrototypeOf(p)) chain.push(p);
  for (const p of chain.reverse()) {
    for (const key of Object.getOwnPropertyNames(p)) {
      if (!isPascalName(key)) continue;
      const d = Object.getOwnPropertyDescriptor(p, key)!;
      if (d.get || d.set) {
        const prev = m.get(key.toLowerCase());
        m.set(key.toLowerCase(), {
          name: key, kind: 'accessor',
          get: !!d.get || !!prev?.get, set: !!d.set || !!prev?.set,
        });
      } else if (typeof d.value === 'function') {
        m.set(key.toLowerCase(), { name: key, kind: 'method' });
      }
    }
  }
  reflectCache.set(proto, m);
  return m;
}

const boundCache = new WeakMap<object, Map<string, Routine>>();

export function bindMethod(obj: any, name: string): Routine {
  let c = boundCache.get(obj);
  if (!c) { c = new Map(); boundCache.set(obj, c); }
  let r = c.get(name);
  if (!r) {
    const f = obj[name];
    r = routine((...args: any[]) => f.apply(obj, args), name);
    c.set(name, r);
  }
  return r;
}

/** Generic member read for builtin objects (reflection based). */
export function reflectGet(obj: any, lname: string): Found {
  const info = reflect(Object.getPrototypeOf(obj)).get(lname);
  if (info) {
    if (info.kind === 'accessor') return info.get ? obj[info.name] : NOTFOUND;
    if (info.kind === 'method') return bindMethod(obj, info.name);
  }
  // own Pascal-visible fields (e.g. `Tag`)
  const own = ownFieldMap(obj).get(lname);
  if (own !== undefined) return obj[own];
  return NOTFOUND;
}

export function reflectSet(obj: any, lname: string, v: unknown): boolean {
  const info = reflect(Object.getPrototypeOf(obj)).get(lname);
  if (info) {
    if (info.kind === 'accessor' && info.set) { obj[info.name] = v; return true; }
    return false;
  }
  const own = ownFieldMap(obj).get(lname);
  if (own !== undefined) { obj[own] = v; return true; }
  return false;
}

function ownFieldMap(obj: any): Map<string, string> {
  const m = new Map<string, string>();
  for (const k of Object.keys(obj)) if (isPascalName(k)) m.set(k.toLowerCase(), k);
  return m;
}

/* ------------------------------------------------------------------ objects */

/** Anything the runtime can address members on. */
export interface PObj {
  pget(lname: string): Found | Promise<Found>;
  pset(lname: string, v: unknown): boolean | Promise<boolean>;
}

/**
 * Value of a member the web runtime does not implement (a VCL/Indy/OLE property nobody ported).
 * It absorbs further member reads, writes, calls and indexing and behaves like nil/0/'' in
 * expressions, so a missing runtime feature never turns into an access violation chain.
 */
export class RuntimeGap {
  readonly __gap = true;
  pget(_l: string): unknown { return GAP; }
  pset(_l: string, _v: unknown) { return true; }
  pindex(_i: unknown[]) { return GAP; }
  pindexSet(_i: unknown[], _v: unknown) { /* absorbed */ }
  toString() { return ''; }
  valueOf() { return 0; }
  toJSON() { return null; }
}
export const GAP = new RuntimeGap();
export const isGap = (v: unknown): v is RuntimeGap => v === GAP;

export function isPObj(v: unknown): v is PObj {
  return !!v && typeof v === 'object' && typeof (v as PObj).pget === 'function';
}

/** Root of the builtin class emulation (TObject). */
export class TObject implements PObj {
  /** Delphi class name of this instance (user classes override via __cls). */
  __className = 'TObject';
  __cls?: import('./env').ClassDef;
  __fields?: Record<string, unknown>;
  __freed = false;

  get ClassName(): string { return this.__cls?.name ?? this.__className; }

  InheritsFrom(name: string) { return inheritsFrom(this, name); }
  Free() { this.__freed = true; this.destroy?.(); }
  Destroy() { this.Free(); }
  DisposeOf() { this.Free(); }
  protected destroy?(): void;

  pget(lname: string): Found | Promise<Found> {
    if (this.__cls) {
      const r = this.__cls.getMember(this, lname);
      if (r !== NOTFOUND) return r;
    }
    return reflectGet(this, lname);
  }

  pset(lname: string, v: unknown): boolean | Promise<boolean> {
    if (this.__cls) {
      const r = this.__cls.setMember(this, lname, v);
      if (r !== false) return r;
    }
    return reflectSet(this, lname, v);
  }
}

export function classNameChain(o: any): string[] {
  const out: string[] = [];
  if (o?.__cls) {
    for (let c = o.__cls; c; c = c.parentDef) out.push(c.name.toLowerCase());
    if (o.__cls.rootBuiltin) out.push(...builtinChain(o));
  } else {
    out.push(...builtinChain(o));
  }
  return out;
}

function builtinChain(o: any): string[] {
  const out: string[] = [];
  for (let p = Object.getPrototypeOf(o); p && p !== Object.prototype; p = Object.getPrototypeOf(p)) {
    const n: string | undefined = p.constructor?.pascalName;
    if (n) out.push(n.toLowerCase());
    for (const a of (p.constructor?.aliases ?? []) as string[]) out.push(a.toLowerCase());
  }
  return out;
}

export function inheritsFrom(o: any, name: string): boolean {
  if (!o || typeof o !== 'object') return false;
  const l = name.toLowerCase();
  if (l === 'tobject') return true;
  if (o instanceof PasException) return o.chain().includes(l) || (l === 'exception');
  return classNameChain(o).includes(l);
}

/* ------------------------------------------------------------------ exceptions */

export class PasException extends Error {
  className: string;
  parents: string[];
  obj?: any;
  constructor(className: string, message: string, parents: string[] = ['exception'], obj?: any) {
    super(message);
    this.className = className;
    this.parents = parents;
    this.obj = obj;
  }
  chain() { return [this.className.toLowerCase(), ...this.parents]; }
}

/** Thrown by Abort / EAbort: silently cancels the current event chain. */
export class AbortSignal extends PasException {
  constructor() { super('EAbort', 'Operation aborted', ['exception']); }
}

/* ------------------------------------------------------------------ refs (var params) */

export class Ref<T = any> {
  constructor(public get: () => Promise<T>, public set: (v: T) => Promise<void>) {}
}

/*
 * Pointers kept in integers (Tag := Integer(@List); TStringList(Pointer(Tag)^)): Integer(obj) gives a
 * stable handle, Pointer(handle) / TFoo(handle) give the object back (a variable reference is read).
 */
const HANDLE_BASE = 0x40000000;
const handleOf = new WeakMap<object, number>();
const handles = new Map<number, object>();
export function pointerHandle(v: object): number {
  let h = handleOf.get(v);
  if (h === undefined) { h = HANDLE_BASE + handles.size + 1; handleOf.set(v, h); handles.set(h, v); }
  return h;
}
export function fromHandle(v: unknown): object | undefined {
  return typeof v === 'number' && v > HANDLE_BASE ? handles.get(v) : undefined;
}
/** Pointer(x)^ / TFoo(x): the object a handle stands for, a referenced variable's value. */
export async function derefPointer(v: unknown): Promise<unknown> {
  const o = fromHandle(v);
  if (o === undefined) return v;
  return o instanceof Ref ? await o.get() : o;
}

export class ValueRef<T = any> extends Ref<T> {
  value: T;
  constructor(v: T) {
    super(async () => this.value, async (x: T) => { this.value = x; });
    this.value = v;
  }
}

/* ------------------------------------------------------------------ misc */

export const lc = (s: string) => s.toLowerCase();
