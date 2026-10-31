/*
 * Excel automation components placed on forms:
 *
 *   TExcelApplication (Excel_TLB)      — ExcelApplication1.Application / Connect / Quit / Disconnect,
 *                                        backed by the automation emulation in runtime/ole.ts
 *                                        (Workbooks.Open reads a file picked with TOpenDialog).
 *   TCMExcelExport (VCL/CMExcelExport) — ExportDataset(DataSet, SheetName, Visible) downloads an
 *                                        .xlsx with the titles in row 1 and the records from row 2.
 *   TExcelExporter (SBExcelExporter)   — Report: ExportList (or every field) of ExportSource's
 *                                        DataSet, titles (DisplayLabel) when ShowTitles.
 */
import { registerBuiltin } from '../env';
import { PasException } from '../core';
import { str } from '../pascal';
import { TComponent } from './component';
import { TFont, TStrings } from './classes';
import { ExcelApp, exportDataSetToXlsx, downloadFieldsXlsx } from '../ole';

export class TExcelApplication extends TComponent {
  AutoConnect = false;
  ConnectKind = 'ckrunningornew';
  AutoQuit = false;
  private app = new ExcelApp();
  get Application() { return this.app; }
  get DefaultInterface() { return this.app; }
  get Workbooks() { return this.app.pget('workbooks'); }
  get ActiveWorkbook() { return this.app.pget('activeworkbook'); }
  get ActiveSheet() { return this.app.pget('activesheet'); }
  get Cells() { return this.app.pget('cells'); }
  Connect() { /* the emulation is always "running" */ }
  ConnectTo(_v: unknown) { /* */ }
  Disconnect() { /* */ }
  /** Quit: anything the code wrote is offered as a download; the next session starts empty. */
  Quit() { this.app.download(); this.app = new ExcelApp(); }
}
registerBuiltin('TExcelApplication', TExcelApplication);

class TCellBorder { BackColor = 0xffffff; BorderColor = 0; Weight = 'bwmedium'; LineStyle = 'blnone'; }

export class TCMExcelExport extends TComponent {
  ConnectTo = 'ctnewbook';
  StyleColumnWidth = 'cwdefault';
  ColumnWidth = 0;
  VisibleFieldsOnly = true;
  FontTitles = new TFont();
  FontData = new TFont();
  FontSummary = new TFont();
  BorderTitles = new TCellBorder();
  BorderData = new TCellBorder();
  BorderSummary = new TCellBorder();
  OrientationTitles = 0;
  SummaryFields = new TStrings();
  SummarySelection = 'ssnone';
  SummaryCalculation = 'scsum';
  Filename = '';
  get Connected() { return true; }
  Connect() { /* */ }
  Disconnect() { /* */ }
  ShowExcel() { /* the export is a download */ }
  /** ExportDataset(DataSet, SheetName, BlnVisible [, …]) */
  async ExportDataset(ds: unknown, sheetName: unknown, ..._rest: unknown[]) {
    await exportDataSetToXlsx(ds as Parameters<typeof exportDataSetToXlsx>[0], str(sheetName), this.VisibleFieldsOnly);
  }
  ExecuteMacro() { return false; }
}
registerBuiltin('TCMExcelExport', TCMExcelExport);

/** EExcelExporterExceptions descendants (shown to the user like in Delphi). */
const exporterError = (cls: string, msg: string) => new PasException(cls, msg, ['eexcelexporterexceptions', 'exception']);

export class TExcelExporter extends TComponent {
  ExportSource: any = null;
  ExportList = new TStrings();
  SheetName = '';
  ShowTitles = false;
  ExportFileName = '';
  Font = new TFont();
  /** Report: the records as an .xlsx download (Excel itself is not needed in the browser). */
  async Report() {
    await this.fire('BeforeExport', this);
    const ds = this.ExportSource?.DataSet;
    if (!this.ExportSource) throw exporterError('EExportSourceError', 'DataSource not Assigned!');
    if (!ds) throw exporterError('EExportSourceError', 'DataSource must have DataSet!');
    if (!ds.Active) throw exporterError('EExportSourceError', 'Can not perform this operation for closed DataSet!');
    const names = String(this.ExportList.Text).split('\r\n').filter((x: string) => x !== '');
    const fields = names.length ? names.map((n: string) => ds.FindField(n)) : ds.fieldList();
    if (fields.some((f: unknown) => !f)) throw exporterError('EInvalidField', 'Invalid Field Name ');
    await downloadFieldsXlsx(ds, fields, this.SheetName, this.ShowTitles, this.ExportFileName || undefined);
    await this.fire('AfterExport', this);
  }
}
registerBuiltin('TExcelExporter', TExcelExporter);
