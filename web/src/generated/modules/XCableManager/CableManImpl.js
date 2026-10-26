// Generated from CableManImpl.pas by pas2js — do not edit by hand; regenerate instead.
/* eslint-disable */
// @ts-nocheck

export default function define($) {
  const U = $.unit("CableManImpl", ["Windows", "Messages", "SysUtils", "Classes", "Graphics", "Controls", "Forms", "LDialogs", "ActiveX", "AxCtrls", "CableManager_TLB", "StdVcl", "ExtCtrls", "Grids", "DBGrids", "OracleData", "DBCtrls", "StdCtrls", "Buttons", "Menus", "ActnList", "DB", "ComCtrls", "AppEvnts", "sbcore", "ComObj", "ComServ", "CableManDataModuleImpl", "CableManAddEditImpl", "CableManContractAdd", "CableManServAddEdit", "qrpCableRep", "CableManRepSet", "sboapidatamoduleimpl"]);
  const C = [U];
  U.defClass("TCableMan", "TActiveForm", {"panel1": {"name": "Panel1", "type": "TPanel"}, "panel2": {"name": "Panel2", "type": "TPanel"}, "panel3": {"name": "Panel3", "type": "TGroupBox"}, "splitter1": {"name": "Splitter1", "type": "TSplitter"}, "dbgrid1": {"name": "DBGrid1", "type": "TDBGrid"}, "panel4": {"name": "Panel4", "type": "TPanel"}, "bitbtn1": {"name": "BitBtn1", "type": "TBitBtn"}, "bitbtn2": {"name": "BitBtn2", "type": "TBitBtn"}, "bitbtn3": {"name": "BitBtn3", "type": "TBitBtn"}, "panel6": {"name": "Panel6", "type": "TGroupBox"}, "dbgrid3": {"name": "DBGrid3", "type": "TDBGrid"}, "panel5": {"name": "Panel5", "type": "TGroupBox"}, "dbgrid2": {"name": "DBGrid2", "type": "TDBGrid"}, "panel7": {"name": "Panel7", "type": "TPanel"}, "bitbtn4": {"name": "BitBtn4", "type": "TBitBtn"}, "bitbtn5": {"name": "BitBtn5", "type": "TBitBtn"}, "bitbtn6": {"name": "BitBtn6", "type": "TBitBtn"}, "splitter2": {"name": "Splitter2", "type": "TSplitter"}, "pmabonent": {"name": "pmAbonent", "type": "TPopupMenu"}, "n1": {"name": "N1", "type": "TMenuItem"}, "n2": {"name": "N2", "type": "TMenuItem"}, "n3": {"name": "N3", "type": "TMenuItem"}, "n4": {"name": "N4", "type": "TMenuItem"}, "n5": {"name": "N5", "type": "TMenuItem"}, "actionlist1": {"name": "ActionList1", "type": "TActionList"}, "actabadd": {"name": "actAbAdd", "type": "TAction"}, "actabed": {"name": "actAbEd", "type": "TAction"}, "actabdel": {"name": "actAbDel", "type": "TAction"}, "actabnewcon": {"name": "actAbNewCon", "type": "TAction"}, "acteditcontact": {"name": "actEditContact", "type": "TAction"}, "pmcontract": {"name": "pmContract", "type": "TPopupMenu"}, "n7": {"name": "N7", "type": "TMenuItem"}, "n8": {"name": "N8", "type": "TMenuItem"}, "actcontdel": {"name": "actContDel", "type": "TAction"}, "n6": {"name": "N6", "type": "TMenuItem"}, "actsadd": {"name": "actSAdd", "type": "TAction"}, "actsedit": {"name": "actSEdit", "type": "TAction"}, "actsdel": {"name": "actSDel", "type": "TAction"}, "button1": {"name": "Button1", "type": "TButton"}, "actcommit": {"name": "actCommit", "type": "TAction"}, "edsrcid": {"name": "edSrcID", "type": "TEdit"}, "edsrcname": {"name": "edSrcNAME", "type": "TEdit"}, "edsrcdoc_num": {"name": "edSrcDOC_NUM", "type": "TEdit"}, "label1": {"name": "Label1", "type": "TLabel"}, "label2": {"name": "Label2", "type": "TLabel"}, "label3": {"name": "Label3", "type": "TLabel"}, "button2": {"name": "Button2", "type": "TButton"}, "label4": {"name": "Label4", "type": "TLabel"}, "edsrcphone": {"name": "edSrcPHONE", "type": "TEdit"}, "actrefresh": {"name": "actRefresh", "type": "TAction"}, "n9": {"name": "N9", "type": "TMenuItem"}, "n10": {"name": "N10", "type": "TMenuItem"}, "applicationevents1": {"name": "ApplicationEvents1", "type": "TApplicationEvents"}, "label5": {"name": "Label5", "type": "TLabel"}, "edit1": {"name": "Edit1", "type": "TEdit"}, "checkbox1": {"name": "CheckBox1", "type": "TCheckBox"}, "lbr1": {"name": "lbR1", "type": "TLabel"}, "lbr": {"name": "lbR", "type": "TLabel"}, "n11": {"name": "N11", "type": "TMenuItem"}, "actadttocontact": {"name": "actAdtToContact", "type": "TAction"}, "actsetnewcalcdate": {"name": "actSetNewCalcDate", "type": "TAction"}, "editsrchworksnum": {"name": "EditSrchWorksNum", "type": "TEdit"}, "label6": {"name": "Label6", "type": "TLabel"}, "naddt": {"name": "NAddt", "type": "TMenuItem"}, "fevents": {"name": "FEvents", "type": "ICableManEvents"}}, {});
  U.init(async () => {
    U.var_("orderbyAD", '', "String");
  });
  U.method("TCableMan", "DefinePropertyPages", async function DefinePropertyPages(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"definepropertypage": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["definepropertypage"]);
  return L0.result;
}, {"params": ["DefinePropertyPage"], "kind": "procedure", "ptypes": ["TDefinePropertyPage"]});
  U.method("TCableMan", "EventSinkChanged", async function EventSinkChanged(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"eventsink": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["eventsink"]);
  await $.set(C, "FEvents", L0["eventsink"]);
  return L0.result;
}, {"params": ["EventSink"], "kind": "procedure", "ptypes": ["IUnknown"]});
  U.method("TCableMan", "Initialize", async function Initialize(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: undefined};
  await $.inherited(Self, "TCableMan", "Initialize", null, arguments);
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
  U.method("TCableMan", "Get_Active", async function Get_Active(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: false};
  L0["result"] = (await $.v(C, "Active"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TCableMan", "Get_AutoScroll", async function Get_AutoScroll(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: false};
  L0["result"] = (await $.v(C, "AutoScroll"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TCableMan", "Get_AutoSize", async function Get_AutoSize(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: false};
  L0["result"] = (await $.v(C, "AutoSize"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TCableMan", "Get_AxBorderStyle", async function Get_AxBorderStyle(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: null};
  L0["result"] = (await $.call(C, "Ord", [(await $.v(C, "AxBorderStyle"))]));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TCableMan", "Get_Caption", async function Get_Caption(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: ''};
  L0["result"] = (await $.call(C, "WideString", [(await $.v(C, "Caption"))]));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TCableMan", "Get_Color", async function Get_Color(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: null};
  L0["result"] = (await $.call(C, "OLE_COLOR", [(await $.v(C, "Color"))]));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TCableMan", "Get_Cursor", async function Get_Cursor(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: 0};
  L0["result"] = (await $.call(C, "Smallint", [(await $.v(C, "Cursor"))]));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TCableMan", "Get_DoubleBuffered", async function Get_DoubleBuffered(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: false};
  L0["result"] = (await $.v(C, "DoubleBuffered"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TCableMan", "Get_DropTarget", async function Get_DropTarget(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: false};
  L0["result"] = (await $.v(C, "DropTarget"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TCableMan", "Get_Enabled", async function Get_Enabled(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: false};
  L0["result"] = (await $.v(C, "Enabled"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TCableMan", "Get_Font", async function Get_Font(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: null};
  await $.stmt((await $.call(C, "GetOleFont", [(await $.v(C, "Font")), L0["result"]])));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TCableMan", "Get_HelpFile", async function Get_HelpFile(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: ''};
  L0["result"] = (await $.call(C, "WideString", [(await $.v(C, "HelpFile"))]));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TCableMan", "Get_KeyPreview", async function Get_KeyPreview(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: false};
  L0["result"] = (await $.v(C, "KeyPreview"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TCableMan", "Get_PixelsPerInch", async function Get_PixelsPerInch(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: 0};
  L0["result"] = (await $.v(C, "PixelsPerInch"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TCableMan", "Get_PrintScale", async function Get_PrintScale(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: null};
  L0["result"] = (await $.call(C, "Ord", [(await $.v(C, "PrintScale"))]));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TCableMan", "Get_Scaled", async function Get_Scaled(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: false};
  L0["result"] = (await $.v(C, "Scaled"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TCableMan", "Get_Visible", async function Get_Visible(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: false};
  L0["result"] = (await $.v(C, "Visible"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TCableMan", "Get_VisibleDockClientCount", async function Get_VisibleDockClientCount(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: 0};
  L0["result"] = (await $.v(C, "VisibleDockClientCount"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TCableMan", "_Set_Font", async function _Set_Font(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.stmt((await $.call(C, "SetOleFont", [(await $.v(C, "Font")), L0["value"]])));
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["IFontDisp"]});
  U.method("TCableMan", "ActivateEvent", async function ActivateEvent(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.ne((await $.v(C, "FEvents")), null))) {
    await $.mcall((await $.v(C, "FEvents")), "OnActivate", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TCableMan", "ClickEvent", async function ClickEvent(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.ne((await $.v(C, "FEvents")), null))) {
    await $.mcall((await $.v(C, "FEvents")), "OnClick", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TCableMan", "CreateEvent", async function CreateEvent(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.ne((await $.v(C, "FEvents")), null))) {
    await $.mcall((await $.v(C, "FEvents")), "OnCreate", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TCableMan", "DblClickEvent", async function DblClickEvent(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.ne((await $.v(C, "FEvents")), null))) {
    await $.mcall((await $.v(C, "FEvents")), "OnDblClick", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TCableMan", "DeactivateEvent", async function DeactivateEvent(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.ne((await $.v(C, "FEvents")), null))) {
    await $.mcall((await $.v(C, "FEvents")), "OnDeactivate", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TCableMan", "DestroyEvent", async function DestroyEvent(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.ne((await $.v(C, "FEvents")), null))) {
    await $.mcall((await $.v(C, "FEvents")), "OnDestroy", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TCableMan", "KeyPressEvent", async function KeyPressEvent(Self, p0, p1) {
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
  U.method("TCableMan", "PaintEvent", async function PaintEvent(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.ne((await $.v(C, "FEvents")), null))) {
    await $.mcall((await $.v(C, "FEvents")), "OnPaint", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TCableMan", "Set_AutoScroll", async function Set_AutoScroll(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "AutoScroll", L0["value"]);
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["WordBool"]});
  U.method("TCableMan", "Set_AutoSize", async function Set_AutoSize(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "AutoSize", L0["value"]);
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["WordBool"]});
  U.method("TCableMan", "Set_AxBorderStyle", async function Set_AxBorderStyle(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "AxBorderStyle", (await $.call(C, "TActiveFormBorderStyle", [L0["value"]])));
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["TxActiveFormBorderStyle"]});
  U.method("TCableMan", "Set_Caption", async function Set_Caption(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "Caption", (await $.call(C, "TCaption", [L0["value"]])));
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["WideString"]});
  U.method("TCableMan", "Set_Color", async function Set_Color(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "Color", (await $.call(C, "TColor", [L0["value"]])));
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["OLE_COLOR"]});
  U.method("TCableMan", "Set_Cursor", async function Set_Cursor(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "Cursor", (await $.call(C, "TCursor", [L0["value"]])));
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["Smallint"]});
  U.method("TCableMan", "Set_DoubleBuffered", async function Set_DoubleBuffered(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "DoubleBuffered", L0["value"]);
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["WordBool"]});
  U.method("TCableMan", "Set_DropTarget", async function Set_DropTarget(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "DropTarget", L0["value"]);
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["WordBool"]});
  U.method("TCableMan", "Set_Enabled", async function Set_Enabled(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "Enabled", L0["value"]);
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["WordBool"]});
  U.method("TCableMan", "Set_Font", async function Set_Font(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.asRef(p0), result: undefined};
  await $.stmt((await $.call(C, "SetOleFont", [(await $.v(C, "Font")), (await L0["value"].get())])));
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["IFontDisp"]});
  U.method("TCableMan", "Set_HelpFile", async function Set_HelpFile(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "HelpFile", (await $.call(C, "String", [L0["value"]])));
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["WideString"]});
  U.method("TCableMan", "Set_KeyPreview", async function Set_KeyPreview(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "KeyPreview", L0["value"]);
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["WordBool"]});
  U.method("TCableMan", "Set_PixelsPerInch", async function Set_PixelsPerInch(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "PixelsPerInch", L0["value"]);
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["Integer"]});
  U.method("TCableMan", "Set_PrintScale", async function Set_PrintScale(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "PrintScale", (await $.call(C, "TPrintScale", [L0["value"]])));
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["TxPrintScale"]});
  U.method("TCableMan", "Set_Scaled", async function Set_Scaled(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "Scaled", L0["value"]);
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["WordBool"]});
  U.method("TCableMan", "Set_Visible", async function Set_Visible(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "Visible", L0["value"]);
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["WordBool"]});
  U.method("TCableMan", "N4DrawItem", async function N4DrawItem(Self, p0, p1, p2, p3) {
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
  U.method("TCableMan", "OrderByColumn", async function OrderByColumn(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"dataset": $.copyArg(p0), "column": $.copyArg(p1), result: undefined, "post": 0};
  await $.fixArgs(L0, ["dataset", "column"]);
  if ($.truthy(($.eq((await $.v(C, "orderbyAD")), " desc")))) {
    await $.set(C, "orderbyAD", " asc");
  } else {
    await $.set(C, "orderbyAD", " desc");
  }
  L0["post"] = (await $.mcall((await $.mv(L0["dataset"], "SQL")), "Add", [$.add($.add("order by ", (await $.mv(L0["column"], "FieldName"))), (await $.v(C, "orderbyAD")))]));
  await $.mcall(L0["dataset"], "Close", []);
  await $.mcall(L0["dataset"], "Open", []);
  await $.stmt((await $.mcall((await $.mv(L0["dataset"], "SQL")), "Delete", [$.ref(async () => L0["post"], async ($t15) => { L0["post"] = $t15; })])));
  return L0.result;
}, {"params": ["DataSet", "Column"], "kind": "procedure", "ptypes": ["TOracleDataSet", "TColumn"]});
  U.method("TCableMan", "ActiveFormCreate", async function ActiveFormCreate(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.set(C, "DataModCable", (await $.mcall((await $.v(C, "TDataModCable")), "Create", [Self])));
  await $.mset((await $.v(C, "lbR")), "Caption", (await $.call(C, "IntToStr", [(await $.mv((await $.mv((await $.v(C, "DataModCable")), "odsAbonents")), "RecordCount"))])));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TCableMan", "DBGrid1TitleClick", async function DBGrid1TitleClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"column": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["column"]);
  await $.stmt((await $.call(C, "OrderByColumn", [(await $.call(C, "TOracleDataSet", [(await $.mv((await $.mv((await $.mv(L0["column"], "Grid")), "DataSource")), "DataSet"))])), L0["column"]])));
  return L0.result;
}, {"params": ["Column"], "kind": "procedure", "ptypes": ["TColumn"]});
  U.method("TCableMan", "BitBtn1Click", async function BitBtn1Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "res": 0};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.not((await $.call(C, "assigned", [(await $.v(C, "frmAbonAddEdit"))]))))) {
    await $.set(C, "frmAbonAddEdit", (await $.mcall((await $.v(C, "TfrmAbonAddEdit")), "Create", [Self])));
  }
  {
    const $t16 = (await $.v(C, "DataModCable"));
    const $t17 = (await $.wv([$t16], "frmAbonAddEdit", C, false));
    const $t18 = (await $.wv([$t16, $t17], "odsAbonents", C, false));
    await $.mset((await $.wv([$t16, $t17, $t18], "edName", C, false)), "Text", "");
    await $.mset((await $.wv([$t16, $t17, $t18], "edDoc", C, false)), "Text", "");
    await $.mset((await $.wv([$t16, $t17, $t18], "edAddr", C, false)), "Text", "");
    await $.mset((await $.wv([$t16, $t17, $t18], "edPhon", C, false)), "Text", "");
    await $.mset((await $.wv([$t16, $t17, $t18], "edWPhon", C, false)), "Text", "");
    await $.mset((await $.wv([$t16, $t17, $t18], "edMobPhone", C, false)), "Text", "");
    await $.mset((await $.wv([$t16, $t17, $t18], "edReciever", C, false)), "Text", "1");
    await $.mset((await $.wv([$t16, $t17, $t18], "edReg", C, false)), "Date", (await $.wv([$t16, $t17, $t18], "Now", C, false)));
    await $.mset((await $.wv([$t16, $t17, $t18], "edEngTime", C, false)), "Date", (await $.wv([$t16, $t17, $t18], "Now", C, false)));
    await $.mset((await $.wv([$t16, $t17, $t18], "edDone", C, false)), "Date", (await $.wv([$t16, $t17, $t18], "Now", C, false)));
    await $.mset((await $.wv([$t16, $t17, $t18], "edAccRoof", C, false)), "Checked", (await $.wv([$t16, $t17, $t18], "False", C, false)));
    await $.mset((await $.wv([$t16, $t17, $t18], "edSignal", C, false)), "Checked", (await $.wv([$t16, $t17, $t18], "false", C, false)));
    await $.mset((await $.wv([$t16, $t17, $t18], "edVAT", C, false)), "Checked", (await $.wv([$t16, $t17, $t18], "false", C, false)));
    await $.mset((await $.wv([$t16, $t17, $t18], "ChBoxForeigner", C, false)), "Checked", (await $.wv([$t16, $t17, $t18], "false", C, false)));
    await $.mset((await $.wv([$t16, $t17, $t18], "edDocType", C, false)), "KeyValue", 0);
    await $.mset((await $.wv([$t16, $t17, $t18], "edEngineer", C, false)), "KeyValue", 0);
    await $.mset((await $.wv([$t16, $t17, $t18], "edStatus", C, false)), "KeyValue", 0);
    if ($.truthy(($.eq((await $.mv((await $.wv([$t16, $t17, $t18], "frmAbonAddEdit", C, false)), "ShowModal")), 1)))) {
      await $.wset([$t16, $t17, $t18], "Res", (await $.mcall((await $.wv([$t16, $t17, $t18], "CABLE", C, false)), "CallIntegerFunction", ["abonentadd", [(await $.mv((await $.wv([$t16, $t17, $t18], "edName", C, false)), "Text")), (await $.wcall([$t16, $t17, $t18], "Tdatetime", [(await $.mv((await $.wv([$t16, $t17, $t18], "edReg", C, false)), "DateTime"))], C)), (await $.mv((await $.wv([$t16, $t17, $t18], "edDocType", C, false)), "KeyValue")), (await $.mv((await $.wv([$t16, $t17, $t18], "edDoc", C, false)), "Text")), (await $.mv((await $.wv([$t16, $t17, $t18], "edAddr", C, false)), "Text")), (await $.mv((await $.wv([$t16, $t17, $t18], "edPhon", C, false)), "Text")), (await $.mv((await $.wv([$t16, $t17, $t18], "edWPhon", C, false)), "Text")), (await $.wcall([$t16, $t17, $t18], "Integer", [(await $.mv((await $.wv([$t16, $t17, $t18], "edaccRoof", C, false)), "Checked"))], C)), (await $.wcall([$t16, $t17, $t18], "Integer", [(await $.mv((await $.wv([$t16, $t17, $t18], "edSignal", C, false)), "Checked"))], C)), (await $.wcall([$t16, $t17, $t18], "StrToInt", [(await $.mv((await $.wv([$t16, $t17, $t18], "edReciever", C, false)), "Text"))], C)), (await $.wcall([$t16, $t17, $t18], "Tdatetime", [(await $.mv((await $.wv([$t16, $t17, $t18], "edEngTime", C, false)), "Date"))], C)), (await $.mv((await $.wv([$t16, $t17, $t18], "edengineer", C, false)), "KeyValue")), (await $.wcall([$t16, $t17, $t18], "Tdatetime", [(await $.mv((await $.wv([$t16, $t17, $t18], "eddone", C, false)), "date"))], C)), (await $.wcall([$t16, $t17, $t18], "Integer", [(await $.mv((await $.wv([$t16, $t17, $t18], "edVat", C, false)), "checked"))], C)), (await $.mv((await $.wv([$t16, $t17, $t18], "edStatus", C, false)), "keyvalue")), (await $.mv((await $.wv([$t16, $t17, $t18], "edMobPhone", C, false)), "Text")), (await $.wcall([$t16, $t17, $t18], "Integer", [(await $.mv((await $.wv([$t16, $t17, $t18], "ChBoxForeigner", C, false)), "Checked"))], C))]])), { get: async () => L0["res"], set: async (v) => { L0["res"] = v; }, local: true });
      await $.mcall((await $.wv([$t16, $t17, $t18], "odsAbonents", C, false)), "Close", []);
      await $.mcall((await $.wv([$t16, $t17, $t18], "odsAbonents", C, false)), "Open", []);
      await $.mset((await $.wv([$t16, $t17, $t18], "lbR", C, false)), "Caption", (await $.wcall([$t16, $t17, $t18], "IntToStr", [(await $.mv((await $.wv([$t16, $t17, $t18], "odsAbonents", C, false)), "RecordCount"))], C)));
    }
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TCableMan", "BitBtn2Click", async function BitBtn2Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy(($.eq((await $.call(C, "MessageDlg", ["Yazı silinəck. Əminsiniz?", (await $.v(C, "mtWarning")), [(await $.v(C, "mbYes")), (await $.v(C, "mbNo"))], 0])), (await $.v(C, "idyes")))))) {
    {
      const $t19 = (await $.v(C, "DataModCable"));
      const $t20 = (await $.wv([$t19], "frmAbonAddEdit", C, false));
      await $.stmt((await $.mcall((await $.wv([$t19, $t20], "CABLE", C, false)), "CallProcedure", ["abonentdel", [(await $.mv((await $.idx((await $.mv((await $.wv([$t19, $t20], "odsAbonents", C, false)), "fields")), [0])), "AsVariant"))]])));
      await $.mcall((await $.wv([$t19, $t20], "odsAbonents", C, false)), "Close", []);
      await $.mcall((await $.wv([$t19, $t20], "odsAbonents", C, false)), "Open", []);
      await $.mset((await $.wv([$t19, $t20], "lbR", C, false)), "Caption", (await $.wcall([$t19, $t20], "IntToStr", [(await $.mv((await $.wv([$t19, $t20], "odsAbonents", C, false)), "RecordCount"))], C)));
    }
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TCableMan", "BitBtn3Click", async function BitBtn3Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "cid": 0};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.not((await $.call(C, "assigned", [(await $.v(C, "frmAbonAddEdit"))]))))) {
    await $.set(C, "frmAbonAddEdit", (await $.mcall((await $.v(C, "TfrmAbonAddEdit")), "Create", [Self])));
  }
  {
    const $t21 = (await $.v(C, "DataModCable"));
    const $t22 = (await $.wv([$t21], "frmAbonAddEdit", C, false));
    const $t23 = (await $.wv([$t21, $t22], "odsAbonents", C, false));
    await $.wset([$t21, $t22, $t23], "CID", (await $.mv((await $.idx((await $.wv([$t21, $t22, $t23], "Fields", C, false)), [0])), "AsInteger")), { get: async () => L0["cid"], set: async (v) => { L0["cid"] = v; }, local: true });
    await $.mset((await $.wv([$t21, $t22, $t23], "edName", C, false)), "Text", (await $.mv((await $.wcall([$t21, $t22, $t23], "FieldByName", ["NAME"], C)), "AsString")));
    await $.mset((await $.wv([$t21, $t22, $t23], "edDoc", C, false)), "Text", (await $.mv((await $.wcall([$t21, $t22, $t23], "FieldByName", ["DOC_NUM"], C)), "AsString")));
    await $.mset((await $.wv([$t21, $t22, $t23], "edAddr", C, false)), "Text", (await $.mv((await $.wcall([$t21, $t22, $t23], "FieldByName", ["ADDRESS"], C)), "AsString")));
    await $.mset((await $.wv([$t21, $t22, $t23], "edPhon", C, false)), "Text", (await $.mv((await $.wcall([$t21, $t22, $t23], "FieldByName", ["PHONE"], C)), "AsString")));
    await $.mset((await $.wv([$t21, $t22, $t23], "edMobPhone", C, false)), "Text", (await $.mv((await $.wcall([$t21, $t22, $t23], "FieldByName", ["PHONE_MOB"], C)), "AsString")));
    await $.mset((await $.wv([$t21, $t22, $t23], "edWPhon", C, false)), "Text", (await $.mv((await $.wcall([$t21, $t22, $t23], "FieldByName", ["PHONE_WK"], C)), "AsString")));
    await $.mset((await $.wv([$t21, $t22, $t23], "edReciever", C, false)), "Text", (await $.mv((await $.wcall([$t21, $t22, $t23], "FieldByName", ["RECEIVER_NUM"], C)), "AsString")));
    if ($.truthy(($.eq((await $.mv((await $.wcall([$t21, $t22, $t23], "FieldByName", ["REG_TIME"], C)), "AsString")), "")))) {
      await $.mset((await $.wv([$t21, $t22, $t23], "edReg", C, false)), "Date", (await $.wv([$t21, $t22, $t23], "Now", C, false)));
    } else {
      await $.mset((await $.wv([$t21, $t22, $t23], "edReg", C, false)), "Date", (await $.mv((await $.wcall([$t21, $t22, $t23], "FieldByName", ["REG_TIME"], C)), "AsDateTime")));
    }
    if ($.truthy(($.eq((await $.mv((await $.wcall([$t21, $t22, $t23], "FieldByName", ["ENG_TIME"], C)), "AsString")), "")))) {
      await $.mset((await $.wv([$t21, $t22, $t23], "edEngTime", C, false)), "Date", (await $.wv([$t21, $t22, $t23], "Now", C, false)));
    } else {
      await $.mset((await $.wv([$t21, $t22, $t23], "edEngTime", C, false)), "Date", (await $.mv((await $.wcall([$t21, $t22, $t23], "FieldByName", ["ENG_TIME"], C)), "AsDateTime")));
    }
    if ($.truthy(($.eq((await $.mv((await $.wcall([$t21, $t22, $t23], "FieldByName", ["DONE_TIME"], C)), "AsString")), "")))) {
      await $.mset((await $.wv([$t21, $t22, $t23], "edDone", C, false)), "Date", (await $.wv([$t21, $t22, $t23], "Now", C, false)));
    } else {
      await $.mset((await $.wv([$t21, $t22, $t23], "edDone", C, false)), "Date", (await $.mv((await $.wcall([$t21, $t22, $t23], "FieldByName", ["DONE_TIME"], C)), "AsDateTime")));
    }
    await $.mset((await $.wv([$t21, $t22, $t23], "edAccRoof", C, false)), "Checked", (await $.mv((await $.wcall([$t21, $t22, $t23], "FieldByName", ["ACCESS_ROOF"], C)), "AsBoolean")));
    await $.mset((await $.wv([$t21, $t22, $t23], "edSignal", C, false)), "Checked", (await $.mv((await $.wcall([$t21, $t22, $t23], "FieldByName", ["SIGNALLING"], C)), "AsBoolean")));
    await $.mset((await $.wv([$t21, $t22, $t23], "edVAT", C, false)), "Checked", (await $.mv((await $.wcall([$t21, $t22, $t23], "FieldByName", ["VAT"], C)), "AsBoolean")));
    await $.mset((await $.wv([$t21, $t22, $t23], "ChBoxForeigner", C, false)), "Checked", (await $.mv((await $.wcall([$t21, $t22, $t23], "FieldByName", ["FOREIGNER"], C)), "AsBoolean")));
    await $.mset((await $.wv([$t21, $t22, $t23], "edDocType", C, false)), "KeyValue", (await $.mv((await $.wcall([$t21, $t22, $t23], "FieldByName", ["DOC_ID"], C)), "AsVariant")));
    await $.mset((await $.wv([$t21, $t22, $t23], "edEngineer", C, false)), "KeyValue", (await $.mv((await $.wcall([$t21, $t22, $t23], "FieldByName", ["ENG_ID"], C)), "AsVariant")));
    await $.mset((await $.wv([$t21, $t22, $t23], "edStatus", C, false)), "KeyValue", (await $.mv((await $.wcall([$t21, $t22, $t23], "FieldByName", ["STAT_ID"], C)), "AsVariant")));
    if ($.truthy(($.eq((await $.mv((await $.wv([$t21, $t22, $t23], "frmAbonAddEdit", C, false)), "ShowModal")), 1)))) {
      await $.stmt((await $.mcall((await $.wv([$t21, $t22, $t23], "CABLE", C, false)), "CallProcedure", ["abonentupd", [(await $.mv((await $.idx((await $.wv([$t21, $t22, $t23], "Fields", C, false)), [0])), "asVariant")), (await $.mv((await $.wv([$t21, $t22, $t23], "edName", C, false)), "Text")), (await $.wcall([$t21, $t22, $t23], "Tdatetime", [(await $.mv((await $.wv([$t21, $t22, $t23], "edReg", C, false)), "DateTime"))], C)), (await $.mv((await $.wv([$t21, $t22, $t23], "edDocType", C, false)), "KeyValue")), (await $.mv((await $.wv([$t21, $t22, $t23], "edDoc", C, false)), "Text")), (await $.mv((await $.wv([$t21, $t22, $t23], "edAddr", C, false)), "Text")), (await $.mv((await $.wv([$t21, $t22, $t23], "edPhon", C, false)), "Text")), (await $.mv((await $.wv([$t21, $t22, $t23], "edWPhon", C, false)), "Text")), (await $.wcall([$t21, $t22, $t23], "Integer", [(await $.mv((await $.wv([$t21, $t22, $t23], "edaccRoof", C, false)), "Checked"))], C)), (await $.wcall([$t21, $t22, $t23], "Integer", [(await $.mv((await $.wv([$t21, $t22, $t23], "edSignal", C, false)), "Checked"))], C)), (await $.wcall([$t21, $t22, $t23], "StrToInt", [(await $.mv((await $.wv([$t21, $t22, $t23], "edReciever", C, false)), "Text"))], C)), (await $.wcall([$t21, $t22, $t23], "Tdatetime", [(await $.mv((await $.wv([$t21, $t22, $t23], "edEngTime", C, false)), "Date"))], C)), (await $.mv((await $.wv([$t21, $t22, $t23], "edengineer", C, false)), "KeyValue")), (await $.wcall([$t21, $t22, $t23], "Tdatetime", [(await $.mv((await $.wv([$t21, $t22, $t23], "eddone", C, false)), "date"))], C)), (await $.wcall([$t21, $t22, $t23], "Integer", [(await $.mv((await $.wv([$t21, $t22, $t23], "edVat", C, false)), "checked"))], C)), (await $.mv((await $.wv([$t21, $t22, $t23], "edStatus", C, false)), "keyvalue")), (await $.mv((await $.wv([$t21, $t22, $t23], "edMobPhone", C, false)), "Text")), (await $.wcall([$t21, $t22, $t23], "Integer", [(await $.mv((await $.wv([$t21, $t22, $t23], "ChBoxForeigner", C, false)), "Checked"))], C))]])));
      await $.mcall((await $.wv([$t21, $t22, $t23], "odsAbonents", C, false)), "Close", []);
      await $.mcall((await $.wv([$t21, $t22, $t23], "odsAbonents", C, false)), "Open", []);
      await $.mset((await $.wv([$t21, $t22, $t23], "lbR", C, false)), "Caption", (await $.wcall([$t21, $t22, $t23], "IntToStr", [(await $.mv((await $.wv([$t21, $t22, $t23], "odsAbonents", C, false)), "RecordCount"))], C)));
      await $.stmt((await $.wcall([$t21, $t22, $t23], "Locate", ["ID", (await $.wv([$t21, $t22, $t23], "CID", { get: async () => L0["cid"], set: async (v) => { L0["cid"] = v; }, local: true }, false)), []], C)));
    }
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TCableMan", "DBGrid3CellClick", async function DBGrid3CellClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"column": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["column"]);
  await $.mcall((await $.mv((await $.v(C, "DataModCable")), "odsServs")), "Open", []);
  return L0.result;
}, {"params": ["Column"], "kind": "procedure", "ptypes": ["TColumn"]});
  U.method("TCableMan", "actAbNewConExecute", async function actAbNewConExecute(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "res": 0};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.not((await $.call(C, "assigned", [(await $.v(C, "frmContractAdd"))]))))) {
    await $.set(C, "frmContractAdd", (await $.mcall((await $.v(C, "TfrmContractAdd")), "Create", [Self])));
  }
  {
    const $t24 = (await $.v(C, "DataModCable"));
    const $t25 = (await $.wv([$t24], "frmContractAdd", C, false));
    const $t26 = (await $.wv([$t24, $t25], "odsContacts", C, false));
    await $.mset((await $.wv([$t24, $t25, $t26], "edcontract_num", C, false)), "Text", "");
    await $.mset((await $.wv([$t24, $t25, $t26], "edcard_num", C, false)), "Text", "");
    await $.mset((await $.wv([$t24, $t25, $t26], "edserie", C, false)), "Text", "");
    await $.mset((await $.wv([$t24, $t25, $t26], "edworks_num", C, false)), "Text", "");
    await $.mset((await $.wv([$t24, $t25, $t26], "edreceiver_num", C, false)), "Text", "1");
    await $.mset((await $.wv([$t24, $t25, $t26], "edcable_length", C, false)), "Text", "");
    await $.mset((await $.wv([$t24, $t25, $t26], "edamount", C, false)), "Text", "");
    await $.mset((await $.wv([$t24, $t25, $t26], "eddiscount", C, false)), "Text", "0");
    await $.mset((await $.wv([$t24, $t25, $t26], "edDiscDesc", C, false)), "Text", "");
    await $.mset((await $.wv([$t24, $t25, $t26], "edinst_date", C, false)), "Date", (await $.wv([$t24, $t25, $t26], "Now", C, false)));
    await $.mset((await $.wv([$t24, $t25, $t26], "edinst_date", C, false)), "Enabled", (await $.wv([$t24, $t25, $t26], "false", C, false)));
    await $.mset((await $.wv([$t24, $t25, $t26], "edexp_date", C, false)), "Date", (await $.wv([$t24, $t25, $t26], "Now", C, false)));
    await $.mset((await $.wv([$t24, $t25, $t26], "edinst_place", C, false)), "itemindex", 0);
    await $.mset((await $.wv([$t24, $t25, $t26], "edcurr_code", C, false)), "KeyValue", 0);
    await $.mset((await $.wv([$t24, $t25, $t26], "edeng_id", C, false)), "KeyValue", 0);
    await $.mset((await $.wv([$t24, $t25, $t26], "edpack_num", C, false)), "Enabled", (await $.wv([$t24, $t25, $t26], "true", C, false)));
    await $.mset((await $.wv([$t24, $t25, $t26], "edpack_num", C, false)), "KeyValue", 0);
    await $.mset((await $.wv([$t24, $t25, $t26], "edSRV_num", C, false)), "Enabled", (await $.wv([$t24, $t25, $t26], "false", C, false)));
    await $.mset((await $.wv([$t24, $t25, $t26], "edSRV_num", C, false)), "KeyValue", 0);
    await $.mset((await $.wv([$t24, $t25, $t26], "edAcc_ID", C, false)), "KeyValue", 0);
    await $.mset((await $.wv([$t24, $t25, $t26], "edCalcAg", C, false)), "Enabled", (await $.wv([$t24, $t25, $t26], "true", C, false)));
    await $.mset((await $.wv([$t24, $t25, $t26], "edCalcAg", C, false)), "Checked", (await $.wv([$t24, $t25, $t26], "false", C, false)));
    if ($.truthy(($.eq((await $.mv((await $.wv([$t24, $t25, $t26], "frmContractAdd", C, false)), "ShowModal")), 1)))) {
      await $.wset([$t24, $t25, $t26], "Res", (await $.mcall((await $.wv([$t24, $t25, $t26], "CABLE", C, false)), "CallIntegerFunction", ["contractadd", [(await $.mv((await $.wv([$t24, $t25, $t26], "edcontract_num", C, false)), "Text")), (await $.mv((await $.wv([$t24, $t25, $t26], "edcard_num", C, false)), "Text")), (await $.mv((await $.idx((await $.mv((await $.wv([$t24, $t25, $t26], "odsAbonents", C, false)), "Fields")), [0])), "AsVariant")), (await $.wcall([$t24, $t25, $t26], "Tdatetime", [(await $.mv((await $.wv([$t24, $t25, $t26], "edinst_date", C, false)), "DateTime"))], C)), (await $.mv((await $.wv([$t24, $t25, $t26], "edinst_place", C, false)), "itemindex")), (await $.mv((await $.wv([$t24, $t25, $t26], "edserie", C, false)), "Text")), (await $.mv((await $.wv([$t24, $t25, $t26], "edworks_num", C, false)), "Text")), (await $.mv((await $.wv([$t24, $t25, $t26], "edreceiver_num", C, false)), "Text")), (await $.mv((await $.wv([$t24, $t25, $t26], "edcable_length", C, false)), "Text")), (await $.mv((await $.wv([$t24, $t25, $t26], "edamount", C, false)), "value")), (await $.mv((await $.wv([$t24, $t25, $t26], "edcurr_code", C, false)), "KeyValue")), (await $.mv((await $.wv([$t24, $t25, $t26], "eddiscount", C, false)), "Text")), (await $.mv((await $.wv([$t24, $t25, $t26], "edeng_id", C, false)), "KeyValue")), (await $.mv((await $.wv([$t24, $t25, $t26], "edpack_num", C, false)), "KeyValue")), (await $.mv((await $.wv([$t24, $t25, $t26], "edAcc_ID", C, false)), "KeyValue")), (await $.wcall([$t24, $t25, $t26], "Integer", [(await $.mv((await $.wv([$t24, $t25, $t26], "edCalcAg", C, false)), "Checked"))], C)), (await $.mv((await $.wv([$t24, $t25, $t26], "edDiscDesc", C, false)), "Text")), (await $.wcall([$t24, $t25, $t26], "Tdatetime", [(await $.mv((await $.wv([$t24, $t25, $t26], "edexp_date", C, false)), "DateTime"))], C))]])), { get: async () => L0["res"], set: async (v) => { L0["res"] = v; }, local: true });
      await $.mcall((await $.wv([$t24, $t25, $t26], "odsContacts", C, false)), "Close", []);
      await $.mcall((await $.wv([$t24, $t25, $t26], "odsContacts", C, false)), "Open", []);
    }
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TCableMan", "actEditContactExecute", async function actEditContactExecute(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "cid": 0};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.not((await $.call(C, "assigned", [(await $.v(C, "frmContractAdd"))]))))) {
    await $.set(C, "frmContractAdd", (await $.mcall((await $.v(C, "TfrmContractAdd")), "Create", [Self])));
  }
  {
    const $t27 = (await $.v(C, "DataModCable"));
    const $t28 = (await $.wv([$t27], "frmContractAdd", C, false));
    const $t29 = (await $.wv([$t27, $t28], "odsContacts", C, false));
    await $.wset([$t27, $t28, $t29], "CID", (await $.mv((await $.idx((await $.wv([$t27, $t28, $t29], "Fields", C, false)), [0])), "AsInteger")), { get: async () => L0["cid"], set: async (v) => { L0["cid"] = v; }, local: true });
    await $.mset((await $.wv([$t27, $t28, $t29], "edcontract_num", C, false)), "Text", (await $.mv((await $.mcall((await $.wv([$t27, $t28, $t29], "odsContacts", C, false)), "FieldByName", ["CONTRACT_NUM"])), "AsString")));
    await $.mset((await $.wv([$t27, $t28, $t29], "edcard_num", C, false)), "Text", (await $.mv((await $.mcall((await $.wv([$t27, $t28, $t29], "odsContacts", C, false)), "FieldByName", ["CARD_NUM"])), "AsString")));
    await $.mset((await $.wv([$t27, $t28, $t29], "edserie", C, false)), "Text", (await $.mv((await $.mcall((await $.wv([$t27, $t28, $t29], "odsContacts", C, false)), "FieldByName", ["SERIE"])), "AsString")));
    await $.mset((await $.wv([$t27, $t28, $t29], "edworks_num", C, false)), "Text", (await $.mv((await $.mcall((await $.wv([$t27, $t28, $t29], "odsContacts", C, false)), "FieldByName", ["WORKS_NUM"])), "AsString")));
    await $.mset((await $.wv([$t27, $t28, $t29], "edreceiver_num", C, false)), "Text", (await $.mv((await $.mcall((await $.wv([$t27, $t28, $t29], "odsContacts", C, false)), "FieldByName", ["RECEIVER_NUM"])), "AsString")));
    await $.mset((await $.wv([$t27, $t28, $t29], "edcable_length", C, false)), "Text", (await $.mv((await $.mcall((await $.wv([$t27, $t28, $t29], "odsContacts", C, false)), "FieldByName", ["CABLE_LENGTH"])), "AsString")));
    await $.mset((await $.wv([$t27, $t28, $t29], "edamount", C, false)), "Text", (await $.mv((await $.mcall((await $.wv([$t27, $t28, $t29], "odsContacts", C, false)), "FieldByName", ["AMOUNT"])), "AsString")));
    await $.mset((await $.wv([$t27, $t28, $t29], "eddiscount", C, false)), "Text", (await $.mv((await $.mcall((await $.wv([$t27, $t28, $t29], "odsContacts", C, false)), "FieldByName", ["DISCOUNT"])), "AsString")));
    await $.mset((await $.wv([$t27, $t28, $t29], "edDiscDesc", C, false)), "Text", (await $.mv((await $.mcall((await $.wv([$t27, $t28, $t29], "odsContacts", C, false)), "FieldByName", ["DISCOUNT_DESC"])), "AsString")));
    await $.mset((await $.wv([$t27, $t28, $t29], "edinst_date", C, false)), "Enabled", (await $.wv([$t27, $t28, $t29], "true", C, false)));
    await $.mset((await $.wv([$t27, $t28, $t29], "edinst_date", C, false)), "Date", (await $.mv((await $.mcall((await $.wv([$t27, $t28, $t29], "odsContacts", C, false)), "FieldByName", ["INST_DATE"])), "AsDateTime")));
    await $.mset((await $.wv([$t27, $t28, $t29], "edexp_date", C, false)), "Date", (await $.mv((await $.mcall((await $.wv([$t27, $t28, $t29], "odsContacts", C, false)), "FieldByName", ["EXP_DATE"])), "AsDateTime")));
    await $.mset((await $.wv([$t27, $t28, $t29], "edinst_place", C, false)), "itemindex", (await $.mv((await $.mcall((await $.wv([$t27, $t28, $t29], "odsContacts", C, false)), "FieldByName", ["INST_PLACE"])), "AsInteger")));
    await $.mset((await $.wv([$t27, $t28, $t29], "edcurr_code", C, false)), "KeyValue", (await $.mv((await $.mcall((await $.wv([$t27, $t28, $t29], "odsContacts", C, false)), "FieldByName", ["CURR_CODE"])), "AsVariant")));
    await $.mset((await $.wv([$t27, $t28, $t29], "edeng_id", C, false)), "KeyValue", (await $.mv((await $.mcall((await $.wv([$t27, $t28, $t29], "odsContacts", C, false)), "FieldByName", ["ENG_ID"])), "AsVariant")));
    await $.mset((await $.wv([$t27, $t28, $t29], "edpack_num", C, false)), "Enabled", (await $.wv([$t27, $t28, $t29], "true", C, false)));
    await $.mset((await $.wv([$t27, $t28, $t29], "edpack_num", C, false)), "KeyValue", (await $.mv((await $.mcall((await $.wv([$t27, $t28, $t29], "odsContacts", C, false)), "FieldByName", ["PACK_NUM"])), "AsVariant")));
    await $.mset((await $.wv([$t27, $t28, $t29], "edSRV_num", C, false)), "Enabled", (await $.wv([$t27, $t28, $t29], "true", C, false)));
    await $.mset((await $.wv([$t27, $t28, $t29], "edAcc_ID", C, false)), "KeyValue", (await $.mv((await $.mcall((await $.wv([$t27, $t28, $t29], "odsContacts", C, false)), "FieldByName", ["ACC_ID"])), "AsVariant")));
    await $.mset((await $.wv([$t27, $t28, $t29], "edCalcAg", C, false)), "Enabled", (await $.wv([$t27, $t28, $t29], "true", C, false)));
    await $.mset((await $.wv([$t27, $t28, $t29], "edCalcAg", C, false)), "Checked", (await $.wcall([$t27, $t28, $t29], "Boolean", [(await $.mv((await $.mcall((await $.wv([$t27, $t28, $t29], "odsContacts", C, false)), "FieldByName", ["CALCAG"])), "AsInteger"))], C)));
    if ($.truthy(($.eq((await $.mv((await $.wv([$t27, $t28, $t29], "frmContractAdd", C, false)), "ShowModal")), 1)))) {
      await $.stmt((await $.mcall((await $.wv([$t27, $t28, $t29], "CABLE", C, false)), "CallProcedure", ["contractupd", [(await $.mv((await $.idx((await $.mv((await $.wv([$t27, $t28, $t29], "odsContacts", C, false)), "Fields")), [0])), "AsVariant")), (await $.mv((await $.wv([$t27, $t28, $t29], "edcontract_num", C, false)), "Text")), (await $.mv((await $.wv([$t27, $t28, $t29], "edcard_num", C, false)), "Text")), (await $.mv((await $.idx((await $.mv((await $.wv([$t27, $t28, $t29], "odsAbonents", C, false)), "Fields")), [0])), "AsVariant")), (await $.wcall([$t27, $t28, $t29], "Tdatetime", [(await $.mv((await $.wv([$t27, $t28, $t29], "edinst_date", C, false)), "DateTime"))], C)), (await $.mv((await $.wv([$t27, $t28, $t29], "edinst_place", C, false)), "itemindex")), (await $.mv((await $.wv([$t27, $t28, $t29], "edserie", C, false)), "Text")), (await $.mv((await $.wv([$t27, $t28, $t29], "edworks_num", C, false)), "Text")), (await $.mv((await $.wv([$t27, $t28, $t29], "edreceiver_num", C, false)), "Text")), (await $.mv((await $.wv([$t27, $t28, $t29], "edcable_length", C, false)), "Text")), (await $.mv((await $.wv([$t27, $t28, $t29], "edamount", C, false)), "value")), (await $.mv((await $.wv([$t27, $t28, $t29], "edcurr_code", C, false)), "KeyValue")), (await $.mv((await $.wv([$t27, $t28, $t29], "eddiscount", C, false)), "Text")), (await $.mv((await $.wv([$t27, $t28, $t29], "edeng_id", C, false)), "KeyValue")), (await $.mv((await $.wv([$t27, $t28, $t29], "edpack_num", C, false)), "KeyValue")), (await $.mv((await $.wv([$t27, $t28, $t29], "edAcc_ID", C, false)), "KeyValue")), (await $.wcall([$t27, $t28, $t29], "Integer", [(await $.mv((await $.wv([$t27, $t28, $t29], "edCalcAg", C, false)), "Checked"))], C)), (await $.mv((await $.wv([$t27, $t28, $t29], "edDiscDesc", C, false)), "Text")), (await $.wcall([$t27, $t28, $t29], "Tdatetime", [(await $.mv((await $.wv([$t27, $t28, $t29], "edexp_date", C, false)), "DateTime"))], C))]])));
      await $.mcall((await $.wv([$t27, $t28, $t29], "odsContacts", C, false)), "Close", []);
      await $.mcall((await $.wv([$t27, $t28, $t29], "odsContacts", C, false)), "Open", []);
      await $.stmt((await $.wcall([$t27, $t28, $t29], "Locate", ["ID", (await $.wv([$t27, $t28, $t29], "CID", { get: async () => L0["cid"], set: async (v) => { L0["cid"] = v; }, local: true }, false)), []], C)));
    }
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TCableMan", "actContDelExecute", async function actContDelExecute(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy(($.eq((await $.call(C, "MessageDlg", ["Yazı silinəck. Əminsiniz?", (await $.v(C, "mtWarning")), [(await $.v(C, "mbYes")), (await $.v(C, "mbNo"))], 0])), (await $.v(C, "idyes")))))) {
    {
      const $t30 = (await $.v(C, "DataModCable"));
      await $.stmt((await $.mcall((await $.wv([$t30], "CABLE", C, false)), "CallProcedure", ["contractdel", [(await $.mv((await $.idx((await $.mv((await $.wv([$t30], "odsContacts", C, false)), "fields")), [0])), "AsVariant"))]])));
      await $.mcall((await $.wv([$t30], "odsContacts", C, false)), "Close", []);
      await $.mcall((await $.wv([$t30], "odsContacts", C, false)), "Open", []);
    }
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TCableMan", "actSAddExecute", async function actSAddExecute(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "res": 0, "cid": 0, "accountid": 0};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.not((await $.call(C, "assigned", [(await $.v(C, "frmServAddEdit"))]))))) {
    await $.set(C, "frmServAddEdit", (await $.mcall((await $.v(C, "TfrmServAddEdit")), "Create", [Self])));
  }
  {
    const $t31 = (await $.v(C, "DataModCable"));
    const $t32 = (await $.wv([$t31], "frmServAddEdit", C, false));
    const $t33 = (await $.wv([$t31, $t32], "odsServs", C, false));
    await $.mset((await $.wv([$t31, $t32, $t33], "CurrencyEdit1", C, false)), "Value", 0);
    await $.wset([$t31, $t32, $t33], "CID", (await $.mv((await $.idx((await $.mv((await $.wv([$t31, $t32, $t33], "odsContacts", C, false)), "Fields")), [0])), "AsInteger")), { get: async () => L0["cid"], set: async (v) => { L0["cid"] = v; }, local: true });
    await $.mset((await $.wv([$t31, $t32, $t33], "DBLookupComboBox1", C, false)), "KeyValue", 0);
    await $.mset((await $.wv([$t31, $t32, $t33], "DBLookupComboBox2", C, false)), "KeyValue", 0);
    await $.mset((await $.wv([$t31, $t32, $t33], "tpTime", C, false)), "DateTime", (await $.wv([$t31, $t32, $t33], "Sb_GetSystemDate", C, false)));
    await $.mset((await $.wv([$t31, $t32, $t33], "cbMeth", C, false)), "ItemIndex", 0);
    await $.mset((await $.wv([$t31, $t32, $t33], "ChBoxFrmAnthrAcc", C, false)), "Enabled", (await $.wv([$t31, $t32, $t33], "true", C, false)));
    await $.mset((await $.wv([$t31, $t32, $t33], "ChBoxFrmAnthrAcc", C, false)), "Checked", (await $.wv([$t31, $t32, $t33], "false", C, false)));
    await $.mset((await $.wv([$t31, $t32, $t33], "CBoxFrmAnthrAcc", C, false)), "KeyValue", (await $.mv((await $.mcall((await $.wv([$t31, $t32, $t33], "odsContacts", C, false)), "FieldByName", ["Contract_Num"])), "AsVariant")));
    await $.mset((await $.wv([$t31, $t32, $t33], "CBoxFrmAnthrAcc", C, false)), "Enabled", (await $.wv([$t31, $t32, $t33], "false", C, false)));
    if ($.truthy(($.eq((await $.mv((await $.wv([$t31, $t32, $t33], "frmServAddEdit", C, false)), "ShowModal")), 1)))) {
      if ($.truthy((await $.mv((await $.wv([$t31, $t32, $t33], "ChBoxFrmAnthrAcc", C, false)), "Checked")))) {
        await $.wset([$t31, $t32, $t33], "AccountID", (await $.mv((await $.wv([$t31, $t32, $t33], "CBoxFrmAnthrAcc", C, false)), "KeyValue")), { get: async () => L0["accountid"], set: async (v) => { L0["accountid"] = v; }, local: true });
      } else {
        await $.wset([$t31, $t32, $t33], "AccountID", 0, { get: async () => L0["accountid"], set: async (v) => { L0["accountid"] = v; }, local: true });
      }
      await $.wset([$t31, $t32, $t33], "Res", (await $.mcall((await $.wv([$t31, $t32, $t33], "CABLE", C, false)), "CallIntegerFunction", ["abnservadd", [(await $.mv((await $.idx((await $.mv((await $.wv([$t31, $t32, $t33], "odsContacts", C, false)), "Fields")), [0])), "AsVariant")), (await $.wv([$t31, $t32, $t33], "null", C, false)), (await $.mv((await $.wv([$t31, $t32, $t33], "DBLookupComboBox2", C, false)), "KeyValue")), (await $.mv((await $.wv([$t31, $t32, $t33], "CurrencyEdit1", C, false)), "Value")), (await $.mv((await $.wv([$t31, $t32, $t33], "DBLookupComboBox1", C, false)), "KeyValue")), 0, (await $.mv((await $.wv([$t31, $t32, $t33], "tpTime", C, false)), "DateTime")), (await $.mv((await $.wv([$t31, $t32, $t33], "cbmeth", C, false)), "itemindex")), (await $.wv([$t31, $t32, $t33], "AccountID", { get: async () => L0["accountid"], set: async (v) => { L0["accountid"] = v; }, local: true }, false))]])), { get: async () => L0["res"], set: async (v) => { L0["res"] = v; }, local: true });
      await $.mcall((await $.wv([$t31, $t32, $t33], "odsServs", C, false)), "Close", []);
      await $.mcall((await $.wv([$t31, $t32, $t33], "odsServs", C, false)), "Open", []);
      await $.mcall((await $.wv([$t31, $t32, $t33], "odsContacts", C, false)), "Close", []);
      await $.mcall((await $.wv([$t31, $t32, $t33], "odsContacts", C, false)), "Open", []);
      await $.stmt((await $.mcall((await $.wv([$t31, $t32, $t33], "odsContacts", C, false)), "Locate", ["ID", (await $.wv([$t31, $t32, $t33], "CID", { get: async () => L0["cid"], set: async (v) => { L0["cid"] = v; }, local: true }, false)), []])));
    }
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TCableMan", "BitBtn6Click", async function BitBtn6Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "cid": 0};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.not((await $.call(C, "assigned", [(await $.v(C, "frmServAddEdit"))]))))) {
    await $.set(C, "frmServAddEdit", (await $.mcall((await $.v(C, "TfrmServAddEdit")), "Create", [Self])));
  }
  {
    const $t34 = (await $.v(C, "DataModCable"));
    const $t35 = (await $.wv([$t34], "frmServAddEdit", C, false));
    const $t36 = (await $.wv([$t34, $t35], "odsServs", C, false));
    await $.mset((await $.wv([$t34, $t35, $t36], "CurrencyEdit1", C, false)), "Value", (await $.mv((await $.mcall((await $.wv([$t34, $t35, $t36], "odsServs", C, false)), "FieldByName", ["AMOUNT"])), "AsCurrency")));
    await $.wset([$t34, $t35, $t36], "CID", (await $.mv((await $.idx((await $.mv((await $.wv([$t34, $t35, $t36], "odsContacts", C, false)), "Fields")), [0])), "AsInteger")), { get: async () => L0["cid"], set: async (v) => { L0["cid"] = v; }, local: true });
    await $.mset((await $.wv([$t34, $t35, $t36], "DBLookupComboBox1", C, false)), "KeyValue", (await $.mv((await $.mcall((await $.wv([$t34, $t35, $t36], "odsServs", C, false)), "FieldByName", ["CURR_CODE"])), "AsVariant")));
    await $.mset((await $.wv([$t34, $t35, $t36], "DBLookupComboBox2", C, false)), "KeyValue", (await $.mv((await $.mcall((await $.wv([$t34, $t35, $t36], "odsServs", C, false)), "FieldByName", ["SRV_ID"])), "AsVariant")));
    await $.mset((await $.wv([$t34, $t35, $t36], "tpTime", C, false)), "DateTime", (await $.mv((await $.mcall((await $.wv([$t34, $t35, $t36], "odsServs", C, false)), "FieldByName", ["DONE_TIME"])), "AsVariant")));
    await $.mset((await $.wv([$t34, $t35, $t36], "cbmeth", C, false)), "itemindex", (await $.mv((await $.mcall((await $.wv([$t34, $t35, $t36], "odsServs", C, false)), "FieldByName", ["PAYMETHOD"])), "AsInteger")));
    await $.mset((await $.wv([$t34, $t35, $t36], "CBoxFrmAnthrAcc", C, false)), "KeyValue", (await $.mv((await $.mcall((await $.wv([$t34, $t35, $t36], "odsServs", C, false)), "FieldByName", ["FRM_CONTRCT"])), "AsVariant")));
    await $.mset((await $.wv([$t34, $t35, $t36], "ChBoxFrmAnthrAcc", C, false)), "Enabled", (await $.wv([$t34, $t35, $t36], "false", C, false)));
    await $.mset((await $.wv([$t34, $t35, $t36], "CBoxFrmAnthrAcc", C, false)), "Enabled", (await $.wv([$t34, $t35, $t36], "false", C, false)));
    if ($.truthy(($.eq((await $.mv((await $.wv([$t34, $t35, $t36], "frmServAddEdit", C, false)), "ShowModal")), 1)))) {
      await $.stmt((await $.mcall((await $.wv([$t34, $t35, $t36], "CABLE", C, false)), "CallProcedure", ["abnservupd", [(await $.mv((await $.idx((await $.mv((await $.wv([$t34, $t35, $t36], "odsServs", C, false)), "Fields")), [0])), "AsVariant")), (await $.mv((await $.idx((await $.mv((await $.wv([$t34, $t35, $t36], "odsContacts", C, false)), "Fields")), [0])), "AsVariant")), (await $.wv([$t34, $t35, $t36], "null", C, false)), (await $.mv((await $.wv([$t34, $t35, $t36], "DBLookupComboBox2", C, false)), "KeyValue")), (await $.mv((await $.wv([$t34, $t35, $t36], "CurrencyEdit1", C, false)), "Value")), (await $.mv((await $.wv([$t34, $t35, $t36], "DBLookupComboBox1", C, false)), "KeyValue")), (await $.wv([$t34, $t35, $t36], "null", C, false)), (await $.mv((await $.wv([$t34, $t35, $t36], "tpTime", C, false)), "DateTime")), (await $.mv((await $.wv([$t34, $t35, $t36], "cbmeth", C, false)), "itemindex"))]])));
      await $.mcall((await $.wv([$t34, $t35, $t36], "odsServs", C, false)), "Close", []);
      await $.mcall((await $.wv([$t34, $t35, $t36], "odsServs", C, false)), "Open", []);
      await $.mcall((await $.wv([$t34, $t35, $t36], "odsContacts", C, false)), "Close", []);
      await $.mcall((await $.wv([$t34, $t35, $t36], "odsContacts", C, false)), "Open", []);
      await $.stmt((await $.mcall((await $.wv([$t34, $t35, $t36], "odsContacts", C, false)), "Locate", ["ID", (await $.wv([$t34, $t35, $t36], "CID", { get: async () => L0["cid"], set: async (v) => { L0["cid"] = v; }, local: true }, false)), []])));
    }
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TCableMan", "actSDelExecute", async function actSDelExecute(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "msgid": 0, "cid": 0};
  await $.fixArgs(L0, ["sender"]);
  L0["msgid"] = (await $.call(C, "MessageDlg", ["Günün sənədlərindən əməliyyat silinəcək. Əminsiniz?", (await $.v(C, "mtWarning")), [(await $.v(C, "mbYes")), (await $.v(C, "mbNo")), (await $.v(C, "mbCancel"))], 0]));
  if ($.truthy(($.eq(L0["msgid"], (await $.v(C, "idyes")))))) {
    {
      const $t37 = (await $.v(C, "DataModCable"));
      await $.wset([$t37], "CID", (await $.mv((await $.idx((await $.mv((await $.wv([$t37], "odsContacts", C, false)), "Fields")), [0])), "AsInteger")), { get: async () => L0["cid"], set: async (v) => { L0["cid"] = v; }, local: true });
      await $.stmt((await $.mcall((await $.wv([$t37], "CABLE", C, false)), "CallProcedure", ["abnservdel", [(await $.mv((await $.idx((await $.mv((await $.wv([$t37], "odsServs", C, false)), "fields")), [0])), "AsVariant")), 1]])));
      await $.mcall((await $.wv([$t37], "odsServs", C, false)), "Close", []);
      await $.mcall((await $.wv([$t37], "odsServs", C, false)), "Open", []);
      await $.mcall((await $.wv([$t37], "odsContacts", C, false)), "Close", []);
      await $.mcall((await $.wv([$t37], "odsContacts", C, false)), "Open", []);
      await $.stmt((await $.mcall((await $.wv([$t37], "odsContacts", C, false)), "Locate", ["ID", (await $.wv([$t37], "CID", { get: async () => L0["cid"], set: async (v) => { L0["cid"] = v; }, local: true }, false)), []])));
    }
  }
  if ($.truthy(($.eq(L0["msgid"], (await $.v(C, "idno")))))) {
    {
      const $t38 = (await $.v(C, "DataModCable"));
      await $.wset([$t38], "CID", (await $.mv((await $.idx((await $.mv((await $.wv([$t38], "odsContacts", C, false)), "Fields")), [0])), "AsInteger")), { get: async () => L0["cid"], set: async (v) => { L0["cid"] = v; }, local: true });
      await $.stmt((await $.mcall((await $.wv([$t38], "CABLE", C, false)), "CallProcedure", ["abnservdel", [(await $.mv((await $.idx((await $.mv((await $.wv([$t38], "odsServs", C, false)), "fields")), [0])), "AsVariant")), 0]])));
      await $.mcall((await $.wv([$t38], "odsServs", C, false)), "Close", []);
      await $.mcall((await $.wv([$t38], "odsServs", C, false)), "Open", []);
      await $.mcall((await $.wv([$t38], "odsContacts", C, false)), "Close", []);
      await $.mcall((await $.wv([$t38], "odsContacts", C, false)), "Open", []);
      await $.stmt((await $.mcall((await $.wv([$t38], "odsContacts", C, false)), "Locate", ["ID", (await $.wv([$t38], "CID", { get: async () => L0["cid"], set: async (v) => { L0["cid"] = v; }, local: true }, false)), []])));
    }
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TCableMan", "actCommitExecute", async function actCommitExecute(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.gt((await $.mv((await $.mcall((await $.mv((await $.v(C, "DataModCable")), "odsServs")), "fieldbyname", ["STATUS"])), "asinteger")), 0))) {
    await $.stmt((await $.call(C, "ShowMessage", ["Bu əməliyyat təsdiq olunub"])));
    return L0.result;
  } else {
    if ($.truthy(($.eq((await $.call(C, "MessageDlg", ["Əməliyyat təsdiqlənsin?", (await $.v(C, "mtWarning")), [(await $.v(C, "mbYes")), (await $.v(C, "mbNo"))], 0])), (await $.v(C, "idyes")))))) {
      {
        const $t39 = (await $.v(C, "DataModCable"));
        await $.stmt((await $.mcall((await $.wv([$t39], "CABLE", C, false)), "CallProcedure", ["abnservcommit", [(await $.mv((await $.idx((await $.mv((await $.wv([$t39], "odsServs", C, false)), "fields")), [0])), "AsVariant"))]])));
        await $.mcall((await $.wv([$t39], "odsServs", C, false)), "Close", []);
        await $.mcall((await $.wv([$t39], "odsServs", C, false)), "Open", []);
        await $.mcall((await $.wv([$t39], "odsContacts", C, false)), "Close", []);
        await $.mcall((await $.wv([$t39], "odsContacts", C, false)), "Open", []);
      }
    }
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TCableMan", "edSrcIDKeyUp", async function edSrcIDKeyUp(Self, p0, p1, p2) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "key": $.asRef(p1), "shift": $.copyArg(p2), result: undefined};
  await $.fixArgs(L0, ["sender", "shift"]);
  if ($.truthy($.eq((await L0["key"].get()), (await $.v(C, "VK_RETURN"))))) {
    await $.stmt((await $.mcall((await $.mv((await $.v(C, "DataModCable")), "odsAbonents")), "Locate", [(await $.call(C, "copy", [(await $.mv((L0["sender"]), "name")), 6, $.sub((await $.call(C, "length", [(await $.mv((L0["sender"]), "name"))])), 5)])), (await $.mv((L0["sender"]), "text")), [(await $.v(C, "loCaseInsensitive"))]])));
  }
  return L0.result;
}, {"params": ["Sender", "Key", "Shift"], "kind": "procedure", "ptypes": ["TObject", "Word", "TShiftState"]});
  U.method("TCableMan", "edSrcIDExit", async function edSrcIDExit(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mset(L0["sender"], "text", "");
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TCableMan", "Button2Click", async function Button2Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "a": 0, "v": 0, "servstr": '', "comma": ''};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t40 = (await $.v(C, "frmPrintRep"));
    if ($.truthy($.not((await $.wcall([$t40], "assigned", [(await $.wv([$t40], "frmPrintRep", C, false))], C))))) {
      await $.wset([$t40], "frmPrintRep", (await $.mcall((await $.wv([$t40], "TfrmPrintRep", C, false)), "Create", [Self])), C);
    }
    if ($.truthy($.eq((await $.wv([$t40], "ShowModal", C, false)), (await $.wv([$t40], "IDOK", C, false))))) {
      if ($.truthy($.not((await $.wcall([$t40], "assigned", [(await $.wv([$t40], "qrpMain", C, false))], C))))) {
        await $.wset([$t40], "qrpMain", (await $.mcall((await $.wv([$t40], "TqrpMain", C, false)), "Create", [Self])), C);
      }
      {
        const $t41 = (await $.wv([$t40], "qrpMain", C, false));
        if ($.truthy($.eq((await $.mv((await $.mcall((await $.mv((await $.wv([$t40, $t41], "DataModCable", C, false)), "odsAbonents")), "FieldByName", ["FOREIGNER"])), "AsVariant")), "VAR"))) {
          await $.mset((await $.wv([$t40, $t41], "LblForeigner", C, false)), "Caption", "yerli");
        } else {
          await $.mset((await $.wv([$t40, $t41], "LblForeigner", C, false)), "Caption", "xarici");
        }
        await $.mset((await $.wv([$t40, $t41], "qW1", C, false)), "Caption", (await $.mv((await $.wv([$t40, $t41], "edit1", C, false)), "Text")));
        await $.mset((await $.wv([$t40, $t41], "qW2", C, false)), "Caption", (await $.mv((await $.wv([$t40, $t41], "edit2", C, false)), "Text")));
        await $.mset((await $.wv([$t40, $t41], "qW3", C, false)), "Caption", (await $.mv((await $.wv([$t40, $t41], "edit3", C, false)), "Text")));
        await $.mset((await $.wv([$t40, $t41], "qW4", C, false)), "Caption", (await $.mv((await $.wv([$t40, $t41], "edit4", C, false)), "Text")));
        await $.mset((await $.wv([$t40, $t41], "qW5", C, false)), "Caption", (await $.mv((await $.wv([$t40, $t41], "edit5", C, false)), "Text")));
        await $.mset((await $.wv([$t40, $t41], "qW6", C, false)), "Caption", (await $.mv((await $.wv([$t40, $t41], "edit6", C, false)), "Text")));
        await $.mset((await $.wv([$t40, $t41], "qW7", C, false)), "Caption", (await $.mv((await $.wv([$t40, $t41], "edit7", C, false)), "Text")));
        await $.mset((await $.wv([$t40, $t41], "qW8", C, false)), "Caption", "");
        await $.mset((await $.wv([$t40, $t41], "LblUserName", C, false)), "Caption", (await $.mv((await $.mv((await $.mv((await $.wv([$t40, $t41], "sboapiDataModule", C, false)), "SBLogon")), "Session")), "LogonUsername")));
        await $.mset((await $.wv([$t40, $t41], "LblSymb", C, false)), "Caption", (await $.mv((await $.mcall((await $.mv((await $.wv([$t40, $t41], "DataModCable", C, false)), "odsContacts")), "FieldByName", ["symb"])), "AsString")));
        await $.wset([$t40, $t41], "a", $.add($.add($.add($.add($.add($.add((await $.mv((await $.wv([$t40, $t41], "CurrencyEdit1", C, false)), "Value")), (await $.mv((await $.wv([$t40, $t41], "CurrencyEdit2", C, false)), "Value"))), (await $.mv((await $.wv([$t40, $t41], "CurrencyEdit3", C, false)), "Value"))), (await $.mv((await $.wv([$t40, $t41], "CurrencyEdit4", C, false)), "Value"))), (await $.mv((await $.wv([$t40, $t41], "CurrencyEdit5", C, false)), "Value"))), (await $.mv((await $.wv([$t40, $t41], "CurrencyEdit6", C, false)), "Value"))), (await $.mv((await $.wv([$t40, $t41], "CurrencyEdit7", C, false)), "Value"))), { get: async () => L0["a"], set: async (v) => { L0["a"] = v; }, local: true });
        await $.mset((await $.wv([$t40, $t41], "qS1", C, false)), "Caption", (await $.wcall([$t40, $t41], "FormatFloat", ["#,##0.00", (await $.mv((await $.wv([$t40, $t41], "CurrencyEdit1", C, false)), "Value"))], C)));
        await $.mset((await $.wv([$t40, $t41], "qS2", C, false)), "Caption", (await $.wcall([$t40, $t41], "FormatFloat", ["#,##0.00", (await $.mv((await $.wv([$t40, $t41], "CurrencyEdit2", C, false)), "Value"))], C)));
        await $.mset((await $.wv([$t40, $t41], "qS3", C, false)), "Caption", (await $.wcall([$t40, $t41], "FormatFloat", ["#,##0.00", (await $.mv((await $.wv([$t40, $t41], "CurrencyEdit3", C, false)), "Value"))], C)));
        await $.mset((await $.wv([$t40, $t41], "qS4", C, false)), "Caption", (await $.wcall([$t40, $t41], "FormatFloat", ["#,##0.00", (await $.mv((await $.wv([$t40, $t41], "CurrencyEdit4", C, false)), "Value"))], C)));
        await $.mset((await $.wv([$t40, $t41], "qS5", C, false)), "Caption", (await $.wcall([$t40, $t41], "FormatFloat", ["#,##0.00", (await $.mv((await $.wv([$t40, $t41], "CurrencyEdit5", C, false)), "Value"))], C)));
        await $.mset((await $.wv([$t40, $t41], "qS6", C, false)), "Caption", (await $.wcall([$t40, $t41], "FormatFloat", ["#,##0.00", (await $.mv((await $.wv([$t40, $t41], "CurrencyEdit6", C, false)), "Value"))], C)));
        await $.mset((await $.wv([$t40, $t41], "qS7", C, false)), "Caption", (await $.wcall([$t40, $t41], "FormatFloat", ["#,##0.00", (await $.mv((await $.wv([$t40, $t41], "CurrencyEdit7", C, false)), "Value"))], C)));
        await $.mset((await $.wv([$t40, $t41], "qS8", C, false)), "Caption", (await $.wcall([$t40, $t41], "FormatFloat", ["#,##0.00", (await $.wv([$t40, $t41], "a", { get: async () => L0["a"], set: async (v) => { L0["a"] = v; }, local: true }, false))], C)));
        if ($.truthy($.eq((await $.mv((await $.mcall((await $.mv((await $.wv([$t40, $t41], "DataModCable", C, false)), "odsAbonents")), "FieldByName", ["VAT"])), "AsVariant")), "HƏ"))) {
          await $.wset([$t40, $t41], "v", 1, { get: async () => L0["v"], set: async (v) => { L0["v"] = v; }, local: true });
        } else {
          await $.wset([$t40, $t41], "v", 1.18, { get: async () => L0["v"], set: async (v) => { L0["v"] = v; }, local: true });
        }
        await $.mset((await $.wv([$t40, $t41], "qE1", C, false)), "Caption", (await $.wcall([$t40, $t41], "FormatFloat", ["#,##0.00", ($.fdiv((await $.mv((await $.wv([$t40, $t41], "CurrencyEdit1", C, false)), "Value")), (await $.wv([$t40, $t41], "v", { get: async () => L0["v"], set: async (v) => { L0["v"] = v; }, local: true }, false))))], C)));
        await $.mset((await $.wv([$t40, $t41], "qE2", C, false)), "Caption", (await $.wcall([$t40, $t41], "FormatFloat", ["#,##0.00", ($.fdiv((await $.mv((await $.wv([$t40, $t41], "CurrencyEdit2", C, false)), "Value")), (await $.wv([$t40, $t41], "v", { get: async () => L0["v"], set: async (v) => { L0["v"] = v; }, local: true }, false))))], C)));
        await $.mset((await $.wv([$t40, $t41], "qE3", C, false)), "Caption", (await $.wcall([$t40, $t41], "FormatFloat", ["#,##0.00", ($.fdiv((await $.mv((await $.wv([$t40, $t41], "CurrencyEdit3", C, false)), "Value")), (await $.wv([$t40, $t41], "v", { get: async () => L0["v"], set: async (v) => { L0["v"] = v; }, local: true }, false))))], C)));
        await $.mset((await $.wv([$t40, $t41], "qE4", C, false)), "Caption", (await $.wcall([$t40, $t41], "FormatFloat", ["#,##0.00", ($.fdiv((await $.mv((await $.wv([$t40, $t41], "CurrencyEdit4", C, false)), "Value")), (await $.wv([$t40, $t41], "v", { get: async () => L0["v"], set: async (v) => { L0["v"] = v; }, local: true }, false))))], C)));
        await $.mset((await $.wv([$t40, $t41], "qE5", C, false)), "Caption", (await $.wcall([$t40, $t41], "FormatFloat", ["#,##0.00", ($.fdiv((await $.mv((await $.wv([$t40, $t41], "CurrencyEdit5", C, false)), "Value")), (await $.wv([$t40, $t41], "v", { get: async () => L0["v"], set: async (v) => { L0["v"] = v; }, local: true }, false))))], C)));
        await $.mset((await $.wv([$t40, $t41], "qE6", C, false)), "Caption", (await $.wcall([$t40, $t41], "FormatFloat", ["#,##0.00", ($.fdiv((await $.mv((await $.wv([$t40, $t41], "CurrencyEdit6", C, false)), "Value")), (await $.wv([$t40, $t41], "v", { get: async () => L0["v"], set: async (v) => { L0["v"] = v; }, local: true }, false))))], C)));
        await $.mset((await $.wv([$t40, $t41], "qE7", C, false)), "Caption", (await $.wcall([$t40, $t41], "FormatFloat", ["#,##0.00", ($.fdiv((await $.mv((await $.wv([$t40, $t41], "CurrencyEdit7", C, false)), "Value")), (await $.wv([$t40, $t41], "v", { get: async () => L0["v"], set: async (v) => { L0["v"] = v; }, local: true }, false))))], C)));
        await $.mset((await $.wv([$t40, $t41], "qE8", C, false)), "Caption", (await $.wcall([$t40, $t41], "FormatFloat", ["#,##0.00", $.add($.add($.add($.add($.add($.add((await $.wcall([$t40, $t41], "StrToFloat", [(await $.mv((await $.wv([$t40, $t41], "qE1", C, false)), "Caption"))], C)), (await $.wcall([$t40, $t41], "StrToFloat", [(await $.mv((await $.wv([$t40, $t41], "qE2", C, false)), "Caption"))], C))), (await $.wcall([$t40, $t41], "StrToFloat", [(await $.mv((await $.wv([$t40, $t41], "qE3", C, false)), "Caption"))], C))), (await $.wcall([$t40, $t41], "StrToFloat", [(await $.mv((await $.wv([$t40, $t41], "qE4", C, false)), "Caption"))], C))), (await $.wcall([$t40, $t41], "StrToFloat", [(await $.mv((await $.wv([$t40, $t41], "qE5", C, false)), "Caption"))], C))), (await $.wcall([$t40, $t41], "StrToFloat", [(await $.mv((await $.wv([$t40, $t41], "qE6", C, false)), "Caption"))], C))), (await $.wcall([$t40, $t41], "StrToFloat", [(await $.mv((await $.wv([$t40, $t41], "qE7", C, false)), "Caption"))], C)))], C)));
        await $.mset((await $.wv([$t40, $t41], "qA1", C, false)), "Caption", (await $.wcall([$t40, $t41], "FormatFloat", ["#,##0.00", ($.sub((await $.mv((await $.wv([$t40, $t41], "CurrencyEdit1", C, false)), "Value")), $.fdiv((await $.mv((await $.wv([$t40, $t41], "CurrencyEdit1", C, false)), "Value")), (await $.wv([$t40, $t41], "v", { get: async () => L0["v"], set: async (v) => { L0["v"] = v; }, local: true }, false)))))], C)));
        await $.mset((await $.wv([$t40, $t41], "qA2", C, false)), "Caption", (await $.wcall([$t40, $t41], "FormatFloat", ["#,##0.00", ($.sub((await $.mv((await $.wv([$t40, $t41], "CurrencyEdit2", C, false)), "Value")), $.fdiv((await $.mv((await $.wv([$t40, $t41], "CurrencyEdit2", C, false)), "Value")), (await $.wv([$t40, $t41], "v", { get: async () => L0["v"], set: async (v) => { L0["v"] = v; }, local: true }, false)))))], C)));
        await $.mset((await $.wv([$t40, $t41], "qA3", C, false)), "Caption", (await $.wcall([$t40, $t41], "FormatFloat", ["#,##0.00", ($.sub((await $.mv((await $.wv([$t40, $t41], "CurrencyEdit3", C, false)), "Value")), $.fdiv((await $.mv((await $.wv([$t40, $t41], "CurrencyEdit3", C, false)), "Value")), (await $.wv([$t40, $t41], "v", { get: async () => L0["v"], set: async (v) => { L0["v"] = v; }, local: true }, false)))))], C)));
        await $.mset((await $.wv([$t40, $t41], "qA4", C, false)), "Caption", (await $.wcall([$t40, $t41], "FormatFloat", ["#,##0.00", ($.sub((await $.mv((await $.wv([$t40, $t41], "CurrencyEdit4", C, false)), "Value")), $.fdiv((await $.mv((await $.wv([$t40, $t41], "CurrencyEdit4", C, false)), "Value")), (await $.wv([$t40, $t41], "v", { get: async () => L0["v"], set: async (v) => { L0["v"] = v; }, local: true }, false)))))], C)));
        await $.mset((await $.wv([$t40, $t41], "qA5", C, false)), "Caption", (await $.wcall([$t40, $t41], "FormatFloat", ["#,##0.00", ($.sub((await $.mv((await $.wv([$t40, $t41], "CurrencyEdit5", C, false)), "Value")), $.fdiv((await $.mv((await $.wv([$t40, $t41], "CurrencyEdit5", C, false)), "Value")), (await $.wv([$t40, $t41], "v", { get: async () => L0["v"], set: async (v) => { L0["v"] = v; }, local: true }, false)))))], C)));
        await $.mset((await $.wv([$t40, $t41], "qA6", C, false)), "Caption", (await $.wcall([$t40, $t41], "FormatFloat", ["#,##0.00", ($.sub((await $.mv((await $.wv([$t40, $t41], "CurrencyEdit6", C, false)), "Value")), $.fdiv((await $.mv((await $.wv([$t40, $t41], "CurrencyEdit6", C, false)), "Value")), (await $.wv([$t40, $t41], "v", { get: async () => L0["v"], set: async (v) => { L0["v"] = v; }, local: true }, false)))))], C)));
        await $.mset((await $.wv([$t40, $t41], "qA7", C, false)), "Caption", (await $.wcall([$t40, $t41], "FormatFloat", ["#,##0.00", ($.sub((await $.mv((await $.wv([$t40, $t41], "CurrencyEdit7", C, false)), "Value")), $.fdiv((await $.mv((await $.wv([$t40, $t41], "CurrencyEdit7", C, false)), "Value")), (await $.wv([$t40, $t41], "v", { get: async () => L0["v"], set: async (v) => { L0["v"] = v; }, local: true }, false)))))], C)));
        await $.mset((await $.wv([$t40, $t41], "qA8", C, false)), "Caption", (await $.wcall([$t40, $t41], "FormatFloat", ["#,##0.00", $.add($.add($.add($.add($.add($.add((await $.wcall([$t40, $t41], "StrToFloat", [(await $.mv((await $.wv([$t40, $t41], "qA1", C, false)), "Caption"))], C)), (await $.wcall([$t40, $t41], "StrToFloat", [(await $.mv((await $.wv([$t40, $t41], "qA2", C, false)), "Caption"))], C))), (await $.wcall([$t40, $t41], "StrToFloat", [(await $.mv((await $.wv([$t40, $t41], "qA3", C, false)), "Caption"))], C))), (await $.wcall([$t40, $t41], "StrToFloat", [(await $.mv((await $.wv([$t40, $t41], "qA4", C, false)), "Caption"))], C))), (await $.wcall([$t40, $t41], "StrToFloat", [(await $.mv((await $.wv([$t40, $t41], "qA5", C, false)), "Caption"))], C))), (await $.wcall([$t40, $t41], "StrToFloat", [(await $.mv((await $.wv([$t40, $t41], "qA6", C, false)), "Caption"))], C))), (await $.wcall([$t40, $t41], "StrToFloat", [(await $.mv((await $.wv([$t40, $t41], "qA7", C, false)), "Caption"))], C)))], C)));
        await $.wset([$t40, $t41], "ServStr", "", { get: async () => L0["servstr"], set: async (v) => { L0["servstr"] = v; }, local: true });
        await $.wset([$t40, $t41], "comma", "", { get: async () => L0["comma"], set: async (v) => { L0["comma"] = v; }, local: true });
        if ($.truthy((await $.mv((await $.wv([$t40, $t41], "CheckBox1", C, false)), "Checked")))) {
          await $.wset([$t40, $t41], "ServStr", $.add($.add((await $.wv([$t40, $t41], "ServStr", { get: async () => L0["servstr"], set: async (v) => { L0["servstr"] = v; }, local: true }, false)), (await $.wv([$t40, $t41], "comma", { get: async () => L0["comma"], set: async (v) => { L0["comma"] = v; }, local: true }, false))), (await $.mv((await $.wv([$t40, $t41], "CheckBox1", C, false)), "Caption"))), { get: async () => L0["servstr"], set: async (v) => { L0["servstr"] = v; }, local: true });
          await $.wset([$t40, $t41], "comma", ",", { get: async () => L0["comma"], set: async (v) => { L0["comma"] = v; }, local: true });
        }
        if ($.truthy((await $.mv((await $.wv([$t40, $t41], "CheckBox2", C, false)), "Checked")))) {
          await $.wset([$t40, $t41], "ServStr", $.add($.add((await $.wv([$t40, $t41], "ServStr", { get: async () => L0["servstr"], set: async (v) => { L0["servstr"] = v; }, local: true }, false)), (await $.wv([$t40, $t41], "comma", { get: async () => L0["comma"], set: async (v) => { L0["comma"] = v; }, local: true }, false))), (await $.mv((await $.wv([$t40, $t41], "CheckBox2", C, false)), "Caption"))), { get: async () => L0["servstr"], set: async (v) => { L0["servstr"] = v; }, local: true });
          await $.wset([$t40, $t41], "comma", ",", { get: async () => L0["comma"], set: async (v) => { L0["comma"] = v; }, local: true });
        }
        if ($.truthy((await $.mv((await $.wv([$t40, $t41], "CheckBox3", C, false)), "Checked")))) {
          await $.wset([$t40, $t41], "ServStr", $.add($.add((await $.wv([$t40, $t41], "ServStr", { get: async () => L0["servstr"], set: async (v) => { L0["servstr"] = v; }, local: true }, false)), (await $.wv([$t40, $t41], "comma", { get: async () => L0["comma"], set: async (v) => { L0["comma"] = v; }, local: true }, false))), (await $.mv((await $.wv([$t40, $t41], "CheckBox3", C, false)), "Caption"))), { get: async () => L0["servstr"], set: async (v) => { L0["servstr"] = v; }, local: true });
          await $.wset([$t40, $t41], "comma", ",", { get: async () => L0["comma"], set: async (v) => { L0["comma"] = v; }, local: true });
        }
        if ($.truthy((await $.mv((await $.wv([$t40, $t41], "CheckBox4", C, false)), "Checked")))) {
          await $.wset([$t40, $t41], "ServStr", $.add($.add((await $.wv([$t40, $t41], "ServStr", { get: async () => L0["servstr"], set: async (v) => { L0["servstr"] = v; }, local: true }, false)), (await $.wv([$t40, $t41], "comma", { get: async () => L0["comma"], set: async (v) => { L0["comma"] = v; }, local: true }, false))), (await $.mv((await $.wv([$t40, $t41], "CheckBox4", C, false)), "Caption"))), { get: async () => L0["servstr"], set: async (v) => { L0["servstr"] = v; }, local: true });
          await $.wset([$t40, $t41], "comma", ",", { get: async () => L0["comma"], set: async (v) => { L0["comma"] = v; }, local: true });
        }
        if ($.truthy((await $.mv((await $.wv([$t40, $t41], "CheckBox5", C, false)), "Checked")))) {
          await $.wset([$t40, $t41], "ServStr", $.add($.add((await $.wv([$t40, $t41], "ServStr", { get: async () => L0["servstr"], set: async (v) => { L0["servstr"] = v; }, local: true }, false)), (await $.wv([$t40, $t41], "comma", { get: async () => L0["comma"], set: async (v) => { L0["comma"] = v; }, local: true }, false))), (await $.mv((await $.wv([$t40, $t41], "CheckBox5", C, false)), "Caption"))), { get: async () => L0["servstr"], set: async (v) => { L0["servstr"] = v; }, local: true });
          await $.wset([$t40, $t41], "comma", ",", { get: async () => L0["comma"], set: async (v) => { L0["comma"] = v; }, local: true });
        }
        if ($.truthy((await $.mv((await $.wv([$t40, $t41], "CheckBox6", C, false)), "Checked")))) {
          await $.wset([$t40, $t41], "ServStr", $.add($.add((await $.wv([$t40, $t41], "ServStr", { get: async () => L0["servstr"], set: async (v) => { L0["servstr"] = v; }, local: true }, false)), (await $.wv([$t40, $t41], "comma", { get: async () => L0["comma"], set: async (v) => { L0["comma"] = v; }, local: true }, false))), (await $.mv((await $.wv([$t40, $t41], "CheckBox6", C, false)), "Caption"))), { get: async () => L0["servstr"], set: async (v) => { L0["servstr"] = v; }, local: true });
          await $.wset([$t40, $t41], "comma", ",", { get: async () => L0["comma"], set: async (v) => { L0["comma"] = v; }, local: true });
        }
        if ($.truthy($.ne((await $.mv((await $.wv([$t40, $t41], "Edt7_1", C, false)), "Text")), ""))) {
          await $.wset([$t40, $t41], "ServStr", $.add($.add((await $.wv([$t40, $t41], "ServStr", { get: async () => L0["servstr"], set: async (v) => { L0["servstr"] = v; }, local: true }, false)), (await $.wv([$t40, $t41], "comma", { get: async () => L0["comma"], set: async (v) => { L0["comma"] = v; }, local: true }, false))), (await $.mv((await $.wv([$t40, $t41], "Edt7_1", C, false)), "Text"))), { get: async () => L0["servstr"], set: async (v) => { L0["servstr"] = v; }, local: true });
          await $.wset([$t40, $t41], "comma", ",", { get: async () => L0["comma"], set: async (v) => { L0["comma"] = v; }, local: true });
        }
        await $.mset((await $.wv([$t40, $t41], "QRLabelServs", C, false)), "Caption", (await $.wv([$t40, $t41], "ServStr", { get: async () => L0["servstr"], set: async (v) => { L0["servstr"] = v; }, local: true }, false)));
        await $.stmt($.wcall([$t40, $t41], "preview", [], C));
      }
    }
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TCableMan", "actRefreshExecute", async function actRefreshExecute(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t42 = (await $.v(C, "DataModCable"));
    await $.mcall((await $.wv([$t42], "odsAbonents", C, false)), "Close", []);
    await $.mcall((await $.wv([$t42], "odsAbonents", C, false)), "Open", []);
    await $.mset((await $.wv([$t42], "lbR", C, false)), "Caption", (await $.wcall([$t42], "IntToStr", [(await $.mv((await $.wv([$t42], "odsAbonents", C, false)), "RecordCount"))], C)));
    await $.mcall((await $.wv([$t42], "odsEngineers", C, false)), "Close", []);
    await $.mcall((await $.wv([$t42], "odsEngineers", C, false)), "Open", []);
    await $.mcall((await $.wv([$t42], "odsContacts", C, false)), "Close", []);
    await $.mcall((await $.wv([$t42], "odsContacts", C, false)), "Open", []);
    await $.mcall((await $.wv([$t42], "odsServs", C, false)), "Close", []);
    await $.mcall((await $.wv([$t42], "odsServs", C, false)), "Open", []);
    await $.mcall((await $.wv([$t42], "odsDocTypes", C, false)), "Close", []);
    await $.mcall((await $.wv([$t42], "odsDocTypes", C, false)), "Open", []);
    await $.mcall((await $.wv([$t42], "odsStatuses", C, false)), "Close", []);
    await $.mcall((await $.wv([$t42], "odsStatuses", C, false)), "Open", []);
    await $.mcall((await $.wv([$t42], "odsAccs", C, false)), "Close", []);
    await $.mcall((await $.wv([$t42], "odsAccs", C, false)), "Open", []);
    await $.mcall((await $.wv([$t42], "odsServices", C, false)), "Close", []);
    await $.mcall((await $.wv([$t42], "odsServices", C, false)), "Open", []);
    await $.mcall((await $.wv([$t42], "odsPacks", C, false)), "Close", []);
    await $.mcall((await $.wv([$t42], "odsPacks", C, false)), "Open", []);
    await $.mcall((await $.wv([$t42], "odsValutes", C, false)), "Close", []);
    await $.mcall((await $.wv([$t42], "odsValutes", C, false)), "Open", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TCableMan", "ApplicationEvents1Exception", async function ApplicationEvents1Exception(Self, p0, p1) {
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
  U.method("TCableMan", "Edit1KeyUp", async function Edit1KeyUp(Self, p0, p1, p2) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "key": $.asRef(p1), "shift": $.copyArg(p2), result: undefined, "funcname": ''};
  await $.fixArgs(L0, ["sender", "shift"]);
  if ($.truthy($.eq((await L0["key"].get()), (await $.v(C, "VK_RETURN"))))) {
    if ($.truthy((await $.mv(((await $.v(C, "checkbox1"))), "checked")))) {
      L0["funcname"] = "getabonidbycard";
    } else {
      L0["funcname"] = "getabonidbycontract";
    }
    await $.stmt((await $.mcall((await $.mv((await $.v(C, "DataModCable")), "odsAbonents")), "Locate", ["ID", (await $.mcall((await $.mv((await $.v(C, "DataModCable")), "CABLE")), "CallIntegerFunction", [L0["funcname"], [(await $.mv((L0["sender"]), "text"))]])), [(await $.v(C, "loCaseInsensitive"))]])));
  }
  return L0.result;
}, {"params": ["Sender", "Key", "Shift"], "kind": "procedure", "ptypes": ["TObject", "Word", "TShiftState"]});
  U.method("TCableMan", "CheckBox1Click", async function CheckBox1Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy((await $.mv((L0["sender"]), "checked")))) {
    await $.mset((await $.v(C, "label5")), "Caption", "Kart");
  } else {
    await $.mset((await $.v(C, "label5")), "Caption", "Müqavilə");
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TCableMan", "actAdtToContactExecute", async function actAdtToContactExecute(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "cid": 0};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.not((await $.call(C, "assigned", [(await $.v(C, "frmContractAdd"))]))))) {
    await $.set(C, "frmContractAdd", (await $.mcall((await $.v(C, "TfrmContractAdd")), "Create", [Self])));
  }
  {
    const $t43 = (await $.v(C, "DataModCable"));
    const $t44 = (await $.wv([$t43], "frmContractAdd", C, false));
    const $t45 = (await $.wv([$t43, $t44], "odsContacts", C, false));
    await $.wset([$t43, $t44, $t45], "CID", (await $.mv((await $.idx((await $.wv([$t43, $t44, $t45], "Fields", C, false)), [0])), "AsInteger")), { get: async () => L0["cid"], set: async (v) => { L0["cid"] = v; }, local: true });
    await $.mset((await $.wv([$t43, $t44, $t45], "edcontract_num", C, false)), "Text", (await $.mv((await $.mcall((await $.wv([$t43, $t44, $t45], "odsContacts", C, false)), "FieldByName", ["CONTRACT_NUM"])), "AsString")));
    await $.mset((await $.wv([$t43, $t44, $t45], "edcard_num", C, false)), "Text", (await $.mv((await $.mcall((await $.wv([$t43, $t44, $t45], "odsContacts", C, false)), "FieldByName", ["CARD_NUM"])), "AsString")));
    await $.mset((await $.wv([$t43, $t44, $t45], "edserie", C, false)), "Text", (await $.mv((await $.mcall((await $.wv([$t43, $t44, $t45], "odsContacts", C, false)), "FieldByName", ["SERIE"])), "AsString")));
    await $.mset((await $.wv([$t43, $t44, $t45], "edworks_num", C, false)), "Text", (await $.mv((await $.mcall((await $.wv([$t43, $t44, $t45], "odsContacts", C, false)), "FieldByName", ["WORKS_NUM"])), "AsString")));
    await $.mset((await $.wv([$t43, $t44, $t45], "edreceiver_num", C, false)), "Text", (await $.mv((await $.mcall((await $.wv([$t43, $t44, $t45], "odsContacts", C, false)), "FieldByName", ["RECEIVER_NUM"])), "AsString")));
    await $.mset((await $.wv([$t43, $t44, $t45], "edcable_length", C, false)), "Text", (await $.mv((await $.mcall((await $.wv([$t43, $t44, $t45], "odsContacts", C, false)), "FieldByName", ["CABLE_LENGTH"])), "AsString")));
    await $.mset((await $.wv([$t43, $t44, $t45], "edamount", C, false)), "Text", (await $.mv((await $.mcall((await $.wv([$t43, $t44, $t45], "odsContacts", C, false)), "FieldByName", ["AMOUNT"])), "AsString")));
    await $.mset((await $.wv([$t43, $t44, $t45], "eddiscount", C, false)), "Text", (await $.mv((await $.mcall((await $.wv([$t43, $t44, $t45], "odsContacts", C, false)), "FieldByName", ["DISCOUNT"])), "AsString")));
    await $.mset((await $.wv([$t43, $t44, $t45], "edDiscDesc", C, false)), "Text", (await $.mv((await $.mcall((await $.wv([$t43, $t44, $t45], "odsContacts", C, false)), "FieldByName", ["DISCOUNT_DESC"])), "AsString")));
    await $.mset((await $.wv([$t43, $t44, $t45], "edinst_date", C, false)), "Date", (await $.mv((await $.mcall((await $.wv([$t43, $t44, $t45], "odsContacts", C, false)), "FieldByName", ["INST_DATE"])), "AsDateTime")));
    await $.mset((await $.wv([$t43, $t44, $t45], "edexp_date", C, false)), "Date", (await $.mv((await $.mcall((await $.wv([$t43, $t44, $t45], "odsContacts", C, false)), "FieldByName", ["EXP_DATE"])), "AsDateTime")));
    await $.mset((await $.wv([$t43, $t44, $t45], "edinst_place", C, false)), "itemindex", (await $.mv((await $.mcall((await $.wv([$t43, $t44, $t45], "odsContacts", C, false)), "FieldByName", ["INST_PLACE"])), "AsInteger")));
    await $.mset((await $.wv([$t43, $t44, $t45], "edcurr_code", C, false)), "KeyValue", (await $.mv((await $.mcall((await $.wv([$t43, $t44, $t45], "odsContacts", C, false)), "FieldByName", ["CURR_CODE"])), "AsVariant")));
    await $.mset((await $.wv([$t43, $t44, $t45], "edeng_id", C, false)), "KeyValue", (await $.mv((await $.mcall((await $.wv([$t43, $t44, $t45], "odsContacts", C, false)), "FieldByName", ["ENG_ID"])), "AsVariant")));
    await $.mset((await $.wv([$t43, $t44, $t45], "edpack_num", C, false)), "KeyValue", (await $.mv((await $.mcall((await $.wv([$t43, $t44, $t45], "odsContacts", C, false)), "FieldByName", ["PACK_NUM"])), "AsVariant")));
    await $.mset((await $.wv([$t43, $t44, $t45], "edSRV_num", C, false)), "Enabled", (await $.wv([$t43, $t44, $t45], "true", C, false)));
    await $.mset((await $.wv([$t43, $t44, $t45], "edAcc_ID", C, false)), "KeyValue", (await $.mv((await $.mcall((await $.wv([$t43, $t44, $t45], "odsContacts", C, false)), "FieldByName", ["ACC_ID"])), "AsVariant")));
    await $.mset((await $.wv([$t43, $t44, $t45], "edCalcAg", C, false)), "Checked", (await $.wcall([$t43, $t44, $t45], "Boolean", [(await $.mv((await $.mcall((await $.wv([$t43, $t44, $t45], "odsContacts", C, false)), "FieldByName", ["CALCAG"])), "AsInteger"))], C)));
    await $.stmt((await $.wcall([$t43, $t44, $t45], "ShowMessage", ["not completed"], C)));
    if ($.truthy(($.eq((await $.mv((await $.wv([$t43, $t44, $t45], "frmContractAdd", C, false)), "ShowModal")), 1)))) {
      await $.stmt((await $.mcall((await $.wv([$t43, $t44, $t45], "CABLE", C, false)), "CallProcedure", ["contractupd", [(await $.mv((await $.idx((await $.mv((await $.wv([$t43, $t44, $t45], "odsContacts", C, false)), "Fields")), [0])), "AsVariant")), (await $.mv((await $.wv([$t43, $t44, $t45], "edcontract_num", C, false)), "Text")), (await $.mv((await $.wv([$t43, $t44, $t45], "edcard_num", C, false)), "Text")), (await $.mv((await $.idx((await $.mv((await $.wv([$t43, $t44, $t45], "odsAbonents", C, false)), "Fields")), [0])), "AsVariant")), (await $.wcall([$t43, $t44, $t45], "Tdatetime", [(await $.mv((await $.wv([$t43, $t44, $t45], "edinst_date", C, false)), "DateTime"))], C)), (await $.mv((await $.wv([$t43, $t44, $t45], "edinst_place", C, false)), "itemindex")), (await $.mv((await $.wv([$t43, $t44, $t45], "edserie", C, false)), "Text")), (await $.mv((await $.wv([$t43, $t44, $t45], "edworks_num", C, false)), "Text")), (await $.mv((await $.wv([$t43, $t44, $t45], "edreceiver_num", C, false)), "Text")), (await $.mv((await $.wv([$t43, $t44, $t45], "edcable_length", C, false)), "Text")), (await $.mv((await $.wv([$t43, $t44, $t45], "edamount", C, false)), "value")), (await $.mv((await $.wv([$t43, $t44, $t45], "edcurr_code", C, false)), "KeyValue")), (await $.mv((await $.wv([$t43, $t44, $t45], "eddiscount", C, false)), "Text")), (await $.mv((await $.wv([$t43, $t44, $t45], "edeng_id", C, false)), "KeyValue")), (await $.mv((await $.wv([$t43, $t44, $t45], "edpack_num", C, false)), "KeyValue")), (await $.mv((await $.wv([$t43, $t44, $t45], "edAcc_ID", C, false)), "KeyValue")), (await $.wcall([$t43, $t44, $t45], "Integer", [(await $.mv((await $.wv([$t43, $t44, $t45], "edCalcAg", C, false)), "Checked"))], C)), (await $.mv((await $.wv([$t43, $t44, $t45], "edDiscDesc", C, false)), "Text")), (await $.wcall([$t43, $t44, $t45], "Tdatetime", [(await $.mv((await $.wv([$t43, $t44, $t45], "edexp_date", C, false)), "DateTime"))], C))]])));
      await $.mcall((await $.wv([$t43, $t44, $t45], "odsContacts", C, false)), "Close", []);
      await $.mcall((await $.wv([$t43, $t44, $t45], "odsContacts", C, false)), "Open", []);
      await $.stmt((await $.wcall([$t43, $t44, $t45], "Locate", ["ID", (await $.wv([$t43, $t44, $t45], "CID", { get: async () => L0["cid"], set: async (v) => { L0["cid"] = v; }, local: true }, false)), []], C)));
    }
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TCableMan", "actSetNewCalcDateExecute", async function actSetNewCalcDateExecute(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "nt": 0};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t46 = (await $.v(C, "DataModCable"));
    await $.wset([$t46], "nt", (await $.mv((await $.idx((await $.mv((await $.wv([$t46], "odsContacts", C, false)), "fields")), [0])), "AsVariant")), { get: async () => L0["nt"], set: async (v) => { L0["nt"] = v; }, local: true });
    await $.stmt((await $.mcall((await $.wv([$t46], "CABLE", C, false)), "CallProcedure", ["contractsetlastdate", [(await $.mv((await $.idx((await $.mv((await $.wv([$t46], "odsContacts", C, false)), "fields")), [0])), "AsVariant"))]])));
    await $.mcall((await $.wv([$t46], "odsContacts", C, false)), "Close", []);
    await $.mcall((await $.wv([$t46], "odsContacts", C, false)), "Open", []);
    await $.stmt((await $.mcall((await $.wv([$t46], "odsContacts", C, false)), "Locate", ["id", (await $.wv([$t46], "nt", { get: async () => L0["nt"], set: async (v) => { L0["nt"] = v; }, local: true }, false)), []])));
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TCableMan", "EditSrchWorksNumKeyUp", async function EditSrchWorksNumKeyUp(Self, p0, p1, p2) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "key": $.asRef(p1), "shift": $.copyArg(p2), result: undefined};
  await $.fixArgs(L0, ["sender", "shift"]);
  if ($.truthy($.eq((await L0["key"].get()), (await $.v(C, "VK_RETURN"))))) {
    await $.stmt((await $.mcall((await $.mv((await $.v(C, "DataModCable")), "odsAbonents")), "Locate", ["ID", (await $.mcall((await $.mv((await $.v(C, "DataModCable")), "CABLE")), "CallIntegerFunction", ["GetAbonIdByWorksNum", [(await $.mv((L0["sender"]), "text"))]])), [(await $.v(C, "loCaseInsensitive"))]])));
  }
  return L0.result;
}, {"params": ["Sender", "Key", "Shift"], "kind": "procedure", "ptypes": ["TObject", "Word", "TShiftState"]});
  U.method("TCableMan", "N12Click", async function N12Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "r": 0, "cid": 0};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.not((await $.call(C, "assigned", [(await $.v(C, "frmContractAdd"))]))))) {
    await $.set(C, "frmContractAdd", (await $.mcall((await $.v(C, "TfrmContractAdd")), "Create", [Self])));
  }
  {
    const $t47 = (await $.v(C, "DataModCable"));
    const $t48 = (await $.wv([$t47], "frmContractAdd", C, false));
    const $t49 = (await $.wv([$t47, $t48], "odsContacts", C, false));
    await $.wset([$t47, $t48, $t49], "CID", (await $.mv((await $.idx((await $.wv([$t47, $t48, $t49], "Fields", C, false)), [0])), "AsInteger")), { get: async () => L0["cid"], set: async (v) => { L0["cid"] = v; }, local: true });
    await $.mset((await $.wv([$t47, $t48, $t49], "edcontract_num", C, false)), "Text", "");
    await $.mset((await $.wv([$t47, $t48, $t49], "edcontract_num", C, false)), "Text", (await $.mv((await $.mcall((await $.wv([$t47, $t48, $t49], "odsContacts", C, false)), "FieldByName", ["Contract_Num"])), "AsString")));
    await $.mset((await $.wv([$t47, $t48, $t49], "edcard_num", C, false)), "Text", (await $.mv((await $.mcall((await $.wv([$t47, $t48, $t49], "odsContacts", C, false)), "FieldByName", ["CARD_NUM"])), "AsString")));
    await $.mset((await $.wv([$t47, $t48, $t49], "edserie", C, false)), "Text", (await $.mv((await $.mcall((await $.wv([$t47, $t48, $t49], "odsContacts", C, false)), "FieldByName", ["SERIE"])), "AsString")));
    await $.mset((await $.wv([$t47, $t48, $t49], "edworks_num", C, false)), "Text", (await $.mv((await $.mcall((await $.wv([$t47, $t48, $t49], "odsContacts", C, false)), "FieldByName", ["WORKS_NUM"])), "AsString")));
    await $.mset((await $.wv([$t47, $t48, $t49], "edreceiver_num", C, false)), "Text", (await $.mv((await $.mcall((await $.wv([$t47, $t48, $t49], "odsContacts", C, false)), "FieldByName", ["RECEIVER_NUM"])), "AsString")));
    await $.mset((await $.wv([$t47, $t48, $t49], "edcable_length", C, false)), "Text", (await $.mv((await $.mcall((await $.wv([$t47, $t48, $t49], "odsContacts", C, false)), "FieldByName", ["CABLE_LENGTH"])), "AsString")));
    await $.mset((await $.wv([$t47, $t48, $t49], "edamount", C, false)), "Text", (await $.mv((await $.mcall((await $.wv([$t47, $t48, $t49], "odsContacts", C, false)), "FieldByName", ["AMOUNT"])), "AsString")));
    await $.mset((await $.wv([$t47, $t48, $t49], "eddiscount", C, false)), "Text", (await $.mv((await $.mcall((await $.wv([$t47, $t48, $t49], "odsContacts", C, false)), "FieldByName", ["DISCOUNT"])), "AsString")));
    await $.mset((await $.wv([$t47, $t48, $t49], "edDiscDesc", C, false)), "Text", (await $.mv((await $.mcall((await $.wv([$t47, $t48, $t49], "odsContacts", C, false)), "FieldByName", ["DISCOUNT_DESC"])), "AsString")));
    await $.mset((await $.wv([$t47, $t48, $t49], "edinst_date", C, false)), "Enabled", (await $.wv([$t47, $t48, $t49], "true", C, false)));
    await $.mset((await $.wv([$t47, $t48, $t49], "edinst_date", C, false)), "Date", (await $.mv((await $.mcall((await $.wv([$t47, $t48, $t49], "odsContacts", C, false)), "FieldByName", ["INST_DATE"])), "AsDateTime")));
    await $.mset((await $.wv([$t47, $t48, $t49], "edinst_place", C, false)), "itemindex", (await $.mv((await $.mcall((await $.wv([$t47, $t48, $t49], "odsContacts", C, false)), "FieldByName", ["INST_PLACE"])), "AsInteger")));
    await $.mset((await $.wv([$t47, $t48, $t49], "edcurr_code", C, false)), "KeyValue", (await $.mv((await $.mcall((await $.wv([$t47, $t48, $t49], "odsContacts", C, false)), "FieldByName", ["CURR_CODE"])), "AsVariant")));
    await $.mset((await $.wv([$t47, $t48, $t49], "edeng_id", C, false)), "KeyValue", 0);
    await $.mset((await $.wv([$t47, $t48, $t49], "edpack_num", C, false)), "KeyValue", (await $.mv((await $.mcall((await $.wv([$t47, $t48, $t49], "odsContacts", C, false)), "FieldByName", ["PACK_NUM"])), "AsVariant")));
    await $.mset((await $.wv([$t47, $t48, $t49], "edpack_num", C, false)), "Enabled", (await $.wv([$t47, $t48, $t49], "false", C, false)));
    await $.mset((await $.wv([$t47, $t48, $t49], "edSRV_num", C, false)), "Enabled", (await $.wv([$t47, $t48, $t49], "true", C, false)));
    await $.mset((await $.wv([$t47, $t48, $t49], "edAcc_ID", C, false)), "KeyValue", 0);
    await $.mset((await $.wv([$t47, $t48, $t49], "edCalcAg", C, false)), "Checked", (await $.wv([$t47, $t48, $t49], "true", C, false)));
    await $.mset((await $.wv([$t47, $t48, $t49], "edCalcAg", C, false)), "Enabled", (await $.wv([$t47, $t48, $t49], "false", C, false)));
    if ($.truthy(($.eq((await $.mv((await $.wv([$t47, $t48, $t49], "frmContractAdd", C, false)), "ShowModal")), 1)))) {
      await $.wset([$t47, $t48, $t49], "r", (await $.mcall((await $.wv([$t47, $t48, $t49], "CABLE", C, false)), "CallIntegerFunction", ["ContractAdditional", [(await $.mv((await $.wv([$t47, $t48, $t49], "edcontract_num", C, false)), "Text")), (await $.mv((await $.wv([$t47, $t48, $t49], "edcard_num", C, false)), "Text")), (await $.mv((await $.idx((await $.mv((await $.wv([$t47, $t48, $t49], "odsAbonents", C, false)), "Fields")), [0])), "AsVariant")), (await $.wcall([$t47, $t48, $t49], "Tdatetime", [(await $.mv((await $.wv([$t47, $t48, $t49], "edinst_date", C, false)), "DateTime"))], C)), (await $.mv((await $.wv([$t47, $t48, $t49], "edinst_place", C, false)), "itemindex")), (await $.mv((await $.wv([$t47, $t48, $t49], "edserie", C, false)), "Text")), (await $.mv((await $.wv([$t47, $t48, $t49], "edworks_num", C, false)), "Text")), (await $.mv((await $.wv([$t47, $t48, $t49], "edreceiver_num", C, false)), "Text")), (await $.mv((await $.wv([$t47, $t48, $t49], "edcable_length", C, false)), "Text")), (await $.mv((await $.wv([$t47, $t48, $t49], "edamount", C, false)), "value")), (await $.mv((await $.wv([$t47, $t48, $t49], "edcurr_code", C, false)), "KeyValue")), (await $.mv((await $.wv([$t47, $t48, $t49], "eddiscount", C, false)), "Text")), (await $.mv((await $.wv([$t47, $t48, $t49], "edeng_id", C, false)), "KeyValue")), (await $.mv((await $.wv([$t47, $t48, $t49], "edpack_num", C, false)), "KeyValue")), (await $.mv((await $.wv([$t47, $t48, $t49], "edAcc_ID", C, false)), "KeyValue")), (await $.wcall([$t47, $t48, $t49], "Integer", [(await $.mv((await $.wv([$t47, $t48, $t49], "edCalcAg", C, false)), "Checked"))], C)), (await $.mv((await $.wv([$t47, $t48, $t49], "edDiscDesc", C, false)), "Text")), (await $.wcall([$t47, $t48, $t49], "Tdatetime", [(await $.mv((await $.wv([$t47, $t48, $t49], "edexp_date", C, false)), "DateTime"))], C)), (await $.wv([$t47, $t48, $t49], "CID", { get: async () => L0["cid"], set: async (v) => { L0["cid"] = v; }, local: true }, false)), (await $.mv((await $.wv([$t47, $t48, $t49], "edSRV_num", C, false)), "KeyValue"))]])), { get: async () => L0["r"], set: async (v) => { L0["r"] = v; }, local: true });
      await $.mcall((await $.wv([$t47, $t48, $t49], "odsContacts", C, false)), "Close", []);
      await $.mcall((await $.wv([$t47, $t48, $t49], "odsContacts", C, false)), "Open", []);
      await $.stmt((await $.wcall([$t47, $t48, $t49], "Locate", ["ID", (await $.wv([$t47, $t48, $t49], "CID", { get: async () => L0["cid"], set: async (v) => { L0["cid"] = v; }, local: true }, false)), []], C)));
    }
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  return U;
}
