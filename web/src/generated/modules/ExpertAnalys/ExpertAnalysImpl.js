// Generated from ExpertAnalysImpl.pas by pas2js — do not edit by hand; regenerate instead.
/* eslint-disable */
// @ts-nocheck

export default function define($) {
  const U = $.unit("ExpertAnalysImpl", ["Windows", "Messages", "SysUtils", "Classes", "Graphics", "Controls", "Forms", "Dialogs", "ActiveX", "AxCtrls", "ExpertAnalys_TLB", "StdVcl", "ExtCtrls", "Grids", "DBGrids", "StdCtrls", "DBCtrls", "Buttons", "ComCtrls", "CurrencyEdit", "ImgList", "ToolWin", "Menus", "OracleData", "Db", "ComObj", "ComServ", "ExpertDataModule", "MainReportUnit", "TrafficsFormImpl", "MainTrafficsForm", "SchemaTrafficsFormImpl", "TurnOverReport", "ExportFormUnit", "sboapiDataModuleImpl", "SBTranslateProc"]);
  const C = [U];
  U.enumType("treportkind", 2);
  U.const("rkForm", 0);
  U.const("rkExcel", 1);
  U.defClass("TExpertAnalysX", "TActiveForm", {"statusbar1": {"name": "StatusBar1", "type": "TStatusBar"}, "groupbox1": {"name": "GroupBox1", "type": "TGroupBox"}, "paneldecimal": {"name": "PanelDecimal", "type": "TPanel"}, "statictext1": {"name": "StaticText1", "type": "TStaticText"}, "cedecimal": {"name": "CEDecimal", "type": "TCurrencyEdit"}, "panelcurrency": {"name": "PanelCurrency", "type": "TPanel"}, "statictext2": {"name": "StaticText2", "type": "TStaticText"}, "cbcurrency": {"name": "CBCurrency", "type": "TComboBox"}, "panelammount": {"name": "PanelAmmount", "type": "TPanel"}, "statictext3": {"name": "StaticText3", "type": "TStaticText"}, "celimit": {"name": "CELimit", "type": "TCurrencyEdit"}, "imagelist": {"name": "ImageList", "type": "TImageList"}, "popupoperations": {"name": "PopupOperations", "type": "TPopupMenu"}, "exportoperation": {"name": "ExportOperation", "type": "TMenuItem"}, "panel1": {"name": "Panel1", "type": "TPanel"}, "statictext4": {"name": "StaticText4", "type": "TStaticText"}, "radiobutton1": {"name": "RadioButton1", "type": "TRadioButton"}, "radiobutton2": {"name": "RadioButton2", "type": "TRadioButton"}, "panel4": {"name": "Panel4", "type": "TPanel"}, "statictext5": {"name": "StaticText5", "type": "TStaticText"}, "dtpsysdat": {"name": "DTPSysdat", "type": "TDateTimePicker"}, "rbostat": {"name": "RBOstat", "type": "TRadioButton"}, "rbpok_ostat": {"name": "RBPok_ostat", "type": "TRadioButton"}, "groupboxcommon": {"name": "GroupBoxCommon", "type": "TGroupBox"}, "splitter2": {"name": "Splitter2", "type": "TSplitter"}, "splitter3": {"name": "Splitter3", "type": "TSplitter"}, "panelschemas": {"name": "PanelSchemas", "type": "TPanel"}, "panel6": {"name": "Panel6", "type": "TPanel"}, "dbnavigator3": {"name": "DBNavigator3", "type": "TDBNavigator"}, "gridschemas": {"name": "GridSchemas", "type": "TDBGrid"}, "paneloperations": {"name": "PanelOperations", "type": "TPanel"}, "panel2": {"name": "Panel2", "type": "TPanel"}, "dbnavigator1": {"name": "DBNavigator1", "type": "TDBNavigator"}, "gridoperations": {"name": "GridOperations", "type": "TDBGrid"}, "panelsettings": {"name": "PanelSettings", "type": "TPanel"}, "panel8": {"name": "Panel8", "type": "TPanel"}, "speedbutton2": {"name": "SpeedButton2", "type": "TSpeedButton"}, "dbnavigator2": {"name": "DBNavigator2", "type": "TDBNavigator"}, "settingsgrid": {"name": "SettingsGrid", "type": "TDBGrid"}, "popupbalances": {"name": "PopupBalances", "type": "TPopupMenu"}, "popupschemas": {"name": "PopupSchemas", "type": "TPopupMenu"}, "aanaliz1": {"name": "Aanaliz1", "type": "TMenuItem"}, "exportbalance": {"name": "ExportBalance", "type": "TMenuItem"}, "sboperationreport": {"name": "SBOperationReport", "type": "TSpeedButton"}, "sbschemareport": {"name": "SBSchemaReport", "type": "TSpeedButton"}, "panel9": {"name": "Panel9", "type": "TPanel"}, "statictext6": {"name": "StaticText6", "type": "TStaticText"}, "rbexpand": {"name": "RBExpand", "type": "TRadioButton"}, "rbtotal": {"name": "RBTotal", "type": "TRadioButton"}, "checkbox1": {"name": "CheckBox1", "type": "TCheckBox"}, "checkbox2": {"name": "CheckBox2", "type": "TCheckBox"}, "panel10": {"name": "Panel10", "type": "TPanel"}, "panelschema": {"name": "PanelSchema", "type": "TCheckBox"}, "paneloperation": {"name": "PanelOperation", "type": "TCheckBox"}, "panelsetting": {"name": "PanelSetting", "type": "TCheckBox"}, "n1": {"name": "N1", "type": "TMenuItem"}, "tmexcellreport": {"name": "TMExcellReport", "type": "TMenuItem"}, "n2": {"name": "N2", "type": "TMenuItem"}, "tmexcellrep": {"name": "TMExcellRep", "type": "TMenuItem"}, "checkbox3": {"name": "CheckBox3", "type": "TCheckBox"}, "panel3": {"name": "Panel3", "type": "TPanel"}, "statictext7": {"name": "StaticText7", "type": "TStaticText"}, "dblookupbranch": {"name": "DBLookupBranch", "type": "TDBLookupComboBox"}, "dtplastdate": {"name": "DTPLastDate", "type": "TDateTimePicker"}, "fevents": {"name": "FEvents", "type": "IExpertAnalysXEvents"}, "foperationdate": {"name": "FOperationDate", "type": "TDateTime"}, "flastdate": {"name": "FLastDate", "type": "TDateTime"}, "rate": {"name": "Rate", "type": "array"}, "currencyfield": {"name": "CurrencyField", "type": "String"}, "defaulttotaltrafficssql": {"name": "DefaultTotalTrafficsSQL", "type": "WideString"}, "defaultschematrafficssql": {"name": "DefaultSchemaTrafficsSQL", "type": "WideString"}, "reportkind": {"name": "ReportKind", "type": "TReportKind"}}, {"operationdate": {"name": "OperationDate", "read": "FOperationDate", "write": "SetOperationDate"}, "lastdate": {"name": "LastDate", "read": "FLastDate", "write": "SetLastDate"}});
  U.fieldInit("TExpertAnalysX", "rate", () => []);
  U.init(async () => {
    U.var_("ExpertAnalysX", null, "TExpertAnalysX");
  });
  U.method("TExpertAnalysX", "DefinePropertyPages", async function DefinePropertyPages(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"definepropertypage": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["definepropertypage"]);
  return L0.result;
}, {"params": ["DefinePropertyPage"], "kind": "procedure", "ptypes": ["TDefinePropertyPage"]});
  U.method("TExpertAnalysX", "EventSinkChanged", async function EventSinkChanged(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"eventsink": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["eventsink"]);
  await $.set(C, "FEvents", L0["eventsink"]);
  return L0.result;
}, {"params": ["EventSink"], "kind": "procedure", "ptypes": ["IUnknown"]});
  U.method("TExpertAnalysX", "Initialize", async function Initialize(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: undefined};
  await $.inherited(Self, "TExpertAnalysX", "Initialize", null, arguments);
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
  U.method("TExpertAnalysX", "Get_Active", async function Get_Active(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: false};
  L0["result"] = (await $.v(C, "Active"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TExpertAnalysX", "Get_AutoScroll", async function Get_AutoScroll(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: false};
  L0["result"] = (await $.v(C, "AutoScroll"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TExpertAnalysX", "Get_AutoSize", async function Get_AutoSize(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: false};
  L0["result"] = (await $.v(C, "AutoSize"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TExpertAnalysX", "Get_AxBorderStyle", async function Get_AxBorderStyle(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: null};
  L0["result"] = (await $.call(C, "Ord", [(await $.v(C, "AxBorderStyle"))]));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TExpertAnalysX", "Get_Caption", async function Get_Caption(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: ''};
  L0["result"] = (await $.call(C, "WideString", [(await $.v(C, "Caption"))]));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TExpertAnalysX", "Get_Color", async function Get_Color(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: null};
  L0["result"] = (await $.call(C, "OLE_COLOR", [(await $.v(C, "Color"))]));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TExpertAnalysX", "Get_Cursor", async function Get_Cursor(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: 0};
  L0["result"] = (await $.call(C, "Smallint", [(await $.v(C, "Cursor"))]));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TExpertAnalysX", "Get_DoubleBuffered", async function Get_DoubleBuffered(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: false};
  L0["result"] = (await $.v(C, "DoubleBuffered"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TExpertAnalysX", "Get_DropTarget", async function Get_DropTarget(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: false};
  L0["result"] = (await $.v(C, "DropTarget"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TExpertAnalysX", "Get_Enabled", async function Get_Enabled(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: false};
  L0["result"] = (await $.v(C, "Enabled"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TExpertAnalysX", "Get_Font", async function Get_Font(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: null};
  await $.stmt((await $.call(C, "GetOleFont", [(await $.v(C, "Font")), L0["result"]])));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TExpertAnalysX", "Get_HelpFile", async function Get_HelpFile(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: ''};
  L0["result"] = (await $.call(C, "WideString", [(await $.v(C, "HelpFile"))]));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TExpertAnalysX", "Get_KeyPreview", async function Get_KeyPreview(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: false};
  L0["result"] = (await $.v(C, "KeyPreview"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TExpertAnalysX", "Get_PixelsPerInch", async function Get_PixelsPerInch(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: 0};
  L0["result"] = (await $.v(C, "PixelsPerInch"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TExpertAnalysX", "Get_PrintScale", async function Get_PrintScale(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: null};
  L0["result"] = (await $.call(C, "Ord", [(await $.v(C, "PrintScale"))]));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TExpertAnalysX", "Get_Scaled", async function Get_Scaled(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: false};
  L0["result"] = (await $.v(C, "Scaled"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TExpertAnalysX", "Get_Visible", async function Get_Visible(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: false};
  L0["result"] = (await $.v(C, "Visible"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TExpertAnalysX", "Get_VisibleDockClientCount", async function Get_VisibleDockClientCount(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: 0};
  L0["result"] = (await $.v(C, "VisibleDockClientCount"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TExpertAnalysX", "_Set_Font", async function _Set_Font(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.asRef(p0), result: undefined};
  await $.stmt((await $.call(C, "SetOleFont", [(await $.v(C, "Font")), (await L0["value"].get())])));
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["IFontDisp"]});
  U.method("TExpertAnalysX", "ActivateEvent", async function ActivateEvent(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.ne((await $.v(C, "FEvents")), null))) {
    await $.mcall((await $.v(C, "FEvents")), "OnActivate", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TExpertAnalysX", "ClickEvent", async function ClickEvent(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.ne((await $.v(C, "FEvents")), null))) {
    await $.mcall((await $.v(C, "FEvents")), "OnClick", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TExpertAnalysX", "CreateEvent", async function CreateEvent(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.ne((await $.v(C, "FEvents")), null))) {
    await $.mcall((await $.v(C, "FEvents")), "OnCreate", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TExpertAnalysX", "DblClickEvent", async function DblClickEvent(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.ne((await $.v(C, "FEvents")), null))) {
    await $.mcall((await $.v(C, "FEvents")), "OnDblClick", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TExpertAnalysX", "DeactivateEvent", async function DeactivateEvent(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.ne((await $.v(C, "FEvents")), null))) {
    await $.mcall((await $.v(C, "FEvents")), "OnDeactivate", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TExpertAnalysX", "DestroyEvent", async function DestroyEvent(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.ne((await $.v(C, "FEvents")), null))) {
    await $.mcall((await $.v(C, "FEvents")), "OnDestroy", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TExpertAnalysX", "KeyPressEvent", async function KeyPressEvent(Self, p0, p1) {
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
  U.method("TExpertAnalysX", "PaintEvent", async function PaintEvent(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.ne((await $.v(C, "FEvents")), null))) {
    await $.mcall((await $.v(C, "FEvents")), "OnPaint", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TExpertAnalysX", "Set_AutoScroll", async function Set_AutoScroll(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "AutoScroll", L0["value"]);
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["WordBool"]});
  U.method("TExpertAnalysX", "Set_AutoSize", async function Set_AutoSize(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "AutoSize", L0["value"]);
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["WordBool"]});
  U.method("TExpertAnalysX", "Set_AxBorderStyle", async function Set_AxBorderStyle(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "AxBorderStyle", (await $.call(C, "TActiveFormBorderStyle", [L0["value"]])));
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["TxActiveFormBorderStyle"]});
  U.method("TExpertAnalysX", "Set_Caption", async function Set_Caption(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "Caption", (await $.call(C, "TCaption", [L0["value"]])));
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["WideString"]});
  U.method("TExpertAnalysX", "Set_Color", async function Set_Color(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "Color", (await $.call(C, "TColor", [L0["value"]])));
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["OLE_COLOR"]});
  U.method("TExpertAnalysX", "Set_Cursor", async function Set_Cursor(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "Cursor", (await $.call(C, "TCursor", [L0["value"]])));
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["Smallint"]});
  U.method("TExpertAnalysX", "Set_DoubleBuffered", async function Set_DoubleBuffered(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "DoubleBuffered", L0["value"]);
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["WordBool"]});
  U.method("TExpertAnalysX", "Set_DropTarget", async function Set_DropTarget(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "DropTarget", L0["value"]);
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["WordBool"]});
  U.method("TExpertAnalysX", "Set_Enabled", async function Set_Enabled(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "Enabled", L0["value"]);
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["WordBool"]});
  U.method("TExpertAnalysX", "Set_Font", async function Set_Font(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.stmt((await $.call(C, "SetOleFont", [(await $.v(C, "Font")), L0["value"]])));
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["IFontDisp"]});
  U.method("TExpertAnalysX", "Set_HelpFile", async function Set_HelpFile(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "HelpFile", (await $.call(C, "String", [L0["value"]])));
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["WideString"]});
  U.method("TExpertAnalysX", "Set_KeyPreview", async function Set_KeyPreview(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "KeyPreview", L0["value"]);
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["WordBool"]});
  U.method("TExpertAnalysX", "Set_PixelsPerInch", async function Set_PixelsPerInch(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "PixelsPerInch", L0["value"]);
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["Integer"]});
  U.method("TExpertAnalysX", "Set_PrintScale", async function Set_PrintScale(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "PrintScale", (await $.call(C, "TPrintScale", [L0["value"]])));
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["TxPrintScale"]});
  U.method("TExpertAnalysX", "Set_Scaled", async function Set_Scaled(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "Scaled", L0["value"]);
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["WordBool"]});
  U.method("TExpertAnalysX", "Set_Visible", async function Set_Visible(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "Visible", L0["value"]);
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["WordBool"]});
  U.method("TExpertAnalysX", "IntToBool", async function IntToBool(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: false};
  await $.fixArgs(L0, ["value"]);
  L0["result"] = $.not(($.eq(L0["value"], 0)));
  return L0.result;
}, {"params": ["Value"], "kind": "function", "ptypes": ["integer"]});
  U.method("TExpertAnalysX", "FillCurrency", async function FillCurrency(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: undefined, "rateindex": 0};
  L0["rateindex"] = 0;
  {
    const $t1 = (await $.mv((await $.v(C, "CBCurrency")), "Items"));
    await $.stmt($.wcall([$t1], "Clear", [], C));
    await $.stmt((await $.wcall([$t1], "Add", ["Bütün valyutalar"], C)));
    await $.stmt((await $.wcall([$t1], "Add", ["Xarici valyutada"], C)));
  }
  {
    const $t2 = (await $.mv((await $.v(C, "ExpertDataModul")), "Currency"));
    await $.stmt($.wcall([$t2], "Open", [], C));
    await $.stmt((await $.wcall([$t2], "SetLength", [$.ref(async () => (await $.wv([$t2], "Rate", C, false)), async ($t3) => { await $.wset([$t2], "Rate", $t3, C); }), (await $.wv([$t2], "RecordCount", C, false))], C)));
    await $.stmt($.wcall([$t2], "First", [], C));
    while ($.truthy($.not((await $.wv([$t2], "EOF", C, false))))) {
      { const $t4 = await $.iset((await $.wv([$t2], "Rate", C, false)), [(await $.wv([$t2], "RateIndex", { get: async () => L0["rateindex"], set: async (v) => { L0["rateindex"] = v; }, local: true }, false))], (await $.mv((await $.wcall([$t2], "FieldByName", ["Valute"], C)), "AsInteger"))); if ($t4 !== undefined) { await $.wset([$t2], "Rate", $t4, C); } }
      await $.stmt((await $.mcall((await $.mv((await $.wv([$t2], "CBCurrency", C, false)), "Items")), "Add", [(await $.mv((await $.wcall([$t2], "FieldByName", ["Valu_Name"], C)), "AsString"))])));
      await $.stmt((await $.wcall([$t2], "Inc", [$.ref(async () => (await $.wv([$t2], "RateIndex", { get: async () => L0["rateindex"], set: async (v) => { L0["rateindex"] = v; }, local: true }, false)), async ($t5) => { await $.wset([$t2], "RateIndex", $t5, { get: async () => L0["rateindex"], set: async (v) => { L0["rateindex"] = v; }, local: true }); })], C)));
      await $.stmt($.wcall([$t2], "Next", [], C));
      await $.tick();
    }
  }
  return L0.result;
}, {"params": [], "kind": "procedure", "ptypes": []});
  U.method("TExpertAnalysX", "CheckCurrency", async function CheckCurrency(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: ''};
  { const $t6 = (await $.mv((await $.v(C, "CBCurrency")), "ItemIndex"));
    if ($.eq($t6, 0)) {
      L0["result"] = "";
    }
    else if ($.eq($t6, 1)) {
      L0["result"] = " and (val_acc <> 0)";
    }
    else {
      L0["result"] = $.add($.add(" and (val_acc = ", (await $.call(C, "IntToStr", [(await $.idx((await $.v(C, "rate")), [$.sub((await $.mv((await $.v(C, "CBCurrency")), "ItemIndex")), 2)]))]))), ")");
    }
  }
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TExpertAnalysX", "SetOperationDate", async function SetOperationDate(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "FOperationDate", L0["value"]);
  await $.mset((await $.v(C, "DTPSysdat")), "DateTime", (await $.call(C, "Int", [L0["value"]])));
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["TDateTime"]});
  U.method("TExpertAnalysX", "SetLastDate", async function SetLastDate(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "FLastDate", L0["value"]);
  await $.mset((await $.v(C, "DTPLastDate")), "DateTime", (await $.call(C, "Int", [L0["value"]])));
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["TDateTime"]});
  U.method("TExpertAnalysX", "BuildAmmountCondition", async function BuildAmmountCondition(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: ''};
  if ($.truthy((await $.mv((await $.v(C, "RBOstat")), "Checked")))) {
    L0["result"] = "and abs(ar.ostat) >=%f";
  } else {
    L0["result"] = "and abs(ar.pok_ostat) >=%f";
  }
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TExpertAnalysX", "BuildOperationCondition", async function BuildOperationCondition(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"operationkind": $.copyArg(p0), result: ''};
  await $.fixArgs(L0, ["operationkind"]);
  { const $t7 = L0["operationkind"];
    if ($.eq($t7, 0)) {
      L0["result"] = $.add($.add(" AND (schemaID = ", (await $.mv((await $.mcall((await $.mv((await $.v(C, "ExpertDataModul")), "Schemas")), "FieldByName", ["ID"])), "AsString"))), ")");
    }
    else if ($.eq($t7, 1)) {
      L0["result"] = $.add($.add(" AND (operationID = ", (await $.mv((await $.mcall((await $.mv((await $.v(C, "ExpertDataModul")), "Operations")), "FieldByName", ["ID"])), "AsString"))), ")");
    }
  }
  return L0.result;
}, {"params": ["OperationKind"], "kind": "function", "ptypes": ["word"]});
  U.method("TExpertAnalysX", "BuildBranchCondition", async function BuildBranchCondition(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: ''};
  {
    const $t8 = (await $.v(C, "DBLookupBranch"));
    if ($.truthy($.eq((await $.wv([$t8], "KeyValue", C, false)), (-(1))))) {
      await $.wset([$t8], "Result", " ", { get: async () => L0["result"], set: async (v) => { L0["result"] = v; }, local: true });
    } else {
      await $.wset([$t8], "Result", $.add(" AND Ac.filial = ", (await $.wcall([$t8], "IntToStr", [(await $.wv([$t8], "KeyValue", C, false))], C))), { get: async () => L0["result"], set: async (v) => { L0["result"] = v; }, local: true });
    }
  }
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TExpertAnalysX", "GenerateCurrencyFilter", async function GenerateCurrencyFilter(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: ''};
  { const $t9 = (await $.mv((await $.v(C, "CBCurrency")), "ItemIndex"));
    if ($.eq($t9, 0)) {
      L0["result"] = "";
    }
    else if ($.eq($t9, 1)) {
      L0["result"] = " and ac.val_acc <> 0";
    }
    else {
      L0["result"] = (await $.call(C, "Format", [(await $.idx((await $.mv((await $.mv((await $.v(C, "ExpertDataModul")), "TotalTraffics")), "SQL")), [23])), [(await $.idx((await $.v(C, "rate")), [$.sub((await $.mv((await $.v(C, "CBCurrency")), "ItemIndex")), 2)]))]]));
    }
  }
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TExpertAnalysX", "CheckDataModule", async function CheckDataModule(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: undefined};
  if ($.truthy($.not((await $.call(C, "Assigned", [(await $.v(C, "ExpertDataModul"))]))))) {
    await $.set(C, "ExpertDataModul", (await $.mcall((await $.v(C, "TExpertDataModul")), "Create", [Self])));
  }
  return L0.result;
}, {"params": [], "kind": "procedure", "ptypes": []});
  U.method("TExpertAnalysX", "CheckReport", async function CheckReport(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: undefined};
  if ($.truthy($.not((await $.call(C, "Assigned", [(await $.v(C, "MainReport"))]))))) {
    await $.set(C, "MainReport", (await $.mcall((await $.v(C, "TMainReport")), "Create", [Self])));
  }
  if ($.truthy($.not((await $.call(C, "Assigned", [(await $.v(C, "ReportTurnOver"))]))))) {
    await $.set(C, "ReportTurnOver", (await $.call(C, "TReportTurnOver", [Self])));
  }
  return L0.result;
}, {"params": [], "kind": "procedure", "ptypes": []});
  U.method("TExpertAnalysX", "ELimitKeyPress", async function ELimitKeyPress(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "key": $.asRef(p1), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.not(($.in_((await L0["key"].get()), [...$.range("0","9"), ".", ",", "\b", (await $.call(C, "CHR", [(await $.v(C, "VK_DELETE"))]))]))))) {
    await L0["key"].set("\u0000");
  }
  return L0.result;
}, {"params": ["Sender", "Key"], "kind": "procedure", "ptypes": ["TObject", "Char"]});
  U.method("TExpertAnalysX", "ActiveFormCreate", async function ActiveFormCreate(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "picklistindex": 0};
  await $.fixArgs(L0, ["sender"]);
  L0["picklistcount"] = 5;
  await $.set(C, "ExpertAnalysX", Self);
  await $.stmt($.call(C, "CheckDataModule", []));
  await $.stmt($.call(C, "FillCurrency", []));
  await $.stmt($.call(C, "CheckReport", []));
  await $.set(C, "TrafficsForm", (await $.mcall((await $.v(C, "TTrafficsForm")), "Create", [Self])));
  await $.set(C, "MainTraffics", (await $.mcall((await $.v(C, "TMainTraffics")), "Create", [Self])));
  await $.set(C, "ExportForm", (await $.mcall((await $.v(C, "TExportForm")), "Create", [Self])));
  await $.set(C, "SchemaTrafficsForm", (await $.mcall((await $.v(C, "TSchemaTrafficsForm")), "Create", [Self])));
  await $.mset((await $.v(C, "CBCurrency")), "ItemIndex", 0);
  await $.mset((await $.v(C, "DBLookupBranch")), "KeyValue", (-(1)));
  await $.mset((await $.v(C, "DTPSysdat")), "DateTime", (await $.mv((await $.mcall((await $.mv((await $.v(C, "ExpertDataModul")), "Sysdat")), "FieldByName", ["tek_dat"])), "AsDateTime")));
  await $.set(C, "OperationDate", (await $.mv((await $.v(C, "DTPSysdat")), "DateTime")));
  await $.set(C, "LastDate", (await $.v(C, "OperationDate")));
  await $.set(C, "CurrencyField", "LastRest");
  await $.set(C, "DefaultTotalTrafficsSQL", (await $.mv((await $.mv((await $.mv((await $.v(C, "ExpertDataModul")), "TotalTraffics")), "SQL")), "CommaText")));
  await $.set(C, "DefaultSchemaTrafficsSQL", (await $.mv((await $.mv((await $.mv((await $.v(C, "ExpertDataModul")), "SchemaTraffics")), "SQL")), "CommaText")));
  {
    const $t10 = (await $.v(C, "ExpertDataModul"));
    const $t11 = (await $.wv([$t10], "SettingsGrid", C, false));
    { const $t12 = $.sub((await $.wv([$t10, $t11], "PickListCount", { get: async () => L0["picklistcount"], set: async (v) => { L0["picklistcount"] = v; }, local: true }, false)), 1);
      await $.wset([$t10, $t11], "PickListIndex", 0, { get: async () => L0["picklistindex"], set: async (v) => { L0["picklistindex"] = v; }, local: true });
      let $t13 = true;
      for (;;) {
        if (!$t13) { await $.wset([$t10, $t11], "PickListIndex", $.succ((await $.wv([$t10, $t11], "PickListIndex", { get: async () => L0["picklistindex"], set: async (v) => { L0["picklistindex"] = v; }, local: true }, false)), 1), { get: async () => L0["picklistindex"], set: async (v) => { L0["picklistindex"] = v; }, local: true }); }
        $t13 = false;
        if (!($.ord((await $.wv([$t10, $t11], "PickListIndex", { get: async () => L0["picklistindex"], set: async (v) => { L0["picklistindex"] = v; }, local: true }, false))) <= $.ord($t12))) break;
        await $.mcall((await $.mv((await $.idx((await $.wv([$t10, $t11], "Columns", C, false)), [(await $.wv([$t10, $t11], "PickListIndex", { get: async () => L0["picklistindex"], set: async (v) => { L0["picklistindex"] = v; }, local: true }, false))])), "PickList")), "Clear", []);
        await $.tick();
      }
    }
    while ($.truthy($.not((await $.mv((await $.wv([$t10, $t11], "Accounts", C, false)), "EOF"))))) {
      await $.stmt((await $.mcall((await $.mv((await $.idx((await $.wv([$t10, $t11], "Columns", C, false)), [0])), "PickList")), "Add", [(await $.mv((await $.mcall((await $.wv([$t10, $t11], "Accounts", C, false)), "FieldByName", ["acc_no"])), "AsString"))])));
      await $.mcall((await $.wv([$t10, $t11], "Accounts", C, false)), "Next", []);
      await $.tick();
    }
    while ($.truthy($.not((await $.mv((await $.wv([$t10, $t11], "Balances", C, false)), "EOF"))))) {
      await $.stmt((await $.mcall((await $.mv((await $.idx((await $.wv([$t10, $t11], "Columns", C, false)), [1])), "PickList")), "Add", [(await $.mv((await $.mcall((await $.wv([$t10, $t11], "Balances", C, false)), "FieldByName", ["bal_cn"])), "AsString"))])));
      await $.stmt((await $.mcall((await $.mv((await $.idx((await $.wv([$t10, $t11], "Columns", C, false)), [2])), "PickList")), "Add", [(await $.mv((await $.mcall((await $.wv([$t10, $t11], "Balances", C, false)), "FieldByName", ["accgroup"])), "AsString"))])));
      await $.stmt((await $.mcall((await $.mv((await $.idx((await $.wv([$t10, $t11], "Columns", C, false)), [3])), "PickList")), "Add", [(await $.mv((await $.mcall((await $.wv([$t10, $t11], "Balances", C, false)), "FieldByName", ["part"])), "AsString"))])));
      await $.mcall((await $.wv([$t10, $t11], "Balances", C, false)), "Next", []);
      await $.tick();
    }
    while ($.truthy($.not((await $.mv((await $.wv([$t10, $t11], "AccFlags", C, false)), "EOF"))))) {
      await $.stmt((await $.mcall((await $.mv((await $.idx((await $.wv([$t10, $t11], "Columns", C, false)), [4])), "PickList")), "Add", [(await $.mv((await $.mcall((await $.wv([$t10, $t11], "AccFlags", C, false)), "FieldByName", ["symbol"])), "AsString"))])));
      await $.mcall((await $.wv([$t10, $t11], "AccFlags", C, false)), "Next", []);
      await $.tick();
    }
  }
  await $.stmt((await $.mcall((await $.v(C, "SBTranslateProc")), "TranslateAllComponents", [Self, (await $.mv((await $.v(C, "sboapiDataModule")), "OrPack_SL"))])));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TExpertAnalysX", "ToolButton1Click", async function ToolButton1Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mset((await $.v(C, "GroupBoxCommon")), "Visible", $.not((await $.mv((await $.v(C, "GroupBoxCommon")), "Visible"))));
  await $.mset((await $.v(C, "PanelCurrency")), "Visible", $.not((await $.mv((await $.v(C, "PanelCurrency")), "Visible"))));
  await $.mset((await $.v(C, "PanelAmmount")), "Visible", $.not((await $.mv((await $.v(C, "PanelAmmount")), "Visible"))));
  await $.mset((await $.v(C, "PanelDecimal")), "Visible", $.not((await $.mv((await $.v(C, "PanelDecimal")), "Visible"))));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TExpertAnalysX", "ExportOperationClick", async function ExportOperationClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy((await $.mv((await $.v(C, "RBExpand")), "Checked")))) {
    {
      const $t14 = (await $.v(C, "ExpertDataModul"));
      const $t15 = (await $.wv([$t14], "TrafficsForm", C, false));
      await $.mcall((await $.wv([$t14, $t15], "Traffics", C, false)), "CloseAll", []);
      if ($.truthy($.eq((await $.mv(((await $.wv([$t14, $t15], "Sender", { get: async () => L0["sender"], set: async (v) => { L0["sender"] = v; }, local: true }, false))), "Tag")), 1))) {
        await $.stmt((await $.mcall((await $.wv([$t14, $t15], "Traffics", C, false)), "SetVariable", ["operationID", (await $.mv((await $.mcall((await $.wv([$t14, $t15], "Operations", C, false)), "FieldByName", ["ID"])), "AsInteger"))])));
        await $.stmt((await $.mcall((await $.wv([$t14, $t15], "Traffics", C, false)), "SetVariable", ["balanceID", (-(1))])));
        await $.stmt((await $.mcall((await $.wv([$t14, $t15], "Traffics", C, false)), "SetVariable", ["BeginDate", (await $.wv([$t14, $t15], "operationDate", C, false))])));
        await $.stmt((await $.mcall((await $.wv([$t14, $t15], "Traffics", C, false)), "SetVariable", ["BeginPeriod", (await $.wcall([$t14, $t15], "GetBeginPeriod", [(await $.wv([$t14, $t15], "operationDate", C, false))], C))])));
        await $.stmt((await $.mcall((await $.wv([$t14, $t15], "Traffics", C, false)), "SetVariable", ["LastDate", (await $.wv([$t14, $t15], "LastDate", C, false))])));
      } else {
        if ($.truthy($.eq((await $.mv(((await $.wv([$t14, $t15], "Sender", { get: async () => L0["sender"], set: async (v) => { L0["sender"] = v; }, local: true }, false))), "Tag")), 2))) {
          await $.stmt((await $.mcall((await $.wv([$t14, $t15], "Traffics", C, false)), "SetVariable", ["operationID", (-(1))])));
          await $.stmt((await $.mcall((await $.wv([$t14, $t15], "Traffics", C, false)), "SetVariable", ["balanceID", (await $.mv((await $.mcall((await $.wv([$t14, $t15], "Operations_balance", C, false)), "FieldByName", ["ID"])), "AsInteger"))])));
          await $.stmt((await $.mcall((await $.wv([$t14, $t15], "Traffics", C, false)), "SetVariable", ["BeginDate", (await $.wv([$t14, $t15], "operationDate", C, false))])));
          await $.stmt((await $.mcall((await $.wv([$t14, $t15], "Traffics", C, false)), "SetVariable", ["BeginPeriod", (await $.wcall([$t14, $t15], "GetBeginPeriod", [(await $.wv([$t14, $t15], "operationDate", C, false))], C))])));
          await $.stmt((await $.mcall((await $.wv([$t14, $t15], "Traffics", C, false)), "SetVariable", ["LastDate", (await $.wv([$t14, $t15], "LastDate", C, false))])));
        }
      }
      await $.mset((await $.wv([$t14, $t15], "Traffics", C, false)), "Filtered", (await $.wv([$t14, $t15], "False", C, false)));
      await $.mset((await $.wv([$t14, $t15], "Traffics", C, false)), "Filter", $.add($.add($.add($.add($.add("(abs(", (await $.wv([$t14, $t15], "CurrencyField", C, false))), ") >="), (await $.wcall([$t14, $t15], "FloatToStr", [(await $.mv((await $.wv([$t14, $t15], "CELimit", C, false)), "value"))], C))), ")"), (await $.wv([$t14, $t15], "CheckCurrency", C, false))));
      await $.mset((await $.wv([$t14, $t15], "Traffics", C, false)), "Filtered", (await $.wv([$t14, $t15], "True", C, false)));
      { const $t16 = await $.iset((await $.mv((await $.wv([$t14, $t15], "Traffics", C, false)), "SQL")), [45], (await $.wv([$t14, $t15], "BuildBranchCondition", C, false))); if ($t16 !== undefined) { await $.mset((await $.wv([$t14, $t15], "Traffics", C, false)), "SQL", $t16); } }
      { const $t17 = await $.iset((await $.mv((await $.wv([$t14, $t15], "Traffics", C, false)), "SQL")), [72], (await $.wv([$t14, $t15], "BuildBranchCondition", C, false))); if ($t17 !== undefined) { await $.mset((await $.wv([$t14, $t15], "Traffics", C, false)), "SQL", $t17); } }
      { const $t18 = await $.iset((await $.mv((await $.wv([$t14, $t15], "Traffics", C, false)), "SQL")), [107], (await $.wv([$t14, $t15], "BuildBranchCondition", C, false))); if ($t18 !== undefined) { await $.mset((await $.wv([$t14, $t15], "Traffics", C, false)), "SQL", $t18); } }
      await $.mcall((await $.wv([$t14, $t15], "Traffics", C, false)), "Open", []);
      if ($.truthy($.eq((await $.wcall([$t14, $t15], "Copy", [(await $.mv(((await $.wv([$t14, $t15], "Sender", { get: async () => L0["sender"], set: async (v) => { L0["sender"] = v; }, local: true }, false))), "Name")), 1, 7], C)), "TMExcel"))) {
        await $.mcall((await $.wv([$t14, $t15], "ExportForm", C, false)), "ShowModal", []);
      } else {
        await $.stmt($.wcall([$t14, $t15], "ShowModal", [], C));
      }
    }
  } else {
    {
      const $t19 = (await $.v(C, "ExpertDataModul"));
      const $t20 = (await $.wv([$t19], "MainTraffics", C, false));
      await $.mcall((await $.wv([$t19, $t20], "TotalTraffics", C, false)), "CloseAll", []);
      await $.mset((await $.mv((await $.wv([$t19, $t20], "TotalTraffics", C, false)), "SQL")), "CommaText", (await $.wv([$t19, $t20], "DefaultTotalTrafficsSQL", C, false)));
      { const $t21 = await $.iset((await $.mv((await $.wv([$t19, $t20], "TotalTraffics", C, false)), "SQL")), [23], (await $.wv([$t19, $t20], "GenerateCurrencyFilter", C, false))); if ($t21 !== undefined) { await $.mset((await $.wv([$t19, $t20], "TotalTraffics", C, false)), "SQL", $t21); } }
      { const $t22 = await $.iset((await $.mv((await $.wv([$t19, $t20], "TotalTraffics", C, false)), "SQL")), [24], (await $.wcall([$t19, $t20], "Format", [(await $.wv([$t19, $t20], "BuildAmmountCondition", C, false)), [(await $.mv((await $.wv([$t19, $t20], "CELimit", C, false)), "value"))]], C))); if ($t22 !== undefined) { await $.mset((await $.wv([$t19, $t20], "TotalTraffics", C, false)), "SQL", $t22); } }
      if ($.truthy($.eq((await $.mv(((await $.wv([$t19, $t20], "Sender", { get: async () => L0["sender"], set: async (v) => { L0["sender"] = v; }, local: true }, false))), "Tag")), 1))) {
        await $.stmt((await $.mcall((await $.wv([$t19, $t20], "TotalTraffics", C, false)), "SetVariable", ["operationID", (await $.mv((await $.mcall((await $.wv([$t19, $t20], "Operations", C, false)), "FieldByName", ["ID"])), "AsInteger"))])));
        await $.stmt((await $.mcall((await $.wv([$t19, $t20], "TotalTraffics", C, false)), "SetVariable", ["balanceID", (-(1))])));
        await $.stmt((await $.mcall((await $.wv([$t19, $t20], "TotalTraffics", C, false)), "SetVariable", ["schemaID", (-(1))])));
        await $.stmt((await $.mcall((await $.wv([$t19, $t20], "TotalTraffics", C, false)), "SetVariable", ["operationDate", (await $.wv([$t19, $t20], "operationDate", C, false))])));
      } else {
        await $.stmt((await $.mcall((await $.wv([$t19, $t20], "TotalTraffics", C, false)), "SetVariable", ["operationID", (-(1))])));
        await $.stmt((await $.mcall((await $.wv([$t19, $t20], "TotalTraffics", C, false)), "SetVariable", ["balanceID", (await $.mv((await $.mcall((await $.wv([$t19, $t20], "Operations_balance", C, false)), "FieldByName", ["ID"])), "AsInteger"))])));
        await $.stmt((await $.mcall((await $.wv([$t19, $t20], "TotalTraffics", C, false)), "SetVariable", ["schemaID", (-(1))])));
        await $.stmt((await $.mcall((await $.wv([$t19, $t20], "TotalTraffics", C, false)), "SetVariable", ["operationDate", (await $.wv([$t19, $t20], "operationDate", C, false))])));
      }
      { const $t23 = await $.iset((await $.mv((await $.wv([$t19, $t20], "TotalTraffics", C, false)), "SQL")), [26], (await $.wv([$t19, $t20], "BuildBranchCondition", C, false))); if ($t23 !== undefined) { await $.mset((await $.wv([$t19, $t20], "TotalTraffics", C, false)), "SQL", $t23); } }
      await $.mcall((await $.wv([$t19, $t20], "TotalTraffics", C, false)), "Open", []);
      await $.stmt($.wcall([$t19, $t20], "ShowModal", [], C));
    }
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TExpertAnalysX", "RadioButton1Click", async function RadioButton1Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.eq((await $.mv((L0["sender"]), "Tag")), 1))) {
    await $.mset((await $.mv((await $.v(C, "MainReport")), "QRGroupOperation")), "ForceNewPage", false);
  } else {
    await $.mset((await $.mv((await $.v(C, "MainReport")), "QRGroupOperation")), "ForceNewPage", true);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TExpertAnalysX", "DTPSysdatChange", async function DTPSysdatChange(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.set(C, "OperationDate", (await $.call(C, "Int", [(await $.mv((L0["sender"]), "DateTime"))])));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TExpertAnalysX", "RBOstatClick", async function RBOstatClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.eq((await $.mv((L0["sender"]), "Tag")), 1))) {
    await $.set(C, "CurrencyField", "LastRest");
  } else {
    await $.set(C, "CurrencyField", "LastLRest");
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TExpertAnalysX", "SBSchemaReportClick", async function SBSchemaReportClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "operationkind": 0};
  await $.fixArgs(L0, ["sender"]);
  L0["operationkind"] = (await $.mv((L0["sender"]), "Tag"));
  {
    const $t24 = (await $.v(C, "MainReport"));
    const $t25 = (await $.wcall([$t24], "TOracleDataSet", [(await $.wv([$t24], "DataSet", C, false))], C));
    await $.stmt($.wcall([$t24, $t25], "Close", [], C));
    await $.stmt((await $.wcall([$t24, $t25], "SetVariable", ["OperationDate", (await $.wv([$t24, $t25], "OperationDate", C, false))], C)));
    await $.wset([$t24, $t25], "Filtered", (await $.wv([$t24, $t25], "False", C, false)), C);
    await $.wset([$t24, $t25], "Filter", $.add($.add($.add($.add($.add($.add("(abs(", (await $.wv([$t24, $t25], "CurrencyField", C, false))), ") >="), (await $.wcall([$t24, $t25], "FloatToStr", [(await $.mv((await $.wv([$t24, $t25], "CELimit", C, false)), "value"))], C))), ")"), (await $.wv([$t24, $t25], "CheckCurrency", C, false))), (await $.wcall([$t24, $t25], "BuildOperationCondition", [(await $.wv([$t24, $t25], "OperationKind", { get: async () => L0["operationkind"], set: async (v) => { L0["operationkind"] = v; }, local: true }, false))], C))), C);
    await $.wset([$t24, $t25], "Filtered", (await $.wv([$t24, $t25], "True", C, false)), C);
    { const $t26 = await $.iset((await $.wv([$t24, $t25], "SQL", C, false)), [29], (await $.wv([$t24, $t25], "BuildBranchCondition", C, false))); if ($t26 !== undefined) { await $.wset([$t24, $t25], "SQL", $t26, C); } }
    await $.stmt($.wcall([$t24, $t25], "Open", [], C));
    if ($.truthy($.eq((await $.mv((await $.wv([$t24, $t25], "DTPSysdat", C, false)), "Date")), (await $.mv((await $.wv([$t24, $t25], "DTPLastDate", C, false)), "Date"))))) {
      await $.mset((await $.wv([$t24, $t25], "QRLabelDate", C, false)), "Caption", (await $.wcall([$t24, $t25], "FormatDateTime", ["dd/mm/yyyy", (await $.mv((await $.wv([$t24, $t25], "DTPSysdat", C, false)), "DateTime"))], C)));
    } else {
      await $.mset((await $.wv([$t24, $t25], "QRLabelDate", C, false)), "Caption", $.add($.add((await $.wcall([$t24, $t25], "FormatDateTime", ["dd/mm/yyyy", (await $.mv((await $.wv([$t24, $t25], "DTPSysdat", C, false)), "DateTime"))], C)), " - "), (await $.wcall([$t24, $t25], "FormatDateTime", ["dd/mm/yyyy", (await $.mv((await $.wv([$t24, $t25], "DTPLastDate", C, false)), "DateTime"))], C))));
    }
    await $.stmt($.wcall([$t24, $t25], "Preview", [], C));
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TExpertAnalysX", "Aanaliz1Click", async function Aanaliz1Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy((await $.mv((await $.v(C, "RBTotal")), "Checked")))) {
    {
      const $t27 = (await $.v(C, "ExpertDataModul"));
      const $t28 = (await $.wv([$t27], "SchemaTrafficsForm", C, false));
      await $.mcall((await $.wv([$t27, $t28], "SchemaTraffics", C, false)), "CloseAll", []);
      await $.mset((await $.mv((await $.wv([$t27, $t28], "SchemaTraffics", C, false)), "SQL")), "CommaText", (await $.wv([$t27, $t28], "DefaultSchemaTrafficsSQL", C, false)));
      if ($.truthy($.gt((await $.mv((await $.wv([$t27, $t28], "CBCurrency", C, false)), "ItemIndex")), 1))) {
        { const $t29 = await $.iset((await $.mv((await $.wv([$t27, $t28], "SchemaTraffics", C, false)), "SQL")), [22], (await $.wcall([$t27, $t28], "Format", [(await $.idx((await $.mv((await $.wv([$t27, $t28], "SchemaTraffics", C, false)), "SQL")), [22])), [(await $.idx((await $.wv([$t27, $t28], "rate", C, false)), [$.sub((await $.mv((await $.wv([$t27, $t28], "CBCurrency", C, false)), "ItemIndex")), 2)]))]], C))); if ($t29 !== undefined) { await $.mset((await $.wv([$t27, $t28], "SchemaTraffics", C, false)), "SQL", $t29); } }
      } else {
        { const $t30 = await $.iset((await $.mv((await $.wv([$t27, $t28], "SchemaTraffics", C, false)), "SQL")), [22], ""); if ($t30 !== undefined) { await $.mset((await $.wv([$t27, $t28], "SchemaTraffics", C, false)), "SQL", $t30); } }
      }
      { const $t31 = await $.iset((await $.mv((await $.wv([$t27, $t28], "SchemaTraffics", C, false)), "SQL")), [23], (await $.wcall([$t27, $t28], "Format", [(await $.wv([$t27, $t28], "BuildAmmountCondition", C, false)), [(await $.mv((await $.wv([$t27, $t28], "CELimit", C, false)), "value"))]], C))); if ($t31 !== undefined) { await $.mset((await $.wv([$t27, $t28], "SchemaTraffics", C, false)), "SQL", $t31); } }
      await $.stmt((await $.mcall((await $.wv([$t27, $t28], "SchemaTraffics", C, false)), "SetVariable", ["schemaID", (await $.mv((await $.mcall((await $.wv([$t27, $t28], "Schemas", C, false)), "FieldByName", ["ID"])), "AsInteger"))])));
      await $.stmt((await $.mcall((await $.wv([$t27, $t28], "SchemaTraffics", C, false)), "SetVariable", ["operationDate", (await $.wv([$t27, $t28], "operationDate", C, false))])));
      { const $t32 = await $.iset((await $.mv((await $.wv([$t27, $t28], "SchemaTraffics", C, false)), "SQL")), [25], (await $.wv([$t27, $t28], "BuildBranchCondition", C, false))); if ($t32 !== undefined) { await $.mset((await $.wv([$t27, $t28], "SchemaTraffics", C, false)), "SQL", $t32); } }
      await $.mcall((await $.wv([$t27, $t28], "SchemaTraffics", C, false)), "Open", []);
      await $.stmt($.wcall([$t27, $t28], "ShowModal", [], C));
    }
  } else {
    {
      const $t33 = (await $.v(C, "ExpertDataModul"));
      const $t34 = (await $.wv([$t33], "MainTraffics", C, false));
      await $.mcall((await $.wv([$t33, $t34], "TotalTraffics", C, false)), "CloseAll", []);
      await $.mset((await $.mv((await $.wv([$t33, $t34], "TotalTraffics", C, false)), "SQL")), "CommaText", (await $.wv([$t33, $t34], "DefaultTotalTrafficsSQL", C, false)));
      { const $t35 = await $.iset((await $.mv((await $.wv([$t33, $t34], "TotalTraffics", C, false)), "SQL")), [23], (await $.wv([$t33, $t34], "GenerateCurrencyFilter", C, false))); if ($t35 !== undefined) { await $.mset((await $.wv([$t33, $t34], "TotalTraffics", C, false)), "SQL", $t35); } }
      { const $t36 = await $.iset((await $.mv((await $.wv([$t33, $t34], "TotalTraffics", C, false)), "SQL")), [24], (await $.wcall([$t33, $t34], "Format", [(await $.wv([$t33, $t34], "BuildAmmountCondition", C, false)), [(await $.mv((await $.wv([$t33, $t34], "CELimit", C, false)), "value"))]], C))); if ($t36 !== undefined) { await $.mset((await $.wv([$t33, $t34], "TotalTraffics", C, false)), "SQL", $t36); } }
      await $.stmt((await $.mcall((await $.wv([$t33, $t34], "TotalTraffics", C, false)), "SetVariable", ["operationID", (-(1))])));
      await $.stmt((await $.mcall((await $.wv([$t33, $t34], "TotalTraffics", C, false)), "SetVariable", ["balanceID", (-(1))])));
      await $.stmt((await $.mcall((await $.wv([$t33, $t34], "TotalTraffics", C, false)), "SetVariable", ["schemaID", (await $.mv((await $.mcall((await $.wv([$t33, $t34], "Schemas", C, false)), "FieldByName", ["ID"])), "AsInteger"))])));
      await $.stmt((await $.mcall((await $.wv([$t33, $t34], "TotalTraffics", C, false)), "SetVariable", ["operationDate", (await $.wv([$t33, $t34], "operationDate", C, false))])));
      { const $t37 = await $.iset((await $.mv((await $.wv([$t33, $t34], "TotalTraffics", C, false)), "SQL")), [26], (await $.wv([$t33, $t34], "BuildBranchCondition", C, false))); if ($t37 !== undefined) { await $.mset((await $.wv([$t33, $t34], "TotalTraffics", C, false)), "SQL", $t37); } }
      await $.mcall((await $.wv([$t33, $t34], "TotalTraffics", C, false)), "Open", []);
      await $.stmt($.wcall([$t33, $t34], "ShowModal", [], C));
    }
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TExpertAnalysX", "CBCurrencyChange", async function CBCurrencyChange(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t38 = (await $.v(C, "MainReport"));
    await $.mset((await $.wv([$t38], "QRExprSumOstat", C, false)), "Enabled", $.gt((await $.mv(((await $.wv([$t38], "Sender", { get: async () => L0["sender"], set: async (v) => { L0["sender"] = v; }, local: true }, false))), "ItemIndex")), 2));
    await $.mset((await $.wv([$t38], "QRExprTotal", C, false)), "Enabled", $.gt((await $.mv(((await $.wv([$t38], "Sender", { get: async () => L0["sender"], set: async (v) => { L0["sender"] = v; }, local: true }, false))), "ItemIndex")), 2));
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TExpertAnalysX", "CheckBox1Click", async function CheckBox1Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t39 = (await $.v(C, "MainReport"));
    await $.mset((await $.wv([$t39], "QRDBName", C, false)), "Enabled", (await $.mv(((await $.wv([$t39], "Sender", { get: async () => L0["sender"], set: async (v) => { L0["sender"] = v; }, local: true }, false))), "Checked")));
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TExpertAnalysX", "CheckBox2Click", async function CheckBox2Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t40 = (await $.v(C, "MainReport"));
    await $.mset((await $.wv([$t40], "QRDBCurrencyName", C, false)), "Enabled", (await $.mv(((await $.wv([$t40], "Sender", { get: async () => L0["sender"], set: async (v) => { L0["sender"] = v; }, local: true }, false))), "Checked")));
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TExpertAnalysX", "PanelSchemaClick", async function PanelSchemaClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "gridname": ''};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t41 = (await $.call(C, "TCheckBox", [L0["sender"]]));
    await $.wset([$t41], "GridName", $.add((await $.wv([$t41], "Name", C, false)), "s"), { get: async () => L0["gridname"], set: async (v) => { L0["gridname"] = v; }, local: true });
  }
  await $.mset((await $.call(C, "TDBGrid", [(await $.call(C, "FindComponent", [L0["gridname"]]))])), "Visible", (await $.mv((await $.call(C, "TCheckBox", [L0["sender"]])), "Checked")));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TExpertAnalysX", "RBExpandClick", async function RBExpandClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mset((await $.v(C, "TMExcellReport")), "Enabled", (await $.call(C, "IntToBool", [(await $.mv((L0["sender"]), "Tag"))])));
  await $.mset((await $.v(C, "TMExcellRep")), "Enabled", (await $.mv((await $.v(C, "TMExcellReport")), "Enabled")));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TExpertAnalysX", "CheckBox3Click", async function CheckBox3Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mset((await $.mv((await $.v(C, "MainReport")), "QRGroupBalance")), "Enabled", (await $.mv((await $.call(C, "TCheckBox", [L0["sender"]])), "Checked")));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TExpertAnalysX", "DTPLastDateChange", async function DTPLastDateChange(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.set(C, "LastDate", (await $.call(C, "Int", [(await $.mv((L0["sender"]), "DateTime"))])));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TExpertAnalysX", "GetBeginPeriod", async function GetBeginPeriod(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"begindate": $.copyArg(p0), result: 0};
  await $.fixArgs(L0, ["begindate"]);
  {
    const $t42 = (await $.v(C, "ExpertDataModul"));
    const $t43 = (await $.wv([$t42], "PeriodData", C, false));
    await $.stmt($.wcall([$t42, $t43], "CloseAll", [], C));
    await $.stmt((await $.wcall([$t42, $t43], "SetVariable", ["BeginDate", (await $.wv([$t42, $t43], "BeginDate", { get: async () => L0["begindate"], set: async (v) => { L0["begindate"] = v; }, local: true }, false))], C)));
    await $.stmt($.wcall([$t42, $t43], "Open", [], C));
    if ($.truthy((await $.mv((await $.wcall([$t42, $t43], "FieldByName", ["BeginPeriod"], C)), "IsNull")))) {
      await $.wset([$t42, $t43], "Result", (await $.wv([$t42, $t43], "BeginDate", { get: async () => L0["begindate"], set: async (v) => { L0["begindate"] = v; }, local: true }, false)), { get: async () => L0["result"], set: async (v) => { L0["result"] = v; }, local: true });
    } else {
      await $.wset([$t42, $t43], "Result", (await $.mv((await $.wcall([$t42, $t43], "FieldByName", ["BeginPeriod"], C)), "AsDateTime")), { get: async () => L0["result"], set: async (v) => { L0["result"] = v; }, local: true });
    }
  }
  return L0.result;
}, {"params": ["BeginDate"], "kind": "function", "ptypes": ["TDateTime"]});
  return U;
}
