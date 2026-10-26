// Generated from BalanceAnalysImpl.pas by pas2js — do not edit by hand; regenerate instead.
/* eslint-disable */
// @ts-nocheck

export default function define($) {
  const U = $.unit("BalanceAnalysImpl", ["Windows", "Messages", "SysUtils", "Classes", "Graphics", "Controls", "Forms", "Dialogs", "ActiveX", "AxCtrls", "BalanceAnalys_TLB", "StdVcl", "ExtCtrls", "ComCtrls", "Buttons", "Grids", "DBGrids", "StdCtrls", "CheckLst", "DBCtrls", "Menus", "ActnList", "ImgList", "ExcelExporter", "Db", "OracleData", "Mask", "ComObj", "ComServ", "DataModuleBalance", "SBStoredProc", "sboapiDataModuleImpl", "SBTranslateProc", "Transctionslist"]);
  const C = [U];
  U.defClass("TFormBalanceAnalys", "TActiveForm", {"panel1": {"name": "Panel1", "type": "TPanel"}, "panel2": {"name": "Panel2", "type": "TPanel"}, "pagecontrol1": {"name": "PageControl1", "type": "TPageControl"}, "tabsheet1": {"name": "TabSheet1", "type": "TTabSheet"}, "panel4": {"name": "Panel4", "type": "TPanel"}, "panel5": {"name": "Panel5", "type": "TPanel"}, "panel6": {"name": "Panel6", "type": "TPanel"}, "splitter2": {"name": "Splitter2", "type": "TSplitter"}, "splitter1": {"name": "Splitter1", "type": "TSplitter"}, "dbgridbalance": {"name": "DBGridBalance", "type": "TDBGrid"}, "dbgridaccount": {"name": "DBGridAccount", "type": "TDBGrid"}, "panel7": {"name": "Panel7", "type": "TPanel"}, "statictext5": {"name": "StaticText5", "type": "TStaticText"}, "panel8": {"name": "Panel8", "type": "TPanel"}, "statictext1": {"name": "StaticText1", "type": "TStaticText"}, "dtpbegindate": {"name": "DTPBeginDate", "type": "TDateTimePicker"}, "dtpenddate": {"name": "DTPEndDate", "type": "TDateTimePicker"}, "cbbranches": {"name": "CBBranches", "type": "TCheckListBox"}, "panel10": {"name": "Panel10", "type": "TPanel"}, "statictext3": {"name": "StaticText3", "type": "TStaticText"}, "panel14": {"name": "Panel14", "type": "TPanel"}, "statictext6": {"name": "StaticText6", "type": "TStaticText"}, "editbalances": {"name": "EditBalances", "type": "TEdit"}, "panel15": {"name": "Panel15", "type": "TPanel"}, "chbcurrency": {"name": "CHBCurrency", "type": "TCheckBox"}, "panel9": {"name": "Panel9", "type": "TPanel"}, "statictext2": {"name": "StaticText2", "type": "TStaticText"}, "dblookup2": {"name": "DBLookup2", "type": "TDBLookupComboBox"}, "panel11": {"name": "Panel11", "type": "TPanel"}, "cboperator": {"name": "CBOperator", "type": "TCheckBox"}, "dblookup3": {"name": "DBLookup3", "type": "TDBLookupComboBox"}, "panel16": {"name": "Panel16", "type": "TPanel"}, "statictext7": {"name": "StaticText7", "type": "TStaticText"}, "cbbalanceview": {"name": "CBBalanceView", "type": "TComboBox"}, "panel17": {"name": "Panel17", "type": "TPanel"}, "statictext8": {"name": "StaticText8", "type": "TStaticText"}, "cbbalancereference": {"name": "CBBalanceReference", "type": "TComboBox"}, "popupmenu": {"name": "PopupMenu", "type": "TPopupMenu"}, "localrefresh": {"name": "LocalRefresh", "type": "TMenuItem"}, "globalrefresh1": {"name": "GlobalRefresh1", "type": "TMenuItem"}, "actionlist": {"name": "ActionList", "type": "TActionList"}, "actionfullrefresh": {"name": "ActionFullRefresh", "type": "TAction"}, "imagelist": {"name": "ImageList", "type": "TImageList"}, "actionexcelexport": {"name": "ActionExcelExport", "type": "TAction"}, "n1": {"name": "N1", "type": "TMenuItem"}, "excelexport1": {"name": "ExcelExport1", "type": "TMenuItem"}, "excelexporter": {"name": "ExcelExporter", "type": "TExcelExporter"}, "panel3": {"name": "Panel3", "type": "TPanel"}, "progressbar": {"name": "ProgressBar", "type": "TProgressBar"}, "button1": {"name": "Button1", "type": "TButton"}, "paneldest": {"name": "PanelDest", "type": "TPanel"}, "dbedit1": {"name": "DBEdit1", "type": "TDBEdit"}, "panel18": {"name": "Panel18", "type": "TPanel"}, "cbaccountname": {"name": "CBAccountName", "type": "TCheckBox"}, "cbtransactionname": {"name": "CBTransactionName", "type": "TCheckBox"}, "panelaccname": {"name": "PanelAccName", "type": "TPanel"}, "dbedit2": {"name": "DBEdit2", "type": "TDBEdit"}, "panel19": {"name": "Panel19", "type": "TPanel"}, "dbtext1": {"name": "DBText1", "type": "TDBText"}, "panelbalancesummary": {"name": "PanelBalanceSummary", "type": "TPanel"}, "dbedit3": {"name": "DBEdit3", "type": "TDBEdit"}, "dbedit4": {"name": "DBEdit4", "type": "TDBEdit"}, "dbedit5": {"name": "DBEdit5", "type": "TDBEdit"}, "dbedit6": {"name": "DBEdit6", "type": "TDBEdit"}, "dbedit7": {"name": "DBEdit7", "type": "TDBEdit"}, "dbedit8": {"name": "DBEdit8", "type": "TDBEdit"}, "label1": {"name": "Label1", "type": "TLabel"}, "memo1": {"name": "Memo1", "type": "TMemo"}, "groupbox2": {"name": "GroupBox2", "type": "TGroupBox"}, "dbgriddebtbal_acc": {"name": "DBGriddebtbal_acc", "type": "TDBGrid"}, "groupbox1": {"name": "GroupBox1", "type": "TGroupBox"}, "dbgrid1credbal_acc": {"name": "DBGrid1credbal_acc", "type": "TDBGrid"}, "dbgridtransaction": {"name": "DBGridTransaction", "type": "TDBGrid"}, "fevents": {"name": "FEvents", "type": "IFormBalanceAnalysEvents"}, "fbegindate": {"name": "FBeginDate", "type": "TDateTime"}, "fenddate": {"name": "FEndDate", "type": "TDateTime"}, "fbalance": {"name": "FBalance", "type": "WideString"}, "faccount": {"name": "FAccount", "type": "WideString"}, "ftransaction": {"name": "FTransaction", "type": "WideString"}, "requiredorderfield": {"name": "RequiredOrderField", "type": "variant"}}, {"begindate": {"name": "BeginDate", "read": "FBeginDate", "write": "SetBeginDate"}, "enddate": {"name": "EndDate", "read": "FEndDate", "write": "SetEndDate"}});
  U.init(async () => {
    U.var_("FormBalanceAnalys", null, "TFormBalanceAnalys");
    U.var_("OperationIDs", null, "TStringList");
    U.var_("CurrencyIDs", null, "TStringList");
    U.var_("DBGrid", null, "TDBGrid");
  });
  U.method("TFormBalanceAnalys", "DefinePropertyPages", async function DefinePropertyPages(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"definepropertypage": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["definepropertypage"]);
  return L0.result;
}, {"params": ["DefinePropertyPage"], "kind": "procedure", "ptypes": ["TDefinePropertyPage"]});
  U.method("TFormBalanceAnalys", "EventSinkChanged", async function EventSinkChanged(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"eventsink": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["eventsink"]);
  await $.set(C, "FEvents", L0["eventsink"]);
  return L0.result;
}, {"params": ["EventSink"], "kind": "procedure", "ptypes": ["IUnknown"]});
  U.method("TFormBalanceAnalys", "Initialize", async function Initialize(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: undefined};
  await $.inherited(Self, "TFormBalanceAnalys", "Initialize", null, arguments);
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
  U.method("TFormBalanceAnalys", "Get_Active", async function Get_Active(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: false};
  L0["result"] = (await $.v(C, "Active"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TFormBalanceAnalys", "Get_AutoScroll", async function Get_AutoScroll(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: false};
  L0["result"] = (await $.v(C, "AutoScroll"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TFormBalanceAnalys", "Get_AutoSize", async function Get_AutoSize(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: false};
  L0["result"] = (await $.v(C, "AutoSize"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TFormBalanceAnalys", "Get_AxBorderStyle", async function Get_AxBorderStyle(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: null};
  L0["result"] = (await $.call(C, "Ord", [(await $.v(C, "AxBorderStyle"))]));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TFormBalanceAnalys", "Get_Caption", async function Get_Caption(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: ''};
  L0["result"] = (await $.call(C, "WideString", [(await $.v(C, "Caption"))]));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TFormBalanceAnalys", "Get_Color", async function Get_Color(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: null};
  L0["result"] = (await $.call(C, "OLE_COLOR", [(await $.v(C, "Color"))]));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TFormBalanceAnalys", "Get_Cursor", async function Get_Cursor(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: 0};
  L0["result"] = (await $.call(C, "Smallint", [(await $.v(C, "Cursor"))]));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TFormBalanceAnalys", "Get_DoubleBuffered", async function Get_DoubleBuffered(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: false};
  L0["result"] = (await $.v(C, "DoubleBuffered"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TFormBalanceAnalys", "Get_DropTarget", async function Get_DropTarget(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: false};
  L0["result"] = (await $.v(C, "DropTarget"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TFormBalanceAnalys", "Get_Enabled", async function Get_Enabled(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: false};
  L0["result"] = (await $.v(C, "Enabled"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TFormBalanceAnalys", "Get_Font", async function Get_Font(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: null};
  await $.stmt((await $.call(C, "GetOleFont", [(await $.v(C, "Font")), L0["result"]])));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TFormBalanceAnalys", "Get_HelpFile", async function Get_HelpFile(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: ''};
  L0["result"] = (await $.call(C, "WideString", [(await $.v(C, "HelpFile"))]));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TFormBalanceAnalys", "Get_KeyPreview", async function Get_KeyPreview(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: false};
  L0["result"] = (await $.v(C, "KeyPreview"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TFormBalanceAnalys", "Get_PixelsPerInch", async function Get_PixelsPerInch(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: 0};
  L0["result"] = (await $.v(C, "PixelsPerInch"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TFormBalanceAnalys", "Get_PrintScale", async function Get_PrintScale(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: null};
  L0["result"] = (await $.call(C, "Ord", [(await $.v(C, "PrintScale"))]));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TFormBalanceAnalys", "Get_Scaled", async function Get_Scaled(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: false};
  L0["result"] = (await $.v(C, "Scaled"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TFormBalanceAnalys", "Get_Visible", async function Get_Visible(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: false};
  L0["result"] = (await $.v(C, "Visible"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TFormBalanceAnalys", "Get_VisibleDockClientCount", async function Get_VisibleDockClientCount(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: 0};
  L0["result"] = (await $.v(C, "VisibleDockClientCount"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TFormBalanceAnalys", "_Set_Font", async function _Set_Font(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.stmt((await $.call(C, "SetOleFont", [(await $.v(C, "Font")), L0["value"]])));
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["IFontDisp"]});
  U.method("TFormBalanceAnalys", "ActivateEvent", async function ActivateEvent(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.ne((await $.v(C, "FEvents")), null))) {
    await $.mcall((await $.v(C, "FEvents")), "OnActivate", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFormBalanceAnalys", "ClickEvent", async function ClickEvent(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.ne((await $.v(C, "FEvents")), null))) {
    await $.mcall((await $.v(C, "FEvents")), "OnClick", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFormBalanceAnalys", "CreateEvent", async function CreateEvent(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.ne((await $.v(C, "FEvents")), null))) {
    await $.mcall((await $.v(C, "FEvents")), "OnCreate", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFormBalanceAnalys", "DblClickEvent", async function DblClickEvent(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.ne((await $.v(C, "FEvents")), null))) {
    await $.mcall((await $.v(C, "FEvents")), "OnDblClick", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFormBalanceAnalys", "DeactivateEvent", async function DeactivateEvent(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.ne((await $.v(C, "FEvents")), null))) {
    await $.mcall((await $.v(C, "FEvents")), "OnDeactivate", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFormBalanceAnalys", "DestroyEvent", async function DestroyEvent(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.ne((await $.v(C, "FEvents")), null))) {
    await $.mcall((await $.v(C, "FEvents")), "OnDestroy", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFormBalanceAnalys", "KeyPressEvent", async function KeyPressEvent(Self, p0, p1) {
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
  U.method("TFormBalanceAnalys", "PaintEvent", async function PaintEvent(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.ne((await $.v(C, "FEvents")), null))) {
    await $.mcall((await $.v(C, "FEvents")), "OnPaint", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFormBalanceAnalys", "Set_AutoScroll", async function Set_AutoScroll(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "AutoScroll", L0["value"]);
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["WordBool"]});
  U.method("TFormBalanceAnalys", "Set_AutoSize", async function Set_AutoSize(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "AutoSize", L0["value"]);
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["WordBool"]});
  U.method("TFormBalanceAnalys", "Set_AxBorderStyle", async function Set_AxBorderStyle(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "AxBorderStyle", (await $.call(C, "TActiveFormBorderStyle", [L0["value"]])));
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["TxActiveFormBorderStyle"]});
  U.method("TFormBalanceAnalys", "Set_Caption", async function Set_Caption(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "Caption", (await $.call(C, "TCaption", [L0["value"]])));
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["WideString"]});
  U.method("TFormBalanceAnalys", "Set_Color", async function Set_Color(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "Color", (await $.call(C, "TColor", [L0["value"]])));
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["OLE_COLOR"]});
  U.method("TFormBalanceAnalys", "Set_Cursor", async function Set_Cursor(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "Cursor", (await $.call(C, "TCursor", [L0["value"]])));
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["Smallint"]});
  U.method("TFormBalanceAnalys", "Set_DoubleBuffered", async function Set_DoubleBuffered(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "DoubleBuffered", L0["value"]);
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["WordBool"]});
  U.method("TFormBalanceAnalys", "Set_DropTarget", async function Set_DropTarget(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "DropTarget", L0["value"]);
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["WordBool"]});
  U.method("TFormBalanceAnalys", "Set_Enabled", async function Set_Enabled(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "Enabled", L0["value"]);
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["WordBool"]});
  U.method("TFormBalanceAnalys", "Set_Font", async function Set_Font(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.asRef(p0), result: undefined};
  await $.stmt((await $.call(C, "SetOleFont", [(await $.v(C, "Font")), (await L0["value"].get())])));
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["IFontDisp"]});
  U.method("TFormBalanceAnalys", "Set_HelpFile", async function Set_HelpFile(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "HelpFile", (await $.call(C, "String", [L0["value"]])));
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["WideString"]});
  U.method("TFormBalanceAnalys", "Set_KeyPreview", async function Set_KeyPreview(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "KeyPreview", L0["value"]);
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["WordBool"]});
  U.method("TFormBalanceAnalys", "Set_PixelsPerInch", async function Set_PixelsPerInch(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "PixelsPerInch", L0["value"]);
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["Integer"]});
  U.method("TFormBalanceAnalys", "Set_PrintScale", async function Set_PrintScale(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "PrintScale", (await $.call(C, "TPrintScale", [L0["value"]])));
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["TxPrintScale"]});
  U.method("TFormBalanceAnalys", "Set_Scaled", async function Set_Scaled(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "Scaled", L0["value"]);
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["WordBool"]});
  U.method("TFormBalanceAnalys", "Set_Visible", async function Set_Visible(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "Visible", L0["value"]);
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["WordBool"]});
  U.method("TFormBalanceAnalys", "SetBeginDate", async function SetBeginDate(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "FBeginDate", L0["value"]);
  await $.mset((await $.v(C, "DTPBeginDate")), "DateTime", (await $.call(C, "Int", [L0["value"]])));
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["TDateTime"]});
  U.method("TFormBalanceAnalys", "SetEndDate", async function SetEndDate(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "FEndDate", L0["value"]);
  await $.mset((await $.v(C, "DTPEndDate")), "DateTime", (await $.call(C, "Int", [L0["value"]])));
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["TDateTime"]});
  U.func("Scroll", async function Scroll(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"dbgrid": $.copyArg(p0), "delta": $.copyArg(p1), result: undefined};
  await $.fixArgs(L0, ["dbgrid", "delta"]);
  {
    const $t1 = L0["dbgrid"];
    const $t2 = (await $.wv([$t1], "DataSource", C, false));
    const $t3 = (await $.wv([$t1, $t2], "DataSet", C, false));
    if ($.truthy((await $.wv([$t1, $t2, $t3], "IsEmpty", C, false)))) {
      return L0.result;
    }
    if ($.truthy((await $.wv([$t1, $t2, $t3], "Focused", C, false)))) {
      if ($.truthy($.lt((await $.wv([$t1, $t2, $t3], "Delta", { get: async () => L0["delta"], set: async (v) => { L0["delta"] = v; }, local: true }, false)), 0))) {
        await $.stmt($.wcall([$t1, $t2, $t3], "Next", [], C));
      } else {
        await $.stmt($.wcall([$t1, $t2, $t3], "Prior", [], C));
      }
    }
  }
  return L0.result;
}, {"params": ["DBGrid", "Delta"], "kind": "procedure", "ptypes": ["TDBGrid", "integer"]});
  U.method("TFormBalanceAnalys", "MouseWheelHandler", async function MouseWheelHandler(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"message": $.asRef(p0), result: undefined};
  await $.inherited(Self, "TFormBalanceAnalys", "MouseWheelHandler", null, arguments);
  await $.stmt((await $.call(C, "Scroll", [(await $.v(C, "DBGridBalance")), (await $.mv((await $.call(C, "TCMMouseWheel", [(await L0["message"].get())])), "WheelDelta"))])));
  await $.stmt((await $.call(C, "Scroll", [(await $.v(C, "DBGridAccount")), (await $.mv((await $.call(C, "TCMMouseWheel", [(await L0["message"].get())])), "WheelDelta"))])));
  await $.stmt((await $.call(C, "Scroll", [(await $.v(C, "DBGridTransaction")), (await $.mv((await $.call(C, "TCMMouseWheel", [(await L0["message"].get())])), "WheelDelta"))])));
  return L0.result;
}, {"params": ["Message"], "kind": "procedure", "ptypes": ["TMessage"]});
  U.method("TFormBalanceAnalys", "SetSysDate", async function SetSysDate(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: undefined, "i": 0, "currentdate": 0};
  {
    const $t4 = (await $.mv((await $.v(C, "DataModulBalance")), "SysDat"));
    await $.stmt($.wcall([$t4], "Open", [], C));
    await $.wset([$t4], "CurrentDate", (await $.mv((await $.wcall([$t4], "FieldByName", ["tek_dat"], C)), "AsDateTime")), { get: async () => L0["currentdate"], set: async (v) => { L0["currentdate"] = v; }, local: true });
    await $.stmt($.wcall([$t4], "Close", [], C));
  }
  { const $t5 = $.sub((await $.v(C, "ComponentCount")), 1);
    L0["i"] = 0;
    let $t6 = true;
    for (;;) {
      if (!$t6) { L0["i"] = $.succ(L0["i"], 1); }
      $t6 = false;
      if (!($.ord(L0["i"]) <= $.ord($t5))) break;
      if ($.truthy(($.is_((await $.idx((await $.v(C, "Components")), [L0["i"]])), "TDateTimePicker")))) {
        await $.mset((await $.idx((await $.v(C, "Components")), [L0["i"]])), "DateTime", L0["currentdate"]);
      }
      await $.tick();
    }
  }
  await $.set(C, "BeginDate", L0["currentdate"]);
  await $.set(C, "EndDate", L0["currentdate"]);
  return L0.result;
}, {"params": [], "kind": "procedure", "ptypes": []});
  U.method("TFormBalanceAnalys", "SetAddress", async function SetAddress(Self) {
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
  await $.mset((await $.v(C, "CBBranches")), "Tag", (await $.call(C, "Integer", [(await $.ref_(C, "OperationIDs"))])));
  {
    const $t7 = (await $.v(C, "DataModulBalance"));
    await $.mcall((await $.wv([$t7], "OperationType", C, false)), "Execute", []);
  }
  return L0.result;
}, {"params": [], "kind": "procedure", "ptypes": []});
  U.method("TFormBalanceAnalys", "GetBeginPeriod", async function GetBeginPeriod(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"begindate": $.copyArg(p0), result: 0};
  await $.fixArgs(L0, ["begindate"]);
  {
    const $t8 = (await $.v(C, "DataModulBalance"));
    const $t9 = (await $.wv([$t8], "PeriodData", C, false));
    await $.stmt($.wcall([$t8, $t9], "CloseAll", [], C));
    await $.stmt((await $.wcall([$t8, $t9], "SetVariable", ["BeginDate", (await $.wv([$t8, $t9], "BeginDate", { get: async () => L0["begindate"], set: async (v) => { L0["begindate"] = v; }, local: true }, false))], C)));
    await $.stmt($.wcall([$t8, $t9], "Open", [], C));
    if ($.truthy((await $.mv((await $.wcall([$t8, $t9], "FieldByName", ["BeginPeriod"], C)), "IsNull")))) {
      await $.wset([$t8, $t9], "Result", (await $.wv([$t8, $t9], "BeginDate", { get: async () => L0["begindate"], set: async (v) => { L0["begindate"] = v; }, local: true }, false)), { get: async () => L0["result"], set: async (v) => { L0["result"] = v; }, local: true });
    } else {
      await $.wset([$t8, $t9], "Result", (await $.mv((await $.wcall([$t8, $t9], "FieldByName", ["BeginPeriod"], C)), "AsDateTime")), { get: async () => L0["result"], set: async (v) => { L0["result"] = v; }, local: true });
    }
  }
  return L0.result;
}, {"params": ["BeginDate"], "kind": "function", "ptypes": ["TDateTime"]});
  U.method("TFormBalanceAnalys", "GenerateBranchFilter", async function GenerateBranchFilter(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: '', "condition": '', "i": 0, "icount": 0};
  L0["condition"] = "";
  {
    const $t10 = (await $.v(C, "CBBranches"));
    await $.wset([$t10], "icount", (await $.mv((await $.mv((await $.wv([$t10], "CBBranches", C, false)), "Items")), "Count")), { get: async () => L0["icount"], set: async (v) => { L0["icount"] = v; }, local: true });
    { const $t11 = $.sub((await $.wv([$t10], "icount", { get: async () => L0["icount"], set: async (v) => { L0["icount"] = v; }, local: true }, false)), 1);
      await $.wset([$t10], "i", 0, { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true });
      let $t12 = true;
      for (;;) {
        if (!$t12) { await $.wset([$t10], "i", $.succ((await $.wv([$t10], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false)), 1), { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }); }
        $t12 = false;
        if (!($.ord((await $.wv([$t10], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false))) <= $.ord($t11))) break;
        if ($.truthy((await $.idx((await $.wv([$t10], "Checked", C, false)), [(await $.wv([$t10], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false))])))) {
          if ($.truthy($.eq((await $.wv([$t10], "Condition", { get: async () => L0["condition"], set: async (v) => { L0["condition"] = v; }, local: true }, false)), ""))) {
            await $.wset([$t10], "Condition", ((await $.idx((await $.mv((await $.wcall([$t10], "TStringList", [(await $.wcall([$t10], "Pointer", [(await $.mv((await $.wv([$t10], "CBBranches", C, false)), "Tag"))], C))], C)), "Strings")), [(await $.wv([$t10], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false))]))), { get: async () => L0["condition"], set: async (v) => { L0["condition"] = v; }, local: true });
          } else {
            await $.wset([$t10], "Condition", $.add($.add((await $.wv([$t10], "Condition", { get: async () => L0["condition"], set: async (v) => { L0["condition"] = v; }, local: true }, false)), ","), ((await $.idx((await $.mv((await $.wcall([$t10], "TStringList", [(await $.wcall([$t10], "Pointer", [(await $.mv((await $.wv([$t10], "CBBranches", C, false)), "Tag"))], C))], C)), "Strings")), [(await $.wv([$t10], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false))])))), { get: async () => L0["condition"], set: async (v) => { L0["condition"] = v; }, local: true });
          }
        }
        await $.tick();
      }
    }
  }
  L0["result"] = L0["condition"];
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TFormBalanceAnalys", "BuildBalance", async function BuildBalance(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: undefined, "condition": '', "isforeignbalance": false, "balanceplane": 0};
  L0["condition"] = "";
  L0["isforeignbalance"] = (await $.and_(((await $.mv((await $.v(C, "CHBCurrency")), "Checked"))), async () => ($.eq((await $.mv((await $.v(C, "CBBalanceView")), "ItemIndex")), 0))));
  L0["balanceplane"] = $.add((await $.mv((await $.v(C, "CBBalanceReference")), "ItemIndex")), 1);
  {
    const $t13 = (await $.v(C, "DataModulBalance"));
    const $t14 = (await $.wv([$t13], "Balance", C, false));
    await $.mset((await $.wv([$t13, $t14], "SQL", C, false)), "CommaText", (await $.wv([$t13, $t14], "FBalance", C, false)));
    if ($.truthy(((await $.and_((await $.wcall([$t13, $t14], "WillEnabled", [(await $.wv([$t13, $t14], "CBBranches", C, false))], C)), async () => ($.not((await $.wcall([$t13, $t14], "IsEnabled", [(await $.wv([$t13, $t14], "CBBranches", C, false))], C))))))))) {
      await $.wset([$t13, $t14], "Condition", $.add($.add($.add(" AND Ac.filial in ", "("), (await $.wv([$t13, $t14], "GenerateBranchFilter", C, false))), ")"), { get: async () => L0["condition"], set: async (v) => { L0["condition"] = v; }, local: true });
    }
    if ($.truthy((await $.mv((await $.wv([$t13, $t14], "CHBCurrency", C, false)), "Checked")))) {
      if ($.truthy($.eq((await $.wv([$t13, $t14], "Condition", { get: async () => L0["condition"], set: async (v) => { L0["condition"] = v; }, local: true }, false)), ""))) {
        await $.wset([$t13, $t14], "Condition", $.add(" AND Ac.val_acc =", (await $.mv((await $.mcall((await $.wv([$t13, $t14], "Currency", C, false)), "FieldByName", ["valute"])), "AsString"))), { get: async () => L0["condition"], set: async (v) => { L0["condition"] = v; }, local: true });
      } else {
        await $.wset([$t13, $t14], "Condition", $.add($.add((await $.wv([$t13, $t14], "Condition", { get: async () => L0["condition"], set: async (v) => { L0["condition"] = v; }, local: true }, false)), " AND Ac.val_acc ="), (await $.mv((await $.mcall((await $.wv([$t13, $t14], "Currency", C, false)), "FieldByName", ["valute"])), "AsString"))), { get: async () => L0["condition"], set: async (v) => { L0["condition"] = v; }, local: true });
      }
    }
    if ($.truthy($.ne((await $.wcall([$t13, $t14], "Trim", [(await $.mv((await $.wv([$t13, $t14], "EditBalances", C, false)), "Text"))], C)), ""))) {
      await $.wset([$t13, $t14], "Condition", $.add($.add($.add($.add($.add($.add((await $.wv([$t13, $t14], "Condition", { get: async () => L0["condition"], set: async (v) => { L0["condition"] = v; }, local: true }, false)), " AND "), "(b.bal_cn in ("), (await $.wcall([$t13, $t14], "Trim", [(await $.mv((await $.wv([$t13, $t14], "EditBalances", C, false)), "Text"))], C))), ") or b.accgroup in ("), (await $.wcall([$t13, $t14], "Trim", [(await $.mv((await $.wv([$t13, $t14], "EditBalances", C, false)), "Text"))], C))), "))"), { get: async () => L0["condition"], set: async (v) => { L0["condition"] = v; }, local: true });
    }
    await $.mset((await $.wv([$t13, $t14], "Memo1", C, false)), "Text", (await $.wv([$t13, $t14], "Condition", { get: async () => L0["condition"], set: async (v) => { L0["condition"] = v; }, local: true }, false)));
    if ($.truthy((await $.wv([$t13, $t14], "IsForeignBalance", { get: async () => L0["isforeignbalance"], set: async (v) => { L0["isforeignbalance"] = v; }, local: true }, false)))) {
      { const $t15 = await $.iset((await $.wv([$t13, $t14], "SQL", C, false)), [10], (await $.wcall([$t13, $t14], "Format", [(await $.idx((await $.wv([$t13, $t14], "SQL", C, false)), [10])), [""]], C))); if ($t15 !== undefined) { await $.wset([$t13, $t14], "SQL", $t15, C); } }
      { const $t16 = await $.iset((await $.wv([$t13, $t14], "SQL", C, false)), [17], (await $.wcall([$t13, $t14], "Format", [(await $.idx((await $.wv([$t13, $t14], "SQL", C, false)), [17])), [""]], C))); if ($t16 !== undefined) { await $.wset([$t13, $t14], "SQL", $t16, C); } }
      { const $t17 = await $.iset((await $.wv([$t13, $t14], "SQL", C, false)), [30], (await $.wcall([$t13, $t14], "Format", [(await $.idx((await $.wv([$t13, $t14], "SQL", C, false)), [30])), [""]], C))); if ($t17 !== undefined) { await $.wset([$t13, $t14], "SQL", $t17, C); } }
      { const $t18 = await $.iset((await $.wv([$t13, $t14], "SQL", C, false)), [31], (await $.wcall([$t13, $t14], "Format", [(await $.idx((await $.wv([$t13, $t14], "SQL", C, false)), [31])), [""]], C))); if ($t18 !== undefined) { await $.wset([$t13, $t14], "SQL", $t18, C); } }
      { const $t19 = await $.iset((await $.wv([$t13, $t14], "SQL", C, false)), [41], (await $.wcall([$t13, $t14], "Format", [(await $.idx((await $.wv([$t13, $t14], "SQL", C, false)), [41])), [""]], C))); if ($t19 !== undefined) { await $.wset([$t13, $t14], "SQL", $t19, C); } }
      { const $t20 = await $.iset((await $.wv([$t13, $t14], "SQL", C, false)), [48], (await $.wcall([$t13, $t14], "Format", [(await $.idx((await $.wv([$t13, $t14], "SQL", C, false)), [48])), [""]], C))); if ($t20 !== undefined) { await $.wset([$t13, $t14], "SQL", $t20, C); } }
    } else {
      { const $t21 = await $.iset((await $.wv([$t13, $t14], "SQL", C, false)), [10], (await $.wcall([$t13, $t14], "Format", [(await $.idx((await $.wv([$t13, $t14], "SQL", C, false)), [10])), ["POK_"]], C))); if ($t21 !== undefined) { await $.wset([$t13, $t14], "SQL", $t21, C); } }
      { const $t22 = await $.iset((await $.wv([$t13, $t14], "SQL", C, false)), [17], (await $.wcall([$t13, $t14], "Format", [(await $.idx((await $.wv([$t13, $t14], "SQL", C, false)), [17])), ["POK_"]], C))); if ($t22 !== undefined) { await $.wset([$t13, $t14], "SQL", $t22, C); } }
      { const $t23 = await $.iset((await $.wv([$t13, $t14], "SQL", C, false)), [30], (await $.wcall([$t13, $t14], "Format", [(await $.idx((await $.wv([$t13, $t14], "SQL", C, false)), [30])), ["POK_"]], C))); if ($t23 !== undefined) { await $.wset([$t13, $t14], "SQL", $t23, C); } }
      { const $t24 = await $.iset((await $.wv([$t13, $t14], "SQL", C, false)), [31], (await $.wcall([$t13, $t14], "Format", [(await $.idx((await $.wv([$t13, $t14], "SQL", C, false)), [31])), ["POK_"]], C))); if ($t24 !== undefined) { await $.wset([$t13, $t14], "SQL", $t24, C); } }
      { const $t25 = await $.iset((await $.wv([$t13, $t14], "SQL", C, false)), [41], (await $.wcall([$t13, $t14], "Format", [(await $.idx((await $.wv([$t13, $t14], "SQL", C, false)), [41])), ["POK_"]], C))); if ($t25 !== undefined) { await $.wset([$t13, $t14], "SQL", $t25, C); } }
      { const $t26 = await $.iset((await $.wv([$t13, $t14], "SQL", C, false)), [48], (await $.wcall([$t13, $t14], "Format", [(await $.idx((await $.wv([$t13, $t14], "SQL", C, false)), [48])), ["POK_"]], C))); if ($t26 !== undefined) { await $.wset([$t13, $t14], "SQL", $t26, C); } }
    }
    { const $t27 = await $.iset((await $.wv([$t13, $t14], "SQL", C, false)), [25], (await $.wv([$t13, $t14], "Condition", { get: async () => L0["condition"], set: async (v) => { L0["condition"] = v; }, local: true }, false))); if ($t27 !== undefined) { await $.wset([$t13, $t14], "SQL", $t27, C); } }
    { const $t28 = await $.iset((await $.wv([$t13, $t14], "SQL", C, false)), [35], (await $.wv([$t13, $t14], "Condition", { get: async () => L0["condition"], set: async (v) => { L0["condition"] = v; }, local: true }, false))); if ($t28 !== undefined) { await $.wset([$t13, $t14], "SQL", $t28, C); } }
    { const $t29 = await $.iset((await $.wv([$t13, $t14], "SQL", C, false)), [56], (await $.wv([$t13, $t14], "Condition", { get: async () => L0["condition"], set: async (v) => { L0["condition"] = v; }, local: true }, false))); if ($t29 !== undefined) { await $.wset([$t13, $t14], "SQL", $t29, C); } }
    { const $t30 = await $.iset((await $.wv([$t13, $t14], "SQL", C, false)), [22], (await $.wcall([$t13, $t14], "Format", [(await $.idx((await $.wv([$t13, $t14], "SQL", C, false)), [22])), [(await $.wv([$t13, $t14], "BalancePlane", { get: async () => L0["balanceplane"], set: async (v) => { L0["balanceplane"] = v; }, local: true }, false))]], C))); if ($t30 !== undefined) { await $.wset([$t13, $t14], "SQL", $t30, C); } }
    { const $t31 = await $.iset((await $.wv([$t13, $t14], "SQL", C, false)), [24], (await $.wcall([$t13, $t14], "Format", [(await $.idx((await $.wv([$t13, $t14], "SQL", C, false)), [24])), [(await $.wv([$t13, $t14], "BalancePlane", { get: async () => L0["balanceplane"], set: async (v) => { L0["balanceplane"] = v; }, local: true }, false))]], C))); if ($t31 !== undefined) { await $.wset([$t13, $t14], "SQL", $t31, C); } }
    { const $t32 = await $.iset((await $.wv([$t13, $t14], "SQL", C, false)), [32], (await $.wcall([$t13, $t14], "Format", [(await $.idx((await $.wv([$t13, $t14], "SQL", C, false)), [32])), [(await $.wv([$t13, $t14], "BalancePlane", { get: async () => L0["balanceplane"], set: async (v) => { L0["balanceplane"] = v; }, local: true }, false))]], C))); if ($t32 !== undefined) { await $.wset([$t13, $t14], "SQL", $t32, C); } }
    { const $t33 = await $.iset((await $.wv([$t13, $t14], "SQL", C, false)), [34], (await $.wcall([$t13, $t14], "Format", [(await $.idx((await $.wv([$t13, $t14], "SQL", C, false)), [34])), [(await $.wv([$t13, $t14], "BalancePlane", { get: async () => L0["balanceplane"], set: async (v) => { L0["balanceplane"] = v; }, local: true }, false))]], C))); if ($t33 !== undefined) { await $.wset([$t13, $t14], "SQL", $t33, C); } }
    { const $t34 = await $.iset((await $.wv([$t13, $t14], "SQL", C, false)), [53], (await $.wcall([$t13, $t14], "Format", [(await $.idx((await $.wv([$t13, $t14], "SQL", C, false)), [53])), [(await $.wv([$t13, $t14], "BalancePlane", { get: async () => L0["balanceplane"], set: async (v) => { L0["balanceplane"] = v; }, local: true }, false))]], C))); if ($t34 !== undefined) { await $.wset([$t13, $t14], "SQL", $t34, C); } }
    { const $t35 = await $.iset((await $.wv([$t13, $t14], "SQL", C, false)), [55], (await $.wcall([$t13, $t14], "Format", [(await $.idx((await $.wv([$t13, $t14], "SQL", C, false)), [55])), [(await $.wv([$t13, $t14], "BalancePlane", { get: async () => L0["balanceplane"], set: async (v) => { L0["balanceplane"] = v; }, local: true }, false))]], C))); if ($t35 !== undefined) { await $.wset([$t13, $t14], "SQL", $t35, C); } }
    await $.stmt($.wcall([$t13, $t14], "CloseAll", [], C));
    await $.stmt((await $.wcall([$t13, $t14], "SetVariable", ["BeginPeriod", (await $.wcall([$t13, $t14], "GetBeginPeriod", [(await $.wv([$t13, $t14], "BeginDate", C, false))], C))], C)));
    await $.stmt((await $.wcall([$t13, $t14], "SetVariable", ["BeginDate", (await $.wv([$t13, $t14], "BeginDate", C, false))], C)));
    await $.stmt((await $.wcall([$t13, $t14], "SetVariable", ["EndDate", (await $.wv([$t13, $t14], "EndDate", C, false))], C)));
    await $.stmt($.wcall([$t13, $t14], "Open", [], C));
  }
  return L0.result;
}, {"params": [], "kind": "procedure", "ptypes": []});
  U.method("TFormBalanceAnalys", "BuildAccount", async function BuildAccount(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: undefined, "condition": '', "isforeignbalance": false, "balanceplane": 0};
  L0["condition"] = "";
  L0["isforeignbalance"] = (await $.and_(((await $.mv((await $.v(C, "CHBCurrency")), "Checked"))), async () => ($.eq((await $.mv((await $.v(C, "CBBalanceView")), "ItemIndex")), 0))));
  L0["balanceplane"] = $.add((await $.mv((await $.v(C, "CBBalanceReference")), "ItemIndex")), 1);
  {
    const $t36 = (await $.v(C, "DataModulBalance"));
    const $t37 = (await $.wv([$t36], "Account", C, false));
    await $.mset((await $.wv([$t36, $t37], "SQL", C, false)), "CommaText", (await $.wv([$t36, $t37], "FAccount", C, false)));
    if ($.truthy(((await $.and_((await $.wcall([$t36, $t37], "WillEnabled", [(await $.wv([$t36, $t37], "CBBranches", C, false))], C)), async () => ($.not((await $.wcall([$t36, $t37], "IsEnabled", [(await $.wv([$t36, $t37], "CBBranches", C, false))], C))))))))) {
      await $.wset([$t36, $t37], "Condition", $.add($.add($.add(" RestForLastPeriod.BranchID in ", "("), (await $.wv([$t36, $t37], "GenerateBranchFilter", C, false))), ") AND"), { get: async () => L0["condition"], set: async (v) => { L0["condition"] = v; }, local: true });
    }
    if ($.truthy((await $.mv((await $.wv([$t36, $t37], "CHBCurrency", C, false)), "Checked")))) {
      if ($.truthy($.eq((await $.wv([$t36, $t37], "Condition", { get: async () => L0["condition"], set: async (v) => { L0["condition"] = v; }, local: true }, false)), ""))) {
        await $.wset([$t36, $t37], "Condition", $.add($.add(" RestForLastPeriod.CurrencyID =", (await $.mv((await $.mcall((await $.wv([$t36, $t37], "Currency", C, false)), "FieldByName", ["valute"])), "AsString"))), " AND "), { get: async () => L0["condition"], set: async (v) => { L0["condition"] = v; }, local: true });
      } else {
        await $.wset([$t36, $t37], "Condition", $.add($.add($.add((await $.wv([$t36, $t37], "Condition", { get: async () => L0["condition"], set: async (v) => { L0["condition"] = v; }, local: true }, false)), " RestForLastPeriod.CurrencyID ="), (await $.mv((await $.mcall((await $.wv([$t36, $t37], "Currency", C, false)), "FieldByName", ["valute"])), "AsString"))), " AND "), { get: async () => L0["condition"], set: async (v) => { L0["condition"] = v; }, local: true });
      }
    }
    if ($.truthy((await $.wv([$t36, $t37], "IsForeignBalance", { get: async () => L0["isforeignbalance"], set: async (v) => { L0["isforeignbalance"] = v; }, local: true }, false)))) {
      { const $t38 = await $.iset((await $.wv([$t36, $t37], "SQL", C, false)), [20], (await $.wcall([$t36, $t37], "Format", [(await $.idx((await $.wv([$t36, $t37], "SQL", C, false)), [20])), [""]], C))); if ($t38 !== undefined) { await $.wset([$t36, $t37], "SQL", $t38, C); } }
      { const $t39 = await $.iset((await $.wv([$t36, $t37], "SQL", C, false)), [26], (await $.wcall([$t36, $t37], "Format", [(await $.idx((await $.wv([$t36, $t37], "SQL", C, false)), [26])), [""]], C))); if ($t39 !== undefined) { await $.wset([$t36, $t37], "SQL", $t39, C); } }
      { const $t40 = await $.iset((await $.wv([$t36, $t37], "SQL", C, false)), [50], (await $.wcall([$t36, $t37], "Format", [(await $.idx((await $.wv([$t36, $t37], "SQL", C, false)), [50])), [""]], C))); if ($t40 !== undefined) { await $.wset([$t36, $t37], "SQL", $t40, C); } }
      { const $t41 = await $.iset((await $.wv([$t36, $t37], "SQL", C, false)), [56], (await $.wcall([$t36, $t37], "Format", [(await $.idx((await $.wv([$t36, $t37], "SQL", C, false)), [56])), [""]], C))); if ($t41 !== undefined) { await $.wset([$t36, $t37], "SQL", $t41, C); } }
      { const $t42 = await $.iset((await $.wv([$t36, $t37], "SQL", C, false)), [76], (await $.wcall([$t36, $t37], "Format", [(await $.idx((await $.wv([$t36, $t37], "SQL", C, false)), [76])), [""]], C))); if ($t42 !== undefined) { await $.wset([$t36, $t37], "SQL", $t42, C); } }
      { const $t43 = await $.iset((await $.wv([$t36, $t37], "SQL", C, false)), [77], (await $.wcall([$t36, $t37], "Format", [(await $.idx((await $.wv([$t36, $t37], "SQL", C, false)), [77])), [""]], C))); if ($t43 !== undefined) { await $.wset([$t36, $t37], "SQL", $t43, C); } }
    } else {
      { const $t44 = await $.iset((await $.wv([$t36, $t37], "SQL", C, false)), [20], (await $.wcall([$t36, $t37], "Format", [(await $.idx((await $.wv([$t36, $t37], "SQL", C, false)), [20])), ["POK_"]], C))); if ($t44 !== undefined) { await $.wset([$t36, $t37], "SQL", $t44, C); } }
      { const $t45 = await $.iset((await $.wv([$t36, $t37], "SQL", C, false)), [26], (await $.wcall([$t36, $t37], "Format", [(await $.idx((await $.wv([$t36, $t37], "SQL", C, false)), [26])), ["POK_"]], C))); if ($t45 !== undefined) { await $.wset([$t36, $t37], "SQL", $t45, C); } }
      { const $t46 = await $.iset((await $.wv([$t36, $t37], "SQL", C, false)), [50], (await $.wcall([$t36, $t37], "Format", [(await $.idx((await $.wv([$t36, $t37], "SQL", C, false)), [50])), ["POK_"]], C))); if ($t46 !== undefined) { await $.wset([$t36, $t37], "SQL", $t46, C); } }
      { const $t47 = await $.iset((await $.wv([$t36, $t37], "SQL", C, false)), [56], (await $.wcall([$t36, $t37], "Format", [(await $.idx((await $.wv([$t36, $t37], "SQL", C, false)), [56])), ["POK_"]], C))); if ($t47 !== undefined) { await $.wset([$t36, $t37], "SQL", $t47, C); } }
      { const $t48 = await $.iset((await $.wv([$t36, $t37], "SQL", C, false)), [76], (await $.wcall([$t36, $t37], "Format", [(await $.idx((await $.wv([$t36, $t37], "SQL", C, false)), [76])), ["POK_"]], C))); if ($t48 !== undefined) { await $.wset([$t36, $t37], "SQL", $t48, C); } }
      { const $t49 = await $.iset((await $.wv([$t36, $t37], "SQL", C, false)), [77], (await $.wcall([$t36, $t37], "Format", [(await $.idx((await $.wv([$t36, $t37], "SQL", C, false)), [77])), ["POK_"]], C))); if ($t49 !== undefined) { await $.wset([$t36, $t37], "SQL", $t49, C); } }
    }
    { const $t50 = await $.iset((await $.wv([$t36, $t37], "SQL", C, false)), [34], (await $.wcall([$t36, $t37], "Format", [(await $.idx((await $.wv([$t36, $t37], "SQL", C, false)), [34])), [(await $.wv([$t36, $t37], "BalancePlane", { get: async () => L0["balanceplane"], set: async (v) => { L0["balanceplane"] = v; }, local: true }, false))]], C))); if ($t50 !== undefined) { await $.wset([$t36, $t37], "SQL", $t50, C); } }
    { const $t51 = await $.iset((await $.wv([$t36, $t37], "SQL", C, false)), [37], (await $.wcall([$t36, $t37], "Format", [(await $.idx((await $.wv([$t36, $t37], "SQL", C, false)), [37])), [(await $.wv([$t36, $t37], "BalancePlane", { get: async () => L0["balanceplane"], set: async (v) => { L0["balanceplane"] = v; }, local: true }, false))]], C))); if ($t51 !== undefined) { await $.wset([$t36, $t37], "SQL", $t51, C); } }
    { const $t52 = await $.iset((await $.wv([$t36, $t37], "SQL", C, false)), [64], (await $.wcall([$t36, $t37], "Format", [(await $.idx((await $.wv([$t36, $t37], "SQL", C, false)), [64])), [(await $.wv([$t36, $t37], "BalancePlane", { get: async () => L0["balanceplane"], set: async (v) => { L0["balanceplane"] = v; }, local: true }, false))]], C))); if ($t52 !== undefined) { await $.wset([$t36, $t37], "SQL", $t52, C); } }
    { const $t53 = await $.iset((await $.wv([$t36, $t37], "SQL", C, false)), [67], (await $.wcall([$t36, $t37], "Format", [(await $.idx((await $.wv([$t36, $t37], "SQL", C, false)), [67])), [(await $.wv([$t36, $t37], "BalancePlane", { get: async () => L0["balanceplane"], set: async (v) => { L0["balanceplane"] = v; }, local: true }, false))]], C))); if ($t53 !== undefined) { await $.wset([$t36, $t37], "SQL", $t53, C); } }
    { const $t54 = await $.iset((await $.wv([$t36, $t37], "SQL", C, false)), [81], (await $.wcall([$t36, $t37], "Format", [(await $.idx((await $.wv([$t36, $t37], "SQL", C, false)), [81])), [(await $.wv([$t36, $t37], "BalancePlane", { get: async () => L0["balanceplane"], set: async (v) => { L0["balanceplane"] = v; }, local: true }, false))]], C))); if ($t54 !== undefined) { await $.wset([$t36, $t37], "SQL", $t54, C); } }
    { const $t55 = await $.iset((await $.wv([$t36, $t37], "SQL", C, false)), [84], (await $.wcall([$t36, $t37], "Format", [(await $.idx((await $.wv([$t36, $t37], "SQL", C, false)), [84])), [(await $.wv([$t36, $t37], "BalancePlane", { get: async () => L0["balanceplane"], set: async (v) => { L0["balanceplane"] = v; }, local: true }, false))]], C))); if ($t55 !== undefined) { await $.wset([$t36, $t37], "SQL", $t55, C); } }
    { const $t56 = await $.iset((await $.wv([$t36, $t37], "SQL", C, false)), [91], (await $.wv([$t36, $t37], "Condition", { get: async () => L0["condition"], set: async (v) => { L0["condition"] = v; }, local: true }, false))); if ($t56 !== undefined) { await $.wset([$t36, $t37], "SQL", $t56, C); } }
    await $.stmt($.wcall([$t36, $t37], "CloseAll", [], C));
    await $.stmt((await $.wcall([$t36, $t37], "SetVariable", ["BeginPeriod", (await $.wcall([$t36, $t37], "GetBeginPeriod", [(await $.wv([$t36, $t37], "BeginDate", C, false))], C))], C)));
    await $.stmt((await $.wcall([$t36, $t37], "SetVariable", ["BeginDate", (await $.wv([$t36, $t37], "BeginDate", C, false))], C)));
    await $.stmt((await $.wcall([$t36, $t37], "SetVariable", ["EndDate", (await $.wv([$t36, $t37], "EndDate", C, false))], C)));
    await $.stmt($.wcall([$t36, $t37], "Open", [], C));
  }
  return L0.result;
}, {"params": [], "kind": "procedure", "ptypes": []});
  U.method("TFormBalanceAnalys", "debtBuildTransaction", async function debtBuildTransaction(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: undefined, "condition": ''};
  L0["buildfilter"] = $.fn(async function BuildFilter(p0, p1, p2) {
  const L1 = {"ischecked": $.copyArg(p0), "filterstr": $.copyArg(p1), "args": $.copyArg(p2), result: ''};
  await $.fixArgs(L1, ["ischecked", "filterstr", "args"]);
  L1["result"] = "";
  if ($.truthy(L1["ischecked"])) {
    L1["result"] = (await $.call(C, "Format", [L1["filterstr"], L1["args"]]));
  }
  return L1.result;
});
  L0["condition"] = "";
  {
    const $t57 = (await $.v(C, "DataModulBalance"));
    const $t58 = (await $.wv([$t57], "debtTransaction", C, false));
    await $.mset((await $.wv([$t57, $t58], "SQL", C, false)), "CommaText", (await $.wv([$t57, $t58], "FTransaction", C, false)));
    { const $t59 = await $.iset((await $.wv([$t57, $t58], "SQL", C, false)), [16], (await $.wcall([$t57, $t58], "BuildFilter", [(await $.mv((await $.wv([$t57, $t58], "CBOperator", C, false)), "Checked")), "t.op_id = %d and ", [(await $.mv((await $.mcall((await $.wv([$t57, $t58], "Operators", C, false)), "FieldByName", ["ID"])), "AsInteger"))]], { get: async () => L0["buildfilter"], set: async (v) => { L0["buildfilter"] = v; }, local: true }))); if ($t59 !== undefined) { await $.wset([$t57, $t58], "SQL", $t59, C); } }
    await $.stmt($.wcall([$t57, $t58], "CloseAll", [], C));
    await $.stmt((await $.wcall([$t57, $t58], "SetVariable", ["BeginDate", (await $.wv([$t57, $t58], "BeginDate", C, false))], C)));
    await $.stmt((await $.wcall([$t57, $t58], "SetVariable", ["EndDate", (await $.wv([$t57, $t58], "EndDate", C, false))], C)));
    await $.stmt($.wcall([$t57, $t58], "Open", [], C));
    await $.mset((await $.wv([$t57, $t58], "memo1", C, false)), "Text", (await $.mv((await $.mv((await $.mv((await $.wv([$t57, $t58], "DataModulBalance", C, false)), "debtTransaction")), "SQL")), "Text")));
  }
  return L0.result;
}, {"params": [], "kind": "procedure", "ptypes": []});
  U.method("TFormBalanceAnalys", "CredbalBuildTransaction", async function CredbalBuildTransaction(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: undefined, "condition": ''};
  L0["condition"] = "";
  {
    const $t60 = (await $.v(C, "DataModulBalance"));
    const $t61 = (await $.wv([$t60], "credbal_acc", C, false));
    await $.stmt($.wcall([$t60, $t61], "CloseAll", [], C));
    await $.stmt((await $.wcall([$t60, $t61], "SetVariable", ["BeginDate", (await $.wv([$t60, $t61], "BeginDate", C, false))], C)));
    await $.stmt((await $.wcall([$t60, $t61], "SetVariable", ["EndDate", (await $.wv([$t60, $t61], "EndDate", C, false))], C)));
    await $.stmt((await $.wcall([$t60, $t61], "SetVariable", ["Kredits", (await $.mv((await $.mcall((await $.mv((await $.mv((await $.wv([$t60, $t61], "DBGridAccount", C, false)), "DataSource")), "DataSet")), "FieldByName", ["ACCOUNTID"])), "AsInteger"))], C)));
    await $.stmt($.wcall([$t60, $t61], "Open", [], C));
    await $.mset((await $.wv([$t60, $t61], "memo1", C, false)), "Text", (await $.mv((await $.mv((await $.mv((await $.wv([$t60, $t61], "DataModulBalance", C, false)), "credbal_acc")), "SQL")), "Text")));
  }
  return L0.result;
}, {"params": [], "kind": "procedure", "ptypes": []});
  U.method("TFormBalanceAnalys", "DebtbalBuildTransaction", async function DebtbalBuildTransaction(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: undefined, "condition": ''};
  L0["condition"] = "";
  {
    const $t62 = (await $.v(C, "DataModulBalance"));
    const $t63 = (await $.wv([$t62], "debtbal_acc", C, false));
    await $.stmt($.wcall([$t62, $t63], "CloseAll", [], C));
    await $.stmt((await $.wcall([$t62, $t63], "SetVariable", ["BeginDate", (await $.wv([$t62, $t63], "BeginDate", C, false))], C)));
    await $.stmt((await $.wcall([$t62, $t63], "SetVariable", ["EndDate", (await $.wv([$t62, $t63], "EndDate", C, false))], C)));
    await $.stmt((await $.wcall([$t62, $t63], "SetVariable", ["debts", (await $.mv((await $.mcall((await $.mv((await $.mv((await $.wv([$t62, $t63], "DBGridAccount", C, false)), "DataSource")), "DataSet")), "FieldByName", ["ACCOUNTID"])), "AsInteger"))], C)));
    await $.stmt($.wcall([$t62, $t63], "Open", [], C));
  }
  return L0.result;
}, {"params": [], "kind": "procedure", "ptypes": []});
  U.method("TFormBalanceAnalys", "CredBuildTransaction", async function CredBuildTransaction(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: undefined, "condition": ''};
  L0["buildfilter"] = $.fn(async function BuildFilter(p0, p1, p2) {
  const L1 = {"ischecked": $.copyArg(p0), "filterstr": $.copyArg(p1), "args": $.copyArg(p2), result: ''};
  await $.fixArgs(L1, ["ischecked", "filterstr", "args"]);
  L1["result"] = "";
  if ($.truthy(L1["ischecked"])) {
    L1["result"] = (await $.call(C, "Format", [L1["filterstr"], L1["args"]]));
  }
  return L1.result;
});
  L0["condition"] = "";
  {
    const $t64 = (await $.v(C, "DataModulBalance"));
    const $t65 = (await $.wv([$t64], "credTransaction", C, false));
    await $.mset((await $.wv([$t64, $t65], "SQL", C, false)), "CommaText", (await $.wv([$t64, $t65], "FTransaction", C, false)));
    { const $t66 = await $.iset((await $.wv([$t64, $t65], "SQL", C, false)), [16], (await $.wcall([$t64, $t65], "BuildFilter", [(await $.mv((await $.wv([$t64, $t65], "CBOperator", C, false)), "Checked")), "t.op_id = %d and ", [(await $.mv((await $.mcall((await $.wv([$t64, $t65], "Operators", C, false)), "FieldByName", ["ID"])), "AsInteger"))]], { get: async () => L0["buildfilter"], set: async (v) => { L0["buildfilter"] = v; }, local: true }))); if ($t66 !== undefined) { await $.wset([$t64, $t65], "SQL", $t66, C); } }
    await $.stmt($.wcall([$t64, $t65], "CloseAll", [], C));
    await $.stmt((await $.wcall([$t64, $t65], "SetVariable", ["BeginDate", (await $.wv([$t64, $t65], "BeginDate", C, false))], C)));
    await $.stmt((await $.wcall([$t64, $t65], "SetVariable", ["EndDate", (await $.wv([$t64, $t65], "EndDate", C, false))], C)));
    await $.stmt($.wcall([$t64, $t65], "Open", [], C));
    await $.mset((await $.wv([$t64, $t65], "memo1", C, false)), "Text", (await $.mv((await $.mv((await $.mv((await $.wv([$t64, $t65], "DataModulBalance", C, false)), "credTransaction")), "SQL")), "Text")));
  }
  return L0.result;
}, {"params": [], "kind": "procedure", "ptypes": []});
  U.method("TFormBalanceAnalys", "BuildTransaction", async function BuildTransaction(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: undefined, "condition": ''};
  L0["buildfilter"] = $.fn(async function BuildFilter(p0, p1, p2) {
  const L1 = {"ischecked": $.copyArg(p0), "filterstr": $.copyArg(p1), "args": $.copyArg(p2), result: ''};
  await $.fixArgs(L1, ["ischecked", "filterstr", "args"]);
  L1["result"] = "";
  if ($.truthy(L1["ischecked"])) {
    L1["result"] = (await $.call(C, "Format", [L1["filterstr"], L1["args"]]));
  }
  return L1.result;
});
  L0["condition"] = "";
  {
    const $t67 = (await $.v(C, "DataModulBalance"));
    const $t68 = (await $.wv([$t67], "Transaction", C, false));
    await $.mset((await $.wv([$t67, $t68], "SQL", C, false)), "CommaText", (await $.wv([$t67, $t68], "FTransaction", C, false)));
    { const $t69 = await $.iset((await $.wv([$t67, $t68], "SQL", C, false)), [16], (await $.wcall([$t67, $t68], "BuildFilter", [(await $.mv((await $.wv([$t67, $t68], "CBOperator", C, false)), "Checked")), "t.op_id = %d and ", [(await $.mv((await $.mcall((await $.wv([$t67, $t68], "Operators", C, false)), "FieldByName", ["ID"])), "AsInteger"))]], { get: async () => L0["buildfilter"], set: async (v) => { L0["buildfilter"] = v; }, local: true }))); if ($t69 !== undefined) { await $.wset([$t67, $t68], "SQL", $t69, C); } }
    await $.stmt($.wcall([$t67, $t68], "CloseAll", [], C));
    await $.stmt((await $.wcall([$t67, $t68], "SetVariable", ["BeginDate", (await $.wv([$t67, $t68], "BeginDate", C, false))], C)));
    await $.stmt((await $.wcall([$t67, $t68], "SetVariable", ["EndDate", (await $.wv([$t67, $t68], "EndDate", C, false))], C)));
    await $.stmt($.wcall([$t67, $t68], "Open", [], C));
    await $.mset((await $.wv([$t67, $t68], "memo1", C, false)), "Text", (await $.mv((await $.mv((await $.mv((await $.wv([$t67, $t68], "DataModulBalance", C, false)), "Transaction")), "SQL")), "Text")));
  }
  return L0.result;
}, {"params": [], "kind": "procedure", "ptypes": []});
  U.method("TFormBalanceAnalys", "ActiveFormCreate", async function ActiveFormCreate(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.set(C, "FormBalanceAnalys", Self);
  await $.set(C, "DataModulBalance", (await $.mcall((await $.v(C, "TDataModulBalance")), "Create", [Self])));
  await $.stmt($.call(C, "SetAddress", []));
  await $.stmt($.call(C, "SetSysDate", []));
  {
    const $t70 = (await $.v(C, "DataModulBalance"));
    await $.wset([$t70], "FBalance", (await $.mv((await $.mv((await $.wv([$t70], "Balance", C, false)), "SQL")), "CommaText")), C);
    await $.wset([$t70], "FAccount", (await $.mv((await $.mv((await $.wv([$t70], "Account", C, false)), "SQL")), "CommaText")), C);
    await $.wset([$t70], "FTransaction", (await $.mv((await $.mv((await $.wv([$t70], "Transaction", C, false)), "SQL")), "CommaText")), C);
  }
  await $.mset((await $.v(C, "CBBalanceView")), "ItemIndex", 0);
  await $.mset((await $.v(C, "CBBalanceReference")), "ItemIndex", 0);
  await $.set(C, "RequiredOrderField", (await $.mcall((await $.mv((await $.v(C, "DataModulBalance")), "Transaction")), "GetVariable", ["Title"])));
  await $.stmt((await $.mcall((await $.v(C, "SBTranslateProc")), "TranslateExchComponents", [Self, (await $.mv((await $.v(C, "sboapiDataModule")), "OrPack_SL"))])));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFormBalanceAnalys", "CBBranchClick", async function CBBranchClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "dblookup": null, "dblookupname": '', "dblookupno": ''};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t71 = (await $.call(C, "TCheckBox", [L0["sender"]]));
    await $.wset([$t71], "DBLookupNo", (await $.wcall([$t71], "IntToStr", [(await $.wv([$t71], "Tag", C, false))], C)), { get: async () => L0["dblookupno"], set: async (v) => { L0["dblookupno"] = v; }, local: true });
  }
  L0["dblookupname"] = $.add("DBLookup", L0["dblookupno"]);
  L0["dblookup"] = (await $.call(C, "TDBLookupComboBox", [(await $.call(C, "FindComponent", [L0["dblookupname"]]))]));
  if ($.truthy((await $.mv((await $.call(C, "TCheckBox", [L0["sender"]])), "Checked")))) {
    await $.mcall((await $.mv((await $.mv(L0["dblookup"], "ListSource")), "DataSet")), "First", []);
    await $.mset(L0["dblookup"], "KeyValue", (await $.mv((await $.mcall((await $.mv((await $.mv(L0["dblookup"], "ListSource")), "DataSet")), "FieldByName", [(await $.mv(L0["dblookup"], "KeyField"))])), "AsInteger")));
  } else {
    await $.mset(L0["dblookup"], "KeyValue", (-(1)));
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFormBalanceAnalys", "DTPBeginDateChange", async function DTPBeginDateChange(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.set(C, "BeginDate", (await $.call(C, "Int", [(await $.mv((L0["sender"]), "DateTime"))])));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFormBalanceAnalys", "DTPEndDateChange", async function DTPEndDateChange(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.set(C, "EndDate", (await $.call(C, "Int", [(await $.mv((L0["sender"]), "DateTime"))])));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFormBalanceAnalys", "EditBalancesKeyPress", async function EditBalancesKeyPress(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "key": $.asRef(p1), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.not(($.in_((await L0["key"].get()), [...$.range("0","9"), ",", ".", "\b"]))))) {
    await L0["key"].set("\u0000");
  }
  return L0.result;
}, {"params": ["Sender", "Key"], "kind": "procedure", "ptypes": ["TObject", "Char"]});
  U.method("TFormBalanceAnalys", "LocalRefreshClick", async function LocalRefreshClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  { const $t72 = (await $.mv((await $.call(C, "TMenuItem", [L0["sender"]])), "Tag"));
    if ($.eq($t72, 1)) {
      await $.stmt($.call(C, "BuildBalance", []));
    }
    else if ($.eq($t72, 2)) {
      await $.stmt($.call(C, "BuildAccount", []));
    }
    else if ($.eq($t72, 3)) {
      await $.stmt($.call(C, "BuildTransaction", []));
    }
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFormBalanceAnalys", "ActionFullRefreshExecute", async function ActionFullRefreshExecute(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mcall((await $.mv((await $.mv((await $.v(C, "DBGridBalance")), "DataSource")), "DataSet")), "Close", []);
  await $.mcall((await $.mv((await $.mv((await $.v(C, "DBGridAccount")), "DataSource")), "DataSet")), "Close", []);
  await $.mcall((await $.mv((await $.mv((await $.v(C, "DBGridTransaction")), "DataSource")), "DataSet")), "Close", []);
  await $.mcall((await $.v(C, "ProgressBar")), "Show", []);
  try {
    await $.mcall((await $.v(C, "ProgressBar")), "StepIt", []);
    await $.stmt($.call(C, "BuildBalance", []));
    await $.mcall((await $.v(C, "ProgressBar")), "StepIt", []);
    if ($.truthy($.not((await $.mv((await $.mv((await $.mv((await $.v(C, "DBGridBalance")), "DataSource")), "DataSet")), "IsEmpty"))))) {
      await $.stmt($.call(C, "BuildAccount", []));
    }
    await $.mcall((await $.v(C, "ProgressBar")), "StepIt", []);
    if ($.truthy($.not((await $.mv((await $.mv((await $.mv((await $.v(C, "DBGridAccount")), "DataSource")), "DataSet")), "IsEmpty"))))) {
      await $.stmt($.call(C, "CredbalBuildTransaction", []));
      await $.stmt($.call(C, "DebtbalBuildTransaction", []));
    }
  } finally {
    await $.mcall((await $.v(C, "ProgressBar")), "Hide", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFormBalanceAnalys", "DBGrid1credbal_accDblClick", async function DBGrid1credbal_accDblClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "accountid": ''};
  await $.fixArgs(L0, ["sender"]);
  await $.stmt($.call(C, "credBuildTransaction", []));
  if ($.truthy($.eq((await $.mv((await $.mcall((await $.mv((await $.v(C, "DataModulBalance")), "Account")), "FieldByName", ["AccountID"])), "AsString")), ""))) {
    L0["accountid"] = "-1";
  } else {
    L0["accountid"] = (await $.mv((await $.mcall((await $.mv((await $.v(C, "DataModulBalance")), "Account")), "FieldByName", ["AccountID"])), "AsString"));
  }
  {
    const $t73 = (await $.mv((await $.v(C, "DataModulBalance")), "credTransaction"));
    await $.stmt($.wcall([$t73], "close", [], C));
    { const $t74 = await $.iset((await $.wv([$t73], "sql", C, false)), [20], $.add($.add($.add(" and t.Kredit = ", (await $.wv([$t73], "AccountID", { get: async () => L0["accountid"], set: async (v) => { L0["accountid"] = v; }, local: true }, false))), " and d.bal_cn1="), (await $.mv((await $.mcall((await $.mv((await $.mv((await $.wv([$t73], "DBGrid1credbal_acc", C, false)), "DataSource")), "DataSet")), "FieldByName", ["DEBETBALANS"])), "Asstring")))); if ($t74 !== undefined) { await $.wset([$t73], "sql", $t74, C); } }
    await $.mset((await $.wv([$t73], "memo1", C, false)), "Text", (await $.mv((await $.mv((await $.mv((await $.wv([$t73], "DataModulBalance", C, false)), "credTransaction")), "sql")), "Text")));
    await $.stmt($.wcall([$t73], "open", [], C));
  }
  await $.set(C, "TransactionLists", (await $.mcall((await $.v(C, "TTransactionLists")), "Create", [Self])));
  await $.mset((await $.mv((await $.v(C, "TransactionLists")), "gridtransactions")), "DataSource", (await $.mv((await $.v(C, "DataModulBalance")), "DatacredTransaction")));
  await $.mcall((await $.v(C, "TransactionLists")), "ShowModal", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFormBalanceAnalys", "DBGrid1credbal_accEnter", async function DBGrid1credbal_accEnter(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.set(C, "DBGrid", (await $.call(C, "TDBGrid", [L0["sender"]])));
  await $.mset((await $.v(C, "LocalRefresh")), "Tag", (await $.mv((await $.call(C, "TDBGrid", [L0["sender"]])), "Tag")));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFormBalanceAnalys", "DBGriddebtbal_accDblClick", async function DBGriddebtbal_accDblClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "accountid": ''};
  await $.fixArgs(L0, ["sender"]);
  await $.stmt($.call(C, "debtBuildTransaction", []));
  if ($.truthy($.eq((await $.mv((await $.mcall((await $.mv((await $.v(C, "DataModulBalance")), "Account")), "FieldByName", ["AccountID"])), "AsString")), ""))) {
    L0["accountid"] = "-1";
  } else {
    L0["accountid"] = (await $.mv((await $.mcall((await $.mv((await $.v(C, "DataModulBalance")), "Account")), "FieldByName", ["AccountID"])), "AsString"));
  }
  {
    const $t75 = (await $.mv((await $.v(C, "DataModulBalance")), "debtTransaction"));
    await $.stmt($.wcall([$t75], "close", [], C));
    { const $t76 = await $.iset((await $.wv([$t75], "sql", C, false)), [20], $.add($.add($.add(" and t.Debt = ", (await $.wv([$t75], "AccountID", { get: async () => L0["accountid"], set: async (v) => { L0["accountid"] = v; }, local: true }, false))), " and c.bal_cn1="), (await $.mv((await $.mcall((await $.mv((await $.mv((await $.wv([$t75], "dbgriddebtbal_acc", C, false)), "DataSource")), "DataSet")), "FieldByName", ["KREDITBALANS"])), "Asstring")))); if ($t76 !== undefined) { await $.wset([$t75], "sql", $t76, C); } }
    await $.mset((await $.wv([$t75], "memo1", C, false)), "Text", (await $.mv((await $.mv((await $.mv((await $.wv([$t75], "DataModulBalance", C, false)), "debtTransaction")), "sql")), "Text")));
    await $.stmt($.wcall([$t75], "open", [], C));
  }
  await $.set(C, "TransactionLists", (await $.mcall((await $.v(C, "TTransactionLists")), "Create", [Self])));
  await $.mset((await $.mv((await $.v(C, "TransactionLists")), "gridtransactions")), "DataSource", (await $.mv((await $.v(C, "DataModulBalance")), "DatadebtTransaction")));
  await $.mcall((await $.v(C, "TransactionLists")), "ShowModal", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFormBalanceAnalys", "DBGriddebtbal_accEnter", async function DBGriddebtbal_accEnter(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.set(C, "DBGrid", (await $.call(C, "TDBGrid", [L0["sender"]])));
  await $.mset((await $.v(C, "LocalRefresh")), "Tag", (await $.mv((await $.call(C, "TDBGrid", [L0["sender"]])), "Tag")));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFormBalanceAnalys", "DBGridAccountCellClick", async function DBGridAccountCellClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"column": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["column"]);
  await $.stmt($.call(C, "CredbalBuildTransaction", []));
  await $.stmt($.call(C, "DebtbalBuildTransaction", []));
  return L0.result;
}, {"params": ["Column"], "kind": "procedure", "ptypes": ["TColumn"]});
  U.method("TFormBalanceAnalys", "DBGridAccountKeyDown", async function DBGridAccountKeyDown(Self, p0, p1, p2) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "key": $.asRef(p1), "shift": $.copyArg(p2), result: undefined};
  await $.fixArgs(L0, ["sender", "shift"]);
  await $.stmt($.call(C, "CredbalBuildTransaction", []));
  await $.stmt($.call(C, "DebtbalBuildTransaction", []));
  return L0.result;
}, {"params": ["Sender", "Key", "Shift"], "kind": "procedure", "ptypes": ["TObject", "Word", "TShiftState"]});
  U.method("TFormBalanceAnalys", "DBGridAccountKeyUp", async function DBGridAccountKeyUp(Self, p0, p1, p2) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "key": $.asRef(p1), "shift": $.copyArg(p2), result: undefined};
  await $.fixArgs(L0, ["sender", "shift"]);
  await $.stmt($.call(C, "CredbalBuildTransaction", []));
  await $.stmt($.call(C, "DebtbalBuildTransaction", []));
  return L0.result;
}, {"params": ["Sender", "Key", "Shift"], "kind": "procedure", "ptypes": ["TObject", "Word", "TShiftState"]});
  U.method("TFormBalanceAnalys", "DBGridAccountMouseUp", async function DBGridAccountMouseUp(Self, p0, p1, p2, p3, p4) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "button": $.copyArg(p1), "shift": $.copyArg(p2), "x": $.copyArg(p3), "y": $.copyArg(p4), result: undefined};
  await $.fixArgs(L0, ["sender", "button", "shift", "x", "y"]);
  await $.stmt($.call(C, "CredbalBuildTransaction", []));
  await $.stmt($.call(C, "DebtbalBuildTransaction", []));
  return L0.result;
}, {"params": ["Sender", "Button", "Shift", "X", "Y"], "kind": "procedure", "ptypes": ["TObject", "TMouseButton", "TShiftState", "Integer", "Integer"]});
  U.method("TFormBalanceAnalys", "DBGridAccountMouseWheelDown", async function DBGridAccountMouseWheelDown(Self, p0, p1, p2, p3) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "shift": $.copyArg(p1), "mousepos": $.copyArg(p2), "handled": $.asRef(p3), result: undefined};
  await $.fixArgs(L0, ["sender", "shift", "mousepos"]);
  await $.stmt($.call(C, "CredbalBuildTransaction", []));
  await $.stmt($.call(C, "DebtbalBuildTransaction", []));
  return L0.result;
}, {"params": ["Sender", "Shift", "MousePos", "Handled"], "kind": "procedure", "ptypes": ["TObject", "TShiftState", "TPoint", "Boolean"]});
  U.method("TFormBalanceAnalys", "DBGridAccountMouseWheelUp", async function DBGridAccountMouseWheelUp(Self, p0, p1, p2, p3) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "shift": $.copyArg(p1), "mousepos": $.copyArg(p2), "handled": $.asRef(p3), result: undefined};
  await $.fixArgs(L0, ["sender", "shift", "mousepos"]);
  await $.stmt($.call(C, "CredbalBuildTransaction", []));
  await $.stmt($.call(C, "DebtbalBuildTransaction", []));
  return L0.result;
}, {"params": ["Sender", "Shift", "MousePos", "Handled"], "kind": "procedure", "ptypes": ["TObject", "TShiftState", "TPoint", "Boolean"]});
  U.method("TFormBalanceAnalys", "DBGridBalanceCellClick", async function DBGridBalanceCellClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"column": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["column"]);
  await $.stmt($.call(C, "CredbalBuildTransaction", []));
  await $.stmt($.call(C, "DebtbalBuildTransaction", []));
  return L0.result;
}, {"params": ["Column"], "kind": "procedure", "ptypes": ["TColumn"]});
  U.method("TFormBalanceAnalys", "DBGridBalanceEnter", async function DBGridBalanceEnter(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.set(C, "DBGrid", (await $.call(C, "TDBGrid", [L0["sender"]])));
  await $.mset((await $.v(C, "LocalRefresh")), "Tag", (await $.mv((await $.call(C, "TDBGrid", [L0["sender"]])), "Tag")));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFormBalanceAnalys", "DBGridBalanceKeyDown", async function DBGridBalanceKeyDown(Self, p0, p1, p2) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "key": $.asRef(p1), "shift": $.copyArg(p2), result: undefined};
  await $.fixArgs(L0, ["sender", "shift"]);
  await $.stmt($.call(C, "CredbalBuildTransaction", []));
  await $.stmt($.call(C, "DebtbalBuildTransaction", []));
  return L0.result;
}, {"params": ["Sender", "Key", "Shift"], "kind": "procedure", "ptypes": ["TObject", "Word", "TShiftState"]});
  U.method("TFormBalanceAnalys", "DBGridBalanceKeyUp", async function DBGridBalanceKeyUp(Self, p0, p1, p2) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "key": $.asRef(p1), "shift": $.copyArg(p2), result: undefined};
  await $.fixArgs(L0, ["sender", "shift"]);
  await $.stmt($.call(C, "CredbalBuildTransaction", []));
  await $.stmt($.call(C, "DebtbalBuildTransaction", []));
  return L0.result;
}, {"params": ["Sender", "Key", "Shift"], "kind": "procedure", "ptypes": ["TObject", "Word", "TShiftState"]});
  U.method("TFormBalanceAnalys", "DBGridBalanceMouseWheelDown", async function DBGridBalanceMouseWheelDown(Self, p0, p1, p2, p3) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "shift": $.copyArg(p1), "mousepos": $.copyArg(p2), "handled": $.asRef(p3), result: undefined};
  await $.fixArgs(L0, ["sender", "shift", "mousepos"]);
  await $.stmt($.call(C, "CredbalBuildTransaction", []));
  await $.stmt($.call(C, "DebtbalBuildTransaction", []));
  return L0.result;
}, {"params": ["Sender", "Shift", "MousePos", "Handled"], "kind": "procedure", "ptypes": ["TObject", "TShiftState", "TPoint", "Boolean"]});
  U.method("TFormBalanceAnalys", "DBGridBalanceMouseWheelUp", async function DBGridBalanceMouseWheelUp(Self, p0, p1, p2, p3) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "shift": $.copyArg(p1), "mousepos": $.copyArg(p2), "handled": $.asRef(p3), result: undefined};
  await $.fixArgs(L0, ["sender", "shift", "mousepos"]);
  await $.stmt($.call(C, "CredbalBuildTransaction", []));
  await $.stmt($.call(C, "DebtbalBuildTransaction", []));
  return L0.result;
}, {"params": ["Sender", "Shift", "MousePos", "Handled"], "kind": "procedure", "ptypes": ["TObject", "TShiftState", "TPoint", "Boolean"]});
  U.method("TFormBalanceAnalys", "ActionExcelExportExecute", async function ActionExcelExportExecute(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "fafterscroll": null};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t77 = (await $.v(C, "ExcelExporter"));
    await $.wset([$t77], "ExportSource", (await $.mv((await $.wv([$t77], "DBGrid", C, false)), "DataSource")), C);
    await $.wset([$t77], "FAfterScroll", (await $.mv((await $.mv((await $.wv([$t77], "ExportSource", C, false)), "DataSet")), "AfterScroll")), { get: async () => L0["fafterscroll"], set: async (v) => { L0["fafterscroll"] = v; }, local: true });
    await $.mset((await $.mv((await $.wv([$t77], "ExportSource", C, false)), "DataSet")), "AfterScroll", null);
    await $.mcall((await $.mv((await $.wv([$t77], "ExportSource", C, false)), "DataSet")), "Last", []);
    try {
      await $.stmt($.wcall([$t77], "Report", [], C));
    } finally {
      await $.mset((await $.mv((await $.wv([$t77], "ExportSource", C, false)), "DataSet")), "AfterScroll", (await $.wv([$t77], "FAfterScroll", { get: async () => L0["fafterscroll"], set: async (v) => { L0["fafterscroll"] = v; }, local: true }, false)));
    }
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFormBalanceAnalys", "DBGridTransactionTitleClick", async function DBGridTransactionTitleClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"column": $.copyArg(p0), result: undefined, "titlename": ''};
  await $.fixArgs(L0, ["column"]);
  if ($.truthy((await $.mv((await $.mv((await $.mv((await $.v(C, "DBGridTransaction")), "DataSource")), "DataSet")), "IsEmpty")))) {
    return L0.result;
  }
  await $.mset((await $.v(C, "Screen")), "Cursor", (await $.v(C, "crHourGlass")));
  L0["titlename"] = (await $.mv(L0["column"], "FieldName"));
  try {
    {
      const $t78 = (await $.call(C, "TOracleDataSet", [(await $.mv((await $.mv((await $.v(C, "DBGridTransaction")), "DataSource")), "DataSet"))]));
      await $.stmt((await $.wcall([$t78], "SetVariable", ["Title", (await $.wv([$t78], "TitleName", { get: async () => L0["titlename"], set: async (v) => { L0["titlename"] = v; }, local: true }, false))], C)));
      await $.stmt($.wcall([$t78], "Refresh", [], C));
      await $.stmt((await $.wcall([$t78], "SetVariable", ["Title", (await $.wv([$t78], "RequiredOrderField", C, false))], C)));
    }
  } finally {
    await $.mset((await $.v(C, "Screen")), "Cursor", (await $.v(C, "crDefault")));
  }
  return L0.result;
}, {"params": ["Column"], "kind": "procedure", "ptypes": ["TColumn"]});
  U.method("TFormBalanceAnalys", "CBAccountNameClick", async function CBAccountNameClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.eq((await $.mv((await $.call(C, "TCheckBox", [L0["sender"]])), "Tag")), 1))) {
    await $.mset((await $.v(C, "PanelAccName")), "Visible", $.not((await $.mv((await $.v(C, "PanelAccName")), "Visible"))));
  } else {
    await $.mset((await $.v(C, "PanelDest")), "Visible", $.not((await $.mv((await $.v(C, "PanelDest")), "Visible"))));
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  return U;
}
