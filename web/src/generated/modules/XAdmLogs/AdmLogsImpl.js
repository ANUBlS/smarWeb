// Generated from AdmLogsImpl.pas by pas2js — do not edit by hand; regenerate instead.
/* eslint-disable */
// @ts-nocheck

export default function define($) {
  const U = $.unit("AdmLogsImpl", ["Windows", "Messages", "SysUtils", "Classes", "Graphics", "Controls", "Forms", "Dialogs", "ActiveX", "AxCtrls", "AdmLogsC_TLB", "StdVcl", "ComCtrls", "Grids", "DBGrids", "StdCtrls", "ExtCtrls", "CMExcelExport", "OracleData", "ComObj", "ComServ", "About", "ALDataMod", "sboapiDataModuleImpl", "SBTranslateProc"]);
  const C = [U];
  U.defClass("TAdmLogs", "TActiveForm", {"pgcmain": {"name": "pgcMain", "type": "TPageControl"}, "tsusersgrant": {"name": "tsUsersGrant", "type": "TTabSheet"}, "tsmodules": {"name": "tsModules", "type": "TTabSheet"}, "tstsusers": {"name": "tstsUsers", "type": "TTabSheet"}, "tabsheet3": {"name": "TabSheet3", "type": "TTabSheet"}, "dbgrid1": {"name": "DBGrid1", "type": "TDBGrid"}, "dbgrid2": {"name": "DBGrid2", "type": "TDBGrid"}, "dbgrid3": {"name": "DBGrid3", "type": "TDBGrid"}, "dbgrid4": {"name": "DBGrid4", "type": "TDBGrid"}, "tsclasses": {"name": "tsClasses", "type": "TTabSheet"}, "tsgroupman": {"name": "tsGroupMan", "type": "TTabSheet"}, "dbgrid5": {"name": "DBGrid5", "type": "TDBGrid"}, "dbgrid6": {"name": "DBGrid6", "type": "TDBGrid"}, "panel1": {"name": "Panel1", "type": "TPanel"}, "button1": {"name": "Button1", "type": "TButton"}, "excelexport": {"name": "ExcelExport", "type": "TCMExcelExport"}, "tslocked": {"name": "tsLocked", "type": "TTabSheet"}, "splitter1": {"name": "Splitter1", "type": "TSplitter"}, "dbgrid8": {"name": "DBGrid8", "type": "TDBGrid"}, "panel2": {"name": "Panel2", "type": "TPanel"}, "button2": {"name": "Button2", "type": "TButton"}, "button3": {"name": "Button3", "type": "TButton"}, "dtpb": {"name": "dtpB", "type": "TDateTimePicker"}, "dtpe": {"name": "dtpE", "type": "TDateTimePicker"}, "button4": {"name": "Button4", "type": "TButton"}, "button5": {"name": "Button5", "type": "TButton"}, "panel3": {"name": "Panel3", "type": "TPanel"}, "dbgrid7": {"name": "DBGrid7", "type": "TDBGrid"}, "splitter2": {"name": "Splitter2", "type": "TSplitter"}, "button6": {"name": "Button6", "type": "TButton"}, "dbgrid9": {"name": "DBGrid9", "type": "TDBGrid"}, "fevents": {"name": "FEvents", "type": "IAdmLogsEvents"}}, {});
  U.init(async () => {
  });
  U.method("TAdmLogs", "DefinePropertyPages", async function DefinePropertyPages(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"definepropertypage": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["definepropertypage"]);
  return L0.result;
}, {"params": ["DefinePropertyPage"], "kind": "procedure", "ptypes": ["TDefinePropertyPage"]});
  U.method("TAdmLogs", "EventSinkChanged", async function EventSinkChanged(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"eventsink": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["eventsink"]);
  await $.set(C, "FEvents", L0["eventsink"]);
  return L0.result;
}, {"params": ["EventSink"], "kind": "procedure", "ptypes": ["IUnknown"]});
  U.method("TAdmLogs", "Initialize", async function Initialize(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: undefined};
  await $.inherited(Self, "TAdmLogs", "Initialize", null, arguments);
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
  U.method("TAdmLogs", "Get_Active", async function Get_Active(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: false};
  L0["result"] = (await $.v(C, "Active"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TAdmLogs", "Get_AutoScroll", async function Get_AutoScroll(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: false};
  L0["result"] = (await $.v(C, "AutoScroll"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TAdmLogs", "Get_AutoSize", async function Get_AutoSize(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: false};
  L0["result"] = (await $.v(C, "AutoSize"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TAdmLogs", "Get_AxBorderStyle", async function Get_AxBorderStyle(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: null};
  L0["result"] = (await $.call(C, "Ord", [(await $.v(C, "AxBorderStyle"))]));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TAdmLogs", "Get_Caption", async function Get_Caption(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: ''};
  L0["result"] = (await $.call(C, "WideString", [(await $.v(C, "Caption"))]));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TAdmLogs", "Get_Color", async function Get_Color(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: null};
  L0["result"] = (await $.call(C, "OLE_COLOR", [(await $.v(C, "Color"))]));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TAdmLogs", "Get_Cursor", async function Get_Cursor(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: 0};
  L0["result"] = (await $.call(C, "Smallint", [(await $.v(C, "Cursor"))]));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TAdmLogs", "Get_DoubleBuffered", async function Get_DoubleBuffered(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: false};
  L0["result"] = (await $.v(C, "DoubleBuffered"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TAdmLogs", "Get_DropTarget", async function Get_DropTarget(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: false};
  L0["result"] = (await $.v(C, "DropTarget"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TAdmLogs", "Get_Enabled", async function Get_Enabled(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: false};
  L0["result"] = (await $.v(C, "Enabled"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TAdmLogs", "Get_Font", async function Get_Font(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: null};
  await $.stmt((await $.call(C, "GetOleFont", [(await $.v(C, "Font")), L0["result"]])));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TAdmLogs", "Get_HelpFile", async function Get_HelpFile(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: ''};
  L0["result"] = (await $.call(C, "WideString", [(await $.v(C, "HelpFile"))]));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TAdmLogs", "Get_KeyPreview", async function Get_KeyPreview(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: false};
  L0["result"] = (await $.v(C, "KeyPreview"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TAdmLogs", "Get_PixelsPerInch", async function Get_PixelsPerInch(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: 0};
  L0["result"] = (await $.v(C, "PixelsPerInch"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TAdmLogs", "Get_PrintScale", async function Get_PrintScale(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: null};
  L0["result"] = (await $.call(C, "Ord", [(await $.v(C, "PrintScale"))]));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TAdmLogs", "Get_Scaled", async function Get_Scaled(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: false};
  L0["result"] = (await $.v(C, "Scaled"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TAdmLogs", "Get_Visible", async function Get_Visible(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: false};
  L0["result"] = (await $.v(C, "Visible"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TAdmLogs", "Get_VisibleDockClientCount", async function Get_VisibleDockClientCount(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: 0};
  L0["result"] = (await $.v(C, "VisibleDockClientCount"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TAdmLogs", "_Set_Font", async function _Set_Font(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.asRef(p0), result: undefined};
  await $.stmt((await $.call(C, "SetOleFont", [(await $.v(C, "Font")), (await L0["value"].get())])));
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["IFontDisp"]});
  U.method("TAdmLogs", "AboutBox", async function AboutBox(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: undefined};
  await $.stmt($.call(C, "ShowAdmLogsAbout", []));
  return L0.result;
}, {"params": [], "kind": "procedure", "ptypes": []});
  U.method("TAdmLogs", "ActivateEvent", async function ActivateEvent(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.ne((await $.v(C, "FEvents")), null))) {
    await $.mcall((await $.v(C, "FEvents")), "OnActivate", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TAdmLogs", "ClickEvent", async function ClickEvent(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.ne((await $.v(C, "FEvents")), null))) {
    await $.mcall((await $.v(C, "FEvents")), "OnClick", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TAdmLogs", "CreateEvent", async function CreateEvent(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.ne((await $.v(C, "FEvents")), null))) {
    await $.mcall((await $.v(C, "FEvents")), "OnCreate", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TAdmLogs", "DblClickEvent", async function DblClickEvent(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.ne((await $.v(C, "FEvents")), null))) {
    await $.mcall((await $.v(C, "FEvents")), "OnDblClick", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TAdmLogs", "DeactivateEvent", async function DeactivateEvent(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.ne((await $.v(C, "FEvents")), null))) {
    await $.mcall((await $.v(C, "FEvents")), "OnDeactivate", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TAdmLogs", "DestroyEvent", async function DestroyEvent(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.ne((await $.v(C, "FEvents")), null))) {
    await $.mcall((await $.v(C, "FEvents")), "OnDestroy", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TAdmLogs", "KeyPressEvent", async function KeyPressEvent(Self, p0, p1) {
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
  U.method("TAdmLogs", "PaintEvent", async function PaintEvent(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.ne((await $.v(C, "FEvents")), null))) {
    await $.mcall((await $.v(C, "FEvents")), "OnPaint", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TAdmLogs", "Set_AutoScroll", async function Set_AutoScroll(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "AutoScroll", L0["value"]);
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["WordBool"]});
  U.method("TAdmLogs", "Set_AutoSize", async function Set_AutoSize(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "AutoSize", L0["value"]);
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["WordBool"]});
  U.method("TAdmLogs", "Set_AxBorderStyle", async function Set_AxBorderStyle(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "AxBorderStyle", (await $.call(C, "TActiveFormBorderStyle", [L0["value"]])));
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["TxActiveFormBorderStyle"]});
  U.method("TAdmLogs", "Set_Caption", async function Set_Caption(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "Caption", (await $.call(C, "TCaption", [L0["value"]])));
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["WideString"]});
  U.method("TAdmLogs", "Set_Color", async function Set_Color(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "Color", (await $.call(C, "TColor", [L0["value"]])));
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["OLE_COLOR"]});
  U.method("TAdmLogs", "Set_Cursor", async function Set_Cursor(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "Cursor", (await $.call(C, "TCursor", [L0["value"]])));
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["Smallint"]});
  U.method("TAdmLogs", "Set_DoubleBuffered", async function Set_DoubleBuffered(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "DoubleBuffered", L0["value"]);
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["WordBool"]});
  U.method("TAdmLogs", "Set_DropTarget", async function Set_DropTarget(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "DropTarget", L0["value"]);
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["WordBool"]});
  U.method("TAdmLogs", "Set_Enabled", async function Set_Enabled(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "Enabled", L0["value"]);
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["WordBool"]});
  U.method("TAdmLogs", "Set_Font", async function Set_Font(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.stmt((await $.call(C, "SetOleFont", [(await $.v(C, "Font")), L0["value"]])));
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["IFontDisp"]});
  U.method("TAdmLogs", "Set_HelpFile", async function Set_HelpFile(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "HelpFile", (await $.call(C, "String", [L0["value"]])));
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["WideString"]});
  U.method("TAdmLogs", "Set_KeyPreview", async function Set_KeyPreview(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "KeyPreview", L0["value"]);
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["WordBool"]});
  U.method("TAdmLogs", "Set_PixelsPerInch", async function Set_PixelsPerInch(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "PixelsPerInch", L0["value"]);
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["Integer"]});
  U.method("TAdmLogs", "Set_PrintScale", async function Set_PrintScale(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "PrintScale", (await $.call(C, "TPrintScale", [L0["value"]])));
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["TxPrintScale"]});
  U.method("TAdmLogs", "Set_Scaled", async function Set_Scaled(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "Scaled", L0["value"]);
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["WordBool"]});
  U.method("TAdmLogs", "Set_Visible", async function Set_Visible(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "Visible", L0["value"]);
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["WordBool"]});
  U.method("TAdmLogs", "Button1Click", async function Button1Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t1 = (await $.v(C, "DataModAL"));
    const $t2 = (await $.wv([$t1], "ExcelExport", C, false));
    await $.stmt($.wcall([$t1, $t2], "Connect", [], C));
    { const $t3 = (await $.mv((await $.wv([$t1, $t2], "pgcMain", C, false)), "ActivePageIndex"));
      if ($.eq($t3, 0)) {
        await $.stmt((await $.wcall([$t1, $t2], "ExportDataset", [(await $.wv([$t1, $t2], "ODSUserGrantsLogs", C, false)), "Sheet", (await $.wv([$t1, $t2], "True", C, false))], C)));
      }
      else if ($.eq($t3, 1)) {
        await $.stmt((await $.wcall([$t1, $t2], "ExportDataset", [(await $.wv([$t1, $t2], "ODSModuleLogs", C, false)), "Sheet", (await $.wv([$t1, $t2], "True", C, false))], C)));
      }
      else if ($.eq($t3, 2)) {
        await $.stmt((await $.wcall([$t1, $t2], "ExportDataset", [(await $.wv([$t1, $t2], "ODSUsersLogs", C, false)), "Sheet", (await $.wv([$t1, $t2], "True", C, false))], C)));
      }
      else if ($.eq($t3, 3)) {
        await $.stmt((await $.wcall([$t1, $t2], "ExportDataset", [(await $.wv([$t1, $t2], "OdsGroupsLogs", C, false)), "Sheet", (await $.wv([$t1, $t2], "True", C, false))], C)));
      }
      else if ($.eq($t3, 4)) {
        await $.stmt((await $.wcall([$t1, $t2], "ExportDataset", [(await $.wv([$t1, $t2], "ODSClassesLogs", C, false)), "Sheet", (await $.wv([$t1, $t2], "True", C, false))], C)));
      }
      else if ($.eq($t3, 5)) {
        await $.stmt((await $.wcall([$t1, $t2], "ExportDataset", [(await $.wv([$t1, $t2], "ODSGroupManLogs", C, false)), "Sheet", (await $.wv([$t1, $t2], "True", C, false))], C)));
      }
    }
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TAdmLogs", "ActiveFormCreate", async function ActiveFormCreate(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.set(C, "DataModAL", (await $.mcall((await $.v(C, "TDataModAL")), "Create", [Self])));
  await $.mset((await $.v(C, "pgcMain")), "ActivePageIndex", 0);
  await $.mset((await $.v(C, "dtpB")), "DateTime", (await $.v(C, "Date")));
  await $.mset((await $.v(C, "dtpE")), "DateTime", (await $.v(C, "Date")));
  await $.mcall((await $.v(C, "Button4")), "Click", []);
  await $.stmt((await $.mcall((await $.v(C, "SBTranslateProc")), "TranslateAllComponents", [Self, (await $.mv((await $.v(C, "sboapiDataModule")), "OrPack_SL"))])));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.func("RefreshDataSet", async function RefreshDataSet(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"dset": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["dset"]);
  await $.mcall(L0["dset"], "Close", []);
  await $.mcall(L0["dset"], "Open", []);
  return L0.result;
}, {"params": ["DSet"], "kind": "procedure", "ptypes": ["TOracleDataSet"]});
  U.func("DelRowsDS", async function DelRowsDS(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"dset": $.copyArg(p0), result: undefined, "i": 0};
  await $.fixArgs(L0, ["dset"]);
  await $.mcall(L0["dset"], "First", []);
  { const $t4 = $.sub((await $.mv(L0["dset"], "RecordCount")), 1);
    L0["i"] = 0;
    let $t5 = true;
    for (;;) {
      if (!$t5) { L0["i"] = $.succ(L0["i"], 1); }
      $t5 = false;
      if (!($.ord(L0["i"]) <= $.ord($t4))) break;
      await $.stmt((await $.mcall((await $.mv((await $.v(C, "DataModAL")), "SB_ADM")), "CallProcedure", ["dellog", [(await $.mv((await $.idx((await $.mv(L0["dset"], "Fields")), [0])), "AsVariant"))]])));
      await $.mcall(L0["dset"], "Next", []);
      await $.tick();
    }
  }
  await $.stmt((await $.call(C, "RefreshDataSet", [L0["dset"]])));
  return L0.result;
}, {"params": ["DSet"], "kind": "procedure", "ptypes": ["TOracleDataSet"]});
  U.method("TAdmLogs", "Button2Click", async function Button2Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.eq((await $.call(C, "MessageDlg", ["İctifadəçi account-u açılsın?", (await $.v(C, "mtWarning")), [(await $.v(C, "mbyes")), (await $.v(C, "mbno"))], 0])), (await $.v(C, "idyes"))))) {
    {
      const $t6 = (await $.v(C, "DataModAL"));
      await $.stmt((await $.mcall((await $.wv([$t6], "SB_ADM", C, false)), "CallProcedure", ["lockunlockuser", [(await $.mv((await $.wv([$t6], "ODSLockedUsersNAME", C, false)), "AsVariant")), (await $.wv([$t6], "False", C, false))]])));
      await $.stmt((await $.wcall([$t6], "RefreshDataSet", [(await $.wv([$t6], "ODSLockedUsers", C, false))], C)));
    }
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TAdmLogs", "Button3Click", async function Button3Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t7 = (await $.v(C, "DataModAL"));
    { const $t8 = (await $.mv((await $.wv([$t7], "pgcMain", C, false)), "ActivePageIndex"));
      if ($.eq($t8, 0)) {
        await $.stmt((await $.wcall([$t7], "RefreshDataset", [(await $.wv([$t7], "ODSUserGrantsLogs", C, false))], C)));
      }
      else if ($.eq($t8, 1)) {
        await $.stmt((await $.wcall([$t7], "RefreshDataSet", [(await $.wv([$t7], "ODSModuleLogs", C, false))], C)));
      }
      else if ($.eq($t8, 2)) {
        await $.stmt((await $.wcall([$t7], "RefreshDataSet", [(await $.wv([$t7], "ODSUsersLogs", C, false))], C)));
      }
      else if ($.eq($t8, 3)) {
        await $.stmt((await $.wcall([$t7], "RefreshDataSet", [(await $.wv([$t7], "OdsGroupsLogs", C, false))], C)));
      }
      else if ($.eq($t8, 4)) {
        await $.stmt((await $.wcall([$t7], "RefreshDataSet", [(await $.wv([$t7], "ODSClassesLogs", C, false))], C)));
      }
      else if ($.eq($t8, 5)) {
        await $.stmt((await $.wcall([$t7], "RefreshDataSet", [(await $.wv([$t7], "ODSGroupManLogs", C, false))], C)));
      }
      else if ($.eq($t8, 6)) {
        await $.stmt((await $.wcall([$t7], "RefreshDataSet", [(await $.wv([$t7], "ODSLockedUsers", C, false))], C)));
        await $.stmt((await $.wcall([$t7], "RefreshDataSet", [(await $.wv([$t7], "ODSClasNames", C, false))], C)));
      }
    }
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TAdmLogs", "Button4Click", async function Button4Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t9 = (await $.v(C, "DataModAL"));
    { const $t10 = (await $.mv((await $.wv([$t9], "pgcMain", C, false)), "ActivePageIndex"));
      if ($.eq($t10, 0)) {
        await $.mcall((await $.wv([$t9], "ODSUserGrantsLogs", C, false)), "Close", []);
        { const $t11 = await $.iset((await $.mv((await $.wv([$t9], "ODSUserGrantsLogs", C, false)), "SQL")), [4], $.add($.add($.add($.add($.add("and (MODTIME)>='", (await $.wcall([$t9], "FormatDateTime", ["dd-mmm-yyyy", (await $.mv((await $.wv([$t9], "dtpB", C, false)), "Date"))], C))), "' "), "and (MODTIME)<='"), (await $.wcall([$t9], "FormatDateTime", ["dd-mmm-yyyy", (await $.mv((await $.wv([$t9], "dtpE", C, false)), "Date"))], C))), "'")); if ($t11 !== undefined) { await $.mset((await $.wv([$t9], "ODSUserGrantsLogs", C, false)), "SQL", $t11); } }
        await $.mcall((await $.wv([$t9], "ODSUserGrantsLogs", C, false)), "Open", []);
        { const $t12 = await $.iset((await $.mv((await $.wv([$t9], "ODSUserGrantsLogs", C, false)), "SQL")), [4], ""); if ($t12 !== undefined) { await $.mset((await $.wv([$t9], "ODSUserGrantsLogs", C, false)), "SQL", $t12); } }
      }
      else if ($.eq($t10, 1)) {
        await $.mcall((await $.wv([$t9], "ODSModuleLogs", C, false)), "Close", []);
        { const $t13 = await $.iset((await $.mv((await $.wv([$t9], "ODSModuleLogs", C, false)), "SQL")), [3], $.add($.add($.add($.add($.add("and (MODTIME)>='", (await $.wcall([$t9], "FormatDateTime", ["dd-mmm-yyyy", (await $.mv((await $.wv([$t9], "dtpB", C, false)), "Date"))], C))), "' "), "and (MODTIME)<='"), (await $.wcall([$t9], "FormatDateTime", ["dd-mmm-yyyy", (await $.mv((await $.wv([$t9], "dtpE", C, false)), "Date"))], C))), "'")); if ($t13 !== undefined) { await $.mset((await $.wv([$t9], "ODSModuleLogs", C, false)), "SQL", $t13); } }
        await $.mcall((await $.wv([$t9], "ODSModuleLogs", C, false)), "Open", []);
        { const $t14 = await $.iset((await $.mv((await $.wv([$t9], "ODSModuleLogs", C, false)), "SQL")), [3], ""); if ($t14 !== undefined) { await $.mset((await $.wv([$t9], "ODSModuleLogs", C, false)), "SQL", $t14); } }
      }
      else if ($.eq($t10, 2)) {
        await $.mcall((await $.wv([$t9], "ODSUsersLogs", C, false)), "Close", []);
        { const $t15 = await $.iset((await $.mv((await $.wv([$t9], "ODSUsersLogs", C, false)), "SQL")), [6], $.add($.add($.add($.add($.add("and (MODTIME)>='", (await $.wcall([$t9], "FormatDateTime", ["dd-mmm-yyyy", (await $.mv((await $.wv([$t9], "dtpB", C, false)), "Date"))], C))), "' "), "and (MODTIME)<='"), (await $.wcall([$t9], "FormatDateTime", ["dd-mmm-yyyy", (await $.mv((await $.wv([$t9], "dtpE", C, false)), "Date"))], C))), "'")); if ($t15 !== undefined) { await $.mset((await $.wv([$t9], "ODSUsersLogs", C, false)), "SQL", $t15); } }
        await $.mcall((await $.wv([$t9], "ODSUsersLogs", C, false)), "Open", []);
        { const $t16 = await $.iset((await $.mv((await $.wv([$t9], "ODSUsersLogs", C, false)), "SQL")), [6], ""); if ($t16 !== undefined) { await $.mset((await $.wv([$t9], "ODSUsersLogs", C, false)), "SQL", $t16); } }
      }
      else if ($.eq($t10, 3)) {
        await $.mcall((await $.wv([$t9], "OdsGroupsLogs", C, false)), "Close", []);
        { const $t17 = await $.iset((await $.mv((await $.wv([$t9], "OdsGroupsLogs", C, false)), "SQL")), [4], $.add($.add($.add($.add($.add("and (MODTIME)>='", (await $.wcall([$t9], "FormatDateTime", ["dd-mmm-yyyy", (await $.mv((await $.wv([$t9], "dtpB", C, false)), "Date"))], C))), "' "), "and (MODTIME)<='"), (await $.wcall([$t9], "FormatDateTime", ["dd-mmm-yyyy", (await $.mv((await $.wv([$t9], "dtpE", C, false)), "Date"))], C))), "'")); if ($t17 !== undefined) { await $.mset((await $.wv([$t9], "OdsGroupsLogs", C, false)), "SQL", $t17); } }
        await $.mcall((await $.wv([$t9], "OdsGroupsLogs", C, false)), "Open", []);
        { const $t18 = await $.iset((await $.mv((await $.wv([$t9], "OdsGroupsLogs", C, false)), "SQL")), [4], ""); if ($t18 !== undefined) { await $.mset((await $.wv([$t9], "OdsGroupsLogs", C, false)), "SQL", $t18); } }
      }
      else if ($.eq($t10, 4)) {
        await $.mcall((await $.wv([$t9], "ODSClassesLogs", C, false)), "Close", []);
        { const $t19 = await $.iset((await $.mv((await $.wv([$t9], "ODSClassesLogs", C, false)), "SQL")), [4], $.add($.add($.add($.add($.add("and (MODTIME)>='", (await $.wcall([$t9], "FormatDateTime", ["dd-mmm-yyyy", (await $.mv((await $.wv([$t9], "dtpB", C, false)), "Date"))], C))), "' "), "and (MODTIME)<='"), (await $.wcall([$t9], "FormatDateTime", ["dd-mmm-yyyy", (await $.mv((await $.wv([$t9], "dtpE", C, false)), "Date"))], C))), "'")); if ($t19 !== undefined) { await $.mset((await $.wv([$t9], "ODSClassesLogs", C, false)), "SQL", $t19); } }
        await $.mcall((await $.wv([$t9], "ODSClassesLogs", C, false)), "Open", []);
        { const $t20 = await $.iset((await $.mv((await $.wv([$t9], "ODSClassesLogs", C, false)), "SQL")), [4], ""); if ($t20 !== undefined) { await $.mset((await $.wv([$t9], "ODSClassesLogs", C, false)), "SQL", $t20); } }
      }
      else if ($.eq($t10, 5)) {
        await $.mcall((await $.wv([$t9], "ODSGroupManLogs", C, false)), "Close", []);
        { const $t21 = await $.iset((await $.mv((await $.wv([$t9], "ODSGroupManLogs", C, false)), "SQL")), [20], $.add($.add($.add($.add($.add("and (MODTIME)>='", (await $.wcall([$t9], "FormatDateTime", ["dd-mmm-yyyy", (await $.mv((await $.wv([$t9], "dtpB", C, false)), "Date"))], C))), "' "), "and (MODTIME)<='"), (await $.wcall([$t9], "FormatDateTime", ["dd-mmm-yyyy", (await $.mv((await $.wv([$t9], "dtpE", C, false)), "Date"))], C))), "'")); if ($t21 !== undefined) { await $.mset((await $.wv([$t9], "ODSGroupManLogs", C, false)), "SQL", $t21); } }
        await $.mcall((await $.wv([$t9], "ODSGroupManLogs", C, false)), "Open", []);
        { const $t22 = await $.iset((await $.mv((await $.wv([$t9], "ODSGroupManLogs", C, false)), "SQL")), [20], ""); if ($t22 !== undefined) { await $.mset((await $.wv([$t9], "ODSGroupManLogs", C, false)), "SQL", $t22); } }
      }
      else if ($.eq($t10, 6)) {
        await $.mcall((await $.wv([$t9], "ODSSLLogs", C, false)), "Close", []);
        { const $t23 = await $.iset((await $.mv((await $.wv([$t9], "ODSSLLogs", C, false)), "SQL")), [4], $.add($.add($.add($.add($.add("and (MODTIME)>='", (await $.wcall([$t9], "FormatDateTime", ["dd-mmm-yyyy", (await $.mv((await $.wv([$t9], "dtpB", C, false)), "Date"))], C))), "' "), "and (MODTIME)<='"), (await $.wcall([$t9], "FormatDateTime", ["dd-mmm-yyyy", (await $.mv((await $.wv([$t9], "dtpE", C, false)), "Date"))], C))), "'")); if ($t23 !== undefined) { await $.mset((await $.wv([$t9], "ODSSLLogs", C, false)), "SQL", $t23); } }
        await $.mcall((await $.wv([$t9], "ODSSLLogs", C, false)), "Open", []);
        { const $t24 = await $.iset((await $.mv((await $.wv([$t9], "ODSSLLogs", C, false)), "SQL")), [4], ""); if ($t24 !== undefined) { await $.mset((await $.wv([$t9], "ODSSLLogs", C, false)), "SQL", $t24); } }
      }
    }
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TAdmLogs", "Button5Click", async function Button5Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.eq((await $.call(C, "MessageDlg", ["Sətirlət silinsin?", (await $.v(C, "mtWarning")), [(await $.v(C, "mbyes")), (await $.v(C, "mbno"))], 0])), (await $.v(C, "idyes"))))) {
    {
      const $t25 = (await $.v(C, "DataModAL"));
      { const $t26 = (await $.mv((await $.wv([$t25], "pgcMain", C, false)), "ActivePageIndex"));
        if ($.eq($t26, 0)) {
          await $.stmt((await $.wcall([$t25], "DelRowsDS", [(await $.wv([$t25], "ODSUserGrantsLogs", C, false))], C)));
        }
        else if ($.eq($t26, 1)) {
          await $.stmt((await $.wcall([$t25], "DelRowsDS", [(await $.wv([$t25], "ODSModuleLogs", C, false))], C)));
        }
        else if ($.eq($t26, 2)) {
          await $.stmt((await $.wcall([$t25], "DelRowsDS", [(await $.wv([$t25], "ODSUsersLogs", C, false))], C)));
        }
        else if ($.eq($t26, 3)) {
          await $.stmt((await $.wcall([$t25], "DelRowsDS", [(await $.wv([$t25], "OdsGroupsLogs", C, false))], C)));
        }
        else if ($.eq($t26, 4)) {
          await $.stmt((await $.wcall([$t25], "DelRowsDS", [(await $.wv([$t25], "ODSClassesLogs", C, false))], C)));
        }
        else if ($.eq($t26, 5)) {
          await $.stmt((await $.wcall([$t25], "DelRowsDS", [(await $.wv([$t25], "ODSGroupManLogs", C, false))], C)));
        }
        else if ($.eq($t26, 6)) {
          await $.stmt((await $.wcall([$t25], "DelRowsDS", [(await $.wv([$t25], "ODSSLLogs", C, false))], C)));
        }
      }
    }
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TAdmLogs", "Button6Click", async function Button6Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.eq((await $.call(C, "MessageDlg", ["Sinifə aid bütün istifadəçi account-ları açılsın?", (await $.v(C, "mtWarning")), [(await $.v(C, "mbyes")), (await $.v(C, "mbno"))], 0])), (await $.v(C, "idyes"))))) {
    {
      const $t27 = (await $.v(C, "DataModAL"));
      await $.stmt((await $.mcall((await $.wv([$t27], "SB_ADM", C, false)), "CallProcedure", ["unlockclass", [(await $.mv((await $.wv([$t27], "ODSClasNamesID", C, false)), "AsVariant"))]])));
      await $.stmt((await $.wcall([$t27], "RefreshDataSet", [(await $.wv([$t27], "ODSLockedUsers", C, false))], C)));
    }
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  return U;
}
