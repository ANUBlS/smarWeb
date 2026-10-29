/* Forms.pas emulation + DFM streaming + window manager. */
import { TObject, PasException, ValueRef, NOTFOUND } from '../core';
import { registerBuiltin, getBuiltin, ClassDef, Env, noAutoCreate, addFixup } from '../env';
import { num, str } from '../pascal';
import { invalidate, suspendHold, flushNow } from '../ui';
import { logger } from '../log';
import type { DfmNode } from '../dfm';
import { mergeInherited } from '../dfm';
import { TComponent, REF_PROPS, runGuarded, setRefResolver, whileLoading } from './component';
import { TControl, TWinControl, TTabSheet, TPageControl, TStatusPanel, THeaderSection, TListColumn, TTimer, TTreeView } from './controls';
import { TStrings, TCollection, TFont } from './classes';
import { colorValue } from './colors';
import { TAction, TActionList, TMenuItem, TMenu, TMainMenu } from './actions';
import { TColumn, TDBGrid } from './dbcontrols';
import { TDataSet } from '../data/dataset';
import { TField } from '../data/fields';
import { TOracleDataSet, TOracleQuery } from '../data/oracle';
import { MR } from '../dialogs';

/* ------------------------------------------------------------------ window manager */

export type WindowKind = 'module' | 'modal' | 'float';
export interface FormWindow {
  id: number;
  form: TCustomForm;
  kind: WindowKind;
  /** Module windows: tree node caption / params used to reuse windows. */
  key?: string;
  minimized: boolean;
  maximized: boolean;
  /** Between Show and the end of OnShow/OnActivate: not painted yet (Delphi shows the form afterwards). */
  hidden?: boolean;
  x: number; y: number; w: number; h: number;
}

let winSeq = 0;
const winListeners = new Set<() => void>();
export const windows = {
  list: [] as FormWindow[],
  activeId: 0,
  subscribe(l: () => void) { winListeners.add(l); return () => { winListeners.delete(l); }; },
  emit() { windows.list = [...windows.list]; winListeners.forEach((l) => l()); invalidate(); },
  add(form: TCustomForm, kind: WindowKind, key?: string, hidden = false) {
    const existing = windows.list.find((w) => w.form === form);
    if (existing) { if (existing.hidden) windows.reveal(existing); windows.activate(existing.id); return existing; }
    const n = windows.list.filter((w) => w.kind !== 'modal').length;
    const w: FormWindow = {
      id: ++winSeq, form, kind, key, minimized: false,
      maximized: kind === 'module' && (form.WindowState === 'wsmaximized' || true),
      x: 24 + (n % 8) * 24, y: 24 + (n % 8) * 24,
      w: Math.max(320, form.designWidth), h: Math.max(160, form.designHeight + (form.Menu ? 22 : 0)),
      hidden,
    };
    windows.list.push(w);
    if (hidden) return w;
    if (kind !== 'modal') windows.activeId = w.id;
    windows.emit();
    return w;
  },
  /** First paint of a window added hidden: fully prepared, in one frame. */
  reveal(w: FormWindow) {
    if (!w.hidden) return;
    w.hidden = false;
    if (!windows.list.includes(w)) return;
    if (w.kind !== 'modal') windows.activeId = w.id;
    windows.emit();
  },
  remove(form: TCustomForm) {
    windows.list = windows.list.filter((w) => w.form !== form);
    if (!windows.list.some((w) => w.id === windows.activeId)) {
      const last = [...windows.list].reverse().find((w) => w.kind !== 'modal' && !w.minimized);
      windows.activeId = last?.id ?? 0;
    }
    windows.emit();
  },
  activate(id: number) {
    const w = windows.list.find((x) => x.id === id);
    if (!w) return;
    w.minimized = false;
    windows.activeId = id;
    windows.list = [...windows.list.filter((x) => x !== w), w];
    windows.emit();
    void w.form.fire('OnActivate', w.form);
  },
  byKey(key: string) { return windows.list.find((w) => w.key === key); },
  modalTop() { return [...windows.list].reverse().find((w) => w.kind === 'modal'); },
};

/* ------------------------------------------------------------------ forms */

export class TCustomForm extends TWinControl {
  isRootContainer = true;
  streamed = false;
  FormStyle = 'fsnormal';
  Position = 'podesigned';
  BorderStyle = 'bssizeable';
  BorderIcons: string[] = ['bisystemmenu', 'biminimize', 'bimaximize'];
  WindowState = 'wsnormal';
  KeyPreview = false;
  AutoScroll = true;
  Scaled = true;
  PixelsPerInch = 96;
  DefaultMonitor = 'dmactiveform';
  Menu: TMainMenu | null = null;
  ActiveControl: TControl | null = null;
  Icon = { LoadFromFile: () => undefined, Handle: 0 };
  HelpFile = '';
  OldCreateOrder = false;
  AxBorderStyle = 'afbnone';
  DropTarget = false;
  PrintScale = 'poproportional';
  AlphaBlend = false;
  AlphaBlendValue = 255;
  Monitor = { Width: 1920, Height: 1080, Left: 0, Top: 0 };
  designWidth = 600;
  designHeight = 400;
  env: Env | null = null;
  protected _modalResult = 0;
  protected modalResolve: ((r: number) => void) | null = null;
  protected shown = false;

  get kind() { return 'form'; }
  get ModalResult() { return this._modalResult; }
  set ModalResult(v: number) {
    this._modalResult = num(v);
    if (this._modalResult !== 0 && this.modalResolve) void this.tryCloseModal();
  }
  get Visible() { return this.shown; }
  set Visible(v: boolean) { if (v) void this.Show(); else this.Hide(); }
  get Active() { return windows.list.find((w) => w.id === windows.activeId)?.form === this; }
  get Showing() { return this.shown; }
  get Handle() { return 1; }
  get WindowHandle() { return 1; }
  get MDIChildCount() { return 0; }
  get FormState() { return [] as string[]; }
  get Modal() { return !!this.modalResolve; }

  /* builtin constructor: streams the DFM and fires OnCreate */
  async Create(owner?: unknown) {
    if (owner instanceof TComponent) owner.insertComponent(this);
    if (this.streamed) return;
    this.streamed = true;
    const layout = this.__cls ? fullLayout(this.__cls) : undefined;
    if (layout) await streamRoot(this, layout);
    await this.fire('OnCreate', this);
  }
  async CreateNew(owner?: unknown) { if (owner instanceof TComponent) owner.insertComponent(this); this.streamed = true; }

  async ShowModal(): Promise<number> {
    this._modalResult = 0;
    const w = windows.add(this, 'modal', undefined, true);
    this.shown = true;
    const done = new Promise<number>((resolve) => { this.modalResolve = resolve; });
    await this.prepareAndReveal(w);
    const unhold = suspendHold();
    let r: number;
    try { r = await done; } finally { unhold(); }
    void w;
    return r;
  }
  private async tryCloseModal() {
    const can = new ValueRef(true);
    if (this.hasHandler('OnCloseQuery')) await this.fire('OnCloseQuery', this, can);
    if (!can.value) { this._modalResult = 0; return; }
    const action = new ValueRef('cahide');
    await this.fire('OnClose', this, action);
    if (String(action.value).toLowerCase() === 'canone') { this._modalResult = 0; return; }
    const res = this.modalResolve;
    this.modalResolve = null;
    this.shown = false;
    windows.remove(this);
    await this.fire('OnHide', this);
    res?.(this._modalResult);
  }
  async Show() {
    if (this.shown) { this.BringToFront(); return; }
    this.shown = true;
    const w = windows.add(this, this.FormStyle === 'fsmdichild' ? 'module' : 'float', undefined, true);
    await this.prepareAndReveal(w);
  }
  /** OnShow, OnActivate and the first action OnUpdate run before the window is painted, and focus is
   *  set before the first frame: the window appears once, complete (no enabled/focus blink). */
  async prepareAndReveal(w: FormWindow) {
    try {
      await this.fire('OnShow', this);
      await this.fire('OnActivate', this);
      await this.UpdateActions();
    } finally {
      windows.reveal(w);
      this.focusActiveControl();
    }
  }
  focusActiveControl() {
    const ac = this.ActiveControl ?? this.firstTabControl();
    if (!ac) return;
    // the window renders in a microtask after reveal; rAF runs before that frame is painted
    requestAnimationFrame(() => ac.SetFocus());
    if (ac instanceof TTreeView) void runGuarded(() => ac.focusSelectFirst(), `${ac.Name}.OnChange`);
  }
  /** The control TCustomForm.SetFocus would focus first: lowest TabOrder, depth-first. */
  firstTabControl(): TControl | null {
    const FOCUSABLE = new Set(['edit', 'memo', 'dbgrid', 'stringgrid', 'treeview', 'listview', 'listbox', 'combo', 'button',
      'checkbox', 'radio', 'datetime', 'dbdate', 'dbedit', 'dbmemo', 'currency', 'spin', 'lookup', 'viewcombo', 'checklist']);
    const walk = (p: TControl): TControl | null => {
      const kids = [...p.children].filter((c) => c.Visible && c.Enabled)
        .sort((a, b) => ((a as any).TabOrder ?? 0) - ((b as any).TabOrder ?? 0));
      for (const c of kids) {
        if (FOCUSABLE.has(c.kind)) return c;
        if (c.children.length) { const r = walk(c); if (r) return r; }
      }
      return null;
    };
    return walk(this);
  }
  /** Delphi Close: OnCloseQuery → OnClose(Action) → hide/free; for modal forms sets ModalResult := mrCancel. */
  async Close() {
    if (this.modalResolve) {
      if (this._modalResult === 0) this._modalResult = MR.mrCancel;
      await this.tryCloseModal();
      return;
    }
    const can = new ValueRef(true);
    if (this.hasHandler('OnCloseQuery')) await this.fire('OnCloseQuery', this, can);
    if (!can.value) return;
    const action = new ValueRef(this.FormStyle === 'fsmdichild' || this.isModuleForm ? 'cafree' : 'cahide');
    await this.fire('OnClose', this, action);
    const a = String(action.value).toLowerCase();
    if (a === 'canone') return;
    if (a === 'caminimize') { const w = windows.list.find((x) => x.form === this); if (w) { w.minimized = true; windows.emit(); } return; }
    this.shown = false;
    windows.remove(this);
    await this.fire('OnHide', this);
    if (a === 'cafree') await this.destroyForm();
  }
  isModuleForm = false;
  async UpdateActions() { for (const c of this.owned) if (c instanceof TActionList) await c.updateAll(); }
  Hide() { this.shown = false; windows.remove(this); }
  Release() { this.Hide(); void this.destroyForm(); }
  override Free() { this.Hide(); void this.destroyForm(); super.Free(); }
  async destroyForm() {
    if (this.__freed) return;
    this.__freed = true;
    await this.fire('OnDestroy', this);
    for (const c of this.owned) if (c instanceof TTimer) c.Free();
  }
  override BringToFront() { const w = windows.list.find((x) => x.form === this); if (w) windows.activate(w.id); }
  override SetFocus() { this.BringToFront(); }
  FocusControl(c: unknown) { if (c instanceof TControl) c.SetFocus(); }
  override SelectNext() { return null; }
  Print() { /* */ }
  Tile() { /* */ }
  Cascade() { /* */ }
  ArrangeIcons() { /* */ }
  Next() { /* */ }
  Previous() { /* */ }
  Minimize() { /* */ }
  Restore() { /* */ }
  WindowProc() { /* */ }
  SetBounds(l: number, t: number, w: number, h: number) { super.SetBounds(l, t, w, h); this.designWidth = num(w); this.designHeight = num(h); }
  get ClientWidth() { return this.designWidth; }
  set ClientWidth(v: number) { this.designWidth = num(v); invalidate(); }
  get ClientHeight() { return this.designHeight; }
  set ClientHeight(v: number) { this.designHeight = num(v); invalidate(); }

  /* fields declared in the class are matched to DFM components by name */
  override pget(lname: string) {
    const r = super.pget(lname);
    const fallback = () => this.owned.find((c) => c.Name.toLowerCase() === lname) ?? NOTFOUND;
    if (r instanceof Promise) return r.then((x) => (x === NOTFOUND ? fallback() : x));
    return r === NOTFOUND ? fallback() : r;
  }
}
registerBuiltin('TCustomForm', TCustomForm);
export class TForm extends TCustomForm {}
registerBuiltin('TForm', TForm);
export class TActiveForm extends TCustomForm {
  async Initialize() { /* COM plumbing — event sinks are not used in the web host */ }
}
registerBuiltin('TActiveForm', TActiveForm);
registerBuiltin('TActiveFormX', TActiveForm);
export class TFrame extends TCustomForm { get kind() { return 'panel'; } }
registerBuiltin('TFrame', TFrame);
registerBuiltin('TCustomFrame', TFrame);

export class TDataModule extends TComponent {
  isRootContainer = true;
  streamed = false;
  OldCreateOrder = false;
  Height = 0;
  Width = 0;
  HorizontalOffset = 0;
  VerticalOffset = 0;
  async Create(owner?: unknown) {
    if (owner instanceof TComponent) owner.insertComponent(this);
    if (this.streamed) return;
    this.streamed = true;
    const layout = this.__cls ? fullLayout(this.__cls) : undefined;
    if (layout) await streamRoot(this, layout);
    await this.fire('OnCreate', this);
  }
  async CreateNew(owner?: unknown) { if (owner instanceof TComponent) owner.insertComponent(this); this.streamed = true; }
  override pget(lname: string) {
    const r = super.pget(lname);
    const fallback = () => this.owned.find((c) => c.Name.toLowerCase() === lname) ?? NOTFOUND;
    if (r instanceof Promise) return r.then((x) => (x === NOTFOUND ? fallback() : x));
    return r === NOTFOUND ? fallback() : r;
  }
}
registerBuiltin('TDataModule', TDataModule);

/** Merge inherited DFMs along the class chain. */
export function fullLayout(def: ClassDef): DfmNode | undefined {
  const own = def.dfm;
  const parent = def.parentDef ? fullLayout(def.parentDef) : undefined;
  if (!own) return parent;
  if (own.kind === 'inherited' && parent) return mergeInherited(parent, own);
  return own;
}

/* ------------------------------------------------------------------ DFM streaming */

type Id = { i: string };
const isId = (v: unknown): v is Id => !!v && typeof v === 'object' && !Array.isArray(v) && 'i' in (v as object);
export function dfmValue(v: unknown): unknown {
  if (isId(v)) return v.i;
  return v;
}
const ENUMISH = /^(al|ta|bs|bv|po|ws|fs|ss|dg|lo|tb|cs|fk|ps|pm|sc|ck|ec|lb|vs|tl|ak|ds|ft|dt|dk|dm|ga|sb|tp|ts|ob|ca|bk|mb|gd|ht|ic|tv|sm|ra|rs|so|ma|lm|af|bi|di|pb|ug|nb|cb|db|ro|lm|vs|sr|xl|ex|em|fm|st|vm|ta)[A-Z]/;
/** Bare identifiers on non-reference properties are enums/constants: lower-case tokens (see stdlib). */
function normEnum(v: unknown): unknown {
  if (isId(v)) return v.i.toLowerCase();
  if (Array.isArray(v)) return v.map((x) => (typeof x === 'string' ? x.toLowerCase() : normEnum(x)));
  return v;
}
void ENUMISH;

const COLOR_PROPS = new Set(['color', 'fixedcolor', 'titlecolor', 'brush.color', 'pen.color', 'transparentcolor', 'bkcolor', 'hottrackcolor', 'selectedcolor']);
const STRINGS_PROPS = new Set(['items.strings', 'lines.strings', 'sql.strings', 'tabs.strings', 'picklist.strings', 'values.strings', 'hints.strings', 'strings.strings', 'deletesql.strings', 'insertsql.strings', 'modifysql.strings', 'refreshsql.strings', 'lockSQL.strings']);
// 'active': datasets open after loading (Delphi Loaded), not while their variables/refs are still streaming
const IGNORE_PROPS = new Set(['active', 'designsize', 'explicitleft', 'explicittop', 'explicitwidth', 'explicitheight', 'textheight', 'pixelsperinch', 'oldcreateorder', 'itemheight', 'qbedefinition.qbefielddefs', 'designactivation', 'variables.data', 'picture.data', 'glyph.data', 'bitmap', 'icon.data', 'image.data', 'displaylabelfont', 'helpcontext', 'parentbidimode', 'bidimode', 'imemode', 'imename', 'ctl3d', 'parentctl3d', 'dragcursor', 'dragkind', 'dragmode', 'touch.interactivegestures', 'touch.interactivegestureoptions', 'touch.parenttabletoptions', 'touch.tabletoptions', 'defaultmonitor', 'glasframe.enabled']);

/** Instantiate the builtin or user class for a DFM node. */
async function makeComponent(node: DfmNode, env: Env | null, owner: TComponent | null = null): Promise<TComponent> {
  const def = env?.findClass(node.class);
  if (def) {
    // DFM streaming creates every component with the form/data module as Owner (Create(AOwner))
    const inst = (await Env.instanceFactory(def, [owner], env!)) as TComponent;
    return inst;
  }
  const ctor = getBuiltin(node.class);
  if (ctor) return new ctor() as TComponent;
  // Unknown third-party component: keep a placeholder that still positions/children like a panel.
  logger.debug(`Unknown component class ${node.class} (${node.name}) rendered as placeholder`);
  const p = new TWinControl();
  (p as any).placeholderClass = node.class;
  p.__className = node.class;
  return p;
}

export async function streamRoot(root: TComponent, layout: DfmNode) {
  const env = (root as any).env as Env | null ?? root.__cls?.env ?? null;
  if (root instanceof TCustomForm) root.env = env;
  if (!root.Name) root.Name = layout.name;
  applyProps(root, layout.props, true);
  const created: TComponent[] = [root];
  for (const child of layout.children) await streamChild(child, root, root instanceof TWinControl ? root : null, created, env);
  // resolve references once every component exists; unresolved globals become fixups
  const names = new Set(created.map((c) => (c.Name || '').toLowerCase()).filter(Boolean));
  for (const c of created) {
    pendingRef.current = null;
    await c.resolveRefs((prop, global, walk) => addFixup(global, async (target) => {
      const t = await walk(target);
      if (t != null) await c.assignRef(prop, t);
    }), names);
  }
  for (const c of created) {
    if (c instanceof TOracleDataSet || c instanceof TOracleQuery) c.initFromDfm();
    if (c instanceof TDBGrid) for (const col of c.Columns.all() as TColumn[]) col.grid = c;
  }
  // datasets saved with Active = True open after loading (Delphi Loaded)
  await whileLoading(async () => {
    for (const c of created) {
      if (c instanceof TDataSet && c.dfm.Active === true) await runGuarded(() => c.Open(), `${c.Name}.Open`);
    }
  });
  for (const c of created) if (c instanceof TTimer) { c.started = true; c.restart(); }
}

async function streamChild(node: DfmNode, root: TComponent, parentCtl: TWinControl | null, created: TComponent[], env: Env | null,
  container?: TComponent) {
  let comp: TComponent;
  // inherited/inline nodes refer to components that already exist (frames / merged layouts)
  const existing = node.kind !== 'object' ? root.owned.find((c) => c.Name.toLowerCase() === node.name.toLowerCase()) : undefined;
  if (existing) comp = existing;
  else {
    comp = await makeComponent(node, env, root);
    comp.Name = node.name;
    root.insertComponent(comp);
  }
  comp.dfm = { ...comp.dfm, ...node.props };
  created.push(comp);
  // publish into the owner's declared field of the same name
  if (root.__fields) {
    const l = node.name.toLowerCase();
    if (root.__cls?.hasField(l) || l in root.__fields) root.__fields[l] = comp;
  }
  // structural parents
  if (comp instanceof TControl && parentCtl && comp !== parentCtl) comp.setParent(parentCtl);
  if (comp instanceof TTabSheet && parentCtl instanceof TPageControl) comp.PageControl = parentCtl;
  if (comp instanceof TAction && container instanceof TActionList) { comp.ActionList = container; container.insertComponent(comp); root.insertComponent(comp); }
  if (comp instanceof TMenuItem) {
    if (container instanceof TMenuItem) container.Add(comp);
    else if (container instanceof TMenu) container.Items.Add(comp);
  }
  if (comp instanceof TField && container instanceof TDataSet) container.addPersistentField(comp);
  if (comp instanceof TControl && parentCtl) {
    comp.designParent = { w: clientW(parentCtl), h: clientH(parentCtl) };
  }
  applyProps(comp, node.props, false);
  const nextParent = comp instanceof TWinControl ? comp : parentCtl;
  for (const ch of node.children) await streamChild(ch, root, nextParent, created, env, comp);
}

function clientW(c: TControl) {
  const dw = (c as any).designWidth ?? c.Width;
  return c instanceof TCustomForm ? dw : Math.max(0, c.Width - insets(c).l - insets(c).r);
}
function clientH(c: TControl) {
  const dh = (c as any).designHeight ?? c.Height;
  return c instanceof TCustomForm ? dh : Math.max(0, c.Height - insets(c).t - insets(c).b);
}
/** Approximate client insets of containers at design time. */
export function insets(c: TControl): { l: number; t: number; r: number; b: number } {
  const k = c.kind;
  if (k === 'groupbox' || k === 'radiogroup') return { l: 2, t: 15, r: 2, b: 2 };
  if (k === 'pagecontrol') return { l: 4, t: 24, r: 4, b: 4 };
  if (k === 'panel' || k === 'controlbar') {
    const p = c as any;
    const bw = (p.BevelOuter && p.BevelOuter !== 'bvnone' ? p.BevelWidth ?? 1 : 0) + (p.BevelInner && p.BevelInner !== 'bvnone' ? p.BevelWidth ?? 1 : 0) + (p.BorderWidth ?? 0) + (p.BorderStyle === 'bssingle' ? 1 : 0);
    return { l: bw, t: bw, r: bw, b: bw };
  }
  if (k === 'scrollbox') return { l: 2, t: 2, r: 2, b: 2 };
  return { l: 0, t: 0, r: 0, b: 0 };
}

function setStrings(target: unknown, lines: unknown) {
  if (target instanceof TStrings) {
    const arr = Array.isArray(lines) ? lines.map((x) => str(dfmValue(x))) : [str(lines)];
    target.BeginUpdate();
    target.Clear();
    for (const s of arr) target.Add(s);
    target.EndUpdate();
  }
}

/** Assign DFM properties without firing change events (component is loading). */
export function applyProps(comp: TComponent, props: Record<string, unknown>, isRoot: boolean) {
  const fontKeys = Object.keys(props).filter((k) => k.startsWith('Font.'));
  if (fontKeys.length && (comp as any).Font instanceof TFont) {
    (comp as any).Font.assignDfm(Object.fromEntries(fontKeys.map((k) => [k, dfmValue(props[k])])));
    (comp as any).ParentFont = false;
  }
  const titleFont = Object.keys(props).filter((k) => k.startsWith('TitleFont.'));
  if (titleFont.length && (comp as any).TitleFont instanceof TFont) {
    (comp as any).TitleFont.assignDfm(Object.fromEntries(titleFont.map((k) => [k.replace('TitleFont.', 'Font.'), dfmValue(props[k])])));
  }
  for (const [k, raw] of Object.entries(props)) {
    const l = k.toLowerCase();
    if (l === 'items.tree') { const it = (comp as any).Items; if (it && typeof it.loadDfm === 'function') it.loadDfm(raw); continue; }
    if (IGNORE_PROPS.has(l) || l.startsWith('font.') || l.startsWith('titlefont.') || l.startsWith('constraints.')
      || l.startsWith('margins.') || l.startsWith('padding.') || l.startsWith('touch.') || l.startsWith('customhint')) continue;
    if (/^on[a-z]/.test(l) && (isId(raw) || typeof raw === 'string')) { comp.events.set(l, str(dfmValue(raw))); continue; }
    // dataset / report events without the On prefix (AfterScroll, BeforePost, AfterPost, BeforePrint …)
    if (/^(after|before)[a-z]/.test(l) && isId(raw)) { comp.events.set(l, str(dfmValue(raw))); continue; }
    if (REF_PROPS.has(l)) continue;
    if (STRINGS_PROPS.has(l)) { setStrings((comp as any)[k.split('.')[0]] ?? (comp as any)[capital(k.split('.')[0])], raw); continue; }
    if (Array.isArray(raw) && raw.length && typeof raw[0] === 'object' && !isId(raw[0])) { applyCollection(comp, k, raw as Record<string, unknown>[]); continue; }
    let v = normEnum(raw);
    if (COLOR_PROPS.has(l)) v = colorValue(dfmValue(raw));
    if (l === 'color') { (comp as any)._color = v; (comp as any).ParentColor = false; continue; }
    if (isRoot && (comp instanceof TCustomForm)) {
      if (l === 'clientwidth') { comp.designWidth = num(v); continue; }
      if (l === 'clientheight') { comp.designHeight = num(v); continue; }
      // classic-theme frame of the Delphi 7 era: 4px borders, 19px caption
      if (l === 'width' && !('ClientWidth' in props)) { comp.designWidth = Math.max(100, num(v) - 8); continue; }
      if (l === 'height' && !('ClientHeight' in props)) { comp.designHeight = Math.max(80, num(v) - 27 - (props.Menu ? 19 : 0)); continue; }
      if (l === 'visible' || l === 'left' || l === 'top') continue;
    }
    if (k.includes('.')) { assignNested(comp, k, v); continue; }
    assignDirect(comp, k, v);
  }
}
const capital = (s: string) => s.charAt(0).toUpperCase() + s.slice(1);

function assignDirect(obj: any, key: string, v: unknown) {
  // find the real member name case-insensitively (getter/setter or field)
  const l = key.toLowerCase();
  let name: string | undefined;
  for (let p = obj; p && p !== Object.prototype; p = Object.getPrototypeOf(p)) {
    for (const n of Object.getOwnPropertyNames(p)) if (n.toLowerCase() === l && n[0] === n[0].toUpperCase()) { name = n; break; }
    if (name) break;
  }
  if (!name) {
    // keep in dfm; unknown members are simply not emulated
    return;
  }
  try {
    if (typeof obj[name] === 'function') return;
    // collections / string lists are filled, never replaced (e.g. `Panels = <>`)
    const cur = obj[name];
    if (cur && typeof cur === 'object' && (cur instanceof TCollection || cur instanceof TStrings)) return;
    // Anchors/Options sets as arrays; booleans/numbers as is
    obj[name] = v;
  } catch (e) {
    logger.debug(`DFM ${obj.Name}.${key}: ${(e as Error).message}`);
  }
}

function assignNested(comp: any, key: string, v: unknown) {
  const parts = key.split('.');
  let target = comp;
  for (const p of parts.slice(0, -1)) {
    const l = p.toLowerCase();
    let next: unknown;
    for (const n of allNames(target)) if (n.toLowerCase() === l) { next = target[n]; break; }
    if (next === undefined || next === null || typeof next !== 'object') return;
    target = next;
  }
  assignDirect(target, parts[parts.length - 1], v);
}
function allNames(o: any): string[] {
  const out: string[] = [];
  for (let p = o; p && p !== Object.prototype; p = Object.getPrototypeOf(p)) out.push(...Object.getOwnPropertyNames(p));
  return out;
}

function applyCollection(comp: any, key: string, items: Record<string, unknown>[]) {
  const l = key.toLowerCase();
  const coll: TCollection | undefined = comp[capital(key)] ?? comp[key];
  if (!(coll instanceof TCollection)) return;
  coll.Clear();
  for (const it of items) {
    const item = coll.Add() as any;
    if (item instanceof TColumn) {
      if ('Width' in it) item.explicitWidth = true;
    }
    for (const [k, raw] of Object.entries(it)) {
      const v = normEnum(raw);
      const kl = k.toLowerCase();
      if (kl.startsWith('title.font.') || kl.startsWith('font.')) {
        const font: TFont | undefined = kl.startsWith('title.') ? item.Title?.Font : item.Font;
        if (font) font.assignDfm({ ['Font.' + k.split('.').pop()]: dfmValue(raw) });
        continue;
      }
      if (kl === 'picklist.strings') { setStrings(item.PickList, raw); continue; }
      if (kl === 'color' || kl === 'title.color') { assignNested(item, k, colorValue(dfmValue(raw))); continue; }
      if (k.includes('.')) assignNested(item, k, v);
      else if (k in item || allNames(item).some((n) => n.toLowerCase() === kl)) assignDirect(item, k, v);
      else item[k] = v;
    }
  }
  void l;
  void StatusPanelTypes;
}
const StatusPanelTypes = [TStatusPanel, THeaderSection, TListColumn];

/* ------------------------------------------------------------------ reference resolution */

setRefResolver(async (name: string, from: TComponent) => {
  const parts = name.split('.');
  const root = from.root;
  if (parts.length === 1) {
    const l = name.toLowerCase();
    const local = root.owned.find((c) => c.Name.toLowerCase() === l);
    if (local) return local;
    if (root.Name.toLowerCase() === l) return root;
    // a global data module / form variable
    const env: Env | null = (root as any).env ?? root.__cls?.env ?? null;
    if (env) { try { const v = await env.lookup(l); if (v !== NOTFOUND) return v; } catch { /* */ } }
    return null;
  }
  // 'DataModule.Component' — the global variable of another form/data module
  const env: Env | null = (root as any).env ?? root.__cls?.env ?? null;
  let obj: unknown = null;
  if (env) {
    noAutoCreate.depth++;
    try {
      const v = await env.lookup(parts[0].toLowerCase());
      obj = v === NOTFOUND ? null : v;
    } catch (e) { logger.debug(`ref ${name}: ${(e as Error).message}`); }
    finally { noAutoCreate.depth--; }
    if (!obj && parts[0].toLowerCase() === 'sboapidatamodule') obj = await env.lookup('sboapidatamodule');
  }
  if (!obj) obj = root.owned.find((c) => c.Name.toLowerCase() === parts[0].toLowerCase()) ?? null;
  const walk = async (start: unknown) => {
    let o = start;
    for (const p of parts.slice(1)) {
      if (!o || typeof (o as any).pget !== 'function') return null;
      const r = await (o as any).pget(p.toLowerCase());
      o = r === NOTFOUND ? null : r;
    }
    return o;
  };
  if (!obj) {
    // Delphi keeps unresolved references as fixups until that form/data module is created
    pendingRef.current?.(parts[0], walk);
    return null;
  }
  return walk(obj);
});
/** Set by assignRef callers to register fixups for the property being resolved. */
export const pendingRef: { current: ((global: string, walk: (o: unknown) => Promise<unknown>) => void) | null } = { current: null };

/* ------------------------------------------------------------------ instance factory */

Env.instanceFactory = async (def: ClassDef, args: any[], env: Env) => {
  if (def.isA('Exception')) {
    const parents = def.chain().slice(1).map((c) => c.lname);
    const e = new PasException(def.name, str(args[0]), [...parents, 'exception']);
    return e as unknown as TObject;
  }
  const ctor = getBuiltin(def.rootBuiltin) ?? getBuiltin('TObject') ?? TObject;
  const inst = new (ctor as any)() as TObject;
  inst.__cls = def;
  inst.__className = def.name;
  (inst as any).env = env;
  def.initFields(inst);
  const userCtor = def.findMethod('create', args.length);
  if (userCtor) await userCtor(inst, ...args);
  else if (typeof (inst as any).Create === 'function') await (inst as any).Create(...args);
  // forms/datamodules whose user constructor did not reach the builtin Create
  if ((inst as any).isRootContainer && !(inst as any).streamed) await (inst as any).Create(args[0]);
  return inst;
};
registerBuiltin('TObject', TObject as any);

/* ------------------------------------------------------------------ Application / Screen */

export class TApplication extends TComponent {
  Title = 'SmartBank';
  HintColor = 0;
  HintPause = 500;
  ShowHint = true;
  ExeName = 'C:\\SmartBank\\Bin\\SmartBank.exe';
  Terminated = false;
  UpdateFormatSettings = true;
  Handle = 1;
  MainForm: TCustomForm | null = null;
  Icon = { Handle: 0 };
  HelpFile = '';
  async MessageBox(text: unknown, caption: unknown, flags: unknown) {
    const { messageBox } = await import('../dialogs');
    return messageBox(text, caption, flags);
  }
  async ProcessMessages() { flushNow(); await new Promise((r) => setTimeout(r, 0)); }
  HandleMessage() { /* */ }
  Terminate() { this.Terminated = true; }
  Minimize() { /* */ }
  Restore() { /* */ }
  BringToFront() { /* */ }
  HandleException(e: unknown) { void import('./component').then((m) => m.reportException(e, 'Application')); }
  ShowException(e: unknown) { void import('./component').then((m) => m.reportException(e, 'Application')); }
  async CreateForm(type: any, ref: any) {
    const inst = await type.create([this]);
    if (ref && typeof ref.set === 'function') await ref.set(inst);
  }
  HelpCommand() { return false; }
  HelpContext() { return false; }
  NormalizeTopMosts() { /* */ }
  RestoreTopMosts() { /* */ }
  CancelHint() { /* */ }
  ActivateHint() { /* */ }
}
export const Application = new TApplication();
Application.Name = 'Application';

export class TScreen extends TComponent {
  protected _cursor = 0;
  Width = 1920;
  Height = 1080;
  PixelsPerInch = 96;
  get Cursor() { return this._cursor; }
  set Cursor(v: number) {
    this._cursor = num(v);
    void import('../ui').then((m) => m.setScreenCursor(this._cursor));
  }
  get ActiveForm() { return windows.list.find((w) => w.id === windows.activeId)?.form ?? null; }
  get ActiveControl() { return null; }
  get FormCount() { return windows.list.length; }
  get Forms() { return { pindex: (i: unknown[]) => windows.list[num(i[0])]?.form ?? null } as unknown; }
  get CustomFormCount() { return windows.list.length; }
  get DataModuleCount() { return 0; }
  get MonitorCount() { return 1; }
  get WorkAreaWidth() { return window.innerWidth; }
  get WorkAreaHeight() { return window.innerHeight; }
  get Fonts() { return new TStrings(['Segoe UI', 'Arial', 'Tahoma', 'Times New Roman', 'Courier New']); }
}
export const Screen = new TScreen();
Screen.Name = 'Screen';

export const Mouse = { CursorPos: { x: 0, y: 0 }, Capture: 0 };
export const Clipboard = {
  get AsText() { return ''; },
  set AsText(v: string) { void navigator.clipboard?.writeText(String(v)); },
  pget(l: string) { return l === 'astext' ? '' : NOTFOUND; },
  pset(l: string, v: unknown) { if (l === 'astext') { void navigator.clipboard?.writeText(str(v)); return true; } return false; },
  Clear() { /* */ },
};
