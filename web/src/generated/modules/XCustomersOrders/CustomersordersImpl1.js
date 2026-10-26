// Generated from CustomersordersImpl1.pas by pas2js — do not edit by hand; regenerate instead.
/* eslint-disable */
// @ts-nocheck

export default function define($) {
  const U = $.unit("CustomersordersImpl1", ["Windows", "Messages", "SysUtils", "Classes", "Graphics", "Controls", "Forms", "Dialogs", "ActiveX", "AxCtrls", "CustomersordersProj1_TLB", "StdVcl", "Grids", "DBGrids", "StdCtrls", "Buttons", "ImgList", "NLSLocalizer", "Menus", "ComObj", "ComServ", "Unit3", "Unit4", "Unit5", "Unit6", "Unit8", "Unit9", "Unit10", "Unit11", "Unit12", "Unit7"]);
  const C = [U];
  U.defClass("TCustomersorders", "TActiveForm", {"groupbox1": {"name": "GroupBox1", "type": "TGroupBox"}, "groupbox2": {"name": "GroupBox2", "type": "TGroupBox"}, "groupbox3": {"name": "GroupBox3", "type": "TGroupBox"}, "noedit": {"name": "noEdit", "type": "TEdit"}, "nameedit": {"name": "nameEdit", "type": "TEdit"}, "open_datedit": {"name": "open_datEdit", "type": "TEdit"}, "innedit": {"name": "innEdit", "type": "TEdit"}, "dbgrid1": {"name": "DBGrid1", "type": "TDBGrid"}, "groupbox4": {"name": "GroupBox4", "type": "TGroupBox"}, "groupbox5": {"name": "GroupBox5", "type": "TGroupBox"}, "dbgrid2": {"name": "DBGrid2", "type": "TDBGrid"}, "speedbutton1": {"name": "SpeedButton1", "type": "TSpeedButton"}, "speedbutton2": {"name": "SpeedButton2", "type": "TSpeedButton"}, "speedbutton3": {"name": "SpeedButton3", "type": "TSpeedButton"}, "speedbutton4": {"name": "SpeedButton4", "type": "TSpeedButton"}, "speedbutton5": {"name": "SpeedButton5", "type": "TSpeedButton"}, "speedbutton6": {"name": "SpeedButton6", "type": "TSpeedButton"}, "speedbutton7": {"name": "SpeedButton7", "type": "TSpeedButton"}, "nlslocalizer1": {"name": "NLSLocalizer1", "type": "TNLSLocalizer"}, "imagelist1": {"name": "ImageList1", "type": "TImageList"}, "customers": {"name": "customers", "type": "TPopupMenu"}, "orders": {"name": "orders", "type": "TPopupMenu"}, "elaveetmek1": {"name": "elaveetmek1", "type": "TMenuItem"}, "yenilemek1": {"name": "yenilemek1", "type": "TMenuItem"}, "redakteetmek1": {"name": "redakteetmek1", "type": "TMenuItem"}, "legvetmek1": {"name": "legvetmek1", "type": "TMenuItem"}, "cap1": {"name": "cap1", "type": "TMenuItem"}, "fevents": {"name": "FEvents", "type": "ICustomersordersEvents"}}, {});
  U.init(async () => {
  });
  U.method("TCustomersorders", "DefinePropertyPages", async function DefinePropertyPages(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"definepropertypage": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["definepropertypage"]);
  return L0.result;
}, {"params": ["DefinePropertyPage"], "kind": "procedure", "ptypes": ["TDefinePropertyPage"]});
  U.method("TCustomersorders", "EventSinkChanged", async function EventSinkChanged(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"eventsink": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["eventsink"]);
  await $.set(C, "FEvents", L0["eventsink"]);
  return L0.result;
}, {"params": ["EventSink"], "kind": "procedure", "ptypes": ["IUnknown"]});
  U.method("TCustomersorders", "Initialize", async function Initialize(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: undefined};
  await $.inherited(Self, "TCustomersorders", "Initialize", null, arguments);
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
  U.method("TCustomersorders", "Get_Active", async function Get_Active(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: false};
  L0["result"] = (await $.v(C, "Active"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TCustomersorders", "Get_AutoScroll", async function Get_AutoScroll(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: false};
  L0["result"] = (await $.v(C, "AutoScroll"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TCustomersorders", "Get_AutoSize", async function Get_AutoSize(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: false};
  L0["result"] = (await $.v(C, "AutoSize"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TCustomersorders", "Get_AxBorderStyle", async function Get_AxBorderStyle(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: null};
  L0["result"] = (await $.call(C, "Ord", [(await $.v(C, "AxBorderStyle"))]));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TCustomersorders", "Get_Caption", async function Get_Caption(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: ''};
  L0["result"] = (await $.call(C, "WideString", [(await $.v(C, "Caption"))]));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TCustomersorders", "Get_Color", async function Get_Color(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: null};
  L0["result"] = (await $.call(C, "OLE_COLOR", [(await $.v(C, "Color"))]));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TCustomersorders", "Get_Cursor", async function Get_Cursor(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: 0};
  L0["result"] = (await $.call(C, "Smallint", [(await $.v(C, "Cursor"))]));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TCustomersorders", "Get_DoubleBuffered", async function Get_DoubleBuffered(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: false};
  L0["result"] = (await $.v(C, "DoubleBuffered"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TCustomersorders", "Get_DropTarget", async function Get_DropTarget(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: false};
  L0["result"] = (await $.v(C, "DropTarget"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TCustomersorders", "Get_Enabled", async function Get_Enabled(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: false};
  L0["result"] = (await $.v(C, "Enabled"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TCustomersorders", "Get_Font", async function Get_Font(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: null};
  await $.stmt((await $.call(C, "GetOleFont", [(await $.v(C, "Font")), L0["result"]])));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TCustomersorders", "Get_HelpFile", async function Get_HelpFile(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: ''};
  L0["result"] = (await $.call(C, "WideString", [(await $.v(C, "HelpFile"))]));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TCustomersorders", "Get_KeyPreview", async function Get_KeyPreview(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: false};
  L0["result"] = (await $.v(C, "KeyPreview"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TCustomersorders", "Get_PixelsPerInch", async function Get_PixelsPerInch(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: 0};
  L0["result"] = (await $.v(C, "PixelsPerInch"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TCustomersorders", "Get_PrintScale", async function Get_PrintScale(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: null};
  L0["result"] = (await $.call(C, "Ord", [(await $.v(C, "PrintScale"))]));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TCustomersorders", "Get_Scaled", async function Get_Scaled(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: false};
  L0["result"] = (await $.v(C, "Scaled"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TCustomersorders", "Get_Visible", async function Get_Visible(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: false};
  L0["result"] = (await $.v(C, "Visible"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TCustomersorders", "Get_VisibleDockClientCount", async function Get_VisibleDockClientCount(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: 0};
  L0["result"] = (await $.v(C, "VisibleDockClientCount"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TCustomersorders", "_Set_Font", async function _Set_Font(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.stmt((await $.call(C, "SetOleFont", [(await $.v(C, "Font")), L0["value"]])));
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["IFontDisp"]});
  U.method("TCustomersorders", "ActivateEvent", async function ActivateEvent(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.ne((await $.v(C, "FEvents")), null))) {
    await $.mcall((await $.v(C, "FEvents")), "OnActivate", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TCustomersorders", "ClickEvent", async function ClickEvent(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.ne((await $.v(C, "FEvents")), null))) {
    await $.mcall((await $.v(C, "FEvents")), "OnClick", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TCustomersorders", "CreateEvent", async function CreateEvent(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.ne((await $.v(C, "FEvents")), null))) {
    await $.mcall((await $.v(C, "FEvents")), "OnCreate", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TCustomersorders", "DblClickEvent", async function DblClickEvent(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.ne((await $.v(C, "FEvents")), null))) {
    await $.mcall((await $.v(C, "FEvents")), "OnDblClick", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TCustomersorders", "DeactivateEvent", async function DeactivateEvent(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.ne((await $.v(C, "FEvents")), null))) {
    await $.mcall((await $.v(C, "FEvents")), "OnDeactivate", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TCustomersorders", "DestroyEvent", async function DestroyEvent(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.ne((await $.v(C, "FEvents")), null))) {
    await $.mcall((await $.v(C, "FEvents")), "OnDestroy", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TCustomersorders", "KeyPressEvent", async function KeyPressEvent(Self, p0, p1) {
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
  U.method("TCustomersorders", "PaintEvent", async function PaintEvent(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.ne((await $.v(C, "FEvents")), null))) {
    await $.mcall((await $.v(C, "FEvents")), "OnPaint", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TCustomersorders", "Set_AutoScroll", async function Set_AutoScroll(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "AutoScroll", L0["value"]);
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["WordBool"]});
  U.method("TCustomersorders", "Set_AutoSize", async function Set_AutoSize(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "AutoSize", L0["value"]);
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["WordBool"]});
  U.method("TCustomersorders", "Set_AxBorderStyle", async function Set_AxBorderStyle(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "AxBorderStyle", (await $.call(C, "TActiveFormBorderStyle", [L0["value"]])));
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["TxActiveFormBorderStyle"]});
  U.method("TCustomersorders", "Set_Caption", async function Set_Caption(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "Caption", (await $.call(C, "TCaption", [L0["value"]])));
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["WideString"]});
  U.method("TCustomersorders", "Set_Color", async function Set_Color(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "Color", (await $.call(C, "TColor", [L0["value"]])));
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["OLE_COLOR"]});
  U.method("TCustomersorders", "Set_Cursor", async function Set_Cursor(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "Cursor", (await $.call(C, "TCursor", [L0["value"]])));
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["Smallint"]});
  U.method("TCustomersorders", "Set_DoubleBuffered", async function Set_DoubleBuffered(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "DoubleBuffered", L0["value"]);
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["WordBool"]});
  U.method("TCustomersorders", "Set_DropTarget", async function Set_DropTarget(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "DropTarget", L0["value"]);
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["WordBool"]});
  U.method("TCustomersorders", "Set_Enabled", async function Set_Enabled(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "Enabled", L0["value"]);
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["WordBool"]});
  U.method("TCustomersorders", "Set_Font", async function Set_Font(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.asRef(p0), result: undefined};
  await $.stmt((await $.call(C, "SetOleFont", [(await $.v(C, "Font")), (await L0["value"].get())])));
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["IFontDisp"]});
  U.method("TCustomersorders", "Set_HelpFile", async function Set_HelpFile(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "HelpFile", (await $.call(C, "String", [L0["value"]])));
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["WideString"]});
  U.method("TCustomersorders", "Set_KeyPreview", async function Set_KeyPreview(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "KeyPreview", L0["value"]);
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["WordBool"]});
  U.method("TCustomersorders", "Set_PixelsPerInch", async function Set_PixelsPerInch(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "PixelsPerInch", L0["value"]);
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["Integer"]});
  U.method("TCustomersorders", "Set_PrintScale", async function Set_PrintScale(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "PrintScale", (await $.call(C, "TPrintScale", [L0["value"]])));
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["TxPrintScale"]});
  U.method("TCustomersorders", "Set_Scaled", async function Set_Scaled(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "Scaled", L0["value"]);
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["WordBool"]});
  U.method("TCustomersorders", "Set_Visible", async function Set_Visible(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "Visible", L0["value"]);
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["WordBool"]});
  U.method("TCustomersorders", "SpeedButton1Click", async function SpeedButton1Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  try {
    await $.set(C, "all_orders", (await $.mcall((await $.v(C, "Tall_orders")), "Create", [Self])));
    await $.mcall((await $.v(C, "all_orders")), "Showmodal", []);
  } finally {
    await $.mcall((await $.v(C, "all_orders")), "Release", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TCustomersorders", "SpeedButton3Click", async function SpeedButton3Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  try {
    await $.set(C, "arxiv_orders", (await $.mcall((await $.v(C, "tarxiv_orders")), "create", [Self])));
    await $.mcall((await $.v(C, "arxiv_orders")), "ShowModal", []);
  } finally {
    await $.mcall((await $.v(C, "arxiv_orders")), "Release", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TCustomersorders", "SpeedButton2Click", async function SpeedButton2Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.stmt((await $.mcall((await $.mv((await $.v(C, "dm")), "search_acc")), "SetVariable", ["acc", (await $.mv((await $.idx((await $.mv((await $.mv((await $.mv((await $.v(C, "dm")), "Customers")), "Fields")), "Fields")), [0])), "AsInteger"))])));
  await $.mcall((await $.mv((await $.v(C, "dm")), "search_acc")), "refresh", []);
  try {
    await $.set(C, "Customers_orders_arest", (await $.mcall((await $.v(C, "tCustomers_orders_arest")), "create", [Self])));
    await $.mset((await $.mv((await $.v(C, "Customers_orders_arest")), "innEdit")), "Text", (await $.mv((await $.idx((await $.mv((await $.mv((await $.mv((await $.v(C, "dm")), "Customers")), "Fields")), "Fields")), [3])), "AsString")));
    await $.mcall((await $.v(C, "Customers_orders_arest")), "showmodal", []);
    await $.mset((await $.v(C, "DBGrid1")), "Options", [(await $.v(C, "dgRowSelect")), (await $.v(C, "dgAlwaysShowEditor")), (await $.v(C, "dgTitles")), (await $.v(C, "dgIndicator")), (await $.v(C, "dgColumnResize")), (await $.v(C, "dgColLines")), (await $.v(C, "dgRowLines")), (await $.v(C, "dgTabs")), (await $.v(C, "dgAlwaysShowSelection")), (await $.v(C, "dgConfirmDelete")), (await $.v(C, "dgCancelOnExit")), (await $.v(C, "dgMultiSelect"))]);
  } finally {
    await $.mcall((await $.v(C, "Customers_orders_arest")), "release", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TCustomersorders", "SpeedButton7Click", async function SpeedButton7Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  try {
    await $.set(C, "quickreport1", (await $.mcall((await $.v(C, "tquickreport1")), "create", [Self])));
    await $.mcall((await $.v(C, "quickreport1")), "showmodal", []);
  } finally {
    await $.mcall((await $.v(C, "quickreport1")), "release", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TCustomersorders", "SpeedButton5Click", async function SpeedButton5Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.set(C, "m_edit_order", (await $.mcall((await $.v(C, "tm_edit_order")), "create", [Self])));
  await $.mcall((await $.v(C, "m_edit_order")), "showmodal", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TCustomersorders", "ActiveFormCreate", async function ActiveFormCreate(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.set(C, "dm", (await $.mcall((await $.v(C, "tdm")), "Create", [Self])));
  await $.mcall((await $.mv((await $.v(C, "dm")), "Customers")), "Open", []);
  await $.mset((await $.v(C, "DBGrid1")), "Options", [(await $.v(C, "dgRowSelect")), (await $.v(C, "dgAlwaysShowEditor")), (await $.v(C, "dgTitles")), (await $.v(C, "dgIndicator")), (await $.v(C, "dgColumnResize")), (await $.v(C, "dgColLines")), (await $.v(C, "dgRowLines")), (await $.v(C, "dgTabs")), (await $.v(C, "dgAlwaysShowSelection")), (await $.v(C, "dgConfirmDelete")), (await $.v(C, "dgCancelOnExit")), (await $.v(C, "dgMultiSelect"))]);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TCustomersorders", "noEditExit", async function noEditExit(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mset(L0["sender"], "text", "");
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TCustomersorders", "noEditKeyPress", async function noEditKeyPress(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "key": $.asRef(p1), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.not(($.in_((await L0["key"].get()), [...$.range("0","9"), "\b"]))))) {
    await L0["key"].set("\u0000");
  }
  return L0.result;
}, {"params": ["Sender", "Key"], "kind": "procedure", "ptypes": ["TObject", "Char"]});
  U.method("TCustomersorders", "noEditChange", async function noEditChange(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.ne((await $.mv((await $.v(C, "noedit")), "Text")), ""))) {
    await $.stmt((await $.mcall((await $.mv((await $.v(C, "dm")), "customers")), "Locate", ["id", (await $.mv((await $.v(C, "noedit")), "Text")), []])));
  }
  await $.mset((await $.v(C, "DBGrid1")), "Options", [(await $.v(C, "dgRowSelect")), (await $.v(C, "dgAlwaysShowEditor")), (await $.v(C, "dgTitles")), (await $.v(C, "dgIndicator")), (await $.v(C, "dgColumnResize")), (await $.v(C, "dgColLines")), (await $.v(C, "dgRowLines")), (await $.v(C, "dgTabs")), (await $.v(C, "dgAlwaysShowSelection")), (await $.v(C, "dgConfirmDelete")), (await $.v(C, "dgCancelOnExit")), (await $.v(C, "dgMultiSelect"))]);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TCustomersorders", "nameEditChange", async function nameEditChange(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.ne((await $.mv((await $.v(C, "innedit")), "Text")), ""))) {
    await $.stmt((await $.mcall((await $.mv((await $.v(C, "dm")), "customers")), "Locate", ["inn", (await $.mv((await $.v(C, "innedit")), "Text")), []])));
  }
  await $.mset((await $.v(C, "DBGrid1")), "Options", [(await $.v(C, "dgRowSelect")), (await $.v(C, "dgAlwaysShowEditor")), (await $.v(C, "dgTitles")), (await $.v(C, "dgIndicator")), (await $.v(C, "dgColumnResize")), (await $.v(C, "dgColLines")), (await $.v(C, "dgRowLines")), (await $.v(C, "dgTabs")), (await $.v(C, "dgAlwaysShowSelection")), (await $.v(C, "dgConfirmDelete")), (await $.v(C, "dgCancelOnExit")), (await $.v(C, "dgMultiSelect"))]);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TCustomersorders", "open_datEditChange", async function open_datEditChange(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.ne((await $.mv((await $.v(C, "nameedit")), "Text")), ""))) {
    await $.stmt((await $.mcall((await $.mv((await $.v(C, "dm")), "customers")), "Locate", ["name", (await $.mv((await $.v(C, "nameedit")), "Text")), []])));
  }
  await $.mset((await $.v(C, "DBGrid1")), "Options", [(await $.v(C, "dgRowSelect")), (await $.v(C, "dgAlwaysShowEditor")), (await $.v(C, "dgTitles")), (await $.v(C, "dgIndicator")), (await $.v(C, "dgColumnResize")), (await $.v(C, "dgColLines")), (await $.v(C, "dgRowLines")), (await $.v(C, "dgTabs")), (await $.v(C, "dgAlwaysShowSelection")), (await $.v(C, "dgConfirmDelete")), (await $.v(C, "dgCancelOnExit")), (await $.v(C, "dgMultiSelect"))]);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TCustomersorders", "innEditChange", async function innEditChange(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.ne((await $.mv((await $.v(C, "open_datedit")), "Text")), ""))) {
    await $.stmt((await $.mcall((await $.mv((await $.v(C, "dm")), "customers")), "Locate", ["open_dat", (await $.mv((await $.v(C, "open_datedit")), "Text")), []])));
  }
  await $.mset((await $.v(C, "DBGrid1")), "Options", [(await $.v(C, "dgRowSelect")), (await $.v(C, "dgAlwaysShowEditor")), (await $.v(C, "dgTitles")), (await $.v(C, "dgIndicator")), (await $.v(C, "dgColumnResize")), (await $.v(C, "dgColLines")), (await $.v(C, "dgRowLines")), (await $.v(C, "dgTabs")), (await $.v(C, "dgAlwaysShowSelection")), (await $.v(C, "dgConfirmDelete")), (await $.v(C, "dgCancelOnExit")), (await $.v(C, "dgMultiSelect"))]);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TCustomersorders", "SpeedButton4Click", async function SpeedButton4Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "accountid": 0};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t1 = (await $.mv((await $.v(C, "Dm")), "customers"));
    await $.wset([$t1], "AccountID", (await $.mv((await $.wcall([$t1], "FieldByName", ["ID"], C)), "AsInteger")), { get: async () => L0["accountid"], set: async (v) => { L0["accountid"] = v; }, local: true });
    await $.stmt($.wcall([$t1], "CloseAll", [], C));
    await $.stmt($.wcall([$t1], "Open", [], C));
    await $.stmt((await $.wcall([$t1], "Locate", ["ID", (await $.wv([$t1], "AccountID", { get: async () => L0["accountid"], set: async (v) => { L0["accountid"] = v; }, local: true }, false)), []], C)));
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TCustomersorders", "DBGrid1TitleClick", async function DBGrid1TitleClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"column": $.copyArg(p0), result: undefined, "titlename": ''};
  await $.fixArgs(L0, ["column"]);
  L0["titlename"] = (await $.mv(L0["column"], "FieldName"));
  {
    const $t2 = (await $.mv((await $.v(C, "dm")), "Customers"));
    await $.stmt((await $.wcall([$t2], "setvariable", ["title", (await $.wv([$t2], "titlename", { get: async () => L0["titlename"], set: async (v) => { L0["titlename"] = v; }, local: true }, false))], C)));
    await $.stmt($.wcall([$t2], "refresh", [], C));
  }
  return L0.result;
}, {"params": ["Column"], "kind": "procedure", "ptypes": ["TColumn"]});
  U.method("TCustomersorders", "DBGrid1DblClick", async function DBGrid1DblClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.set(C, "customers_orders_arest", (await $.mcall((await $.v(C, "Tcustomers_orders_arest")), "create", [Self])));
  {
    const $t3 = (await $.mv((await $.v(C, "dm")), "Customers"));
    const $t4 = (await $.wv([$t3], "customers_orders_arest", C, false));
  }
  await $.mcall((await $.v(C, "customers_orders_arest")), "showmodal", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TCustomersorders", "DBGrid1CellClick", async function DBGrid1CellClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"column": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["column"]);
  {
    const $t5 = (await $.mv((await $.v(C, "Dm")), "Search_order"));
    await $.stmt($.wcall([$t5], "Close", [], C));
    await $.mcall((await $.wv([$t5], "SQL", C, false)), "clear", []);
    await $.stmt((await $.mcall((await $.wv([$t5], "SQL", C, false)), "add", [$.add($.add("select * from cust_order where cust_id='", (await $.mv((await $.mcall((await $.mv((await $.wv([$t5], "dm", C, false)), "customers")), "fieldbyname", ["id"])), "asstring"))), "' ")])));
    await $.stmt($.wcall([$t5], "Open", [], C));
    await $.stmt($.wcall([$t5], "Refresh", [], C));
  }
  return L0.result;
}, {"params": ["Column"], "kind": "procedure", "ptypes": ["TColumn"]});
  return U;
}
