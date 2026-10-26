// Generated from frmBudgetMgrImpl.pas by pas2js — do not edit by hand; regenerate instead.
/* eslint-disable */
// @ts-nocheck

export default function define($) {
  const U = $.unit("frmBudgetMgrImpl", ["Windows", "Messages", "SysUtils", "Classes", "Graphics", "Controls", "Forms", "Dialogs", "ActiveX", "AxCtrls", "budgetmgr_TLB", "StdVcl", "ComCtrls", "ToolWin", "Grids", "Db", "DBGridEh", "ExtCtrls", "ImgList", "StdCtrls", "Menus", "ActnList", "StdActns", "oracledata", "oracle", "CMExcelExport", "DBGridEhGrouping", "GridsEh", "ComObj", "ComServ", "Dmbudgetimpl", "FrmAddBugcetimpl", "FrmSetingBudgetImpl", "FrmEditBudgetimpl", "FrmAddEditBdImpl", "SBTranslateProc", "sboapiDataModuleImpl", "ReportFrmImpl", "BalansImpl"]);
  const C = [U];
  U.defClass("TfrmBudgetMgr", "TActiveForm", {"controlbar1": {"name": "ControlBar1", "type": "TControlBar"}, "panel1": {"name": "Panel1", "type": "TPanel"}, "groupbox2": {"name": "GroupBox2", "type": "TGroupBox"}, "panel2": {"name": "Panel2", "type": "TPanel"}, "dbgrideh2": {"name": "DBGridEh2", "type": "TDBGridEh"}, "toolbar1": {"name": "ToolBar1", "type": "TToolBar"}, "addtoolbtn": {"name": "AddToolBtn", "type": "TToolButton"}, "addtoolbutton": {"name": "AddToolButton", "type": "TToolButton"}, "edittoolbtn": {"name": "EditToolBtn", "type": "TToolButton"}, "imagelist1": {"name": "ImageList1", "type": "TImageList"}, "popupmenu1": {"name": "PopupMenu1", "type": "TPopupMenu"}, "n1": {"name": "N1", "type": "TMenuItem"}, "n2": {"name": "N2", "type": "TMenuItem"}, "edit1": {"name": "Edit1", "type": "TEdit"}, "editname": {"name": "editname", "type": "TEdit"}, "popupmenu2": {"name": "PopupMenu2", "type": "TPopupMenu"}, "n3": {"name": "N3", "type": "TMenuItem"}, "n4": {"name": "N4", "type": "TMenuItem"}, "actionlist1": {"name": "ActionList1", "type": "TActionList"}, "add": {"name": "add", "type": "TEditCut"}, "steting": {"name": "steting", "type": "TAction"}, "edit3": {"name": "Edit3", "type": "TEdit"}, "toolbutton1": {"name": "ToolButton1", "type": "TToolButton"}, "toolbutton2": {"name": "ToolButton2", "type": "TToolButton"}, "toolbutton3": {"name": "ToolButton3", "type": "TToolButton"}, "editaname": {"name": "Editaname", "type": "TEdit"}, "editasumamount": {"name": "Editasumamount", "type": "TEdit"}, "edit5": {"name": "Edit5", "type": "TEdit"}, "mainqrid": {"name": "MainQrid", "type": "TDBGridEh"}, "n5": {"name": "N5", "type": "TMenuItem"}, "popupmenu3": {"name": "PopupMenu3", "type": "TPopupMenu"}, "ss1": {"name": "ss1", "type": "TMenuItem"}, "balans1": {"name": "Balans1", "type": "TMenuItem"}, "fevents": {"name": "FEvents", "type": "IfrmBudgetMgrEvents"}}, {});
  U.init(async () => {
    U.var_("notAccId", '', "String");
    U.var_("Exl", null, "Variant");
    U.var_("Sheet", null, "Variant");
  });
  U.method("TfrmBudgetMgr", "DefinePropertyPages", async function DefinePropertyPages(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"definepropertypage": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["definepropertypage"]);
  return L0.result;
}, {"params": ["DefinePropertyPage"], "kind": "procedure", "ptypes": ["TDefinePropertyPage"]});
  U.method("TfrmBudgetMgr", "EventSinkChanged", async function EventSinkChanged(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"eventsink": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["eventsink"]);
  await $.set(C, "FEvents", L0["eventsink"]);
  return L0.result;
}, {"params": ["EventSink"], "kind": "procedure", "ptypes": ["IUnknown"]});
  U.method("TfrmBudgetMgr", "Initialize", async function Initialize(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: undefined};
  await $.inherited(Self, "TfrmBudgetMgr", "Initialize", null, arguments);
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
  U.method("TfrmBudgetMgr", "Get_Active", async function Get_Active(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: false};
  L0["result"] = (await $.v(C, "Active"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TfrmBudgetMgr", "Get_AutoScroll", async function Get_AutoScroll(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: false};
  L0["result"] = (await $.v(C, "AutoScroll"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TfrmBudgetMgr", "Get_AutoSize", async function Get_AutoSize(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: false};
  L0["result"] = (await $.v(C, "AutoSize"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TfrmBudgetMgr", "Get_AxBorderStyle", async function Get_AxBorderStyle(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: null};
  L0["result"] = (await $.call(C, "Ord", [(await $.v(C, "AxBorderStyle"))]));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TfrmBudgetMgr", "Get_Caption", async function Get_Caption(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: ''};
  L0["result"] = (await $.call(C, "WideString", [(await $.v(C, "Caption"))]));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TfrmBudgetMgr", "Get_Color", async function Get_Color(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: null};
  L0["result"] = (await $.call(C, "OLE_COLOR", [(await $.v(C, "Color"))]));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TfrmBudgetMgr", "Get_Cursor", async function Get_Cursor(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: 0};
  L0["result"] = (await $.call(C, "Smallint", [(await $.v(C, "Cursor"))]));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TfrmBudgetMgr", "Get_DoubleBuffered", async function Get_DoubleBuffered(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: false};
  L0["result"] = (await $.v(C, "DoubleBuffered"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TfrmBudgetMgr", "Get_DropTarget", async function Get_DropTarget(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: false};
  L0["result"] = (await $.v(C, "DropTarget"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TfrmBudgetMgr", "Get_Enabled", async function Get_Enabled(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: false};
  L0["result"] = (await $.v(C, "Enabled"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TfrmBudgetMgr", "Get_Font", async function Get_Font(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: null};
  await $.stmt((await $.call(C, "GetOleFont", [(await $.v(C, "Font")), L0["result"]])));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TfrmBudgetMgr", "Get_HelpFile", async function Get_HelpFile(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: ''};
  L0["result"] = (await $.call(C, "WideString", [(await $.v(C, "HelpFile"))]));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TfrmBudgetMgr", "Get_KeyPreview", async function Get_KeyPreview(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: false};
  L0["result"] = (await $.v(C, "KeyPreview"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TfrmBudgetMgr", "Get_PixelsPerInch", async function Get_PixelsPerInch(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: 0};
  L0["result"] = (await $.v(C, "PixelsPerInch"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TfrmBudgetMgr", "Get_PrintScale", async function Get_PrintScale(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: null};
  L0["result"] = (await $.call(C, "Ord", [(await $.v(C, "PrintScale"))]));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TfrmBudgetMgr", "Get_Scaled", async function Get_Scaled(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: false};
  L0["result"] = (await $.v(C, "Scaled"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TfrmBudgetMgr", "Get_Visible", async function Get_Visible(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: false};
  L0["result"] = (await $.v(C, "Visible"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TfrmBudgetMgr", "Get_VisibleDockClientCount", async function Get_VisibleDockClientCount(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: 0};
  L0["result"] = (await $.v(C, "VisibleDockClientCount"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TfrmBudgetMgr", "_Set_Font", async function _Set_Font(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.stmt((await $.call(C, "SetOleFont", [(await $.v(C, "Font")), L0["value"]])));
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["IFontDisp"]});
  U.method("TfrmBudgetMgr", "ActivateEvent", async function ActivateEvent(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.ne((await $.v(C, "FEvents")), null))) {
    await $.mcall((await $.v(C, "FEvents")), "OnActivate", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TfrmBudgetMgr", "ClickEvent", async function ClickEvent(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.ne((await $.v(C, "FEvents")), null))) {
    await $.mcall((await $.v(C, "FEvents")), "OnClick", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TfrmBudgetMgr", "CreateEvent", async function CreateEvent(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.ne((await $.v(C, "FEvents")), null))) {
    await $.mcall((await $.v(C, "FEvents")), "OnCreate", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TfrmBudgetMgr", "DblClickEvent", async function DblClickEvent(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.ne((await $.v(C, "FEvents")), null))) {
    await $.mcall((await $.v(C, "FEvents")), "OnDblClick", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TfrmBudgetMgr", "DeactivateEvent", async function DeactivateEvent(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.ne((await $.v(C, "FEvents")), null))) {
    await $.mcall((await $.v(C, "FEvents")), "OnDeactivate", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TfrmBudgetMgr", "DestroyEvent", async function DestroyEvent(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.ne((await $.v(C, "FEvents")), null))) {
    await $.mcall((await $.v(C, "FEvents")), "OnDestroy", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TfrmBudgetMgr", "KeyPressEvent", async function KeyPressEvent(Self, p0, p1) {
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
  U.method("TfrmBudgetMgr", "PaintEvent", async function PaintEvent(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.ne((await $.v(C, "FEvents")), null))) {
    await $.mcall((await $.v(C, "FEvents")), "OnPaint", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TfrmBudgetMgr", "Set_AutoScroll", async function Set_AutoScroll(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "AutoScroll", L0["value"]);
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["WordBool"]});
  U.method("TfrmBudgetMgr", "Set_AutoSize", async function Set_AutoSize(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "AutoSize", L0["value"]);
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["WordBool"]});
  U.method("TfrmBudgetMgr", "Set_AxBorderStyle", async function Set_AxBorderStyle(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "AxBorderStyle", (await $.call(C, "TActiveFormBorderStyle", [L0["value"]])));
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["TxActiveFormBorderStyle"]});
  U.method("TfrmBudgetMgr", "Set_Caption", async function Set_Caption(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "Caption", (await $.call(C, "TCaption", [L0["value"]])));
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["WideString"]});
  U.method("TfrmBudgetMgr", "Set_Color", async function Set_Color(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "Color", (await $.call(C, "TColor", [L0["value"]])));
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["OLE_COLOR"]});
  U.method("TfrmBudgetMgr", "Set_Cursor", async function Set_Cursor(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "Cursor", (await $.call(C, "TCursor", [L0["value"]])));
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["Smallint"]});
  U.method("TfrmBudgetMgr", "Set_DoubleBuffered", async function Set_DoubleBuffered(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "DoubleBuffered", L0["value"]);
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["WordBool"]});
  U.method("TfrmBudgetMgr", "Set_DropTarget", async function Set_DropTarget(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "DropTarget", L0["value"]);
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["WordBool"]});
  U.method("TfrmBudgetMgr", "Set_Enabled", async function Set_Enabled(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "Enabled", L0["value"]);
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["WordBool"]});
  U.method("TfrmBudgetMgr", "Set_Font", async function Set_Font(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.asRef(p0), result: undefined};
  await $.stmt((await $.call(C, "SetOleFont", [(await $.v(C, "Font")), (await L0["value"].get())])));
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["IFontDisp"]});
  U.method("TfrmBudgetMgr", "Set_HelpFile", async function Set_HelpFile(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "HelpFile", (await $.call(C, "String", [L0["value"]])));
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["WideString"]});
  U.method("TfrmBudgetMgr", "Set_KeyPreview", async function Set_KeyPreview(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "KeyPreview", L0["value"]);
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["WordBool"]});
  U.method("TfrmBudgetMgr", "Set_PixelsPerInch", async function Set_PixelsPerInch(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "PixelsPerInch", L0["value"]);
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["Integer"]});
  U.method("TfrmBudgetMgr", "Set_PrintScale", async function Set_PrintScale(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "PrintScale", (await $.call(C, "TPrintScale", [L0["value"]])));
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["TxPrintScale"]});
  U.method("TfrmBudgetMgr", "Set_Scaled", async function Set_Scaled(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "Scaled", L0["value"]);
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["WordBool"]});
  U.method("TfrmBudgetMgr", "Set_Visible", async function Set_Visible(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "Visible", L0["value"]);
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["WordBool"]});
  U.method("TfrmBudgetMgr", "ActnSearchExecute", async function ActnSearchExecute(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "searchfield": '', "searchoptions": null};
  await $.fixArgs(L0, ["sender"]);
  L0["searchoptions"] = [(await $.v(C, "srIgnoreCase")), (await $.v(C, "srPartialMatch"))];
  {
    const $t1 = L0["sender"];
    await $.wset([$t1], "SearchField", (await $.wcall([$t1], "copy", [(await $.wv([$t1], "Name", C, false)), 5, (await $.wcall([$t1], "length", [(await $.wv([$t1], "Name", C, false))], C))], C)), { get: async () => L0["searchfield"], set: async (v) => { L0["searchfield"] = v; }, local: true });
    await $.mcall((await $.mv((await $.wv([$t1], "MainQrid", C, false)), "SelectedRows")), "Clear", []);
    {
      const $t2 = (await $.wcall([$t1], "TOracleDataSet", [(await $.mv((await $.mv((await $.wv([$t1], "MainQrid", C, false)), "DataSource")), "DataSet"))], C));
      if ($.truthy($.not((await $.wcall([$t1, $t2], "SearchRecord", [(await $.wv([$t1, $t2], "SearchField", { get: async () => L0["searchfield"], set: async (v) => { L0["searchfield"] = v; }, local: true }, false)), (await $.wv([$t1, $t2], "Text", C, false)), $.add((await $.wv([$t1, $t2], "SearchOptions", { get: async () => L0["searchoptions"], set: async (v) => { L0["searchoptions"] = v; }, local: true }, false)), [(await $.wv([$t1, $t2], "srFromCurrent", C, false)), (await $.wv([$t1, $t2], "srForward", C, false))])], C))))) {
        if ($.truthy($.eq((await $.wcall([$t1, $t2], "MessageDlg", [$.add($.add("Axtarış sona çatıb.", "\r"), "əvvəldən başlamaq istəyirsinizmi?"), (await $.wv([$t1, $t2], "mtInformation", C, false)), [(await $.wv([$t1, $t2], "mbNo", C, false)), (await $.wv([$t1, $t2], "mbYes", C, false))], 0], C)), (await $.wv([$t1, $t2], "mrYes", C, false))))) {
          if ($.truthy($.not((await $.wcall([$t1, $t2], "SearchRecord", [(await $.wv([$t1, $t2], "SearchField", { get: async () => L0["searchfield"], set: async (v) => { L0["searchfield"] = v; }, local: true }, false)), (await $.wv([$t1, $t2], "Text", C, false)), $.add((await $.wv([$t1, $t2], "SearchOptions", { get: async () => L0["searchoptions"], set: async (v) => { L0["searchoptions"] = v; }, local: true }, false)), [(await $.wv([$t1, $t2], "srFromBeginning", C, false))])], C))))) {
            await $.stmt((await $.wcall([$t1, $t2], "MessageDlg", ["Yazı tapılmadı!", (await $.wv([$t1, $t2], "mtInformation", C, false)), [(await $.wv([$t1, $t2], "mbOK", C, false))], 0], C)));
          }
        }
      }
    }
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TfrmBudgetMgr", "ActnSearchExecute_a", async function ActnSearchExecute_a(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "searchfield": '', "searchoptions": null};
  await $.fixArgs(L0, ["sender"]);
  L0["searchoptions"] = [(await $.v(C, "srIgnoreCase")), (await $.v(C, "srPartialMatch"))];
  {
    const $t3 = L0["sender"];
    await $.wset([$t3], "SearchField", (await $.wcall([$t3], "copy", [(await $.wv([$t3], "Name", C, false)), 6, (await $.wcall([$t3], "length", [(await $.wv([$t3], "Name", C, false))], C))], C)), { get: async () => L0["searchfield"], set: async (v) => { L0["searchfield"] = v; }, local: true });
    await $.mcall((await $.mv((await $.wv([$t3], "MainQrid", C, false)), "SelectedRows")), "Clear", []);
    {
      const $t4 = (await $.wcall([$t3], "TOracleDataSet", [(await $.mv((await $.mv((await $.wv([$t3], "DBGridEh2", C, false)), "DataSource")), "DataSet"))], C));
      if ($.truthy($.not((await $.wcall([$t3, $t4], "SearchRecord", [(await $.wv([$t3, $t4], "SearchField", { get: async () => L0["searchfield"], set: async (v) => { L0["searchfield"] = v; }, local: true }, false)), (await $.wv([$t3, $t4], "Text", C, false)), $.add((await $.wv([$t3, $t4], "SearchOptions", { get: async () => L0["searchoptions"], set: async (v) => { L0["searchoptions"] = v; }, local: true }, false)), [(await $.wv([$t3, $t4], "srFromCurrent", C, false)), (await $.wv([$t3, $t4], "srForward", C, false))])], C))))) {
        if ($.truthy($.eq((await $.wcall([$t3, $t4], "MessageDlg", [$.add($.add("Axtarış sona çatıb.", "\r"), "əvvəldən başlamaq istəyirsinizmi?"), (await $.wv([$t3, $t4], "mtInformation", C, false)), [(await $.wv([$t3, $t4], "mbNo", C, false)), (await $.wv([$t3, $t4], "mbYes", C, false))], 0], C)), (await $.wv([$t3, $t4], "mrYes", C, false))))) {
          if ($.truthy($.not((await $.wcall([$t3, $t4], "SearchRecord", [(await $.wv([$t3, $t4], "SearchField", { get: async () => L0["searchfield"], set: async (v) => { L0["searchfield"] = v; }, local: true }, false)), (await $.wv([$t3, $t4], "Text", C, false)), $.add((await $.wv([$t3, $t4], "SearchOptions", { get: async () => L0["searchoptions"], set: async (v) => { L0["searchoptions"] = v; }, local: true }, false)), [(await $.wv([$t3, $t4], "srFromBeginning", C, false))])], C))))) {
            await $.stmt((await $.wcall([$t3, $t4], "MessageDlg", ["Yazı tapılmadı!", (await $.wv([$t3, $t4], "mtInformation", C, false)), [(await $.wv([$t3, $t4], "mbOK", C, false))], 0], C)));
          }
        }
      }
    }
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TfrmBudgetMgr", "N1Click", async function N1Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mset((await $.v(C, "panel1")), "Visible", true);
  await $.mset((await $.v(C, "N1")), "Visible", false);
  await $.mset((await $.v(C, "N2")), "Visible", true);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TfrmBudgetMgr", "N2Click", async function N2Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mset((await $.v(C, "panel1")), "Visible", false);
  await $.mset((await $.v(C, "N1")), "Visible", true);
  await $.mset((await $.v(C, "N2")), "Visible", false);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TfrmBudgetMgr", "ActiveFormCreate", async function ActiveFormCreate(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.set(C, "DMBudget", (await $.mcall((await $.v(C, "TDMBudget")), "Create", [Self])));
  await $.set(C, "BudgetSetAccaontfr", (await $.mcall((await $.v(C, "TBudgetSetAccaontfr")), "Create", [Self])));
  await $.set(C, "BudgetSetingFr", (await $.mcall((await $.v(C, "TBudgetSetingFr")), "Create", [Self])));
  await $.set(C, "FrmeditBudget", (await $.mcall((await $.v(C, "TFrmeditBudget")), "create", [Self])));
  await $.set(C, "FrmAddEditBdfr", (await $.mcall((await $.v(C, "TFrmAddEditBdfr")), "create", [Self])));
  await $.set(C, "ReportFrm", (await $.mcall((await $.v(C, "TReportFrm")), "create", [Self])));
  await $.set(C, "BalansFrm", (await $.mcall((await $.v(C, "TBalansFrm")), "create", [Self])));
  await $.stmt((await $.mcall((await $.v(C, "SBTranslateProc")), "TranslateAllComponents", [Self, (await $.mv((await $.v(C, "sboapiDataModule")), "OrPack_SL"))])));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TfrmBudgetMgr", "ToolButton2Click", async function ToolButton2Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.eq((await $.call(C, "MessageDlg", ["Silinməsinə əminsinizmi?", (await $.v(C, "mtConfirmation")), [(await $.v(C, "mbYes")), (await $.v(C, "mbCancel"))], 0])), (await $.v(C, "mrYes"))))) {
    {
      const $t5 = (await $.v(C, "DMBudget"));
      await $.stmt((await $.mcall((await $.wv([$t5], "ArticlesPkg", C, false)), "CallProcedure", ["del_art", [(await $.mv((await $.mcall((await $.wv([$t5], "ArtDataSet", C, false)), "FieldByname", ["id"])), "asinteger"))]])));
      await $.mcall((await $.wv([$t5], "ArtDataSet", C, false)), "refresh", []);
      await $.mcall((await $.wv([$t5], "ArticlesDST", C, false)), "refresh", []);
    }
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TfrmBudgetMgr", "addExecute", async function addExecute(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mcall((await $.mv((await $.v(C, "DMBudget")), "articles_accgroup")), "open", []);
  await $.mcall((await $.mv((await $.v(C, "DMBudget")), "articles_accs")), "open", []);
  await $.mcall((await $.mv((await $.v(C, "dmbudget")), "articles_accgroup")), "refresh", []);
  await $.mcall((await $.v(C, "BudgetSetAccaontfr")), "showmodal", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TfrmBudgetMgr", "Balans1Click", async function Balans1Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mcall((await $.v(C, "BalansFrm")), "ShowModal", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.func("DestroySheet", async function DestroySheet(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: undefined};
  try {
    await $.stmt((await $.call(C, "Finalize", [(await $.v(C, "Sheet"))])));
    await $.stmt((await $.call(C, "Finalize", [(await $.v(C, "Exl"))])));
  } catch ($t6) {
    $.rethrowControl($t6);
    $.handled($t6);
  }
  return L0.result;
}, {"params": [], "kind": "procedure", "ptypes": []});
  U.func("ShowSheet", async function ShowSheet(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: undefined};
  try {
    await $.mset((await $.v(C, "Exl")), "Visible", true);
  } catch ($t7) {
    $.rethrowControl($t7);
    $.handled($t7);
    await $.stmt($.call(C, "DestroySheet", []));
  }
  return L0.result;
}, {"params": [], "kind": "procedure", "ptypes": []});
  U.method("TfrmBudgetMgr", "ss1Click", async function ss1Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mcall((await $.v(C, "ReportFrm")), "ShowModal", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TfrmBudgetMgr", "stetingExecute", async function stetingExecute(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mset((await $.mv((await $.v(C, "DMBudget")), "SetigDatSet")), "Active", true);
  {
    const $t8 = (await $.v(C, "DMBudget"));
    const $t9 = (await $.wv([$t8], "AddArt", C, false));
    if ($.truthy((await $.wv([$t8, $t9], "active", C, false)))) {
      await $.stmt($.wcall([$t8, $t9], "close", [], C));
    }
    await $.stmt((await $.wcall([$t8, $t9], "SetVariable", ["artid", (await $.mv((await $.mcall((await $.wv([$t8, $t9], "ArtDataSet", C, false)), "Fieldbyname", ["id"])), "asInteger"))], C)));
    await $.stmt($.wcall([$t8, $t9], "open", [], C));
    await $.stmt($.wcall([$t8, $t9], "edit", [], C));
  }
  await $.mcall((await $.v(C, "BudgetSetingFr")), "showmodal", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TfrmBudgetMgr", "EditToolBtnClick", async function EditToolBtnClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "bash": ''};
  await $.fixArgs(L0, ["sender"]);
  L0["number_format"] = "#,##0.00";
  L0["number_format_r"] = "#,##0.00%";
  L0["n"] = "yyy";
  L0["d"] = 2;
  L0["f"] = 3;
  L0["createsheet"] = $.fn(async function CreateSheet() {
  const L1 = {result: undefined};
  try {
    await $.set(C, "Exl", (await $.call(C, "CreateOleObject", ["Excel.Application"])));
    await $.mcall((await $.mv((await $.v(C, "Exl")), "WorkBooks")), "add", []);
    await $.set(C, "Sheet", (await $.idx((await $.mv((await $.mv((await $.mv((await $.v(C, "Exl")), "Application")), "Worksheets")), "Item")), [1])));
  } catch ($t10) {
    $.rethrowControl($t10);
    $.handled($t10);
  }
  return L1.result;
});
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TfrmBudgetMgr", "ToolButton1Click", async function ToolButton1Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mcall((await $.mv((await $.v(C, "DMBudget")), "ArtDataSet")), "refresh", []);
  await $.mcall((await $.mv((await $.v(C, "DMBudget")), "accrest")), "refresh", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TfrmBudgetMgr", "Edit1Change", async function Edit1Change(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t11 = (await $.v(C, "Edit1"));
    if ($.truthy($.ne((await $.wv([$t11], "Text", C, false)), ""))) {
      await $.stmt((await $.mcall((await $.mv((await $.mv((await $.wv([$t11], "DMBudget", C, false)), "ArtDataSrc")), "DataSet")), "Locate", ["NUMBEROFARTICLE", (await $.mv((await $.wv([$t11], "Edit1", C, false)), "Text")), [(await $.wv([$t11], "loPartialKey", C, false))]])));
    }
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TfrmBudgetMgr", "Edit1Exit", async function Edit1Exit(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mset(L0["sender"], "Text", "");
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TfrmBudgetMgr", "editnameChange", async function editnameChange(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TfrmBudgetMgr", "ToolButton3Click", async function ToolButton3Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t12 = (await $.v(C, "DMBudget"));
    await $.mset((await $.wv([$t12], "ArticlesDST", C, false)), "Active", (await $.wv([$t12], "true", C, false)));
    await $.mset((await $.wv([$t12], "ItemsofArticlesDST", C, false)), "Active", (await $.wv([$t12], "true", C, false)));
  }
  await $.mcall((await $.v(C, "FrmAddEditBdfr")), "ShowModal", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TfrmBudgetMgr", "N3Click", async function N3Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mset((await $.v(C, "panel2")), "Visible", true);
  await $.mset((await $.v(C, "N3")), "Visible", false);
  await $.mset((await $.v(C, "N4")), "Visible", true);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TfrmBudgetMgr", "N4Click", async function N4Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mset((await $.v(C, "panel2")), "Visible", false);
  await $.mset((await $.v(C, "N3")), "Visible", true);
  await $.mset((await $.v(C, "N4")), "Visible", false);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TfrmBudgetMgr", "llTitleBtnClick", async function llTitleBtnClick(Self, p0, p1, p2) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "acol": $.copyArg(p1), "column": $.copyArg(p2), result: undefined, "sortfield": ''};
  await $.fixArgs(L0, ["sender", "acol", "column"]);
  L0["sortfield"] = (await $.mv(L0["column"], "FieldName"));
  if ($.truthy($.eq((await $.mv((await $.mv(L0["column"], "Title")), "SortMarker")), (await $.v(C, "smDownEh"))))) {
    L0["sortfield"] = $.add(L0["sortfield"], " DESC");
  }
  {
    const $t13 = (L0["sender"]);
    const $t14 = (await $.wcall([$t13], "TOracleDataSet", [(await $.mv((await $.wv([$t13], "DataSource", C, false)), "DataSet"))], C));
    await $.mset((await $.wv([$t13, $t14], "Screen", C, false)), "Cursor", (await $.wv([$t13, $t14], "crSQLWait", C, false)));
    await $.stmt((await $.wcall([$t13, $t14], "SetVariable", ["OrderField", (await $.wv([$t13, $t14], "SortField", { get: async () => L0["sortfield"], set: async (v) => { L0["sortfield"] = v; }, local: true }, false))], C)));
    await $.stmt($.wcall([$t13, $t14], "RefResh", [], C));
    await $.mset((await $.wv([$t13, $t14], "Screen", C, false)), "Cursor", (await $.wv([$t13, $t14], "crDefault", C, false)));
  }
  return L0.result;
}, {"params": ["Sender", "ACol", "Column"], "kind": "procedure", "ptypes": ["TObject", "Integer", "TColumnEh"]});
  U.method("TfrmBudgetMgr", "editnameKeyPress", async function editnameKeyPress(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "key": $.asRef(p1), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.eq((await $.call(C, "ord", [(await L0["key"].get())])), (await $.v(C, "VK_RETURN"))))) {
    await $.stmt((await $.call(C, "ActnSearchExecute", [L0["sender"]])));
  }
  return L0.result;
}, {"params": ["Sender", "Key"], "kind": "procedure", "ptypes": ["TObject", "Char"]});
  U.method("TfrmBudgetMgr", "editnameExit", async function editnameExit(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mset(L0["sender"], "Text", "");
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TfrmBudgetMgr", "Edit3Change", async function Edit3Change(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t15 = (await $.v(C, "Edit3"));
    if ($.truthy($.ne((await $.wv([$t15], "Text", C, false)), ""))) {
      await $.stmt((await $.mcall((await $.mv((await $.mv((await $.wv([$t15], "DMBudget", C, false)), "ItmDataSrc")), "DataSet")), "Locate", ["NUMBEROFITEM", (await $.mv((await $.wv([$t15], "Edit3", C, false)), "Text")), [(await $.wv([$t15], "loCaseInsensitive", C, false)), (await $.wv([$t15], "loPartialKey", C, false))]])));
    }
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TfrmBudgetMgr", "Edit3Exit", async function Edit3Exit(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mset(L0["sender"], "Text", "");
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TfrmBudgetMgr", "EditanameKeyPress", async function EditanameKeyPress(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "key": $.asRef(p1), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.eq((await $.call(C, "ord", [(await L0["key"].get())])), (await $.v(C, "VK_RETURN"))))) {
    await $.stmt((await $.call(C, "ActnSearchExecute_a", [L0["sender"]])));
  }
  return L0.result;
}, {"params": ["Sender", "Key"], "kind": "procedure", "ptypes": ["TObject", "Char"]});
  U.method("TfrmBudgetMgr", "EditanameExit", async function EditanameExit(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mset(L0["sender"], "Text", "");
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TfrmBudgetMgr", "Edit5Exit", async function Edit5Exit(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mset(L0["sender"], "Text", "");
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TfrmBudgetMgr", "Edit5Change", async function Edit5Change(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t16 = (await $.v(C, "Edit5"));
    if ($.truthy($.ne((await $.wv([$t16], "Text", C, false)), ""))) {
      await $.stmt((await $.mcall((await $.mv((await $.mv((await $.wv([$t16], "DMBudget", C, false)), "ItmDataSrc")), "DataSet")), "Locate", ["ACCNO", (await $.mv((await $.wv([$t16], "Edit5", C, false)), "Text")), [(await $.wv([$t16], "loPartialKey", C, false))]])));
    }
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TfrmBudgetMgr", "N5Click", async function N5Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mcall((await $.mv((await $.v(C, "DMBudget")), "ArtDataSet")), "refresh", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  return U;
}
