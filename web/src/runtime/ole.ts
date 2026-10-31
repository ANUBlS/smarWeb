/*
 * OLE automation stand-ins.  SmartBank exports grids to Excel through late-bound automation:
 *
 *   Excel := CreateOleObject('Excel.Application');
 *   Excel.Workbooks.Add;  Excel.Cells[1, 1] := 'Hesab';  …  Excel.Visible := True;
 *
 * In the browser there is no Excel; the emulation records the cells written to every sheet and,
 * when the workbook is shown (Visible := True) or saved (SaveAs), downloads them as a CSV file
 * that Excel opens. Members it does not know (fonts, borders, number formats …) are absorbed.
 * Other automation servers (Word …) return an inert object.
 *
 * Reading: Workbooks.Open(FileName) opens a file the user picked with TOpenDialog (runtime/files)
 * and parses it with SheetJS (.xls / .xlsx / .csv), so  Sheet.Cells[r, c]  and  .Text  read it.
 *
 * TCMExcelExport (VCL/CMExcelExport.pas) ExportDataset → an .xlsx download: titles (DisplayName)
 * in row 1, the records from row 2, on a sheet with the given name.
 */
import { TObject, GAP, routine } from './core';
import { logger } from './log';
import { toast } from './toast';
import { downloadText } from './vcl/classes';
import { pickedFile } from './files';

type XLSXLib = typeof import('@e965/xlsx');
const loadXlsx = (): Promise<XLSXLib> => import('@e965/xlsx');

const num = (v: unknown) => Number(v ?? 0) || 0;
const text = (v: unknown) => (v === null || v === undefined || v === GAP ? '' : String(v));

/** Generic automation object: every property exists, every call succeeds. */
class OleAny extends TObject {
  pget(_l: string): unknown { return GAP; }
  pset(_l: string, _v: unknown) { return true; }
  pindex(_idx?: unknown[]): unknown { return GAP; }
  pindexSet(_idx?: unknown[], _v?: unknown): void { /* */ }
}

class Sheet extends OleAny {
  cells = new Map<string, unknown>();
  /** Formatted cell text of a workbook read from a file (Range.Text). */
  shown = new Map<string, string>();
  maxR = 0; maxC = 0;
  Name = '';
  /** Written by the code (a read-only opened file is not offered as a download). */
  dirty = false;
  constructor(name: string) { super(); this.Name = name; }
  put(r: number, c: number, v: unknown, fromFile = false) {
    if (r < 1 || c < 1) return;
    this.cells.set(`${r},${c}`, v);
    if (!fromFile) { this.dirty = true; this.shown.delete(`${r},${c}`); }
    this.maxR = Math.max(this.maxR, r); this.maxC = Math.max(this.maxC, c);
  }
  csv() {
    const out: string[] = [];
    for (let r = 1; r <= this.maxR; r++) {
      const row: string[] = [];
      for (let c = 1; c <= this.maxC; c++) {
        const s = text(this.cells.get(`${r},${c}`));
        row.push(/[;"\n\r]/.test(s) ? `"${s.replace(/"/g, '""')}"` : s);
      }
      out.push(row.join(';'));
    }
    return out.join('\r\n');
  }
  override pget(l: string): unknown {
    if (l === 'cells') return new Cells(this);
    if (l === 'name') return this.Name;
    if (l === 'range') return new OleAny();
    return GAP;
  }
  override pset(l: string, v: unknown) { if (l === 'name') this.Name = text(v); return true; }
}

class Cell extends OleAny {
  constructor(private s: Sheet, private r: number, private c: number) { super(); }
  private get raw() { return this.s.cells.get(`${this.r},${this.c}`) ?? ''; }
  override pget(l: string): unknown {
    if (l === 'text') return this.s.shown.get(`${this.r},${this.c}`) ?? text(this.raw);
    if (l === 'value' || l === 'formula' || l === 'value2') return this.raw;
    return new OleAny();
  }
  /** A cell used as a value is its Value (the Variant default property). */
  override toString() { return text(this.raw); }
  valueOf() { return this.raw; }
  override pset(l: string, v: unknown) {
    if (l === 'value' || l === 'formula' || l === 'value2') this.s.put(this.r, this.c, v);
    return true;
  }
}

class Cells extends OleAny {
  constructor(private s: Sheet) { super(); }
  override pindex(idx?: unknown[]) { return new Cell(this.s, num(idx?.[0]), num(idx?.[1])); }
  override pindexSet(idx?: unknown[], v?: unknown) { this.s.put(num(idx?.[0]), num(idx?.[1]), v); }
  override pget(l: string): unknown { return l === 'item' ? { pget: () => GAP } : new OleAny(); }
}

class Workbook extends OleAny {
  sheets: Sheet[] = [new Sheet('Sheet1')];
  constructor(private app: ExcelApp) { super(); }
  override pget(l: string): unknown {
    if (l === 'worksheets' || l === 'sheets') return new SheetList(this);
    if (l === 'activesheet') return this.sheets[0];
    if (l === 'saveas' || l === 'save') return routine(() => this.app.download(), 'SaveAs');
    if (l === 'close') return routine(() => undefined, 'Close');
    return GAP;
  }
}

class SheetList extends OleAny {
  constructor(private wb: Workbook) { super(); }
  override pindex(idx?: unknown[]) {
    if (typeof idx?.[0] === 'string') {
      const n = idx[0].toLowerCase();
      const found = this.wb.sheets.find((x) => x.Name.toLowerCase() === n);
      if (found) return found;
      throw new Error(`Excel: '${idx[0]}' adlı vərəq tapılmadı`);
    }
    const i = num(idx?.[0]);
    while (this.wb.sheets.length < i) this.wb.sheets.push(new Sheet(`Sheet${this.wb.sheets.length + 1}`));
    return this.wb.sheets[Math.max(0, i - 1)];
  }
  override pget(l: string): unknown {
    if (l === 'count') return this.wb.sheets.length;
    if (l === 'add') return routine(() => { const s = new Sheet(`Sheet${this.wb.sheets.length + 1}`); this.wb.sheets.unshift(s); return s; }, 'Add');
    if (l === 'item') return { pindex: (i: unknown[]) => this.pindex(i), pget: () => GAP };
    return GAP;
  }
}

class Workbooks extends OleAny {
  constructor(private app: ExcelApp) { super(); }
  override pget(l: string): unknown {
    if (l === 'add') return routine(() => this.app.addBook(), 'Add');
    if (l === 'open') return routine((name: unknown) => this.app.openBook(name), 'Open');
    if (l === 'count') return this.app.books.length;
    return GAP;
  }
  override pindex(idx?: unknown[]) { return this.app.books[Math.max(0, num(idx?.[0]) - 1)] ?? this.app.addBook(); }
}

export class ExcelApp extends OleAny {
  books: Workbook[] = [];
  private done = false;
  addBook() { const b = new Workbook(this); this.books.push(b); return b; }
  /** Workbooks.Open(FileName): the file the user picked in an open dialog. */
  async openBook(name: unknown) {
    const f = pickedFile(name);
    if (!f) throw new Error(`Excel: '${text(name)}' faylı açıla bilmədi (faylı yenidən seçin)`);
    const XLSX = await loadXlsx();
    const wb = XLSX.read(await f.arrayBuffer(), { cellNF: true, cellText: true, dense: false });
    const b = new Workbook(this);
    b.sheets = wb.SheetNames.map((n) => {
      const sh = new Sheet(n);
      const ws = wb.Sheets[n] as Record<string, any>;
      for (const addr of Object.keys(ws)) {
        if (addr.startsWith('!')) continue;
        const cell = ws[addr];
        const { r, c } = XLSX.utils.decode_cell(addr);
        const isDate = cell.t === 'n' && cell.z && XLSX.SSF.is_date(cell.z);
        // dates read as their text (as Delphi's VarToStr of a date Variant), the rest as values
        const v = cell.t === 'e' ? '' : isDate ? (cell.w ?? cell.v) : cell.v;
        sh.put(r + 1, c + 1, v, true);
        if (cell.w !== undefined) sh.shown.set(`${r + 1},${c + 1}`, String(cell.w));
      }
      return sh;
    });
    if (!b.sheets.length) b.sheets = [new Sheet('Sheet1')];
    this.books.push(b);
    return b;
  }
  private book() { return this.books[this.books.length - 1] ?? this.addBook(); }
  download() {
    if (this.done) return;
    const sheets = this.books.flatMap((b) => b.sheets).filter((s) => s.maxR > 0 && s.dirty);
    if (!sheets.length) return;
    this.done = true;
    const body = sheets.map((s) => (sheets.length > 1 ? `${s.Name}\r\n` : '') + s.csv()).join('\r\n\r\n');
    downloadText('SmartBank-export.csv', '﻿' + body);
    toast('Excel ixracı CSV faylı kimi yükləndi', 'info');
  }
  override pget(l: string): unknown {
    if (l === 'workbooks') return new Workbooks(this);
    if (l === 'activeworkbook') return this.book();
    if (l === 'activesheet' || l === 'activecell') return this.book().sheets[0];
    if (l === 'cells') return new Cells(this.book().sheets[0]);
    if (l === 'worksheets' || l === 'sheets') return new SheetList(this.book());
    if (l === 'quit') return routine(() => this.download(), 'Quit');
    if (l === 'application') return this;
    return GAP;
  }
  override pset(l: string, v: unknown) {
    if (l === 'visible' && v) this.download();
    return true;
  }
}

export function createOleObject(name: unknown): unknown {
  const n = text(name).toLowerCase();
  if (n.startsWith('excel.')) return new ExcelApp();
  logger.info(`OLE automation '${text(name)}' is not available in the browser`);
  return new OleAny();
}

interface ExportField { FieldName: string; DisplayName: string; Visible: boolean; fieldType: string; key: string }
interface ExportDataSet { Active: boolean; fieldList(): ExportField[]; view: number[]; rowValues(i: number): Record<string, unknown> | undefined }

/** TCMExcelExport.ExportDataset(DataSet, SheetName, Visible): one .xlsx download with the records. */
export async function exportDataSetToXlsx(ds: ExportDataSet, sheetName: unknown, visibleOnly: boolean) {
  if (!ds?.Active) return;
  const XLSX = await loadXlsx();
  const exportable = new Set(['string', 'integer', 'float', 'boolean', 'date', 'datetime', 'time']);
  const fields = ds.fieldList().filter((f) => exportable.has(f.fieldType) && (!visibleOnly || f.Visible));
  const rows: unknown[][] = [fields.map((f) => f.DisplayName || f.FieldName)];
  for (let i = 0; i < ds.view.length; i++) {
    const v = ds.rowValues(i) ?? {};
    rows.push(fields.map((f) => { const x = v[f.key]; return x === undefined ? null : x; }));
  }
  const ws = XLSX.utils.aoa_to_sheet(rows);
  // TDateTime serials are Excel serials: format the date columns
  fields.forEach((f, c) => {
    if (f.fieldType !== 'date' && f.fieldType !== 'datetime' && f.fieldType !== 'time') return;
    const z = f.fieldType === 'date' ? 'dd.mm.yyyy' : f.fieldType === 'time' ? 'hh:mm:ss' : 'dd.mm.yyyy hh:mm';
    for (let r = 1; r < rows.length; r++) {
      const cell = ws[XLSX.utils.encode_cell({ r, c })];
      if (cell && cell.t === 'n') cell.z = z;
    }
  });
  ws['!cols'] = fields.map(() => ({ wch: 20 }));
  const wb = XLSX.utils.book_new();
  const name = (text(sheetName) || 'Sheet1').replace(/[\\/?*[\]:]/g, ' ').slice(0, 31);
  XLSX.utils.book_append_sheet(wb, ws, name);
  XLSX.writeFile(wb, `${name}.xlsx`, { compression: true });
  toast(`"${name}" Excel faylı yükləndi`, 'info');
}
