// Generated from OutExcelImport.pas by pas2js — do not edit by hand; regenerate instead.
/* eslint-disable */
// @ts-nocheck

export default function define($) {
  const U = $.unit("OutExcelImport", ["Windows", "Messages", "SysUtils", "Classes", "Graphics", "Controls", "Forms", "Dialogs", "ActiveX", "AxCtrls", "OutExcelImport_TLB", "StdVcl", "ImgList", "Grids", "DBGrids", "DBCtrls", "StdCtrls", "ComCtrls", "ToolWin", "ExtCtrls", "Oracle", "DB", "OracleData", "ComObj", "ComServ", "sboapiDataModuleImpl"]);
  const C = [U];
  U.defClass("TOutExcelImp", "TActiveForm", {"panel1": {"name": "Panel1", "type": "TPanel"}, "panel2": {"name": "Panel2", "type": "TPanel"}, "toolbar1": {"name": "ToolBar1", "type": "TToolBar"}, "toolbutton1": {"name": "ToolButton1", "type": "TToolButton"}, "label1": {"name": "Label1", "type": "TLabel"}, "toolbutton2": {"name": "ToolButton2", "type": "TToolButton"}, "toolbutton3": {"name": "ToolButton3", "type": "TToolButton"}, "toolbutton6": {"name": "ToolButton6", "type": "TToolButton"}, "toolbutton5": {"name": "ToolButton5", "type": "TToolButton"}, "toolbutton4": {"name": "ToolButton4", "type": "TToolButton"}, "toolbutton7": {"name": "ToolButton7", "type": "TToolButton"}, "combobox1": {"name": "ComboBox1", "type": "TDBLookupComboBox"}, "dblookupcombobox1": {"name": "DBLookupComboBox1", "type": "TDBLookupComboBox"}, "imagelist1": {"name": "ImageList1", "type": "TImageList"}, "opendialog1": {"name": "OpenDialog1", "type": "TOpenDialog"}, "datasource2": {"name": "DataSource2", "type": "TDataSource"}, "oracledataset1": {"name": "OracleDataSet1", "type": "TOracleDataSet"}, "oracledataset2": {"name": "OracleDataSet2", "type": "TOracleDataSet"}, "datasource1": {"name": "DataSource1", "type": "TDataSource"}, "oraclepackage1": {"name": "OraclePackage1", "type": "TOraclePackage"}, "dbgrid1": {"name": "DBGrid1", "type": "TDBGrid"}, "fevents": {"name": "FEvents", "type": "IOutExcelImpEvents"}}, {});
  U.init(async () => {
  });
  U.method("TOutExcelImp", "DefinePropertyPages", async function DefinePropertyPages(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"definepropertypage": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["definepropertypage"]);
  return L0.result;
}, {"params": ["DefinePropertyPage"], "kind": "procedure", "ptypes": ["TDefinePropertyPage"]});
  U.method("TOutExcelImp", "EventSinkChanged", async function EventSinkChanged(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"eventsink": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["eventsink"]);
  await $.set(C, "FEvents", L0["eventsink"]);
  await $.inherited(Self, "TOutExcelImp", "EventSinkChanged", [L0["eventsink"]], arguments);
  return L0.result;
}, {"params": ["EventSink"], "kind": "procedure", "ptypes": ["IUnknown"]});
  U.method("TOutExcelImp", "Initialize", async function Initialize(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: undefined};
  await $.inherited(Self, "TOutExcelImp", "Initialize", null, arguments);
  await $.set(C, "OnActivate", (await $.ref_(C, "ActivateEvent")));
  await $.set(C, "OnClick", (await $.ref_(C, "ClickEvent")));
  await $.set(C, "OnCreate", (await $.ref_(C, "CreateEvent")));
  await $.set(C, "OnDblClick", (await $.ref_(C, "DblClickEvent")));
  await $.set(C, "OnDeactivate", (await $.ref_(C, "DeactivateEvent")));
  await $.set(C, "OnDestroy", (await $.ref_(C, "DestroyEvent")));
  await $.set(C, "OnKeyPress", (await $.ref_(C, "KeyPressEvent")));
  await $.set(C, "OnMouseEnter", (await $.ref_(C, "MouseEnterEvent")));
  await $.set(C, "OnMouseLeave", (await $.ref_(C, "MouseLeaveEvent")));
  await $.set(C, "OnPaint", (await $.ref_(C, "PaintEvent")));
  return L0.result;
}, {"params": [], "kind": "procedure", "ptypes": []});
  U.method("TOutExcelImp", "Get_Active", async function Get_Active(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: false};
  L0["result"] = (await $.v(C, "Active"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TOutExcelImp", "Get_AlignDisabled", async function Get_AlignDisabled(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: false};
  L0["result"] = (await $.v(C, "AlignDisabled"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TOutExcelImp", "Get_AlignWithMargins", async function Get_AlignWithMargins(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: false};
  L0["result"] = (await $.v(C, "AlignWithMargins"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TOutExcelImp", "Get_AutoScroll", async function Get_AutoScroll(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: false};
  L0["result"] = (await $.v(C, "AutoScroll"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TOutExcelImp", "Get_AutoSize", async function Get_AutoSize(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: false};
  L0["result"] = (await $.v(C, "AutoSize"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TOutExcelImp", "Get_AxBorderStyle", async function Get_AxBorderStyle(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: null};
  L0["result"] = (await $.call(C, "Ord", [(await $.v(C, "AxBorderStyle"))]));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TOutExcelImp", "Get_BorderWidth", async function Get_BorderWidth(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: 0};
  L0["result"] = (await $.call(C, "Integer", [(await $.v(C, "BorderWidth"))]));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TOutExcelImp", "Get_Caption", async function Get_Caption(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: ''};
  L0["result"] = (await $.call(C, "WideString", [(await $.v(C, "Caption"))]));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TOutExcelImp", "Get_Color", async function Get_Color(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: null};
  L0["result"] = (await $.call(C, "OLE_COLOR", [(await $.v(C, "Color"))]));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TOutExcelImp", "Get_DockSite", async function Get_DockSite(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: false};
  L0["result"] = (await $.v(C, "DockSite"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TOutExcelImp", "Get_DoubleBuffered", async function Get_DoubleBuffered(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: false};
  L0["result"] = (await $.v(C, "DoubleBuffered"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TOutExcelImp", "Get_DropTarget", async function Get_DropTarget(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: false};
  L0["result"] = (await $.v(C, "DropTarget"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TOutExcelImp", "Get_Enabled", async function Get_Enabled(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: false};
  L0["result"] = (await $.v(C, "Enabled"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TOutExcelImp", "Get_ExplicitHeight", async function Get_ExplicitHeight(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: 0};
  L0["result"] = (await $.v(C, "ExplicitHeight"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TOutExcelImp", "Get_ExplicitLeft", async function Get_ExplicitLeft(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: 0};
  L0["result"] = (await $.v(C, "ExplicitLeft"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TOutExcelImp", "Get_ExplicitTop", async function Get_ExplicitTop(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: 0};
  L0["result"] = (await $.v(C, "ExplicitTop"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TOutExcelImp", "Get_ExplicitWidth", async function Get_ExplicitWidth(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: 0};
  L0["result"] = (await $.v(C, "ExplicitWidth"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TOutExcelImp", "Get_Font", async function Get_Font(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: null};
  await $.stmt((await $.call(C, "GetOleFont", [(await $.v(C, "Font")), L0["result"]])));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TOutExcelImp", "Get_HelpFile", async function Get_HelpFile(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: ''};
  L0["result"] = (await $.call(C, "WideString", [(await $.v(C, "HelpFile"))]));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TOutExcelImp", "Get_KeyPreview", async function Get_KeyPreview(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: false};
  L0["result"] = (await $.v(C, "KeyPreview"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TOutExcelImp", "Get_MouseInClient", async function Get_MouseInClient(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: false};
  L0["result"] = (await $.v(C, "MouseInClient"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TOutExcelImp", "Get_ParentCustomHint", async function Get_ParentCustomHint(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: false};
  L0["result"] = (await $.v(C, "ParentCustomHint"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TOutExcelImp", "Get_ParentDoubleBuffered", async function Get_ParentDoubleBuffered(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: false};
  L0["result"] = (await $.v(C, "ParentDoubleBuffered"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TOutExcelImp", "Get_PixelsPerInch", async function Get_PixelsPerInch(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: 0};
  L0["result"] = (await $.v(C, "PixelsPerInch"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TOutExcelImp", "Get_PopupMode", async function Get_PopupMode(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: null};
  L0["result"] = (await $.call(C, "Ord", [(await $.v(C, "PopupMode"))]));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TOutExcelImp", "Get_PrintScale", async function Get_PrintScale(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: null};
  L0["result"] = (await $.call(C, "Ord", [(await $.v(C, "PrintScale"))]));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TOutExcelImp", "Get_Scaled", async function Get_Scaled(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: false};
  L0["result"] = (await $.v(C, "Scaled"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TOutExcelImp", "Get_ScreenSnap", async function Get_ScreenSnap(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: false};
  L0["result"] = (await $.v(C, "ScreenSnap"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TOutExcelImp", "Get_SnapBuffer", async function Get_SnapBuffer(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: 0};
  L0["result"] = (await $.v(C, "SnapBuffer"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TOutExcelImp", "Get_UseDockManager", async function Get_UseDockManager(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: false};
  L0["result"] = (await $.v(C, "UseDockManager"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TOutExcelImp", "Get_Visible", async function Get_Visible(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: false};
  L0["result"] = (await $.v(C, "Visible"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TOutExcelImp", "Get_VisibleDockClientCount", async function Get_VisibleDockClientCount(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: 0};
  L0["result"] = (await $.v(C, "VisibleDockClientCount"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TOutExcelImp", "_Set_Font", async function _Set_Font(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.asRef(p0), result: undefined};
  await $.stmt((await $.call(C, "SetOleFont", [(await $.v(C, "Font")), (await L0["value"].get())])));
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["IFontDisp"]});
  U.method("TOutExcelImp", "ActivateEvent", async function ActivateEvent(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.ne((await $.v(C, "FEvents")), null))) {
    await $.mcall((await $.v(C, "FEvents")), "OnActivate", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TOutExcelImp", "ActiveFormCreate", async function ActiveFormCreate(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mcall((await $.v(C, "OracleDataSet1")), "Close", []);
  await $.mcall((await $.v(C, "OracleDataSet1")), "Open", []);
  await $.stmt((await $.mcall((await $.v(C, "oraclePackage1")), "CallProcedure", ["Del_outexcel", []])));
  await $.mcall((await $.v(C, "OracleDataSet1")), "Refresh", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TOutExcelImp", "ClickEvent", async function ClickEvent(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.ne((await $.v(C, "FEvents")), null))) {
    await $.mcall((await $.v(C, "FEvents")), "OnClick", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TOutExcelImp", "CreateEvent", async function CreateEvent(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.ne((await $.v(C, "FEvents")), null))) {
    await $.mcall((await $.v(C, "FEvents")), "OnCreate", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TOutExcelImp", "DblClickEvent", async function DblClickEvent(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.ne((await $.v(C, "FEvents")), null))) {
    await $.mcall((await $.v(C, "FEvents")), "OnDblClick", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TOutExcelImp", "DeactivateEvent", async function DeactivateEvent(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.ne((await $.v(C, "FEvents")), null))) {
    await $.mcall((await $.v(C, "FEvents")), "OnDeactivate", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TOutExcelImp", "DestroyEvent", async function DestroyEvent(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.ne((await $.v(C, "FEvents")), null))) {
    await $.mcall((await $.v(C, "FEvents")), "OnDestroy", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TOutExcelImp", "KeyPressEvent", async function KeyPressEvent(Self, p0, p1) {
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
  U.method("TOutExcelImp", "MouseEnterEvent", async function MouseEnterEvent(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.ne((await $.v(C, "FEvents")), null))) {
    await $.mcall((await $.v(C, "FEvents")), "OnMouseEnter", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TOutExcelImp", "MouseLeaveEvent", async function MouseLeaveEvent(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.ne((await $.v(C, "FEvents")), null))) {
    await $.mcall((await $.v(C, "FEvents")), "OnMouseLeave", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TOutExcelImp", "PaintEvent", async function PaintEvent(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.ne((await $.v(C, "FEvents")), null))) {
    await $.mcall((await $.v(C, "FEvents")), "OnPaint", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TOutExcelImp", "Set_AlignWithMargins", async function Set_AlignWithMargins(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "AlignWithMargins", L0["value"]);
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["WordBool"]});
  U.method("TOutExcelImp", "Set_AutoScroll", async function Set_AutoScroll(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "AutoScroll", L0["value"]);
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["WordBool"]});
  U.method("TOutExcelImp", "Set_AutoSize", async function Set_AutoSize(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "AutoSize", L0["value"]);
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["WordBool"]});
  U.method("TOutExcelImp", "Set_AxBorderStyle", async function Set_AxBorderStyle(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "AxBorderStyle", (await $.call(C, "TActiveFormBorderStyle", [L0["value"]])));
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["TxActiveFormBorderStyle"]});
  U.method("TOutExcelImp", "Set_BorderWidth", async function Set_BorderWidth(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "BorderWidth", (await $.call(C, "TBorderWidth", [L0["value"]])));
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["Integer"]});
  U.method("TOutExcelImp", "Set_Caption", async function Set_Caption(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "Caption", (await $.call(C, "TCaption", [L0["value"]])));
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["WideString"]});
  U.method("TOutExcelImp", "Set_Color", async function Set_Color(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "Color", (await $.call(C, "TColor", [L0["value"]])));
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["OLE_COLOR"]});
  U.method("TOutExcelImp", "Set_DockSite", async function Set_DockSite(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "DockSite", L0["value"]);
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["WordBool"]});
  U.method("TOutExcelImp", "Set_DoubleBuffered", async function Set_DoubleBuffered(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "DoubleBuffered", L0["value"]);
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["WordBool"]});
  U.method("TOutExcelImp", "Set_DropTarget", async function Set_DropTarget(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "DropTarget", L0["value"]);
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["WordBool"]});
  U.method("TOutExcelImp", "Set_Enabled", async function Set_Enabled(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "Enabled", L0["value"]);
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["WordBool"]});
  U.method("TOutExcelImp", "Set_Font", async function Set_Font(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.stmt((await $.call(C, "SetOleFont", [(await $.v(C, "Font")), L0["value"]])));
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["IFontDisp"]});
  U.method("TOutExcelImp", "Set_HelpFile", async function Set_HelpFile(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "HelpFile", (await $.call(C, "string", [L0["value"]])));
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["WideString"]});
  U.method("TOutExcelImp", "Set_KeyPreview", async function Set_KeyPreview(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "KeyPreview", L0["value"]);
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["WordBool"]});
  U.method("TOutExcelImp", "Set_ParentCustomHint", async function Set_ParentCustomHint(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "ParentCustomHint", L0["value"]);
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["WordBool"]});
  U.method("TOutExcelImp", "Set_ParentDoubleBuffered", async function Set_ParentDoubleBuffered(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "ParentDoubleBuffered", L0["value"]);
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["WordBool"]});
  U.method("TOutExcelImp", "Set_PixelsPerInch", async function Set_PixelsPerInch(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "PixelsPerInch", L0["value"]);
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["Integer"]});
  U.method("TOutExcelImp", "Set_PopupMode", async function Set_PopupMode(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "PopupMode", (await $.call(C, "TPopupMode", [L0["value"]])));
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["TxPopupMode"]});
  U.method("TOutExcelImp", "Set_PrintScale", async function Set_PrintScale(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "PrintScale", (await $.call(C, "TPrintScale", [L0["value"]])));
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["TxPrintScale"]});
  U.method("TOutExcelImp", "Set_Scaled", async function Set_Scaled(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "Scaled", L0["value"]);
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["WordBool"]});
  U.method("TOutExcelImp", "Set_ScreenSnap", async function Set_ScreenSnap(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "ScreenSnap", L0["value"]);
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["WordBool"]});
  U.method("TOutExcelImp", "Set_SnapBuffer", async function Set_SnapBuffer(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "SnapBuffer", L0["value"]);
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["Integer"]});
  U.method("TOutExcelImp", "Set_UseDockManager", async function Set_UseDockManager(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "UseDockManager", L0["value"]);
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["WordBool"]});
  U.method("TOutExcelImp", "Set_Visible", async function Set_Visible(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "Visible", L0["value"]);
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["WordBool"]});
  U.method("TOutExcelImp", "ToolButton1Click", async function ToolButton1Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "excel": null, "m": 0, "n": 0, "b": ''};
  await $.fixArgs(L0, ["sender"]);
  L0["xlcelltypelast"] = 11;
  if ($.truthy($.not((await $.mv((await $.v(C, "OpenDialog1")), "Execute"))))) {
    return L0.result;
  }
  L0["excel"] = (await $.call(C, "CreateoleObject", ["Excel.Application"]));
  await $.stmt((await $.mcall((await $.mv(L0["excel"], "Workbooks")), "Open", [(await $.mv((await $.v(C, "OpenDialog1")), "FileName"))])));
  L0["m"] = 2;
  L0["n"] = $.add((await $.mv((await $.mcall((await $.mv(L0["excel"], "ActiveCell")), "SpecialCells", [L0["xlcelltypelast"]])), "Row")), 1);
  await $.mcall((await $.v(C, "OracleDataSet1")), "Close", []);
  await $.mcall((await $.v(C, "OracleDataSet1")), "Open", []);
  while ($.truthy($.ne(L0["m"], L0["n"]))) {
    await $.mcall((await $.v(C, "OracleDataSet1")), "Insert", []);
    await $.mset((await $.mcall((await $.v(C, "OracleDataSet1")), "FieldByName", ["f1"])), "Value", (await $.mv((await $.idx((await $.mv(L0["excel"], "Cells")), [L0["m"], 1])), "value")));
    await $.mset((await $.mcall((await $.v(C, "OracleDataSet1")), "FieldByName", ["f2"])), "Value", (await $.mv((await $.idx((await $.mv(L0["excel"], "Cells")), [L0["m"], 2])), "value")));
    await $.mset((await $.mcall((await $.v(C, "OracleDataSet1")), "FieldByName", ["f3"])), "Value", (await $.mv((await $.idx((await $.mv(L0["excel"], "Cells")), [L0["m"], 3])), "value")));
    await $.mset((await $.mcall((await $.v(C, "OracleDataSet1")), "FieldByName", ["f4"])), "Value", (await $.mv((await $.idx((await $.mv(L0["excel"], "Cells")), [L0["m"], 4])), "value")));
    await $.mset((await $.mcall((await $.v(C, "OracleDataSet1")), "FieldByName", ["f5"])), "Value", (await $.mv((await $.idx((await $.mv(L0["excel"], "Cells")), [L0["m"], 5])), "value")));
    await $.mset((await $.mcall((await $.v(C, "OracleDataSet1")), "FieldByName", ["f6"])), "Value", (await $.mv((await $.idx((await $.mv(L0["excel"], "Cells")), [L0["m"], 6])), "value")));
    await $.mset((await $.mcall((await $.v(C, "OracleDataSet1")), "FieldByName", ["f7"])), "Value", (await $.mv((await $.idx((await $.mv(L0["excel"], "Cells")), [L0["m"], 7])), "value")));
    await $.mset((await $.mcall((await $.v(C, "OracleDataSet1")), "FieldByName", ["f8"])), "Value", (await $.mv((await $.idx((await $.mv(L0["excel"], "Cells")), [L0["m"], 8])), "value")));
    await $.mset((await $.mcall((await $.v(C, "OracleDataSet1")), "FieldByName", ["f9"])), "Value", (await $.mv((await $.idx((await $.mv(L0["excel"], "Cells")), [L0["m"], 9])), "value")));
    await $.mset((await $.mcall((await $.v(C, "OracleDataSet1")), "FieldByName", ["f10"])), "Value", (await $.mv((await $.idx((await $.mv(L0["excel"], "Cells")), [L0["m"], 10])), "value")));
    await $.mset((await $.mcall((await $.v(C, "OracleDataSet1")), "FieldByName", ["f11"])), "Value", (await $.mv((await $.idx((await $.mv(L0["excel"], "Cells")), [L0["m"], 11])), "value")));
    await $.mset((await $.mcall((await $.v(C, "OracleDataSet1")), "FieldByName", ["f12"])), "Value", (await $.mv((await $.idx((await $.mv(L0["excel"], "Cells")), [L0["m"], 12])), "value")));
    await $.mset((await $.mcall((await $.v(C, "OracleDataSet1")), "FieldByName", ["f13"])), "Value", (await $.mv((await $.idx((await $.mv(L0["excel"], "Cells")), [L0["m"], 13])), "value")));
    await $.mset((await $.mcall((await $.v(C, "OracleDataSet1")), "FieldByName", ["f14"])), "Value", (await $.mv((await $.idx((await $.mv(L0["excel"], "Cells")), [L0["m"], 14])), "value")));
    await $.mset((await $.mcall((await $.v(C, "OracleDataSet1")), "FieldByName", ["f15"])), "Value", (await $.mv((await $.idx((await $.mv(L0["excel"], "Cells")), [L0["m"], 15])), "value")));
    await $.mset((await $.mcall((await $.v(C, "OracleDataSet1")), "FieldByName", ["f16"])), "Value", (await $.mv((await $.idx((await $.mv(L0["excel"], "Cells")), [L0["m"], 16])), "value")));
    await $.mset((await $.mcall((await $.v(C, "OracleDataSet1")), "FieldByName", ["f17"])), "Value", (await $.mv((await $.idx((await $.mv(L0["excel"], "Cells")), [L0["m"], 17])), "value")));
    await $.mset((await $.mcall((await $.v(C, "OracleDataSet1")), "FieldByName", ["f18"])), "Value", (await $.mv((await $.idx((await $.mv(L0["excel"], "Cells")), [L0["m"], 18])), "value")));
    await $.mset((await $.mcall((await $.v(C, "OracleDataSet1")), "FieldByName", ["f19"])), "Value", (await $.mv((await $.idx((await $.mv(L0["excel"], "Cells")), [L0["m"], 19])), "value")));
    await $.mset((await $.mcall((await $.v(C, "OracleDataSet1")), "FieldByName", ["f20"])), "Value", (await $.mv((await $.idx((await $.mv(L0["excel"], "Cells")), [L0["m"], 20])), "value")));
    await $.mset((await $.mcall((await $.v(C, "OracleDataSet1")), "FieldByName", ["f21"])), "Value", (await $.mv((await $.idx((await $.mv(L0["excel"], "Cells")), [L0["m"], 21])), "value")));
    await $.mset((await $.mcall((await $.v(C, "OracleDataSet1")), "FieldByName", ["f22"])), "Value", (await $.mv((await $.idx((await $.mv(L0["excel"], "Cells")), [L0["m"], 22])), "value")));
    await $.mset((await $.mcall((await $.v(C, "OracleDataSet1")), "FieldByName", ["f23"])), "Value", (await $.mv((await $.idx((await $.mv(L0["excel"], "Cells")), [L0["m"], 23])), "value")));
    await $.mset((await $.mcall((await $.v(C, "OracleDataSet1")), "FieldByName", ["f24"])), "Value", (await $.mv((await $.idx((await $.mv(L0["excel"], "Cells")), [L0["m"], 24])), "value")));
    await $.mset((await $.mcall((await $.v(C, "OracleDataSet1")), "FieldByName", ["f25"])), "Value", (await $.mv((await $.idx((await $.mv(L0["excel"], "Cells")), [L0["m"], 25])), "value")));
    await $.mset((await $.mcall((await $.v(C, "OracleDataSet1")), "FieldByName", ["f26"])), "Value", (await $.mv((await $.idx((await $.mv(L0["excel"], "Cells")), [L0["m"], 26])), "value")));
    await $.mset((await $.mcall((await $.v(C, "OracleDataSet1")), "FieldByName", ["f27"])), "Value", (await $.mv((await $.idx((await $.mv(L0["excel"], "Cells")), [L0["m"], 27])), "value")));
    await $.mset((await $.mcall((await $.v(C, "OracleDataSet1")), "FieldByName", ["f28"])), "Value", (await $.mv((await $.idx((await $.mv(L0["excel"], "Cells")), [L0["m"], 28])), "value")));
    await $.mset((await $.mcall((await $.v(C, "OracleDataSet1")), "FieldByName", ["f29"])), "Value", (await $.mv((await $.idx((await $.mv(L0["excel"], "Cells")), [L0["m"], 29])), "value")));
    await $.mset((await $.mcall((await $.v(C, "OracleDataSet1")), "FieldByName", ["f30"])), "Value", (await $.mv((await $.idx((await $.mv(L0["excel"], "Cells")), [L0["m"], 30])), "value")));
    await $.mset((await $.mcall((await $.v(C, "OracleDataSet1")), "FieldByName", ["f31"])), "Value", (await $.mv((await $.idx((await $.mv(L0["excel"], "Cells")), [L0["m"], 31])), "value")));
    await $.mset((await $.mcall((await $.v(C, "OracleDataSet1")), "FieldByName", ["f32"])), "Value", (await $.mv((await $.idx((await $.mv(L0["excel"], "Cells")), [L0["m"], 32])), "value")));
    await $.mset((await $.mcall((await $.v(C, "OracleDataSet1")), "FieldByName", ["f33"])), "Value", (await $.mv((await $.idx((await $.mv(L0["excel"], "Cells")), [L0["m"], 33])), "value")));
    await $.mset((await $.mcall((await $.v(C, "OracleDataSet1")), "FieldByName", ["f34"])), "Value", (await $.mv((await $.idx((await $.mv(L0["excel"], "Cells")), [L0["m"], 34])), "value")));
    await $.mset((await $.mcall((await $.v(C, "OracleDataSet1")), "FieldByName", ["f35"])), "Value", (await $.mv((await $.idx((await $.mv(L0["excel"], "Cells")), [L0["m"], 35])), "value")));
    await $.mset((await $.mcall((await $.v(C, "OracleDataSet1")), "FieldByName", ["f36"])), "Value", (await $.mv((await $.idx((await $.mv(L0["excel"], "Cells")), [L0["m"], 36])), "value")));
    await $.mset((await $.mcall((await $.v(C, "OracleDataSet1")), "FieldByName", ["f37"])), "Value", (await $.mv((await $.idx((await $.mv(L0["excel"], "Cells")), [L0["m"], 37])), "value")));
    await $.mset((await $.mcall((await $.v(C, "OracleDataSet1")), "FieldByName", ["f38"])), "Value", (await $.mv((await $.idx((await $.mv(L0["excel"], "Cells")), [L0["m"], 38])), "value")));
    await $.mset((await $.mcall((await $.v(C, "OracleDataSet1")), "FieldByName", ["f39"])), "Value", (await $.mv((await $.idx((await $.mv(L0["excel"], "Cells")), [L0["m"], 39])), "value")));
    await $.mset((await $.mcall((await $.v(C, "OracleDataSet1")), "FieldByName", ["f40"])), "Value", (await $.mv((await $.idx((await $.mv(L0["excel"], "Cells")), [L0["m"], 40])), "value")));
    await $.mset((await $.mcall((await $.v(C, "OracleDataSet1")), "FieldByName", ["f41"])), "Value", (await $.mv((await $.idx((await $.mv(L0["excel"], "Cells")), [L0["m"], 41])), "value")));
    await $.mset((await $.mcall((await $.v(C, "OracleDataSet1")), "FieldByName", ["f42"])), "Value", (await $.mv((await $.idx((await $.mv(L0["excel"], "Cells")), [L0["m"], 42])), "value")));
    await $.mset((await $.mcall((await $.v(C, "OracleDataSet1")), "FieldByName", ["f43"])), "Value", (await $.mv((await $.idx((await $.mv(L0["excel"], "Cells")), [L0["m"], 43])), "value")));
    await $.mset((await $.mcall((await $.v(C, "OracleDataSet1")), "FieldByName", ["f44"])), "Value", (await $.mv((await $.idx((await $.mv(L0["excel"], "Cells")), [L0["m"], 44])), "value")));
    await $.mset((await $.mcall((await $.v(C, "OracleDataSet1")), "FieldByName", ["f45"])), "Value", (await $.mv((await $.idx((await $.mv(L0["excel"], "Cells")), [L0["m"], 45])), "value")));
    await $.mset((await $.mcall((await $.v(C, "OracleDataSet1")), "FieldByName", ["f46"])), "Value", (await $.mv((await $.idx((await $.mv(L0["excel"], "Cells")), [L0["m"], 46])), "value")));
    await $.mset((await $.mcall((await $.v(C, "OracleDataSet1")), "FieldByName", ["f47"])), "Value", (await $.mv((await $.idx((await $.mv(L0["excel"], "Cells")), [L0["m"], 47])), "value")));
    await $.mset((await $.mcall((await $.v(C, "OracleDataSet1")), "FieldByName", ["f48"])), "Value", (await $.mv((await $.idx((await $.mv(L0["excel"], "Cells")), [L0["m"], 48])), "value")));
    await $.mset((await $.mcall((await $.v(C, "OracleDataSet1")), "FieldByName", ["f49"])), "Value", (await $.mv((await $.idx((await $.mv(L0["excel"], "Cells")), [L0["m"], 49])), "value")));
    await $.mset((await $.mcall((await $.v(C, "OracleDataSet1")), "FieldByName", ["f50"])), "Value", (await $.mv((await $.idx((await $.mv(L0["excel"], "Cells")), [L0["m"], 50])), "value")));
    await $.mset((await $.mcall((await $.v(C, "OracleDataSet1")), "FieldByName", ["f51"])), "Value", (await $.mv((await $.idx((await $.mv(L0["excel"], "Cells")), [L0["m"], 51])), "value")));
    await $.mset((await $.mcall((await $.v(C, "OracleDataSet1")), "FieldByName", ["f52"])), "Value", (await $.mv((await $.idx((await $.mv(L0["excel"], "Cells")), [L0["m"], 52])), "value")));
    await $.mset((await $.mcall((await $.v(C, "OracleDataSet1")), "FieldByName", ["f53"])), "Value", (await $.mv((await $.idx((await $.mv(L0["excel"], "Cells")), [L0["m"], 53])), "value")));
    await $.mset((await $.mcall((await $.v(C, "OracleDataSet1")), "FieldByName", ["f54"])), "Value", (await $.mv((await $.idx((await $.mv(L0["excel"], "Cells")), [L0["m"], 54])), "value")));
    await $.mset((await $.mcall((await $.v(C, "OracleDataSet1")), "FieldByName", ["f55"])), "Value", (await $.mv((await $.idx((await $.mv(L0["excel"], "Cells")), [L0["m"], 55])), "value")));
    await $.mset((await $.mcall((await $.v(C, "OracleDataSet1")), "FieldByName", ["f56"])), "Value", (await $.mv((await $.idx((await $.mv(L0["excel"], "Cells")), [L0["m"], 56])), "value")));
    await $.mset((await $.mcall((await $.v(C, "OracleDataSet1")), "FieldByName", ["f57"])), "Value", (await $.mv((await $.idx((await $.mv(L0["excel"], "Cells")), [L0["m"], 57])), "value")));
    await $.mset((await $.mcall((await $.v(C, "OracleDataSet1")), "FieldByName", ["f58"])), "Value", (await $.mv((await $.idx((await $.mv(L0["excel"], "Cells")), [L0["m"], 58])), "value")));
    await $.mset((await $.mcall((await $.v(C, "OracleDataSet1")), "FieldByName", ["f59"])), "Value", (await $.mv((await $.idx((await $.mv(L0["excel"], "Cells")), [L0["m"], 59])), "value")));
    await $.mset((await $.mcall((await $.v(C, "OracleDataSet1")), "FieldByName", ["f60"])), "Value", (await $.mv((await $.idx((await $.mv(L0["excel"], "Cells")), [L0["m"], 60])), "value")));
    await $.mset((await $.mcall((await $.v(C, "OracleDataSet1")), "FieldByName", ["f61"])), "Value", (await $.mv((await $.idx((await $.mv(L0["excel"], "Cells")), [L0["m"], 61])), "value")));
    await $.mset((await $.mcall((await $.v(C, "OracleDataSet1")), "FieldByName", ["f62"])), "Value", (await $.mv((await $.idx((await $.mv(L0["excel"], "Cells")), [L0["m"], 62])), "value")));
    await $.mset((await $.mcall((await $.v(C, "OracleDataSet1")), "FieldByName", ["f63"])), "Value", (await $.mv((await $.idx((await $.mv(L0["excel"], "Cells")), [L0["m"], 63])), "value")));
    await $.mset((await $.mcall((await $.v(C, "OracleDataSet1")), "FieldByName", ["f64"])), "Value", (await $.mv((await $.idx((await $.mv(L0["excel"], "Cells")), [L0["m"], 64])), "value")));
    await $.mset((await $.mcall((await $.v(C, "OracleDataSet1")), "FieldByName", ["f65"])), "Value", (await $.mv((await $.idx((await $.mv(L0["excel"], "Cells")), [L0["m"], 65])), "value")));
    await $.mset((await $.mcall((await $.v(C, "OracleDataSet1")), "FieldByName", ["f66"])), "Value", (await $.mv((await $.idx((await $.mv(L0["excel"], "Cells")), [L0["m"], 66])), "value")));
    await $.mset((await $.mcall((await $.v(C, "OracleDataSet1")), "FieldByName", ["f67"])), "Value", (await $.mv((await $.idx((await $.mv(L0["excel"], "Cells")), [L0["m"], 67])), "value")));
    await $.mset((await $.mcall((await $.v(C, "OracleDataSet1")), "FieldByName", ["f68"])), "Value", (await $.mv((await $.idx((await $.mv(L0["excel"], "Cells")), [L0["m"], 68])), "value")));
    await $.stmt((await $.call(C, "inc", [$.ref(async () => L0["m"], async ($t1) => { L0["m"] = $t1; })])));
    await $.tick();
  }
  await $.mcall((await $.v(C, "OracleDataSet1")), "Post", []);
  await $.mcall((await $.v(C, "OracleDataSet1")), "Refresh", []);
  await $.mcall((await $.v(C, "OracleDataSet1")), "First", []);
  await $.mcall((await $.mv(L0["excel"], "Workbooks")), "Close", []);
  await $.mcall(L0["excel"], "Quit", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TOutExcelImp", "ToolButton3Click", async function ToolButton3Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.eq((await $.call(C, "MessageDlg", ["Əməliyyatlar günün sənədlərinə göndərilsin?", (await $.v(C, "mtConfirmation")), [(await $.v(C, "mbYes")), (await $.v(C, "mbNo"))], 0])), (await $.v(C, "mrYes"))))) {
    await $.stmt((await $.mcall((await $.v(C, "oraclePackage1")), "CallProcedure", ["OUTEXCELTRANSACTIONS", []])));
    await $.stmt((await $.call(C, "ShowMessage", ["Əməliyyatlar göndərildi!"])));
    await $.stmt((await $.mcall((await $.v(C, "oraclePackage1")), "CallProcedure", ["Del_outexcel", []])));
    await $.mcall((await $.v(C, "OracleDataSet1")), "Refresh", []);
  }
  await $.mcall((await $.mv((await $.v(C, "sboapiDataModule")), "SBSession")), "commit", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TOutExcelImp", "ToolButton5Click", async function ToolButton5Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mcall((await $.v(C, "OracleDataSet1")), "close", []);
  await $.mcall((await $.v(C, "OracleDataSet1")), "Open", []);
  await $.mcall((await $.v(C, "OracleDataSet2")), "close", []);
  await $.mcall((await $.v(C, "OracleDataSet2")), "Open", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TOutExcelImp", "ToolButton7Click", async function ToolButton7Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.stmt((await $.mcall((await $.v(C, "oraclePackage1")), "CallProcedure", ["del_outinspayments", []])));
  await $.stmt((await $.call(C, "ShowMessage", ["Əməliyyatlar silindi!"])));
  await $.stmt((await $.mcall((await $.v(C, "oraclePackage1")), "CallProcedure", ["Del_outexcel", []])));
  await $.mcall((await $.v(C, "OracleDataSet1")), "Refresh", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  return U;
}
