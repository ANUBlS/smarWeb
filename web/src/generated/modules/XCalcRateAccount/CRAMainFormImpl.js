// Generated from CRAMainFormImpl.pas by pas2js — do not edit by hand; regenerate instead.
/* eslint-disable */
// @ts-nocheck

export default function define($) {
  const U = $.unit("CRAMainFormImpl", ["Windows", "Messages", "SysUtils", "Classes", "Graphics", "Controls", "Forms", "Dialogs", "ActiveX", "AxCtrls", "CalcRateAccount_TLB", "StdVcl", "CMExcelExport", "ActnList", "ImgList", "ToolWin", "ComCtrls", "StdCtrls", "ExtCtrls", "DBLookupEh", "Grids", "DBGrids", "Menus", "Oracle", "OracleData", "variants", "ComObj", "ComServ", "CRADatModImpl", "AddEditContractImpl", "CRAProgressUnit", "UntReferences", "CRACorrecttor", "sbtranslateproc", "sboapiDataModuleimpl", "CRACommonDeclsImpl"]);
  const C = [U];
  U.defClass("TCRAMainForm", "TActiveForm", {"toolbar1": {"name": "ToolBar1", "type": "TToolBar"}, "imagelist1": {"name": "ImageList1", "type": "TImageList"}, "actionlist1": {"name": "ActionList1", "type": "TActionList"}, "excelexport": {"name": "ExcelExport", "type": "TCMExcelExport"}, "toolbutton1": {"name": "ToolButton1", "type": "TToolButton"}, "toolbutton2": {"name": "ToolButton2", "type": "TToolButton"}, "toolbutton3": {"name": "ToolButton3", "type": "TToolButton"}, "toolbutton4": {"name": "ToolButton4", "type": "TToolButton"}, "toolbutton5": {"name": "ToolButton5", "type": "TToolButton"}, "toolbutton6": {"name": "ToolButton6", "type": "TToolButton"}, "toolbutton7": {"name": "ToolButton7", "type": "TToolButton"}, "panel2": {"name": "Panel2", "type": "TPanel"}, "cradbgrid": {"name": "CRADBGrid", "type": "TDBGrid"}, "actnadd": {"name": "ActnAdd", "type": "TAction"}, "actnedit": {"name": "ActnEdit", "type": "TAction"}, "actnsetting": {"name": "ActnSetting", "type": "TAction"}, "actncalc": {"name": "ActnCalc", "type": "TAction"}, "toolbutton8": {"name": "ToolButton8", "type": "TToolButton"}, "toolbutton9": {"name": "ToolButton9", "type": "TToolButton"}, "actnrefresh": {"name": "ActnRefresh", "type": "TAction"}, "statusimages": {"name": "StatusImages", "type": "TImageList"}, "popupmenu2": {"name": "PopupMenu2", "type": "TPopupMenu"}, "n1": {"name": "N1", "type": "TMenuItem"}, "n2": {"name": "N2", "type": "TMenuItem"}, "n3": {"name": "N3", "type": "TMenuItem"}, "n4": {"name": "N4", "type": "TMenuItem"}, "n5": {"name": "N5", "type": "TMenuItem"}, "n6": {"name": "N6", "type": "TMenuItem"}, "n7": {"name": "N7", "type": "TMenuItem"}, "searchpanel": {"name": "SearchPanel", "type": "TGroupBox"}, "panel4": {"name": "Panel4", "type": "TPanel"}, "statictext1": {"name": "StaticText1", "type": "TStaticText"}, "editcontractno": {"name": "EditContractNo", "type": "TEdit"}, "panel7": {"name": "Panel7", "type": "TPanel"}, "statictext2": {"name": "StaticText2", "type": "TStaticText"}, "editaccname": {"name": "EditAccName", "type": "TEdit"}, "panel8": {"name": "Panel8", "type": "TPanel"}, "statictext3": {"name": "StaticText3", "type": "TStaticText"}, "editcontractaccno": {"name": "EditCONTRACTACCNO", "type": "TEdit"}, "panel10": {"name": "Panel10", "type": "TPanel"}, "statictext5": {"name": "StaticText5", "type": "TStaticText"}, "editcontrest": {"name": "EditCONTREST", "type": "TEdit"}, "panel11": {"name": "Panel11", "type": "TPanel"}, "statictext6": {"name": "StaticText6", "type": "TStaticText"}, "editinterestaccno": {"name": "EditINTERESTACCNO", "type": "TEdit"}, "n8": {"name": "N8", "type": "TMenuItem"}, "actnsearch": {"name": "ActnSearch", "type": "TAction"}, "toolbutton10": {"name": "ToolButton10", "type": "TToolButton"}, "toolbutton11": {"name": "ToolButton11", "type": "TToolButton"}, "actnfilter": {"name": "ActnFilter", "type": "TAction"}, "actncorrector": {"name": "ActnCorrector", "type": "TAction"}, "n9": {"name": "N9", "type": "TMenuItem"}, "actnexport": {"name": "ActnExport", "type": "TAction"}, "export1": {"name": "Export1", "type": "TMenuItem"}, "toolbutton12": {"name": "ToolButton12", "type": "TToolButton"}, "toolbutton13": {"name": "ToolButton13", "type": "TToolButton"}, "n10": {"name": "N10", "type": "TMenuItem"}, "actnpayment": {"name": "ActnPayment", "type": "TAction"}, "fevents": {"name": "FEvents", "type": "ICRAMainFormEvents"}}, {});
  U.init(async () => {
    U.const("csUnknown", (-(9)));
    U.const("csCalculated", (-(10)));
    U.const("csDisabled", (-(11)));
  });
  U.method("TCRAMainForm", "DefinePropertyPages", async function DefinePropertyPages(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"definepropertypage": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["definepropertypage"]);
  return L0.result;
}, {"params": ["DefinePropertyPage"], "kind": "procedure", "ptypes": ["TDefinePropertyPage"]});
  U.method("TCRAMainForm", "EventSinkChanged", async function EventSinkChanged(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"eventsink": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["eventsink"]);
  await $.set(C, "FEvents", L0["eventsink"]);
  return L0.result;
}, {"params": ["EventSink"], "kind": "procedure", "ptypes": ["IUnknown"]});
  U.method("TCRAMainForm", "Initialize", async function Initialize(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: undefined};
  await $.inherited(Self, "TCRAMainForm", "Initialize", null, arguments);
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
  U.method("TCRAMainForm", "Get_Active", async function Get_Active(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: false};
  L0["result"] = (await $.v(C, "Active"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TCRAMainForm", "Get_AutoScroll", async function Get_AutoScroll(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: false};
  L0["result"] = (await $.v(C, "AutoScroll"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TCRAMainForm", "Get_AutoSize", async function Get_AutoSize(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: false};
  L0["result"] = (await $.v(C, "AutoSize"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TCRAMainForm", "Get_AxBorderStyle", async function Get_AxBorderStyle(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: null};
  L0["result"] = (await $.call(C, "Ord", [(await $.v(C, "AxBorderStyle"))]));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TCRAMainForm", "Get_Caption", async function Get_Caption(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: ''};
  L0["result"] = (await $.call(C, "WideString", [(await $.v(C, "Caption"))]));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TCRAMainForm", "Get_Color", async function Get_Color(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: null};
  L0["result"] = (await $.call(C, "OLE_COLOR", [(await $.v(C, "Color"))]));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TCRAMainForm", "Get_Cursor", async function Get_Cursor(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: 0};
  L0["result"] = (await $.call(C, "Smallint", [(await $.v(C, "Cursor"))]));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TCRAMainForm", "Get_DoubleBuffered", async function Get_DoubleBuffered(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: false};
  L0["result"] = (await $.v(C, "DoubleBuffered"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TCRAMainForm", "Get_DropTarget", async function Get_DropTarget(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: false};
  L0["result"] = (await $.v(C, "DropTarget"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TCRAMainForm", "Get_Enabled", async function Get_Enabled(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: false};
  L0["result"] = (await $.v(C, "Enabled"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TCRAMainForm", "Get_Font", async function Get_Font(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: null};
  await $.stmt((await $.call(C, "GetOleFont", [(await $.v(C, "Font")), L0["result"]])));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TCRAMainForm", "Get_HelpFile", async function Get_HelpFile(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: ''};
  L0["result"] = (await $.call(C, "WideString", [(await $.v(C, "HelpFile"))]));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TCRAMainForm", "Get_KeyPreview", async function Get_KeyPreview(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: false};
  L0["result"] = (await $.v(C, "KeyPreview"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TCRAMainForm", "Get_PixelsPerInch", async function Get_PixelsPerInch(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: 0};
  L0["result"] = (await $.v(C, "PixelsPerInch"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TCRAMainForm", "Get_PrintScale", async function Get_PrintScale(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: null};
  L0["result"] = (await $.call(C, "Ord", [(await $.v(C, "PrintScale"))]));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TCRAMainForm", "Get_Scaled", async function Get_Scaled(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: false};
  L0["result"] = (await $.v(C, "Scaled"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TCRAMainForm", "Get_Visible", async function Get_Visible(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: false};
  L0["result"] = (await $.v(C, "Visible"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TCRAMainForm", "Get_VisibleDockClientCount", async function Get_VisibleDockClientCount(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: 0};
  L0["result"] = (await $.v(C, "VisibleDockClientCount"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TCRAMainForm", "_Set_Font", async function _Set_Font(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.stmt((await $.call(C, "SetOleFont", [(await $.v(C, "Font")), L0["value"]])));
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["IFontDisp"]});
  U.method("TCRAMainForm", "ActivateEvent", async function ActivateEvent(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.ne((await $.v(C, "FEvents")), null))) {
    await $.mcall((await $.v(C, "FEvents")), "OnActivate", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TCRAMainForm", "ClickEvent", async function ClickEvent(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.ne((await $.v(C, "FEvents")), null))) {
    await $.mcall((await $.v(C, "FEvents")), "OnClick", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TCRAMainForm", "CreateEvent", async function CreateEvent(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.ne((await $.v(C, "FEvents")), null))) {
    await $.mcall((await $.v(C, "FEvents")), "OnCreate", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TCRAMainForm", "DblClickEvent", async function DblClickEvent(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.ne((await $.v(C, "FEvents")), null))) {
    await $.mcall((await $.v(C, "FEvents")), "OnDblClick", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TCRAMainForm", "DeactivateEvent", async function DeactivateEvent(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.ne((await $.v(C, "FEvents")), null))) {
    await $.mcall((await $.v(C, "FEvents")), "OnDeactivate", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TCRAMainForm", "DestroyEvent", async function DestroyEvent(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.ne((await $.v(C, "FEvents")), null))) {
    await $.mcall((await $.v(C, "FEvents")), "OnDestroy", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TCRAMainForm", "KeyPressEvent", async function KeyPressEvent(Self, p0, p1) {
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
  U.method("TCRAMainForm", "PaintEvent", async function PaintEvent(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.ne((await $.v(C, "FEvents")), null))) {
    await $.mcall((await $.v(C, "FEvents")), "OnPaint", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TCRAMainForm", "Set_AutoScroll", async function Set_AutoScroll(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "AutoScroll", L0["value"]);
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["WordBool"]});
  U.method("TCRAMainForm", "Set_AutoSize", async function Set_AutoSize(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "AutoSize", L0["value"]);
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["WordBool"]});
  U.method("TCRAMainForm", "Set_AxBorderStyle", async function Set_AxBorderStyle(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "AxBorderStyle", (await $.call(C, "TActiveFormBorderStyle", [L0["value"]])));
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["TxActiveFormBorderStyle"]});
  U.method("TCRAMainForm", "Set_Caption", async function Set_Caption(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "Caption", (await $.call(C, "TCaption", [L0["value"]])));
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["WideString"]});
  U.method("TCRAMainForm", "Set_Color", async function Set_Color(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "Color", (await $.call(C, "TColor", [L0["value"]])));
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["OLE_COLOR"]});
  U.method("TCRAMainForm", "Set_Cursor", async function Set_Cursor(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "Cursor", (await $.call(C, "TCursor", [L0["value"]])));
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["Smallint"]});
  U.method("TCRAMainForm", "Set_DoubleBuffered", async function Set_DoubleBuffered(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "DoubleBuffered", L0["value"]);
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["WordBool"]});
  U.method("TCRAMainForm", "Set_DropTarget", async function Set_DropTarget(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "DropTarget", L0["value"]);
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["WordBool"]});
  U.method("TCRAMainForm", "Set_Enabled", async function Set_Enabled(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "Enabled", L0["value"]);
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["WordBool"]});
  U.method("TCRAMainForm", "Set_Font", async function Set_Font(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.asRef(p0), result: undefined};
  await $.stmt((await $.call(C, "SetOleFont", [(await $.v(C, "Font")), (await L0["value"].get())])));
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["IFontDisp"]});
  U.method("TCRAMainForm", "Set_HelpFile", async function Set_HelpFile(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "HelpFile", (await $.call(C, "String", [L0["value"]])));
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["WideString"]});
  U.method("TCRAMainForm", "Set_KeyPreview", async function Set_KeyPreview(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "KeyPreview", L0["value"]);
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["WordBool"]});
  U.method("TCRAMainForm", "Set_PixelsPerInch", async function Set_PixelsPerInch(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "PixelsPerInch", L0["value"]);
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["Integer"]});
  U.method("TCRAMainForm", "Set_PrintScale", async function Set_PrintScale(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "PrintScale", (await $.call(C, "TPrintScale", [L0["value"]])));
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["TxPrintScale"]});
  U.method("TCRAMainForm", "Set_Scaled", async function Set_Scaled(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "Scaled", L0["value"]);
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["WordBool"]});
  U.method("TCRAMainForm", "Set_Visible", async function Set_Visible(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "Visible", L0["value"]);
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["WordBool"]});
  U.method("TCRAMainForm", "ActnAddExecute", async function ActnAddExecute(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.stmt((await $.mcall((await $.mv((await $.v(C, "CRADatMod")), "SB_ACA")), "CallProcedure", ["CheckObjectAccess", ["CALCRATEFORACCOUNT", "Insert"]])));
  {
    const $t1 = (await $.mv((await $.v(C, "CRADatMod")), "Purpose"));
    await $.stmt($.wcall([$t1], "CloseAll", [], C));
    await $.stmt((await $.wcall([$t1], "SetVariable", ["CONTID", 0], C)));
    await $.stmt($.wcall([$t1], "Open", [], C));
    await $.stmt($.wcall([$t1], "Insert", [], C));
    await $.mset((await $.wcall([$t1], "FieldByName", ["CURRENCY"], C)), "AsInteger", 0);
    await $.mset((await $.wcall([$t1], "FieldByName", ["BRANCHID"], C)), "AsInteger", (await $.mv((await $.mcall((await $.mv((await $.wv([$t1], "CRADatMod", C, false)), "BranchKod")), "FieldByName", ["KOD_FIL"])), "AsInteger")));
    await $.mset((await $.wcall([$t1], "FieldByName", ["OPENDATE"], C)), "AsDateTime", (await $.mv((await $.mcall((await $.mv((await $.wv([$t1], "CRADatMod", C, false)), "BankDate")), "FieldByName", ["TEK_DAT"])), "AsDateTime")));
    await $.mset((await $.wcall([$t1], "FieldByName", ["CLOSEDATE"], C)), "AsDateTime", (await $.mv((await $.mcall((await $.mv((await $.wv([$t1], "CRADatMod", C, false)), "BankDate")), "FieldByName", ["TEK_DAT"])), "AsDateTime")));
  }
  {
    const $t2 = (await $.v(C, "FormAddEditContract"));
    await $.mset((await $.wv([$t2], "CMSearchEdit2", C, false)), "Text", "");
    await $.mset((await $.wv([$t2], "CMSearchEdit1", C, false)), "Text", "");
    await $.stmt($.wcall([$t2], "ShowModal", [], C));
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TCRAMainForm", "ActiveFormCreate", async function ActiveFormCreate(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.set(C, "FormAddEditContract", (await $.mcall((await $.v(C, "TFormAddEditContract")), "Create", [Self])));
  await $.set(C, "CRADatMod", (await $.mcall((await $.v(C, "TCRADatMod")), "Create", [Self])));
  await $.set(C, "FormCRAProgress", (await $.mcall((await $.v(C, "TFormCRAProgress")), "Create", [Self])));
  await $.set(C, "FrmReferences", (await $.mcall((await $.v(C, "TFrmReferences")), "Create", [Self])));
  await $.set(C, "CommonApplication", (await $.v(C, "Application")));
  await $.set(C, "CommonGrid", (await $.v(C, "CRADBGrid")));
  await $.stmt((await $.mcall((await $.v(C, "SBTranslateProc")), "TranslateAllComponents", [Self, (await $.mv((await $.v(C, "sboapiDataModule")), "OrPack_SL"))])));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TCRAMainForm", "ActnEditExecute", async function ActnEditExecute(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  L0["locateaccounts"] = $.fn(async function LocateAccounts(p0) {
  const L1 = {"lookupcontrol": $.copyArg(p0), result: undefined};
  await $.fixArgs(L1, ["lookupcontrol"]);
  {
    const $t3 = L1["lookupcontrol"];
    if ($.truthy((await $.and_(($.not((await $.wcall([$t3], "VarIsNull", [(await $.mv((await $.mcall((await $.mv((await $.wv([$t3], "DataSource", C, false)), "DataSet")), "FieldByName", [(await $.wv([$t3], "DataField", C, false))])), "AsVariant"))], C)))), async () => ($.ne((await $.mv((await $.mcall((await $.mv((await $.wv([$t3], "DataSource", C, false)), "DataSet")), "FieldByName", [(await $.wv([$t3], "DataField", C, false))])), "AsInteger")), 0)))))) {
      await $.wset([$t3], "KeyValue", (await $.wv([$t3], "Null", C, false)), C);
      await $.wset([$t3], "KeyValue", (await $.mv((await $.mcall((await $.mv((await $.wv([$t3], "ListSource", C, false)), "DataSet")), "FieldByName", [(await $.wv([$t3], "KeyField", C, false))])), "AsInteger")), C);
    }
  }
  return L1.result;
});
  await $.stmt((await $.mcall((await $.mv((await $.v(C, "CRADatMod")), "SB_ACA")), "CallProcedure", ["CheckObjectAccess", ["CALCRATEFORACCOUNT", "Update"]])));
  {
    const $t4 = (await $.v(C, "CRADatMod"));
    const $t5 = (await $.wv([$t4], "Purpose", C, false));
    if ($.truthy((await $.wv([$t4, $t5], "Active", C, false)))) {
      await $.stmt($.wcall([$t4, $t5], "CloseAll", [], C));
    }
    await $.stmt((await $.wcall([$t4, $t5], "SetVariable", ["ContID", (await $.mv((await $.mcall((await $.mv((await $.wv([$t4, $t5], "CRADatMod", C, false)), "Contracts")), "FieldByName", ["ID"])), "AsInteger"))], C)));
    await $.stmt($.wcall([$t4, $t5], "Open", [], C));
    await $.stmt($.wcall([$t4, $t5], "Edit", [], C));
    await $.stmt((await $.wcall([$t4, $t5], "LocateAccounts", [(await $.mv((await $.wv([$t4, $t5], "FormAddEditContract", C, false)), "DBLookupComboboxEh3"))], { get: async () => L0["locateaccounts"], set: async (v) => { L0["locateaccounts"] = v; }, local: true })));
    await $.stmt((await $.wcall([$t4, $t5], "LocateAccounts", [(await $.mv((await $.wv([$t4, $t5], "FormAddEditContract", C, false)), "DBLookupComboboxEh2"))], { get: async () => L0["locateaccounts"], set: async (v) => { L0["locateaccounts"] = v; }, local: true })));
    await $.mcall((await $.wv([$t4, $t5], "FormAddEditContract", C, false)), "ShowModal", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TCRAMainForm", "ActnRefreshExecute", async function ActnRefreshExecute(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t6 = (await $.mv((await $.v(C, "CRADatMod")), "Contracts"));
    await $.stmt($.wcall([$t6], "Refresh", [], C));
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TCRAMainForm", "ActiveFormDestroy", async function ActiveFormDestroy(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mcall((await $.v(C, "CRADatMod")), "Free", []);
  await $.mcall((await $.v(C, "FormAddEditContract")), "Free", []);
  await $.mcall((await $.v(C, "FormCRAProgress")), "Free", []);
  await $.mcall((await $.v(C, "FrmReferences")), "Free", []);
  await $.mcall((await $.v(C, "FormCorrection")), "Free", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TCRAMainForm", "CRADBGridDrawColumnCell", async function CRADBGridDrawColumnCell(Self, p0, p1, p2, p3, p4) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "rect": $.copyArg(p1), "datacol": $.copyArg(p2), "column": $.copyArg(p3), "state": $.copyArg(p4), result: undefined, "imageindex": 0};
  await $.fixArgs(L0, ["sender", "rect", "datacol", "column", "state"]);
  L0["datacolindex"] = 1;
  L0["imageindex"] = (-(1));
  {
    const $t7 = L0["sender"];
    if ($.truthy($.ne((await $.mv((await $.mv((await $.wv([$t7], "DataSource", C, false)), "DataSet")), "RecordCount")), 0))) {
      { const $t8 = (await $.mv((await $.mcall((await $.mv((await $.wv([$t7], "DataSource", C, false)), "DataSet")), "FieldByName", ["Status"])), "AsInteger"));
        if ($.eq($t8, (await $.wv([$t7], "csUnknown", C, false)))) {
          await $.wset([$t7], "ImageIndex", 0, { get: async () => L0["imageindex"], set: async (v) => { L0["imageindex"] = v; }, local: true });
        }
        else if ($.eq($t8, (await $.wv([$t7], "csCalculated", C, false)))) {
          await $.wset([$t7], "ImageIndex", 1, { get: async () => L0["imageindex"], set: async (v) => { L0["imageindex"] = v; }, local: true });
        }
        else if ($.eq($t8, (await $.wv([$t7], "csDisabled", C, false)))) {
          await $.wset([$t7], "ImageIndex", 2, { get: async () => L0["imageindex"], set: async (v) => { L0["imageindex"] = v; }, local: true });
        }
      }
      if ($.truthy(($.eq((await $.wv([$t7], "DataCol", { get: async () => L0["datacol"], set: async (v) => { L0["datacol"] = v; }, local: true }, false)), 1)))) {
        await $.stmt((await $.mcall((await $.wv([$t7], "StatusImages", C, false)), "Draw", [(await $.wv([$t7], "Canvas", C, false)), (await $.mv((await $.wv([$t7], "Rect", { get: async () => L0["rect"], set: async (v) => { L0["rect"] = v; }, local: true }, false)), "Left")), (await $.mv((await $.wv([$t7], "Rect", { get: async () => L0["rect"], set: async (v) => { L0["rect"] = v; }, local: true }, false)), "Top")), (await $.wv([$t7], "ImageIndex", { get: async () => L0["imageindex"], set: async (v) => { L0["imageindex"] = v; }, local: true }, false)), (await $.wv([$t7], "True", C, false))])));
      } else {
        await $.stmt((await $.wcall([$t7], "DefaultDrawColumnCell", [(await $.wv([$t7], "Rect", { get: async () => L0["rect"], set: async (v) => { L0["rect"] = v; }, local: true }, false)), (await $.wv([$t7], "DataCol", { get: async () => L0["datacol"], set: async (v) => { L0["datacol"] = v; }, local: true }, false)), (await $.wv([$t7], "Column", { get: async () => L0["column"], set: async (v) => { L0["column"] = v; }, local: true }, false)), (await $.wv([$t7], "State", { get: async () => L0["state"], set: async (v) => { L0["state"] = v; }, local: true }, false))], C)));
      }
    }
  }
  return L0.result;
}, {"params": ["Sender", "Rect", "DataCol", "Column", "State"], "kind": "procedure", "ptypes": ["TObject", "TRect", "Integer", "TColumn", "TGridDrawState"]});
  U.method("TCRAMainForm", "ActnCalcExecute", async function ActnCalcExecute(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "selrowscount": 0, "contid": 0, "selrowindex": 0, "aborted": 0};
  await $.fixArgs(L0, ["sender"]);
  L0["noerrortitle"] = " Faizlər hesablandı.";
  L0["resultitle"] = " Faizlərin  hesablanmasında səhvlər var! ";
  {
    const $t9 = (await $.v(C, "CRADBGrid"));
    const $t10 = (await $.wv([$t9], "SelectedRows", C, false));
    const $t11 = (await $.mv((await $.wv([$t9, $t10], "DataSource", C, false)), "DataSet"));
    await $.wset([$t9, $t10, $t11], "ContID", (await $.mv((await $.wcall([$t9, $t10, $t11], "FieldByName", ["ID"], C)), "AsInteger")), { get: async () => L0["contid"], set: async (v) => { L0["contid"] = v; }, local: true });
    await $.wset([$t9, $t10, $t11], "SelRowsCount", (await $.wv([$t9, $t10, $t11], "Count", C, false)), { get: async () => L0["selrowscount"], set: async (v) => { L0["selrowscount"] = v; }, local: true });
    if ($.truthy($.ne((await $.wcall([$t9, $t10, $t11], "MessageDlg", ["Faizlər hesablanır əminisinizmi?", (await $.wv([$t9, $t10, $t11], "mtConfirmation", C, false)), [(await $.wv([$t9, $t10, $t11], "mbYes", C, false)), (await $.wv([$t9, $t10, $t11], "mbNo", C, false))], 0], C)), (await $.wv([$t9, $t10, $t11], "mrYes", C, false))))) {
      $.abort();
    }
    {
      const $t12 = (await $.wv([$t9, $t10, $t11], "FormCRAProgress", C, false));
      const $t13 = (await $.wv([$t9, $t10, $t11, $t12], "ProgressBar", C, false));
      await $.wset([$t9, $t10, $t11, $t12, $t13], "Max", (await $.wv([$t9, $t10, $t11, $t12, $t13], "SelRowsCount", { get: async () => L0["selrowscount"], set: async (v) => { L0["selrowscount"] = v; }, local: true }, false)), C);
      await $.wset([$t9, $t10, $t11, $t12, $t13], "Position", 0, C);
      await $.mcall((await $.wv([$t9, $t10, $t11, $t12, $t13], "FormCRAProgress", C, false)), "Show", []);
    }
    await $.mcall((await $.wv([$t9, $t10, $t11], "Application", C, false)), "ProcessMessages", []);
    try {
      await $.wset([$t9, $t10, $t11], "Aborted", 0, { get: async () => L0["aborted"], set: async (v) => { L0["aborted"] = v; }, local: true });
      { const $t14 = $.sub((await $.wv([$t9, $t10, $t11], "SelRowsCount", { get: async () => L0["selrowscount"], set: async (v) => { L0["selrowscount"] = v; }, local: true }, false)), 1);
        await $.wset([$t9, $t10, $t11], "SelRowIndex", 0, { get: async () => L0["selrowindex"], set: async (v) => { L0["selrowindex"] = v; }, local: true });
        let $t15 = true;
        for (;;) {
          if (!$t15) { await $.wset([$t9, $t10, $t11], "SelRowIndex", $.succ((await $.wv([$t9, $t10, $t11], "SelRowIndex", { get: async () => L0["selrowindex"], set: async (v) => { L0["selrowindex"] = v; }, local: true }, false)), 1), { get: async () => L0["selrowindex"], set: async (v) => { L0["selrowindex"] = v; }, local: true }); }
          $t15 = false;
          if (!($.ord((await $.wv([$t9, $t10, $t11], "SelRowIndex", { get: async () => L0["selrowindex"], set: async (v) => { L0["selrowindex"] = v; }, local: true }, false))) <= $.ord($t14))) break;
          try {
            await $.wset([$t9, $t10, $t11], "ContID", (await $.mv((await $.wcall([$t9, $t10, $t11], "FieldByName", ["ID"], C)), "AsInteger")), { get: async () => L0["contid"], set: async (v) => { L0["contid"] = v; }, local: true });
            await $.stmt((await $.wcall([$t9, $t10, $t11], "GotoBookmark", [(await $.wcall([$t9, $t10, $t11], "Pointer", [(await $.idx((await $.wv([$t9, $t10, $t11], "Items", C, false)), [(await $.wv([$t9, $t10, $t11], "SelRowIndex", { get: async () => L0["selrowindex"], set: async (v) => { L0["selrowindex"] = v; }, local: true }, false))]))], C))], C)));
            await $.mcall((await $.mv((await $.wv([$t9, $t10, $t11], "FormCRAProgress", C, false)), "ProgressBar")), "StepIt", []);
            await $.mset((await $.mv((await $.wv([$t9, $t10, $t11], "FormCRAProgress", C, false)), "StaticTextContNo")), "Caption", (await $.mv((await $.wcall([$t9, $t10, $t11], "FieldByName", ["ContractNo"], C)), "AsString")));
            {
              const $t17 = (await $.wv([$t9, $t10, $t11], "CRADatMod", C, false));
              const $t18 = (await $.wv([$t9, $t10, $t11, $t17], "CRA_CONTRACT", C, false));
              await $.stmt((await $.wcall([$t9, $t10, $t11, $t17, $t18], "CallProcedure", ["calcrapercent", ["p_contid", (await $.wv([$t9, $t10, $t11, $t17, $t18], "ContID", { get: async () => L0["contid"], set: async (v) => { L0["contid"] = v; }, local: true }, false))]], C)));
            }
          } catch ($t16) {
            $.rethrowControl($t16);
            if ($.excIs($t16, "EOracleError")) {
              L0["e"] = $.exc($t16);
              await $.stmt((await $.mcall((await $.mv((await $.mv((await $.wv([$t9, $t10, $t11], "FormCRAProgress", C, false)), "MemoD")), "Lines")), "Add", [$.add($.add($.add($.add(" #", (await $.mv((await $.wcall([$t9, $t10, $t11], "FieldByName", ["ContractNo"], C)), "AsString"))), " << "), (await $.mv((await $.wv([$t9, $t10, $t11], "E", { get: async () => L0["e"], set: async (v) => { L0["e"] = v; }, local: true }, false)), "Message"))), " >> ")])));
              await $.stmt((await $.mcall((await $.mv((await $.mv((await $.wv([$t9, $t10, $t11], "FormCRAProgress", C, false)), "MemoD")), "Lines")), "Add", [""])));
              await $.stmt((await $.wcall([$t9, $t10, $t11], "Inc", [$.ref(async () => (await $.wv([$t9, $t10, $t11], "Aborted", { get: async () => L0["aborted"], set: async (v) => { L0["aborted"] = v; }, local: true }, false)), async ($t19) => { await $.wset([$t9, $t10, $t11], "Aborted", $t19, { get: async () => L0["aborted"], set: async (v) => { L0["aborted"] = v; }, local: true }); })], C)));
              continue;
            }
            else { throw $t16; }
          }
          await $.tick();
        }
      }
    } finally {
      {
        const $t20 = (await $.wv([$t9, $t10, $t11], "FormCRAProgress", C, false));
        await $.mset((await $.wv([$t9, $t10, $t11, $t20], "ProgressBar", C, false)), "Position", 0);
        if ($.truthy($.ne((await $.wv([$t9, $t10, $t11, $t20], "Aborted", { get: async () => L0["aborted"], set: async (v) => { L0["aborted"] = v; }, local: true }, false)), 0))) {
          await $.mset((await $.mv((await $.wv([$t9, $t10, $t11, $t20], "LblResult", C, false)), "Font")), "Color", (await $.wv([$t9, $t10, $t11, $t20], "clRed", C, false)));
          await $.mset((await $.wv([$t9, $t10, $t11, $t20], "LblResult", C, false)), "Caption", $.add((await $.wcall([$t9, $t10, $t11, $t20], "IntToStr", [(await $.wv([$t9, $t10, $t11, $t20], "Aborted", { get: async () => L0["aborted"], set: async (v) => { L0["aborted"] = v; }, local: true }, false))], C)), (await $.wv([$t9, $t10, $t11, $t20], "ResulTitle", { get: async () => L0["resultitle"], set: async (v) => { L0["resultitle"] = v; }, local: true }, false))));
        } else {
          await $.mset((await $.mv((await $.wv([$t9, $t10, $t11, $t20], "LblResult", C, false)), "Font")), "Color", (await $.wv([$t9, $t10, $t11, $t20], "clGreen", C, false)));
          await $.mset((await $.wv([$t9, $t10, $t11, $t20], "LblResult", C, false)), "Caption", (await $.wv([$t9, $t10, $t11, $t20], "NoErrorTitle", { get: async () => L0["noerrortitle"], set: async (v) => { L0["noerrortitle"] = v; }, local: true }, false)));
        }
      }
      await $.mcall((await $.mv((await $.wv([$t9, $t10, $t11], "CRADatMod", C, false)), "Contracts")), "Refresh", []);
    }
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TCRAMainForm", "ActnSettingExecute", async function ActnSettingExecute(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mcall((await $.v(C, "FrmReferences")), "ShowModal", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TCRAMainForm", "N6Click", async function N6Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t21 = (await $.v(C, "CRADBGrid"));
    const $t22 = (await $.wv([$t21], "SelectedRows", C, false));
    const $t23 = (await $.mv((await $.wv([$t21, $t22], "DataSource", C, false)), "DataSet"));
    await $.stmt($.wcall([$t21, $t22, $t23], "DisableControls", [], C));
    try {
      await $.stmt($.wcall([$t21, $t22, $t23], "First", [], C));
      while ($.truthy($.not((await $.wv([$t21, $t22, $t23], "Eof", C, false))))) {
        await $.wset([$t21, $t22, $t23], "CurrentRowSelected", (await $.wv([$t21, $t22, $t23], "True", C, false)), C);
        await $.stmt($.wcall([$t21, $t22, $t23], "Next", [], C));
        await $.tick();
      }
    } finally {
      await $.stmt($.wcall([$t21, $t22, $t23], "EnableControls", [], C));
    }
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TCRAMainForm", "N7Click", async function N7Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t24 = (await $.v(C, "CRADatMod"));
    const $t25 = (await $.wv([$t24], "Contracts", C, false));
    const $t26 = (await $.wv([$t24, $t25], "CRA_CONTRACT", C, false));
    await $.stmt((await $.wcall([$t24, $t25, $t26], "CallProcedure", ["CalcEnabledDisabled", ["p_id", (await $.mv((await $.wcall([$t24, $t25, $t26], "FieldByName", ["ID"], C)), "AsInteger"))]], C)));
    await $.stmt($.wcall([$t24, $t25, $t26], "Refresh", [], C));
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TCRAMainForm", "N8Click", async function N8Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mset((await $.v(C, "SearchPanel")), "Visible", $.not((await $.mv((await $.v(C, "SearchPanel")), "Visible"))));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TCRAMainForm", "ActnSearchExecute", async function ActnSearchExecute(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "searchfield": '', "searchoptions": null};
  await $.fixArgs(L0, ["sender"]);
  L0["searchoptions"] = [(await $.v(C, "srIgnoreCase")), (await $.v(C, "srPartialMatch"))];
  {
    const $t27 = L0["sender"];
    await $.wset([$t27], "SearchField", (await $.wcall([$t27], "copy", [(await $.wv([$t27], "Name", C, false)), 5, (await $.wcall([$t27], "length", [(await $.wv([$t27], "Name", C, false))], C))], C)), { get: async () => L0["searchfield"], set: async (v) => { L0["searchfield"] = v; }, local: true });
    await $.mcall((await $.mv((await $.wv([$t27], "CRADBGrid", C, false)), "SelectedRows")), "Clear", []);
    {
      const $t28 = (await $.wcall([$t27], "TOracleDataSet", [(await $.mv((await $.mv((await $.wv([$t27], "CRADBGrid", C, false)), "DataSource")), "DataSet"))], C));
      if ($.truthy($.not((await $.wcall([$t27, $t28], "SearchRecord", [(await $.wv([$t27, $t28], "SearchField", { get: async () => L0["searchfield"], set: async (v) => { L0["searchfield"] = v; }, local: true }, false)), (await $.wv([$t27, $t28], "Text", C, false)), $.add((await $.wv([$t27, $t28], "SearchOptions", { get: async () => L0["searchoptions"], set: async (v) => { L0["searchoptions"] = v; }, local: true }, false)), [(await $.wv([$t27, $t28], "srFromCurrent", C, false)), (await $.wv([$t27, $t28], "srForward", C, false))])], C))))) {
        if ($.truthy($.eq((await $.wcall([$t27, $t28], "MessageDlg", [$.add($.add("Axtarış sona çatdı", "\r"), "Davam etmək istəyirsinizmi?"), (await $.wv([$t27, $t28], "mtInformation", C, false)), [(await $.wv([$t27, $t28], "mbNo", C, false)), (await $.wv([$t27, $t28], "mbYes", C, false))], 0], C)), (await $.wv([$t27, $t28], "mrYes", C, false))))) {
          if ($.truthy($.not((await $.wcall([$t27, $t28], "SearchRecord", [(await $.wv([$t27, $t28], "SearchField", { get: async () => L0["searchfield"], set: async (v) => { L0["searchfield"] = v; }, local: true }, false)), (await $.wv([$t27, $t28], "Text", C, false)), $.add((await $.wv([$t27, $t28], "SearchOptions", { get: async () => L0["searchoptions"], set: async (v) => { L0["searchoptions"] = v; }, local: true }, false)), [(await $.wv([$t27, $t28], "srFromBeginning", C, false))])], C))))) {
            await $.stmt((await $.wcall([$t27, $t28], "MessageDlg", ["Yazı tapılmadı!", (await $.wv([$t27, $t28], "mtInformation", C, false)), [(await $.wv([$t27, $t28], "mbOK", C, false))], 0], C)));
          }
        }
      }
    }
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TCRAMainForm", "EditContractNoKeyPress", async function EditContractNoKeyPress(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "key": $.asRef(p1), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.eq((await L0["key"].get()), "\r"))) {
    await $.stmt((await $.call(C, "ActnSearchExecute", [L0["sender"]])));
  }
  return L0.result;
}, {"params": ["Sender", "Key"], "kind": "procedure", "ptypes": ["TObject", "Char"]});
  U.method("TCRAMainForm", "EditContractNoExit", async function EditContractNoExit(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t29 = L0["sender"];
    await $.wset([$t29], "Text", "", C);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TCRAMainForm", "CRADBGridTitleClick", async function CRADBGridTitleClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"column": $.copyArg(p0), result: undefined, "orderkind": ''};
  await $.fixArgs(L0, ["column"]);
  if ($.truthy($.eq((await $.mv(L0["column"], "Index")), 1))) {
    return L0.result;
  }
  L0["orderkind"] = (await $.mv((await $.mv(L0["column"], "Field")), "FieldName"));
  await $.mset((await $.v(C, "Screen")), "Cursor", (await $.v(C, "crHourGlass")));
  try {
    {
      const $t30 = (await $.call(C, "TOracleDataSet", [(await $.mv((await $.mv((await $.v(C, "CRADBGrid")), "DataSource")), "DataSet"))]));
      if ($.truthy((await $.wv([$t30], "Active", C, false)))) {
        await $.stmt($.wcall([$t30], "CloseAll", [], C));
      }
      await $.stmt((await $.wcall([$t30], "SetVariable", ["OrderClause", (await $.wv([$t30], "OrderKind", { get: async () => L0["orderkind"], set: async (v) => { L0["orderkind"] = v; }, local: true }, false))], C)));
      await $.stmt($.wcall([$t30], "Open", [], C));
    }
  } finally {
    await $.mset((await $.v(C, "Screen")), "Cursor", (await $.v(C, "crDefault")));
  }
  return L0.result;
}, {"params": ["Column"], "kind": "procedure", "ptypes": ["TColumn"]});
  U.method("TCRAMainForm", "ActnCorrectorExecute", async function ActnCorrectorExecute(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.set(C, "FormCorrection", (await $.mcall((await $.v(C, "TFormCorrection")), "Create", [Self])));
  await $.mcall((await $.v(C, "FormCorrection")), "ShowModal", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TCRAMainForm", "N9Click", async function N9Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.stmt((await $.mcall((await $.mv((await $.v(C, "CRADatMod")), "SB_ACA")), "CallProcedure", ["CheckObjectAccess", ["CALCRATEFORACCOUNT", "Delete"]])));
  if ($.truthy($.ne((await $.call(C, "MessageDlg", ["Müqavilə baglanır  əminisinizmi?", (await $.v(C, "mtConfirmation")), [(await $.v(C, "mbYes")), (await $.v(C, "mbNo"))], 0])), (await $.v(C, "mrYes"))))) {
    $.abort();
  }
  {
    const $t31 = (await $.v(C, "CRADatMod"));
    const $t32 = (await $.wv([$t31], "Contracts", C, false));
    await $.stmt((await $.mcall((await $.wv([$t31, $t32], "CRA_CONTRACT", C, false)), "CallProcedure", ["close_cont", ["p_contid", (await $.mv((await $.wcall([$t31, $t32], "FieldByName", ["ID"], C)), "Asinteger"))]])));
    await $.stmt($.wcall([$t31, $t32], "Refresh", [], C));
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TCRAMainForm", "ActnExportExecute", async function ActnExportExecute(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t33 = (await $.v(C, "ExcelExport"));
    await $.stmt($.wcall([$t33], "Connect", [], C));
    await $.stmt((await $.wcall([$t33], "ExportDataset", [(await $.mv((await $.wv([$t33], "CRADatMod", C, false)), "Contracts")), "export", (await $.wv([$t33], "true", C, false))], C)));
    await $.stmt($.wcall([$t33], "Disconnect", [], C));
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TCRAMainForm", "ActnPaymentExecute", async function ActnPaymentExecute(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.stmt((await $.call(C, "LoadPlugin", ["CRA_ExtractMoney.bpl", ""])));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  return U;
}
