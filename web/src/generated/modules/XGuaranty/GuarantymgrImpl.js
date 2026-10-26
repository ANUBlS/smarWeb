// Generated from GuarantymgrImpl.pas by pas2js — do not edit by hand; regenerate instead.
/* eslint-disable */
// @ts-nocheck

export default function define($) {
  const U = $.unit("GuarantymgrImpl", ["Windows", "Messages", "SysUtils", "Classes", "Graphics", "Controls", "Forms", "Dialogs", "ActiveX", "AxCtrls", "Guarantymgr_TLB", "StdVcl", "ComCtrls", "PluginToolBar", "ToolWin", "ExtCtrls", "Grids", "DBGridEh", "StdCtrls", "Oracle", "OracleData", "PluginIni", "Menus", "PluginMenu", "PluginPopupMenu", "AppEvnts", "ImgList", "crCommonDecls", "DBGridEhGrouping", "GridsEh", "ComObj", "ComServ", "crLogoutputImpl", "sboapiDataModuleImpl", "GrDmImpl"]);
  const C = [U];
  U.defClass("EAccessDenied", "Exception", {}, {});
  U.defClass("TNLSHintWindow", "THintWindow", {}, {});
  U.defClass("TGuaranty", "TActiveForm", {"imagelist1": {"name": "ImageList1", "type": "TImageList"}, "applicationevents": {"name": "ApplicationEvents", "type": "TApplicationEvents"}, "popupmenuinilocation": {"name": "PopupMenuIniLocation", "type": "TMenuIni"}, "creditspopupmenu": {"name": "CreditsPopupMenu", "type": "TPluginPopupMenu"}, "toolbar2menuini": {"name": "Toolbar2MenuIni", "type": "TMenuIni"}, "toolbar1menuini": {"name": "Toolbar1MenuIni", "type": "TMenuIni"}, "maingrid": {"name": "MainGrid", "type": "TDBGridEh"}, "hsplitter": {"name": "HSplitter", "type": "TSplitter"}, "bottomdockpanel": {"name": "BottomDockPanel", "type": "TPanel"}, "panel1": {"name": "Panel1", "type": "TPanel"}, "panel2": {"name": "Panel2", "type": "TPanel"}, "paneltoolbar": {"name": "PanelToolBar", "type": "TPanel"}, "coolbar1": {"name": "CoolBar1", "type": "TCoolBar"}, "plugintoolbar": {"name": "PluginToolBar", "type": "TPluginToolBar"}, "plugintoolbar1": {"name": "PluginToolBar1", "type": "TPluginToolBar"}, "radiogroup1": {"name": "RadioGroup1", "type": "TRadioGroup"}, "fevents": {"name": "FEvents", "type": "IGuarantyEvents"}}, {});
  U.init(async () => {
    U.const("SHintFont", "Tahoma");
    U.const("SHintSize", 10);
    U.const("LoadingFailed", true);
    U.const("DataColIndex", 1);
    U.var_("BlnCircular", false, "Boolean");
  });
  U.method("TNLSHintWindow", "Create", async function Create(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"aowner": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["aowner"]);
  await $.inherited(Self, "TNLSHintWindow", "Create", [L0["aowner"]], arguments);
  {
    const $t1 = (await $.mv((await $.v(C, "Canvas")), "Font"));
    await $.wset([$t1], "Name", (await $.wv([$t1], "SHintFont", C, false)), C);
    await $.wset([$t1], "Size", (await $.wv([$t1], "SHintSize", C, false)), C);
  }
  return L0.result;
}, {"params": ["AOwner"], "kind": "constructor", "ptypes": ["TComponent"]});
  U.method("TGuaranty", "DefinePropertyPages", async function DefinePropertyPages(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"definepropertypage": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["definepropertypage"]);
  return L0.result;
}, {"params": ["DefinePropertyPage"], "kind": "procedure", "ptypes": ["TDefinePropertyPage"]});
  U.method("TGuaranty", "EventSinkChanged", async function EventSinkChanged(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"eventsink": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["eventsink"]);
  await $.set(C, "FEvents", L0["eventsink"]);
  return L0.result;
}, {"params": ["EventSink"], "kind": "procedure", "ptypes": ["IUnknown"]});
  U.method("TGuaranty", "Initialize", async function Initialize(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: undefined};
  await $.inherited(Self, "TGuaranty", "Initialize", null, arguments);
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
  U.method("TGuaranty", "Get_Active", async function Get_Active(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: false};
  L0["result"] = (await $.v(C, "Active"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TGuaranty", "Get_AutoScroll", async function Get_AutoScroll(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: false};
  L0["result"] = (await $.v(C, "AutoScroll"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TGuaranty", "Get_AutoSize", async function Get_AutoSize(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: false};
  L0["result"] = (await $.v(C, "AutoSize"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TGuaranty", "Get_AxBorderStyle", async function Get_AxBorderStyle(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: null};
  L0["result"] = (await $.call(C, "Ord", [(await $.v(C, "AxBorderStyle"))]));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TGuaranty", "Get_Caption", async function Get_Caption(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: ''};
  L0["result"] = (await $.call(C, "WideString", [(await $.v(C, "Caption"))]));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TGuaranty", "Get_Color", async function Get_Color(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: null};
  L0["result"] = (await $.call(C, "OLE_COLOR", [(await $.v(C, "Color"))]));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TGuaranty", "Get_Cursor", async function Get_Cursor(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: 0};
  L0["result"] = (await $.call(C, "Smallint", [(await $.v(C, "Cursor"))]));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TGuaranty", "Get_DoubleBuffered", async function Get_DoubleBuffered(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: false};
  L0["result"] = (await $.v(C, "DoubleBuffered"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TGuaranty", "Get_DropTarget", async function Get_DropTarget(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: false};
  L0["result"] = (await $.v(C, "DropTarget"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TGuaranty", "Get_Enabled", async function Get_Enabled(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: false};
  L0["result"] = (await $.v(C, "Enabled"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TGuaranty", "Get_Font", async function Get_Font(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: null};
  await $.stmt((await $.call(C, "GetOleFont", [(await $.v(C, "Font")), L0["result"]])));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TGuaranty", "Get_HelpFile", async function Get_HelpFile(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: ''};
  L0["result"] = (await $.call(C, "WideString", [(await $.v(C, "HelpFile"))]));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TGuaranty", "Get_KeyPreview", async function Get_KeyPreview(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: false};
  L0["result"] = (await $.v(C, "KeyPreview"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TGuaranty", "Get_PixelsPerInch", async function Get_PixelsPerInch(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: 0};
  L0["result"] = (await $.v(C, "PixelsPerInch"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TGuaranty", "Get_PrintScale", async function Get_PrintScale(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: null};
  L0["result"] = (await $.call(C, "Ord", [(await $.v(C, "PrintScale"))]));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TGuaranty", "Get_Scaled", async function Get_Scaled(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: false};
  L0["result"] = (await $.v(C, "Scaled"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TGuaranty", "Get_Visible", async function Get_Visible(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: false};
  L0["result"] = (await $.v(C, "Visible"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TGuaranty", "Get_VisibleDockClientCount", async function Get_VisibleDockClientCount(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: 0};
  L0["result"] = (await $.v(C, "VisibleDockClientCount"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TGuaranty", "_Set_Font", async function _Set_Font(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.stmt((await $.call(C, "SetOleFont", [(await $.v(C, "Font")), L0["value"]])));
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["IFontDisp"]});
  U.method("TGuaranty", "ActivateEvent", async function ActivateEvent(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.ne((await $.v(C, "FEvents")), null))) {
    await $.mcall((await $.v(C, "FEvents")), "OnActivate", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TGuaranty", "ClickEvent", async function ClickEvent(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.ne((await $.v(C, "FEvents")), null))) {
    await $.mcall((await $.v(C, "FEvents")), "OnClick", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TGuaranty", "CreateEvent", async function CreateEvent(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.ne((await $.v(C, "FEvents")), null))) {
    await $.mcall((await $.v(C, "FEvents")), "OnCreate", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TGuaranty", "DblClickEvent", async function DblClickEvent(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.ne((await $.v(C, "FEvents")), null))) {
    await $.mcall((await $.v(C, "FEvents")), "OnDblClick", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TGuaranty", "DeactivateEvent", async function DeactivateEvent(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.ne((await $.v(C, "FEvents")), null))) {
    await $.mcall((await $.v(C, "FEvents")), "OnDeactivate", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TGuaranty", "DestroyEvent", async function DestroyEvent(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.ne((await $.v(C, "FEvents")), null))) {
    await $.mcall((await $.v(C, "FEvents")), "OnDestroy", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TGuaranty", "KeyPressEvent", async function KeyPressEvent(Self, p0, p1) {
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
  U.method("TGuaranty", "PaintEvent", async function PaintEvent(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.ne((await $.v(C, "FEvents")), null))) {
    await $.mcall((await $.v(C, "FEvents")), "OnPaint", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TGuaranty", "Set_AutoScroll", async function Set_AutoScroll(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "AutoScroll", L0["value"]);
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["WordBool"]});
  U.method("TGuaranty", "Set_AutoSize", async function Set_AutoSize(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "AutoSize", L0["value"]);
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["WordBool"]});
  U.method("TGuaranty", "Set_AxBorderStyle", async function Set_AxBorderStyle(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "AxBorderStyle", (await $.call(C, "TActiveFormBorderStyle", [L0["value"]])));
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["TxActiveFormBorderStyle"]});
  U.method("TGuaranty", "Set_Caption", async function Set_Caption(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "Caption", (await $.call(C, "TCaption", [L0["value"]])));
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["WideString"]});
  U.method("TGuaranty", "Set_Color", async function Set_Color(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "Color", (await $.call(C, "TColor", [L0["value"]])));
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["OLE_COLOR"]});
  U.method("TGuaranty", "Set_Cursor", async function Set_Cursor(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "Cursor", (await $.call(C, "TCursor", [L0["value"]])));
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["Smallint"]});
  U.method("TGuaranty", "Set_DoubleBuffered", async function Set_DoubleBuffered(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "DoubleBuffered", L0["value"]);
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["WordBool"]});
  U.method("TGuaranty", "Set_DropTarget", async function Set_DropTarget(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "DropTarget", L0["value"]);
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["WordBool"]});
  U.method("TGuaranty", "Set_Enabled", async function Set_Enabled(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "Enabled", L0["value"]);
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["WordBool"]});
  U.method("TGuaranty", "Set_Font", async function Set_Font(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.asRef(p0), result: undefined};
  await $.stmt((await $.call(C, "SetOleFont", [(await $.v(C, "Font")), (await L0["value"].get())])));
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["IFontDisp"]});
  U.method("TGuaranty", "Set_HelpFile", async function Set_HelpFile(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "HelpFile", (await $.call(C, "String", [L0["value"]])));
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["WideString"]});
  U.method("TGuaranty", "Set_KeyPreview", async function Set_KeyPreview(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "KeyPreview", L0["value"]);
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["WordBool"]});
  U.method("TGuaranty", "Set_PixelsPerInch", async function Set_PixelsPerInch(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "PixelsPerInch", L0["value"]);
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["Integer"]});
  U.method("TGuaranty", "Set_PrintScale", async function Set_PrintScale(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "PrintScale", (await $.call(C, "TPrintScale", [L0["value"]])));
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["TxPrintScale"]});
  U.method("TGuaranty", "Set_Scaled", async function Set_Scaled(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "Scaled", L0["value"]);
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["WordBool"]});
  U.method("TGuaranty", "Set_Visible", async function Set_Visible(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "Visible", L0["value"]);
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["WordBool"]});
  U.method("TGuaranty", "ActiveFormCreate", async function ActiveFormCreate(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  L0["rssession"] = "  -  [Sesiya %s@%s]";
  L0["rsdate"] = "  [Tarix %s]";
  L0["slib"] = "Lib";
  L0["sbin"] = "Bin";
  L0["setcommondecls"] = $.fn(async function SetCommonDecls() {
  const L1 = {result: undefined};
  await $.set(C, "CommonApplication", (await $.v(C, "Application")));
  await $.set(C, "CommonDBGrid", (await $.v(C, "MainGrid")));
  await $.set(C, "CommonScreen", (await $.v(C, "Screen")));
  return L1.result;
});
  L0["initpopupmenu"] = $.fn(async function InitPopupMenu() {
  const L1 = {result: undefined};
  L1["smainmenuinilocation"] = "CRPopupMenu.ini";
  {
    const $t2 = (await $.v(C, "PopupMenuIniLocation"));
    await $.wset([$t2], "IniLocation", $.add((await $.wcall([$t2], "ExtractFilePath", [(await $.mv((await $.wv([$t2], "Application", C, false)), "ExeName"))], C)), (await $.wv([$t2], "sMainMenuIniLocation", { get: async () => L1["smainmenuinilocation"], set: async (v) => { L1["smainmenuinilocation"] = v; }, local: true }, false))), C);
    await $.wset([$t2], "IniSection", "Menu", C);
    await $.wset([$t2], "Active", (await $.wv([$t2], "True", C, false)), C);
  }
  await $.mset((await $.v(C, "CreditsPopupMenu")), "Active", true);
  return L1.result;
});
  L0["inittoolbar"] = $.fn(async function InitToolBar() {
  const L1 = {result: undefined};
  L1["smainmenuinilocation"] = "CRToolBarTop.ini";
  {
    const $t3 = (await $.mv((await $.v(C, "PluginToolBar")), "MenuIni"));
    await $.wset([$t3], "IniLocation", $.add((await $.wcall([$t3], "ExtractFilePath", [(await $.mv((await $.wv([$t3], "Application", C, false)), "ExeName"))], C)), (await $.wv([$t3], "sMainMenuIniLocation", { get: async () => L1["smainmenuinilocation"], set: async (v) => { L1["smainmenuinilocation"] = v; }, local: true }, false))), C);
    await $.wset([$t3], "IniSection", "ToolBar", C);
    await $.wset([$t3], "Active", (await $.wv([$t3], "True", C, false)), C);
  }
  await $.mset((await $.v(C, "PluginToolBar")), "Active", true);
  return L1.result;
});
  L0["inittoolbar1"] = $.fn(async function InitToolBar1() {
  const L1 = {result: undefined};
  L1["smainmenuinilocation"] = "CRToolBarBootom.ini";
  {
    const $t4 = (await $.mv((await $.v(C, "PluginToolBar1")), "MenuIni"));
    await $.wset([$t4], "IniLocation", $.add((await $.wcall([$t4], "ExtractFilePath", [(await $.mv((await $.wv([$t4], "Application", C, false)), "ExeName"))], C)), (await $.wv([$t4], "sMainMenuIniLocation", { get: async () => L1["smainmenuinilocation"], set: async (v) => { L1["smainmenuinilocation"] = v; }, local: true }, false))), C);
    await $.wset([$t4], "IniSection", "ToolBar", C);
    await $.wset([$t4], "Active", (await $.wv([$t4], "True", C, false)), C);
  }
  await $.mset((await $.v(C, "PluginToolBar1")), "Active", true);
  return L1.result;
});
  L0["loadfieldslist"] = $.fn(async function LoadFieldsList() {
  const L1 = {result: undefined, "i": 0, "afieldname": '', "frozencolscount": 0};
  L1["findcolumnindexbyfieldname"] = $.fn(async function FindColumnIndexByFieldName(p0) {
  const L2 = {"afieldname": $.copyArg(p0), result: 0};
  await $.fixArgs(L2, ["afieldname"]);
  L2["result"] = 0;
  {
    const $t5 = (await $.v(C, "MainGrid"));
    while ($.truthy((await $.and_(($.lt((await $.wv([$t5], "Result", { get: async () => L2["result"], set: async (v) => { L2["result"] = v; }, local: true }, false)), (await $.mv((await $.wv([$t5], "Columns", C, false)), "Count")))), async () => ($.ne((await $.mv((await $.idx((await $.mv((await $.wv([$t5], "Columns", C, false)), "Items")), [(await $.wv([$t5], "Result", { get: async () => L2["result"], set: async (v) => { L2["result"] = v; }, local: true }, false))])), "FieldName")), (await $.wv([$t5], "AFieldName", { get: async () => L2["afieldname"], set: async (v) => { L2["afieldname"] = v; }, local: true }, false)))))))) {
      await $.stmt((await $.wcall([$t5], "INC", [$.ref(async () => (await $.wv([$t5], "Result", { get: async () => L2["result"], set: async (v) => { L2["result"] = v; }, local: true }, false)), async ($t6) => { await $.wset([$t5], "Result", $t6, { get: async () => L2["result"], set: async (v) => { L2["result"] = v; }, local: true }); })], C)));
      await $.tick();
    }
  }
  return L2.result;
});
  L1["frozencolscount"] = 0;
  {
    const $t7 = (await $.mv((await $.v(C, "GrDataModule")), "VisibleFieldsData"));
    const $t8 = (await $.wv([$t7], "MainGrid", C, false));
    await $.wset([$t7, $t8], "FrozenCols", 0, C);
    await $.stmt($.wcall([$t7, $t8], "Open", [], C));
    await $.stmt($.wcall([$t7, $t8], "First", [], C));
    while ($.truthy($.not((await $.wv([$t7, $t8], "EOF", C, false))))) {
      await $.wset([$t7, $t8], "AFieldName", (await $.mv((await $.wcall([$t7, $t8], "FieldByName", ["FieldName"], C)), "AsString")), { get: async () => L1["afieldname"], set: async (v) => { L1["afieldname"] = v; }, local: true });
      await $.wset([$t7, $t8], "I", (await $.wcall([$t7, $t8], "FindColumnIndexByFieldName", [(await $.wv([$t7, $t8], "AFieldName", { get: async () => L1["afieldname"], set: async (v) => { L1["afieldname"] = v; }, local: true }, false))], { get: async () => L1["findcolumnindexbyfieldname"], set: async (v) => { L1["findcolumnindexbyfieldname"] = v; }, local: true })), { get: async () => L1["i"], set: async (v) => { L1["i"] = v; }, local: true });
      await $.wset([$t7, $t8], "FrozenColsCount", $.add((await $.wv([$t7, $t8], "FrozenColsCount", { get: async () => L1["frozencolscount"], set: async (v) => { L1["frozencolscount"] = v; }, local: true }, false)), (await $.mv((await $.wcall([$t7, $t8], "FieldByName", ["FROZEN"], C)), "AsInteger"))), { get: async () => L1["frozencolscount"], set: async (v) => { L1["frozencolscount"] = v; }, local: true });
      await $.mset((await $.idx((await $.wv([$t7, $t8], "Columns", C, false)), [(await $.wv([$t7, $t8], "I", { get: async () => L1["i"], set: async (v) => { L1["i"] = v; }, local: true }, false))])), "Visible", $.eq((await $.mv((await $.wcall([$t7, $t8], "FieldByName", ["VISIBLE"], C)), "AsInteger")), 0));
      await $.mset((await $.idx((await $.wv([$t7, $t8], "Columns", C, false)), [(await $.wv([$t7, $t8], "I", { get: async () => L1["i"], set: async (v) => { L1["i"] = v; }, local: true }, false))])), "Index", $.sub((await $.wv([$t7, $t8], "RecNo", C, false)), 1));
      await $.stmt($.wcall([$t7, $t8], "Next", [], C));
      await $.tick();
    }
    await $.wset([$t7, $t8], "FrozenCols", (await $.wv([$t7, $t8], "FrozenColsCount", { get: async () => L1["frozencolscount"], set: async (v) => { L1["frozencolscount"] = v; }, local: true }, false)), C);
    await $.stmt($.wcall([$t7, $t8], "CloseAll", [], C));
  }
  return L1.result;
});
  await $.stmt($.callv(L0["initpopupmenu"], []));
  await $.stmt($.callv(L0["inittoolbar1"], []));
  await $.set(C, "GrDataModule", (await $.mcall((await $.v(C, "TGrDataModule")), "Create", [Self])));
  await $.stmt($.callv(L0["setcommondecls"], []));
  await $.set(C, "frmLogOutput", (await $.mcall((await $.v(C, "TfrmLogOutput")), "Create", [(await $.v(C, "Application"))])));
  await $.stmt($.callv(L0["loadfieldslist"], []));
  {
    const $t9 = (await $.v(C, "frmLogOutput"));
    await $.wset([$t9], "OnClose", (await $.wv([$t9], "OnLogOutputClose", C, true)), C);
    await $.wset([$t9], "OnShow", (await $.wv([$t9], "OnLogoutputShow", C, true)), C);
  }
  {
    const $t10 = (await $.mv((await $.v(C, "GrDataModule")), "CR_ACTIVE"));
    await $.stmt((await $.wcall([$t10], "SetVariable", ["OrderField", "id"], C)));
    await $.stmt($.wcall([$t10], "Open", [], C));
  }
  await $.mset((await $.v(C, "frmLogOutput")), "HostDockSite", (await $.v(C, "BottomDockPanel")));
  await $.stmt((await $.call(C, "LogInformation", [" © Smart Systems Technology ltd. ", true])));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.func("LoadPlugin", async function LoadPlugin(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"pluginname": $.copyArg(p0), "pluginparam": $.copyArg(p1), result: undefined, "pluginhandle": 0, "exportproc": null};
  await $.fixArgs(L0, ["pluginname", "pluginparam"]);
  L0["pluginhandle"] = (await $.call(C, "LoadPackage", [$.add((await $.call(C, "ExtractFilePath", [(await $.mv((await $.v(C, "Application")), "ExeName"))])), L0["pluginname"])]));
  if ($.truthy($.gt(L0["pluginhandle"], 0))) {
    L0["exportproc"] = (await $.call(C, "GetProcAddress", [L0["pluginhandle"], "InitPlugin"]));
    await $.stmt((await $.callv(L0["exportproc"], [L0["pluginparam"]])));
  }
  return L0.result;
}, {"params": ["PluginName", "PluginParam"], "kind": "procedure", "ptypes": ["String", "String"]});
  U.method("TGuaranty", "MainGridDblClick", async function MainGridDblClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.stmt((await $.call(C, "LoadPlugin", ["CR_Conclusion.bpl", "Edit"])));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TGuaranty", "MainGridTitleBtnClick", async function MainGridTitleBtnClick(Self, p0, p1, p2) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "acol": $.copyArg(p1), "column": $.copyArg(p2), result: undefined, "sortfield": ''};
  await $.fixArgs(L0, ["sender", "acol", "column"]);
  L0["sortfield"] = (await $.mv(L0["column"], "FieldName"));
  if ($.truthy($.eq((await $.mv((await $.mv(L0["column"], "Title")), "SortMarker")), (await $.v(C, "smDownEh"))))) {
    L0["sortfield"] = $.add(L0["sortfield"], " DESC");
  }
  {
    const $t11 = L0["sender"];
    const $t12 = (await $.wcall([$t11], "TOracleDataSet", [(await $.mv((await $.wv([$t11], "DataSource", C, false)), "DataSet"))], C));
    await $.stmt($.wcall([$t11, $t12], "ClearVariables", [], C));
    await $.stmt((await $.wcall([$t11, $t12], "SetVariable", ["OrderField", (await $.wv([$t11, $t12], "SortField", { get: async () => L0["sortfield"], set: async (v) => { L0["sortfield"] = v; }, local: true }, false))], C)));
    await $.stmt($.wcall([$t11, $t12], "RefResh", [], C));
    await $.mset((await $.wv([$t11, $t12], "Screen", C, false)), "Cursor", (await $.wv([$t11, $t12], "crDefault", C, false)));
  }
  return L0.result;
}, {"params": ["Sender", "ACol", "Column"], "kind": "procedure", "ptypes": ["TObject", "Integer", "TColumnEh"]});
  U.method("TGuaranty", "CreditsMainMenuBeforeLoadPlugin", async function CreditsMainMenuBeforeLoadPlugin(Self, p0, p1, p2, p3) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "plugin": $.copyArg(p1), "param": $.copyArg(p2), "load": $.asRef(p3), result: undefined, "pluginid": 0, "accessres": false};
  await $.fixArgs(L0, ["sender", "plugin", "param"]);
  L0["rsaccessdenied"] = "Bu modula giriş qadağandır! Əlavə məlumat üçün sistem administratoruna müraciət edin.";
  L0["cnone"] = "NONE";
  if ($.truthy($.eq(L0["param"], ""))) {
    L0["param"] = L0["cnone"];
  }
  {
    const $t13 = (await $.v(C, "GrDataModule"));
    const $t14 = (await $.wv([$t13], "CR_ADMIN", C, false));
    await $.wset([$t13, $t14], "PluginID", (await $.wcall([$t13, $t14], "CallIntegerFunction", ["getpluginid", [(await $.wv([$t13, $t14], "Plugin", { get: async () => L0["plugin"], set: async (v) => { L0["plugin"] = v; }, local: true }, false)), (await $.wv([$t13, $t14], "Param", { get: async () => L0["param"], set: async (v) => { L0["param"] = v; }, local: true }, false))]], C)), { get: async () => L0["pluginid"], set: async (v) => { L0["pluginid"] = v; }, local: true });
    await $.wset([$t13, $t14], "AccessRes", (await $.wcall([$t13, $t14], "CallBooleanFunction", ["pluginaccess", [(await $.wv([$t13, $t14], "pluginid", { get: async () => L0["pluginid"], set: async (v) => { L0["pluginid"] = v; }, local: true }, false))]], C)), { get: async () => L0["accessres"], set: async (v) => { L0["accessres"] = v; }, local: true });
    if ($.truthy($.not((await $.wv([$t13, $t14], "AccessRes", { get: async () => L0["accessres"], set: async (v) => { L0["accessres"] = v; }, local: true }, false))))) {
      await $.stmt((await $.wcall([$t13, $t14], "LogWarning", [(await $.wv([$t13, $t14], "rsAccessDenied", { get: async () => L0["rsaccessdenied"], set: async (v) => { L0["rsaccessdenied"] = v; }, local: true }, false))], C)));
    }
  }
  await L0["load"].set(L0["accessres"]);
  return L0.result;
}, {"params": ["Sender", "Plugin", "Param", "Load"], "kind": "procedure", "ptypes": ["TObject", "String", "String", "Boolean"]});
  U.method("TGuaranty", "ShowDockPanel", async function ShowDockPanel(Self, p0, p1, p2) {
  const C = $.chain(Self, U);
  const L0 = {"apanel": $.copyArg(p0), "makevisible": $.copyArg(p1), "client": $.copyArg(p2), result: undefined};
  await $.fixArgs(L0, ["apanel", "makevisible", "client"]);
  if ($.truthy((await $.and_($.not(L0["makevisible"]), async () => ($.gt((await $.mv(L0["apanel"], "VisibleDockClientCount")), 1)))))) {
    return L0.result;
  }
  await $.mset((await $.v(C, "HSplitter")), "Visible", L0["makevisible"]);
  if ($.truthy(L0["makevisible"])) {
    await $.mset(L0["apanel"], "Height", $.idiv((await $.v(C, "ClientHeight")), 11));
    await $.mset((await $.v(C, "HSplitter")), "Top", $.sub($.sub((await $.v(C, "ClientHeight")), (await $.mv(L0["apanel"], "Height"))), (await $.mv((await $.v(C, "HSplitter")), "Width"))));
  } else {
    await $.mset(L0["apanel"], "Height", 0);
  }
  return L0.result;
}, {"params": ["APanel", "MakeVisible", "Client"], "kind": "procedure", "ptypes": ["TPanel", "Boolean", "TControl"]});
  U.method("TGuaranty", "OnLogOutputClose", async function OnLogOutputClose(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "action": $.asRef(p1), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy((await $.and_(($.ne((await $.mv((await $.v(C, "frmLogOutput")), "HostDockSite")), null)), async () => ($.is_((await $.mv((await $.v(C, "frmLogOutput")), "HostDockSite")), "TPanel")))))) {
    await $.stmt((await $.call(C, "ShowDockPanel", [(await $.mv((await $.v(C, "frmLogOutput")), "HostDockSite")), false, null])));
  }
  await $.set(C, "BlnCircular", false);
  return L0.result;
}, {"params": ["Sender", "Action"], "kind": "procedure", "ptypes": ["TObject", "TCloseAction"]});
  U.method("TGuaranty", "OnLogoutputShow", async function OnLogoutputShow(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.not((await $.v(C, "BlnCircular"))))) {
    if ($.truthy((await $.and_((await $.and_(($.ne((await $.mv((await $.v(C, "frmLogoutput")), "HostDockSite")), null)), async () => ($.is_((await $.mv((await $.v(C, "frmLogoutput")), "HostDockSite")), "TPanel")))), async () => ((await $.or_(($.eq((await $.mv((await $.mv((await $.v(C, "frmLogoutput")), "HostDockSite")), "Height")), 0)), async () => ($.eq((await $.mv((await $.mv((await $.v(C, "frmLogoutput")), "HostDockSite")), "Width")), 0))))))))) {
      await $.stmt((await $.call(C, "ShowDockPanel", [(await $.mv((await $.v(C, "frmLogoutput")), "HostDockSite")), true, null])));
    }
  }
  await $.set(C, "BlnCircular", true);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TGuaranty", "ApplicationEventsException", async function ApplicationEventsException(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "e": $.copyArg(p1), result: undefined};
  await $.fixArgs(L0, ["sender", "e"]);
  await $.stmt((await $.call(C, "LogError", [(await $.mv(L0["e"], "Message"))])));
  return L0.result;
}, {"params": ["Sender", "E"], "kind": "procedure", "ptypes": ["TObject", "Exception"]});
  U.method("TGuaranty", "BottomDockPanelDockDrop", async function BottomDockPanelDockDrop(Self, p0, p1, p2, p3) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "source": $.copyArg(p1), "x": $.copyArg(p2), "y": $.copyArg(p3), result: undefined};
  await $.fixArgs(L0, ["sender", "source", "x", "y"]);
  if ($.truthy($.eq((await $.mv((L0["sender"]), "DockClientCount")), 1))) {
    await $.stmt((await $.call(C, "ShowDockPanel", [L0["sender"], true, null])));
  }
  await $.stmt((await $.mcall((await $.mv(L0["sender"], "DockManager")), "ResetBounds", [true])));
  return L0.result;
}, {"params": ["Sender", "Source", "X", "Y"], "kind": "procedure", "ptypes": ["TObject", "TDragDockObject", "Integer", "Integer"]});
  U.method("TGuaranty", "BottomDockPanelDockOver", async function BottomDockPanelDockOver(Self, p0, p1, p2, p3, p4, p5) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "source": $.copyArg(p1), "x": $.copyArg(p2), "y": $.copyArg(p3), "state": $.copyArg(p4), "accept": $.asRef(p5), result: undefined, "arect": null};
  await $.fixArgs(L0, ["sender", "source", "x", "y", "state"]);
  await L0["accept"].set($.is_((await $.mv(L0["source"], "Control")), "TfrmLogOutput"));
  if ($.truthy((await L0["accept"].get()))) {
    await $.mset(L0["arect"], "TopLeft", (await $.mcall((await $.v(C, "BottomDockPanel")), "ClientToScreen", [(await $.call(C, "Point", [0, (-($.idiv((await $.mv(Self, "ClientHeight")), 11)))]))])));
    await $.mset(L0["arect"], "BottomRight", (await $.mcall((await $.v(C, "BottomDockPanel")), "ClientToScreen", [(await $.call(C, "Point", [(await $.mv((await $.v(C, "BottomDockPanel")), "Width")), (await $.mv((await $.v(C, "BottomDockPanel")), "Height"))]))])));
    await $.mset(L0["source"], "DockRect", L0["arect"]);
  }
  return L0.result;
}, {"params": ["Sender", "Source", "X", "Y", "State", "Accept"], "kind": "procedure", "ptypes": ["TObject", "TDragDockObject", "Integer", "Integer", "TDragState", "Boolean"]});
  U.method("TGuaranty", "BottomDockPanelGetSiteInfo", async function BottomDockPanelGetSiteInfo(Self, p0, p1, p2, p3, p4) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "dockclient": $.copyArg(p1), "influencerect": $.asRef(p2), "mousepos": $.copyArg(p3), "candock": $.asRef(p4), result: undefined};
  await $.fixArgs(L0, ["sender", "dockclient", "mousepos"]);
  await L0["candock"].set($.is_(L0["dockclient"], "TfrmLogOutput"));
  return L0.result;
}, {"params": ["Sender", "DockClient", "InfluenceRect", "MousePos", "CanDock"], "kind": "procedure", "ptypes": ["TObject", "TControl", "TRect", "TPoint", "Boolean"]});
  U.method("TGuaranty", "BottomDockPanelUnDock", async function BottomDockPanelUnDock(Self, p0, p1, p2, p3) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "client": $.copyArg(p1), "newtarget": $.copyArg(p2), "allow": $.asRef(p3), result: undefined};
  await $.fixArgs(L0, ["sender", "client", "newtarget"]);
  if ($.truthy($.eq((await $.mv((L0["sender"]), "DockClientCount")), 1))) {
    await $.stmt((await $.call(C, "ShowDockPanel", [L0["sender"], false, null])));
  }
  return L0.result;
}, {"params": ["Sender", "Client", "NewTarget", "Allow"], "kind": "procedure", "ptypes": ["TObject", "TControl", "TWinControl", "Boolean"]});
  U.method("TGuaranty", "PluginToolBar1BeforeLoadPlugin", async function PluginToolBar1BeforeLoadPlugin(Self, p0, p1, p2, p3) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "plugin": $.copyArg(p1), "param": $.copyArg(p2), "load": $.asRef(p3), result: undefined, "pluginid": 0, "accessres": false};
  await $.fixArgs(L0, ["sender", "plugin", "param"]);
  L0["rsaccessdenied"] = "Bu modula giriş qadağandır! Əlavə məlumat üçün sistem administratoruna müraciət edin.";
  L0["cnone"] = "NONE";
  if ($.truthy($.eq(L0["param"], ""))) {
    L0["param"] = L0["cnone"];
  }
  {
    const $t15 = (await $.v(C, "GrDataModule"));
    const $t16 = (await $.wv([$t15], "CR_ADMIN", C, false));
    await $.wset([$t15, $t16], "PluginID", (await $.wcall([$t15, $t16], "CallIntegerFunction", ["getpluginid", [(await $.wv([$t15, $t16], "Plugin", { get: async () => L0["plugin"], set: async (v) => { L0["plugin"] = v; }, local: true }, false)), (await $.wv([$t15, $t16], "Param", { get: async () => L0["param"], set: async (v) => { L0["param"] = v; }, local: true }, false))]], C)), { get: async () => L0["pluginid"], set: async (v) => { L0["pluginid"] = v; }, local: true });
    await $.wset([$t15, $t16], "AccessRes", (await $.wcall([$t15, $t16], "CallBooleanFunction", ["pluginaccess", [(await $.wv([$t15, $t16], "pluginid", { get: async () => L0["pluginid"], set: async (v) => { L0["pluginid"] = v; }, local: true }, false))]], C)), { get: async () => L0["accessres"], set: async (v) => { L0["accessres"] = v; }, local: true });
    if ($.truthy($.not((await $.wv([$t15, $t16], "AccessRes", { get: async () => L0["accessres"], set: async (v) => { L0["accessres"] = v; }, local: true }, false))))) {
      await $.stmt((await $.wcall([$t15, $t16], "LogWarning", [(await $.wv([$t15, $t16], "rsAccessDenied", { get: async () => L0["rsaccessdenied"], set: async (v) => { L0["rsaccessdenied"] = v; }, local: true }, false))], C)));
    }
  }
  await L0["load"].set(L0["accessres"]);
  return L0.result;
}, {"params": ["Sender", "Plugin", "Param", "Load"], "kind": "procedure", "ptypes": ["TObject", "String", "String", "Boolean"]});
  U.method("TGuaranty", "RadioGroup1Click", async function RadioGroup1Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  { const $t17 = (await $.mv((await $.v(C, "RadioGroup1")), "ItemIndex"));
    if ($.eq($t17, 0)) {
      {
        const $t18 = (await $.v(C, "GrDataModule"));
        await $.mcall((await $.wv([$t18], "CR_ACTIVE", C, false)), "Close", []);
        { const $t19 = await $.iset((await $.mv((await $.wv([$t18], "CR_ACTIVE", C, false)), "sql")), [3], ""); if ($t19 !== undefined) { await $.mset((await $.wv([$t18], "CR_ACTIVE", C, false)), "sql", $t19); } }
        { const $t20 = await $.iset((await $.mv((await $.wv([$t18], "CR_ACTIVE", C, false)), "sql")), [3], " where nvl(partitionkey,0) =0 and closedate is null"); if ($t20 !== undefined) { await $.mset((await $.wv([$t18], "CR_ACTIVE", C, false)), "sql", $t20); } }
        await $.mcall((await $.wv([$t18], "CR_ACTIVE", C, false)), "open", []);
      }
    }
    else if ($.eq($t17, 1)) {
      {
        const $t21 = (await $.v(C, "GrDataModule"));
        await $.mcall((await $.wv([$t21], "CR_ACTIVE", C, false)), "Close", []);
        { const $t22 = await $.iset((await $.mv((await $.wv([$t21], "CR_ACTIVE", C, false)), "sql")), [3], ""); if ($t22 !== undefined) { await $.mset((await $.wv([$t21], "CR_ACTIVE", C, false)), "sql", $t22); } }
        { const $t23 = await $.iset((await $.mv((await $.wv([$t21], "CR_ACTIVE", C, false)), "sql")), [3], " where partitionkey =1 and closedate is not null"); if ($t23 !== undefined) { await $.mset((await $.wv([$t21], "CR_ACTIVE", C, false)), "sql", $t23); } }
        await $.mcall((await $.wv([$t21], "CR_ACTIVE", C, false)), "open", []);
      }
    }
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  return U;
}
