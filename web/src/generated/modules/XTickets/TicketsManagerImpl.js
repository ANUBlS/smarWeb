// Generated from TicketsManagerImpl.pas by pas2js — do not edit by hand; regenerate instead.
/* eslint-disable */
// @ts-nocheck

export default function define($) {
  const U = $.unit("TicketsManagerImpl", ["Windows", "Messages", "SysUtils", "Classes", "Graphics", "Controls", "Forms", "LDialogs", "ActiveX", "AxCtrls", "TicketsManagerProj_TLB", "StdVcl", "ToolWin", "ComCtrls", "ExtCtrls", "Grids", "DBGrids", "ImgList", "ActnList", "Db", "Menus", "IniFiles", "SBTranslateProc", "ComObj", "ComServ", "DataModTM", "TicketsFullViewImpl", "TicketsArchiveImpl", "TicketsNewImpl", "TicketsRepImpl", "TicketsReportSettings"]);
  const C = [U];
  U.defClass("TTicketsManager", "TActiveForm", {"panel1": {"name": "Panel1", "type": "TPanel"}, "grtickets": {"name": "grTickets", "type": "TDBGrid"}, "imgstm": {"name": "imgsTM", "type": "TImageList"}, "actstm": {"name": "actsTM", "type": "TActionList"}, "actrefreshtickets": {"name": "actRefreshTickets", "type": "TAction"}, "coolbar1": {"name": "CoolBar1", "type": "TCoolBar"}, "toolbar1": {"name": "ToolBar1", "type": "TToolBar"}, "toolbutton1": {"name": "ToolButton1", "type": "TToolButton"}, "actshowfull": {"name": "actShowFull", "type": "TAction"}, "toolbutton2": {"name": "ToolButton2", "type": "TToolButton"}, "actopenarchive": {"name": "actOpenArchive", "type": "TAction"}, "toolbutton3": {"name": "ToolButton3", "type": "TToolButton"}, "actcommittickets": {"name": "actCommitTickets", "type": "TAction"}, "toolbutton4": {"name": "ToolButton4", "type": "TToolButton"}, "toolbutton5": {"name": "ToolButton5", "type": "TToolButton"}, "actnewticket": {"name": "actNewTicket", "type": "TAction"}, "acteditticket": {"name": "actEditTicket", "type": "TAction"}, "toolbutton6": {"name": "ToolButton6", "type": "TToolButton"}, "toolbutton7": {"name": "ToolButton7", "type": "TToolButton"}, "toolbutton8": {"name": "ToolButton8", "type": "TToolButton"}, "ticketsmenu": {"name": "TicketsMenu", "type": "TPopupMenu"}, "n1": {"name": "N1", "type": "TMenuItem"}, "n2": {"name": "N2", "type": "TMenuItem"}, "n3": {"name": "N3", "type": "TMenuItem"}, "n4": {"name": "N4", "type": "TMenuItem"}, "n5": {"name": "N5", "type": "TMenuItem"}, "n6": {"name": "N6", "type": "TMenuItem"}, "n7": {"name": "N7", "type": "TMenuItem"}, "n8": {"name": "N8", "type": "TMenuItem"}, "actsettings": {"name": "actSettings", "type": "TAction"}, "toolbutton9": {"name": "ToolButton9", "type": "TToolButton"}, "toolbutton10": {"name": "ToolButton10", "type": "TToolButton"}, "fevents": {"name": "FEvents", "type": "ITicketsManagerEvents"}}, {});
  U.init(async () => {
  });
  U.method("TTicketsManager", "DefinePropertyPages", async function DefinePropertyPages(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"definepropertypage": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["definepropertypage"]);
  return L0.result;
}, {"params": ["DefinePropertyPage"], "kind": "procedure", "ptypes": ["TDefinePropertyPage"]});
  U.method("TTicketsManager", "EventSinkChanged", async function EventSinkChanged(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"eventsink": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["eventsink"]);
  await $.set(C, "FEvents", L0["eventsink"]);
  return L0.result;
}, {"params": ["EventSink"], "kind": "procedure", "ptypes": ["IUnknown"]});
  U.method("TTicketsManager", "Initialize", async function Initialize(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: undefined};
  await $.inherited(Self, "TTicketsManager", "Initialize", null, arguments);
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
  U.method("TTicketsManager", "Get_Active", async function Get_Active(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: false};
  L0["result"] = (await $.v(C, "Active"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TTicketsManager", "Get_AutoScroll", async function Get_AutoScroll(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: false};
  L0["result"] = (await $.v(C, "AutoScroll"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TTicketsManager", "Get_AutoSize", async function Get_AutoSize(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: false};
  L0["result"] = (await $.v(C, "AutoSize"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TTicketsManager", "Get_AxBorderStyle", async function Get_AxBorderStyle(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: null};
  L0["result"] = (await $.call(C, "Ord", [(await $.v(C, "AxBorderStyle"))]));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TTicketsManager", "Get_Caption", async function Get_Caption(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: ''};
  L0["result"] = (await $.call(C, "WideString", [(await $.v(C, "Caption"))]));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TTicketsManager", "Get_Color", async function Get_Color(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: null};
  L0["result"] = (await $.call(C, "OLE_COLOR", [(await $.v(C, "Color"))]));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TTicketsManager", "Get_Cursor", async function Get_Cursor(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: 0};
  L0["result"] = (await $.call(C, "Smallint", [(await $.v(C, "Cursor"))]));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TTicketsManager", "Get_DoubleBuffered", async function Get_DoubleBuffered(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: false};
  L0["result"] = (await $.v(C, "DoubleBuffered"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TTicketsManager", "Get_DropTarget", async function Get_DropTarget(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: false};
  L0["result"] = (await $.v(C, "DropTarget"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TTicketsManager", "Get_Enabled", async function Get_Enabled(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: false};
  L0["result"] = (await $.v(C, "Enabled"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TTicketsManager", "Get_Font", async function Get_Font(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: null};
  await $.stmt((await $.call(C, "GetOleFont", [(await $.v(C, "Font")), L0["result"]])));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TTicketsManager", "Get_HelpFile", async function Get_HelpFile(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: ''};
  L0["result"] = (await $.call(C, "WideString", [(await $.v(C, "HelpFile"))]));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TTicketsManager", "Get_KeyPreview", async function Get_KeyPreview(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: false};
  L0["result"] = (await $.v(C, "KeyPreview"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TTicketsManager", "Get_PixelsPerInch", async function Get_PixelsPerInch(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: 0};
  L0["result"] = (await $.v(C, "PixelsPerInch"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TTicketsManager", "Get_PrintScale", async function Get_PrintScale(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: null};
  L0["result"] = (await $.call(C, "Ord", [(await $.v(C, "PrintScale"))]));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TTicketsManager", "Get_Scaled", async function Get_Scaled(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: false};
  L0["result"] = (await $.v(C, "Scaled"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TTicketsManager", "Get_Visible", async function Get_Visible(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: false};
  L0["result"] = (await $.v(C, "Visible"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TTicketsManager", "Get_VisibleDockClientCount", async function Get_VisibleDockClientCount(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: 0};
  L0["result"] = (await $.v(C, "VisibleDockClientCount"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TTicketsManager", "_Set_Font", async function _Set_Font(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.stmt((await $.call(C, "SetOleFont", [(await $.v(C, "Font")), L0["value"]])));
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["IFontDisp"]});
  U.method("TTicketsManager", "ActivateEvent", async function ActivateEvent(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.ne((await $.v(C, "FEvents")), null))) {
    await $.mcall((await $.v(C, "FEvents")), "OnActivate", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TTicketsManager", "ClickEvent", async function ClickEvent(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.ne((await $.v(C, "FEvents")), null))) {
    await $.mcall((await $.v(C, "FEvents")), "OnClick", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TTicketsManager", "CreateEvent", async function CreateEvent(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.ne((await $.v(C, "FEvents")), null))) {
    await $.mcall((await $.v(C, "FEvents")), "OnCreate", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TTicketsManager", "DblClickEvent", async function DblClickEvent(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.ne((await $.v(C, "FEvents")), null))) {
    await $.mcall((await $.v(C, "FEvents")), "OnDblClick", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TTicketsManager", "DeactivateEvent", async function DeactivateEvent(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.ne((await $.v(C, "FEvents")), null))) {
    await $.mcall((await $.v(C, "FEvents")), "OnDeactivate", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TTicketsManager", "DestroyEvent", async function DestroyEvent(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.ne((await $.v(C, "FEvents")), null))) {
    await $.mcall((await $.v(C, "FEvents")), "OnDestroy", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TTicketsManager", "KeyPressEvent", async function KeyPressEvent(Self, p0, p1) {
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
  U.method("TTicketsManager", "PaintEvent", async function PaintEvent(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.ne((await $.v(C, "FEvents")), null))) {
    await $.mcall((await $.v(C, "FEvents")), "OnPaint", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TTicketsManager", "Set_AutoScroll", async function Set_AutoScroll(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "AutoScroll", L0["value"]);
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["WordBool"]});
  U.method("TTicketsManager", "Set_AutoSize", async function Set_AutoSize(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "AutoSize", L0["value"]);
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["WordBool"]});
  U.method("TTicketsManager", "Set_AxBorderStyle", async function Set_AxBorderStyle(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "AxBorderStyle", (await $.call(C, "TActiveFormBorderStyle", [L0["value"]])));
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["TxActiveFormBorderStyle"]});
  U.method("TTicketsManager", "Set_Caption", async function Set_Caption(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "Caption", (await $.call(C, "TCaption", [L0["value"]])));
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["WideString"]});
  U.method("TTicketsManager", "Set_Color", async function Set_Color(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "Color", (await $.call(C, "TColor", [L0["value"]])));
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["OLE_COLOR"]});
  U.method("TTicketsManager", "Set_Cursor", async function Set_Cursor(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "Cursor", (await $.call(C, "TCursor", [L0["value"]])));
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["Smallint"]});
  U.method("TTicketsManager", "Set_DoubleBuffered", async function Set_DoubleBuffered(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "DoubleBuffered", L0["value"]);
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["WordBool"]});
  U.method("TTicketsManager", "Set_DropTarget", async function Set_DropTarget(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "DropTarget", L0["value"]);
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["WordBool"]});
  U.method("TTicketsManager", "Set_Enabled", async function Set_Enabled(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "Enabled", L0["value"]);
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["WordBool"]});
  U.method("TTicketsManager", "Set_Font", async function Set_Font(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.asRef(p0), result: undefined};
  await $.stmt((await $.call(C, "SetOleFont", [(await $.v(C, "Font")), (await L0["value"].get())])));
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["IFontDisp"]});
  U.method("TTicketsManager", "Set_HelpFile", async function Set_HelpFile(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "HelpFile", (await $.call(C, "String", [L0["value"]])));
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["WideString"]});
  U.method("TTicketsManager", "Set_KeyPreview", async function Set_KeyPreview(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "KeyPreview", L0["value"]);
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["WordBool"]});
  U.method("TTicketsManager", "Set_PixelsPerInch", async function Set_PixelsPerInch(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "PixelsPerInch", L0["value"]);
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["Integer"]});
  U.method("TTicketsManager", "Set_PrintScale", async function Set_PrintScale(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "PrintScale", (await $.call(C, "TPrintScale", [L0["value"]])));
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["TxPrintScale"]});
  U.method("TTicketsManager", "Set_Scaled", async function Set_Scaled(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "Scaled", L0["value"]);
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["WordBool"]});
  U.method("TTicketsManager", "Set_Visible", async function Set_Visible(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "Visible", L0["value"]);
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["WordBool"]});
  U.method("TTicketsManager", "ActiveFormCreate", async function ActiveFormCreate(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.set(C, "DataModuleTicketMan", (await $.mcall((await $.v(C, "TDataModuleTicketMan")), "Create", [Self])));
  await $.set(C, "frmTicketFullView", (await $.mcall((await $.v(C, "TfrmTicketFullView")), "Create", [Self])));
  await $.set(C, "frmArchive", (await $.mcall((await $.v(C, "TfrmArchive")), "Create", [Self])));
  await $.set(C, "frmNewTicket", (await $.mcall((await $.v(C, "TfrmNewTicket")), "Create", [Self])));
  await $.set(C, "frmSettings", (await $.mcall((await $.v(C, "TfrmSettings")), "Create", [Self])));
  await $.set(C, "qrpTicket", (await $.mcall((await $.v(C, "TqrpTicket")), "Create", [Self])));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TTicketsManager", "actRefreshTicketsExecute", async function actRefreshTicketsExecute(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t1 = (await $.mv((await $.v(C, "DataModuleTicketMan")), "ODSTickets"));
    if ($.truthy((await $.wv([$t1], "Active", C, false)))) {
      await $.stmt($.wcall([$t1], "Close", [], C));
    }
    await $.stmt($.wcall([$t1], "Open", [], C));
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TTicketsManager", "actShowFullExecute", async function actShowFullExecute(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mcall((await $.v(C, "frmTicketFullView")), "ShowModal", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TTicketsManager", "actOpenArchiveExecute", async function actOpenArchiveExecute(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t2 = (await $.v(C, "DataModuleTicketMan"));
    const $t3 = (await $.wv([$t2], "ODSArchive", C, false));
    if ($.truthy((await $.wv([$t2, $t3], "Active", C, false)))) {
      await $.stmt($.wcall([$t2, $t3], "Close", [], C));
    }
    await $.stmt($.wcall([$t2, $t3], "Open", [], C));
    await $.mcall((await $.wv([$t2, $t3], "frmArchive", C, false)), "ShowModal", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TTicketsManager", "actCommitTicketsExecute", async function actCommitTicketsExecute(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "i": 0, "msgstr": '', "f": null};
  await $.fixArgs(L0, ["sender"]);
  L0["f"] = (await $.mcall((await $.v(C, "TIniFile")), "Create", [$.add((await $.call(C, "ExtractFilePath", [(await $.call(C, "paramstr", [0]))])), "tman.ini")]));
  if ($.truthy($.eq((await $.mv((await $.mv((await $.v(C, "DataModuleTicketMan")), "ODSTicketsSTATUS")), "AsInteger")), 5))) {
    L0["msgstr"] = (await $.call(C, "stringreplace", [(await $.mcall(L0["f"], "ReadString", ["tm", "commithoks", $.add($.add("Tiketlər təsdiqləndikdən sonra XÖHKS-a əməliyyat gegedəcək.", "\r\n"), "Əminsiniz?")])), "#13#10", "\r\n", []]));
  } else {
    L0["msgstr"] = (await $.mcall(L0["f"], "ReadString", ["tm", "committckt", "Tiketlər təsdiqlənsin?"]));
  }
  if ($.truthy($.eq((await $.mcall(L0["f"], "ReadString", ["tm", "commithoks", ""])), ""))) {
    await $.stmt((await $.mcall(L0["f"], "WriteString", ["tm", "commithoks", $.add($.add("Tiketlər təsdiqləndikdən sonra XÖHKS-a əməliyyat gegedəcək.", "\r\n"), "Əminsiniz?")])));
  }
  if ($.truthy($.eq((await $.mcall(L0["f"], "ReadString", ["tm", "committckt", ""])), ""))) {
    await $.stmt((await $.mcall(L0["f"], "WriteString", ["tm", "committckt", "Tiketlər təsdiqlənsin?"])));
  }
  if ($.truthy($.ne((await $.call(C, "MessageDlg", [L0["msgstr"], (await $.v(C, "mtConfirmation")), [(await $.v(C, "mbYes")), (await $.v(C, "mbNo"))], 0])), (await $.v(C, "IDYES"))))) {
    return L0.result;
  }
  {
    const $t4 = (await $.v(C, "grTickets"));
    const $t5 = (await $.wv([$t4], "SelectedRows", C, false));
    const $t6 = (await $.mv((await $.wv([$t4, $t5], "DataSource", C, false)), "DataSet"));
    const $t7 = (await $.wv([$t4, $t5, $t6], "DataModuleTicketMan", C, false));
    const $t8 = (await $.wv([$t4, $t5, $t6, $t7], "tm_manage", C, false));
    { const $t9 = $.sub((await $.wv([$t4, $t5, $t6, $t7, $t8], "Count", C, false)), 1);
      await $.wset([$t4, $t5, $t6, $t7, $t8], "i", 0, { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true });
      let $t10 = true;
      for (;;) {
        if (!$t10) { await $.wset([$t4, $t5, $t6, $t7, $t8], "i", $.succ((await $.wv([$t4, $t5, $t6, $t7, $t8], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false)), 1), { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }); }
        $t10 = false;
        if (!($.ord((await $.wv([$t4, $t5, $t6, $t7, $t8], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false))) <= $.ord($t9))) break;
        await $.stmt((await $.wcall([$t4, $t5, $t6, $t7, $t8], "GotoBookmark", [(await $.wcall([$t4, $t5, $t6, $t7, $t8], "TBookmark", [(await $.idx((await $.wv([$t4, $t5, $t6, $t7, $t8], "Items", C, false)), [(await $.wv([$t4, $t5, $t6, $t7, $t8], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false))]))], C))], C)));
        await $.stmt((await $.wcall([$t4, $t5, $t6, $t7, $t8], "CallProcedure", ["committicket", [(await $.mv((await $.wv([$t4, $t5, $t6, $t7, $t8], "ODSTicketsID", C, false)), "AsVariant"))]], C)));
        await $.tick();
      }
    }
    await $.stmt($.wcall([$t4, $t5, $t6, $t7, $t8], "Close", [], C));
    await $.stmt($.wcall([$t4, $t5, $t6, $t7, $t8], "Open", [], C));
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TTicketsManager", "actNewTicketExecute", async function actNewTicketExecute(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t11 = (await $.v(C, "frmNewTicket"));
    const $t12 = (await $.mv((await $.wv([$t11], "DataModuleTicketMan", C, false)), "ODSAllTickets"));
    await $.mset((await $.wv([$t11, $t12], "edTicketDate", C, false)), "Date", (await $.wv([$t11, $t12], "Now", C, false)));
    if ($.truthy($.not((await $.wv([$t11, $t12], "active", C, false))))) {
      await $.stmt($.wcall([$t11, $t12], "Open", [], C));
    }
    await $.stmt($.wcall([$t11, $t12], "Insert", [], C));
    await $.stmt($.wcall([$t11, $t12], "ShowModal", [], C));
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TTicketsManager", "actEditTicketExecute", async function actEditTicketExecute(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t13 = (await $.v(C, "frmNewTicket"));
    const $t14 = (await $.wv([$t13], "DataModuleTicketMan", C, false));
    const $t15 = (await $.wv([$t13, $t14], "ODSAllTickets", C, false));
    if ($.truthy((await $.wv([$t13, $t14, $t15], "active", C, false)))) {
      await $.stmt($.wcall([$t13, $t14, $t15], "close", [], C));
    }
    await $.stmt($.wcall([$t13, $t14, $t15], "open", [], C));
    await $.stmt((await $.wcall([$t13, $t14, $t15], "Locate", ["ID", (await $.mv((await $.wv([$t13, $t14, $t15], "ODSTicketsID", C, false)), "AsVariant")), []], C)));
    await $.stmt($.wcall([$t13, $t14, $t15], "Edit", [], C));
    await $.stmt($.wcall([$t13, $t14, $t15], "ShowModal", [], C));
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TTicketsManager", "N4DrawItem", async function N4DrawItem(Self, p0, p1, p2, p3) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "acanvas": $.copyArg(p1), "arect": $.copyArg(p2), "selected": $.copyArg(p3), result: undefined, "linebottom": 0, "stext": '', "bar": null};
  await $.fixArgs(L0, ["sender", "acanvas", "arect", "selected"]);
  {
    const $t16 = L0["acanvas"];
    const $t17 = (await $.wv([$t16], "Sender", { get: async () => L0["sender"], set: async (v) => { L0["sender"] = v; }, local: true }, false));
    {
      const $t18 = (await $.wv([$t16, $t17], "Font", C, false));
      await $.wset([$t16, $t17, $t18], "Name", "Azl Sans Serif", C);
      await $.wset([$t16, $t17, $t18], "Charset", (await $.wv([$t16, $t17, $t18], "RUSSIAN_CHARSET", C, false)), C);
      if ($.truthy((await $.wv([$t16, $t17, $t18], "Default", C, false)))) {
        await $.wset([$t16, $t17, $t18], "Style", [(await $.wv([$t16, $t17, $t18], "fsBold", C, false))], C);
      }
    }
    if ($.truthy($.eq((await $.wv([$t16, $t17], "Caption", C, false)), "-"))) {
      await $.mset((await $.wv([$t16, $t17], "Pen", C, false)), "Color", (await $.wv([$t16, $t17], "clBlack", C, false)));
      await $.wset([$t16, $t17], "LineBottom", $.sub(($.add((await $.mv((await $.wv([$t16, $t17], "ARect", { get: async () => L0["arect"], set: async (v) => { L0["arect"] = v; }, local: true }, false)), "Top")), $.idiv(($.sub((await $.mv((await $.wv([$t16, $t17], "ARect", { get: async () => L0["arect"], set: async (v) => { L0["arect"] = v; }, local: true }, false)), "Bottom")), (await $.mv((await $.wv([$t16, $t17], "ARect", { get: async () => L0["arect"], set: async (v) => { L0["arect"] = v; }, local: true }, false)), "Top")))), 2))), 1), { get: async () => L0["linebottom"], set: async (v) => { L0["linebottom"] = v; }, local: true });
      await $.stmt((await $.wcall([$t16, $t17], "MoveTo", [(await $.mv((await $.wv([$t16, $t17], "ARect", { get: async () => L0["arect"], set: async (v) => { L0["arect"] = v; }, local: true }, false)), "Left")), (await $.wv([$t16, $t17], "LineBottom", { get: async () => L0["linebottom"], set: async (v) => { L0["linebottom"] = v; }, local: true }, false))], C)));
      await $.stmt((await $.wcall([$t16, $t17], "LineTo", [(await $.mv((await $.wv([$t16, $t17], "ARect", { get: async () => L0["arect"], set: async (v) => { L0["arect"] = v; }, local: true }, false)), "Right")), (await $.wv([$t16, $t17], "LineBottom", { get: async () => L0["linebottom"], set: async (v) => { L0["linebottom"] = v; }, local: true }, false))], C)));
      await $.stmt((await $.wcall([$t16, $t17], "inc", [$.ref(async () => (await $.wv([$t16, $t17], "LineBottom", { get: async () => L0["linebottom"], set: async (v) => { L0["linebottom"] = v; }, local: true }, false)), async ($t19) => { await $.wset([$t16, $t17], "LineBottom", $t19, { get: async () => L0["linebottom"], set: async (v) => { L0["linebottom"] = v; }, local: true }); })], C)));
      await $.mset((await $.wv([$t16, $t17], "Pen", C, false)), "Color", (await $.wv([$t16, $t17], "clWhite", C, false)));
      await $.stmt((await $.wcall([$t16, $t17], "MoveTo", [(await $.mv((await $.wv([$t16, $t17], "ARect", { get: async () => L0["arect"], set: async (v) => { L0["arect"] = v; }, local: true }, false)), "Left")), (await $.wv([$t16, $t17], "LineBottom", { get: async () => L0["linebottom"], set: async (v) => { L0["linebottom"] = v; }, local: true }, false))], C)));
      await $.stmt((await $.wcall([$t16, $t17], "LineTo", [(await $.mv((await $.wv([$t16, $t17], "ARect", { get: async () => L0["arect"], set: async (v) => { L0["arect"] = v; }, local: true }, false)), "Right")), (await $.wv([$t16, $t17], "LineBottom", { get: async () => L0["linebottom"], set: async (v) => { L0["linebottom"] = v; }, local: true }, false))], C)));
    } else {
      if ($.truthy((await $.wv([$t16, $t17], "Selected", { get: async () => L0["selected"], set: async (v) => { L0["selected"] = v; }, local: true }, false)))) {
        await $.mset((await $.wv([$t16, $t17], "Brush", C, false)), "Color", (await $.wv([$t16, $t17], "clNavy", C, false)));
        if ($.truthy((await $.wv([$t16, $t17], "Enabled", C, false)))) {
          await $.mset((await $.wv([$t16, $t17], "Font", C, false)), "Color", (await $.wv([$t16, $t17], "clWhite", C, false)));
        } else {
          await $.mset((await $.wv([$t16, $t17], "Font", C, false)), "Color", (await $.wv([$t16, $t17], "clSilver", C, false)));
        }
      } else {
        await $.mset((await $.wv([$t16, $t17], "Brush", C, false)), "Color", (await $.wv([$t16, $t17], "clBtnFace", C, false)));
        if ($.truthy((await $.wv([$t16, $t17], "Enabled", C, false)))) {
          await $.mset((await $.wv([$t16, $t17], "Font", C, false)), "Color", (await $.wv([$t16, $t17], "clBlack", C, false)));
        } else {
          await $.mset((await $.wv([$t16, $t17], "Font", C, false)), "Color", (await $.wv([$t16, $t17], "clGrayText", C, false)));
        }
      }
      await $.wset([$t16, $t17], "Bar", (await $.wv([$t16, $t17], "ARect", { get: async () => L0["arect"], set: async (v) => { L0["arect"] = v; }, local: true }, false)), { get: async () => L0["bar"], set: async (v) => { L0["bar"] = v; }, local: true });
      await $.stmt((await $.wcall([$t16, $t17], "Inc", [$.ref(async () => (await $.mv((await $.wv([$t16, $t17], "Bar", { get: async () => L0["bar"], set: async (v) => { L0["bar"] = v; }, local: true }, false)), "Left")), async ($t20) => { await $.mset((await $.wv([$t16, $t17], "Bar", { get: async () => L0["bar"], set: async (v) => { L0["bar"] = v; }, local: true }, false)), "Left", $t20); }), 22], C)));
      await $.stmt((await $.wcall([$t16, $t17], "FillRect", [(await $.wv([$t16, $t17], "Bar", { get: async () => L0["bar"], set: async (v) => { L0["bar"] = v; }, local: true }, false))], C)));
      await $.stmt((await $.wcall([$t16, $t17], "TextOut", [$.add((await $.mv((await $.wv([$t16, $t17], "ARect", { get: async () => L0["arect"], set: async (v) => { L0["arect"] = v; }, local: true }, false)), "Left")), 22), $.add((await $.mv((await $.wv([$t16, $t17], "ARect", { get: async () => L0["arect"], set: async (v) => { L0["arect"] = v; }, local: true }, false)), "Top")), 1), (await $.wv([$t16, $t17], "Caption", C, false))], C)));
    }
    await $.wset([$t16, $t17], "SText", (await $.wcall([$t16, $t17], "ShortCutToText", [(await $.wv([$t16, $t17], "ShortCut", C, false))], C)), { get: async () => L0["stext"], set: async (v) => { L0["stext"] = v; }, local: true });
    await $.stmt((await $.wcall([$t16, $t17], "TextOut", [$.sub($.sub((await $.mv((await $.wv([$t16, $t17], "ARect", { get: async () => L0["arect"], set: async (v) => { L0["arect"] = v; }, local: true }, false)), "Right")), (await $.wcall([$t16, $t17], "TextWidth", [(await $.wv([$t16, $t17], "SText", { get: async () => L0["stext"], set: async (v) => { L0["stext"] = v; }, local: true }, false))], C))), 2), $.add((await $.mv((await $.wv([$t16, $t17], "ARect", { get: async () => L0["arect"], set: async (v) => { L0["arect"] = v; }, local: true }, false)), "Top")), 1), (await $.wv([$t16, $t17], "SText", { get: async () => L0["stext"], set: async (v) => { L0["stext"] = v; }, local: true }, false))], C)));
    if ($.truthy($.ne((await $.wv([$t16, $t17], "ImageIndex", C, false)), (-(1))))) {
      {
        const $t21 = (await $.wv([$t16, $t17], "GetParentMenu", C, false));
        if ($.truthy((await $.wcall([$t16, $t17, $t21], "Assigned", [(await $.wv([$t16, $t17, $t21], "Images", C, false))], C)))) {
          if ($.truthy((await $.wv([$t16, $t17, $t21], "Checked", C, false)))) {
            await $.mset((await $.wv([$t16, $t17, $t21], "Bar", { get: async () => L0["bar"], set: async (v) => { L0["bar"] = v; }, local: true }, false)), "Left", $.add((await $.mv((await $.wv([$t16, $t17, $t21], "ARect", { get: async () => L0["arect"], set: async (v) => { L0["arect"] = v; }, local: true }, false)), "Left")), 1));
            await $.mset((await $.wv([$t16, $t17, $t21], "Bar", { get: async () => L0["bar"], set: async (v) => { L0["bar"] = v; }, local: true }, false)), "Right", $.add((await $.mv((await $.wv([$t16, $t17, $t21], "Bar", { get: async () => L0["bar"], set: async (v) => { L0["bar"] = v; }, local: true }, false)), "Left")), 16));
            await $.mset((await $.wv([$t16, $t17, $t21], "Bar", { get: async () => L0["bar"], set: async (v) => { L0["bar"] = v; }, local: true }, false)), "Top", $.add((await $.mv((await $.wv([$t16, $t17, $t21], "ARect", { get: async () => L0["arect"], set: async (v) => { L0["arect"] = v; }, local: true }, false)), "Top")), 1));
            await $.mset((await $.wv([$t16, $t17, $t21], "Bar", { get: async () => L0["bar"], set: async (v) => { L0["bar"] = v; }, local: true }, false)), "Bottom", $.add((await $.mv((await $.wv([$t16, $t17, $t21], "Bar", { get: async () => L0["bar"], set: async (v) => { L0["bar"] = v; }, local: true }, false)), "Top")), 16));
            await $.mset((await $.mv((await $.wv([$t16, $t17, $t21], "ACanvas", { get: async () => L0["acanvas"], set: async (v) => { L0["acanvas"] = v; }, local: true }, false)), "Brush")), "Color", (await $.wv([$t16, $t17, $t21], "clBtnShadow", C, false)));
            await $.stmt((await $.mcall((await $.wv([$t16, $t17, $t21], "ACanvas", { get: async () => L0["acanvas"], set: async (v) => { L0["acanvas"] = v; }, local: true }, false)), "FrameRect", [(await $.wv([$t16, $t17, $t21], "Bar", { get: async () => L0["bar"], set: async (v) => { L0["bar"] = v; }, local: true }, false))])));
            await $.stmt((await $.wcall([$t16, $t17, $t21], "Inc", [$.ref(async () => (await $.mv((await $.wv([$t16, $t17, $t21], "Bar", { get: async () => L0["bar"], set: async (v) => { L0["bar"] = v; }, local: true }, false)), "Left")), async ($t22) => { await $.mset((await $.wv([$t16, $t17, $t21], "Bar", { get: async () => L0["bar"], set: async (v) => { L0["bar"] = v; }, local: true }, false)), "Left", $t22); }), 2], C)));
            await $.stmt((await $.wcall([$t16, $t17, $t21], "Inc", [$.ref(async () => (await $.mv((await $.wv([$t16, $t17, $t21], "Bar", { get: async () => L0["bar"], set: async (v) => { L0["bar"] = v; }, local: true }, false)), "Right")), async ($t23) => { await $.mset((await $.wv([$t16, $t17, $t21], "Bar", { get: async () => L0["bar"], set: async (v) => { L0["bar"] = v; }, local: true }, false)), "Right", $t23); }), 2], C)));
            await $.stmt((await $.wcall([$t16, $t17, $t21], "Inc", [$.ref(async () => (await $.mv((await $.wv([$t16, $t17, $t21], "Bar", { get: async () => L0["bar"], set: async (v) => { L0["bar"] = v; }, local: true }, false)), "Top")), async ($t24) => { await $.mset((await $.wv([$t16, $t17, $t21], "Bar", { get: async () => L0["bar"], set: async (v) => { L0["bar"] = v; }, local: true }, false)), "Top", $t24); }), 2], C)));
            await $.stmt((await $.wcall([$t16, $t17, $t21], "Inc", [$.ref(async () => (await $.mv((await $.wv([$t16, $t17, $t21], "Bar", { get: async () => L0["bar"], set: async (v) => { L0["bar"] = v; }, local: true }, false)), "Bottom")), async ($t25) => { await $.mset((await $.wv([$t16, $t17, $t21], "Bar", { get: async () => L0["bar"], set: async (v) => { L0["bar"] = v; }, local: true }, false)), "Bottom", $t25); }), 2], C)));
            await $.mset((await $.mv((await $.wv([$t16, $t17, $t21], "ACanvas", { get: async () => L0["acanvas"], set: async (v) => { L0["acanvas"] = v; }, local: true }, false)), "Brush")), "Color", (await $.wv([$t16, $t17, $t21], "clBtnHighlight", C, false)));
            await $.stmt((await $.mcall((await $.wv([$t16, $t17, $t21], "ACanvas", { get: async () => L0["acanvas"], set: async (v) => { L0["acanvas"] = v; }, local: true }, false)), "FrameRect", [(await $.wv([$t16, $t17, $t21], "Bar", { get: async () => L0["bar"], set: async (v) => { L0["bar"] = v; }, local: true }, false))])));
            await $.stmt((await $.wcall([$t16, $t17, $t21], "Dec", [$.ref(async () => (await $.mv((await $.wv([$t16, $t17, $t21], "Bar", { get: async () => L0["bar"], set: async (v) => { L0["bar"] = v; }, local: true }, false)), "Left")), async ($t26) => { await $.mset((await $.wv([$t16, $t17, $t21], "Bar", { get: async () => L0["bar"], set: async (v) => { L0["bar"] = v; }, local: true }, false)), "Left", $t26); }), 1], C)));
            await $.stmt((await $.wcall([$t16, $t17, $t21], "Dec", [$.ref(async () => (await $.mv((await $.wv([$t16, $t17, $t21], "Bar", { get: async () => L0["bar"], set: async (v) => { L0["bar"] = v; }, local: true }, false)), "Right")), async ($t27) => { await $.mset((await $.wv([$t16, $t17, $t21], "Bar", { get: async () => L0["bar"], set: async (v) => { L0["bar"] = v; }, local: true }, false)), "Right", $t27); }), 1], C)));
            await $.stmt((await $.wcall([$t16, $t17, $t21], "Dec", [$.ref(async () => (await $.mv((await $.wv([$t16, $t17, $t21], "Bar", { get: async () => L0["bar"], set: async (v) => { L0["bar"] = v; }, local: true }, false)), "Top")), async ($t28) => { await $.mset((await $.wv([$t16, $t17, $t21], "Bar", { get: async () => L0["bar"], set: async (v) => { L0["bar"] = v; }, local: true }, false)), "Top", $t28); }), 1], C)));
            await $.stmt((await $.wcall([$t16, $t17, $t21], "Dec", [$.ref(async () => (await $.mv((await $.wv([$t16, $t17, $t21], "Bar", { get: async () => L0["bar"], set: async (v) => { L0["bar"] = v; }, local: true }, false)), "Bottom")), async ($t29) => { await $.mset((await $.wv([$t16, $t17, $t21], "Bar", { get: async () => L0["bar"], set: async (v) => { L0["bar"] = v; }, local: true }, false)), "Bottom", $t29); }), 1], C)));
            if ($.truthy((await $.wv([$t16, $t17, $t21], "Selected", { get: async () => L0["selected"], set: async (v) => { L0["selected"] = v; }, local: true }, false)))) {
              await $.mset((await $.mv((await $.wv([$t16, $t17, $t21], "ACanvas", { get: async () => L0["acanvas"], set: async (v) => { L0["acanvas"] = v; }, local: true }, false)), "Brush")), "Color", (await $.wv([$t16, $t17, $t21], "clBtnFace", C, false)));
            } else {
              await $.mset((await $.mv((await $.wv([$t16, $t17, $t21], "ACanvas", { get: async () => L0["acanvas"], set: async (v) => { L0["acanvas"] = v; }, local: true }, false)), "Brush")), "Color", (await $.wv([$t16, $t17, $t21], "clBtnHighlight", C, false)));
            }
            await $.stmt((await $.mcall((await $.wv([$t16, $t17, $t21], "ACanvas", { get: async () => L0["acanvas"], set: async (v) => { L0["acanvas"] = v; }, local: true }, false)), "FillRect", [(await $.wv([$t16, $t17, $t21], "Bar", { get: async () => L0["bar"], set: async (v) => { L0["bar"] = v; }, local: true }, false))])));
          }
          await $.stmt((await $.mcall((await $.wv([$t16, $t17, $t21], "Images", C, false)), "Draw", [(await $.wv([$t16, $t17, $t21], "ACanvas", { get: async () => L0["acanvas"], set: async (v) => { L0["acanvas"] = v; }, local: true }, false)), (await $.mv((await $.wv([$t16, $t17, $t21], "ARect", { get: async () => L0["arect"], set: async (v) => { L0["arect"] = v; }, local: true }, false)), "Left")), (await $.mv((await $.wv([$t16, $t17, $t21], "ARect", { get: async () => L0["arect"], set: async (v) => { L0["arect"] = v; }, local: true }, false)), "Top")), (await $.wv([$t16, $t17, $t21], "ImageIndex", C, false)), (await $.wv([$t16, $t17, $t21], "Enabled", C, false))])));
        }
      }
    }
  }
  return L0.result;
}, {"params": ["Sender", "ACanvas", "ARect", "Selected"], "kind": "procedure", "ptypes": ["TObject", "TCanvas", "TRect", "Boolean"]});
  U.method("TTicketsManager", "actSettingsExecute", async function actSettingsExecute(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t30 = (await $.v(C, "frmSettings"));
    await $.stmt($.wcall([$t30], "ShowModal", [], C));
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  return U;
}
