// Generated from CableContractsImpl.pas by pas2js — do not edit by hand; regenerate instead.
/* eslint-disable */
// @ts-nocheck

export default function define($) {
  const U = $.unit("CableContractsImpl", ["Windows", "Messages", "SysUtils", "Classes", "Graphics", "Controls", "Forms", "LDialogs", "ActiveX", "AxCtrls", "CableContracts_TLB", "StdVcl", "ExtCtrls", "ToolWin", "ComCtrls", "Grids", "DBGrids", "OracleData", "ActnList", "ImgList", "Menus", "DB", "CMExcelExport", "DBCtrls", "StdCtrls", "AppEvnts", "ComObj", "ComServ", "DataModCableContr", "CableContractsAddEdit", "UnitDeletedConts"]);
  const C = [U];
  U.defClass("TCableContractsX", "TActiveForm", {"panel1": {"name": "Panel1", "type": "TPanel"}, "coolbar1": {"name": "CoolBar1", "type": "TCoolBar"}, "dbgrid1": {"name": "DBGrid1", "type": "TDBGrid"}, "toolbar1": {"name": "ToolBar1", "type": "TToolBar"}, "toolbutton1": {"name": "ToolButton1", "type": "TToolButton"}, "actsmain": {"name": "actsMain", "type": "TActionList"}, "imgsmain": {"name": "imgsMain", "type": "TImageList"}, "actcontadd": {"name": "actContAdd", "type": "TAction"}, "actcontedit": {"name": "actContEdit", "type": "TAction"}, "actconterase": {"name": "actContErase", "type": "TAction"}, "toolbutton2": {"name": "ToolButton2", "type": "TToolButton"}, "toolbutton3": {"name": "ToolButton3", "type": "TToolButton"}, "actrefresh": {"name": "actRefresh", "type": "TAction"}, "toolbutton4": {"name": "ToolButton4", "type": "TToolButton"}, "toolbutton5": {"name": "ToolButton5", "type": "TToolButton"}, "toolbutton6": {"name": "ToolButton6", "type": "TToolButton"}, "actcommitall": {"name": "actCommitAll", "type": "TAction"}, "toolbutton7": {"name": "ToolButton7", "type": "TToolButton"}, "popupmenu1": {"name": "PopupMenu1", "type": "TPopupMenu"}, "n1": {"name": "N1", "type": "TMenuItem"}, "n2": {"name": "N2", "type": "TMenuItem"}, "actcommitone": {"name": "actCommitOne", "type": "TAction"}, "excelexp": {"name": "ExcelExp", "type": "TCMExcelExport"}, "toolbutton8": {"name": "ToolButton8", "type": "TToolButton"}, "actexport": {"name": "actExport", "type": "TAction"}, "toolbutton9": {"name": "ToolButton9", "type": "TToolButton"}, "pnfilter": {"name": "pnFilter", "type": "TPanel"}, "toolbutton10": {"name": "ToolButton10", "type": "TToolButton"}, "toolbutton11": {"name": "ToolButton11", "type": "TToolButton"}, "splitter1": {"name": "Splitter1", "type": "TSplitter"}, "cbfabn": {"name": "cbfAbn", "type": "TDBLookupComboBox"}, "cbfeng": {"name": "cbfEng", "type": "TDBLookupComboBox"}, "cbfpack": {"name": "cbfPack", "type": "TDBLookupComboBox"}, "label1": {"name": "Label1", "type": "TLabel"}, "label2": {"name": "Label2", "type": "TLabel"}, "label3": {"name": "Label3", "type": "TLabel"}, "label4": {"name": "Label4", "type": "TLabel"}, "label5": {"name": "Label5", "type": "TLabel"}, "cbfcalc": {"name": "cbfCalc", "type": "TComboBox"}, "cbfacc": {"name": "cbfAcc", "type": "TDBLookupComboBox"}, "button1": {"name": "Button1", "type": "TButton"}, "button2": {"name": "Button2", "type": "TButton"}, "panel2": {"name": "Panel2", "type": "TPanel"}, "label6": {"name": "Label6", "type": "TLabel"}, "chf1": {"name": "chf1", "type": "TCheckBox"}, "chf2": {"name": "chf2", "type": "TCheckBox"}, "chf3": {"name": "chf3", "type": "TCheckBox"}, "chf4": {"name": "chf4", "type": "TCheckBox"}, "chf5": {"name": "chf5", "type": "TCheckBox"}, "action1": {"name": "Action1", "type": "TAction"}, "applicationevents1": {"name": "ApplicationEvents1", "type": "TApplicationEvents"}, "actcommitmonall": {"name": "actCommitMonAll", "type": "TAction"}, "actcommitmonone": {"name": "actCommitMonOne", "type": "TAction"}, "n3": {"name": "N3", "type": "TMenuItem"}, "n4": {"name": "N4", "type": "TMenuItem"}, "actsetnewcalcdate": {"name": "actSetNewCalcDate", "type": "TAction"}, "toolbutton12": {"name": "ToolButton12", "type": "TToolButton"}, "toolbutton13": {"name": "ToolButton13", "type": "TToolButton"}, "toolbutton14": {"name": "ToolButton14", "type": "TToolButton"}, "btndeletedconts": {"name": "BtnDeletedConts", "type": "TToolButton"}, "fevents": {"name": "FEvents", "type": "ICableContractsXEvents"}}, {});
  U.init(async () => {
    U.var_("OrderbyAD", '', "String");
  });
  U.method("TCableContractsX", "getlastdate", async function getlastdate(Self, p0, p1, p2) {
  const C = $.chain(Self, U);
  const L0 = {"fromdate": $.copyArg(p0), "amount": $.copyArg(p1), "monprice": $.copyArg(p2), result: null, "moncnt": 0, "restamt": 0, "lastmon": 0};
  await $.fixArgs(L0, ["fromdate", "amount", "monprice"]);
  L0["moncnt"] = (await $.call(C, "StrToInt", [(await $.call(C, "FloatToStr", [(await $.call(C, "Int", [$.fdiv(L0["amount"], L0["monprice"])]))]))]));
  L0["restamt"] = $.sub(L0["amount"], $.mul(L0["moncnt"], L0["monprice"]));
  L0["lastmon"] = (await $.call(C, "IncMonth", [L0["fromdate"], L0["moncnt"]]));
  L0["result"] = $.add(L0["lastmon"], (await $.call(C, "Int", [$.fdiv(L0["restamt"], ($.fdiv(($.mul(L0["monprice"], 12)), 365)))])));
  return L0.result;
}, {"params": ["fromdate", "amount", "monprice"], "kind": "function", "ptypes": ["TDateTime", "Double", "Double"]});
  U.method("TCableContractsX", "DefinePropertyPages", async function DefinePropertyPages(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"definepropertypage": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["definepropertypage"]);
  return L0.result;
}, {"params": ["DefinePropertyPage"], "kind": "procedure", "ptypes": ["TDefinePropertyPage"]});
  U.method("TCableContractsX", "EventSinkChanged", async function EventSinkChanged(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"eventsink": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["eventsink"]);
  await $.set(C, "FEvents", L0["eventsink"]);
  return L0.result;
}, {"params": ["EventSink"], "kind": "procedure", "ptypes": ["IUnknown"]});
  U.method("TCableContractsX", "Initialize", async function Initialize(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: undefined};
  await $.inherited(Self, "TCableContractsX", "Initialize", null, arguments);
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
  U.method("TCableContractsX", "Get_Active", async function Get_Active(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: false};
  L0["result"] = (await $.v(C, "Active"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TCableContractsX", "Get_AutoScroll", async function Get_AutoScroll(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: false};
  L0["result"] = (await $.v(C, "AutoScroll"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TCableContractsX", "Get_AutoSize", async function Get_AutoSize(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: false};
  L0["result"] = (await $.v(C, "AutoSize"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TCableContractsX", "Get_AxBorderStyle", async function Get_AxBorderStyle(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: null};
  L0["result"] = (await $.call(C, "Ord", [(await $.v(C, "AxBorderStyle"))]));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TCableContractsX", "Get_Caption", async function Get_Caption(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: ''};
  L0["result"] = (await $.call(C, "WideString", [(await $.v(C, "Caption"))]));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TCableContractsX", "Get_Color", async function Get_Color(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: null};
  L0["result"] = (await $.call(C, "OLE_COLOR", [(await $.v(C, "Color"))]));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TCableContractsX", "Get_Cursor", async function Get_Cursor(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: 0};
  L0["result"] = (await $.call(C, "Smallint", [(await $.v(C, "Cursor"))]));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TCableContractsX", "Get_DoubleBuffered", async function Get_DoubleBuffered(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: false};
  L0["result"] = (await $.v(C, "DoubleBuffered"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TCableContractsX", "Get_DropTarget", async function Get_DropTarget(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: false};
  L0["result"] = (await $.v(C, "DropTarget"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TCableContractsX", "Get_Enabled", async function Get_Enabled(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: false};
  L0["result"] = (await $.v(C, "Enabled"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TCableContractsX", "Get_Font", async function Get_Font(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: null};
  await $.stmt((await $.call(C, "GetOleFont", [(await $.v(C, "Font")), L0["result"]])));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TCableContractsX", "Get_HelpFile", async function Get_HelpFile(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: ''};
  L0["result"] = (await $.call(C, "WideString", [(await $.v(C, "HelpFile"))]));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TCableContractsX", "Get_KeyPreview", async function Get_KeyPreview(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: false};
  L0["result"] = (await $.v(C, "KeyPreview"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TCableContractsX", "Get_PixelsPerInch", async function Get_PixelsPerInch(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: 0};
  L0["result"] = (await $.v(C, "PixelsPerInch"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TCableContractsX", "Get_PrintScale", async function Get_PrintScale(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: null};
  L0["result"] = (await $.call(C, "Ord", [(await $.v(C, "PrintScale"))]));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TCableContractsX", "Get_Scaled", async function Get_Scaled(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: false};
  L0["result"] = (await $.v(C, "Scaled"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TCableContractsX", "Get_Visible", async function Get_Visible(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: false};
  L0["result"] = (await $.v(C, "Visible"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TCableContractsX", "Get_VisibleDockClientCount", async function Get_VisibleDockClientCount(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: 0};
  L0["result"] = (await $.v(C, "VisibleDockClientCount"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TCableContractsX", "_Set_Font", async function _Set_Font(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.stmt((await $.call(C, "SetOleFont", [(await $.v(C, "Font")), L0["value"]])));
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["IFontDisp"]});
  U.method("TCableContractsX", "ActivateEvent", async function ActivateEvent(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.ne((await $.v(C, "FEvents")), null))) {
    await $.mcall((await $.v(C, "FEvents")), "OnActivate", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TCableContractsX", "ClickEvent", async function ClickEvent(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.ne((await $.v(C, "FEvents")), null))) {
    await $.mcall((await $.v(C, "FEvents")), "OnClick", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TCableContractsX", "CreateEvent", async function CreateEvent(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.ne((await $.v(C, "FEvents")), null))) {
    await $.mcall((await $.v(C, "FEvents")), "OnCreate", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TCableContractsX", "DblClickEvent", async function DblClickEvent(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.ne((await $.v(C, "FEvents")), null))) {
    await $.mcall((await $.v(C, "FEvents")), "OnDblClick", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TCableContractsX", "DeactivateEvent", async function DeactivateEvent(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.ne((await $.v(C, "FEvents")), null))) {
    await $.mcall((await $.v(C, "FEvents")), "OnDeactivate", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TCableContractsX", "DestroyEvent", async function DestroyEvent(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.ne((await $.v(C, "FEvents")), null))) {
    await $.mcall((await $.v(C, "FEvents")), "OnDestroy", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TCableContractsX", "KeyPressEvent", async function KeyPressEvent(Self, p0, p1) {
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
  U.method("TCableContractsX", "PaintEvent", async function PaintEvent(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.ne((await $.v(C, "FEvents")), null))) {
    await $.mcall((await $.v(C, "FEvents")), "OnPaint", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TCableContractsX", "Set_AutoScroll", async function Set_AutoScroll(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "AutoScroll", L0["value"]);
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["WordBool"]});
  U.method("TCableContractsX", "Set_AutoSize", async function Set_AutoSize(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "AutoSize", L0["value"]);
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["WordBool"]});
  U.method("TCableContractsX", "Set_AxBorderStyle", async function Set_AxBorderStyle(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "AxBorderStyle", (await $.call(C, "TActiveFormBorderStyle", [L0["value"]])));
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["TxActiveFormBorderStyle"]});
  U.method("TCableContractsX", "Set_Caption", async function Set_Caption(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "Caption", (await $.call(C, "TCaption", [L0["value"]])));
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["WideString"]});
  U.method("TCableContractsX", "Set_Color", async function Set_Color(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "Color", (await $.call(C, "TColor", [L0["value"]])));
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["OLE_COLOR"]});
  U.method("TCableContractsX", "Set_Cursor", async function Set_Cursor(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "Cursor", (await $.call(C, "TCursor", [L0["value"]])));
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["Smallint"]});
  U.method("TCableContractsX", "Set_DoubleBuffered", async function Set_DoubleBuffered(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "DoubleBuffered", L0["value"]);
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["WordBool"]});
  U.method("TCableContractsX", "Set_DropTarget", async function Set_DropTarget(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "DropTarget", L0["value"]);
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["WordBool"]});
  U.method("TCableContractsX", "Set_Enabled", async function Set_Enabled(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "Enabled", L0["value"]);
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["WordBool"]});
  U.method("TCableContractsX", "Set_Font", async function Set_Font(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.asRef(p0), result: undefined};
  await $.stmt((await $.call(C, "SetOleFont", [(await $.v(C, "Font")), (await L0["value"].get())])));
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["IFontDisp"]});
  U.method("TCableContractsX", "Set_HelpFile", async function Set_HelpFile(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "HelpFile", (await $.call(C, "String", [L0["value"]])));
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["WideString"]});
  U.method("TCableContractsX", "Set_KeyPreview", async function Set_KeyPreview(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "KeyPreview", L0["value"]);
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["WordBool"]});
  U.method("TCableContractsX", "Set_PixelsPerInch", async function Set_PixelsPerInch(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "PixelsPerInch", L0["value"]);
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["Integer"]});
  U.method("TCableContractsX", "Set_PrintScale", async function Set_PrintScale(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "PrintScale", (await $.call(C, "TPrintScale", [L0["value"]])));
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["TxPrintScale"]});
  U.method("TCableContractsX", "Set_Scaled", async function Set_Scaled(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "Scaled", L0["value"]);
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["WordBool"]});
  U.method("TCableContractsX", "Set_Visible", async function Set_Visible(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "Visible", L0["value"]);
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["WordBool"]});
  U.method("TCableContractsX", "N4DrawItem", async function N4DrawItem(Self, p0, p1, p2, p3) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "acanvas": $.copyArg(p1), "arect": $.copyArg(p2), "selected": $.copyArg(p3), result: undefined, "linebottom": 0, "stext": '', "bar": null};
  await $.fixArgs(L0, ["sender", "acanvas", "arect", "selected"]);
  {
    const $t1 = L0["acanvas"];
    const $t2 = (await $.wv([$t1], "Sender", { get: async () => L0["sender"], set: async (v) => { L0["sender"] = v; }, local: true }, false));
    {
      const $t3 = (await $.wv([$t1, $t2], "Font", C, false));
      await $.wset([$t1, $t2, $t3], "Name", "Azl Sans Serif", C);
      await $.wset([$t1, $t2, $t3], "Charset", (await $.wv([$t1, $t2, $t3], "RUSSIAN_CHARSET", C, false)), C);
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
      await $.stmt((await $.wcall([$t1, $t2], "Inc", [$.ref(async () => (await $.mv((await $.wv([$t1, $t2], "Bar", { get: async () => L0["bar"], set: async (v) => { L0["bar"] = v; }, local: true }, false)), "Left")), async ($t5) => { await $.mset((await $.wv([$t1, $t2], "Bar", { get: async () => L0["bar"], set: async (v) => { L0["bar"] = v; }, local: true }, false)), "Left", $t5); }), 20], C)));
      await $.stmt((await $.wcall([$t1, $t2], "FillRect", [(await $.wv([$t1, $t2], "Bar", { get: async () => L0["bar"], set: async (v) => { L0["bar"] = v; }, local: true }, false))], C)));
      await $.stmt((await $.wcall([$t1, $t2], "TextOut", [$.add((await $.mv((await $.wv([$t1, $t2], "ARect", { get: async () => L0["arect"], set: async (v) => { L0["arect"] = v; }, local: true }, false)), "Left")), 20), $.add((await $.mv((await $.wv([$t1, $t2], "ARect", { get: async () => L0["arect"], set: async (v) => { L0["arect"] = v; }, local: true }, false)), "Top")), 1), (await $.wv([$t1, $t2], "Caption", C, false))], C)));
    }
    await $.wset([$t1, $t2], "SText", (await $.wcall([$t1, $t2], "ShortCutToText", [(await $.wv([$t1, $t2], "ShortCut", C, false))], C)), { get: async () => L0["stext"], set: async (v) => { L0["stext"] = v; }, local: true });
    await $.stmt((await $.wcall([$t1, $t2], "TextOut", [$.sub($.sub((await $.mv((await $.wv([$t1, $t2], "ARect", { get: async () => L0["arect"], set: async (v) => { L0["arect"] = v; }, local: true }, false)), "Right")), (await $.wcall([$t1, $t2], "TextWidth", [(await $.wv([$t1, $t2], "SText", { get: async () => L0["stext"], set: async (v) => { L0["stext"] = v; }, local: true }, false))], C))), 2), $.add((await $.mv((await $.wv([$t1, $t2], "ARect", { get: async () => L0["arect"], set: async (v) => { L0["arect"] = v; }, local: true }, false)), "Top")), 1), (await $.wv([$t1, $t2], "SText", { get: async () => L0["stext"], set: async (v) => { L0["stext"] = v; }, local: true }, false))], C)));
    if ($.truthy($.ne((await $.wv([$t1, $t2], "ImageIndex", C, false)), (-(1))))) {
      {
        const $t6 = (await $.wv([$t1, $t2], "GetParentMenu", C, false));
        if ($.truthy((await $.wcall([$t1, $t2, $t6], "Assigned", [(await $.wv([$t1, $t2, $t6], "Images", C, false))], C)))) {
          if ($.truthy((await $.wv([$t1, $t2, $t6], "Checked", C, false)))) {
            await $.mset((await $.wv([$t1, $t2, $t6], "Bar", { get: async () => L0["bar"], set: async (v) => { L0["bar"] = v; }, local: true }, false)), "Left", $.add((await $.mv((await $.wv([$t1, $t2, $t6], "ARect", { get: async () => L0["arect"], set: async (v) => { L0["arect"] = v; }, local: true }, false)), "Left")), 1));
            await $.mset((await $.wv([$t1, $t2, $t6], "Bar", { get: async () => L0["bar"], set: async (v) => { L0["bar"] = v; }, local: true }, false)), "Right", $.add((await $.mv((await $.wv([$t1, $t2, $t6], "Bar", { get: async () => L0["bar"], set: async (v) => { L0["bar"] = v; }, local: true }, false)), "Left")), 22));
            await $.mset((await $.wv([$t1, $t2, $t6], "Bar", { get: async () => L0["bar"], set: async (v) => { L0["bar"] = v; }, local: true }, false)), "Top", $.add((await $.mv((await $.wv([$t1, $t2, $t6], "ARect", { get: async () => L0["arect"], set: async (v) => { L0["arect"] = v; }, local: true }, false)), "Top")), 1));
            await $.mset((await $.wv([$t1, $t2, $t6], "Bar", { get: async () => L0["bar"], set: async (v) => { L0["bar"] = v; }, local: true }, false)), "Bottom", $.add((await $.mv((await $.wv([$t1, $t2, $t6], "Bar", { get: async () => L0["bar"], set: async (v) => { L0["bar"] = v; }, local: true }, false)), "Top")), 22));
            await $.mset((await $.mv((await $.wv([$t1, $t2, $t6], "ACanvas", { get: async () => L0["acanvas"], set: async (v) => { L0["acanvas"] = v; }, local: true }, false)), "Brush")), "Color", (await $.wv([$t1, $t2, $t6], "clBtnShadow", C, false)));
            await $.stmt((await $.mcall((await $.wv([$t1, $t2, $t6], "ACanvas", { get: async () => L0["acanvas"], set: async (v) => { L0["acanvas"] = v; }, local: true }, false)), "FrameRect", [(await $.wv([$t1, $t2, $t6], "Bar", { get: async () => L0["bar"], set: async (v) => { L0["bar"] = v; }, local: true }, false))])));
            await $.stmt((await $.wcall([$t1, $t2, $t6], "Inc", [$.ref(async () => (await $.mv((await $.wv([$t1, $t2, $t6], "Bar", { get: async () => L0["bar"], set: async (v) => { L0["bar"] = v; }, local: true }, false)), "Left")), async ($t7) => { await $.mset((await $.wv([$t1, $t2, $t6], "Bar", { get: async () => L0["bar"], set: async (v) => { L0["bar"] = v; }, local: true }, false)), "Left", $t7); }), 2], C)));
            await $.stmt((await $.wcall([$t1, $t2, $t6], "Inc", [$.ref(async () => (await $.mv((await $.wv([$t1, $t2, $t6], "Bar", { get: async () => L0["bar"], set: async (v) => { L0["bar"] = v; }, local: true }, false)), "Right")), async ($t8) => { await $.mset((await $.wv([$t1, $t2, $t6], "Bar", { get: async () => L0["bar"], set: async (v) => { L0["bar"] = v; }, local: true }, false)), "Right", $t8); }), 2], C)));
            await $.stmt((await $.wcall([$t1, $t2, $t6], "Inc", [$.ref(async () => (await $.mv((await $.wv([$t1, $t2, $t6], "Bar", { get: async () => L0["bar"], set: async (v) => { L0["bar"] = v; }, local: true }, false)), "Top")), async ($t9) => { await $.mset((await $.wv([$t1, $t2, $t6], "Bar", { get: async () => L0["bar"], set: async (v) => { L0["bar"] = v; }, local: true }, false)), "Top", $t9); }), 2], C)));
            await $.stmt((await $.wcall([$t1, $t2, $t6], "Inc", [$.ref(async () => (await $.mv((await $.wv([$t1, $t2, $t6], "Bar", { get: async () => L0["bar"], set: async (v) => { L0["bar"] = v; }, local: true }, false)), "Bottom")), async ($t10) => { await $.mset((await $.wv([$t1, $t2, $t6], "Bar", { get: async () => L0["bar"], set: async (v) => { L0["bar"] = v; }, local: true }, false)), "Bottom", $t10); }), 2], C)));
            await $.mset((await $.mv((await $.wv([$t1, $t2, $t6], "ACanvas", { get: async () => L0["acanvas"], set: async (v) => { L0["acanvas"] = v; }, local: true }, false)), "Brush")), "Color", (await $.wv([$t1, $t2, $t6], "clBtnHighlight", C, false)));
            await $.stmt((await $.mcall((await $.wv([$t1, $t2, $t6], "ACanvas", { get: async () => L0["acanvas"], set: async (v) => { L0["acanvas"] = v; }, local: true }, false)), "FrameRect", [(await $.wv([$t1, $t2, $t6], "Bar", { get: async () => L0["bar"], set: async (v) => { L0["bar"] = v; }, local: true }, false))])));
            await $.stmt((await $.wcall([$t1, $t2, $t6], "Dec", [$.ref(async () => (await $.mv((await $.wv([$t1, $t2, $t6], "Bar", { get: async () => L0["bar"], set: async (v) => { L0["bar"] = v; }, local: true }, false)), "Left")), async ($t11) => { await $.mset((await $.wv([$t1, $t2, $t6], "Bar", { get: async () => L0["bar"], set: async (v) => { L0["bar"] = v; }, local: true }, false)), "Left", $t11); }), 1], C)));
            await $.stmt((await $.wcall([$t1, $t2, $t6], "Dec", [$.ref(async () => (await $.mv((await $.wv([$t1, $t2, $t6], "Bar", { get: async () => L0["bar"], set: async (v) => { L0["bar"] = v; }, local: true }, false)), "Right")), async ($t12) => { await $.mset((await $.wv([$t1, $t2, $t6], "Bar", { get: async () => L0["bar"], set: async (v) => { L0["bar"] = v; }, local: true }, false)), "Right", $t12); }), 1], C)));
            await $.stmt((await $.wcall([$t1, $t2, $t6], "Dec", [$.ref(async () => (await $.mv((await $.wv([$t1, $t2, $t6], "Bar", { get: async () => L0["bar"], set: async (v) => { L0["bar"] = v; }, local: true }, false)), "Top")), async ($t13) => { await $.mset((await $.wv([$t1, $t2, $t6], "Bar", { get: async () => L0["bar"], set: async (v) => { L0["bar"] = v; }, local: true }, false)), "Top", $t13); }), 1], C)));
            await $.stmt((await $.wcall([$t1, $t2, $t6], "Dec", [$.ref(async () => (await $.mv((await $.wv([$t1, $t2, $t6], "Bar", { get: async () => L0["bar"], set: async (v) => { L0["bar"] = v; }, local: true }, false)), "Bottom")), async ($t14) => { await $.mset((await $.wv([$t1, $t2, $t6], "Bar", { get: async () => L0["bar"], set: async (v) => { L0["bar"] = v; }, local: true }, false)), "Bottom", $t14); }), 1], C)));
            if ($.truthy((await $.wv([$t1, $t2, $t6], "Selected", { get: async () => L0["selected"], set: async (v) => { L0["selected"] = v; }, local: true }, false)))) {
              await $.mset((await $.mv((await $.wv([$t1, $t2, $t6], "ACanvas", { get: async () => L0["acanvas"], set: async (v) => { L0["acanvas"] = v; }, local: true }, false)), "Brush")), "Color", (await $.wv([$t1, $t2, $t6], "clBtnFace", C, false)));
            } else {
              await $.mset((await $.mv((await $.wv([$t1, $t2, $t6], "ACanvas", { get: async () => L0["acanvas"], set: async (v) => { L0["acanvas"] = v; }, local: true }, false)), "Brush")), "Color", (await $.wv([$t1, $t2, $t6], "clBtnHighlight", C, false)));
            }
            await $.stmt((await $.mcall((await $.wv([$t1, $t2, $t6], "ACanvas", { get: async () => L0["acanvas"], set: async (v) => { L0["acanvas"] = v; }, local: true }, false)), "FillRect", [(await $.wv([$t1, $t2, $t6], "Bar", { get: async () => L0["bar"], set: async (v) => { L0["bar"] = v; }, local: true }, false))])));
          }
          await $.stmt((await $.mcall((await $.wv([$t1, $t2, $t6], "Images", C, false)), "Draw", [(await $.wv([$t1, $t2, $t6], "ACanvas", { get: async () => L0["acanvas"], set: async (v) => { L0["acanvas"] = v; }, local: true }, false)), (await $.mv((await $.wv([$t1, $t2, $t6], "ARect", { get: async () => L0["arect"], set: async (v) => { L0["arect"] = v; }, local: true }, false)), "Left")), (await $.mv((await $.wv([$t1, $t2, $t6], "ARect", { get: async () => L0["arect"], set: async (v) => { L0["arect"] = v; }, local: true }, false)), "Top")), (await $.wv([$t1, $t2, $t6], "ImageIndex", C, false)), (await $.wv([$t1, $t2, $t6], "Enabled", C, false))])));
        }
      }
    }
  }
  return L0.result;
}, {"params": ["Sender", "ACanvas", "ARect", "Selected"], "kind": "procedure", "ptypes": ["TObject", "TCanvas", "TRect", "Boolean"]});
  U.method("TCableContractsX", "OrderByColumn", async function OrderByColumn(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"dataset": $.copyArg(p0), "column": $.copyArg(p1), result: undefined, "post": 0};
  await $.fixArgs(L0, ["dataset", "column"]);
  if ($.truthy(($.eq((await $.v(C, "orderbyAD")), " asc")))) {
    await $.set(C, "orderbyAD", " desc");
  } else {
    await $.set(C, "orderbyAD", " asc");
  }
  L0["post"] = (await $.mcall((await $.mv(L0["dataset"], "SQL")), "Add", [$.add($.add("order by ", (await $.mv(L0["column"], "FieldName"))), (await $.v(C, "orderbyAD")))]));
  try {
    await $.mcall(L0["dataset"], "Close", []);
    await $.mcall(L0["dataset"], "Open", []);
  } finally {
    await $.stmt((await $.mcall((await $.mv(L0["dataset"], "SQL")), "Delete", [$.ref(async () => L0["post"], async ($t15) => { L0["post"] = $t15; })])));
  }
  return L0.result;
}, {"params": ["DataSet", "Column"], "kind": "procedure", "ptypes": ["TOracleDataSet", "TColumn"]});
  U.method("TCableContractsX", "DBGrid1TitleClick", async function DBGrid1TitleClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"column": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["column"]);
  if ($.truthy($.ne((await $.mv((await $.mv(L0["column"], "Field")), "FieldKind")), (await $.v(C, "fkCalculated"))))) {
    await $.stmt((await $.call(C, "OrderByColumn", [(await $.mv((await $.v(C, "DataModC")), "odsContracts")), L0["column"]])));
  }
  return L0.result;
}, {"params": ["Column"], "kind": "procedure", "ptypes": ["TColumn"]});
  U.method("TCableContractsX", "ActiveFormCreate", async function ActiveFormCreate(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.set(C, "DataModC", (await $.mcall((await $.v(C, "TDataModC")), "Create", [Self])));
  await $.stmt((await $.call(C, "OrderByColumn", [(await $.mv((await $.v(C, "DataModC")), "odsContracts")), (await $.idx((await $.mv((await $.v(C, "DBGrid1")), "Columns")), [0]))])));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TCableContractsX", "actRefreshExecute", async function actRefreshExecute(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t16 = (await $.v(C, "DataModC"));
    await $.wset([$t16], "OrderbyAD", " desc", C);
    await $.stmt((await $.wcall([$t16], "OrderByColumn", [(await $.wv([$t16], "odsContracts", C, false)), (await $.idx((await $.mv((await $.wv([$t16], "DBGrid1", C, false)), "Columns")), [0]))], C)));
    await $.mcall((await $.wv([$t16], "odsAccs", C, false)), "Close", []);
    await $.mcall((await $.wv([$t16], "odsAccs", C, false)), "Open", []);
    await $.mcall((await $.wv([$t16], "odsServices", C, false)), "Close", []);
    await $.mcall((await $.wv([$t16], "odsServices", C, false)), "Open", []);
    await $.mcall((await $.wv([$t16], "odsPacks", C, false)), "Close", []);
    await $.mcall((await $.wv([$t16], "odsPacks", C, false)), "Open", []);
    await $.mcall((await $.wv([$t16], "odsValutes", C, false)), "Close", []);
    await $.mcall((await $.wv([$t16], "odsValutes", C, false)), "Open", []);
    await $.mcall((await $.wv([$t16], "odsEngineers", C, false)), "Close", []);
    await $.mcall((await $.wv([$t16], "odsEngineers", C, false)), "Open", []);
    await $.mcall((await $.wv([$t16], "odsAbonents", C, false)), "Close", []);
    await $.mcall((await $.wv([$t16], "odsAbonents", C, false)), "Open", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TCableContractsX", "actContAddExecute", async function actContAddExecute(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "res": 0};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.not((await $.call(C, "assigned", [(await $.v(C, "frmContractAddEdit"))]))))) {
    await $.set(C, "frmContractAddEdit", (await $.mcall((await $.v(C, "TfrmContractAddEdit")), "Create", [Self])));
  }
  {
    const $t17 = (await $.v(C, "DataModC"));
    const $t18 = (await $.wv([$t17], "frmContractAddEdit", C, false));
    const $t19 = (await $.wv([$t17, $t18], "odsContracts", C, false));
    await $.mset((await $.wv([$t17, $t18, $t19], "edcontract_num", C, false)), "Text", "");
    await $.mset((await $.wv([$t17, $t18, $t19], "edcard_num", C, false)), "Text", "");
    await $.mset((await $.wv([$t17, $t18, $t19], "edserie", C, false)), "Text", "");
    await $.mset((await $.wv([$t17, $t18, $t19], "edworks_num", C, false)), "Text", "");
    await $.mset((await $.wv([$t17, $t18, $t19], "edreceiver_num", C, false)), "Text", "");
    await $.mset((await $.wv([$t17, $t18, $t19], "edcable_length", C, false)), "Text", "");
    await $.mset((await $.wv([$t17, $t18, $t19], "edamount", C, false)), "Text", "");
    await $.mset((await $.wv([$t17, $t18, $t19], "eddiscount", C, false)), "Text", "");
    await $.mset((await $.wv([$t17, $t18, $t19], "edDiscDesc", C, false)), "Text", "");
    await $.mset((await $.wv([$t17, $t18, $t19], "edinst_date", C, false)), "Date", (await $.wv([$t17, $t18, $t19], "Now", C, false)));
    await $.mset((await $.wv([$t17, $t18, $t19], "edexp_date", C, false)), "Date", (await $.wv([$t17, $t18, $t19], "Now", C, false)));
    await $.mset((await $.wv([$t17, $t18, $t19], "edinst_place", C, false)), "itemindex", 0);
    await $.mset((await $.wv([$t17, $t18, $t19], "edcurr_code", C, false)), "KeyValue", 0);
    await $.mset((await $.wv([$t17, $t18, $t19], "edeng_id", C, false)), "KeyValue", 0);
    await $.mset((await $.wv([$t17, $t18, $t19], "edpack_num", C, false)), "KeyValue", 0);
    await $.mset((await $.wv([$t17, $t18, $t19], "edAcc_ID", C, false)), "KeyValue", 0);
    await $.mset((await $.wv([$t17, $t18, $t19], "edABN_ID", C, false)), "KeyValue", 0);
    await $.mset((await $.wv([$t17, $t18, $t19], "edCalcAg", C, false)), "Checked", (await $.wv([$t17, $t18, $t19], "False", C, false)));
    if ($.truthy(($.eq((await $.mv((await $.wv([$t17, $t18, $t19], "frmContractAddEdit", C, false)), "ShowModal")), 1)))) {
      await $.wset([$t17, $t18, $t19], "Res", (await $.mcall((await $.wv([$t17, $t18, $t19], "CABLE", C, false)), "CallIntegerFunction", ["contractadd", [(await $.mv((await $.wv([$t17, $t18, $t19], "edcontract_num", C, false)), "Text")), (await $.mv((await $.wv([$t17, $t18, $t19], "edcard_num", C, false)), "Text")), (await $.mv((await $.idx((await $.mv((await $.wv([$t17, $t18, $t19], "odsAbonents", C, false)), "Fields")), [0])), "AsVariant")), (await $.wcall([$t17, $t18, $t19], "Tdatetime", [(await $.mv((await $.wv([$t17, $t18, $t19], "edinst_date", C, false)), "DateTime"))], C)), (await $.mv((await $.wv([$t17, $t18, $t19], "edinst_place", C, false)), "itemindex")), (await $.mv((await $.wv([$t17, $t18, $t19], "edserie", C, false)), "Text")), (await $.mv((await $.wv([$t17, $t18, $t19], "edworks_num", C, false)), "Text")), (await $.mv((await $.wv([$t17, $t18, $t19], "edreceiver_num", C, false)), "Text")), (await $.mv((await $.wv([$t17, $t18, $t19], "edcable_length", C, false)), "Text")), (await $.mv((await $.wv([$t17, $t18, $t19], "edamount", C, false)), "value")), (await $.mv((await $.wv([$t17, $t18, $t19], "edcurr_code", C, false)), "KeyValue")), (await $.mv((await $.wv([$t17, $t18, $t19], "eddiscount", C, false)), "Text")), (await $.mv((await $.wv([$t17, $t18, $t19], "edeng_id", C, false)), "KeyValue")), (await $.mv((await $.wv([$t17, $t18, $t19], "edpack_num", C, false)), "KeyValue")), (await $.mv((await $.wv([$t17, $t18, $t19], "edAcc_ID", C, false)), "KeyValue")), (await $.wcall([$t17, $t18, $t19], "Integer", [(await $.mv((await $.wv([$t17, $t18, $t19], "edCalcAg", C, false)), "Checked"))], C)), (await $.mv((await $.wv([$t17, $t18, $t19], "edDiscDesc", C, false)), "Text")), (await $.wcall([$t17, $t18, $t19], "Tdatetime", [(await $.mv((await $.wv([$t17, $t18, $t19], "edexp_date", C, false)), "DateTime"))], C))]])), { get: async () => L0["res"], set: async (v) => { L0["res"] = v; }, local: true });
      await $.stmt((await $.wcall([$t17, $t18, $t19], "actRefreshExecute", [(await $.wv([$t17, $t18, $t19], "Sender", { get: async () => L0["sender"], set: async (v) => { L0["sender"] = v; }, local: true }, false))], C)));
    }
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TCableContractsX", "actContEditExecute", async function actContEditExecute(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "nt": 0};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.not((await $.call(C, "assigned", [(await $.v(C, "frmContractAddEdit"))]))))) {
    await $.set(C, "frmContractAddEdit", (await $.mcall((await $.v(C, "TfrmContractAddEdit")), "Create", [Self])));
  }
  {
    const $t20 = (await $.v(C, "DataModC"));
    const $t21 = (await $.wv([$t20], "frmContractAddEdit", C, false));
    const $t22 = (await $.wv([$t20, $t21], "odsContracts", C, false));
    await $.mset((await $.wv([$t20, $t21, $t22], "edcontract_num", C, false)), "Text", (await $.mv((await $.mcall((await $.wv([$t20, $t21, $t22], "odsContracts", C, false)), "FieldByName", ["CONTRACT_NUM"])), "AsString")));
    await $.mset((await $.wv([$t20, $t21, $t22], "edcard_num", C, false)), "Text", (await $.mv((await $.mcall((await $.wv([$t20, $t21, $t22], "odsContracts", C, false)), "FieldByName", ["CARD_NUM"])), "AsString")));
    await $.mset((await $.wv([$t20, $t21, $t22], "edserie", C, false)), "Text", (await $.mv((await $.mcall((await $.wv([$t20, $t21, $t22], "odsContracts", C, false)), "FieldByName", ["SERIE"])), "AsString")));
    await $.mset((await $.wv([$t20, $t21, $t22], "edworks_num", C, false)), "Text", (await $.mv((await $.mcall((await $.wv([$t20, $t21, $t22], "odsContracts", C, false)), "FieldByName", ["WORKS_NUM"])), "AsString")));
    await $.mset((await $.wv([$t20, $t21, $t22], "edreceiver_num", C, false)), "Text", (await $.mv((await $.mcall((await $.wv([$t20, $t21, $t22], "odsContracts", C, false)), "FieldByName", ["RECEIVER_NUM"])), "AsString")));
    await $.mset((await $.wv([$t20, $t21, $t22], "edcable_length", C, false)), "Text", (await $.mv((await $.mcall((await $.wv([$t20, $t21, $t22], "odsContracts", C, false)), "FieldByName", ["CABLE_LENGTH"])), "AsString")));
    await $.mset((await $.wv([$t20, $t21, $t22], "edamount", C, false)), "Text", (await $.mv((await $.mcall((await $.wv([$t20, $t21, $t22], "odsContracts", C, false)), "FieldByName", ["AMOUNT"])), "AsString")));
    await $.mset((await $.wv([$t20, $t21, $t22], "eddiscount", C, false)), "Text", (await $.mv((await $.mcall((await $.wv([$t20, $t21, $t22], "odsContracts", C, false)), "FieldByName", ["DISCOUNT"])), "AsString")));
    await $.mset((await $.wv([$t20, $t21, $t22], "edDiscDesc", C, false)), "Text", (await $.mv((await $.mcall((await $.wv([$t20, $t21, $t22], "odsContracts", C, false)), "FieldByName", ["DISCOUNT_DESC"])), "AsString")));
    await $.mset((await $.wv([$t20, $t21, $t22], "edinst_date", C, false)), "Date", (await $.mv((await $.mcall((await $.wv([$t20, $t21, $t22], "odsContracts", C, false)), "FieldByName", ["INST_DATE"])), "AsDateTime")));
    await $.mset((await $.wv([$t20, $t21, $t22], "edexp_date", C, false)), "Date", (await $.mv((await $.mcall((await $.wv([$t20, $t21, $t22], "odsContracts", C, false)), "FieldByName", ["EXP_DATE"])), "AsDateTime")));
    await $.mset((await $.wv([$t20, $t21, $t22], "edinst_place", C, false)), "itemindex", (await $.mv((await $.mcall((await $.wv([$t20, $t21, $t22], "odsContracts", C, false)), "FieldByName", ["INST_PLACE"])), "AsInteger")));
    await $.mset((await $.wv([$t20, $t21, $t22], "edcurr_code", C, false)), "KeyValue", (await $.mv((await $.mcall((await $.wv([$t20, $t21, $t22], "odsContracts", C, false)), "FieldByName", ["CURR_CODE"])), "AsVariant")));
    await $.mset((await $.wv([$t20, $t21, $t22], "edeng_id", C, false)), "KeyValue", (await $.mv((await $.mcall((await $.wv([$t20, $t21, $t22], "odsContracts", C, false)), "FieldByName", ["ENG_ID"])), "AsVariant")));
    await $.mset((await $.wv([$t20, $t21, $t22], "edpack_num", C, false)), "KeyValue", (await $.mv((await $.mcall((await $.wv([$t20, $t21, $t22], "odsContracts", C, false)), "FieldByName", ["PACK_NUM"])), "AsVariant")));
    await $.mset((await $.wv([$t20, $t21, $t22], "edAcc_ID", C, false)), "KeyValue", (await $.mv((await $.mcall((await $.wv([$t20, $t21, $t22], "odsContracts", C, false)), "FieldByName", ["ACC_ID"])), "AsVariant")));
    await $.mset((await $.wv([$t20, $t21, $t22], "edABN_ID", C, false)), "KeyValue", (await $.mv((await $.mcall((await $.wv([$t20, $t21, $t22], "odsContracts", C, false)), "FieldByName", ["ABN_ID"])), "AsVariant")));
    await $.mset((await $.wv([$t20, $t21, $t22], "edCalcAg", C, false)), "Checked", (await $.wcall([$t20, $t21, $t22], "Boolean", [(await $.mv((await $.mcall((await $.wv([$t20, $t21, $t22], "odsContracts", C, false)), "FieldByName", ["CALCAG"])), "AsInteger"))], C)));
    await $.wset([$t20, $t21, $t22], "nt", (await $.mv((await $.idx((await $.mv((await $.wv([$t20, $t21, $t22], "odsContracts", C, false)), "Fields")), [0])), "AsInteger")), { get: async () => L0["nt"], set: async (v) => { L0["nt"] = v; }, local: true });
    if ($.truthy(($.eq((await $.mv((await $.wv([$t20, $t21, $t22], "frmContractAddEdit", C, false)), "ShowModal")), 1)))) {
      await $.stmt((await $.mcall((await $.wv([$t20, $t21, $t22], "CABLE", C, false)), "CallProcedure", ["contractupd", [(await $.mv((await $.idx((await $.mv((await $.wv([$t20, $t21, $t22], "odsContracts", C, false)), "Fields")), [0])), "AsVariant")), (await $.mv((await $.wv([$t20, $t21, $t22], "edcontract_num", C, false)), "Text")), (await $.mv((await $.wv([$t20, $t21, $t22], "edcard_num", C, false)), "Text")), (await $.mv((await $.idx((await $.mv((await $.wv([$t20, $t21, $t22], "odsAbonents", C, false)), "Fields")), [0])), "AsVariant")), (await $.wcall([$t20, $t21, $t22], "Tdatetime", [(await $.mv((await $.wv([$t20, $t21, $t22], "edinst_date", C, false)), "DateTime"))], C)), (await $.mv((await $.wv([$t20, $t21, $t22], "edinst_place", C, false)), "itemindex")), (await $.mv((await $.wv([$t20, $t21, $t22], "edserie", C, false)), "Text")), (await $.mv((await $.wv([$t20, $t21, $t22], "edworks_num", C, false)), "Text")), (await $.mv((await $.wv([$t20, $t21, $t22], "edreceiver_num", C, false)), "Text")), (await $.mv((await $.wv([$t20, $t21, $t22], "edcable_length", C, false)), "Text")), (await $.mv((await $.wv([$t20, $t21, $t22], "edamount", C, false)), "value")), (await $.mv((await $.wv([$t20, $t21, $t22], "edcurr_code", C, false)), "KeyValue")), (await $.mv((await $.wv([$t20, $t21, $t22], "eddiscount", C, false)), "Text")), (await $.mv((await $.wv([$t20, $t21, $t22], "edeng_id", C, false)), "KeyValue")), (await $.mv((await $.wv([$t20, $t21, $t22], "edpack_num", C, false)), "KeyValue")), (await $.mv((await $.wv([$t20, $t21, $t22], "edAcc_ID", C, false)), "KeyValue")), (await $.wcall([$t20, $t21, $t22], "Integer", [(await $.mv((await $.wv([$t20, $t21, $t22], "edCalcAg", C, false)), "Checked"))], C)), (await $.mv((await $.wv([$t20, $t21, $t22], "edDiscDesc", C, false)), "Text")), (await $.wcall([$t20, $t21, $t22], "Tdatetime", [(await $.mv((await $.wv([$t20, $t21, $t22], "edexp_date", C, false)), "DateTime"))], C))]])));
      await $.stmt((await $.wcall([$t20, $t21, $t22], "actRefreshExecute", [(await $.wv([$t20, $t21, $t22], "Sender", { get: async () => L0["sender"], set: async (v) => { L0["sender"] = v; }, local: true }, false))], C)));
      await $.stmt((await $.mcall((await $.wv([$t20, $t21, $t22], "odsContracts", C, false)), "Locate", ["id", (await $.wv([$t20, $t21, $t22], "nt", { get: async () => L0["nt"], set: async (v) => { L0["nt"] = v; }, local: true }, false)), []])));
    }
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TCableContractsX", "actContEraseExecute", async function actContEraseExecute(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy(($.eq((await $.call(C, "MessageDlg", ["Yazı silinəck. Əminsiniz?", (await $.v(C, "mtWarning")), [(await $.v(C, "mbYes")), (await $.v(C, "mbNo"))], 0])), (await $.v(C, "idyes")))))) {
    {
      const $t23 = (await $.v(C, "DataModC"));
      const $t24 = (await $.wv([$t23], "frmContractAddEdit", C, false));
      await $.stmt((await $.mcall((await $.wv([$t23, $t24], "CABLE", C, false)), "CallProcedure", ["contractdel", [(await $.mv((await $.idx((await $.mv((await $.wv([$t23, $t24], "odsContracts", C, false)), "fields")), [0])), "AsVariant"))]])));
      await $.stmt((await $.wcall([$t23, $t24], "actRefreshExecute", [(await $.wv([$t23, $t24], "Sender", { get: async () => L0["sender"], set: async (v) => { L0["sender"] = v; }, local: true }, false))], C)));
    }
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TCableContractsX", "actCommitOneExecute", async function actCommitOneExecute(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "i": 0};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t25 = (await $.v(C, "dbgrid1"));
    const $t26 = (await $.wv([$t25], "SelectedRows", C, false));
    const $t27 = (await $.mv((await $.wv([$t25, $t26], "DataSource", C, false)), "DataSet"));
    const $t28 = (await $.wv([$t25, $t26, $t27], "DataModC", C, false));
    const $t29 = (await $.wv([$t25, $t26, $t27, $t28], "CABLE", C, false));
    { const $t30 = $.sub((await $.wv([$t25, $t26, $t27, $t28, $t29], "Count", C, false)), 1);
      await $.wset([$t25, $t26, $t27, $t28, $t29], "i", 0, { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true });
      let $t31 = true;
      for (;;) {
        if (!$t31) { await $.wset([$t25, $t26, $t27, $t28, $t29], "i", $.succ((await $.wv([$t25, $t26, $t27, $t28, $t29], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false)), 1), { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }); }
        $t31 = false;
        if (!($.ord((await $.wv([$t25, $t26, $t27, $t28, $t29], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false))) <= $.ord($t30))) break;
        await $.stmt((await $.wcall([$t25, $t26, $t27, $t28, $t29], "GotoBookmark", [(await $.wcall([$t25, $t26, $t27, $t28, $t29], "TBookmark", [(await $.idx((await $.wv([$t25, $t26, $t27, $t28, $t29], "Items", C, false)), [(await $.wv([$t25, $t26, $t27, $t28, $t29], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false))]))], C))], C)));
        await $.stmt((await $.wcall([$t25, $t26, $t27, $t28, $t29], "CallProcedure", ["calconecontract", [(await $.mv((await $.idx((await $.mv((await $.wv([$t25, $t26, $t27, $t28, $t29], "odsContracts", C, false)), "Fields")), [0])), "AsVariant")), 0]], C)));
        await $.tick();
      }
    }
    await $.stmt((await $.wcall([$t25, $t26, $t27, $t28, $t29], "actRefreshExecute", [(await $.wv([$t25, $t26, $t27, $t28, $t29], "Sender", { get: async () => L0["sender"], set: async (v) => { L0["sender"] = v; }, local: true }, false))], C)));
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TCableContractsX", "actCommitAllExecute", async function actCommitAllExecute(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t32 = (await $.v(C, "DataModC"));
    const $t33 = (await $.wv([$t32], "CABLE", C, false));
    await $.stmt((await $.wcall([$t32, $t33], "CallProcedure", ["calccontracts", [0]], C)));
    await $.stmt((await $.wcall([$t32, $t33], "actRefreshExecute", [(await $.wv([$t32, $t33], "Sender", { get: async () => L0["sender"], set: async (v) => { L0["sender"] = v; }, local: true }, false))], C)));
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TCableContractsX", "actExportExecute", async function actExportExecute(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t34 = (await $.v(C, "ExcelExp"));
    await $.stmt($.wcall([$t34], "Connect", [], C));
    await $.stmt((await $.wcall([$t34], "ExportDataset", [(await $.mv((await $.wv([$t34], "DataModC", C, false)), "odsContracts")), "Contracts", (await $.wv([$t34], "True", C, false))], C)));
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TCableContractsX", "ToolButton11Click", async function ToolButton11Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mset((await $.v(C, "pnFilter")), "Visible", $.not((await $.mv((await $.v(C, "pnFilter")), "Visible"))));
  await $.mset((await $.v(C, "ToolButton11")), "Down", (await $.mv((await $.v(C, "pnFilter")), "Visible")));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TCableContractsX", "Button2Click", async function Button2Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mset((await $.v(C, "cbfAbn")), "KeyValue", 0);
  await $.mset((await $.v(C, "cbfEng")), "KeyValue", 0);
  await $.mset((await $.v(C, "cbfPack")), "KeyValue", 0);
  await $.mset((await $.v(C, "cbfAcc")), "KeyValue", 0);
  await $.mset((await $.v(C, "cbfCalc")), "ItemIndex", (-(1)));
  await $.mset((await $.v(C, "chf1")), "Checked", false);
  await $.mset((await $.v(C, "chf2")), "Checked", false);
  await $.mset((await $.v(C, "chf3")), "Checked", false);
  await $.mset((await $.v(C, "chf4")), "Checked", false);
  await $.mset((await $.v(C, "chf5")), "Checked", false);
  {
    const $t35 = (await $.v(C, "DataModC"));
    const $t36 = (await $.wv([$t35], "odsContracts", C, false));
    await $.wset([$t35, $t36], "Filtered", (await $.wv([$t35, $t36], "False", C, false)), C);
    await $.stmt((await $.wcall([$t35, $t36], "OrderByColumn", [(await $.wv([$t35, $t36], "odsContracts", C, false)), (await $.idx((await $.mv((await $.wv([$t35, $t36], "DBGrid1", C, false)), "Columns")), [0]))], C)));
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TCableContractsX", "Button1Click", async function Button1Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "filt": ''};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t37 = (await $.v(C, "DataModC"));
    const $t38 = (await $.wv([$t37], "odsContracts", C, false));
    await $.wset([$t37, $t38], "Filt", "1=1", { get: async () => L0["filt"], set: async (v) => { L0["filt"] = v; }, local: true });
    if ($.truthy((await $.mv((await $.wv([$t37, $t38], "chf1", C, false)), "Checked")))) {
      await $.wset([$t37, $t38], "Filt", $.add($.add($.add((await $.wv([$t37, $t38], "Filt", { get: async () => L0["filt"], set: async (v) => { L0["filt"] = v; }, local: true }, false)), " and (abn_id="), (await $.wcall([$t37, $t38], "String", [(await $.mv((await $.wv([$t37, $t38], "cbfAbn", C, false)), "KeyValue"))], C))), ")"), { get: async () => L0["filt"], set: async (v) => { L0["filt"] = v; }, local: true });
    }
    if ($.truthy((await $.mv((await $.wv([$t37, $t38], "chf2", C, false)), "Checked")))) {
      await $.wset([$t37, $t38], "Filt", $.add($.add($.add((await $.wv([$t37, $t38], "Filt", { get: async () => L0["filt"], set: async (v) => { L0["filt"] = v; }, local: true }, false)), " and (eng_id="), (await $.wcall([$t37, $t38], "String", [(await $.mv((await $.wv([$t37, $t38], "cbfEng", C, false)), "KeyValue"))], C))), ")"), { get: async () => L0["filt"], set: async (v) => { L0["filt"] = v; }, local: true });
    }
    if ($.truthy((await $.mv((await $.wv([$t37, $t38], "chf3", C, false)), "Checked")))) {
      await $.wset([$t37, $t38], "Filt", $.add($.add($.add((await $.wv([$t37, $t38], "Filt", { get: async () => L0["filt"], set: async (v) => { L0["filt"] = v; }, local: true }, false)), " and (pack_num="), (await $.wcall([$t37, $t38], "String", [(await $.mv((await $.wv([$t37, $t38], "cbfPack", C, false)), "KeyValue"))], C))), ")"), { get: async () => L0["filt"], set: async (v) => { L0["filt"] = v; }, local: true });
    }
    if ($.truthy((await $.mv((await $.wv([$t37, $t38], "chf4", C, false)), "Checked")))) {
      await $.wset([$t37, $t38], "Filt", $.add($.add($.add((await $.wv([$t37, $t38], "Filt", { get: async () => L0["filt"], set: async (v) => { L0["filt"] = v; }, local: true }, false)), " and (acc_id="), (await $.wcall([$t37, $t38], "String", [(await $.mv((await $.wv([$t37, $t38], "cbfAcc", C, false)), "KeyValue"))], C))), ")"), { get: async () => L0["filt"], set: async (v) => { L0["filt"] = v; }, local: true });
    }
    if ($.truthy((await $.mv((await $.wv([$t37, $t38], "chf5", C, false)), "Checked")))) {
      await $.wset([$t37, $t38], "Filt", $.add($.add($.add((await $.wv([$t37, $t38], "Filt", { get: async () => L0["filt"], set: async (v) => { L0["filt"] = v; }, local: true }, false)), " and (calcag="), (await $.wcall([$t37, $t38], "IntToStr", [(await $.mv((await $.wv([$t37, $t38], "cbfCalc", C, false)), "ItemIndex"))], C))), ")"), { get: async () => L0["filt"], set: async (v) => { L0["filt"] = v; }, local: true });
    }
    await $.wset([$t37, $t38], "Filter", (await $.wv([$t37, $t38], "Filt", { get: async () => L0["filt"], set: async (v) => { L0["filt"] = v; }, local: true }, false)), C);
    await $.wset([$t37, $t38], "Filtered", (await $.wv([$t37, $t38], "True", C, false)), C);
    await $.stmt($.wcall([$t37, $t38], "Close", [], C));
    await $.stmt($.wcall([$t37, $t38], "Open", [], C));
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TCableContractsX", "DBGrid1DrawColumnCell", async function DBGrid1DrawColumnCell(Self, p0, p1, p2, p3, p4) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "rect": $.copyArg(p1), "datacol": $.copyArg(p2), "column": $.copyArg(p3), "state": $.copyArg(p4), result: undefined};
  await $.fixArgs(L0, ["sender", "rect", "datacol", "column", "state"]);
  {
    const $t39 = L0["sender"];
    if ($.truthy($.lt((await $.mv((await $.mcall((await $.mv((await $.wv([$t39], "datasource", C, false)), "DataSet")), "fieldbyname", ["REST"])), "AsFloat")), 0))) {
      await $.mset((await $.mv((await $.wv([$t39], "Canvas", C, false)), "Font")), "Color", (await $.wv([$t39], "clRed", C, false)));
    }
    if ($.truthy($.eq((await $.mv((await $.mcall((await $.mv((await $.wv([$t39], "datasource", C, false)), "DataSet")), "fieldbyname", ["REST"])), "AsFloat")), 0))) {
      await $.mset((await $.mv((await $.wv([$t39], "Canvas", C, false)), "Font")), "Color", (await $.wv([$t39], "clBlue", C, false)));
    }
    await $.stmt((await $.wcall([$t39], "DefaultDrawColumnCell", [(await $.wv([$t39], "Rect", { get: async () => L0["rect"], set: async (v) => { L0["rect"] = v; }, local: true }, false)), (await $.wv([$t39], "DataCol", { get: async () => L0["datacol"], set: async (v) => { L0["datacol"] = v; }, local: true }, false)), (await $.wv([$t39], "Column", { get: async () => L0["column"], set: async (v) => { L0["column"] = v; }, local: true }, false)), (await $.wv([$t39], "State", { get: async () => L0["state"], set: async (v) => { L0["state"] = v; }, local: true }, false))], C)));
  }
  return L0.result;
}, {"params": ["Sender", "Rect", "DataCol", "Column", "State"], "kind": "procedure", "ptypes": ["TObject", "TRect", "Integer", "TColumn", "TGridDrawState"]});
  U.method("TCableContractsX", "ApplicationEvents1Exception", async function ApplicationEvents1Exception(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "e": $.copyArg(p1), result: undefined};
  await $.fixArgs(L0, ["sender", "e"]);
  if ($.truthy(($.eq((await $.call(C, "copy", [(await $.mv(L0["e"], "Message")), 5, 5])), "12899")))) {
    await $.stmt((await $.call(C, "ShowMessage", ["Yazı sahəyə yerləşmir."])));
  } else {
    await $.stmt((await $.call(C, "ShowMessage", [$.add("Məlumat səhv daxil olunur və ya naməlum səhv ", (await $.call(C, "copy", [(await $.mv(L0["e"], "Message")), 5, 5])))])));
  }
  return L0.result;
}, {"params": ["Sender", "E"], "kind": "procedure", "ptypes": ["TObject", "Exception"]});
  U.method("TCableContractsX", "actCommitMonOneExecute", async function actCommitMonOneExecute(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "i": 0};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t40 = (await $.v(C, "dbgrid1"));
    const $t41 = (await $.wv([$t40], "SelectedRows", C, false));
    const $t42 = (await $.mv((await $.wv([$t40, $t41], "DataSource", C, false)), "DataSet"));
    const $t43 = (await $.wv([$t40, $t41, $t42], "DataModC", C, false));
    const $t44 = (await $.wv([$t40, $t41, $t42, $t43], "CABLE", C, false));
    { const $t45 = $.sub((await $.wv([$t40, $t41, $t42, $t43, $t44], "Count", C, false)), 1);
      await $.wset([$t40, $t41, $t42, $t43, $t44], "i", 0, { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true });
      let $t46 = true;
      for (;;) {
        if (!$t46) { await $.wset([$t40, $t41, $t42, $t43, $t44], "i", $.succ((await $.wv([$t40, $t41, $t42, $t43, $t44], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false)), 1), { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }); }
        $t46 = false;
        if (!($.ord((await $.wv([$t40, $t41, $t42, $t43, $t44], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false))) <= $.ord($t45))) break;
        await $.stmt((await $.wcall([$t40, $t41, $t42, $t43, $t44], "GotoBookmark", [(await $.wcall([$t40, $t41, $t42, $t43, $t44], "TBookmark", [(await $.idx((await $.wv([$t40, $t41, $t42, $t43, $t44], "Items", C, false)), [(await $.wv([$t40, $t41, $t42, $t43, $t44], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false))]))], C))], C)));
        await $.stmt((await $.wcall([$t40, $t41, $t42, $t43, $t44], "CallProcedure", ["calconecontract", [(await $.mv((await $.idx((await $.mv((await $.wv([$t40, $t41, $t42, $t43, $t44], "odsContracts", C, false)), "Fields")), [0])), "AsVariant")), 1]], C)));
        await $.tick();
      }
    }
    await $.stmt((await $.wcall([$t40, $t41, $t42, $t43, $t44], "actRefreshExecute", [(await $.wv([$t40, $t41, $t42, $t43, $t44], "Sender", { get: async () => L0["sender"], set: async (v) => { L0["sender"] = v; }, local: true }, false))], C)));
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TCableContractsX", "actCommitMonAllExecute", async function actCommitMonAllExecute(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t47 = (await $.v(C, "DataModC"));
    const $t48 = (await $.wv([$t47], "CABLE", C, false));
    await $.stmt((await $.wcall([$t47, $t48], "CallProcedure", ["calccontracts", [1]], C)));
    await $.stmt((await $.wcall([$t47, $t48], "actRefreshExecute", [(await $.wv([$t47, $t48], "Sender", { get: async () => L0["sender"], set: async (v) => { L0["sender"] = v; }, local: true }, false))], C)));
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TCableContractsX", "actSetNewCalcDateExecute", async function actSetNewCalcDateExecute(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "nt": 0};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t49 = (await $.v(C, "DataModC"));
    await $.wset([$t49], "nt", (await $.mv((await $.idx((await $.mv((await $.wv([$t49], "odsContracts", C, false)), "fields")), [0])), "AsVariant")), { get: async () => L0["nt"], set: async (v) => { L0["nt"] = v; }, local: true });
    await $.stmt((await $.mcall((await $.wv([$t49], "CABLE", C, false)), "CallProcedure", ["contractsetlastdate", [(await $.mv((await $.idx((await $.mv((await $.wv([$t49], "odsContracts", C, false)), "fields")), [0])), "AsVariant"))]])));
    await $.mcall((await $.wv([$t49], "odsContracts", C, false)), "Close", []);
    await $.mcall((await $.wv([$t49], "odsContracts", C, false)), "Open", []);
    await $.stmt((await $.wcall([$t49], "actRefreshExecute", [(await $.wv([$t49], "Sender", { get: async () => L0["sender"], set: async (v) => { L0["sender"] = v; }, local: true }, false))], C)));
    await $.stmt((await $.mcall((await $.wv([$t49], "odsContracts", C, false)), "Locate", ["id", (await $.wv([$t49], "nt", { get: async () => L0["nt"], set: async (v) => { L0["nt"] = v; }, local: true }, false)), []])));
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TCableContractsX", "BtnDeletedContsClick", async function BtnDeletedContsClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.not((await $.call(C, "Assigned", [(await $.v(C, "FrmDeletedConts"))]))))) {
    await $.set(C, "FrmDeletedConts", (await $.mcall((await $.v(C, "TFrmDeletedConts")), "Create", [Self])));
  }
  await $.mcall((await $.v(C, "FrmDeletedConts")), "ShowModal", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  return U;
}
