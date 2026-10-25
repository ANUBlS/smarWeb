/*
 * Environments, units and user-defined classes for transpiled Delphi code.
 *
 *  Env      — one per SmartBank module (plus a shared library env and the
 *             stdlib/VCL globals at the root).  Resolves global identifiers.
 *  UnitObj  — one per transpiled .pas unit: consts, vars, routines, classes.
 *  ClassDef — a class declared in Pascal; instances are builtin VCL emulation
 *             objects (TForm, TDataModule, TObject…) extended with user fields,
 *             properties and methods.
 */
import {
  NOTFOUND, Found, Routine, RoutineMeta, routine, isRoutine, TObject, PasException, PType, reflect,
} from './core';
import type { DfmNode } from './dfm';

export type CompiledFn = (...args: any[]) => Promise<any>;

interface FieldInfo { name: string; type: string }
interface PropInfo { name: string; read?: string; write?: string; index?: unknown }

/* ------------------------------------------------------------------ builtin class registry */

export type BuiltinCtor = new (...args: any[]) => TObject;
const builtins = new Map<string, BuiltinCtor>();

export function registerBuiltin(name: string, ctor: BuiltinCtor) {
  builtins.set(name.toLowerCase(), ctor);
  // own static only — `??=` would see the inherited pascalName of the parent class
  if (!Object.prototype.hasOwnProperty.call(ctor, 'pascalName')) (ctor as any).pascalName = name;
}
export function getBuiltin(name: string): BuiltinCtor | undefined {
  return builtins.get(name.toLowerCase());
}
export function builtinNames() { return [...builtins.keys()]; }

/* ------------------------------------------------------------------ ClassDef */

export class ClassDef {
  readonly lname: string;
  fields = new Map<string, FieldInfo>();
  props = new Map<string, PropInfo>();
  methods = new Map<string, Routine[]>();
  fieldInits = new Map<string, () => unknown>();
  dfm?: DfmNode;
  private _parent?: ClassDef | null;

  constructor(public name: string, public parentName: string | null, public unit: UnitObj) {
    this.lname = name.toLowerCase();
  }

  get env() { return this.unit.env; }

  get parentDef(): ClassDef | null {
    if (this._parent === undefined) {
      this._parent = this.parentName ? this.env.findClass(this.parentName) ?? null : null;
      if (this._parent === this) this._parent = null;
    }
    return this._parent;
  }

  /** Name of the builtin ancestor at the root of the user class chain. */
  get rootBuiltin(): string {
    let c: ClassDef = this;
    while (c.parentDef) c = c.parentDef;
    return c.parentName ?? 'TObject';
  }

  chain(): ClassDef[] {
    const out: ClassDef[] = [];
    for (let c: ClassDef | null = this; c; c = c.parentDef) out.push(c);
    return out;
  }

  isA(name: string): boolean {
    const l = name.toLowerCase();
    for (const c of this.chain()) if (c.lname === l) return true;
    const root = this.rootBuiltin.toLowerCase();
    if (root === l) return true;
    const ctor = getBuiltin(root);
    if (ctor) {
      for (let p = ctor.prototype; p && p !== Object.prototype; p = Object.getPrototypeOf(p)) {
        const n = p.constructor?.pascalName as string | undefined;
        if (n?.toLowerCase() === l) return true;
        if ((p.constructor?.aliases ?? []).some((a: string) => a.toLowerCase() === l)) return true;
      }
    }
    return false;
  }

  /** Form layout for this class or the nearest ancestor that has one. */
  get layout(): DfmNode | undefined {
    for (const c of this.chain()) if (c.dfm) return c.dfm;
    return undefined;
  }

  addMethod(name: string, fn: CompiledFn, meta: RoutineMeta) {
    const r = routine(fn, name, meta);
    const l = name.toLowerCase();
    const arr = this.methods.get(l);
    if (arr) arr.push(r); else this.methods.set(l, [r]);
  }

  findMethod(lname: string, argc?: number): Routine | undefined {
    for (const c of this.chain()) {
      const arr = c.methods.get(lname);
      if (arr?.length) return pickOverload(arr, argc);
    }
    return undefined;
  }

  findMethodAbove(lname: string, argc?: number): Routine | undefined {
    for (const c of this.chain().slice(1)) {
      const arr = c.methods.get(lname);
      if (arr?.length) return pickOverload(arr, argc);
    }
    return undefined;
  }

  findProp(lname: string): PropInfo | undefined {
    for (const c of this.chain()) {
      const p = c.props.get(lname);
      if (p && (p.read || p.write)) return p;
    }
    return undefined;
  }

  hasField(lname: string): boolean {
    for (const c of this.chain()) if (c.fields.has(lname)) return true;
    return false;
  }

  initFields(inst: TObject) {
    const f: Record<string, unknown> = inst.__fields ?? (inst.__fields = {});
    for (const c of this.chain().reverse()) {
      for (const [l, info] of c.fields) {
        if (!(l in f)) f[l] = defaultForType(info.type);
      }
      for (const [l, init] of c.fieldInits) f[l] = init();
    }
  }

  /** Member read on an instance of this class. */
  getMember(inst: TObject, lname: string): Found | Promise<Found> {
    const prop = this.findProp(lname);
    if (prop?.read) {
      const rl = prop.read.toLowerCase();
      const m = this.findMethod(rl);
      if (m) return prop.index !== undefined ? m(inst, prop.index) : m(inst);
      return this.getMember(inst, rl);
    }
    const f = inst.__fields;
    if (f && Object.prototype.hasOwnProperty.call(f, lname)) return f[lname];
    const m = this.methodsFor(lname);
    if (m) return boundUserMethod(inst, lname, m);
    return NOTFOUND;
  }

  setMember(inst: TObject, lname: string, v: unknown): boolean | Promise<boolean> {
    const prop = this.findProp(lname);
    if (prop?.write) {
      const wl = prop.write.toLowerCase();
      const m = this.findMethod(wl);
      if (m) {
        const p = prop.index !== undefined ? m(inst, prop.index, v) : m(inst, v);
        return Promise.resolve(p).then(() => true);
      }
      return this.setMember(inst, wl, v);
    }
    const f = inst.__fields;
    if (f && (Object.prototype.hasOwnProperty.call(f, lname) || this.hasField(lname))) {
      f[lname] = v;
      return true;
    }
    return false;
  }

  private methodsFor(lname: string): Routine[] | undefined {
    const out: Routine[] = [];
    for (const c of this.chain()) {
      const arr = c.methods.get(lname);
      if (arr) out.push(...arr);
    }
    return out.length ? out : undefined;
  }
}

const userBound = new WeakMap<object, Map<string, Routine>>();
function boundUserMethod(inst: TObject, lname: string, overloads: Routine[]): Routine {
  let c = userBound.get(inst);
  if (!c) { c = new Map(); userBound.set(inst, c); }
  let r = c.get(lname);
  if (!r) {
    r = routine((...args: any[]) => pickOverload(overloads, args.length)(inst, ...args), overloads[0].__name,
      overloads[0].__meta);
    c.set(lname, r);
  }
  return r;
}

export function pickOverload(arr: Routine[], argc?: number): Routine {
  if (arr.length === 1 || argc === undefined) return arr[0];
  const exact = arr.find((r) => (r.__meta?.params?.length ?? 0) === argc);
  if (exact) return exact;
  const ge = arr.find((r) => (r.__meta?.params?.length ?? 0) >= argc);
  return ge ?? arr[0];
}

export function defaultForType(type: string | null | undefined): unknown {
  if (!type) return null;
  const t = type.toLowerCase();
  if (/^(integer|cardinal|longint|longword|int64|word|byte|smallint|shortint|double|real|extended|single|currency|tdatetime|tdate|ttime|tcolor|dword|thandle|hwnd|tmodalresult|uint64|nativeint)$/.test(t)) return 0;
  if (/^(string|ansistring|widestring|shortstring|unicodestring|char|widechar|ansichar|tcaption)$/.test(t)) return '';
  if (/^(boolean|bool|wordbool|longbool|bytebool)$/.test(t)) return false;
  if (t === 'array') return [];
  if (t === 'set') return [];
  return null;
}

/* ------------------------------------------------------------------ UnitObj */

interface Sym { kind: 'const' | 'var' | 'func' | 'class' | 'enum'; value: unknown; type?: string | null }

export class UnitObj extends TObject {
  readonly lname: string;
  symbols = new Map<string, Sym>();
  initFns: (() => Promise<void>)[] = [];
  initialization?: CompiledFn;
  constructor(public name: string, public uses: string[], public env: Env) {
    super();
    this.__className = 'TUnit';
    this.lname = name.toLowerCase();
  }

  /* API used by generated code (see tools/pas2js.py) */
  init(fn: () => Promise<void>) { this.initFns.push(fn); }
  const(name: string, value: unknown) { this.symbols.set(name.toLowerCase(), { kind: 'const', value }); }
  var_(name: string, value: unknown, type?: string | null) {
    this.symbols.set(name.toLowerCase(), { kind: 'var', value, type });
  }
  func(name: string, fn: CompiledFn, meta: RoutineMeta) {
    const l = name.toLowerCase();
    // global routines are compiled with a leading Self parameter (always undefined)
    const r = routine((...args: any[]) => fn(undefined, ...args), name, meta);
    const s = this.symbols.get(l);
    if (s?.kind === 'func') (s.value as Routine[]).push(r);
    else this.symbols.set(l, { kind: 'func', value: [r] });
  }
  method(cls: string, name: string, fn: CompiledFn, meta: RoutineMeta) {
    const def = this.env.findClass(cls) ?? this.defClass(cls, null, {}, {});
    def.addMethod(name, fn, meta);
  }
  defClass(name: string, parent: string | null, fields: Record<string, FieldInfo>, props: Record<string, PropInfo>) {
    const def = new ClassDef(name, parent, this);
    for (const [k, v] of Object.entries(fields)) def.fields.set(k, v);
    for (const [k, v] of Object.entries(props)) def.props.set(k, v);
    this.env.classes.set(def.lname, def);
    this.symbols.set(def.lname, { kind: 'class', value: def });
    return def;
  }
  fieldInit(cls: string, field: string, init: () => unknown) {
    this.env.findClass(cls)?.fieldInits.set(field.toLowerCase(), init);
  }
  setInitialization(fn: CompiledFn) { this.initialization = fn; }

  /* member protocol */
  override pget(lname: string): Found | Promise<Found> {
    const s = this.symbols.get(lname);
    if (s) return this.symValue(s);
    return NOTFOUND;
  }
  override pset(lname: string, v: unknown): boolean {
    const s = this.symbols.get(lname);
    if (s && (s.kind === 'var' || s.kind === 'const')) {
      s.value = v;
      if (v != null) runFixups(lname, v);
      return true;
    }
    return false;
  }

  symValue(s: Sym): Found | Promise<Found> {
    switch (s.kind) {
      case 'func': {
        const arr = s.value as Routine[];
        if (arr.length === 1) return arr[0];
        return routine((...args: any[]) => pickOverload(arr, args.length)(...args), arr[0].__name, arr[0].__meta);
      }
      case 'class':
        return this.env.typeRef(s.value as ClassDef);
      case 'var':
        if (s.value == null && s.type && !noAutoCreate.depth) {
          // Shared library data modules (sboapiDataModule …) were created by the shell at startup;
          // module data modules are created by their own code and stay nil until then.
          const def = this.env.findClass(s.type);
          if (def && def.isA('TDataModule') && def.env.name === 'lib') {
            return this.env.createInstance(def, [null]).then((inst) => { s.value = inst; return inst; });
          }
        }
        return s.value;
      default:
        return s.value;
    }
  }
}

/* ------------------------------------------------------------------ Env */

export type InstanceFactory = (def: ClassDef, args: any[], env: Env) => Promise<TObject>;

export class Env {
  units = new Map<string, UnitObj>();
  unitOrder: UnitObj[] = [];
  classes = new Map<string, ClassDef>();
  /** Lazily-initialised global lookup cache. */
  private globalCache = new Map<string, { unit?: UnitObj; sym?: Sym }>();
  initialized = false;
  private typeRefs = new Map<ClassDef, PType>();
  /** Set by the runtime; constructs instances for user classes. */
  static instanceFactory: InstanceFactory;
  static rootGlobals: (lname: string) => Found;

  constructor(public name: string, public parent: Env | null) {}

  addUnit(u: UnitObj) {
    this.units.set(u.lname, u);
    this.unitOrder.push(u);
    this.globalCache.clear();
  }

  findClass(name: string): ClassDef | undefined {
    const l = name.toLowerCase();
    return this.classes.get(l) ?? this.parent?.findClass(l);
  }

  findUnit(name: string): UnitObj | undefined {
    const l = name.toLowerCase();
    return this.units.get(l) ?? this.parent?.findUnit(l);
  }

  typeRef(def: ClassDef): PType {
    let t = this.typeRefs.get(def);
    if (!t) {
      t = {
        __type: true,
        name: def.name,
        create: (args) => this.createInstance(def, args),
        isAncestorOf: (n) => def.isA(n),
      } as PType & { def: ClassDef };
      (t as any).def = def;
      this.typeRefs.set(def, t);
    }
    return t;
  }

  createInstance(def: ClassDef, args: any[]): Promise<TObject> {
    return Env.instanceFactory(def, args, this);
  }

  /** Resolve a global identifier (unit names, unit symbols, then parent env / root). */
  lookup(lname: string): Found | Promise<Found> {
    const u = this.units.get(lname);
    if (u) return u;
    let hit = this.globalCache.get(lname);
    if (!hit) {
      hit = {};
      for (let i = this.unitOrder.length - 1; i >= 0; i--) {
        const s = this.unitOrder[i].symbols.get(lname);
        if (s) { hit = { unit: this.unitOrder[i], sym: s }; break; }
      }
      this.globalCache.set(lname, hit);
    }
    if (hit.unit && hit.sym) return hit.unit.symValue(hit.sym);
    if (this.parent) return this.parent.lookup(lname);
    return Env.rootGlobals(lname);
  }

  assign(lname: string, v: unknown): boolean {
    for (let i = this.unitOrder.length - 1; i >= 0; i--) {
      if (this.unitOrder[i].pset(lname, v)) return true;
    }
    return this.parent ? this.parent.assign(lname, v) : false;
  }

  async initialize(log: (msg: string) => void) {
    if (this.initialized) return;
    this.initialized = true;
    if (this.parent) await this.parent.initialize(log);
    for (const u of this.unitOrder) {
      for (const fn of u.initFns) {
        try { await fn(); } catch (e) { log(`[${u.name}] const/var init: ${(e as Error).message}`); }
      }
    }
    for (const u of this.unitOrder) {
      if (u.initialization) {
        try { await u.initialization(undefined); } catch (e) {
          log(`[${u.name}] initialization: ${(e as Error).message}`);
        }
      }
    }
  }
}

export function memberNames(obj: object) { return [...reflect(Object.getPrototypeOf(obj)).keys()]; }
export { PasException, isRoutine };

/* ------------------------------------------------------------------ DFM reference fixups */

/** While > 0, global lookups do not auto-create data modules (used by DFM reference resolution). */
export const noAutoCreate = { depth: 0 };
type Fixup = (target: unknown) => Promise<void> | void;
const fixups = new Map<string, Fixup[]>();
/** Register a reference ('DataModule1.Query') to resolve once the global variable gets a value. */
export function addFixup(globalName: string, fn: Fixup) {
  const l = globalName.toLowerCase();
  const arr = fixups.get(l);
  if (arr) arr.push(fn); else fixups.set(l, [fn]);
}
function runFixups(lname: string, v: unknown) {
  const arr = fixups.get(lname);
  if (!arr) return;
  fixups.delete(lname);
  for (const f of arr) void Promise.resolve(f(v)).catch(() => undefined);
}
