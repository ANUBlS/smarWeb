/* ActnList.pas / Menus.pas emulation. */
import { auditClick } from '../audit';
import { registerBuiltin } from '../env';
import { num, str } from '../pascal';
import { invalidate } from '../ui';
import { TComponent, isStreaming } from './component';
import { logger } from '../log';
import { Indexed } from './classes';
import { runPlugin, iconUrl, rsUnassigned, type PluginRec } from './plugins';

export class TBasicAction extends TComponent {
  ActionComponent: TComponent | null = null;
  async Execute(): Promise<boolean> { return this.execFrom(null); }
  async execFrom(sender: TComponent | null): Promise<boolean> {
    this.ActionComponent = sender;
    if (!this.hasHandler('OnExecute')) return false;
    await this.fire('OnExecute', this);
    return true;
  }
  async Update() { if (this.hasHandler('OnUpdate')) { await this.fire('OnUpdate', this); return true; } return false; }
}

export class TAction extends TBasicAction {
  ActionList: TActionList | null = null;
  Category = '';
  GroupIndex = 0;
  AutoCheck = false;
  ShortCut = 0;
  SecondaryShortCuts = [];
  HelpContext = 0;
  protected _caption = '';
  protected _checked = false;
  protected _enabled = true;
  protected _visible = true;
  protected _hint = '';
  protected _imageIndex = -1;

  get Caption() { return this._caption; }
  set Caption(v: string) { const n = str(v); if (n !== this._caption) { this._caption = n; invalidate(); } }
  get Checked() { return this._checked; }
  set Checked(v: boolean) {
    if (!!v === this._checked) return;
    this._checked = !!v;
    if (v && this.GroupIndex > 0 && this.ActionList) {
      for (const a of this.ActionList.actions()) if (a !== this && a.GroupIndex === this.GroupIndex) a._checked = false;
    }
    invalidate();
  }
  get Enabled() { return this._enabled; }
  set Enabled(v: boolean) { if (!!v !== this._enabled) { this._enabled = !!v; invalidate(); } }
  get Visible() { return this._visible; }
  set Visible(v: boolean) { if (!!v !== this._visible) { this._visible = !!v; invalidate(); } }
  get Hint() { return this._hint; }
  set Hint(v: string) { this._hint = str(v); }
  get ImageIndex() { return this._imageIndex; }
  set ImageIndex(v: number) { if (num(v) !== this._imageIndex) { this._imageIndex = num(v); invalidate(); } }
  get Index() { return this.ActionList ? this.ActionList.actions().indexOf(this) : -1; }

  override async execFrom(sender: TComponent | null): Promise<boolean> {
    if (!this.Enabled) return false;
    if (this.AutoCheck) this.Checked = !this.Checked;
    return super.execFrom(sender);
  }
}
registerBuiltin('TBasicAction', TBasicAction);
registerBuiltin('TAction', TAction);
registerBuiltin('TCustomAction', TAction);
registerBuiltin('TContainedAction', TAction);

export class TActionList extends TComponent {
  Images: unknown = null;
  State = 'asnormal';
  actions(): TAction[] { return this.owned.filter((c): c is TAction => c instanceof TAction); }
  get ActionCount() { return this.actions().length; }
  get Actions() { return new Indexed((i) => this.actions()[num(i[0])]); }
  /** Run OnUpdate for all actions (Delphi does this on application idle). */
  private updateErrors = new Set<string>();
  async updateAll() {
    // Idle-time updates: failures are logged once per action instead of interrupting the user.
    const quiet = async (name: string, fn: () => Promise<unknown>) => {
      try { await fn(); } catch (e) {
        if (!this.updateErrors.has(name)) { this.updateErrors.add(name); logger.debug(`${name}.OnUpdate: ${(e as Error).message}`); }
      }
    };
    for (const a of this.actions()) if (a.hasHandler('OnUpdate')) await quiet(a.Name, () => a.fireRaw('OnUpdate', a));
  }
}
registerBuiltin('TActionList', TActionList);
registerBuiltin('TActionManager', TActionList);

/* ------------------------------------------------------------------ menus */

export class TMenuItem extends TComponent {
  items: TMenuItem[] = [];
  Parent: TMenuItem | null = null;
  RadioItem = false;
  GroupIndex = 0;
  Default = false;
  AutoCheck = false;
  ShortCut = 0;
  Break = 'mbnone';
  Bitmap = null;
  protected _caption = '';
  protected _checked = false;
  protected _enabled = true;
  protected _visible = true;
  protected _hint = '';
  protected _imageIndex = -1;
  protected _action: TAction | null = null;
  linked = new Set<string>();

  get Caption() { return this.lv('caption', this._caption) as string; }
  set Caption(v: string) { const n = str(v), c = n !== this._caption; this._caption = n; this.linked.delete('caption'); if (c) invalidate(); }
  get Checked() { return this.lv('checked', this._checked) as boolean; }
  set Checked(v: boolean) {
    if (!!v === this._checked) return;
    this._checked = !!v; this.linked.delete('checked');
    if (v && this.RadioItem && this.Parent) for (const s of this.Parent.items) if (s !== this && s.RadioItem && s.GroupIndex === this.GroupIndex) s._checked = false;
    invalidate();
  }
  get Enabled() { return this.lv('enabled', this._enabled) as boolean; }
  set Enabled(v: boolean) { const n = !!v, c = n !== this._enabled; this._enabled = n; this.linked.delete('enabled'); if (c) invalidate(); }
  get Visible() { return this.lv('visible', this._visible) as boolean; }
  set Visible(v: boolean) { const n = !!v, c = n !== this._visible; this._visible = n; this.linked.delete('visible'); if (c) invalidate(); }
  get Hint() { return this.lv('hint', this._hint) as string; }
  set Hint(v: string) { this._hint = str(v); }
  get ImageIndex() { return this.lv('imageindex', this._imageIndex) as number; }
  set ImageIndex(v: number) { this._imageIndex = num(v); this.linked.delete('imageindex'); }
  get Action() { return this._action; }
  set Action(a: TAction | null) {
    this._action = a;
    const d = Object.keys(this.dfm).map((k) => k.toLowerCase());
    if (a) for (const p of ['caption', 'checked', 'enabled', 'visible', 'hint', 'imageindex']) if (!isStreaming() || !d.includes(p)) this.linked.add(p);
    invalidate();
  }
  private lv(p: string, own: unknown) {
    const a = this._action as any;
    if (a && this.linked.has(p)) {
      return { caption: a.Caption, checked: a.Checked, enabled: a.Enabled, visible: a.Visible, hint: a.Hint, imageindex: a.ImageIndex }[p];
    }
    return own;
  }
  get IsLine() { return this.Caption === '-'; }

  get Count() { return this.items.length; }
  get Items() { return new Indexed((i) => this.items[num(i[0])]); }
  pindex(idx: unknown[]) { return this.items[num(idx[0])]; }
  get MenuIndex() { return this.Parent ? this.Parent.items.indexOf(this) : -1; }
  Add(it: unknown) {
    const arr = Array.isArray(it) ? it : [it];
    for (const x of arr) if (x instanceof TMenuItem) { x.Parent = this; this.items.push(x); }
    invalidate();
  }
  Insert(i: number, it: unknown) { if (it instanceof TMenuItem) { it.Parent = this; this.items.splice(num(i), 0, it); invalidate(); } }
  Delete(i: number) { this.items.splice(num(i), 1); invalidate(); }
  Remove(it: unknown) { this.items = this.items.filter((x) => x !== it); invalidate(); }
  Clear() { this.items = []; invalidate(); }
  IndexOf(it: unknown) { return this.items.indexOf(it as TMenuItem); }
  Find(caption: unknown) { const c = str(caption).replace(/&/g, '').toLowerCase(); return this.items.find((x) => x.Caption.replace(/&/g, '').toLowerCase() === c) ?? null; }
  GetParentMenu() { let p: TMenuItem | null = this; while (p?.Parent) p = p.Parent; return (p as any)?.menu ?? null; }
  async Click() {
    if (!this.Enabled) return;
    if (this._action || this.hasHandler('OnClick')) auditClick(this as any, 'Menyu');
    if (this.AutoCheck) this.Checked = !this.Checked;
    if (this._action && !this.hasHandler('OnClick')) { await this._action.execFrom(this); return; }
    await this.fire('OnClick', this);
  }
}
registerBuiltin('TMenuItem', TMenuItem);

export class TMenu extends TComponent {
  Items: TMenuItem;
  Images: unknown = null;
  AutoHotkeys = 'maautomatic';
  OwnerDraw = false;
  constructor() {
    super();
    this.Items = new TMenuItem();
    (this.Items as any).menu = this;
  }
}
export class TMainMenu extends TMenu {}
registerBuiltin('TMenu', TMenu);
registerBuiltin('TMainMenu', TMainMenu);

/** Open popup requests are rendered by the shell (see ui/PopupLayer). */
export const popupState: { menu: TPopupMenu | null; x: number; y: number } = { menu: null, x: 0, y: 0 };
const popupListeners = new Set<() => void>();
export const popupStore = {
  subscribe(l: () => void) { popupListeners.add(l); return () => { popupListeners.delete(l); }; },
  get: () => popupState.menu ? { ...popupState } : null,
  close() { popupState.menu = null; popupListeners.forEach((l) => l()); },
};

export class TPopupMenu extends TMenu {
  PopupComponent: TComponent | null = null;
  AutoPopup = true;
  Alignment = 'paleft';
  async Popup(x: number, y: number) {
    await this.fire('OnPopup', this);
    popupState.menu = this; popupState.x = num(x); popupState.y = num(y);
    popupListeners.forEach((l) => l());
  }
}
registerBuiltin('TPopupMenu', TPopupMenu);
registerBuiltin('TPopupActionBar', TPopupMenu);
/** PluginPopupMenu.pas: items come from an installation INI file (see TMenuIni, binfiles.ts):
 *  [<IniSection>\MenuItems] Count=n, [<IniSection>\MenuItems\MenuItem<i>] Caption/ShortCut/Plugin/PluginParam/Icon,
 *  sub-items under …\MenuItem<i>\MenuItem<j>. */
export class TPluginPopupMenuItem extends TMenuItem {
  AbsoluteIndex = 0;
  iconUrl: string | null = null;
  override async Click() {
    await super.Click();
    const m = this.GetParentMenu();
    if (m instanceof TPluginPopupMenu) await m.PluginMenuItemClick(this);
  }
}
registerBuiltin('TPluginPopupMenuItem', TPluginPopupMenuItem);

export class TPluginPopupMenu extends TPopupMenu {
  private _menuIni: any = null;
  private _active = false;
  plugins: PluginRec[] = [];
  PluginDir = '';
  private seq = 0;
  get MenuIni() { return this._menuIni; }
  set MenuIni(v: any) {
    this._menuIni = v;
    if (!isStreaming() && v && v.Active) this.Active = this._active;
  }
  get Active() { return this._active; }
  set Active(v: boolean) {
    this._active = !!v;
    if (isStreaming()) return;
    if (this._active && this._menuIni && this._menuIni.Active) this.LoadPlugins(null);
    else this.FreePlugins();
  }
  private sectionOf(item: TMenuItem | null) {
    let r = '';
    let m: TMenuItem | null = item;
    while (m && m.Parent) { r = `MenuItem${m.MenuIndex}\\${r}`; m = m.Parent; }
    r = `${this._menuIni.IniSection}\\MenuItems\\${r}`;
    return r.slice(0, -1);
  }
  LoadPlugins(item: TPluginPopupMenuItem | null) {
    const ini = this._menuIni.Location;
    const cur = this.sectionOf(item);
    const n = num(ini.ReadInteger(cur, 'Count', 0));
    for (let i = 0; i < n; i++) {
      const sec = `${cur}\\MenuItem${i}`;
      const it = new TPluginPopupMenuItem();
      it.Create(item ?? this);
      it.AbsoluteIndex = this.seq++;
      it.Caption = str(ini.ReadString(sec, 'Caption', rsUnassigned));
      it.ShortCut = textToShortCut(str(ini.ReadString(sec, 'ShortCut', '')));
      it.iconUrl = iconUrl(str(ini.ReadString(sec, 'Icon', '')));
      const dir = this.PluginDir ? this.PluginDir + '\\' : '';
      this.plugins.push({ module: dir + str(ini.ReadString(sec, 'Plugin', '')), param: str(ini.ReadString(sec, 'PluginParam', '')), handle: 0 });
      (item ?? this.Items).Add(it);
      this.LoadPlugins(it);
    }
  }
  FreePlugins() { this.Items.Clear(); }
  async PluginMenuItemClick(item: TPluginPopupMenuItem) {
    const rec = this.plugins[item.AbsoluteIndex];
    if (!rec) return;
    const r = await runPlugin(this, rec);
    if (r) item.Checked = r.checked;
  }
  UnLoadPlugins() { this.FreePlugins(); }
}
registerBuiltin('TPluginPopupMenu', TPluginPopupMenu);

/** Menus.TextToShortCut for the forms used in the INI files ('Ctrl+F5', 'F9', 'Shift+Del' …). */
function textToShortCut(t: string): number {
  if (!t) return 0;
  let v = 0; let rest = t.trim();
  for (;;) {
    const m = /^(ctrl|shift|alt)\+/i.exec(rest);
    if (!m) break;
    v |= { ctrl: 0x4000, shift: 0x2000, alt: 0x8000 }[m[1].toLowerCase() as 'ctrl'];
    rest = rest.slice(m[0].length);
  }
  const keys: Record<string, number> = { ins: 45, del: 46, enter: 13, esc: 27, space: 32, home: 36, end: 35, pgup: 33, pgdn: 34, tab: 9, bksp: 8 };
  let k = 0;
  const f = /^f(\d{1,2})$/i.exec(rest);
  if (f) k = 111 + Number(f[1]);
  else if (keys[rest.toLowerCase()]) k = keys[rest.toLowerCase()];
  else if (rest.length === 1) k = rest.toUpperCase().charCodeAt(0);
  return k ? v | k : 0;
}
