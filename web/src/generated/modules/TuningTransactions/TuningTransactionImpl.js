// Generated from TuningTransactionImpl.pas by pas2js — do not edit by hand; regenerate instead.
/* eslint-disable */
// @ts-nocheck

export default function define($) {
  const U = $.unit("TuningTransactionImpl", ["Windows", "Messages", "SysUtils", "Classes", "Graphics", "Controls", "Forms", "Dialogs", "ActiveX", "AxCtrls", "TuningTransactions_TLB", "StdVcl", "ExtCtrls", "StdCtrls", "Grids", "DBGrids", "Menus", "ActnList", "ImgList", "ComCtrls", "ToolWin", "db", "Mask", "DBCtrls", "ComObj", "ComServ", "DataModuleImpl", "UnitFormOperations", "UntTariffScale", "sboapiDataModuleImpl", "SBTranslateProc"]);
  const C = [U];
  U.const("omInsert", 0);
  U.const("omUpdate", 1);
  $.defRecord("tsettings", {"id": () => 0, "name": () => '', "debt": () => 0, "credit": () => 0, "additionaldebt": () => 0, "additionalcredit": () => 0, "assignment": () => '', "commisionassignment": () => '', "maxvalue": () => 0, "iscommonsetting": () => false});
  U.defClass("TTuningTransaction", "TActiveForm", {"groupboxsettings": {"name": "GroupBoxSettings", "type": "TGroupBox"}, "settingsbrowser": {"name": "SettingsBrowser", "type": "TDBGrid"}, "actionlist": {"name": "ActionList", "type": "TActionList"}, "popupmenu": {"name": "PopupMenu", "type": "TPopupMenu"}, "actioninsert": {"name": "ActionInsert", "type": "TAction"}, "imagelist": {"name": "ImageList", "type": "TImageList"}, "actionupdate": {"name": "ActionUpdate", "type": "TAction"}, "n1": {"name": "N1", "type": "TMenuItem"}, "n2": {"name": "N2", "type": "TMenuItem"}, "actiondelete": {"name": "ActionDelete", "type": "TAction"}, "n3": {"name": "N3", "type": "TMenuItem"}, "panel2": {"name": "Panel2", "type": "TPanel"}, "toolbar1": {"name": "ToolBar1", "type": "TToolBar"}, "toolbutton1": {"name": "ToolButton1", "type": "TToolButton"}, "toolbutton2": {"name": "ToolButton2", "type": "TToolButton"}, "toolbutton3": {"name": "ToolButton3", "type": "TToolButton"}, "toolbutton4": {"name": "ToolButton4", "type": "TToolButton"}, "toolbutton5": {"name": "ToolButton5", "type": "TToolButton"}, "toolbutton6": {"name": "ToolButton6", "type": "TToolButton"}, "toolbutton7": {"name": "ToolButton7", "type": "TToolButton"}, "toolbutton8": {"name": "ToolButton8", "type": "TToolButton"}, "actionrefresh": {"name": "ActionRefresh", "type": "TAction"}, "n4": {"name": "N4", "type": "TMenuItem"}, "n5": {"name": "N5", "type": "TMenuItem"}, "toolbutton9": {"name": "ToolButton9", "type": "TToolButton"}, "actionsettariffscale": {"name": "ActionSetTariffScale", "type": "TAction"}, "panel3": {"name": "Panel3", "type": "TPanel"}, "assignment": {"name": "ASSIGNMENT", "type": "TDBEdit"}, "panel4": {"name": "Panel4", "type": "TPanel"}, "commisionassignment": {"name": "COMMISIONASSIGNMENT", "type": "TDBEdit"}, "label1": {"name": "Label1", "type": "TLabel"}, "fevents": {"name": "FEvents", "type": "ITuningTransactionEvents"}, "operationmode": {"name": "OperationMode", "type": "TOperationMode"}}, {});
  U.init(async () => {
    U.var_("TuningTransaction", null, "TTuningTransaction");
  });
  U.method("TTuningTransaction", "DefinePropertyPages", async function DefinePropertyPages(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"definepropertypage": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["definepropertypage"]);
  return L0.result;
}, {"params": ["DefinePropertyPage"], "kind": "procedure", "ptypes": ["TDefinePropertyPage"]});
  U.method("TTuningTransaction", "EventSinkChanged", async function EventSinkChanged(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"eventsink": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["eventsink"]);
  await $.set(C, "FEvents", L0["eventsink"]);
  return L0.result;
}, {"params": ["EventSink"], "kind": "procedure", "ptypes": ["IUnknown"]});
  U.method("TTuningTransaction", "Initialize", async function Initialize(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: undefined};
  await $.inherited(Self, "TTuningTransaction", "Initialize", null, arguments);
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
  U.method("TTuningTransaction", "Get_Active", async function Get_Active(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: false};
  L0["result"] = (await $.v(C, "Active"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TTuningTransaction", "Get_AutoScroll", async function Get_AutoScroll(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: false};
  L0["result"] = (await $.v(C, "AutoScroll"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TTuningTransaction", "Get_AutoSize", async function Get_AutoSize(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: false};
  L0["result"] = (await $.v(C, "AutoSize"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TTuningTransaction", "Get_AxBorderStyle", async function Get_AxBorderStyle(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: null};
  L0["result"] = (await $.call(C, "Ord", [(await $.v(C, "AxBorderStyle"))]));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TTuningTransaction", "Get_Caption", async function Get_Caption(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: ''};
  L0["result"] = (await $.call(C, "WideString", [(await $.v(C, "Caption"))]));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TTuningTransaction", "Get_Color", async function Get_Color(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: null};
  L0["result"] = (await $.call(C, "OLE_COLOR", [(await $.v(C, "Color"))]));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TTuningTransaction", "Get_Cursor", async function Get_Cursor(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: 0};
  L0["result"] = (await $.call(C, "Smallint", [(await $.v(C, "Cursor"))]));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TTuningTransaction", "Get_DoubleBuffered", async function Get_DoubleBuffered(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: false};
  L0["result"] = (await $.v(C, "DoubleBuffered"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TTuningTransaction", "Get_DropTarget", async function Get_DropTarget(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: false};
  L0["result"] = (await $.v(C, "DropTarget"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TTuningTransaction", "Get_Enabled", async function Get_Enabled(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: false};
  L0["result"] = (await $.v(C, "Enabled"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TTuningTransaction", "Get_Font", async function Get_Font(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: null};
  await $.stmt((await $.call(C, "GetOleFont", [(await $.v(C, "Font")), L0["result"]])));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TTuningTransaction", "Get_HelpFile", async function Get_HelpFile(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: ''};
  L0["result"] = (await $.call(C, "WideString", [(await $.v(C, "HelpFile"))]));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TTuningTransaction", "Get_KeyPreview", async function Get_KeyPreview(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: false};
  L0["result"] = (await $.v(C, "KeyPreview"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TTuningTransaction", "Get_PixelsPerInch", async function Get_PixelsPerInch(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: 0};
  L0["result"] = (await $.v(C, "PixelsPerInch"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TTuningTransaction", "Get_PrintScale", async function Get_PrintScale(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: null};
  L0["result"] = (await $.call(C, "Ord", [(await $.v(C, "PrintScale"))]));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TTuningTransaction", "Get_Scaled", async function Get_Scaled(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: false};
  L0["result"] = (await $.v(C, "Scaled"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TTuningTransaction", "Get_Visible", async function Get_Visible(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: false};
  L0["result"] = (await $.v(C, "Visible"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TTuningTransaction", "Get_VisibleDockClientCount", async function Get_VisibleDockClientCount(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: 0};
  L0["result"] = (await $.v(C, "VisibleDockClientCount"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TTuningTransaction", "_Set_Font", async function _Set_Font(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.asRef(p0), result: undefined};
  await $.stmt((await $.call(C, "SetOleFont", [(await $.v(C, "Font")), (await L0["value"].get())])));
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["IFontDisp"]});
  U.method("TTuningTransaction", "ActivateEvent", async function ActivateEvent(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.ne((await $.v(C, "FEvents")), null))) {
    await $.mcall((await $.v(C, "FEvents")), "OnActivate", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TTuningTransaction", "ClickEvent", async function ClickEvent(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.ne((await $.v(C, "FEvents")), null))) {
    await $.mcall((await $.v(C, "FEvents")), "OnClick", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TTuningTransaction", "CreateEvent", async function CreateEvent(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.ne((await $.v(C, "FEvents")), null))) {
    await $.mcall((await $.v(C, "FEvents")), "OnCreate", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TTuningTransaction", "DblClickEvent", async function DblClickEvent(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.ne((await $.v(C, "FEvents")), null))) {
    await $.mcall((await $.v(C, "FEvents")), "OnDblClick", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TTuningTransaction", "DeactivateEvent", async function DeactivateEvent(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.ne((await $.v(C, "FEvents")), null))) {
    await $.mcall((await $.v(C, "FEvents")), "OnDeactivate", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TTuningTransaction", "DestroyEvent", async function DestroyEvent(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.ne((await $.v(C, "FEvents")), null))) {
    await $.mcall((await $.v(C, "FEvents")), "OnDestroy", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TTuningTransaction", "KeyPressEvent", async function KeyPressEvent(Self, p0, p1) {
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
  U.method("TTuningTransaction", "PaintEvent", async function PaintEvent(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.ne((await $.v(C, "FEvents")), null))) {
    await $.mcall((await $.v(C, "FEvents")), "OnPaint", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TTuningTransaction", "Set_AutoScroll", async function Set_AutoScroll(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "AutoScroll", L0["value"]);
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["WordBool"]});
  U.method("TTuningTransaction", "Set_AutoSize", async function Set_AutoSize(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "AutoSize", L0["value"]);
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["WordBool"]});
  U.method("TTuningTransaction", "Set_AxBorderStyle", async function Set_AxBorderStyle(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "AxBorderStyle", (await $.call(C, "TActiveFormBorderStyle", [L0["value"]])));
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["TxActiveFormBorderStyle"]});
  U.method("TTuningTransaction", "Set_Caption", async function Set_Caption(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "Caption", (await $.call(C, "TCaption", [L0["value"]])));
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["WideString"]});
  U.method("TTuningTransaction", "Set_Color", async function Set_Color(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "Color", (await $.call(C, "TColor", [L0["value"]])));
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["OLE_COLOR"]});
  U.method("TTuningTransaction", "Set_Cursor", async function Set_Cursor(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "Cursor", (await $.call(C, "TCursor", [L0["value"]])));
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["Smallint"]});
  U.method("TTuningTransaction", "Set_DoubleBuffered", async function Set_DoubleBuffered(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "DoubleBuffered", L0["value"]);
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["WordBool"]});
  U.method("TTuningTransaction", "Set_DropTarget", async function Set_DropTarget(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "DropTarget", L0["value"]);
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["WordBool"]});
  U.method("TTuningTransaction", "Set_Enabled", async function Set_Enabled(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "Enabled", L0["value"]);
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["WordBool"]});
  U.method("TTuningTransaction", "Set_Font", async function Set_Font(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.stmt((await $.call(C, "SetOleFont", [(await $.v(C, "Font")), L0["value"]])));
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["IFontDisp"]});
  U.method("TTuningTransaction", "Set_HelpFile", async function Set_HelpFile(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "HelpFile", (await $.call(C, "String", [L0["value"]])));
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["WideString"]});
  U.method("TTuningTransaction", "Set_KeyPreview", async function Set_KeyPreview(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "KeyPreview", L0["value"]);
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["WordBool"]});
  U.method("TTuningTransaction", "Set_PixelsPerInch", async function Set_PixelsPerInch(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "PixelsPerInch", L0["value"]);
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["Integer"]});
  U.method("TTuningTransaction", "Set_PrintScale", async function Set_PrintScale(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "PrintScale", (await $.call(C, "TPrintScale", [L0["value"]])));
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["TxPrintScale"]});
  U.method("TTuningTransaction", "Set_Scaled", async function Set_Scaled(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "Scaled", L0["value"]);
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["WordBool"]});
  U.method("TTuningTransaction", "Set_Visible", async function Set_Visible(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "Visible", L0["value"]);
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["WordBool"]});
  U.method("TTuningTransaction", "CheckDataModule", async function CheckDataModule(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: undefined};
  if ($.truthy($.not((await $.call(C, "Assigned", [(await $.v(C, "TuningDataModule"))]))))) {
    await $.set(C, "TuningDataModule", (await $.mcall((await $.v(C, "TTuningDataModule")), "Create", [Self])));
  }
  return L0.result;
}, {"params": [], "kind": "procedure", "ptypes": []});
  U.method("TTuningTransaction", "PrepareOperation", async function PrepareOperation(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"opermode": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["opermode"]);
  { const $t1 = L0["opermode"];
    if ($.eq($t1, (await $.v(C, "omInsert")))) {
      await $.mcall((await $.mv((await $.v(C, "TuningDataModule")), "ODSSettings")), "Insert", []);
    }
    else if ($.eq($t1, (await $.v(C, "omUpdate")))) {
      await $.mcall((await $.mv((await $.v(C, "TuningDataModule")), "ODSSettings")), "Edit", []);
    }
  }
  await $.mcall((await $.v(C, "FormOperations")), "ShowModal", []);
  return L0.result;
}, {"params": ["OperMode"], "kind": "procedure", "ptypes": ["TOperationMode"]});
  U.method("TTuningTransaction", "Delete_Commision_Trans", async function Delete_Commision_Trans(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: undefined, "settingid": 0};
  L0["csdelete"] = "Delete_Commision_Trans";
  if ($.truthy($.eq((await $.call(C, "MessageDlg", ["Are you sure to delete this setting?", (await $.v(C, "mtConfirmation")), (await $.v(C, "mbYesNoCancel")), 0])), (await $.v(C, "mrYes"))))) {
    {
      const $t2 = (await $.v(C, "TuningDataModule"));
      const $t3 = (await $.wv([$t2], "ODSSettings", C, false));
      const $t4 = (await $.wv([$t2, $t3], "OPMainSettings", C, false));
      await $.wset([$t2, $t3, $t4], "SettingID", (await $.mv((await $.wcall([$t2, $t3, $t4], "FieldbyName", ["ID"], C)), "AsInteger")), { get: async () => L0["settingid"], set: async (v) => { L0["settingid"] = v; }, local: true });
      await $.stmt((await $.wcall([$t2, $t3, $t4], "CallProcedure", [(await $.wv([$t2, $t3, $t4], "csDelete", { get: async () => L0["csdelete"], set: async (v) => { L0["csdelete"] = v; }, local: true }, false)), [(await $.wv([$t2, $t3, $t4], "SettingID", { get: async () => L0["settingid"], set: async (v) => { L0["settingid"] = v; }, local: true }, false))]], C)));
      await $.stmt($.wcall([$t2, $t3, $t4], "Refresh", [], C));
    }
  }
  return L0.result;
}, {"params": [], "kind": "procedure", "ptypes": []});
  U.method("TTuningTransaction", "SafelyRefresh", async function SafelyRefresh(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: undefined, "saveplace": null};
  {
    const $t5 = (await $.mv((await $.mv((await $.v(C, "SettingsBrowser")), "DataSource")), "DataSet"));
    await $.wset([$t5], "SavePlace", (await $.wv([$t5], "GetBookmark", C, false)), { get: async () => L0["saveplace"], set: async (v) => { L0["saveplace"] = v; }, local: true });
    try {
      await $.stmt($.wcall([$t5], "DisableControls", [], C));
      await $.stmt($.wcall([$t5], "Refresh", [], C));
    } finally {
      await $.stmt((await $.wcall([$t5], "GotoBookmark", [(await $.wv([$t5], "SavePlace", { get: async () => L0["saveplace"], set: async (v) => { L0["saveplace"] = v; }, local: true }, false))], C)));
      await $.stmt((await $.wcall([$t5], "FreeBookmark", [(await $.wv([$t5], "SavePlace", { get: async () => L0["saveplace"], set: async (v) => { L0["saveplace"] = v; }, local: true }, false))], C)));
      await $.stmt($.wcall([$t5], "EnableControls", [], C));
    }
  }
  return L0.result;
}, {"params": [], "kind": "procedure", "ptypes": []});
  U.method("TTuningTransaction", "ActiveFormCreate", async function ActiveFormCreate(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.set(C, "TuningTransaction", Self);
  await $.stmt($.call(C, "CheckDataModule", []));
  await $.set(C, "FormOperations", (await $.mcall((await $.v(C, "TFormOperations")), "Create", [Self])));
  await $.stmt((await $.mcall((await $.v(C, "SBTranslateProc")), "TranslateAllComponents", [Self, (await $.mv((await $.v(C, "sboapiDataModule")), "OrPack_SL"))])));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TTuningTransaction", "ActionInsertExecute", async function ActionInsertExecute(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.set(C, "OperationMode", (await $.v(C, "omInsert")));
  await $.stmt((await $.call(C, "PrepareOperation", [(await $.v(C, "OperationMode"))])));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TTuningTransaction", "N1DrawItem", async function N1DrawItem(Self, p0, p1, p2, p3) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "acanvas": $.copyArg(p1), "arect": $.copyArg(p2), "selected": $.copyArg(p3), result: undefined, "linebottom": 0, "stext": '', "bar": null};
  await $.fixArgs(L0, ["sender", "acanvas", "arect", "selected"]);
  {
    const $t6 = L0["acanvas"];
    const $t7 = (await $.wv([$t6], "Sender", { get: async () => L0["sender"], set: async (v) => { L0["sender"] = v; }, local: true }, false));
    {
      const $t8 = (await $.mv((await $.wv([$t6, $t7], "ACanvas", { get: async () => L0["acanvas"], set: async (v) => { L0["acanvas"] = v; }, local: true }, false)), "Font"));
      await $.wset([$t6, $t7, $t8], "Charset", (await $.wv([$t6, $t7, $t8], "DEFAULT_CHARSET", C, false)), C);
      await $.wset([$t6, $t7, $t8], "Name", "Azl Sans Serif", C);
      if ($.truthy((await $.wv([$t6, $t7, $t8], "Default", C, false)))) {
        await $.wset([$t6, $t7, $t8], "Style", [(await $.wv([$t6, $t7, $t8], "fsBold", C, false))], C);
      }
    }
    if ($.truthy($.eq((await $.wv([$t6, $t7], "Caption", C, false)), "-"))) {
      await $.mset((await $.wv([$t6, $t7], "Pen", C, false)), "Color", (await $.wv([$t6, $t7], "clBlack", C, false)));
      await $.wset([$t6, $t7], "LineBottom", $.sub(($.add((await $.mv((await $.wv([$t6, $t7], "ARect", { get: async () => L0["arect"], set: async (v) => { L0["arect"] = v; }, local: true }, false)), "Top")), $.idiv(($.sub((await $.mv((await $.wv([$t6, $t7], "ARect", { get: async () => L0["arect"], set: async (v) => { L0["arect"] = v; }, local: true }, false)), "Bottom")), (await $.mv((await $.wv([$t6, $t7], "ARect", { get: async () => L0["arect"], set: async (v) => { L0["arect"] = v; }, local: true }, false)), "Top")))), 2))), 1), { get: async () => L0["linebottom"], set: async (v) => { L0["linebottom"] = v; }, local: true });
      await $.stmt((await $.wcall([$t6, $t7], "MoveTo", [(await $.mv((await $.wv([$t6, $t7], "ARect", { get: async () => L0["arect"], set: async (v) => { L0["arect"] = v; }, local: true }, false)), "Left")), (await $.wv([$t6, $t7], "LineBottom", { get: async () => L0["linebottom"], set: async (v) => { L0["linebottom"] = v; }, local: true }, false))], C)));
      await $.stmt((await $.wcall([$t6, $t7], "LineTo", [(await $.mv((await $.wv([$t6, $t7], "ARect", { get: async () => L0["arect"], set: async (v) => { L0["arect"] = v; }, local: true }, false)), "Right")), (await $.wv([$t6, $t7], "LineBottom", { get: async () => L0["linebottom"], set: async (v) => { L0["linebottom"] = v; }, local: true }, false))], C)));
      await $.stmt((await $.wcall([$t6, $t7], "inc", [$.ref(async () => (await $.wv([$t6, $t7], "LineBottom", { get: async () => L0["linebottom"], set: async (v) => { L0["linebottom"] = v; }, local: true }, false)), async ($t9) => { await $.wset([$t6, $t7], "LineBottom", $t9, { get: async () => L0["linebottom"], set: async (v) => { L0["linebottom"] = v; }, local: true }); })], C)));
      await $.mset((await $.wv([$t6, $t7], "Pen", C, false)), "Color", (await $.wv([$t6, $t7], "clWhite", C, false)));
      await $.stmt((await $.wcall([$t6, $t7], "MoveTo", [(await $.mv((await $.wv([$t6, $t7], "ARect", { get: async () => L0["arect"], set: async (v) => { L0["arect"] = v; }, local: true }, false)), "Left")), (await $.wv([$t6, $t7], "LineBottom", { get: async () => L0["linebottom"], set: async (v) => { L0["linebottom"] = v; }, local: true }, false))], C)));
      await $.stmt((await $.wcall([$t6, $t7], "LineTo", [(await $.mv((await $.wv([$t6, $t7], "ARect", { get: async () => L0["arect"], set: async (v) => { L0["arect"] = v; }, local: true }, false)), "Right")), (await $.wv([$t6, $t7], "LineBottom", { get: async () => L0["linebottom"], set: async (v) => { L0["linebottom"] = v; }, local: true }, false))], C)));
    } else {
      if ($.truthy((await $.wv([$t6, $t7], "Selected", { get: async () => L0["selected"], set: async (v) => { L0["selected"] = v; }, local: true }, false)))) {
        await $.mset((await $.wv([$t6, $t7], "Brush", C, false)), "Color", (await $.wv([$t6, $t7], "clNavy", C, false)));
        if ($.truthy((await $.wv([$t6, $t7], "Enabled", C, false)))) {
          await $.mset((await $.wv([$t6, $t7], "Font", C, false)), "Color", (await $.wv([$t6, $t7], "clWhite", C, false)));
        } else {
          await $.mset((await $.wv([$t6, $t7], "Font", C, false)), "Color", (await $.wv([$t6, $t7], "clSilver", C, false)));
        }
      } else {
        await $.mset((await $.wv([$t6, $t7], "Brush", C, false)), "Color", (await $.wv([$t6, $t7], "clBtnFace", C, false)));
        if ($.truthy((await $.wv([$t6, $t7], "Enabled", C, false)))) {
          await $.mset((await $.wv([$t6, $t7], "Font", C, false)), "Color", (await $.wv([$t6, $t7], "clBlack", C, false)));
        } else {
          await $.mset((await $.wv([$t6, $t7], "Font", C, false)), "Color", (await $.wv([$t6, $t7], "clGrayText", C, false)));
        }
      }
      await $.wset([$t6, $t7], "Bar", (await $.wv([$t6, $t7], "ARect", { get: async () => L0["arect"], set: async (v) => { L0["arect"] = v; }, local: true }, false)), { get: async () => L0["bar"], set: async (v) => { L0["bar"] = v; }, local: true });
      await $.stmt((await $.wcall([$t6, $t7], "Inc", [$.ref(async () => (await $.mv((await $.wv([$t6, $t7], "Bar", { get: async () => L0["bar"], set: async (v) => { L0["bar"] = v; }, local: true }, false)), "Left")), async ($t10) => { await $.mset((await $.wv([$t6, $t7], "Bar", { get: async () => L0["bar"], set: async (v) => { L0["bar"] = v; }, local: true }, false)), "Left", $t10); }), 22], C)));
      await $.stmt((await $.wcall([$t6, $t7], "FillRect", [(await $.wv([$t6, $t7], "Bar", { get: async () => L0["bar"], set: async (v) => { L0["bar"] = v; }, local: true }, false))], C)));
      await $.stmt((await $.wcall([$t6, $t7], "TextOut", [$.add((await $.mv((await $.wv([$t6, $t7], "ARect", { get: async () => L0["arect"], set: async (v) => { L0["arect"] = v; }, local: true }, false)), "Left")), 22), $.add((await $.mv((await $.wv([$t6, $t7], "ARect", { get: async () => L0["arect"], set: async (v) => { L0["arect"] = v; }, local: true }, false)), "Top")), 1), (await $.wv([$t6, $t7], "Caption", C, false))], C)));
    }
    await $.wset([$t6, $t7], "SText", (await $.wcall([$t6, $t7], "ShortCutToText", [(await $.wv([$t6, $t7], "ShortCut", C, false))], C)), { get: async () => L0["stext"], set: async (v) => { L0["stext"] = v; }, local: true });
    await $.stmt((await $.wcall([$t6, $t7], "TextOut", [$.sub($.sub((await $.mv((await $.wv([$t6, $t7], "ARect", { get: async () => L0["arect"], set: async (v) => { L0["arect"] = v; }, local: true }, false)), "Right")), (await $.wcall([$t6, $t7], "TextWidth", [(await $.wv([$t6, $t7], "SText", { get: async () => L0["stext"], set: async (v) => { L0["stext"] = v; }, local: true }, false))], C))), 7), $.add((await $.mv((await $.wv([$t6, $t7], "ARect", { get: async () => L0["arect"], set: async (v) => { L0["arect"] = v; }, local: true }, false)), "Top")), 1), (await $.wv([$t6, $t7], "SText", { get: async () => L0["stext"], set: async (v) => { L0["stext"] = v; }, local: true }, false))], C)));
    if ($.truthy($.ne((await $.wv([$t6, $t7], "ImageIndex", C, false)), (-(1))))) {
      {
        const $t11 = (await $.wv([$t6, $t7], "GetParentMenu", C, false));
        if ($.truthy((await $.wcall([$t6, $t7, $t11], "Assigned", [(await $.wv([$t6, $t7, $t11], "Images", C, false))], C)))) {
          if ($.truthy((await $.wv([$t6, $t7, $t11], "Checked", C, false)))) {
            await $.mset((await $.wv([$t6, $t7, $t11], "Bar", { get: async () => L0["bar"], set: async (v) => { L0["bar"] = v; }, local: true }, false)), "Left", $.add((await $.mv((await $.wv([$t6, $t7, $t11], "ARect", { get: async () => L0["arect"], set: async (v) => { L0["arect"] = v; }, local: true }, false)), "Left")), 1));
            await $.mset((await $.wv([$t6, $t7, $t11], "Bar", { get: async () => L0["bar"], set: async (v) => { L0["bar"] = v; }, local: true }, false)), "Right", $.add((await $.mv((await $.wv([$t6, $t7, $t11], "Bar", { get: async () => L0["bar"], set: async (v) => { L0["bar"] = v; }, local: true }, false)), "Left")), 16));
            await $.mset((await $.wv([$t6, $t7, $t11], "Bar", { get: async () => L0["bar"], set: async (v) => { L0["bar"] = v; }, local: true }, false)), "Top", $.add((await $.mv((await $.wv([$t6, $t7, $t11], "ARect", { get: async () => L0["arect"], set: async (v) => { L0["arect"] = v; }, local: true }, false)), "Top")), 1));
            await $.mset((await $.wv([$t6, $t7, $t11], "Bar", { get: async () => L0["bar"], set: async (v) => { L0["bar"] = v; }, local: true }, false)), "Bottom", $.add((await $.mv((await $.wv([$t6, $t7, $t11], "Bar", { get: async () => L0["bar"], set: async (v) => { L0["bar"] = v; }, local: true }, false)), "Top")), 16));
            await $.mset((await $.mv((await $.wv([$t6, $t7, $t11], "ACanvas", { get: async () => L0["acanvas"], set: async (v) => { L0["acanvas"] = v; }, local: true }, false)), "Brush")), "Color", (await $.wv([$t6, $t7, $t11], "clBtnShadow", C, false)));
            await $.stmt((await $.mcall((await $.wv([$t6, $t7, $t11], "ACanvas", { get: async () => L0["acanvas"], set: async (v) => { L0["acanvas"] = v; }, local: true }, false)), "FrameRect", [(await $.wv([$t6, $t7, $t11], "Bar", { get: async () => L0["bar"], set: async (v) => { L0["bar"] = v; }, local: true }, false))])));
            await $.stmt((await $.wcall([$t6, $t7, $t11], "Inc", [$.ref(async () => (await $.mv((await $.wv([$t6, $t7, $t11], "Bar", { get: async () => L0["bar"], set: async (v) => { L0["bar"] = v; }, local: true }, false)), "Left")), async ($t12) => { await $.mset((await $.wv([$t6, $t7, $t11], "Bar", { get: async () => L0["bar"], set: async (v) => { L0["bar"] = v; }, local: true }, false)), "Left", $t12); }), 2], C)));
            await $.stmt((await $.wcall([$t6, $t7, $t11], "Inc", [$.ref(async () => (await $.mv((await $.wv([$t6, $t7, $t11], "Bar", { get: async () => L0["bar"], set: async (v) => { L0["bar"] = v; }, local: true }, false)), "Right")), async ($t13) => { await $.mset((await $.wv([$t6, $t7, $t11], "Bar", { get: async () => L0["bar"], set: async (v) => { L0["bar"] = v; }, local: true }, false)), "Right", $t13); }), 2], C)));
            await $.stmt((await $.wcall([$t6, $t7, $t11], "Inc", [$.ref(async () => (await $.mv((await $.wv([$t6, $t7, $t11], "Bar", { get: async () => L0["bar"], set: async (v) => { L0["bar"] = v; }, local: true }, false)), "Top")), async ($t14) => { await $.mset((await $.wv([$t6, $t7, $t11], "Bar", { get: async () => L0["bar"], set: async (v) => { L0["bar"] = v; }, local: true }, false)), "Top", $t14); }), 2], C)));
            await $.stmt((await $.wcall([$t6, $t7, $t11], "Inc", [$.ref(async () => (await $.mv((await $.wv([$t6, $t7, $t11], "Bar", { get: async () => L0["bar"], set: async (v) => { L0["bar"] = v; }, local: true }, false)), "Bottom")), async ($t15) => { await $.mset((await $.wv([$t6, $t7, $t11], "Bar", { get: async () => L0["bar"], set: async (v) => { L0["bar"] = v; }, local: true }, false)), "Bottom", $t15); }), 2], C)));
            await $.mset((await $.mv((await $.wv([$t6, $t7, $t11], "ACanvas", { get: async () => L0["acanvas"], set: async (v) => { L0["acanvas"] = v; }, local: true }, false)), "Brush")), "Color", (await $.wv([$t6, $t7, $t11], "clBtnHighlight", C, false)));
            await $.stmt((await $.mcall((await $.wv([$t6, $t7, $t11], "ACanvas", { get: async () => L0["acanvas"], set: async (v) => { L0["acanvas"] = v; }, local: true }, false)), "FrameRect", [(await $.wv([$t6, $t7, $t11], "Bar", { get: async () => L0["bar"], set: async (v) => { L0["bar"] = v; }, local: true }, false))])));
            await $.stmt((await $.wcall([$t6, $t7, $t11], "Dec", [$.ref(async () => (await $.mv((await $.wv([$t6, $t7, $t11], "Bar", { get: async () => L0["bar"], set: async (v) => { L0["bar"] = v; }, local: true }, false)), "Left")), async ($t16) => { await $.mset((await $.wv([$t6, $t7, $t11], "Bar", { get: async () => L0["bar"], set: async (v) => { L0["bar"] = v; }, local: true }, false)), "Left", $t16); }), 1], C)));
            await $.stmt((await $.wcall([$t6, $t7, $t11], "Dec", [$.ref(async () => (await $.mv((await $.wv([$t6, $t7, $t11], "Bar", { get: async () => L0["bar"], set: async (v) => { L0["bar"] = v; }, local: true }, false)), "Right")), async ($t17) => { await $.mset((await $.wv([$t6, $t7, $t11], "Bar", { get: async () => L0["bar"], set: async (v) => { L0["bar"] = v; }, local: true }, false)), "Right", $t17); }), 1], C)));
            await $.stmt((await $.wcall([$t6, $t7, $t11], "Dec", [$.ref(async () => (await $.mv((await $.wv([$t6, $t7, $t11], "Bar", { get: async () => L0["bar"], set: async (v) => { L0["bar"] = v; }, local: true }, false)), "Top")), async ($t18) => { await $.mset((await $.wv([$t6, $t7, $t11], "Bar", { get: async () => L0["bar"], set: async (v) => { L0["bar"] = v; }, local: true }, false)), "Top", $t18); }), 1], C)));
            await $.stmt((await $.wcall([$t6, $t7, $t11], "Dec", [$.ref(async () => (await $.mv((await $.wv([$t6, $t7, $t11], "Bar", { get: async () => L0["bar"], set: async (v) => { L0["bar"] = v; }, local: true }, false)), "Bottom")), async ($t19) => { await $.mset((await $.wv([$t6, $t7, $t11], "Bar", { get: async () => L0["bar"], set: async (v) => { L0["bar"] = v; }, local: true }, false)), "Bottom", $t19); }), 1], C)));
            if ($.truthy((await $.wv([$t6, $t7, $t11], "Selected", { get: async () => L0["selected"], set: async (v) => { L0["selected"] = v; }, local: true }, false)))) {
              await $.mset((await $.mv((await $.wv([$t6, $t7, $t11], "ACanvas", { get: async () => L0["acanvas"], set: async (v) => { L0["acanvas"] = v; }, local: true }, false)), "Brush")), "Color", (await $.wv([$t6, $t7, $t11], "clBtnFace", C, false)));
            } else {
              await $.mset((await $.mv((await $.wv([$t6, $t7, $t11], "ACanvas", { get: async () => L0["acanvas"], set: async (v) => { L0["acanvas"] = v; }, local: true }, false)), "Brush")), "Color", (await $.wv([$t6, $t7, $t11], "clBtnHighlight", C, false)));
            }
            await $.stmt((await $.mcall((await $.wv([$t6, $t7, $t11], "ACanvas", { get: async () => L0["acanvas"], set: async (v) => { L0["acanvas"] = v; }, local: true }, false)), "FillRect", [(await $.wv([$t6, $t7, $t11], "Bar", { get: async () => L0["bar"], set: async (v) => { L0["bar"] = v; }, local: true }, false))])));
          }
          await $.stmt((await $.mcall((await $.wv([$t6, $t7, $t11], "Images", C, false)), "Draw", [(await $.wv([$t6, $t7, $t11], "ACanvas", { get: async () => L0["acanvas"], set: async (v) => { L0["acanvas"] = v; }, local: true }, false)), (await $.mv((await $.wv([$t6, $t7, $t11], "ARect", { get: async () => L0["arect"], set: async (v) => { L0["arect"] = v; }, local: true }, false)), "Left")), (await $.mv((await $.wv([$t6, $t7, $t11], "ARect", { get: async () => L0["arect"], set: async (v) => { L0["arect"] = v; }, local: true }, false)), "Top")), (await $.wv([$t6, $t7, $t11], "ImageIndex", C, false)), (await $.wv([$t6, $t7, $t11], "Enabled", C, false))])));
        }
      }
    }
  }
  return L0.result;
}, {"params": ["Sender", "ACanvas", "ARect", "Selected"], "kind": "procedure", "ptypes": ["TObject", "TCanvas", "TRect", "Boolean"]});
  U.method("TTuningTransaction", "ActionUpdateExecute", async function ActionUpdateExecute(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.set(C, "OperationMode", (await $.v(C, "omUpdate")));
  await $.stmt((await $.call(C, "PrepareOperation", [(await $.v(C, "OperationMode"))])));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TTuningTransaction", "ActionDeleteExecute", async function ActionDeleteExecute(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.stmt($.call(C, "Delete_Commision_Trans", []));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TTuningTransaction", "ActionRefreshExecute", async function ActionRefreshExecute(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.stmt($.call(C, "Refresh", []));
  await $.mcall((await $.mv((await $.v(C, "TuningDataModule")), "ODSSettings")), "Refresh", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TTuningTransaction", "ActiveFormDestroy", async function ActiveFormDestroy(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mcall((await $.v(C, "TuningTransaction")), "Free", []);
  await $.set(C, "TuningTransaction", null);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TTuningTransaction", "ActionSetTariffScaleExecute", async function ActionSetTariffScaleExecute(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t20 = (await $.mcall((await $.v(C, "TFormReferences")), "Create", [Self]));
    const $t21 = (await $.wv([$t20], "TuningDataModule", C, false));
    try {
      await $.mcall((await $.wv([$t20, $t21], "ODSCustomerGroups", C, false)), "Open", []);
      {
        const $t22 = (await $.wv([$t20, $t21], "ODSTariffScale", C, false));
        await $.stmt($.wcall([$t20, $t21, $t22], "Close", [], C));
        await $.stmt((await $.wcall([$t20, $t21, $t22], "SetVariable", ["CommisionID", (await $.mv((await $.mcall((await $.wv([$t20, $t21, $t22], "ODSSettings", C, false)), "FieldByName", ["ID"])), "Value"))], C)));
        await $.stmt($.wcall([$t20, $t21, $t22], "Open", [], C));
      }
      await $.stmt($.wcall([$t20, $t21], "ShowModal", [], C));
    } finally {
      await $.mcall((await $.wv([$t20, $t21], "ODSCustomerGroups", C, false)), "Close", []);
      await $.mcall((await $.wv([$t20, $t21], "ODSTariffScale", C, false)), "Close", []);
      await $.stmt($.wcall([$t20, $t21], "Release", [], C));
    }
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  return U;
}
