/*
 * SynPdf TPdfDocumentGDI: the code draws on PDF.VCLCanvas (a GDI canvas in 96-dpi pixels on the page) and calls
 * SaveToFile. Here the canvas records the drawing; SaveToFile renders each page in the browser (any Unicode text in
 * the page fonts) and writes a PDF with one image per page. The file is offered as a download — the desktop saved it
 * (usually on the Desktop) — and stays in the in-memory file store, so ShellExecute(…, FileName …) can open it.
 */
import { TObject } from '../core';
import { registerBuiltin } from '../env';
import { num, str } from '../pascal';
import { writeFile } from '../files';
import { TCanvas, TFont } from './classes';
import { colorValue, isSystemColor } from './colors';

/* page sizes in points (1/72"): SynPdf TPdfPaperSize */
const PAPER: Record<string, [number, number]> = {
  psa4: [595.28, 841.89], psa5: [419.53, 595.28], psa3: [841.89, 1190.55], psletter: [612, 792], pslegal: [612, 1008],
};
const DPI = 96;

type Op =
  | { k: 'text'; x: number; y: number; s: string; font: string; color: string; underline: boolean; strike: boolean }
  | { k: 'line'; x1: number; y1: number; x2: number; y2: number; color: string; width: number }
  | { k: 'rect'; x1: number; y1: number; x2: number; y2: number; pen: string; width: number; fill: string | null; frame: boolean }
  | { k: 'ellipse'; x1: number; y1: number; x2: number; y2: number; pen: string; width: number; fill: string | null };

function cssColor(c: unknown, dflt: string): string {
  const n = colorValue(c);
  if (isSystemColor(n)) return dflt;
  return `rgb(${n & 0xff}, ${(n >> 8) & 0xff}, ${(n >> 16) & 0xff})`;
}
function fontCss(f: TFont): string {
  const st = (f.Style ?? []).map((s) => String(s).toLowerCase());
  const px = Math.max(1, Math.abs(num(f.Size) || 8) * DPI / 72);
  return `${st.includes('fsitalic') ? 'italic ' : ''}${st.includes('fsbold') ? 'bold ' : ''}${px}px "${f.Name || 'Tahoma'}", Tahoma, Arial, sans-serif`;
}
function rectArgs(a: unknown[]): [number, number, number, number] {
  const r = a[0] as Record<string, unknown> | undefined;
  if (a.length === 1 && r && typeof r === 'object') {
    const g = (k: string) => num(r[k] ?? r[k.toLowerCase()] ?? r[k[0].toUpperCase() + k.slice(1)]);
    return [g('left'), g('top'), g('right'), g('bottom')];
  }
  return [num(a[0]), num(a[1]), num(a[2]), num(a[3])];
}

let measureCtx: CanvasRenderingContext2D | null = null;

/** PDF.VCLCanvas: records drawing for the current page. */
export class TPdfCanvas extends TCanvas {
  private pos = { x: 0, y: 0 };
  constructor(private doc: TPdfDocumentGDI) { super(); this.Font.Name = 'Tahoma'; this.Font.Size = 10; this.Pen.Color = 0; this.Brush.Color = 0xffffff; }
  private get page(): Op[] { return this.doc.currentPage(); }
  override TextOut(x?: unknown, y?: unknown, s?: unknown) {
    const st = (this.Font.Style ?? []).map((v) => String(v).toLowerCase());
    this.page.push({ k: 'text', x: num(x), y: num(y), s: str(s), font: fontCss(this.Font), color: cssColor(this.Font.Color, '#000'),
      underline: st.includes('fsunderline'), strike: st.includes('fsstrikeout') });
  }
  override TextRect(rect?: unknown, x?: unknown, y?: unknown, s?: unknown) { this.TextOut(x, y, s); void rect; }
  override MoveTo(x?: unknown, y?: unknown) { this.pos = { x: num(x), y: num(y) }; }
  override LineTo(x?: unknown, y?: unknown) {
    const to = { x: num(x), y: num(y) };
    this.page.push({ k: 'line', x1: this.pos.x, y1: this.pos.y, x2: to.x, y2: to.y, color: cssColor(this.Pen.Color, '#000'), width: Math.max(1, num(this.Pen.Width) || 1) });
    this.pos = to;
  }
  private fill(): string | null { return String(this.Brush.Style).toLowerCase() === 'bsclear' ? null : cssColor(this.Brush.Color, '#fff'); }
  override Rectangle(...a: unknown[]) {
    const [x1, y1, x2, y2] = rectArgs(a);
    this.page.push({ k: 'rect', x1, y1, x2, y2, pen: cssColor(this.Pen.Color, '#000'), width: Math.max(1, num(this.Pen.Width) || 1), fill: this.fill(), frame: true });
  }
  override FillRect(...a: unknown[]) {
    const [x1, y1, x2, y2] = rectArgs(a);
    this.page.push({ k: 'rect', x1, y1, x2, y2, pen: '', width: 0, fill: this.fill() ?? '#fff', frame: false });
  }
  override FrameRect(...a: unknown[]) {
    const [x1, y1, x2, y2] = rectArgs(a);
    this.page.push({ k: 'rect', x1, y1, x2, y2, pen: cssColor(this.Brush.Color, '#000'), width: 1, fill: null, frame: true });
  }
  override Ellipse(...a: unknown[]) {
    const [x1, y1, x2, y2] = rectArgs(a);
    this.page.push({ k: 'ellipse', x1, y1, x2, y2, pen: cssColor(this.Pen.Color, '#000'), width: Math.max(1, num(this.Pen.Width) || 1), fill: this.fill() });
  }
  override TextWidth(s: unknown) {
    measureCtx ??= document.createElement('canvas').getContext('2d');
    if (!measureCtx) return str(s).length * 7;
    measureCtx.font = fontCss(this.Font);
    return Math.round(measureCtx.measureText(str(s)).width);
  }
  override TextHeight() { return Math.round(Math.abs(num(this.Font.Size) || 8) * DPI / 72 * 1.2); }
}

export class TPdfDocumentGDI extends TObject {
  DefaultPaperSize: unknown = 'psA4';
  DefaultPageLandscape = false;
  Compressed = true;
  EmbeddedTTF = false;
  UseUniscribe = false;
  ScreenLogPixels = DPI;
  Info = { Title: '', Author: '', Subject: '', Creator: 'SmartBank' };
  private pages: { ops: Op[]; w: number; h: number }[] = [];
  private canvas: TPdfCanvas;
  constructor() { super(); this.canvas = new TPdfCanvas(this); }
  get VCLCanvas() { return this.canvas; }
  private size(): [number, number] {
    const [w, h] = PAPER[String(this.DefaultPaperSize).toLowerCase()] ?? PAPER.psa4;
    return this.DefaultPageLandscape ? [h, w] : [w, h];
  }
  AddPage() { const [w, h] = this.size(); this.pages.push({ ops: [], w, h }); return this.pages.length; }
  currentPage(): Op[] { if (!this.pages.length) this.AddPage(); return this.pages[this.pages.length - 1].ops; }
  get PageCount() { return this.pages.length; }
  NewDoc() { this.pages = []; }
  Free() { /* */ }

  async SaveToFile(name: unknown) {
    const blob = await this.render();
    const file = str(name);
    writeFile(file, blob);
    const base = file.split(/[\\/]/).pop() || 'document.pdf';
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url; a.download = base; a.style.display = 'none';
    document.body.appendChild(a); a.click(); a.remove();
    setTimeout(() => URL.revokeObjectURL(url), 60_000);
  }

  /** One JPEG image per page, drawn at 2× the GDI resolution. */
  async render(): Promise<Blob> {
    if (!this.pages.length) this.AddPage();
    const scale = 2;
    const images: { jpeg: Uint8Array; pw: number; ph: number; w: number; h: number }[] = [];
    for (const pg of this.pages) {
      const w = Math.round(pg.w * DPI / 72), h = Math.round(pg.h * DPI / 72);
      const cv = document.createElement('canvas');
      cv.width = w * scale; cv.height = h * scale;
      const g = cv.getContext('2d')!;
      g.scale(scale, scale);
      g.fillStyle = '#fff'; g.fillRect(0, 0, w, h);
      g.textBaseline = 'top';
      for (const op of pg.ops) {
        if (op.k === 'text') {
          g.font = op.font; g.fillStyle = op.color; g.fillText(op.s, op.x, op.y);
          if (op.underline || op.strike) {
            const m = g.measureText(op.s), size = parseFloat(op.font.replace(/^.*?(\d+(\.\d+)?)px.*$/, '$1')) || 12;
            const yy = op.y + (op.underline ? size * 1.05 : size * 0.55);
            g.fillRect(op.x, yy, m.width, Math.max(1, size / 14));
          }
        } else if (op.k === 'line') {
          g.strokeStyle = op.color; g.lineWidth = op.width;
          g.beginPath(); g.moveTo(op.x1, op.y1); g.lineTo(op.x2, op.y2); g.stroke();
        } else if (op.k === 'rect') {
          if (op.fill) { g.fillStyle = op.fill; g.fillRect(op.x1, op.y1, op.x2 - op.x1, op.y2 - op.y1); }
          if (op.frame) { g.strokeStyle = op.pen; g.lineWidth = op.width; g.strokeRect(op.x1 + 0.5, op.y1 + 0.5, op.x2 - op.x1 - 1, op.y2 - op.y1 - 1); }
        } else {
          g.beginPath();
          g.ellipse((op.x1 + op.x2) / 2, (op.y1 + op.y2) / 2, Math.abs(op.x2 - op.x1) / 2, Math.abs(op.y2 - op.y1) / 2, 0, 0, Math.PI * 2);
          if (op.fill) { g.fillStyle = op.fill; g.fill(); }
          g.strokeStyle = op.pen; g.lineWidth = op.width; g.stroke();
        }
      }
      const jpegBlob: Blob = await new Promise((res) => cv.toBlob((b) => res(b!), 'image/jpeg', 0.92));
      images.push({ jpeg: new Uint8Array(await jpegBlob.arrayBuffer()), pw: pg.w, ph: pg.h, w: cv.width, h: cv.height });
    }
    return buildPdf(images);
  }
}

/** Minimal PDF 1.4: catalog, page tree, and per page a content stream drawing one DCT (JPEG) image. */
function buildPdf(pages: { jpeg: Uint8Array; pw: number; ph: number; w: number; h: number }[]): Blob {
  const parts: (string | Uint8Array)[] = [];
  const offsets: number[] = [];
  let pos = 0;
  const push = (p: string | Uint8Array) => { parts.push(p); pos += typeof p === 'string' ? p.length : p.length; };
  const obj = (n: number, body: (string | Uint8Array)[]) => { offsets[n] = pos; push(`${n} 0 obj\n`); body.forEach(push); push('\nendobj\n'); };
  push('%PDF-1.4\n%\xE2\xE3\xCF\xD3\n');
  const n = pages.length;
  // 1 catalog, 2 pages, then per page: page, content, image
  const kids = pages.map((_, i) => `${3 + i * 3} 0 R`).join(' ');
  obj(1, ['<< /Type /Catalog /Pages 2 0 R >>']);
  obj(2, [`<< /Type /Pages /Kids [${kids}] /Count ${n} >>`]);
  pages.forEach((p, i) => {
    const pn = 3 + i * 3, cn = pn + 1, im = pn + 2;
    const pw = p.pw.toFixed(2), ph = p.ph.toFixed(2);
    obj(pn, [`<< /Type /Page /Parent 2 0 R /MediaBox [0 0 ${pw} ${ph}] /Resources << /XObject << /Im${i} ${im} 0 R >> >> /Contents ${cn} 0 R >>`]);
    const content = `q ${pw} 0 0 ${ph} 0 0 cm /Im${i} Do Q`;
    obj(cn, [`<< /Length ${content.length} >>\nstream\n${content}\nendstream`]);
    obj(im, [`<< /Type /XObject /Subtype /Image /Width ${p.w} /Height ${p.h} /ColorSpace /DeviceRGB /BitsPerComponent 8 /Filter /DCTDecode /Length ${p.jpeg.length} >>\nstream\n`, p.jpeg, '\nendstream']);
  });
  const xref = pos;
  const count = 3 + n * 3;
  let x = `xref\n0 ${count}\n0000000000 65535 f \n`;
  for (let i = 1; i < count; i++) x += `${String(offsets[i]).padStart(10, '0')} 00000 n \n`;
  push(x);
  push(`trailer\n<< /Size ${count} /Root 1 0 R >>\nstartxref\n${xref}\n%%EOF\n`);
  // strings are latin-1 bytes (the header's binary marker included)
  const bytes = parts.map((p) => (typeof p === 'string' ? Uint8Array.from(p, (c) => c.charCodeAt(0) & 0xff) : p));
  return new Blob(bytes as BlobPart[], { type: 'application/pdf' });
}

registerBuiltin('TPdfDocumentGDI', TPdfDocumentGDI);
registerBuiltin('TPdfCanvas', TPdfCanvas);
