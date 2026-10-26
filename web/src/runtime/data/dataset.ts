/* DB.pas TDataSet emulation (navigation, editing, events, fields, filters, bookmarks). */
import { PasException, ValueRef, Ref } from '../core';
import { registerBuiltin } from '../env';
import { num, str, eq } from '../pascal';
import { invalidate } from '../ui';
import { TComponent, runGuarded } from '../vcl/component';
import { Indexed, TStrings } from '../vcl/classes';
import { TField, FieldType, fieldClassByType, TFieldDef } from './fields';
import { getBuiltin } from '../env';
import { toDelphi } from '../datetime';
import type { TDataSource } from './datasource';
import type { ColumnDef } from '../../api/types';
import { compileFilter } from './filter';

export interface Row { v: Record<string, unknown>; rowid?: string | null; isNew?: boolean }

type State = 'dsinactive' | 'dsbrowse' | 'dsedit' | 'dsinsert' | 'dscalcfields' | 'dsfilter' | 'dssetkey';

function dbError(msg: string) { return new PasException('EDatabaseError', msg, ['exception']); }

export class TDataSet extends TComponent {
  rows: Row[] = [];
  view: number[] = [];
  cur = -1;
  protected _state: State = 'dsinactive';
  protected buf: Record<string, unknown> | null = null;
  protected oldBuf: Record<string, unknown> | null = null;
  protected insertAt = -1;
  protected _bof = true;
  protected _eof = true;
  protected fields: TField[] = [];
  protected persistentFields = false;
  controlsDisabled = 0;
  protected pendingNotify = false;
  dataSources = new Set<TDataSource>();
  details = new Set<TDataSet>();
  ReadOnly = false;
  AutoCalcFields = true;
  CachedUpdates = false;
  protected _filter = '';
  protected _filtered = false;
  FilterOptions: string[] = [];
  ObjectView = false;
  /** Row buffer used while computing calculated fields. */
  protected calcRow: Record<string, unknown> | null = null;
  FieldDefs: TFieldDef[] = [];
  protected _modified = false;

  get State() { return this._state; }
  get Active() { return this._state !== 'dsinactive'; }
  set Active(v: boolean) { if (v) void this.Open(); else void this.Close(); }
  override pset(lname: string, v: unknown) {
    if (lname === 'active') return (v ? this.Open() : this.Close()).then(() => true);
    if (lname === 'filtered') { this._filtered = !!v; return this.refilter().then(() => true); }
    if (lname === 'filter') { this._filter = str(v); return (this._filtered ? this.refilter() : Promise.resolve()).then(() => true); }
    if (lname === 'recno') return this.setRecNo(num(v)).then(() => true);
    if (lname === 'bookmark') return this.GotoBookmark(v).then(() => true);
    return super.pset(lname, v);
  }
  get Filter() { return this._filter; }
  set Filter(v: string) { this._filter = str(v); }
  get Filtered() { return this._filtered; }
  set Filtered(v: boolean) { this._filtered = !!v; }

  /* ---------------------------------------------------------------- fields */

  fieldList() { return this.fields; }
  /** Called while streaming the DFM: persistent TField children. */
  addPersistentField(f: TField) {
    f.DataSet = this;
    this.fields.push(f);
    this.persistentFields = true;
  }
  /** Build dynamic fields from result columns when the DFM declares none. */
  protected buildFields(cols: ColumnDef[]) {
    if (this.persistentFields) return;
    this.fields = cols.map((c) => {
      const t: FieldType = c.type === 'integer' ? 'integer' : c.type === 'float' ? 'float' : c.type === 'date' ? 'datetime'
        : c.type === 'boolean' ? 'boolean' : c.type === 'blob' ? 'blob' : c.type === 'clob' ? 'memo' : 'string';
      const ctor = getBuiltin(fieldClassByType.get(t) ?? 'TStringField')!;
      const f = new ctor() as TField;
      f.FieldName = c.name;
      f.Name = this.Name + c.name;
      f.Size = c.size ?? (t === 'string' ? 100 : 0);
      f.DataSet = this;
      return f;
    });
  }
  FieldByName(name: unknown) {
    const f = this.FindField(name) ?? this.missingField(str(name));
    if (!f) throw dbError(`${this.Name}: Field '${str(name)}' not found`);
    return f;
  }
  /** Hook for the mock backend (columns of `select *`). */
  protected missingField(_name: string): TField | null { return null; }
  /** Add a dynamic field with values for every row (mock mode). */
  protected addSyntheticField(name: string, t: FieldType, values: unknown[]) {
    const ctor = getBuiltin(fieldClassByType.get(t) ?? 'TStringField')!;
    const f = new ctor() as TField;
    f.FieldName = name.toUpperCase();
    f.Name = this.Name + f.FieldName;
    f.DataSet = this;
    this.fields.push(f);
    this.rows.forEach((r, i) => { r.v[f.key] = values[i] ?? null; });
    return f;
  }
  FindField(name: unknown) {
    const l = str(name).toUpperCase();
    return this.fields.find((f) => f.FieldName.toUpperCase() === l) ?? null;
  }
  get Fields() { return new Indexed((i) => this.fields[num(i[0])] ?? null); }
  get FieldList() { return this.Fields; }
  get FieldCount() { return this.fields.length; }
  get FieldValues() {
    return new Indexed((i) => this.FieldByName(i[0]).Value, (i, v) => { void this.FieldByName(i[0]).setValue(v); });
  }
  GetFieldNames(sl: unknown) { if (sl instanceof TStrings) for (const f of this.fields) sl.Add(f.FieldName); }
  GetFieldList(list: unknown, names: unknown) {
    const out = str(names).split(';').map((n) => this.FieldByName(n.trim()));
    if (list && typeof (list as any).Add === 'function') for (const f of out) (list as any).Add(f);
  }
  ClearFields() { if (this.buf) for (const f of this.fields) this.buf[f.key] = null; invalidate(); }

  /* ---------------------------------------------------------------- record access */

  protected curRow(): Row | null {
    if (this.cur < 0 || this.cur >= this.view.length) return null;
    return this.rows[this.view[this.cur]];
  }
  /** Row being painted by a grid (OnDrawColumnCell reads fields of that row). */
  paintRow: Record<string, unknown> | null = null;
  getValue(f: TField): unknown {
    if (this.paintRow) return this.paintRow[f.key] ?? null;
    if (this.calcRow) return this.calcRow[f.key] ?? null;
    if (this.buf) return this.buf[f.key] ?? null;
    return this.curRow()?.v[f.key] ?? null;
  }
  getOldValue(f: TField): unknown {
    if (this.oldBuf) return this.oldBuf[f.key] ?? null;
    return this.curRow()?.v[f.key] ?? null;
  }
  valueAt(rowIdx: number, key: string): unknown { return this.rows[this.view[rowIdx]]?.v[key.toUpperCase()] ?? null; }

  async setValue(f: TField, v: unknown) {
    if (this._state === 'dscalcfields' && this.calcRow) { this.calcRow[f.key] = v; return; }
    if (this._state === 'dsfilter') return;
    if (this._state !== 'dsedit' && this._state !== 'dsinsert') {
      if (this._state === 'dsbrowse' && this.autoEditFor()) await this.Edit();
      else if (this._state === 'dsbrowse' && this.browseWrite(f, v)) { await this.notifyDataChange(f); return; }
      else throw dbError(`${this.Name}: Dataset not in edit or insert mode`);
    }
    if (f.hasHandler('OnValidate')) await f.fireRaw('OnValidate', f);
    this.buf![f.key] = v;
    this._modified = true;
    if (f.hasHandler('OnChange')) await f.fire('OnChange', f);
    if (this.AutoCalcFields) await this.calcCurrent();
    await this.notifyDataChange(f);
  }
  /** Data-aware controls edit through the DataSource; AutoEdit puts the dataset into dsEdit. */
  protected autoEditFor() { return false; }
  /** Field assignment in dsBrowse: TDataSet raises SNotEditing; descendants may accept it. */
  protected browseWrite(_f: TField, _v: unknown): boolean { return false; }

  /* ---------------------------------------------------------------- state & navigation */

  get Bof() { return this._bof; }
  get Eof() { return this._eof; }
  get IsEmpty() { return this.view.length === 0 && this._state !== 'dsinsert'; }
  get RecordCount() { return this.view.length; }
  get RecNo() { return this._state === 'dsinsert' ? -1 : this.cur + 1; }
  set RecNo(v: number) { void this.setRecNo(v); }
  get Modified() { return this._modified; }
  get CanModify() { return !this.ReadOnly; }
  get ControlsDisabled() { return this.controlsDisabled > 0; }
  get IsSequenced() { return true; }
  get DefaultFields() { return !this.persistentFields; }

  protected async setRecNo(n: number) { await this.moveTo(Math.max(0, Math.min(this.view.length - 1, n - 1))); }

  protected async moveTo(i: number, eofIfPast = false) {
    if (!this.Active) throw dbError(`${this.Name}: Cannot perform this operation on a closed dataset`);
    await this.checkBrowseMode();
    if (this.view.length === 0) { this._bof = this._eof = true; this.cur = -1; return; }
    const target = Math.max(0, Math.min(this.view.length - 1, i));
    await this.fireRaw('BeforeScroll', this);
    const moved = target !== this.cur;
    this.cur = target;
    this._bof = i <= 0 && target === 0;
    this._eof = eofIfPast && i >= this.view.length;
    if (i < 0) this._bof = true;
    if (moved || eofIfPast || i <= 0) await this.afterScroll();
  }
  protected async afterScroll() {
    await this.notifyDataChange(null);
    await this.fire('AfterScroll', this);
    await this.refreshDetails();
  }
  async First() { await this.moveTo(0); this._bof = true; this._eof = this.view.length === 0; }
  async Last() { await this.moveTo(this.view.length - 1); this._eof = true; this._bof = this.view.length === 0; }
  async Next() {
    if (this.view.length === 0) { this._eof = true; return; }
    if (this.cur >= this.view.length - 1) { await this.checkBrowseMode(); this._eof = true; this._bof = false; return; }
    await this.moveTo(this.cur + 1);
    this._bof = false; this._eof = false;
  }
  async Prior() {
    if (this.view.length === 0) { this._bof = true; return; }
    if (this.cur <= 0) { await this.checkBrowseMode(); this._bof = true; this._eof = false; return; }
    await this.moveTo(this.cur - 1);
    this._bof = false; this._eof = false;
  }
  async MoveBy(n: number) {
    const target = this.cur + num(n);
    if (target >= this.view.length) { await this.Last(); this._eof = true; return this.view.length - 1 - this.cur; }
    if (target < 0) { await this.First(); this._bof = true; return -this.cur; }
    await this.moveTo(target);
    return num(n);
  }

  /* ---------------------------------------------------------------- open / close */

  async Open() {
    if (this.Active) return;
    await this.fireRaw('BeforeOpen', this);
    await this.doOpen();
    this._state = 'dsbrowse';
    await this.applyCalcAndLookups();
    await this.refilter(false);
    this.cur = this.view.length ? 0 : -1;
    this._bof = true;
    this._eof = this.view.length === 0;
    await this.fire('AfterOpen', this);
    await this.afterScroll();
  }
  /** Subclasses fetch rows here. */
  protected async doOpen() { /* abstract */ }

  async Close() {
    if (!this.Active) return;
    await this.fireRaw('BeforeClose', this);
    if (this._state === 'dsedit' || this._state === 'dsinsert') this.cancelBuffers();
    this._state = 'dsinactive';
    this.rows = [];
    this.view = [];
    this.cur = -1;
    this._bof = this._eof = true;
    if (!this.persistentFields) this.fields = [];
    await this.fire('AfterClose', this);
    for (const d of this.details) await d.Close();
    await this.notifyDataChange(null);
  }
  async CloseAll() { await this.Close(); }

  async Refresh() {
    if (!this.Active) return;
    await this.checkBrowseMode();
    await this.fireRaw('BeforeRefresh', this);
    const keepRow = this.curRow();
    const keyField = this.fields[0]?.key;
    const keepKey = keepRow ? (keepRow.rowid ?? (keyField ? keepRow.v[keyField] : null)) : null;
    const keepIdx = this.cur;
    await this.doOpen();
    await this.applyCalcAndLookups();
    await this.refilter(false);
    let idx = -1;
    if (keepKey !== null && keepKey !== undefined) {
      idx = this.view.findIndex((i) => (this.rows[i].rowid ?? (keyField ? this.rows[i].v[keyField] : null)) === keepKey);
    }
    this.cur = idx >= 0 ? idx : Math.min(keepIdx, this.view.length - 1);
    if (this.cur < 0 && this.view.length) this.cur = 0;
    this._bof = this.cur <= 0;
    this._eof = this.view.length === 0;
    await this.fire('AfterRefresh', this);
    await this.afterScroll();
  }
  async RefreshRecord() { await this.notifyDataChange(null); }
  async Resync() { await this.notifyDataChange(null); }
  async UpdateCursorPos() { /* */ }
  async CursorPosChanged() { /* */ }
  async CheckBrowseMode() { await this.checkBrowseMode(); }
  protected async checkBrowseMode() {
    if (this._state === 'dsedit' || this._state === 'dsinsert') {
      if (this._modified) await this.Post(); else await this.Cancel();
    }
  }
  CheckActive() { if (!this.Active) throw dbError(`${this.Name}: Cannot perform this operation on a closed dataset`); }

  /** Load result rows (API values) into the record store. */
  loadRows(cols: ColumnDef[], data: unknown[][]) {
    this.buildFields(cols);
    const dateCols = new Set(cols.filter((c) => c.type === 'date').map((c) => c.name.toUpperCase()));
    const fieldTypes = new Map(this.fields.map((f) => [f.key, f.fieldType]));
    const rowidIdx = cols.findIndex((c) => c.name.toUpperCase() === 'ROWID');
    this.rows = data.map((r) => {
      const v: Record<string, unknown> = {};
      cols.forEach((c, i) => {
        const k = c.name.toUpperCase();
        let x = r[i];
        const ft = fieldTypes.get(k);
        if (x !== null && x !== undefined && (dateCols.has(k) || ft === 'date' || ft === 'datetime' || ft === 'time') && typeof x === 'string') {
          const d = new Date(x);
          x = isNaN(d.getTime()) ? x : toDelphi(d);
        } else if (ft === 'string' && x !== null && x !== undefined && typeof x !== 'string') x = str(x);
        else if ((ft === 'float' || ft === 'integer') && typeof x === 'string' && x !== '' && !isNaN(Number(x))) x = Number(x);
        v[k] = x;
      });
      return { v, rowid: rowidIdx >= 0 ? (r[rowidIdx] as string) : null };
    });
    this.FieldDefs = cols.map((c) => new TFieldDef(c.name, c.type, c.size ?? 0));
  }

  /* ---------------------------------------------------------------- calc & lookup fields */

  protected async applyCalcAndLookups() {
    const calc = this.fields.some((f) => f.FieldKind === 'fkcalculated') && this.hasHandler('OnCalcFields');
    const lookups = this.fields.filter((f) => f.FieldKind === 'fklookup');
    if (!calc && !lookups.length) return;
    for (const lf of lookups) {
      const ld = lf.LookupDataSet;
      if (ld && !ld.Active) await runGuarded(() => ld.Open(), `${ld.Name}.Open`);
    }
    for (const row of this.rows) await this.calcRowValues(row.v, calc, lookups);
  }
  protected async calcCurrent() {
    const target = this.buf ?? this.curRow()?.v;
    if (!target) return;
    const calc = this.fields.some((f) => f.FieldKind === 'fkcalculated') && this.hasHandler('OnCalcFields');
    const lookups = this.fields.filter((f) => f.FieldKind === 'fklookup');
    if (calc || lookups.length) await this.calcRowValues(target, calc, lookups);
  }
  private async calcRowValues(v: Record<string, unknown>, calc: boolean, lookups: TField[]) {
    for (const lf of lookups) {
      const ld = lf.LookupDataSet;
      if (!ld) continue;
      const keys = lf.KeyFields.split(';').map((k) => k.trim().toUpperCase());
      const lkeys = lf.LookupKeyFields.split(';').map((k) => k.trim().toUpperCase());
      const res = ld.lookupRaw(lkeys, keys.map((k) => v[k]), lf.LookupResultField.toUpperCase());
      v[lf.key] = res;
    }
    if (calc) {
      const saved = this._state;
      this._state = 'dscalcfields';
      this.calcRow = v;
      try { await this.fireRaw('OnCalcFields', this); } catch { /* calc errors are ignored like grid painting */ }
      finally { this.calcRow = null; this._state = saved; }
    }
  }

  /* ---------------------------------------------------------------- filters */

  protected async refilter(notify = true) {
    const n = this.rows.length;
    let view = Array.from({ length: n }, (_, i) => i);
    if (this._filtered) {
      if (this._filter.trim()) {
        const pred = compileFilter(this._filter, this.FilterOptions);
        view = view.filter((i) => pred((k) => this.rows[i].v[k.toUpperCase()]));
      }
      if (this.hasHandler('OnFilterRecord')) {
        const out: number[] = [];
        const savedState = this._state;
        for (const i of view) {
          this._state = 'dsfilter';
          this.calcRow = this.rows[i].v;
          const acc = new ValueRef(true);
          try { await this.fireRaw('OnFilterRecord', this, acc); } catch { /* */ }
          this.calcRow = null;
          this._state = savedState;
          if (acc.value) out.push(i);
        }
        view = out;
      }
    }
    this.view = view;
    if (notify && this.Active) {
      this.cur = view.length ? 0 : -1;
      this._bof = true;
      this._eof = view.length === 0;
      await this.afterScroll();
    }
  }

  /* ---------------------------------------------------------------- search */

  private matchRow(v: Record<string, unknown>, keys: string[], vals: unknown[], opts: string[]) {
    const ci = opts.includes('locaseinsensitive') || opts.includes('srignorecase');
    const partial = opts.includes('lopartialkey') || opts.includes('srpartialmatch');
    return keys.every((k, i) => {
      const a = v[k];
      const b = vals[i];
      if ((a === null || a === undefined) && (b === null || b === undefined || b === '')) return true;
      if (typeof b === 'string' || typeof a === 'string') {
        let x = str(a), y = str(b);
        if (ci) { x = x.toLowerCase(); y = y.toLowerCase(); }
        return partial ? x.startsWith(y) : x === y;
      }
      return eq(a, b);
    });
  }
  lookupRaw(keys: string[], vals: unknown[], result: string): unknown {
    const r = this.rows.find((row) => this.matchRow(row.v, keys, vals, []));
    if (!r) return null;
    const rf = result.split(';').map((x) => x.trim().toUpperCase());
    return rf.length === 1 ? r.v[rf[0]] ?? null : rf.map((k) => r.v[k] ?? null);
  }
  private keyArgs(keyFields: unknown, values: unknown) {
    const keys = str(keyFields).split(';').map((k) => k.trim().toUpperCase()).filter(Boolean);
    const vals = keys.length > 1 && Array.isArray(values) ? values : [values];
    return { keys, vals };
  }
  async Locate(keyFields: unknown, values: unknown, options: unknown) {
    await this.checkBrowseMode();
    const { keys, vals } = this.keyArgs(keyFields, values);
    const opts = (Array.isArray(options) ? options : options ? [options] : []).map((o) => String(o).toLowerCase());
    const i = this.view.findIndex((r) => this.matchRow(this.rows[r].v, keys, vals, opts));
    if (i < 0) return false;
    await this.moveTo(i);
    this._bof = i === 0; this._eof = false;
    return true;
  }
  Lookup(keyFields: unknown, values: unknown, resultFields: unknown) {
    const { keys, vals } = this.keyArgs(keyFields, values);
    return this.lookupRaw(keys, vals, str(resultFields));
  }
  /** DOA TOracleDataSet.SearchRecord(Fields, Values, Options). */
  async SearchRecord(fields: unknown, values: unknown, options: unknown) {
    const { keys, vals } = this.keyArgs(fields, values);
    const opts = (Array.isArray(options) ? options : options ? [options] : []).map((o) => String(o).toLowerCase());
    const backward = opts.includes('srbackward');
    let start = opts.includes('srfrombeginning') ? (backward ? this.view.length - 1 : 0)
      : opts.includes('srfromend') ? this.view.length - 1 : this.cur + (backward ? -1 : 1);
    if (opts.includes('srfromcurrent')) start = this.cur;
    for (let i = start; backward ? i >= 0 : i < this.view.length; i += backward ? -1 : 1) {
      if (this.matchRow(this.rows[this.view[i]].v, keys, vals, opts)) { await this.moveTo(i); return true; }
    }
    return false;
  }
  FindFirst() { return this.First().then(() => !this.IsEmpty); }
  FindNext() { return this.Next().then(() => !this._eof); }
  FindLast() { return this.Last().then(() => !this.IsEmpty); }
  FindPrior() { return this.Prior().then(() => !this._bof); }
  FindKey(vals: unknown) { const f = this.fields[0]; return f ? this.Locate(f.FieldName, Array.isArray(vals) ? vals[0] : vals, []) : false; }

  /* ---------------------------------------------------------------- bookmarks */

  get Bookmark(): unknown { return this.curRow(); }
  set Bookmark(b: unknown) { void this.GotoBookmark(b); }
  GetBookmark() { return this.curRow(); }
  async GotoBookmark(b: unknown) {
    const i = this.view.findIndex((r) => this.rows[r] === b);
    if (i >= 0) await this.moveTo(i);
  }
  FreeBookmark() { /* */ }
  BookmarkValid(b: unknown) { return this.rows.includes(b as Row); }
  CompareBookmarks(a: unknown, b: unknown) { return Math.sign(this.rows.indexOf(a as Row) - this.rows.indexOf(b as Row)); }

  /* ---------------------------------------------------------------- editing */

  protected cancelBuffers() { this.buf = null; this.oldBuf = null; this.insertAt = -1; this._modified = false; }

  async Edit() {
    if (this._state === 'dsedit' || this._state === 'dsinsert') return;
    this.CheckActive();
    if (this.IsEmpty) { await this.Insert(); return; }
    if (this.ReadOnly) throw dbError(`${this.Name}: Cannot modify a read-only dataset`);
    await this.fireRaw('BeforeEdit', this);
    const row = this.curRow()!;
    await this.lockRecord(row);
    this.buf = { ...row.v };
    this.oldBuf = { ...row.v };
    this._state = 'dsedit';
    this._modified = false;
    await this.fire('AfterEdit', this);
    await this.notifyState();
  }
  protected async lockRecord(_row: Row) { /* DOA LockingMode — server side */ }

  async Insert() { await this.doInsert(false); }
  async Append() { await this.doInsert(true); }
  protected async doInsert(append: boolean) {
    this.CheckActive();
    await this.checkBrowseMode();
    await this.fireRaw('BeforeInsert', this);
    this.buf = {};
    for (const f of this.fields) this.buf[f.key] = null;
    this.oldBuf = null;
    this.insertAt = append ? this.view.length : Math.max(0, this.cur);
    this._state = 'dsinsert';
    this._modified = false;
    await this.fire('OnNewRecord', this);
    await this.calcCurrent();
    await this.fire('AfterInsert', this);
    await this.notifyState();
  }

  async Post() {
    if (this._state !== 'dsedit' && this._state !== 'dsinsert') {
      if (this._state === 'dsbrowse') return;
      throw dbError(`${this.Name}: Dataset not in edit or insert mode`);
    }
    await this.fireRaw('BeforePost', this);
    for (const f of this.fields) {
      if (f.Required && f.FieldKind === 'fkdata' && (this.buf![f.key] === null || this.buf![f.key] === undefined || this.buf![f.key] === '')) {
        throw dbError(`Field '${f.DisplayLabel}' must have a value`);
      }
    }
    const inserting = this._state === 'dsinsert';
    const values = { ...this.buf! };
    let row: Row;
    if (inserting) {
      row = { v: values, isNew: true };
      const res = await this.applyRecord('insert', row, values, {});
      if (res?.rowid !== undefined) row.rowid = res.rowid;
      if (res?.values) Object.assign(row.v, res.values);
      this.rows.push(row);
      const ri = this.rows.length - 1;
      this.view.splice(this.insertAt, 0, ri);
      this.cur = this.insertAt;
    } else {
      row = this.curRow()!;
      const res = await this.applyRecord('update', row, values, this.oldBuf ?? {});
      row.v = { ...values, ...(res?.values ?? {}) };
    }
    this.cancelBuffers();
    this._state = 'dsbrowse';
    this._eof = false;
    await this.fire('AfterPost', this);
    await this.notifyDataChange(null);
  }
  /** DML hook — TOracleDataSet sends it to the gateway. */
  protected async applyRecord(_a: 'insert' | 'update' | 'delete', _row: Row, _v: Record<string, unknown>, _old: Record<string, unknown>):
    Promise<{ rowid?: string | null; values?: Record<string, unknown> } | void> { /* */ }

  async Cancel() {
    if (this._state !== 'dsedit' && this._state !== 'dsinsert') return;
    await this.fireRaw('BeforeCancel', this);
    this.cancelBuffers();
    this._state = 'dsbrowse';
    if (this.cur >= this.view.length) this.cur = this.view.length - 1;
    await this.fire('AfterCancel', this);
    await this.notifyDataChange(null);
  }

  async Delete() {
    this.CheckActive();
    if (this._state === 'dsinsert') { await this.Cancel(); return; }
    if (this.IsEmpty) throw dbError(`${this.Name}: Cannot perform this operation on an empty dataset`);
    await this.fireRaw('BeforeDelete', this);
    const row = this.curRow()!;
    await this.applyRecord('delete', row, row.v, row.v);
    const ri = this.view[this.cur];
    this.view.splice(this.cur, 1);
    this.rows[ri] = { v: {}, rowid: '__deleted__' };
    if (this.cur >= this.view.length) this.cur = this.view.length - 1;
    this._eof = this.view.length === 0;
    this._state = 'dsbrowse';
    await this.fire('AfterDelete', this);
    await this.afterScroll();
  }

  async AppendRecord(values: unknown) { await this.Append(); await this.SetFields(values); await this.Post(); }
  async InsertRecord(values: unknown) { await this.Insert(); await this.SetFields(values); await this.Post(); }
  async SetFields(values: unknown) {
    const arr = Array.isArray(values) ? values : [values];
    for (let i = 0; i < arr.length && i < this.fields.length; i++) if (arr[i] !== undefined) await this.fields[i].setValue(arr[i]);
  }
  UpdateRecord() { /* */ }
  ApplyUpdates() { return Promise.resolve(); }
  CommitUpdates() { /* */ }
  CancelUpdates() { /* */ }
  get UpdatesPending() { return false; }
  get UpdateStatus() { return this._state === 'dsinsert' ? 'usinserted' : this._modified ? 'usmodified' : 'usunmodified'; }

  /* ---------------------------------------------------------------- controls / notification */

  DisableControls() { this.controlsDisabled++; }
  async EnableControls() {
    if (this.controlsDisabled > 0) this.controlsDisabled--;
    if (this.controlsDisabled === 0) {
      invalidate();
      if (this.pendingNotify) { this.pendingNotify = false; await this.notifyDataChange(null, true); }
    }
  }
  /** Notify DataSources (OnDataChange) and repaint. */
  async notifyDataChange(field: TField | null, force = false) {
    invalidate();
    if (this.controlsDisabled > 0 && !force) { this.pendingNotify = true; return; }
    for (const ds of this.dataSources) await ds.dataChanged(field);
  }
  async notifyState() {
    invalidate();
    for (const ds of this.dataSources) await ds.stateChanged();
  }

  /* ---------------------------------------------------------------- master/detail */

  async refreshDetails() {
    for (const d of this.details) await runGuarded(() => d.masterChanged(), `${d.Name} (detail)`);
  }
  async masterChanged() { /* TOracleDataSet re-queries with master values */ }

  /* DataSource-less helper used by grids: the record values at a view row. */
  rowValues(i: number) { return this.rows[this.view[i]]?.v; }
  get currentIndex() { return this.cur; }
  get editBuffer() { return this.buf; }
  async gotoIndex(i: number) { await this.moveTo(i); this._bof = i === 0; this._eof = false; }
  isEditing() { return this._state === 'dsedit' || this._state === 'dsinsert'; }
  insertIndex() { return this._state === 'dsinsert' ? this.insertAt : -1; }
}
registerBuiltin('TDataSet', TDataSet);

/** In-memory dataset (TClientDataSet / TMemTableEh / kbmMemTable usage). */
export class TClientDataSet extends TDataSet {
  IndexFieldNames = '';
  LogChanges = false;
  protected override async doOpen() {
    if (this.rows.length === 0 && this.fields.length) this.rows = [];
  }
  CreateDataSet() { this._state = 'dsbrowse'; this.rows = []; this.view = []; this.cur = -1; this._bof = this._eof = true; invalidate(); }
  EmptyDataSet() { this.rows = []; this.view = []; this.cur = -1; this._bof = this._eof = true; invalidate(); }
  MergeChangeLog() { /* */ }
  get FieldDefsList() { return this.FieldDefs; }
}
registerBuiltin('TClientDataSet', TClientDataSet);
registerBuiltin('TMemTableEh', TClientDataSet);
registerBuiltin('TkbmMemTable', TClientDataSet);

export { Ref };
