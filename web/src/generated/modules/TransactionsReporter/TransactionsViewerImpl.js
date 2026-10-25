// Generated from TransactionsViewerImpl.pas by pas2js — do not edit by hand; regenerate instead.
/* eslint-disable */
// @ts-nocheck

export default function define($) {
  const U = $.unit("TransactionsViewerImpl", ["Windows", "Messages", "SysUtils", "Classes", "Graphics", "Controls", "Forms", "Dialogs", "ActiveX", "AxCtrls", "TransactionsViewer_TLB", "Db", "OracleData", "Grids", "DBGrids", "ExcelExporter", "DBCtrls", "SearchCombo", "Buttons", "CheckLst", "Oracle", "CMExcelExport", "ShellApi", "QExport4Dialog", "QExport4Xlsx", "QExport4", "QExport4XLS", "QRPDFFilt", "QExport4PDF", "Mask", "ComCtrls", "ExtCtrls", "StdCtrls", "ActnList", "QRExport", "QuickRpt", "grimgctrl", "ComObj", "ShlObj", "ComServ", "sboapiDataModuleImpl", "TransactionsViewerDataModuleUnit", "TransactionViewerRptUnit", "ExportFormImpl", "SBStoredProc", "SBTranslateProc"]);
  const C = [U];
  U.defClass("TFrmTransactionsViewer", "TActiveForm", {"rrr": {"name": "rrr", "type": "TPanel"}, "gb": {"name": "gb", "type": "TGroupBox"}, "datetimepicker1": {"name": "DateTimePicker1", "type": "TDateTimePicker"}, "datetimepicker2": {"name": "DateTimePicker2", "type": "TDateTimePicker"}, "groupbox1": {"name": "GroupBox1", "type": "TGroupBox"}, "editdebt": {"name": "EditDebt", "type": "TEdit"}, "editcredit": {"name": "EditCredit", "type": "TEdit"}, "label1": {"name": "Label1", "type": "TLabel"}, "label2": {"name": "Label2", "type": "TLabel"}, "rg1": {"name": "RG1", "type": "TRadioGroup"}, "rg2": {"name": "RG2", "type": "TRadioGroup"}, "actionlist1": {"name": "ActionList1", "type": "TActionList"}, "actionfilter": {"name": "ActionFilter", "type": "TAction"}, "groupbox3": {"name": "GroupBox3", "type": "TGroupBox"}, "button2": {"name": "Button2", "type": "TButton"}, "button3": {"name": "Button3", "type": "TButton"}, "btnok": {"name": "BtnOK", "type": "TButton"}, "button5": {"name": "Button5", "type": "TButton"}, "panelfilter": {"name": "PanelFilter", "type": "TPanel"}, "pagecontrol1": {"name": "PageControl1", "type": "TPageControl"}, "tabsheetfilter": {"name": "TabSheetFilter", "type": "TTabSheet"}, "panelf": {"name": "PanelF", "type": "TPanel"}, "splitter1": {"name": "Splitter1", "type": "TSplitter"}, "groupbox2": {"name": "GroupBox2", "type": "TGroupBox"}, "panel3": {"name": "Panel3", "type": "TPanel"}, "cbdebetfilial": {"name": "CBDebetFilial", "type": "TCheckBox"}, "panel4": {"name": "Panel4", "type": "TPanel"}, "cboperator": {"name": "CBOperator", "type": "TCheckBox"}, "dblookup2": {"name": "DBLookup2", "type": "TDBLookupComboBox"}, "dblookup3": {"name": "DBLookup3", "type": "TDBLookupComboBox"}, "cboperationtypes": {"name": "CBOperationTypes", "type": "TCheckListBox"}, "statictext1": {"name": "StaticText1", "type": "TStaticText"}, "clbcurrency": {"name": "CLBCurrency", "type": "TCheckListBox"}, "statictext2": {"name": "StaticText2", "type": "TStaticText"}, "actionloadfilters": {"name": "ActionLoadFilters", "type": "TAction"}, "panel1": {"name": "Panel1", "type": "TPanel"}, "transactionsviewer": {"name": "TransactionsViewer", "type": "TDBGrid"}, "panel2": {"name": "Panel2", "type": "TPanel"}, "dbedit1": {"name": "DBEdit1", "type": "TDBEdit"}, "panel5": {"name": "Panel5", "type": "TPanel"}, "dblookup1": {"name": "DBLookup1", "type": "TDBLookupComboBox"}, "cbcreditfilial": {"name": "CBCreditFilial", "type": "TCheckBox"}, "panel6": {"name": "Panel6", "type": "TPanel"}, "checkbox1": {"name": "CheckBox1", "type": "TCheckBox"}, "panel7": {"name": "Panel7", "type": "TPanel"}, "panel8": {"name": "Panel8", "type": "TPanel"}, "editsumamount": {"name": "EditSumAmount", "type": "TEdit"}, "panel9": {"name": "Panel9", "type": "TPanel"}, "editsumamountc": {"name": "EditSumAmountC", "type": "TEdit"}, "panel10": {"name": "Panel10", "type": "TPanel"}, "editsumlamount": {"name": "EditSumLAmount", "type": "TEdit"}, "rg3": {"name": "RG3", "type": "TRadioGroup"}, "transactionsexporter": {"name": "TransactionsExporter", "type": "TCMExcelExport"}, "memo1": {"name": "Memo1", "type": "TMemo"}, "cmexcelexport1": {"name": "CMExcelExport1", "type": "TCMExcelExport"}, "groupbox5": {"name": "GroupBox5", "type": "TGroupBox"}, "cbcommited": {"name": "CBCommited", "type": "TCheckBox"}, "cbdelayed": {"name": "CBDelayed", "type": "TCheckBox"}, "qexport4xls1": {"name": "QExport4XLS1", "type": "TQExport4XLS"}, "qexport4xlsx1": {"name": "QExport4Xlsx1", "type": "TQExport4Xlsx"}, "qexport4dialog1": {"name": "QExport4Dialog1", "type": "TQExport4Dialog"}, "dbgrid1": {"name": "DBGrid1", "type": "TDBGrid"}, "qrpdffilter1": {"name": "QRPDFFilter1", "type": "TQRPDFFilter"}, "checkboxtype": {"name": "CheckBoxType", "type": "TCheckBox"}, "checkboxval": {"name": "CheckBoxVal", "type": "TCheckBox"}, "fevents": {"name": "FEvents", "type": "IFrmTransactionsViewerEvents"}, "operationcount": {"name": "OperationCount", "type": "word"}, "requiredorderfield": {"name": "RequiredOrderField", "type": "variant"}}, {});
  U.init(async () => {
    U.var_("FrmTransactionsViewer", null, "TFrmTransactionsViewer");
    U.var_("OperationIDs", null, "TStringList");
    U.var_("CurrencyIDs", null, "TStringList");
  });
  U.method("TFrmTransactionsViewer", "DefinePropertyPages", async function DefinePropertyPages(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"definepropertypage": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["definepropertypage"]);
  return L0.result;
}, {"params": ["DefinePropertyPage"], "kind": "procedure", "ptypes": ["TDefinePropertyPage"]});
  U.method("TFrmTransactionsViewer", "EventSinkChanged", async function EventSinkChanged(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"eventsink": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["eventsink"]);
  await $.set(C, "FEvents", L0["eventsink"]);
  return L0.result;
}, {"params": ["EventSink"], "kind": "procedure", "ptypes": ["IUnknown"]});
  U.method("TFrmTransactionsViewer", "Initialize", async function Initialize(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: undefined};
  await $.inherited(Self, "TFrmTransactionsViewer", "Initialize", null, arguments);
  await $.set(C, "OnActivate", (await $.ref_(C, "ActivateEvent")));
  await $.set(C, "OnClick", (await $.ref_(C, "ClickEvent")));
  await $.set(C, "OnCreate", (await $.ref_(C, "CreateEvent")));
  await $.set(C, "OnDblClick", (await $.ref_(C, "DblClickEvent")));
  await $.set(C, "OnDeactivate", (await $.ref_(C, "DeactivateEvent")));
  await $.set(C, "OnDestroy", (await $.ref_(C, "DestroyEvent")));
  await $.set(C, "OnKeyPress", (await $.ref_(C, "KeyPressEvent")));
  await $.set(C, "OnPaint", (await $.ref_(C, "PaintEvent")));
  return L0.result;
}, {"params": [], "kind": "procedure", "ptypes": []});
  U.method("TFrmTransactionsViewer", "Get_Active", async function Get_Active(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: false};
  L0["result"] = (await $.v(C, "Active"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TFrmTransactionsViewer", "Get_AutoScroll", async function Get_AutoScroll(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: false};
  L0["result"] = (await $.v(C, "AutoScroll"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TFrmTransactionsViewer", "Get_AutoSize", async function Get_AutoSize(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: false};
  L0["result"] = (await $.v(C, "AutoSize"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TFrmTransactionsViewer", "Get_AxBorderStyle", async function Get_AxBorderStyle(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: null};
  L0["result"] = (await $.call(C, "Ord", [(await $.v(C, "AxBorderStyle"))]));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TFrmTransactionsViewer", "Get_Caption", async function Get_Caption(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: ''};
  L0["result"] = (await $.call(C, "WideString", [(await $.v(C, "Caption"))]));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TFrmTransactionsViewer", "Get_Color", async function Get_Color(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: null};
  L0["result"] = (await $.call(C, "OLE_COLOR", [(await $.v(C, "Color"))]));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TFrmTransactionsViewer", "Get_Cursor", async function Get_Cursor(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: 0};
  L0["result"] = (await $.call(C, "Smallint", [(await $.v(C, "Cursor"))]));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TFrmTransactionsViewer", "Get_DoubleBuffered", async function Get_DoubleBuffered(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: false};
  L0["result"] = (await $.v(C, "DoubleBuffered"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TFrmTransactionsViewer", "Get_DropTarget", async function Get_DropTarget(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: false};
  L0["result"] = (await $.v(C, "DropTarget"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TFrmTransactionsViewer", "Get_Enabled", async function Get_Enabled(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: false};
  L0["result"] = (await $.v(C, "Enabled"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TFrmTransactionsViewer", "Get_Font", async function Get_Font(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: null};
  await $.stmt((await $.call(C, "GetOleFont", [(await $.v(C, "Font")), L0["result"]])));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TFrmTransactionsViewer", "Get_HelpFile", async function Get_HelpFile(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: ''};
  L0["result"] = (await $.call(C, "WideString", [(await $.v(C, "HelpFile"))]));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TFrmTransactionsViewer", "Get_KeyPreview", async function Get_KeyPreview(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: false};
  L0["result"] = (await $.v(C, "KeyPreview"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TFrmTransactionsViewer", "Get_PixelsPerInch", async function Get_PixelsPerInch(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: 0};
  L0["result"] = (await $.v(C, "PixelsPerInch"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TFrmTransactionsViewer", "Get_PrintScale", async function Get_PrintScale(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: null};
  L0["result"] = (await $.call(C, "Ord", [(await $.v(C, "PrintScale"))]));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TFrmTransactionsViewer", "Get_Scaled", async function Get_Scaled(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: false};
  L0["result"] = (await $.v(C, "Scaled"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TFrmTransactionsViewer", "Get_Visible", async function Get_Visible(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: false};
  L0["result"] = (await $.v(C, "Visible"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TFrmTransactionsViewer", "Get_VisibleDockClientCount", async function Get_VisibleDockClientCount(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: 0};
  L0["result"] = (await $.v(C, "VisibleDockClientCount"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TFrmTransactionsViewer", "_Set_Font", async function _Set_Font(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.stmt((await $.call(C, "SetOleFont", [(await $.v(C, "Font")), L0["value"]])));
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["IFontDisp"]});
  U.method("TFrmTransactionsViewer", "ActivateEvent", async function ActivateEvent(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.ne((await $.v(C, "FEvents")), null))) {
    await $.mcall((await $.v(C, "FEvents")), "OnActivate", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFrmTransactionsViewer", "ClickEvent", async function ClickEvent(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.ne((await $.v(C, "FEvents")), null))) {
    await $.mcall((await $.v(C, "FEvents")), "OnClick", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFrmTransactionsViewer", "CreateEvent", async function CreateEvent(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.ne((await $.v(C, "FEvents")), null))) {
    await $.mcall((await $.v(C, "FEvents")), "OnCreate", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFrmTransactionsViewer", "DblClickEvent", async function DblClickEvent(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.ne((await $.v(C, "FEvents")), null))) {
    await $.mcall((await $.v(C, "FEvents")), "OnDblClick", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFrmTransactionsViewer", "DeactivateEvent", async function DeactivateEvent(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.ne((await $.v(C, "FEvents")), null))) {
    await $.mcall((await $.v(C, "FEvents")), "OnDeactivate", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFrmTransactionsViewer", "DestroyEvent", async function DestroyEvent(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.ne((await $.v(C, "FEvents")), null))) {
    await $.mcall((await $.v(C, "FEvents")), "OnDestroy", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFrmTransactionsViewer", "KeyPressEvent", async function KeyPressEvent(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "key": $.asRef(p1), result: undefined, "tempkey": 0};
  await $.fixArgs(L0, ["sender"]);
  L0["tempkey"] = (await $.call(C, "Smallint", [(await L0["key"].get())]));
  if ($.truthy($.ne((await $.v(C, "FEvents")), null))) {
    await $.stmt((await $.mcall((await $.v(C, "FEvents")), "OnKeyPress", [L0["tempkey"]])));
  }
  await L0["key"].set((await $.call(C, "Char", [L0["tempkey"]])));
  return L0.result;
}, {"params": ["Sender", "Key"], "kind": "procedure", "ptypes": ["TObject", "Char"]});
  U.method("TFrmTransactionsViewer", "PaintEvent", async function PaintEvent(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.ne((await $.v(C, "FEvents")), null))) {
    await $.mcall((await $.v(C, "FEvents")), "OnPaint", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFrmTransactionsViewer", "Set_AutoScroll", async function Set_AutoScroll(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "AutoScroll", L0["value"]);
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["WordBool"]});
  U.method("TFrmTransactionsViewer", "Set_AutoSize", async function Set_AutoSize(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "AutoSize", L0["value"]);
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["WordBool"]});
  U.method("TFrmTransactionsViewer", "Set_AxBorderStyle", async function Set_AxBorderStyle(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "AxBorderStyle", (await $.call(C, "TActiveFormBorderStyle", [L0["value"]])));
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["TxActiveFormBorderStyle"]});
  U.method("TFrmTransactionsViewer", "Set_Caption", async function Set_Caption(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "Caption", (await $.call(C, "TCaption", [L0["value"]])));
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["WideString"]});
  U.method("TFrmTransactionsViewer", "Set_Color", async function Set_Color(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "Color", (await $.call(C, "TColor", [L0["value"]])));
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["OLE_COLOR"]});
  U.method("TFrmTransactionsViewer", "Set_Cursor", async function Set_Cursor(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "Cursor", (await $.call(C, "TCursor", [L0["value"]])));
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["Smallint"]});
  U.method("TFrmTransactionsViewer", "Set_DoubleBuffered", async function Set_DoubleBuffered(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "DoubleBuffered", L0["value"]);
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["WordBool"]});
  U.method("TFrmTransactionsViewer", "Set_DropTarget", async function Set_DropTarget(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "DropTarget", L0["value"]);
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["WordBool"]});
  U.method("TFrmTransactionsViewer", "Set_Enabled", async function Set_Enabled(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "Enabled", L0["value"]);
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["WordBool"]});
  U.method("TFrmTransactionsViewer", "Set_Font", async function Set_Font(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.asRef(p0), result: undefined};
  await $.stmt((await $.call(C, "SetOleFont", [(await $.v(C, "Font")), (await L0["value"].get())])));
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["IFontDisp"]});
  U.method("TFrmTransactionsViewer", "Set_HelpFile", async function Set_HelpFile(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "HelpFile", (await $.call(C, "String", [L0["value"]])));
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["WideString"]});
  U.method("TFrmTransactionsViewer", "Set_KeyPreview", async function Set_KeyPreview(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "KeyPreview", L0["value"]);
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["WordBool"]});
  U.method("TFrmTransactionsViewer", "Set_PixelsPerInch", async function Set_PixelsPerInch(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "PixelsPerInch", L0["value"]);
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["Integer"]});
  U.method("TFrmTransactionsViewer", "Set_PrintScale", async function Set_PrintScale(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "PrintScale", (await $.call(C, "TPrintScale", [L0["value"]])));
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["TxPrintScale"]});
  U.method("TFrmTransactionsViewer", "Set_Scaled", async function Set_Scaled(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "Scaled", L0["value"]);
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["WordBool"]});
  U.method("TFrmTransactionsViewer", "Set_Visible", async function Set_Visible(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "Visible", L0["value"]);
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["WordBool"]});
  U.func("DesktopPath", async function DesktopPath(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: '', "zpath": $.sarr()};
  await $.stmt((await $.call(C, "SHGetFolderPath", [0, (await $.v(C, "CSIDL_DESKTOP")), 0, (await $.v(C, "SHGFP_TYPE_CURRENT")), L0["zpath"]])));
  L0["result"] = (L0["zpath"]);
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TFrmTransactionsViewer", "Button2Click", async function Button2Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "excelapp": null, "sheet": null, "i": 0, "j": 0, "index": 0, "d1": 0, "d2": 0};
  await $.fixArgs(L0, ["sender"]);
  await $.mset((await $.v(C, "QExport4Dialog1")), "FileName", $.add((await $.v(C, "DesktopPath")), "\\Analiz"));
  await $.mset((await $.v(C, "QExport4Dialog1")), "DataSet", (await $.mv((await $.v(C, "TransDataModule")), "Transactions")));
  await $.mset((await $.v(C, "QExport4Dialog1")), "ShowFile", true);
  await $.mcall((await $.v(C, "QExport4Dialog1")), "Execute", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFrmTransactionsViewer", "Button3Click", async function Button3Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "pdf": null, "path": ''};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy((await $.and_(($.eq((await $.mv((await $.mv((await $.v(C, "TransDataModule")), "Transactions")), "Active")), true)), async () => ($.gt((await $.mv((await $.mv((await $.v(C, "TransDataModule")), "Transactions")), "RecordCount")), 0)))))) {
    {
      const $t1 = (await $.v(C, "TransactionsRpt"));
      await $.stmt($.wcall([$t1], "Preview", [], C));
    }
  }
  L0["pdf"] = (await $.mcall((await $.v(C, "TQRPDFDocumentFilter")), "Create", [$.add((await $.v(C, "DesktopPath")), "\\Analiz.pdf")]));
  L0["path"] = $.add((await $.v(C, "DesktopPath")), "\\Analiz.pdf");
  await $.stmt((await $.mcall((await $.v(C, "TransactionsRpt")), "ExportToFilter", [L0["pdf"]])));
  await $.stmt((await $.call(C, "ShellExecute", [(await $.v(C, "Handle")), "open", (await $.call(C, "PChar", [L0["path"]])), null, null, (await $.v(C, "SW_SHOWNORMAL"))])));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFrmTransactionsViewer", "SetAddress", async function SetAddress(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: undefined};
  if ($.truthy($.not(((await $.call(C, "Assigned", [(await $.v(C, "OperationIDs"))])))))) {
    await $.set(C, "OperationIDs", (await $.mv((await $.v(C, "TStringList")), "Create")));
  } else {
    await $.mcall((await $.v(C, "OperationIDs")), "Clear", []);
  }
  if ($.truthy($.not(((await $.call(C, "Assigned", [(await $.v(C, "CurrencyIDs"))])))))) {
    await $.set(C, "CurrencyIDs", (await $.mv((await $.v(C, "TStringList")), "Create")));
  } else {
    await $.mcall((await $.v(C, "CurrencyIDs")), "Clear", []);
  }
  await $.mset((await $.v(C, "CBOperationTypes")), "Tag", (await $.call(C, "Integer", [(await $.ref_(C, "OperationIDs"))])));
  await $.mset((await $.v(C, "CLBCurrency")), "Tag", (await $.call(C, "Integer", [(await $.ref_(C, "CurrencyIDs"))])));
  return L0.result;
}, {"params": [], "kind": "procedure", "ptypes": []});
  U.method("TFrmTransactionsViewer", "GetFieldValue", async function GetFieldValue(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: undefined, "d1": 0, "d2": 0};
  L0["d1"] = (await $.call(C, "trunc", [(await $.mv((await $.v(C, "DateTimePicker1")), "DateTime"))]));
  L0["d2"] = (await $.call(C, "trunc", [(await $.mv((await $.v(C, "DateTimePicker2")), "DateTime"))]));
  {
    const $t2 = (await $.mv((await $.v(C, "TransDataModule")), "TransactionsSUM"));
    await $.stmt($.wcall([$t2], "CloseAll", [], C));
    await $.stmt((await $.wcall([$t2], "SetVariable", ["P_BEGINDATE", (await $.wv([$t2], "d1", { get: async () => L0["d1"], set: async (v) => { L0["d1"] = v; }, local: true }, false))], C)));
    await $.stmt((await $.wcall([$t2], "SetVariable", ["P_ENDDATE", (await $.wv([$t2], "d2", { get: async () => L0["d2"], set: async (v) => { L0["d2"] = v; }, local: true }, false))], C)));
    await $.stmt((await $.wcall([$t2], "SetVariable", ["p_view_transac", (await $.mv((await $.wv([$t2], "rg3", C, false)), "ItemIndex"))], C)));
    if ($.truthy($.eq((await $.mv((await $.wv([$t2], "EditDebt", C, false)), "Text")), ""))) {
      await $.stmt((await $.wcall([$t2], "SetVariable", ["p_dbalcn", (-(1))], C)));
    }
    if ($.truthy($.eq((await $.mv((await $.wv([$t2], "EditCredit", C, false)), "Text")), ""))) {
      await $.stmt((await $.wcall([$t2], "SetVariable", ["p_kbalcn", (-(1))], C)));
    }
    if ($.truthy($.ne((await $.wcall([$t2], "Trim", [(await $.mv((await $.wv([$t2], "EditDebt", C, false)), "Text"))], C)), ""))) {
      { const $t3 = (await $.mv((await $.wv([$t2], "RG1", C, false)), "ItemIndex"));
        if ($.eq($t3, 0)) {
          await $.stmt((await $.wcall([$t2], "SetVariable", ["p_dbalcn", 0], C)));
        }
        else if ($.eq($t3, 1)) {
          await $.stmt((await $.wcall([$t2], "SetVariable", ["p_dbalcn", 1], C)));
        }
        else if ($.eq($t3, 2)) {
          await $.stmt((await $.wcall([$t2], "SetVariable", ["p_dbalcn", 2], C)));
        }
        else if ($.eq($t3, 3)) {
          await $.stmt((await $.wcall([$t2], "SetVariable", ["p_dbalcn", 3], C)));
        }
      }
    }
    if ($.truthy($.ne((await $.wcall([$t2], "Trim", [(await $.mv((await $.wv([$t2], "EditCredit", C, false)), "Text"))], C)), ""))) {
      { const $t4 = (await $.mv((await $.wv([$t2], "RG2", C, false)), "ItemIndex"));
        if ($.eq($t4, 0)) {
          await $.stmt((await $.wcall([$t2], "SetVariable", ["p_kbalcn", 0], C)));
        }
        else if ($.eq($t4, 1)) {
          await $.stmt((await $.wcall([$t2], "SetVariable", ["p_kbalcn", 1], C)));
        }
        else if ($.eq($t4, 2)) {
          await $.stmt((await $.wcall([$t2], "SetVariable", ["p_kbalcn", 2], C)));
        }
        else if ($.eq($t4, 3)) {
          await $.stmt((await $.wcall([$t2], "SetVariable", ["p_kbalcn", 3], C)));
        }
      }
    }
    await $.stmt((await $.wcall([$t2], "SetVariable", ["p_debet", (await $.mv((await $.wv([$t2], "EditDebt", C, false)), "Text"))], C)));
    await $.stmt((await $.wcall([$t2], "SetVariable", ["p_kredet", (await $.mv((await $.wv([$t2], "EditCredit", C, false)), "Text"))], C)));
    await $.stmt($.wcall([$t2], "Open", [], C));
    await $.mset((await $.wv([$t2], "EditSumAmount", C, false)), "Text", (await $.wcall([$t2], "CurrToStrF", [(await $.mv((await $.wcall([$t2], "FieldByName", ["DAMOUNT"], C)), "AsCurrency")), (await $.wv([$t2], "ffCurrency", C, false)), 2], C)));
    await $.mset((await $.wv([$t2], "EditSumAmountC", C, false)), "Text", (await $.wcall([$t2], "CurrToStrF", [(await $.mv((await $.wcall([$t2], "FieldByName", ["CAmount"], C)), "AsCurrency")), (await $.wv([$t2], "ffCurrency", C, false)), 2], C)));
    await $.mset((await $.wv([$t2], "EditSumLAmount", C, false)), "Text", (await $.wcall([$t2], "CurrToStrF", [(await $.mv((await $.wcall([$t2], "FieldByName", ["LAmount"], C)), "AsCurrency")), (await $.wv([$t2], "ffCurrency", C, false)), 2], C)));
  }
  return L0.result;
}, {"params": [], "kind": "procedure", "ptypes": []});
  U.method("TFrmTransactionsViewer", "ActiveFormCreate", async function ActiveFormCreate(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.set(C, "FrmTransactionsViewer", Self);
  await $.set(C, "TransDataModule", (await $.mcall((await $.v(C, "TTransDataModule")), "Create", [Self])));
  await $.set(C, "TransactionsRpt", (await $.mcall((await $.v(C, "TTransactionsRpt")), "Create", [Self])));
  await $.mset((await $.v(C, "DateTimePicker1")), "DateTime", (await $.mv((await $.mcall((await $.mv((await $.v(C, "TransDataModule")), "SYSDAT")), "FieldByName", ["TEK_DAT"])), "AsDateTime")));
  await $.mset((await $.v(C, "DateTimePicker2")), "DateTime", (await $.mv((await $.mcall((await $.mv((await $.v(C, "TransDataModule")), "SYSDAT")), "FieldByName", ["TEK_DAT"])), "AsDateTime")));
  await $.set(C, "OperationIDs", (await $.mv((await $.v(C, "TStringList")), "Create")));
  await $.mcall((await $.v(C, "ActionFilter")), "Execute", []);
  await $.stmt($.call(C, "SetAddress", []));
  if ($.truthy($.eq((await $.mv((await $.mcall((await $.mv((await $.v(C, "TransDataModule")), "finfo")), "FieldByName", ["swift"])), "AsString")), "REVAAZ22"))) {
    await $.mset((await $.v(C, "dbgrid1")), "Visible", true);
    await $.mset((await $.v(C, "dbedit1")), "DataSource", (await $.mv((await $.v(C, "TransDataModule")), "INS_DATSRC")));
  } else {
    await $.mset((await $.v(C, "dbgrid1")), "Visible", false);
  }
  await $.stmt((await $.mcall((await $.v(C, "SBTranslateProc")), "TranslateAllComponents", [Self, (await $.mv((await $.v(C, "sboapiDataModule")), "OrPack_SL"))])));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFrmTransactionsViewer", "CBCommitedClick", async function CBCommitedClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.stmt((await $.call(C, "ActionFilterExecute", [L0["sender"]])));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFrmTransactionsViewer", "CBCurrencyClick", async function CBCurrencyClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "dblookup": null, "dblookupname": '', "dblookupno": ''};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t5 = (await $.call(C, "TCheckBox", [L0["sender"]]));
    await $.wset([$t5], "DBLookupNo", (await $.wcall([$t5], "IntToStr", [(await $.wv([$t5], "Tag", C, false))], C)), { get: async () => L0["dblookupno"], set: async (v) => { L0["dblookupno"] = v; }, local: true });
  }
  L0["dblookupname"] = $.add("DBLookup", L0["dblookupno"]);
  L0["dblookup"] = (await $.call(C, "TDBLookupComboBox", [(await $.call(C, "FindComponent", [L0["dblookupname"]]))]));
  if ($.truthy((await $.mv((await $.call(C, "TCheckBox", [L0["sender"]])), "Checked")))) {
    await $.mcall((await $.mv((await $.mv(L0["dblookup"], "ListSource")), "DataSet")), "First", []);
    await $.mset(L0["dblookup"], "KeyValue", (await $.mv((await $.mcall((await $.mv((await $.mv(L0["dblookup"], "ListSource")), "DataSet")), "FieldByName", [(await $.mv(L0["dblookup"], "KeyField"))])), "AsInteger")));
  } else {
    await $.mset(L0["dblookup"], "KeyValue", (-(1)));
  }
  await $.stmt((await $.call(C, "ActionFilterExecute", [L0["sender"]])));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFrmTransactionsViewer", "ActionFilterExecute", async function ActionFilterExecute(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "currencyf": '', "debetfilialf": '', "creditfilialf": '', "operatorf": '', "operationtypef": '', "filterstr": '', "operationstatusf": '', "t_delayed": 0, "t_commited": 0};
  await $.fixArgs(L0, ["sender"]);
  L0["currencyfilter"] = "((DCurrency<>%d)AND(KCurrency<>%d))";
  L0["debetfilialfilter"] = "(DebetFilial=%d)";
  L0["creditfilialfilter"] = "(CreditFilial=%d)";
  L0["operatorfilter"] = "(Operator=%d)";
  L0["operationtypefilter"] = "(OperationType<>%d)";
  L0["operationstatus"] = "((Status=%d)or(Status=%d))";
  L0["checkfiltred"] = $.fn(async function CheckFiltred(p0, p1, p2) {
  const L1 = {"ischecked": $.copyArg(p0), "filterstr": $.copyArg(p1), "args": $.copyArg(p2), result: ''};
  await $.fixArgs(L1, ["ischecked", "filterstr", "args"]);
  L1["result"] = "";
  if ($.truthy(L1["ischecked"])) {
    L1["result"] = (await $.call(C, "Format", [L1["filterstr"], L1["args"]]));
  }
  return L1.result;
});
  L0["addboolprefix"] = $.fn(async function AddBoolPrefix(p0) {
  const L1 = {"willadd": $.copyArg(p0), result: ''};
  await $.fixArgs(L1, ["willadd"]);
  L1["result"] = " ";
  if ($.truthy(L1["willadd"])) {
    L1["result"] = " AND ";
  }
  return L1.result;
});
  L0["generatefilter"] = $.fn(async function GenerateFilter(p0, p1, p2) {
  const L1 = {"checklistbox": $.copyArg(p0), "filterconst": $.copyArg(p1), "icount": $.copyArg(p2), result: '', "position": 0, "i": 0, "filter": ''};
  await $.fixArgs(L1, ["checklistbox", "filterconst", "icount"]);
  L1["result"] = "";
  {
    const $t6 = L1["checklistbox"];
    const $t7 = (await $.wv([$t6], "Items", C, false));
    await $.wset([$t6, $t7], "Position", 0, { get: async () => L1["position"], set: async (v) => { L1["position"] = v; }, local: true });
    if ($.truthy($.not(($.gt((await $.wv([$t6, $t7], "Count", C, false)), 0))))) {
      return L1.result;
    }
    if ($.truthy($.not((await $.idx((await $.wv([$t6, $t7], "Checked", C, false)), [0]))))) {
      if ($.truthy($.eq((await $.wv([$t6, $t7], "ICount", { get: async () => L1["icount"], set: async (v) => { L1["icount"] = v; }, local: true }, false)), 1))) {
        await $.wset([$t6, $t7], "Filter", (await $.wcall([$t6, $t7], "Format", [(await $.wv([$t6, $t7], "FilterConst", { get: async () => L1["filterconst"], set: async (v) => { L1["filterconst"] = v; }, local: true }, false)), [(await $.wcall([$t6, $t7], "StrToInt", [(await $.idx((await $.mv((await $.wcall([$t6, $t7], "TStringList", [(await $.wcall([$t6, $t7], "Pointer", [(await $.wv([$t6, $t7], "Tag", C, false))], C))], C)), "Strings")), [0]))], C))]], C)), { get: async () => L1["filter"], set: async (v) => { L1["filter"] = v; }, local: true });
      } else {
        await $.wset([$t6, $t7], "Filter", (await $.wcall([$t6, $t7], "Format", [(await $.wv([$t6, $t7], "FilterConst", { get: async () => L1["filterconst"], set: async (v) => { L1["filterconst"] = v; }, local: true }, false)), [(await $.wcall([$t6, $t7], "StrToInt", [(await $.idx((await $.mv((await $.wcall([$t6, $t7], "TStringList", [(await $.wcall([$t6, $t7], "Pointer", [(await $.wv([$t6, $t7], "Tag", C, false))], C))], C)), "Strings")), [0]))], C)), (await $.wcall([$t6, $t7], "StrToInt", [(await $.idx((await $.mv((await $.wcall([$t6, $t7], "TStringList", [(await $.wcall([$t6, $t7], "Pointer", [(await $.wv([$t6, $t7], "Tag", C, false))], C))], C)), "Strings")), [0]))], C))]], C)), { get: async () => L1["filter"], set: async (v) => { L1["filter"] = v; }, local: true });
      }
    } else {
      await $.wset([$t6, $t7], "Filter", "", { get: async () => L1["filter"], set: async (v) => { L1["filter"] = v; }, local: true });
    }
    { const $t8 = $.sub((await $.mv((await $.wv([$t6, $t7], "Items", C, false)), "Count")), 1);
      await $.wset([$t6, $t7], "i", 1, { get: async () => L1["i"], set: async (v) => { L1["i"] = v; }, local: true });
      let $t9 = true;
      for (;;) {
        if (!$t9) { await $.wset([$t6, $t7], "i", $.succ((await $.wv([$t6, $t7], "i", { get: async () => L1["i"], set: async (v) => { L1["i"] = v; }, local: true }, false)), 1), { get: async () => L1["i"], set: async (v) => { L1["i"] = v; }, local: true }); }
        $t9 = false;
        if (!($.ord((await $.wv([$t6, $t7], "i", { get: async () => L1["i"], set: async (v) => { L1["i"] = v; }, local: true }, false))) <= $.ord($t8))) break;
        if ($.truthy($.not((await $.idx((await $.wv([$t6, $t7], "Checked", C, false)), [(await $.wv([$t6, $t7], "i", { get: async () => L1["i"], set: async (v) => { L1["i"] = v; }, local: true }, false))]))))) {
          if ($.truthy($.eq((await $.wv([$t6, $t7], "ICount", { get: async () => L1["icount"], set: async (v) => { L1["icount"] = v; }, local: true }, false)), 1))) {
            await $.wset([$t6, $t7], "Filter", $.add($.add((await $.wv([$t6, $t7], "Filter", { get: async () => L1["filter"], set: async (v) => { L1["filter"] = v; }, local: true }, false)), (await $.wcall([$t6, $t7], "AddBoolPrefix", [$.not((await $.idx((await $.wv([$t6, $t7], "Checked", C, false)), [(await $.wv([$t6, $t7], "Position", { get: async () => L1["position"], set: async (v) => { L1["position"] = v; }, local: true }, false))])))], { get: async () => L0["addboolprefix"], set: async (v) => { L0["addboolprefix"] = v; }, local: true }))), (await $.wcall([$t6, $t7], "Format", [(await $.wv([$t6, $t7], "FilterConst", { get: async () => L1["filterconst"], set: async (v) => { L1["filterconst"] = v; }, local: true }, false)), [(await $.wcall([$t6, $t7], "StrToInt", [(await $.idx((await $.mv((await $.wcall([$t6, $t7], "TStringList", [(await $.wcall([$t6, $t7], "Pointer", [(await $.wv([$t6, $t7], "Tag", C, false))], C))], C)), "Strings")), [(await $.wv([$t6, $t7], "i", { get: async () => L1["i"], set: async (v) => { L1["i"] = v; }, local: true }, false))]))], C))]], C))), { get: async () => L1["filter"], set: async (v) => { L1["filter"] = v; }, local: true });
          } else {
            await $.wset([$t6, $t7], "Filter", $.add($.add((await $.wv([$t6, $t7], "Filter", { get: async () => L1["filter"], set: async (v) => { L1["filter"] = v; }, local: true }, false)), (await $.wcall([$t6, $t7], "AddBoolPrefix", [$.not((await $.idx((await $.wv([$t6, $t7], "Checked", C, false)), [(await $.wv([$t6, $t7], "Position", { get: async () => L1["position"], set: async (v) => { L1["position"] = v; }, local: true }, false))])))], { get: async () => L0["addboolprefix"], set: async (v) => { L0["addboolprefix"] = v; }, local: true }))), (await $.wcall([$t6, $t7], "Format", [(await $.wv([$t6, $t7], "FilterConst", { get: async () => L1["filterconst"], set: async (v) => { L1["filterconst"] = v; }, local: true }, false)), [(await $.wcall([$t6, $t7], "StrToInt", [(await $.idx((await $.mv((await $.wcall([$t6, $t7], "TStringList", [(await $.wcall([$t6, $t7], "Pointer", [(await $.wv([$t6, $t7], "Tag", C, false))], C))], C)), "Strings")), [(await $.wv([$t6, $t7], "i", { get: async () => L1["i"], set: async (v) => { L1["i"] = v; }, local: true }, false))]))], C)), (await $.wcall([$t6, $t7], "StrToInt", [(await $.idx((await $.mv((await $.wcall([$t6, $t7], "TStringList", [(await $.wcall([$t6, $t7], "Pointer", [(await $.wv([$t6, $t7], "Tag", C, false))], C))], C)), "Strings")), [(await $.wv([$t6, $t7], "i", { get: async () => L1["i"], set: async (v) => { L1["i"] = v; }, local: true }, false))]))], C))]], C))), { get: async () => L1["filter"], set: async (v) => { L1["filter"] = v; }, local: true });
          }
          await $.wset([$t6, $t7], "Position", (await $.wv([$t6, $t7], "i", { get: async () => L1["i"], set: async (v) => { L1["i"] = v; }, local: true }, false)), { get: async () => L1["position"], set: async (v) => { L1["position"] = v; }, local: true });
        }
        await $.tick();
      }
    }
  }
  L1["result"] = L1["filter"];
  return L1.result;
});
  L0["filterstr"] = "";
  L0["operationtypef"] = "";
  L0["t_delayed"] = $.mul((await $.call(C, "Word", [(await $.mv((await $.v(C, "CBDelayed")), "Checked"))])), (await $.mv((await $.v(C, "CBDelayed")), "Tag")));
  L0["t_commited"] = $.mul((await $.call(C, "Word", [(await $.mv((await $.v(C, "CBCommited")), "Checked"))])), (await $.mv((await $.v(C, "CBCommited")), "Tag")));
  L0["debetfilialf"] = (await $.callv(L0["checkfiltred"], [(await $.mv((await $.v(C, "CBDebetFilial")), "Checked")), L0["debetfilialfilter"], [(await $.mv((await $.mcall((await $.mv((await $.mv((await $.v(C, "DBLookup2")), "ListSource")), "DataSet")), "FieldByName", ["ID"])), "AsInteger"))]]));
  L0["creditfilialf"] = (await $.callv(L0["checkfiltred"], [(await $.mv((await $.v(C, "CBCreditFilial")), "Checked")), L0["creditfilialfilter"], [(await $.mv((await $.mcall((await $.mv((await $.mv((await $.v(C, "DBLookup1")), "ListSource")), "DataSet")), "FieldByName", ["ID"])), "AsInteger"))]]));
  L0["operatorf"] = (await $.callv(L0["checkfiltred"], [(await $.mv((await $.v(C, "CBOperator")), "Checked")), L0["operatorfilter"], [(await $.mv((await $.mcall((await $.mv((await $.mv((await $.v(C, "DBLookup3")), "ListSource")), "DataSet")), "FieldByName", ["ID"])), "AsInteger"))]]));
  L0["operationstatusf"] = (await $.callv(L0["checkfiltred"], [true, L0["operationstatus"], [L0["t_delayed"], L0["t_commited"]]]));
  L0["currencyf"] = (await $.callv(L0["generatefilter"], [(await $.v(C, "CLBCurrency")), L0["currencyfilter"], 2]));
  L0["operationtypef"] = (await $.callv(L0["generatefilter"], [(await $.v(C, "CBOperationTypes")), L0["operationtypefilter"], 1]));
  L0["filterstr"] = L0["currencyf"];
  if ($.truthy($.ne(L0["debetfilialf"], ""))) {
    if ($.truthy($.eq(L0["filterstr"], ""))) {
      L0["filterstr"] = L0["debetfilialf"];
    } else {
      L0["filterstr"] = $.add($.add(L0["filterstr"], "AND"), L0["debetfilialf"]);
    }
  }
  if ($.truthy($.ne(L0["creditfilialf"], ""))) {
    if ($.truthy($.eq(L0["filterstr"], ""))) {
      L0["filterstr"] = L0["creditfilialf"];
    } else {
      L0["filterstr"] = $.add($.add(L0["filterstr"], "AND"), L0["creditfilialf"]);
    }
  }
  if ($.truthy($.ne(L0["operatorf"], ""))) {
    if ($.truthy($.eq(L0["filterstr"], ""))) {
      L0["filterstr"] = L0["operatorf"];
    } else {
      L0["filterstr"] = $.add($.add(L0["filterstr"], "AND"), L0["operatorf"]);
    }
  }
  if ($.truthy($.ne(L0["operationtypef"], ""))) {
    if ($.truthy($.eq(L0["filterstr"], ""))) {
      L0["filterstr"] = L0["operationtypef"];
    } else {
      L0["filterstr"] = $.add($.add(L0["filterstr"], "AND"), L0["operationtypef"]);
    }
  }
  if ($.truthy($.ne(L0["operationstatusf"], ""))) {
    if ($.truthy($.eq(L0["filterstr"], ""))) {
      L0["filterstr"] = L0["operationstatusf"];
    } else {
      L0["filterstr"] = $.add($.add(L0["filterstr"], "AND"), L0["operationstatusf"]);
    }
  }
  await $.stmt((await $.mcall((await $.mv((await $.v(C, "TransDataModule")), "Transactions")), "SetVariable", ["p_filter", $.add(" and ", L0["filterstr"])])));
  await $.stmt((await $.mcall((await $.mv((await $.v(C, "TransDataModule")), "Transactions_ins")), "SetVariable", ["p_filter", $.add(" and ", L0["filterstr"])])));
  await $.stmt((await $.mcall((await $.mv((await $.v(C, "TransDataModule")), "TransactionsSUM")), "SetVariable", ["p_filter", $.add(" and  ", L0["filterstr"])])));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFrmTransactionsViewer", "GenerateBalanceFilter", async function GenerateBalanceFilter(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"fieldname": $.copyArg(p0), "balance": $.copyArg(p1), result: ''};
  await $.fixArgs(L0, ["fieldname", "balance"]);
  L0["result"] = $.add($.add($.add($.add($.add($.add(" AND Substr(", L0["fieldname"]), ", 1, "), " Length("), L0["balance"]), ")) = "), L0["balance"]);
  return L0.result;
}, {"params": ["FieldName", "Balance"], "kind": "function", "ptypes": ["String", "String"]});
  U.method("TFrmTransactionsViewer", "BtnOKClick", async function BtnOKClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "d1": 0, "d2": 0};
  await $.fixArgs(L0, ["sender"]);
  await $.mset((await $.v(C, "Screen")), "Cursor", (await $.v(C, "crSQLWait")));
  L0["d1"] = (await $.call(C, "trunc", [(await $.mv((await $.v(C, "DateTimePicker1")), "DateTime"))]));
  L0["d2"] = (await $.call(C, "trunc", [(await $.mv((await $.v(C, "DateTimePicker2")), "DateTime"))]));
  try {
    if ($.truthy($.eq((await $.mv((await $.mcall((await $.mv((await $.v(C, "TransDataModule")), "finfo")), "FieldByName", ["swift"])), "AsString")), "REVAAZ22"))) {
      {
        const $t10 = (await $.mv((await $.v(C, "TransDataModule")), "Transactions_ins"));
        await $.stmt($.wcall([$t10], "CloseAll", [], C));
        await $.stmt((await $.wcall([$t10], "SetVariable", ["P_BEGINDATE", (await $.wv([$t10], "d1", { get: async () => L0["d1"], set: async (v) => { L0["d1"] = v; }, local: true }, false))], C)));
        await $.stmt((await $.wcall([$t10], "SetVariable", ["P_ENDDATE", (await $.wv([$t10], "d2", { get: async () => L0["d2"], set: async (v) => { L0["d2"] = v; }, local: true }, false))], C)));
        await $.stmt((await $.wcall([$t10], "SetVariable", ["p_view_transac", (await $.mv((await $.wv([$t10], "rg3", C, false)), "ItemIndex"))], C)));
        await $.stmt((await $.wcall([$t10], "ActionFilterExecute", [(await $.wv([$t10], "Sender", { get: async () => L0["sender"], set: async (v) => { L0["sender"] = v; }, local: true }, false))], C)));
        if ($.truthy($.eq((await $.mv((await $.wv([$t10], "EditDebt", C, false)), "Text")), ""))) {
          await $.stmt((await $.wcall([$t10], "SetVariable", ["p_dbalcn", (-(1))], C)));
        }
        if ($.truthy($.eq((await $.mv((await $.wv([$t10], "EditCredit", C, false)), "Text")), ""))) {
          await $.stmt((await $.wcall([$t10], "SetVariable", ["p_kbalcn", (-(1))], C)));
        }
        if ($.truthy($.ne((await $.wcall([$t10], "Trim", [(await $.mv((await $.wv([$t10], "EditDebt", C, false)), "Text"))], C)), ""))) {
          { const $t11 = (await $.mv((await $.wv([$t10], "RG1", C, false)), "ItemIndex"));
            if ($.eq($t11, 0)) {
              await $.stmt((await $.wcall([$t10], "SetVariable", ["p_dbalcn", 0], C)));
            }
            else if ($.eq($t11, 1)) {
              await $.stmt((await $.wcall([$t10], "SetVariable", ["p_dbalcn", 1], C)));
            }
            else if ($.eq($t11, 2)) {
              await $.stmt((await $.wcall([$t10], "SetVariable", ["p_dbalcn", 2], C)));
            }
            else if ($.eq($t11, 3)) {
              await $.stmt((await $.wcall([$t10], "SetVariable", ["p_dbalcn", 3], C)));
            }
          }
        }
        if ($.truthy($.ne((await $.wcall([$t10], "Trim", [(await $.mv((await $.wv([$t10], "EditCredit", C, false)), "Text"))], C)), ""))) {
          { const $t12 = (await $.mv((await $.wv([$t10], "RG2", C, false)), "ItemIndex"));
            if ($.eq($t12, 0)) {
              await $.stmt((await $.wcall([$t10], "SetVariable", ["p_kbalcn", 0], C)));
            }
            else if ($.eq($t12, 1)) {
              await $.stmt((await $.wcall([$t10], "SetVariable", ["p_kbalcn", 1], C)));
            }
            else if ($.eq($t12, 2)) {
              await $.stmt((await $.wcall([$t10], "SetVariable", ["p_kbalcn", 2], C)));
            }
            else if ($.eq($t12, 3)) {
              await $.stmt((await $.wcall([$t10], "SetVariable", ["p_kbalcn", 3], C)));
            }
          }
        }
        await $.stmt((await $.wcall([$t10], "SetVariable", ["p_debet", (await $.mv((await $.wv([$t10], "EditDebt", C, false)), "Text"))], C)));
        await $.stmt((await $.wcall([$t10], "SetVariable", ["p_kredet", (await $.mv((await $.wv([$t10], "EditCredit", C, false)), "Text"))], C)));
        await $.mset((await $.wcall([$t10], "FieldByName", ["DEBITOR"], C)), "Size", 28);
        await $.mset((await $.wcall([$t10], "FieldByName", ["KREDITOR"], C)), "Size", 28);
        await $.stmt($.wcall([$t10], "Open", [], C));
        await $.mset((await $.wv([$t10], "Memo1", C, false)), "Text", (await $.mv((await $.mv((await $.mv((await $.wv([$t10], "TransDataModule", C, false)), "Transactions")), "SQL")), "Text")));
      }
      await $.stmt($.call(C, "GetFieldValue", []));
    } else {
      {
        const $t13 = (await $.mv((await $.v(C, "TransDataModule")), "Transactions"));
        await $.stmt($.wcall([$t13], "CloseAll", [], C));
        await $.stmt((await $.wcall([$t13], "SetVariable", ["P_BEGINDATE", (await $.wv([$t13], "d1", { get: async () => L0["d1"], set: async (v) => { L0["d1"] = v; }, local: true }, false))], C)));
        await $.stmt((await $.wcall([$t13], "SetVariable", ["P_ENDDATE", (await $.wv([$t13], "d2", { get: async () => L0["d2"], set: async (v) => { L0["d2"] = v; }, local: true }, false))], C)));
        await $.stmt((await $.wcall([$t13], "SetVariable", ["p_view_transac", (await $.mv((await $.wv([$t13], "rg3", C, false)), "ItemIndex"))], C)));
        await $.stmt((await $.wcall([$t13], "ActionFilterExecute", [(await $.wv([$t13], "Sender", { get: async () => L0["sender"], set: async (v) => { L0["sender"] = v; }, local: true }, false))], C)));
        if ($.truthy($.eq((await $.mv((await $.wv([$t13], "EditDebt", C, false)), "Text")), ""))) {
          await $.stmt((await $.wcall([$t13], "SetVariable", ["p_dbalcn", (-(1))], C)));
        }
        if ($.truthy($.eq((await $.mv((await $.wv([$t13], "EditCredit", C, false)), "Text")), ""))) {
          await $.stmt((await $.wcall([$t13], "SetVariable", ["p_kbalcn", (-(1))], C)));
        }
        if ($.truthy($.ne((await $.wcall([$t13], "Trim", [(await $.mv((await $.wv([$t13], "EditDebt", C, false)), "Text"))], C)), ""))) {
          { const $t14 = (await $.mv((await $.wv([$t13], "RG1", C, false)), "ItemIndex"));
            if ($.eq($t14, 0)) {
              await $.stmt((await $.wcall([$t13], "SetVariable", ["p_dbalcn", 0], C)));
            }
            else if ($.eq($t14, 1)) {
              await $.stmt((await $.wcall([$t13], "SetVariable", ["p_dbalcn", 1], C)));
            }
            else if ($.eq($t14, 2)) {
              await $.stmt((await $.wcall([$t13], "SetVariable", ["p_dbalcn", 2], C)));
            }
            else if ($.eq($t14, 3)) {
              await $.stmt((await $.wcall([$t13], "SetVariable", ["p_dbalcn", 3], C)));
            }
          }
        }
        if ($.truthy($.ne((await $.wcall([$t13], "Trim", [(await $.mv((await $.wv([$t13], "EditCredit", C, false)), "Text"))], C)), ""))) {
          { const $t15 = (await $.mv((await $.wv([$t13], "RG2", C, false)), "ItemIndex"));
            if ($.eq($t15, 0)) {
              await $.stmt((await $.wcall([$t13], "SetVariable", ["p_kbalcn", 0], C)));
            }
            else if ($.eq($t15, 1)) {
              await $.stmt((await $.wcall([$t13], "SetVariable", ["p_kbalcn", 1], C)));
            }
            else if ($.eq($t15, 2)) {
              await $.stmt((await $.wcall([$t13], "SetVariable", ["p_kbalcn", 2], C)));
            }
            else if ($.eq($t15, 3)) {
              await $.stmt((await $.wcall([$t13], "SetVariable", ["p_kbalcn", 3], C)));
            }
          }
        }
        await $.stmt((await $.wcall([$t13], "SetVariable", ["p_debet", (await $.mv((await $.wv([$t13], "EditDebt", C, false)), "Text"))], C)));
        await $.stmt((await $.wcall([$t13], "SetVariable", ["p_kredet", (await $.mv((await $.wv([$t13], "EditCredit", C, false)), "Text"))], C)));
        await $.mset((await $.wcall([$t13], "FieldByName", ["DEBITOR"], C)), "Size", 28);
        await $.mset((await $.wcall([$t13], "FieldByName", ["KREDITOR"], C)), "Size", 28);
        await $.stmt($.wcall([$t13], "Open", [], C));
        await $.mset((await $.wv([$t13], "Memo1", C, false)), "Text", (await $.mv((await $.mv((await $.mv((await $.wv([$t13], "TransDataModule", C, false)), "Transactions")), "SQL")), "Text")));
      }
      await $.stmt($.call(C, "GetFieldValue", []));
    }
  } finally {
    await $.mset((await $.v(C, "Screen")), "Cursor", (await $.v(C, "crDefault")));
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFrmTransactionsViewer", "Button5Click", async function Button5Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mset((await $.v(C, "PanelFilter")), "Visible", $.not((await $.mv((await $.v(C, "PanelFilter")), "Visible"))));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFrmTransactionsViewer", "ActionLoadFiltersExecute", async function ActionLoadFiltersExecute(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mcall((await $.v(C, "CBOperationTypes")), "Clear", []);
  await $.mcall((await $.call(C, "TStringList", [(await $.call(C, "Pointer", [(await $.mv((await $.v(C, "CBOperationTypes")), "Tag"))]))])), "Clear", []);
  await $.mcall((await $.v(C, "CLBCurrency")), "Clear", []);
  await $.mcall((await $.call(C, "TStringList", [(await $.call(C, "Pointer", [(await $.mv((await $.v(C, "CLBCurrency")), "Tag"))]))])), "Clear", []);
  {
    const $t16 = (await $.v(C, "TransDataModule"));
    await $.mcall((await $.wv([$t16], "OperationTypes", C, false)), "Execute", []);
    await $.mcall((await $.wv([$t16], "Currency", C, false)), "Execute", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFrmTransactionsViewer", "CBOperationTypesKeyDown", async function CBOperationTypesKeyDown(Self, p0, p1, p2) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "key": $.asRef(p1), "shift": $.copyArg(p2), result: undefined};
  await $.fixArgs(L0, ["sender", "shift"]);
  if ($.truthy(($.eq((await L0["key"].get()), (await $.v(C, "VK_F5")))))) {
    await $.mcall((await $.v(C, "ActionLoadFilters")), "Execute", []);
  }
  return L0.result;
}, {"params": ["Sender", "Key", "Shift"], "kind": "procedure", "ptypes": ["TObject", "Word", "TShiftState"]});
  U.method("TFrmTransactionsViewer", "CBRejectedClick", async function CBRejectedClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.stmt((await $.call(C, "ActionFilterExecute", [L0["sender"]])));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFrmTransactionsViewer", "TabSheetFilterShow", async function TabSheetFilterShow(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.stmt((await $.call(C, "ActionLoadFiltersExecute", [L0["sender"]])));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFrmTransactionsViewer", "CBDebetFilialClick", async function CBDebetFilialClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "dblookup": null, "dblookupname": '', "dblookupno": ''};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t17 = (await $.call(C, "TCheckBox", [L0["sender"]]));
    await $.wset([$t17], "DBLookupNo", (await $.wcall([$t17], "IntToStr", [(await $.wv([$t17], "Tag", C, false))], C)), { get: async () => L0["dblookupno"], set: async (v) => { L0["dblookupno"] = v; }, local: true });
  }
  L0["dblookupname"] = $.add("DBLookup", L0["dblookupno"]);
  L0["dblookup"] = (await $.call(C, "TDBLookupComboBox", [(await $.call(C, "FindComponent", [L0["dblookupname"]]))]));
  if ($.truthy((await $.mv((await $.call(C, "TCheckBox", [L0["sender"]])), "Checked")))) {
    await $.mcall((await $.mv((await $.mv(L0["dblookup"], "ListSource")), "DataSet")), "First", []);
    await $.mset(L0["dblookup"], "KeyValue", (await $.mv((await $.mcall((await $.mv((await $.mv(L0["dblookup"], "ListSource")), "DataSet")), "FieldByName", [(await $.mv(L0["dblookup"], "KeyField"))])), "AsInteger")));
  } else {
    await $.mset(L0["dblookup"], "KeyValue", (-(1)));
  }
  await $.stmt((await $.call(C, "ActionFilterExecute", [L0["sender"]])));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFrmTransactionsViewer", "CBDelayedClick", async function CBDelayedClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.stmt((await $.call(C, "ActionFilterExecute", [L0["sender"]])));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFrmTransactionsViewer", "MouseWheelHandler", async function MouseWheelHandler(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"message": $.asRef(p0), result: undefined};
  await $.inherited(Self, "TFrmTransactionsViewer", "MouseWheelHandler", null, arguments);
  if ($.truthy((await $.and_(((await $.mv((await $.v(C, "TransactionsViewer")), "Focused"))), async () => $.not(((await $.mv((await $.mv((await $.mv((await $.v(C, "TransactionsViewer")), "DataSource")), "DataSet")), "IsEmpty")))))))) {
    {
      const $t18 = (await $.call(C, "TCMMouseWheel", [(await L0["message"].get())]));
      const $t19 = (await $.mv((await $.mv((await $.wv([$t18], "TransactionsViewer", C, false)), "DataSource")), "DataSet"));
      if ($.truthy($.lt((await $.wv([$t18, $t19], "WheelDelta", C, false)), 0))) {
        await $.stmt($.wcall([$t18, $t19], "Next", [], C));
      } else {
        await $.stmt($.wcall([$t18, $t19], "Prior", [], C));
      }
    }
  }
  return L0.result;
}, {"params": ["Message"], "kind": "procedure", "ptypes": ["TMessage"]});
  U.method("TFrmTransactionsViewer", "TransactionsViewerDrawColumnCell", async function TransactionsViewerDrawColumnCell(Self, p0, p1, p2, p3, p4) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "rect": $.copyArg(p1), "datacol": $.copyArg(p2), "column": $.copyArg(p3), "state": $.copyArg(p4), result: undefined, "w": 0};
  await $.fixArgs(L0, ["sender", "rect", "datacol", "column", "state"]);
  return L0.result;
}, {"params": ["Sender", "Rect", "DataCol", "Column", "State"], "kind": "procedure", "ptypes": ["TObject", "TRect", "Integer", "TColumn", "TGridDrawState"]});
  U.method("TFrmTransactionsViewer", "TransactionsViewerTitleClick", async function TransactionsViewerTitleClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"column": $.copyArg(p0), result: undefined, "d1": 0, "d2": 0, "titlename": ''};
  await $.fixArgs(L0, ["column"]);
  if ($.truthy((await $.mv((await $.mv((await $.mv((await $.v(C, "TransactionsViewer")), "DataSource")), "DataSet")), "IsEmpty")))) {
    return L0.result;
  }
  await $.mset((await $.v(C, "Screen")), "Cursor", (await $.v(C, "crSQLWait")));
  L0["titlename"] = (await $.mv(L0["column"], "FieldName"));
  try {
    {
      const $t20 = (await $.mv((await $.v(C, "TransDataModule")), "Transactions"));
      await $.stmt((await $.wcall([$t20], "SetVariable", ["p_orderby", (await $.wv([$t20], "TitleName", { get: async () => L0["titlename"], set: async (v) => { L0["titlename"] = v; }, local: true }, false))], C)));
      await $.stmt($.wcall([$t20], "Refresh", [], C));
    }
  } finally {
    await $.mset((await $.v(C, "Screen")), "Cursor", (await $.v(C, "crDefault")));
  }
  return L0.result;
}, {"params": ["Column"], "kind": "procedure", "ptypes": ["TColumn"]});
  U.method("TFrmTransactionsViewer", "CheckBox1Click", async function CheckBox1Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t21 = (await $.v(C, "TransactionsViewer"));
    await $.mset((await $.idx((await $.wv([$t21], "Columns", C, false)), [10])), "Visible", (await $.mv((await $.wcall([$t21], "TCheckBox", [(await $.wv([$t21], "Sender", { get: async () => L0["sender"], set: async (v) => { L0["sender"] = v; }, local: true }, false))], C)), "Checked")));
    await $.mset((await $.idx((await $.wv([$t21], "Columns", C, false)), [10])), "Width", 100);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFrmTransactionsViewer", "CheckBoxTypeClick", async function CheckBoxTypeClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "i": 0};
  await $.fixArgs(L0, ["sender"]);
  { const $t22 = $.sub((await $.mv((await $.v(C, "CBOperationTypes")), "count")), 1);
    L0["i"] = 0;
    let $t23 = true;
    for (;;) {
      if (!$t23) { L0["i"] = $.succ(L0["i"], 1); }
      $t23 = false;
      if (!($.ord(L0["i"]) <= $.ord($t22))) break;
      if ($.truthy($.eq((await $.mv((await $.v(C, "CheckBoxType")), "Checked")), false))) {
        { const $t24 = await $.iset((await $.mv((await $.v(C, "CBOperationTypes")), "Checked")), [L0["i"]], false); if ($t24 !== undefined) { await $.mset((await $.v(C, "CBOperationTypes")), "Checked", $t24); } }
      } else {
        { const $t25 = await $.iset((await $.mv((await $.v(C, "CBOperationTypes")), "Checked")), [L0["i"]], true); if ($t25 !== undefined) { await $.mset((await $.v(C, "CBOperationTypes")), "Checked", $t25); } }
      }
      await $.tick();
    }
  }
  await $.mcall((await $.v(C, "ActionFilter")), "Execute", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFrmTransactionsViewer", "CheckBoxValClick", async function CheckBoxValClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "i": 0};
  await $.fixArgs(L0, ["sender"]);
  { const $t26 = $.sub((await $.mv((await $.v(C, "CLBCurrency")), "count")), 1);
    L0["i"] = 0;
    let $t27 = true;
    for (;;) {
      if (!$t27) { L0["i"] = $.succ(L0["i"], 1); }
      $t27 = false;
      if (!($.ord(L0["i"]) <= $.ord($t26))) break;
      if ($.truthy($.eq((await $.mv((await $.v(C, "CheckBoxVal")), "Checked")), false))) {
        { const $t28 = await $.iset((await $.mv((await $.v(C, "CLBCurrency")), "Checked")), [L0["i"]], false); if ($t28 !== undefined) { await $.mset((await $.v(C, "CLBCurrency")), "Checked", $t28); } }
      } else {
        { const $t29 = await $.iset((await $.mv((await $.v(C, "CLBCurrency")), "Checked")), [L0["i"]], true); if ($t29 !== undefined) { await $.mset((await $.v(C, "CLBCurrency")), "Checked", $t29); } }
      }
      await $.tick();
    }
  }
  await $.mcall((await $.v(C, "ActionFilter")), "Execute", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  return U;
}
