/* Classes.pas / Graphics.pas emulation: TStrings, TList, collections, fonts, canvas. */
import { TObject, PasException, Ref, routine } from '../core';
import { registerBuiltin } from '../env';
import { num, str } from '../pascal';
import { invalidate } from '../ui';
import { colorValue } from './colors';

/** Indexed property value (`Items[i]`, `Values['x']`, `Cells[c, r]`). */
export class Indexed extends TObject {
  constructor(private getter: (idx: unknown[]) => unknown, private setter?: (idx: unknown[], v: unknown) => void) {
    super();
  }
  pindex(idx: unknown[]) { return this.getter(idx); }
  pindexSet(idx: unknown[], v: unknown) { this.setter?.(idx, v); }
}

/* ------------------------------------------------------------------ TStrings */

export class TStrings extends TObject {
  static aliases = ['TStringList'];
  protected items: { s: string; o: unknown }[] = [];
  onChange?: () => void;
  Sorted = false;
  Duplicates: string = 'dupaccept';
  CaseSensitive = false;
  Delimiter = ',';
  QuoteChar = '"';
  NameValueSeparator = '=';
  StrictDelimiter = false;
  OnChange: unknown = null;
  private updating = 0;

  constructor(lines?: string[]) {
    super();
    this.__className = 'TStringList';
    if (lines) this.items = lines.map((s) => ({ s, o: null }));
  }

  Create() { /* constructor */ }

  protected changed() {
    if (this.updating) return;
    this.onChange?.();
    invalidate();
  }

  /* default indexed property: Strings[] */
  pindex(idx: unknown[]) { return this.Get(num(idx[0])); }
  pindexSet(idx: unknown[], v: unknown) { this.Put(num(idx[0]), str(v)); }
  piter() { return this.items.map((x) => x.s); }

  Get(i: number) {
    if (i < 0 || i >= this.items.length) throw new PasException('EStringListError', `List index out of bounds (${i})`, ['exception']);
    return this.items[i].s;
  }
  Put(i: number, s: string) { if (this.items[i]) { this.items[i].s = s; this.changed(); } }

  get Count() { return this.items.length; }
  get Capacity() { return this.items.length; }
  set Capacity(_v: number) { /* ignore */ }
  get Strings() { return new Indexed((i) => this.Get(num(i[0])), (i, v) => this.Put(num(i[0]), str(v))); }
  get Objects() {
    return new Indexed((i) => this.items[num(i[0])]?.o ?? null, (i, v) => {
      const it = this.items[num(i[0])]; if (it) it.o = v;
    });
  }
  get Names() { return new Indexed((i) => this.namePart(this.items[num(i[0])]?.s ?? '')); }
  get ValueFromIndex() {
    return new Indexed((i) => this.valuePart(this.items[num(i[0])]?.s ?? ''), (i, v) => {
      const it = this.items[num(i[0])]; if (it) { it.s = this.namePart(it.s) + this.NameValueSeparator + str(v); this.changed(); }
    });
  }
  get Values() {
    return new Indexed((i) => {
      const k = this.IndexOfName(str(i[0]));
      return k < 0 ? '' : this.valuePart(this.items[k].s);
    }, (i, v) => {
      const name = str(i[0]);
      const k = this.IndexOfName(name);
      if (str(v) === '') { if (k >= 0) this.Delete(k); return; }
      if (k >= 0) this.items[k].s = name + this.NameValueSeparator + str(v);
      else this.items.push({ s: name + this.NameValueSeparator + str(v), o: null });
      this.changed();
    });
  }
  private namePart(s: string) { const p = s.indexOf(this.NameValueSeparator); return p < 0 ? '' : s.slice(0, p); }
  private valuePart(s: string) { const p = s.indexOf(this.NameValueSeparator); return p < 0 ? '' : s.slice(p + 1); }

  get Text() { return this.items.map((x) => x.s + '\r\n').join(''); }
  set Text(v: string) {
    this.items = str(v).replace(/\r\n$/, '').replace(/\n$/, '').split(/\r?\n/).filter((x, i, a) => !(a.length === 1 && x === '')).map((s) => ({ s, o: null }));
    this.changed();
  }
  get CommaText() {
    return this.items.map((x) => (/[\s,"]/.test(x.s) ? '"' + x.s.replace(/"/g, '""') + '"' : x.s)).join(',');
  }
  set CommaText(v: string) { this.setDelimited(str(v), ',', true); }
  get DelimitedText() {
    return this.items.map((x) => (this.StrictDelimiter || !/[\s"]/.test(x.s) ? x.s : this.QuoteChar + x.s + this.QuoteChar)).join(this.Delimiter);
  }
  set DelimitedText(v: string) { this.setDelimited(str(v), this.Delimiter, !this.StrictDelimiter); }
  private setDelimited(v: string, d: string, spaceSplits: boolean) {
    const out: string[] = [];
    let cur = '';
    let q = false;
    for (let i = 0; i < v.length; i++) {
      const c = v[i];
      if (q) {
        if (c === '"' && v[i + 1] === '"') { cur += '"'; i++; } else if (c === '"') q = false; else cur += c;
      } else if (c === '"') q = true;
      else if (c === d || (spaceSplits && c === ' ')) { out.push(cur); cur = ''; }
      else cur += c;
    }
    if (cur !== '' || v.endsWith(d)) out.push(cur);
    this.items = out.map((s) => ({ s, o: null }));
    this.changed();
  }

  Add(s: unknown) {
    const v = str(s);
    if (this.Sorted) {
      if (this.Duplicates === 'dupignore' && this.IndexOf(v) >= 0) return this.IndexOf(v);
      let i = 0;
      while (i < this.items.length && this.cmp(this.items[i].s, v) <= 0) i++;
      this.items.splice(i, 0, { s: v, o: null });
      this.changed();
      return i;
    }
    this.items.push({ s: v, o: null });
    this.changed();
    return this.items.length - 1;
  }
  AddObject(s: unknown, o: unknown) { const i = this.Add(s); this.items[i].o = o; return i; }
  AddPair(n: unknown, v: unknown) { this.Add(str(n) + this.NameValueSeparator + str(v)); return this; }
  Append(s: unknown) { this.Add(s); }
  Insert(i: number, s: unknown) { this.items.splice(num(i), 0, { s: str(s), o: null }); this.changed(); }
  InsertObject(i: number, s: unknown, o: unknown) { this.items.splice(num(i), 0, { s: str(s), o }); this.changed(); }
  Delete(i: number) { this.items.splice(num(i), 1); this.changed(); }
  Clear() { this.items = []; this.changed(); }
  Exchange(a: number, b: number) { const t = this.items[a]; this.items[a] = this.items[b]; this.items[b] = t; this.changed(); }
  Move(a: number, b: number) { const [x] = this.items.splice(a, 1); this.items.splice(b, 0, x); this.changed(); }
  private cmp(a: string, b: string) {
    return this.CaseSensitive ? (a < b ? -1 : a > b ? 1 : 0) : a.toLowerCase().localeCompare(b.toLowerCase());
  }
  IndexOf(s: unknown) {
    const v = str(s);
    return this.items.findIndex((x) => (this.CaseSensitive ? x.s === v : x.s.toLowerCase() === v.toLowerCase()));
  }
  IndexOfName(n: unknown) {
    const v = str(n).toLowerCase();
    return this.items.findIndex((x) => this.namePart(x.s).toLowerCase() === v);
  }
  IndexOfObject(o: unknown) { return this.items.findIndex((x) => x.o === o); }
  async Find(s: unknown, r: Ref) { const i = this.IndexOf(s); await r.set(i < 0 ? 0 : i); return i >= 0; }
  Sort() { this.items.sort((a, b) => this.cmp(a.s, b.s)); this.changed(); }
  CustomSort() { this.Sort(); }
  Assign(src: unknown) {
    if (src instanceof TStrings) this.items = src.items.map((x) => ({ ...x }));
    else if (Array.isArray(src)) this.items = src.map((s) => ({ s: str(s), o: null }));
    this.changed();
  }
  AddStrings(src: unknown) {
    if (src instanceof TStrings) this.items.push(...src.items.map((x) => ({ ...x })));
    this.changed();
  }
  BeginUpdate() { this.updating++; }
  EndUpdate() { if (--this.updating <= 0) { this.updating = 0; this.changed(); } }
  LoadFromFile() { /* no file system in the browser */ }
  SaveToFile(name: unknown) { downloadText(str(name), this.Text); }
  LoadFromStream() { /* noop */ }
  SaveToStream() { /* noop */ }
  Equals(o: unknown) { return o instanceof TStrings && o.Text === this.Text; }
  GetText() { return this.Text; }
  SetText(v: unknown) { this.Text = str(v); }
  ToStringArray() { return this.items.map((x) => x.s); }
  list() { return this.items.map((x) => x.s); }
}
export class TStringList extends TStrings {}
registerBuiltin('TStrings', TStrings);
registerBuiltin('TStringList', TStringList);
registerBuiltin('TWideStrings', TStrings);
registerBuiltin('TWideStringList', TStringList);

export function downloadText(name: string, text: string) {
  try {
    const blob = new Blob([text], { type: 'text/plain;charset=utf-8' });
    const a = document.createElement('a');
    a.href = URL.createObjectURL(blob);
    a.download = name.replace(/^.*[\\/]/, '') || 'export.txt';
    a.click();
    setTimeout(() => URL.revokeObjectURL(a.href), 1000);
  } catch { /* ignore */ }
}

/* ------------------------------------------------------------------ TList */

export class TList extends TObject {
  protected arr: unknown[] = [];
  OwnsObjects = true;
  Create() { /* */ }
  pindex(idx: unknown[]) { return this.arr[num(idx[0])]; }
  pindexSet(idx: unknown[], v: unknown) { this.arr[num(idx[0])] = v; }
  piter() { return [...this.arr]; }
  get Count() { return this.arr.length; }
  set Count(n: number) { this.arr.length = num(n); }
  get Items() { return new Indexed((i) => this.arr[num(i[0])], (i, v) => { this.arr[num(i[0])] = v; }); }
  get First() { return this.arr[0]; }
  get Last() { return this.arr[this.arr.length - 1]; }
  Add(o: unknown) { this.arr.push(o); return this.arr.length - 1; }
  Insert(i: number, o: unknown) { this.arr.splice(num(i), 0, o); }
  Delete(i: number) { this.arr.splice(num(i), 1); }
  Remove(o: unknown) { const i = this.arr.indexOf(o); if (i >= 0) this.arr.splice(i, 1); return i; }
  Extract(o: unknown) { this.Remove(o); return o; }
  IndexOf(o: unknown) { return this.arr.indexOf(o); }
  Clear() { this.arr = []; }
  Exchange(a: number, b: number) { const t = this.arr[a]; this.arr[a] = this.arr[b]; this.arr[b] = t; }
  Pack() { this.arr = this.arr.filter((x) => x != null); }
  Sort(cmp?: (a: unknown, b: unknown) => number) { if (typeof cmp === 'function') this.arr.sort(cmp as any); }
}
registerBuiltin('TList', TList);
registerBuiltin('TObjectList', class TObjectList extends TList {});
registerBuiltin('TComponentList', class TComponentList extends TList {});
registerBuiltin('TInterfaceList', class TInterfaceList extends TList {});
registerBuiltin('TThreadList', class TThreadList extends TList { LockList() { return this; } UnlockList() { /* */ } });

/* ------------------------------------------------------------------ collections */

export class TCollectionItem extends TObject {
  Collection: TCollection | null = null;
  get Index() { return this.Collection ? this.Collection.indexOf(this) : -1; }
  [k: string]: unknown;
}

export class TCollection extends TObject {
  protected arr: TCollectionItem[] = [];
  constructor(private itemFactory: () => TCollectionItem = () => new TCollectionItem()) { super(); }
  pindex(idx: unknown[]) { return this.arr[num(idx[0])]; }
  piter() { return [...this.arr]; }
  get Count() { return this.arr.length; }
  get Items() { return new Indexed((i) => this.arr[num(i[0])]); }
  Add() { const it = this.itemFactory(); it.Collection = this; this.arr.push(it); invalidate(); return it; }
  Insert(i: number) { const it = this.itemFactory(); it.Collection = this; this.arr.splice(num(i), 0, it); invalidate(); return it; }
  Delete(i: number) { this.arr.splice(num(i), 1); invalidate(); }
  Clear() { this.arr = []; invalidate(); }
  BeginUpdate() { /* */ }
  EndUpdate() { invalidate(); }
  indexOf(it: TCollectionItem) { return this.arr.indexOf(it); }
  all() { return this.arr; }
  push(it: TCollectionItem) { it.Collection = this; this.arr.push(it); }
}
registerBuiltin('TCollection', TCollection);

/* ------------------------------------------------------------------ graphics */

export class TFont extends TObject {
  Name = '';
  Size = 8;
  Height = -11;
  Color: number = -2147483640;
  Style: string[] = [];
  Charset = 'default_charset';
  Pitch = 'fpdefault';
  onChange?: () => void;
  private _c = 0;
  constructor(init?: Record<string, unknown>) {
    super();
    if (init) this.assignDfm(init);
  }
  assignDfm(p: Record<string, unknown>) {
    if ('Font.Name' in p) this.Name = String(p['Font.Name']);
    if ('Font.Height' in p) { this.Height = Number(p['Font.Height']); this.Size = Math.round(Math.abs(this.Height) * 72 / 96); }
    if ('Font.Size' in p) this.Size = Number(p['Font.Size']);
    if ('Font.Color' in p) this.Color = colorValue(p['Font.Color']);
    if ('Font.Style' in p) this.Style = ((p['Font.Style'] as string[]) ?? []).map((s) => s.toLowerCase());
  }
  Assign(f: unknown) {
    if (f instanceof TFont) { this.Name = f.Name; this.Size = f.Size; this.Color = f.Color; this.Style = [...f.Style]; this.changed(); }
  }
  changed() { this._c++; this.onChange?.(); invalidate(); }
  override pset(l: string, v: unknown) {
    const r = super.pset(l, l === 'style' ? (Array.isArray(v) ? v : []).map((x) => String(x).toLowerCase()) : v);
    this.changed();
    return r;
  }
}
registerBuiltin('TFont', TFont);

export class TBrush extends TObject { Color: number = -2147483643; Style = 'bssolid'; Bitmap = null; }
export class TPen extends TObject { Color = 0; Width = 1; Style = 'pssolid'; Mode = 'pmcopy'; }
registerBuiltin('TBrush', TBrush);
registerBuiltin('TPen', TPen);

/** Canvas: drawing calls are recorded so grids can apply colours chosen in OnDrawColumnCell. */
export class TCanvas extends TObject {
  Font = new TFont();
  Brush = new TBrush();
  Pen = new TPen();
  Handle = 0;
  CopyMode = 0;
  TextFlags = 0;
  ops = 0;
  FillRect() { this.ops++; }
  TextOut() { this.ops++; }
  TextRect() { this.ops++; }
  Rectangle() { this.ops++; }
  Ellipse() { this.ops++; }
  MoveTo() { this.ops++; }
  LineTo() { this.ops++; }
  Draw() { this.ops++; }
  StretchDraw() { this.ops++; }
  FrameRect() { this.ops++; }
  Polygon() { this.ops++; }
  RoundRect() { this.ops++; }
  CopyRect() { this.ops++; }
  TextWidth(s: unknown) { return str(s).length * 7; }
  TextHeight() { return 13; }
  Lock() { /* */ }
  Unlock() { /* */ }
  Refresh() { /* */ }
}
registerBuiltin('TCanvas', TCanvas);

export class TGraphic extends TObject {
  Width = 0; Height = 0; Transparent = false; Empty = true;
  Canvas = new TCanvas();
  Create() { /* */ }
  LoadFromFile() { /* */ }
  SaveToFile() { /* */ }
  LoadFromStream() { /* */ }
  SaveToStream() { /* */ }
  Assign() { /* */ }
}
registerBuiltin('TGraphic', TGraphic);
registerBuiltin('TBitmap', class TBitmap extends TGraphic { PixelFormat = 'pf24bit'; TransparentColor = 0; Handle = 0; });
registerBuiltin('TJPEGImage', class TJPEGImage extends TGraphic { CompressionQuality = 90; });
registerBuiltin('TIcon', class TIcon extends TGraphic { Handle = 0; });
registerBuiltin('TMetafile', class TMetafile extends TGraphic {});
export class TPicture extends TObject {
  Graphic: TGraphic | null = null;
  Bitmap = new TGraphic();
  url: string | null = null;
  LoadFromFile() { /* */ }
  SaveToFile() { /* */ }
  Assign(p: unknown) { if (p instanceof TPicture) this.url = p.url; }
}
registerBuiltin('TPicture', TPicture);

export class TStream extends TObject {
  Position = 0; Size = 0;
  Create() { /* */ }
  Write() { return 0; }
  Read() { return 0; }
  Seek() { return 0; }
  SaveToFile() { /* */ }
  LoadFromFile() { /* */ }
  Clear() { /* */ }
  CopyFrom() { return 0; }
  WriteBuffer() { /* */ }
  ReadBuffer() { /* */ }
}
registerBuiltin('TStream', TStream);
registerBuiltin('TMemoryStream', class TMemoryStream extends TStream {});
registerBuiltin('TFileStream', class TFileStream extends TStream {});
registerBuiltin('TStringStream', class TStringStream extends TStream { DataString = ''; Create(s?: unknown) { this.DataString = str(s ?? ''); } });
registerBuiltin('TBlobStream', class TBlobStream extends TStream {});

/** TIniFile / TRegIniFile / TRegistry backed by localStorage. */
export class TIniFile extends TObject {
  private key = 'ini:';
  Create(name?: unknown) { this.key = 'ini:' + str(name ?? 'default').toLowerCase(); }
  private load(): Record<string, Record<string, string>> {
    try { return JSON.parse(localStorage.getItem(this.key) ?? '{}'); } catch { return {}; }
  }
  private save(d: Record<string, Record<string, string>>) {
    try { localStorage.setItem(this.key, JSON.stringify(d)); } catch { /* */ }
  }
  ReadString(sec: unknown, k: unknown, d: unknown) { return this.load()[str(sec)]?.[str(k)] ?? str(d); }
  WriteString(sec: unknown, k: unknown, v: unknown) {
    const d = this.load(); (d[str(sec)] ??= {})[str(k)] = str(v); this.save(d);
  }
  ReadInteger(sec: unknown, k: unknown, d: unknown) { const v = this.load()[str(sec)]?.[str(k)]; return v === undefined ? num(d) : num(v); }
  WriteInteger(sec: unknown, k: unknown, v: unknown) { this.WriteString(sec, k, String(num(v))); }
  ReadBool(sec: unknown, k: unknown, d: unknown) { const v = this.load()[str(sec)]?.[str(k)]; return v === undefined ? !!d : v === '1'; }
  WriteBool(sec: unknown, k: unknown, v: unknown) { this.WriteString(sec, k, v ? '1' : '0'); }
  ReadFloat(sec: unknown, k: unknown, d: unknown) { const v = this.load()[str(sec)]?.[str(k)]; return v === undefined ? num(d) : num(v); }
  WriteFloat(sec: unknown, k: unknown, v: unknown) { this.WriteString(sec, k, String(num(v))); }
  ReadDate(sec: unknown, k: unknown, d: unknown) { return this.ReadFloat(sec, k, d); }
  WriteDate(sec: unknown, k: unknown, v: unknown) { this.WriteFloat(sec, k, v); }
  SectionExists(sec: unknown) { return str(sec) in this.load(); }
  ValueExists(sec: unknown, k: unknown) { return str(k) in (this.load()[str(sec)] ?? {}); }
  EraseSection(sec: unknown) { const d = this.load(); delete d[str(sec)]; this.save(d); }
  DeleteKey(sec: unknown, k: unknown) { const d = this.load(); delete d[str(sec)]?.[str(k)]; this.save(d); }
  ReadSection(sec: unknown, sl: unknown) { if (sl instanceof TStrings) for (const k of Object.keys(this.load()[str(sec)] ?? {})) sl.Add(k); }
  ReadSections(sl: unknown) { if (sl instanceof TStrings) for (const k of Object.keys(this.load())) sl.Add(k); }
  ReadSectionValues(sec: unknown, sl: unknown) {
    if (sl instanceof TStrings) for (const [k, v] of Object.entries(this.load()[str(sec)] ?? {})) sl.Add(k + '=' + v);
  }
  UpdateFile() { /* */ }
  // TRegistry compatibility
  RootKey = 0;
  OpenKey() { return true; }
  CloseKey() { /* */ }
  KeyExists() { return false; }
  ValueExistsReg() { return false; }
}
registerBuiltin('TIniFile', TIniFile);
registerBuiltin('TMemIniFile', TIniFile);
registerBuiltin('TRegIniFile', TIniFile);
registerBuiltin('TRegistry', TIniFile);

export { routine };
