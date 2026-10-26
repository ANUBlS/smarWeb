// Generated from UPAccPolicy.pas by pas2js — do not edit by hand; regenerate instead.
/* eslint-disable */
// @ts-nocheck

export default function define($) {
  const U = $.unit("UPAccPolicy", ["Windows", "Messages", "SysUtils", "Classes", "Graphics", "Controls", "Forms", "LDialogs", "ActiveX", "AxCtrls", "PPAccPolicy_TLB", "StdVcl", "ExtCtrls", "StdCtrls", "Buttons", "Oracle", "Mask", "DBCtrls", "SBPlgAx50_TLB", "DB", "INSWordExporter", "ComObj", "ComServ", "UDataMod"]);
  const C = [U];
  U.defClass("TPAccPolicy", "TActiveForm", {"panel1": {"name": "Panel1", "type": "TPanel"}, "panel2": {"name": "Panel2", "type": "TPanel"}, "btprint": {"name": "btPrint", "type": "TBitBtn"}, "btapply": {"name": "btApply", "type": "TBitBtn"}, "bitbtn1": {"name": "BitBtn1", "type": "TBitBtn"}, "bitbtn2": {"name": "BitBtn2", "type": "TBitBtn"}, "label4": {"name": "Label4", "type": "TLabel"}, "enum": {"name": "ENum", "type": "TDBEdit"}, "policyexporter": {"name": "PolicyExporter", "type": "TINSWordExporter"}, "id": {"name": "id", "type": "Integer"}, "tid": {"name": "tid", "type": "Integer"}, "fparams": {"name": "FParams", "type": "TStrings"}, "fownerhandle": {"name": "FOwnerHandle", "type": "Integer"}, "fevents": {"name": "FEvents", "type": "IPAccPolicyEvents"}}, {"params": {"name": "Params", "read": "Get_Params", "write": "Set_Params"}});
  U.init(async () => {
    U.const("WM_ModalResult", $.add((await $.v(C, "WM_USER")), 139));
    U.const("fmCaption", "Policy: (%s)");
    U.var_("PAccPolicy", null, "TPAccPolicy");
  });
  U.method("TPAccPolicy", "DefinePropertyPages", async function DefinePropertyPages(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"definepropertypage": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["definepropertypage"]);
  return L0.result;
}, {"params": ["DefinePropertyPage"], "kind": "procedure", "ptypes": ["TDefinePropertyPage"]});
  U.method("TPAccPolicy", "EventSinkChanged", async function EventSinkChanged(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"eventsink": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["eventsink"]);
  await $.set(C, "FEvents", L0["eventsink"]);
  return L0.result;
}, {"params": ["EventSink"], "kind": "procedure", "ptypes": ["IUnknown"]});
  U.method("TPAccPolicy", "Initialize", async function Initialize(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: undefined};
  await $.inherited(Self, "TPAccPolicy", "Initialize", null, arguments);
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
  U.method("TPAccPolicy", "Get_Active", async function Get_Active(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: false};
  L0["result"] = (await $.v(C, "Active"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TPAccPolicy", "Get_AutoScroll", async function Get_AutoScroll(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: false};
  L0["result"] = (await $.v(C, "AutoScroll"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TPAccPolicy", "Get_AutoSize", async function Get_AutoSize(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: false};
  L0["result"] = (await $.v(C, "AutoSize"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TPAccPolicy", "Get_AxBorderStyle", async function Get_AxBorderStyle(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: null};
  L0["result"] = (await $.call(C, "Ord", [(await $.v(C, "AxBorderStyle"))]));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TPAccPolicy", "Get_Caption", async function Get_Caption(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: ''};
  L0["result"] = (await $.call(C, "WideString", [(await $.v(C, "Caption"))]));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TPAccPolicy", "Get_Color", async function Get_Color(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: null};
  L0["result"] = (await $.call(C, "OLE_COLOR", [(await $.v(C, "Color"))]));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TPAccPolicy", "Get_Cursor", async function Get_Cursor(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: 0};
  L0["result"] = (await $.call(C, "Smallint", [(await $.v(C, "Cursor"))]));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TPAccPolicy", "Get_DoubleBuffered", async function Get_DoubleBuffered(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: false};
  L0["result"] = (await $.v(C, "DoubleBuffered"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TPAccPolicy", "Get_DropTarget", async function Get_DropTarget(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: false};
  L0["result"] = (await $.v(C, "DropTarget"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TPAccPolicy", "Get_Enabled", async function Get_Enabled(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: false};
  L0["result"] = (await $.v(C, "Enabled"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TPAccPolicy", "Get_Font", async function Get_Font(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: null};
  await $.stmt((await $.call(C, "GetOleFont", [(await $.v(C, "Font")), L0["result"]])));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TPAccPolicy", "Get_HelpFile", async function Get_HelpFile(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: ''};
  L0["result"] = (await $.call(C, "WideString", [(await $.v(C, "HelpFile"))]));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TPAccPolicy", "Get_KeyPreview", async function Get_KeyPreview(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: false};
  L0["result"] = (await $.v(C, "KeyPreview"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TPAccPolicy", "Get_PixelsPerInch", async function Get_PixelsPerInch(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: 0};
  L0["result"] = (await $.v(C, "PixelsPerInch"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TPAccPolicy", "Get_PrintScale", async function Get_PrintScale(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: null};
  L0["result"] = (await $.call(C, "Ord", [(await $.v(C, "PrintScale"))]));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TPAccPolicy", "Get_Scaled", async function Get_Scaled(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: false};
  L0["result"] = (await $.v(C, "Scaled"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TPAccPolicy", "Get_Visible", async function Get_Visible(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: false};
  L0["result"] = (await $.v(C, "Visible"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TPAccPolicy", "Get_VisibleDockClientCount", async function Get_VisibleDockClientCount(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: 0};
  L0["result"] = (await $.v(C, "VisibleDockClientCount"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TPAccPolicy", "_Set_Font", async function _Set_Font(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.stmt((await $.call(C, "SetOleFont", [(await $.v(C, "Font")), L0["value"]])));
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["IFontDisp"]});
  U.method("TPAccPolicy", "ActivateEvent", async function ActivateEvent(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.ne((await $.v(C, "FEvents")), null))) {
    await $.mcall((await $.v(C, "FEvents")), "OnActivate", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TPAccPolicy", "ClickEvent", async function ClickEvent(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.ne((await $.v(C, "FEvents")), null))) {
    await $.mcall((await $.v(C, "FEvents")), "OnClick", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TPAccPolicy", "CreateEvent", async function CreateEvent(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.ne((await $.v(C, "FEvents")), null))) {
    await $.mcall((await $.v(C, "FEvents")), "OnCreate", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TPAccPolicy", "DblClickEvent", async function DblClickEvent(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.ne((await $.v(C, "FEvents")), null))) {
    await $.mcall((await $.v(C, "FEvents")), "OnDblClick", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TPAccPolicy", "DeactivateEvent", async function DeactivateEvent(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.ne((await $.v(C, "FEvents")), null))) {
    await $.mcall((await $.v(C, "FEvents")), "OnDeactivate", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TPAccPolicy", "DestroyEvent", async function DestroyEvent(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.ne((await $.v(C, "FEvents")), null))) {
    await $.mcall((await $.v(C, "FEvents")), "OnDestroy", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TPAccPolicy", "KeyPressEvent", async function KeyPressEvent(Self, p0, p1) {
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
  U.method("TPAccPolicy", "PaintEvent", async function PaintEvent(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.ne((await $.v(C, "FEvents")), null))) {
    await $.mcall((await $.v(C, "FEvents")), "OnPaint", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TPAccPolicy", "Set_AutoScroll", async function Set_AutoScroll(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "AutoScroll", L0["value"]);
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["WordBool"]});
  U.method("TPAccPolicy", "Set_AutoSize", async function Set_AutoSize(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "AutoSize", L0["value"]);
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["WordBool"]});
  U.method("TPAccPolicy", "Set_AxBorderStyle", async function Set_AxBorderStyle(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "AxBorderStyle", (await $.call(C, "TActiveFormBorderStyle", [L0["value"]])));
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["TxActiveFormBorderStyle"]});
  U.method("TPAccPolicy", "Set_Caption", async function Set_Caption(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "Caption", (await $.call(C, "TCaption", [L0["value"]])));
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["WideString"]});
  U.method("TPAccPolicy", "Set_Color", async function Set_Color(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "Color", (await $.call(C, "TColor", [L0["value"]])));
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["OLE_COLOR"]});
  U.method("TPAccPolicy", "Set_Cursor", async function Set_Cursor(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "Cursor", (await $.call(C, "TCursor", [L0["value"]])));
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["Smallint"]});
  U.method("TPAccPolicy", "Set_DoubleBuffered", async function Set_DoubleBuffered(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "DoubleBuffered", L0["value"]);
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["WordBool"]});
  U.method("TPAccPolicy", "Set_DropTarget", async function Set_DropTarget(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "DropTarget", L0["value"]);
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["WordBool"]});
  U.method("TPAccPolicy", "Set_Enabled", async function Set_Enabled(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "Enabled", L0["value"]);
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["WordBool"]});
  U.method("TPAccPolicy", "Set_Font", async function Set_Font(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.asRef(p0), result: undefined};
  await $.stmt((await $.call(C, "SetOleFont", [(await $.v(C, "Font")), (await L0["value"].get())])));
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["IFontDisp"]});
  U.method("TPAccPolicy", "Set_HelpFile", async function Set_HelpFile(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "HelpFile", (await $.call(C, "String", [L0["value"]])));
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["WideString"]});
  U.method("TPAccPolicy", "Set_KeyPreview", async function Set_KeyPreview(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "KeyPreview", L0["value"]);
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["WordBool"]});
  U.method("TPAccPolicy", "Set_PixelsPerInch", async function Set_PixelsPerInch(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "PixelsPerInch", L0["value"]);
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["Integer"]});
  U.method("TPAccPolicy", "Set_PrintScale", async function Set_PrintScale(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "PrintScale", (await $.call(C, "TPrintScale", [L0["value"]])));
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["TxPrintScale"]});
  U.method("TPAccPolicy", "Set_Scaled", async function Set_Scaled(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "Scaled", L0["value"]);
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["WordBool"]});
  U.method("TPAccPolicy", "Set_Visible", async function Set_Visible(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "Visible", L0["value"]);
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["WordBool"]});
  U.method("TPAccPolicy", "Get_Owner", async function Get_Owner(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: 0};
  L0["result"] = (await $.v(C, "handle"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TPAccPolicy", "Set_Owner", async function Set_Owner(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"val": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["val"]);
  if ($.truthy($.gt(L0["val"], 0))) {
    await $.set(C, "FOwnerHandle", L0["val"]);
  }
  return L0.result;
}, {"params": ["val"], "kind": "procedure", "ptypes": ["Integer"]});
  U.method("TPAccPolicy", "Get_Params", async function Get_Params(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"name": $.copyArg(p0), result: null};
  await $.fixArgs(L0, ["name"]);
  L0["result"] = (await $.idx((await $.mv((await $.v(C, "FParams")), "Values")), [L0["name"]]));
  return L0.result;
}, {"params": ["Name"], "kind": "function", "ptypes": ["WideString"]});
  U.method("TPAccPolicy", "Set_Params", async function Set_Params(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"name": $.copyArg(p0), "value": $.copyArg(p1), result: undefined};
  await $.fixArgs(L0, ["name", "value"]);
  { const $t1 = await $.iset((await $.mv((await $.v(C, "FParams")), "Values")), [L0["name"]], L0["value"]); if ($t1 !== undefined) { await $.mset((await $.v(C, "FParams")), "Values", $t1); } }
  return L0.result;
}, {"params": ["Name", "Value"], "kind": "procedure", "ptypes": ["WideString", "OleVariant"]});
  U.method("TPAccPolicy", "InstanceInitialize", async function InstanceInitialize(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: null};
  L0["result"] = (await $.v(C, "S_OK"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TPAccPolicy", "Cleanup", async function Cleanup(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: null};
  L0["result"] = (await $.v(C, "S_OK"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TPAccPolicy", "UIObjectActivate", async function UIObjectActivate(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: null};
  await $.set(C, "id", (await $.call(C, "StrToInt", [(await $.call(C, "Get_Params", ["id"]))])));
  {
    const $t2 = (await $.v(C, "PolicyDModule"));
    await $.mcall((await $.wv([$t2], "ODSPAccident", C, false)), "Close", []);
    await $.stmt((await $.mcall((await $.wv([$t2], "ODSPAccident", C, false)), "SetVariable", ["id", (await $.wv([$t2], "id", C, false))])));
    await $.mcall((await $.wv([$t2], "ODSPAccident", C, false)), "Open", []);
    await $.mcall((await $.wv([$t2], "ODSCustomers", C, false)), "Close", []);
    await $.stmt((await $.mcall((await $.wv([$t2], "ODSCustomers", C, false)), "SetVariable", ["id", (await $.mv((await $.wv([$t2], "ODSPAccidentkli_id", C, false)), "Value"))])));
    await $.mcall((await $.wv([$t2], "ODSCustomers", C, false)), "Open", []);
    await $.mcall((await $.wv([$t2], "ODSContracts", C, false)), "Close", []);
    await $.stmt((await $.mcall((await $.wv([$t2], "ODSContracts", C, false)), "SetVariable", ["blankid", (await $.mv((await $.wv([$t2], "ODSPAccidentId", C, false)), "value"))])));
    await $.mcall((await $.wv([$t2], "ODSContracts", C, false)), "Open", []);
    await $.mcall((await $.wv([$t2], "ODSPAccSuggest", C, false)), "Close", []);
    await $.stmt((await $.mcall((await $.wv([$t2], "ODSPAccSuggest", C, false)), "SetVariable", ["PAID", (await $.wcall([$t2], "StrToInt", [(await $.wcall([$t2], "Get_Params", ["id"], C))], C))])));
    await $.mcall((await $.wv([$t2], "ODSPAccSuggest", C, false)), "Open", []);
    await $.wset([$t2], "tid", (await $.mv((await $.wv([$t2], "ODSPAccidentTypeID", C, false)), "Value")), C);
    if ($.truthy((await $.mv((await $.wv([$t2], "ODSContractsPolicy_Num", C, false)), "IsNull")))) {
      await $.mcall((await $.wv([$t2], "ODSContracts", C, false)), "Close", []);
      await $.stmt((await $.mcall((await $.wv([$t2], "ODSContracts", C, false)), "SetVariable", ["blankid", (await $.mv((await $.wv([$t2], "ODSPAccidentId", C, false)), "value"))])));
      await $.mcall((await $.wv([$t2], "ODSContracts", C, false)), "Open", []);
      await $.mcall((await $.wv([$t2], "ODSContracts", C, false)), "Edit", []);
      await $.wset([$t2], "Caption", (await $.wcall([$t2], "format", [(await $.wv([$t2], "fmCaption", C, false)), ["Elave"]], C)), C);
      await $.mset((await $.wv([$t2], "btPrint", C, false)), "Enabled", (await $.wv([$t2], "false", C, false)));
    } else {
      await $.mcall((await $.wv([$t2], "ODSContracts", C, false)), "Edit", []);
      await $.wset([$t2], "Caption", (await $.wcall([$t2], "format", [(await $.wv([$t2], "fmCaption", C, false)), ["Redakte"]], C)), C);
      await $.mset((await $.wv([$t2], "btPrint", C, false)), "Enabled", (await $.wv([$t2], "true", C, false)));
    }
  }
  L0["result"] = (await $.v(C, "S_OK"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TPAccPolicy", "QueryDeactivate", async function QueryDeactivate(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: null};
  L0["result"] = (await $.v(C, "S_OK"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TPAccPolicy", "UIObjectDeactivate", async function UIObjectDeactivate(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: null};
  L0["result"] = (await $.v(C, "S_OK"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TPAccPolicy", "SaveState", async function SaveState(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: null};
  L0["result"] = (await $.v(C, "S_OK"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TPAccPolicy", "Get_Height", async function Get_Height(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: 0};
  L0["result"] = (await $.v(C, "Height"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TPAccPolicy", "Get_Width", async function Get_Width(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: 0};
  L0["result"] = (await $.v(C, "Width"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TPAccPolicy", "ActiveFormCreate", async function ActiveFormCreate(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.set(C, "PAccPolicy", Self);
  await $.set(C, "FParams", (await $.mv((await $.v(C, "TStringList")), "Create")));
  await $.set(C, "PolicyDModule", (await $.mcall((await $.v(C, "TPolicyDModule")), "Create", [Self])));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TPAccPolicy", "BitBtn2Click", async function BitBtn2Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.stmt((await $.call(C, "PostMessage", [(await $.v(C, "FOwnerHandle")), (await $.v(C, "WM_ModalResult")), (await $.v(C, "mrCancel")), 0])));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TPAccPolicy", "BitBtn1Click", async function BitBtn1Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t3 = (await $.v(C, "PolicyDModule"));
    const $t4 = (await $.wv([$t3], "ODSContracts", C, false));
    if ($.truthy($.in_((await $.wv([$t3, $t4], "State", C, false)), [(await $.wv([$t3, $t4], "dsEdit", C, false)), (await $.wv([$t3, $t4], "dsInsert", C, false))]))) {
      if ($.truthy((await $.mv((await $.wv([$t3, $t4], "ODSContractsPolicy_Num", C, false)), "IsNull")))) {
        await $.mset((await $.wcall([$t3, $t4], "FieldByName", ["POLICY_NUM"], C)), "AsString", (await $.mcall((await $.wv([$t3, $t4], "OPCommon", C, false)), "callStringFunction", ["generatePolicy_Num", [(await $.wv([$t3, $t4], "tid", C, false))]])));
      }
      await $.stmt($.wcall([$t3, $t4], "Post", [], C));
    }
  }
  await $.stmt((await $.call(C, "PostMessage", [(await $.v(C, "FOwnerHandle")), (await $.v(C, "WM_ModalResult")), (await $.v(C, "mrOk")), 0])));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TPAccPolicy", "btApplyClick", async function btApplyClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t5 = (await $.v(C, "PolicyDModule"));
    const $t6 = (await $.wv([$t5], "ODSContracts", C, false));
    if ($.truthy($.in_((await $.wv([$t5, $t6], "State", C, false)), [(await $.wv([$t5, $t6], "dsEdit", C, false)), (await $.wv([$t5, $t6], "dsInsert", C, false))]))) {
      if ($.truthy((await $.mv((await $.wv([$t5, $t6], "ODSContractsPolicy_Num", C, false)), "IsNull")))) {
        await $.mset((await $.wcall([$t5, $t6], "FieldByName", ["POLICY_NUM"], C)), "AsString", (await $.mcall((await $.wv([$t5, $t6], "OPCommon", C, false)), "callStringFunction", ["generatePolicy_Num", [(await $.wv([$t5, $t6], "tid", C, false))]])));
      }
      await $.stmt($.wcall([$t5, $t6], "Post", [], C));
      await $.stmt((await $.wcall([$t5, $t6], "RefreshRecord", [], C)));
    }
  }
  await $.mset((await $.v(C, "btApply")), "Enabled", false);
  await $.mset((await $.v(C, "btPrint")), "Enabled", true);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TPAccPolicy", "ENumChange", async function ENumChange(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mset((await $.v(C, "btApply")), "Enabled", true);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TPAccPolicy", "ENumKeyPress", async function ENumKeyPress(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "key": $.asRef(p1), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.eq((await L0["key"].get()), "\r"))) {
    if ($.truthy($.ne((await $.call(C, "HiWord", [(await $.call(C, "GetKeyState", [(await $.v(C, "VK_Shift"))]))])), 0))) {
      {
        const $t7 = L0["sender"];
        await $.stmt((await $.wcall([$t7], "SelectNext", [(await $.wv([$t7], "ActiveControl", C, false)), (await $.wv([$t7], "False", C, false)), (await $.wv([$t7], "True", C, false))], C)));
      }
    } else {
      {
        const $t8 = L0["sender"];
        await $.stmt((await $.wcall([$t8], "SelectNext", [(await $.wv([$t8], "ActiveControl", C, false)), (await $.wv([$t8], "True", C, false)), (await $.wv([$t8], "True", C, false))], C)));
      }
    }
    await L0["key"].set("\u0000");
  }
  return L0.result;
}, {"params": ["Sender", "Key"], "kind": "procedure", "ptypes": ["TObject", "Char"]});
  U.method("TPAccPolicy", "btPrintClick", async function btPrintClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.eq((await $.call(C, "MessageDlg", ["Əməliyyat aparılsın?", (await $.v(C, "mtConfirmation")), [(await $.v(C, "mbYes")), (await $.v(C, "mbNo"))], 0])), (await $.v(C, "mrYes"))))) {
    await $.stmt((await $.call(C, "AddTransh", [])));
  }
  {
    const $t9 = (await $.v(C, "PolicyDModule"));
    await $.mcall((await $.wv([$t9], "ODSCondition", C, false)), "Close", []);
    await $.stmt((await $.mcall((await $.wv([$t9], "ODSCondition", C, false)), "SetVariable", ["vid", (await $.mv((await $.wv([$t9], "ODSPAccSuggestCNDT_ID", C, false)), "Value"))])));
    await $.mcall((await $.wv([$t9], "ODSCondition", C, false)), "Open", []);
    await $.mcall((await $.wv([$t9], "Franshiz", C, false)), "Close", []);
    await $.stmt((await $.mcall((await $.wv([$t9], "Franshiz", C, false)), "SetVariable", ["fid", (await $.mv((await $.wv([$t9], "ODSPAccSuggestFRZ_ID", C, false)), "Value"))])));
    await $.mcall((await $.wv([$t9], "Franshiz", C, false)), "Open", []);
    await $.stmt((await $.mcall((await $.wv([$t9], "ODSBeneficiary", C, false)), "Locate", ["id", (await $.mv((await $.wv([$t9], "ODSPAccidentPROFITID", C, false)), "Value")), []])));
    await $.stmt((await $.mcall((await $.wv([$t9], "ODSAgent", C, false)), "Locate", ["id", (await $.mv((await $.wv([$t9], "ODSPAccidentAgentid", C, false)), "Value")), []])));
    try {
      {
        const $t10 = (await $.wv([$t9], "PolicyExporter", C, false));
        await $.wset([$t9, $t10], "FileName", $.add((await $.wcall([$t9, $t10], "ExtractFilePath", [(await $.mv((await $.wv([$t9, $t10], "Application", C, false)), "ExeName"))], C)), "\\ferdi qeza polis.doc"), C);
        await $.stmt((await $.wcall([$t9, $t10], "Open", [(await $.wv([$t9, $t10], "False", C, false))], C)));
        await $.stmt((await $.wcall([$t9, $t10], "SetBookmark", ["Policynum", (await $.mv((await $.wv([$t9, $t10], "ODSContractsPolicy_num", C, false)), "value")), (await $.wv([$t9, $t10], "false", C, false)), (await $.wv([$t9, $t10], "false", C, false)), (await $.wv([$t9, $t10], "False", C, false)), (await $.wv([$t9, $t10], "false", C, false)), 8, "Arial AzLat", (await $.wv([$t9, $t10], "False", C, false))], C)));
        await $.stmt((await $.wcall([$t9, $t10], "SetBookmark", ["Agent", (await $.mv((await $.wv([$t9, $t10], "ODSAgentName", C, false)), "value")), (await $.wv([$t9, $t10], "false", C, false)), (await $.wv([$t9, $t10], "false", C, false)), (await $.wv([$t9, $t10], "False", C, false)), (await $.wv([$t9, $t10], "false", C, false)), 8, "Arial AzLat", (await $.wv([$t9, $t10], "False", C, false))], C)));
        await $.stmt((await $.wcall([$t9, $t10], "SetBookmark", ["Insured", (await $.mv((await $.wv([$t9, $t10], "ODSCustomersName", C, false)), "value")), (await $.wv([$t9, $t10], "false", C, false)), (await $.wv([$t9, $t10], "false", C, false)), (await $.wv([$t9, $t10], "False", C, false)), (await $.wv([$t9, $t10], "false", C, false)), 8, "Arial AzLat", (await $.wv([$t9, $t10], "False", C, false))], C)));
        await $.stmt((await $.wcall([$t9, $t10], "SetBookmark", ["AInsured", (await $.mv((await $.wv([$t9, $t10], "ODSCustomersAddress", C, false)), "value")), (await $.wv([$t9, $t10], "false", C, false)), (await $.wv([$t9, $t10], "false", C, false)), (await $.wv([$t9, $t10], "False", C, false)), (await $.wv([$t9, $t10], "false", C, false)), 8, "Arial AzLat", (await $.wv([$t9, $t10], "False", C, false))], C)));
        await $.stmt((await $.wcall([$t9, $t10], "SetBookmark", ["Insperiod", $.add($.add((await $.wcall([$t9, $t10], "DateToStr", [(await $.mv((await $.wv([$t9, $t10], "ODSContractsBegin_date", C, false)), "value"))], C)), " - "), (await $.wcall([$t9, $t10], "DateToStr", [(await $.mv((await $.wv([$t9, $t10], "ODSContractsEnd_date", C, false)), "value"))], C))), (await $.wv([$t9, $t10], "false", C, false)), (await $.wv([$t9, $t10], "false", C, false)), (await $.wv([$t9, $t10], "False", C, false)), (await $.wv([$t9, $t10], "false", C, false)), 8, "Arial AzLat", (await $.wv([$t9, $t10], "False", C, false))], C)));
        await $.stmt((await $.wcall([$t9, $t10], "SetBookmark", ["Beneficiary", (await $.mv((await $.wv([$t9, $t10], "ODSBeneficiaryName", C, false)), "value")), (await $.wv([$t9, $t10], "false", C, false)), (await $.wv([$t9, $t10], "false", C, false)), (await $.wv([$t9, $t10], "False", C, false)), (await $.wv([$t9, $t10], "false", C, false)), 8, "Arial AzLat", (await $.wv([$t9, $t10], "False", C, false))], C)));
        await $.stmt((await $.wcall([$t9, $t10], "SetBookmark", ["Inssum", (await $.wcall([$t9, $t10], "FloatToStr", [(await $.mv((await $.wv([$t9, $t10], "ODSPAccSuggestInsurancesum", C, false)), "value"))], C)), (await $.wv([$t9, $t10], "false", C, false)), (await $.wv([$t9, $t10], "false", C, false)), (await $.wv([$t9, $t10], "False", C, false)), (await $.wv([$t9, $t10], "false", C, false)), 8, "Arial AzLat", (await $.wv([$t9, $t10], "False", C, false))], C)));
        await $.stmt((await $.wcall([$t9, $t10], "SetBookmark", ["Insammount", (await $.wcall([$t9, $t10], "CurrToStr", [(await $.mv((await $.wv([$t9, $t10], "ODSCONtractsAmmount", C, false)), "value"))], C)), (await $.wv([$t9, $t10], "false", C, false)), (await $.wv([$t9, $t10], "false", C, false)), (await $.wv([$t9, $t10], "False", C, false)), (await $.wv([$t9, $t10], "false", C, false)), 8, "Arial AzLat", (await $.wv([$t9, $t10], "False", C, false))], C)));
        await $.stmt((await $.wcall([$t9, $t10], "SetBookmark", ["Inst", (await $.wcall([$t9, $t10], "DateToStr", [(await $.mv((await $.wv([$t9, $t10], "ODSPAccSuggestInsuranceTime", C, false)), "value"))], C)), (await $.wv([$t9, $t10], "false", C, false)), (await $.wv([$t9, $t10], "false", C, false)), (await $.wv([$t9, $t10], "False", C, false)), (await $.wv([$t9, $t10], "false", C, false)), 8, "Arial AzLat", (await $.wv([$t9, $t10], "False", C, false))], C)));
        await $.stmt((await $.wcall([$t9, $t10], "SetBookmark", ["Franshiz", (await $.mv((await $.wv([$t9, $t10], "FranshizName", C, false)), "value")), (await $.wv([$t9, $t10], "false", C, false)), (await $.wv([$t9, $t10], "false", C, false)), (await $.wv([$t9, $t10], "False", C, false)), (await $.wv([$t9, $t10], "false", C, false)), 8, "Arial AzLat", (await $.wv([$t9, $t10], "False", C, false))], C)));
        await $.stmt((await $.wcall([$t9, $t10], "SetBookmark", ["Cond", (await $.mv((await $.wv([$t9, $t10], "ODSConditionName", C, false)), "value")), (await $.wv([$t9, $t10], "false", C, false)), (await $.wv([$t9, $t10], "false", C, false)), (await $.wv([$t9, $t10], "False", C, false)), (await $.wv([$t9, $t10], "false", C, false)), 8, "Arial AzLat", (await $.wv([$t9, $t10], "False", C, false))], C)));
        await $.stmt((await $.wcall([$t9, $t10], "SetBookmark", ["Insured1", (await $.mv((await $.wv([$t9, $t10], "ODSCustomersName", C, false)), "value")), (await $.wv([$t9, $t10], "false", C, false)), (await $.wv([$t9, $t10], "false", C, false)), (await $.wv([$t9, $t10], "False", C, false)), (await $.wv([$t9, $t10], "false", C, false)), 9, "Arial AzLat", (await $.wv([$t9, $t10], "False", C, false))], C)));
      }
    } finally {
      await $.mcall((await $.wv([$t9], "PolicyExporter", C, false)), "Show", []);
    }
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TPAccPolicy", "AddTransh", async function AddTransh(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: undefined};
  {
    const $t11 = (await $.v(C, "PolicyDModule"));
    await $.mcall((await $.wv([$t11], "ODSContracts", C, false)), "Close", []);
    await $.stmt((await $.mcall((await $.wv([$t11], "ODSContracts", C, false)), "SetVariable", ["blankid", (await $.mv((await $.wv([$t11], "ODSPAccidentID", C, false)), "Value"))])));
    await $.mcall((await $.wv([$t11], "ODSContracts", C, false)), "Open", []);
    if ($.truthy($.gt((await $.mcall((await $.wv([$t11], "OPCOMMON", C, false)), "CallIntegerFunction", ["addtransaction", [(await $.mv((await $.mcall((await $.wv([$t11], "ODSContracts", C, false)), "FieldByName", ["LOANACC_ID"])), "asFloat")), (await $.mv((await $.mcall((await $.wv([$t11], "ODSContracts", C, false)), "FieldByName", ["CURRACC_ID"])), "asFloat")), (await $.mv((await $.mcall((await $.wv([$t11], "ODSContracts", C, false)), "FieldByName", ["AMMOUNT"])), "asFloat"))]])), 0))) {
      await $.stmt((await $.wcall([$t11], "MessageDlg", ["Əməliyyat keçirildi.", (await $.wv([$t11], "mtInformation", C, false)), [(await $.wv([$t11], "mbOK", C, false))], 0], C)));
    }
    await $.stmt($.wcall([$t11], "Close", [], C));
  }
  return L0.result;
}, {"params": [], "kind": "procedure", "ptypes": []});
  return U;
}
