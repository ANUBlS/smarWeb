// Generated from cc_BuyersImpl.pas by pas2js — do not edit by hand; regenerate instead.
/* eslint-disable */
// @ts-nocheck

export default function define($) {
  const U = $.unit("cc_BuyersImpl", ["Windows", "Messages", "SysUtils", "Classes", "Graphics", "Controls", "Forms", "NLSDialogs", "ActiveX", "AxCtrls", "cc_BuyersPr_TLB", "StdVcl", "ComCtrls", "ExtCtrls", "ToolWin", "ImgList", "StdCtrls", "Db", "Grids", "DBGridEh", "Menus", "Mask", "DBCtrls", "DBGrids", "NLSLocalizer", "ComObj", "ComServ", "UnitData", "UnitAddBuyers", "UnitUpdBuyers", "UnitAccBuyers", "CC_FormInterval_Unit", "CC_AccTransact_Unit", "CC_AccState_Unit", "CC_AccTransaction_Unit", "CC_AccInForm_Unit", "CC_AccOutForm_Unit", "CC_Settings_Unit", "CC_Repairing_Unit", "Contractimpl", "DatModConstimpl", "RepContImpl"]);
  const C = [U];
  U.defClass("Tcc_Buyers", "TActiveForm", {"imagelist": {"name": "ImageList", "type": "TImageList"}, "groupboxmain": {"name": "GroupBoxMain", "type": "TGroupBox"}, "panelfind": {"name": "PanelFind", "type": "TPanel"}, "toolbarmain": {"name": "ToolBarMain", "type": "TToolBar"}, "toolbuttona": {"name": "ToolButtonA", "type": "TToolButton"}, "toolbtnadd": {"name": "ToolBtnAdd", "type": "TToolButton"}, "toolbuttonb": {"name": "ToolButtonB", "type": "TToolButton"}, "toolbtnedit": {"name": "ToolBtnEdit", "type": "TToolButton"}, "toolbuttonc": {"name": "ToolButtonC", "type": "TToolButton"}, "toolbtndelete": {"name": "ToolBtnDelete", "type": "TToolButton"}, "toolbuttond": {"name": "ToolButtonD", "type": "TToolButton"}, "toolbuttone": {"name": "ToolButtonE", "type": "TToolButton"}, "btnrefresh": {"name": "BtnRefresh", "type": "TToolButton"}, "toolbuttonk": {"name": "ToolButtonK", "type": "TToolButton"}, "toolbtnfind": {"name": "ToolBtnFind", "type": "TToolButton"}, "groupbox1": {"name": "GroupBox1", "type": "TGroupBox"}, "groupbox2": {"name": "GroupBox2", "type": "TGroupBox"}, "groupbox3": {"name": "GroupBox3", "type": "TGroupBox"}, "dbgrid1": {"name": "DBGrid1", "type": "TDBGrid"}, "popupmenumain": {"name": "PopupMenuMain", "type": "TPopupMenu"}, "n2": {"name": "N2", "type": "TMenuItem"}, "n5": {"name": "N5", "type": "TMenuItem"}, "n7": {"name": "N7", "type": "TMenuItem"}, "n6": {"name": "N6", "type": "TMenuItem"}, "n4": {"name": "N4", "type": "TMenuItem"}, "n1": {"name": "N1", "type": "TMenuItem"}, "n3": {"name": "N3", "type": "TMenuItem"}, "toolbutton1": {"name": "ToolButton1", "type": "TToolButton"}, "dbgrid2": {"name": "DBGrid2", "type": "TDBGrid"}, "dbgrid3": {"name": "DBGrid3", "type": "TDBGrid"}, "popupcontract": {"name": "Popupcontract", "type": "TPopupMenu"}, "n8": {"name": "N8", "type": "TMenuItem"}, "buyerid": {"name": "buyerid", "type": "TDBEdit"}, "n9": {"name": "N9", "type": "TMenuItem"}, "n10": {"name": "N10", "type": "TMenuItem"}, "popupcontractsprint": {"name": "PopupContractsPrint", "type": "TPopupMenu"}, "mqavilapet1": {"name": "Mqavilapet1", "type": "TMenuItem"}, "imagelist1": {"name": "ImageList1", "type": "TImageList"}, "fevents": {"name": "FEvents", "type": "Icc_BuyersEvents"}}, {});
  U.init(async () => {
  });
  U.method("Tcc_Buyers", "DefinePropertyPages", async function DefinePropertyPages(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"definepropertypage": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["definepropertypage"]);
  return L0.result;
}, {"params": ["DefinePropertyPage"], "kind": "procedure", "ptypes": ["TDefinePropertyPage"]});
  U.method("Tcc_Buyers", "EventSinkChanged", async function EventSinkChanged(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"eventsink": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["eventsink"]);
  await $.set(C, "FEvents", L0["eventsink"]);
  return L0.result;
}, {"params": ["EventSink"], "kind": "procedure", "ptypes": ["IUnknown"]});
  U.method("Tcc_Buyers", "Initialize", async function Initialize(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: undefined};
  await $.inherited(Self, "Tcc_Buyers", "Initialize", null, arguments);
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
  U.method("Tcc_Buyers", "Get_Active", async function Get_Active(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: false};
  L0["result"] = (await $.v(C, "Active"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("Tcc_Buyers", "Get_AutoScroll", async function Get_AutoScroll(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: false};
  L0["result"] = (await $.v(C, "AutoScroll"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("Tcc_Buyers", "Get_AutoSize", async function Get_AutoSize(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: false};
  L0["result"] = (await $.v(C, "AutoSize"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("Tcc_Buyers", "Get_AxBorderStyle", async function Get_AxBorderStyle(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: null};
  L0["result"] = (await $.call(C, "Ord", [(await $.v(C, "AxBorderStyle"))]));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("Tcc_Buyers", "Get_Caption", async function Get_Caption(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: ''};
  L0["result"] = (await $.call(C, "WideString", [(await $.v(C, "Caption"))]));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("Tcc_Buyers", "Get_Color", async function Get_Color(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: null};
  L0["result"] = (await $.call(C, "OLE_COLOR", [(await $.v(C, "Color"))]));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("Tcc_Buyers", "Get_Cursor", async function Get_Cursor(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: 0};
  L0["result"] = (await $.call(C, "Smallint", [(await $.v(C, "Cursor"))]));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("Tcc_Buyers", "Get_DoubleBuffered", async function Get_DoubleBuffered(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: false};
  L0["result"] = (await $.v(C, "DoubleBuffered"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("Tcc_Buyers", "Get_DropTarget", async function Get_DropTarget(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: false};
  L0["result"] = (await $.v(C, "DropTarget"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("Tcc_Buyers", "Get_Enabled", async function Get_Enabled(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: false};
  L0["result"] = (await $.v(C, "Enabled"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("Tcc_Buyers", "Get_Font", async function Get_Font(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: null};
  await $.stmt((await $.call(C, "GetOleFont", [(await $.v(C, "Font")), L0["result"]])));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("Tcc_Buyers", "Get_HelpFile", async function Get_HelpFile(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: ''};
  L0["result"] = (await $.call(C, "WideString", [(await $.v(C, "HelpFile"))]));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("Tcc_Buyers", "Get_KeyPreview", async function Get_KeyPreview(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: false};
  L0["result"] = (await $.v(C, "KeyPreview"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("Tcc_Buyers", "Get_PixelsPerInch", async function Get_PixelsPerInch(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: 0};
  L0["result"] = (await $.v(C, "PixelsPerInch"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("Tcc_Buyers", "Get_PrintScale", async function Get_PrintScale(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: null};
  L0["result"] = (await $.call(C, "Ord", [(await $.v(C, "PrintScale"))]));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("Tcc_Buyers", "Get_Scaled", async function Get_Scaled(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: false};
  L0["result"] = (await $.v(C, "Scaled"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("Tcc_Buyers", "Get_Visible", async function Get_Visible(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: false};
  L0["result"] = (await $.v(C, "Visible"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("Tcc_Buyers", "Get_VisibleDockClientCount", async function Get_VisibleDockClientCount(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: 0};
  L0["result"] = (await $.v(C, "VisibleDockClientCount"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("Tcc_Buyers", "_Set_Font", async function _Set_Font(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.stmt((await $.call(C, "SetOleFont", [(await $.v(C, "Font")), L0["value"]])));
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["IFontDisp"]});
  U.method("Tcc_Buyers", "ActivateEvent", async function ActivateEvent(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.ne((await $.v(C, "FEvents")), null))) {
    await $.mcall((await $.v(C, "FEvents")), "OnActivate", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("Tcc_Buyers", "ClickEvent", async function ClickEvent(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.ne((await $.v(C, "FEvents")), null))) {
    await $.mcall((await $.v(C, "FEvents")), "OnClick", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("Tcc_Buyers", "CreateEvent", async function CreateEvent(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.ne((await $.v(C, "FEvents")), null))) {
    await $.mcall((await $.v(C, "FEvents")), "OnCreate", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("Tcc_Buyers", "DblClickEvent", async function DblClickEvent(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.ne((await $.v(C, "FEvents")), null))) {
    await $.mcall((await $.v(C, "FEvents")), "OnDblClick", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("Tcc_Buyers", "DeactivateEvent", async function DeactivateEvent(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.ne((await $.v(C, "FEvents")), null))) {
    await $.mcall((await $.v(C, "FEvents")), "OnDeactivate", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("Tcc_Buyers", "DestroyEvent", async function DestroyEvent(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.ne((await $.v(C, "FEvents")), null))) {
    await $.mcall((await $.v(C, "FEvents")), "OnDestroy", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("Tcc_Buyers", "KeyPressEvent", async function KeyPressEvent(Self, p0, p1) {
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
  U.method("Tcc_Buyers", "Mqavilapet1Click", async function Mqavilapet1Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy((await $.mv((await $.mv((await $.v(C, "DataMod_Buyers")), "CC_Flat")), "IsEmpty")))) {
    await $.stmt((await $.call(C, "ShowMessage", ["Heç bir müqavilə seçilməyib"])));
    return L0.result;
  } else {
    if ($.truthy($.not((await $.call(C, "Assigned", [(await $.v(C, "DatModConstr"))]))))) {
      await $.set(C, "DatModConstr", (await $.mcall((await $.v(C, "TDatModConstr")), "Create", [Self])));
    }
    await $.mcall((await $.mv((await $.v(C, "DatModConstr")), "cc_bookmarkDataSet")), "Close", []);
    await $.stmt((await $.mcall((await $.mv((await $.v(C, "DatModConstr")), "cc_bookmarkDataSet")), "SetVariable", ["Flatcode", (await $.mv((await $.mcall((await $.mv((await $.mv((await $.v(C, "DBGrid3")), "DataSource")), "DataSet")), "fieldbyname", ["Flatcode"])), "AsString"))])));
    await $.mcall((await $.mv((await $.v(C, "DatModConstr")), "cc_bookmarkDataSet")), "Open", []);
    await $.mcall((await $.mv((await $.v(C, "DatModConstr")), "Templates")), "Close", []);
    await $.mcall((await $.mv((await $.v(C, "DatModConstr")), "Templates")), "Open", []);
    await $.set(C, "RepCont", (await $.mcall((await $.v(C, "TRepCont")), "Create", [Self])));
    await $.mcall((await $.v(C, "RepCont")), "ShowModal", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("Tcc_Buyers", "PaintEvent", async function PaintEvent(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.ne((await $.v(C, "FEvents")), null))) {
    await $.mcall((await $.v(C, "FEvents")), "OnPaint", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("Tcc_Buyers", "Set_AutoScroll", async function Set_AutoScroll(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "AutoScroll", L0["value"]);
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["WordBool"]});
  U.method("Tcc_Buyers", "Set_AutoSize", async function Set_AutoSize(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "AutoSize", L0["value"]);
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["WordBool"]});
  U.method("Tcc_Buyers", "Set_AxBorderStyle", async function Set_AxBorderStyle(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "AxBorderStyle", (await $.call(C, "TActiveFormBorderStyle", [L0["value"]])));
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["TxActiveFormBorderStyle"]});
  U.method("Tcc_Buyers", "Set_Caption", async function Set_Caption(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "Caption", (await $.call(C, "TCaption", [L0["value"]])));
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["WideString"]});
  U.method("Tcc_Buyers", "Set_Color", async function Set_Color(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "Color", (await $.call(C, "TColor", [L0["value"]])));
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["OLE_COLOR"]});
  U.method("Tcc_Buyers", "Set_Cursor", async function Set_Cursor(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "Cursor", (await $.call(C, "TCursor", [L0["value"]])));
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["Smallint"]});
  U.method("Tcc_Buyers", "Set_DoubleBuffered", async function Set_DoubleBuffered(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "DoubleBuffered", L0["value"]);
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["WordBool"]});
  U.method("Tcc_Buyers", "Set_DropTarget", async function Set_DropTarget(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "DropTarget", L0["value"]);
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["WordBool"]});
  U.method("Tcc_Buyers", "Set_Enabled", async function Set_Enabled(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "Enabled", L0["value"]);
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["WordBool"]});
  U.method("Tcc_Buyers", "Set_Font", async function Set_Font(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.asRef(p0), result: undefined};
  await $.stmt((await $.call(C, "SetOleFont", [(await $.v(C, "Font")), (await L0["value"].get())])));
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["IFontDisp"]});
  U.method("Tcc_Buyers", "Set_HelpFile", async function Set_HelpFile(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "HelpFile", (await $.call(C, "String", [L0["value"]])));
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["WideString"]});
  U.method("Tcc_Buyers", "Set_KeyPreview", async function Set_KeyPreview(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "KeyPreview", L0["value"]);
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["WordBool"]});
  U.method("Tcc_Buyers", "Set_PixelsPerInch", async function Set_PixelsPerInch(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "PixelsPerInch", L0["value"]);
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["Integer"]});
  U.method("Tcc_Buyers", "Set_PrintScale", async function Set_PrintScale(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "PrintScale", (await $.call(C, "TPrintScale", [L0["value"]])));
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["TxPrintScale"]});
  U.method("Tcc_Buyers", "Set_Scaled", async function Set_Scaled(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "Scaled", L0["value"]);
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["WordBool"]});
  U.method("Tcc_Buyers", "Set_Visible", async function Set_Visible(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "Visible", L0["value"]);
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["WordBool"]});
  U.method("Tcc_Buyers", "ToolBtnFindClick", async function ToolBtnFindClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mcall((await $.mv((await $.v(C, "DataMod_Buyers")), "Country")), "Open", []);
  await $.set(C, "FormAddBuyers", (await $.mcall((await $.v(C, "TFormAddBuyers")), "Create", [Self])));
  await $.mset((await $.mv((await $.v(C, "FormAddBuyers")), "AddUpd")), "Text", "3");
  await $.mcall((await $.v(C, "FormAddBuyers")), "ShowModal", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("Tcc_Buyers", "ActiveFormCreate", async function ActiveFormCreate(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.set(C, "DataMod_Buyers", (await $.mcall((await $.v(C, "TDataMod_Buyers")), "Create", [Self])));
  await $.mcall((await $.v(C, "BtnRefresh")), "Click", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.func("MenuShrift", async function MenuShrift(Self, p0, p1, p2, p3) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "acanvas": $.copyArg(p1), "arect": $.copyArg(p2), "selected": $.copyArg(p3), result: undefined, "linebottom": 0, "stext": '', "bar": null};
  await $.fixArgs(L0, ["sender", "acanvas", "arect", "selected"]);
  {
    const $t1 = L0["acanvas"];
    const $t2 = (await $.wv([$t1], "Sender", { get: async () => L0["sender"], set: async (v) => { L0["sender"] = v; }, local: true }, false));
    {
      const $t3 = (await $.wv([$t1, $t2], "Font", C, false));
      await $.wset([$t1, $t2, $t3], "Name", "Tahoma", C);
      await $.wset([$t1, $t2, $t3], "Charset", (await $.wv([$t1, $t2, $t3], "Default_CHARSET", C, false)), C);
      if ($.truthy((await $.wv([$t1, $t2, $t3], "Default", C, false)))) {
        await $.wset([$t1, $t2, $t3], "Style", [(await $.wv([$t1, $t2, $t3], "fsBold", C, false))], C);
      }
    }
    if ($.truthy($.eq((await $.wv([$t1, $t2], "Caption", C, false)), "-"))) {
      await $.mset((await $.wv([$t1, $t2], "Pen", C, false)), "Color", (await $.wv([$t1, $t2], "clBlack", C, false)));
      await $.wset([$t1, $t2], "LineBottom", $.sub(($.add((await $.mv((await $.wv([$t1, $t2], "ARect", { get: async () => L0["arect"], set: async (v) => { L0["arect"] = v; }, local: true }, false)), "Top")), $.idiv(($.sub((await $.mv((await $.wv([$t1, $t2], "ARect", { get: async () => L0["arect"], set: async (v) => { L0["arect"] = v; }, local: true }, false)), "Bottom")), (await $.mv((await $.wv([$t1, $t2], "ARect", { get: async () => L0["arect"], set: async (v) => { L0["arect"] = v; }, local: true }, false)), "Top")))), 2))), 1), { get: async () => L0["linebottom"], set: async (v) => { L0["linebottom"] = v; }, local: true });
      await $.stmt((await $.wcall([$t1, $t2], "MoveTo", [(await $.mv((await $.wv([$t1, $t2], "ARect", { get: async () => L0["arect"], set: async (v) => { L0["arect"] = v; }, local: true }, false)), "Left")), (await $.wv([$t1, $t2], "LineBottom", { get: async () => L0["linebottom"], set: async (v) => { L0["linebottom"] = v; }, local: true }, false))], C)));
      await $.stmt((await $.wcall([$t1, $t2], "LineTo", [(await $.mv((await $.wv([$t1, $t2], "ARect", { get: async () => L0["arect"], set: async (v) => { L0["arect"] = v; }, local: true }, false)), "Right")), (await $.wv([$t1, $t2], "LineBottom", { get: async () => L0["linebottom"], set: async (v) => { L0["linebottom"] = v; }, local: true }, false))], C)));
      await $.stmt((await $.wcall([$t1, $t2], "inc", [$.ref(async () => (await $.wv([$t1, $t2], "LineBottom", { get: async () => L0["linebottom"], set: async (v) => { L0["linebottom"] = v; }, local: true }, false)), async ($t4) => { await $.wset([$t1, $t2], "LineBottom", $t4, { get: async () => L0["linebottom"], set: async (v) => { L0["linebottom"] = v; }, local: true }); })], C)));
      await $.mset((await $.wv([$t1, $t2], "Pen", C, false)), "Color", (await $.wv([$t1, $t2], "clWhite", C, false)));
      await $.stmt((await $.wcall([$t1, $t2], "MoveTo", [(await $.mv((await $.wv([$t1, $t2], "ARect", { get: async () => L0["arect"], set: async (v) => { L0["arect"] = v; }, local: true }, false)), "Left")), (await $.wv([$t1, $t2], "LineBottom", { get: async () => L0["linebottom"], set: async (v) => { L0["linebottom"] = v; }, local: true }, false))], C)));
      await $.stmt((await $.wcall([$t1, $t2], "LineTo", [(await $.mv((await $.wv([$t1, $t2], "ARect", { get: async () => L0["arect"], set: async (v) => { L0["arect"] = v; }, local: true }, false)), "Right")), (await $.wv([$t1, $t2], "LineBottom", { get: async () => L0["linebottom"], set: async (v) => { L0["linebottom"] = v; }, local: true }, false))], C)));
    } else {
      if ($.truthy((await $.wv([$t1, $t2], "Selected", { get: async () => L0["selected"], set: async (v) => { L0["selected"] = v; }, local: true }, false)))) {
        await $.mset((await $.wv([$t1, $t2], "Brush", C, false)), "Color", (await $.wv([$t1, $t2], "clNavy", C, false)));
        if ($.truthy((await $.wv([$t1, $t2], "Enabled", C, false)))) {
          await $.mset((await $.wv([$t1, $t2], "Font", C, false)), "Color", (await $.wv([$t1, $t2], "clWhite", C, false)));
        } else {
          await $.mset((await $.wv([$t1, $t2], "Font", C, false)), "Color", (await $.wv([$t1, $t2], "clSilver", C, false)));
        }
      } else {
        await $.mset((await $.wv([$t1, $t2], "Brush", C, false)), "Color", (await $.wv([$t1, $t2], "clBtnFace", C, false)));
        if ($.truthy((await $.wv([$t1, $t2], "Enabled", C, false)))) {
          await $.mset((await $.wv([$t1, $t2], "Font", C, false)), "Color", (await $.wv([$t1, $t2], "clBlack", C, false)));
        } else {
          await $.mset((await $.wv([$t1, $t2], "Font", C, false)), "Color", (await $.wv([$t1, $t2], "clGrayText", C, false)));
        }
      }
      await $.wset([$t1, $t2], "Bar", (await $.wv([$t1, $t2], "ARect", { get: async () => L0["arect"], set: async (v) => { L0["arect"] = v; }, local: true }, false)), { get: async () => L0["bar"], set: async (v) => { L0["bar"] = v; }, local: true });
      await $.stmt((await $.wcall([$t1, $t2], "FillRect", [(await $.wv([$t1, $t2], "Bar", { get: async () => L0["bar"], set: async (v) => { L0["bar"] = v; }, local: true }, false))], C)));
      await $.stmt((await $.wcall([$t1, $t2], "TextOut", [$.add((await $.mv((await $.wv([$t1, $t2], "ARect", { get: async () => L0["arect"], set: async (v) => { L0["arect"] = v; }, local: true }, false)), "Left")), 2), $.add((await $.mv((await $.wv([$t1, $t2], "ARect", { get: async () => L0["arect"], set: async (v) => { L0["arect"] = v; }, local: true }, false)), "Top")), 1), (await $.wv([$t1, $t2], "Caption", C, false))], C)));
    }
    await $.wset([$t1, $t2], "SText", (await $.wcall([$t1, $t2], "ShortCutToText", [(await $.wv([$t1, $t2], "ShortCut", C, false))], C)), { get: async () => L0["stext"], set: async (v) => { L0["stext"] = v; }, local: true });
    await $.stmt((await $.wcall([$t1, $t2], "TextOut", [$.sub($.sub((await $.mv((await $.wv([$t1, $t2], "ARect", { get: async () => L0["arect"], set: async (v) => { L0["arect"] = v; }, local: true }, false)), "Right")), (await $.wcall([$t1, $t2], "TextWidth", [(await $.wv([$t1, $t2], "SText", { get: async () => L0["stext"], set: async (v) => { L0["stext"] = v; }, local: true }, false))], C))), 2), $.add((await $.mv((await $.wv([$t1, $t2], "ARect", { get: async () => L0["arect"], set: async (v) => { L0["arect"] = v; }, local: true }, false)), "Top")), 1), (await $.wv([$t1, $t2], "SText", { get: async () => L0["stext"], set: async (v) => { L0["stext"] = v; }, local: true }, false))], C)));
    if ($.truthy($.ne((await $.wv([$t1, $t2], "ImageIndex", C, false)), (-(1))))) {
      {
        const $t5 = (await $.wv([$t1, $t2], "GetParentMenu", C, false));
        if ($.truthy((await $.wcall([$t1, $t2, $t5], "Assigned", [(await $.wv([$t1, $t2, $t5], "Images", C, false))], C)))) {
          if ($.truthy((await $.wv([$t1, $t2, $t5], "Checked", C, false)))) {
            await $.mset((await $.wv([$t1, $t2, $t5], "Bar", { get: async () => L0["bar"], set: async (v) => { L0["bar"] = v; }, local: true }, false)), "Left", $.add((await $.mv((await $.wv([$t1, $t2, $t5], "ARect", { get: async () => L0["arect"], set: async (v) => { L0["arect"] = v; }, local: true }, false)), "Left")), 1));
            await $.mset((await $.wv([$t1, $t2, $t5], "Bar", { get: async () => L0["bar"], set: async (v) => { L0["bar"] = v; }, local: true }, false)), "Right", $.add((await $.mv((await $.wv([$t1, $t2, $t5], "Bar", { get: async () => L0["bar"], set: async (v) => { L0["bar"] = v; }, local: true }, false)), "Left")), 16));
            await $.mset((await $.wv([$t1, $t2, $t5], "Bar", { get: async () => L0["bar"], set: async (v) => { L0["bar"] = v; }, local: true }, false)), "Top", $.add((await $.mv((await $.wv([$t1, $t2, $t5], "ARect", { get: async () => L0["arect"], set: async (v) => { L0["arect"] = v; }, local: true }, false)), "Top")), 1));
            await $.mset((await $.wv([$t1, $t2, $t5], "Bar", { get: async () => L0["bar"], set: async (v) => { L0["bar"] = v; }, local: true }, false)), "Bottom", $.add((await $.mv((await $.wv([$t1, $t2, $t5], "Bar", { get: async () => L0["bar"], set: async (v) => { L0["bar"] = v; }, local: true }, false)), "Top")), 16));
            await $.mset((await $.mv((await $.wv([$t1, $t2, $t5], "ACanvas", { get: async () => L0["acanvas"], set: async (v) => { L0["acanvas"] = v; }, local: true }, false)), "Brush")), "Color", (await $.wv([$t1, $t2, $t5], "clBtnShadow", C, false)));
            await $.stmt((await $.mcall((await $.wv([$t1, $t2, $t5], "ACanvas", { get: async () => L0["acanvas"], set: async (v) => { L0["acanvas"] = v; }, local: true }, false)), "FrameRect", [(await $.wv([$t1, $t2, $t5], "Bar", { get: async () => L0["bar"], set: async (v) => { L0["bar"] = v; }, local: true }, false))])));
            await $.stmt((await $.wcall([$t1, $t2, $t5], "Inc", [$.ref(async () => (await $.mv((await $.wv([$t1, $t2, $t5], "Bar", { get: async () => L0["bar"], set: async (v) => { L0["bar"] = v; }, local: true }, false)), "Left")), async ($t6) => { await $.mset((await $.wv([$t1, $t2, $t5], "Bar", { get: async () => L0["bar"], set: async (v) => { L0["bar"] = v; }, local: true }, false)), "Left", $t6); }), 2], C)));
            await $.stmt((await $.wcall([$t1, $t2, $t5], "Inc", [$.ref(async () => (await $.mv((await $.wv([$t1, $t2, $t5], "Bar", { get: async () => L0["bar"], set: async (v) => { L0["bar"] = v; }, local: true }, false)), "Right")), async ($t7) => { await $.mset((await $.wv([$t1, $t2, $t5], "Bar", { get: async () => L0["bar"], set: async (v) => { L0["bar"] = v; }, local: true }, false)), "Right", $t7); }), 2], C)));
            await $.stmt((await $.wcall([$t1, $t2, $t5], "Inc", [$.ref(async () => (await $.mv((await $.wv([$t1, $t2, $t5], "Bar", { get: async () => L0["bar"], set: async (v) => { L0["bar"] = v; }, local: true }, false)), "Top")), async ($t8) => { await $.mset((await $.wv([$t1, $t2, $t5], "Bar", { get: async () => L0["bar"], set: async (v) => { L0["bar"] = v; }, local: true }, false)), "Top", $t8); }), 2], C)));
            await $.stmt((await $.wcall([$t1, $t2, $t5], "Inc", [$.ref(async () => (await $.mv((await $.wv([$t1, $t2, $t5], "Bar", { get: async () => L0["bar"], set: async (v) => { L0["bar"] = v; }, local: true }, false)), "Bottom")), async ($t9) => { await $.mset((await $.wv([$t1, $t2, $t5], "Bar", { get: async () => L0["bar"], set: async (v) => { L0["bar"] = v; }, local: true }, false)), "Bottom", $t9); }), 2], C)));
            await $.mset((await $.mv((await $.wv([$t1, $t2, $t5], "ACanvas", { get: async () => L0["acanvas"], set: async (v) => { L0["acanvas"] = v; }, local: true }, false)), "Brush")), "Color", (await $.wv([$t1, $t2, $t5], "clBtnHighlight", C, false)));
            await $.stmt((await $.mcall((await $.wv([$t1, $t2, $t5], "ACanvas", { get: async () => L0["acanvas"], set: async (v) => { L0["acanvas"] = v; }, local: true }, false)), "FrameRect", [(await $.wv([$t1, $t2, $t5], "Bar", { get: async () => L0["bar"], set: async (v) => { L0["bar"] = v; }, local: true }, false))])));
            await $.stmt((await $.wcall([$t1, $t2, $t5], "Dec", [$.ref(async () => (await $.mv((await $.wv([$t1, $t2, $t5], "Bar", { get: async () => L0["bar"], set: async (v) => { L0["bar"] = v; }, local: true }, false)), "Left")), async ($t10) => { await $.mset((await $.wv([$t1, $t2, $t5], "Bar", { get: async () => L0["bar"], set: async (v) => { L0["bar"] = v; }, local: true }, false)), "Left", $t10); }), 1], C)));
            await $.stmt((await $.wcall([$t1, $t2, $t5], "Dec", [$.ref(async () => (await $.mv((await $.wv([$t1, $t2, $t5], "Bar", { get: async () => L0["bar"], set: async (v) => { L0["bar"] = v; }, local: true }, false)), "Right")), async ($t11) => { await $.mset((await $.wv([$t1, $t2, $t5], "Bar", { get: async () => L0["bar"], set: async (v) => { L0["bar"] = v; }, local: true }, false)), "Right", $t11); }), 1], C)));
            await $.stmt((await $.wcall([$t1, $t2, $t5], "Dec", [$.ref(async () => (await $.mv((await $.wv([$t1, $t2, $t5], "Bar", { get: async () => L0["bar"], set: async (v) => { L0["bar"] = v; }, local: true }, false)), "Top")), async ($t12) => { await $.mset((await $.wv([$t1, $t2, $t5], "Bar", { get: async () => L0["bar"], set: async (v) => { L0["bar"] = v; }, local: true }, false)), "Top", $t12); }), 1], C)));
            await $.stmt((await $.wcall([$t1, $t2, $t5], "Dec", [$.ref(async () => (await $.mv((await $.wv([$t1, $t2, $t5], "Bar", { get: async () => L0["bar"], set: async (v) => { L0["bar"] = v; }, local: true }, false)), "Bottom")), async ($t13) => { await $.mset((await $.wv([$t1, $t2, $t5], "Bar", { get: async () => L0["bar"], set: async (v) => { L0["bar"] = v; }, local: true }, false)), "Bottom", $t13); }), 1], C)));
            if ($.truthy((await $.wv([$t1, $t2, $t5], "Selected", { get: async () => L0["selected"], set: async (v) => { L0["selected"] = v; }, local: true }, false)))) {
              await $.mset((await $.mv((await $.wv([$t1, $t2, $t5], "ACanvas", { get: async () => L0["acanvas"], set: async (v) => { L0["acanvas"] = v; }, local: true }, false)), "Brush")), "Color", (await $.wv([$t1, $t2, $t5], "clBtnFace", C, false)));
            } else {
              await $.mset((await $.mv((await $.wv([$t1, $t2, $t5], "ACanvas", { get: async () => L0["acanvas"], set: async (v) => { L0["acanvas"] = v; }, local: true }, false)), "Brush")), "Color", (await $.wv([$t1, $t2, $t5], "clBtnHighlight", C, false)));
            }
            await $.stmt((await $.mcall((await $.wv([$t1, $t2, $t5], "ACanvas", { get: async () => L0["acanvas"], set: async (v) => { L0["acanvas"] = v; }, local: true }, false)), "FillRect", [(await $.wv([$t1, $t2, $t5], "Bar", { get: async () => L0["bar"], set: async (v) => { L0["bar"] = v; }, local: true }, false))])));
          }
          await $.stmt((await $.mcall((await $.wv([$t1, $t2, $t5], "Images", C, false)), "Draw", [(await $.wv([$t1, $t2, $t5], "ACanvas", { get: async () => L0["acanvas"], set: async (v) => { L0["acanvas"] = v; }, local: true }, false)), (await $.mv((await $.wv([$t1, $t2, $t5], "ARect", { get: async () => L0["arect"], set: async (v) => { L0["arect"] = v; }, local: true }, false)), "Left")), (await $.mv((await $.wv([$t1, $t2, $t5], "ARect", { get: async () => L0["arect"], set: async (v) => { L0["arect"] = v; }, local: true }, false)), "Top")), (await $.wv([$t1, $t2, $t5], "ImageIndex", C, false)), (await $.wv([$t1, $t2, $t5], "Enabled", C, false))])));
        }
      }
    }
  }
  return L0.result;
}, {"params": ["Sender", "ACanvas", "ARect", "Selected"], "kind": "procedure", "ptypes": ["TObject", "TCanvas", "TRect", "Boolean"]});
  U.method("Tcc_Buyers", "ToolBtnAddClick", async function ToolBtnAddClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mcall((await $.mv((await $.v(C, "DataMod_Buyers")), "Country")), "Open", []);
  await $.set(C, "FormAddBuyers", (await $.mcall((await $.v(C, "TFormAddBuyers")), "Create", [Self])));
  await $.mset((await $.mv((await $.v(C, "FormAddBuyers")), "AddUpd")), "Text", "1");
  await $.mcall((await $.v(C, "FormAddBuyers")), "ShowModal", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("Tcc_Buyers", "ToolBtnEditClick", async function ToolBtnEditClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mcall((await $.mv((await $.v(C, "DataMod_Buyers")), "Country")), "Open", []);
  await $.set(C, "FormAddBuyers", (await $.mcall((await $.v(C, "TFormAddBuyers")), "Create", [Self])));
  await $.mset((await $.mv((await $.v(C, "FormAddBuyers")), "AddUpd")), "Text", "2");
  await $.mcall((await $.v(C, "FormAddBuyers")), "ShowModal", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("Tcc_Buyers", "ToolBtnDeleteClick", async function ToolBtnDeleteClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "v_id": 0, "v_name": ''};
  await $.fixArgs(L0, ["sender"]);
  L0["table_name"] = "cc_Buyers";
  {
    const $t14 = (await $.v(C, "DataMod_Buyers"));
    await $.wset([$t14], "v_id", (await $.mv((await $.mcall((await $.wv([$t14], "ODSBuyers", C, false)), "FieldByName", ["Id"])), "AsInteger")), { get: async () => L0["v_id"], set: async (v) => { L0["v_id"] = v; }, local: true });
    await $.wset([$t14], "v_name", (await $.mv((await $.mcall((await $.wv([$t14], "ODSBuyers", C, false)), "Fieldbyname", ["byr_name"])), "asstring")), { get: async () => L0["v_name"], set: async (v) => { L0["v_name"] = v; }, local: true });
    if ($.truthy($.eq((await $.wcall([$t14], "MessageDlg", [(await $.wcall([$t14], "Format", ["%s adlı alıcı silinsin?", [(await $.wv([$t14], "v_name", { get: async () => L0["v_name"], set: async (v) => { L0["v_name"] = v; }, local: true }, false))]], C)), (await $.wv([$t14], "mtConfirmation", C, false)), (await $.wv([$t14], "mbYesNoCancel", C, false)), 0], C)), (await $.wv([$t14], "mrYes", C, false))))) {
      await $.stmt((await $.mcall((await $.wv([$t14], "CC_GENERAL", C, false)), "CallProcedure", ["del_fromTable", [(await $.wv([$t14], "table_name", { get: async () => L0["table_name"], set: async (v) => { L0["table_name"] = v; }, local: true }, false)), (await $.wv([$t14], "v_id", { get: async () => L0["v_id"], set: async (v) => { L0["v_id"] = v; }, local: true }, false))]])));
    }
    await $.mcall((await $.wv([$t14], "ODSBuyers", C, false)), "Close", []);
    await $.mcall((await $.wv([$t14], "ODSBuyers", C, false)), "Open", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("Tcc_Buyers", "DBGridBuyersDblClick", async function DBGridBuyersDblClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.set(C, "FormUpdBuyers", (await $.mcall((await $.v(C, "TFormUpdBuyers")), "Create", [Self])));
  await $.mcall((await $.v(C, "FormUpdBuyers")), "ShowModal", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("Tcc_Buyers", "BtnRefreshClick", async function BtnRefreshClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t15 = (await $.v(C, "DataMod_Buyers"));
    { const $t16 = await $.iset((await $.mv((await $.wv([$t15], "ODSBuyers", C, false)), "Sql")), [5], ""); if ($t16 !== undefined) { await $.mset((await $.wv([$t15], "ODSBuyers", C, false)), "Sql", $t16); } }
    await $.mcall((await $.wv([$t15], "ODSBuyers", C, false)), "close", []);
    await $.mcall((await $.wv([$t15], "ODSBuyers", C, false)), "Open", []);
    await $.mcall((await $.wv([$t15], "AccNO", C, false)), "Close", []);
    await $.mcall((await $.wv([$t15], "Accno", C, false)), "open", []);
    await $.mcall((await $.wv([$t15], "CC_Flat", C, false)), "Close", []);
    await $.mcall((await $.wv([$t15], "CC_Flat", C, false)), "open", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("Tcc_Buyers", "N1Click", async function N1Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t17 = (await $.mv((await $.v(C, "DataMod_Buyers")), "Accno"));
    if ($.truthy((await $.wv([$t17], "IsEmpty", C, false)))) {
      await $.stmt((await $.wcall([$t17], "ShowMessage", ["Heç bir hesab qeyd olunmayıb!"], C)));
      return L0.result;
    } else {
      try {
        await $.wset([$t17], "CC_AccInForm", (await $.mcall((await $.wv([$t17], "TCC_AccInForm", C, false)), "Create", [Self])), C);
        await $.mcall((await $.mv((await $.wv([$t17], "CC_AccInForm", C, false)), "CC_InForm")), "Close", []);
        { const $t18 = await $.iset((await $.mv((await $.mv((await $.wv([$t17], "CC_AccInForm", C, false)), "CC_InForm")), "SQL")), [15], "debt>0"); if ($t18 !== undefined) { await $.mset((await $.mv((await $.wv([$t17], "CC_AccInForm", C, false)), "CC_InForm")), "SQL", $t18); } }
        await $.mcall((await $.mv((await $.wv([$t17], "CC_AccInForm", C, false)), "CC_InForm")), "Open", []);
        await $.mcall((await $.wv([$t17], "CC_AccInForm", C, false)), "Showmodal", []);
      } finally {
        await $.mcall((await $.wv([$t17], "CC_AccInForm", C, false)), "Release", []);
      }
    }
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("Tcc_Buyers", "N1DrawItem", async function N1DrawItem(Self, p0, p1, p2, p3) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "acanvas": $.copyArg(p1), "arect": $.copyArg(p2), "selected": $.copyArg(p3), result: undefined};
  await $.fixArgs(L0, ["sender", "acanvas", "arect", "selected"]);
  await $.stmt((await $.call(C, "MenuShrift", [L0["sender"], L0["acanvas"], L0["arect"], L0["selected"]])));
  return L0.result;
}, {"params": ["Sender", "ACanvas", "ARect", "Selected"], "kind": "procedure", "ptypes": ["TObject", "TCanvas", "TRect", "Boolean"]});
  U.method("Tcc_Buyers", "DBGridEh1ApplyFilter", async function DBGridEh1ApplyFilter(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t19 = (await $.mv((await $.v(C, "DataMod_Buyers")), "Accno"));
    await $.mcall((await $.wv([$t19], "SQL", C, false)), "Clear", []);
    await $.stmt((await $.mcall((await $.wv([$t19], "SQL", C, false)), "Add", [$.add($.add("Select * from accno where ownid='", (await $.mv((await $.wv([$t19], "buyerid", C, false)), "Text"))), "')")])));
    await $.stmt($.wcall([$t19], "Open", [], C));
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("Tcc_Buyers", "DBGridEh2TitleClick", async function DBGridEh2TitleClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"column": $.copyArg(p0), result: undefined, "titlename": ''};
  await $.fixArgs(L0, ["column"]);
  L0["titlename"] = (await $.mv(L0["column"], "FieldName"));
  {
    const $t20 = (await $.mv((await $.v(C, "DataMod_Buyers")), "Accno"));
    await $.stmt((await $.wcall([$t20], "SetVariable", ["Title", (await $.wv([$t20], "TitleName", { get: async () => L0["titlename"], set: async (v) => { L0["titlename"] = v; }, local: true }, false))], C)));
    await $.stmt($.wcall([$t20], "Refresh", [], C));
  }
  return L0.result;
}, {"params": ["Column"], "kind": "procedure", "ptypes": ["TColumnEh"]});
  U.method("Tcc_Buyers", "DBGrid1TitleClick", async function DBGrid1TitleClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"column": $.copyArg(p0), result: undefined, "titlename": ''};
  await $.fixArgs(L0, ["column"]);
  L0["titlename"] = (await $.mv(L0["column"], "FieldName"));
  if ($.truthy($.eq(L0["titlename"], "ID"))) {
    L0["titlename"] = "a.ID";
  }
  {
    const $t21 = (await $.mv((await $.v(C, "DataMod_Buyers")), "ODSBuyers"));
    await $.stmt((await $.wcall([$t21], "SetVariable", ["Title", (await $.wv([$t21], "TitleName", { get: async () => L0["titlename"], set: async (v) => { L0["titlename"] = v; }, local: true }, false))], C)));
    await $.stmt($.wcall([$t21], "Refresh", [], C));
  }
  return L0.result;
}, {"params": ["Column"], "kind": "procedure", "ptypes": ["TColumn"]});
  U.method("Tcc_Buyers", "N6Click", async function N6Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "astartdate": 0, "aenddate": 0};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.not((await $.call(C, "Assigned", [(await $.v(C, "FormAccTransaction"))]))))) {
    await $.set(C, "FormAccTransaction", (await $.mcall((await $.v(C, "TFormAccTransaction")), "Create", [Self])));
  }
  if ($.truthy($.not((await $.call(C, "Assigned", [(await $.v(C, "FormInterval"))]))))) {
    await $.set(C, "FormInterval", (await $.mcall((await $.v(C, "TFormInterval")), "Create", [Self])));
  }
  {
    const $t22 = (await $.mv((await $.v(C, "DataMod_Buyers")), "Accno"));
    if ($.truthy((await $.wv([$t22], "IsEmpty", C, false)))) {
      await $.stmt((await $.wcall([$t22], "ShowMessage", ["Heç bir hesab qeyd olunmayıb!"], C)));
      return L0.result;
    } else {
      await $.mcall((await $.mv((await $.wv([$t22], "DataMod_Buyers", C, false)), "Sysdat")), "Open", []);
      {
        const $t23 = (await $.wv([$t22], "FormInterval", C, false));
        await $.mset((await $.wv([$t22, $t23], "StartDateEdit", C, false)), "DateTime", (await $.mv((await $.mcall((await $.mv((await $.wv([$t22, $t23], "DataMod_Buyers", C, false)), "Sysdat")), "FieldByName", ["tek_dat"])), "AsDateTime")));
        await $.mset((await $.wv([$t22, $t23], "EndDateEdit", C, false)), "DateTime", (await $.mv((await $.wv([$t22, $t23], "StartDateEdit", C, false)), "DateTime")));
        if ($.truthy($.eq((await $.wv([$t22, $t23], "ShowModal", C, false)), (await $.wv([$t22, $t23], "mrOK", C, false))))) {
          await $.wset([$t22, $t23], "AStartDate", (await $.mv((await $.wv([$t22, $t23], "StartDateEdit", C, false)), "DateTime")), { get: async () => L0["astartdate"], set: async (v) => { L0["astartdate"] = v; }, local: true });
          await $.wset([$t22, $t23], "AEndDate", (await $.mv((await $.wv([$t22, $t23], "EndDateEdit", C, false)), "DateTime")), { get: async () => L0["aenddate"], set: async (v) => { L0["aenddate"] = v; }, local: true });
          {
            const $t24 = (await $.wv([$t22, $t23], "FormAccTransaction", C, false));
            await $.stmt((await $.wcall([$t22, $t23, $t24], "OpenDataControls", [(await $.wv([$t22, $t23, $t24], "AStartDate", { get: async () => L0["astartdate"], set: async (v) => { L0["astartdate"] = v; }, local: true }, false)), (await $.wv([$t22, $t23, $t24], "AEndDate", { get: async () => L0["aenddate"], set: async (v) => { L0["aenddate"] = v; }, local: true }, false))], C)));
            await $.stmt($.wcall([$t22, $t23, $t24], "ShowModal", [], C));
          }
        }
      }
    }
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("Tcc_Buyers", "N7Click", async function N7Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t25 = (await $.mv((await $.v(C, "DataMod_Buyers")), "Accno"));
    if ($.truthy((await $.wv([$t25], "IsEmpty", C, false)))) {
      await $.stmt((await $.wcall([$t25], "ShowMessage", ["Heç bir hesab qeyd olunmayıb!"], C)));
      return L0.result;
    } else {
      if ($.truthy($.not((await $.wcall([$t25], "Assigned", [(await $.wv([$t25], "FormAccState", C, false))], C))))) {
        await $.wset([$t25], "FormAccState", (await $.mcall((await $.wv([$t25], "TFormAccState", C, false)), "Create", [Self])), C);
      }
      await $.mcall((await $.wv([$t25], "FormAccState", C, false)), "ShowModal", []);
    }
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("Tcc_Buyers", "DBGrid2TitleClick", async function DBGrid2TitleClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"column": $.copyArg(p0), result: undefined, "titlename": ''};
  await $.fixArgs(L0, ["column"]);
  L0["titlename"] = (await $.mv(L0["column"], "FieldName"));
  {
    const $t26 = (await $.mv((await $.v(C, "DataMod_Buyers")), "Accno"));
    await $.mset((await $.wv([$t26], "Screen", C, false)), "Cursor", (await $.wv([$t26], "crSQLWait", C, false)));
    await $.stmt((await $.wcall([$t26], "SetVariable", ["Title", (await $.wv([$t26], "TitleName", { get: async () => L0["titlename"], set: async (v) => { L0["titlename"] = v; }, local: true }, false))], C)));
    await $.stmt($.wcall([$t26], "Refresh", [], C));
    await $.mset((await $.wv([$t26], "Screen", C, false)), "Cursor", (await $.wv([$t26], "crDefault", C, false)));
  }
  return L0.result;
}, {"params": ["Column"], "kind": "procedure", "ptypes": ["TColumn"]});
  U.method("Tcc_Buyers", "N3Click", async function N3Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t27 = (await $.mv((await $.v(C, "DataMod_Buyers")), "Accno"));
    if ($.truthy((await $.wv([$t27], "IsEmpty", C, false)))) {
      await $.stmt((await $.wcall([$t27], "ShowMessage", ["Heç bir hesab qeyd olunmayıb!"], C)));
      return L0.result;
    } else {
      await $.wset([$t27], "CC_AccInForm", (await $.mcall((await $.wv([$t27], "TCC_AccInForm", C, false)), "Create", [Self])), C);
      await $.mcall((await $.mv((await $.wv([$t27], "CC_AccInForm", C, false)), "CC_InForm")), "Close", []);
      { const $t28 = await $.iset((await $.mv((await $.mv((await $.wv([$t27], "CC_AccInForm", C, false)), "CC_InForm")), "SQL")), [15], "credit>0"); if ($t28 !== undefined) { await $.mset((await $.mv((await $.wv([$t27], "CC_AccInForm", C, false)), "CC_InForm")), "SQL", $t28); } }
      await $.mcall((await $.mv((await $.wv([$t27], "CC_AccInForm", C, false)), "CC_InForm")), "Open", []);
      await $.mcall((await $.wv([$t27], "CC_AccInForm", C, false)), "Showmodal", []);
    }
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("Tcc_Buyers", "N4DrawItem", async function N4DrawItem(Self, p0, p1, p2, p3) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "acanvas": $.copyArg(p1), "arect": $.copyArg(p2), "selected": $.copyArg(p3), result: undefined};
  await $.fixArgs(L0, ["sender", "acanvas", "arect", "selected"]);
  await $.stmt((await $.call(C, "MenuShrift", [L0["sender"], L0["acanvas"], L0["arect"], L0["selected"]])));
  return L0.result;
}, {"params": ["Sender", "ACanvas", "ARect", "Selected"], "kind": "procedure", "ptypes": ["TObject", "TCanvas", "TRect", "Boolean"]});
  U.method("Tcc_Buyers", "N2Click", async function N2Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  try {
    if ($.truthy($.not((await $.call(C, "Assigned", [(await $.v(C, "FormAccBuyers"))]))))) {
      await $.set(C, "FormAccBuyers", (await $.mcall((await $.v(C, "TFormAccBuyers")), "Create", [Self])));
    }
    await $.mcall((await $.v(C, "FormAccBuyers")), "Showmodal", []);
  } finally {
    await $.mcall((await $.v(C, "FormAccBuyers")), "Release", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("Tcc_Buyers", "N3DrawItem", async function N3DrawItem(Self, p0, p1, p2, p3) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "acanvas": $.copyArg(p1), "arect": $.copyArg(p2), "selected": $.copyArg(p3), result: undefined};
  await $.fixArgs(L0, ["sender", "acanvas", "arect", "selected"]);
  await $.stmt((await $.call(C, "MenuShrift", [L0["sender"], L0["acanvas"], L0["arect"], L0["selected"]])));
  return L0.result;
}, {"params": ["Sender", "ACanvas", "ARect", "Selected"], "kind": "procedure", "ptypes": ["TObject", "TCanvas", "TRect", "Boolean"]});
  U.method("Tcc_Buyers", "DBGrid1DblClick", async function DBGrid1DblClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mcall((await $.v(C, "ToolBtnEdit")), "Click", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("Tcc_Buyers", "ToolButton1Click", async function ToolButton1Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.not((await $.call(C, "Assigned", [(await $.v(C, "CC_FormRepairing"))]))))) {
    await $.set(C, "CC_FormRepairing", (await $.mcall((await $.v(C, "TCC_FormRepairing")), "Create", [Self])));
  }
  await $.mcall((await $.v(C, "CC_FormRepairing")), "ShowModal", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("Tcc_Buyers", "passnumberChange", async function passnumberChange(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("Tcc_Buyers", "EditpassseriyaChange", async function EditpassseriyaChange(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("Tcc_Buyers", "EditpasportChange", async function EditpasportChange(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("Tcc_Buyers", "EditbirthChange", async function EditbirthChange(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("Tcc_Buyers", "EditSexChange", async function EditSexChange(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("Tcc_Buyers", "EditWorkplaceChange", async function EditWorkplaceChange(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("Tcc_Buyers", "EditnameExit", async function EditnameExit(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mset(L0["sender"], "Text", "");
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("Tcc_Buyers", "EditpassseriyaExit", async function EditpassseriyaExit(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mset(L0["sender"], "Text", "");
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("Tcc_Buyers", "EditDateExit", async function EditDateExit(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mset(L0["sender"], "Text", "");
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("Tcc_Buyers", "EditpasportExit", async function EditpasportExit(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mset(L0["sender"], "Text", "");
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("Tcc_Buyers", "EditbirthExit", async function EditbirthExit(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mset(L0["sender"], "Text", "");
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("Tcc_Buyers", "EditSexExit", async function EditSexExit(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mset(L0["sender"], "Text", "");
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("Tcc_Buyers", "EditadressExit", async function EditadressExit(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mset(L0["sender"], "Text", "");
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("Tcc_Buyers", "EditworkplaceExit", async function EditworkplaceExit(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mset(L0["sender"], "Text", "");
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("Tcc_Buyers", "EditwageExit", async function EditwageExit(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mset(L0["sender"], "Text", "");
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("Tcc_Buyers", "EditnameChange", async function EditnameChange(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("Tcc_Buyers", "EditwageChange", async function EditwageChange(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("Tcc_Buyers", "EditphoneChange", async function EditphoneChange(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("Tcc_Buyers", "N8Click", async function N8Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.not((await $.call(C, "Assigned", [(await $.v(C, "DatModConstr"))]))))) {
    await $.set(C, "DatModConstr", (await $.mcall((await $.v(C, "TDatModConstr")), "Create", [Self])));
  }
  if ($.truthy($.not((await $.call(C, "Assigned", [(await $.v(C, "FrmContract"))]))))) {
    await $.set(C, "FrmContract", (await $.mcall((await $.v(C, "TFrmContract")), "Create", [Self])));
  }
  {
    const $t29 = (await $.v(C, "DatModConstr"));
    const $t30 = (await $.wv([$t29], "FrmContract", C, false));
    {
      const $t31 = (await $.wv([$t29, $t30], "CreditPurpose", C, false));
      if ($.truthy((await $.wv([$t29, $t30, $t31], "Active", C, false)))) {
        await $.stmt($.wcall([$t29, $t30, $t31], "CloseAll", [], C));
      }
      await $.stmt((await $.wcall([$t29, $t30, $t31], "SetVariable", ["CRDID", 0], C)));
      await $.stmt($.wcall([$t29, $t30, $t31], "Open", [], C));
      await $.mset((await $.wcall([$t29, $t30, $t31], "FieldByname", ["INTERESTRATE"], C)), "AsFloat", 0);
      await $.stmt($.wcall([$t29, $t30, $t31], "Insert", [], C));
    }
    await $.mset((await $.wv([$t29, $t30], "DTPOpenDate", C, false)), "DateTime", (await $.mv((await $.mcall((await $.mv((await $.wv([$t29, $t30], "DatModConstr", C, false)), "sysdat")), "fieldbyname", ["tek_dat"])), "asdatetime")));
    await $.mset((await $.wv([$t29, $t30], "DTPCloseDate", C, false)), "DateTime", (await $.mv((await $.mcall((await $.mv((await $.wv([$t29, $t30], "DatModConstr", C, false)), "sysdat")), "fieldbyname", ["tek_dat"])), "asdatetime")));
    await $.stmt($.wcall([$t29, $t30], "ShowModal", [], C));
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("Tcc_Buyers", "N9Click", async function N9Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mcall((await $.mv((await $.v(C, "DataMod_Buyers")), "Country")), "Open", []);
  await $.set(C, "FormAddBuyers", (await $.mcall((await $.v(C, "TFormAddBuyers")), "Create", [Self])));
  await $.mset((await $.mv((await $.v(C, "FormAddBuyers")), "AddUpd")), "Text", "1");
  await $.mcall((await $.v(C, "FormAddBuyers")), "ShowModal", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("Tcc_Buyers", "N10Click", async function N10Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mcall((await $.mv((await $.v(C, "DataMod_Buyers")), "Country")), "Open", []);
  await $.set(C, "FormAddBuyers", (await $.mcall((await $.v(C, "TFormAddBuyers")), "Create", [Self])));
  await $.mset((await $.mv((await $.v(C, "FormAddBuyers")), "AddUpd")), "Text", "2");
  await $.mcall((await $.v(C, "FormAddBuyers")), "ShowModal", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  return U;
}
