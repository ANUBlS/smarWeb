// Generated from UInsFullMotorCasco.pas by pas2js — do not edit by hand; regenerate instead.
/* eslint-disable */
// @ts-nocheck

export default function define($) {
  const U = $.unit("UInsFullMotorCasco", ["Windows", "Messages", "SysUtils", "Classes", "Graphics", "Controls", "Forms", "LDialogs", "ActiveX", "AxCtrls", "PInsFullMotorCasco_TLB", "StdVcl", "ExtCtrls", "StdCtrls", "ToolWin", "ComCtrls", "ImgList", "Grids", "DBGrids", "ActnList", "Menus", "DB", "OracleData", "INSWordExporter", "ComObj", "ComServ", "DataUnitFullMotor", "UInsAppMotor", "UReport", "UInsSuggest", "UMotorInsPolicy"]);
  const C = [U];
  U.defClass("TInsFullMotorCasco", "TActiveForm", {"toolbar1": {"name": "ToolBar1", "type": "TToolBar"}, "groupbox1": {"name": "GroupBox1", "type": "TGroupBox"}, "gridmotor": {"name": "GridMotor", "type": "TDBGrid"}, "toolbutton1": {"name": "ToolButton1", "type": "TToolButton"}, "actionlist1": {"name": "ActionList1", "type": "TActionList"}, "actioninsert": {"name": "ActionInsert", "type": "TAction"}, "imagelist": {"name": "ImageList", "type": "TImageList"}, "toolbutton3": {"name": "ToolButton3", "type": "TToolButton"}, "toolbutton5": {"name": "ToolButton5", "type": "TToolButton"}, "actionedit": {"name": "ActionEdit", "type": "TAction"}, "actionrefresh": {"name": "ActionRefresh", "type": "TAction"}, "actionfullrefresh": {"name": "ActionFullRefresh", "type": "TAction"}, "popupmenu1": {"name": "PopupMenu1", "type": "TPopupMenu"}, "n1": {"name": "N1", "type": "TMenuItem"}, "actionsearch": {"name": "ActionSearch", "type": "TAction"}, "actionspeedsearch": {"name": "ActionSpeedSearch", "type": "TAction"}, "actiondelete": {"name": "ActionDelete", "type": "TAction"}, "toolbutton8": {"name": "ToolButton8", "type": "TToolButton"}, "panelacc": {"name": "PanelAcc", "type": "TPanel"}, "dbgrid1": {"name": "DBGrid1", "type": "TDBGrid"}, "label2": {"name": "Label2", "type": "TLabel"}, "label3": {"name": "Label3", "type": "TLabel"}, "gridmore": {"name": "GridMore", "type": "TDBGrid"}, "toolbutton2": {"name": "ToolButton2", "type": "TToolButton"}, "report": {"name": "Report", "type": "TAction"}, "actionsuggestion": {"name": "ActionSuggestion", "type": "TAction"}, "actionpolicy": {"name": "ActionPolicy", "type": "TAction"}, "toolbutton4": {"name": "ToolButton4", "type": "TToolButton"}, "popupmenu2": {"name": "PopupMenu2", "type": "TPopupMenu"}, "n2": {"name": "N2", "type": "TMenuItem"}, "n3": {"name": "N3", "type": "TMenuItem"}, "n4": {"name": "N4", "type": "TMenuItem"}, "n5": {"name": "N5", "type": "TMenuItem"}, "n6": {"name": "N6", "type": "TMenuItem"}, "n7": {"name": "N7", "type": "TMenuItem"}, "n8": {"name": "N8", "type": "TMenuItem"}, "toolbutton6": {"name": "ToolButton6", "type": "TToolButton"}, "actionextra": {"name": "ActionExtra", "type": "TAction"}, "toolbutton7": {"name": "ToolButton7", "type": "TToolButton"}, "n9": {"name": "N9", "type": "TMenuItem"}, "inswordexporter1": {"name": "INSWordExporter1", "type": "TINSWordExporter"}, "lbbookmarks": {"name": "lbBookmarks", "type": "TListBox"}, "fevents": {"name": "FEvents", "type": "IInsFullMotorCascoEvents"}}, {});
  U.init(async () => {
    U.var_("InsFullMotorCasco", null, "TInsFullMotorCasco");
    U.var_("f", true, "boolean");
  });
  U.method("TInsFullMotorCasco", "DefinePropertyPages", async function DefinePropertyPages(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"definepropertypage": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["definepropertypage"]);
  return L0.result;
}, {"params": ["DefinePropertyPage"], "kind": "procedure", "ptypes": ["TDefinePropertyPage"]});
  U.method("TInsFullMotorCasco", "EventSinkChanged", async function EventSinkChanged(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"eventsink": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["eventsink"]);
  await $.set(C, "FEvents", L0["eventsink"]);
  return L0.result;
}, {"params": ["EventSink"], "kind": "procedure", "ptypes": ["IUnknown"]});
  U.method("TInsFullMotorCasco", "Initialize", async function Initialize(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: undefined};
  await $.inherited(Self, "TInsFullMotorCasco", "Initialize", null, arguments);
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
  U.method("TInsFullMotorCasco", "Get_Active", async function Get_Active(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: false};
  L0["result"] = (await $.v(C, "Active"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TInsFullMotorCasco", "Get_AutoScroll", async function Get_AutoScroll(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: false};
  L0["result"] = (await $.v(C, "AutoScroll"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TInsFullMotorCasco", "Get_AutoSize", async function Get_AutoSize(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: false};
  L0["result"] = (await $.v(C, "AutoSize"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TInsFullMotorCasco", "Get_AxBorderStyle", async function Get_AxBorderStyle(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: null};
  L0["result"] = (await $.call(C, "Ord", [(await $.v(C, "AxBorderStyle"))]));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TInsFullMotorCasco", "Get_Caption", async function Get_Caption(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: ''};
  L0["result"] = (await $.call(C, "WideString", [(await $.v(C, "Caption"))]));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TInsFullMotorCasco", "Get_Color", async function Get_Color(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: null};
  L0["result"] = (await $.call(C, "OLE_COLOR", [(await $.v(C, "Color"))]));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TInsFullMotorCasco", "Get_Cursor", async function Get_Cursor(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: 0};
  L0["result"] = (await $.call(C, "Smallint", [(await $.v(C, "Cursor"))]));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TInsFullMotorCasco", "Get_DoubleBuffered", async function Get_DoubleBuffered(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: false};
  L0["result"] = (await $.v(C, "DoubleBuffered"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TInsFullMotorCasco", "Get_DropTarget", async function Get_DropTarget(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: false};
  L0["result"] = (await $.v(C, "DropTarget"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TInsFullMotorCasco", "Get_Enabled", async function Get_Enabled(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: false};
  L0["result"] = (await $.v(C, "Enabled"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TInsFullMotorCasco", "Get_Font", async function Get_Font(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: null};
  await $.stmt((await $.call(C, "GetOleFont", [(await $.v(C, "Font")), L0["result"]])));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TInsFullMotorCasco", "Get_HelpFile", async function Get_HelpFile(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: ''};
  L0["result"] = (await $.call(C, "WideString", [(await $.v(C, "HelpFile"))]));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TInsFullMotorCasco", "Get_KeyPreview", async function Get_KeyPreview(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: false};
  L0["result"] = (await $.v(C, "KeyPreview"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TInsFullMotorCasco", "Get_PixelsPerInch", async function Get_PixelsPerInch(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: 0};
  L0["result"] = (await $.v(C, "PixelsPerInch"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TInsFullMotorCasco", "Get_PrintScale", async function Get_PrintScale(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: null};
  L0["result"] = (await $.call(C, "Ord", [(await $.v(C, "PrintScale"))]));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TInsFullMotorCasco", "Get_Scaled", async function Get_Scaled(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: false};
  L0["result"] = (await $.v(C, "Scaled"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TInsFullMotorCasco", "Get_Visible", async function Get_Visible(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: false};
  L0["result"] = (await $.v(C, "Visible"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TInsFullMotorCasco", "Get_VisibleDockClientCount", async function Get_VisibleDockClientCount(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: 0};
  L0["result"] = (await $.v(C, "VisibleDockClientCount"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TInsFullMotorCasco", "_Set_Font", async function _Set_Font(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.stmt((await $.call(C, "SetOleFont", [(await $.v(C, "Font")), L0["value"]])));
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["IFontDisp"]});
  U.method("TInsFullMotorCasco", "ActivateEvent", async function ActivateEvent(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.ne((await $.v(C, "FEvents")), null))) {
    await $.mcall((await $.v(C, "FEvents")), "OnActivate", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TInsFullMotorCasco", "ClickEvent", async function ClickEvent(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.ne((await $.v(C, "FEvents")), null))) {
    await $.mcall((await $.v(C, "FEvents")), "OnClick", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TInsFullMotorCasco", "CreateEvent", async function CreateEvent(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.ne((await $.v(C, "FEvents")), null))) {
    await $.mcall((await $.v(C, "FEvents")), "OnCreate", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TInsFullMotorCasco", "DblClickEvent", async function DblClickEvent(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.ne((await $.v(C, "FEvents")), null))) {
    await $.mcall((await $.v(C, "FEvents")), "OnDblClick", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TInsFullMotorCasco", "DeactivateEvent", async function DeactivateEvent(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.ne((await $.v(C, "FEvents")), null))) {
    await $.mcall((await $.v(C, "FEvents")), "OnDeactivate", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TInsFullMotorCasco", "DestroyEvent", async function DestroyEvent(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.ne((await $.v(C, "FEvents")), null))) {
    await $.mcall((await $.v(C, "FEvents")), "OnDestroy", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TInsFullMotorCasco", "KeyPressEvent", async function KeyPressEvent(Self, p0, p1) {
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
  U.method("TInsFullMotorCasco", "PaintEvent", async function PaintEvent(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.ne((await $.v(C, "FEvents")), null))) {
    await $.mcall((await $.v(C, "FEvents")), "OnPaint", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TInsFullMotorCasco", "Set_AutoScroll", async function Set_AutoScroll(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "AutoScroll", L0["value"]);
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["WordBool"]});
  U.method("TInsFullMotorCasco", "Set_AutoSize", async function Set_AutoSize(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "AutoSize", L0["value"]);
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["WordBool"]});
  U.method("TInsFullMotorCasco", "Set_AxBorderStyle", async function Set_AxBorderStyle(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "AxBorderStyle", (await $.call(C, "TActiveFormBorderStyle", [L0["value"]])));
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["TxActiveFormBorderStyle"]});
  U.method("TInsFullMotorCasco", "Set_Caption", async function Set_Caption(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "Caption", (await $.call(C, "TCaption", [L0["value"]])));
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["WideString"]});
  U.method("TInsFullMotorCasco", "Set_Color", async function Set_Color(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "Color", (await $.call(C, "TColor", [L0["value"]])));
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["OLE_COLOR"]});
  U.method("TInsFullMotorCasco", "Set_Cursor", async function Set_Cursor(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "Cursor", (await $.call(C, "TCursor", [L0["value"]])));
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["Smallint"]});
  U.method("TInsFullMotorCasco", "Set_DoubleBuffered", async function Set_DoubleBuffered(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "DoubleBuffered", L0["value"]);
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["WordBool"]});
  U.method("TInsFullMotorCasco", "Set_DropTarget", async function Set_DropTarget(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "DropTarget", L0["value"]);
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["WordBool"]});
  U.method("TInsFullMotorCasco", "Set_Enabled", async function Set_Enabled(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "Enabled", L0["value"]);
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["WordBool"]});
  U.method("TInsFullMotorCasco", "Set_Font", async function Set_Font(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.asRef(p0), result: undefined};
  await $.stmt((await $.call(C, "SetOleFont", [(await $.v(C, "Font")), (await L0["value"].get())])));
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["IFontDisp"]});
  U.method("TInsFullMotorCasco", "Set_HelpFile", async function Set_HelpFile(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "HelpFile", (await $.call(C, "String", [L0["value"]])));
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["WideString"]});
  U.method("TInsFullMotorCasco", "Set_KeyPreview", async function Set_KeyPreview(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "KeyPreview", L0["value"]);
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["WordBool"]});
  U.method("TInsFullMotorCasco", "Set_PixelsPerInch", async function Set_PixelsPerInch(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "PixelsPerInch", L0["value"]);
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["Integer"]});
  U.method("TInsFullMotorCasco", "Set_PrintScale", async function Set_PrintScale(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "PrintScale", (await $.call(C, "TPrintScale", [L0["value"]])));
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["TxPrintScale"]});
  U.method("TInsFullMotorCasco", "Set_Scaled", async function Set_Scaled(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "Scaled", L0["value"]);
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["WordBool"]});
  U.method("TInsFullMotorCasco", "Set_Visible", async function Set_Visible(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "Visible", L0["value"]);
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["WordBool"]});
  U.method("TInsFullMotorCasco", "MouseWheelHandler", async function MouseWheelHandler(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"message": $.asRef(p0), result: undefined};
  await $.inherited(Self, "TInsFullMotorCasco", "MouseWheelHandler", null, arguments);
  if ($.truthy((await $.mv((await $.v(C, "GridMotor")), "Focused")))) {
    await $.mcall((await $.mv((await $.v(C, "GridMotor")), "SelectedRows")), "Clear", []);
    {
      const $t1 = (await $.call(C, "TCMMouseWheel", [(await L0["message"].get())]));
      const $t2 = (await $.mv((await $.mv((await $.wv([$t1], "GridMotor", C, false)), "DataSource")), "DataSet"));
      if ($.truthy($.lt((await $.wv([$t1, $t2], "WheelDelta", C, false)), 0))) {
        await $.stmt($.wcall([$t1, $t2], "Next", [], C));
      } else {
        await $.stmt($.wcall([$t1, $t2], "Prior", [], C));
      }
    }
  }
  return L0.result;
}, {"params": ["Message"], "kind": "procedure", "ptypes": ["TMessage"]});
  U.method("TInsFullMotorCasco", "InitData", async function InitData(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: undefined, "i": 0};
  L0["c_err_message"] = " Table or View in Dataset \"%s\" does not exist! ";
  {
    const $t3 = (await $.v(C, "DataModuleFullMotor"));
    { const $t4 = $.sub((await $.wv([$t3], "ComponentCount", C, false)), 1);
      await $.wset([$t3], "i", 0, { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true });
      let $t5 = true;
      for (;;) {
        if (!$t5) { await $.wset([$t3], "i", $.succ((await $.wv([$t3], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false)), 1), { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }); }
        $t5 = false;
        if (!($.ord((await $.wv([$t3], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false))) <= $.ord($t4))) break;
        if ($.truthy(($.is_((await $.idx((await $.wv([$t3], "Components", C, false)), [(await $.wv([$t3], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false))])), "TDataSet")))) {
          if ($.truthy($.eq((await $.mv(((await $.idx((await $.wv([$t3], "Components", C, false)), [(await $.wv([$t3], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false))]))), "Tag")), 1))) {
            try {
              await $.mcall((await $.idx((await $.wv([$t3], "Components", C, false)), [(await $.wv([$t3], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false))])), "Open", []);
            } catch ($t6) {
              $.rethrowControl($t6);
              $.handled($t6);
              throw $.raise((await $.mcall((await $.wv([$t3], "Exception", C, false)), "Create", [(await $.wcall([$t3], "Format", [(await $.wv([$t3], "c_err_message", { get: async () => L0["c_err_message"], set: async (v) => { L0["c_err_message"] = v; }, local: true }, false)), [(await $.mv(((await $.idx((await $.wv([$t3], "Components", C, false)), [(await $.wv([$t3], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false))]))), "Name"))]], C))])));
            }
          }
        }
        await $.tick();
      }
    }
  }
  return L0.result;
}, {"params": [], "kind": "procedure", "ptypes": []});
  U.method("TInsFullMotorCasco", "ActiveFormCreate", async function ActiveFormCreate(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mset((await $.v(C, "PanelAcc")), "Visible", false);
  await $.set(C, "InsFullMotorCasco", Self);
  await $.set(C, "DataModuleFullMotor", (await $.mcall((await $.v(C, "TDataModuleFullMotor")), "Create", [Self])));
  await $.set(C, "FullCascoForm", (await $.mcall((await $.v(C, "TFullCascoForm")), "Create", [Self])));
  await $.stmt($.call(C, "InitData", []));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TInsFullMotorCasco", "ActionInsertExecute", async function ActionInsertExecute(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mcall((await $.mv((await $.v(C, "DataModuleFullMotor")), "Ins_MotorFull")), "Insert", []);
  await $.mset((await $.mv((await $.v(C, "FullCascoForm")), "Back")), "Enabled", false);
  await $.mset((await $.mv((await $.v(C, "FullCascoForm")), "Next")), "Enabled", true);
  await $.mcall((await $.v(C, "FullCascoForm")), "ShowModal", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TInsFullMotorCasco", "ActionRefreshExecute", async function ActionRefreshExecute(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "motorid": 0};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t7 = (await $.mv((await $.v(C, "DataModuleFullMotor")), "Ins_MotorFull"));
    await $.wset([$t7], "MotorID", (await $.mv((await $.wcall([$t7], "FieldByName", ["ID"], C)), "AsInteger")), { get: async () => L0["motorid"], set: async (v) => { L0["motorid"] = v; }, local: true });
    await $.stmt($.wcall([$t7], "CloseAll", [], C));
    await $.stmt($.wcall([$t7], "Open", [], C));
    await $.stmt((await $.wcall([$t7], "Locate", ["ID", (await $.wv([$t7], "MotorID", { get: async () => L0["motorid"], set: async (v) => { L0["motorid"] = v; }, local: true }, false)), []], C)));
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TInsFullMotorCasco", "ActionEditExecute", async function ActionEditExecute(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy((await $.mv((await $.mv((await $.v(C, "DataModuleFullMotor")), "Ins_MotorFull")), "IsEmpty")))) {
    await $.stmt((await $.call(C, "ShowMessage", ["Cədvəldə məlumat yoxdur !"])));
    return L0.result;
  }
  {
    const $t8 = (await $.v(C, "DataModuleFullMotor"));
    await $.mcall((await $.wv([$t8], "Ins_MotorFull", C, false)), "Edit", []);
    await $.mcall((await $.wv([$t8], "Accesories", C, false)), "Edit", []);
    await $.mcall((await $.wv([$t8], "MorethanOne", C, false)), "Edit", []);
  }
  await $.mset((await $.mv((await $.v(C, "FullCascoForm")), "Back")), "Enabled", false);
  await $.mset((await $.mv((await $.v(C, "FullCascoForm")), "Next")), "Enabled", true);
  await $.mcall((await $.v(C, "FullCascoForm")), "ShowModal", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TInsFullMotorCasco", "ActionFullRefreshExecute", async function ActionFullRefreshExecute(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.stmt((await $.mcall((await $.v(C, "DataModuleFullMotor")), "FullRefresh", [""])));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TInsFullMotorCasco", "N1DrawItem", async function N1DrawItem(Self, p0, p1, p2, p3) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "acanvas": $.copyArg(p1), "arect": $.copyArg(p2), "selected": $.copyArg(p3), result: undefined, "linebottom": 0, "stext": '', "bar": null};
  await $.fixArgs(L0, ["sender", "acanvas", "arect", "selected"]);
  {
    const $t9 = L0["acanvas"];
    const $t10 = (await $.wv([$t9], "Sender", { get: async () => L0["sender"], set: async (v) => { L0["sender"] = v; }, local: true }, false));
    {
      const $t11 = (await $.wv([$t9, $t10], "Font", C, false));
      await $.wset([$t9, $t10, $t11], "Name", "Azl Sans Serif", C);
      await $.wset([$t9, $t10, $t11], "Charset", (await $.wv([$t9, $t10, $t11], "RUSSIAN_CHARSET", C, false)), C);
      if ($.truthy((await $.wv([$t9, $t10, $t11], "Default", C, false)))) {
        await $.wset([$t9, $t10, $t11], "Style", [(await $.wv([$t9, $t10, $t11], "fsBold", C, false))], C);
      }
    }
    if ($.truthy($.eq((await $.wv([$t9, $t10], "Caption", C, false)), "-"))) {
      await $.mset((await $.wv([$t9, $t10], "Pen", C, false)), "Color", (await $.wv([$t9, $t10], "clBlack", C, false)));
      await $.wset([$t9, $t10], "LineBottom", $.sub(($.add((await $.mv((await $.wv([$t9, $t10], "ARect", { get: async () => L0["arect"], set: async (v) => { L0["arect"] = v; }, local: true }, false)), "Top")), $.idiv(($.sub((await $.mv((await $.wv([$t9, $t10], "ARect", { get: async () => L0["arect"], set: async (v) => { L0["arect"] = v; }, local: true }, false)), "Bottom")), (await $.mv((await $.wv([$t9, $t10], "ARect", { get: async () => L0["arect"], set: async (v) => { L0["arect"] = v; }, local: true }, false)), "Top")))), 2))), 1), { get: async () => L0["linebottom"], set: async (v) => { L0["linebottom"] = v; }, local: true });
      await $.stmt((await $.wcall([$t9, $t10], "MoveTo", [(await $.mv((await $.wv([$t9, $t10], "ARect", { get: async () => L0["arect"], set: async (v) => { L0["arect"] = v; }, local: true }, false)), "Left")), (await $.wv([$t9, $t10], "LineBottom", { get: async () => L0["linebottom"], set: async (v) => { L0["linebottom"] = v; }, local: true }, false))], C)));
      await $.stmt((await $.wcall([$t9, $t10], "LineTo", [(await $.mv((await $.wv([$t9, $t10], "ARect", { get: async () => L0["arect"], set: async (v) => { L0["arect"] = v; }, local: true }, false)), "Right")), (await $.wv([$t9, $t10], "LineBottom", { get: async () => L0["linebottom"], set: async (v) => { L0["linebottom"] = v; }, local: true }, false))], C)));
      await $.stmt((await $.wcall([$t9, $t10], "inc", [$.ref(async () => (await $.wv([$t9, $t10], "LineBottom", { get: async () => L0["linebottom"], set: async (v) => { L0["linebottom"] = v; }, local: true }, false)), async ($t12) => { await $.wset([$t9, $t10], "LineBottom", $t12, { get: async () => L0["linebottom"], set: async (v) => { L0["linebottom"] = v; }, local: true }); })], C)));
      await $.mset((await $.wv([$t9, $t10], "Pen", C, false)), "Color", (await $.wv([$t9, $t10], "clWhite", C, false)));
      await $.stmt((await $.wcall([$t9, $t10], "MoveTo", [(await $.mv((await $.wv([$t9, $t10], "ARect", { get: async () => L0["arect"], set: async (v) => { L0["arect"] = v; }, local: true }, false)), "Left")), (await $.wv([$t9, $t10], "LineBottom", { get: async () => L0["linebottom"], set: async (v) => { L0["linebottom"] = v; }, local: true }, false))], C)));
      await $.stmt((await $.wcall([$t9, $t10], "LineTo", [(await $.mv((await $.wv([$t9, $t10], "ARect", { get: async () => L0["arect"], set: async (v) => { L0["arect"] = v; }, local: true }, false)), "Right")), (await $.wv([$t9, $t10], "LineBottom", { get: async () => L0["linebottom"], set: async (v) => { L0["linebottom"] = v; }, local: true }, false))], C)));
    } else {
      if ($.truthy((await $.wv([$t9, $t10], "Selected", { get: async () => L0["selected"], set: async (v) => { L0["selected"] = v; }, local: true }, false)))) {
        await $.mset((await $.wv([$t9, $t10], "Brush", C, false)), "Color", (await $.wv([$t9, $t10], "clNavy", C, false)));
        if ($.truthy((await $.wv([$t9, $t10], "Enabled", C, false)))) {
          await $.mset((await $.wv([$t9, $t10], "Font", C, false)), "Color", (await $.wv([$t9, $t10], "clWhite", C, false)));
        } else {
          await $.mset((await $.wv([$t9, $t10], "Font", C, false)), "Color", (await $.wv([$t9, $t10], "clSilver", C, false)));
        }
      } else {
        await $.mset((await $.wv([$t9, $t10], "Brush", C, false)), "Color", (await $.wv([$t9, $t10], "clBtnFace", C, false)));
        if ($.truthy((await $.wv([$t9, $t10], "Enabled", C, false)))) {
          await $.mset((await $.wv([$t9, $t10], "Font", C, false)), "Color", (await $.wv([$t9, $t10], "clBlack", C, false)));
        } else {
          await $.mset((await $.wv([$t9, $t10], "Font", C, false)), "Color", (await $.wv([$t9, $t10], "clGrayText", C, false)));
        }
      }
      await $.wset([$t9, $t10], "Bar", (await $.wv([$t9, $t10], "ARect", { get: async () => L0["arect"], set: async (v) => { L0["arect"] = v; }, local: true }, false)), { get: async () => L0["bar"], set: async (v) => { L0["bar"] = v; }, local: true });
      await $.stmt((await $.wcall([$t9, $t10], "Inc", [$.ref(async () => (await $.mv((await $.wv([$t9, $t10], "Bar", { get: async () => L0["bar"], set: async (v) => { L0["bar"] = v; }, local: true }, false)), "Left")), async ($t13) => { await $.mset((await $.wv([$t9, $t10], "Bar", { get: async () => L0["bar"], set: async (v) => { L0["bar"] = v; }, local: true }, false)), "Left", $t13); }), 22], C)));
      await $.stmt((await $.wcall([$t9, $t10], "FillRect", [(await $.wv([$t9, $t10], "Bar", { get: async () => L0["bar"], set: async (v) => { L0["bar"] = v; }, local: true }, false))], C)));
      await $.stmt((await $.wcall([$t9, $t10], "TextOut", [$.add((await $.mv((await $.wv([$t9, $t10], "ARect", { get: async () => L0["arect"], set: async (v) => { L0["arect"] = v; }, local: true }, false)), "Left")), 22), $.add((await $.mv((await $.wv([$t9, $t10], "ARect", { get: async () => L0["arect"], set: async (v) => { L0["arect"] = v; }, local: true }, false)), "Top")), 1), (await $.wv([$t9, $t10], "Caption", C, false))], C)));
    }
    await $.wset([$t9, $t10], "SText", (await $.wcall([$t9, $t10], "ShortCutToText", [(await $.wv([$t9, $t10], "ShortCut", C, false))], C)), { get: async () => L0["stext"], set: async (v) => { L0["stext"] = v; }, local: true });
    await $.stmt((await $.wcall([$t9, $t10], "TextOut", [$.sub($.sub((await $.mv((await $.wv([$t9, $t10], "ARect", { get: async () => L0["arect"], set: async (v) => { L0["arect"] = v; }, local: true }, false)), "Right")), (await $.wcall([$t9, $t10], "TextWidth", [(await $.wv([$t9, $t10], "SText", { get: async () => L0["stext"], set: async (v) => { L0["stext"] = v; }, local: true }, false))], C))), 2), $.add((await $.mv((await $.wv([$t9, $t10], "ARect", { get: async () => L0["arect"], set: async (v) => { L0["arect"] = v; }, local: true }, false)), "Top")), 1), (await $.wv([$t9, $t10], "SText", { get: async () => L0["stext"], set: async (v) => { L0["stext"] = v; }, local: true }, false))], C)));
    if ($.truthy($.ne((await $.wv([$t9, $t10], "ImageIndex", C, false)), (-(1))))) {
      {
        const $t14 = (await $.wv([$t9, $t10], "GetParentMenu", C, false));
        if ($.truthy((await $.wcall([$t9, $t10, $t14], "Assigned", [(await $.wv([$t9, $t10, $t14], "Images", C, false))], C)))) {
          if ($.truthy((await $.wv([$t9, $t10, $t14], "Checked", C, false)))) {
            await $.mset((await $.wv([$t9, $t10, $t14], "Bar", { get: async () => L0["bar"], set: async (v) => { L0["bar"] = v; }, local: true }, false)), "Left", $.add((await $.mv((await $.wv([$t9, $t10, $t14], "ARect", { get: async () => L0["arect"], set: async (v) => { L0["arect"] = v; }, local: true }, false)), "Left")), 1));
            await $.mset((await $.wv([$t9, $t10, $t14], "Bar", { get: async () => L0["bar"], set: async (v) => { L0["bar"] = v; }, local: true }, false)), "Right", $.add((await $.mv((await $.wv([$t9, $t10, $t14], "Bar", { get: async () => L0["bar"], set: async (v) => { L0["bar"] = v; }, local: true }, false)), "Left")), 16));
            await $.mset((await $.wv([$t9, $t10, $t14], "Bar", { get: async () => L0["bar"], set: async (v) => { L0["bar"] = v; }, local: true }, false)), "Top", $.add((await $.mv((await $.wv([$t9, $t10, $t14], "ARect", { get: async () => L0["arect"], set: async (v) => { L0["arect"] = v; }, local: true }, false)), "Top")), 1));
            await $.mset((await $.wv([$t9, $t10, $t14], "Bar", { get: async () => L0["bar"], set: async (v) => { L0["bar"] = v; }, local: true }, false)), "Bottom", $.add((await $.mv((await $.wv([$t9, $t10, $t14], "Bar", { get: async () => L0["bar"], set: async (v) => { L0["bar"] = v; }, local: true }, false)), "Top")), 16));
            await $.mset((await $.mv((await $.wv([$t9, $t10, $t14], "ACanvas", { get: async () => L0["acanvas"], set: async (v) => { L0["acanvas"] = v; }, local: true }, false)), "Brush")), "Color", (await $.wv([$t9, $t10, $t14], "clBtnShadow", C, false)));
            await $.stmt((await $.mcall((await $.wv([$t9, $t10, $t14], "ACanvas", { get: async () => L0["acanvas"], set: async (v) => { L0["acanvas"] = v; }, local: true }, false)), "FrameRect", [(await $.wv([$t9, $t10, $t14], "Bar", { get: async () => L0["bar"], set: async (v) => { L0["bar"] = v; }, local: true }, false))])));
            await $.stmt((await $.wcall([$t9, $t10, $t14], "Inc", [$.ref(async () => (await $.mv((await $.wv([$t9, $t10, $t14], "Bar", { get: async () => L0["bar"], set: async (v) => { L0["bar"] = v; }, local: true }, false)), "Left")), async ($t15) => { await $.mset((await $.wv([$t9, $t10, $t14], "Bar", { get: async () => L0["bar"], set: async (v) => { L0["bar"] = v; }, local: true }, false)), "Left", $t15); }), 2], C)));
            await $.stmt((await $.wcall([$t9, $t10, $t14], "Inc", [$.ref(async () => (await $.mv((await $.wv([$t9, $t10, $t14], "Bar", { get: async () => L0["bar"], set: async (v) => { L0["bar"] = v; }, local: true }, false)), "Right")), async ($t16) => { await $.mset((await $.wv([$t9, $t10, $t14], "Bar", { get: async () => L0["bar"], set: async (v) => { L0["bar"] = v; }, local: true }, false)), "Right", $t16); }), 2], C)));
            await $.stmt((await $.wcall([$t9, $t10, $t14], "Inc", [$.ref(async () => (await $.mv((await $.wv([$t9, $t10, $t14], "Bar", { get: async () => L0["bar"], set: async (v) => { L0["bar"] = v; }, local: true }, false)), "Top")), async ($t17) => { await $.mset((await $.wv([$t9, $t10, $t14], "Bar", { get: async () => L0["bar"], set: async (v) => { L0["bar"] = v; }, local: true }, false)), "Top", $t17); }), 2], C)));
            await $.stmt((await $.wcall([$t9, $t10, $t14], "Inc", [$.ref(async () => (await $.mv((await $.wv([$t9, $t10, $t14], "Bar", { get: async () => L0["bar"], set: async (v) => { L0["bar"] = v; }, local: true }, false)), "Bottom")), async ($t18) => { await $.mset((await $.wv([$t9, $t10, $t14], "Bar", { get: async () => L0["bar"], set: async (v) => { L0["bar"] = v; }, local: true }, false)), "Bottom", $t18); }), 2], C)));
            await $.mset((await $.mv((await $.wv([$t9, $t10, $t14], "ACanvas", { get: async () => L0["acanvas"], set: async (v) => { L0["acanvas"] = v; }, local: true }, false)), "Brush")), "Color", (await $.wv([$t9, $t10, $t14], "clBtnHighlight", C, false)));
            await $.stmt((await $.mcall((await $.wv([$t9, $t10, $t14], "ACanvas", { get: async () => L0["acanvas"], set: async (v) => { L0["acanvas"] = v; }, local: true }, false)), "FrameRect", [(await $.wv([$t9, $t10, $t14], "Bar", { get: async () => L0["bar"], set: async (v) => { L0["bar"] = v; }, local: true }, false))])));
            await $.stmt((await $.wcall([$t9, $t10, $t14], "Dec", [$.ref(async () => (await $.mv((await $.wv([$t9, $t10, $t14], "Bar", { get: async () => L0["bar"], set: async (v) => { L0["bar"] = v; }, local: true }, false)), "Left")), async ($t19) => { await $.mset((await $.wv([$t9, $t10, $t14], "Bar", { get: async () => L0["bar"], set: async (v) => { L0["bar"] = v; }, local: true }, false)), "Left", $t19); }), 1], C)));
            await $.stmt((await $.wcall([$t9, $t10, $t14], "Dec", [$.ref(async () => (await $.mv((await $.wv([$t9, $t10, $t14], "Bar", { get: async () => L0["bar"], set: async (v) => { L0["bar"] = v; }, local: true }, false)), "Right")), async ($t20) => { await $.mset((await $.wv([$t9, $t10, $t14], "Bar", { get: async () => L0["bar"], set: async (v) => { L0["bar"] = v; }, local: true }, false)), "Right", $t20); }), 1], C)));
            await $.stmt((await $.wcall([$t9, $t10, $t14], "Dec", [$.ref(async () => (await $.mv((await $.wv([$t9, $t10, $t14], "Bar", { get: async () => L0["bar"], set: async (v) => { L0["bar"] = v; }, local: true }, false)), "Top")), async ($t21) => { await $.mset((await $.wv([$t9, $t10, $t14], "Bar", { get: async () => L0["bar"], set: async (v) => { L0["bar"] = v; }, local: true }, false)), "Top", $t21); }), 1], C)));
            await $.stmt((await $.wcall([$t9, $t10, $t14], "Dec", [$.ref(async () => (await $.mv((await $.wv([$t9, $t10, $t14], "Bar", { get: async () => L0["bar"], set: async (v) => { L0["bar"] = v; }, local: true }, false)), "Bottom")), async ($t22) => { await $.mset((await $.wv([$t9, $t10, $t14], "Bar", { get: async () => L0["bar"], set: async (v) => { L0["bar"] = v; }, local: true }, false)), "Bottom", $t22); }), 1], C)));
            if ($.truthy((await $.wv([$t9, $t10, $t14], "Selected", { get: async () => L0["selected"], set: async (v) => { L0["selected"] = v; }, local: true }, false)))) {
              await $.mset((await $.mv((await $.wv([$t9, $t10, $t14], "ACanvas", { get: async () => L0["acanvas"], set: async (v) => { L0["acanvas"] = v; }, local: true }, false)), "Brush")), "Color", (await $.wv([$t9, $t10, $t14], "clBtnFace", C, false)));
            } else {
              await $.mset((await $.mv((await $.wv([$t9, $t10, $t14], "ACanvas", { get: async () => L0["acanvas"], set: async (v) => { L0["acanvas"] = v; }, local: true }, false)), "Brush")), "Color", (await $.wv([$t9, $t10, $t14], "clBtnHighlight", C, false)));
            }
            await $.stmt((await $.mcall((await $.wv([$t9, $t10, $t14], "ACanvas", { get: async () => L0["acanvas"], set: async (v) => { L0["acanvas"] = v; }, local: true }, false)), "FillRect", [(await $.wv([$t9, $t10, $t14], "Bar", { get: async () => L0["bar"], set: async (v) => { L0["bar"] = v; }, local: true }, false))])));
          }
          await $.stmt((await $.mcall((await $.wv([$t9, $t10, $t14], "Images", C, false)), "Draw", [(await $.wv([$t9, $t10, $t14], "ACanvas", { get: async () => L0["acanvas"], set: async (v) => { L0["acanvas"] = v; }, local: true }, false)), (await $.mv((await $.wv([$t9, $t10, $t14], "ARect", { get: async () => L0["arect"], set: async (v) => { L0["arect"] = v; }, local: true }, false)), "Left")), (await $.mv((await $.wv([$t9, $t10, $t14], "ARect", { get: async () => L0["arect"], set: async (v) => { L0["arect"] = v; }, local: true }, false)), "Top")), (await $.wv([$t9, $t10, $t14], "ImageIndex", C, false)), (await $.wv([$t9, $t10, $t14], "Enabled", C, false))])));
        }
      }
    }
  }
  return L0.result;
}, {"params": ["Sender", "ACanvas", "ARect", "Selected"], "kind": "procedure", "ptypes": ["TObject", "TCanvas", "TRect", "Boolean"]});
  U.method("TInsFullMotorCasco", "GridMotorTitleClick", async function GridMotorTitleClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"column": $.copyArg(p0), result: undefined, "titlename": ''};
  await $.fixArgs(L0, ["column"]);
  if ($.truthy((await $.mv((await $.mv(L0["column"], "Field")), "Calculated")))) {
    return L0.result;
  }
  L0["titlename"] = (await $.mv(L0["column"], "FieldName"));
  {
    const $t23 = (await $.mv((await $.v(C, "DataModuleFullMotor")), "Ins_MotorFull"));
    await $.mset((await $.wv([$t23], "Screen", C, false)), "Cursor", (await $.wv([$t23], "crSQLWait", C, false)));
    await $.stmt((await $.wcall([$t23], "SetVariable", ["Title", (await $.wv([$t23], "TitleName", { get: async () => L0["titlename"], set: async (v) => { L0["titlename"] = v; }, local: true }, false))], C)));
    await $.stmt($.wcall([$t23], "Refresh", [], C));
    await $.mset((await $.wv([$t23], "Screen", C, false)), "Cursor", (await $.wv([$t23], "crDefault", C, false)));
  }
  return L0.result;
}, {"params": ["Column"], "kind": "procedure", "ptypes": ["TColumn"]});
  U.method("TInsFullMotorCasco", "ActionDeleteExecute", async function ActionDeleteExecute(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "id": 0, "i": 0, "waitnextconfirm": false, "willrefresh": false};
  await $.fixArgs(L0, ["sender"]);
  L0["waitnextconfirm"] = true;
  L0["willrefresh"] = false;
  {
    const $t24 = (await $.v(C, "GridMotor"));
    const $t25 = (await $.wv([$t24], "SelectedRows", C, false));
    const $t26 = (await $.wv([$t24, $t25], "DataModuleFullMotor", C, false));
    const $t27 = (await $.wv([$t24, $t25, $t26], "Ins_MotorFull", C, false));
    try {
      if ($.truthy($.eq((await $.wv([$t24, $t25, $t26, $t27], "Count", C, false)), 0))) {
        await $.wset([$t24, $t25, $t26, $t27], "CurrentRowSelected", (await $.wv([$t24, $t25, $t26, $t27], "True", C, false)), C);
      }
      { const $t28 = $.sub((await $.wv([$t24, $t25, $t26, $t27], "Count", C, false)), 1);
        await $.wset([$t24, $t25, $t26, $t27], "I", 0, { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true });
        let $t29 = true;
        for (;;) {
          if (!$t29) { await $.wset([$t24, $t25, $t26, $t27], "I", $.succ((await $.wv([$t24, $t25, $t26, $t27], "I", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false)), 1), { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }); }
          $t29 = false;
          if (!($.ord((await $.wv([$t24, $t25, $t26, $t27], "I", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false))) <= $.ord($t28))) break;
          await $.stmt((await $.wcall([$t24, $t25, $t26, $t27], "GotoBookmark", [(await $.wcall([$t24, $t25, $t26, $t27], "Pointer", [(await $.idx((await $.wv([$t24, $t25, $t26, $t27], "Items", C, false)), [(await $.wv([$t24, $t25, $t26, $t27], "I", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false))]))], C))], C)));
          await $.wset([$t24, $t25, $t26, $t27], "ID", (await $.mv((await $.wcall([$t24, $t25, $t26, $t27], "FieldbyName", ["ID"], C)), "AsInteger")), { get: async () => L0["id"], set: async (v) => { L0["id"] = v; }, local: true });
          if ($.truthy((await $.wv([$t24, $t25, $t26, $t27], "WaitNextConfirm", { get: async () => L0["waitnextconfirm"], set: async (v) => { L0["waitnextconfirm"] = v; }, local: true }, false)))) {
            { const $t30 = (await $.wcall([$t24, $t25, $t26, $t27], "MessageDlg", ["Məlumatlar silinsin ?", (await $.wv([$t24, $t25, $t26, $t27], "mtConfirmation", C, false)), [(await $.wv([$t24, $t25, $t26, $t27], "mbYes", C, false)), (await $.wv([$t24, $t25, $t26, $t27], "mbNo", C, false)), (await $.wv([$t24, $t25, $t26, $t27], "mbCancel", C, false)), (await $.wv([$t24, $t25, $t26, $t27], "mbYesToAll", C, false))], 0], C));
              if ($.eq($t30, (await $.wv([$t24, $t25, $t26, $t27], "mrNo", C, false)))) {
                continue;
              }
              else if ($.eq($t30, (await $.wv([$t24, $t25, $t26, $t27], "mrCancel", C, false)))) {
                break;
              }
              else if ($.eq($t30, (await $.wv([$t24, $t25, $t26, $t27], "mrYesToAll", C, false)))) {
                if ($.truthy($.eq((await $.wcall([$t24, $t25, $t26, $t27], "MessageDlg", [(await $.wcall([$t24, $t25, $t26, $t27], "Format", ["%d  sayda məlumat silinsin?", [$.sub((await $.wv([$t24, $t25, $t26, $t27], "Count", C, false)), (await $.wv([$t24, $t25, $t26, $t27], "I", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false)))]], C)), (await $.wv([$t24, $t25, $t26, $t27], "mtConfirmation", C, false)), [(await $.wv([$t24, $t25, $t26, $t27], "mbYes", C, false)), (await $.wv([$t24, $t25, $t26, $t27], "mbCancel", C, false))], 0], C)), (await $.wv([$t24, $t25, $t26, $t27], "mrYes", C, false))))) {
                  await $.wset([$t24, $t25, $t26, $t27], "WaitNextConfirm", (await $.wv([$t24, $t25, $t26, $t27], "False", C, false)), { get: async () => L0["waitnextconfirm"], set: async (v) => { L0["waitnextconfirm"] = v; }, local: true });
                } else {
                  continue;
                }
              }
            }
          }
          await $.mcall((await $.wv([$t24, $t25, $t26, $t27], "Application", C, false)), "ProcessMessages", []);
          await $.stmt((await $.wcall([$t24, $t25, $t26, $t27], "DeleteMotorInfo", [(await $.wv([$t24, $t25, $t26, $t27], "ID", { get: async () => L0["id"], set: async (v) => { L0["id"] = v; }, local: true }, false))], C)));
          await $.wset([$t24, $t25, $t26, $t27], "WillRefresh", (await $.wv([$t24, $t25, $t26, $t27], "True", C, false)), { get: async () => L0["willrefresh"], set: async (v) => { L0["willrefresh"] = v; }, local: true });
          await $.tick();
        }
      }
      await $.stmt((await $.wcall([$t24, $t25, $t26, $t27], "ActionRefreshExecute", [(await $.wv([$t24, $t25, $t26, $t27], "sender", { get: async () => L0["sender"], set: async (v) => { L0["sender"] = v; }, local: true }, false))], C)));
    } finally {
      if ($.truthy((await $.wv([$t24, $t25, $t26, $t27], "WillRefresh", { get: async () => L0["willrefresh"], set: async (v) => { L0["willrefresh"] = v; }, local: true }, false)))) {
        await $.stmt((await $.wcall([$t24, $t25, $t26, $t27], "ActionRefreshExecute", [(await $.wv([$t24, $t25, $t26, $t27], "Sender", { get: async () => L0["sender"], set: async (v) => { L0["sender"] = v; }, local: true }, false))], C)));
      }
    }
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TINSFULLMotorCasco", "ActionCall", async function ActionCall(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.stmt((await $.call(C, "ActionDeleteExecute", [L0["sender"]])));
  return L0.result;
}, {"params": ["sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TInsFullMotorCasco", "ReportExecute", async function ReportExecute(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "i": 0, "insid": 0, "s": ''};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t31 = (await $.v(C, "GridMotor"));
    const $t32 = (await $.mv((await $.wv([$t31], "DataModuleFullMotor", C, false)), "Ins_MotorFull"));
    if ($.truthy($.eq((await $.mv((await $.wv([$t31, $t32], "SelectedRows", C, false)), "Count")), 0))) {
      await $.mset((await $.wv([$t31, $t32], "SelectedRows", C, false)), "CurrentRowSelected", (await $.wv([$t31, $t32], "true", C, false)));
    }
    await $.stmt((await $.wcall([$t31, $t32], "GotoBookMark", [(await $.wcall([$t31, $t32], "Pointer", [(await $.idx((await $.mv((await $.wv([$t31, $t32], "SelectedRows", C, false)), "items")), [0]))], C))], C)));
    await $.wset([$t31, $t32], "insid", (await $.mv((await $.wcall([$t31, $t32], "FieldByName", ["id"], C)), "AsInteger")), { get: async () => L0["insid"], set: async (v) => { L0["insid"] = v; }, local: true });
    await $.wset([$t31, $t32], "s", $.add("id= ", (await $.wcall([$t31, $t32], "IntToStr", [(await $.wv([$t31, $t32], "insid", { get: async () => L0["insid"], set: async (v) => { L0["insid"] = v; }, local: true }, false))], C))), { get: async () => L0["s"], set: async (v) => { L0["s"] = v; }, local: true });
    { const $t33 = $.sub((await $.mv((await $.wv([$t31, $t32], "SelectedRows", C, false)), "Count")), 1);
      await $.wset([$t31, $t32], "i", 1, { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true });
      let $t34 = true;
      for (;;) {
        if (!$t34) { await $.wset([$t31, $t32], "i", $.succ((await $.wv([$t31, $t32], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false)), 1), { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }); }
        $t34 = false;
        if (!($.ord((await $.wv([$t31, $t32], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false))) <= $.ord($t33))) break;
        await $.stmt((await $.wcall([$t31, $t32], "GoToBookMark", [(await $.wcall([$t31, $t32], "Pointer", [(await $.idx((await $.mv((await $.wv([$t31, $t32], "SelectedRows", C, false)), "Items")), [(await $.wv([$t31, $t32], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false))]))], C))], C)));
        await $.wset([$t31, $t32], "insid", (await $.mv((await $.wcall([$t31, $t32], "FieldByName", ["id"], C)), "AsInteger")), { get: async () => L0["insid"], set: async (v) => { L0["insid"] = v; }, local: true });
        await $.wset([$t31, $t32], "s", $.add($.add($.add((await $.wv([$t31, $t32], "s", { get: async () => L0["s"], set: async (v) => { L0["s"] = v; }, local: true }, false)), " or "), "id = "), (await $.wcall([$t31, $t32], "IntToStr", [(await $.wv([$t31, $t32], "insid", { get: async () => L0["insid"], set: async (v) => { L0["insid"] = v; }, local: true }, false))], C))), { get: async () => L0["s"], set: async (v) => { L0["s"] = v; }, local: true });
        await $.tick();
      }
    }
    {
      const $t35 = (await $.mv((await $.wv([$t31, $t32], "DataModuleFullMotor", C, false)), "Ins_Report"));
      await $.stmt($.wcall([$t31, $t32, $t35], "Close", [], C));
      await $.mcall((await $.wv([$t31, $t32, $t35], "SQL", C, false)), "Clear", []);
      await $.mset((await $.wv([$t31, $t32, $t35], "Sql", C, false)), "Text", $.add($.add($.add($.add($.add($.add("select id, PINS_FullMotor.returnName(kli_id) as name,Pins_FullMotor.returnAddress(kli_id) as Address,PINS_FullMotor.returnPhone(kli_id) as phone,", "PINS_FullMotor.returnFax(kli_id) as fax,contact_person, banking_details,profitid,"), "insuredmodel,insuredtype,"), "insuredstatenum, insuredcolor,insuredoutputyear,insurednumseats,insuredenginenum,"), "insuredchassisnum,insuredactualvalue,transmission_type,presence_alarm,motor_usage,"), "motorstorageplace,existingdamage,insurancegeographicallimit from ins_motorfull where "), (await $.wv([$t31, $t32, $t35], "s", { get: async () => L0["s"], set: async (v) => { L0["s"] = v; }, local: true }, false))));
      await $.stmt($.wcall([$t31, $t32, $t35], "Open", [], C));
    }
    {
      const $t36 = (await $.wv([$t31, $t32], "INSWordExporter1", C, false));
      await $.wset([$t31, $t32, $t36], "FileName", $.add((await $.wcall([$t31, $t32, $t36], "ExtractFilePath", [(await $.mv((await $.wv([$t31, $t32, $t36], "Application", C, false)), "ExeName"))], C)), "\\MotorFullApplicationForm.doc"), C);
      await $.stmt((await $.wcall([$t31, $t32, $t36], "Open", [(await $.wv([$t31, $t32, $t36], "False", C, false))], C)));
      { const $t37 = $.sub((await $.mv((await $.mv((await $.wv([$t31, $t32, $t36], "lbBookmarks", C, false)), "Items")), "Count")), 1);
        await $.wset([$t31, $t32, $t36], "i", 0, { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true });
        let $t38 = true;
        for (;;) {
          if (!$t38) { await $.wset([$t31, $t32, $t36], "i", $.succ((await $.wv([$t31, $t32, $t36], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false)), 1), { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }); }
          $t38 = false;
          if (!($.ord((await $.wv([$t31, $t32, $t36], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false))) <= $.ord($t37))) break;
          if ($.truthy((await $.mv((await $.idx((await $.mv((await $.mv((await $.wv([$t31, $t32, $t36], "DataModuleFullMotor", C, false)), "Ins_Report")), "Fields")), [$.add((await $.wv([$t31, $t32, $t36], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false)), 1)])), "IsNull")))) {
            continue;
          }
          await $.stmt((await $.wcall([$t31, $t32, $t36], "SetBookmark", [(await $.idx((await $.mv((await $.wv([$t31, $t32, $t36], "lbBookmarks", C, false)), "Items")), [(await $.wv([$t31, $t32, $t36], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false))])), (await $.mv((await $.idx((await $.mv((await $.mv((await $.wv([$t31, $t32, $t36], "DataModuleFullMotor", C, false)), "Ins_Report")), "Fields")), [$.add((await $.wv([$t31, $t32, $t36], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false)), 1)])), "value")), (await $.wv([$t31, $t32, $t36], "True", C, false)), (await $.wv([$t31, $t32, $t36], "false", C, false)), (await $.wv([$t31, $t32, $t36], "False", C, false)), (await $.wv([$t31, $t32, $t36], "false", C, false)), 10, "Arial AzLat", (await $.wv([$t31, $t32, $t36], "False", C, false))], C)));
          await $.tick();
        }
      }
      await $.stmt((await $.wcall([$t31, $t32, $t36], "SetBookmark", ["ContactP", (await $.mv((await $.mv((await $.wv([$t31, $t32, $t36], "DataModuleFullMotor", C, false)), "CustomersContactperson")), "value")), (await $.wv([$t31, $t32, $t36], "True", C, false)), (await $.wv([$t31, $t32, $t36], "false", C, false)), (await $.wv([$t31, $t32, $t36], "False", C, false)), (await $.wv([$t31, $t32, $t36], "false", C, false)), 10, "Arial AzLat", (await $.wv([$t31, $t32, $t36], "False", C, false))], C)));
      await $.stmt((await $.wcall([$t31, $t32, $t36], "SetBookmark", ["Beneficiary", (await $.mv((await $.mv((await $.wv([$t31, $t32, $t36], "DataModuleFullMotor", C, false)), "ODSBeneficiaryName")), "value")), (await $.wv([$t31, $t32, $t36], "True", C, false)), (await $.wv([$t31, $t32, $t36], "false", C, false)), (await $.wv([$t31, $t32, $t36], "False", C, false)), (await $.wv([$t31, $t32, $t36], "false", C, false)), 10, "Arial AzLat", (await $.wv([$t31, $t32, $t36], "False", C, false))], C)));
      await $.stmt((await $.wcall([$t31, $t32, $t36], "SetBookmark", ["BeneficiaryA", (await $.mv((await $.mv((await $.wv([$t31, $t32, $t36], "DataModuleFullMotor", C, false)), "ODSBeneficiaryAddress")), "value")), (await $.wv([$t31, $t32, $t36], "True", C, false)), (await $.wv([$t31, $t32, $t36], "false", C, false)), (await $.wv([$t31, $t32, $t36], "False", C, false)), (await $.wv([$t31, $t32, $t36], "false", C, false)), 10, "Arial AzLat", (await $.wv([$t31, $t32, $t36], "False", C, false))], C)));
      await $.stmt((await $.wcall([$t31, $t32, $t36], "SetBookmark", ["BeneficiaryT", (await $.mv((await $.mv((await $.wv([$t31, $t32, $t36], "DataModuleFullMotor", C, false)), "ODSBeneficiaryPhone")), "value")), (await $.wv([$t31, $t32, $t36], "True", C, false)), (await $.wv([$t31, $t32, $t36], "false", C, false)), (await $.wv([$t31, $t32, $t36], "False", C, false)), (await $.wv([$t31, $t32, $t36], "false", C, false)), 10, "Arial AzLat", (await $.wv([$t31, $t32, $t36], "False", C, false))], C)));
      await $.stmt((await $.wcall([$t31, $t32, $t36], "SetBookmark", ["BeneficiaryB", (await $.mv((await $.mv((await $.wv([$t31, $t32, $t36], "DataModuleFullMotor", C, false)), "ODSBeneficiaryBanking_details")), "value")), (await $.wv([$t31, $t32, $t36], "True", C, false)), (await $.wv([$t31, $t32, $t36], "false", C, false)), (await $.wv([$t31, $t32, $t36], "False", C, false)), (await $.wv([$t31, $t32, $t36], "false", C, false)), 10, "Arial AzLat", (await $.wv([$t31, $t32, $t36], "False", C, false))], C)));
      await $.mcall((await $.mv((await $.wv([$t31, $t32, $t36], "DataModuleFullMotor", C, false)), "Accesories_Report")), "First", []);
      { const $t39 = $.sub((await $.mv((await $.mv((await $.wv([$t31, $t32, $t36], "DataModuleFullMotor", C, false)), "Accesories_Report")), "RecordCount")), 1);
        await $.wset([$t31, $t32, $t36], "i", 0, { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true });
        let $t40 = true;
        for (;;) {
          if (!$t40) { await $.wset([$t31, $t32, $t36], "i", $.succ((await $.wv([$t31, $t32, $t36], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false)), 1), { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }); }
          $t40 = false;
          if (!($.ord((await $.wv([$t31, $t32, $t36], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false))) <= $.ord($t39))) break;
          if ($.truthy((await $.mv((await $.idx((await $.mv((await $.mv((await $.wv([$t31, $t32, $t36], "DataModuleFullMotor", C, false)), "Accesories_Report")), "Fields")), [(await $.wv([$t31, $t32, $t36], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false))])), "IsNull")))) {
            continue;
          }
          await $.stmt((await $.wcall([$t31, $t32, $t36], "SetBookmark", ["AType", $.add($.add((await $.mv((await $.mv((await $.wv([$t31, $t32, $t36], "DataModuleFullMotor", C, false)), "Accesories_ReportType")), "value")), ","), "\r\n"), (await $.wv([$t31, $t32, $t36], "false", C, false)), (await $.wv([$t31, $t32, $t36], "false", C, false)), (await $.wv([$t31, $t32, $t36], "False", C, false)), (await $.wv([$t31, $t32, $t36], "false", C, false)), 10, "Arial AzLat", (await $.wv([$t31, $t32, $t36], "False", C, false))], C)));
          await $.stmt((await $.wcall([$t31, $t32, $t36], "SetBookmark", ["AMake", $.add($.add((await $.mv((await $.mv((await $.wv([$t31, $t32, $t36], "DataModuleFullMotor", C, false)), "Accesories_ReportMake")), "value")), ","), "\r\n"), (await $.wv([$t31, $t32, $t36], "false", C, false)), (await $.wv([$t31, $t32, $t36], "false", C, false)), (await $.wv([$t31, $t32, $t36], "False", C, false)), (await $.wv([$t31, $t32, $t36], "false", C, false)), 10, "Arial AzLat", (await $.wv([$t31, $t32, $t36], "False", C, false))], C)));
          await $.stmt((await $.wcall([$t31, $t32, $t36], "SetBookmark", ["AValues", $.add($.add((await $.wcall([$t31, $t32, $t36], "FloatToStr", [(await $.mv((await $.mv((await $.wv([$t31, $t32, $t36], "DataModuleFullMotor", C, false)), "Accesories_ReportValue")), "value"))], C)), ","), "\r\n"), (await $.wv([$t31, $t32, $t36], "false", C, false)), (await $.wv([$t31, $t32, $t36], "false", C, false)), (await $.wv([$t31, $t32, $t36], "False", C, false)), (await $.wv([$t31, $t32, $t36], "false", C, false)), 10, "Arial AzLat", (await $.wv([$t31, $t32, $t36], "False", C, false))], C)));
          await $.stmt((await $.wcall([$t31, $t32, $t36], "SetBookmark", ["Hcreated", $.add($.add((await $.mv((await $.mv((await $.wv([$t31, $t32, $t36], "DataModuleFullMotor", C, false)), "Accesories_ReportHowcreated")), "value")), ","), "\r\n"), (await $.wv([$t31, $t32, $t36], "false", C, false)), (await $.wv([$t31, $t32, $t36], "false", C, false)), (await $.wv([$t31, $t32, $t36], "False", C, false)), (await $.wv([$t31, $t32, $t36], "false", C, false)), 10, "Arial AzLat", (await $.wv([$t31, $t32, $t36], "False", C, false))], C)));
          await $.mcall((await $.mv((await $.wv([$t31, $t32, $t36], "DataModuleFullMotor", C, false)), "Accesories_Report")), "Next", []);
          await $.tick();
        }
      }
      await $.mcall((await $.mv((await $.wv([$t31, $t32, $t36], "DataModuleFullMotor", C, false)), "More_Report")), "First", []);
      { const $t41 = $.sub((await $.mv((await $.mv((await $.wv([$t31, $t32, $t36], "DataModuleFullMotor", C, false)), "More_Report")), "RecordCount")), 1);
        await $.wset([$t31, $t32, $t36], "i", 0, { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true });
        let $t42 = true;
        for (;;) {
          if (!$t42) { await $.wset([$t31, $t32, $t36], "i", $.succ((await $.wv([$t31, $t32, $t36], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false)), 1), { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }); }
          $t42 = false;
          if (!($.ord((await $.wv([$t31, $t32, $t36], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false))) <= $.ord($t41))) break;
          if ($.truthy((await $.mv((await $.idx((await $.mv((await $.mv((await $.wv([$t31, $t32, $t36], "DataModuleFullMotor", C, false)), "More_Report")), "Fields")), [(await $.wv([$t31, $t32, $t36], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false))])), "IsNull")))) {
            continue;
          }
          await $.stmt((await $.wcall([$t31, $t32, $t36], "SetBookmark", ["MName", $.add($.add((await $.mv((await $.mv((await $.wv([$t31, $t32, $t36], "DataModuleFullMotor", C, false)), "More_ReportName")), "value")), ","), "\r\n"), (await $.wv([$t31, $t32, $t36], "false", C, false)), (await $.wv([$t31, $t32, $t36], "false", C, false)), (await $.wv([$t31, $t32, $t36], "False", C, false)), (await $.wv([$t31, $t32, $t36], "false", C, false)), 10, "Arial AzLat", (await $.wv([$t31, $t32, $t36], "False", C, false))], C)));
          await $.stmt((await $.wcall([$t31, $t32, $t36], "SetBookmark", ["MAge", $.add($.add((await $.wcall([$t31, $t32, $t36], "IntToStr", [(await $.mv((await $.mv((await $.wv([$t31, $t32, $t36], "DataModuleFullMotor", C, false)), "More_ReportAge")), "value"))], C)), ","), "\r\n"), (await $.wv([$t31, $t32, $t36], "false", C, false)), (await $.wv([$t31, $t32, $t36], "false", C, false)), (await $.wv([$t31, $t32, $t36], "False", C, false)), (await $.wv([$t31, $t32, $t36], "false", C, false)), 10, "Arial AzLat", (await $.wv([$t31, $t32, $t36], "False", C, false))], C)));
          await $.stmt((await $.wcall([$t31, $t32, $t36], "SetBookmark", ["MExp", $.add($.add((await $.mv((await $.mv((await $.wv([$t31, $t32, $t36], "DataModuleFullMotor", C, false)), "More_ReportExperience")), "value")), ","), "\r\n"), (await $.wv([$t31, $t32, $t36], "false", C, false)), (await $.wv([$t31, $t32, $t36], "false", C, false)), (await $.wv([$t31, $t32, $t36], "False", C, false)), (await $.wv([$t31, $t32, $t36], "false", C, false)), 10, "Arial AzLat", (await $.wv([$t31, $t32, $t36], "False", C, false))], C)));
          await $.stmt((await $.wcall([$t31, $t32, $t36], "SetBookmark", ["MHist", $.add($.add((await $.mv((await $.mv((await $.wv([$t31, $t32, $t36], "DataModuleFullMotor", C, false)), "More_ReportHistory")), "value")), ","), "\r\n"), (await $.wv([$t31, $t32, $t36], "false", C, false)), (await $.wv([$t31, $t32, $t36], "false", C, false)), (await $.wv([$t31, $t32, $t36], "False", C, false)), (await $.wv([$t31, $t32, $t36], "false", C, false)), 10, "Arial AzLat", (await $.wv([$t31, $t32, $t36], "False", C, false))], C)));
          await $.mcall((await $.mv((await $.wv([$t31, $t32, $t36], "DataModuleFullMotor", C, false)), "More_Report")), "Next", []);
          await $.tick();
        }
      }
      await $.stmt($.wcall([$t31, $t32, $t36], "Show", [], C));
    }
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TInsFullMotorCasco", "ShowSuggestion", async function ShowSuggestion(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: 0};
  await $.set(C, "FormSuggestion", (await $.mcall((await $.v(C, "TFormSuggestion")), "Create", [Self])));
  try {
    L0["result"] = (await $.mv((await $.v(C, "FormSuggestion")), "ShowModal"));
  } finally {
    await $.mcall((await $.v(C, "FormSuggestion")), "Free", []);
  }
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TInsFullMotorCasco", "ActionSuggestionExecute", async function ActionSuggestionExecute(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t43 = (await $.v(C, "DataModuleFullMotor"));
    if ($.truthy((await $.mv((await $.wv([$t43], "Ins_MotorFull", C, false)), "IsEmpty")))) {
      return L0.result;
    }
    await $.stmt((await $.mcall((await $.wv([$t43], "Customers", C, false)), "Locate", ["id", (await $.mv((await $.wv([$t43], "ins_motorfullkli_id", C, false)), "Value")), []])));
    await $.stmt((await $.mcall((await $.wv([$t43], "Suggestion", C, false)), "SetVariable", ["MK_ID", (await $.mv((await $.wv([$t43], "INS_MotorFullID", C, false)), "Value"))])));
    await $.mcall((await $.wv([$t43], "Suggestion", C, false)), "Open", []);
    if ($.truthy($.lt((await $.mv((await $.wv([$t43], "Suggestion", C, false)), "RecordCount")), 0))) {
      await $.stmt((await $.wcall([$t43], "ShowMessage", ["Insert"], C)));
      await $.mset((await $.wv([$t43], "SuggestionID", C, false)), "Value", (await $.mv((await $.wv([$t43], "INS_MotorFullID", C, false)), "Value")));
      await $.stmt((await $.mcall((await $.wv([$t43], "Suggestion", C, false)), "Insert", [])));
    } else {
      await $.mcall((await $.wv([$t43], "Suggestion", C, false)), "Edit", []);
    }
    if ($.truthy($.not(($.eq((await $.wcall([$t43], "ShowSuggestion", [], C)), (await $.wv([$t43], "mrOk", C, false))))))) {
      await $.mcall((await $.wv([$t43], "Suggestion", C, false)), "Cancel", []);
    }
    await $.mcall((await $.wv([$t43], "Suggestion", C, false)), "Close", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TInsFullMotorCasco", "DBGrid1DblClick", async function DBGrid1DblClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t44 = (await $.v(C, "DataModuleFullMotor"));
    await $.mcall((await $.wv([$t44], "Ins_MotorFull", C, false)), "Edit", []);
    await $.mcall((await $.wv([$t44], "Accesories", C, false)), "Edit", []);
    await $.mcall((await $.wv([$t44], "MorethanOne", C, false)), "Edit", []);
  }
  await $.mset((await $.mv((await $.v(C, "FullCascoForm")), "MotorAppPageControl")), "ActivePageIndex", 2);
  await $.mcall((await $.v(C, "FullCascoForm")), "ShowModal", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TInsFullMotorCasco", "GridMoreDblClick", async function GridMoreDblClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t45 = (await $.v(C, "DataModuleFullMotor"));
    await $.mcall((await $.wv([$t45], "Ins_MotorFull", C, false)), "Edit", []);
    await $.mcall((await $.wv([$t45], "Accesories", C, false)), "Edit", []);
    await $.mcall((await $.wv([$t45], "MorethanOne", C, false)), "Edit", []);
  }
  await $.mset((await $.mv((await $.v(C, "FullCascoForm")), "MotorAppPageControl")), "ActivePageIndex", 2);
  await $.mcall((await $.v(C, "FullCascoForm")), "ShowModal", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TInsFullMotorCasco", "ShowPolicy", async function ShowPolicy(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: 0};
  await $.set(C, "FormPolicy", (await $.mcall((await $.v(C, "TFormPolicy")), "Create", [Self])));
  try {
    L0["result"] = (await $.mv((await $.v(C, "FormPolicy")), "ShowModal"));
  } finally {
    await $.mcall((await $.v(C, "FormPolicy")), "Free", []);
  }
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TInsFullMotorCasco", "ActionPolicyExecute", async function ActionPolicyExecute(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t46 = (await $.v(C, "DataModuleFullMotor"));
    if ($.truthy((await $.mv((await $.wv([$t46], "Ins_MotorFull", C, false)), "IsEmpty")))) {
      return L0.result;
    }
    await $.stmt((await $.mcall((await $.wv([$t46], "Customers", C, false)), "Locate", ["id", (await $.mv((await $.wv([$t46], "ins_motorfullkli_id", C, false)), "Value")), []])));
    await $.stmt((await $.mcall((await $.wv([$t46], "Suggestion", C, false)), "SetVariable", ["MK_ID", (await $.mv((await $.wv([$t46], "INS_MotorFullID", C, false)), "Value"))])));
    await $.mcall((await $.wv([$t46], "Suggestion", C, false)), "Open", []);
    if ($.truthy((await $.mv((await $.wv([$t46], "Suggestion", C, false)), "IsEmpty")))) {
      await $.stmt((await $.wcall([$t46], "MessageDlg", ["Əvvəlcə təklifnamə hazırlanmalıdır !", (await $.wv([$t46], "mtWarning", C, false)), [(await $.wv([$t46], "mbOk", C, false))], 0], C)));
      return L0.result;
    }
    await $.stmt((await $.mcall((await $.wv([$t46], "Policy", C, false)), "SetVariable", ["MS_ID", (await $.mv((await $.wv([$t46], "SuggestionID", C, false)), "Value"))])));
    await $.mcall((await $.wv([$t46], "Policy", C, false)), "Open", []);
    if ($.truthy($.lt((await $.mv((await $.wv([$t46], "Policy", C, false)), "RecordCount")), 0))) {
      await $.stmt((await $.mcall((await $.wv([$t46], "Policy", C, false)), "Insert", [])));
    } else {
      await $.mcall((await $.wv([$t46], "Policy", C, false)), "Edit", []);
    }
    await $.mset((await $.wv([$t46], "PolicyID", C, false)), "Value", (await $.mv((await $.wv([$t46], "SuggestionID", C, false)), "Value")));
    if ($.truthy($.not(($.eq((await $.wcall([$t46], "ShowPolicy", [], C)), (await $.wv([$t46], "mrOk", C, false))))))) {
      await $.mcall((await $.wv([$t46], "Policy", C, false)), "Cancel", []);
    }
    await $.mcall((await $.wv([$t46], "Policy", C, false)), "Close", []);
    await $.mcall((await $.wv([$t46], "Suggestion", C, false)), "close", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TInsFullMotorCasco", "ActionExtraExecute", async function ActionExtraExecute(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mset((await $.v(C, "PanelAcc")), "Visible", $.not((await $.mv((await $.v(C, "PanelAcc")), "Visible"))));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  return U;
}
