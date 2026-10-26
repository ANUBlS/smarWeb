// Generated from UnitRelatedPersons.pas by pas2js — do not edit by hand; regenerate instead.
/* eslint-disable */
// @ts-nocheck

export default function define($) {
  const U = $.unit("UnitRelatedPersons", ["Windows", "Messages", "SysUtils", "Classes", "Graphics", "Controls", "Forms", "Dialogs", "ActiveX", "AxCtrls", "RelatedPersons_TLB", "StdVcl", "StdCtrls", "Buttons", "ComCtrls", "ExtCtrls", "sboapiDataModuleimpl", "Db", "CMExcelExport", "OracleData", "Oracle", "SBTranslateProc", "ComObj", "ComServ"]);
  const C = [U];
  U.defClass("TFormRelatedPersons", "TActiveForm", {"panel1": {"name": "Panel1", "type": "TPanel"}, "groupbox1": {"name": "GroupBox1", "type": "TGroupBox"}, "label2": {"name": "Label2", "type": "TLabel"}, "label3": {"name": "Label3", "type": "TLabel"}, "date1": {"name": "date1", "type": "TDateTimePicker"}, "date2": {"name": "date2", "type": "TDateTimePicker"}, "cb": {"name": "cb", "type": "TComboBox"}, "label1": {"name": "Label1", "type": "TLabel"}, "groupbox2": {"name": "GroupBox2", "type": "TGroupBox"}, "speedbutton3": {"name": "SpeedButton3", "type": "TSpeedButton"}, "checkbox1": {"name": "CheckBox1", "type": "TCheckBox"}, "checkbox2": {"name": "CheckBox2", "type": "TCheckBox"}, "krdt": {"name": "krdt", "type": "TOracleDataSet"}, "cmexp": {"name": "cmexp", "type": "TCMExcelExport"}, "emdt": {"name": "emdt", "type": "TOracleDataSet"}, "out_emdt": {"name": "out_emdt", "type": "TOracleDataSet"}, "qal": {"name": "qal", "type": "TOracleDataSet"}, "periodprefixdata": {"name": "PeriodPrefixData", "type": "TOracleDataSet"}, "periodprefixdataperiodprefix": {"name": "PeriodPrefixDataPERIODPREFIX", "type": "TDateTimeField"}, "qal_out": {"name": "qal_out", "type": "TOracleDataSet"}, "prinad": {"name": "prinad", "type": "TOracleDataSet"}, "qalaccountid": {"name": "qalACCOUNTID", "type": "TFloatField"}, "qalaccno": {"name": "qalACCNO", "type": "TWideStringField"}, "qalacc_name": {"name": "qalACC_NAME", "type": "TWideStringField"}, "qalcurrencyid": {"name": "qalCURRENCYID", "type": "TIntegerField"}, "qalbranchid": {"name": "qalBRANCHID", "type": "TIntegerField"}, "qalbalanceno": {"name": "qalBALANCENO", "type": "TFloatField"}, "qalbeginactive": {"name": "qalBEGINACTIVE", "type": "TFloatField"}, "qalbeginpassive": {"name": "qalBEGINPASSIVE", "type": "TFloatField"}, "qallbeginactive": {"name": "qalLBEGINACTIVE", "type": "TFloatField"}, "qallbeginpassive": {"name": "qalLBEGINPASSIVE", "type": "TFloatField"}, "qaldturnover": {"name": "qalDTURNOVER", "type": "TFloatField"}, "qalcturnover": {"name": "qalCTURNOVER", "type": "TFloatField"}, "qalldturnover": {"name": "qalLDTURNOVER", "type": "TFloatField"}, "qallcturnover": {"name": "qalLCTURNOVER", "type": "TFloatField"}, "qalendactive": {"name": "qalENDACTIVE", "type": "TFloatField"}, "qalendpassive": {"name": "qalENDPASSIVE", "type": "TFloatField"}, "qallendactive": {"name": "qalLENDACTIVE", "type": "TFloatField"}, "qallendpassive": {"name": "qalLENDPASSIVE", "type": "TFloatField"}, "speedbutton1": {"name": "SpeedButton1", "type": "TSpeedButton"}, "speedbutton2": {"name": "SpeedButton2", "type": "TSpeedButton"}, "sysdat": {"name": "sysdat", "type": "TOracleDataSet"}, "shape1": {"name": "Shape1", "type": "TShape"}, "shape2": {"name": "Shape2", "type": "TShape"}, "memo1": {"name": "Memo1", "type": "TMemo"}, "memo2": {"name": "Memo2", "type": "TMemo"}, "qalname_1": {"name": "qalNAME_1", "type": "TWideStringField"}, "cmexcelexport1": {"name": "CMExcelExport1", "type": "TCMExcelExport"}, "fevents": {"name": "FEvents", "type": "IActiveFormXEvents"}}, {});
  U.init(async () => {
  });
  U.method("TFormRelatedPersons", "DefinePropertyPages", async function DefinePropertyPages(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"definepropertypage": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["definepropertypage"]);
  return L0.result;
}, {"params": ["DefinePropertyPage"], "kind": "procedure", "ptypes": ["TDefinePropertyPage"]});
  U.method("TFormRelatedPersons", "EventSinkChanged", async function EventSinkChanged(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"eventsink": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["eventsink"]);
  await $.set(C, "FEvents", L0["eventsink"]);
  return L0.result;
}, {"params": ["EventSink"], "kind": "procedure", "ptypes": ["IUnknown"]});
  U.method("TFormRelatedPersons", "Initialize", async function Initialize(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: undefined};
  await $.inherited(Self, "TFormRelatedPersons", "Initialize", null, arguments);
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
  U.method("TFormRelatedPersons", "Get_Active", async function Get_Active(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: false};
  L0["result"] = (await $.v(C, "Active"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TFormRelatedPersons", "Get_AutoScroll", async function Get_AutoScroll(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: false};
  L0["result"] = (await $.v(C, "AutoScroll"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TFormRelatedPersons", "Get_AutoSize", async function Get_AutoSize(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: false};
  L0["result"] = (await $.v(C, "AutoSize"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TFormRelatedPersons", "Get_AxBorderStyle", async function Get_AxBorderStyle(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: null};
  L0["result"] = (await $.call(C, "Ord", [(await $.v(C, "AxBorderStyle"))]));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TFormRelatedPersons", "Get_Caption", async function Get_Caption(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: ''};
  L0["result"] = (await $.call(C, "WideString", [(await $.v(C, "Caption"))]));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TFormRelatedPersons", "Get_Color", async function Get_Color(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: null};
  L0["result"] = (await $.call(C, "OLE_COLOR", [(await $.v(C, "Color"))]));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TFormRelatedPersons", "Get_Cursor", async function Get_Cursor(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: 0};
  L0["result"] = (await $.call(C, "Smallint", [(await $.v(C, "Cursor"))]));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TFormRelatedPersons", "Get_DoubleBuffered", async function Get_DoubleBuffered(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: false};
  L0["result"] = (await $.v(C, "DoubleBuffered"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TFormRelatedPersons", "Get_DropTarget", async function Get_DropTarget(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: false};
  L0["result"] = (await $.v(C, "DropTarget"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TFormRelatedPersons", "Get_Enabled", async function Get_Enabled(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: false};
  L0["result"] = (await $.v(C, "Enabled"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TFormRelatedPersons", "Get_Font", async function Get_Font(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: null};
  await $.stmt((await $.call(C, "GetOleFont", [(await $.v(C, "Font")), L0["result"]])));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TFormRelatedPersons", "Get_HelpFile", async function Get_HelpFile(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: ''};
  L0["result"] = (await $.call(C, "WideString", [(await $.v(C, "HelpFile"))]));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TFormRelatedPersons", "Get_KeyPreview", async function Get_KeyPreview(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: false};
  L0["result"] = (await $.v(C, "KeyPreview"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TFormRelatedPersons", "Get_PixelsPerInch", async function Get_PixelsPerInch(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: 0};
  L0["result"] = (await $.v(C, "PixelsPerInch"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TFormRelatedPersons", "Get_PrintScale", async function Get_PrintScale(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: null};
  L0["result"] = (await $.call(C, "Ord", [(await $.v(C, "PrintScale"))]));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TFormRelatedPersons", "Get_Scaled", async function Get_Scaled(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: false};
  L0["result"] = (await $.v(C, "Scaled"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TFormRelatedPersons", "Get_Visible", async function Get_Visible(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: false};
  L0["result"] = (await $.v(C, "Visible"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TFormRelatedPersons", "Get_VisibleDockClientCount", async function Get_VisibleDockClientCount(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: 0};
  L0["result"] = (await $.v(C, "VisibleDockClientCount"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TFormRelatedPersons", "_Set_Font", async function _Set_Font(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.stmt((await $.call(C, "SetOleFont", [(await $.v(C, "Font")), L0["value"]])));
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["IFontDisp"]});
  U.method("TFormRelatedPersons", "ActivateEvent", async function ActivateEvent(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.ne((await $.v(C, "FEvents")), null))) {
    await $.mcall((await $.v(C, "FEvents")), "OnActivate", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFormRelatedPersons", "ClickEvent", async function ClickEvent(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.ne((await $.v(C, "FEvents")), null))) {
    await $.mcall((await $.v(C, "FEvents")), "OnClick", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFormRelatedPersons", "CreateEvent", async function CreateEvent(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.ne((await $.v(C, "FEvents")), null))) {
    await $.mcall((await $.v(C, "FEvents")), "OnCreate", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFormRelatedPersons", "DblClickEvent", async function DblClickEvent(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.ne((await $.v(C, "FEvents")), null))) {
    await $.mcall((await $.v(C, "FEvents")), "OnDblClick", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFormRelatedPersons", "DeactivateEvent", async function DeactivateEvent(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.ne((await $.v(C, "FEvents")), null))) {
    await $.mcall((await $.v(C, "FEvents")), "OnDeactivate", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFormRelatedPersons", "DestroyEvent", async function DestroyEvent(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.ne((await $.v(C, "FEvents")), null))) {
    await $.mcall((await $.v(C, "FEvents")), "OnDestroy", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFormRelatedPersons", "KeyPressEvent", async function KeyPressEvent(Self, p0, p1) {
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
  U.method("TFormRelatedPersons", "PaintEvent", async function PaintEvent(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.ne((await $.v(C, "FEvents")), null))) {
    await $.mcall((await $.v(C, "FEvents")), "OnPaint", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFormRelatedPersons", "Set_AutoScroll", async function Set_AutoScroll(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "AutoScroll", L0["value"]);
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["WordBool"]});
  U.method("TFormRelatedPersons", "Set_AutoSize", async function Set_AutoSize(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "AutoSize", L0["value"]);
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["WordBool"]});
  U.method("TFormRelatedPersons", "Set_AxBorderStyle", async function Set_AxBorderStyle(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "AxBorderStyle", (await $.call(C, "TActiveFormBorderStyle", [L0["value"]])));
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["TxActiveFormBorderStyle"]});
  U.method("TFormRelatedPersons", "Set_Caption", async function Set_Caption(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "Caption", (await $.call(C, "TCaption", [L0["value"]])));
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["WideString"]});
  U.method("TFormRelatedPersons", "Set_Color", async function Set_Color(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "Color", (await $.call(C, "TColor", [L0["value"]])));
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["OLE_COLOR"]});
  U.method("TFormRelatedPersons", "Set_Cursor", async function Set_Cursor(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "Cursor", (await $.call(C, "TCursor", [L0["value"]])));
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["Smallint"]});
  U.method("TFormRelatedPersons", "Set_DoubleBuffered", async function Set_DoubleBuffered(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "DoubleBuffered", L0["value"]);
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["WordBool"]});
  U.method("TFormRelatedPersons", "Set_DropTarget", async function Set_DropTarget(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "DropTarget", L0["value"]);
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["WordBool"]});
  U.method("TFormRelatedPersons", "Set_Enabled", async function Set_Enabled(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "Enabled", L0["value"]);
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["WordBool"]});
  U.method("TFormRelatedPersons", "Set_Font", async function Set_Font(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.asRef(p0), result: undefined};
  await $.stmt((await $.call(C, "SetOleFont", [(await $.v(C, "Font")), (await L0["value"].get())])));
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["IFontDisp"]});
  U.method("TFormRelatedPersons", "Set_HelpFile", async function Set_HelpFile(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "HelpFile", (await $.call(C, "String", [L0["value"]])));
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["WideString"]});
  U.method("TFormRelatedPersons", "Set_KeyPreview", async function Set_KeyPreview(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "KeyPreview", L0["value"]);
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["WordBool"]});
  U.method("TFormRelatedPersons", "Set_PixelsPerInch", async function Set_PixelsPerInch(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "PixelsPerInch", L0["value"]);
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["Integer"]});
  U.method("TFormRelatedPersons", "Set_PrintScale", async function Set_PrintScale(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "PrintScale", (await $.call(C, "TPrintScale", [L0["value"]])));
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["TxPrintScale"]});
  U.method("TFormRelatedPersons", "Set_Scaled", async function Set_Scaled(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "Scaled", L0["value"]);
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["WordBool"]});
  U.method("TFormRelatedPersons", "Set_Visible", async function Set_Visible(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "Visible", L0["value"]);
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["WordBool"]});
  U.method("TFormRelatedPersons", "SpeedButton3Click", async function SpeedButton3Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "prinadid": 0};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.ne((await $.mv((await $.v(C, "cb")), "ItemIndex")), 0))) {
    L0["prinadid"] = (await $.call(C, "strtoint", [(await $.idx((await $.mv((await $.v(C, "memo1")), "lines")), [$.sub((await $.mv((await $.v(C, "cb")), "ItemIndex")), 1)]))]));
  }
  await $.mcall((await $.v(C, "krdt")), "closeall", []);
  await $.stmt((await $.mcall((await $.v(C, "krdt")), "SetVariable", [":dd", (await $.call(C, "integer", [(await $.call(C, "trunc", [(await $.mv((await $.v(C, "date2")), "datetime"))]))]))])));
  if ($.truthy($.ne((await $.mv((await $.v(C, "cb")), "ItemIndex")), 0))) {
    { const $t1 = await $.iset((await $.mv((await $.v(C, "krdt")), "SQL")), [10], $.add($.add(" and cu.prinad_kod=", (await $.call(C, "inttostr", [L0["prinadid"]]))), "")); if ($t1 !== undefined) { await $.mset((await $.v(C, "krdt")), "SQL", $t1); } }
  } else {
    { const $t2 = await $.iset((await $.mv((await $.v(C, "krdt")), "SQL")), [10], "and nvl(cu.prinad_kod,0)<>0"); if ($t2 !== undefined) { await $.mset((await $.v(C, "krdt")), "SQL", $t2); } }
  }
  await $.mset((await $.v(C, "memo2")), "text", (await $.mv((await $.mv((await $.v(C, "krdt")), "sql")), "text")));
  await $.mcall((await $.v(C, "krdt")), "Open", []);
  if ($.truthy($.ne((await $.mv((await $.v(C, "cb")), "ItemIndex")), 0))) {
    await $.mset((await $.mcall((await $.v(C, "krdt")), "FieldByName", ["name_1"])), "visible", false);
  } else {
    await $.mset((await $.mcall((await $.v(C, "krdt")), "FieldByName", ["name_1"])), "visible", true);
  }
  await $.mcall((await $.v(C, "cmexp")), "Connect", []);
  await $.stmt((await $.mcall((await $.v(C, "cmexp")), "ExportDataset", [(await $.v(C, "krdt")), "List1", true])));
  await $.mcall((await $.v(C, "cmexp")), "Disconnect", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFormRelatedPersons", "Button1Click", async function Button1Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.stmt($.call(C, "close", []));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFormRelatedPersons", "ActiveFormCreate", async function ActiveFormCreate(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "i": 0};
  await $.fixArgs(L0, ["sender"]);
  await $.set(C, "shortdateformat", "dd.mm.yyyy");
  await $.mcall((await $.v(C, "sysdat")), "Open", []);
  await $.mset((await $.v(C, "date1")), "Date", (await $.call(C, "trunc", [(await $.mv((await $.mcall((await $.v(C, "sysdat")), "fieldbyname", ["tek_dat"])), "asdatetime"))])));
  await $.mset((await $.v(C, "date2")), "Date", (await $.mv((await $.v(C, "date1")), "Date")));
  await $.mcall((await $.v(C, "prinad")), "open", []);
  await $.mcall((await $.v(C, "prinad")), "First", []);
  { const $t3 = (await $.mv((await $.v(C, "prinad")), "RecordCount"));
    L0["i"] = 1;
    let $t4 = true;
    for (;;) {
      if (!$t4) { L0["i"] = $.succ(L0["i"], 1); }
      $t4 = false;
      if (!($.ord(L0["i"]) <= $.ord($t3))) break;
      await $.stmt((await $.mcall((await $.mv((await $.v(C, "cb")), "Items")), "Add", [(await $.mv((await $.mcall((await $.v(C, "prinad")), "fieldbyname", ["name"])), "asstring"))])));
      await $.stmt((await $.mcall((await $.mv((await $.v(C, "memo1")), "Lines")), "Add", [(await $.mv((await $.mcall((await $.v(C, "prinad")), "fieldbyname", ["ID"])), "asstring"))])));
      await $.mcall((await $.v(C, "prinad")), "Next", []);
      await $.tick();
    }
  }
  await $.mset((await $.v(C, "cb")), "ItemIndex", 0);
  await $.stmt((await $.mcall((await $.v(C, "SBTranslateProc")), "TranslateAllComponents", [Self, (await $.mv((await $.v(C, "sboapiDataModule")), "OrPack_SL"))])));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFormRelatedPersons", "SpeedButton2Click", async function SpeedButton2Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "prinadid": 0};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.ne((await $.mv((await $.v(C, "cb")), "ItemIndex")), 0))) {
    L0["prinadid"] = (await $.call(C, "strtoint", [(await $.idx((await $.mv((await $.v(C, "memo1")), "lines")), [$.sub((await $.mv((await $.v(C, "cb")), "ItemIndex")), 1)]))]));
  }
  await $.mset((await $.v(C, "emdt")), "active", false);
  await $.stmt((await $.mcall((await $.v(C, "emdt")), "SetVariable", [":d1", (await $.call(C, "integer", [(await $.call(C, "trunc", [(await $.mv((await $.v(C, "date1")), "datetime"))]))]))])));
  await $.stmt((await $.mcall((await $.v(C, "emdt")), "SetVariable", [":d2", (await $.call(C, "integer", [(await $.call(C, "trunc", [(await $.mv((await $.v(C, "date2")), "datetime"))]))]))])));
  if ($.truthy($.ne((await $.mv((await $.v(C, "cb")), "ItemIndex")), 0))) {
    { const $t5 = await $.iset((await $.mv((await $.v(C, "emdt")), "SQL")), [27], $.add($.add("and cu.prinad_kod=", (await $.call(C, "inttostr", [L0["prinadid"]]))), "")); if ($t5 !== undefined) { await $.mset((await $.v(C, "emdt")), "SQL", $t5); } }
  } else {
    { const $t6 = await $.iset((await $.mv((await $.v(C, "emdt")), "SQL")), [27], "and nvl(cu.prinad_kod,0) <>0"); if ($t6 !== undefined) { await $.mset((await $.v(C, "emdt")), "SQL", $t6); } }
  }
  await $.mcall((await $.v(C, "emdt")), "open", []);
  if ($.truthy($.ne((await $.mv((await $.v(C, "cb")), "ItemIndex")), 0))) {
    await $.mset((await $.mcall((await $.v(C, "emdt")), "FieldByName", ["name_1"])), "visible", false);
  } else {
    await $.mset((await $.mcall((await $.v(C, "emdt")), "FieldByName", ["name_1"])), "visible", true);
  }
  if ($.truthy((await $.mv((await $.v(C, "checkbox2")), "Checked")))) {
    await $.mset((await $.v(C, "out_emdt")), "active", false);
    await $.stmt((await $.mcall((await $.v(C, "out_emdt")), "SetVariable", [":d1", (await $.call(C, "integer", [(await $.call(C, "trunc", [(await $.mv((await $.v(C, "date1")), "datetime"))]))]))])));
    await $.stmt((await $.mcall((await $.v(C, "out_emdt")), "SetVariable", [":d2", (await $.call(C, "integer", [(await $.call(C, "trunc", [(await $.mv((await $.v(C, "date2")), "datetime"))]))]))])));
    if ($.truthy($.ne((await $.mv((await $.v(C, "cb")), "ItemIndex")), 0))) {
      { const $t7 = await $.iset((await $.mv((await $.v(C, "out_emdt")), "SQL")), [27], $.add($.add("and cu.prinad_kod=", (await $.call(C, "inttostr", [L0["prinadid"]]))), "")); if ($t7 !== undefined) { await $.mset((await $.v(C, "out_emdt")), "SQL", $t7); } }
    } else {
      { const $t8 = await $.iset((await $.mv((await $.v(C, "out_emdt")), "SQL")), [27], "and nvl(cu.prinad_kod,0)<>0"); if ($t8 !== undefined) { await $.mset((await $.v(C, "out_emdt")), "SQL", $t8); } }
    }
    await $.mset((await $.v(C, "memo2")), "Text", (await $.mv((await $.mv((await $.v(C, "out_emdt")), "SQL")), "Text")));
    await $.mcall((await $.v(C, "out_emdt")), "open", []);
    if ($.truthy($.ne((await $.mv((await $.v(C, "cb")), "ItemIndex")), 0))) {
      await $.mset((await $.mcall((await $.v(C, "out_emdt")), "FieldByName", ["name_1"])), "visible", false);
    } else {
      await $.mset((await $.mcall((await $.v(C, "out_emdt")), "FieldByName", ["name_1"])), "visible", true);
    }
  }
  await $.mcall((await $.v(C, "cmexp")), "Connect", []);
  await $.stmt((await $.mcall((await $.v(C, "cmexp")), "ExportDataset", [(await $.v(C, "emdt")), "List1", true])));
  if ($.truthy((await $.and_((await $.mv((await $.v(C, "checkbox2")), "checked")), async () => ($.gt((await $.mv((await $.v(C, "out_emdt")), "RecordCount")), 0)))))) {
    await $.stmt((await $.mcall((await $.v(C, "cmexp")), "ExportDataset", [(await $.v(C, "out_emdt")), "List1-out", true])));
  }
  await $.mcall((await $.v(C, "cmexp")), "Disconnect", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFormRelatedPersons", "SpeedButton1Click", async function SpeedButton1Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "beginperiod": 0, "prinadid": 0};
  await $.fixArgs(L0, ["sender"]);
  L0["getperiodprefix"] = $.fn(async function GetPeriodPrefix(p0) {
  const L1 = {"adate": $.copyArg(p0), result: 0};
  await $.fixArgs(L1, ["adate"]);
  {
    const $t9 = (await $.v(C, "periodprefixdata"));
    if ($.truthy((await $.wv([$t9], "Active", C, false)))) {
      await $.stmt($.wcall([$t9], "CloseAll", [], C));
    }
    await $.stmt((await $.wcall([$t9], "SetVariable", ["ADate", (await $.wv([$t9], "ADate", { get: async () => L1["adate"], set: async (v) => { L1["adate"] = v; }, local: true }, false))], C)));
    await $.stmt($.wcall([$t9], "Open", [], C));
    if ($.truthy((await $.mv((await $.wcall([$t9], "FieldByName", ["PeriodPrefix"], C)), "IsNull")))) {
      await $.wset([$t9], "Result", (await $.wv([$t9], "ADate", { get: async () => L1["adate"], set: async (v) => { L1["adate"] = v; }, local: true }, false)), { get: async () => L1["result"], set: async (v) => { L1["result"] = v; }, local: true });
    } else {
      await $.wset([$t9], "Result", (await $.mv((await $.wcall([$t9], "FieldByName", ["PeriodPrefix"], C)), "AsDateTime")), { get: async () => L1["result"], set: async (v) => { L1["result"] = v; }, local: true });
    }
  }
  return L1.result;
});
  if ($.truthy($.ne((await $.mv((await $.v(C, "cb")), "ItemIndex")), 0))) {
    L0["prinadid"] = (await $.call(C, "strtoint", [(await $.idx((await $.mv((await $.v(C, "memo1")), "lines")), [$.sub((await $.mv((await $.v(C, "cb")), "ItemIndex")), 1)]))]));
  }
  await $.mset((await $.v(C, "screen")), "Cursor", (await $.v(C, "crsqlwait")));
  await $.mset((await $.v(C, "qal")), "Active", false);
  await $.stmt((await $.mcall((await $.v(C, "qal")), "SetVariable", [":begindate", (await $.call(C, "integer", [(await $.call(C, "trunc", [(await $.mv((await $.v(C, "date1")), "datetime"))]))]))])));
  await $.stmt((await $.mcall((await $.v(C, "qal")), "SetVariable", [":enddate", (await $.call(C, "integer", [(await $.call(C, "trunc", [(await $.mv((await $.v(C, "date2")), "datetime"))]))]))])));
  L0["beginperiod"] = (await $.callv(L0["getperiodprefix"], [(await $.call(C, "integer", [(await $.call(C, "trunc", [(await $.mv((await $.v(C, "date1")), "datetime"))]))]))]));
  await $.stmt((await $.mcall((await $.v(C, "qal")), "SetVariable", [":beginperiod", L0["beginperiod"]])));
  if ($.truthy($.ne((await $.mv((await $.v(C, "cb")), "ItemIndex")), 0))) {
    { const $t10 = await $.iset((await $.mv((await $.v(C, "qal")), "SQL")), [50], $.add($.add("(select * from Account where kli_id in (select id from Customers cu where prinad_kod =", (await $.call(C, "inttostr", [L0["prinadid"]]))), ")) ac,")); if ($t10 !== undefined) { await $.mset((await $.v(C, "qal")), "SQL", $t10); } }
    { const $t11 = await $.iset((await $.mv((await $.v(C, "qal")), "SQL")), [92], $.add($.add("(select * from Account where kli_id in (select id from Customers  cu where prinad_kod =", (await $.call(C, "inttostr", [L0["prinadid"]]))), ")) ac,")); if ($t11 !== undefined) { await $.mset((await $.v(C, "qal")), "SQL", $t11); } }
    { const $t12 = await $.iset((await $.mv((await $.v(C, "qal")), "SQL")), [112], $.add($.add("(select * from Account where kli_id in (select id from Customers cu where prinad_kod =", (await $.call(C, "inttostr", [L0["prinadid"]]))), ")) ac,")); if ($t12 !== undefined) { await $.mset((await $.v(C, "qal")), "SQL", $t12); } }
  } else {
    { const $t13 = await $.iset((await $.mv((await $.v(C, "qal")), "SQL")), [50], "(select * from Account where kli_id in(select id from Customers where nvl(prinad_kod,0)<>0)) ac,"); if ($t13 !== undefined) { await $.mset((await $.v(C, "qal")), "SQL", $t13); } }
    { const $t14 = await $.iset((await $.mv((await $.v(C, "qal")), "SQL")), [92], "(select * from Account where kli_id in(select id from Customers where nvl(prinad_kod,0)<>0)) ac,"); if ($t14 !== undefined) { await $.mset((await $.v(C, "qal")), "SQL", $t14); } }
    { const $t15 = await $.iset((await $.mv((await $.v(C, "qal")), "SQL")), [112], "(select * from Account where kli_id in(select id from Customers where nvl(prinad_kod,0)<>0)) ac,"); if ($t15 !== undefined) { await $.mset((await $.v(C, "qal")), "SQL", $t15); } }
  }
  await $.mcall((await $.v(C, "qal")), "Open", []);
  if ($.truthy($.ne((await $.mv((await $.v(C, "cb")), "ItemIndex")), 0))) {
    await $.mset((await $.mcall((await $.v(C, "qal")), "FieldByName", ["name_1"])), "visible", false);
  } else {
    await $.mset((await $.mcall((await $.v(C, "qal")), "FieldByName", ["name_1"])), "visible", true);
  }
  await $.mset((await $.v(C, "screen")), "Cursor", (await $.v(C, "crdefault")));
  await $.mset((await $.v(C, "memo2")), "text", (await $.mv((await $.mv((await $.v(C, "qal")), "sql")), "text")));
  if ($.truthy((await $.mv((await $.v(C, "checkbox1")), "Checked")))) {
    await $.mset((await $.v(C, "screen")), "Cursor", (await $.v(C, "crsqlwait")));
    await $.mset((await $.v(C, "qal_out")), "Active", false);
    await $.stmt((await $.mcall((await $.v(C, "qal_out")), "SetVariable", [":begindate", (await $.call(C, "integer", [(await $.call(C, "trunc", [(await $.mv((await $.v(C, "date1")), "datetime"))]))]))])));
    await $.stmt((await $.mcall((await $.v(C, "qal_out")), "SetVariable", [":enddate", (await $.call(C, "integer", [(await $.call(C, "trunc", [(await $.mv((await $.v(C, "date2")), "datetime"))]))]))])));
    L0["beginperiod"] = (await $.callv(L0["getperiodprefix"], [(await $.call(C, "integer", [(await $.call(C, "trunc", [(await $.mv((await $.v(C, "date1")), "datetime"))]))]))]));
    await $.stmt((await $.mcall((await $.v(C, "qal_out")), "SetVariable", [":beginperiod", L0["beginperiod"]])));
    if ($.truthy($.ne((await $.mv((await $.v(C, "cb")), "ItemIndex")), 0))) {
      { const $t16 = await $.iset((await $.mv((await $.v(C, "qal_OUT")), "SQL")), [50], $.add($.add("(select * from out_Account where kli_id in (select id from Customers cu where prinad_kod =", (await $.call(C, "inttostr", [L0["prinadid"]]))), ")) ac,")); if ($t16 !== undefined) { await $.mset((await $.v(C, "qal_OUT")), "SQL", $t16); } }
      { const $t17 = await $.iset((await $.mv((await $.v(C, "qal_out")), "SQL")), [92], $.add($.add("(select * from out_Account where kli_id in (select id from Customers cu  where prinad_kod =", (await $.call(C, "inttostr", [L0["prinadid"]]))), ")) ac,")); if ($t17 !== undefined) { await $.mset((await $.v(C, "qal_out")), "SQL", $t17); } }
      { const $t18 = await $.iset((await $.mv((await $.v(C, "qal_out")), "SQL")), [112], $.add($.add("(select * from out_Account where kli_id in (select id from Customers cu where prinad_kod =", (await $.call(C, "inttostr", [L0["prinadid"]]))), ")) ac,")); if ($t18 !== undefined) { await $.mset((await $.v(C, "qal_out")), "SQL", $t18); } }
    } else {
      { const $t19 = await $.iset((await $.mv((await $.v(C, "qal_out")), "SQL")), [50], "(select * from out_Account where kli_id in(select id from Customers where nvl(prinad_kod,0)<>0)) ac,"); if ($t19 !== undefined) { await $.mset((await $.v(C, "qal_out")), "SQL", $t19); } }
      { const $t20 = await $.iset((await $.mv((await $.v(C, "qal_out")), "SQL")), [92], "(select * from out_Account where kli_id in(select id from Customers where nvl(prinad_kod,0)<>0)) ac,"); if ($t20 !== undefined) { await $.mset((await $.v(C, "qal_out")), "SQL", $t20); } }
      { const $t21 = await $.iset((await $.mv((await $.v(C, "qal_out")), "SQL")), [112], "(select * from out_Account where kli_id in(select id from Customers where nvl(prinad_kod,0)<>0)) ac,"); if ($t21 !== undefined) { await $.mset((await $.v(C, "qal_out")), "SQL", $t21); } }
    }
    await $.mcall((await $.v(C, "qal_out")), "Open", []);
    if ($.truthy($.ne((await $.mv((await $.v(C, "cb")), "ItemIndex")), 0))) {
      await $.mset((await $.mcall((await $.v(C, "qal_out")), "FieldByName", ["name_1"])), "visible", false);
    } else {
      await $.mset((await $.mcall((await $.v(C, "qal_out")), "FieldByName", ["name_1"])), "visible", true);
    }
    await $.mset((await $.v(C, "screen")), "Cursor", (await $.v(C, "crdefault")));
  }
  await $.mcall((await $.v(C, "cmexp")), "Connect", []);
  if ($.truthy((await $.mv((await $.v(C, "checkbox1")), "checked")))) {
    await $.stmt((await $.mcall((await $.v(C, "cmexp")), "ExportDataset", [(await $.v(C, "qal_out")), "List2-out", true])));
  }
  await $.stmt((await $.mcall((await $.v(C, "cmexp")), "ExportDataset", [(await $.v(C, "qal")), "List2", true])));
  await $.mcall((await $.v(C, "cmexp")), "Disconnect", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFormRelatedPersons", "cbChange", async function cbChange(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  return U;
}
