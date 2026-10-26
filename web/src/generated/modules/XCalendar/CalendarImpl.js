// Generated from CalendarImpl.pas by pas2js — do not edit by hand; regenerate instead.
/* eslint-disable */
// @ts-nocheck

export default function define($) {
  const U = $.unit("CalendarImpl", ["Windows", "Messages", "SysUtils", "Classes", "Graphics", "Controls", "Forms", "Dialogs", "ActiveX", "AxCtrls", "CalendarLmp_TLB", "StdVcl", "ComCtrls", "ExtCtrls", "Grids", "DBGrids", "DBCtrls", "StdCtrls", "Buttons", "DBGridEh", "DBGridEhGrouping", "GridsEh", "ComObj", "sboapiDataModuleImpl", "SBTranslateProc", "ComServ", "CalendarDatamodLmpl", "AddHolidayLmpl"]);
  const C = [U];
  U.defClass("TCalendar", "TActiveForm", {"panel2": {"name": "Panel2", "type": "TPanel"}, "panel3": {"name": "Panel3", "type": "TPanel"}, "panel4": {"name": "Panel4", "type": "TPanel"}, "panel5": {"name": "Panel5", "type": "TPanel"}, "panel6": {"name": "Panel6", "type": "TPanel"}, "panel7": {"name": "Panel7", "type": "TPanel"}, "panel8": {"name": "Panel8", "type": "TPanel"}, "monthcalendar1": {"name": "MonthCalendar1", "type": "TMonthCalendar"}, "monthcalendar2": {"name": "MonthCalendar2", "type": "TMonthCalendar"}, "monthcalendar3": {"name": "MonthCalendar3", "type": "TMonthCalendar"}, "monthcalendar4": {"name": "MonthCalendar4", "type": "TMonthCalendar"}, "monthcalendar5": {"name": "MonthCalendar5", "type": "TMonthCalendar"}, "monthcalendar6": {"name": "MonthCalendar6", "type": "TMonthCalendar"}, "panel9": {"name": "Panel9", "type": "TPanel"}, "panel10": {"name": "Panel10", "type": "TPanel"}, "panel11": {"name": "Panel11", "type": "TPanel"}, "panel12": {"name": "Panel12", "type": "TPanel"}, "panel13": {"name": "Panel13", "type": "TPanel"}, "panel14": {"name": "Panel14", "type": "TPanel"}, "panel15": {"name": "Panel15", "type": "TPanel"}, "monthcalendar7": {"name": "MonthCalendar7", "type": "TMonthCalendar"}, "monthcalendar8": {"name": "MonthCalendar8", "type": "TMonthCalendar"}, "monthcalendar9": {"name": "MonthCalendar9", "type": "TMonthCalendar"}, "monthcalendar10": {"name": "MonthCalendar10", "type": "TMonthCalendar"}, "monthcalendar11": {"name": "MonthCalendar11", "type": "TMonthCalendar"}, "monthcalendar12": {"name": "MonthCalendar12", "type": "TMonthCalendar"}, "panel1": {"name": "Panel1", "type": "TPanel"}, "dbnavigator1": {"name": "DBNavigator1", "type": "TDBNavigator"}, "bitbtn1": {"name": "BitBtn1", "type": "TBitBtn"}, "bitbtn2": {"name": "BitBtn2", "type": "TBitBtn"}, "bitbtn3": {"name": "BitBtn3", "type": "TBitBtn"}, "dbgrideh1": {"name": "DBGridEh1", "type": "TDBGridEh"}, "fevents": {"name": "FEvents", "type": "ICalendarEvents"}}, {});
  U.init(async () => {
  });
  U.method("TCalendar", "DefinePropertyPages", async function DefinePropertyPages(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"definepropertypage": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["definepropertypage"]);
  return L0.result;
}, {"params": ["DefinePropertyPage"], "kind": "procedure", "ptypes": ["TDefinePropertyPage"]});
  U.method("TCalendar", "EventSinkChanged", async function EventSinkChanged(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"eventsink": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["eventsink"]);
  await $.set(C, "FEvents", L0["eventsink"]);
  return L0.result;
}, {"params": ["EventSink"], "kind": "procedure", "ptypes": ["IUnknown"]});
  U.method("TCalendar", "Initialize", async function Initialize(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: undefined};
  await $.inherited(Self, "TCalendar", "Initialize", null, arguments);
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
  U.method("TCalendar", "Get_Active", async function Get_Active(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: false};
  L0["result"] = (await $.v(C, "Active"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TCalendar", "Get_AutoScroll", async function Get_AutoScroll(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: false};
  L0["result"] = (await $.v(C, "AutoScroll"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TCalendar", "Get_AutoSize", async function Get_AutoSize(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: false};
  L0["result"] = (await $.v(C, "AutoSize"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TCalendar", "Get_AxBorderStyle", async function Get_AxBorderStyle(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: null};
  L0["result"] = (await $.call(C, "Ord", [(await $.v(C, "AxBorderStyle"))]));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TCalendar", "Get_Caption", async function Get_Caption(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: ''};
  L0["result"] = (await $.call(C, "WideString", [(await $.v(C, "Caption"))]));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TCalendar", "Get_Color", async function Get_Color(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: null};
  L0["result"] = (await $.call(C, "OLE_COLOR", [(await $.v(C, "Color"))]));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TCalendar", "Get_Cursor", async function Get_Cursor(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: 0};
  L0["result"] = (await $.call(C, "Smallint", [(await $.v(C, "Cursor"))]));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TCalendar", "Get_DoubleBuffered", async function Get_DoubleBuffered(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: false};
  L0["result"] = (await $.v(C, "DoubleBuffered"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TCalendar", "Get_DropTarget", async function Get_DropTarget(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: false};
  L0["result"] = (await $.v(C, "DropTarget"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TCalendar", "Get_Enabled", async function Get_Enabled(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: false};
  L0["result"] = (await $.v(C, "Enabled"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TCalendar", "Get_Font", async function Get_Font(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: null};
  await $.stmt((await $.call(C, "GetOleFont", [(await $.v(C, "Font")), L0["result"]])));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TCalendar", "Get_HelpFile", async function Get_HelpFile(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: ''};
  L0["result"] = (await $.call(C, "WideString", [(await $.v(C, "HelpFile"))]));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TCalendar", "Get_KeyPreview", async function Get_KeyPreview(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: false};
  L0["result"] = (await $.v(C, "KeyPreview"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TCalendar", "Get_PixelsPerInch", async function Get_PixelsPerInch(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: 0};
  L0["result"] = (await $.v(C, "PixelsPerInch"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TCalendar", "Get_PrintScale", async function Get_PrintScale(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: null};
  L0["result"] = (await $.call(C, "Ord", [(await $.v(C, "PrintScale"))]));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TCalendar", "Get_Scaled", async function Get_Scaled(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: false};
  L0["result"] = (await $.v(C, "Scaled"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TCalendar", "Get_Visible", async function Get_Visible(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: false};
  L0["result"] = (await $.v(C, "Visible"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TCalendar", "Get_VisibleDockClientCount", async function Get_VisibleDockClientCount(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: 0};
  L0["result"] = (await $.v(C, "VisibleDockClientCount"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TCalendar", "_Set_Font", async function _Set_Font(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.stmt((await $.call(C, "SetOleFont", [(await $.v(C, "Font")), L0["value"]])));
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["IFontDisp"]});
  U.method("TCalendar", "ActivateEvent", async function ActivateEvent(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.ne((await $.v(C, "FEvents")), null))) {
    await $.mcall((await $.v(C, "FEvents")), "OnActivate", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TCalendar", "ClickEvent", async function ClickEvent(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.ne((await $.v(C, "FEvents")), null))) {
    await $.mcall((await $.v(C, "FEvents")), "OnClick", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TCalendar", "CreateEvent", async function CreateEvent(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.ne((await $.v(C, "FEvents")), null))) {
    await $.mcall((await $.v(C, "FEvents")), "OnCreate", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TCalendar", "DblClickEvent", async function DblClickEvent(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.ne((await $.v(C, "FEvents")), null))) {
    await $.mcall((await $.v(C, "FEvents")), "OnDblClick", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TCalendar", "DeactivateEvent", async function DeactivateEvent(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.ne((await $.v(C, "FEvents")), null))) {
    await $.mcall((await $.v(C, "FEvents")), "OnDeactivate", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TCalendar", "DestroyEvent", async function DestroyEvent(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.ne((await $.v(C, "FEvents")), null))) {
    await $.mcall((await $.v(C, "FEvents")), "OnDestroy", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TCalendar", "KeyPressEvent", async function KeyPressEvent(Self, p0, p1) {
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
  U.method("TCalendar", "PaintEvent", async function PaintEvent(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.ne((await $.v(C, "FEvents")), null))) {
    await $.mcall((await $.v(C, "FEvents")), "OnPaint", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TCalendar", "Set_AutoScroll", async function Set_AutoScroll(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "AutoScroll", L0["value"]);
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["WordBool"]});
  U.method("TCalendar", "Set_AutoSize", async function Set_AutoSize(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "AutoSize", L0["value"]);
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["WordBool"]});
  U.method("TCalendar", "Set_AxBorderStyle", async function Set_AxBorderStyle(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "AxBorderStyle", (await $.call(C, "TActiveFormBorderStyle", [L0["value"]])));
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["TxActiveFormBorderStyle"]});
  U.method("TCalendar", "Set_Caption", async function Set_Caption(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "Caption", (await $.call(C, "TCaption", [L0["value"]])));
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["WideString"]});
  U.method("TCalendar", "Set_Color", async function Set_Color(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "Color", (await $.call(C, "TColor", [L0["value"]])));
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["OLE_COLOR"]});
  U.method("TCalendar", "Set_Cursor", async function Set_Cursor(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "Cursor", (await $.call(C, "TCursor", [L0["value"]])));
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["Smallint"]});
  U.method("TCalendar", "Set_DoubleBuffered", async function Set_DoubleBuffered(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "DoubleBuffered", L0["value"]);
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["WordBool"]});
  U.method("TCalendar", "Set_DropTarget", async function Set_DropTarget(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "DropTarget", L0["value"]);
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["WordBool"]});
  U.method("TCalendar", "Set_Enabled", async function Set_Enabled(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "Enabled", L0["value"]);
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["WordBool"]});
  U.method("TCalendar", "Set_Font", async function Set_Font(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.asRef(p0), result: undefined};
  await $.stmt((await $.call(C, "SetOleFont", [(await $.v(C, "Font")), (await L0["value"].get())])));
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["IFontDisp"]});
  U.method("TCalendar", "Set_HelpFile", async function Set_HelpFile(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "HelpFile", (await $.call(C, "String", [L0["value"]])));
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["WideString"]});
  U.method("TCalendar", "Set_KeyPreview", async function Set_KeyPreview(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "KeyPreview", L0["value"]);
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["WordBool"]});
  U.method("TCalendar", "Set_PixelsPerInch", async function Set_PixelsPerInch(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "PixelsPerInch", L0["value"]);
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["Integer"]});
  U.method("TCalendar", "Set_PrintScale", async function Set_PrintScale(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "PrintScale", (await $.call(C, "TPrintScale", [L0["value"]])));
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["TxPrintScale"]});
  U.method("TCalendar", "Set_Scaled", async function Set_Scaled(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "Scaled", L0["value"]);
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["WordBool"]});
  U.method("TCalendar", "Set_Visible", async function Set_Visible(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "Visible", L0["value"]);
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["WordBool"]});
  U.method("TCalendar", "ActiveFormCreate", async function ActiveFormCreate(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.stmt((await $.mcall((await $.v(C, "SBTranslateProc")), "TranslateAllComponents", [Self, (await $.mv((await $.v(C, "sboapiDataModule")), "OrPack_SL"))])));
  await $.set(C, "CalendarDataMod", (await $.mcall((await $.v(C, "TCalendarDataMod")), "create", [Self])));
  await $.set(C, "AddHoliday", (await $.mcall((await $.v(C, "TAddHoliday")), "create", [Self])));
  await $.mset((await $.v(C, "MonthCalendar1")), "date", (await $.mv((await $.mcall((await $.mv((await $.v(C, "CalendarDataMod")), "OracleDataSet2")), "fieldbyname", ["jan"])), "AsDateTime")));
  await $.mset((await $.v(C, "MonthCalendar2")), "date", (await $.mv((await $.mcall((await $.mv((await $.v(C, "CalendarDataMod")), "OracleDataSet2")), "fieldbyname", ["feb"])), "AsDateTime")));
  await $.mset((await $.v(C, "MonthCalendar3")), "date", (await $.mv((await $.mcall((await $.mv((await $.v(C, "CalendarDataMod")), "OracleDataSet2")), "fieldbyname", ["mar"])), "AsDateTime")));
  await $.mset((await $.v(C, "MonthCalendar4")), "date", (await $.mv((await $.mcall((await $.mv((await $.v(C, "CalendarDataMod")), "OracleDataSet2")), "fieldbyname", ["apr"])), "AsDateTime")));
  await $.mset((await $.v(C, "MonthCalendar5")), "date", (await $.mv((await $.mcall((await $.mv((await $.v(C, "CalendarDataMod")), "OracleDataSet2")), "fieldbyname", ["may"])), "AsDateTime")));
  await $.mset((await $.v(C, "MonthCalendar6")), "date", (await $.mv((await $.mcall((await $.mv((await $.v(C, "CalendarDataMod")), "OracleDataSet2")), "fieldbyname", ["jun"])), "AsDateTime")));
  await $.mset((await $.v(C, "MonthCalendar7")), "date", (await $.mv((await $.mcall((await $.mv((await $.v(C, "CalendarDataMod")), "OracleDataSet2")), "fieldbyname", ["jul"])), "AsDateTime")));
  await $.mset((await $.v(C, "MonthCalendar8")), "date", (await $.mv((await $.mcall((await $.mv((await $.v(C, "CalendarDataMod")), "OracleDataSet2")), "fieldbyname", ["aug"])), "AsDateTime")));
  await $.mset((await $.v(C, "MonthCalendar9")), "date", (await $.mv((await $.mcall((await $.mv((await $.v(C, "CalendarDataMod")), "OracleDataSet2")), "fieldbyname", ["sep"])), "AsDateTime")));
  await $.mset((await $.v(C, "MonthCalendar10")), "date", (await $.mv((await $.mcall((await $.mv((await $.v(C, "CalendarDataMod")), "OracleDataSet2")), "fieldbyname", ["oct"])), "AsDateTime")));
  await $.mset((await $.v(C, "MonthCalendar11")), "date", (await $.mv((await $.mcall((await $.mv((await $.v(C, "CalendarDataMod")), "OracleDataSet2")), "fieldbyname", ["nov"])), "AsDateTime")));
  await $.mset((await $.v(C, "MonthCalendar12")), "date", (await $.mv((await $.mcall((await $.mv((await $.v(C, "CalendarDataMod")), "OracleDataSet2")), "fieldbyname", ["dec"])), "AsDateTime")));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TCalendar", "MonthCalendar1DblClick", async function MonthCalendar1DblClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "dat": 0};
  await $.fixArgs(L0, ["sender"]);
  L0["dat"] = (await $.mv((await $.v(C, "MonthCalendar1")), "date"));
  L0["dat"] = (await $.call(C, "integer", [(await $.call(C, "trunc", [(await $.mv((await $.v(C, "MonthCalendar1")), "Date"))]))]));
  await $.stmt((await $.mcall((await $.mv((await $.v(C, "CalendarDataMod")), "OraclePackage1")), "CallProcedure", ["add_calendar", [L0["dat"]]])));
  await $.mcall((await $.mv((await $.v(C, "CalendarDataMod")), "OracleDataSet1")), "refresh", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TCalendar", "MonthCalendar2DblClick", async function MonthCalendar2DblClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "dat": 0};
  await $.fixArgs(L0, ["sender"]);
  L0["dat"] = (await $.mv((await $.v(C, "MonthCalendar1")), "date"));
  L0["dat"] = (await $.call(C, "integer", [(await $.call(C, "trunc", [(await $.mv((await $.v(C, "MonthCalendar2")), "Date"))]))]));
  await $.stmt((await $.mcall((await $.mv((await $.v(C, "CalendarDataMod")), "OraclePackage1")), "CallProcedure", ["add_calendar", [L0["dat"]]])));
  await $.mcall((await $.mv((await $.v(C, "CalendarDataMod")), "OracleDataSet1")), "refresh", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TCalendar", "MonthCalendar3DblClick", async function MonthCalendar3DblClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "dat": 0};
  await $.fixArgs(L0, ["sender"]);
  L0["dat"] = (await $.mv((await $.v(C, "MonthCalendar3")), "date"));
  L0["dat"] = (await $.call(C, "integer", [(await $.call(C, "trunc", [(await $.mv((await $.v(C, "MonthCalendar3")), "Date"))]))]));
  await $.stmt((await $.mcall((await $.mv((await $.v(C, "CalendarDataMod")), "OraclePackage1")), "CallProcedure", ["add_calendar", [L0["dat"]]])));
  await $.mcall((await $.mv((await $.v(C, "CalendarDataMod")), "OracleDataSet1")), "refresh", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TCalendar", "MonthCalendar4DblClick", async function MonthCalendar4DblClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "dat": 0};
  await $.fixArgs(L0, ["sender"]);
  L0["dat"] = (await $.mv((await $.v(C, "MonthCalendar4")), "date"));
  L0["dat"] = (await $.call(C, "integer", [(await $.call(C, "trunc", [(await $.mv((await $.v(C, "MonthCalendar4")), "Date"))]))]));
  await $.stmt((await $.mcall((await $.mv((await $.v(C, "CalendarDataMod")), "OraclePackage1")), "CallProcedure", ["add_calendar", [L0["dat"]]])));
  await $.mcall((await $.mv((await $.v(C, "CalendarDataMod")), "OracleDataSet1")), "refresh", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TCalendar", "MonthCalendar5DblClick", async function MonthCalendar5DblClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "dat": 0};
  await $.fixArgs(L0, ["sender"]);
  L0["dat"] = (await $.mv((await $.v(C, "MonthCalendar5")), "date"));
  L0["dat"] = (await $.call(C, "integer", [(await $.call(C, "trunc", [(await $.mv((await $.v(C, "MonthCalendar5")), "Date"))]))]));
  await $.stmt((await $.mcall((await $.mv((await $.v(C, "CalendarDataMod")), "OraclePackage1")), "CallProcedure", ["add_calendar", [L0["dat"]]])));
  await $.mcall((await $.mv((await $.v(C, "CalendarDataMod")), "OracleDataSet1")), "refresh", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TCalendar", "MonthCalendar6DblClick", async function MonthCalendar6DblClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "dat": 0};
  await $.fixArgs(L0, ["sender"]);
  L0["dat"] = (await $.mv((await $.v(C, "MonthCalendar6")), "date"));
  L0["dat"] = (await $.call(C, "integer", [(await $.call(C, "trunc", [(await $.mv((await $.v(C, "MonthCalendar6")), "Date"))]))]));
  await $.stmt((await $.mcall((await $.mv((await $.v(C, "CalendarDataMod")), "OraclePackage1")), "CallProcedure", ["add_calendar", [L0["dat"]]])));
  await $.mcall((await $.mv((await $.v(C, "CalendarDataMod")), "OracleDataSet1")), "refresh", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TCalendar", "MonthCalendar7DblClick", async function MonthCalendar7DblClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "dat": 0};
  await $.fixArgs(L0, ["sender"]);
  L0["dat"] = (await $.mv((await $.v(C, "MonthCalendar7")), "date"));
  L0["dat"] = (await $.call(C, "integer", [(await $.call(C, "trunc", [(await $.mv((await $.v(C, "MonthCalendar7")), "Date"))]))]));
  await $.stmt((await $.mcall((await $.mv((await $.v(C, "CalendarDataMod")), "OraclePackage1")), "CallProcedure", ["add_calendar", [L0["dat"]]])));
  await $.mcall((await $.mv((await $.v(C, "CalendarDataMod")), "OracleDataSet1")), "refresh", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TCalendar", "MonthCalendar8DblClick", async function MonthCalendar8DblClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "dat": 0};
  await $.fixArgs(L0, ["sender"]);
  L0["dat"] = (await $.mv((await $.v(C, "MonthCalendar8")), "date"));
  L0["dat"] = (await $.call(C, "integer", [(await $.call(C, "trunc", [(await $.mv((await $.v(C, "MonthCalendar8")), "Date"))]))]));
  await $.stmt((await $.mcall((await $.mv((await $.v(C, "CalendarDataMod")), "OraclePackage1")), "CallProcedure", ["add_calendar", [L0["dat"]]])));
  await $.mcall((await $.mv((await $.v(C, "CalendarDataMod")), "OracleDataSet1")), "refresh", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TCalendar", "MonthCalendar9DblClick", async function MonthCalendar9DblClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "dat": 0};
  await $.fixArgs(L0, ["sender"]);
  L0["dat"] = (await $.mv((await $.v(C, "MonthCalendar9")), "date"));
  L0["dat"] = (await $.call(C, "integer", [(await $.call(C, "trunc", [(await $.mv((await $.v(C, "MonthCalendar9")), "Date"))]))]));
  await $.stmt((await $.mcall((await $.mv((await $.v(C, "CalendarDataMod")), "OraclePackage1")), "CallProcedure", ["add_calendar", [L0["dat"]]])));
  await $.mcall((await $.mv((await $.v(C, "CalendarDataMod")), "OracleDataSet1")), "refresh", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TCalendar", "MonthCalendar10DblClick", async function MonthCalendar10DblClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "dat": 0};
  await $.fixArgs(L0, ["sender"]);
  L0["dat"] = (await $.mv((await $.v(C, "MonthCalendar10")), "date"));
  L0["dat"] = (await $.call(C, "integer", [(await $.call(C, "trunc", [(await $.mv((await $.v(C, "MonthCalendar10")), "Date"))]))]));
  await $.stmt((await $.mcall((await $.mv((await $.v(C, "CalendarDataMod")), "OraclePackage1")), "CallProcedure", ["add_calendar", [L0["dat"]]])));
  await $.mcall((await $.mv((await $.v(C, "CalendarDataMod")), "OracleDataSet1")), "refresh", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TCalendar", "MonthCalendar11DblClick", async function MonthCalendar11DblClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "dat": 0};
  await $.fixArgs(L0, ["sender"]);
  L0["dat"] = (await $.mv((await $.v(C, "MonthCalendar11")), "date"));
  L0["dat"] = (await $.call(C, "integer", [(await $.call(C, "trunc", [(await $.mv((await $.v(C, "MonthCalendar11")), "Date"))]))]));
  await $.stmt((await $.mcall((await $.mv((await $.v(C, "CalendarDataMod")), "OraclePackage1")), "CallProcedure", ["add_calendar", [L0["dat"]]])));
  await $.mcall((await $.mv((await $.v(C, "CalendarDataMod")), "OracleDataSet1")), "refresh", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TCalendar", "MonthCalendar12DblClick", async function MonthCalendar12DblClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "dat": 0};
  await $.fixArgs(L0, ["sender"]);
  L0["dat"] = (await $.mv((await $.v(C, "MonthCalendar12")), "date"));
  L0["dat"] = (await $.call(C, "integer", [(await $.call(C, "trunc", [(await $.mv((await $.v(C, "MonthCalendar12")), "Date"))]))]));
  await $.stmt((await $.mcall((await $.mv((await $.v(C, "CalendarDataMod")), "OraclePackage1")), "CallProcedure", ["add_calendar", [L0["dat"]]])));
  await $.mcall((await $.mv((await $.v(C, "CalendarDataMod")), "OracleDataSet1")), "refresh", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TCalendar", "BitBtn2Click", async function BitBtn2Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.stmt((await $.mcall((await $.mv((await $.v(C, "CalendarDataMod")), "OraclePackage1")), "CallProcedure", ["SATURDAY", []])));
  await $.mcall((await $.mv((await $.v(C, "CalendarDataMod")), "OracleDataSet1")), "refresh", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TCalendar", "BitBtn3Click", async function BitBtn3Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.stmt((await $.mcall((await $.mv((await $.v(C, "CalendarDataMod")), "OraclePackage1")), "CallProcedure", ["SUNDAY", []])));
  await $.mcall((await $.mv((await $.v(C, "CalendarDataMod")), "OracleDataSet1")), "refresh", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TCalendar", "BitBtn1Click", async function BitBtn1Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mcall((await $.v(C, "AddHoliday")), "ShowModal", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  return U;
}
