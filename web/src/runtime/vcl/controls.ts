/* Visual controls (Controls.pas, StdCtrls.pas, ExtCtrls.pas, ComCtrls.pas, Buttons.pas …). */
import { TObject, Ref, ValueRef, NOTFOUND, GAP, PasException } from '../core';
import { toast } from '../toast';
import { logger } from '../log';
import { registerBuiltin, getBuiltin } from '../env';
import { num, str } from '../pascal';
import { invalidate, beginHold, endHold } from '../ui';
import { TComponent } from './component';
import { TStrings, TFont, TCanvas, TPicture, Indexed, TCollection, TCollectionItem } from './classes';
import { colorValue } from './colors';
import { todayDelphi, nowDelphi } from '../datetime';

const LINKABLE = ['caption', 'enabled', 'checked', 'visible', 'imageindex', 'hint'] as const;

export class TControl extends TComponent {
  Left = 0;
  Top = 0;
  Width = 0;
  Height = 0;
  Align = 'alnone';
  Anchors: string[] = ['akleft', 'aktop'];
  ParentColor = true;
  ParentFont = true;
  ShowHint = false;
  Cursor = 0;
  TabOrder = 0;
  TabStop = false;
  AutoSize = false;
  Transparent = false;
  Alignment = 'taleftjustify';
  Layout = 'tltop';
  WordWrap = false;
  DragMode = 'dmmanual';
  HelpContext = 0;
  Font = new TFont();
  Parent: TWinControl | null = null;
  children: TControl[] = [];
  /** Size of the parent client area at design time (for anchors). */
  designParent?: { w: number; h: number };
  /** Layout result: last rendered rectangle. */
  rect = { left: 0, top: 0, width: 0, height: 0 };
  dom: HTMLElement | null = null;
  protected _visible = true;
  protected _enabled = true;
  protected _caption = '';
  protected _hint = '';
  protected _color = -2147483633; // clBtnFace
  protected _action: TBasicAction | null = null;
  /** Action-linked properties that were not overridden in DFM/code. */
  linked = new Set<string>();

  get kind() { return 'control'; }

  get Visible() { return this.linkedVal('visible', this._visible) as boolean; }
  set Visible(v: boolean) { const c = this._visible !== !!v; this._visible = !!v; this.linked.delete('visible'); if (c) invalidate(); }
  get Enabled() { return this.linkedVal('enabled', this._enabled) as boolean; }
  set Enabled(v: boolean) { const c = this._enabled !== !!v; this._enabled = !!v; this.linked.delete('enabled'); if (c) invalidate(); }
  get Caption() { return this.linkedVal('caption', this._caption) as string; }
  set Caption(v: string) { const n = str(v), c = this._caption !== n; this._caption = n; this.linked.delete('caption'); if (c) invalidate(); }
  get Text() { return this.Caption; }
  set Text(v: string) { this.Caption = v; }
  get Hint() { return this.linkedVal('hint', this._hint) as string; }
  set Hint(v: string) { this._hint = str(v); this.linked.delete('hint'); }
  get Color() { return this._color; }
  set Color(v: number) { const n = colorValue(v), c = n !== this._color; this._color = n; this.ParentColor = false; if (c) invalidate(); }

  get Action() { return this._action; }
  set Action(a: TBasicAction | null) {
    this._action = a;
    if (a) for (const p of LINKABLE) if (!(p in this.dfmLower())) this.linked.add(p);
    invalidate();
  }
  protected linkedVal(p: string, own: unknown) {
    if (this._action && this.linked.has(p)) {
      const a = this._action as any;
      switch (p) {
        case 'caption': return a.Caption;
        case 'enabled': return a.Enabled;
        case 'visible': return a.Visible;
        case 'hint': return a.Hint;
        case 'checked': return a.Checked;
        case 'imageindex': return a.ImageIndex;
      }
    }
    return own;
  }
  private _dfmLower?: Record<string, unknown>;
  dfmLower() {
    if (!this._dfmLower) {
      this._dfmLower = {};
      for (const [k, v] of Object.entries(this.dfm)) this._dfmLower[k.toLowerCase()] = v;
    }
    return this._dfmLower;
  }

  get ClientWidth() { return this.rect.width || this.Width; }
  set ClientWidth(v: number) { this.Width = num(v); invalidate(); }
  get ClientHeight() { return this.rect.height || this.Height; }
  set ClientHeight(v: number) { this.Height = num(v); invalidate(); }
  get BoundsRect() { return { left: this.Left, top: this.Top, right: this.Left + this.Width, bottom: this.Top + this.Height }; }
  get ClientRect() { return { left: 0, top: 0, right: this.ClientWidth, bottom: this.ClientHeight }; }
  get Controls() { return new Indexed((i) => this.children[num(i[0])]); }
  get ControlCount() { return this.children.length; }
  get Showing() { let c: TControl | null = this; while (c) { if (!c.Visible) return false; c = c.Parent; } return true; }
  get Focused() { return !!this.dom && document.activeElement === this.dom; }
  get Handle() { return 1; }
  get HandleAllocated() { return true; }
  get ParentForm(): TComponent | null {
    let c: TControl | null = this;
    while (c && !(c as any).isRootContainer) c = c.Parent;
    return c;
  }

  Show() { this.Visible = true; }
  Hide() { this.Visible = false; }
  SetFocus() {
    if (!this.Visible || !this.Enabled) return;
    queueMicrotask(() => this.focusDom());
  }
  focusDom() {
    const el = this.dom?.matches('input,textarea,select,button,[tabindex]') ? this.dom
      : this.dom?.querySelector<HTMLElement>('input,textarea,select,button,[tabindex]');
    // VCL never scrolls a parent on focus; a browser would scroll clipped panels to the control
    el?.focus({ preventScroll: true });
  }
  CanFocus() { return this.Visible && this.Enabled; }
  BringToFront() { if (this.Parent) { this.Parent.children = [...this.Parent.children.filter((c) => c !== this), this]; invalidate(); } }
  SendToBack() { if (this.Parent) { this.Parent.children = [this, ...this.Parent.children.filter((c) => c !== this)]; invalidate(); } }
  Repaint() { invalidate(); }
  Refresh() { invalidate(); }
  Invalidate() { invalidate(); }
  Update() { invalidate(); }
  Realign() { invalidate(); }
  DisableAlign() { /* */ }
  EnableAlign() { invalidate(); }
  SetBounds(l: number, t: number, w: number, h: number) { this.Left = num(l); this.Top = num(t); this.Width = num(w); this.Height = num(h); invalidate(); }
  ClientToScreen(p: { x: number; y: number }) {
    const r = this.dom?.getBoundingClientRect();
    return { x: (r?.left ?? 0) + num(p?.x), y: (r?.top ?? 0) + num(p?.y) };
  }
  ScreenToClient(p: { x: number; y: number }) {
    const r = this.dom?.getBoundingClientRect();
    return { x: num(p?.x) - (r?.left ?? 0), y: num(p?.y) - (r?.top ?? 0) };
  }
  Perform() { return 0; }
  GetTextLen() { return this.Text.length; }
  GetTextBuf() { return this.Text; }
  SetTextBuf(s: unknown) { this.Text = str(s); }
  Dragging() { return false; }
  BeginDrag() { /* */ }
  EndDrag() { /* */ }
  FlipChildren() { /* */ }
  ScaleBy() { /* */ }
  ContainsControl(c: unknown) { let x = c as TControl | null; while (x) { if (x === this) return true; x = x.Parent; } return false; }
  get Canvas() { return (this as any)._canvas ??= new TCanvas(); }

  /** User-initiated click: actions first, then OnClick. */
  async Click() {
    if (!this.Enabled) return;
    if (this._action && !this.hasHandler('OnClick')) {
      await (this._action as TBasicAction).execFrom(this);
      return;
    }
    await this.fire('OnClick', this);
  }

  /** Set the parent and register as a visual child. */
  setParent(p: TWinControl | null) {
    if (this.Parent) this.Parent.children = this.Parent.children.filter((c) => c !== this);
    this.Parent = p;
    if (p && !p.children.includes(this)) p.children.push(this);
  }

  override propChanged(l: string) {
    if (l === 'parent') this.setParent(this.Parent);
  }
  override pset(lname: string, v: unknown) {
    if (lname === 'parent') { this.setParent(v as TWinControl | null); invalidate(); return true; }
    if (lname === 'align' || lname === 'alignment' || lname === 'layout') v = typeof v === 'string' ? v.toLowerCase() : v;
    return super.pset(lname, v);
  }
}

/** TWinControl.Brush: its Color is the control's Color (Controls.pas). */
class TControlBrush extends TObject {
  Style = 'bssolid';
  Bitmap = null;
  constructor(private ctl: TControl) { super(); }
  get Color() { return this.ctl.Color; }
  set Color(v: number) { this.ctl.Color = v; }
}

export class TWinControl extends TControl {
  /** Controls.pas: the direct child control with that Name. */
  FindChildControl(name: unknown) {
    const n = String(name ?? '').toLowerCase();
    return this.children.find((c) => (c.Name || '').toLowerCase() === n) ?? null;
  }
  BorderWidth = 0;
  DoubleBuffered = false;
  private _brush: TControlBrush | null = null;
  get Brush() { return (this._brush ??= new TControlBrush(this)); }
  get kind() { return 'panel'; }
  ControlAtPos() { return null; }
  FindNextControl() { return null; }
  SelectNext() { return null; }
  DisableAlign() { /* */ }
  ScrollBy() { /* */ }
  InsertControl(c: unknown) { if (c instanceof TControl) c.setParent(this); }
  RemoveControl(c: unknown) { if (c instanceof TControl) c.setParent(null); }
}
export class TGraphicControl extends TControl {}
registerBuiltin('TControl', TControl);
registerBuiltin('TWinControl', TWinControl);
registerBuiltin('TGraphicControl', TGraphicControl);
registerBuiltin('TCustomControl', TWinControl);

/* ------------------------------------------------------------------ containers */

export class TPanel extends TWinControl {
  BevelInner = 'bvnone';
  BevelOuter = 'bvraised';
  BevelWidth = 1;
  BorderStyle = 'bsnone';
  FullRepaint = true;
  Locked = false;
  get kind() { return 'panel'; }
}
registerBuiltin('TPanel', TPanel);
registerBuiltin('TXFPanel', class TXFPanel extends TPanel {});
registerBuiltin('TGridPanel', class TGridPanel extends TPanel {});
registerBuiltin('TFlowPanel', class TFlowPanel extends TPanel {});

export class TGroupBox extends TWinControl { get kind() { return 'groupbox'; } }
registerBuiltin('TGroupBox', TGroupBox);
registerBuiltin('TXFGroupBox', class TXFGroupBox extends TGroupBox {});

export class TScrollBox extends TWinControl {
  BorderStyle = 'bssingle';
  get kind() { return 'scrollbox'; }
  get HorzScrollBar() { return { Position: 0, Range: 0, Visible: true }; }
  get VertScrollBar() { return { Position: 0, Range: 0, Visible: true }; }
  ScrollInView() { /* */ }
}
registerBuiltin('TScrollBox', TScrollBox);

export class TBevel extends TGraphicControl { Shape = 'bsbox'; Style = 'bslowered'; get kind() { return 'bevel'; } }
registerBuiltin('TBevel', TBevel);

export class TShape extends TGraphicControl {
  Shape = 'strectangle';
  Brush = { Color: 0xffffff, Style: 'bssolid' };
  Pen = { Color: 0, Width: 1 };
  get kind() { return 'shape'; }
}
registerBuiltin('TShape', TShape);

export class TSplitter extends TGraphicControl { override Align = 'alleft'; MinSize = 30; ResizeStyle = 'rspattern'; Beveled = false; get kind() { return 'splitter'; } }
registerBuiltin('TSplitter', TSplitter);

export class TImage extends TGraphicControl {
  Picture = new TPicture();
  Stretch = false;
  Center = false;
  Proportional = false;
  get kind() { return 'image'; }
}
registerBuiltin('TImage', TImage);
registerBuiltin('TPaintBox', class TPaintBox extends TGraphicControl { get kind() { return 'shape'; } });

/* ------------------------------------------------------------------ labels */

export class TLabel extends TGraphicControl {
  override AutoSize = true;
  FocusControl: TControl | null = null;
  ShowAccelChar = true;
  get kind() { return 'label'; }
}
registerBuiltin('TLabel', TLabel);
registerBuiltin('TXFLabel', class TXFLabel extends TLabel {});
registerBuiltin('TQRLabel', class TQRLabel extends TLabel {});
export class TStaticText extends TWinControl {
  BorderStyle = 'sbsnone';
  get kind() { return 'statictext'; }
}
registerBuiltin('TStaticText', TStaticText);

/* ------------------------------------------------------------------ edits */

export class TCustomEdit extends TWinControl {
  ReadOnly = false;
  MaxLength = 0;
  PasswordChar = '';
  CharCase = 'ecnormal';
  BorderStyle = 'bssingle';
  AutoSelect = true;
  HideSelection = true;
  SelStart = 0;
  SelLength = 0;
  Modified = false;
  NumbersOnly = false;
  protected _text = '';
  get kind() { return 'edit'; }
  get Text() { return this._text; }
  set Text(v: string) { const n = this.applyCase(str(v)), c = n !== this._text; this._text = n; if (c) invalidate(); }
  get SelText() { return ''; }
  set SelText(v: string) { this.Text = this._text + str(v); }
  protected applyCase(s: string) {
    return this.CharCase === 'ecuppercase' ? s.toLocaleUpperCase('az') : this.CharCase === 'eclowercase' ? s.toLocaleLowerCase('az') : s;
  }
  Clear() { return this.setTextFromCode(''); }
  SelectAll() { (this.dom as HTMLInputElement | null)?.select?.(); }
  ClearSelection() { /* */ }
  CopyToClipboard() { void navigator.clipboard?.writeText(this.Text); }
  CutToClipboard() { this.CopyToClipboard(); }
  PasteFromClipboard() { /* */ }
  Undo() { /* */ }

  /** Delphi fires OnChange when Text is assigned from code. */
  async setTextFromCode(v: string) {
    const nv = this.applyCase(str(v));
    if (nv === this._text) return;
    this._text = nv;
    invalidate();
    await this.fire('OnChange', this);
  }
  override pset(lname: string, v: unknown) {
    if (lname === 'text') return this.setTextFromCode(str(v)).then(() => true);
    return super.pset(lname, v);
  }
  /** Called by the UI on user input. */
  async userInput(v: string) {
    this.Modified = true;
    await this.setTextFromCode(v);
  }
}
export class TEdit extends TCustomEdit {}
registerBuiltin('TCustomEdit', TCustomEdit);
registerBuiltin('TEdit', TEdit);
registerBuiltin('TLabeledEdit', class TLabeledEdit extends TEdit { EditLabel = { Caption: '' }; });
registerBuiltin('TButtonedEdit', TEdit);
export class TMaskEdit extends TCustomEdit {
  EditMask = '';
  get EditText() { return this.Text; }
  set EditText(v: string) { this.Text = v; }
  get IsMasked() { return !!this.EditMask; }
  ValidateEdit() { /* */ }
}
registerBuiltin('TMaskEdit', TMaskEdit);

/**
 * SmartBank TSearchEdit (SBCM_ComponentsStorage/SearchEdit.pas): incremental search in
 * DataSource.DataSet on SearchField; the linked Partnership combo follows the found record,
 * the edit turns red when nothing matches.
 */
export class TSearchEdit extends TCustomEdit {
  SearchField = '';
  DataSource: any = null;
  Partnership: any = null;
  get kind() { return 'edit'; }
  private ds() { const d = this.DataSource?.DataSet; return d && this.SearchField ? d : null; }
  override async userInput(v: string) {
    this.Modified = true;
    // KeyDown: Delete/Backspace sets Tag := 1 so Change does not re-complete the text
    (this as any).Tag = v.length < this.Text.length ? 1 : 0;
    let text = v;
    const ds = this.ds();
    if ((this as any).Tag === 0 && ds && v !== '') {
      if (await ds.Locate(this.SearchField, v, ['locaseinsensitive', 'lopartialkey'])) {
        if (this.Partnership && this.Partnership.ItemIndex === -1) this.Partnership.ItemIndex = 0;
        this.Color = 0xffffff;
        text = String((await ds.FieldByName(this.SearchField)).AsString ?? v);
      } else {
        if (this.Partnership) this.Partnership.ItemIndex = -1;
        this.Color = 0x0000ff;
        (this as any).Tag = 1;
      }
    }
    await this.setTextFromCode(text);
  }
  override async fire(event: string, ...args: unknown[]): Promise<unknown> {
    if (event.toLowerCase() === 'onexit') {
      this.Color = 0xffffff;
      const ds = this.ds();
      if (this.Text !== '' && ds) {
        await this.setTextFromCode(String((await ds.FieldByName(this.SearchField)).AsString ?? ''));
        if (this.Partnership && this.Partnership.ItemIndex === -1) this.Partnership.ItemIndex = 0;
      } else if (this.Text === '' && this.Partnership && this.Partnership.ItemIndex !== -1) {
        this.Partnership.ItemIndex = -1;
      }
    }
    return super.fire(event, ...args);
  }
}
registerBuiltin('TSearchEdit', TSearchEdit);
registerBuiltin('TCMDBSearchEdit', TSearchEdit);
registerBuiltin('TFieldSearchEdit', TSearchEdit);

/** SmartBank TCurrencyEdit: numeric edit with Value property. */
export class TCurrencyEdit extends TCustomEdit {
  DecimalPlaces = 2;
  DisplayFormat = ',0.00';
  MaxValue = 0;
  MinValue = 0;
  ZeroEmpty = false;
  FormatOnEditing = false;
  get kind() { return 'currency'; }
  get Value() {
    const n = Number(this._text.replace(/\s/g, '').replace(',', '.'));
    return isNaN(n) ? 0 : n;
  }
  set Value(v: number) { this._text = formatNumber(num(v), this.DecimalPlaces); invalidate(); }
  get AsInteger() { return Math.trunc(this.Value); }
  set AsInteger(v: number) { this.Value = num(v); }
  override pset(lname: string, v: unknown) {
    if (lname === 'value' || lname === 'asinteger') {
      const s = formatNumber(num(v), lname === 'asinteger' ? 0 : this.DecimalPlaces);
      return this.setTextFromCode(s).then(() => true);
    }
    return super.pset(lname, v);
  }
}
export function formatNumber(v: number, d: number) {
  return v.toFixed(Math.max(0, d));
}
registerBuiltin('TCurrencyEdit', TCurrencyEdit);
registerBuiltin('TRxCalcEdit', TCurrencyEdit);
registerBuiltin('TSpinEdit', class TSpinEdit extends TCurrencyEdit {
  Increment = 1;
  constructor() { super(); this.DecimalPlaces = 0; }
  get kind() { return 'spin'; }
});

export class TMemo extends TCustomEdit {
  Lines: TStrings;
  ScrollBars = 'ssnone';
  WantReturns = true;
  WantTabs = false;
  constructor() {
    super();
    this.Lines = new TStrings();
    this.Lines.onChange = () => { void this.fire('OnChange', this); };
  }
  get kind() { return 'memo'; }
  override get Text() { return this.Lines.Text.replace(/\r\n$/, ''); }
  override set Text(v: string) { this.Lines.Text = str(v); }
  override async setTextFromCode(v: string) { this.Lines.Text = str(v); }
  async userInput(v: string) { this.Lines.Text = v; }
}
registerBuiltin('TMemo', TMemo);
registerBuiltin('TRichEdit', class TRichEdit extends TMemo {
  PlainText = true;
  SelAttributes = { Color: 0, Style: [], Size: 8, Name: '' };
  Paragraph = { Alignment: 'taleftjustify' };
  Print() { /* */ }
  FindText() { return -1; }
});

/* ------------------------------------------------------------------ buttons */

export class TButtonControl extends TWinControl {
  ModalResult = 0;
  Default = false;
  Cancel = false;
  get kind() { return 'button'; }
  override async Click() {
    if (!this.Enabled) return;
    await super.Click();
    if (this.ModalResult) {
      const f = this.ParentForm as any;
      if (f && 'ModalResult' in f) f.ModalResult = this.ModalResult;
    }
  }
}
export class TButton extends TButtonControl {}
registerBuiltin('TButton', TButton);
registerBuiltin('TXFButton', class TXFButton extends TButton {});
export class TBitBtn extends TButton {
  Kind = 'bkcustom';
  Glyph = null;
  NumGlyphs = 1;
  Spacing = 4;
  Margin = -1;
  get kind() { return 'button'; }
}
registerBuiltin('TBitBtn', TBitBtn);

export class TSpeedButton extends TGraphicControl {
  GroupIndex = 0;
  AllowAllUp = false;
  Flat = false;
  Glyph = null;
  NumGlyphs = 1;
  protected _down = false;
  get kind() { return 'speedbutton'; }
  get Down() { return this._down; }
  set Down(v: boolean) {
    this._down = !!v;
    if (v && this.GroupIndex && this.Parent) {
      for (const c of this.Parent.children) if (c !== this && c instanceof TSpeedButton && c.GroupIndex === this.GroupIndex) c._down = false;
    }
    invalidate();
  }
  override async Click() {
    if (!this.Enabled) return;
    if (this.GroupIndex) this.Down = this.AllowAllUp ? !this.Down : true;
    await super.Click();
  }
}
registerBuiltin('TSpeedButton', TSpeedButton);

export class TCheckBox extends TButtonControl {
  AllowGrayed = false;
  protected _checked = false;
  get kind() { return 'checkbox'; }
  get Checked() { return this.linkedVal('checked', this._checked) as boolean; }
  set Checked(v: boolean) { this._checked = !!v; this.linked.delete('checked'); invalidate(); }
  get State() { return this.Checked ? 'cbchecked' : 'cbunchecked'; }
  set State(v: string) { this.Checked = String(v).toLowerCase() === 'cbchecked'; }
  /** Delphi: assigning Checked fires OnClick when it changes. */
  override pset(lname: string, v: unknown) {
    if (lname === 'checked') {
      const nv = !!v;
      const changed = nv !== this.Checked;
      this._checked = nv;
      this.linked.delete('checked');
      invalidate();
      return changed ? this.fire('OnClick', this).then(() => true) : true;
    }
    return super.pset(lname, v);
  }
  async userToggle() {
    if (!this.Enabled) return;
    if (this._action && this.linked.has('checked')) { await (this._action as TBasicAction).execFrom(this); return; }
    this._checked = !this.Checked;
    invalidate();
    await this.fire('OnClick', this);
  }
}
registerBuiltin('TCheckBox', TCheckBox);

export class TRadioButton extends TCheckBox {
  get kind() { return 'radio'; }
  override pset(lname: string, v: unknown) {
    if (lname === 'checked' && v) this.uncheckSiblings();
    return super.pset(lname, v);
  }
  uncheckSiblings() {
    if (!this.Parent) return;
    for (const c of this.Parent.children) if (c !== this && c instanceof TRadioButton) { c._checked = false; c.linked.delete('checked'); }
  }
  override async userToggle() {
    if (!this.Enabled || this.Checked) return;
    if (this._action && this.linked.has('checked')) { this.uncheckSiblings(); await (this._action as TBasicAction).execFrom(this); return; }
    this.uncheckSiblings();
    this._checked = true;
    invalidate();
    await this.fire('OnClick', this);
  }
}
registerBuiltin('TRadioButton', TRadioButton);

/* ------------------------------------------------------------------ lists */

export class TCustomListControl extends TWinControl {
  Items: TStrings;
  Sorted = false;
  protected _itemIndex = -1;
  constructor() {
    super();
    this.Items = new TStrings();
    this.Items.onChange = () => invalidate();
  }
  get ItemIndex() { return this._itemIndex; }
  set ItemIndex(v: number) { this._itemIndex = num(v); invalidate(); }
  get Count() { return this.Items.Count; }
  Clear() { this.Items.Clear(); this._itemIndex = -1; }
  AddItem(s: unknown, o: unknown) { this.Items.AddObject(s, o); }
  DeleteSelected() { if (this._itemIndex >= 0) this.Items.Delete(this._itemIndex); }
  ClearSelection() { this._itemIndex = -1; invalidate(); }
}

export class TComboBox extends TCustomListControl {
  Style = 'csdropdown';
  DropDownCount = 8;
  DroppedDown = false;
  CharCase = 'ecnormal';
  AutoComplete = true;
  protected _text = '';
  get kind() { return 'combo'; }
  get Text() { return this._itemIndex >= 0 && this.Style === 'csdropdownlist' ? this.Items.list()[this._itemIndex] ?? '' : this._text; }
  set Text(v: string) {
    this._text = str(v);
    const i = this.Items.IndexOf(v);
    this._itemIndex = i;
    invalidate();
  }
  override set ItemIndex(v: number) { this._itemIndex = num(v); this._text = this.Items.list()[this._itemIndex] ?? ''; invalidate(); }
  override get ItemIndex() { return this._itemIndex; }
  SelectAll() { /* */ }
  async userSelect(i: number) {
    this.ItemIndex = i;
    await this.fire('OnChange', this);
    await this.fire('OnClick', this);
    await this.fire('OnSelect', this);
  }
  async userText(v: string) { this.Text = v; await this.fire('OnChange', this); }
}
registerBuiltin('TComboBox', TComboBox);
registerBuiltin('TComboBoxEx', TComboBox);
registerBuiltin('TColorBox', TComboBox);

/** SmartBank TSearchCombo — searchable combo. */
registerBuiltin('TSearchCombo', class TSearchCombo extends TComboBox {});

export class TListBox extends TCustomListControl {
  MultiSelect = false;
  Columns = 0;
  ItemHeight = 13;
  Style = 'lbstandard';
  ExtendedSelect = true;
  sel = new Set<number>();
  TopIndex = 0;
  get kind() { return 'listbox'; }
  get Selected() {
    return new Indexed((i) => (this.MultiSelect ? this.sel.has(num(i[0])) : this._itemIndex === num(i[0])),
      (i, v) => { const k = num(i[0]); if (v) this.sel.add(k); else this.sel.delete(k); if (!this.MultiSelect && v) this._itemIndex = k; invalidate(); });
  }
  get SelCount() { return this.MultiSelect ? this.sel.size : this._itemIndex >= 0 ? 1 : 0; }
  SelectAll() { this.Items.list().forEach((_, i) => this.sel.add(i)); invalidate(); }
  ItemAtPos() { return -1; }
  async userSelect(i: number, additive = false) {
    if (this.MultiSelect) { if (!additive) this.sel.clear(); if (this.sel.has(i) && additive) this.sel.delete(i); else this.sel.add(i); }
    this._itemIndex = i;
    invalidate();
    await this.fire('OnClick', this);
  }
}
registerBuiltin('TListBox', TListBox);

export class TCheckListBox extends TListBox {
  checks = new Map<number, boolean>();
  AllowGrayed = false;
  get kind() { return 'checklist'; }
  get Checked() {
    return new Indexed((i) => !!this.checks.get(num(i[0])), (i, v) => { this.checks.set(num(i[0]), !!v); invalidate(); });
  }
  get State() {
    return new Indexed((i) => (this.checks.get(num(i[0])) ? 'cbchecked' : 'cbunchecked'),
      (i, v) => { this.checks.set(num(i[0]), String(v).toLowerCase() === 'cbchecked'); invalidate(); });
  }
  get ItemEnabled() { return new Indexed(() => true, () => undefined); }
  CheckAll(state?: unknown) { this.Items.list().forEach((_, i) => this.checks.set(i, String(state ?? 'cbchecked').toLowerCase() === 'cbchecked')); invalidate(); }
  override Clear() { super.Clear(); this.checks.clear(); }
  async userCheck(i: number) {
    this.checks.set(i, !this.checks.get(i));
    this._itemIndex = i;
    invalidate();
    await this.fire('OnClickCheck', this);
  }
}
registerBuiltin('TCheckListBox', TCheckListBox);

export class TRadioGroup extends TWinControl {
  Items: TStrings;
  Columns = 1;
  protected _itemIndex = -1;
  constructor() { super(); this.Items = new TStrings(); this.Items.onChange = () => invalidate(); }
  get kind() { return 'radiogroup'; }
  get ItemIndex() { return this._itemIndex; }
  set ItemIndex(v: number) { this._itemIndex = num(v); invalidate(); }
  override pset(lname: string, v: unknown) {
    if (lname === 'itemindex') {
      const changed = num(v) !== this._itemIndex;
      this._itemIndex = num(v);
      invalidate();
      return changed ? this.fire('OnClick', this).then(() => true) : true;
    }
    return super.pset(lname, v);
  }
  async userSelect(i: number) { if (i === this._itemIndex) return; this._itemIndex = i; invalidate(); await this.fire('OnClick', this); }
  get Buttons() { return new Indexed((i) => ({ Enabled: true, Checked: this._itemIndex === num(i[0]) })); }
}
registerBuiltin('TRadioGroup', TRadioGroup);

/* ------------------------------------------------------------------ date/time */

export class TDateTimePicker extends TWinControl {
  Kind = 'dtkdate';
  DateFormat = 'dfshort';
  ShowCheckbox = false;
  Checked = true;
  MaxDate = 0;
  MinDate = 0;
  Format = '';
  protected _dt = todayDelphi();
  get kind() { return 'datetime'; }
  get Date() { return Math.floor(this._dt); }
  set Date(v: number) { this._dt = Math.floor(num(v)) + (this._dt % 1); invalidate(); }
  get Time() { return this._dt % 1; }
  set Time(v: number) { this._dt = Math.floor(this._dt) + (num(v) % 1); invalidate(); }
  get DateTime() { return this._dt; }
  set DateTime(v: number) { this._dt = num(v); invalidate(); }
  async userSet(v: number) { this._dt = v; invalidate(); await this.fire('OnChange', this); }
}
registerBuiltin('TDateTimePicker', TDateTimePicker);
registerBuiltin('TDateEdit', TDateTimePicker);
registerBuiltin('TMonthCalendar', TDateTimePicker);

/* ------------------------------------------------------------------ page controls */

export class TTabSheet extends TWinControl {
  PageControl: TPageControl | null = null;
  TabVisible = true;
  ImageIndex = -1;
  Highlighted = false;
  get kind() { return 'tabsheet'; }
  get PageIndex() { return this.PageControl ? this.PageControl.pages().indexOf(this) : -1; }
  get TabIndex() { return this.PageIndex; }
}
registerBuiltin('TTabSheet', TTabSheet);

export class TPageControl extends TWinControl {
  Style = 'tstabs';
  TabPosition = 'tptop';
  MultiLine = false;
  HotTrack = false;
  protected _active: TTabSheet | null = null;
  get kind() { return 'pagecontrol'; }
  pages() { return this.children.filter((c): c is TTabSheet => c instanceof TTabSheet); }
  get ActivePage() { return this._active ?? this.pages().find((p) => p.TabVisible) ?? null; }
  set ActivePage(p: TTabSheet | null) { this._active = p; invalidate(); }
  get ActivePageIndex() { const a = this.ActivePage; return a ? this.pages().indexOf(a) : -1; }
  set ActivePageIndex(i: number) { this._active = this.pages()[num(i)] ?? null; invalidate(); }
  get TabIndex() { return this.ActivePageIndex; }
  set TabIndex(i: number) { this.ActivePageIndex = i; }
  get PageCount() { return this.pages().length; }
  get Pages() { return new Indexed((i) => this.pages()[num(i[0])]); }
  SelectNextPage(forward = true) {
    const p = this.pages().filter((x) => x.TabVisible);
    const i = p.indexOf(this.ActivePage!);
    this._active = p[(i + (forward ? 1 : -1) + p.length) % p.length] ?? null;
    invalidate();
  }
  FindNextPage() { return null; }
  async userSelect(p: TTabSheet) {
    let allow = true;
    const ref = new ValueRef(true);
    if (this.hasHandler('OnChanging')) { await this.fire('OnChanging', this, ref); allow = !!ref.value; }
    if (!allow) return;
    this._active = p;
    invalidate();
    await p.fire('OnShow', p);
    await this.fire('OnChange', this);
  }
}
registerBuiltin('TPageControl', TPageControl);

export class TTabControl extends TWinControl {
  Tabs = new TStrings();
  protected _tabIndex = 0;
  get kind() { return 'tabcontrol'; }
  get TabIndex() { return this._tabIndex; }
  set TabIndex(v: number) { this._tabIndex = num(v); invalidate(); }
  async userSelect(i: number) { this._tabIndex = i; invalidate(); await this.fire('OnChange', this); }
}
registerBuiltin('TTabControl', TTabControl);
registerBuiltin('TTabSet', TTabControl);

/* ------------------------------------------------------------------ bars */

export class TToolBar extends TWinControl {
  override Align = 'altop';
  ButtonWidth = 23;
  ButtonHeight = 22;
  ShowCaptions = false;
  List = false;
  Flat = true;
  Wrapable = true;
  Images: unknown = null;
  EdgeBorders: string[] = [];
  get kind() { return 'toolbar'; }
  get ButtonCount() { return this.children.filter((c) => c instanceof TToolButton).length; }
  get Buttons() { return new Indexed((i) => this.children.filter((c) => c instanceof TToolButton)[num(i[0])]); }
}
registerBuiltin('TToolBar', TToolBar);

export class TToolButton extends TGraphicControl {
  Style = 'tbsbutton';
  Grouped = false;
  AllowAllUp = false;
  Marked = false;
  Indeterminate = false;
  Wrap = false;
  DropdownMenu: unknown = null;
  MenuItem: unknown = null;
  protected _down = false;
  protected _imageIndex = -1;
  get kind() { return 'toolbutton'; }
  get Down() { return this.Style === 'tbscheck' && this._action && this.linked.has('checked') ? !!(this._action as any).Checked : this._down; }
  set Down(v: boolean) { this._down = !!v; this.linked.delete('checked'); invalidate(); }
  get ImageIndex() { return this.linkedVal('imageindex', this._imageIndex) as number; }
  set ImageIndex(v: number) { this._imageIndex = num(v); this.linked.delete('imageindex'); invalidate(); }
  get Index() { return this.Parent ? this.Parent.children.indexOf(this) : -1; }
  CheckMenuDropdown() { return false; }
  override async Click() {
    if (!this.Enabled) return;
    if (this.Style === 'tbscheck' && !this._action) { this._down = !this._down; invalidate(); }
    if (this.Style === 'tbsdropdown' && !this._action && !this.hasHandler('OnClick')) return;
    await super.Click();
  }
}
registerBuiltin('TToolButton', TToolButton);

export class TControlBar extends TWinControl { override Align = 'altop'; AutoDrag = true; RowSize = 26; get kind() { return 'controlbar'; } }
registerBuiltin('TControlBar', TControlBar);
registerBuiltin('TCoolBar', class TCoolBar extends TControlBar {});
registerBuiltin('TPageScroller', class TPageScroller extends TWinControl { get kind() { return 'panel'; } });

export class TStatusPanel extends TCollectionItem { Text = ''; Width = 50; Alignment = 'taleftjustify'; Style = 'pstext'; Bevel = 'pblowered'; }
export class TStatusBar extends TWinControl {
  override Align = 'albottom';
  SimplePanel = false;
  SimpleText = '';
  SizeGrip = true;
  Panels = new TCollection(() => new TStatusPanel());
  get kind() { return 'statusbar'; }
}
registerBuiltin('TStatusBar', TStatusBar);

export class TProgressBar extends TWinControl {
  Min = 0; Max = 100; Step = 10; Smooth = false; Orientation = 'pbhorizontal';
  protected _pos = 0;
  get kind() { return 'progress'; }
  get Position() { return this._pos; }
  set Position(v: number) { this._pos = num(v); invalidate(); }
  StepIt() { this.Position = Math.min(this.Max, this._pos + this.Step); }
  StepBy(n: number) { this.Position = Math.min(this.Max, this._pos + num(n)); }
}
registerBuiltin('TProgressBar', TProgressBar);
export class TGauge extends TGraphicControl {
  MinValue = 0; MaxValue = 100; ShowText = true; Kind = 'gkhorizontalbar';
  protected _p = 0;
  get kind() { return 'progress'; }
  get Progress() { return this._p; }
  set Progress(v: number) { this._p = num(v); invalidate(); }
  get Position() { return this._p; }
  get Max() { return this.MaxValue; }
  get Min() { return this.MinValue; }
  AddProgress(n: number) { this.Progress = this._p + num(n); }
  get PercentDone() { return this.MaxValue ? Math.round((this._p / this.MaxValue) * 100) : 0; }
}
registerBuiltin('TGauge', TGauge);
registerBuiltin('TCGauge', TGauge);

export class TUpDown extends TWinControl {
  Min = 0; Max = 100; Increment = 1; Associate: unknown = null;
  protected _p = 0;
  get kind() { return 'updown'; }
  get Position() { return this._p; }
  set Position(v: number) { this._p = num(v); invalidate(); }
}
registerBuiltin('TUpDown', TUpDown);
registerBuiltin('TTrackBar', class TTrackBar extends TUpDown {});

export class THeaderSection extends TCollectionItem { Text = ''; Width = 50; Alignment = 'taleftjustify'; MinWidth = 0; MaxWidth = 10000; }
export class THeaderControl extends TWinControl {
  Sections = new TCollection(() => new THeaderSection());
  get kind() { return 'header'; }
}
registerBuiltin('THeaderControl', THeaderControl);

/* ------------------------------------------------------------------ tree / list views */

export class TTreeNode extends TObject {
  Text = '';
  Data: unknown = null;
  ImageIndex = -1;
  SelectedIndex = -1;
  StateIndex = -1;
  Expanded = false;
  Selected = false;
  nodes: TTreeNode[] = [];
  Parent: TTreeNode | null = null;
  Owner: TTreeNodes;
  constructor(owner: TTreeNodes) { super(); this.Owner = owner; }
  get Count() { return this.nodes.length; }
  get Item() { return new Indexed((i) => this.nodes[num(i[0])]); }
  pindex(idx: unknown[]) { return this.nodes[num(idx[0])]; }
  get HasChildren() { return this.nodes.length > 0; }
  set HasChildren(_v: boolean) { /* */ }
  get Level() { let l = 0; let p = this.Parent; while (p) { l++; p = p.Parent; } return l; }
  get Index() { return (this.Parent ? this.Parent.nodes : this.Owner.roots).indexOf(this); }
  get AbsoluteIndex() { return this.Owner.flat().indexOf(this); }
  getFirstChild() { return this.nodes[0] ?? null; }
  GetFirstChild() { return this.nodes[0] ?? null; }
  GetLastChild() { return this.nodes[this.nodes.length - 1] ?? null; }
  GetNext() { const f = this.Owner.flat(); return f[f.indexOf(this) + 1] ?? null; }
  GetPrev() { const f = this.Owner.flat(); return f[f.indexOf(this) - 1] ?? null; }
  getNextSibling() { const s = this.Parent ? this.Parent.nodes : this.Owner.roots; return s[s.indexOf(this) + 1] ?? null; }
  GetNextSibling() { return this.getNextSibling(); }
  GetPrevSibling() { const s = this.Parent ? this.Parent.nodes : this.Owner.roots; return s[s.indexOf(this) - 1] ?? null; }
  Expand() { this.Expanded = true; invalidate(); }
  Collapse() { this.Expanded = false; invalidate(); }
  Delete() { const s = this.Parent ? this.Parent.nodes : this.Owner.roots; s.splice(s.indexOf(this), 1); invalidate(); }
  DeleteChildren() { this.nodes = []; invalidate(); }
  MakeVisible() { /* */ }
  EditText() { /* */ }
}

export class TTreeNodes extends TObject {
  roots: TTreeNode[] = [];
  constructor(public view: TTreeView) { super(); }
  flat(): TTreeNode[] {
    const out: TTreeNode[] = [];
    const walk = (ns: TTreeNode[]) => { for (const n of ns) { out.push(n); walk(n.nodes); } };
    walk(this.roots);
    return out;
  }
  pindex(idx: unknown[]) { return this.flat()[num(idx[0])]; }
  get Count() { return this.flat().length; }
  get Item() { return new Indexed((i) => this.flat()[num(i[0])]); }
  private mk(parent: TTreeNode | null, text: unknown, data: unknown = null) {
    const n = new TTreeNode(this);
    n.Text = str(text); n.Data = data; n.Parent = parent;
    (parent ? parent.nodes : this.roots).push(n);
    invalidate();
    return n;
  }
  Add(sibling: TTreeNode | null, text: unknown) { return this.mk(sibling?.Parent ?? null, text); }
  AddObject(sibling: TTreeNode | null, text: unknown, data: unknown) { return this.mk(sibling?.Parent ?? null, text, data); }
  AddFirst(sibling: TTreeNode | null, text: unknown) { return this.mk(sibling?.Parent ?? null, text); }
  AddChild(parent: TTreeNode | null, text: unknown) { return this.mk(parent, text); }
  AddChildObject(parent: TTreeNode | null, text: unknown, data: unknown) { return this.mk(parent, text, data); }
  Insert(sibling: TTreeNode | null, text: unknown) { return this.mk(sibling?.Parent ?? null, text); }
  Clear() { this.roots = []; invalidate(); }
  Delete(n: TTreeNode) { n?.Delete(); }
  BeginUpdate() { /* */ }
  EndUpdate() { invalidate(); }
  GetFirstNode() { return this.roots[0] ?? null; }
  /** Nodes stored in the DFM (Items.Data / Items.NodeData, decoded by the generator). */
  loadDfm(tree: { text: string; imageIndex: number; selectedIndex: number; stateIndex: number; children: any[] }[]) {
    const add = (parent: TTreeNode | null, list: typeof tree) => {
      for (const t of list) {
        const n = this.mk(parent, t.text);
        n.ImageIndex = t.imageIndex; n.SelectedIndex = t.selectedIndex; n.StateIndex = t.stateIndex;
        add(n, t.children ?? []);
      }
    };
    add(null, tree);
  }
}

export class TTreeView extends TWinControl {
  Items: TTreeNodes;
  ReadOnly = true;
  HideSelection = false;
  RowSelect = false;
  ShowLines = true;
  ShowRoot = true;
  ShowButtons = true;
  Images: unknown = null;
  protected _selected: TTreeNode | null = null;
  constructor() { super(); this.Items = new TTreeNodes(this); }
  get kind() { return 'treeview'; }
  get Selected() { return this._selected; }
  set Selected(n: TTreeNode | null) { this._selected = n; invalidate(); }
  get TopItem() { return this.Items.roots[0] ?? null; }
  FullExpand() { for (const n of this.Items.flat()) n.Expanded = true; invalidate(); }
  FullCollapse() { for (const n of this.Items.flat()) n.Expanded = false; invalidate(); }
  GetNodeAt() { return this._selected; }
  AlphaSort() { /* */ }
  /** Win32 tree view behaviour: getting the focus with nothing selected selects the first node
   *  (TVN_SELCHANGED → OnChange). */
  async focusSelectFirst() {
    const n = this.Items.roots[0];
    if (this._selected || !n) return;
    this._selected = n;
    invalidate();
    await this.fire('OnChange', this, n);
  }
  async userSelect(n: TTreeNode) {
    const ref = new ValueRef(true);
    if (this.hasHandler('OnChanging')) await this.fire('OnChanging', this, n, ref);
    if (!ref.value) return;
    this._selected = n;
    invalidate();
    await this.fire('OnChange', this, n);
    await this.fire('OnClick', this);
  }
}
registerBuiltin('TTreeView', TTreeView);

export class TListColumn extends TCollectionItem { Caption = ''; Width = 50; Alignment = 'taleftjustify'; AutoSize = false; }
export class TListItem extends TObject {
  Caption = '';
  SubItems = new TStrings();
  Data: unknown = null;
  ImageIndex = -1;
  Checked = false;
  Selected = false;
  constructor(public Owner: TListItems) { super(); }
  get Index() { return this.Owner.arr.indexOf(this); }
  Delete() { this.Owner.arr.splice(this.Index, 1); invalidate(); }
  MakeVisible() { /* */ }
}
export class TListItems extends TObject {
  arr: TListItem[] = [];
  pindex(idx: unknown[]) { return this.arr[num(idx[0])]; }
  piter() { return [...this.arr]; }
  get Count() { return this.arr.length; }
  get Item() { return new Indexed((i) => this.arr[num(i[0])]); }
  Add() { const it = new TListItem(this); this.arr.push(it); invalidate(); return it; }
  Insert(i: number) { const it = new TListItem(this); this.arr.splice(num(i), 0, it); invalidate(); return it; }
  Delete(i: number) { this.arr.splice(num(i), 1); invalidate(); }
  Clear() { this.arr = []; invalidate(); }
  BeginUpdate() { /* */ }
  EndUpdate() { invalidate(); }
}
export class TListView extends TWinControl {
  Items = new TListItems();
  Columns = new TCollection(() => new TListColumn());
  ViewStyle = 'vsicon';
  RowSelect = false;
  MultiSelect = false;
  Checkboxes = false;
  ReadOnly = false;
  GridLines = false;
  get kind() { return 'listview'; }
  get Selected() { return this.Items.arr.find((x) => x.Selected) ?? null; }
  set Selected(it: TListItem | null) { this.Items.arr.forEach((x) => { x.Selected = x === it; }); invalidate(); }
  get ItemIndex() { return this.Items.arr.findIndex((x) => x.Selected); }
  set ItemIndex(i: number) { this.Items.arr.forEach((x, k) => { x.Selected = k === num(i); }); invalidate(); }
  get SelCount() { return this.Items.arr.filter((x) => x.Selected).length; }
  Clear() { this.Items.Clear(); }
  async userSelect(i: number) {
    this.Items.arr.forEach((x, k) => { x.Selected = k === i; });
    invalidate();
    await this.fire('OnClick', this);
    await this.fire('OnSelectItem', this, this.Items.arr[i], true);
  }
}
registerBuiltin('TListView', TListView);

/* ------------------------------------------------------------------ string grid */

export class TStringGrid extends TWinControl {
  ColCount = 5;
  RowCount = 5;
  FixedCols = 1;
  FixedRows = 1;
  DefaultColWidth = 64;
  DefaultRowHeight = 24;
  Options: string[] = [];
  Row = 1;
  Col = 1;
  cells = new Map<string, string>();
  colW = new Map<number, number>();
  get kind() { return 'stringgrid'; }
  get Cells() {
    return new Indexed((i) => this.cells.get(`${num(i[0])},${num(i[1])}`) ?? '',
      (i, v) => { this.cells.set(`${num(i[0])},${num(i[1])}`, str(v)); invalidate(); });
  }
  get ColWidths() { return new Indexed((i) => this.colW.get(num(i[0])) ?? this.DefaultColWidth, (i, v) => { this.colW.set(num(i[0]), num(v)); invalidate(); }); }
  get RowHeights() { return new Indexed(() => this.DefaultRowHeight, () => undefined); }
  get Rows() { return new Indexed((i) => { const s = new TStrings(); for (let c = 0; c < this.ColCount; c++) s.Add(this.cells.get(`${c},${num(i[0])}`) ?? ''); return s; }); }
  get Cols() { return new Indexed((i) => { const s = new TStrings(); for (let r = 0; r < this.RowCount; r++) s.Add(this.cells.get(`${num(i[0])},${r}`) ?? ''); return s; }); }
  get Selection() { return { Left: this.Col, Top: this.Row, Right: this.Col, Bottom: this.Row }; }
  get TopRow() { return this.FixedRows; }
  get VisibleRowCount() { return this.RowCount; }
  async userSelect(c: number, r: number) {
    const ref = new ValueRef(true);
    await this.fire('OnSelectCell', this, c, r, ref);
    if (!ref.value) return;
    this.Col = c; this.Row = r; invalidate();
    await this.fire('OnClick', this);
  }
}
registerBuiltin('TStringGrid', TStringGrid);
registerBuiltin('TDrawGrid', TStringGrid);

/* ------------------------------------------------------------------ non-visual helpers */

export class TTimer extends TComponent {
  Interval = 1000;
  private _enabled = true;
  private handle: number | null = null;
  get Enabled() { return this._enabled; }
  set Enabled(v: boolean) { this._enabled = !!v; this.restart(); }
  override pset(lname: string, v: unknown) {
    const r = super.pset(lname, v);
    if (lname === 'interval') this.restart();
    return r;
  }
  start() { this.restart(); }
  restart() {
    if (this.handle) { clearInterval(this.handle); this.handle = null; }
    if (this._enabled && this.Interval > 0 && this.started && this.hasHandler('OnTimer')) {
      // like any event handler, a timer tick repaints once, with the state it leaves behind
      this.handle = window.setInterval(() => {
        if (this.busy) return; // Delphi never re-enters OnTimer while the previous tick still runs
        this.busy = true;
        beginHold();
        void this.fire('OnTimer', this).finally(() => { endHold(); this.busy = false; });
      }, Math.max(200, this.Interval));
    }
  }
  started = false;
  private busy = false;
  protected override destroy() { if (this.handle) clearInterval(this.handle); }
}
registerBuiltin('TTimer', TTimer);

export class TImageList extends TComponent {
  Width = 16; Height = 16; Count = 0;
  GetBitmap() { return false; }
  GetIcon() { return false; }
  Draw() { /* */ }
  Add() { return this.Count++; }
  Clear() { this.Count = 0; }
}
registerBuiltin('TImageList', TImageList);

export class TCommonDialog extends TComponent {
  FileName = '';
  Filter = '';
  FilterIndex = 1;
  InitialDir = '';
  DefaultExt = '';
  Title = '';
  Options: string[] = [];
  Files = new TStrings();
  async Execute() {
    // There is no native file system access; saving produces a browser download where code writes files.
    if (this.__className === 'TSaveDialog' || this.__className === 'TSavePictureDialog') {
      if (!this.FileName) this.FileName = 'export' + (this.DefaultExt ? '.' + this.DefaultExt.replace(/^\./, '') : '.xls');
      return true;
    }
    return false;
  }
}
for (const n of ['TOpenDialog', 'TSaveDialog', 'TOpenPictureDialog', 'TSavePictureDialog', 'TPrintDialog',
  'TPrinterSetupDialog', 'TFontDialog', 'TColorDialog', 'TFindDialog', 'TReplaceDialog', 'TPageSetupDialog']) {
  const C = class extends TCommonDialog {};
  (C as any).pascalName = n;
  registerBuiltin(n, C);
}

/* Inert components: exist in forms but have no browser behaviour. */
for (const n of ['TNLSLocalizer', 'TEvanescence', 'THintBoxHelper', 'TApplicationEvents', 'TXPManifest',
  'TOleContainer', 'TExcelApplication', 'TExcelWorkbook', 'TExcelWorksheet', 'TWordApplication', 'TWordDocument',
  'TIdSSLIOHandlerSocketOpenSSL', 'THTTPRIO', 'TXMLDocument', 'TQuickRep', 'TQRBand', 'TQRDBText',
  'TQRExpr', 'TQRShape', 'TQRSubDetail', 'TQRImage', 'TQRDBImage', 'TQRSysData', 'TQRMemo', 'TQRRichText',
  'TQRPDFFilter', 'TQRExcelFilter', 'TQRTextFilter', 'TQRCSVFilter', 'TQRHTMLFilter', 'TQRCompositeReport',
  'TQRGroup', 'TQRChildBand', 'TQRStringsBand', 'TQRPreview', 'TOracleEvent', 'TOracleLogon', 'TOracleNavigator',
  'TOracleScript', 'TOracleDirectPathLoader', 'TOracleQueue', 'TPrintDialogEx', 'TFormInterval', 'TJvFormStorage',
  'TFormStorage', 'TPropStorageEh', 'TIniPropStorageManEh', 'TdxSkinController', 'TCMExcelExport']) {
  const isReport = /^TQR|^TQuickRep/.test(n);
  const C = class extends TComponent {
    // QuickReport layouts are not rendered in this phase; a report's DataSet is an inert stand-in
    // so the code that fills and previews it runs through without errors.
    private _ds: unknown = null;
    get DataSet() { return this._ds ?? (isReport ? GAP : null); }
    set DataSet(v: unknown) { this._ds = v; }
    // report forms (TQuickRep descendants with a DFM) stream their bands/labels like a form does
    async Create(owner?: unknown) {
      if (owner instanceof TComponent) owner.insertComponent(this);
      const cls = (this as any).__cls;
      if (!isReport || !cls || (this as any).__streamed) return;
      (this as any).__streamed = true;
      const f = await import('./forms');
      const layout = f.fullLayout(cls);
      if (layout) await f.streamRoot(this, layout);
      await this.fire('OnCreate', this);
    }
    Preview() { if (isReport) { logger.info(`${this.Name || n}.Preview — reports are not rendered in this phase`); toast('Hesabatlar veb versiyanın bu mərhələsində göstərilmir', 'info'); } }
    PreviewModal() { this.Preview(); }
    Print() { this.Preview(); }
    PrinterSetup() { /* */ }
    Prepare() { /* */ }
    ExportToFilter() { /* */ }
    Connect() { /* */ }
    Disconnect() { /* */ }
  };
  (C as any).pascalName = n;
  registerBuiltin(n, C);
}

export { TCanvas, NOTFOUND, Ref, nowDelphi };

/* forward import (actions.ts) — declared here for typing the action link */
export interface TBasicAction extends TComponent {
  execFrom(sender: TComponent): Promise<boolean>;
}

/*
 * SmartBank plugin menus (Packages/VCL/PluginIni.pas, PluginToolBar.pas, PluginPopupMenu.pas).
 * Their buttons/items come from per-installation INI files next to SmartBank.exe
 * (CMToolBarTop.ini, CMPopupMenu.ini …) that are not part of the repository, so they load empty
 * — the state of a workstation without those files.
 */
export class TMenuIni extends TComponent {
  IniLocation = '';
  IniSection = 'Menu';
  Active = false;
  private _loc: unknown = null;
  get Location() { if (!this._loc) { const f = new (getIniFile())(); f.Create(this.IniLocation); this._loc = f; } return this._loc; }
}
registerBuiltin('TMenuIni', TMenuIni);
let iniCtor: any = null;
function getIniFile() { return (iniCtor ??= getBuiltin('TIniFile')); }

export class TPluginToolBar extends TToolBar {
  MenuIni: TMenuIni | null = null;
  Active = false;
  LoadPlugins() { /* no plugin INI in the web version */ }
  UnLoadPlugins() { /* */ }
}
registerBuiltin('TPluginToolBar', TPluginToolBar);

/*
 * Indy TIdHTTP. Request/Response carry their usual properties; the transfer itself is not done from
 * the browser (bank-internal and cross-origin hosts): Get/Post raise the connection error Indy
 * raises when the host cannot be reached, which the forms already handle in try/except.
 */
class TIdHttpMessage extends TObject {
  CustomHeaders = new TStrings();
  ContentType = ''; Accept = ''; AcceptCharSet = ''; UserAgent = ''; BasicAuthentication = false;
  Username = ''; Password = ''; ContentLength = 0; CharSet = ''; ResponseCode = 0; ResponseText = '';
  RawHeaders = new TStrings();
}
export class TIdHTTP extends TComponent {
  Request = new TIdHttpMessage();
  Response = new TIdHttpMessage();
  ResponseCode = 0;
  ResponseText = '';
  IOHandler: unknown = null;
  HandleRedirects = false;
  ConnectTimeout = 0;
  ReadTimeout = 0;
  ProxyParams = new TIdHttpMessage();
  private fail(verb: string, url: unknown): never {
    logger.warn(`TIdHTTP.${verb} ${String(url ?? '')} — HTTP requests are made by the server API, not from the browser`);
    throw new PasException('EIdSocketError', `Socket Error # 10061\nConnection refused (${String(url ?? '')})`, ['exception']);
  }
  Get(url: unknown) { return this.fail('Get', url); }
  Post(url: unknown) { return this.fail('Post', url); }
  Put(url: unknown) { return this.fail('Put', url); }
  Delete(url: unknown) { return this.fail('Delete', url); }
  Head(url: unknown) { return this.fail('Head', url); }
  Disconnect() { /* */ }
  get Connected() { return false; }
}
registerBuiltin('TIdHTTP', TIdHTTP);
