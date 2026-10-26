// Generated from UInsKorporativKasco.pas by pas2js — do not edit by hand; regenerate instead.
/* eslint-disable */
// @ts-nocheck

export default function define($) {
  const U = $.unit("UInsKorporativKasco", ["Windows", "Messages", "SysUtils", "Classes", "Graphics", "Controls", "Forms", "Dialogs", "ActiveX", "AxCtrls", "PInsKorporativBlank_TLB", "StdVcl", "HintBox", "StdCtrls", "Buttons", "CurrencyEdit", "DBCtrls", "Mask", "ComCtrls", "ExtCtrls", "SBPlgAx50_TLB", "Db", "ComObj", "ComServ", "DModuleInsKorporativ", "UAvto"]);
  const C = [U];
  U.defClass("TfrmInsKorporativKasco", "TActiveForm", {"panel2": {"name": "Panel2", "type": "TPanel"}, "lbdbcbcustname": {"name": "lbDBCBCustName", "type": "TLabel"}, "label4": {"name": "Label4", "type": "TLabel"}, "groupbox5": {"name": "GroupBox5", "type": "TGroupBox"}, "lbbegindate": {"name": "lbBeginDate", "type": "TLabel"}, "lbenddate": {"name": "lbEndDate", "type": "TLabel"}, "label3": {"name": "Label3", "type": "TLabel"}, "speedbutton1": {"name": "SpeedButton1", "type": "TSpeedButton"}, "label7": {"name": "Label7", "type": "TLabel"}, "edbegindate": {"name": "edBeginDate", "type": "TDateTimePicker"}, "edenddate": {"name": "edEndDate", "type": "TDateTimePicker"}, "dbmonths": {"name": "DBMonths", "type": "TDBLookupComboBox"}, "edins_date": {"name": "edIns_Date", "type": "TDateTimePicker"}, "dbcbcustname": {"name": "DBCBCustName", "type": "TDBLookupComboBox"}, "groupbox1": {"name": "GroupBox1", "type": "TGroupBox"}, "label15": {"name": "Label15", "type": "TLabel"}, "lbinssumm": {"name": "lbInsSumm", "type": "TLabel"}, "lbfranshiz": {"name": "lbFranshiz", "type": "TLabel"}, "lbtariff": {"name": "lbTariff", "type": "TLabel"}, "label10": {"name": "Label10", "type": "TLabel"}, "speedbutton7": {"name": "SpeedButton7", "type": "TSpeedButton"}, "dbavalute": {"name": "dbAvalute", "type": "TDBLookupComboBox"}, "edinssumm": {"name": "edInsSumm", "type": "TDBEdit"}, "edfranshiz": {"name": "edFranshiz", "type": "TDBComboBox"}, "edtariff": {"name": "edTariff", "type": "TDBEdit"}, "edammount": {"name": "edAmmount", "type": "TDBEdit"}, "dbagents": {"name": "DBAgents", "type": "TDBLookupComboBox"}, "edagents": {"name": "edAgents", "type": "TEdit"}, "panel1": {"name": "Panel1", "type": "TPanel"}, "btok": {"name": "btOk", "type": "TBitBtn"}, "bitbtn2": {"name": "BitBtn2", "type": "TBitBtn"}, "btsuggestion": {"name": "btSuggestion", "type": "TBitBtn"}, "btapply": {"name": "btApply", "type": "TBitBtn"}, "label2": {"name": "Label2", "type": "TLabel"}, "btnavto": {"name": "btnAvto", "type": "TBitBtn"}, "hberrmsg": {"name": "hbErrMsg", "type": "THintBox"}, "suggest": {"name": "Suggest", "type": "TBitBtn"}, "fparams": {"name": "FParams", "type": "TStrings"}, "fownerhandle": {"name": "FOwnerHandle", "type": "Integer"}, "issaved": {"name": "IsSaved", "type": "Boolean"}, "fevents": {"name": "FEvents", "type": "IInsKorporativKascoEvents"}, "cid": {"name": "CID", "type": "Integer"}}, {"params": {"name": "Params", "read": "Get_Params", "write": "Set_Params"}});
  U.init(async () => {
    try { U.const("tconversionexcept", await $.ref_(C, "Exception")); } catch (e) { /* unresolved alias */ }
    try { U.const("tcalcexception", await $.ref_(C, "Exception")); } catch (e) { /* unresolved alias */ }
    try { U.const("toutputyear", await $.ref_(C, "Exception")); } catch (e) { /* unresolved alias */ }
    U.const("WM_ModalResult", $.add((await $.v(C, "WM_USER")), 139));
    U.const("fmCaption", "Kasko sigortasi anket formasi: (%s)");
    U.const("pBlankDone", 1);
    U.var_("frmInsKorporativKasco", null, "TfrmInsKorporativKasco");
  });
  U.method("TfrmInsKorporativKasco", "DefinePropertyPages", async function DefinePropertyPages(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"definepropertypage": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["definepropertypage"]);
  return L0.result;
}, {"params": ["DefinePropertyPage"], "kind": "procedure", "ptypes": ["TDefinePropertyPage"]});
  U.method("TfrmInsKorporativKasco", "EventSinkChanged", async function EventSinkChanged(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"eventsink": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["eventsink"]);
  await $.set(C, "FEvents", L0["eventsink"]);
  return L0.result;
}, {"params": ["EventSink"], "kind": "procedure", "ptypes": ["IUnknown"]});
  U.method("TfrmInsKorporativKasco", "Initialize", async function Initialize(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: undefined};
  await $.inherited(Self, "TfrmInsKorporativKasco", "Initialize", null, arguments);
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
  U.method("TfrmInsKorporativKasco", "Get_Active", async function Get_Active(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: false};
  L0["result"] = (await $.v(C, "Active"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TfrmInsKorporativKasco", "Get_AutoScroll", async function Get_AutoScroll(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: false};
  L0["result"] = (await $.v(C, "AutoScroll"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TfrmInsKorporativKasco", "Get_AutoSize", async function Get_AutoSize(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: false};
  L0["result"] = (await $.v(C, "AutoSize"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TfrmInsKorporativKasco", "Get_AxBorderStyle", async function Get_AxBorderStyle(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: null};
  L0["result"] = (await $.call(C, "Ord", [(await $.v(C, "AxBorderStyle"))]));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TfrmInsKorporativKasco", "Get_Caption", async function Get_Caption(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: ''};
  L0["result"] = (await $.call(C, "WideString", [(await $.v(C, "Caption"))]));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TfrmInsKorporativKasco", "Get_Color", async function Get_Color(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: null};
  L0["result"] = (await $.call(C, "OLE_COLOR", [(await $.v(C, "Color"))]));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TfrmInsKorporativKasco", "Get_Cursor", async function Get_Cursor(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: 0};
  L0["result"] = (await $.call(C, "Smallint", [(await $.v(C, "Cursor"))]));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TfrmInsKorporativKasco", "Get_DoubleBuffered", async function Get_DoubleBuffered(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: false};
  L0["result"] = (await $.v(C, "DoubleBuffered"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TfrmInsKorporativKasco", "Get_DropTarget", async function Get_DropTarget(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: false};
  L0["result"] = (await $.v(C, "DropTarget"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TfrmInsKorporativKasco", "Get_Enabled", async function Get_Enabled(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: false};
  L0["result"] = (await $.v(C, "Enabled"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TfrmInsKorporativKasco", "Get_Font", async function Get_Font(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: null};
  await $.stmt((await $.call(C, "GetOleFont", [(await $.v(C, "Font")), L0["result"]])));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TfrmInsKorporativKasco", "Get_HelpFile", async function Get_HelpFile(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: ''};
  L0["result"] = (await $.call(C, "WideString", [(await $.v(C, "HelpFile"))]));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TfrmInsKorporativKasco", "Get_KeyPreview", async function Get_KeyPreview(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: false};
  L0["result"] = (await $.v(C, "KeyPreview"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TfrmInsKorporativKasco", "Get_PixelsPerInch", async function Get_PixelsPerInch(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: 0};
  L0["result"] = (await $.v(C, "PixelsPerInch"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TfrmInsKorporativKasco", "Get_PrintScale", async function Get_PrintScale(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: null};
  L0["result"] = (await $.call(C, "Ord", [(await $.v(C, "PrintScale"))]));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TfrmInsKorporativKasco", "Get_Scaled", async function Get_Scaled(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: false};
  L0["result"] = (await $.v(C, "Scaled"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TfrmInsKorporativKasco", "Get_Visible", async function Get_Visible(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: false};
  L0["result"] = (await $.v(C, "Visible"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TfrmInsKorporativKasco", "Get_VisibleDockClientCount", async function Get_VisibleDockClientCount(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: 0};
  L0["result"] = (await $.v(C, "VisibleDockClientCount"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TfrmInsKorporativKasco", "_Set_Font", async function _Set_Font(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.stmt((await $.call(C, "SetOleFont", [(await $.v(C, "Font")), L0["value"]])));
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["IFontDisp"]});
  U.method("TfrmInsKorporativKasco", "ActivateEvent", async function ActivateEvent(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.ne((await $.v(C, "FEvents")), null))) {
    await $.mcall((await $.v(C, "FEvents")), "OnActivate", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TfrmInsKorporativKasco", "ClickEvent", async function ClickEvent(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.ne((await $.v(C, "FEvents")), null))) {
    await $.mcall((await $.v(C, "FEvents")), "OnClick", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TfrmInsKorporativKasco", "CreateEvent", async function CreateEvent(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.ne((await $.v(C, "FEvents")), null))) {
    await $.mcall((await $.v(C, "FEvents")), "OnCreate", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TfrmInsKorporativKasco", "DblClickEvent", async function DblClickEvent(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.ne((await $.v(C, "FEvents")), null))) {
    await $.mcall((await $.v(C, "FEvents")), "OnDblClick", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TfrmInsKorporativKasco", "DeactivateEvent", async function DeactivateEvent(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.ne((await $.v(C, "FEvents")), null))) {
    await $.mcall((await $.v(C, "FEvents")), "OnDeactivate", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TfrmInsKorporativKasco", "DestroyEvent", async function DestroyEvent(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.ne((await $.v(C, "FEvents")), null))) {
    await $.mcall((await $.v(C, "FEvents")), "OnDestroy", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TfrmInsKorporativKasco", "KeyPressEvent", async function KeyPressEvent(Self, p0, p1) {
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
  U.method("TfrmInsKorporativKasco", "PaintEvent", async function PaintEvent(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.ne((await $.v(C, "FEvents")), null))) {
    await $.mcall((await $.v(C, "FEvents")), "OnPaint", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TfrmInsKorporativKasco", "Set_AutoScroll", async function Set_AutoScroll(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "AutoScroll", L0["value"]);
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["WordBool"]});
  U.method("TfrmInsKorporativKasco", "Set_AutoSize", async function Set_AutoSize(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "AutoSize", L0["value"]);
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["WordBool"]});
  U.method("TfrmInsKorporativKasco", "Set_AxBorderStyle", async function Set_AxBorderStyle(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "AxBorderStyle", (await $.call(C, "TActiveFormBorderStyle", [L0["value"]])));
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["TxActiveFormBorderStyle"]});
  U.method("TfrmInsKorporativKasco", "Set_Caption", async function Set_Caption(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "Caption", (await $.call(C, "TCaption", [L0["value"]])));
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["WideString"]});
  U.method("TfrmInsKorporativKasco", "Set_Color", async function Set_Color(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "Color", (await $.call(C, "TColor", [L0["value"]])));
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["OLE_COLOR"]});
  U.method("TfrmInsKorporativKasco", "Set_Cursor", async function Set_Cursor(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "Cursor", (await $.call(C, "TCursor", [L0["value"]])));
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["Smallint"]});
  U.method("TfrmInsKorporativKasco", "Set_DoubleBuffered", async function Set_DoubleBuffered(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "DoubleBuffered", L0["value"]);
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["WordBool"]});
  U.method("TfrmInsKorporativKasco", "Set_DropTarget", async function Set_DropTarget(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "DropTarget", L0["value"]);
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["WordBool"]});
  U.method("TfrmInsKorporativKasco", "Set_Enabled", async function Set_Enabled(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "Enabled", L0["value"]);
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["WordBool"]});
  U.method("TfrmInsKorporativKasco", "Set_Font", async function Set_Font(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.asRef(p0), result: undefined};
  await $.stmt((await $.call(C, "SetOleFont", [(await $.v(C, "Font")), (await L0["value"].get())])));
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["IFontDisp"]});
  U.method("TfrmInsKorporativKasco", "Set_HelpFile", async function Set_HelpFile(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "HelpFile", (await $.call(C, "String", [L0["value"]])));
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["WideString"]});
  U.method("TfrmInsKorporativKasco", "Set_KeyPreview", async function Set_KeyPreview(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "KeyPreview", L0["value"]);
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["WordBool"]});
  U.method("TfrmInsKorporativKasco", "Set_PixelsPerInch", async function Set_PixelsPerInch(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "PixelsPerInch", L0["value"]);
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["Integer"]});
  U.method("TfrmInsKorporativKasco", "Set_PrintScale", async function Set_PrintScale(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "PrintScale", (await $.call(C, "TPrintScale", [L0["value"]])));
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["TxPrintScale"]});
  U.method("TfrmInsKorporativKasco", "Set_Scaled", async function Set_Scaled(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "Scaled", L0["value"]);
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["WordBool"]});
  U.method("TfrmInsKorporativKasco", "Set_Visible", async function Set_Visible(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "Visible", L0["value"]);
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["WordBool"]});
  U.method("TfrmInsKorporativKasco", "Get_Owner", async function Get_Owner(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: 0};
  L0["result"] = (await $.v(C, "handle"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TfrmInsKorporativKasco", "Set_Owner", async function Set_Owner(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"val": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["val"]);
  if ($.truthy($.gt(L0["val"], 0))) {
    await $.set(C, "FOwnerHandle", L0["val"]);
  }
  return L0.result;
}, {"params": ["val"], "kind": "procedure", "ptypes": ["Integer"]});
  U.method("TfrmInsKorporativKasco", "Get_Params", async function Get_Params(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"name": $.copyArg(p0), result: null};
  await $.fixArgs(L0, ["name"]);
  L0["result"] = (await $.idx((await $.mv((await $.v(C, "FParams")), "Values")), [L0["name"]]));
  return L0.result;
}, {"params": ["Name"], "kind": "function", "ptypes": ["WideString"]});
  U.method("TfrmInsKorporativKasco", "Set_Params", async function Set_Params(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"name": $.copyArg(p0), "value": $.copyArg(p1), result: undefined};
  await $.fixArgs(L0, ["name", "value"]);
  { const $t1 = await $.iset((await $.mv((await $.v(C, "FParams")), "Values")), [L0["name"]], L0["value"]); if ($t1 !== undefined) { await $.mset((await $.v(C, "FParams")), "Values", $t1); } }
  return L0.result;
}, {"params": ["Name", "Value"], "kind": "procedure", "ptypes": ["WideString", "OleVariant"]});
  U.method("TfrmInsKorporativKasco", "InstanceInitialize", async function InstanceInitialize(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: null};
  L0["result"] = (await $.v(C, "S_OK"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TfrmInsKorporativKasco", "Cleanup", async function Cleanup(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: null};
  L0["result"] = (await $.v(C, "S_OK"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TfrmInsKorporativKasco", "UIObjectActivate", async function UIObjectActivate(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: null, "i": 0};
  await $.stmt($.call(C, "BlankInitialization", []));
  if ($.truthy($.eq((await $.call(C, "Get_Params", ["Mod"])), "Insert"))) {
    {
      const $t2 = (await $.v(C, "DModuleKorporativ"));
      await $.mcall((await $.wv([$t2], "ODSMotorkasko", C, false)), "Insert", []);
      await $.mcall((await $.wv([$t2], "ODSContracts", C, false)), "Insert", []);
    }
    await $.mset((await $.v(C, "edIns_Date")), "DateTime", (await $.v(C, "Now")));
    await $.mset((await $.v(C, "edBeginDate")), "DateTime", (await $.v(C, "Now")));
    await $.mset((await $.v(C, "edEndDate")), "DateTime", (await $.v(C, "Now")));
    await $.set(C, "Caption", (await $.call(C, "format", [(await $.v(C, "fmCaption")), ["Yeni anket"]])));
    await $.mset((await $.v(C, "DBCBCustName")), "KeyValue", (await $.call(C, "StrToInt", [(await $.call(C, "Get_Params", ["KLI_ID"]))])));
    {
      const $t3 = (await $.v(C, "DModuleKorporativ"));
      await $.mset((await $.mcall((await $.wv([$t3], "ODSContracts", C, false)), "FieldByName", ["KLI_ID"])), "AsInteger", (await $.wcall([$t3], "StrToInt", [(await $.wcall([$t3], "Get_Params", ["KLI_ID"], C))], C)));
    }
  }
  if ($.truthy($.eq((await $.call(C, "Get_Params", ["Mod"])), "Edit"))) {
    await $.set(C, "Caption", (await $.call(C, "format", [(await $.v(C, "fmCaption")), ["Redakte"]])));
    {
      const $t4 = (await $.v(C, "DModuleKorporativ"));
      const $t5 = (await $.wv([$t4], "ODSdrAccessPeople", C, false));
      await $.stmt((await $.wcall([$t4, $t5], "SetVariable", ["CID", (await $.wv([$t4, $t5], "CID", C, false))], C)));
      await $.stmt($.wcall([$t4, $t5], "Open", [], C));
    }
    {
      const $t6 = (await $.v(C, "DModuleKorporativ"));
      const $t7 = (await $.wv([$t6], "ODSContracts", C, false));
      await $.mcall((await $.wv([$t6, $t7], "ODSMotorkasko", C, false)), "Edit", []);
      await $.mcall((await $.wv([$t6, $t7], "ODSContracts", C, false)), "Edit", []);
      await $.mset((await $.wv([$t6, $t7], "edIns_Date", C, false)), "DateTime", (await $.mv((await $.wcall([$t6, $t7], "fieldByName", ["INS_DATE"], C)), "asDateTime")));
      await $.mset((await $.wv([$t6, $t7], "edBeginDate", C, false)), "DateTime", (await $.mv((await $.wcall([$t6, $t7], "fieldByName", ["BEGIN_DATE"], C)), "asDateTime")));
      await $.mset((await $.wv([$t6, $t7], "edEndDate", C, false)), "DateTime", (await $.mv((await $.wcall([$t6, $t7], "fieldByName", ["END_DATE"], C)), "asDateTime")));
    }
    await $.mset((await $.v(C, "btSuggestion")), "Enabled", true);
    {
      const $t8 = (await $.v(C, "DModuleKorporativ"));
      const $t9 = (await $.wv([$t8], "OPCOMMON", C, false));
      if ($.truthy($.eq((await $.wcall([$t8, $t9], "CallIntegerFunction", ["get_state", [(await $.wv([$t8, $t9], "CID", C, false))]], C)), 6))) {
        await $.stmt((await $.wcall([$t8, $t9], "DisableControls", [(await $.wv([$t8, $t9], "Panel2", C, false)), (await $.wv([$t8, $t9], "false", C, false))], C)));
      }
    }
    { const $t10 = $.sub((await $.v(C, "ComponentCount")), 1);
      L0["i"] = 0;
      let $t11 = true;
      for (;;) {
        if (!$t11) { L0["i"] = $.succ(L0["i"], 1); }
        $t11 = false;
        if (!($.ord(L0["i"]) <= $.ord($t10))) break;
        if ($.truthy(($.is_((await $.idx((await $.v(C, "Components")), [L0["i"]])), "TGroupBox")))) {
          await $.mset((await $.idx((await $.v(C, "Components")), [L0["i"]])), "Enabled", true);
        }
        await $.tick();
      }
    }
  }
  L0["result"] = (await $.v(C, "S_OK"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TfrmInsKorporativKasco", "QueryDeactivate", async function QueryDeactivate(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: null};
  L0["result"] = (await $.v(C, "S_OK"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TfrmInsKorporativKasco", "UIObjectDeactivate", async function UIObjectDeactivate(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: null};
  L0["result"] = (await $.v(C, "S_OK"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TfrmInsKorporativKasco", "SaveState", async function SaveState(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: null};
  L0["result"] = (await $.v(C, "S_OK"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TfrmInsKorporativKasco", "Get_Height", async function Get_Height(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: 0};
  L0["result"] = (await $.v(C, "Height"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TfrmInsKorporativKasco", "Get_Width", async function Get_Width(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: 0};
  L0["result"] = (await $.v(C, "Width"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TfrmInsKorporativKasco", "BlankInitialization", async function BlankInitialization(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: undefined};
  await $.set(C, "CID", (await $.call(C, "Get_Params", ["SID"])));
  {
    const $t12 = (await $.v(C, "DModuleKorporativ"));
    await $.stmt((await $.mcall((await $.wv([$t12], "ODSMotorKasko", C, false)), "SetVariable", ["CID", (await $.wv([$t12], "CID", C, false))])));
    await $.mcall((await $.wv([$t12], "ODSMotorKasko", C, false)), "Open", []);
    await $.stmt((await $.mcall((await $.wv([$t12], "ODSContracts", C, false)), "SetVariable", ["CID", (await $.wv([$t12], "CID", C, false))])));
    await $.mcall((await $.wv([$t12], "ODSContracts", C, false)), "Open", []);
    await $.mcall((await $.wv([$t12], "ODSModels", C, false)), "Open", []);
  }
  return L0.result;
}, {"params": [], "kind": "procedure", "ptypes": []});
  U.method("TfrmInsKorporativKasco", "DisableControls", async function DisableControls(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"controlname": $.copyArg(p0), "disable": $.copyArg(p1), result: undefined};
  await $.fixArgs(L0, ["controlname", "disable"]);
  L0["disablecontrol"] = $.fn(async function DisableControl(p0) {
  const L1 = {"cname": $.copyArg(p0), result: undefined, "i": 0};
  await $.fixArgs(L1, ["cname"]);
  {
    const $t13 = L1["cname"];
    { const $t14 = $.sub((await $.wv([$t13], "ControlCount", C, false)), 1);
      await $.wset([$t13], "i", 0, { get: async () => L1["i"], set: async (v) => { L1["i"] = v; }, local: true });
      let $t15 = true;
      for (;;) {
        if (!$t15) { await $.wset([$t13], "i", $.succ((await $.wv([$t13], "i", { get: async () => L1["i"], set: async (v) => { L1["i"] = v; }, local: true }, false)), 1), { get: async () => L1["i"], set: async (v) => { L1["i"] = v; }, local: true }); }
        $t15 = false;
        if (!($.ord((await $.wv([$t13], "i", { get: async () => L1["i"], set: async (v) => { L1["i"] = v; }, local: true }, false))) <= $.ord($t14))) break;
        if ($.truthy(($.is_((await $.idx((await $.wv([$t13], "Controls", C, false)), [(await $.wv([$t13], "i", { get: async () => L1["i"], set: async (v) => { L1["i"] = v; }, local: true }, false))])), "TCustomControl")))) {
          await $.stmt((await $.wcall([$t13], "DisableControl", [(await $.idx((await $.wv([$t13], "Controls", C, false)), [(await $.wv([$t13], "i", { get: async () => L1["i"], set: async (v) => { L1["i"] = v; }, local: true }, false))]))], { get: async () => L0["disablecontrol"], set: async (v) => { L0["disablecontrol"] = v; }, local: true })));
        }
        await $.mset((await $.idx((await $.wv([$t13], "Controls", C, false)), [(await $.wv([$t13], "i", { get: async () => L1["i"], set: async (v) => { L1["i"] = v; }, local: true }, false))])), "Enabled", (await $.wv([$t13], "disable", { get: async () => L0["disable"], set: async (v) => { L0["disable"] = v; }, local: true }, false)));
        await $.tick();
      }
    }
  }
  return L1.result;
});
  {
    const $t16 = (await $.v(C, "DModuleKorporativ"));
    if ($.truthy($.eq((await $.mcall((await $.wv([$t16], "OPCOMMON", C, false)), "CallIntegerFunction", ["disablepolicies", []])), 0))) {
      return L0.result;
    }
  }
  await $.stmt((await $.callv(L0["disablecontrol"], [L0["controlname"]])));
  await $.mset((await $.v(C, "btApply")), "Enabled", L0["disable"]);
  await $.mset((await $.v(C, "btOk")), "Enabled", L0["disable"]);
  return L0.result;
}, {"params": ["ControlName", "disable"], "kind": "procedure", "ptypes": ["TCustomControl", "boolean"]});
  U.method("TfrmInsKorporativKasco", "btnAvtoClick", async function btnAvtoClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "i": 0};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t17 = (await $.mv((await $.v(C, "DModuleKorporativ")), "ODSMotorkasko"));
    if ($.truthy($.eq((await $.wv([$t17], "CID", C, false)), (-(1))))) {
      if ($.truthy($.eq((await $.wcall([$t17], "MessageDlg", ["Melumatlar yadda saxlanilsin?", (await $.wv([$t17], "mtConfirmation", C, false)), [(await $.wv([$t17], "mbYes", C, false)), (await $.wv([$t17], "mbNo", C, false))], 0], C)), (await $.wv([$t17], "mrYes", C, false))))) {
        await $.stmt($.wcall([$t17], "SaveData", [], C));
      } else {
        return L0.result;
      }
    }
    await $.stmt($.wcall([$t17], "Close", [], C));
    await $.stmt((await $.wcall([$t17], "SetVariable", ["CID", (await $.mv((await $.mv((await $.wv([$t17], "DModuleKorporativ", C, false)), "ODSContractsID")), "value"))], C)));
    await $.stmt($.wcall([$t17], "Open", [], C));
    await $.wset([$t17], "frmAvto", (await $.mcall((await $.wv([$t17], "TfrmAvto", C, false)), "Create", [Self])), C);
    await $.mcall((await $.wv([$t17], "frmAvto", C, false)), "ShowModal", []);
    await $.stmt($.wcall([$t17], "Close", [], C));
  }
  { const $t18 = $.sub((await $.v(C, "ComponentCount")), 1);
    L0["i"] = 0;
    let $t19 = true;
    for (;;) {
      if (!$t19) { L0["i"] = $.succ(L0["i"], 1); }
      $t19 = false;
      if (!($.ord(L0["i"]) <= $.ord($t18))) break;
      if ($.truthy(($.is_((await $.idx((await $.v(C, "Components")), [L0["i"]])), "TGroupBox")))) {
        await $.mset((await $.idx((await $.v(C, "Components")), [L0["i"]])), "Enabled", true);
      }
      await $.tick();
    }
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TfrmInsKorporativKasco", "SaveData", async function SaveData(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: false, "str": ''};
  L0["result"] = false;
  try {
    {
      const $t21 = (await $.v(C, "DModuleKorporativ"));
      const $t22 = (await $.wv([$t21], "ODSContracts", C, false));
      if ($.truthy($.in_((await $.wv([$t21, $t22], "State", C, false)), [(await $.wv([$t21, $t22], "dsEdit", C, false)), (await $.wv([$t21, $t22], "dsInsert", C, false))]))) {
        await $.mset((await $.wcall([$t21, $t22], "FieldByName", ["AGENT_ID"], C)), "AsFloat", (await $.mv((await $.wv([$t21, $t22], "ODSAgentID", C, false)), "value")));
        await $.mset((await $.wcall([$t21, $t22], "FieldByName", ["Ins_Date"], C)), "AsDateTime", (await $.mv((await $.wv([$t21, $t22], "edIns_Date", C, false)), "Date")));
        await $.mset((await $.wcall([$t21, $t22], "FieldByName", ["Begin_Date"], C)), "AsDateTime", (await $.mv((await $.wv([$t21, $t22], "edBeginDate", C, false)), "Date")));
        await $.mset((await $.wcall([$t21, $t22], "FieldByName", ["End_Date"], C)), "AsDateTime", (await $.mv((await $.wv([$t21, $t22], "edEndDate", C, false)), "Date")));
        await $.stmt($.wcall([$t21, $t22], "Post", [], C));
        await $.stmt($.wcall([$t21, $t22], "RefreshRecord", [], C));
        await $.wset([$t21, $t22], "CID", (await $.mv((await $.wcall([$t21, $t22], "FieldByName", ["id"], C)), "asInteger")), C);
      }
    }
    {
      const $t23 = (await $.v(C, "DModuleKorporativ"));
      const $t24 = (await $.wv([$t23], "ODSdrAccessPeople", C, false));
      const $t25 = (await $.wv([$t23, $t24], "ODSAccessories", C, false));
      if ($.truthy($.in_((await $.wv([$t23, $t24, $t25], "State", C, false)), [(await $.wv([$t23, $t24, $t25], "dsEdit", C, false)), (await $.wv([$t23, $t24, $t25], "dsInsert", C, false))]))) {
        await $.stmt($.wcall([$t23, $t24, $t25], "Post", [], C));
        await $.stmt($.wcall([$t23, $t24, $t25], "RefreshRecord", [], C));
      }
    }
    {
      const $t26 = (await $.v(C, "DModuleKorporativ"));
      const $t27 = (await $.wv([$t26], "ODSMotorkasko", C, false));
      if ($.truthy($.in_((await $.wv([$t26, $t27], "State", C, false)), [(await $.wv([$t26, $t27], "dsEdit", C, false)), (await $.wv([$t26, $t27], "dsInsert", C, false))]))) {
        await $.stmt($.wcall([$t26, $t27], "Post", [], C));
        await $.stmt($.wcall([$t26, $t27], "RefreshRecord", [], C));
      }
    }
    {
      const $t28 = (await $.v(C, "DModuleKorporativ"));
      const $t29 = (await $.wv([$t28], "ODSAgent", C, false));
      if ($.truthy(($.ne((await $.wcall([$t28, $t29], "trim", [(await $.mv((await $.wv([$t28, $t29], "edAgents", C, false)), "Text"))], C)), "")))) {
        if ($.truthy(($.ne((await $.mv((await $.wv([$t28, $t29], "edAgents", C, false)), "Text")), (await $.mv((await $.wv([$t28, $t29], "DBAgents", C, false)), "Text")))))) {
          await $.wset([$t28, $t29], "str", (await $.mv((await $.wv([$t28, $t29], "edAgents", C, false)), "Text")), { get: async () => L0["str"], set: async (v) => { L0["str"] = v; }, local: true });
          await $.stmt($.wcall([$t28, $t29], "Insert", [], C));
          await $.mset((await $.wcall([$t28, $t29], "FieldByName", ["ID"], C)), "asInteger", 1);
          await $.mset((await $.wcall([$t28, $t29], "FieldByName", ["Surname"], C)), "asString", (await $.wv([$t28, $t29], "str", { get: async () => L0["str"], set: async (v) => { L0["str"] = v; }, local: true }, false)));
          await $.stmt($.wcall([$t28, $t29], "Post", [], C));
          await $.stmt($.wcall([$t28, $t29], "RefreshRecord", [], C));
        }
      }
    }
    await $.set(C, "IsSaved", true);
    L0["result"] = true;
  } catch ($t20) {
    $.rethrowControl($t20);
    if ($.excIs($t20, "Exception")) {
      L0["e"] = $.exc($t20);
      await $.stmt((await $.mcall((await $.v(C, "hbErrMsg")), "ShowMessage", [(await $.mv(L0["e"], "message"))])));
    }
    else { throw $t20; }
  }
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TfrmInsKorporativKasco", "ActiveFormCreate", async function ActiveFormCreate(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.set(C, "frmInsKorporativKasco", Self);
  await $.set(C, "FParams", (await $.mv((await $.v(C, "TStringList")), "Create")));
  await $.set(C, "DModuleKorporativ", (await $.mcall((await $.v(C, "TDModuleKorporativ")), "Create", [Self])));
  await $.set(C, "isSaved", false);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TfrmInsKorporativKasco", "ActiveFormDestroy", async function ActiveFormDestroy(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mcall((await $.v(C, "DModuleKorporativ")), "Free", []);
  await $.mcall((await $.v(C, "FParams")), "Free", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TfrmInsKorporativKasco", "edIns_DateChange", async function edIns_DateChange(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t30 = (await $.v(C, "DModuleKorporativ"));
    const $t31 = (await $.wv([$t30], "ODSContracts", C, false));
    if ($.truthy($.in_((await $.wv([$t30, $t31], "state", C, false)), [(await $.wv([$t30, $t31], "dsInsert", C, false))]))) {
      await $.mset((await $.wv([$t30, $t31], "edBeginDate", C, false)), "DateTime", (await $.mv(((await $.wv([$t30, $t31], "Sender", { get: async () => L0["sender"], set: async (v) => { L0["sender"] = v; }, local: true }, false))), "DateTime")));
    }
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TfrmInsKorporativKasco", "edBeginDateChange", async function edBeginDateChange(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.stmt((await $.call(C, "CalcEndDate", [])));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TfrmInsKorporativKasco", "CalcEndDate", async function CalcEndDate(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: undefined};
  {
    const $t32 = (await $.v(C, "DModuleKorporativ"));
    await $.mset((await $.wv([$t32], "edEndDate", C, false)), "DateTime", (await $.wcall([$t32], "IncMonth", [(await $.mv((await $.wv([$t32], "edBeginDate", C, false)), "DateTime")), (await $.mv((await $.mcall((await $.wv([$t32], "ODSMonths", C, false)), "fieldbyname", ["COUNT"])), "asInteger"))], C)));
  }
  return L0.result;
}, {"params": [], "kind": "procedure", "ptypes": []});
  U.method("TfrmInsKorporativKasco", "CalcMonth", async function CalcMonth(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: undefined};
  {
    const $t33 = (await $.v(C, "DModuleKorporativ"));
    await $.stmt((await $.mcall((await $.wv([$t33], "ODSMonths", C, false)), "Locate", ["count", (await $.wcall([$t33], "IntToStr", [(await $.wcall([$t33], "trunc", [$.fdiv(($.sub((await $.mv((await $.wv([$t33], "edEndDate", C, false)), "DateTime")), (await $.mv((await $.wv([$t33], "edBeginDate", C, false)), "DateTime")))), 30)], C))], C)), []])));
  }
  return L0.result;
}, {"params": [], "kind": "procedure", "ptypes": []});
  U.method("TfrmInsKorporativKasco", "MakeFranshizList", async function MakeFranshizList(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: undefined};
  {
    const $t34 = (await $.v(C, "DModuleKorporativ"));
    const $t35 = (await $.wv([$t34], "ODSFranshiz", C, false));
    await $.mcall((await $.mv((await $.wv([$t34, $t35], "edFranshiz", C, false)), "Items")), "Clear", []);
    await $.stmt($.wcall([$t34, $t35], "First", [], C));
    while ($.truthy($.not((await $.wv([$t34, $t35], "EOF", C, false))))) {
      await $.stmt((await $.mcall((await $.mv((await $.wv([$t34, $t35], "edFranshiz", C, false)), "Items")), "Add", [(await $.wcall([$t34, $t35], "FloatToStr", [(await $.mv((await $.wcall([$t34, $t35], "FieldByName", ["FRANSHIZ"], C)), "asFloat"))], C))])));
      await $.stmt($.wcall([$t34, $t35], "Next", [], C));
      await $.tick();
    }
    await $.stmt($.wcall([$t34, $t35], "First", [], C));
  }
  return L0.result;
}, {"params": [], "kind": "procedure", "ptypes": []});
  U.method("TfrmInsKorporativKasco", "SpeedButton1Click", async function SpeedButton1Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t36 = (await $.v(C, "DModuleKorporativ"));
    const $t37 = (await $.wv([$t36], "ODSReliaseDates", C, false));
    try {
      await $.stmt($.wcall([$t36, $t37], "Close", [], C));
      await $.mcall((await $.mv((await $.wv([$t36, $t37], "DModuleKorporativ", C, false)), "ODSMotorkasko")), "Close", []);
      await $.stmt((await $.mcall((await $.mv((await $.wv([$t36, $t37], "DModuleKorporativ", C, false)), "ODSMotorkasko")), "SetVariable", ["cid", (await $.mv((await $.mv((await $.wv([$t36, $t37], "DModuleKorporativ", C, false)), "ODSContractsID")), "value"))])));
      await $.mcall((await $.mv((await $.wv([$t36, $t37], "DModuleKorporativ", C, false)), "ODSMotorkasko")), "Open", []);
      if ($.truthy(($.eq((await $.mv((await $.mcall((await $.wv([$t36, $t37], "ODSMarks", C, false)), "FieldByName", ["calcoptions"])), "asInteger")), 1)))) {
        throw $.raise((await $.mcall((await $.wv([$t36, $t37], "TCalcException", C, false)), "Create", ["Verilmish avtomobil markasi ucun tarif hesablanmir."])));
      }
      if ($.truthy($.eq((await $.wcall([$t36, $t37], "trim", [(await $.mv((await $.mcall((await $.wv([$t36, $t37], "ODSMotorKasko", C, false)), "FieldByName", ["insuredoutputyear"])), "AsString"))], C)), ""))) {
        throw $.raise((await $.mcall((await $.wv([$t36, $t37], "TOutputYear", C, false)), "Create", ["Avtomobilin buraxilish ilini daxil edin"])));
      }
      await $.stmt((await $.wcall([$t36, $t37], "SetVariable", ["state", (await $.mv((await $.mcall((await $.wv([$t36, $t37], "ODSMarks", C, false)), "fieldbyName", ["state_id"])), "asInteger"))], C)));
      await $.stmt((await $.wcall([$t36, $t37], "SetVariable", ["releaseyear", (await $.mv((await $.mcall((await $.wv([$t36, $t37], "ODSMotorKasko", C, false)), "FieldByName", ["insuredoutputyear"])), "AsInteger"))], C)));
      await $.stmt($.wcall([$t36, $t37], "Open", [], C));
      await $.mcall((await $.wv([$t36, $t37], "ODSMonths", C, false)), "Open", []);
      await $.mcall((await $.wv([$t36, $t37], "ODSFranshiz", C, false)), "Close", []);
      await $.mcall((await $.wv([$t36, $t37], "ODSFranshiz", C, false)), "Open", []);
      await $.stmt($.wcall([$t36, $t37], "MakeFranshizList", [], C));
    } catch ($t38) {
      $.rethrowControl($t38);
      if ($.excIs($t38, "Exception")) {
        L0["e"] = $.exc($t38);
        await $.stmt((await $.wcall([$t36, $t37], "MessageDlg", [(await $.mv((await $.wv([$t36, $t37], "E", { get: async () => L0["e"], set: async (v) => { L0["e"] = v; }, local: true }, false)), "Message")), (await $.wv([$t36, $t37], "mtInformation", C, false)), [(await $.wv([$t36, $t37], "mbOK", C, false))], 0], C)));
      }
      else { throw $t38; }
    }
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TfrmInsKorporativKasco", "DBMonthsClick", async function DBMonthsClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.stmt((await $.call(C, "CalcEndDate", [])));
  await $.stmt($.call(C, "MakeFranshizList", []));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TfrmInsKorporativKasco", "edFranshizChange", async function edFranshizChange(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t39 = (await $.v(C, "DModuleKorporativ"));
    const $t40 = (await $.wv([$t39], "ODSFranshiz", C, false));
    await $.stmt((await $.wcall([$t39, $t40], "Locate", ["FRANSHIZ", (await $.mv((await $.mcall((await $.wv([$t39, $t40], "ODSContracts", C, false)), "FieldByName", ["FRANSHIZ"])), "asFloat")), []], C)));
    await $.mset((await $.mcall((await $.wv([$t39, $t40], "ODSContracts", C, false)), "FieldByName", ["TARIFF"])), "asFloat", (await $.mv((await $.wcall([$t39, $t40], "FieldByName", ["TARIFF"], C)), "asFloat")));
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TfrmInsKorporativKasco", "SpeedButton7Click", async function SpeedButton7Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mcall((await $.v(C, "edAmmount")), "SetFocus", []);
  {
    const $t41 = (await $.v(C, "DModuleKorporativ"));
    const $t42 = (await $.wv([$t41], "ODSContracts", C, false));
    await $.mset((await $.wcall([$t41, $t42], "FieldByName", ["AMMOUNT"], C)), "asFloat", $.mul(($.fdiv((await $.mv((await $.wcall([$t41, $t42], "FieldByName", ["INSSUMM"], C)), "asFloat")), 100)), (await $.mv((await $.wcall([$t41, $t42], "FieldByName", ["TARIFF"], C)), "asFloat"))));
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TfrmInsKorporativKasco", "btOkClick", async function btOkClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy((await $.or_((await $.call(C, "SaveData", [])), async () => (await $.v(C, "IsSaved")))))) {
    await $.stmt((await $.call(C, "PostMessage", [(await $.v(C, "FOwnerHandle")), (await $.v(C, "WM_ModalResult")), (await $.v(C, "mrOk")), 0])));
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TfrmInsKorporativKasco", "btApplyClick", async function btApplyClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy((await $.v(C, "SaveData")))) {
    await $.mset((await $.v(C, "btSuggestion")), "Enabled", true);
    await $.mset((await $.v(C, "btApply")), "Enabled", false);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TfrmInsKorporativKasco", "BitBtn2Click", async function BitBtn2Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t43 = (await $.v(C, "DModuleKorporativ"));
    await $.mcall((await $.wv([$t43], "ODSMotorkasko", C, false)), "Cancel", []);
    await $.mcall((await $.wv([$t43], "ODSContracts", C, false)), "Cancel", []);
    await $.mcall((await $.wv([$t43], "ODSdrAccessPeople", C, false)), "Cancel", []);
  }
  await $.stmt((await $.call(C, "PostMessage", [(await $.v(C, "FOwnerHandle")), (await $.v(C, "WM_ModalResult")), (await $.v(C, "mrCancel")), 0])));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  return U;
}
