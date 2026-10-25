/* Data-aware controls (DBCtrls.pas, DBGrids.pas, DBLookup, EhLib, SmartBank components). */
import { registerBuiltin } from '../env';
import { num, str } from '../pascal';
import { invalidate } from '../ui';
import { TWinControl, TCustomEdit, TCheckBox, TComboBox, TRadioGroup, TControl } from './controls';
import { TCollection, TCollectionItem, TFont, TCanvas, TStrings, Indexed } from './classes';
import { colorValue } from './colors';
import type { TDataSource } from '../data/datasource';
import type { TDataSet, Row } from '../data/dataset';
import type { TField } from '../data/fields';
import { runGuarded } from './component';

/** Mixin-ish helpers for DataSource/DataField controls. */
export class TDBControlBase {
  static field(ds: TDataSource | null, name: string): TField | null {
    const set = ds?.DataSet;
    if (!set || !name) return null;
    return set.FindField(name);
  }
}

function linkedDataSet(ds: unknown): TDataSet | null {
  return (ds as TDataSource | null)?.DataSet ?? null;
}

/* ------------------------------------------------------------------ edits */

export class TDBEdit extends TCustomEdit {
  DataSource: TDataSource | null = null;
  DataField = '';
  get kind() { return 'dbedit'; }
  get Field() { return TDBControlBase.field(this.DataSource, this.DataField); }
  get Text() {
    const f = this.Field;
    if (!f) return this._text;
    const ds = f.DataSet!;
    if (!ds.Active) return '';
    return this.dom && document.activeElement === this.dom ? f.Text : f.DisplayText;
  }
  set Text(v: string) { this._text = str(v); }
  override async setTextFromCode(v: string) {
    const f = this.Field;
    if (f && this.DataSource) await this.DataSource.editField(f, f.fromString(str(v)));
    else await super.setTextFromCode(v);
  }
  override async userInput(v: string) {
    const f = this.Field;
    if (f && this.DataSource) {
      if (this.ReadOnly || f.ReadOnly) return;
      try {
        await this.DataSource.editField(f, f.fieldType === 'string' ? v : f.fromString(v));
      } catch {
        // partial numeric/date input while typing: keep the text until a valid value is entered
      }
      await this.fire('OnChange', this);
      return;
    }
    await super.userInput(v);
  }
  get EditText() { return this.Text; }
}
registerBuiltin('TDBEdit', TDBEdit);
registerBuiltin('TDBEditEh', TDBEdit);
registerBuiltin('TDBNumberEditEh', TDBEdit);

export class TDBText extends TControl {
  DataSource: TDataSource | null = null;
  DataField = '';
  get kind() { return 'dbtext'; }
  get Field() { return TDBControlBase.field(this.DataSource, this.DataField); }
  get Caption() { const f = this.Field; return f && f.DataSet?.Active ? f.DisplayText : ''; }
  set Caption(_v: string) { /* read-only */ }
}
registerBuiltin('TDBText', TDBText);

export class TDBMemo extends TDBEdit {
  ScrollBars = 'ssnone';
  WordWrap = true;
  get kind() { return 'dbmemo'; }
  get Lines() { const s = new TStrings(); s.Text = this.Text; return s; }
}
registerBuiltin('TDBMemo', TDBMemo);
registerBuiltin('TDBRichEdit', TDBMemo);
registerBuiltin('TDBMemoEh', TDBMemo);

export class TDBCheckBox extends TCheckBox {
  DataSource: TDataSource | null = null;
  DataField = '';
  ValueChecked = 'True';
  ValueUnchecked = 'False';
  get kind() { return 'checkbox'; }
  get Field() { return TDBControlBase.field(this.DataSource, this.DataField); }
  get Checked() {
    const f = this.Field;
    if (!f) return this._checked;
    const v = f.Value;
    if (typeof v === 'boolean') return v;
    const s = str(v).toLowerCase();
    return this.ValueChecked.toLowerCase().split(';').includes(s) || (s === '1' && this.ValueChecked.toLowerCase() === 'true');
  }
  set Checked(v: boolean) { this._checked = !!v; }
  override async userToggle() {
    const f = this.Field;
    if (!f || !this.DataSource) return super.userToggle();
    const next = !this.Checked;
    const val = f.fieldType === 'boolean' ? next : f.fieldType === 'integer' || f.fieldType === 'float'
      ? (next ? (Number(this.ValueChecked) || 1) : (Number(this.ValueUnchecked) || 0))
      : (next ? this.ValueChecked.split(';')[0] : this.ValueUnchecked.split(';')[0]);
    await this.DataSource.editField(f, val);
    await this.fire('OnClick', this);
  }
}
registerBuiltin('TDBCheckBox', TDBCheckBox);
registerBuiltin('TDBCheckBoxEh', TDBCheckBox);

export class TDBComboBox extends TComboBox {
  DataSource: TDataSource | null = null;
  DataField = '';
  get kind() { return 'combo'; }
  get Field() { return TDBControlBase.field(this.DataSource, this.DataField); }
  get Text() { const f = this.Field; return f ? f.AsString : this._text; }
  set Text(v: string) { this._text = str(v); }
  override get ItemIndex() { const f = this.Field; return f ? this.Items.IndexOf(f.AsString) : this._itemIndex; }
  override set ItemIndex(v: number) { this._itemIndex = num(v); }
  override async userSelect(i: number) {
    const f = this.Field;
    if (f && this.DataSource) { await this.DataSource.editField(f, this.Items.list()[i]); await this.fire('OnChange', this); return; }
    await super.userSelect(i);
  }
  override async userText(v: string) {
    const f = this.Field;
    if (f && this.DataSource) { await this.DataSource.editField(f, v); await this.fire('OnChange', this); return; }
    await super.userText(v);
  }
}
registerBuiltin('TDBComboBox', TDBComboBox);
registerBuiltin('TDBComboBoxEh', TDBComboBox);

export class TDBRadioGroup extends TRadioGroup {
  DataSource: TDataSource | null = null;
  DataField = '';
  Values = new TStrings();
  get Field() { return TDBControlBase.field(this.DataSource, this.DataField); }
  get Value() { return this.Field?.AsString ?? ''; }
  override get ItemIndex() {
    const f = this.Field;
    if (!f) return this._itemIndex;
    const vals = this.Values.Count ? this.Values.list() : this.Items.list();
    return vals.indexOf(f.AsString);
  }
  override set ItemIndex(v: number) { this._itemIndex = num(v); }
  override async userSelect(i: number) {
    const f = this.Field;
    if (f && this.DataSource) {
      const vals = this.Values.Count ? this.Values.list() : this.Items.list();
      await this.DataSource.editField(f, vals[i]);
      await this.fire('OnClick', this);
      await this.fire('OnChange', this);
      return;
    }
    await super.userSelect(i);
  }
}
registerBuiltin('TDBRadioGroup', TDBRadioGroup);

/* ------------------------------------------------------------------ lookup combos */

export class TDBLookupComboBox extends TWinControl {
  DataSource: TDataSource | null = null;
  DataField = '';
  ListSource: TDataSource | null = null;
  KeyField = '';
  ListField = '';
  ListFieldIndex = 0;
  DropDownRows = 7;
  DropDownWidth = 0;
  NullValueKey = 0;
  ReadOnly = false;
  protected _key: unknown = null;
  get kind() { return 'lookup'; }
  get Field() { return TDBControlBase.field(this.DataSource, this.DataField); }
  get ListDataSet() { return linkedDataSet(this.ListSource); }
  get KeyValue(): unknown { const f = this.Field; return f ? f.Value : this._key; }
  set KeyValue(v: unknown) { this._key = v; invalidate(); }
  listFields() { return this.ListField.split(';').map((s) => s.trim()).filter(Boolean); }
  /** [key, display columns] for the dropdown. */
  options(): { key: unknown; cols: string[]; idx: number }[] {
    const ds = this.ListDataSet;
    if (!ds || !ds.Active) return [];
    const kf = this.KeyField.toUpperCase();
    const lfs = this.listFields().map((x) => x.toUpperCase());
    const fields = lfs.map((n) => ds.FindField(n));
    const out: { key: unknown; cols: string[]; idx: number }[] = [];
    for (let i = 0; i < ds.view.length; i++) {
      const v = ds.rowValues(i)!;
      out.push({ key: v[kf], cols: lfs.map((n, k) => fields[k] ? fields[k]!.toDisplay(v[n]) : str(v[n])), idx: i });
    }
    return out;
  }
  get Text() {
    const k = this.KeyValue;
    if (k === null || k === undefined) return '';
    const o = this.options().find((x) => String(x.key) === String(k));
    return o ? o.cols[this.ListFieldIndex] ?? o.cols[0] ?? '' : '';
  }
  set Text(_v: string) { /* */ }
  get ListVisible() { return false; }
  DropDown() { /* */ }
  CloseUp() { /* */ }
  async userSelect(key: unknown) {
    const f = this.Field;
    if (f && this.DataSource) await this.DataSource.editField(f, key);
    else this._key = key;
    // the list dataset follows the selection (Delphi lookup combos position the list source)
    const ds = this.ListDataSet;
    if (ds) { const i = this.options().findIndex((o) => String(o.key) === String(key)); if (i >= 0) await ds.gotoIndex(i); }
    invalidate();
    await this.fire('OnClick', this);
    await this.fire('OnCloseUp', this);
    await this.fire('OnChange', this);
  }
  override pset(lname: string, v: unknown) {
    if (lname === 'keyvalue') {
      const f = this.Field;
      if (f && this.DataSource) return this.DataSource.editField(f, v).then(() => true);
      this._key = v; invalidate(); return true;
    }
    return super.pset(lname, v);
  }
}
registerBuiltin('TDBLookupComboBox', TDBLookupComboBox);
registerBuiltin('TDBLookupComboboxEh', TDBLookupComboBox);
registerBuiltin('TDBLookupListBox', TDBLookupComboBox);
registerBuiltin('TCMHintDBLookupComboBox', TDBLookupComboBox);

/** SmartBank TDBViewComboBox: lists ListSource rows (ListFields) and scrolls the dataset on selection. */
export class TDBViewComboBox extends TComboBox {
  ListSource: TDataSource | null = null;
  ListFields = '';
  FieldInterval = 5;
  DropDownOnEnter = false;
  FirstAfterOpen = false;
  get kind() { return 'viewcombo'; }
  get ListDataSet() { return linkedDataSet(this.ListSource); }
  rowsText(): string[] {
    const ds = this.ListDataSet;
    if (!ds || !ds.Active || !this.ListFields) return this.Items.list();
    const names = this.ListFields.split(',').map((s) => s.trim().toUpperCase());
    const fields = names.map((n) => ds.FindField(n));
    const gap = ' '.repeat(Math.max(1, this.FieldInterval));
    return ds.view.map((_, i) => {
      const v = ds.rowValues(i)!;
      return names.map((n, k) => (fields[k] ? fields[k]!.toStr(v[n]) : str(v[n]))).join(gap);
    });
  }
  override get ItemIndex() { return this._itemIndex; }
  override set ItemIndex(v: number) {
    // like the original: assigning ItemIndex does not scroll the list dataset (only Change does)
    this._itemIndex = num(v);
    invalidate();
  }
  override get Text() { const t = this.rowsText(); const i = this.ItemIndex; return i >= 0 ? t[i] ?? '' : ''; }
  override set Text(_v: string) { /* */ }
  get Count() { return this.rowsText().length; }
  RefreshList() { invalidate(); }
  override async userSelect(i: number) {
    this._itemIndex = i;
    const ds = this.ListDataSet;
    if (ds && ds.Active) await ds.gotoIndex(i);
    invalidate();
    await this.fire('OnChange', this);
  }
}
registerBuiltin('TDBViewComboBox', TDBViewComboBox);

/* ------------------------------------------------------------------ navigator */

export class TDBNavigator extends TWinControl {
  DataSource: TDataSource | null = null;
  VisibleButtons: string[] = ['nbfirst', 'nbprior', 'nbnext', 'nblast', 'nbinsert', 'nbdelete', 'nbedit', 'nbpost', 'nbcancel', 'nbrefresh'];
  ConfirmDelete = true;
  Flat = false;
  get kind() { return 'navigator'; }
  async BtnClick(btn: unknown) {
    const ds = linkedDataSet(this.DataSource);
    if (!ds) return;
    const b = String(btn).toLowerCase();
    await runGuarded(async () => {
      if (this.hasHandler('BeforeAction')) await this.fireRaw('BeforeAction', this, b);
      switch (b) {
        case 'nbfirst': await ds.First(); break;
        case 'nbprior': await ds.Prior(); break;
        case 'nbnext': await ds.Next(); break;
        case 'nblast': await ds.Last(); break;
        case 'nbinsert': await ds.Insert(); break;
        case 'nbdelete': {
          if (this.ConfirmDelete) {
            const { messageDlg } = await import('../dialogs');
            if ((await messageDlg('Qeydi silmək?', 3, ['mbOK', 'mbCancel'])) !== 1) return;
          }
          await ds.Delete(); break;
        }
        case 'nbedit': await ds.Edit(); break;
        case 'nbpost': await ds.Post(); break;
        case 'nbcancel': await ds.Cancel(); break;
        case 'nbrefresh': await ds.Refresh(); break;
      }
      await this.fire('OnClick', this, b);
    }, this.Name);
  }
}
registerBuiltin('TDBNavigator', TDBNavigator);

/* ------------------------------------------------------------------ grids */

export class TColumnTitle {
  Caption = '';
  Alignment = 'taleftjustify';
  Font = new TFont();
  Color: number = -2147483633;
}
export class TColumn extends TCollectionItem {
  FieldName = '';
  Title = new TColumnTitle();
  Width = 64;
  Visible = true;
  ReadOnly = false;
  Alignment = '';
  Color: number = -2147483643;
  Font = new TFont();
  PickList = new TStrings();
  ButtonStyle = 'cbsauto';
  DropDownRows = 7;
  Expanded = false;
  Footer = { Value: '', ValueType: 'fvtnon', FieldName: '' };
  grid: TDBGrid | null = null;
  explicitWidth = false;
  get Field(): TField | null { return this.grid ? TDBControlBase.field(this.grid.DataSource, this.FieldName) : null; }
  get DisplayName() { return this.Title.Caption || this.Field?.DisplayLabel || this.FieldName; }
  RestoreDefaults() { /* */ }
}

/** DBGrids TBookmarkList. */
export class TBookmarkList extends Indexed {
  set = new Set<Row>();
  constructor(private grid: TDBGrid) {
    super((i) => [...this.set][num(i[0])]);
  }
  get Count() { return this.set.size; }
  get Items() { return new Indexed((i) => [...this.set][num(i[0])]); }
  get CurrentRowSelected() { const r = this.grid.curRow(); return !!r && this.set.has(r); }
  set CurrentRowSelected(v: boolean) { const r = this.grid.curRow(); if (!r) return; if (v) this.set.add(r); else this.set.delete(r); invalidate(); }
  Clear() { this.set.clear(); invalidate(); }
  Delete() { this.set.clear(); invalidate(); }
  Refresh() { return false; }
  IndexOf(b: unknown) { return [...this.set].indexOf(b as Row); }
  Find(b: unknown) { return this.set.has(b as Row); }
  override pset(lname: string, v: unknown) {
    if (lname === 'currentrowselected') { this.CurrentRowSelected = !!v; return true; }
    return super.pset(lname, v);
  }
}

export interface CellStyle { bg?: number; fg?: number; bold?: boolean; italic?: boolean; strike?: boolean }

export class TDBGrid extends TWinControl {
  DataSource: TDataSource | null = null;
  Columns: TCollection;
  Options: string[] = ['dgediting', 'dgtitles', 'dgindicator', 'dgcolumnresize', 'dgcollines', 'dgrowlines', 'dgtabs', 'dgconfirmdelete', 'dgcancelonexit'];
  ReadOnly = false;
  DefaultDrawing = true;
  FixedColor = -2147483633;
  TitleFont = new TFont();
  EditorMode = false;
  SelectedRows: TBookmarkList;
  protected _selectedIndex = 0;
  /** Styles produced by OnDrawColumnCell, keyed by row object then column index. */
  styles = new WeakMap<Row, Map<number, CellStyle>>();
  styleVersion = 0;
  private styling = false;
  private styleDirty = true;
  _canvas = new TCanvas();

  constructor() {
    super();
    this.Columns = new TCollection(() => { const c = new TColumn(); c.grid = this; return c; });
    this.SelectedRows = new TBookmarkList(this);
  }
  get kind() { return 'dbgrid'; }
  get DataSet() { return linkedDataSet(this.DataSource); }
  curRow(): Row | null {
    const ds = this.DataSet;
    if (!ds || ds.currentIndex < 0) return null;
    return ds.rows[ds.view[ds.currentIndex]] ?? null;
  }
  override get Canvas() { return this._canvas; }
  get SelectedIndex() { return this._selectedIndex; }
  set SelectedIndex(v: number) { this._selectedIndex = num(v); invalidate(); }
  get SelectedField() { return this.visibleColumns()[this._selectedIndex]?.Field ?? null; }
  set SelectedField(f: TField | null) {
    const i = this.visibleColumns().findIndex((c) => c.Field === f);
    if (i >= 0) this._selectedIndex = i;
  }
  get FieldCount() { return this.visibleColumns().length; }
  get Fields() { return new Indexed((i) => this.visibleColumns()[num(i[0])]?.Field ?? null); }
  get Col() { return this._selectedIndex + (this.Options.includes('dgindicator') ? 1 : 0); }
  get Row() { return (this.DataSet?.currentIndex ?? 0) + 1; }
  get VisibleRowCount() { return Math.max(1, Math.floor((this.rect.height || this.Height) / 22) - 1); }
  get TopRow() { return 1; }

  /** Columns to display: persistent Columns, else dataset fields. */
  visibleColumns(): TColumn[] {
    const cols = (this.Columns.all() as TColumn[]);
    if (cols.length) return cols.filter((c) => c.Visible && (!c.Field || c.Field.Visible || true));
    const ds = this.DataSet;
    if (!ds) return [];
    return ds.fieldList().filter((f) => f.Visible).map((f) => {
      const c = new TColumn();
      c.grid = this;
      c.FieldName = f.FieldName;
      c.Width = f.DisplayWidth ? Math.min(400, f.DisplayWidth * 7 + 8) : defaultWidth(f);
      return c;
    });
  }

  DefaultDrawColumnCell() { /* drawing is done by the browser */ }
  DefaultDrawDataCell() { /* */ }
  DefaultHandler() { /* */ }
  ShowEditor() { /* */ }
  HideEditor() { /* */ }
  SetFocus() { super.SetFocus(); }
  async Scroll(n: unknown) { await this.DataSet?.MoveBy(num(n)); }

  markStylesDirty() { this.styleDirty = true; }
  /** Evaluate OnDrawColumnCell for visible rows to capture colours/fonts the Delphi code sets. */
  async computeStyles(maxRows = 250) {
    if (this.styling || !this.styleDirty || !this.hasHandler('OnDrawColumnCell')) return;
    const ds = this.DataSet;
    if (!ds || !ds.Active) return;
    this.styling = true;
    this.styleDirty = false;
    try {
      const cols = this.visibleColumns();
      const n = Math.min(ds.view.length, maxRows);
      const handler = this.handlerRoutine(this.events.get('ondrawcolumncell')!);
      if (!handler) return;
      for (let i = 0; i < n; i++) {
        const row = ds.rows[ds.view[i]];
        const map = new Map<number, CellStyle>();
        for (let c = 0; c < cols.length; c++) {
          const cv = this._canvas;
          cv.Brush.Color = -2147483643;
          cv.Font = new TFont();
          (ds as any).paintRow = row.v;
          try {
            await handler(this, { left: 0, top: 0, right: cols[c].Width, bottom: 20 }, c, cols[c], []);
          } catch { /* painting errors are ignored */ }
          (ds as any).paintRow = null;
          const st: CellStyle = {};
          if (cv.Brush.Color !== -2147483643) st.bg = colorValue(cv.Brush.Color);
          if (cv.Font.Color !== -2147483640) st.fg = colorValue(cv.Font.Color);
          const fs = (cv.Font.Style ?? []).map((x: string) => String(x).toLowerCase());
          if (fs.includes('fsbold')) st.bold = true;
          if (fs.includes('fsitalic')) st.italic = true;
          if (fs.includes('fsstrikeout')) st.strike = true;
          if (Object.keys(st).length) map.set(c, st);
        }
        this.styles.set(row, map);
      }
      this.styleVersion++;
      invalidate();
    } finally {
      this.styling = false;
    }
  }

  /* UI entry points */
  async userClickCell(rowIdx: number, colIdx: number, e?: { ctrl?: boolean; shift?: boolean }) {
    const ds = this.DataSet;
    if (!ds) return;
    await runGuarded(async () => {
      if (rowIdx !== ds.currentIndex) await ds.gotoIndex(rowIdx);
      this._selectedIndex = colIdx;
      if (this.Options.includes('dgmultiselect')) {
        const r = this.curRow();
        if (r) {
          if (e?.ctrl) { if (this.SelectedRows.set.has(r)) this.SelectedRows.set.delete(r); else this.SelectedRows.set.add(r); }
          else if (!e?.shift) { this.SelectedRows.set.clear(); }
        }
      }
      invalidate();
      await this.fire('OnCellClick', this, this.visibleColumns()[colIdx] ?? null);
    }, this.Name + '.Click');
  }
  async userDblClick() { await this.fire('OnDblClick', this); }
  async userTitleClick(colIdx: number) { await this.fire('OnTitleClick', this, this.visibleColumns()[colIdx] ?? null); }
}
function defaultWidth(f: TField) {
  switch (f.fieldType) {
    case 'integer': return 70;
    case 'float': return 110;
    case 'date': return 90;
    case 'datetime': return 130;
    case 'boolean': return 60;
    default: return Math.min(260, Math.max(70, (f.Size || 20) * 6));
  }
}
registerBuiltin('TDBGrid', TDBGrid);
registerBuiltin('TCustomDBGrid', TDBGrid);
export class TDBGridEh extends TDBGrid {
  FooterRowCount = 0;
  SumList = { Active: false };
  OptionsEh: string[] = [];
  AutoFitColWidths = false;
  FrozenCols = 0;
  get kind() { return 'dbgrid'; }
}
registerBuiltin('TDBGridEh', TDBGridEh);
registerBuiltin('TXDBGrid', TDBGrid);
registerBuiltin('TDBCtrlGrid', TDBGrid);

export class TDBImage extends TControl {
  DataSource: TDataSource | null = null;
  DataField = '';
  Stretch = false;
  get kind() { return 'image'; }
  get Picture() { return { Graphic: null, LoadFromFile: () => undefined, SaveToFile: () => undefined, Assign: () => undefined }; }
  LoadPicture() { /* */ }
}
registerBuiltin('TDBImage', TDBImage);

export class TDBDateTimeEditEh extends TWinControl {
  DataSource: TDataSource | null = null;
  DataField = '';
  Kind = 'dtkdateeh';
  protected _v: unknown = null;
  get kind() { return 'dbdate'; }
  get Field() { return TDBControlBase.field(this.DataSource, this.DataField); }
  get Value() { const f = this.Field; return f ? f.Value : this._v; }
  set Value(v: unknown) { this._v = v; invalidate(); }
  async userSet(v: number | null) {
    const f = this.Field;
    if (f && this.DataSource) await this.DataSource.editField(f, v);
    else this._v = v;
    invalidate();
    await this.fire('OnChange', this);
  }
}
registerBuiltin('TDBDateTimeEditEh', TDBDateTimeEditEh);
registerBuiltin('TDateTimeEditEh', TDBDateTimeEditEh);

export { TControl, TStrings };
