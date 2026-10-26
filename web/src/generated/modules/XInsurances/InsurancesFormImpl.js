// Generated from InsurancesFormImpl.pas by pas2js — do not edit by hand; regenerate instead.
/* eslint-disable */
// @ts-nocheck

export default function define($) {
  const U = $.unit("InsurancesFormImpl", ["Windows", "Messages", "SysUtils", "Classes", "Graphics", "Controls", "Forms", "Dialogs", "ActiveX", "AxCtrls", "Insurances_TLB", "StdVcl", "StdCtrls", "ComCtrls", "AxLoader", "olectrls", "ExtCtrls", "FlatSpeed", "IniFiles", "ImgList", "MDIChildPanel", "CheckLst", "SHDocVw", "SBPlgAx50_TLB", "ComObj", "ComServ", "sboapiDataModuleImpl"]);
  const C = [U];
  U.defClass("TInsurensExcption", "Exception", {}, {});
  U.defClass("TFIFOArr", null, {"arr": {"name": "arr", "type": "array"}}, {});
  U.fieldInit("TFIFOArr", "arr", () => []);
  U.defClass("TInsurancesForm", "TActiveForm", {"inspluginmgr": {"name": "InsPluginMgr", "type": "TFlatSpeed"}, "imagelist1": {"name": "ImageList1", "type": "TImageList"}, "mdichildpanel1": {"name": "MDIChildPanel1", "type": "TMDIChildPanel"}, "listbox1": {"name": "ListBox1", "type": "TListBox"}, "webbrowser": {"name": "WebBrowser", "type": "TWebBrowser"}, "fevents": {"name": "FEvents", "type": "IInsurancesFormEvents"}}, {});
  U.init(async () => {
    U.const("cMDIHide", 0);
    U.const("cMDIShow", 1);
    U.const("cMDICheck", 3);
    U.const("cMDIFree", 9);
    U.var_("InsurancesForm", null, "TInsurancesForm");
    U.var_("MDIFifo", null, "TFIFOArr");
    U.var_("FormCount", 0, "Integer");
    U.var_("plgURL", '', "String");
    U.var_("FOleObject", null, "TOleControl");
    U.var_("MDIForms", [], "array");
  });
  U.method("TFIFOArr", "SetArrLength", async function SetArrLength(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"len": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["len"]);
  await $.stmt((await $.call(C, "SetLength", [$.ref(async () => (await $.v(C, "arr")), async ($t1) => { await $.set(C, "arr", $t1); }), L0["len"]])));
  return L0.result;
}, {"params": ["len"], "kind": "procedure", "ptypes": ["Integer"]});
  U.method("TFIFOArr", "isExist", async function isExist(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"val": $.copyArg(p0), result: 0, "i": 0};
  await $.fixArgs(L0, ["val"]);
  L0["result"] = (-(1));
  if ($.truthy($.ne((await $.v(C, "arr")), null))) {
    { const $t2 = $.sub((await $.v(C, "GetArrLength")), 1);
      L0["i"] = 0;
      let $t3 = true;
      for (;;) {
        if (!$t3) { L0["i"] = $.succ(L0["i"], 1); }
        $t3 = false;
        if (!($.ord(L0["i"]) <= $.ord($t2))) break;
        if ($.truthy($.eq((await $.idx((await $.v(C, "arr")), [L0["i"]])), L0["val"]))) {
          L0["result"] = 1;
          break;
        }
        await $.tick();
      }
    }
  }
  return L0.result;
}, {"params": ["val"], "kind": "function", "ptypes": ["integer"]});
  U.method("TFIFOArr", "Add", async function Add(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"val": $.copyArg(p0), result: 0, "len": 0};
  await $.fixArgs(L0, ["val"]);
  if ($.truthy($.eq((await $.call(C, "isExist", [L0["val"]])), (-(1))))) {
    L0["len"] = $.add((await $.call(C, "GetArrLength", [])), 1);
    await $.stmt((await $.call(C, "SetArrLength", [L0["len"]])));
    { const $t4 = await $.iset((await $.v(C, "arr")), [$.sub(L0["len"], 1)], L0["val"]); if ($t4 !== undefined) { await $.set(C, "arr", $t4); } }
  }
  L0["result"] = (await $.call(C, "getCurrVal", []));
  return L0.result;
}, {"params": ["Val"], "kind": "function", "ptypes": ["Integer"]});
  U.method("TFIFOArr", "GetArrLength", async function GetArrLength(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: 0};
  L0["result"] = 0;
  if ($.truthy($.ne((await $.v(C, "arr")), null))) {
    L0["result"] = (await $.call(C, "Length", [(await $.v(C, "arr"))]));
  }
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TFIFOArr", "getCurrVal", async function getCurrVal(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: 0};
  L0["result"] = 0;
  if ($.truthy($.ne((await $.v(C, "arr")), null))) {
    L0["result"] = (await $.idx((await $.v(C, "arr")), [$.sub((await $.call(C, "GetArrLength", [])), 1)]));
  }
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TFIFOArr", "Delete", async function Delete(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: 0};
  L0["result"] = 0;
  if ($.truthy($.ne((await $.v(C, "arr")), null))) {
    await $.stmt((await $.call(C, "SetArrLength", [$.sub((await $.v(C, "GetArrLength")), 1)])));
    L0["result"] = (await $.v(C, "getCurrVal"));
  }
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TInsurancesForm", "DefinePropertyPages", async function DefinePropertyPages(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"definepropertypage": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["definepropertypage"]);
  return L0.result;
}, {"params": ["DefinePropertyPage"], "kind": "procedure", "ptypes": ["TDefinePropertyPage"]});
  U.method("TInsurancesForm", "AppMessage", async function AppMessage(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"msg": $.asRef(p0), "handled": $.asRef(p1), result: undefined};
  { const $t5 = (await $.mv((await L0["msg"].get()), "message"));
    if ($.eq($t5, (await $.v(C, "WM_MDIPClose")))) {
      await $.stmt((await $.call(C, "ChangeMDIState", [(await $.mv((await L0["msg"].get()), "WParam")), (await $.v(C, "cMDIHide"))])));
    }
  }
  return L0.result;
}, {"params": ["Msg", "Handled"], "kind": "procedure", "ptypes": ["TMsg", "Boolean"]});
  U.method("TInsurancesForm", "EventSinkChanged", async function EventSinkChanged(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"eventsink": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["eventsink"]);
  await $.set(C, "FEvents", L0["eventsink"]);
  return L0.result;
}, {"params": ["EventSink"], "kind": "procedure", "ptypes": ["IUnknown"]});
  U.method("TInsurancesForm", "Initialize", async function Initialize(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: undefined};
  await $.inherited(Self, "TInsurancesForm", "Initialize", null, arguments);
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
  U.method("TInsurancesForm", "Get_Active", async function Get_Active(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: false};
  L0["result"] = (await $.v(C, "Active"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TInsurancesForm", "Get_AutoScroll", async function Get_AutoScroll(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: false};
  L0["result"] = (await $.v(C, "AutoScroll"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TInsurancesForm", "Get_AutoSize", async function Get_AutoSize(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: false};
  L0["result"] = (await $.v(C, "AutoSize"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TInsurancesForm", "Get_AxBorderStyle", async function Get_AxBorderStyle(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: null};
  L0["result"] = (await $.call(C, "Ord", [(await $.v(C, "AxBorderStyle"))]));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TInsurancesForm", "Get_Caption", async function Get_Caption(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: ''};
  L0["result"] = (await $.call(C, "WideString", [(await $.v(C, "Caption"))]));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TInsurancesForm", "Get_Color", async function Get_Color(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: null};
  L0["result"] = (await $.call(C, "OLE_COLOR", [(await $.v(C, "Color"))]));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TInsurancesForm", "Get_Cursor", async function Get_Cursor(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: 0};
  L0["result"] = (await $.call(C, "Smallint", [(await $.v(C, "Cursor"))]));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TInsurancesForm", "Get_DoubleBuffered", async function Get_DoubleBuffered(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: false};
  L0["result"] = (await $.v(C, "DoubleBuffered"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TInsurancesForm", "Get_DropTarget", async function Get_DropTarget(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: false};
  L0["result"] = (await $.v(C, "DropTarget"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TInsurancesForm", "Get_Enabled", async function Get_Enabled(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: false};
  L0["result"] = (await $.v(C, "Enabled"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TInsurancesForm", "Get_Font", async function Get_Font(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: null};
  await $.stmt((await $.call(C, "GetOleFont", [(await $.v(C, "Font")), L0["result"]])));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TInsurancesForm", "Get_HelpFile", async function Get_HelpFile(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: ''};
  L0["result"] = (await $.call(C, "WideString", [(await $.v(C, "HelpFile"))]));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TInsurancesForm", "Get_KeyPreview", async function Get_KeyPreview(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: false};
  L0["result"] = (await $.v(C, "KeyPreview"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TInsurancesForm", "Get_PixelsPerInch", async function Get_PixelsPerInch(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: 0};
  L0["result"] = (await $.v(C, "PixelsPerInch"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TInsurancesForm", "Get_PrintScale", async function Get_PrintScale(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: null};
  L0["result"] = (await $.call(C, "Ord", [(await $.v(C, "PrintScale"))]));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TInsurancesForm", "Get_Scaled", async function Get_Scaled(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: false};
  L0["result"] = (await $.v(C, "Scaled"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TInsurancesForm", "Get_Visible", async function Get_Visible(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: false};
  L0["result"] = (await $.v(C, "Visible"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TInsurancesForm", "Get_VisibleDockClientCount", async function Get_VisibleDockClientCount(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: 0};
  L0["result"] = (await $.v(C, "VisibleDockClientCount"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TInsurancesForm", "_Set_Font", async function _Set_Font(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.stmt((await $.call(C, "SetOleFont", [(await $.v(C, "Font")), L0["value"]])));
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["IFontDisp"]});
  U.method("TInsurancesForm", "ActivateEvent", async function ActivateEvent(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.ne((await $.v(C, "FEvents")), null))) {
    await $.mcall((await $.v(C, "FEvents")), "OnActivate", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TInsurancesForm", "ClickEvent", async function ClickEvent(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.ne((await $.v(C, "FEvents")), null))) {
    await $.mcall((await $.v(C, "FEvents")), "OnClick", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TInsurancesForm", "CreateEvent", async function CreateEvent(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.ne((await $.v(C, "FEvents")), null))) {
    await $.mcall((await $.v(C, "FEvents")), "OnCreate", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TInsurancesForm", "DblClickEvent", async function DblClickEvent(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.ne((await $.v(C, "FEvents")), null))) {
    await $.mcall((await $.v(C, "FEvents")), "OnDblClick", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TInsurancesForm", "DeactivateEvent", async function DeactivateEvent(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.ne((await $.v(C, "FEvents")), null))) {
    await $.mcall((await $.v(C, "FEvents")), "OnDeactivate", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TInsurancesForm", "DestroyEvent", async function DestroyEvent(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.ne((await $.v(C, "FEvents")), null))) {
    await $.mcall((await $.v(C, "FEvents")), "OnDestroy", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TInsurancesForm", "KeyPressEvent", async function KeyPressEvent(Self, p0, p1) {
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
  U.method("TInsurancesForm", "PaintEvent", async function PaintEvent(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.ne((await $.v(C, "FEvents")), null))) {
    await $.mcall((await $.v(C, "FEvents")), "OnPaint", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TInsurancesForm", "Set_AutoScroll", async function Set_AutoScroll(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "AutoScroll", L0["value"]);
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["WordBool"]});
  U.method("TInsurancesForm", "Set_AutoSize", async function Set_AutoSize(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "AutoSize", L0["value"]);
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["WordBool"]});
  U.method("TInsurancesForm", "Set_AxBorderStyle", async function Set_AxBorderStyle(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "AxBorderStyle", (await $.call(C, "TActiveFormBorderStyle", [L0["value"]])));
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["TxActiveFormBorderStyle"]});
  U.method("TInsurancesForm", "Set_Caption", async function Set_Caption(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "Caption", (await $.call(C, "TCaption", [L0["value"]])));
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["WideString"]});
  U.method("TInsurancesForm", "Set_Color", async function Set_Color(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "Color", (await $.call(C, "TColor", [L0["value"]])));
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["OLE_COLOR"]});
  U.method("TInsurancesForm", "Set_Cursor", async function Set_Cursor(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "Cursor", (await $.call(C, "TCursor", [L0["value"]])));
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["Smallint"]});
  U.method("TInsurancesForm", "Set_DoubleBuffered", async function Set_DoubleBuffered(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "DoubleBuffered", L0["value"]);
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["WordBool"]});
  U.method("TInsurancesForm", "Set_DropTarget", async function Set_DropTarget(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "DropTarget", L0["value"]);
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["WordBool"]});
  U.method("TInsurancesForm", "Set_Enabled", async function Set_Enabled(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "Enabled", L0["value"]);
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["WordBool"]});
  U.method("TInsurancesForm", "Set_Font", async function Set_Font(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.asRef(p0), result: undefined};
  await $.stmt((await $.call(C, "SetOleFont", [(await $.v(C, "Font")), (await L0["value"].get())])));
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["IFontDisp"]});
  U.method("TInsurancesForm", "Set_HelpFile", async function Set_HelpFile(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "HelpFile", (await $.call(C, "String", [L0["value"]])));
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["WideString"]});
  U.method("TInsurancesForm", "Set_KeyPreview", async function Set_KeyPreview(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "KeyPreview", L0["value"]);
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["WordBool"]});
  U.method("TInsurancesForm", "Set_PixelsPerInch", async function Set_PixelsPerInch(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "PixelsPerInch", L0["value"]);
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["Integer"]});
  U.method("TInsurancesForm", "Set_PrintScale", async function Set_PrintScale(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "PrintScale", (await $.call(C, "TPrintScale", [L0["value"]])));
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["TxPrintScale"]});
  U.method("TInsurancesForm", "Set_Scaled", async function Set_Scaled(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "Scaled", L0["value"]);
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["WordBool"]});
  U.method("TInsurancesForm", "Set_Visible", async function Set_Visible(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "Visible", L0["value"]);
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["WordBool"]});
  U.func("StringToRaw", async function StringToRaw(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"s": $.copyArg(p0), "raw": $.asRef(p1), result: undefined, "p": 0, "ch": ''};
  await $.fixArgs(L0, ["s"]);
  while ($.truthy($.ne(L0["s"], ""))) {
    L0["p"] = (await $.call(C, "Pos", [" ", L0["s"]]));
    if ($.truthy($.eq(L0["p"], 0))) {
      L0["p"] = $.add((await $.call(C, "Length", [L0["s"]])), 1);
    }
    L0["ch"] = (await $.call(C, "Chr", [(await $.call(C, "StrToInt", [(await $.call(C, "Copy", [L0["s"], 1, $.sub(L0["p"], 1)]))]))]));
    await $.stmt((await $.mcall((await $.v(C, "System")), "Delete", [$.ref(async () => L0["s"], async ($t6) => { L0["s"] = $t6; }), 1, L0["p"]])));
    await $.stmt((await $.mcall((await L0["raw"].get()), "Write", [L0["ch"], 1])));
    await $.tick();
  }
  return L0.result;
}, {"params": ["S", "Raw"], "kind": "procedure", "ptypes": ["String", "TMemoryStream"]});
  U.method("TInsurancesForm", "ReadIniFile", async function ReadIniFile(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"filename": $.copyArg(p0), result: false, "insini": null, "modlcount": 0, "pcaption": '', "pclassid": null, "sclassid": '', "pimage": null, "simage": '', "rimage": null, "timage": null, "i": 0};
  await $.fixArgs(L0, ["filename"]);
  L0["result"] = false;
  L0["insini"] = (await $.mcall((await $.v(C, "TIniFile")), "Create", [L0["filename"]]));
  L0["rimage"] = (await $.mv((await $.v(C, "TMemoryStream")), "Create"));
  L0["timage"] = (await $.mv((await $.v(C, "TMemoryStream")), "Create"));
  L0["pimage"] = (await $.mv((await $.v(C, "TBitmap")), "Create"));
  {
    const $t7 = L0["insini"];
    try {
      await $.wset([$t7], "ModlCount", (await $.wcall([$t7], "ReadInteger", ["MODULES", "ModulesCount", (-(1))], C)), { get: async () => L0["modlcount"], set: async (v) => { L0["modlcount"] = v; }, local: true });
      await $.wset([$t7], "i", 0, { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true });
      while ($.truthy($.ge((await $.wv([$t7], "ModlCount", { get: async () => L0["modlcount"], set: async (v) => { L0["modlcount"] = v; }, local: true }, false)), (await $.wv([$t7], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false))))) {
        await $.wset([$t7], "pCaption", (await $.wcall([$t7], "ReadString", [$.add("MODULE", (await $.wcall([$t7], "IntToStr", [(await $.wv([$t7], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false))], C))), "Caption", ""], C)), { get: async () => L0["pcaption"], set: async (v) => { L0["pcaption"] = v; }, local: true });
        if ($.truthy($.eq((await $.wv([$t7], "pCaption", { get: async () => L0["pcaption"], set: async (v) => { L0["pcaption"] = v; }, local: true }, false)), ""))) {
          await $.wset([$t7], "pCaption", "<No Caption>", { get: async () => L0["pcaption"], set: async (v) => { L0["pcaption"] = v; }, local: true });
        }
        await $.wset([$t7], "sCLASSID", (await $.wcall([$t7], "ReadString", [$.add("MODULE", (await $.wcall([$t7], "IntToStr", [(await $.wv([$t7], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false))], C))), "CLASSID", ""], C)), { get: async () => L0["sclassid"], set: async (v) => { L0["sclassid"] = v; }, local: true });
        if ($.truthy($.eq((await $.wv([$t7], "sCLASSID", { get: async () => L0["sclassid"], set: async (v) => { L0["sclassid"] = v; }, local: true }, false)), ""))) {
          await $.wset([$t7], "pCLASSID", (await $.wv([$t7], "IUnknown", C, false)), { get: async () => L0["pclassid"], set: async (v) => { L0["pclassid"] = v; }, local: true });
        } else {
          await $.wset([$t7], "pCLASSID", (await $.wcall([$t7], "StringToGUID", [(await $.wv([$t7], "sCLASSID", { get: async () => L0["sclassid"], set: async (v) => { L0["sclassid"] = v; }, local: true }, false))], C)), { get: async () => L0["pclassid"], set: async (v) => { L0["pclassid"] = v; }, local: true });
        }
        await $.wset([$t7], "sImage", (await $.wcall([$t7], "ReadString", [$.add("MODULE", (await $.wcall([$t7], "IntToStr", [(await $.wv([$t7], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false))], C))), "Image", ""], C)), { get: async () => L0["simage"], set: async (v) => { L0["simage"] = v; }, local: true });
        await $.stmt((await $.mcall((await $.wv([$t7], "ImageList1", C, false)), "GetBitmap", [0, (await $.wv([$t7], "pImage", { get: async () => L0["pimage"], set: async (v) => { L0["pimage"] = v; }, local: true }, false))])));
        {
          const $t8 = (await $.wv([$t7], "InsPluginMgr", C, false));
          await $.stmt((await $.wcall([$t7, $t8], "AddButton", [(await $.wv([$t7, $t8], "pCaption", { get: async () => L0["pcaption"], set: async (v) => { L0["pcaption"] = v; }, local: true }, false)), (await $.wv([$t7, $t8], "pImage", { get: async () => L0["pimage"], set: async (v) => { L0["pimage"] = v; }, local: true }, false)), (await $.wv([$t7, $t8], "pCLASSID", { get: async () => L0["pclassid"], set: async (v) => { L0["pclassid"] = v; }, local: true }, false))], C)));
        }
        await $.stmt((await $.wcall([$t7], "inc", [$.ref(async () => (await $.wv([$t7], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false)), async ($t9) => { await $.wset([$t7], "i", $t9, { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }); })], C)));
        await $.tick();
      }
      await $.wset([$t7], "plgURL", (await $.wcall([$t7], "ReadString", ["PARAMS", "URL", "about:blank"], C)), C);
      await $.wset([$t7], "Result", (await $.wv([$t7], "true", C, false)), { get: async () => L0["result"], set: async (v) => { L0["result"] = v; }, local: true });
    } finally {
      await $.mcall((await $.wv([$t7], "timage", { get: async () => L0["timage"], set: async (v) => { L0["timage"] = v; }, local: true }, false)), "free", []);
      await $.mcall((await $.wv([$t7], "pImage", { get: async () => L0["pimage"], set: async (v) => { L0["pimage"] = v; }, local: true }, false)), "Free", []);
      await $.mcall((await $.wv([$t7], "rImage", { get: async () => L0["rimage"], set: async (v) => { L0["rimage"] = v; }, local: true }, false)), "Free", []);
      await $.mcall((await $.wv([$t7], "InsIni", { get: async () => L0["insini"], set: async (v) => { L0["insini"] = v; }, local: true }, false)), "Free", []);
    }
  }
  return L0.result;
}, {"params": ["FileName"], "kind": "function", "ptypes": ["TFileName"]});
  U.method("TInsurancesForm", "ActiveFormCreate", async function ActiveFormCreate(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.set(C, "InsurancesForm", Self);
  await $.stmt((await $.call(C, "ReadIniFile", [$.add((await $.call(C, "ExtractFilePath", [(await $.mv((await $.v(C, "Application")), "ExeName"))])), "\\Insurence.ini")])));
  await $.set(C, "MDIFifo", (await $.mv((await $.v(C, "TFIFOArr")), "Create")));
  await $.mset((await $.v(C, "Application")), "OnMessage", (await $.ref_(C, "AppMessage")));
  await $.set(C, "WebBrowser", (await $.mcall((await $.v(C, "TWebBrowser")), "Create", [(await $.mv((await $.v(C, "MDIChildPanel1")), "pClient"))])));
  await $.mset((await $.v(C, "WebBrowser")), "Align", (await $.v(C, "alClient")));
  await $.mset((await $.call(C, "TWinControl", [(await $.v(C, "WebBrowser"))])), "parent", (await $.mv((await $.v(C, "MDIChildPanel1")), "pClient")));
  await $.stmt((await $.mcall((await $.v(C, "WebBrowser")), "Navigate", [(await $.v(C, "plgURL"))])));
  await $.set(C, "FormCount", 0);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TInsurancesForm", "ChangeMDIState", async function ChangeMDIState(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"mditag": $.copyArg(p0), "state": $.copyArg(p1), result: 0, "i": 0};
  await $.fixArgs(L0, ["mditag", "state"]);
  L0["result"] = 0;
  { const $t10 = $.sub((await $.call(C, "length", [(await $.v(C, "mdiforms"))])), 1);
    L0["i"] = 0;
    let $t11 = true;
    for (;;) {
      if (!$t11) { L0["i"] = $.succ(L0["i"], 1); }
      $t11 = false;
      if (!($.ord(L0["i"]) <= $.ord($t10))) break;
      if ($.truthy((await $.call(C, "Assigned", [(await $.idx((await $.v(C, "MDIForms")), [L0["i"]]))])))) {
        { const $t12 = L0["state"];
          if ($.eq($t12, 0)) {
            if ($.truthy($.eq((await $.mv((await $.idx((await $.v(C, "MDIForms")), [L0["i"]])), "tag")), L0["mditag"]))) {
              await $.mset((await $.idx((await $.v(C, "MDIForms")), [L0["i"]])), "Visible", false);
            }
          }
          else if ($.eq($t12, 1)) {
            if ($.truthy($.eq((await $.mv((await $.idx((await $.v(C, "MDIForms")), [L0["i"]])), "tag")), L0["mditag"]))) {
              await $.mset((await $.idx((await $.v(C, "MDIForms")), [L0["i"]])), "Visible", true);
            }
          }
          else if ($.eq($t12, 3)) {
            if ($.truthy($.eq((await $.mv((await $.idx((await $.v(C, "MDIForms")), [L0["i"]])), "tag")), L0["mditag"]))) {
              await $.mset((await $.idx((await $.v(C, "MDIForms")), [L0["i"]])), "visible", true);
              L0["result"] = 1;
            } else {
              await $.mset((await $.idx((await $.v(C, "MDIForms")), [L0["i"]])), "visible", false);
            }
          }
          else if ($.eq($t12, 9)) {
            await $.mcall((await $.idx((await $.v(C, "MDIForms")), [L0["i"]])), "Free", []);
          }
        }
      }
      await $.tick();
    }
  }
  return L0.result;
}, {"params": ["MDITag", "State"], "kind": "function", "ptypes": ["Integer", "Integer"]});
  U.method("TInsurancesForm", "InsPluginMgrButtonsClick", async function InsPluginMgrButtonsClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "sendertag": 0, "btnidx": 0};
  await $.fixArgs(L0, ["sender"]);
  L0["sendertag"] = (await $.mv((L0["sender"]), "tag"));
  L0["btnidx"] = (await $.mcall((L0["sender"]), "getIdBytag", [L0["sendertag"]]));
  await $.stmt((await $.mcall((await $.v(C, "MDIFifo")), "Add", [L0["sendertag"]])));
  if ($.truthy($.eq((await $.call(C, "ChangeMDIState", [L0["sendertag"], (await $.v(C, "cMDICheck"))])), 1))) {
    return L0.result;
  }
  await $.stmt((await $.call(C, "SetLength", [$.ref(async () => (await $.v(C, "MDIForms")), async ($t13) => { await $.set(C, "MDIForms", $t13); }), $.add((await $.v(C, "FormCount")), 1)])));
  { const $t14 = await $.iset((await $.v(C, "MDIForms")), [(await $.v(C, "FormCount"))], (await $.mcall((await $.v(C, "TMDIChildPanel")), "Create", [Self]))); if ($t14 !== undefined) { await $.set(C, "MDIForms", $t14); } }
  {
    const $t15 = (await $.idx((await $.v(C, "MDIForms")), [(await $.v(C, "FormCount"))]));
    await $.wset([$t15], "Parent", Self, C);
    await $.wset([$t15], "Align", (await $.wv([$t15], "alClient", C, false)), C);
    await $.wset([$t15], "OnClose", (await $.wv([$t15], "MDIChildPanel1Close", C, true)), C);
    await $.wset([$t15], "Tag", (await $.wv([$t15], "SenderTag", { get: async () => L0["sendertag"], set: async (v) => { L0["sendertag"] = v; }, local: true }, false)), C);
  }
  await $.set(C, "FOleObject", (await $.mcall((await $.v(C, "TActiveFormX")), "CreateObject", [(await $.idx((await $.v(C, "MDIForms")), [(await $.v(C, "FormCount"))])), (await $.mv((await $.idx((await $.mv((L0["sender"]), "buts")), [L0["btnidx"]])), "PluginGuid")), (await $.v(C, "IUnknown"))])));
  {
    const $t16 = (await $.v(C, "FOleObject"));
    await $.wset([$t16], "Tag", (await $.wv([$t16], "SenderTag", { get: async () => L0["sendertag"], set: async (v) => { L0["sendertag"] = v; }, local: true }, false)), C);
    await $.wset([$t16], "Parent", (await $.mv((await $.idx((await $.wv([$t16], "MDIForms", C, false)), [(await $.wv([$t16], "FormCount", C, false))])), "pClient")), C);
    await $.wset([$t16], "Align", (await $.wv([$t16], "alClient", C, false)), C);
  }
  await $.stmt((await $.call(C, "inc", [$.ref(async () => (await $.v(C, "FormCount")), async ($t17) => { await $.set(C, "FormCount", $t17); }), 1])));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TInsurancesForm", "ActiveFormDestroy", async function ActiveFormDestroy(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.stmt((await $.call(C, "ChangeMDIState", [(await $.v(C, "cMDIFree")), (await $.v(C, "cMDIFree"))])));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TInsurancesForm", "MDIChildPanel1Close", async function MDIChildPanel1Close(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.ne((await $.mv((L0["sender"]), "tag")), 29))) {
    await $.mset(L0["sender"], "Visible", false);
    await $.stmt((await $.call(C, "ChangeMDIState", [(await $.mv((await $.v(C, "MDIFifo")), "Delete")), (await $.v(C, "cMDIShow"))])));
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  return U;
}
