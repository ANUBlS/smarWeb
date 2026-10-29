// Generated from UMFSuggestion.pas by pas2js — do not edit by hand; regenerate instead.
/* eslint-disable */
// @ts-nocheck

export default function define($) {
  const U = $.unit("UMFSuggestion", ["Windows", "Messages", "SysUtils", "Classes", "Graphics", "Controls", "Forms", "Dialogs", "ActiveX", "AxCtrls", "PMFSuggestion_TLB", "StdVcl", "Db", "OracleData", "StdCtrls", "DBCtrls", "Buttons", "Mask", "ExtCtrls", "SBPlgAx50_TLB", "ComCtrls", "Oracle", "INSWordExporter", "PlgModalContainer", "ComObj", "ComServ", "sboapiDataModuleImpl", "URiskTypes", "UDModule"]);
  const C = [U];
  U.defClass("TMFSuggestion", "TActiveForm", {"panel2": {"name": "Panel2", "type": "TPanel"}, "label1": {"name": "Label1", "type": "TLabel"}, "label2": {"name": "Label2", "type": "TLabel"}, "edit1": {"name": "Edit1", "type": "TEdit"}, "dbedit1": {"name": "DBEdit1", "type": "TDBEdit"}, "groupbox2": {"name": "GroupBox2", "type": "TGroupBox"}, "label5": {"name": "Label5", "type": "TLabel"}, "label7": {"name": "Label7", "type": "TLabel"}, "label12": {"name": "Label12", "type": "TLabel"}, "panel1": {"name": "Panel1", "type": "TPanel"}, "bitbtn1": {"name": "BitBtn1", "type": "TBitBtn"}, "bitbtn2": {"name": "BitBtn2", "type": "TBitBtn"}, "lbbookmarks": {"name": "lbBookmarks", "type": "TListBox"}, "cbrisks": {"name": "cbRisks", "type": "TCheckBox"}, "btrisksadd": {"name": "btRisksAdd", "type": "TBitBtn"}, "dblookupcomboboxrisk": {"name": "DBLookupComboBoxRisk", "type": "TDBLookupComboBox"}, "dtpcontractdate": {"name": "DTPContractDate", "type": "TDateTimePicker"}, "memrisk": {"name": "memRisk", "type": "TMemo"}, "memconditions": {"name": "memConditions", "type": "TMemo"}, "btapply": {"name": "btApply", "type": "TBitBtn"}, "dbedit4": {"name": "DBEdit4", "type": "TDBEdit"}, "btprint": {"name": "btPrint", "type": "TBitBtn"}, "sugwordexporter": {"name": "SugWordExporter", "type": "TINSWordExporter"}, "btpolicy": {"name": "btPolicy", "type": "TBitBtn"}, "plgpolicy": {"name": "PlgPolicy", "type": "TPlgModalContainer"}, "cbconditions": {"name": "cbConditions", "type": "TCheckBox"}, "label6": {"name": "Label6", "type": "TLabel"}, "lcbconditions": {"name": "lcbConditions", "type": "TDBLookupComboBox"}, "fparams": {"name": "FParams", "type": "TStrings"}, "fownerhandle": {"name": "FOwnerHandle", "type": "Integer"}, "id": {"name": "id", "type": "integer"}, "f": {"name": "f", "type": "boolean"}, "fevents": {"name": "FEvents", "type": "IMFSuggestionEvents"}}, {"params": {"name": "Params", "read": "Get_Params", "write": "Set_Params"}});
  U.init(async () => {
    U.const("WM_ModalResult", $.add((await $.v(C, "WM_USER")), 139));
    U.const("fmCaption", "Teklifname formasi: (%s)");
    U.var_("MFSuggestion", null, "TMFSuggestion");
  });
  U.method("TMFSuggestion", "DefinePropertyPages", async function DefinePropertyPages(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"definepropertypage": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["definepropertypage"]);
  return L0.result;
}, {"params": ["DefinePropertyPage"], "kind": "procedure", "ptypes": ["TDefinePropertyPage"]});
  U.method("TMFSuggestion", "EventSinkChanged", async function EventSinkChanged(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"eventsink": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["eventsink"]);
  await $.set(C, "FEvents", L0["eventsink"]);
  return L0.result;
}, {"params": ["EventSink"], "kind": "procedure", "ptypes": ["IUnknown"]});
  U.method("TMFSuggestion", "Initialize", async function Initialize(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: undefined};
  await $.inherited(Self, "TMFSuggestion", "Initialize", null, arguments);
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
  U.method("TMFSuggestion", "Get_Active", async function Get_Active(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: false};
  L0["result"] = (await $.v(C, "Active"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TMFSuggestion", "Get_AutoScroll", async function Get_AutoScroll(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: false};
  L0["result"] = (await $.v(C, "AutoScroll"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TMFSuggestion", "Get_AutoSize", async function Get_AutoSize(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: false};
  L0["result"] = (await $.v(C, "AutoSize"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TMFSuggestion", "Get_AxBorderStyle", async function Get_AxBorderStyle(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: null};
  L0["result"] = (await $.call(C, "Ord", [(await $.v(C, "AxBorderStyle"))]));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TMFSuggestion", "Get_Caption", async function Get_Caption(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: ''};
  L0["result"] = (await $.call(C, "WideString", [(await $.v(C, "Caption"))]));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TMFSuggestion", "Get_Color", async function Get_Color(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: null};
  L0["result"] = (await $.call(C, "OLE_COLOR", [(await $.v(C, "Color"))]));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TMFSuggestion", "Get_Cursor", async function Get_Cursor(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: 0};
  L0["result"] = (await $.call(C, "Smallint", [(await $.v(C, "Cursor"))]));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TMFSuggestion", "Get_DoubleBuffered", async function Get_DoubleBuffered(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: false};
  L0["result"] = (await $.v(C, "DoubleBuffered"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TMFSuggestion", "Get_DropTarget", async function Get_DropTarget(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: false};
  L0["result"] = (await $.v(C, "DropTarget"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TMFSuggestion", "Get_Enabled", async function Get_Enabled(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: false};
  L0["result"] = (await $.v(C, "Enabled"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TMFSuggestion", "Get_Font", async function Get_Font(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: null};
  await $.stmt((await $.call(C, "GetOleFont", [(await $.v(C, "Font")), L0["result"]])));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TMFSuggestion", "Get_HelpFile", async function Get_HelpFile(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: ''};
  L0["result"] = (await $.call(C, "WideString", [(await $.v(C, "HelpFile"))]));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TMFSuggestion", "Get_KeyPreview", async function Get_KeyPreview(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: false};
  L0["result"] = (await $.v(C, "KeyPreview"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TMFSuggestion", "Get_PixelsPerInch", async function Get_PixelsPerInch(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: 0};
  L0["result"] = (await $.v(C, "PixelsPerInch"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TMFSuggestion", "Get_PrintScale", async function Get_PrintScale(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: null};
  L0["result"] = (await $.call(C, "Ord", [(await $.v(C, "PrintScale"))]));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TMFSuggestion", "Get_Scaled", async function Get_Scaled(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: false};
  L0["result"] = (await $.v(C, "Scaled"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TMFSuggestion", "Get_Visible", async function Get_Visible(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: false};
  L0["result"] = (await $.v(C, "Visible"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TMFSuggestion", "Get_VisibleDockClientCount", async function Get_VisibleDockClientCount(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: 0};
  L0["result"] = (await $.v(C, "VisibleDockClientCount"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TMFSuggestion", "_Set_Font", async function _Set_Font(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.stmt((await $.call(C, "SetOleFont", [(await $.v(C, "Font")), L0["value"]])));
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["IFontDisp"]});
  U.method("TMFSuggestion", "ActivateEvent", async function ActivateEvent(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.ne((await $.v(C, "FEvents")), null))) {
    await $.mcall((await $.v(C, "FEvents")), "OnActivate", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TMFSuggestion", "ClickEvent", async function ClickEvent(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.ne((await $.v(C, "FEvents")), null))) {
    await $.mcall((await $.v(C, "FEvents")), "OnClick", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TMFSuggestion", "CreateEvent", async function CreateEvent(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.ne((await $.v(C, "FEvents")), null))) {
    await $.mcall((await $.v(C, "FEvents")), "OnCreate", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TMFSuggestion", "DblClickEvent", async function DblClickEvent(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.ne((await $.v(C, "FEvents")), null))) {
    await $.mcall((await $.v(C, "FEvents")), "OnDblClick", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TMFSuggestion", "DeactivateEvent", async function DeactivateEvent(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.ne((await $.v(C, "FEvents")), null))) {
    await $.mcall((await $.v(C, "FEvents")), "OnDeactivate", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TMFSuggestion", "DestroyEvent", async function DestroyEvent(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.ne((await $.v(C, "FEvents")), null))) {
    await $.mcall((await $.v(C, "FEvents")), "OnDestroy", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TMFSuggestion", "KeyPressEvent", async function KeyPressEvent(Self, p0, p1) {
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
  U.method("TMFSuggestion", "PaintEvent", async function PaintEvent(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.ne((await $.v(C, "FEvents")), null))) {
    await $.mcall((await $.v(C, "FEvents")), "OnPaint", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TMFSuggestion", "Set_AutoScroll", async function Set_AutoScroll(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "AutoScroll", L0["value"]);
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["WordBool"]});
  U.method("TMFSuggestion", "Set_AutoSize", async function Set_AutoSize(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "AutoSize", L0["value"]);
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["WordBool"]});
  U.method("TMFSuggestion", "Set_AxBorderStyle", async function Set_AxBorderStyle(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "AxBorderStyle", (await $.call(C, "TActiveFormBorderStyle", [L0["value"]])));
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["TxActiveFormBorderStyle"]});
  U.method("TMFSuggestion", "Set_Caption", async function Set_Caption(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "Caption", (await $.call(C, "TCaption", [L0["value"]])));
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["WideString"]});
  U.method("TMFSuggestion", "Set_Color", async function Set_Color(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "Color", (await $.call(C, "TColor", [L0["value"]])));
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["OLE_COLOR"]});
  U.method("TMFSuggestion", "Set_Cursor", async function Set_Cursor(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "Cursor", (await $.call(C, "TCursor", [L0["value"]])));
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["Smallint"]});
  U.method("TMFSuggestion", "Set_DoubleBuffered", async function Set_DoubleBuffered(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "DoubleBuffered", L0["value"]);
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["WordBool"]});
  U.method("TMFSuggestion", "Set_DropTarget", async function Set_DropTarget(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "DropTarget", L0["value"]);
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["WordBool"]});
  U.method("TMFSuggestion", "Set_Enabled", async function Set_Enabled(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "Enabled", L0["value"]);
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["WordBool"]});
  U.method("TMFSuggestion", "Set_Font", async function Set_Font(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.asRef(p0), result: undefined};
  await $.stmt((await $.call(C, "SetOleFont", [(await $.v(C, "Font")), (await L0["value"].get())])));
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["IFontDisp"]});
  U.method("TMFSuggestion", "Set_HelpFile", async function Set_HelpFile(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "HelpFile", (await $.call(C, "String", [L0["value"]])));
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["WideString"]});
  U.method("TMFSuggestion", "Set_KeyPreview", async function Set_KeyPreview(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "KeyPreview", L0["value"]);
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["WordBool"]});
  U.method("TMFSuggestion", "Set_PixelsPerInch", async function Set_PixelsPerInch(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "PixelsPerInch", L0["value"]);
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["Integer"]});
  U.method("TMFSuggestion", "Set_PrintScale", async function Set_PrintScale(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "PrintScale", (await $.call(C, "TPrintScale", [L0["value"]])));
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["TxPrintScale"]});
  U.method("TMFSuggestion", "Set_Scaled", async function Set_Scaled(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "Scaled", L0["value"]);
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["WordBool"]});
  U.method("TMFSuggestion", "Set_Visible", async function Set_Visible(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "Visible", L0["value"]);
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["WordBool"]});
  U.method("TMFSuggestion", "ActiveFormCreate", async function ActiveFormCreate(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.set(C, "MFSuggestion", Self);
  await $.set(C, "FParams", (await $.mv((await $.v(C, "TStringList")), "Create")));
  await $.set(C, "DModule1", (await $.mcall((await $.v(C, "TDModule1")), "Create", [Self])));
  {
    const $t1 = (await $.v(C, "DModule1"));
    await $.mcall((await $.wv([$t1], "Risks", C, false)), "Open", []);
    await $.mcall((await $.wv([$t1], "Conditions", C, false)), "Open", []);
    await $.mcall((await $.wv([$t1], "ODSFranshiz", C, false)), "Open", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TMFSuggestion", "Get_Owner", async function Get_Owner(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: 0};
  L0["result"] = (await $.v(C, "handle"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TMFSuggestion", "Set_Owner", async function Set_Owner(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"val": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["val"]);
  if ($.truthy($.gt(L0["val"], 0))) {
    await $.set(C, "FOwnerHandle", L0["val"]);
  }
  return L0.result;
}, {"params": ["val"], "kind": "procedure", "ptypes": ["Integer"]});
  U.method("TMFSuggestion", "Get_Params", async function Get_Params(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"name": $.copyArg(p0), result: null};
  await $.fixArgs(L0, ["name"]);
  L0["result"] = (await $.idx((await $.mv((await $.v(C, "FParams")), "Values")), [L0["name"]]));
  return L0.result;
}, {"params": ["Name"], "kind": "function", "ptypes": ["WideString"]});
  U.method("TMFSuggestion", "Set_Params", async function Set_Params(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"name": $.copyArg(p0), "value": $.copyArg(p1), result: undefined};
  await $.fixArgs(L0, ["name", "value"]);
  { const $t2 = await $.iset((await $.mv((await $.v(C, "FParams")), "Values")), [L0["name"]], L0["value"]); if ($t2 !== undefined) { await $.mset((await $.v(C, "FParams")), "Values", $t2); } }
  return L0.result;
}, {"params": ["Name", "Value"], "kind": "procedure", "ptypes": ["WideString", "OleVariant"]});
  U.method("TMFSuggestion", "InstanceInitialize", async function InstanceInitialize(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: null};
  L0["result"] = (await $.v(C, "S_OK"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TMFSuggestion", "Cleanup", async function Cleanup(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: null};
  L0["result"] = (await $.v(C, "S_OK"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TMFSuggestion", "UIObjectActivate", async function UIObjectActivate(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: null};
  await $.set(C, "id", (await $.call(C, "StrToInt", [(await $.call(C, "Get_Params", ["MK_ID"]))])));
  await $.set(C, "f", true);
  {
    const $t3 = (await $.v(C, "DModule1"));
    await $.mcall((await $.wv([$t3], "Ins_MotorFull", C, false)), "Close", []);
    await $.stmt((await $.mcall((await $.wv([$t3], "Ins_motorFull", C, false)), "SetVariable", ["ID", (await $.wv([$t3], "id", C, false))])));
    await $.mcall((await $.wv([$t3], "Ins_MotorFull", C, false)), "Open", []);
    await $.mcall((await $.wv([$t3], "ODSContracts", C, false)), "Close", []);
    await $.stmt((await $.mcall((await $.wv([$t3], "ODSContracts", C, false)), "SetVariable", ["cid", (await $.mv((await $.wv([$t3], "Ins_MotorFullCId", C, false)), "value"))])));
    await $.mcall((await $.wv([$t3], "ODSContracts", C, false)), "Open", []);
    if ($.truthy($.eq((await $.wcall([$t3], "Get_Params", ["Mod"], C)), "Insert"))) {
      await $.mcall((await $.wv([$t3], "Suggestion", C, false)), "Insert", []);
      await $.wset([$t3], "Caption", (await $.wcall([$t3], "format", [(await $.wv([$t3], "fmCaption", C, false)), ["Elave"]], C)), C);
      await $.mset((await $.wv([$t3], "DTPContractDate", C, false)), "DateTime", (await $.wv([$t3], "Now", C, false)));
      await $.mcall((await $.wv([$t3], "Customers", C, false)), "Open", []);
      await $.stmt((await $.mcall((await $.wv([$t3], "Suggestion", C, false)), "SetVariable", ["MK_ID", (await $.mv((await $.wv([$t3], "Ins_MotorFullID", C, false)), "value"))])));
      await $.mcall((await $.wv([$t3], "Suggestion", C, false)), "Open", []);
    } else {
      await $.mset((await $.wv([$t3], "DTPContractDate", C, false)), "DateTime", (await $.mv((await $.wv([$t3], "SuggestionENDDATE", C, false)), "value")));
      await $.mcall((await $.wv([$t3], "Suggestion", C, false)), "Edit", []);
      await $.wset([$t3], "Caption", (await $.wcall([$t3], "format", [(await $.wv([$t3], "fmCaption", C, false)), ["Redakte"]], C)), C);
      await $.mset((await $.wv([$t3], "btPrint", C, false)), "Enabled", (await $.wv([$t3], "True", C, false)));
      await $.mset((await $.wv([$t3], "btPolicy", C, false)), "Enabled", (await $.wv([$t3], "True", C, false)));
    }
  }
  L0["result"] = (await $.v(C, "S_OK"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TMFSuggestion", "QueryDeactivate", async function QueryDeactivate(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: null};
  L0["result"] = (await $.v(C, "S_OK"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TMFSuggestion", "UIObjectDeactivate", async function UIObjectDeactivate(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: null};
  L0["result"] = (await $.v(C, "S_OK"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TMFSuggestion", "SaveState", async function SaveState(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: null};
  L0["result"] = (await $.v(C, "S_OK"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TMFSuggestion", "Get_Height", async function Get_Height(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: 0};
  L0["result"] = (await $.v(C, "Height"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TMFSuggestion", "Get_Width", async function Get_Width(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: 0};
  L0["result"] = (await $.v(C, "Width"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TMFSuggestion", "btRisksAddClick", async function btRisksAddClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mcall((await $.mv((await $.v(C, "DModule1")), "Risktypes")), "Open", []);
  {
    const $t4 = (await $.mcall((await $.v(C, "TfmRiskTypes")), "Create", [Self]));
    await $.stmt($.wcall([$t4], "ShowModal", [], C));
  }
  if ($.truthy($.ne((await $.mv((await $.v(C, "memRisk")), "Text")), ""))) {
    await $.mset((await $.v(C, "cbRisks")), "State", (await $.v(C, "cbChecked")));
  }
  await $.mcall((await $.mv((await $.v(C, "DModule1")), "Risktypes")), "Close", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TMFSuggestion", "DBEdit4KeyPress", async function DBEdit4KeyPress(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "key": $.asRef(p1), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.eq((await L0["key"].get()), "\r"))) {
    await $.mcall((await $.call(C, "FindNextControl", [(await $.v(C, "ActiveControl")), true, true, false])), "SetFocus", []);
    await L0["key"].set("\u0000");
  } else {
    await $.mset((await $.v(C, "btApply")), "Enabled", true);
  }
  return L0.result;
}, {"params": ["Sender", "Key"], "kind": "procedure", "ptypes": ["TObject", "Char"]});
  U.method("TMFSuggestion", "DBLookupComboBoxRiskClick", async function DBLookupComboBoxRiskClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t5 = (await $.mv((await $.v(C, "DModule1")), "Risks"));
    await $.mset((await $.wv([$t5], "memRisk", C, false)), "Text", (await $.mv((await $.wcall([$t5], "FieldByName", ["name"], C)), "asString")));
  }
  await $.mset((await $.v(C, "btApply")), "Enabled", true);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TMFSuggestion", "DBLookupComboBoxConditionClick", async function DBLookupComboBoxConditionClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t6 = (await $.mv((await $.v(C, "DModule1")), "Conditions"));
    await $.mset((await $.wv([$t6], "memConditions", C, false)), "Text", (await $.mv((await $.wcall([$t6], "FieldByName", ["name"], C)), "asString")));
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TMFSuggestion", "LoadValues", async function LoadValues(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"params": $.asRef(p0), result: undefined};
  {
    const $t7 = (await L0["params"].get());
    { const $t8 = await $.iset((await $.wv([$t7], "values", C, false)), ["name"], (await $.mv((await $.mv((await $.wv([$t7], "DModule1", C, false)), "CustomersNAME")), "Value"))); if ($t8 !== undefined) { await $.wset([$t7], "values", $t8, C); } }
  }
  return L0.result;
}, {"params": ["params"], "kind": "procedure", "ptypes": ["TStringlist"]});
  U.method("TMFSuggestion", "SaveData", async function SaveData(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: false};
  L0["result"] = false;
  if ($.truthy($.eq((await $.mv((await $.v(C, "cbRisks")), "State")), (await $.v(C, "cbChecked"))))) {
    {
      const $t9 = (await $.mv((await $.v(C, "DModule1")), "Risks"));
      await $.stmt($.wcall([$t9], "Insert", [], C));
      await $.mset((await $.wcall([$t9], "FieldByName", ["name"], C)), "asString", (await $.mv((await $.wv([$t9], "memRisk", C, false)), "Text")));
      await $.stmt($.wcall([$t9], "Post", [], C));
      await $.stmt($.wcall([$t9], "RefreshRecord", [], C));
    }
  }
  if ($.truthy($.eq((await $.mv((await $.v(C, "cbConditions")), "State")), (await $.v(C, "cbChecked"))))) {
    {
      const $t10 = (await $.mv((await $.v(C, "DModule1")), "Conditions"));
      await $.stmt($.wcall([$t10], "Insert", [], C));
      await $.mset((await $.wcall([$t10], "FieldByName", ["name"], C)), "asString", (await $.mv((await $.wv([$t10], "memConditions", C, false)), "Text")));
      await $.stmt($.wcall([$t10], "Post", [], C));
      await $.stmt($.wcall([$t10], "RefreshRecord", [], C));
    }
  }
  {
    const $t11 = (await $.v(C, "DModule1"));
    const $t12 = (await $.wv([$t11], "Suggestion", C, false));
    await $.mset((await $.wcall([$t11, $t12], "FieldByName", ["mk_id"], C)), "AsFloat", (await $.wv([$t11, $t12], "id", C, false)));
    await $.mset((await $.wcall([$t11, $t12], "FieldByName", ["rsk_id"], C)), "AsFloat", (await $.mv((await $.mcall((await $.wv([$t11, $t12], "Risks", C, false)), "FieldByName", ["id"])), "asFloat")));
    await $.mset((await $.wcall([$t11, $t12], "FieldByName", ["cndt_id"], C)), "AsFloat", (await $.mv((await $.mcall((await $.wv([$t11, $t12], "Conditions", C, false)), "FieldByName", ["id"])), "asFloat")));
    await $.mset((await $.wcall([$t11, $t12], "FieldByName", ["enddate"], C)), "AsDateTime", (await $.mv((await $.wv([$t11, $t12], "DTPContractDate", C, false)), "DateTime")));
    if ($.truthy($.in_((await $.wv([$t11, $t12], "state", C, false)), [(await $.wv([$t11, $t12], "dsInsert", C, false)), (await $.wv([$t11, $t12], "dsEdit", C, false))]))) {
      await $.stmt($.wcall([$t11, $t12], "Post", [], C));
    }
    await $.stmt((await $.wcall([$t11, $t12], "RefreshRecord", [], C)));
    if ($.truthy((await $.wv([$t11, $t12], "f", C, false)))) {
      await $.mcall((await $.wv([$t11, $t12], "ODSContracts", C, false)), "Edit", []);
      await $.mset((await $.mcall((await $.wv([$t11, $t12], "ODSContracts", C, false)), "FieldByName", ["ins_date"])), "AsDateTime", (await $.mv((await $.wv([$t11, $t12], "DTPContractDate", C, false)), "DateTime")));
      await $.mcall((await $.wv([$t11, $t12], "ODSContracts", C, false)), "Post", []);
    }
    await $.wset([$t11, $t12], "f", (await $.wv([$t11, $t12], "false", C, false)), C);
    await $.wset([$t11, $t12], "result", (await $.wv([$t11, $t12], "True", C, false)), { get: async () => L0["result"], set: async (v) => { L0["result"] = v; }, local: true });
  }
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TMFSuggestion", "BitBtn1Click", async function BitBtn1Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy((await $.or_((await $.call(C, "SaveData", [])), async () => (await $.v(C, "f")))))) {
    await $.stmt((await $.call(C, "PostMessage", [(await $.v(C, "FOwnerHandle")), (await $.v(C, "WM_ModalResult")), (await $.v(C, "mrOk")), 0])));
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TMFSuggestion", "BitBtn2Click", async function BitBtn2Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.stmt((await $.call(C, "PostMessage", [(await $.v(C, "FOwnerHandle")), (await $.v(C, "WM_ModalResult")), (await $.v(C, "mrCancel")), 0])));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TMFSuggestion", "memConditionsChange", async function memConditionsChange(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.stmt((await $.call(C, "DTPContractDateChange", [L0["sender"]])));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TMFSuggestion", "DTPContractDateChange", async function DTPContractDateChange(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "key": ''};
  await $.fixArgs(L0, ["sender"]);
  await $.stmt((await $.call(C, "DBEdit4KeyPress", [L0["sender"], $.ref(async () => L0["key"], async ($t13) => { L0["key"] = $t13; })])));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TMFSuggestion", "btApplyClick", async function btApplyClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy((await $.call(C, "SaveData", [])))) {
    await $.mset((await $.v(C, "btPrint")), "Enabled", true);
    await $.mset((await $.v(C, "btPolicy")), "Enabled", true);
    await $.mset((await $.v(C, "btApply")), "Enabled", false);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TMFSuggestion", "SuggestionNewRecord", async function SuggestionNewRecord(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"dataset": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["dataset"]);
  return L0.result;
}, {"params": ["DataSet"], "kind": "procedure", "ptypes": ["TDataSet"]});
  U.method("TMFSuggestion", "btPrintClick", async function btPrintClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "day": 0, "month": 0, "year": 0};
  await $.fixArgs(L0, ["sender"]);
  await $.staticConst(L0, "months", "umfsuggestion.tmfsuggestion.btprintclick.months", async () => ["Yanvar", "Fevral", "Mart", "Aprel", "May", "İyun", "İyul", "Avqust", "Sentyabr", "Oktyabr", "Noyabr", "Dekabr"]);
  {
    const $t14 = (await $.v(C, "DModule1"));
    await $.stmt((await $.mcall((await $.wv([$t14], "Customers", C, false)), "Locate", ["id", (await $.mv((await $.wv([$t14], "Ins_MotorFullKli_id", C, false)), "Value")), []])));
  }
  try {
    {
      const $t15 = (await $.v(C, "DModule1"));
      {
        const $t16 = (await $.wv([$t15], "SugWordExporter", C, false));
        await $.wset([$t15, $t16], "FileName", $.add((await $.wcall([$t15, $t16], "ExtractFilePath", [(await $.mv((await $.wv([$t15, $t16], "Application", C, false)), "ExeName"))], C)), "\\MotorFullSuggest.doc"), C);
        await $.stmt((await $.wcall([$t15, $t16], "Open", [(await $.wv([$t15, $t16], "False", C, false))], C)));
        await $.stmt((await $.wcall([$t15, $t16], "DecodeDate", [(await $.mv((await $.wv([$t15, $t16], "SuggestionENDDATE", C, false)), "AsDateTime")), $.ref(async () => (await $.wv([$t15, $t16], "year", { get: async () => L0["year"], set: async (v) => { L0["year"] = v; }, local: true }, false)), async ($t17) => { await $.wset([$t15, $t16], "year", $t17, { get: async () => L0["year"], set: async (v) => { L0["year"] = v; }, local: true }); }), $.ref(async () => (await $.wv([$t15, $t16], "month", { get: async () => L0["month"], set: async (v) => { L0["month"] = v; }, local: true }, false)), async ($t18) => { await $.wset([$t15, $t16], "month", $t18, { get: async () => L0["month"], set: async (v) => { L0["month"] = v; }, local: true }); }), $.ref(async () => (await $.wv([$t15, $t16], "day", { get: async () => L0["day"], set: async (v) => { L0["day"] = v; }, local: true }, false)), async ($t19) => { await $.wset([$t15, $t16], "day", $t19, { get: async () => L0["day"], set: async (v) => { L0["day"] = v; }, local: true }); })], C)));
        await $.stmt((await $.wcall([$t15, $t16], "SetBookmark", ["Insured", (await $.mv((await $.wv([$t15, $t16], "CustomersName", C, false)), "value")), (await $.wv([$t15, $t16], "false", C, false)), (await $.wv([$t15, $t16], "false", C, false)), (await $.wv([$t15, $t16], "False", C, false)), (await $.wv([$t15, $t16], "false", C, false)), 8, "Arial AzLat", (await $.wv([$t15, $t16], "False", C, false))], C)));
        await $.stmt((await $.wcall([$t15, $t16], "SetBookmark", ["IAddress", (await $.mv((await $.wv([$t15, $t16], "CustomersADDRESS", C, false)), "value")), (await $.wv([$t15, $t16], "false", C, false)), (await $.wv([$t15, $t16], "false", C, false)), (await $.wv([$t15, $t16], "False", C, false)), (await $.wv([$t15, $t16], "false", C, false)), 8, "Arial AzLat", (await $.wv([$t15, $t16], "False", C, false))], C)));
        await $.stmt((await $.wcall([$t15, $t16], "SetBookmark", ["RAddress", (await $.mv((await $.wv([$t15, $t16], "SuggestionRISKADDRESS", C, false)), "value")), (await $.wv([$t15, $t16], "false", C, false)), (await $.wv([$t15, $t16], "false", C, false)), (await $.wv([$t15, $t16], "False", C, false)), (await $.wv([$t15, $t16], "false", C, false)), 8, "Arial AzLat", (await $.wv([$t15, $t16], "False", C, false))], C)));
        await $.stmt((await $.wcall([$t15, $t16], "SetBookmark", ["IValue", (await $.wcall([$t15, $t16], "CurrToStr", [(await $.mv((await $.wv([$t15, $t16], "SuggestionInsuranceSum", C, false)), "value"))], C)), (await $.wv([$t15, $t16], "false", C, false)), (await $.wv([$t15, $t16], "false", C, false)), (await $.wv([$t15, $t16], "False", C, false)), (await $.wv([$t15, $t16], "false", C, false)), 8, "Arial AzLat", (await $.wv([$t15, $t16], "False", C, false))], C)));
        await $.stmt((await $.wcall([$t15, $t16], "SetBookmark", ["ISum", (await $.wcall([$t15, $t16], "CurrToStr", [(await $.mv((await $.wv([$t15, $t16], "ODSContractsAmmount", C, false)), "value"))], C)), (await $.wv([$t15, $t16], "false", C, false)), (await $.wv([$t15, $t16], "false", C, false)), (await $.wv([$t15, $t16], "False", C, false)), (await $.wv([$t15, $t16], "false", C, false)), 8, "Arial AzLat", (await $.wv([$t15, $t16], "False", C, false))], C)));
        await $.stmt((await $.wcall([$t15, $t16], "SetBookmark", ["EndDate", $.add($.add($.add($.add((await $.wcall([$t15, $t16], "IntToStr", [(await $.wv([$t15, $t16], "day", { get: async () => L0["day"], set: async (v) => { L0["day"] = v; }, local: true }, false))], C)), "    "), (await $.idx((await $.wv([$t15, $t16], "months", { get: async () => L0["months"], set: async (v) => { L0["months"] = v; }, local: true }, false)), [(await $.wv([$t15, $t16], "month", { get: async () => L0["month"], set: async (v) => { L0["month"] = v; }, local: true }, false))]))), "    "), (await $.wcall([$t15, $t16], "IntToStr", [(await $.wv([$t15, $t16], "year", { get: async () => L0["year"], set: async (v) => { L0["year"] = v; }, local: true }, false))], C))), (await $.wv([$t15, $t16], "False", C, false)), (await $.wv([$t15, $t16], "False", C, false)), (await $.wv([$t15, $t16], "False", C, false)), (await $.wv([$t15, $t16], "False", C, false)), 8, "Arial AzLat", (await $.wv([$t15, $t16], "False", C, false))], C)));
        await $.stmt((await $.wcall([$t15, $t16], "SetBookmark", ["IPeriod", $.add($.add((await $.wcall([$t15, $t16], "DateToStr", [(await $.mv((await $.wv([$t15, $t16], "ODSContractsBegin_Date", C, false)), "Value"))], C)), " - "), (await $.wcall([$t15, $t16], "DateToStr", [(await $.mv((await $.wv([$t15, $t16], "ODSContractsEnd_Date", C, false)), "Value"))], C))), (await $.wv([$t15, $t16], "False", C, false)), (await $.wv([$t15, $t16], "False", C, false)), (await $.wv([$t15, $t16], "False", C, false)), (await $.wv([$t15, $t16], "False", C, false)), 10, "Arial AzLat", (await $.wv([$t15, $t16], "False", C, false))], C)));
        await $.stmt((await $.wcall([$t15, $t16], "SetBookmark", ["IRisks", (await $.mv((await $.idx((await $.mv((await $.wv([$t15, $t16], "Risks", C, false)), "Fields")), [1])), "value")), (await $.wv([$t15, $t16], "false", C, false)), (await $.wv([$t15, $t16], "false", C, false)), (await $.wv([$t15, $t16], "False", C, false)), (await $.wv([$t15, $t16], "false", C, false)), 8, "Arial AzLat", (await $.wv([$t15, $t16], "False", C, false))], C)));
        await $.stmt((await $.wcall([$t15, $t16], "SetBookmark", ["ICond", (await $.mv((await $.idx((await $.mv((await $.wv([$t15, $t16], "Conditions", C, false)), "Fields")), [1])), "value")), (await $.wv([$t15, $t16], "false", C, false)), (await $.wv([$t15, $t16], "false", C, false)), (await $.wv([$t15, $t16], "False", C, false)), (await $.wv([$t15, $t16], "false", C, false)), 8, "Arial AzLat", (await $.wv([$t15, $t16], "False", C, false))], C)));
        await $.stmt((await $.wcall([$t15, $t16], "SetBookmark", ["Insured2", (await $.mv((await $.wv([$t15, $t16], "CustomersName", C, false)), "value")), (await $.wv([$t15, $t16], "false", C, false)), (await $.wv([$t15, $t16], "false", C, false)), (await $.wv([$t15, $t16], "False", C, false)), (await $.wv([$t15, $t16], "false", C, false)), 8, "Arial AzLat", (await $.wv([$t15, $t16], "False", C, false))], C)));
      }
    }
  } finally {
    await $.mcall((await $.v(C, "SugWordExporter")), "Show", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TMFSuggestion", "btPolicyClick", async function btPolicyClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "policformguid": null, "p": null};
  await $.fixArgs(L0, ["sender"]);
  L0["p"] = (await $.mv((await $.v(C, "TStringList")), "Create"));
  {
    const $t20 = (await $.v(C, "DModule1"));
    try {
      await $.wset([$t20], "PolicFormGuid", (await $.wcall([$t20], "StringToGUID", ["{7269AF35-5AC3-406B-8330-29850E49B6A6}"], C)), { get: async () => L0["policformguid"], set: async (v) => { L0["policformguid"] = v; }, local: true });
      { const $t21 = await $.iset((await $.mv((await $.wv([$t20], "P", { get: async () => L0["p"], set: async (v) => { L0["p"] = v; }, local: true }, false)), "Values")), ["ID"], (await $.wcall([$t20], "FloatToStr", [(await $.mv((await $.wv([$t20], "Ins_MotorFullID", C, false)), "Value"))], C))); if ($t21 !== undefined) { await $.mset((await $.wv([$t20], "P", { get: async () => L0["p"], set: async (v) => { L0["p"] = v; }, local: true }, false)), "Values", $t21); } }
      await $.mcall((await $.wv([$t20], "Policy", C, false)), "Close", []);
      await $.stmt((await $.mcall((await $.wv([$t20], "Policy", C, false)), "SetVariable", ["MS_ID", (await $.wcall([$t20], "FloatToStr", [(await $.mv((await $.wv([$t20], "SuggestionId", C, false)), "value"))], C))])));
      await $.mcall((await $.wv([$t20], "Policy", C, false)), "Open", []);
      if ($.truthy($.lt((await $.mv((await $.wv([$t20], "Policy", C, false)), "RecordCount")), 1))) {
        { const $t22 = await $.iset((await $.mv((await $.wv([$t20], "p", { get: async () => L0["p"], set: async (v) => { L0["p"] = v; }, local: true }, false)), "Values")), ["Mod"], "Insert"); if ($t22 !== undefined) { await $.mset((await $.wv([$t20], "p", { get: async () => L0["p"], set: async (v) => { L0["p"] = v; }, local: true }, false)), "Values", $t22); } }
      } else {
        { const $t23 = await $.iset((await $.mv((await $.wv([$t20], "p", { get: async () => L0["p"], set: async (v) => { L0["p"] = v; }, local: true }, false)), "Values")), ["Mod"], "Edit"); if ($t23 !== undefined) { await $.mset((await $.wv([$t20], "p", { get: async () => L0["p"], set: async (v) => { L0["p"] = v; }, local: true }, false)), "Values", $t23); } }
      }
      {
        const $t24 = (await $.wv([$t20], "PlgPolicy", C, false));
        await $.stmt((await $.wcall([$t20, $t24], "ShowModal", [(await $.wv([$t20, $t24], "PolicFormGuid", { get: async () => L0["policformguid"], set: async (v) => { L0["policformguid"] = v; }, local: true }, false)), (await $.wv([$t20, $t24], "p", { get: async () => L0["p"], set: async (v) => { L0["p"] = v; }, local: true }, false))], C)));
      }
    } finally {
      await $.mcall((await $.wv([$t20], "p", { get: async () => L0["p"], set: async (v) => { L0["p"] = v; }, local: true }, false)), "Free", []);
    }
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TMFSuggestion", "DBEdit4Change", async function DBEdit4Change(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mset((await $.v(C, "btApply")), "Enabled", true);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  return U;
}
