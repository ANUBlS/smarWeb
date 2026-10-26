/*
 * Third-party controls that are styled or extended versions of standard VCL ones
 * (XFiles VCLXFiles150, EhLib, Tnt, CM components …): they behave like the base class here.
 * Non-visual report/export/browser components are inert.
 */
import { getBuiltin, registerBuiltin } from '../env';
import { TComponent } from './component';
import { TWinControl } from './controls';

const ALIASES: Record<string, string> = {
  TXFCheckBox: 'TCheckBox', TXFBitBtn: 'TBitBtn', TXFRadioButton: 'TRadioButton', TXFStaticText: 'TStaticText',
  TXFRadioGroup: 'TRadioGroup', TXFSpeedButton: 'TSpeedButton', TXFStatusBar: 'TStatusBar',
  TXFProgressBar: 'TProgressBar', TXFCheckGroup: 'TCheckListBox', TXFButton: 'TButton', TXFEdit: 'TEdit',
  TXFLabel: 'TLabel', TXFPanel: 'TPanel', TXFGroupBox: 'TGroupBox', TXFComboBox: 'TComboBox', TXFMemo: 'TMemo',
  TCMSearchEdit: 'TSearchEdit', TSpeedButtonEh: 'TSpeedButton', TXDBNavigator: 'TDBNavigator',
  TFileListBox: 'TListBox', TDirectoryListBox: 'TListBox', TDriveComboBox: 'TComboBox', TTntListBox: 'TListBox',
  TTntEdit: 'TEdit', TTntLabel: 'TLabel', TTntComboBox: 'TComboBox', TTntMemo: 'TMemo',
  TEditCut: 'TAction', TEditCopy: 'TAction', TEditPaste: 'TAction', TDataSetPost: 'TAction', TDataSetCancel: 'TAction',
  TDataSetInsert: 'TAction', TDataSetDelete: 'TAction', TDataSetRefresh: 'TAction', TFileExit: 'TAction',
  THintBox: 'TStaticText',
  TTable: 'TClientDataSet', TADODataSet: 'TClientDataSet', TADOQuery: 'TClientDataSet', TSQLStoredProc: 'TClientDataSet',
  TSQLQuery: 'TClientDataSet', TQuery: 'TClientDataSet',
};

/** Containers shown only on demand (EhLib row detail panel, animation): hidden by default. */
class THiddenContainer extends TWinControl {
  constructor() { super(); this.Visible = false; }
}
class TInert extends TComponent {
  Execute() { return false; }
  ShowReport() { /* reports are out of scope */ }
  PrepareReport() { return true; }
  Navigate() { /* */ }
}

export function registerAliases() {
  for (const [name, base] of Object.entries(ALIASES)) {
    const ctor = getBuiltin(base) ?? (base === 'TClientDataSet' ? getBuiltin('TDataSet') : undefined);
    if (ctor && !getBuiltin(name)) registerBuiltin(name, ctor);
  }
  for (const n of ['TRowDetailPanelControlEh', 'TAnimate']) if (!getBuiltin(n)) registerBuiltin(n, THiddenContainer);
  for (const n of ['TExcelExporter', 'TQExport4Xlsx', 'TQExport4Dialog', 'TQExport4XLS', 'TWebBrowser',
    'TfPrnDBGridEHSetupDialog', 'TCalculatorEh', 'TfrxReport', 'TfrxDBDataset', 'TfrxXLSExport', 'TfrxPDFExport',
    'TfrxPreview', 'TfrxReportPage', 'TfrxDataPage', 'TfrxMasterData', 'TfrxMemoView', 'TfrxLineView',
    'TfrxSysMemoView', 'TfrxShapeView', 'TfrxReportTitle', 'TfrxReportSummary', 'TfrxHeader', 'TfrxChild',
    'TfrxDBCrossView', 'TfrxPageHeader', 'TfrxColumnHeader', 'TQRLoopBand', 'TQRGrDBImage']) {
    if (!getBuiltin(n)) registerBuiltin(n, class extends TInert {});
  }
}
