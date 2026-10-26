// Generated from GuaranteeMgrImpl.pas by pas2js — do not edit by hand; regenerate instead.
/* eslint-disable */
// @ts-nocheck

export default function define($) {
  const U = $.unit("GuaranteeMgrImpl", ["Windows", "Messages", "SysUtils", "Classes", "Graphics", "Controls", "Forms", "Dialogs", "ActiveX", "AxCtrls", "GuaranteeMgrdpr_TLB", "StdVcl", "ComCtrls", "StdCtrls", "ExtCtrls", "ToolWin", "CMExcelExport", "Menus", "ActnList", "ImgList", "Grids", "DBGridEh", "db", "Oracledata", "DBGridEhGrouping", "GridsEh", "ComObj", "ComServ", "DataMGuarantee", "FormGuarAddlmpl", "FormGinfolmpl", "SBTranslateProc", "sboapiDataModuleImpl", "DashinmazImpl"]);
  const C = [U];
  U.defClass("TGuaranteeMgr", "TActiveForm", {"panel1": {"name": "Panel1", "type": "TPanel"}, "groupbox1": {"name": "GroupBox1", "type": "TGroupBox"}, "panel3": {"name": "Panel3", "type": "TPanel"}, "statictext5": {"name": "StaticText5", "type": "TStaticText"}, "editcontractnum": {"name": "editCONTRACTNUM", "type": "TEdit"}, "panel4": {"name": "Panel4", "type": "TPanel"}, "statictext1": {"name": "StaticText1", "type": "TStaticText"}, "editname": {"name": "editname", "type": "TEdit"}, "panel5": {"name": "Panel5", "type": "TPanel"}, "statictext2": {"name": "StaticText2", "type": "TStaticText"}, "editprop_count": {"name": "editPROP_COUNT", "type": "TEdit"}, "panel6": {"name": "Panel6", "type": "TPanel"}, "statictext3": {"name": "StaticText3", "type": "TStaticText"}, "editvalue": {"name": "editvalue", "type": "TEdit"}, "panel7": {"name": "Panel7", "type": "TPanel"}, "statictext4": {"name": "StaticText4", "type": "TStaticText"}, "datetimepicker1": {"name": "DateTimePicker1", "type": "TDateTimePicker"}, "maingrid": {"name": "MainGrid", "type": "TDBGridEh"}, "accountpopupmenu": {"name": "accountPopupMenu", "type": "TPopupMenu"}, "n13": {"name": "N13", "type": "TMenuItem"}, "n14": {"name": "N14", "type": "TMenuItem"}, "setingpopupmenu": {"name": "SetingPopupMenu", "type": "TPopupMenu"}, "n6": {"name": "N6", "type": "TMenuItem"}, "n8": {"name": "N8", "type": "TMenuItem"}, "popupmenu1": {"name": "PopupMenu1", "type": "TPopupMenu"}, "n1": {"name": "N1", "type": "TMenuItem"}, "n2": {"name": "N2", "type": "TMenuItem"}, "n15": {"name": "N15", "type": "TMenuItem"}, "n4": {"name": "N4", "type": "TMenuItem"}, "n5": {"name": "N5", "type": "TMenuItem"}, "imagelist1": {"name": "ImageList1", "type": "TImageList"}, "excelexport": {"name": "ExcelExport", "type": "TCMExcelExport"}, "coolbar1": {"name": "CoolBar1", "type": "TCoolBar"}, "toolbar1": {"name": "ToolBar1", "type": "TToolBar"}, "isertbtn": {"name": "isertbtn", "type": "TToolButton"}, "toolbutton5": {"name": "ToolButton5", "type": "TToolButton"}, "toolbutton1": {"name": "ToolButton1", "type": "TToolButton"}, "toolbutton4": {"name": "ToolButton4", "type": "TToolButton"}, "toolbutton3": {"name": "ToolButton3", "type": "TToolButton"}, "toolbutton6": {"name": "ToolButton6", "type": "TToolButton"}, "toolbutton2": {"name": "ToolButton2", "type": "TToolButton"}, "toolbutton8": {"name": "ToolButton8", "type": "TToolButton"}, "toolbutton7": {"name": "ToolButton7", "type": "TToolButton"}, "gfgfgfgfg1": {"name": "gfgfgfgfg1", "type": "TMenuItem"}, "popupmenu2": {"name": "PopupMenu2", "type": "TPopupMenu"}, "danarmlak1": {"name": "Danarmlak1", "type": "TMenuItem"}, "danmazmlak1": {"name": "Danmazmlak1", "type": "TMenuItem"}, "fevents": {"name": "FEvents", "type": "IGuaranteeMgrEvents"}}, {});
  U.init(async () => {
    U.var_("xx", 0, "integer");
    U.var_("satici_id", 0, "integer");
    U.var_("mkt_id", 0, "integer");
    U.var_("sex_satici", 0, "integer");
    U.var_("birg_borcid", 0, "integer");
    U.var_("birg_borcid2", 0, "integer");
    U.var_("form_edit_ins", false, "Boolean");
  });
  U.method("TGuaranteeMgr", "DefinePropertyPages", async function DefinePropertyPages(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"definepropertypage": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["definepropertypage"]);
  return L0.result;
}, {"params": ["DefinePropertyPage"], "kind": "procedure", "ptypes": ["TDefinePropertyPage"]});
  U.method("TGuaranteeMgr", "EventSinkChanged", async function EventSinkChanged(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"eventsink": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["eventsink"]);
  await $.set(C, "FEvents", L0["eventsink"]);
  return L0.result;
}, {"params": ["EventSink"], "kind": "procedure", "ptypes": ["IUnknown"]});
  U.method("TGuaranteeMgr", "Initialize", async function Initialize(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: undefined};
  await $.inherited(Self, "TGuaranteeMgr", "Initialize", null, arguments);
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
  U.method("TGuaranteeMgr", "Get_Active", async function Get_Active(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: false};
  L0["result"] = (await $.v(C, "Active"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TGuaranteeMgr", "Get_AutoScroll", async function Get_AutoScroll(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: false};
  L0["result"] = (await $.v(C, "AutoScroll"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TGuaranteeMgr", "Get_AutoSize", async function Get_AutoSize(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: false};
  L0["result"] = (await $.v(C, "AutoSize"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TGuaranteeMgr", "Get_AxBorderStyle", async function Get_AxBorderStyle(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: null};
  L0["result"] = (await $.call(C, "Ord", [(await $.v(C, "AxBorderStyle"))]));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TGuaranteeMgr", "Get_Caption", async function Get_Caption(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: ''};
  L0["result"] = (await $.call(C, "WideString", [(await $.v(C, "Caption"))]));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TGuaranteeMgr", "Get_Color", async function Get_Color(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: null};
  L0["result"] = (await $.call(C, "OLE_COLOR", [(await $.v(C, "Color"))]));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TGuaranteeMgr", "Get_Cursor", async function Get_Cursor(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: 0};
  L0["result"] = (await $.call(C, "Smallint", [(await $.v(C, "Cursor"))]));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TGuaranteeMgr", "Get_DoubleBuffered", async function Get_DoubleBuffered(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: false};
  L0["result"] = (await $.v(C, "DoubleBuffered"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TGuaranteeMgr", "Get_DropTarget", async function Get_DropTarget(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: false};
  L0["result"] = (await $.v(C, "DropTarget"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TGuaranteeMgr", "Get_Enabled", async function Get_Enabled(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: false};
  L0["result"] = (await $.v(C, "Enabled"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TGuaranteeMgr", "Get_Font", async function Get_Font(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: null};
  await $.stmt((await $.call(C, "GetOleFont", [(await $.v(C, "Font")), L0["result"]])));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TGuaranteeMgr", "Get_HelpFile", async function Get_HelpFile(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: ''};
  L0["result"] = (await $.call(C, "WideString", [(await $.v(C, "HelpFile"))]));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TGuaranteeMgr", "Get_KeyPreview", async function Get_KeyPreview(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: false};
  L0["result"] = (await $.v(C, "KeyPreview"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TGuaranteeMgr", "Get_PixelsPerInch", async function Get_PixelsPerInch(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: 0};
  L0["result"] = (await $.v(C, "PixelsPerInch"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TGuaranteeMgr", "Get_PrintScale", async function Get_PrintScale(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: null};
  L0["result"] = (await $.call(C, "Ord", [(await $.v(C, "PrintScale"))]));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TGuaranteeMgr", "Get_Scaled", async function Get_Scaled(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: false};
  L0["result"] = (await $.v(C, "Scaled"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TGuaranteeMgr", "Get_Visible", async function Get_Visible(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: false};
  L0["result"] = (await $.v(C, "Visible"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TGuaranteeMgr", "Get_VisibleDockClientCount", async function Get_VisibleDockClientCount(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: 0};
  L0["result"] = (await $.v(C, "VisibleDockClientCount"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TGuaranteeMgr", "_Set_Font", async function _Set_Font(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.stmt((await $.call(C, "SetOleFont", [(await $.v(C, "Font")), L0["value"]])));
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["IFontDisp"]});
  U.method("TGuaranteeMgr", "ActivateEvent", async function ActivateEvent(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.ne((await $.v(C, "FEvents")), null))) {
    await $.mcall((await $.v(C, "FEvents")), "OnActivate", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TGuaranteeMgr", "ClickEvent", async function ClickEvent(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.ne((await $.v(C, "FEvents")), null))) {
    await $.mcall((await $.v(C, "FEvents")), "OnClick", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TGuaranteeMgr", "CreateEvent", async function CreateEvent(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.ne((await $.v(C, "FEvents")), null))) {
    await $.mcall((await $.v(C, "FEvents")), "OnCreate", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TGuaranteeMgr", "DblClickEvent", async function DblClickEvent(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.ne((await $.v(C, "FEvents")), null))) {
    await $.mcall((await $.v(C, "FEvents")), "OnDblClick", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TGuaranteeMgr", "DeactivateEvent", async function DeactivateEvent(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.ne((await $.v(C, "FEvents")), null))) {
    await $.mcall((await $.v(C, "FEvents")), "OnDeactivate", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TGuaranteeMgr", "DestroyEvent", async function DestroyEvent(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.ne((await $.v(C, "FEvents")), null))) {
    await $.mcall((await $.v(C, "FEvents")), "OnDestroy", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TGuaranteeMgr", "KeyPressEvent", async function KeyPressEvent(Self, p0, p1) {
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
  U.method("TGuaranteeMgr", "PaintEvent", async function PaintEvent(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.ne((await $.v(C, "FEvents")), null))) {
    await $.mcall((await $.v(C, "FEvents")), "OnPaint", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TGuaranteeMgr", "Set_AutoScroll", async function Set_AutoScroll(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "AutoScroll", L0["value"]);
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["WordBool"]});
  U.method("TGuaranteeMgr", "Set_AutoSize", async function Set_AutoSize(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "AutoSize", L0["value"]);
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["WordBool"]});
  U.method("TGuaranteeMgr", "Set_AxBorderStyle", async function Set_AxBorderStyle(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "AxBorderStyle", (await $.call(C, "TActiveFormBorderStyle", [L0["value"]])));
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["TxActiveFormBorderStyle"]});
  U.method("TGuaranteeMgr", "Set_Caption", async function Set_Caption(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "Caption", (await $.call(C, "TCaption", [L0["value"]])));
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["WideString"]});
  U.method("TGuaranteeMgr", "Set_Color", async function Set_Color(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "Color", (await $.call(C, "TColor", [L0["value"]])));
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["OLE_COLOR"]});
  U.method("TGuaranteeMgr", "Set_Cursor", async function Set_Cursor(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "Cursor", (await $.call(C, "TCursor", [L0["value"]])));
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["Smallint"]});
  U.method("TGuaranteeMgr", "Set_DoubleBuffered", async function Set_DoubleBuffered(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "DoubleBuffered", L0["value"]);
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["WordBool"]});
  U.method("TGuaranteeMgr", "Set_DropTarget", async function Set_DropTarget(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "DropTarget", L0["value"]);
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["WordBool"]});
  U.method("TGuaranteeMgr", "Set_Enabled", async function Set_Enabled(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "Enabled", L0["value"]);
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["WordBool"]});
  U.method("TGuaranteeMgr", "Set_Font", async function Set_Font(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.asRef(p0), result: undefined};
  await $.stmt((await $.call(C, "SetOleFont", [(await $.v(C, "Font")), (await L0["value"].get())])));
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["IFontDisp"]});
  U.method("TGuaranteeMgr", "Set_HelpFile", async function Set_HelpFile(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "HelpFile", (await $.call(C, "String", [L0["value"]])));
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["WideString"]});
  U.method("TGuaranteeMgr", "Set_KeyPreview", async function Set_KeyPreview(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "KeyPreview", L0["value"]);
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["WordBool"]});
  U.method("TGuaranteeMgr", "Set_PixelsPerInch", async function Set_PixelsPerInch(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "PixelsPerInch", L0["value"]);
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["Integer"]});
  U.method("TGuaranteeMgr", "Set_PrintScale", async function Set_PrintScale(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "PrintScale", (await $.call(C, "TPrintScale", [L0["value"]])));
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["TxPrintScale"]});
  U.method("TGuaranteeMgr", "Set_Scaled", async function Set_Scaled(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "Scaled", L0["value"]);
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["WordBool"]});
  U.method("TGuaranteeMgr", "Set_Visible", async function Set_Visible(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "Visible", L0["value"]);
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["WordBool"]});
  U.method("TGuaranteeMgr", "isertbtnClick", async function isertbtnClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TGuaranteeMgr", "ActiveFormCreate", async function ActiveFormCreate(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.set(C, "DataMGuarante", (await $.mcall((await $.v(C, "TDataMGuarante")), "create", [Self])));
  await $.set(C, "FrmDashinmaz", (await $.mcall((await $.v(C, "TFrmDashinmaz")), "create", [Self])));
  await $.set(C, "FormGuarAdd", (await $.mcall((await $.v(C, "TFormGuarAdd")), "Create", [Self])));
  await $.stmt((await $.mcall((await $.v(C, "SBTranslateProc")), "TranslateAllComponents", [Self, (await $.mv((await $.v(C, "sboapiDataModule")), "OrPack_SL"))])));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TGuaranteeMgr", "N13Click", async function N13Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t1 = (await $.v(C, "ExcelExport"));
    await $.stmt($.wcall([$t1], "Connect", [], C));
    await $.stmt((await $.wcall([$t1], "ExportDataset", [(await $.mv((await $.wv([$t1], "DataMGuarante", C, false)), "DataSetGuarantee")), "Girov", (await $.wv([$t1], "true", C, false)), (await $.wv([$t1], "false", C, false))], C)));
    await $.stmt($.wcall([$t1], "Disconnect", [], C));
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TGuaranteeMgr", "N1Click", async function N1Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mset((await $.v(C, "FormGuarAdd")), "Caption", "Girov barədə məlumatın yığılması");
  {
    const $t2 = (await $.v(C, "DataMGuarante"));
    const $t3 = (await $.wv([$t2], "DataSetGuarantee", C, false));
    await $.stmt($.wcall([$t2, $t3], "insert", [], C));
  }
  await $.mcall((await $.v(C, "FormGuarAdd")), "ShowModal", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TGuaranteeMgr", "ToolButton1Click", async function ToolButton1Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "p_id": 0};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.eq((await $.mv((await $.mcall((await $.mv((await $.v(C, "DataMGuarante")), "DataSetGuarantee")), "FieldByName", ["new"])), "AsInteger")), 1))) {
    await $.mset((await $.v(C, "FormGuarAdd")), "Caption", $.add("Daşınar əmlak barədə məlumatın redaktə olunması id=", (await $.mv((await $.mcall((await $.mv((await $.v(C, "DataMGuarante")), "DataSetGuarantee")), "FieldByName", ["id"])), "AsString"))));
    {
      const $t4 = (await $.mv((await $.v(C, "DataMGuarante")), "MainDSet"));
      if ($.truthy((await $.wv([$t4], "Active", C, false)))) {
        await $.stmt($.wcall([$t4], "close", [], C));
      }
      await $.stmt((await $.wcall([$t4], "SetVariable", ["id", (await $.mv((await $.mcall((await $.mv((await $.wv([$t4], "DataMGuarante", C, false)), "DataSetGuarantee")), "FieldByName", ["id"])), "AsInteger"))], C)));
      await $.stmt($.wcall([$t4], "open", [], C));
      await $.mcall((await $.mv((await $.wv([$t4], "DataMGuarante", C, false)), "MainDSet")), "edit", []);
      await $.mset((await $.mv((await $.wv([$t4], "FormGuarAdd", C, false)), "InUse_rg")), "ItemIndex", (await $.mv((await $.wcall([$t4], "FieldByName", ["PLEDGEINUSE"], C)), "AsInteger")));
      await $.mset((await $.mv((await $.wv([$t4], "FormGuarAdd", C, false)), "MaskEdit2")), "Text", (await $.mv((await $.wcall([$t4], "FieldByName", ["AFTONO"], C)), "Asstring")));
    }
    await $.mcall((await $.v(C, "FormGuarAdd")), "ShowModal", []);
  }
  if ($.truthy($.eq((await $.mv((await $.mcall((await $.mv((await $.v(C, "DataMGuarante")), "DataSetGuarantee")), "FieldByName", ["new"])), "AsInteger")), 2))) {
    await $.set(C, "form_edit_ins", true);
    await $.mset((await $.v(C, "FormGuarAdd")), "Caption", $.add("Daşınmaz əmlak barədə məlumatın redaktə olunması id=", (await $.mv((await $.mcall((await $.mv((await $.v(C, "DataMGuarante")), "DataSetGuarantee")), "FieldByName", ["id"])), "AsString"))));
    {
      const $t5 = (await $.mv((await $.v(C, "DataMGuarante")), "MainDSet_d"));
      if ($.truthy((await $.wv([$t5], "Active", C, false)))) {
        await $.stmt($.wcall([$t5], "close", [], C));
      }
      await $.stmt((await $.wcall([$t5], "SetVariable", ["id", (await $.mv((await $.mcall((await $.mv((await $.wv([$t5], "DataMGuarante", C, false)), "DataSetGuarantee")), "FieldByName", ["id"])), "AsInteger"))], C)));
      await $.stmt($.wcall([$t5], "open", [], C));
      await $.mcall((await $.mv((await $.wv([$t5], "DataMGuarante", C, false)), "MainDSet_d")), "edit", []);
      await $.mset((await $.mv((await $.wv([$t5], "FormGuarAdd", C, false)), "InUse_rg")), "ItemIndex", (await $.mv((await $.wcall([$t5], "FieldByName", ["PLEDGEINUSE"], C)), "AsInteger")));
      await $.mset((await $.mv((await $.wv([$t5], "FormGuarAdd", C, false)), "MaskEdit2")), "Text", (await $.mv((await $.wcall([$t5], "FieldByName", ["AFTONO"], C)), "Asstring")));
    }
    {
      const $t6 = (await $.v(C, "FrmDashinmaz"));
      if ($.truthy($.eq((await $.mv((await $.mcall((await $.mv((await $.wv([$t6], "DataMGuarante", C, false)), "DataSetGuarantee")), "FieldByName", ["mkt"])), "AsInteger")), 1))) {
        { const $t7 = await $.iset((await $.mv((await $.wv([$t6], "CheckListBox1", C, false)), "Checked")), [0], (await $.wv([$t6], "true", C, false))); if ($t7 !== undefined) { await $.mset((await $.wv([$t6], "CheckListBox1", C, false)), "Checked", $t7); } }
      }
      if ($.truthy($.eq((await $.mv((await $.mcall((await $.mv((await $.wv([$t6], "DataMGuarante", C, false)), "DataSetGuarantee")), "FieldByName", ["mkt"])), "AsInteger")), 2))) {
        { const $t8 = await $.iset((await $.mv((await $.wv([$t6], "CheckListBox1", C, false)), "Checked")), [1], (await $.wv([$t6], "true", C, false))); if ($t8 !== undefined) { await $.mset((await $.wv([$t6], "CheckListBox1", C, false)), "Checked", $t8); } }
      }
      await $.mcall((await $.wv([$t6], "ods_mkt", C, false)), "Close", []);
      await $.stmt((await $.mcall((await $.wv([$t6], "ods_mkt", C, false)), "SetVariable", ["v_id", (await $.mv((await $.mcall((await $.mv((await $.wv([$t6], "DataMGuarante", C, false)), "DataSetGuarantee")), "FieldByName", ["satici"])), "AsInteger"))])));
      await $.mcall((await $.wv([$t6], "ods_mkt", C, false)), "open", []);
      await $.mset((await $.wv([$t6], "edit1", C, false)), "Text", (await $.mv((await $.wv([$t6], "ods_mktID", C, false)), "AsString")));
      await $.mset((await $.wv([$t6], "edit2", C, false)), "Text", (await $.mv((await $.wv([$t6], "ods_mktNAME", C, false)), "AsString")));
      await $.mset((await $.wv([$t6], "edit3", C, false)), "Text", (await $.mv((await $.wv([$t6], "ods_mktINN", C, false)), "AsString")));
      await $.mcall((await $.wv([$t6], "ods_phys", C, false)), "Close", []);
      await $.stmt((await $.mcall((await $.wv([$t6], "ods_phys", C, false)), "SetVariable", ["v_id", (await $.mv((await $.mcall((await $.mv((await $.wv([$t6], "DataMGuarante", C, false)), "DataSetGuarantee")), "FieldByName", ["sex_satici"])), "AsInteger"))])));
      await $.mcall((await $.wv([$t6], "ods_phys", C, false)), "open", []);
      await $.mset((await $.wv([$t6], "edit4", C, false)), "Text", (await $.mv((await $.wv([$t6], "ods_physIDCUST", C, false)), "AsString")));
      await $.mset((await $.wv([$t6], "edit5", C, false)), "Text", (await $.mv((await $.wv([$t6], "ods_physFUL_NAME", C, false)), "AsString")));
      await $.mset((await $.wv([$t6], "edit6", C, false)), "Text", (await $.mv((await $.wv([$t6], "ods_physPINKO", C, false)), "AsString")));
    }
    await $.mcall((await $.v(C, "FrmDashinmaz")), "ShowModal", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TGuaranteeMgr", "N2Click", async function N2Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "p_id": 0};
  await $.fixArgs(L0, ["sender"]);
  await $.mset((await $.v(C, "FormGuarAdd")), "Caption", "Girov barədə məlumatın redaktə olunması");
  {
    const $t9 = (await $.v(C, "DataMGuarante"));
    const $t10 = (await $.wv([$t9], "DataSetGuarantee", C, false));
    await $.wset([$t9, $t10], "xx", 2, C);
    await $.mset((await $.mv((await $.wv([$t9, $t10], "FormGuarAdd", C, false)), "InUse_rg")), "ItemIndex", (await $.mv((await $.wcall([$t9, $t10], "FieldByName", ["PLEDGEINUSE"], C)), "AsInteger")));
    await $.stmt($.wcall([$t9, $t10], "edit", [], C));
  }
  await $.mcall((await $.v(C, "FormGuarAdd")), "ShowModal", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TGuaranteeMgr", "N7Click", async function N7Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.not((await $.call(C, "assigned", [(await $.v(C, "FormGInfo"))]))))) {
    {
      const $t11 = (await $.mcall((await $.v(C, "TFormGInfo")), "Create", [Self]));
      try {
        await $.stmt($.wcall([$t11], "ShowModal", [], C));
      } finally {
        await $.stmt($.wcall([$t11], "Release", [], C));
      }
    }
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TGuaranteeMgr", "editCONTRACTNUMExit", async function editCONTRACTNUMExit(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mset(L0["sender"], "Text", "");
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TGuaranteeMgr", "editCONTRACTNUMKeyPress", async function editCONTRACTNUMKeyPress(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "key": $.asRef(p1), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.eq((await $.call(C, "ord", [(await L0["key"].get())])), (await $.v(C, "VK_RETURN"))))) {
    await $.stmt((await $.call(C, "ActnSearchExecute", [L0["sender"]])));
  }
  return L0.result;
}, {"params": ["Sender", "Key"], "kind": "procedure", "ptypes": ["TObject", "Char"]});
  U.method("TGuaranteeMgr", "editnameExit", async function editnameExit(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mset(L0["sender"], "Text", "");
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TGuaranteeMgr", "ActnSearchExecute", async function ActnSearchExecute(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "searchfield": '', "searchoptions": null};
  await $.fixArgs(L0, ["sender"]);
  L0["searchoptions"] = [(await $.v(C, "srIgnoreCase")), (await $.v(C, "srPartialMatch"))];
  {
    const $t12 = L0["sender"];
    await $.wset([$t12], "SearchField", (await $.wcall([$t12], "copy", [(await $.wv([$t12], "Name", C, false)), 5, (await $.wcall([$t12], "length", [(await $.wv([$t12], "Name", C, false))], C))], C)), { get: async () => L0["searchfield"], set: async (v) => { L0["searchfield"] = v; }, local: true });
    await $.mcall((await $.mv((await $.wv([$t12], "MainGrid", C, false)), "SelectedRows")), "Clear", []);
    {
      const $t13 = (await $.wcall([$t12], "TOracleDataSet", [(await $.mv((await $.mv((await $.wv([$t12], "MainGrid", C, false)), "DataSource")), "DataSet"))], C));
      if ($.truthy($.not((await $.wcall([$t12, $t13], "SearchRecord", [(await $.wv([$t12, $t13], "SearchField", { get: async () => L0["searchfield"], set: async (v) => { L0["searchfield"] = v; }, local: true }, false)), (await $.wv([$t12, $t13], "Text", C, false)), $.add((await $.wv([$t12, $t13], "SearchOptions", { get: async () => L0["searchoptions"], set: async (v) => { L0["searchoptions"] = v; }, local: true }, false)), [(await $.wv([$t12, $t13], "srFromCurrent", C, false)), (await $.wv([$t12, $t13], "srForward", C, false))])], C))))) {
        if ($.truthy($.eq((await $.wcall([$t12, $t13], "MessageDlg", [$.add($.add("Axtarış sona çatıb.", "\r"), "əvvəldən başlamaq istəyirsinigmi?"), (await $.wv([$t12, $t13], "mtInformation", C, false)), [(await $.wv([$t12, $t13], "mbNo", C, false)), (await $.wv([$t12, $t13], "mbYes", C, false))], 0], C)), (await $.wv([$t12, $t13], "mrYes", C, false))))) {
          if ($.truthy($.not((await $.wcall([$t12, $t13], "SearchRecord", [(await $.wv([$t12, $t13], "SearchField", { get: async () => L0["searchfield"], set: async (v) => { L0["searchfield"] = v; }, local: true }, false)), (await $.wv([$t12, $t13], "Text", C, false)), $.add((await $.wv([$t12, $t13], "SearchOptions", { get: async () => L0["searchoptions"], set: async (v) => { L0["searchoptions"] = v; }, local: true }, false)), [(await $.wv([$t12, $t13], "srFromBeginning", C, false))])], C))))) {
            await $.stmt((await $.wcall([$t12, $t13], "MessageDlg", ["Yazı tapılmadı!", (await $.wv([$t12, $t13], "mtInformation", C, false)), [(await $.wv([$t12, $t13], "mbOK", C, false))], 0], C)));
          }
        }
      }
    }
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TGuaranteeMgr", "editnameKeyPress", async function editnameKeyPress(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "key": $.asRef(p1), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.eq((await $.call(C, "ord", [(await L0["key"].get())])), (await $.v(C, "VK_RETURN"))))) {
    await $.stmt((await $.call(C, "ActnSearchExecute", [L0["sender"]])));
  }
  return L0.result;
}, {"params": ["Sender", "Key"], "kind": "procedure", "ptypes": ["TObject", "Char"]});
  U.method("TGuaranteeMgr", "editvalueExit", async function editvalueExit(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mset(L0["sender"], "Text", "");
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TGuaranteeMgr", "editvalueKeyPress", async function editvalueKeyPress(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "key": $.asRef(p1), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.eq((await $.call(C, "ord", [(await L0["key"].get())])), (await $.v(C, "VK_RETURN"))))) {
    await $.stmt((await $.call(C, "ActnSearchExecute", [L0["sender"]])));
  }
  if ($.truthy($.not(($.in_((await L0["key"].get()), [...$.range("0","9"), "\b"]))))) {
    await L0["key"].set("\u0000");
    await $.stmt($.call(C, "Beep", []));
  }
  return L0.result;
}, {"params": ["Sender", "Key"], "kind": "procedure", "ptypes": ["TObject", "Char"]});
  U.method("TGuaranteeMgr", "DateTimePicker1KeyPress", async function DateTimePicker1KeyPress(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "key": $.asRef(p1), result: undefined, "a": false};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.eq((await L0["key"].get()), "\r"))) {
    L0["a"] = (await $.mcall((await $.mv((await $.v(C, "DataMGuarante")), "DataSetGuarantee")), "locate", ["BDATE", (await $.mv((await $.v(C, "datetimepicker1")), "Date")), [(await $.v(C, "locaseinsensitive"))]]));
    if ($.truthy($.eq(L0["a"], false))) {
      await $.stmt((await $.call(C, "showmessage", ["Tarix tapılmadı"])));
    }
  }
  return L0.result;
}, {"params": ["Sender", "Key"], "kind": "procedure", "ptypes": ["TObject", "Char"]});
  U.method("TGuaranteeMgr", "editPROP_COUNTExit", async function editPROP_COUNTExit(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TGuaranteeMgr", "editPROP_COUNTKeyPress", async function editPROP_COUNTKeyPress(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "key": $.asRef(p1), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.eq((await $.call(C, "ord", [(await L0["key"].get())])), (await $.v(C, "VK_RETURN"))))) {
    await $.stmt((await $.call(C, "ActnSearchExecute", [L0["sender"]])));
  }
  if ($.truthy($.not(($.in_((await L0["key"].get()), [...$.range("0","9"), "\b"]))))) {
    await L0["key"].set("\u0000");
    await $.stmt($.call(C, "Beep", []));
  }
  return L0.result;
}, {"params": ["Sender", "Key"], "kind": "procedure", "ptypes": ["TObject", "Char"]});
  U.method("TGuaranteeMgr", "N4Click", async function N4Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mset((await $.v(C, "panel1")), "Visible", true);
  await $.mset((await $.v(C, "N4")), "Visible", false);
  await $.mset((await $.v(C, "N5")), "Visible", true);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TGuaranteeMgr", "N5Click", async function N5Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mset((await $.v(C, "panel1")), "Visible", false);
  await $.mset((await $.v(C, "N4")), "Visible", true);
  await $.mset((await $.v(C, "N5")), "Visible", false);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TGuaranteeMgr", "editCONTRACTNUMChange", async function editCONTRACTNUMChange(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t14 = (await $.v(C, "editCONTRACTNUM"));
    if ($.truthy($.ne((await $.wv([$t14], "Text", C, false)), ""))) {
      await $.stmt((await $.mcall((await $.mv((await $.mv((await $.wv([$t14], "DataMGuarante", C, false)), "DataSorcGuaranttee")), "DataSet")), "Locate", ["NUMBEROFGUR", (await $.mv((await $.wv([$t14], "editCONTRACTNUM", C, false)), "Text")), [(await $.wv([$t14], "loPartialKey", C, false))]])));
    }
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TGuaranteeMgr", "editnameChange", async function editnameChange(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t15 = (await $.v(C, "editname"));
    if ($.truthy($.ne((await $.wv([$t15], "Text", C, false)), ""))) {
      await $.stmt((await $.mcall((await $.mv((await $.mv((await $.wv([$t15], "DataMGuarante", C, false)), "DataSorcGuaranttee")), "DataSet")), "Locate", ["PLEDGENAME", (await $.mv((await $.wv([$t15], "editname", C, false)), "Text")), [(await $.wv([$t15], "loPartialKey", C, false))]])));
    }
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TGuaranteeMgr", "editvalueChange", async function editvalueChange(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t16 = (await $.v(C, "editvalue"));
    if ($.truthy($.ne((await $.wv([$t16], "Text", C, false)), ""))) {
      await $.stmt((await $.mcall((await $.mv((await $.mv((await $.wv([$t16], "DataMGuarante", C, false)), "DataSorcGuaranttee")), "DataSet")), "Locate", ["PLEDGEPRICE", (await $.mv((await $.wv([$t16], "editvalue", C, false)), "Text")), [(await $.wv([$t16], "loPartialKey", C, false))]])));
    }
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TGuaranteeMgr", "Danarmlak1Click", async function Danarmlak1Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mset((await $.v(C, "FormGuarAdd")), "Caption", "Daşınar əmlak barədə məlumatın yığılması");
  {
    const $t17 = (await $.v(C, "DataMGuarante"));
    const $t18 = (await $.wv([$t17], "MainDSet", C, false));
    await $.wset([$t17, $t18], "xx", 1, C);
    if ($.truthy((await $.wv([$t17, $t18], "Active", C, false)))) {
      await $.stmt($.wcall([$t17, $t18], "close", [], C));
    }
    await $.stmt((await $.wcall([$t17, $t18], "SetVariable", ["id", 0], C)));
    await $.stmt($.wcall([$t17, $t18], "open", [], C));
  }
  await $.mcall((await $.v(C, "FormGuarAdd")), "ShowModal", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TGuaranteeMgr", "Danmazmlak1Click", async function Danmazmlak1Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mset((await $.v(C, "FrmDashinmaz")), "Caption", "Daşınmaz əmlak barədə məlumatın yığılması");
  await $.set(C, "form_edit_ins", false);
  {
    const $t19 = (await $.v(C, "DataMGuarante"));
    const $t20 = (await $.wv([$t19], "MainDset_d", C, false));
    await $.wset([$t19, $t20], "xx", 1, C);
    if ($.truthy((await $.wv([$t19, $t20], "Active", C, false)))) {
      await $.stmt($.wcall([$t19, $t20], "close", [], C));
    }
    await $.stmt((await $.wcall([$t19, $t20], "SetVariable", ["id", 0], C)));
    await $.stmt($.wcall([$t19, $t20], "open", [], C));
  }
  await $.mcall((await $.v(C, "FrmDashinmaz")), "ShowModal", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TGuaranteeMgr", "DateTimePicker1Change", async function DateTimePicker1Change(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t21 = (await $.v(C, "DateTimePicker1"));
    if ($.truthy($.ne((await $.wv([$t21], "Text", C, false)), ""))) {
      await $.stmt((await $.mcall((await $.mv((await $.mv((await $.wv([$t21], "DataMGuarante", C, false)), "DataSorcGuaranttee")), "DataSet")), "Locate", ["DAT", (await $.mv((await $.wv([$t21], "DateTimePicker1", C, false)), "datetime")), [(await $.wv([$t21], "loPartialKey", C, false))]])));
    }
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TGuaranteeMgr", "ToolButton3Click", async function ToolButton3Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mcall((await $.mv((await $.v(C, "DataMGuarante")), "DataSetGuarantee")), "Refresh", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TGuaranteeMgr", "MainGridTitleBtnClick", async function MainGridTitleBtnClick(Self, p0, p1, p2) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "acol": $.copyArg(p1), "column": $.copyArg(p2), result: undefined, "sortfield": ''};
  await $.fixArgs(L0, ["sender", "acol", "column"]);
  L0["sortfield"] = (await $.mv(L0["column"], "FieldName"));
  if ($.truthy($.eq((await $.mv((await $.mv(L0["column"], "Title")), "SortMarker")), (await $.v(C, "smDownEh"))))) {
    L0["sortfield"] = $.add(L0["sortfield"], " DESC");
  }
  {
    const $t22 = L0["sender"];
    const $t23 = (await $.wcall([$t22], "TOracleDataSet", [(await $.mv((await $.wv([$t22], "DataSource", C, false)), "DataSet"))], C));
    await $.mset((await $.wv([$t22, $t23], "Screen", C, false)), "Cursor", (await $.wv([$t22, $t23], "crSQLWait", C, false)));
    await $.stmt((await $.wcall([$t22, $t23], "SetVariable", ["OrderField", (await $.wv([$t22, $t23], "SortField", { get: async () => L0["sortfield"], set: async (v) => { L0["sortfield"] = v; }, local: true }, false))], C)));
    await $.stmt($.wcall([$t22, $t23], "RefResh", [], C));
    await $.mset((await $.wv([$t22, $t23], "Screen", C, false)), "Cursor", (await $.wv([$t22, $t23], "crDefault", C, false)));
  }
  return L0.result;
}, {"params": ["Sender", "ACol", "Column"], "kind": "procedure", "ptypes": ["TObject", "Integer", "TColumnEh"]});
  U.method("TGuaranteeMgr", "MainGridDblClick", async function MainGridDblClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "p_id": 0};
  await $.fixArgs(L0, ["sender"]);
  await $.mset((await $.v(C, "FormGuarAdd")), "Caption", "Girov barədə məlumatın redaktə olunması");
  {
    const $t24 = (await $.mv((await $.v(C, "DataMGuarante")), "MainDSet"));
    if ($.truthy($.eq((await $.mv((await $.mcall((await $.mv((await $.wv([$t24], "DataMGuarante", C, false)), "DataSetGuarantee")), "FieldByName", ["new"])), "AsInteger")), 1))) {
      if ($.truthy((await $.wv([$t24], "Active", C, false)))) {
        await $.stmt($.wcall([$t24], "close", [], C));
      }
      await $.stmt((await $.wcall([$t24], "SetVariable", ["id", (await $.mv((await $.mcall((await $.mv((await $.wv([$t24], "DataMGuarante", C, false)), "DataSetGuarantee")), "FieldByName", ["id"])), "AsInteger"))], C)));
      await $.stmt($.wcall([$t24], "open", [], C));
      await $.mcall((await $.mv((await $.wv([$t24], "DataMGuarante", C, false)), "MainDSet")), "edit", []);
      await $.mset((await $.mv((await $.wv([$t24], "FormGuarAdd", C, false)), "InUse_rg")), "ItemIndex", (await $.mv((await $.wcall([$t24], "FieldByName", ["PLEDGEINUSE"], C)), "AsInteger")));
      await $.mset((await $.mv((await $.wv([$t24], "FormGuarAdd", C, false)), "MaskEdit2")), "Text", (await $.mv((await $.wcall([$t24], "FieldByName", ["AFTONO"], C)), "Asstring")));
      await $.mcall((await $.wv([$t24], "FormGuarAdd", C, false)), "ShowModal", []);
    }
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TGuaranteeMgr", "ActiveFormDestroy", async function ActiveFormDestroy(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mcall((await $.v(C, "DataMGuarante")), "free", []);
  await $.mcall((await $.v(C, "FormGuarAdd")), "free", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TGuaranteeMgr", "gfgfgfgfg1Click", async function gfgfgfgfg1Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.not((await $.call(C, "assigned", [(await $.v(C, "FormGinfo"))]))))) {
    {
      const $t25 = (await $.mcall((await $.v(C, "TFormGinfo")), "Create", [Self]));
      try {
        await $.stmt($.wcall([$t25], "ShowModal", [], C));
      } finally {
        await $.stmt($.wcall([$t25], "Release", [], C));
      }
    }
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  return U;
}
