// Generated from fmMEDSuggestionImpl.pas by pas2js — do not edit by hand; regenerate instead.
/* eslint-disable */
// @ts-nocheck

export default function define($) {
  const U = $.unit("fmMEDSuggestionImpl", ["Windows", "Messages", "SysUtils", "Classes", "Graphics", "Controls", "Forms", "Dialogs", "ActiveX", "AxCtrls", "MEDSuggestion_TLB", "StdVcl", "PlgModalContainer", "INSWordExporter", "Db", "OracleData", "StdCtrls", "ExtCtrls", "HintBox", "DBCtrls", "ComCtrls", "Buttons", "Mask", "SBPlgAx50_TLB", "ComObj", "ComServ", "sboapiDataModuleImpl"]);
  const C = [U];
  U.defClass("TfmMEDSuggestion", "TActiveForm", {"groupbox1": {"name": "GroupBox1", "type": "TGroupBox"}, "label3": {"name": "Label3", "type": "TLabel"}, "dbedit2": {"name": "DBEdit2", "type": "TDBEdit"}, "groupbox2": {"name": "GroupBox2", "type": "TGroupBox"}, "label6": {"name": "Label6", "type": "TLabel"}, "label8": {"name": "Label8", "type": "TLabel"}, "label10": {"name": "Label10", "type": "TLabel"}, "label12": {"name": "Label12", "type": "TLabel"}, "ckmonth": {"name": "ckMonth", "type": "TCheckBox"}, "ckyear": {"name": "ckYear", "type": "TCheckBox"}, "dbedit5": {"name": "DBEdit5", "type": "TDBEdit"}, "dbedit6": {"name": "DBEdit6", "type": "TDBEdit"}, "dbedit7": {"name": "DBEdit7", "type": "TDBEdit"}, "dtpcontractdate": {"name": "DTPContractDate", "type": "TDateTimePicker"}, "hberrmsg": {"name": "hbErrMsg", "type": "THintBox"}, "panel1": {"name": "Panel1", "type": "TPanel"}, "bitbtn1": {"name": "BitBtn1", "type": "TBitBtn"}, "bitbtn2": {"name": "BitBtn2", "type": "TBitBtn"}, "btapply": {"name": "btApply", "type": "TBitBtn"}, "btpolicy": {"name": "btPolicy", "type": "TBitBtn"}, "dscusts": {"name": "DSCusts", "type": "TDataSource"}, "odscusts": {"name": "ODSCusts", "type": "TOracleDataSet"}, "odscustsid": {"name": "ODSCustsID", "type": "TIntegerField"}, "odscustsname": {"name": "ODSCustsNAME", "type": "TStringField"}, "odscustsaddress": {"name": "ODSCustsADDRESS", "type": "TStringField"}, "odsbankinfo": {"name": "ODSBankinfo", "type": "TOracleDataSet"}, "odsbankinfobank": {"name": "ODSBankinfoBANK", "type": "TStringField"}, "odsbankinfoaz_name": {"name": "ODSBankinfoAZ_NAME", "type": "TStringField"}, "odsbankinfoseher": {"name": "ODSBankinfoSEHER", "type": "TStringField"}, "odsbankinfoadress": {"name": "ODSBankinfoADRESS", "type": "TStringField"}, "odsbankinfotel": {"name": "ODSBankinfoTEL", "type": "TStringField"}, "odsbankinfofax": {"name": "ODSBankinfoFAX", "type": "TStringField"}, "odsbankinfoemail": {"name": "ODSBankinfoEMAIL", "type": "TStringField"}, "dsbankinfo": {"name": "DSBankinfo", "type": "TDataSource"}, "odsmeds": {"name": "ODSMEDS", "type": "TOracleDataSet"}, "dsmeds": {"name": "DSMEDS", "type": "TDataSource"}, "suggestionreport": {"name": "SuggestionReport", "type": "TINSWordExporter"}, "pmcpolicy": {"name": "pmcPolicy", "type": "TPlgModalContainer"}, "label2": {"name": "Label2", "type": "TLabel"}, "dbedit1": {"name": "DBEdit1", "type": "TDBEdit"}, "label1": {"name": "Label1", "type": "TLabel"}, "dbedit3": {"name": "DBEdit3", "type": "TDBEdit"}, "odsmedsid": {"name": "ODSMEDSID", "type": "TFloatField"}, "odsmedsmed_id": {"name": "ODSMEDSMED_ID", "type": "TFloatField"}, "odsmedsinsurancetime": {"name": "ODSMEDSINSURANCETIME", "type": "TFloatField"}, "odsmedsenddate": {"name": "ODSMEDSENDDATE", "type": "TDateTimeField"}, "odsmedsitspec": {"name": "ODSMEDSITSPEC", "type": "TStringField"}, "odsmedical": {"name": "ODSMedical", "type": "TOracleDataSet"}, "odsmedicalempnum": {"name": "ODSMedicalEMPNUM", "type": "TIntegerField"}, "btprint": {"name": "btPrint", "type": "TBitBtn"}, "odsmedsinssum": {"name": "ODSMEDSINSSUM", "type": "TFloatField"}, "odsmedsinsammounteveryone": {"name": "ODSMEDSINSAMMOUNTEVERYONE", "type": "TFloatField"}, "odsmedsinsammountall": {"name": "ODSMEDSINSAMMOUNTALL", "type": "TFloatField"}, "odscontracts": {"name": "ODSCONTRACTS", "type": "TOracleDataSet"}, "dscontracts": {"name": "DSCONTRACTS", "type": "TDataSource"}, "odscontractsid": {"name": "ODSCONTRACTSID", "type": "TFloatField"}, "odscontractstype_id": {"name": "ODSCONTRACTSTYPE_ID", "type": "TFloatField"}, "odscontractsblank_id": {"name": "ODSCONTRACTSBLANK_ID", "type": "TFloatField"}, "odscontractssugg_id": {"name": "ODSCONTRACTSSUGG_ID", "type": "TFloatField"}, "odscontractspolicy_id": {"name": "ODSCONTRACTSPOLICY_ID", "type": "TFloatField"}, "odscontractsins_date": {"name": "ODSCONTRACTSINS_DATE", "type": "TDateTimeField"}, "odscontractsbegin_date": {"name": "ODSCONTRACTSBEGIN_DATE", "type": "TDateTimeField"}, "odscontractsend_date": {"name": "ODSCONTRACTSEND_DATE", "type": "TDateTimeField"}, "odscontractsvalute_id": {"name": "ODSCONTRACTSVALUTE_ID", "type": "TFloatField"}, "odscontractsammount": {"name": "ODSCONTRACTSAMMOUNT", "type": "TFloatField"}, "odscontractsclose_prefix": {"name": "ODSCONTRACTSCLOSE_PREFIX", "type": "TIntegerField"}, "odscontractskli_id": {"name": "ODSCONTRACTSKLI_ID", "type": "TFloatField"}, "odscontractsloanacc_id": {"name": "ODSCONTRACTSLOANACC_ID", "type": "TFloatField"}, "odscontractscurracc_id": {"name": "ODSCONTRACTSCURRACC_ID", "type": "TFloatField"}, "odscontractspolicy_num": {"name": "ODSCONTRACTSPOLICY_NUM", "type": "TStringField"}, "label4": {"name": "Label4", "type": "TLabel"}, "dblookupcombobox1": {"name": "DBLookupComboBox1", "type": "TDBLookupComboBox"}, "odsavalute": {"name": "ODSAvalute", "type": "TOracleDataSet"}, "odsavalutevalute": {"name": "ODSAvaluteVALUTE", "type": "TIntegerField"}, "odsavaluteval_name": {"name": "ODSAvaluteVAL_NAME", "type": "TStringField"}, "odsavalutevalu_name": {"name": "ODSAvaluteVALU_NAME", "type": "TStringField"}, "odsavalutevalu_short": {"name": "ODSAvaluteVALU_SHORT", "type": "TStringField"}, "dsavalute": {"name": "DSAvalute", "type": "TDataSource"}, "fparams": {"name": "FParams", "type": "TStrings"}, "fownerhandle": {"name": "FOwnerHandle", "type": "Integer"}, "id": {"name": "ID", "type": "Integer"}, "issaved": {"name": "IsSaved", "type": "Boolean"}, "fevents": {"name": "FEvents", "type": "IfmMEDSuggestionEvents"}}, {"params": {"name": "Params", "read": "Get_Params", "write": "Set_Params"}});
  U.init(async () => {
    U.const("WM_ModalResult", $.add((await $.v(C, "WM_USER")), 139));
    U.const("fmCaption", "Tibbi sigorta teklifname formasi: (%s)");
    U.var_("fmMEDSuggestion", null, "TfmMEDSuggestion");
  });
  U.method("TfmMEDSuggestion", "DefinePropertyPages", async function DefinePropertyPages(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"definepropertypage": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["definepropertypage"]);
  return L0.result;
}, {"params": ["DefinePropertyPage"], "kind": "procedure", "ptypes": ["TDefinePropertyPage"]});
  U.method("TfmMEDSuggestion", "EventSinkChanged", async function EventSinkChanged(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"eventsink": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["eventsink"]);
  await $.set(C, "FEvents", L0["eventsink"]);
  return L0.result;
}, {"params": ["EventSink"], "kind": "procedure", "ptypes": ["IUnknown"]});
  U.method("TfmMEDSuggestion", "Initialize", async function Initialize(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: undefined};
  await $.inherited(Self, "TfmMEDSuggestion", "Initialize", null, arguments);
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
  U.method("TfmMEDSuggestion", "Get_Active", async function Get_Active(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: false};
  L0["result"] = (await $.v(C, "Active"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TfmMEDSuggestion", "Get_AutoScroll", async function Get_AutoScroll(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: false};
  L0["result"] = (await $.v(C, "AutoScroll"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TfmMEDSuggestion", "Get_AutoSize", async function Get_AutoSize(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: false};
  L0["result"] = (await $.v(C, "AutoSize"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TfmMEDSuggestion", "Get_AxBorderStyle", async function Get_AxBorderStyle(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: null};
  L0["result"] = (await $.call(C, "Ord", [(await $.v(C, "AxBorderStyle"))]));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TfmMEDSuggestion", "Get_Caption", async function Get_Caption(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: ''};
  L0["result"] = (await $.call(C, "WideString", [(await $.v(C, "Caption"))]));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TfmMEDSuggestion", "Get_Color", async function Get_Color(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: null};
  L0["result"] = (await $.call(C, "OLE_COLOR", [(await $.v(C, "Color"))]));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TfmMEDSuggestion", "Get_Cursor", async function Get_Cursor(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: 0};
  L0["result"] = (await $.call(C, "Smallint", [(await $.v(C, "Cursor"))]));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TfmMEDSuggestion", "Get_DoubleBuffered", async function Get_DoubleBuffered(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: false};
  L0["result"] = (await $.v(C, "DoubleBuffered"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TfmMEDSuggestion", "Get_DropTarget", async function Get_DropTarget(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: false};
  L0["result"] = (await $.v(C, "DropTarget"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TfmMEDSuggestion", "Get_Enabled", async function Get_Enabled(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: false};
  L0["result"] = (await $.v(C, "Enabled"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TfmMEDSuggestion", "Get_Font", async function Get_Font(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: null};
  await $.stmt((await $.call(C, "GetOleFont", [(await $.v(C, "Font")), L0["result"]])));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TfmMEDSuggestion", "Get_HelpFile", async function Get_HelpFile(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: ''};
  L0["result"] = (await $.call(C, "WideString", [(await $.v(C, "HelpFile"))]));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TfmMEDSuggestion", "Get_KeyPreview", async function Get_KeyPreview(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: false};
  L0["result"] = (await $.v(C, "KeyPreview"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TfmMEDSuggestion", "Get_PixelsPerInch", async function Get_PixelsPerInch(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: 0};
  L0["result"] = (await $.v(C, "PixelsPerInch"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TfmMEDSuggestion", "Get_PrintScale", async function Get_PrintScale(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: null};
  L0["result"] = (await $.call(C, "Ord", [(await $.v(C, "PrintScale"))]));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TfmMEDSuggestion", "Get_Scaled", async function Get_Scaled(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: false};
  L0["result"] = (await $.v(C, "Scaled"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TfmMEDSuggestion", "Get_Visible", async function Get_Visible(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: false};
  L0["result"] = (await $.v(C, "Visible"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TfmMEDSuggestion", "Get_VisibleDockClientCount", async function Get_VisibleDockClientCount(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: 0};
  L0["result"] = (await $.v(C, "VisibleDockClientCount"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TfmMEDSuggestion", "_Set_Font", async function _Set_Font(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.stmt((await $.call(C, "SetOleFont", [(await $.v(C, "Font")), L0["value"]])));
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["IFontDisp"]});
  U.method("TfmMEDSuggestion", "ActivateEvent", async function ActivateEvent(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.ne((await $.v(C, "FEvents")), null))) {
    await $.mcall((await $.v(C, "FEvents")), "OnActivate", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TfmMEDSuggestion", "ClickEvent", async function ClickEvent(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.ne((await $.v(C, "FEvents")), null))) {
    await $.mcall((await $.v(C, "FEvents")), "OnClick", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TfmMEDSuggestion", "CreateEvent", async function CreateEvent(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.ne((await $.v(C, "FEvents")), null))) {
    await $.mcall((await $.v(C, "FEvents")), "OnCreate", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TfmMEDSuggestion", "DblClickEvent", async function DblClickEvent(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.ne((await $.v(C, "FEvents")), null))) {
    await $.mcall((await $.v(C, "FEvents")), "OnDblClick", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TfmMEDSuggestion", "DeactivateEvent", async function DeactivateEvent(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.ne((await $.v(C, "FEvents")), null))) {
    await $.mcall((await $.v(C, "FEvents")), "OnDeactivate", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TfmMEDSuggestion", "DestroyEvent", async function DestroyEvent(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.ne((await $.v(C, "FEvents")), null))) {
    await $.mcall((await $.v(C, "FEvents")), "OnDestroy", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TfmMEDSuggestion", "KeyPressEvent", async function KeyPressEvent(Self, p0, p1) {
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
  U.method("TfmMEDSuggestion", "PaintEvent", async function PaintEvent(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.ne((await $.v(C, "FEvents")), null))) {
    await $.mcall((await $.v(C, "FEvents")), "OnPaint", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TfmMEDSuggestion", "Set_AutoScroll", async function Set_AutoScroll(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "AutoScroll", L0["value"]);
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["WordBool"]});
  U.method("TfmMEDSuggestion", "Set_AutoSize", async function Set_AutoSize(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "AutoSize", L0["value"]);
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["WordBool"]});
  U.method("TfmMEDSuggestion", "Set_AxBorderStyle", async function Set_AxBorderStyle(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "AxBorderStyle", (await $.call(C, "TActiveFormBorderStyle", [L0["value"]])));
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["TxActiveFormBorderStyle"]});
  U.method("TfmMEDSuggestion", "Set_Caption", async function Set_Caption(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "Caption", (await $.call(C, "TCaption", [L0["value"]])));
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["WideString"]});
  U.method("TfmMEDSuggestion", "Set_Color", async function Set_Color(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "Color", (await $.call(C, "TColor", [L0["value"]])));
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["OLE_COLOR"]});
  U.method("TfmMEDSuggestion", "Set_Cursor", async function Set_Cursor(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "Cursor", (await $.call(C, "TCursor", [L0["value"]])));
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["Smallint"]});
  U.method("TfmMEDSuggestion", "Set_DoubleBuffered", async function Set_DoubleBuffered(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "DoubleBuffered", L0["value"]);
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["WordBool"]});
  U.method("TfmMEDSuggestion", "Set_DropTarget", async function Set_DropTarget(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "DropTarget", L0["value"]);
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["WordBool"]});
  U.method("TfmMEDSuggestion", "Set_Enabled", async function Set_Enabled(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "Enabled", L0["value"]);
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["WordBool"]});
  U.method("TfmMEDSuggestion", "Set_Font", async function Set_Font(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.asRef(p0), result: undefined};
  await $.stmt((await $.call(C, "SetOleFont", [(await $.v(C, "Font")), (await L0["value"].get())])));
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["IFontDisp"]});
  U.method("TfmMEDSuggestion", "Set_HelpFile", async function Set_HelpFile(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "HelpFile", (await $.call(C, "String", [L0["value"]])));
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["WideString"]});
  U.method("TfmMEDSuggestion", "Set_KeyPreview", async function Set_KeyPreview(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "KeyPreview", L0["value"]);
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["WordBool"]});
  U.method("TfmMEDSuggestion", "Set_PixelsPerInch", async function Set_PixelsPerInch(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "PixelsPerInch", L0["value"]);
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["Integer"]});
  U.method("TfmMEDSuggestion", "Set_PrintScale", async function Set_PrintScale(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "PrintScale", (await $.call(C, "TPrintScale", [L0["value"]])));
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["TxPrintScale"]});
  U.method("TfmMEDSuggestion", "Set_Scaled", async function Set_Scaled(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "Scaled", L0["value"]);
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["WordBool"]});
  U.method("TfmMEDSuggestion", "Set_Visible", async function Set_Visible(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "Visible", L0["value"]);
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["WordBool"]});
  U.method("TfmMEDSuggestion", "Get_Owner", async function Get_Owner(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: 0};
  L0["result"] = (await $.v(C, "handle"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TfmMEDSuggestion", "Set_Owner", async function Set_Owner(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"val": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["val"]);
  if ($.truthy($.gt(L0["val"], 0))) {
    await $.set(C, "FOwnerHandle", L0["val"]);
  }
  return L0.result;
}, {"params": ["val"], "kind": "procedure", "ptypes": ["Integer"]});
  U.method("TfmMEDSuggestion", "Get_Params", async function Get_Params(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"name": $.copyArg(p0), result: null};
  await $.fixArgs(L0, ["name"]);
  L0["result"] = (await $.idx((await $.mv((await $.v(C, "FParams")), "Values")), [L0["name"]]));
  return L0.result;
}, {"params": ["Name"], "kind": "function", "ptypes": ["WideString"]});
  U.method("TfmMEDSuggestion", "Set_Params", async function Set_Params(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"name": $.copyArg(p0), "value": $.copyArg(p1), result: undefined};
  await $.fixArgs(L0, ["name", "value"]);
  { const $t1 = await $.iset((await $.mv((await $.v(C, "FParams")), "Values")), [L0["name"]], L0["value"]); if ($t1 !== undefined) { await $.mset((await $.v(C, "FParams")), "Values", $t1); } }
  return L0.result;
}, {"params": ["Name", "Value"], "kind": "procedure", "ptypes": ["WideString", "OleVariant"]});
  U.method("TfmMEDSuggestion", "InstanceInitialize", async function InstanceInitialize(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: null};
  L0["result"] = (await $.v(C, "S_OK"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TfmMEDSuggestion", "Cleanup", async function Cleanup(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: null};
  L0["result"] = (await $.v(C, "S_OK"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TfmMEDSuggestion", "UIObjectActivate", async function UIObjectActivate(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: null};
  await $.set(C, "id", (await $.call(C, "StrToInt", [(await $.call(C, "Get_Params", ["MED_ID"]))])));
  await $.mcall((await $.v(C, "ODSAvalute")), "open", []);
  await $.stmt((await $.mcall((await $.v(C, "ODSCusts")), "SetVariable", ["id", (await $.call(C, "StrToInt", [(await $.call(C, "Get_Params", ["KLI_ID"]))]))])));
  await $.mcall((await $.v(C, "ODSCusts")), "Open", []);
  await $.stmt((await $.mcall((await $.v(C, "ODSMEDICAL")), "SetVariable", ["MED_ID", (await $.v(C, "id"))])));
  await $.mcall((await $.v(C, "ODSMEDICAL")), "Open", []);
  await $.stmt((await $.mcall((await $.v(C, "ODSMEDS")), "SetVariable", ["MED_ID", (await $.v(C, "id"))])));
  await $.mcall((await $.v(C, "ODSMEDS")), "Open", []);
  await $.stmt((await $.mcall((await $.v(C, "ODSCONTRACTS")), "SetVariable", ["blankid", (await $.v(C, "id"))])));
  await $.mcall((await $.v(C, "ODSCONTRACTS")), "Open", []);
  await $.set(C, "IsSaved", false);
  if ($.truthy((await $.mv((await $.v(C, "ODSMEDS")), "isEmpty")))) {
    await $.mcall((await $.v(C, "ODSMEDS")), "Insert", []);
    await $.mset((await $.v(C, "DTPContractDate")), "DateTime", (await $.v(C, "now")));
    await $.set(C, "Caption", (await $.call(C, "format", [(await $.v(C, "fmCaption")), ["Yeni teklifname"]])));
  } else {
    await $.mset((await $.v(C, "DTPContractDate")), "DateTime", (await $.mv((await $.v(C, "ODSMEDSENDDATE")), "value")));
    await $.mcall((await $.v(C, "ODSMEDS")), "Edit", []);
    await $.set(C, "Caption", (await $.call(C, "format", [(await $.v(C, "fmCaption")), ["Redakte"]])));
    if ($.truthy($.eq((await $.mv((await $.v(C, "ODSMEDSITSPEC")), "Value")), "M"))) {
      await $.mset((await $.v(C, "ckMonth")), "Checked", true);
    }
    if ($.truthy($.eq((await $.mv((await $.v(C, "ODSMEDSITSPEC")), "Value")), "Y"))) {
      await $.mset((await $.v(C, "ckYear")), "Checked", true);
    }
    await $.mset((await $.v(C, "btPrint")), "Enabled", true);
    await $.mset((await $.v(C, "btPolicy")), "Enabled", true);
  }
  L0["result"] = (await $.v(C, "S_OK"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TfmMEDSuggestion", "QueryDeactivate", async function QueryDeactivate(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: null};
  L0["result"] = (await $.v(C, "S_OK"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TfmMEDSuggestion", "UIObjectDeactivate", async function UIObjectDeactivate(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: null};
  L0["result"] = (await $.v(C, "S_OK"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TfmMEDSuggestion", "SaveState", async function SaveState(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: null};
  L0["result"] = (await $.v(C, "S_OK"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TfmMEDSuggestion", "Get_Height", async function Get_Height(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: 0};
  L0["result"] = (await $.v(C, "Height"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TfmMEDSuggestion", "Get_Width", async function Get_Width(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: 0};
  L0["result"] = (await $.v(C, "Width"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TfmMEDSuggestion", "BitBtn1Click", async function BitBtn1Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy((await $.or_((await $.call(C, "SaveData", [])), async () => (await $.v(C, "IsSaved")))))) {
    await $.stmt((await $.call(C, "PostMessage", [(await $.v(C, "FOwnerHandle")), (await $.v(C, "WM_ModalResult")), (await $.v(C, "mrOk")), 0])));
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TfmMEDSuggestion", "BitBtn2Click", async function BitBtn2Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.stmt((await $.call(C, "PostMessage", [(await $.v(C, "FOwnerHandle")), (await $.v(C, "WM_ModalResult")), (await $.v(C, "mrCancel")), 0])));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TfmMEDSuggestion", "ActiveFormCreate", async function ActiveFormCreate(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.set(C, "fmMEDSuggestion", Self);
  await $.set(C, "FParams", (await $.mv((await $.v(C, "TStringList")), "Create")));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TfmMEDSuggestion", "SaveData", async function SaveData(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: false};
  L0["result"] = false;
  {
    const $t2 = (await $.v(C, "ODSMEDS"));
    if ($.truthy($.not(($.in_((await $.wv([$t2], "State", C, false)), [(await $.wv([$t2], "dsEdit", C, false)), (await $.wv([$t2], "dsInsert", C, false))]))))) {
      return L0.result;
    }
    await $.mset((await $.wcall([$t2], "FieldByName", ["med_id"], C)), "AsFloat", (await $.wv([$t2], "id", C, false)));
    await $.mset((await $.wcall([$t2], "FieldByName", ["enddate"], C)), "AsDateTime", (await $.mv((await $.wv([$t2], "DTPContractDate", C, false)), "DateTime")));
    if ($.truthy((await $.mv((await $.wv([$t2], "ckMonth", C, false)), "Checked")))) {
      await $.mset((await $.wcall([$t2], "FieldByName", ["ITSPEC"], C)), "asString", "M");
    }
    if ($.truthy((await $.mv((await $.wv([$t2], "ckYear", C, false)), "Checked")))) {
      await $.mset((await $.wcall([$t2], "FieldByName", ["ITSPEC"], C)), "asString", "Y");
    }
    await $.stmt($.wcall([$t2], "Post", [], C));
    await $.stmt((await $.wcall([$t2], "RefreshRecord", [], C)));
    await $.mcall((await $.wv([$t2], "ODSContracts", C, false)), "Edit", []);
    await $.mset((await $.mcall((await $.wv([$t2], "ODSContracts", C, false)), "FieldByName", ["sugg_id"])), "AsFloat", (await $.mv((await $.wcall([$t2], "FieldByName", ["id"], C)), "asFloat")));
    await $.mset((await $.mcall((await $.wv([$t2], "ODSContracts", C, false)), "FieldByName", ["ins_date"])), "AsDateTime", (await $.mv((await $.wv([$t2], "DTPContractDate", C, false)), "DateTime")));
    await $.mcall((await $.wv([$t2], "ODSContracts", C, false)), "Post", []);
    await $.wset([$t2], "IsSaved", (await $.wv([$t2], "True", C, false)), C);
    await $.wset([$t2], "result", (await $.wv([$t2], "True", C, false)), { get: async () => L0["result"], set: async (v) => { L0["result"] = v; }, local: true });
  }
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TfmMEDSuggestion", "btPrintClick", async function btPrintClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "docfile": null, "str": '', "str2": '', "day": 0, "month": 0, "year": 0};
  await $.fixArgs(L0, ["sender"]);
  L0["months"] = ["Yanvar", "Fevral", "Mart", "Aprel", "May", "İyun", "İyul", "Avqust", "Sentyabr", "Oktyabr", "Noyabr", "Dekabr"];
  try {
    L0["docfile"] = $.add((await $.call(C, "ExtractFilePath", [(await $.mv((await $.v(C, "Application")), "ExeName"))])), "\\MedicalSuggestion.doc");
    {
      const $t3 = (await $.v(C, "SuggestionReport"));
      await $.wset([$t3], "FileName", (await $.wv([$t3], "DocFile", { get: async () => L0["docfile"], set: async (v) => { L0["docfile"] = v; }, local: true }, false)), C);
      if ($.truthy($.eq((await $.mv((await $.mcall((await $.wv([$t3], "ODSMEDS", C, false)), "FieldByName", ["ITSPEC"])), "AsString")), "M"))) {
        await $.wset([$t3], "str", $.add((await $.wcall([$t3], "IntToStr", [(await $.mv((await $.wv([$t3], "ODSMEDSINSURANCETIME", C, false)), "AsInteger"))], C)), " ay ərzində"), { get: async () => L0["str"], set: async (v) => { L0["str"] = v; }, local: true });
      }
      if ($.truthy($.eq((await $.mv((await $.mcall((await $.wv([$t3], "ODSMEDS", C, false)), "FieldByName", ["ITSPEC"])), "AsString")), "Y"))) {
        await $.wset([$t3], "str", $.add((await $.wcall([$t3], "IntToStr", [(await $.mv((await $.wv([$t3], "ODSMEDSINSURANCETIME", C, false)), "AsInteger"))], C)), " il ərzində"), { get: async () => L0["str"], set: async (v) => { L0["str"] = v; }, local: true });
      }
      await $.stmt((await $.wcall([$t3], "Open", [(await $.wv([$t3], "False", C, false))], C)));
      await $.stmt((await $.wcall([$t3], "SetBookmark", ["name", (await $.mv((await $.wv([$t3], "ODSCustsNAME", C, false)), "Value")), (await $.wv([$t3], "False", C, false)), (await $.wv([$t3], "False", C, false)), (await $.wv([$t3], "False", C, false)), (await $.wv([$t3], "False", C, false)), 10, "Arial AzLat", (await $.wv([$t3], "False", C, false))], C)));
      await $.stmt((await $.wcall([$t3], "SetBookmark", ["empnum", (await $.wcall([$t3], "IntToStr", [(await $.mv((await $.wv([$t3], "ODSMedicalEMPNUM", C, false)), "value"))], C)), (await $.wv([$t3], "False", C, false)), (await $.wv([$t3], "False", C, false)), (await $.wv([$t3], "False", C, false)), (await $.wv([$t3], "False", C, false)), 10, "Arial AzLat", (await $.wv([$t3], "False", C, false))], C)));
      await $.stmt((await $.wcall([$t3], "DecodeDate", [(await $.mv((await $.wv([$t3], "ODSMEDSENDDATE", C, false)), "AsDateTime")), $.ref(async () => (await $.wv([$t3], "year", { get: async () => L0["year"], set: async (v) => { L0["year"] = v; }, local: true }, false)), async ($t4) => { await $.wset([$t3], "year", $t4, { get: async () => L0["year"], set: async (v) => { L0["year"] = v; }, local: true }); }), $.ref(async () => (await $.wv([$t3], "month", { get: async () => L0["month"], set: async (v) => { L0["month"] = v; }, local: true }, false)), async ($t5) => { await $.wset([$t3], "month", $t5, { get: async () => L0["month"], set: async (v) => { L0["month"] = v; }, local: true }); }), $.ref(async () => (await $.wv([$t3], "day", { get: async () => L0["day"], set: async (v) => { L0["day"] = v; }, local: true }, false)), async ($t6) => { await $.wset([$t3], "day", $t6, { get: async () => L0["day"], set: async (v) => { L0["day"] = v; }, local: true }); })], C)));
      await $.stmt((await $.wcall([$t3], "SetBookmark", ["enddate", $.add($.add($.add($.add((await $.wcall([$t3], "IntToStr", [(await $.wv([$t3], "day", { get: async () => L0["day"], set: async (v) => { L0["day"] = v; }, local: true }, false))], C)), "    "), (await $.idx((await $.wv([$t3], "months", { get: async () => L0["months"], set: async (v) => { L0["months"] = v; }, local: true }, false)), [(await $.wv([$t3], "month", { get: async () => L0["month"], set: async (v) => { L0["month"] = v; }, local: true }, false))]))), "    "), (await $.wcall([$t3], "IntToStr", [(await $.wv([$t3], "year", { get: async () => L0["year"], set: async (v) => { L0["year"] = v; }, local: true }, false))], C))), (await $.wv([$t3], "False", C, false)), (await $.wv([$t3], "False", C, false)), (await $.wv([$t3], "False", C, false)), (await $.wv([$t3], "False", C, false)), 10, "Arial AzLat", (await $.wv([$t3], "False", C, false))], C)));
      await $.stmt((await $.wcall([$t3], "SetBookmark", ["itspec", (await $.wv([$t3], "str", { get: async () => L0["str"], set: async (v) => { L0["str"] = v; }, local: true }, false)), (await $.wv([$t3], "False", C, false)), (await $.wv([$t3], "False", C, false)), (await $.wv([$t3], "False", C, false)), (await $.wv([$t3], "False", C, false)), 10, "Arial AzLat", (await $.wv([$t3], "False", C, false))], C)));
      await $.stmt((await $.wcall([$t3], "SetBookmark", ["inssum", (await $.wcall([$t3], "CurrToStr", [(await $.mv((await $.wv([$t3], "ODSMEDSINSSUM", C, false)), "value"))], C)), (await $.wv([$t3], "False", C, false)), (await $.wv([$t3], "False", C, false)), (await $.wv([$t3], "False", C, false)), (await $.wv([$t3], "False", C, false)), 10, "Arial AzLat", (await $.wv([$t3], "False", C, false))], C)));
      await $.stmt((await $.wcall([$t3], "SetBookmark", ["insammounteveryone", (await $.wcall([$t3], "CurrToStr", [(await $.mv((await $.wv([$t3], "ODSMEDSINSAMMOUNTEVERYONE", C, false)), "Value"))], C)), (await $.wv([$t3], "False", C, false)), (await $.wv([$t3], "False", C, false)), (await $.wv([$t3], "False", C, false)), (await $.wv([$t3], "False", C, false)), 10, "Arial AzLat", (await $.wv([$t3], "False", C, false))], C)));
      await $.stmt((await $.wcall([$t3], "SetBookmark", ["insammountall", (await $.wcall([$t3], "CurrToStr", [(await $.mv((await $.wv([$t3], "ODSCONTRACTSAMMOUNT", C, false)), "Value"))], C)), (await $.wv([$t3], "False", C, false)), (await $.wv([$t3], "False", C, false)), (await $.wv([$t3], "False", C, false)), (await $.wv([$t3], "False", C, false)), 10, "Arial AzLat", (await $.wv([$t3], "False", C, false))], C)));
    }
  } finally {
    await $.mcall((await $.v(C, "SuggestionReport")), "Show", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TfmMEDSuggestion", "DBEdit5KeyPress", async function DBEdit5KeyPress(Self, p0, p1) {
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
  U.method("TfmMEDSuggestion", "DTPContractDateChange", async function DTPContractDateChange(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "key": ''};
  await $.fixArgs(L0, ["sender"]);
  await $.stmt((await $.call(C, "DBEdit5KeyPress", [L0["sender"], $.ref(async () => L0["key"], async ($t7) => { L0["key"] = $t7; })])));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TfmMEDSuggestion", "btApplyClick", async function btApplyClick(Self, p0) {
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
  U.method("TfmMEDSuggestion", "btPolicyClick", async function btPolicyClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "policformguid": null, "params": null};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t8 = (await $.v(C, "ODSContracts"));
    if ($.truthy($.in_((await $.wv([$t8], "State", C, false)), [(await $.wv([$t8], "dsEdit", C, false)), (await $.wv([$t8], "dsInsert", C, false))]))) {
      if ($.truthy($.eq((await $.wcall([$t8], "MessageDlg", ["Deyoshiklik yadda saxlanilsin?", (await $.wv([$t8], "mtInformation", C, false)), [(await $.wv([$t8], "mbYes", C, false)), (await $.wv([$t8], "mbCancel", C, false))], 0], C)), (await $.wv([$t8], "mrYes", C, false))))) {
        await $.stmt((await $.wcall([$t8], "SaveData", [], C)));
      } else {
        return L0.result;
      }
    }
  }
  L0["params"] = (await $.mv((await $.v(C, "TStringList")), "Create"));
  L0["policformguid"] = (await $.call(C, "StringToGUID", ["{6730B53F-5460-40A6-8554-F904B6690915}"]));
  { const $t9 = await $.iset((await $.mv(L0["params"], "Values")), ["MEDS_ID"], (await $.call(C, "FloatToStr", [(await $.mv((await $.v(C, "ODSMEDSID")), "Value"))]))); if ($t9 !== undefined) { await $.mset(L0["params"], "Values", $t9); } }
  {
    const $t10 = (await $.v(C, "pmcPolicy"));
    await $.stmt((await $.wcall([$t10], "ShowModal", [(await $.wv([$t10], "PolicFormGuid", { get: async () => L0["policformguid"], set: async (v) => { L0["policformguid"] = v; }, local: true }, false)), (await $.wv([$t10], "Params", { get: async () => L0["params"], set: async (v) => { L0["params"] = v; }, local: true }, false))], C)));
  }
  await $.mcall(L0["params"], "Free", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  return U;
}
