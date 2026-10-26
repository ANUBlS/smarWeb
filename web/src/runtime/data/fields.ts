/* DB.pas TField emulation. Values live in the owning dataset's current record buffer. */
import { PasException } from '../core';
import { registerBuiltin } from '../env';
import { num, str } from '../pascal';
import { TComponent } from '../vcl/component';
import { formatFloat } from '../stdlib';
import { formatDateTime, parseDate, settings } from '../datetime';
import type { TDataSet } from './dataset';

export type FieldType = 'string' | 'integer' | 'float' | 'date' | 'time' | 'datetime' | 'boolean' | 'blob' | 'memo';

export class TField extends TComponent {
  FieldName = '';
  Size = 0;
  Required = false;
  ReadOnly = false;
  Visible = true;
  DisplayWidth = 0;
  DisplayFormat = '';
  EditFormat = '';
  EditMask = '';
  Alignment = 'taleftjustify';
  FieldKind = 'fkdata';
  KeyFields = '';
  LookupKeyFields = '';
  LookupResultField = '';
  LookupDataSet: TDataSet | null = null;
  LookupCache = false;
  Origin = '';
  ProviderFlags: string[] = [];
  DefaultExpression = '';
  Currency = false;
  Precision = 15;
  MaxValue = 0;
  MinValue = 0;
  ValueChecked = 'True';
  ValueUnchecked = 'False';
  DisplayValues = '';
  FixedChar = false;
  Transliterate = true;
  DataSet: TDataSet | null = null;
  protected _displayLabel = '';
  fieldType: FieldType = 'string';

  get DisplayLabel() { return this._displayLabel || this.FieldName; }
  set DisplayLabel(v: string) { this._displayLabel = str(v); }
  get DisplayName() { return this.DisplayLabel; }
  get Index() { return this.DataSet ? this.DataSet.fieldList().indexOf(this) : -1; }
  get Calculated() { return this.FieldKind === 'fkcalculated'; }
  set Calculated(v: boolean) { if (v) this.FieldKind = 'fkcalculated'; }
  get Lookup() { return this.FieldKind === 'fklookup'; }
  set Lookup(v: boolean) { if (v) this.FieldKind = 'fklookup'; }
  get IsIndexField() { return false; }
  get CanModify() { return !this.ReadOnly && !!this.DataSet && !this.DataSet.ReadOnly; }
  get DataType() {
    return ({ string: 'ftstring', integer: 'ftinteger', float: 'ftfloat', date: 'ftdate', time: 'fttime',
      datetime: 'ftdatetime', boolean: 'ftboolean', blob: 'ftblob', memo: 'ftmemo' } as const)[this.fieldType];
  }
  get FullName() { return this.FieldName; }
  get key() { return this.FieldName.toUpperCase(); }

  /* ---------------------------------------------------------------- raw value access */

  get Value(): unknown { return this.DataSet ? this.DataSet.getValue(this) : null; }
  set Value(v: unknown) { void this.setValue(v); }
  get AsVariant() { return this.Value; }
  get IsNull() { const v = this.Value; return v === null || v === undefined || (this.fieldType === 'string' && v === ''); }
  get OldValue() { return this.DataSet ? this.DataSet.getOldValue(this) : null; }
  get NewValue() { return this.Value; }
  get CurValue() { return this.Value; }

  get AsString(): string { return this.toStr(this.Value); }
  get AsWideString() { return this.AsString; }
  get AsInteger(): number { const v = this.Value; return v === null || v === undefined || v === '' ? 0 : Math.trunc(numeric(v)); }
  get AsLargeInt() { return this.AsInteger; }
  get AsFloat(): number { const v = this.Value; return v === null || v === undefined || v === '' ? 0 : numeric(v); }
  get AsCurrency() { return this.AsFloat; }
  get AsBCD() { return this.AsFloat; }
  get AsExtended() { return this.AsFloat; }
  get AsSingle() { return this.AsFloat; }
  get AsDateTime(): number {
    const v = this.Value;
    if (v === null || v === undefined || v === '') return 0;
    if (typeof v === 'number') return v;
    const d = parseDate(String(v));
    if (d === null) throw new PasException('EConvertError', `'${v}' is not a valid date`, ['exception']);
    return d;
  }
  get AsBoolean(): boolean {
    const v = this.Value;
    if (typeof v === 'boolean') return v;
    if (typeof v === 'number') return v !== 0;
    const s = str(v).toLowerCase();
    return s === 'true' || s === 't' || s === 'y' || s === '1' || s === this.ValueChecked.toLowerCase();
  }
  get Text() { return this.toEditText(this.Value); }
  get DisplayText() { return this.toDisplay(this.Value); }

  /** Display string honouring DisplayFormat (used by grids/labels). */
  toDisplay(v: unknown): string {
    if (v === null || v === undefined) return '';
    if (this.fieldType === 'float' || this.fieldType === 'integer') {
      if (this.DisplayFormat) return formatFloat(this.DisplayFormat, v);
      if (this.Currency) return formatFloat(',0.00', v);
      return this.toStr(v);
    }
    if (this.fieldType === 'date' || this.fieldType === 'datetime' || this.fieldType === 'time') {
      const d = typeof v === 'number' ? v : parseDate(String(v));
      if (d === null) return String(v);
      if (this.DisplayFormat) return formatDateTime(this.DisplayFormat, d);
      if (this.fieldType === 'time') return formatDateTime(settings.LongTimeFormat, d);
      return formatDateTime(settings.ShortDateFormat + (d % 1 && this.fieldType !== 'date' ? ' ' + settings.ShortTimeFormat : ''), d);
    }
    if (this.fieldType === 'boolean') {
      if (this.DisplayValues) { const [t, f] = this.DisplayValues.split(';'); return this.AsBoolean ? t : f ?? ''; }
      return v ? 'True' : 'False';
    }
    return str(v);
  }
  toEditText(v: unknown) {
    if ((this.fieldType === 'float' || this.fieldType === 'integer') && this.EditFormat) return formatFloat(this.EditFormat, v);
    if (this.fieldType === 'float' && v !== null && v !== undefined) return str(v);
    return this.toDisplay(v);
  }
  toStr(v: unknown): string {
    if (v === null || v === undefined) return '';
    if (this.fieldType === 'date' || this.fieldType === 'datetime' || this.fieldType === 'time') {
      const d = typeof v === 'number' ? v : parseDate(String(v));
      if (d === null) return String(v);
      return formatDateTime(this.fieldType === 'time' ? settings.LongTimeFormat
        : settings.ShortDateFormat + (d % 1 ? ' ' + settings.LongTimeFormat : ''), d);
    }
    if (this.fieldType === 'boolean') return v ? 'True' : 'False';
    if (typeof v === 'number') return Number.isInteger(v) ? String(v) : String(Number(v.toPrecision(15))).replace('.', settings.DecimalSeparator);
    return String(v);
  }

  /** Convert an incoming value to the field's storage type. */
  coerce(v: unknown): unknown {
    if (v === undefined) return null;
    if (v === null) return null;
    switch (this.fieldType) {
      case 'integer':
        if (v === '') return null;
        return typeof v === 'number' ? Math.trunc(v) : Math.trunc(parseNumber(v));
      case 'float':
        if (v === '') return null;
        return typeof v === 'number' ? v : parseNumber(v);
      case 'date': case 'datetime': case 'time': {
        if (v === '' ) return null;
        if (typeof v === 'number') return v;
        const d = parseDate(String(v));
        if (d === null) throw new PasException('EConvertError', `'${v}' is not a valid date`, ['exception']);
        return d;
      }
      case 'boolean':
        return typeof v === 'boolean' ? v : !!v && v !== 0 && String(v).toLowerCase() !== 'false';
      default:
        return typeof v === 'string' ? v : str(v);
    }
  }

  async setValue(v: unknown) {
    if (!this.DataSet) return;
    await this.DataSet.setValue(this, this.coerce(v));
  }
  Clear() { return this.setValue(null); }
  FocusControl() { /* */ }
  GetData() { return this.Value; }
  SetData(v: unknown) { return this.setValue(v); }
  IsValidChar() { return true; }
  Assign(f: unknown) { if (f instanceof TField) return this.setValue(f.Value); }
  AssignValue(v: unknown) { return this.setValue(v); }

  /** Field values are written asynchronously (they fire OnValidate/OnChange). */
  override pset(lname: string, v: unknown) {
    switch (lname) {
      case 'value': case 'asvariant': case 'newvalue': return this.setValue(v).then(() => true);
      case 'asstring': case 'aswidestring': return this.setValue(this.fromString(str(v))).then(() => true);
      case 'text': return this.setText(str(v)).then(() => true);
      case 'asinteger': case 'aslargeint': return this.setValue(v === null ? null : Math.trunc(num(v))).then(() => true);
      case 'asfloat': case 'ascurrency': case 'asbcd': case 'asextended': case 'assingle': return this.setValue(v === null ? null : num(v)).then(() => true);
      case 'asdatetime': return this.setValue(v).then(() => true);
      case 'asboolean': return this.setValue(this.fieldType === 'string' ? (v ? this.ValueChecked : this.ValueUnchecked) : !!v).then(() => true);
      case 'displaylabel': this._displayLabel = str(v); return true;
    }
    return super.pset(lname, v);
  }

  fromString(s: string): unknown {
    if (s === '' && this.fieldType !== 'string') return null;
    return this.coerce(s);
  }
  async setText(s: string) {
    if (this.hasHandler('OnSetText')) { await this.fire('OnSetText', this, s); return; }
    await this.setValue(this.fromString(s));
  }
}

function parseNumber(v: unknown): number {
  const s = str(v).replace(/\s/g, '').replace(',', '.');
  const n = Number(s);
  if (isNaN(n)) throw new PasException('EConvertError', `'${str(v)}' is not a valid floating point value`, ['exception']);
  return n;
}
// With the mock gateway, `select *` columns have no real Oracle type and may come back as words;
// the code reads them with AsInteger/AsFloat because they are NUMBER columns in the real schema.
const MOCK = ((import.meta as any).env?.VITE_API_MODE ?? 'mock') !== 'http';
function numeric(v: unknown): number {
  if (typeof v === 'number') return v;
  if (typeof v === 'boolean') return v ? 1 : 0;
  if (MOCK && typeof v === 'string' && v.trim() !== '' && isNaN(Number(v.replace(/\s/g, '').replace(',', '.')))) {
    let h = 0;
    for (const ch of v) h = (h * 31 + ch.charCodeAt(0)) | 0;
    return 1 + (Math.abs(h) % 9);
  }
  return parseNumber(v);
}

const FIELD_CLASSES: [string, FieldType][] = [
  ['TStringField', 'string'], ['TWideStringField', 'string'], ['TFixedCharField', 'string'], ['TGuidField', 'string'],
  ['TIntegerField', 'integer'], ['TSmallintField', 'integer'], ['TWordField', 'integer'], ['TLargeintField', 'integer'],
  ['TAutoIncField', 'integer'], ['TShortintField', 'integer'], ['TLongWordField', 'integer'],
  ['TFloatField', 'float'], ['TCurrencyField', 'float'], ['TBCDField', 'float'], ['TFMTBCDField', 'float'],
  ['TSingleField', 'float'], ['TExtendedField', 'float'],
  ['TDateTimeField', 'datetime'], ['TDateField', 'date'], ['TTimeField', 'time'], ['TSQLTimeStampField', 'datetime'],
  ['TBooleanField', 'boolean'],
  ['TBlobField', 'blob'], ['TGraphicField', 'blob'], ['TBytesField', 'blob'], ['TVarBytesField', 'blob'],
  ['TMemoField', 'memo'], ['TWideMemoField', 'memo'],
  ['TVariantField', 'string'], ['TAggregateField', 'float'], ['TReferenceField', 'string'], ['TDataSetField', 'string'],
];
export const fieldClassByType = new Map<FieldType, string>();
for (const [name, t] of FIELD_CLASSES) {
  const C = class extends TField { constructor() { super(); this.fieldType = t; if (name === 'TCurrencyField') this.Currency = true; } };
  (C as any).pascalName = name;
  registerBuiltin(name, C as any);
  if (!fieldClassByType.has(t)) fieldClassByType.set(t, name);
}
registerBuiltin('TField', TField);
registerBuiltin('TNumericField', TField);

/** Field definition (FieldDefs) entry. */
export class TFieldDef {
  constructor(public Name: string, public DataType: string, public Size: number) {}
}
