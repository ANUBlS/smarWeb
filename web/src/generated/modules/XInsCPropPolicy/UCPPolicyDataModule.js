// Generated from UCPPolicyDataModule.pas by pas2js — do not edit by hand; regenerate instead.
/* eslint-disable */
// @ts-nocheck

export default function define($) {
  const U = $.unit("UCPPolicyDataModule", ["Windows", "Messages", "SysUtils", "Classes", "Graphics", "Controls", "Forms", "LDialogs", "ActiveX", "AxCtrls", "PCPropertyPolicy_TLB", "StdVcl", "INSWordExporter", "StdCtrls", "Buttons", "Mask", "DBCtrls", "ExtCtrls", "SBPlgAx50_TLB", "db", "Oracle", "TntStdCtrls", "ComObj", "ComServ", "UCPropertyPolicy"]);
  const C = [U];
  U.defClass("TCPropertyPolicy", "TActiveForm", {"panel2": {"name": "Panel2", "type": "TPanel"}, "label4": {"name": "Label4", "type": "TLabel"}, "enum": {"name": "ENum", "type": "TDBEdit"}, "panel1": {"name": "Panel1", "type": "TPanel"}, "btprint": {"name": "btPrint", "type": "TBitBtn"}, "btapply": {"name": "btApply", "type": "TBitBtn"}, "bitbtn1": {"name": "BitBtn1", "type": "TBitBtn"}, "bitbtn2": {"name": "BitBtn2", "type": "TBitBtn"}, "policyexporter": {"name": "PolicyExporter", "type": "TINSWordExporter"}, "cbpolnum": {"name": "cbPolNum", "type": "TCheckBox"}, "cbaccounts": {"name": "cbAccounts", "type": "TCheckBox"}, "cbtransactions": {"name": "cbTransactions", "type": "TCheckBox"}, "lbnonunicode": {"name": "lbNonUnicode", "type": "TListBox"}, "tlbunicode": {"name": "tlbUnicode", "type": "TTntListBox"}, "id": {"name": "id", "type": "Integer"}, "cid": {"name": "cid", "type": "integer"}, "tid": {"name": "tid", "type": "integer"}, "fparams": {"name": "FParams", "type": "TStrings"}, "fownerhandle": {"name": "FOwnerHandle", "type": "Integer"}, "fevents": {"name": "FEvents", "type": "ICPropertyPolicyEvents"}}, {"params": {"name": "Params", "read": "Get_Params", "write": "Set_Params"}});
  U.init(async () => {
    U.const("WM_ModalResult", $.add((await $.v(C, "WM_USER")), 139));
    U.const("fmCaption", "Policy: (%s)");
    U.var_("CPropertyPolicy", null, "TCPropertyPolicy");
  });
  U.method("TCPropertyPolicy", "DefinePropertyPages", async function DefinePropertyPages(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"definepropertypage": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["definepropertypage"]);
  return L0.result;
}, {"params": ["DefinePropertyPage"], "kind": "procedure", "ptypes": ["TDefinePropertyPage"]});
  U.method("TCPropertyPolicy", "EventSinkChanged", async function EventSinkChanged(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"eventsink": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["eventsink"]);
  await $.set(C, "FEvents", L0["eventsink"]);
  return L0.result;
}, {"params": ["EventSink"], "kind": "procedure", "ptypes": ["IUnknown"]});
  U.method("TCPropertyPolicy", "Initialize", async function Initialize(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: undefined};
  await $.inherited(Self, "TCPropertyPolicy", "Initialize", null, arguments);
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
  U.method("TCPropertyPolicy", "Get_Active", async function Get_Active(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: false};
  L0["result"] = (await $.v(C, "Active"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TCPropertyPolicy", "Get_AutoScroll", async function Get_AutoScroll(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: false};
  L0["result"] = (await $.v(C, "AutoScroll"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TCPropertyPolicy", "Get_AutoSize", async function Get_AutoSize(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: false};
  L0["result"] = (await $.v(C, "AutoSize"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TCPropertyPolicy", "Get_AxBorderStyle", async function Get_AxBorderStyle(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: null};
  L0["result"] = (await $.call(C, "Ord", [(await $.v(C, "AxBorderStyle"))]));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TCPropertyPolicy", "Get_Caption", async function Get_Caption(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: ''};
  L0["result"] = (await $.call(C, "WideString", [(await $.v(C, "Caption"))]));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TCPropertyPolicy", "Get_Color", async function Get_Color(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: null};
  L0["result"] = (await $.call(C, "OLE_COLOR", [(await $.v(C, "Color"))]));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TCPropertyPolicy", "Get_Cursor", async function Get_Cursor(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: 0};
  L0["result"] = (await $.call(C, "Smallint", [(await $.v(C, "Cursor"))]));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TCPropertyPolicy", "Get_DoubleBuffered", async function Get_DoubleBuffered(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: false};
  L0["result"] = (await $.v(C, "DoubleBuffered"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TCPropertyPolicy", "Get_DropTarget", async function Get_DropTarget(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: false};
  L0["result"] = (await $.v(C, "DropTarget"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TCPropertyPolicy", "Get_Enabled", async function Get_Enabled(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: false};
  L0["result"] = (await $.v(C, "Enabled"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TCPropertyPolicy", "Get_Font", async function Get_Font(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: null};
  await $.stmt((await $.call(C, "GetOleFont", [(await $.v(C, "Font")), L0["result"]])));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TCPropertyPolicy", "Get_HelpFile", async function Get_HelpFile(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: ''};
  L0["result"] = (await $.call(C, "WideString", [(await $.v(C, "HelpFile"))]));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TCPropertyPolicy", "Get_KeyPreview", async function Get_KeyPreview(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: false};
  L0["result"] = (await $.v(C, "KeyPreview"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TCPropertyPolicy", "Get_PixelsPerInch", async function Get_PixelsPerInch(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: 0};
  L0["result"] = (await $.v(C, "PixelsPerInch"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TCPropertyPolicy", "Get_PrintScale", async function Get_PrintScale(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: null};
  L0["result"] = (await $.call(C, "Ord", [(await $.v(C, "PrintScale"))]));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TCPropertyPolicy", "Get_Scaled", async function Get_Scaled(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: false};
  L0["result"] = (await $.v(C, "Scaled"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TCPropertyPolicy", "Get_Visible", async function Get_Visible(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: false};
  L0["result"] = (await $.v(C, "Visible"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TCPropertyPolicy", "Get_VisibleDockClientCount", async function Get_VisibleDockClientCount(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: 0};
  L0["result"] = (await $.v(C, "VisibleDockClientCount"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TCPropertyPolicy", "_Set_Font", async function _Set_Font(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.stmt((await $.call(C, "SetOleFont", [(await $.v(C, "Font")), L0["value"]])));
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["IFontDisp"]});
  U.method("TCPropertyPolicy", "ActivateEvent", async function ActivateEvent(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.ne((await $.v(C, "FEvents")), null))) {
    await $.mcall((await $.v(C, "FEvents")), "OnActivate", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TCPropertyPolicy", "ClickEvent", async function ClickEvent(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.ne((await $.v(C, "FEvents")), null))) {
    await $.mcall((await $.v(C, "FEvents")), "OnClick", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TCPropertyPolicy", "CreateEvent", async function CreateEvent(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.ne((await $.v(C, "FEvents")), null))) {
    await $.mcall((await $.v(C, "FEvents")), "OnCreate", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TCPropertyPolicy", "DblClickEvent", async function DblClickEvent(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.ne((await $.v(C, "FEvents")), null))) {
    await $.mcall((await $.v(C, "FEvents")), "OnDblClick", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TCPropertyPolicy", "DeactivateEvent", async function DeactivateEvent(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.ne((await $.v(C, "FEvents")), null))) {
    await $.mcall((await $.v(C, "FEvents")), "OnDeactivate", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TCPropertyPolicy", "DestroyEvent", async function DestroyEvent(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.ne((await $.v(C, "FEvents")), null))) {
    await $.mcall((await $.v(C, "FEvents")), "OnDestroy", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TCPropertyPolicy", "KeyPressEvent", async function KeyPressEvent(Self, p0, p1) {
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
  U.method("TCPropertyPolicy", "PaintEvent", async function PaintEvent(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.ne((await $.v(C, "FEvents")), null))) {
    await $.mcall((await $.v(C, "FEvents")), "OnPaint", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TCPropertyPolicy", "Set_AutoScroll", async function Set_AutoScroll(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "AutoScroll", L0["value"]);
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["WordBool"]});
  U.method("TCPropertyPolicy", "Set_AutoSize", async function Set_AutoSize(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "AutoSize", L0["value"]);
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["WordBool"]});
  U.method("TCPropertyPolicy", "Set_AxBorderStyle", async function Set_AxBorderStyle(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "AxBorderStyle", (await $.call(C, "TActiveFormBorderStyle", [L0["value"]])));
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["TxActiveFormBorderStyle"]});
  U.method("TCPropertyPolicy", "Set_Caption", async function Set_Caption(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "Caption", (await $.call(C, "TCaption", [L0["value"]])));
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["WideString"]});
  U.method("TCPropertyPolicy", "Set_Color", async function Set_Color(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "Color", (await $.call(C, "TColor", [L0["value"]])));
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["OLE_COLOR"]});
  U.method("TCPropertyPolicy", "Set_Cursor", async function Set_Cursor(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "Cursor", (await $.call(C, "TCursor", [L0["value"]])));
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["Smallint"]});
  U.method("TCPropertyPolicy", "Set_DoubleBuffered", async function Set_DoubleBuffered(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "DoubleBuffered", L0["value"]);
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["WordBool"]});
  U.method("TCPropertyPolicy", "Set_DropTarget", async function Set_DropTarget(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "DropTarget", L0["value"]);
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["WordBool"]});
  U.method("TCPropertyPolicy", "Set_Enabled", async function Set_Enabled(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "Enabled", L0["value"]);
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["WordBool"]});
  U.method("TCPropertyPolicy", "Set_Font", async function Set_Font(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.asRef(p0), result: undefined};
  await $.stmt((await $.call(C, "SetOleFont", [(await $.v(C, "Font")), (await L0["value"].get())])));
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["IFontDisp"]});
  U.method("TCPropertyPolicy", "Set_HelpFile", async function Set_HelpFile(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "HelpFile", (await $.call(C, "String", [L0["value"]])));
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["WideString"]});
  U.method("TCPropertyPolicy", "Set_KeyPreview", async function Set_KeyPreview(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "KeyPreview", L0["value"]);
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["WordBool"]});
  U.method("TCPropertyPolicy", "Set_PixelsPerInch", async function Set_PixelsPerInch(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "PixelsPerInch", L0["value"]);
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["Integer"]});
  U.method("TCPropertyPolicy", "Set_PrintScale", async function Set_PrintScale(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "PrintScale", (await $.call(C, "TPrintScale", [L0["value"]])));
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["TxPrintScale"]});
  U.method("TCPropertyPolicy", "Set_Scaled", async function Set_Scaled(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "Scaled", L0["value"]);
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["WordBool"]});
  U.method("TCPropertyPolicy", "Set_Visible", async function Set_Visible(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "Visible", L0["value"]);
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["WordBool"]});
  U.method("TCPropertyPolicy", "Get_Owner", async function Get_Owner(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: 0};
  L0["result"] = (await $.v(C, "handle"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TCPropertyPolicy", "Set_Owner", async function Set_Owner(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"val": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["val"]);
  if ($.truthy($.gt(L0["val"], 0))) {
    await $.set(C, "FOwnerHandle", L0["val"]);
  }
  return L0.result;
}, {"params": ["val"], "kind": "procedure", "ptypes": ["Integer"]});
  U.method("TCPropertyPolicy", "Get_Params", async function Get_Params(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"name": $.copyArg(p0), result: null};
  await $.fixArgs(L0, ["name"]);
  L0["result"] = (await $.idx((await $.mv((await $.v(C, "FParams")), "Values")), [L0["name"]]));
  return L0.result;
}, {"params": ["Name"], "kind": "function", "ptypes": ["WideString"]});
  U.method("TCPropertyPolicy", "Set_Params", async function Set_Params(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"name": $.copyArg(p0), "value": $.copyArg(p1), result: undefined};
  await $.fixArgs(L0, ["name", "value"]);
  { const $t1 = await $.iset((await $.mv((await $.v(C, "FParams")), "Values")), [L0["name"]], L0["value"]); if ($t1 !== undefined) { await $.mset((await $.v(C, "FParams")), "Values", $t1); } }
  return L0.result;
}, {"params": ["Name", "Value"], "kind": "procedure", "ptypes": ["WideString", "OleVariant"]});
  U.method("TCPropertyPolicy", "InstanceInitialize", async function InstanceInitialize(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: null};
  L0["result"] = (await $.v(C, "S_OK"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TCPropertyPolicy", "Cleanup", async function Cleanup(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: null};
  L0["result"] = (await $.v(C, "S_OK"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TCPropertyPolicy", "UIObjectActivate", async function UIObjectActivate(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: null};
  await $.set(C, "cid", (await $.call(C, "StrToInt", [(await $.call(C, "Get_Params", ["CID"]))])));
  {
    const $t2 = (await $.v(C, "PolicyDataModule"));
    await $.mcall((await $.wv([$t2], "ODSCProperty", C, false)), "Close", []);
    await $.stmt((await $.mcall((await $.wv([$t2], "ODSCProperty", C, false)), "SetVariable", ["cid", (await $.wv([$t2], "cid", C, false))])));
    await $.mcall((await $.wv([$t2], "ODSCProperty", C, false)), "Open", []);
    await $.mcall((await $.wv([$t2], "ODSContracts", C, false)), "Close", []);
    await $.stmt((await $.mcall((await $.wv([$t2], "ODSContracts", C, false)), "SetVariable", ["cid", (await $.wv([$t2], "cid", C, false))])));
    await $.mcall((await $.wv([$t2], "ODSContracts", C, false)), "Open", []);
    await $.mcall((await $.wv([$t2], "ODSCustomers", C, false)), "Close", []);
    await $.stmt((await $.mcall((await $.wv([$t2], "ODSCustomers", C, false)), "SetVariable", ["id", (await $.mv((await $.wv([$t2], "ODSContractskli_id", C, false)), "Value"))])));
    await $.mcall((await $.wv([$t2], "ODSCustomers", C, false)), "Open", []);
    await $.wset([$t2], "tid", (await $.mv((await $.wv([$t2], "ODSCPropertyTypeID", C, false)), "Value")), C);
    if ($.truthy((await $.mv((await $.wv([$t2], "ODSContractsPolicy_Num", C, false)), "IsNull")))) {
      await $.mcall((await $.wv([$t2], "ODSContracts", C, false)), "Close", []);
      await $.stmt((await $.mcall((await $.wv([$t2], "ODSContracts", C, false)), "SetVariable", ["cid", (await $.wv([$t2], "cid", C, false))])));
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
  U.method("TCPropertyPolicy", "QueryDeactivate", async function QueryDeactivate(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: null};
  L0["result"] = (await $.v(C, "S_OK"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TCPropertyPolicy", "UIObjectDeactivate", async function UIObjectDeactivate(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: null};
  L0["result"] = (await $.v(C, "S_OK"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TCPropertyPolicy", "SaveState", async function SaveState(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: null};
  L0["result"] = (await $.v(C, "S_OK"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TCPropertyPolicy", "Get_Height", async function Get_Height(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: 0};
  L0["result"] = (await $.v(C, "Height"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TCPropertyPolicy", "Get_Width", async function Get_Width(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: 0};
  L0["result"] = (await $.v(C, "Width"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TCPropertyPolicy", "ActiveFormCreate", async function ActiveFormCreate(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.set(C, "CPropertyPolicy", Self);
  await $.set(C, "FParams", (await $.mv((await $.v(C, "TStringList")), "Create")));
  await $.set(C, "PolicyDataModule", (await $.mcall((await $.v(C, "TPolicyDataModule")), "Create", [Self])));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TCPropertyPolicy", "BitBtn2Click", async function BitBtn2Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.stmt((await $.call(C, "PostMessage", [(await $.v(C, "FOwnerHandle")), (await $.v(C, "WM_ModalResult")), (await $.v(C, "mrCancel")), 0])));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TCPropertyPolicy", "BitBtn1Click", async function BitBtn1Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t3 = (await $.v(C, "PolicyDataModule"));
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
  U.method("TCPropertyPolicy", "btApplyClick", async function btApplyClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t5 = (await $.v(C, "PolicyDataModule"));
    const $t6 = (await $.wv([$t5], "OPCommon", C, false));
    try {
      await $.stmt((await $.wcall([$t5, $t6], "CallBooleanFunction", ["buildpolice", [(await $.wv([$t5, $t6], "CID", C, false)), 5, (await $.mv((await $.wv([$t5, $t6], "cbPolNum", C, false)), "Checked")), (await $.mv((await $.wv([$t5, $t6], "cbAccounts", C, false)), "Checked")), (await $.mv((await $.wv([$t5, $t6], "cbTransactions", C, false)), "Checked"))]], C)));
    } catch ($t7) {
      $.rethrowControl($t7);
      if ($.excIs($t7, "EOracleError")) {
        L0["e"] = $.exc($t7);
        await $.stmt((await $.wcall([$t5, $t6], "ShowMessage", [(await $.mv((await $.wv([$t5, $t6], "E", { get: async () => L0["e"], set: async (v) => { L0["e"] = v; }, local: true }, false)), "Message"))], C)));
        $.abort();
      }
      else { throw $t7; }
    }
  }
  await $.mset((await $.v(C, "btApply")), "Enabled", false);
  await $.mset((await $.v(C, "btPrint")), "Enabled", true);
  await $.set(C, "ModalResult", (await $.v(C, "mrOk")));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TCPropertyPolicy", "ENumChange", async function ENumChange(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mset((await $.v(C, "btApply")), "Enabled", true);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TCPropertyPolicy", "ENumKeyPress", async function ENumKeyPress(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "key": $.asRef(p1), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.eq((await L0["key"].get()), "\r"))) {
    if ($.truthy($.ne((await $.call(C, "HiWord", [(await $.call(C, "GetKeyState", [(await $.v(C, "VK_Shift"))]))])), 0))) {
      {
        const $t8 = L0["sender"];
        await $.stmt((await $.wcall([$t8], "SelectNext", [(await $.wv([$t8], "ActiveControl", C, false)), (await $.wv([$t8], "False", C, false)), (await $.wv([$t8], "True", C, false))], C)));
      }
    } else {
      {
        const $t9 = L0["sender"];
        await $.stmt((await $.wcall([$t9], "SelectNext", [(await $.wv([$t9], "ActiveControl", C, false)), (await $.wv([$t9], "True", C, false)), (await $.wv([$t9], "True", C, false))], C)));
      }
    }
    await L0["key"].set("\u0000");
  }
  return L0.result;
}, {"params": ["Sender", "Key"], "kind": "procedure", "ptypes": ["TObject", "Char"]});
  U.method("TCPropertyPolicy", "AddTransh", async function AddTransh(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: undefined};
  {
    const $t10 = (await $.v(C, "PolicyDataModule"));
    await $.mcall((await $.wv([$t10], "ODSContracts", C, false)), "Close", []);
    await $.stmt((await $.mcall((await $.wv([$t10], "ODSContracts", C, false)), "SetVariable", ["blankid", (await $.mv((await $.wv([$t10], "ODSCPropertyID", C, false)), "Value"))])));
    await $.mcall((await $.wv([$t10], "ODSContracts", C, false)), "Open", []);
    if ($.truthy($.gt((await $.mcall((await $.wv([$t10], "OPCOMMON", C, false)), "CallIntegerFunction", ["addtransaction", [(await $.mv((await $.mcall((await $.wv([$t10], "ODSContracts", C, false)), "FieldByName", ["LOANACC_ID"])), "asFloat")), (await $.mv((await $.mcall((await $.wv([$t10], "ODSContracts", C, false)), "FieldByName", ["CURRACC_ID"])), "asFloat")), (await $.mv((await $.mcall((await $.wv([$t10], "ODSContracts", C, false)), "FieldByName", ["AMMOUNT"])), "asFloat"))]])), 0))) {
      await $.stmt((await $.wcall([$t10], "MessageDlg", ["Əməliyyat keçirildi.", (await $.wv([$t10], "mtInformation", C, false)), [(await $.wv([$t10], "mbOK", C, false))], 0], C)));
    }
    await $.stmt($.wcall([$t10], "Close", [], C));
  }
  return L0.result;
}, {"params": [], "kind": "procedure", "ptypes": []});
  U.method("TCPropertyPolicy", "btPrintClick", async function btPrintClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "franshiz": 0, "docfile": null, "i": 0, "n": 0, "wordapp": null, "wrddatadoc": null, "wrdapp": null, "wrdselection": null, "filename": '', "str": ''};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t11 = (await $.v(C, "PolicyDataModule"));
    await $.mcall((await $.wv([$t11], "ODSReport", C, false)), "Close", []);
    await $.stmt((await $.mcall((await $.wv([$t11], "ODSReport", C, false)), "SetVariable", ["CID", (await $.wv([$t11], "CID", C, false))])));
    await $.mcall((await $.wv([$t11], "ODSReport", C, false)), "Open", []);
    await $.mcall((await $.wv([$t11], "ODSCondition", C, false)), "Close", []);
    await $.stmt((await $.mcall((await $.wv([$t11], "ODSCondition", C, false)), "SetVariable", ["vid", (await $.mv((await $.wv([$t11], "ODSCPropertySuggestCNDT_ID", C, false)), "Value"))])));
    await $.mcall((await $.wv([$t11], "ODSCondition", C, false)), "Open", []);
    await $.stmt((await $.mcall((await $.wv([$t11], "ODSBeneficiary", C, false)), "Locate", ["id", (await $.mv((await $.wv([$t11], "ODSCPropertyPROFITID", C, false)), "Value")), []])));
    await $.stmt((await $.mcall((await $.wv([$t11], "ODSAgent", C, false)), "Locate", ["id", (await $.mv((await $.wv([$t11], "ODSCPropertyAgentid", C, false)), "Value")), []])));
    try {
      await $.wset([$t11], "FileName", $.add((await $.wcall([$t11], "ExtractFilePath", [(await $.mv((await $.wv([$t11], "Application", C, false)), "ExeName"))], C)), "\\cpropertypolicy.doc"), { get: async () => L0["filename"], set: async (v) => { L0["filename"] = v; }, local: true });
      await $.wset([$t11], "wrdApp", (await $.wcall([$t11], "CreateOleObject", ["Word.Application"], C)), { get: async () => L0["wrdapp"], set: async (v) => { L0["wrdapp"] = v; }, local: true });
      await $.mset((await $.wv([$t11], "wrdApp", { get: async () => L0["wrdapp"], set: async (v) => { L0["wrdapp"] = v; }, local: true }, false)), "Visible", (await $.wv([$t11], "True", C, false)));
      await $.wset([$t11], "wrdDataDoc", (await $.mcall((await $.mv((await $.wv([$t11], "wrdApp", { get: async () => L0["wrdapp"], set: async (v) => { L0["wrdapp"] = v; }, local: true }, false)), "Documents")), "Open", [(await $.wv([$t11], "FileName", { get: async () => L0["filename"], set: async (v) => { L0["filename"] = v; }, local: true }, false))])), { get: async () => L0["wrddatadoc"], set: async (v) => { L0["wrddatadoc"] = v; }, local: true });
      await $.wset([$t11], "wrdSelection", (await $.mv((await $.wv([$t11], "wrdApp", { get: async () => L0["wrdapp"], set: async (v) => { L0["wrdapp"] = v; }, local: true }, false)), "Selection")), { get: async () => L0["wrdselection"], set: async (v) => { L0["wrdselection"] = v; }, local: true });
      await $.stmt((await $.mcall((await $.wv([$t11], "wrdSelection", { get: async () => L0["wrdselection"], set: async (v) => { L0["wrdselection"] = v; }, local: true }, false)), "GoTo", [(-(1)), (await $.wv([$t11], "unAssigned", C, false)), (await $.wv([$t11], "unAssigned", C, false)), "Policynum"])));
      await $.stmt((await $.mcall((await $.wv([$t11], "wrdSelection", { get: async () => L0["wrdselection"], set: async (v) => { L0["wrdselection"] = v; }, local: true }, false)), "TypeText", [(await $.wcall([$t11], "UTFEncoder", [(await $.mv((await $.wv([$t11], "ODSReportPolicynum", C, false)), "AsString"))], C))])));
      await $.stmt((await $.mcall((await $.wv([$t11], "wrdSelection", { get: async () => L0["wrdselection"], set: async (v) => { L0["wrdselection"] = v; }, local: true }, false)), "GoTo", [(-(1)), (await $.wv([$t11], "unAssigned", C, false)), (await $.wv([$t11], "unAssigned", C, false)), "Policynum1"])));
      await $.stmt((await $.mcall((await $.wv([$t11], "wrdSelection", { get: async () => L0["wrdselection"], set: async (v) => { L0["wrdselection"] = v; }, local: true }, false)), "TypeText", [(await $.wcall([$t11], "UTFEncoder", [(await $.mv((await $.wv([$t11], "ODSReportPolicynum", C, false)), "AsString"))], C))])));
      await $.stmt((await $.mcall((await $.wv([$t11], "wrdSelection", { get: async () => L0["wrdselection"], set: async (v) => { L0["wrdselection"] = v; }, local: true }, false)), "GoTo", [(-(1)), (await $.wv([$t11], "unAssigned", C, false)), (await $.wv([$t11], "unAssigned", C, false)), "Agent"])));
      await $.stmt((await $.mcall((await $.wv([$t11], "wrdSelection", { get: async () => L0["wrdselection"], set: async (v) => { L0["wrdselection"] = v; }, local: true }, false)), "TypeText", [(await $.wcall([$t11], "UTFEncoder", [(await $.mv((await $.wv([$t11], "ODSReportAgent", C, false)), "AsString"))], C))])));
      await $.stmt((await $.mcall((await $.wv([$t11], "wrdSelection", { get: async () => L0["wrdselection"], set: async (v) => { L0["wrdselection"] = v; }, local: true }, false)), "GoTo", [(-(1)), (await $.wv([$t11], "unAssigned", C, false)), (await $.wv([$t11], "unAssigned", C, false)), "Insured"])));
      await $.stmt((await $.mcall((await $.wv([$t11], "wrdSelection", { get: async () => L0["wrdselection"], set: async (v) => { L0["wrdselection"] = v; }, local: true }, false)), "TypeText", [(await $.wcall([$t11], "UTFEncoder", [(await $.mv((await $.wv([$t11], "ODSReportName", C, false)), "AsString"))], C))])));
      await $.stmt((await $.mcall((await $.wv([$t11], "wrdSelection", { get: async () => L0["wrdselection"], set: async (v) => { L0["wrdselection"] = v; }, local: true }, false)), "GoTo", [(-(1)), (await $.wv([$t11], "unAssigned", C, false)), (await $.wv([$t11], "unAssigned", C, false)), "insobj"])));
      await $.stmt((await $.mcall((await $.wv([$t11], "wrdSelection", { get: async () => L0["wrdselection"], set: async (v) => { L0["wrdselection"] = v; }, local: true }, false)), "TypeText", [(await $.wcall([$t11], "UTFEncoder", [(await $.mv((await $.wv([$t11], "ODSReportInsured_obj", C, false)), "AsString"))], C))])));
      await $.stmt((await $.mcall((await $.wv([$t11], "wrdSelection", { get: async () => L0["wrdselection"], set: async (v) => { L0["wrdselection"] = v; }, local: true }, false)), "GoTo", [(-(1)), (await $.wv([$t11], "unAssigned", C, false)), (await $.wv([$t11], "unAssigned", C, false)), "insobjaddress"])));
      await $.stmt((await $.mcall((await $.wv([$t11], "wrdSelection", { get: async () => L0["wrdselection"], set: async (v) => { L0["wrdselection"] = v; }, local: true }, false)), "TypeText", [(await $.wcall([$t11], "UTFEncoder", [(await $.mv((await $.wv([$t11], "ODSReportLocationObj", C, false)), "AsString"))], C))])));
      await $.stmt((await $.mcall((await $.wv([$t11], "wrdSelection", { get: async () => L0["wrdselection"], set: async (v) => { L0["wrdselection"] = v; }, local: true }, false)), "GoTo", [(-(1)), (await $.wv([$t11], "unAssigned", C, false)), (await $.wv([$t11], "unAssigned", C, false)), "Beneficiary"])));
      await $.stmt((await $.mcall((await $.wv([$t11], "wrdSelection", { get: async () => L0["wrdselection"], set: async (v) => { L0["wrdselection"] = v; }, local: true }, false)), "TypeText", [(await $.wcall([$t11], "UTFEncoder", [(await $.mv((await $.wv([$t11], "ODSReportBeneficiary", C, false)), "AsString"))], C))])));
      await $.stmt((await $.mcall((await $.wv([$t11], "wrdSelection", { get: async () => L0["wrdselection"], set: async (v) => { L0["wrdselection"] = v; }, local: true }, false)), "GoTo", [(-(1)), (await $.wv([$t11], "unAssigned", C, false)), (await $.wv([$t11], "unAssigned", C, false)), "begindate"])));
      await $.stmt((await $.mcall((await $.wv([$t11], "wrdSelection", { get: async () => L0["wrdselection"], set: async (v) => { L0["wrdselection"] = v; }, local: true }, false)), "TypeText", [(await $.wcall([$t11], "UTFEncoder", [(await $.mv((await $.wv([$t11], "ODSReportBegindate", C, false)), "AsString"))], C))])));
      await $.stmt((await $.mcall((await $.wv([$t11], "wrdSelection", { get: async () => L0["wrdselection"], set: async (v) => { L0["wrdselection"] = v; }, local: true }, false)), "GoTo", [(-(1)), (await $.wv([$t11], "unAssigned", C, false)), (await $.wv([$t11], "unAssigned", C, false)), "enddate"])));
      await $.stmt((await $.mcall((await $.wv([$t11], "wrdSelection", { get: async () => L0["wrdselection"], set: async (v) => { L0["wrdselection"] = v; }, local: true }, false)), "TypeText", [(await $.wcall([$t11], "UTFEncoder", [(await $.mv((await $.wv([$t11], "ODSReportEnddate", C, false)), "AsString"))], C))])));
      await $.stmt((await $.mcall((await $.wv([$t11], "wrdSelection", { get: async () => L0["wrdselection"], set: async (v) => { L0["wrdselection"] = v; }, local: true }, false)), "GoTo", [(-(1)), (await $.wv([$t11], "unAssigned", C, false)), (await $.wv([$t11], "unAssigned", C, false)), "subjectvalue"])));
      await $.stmt((await $.mcall((await $.wv([$t11], "wrdSelection", { get: async () => L0["wrdselection"], set: async (v) => { L0["wrdselection"] = v; }, local: true }, false)), "TypeText", [(await $.wcall([$t11], "UTFEncoder", [$.add($.add((await $.mv((await $.wv([$t11], "ODSReportCost", C, false)), "AsString")), " "), (await $.mv((await $.wv([$t11], "ODSReportValute", C, false)), "AsString")))], C))])));
      await $.stmt((await $.mcall((await $.wv([$t11], "wrdSelection", { get: async () => L0["wrdselection"], set: async (v) => { L0["wrdselection"] = v; }, local: true }, false)), "GoTo", [(-(1)), (await $.wv([$t11], "unAssigned", C, false)), (await $.wv([$t11], "unAssigned", C, false)), "Inssum"])));
      await $.stmt((await $.mcall((await $.wv([$t11], "wrdSelection", { get: async () => L0["wrdselection"], set: async (v) => { L0["wrdselection"] = v; }, local: true }, false)), "TypeText", [(await $.wcall([$t11], "UTFEncoder", [$.add($.add((await $.mv((await $.wv([$t11], "ODSReportInssumm", C, false)), "AsString")), " "), (await $.mv((await $.wv([$t11], "ODSReportValute", C, false)), "AsString")))], C))])));
      await $.stmt((await $.mcall((await $.wv([$t11], "wrdSelection", { get: async () => L0["wrdselection"], set: async (v) => { L0["wrdselection"] = v; }, local: true }, false)), "GoTo", [(-(1)), (await $.wv([$t11], "unAssigned", C, false)), (await $.wv([$t11], "unAssigned", C, false)), "Inspremium"])));
      await $.stmt((await $.mcall((await $.wv([$t11], "wrdSelection", { get: async () => L0["wrdselection"], set: async (v) => { L0["wrdselection"] = v; }, local: true }, false)), "TypeText", [(await $.wcall([$t11], "UTFEncoder", [$.add($.add((await $.mv((await $.wv([$t11], "ODSReportAmmount", C, false)), "AsString")), " "), (await $.mv((await $.wv([$t11], "ODSReportValute", C, false)), "AsString")))], C))])));
      if ($.truthy($.le($.fdiv(((await $.mv((await $.wv([$t11], "ODSReportInssumm", C, false)), "Value"))), 100), 250))) {
        await $.wset([$t11], "franshiz", 250, { get: async () => L0["franshiz"], set: async (v) => { L0["franshiz"] = v; }, local: true });
        await $.stmt((await $.mcall((await $.wv([$t11], "wrdSelection", { get: async () => L0["wrdselection"], set: async (v) => { L0["wrdselection"] = v; }, local: true }, false)), "GoTo", [(-(1)), (await $.wv([$t11], "unAssigned", C, false)), (await $.wv([$t11], "unAssigned", C, false)), "franshiz1"])));
        await $.stmt((await $.mcall((await $.wv([$t11], "wrdSelection", { get: async () => L0["wrdselection"], set: async (v) => { L0["wrdselection"] = v; }, local: true }, false)), "TypeText", [(await $.wcall([$t11], "UTFEncoder", [$.add($.add((await $.wcall([$t11], "FloatToStr", [(await $.wv([$t11], "Franshiz", { get: async () => L0["franshiz"], set: async (v) => { L0["franshiz"] = v; }, local: true }, false))], C)), " "), (await $.mv((await $.wv([$t11], "ODSReportValute", C, false)), "AsString")))], C))])));
        await $.stmt((await $.mcall((await $.wv([$t11], "wrdSelection", { get: async () => L0["wrdselection"], set: async (v) => { L0["wrdselection"] = v; }, local: true }, false)), "GoTo", [(-(1)), (await $.wv([$t11], "unAssigned", C, false)), (await $.wv([$t11], "unAssigned", C, false)), "franshiz2"])));
        await $.stmt((await $.mcall((await $.wv([$t11], "wrdSelection", { get: async () => L0["wrdselection"], set: async (v) => { L0["wrdselection"] = v; }, local: true }, false)), "TypeText", [(await $.wcall([$t11], "UTFEncoder", [$.add($.add((await $.wcall([$t11], "FloatToStr", [$.mul((await $.wv([$t11], "Franshiz", { get: async () => L0["franshiz"], set: async (v) => { L0["franshiz"] = v; }, local: true }, false)), 2)], C)), " "), (await $.mv((await $.wv([$t11], "ODSReportValute", C, false)), "AsString")))], C))])));
      } else {
        await $.stmt((await $.mcall((await $.wv([$t11], "wrdSelection", { get: async () => L0["wrdselection"], set: async (v) => { L0["wrdselection"] = v; }, local: true }, false)), "GoTo", [(-(1)), (await $.wv([$t11], "unAssigned", C, false)), (await $.wv([$t11], "unAssigned", C, false)), "franshiz1"])));
        await $.stmt((await $.mcall((await $.wv([$t11], "wrdSelection", { get: async () => L0["wrdselection"], set: async (v) => { L0["wrdselection"] = v; }, local: true }, false)), "TypeText", [(await $.wcall([$t11], "UTFEncoder", ["sığorta məbləğinin 1%-i həcmində"], C))])));
        await $.stmt((await $.mcall((await $.wv([$t11], "wrdSelection", { get: async () => L0["wrdselection"], set: async (v) => { L0["wrdselection"] = v; }, local: true }, false)), "GoTo", [(-(1)), (await $.wv([$t11], "unAssigned", C, false)), (await $.wv([$t11], "unAssigned", C, false)), "franshiz2"])));
        await $.stmt((await $.mcall((await $.wv([$t11], "wrdSelection", { get: async () => L0["wrdselection"], set: async (v) => { L0["wrdselection"] = v; }, local: true }, false)), "TypeText", [(await $.wcall([$t11], "UTFEncoder", ["sığorta məbləğinin 2%-i həcmində"], C))])));
      }
      await $.stmt((await $.mcall((await $.wv([$t11], "wrdSelection", { get: async () => L0["wrdselection"], set: async (v) => { L0["wrdselection"] = v; }, local: true }, false)), "GoTo", [(-(1)), (await $.wv([$t11], "unAssigned", C, false)), (await $.wv([$t11], "unAssigned", C, false)), "Condt"])));
      await $.stmt((await $.mcall((await $.wv([$t11], "wrdSelection", { get: async () => L0["wrdselection"], set: async (v) => { L0["wrdselection"] = v; }, local: true }, false)), "TypeText", [(await $.wcall([$t11], "UTFEncoder", [(await $.mv((await $.wv([$t11], "ODSConditionName", C, false)), "AsString"))], C))])));
      await $.stmt((await $.mcall((await $.wv([$t11], "wrdSelection", { get: async () => L0["wrdselection"], set: async (v) => { L0["wrdselection"] = v; }, local: true }, false)), "GoTo", [(-(1)), (await $.wv([$t11], "unAssigned", C, false)), (await $.wv([$t11], "unAssigned", C, false)), "Instime"])));
      await $.stmt((await $.mcall((await $.wv([$t11], "wrdSelection", { get: async () => L0["wrdselection"], set: async (v) => { L0["wrdselection"] = v; }, local: true }, false)), "TypeText", [(await $.wcall([$t11], "UTFEncoder", [(await $.mv((await $.wv([$t11], "ODSReportEnddate", C, false)), "AsString"))], C))])));
      await $.stmt((await $.mcall((await $.wv([$t11], "wrdSelection", { get: async () => L0["wrdselection"], set: async (v) => { L0["wrdselection"] = v; }, local: true }, false)), "GoTo", [(-(1)), (await $.wv([$t11], "unAssigned", C, false)), (await $.wv([$t11], "unAssigned", C, false)), "Instime1"])));
      await $.stmt((await $.mcall((await $.wv([$t11], "wrdSelection", { get: async () => L0["wrdselection"], set: async (v) => { L0["wrdselection"] = v; }, local: true }, false)), "TypeText", [(await $.wcall([$t11], "UTFEncoder", [(await $.mv((await $.wv([$t11], "ODSReportEnddate", C, false)), "AsString"))], C))])));
      await $.stmt((await $.mcall((await $.wv([$t11], "wrdSelection", { get: async () => L0["wrdselection"], set: async (v) => { L0["wrdselection"] = v; }, local: true }, false)), "GoTo", [(-(1)), (await $.wv([$t11], "unAssigned", C, false)), (await $.wv([$t11], "unAssigned", C, false)), "Instime2"])));
      await $.stmt((await $.mcall((await $.wv([$t11], "wrdSelection", { get: async () => L0["wrdselection"], set: async (v) => { L0["wrdselection"] = v; }, local: true }, false)), "TypeText", [(await $.wcall([$t11], "UTFEncoder", [(await $.mv((await $.wv([$t11], "ODSReportInsDate", C, false)), "AsString"))], C))])));
      await $.stmt((await $.mcall((await $.wv([$t11], "wrdSelection", { get: async () => L0["wrdselection"], set: async (v) => { L0["wrdselection"] = v; }, local: true }, false)), "GoTo", [(-(1)), (await $.wv([$t11], "unAssigned", C, false)), (await $.wv([$t11], "unAssigned", C, false)), "Insured1"])));
      await $.stmt((await $.mcall((await $.wv([$t11], "wrdSelection", { get: async () => L0["wrdselection"], set: async (v) => { L0["wrdselection"] = v; }, local: true }, false)), "TypeText", [(await $.wcall([$t11], "UTFEncoder", [(await $.wcall([$t11], "AnsiUpperCase", [(await $.mv((await $.wv([$t11], "ODSReportName", C, false)), "AsString"))], C))], C))])));
    } catch ($t12) {
      $.rethrowControl($t12);
      $.handled($t12);
    }
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TCPropertyPolicy", "cbPolNumClick", async function cbPolNumClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mset((await $.v(C, "btApply")), "Enabled", true);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TCPropertyPolicy", "UTFEncoder", async function UTFEncoder(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"str": $.copyArg(p0), result: '', "i": 0, "j": 0};
  await $.fixArgs(L0, ["str"]);
  { const $t13 = (await $.call(C, "length", [L0["str"]]));
    L0["i"] = 1;
    let $t14 = true;
    for (;;) {
      if (!$t14) { L0["i"] = $.succ(L0["i"], 1); }
      $t14 = false;
      if (!($.ord(L0["i"]) <= $.ord($t13))) break;
      { const $t15 = $.sub((await $.mv((await $.mv((await $.v(C, "lbNonUnicode")), "Items")), "Count")), 1);
        L0["j"] = 0;
        let $t16 = true;
        for (;;) {
          if (!$t16) { L0["j"] = $.succ(L0["j"], 1); }
          $t16 = false;
          if (!($.ord(L0["j"]) <= $.ord($t15))) break;
          if ($.truthy($.eq((await $.idx(L0["str"], [L0["i"]])), (await $.idx((await $.mv((await $.v(C, "lbNonUnicode")), "Items")), [L0["j"]]))))) {
            { const $t17 = await $.iset(L0["str"], [L0["i"]], (await $.idx((await $.idx((await $.mv((await $.v(C, "tlbUnicode")), "Items")), [L0["j"]])), [1]))); if ($t17 !== undefined) { L0["str"] = $t17; } }
          }
          await $.tick();
        }
      }
      await $.tick();
    }
  }
  L0["result"] = L0["str"];
  return L0.result;
}, {"params": ["str"], "kind": "function", "ptypes": ["WideString"]});
  return U;
}
