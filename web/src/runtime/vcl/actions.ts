/* ActnList.pas / Menus.pas emulation. */
import { auditClick } from '../audit';
import { registerBuiltin } from '../env';
import { num, str } from '../pascal';
import { invalidate } from '../ui';
import { TComponent } from './component';
import { logger } from '../log';
import { Indexed } from './classes';

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
    if (a) for (const p of ['caption', 'checked', 'enabled', 'visible', 'hint', 'imageindex']) if (!d.includes(p)) this.linked.add(p);
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
/** PluginPopupMenu.pas: items come from an INI file that is not in the repository (see TMenuIni). */
export class TPluginPopupMenu extends TPopupMenu {
  MenuIni: unknown = null;
  Active = false;
  LoadPlugins() { /* */ }
  UnLoadPlugins() { /* */ }
}
registerBuiltin('TPluginPopupMenu', TPluginPopupMenu);
