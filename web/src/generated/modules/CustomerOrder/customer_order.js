// Generated from customer_order.pas by pas2js — do not edit by hand; regenerate instead.
/* eslint-disable */
// @ts-nocheck

export default function define($) {
  const U = $.unit("customer_order", ["Windows", "Messages", "SysUtils", "Classes", "Graphics", "Controls", "Forms", "Dialogs", "ActiveX", "AxCtrls", "customer_order__TLB", "StdVcl", "Buttons", "StdCtrls", "OracleData", "Db", "Grids", "DBGrids", "NLSDialogs", "NLSLocalizer", "ComCtrls", "Menus", "ImgList", "ExtCtrls", "ComObj", "ComServ", "sboapiDataModuleImpl", "datamodule", "customers_orders_arest__", "all_orders__", "arxiv_orders__", "m_edit_order___", "q_report"]);
  const C = [U];
  U.defClass("Tcustomers_orders", "TActiveForm", {"groupbox3": {"name": "GroupBox3", "type": "TGroupBox"}, "dbgrid1": {"name": "DBGrid1", "type": "TDBGrid"}, "groupbox7": {"name": "GroupBox7", "type": "TGroupBox"}, "noedit": {"name": "noedit", "type": "TEdit"}, "innedit": {"name": "innEdit", "type": "TEdit"}, "nameedit": {"name": "nameEdit", "type": "TEdit"}, "open_datedit": {"name": "open_datEdit", "type": "TEdit"}, "groupbox1": {"name": "GroupBox1", "type": "TGroupBox"}, "speedbutton1": {"name": "SpeedButton1", "type": "TSpeedButton"}, "speedbutton2": {"name": "SpeedButton2", "type": "TSpeedButton"}, "speedbutton3": {"name": "SpeedButton3", "type": "TSpeedButton"}, "groupbox4": {"name": "GroupBox4", "type": "TGroupBox"}, "dbgrid2": {"name": "DBGrid2", "type": "TDBGrid"}, "customers": {"name": "customers", "type": "TPopupMenu"}, "ins": {"name": "ins", "type": "TMenuItem"}, "refresh": {"name": "refresh", "type": "TMenuItem"}, "orders": {"name": "orders", "type": "TPopupMenu"}, "edit": {"name": "edit", "type": "TMenuItem"}, "sil1": {"name": "Sil1", "type": "TMenuItem"}, "print": {"name": "Print", "type": "TMenuItem"}, "speedbutton4": {"name": "SpeedButton4", "type": "TSpeedButton"}, "nlslocalizer1": {"name": "NLSLocalizer1", "type": "TNLSLocalizer"}, "imagelist": {"name": "ImageList", "type": "TImageList"}, "panel1": {"name": "Panel1", "type": "TPanel"}, "speedbutton9": {"name": "SpeedButton9", "type": "TSpeedButton"}, "speedbutton10": {"name": "SpeedButton10", "type": "TSpeedButton"}, "btnprint": {"name": "BtnPrint", "type": "TSpeedButton"}, "fevents": {"name": "FEvents", "type": "IActiveFormXEvents"}}, {});
  U.init(async () => {
  });
  U.method("Tcustomers_orders", "DefinePropertyPages", async function DefinePropertyPages(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"definepropertypage": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["definepropertypage"]);
  return L0.result;
}, {"params": ["DefinePropertyPage"], "kind": "procedure", "ptypes": ["TDefinePropertyPage"]});
  U.method("Tcustomers_orders", "EventSinkChanged", async function EventSinkChanged(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"eventsink": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["eventsink"]);
  await $.set(C, "FEvents", L0["eventsink"]);
  return L0.result;
}, {"params": ["EventSink"], "kind": "procedure", "ptypes": ["IUnknown"]});
  U.method("Tcustomers_orders", "Initialize", async function Initialize(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: undefined};
  await $.inherited(Self, "Tcustomers_orders", "Initialize", null, arguments);
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
  U.method("Tcustomers_orders", "Get_Active", async function Get_Active(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: false};
  L0["result"] = (await $.v(C, "Active"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("Tcustomers_orders", "Get_AutoScroll", async function Get_AutoScroll(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: false};
  L0["result"] = (await $.v(C, "AutoScroll"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("Tcustomers_orders", "Get_AutoSize", async function Get_AutoSize(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: false};
  L0["result"] = (await $.v(C, "AutoSize"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("Tcustomers_orders", "Get_AxBorderStyle", async function Get_AxBorderStyle(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: null};
  L0["result"] = (await $.call(C, "Ord", [(await $.v(C, "AxBorderStyle"))]));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("Tcustomers_orders", "Get_Caption", async function Get_Caption(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: ''};
  L0["result"] = (await $.call(C, "WideString", [(await $.v(C, "Caption"))]));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("Tcustomers_orders", "Get_Color", async function Get_Color(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: null};
  L0["result"] = (await $.call(C, "OLE_COLOR", [(await $.v(C, "Color"))]));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("Tcustomers_orders", "Get_Cursor", async function Get_Cursor(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: 0};
  L0["result"] = (await $.call(C, "Smallint", [(await $.v(C, "Cursor"))]));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("Tcustomers_orders", "Get_DoubleBuffered", async function Get_DoubleBuffered(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: false};
  L0["result"] = (await $.v(C, "DoubleBuffered"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("Tcustomers_orders", "Get_DropTarget", async function Get_DropTarget(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: false};
  L0["result"] = (await $.v(C, "DropTarget"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("Tcustomers_orders", "Get_Enabled", async function Get_Enabled(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: false};
  L0["result"] = (await $.v(C, "Enabled"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("Tcustomers_orders", "Get_Font", async function Get_Font(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: null};
  await $.stmt((await $.call(C, "GetOleFont", [(await $.v(C, "Font")), L0["result"]])));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("Tcustomers_orders", "Get_HelpFile", async function Get_HelpFile(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: ''};
  L0["result"] = (await $.call(C, "WideString", [(await $.v(C, "HelpFile"))]));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("Tcustomers_orders", "Get_KeyPreview", async function Get_KeyPreview(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: false};
  L0["result"] = (await $.v(C, "KeyPreview"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("Tcustomers_orders", "Get_PixelsPerInch", async function Get_PixelsPerInch(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: 0};
  L0["result"] = (await $.v(C, "PixelsPerInch"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("Tcustomers_orders", "Get_PrintScale", async function Get_PrintScale(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: null};
  L0["result"] = (await $.call(C, "Ord", [(await $.v(C, "PrintScale"))]));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("Tcustomers_orders", "Get_Scaled", async function Get_Scaled(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: false};
  L0["result"] = (await $.v(C, "Scaled"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("Tcustomers_orders", "Get_Visible", async function Get_Visible(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: false};
  L0["result"] = (await $.v(C, "Visible"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("Tcustomers_orders", "Get_VisibleDockClientCount", async function Get_VisibleDockClientCount(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: 0};
  L0["result"] = (await $.v(C, "VisibleDockClientCount"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("Tcustomers_orders", "_Set_Font", async function _Set_Font(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.stmt((await $.call(C, "SetOleFont", [(await $.v(C, "Font")), L0["value"]])));
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["IFontDisp"]});
  U.method("Tcustomers_orders", "ActivateEvent", async function ActivateEvent(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.ne((await $.v(C, "FEvents")), null))) {
    await $.mcall((await $.v(C, "FEvents")), "OnActivate", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("Tcustomers_orders", "ClickEvent", async function ClickEvent(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.ne((await $.v(C, "FEvents")), null))) {
    await $.mcall((await $.v(C, "FEvents")), "OnClick", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("Tcustomers_orders", "CreateEvent", async function CreateEvent(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.ne((await $.v(C, "FEvents")), null))) {
    await $.mcall((await $.v(C, "FEvents")), "OnCreate", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("Tcustomers_orders", "DblClickEvent", async function DblClickEvent(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.ne((await $.v(C, "FEvents")), null))) {
    await $.mcall((await $.v(C, "FEvents")), "OnDblClick", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("Tcustomers_orders", "DeactivateEvent", async function DeactivateEvent(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.ne((await $.v(C, "FEvents")), null))) {
    await $.mcall((await $.v(C, "FEvents")), "OnDeactivate", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("Tcustomers_orders", "DestroyEvent", async function DestroyEvent(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.ne((await $.v(C, "FEvents")), null))) {
    await $.mcall((await $.v(C, "FEvents")), "OnDestroy", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("Tcustomers_orders", "KeyPressEvent", async function KeyPressEvent(Self, p0, p1) {
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
  U.method("Tcustomers_orders", "PaintEvent", async function PaintEvent(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.ne((await $.v(C, "FEvents")), null))) {
    await $.mcall((await $.v(C, "FEvents")), "OnPaint", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("Tcustomers_orders", "Set_AutoScroll", async function Set_AutoScroll(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "AutoScroll", L0["value"]);
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["WordBool"]});
  U.method("Tcustomers_orders", "Set_AutoSize", async function Set_AutoSize(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "AutoSize", L0["value"]);
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["WordBool"]});
  U.method("Tcustomers_orders", "Set_AxBorderStyle", async function Set_AxBorderStyle(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "AxBorderStyle", (await $.call(C, "TActiveFormBorderStyle", [L0["value"]])));
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["TxActiveFormBorderStyle"]});
  U.method("Tcustomers_orders", "Set_Caption", async function Set_Caption(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "Caption", (await $.call(C, "TCaption", [L0["value"]])));
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["WideString"]});
  U.method("Tcustomers_orders", "Set_Color", async function Set_Color(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "Color", (await $.call(C, "TColor", [L0["value"]])));
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["OLE_COLOR"]});
  U.method("Tcustomers_orders", "Set_Cursor", async function Set_Cursor(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "Cursor", (await $.call(C, "TCursor", [L0["value"]])));
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["Smallint"]});
  U.method("Tcustomers_orders", "Set_DoubleBuffered", async function Set_DoubleBuffered(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "DoubleBuffered", L0["value"]);
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["WordBool"]});
  U.method("Tcustomers_orders", "Set_DropTarget", async function Set_DropTarget(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "DropTarget", L0["value"]);
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["WordBool"]});
  U.method("Tcustomers_orders", "Set_Enabled", async function Set_Enabled(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "Enabled", L0["value"]);
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["WordBool"]});
  U.method("Tcustomers_orders", "Set_Font", async function Set_Font(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.asRef(p0), result: undefined};
  await $.stmt((await $.call(C, "SetOleFont", [(await $.v(C, "Font")), (await L0["value"].get())])));
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["IFontDisp"]});
  U.method("Tcustomers_orders", "Set_HelpFile", async function Set_HelpFile(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "HelpFile", (await $.call(C, "String", [L0["value"]])));
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["WideString"]});
  U.method("Tcustomers_orders", "Set_KeyPreview", async function Set_KeyPreview(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "KeyPreview", L0["value"]);
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["WordBool"]});
  U.method("Tcustomers_orders", "Set_PixelsPerInch", async function Set_PixelsPerInch(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "PixelsPerInch", L0["value"]);
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["Integer"]});
  U.method("Tcustomers_orders", "Set_PrintScale", async function Set_PrintScale(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "PrintScale", (await $.call(C, "TPrintScale", [L0["value"]])));
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["TxPrintScale"]});
  U.method("Tcustomers_orders", "Set_Scaled", async function Set_Scaled(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "Scaled", L0["value"]);
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["WordBool"]});
  U.method("Tcustomers_orders", "Set_Visible", async function Set_Visible(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "Visible", L0["value"]);
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["WordBool"]});
  U.method("Tcustomers_orders", "noeditChange", async function noeditChange(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.ne((await $.mv((await $.v(C, "noedit")), "Text")), ""))) {
    await $.stmt((await $.mcall((await $.mv((await $.v(C, "DataModCustOrders")), "cust")), "Locate", ["id", (await $.mv((await $.v(C, "noedit")), "Text")), [(await $.v(C, "loCaseInsensitive")), (await $.v(C, "loPartialKey"))]])));
  }
  await $.mset((await $.v(C, "DBGrid1")), "Options", [(await $.v(C, "dgRowSelect")), (await $.v(C, "dgAlwaysShowEditor")), (await $.v(C, "dgTitles")), (await $.v(C, "dgIndicator")), (await $.v(C, "dgColumnResize")), (await $.v(C, "dgColLines")), (await $.v(C, "dgRowLines")), (await $.v(C, "dgTabs")), (await $.v(C, "dgAlwaysShowSelection")), (await $.v(C, "dgConfirmDelete")), (await $.v(C, "dgCancelOnExit")), (await $.v(C, "dgMultiSelect"))]);
  {
    const $t1 = (await $.mv((await $.v(C, "DataModCustOrders")), "Search_order"));
    await $.stmt($.wcall([$t1], "Close", [], C));
    await $.mcall((await $.wv([$t1], "SQL", C, false)), "clear", []);
    await $.stmt((await $.mcall((await $.wv([$t1], "SQL", C, false)), "add", [$.add($.add("select * from cust_order where cust_id='", (await $.mv((await $.mcall((await $.mv((await $.wv([$t1], "DataModCustOrders", C, false)), "cust")), "fieldbyname", ["id"])), "asstring"))), "' ")])));
    await $.stmt($.wcall([$t1], "Open", [], C));
    await $.stmt($.wcall([$t1], "Refresh", [], C));
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("Tcustomers_orders", "innEditChange", async function innEditChange(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.ne((await $.mv((await $.v(C, "innedit")), "Text")), ""))) {
    await $.stmt((await $.mcall((await $.mv((await $.v(C, "DataModCustOrders")), "cust")), "Locate", ["inn", (await $.mv((await $.v(C, "innedit")), "Text")), [(await $.v(C, "loCaseInsensitive")), (await $.v(C, "loPartialKey"))]])));
  }
  await $.mset((await $.v(C, "DBGrid1")), "Options", [(await $.v(C, "dgRowSelect")), (await $.v(C, "dgAlwaysShowEditor")), (await $.v(C, "dgTitles")), (await $.v(C, "dgIndicator")), (await $.v(C, "dgColumnResize")), (await $.v(C, "dgColLines")), (await $.v(C, "dgRowLines")), (await $.v(C, "dgTabs")), (await $.v(C, "dgAlwaysShowSelection")), (await $.v(C, "dgConfirmDelete")), (await $.v(C, "dgCancelOnExit")), (await $.v(C, "dgMultiSelect"))]);
  {
    const $t2 = (await $.mv((await $.v(C, "DataModCustOrders")), "Search_order"));
    await $.stmt($.wcall([$t2], "Close", [], C));
    await $.mcall((await $.wv([$t2], "SQL", C, false)), "clear", []);
    await $.stmt((await $.mcall((await $.wv([$t2], "SQL", C, false)), "add", [$.add($.add("select * from cust_order where cust_id='", (await $.mv((await $.mcall((await $.mv((await $.wv([$t2], "DataModCustOrders", C, false)), "cust")), "fieldbyname", ["id"])), "asstring"))), "' ")])));
    await $.stmt($.wcall([$t2], "Open", [], C));
    await $.stmt($.wcall([$t2], "Refresh", [], C));
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("Tcustomers_orders", "nameEditChange", async function nameEditChange(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.ne((await $.mv((await $.v(C, "nameedit")), "Text")), ""))) {
    await $.stmt((await $.mcall((await $.mv((await $.v(C, "DataModCustOrders")), "cust")), "Locate", ["name", (await $.mv((await $.v(C, "nameedit")), "Text")), [(await $.v(C, "loCaseInsensitive")), (await $.v(C, "loPartialKey"))]])));
  }
  await $.mset((await $.v(C, "DBGrid1")), "Options", [(await $.v(C, "dgRowSelect")), (await $.v(C, "dgAlwaysShowEditor")), (await $.v(C, "dgTitles")), (await $.v(C, "dgIndicator")), (await $.v(C, "dgColumnResize")), (await $.v(C, "dgColLines")), (await $.v(C, "dgRowLines")), (await $.v(C, "dgTabs")), (await $.v(C, "dgAlwaysShowSelection")), (await $.v(C, "dgConfirmDelete")), (await $.v(C, "dgCancelOnExit")), (await $.v(C, "dgMultiSelect"))]);
  {
    const $t3 = (await $.mv((await $.v(C, "DataModCustOrders")), "Search_order"));
    await $.stmt($.wcall([$t3], "Close", [], C));
    await $.mcall((await $.wv([$t3], "SQL", C, false)), "clear", []);
    await $.stmt((await $.mcall((await $.wv([$t3], "SQL", C, false)), "add", [$.add($.add("select * from cust_order where cust_id='", (await $.mv((await $.mcall((await $.mv((await $.wv([$t3], "DataModCustOrders", C, false)), "cust")), "fieldbyname", ["id"])), "asstring"))), "' ")])));
    await $.stmt($.wcall([$t3], "Open", [], C));
    await $.stmt($.wcall([$t3], "Refresh", [], C));
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("Tcustomers_orders", "open_datEditChange", async function open_datEditChange(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.ne((await $.mv((await $.v(C, "open_datedit")), "Text")), ""))) {
    await $.stmt((await $.mcall((await $.mv((await $.v(C, "DataModCustOrders")), "cust")), "Locate", ["open_dat", (await $.mv((await $.v(C, "open_datedit")), "Text")), [(await $.v(C, "loCaseInsensitive")), (await $.v(C, "loPartialKey"))]])));
  }
  await $.mset((await $.v(C, "DBGrid1")), "Options", [(await $.v(C, "dgRowSelect")), (await $.v(C, "dgAlwaysShowEditor")), (await $.v(C, "dgTitles")), (await $.v(C, "dgIndicator")), (await $.v(C, "dgColumnResize")), (await $.v(C, "dgColLines")), (await $.v(C, "dgRowLines")), (await $.v(C, "dgTabs")), (await $.v(C, "dgAlwaysShowSelection")), (await $.v(C, "dgConfirmDelete")), (await $.v(C, "dgCancelOnExit")), (await $.v(C, "dgMultiSelect"))]);
  {
    const $t4 = (await $.mv((await $.v(C, "DataModCustOrders")), "Search_order"));
    await $.stmt($.wcall([$t4], "Close", [], C));
    await $.mcall((await $.wv([$t4], "SQL", C, false)), "clear", []);
    await $.stmt((await $.mcall((await $.wv([$t4], "SQL", C, false)), "add", [$.add($.add("select * from cust_order where cust_id='", (await $.mv((await $.mcall((await $.mv((await $.wv([$t4], "DataModCustOrders", C, false)), "cust")), "fieldbyname", ["id"])), "asstring"))), "' ")])));
    await $.stmt($.wcall([$t4], "Open", [], C));
    await $.stmt($.wcall([$t4], "Refresh", [], C));
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.func("MenuShrift", async function MenuShrift(Self, p0, p1, p2, p3) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "acanvas": $.copyArg(p1), "arect": $.copyArg(p2), "selected": $.copyArg(p3), result: undefined, "linebottom": 0, "stext": '', "bar": null};
  await $.fixArgs(L0, ["sender", "acanvas", "arect", "selected"]);
  {
    const $t5 = L0["acanvas"];
    const $t6 = (await $.wv([$t5], "Sender", { get: async () => L0["sender"], set: async (v) => { L0["sender"] = v; }, local: true }, false));
    {
      const $t7 = (await $.wv([$t5, $t6], "Font", C, false));
      await $.wset([$t5, $t6, $t7], "Name", "Azl Sans Serif", C);
      await $.wset([$t5, $t6, $t7], "Charset", (await $.wv([$t5, $t6, $t7], "RUSSIAN_CHARSET", C, false)), C);
      if ($.truthy((await $.wv([$t5, $t6, $t7], "Default", C, false)))) {
        await $.wset([$t5, $t6, $t7], "Style", [(await $.wv([$t5, $t6, $t7], "fsBold", C, false))], C);
      }
    }
    if ($.truthy($.eq((await $.wv([$t5, $t6], "Caption", C, false)), "-"))) {
      await $.mset((await $.wv([$t5, $t6], "Pen", C, false)), "Color", (await $.wv([$t5, $t6], "clBlack", C, false)));
      await $.wset([$t5, $t6], "LineBottom", $.sub(($.add((await $.mv((await $.wv([$t5, $t6], "ARect", { get: async () => L0["arect"], set: async (v) => { L0["arect"] = v; }, local: true }, false)), "Top")), $.idiv(($.sub((await $.mv((await $.wv([$t5, $t6], "ARect", { get: async () => L0["arect"], set: async (v) => { L0["arect"] = v; }, local: true }, false)), "Bottom")), (await $.mv((await $.wv([$t5, $t6], "ARect", { get: async () => L0["arect"], set: async (v) => { L0["arect"] = v; }, local: true }, false)), "Top")))), 2))), 1), { get: async () => L0["linebottom"], set: async (v) => { L0["linebottom"] = v; }, local: true });
      await $.stmt((await $.wcall([$t5, $t6], "MoveTo", [(await $.mv((await $.wv([$t5, $t6], "ARect", { get: async () => L0["arect"], set: async (v) => { L0["arect"] = v; }, local: true }, false)), "Left")), (await $.wv([$t5, $t6], "LineBottom", { get: async () => L0["linebottom"], set: async (v) => { L0["linebottom"] = v; }, local: true }, false))], C)));
      await $.stmt((await $.wcall([$t5, $t6], "LineTo", [(await $.mv((await $.wv([$t5, $t6], "ARect", { get: async () => L0["arect"], set: async (v) => { L0["arect"] = v; }, local: true }, false)), "Right")), (await $.wv([$t5, $t6], "LineBottom", { get: async () => L0["linebottom"], set: async (v) => { L0["linebottom"] = v; }, local: true }, false))], C)));
      await $.stmt((await $.wcall([$t5, $t6], "inc", [$.ref(async () => (await $.wv([$t5, $t6], "LineBottom", { get: async () => L0["linebottom"], set: async (v) => { L0["linebottom"] = v; }, local: true }, false)), async ($t8) => { await $.wset([$t5, $t6], "LineBottom", $t8, { get: async () => L0["linebottom"], set: async (v) => { L0["linebottom"] = v; }, local: true }); })], C)));
      await $.mset((await $.wv([$t5, $t6], "Pen", C, false)), "Color", (await $.wv([$t5, $t6], "clWhite", C, false)));
      await $.stmt((await $.wcall([$t5, $t6], "MoveTo", [(await $.mv((await $.wv([$t5, $t6], "ARect", { get: async () => L0["arect"], set: async (v) => { L0["arect"] = v; }, local: true }, false)), "Left")), (await $.wv([$t5, $t6], "LineBottom", { get: async () => L0["linebottom"], set: async (v) => { L0["linebottom"] = v; }, local: true }, false))], C)));
      await $.stmt((await $.wcall([$t5, $t6], "LineTo", [(await $.mv((await $.wv([$t5, $t6], "ARect", { get: async () => L0["arect"], set: async (v) => { L0["arect"] = v; }, local: true }, false)), "Right")), (await $.wv([$t5, $t6], "LineBottom", { get: async () => L0["linebottom"], set: async (v) => { L0["linebottom"] = v; }, local: true }, false))], C)));
    } else {
      if ($.truthy((await $.wv([$t5, $t6], "Selected", { get: async () => L0["selected"], set: async (v) => { L0["selected"] = v; }, local: true }, false)))) {
        await $.mset((await $.wv([$t5, $t6], "Brush", C, false)), "Color", (await $.wv([$t5, $t6], "clNavy", C, false)));
        if ($.truthy((await $.wv([$t5, $t6], "Enabled", C, false)))) {
          await $.mset((await $.wv([$t5, $t6], "Font", C, false)), "Color", (await $.wv([$t5, $t6], "clWhite", C, false)));
        } else {
          await $.mset((await $.wv([$t5, $t6], "Font", C, false)), "Color", (await $.wv([$t5, $t6], "clSilver", C, false)));
        }
      } else {
        await $.mset((await $.wv([$t5, $t6], "Brush", C, false)), "Color", (await $.wv([$t5, $t6], "clBtnFace", C, false)));
        if ($.truthy((await $.wv([$t5, $t6], "Enabled", C, false)))) {
          await $.mset((await $.wv([$t5, $t6], "Font", C, false)), "Color", (await $.wv([$t5, $t6], "clBlack", C, false)));
        } else {
          await $.mset((await $.wv([$t5, $t6], "Font", C, false)), "Color", (await $.wv([$t5, $t6], "clGrayText", C, false)));
        }
      }
      await $.wset([$t5, $t6], "Bar", (await $.wv([$t5, $t6], "ARect", { get: async () => L0["arect"], set: async (v) => { L0["arect"] = v; }, local: true }, false)), { get: async () => L0["bar"], set: async (v) => { L0["bar"] = v; }, local: true });
      await $.stmt((await $.wcall([$t5, $t6], "FillRect", [(await $.wv([$t5, $t6], "Bar", { get: async () => L0["bar"], set: async (v) => { L0["bar"] = v; }, local: true }, false))], C)));
      await $.stmt((await $.wcall([$t5, $t6], "TextOut", [$.add((await $.mv((await $.wv([$t5, $t6], "ARect", { get: async () => L0["arect"], set: async (v) => { L0["arect"] = v; }, local: true }, false)), "Left")), 2), $.add((await $.mv((await $.wv([$t5, $t6], "ARect", { get: async () => L0["arect"], set: async (v) => { L0["arect"] = v; }, local: true }, false)), "Top")), 1), (await $.wv([$t5, $t6], "Caption", C, false))], C)));
    }
    await $.wset([$t5, $t6], "SText", (await $.wcall([$t5, $t6], "ShortCutToText", [(await $.wv([$t5, $t6], "ShortCut", C, false))], C)), { get: async () => L0["stext"], set: async (v) => { L0["stext"] = v; }, local: true });
    await $.stmt((await $.wcall([$t5, $t6], "TextOut", [$.sub($.sub((await $.mv((await $.wv([$t5, $t6], "ARect", { get: async () => L0["arect"], set: async (v) => { L0["arect"] = v; }, local: true }, false)), "Right")), (await $.wcall([$t5, $t6], "TextWidth", [(await $.wv([$t5, $t6], "SText", { get: async () => L0["stext"], set: async (v) => { L0["stext"] = v; }, local: true }, false))], C))), 2), $.add((await $.mv((await $.wv([$t5, $t6], "ARect", { get: async () => L0["arect"], set: async (v) => { L0["arect"] = v; }, local: true }, false)), "Top")), 1), (await $.wv([$t5, $t6], "SText", { get: async () => L0["stext"], set: async (v) => { L0["stext"] = v; }, local: true }, false))], C)));
    if ($.truthy($.ne((await $.wv([$t5, $t6], "ImageIndex", C, false)), (-(1))))) {
      {
        const $t9 = (await $.wv([$t5, $t6], "GetParentMenu", C, false));
        if ($.truthy((await $.wcall([$t5, $t6, $t9], "Assigned", [(await $.wv([$t5, $t6, $t9], "Images", C, false))], C)))) {
          if ($.truthy((await $.wv([$t5, $t6, $t9], "Checked", C, false)))) {
            await $.mset((await $.wv([$t5, $t6, $t9], "Bar", { get: async () => L0["bar"], set: async (v) => { L0["bar"] = v; }, local: true }, false)), "Left", $.add((await $.mv((await $.wv([$t5, $t6, $t9], "ARect", { get: async () => L0["arect"], set: async (v) => { L0["arect"] = v; }, local: true }, false)), "Left")), 1));
            await $.mset((await $.wv([$t5, $t6, $t9], "Bar", { get: async () => L0["bar"], set: async (v) => { L0["bar"] = v; }, local: true }, false)), "Right", $.add((await $.mv((await $.wv([$t5, $t6, $t9], "Bar", { get: async () => L0["bar"], set: async (v) => { L0["bar"] = v; }, local: true }, false)), "Left")), 16));
            await $.mset((await $.wv([$t5, $t6, $t9], "Bar", { get: async () => L0["bar"], set: async (v) => { L0["bar"] = v; }, local: true }, false)), "Top", $.add((await $.mv((await $.wv([$t5, $t6, $t9], "ARect", { get: async () => L0["arect"], set: async (v) => { L0["arect"] = v; }, local: true }, false)), "Top")), 1));
            await $.mset((await $.wv([$t5, $t6, $t9], "Bar", { get: async () => L0["bar"], set: async (v) => { L0["bar"] = v; }, local: true }, false)), "Bottom", $.add((await $.mv((await $.wv([$t5, $t6, $t9], "Bar", { get: async () => L0["bar"], set: async (v) => { L0["bar"] = v; }, local: true }, false)), "Top")), 16));
            await $.mset((await $.mv((await $.wv([$t5, $t6, $t9], "ACanvas", { get: async () => L0["acanvas"], set: async (v) => { L0["acanvas"] = v; }, local: true }, false)), "Brush")), "Color", (await $.wv([$t5, $t6, $t9], "clBtnShadow", C, false)));
            await $.stmt((await $.mcall((await $.wv([$t5, $t6, $t9], "ACanvas", { get: async () => L0["acanvas"], set: async (v) => { L0["acanvas"] = v; }, local: true }, false)), "FrameRect", [(await $.wv([$t5, $t6, $t9], "Bar", { get: async () => L0["bar"], set: async (v) => { L0["bar"] = v; }, local: true }, false))])));
            await $.stmt((await $.wcall([$t5, $t6, $t9], "Inc", [$.ref(async () => (await $.mv((await $.wv([$t5, $t6, $t9], "Bar", { get: async () => L0["bar"], set: async (v) => { L0["bar"] = v; }, local: true }, false)), "Left")), async ($t10) => { await $.mset((await $.wv([$t5, $t6, $t9], "Bar", { get: async () => L0["bar"], set: async (v) => { L0["bar"] = v; }, local: true }, false)), "Left", $t10); }), 2], C)));
            await $.stmt((await $.wcall([$t5, $t6, $t9], "Inc", [$.ref(async () => (await $.mv((await $.wv([$t5, $t6, $t9], "Bar", { get: async () => L0["bar"], set: async (v) => { L0["bar"] = v; }, local: true }, false)), "Right")), async ($t11) => { await $.mset((await $.wv([$t5, $t6, $t9], "Bar", { get: async () => L0["bar"], set: async (v) => { L0["bar"] = v; }, local: true }, false)), "Right", $t11); }), 2], C)));
            await $.stmt((await $.wcall([$t5, $t6, $t9], "Inc", [$.ref(async () => (await $.mv((await $.wv([$t5, $t6, $t9], "Bar", { get: async () => L0["bar"], set: async (v) => { L0["bar"] = v; }, local: true }, false)), "Top")), async ($t12) => { await $.mset((await $.wv([$t5, $t6, $t9], "Bar", { get: async () => L0["bar"], set: async (v) => { L0["bar"] = v; }, local: true }, false)), "Top", $t12); }), 2], C)));
            await $.stmt((await $.wcall([$t5, $t6, $t9], "Inc", [$.ref(async () => (await $.mv((await $.wv([$t5, $t6, $t9], "Bar", { get: async () => L0["bar"], set: async (v) => { L0["bar"] = v; }, local: true }, false)), "Bottom")), async ($t13) => { await $.mset((await $.wv([$t5, $t6, $t9], "Bar", { get: async () => L0["bar"], set: async (v) => { L0["bar"] = v; }, local: true }, false)), "Bottom", $t13); }), 2], C)));
            await $.mset((await $.mv((await $.wv([$t5, $t6, $t9], "ACanvas", { get: async () => L0["acanvas"], set: async (v) => { L0["acanvas"] = v; }, local: true }, false)), "Brush")), "Color", (await $.wv([$t5, $t6, $t9], "clBtnHighlight", C, false)));
            await $.stmt((await $.mcall((await $.wv([$t5, $t6, $t9], "ACanvas", { get: async () => L0["acanvas"], set: async (v) => { L0["acanvas"] = v; }, local: true }, false)), "FrameRect", [(await $.wv([$t5, $t6, $t9], "Bar", { get: async () => L0["bar"], set: async (v) => { L0["bar"] = v; }, local: true }, false))])));
            await $.stmt((await $.wcall([$t5, $t6, $t9], "Dec", [$.ref(async () => (await $.mv((await $.wv([$t5, $t6, $t9], "Bar", { get: async () => L0["bar"], set: async (v) => { L0["bar"] = v; }, local: true }, false)), "Left")), async ($t14) => { await $.mset((await $.wv([$t5, $t6, $t9], "Bar", { get: async () => L0["bar"], set: async (v) => { L0["bar"] = v; }, local: true }, false)), "Left", $t14); }), 1], C)));
            await $.stmt((await $.wcall([$t5, $t6, $t9], "Dec", [$.ref(async () => (await $.mv((await $.wv([$t5, $t6, $t9], "Bar", { get: async () => L0["bar"], set: async (v) => { L0["bar"] = v; }, local: true }, false)), "Right")), async ($t15) => { await $.mset((await $.wv([$t5, $t6, $t9], "Bar", { get: async () => L0["bar"], set: async (v) => { L0["bar"] = v; }, local: true }, false)), "Right", $t15); }), 1], C)));
            await $.stmt((await $.wcall([$t5, $t6, $t9], "Dec", [$.ref(async () => (await $.mv((await $.wv([$t5, $t6, $t9], "Bar", { get: async () => L0["bar"], set: async (v) => { L0["bar"] = v; }, local: true }, false)), "Top")), async ($t16) => { await $.mset((await $.wv([$t5, $t6, $t9], "Bar", { get: async () => L0["bar"], set: async (v) => { L0["bar"] = v; }, local: true }, false)), "Top", $t16); }), 1], C)));
            await $.stmt((await $.wcall([$t5, $t6, $t9], "Dec", [$.ref(async () => (await $.mv((await $.wv([$t5, $t6, $t9], "Bar", { get: async () => L0["bar"], set: async (v) => { L0["bar"] = v; }, local: true }, false)), "Bottom")), async ($t17) => { await $.mset((await $.wv([$t5, $t6, $t9], "Bar", { get: async () => L0["bar"], set: async (v) => { L0["bar"] = v; }, local: true }, false)), "Bottom", $t17); }), 1], C)));
            if ($.truthy((await $.wv([$t5, $t6, $t9], "Selected", { get: async () => L0["selected"], set: async (v) => { L0["selected"] = v; }, local: true }, false)))) {
              await $.mset((await $.mv((await $.wv([$t5, $t6, $t9], "ACanvas", { get: async () => L0["acanvas"], set: async (v) => { L0["acanvas"] = v; }, local: true }, false)), "Brush")), "Color", (await $.wv([$t5, $t6, $t9], "clBtnFace", C, false)));
            } else {
              await $.mset((await $.mv((await $.wv([$t5, $t6, $t9], "ACanvas", { get: async () => L0["acanvas"], set: async (v) => { L0["acanvas"] = v; }, local: true }, false)), "Brush")), "Color", (await $.wv([$t5, $t6, $t9], "clBtnHighlight", C, false)));
            }
            await $.stmt((await $.mcall((await $.wv([$t5, $t6, $t9], "ACanvas", { get: async () => L0["acanvas"], set: async (v) => { L0["acanvas"] = v; }, local: true }, false)), "FillRect", [(await $.wv([$t5, $t6, $t9], "Bar", { get: async () => L0["bar"], set: async (v) => { L0["bar"] = v; }, local: true }, false))])));
          }
          await $.stmt((await $.mcall((await $.wv([$t5, $t6, $t9], "Images", C, false)), "Draw", [(await $.wv([$t5, $t6, $t9], "ACanvas", { get: async () => L0["acanvas"], set: async (v) => { L0["acanvas"] = v; }, local: true }, false)), (await $.mv((await $.wv([$t5, $t6, $t9], "ARect", { get: async () => L0["arect"], set: async (v) => { L0["arect"] = v; }, local: true }, false)), "Left")), (await $.mv((await $.wv([$t5, $t6, $t9], "ARect", { get: async () => L0["arect"], set: async (v) => { L0["arect"] = v; }, local: true }, false)), "Top")), (await $.wv([$t5, $t6, $t9], "ImageIndex", C, false)), (await $.wv([$t5, $t6, $t9], "Enabled", C, false))])));
        }
      }
    }
  }
  return L0.result;
}, {"params": ["Sender", "ACanvas", "ARect", "Selected"], "kind": "procedure", "ptypes": ["TObject", "TCanvas", "TRect", "Boolean"]});
  U.method("Tcustomers_orders", "DBGrid1CellClick", async function DBGrid1CellClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"column": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["column"]);
  {
    const $t18 = (await $.mv((await $.v(C, "DataModCustOrders")), "Search_order"));
    await $.stmt($.wcall([$t18], "Close", [], C));
    await $.mcall((await $.wv([$t18], "SQL", C, false)), "clear", []);
    await $.stmt((await $.mcall((await $.wv([$t18], "SQL", C, false)), "add", [$.add($.add("select * from cust_order where cust_id='", (await $.mv((await $.mcall((await $.mv((await $.wv([$t18], "DataModCustOrders", C, false)), "cust")), "fieldbyname", ["id"])), "asstring"))), "' ")])));
    await $.stmt($.wcall([$t18], "Open", [], C));
    await $.stmt($.wcall([$t18], "Refresh", [], C));
  }
  return L0.result;
}, {"params": ["Column"], "kind": "procedure", "ptypes": ["TColumn"]});
  U.method("Tcustomers_orders", "DBGrid1DblClick", async function DBGrid1DblClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.set(C, "customers_orders_arest", (await $.mcall((await $.v(C, "Tcustomers_orders_arest")), "create", [Self])));
  {
    const $t19 = (await $.mv((await $.v(C, "DataModCustOrders")), "cust"));
    const $t20 = (await $.wv([$t19], "customers_orders_arest", C, false));
    await $.mset((await $.wv([$t19, $t20], "dbedit1", C, false)), "text", (await $.mv((await $.wcall([$t19, $t20], "fieldbyname", ["id"], C)), "asstring")));
    await $.mset((await $.wv([$t19, $t20], "edit1", C, false)), "text", (await $.mv((await $.wcall([$t19, $t20], "fieldbyname", ["inn"], C)), "asstring")));
    if ($.truthy($.ne((await $.mv((await $.mv((await $.wv([$t19, $t20], "customers_orders_arest", C, false)), "dbedit1")), "text")), ""))) {
      await $.stmt((await $.mcall((await $.mv((await $.wv([$t19, $t20], "DataModCustOrders", C, false)), "serach_cust")), "setvariable", ["title", (await $.mv((await $.mv((await $.wv([$t19, $t20], "customers_orders_arest", C, false)), "dbedit1")), "text"))])));
    }
    await $.mcall((await $.mv((await $.wv([$t19, $t20], "DataModCustOrders", C, false)), "serach_cust")), "open", []);
    await $.mcall((await $.mv((await $.wv([$t19, $t20], "DataModCustOrders", C, false)), "serach_cust")), "refresh", []);
    await $.stmt((await $.mcall((await $.mv((await $.wv([$t19, $t20], "DataModCustOrders", C, false)), "cust_id")), "setvariable", ["id", (await $.mv((await $.mv((await $.wv([$t19, $t20], "customers_orders_arest", C, false)), "dbedit1")), "text"))])));
    await $.mcall((await $.mv((await $.wv([$t19, $t20], "DataModCustOrders", C, false)), "cust_id")), "open", []);
    await $.mcall((await $.mv((await $.wv([$t19, $t20], "DataModCustOrders", C, false)), "cust_id")), "refresh", []);
    await $.stmt((await $.mcall((await $.mv((await $.wv([$t19, $t20], "DataModCustOrders", C, false)), "search_acc")), "setvariable", ["acc", (await $.mv((await $.mcall((await $.mv((await $.wv([$t19, $t20], "DataModCustOrders", C, false)), "serach_cust")), "fieldbyname", ["id"])), "asinteger"))])));
    await $.mcall((await $.mv((await $.wv([$t19, $t20], "DataModCustOrders", C, false)), "search_acc")), "open", []);
    await $.mcall((await $.mv((await $.wv([$t19, $t20], "DataModCustOrders", C, false)), "search_acc")), "refresh", []);
    await $.mset((await $.mv((await $.wv([$t19, $t20], "customers_orders_arest", C, false)), "edit1")), "enabled", (await $.wv([$t19, $t20], "false", C, false)));
    await $.mset((await $.mv((await $.wv([$t19, $t20], "customers_orders_arest", C, false)), "dbedit1")), "enabled", (await $.wv([$t19, $t20], "false", C, false)));
    await $.mset((await $.mv((await $.wv([$t19, $t20], "customers_orders_arest", C, false)), "dbedit2")), "enabled", (await $.wv([$t19, $t20], "false", C, false)));
    await $.mset((await $.mv((await $.wv([$t19, $t20], "customers_orders_arest", C, false)), "dbedit3")), "enabled", (await $.wv([$t19, $t20], "false", C, false)));
    await $.mset((await $.mv((await $.wv([$t19, $t20], "customers_orders_arest", C, false)), "dbedit4")), "enabled", (await $.wv([$t19, $t20], "false", C, false)));
    await $.mset((await $.mv((await $.wv([$t19, $t20], "customers_orders_arest", C, false)), "dbedit1")), "color", (await $.wv([$t19, $t20], "clmenu", C, false)));
    await $.mset((await $.mv((await $.wv([$t19, $t20], "customers_orders_arest", C, false)), "dbedit2")), "color", (await $.wv([$t19, $t20], "clmenu", C, false)));
    await $.mset((await $.mv((await $.wv([$t19, $t20], "customers_orders_arest", C, false)), "dbedit3")), "color", (await $.wv([$t19, $t20], "clmenu", C, false)));
    await $.mset((await $.mv((await $.wv([$t19, $t20], "customers_orders_arest", C, false)), "dbedit4")), "color", (await $.wv([$t19, $t20], "clmenu", C, false)));
    await $.mset((await $.mv((await $.wv([$t19, $t20], "customers_orders_arest", C, false)), "edit1")), "color", (await $.wv([$t19, $t20], "clmenu", C, false)));
    await $.mcall((await $.wv([$t19, $t20], "customers_orders_arest", C, false)), "showmodal", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("Tcustomers_orders", "DBGrid1KeyDown", async function DBGrid1KeyDown(Self, p0, p1, p2) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "key": $.asRef(p1), "shift": $.copyArg(p2), result: undefined};
  await $.fixArgs(L0, ["sender", "shift"]);
  if ($.truthy($.eq((await L0["key"].get()), (await $.v(C, "vk_insert"))))) {
    await $.stmt((await $.call(C, "SpeedButton2Click", [Self])));
  }
  return L0.result;
}, {"params": ["Sender", "Key", "Shift"], "kind": "procedure", "ptypes": ["TObject", "Word", "TShiftState"]});
  U.method("Tcustomers_orders", "DBGrid1TitleClick", async function DBGrid1TitleClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"column": $.copyArg(p0), result: undefined, "titlename": ''};
  await $.fixArgs(L0, ["column"]);
  L0["titlename"] = (await $.mv(L0["column"], "FieldName"));
  {
    const $t21 = (await $.mv((await $.v(C, "DataModCustOrders")), "cust"));
    await $.stmt((await $.wcall([$t21], "SetVariable", ["Title", (await $.wv([$t21], "TitleName", { get: async () => L0["titlename"], set: async (v) => { L0["titlename"] = v; }, local: true }, false))], C)));
    await $.stmt($.wcall([$t21], "Refresh", [], C));
  }
  return L0.result;
}, {"params": ["Column"], "kind": "procedure", "ptypes": ["TColumn"]});
  U.method("Tcustomers_orders", "SpeedButton1Click", async function SpeedButton1Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  try {
    await $.set(C, "all_orders", (await $.mcall((await $.v(C, "Tall_orders")), "Create", [Self])));
    {
      const $t22 = (await $.mv((await $.v(C, "DataModCustOrders")), "cust_orders"));
      if ($.truthy($.eq((await $.wv([$t22], "Active", C, false)), (await $.wv([$t22], "false", C, false))))) {
        await $.stmt($.wcall([$t22], "Open", [], C));
      } else {
        await $.stmt($.wcall([$t22], "Refresh", [], C));
      }
    }
    await $.mcall((await $.v(C, "all_orders")), "Showmodal", []);
  } finally {
    await $.mcall((await $.v(C, "all_orders")), "Release", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("Tcustomers_orders", "SpeedButton2Click", async function SpeedButton2Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.set(C, "customers_orders_arest", (await $.mcall((await $.v(C, "Tcustomers_orders_arest")), "create", [Self])));
  {
    const $t23 = (await $.mv((await $.v(C, "DataModCustOrders")), "cust"));
    const $t24 = (await $.wv([$t23], "customers_orders_arest", C, false));
    await $.mset((await $.wv([$t23, $t24], "dbedit1", C, false)), "text", (await $.mv((await $.wcall([$t23, $t24], "fieldbyname", ["id"], C)), "asstring")));
    await $.mset((await $.wv([$t23, $t24], "edit1", C, false)), "text", (await $.mv((await $.wcall([$t23, $t24], "fieldbyname", ["inn"], C)), "asstring")));
    if ($.truthy($.ne((await $.mv((await $.mv((await $.wv([$t23, $t24], "customers_orders_arest", C, false)), "dbedit1")), "text")), ""))) {
      await $.stmt((await $.mcall((await $.mv((await $.wv([$t23, $t24], "DataModCustOrders", C, false)), "serach_cust")), "setvariable", ["title", (await $.mv((await $.mv((await $.wv([$t23, $t24], "customers_orders_arest", C, false)), "dbedit1")), "text"))])));
    }
    await $.mcall((await $.mv((await $.wv([$t23, $t24], "DataModCustOrders", C, false)), "serach_cust")), "open", []);
    await $.mcall((await $.mv((await $.wv([$t23, $t24], "DataModCustOrders", C, false)), "serach_cust")), "refresh", []);
    await $.stmt((await $.mcall((await $.mv((await $.wv([$t23, $t24], "DataModCustOrders", C, false)), "cust_id")), "setvariable", ["id", (await $.mv((await $.mv((await $.wv([$t23, $t24], "customers_orders_arest", C, false)), "dbedit1")), "text"))])));
    await $.mcall((await $.mv((await $.wv([$t23, $t24], "DataModCustOrders", C, false)), "cust_id")), "open", []);
    await $.mcall((await $.mv((await $.wv([$t23, $t24], "DataModCustOrders", C, false)), "cust_id")), "refresh", []);
    await $.stmt((await $.mcall((await $.mv((await $.wv([$t23, $t24], "DataModCustOrders", C, false)), "search_acc")), "setvariable", ["acc", (await $.mv((await $.mcall((await $.mv((await $.wv([$t23, $t24], "DataModCustOrders", C, false)), "serach_cust")), "fieldbyname", ["id"])), "asinteger"))])));
    await $.mcall((await $.mv((await $.wv([$t23, $t24], "DataModCustOrders", C, false)), "search_acc")), "open", []);
    await $.mcall((await $.mv((await $.wv([$t23, $t24], "DataModCustOrders", C, false)), "search_acc")), "refresh", []);
    await $.mset((await $.mv((await $.wv([$t23, $t24], "customers_orders_arest", C, false)), "edit1")), "enabled", (await $.wv([$t23, $t24], "false", C, false)));
    await $.mset((await $.mv((await $.wv([$t23, $t24], "customers_orders_arest", C, false)), "dbedit1")), "enabled", (await $.wv([$t23, $t24], "false", C, false)));
    await $.mset((await $.mv((await $.wv([$t23, $t24], "customers_orders_arest", C, false)), "dbedit2")), "enabled", (await $.wv([$t23, $t24], "false", C, false)));
    await $.mset((await $.mv((await $.wv([$t23, $t24], "customers_orders_arest", C, false)), "dbedit3")), "enabled", (await $.wv([$t23, $t24], "false", C, false)));
    await $.mset((await $.mv((await $.wv([$t23, $t24], "customers_orders_arest", C, false)), "dbedit4")), "enabled", (await $.wv([$t23, $t24], "false", C, false)));
    await $.mset((await $.mv((await $.wv([$t23, $t24], "customers_orders_arest", C, false)), "dbedit1")), "color", (await $.wv([$t23, $t24], "clmenu", C, false)));
    await $.mset((await $.mv((await $.wv([$t23, $t24], "customers_orders_arest", C, false)), "dbedit2")), "color", (await $.wv([$t23, $t24], "clmenu", C, false)));
    await $.mset((await $.mv((await $.wv([$t23, $t24], "customers_orders_arest", C, false)), "dbedit3")), "color", (await $.wv([$t23, $t24], "clmenu", C, false)));
    await $.mset((await $.mv((await $.wv([$t23, $t24], "customers_orders_arest", C, false)), "dbedit4")), "color", (await $.wv([$t23, $t24], "clmenu", C, false)));
    await $.mset((await $.mv((await $.wv([$t23, $t24], "customers_orders_arest", C, false)), "edit1")), "color", (await $.wv([$t23, $t24], "clmenu", C, false)));
    await $.mcall((await $.wv([$t23, $t24], "customers_orders_arest", C, false)), "showmodal", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("Tcustomers_orders", "SpeedButton3Click", async function SpeedButton3Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  try {
    await $.set(C, "arxiv_orders", (await $.mcall((await $.v(C, "Tarxiv_orders")), "Create", [Self])));
    {
      const $t25 = (await $.mv((await $.v(C, "DataModCustOrders")), "arxiv_order"));
      if ($.truthy($.eq((await $.wv([$t25], "Active", C, false)), (await $.wv([$t25], "false", C, false))))) {
        await $.stmt($.wcall([$t25], "Open", [], C));
      } else {
        await $.stmt($.wcall([$t25], "Refresh", [], C));
      }
    }
    await $.mcall((await $.v(C, "arxiv_orders")), "Showmodal", []);
  } finally {
    await $.mcall((await $.v(C, "arxiv_orders")), "Release", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("Tcustomers_orders", "SpeedButton9Click", async function SpeedButton9Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.set(C, "m_edit_order", (await $.mcall((await $.v(C, "Tm_edit_order")), "Create", [Self])));
  {
    const $t26 = (await $.mv((await $.v(C, "DataModCustOrders")), "search_order"));
    const $t27 = (await $.wv([$t26], "m_edit_order", C, false));
    if ($.truthy((await $.wv([$t26, $t27], "IsEmpty", C, false)))) {
      await $.stmt((await $.wcall([$t26, $t27], "ShowMessage", ["Heç bir sərəncam qeyd olunmayıb!"], C)));
      return L0.result;
    } else {
      await $.mset((await $.wv([$t26, $t27], "editc_acc", C, false)), "text", (await $.mv((await $.wcall([$t26, $t27], "FieldByName", ["c_acc"], C)), "AsString")));
    }
    await $.mset((await $.wv([$t26, $t27], "Editc_name", C, false)), "text", (await $.mv((await $.wcall([$t26, $t27], "FieldByName", ["c_name"], C)), "AsString")));
    await $.mset((await $.wv([$t26, $t27], "Editc_voin", C, false)), "text", (await $.mv((await $.wcall([$t26, $t27], "FieldByName", ["c_inn"], C)), "AsString")));
    await $.mset((await $.wv([$t26, $t27], "editname", C, false)), "text", (await $.mv((await $.wcall([$t26, $t27], "FieldByName", ["b_name"], C)), "AsString")));
    await $.mset((await $.wv([$t26, $t27], "editcode", C, false)), "text", (await $.mv((await $.wcall([$t26, $t27], "FieldByName", ["b_code"], C)), "AsString")));
    await $.mset((await $.wv([$t26, $t27], "Editvoin", C, false)), "text", (await $.mv((await $.wcall([$t26, $t27], "FieldByName", ["b_inn"], C)), "AsString")));
    await $.mset((await $.wv([$t26, $t27], "EditAcc", C, false)), "text", (await $.mv((await $.wcall([$t26, $t27], "FieldByName", ["b_acc"], C)), "AsString")));
    await $.mset((await $.wv([$t26, $t27], "EditSwift", C, false)), "text", (await $.mv((await $.wcall([$t26, $t27], "FieldByName", ["b_swift"], C)), "AsString")));
    await $.mset((await $.wv([$t26, $t27], "Editm_name", C, false)), "text", (await $.mv((await $.wcall([$t26, $t27], "FieldByName", ["m_name"], C)), "AsString")));
    await $.mset((await $.wv([$t26, $t27], "Editm_acc", C, false)), "text", (await $.mv((await $.wcall([$t26, $t27], "FieldByName", ["m_acc"], C)), "AsString")));
    await $.mset((await $.wv([$t26, $t27], "Editm_voin", C, false)), "text", (await $.mv((await $.wcall([$t26, $t27], "FieldByName", ["m_inn"], C)), "AsString")));
    await $.mset((await $.wv([$t26, $t27], "Editn_mon", C, false)), "text", (await $.mv((await $.wcall([$t26, $t27], "FieldByName", ["n_mon"], C)), "AsString")));
    await $.mset((await $.wv([$t26, $t27], "Editw_mon", C, false)), "text", (await $.mv((await $.wcall([$t26, $t27], "FieldByName", ["w_mon"], C)), "AsString")));
    await $.mset((await $.wv([$t26, $t27], "Editcon", C, false)), "Text", (await $.mv((await $.wcall([$t26, $t27], "FieldByName", ["content"], C)), "AsString")));
    await $.mset((await $.wv([$t26, $t27], "Editedv", C, false)), "text", (await $.mv((await $.wcall([$t26, $t27], "FieldByName", ["edv"], C)), "AsString")));
    await $.mset((await $.wv([$t26, $t27], "Editedv_f", C, false)), "text", (await $.mv((await $.wcall([$t26, $t27], "FieldByName", ["edv_f"], C)), "AsString")));
    await $.mset((await $.wv([$t26, $t27], "editedv_t", C, false)), "text", (await $.mv((await $.wcall([$t26, $t27], "FieldByName", ["edv_c"], C)), "AsString")));
    await $.mset((await $.wv([$t26, $t27], "editpro", C, false)), "text", (await $.mv((await $.wcall([$t26, $t27], "FieldByName", ["pro"], C)), "AsString")));
    await $.mset((await $.wv([$t26, $t27], "editpro_p", C, false)), "text", (await $.mv((await $.wcall([$t26, $t27], "FieldByName", ["pro_f"], C)), "AsString")));
    await $.mset((await $.wv([$t26, $t27], "editpro_t", C, false)), "text", (await $.mv((await $.wcall([$t26, $t27], "FieldByName", ["pro_c"], C)), "AsString")));
    await $.mset((await $.wv([$t26, $t27], "editnumber", C, false)), "text", (await $.mv((await $.wcall([$t26, $t27], "FieldByName", ["pnum"], C)), "AsString")));
    await $.mset((await $.wv([$t26, $t27], "editval", C, false)), "text", (await $.mv((await $.wcall([$t26, $t27], "FieldByName", ["val"], C)), "AsString")));
    await $.mset((await $.wv([$t26, $t27], "editdate", C, false)), "DateTime", (await $.mv((await $.wcall([$t26, $t27], "FieldByName", ["ddate"], C)), "AsDateTime")));
    await $.mset((await $.wv([$t26, $t27], "editchief", C, false)), "text", (await $.mv((await $.wcall([$t26, $t27], "FieldByName", ["chief"], C)), "AsString")));
    await $.mset((await $.wv([$t26, $t27], "edithead", C, false)), "Text", (await $.mv((await $.wcall([$t26, $t27], "FieldByName", ["head"], C)), "AsString")));
    await $.mset((await $.wv([$t26, $t27], "edit1", C, false)), "text", (await $.mv((await $.wcall([$t26, $t27], "fieldbyname", ["acc_inn"], C)), "asstring")));
    await $.mset((await $.mv((await $.wv([$t26, $t27], "m_edit_order", C, false)), "edit1")), "Enabled", (await $.wv([$t26, $t27], "false", C, false)));
    await $.mset((await $.mv((await $.wv([$t26, $t27], "m_edit_order", C, false)), "edit1")), "color", (await $.wv([$t26, $t27], "clmenu", C, false)));
    await $.mcall((await $.wv([$t26, $t27], "m_edit_order", C, false)), "Showmodal", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("Tcustomers_orders", "SpeedButton10Click", async function SpeedButton10Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "v_pnum": '', "v_id": 0};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t28 = (await $.mv((await $.v(C, "DataModCustOrders")), "search_order"));
    if ($.truthy((await $.wv([$t28], "IsEmpty", C, false)))) {
      await $.stmt((await $.wcall([$t28], "ShowMessage", ["Heç bir sərəncam qeyd olunmayıb!"], C)));
      return L0.result;
    } else {
      await $.mset((await $.mv((await $.wv([$t28], "DataModCustOrders", C, false)), "search_order")), "active", (await $.wv([$t28], "true", C, false)));
    }
    await $.wset([$t28], "v_pnum", (await $.mv((await $.mcall((await $.mv((await $.wv([$t28], "DataModCustOrders", C, false)), "search_order")), "FieldByName", ["PNUM"])), "AsString")), { get: async () => L0["v_pnum"], set: async (v) => { L0["v_pnum"] = v; }, local: true });
    await $.wset([$t28], "v_id", (await $.mv((await $.mcall((await $.mv((await $.wv([$t28], "DataModCustOrders", C, false)), "search_order")), "FieldByName", ["id"])), "asinteger")), { get: async () => L0["v_id"], set: async (v) => { L0["v_id"] = v; }, local: true });
    if ($.truthy($.eq((await $.wcall([$t28], "MessageDlg", [(await $.wcall([$t28], "Format", ["№%s serencam silinsin?", [(await $.wv([$t28], "v_pnum", { get: async () => L0["v_pnum"], set: async (v) => { L0["v_pnum"] = v; }, local: true }, false))]], C)), (await $.wv([$t28], "mtConfirmation", C, false)), (await $.wv([$t28], "mbYesNoCancel", C, false)), 0], C)), (await $.wv([$t28], "mrYes", C, false))))) {
      {
        const $t29 = (await $.mv((await $.wv([$t28], "DataModCustOrders", C, false)), "search_order"));
        const $t30 = (await $.mv((await $.wv([$t28, $t29], "DataModCustOrders", C, false)), "customer_orders"));
        await $.stmt((await $.wcall([$t28, $t29, $t30], "CallProcedure", ["delete_order", [(await $.wv([$t28, $t29, $t30], "v_id", { get: async () => L0["v_id"], set: async (v) => { L0["v_id"] = v; }, local: true }, false))]], C)));
        await $.stmt($.wcall([$t28, $t29, $t30], "Refresh", [], C));
      }
    }
    await $.mcall((await $.mv((await $.wv([$t28], "DataModCustOrders", C, false)), "search_order")), "refresh", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("Tcustomers_orders", "BtnPrintClick", async function BtnPrintClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "p_id": 0};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t31 = (await $.mv((await $.v(C, "DataModCustOrders")), "search_order"));
    await $.stmt($.wcall([$t31], "Open", [], C));
    if ($.truthy((await $.wv([$t31], "IsEmpty", C, false)))) {
      await $.stmt((await $.wcall([$t31], "ShowMessage", ["Heç bir sərəncam qeyd olunmayıb!"], C)));
      return L0.result;
    } else {
      await $.wset([$t31], "p_ID", (await $.mv((await $.mcall((await $.mv((await $.wv([$t31], "DataModCustOrders", C, false)), "search_order")), "FieldByName", ["ID"])), "AsInteger")), { get: async () => L0["p_id"], set: async (v) => { L0["p_id"] = v; }, local: true });
    }
  }
  try {
    {
      const $t32 = (await $.v(C, "QRepCustOrders"));
      const $t33 = (await $.mv((await $.wv([$t32], "DataModCustOrders", C, false)), "search_order"));
      await $.wset([$t32, $t33], "Filtered", (await $.wv([$t32, $t33], "false", C, false)), C);
      await $.wset([$t32, $t33], "Filter", $.add(" ID= ", (await $.wcall([$t32, $t33], "IntToStr", [(await $.wv([$t32, $t33], "p_ID", { get: async () => L0["p_id"], set: async (v) => { L0["p_id"] = v; }, local: true }, false))], C))), C);
      await $.wset([$t32, $t33], "Filtered", (await $.wv([$t32, $t33], "true", C, false)), C);
      await $.stmt($.wcall([$t32, $t33], "Preview", [], C));
    }
  } finally {
    await $.mset((await $.mv((await $.v(C, "DataModCustOrders")), "search_order")), "Filtered", false);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("Tcustomers_orders", "DBGrid2DblClick", async function DBGrid2DblClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.set(C, "m_edit_order", (await $.mcall((await $.v(C, "Tm_edit_order")), "Create", [Self])));
  {
    const $t34 = (await $.mv((await $.v(C, "DataModCustOrders")), "search_order"));
    const $t35 = (await $.wv([$t34], "m_edit_order", C, false));
    if ($.truthy((await $.wv([$t34, $t35], "IsEmpty", C, false)))) {
      await $.stmt((await $.wcall([$t34, $t35], "ShowMessage", ["Heç bir sərəncam qeyd olunmayıb!"], C)));
      return L0.result;
    } else {
      await $.mset((await $.wv([$t34, $t35], "editc_acc", C, false)), "text", (await $.mv((await $.wcall([$t34, $t35], "FieldByName", ["c_acc"], C)), "AsString")));
    }
    await $.mset((await $.wv([$t34, $t35], "Editc_name", C, false)), "text", (await $.mv((await $.wcall([$t34, $t35], "FieldByName", ["c_name"], C)), "AsString")));
    await $.mset((await $.wv([$t34, $t35], "Editc_voin", C, false)), "text", (await $.mv((await $.wcall([$t34, $t35], "FieldByName", ["c_inn"], C)), "AsString")));
    await $.mset((await $.wv([$t34, $t35], "editname", C, false)), "text", (await $.mv((await $.wcall([$t34, $t35], "FieldByName", ["b_name"], C)), "AsString")));
    await $.mset((await $.wv([$t34, $t35], "editcode", C, false)), "text", (await $.mv((await $.wcall([$t34, $t35], "FieldByName", ["b_code"], C)), "AsString")));
    await $.mset((await $.wv([$t34, $t35], "Editvoin", C, false)), "text", (await $.mv((await $.wcall([$t34, $t35], "FieldByName", ["b_inn"], C)), "AsString")));
    await $.mset((await $.wv([$t34, $t35], "EditAcc", C, false)), "text", (await $.mv((await $.wcall([$t34, $t35], "FieldByName", ["b_acc"], C)), "AsString")));
    await $.mset((await $.wv([$t34, $t35], "EditSwift", C, false)), "text", (await $.mv((await $.wcall([$t34, $t35], "FieldByName", ["b_swift"], C)), "AsString")));
    await $.mset((await $.wv([$t34, $t35], "Editm_name", C, false)), "text", (await $.mv((await $.wcall([$t34, $t35], "FieldByName", ["m_name"], C)), "AsString")));
    await $.mset((await $.wv([$t34, $t35], "Editm_acc", C, false)), "text", (await $.mv((await $.wcall([$t34, $t35], "FieldByName", ["m_acc"], C)), "AsString")));
    await $.mset((await $.wv([$t34, $t35], "Editm_voin", C, false)), "text", (await $.mv((await $.wcall([$t34, $t35], "FieldByName", ["m_inn"], C)), "AsString")));
    await $.mset((await $.wv([$t34, $t35], "Editn_mon", C, false)), "text", (await $.mv((await $.wcall([$t34, $t35], "FieldByName", ["n_mon"], C)), "AsString")));
    await $.mset((await $.wv([$t34, $t35], "Editw_mon", C, false)), "text", (await $.mv((await $.wcall([$t34, $t35], "FieldByName", ["w_mon"], C)), "AsString")));
    await $.mset((await $.wv([$t34, $t35], "Editcon", C, false)), "Text", (await $.mv((await $.wcall([$t34, $t35], "FieldByName", ["content"], C)), "AsString")));
    await $.mset((await $.wv([$t34, $t35], "Editedv", C, false)), "text", (await $.mv((await $.wcall([$t34, $t35], "FieldByName", ["edv"], C)), "AsString")));
    await $.mset((await $.wv([$t34, $t35], "Editedv_f", C, false)), "text", (await $.mv((await $.wcall([$t34, $t35], "FieldByName", ["edv_f"], C)), "AsString")));
    await $.mset((await $.wv([$t34, $t35], "editedv_t", C, false)), "text", (await $.mv((await $.wcall([$t34, $t35], "FieldByName", ["edv_c"], C)), "AsString")));
    await $.mset((await $.wv([$t34, $t35], "editpro", C, false)), "text", (await $.mv((await $.wcall([$t34, $t35], "FieldByName", ["pro"], C)), "AsString")));
    await $.mset((await $.wv([$t34, $t35], "editpro_p", C, false)), "text", (await $.mv((await $.wcall([$t34, $t35], "FieldByName", ["pro_f"], C)), "AsString")));
    await $.mset((await $.wv([$t34, $t35], "editpro_t", C, false)), "text", (await $.mv((await $.wcall([$t34, $t35], "FieldByName", ["pro_c"], C)), "AsString")));
    await $.mset((await $.wv([$t34, $t35], "editnumber", C, false)), "text", (await $.mv((await $.wcall([$t34, $t35], "FieldByName", ["pnum"], C)), "AsString")));
    await $.mset((await $.wv([$t34, $t35], "editval", C, false)), "text", (await $.mv((await $.wcall([$t34, $t35], "FieldByName", ["val"], C)), "AsString")));
    await $.mset((await $.wv([$t34, $t35], "editdate", C, false)), "DateTime", (await $.mv((await $.wcall([$t34, $t35], "FieldByName", ["ddate"], C)), "AsDateTime")));
    await $.mset((await $.wv([$t34, $t35], "editchief", C, false)), "text", (await $.mv((await $.wcall([$t34, $t35], "FieldByName", ["chief"], C)), "AsString")));
    await $.mset((await $.wv([$t34, $t35], "edithead", C, false)), "Text", (await $.mv((await $.wcall([$t34, $t35], "FieldByName", ["head"], C)), "AsString")));
    await $.mset((await $.wv([$t34, $t35], "edit1", C, false)), "text", (await $.mv((await $.wcall([$t34, $t35], "fieldbyname", ["acc_inn"], C)), "asstring")));
    await $.mset((await $.mv((await $.wv([$t34, $t35], "m_edit_order", C, false)), "edit1")), "Enabled", (await $.wv([$t34, $t35], "false", C, false)));
    await $.mset((await $.mv((await $.wv([$t34, $t35], "m_edit_order", C, false)), "edit1")), "color", (await $.wv([$t34, $t35], "clmenu", C, false)));
    await $.mcall((await $.wv([$t34, $t35], "m_edit_order", C, false)), "Showmodal", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("Tcustomers_orders", "DBGrid2TitleClick", async function DBGrid2TitleClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"column": $.copyArg(p0), result: undefined, "titlename": ''};
  await $.fixArgs(L0, ["column"]);
  L0["titlename"] = (await $.mv(L0["column"], "FieldName"));
  {
    const $t36 = (await $.mv((await $.v(C, "DataModCustOrders")), "search_order"));
    await $.stmt((await $.wcall([$t36], "SetVariable", ["Title", (await $.wv([$t36], "TitleName", { get: async () => L0["titlename"], set: async (v) => { L0["titlename"] = v; }, local: true }, false))], C)));
    await $.stmt($.wcall([$t36], "Refresh", [], C));
  }
  return L0.result;
}, {"params": ["Column"], "kind": "procedure", "ptypes": ["TColumn"]});
  U.method("Tcustomers_orders", "ActiveFormCreate", async function ActiveFormCreate(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.set(C, "DataModCustOrders", (await $.mcall((await $.v(C, "tDataModCustOrders")), "create", [Self])));
  await $.mcall((await $.mv((await $.v(C, "DataModCustOrders")), "cust")), "open", []);
  await $.mcall((await $.mv((await $.v(C, "DataModCustOrders")), "cust_orders")), "open", []);
  await $.mcall((await $.mv((await $.v(C, "DataModCustOrders")), "cust_id")), "open", []);
  await $.set(C, "QRepCustOrders", (await $.mcall((await $.v(C, "tQRepCustOrders")), "Create", [Self])));
  await $.mset((await $.v(C, "DBGrid1")), "Options", [(await $.v(C, "dgRowSelect")), (await $.v(C, "dgAlwaysShowEditor")), (await $.v(C, "dgTitles")), (await $.v(C, "dgIndicator")), (await $.v(C, "dgColumnResize")), (await $.v(C, "dgColLines")), (await $.v(C, "dgRowLines")), (await $.v(C, "dgTabs")), (await $.v(C, "dgAlwaysShowSelection")), (await $.v(C, "dgConfirmDelete")), (await $.v(C, "dgCancelOnExit")), (await $.v(C, "dgMultiSelect"))]);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("Tcustomers_orders", "ActiveFormKeyDown", async function ActiveFormKeyDown(Self, p0, p1, p2) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "key": $.asRef(p1), "shift": $.copyArg(p2), result: undefined};
  await $.fixArgs(L0, ["sender", "shift"]);
  if ($.truthy($.eq((await L0["key"].get()), (await $.v(C, "vk_insert"))))) {
    await $.stmt((await $.call(C, "SpeedButton1Click", [Self])));
  }
  return L0.result;
}, {"params": ["Sender", "Key", "Shift"], "kind": "procedure", "ptypes": ["TObject", "Word", "TShiftState"]});
  U.method("Tcustomers_orders", "innEditKeyDown", async function innEditKeyDown(Self, p0, p1, p2) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "key": $.asRef(p1), "shift": $.copyArg(p2), result: undefined};
  await $.fixArgs(L0, ["sender", "shift"]);
  if ($.truthy($.eq((await L0["key"].get()), (await $.v(C, "vk_insert"))))) {
    await $.stmt((await $.call(C, "SpeedButton2Click", [Self])));
  }
  return L0.result;
}, {"params": ["Sender", "Key", "Shift"], "kind": "procedure", "ptypes": ["TObject", "Word", "TShiftState"]});
  U.method("Tcustomers_orders", "innEditExit", async function innEditExit(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mset(L0["sender"], "text", "");
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("Tcustomers_orders", "innEditKeyPress", async function innEditKeyPress(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "key": $.asRef(p1), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.not(($.in_((await L0["key"].get()), [...$.range("0","9"), ".", "\b"]))))) {
    await L0["key"].set("\u0000");
  }
  return L0.result;
}, {"params": ["Sender", "Key"], "kind": "procedure", "ptypes": ["TObject", "Char"]});
  U.method("Tcustomers_orders", "noeditExit", async function noeditExit(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mset(L0["sender"], "text", "");
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("Tcustomers_orders", "noeditKeyPress", async function noeditKeyPress(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "key": $.asRef(p1), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.not(($.in_((await L0["key"].get()), [...$.range("0","9"), ".", "\b"]))))) {
    await L0["key"].set("\u0000");
  }
  return L0.result;
}, {"params": ["Sender", "Key"], "kind": "procedure", "ptypes": ["TObject", "Char"]});
  U.method("Tcustomers_orders", "nameEditExit", async function nameEditExit(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mset(L0["sender"], "text", "");
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("Tcustomers_orders", "open_datEditExit", async function open_datEditExit(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mset(L0["sender"], "text", "");
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("Tcustomers_orders", "insClick", async function insClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.set(C, "customers_orders_arest", (await $.mcall((await $.v(C, "Tcustomers_orders_arest")), "create", [Self])));
  {
    const $t37 = (await $.mv((await $.v(C, "DataModCustOrders")), "cust"));
    const $t38 = (await $.wv([$t37], "customers_orders_arest", C, false));
    await $.mset((await $.wv([$t37, $t38], "dbedit1", C, false)), "text", (await $.mv((await $.wcall([$t37, $t38], "fieldbyname", ["id"], C)), "asstring")));
    await $.mset((await $.wv([$t37, $t38], "edit1", C, false)), "text", (await $.mv((await $.wcall([$t37, $t38], "fieldbyname", ["inn"], C)), "asstring")));
    if ($.truthy($.ne((await $.mv((await $.mv((await $.wv([$t37, $t38], "customers_orders_arest", C, false)), "dbedit1")), "text")), ""))) {
      await $.stmt((await $.mcall((await $.mv((await $.wv([$t37, $t38], "DataModCustOrders", C, false)), "serach_cust")), "setvariable", ["title", (await $.mv((await $.mv((await $.wv([$t37, $t38], "customers_orders_arest", C, false)), "dbedit1")), "text"))])));
    }
    await $.mcall((await $.mv((await $.wv([$t37, $t38], "DataModCustOrders", C, false)), "serach_cust")), "open", []);
    await $.mcall((await $.mv((await $.wv([$t37, $t38], "DataModCustOrders", C, false)), "serach_cust")), "refresh", []);
    await $.stmt((await $.mcall((await $.mv((await $.wv([$t37, $t38], "DataModCustOrders", C, false)), "cust_id")), "setvariable", ["id", (await $.mv((await $.mv((await $.wv([$t37, $t38], "customers_orders_arest", C, false)), "dbedit1")), "text"))])));
    await $.mcall((await $.mv((await $.wv([$t37, $t38], "DataModCustOrders", C, false)), "cust_id")), "open", []);
    await $.mcall((await $.mv((await $.wv([$t37, $t38], "DataModCustOrders", C, false)), "cust_id")), "refresh", []);
    await $.stmt((await $.mcall((await $.mv((await $.wv([$t37, $t38], "DataModCustOrders", C, false)), "search_acc")), "setvariable", ["acc", (await $.mv((await $.mcall((await $.mv((await $.wv([$t37, $t38], "DataModCustOrders", C, false)), "serach_cust")), "fieldbyname", ["id"])), "asinteger"))])));
    await $.mcall((await $.mv((await $.wv([$t37, $t38], "DataModCustOrders", C, false)), "search_acc")), "open", []);
    await $.mcall((await $.mv((await $.wv([$t37, $t38], "DataModCustOrders", C, false)), "search_acc")), "refresh", []);
    await $.mset((await $.mv((await $.wv([$t37, $t38], "customers_orders_arest", C, false)), "edit1")), "enabled", (await $.wv([$t37, $t38], "false", C, false)));
    await $.mset((await $.mv((await $.wv([$t37, $t38], "customers_orders_arest", C, false)), "dbedit1")), "enabled", (await $.wv([$t37, $t38], "false", C, false)));
    await $.mset((await $.mv((await $.wv([$t37, $t38], "customers_orders_arest", C, false)), "dbedit2")), "enabled", (await $.wv([$t37, $t38], "false", C, false)));
    await $.mset((await $.mv((await $.wv([$t37, $t38], "customers_orders_arest", C, false)), "dbedit3")), "enabled", (await $.wv([$t37, $t38], "false", C, false)));
    await $.mset((await $.mv((await $.wv([$t37, $t38], "customers_orders_arest", C, false)), "dbedit4")), "enabled", (await $.wv([$t37, $t38], "false", C, false)));
    await $.mset((await $.mv((await $.wv([$t37, $t38], "customers_orders_arest", C, false)), "dbedit1")), "color", (await $.wv([$t37, $t38], "clmenu", C, false)));
    await $.mset((await $.mv((await $.wv([$t37, $t38], "customers_orders_arest", C, false)), "dbedit2")), "color", (await $.wv([$t37, $t38], "clmenu", C, false)));
    await $.mset((await $.mv((await $.wv([$t37, $t38], "customers_orders_arest", C, false)), "dbedit3")), "color", (await $.wv([$t37, $t38], "clmenu", C, false)));
    await $.mset((await $.mv((await $.wv([$t37, $t38], "customers_orders_arest", C, false)), "dbedit4")), "color", (await $.wv([$t37, $t38], "clmenu", C, false)));
    await $.mset((await $.mv((await $.wv([$t37, $t38], "customers_orders_arest", C, false)), "edit1")), "color", (await $.wv([$t37, $t38], "clmenu", C, false)));
    await $.mcall((await $.wv([$t37, $t38], "customers_orders_arest", C, false)), "showmodal", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("Tcustomers_orders", "editClick", async function editClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.set(C, "m_edit_order", (await $.mcall((await $.v(C, "Tm_edit_order")), "Create", [Self])));
  {
    const $t39 = (await $.mv((await $.v(C, "DataModCustOrders")), "cust_id"));
    const $t40 = (await $.wv([$t39], "m_edit_order", C, false));
    if ($.truthy((await $.wv([$t39, $t40], "IsEmpty", C, false)))) {
      await $.stmt((await $.wcall([$t39, $t40], "ShowMessage", ["Heç bir sərəncam qeyd olunmayıb!"], C)));
      return L0.result;
    } else {
      await $.mset((await $.wv([$t39, $t40], "editc_acc", C, false)), "text", (await $.mv((await $.wcall([$t39, $t40], "FieldByName", ["c_acc"], C)), "AsString")));
    }
    await $.mset((await $.wv([$t39, $t40], "Editc_name", C, false)), "text", (await $.mv((await $.wcall([$t39, $t40], "FieldByName", ["c_name"], C)), "AsString")));
    await $.mset((await $.wv([$t39, $t40], "Editc_voin", C, false)), "text", (await $.mv((await $.wcall([$t39, $t40], "FieldByName", ["c_inn"], C)), "AsString")));
    await $.mset((await $.wv([$t39, $t40], "editname", C, false)), "text", (await $.mv((await $.wcall([$t39, $t40], "FieldByName", ["b_name"], C)), "AsString")));
    await $.mset((await $.wv([$t39, $t40], "editcode", C, false)), "text", (await $.mv((await $.wcall([$t39, $t40], "FieldByName", ["b_code"], C)), "AsString")));
    await $.mset((await $.wv([$t39, $t40], "Editvoin", C, false)), "text", (await $.mv((await $.wcall([$t39, $t40], "FieldByName", ["b_inn"], C)), "AsString")));
    await $.mset((await $.wv([$t39, $t40], "EditAcc", C, false)), "text", (await $.mv((await $.wcall([$t39, $t40], "FieldByName", ["b_acc"], C)), "AsString")));
    await $.mset((await $.wv([$t39, $t40], "EditSwift", C, false)), "text", (await $.mv((await $.wcall([$t39, $t40], "FieldByName", ["b_swift"], C)), "AsString")));
    await $.mset((await $.wv([$t39, $t40], "Editm_name", C, false)), "text", (await $.mv((await $.wcall([$t39, $t40], "FieldByName", ["m_name"], C)), "AsString")));
    await $.mset((await $.wv([$t39, $t40], "Editm_acc", C, false)), "text", (await $.mv((await $.wcall([$t39, $t40], "FieldByName", ["m_acc"], C)), "AsString")));
    await $.mset((await $.wv([$t39, $t40], "Editm_voin", C, false)), "text", (await $.mv((await $.wcall([$t39, $t40], "FieldByName", ["m_inn"], C)), "AsString")));
    await $.mset((await $.wv([$t39, $t40], "Editn_mon", C, false)), "text", (await $.mv((await $.wcall([$t39, $t40], "FieldByName", ["n_mon"], C)), "AsString")));
    await $.mset((await $.wv([$t39, $t40], "Editw_mon", C, false)), "text", (await $.mv((await $.wcall([$t39, $t40], "FieldByName", ["w_mon"], C)), "AsString")));
    await $.mset((await $.wv([$t39, $t40], "Editcon", C, false)), "Text", (await $.mv((await $.wcall([$t39, $t40], "FieldByName", ["content"], C)), "AsString")));
    await $.mset((await $.wv([$t39, $t40], "Editedv", C, false)), "text", (await $.mv((await $.wcall([$t39, $t40], "FieldByName", ["edv"], C)), "AsString")));
    await $.mset((await $.wv([$t39, $t40], "Editedv_f", C, false)), "text", (await $.mv((await $.wcall([$t39, $t40], "FieldByName", ["edv_f"], C)), "AsString")));
    await $.mset((await $.wv([$t39, $t40], "editedv_t", C, false)), "text", (await $.mv((await $.wcall([$t39, $t40], "FieldByName", ["edv_c"], C)), "AsString")));
    await $.mset((await $.wv([$t39, $t40], "editpro", C, false)), "text", (await $.mv((await $.wcall([$t39, $t40], "FieldByName", ["pro"], C)), "AsString")));
    await $.mset((await $.wv([$t39, $t40], "editpro_p", C, false)), "text", (await $.mv((await $.wcall([$t39, $t40], "FieldByName", ["pro_f"], C)), "AsString")));
    await $.mset((await $.wv([$t39, $t40], "editpro_t", C, false)), "text", (await $.mv((await $.wcall([$t39, $t40], "FieldByName", ["pro_c"], C)), "AsString")));
    await $.mset((await $.wv([$t39, $t40], "editnumber", C, false)), "text", (await $.mv((await $.wcall([$t39, $t40], "FieldByName", ["pnum"], C)), "AsString")));
    await $.mset((await $.wv([$t39, $t40], "editval", C, false)), "text", (await $.mv((await $.wcall([$t39, $t40], "FieldByName", ["val"], C)), "AsString")));
    await $.mset((await $.wv([$t39, $t40], "editdate", C, false)), "DateTime", (await $.mv((await $.wcall([$t39, $t40], "FieldByName", ["ddate"], C)), "AsDateTime")));
    await $.mset((await $.wv([$t39, $t40], "editchief", C, false)), "text", (await $.mv((await $.wcall([$t39, $t40], "FieldByName", ["chief"], C)), "AsString")));
    await $.mset((await $.wv([$t39, $t40], "edithead", C, false)), "Text", (await $.mv((await $.wcall([$t39, $t40], "FieldByName", ["head"], C)), "AsString")));
    await $.mset((await $.wv([$t39, $t40], "edit1", C, false)), "text", (await $.mv((await $.wcall([$t39, $t40], "fieldbyname", ["acc_inn"], C)), "asstring")));
    await $.mset((await $.mv((await $.wv([$t39, $t40], "m_edit_order", C, false)), "edit1")), "Enabled", (await $.wv([$t39, $t40], "false", C, false)));
    await $.mset((await $.mv((await $.wv([$t39, $t40], "m_edit_order", C, false)), "edit1")), "color", (await $.wv([$t39, $t40], "clmenu", C, false)));
    await $.mcall((await $.wv([$t39, $t40], "m_edit_order", C, false)), "Showmodal", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("Tcustomers_orders", "Sil1Click", async function Sil1Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "v_pnum": '', "v_id": 0};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t41 = (await $.mv((await $.v(C, "DataModCustOrders")), "cust_id"));
    if ($.truthy((await $.wv([$t41], "IsEmpty", C, false)))) {
      await $.stmt((await $.wcall([$t41], "ShowMessage", ["Heç bir sərəncam qeyd olunmayıb!"], C)));
      return L0.result;
    } else {
      await $.mset((await $.mv((await $.wv([$t41], "DataModCustOrders", C, false)), "cust_id")), "active", (await $.wv([$t41], "true", C, false)));
    }
    await $.wset([$t41], "v_pnum", (await $.mv((await $.mcall((await $.mv((await $.wv([$t41], "DataModCustOrders", C, false)), "cust_id")), "FieldByName", ["PNUM"])), "AsString")), { get: async () => L0["v_pnum"], set: async (v) => { L0["v_pnum"] = v; }, local: true });
    await $.wset([$t41], "v_id", (await $.mv((await $.mcall((await $.mv((await $.wv([$t41], "DataModCustOrders", C, false)), "cust_id")), "FieldByName", ["id"])), "asinteger")), { get: async () => L0["v_id"], set: async (v) => { L0["v_id"] = v; }, local: true });
    if ($.truthy($.eq((await $.wcall([$t41], "MessageDlg", [(await $.wcall([$t41], "Format", ["№%s sərəncam silinsin?", [(await $.wv([$t41], "v_pnum", { get: async () => L0["v_pnum"], set: async (v) => { L0["v_pnum"] = v; }, local: true }, false))]], C)), (await $.wv([$t41], "mtConfirmation", C, false)), (await $.wv([$t41], "mbYesNoCancel", C, false)), 0], C)), (await $.wv([$t41], "mrYes", C, false))))) {
      {
        const $t42 = (await $.mv((await $.wv([$t41], "DataModCustOrders", C, false)), "cust_id"));
        const $t43 = (await $.mv((await $.wv([$t41, $t42], "DataModCustOrders", C, false)), "customer_orders"));
        await $.stmt((await $.wcall([$t41, $t42, $t43], "CallProcedure", ["delete_order", [(await $.wv([$t41, $t42, $t43], "v_id", { get: async () => L0["v_id"], set: async (v) => { L0["v_id"] = v; }, local: true }, false))]], C)));
        await $.stmt($.wcall([$t41, $t42, $t43], "Refresh", [], C));
      }
    }
    await $.mcall((await $.mv((await $.wv([$t41], "DataModCustOrders", C, false)), "cust_id")), "refresh", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("Tcustomers_orders", "PrintClick", async function PrintClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "pnum": ''};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t44 = (await $.mv((await $.v(C, "DataModCustOrders")), "cust_id"));
    if ($.truthy((await $.wv([$t44], "IsEmpty", C, false)))) {
      await $.stmt((await $.wcall([$t44], "ShowMessage", ["Hec bir serencam qeyd olunmayib!"], C)));
      return L0.result;
    } else {
      await $.wset([$t44], "pnum", (await $.mv((await $.mcall((await $.mv((await $.wv([$t44], "DataModCustOrders", C, false)), "cust_id")), "FieldByName", ["pnum"])), "AsString")), { get: async () => L0["pnum"], set: async (v) => { L0["pnum"] = v; }, local: true });
    }
    try {
      {
        const $t45 = (await $.wv([$t44], "QRepCustOrders", C, false));
        const $t46 = (await $.mv((await $.wv([$t44, $t45], "DataModCustOrders", C, false)), "cust_id"));
        await $.wset([$t44, $t45, $t46], "Filter", $.add(" pnum= ", (await $.wv([$t44, $t45, $t46], "pnum", { get: async () => L0["pnum"], set: async (v) => { L0["pnum"] = v; }, local: true }, false))), C);
        await $.wset([$t44, $t45, $t46], "Filtered", (await $.wv([$t44, $t45, $t46], "true", C, false)), C);
        await $.stmt($.wcall([$t44, $t45, $t46], "Preview", [], C));
      }
    } finally {
      await $.mset((await $.mv((await $.wv([$t44], "DataModCustOrders", C, false)), "cust_id")), "Filtered", (await $.wv([$t44], "false", C, false)));
    }
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("Tcustomers_orders", "SpeedButton4Click", async function SpeedButton4Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "accountid": 0};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.eq((await $.mv((await $.mv((await $.v(C, "DataModCustOrders")), "search_order")), "Active")), false))) {
    await $.mcall((await $.mv((await $.v(C, "DataModCustOrders")), "search_order")), "Open", []);
  }
  await $.mcall((await $.mv((await $.v(C, "DataModCustOrders")), "search_order")), "refresh", []);
  {
    const $t47 = (await $.mv((await $.v(C, "DataModCustOrders")), "cust"));
    await $.wset([$t47], "AccountID", (await $.mv((await $.wcall([$t47], "FieldByName", ["ID"], C)), "AsInteger")), { get: async () => L0["accountid"], set: async (v) => { L0["accountid"] = v; }, local: true });
    await $.stmt($.wcall([$t47], "CloseAll", [], C));
    await $.stmt($.wcall([$t47], "Open", [], C));
    await $.stmt((await $.wcall([$t47], "Locate", ["ID", (await $.wv([$t47], "AccountID", { get: async () => L0["accountid"], set: async (v) => { L0["accountid"] = v; }, local: true }, false)), []], C)));
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("Tcustomers_orders", "refreshClick", async function refreshClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "accountid": 0};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t48 = (await $.mv((await $.v(C, "DataModCustOrders")), "cust"));
    await $.wset([$t48], "AccountID", (await $.mv((await $.wcall([$t48], "FieldByName", ["ID"], C)), "AsInteger")), { get: async () => L0["accountid"], set: async (v) => { L0["accountid"] = v; }, local: true });
    await $.stmt($.wcall([$t48], "CloseAll", [], C));
    await $.stmt($.wcall([$t48], "Open", [], C));
    await $.stmt((await $.wcall([$t48], "Locate", ["ID", (await $.wv([$t48], "AccountID", { get: async () => L0["accountid"], set: async (v) => { L0["accountid"] = v; }, local: true }, false)), []], C)));
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("Tcustomers_orders", "insDrawItem", async function insDrawItem(Self, p0, p1, p2, p3) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "acanvas": $.copyArg(p1), "arect": $.copyArg(p2), "selected": $.copyArg(p3), result: undefined};
  await $.fixArgs(L0, ["sender", "acanvas", "arect", "selected"]);
  await $.stmt((await $.call(C, "MenuShrift", [L0["sender"], L0["acanvas"], L0["arect"], L0["selected"]])));
  return L0.result;
}, {"params": ["Sender", "ACanvas", "ARect", "Selected"], "kind": "procedure", "ptypes": ["TObject", "TCanvas", "TRect", "Boolean"]});
  U.method("Tcustomers_orders", "refreshDrawItem", async function refreshDrawItem(Self, p0, p1, p2, p3) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "acanvas": $.copyArg(p1), "arect": $.copyArg(p2), "selected": $.copyArg(p3), result: undefined};
  await $.fixArgs(L0, ["sender", "acanvas", "arect", "selected"]);
  await $.stmt((await $.call(C, "MenuShrift", [L0["sender"], L0["acanvas"], L0["arect"], L0["selected"]])));
  return L0.result;
}, {"params": ["Sender", "ACanvas", "ARect", "Selected"], "kind": "procedure", "ptypes": ["TObject", "TCanvas", "TRect", "Boolean"]});
  U.method("Tcustomers_orders", "editDrawItem", async function editDrawItem(Self, p0, p1, p2, p3) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "acanvas": $.copyArg(p1), "arect": $.copyArg(p2), "selected": $.copyArg(p3), result: undefined};
  await $.fixArgs(L0, ["sender", "acanvas", "arect", "selected"]);
  await $.stmt((await $.call(C, "MenuShrift", [L0["sender"], L0["acanvas"], L0["arect"], L0["selected"]])));
  return L0.result;
}, {"params": ["Sender", "ACanvas", "ARect", "Selected"], "kind": "procedure", "ptypes": ["TObject", "TCanvas", "TRect", "Boolean"]});
  U.method("Tcustomers_orders", "Sil1DrawItem", async function Sil1DrawItem(Self, p0, p1, p2, p3) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "acanvas": $.copyArg(p1), "arect": $.copyArg(p2), "selected": $.copyArg(p3), result: undefined};
  await $.fixArgs(L0, ["sender", "acanvas", "arect", "selected"]);
  await $.stmt((await $.call(C, "MenuShrift", [L0["sender"], L0["acanvas"], L0["arect"], L0["selected"]])));
  return L0.result;
}, {"params": ["Sender", "ACanvas", "ARect", "Selected"], "kind": "procedure", "ptypes": ["TObject", "TCanvas", "TRect", "Boolean"]});
  U.method("Tcustomers_orders", "PrintDrawItem", async function PrintDrawItem(Self, p0, p1, p2, p3) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "acanvas": $.copyArg(p1), "arect": $.copyArg(p2), "selected": $.copyArg(p3), result: undefined};
  await $.fixArgs(L0, ["sender", "acanvas", "arect", "selected"]);
  await $.stmt((await $.call(C, "MenuShrift", [L0["sender"], L0["acanvas"], L0["arect"], L0["selected"]])));
  return L0.result;
}, {"params": ["Sender", "ACanvas", "ARect", "Selected"], "kind": "procedure", "ptypes": ["TObject", "TCanvas", "TRect", "Boolean"]});
  return U;
}
