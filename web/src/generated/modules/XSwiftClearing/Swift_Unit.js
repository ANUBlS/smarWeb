// Generated from Swift_Unit.pas by pas2js — do not edit by hand; regenerate instead.
/* eslint-disable */
// @ts-nocheck

export default function define($) {
  const U = $.unit("Swift_Unit", ["Windows", "Messages", "SysUtils", "Classes", "Graphics", "Controls", "Forms", "Dialogs", "ActiveX", "AxCtrls", "Swift_Clearing_TLB", "StdVcl", "StdCtrls", "Buttons", "Grids", "DBGrids", "ExtCtrls", "ComCtrls", "ToolWin", "ImgList", "Db", "OracleData", "Menus", "Mask", "DBCtrls", "FileCtrl", "ActnList", "ComObj", "ComServ", "sboapiDataModuleImpl", "SelDialog", "Transaction_Unit", "Payment_Det", "TransTypeUnit", "Data_Unit", "Properties_Unit", "PrepareFile_Unit", "FileSend_Unit", "ReceiveMessDetals_Unit"]);
  const C = [U];
  U.defClass("TSwift_Form", "TActiveForm", {"imagelist": {"name": "ImageList", "type": "TImageList"}, "pagecontrol1": {"name": "PageControl1", "type": "TPageControl"}, "tabsheet1": {"name": "TabSheet1", "type": "TTabSheet"}, "panel1": {"name": "Panel1", "type": "TPanel"}, "browsegrid": {"name": "BrowseGrid", "type": "TDBGrid"}, "controlbar1": {"name": "ControlBar1", "type": "TControlBar"}, "toolbar1": {"name": "ToolBar1", "type": "TToolBar"}, "toolbutton1": {"name": "ToolButton1", "type": "TToolButton"}, "toolbutton9": {"name": "ToolButton9", "type": "TToolButton"}, "toolbutton3": {"name": "ToolButton3", "type": "TToolButton"}, "acceptbutton": {"name": "AcceptButton", "type": "TToolButton"}, "toolbutton21": {"name": "ToolButton21", "type": "TToolButton"}, "toolbutton18": {"name": "ToolButton18", "type": "TToolButton"}, "toolbutton8": {"name": "ToolButton8", "type": "TToolButton"}, "toolbutton6": {"name": "ToolButton6", "type": "TToolButton"}, "panel3": {"name": "Panel3", "type": "TPanel"}, "gridmt102": {"name": "GridMT102", "type": "TDBGrid"}, "panel2": {"name": "Panel2", "type": "TPanel"}, "panel4": {"name": "Panel4", "type": "TPanel"}, "dbedit1": {"name": "DBEdit1", "type": "TDBEdit"}, "dbedit2": {"name": "DBEdit2", "type": "TDBEdit"}, "dbedit3": {"name": "DBEdit3", "type": "TDBEdit"}, "dbedit4": {"name": "DBEdit4", "type": "TDBEdit"}, "dbedit5": {"name": "DBEdit5", "type": "TDBEdit"}, "dbedit6": {"name": "DBEdit6", "type": "TDBEdit"}, "dbedit7": {"name": "DBEdit7", "type": "TDBEdit"}, "panel5": {"name": "Panel5", "type": "TPanel"}, "tabsheet2": {"name": "TabSheet2", "type": "TTabSheet"}, "controlbar2": {"name": "ControlBar2", "type": "TControlBar"}, "toolbar2": {"name": "ToolBar2", "type": "TToolBar"}, "toolbutton2": {"name": "ToolButton2", "type": "TToolButton"}, "toolbutton4": {"name": "ToolButton4", "type": "TToolButton"}, "messacceptbutton": {"name": "MessAcceptButton", "type": "TToolButton"}, "toolbutton10": {"name": "ToolButton10", "type": "TToolButton"}, "toolbutton5": {"name": "ToolButton5", "type": "TToolButton"}, "toolbutton11": {"name": "ToolButton11", "type": "TToolButton"}, "dbedit8": {"name": "DBEdit8", "type": "TDBEdit"}, "label1": {"name": "Label1", "type": "TLabel"}, "label2": {"name": "Label2", "type": "TLabel"}, "dbedit9": {"name": "DBEdit9", "type": "TDBEdit"}, "panel7": {"name": "Panel7", "type": "TPanel"}, "controlbar3": {"name": "ControlBar3", "type": "TControlBar"}, "toolbar3": {"name": "ToolBar3", "type": "TToolBar"}, "toolbutton15": {"name": "ToolButton15", "type": "TToolButton"}, "toolbutton16": {"name": "ToolButton16", "type": "TToolButton"}, "toolbutton14": {"name": "ToolButton14", "type": "TToolButton"}, "toolbutton12": {"name": "ToolButton12", "type": "TToolButton"}, "toolbutton17": {"name": "ToolButton17", "type": "TToolButton"}, "panel6": {"name": "Panel6", "type": "TPanel"}, "richedit1": {"name": "RichEdit1", "type": "TRichEdit"}, "grid_in": {"name": "Grid_in", "type": "TDBGrid"}, "panel_info": {"name": "Panel_info", "type": "TPanel"}, "info_listbox": {"name": "Info_ListBox", "type": "TListBox"}, "filelist_in": {"name": "FileList_IN", "type": "TFileListBox"}, "infopopup": {"name": "InfoPopup", "type": "TPopupMenu"}, "clear1": {"name": "Clear1", "type": "TMenuItem"}, "panel8": {"name": "Panel8", "type": "TPanel"}, "panel9": {"name": "Panel9", "type": "TPanel"}, "panel10": {"name": "Panel10", "type": "TPanel"}, "panel12": {"name": "Panel12", "type": "TPanel"}, "dbedit12": {"name": "DBEdit12", "type": "TDBEdit"}, "panel16": {"name": "Panel16", "type": "TPanel"}, "panel18": {"name": "Panel18", "type": "TPanel"}, "panel11": {"name": "Panel11", "type": "TPanel"}, "dbedit11": {"name": "DBEdit11", "type": "TDBEdit"}, "panel17": {"name": "Panel17", "type": "TPanel"}, "dbedit15": {"name": "DBEdit15", "type": "TDBEdit"}, "panel20": {"name": "Panel20", "type": "TPanel"}, "dbedit16": {"name": "DBEdit16", "type": "TDBEdit"}, "panel19": {"name": "Panel19", "type": "TPanel"}, "dbedit17": {"name": "DBEdit17", "type": "TDBEdit"}, "panel21": {"name": "Panel21", "type": "TPanel"}, "dbedit18": {"name": "DBEdit18", "type": "TDBEdit"}, "panel13": {"name": "Panel13", "type": "TPanel"}, "dbedit13": {"name": "DBEdit13", "type": "TDBEdit"}, "panel15": {"name": "Panel15", "type": "TPanel"}, "dbedit14": {"name": "DBEdit14", "type": "TDBEdit"}, "panel14": {"name": "Panel14", "type": "TPanel"}, "dbedit10": {"name": "DBEdit10", "type": "TDBEdit"}, "popup_singleconcert": {"name": "Popup_SingleConcert", "type": "TPopupMenu"}, "convert1": {"name": "Convert1", "type": "TMenuItem"}, "mainaction": {"name": "MainAction", "type": "TActionList"}, "delete_mess_in": {"name": "Delete_mess_in", "type": "TAction"}, "delete_mt102": {"name": "Delete_mt102", "type": "TAction"}, "delete_mess_out": {"name": "delete_mess_out", "type": "TAction"}, "toolbutton20": {"name": "ToolButton20", "type": "TToolButton"}, "panel22": {"name": "Panel22", "type": "TPanel"}, "stdate": {"name": "StDate", "type": "TDateTimePicker"}, "enddate": {"name": "EndDate", "type": "TDateTimePicker"}, "panel23": {"name": "Panel23", "type": "TPanel"}, "stdate_in": {"name": "StDate_in", "type": "TDateTimePicker"}, "enddate_in": {"name": "EndDate_in", "type": "TDateTimePicker"}, "gridin_selall": {"name": "Gridin_SelAll", "type": "TAction"}, "dbedit19": {"name": "DBEdit19", "type": "TDBEdit"}, "fevents": {"name": "FEvents", "type": "ISwift_FormEvents"}}, {});
  U.init(async () => {
    U.var_("Swift_Form", null, "TSwift_Form");
    U.var_("new_id", 0, "integer");
    U.var_("mess_edit", false, "boolean");
    U.var_("after_add", false, "boolean");
    U.var_("trans_date", 0, "TDateTime");
  });
  U.method("TSwift_Form", "DefinePropertyPages", async function DefinePropertyPages(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"definepropertypage": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["definepropertypage"]);
  return L0.result;
}, {"params": ["DefinePropertyPage"], "kind": "procedure", "ptypes": ["TDefinePropertyPage"]});
  U.method("TSwift_Form", "EventSinkChanged", async function EventSinkChanged(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"eventsink": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["eventsink"]);
  await $.set(C, "FEvents", L0["eventsink"]);
  return L0.result;
}, {"params": ["EventSink"], "kind": "procedure", "ptypes": ["IUnknown"]});
  U.method("TSwift_Form", "Initialize", async function Initialize(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: undefined};
  await $.inherited(Self, "TSwift_Form", "Initialize", null, arguments);
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
  U.method("TSwift_Form", "Get_Active", async function Get_Active(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: false};
  L0["result"] = (await $.v(C, "Active"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TSwift_Form", "Get_AutoScroll", async function Get_AutoScroll(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: false};
  L0["result"] = (await $.v(C, "AutoScroll"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TSwift_Form", "Get_AutoSize", async function Get_AutoSize(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: false};
  L0["result"] = (await $.v(C, "AutoSize"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TSwift_Form", "Get_AxBorderStyle", async function Get_AxBorderStyle(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: null};
  L0["result"] = (await $.call(C, "Ord", [(await $.v(C, "AxBorderStyle"))]));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TSwift_Form", "Get_Caption", async function Get_Caption(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: ''};
  L0["result"] = (await $.call(C, "WideString", [(await $.v(C, "Caption"))]));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TSwift_Form", "Get_Color", async function Get_Color(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: null};
  L0["result"] = (await $.call(C, "OLE_COLOR", [(await $.v(C, "Color"))]));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TSwift_Form", "Get_Cursor", async function Get_Cursor(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: 0};
  L0["result"] = (await $.call(C, "Smallint", [(await $.v(C, "Cursor"))]));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TSwift_Form", "Get_DoubleBuffered", async function Get_DoubleBuffered(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: false};
  L0["result"] = (await $.v(C, "DoubleBuffered"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TSwift_Form", "Get_DropTarget", async function Get_DropTarget(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: false};
  L0["result"] = (await $.v(C, "DropTarget"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TSwift_Form", "Get_Enabled", async function Get_Enabled(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: false};
  L0["result"] = (await $.v(C, "Enabled"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TSwift_Form", "Get_Font", async function Get_Font(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: null};
  await $.stmt((await $.call(C, "GetOleFont", [(await $.v(C, "Font")), L0["result"]])));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TSwift_Form", "Get_HelpFile", async function Get_HelpFile(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: ''};
  L0["result"] = (await $.call(C, "WideString", [(await $.v(C, "HelpFile"))]));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TSwift_Form", "Get_KeyPreview", async function Get_KeyPreview(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: false};
  L0["result"] = (await $.v(C, "KeyPreview"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TSwift_Form", "Get_PixelsPerInch", async function Get_PixelsPerInch(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: 0};
  L0["result"] = (await $.v(C, "PixelsPerInch"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TSwift_Form", "Get_PrintScale", async function Get_PrintScale(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: null};
  L0["result"] = (await $.call(C, "Ord", [(await $.v(C, "PrintScale"))]));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TSwift_Form", "Get_Scaled", async function Get_Scaled(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: false};
  L0["result"] = (await $.v(C, "Scaled"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TSwift_Form", "Get_Visible", async function Get_Visible(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: false};
  L0["result"] = (await $.v(C, "Visible"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TSwift_Form", "Get_VisibleDockClientCount", async function Get_VisibleDockClientCount(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: 0};
  L0["result"] = (await $.v(C, "VisibleDockClientCount"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TSwift_Form", "_Set_Font", async function _Set_Font(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.stmt((await $.call(C, "SetOleFont", [(await $.v(C, "Font")), L0["value"]])));
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["IFontDisp"]});
  U.method("TSwift_Form", "ActivateEvent", async function ActivateEvent(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.ne((await $.v(C, "FEvents")), null))) {
    await $.mcall((await $.v(C, "FEvents")), "OnActivate", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TSwift_Form", "ClickEvent", async function ClickEvent(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.ne((await $.v(C, "FEvents")), null))) {
    await $.mcall((await $.v(C, "FEvents")), "OnClick", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TSwift_Form", "CreateEvent", async function CreateEvent(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.ne((await $.v(C, "FEvents")), null))) {
    await $.mcall((await $.v(C, "FEvents")), "OnCreate", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TSwift_Form", "DblClickEvent", async function DblClickEvent(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.ne((await $.v(C, "FEvents")), null))) {
    await $.mcall((await $.v(C, "FEvents")), "OnDblClick", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TSwift_Form", "DeactivateEvent", async function DeactivateEvent(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.ne((await $.v(C, "FEvents")), null))) {
    await $.mcall((await $.v(C, "FEvents")), "OnDeactivate", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TSwift_Form", "DestroyEvent", async function DestroyEvent(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.ne((await $.v(C, "FEvents")), null))) {
    await $.mcall((await $.v(C, "FEvents")), "OnDestroy", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TSwift_Form", "KeyPressEvent", async function KeyPressEvent(Self, p0, p1) {
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
  U.method("TSwift_Form", "PaintEvent", async function PaintEvent(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.ne((await $.v(C, "FEvents")), null))) {
    await $.mcall((await $.v(C, "FEvents")), "OnPaint", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TSwift_Form", "Set_AutoScroll", async function Set_AutoScroll(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "AutoScroll", L0["value"]);
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["WordBool"]});
  U.method("TSwift_Form", "Set_AutoSize", async function Set_AutoSize(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "AutoSize", L0["value"]);
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["WordBool"]});
  U.method("TSwift_Form", "Set_AxBorderStyle", async function Set_AxBorderStyle(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "AxBorderStyle", (await $.call(C, "TActiveFormBorderStyle", [L0["value"]])));
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["TxActiveFormBorderStyle"]});
  U.method("TSwift_Form", "Set_Caption", async function Set_Caption(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "Caption", (await $.call(C, "TCaption", [L0["value"]])));
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["WideString"]});
  U.method("TSwift_Form", "Set_Color", async function Set_Color(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "Color", (await $.call(C, "TColor", [L0["value"]])));
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["OLE_COLOR"]});
  U.method("TSwift_Form", "Set_Cursor", async function Set_Cursor(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "Cursor", (await $.call(C, "TCursor", [L0["value"]])));
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["Smallint"]});
  U.method("TSwift_Form", "Set_DoubleBuffered", async function Set_DoubleBuffered(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "DoubleBuffered", L0["value"]);
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["WordBool"]});
  U.method("TSwift_Form", "Set_DropTarget", async function Set_DropTarget(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "DropTarget", L0["value"]);
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["WordBool"]});
  U.method("TSwift_Form", "Set_Enabled", async function Set_Enabled(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "Enabled", L0["value"]);
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["WordBool"]});
  U.method("TSwift_Form", "Set_Font", async function Set_Font(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.asRef(p0), result: undefined};
  await $.stmt((await $.call(C, "SetOleFont", [(await $.v(C, "Font")), (await L0["value"].get())])));
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["IFontDisp"]});
  U.method("TSwift_Form", "Set_HelpFile", async function Set_HelpFile(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "HelpFile", (await $.call(C, "String", [L0["value"]])));
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["WideString"]});
  U.method("TSwift_Form", "Set_KeyPreview", async function Set_KeyPreview(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "KeyPreview", L0["value"]);
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["WordBool"]});
  U.method("TSwift_Form", "Set_PixelsPerInch", async function Set_PixelsPerInch(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "PixelsPerInch", L0["value"]);
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["Integer"]});
  U.method("TSwift_Form", "Set_PrintScale", async function Set_PrintScale(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "PrintScale", (await $.call(C, "TPrintScale", [L0["value"]])));
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["TxPrintScale"]});
  U.method("TSwift_Form", "Set_Scaled", async function Set_Scaled(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "Scaled", L0["value"]);
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["WordBool"]});
  U.method("TSwift_Form", "Set_Visible", async function Set_Visible(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "Visible", L0["value"]);
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["WordBool"]});
  U.method("TSwift_Form", "ActiveFormCreate", async function ActiveFormCreate(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.set(C, "Swift_Form", Self);
  await $.set(C, "DataMod", (await $.mcall((await $.v(C, "TDatamod")), "Create", [Self])));
  await $.set(C, "SelDirFrm", (await $.mcall((await $.v(C, "TSelDirFrm")), "Create", [Self])));
  await $.set(C, "TransForm", (await $.mcall((await $.v(C, "TTransForm")), "Create", [Self])));
  await $.set(C, "PaymentDetalsForm", (await $.mcall((await $.v(C, "TPaymentDetalsForm")), "Create", [Self])));
  await $.set(C, "TransCodeForm", (await $.mcall((await $.v(C, "TTransCodeForm")), "Create", [Self])));
  await $.set(C, "PropertiesForm", (await $.mcall((await $.v(C, "TPropertiesForm")), "Create", [Self])));
  await $.set(C, "PrepareFile_Form", (await $.mcall((await $.v(C, "TPrepareFile_Form")), "Create", [Self])));
  await $.set(C, "SendFileForm", (await $.mcall((await $.v(C, "TSendFileForm")), "Create", [Self])));
  await $.set(C, "RecMessDet_form", (await $.mcall((await $.v(C, "TRecMessDet_form")), "Create", [Self])));
  await $.mset((await $.v(C, "StDate")), "date", (await $.mcall((await $.mv((await $.v(C, "DataMod")), "GetSysDate")), "CallDateFunction", ["get_date", []])));
  await $.mset((await $.v(C, "EndDate")), "date", (await $.mcall((await $.mv((await $.v(C, "DataMod")), "GetSysDate")), "CallDateFunction", ["get_date", []])));
  await $.stmt($.call(C, "selectdate", []));
  await $.mcall((await $.mv((await $.v(C, "DataMod")), "Hox102_out")), "open", []);
  await $.mcall((await $.mv((await $.v(C, "DataMod")), "HoxMessages_out")), "open", []);
  await $.mset((await $.v(C, "PageControl1")), "ActivePageIndex", 0);
  await $.mset((await $.idx((await $.mv((await $.v(C, "PageControl1")), "Pages")), [0])), "Highlighted", true);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TSwift_Form", "ISwift_Form_Get_Color", async function ISwift_Form_Get_Color(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: null};
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TSwift_Form", "ISwift_Form_Get_Font", async function ISwift_Form_Get_Font(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: null};
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TSwift_Form", "ISwift_Form__Set_Font", async function ISwift_Form__Set_Font(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["IFontDisp"]});
  U.method("TSwift_Form", "ISwift_Form_Set_Color", async function ISwift_Form_Set_Color(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["OLE_COLOR"]});
  U.method("TSwift_Form", "ISwift_Form_Set_Font", async function ISwift_Form_Set_Font(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.asRef(p0), result: undefined};
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["IfontDisp"]});
  U.func("AddtoCOMBO", async function AddtoCOMBO(Self, p0, p1, p2, p3, p4, p5) {
  const C = $.chain(Self, U);
  const L0 = {"combo": $.copyArg(p0), "listb": $.copyArg(p1), "datset": $.copyArg(p2), "sqlstring": $.copyArg(p3), "field_listbox": $.copyArg(p4), "field_combo": $.copyArg(p5), result: undefined};
  await $.fixArgs(L0, ["combo", "listb", "datset", "sqlstring", "field_listbox", "field_combo"]);
  await $.mcall(L0["datset"], "Close", []);
  await $.mcall((await $.mv(L0["datset"], "SQL")), "Clear", []);
  await $.stmt((await $.mcall((await $.mv(L0["datset"], "SQL")), "Add", [L0["sqlstring"]])));
  await $.mcall(L0["datset"], "Open", []);
  await $.mcall(L0["datset"], "First", []);
  await $.mcall(L0["listb"], "Clear", []);
  await $.mcall(L0["combo"], "Clear", []);
  while ($.truthy($.not((await $.mv(L0["datset"], "Eof"))))) {
    await $.stmt((await $.mcall((await $.mv(L0["listb"], "Items")), "Add", [(await $.mv((await $.mcall(L0["datset"], "fieldbyname", [L0["field_listbox"]])), "AsString"))])));
    await $.stmt((await $.mcall((await $.mv(L0["combo"], "Items")), "Add", [(await $.mv((await $.mcall(L0["datset"], "fieldbyname", [L0["field_combo"]])), "AsString"))])));
    await $.mcall(L0["datset"], "Next", []);
    await $.tick();
  }
  return L0.result;
}, {"params": ["ComBo", "ListB", "DatSet", "SQLstring", "field_ListBox", "field_Combo"], "kind": "procedure", "ptypes": ["TComboBox", "TListBox", "TOracleDataSet", "String", "String", "String"]});
  U.method("TSwift_Form", "OnlyNumber", async function OnlyNumber(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"key": $.copyArg(p0), result: ''};
  await $.fixArgs(L0, ["key"]);
  if ($.truthy($.not(($.in_(L0["key"], [...$.range("0","9"), "\b"]))))) {
    L0["key"] = "\u0000";
  }
  L0["result"] = L0["key"];
  return L0.result;
}, {"params": ["key"], "kind": "function", "ptypes": ["char"]});
  U.func("createTransCodeTree", async function createTransCodeTree(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: undefined, "tr": null, "trc": null};
  await $.mcall((await $.mv((await $.v(C, "DataMod")), "DataSet_View")), "close", []);
  await $.mcall((await $.mv((await $.mv((await $.v(C, "DataMod")), "DataSet_View")), "SQL")), "Clear", []);
  await $.stmt((await $.mcall((await $.mv((await $.mv((await $.v(C, "DataMod")), "DataSet_View")), "SQL")), "Add", ["Select * from hoxtranstype_code"])));
  await $.mcall((await $.mv((await $.v(C, "DataMod")), "DataSet_View")), "Open", []);
  await $.mcall((await $.mv((await $.mv((await $.v(C, "TransCodeForm")), "TreeView1")), "Items")), "Clear", []);
  while ($.truthy($.not((await $.mv((await $.mv((await $.v(C, "DataMod")), "DataSet_View")), "Eof"))))) {
    L0["tr"] = (await $.mcall((await $.mv((await $.mv((await $.v(C, "TransCodeForm")), "TreeView1")), "Items")), "Add", [(await $.mv((await $.mv((await $.mv((await $.v(C, "TransCodeForm")), "TreeView1")), "Items")), "GetFirstNode")), (await $.mv((await $.mcall((await $.mv((await $.v(C, "DataMod")), "DataSet_View")), "fieldbyname", ["NAME"])), "AsString"))]));
    L0["trc"] = (await $.mcall((await $.mv((await $.mv((await $.v(C, "TransCodeForm")), "TreeView1")), "Items")), "AddChild", [L0["tr"], (await $.mv((await $.mcall((await $.mv((await $.v(C, "DataMod")), "DataSet_View")), "fieldbyname", ["CODE"])), "AsString"))]));
    await $.mset(L0["tr"], "ImageIndex", 0);
    await $.mset(L0["tr"], "SelectedIndex", 1);
    await $.mset(L0["trc"], "ImageIndex", 2);
    await $.mset(L0["trc"], "SelectedIndex", 2);
    await $.mcall((await $.mv((await $.v(C, "DataMod")), "DataSet_View")), "Next", []);
    await $.tick();
  }
  return L0.result;
}, {"params": [], "kind": "procedure", "ptypes": []});
  U.func("preparetrans", async function preparetrans(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"bnfcount": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["bnfcount"]);
  if ($.truthy($.eq((await $.mv((await $.mv((await $.v(C, "DataMod")), "HoxSw_Proper")), "Active")), false))) {
    await $.mcall((await $.mv((await $.v(C, "DataMod")), "HoxSw_Proper")), "Open", []);
  }
  if ($.truthy($.eq((await $.mv((await $.mv((await $.v(C, "DataMod")), "Account_data")), "Active")), false))) {
    await $.mcall((await $.mv((await $.v(C, "DataMod")), "Account_data")), "Open", []);
  }
  await $.mset((await $.v(C, "PaymentDetalsForm")), "bnf_count", L0["bnfcount"]);
  await $.mcall((await $.mv((await $.v(C, "DataMod")), "BankInfo")), "Close", []);
  await $.mcall((await $.mv((await $.mv((await $.v(C, "DataMod")), "BankInfo")), "SQL")), "Clear", []);
  await $.stmt((await $.mcall((await $.mv((await $.mv((await $.v(C, "DataMod")), "BankInfo")), "SQL")), "Add", ["Select * from BankInfo"])));
  await $.mcall((await $.mv((await $.v(C, "DataMod")), "BankInfo")), "Open", []);
  await $.stmt((await $.call(C, "AddtoCOMBO", [(await $.mv((await $.v(C, "PaymentDetalsForm")), "Combo_BankName")), (await $.mv((await $.v(C, "PaymentDetalsForm")), "Bank_ID")), (await $.mv((await $.v(C, "DataMod")), "BankM")), "Select * from BankM", "ID", "NAME"])));
  await $.stmt((await $.call(C, "AddtoCOMBO", [(await $.mv((await $.v(C, "PaymentDetalsForm")), "Combo_Valute")), (await $.mv((await $.v(C, "PaymentDetalsForm")), "Valute_ID")), (await $.mv((await $.v(C, "DataMod")), "AValute")), "Select * from Avalute", "VALUTE", "VALU_NAME"])));
  await $.stmt((await $.call(C, "AddtoCOMBO", [(await $.mv((await $.v(C, "TransForm")), "Combo_Valute")), (await $.mv((await $.v(C, "TransForm")), "Valute_ID")), (await $.mv((await $.v(C, "DataMod")), "AValute")), "Select * from Avalute", "VALUTE", "VALU_NAME"])));
  await $.mset((await $.mv((await $.v(C, "TransForm")), "Edit_Sender")), "Text", $.add((await $.mv((await $.mcall((await $.mv((await $.v(C, "DataMod")), "BankInfo")), "fieldbyname", ["SWIFT"])), "AsString")), "AXXX"));
  await $.mset((await $.mv((await $.v(C, "TransForm")), "Edit_BIK")), "Text", (await $.mv((await $.mcall((await $.mv((await $.v(C, "DataMod")), "BankInfo")), "fieldbyname", ["SWIFT"])), "AsString")));
  await $.mset((await $.mv((await $.v(C, "TransForm")), "Edit_BankCode")), "Text", (await $.mv((await $.mcall((await $.mv((await $.v(C, "DataMod")), "BankInfo")), "fieldbyname", ["KOD_B"])), "AsString")));
  await $.mset((await $.mv((await $.v(C, "TransForm")), "Edit_account")), "Text", (await $.mv((await $.mcall((await $.mv((await $.v(C, "DataMod")), "BankInfo")), "fieldbyname", ["KRNO"])), "AsString")));
  await $.mset((await $.mv((await $.v(C, "TransForm")), "Edit_voen")), "Text", (await $.mv((await $.mcall((await $.mv((await $.v(C, "DataMod")), "BankInfo")), "fieldbyname", ["INN"])), "AsString")));
  await $.mset((await $.mv((await $.v(C, "TransForm")), "Edit_account_sub")), "Text", (await $.mv((await $.mcall((await $.mv((await $.v(C, "DataMod")), "HoxSw_Proper")), "fieldbyname", ["HoxAccount"])), "AsString")));
  await $.mset((await $.mv((await $.v(C, "TransForm")), "Combo_Valute")), "ItemIndex", 0);
  await $.mset((await $.mv((await $.v(C, "TransForm")), "ComboBox_CD")), "ItemIndex", 0);
  await $.mcall((await $.mv((await $.v(C, "TransForm")), "AccSearch")), "Clear", []);
  await $.mcall((await $.mv((await $.v(C, "TransForm")), "Edit_clientName")), "Clear", []);
  await $.mcall((await $.mv((await $.v(C, "TransForm")), "Edit_client_code")), "clear", []);
  await $.mset((await $.mv((await $.v(C, "TransForm")), "Edit_Amount")), "text", "0");
  await $.mset((await $.mv((await $.v(C, "TransForm")), "Edit_BNF")), "Text", "/BNF/0");
  await $.mset((await $.mv((await $.v(C, "TransForm")), "Combo_date")), "Date", (await $.v(C, "Date")));
  await $.mcall((await $.mv((await $.v(C, "TransForm")), "DBEdit_Voen")), "Clear", []);
  await $.mcall((await $.mv((await $.v(C, "TransForm")), "Edit_Referens")), "clear", []);
  return L0.result;
}, {"params": ["bnfcount"], "kind": "procedure", "ptypes": ["integer"]});
  U.method("TSwift_FORM", "RefreshDATA", async function RefreshDATA(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: undefined, "firstpos": null};
  await $.stmt($.call(C, "selectdate", []));
  await $.mcall((await $.mv((await $.v(C, "DataMod")), "Hox102_out")), "Refresh", []);
  await $.mcall((await $.mv((await $.v(C, "DataMod")), "HoxMessages_out")), "Refresh", []);
  await $.mcall((await $.mv((await $.v(C, "GridMT102")), "SelectedRows")), "Clear", []);
  await $.mcall((await $.mv((await $.v(C, "BrowseGrid")), "SelectedRows")), "Clear", []);
  return L0.result;
}, {"params": [], "kind": "procedure", "ptypes": []});
  U.method("TSwift_FORM", "Refresh_mess_in", async function Refresh_mess_in(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: undefined, "firstpos": null, "dtst": 0, "dtend": 0};
  await $.mcall((await $.mv((await $.v(C, "datamod")), "HoxMessages_IN_view")), "Close", []);
  L0["dtst"] = (await $.call(C, "trunc", [(await $.mv((await $.v(C, "Stdate_in")), "DateTime"))]));
  L0["dtend"] = (await $.call(C, "trunc", [(await $.mv((await $.v(C, "EndDate_in")), "DateTime"))]));
  await $.stmt((await $.mcall((await $.mv((await $.v(C, "datamod")), "HoxMessages_IN_view")), "SetVariable", ["BeginDate", L0["dtst"]])));
  await $.stmt((await $.mcall((await $.mv((await $.v(C, "datamod")), "HoxMessages_IN_view")), "SetVariable", ["EndDate", L0["dtend"]])));
  await $.mcall((await $.mv((await $.v(C, "DataMod")), "HoxMessages_IN_view")), "open", []);
  return L0.result;
}, {"params": [], "kind": "procedure", "ptypes": []});
  U.method("TSwift_FORM", "RefreshMessinWithPos", async function RefreshMessinWithPos(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: undefined, "firstpos": null, "dtst": 0, "dtend": 0};
  L0["firstpos"] = (await $.mv((await $.mv((await $.v(C, "DataMod")), "HoxMessages_IN_view")), "GetBookmark"));
  await $.mcall((await $.mv((await $.v(C, "DataMod")), "HoxMessages_IN_view")), "Refresh", []);
  await $.stmt((await $.mcall((await $.mv((await $.v(C, "DataMod")), "HoxMessages_IN_view")), "GotoBookmark", [L0["firstpos"]])));
  await $.mcall((await $.mv((await $.v(C, "Grid_in")), "SelectedRows")), "Clear", []);
  return L0.result;
}, {"params": [], "kind": "procedure", "ptypes": []});
  U.method("TSwift_Form", "showdetals", async function showdetals(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: undefined};
  await $.stmt($.call(C, "createTransCodeTree", []));
  if ($.truthy($.eq((await $.mv((await $.mv((await $.v(C, "DataMod")), "HoxSw_Proper")), "Active")), false))) {
    await $.mcall((await $.mv((await $.v(C, "DataMod")), "HoxSw_Proper")), "Open", []);
  }
  if ($.truthy($.eq((await $.mv((await $.mv((await $.v(C, "DataMod")), "Account_data")), "Active")), false))) {
    await $.mcall((await $.mv((await $.v(C, "DataMod")), "Account_data")), "Open", []);
  }
  await $.stmt((await $.call(C, "AddtoCOMBO", [(await $.mv((await $.v(C, "PaymentDetalsForm")), "Combo_BankName")), (await $.mv((await $.v(C, "PaymentDetalsForm")), "Bank_ID")), (await $.mv((await $.v(C, "DataMod")), "BankM")), "Select * from BankM", "ID", "NAME"])));
  await $.stmt((await $.call(C, "AddtoCOMBO", [(await $.mv((await $.v(C, "PaymentDetalsForm")), "Combo_Valute")), (await $.mv((await $.v(C, "PaymentDetalsForm")), "Valute_ID")), (await $.mv((await $.v(C, "DataMod")), "AValute")), "Select * from Avalute", "VALUTE", "VAL_NAME"])));
  await $.set(C, "new_id", (await $.mv((await $.mcall((await $.mv((await $.v(C, "DataMod")), "Hox102_out")), "fieldbyname", ["id"])), "AsInteger")));
  {
    const $t1 = (await $.v(C, "PaymentDetalsForm"));
    if ($.truthy($.eq((await $.mv((await $.mv((await $.wv([$t1], "DataMod", C, false)), "BankInfo")), "Active")), (await $.wv([$t1], "false", C, false))))) {
      await $.mcall((await $.mv((await $.wv([$t1], "DataMod", C, false)), "BankInfo")), "Open", []);
    }
    await $.mset((await $.wv([$t1], "Edit_BankName_Self", C, false)), "Text", (await $.mv((await $.mcall((await $.mv((await $.wv([$t1], "DataMod", C, false)), "BankInfo")), "fieldbyname", ["BANK"])), "AsString")));
    await $.mset((await $.wv([$t1], "Edit_BIK_Self", C, false)), "Text", (await $.mv((await $.mcall((await $.mv((await $.wv([$t1], "DataMod", C, false)), "BankInfo")), "fieldbyname", ["SWIFT"])), "AsString")));
    await $.mset((await $.wv([$t1], "Edit_BankCode_Self", C, false)), "Text", (await $.mv((await $.mcall((await $.mv((await $.wv([$t1], "DataMod", C, false)), "BankInfo")), "fieldbyname", ["KOD_B"])), "AsString")));
    await $.mset((await $.wv([$t1], "Edit_account_Self", C, false)), "Text", (await $.mv((await $.mcall((await $.mv((await $.wv([$t1], "DataMod", C, false)), "BankInfo")), "fieldbyname", ["KRNO"])), "AsString")));
    await $.mset((await $.wv([$t1], "Edit_Voen_Self", C, false)), "Text", (await $.mv((await $.mcall((await $.mv((await $.wv([$t1], "DataMod", C, false)), "BankInfo")), "fieldbyname", ["INN"])), "AsString")));
    await $.mset((await $.wv([$t1], "Combo_Valute", C, false)), "ItemIndex", (await $.mcall((await $.mv((await $.mv((await $.wv([$t1], "PaymentDetalsForm", C, false)), "Combo_Valute")), "Items")), "IndexOf", ["AZM"])));
    await $.mset((await $.wv([$t1], "Edit_account_sub_Self", C, false)), "Text", (await $.mv((await $.wv([$t1], "Edit_account_sub", C, false)), "text")));
    await $.mset((await $.wv([$t1], "Combo_BankName", C, false)), "ItemIndex", (await $.mcall((await $.mv((await $.wv([$t1], "Bank_ID", C, false)), "Items")), "IndexOf", [(await $.mv((await $.mcall((await $.mv((await $.wv([$t1], "DataMod", C, false)), "HoxMessages_out")), "fieldbyname", ["rec_bank_id"])), "AsString"))])));
    await $.mset((await $.wv([$t1], "Combo_Valute", C, false)), "ItemIndex", (await $.mcall((await $.mv((await $.wv([$t1], "Valute_ID", C, false)), "Items")), "IndexOf", [(await $.mv((await $.mcall((await $.mv((await $.wv([$t1], "DataMod", C, false)), "HoxMessages_out")), "fieldbyname", ["val_cod"])), "AsString"))])));
    if ($.truthy($.eq((await $.mv((await $.mv((await $.wv([$t1], "DataMod", C, false)), "BankM")), "Active")), (await $.wv([$t1], "false", C, false))))) {
      await $.mcall((await $.mv((await $.wv([$t1], "DataMod", C, false)), "BankM")), "Open", []);
    }
    await $.mset((await $.wv([$t1], "Edit_BankCode", C, false)), "Text", (await $.mv((await $.mcall((await $.mv((await $.wv([$t1], "DataMod", C, false)), "BankM")), "fieldbyname", ["BankCode"])), "AsString")));
    await $.mset((await $.wv([$t1], "Edit_account", C, false)), "Text", (await $.mv((await $.mcall((await $.mv((await $.wv([$t1], "DataMod", C, false)), "BankM")), "fieldbyname", ["KRNO"])), "AsString")));
    await $.mset((await $.wv([$t1], "Edit_Voen", C, false)), "Text", (await $.mv((await $.mcall((await $.mv((await $.wv([$t1], "DataMod", C, false)), "BankM")), "fieldbyname", ["INN"])), "AsString")));
    await $.mset((await $.wv([$t1], "Edit_Bik", C, false)), "Text", (await $.mv((await $.mcall((await $.mv((await $.wv([$t1], "DataMod", C, false)), "BankM")), "fieldbyname", ["SWIFT"])), "AsString")));
    await $.mset((await $.wv([$t1], "Edit_Account_Sub", C, false)), "Text", (await $.mv((await $.mcall((await $.mv((await $.wv([$t1], "DataMod", C, false)), "HoxMessages_out")), "fieldbyname", ["REC_BANK_SUB_ACC"])), "AsString")));
    await $.mset((await $.wv([$t1], "Edit_account_sub_Self", C, false)), "Text", (await $.mv((await $.mcall((await $.mv((await $.wv([$t1], "DataMod", C, false)), "HoxSw_Proper")), "fieldbyname", ["HoxAccount"])), "AsString")));
    await $.mset((await $.wv([$t1], "Edit_Referens", C, false)), "Text", (await $.mv((await $.mcall((await $.mv((await $.wv([$t1], "DataMod", C, false)), "HoxMessages_out")), "fieldbyname", ["MESS_REFERENCE"])), "AsString")));
    await $.mset((await $.wv([$t1], "Edit_Amount", C, false)), "Text", (await $.mv((await $.mcall((await $.mv((await $.wv([$t1], "DataMod", C, false)), "HoxMessages_out")), "fieldbyname", ["amount"])), "AsString")));
    await $.mset((await $.wv([$t1], "Edit_TransCode", C, false)), "Text", (await $.mv((await $.mcall((await $.mv((await $.wv([$t1], "DataMod", C, false)), "HoxMessages_out")), "fieldbyname", ["TRANS_COD"])), "AsString")));
    await $.mset((await $.wv([$t1], "Edit_Client_acc_no", C, false)), "Text", (await $.mv((await $.mcall((await $.mv((await $.wv([$t1], "DataMod", C, false)), "HoxMessages_out")), "fieldbyname", ["CLIENT_ACC_NO"])), "AsString")));
    await $.mset((await $.wv([$t1], "Edit_Client_Name", C, false)), "Text", (await $.mv((await $.mcall((await $.mv((await $.wv([$t1], "DataMod", C, false)), "HoxMessages_out")), "fieldbyname", ["CLIENT_NAME"])), "AsString")));
    await $.mset((await $.wv([$t1], "Edit_Client_Code", C, false)), "Text", (await $.mv((await $.mcall((await $.mv((await $.wv([$t1], "DataMod", C, false)), "HoxMessages_out")), "fieldbyname", ["CLIENT_Code"])), "AsString")));
    await $.mset((await $.wv([$t1], "Edit_Client_Voen", C, false)), "Text", (await $.mv((await $.mcall((await $.mv((await $.wv([$t1], "DataMod", C, false)), "HoxMessages_out")), "fieldbyname", ["CLIENT_INN"])), "AsString")));
    await $.mset((await $.wv([$t1], "Edit_tey1", C, false)), "Text", (await $.wcall([$t1], "copy", [(await $.mv((await $.mcall((await $.mv((await $.wv([$t1], "DataMod", C, false)), "HoxMessages_out")), "fieldbyname", ["REMIT_INF"])), "AsString")), 0, 35], C)));
    await $.mset((await $.wv([$t1], "Edit_tey2", C, false)), "Text", (await $.wcall([$t1], "copy", [(await $.mv((await $.mcall((await $.mv((await $.wv([$t1], "DataMod", C, false)), "HoxMessages_out")), "fieldbyname", ["REMIT_INF"])), "AsString")), 35, 35], C)));
    await $.mset((await $.wv([$t1], "Edit_tey3", C, false)), "Text", (await $.wcall([$t1], "copy", [(await $.mv((await $.mcall((await $.mv((await $.wv([$t1], "DataMod", C, false)), "HoxMessages_out")), "fieldbyname", ["REMIT_INF"])), "AsString")), 70, 35], C)));
    await $.mset((await $.wv([$t1], "Edit_tey4", C, false)), "Text", (await $.wcall([$t1], "copy", [(await $.mv((await $.mcall((await $.mv((await $.wv([$t1], "DataMod", C, false)), "HoxMessages_out")), "fieldbyname", ["REMIT_INF"])), "AsString")), 105, 35], C)));
    await $.mset((await $.wv([$t1], "Edit_inf1", C, false)), "Text", (await $.wcall([$t1], "copy", [(await $.mv((await $.mcall((await $.mv((await $.wv([$t1], "DataMod", C, false)), "HoxMessages_out")), "fieldbyname", ["ADD_INF"])), "AsString")), 0, 35], C)));
    await $.mset((await $.wv([$t1], "Edit_inf2", C, false)), "Text", (await $.wcall([$t1], "copy", [(await $.mv((await $.mcall((await $.mv((await $.wv([$t1], "DataMod", C, false)), "HoxMessages_out")), "fieldbyname", ["ADD_INF"])), "AsString")), 35, 35], C)));
    await $.mset((await $.wv([$t1], "Edit_inf3", C, false)), "Text", (await $.wcall([$t1], "copy", [(await $.mv((await $.mcall((await $.mv((await $.wv([$t1], "DataMod", C, false)), "HoxMessages_out")), "fieldbyname", ["ADD_INF"])), "AsString")), 70, 35], C)));
  }
  await $.set(C, "mess_edit", true);
  await $.mset((await $.mv((await $.v(C, "PaymentDetalsForm")), "Button4")), "Visible", false);
  await $.mset((await $.mv((await $.v(C, "PaymentDetalsForm")), "Button1")), "Enabled", true);
  await $.mset((await $.mv((await $.v(C, "PaymentDetalsForm")), "Button2")), "Enabled", false);
  await $.mset((await $.mv((await $.v(C, "PaymentDetalsForm")), "Button1")), "Caption", "Yaddaşa yaz");
  return L0.result;
}, {"params": [], "kind": "procedure", "ptypes": []});
  U.method("TSwift_Form", "LoadToRich", async function LoadToRich(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"filename": $.copyArg(p0), result: '', "stpos": 0, "endpos": 0, "ref": ''};
  await $.fixArgs(L0, ["filename"]);
  await $.mcall((await $.v(C, "RichEdit1")), "Clear", []);
  await $.stmt((await $.mcall((await $.mv((await $.v(C, "RichEdit1")), "Lines")), "LoadFromFile", [L0["filename"]])));
  L0["stpos"] = (await $.mcall((await $.v(C, "RichEdit1")), "FindText", ["<msg_user_reference>", 0, (await $.mv((await $.v(C, "RichEdit1")), "GetTextLen")), [(await $.v(C, "stMatchCase"))]]));
  L0["endpos"] = (await $.mcall((await $.v(C, "RichEdit1")), "FindText", ["</msg_user_reference>", 0, (await $.mv((await $.v(C, "RichEdit1")), "GetTextLen")), [(await $.v(C, "stMatchCase"))]]));
  await $.mset((await $.v(C, "RichEdit1")), "SelStart", $.add(L0["stpos"], (await $.call(C, "length", ["<msg_user_reference>"]))));
  await $.mset((await $.v(C, "RichEdit1")), "SelLength", $.sub((await $.call(C, "abs", [$.sub(L0["endpos"], L0["stpos"])])), (await $.call(C, "length", ["<msg_user_reference>"]))));
  L0["ref"] = (await $.mv((await $.v(C, "RichEdit1")), "SelText"));
  await $.mcall((await $.mv((await $.v(C, "DataMod")), "ForCHECK")), "Close", []);
  await $.mcall((await $.mv((await $.mv((await $.v(C, "DataMod")), "ForCHECK")), "sql")), "Clear", []);
  await $.stmt((await $.mcall((await $.mv((await $.mv((await $.v(C, "DataMod")), "ForCHECK")), "SQL")), "Add", [$.add($.add("Select reference from hoxmessage_in where reference='", L0["ref"]), "'")])));
  await $.mcall((await $.mv((await $.v(C, "DataMod")), "ForCHECK")), "Open", []);
  if ($.truthy($.gt((await $.mv((await $.mv((await $.v(C, "DataMod")), "ForCHECK")), "RecordCount")), 0))) {
    await $.mcall((await $.v(C, "RichEdit1")), "Clear", []);
    L0["result"] = "0";
  } else {
    L0["result"] = L0["ref"];
  }
  return L0.result;
}, {"params": ["FileName"], "kind": "function", "ptypes": ["String"]});
  U.method("TSwift_Form", "ConvertToBase", async function ConvertToBase(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"rich": $.copyArg(p0), "ref": $.copyArg(p1), result: undefined, "i": 0, "startpos": 0, "endpos": 0, "fnstartpos": 0, "fnendpos": 0, "temppos": 0, "templine": 0, "lenpos": 0, "lineindex": 0, "tempvar": 0, "sub50k": '', "name50k": '', "inn50k": '', "code50k": '', "bnkrek50k": '', "fn77b": false, "stmessage": '', "fn50k": ''};
  await $.fixArgs(L0, ["rich", "ref"]);
  L0["findmytext"] = $.fn(async function FindMyText(p0, p1, p2) {
  const L1 = {"tx": $.copyArg(p0), "posstart": $.copyArg(p1), "posend": $.copyArg(p2), result: 0, "temp": 0};
  await $.fixArgs(L1, ["tx", "posstart", "posend"]);
  L1["temp"] = (await $.mcall(L0["rich"], "FindText", [L1["tx"], $.add(L1["posstart"], 1), $.add(L1["posend"], 1), [(await $.v(C, "stMatchCase"))]]));
  await $.mset(L0["rich"], "SelStart", L1["temp"]);
  await $.mset(L0["rich"], "SelLength", (await $.call(C, "length", [L1["tx"]])));
  L1["result"] = L1["temp"];
  return L1.result;
});
  L0["findlines"] = $.fn(async function FindLines(p0, p1, p2) {
  const L1 = {"tx": $.copyArg(p0), "posstart": $.copyArg(p1), "posend": $.copyArg(p2), result: 0, "temp": 0};
  await $.fixArgs(L1, ["tx", "posstart", "posend"]);
  L1["temp"] = (await $.mcall(L0["rich"], "FindText", [L1["tx"], $.add(L1["posstart"], 1), $.add(L1["posend"], 1), [(await $.v(C, "stMatchCase"))]]));
  if ($.truthy($.gt(L1["temp"], (-(1))))) {
    await $.mset(L0["rich"], "SelStart", L1["temp"]);
    await $.mset(L0["rich"], "SelLength", (await $.call(C, "length", [L1["tx"]])));
    L1["result"] = (await $.mv((await $.mv(L0["rich"], "CaretPos")), "y"));
  } else {
    L1["result"] = (-(1));
  }
  return L1.result;
});
  if ($.truthy($.eq((await $.mv(L0["rich"], "GetTextLen")), 0))) {
    return L0.result;
  }
  L0["startpos"] = 0;
  L0["endpos"] = 0;
  L0["fn77b"] = false;
  L0["fnstartpos"] = (await $.callv(L0["findmytext"], [":21:", L0["startpos"], (await $.mv(L0["rich"], "GetTextLen"))]));
  L0["lineindex"] = (await $.mv((await $.mv(L0["rich"], "CaretPos")), "y"));
  L0["fnendpos"] = (await $.callv(L0["findmytext"], [":26T:", L0["startpos"], (await $.mv(L0["rich"], "GetTextLen"))]));
  L0["temppos"] = (await $.callv(L0["findmytext"], [":77B:", L0["startpos"], (await $.mv(L0["rich"], "GetTextLen"))]));
  if ($.truthy((await $.and_(($.gt(L0["temppos"], (-(1)))), async () => ($.eq(L0["temppos"], $.add(L0["fnendpos"], 10))))))) {
    L0["fnendpos"] = L0["temppos"];
    L0["fn77b"] = true;
  }
  while ($.truthy($.gt(L0["fnstartpos"], (-(1))))) {
    await $.mcall((await $.mv((await $.v(C, "DataMod")), "HoxMessages_IN")), "Insert", []);
    await $.mset((await $.mcall((await $.mv((await $.v(C, "DataMod")), "HoxMessages_IN")), "FieldByName", ["trans_date"])), "AsDateTime", (await $.mcall((await $.mv((await $.v(C, "DataMod")), "GetSysDate")), "CallDateFunction", ["Get_date", []])));
    await $.mset((await $.mcall((await $.mv((await $.v(C, "DataMod")), "HoxMessages_IN")), "FieldByName", ["reference"])), "AsString", L0["ref"]);
    L0["templine"] = (await $.callv(L0["findlines"], [":32B:", L0["fnstartpos"], L0["fnendpos"]]));
    L0["stmessage"] = (await $.call(C, "trim", [(await $.call(C, "copy", [(await $.idx((await $.mv(L0["rich"], "Lines")), [L0["templine"]])), 6, 3]))]));
    await $.mcall((await $.mv((await $.v(C, "DataMod")), "ForAll")), "Close", []);
    await $.mcall((await $.mv((await $.mv((await $.v(C, "DataMod")), "ForAll")), "SQL")), "Clear", []);
    await $.stmt((await $.mcall((await $.mv((await $.mv((await $.v(C, "DataMod")), "ForAll")), "SQL")), "Add", [$.add($.add("Select valute from avalute where val_name='", L0["stmessage"]), "'")])));
    await $.mcall((await $.mv((await $.v(C, "DataMod")), "ForAll")), "Open", []);
    await $.mset((await $.mcall((await $.mv((await $.v(C, "DataMod")), "HoxMessages_IN")), "FieldByName", ["val_cod"])), "AsInteger", (await $.mv((await $.mcall((await $.mv((await $.v(C, "DataMod")), "ForAll")), "fieldbyname", ["valute"])), "AsInteger")));
    L0["stmessage"] = (await $.call(C, "trim", [(await $.call(C, "copy", [(await $.idx((await $.mv(L0["rich"], "Lines")), [L0["templine"]])), 9, $.sub((await $.call(C, "Length", [(await $.idx((await $.mv(L0["rich"], "Lines")), [L0["templine"]]))])), 8)]))]));
    await $.mset((await $.mcall((await $.mv((await $.v(C, "DataMod")), "HoxMessages_IN")), "FieldByName", ["amount"])), "AsFloat", (await $.call(C, "strtofloat", [L0["stmessage"]])));
    L0["templine"] = (await $.callv(L0["findlines"], [":50K:", L0["fnstartpos"], L0["fnendpos"]]));
    L0["tempvar"] = (await $.call(C, "abs", [$.sub((await $.callv(L0["findlines"], [":52A:", L0["fnstartpos"], L0["fnendpos"]])), L0["templine"])]));
    if ($.truthy(($.le(L0["tempvar"], 5)))) {
      L0["stmessage"] = (await $.call(C, "trim", [(await $.call(C, "copy", [(await $.idx((await $.mv(L0["rich"], "Lines")), [L0["templine"]])), 7, $.sub((await $.call(C, "Length", [(await $.idx((await $.mv(L0["rich"], "Lines")), [L0["templine"]]))])), 6)]))]));
      L0["sub50k"] = L0["stmessage"];
      await $.mset((await $.mcall((await $.mv((await $.v(C, "DataMod")), "HoxMessages_IN")), "FieldByName", ["sen_acc"])), "AsString", L0["stmessage"]);
      L0["stmessage"] = (await $.call(C, "trim", [(await $.idx((await $.mv(L0["rich"], "Lines")), [$.add(L0["templine"], 1)]))]));
      L0["name50k"] = L0["stmessage"];
      await $.mset((await $.mcall((await $.mv((await $.v(C, "DataMod")), "HoxMessages_IN")), "FieldByName", ["sen_name"])), "AsString", L0["stmessage"]);
      L0["stmessage"] = (await $.call(C, "trim", [(await $.idx((await $.mv(L0["rich"], "Lines")), [$.add(L0["templine"], 2)]))]));
      L0["code50k"] = L0["stmessage"];
      L0["stmessage"] = (await $.call(C, "trim", [(await $.idx((await $.mv(L0["rich"], "Lines")), [$.add(L0["templine"], 3)]))]));
      L0["inn50k"] = L0["stmessage"];
      await $.mset((await $.mcall((await $.mv((await $.v(C, "DataMod")), "HoxMessages_IN")), "FieldByName", ["sen_inn"])), "AsInteger", (await $.call(C, "strtoint", [L0["stmessage"]])));
      L0["stmessage"] = (await $.call(C, "copy", [(await $.call(C, "trim", [(await $.idx((await $.mv(L0["rich"], "Lines")), [$.add(L0["templine"], 4)]))])), 0, $.sub((await $.call(C, "pos", ["/", (await $.call(C, "trim", [(await $.idx((await $.mv(L0["rich"], "Lines")), [$.add(L0["templine"], 4)]))]))])), 1)]));
      L0["bnkrek50k"] = L0["stmessage"];
      await $.mcall((await $.mv((await $.v(C, "DataMod")), "ForAll")), "Close", []);
      await $.mcall((await $.mv((await $.mv((await $.v(C, "DataMod")), "ForAll")), "SQL")), "Clear", []);
      await $.stmt((await $.mcall((await $.mv((await $.mv((await $.v(C, "DataMod")), "ForAll")), "SQL")), "Add", [$.add($.add("Select id from bankm where bankcode='", L0["stmessage"]), "'")])));
      await $.mcall((await $.mv((await $.v(C, "DataMod")), "ForAll")), "Open", []);
      await $.mset((await $.mcall((await $.mv((await $.v(C, "DataMod")), "HoxMessages_IN")), "FieldByName", ["sen_bank_id"])), "AsInteger", (await $.mv((await $.mcall((await $.mv((await $.v(C, "DataMod")), "ForAll")), "fieldbyname", ["id"])), "AsInteger")));
    } else {
      await $.mset((await $.mcall((await $.mv((await $.v(C, "DataMod")), "HoxMessages_IN")), "FieldByName", ["sen_acc"])), "AsString", L0["sub50k"]);
      await $.mset((await $.mcall((await $.mv((await $.v(C, "DataMod")), "HoxMessages_IN")), "FieldByName", ["sen_name"])), "AsString", L0["name50k"]);
      await $.mset((await $.mcall((await $.mv((await $.v(C, "DataMod")), "HoxMessages_IN")), "FieldByName", ["sen_inn"])), "AsInteger", (await $.call(C, "strtoint", [L0["inn50k"]])));
      await $.mcall((await $.mv((await $.v(C, "DataMod")), "ForAll")), "Close", []);
      await $.mcall((await $.mv((await $.mv((await $.v(C, "DataMod")), "ForAll")), "SQL")), "Clear", []);
      await $.stmt((await $.mcall((await $.mv((await $.mv((await $.v(C, "DataMod")), "ForAll")), "SQL")), "Add", [$.add($.add("Select id from bankm where bankcode='", L0["bnkrek50k"]), "'")])));
      await $.mcall((await $.mv((await $.v(C, "DataMod")), "ForAll")), "Open", []);
      await $.mset((await $.mcall((await $.mv((await $.v(C, "DataMod")), "HoxMessages_IN")), "FieldByName", ["sen_bank_id"])), "AsInteger", (await $.mv((await $.mcall((await $.mv((await $.v(C, "DataMod")), "ForAll")), "fieldbyname", ["id"])), "AsInteger")));
    }
    L0["templine"] = (await $.callv(L0["findlines"], [":52A:", L0["fnstartpos"], L0["fnendpos"]]));
    L0["stmessage"] = (await $.call(C, "trim", [(await $.call(C, "copy", [(await $.idx((await $.mv(L0["rich"], "Lines")), [L0["templine"]])), 9, $.sub((await $.call(C, "Length", [(await $.idx((await $.mv(L0["rich"], "Lines")), [L0["templine"]]))])), 8)]))]));
    await $.mset((await $.mcall((await $.mv((await $.v(C, "DataMod")), "HoxMessages_IN")), "FieldByName", ["sen_bank_subacc"])), "AsFloat", (await $.call(C, "StrToFloat", [L0["stmessage"]])));
    L0["stmessage"] = (await $.idx((await $.mv(L0["rich"], "Lines")), [$.add(L0["templine"], 1)]));
    L0["templine"] = (await $.callv(L0["findlines"], [":57A:", L0["fnstartpos"], L0["fnendpos"]]));
    L0["stmessage"] = (await $.call(C, "trim", [(await $.call(C, "copy", [(await $.idx((await $.mv(L0["rich"], "Lines")), [L0["templine"]])), 9, $.sub((await $.call(C, "Length", [(await $.idx((await $.mv(L0["rich"], "Lines")), [L0["templine"]]))])), 8)]))]));
    await $.mset((await $.mcall((await $.mv((await $.v(C, "DataMod")), "HoxMessages_IN")), "FieldByName", ["rec_bank_subacc"])), "AsFloat", (await $.call(C, "strtoFloat", [L0["stmessage"]])));
    L0["stmessage"] = (await $.call(C, "trim", [(await $.idx((await $.mv(L0["rich"], "Lines")), [$.add(L0["templine"], 1)]))]));
    await $.mset((await $.mcall((await $.mv((await $.v(C, "DataMod")), "HoxMessages_IN")), "FieldByName", ["rec_bank_bik"])), "AsString", L0["stmessage"]);
    L0["templine"] = (await $.callv(L0["findlines"], [":59:", L0["fnstartpos"], L0["fnendpos"]]));
    L0["stmessage"] = (await $.call(C, "trim", [(await $.call(C, "copy", [(await $.idx((await $.mv(L0["rich"], "Lines")), [L0["templine"]])), 6, $.sub((await $.call(C, "Length", [(await $.idx((await $.mv(L0["rich"], "Lines")), [L0["templine"]]))])), 5)]))]));
    await $.mset((await $.mcall((await $.mv((await $.v(C, "DataMod")), "HoxMessages_IN")), "FieldByName", ["rec_client_acc"])), "AsString", L0["stmessage"]);
    await $.mcall((await $.mv((await $.v(C, "DataMod")), "ForAll")), "Close", []);
    await $.mcall((await $.mv((await $.mv((await $.v(C, "DataMod")), "ForAll")), "SQL")), "Clear", []);
    await $.stmt((await $.mcall((await $.mv((await $.mv((await $.v(C, "DataMod")), "ForAll")), "SQL")), "Add", [$.add($.add("Select id from account where acc_no='", L0["stmessage"]), "'")])));
    await $.mcall((await $.mv((await $.v(C, "DataMod")), "ForAll")), "Open", []);
    if ($.truthy($.gt((await $.mv((await $.mv((await $.v(C, "DataMod")), "ForAll")), "RecordCount")), 0))) {
      await $.mset((await $.mcall((await $.mv((await $.v(C, "DataMod")), "HoxMessages_IN")), "FieldByName", ["rec_client_acc_id"])), "AsInteger", (await $.mv((await $.mcall((await $.mv((await $.v(C, "DataMod")), "ForAll")), "fieldbyname", ["id"])), "AsInteger")));
    }
    L0["stmessage"] = (await $.call(C, "trim", [(await $.idx((await $.mv(L0["rich"], "Lines")), [$.add(L0["templine"], 1)]))]));
    await $.mset((await $.mcall((await $.mv((await $.v(C, "DataMod")), "HoxMessages_IN")), "FieldByName", ["rec_client_name"])), "AsString", L0["stmessage"]);
    L0["stmessage"] = (await $.call(C, "trim", [(await $.idx((await $.mv(L0["rich"], "Lines")), [$.add(L0["templine"], 2)]))]));
    L0["stmessage"] = (await $.call(C, "trim", [(await $.idx((await $.mv(L0["rich"], "Lines")), [$.add(L0["templine"], 3)]))]));
    await $.mset((await $.mcall((await $.mv((await $.v(C, "DataMod")), "HoxMessages_IN")), "FieldByName", ["rec_client_inn"])), "AsInteger", (await $.call(C, "strtoint", [L0["stmessage"]])));
    L0["stmessage"] = (await $.idx((await $.mv(L0["rich"], "Lines")), [$.add(L0["templine"], 4)]));
    L0["startpos"] = (await $.callv(L0["findmytext"], [":70:", L0["fnstartpos"], (await $.mv(L0["rich"], "GetTextLen"))]));
    L0["endpos"] = (await $.callv(L0["findmytext"], [":26T:", L0["fnstartpos"], L0["fnendpos"]]));
    await $.mset(L0["rich"], "SelStart", $.add(L0["startpos"], 4));
    await $.mset(L0["rich"], "SelLength", $.sub($.sub(L0["endpos"], L0["startpos"]), 4));
    L0["stmessage"] = (await $.call(C, "trim", [(await $.mv(L0["rich"], "SelText"))]));
    L0["stmessage"] = (await $.call(C, "StringReplace", [L0["stmessage"], (await $.call(C, "chr", [10])), " ", [(await $.v(C, "rfReplaceAll"))]]));
    L0["stmessage"] = (await $.call(C, "StringReplace", [L0["stmessage"], "  ", " ", [(await $.v(C, "rfReplaceAll"))]]));
    await $.mset((await $.mcall((await $.mv((await $.v(C, "DataMod")), "HoxMessages_IN")), "FieldByName", ["remit_inf"])), "AsString", L0["stmessage"]);
    L0["templine"] = (await $.callv(L0["findlines"], [":26T:", L0["fnstartpos"], L0["fnendpos"]]));
    L0["stmessage"] = (await $.call(C, "trim", [(await $.call(C, "copy", [(await $.idx((await $.mv(L0["rich"], "Lines")), [L0["templine"]])), 6, 3]))]));
    await $.mset((await $.mcall((await $.mv((await $.v(C, "DataMod")), "HoxMessages_IN")), "FieldByName", ["typecode"])), "AsInteger", (await $.call(C, "strtoint", [L0["stmessage"]])));
    if ($.truthy(L0["fn77b"])) {
      L0["startpos"] = (await $.callv(L0["findmytext"], [":77B:", L0["fnstartpos"], (await $.mv(L0["rich"], "GetTextLen"))]));
      L0["endpos"] = (await $.callv(L0["findmytext"], [":21:", L0["fnstartpos"], L0["fnendpos"]]));
      await $.mset(L0["rich"], "SelStart", $.add(L0["startpos"], 5));
      await $.mset(L0["rich"], "SelLength", $.sub($.sub(L0["endpos"], L0["startpos"]), 5));
      L0["stmessage"] = (await $.call(C, "trim", [(await $.mv(L0["rich"], "SelText"))]));
      L0["stmessage"] = (await $.call(C, "StringReplace", [L0["stmessage"], (await $.call(C, "chr", [10])), " ", [(await $.v(C, "rfReplaceAll"))]]));
      L0["stmessage"] = (await $.call(C, "StringReplace", [L0["stmessage"], "  ", " ", [(await $.v(C, "rfReplaceAll"))]]));
      await $.mset((await $.mcall((await $.mv((await $.v(C, "DataMod")), "HoxMessages_IN")), "FieldByName", ["add_inf"])), "AsString", L0["stmessage"]);
    }
    L0["fnstartpos"] = (await $.callv(L0["findmytext"], [":21:", L0["fnendpos"], (await $.mv(L0["rich"], "GetTextLen"))]));
    L0["lineindex"] = (await $.mv((await $.mv(L0["rich"], "CaretPos")), "y"));
    L0["fnendpos"] = (await $.callv(L0["findmytext"], [":26T:", L0["fnendpos"], (await $.mv(L0["rich"], "GetTextLen"))]));
    L0["temppos"] = (await $.callv(L0["findmytext"], [":77B:", L0["fnendpos"], (await $.mv(L0["rich"], "GetTextLen"))]));
    if ($.truthy((await $.and_(($.gt(L0["temppos"], (-(1)))), async () => ($.eq(L0["temppos"], $.add(L0["fnendpos"], 10))))))) {
      L0["fnendpos"] = L0["temppos"];
      L0["fn77b"] = true;
    } else {
      L0["fn77b"] = false;
    }
    await $.mcall((await $.mv((await $.v(C, "DataMod")), "HoxMessages_IN")), "Post", []);
    await $.tick();
  }
  await $.mcall(L0["rich"], "Clear", []);
  return L0.result;
}, {"params": ["Rich", "ref"], "kind": "procedure", "ptypes": ["TRichEdit", "String"]});
  U.method("TSwift_Form", "selectdate", async function selectdate(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: undefined, "dtst": 0, "dtend": 0};
  L0["dtst"] = (await $.call(C, "trunc", [(await $.mv((await $.v(C, "StDate")), "DateTime"))]));
  L0["dtend"] = (await $.call(C, "trunc", [(await $.mv((await $.v(C, "EndDate")), "DateTime"))]));
  await $.stmt((await $.mcall((await $.mv((await $.v(C, "datamod")), "Hox102_out")), "SetVariable", ["BeginDate", L0["dtst"]])));
  await $.stmt((await $.mcall((await $.mv((await $.v(C, "datamod")), "Hox102_out")), "SetVariable", ["EndDate", L0["dtend"]])));
  return L0.result;
}, {"params": [], "kind": "procedure", "ptypes": []});
  U.method("TSwift_Form", "RefreshWithPos", async function RefreshWithPos(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: undefined, "firstpos": null};
  L0["firstpos"] = (await $.mv((await $.mv((await $.v(C, "DataMod")), "Hox102_out")), "GetBookmark"));
  await $.mcall((await $.mv((await $.v(C, "DataMod")), "Hox102_out")), "Refresh", []);
  await $.stmt((await $.mcall((await $.mv((await $.v(C, "DataMod")), "Hox102_out")), "GotoBookmark", [L0["firstpos"]])));
  L0["firstpos"] = (await $.mv((await $.mv((await $.v(C, "DataMod")), "HoxMessages_out")), "GetBookmark"));
  await $.mcall((await $.mv((await $.v(C, "DataMod")), "HoxMessages_out")), "Refresh", []);
  await $.stmt((await $.mcall((await $.mv((await $.v(C, "DataMod")), "HoxMessages_out")), "GotoBookmark", [L0["firstpos"]])));
  await $.mcall((await $.mv((await $.v(C, "GridMT102")), "SelectedRows")), "Clear", []);
  await $.mcall((await $.mv((await $.v(C, "BrowseGrid")), "SelectedRows")), "Clear", []);
  return L0.result;
}, {"params": [], "kind": "procedure", "ptypes": []});
  U.method("TSwift_Form", "ToolButton1Click", async function ToolButton1Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.stmt((await $.call(C, "preparetrans", [0])));
  await $.stmt($.call(C, "createTransCodeTree", []));
  await $.set(C, "after_add", false);
  await $.set(C, "mess_edit", false);
  await $.set(C, "new_id", (await $.mcall((await $.mv((await $.v(C, "DataMod")), "INS")), "Callintegerfunction", ["Inst_HOX102_OUT", ["CREDIT", 0, (await $.mv((await $.mv((await $.v(C, "TransForm")), "edit_clientname")), "text")), (await $.mv((await $.mv((await $.v(C, "TransForm")), "edit_client_code")), "text")), (await $.mv((await $.mv((await $.v(C, "TransForm")), "edit_referens")), "text")), (await $.call(C, "strtofloat", [(await $.mv((await $.mv((await $.v(C, "TransForm")), "edit_amount")), "text"))])), (await $.call(C, "strtofloat", [(await $.idx((await $.mv((await $.mv((await $.v(C, "TransForm")), "valute_id")), "items")), [(await $.mv((await $.mv((await $.v(C, "TransForm")), "combo_valute")), "itemindex"))]))])), (await $.v(C, "date"))]])));
  await $.mcall((await $.v(C, "transForm")), "ShowModal", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TSwift_Form", "PageControl1Change", async function PageControl1Change(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mset((await $.idx((await $.mv((await $.v(C, "PageControl1")), "Pages")), [0])), "Highlighted", $.eq((await $.mv((await $.v(C, "PageControl1")), "ActivePageIndex")), 0));
  await $.mset((await $.idx((await $.mv((await $.v(C, "PageControl1")), "Pages")), [1])), "Highlighted", $.eq((await $.mv((await $.v(C, "PageControl1")), "ActivePageIndex")), 1));
  if ($.truthy($.eq((await $.mv((await $.v(C, "PageControl1")), "ActivePageIndex")), 1))) {
    await $.mset((await $.v(C, "StDate_in")), "Date", (await $.v(C, "date")));
    await $.mset((await $.v(C, "EndDate_in")), "date", (await $.v(C, "date")));
    await $.mcall((await $.mv((await $.v(C, "DataMod")), "ForAll")), "Close", []);
    await $.mcall((await $.mv((await $.mv((await $.v(C, "DataMod")), "ForAll")), "SQL")), "Clear", []);
    await $.stmt((await $.mcall((await $.mv((await $.mv((await $.v(C, "DataMod")), "ForAll")), "SQL")), "Add", ["Select hox_in_dir from hoxsw_proper"])));
    await $.mcall((await $.mv((await $.v(C, "DataMod")), "ForAll")), "Open", []);
    await $.mset((await $.v(C, "FileList_IN")), "Directory", $.add((await $.mv((await $.mcall((await $.mv((await $.v(C, "DataMod")), "ForAll")), "fieldbyname", ["hox_in_dir"])), "AsString")), "\\"));
    await $.mcall((await $.v(C, "FileList_IN")), "Update", []);
    await $.mset((await $.v(C, "StDate_in")), "Date", (await $.mcall((await $.mv((await $.v(C, "DataMod")), "GetSysDate")), "CallDateFunction", ["GET_DATE", []])));
    await $.mset((await $.v(C, "ENDDate_in")), "Date", (await $.mcall((await $.mv((await $.v(C, "DataMod")), "GetSysDate")), "CallDateFunction", ["GET_DATE", []])));
    await $.stmt($.call(C, "Refresh_mess_in", []));
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TSwift_Form", "ToolButton3Click", async function ToolButton3Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.stmt($.call(C, "RefreshDATA", []));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TSwift_Form", "ToolButton2Click", async function ToolButton2Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.eq((await $.mv((await $.mv((await $.v(C, "DataMod")), "Hox102_out")), "RecordCount")), 0))) {
    return L0.result;
  }
  await $.stmt((await $.call(C, "preparetrans", [1])));
  await $.stmt($.call(C, "createTransCodeTree", []));
  await $.set(C, "new_id", (await $.mv((await $.mcall((await $.mv((await $.v(C, "DataMod")), "Hox102_out")), "fieldbyname", ["id"])), "AsInteger")));
  await $.set(C, "after_add", true);
  if ($.truthy($.eq((await $.mv((await $.mv((await $.v(C, "DataMod")), "BankInfo")), "Active")), false))) {
    await $.mcall((await $.mv((await $.v(C, "DataMod")), "BankInfo")), "Open", []);
  }
  await $.mset((await $.mv((await $.v(C, "PaymentDetalsForm")), "Edit_BankName_Self")), "Text", (await $.mv((await $.mcall((await $.mv((await $.v(C, "DataMod")), "BankInfo")), "fieldbyname", ["BANK"])), "AsString")));
  await $.mset((await $.mv((await $.v(C, "PaymentDetalsForm")), "Edit_BIK_Self")), "Text", (await $.mv((await $.mcall((await $.mv((await $.v(C, "DataMod")), "BankInfo")), "fieldbyname", ["SWIFT"])), "AsString")));
  await $.mset((await $.mv((await $.v(C, "PaymentDetalsForm")), "Edit_BankCode_Self")), "Text", (await $.mv((await $.mcall((await $.mv((await $.v(C, "DataMod")), "BankInfo")), "fieldbyname", ["KOD_B"])), "AsString")));
  await $.mset((await $.mv((await $.v(C, "PaymentDetalsForm")), "Edit_account_Self")), "Text", (await $.mv((await $.mcall((await $.mv((await $.v(C, "DataMod")), "BankInfo")), "fieldbyname", ["KRNO"])), "AsString")));
  await $.mset((await $.mv((await $.v(C, "PaymentDetalsForm")), "Edit_Voen_Self")), "Text", (await $.mv((await $.mcall((await $.mv((await $.v(C, "DataMod")), "BankInfo")), "fieldbyname", ["INN"])), "AsString")));
  await $.mset((await $.mv((await $.v(C, "PaymentDetalsForm")), "Combo_Valute")), "ItemIndex", (await $.mcall((await $.mv((await $.mv((await $.v(C, "PaymentDetalsForm")), "Combo_Valute")), "Items")), "IndexOf", ["AZM"])));
  await $.mset((await $.mv((await $.v(C, "PaymentDetalsForm")), "Edit_account_sub_Self")), "Text", (await $.mv((await $.mv((await $.v(C, "TransForm")), "Edit_account_sub")), "text")));
  await $.mset((await $.mv((await $.v(C, "PaymentDetalsForm")), "Combo_BankName")), "ItemIndex", (-(1)));
  await $.mcall((await $.mv((await $.v(C, "PaymentDetalsForm")), "Edit_BIK")), "Clear", []);
  await $.mcall((await $.mv((await $.v(C, "PaymentDetalsForm")), "Edit_BankCode")), "clear", []);
  await $.mcall((await $.mv((await $.v(C, "PaymentDetalsForm")), "Edit_Referens")), "Clear", []);
  await $.mcall((await $.mv((await $.v(C, "PaymentDetalsForm")), "Edit_account")), "Clear", []);
  await $.mcall((await $.mv((await $.v(C, "PaymentDetalsForm")), "Edit_Voen")), "Clear", []);
  await $.mcall((await $.mv((await $.v(C, "PaymentDetalsForm")), "Edit_Amount")), "Clear", []);
  await $.mcall((await $.mv((await $.v(C, "PaymentDetalsForm")), "Edit_TransCode")), "Clear", []);
  await $.mcall((await $.mv((await $.v(C, "PaymentDetalsForm")), "Edit_Client_Name")), "Clear", []);
  await $.mcall((await $.mv((await $.v(C, "PaymentDetalsForm")), "Edit_Client_Code")), "clear", []);
  await $.mcall((await $.mv((await $.v(C, "PaymentDetalsForm")), "Edit_Client_acc_no")), "Clear", []);
  await $.mcall((await $.mv((await $.v(C, "PaymentDetalsForm")), "Edit_Client_Voen")), "Clear", []);
  await $.mcall((await $.mv((await $.v(C, "PaymentDetalsForm")), "Edit_inf1")), "Clear", []);
  await $.mcall((await $.mv((await $.v(C, "PaymentDetalsForm")), "Edit_inf2")), "Clear", []);
  await $.mcall((await $.mv((await $.v(C, "PaymentDetalsForm")), "Edit_inf3")), "Clear", []);
  await $.mcall((await $.mv((await $.v(C, "PaymentDetalsForm")), "Edit_tey1")), "Clear", []);
  await $.mcall((await $.mv((await $.v(C, "PaymentDetalsForm")), "Edit_tey2")), "Clear", []);
  await $.mcall((await $.mv((await $.v(C, "PaymentDetalsForm")), "Edit_tey3")), "Clear", []);
  await $.mset((await $.mv((await $.v(C, "PaymentDetalsForm")), "Combo_Valute")), "ItemIndex", 0);
  await $.mcall((await $.v(C, "PaymentDetalsForm")), "ShowModal", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TSwift_Form", "BrowseGridDblClick", async function BrowseGridDblClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.eq((await $.mv((await $.mv((await $.mv((L0["sender"]), "DataSource")), "DataSet")), "RecordCount")), 0))) {
    return L0.result;
  }
  await $.stmt($.call(C, "showdetals", []));
  await $.mcall((await $.v(C, "PaymentDetalsForm")), "ShowModal", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TSwift_Form", "GridMT102DrawColumnCell", async function GridMT102DrawColumnCell(Self, p0, p1, p2, p3, p4) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "rect": $.copyArg(p1), "datacol": $.copyArg(p2), "column": $.copyArg(p3), "state": $.copyArg(p4), result: undefined, "imageindex": 0};
  await $.fixArgs(L0, ["sender", "rect", "datacol", "column", "state"]);
  {
    const $t2 = L0["sender"];
    if ($.truthy($.ne((await $.mv((await $.mv((await $.wv([$t2], "DataSource", C, false)), "DataSet")), "RecordCount")), 0))) {
      { const $t3 = (await $.mv((await $.mcall((await $.mv((await $.wv([$t2], "DataSource", C, false)), "DataSet")), "FieldByName", ["Status"])), "AsInteger"));
        if ($.eq($t3, 0)) {
          await $.wset([$t2], "ImageIndex", 3, { get: async () => L0["imageindex"], set: async (v) => { L0["imageindex"] = v; }, local: true });
        }
        else if ($.eq($t3, 1)) {
          await $.wset([$t2], "ImageIndex", 10, { get: async () => L0["imageindex"], set: async (v) => { L0["imageindex"] = v; }, local: true });
        }
        else if ($.eq($t3, 2)) {
          await $.wset([$t2], "ImageIndex", 4, { get: async () => L0["imageindex"], set: async (v) => { L0["imageindex"] = v; }, local: true });
        }
        else if ($.eq($t3, 3)) {
          await $.wset([$t2], "ImageIndex", 5, { get: async () => L0["imageindex"], set: async (v) => { L0["imageindex"] = v; }, local: true });
        }
        else {
        }
      }
      if ($.truthy((await $.and_(($.eq((await $.wv([$t2], "DataCol", { get: async () => L0["datacol"], set: async (v) => { L0["datacol"] = v; }, local: true }, false)), 1)), async () => ($.ne((await $.wv([$t2], "ImageIndex", { get: async () => L0["imageindex"], set: async (v) => { L0["imageindex"] = v; }, local: true }, false)), (-(1)))))))) {
        await $.stmt((await $.mcall((await $.wv([$t2], "ImageList", C, false)), "Draw", [(await $.wv([$t2], "Canvas", C, false)), (await $.mv((await $.wv([$t2], "Rect", { get: async () => L0["rect"], set: async (v) => { L0["rect"] = v; }, local: true }, false)), "Left")), (await $.mv((await $.wv([$t2], "Rect", { get: async () => L0["rect"], set: async (v) => { L0["rect"] = v; }, local: true }, false)), "Top")), (await $.wv([$t2], "ImageIndex", { get: async () => L0["imageindex"], set: async (v) => { L0["imageindex"] = v; }, local: true }, false)), (await $.wv([$t2], "True", C, false))])));
      } else {
        await $.stmt((await $.wcall([$t2], "DefaultDrawColumnCell", [(await $.wv([$t2], "Rect", { get: async () => L0["rect"], set: async (v) => { L0["rect"] = v; }, local: true }, false)), (await $.wv([$t2], "DataCol", { get: async () => L0["datacol"], set: async (v) => { L0["datacol"] = v; }, local: true }, false)), (await $.wv([$t2], "Column", { get: async () => L0["column"], set: async (v) => { L0["column"] = v; }, local: true }, false)), (await $.wv([$t2], "State", { get: async () => L0["state"], set: async (v) => { L0["state"] = v; }, local: true }, false))], C)));
      }
    }
  }
  return L0.result;
}, {"params": ["Sender", "Rect", "DataCol", "Column", "State"], "kind": "procedure", "ptypes": ["TObject", "TRect", "Integer", "TColumn", "TGridDrawState"]});
  U.method("TSwift_Form", "MessAcceptButtonClick", async function MessAcceptButtonClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "i": 0};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy((await $.or_((await $.or_(($.eq((await $.mv((await $.mv((await $.v(C, "DataMod")), "HoxMessages_out")), "RecordCount")), 0)), async () => ($.ne((await $.mv((await $.mcall((await $.mv((await $.v(C, "DataMod")), "HoxMessages_out")), "fieldbyname", ["status"])), "AsInteger")), 0)))), async () => ($.eq((await $.mv((await $.mcall((await $.mv((await $.v(C, "DataMod")), "Hox102_out")), "fieldbyname", ["status"])), "AsInteger")), 2)))))) {
    return L0.result;
  }
  { const $t4 = $.sub((await $.mv((await $.mv((await $.v(C, "BrowseGrid")), "SelectedRows")), "Count")), 1);
    L0["i"] = 0;
    let $t5 = true;
    for (;;) {
      if (!$t5) { L0["i"] = $.succ(L0["i"], 1); }
      $t5 = false;
      if (!($.ord(L0["i"]) <= $.ord($t4))) break;
      await $.stmt((await $.mcall((await $.mv((await $.mv((await $.v(C, "BrowseGrid")), "DataSource")), "DataSet")), "GotoBookmark", [(await $.call(C, "pointer", [(await $.idx((await $.mv((await $.mv((await $.v(C, "BrowseGrid")), "SelectedRows")), "items")), [L0["i"]]))]))])));
      await $.stmt((await $.mcall((await $.mv((await $.v(C, "DataMod")), "Ins")), "callprocedure", ["UPD_MESS_ICON", [(await $.mv((await $.mcall((await $.mv((await $.v(C, "DataMod")), "HoxMessages_out")), "fieldbyname", ["ID"])), "ASinteger")), 1]])));
      await $.tick();
    }
  }
  await $.mcall((await $.v(C, "Swift_Form")), "RefreshWithPos", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TSwift_Form", "AcceptButtonClick", async function AcceptButtonClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy((await $.or_((await $.or_(($.eq((await $.mv((await $.mv((await $.v(C, "DataMod")), "Hox102_out")), "RecordCount")), 0)), async () => ($.eq((await $.mv((await $.mv((await $.v(C, "DataMod")), "HoxMessages_out")), "RecordCount")), 0)))), async () => (await $.and_(($.ne((await $.mv((await $.mcall((await $.mv((await $.v(C, "DataMod")), "Hox102_out")), "fieldbyname", ["status"])), "AsInteger")), 0)), async () => ($.ne((await $.mv((await $.mcall((await $.mv((await $.v(C, "DataMod")), "Hox102_out")), "fieldbyname", ["status"])), "AsInteger")), 3)))))))) {
    return L0.result;
  }
  if ($.truthy($.eq((await $.mcall((await $.mv((await $.v(C, "DataMod")), "Ins")), "callintegerfunction", ["UPD_HOX102_ICON", [(await $.mv((await $.mcall((await $.mv((await $.v(C, "DataMod")), "Hox102_out")), "fieldbyname", ["ID"])), "ASinteger")), 1]])), 1))) {
    await $.stmt((await $.mcall((await $.mv((await $.v(C, "DataMod")), "Ins")), "callprocedure", ["ParentAndChildTrans", [(await $.mv((await $.mcall((await $.mv((await $.v(C, "DataMod")), "Hox102_out")), "fieldbyname", ["ID"])), "ASinteger"))]])));
    await $.mcall((await $.v(C, "Swift_Form")), "RefreshDATA", []);
  } else {
    await $.stmt((await $.call(C, "MessageDlg", ["Batch-da olan butun mesalar testiq olunmalidir", (await $.v(C, "mtError")), [(await $.v(C, "mbOk"))], 0])));
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TSwift_Form", "ToolButton10Click", async function ToolButton10Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy((await $.or_((await $.or_((await $.or_(($.eq((await $.mv((await $.mv((await $.v(C, "DataMod")), "HoxMessages_out")), "RecordCount")), 0)), async () => ($.eq((await $.mv((await $.mcall((await $.mv((await $.v(C, "DataMod")), "HoxMessages_out")), "fieldbyname", ["status"])), "AsInteger")), 1)))), async () => ($.eq((await $.mv((await $.mcall((await $.mv((await $.v(C, "DataMod")), "Hoxmessages_out")), "fieldbyname", ["status"])), "AsInteger")), 2)))), async () => ($.eq((await $.mv((await $.mcall((await $.mv((await $.v(C, "DataMod")), "Hox102_out")), "fieldbyname", ["status"])), "AsInteger")), 2)))))) {
    return L0.result;
  }
  await $.stmt((await $.mcall((await $.mv((await $.v(C, "DataMod")), "Ins")), "callprocedure", ["UPD_MESS_ICON", [(await $.mv((await $.mcall((await $.mv((await $.v(C, "DataMod")), "HoxMessages_out")), "fieldbyname", ["ID"])), "ASinteger")), 2]])));
  await $.mcall((await $.v(C, "Swift_Form")), "RefreshDATA", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TSwift_Form", "ToolButton21Click", async function ToolButton21Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy((await $.or_((await $.or_(($.eq((await $.mv((await $.mv((await $.v(C, "DataMod")), "HoxMessages_out")), "RecordCount")), 0)), async () => ($.eq((await $.mv((await $.mcall((await $.mv((await $.v(C, "DataMod")), "Hox102_out")), "fieldbyname", ["status"])), "AsInteger")), 1)))), async () => ($.eq((await $.mv((await $.mcall((await $.mv((await $.v(C, "DataMod")), "Hox102_out")), "fieldbyname", ["status"])), "AsInteger")), 2)))))) {
    return L0.result;
  }
  await $.stmt((await $.mcall((await $.mv((await $.v(C, "DataMod")), "Ins")), "callintegerfunction", ["UPD_HOX102_ICON", [(await $.mv((await $.mcall((await $.mv((await $.v(C, "DataMod")), "Hox102_out")), "fieldbyname", ["ID"])), "ASinteger")), 2]])));
  await $.mcall((await $.v(C, "Swift_Form")), "RefreshDATA", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TSwift_Form", "ToolButton4Click", async function ToolButton4Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mcall((await $.v(C, "delete_mess_out")), "Execute", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TSwift_Form", "ToolButton8Click", async function ToolButton8Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.stmt((await $.call(C, "AddtoCOMBO", [(await $.mv((await $.v(C, "PropertiesForm")), "Combo_Valute")), (await $.mv((await $.v(C, "PropertiesForm")), "Valute_ID")), (await $.mv((await $.v(C, "DataMod")), "AValute")), "Select * from Avalute", "VALUTE", "VALU_NAME"])));
  await $.mset((await $.mv((await $.v(C, "PropertiesForm")), "Combo_valute")), "ItemIndex", 0);
  if ($.truthy($.eq((await $.mv((await $.mv((await $.v(C, "DataMod")), "TransTypeCode")), "Active")), false))) {
    await $.mcall((await $.mv((await $.v(C, "DataMod")), "TransTypeCode")), "Open", []);
  }
  if ($.truthy($.eq((await $.mv((await $.mv((await $.v(C, "DataMod")), "Account_data")), "Active")), false))) {
    await $.mcall((await $.mv((await $.v(C, "DataMod")), "Account_data")), "Open", []);
  }
  if ($.truthy($.eq((await $.mv((await $.mv((await $.v(C, "PropertiesForm")), "Commision")), "Active")), false))) {
    await $.mcall((await $.mv((await $.v(C, "PropertiesForm")), "Commision")), "Open", []);
  }
  await $.mcall((await $.mv((await $.v(C, "PropertiesForm")), "ForAll")), "Close", []);
  await $.mcall((await $.mv((await $.mv((await $.v(C, "PropertiesForm")), "ForAll")), "SQL")), "Clear", []);
  await $.stmt((await $.mcall((await $.mv((await $.mv((await $.v(C, "PropertiesForm")), "ForAll")), "SQL")), "Add", ["Select * from hoxsw_proper"])));
  await $.mcall((await $.mv((await $.v(C, "PropertiesForm")), "ForAll")), "Open", []);
  await $.mset((await $.mv((await $.v(C, "PropertiesForm")), "Edit_swift")), "Text", (await $.mv((await $.mcall((await $.mv((await $.v(C, "PropertiesForm")), "forall")), "fieldbyname", ["swiftaccount"])), "asstring")));
  await $.mset((await $.mv((await $.v(C, "PropertiesForm")), "Edit_hox")), "Text", (await $.mv((await $.mcall((await $.mv((await $.v(C, "PropertiesForm")), "forall")), "fieldbyname", ["hoxaccount"])), "asstring")));
  await $.mset((await $.mv((await $.v(C, "PropertiesForm")), "Edit_limit")), "Text", (await $.mv((await $.mcall((await $.mv((await $.v(C, "PropertiesForm")), "forall")), "fieldbyname", ["hoxamount_limit"])), "asstring")));
  await $.mset((await $.mv((await $.v(C, "PropertiesForm")), "Edit_IN_Dir")), "Text", (await $.mv((await $.mcall((await $.mv((await $.v(C, "PropertiesForm")), "forall")), "fieldbyname", ["hox_in_dir"])), "asstring")));
  await $.mset((await $.mv((await $.v(C, "PropertiesForm")), "Edit_out_dir")), "Text", (await $.mv((await $.mcall((await $.mv((await $.v(C, "PropertiesForm")), "forall")), "fieldbyname", ["hox_out_dir"])), "asstring")));
  await $.mset((await $.mv((await $.v(C, "PropertiesForm")), "Edit_swIN")), "Text", (await $.mv((await $.mcall((await $.mv((await $.v(C, "PropertiesForm")), "forall")), "fieldbyname", ["sw_in_dir"])), "asstring")));
  await $.mset((await $.mv((await $.v(C, "PropertiesForm")), "Edit_swOUT")), "Text", (await $.mv((await $.mcall((await $.mv((await $.v(C, "PropertiesForm")), "forall")), "fieldbyname", ["sw_out_dir"])), "asstring")));
  await $.stmt((await $.mcall((await $.mv((await $.v(C, "PropertiesForm")), "Commision")), "Locate", ["id", (await $.mv((await $.mcall((await $.mv((await $.v(C, "PropertiesForm")), "forall")), "fieldbyname", ["transtypeid"])), "AsInteger")), []])));
  await $.mcall((await $.v(C, "PropertiesForm")), "ShowModal", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TSwift_Form", "ToolButton11Click", async function ToolButton11Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "i": 0, "stdate": 0, "enddate": 0};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.eq((await $.mv((await $.mv((await $.v(C, "DataMod")), "Hox102_out")), "RecordCount")), 0))) {
    return L0.result;
  }
  if ($.truthy($.eq((await $.mv((await $.mv((await $.v(C, "DataMod")), "BankInfo")), "Active")), false))) {
    await $.mcall((await $.mv((await $.v(C, "DataMod")), "BankInfo")), "Open", []);
  }
  await $.mset((await $.mv((await $.v(C, "PrepareFile_Form")), "Edit_sender")), "Text", $.add((await $.mv((await $.mcall((await $.mv((await $.v(C, "DataMod")), "BankInfo")), "FieldByName", ["SWIFT"])), "AsString")), "AXXX"));
  await $.mcall((await $.mv((await $.v(C, "PrepareFile_Form")), "Edit_reference")), "Clear", []);
  await $.mset((await $.mv((await $.v(C, "PrepareFile_Form")), "Edit_count")), "Text", "0");
  await $.mset((await $.mv((await $.v(C, "PrepareFile_Form")), "CurrencyEdit1")), "Text", "0");
  L0["stdate"] = (await $.call(C, "trunc", [(await $.mv((await $.mv((await $.v(C, "Swift_Form")), "StDate")), "DateTime"))]));
  L0["enddate"] = (await $.call(C, "trunc", [(await $.mv((await $.mv((await $.v(C, "Swift_Form")), "EndDate")), "DateTime"))]));
  await $.stmt((await $.mcall((await $.mv((await $.v(C, "PrepareFile_Form")), "NoSend")), "SetVariable", ["BeginDate", L0["stdate"]])));
  await $.stmt((await $.mcall((await $.mv((await $.v(C, "PrepareFile_Form")), "NoSend")), "SetVariable", ["EndDate", L0["enddate"]])));
  await $.stmt((await $.mcall((await $.mv((await $.v(C, "PrepareFile_Form")), "ToSend")), "SetVariable", ["BeginDate", L0["stdate"]])));
  await $.stmt((await $.mcall((await $.mv((await $.v(C, "PrepareFile_Form")), "ToSend")), "SetVariable", ["EndDate", L0["enddate"]])));
  if ($.truthy($.eq((await $.mv((await $.mv((await $.v(C, "PrepareFile_Form")), "NoSend")), "Active")), false))) {
    await $.mcall((await $.mv((await $.v(C, "PrepareFile_Form")), "NoSend")), "Open", []);
  } else {
    await $.mcall((await $.mv((await $.v(C, "PrepareFile_Form")), "NoSend")), "Refresh", []);
  }
  if ($.truthy($.eq((await $.mv((await $.mv((await $.v(C, "PrepareFile_Form")), "ToSend")), "Active")), false))) {
    await $.mcall((await $.mv((await $.v(C, "PrepareFile_Form")), "ToSend")), "Open", []);
  } else {
    await $.mcall((await $.mv((await $.v(C, "PrepareFile_Form")), "ToSend")), "Refresh", []);
  }
  await $.mcall((await $.v(C, "PrepareFile_Form")), "ShowModal", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TSwift_Form", "ToolButton5Click", async function ToolButton5Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mset((await $.mv((await $.v(C, "SendFileForm")), "DateTimePicker1")), "Date", (await $.v(C, "date")));
  await $.mset((await $.mv((await $.v(C, "SendFileForm")), "DateTimePicker2")), "Date", (await $.v(C, "date")));
  await $.mcall((await $.v(C, "SendFileForm")), "RefDate", []);
  await $.mcall((await $.v(C, "SendFileForm")), "ShowModal", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TSwift_Form", "ToolButton12Click", async function ToolButton12Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "i": 0, "ref": ''};
  await $.fixArgs(L0, ["sender"]);
  await $.mcall((await $.v(C, "Info_ListBox")), "Clear", []);
  { const $t6 = $.sub((await $.mv((await $.mv((await $.v(C, "FileList_IN")), "Items")), "Count")), 1);
    L0["i"] = 0;
    let $t7 = true;
    for (;;) {
      if (!$t7) { L0["i"] = $.succ(L0["i"], 1); }
      $t7 = false;
      if (!($.ord(L0["i"]) <= $.ord($t6))) break;
      L0["ref"] = (await $.call(C, "LoadToRich", [(await $.idx((await $.mv((await $.v(C, "FileList_IN")), "Items")), [L0["i"]]))]));
      if ($.truthy($.ne(L0["ref"], "0"))) {
        await $.mcall((await $.mv((await $.v(C, "DataMod")), "HoxMessages_IN")), "Open", []);
        await $.stmt((await $.call(C, "ConvertToBase", [(await $.v(C, "RichEdit1")), L0["ref"]])));
      } else {
        await $.mcall((await $.v(C, "Panel_info")), "Show", []);
        await $.stmt((await $.mcall((await $.mv((await $.v(C, "Info_ListBox")), "Items")), "Add", [$.add($.add("ERROR:  <", (await $.idx((await $.mv((await $.v(C, "FileList_IN")), "Items")), [L0["i"]]))), ">   Artıq konvert olunub !")])));
      }
      await $.tick();
    }
  }
  await $.mcall((await $.mv((await $.v(C, "DataMod")), "HoxMessages_IN_view")), "Refresh", []);
  await $.mcall((await $.mv((await $.v(C, "Grid_in")), "SelectedRows")), "Clear", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TSwift_Form", "ToolButton15Click", async function ToolButton15Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mcall((await $.v(C, "FileList_IN")), "Update", []);
  await $.stmt($.call(C, "Refresh_mess_in", []));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TSwift_Form", "Clear1Click", async function Clear1Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mcall((await $.mv((await $.v(C, "Info_ListBox")), "Items")), "Clear", []);
  await $.mcall((await $.v(C, "Panel_info")), "Hide", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TSwift_Form", "Grid_inDblClick", async function Grid_inDblClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.eq((await $.mv((await $.mv((await $.mv((await $.v(C, "Grid_in")), "DataSource")), "DataSet")), "RecordCount")), 0))) {
    return L0.result;
  }
  if ($.truthy($.eq((await $.mv((await $.mv((await $.v(C, "DataMod")), "Account_data")), "Active")), false))) {
    await $.mcall((await $.mv((await $.v(C, "DataMod")), "Account_data")), "Open", []);
  }
  await $.mcall((await $.v(C, "RecMessDet_form")), "showmodal", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TSwift_Form", "Popup_SingleConcertPopup", async function Popup_SingleConcertPopup(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy((await $.or_(($.eq((await $.mv((await $.mv(((await $.mv((await $.v(C, "Popup_SingleConcert")), "PopupComponent"))), "Items")), "Count")), 0)), async () => ($.eq((await $.mv(((await $.mv((await $.v(C, "Popup_SingleConcert")), "PopupComponent"))), "ItemIndex")), (-(1)))))))) {
    await $.mset((await $.idx((await $.mv((await $.v(C, "Popup_SingleConcert")), "Items")), [0])), "Enabled", false);
  } else {
    await $.mset((await $.idx((await $.mv((await $.v(C, "Popup_SingleConcert")), "Items")), [0])), "Enabled", true);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TSwift_Form", "Convert1Click", async function Convert1Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "ref": ''};
  await $.fixArgs(L0, ["sender"]);
  await $.mcall((await $.v(C, "Info_ListBox")), "Clear", []);
  L0["ref"] = (await $.call(C, "LoadToRich", [(await $.idx((await $.mv((await $.v(C, "FileList_IN")), "Items")), [(await $.mv((await $.v(C, "FileList_IN")), "itemindex"))]))]));
  if ($.truthy($.ne(L0["ref"], "0"))) {
    await $.mcall((await $.mv((await $.v(C, "DataMod")), "HoxMessages_IN")), "Open", []);
    await $.stmt((await $.call(C, "ConvertToBase", [(await $.v(C, "RichEdit1")), L0["ref"]])));
  } else {
    await $.mcall((await $.v(C, "Panel_info")), "Show", []);
    await $.stmt((await $.mcall((await $.mv((await $.v(C, "Info_ListBox")), "Items")), "Add", [$.add($.add("ERROR:  <", (await $.idx((await $.mv((await $.v(C, "FileList_IN")), "Items")), [(await $.mv((await $.v(C, "FileList_IN")), "itemindex"))]))), ">   Artıq konvert olunub !")])));
  }
  await $.mcall((await $.mv((await $.v(C, "DataMod")), "HoxMessages_IN_view")), "Refresh", []);
  await $.mcall((await $.mv((await $.v(C, "Grid_in")), "SelectedRows")), "Clear", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TSwift_Form", "Grid_inKeyUp", async function Grid_inKeyUp(Self, p0, p1, p2) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "key": $.asRef(p1), "shift": $.copyArg(p2), result: undefined};
  await $.fixArgs(L0, ["sender", "shift"]);
  if ($.truthy($.eq((await L0["key"].get()), (await $.v(C, "Vk_delete"))))) {
    await $.mcall((await $.v(C, "Delete_mess_in")), "Execute", []);
  }
  return L0.result;
}, {"params": ["Sender", "Key", "Shift"], "kind": "procedure", "ptypes": ["TObject", "Word", "TShiftState"]});
  U.method("TSwift_Form", "Delete_mess_inExecute", async function Delete_mess_inExecute(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "i": 0, "j": 0};
  await $.fixArgs(L0, ["sender"]);
  await $.mcall((await $.v(C, "Grid_in")), "SetFocus", []);
  { const $t8 = $.sub((await $.mv((await $.mv((await $.v(C, "Grid_in")), "SelectedRows")), "Count")), 1);
    L0["i"] = 0;
    let $t9 = true;
    for (;;) {
      if (!$t9) { L0["i"] = $.succ(L0["i"], 1); }
      $t9 = false;
      if (!($.ord(L0["i"]) <= $.ord($t8))) break;
      await $.stmt((await $.mcall((await $.mv((await $.mv((await $.v(C, "Grid_in")), "DataSource")), "DataSet")), "GotoBookmark", [(await $.call(C, "pointer", [(await $.idx((await $.mv((await $.mv((await $.v(C, "Grid_in")), "SelectedRows")), "items")), [L0["i"]]))]))])));
      { const $t10 = (await $.call(C, "MessageDlg", [$.add($.add("Emeliyyat #", (await $.mv((await $.mcall((await $.mv((await $.v(C, "DataMod")), "HoxMessages_IN_view")), "fieldbyname", ["id"])), "AsString"))), " silinsizmi ?"), (await $.v(C, "mtConfirmation")), [(await $.v(C, "mbyes")), (await $.v(C, "mbno")), (await $.v(C, "mbcancel")), (await $.v(C, "mball"))], 0]));
        if ($.eq($t10, (await $.v(C, "mryes")))) {
          await $.stmt((await $.mcall((await $.mv((await $.v(C, "DataMod")), "DEL")), "CallProcedure", ["DEL_MESS_IN", [(await $.mv((await $.mcall((await $.mv((await $.mv((await $.v(C, "Grid_in")), "DataSource")), "DataSet")), "fieldbyname", ["ID"])), "asinteger"))]])));
          await $.mcall((await $.mv((await $.mv((await $.v(C, "Grid_in")), "DataSource")), "DataSet")), "Refresh", []);
          await $.mcall((await $.mv((await $.v(C, "Grid_in")), "SelectedRows")), "Clear", []);
        }
        else if ($.eq($t10, (await $.v(C, "mrno")))) {
          return L0.result;
        }
        else if ($.eq($t10, (await $.v(C, "mrcancel")))) {
          break;
        }
        else if ($.eq($t10, (await $.v(C, "mrall")))) {
          { const $t11 = (await $.call(C, "MessageDlg", [$.add((await $.call(C, "inttostr", [(await $.mv((await $.mv((await $.v(C, "Grid_in")), "SelectedRows")), "Count"))])), " sayda emeliyat silinsinmi ?"), (await $.v(C, "mtConfirmation")), [(await $.v(C, "mbyes")), (await $.v(C, "mbno"))], 0]));
            if ($.eq($t11, (await $.v(C, "mryes")))) {
              { const $t12 = $.sub((await $.mv((await $.mv((await $.v(C, "Grid_in")), "SelectedRows")), "Count")), 1);
                L0["j"] = 0;
                let $t13 = true;
                for (;;) {
                  if (!$t13) { L0["j"] = $.succ(L0["j"], 1); }
                  $t13 = false;
                  if (!($.ord(L0["j"]) <= $.ord($t12))) break;
                  await $.stmt((await $.mcall((await $.mv((await $.mv((await $.v(C, "Grid_in")), "DataSource")), "DataSet")), "GotoBookmark", [(await $.call(C, "pointer", [(await $.idx((await $.mv((await $.mv((await $.v(C, "Grid_in")), "SelectedRows")), "items")), [L0["j"]]))]))])));
                  await $.stmt((await $.mcall((await $.mv((await $.v(C, "DataMod")), "DEL")), "CallProcedure", ["DEL_MESS_IN", [(await $.mv((await $.mcall((await $.mv((await $.mv((await $.v(C, "Grid_in")), "DataSource")), "DataSet")), "fieldbyname", ["ID"])), "asinteger"))]])));
                  await $.tick();
                }
              }
              await $.mcall((await $.mv((await $.mv((await $.v(C, "Grid_in")), "DataSource")), "DataSet")), "Refresh", []);
              await $.mcall((await $.mv((await $.v(C, "Grid_in")), "SelectedRows")), "Clear", []);
              break;
            }
            else if ($.eq($t11, (await $.v(C, "mrno")))) {
              return L0.result;
            }
          }
        }
      }
      await $.tick();
    }
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TSwift_Form", "ToolButton14Click", async function ToolButton14Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mcall((await $.v(C, "Delete_mess_in")), "Execute", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TSwift_Form", "Delete_mt102Execute", async function Delete_mt102Execute(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "i": 0, "j": 0};
  await $.fixArgs(L0, ["sender"]);
  await $.mcall((await $.v(C, "GridMT102")), "SetFocus", []);
  { const $t14 = $.sub((await $.mv((await $.mv((await $.v(C, "GridMT102")), "SelectedRows")), "Count")), 1);
    L0["i"] = 0;
    let $t15 = true;
    for (;;) {
      if (!$t15) { L0["i"] = $.succ(L0["i"], 1); }
      $t15 = false;
      if (!($.ord(L0["i"]) <= $.ord($t14))) break;
      await $.stmt((await $.mcall((await $.mv((await $.mv((await $.v(C, "GridMT102")), "DataSource")), "DataSet")), "GotoBookmark", [(await $.call(C, "pointer", [(await $.idx((await $.mv((await $.mv((await $.v(C, "GridMT102")), "SelectedRows")), "items")), [L0["i"]]))]))])));
      { const $t16 = (await $.call(C, "MessageDlg", [$.add($.add("Emeliyyat grupu #", (await $.mv((await $.mcall((await $.mv((await $.v(C, "DataMod")), "Hox102_out")), "fieldbyname", ["id"])), "AsString"))), " silinsinmi ?"), (await $.v(C, "mtConfirmation")), [(await $.v(C, "mbyes")), (await $.v(C, "mbno")), (await $.v(C, "mbcancel")), (await $.v(C, "mball"))], 0]));
        if ($.eq($t16, (await $.v(C, "mryes")))) {
          await $.stmt((await $.mcall((await $.mv((await $.v(C, "DataMod")), "DEL")), "CallProcedure", ["DEL_MT102_OUT", [(await $.mv((await $.mcall((await $.mv((await $.mv((await $.v(C, "GridMT102")), "DataSource")), "DataSet")), "fieldbyname", ["ID"])), "asinteger"))]])));
          await $.stmt($.call(C, "RefreshDATA", []));
        }
        else if ($.eq($t16, (await $.v(C, "mrno")))) {
          return L0.result;
        }
        else if ($.eq($t16, (await $.v(C, "mrcancel")))) {
          break;
        }
        else if ($.eq($t16, (await $.v(C, "mrall")))) {
          { const $t17 = (await $.call(C, "MessageDlg", [$.add((await $.call(C, "inttostr", [(await $.mv((await $.mv((await $.v(C, "GridMT102")), "SelectedRows")), "Count"))])), " sayda emeliyyat silinsinmi ?"), (await $.v(C, "mtConfirmation")), [(await $.v(C, "mbyes")), (await $.v(C, "mbno"))], 0]));
            if ($.eq($t17, (await $.v(C, "mryes")))) {
              { const $t18 = $.sub((await $.mv((await $.mv((await $.v(C, "GridMT102")), "SelectedRows")), "Count")), 1);
                L0["j"] = 0;
                let $t19 = true;
                for (;;) {
                  if (!$t19) { L0["j"] = $.succ(L0["j"], 1); }
                  $t19 = false;
                  if (!($.ord(L0["j"]) <= $.ord($t18))) break;
                  await $.stmt((await $.mcall((await $.mv((await $.mv((await $.v(C, "GridMT102")), "DataSource")), "DataSet")), "GotoBookmark", [(await $.call(C, "pointer", [(await $.idx((await $.mv((await $.mv((await $.v(C, "GridMT102")), "SelectedRows")), "items")), [L0["j"]]))]))])));
                  await $.stmt((await $.mcall((await $.mv((await $.v(C, "DataMod")), "DEL")), "CallProcedure", ["DEL_MT102_OUT", [(await $.mv((await $.mcall((await $.mv((await $.mv((await $.v(C, "GridMT102")), "DataSource")), "DataSet")), "fieldbyname", ["ID"])), "asinteger"))]])));
                  await $.tick();
                }
              }
              await $.stmt($.call(C, "RefreshDATA", []));
              break;
            }
            else if ($.eq($t17, (await $.v(C, "mrno")))) {
              return L0.result;
            }
          }
        }
      }
      await $.tick();
    }
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TSwift_Form", "delete_mess_outExecute", async function delete_mess_outExecute(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "i": 0, "j": 0};
  await $.fixArgs(L0, ["sender"]);
  await $.mcall((await $.v(C, "BrowseGrid")), "SetFocus", []);
  { const $t20 = $.sub((await $.mv((await $.mv((await $.v(C, "BrowseGrid")), "SelectedRows")), "Count")), 1);
    L0["i"] = 0;
    let $t21 = true;
    for (;;) {
      if (!$t21) { L0["i"] = $.succ(L0["i"], 1); }
      $t21 = false;
      if (!($.ord(L0["i"]) <= $.ord($t20))) break;
      await $.stmt((await $.mcall((await $.mv((await $.mv((await $.v(C, "BrowseGrid")), "DataSource")), "DataSet")), "GotoBookmark", [(await $.call(C, "pointer", [(await $.idx((await $.mv((await $.mv((await $.v(C, "BrowseGrid")), "SelectedRows")), "items")), [L0["i"]]))]))])));
      { const $t22 = (await $.call(C, "MessageDlg", [$.add($.add("Emeliyyat #", (await $.mv((await $.mcall((await $.mv((await $.v(C, "DataMod")), "HoxMessages_out")), "fieldbyname", ["id"])), "AsString"))), " silinsizmi ?"), (await $.v(C, "mtConfirmation")), [(await $.v(C, "mbyes")), (await $.v(C, "mbno")), (await $.v(C, "mbcancel")), (await $.v(C, "mball"))], 0]));
        if ($.eq($t22, (await $.v(C, "mryes")))) {
          await $.stmt((await $.mcall((await $.mv((await $.v(C, "DataMod")), "DEL")), "CallProcedure", ["DEL_MESS_OUT", [(await $.mv((await $.mcall((await $.mv((await $.mv((await $.v(C, "BrowseGrid")), "DataSource")), "DataSet")), "fieldbyname", ["ID"])), "asinteger"))]])));
          await $.stmt((await $.mcall((await $.mv((await $.v(C, "DataMod")), "INS")), "Callprocedure", ["UPD_HOX102_AMOUNT", [(await $.mv((await $.mcall((await $.mv((await $.v(C, "DataMod")), "Hox102_out")), "fieldbyname", ["ID"])), "asinteger"))]])));
          await $.mcall((await $.v(C, "Swift_Form")), "RefreshDATA", []);
        }
        else if ($.eq($t22, (await $.v(C, "mrno")))) {
          return L0.result;
        }
        else if ($.eq($t22, (await $.v(C, "mrcancel")))) {
          break;
        }
        else if ($.eq($t22, (await $.v(C, "mrall")))) {
          { const $t23 = (await $.call(C, "MessageDlg", [$.add((await $.call(C, "inttostr", [(await $.mv((await $.mv((await $.v(C, "BrowseGrid")), "SelectedRows")), "Count"))])), " sayda emeliyat silinsinmi ?"), (await $.v(C, "mtConfirmation")), [(await $.v(C, "mbyes")), (await $.v(C, "mbno"))], 0]));
            if ($.eq($t23, (await $.v(C, "mryes")))) {
              { const $t24 = $.sub((await $.mv((await $.mv((await $.v(C, "BrowseGrid")), "SelectedRows")), "Count")), 1);
                L0["j"] = 0;
                let $t25 = true;
                for (;;) {
                  if (!$t25) { L0["j"] = $.succ(L0["j"], 1); }
                  $t25 = false;
                  if (!($.ord(L0["j"]) <= $.ord($t24))) break;
                  await $.stmt((await $.mcall((await $.mv((await $.mv((await $.v(C, "BrowseGrid")), "DataSource")), "DataSet")), "GotoBookmark", [(await $.call(C, "pointer", [(await $.idx((await $.mv((await $.mv((await $.v(C, "BrowseGrid")), "SelectedRows")), "items")), [L0["j"]]))]))])));
                  await $.stmt((await $.mcall((await $.mv((await $.v(C, "DataMod")), "DEL")), "CallProcedure", ["DEL_MESS_OUT", [(await $.mv((await $.mcall((await $.mv((await $.mv((await $.v(C, "BrowseGrid")), "DataSource")), "DataSet")), "fieldbyname", ["ID"])), "asinteger"))]])));
                  await $.tick();
                }
              }
              await $.stmt((await $.mcall((await $.mv((await $.v(C, "DataMod")), "INS")), "Callprocedure", ["UPD_HOX102_AMOUNT", [(await $.mv((await $.mcall((await $.mv((await $.v(C, "DataMod")), "Hox102_out")), "fieldbyname", ["ID"])), "asinteger"))]])));
              await $.mcall((await $.v(C, "Swift_Form")), "RefreshDATA", []);
              break;
            }
            else if ($.eq($t23, (await $.v(C, "mrno")))) {
              return L0.result;
            }
          }
        }
      }
      await $.tick();
    }
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TSwift_Form", "ToolButton9Click", async function ToolButton9Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mcall((await $.v(C, "Delete_mt102")), "Execute", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TSwift_Form", "GridMT102KeyUp", async function GridMT102KeyUp(Self, p0, p1, p2) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "key": $.asRef(p1), "shift": $.copyArg(p2), result: undefined};
  await $.fixArgs(L0, ["sender", "shift"]);
  if ($.truthy($.eq((await L0["key"].get()), (await $.v(C, "vk_delete"))))) {
    await $.mcall((await $.v(C, "Delete_mt102")), "Execute", []);
  }
  return L0.result;
}, {"params": ["Sender", "Key", "Shift"], "kind": "procedure", "ptypes": ["TObject", "Word", "TShiftState"]});
  U.method("TSwift_Form", "BrowseGridKeyUp", async function BrowseGridKeyUp(Self, p0, p1, p2) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "key": $.asRef(p1), "shift": $.copyArg(p2), result: undefined};
  await $.fixArgs(L0, ["sender", "shift"]);
  if ($.truthy($.eq((await L0["key"].get()), (await $.v(C, "vk_delete"))))) {
    await $.mcall((await $.v(C, "delete_mess_out")), "Execute", []);
  }
  return L0.result;
}, {"params": ["Sender", "Key", "Shift"], "kind": "procedure", "ptypes": ["TObject", "Word", "TShiftState"]});
  U.method("TSwift_Form", "Gridin_SelAllExecute", async function Gridin_SelAllExecute(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t26 = (await $.v(C, "Grid_in"));
    const $t27 = (await $.wv([$t26], "SelectedRows", C, false));
    const $t28 = (await $.mv((await $.wv([$t26, $t27], "DataSource", C, false)), "DataSet"));
    await $.stmt($.wcall([$t26, $t27, $t28], "DisableControls", [], C));
    try {
      await $.stmt($.wcall([$t26, $t27, $t28], "First", [], C));
      while ($.truthy($.not((await $.wv([$t26, $t27, $t28], "Eof", C, false))))) {
        await $.wset([$t26, $t27, $t28], "CurrentRowSelected", (await $.wv([$t26, $t27, $t28], "True", C, false)), C);
        await $.stmt($.wcall([$t26, $t27, $t28], "Next", [], C));
        await $.tick();
      }
    } finally {
      await $.stmt($.wcall([$t26, $t27, $t28], "EnableControls", [], C));
    }
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TSwift_Form", "ToolButton16Click", async function ToolButton16Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "i": 0};
  await $.fixArgs(L0, ["sender"]);
  { const $t29 = $.sub((await $.mv((await $.mv((await $.v(C, "Grid_in")), "SelectedRows")), "Count")), 1);
    L0["i"] = 0;
    let $t30 = true;
    for (;;) {
      if (!$t30) { L0["i"] = $.succ(L0["i"], 1); }
      $t30 = false;
      if (!($.ord(L0["i"]) <= $.ord($t29))) break;
      if ($.truthy($.eq((await $.mv((await $.mcall((await $.mv((await $.v(C, "DataMod")), "HoxMessages_IN_view")), "FieldByName", ["status"])), "AsInteger")), 1))) {
        continue;
      }
      await $.stmt((await $.mcall((await $.mv((await $.mv((await $.v(C, "Grid_in")), "DataSource")), "DataSet")), "GotoBookmark", [(await $.call(C, "pointer", [(await $.idx((await $.mv((await $.mv((await $.v(C, "Grid_in")), "SelectedRows")), "items")), [L0["i"]]))]))])));
      await $.stmt((await $.mcall((await $.mv((await $.v(C, "DataMod")), "Ins")), "callprocedure", ["ParentAndChildTransForIN", [(await $.mv((await $.mcall((await $.mv((await $.v(C, "DataMod")), "HoxMessages_IN_view")), "fieldbyname", ["ID"])), "ASinteger"))]])));
      await $.tick();
    }
  }
  await $.mcall((await $.v(C, "FileList_IN")), "Update", []);
  await $.stmt($.call(C, "RefreshMessinWithPos", []));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  return U;
}
