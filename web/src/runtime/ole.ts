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
 */
import { TObject, GAP, routine } from './core';
import { logger } from './log';
import { toast } from './toast';
import { downloadText } from './vcl/classes';

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
  maxR = 0; maxC = 0;
  Name = '';
  constructor(name: string) { super(); this.Name = name; }
  put(r: number, c: number, v: unknown) {
    if (r < 1 || c < 1) return;
    this.cells.set(`${r},${c}`, v);
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
  override pget(l: string): unknown {
    if (l === 'value' || l === 'formula' || l === 'text' || l === 'value2') return this.s.cells.get(`${this.r},${this.c}`) ?? '';
    return new OleAny();
  }
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
    if (l === 'add' || l === 'open') return routine(() => this.app.addBook(), 'Add');
    if (l === 'count') return this.app.books.length;
    return GAP;
  }
  override pindex(idx?: unknown[]) { return this.app.books[Math.max(0, num(idx?.[0]) - 1)] ?? this.app.addBook(); }
}

export class ExcelApp extends OleAny {
  books: Workbook[] = [];
  private done = false;
  addBook() { const b = new Workbook(this); this.books.push(b); return b; }
  private book() { return this.books[this.books.length - 1] ?? this.addBook(); }
  download() {
    if (this.done) return;
    const sheets = this.books.flatMap((b) => b.sheets).filter((s) => s.maxR > 0);
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
