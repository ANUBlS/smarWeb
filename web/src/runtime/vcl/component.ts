/* TComponent: ownership, names, events, DFM-linked references. */
import { TObject, NOTFOUND, Found, routine, isRoutine, PasException, AbortSignal, Routine } from '../core';
import { registerBuiltin } from '../env';
import { invalidate, beginHold, endHold } from '../ui';
import { logger } from '../log';
import { messageBox } from '../dialogs';
import { audit } from '../audit';
import { Indexed } from './classes';
import { num, str } from '../pascal';

export type Handler = string | Routine | null;

/** Resolves component references written in DFMs ('DataModule1.Query1', 'ActionList1'). */
export type RefResolver = (name: string, from: TComponent) => Promise<unknown>;
let refResolver: RefResolver = async () => null;
export function setRefResolver(r: RefResolver) { refResolver = r; }

/** Properties whose DFM value is a component reference by name. */
export const REF_PROPS = new Set([
  'datasource', 'dataset', 'master', 'mastersource', 'listsource', 'lookupdataset', 'action', 'popupmenu', 'images',
  'stateimages', 'hotimages', 'disabledimages', 'activepage', 'session', 'focuscontrol', 'menu', 'mainmenu',
  'associate', 'control', 'datasetfield', 'linkedcontrol', 'largeimages', 'smallimages', 'source', 'optimizedsource',
  'exportsource', 'sourcedataset', 'imagelist', 'dropdownmenu', 'activecontrol', 'windowmenu',
]);

export class TComponent extends TObject {
  static override toString() { return 'TComponent'; }
  Name = '';
  Tag = 0;
  Owner: TComponent | null = null;
  /** Components owned by this one (Delphi Components[]). */
  owned: TComponent[] = [];
  /** Raw DFM properties of this component. */
  dfm: Record<string, any> = {};
  events = new Map<string, Handler>();
  refs = new Map<string, unknown>();
  designInfo = 0;
  ComponentState: string[] = [];

  constructor() {
    super();
    this.__className = (this.constructor as any).pascalName ?? 'TComponent';
  }

  Create(owner?: unknown) {
    if (owner instanceof TComponent) owner.insertComponent(this);
  }

  insertComponent(c: TComponent) {
    c.Owner = this;
    if (!this.owned.includes(c)) this.owned.push(c);
  }

  /** The form or data module that owns (directly or indirectly) this component. */
  get root(): TComponent {
    let c: TComponent = this;
    while (c.Owner && !(c as any).isRootContainer) c = c.Owner;
    return c;
  }

  get ComponentCount() { return this.owned.length; }
  get Components() { return new Indexed((i) => this.owned[num(i[0])]); }
  get ComponentIndex() { return this.Owner ? this.Owner.owned.indexOf(this) : -1; }
  FindComponent(name: unknown) {
    const l = str(name).toLowerCase();
    return this.owned.find((c) => c.Name.toLowerCase() === l) ?? null;
  }
  RemoveComponent(c: unknown) { this.owned = this.owned.filter((x) => x !== c); }
  InsertComponent(c: unknown) { if (c instanceof TComponent) this.insertComponent(c); }
  DestroyComponents() { this.owned = []; }
  Loaded() { /* */ }
  GetNamePath() { return this.Name; }

  override Free() {
    super.Free();
    if (this.Owner) this.Owner.owned = this.Owner.owned.filter((x) => x !== this);
    invalidate();
  }

  /* ---------------------------------------------------------------- property protocol */

  override pget(lname: string): Found | Promise<Found> {
    if (lname.startsWith('on') && lname.length > 2 && this.isEventName(lname)) {
      const h = this.events.get(lname);
      return h === undefined ? null : this.handlerRoutine(h);
    }
    if (this.refs.has(lname)) {
      const r = super.pget(lname);
      if (r instanceof Promise) return r.then((x) => (x === NOTFOUND ? this.refs.get(lname) : x));
      return r === NOTFOUND ? this.refs.get(lname) : r;
    }
    return super.pget(lname);
  }

  override pset(lname: string, v: unknown): boolean | Promise<boolean> {
    if (lname.startsWith('on') && lname.length > 2 && this.isEventName(lname)) {
      this.events.set(lname, (v as Handler) ?? null);
      return true;
    }
    // Assigning the value a property already has is a no-op for painting (OnUpdate handlers do it
    // every idle cycle); only real changes re-render.
    const prim = (x: unknown) => x === null || x === undefined || ['string', 'number', 'boolean'].includes(typeof x);
    let before: unknown = undefined;
    const cmp = prim(v) && this.hasOwnLike(lname);
    if (cmp) { try { before = this.pget(lname); } catch { before = undefined; } }
    const r = super.pset(lname, v);
    const after = (ok: boolean) => {
      if (!ok && REF_PROPS.has(lname)) { this.refs.set(lname, v); ok = true; }
      if (ok && cmp && prim(before)) {
        let now: unknown;
        try { now = this.pget(lname); } catch { now = Symbol('x'); }
        if (now === before) return ok;
      }
      if (ok) { this.propChanged(lname); invalidate(); }
      return ok;
    };
    return r instanceof Promise ? r.then(after) : after(r);
  }

  /** Plain data property or accessor (not a method) — safe to read for change detection. */
  private hasOwnLike(lname: string) {
    const v = (this as any).__propCache ??= new Map<string, boolean>();
    if (v.has(lname)) return v.get(lname);
    let ok = false;
    for (let o: any = this; o && o !== Object.prototype; o = Object.getPrototypeOf(o)) {
      for (const k of Object.getOwnPropertyNames(o)) {
        if (k.toLowerCase() !== lname) continue;
        const d = Object.getOwnPropertyDescriptor(o, k)!;
        ok = d.get !== undefined || (d.value !== undefined && typeof d.value !== 'function') || 'value' in d && typeof d.value !== 'function';
        break;
      }
      if (ok) break;
    }
    v.set(lname, ok);
    return ok;
  }

  /** Hook for subclasses when a property is assigned from Pascal code. */
  propChanged(_lname: string) { /* */ }

  isEventName(lname: string) {
    if (!/^on[a-z]/.test(lname) || lname === 'onscreen') return false;
    // components and fields whose names merely start with "on" (Online_Cards, OnlinePayments …)
    const f = (this as any).__fields;
    if (f && lname in f) return false;
    if (this.owned.some((c) => (c.Name || '').toLowerCase() === lname)) return false;
    return true;
  }

  /** Turn a handler (method name from DFM, or routine) into a callable routine. */
  handlerRoutine(h: Handler): Routine | null {
    if (!h) return null;
    if (isRoutine(h)) return h;
    const owner = this.methodOwner();
    if (!owner) return null;
    const def = owner.__cls;
    const m = def?.findMethod(String(h).toLowerCase());
    if (!m) return null;
    return routine((...args: any[]) => m(owner, ...args), String(h));
  }

  /** Object whose class implements DFM event handlers (the form / data module). */
  methodOwner(): TObject | null {
    let c: TComponent | null = this;
    while (c) {
      if ((c as any).isRootContainer && c.__cls) return c;
      c = c.Owner;
    }
    return null;
  }

  hasHandler(event: string) {
    const h = this.events.get(event.toLowerCase());
    return !!h && !!this.handlerRoutine(h);
  }

  /** Fire an event; returns the handler's result. Exceptions are reported like Delphi's Application.ShowException. */
  async fire(event: string, ...args: unknown[]): Promise<unknown> {
    const h = this.events.get(event.toLowerCase());
    if (!h) return undefined;
    const r = this.handlerRoutine(h);
    if (!r) {
      logger.debug(`${this.Name}.${event}: handler '${String(h)}' not found`);
      return undefined;
    }
    return runGuarded(() => r(...args), `${this.Name}.${event}`);
  }

  /** Fire without swallowing exceptions (used where the caller must observe Abort, e.g. BeforePost). */
  async fireRaw(event: string, ...args: unknown[]): Promise<unknown> {
    const h = this.events.get(event.toLowerCase());
    const r = h ? this.handlerRoutine(h) : null;
    return r ? r(...args) : undefined;
  }

  /** Resolve DFM component references (DataSource = 'DM.Query' …). */
  async resolveRefs(onPending?: (prop: string, global: string, walk: (o: unknown) => Promise<unknown>) => void,
    compNames?: Set<string>) {
    for (const [k, v] of Object.entries(this.dfm)) {
      const l = k.toLowerCase();
      const isIdent = !!v && typeof v === 'object' && 'i' in (v as object);
      const name = isIdent ? String((v as { i: string }).i) : v;
      if (typeof name !== 'string') continue;
      // Known reference properties, plus any other property whose identifier value names a component
      // of the same form or a qualified one (third-party links such as TSearchEdit.Partnership).
      const extra = isIdent && !REF_PROPS.has(l) && !l.includes('.') && !l.startsWith('on')
        && (compNames?.has(name.toLowerCase()) || /^[\w]+\.[\w]+$/.test(name));
      if (!REF_PROPS.has(l) && !extra) continue;
      const { pendingRef } = await import('./forms');
      pendingRef.current = onPending ? (g, walk) => onPending(l, g, walk) : null;
      const target = await refResolver(name, this);
      pendingRef.current = null;
      if (target != null) await this.assignRef(l, target);
      else logger.debug(`${this.Name}.${k}: reference '${v}' not resolved`);
    }
  }

  /** Assign a resolved reference through the regular setter when one exists. */
  async assignRef(lname: string, target: unknown) {
    const ok = await super.pset(lname, target);
    if (!ok) this.refs.set(lname, target);
  }
}
registerBuiltin('TComponent', TComponent);
registerBuiltin('TPersistent', TObject as any);

/* ------------------------------------------------------------------ error reporting */

let busyDepth = 0;
export async function runGuarded<T>(fn: () => Promise<T> | T, where: string): Promise<T | undefined> {
  busyDepth++;
  beginHold();
  try {
    return await fn();
  } catch (e) {
    if (e instanceof AbortSignal) return undefined;
    reportException(e, where);
    return undefined;
  } finally {
    busyDepth--;
    endHold();
  }
}

/** While datasets saved with Active = True open after loading, handler errors (AfterScroll writing to a
 *  dataset that is not open yet …) are logged, not shown: the form is still being created. */
let loadingDepth = 0;
/** Exception classes that are web-runtime / programming errors, never shown in a message box. */
const INTERNAL_ERRORS = new Set(['EAccessViolation', 'EUndeclared', 'ENotPorted', 'EInvalidPointer', 'EInvalidCast']);
export async function whileLoading<T>(fn: () => Promise<T>): Promise<T> {
  loadingDepth++;
  try { return await fn(); } finally { loadingDepth--; }
}

export function reportException(e: unknown, where: string) {
  const msg = e instanceof PasException ? e.message : (e as Error)?.message ?? String(e);
  const cls = e instanceof PasException ? e.className : 'Exception';
  if (loadingDepth > 0 && e instanceof PasException && cls !== 'EOracleError') {
    logger.warn(`${where} (while loading): ${cls}: ${msg}`);
    audit('error', `${where} (yüklənərkən): ${cls}: ${msg}`);
    return;
  }
  // Internal errors (access violations, gaps of the web runtime, JS errors) are not shown to the user:
  // they go to the day's log file (İdarəetmə / Jurnal ayarları) and the Output panel.
  // Genuine application exceptions (raise …, Oracle errors, conversions) keep the classic error box.
  if (!(e instanceof PasException) || INTERNAL_ERRORS.has(cls)) {
    logger.warn(`${where}: ${cls}: ${msg}`);
    if (!(e instanceof PasException)) console.error(e);
    const stack = (e as Error)?.stack ? ' | ' + (e as Error).stack!.split('\n').slice(1, 6).map((x) => x.trim()).join(' < ') : '';
    audit('error', `${where}: ${cls}: ${msg}${stack}`);
    return;
  }
  logger.error(`${where}: ${cls}: ${msg}`);
  audit('error', `${where}: ${cls}: ${msg}`);
  if ((e as Error).stack) logger.debug(`stack: ${(e as Error).stack!.split('\n').slice(1, 16).join(' | ')}`);
  void messageBox(msg, cls === 'EOracleError' ? 'Oracle' : 'SmartBank', 0x10);
}

export { invalidate };
