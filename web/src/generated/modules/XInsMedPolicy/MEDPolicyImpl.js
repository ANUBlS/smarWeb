// Generated from MEDPolicyImpl.pas by pas2js — do not edit by hand; regenerate instead.
/* eslint-disable */
// @ts-nocheck

export default function define($) {
  const U = $.unit("MEDPolicyImpl", ["Windows", "Messages", "SysUtils", "Classes", "Graphics", "Controls", "Forms", "Dialogs", "ActiveX", "AxCtrls", "MEDPolicy_TLB", "StdVcl", "INSWordExporter", "Db", "OracleData", "HintBox", "StdCtrls", "Buttons", "ExtCtrls", "DBCtrls", "Mask", "SBPlgAx50_TLB", "Oracle", "ComObj", "ComServ", "sboapiDataModuleImpl"]);
  const C = [U];
  U.defClass("TfmMEDPolicy", "TActiveForm", {"groupbox1": {"name": "GroupBox1", "type": "TGroupBox"}, "label4": {"name": "Label4", "type": "TLabel"}, "label10": {"name": "Label10", "type": "TLabel"}, "dbedit1": {"name": "DBEdit1", "type": "TDBEdit"}, "dbedit7": {"name": "DBEdit7", "type": "TDBEdit"}, "panel1": {"name": "Panel1", "type": "TPanel"}, "btok": {"name": "btOk", "type": "TBitBtn"}, "btcancel": {"name": "btCancel", "type": "TBitBtn"}, "btprint": {"name": "btPrint", "type": "TBitBtn"}, "btapply": {"name": "btApply", "type": "TBitBtn"}, "hberrmsg": {"name": "hbErrMsg", "type": "THintBox"}, "odspolicy": {"name": "ODSPolicy", "type": "TOracleDataSet"}, "dspolicy": {"name": "DSPolicy", "type": "TDataSource"}, "inswordexporter": {"name": "INSWordExporter", "type": "TINSWordExporter"}, "odsreport": {"name": "ODSReport", "type": "TOracleDataSet"}, "dbedit2": {"name": "DBEdit2", "type": "TDBEdit"}, "label2": {"name": "Label2", "type": "TLabel"}, "label7": {"name": "Label7", "type": "TLabel"}, "dblookupcombobox2": {"name": "DBLookupComboBox2", "type": "TDBLookupComboBox"}, "memspeccond": {"name": "memSpecCond", "type": "TMemo"}, "odspolicyid": {"name": "ODSPolicyID", "type": "TFloatField"}, "odspolicymeds_id": {"name": "ODSPolicyMEDS_ID", "type": "TFloatField"}, "odspolicyval_id": {"name": "ODSPolicyVAL_ID", "type": "TFloatField"}, "odspolicypolicynum": {"name": "ODSPolicyPOLICYNUM", "type": "TStringField"}, "odspolicyinscontract": {"name": "ODSPolicyINSCONTRACT", "type": "TStringField"}, "odspolicyfranshiz": {"name": "ODSPolicyFRANSHIZ", "type": "TFloatField"}, "odspolicysc_id": {"name": "ODSPolicySC_ID", "type": "TFloatField"}, "odsspeccond": {"name": "ODSSpecCond", "type": "TOracleDataSet"}, "odsspeccondid": {"name": "ODSSpecCondID", "type": "TFloatField"}, "odsspeccondname": {"name": "ODSSpecCondNAME", "type": "TStringField"}, "dsspeccond": {"name": "DSSpecCond", "type": "TDataSource"}, "label3": {"name": "Label3", "type": "TLabel"}, "odsreportname": {"name": "ODSReportNAME", "type": "TStringField"}, "odsreportaddress": {"name": "ODSReportADDRESS", "type": "TStringField"}, "odsreportempnum": {"name": "ODSReportEMPNUM", "type": "TIntegerField"}, "odsreportinssum": {"name": "ODSReportINSSUM", "type": "TStringField"}, "odsreportinsammountall": {"name": "ODSReportINSAMMOUNTALL", "type": "TStringField"}, "odsreportperiod": {"name": "ODSReportPERIOD", "type": "TStringField"}, "odsreportinscontract": {"name": "ODSReportINSCONTRACT", "type": "TStringField"}, "odsreportfranshiz": {"name": "ODSReportFRANSHIZ", "type": "TStringField"}, "odsreportvalu_name": {"name": "ODSReportVALU_NAME", "type": "TStringField"}, "odsreportscname": {"name": "ODSReportSCNAME", "type": "TStringField"}, "odsreportcontractdate": {"name": "ODSReportCONTRACTDATE", "type": "TDateTimeField"}, "odscontracts": {"name": "ODSContracts", "type": "TOracleDataSet"}, "odscontractsid": {"name": "ODSContractsID", "type": "TFloatField"}, "odscontractstype_id": {"name": "ODSContractsTYPE_ID", "type": "TFloatField"}, "odscontractsblank_id": {"name": "ODSContractsBLANK_ID", "type": "TFloatField"}, "odscontractssugg_id": {"name": "ODSContractsSUGG_ID", "type": "TFloatField"}, "odscontractspolicy_id": {"name": "ODSContractsPOLICY_ID", "type": "TFloatField"}, "odscontractsins_date": {"name": "ODSContractsINS_DATE", "type": "TDateTimeField"}, "odscontractsbegin_date": {"name": "ODSContractsBEGIN_DATE", "type": "TDateTimeField"}, "odscontractsend_date": {"name": "ODSContractsEND_DATE", "type": "TDateTimeField"}, "odscontractsvalute_id": {"name": "ODSContractsVALUTE_ID", "type": "TFloatField"}, "odscontractsammount": {"name": "ODSContractsAMMOUNT", "type": "TFloatField"}, "odscontractsclose_prefix": {"name": "ODSContractsCLOSE_PREFIX", "type": "TIntegerField"}, "odscontractskli_id": {"name": "ODSContractsKLI_ID", "type": "TFloatField"}, "odscontractsloanacc_id": {"name": "ODSContractsLOANACC_ID", "type": "TFloatField"}, "odscontractscurracc_id": {"name": "ODSContractsCURRACC_ID", "type": "TFloatField"}, "odscontractspolicy_num": {"name": "ODSContractsPOLICY_NUM", "type": "TStringField"}, "dscontracts": {"name": "DSContracts", "type": "TDataSource"}, "odsreportpolicy_num": {"name": "ODSReportPOLICY_NUM", "type": "TStringField"}, "opcommon": {"name": "OPCOMMON", "type": "TOraclePackage"}, "odsreportloanacc_id": {"name": "ODSReportLOANACC_ID", "type": "TFloatField"}, "odsreportcurracc_id": {"name": "ODSReportCURRACC_ID", "type": "TFloatField"}, "odsreportammount": {"name": "ODSReportAMMOUNT", "type": "TFloatField"}, "fparams": {"name": "FParams", "type": "TStrings"}, "fownerhandle": {"name": "FOwnerHandle", "type": "Integer"}, "id": {"name": "ID", "type": "Integer"}, "tid": {"name": "tid", "type": "real"}, "issaved": {"name": "IsSaved", "type": "Boolean"}, "fevents": {"name": "FEvents", "type": "IfmMEDPolicyEvents"}}, {"params": {"name": "Params", "read": "Get_Params", "write": "Set_Params"}});
  U.init(async () => {
    U.const("WM_ModalResult", $.add((await $.v(C, "WM_USER")), 139));
    U.const("fmCaption", "Tibbi sigorta policy: (%s)");
    U.var_("fmMEDPolicy", null, "TfmMEDPolicy");
  });
  U.method("TfmMEDPolicy", "DefinePropertyPages", async function DefinePropertyPages(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"definepropertypage": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["definepropertypage"]);
  return L0.result;
}, {"params": ["DefinePropertyPage"], "kind": "procedure", "ptypes": ["TDefinePropertyPage"]});
  U.method("TfmMEDPolicy", "EventSinkChanged", async function EventSinkChanged(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"eventsink": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["eventsink"]);
  await $.set(C, "FEvents", L0["eventsink"]);
  return L0.result;
}, {"params": ["EventSink"], "kind": "procedure", "ptypes": ["IUnknown"]});
  U.method("TfmMEDPolicy", "Initialize", async function Initialize(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: undefined};
  await $.inherited(Self, "TfmMEDPolicy", "Initialize", null, arguments);
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
  U.method("TfmMEDPolicy", "Get_Active", async function Get_Active(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: false};
  L0["result"] = (await $.v(C, "Active"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TfmMEDPolicy", "Get_AutoScroll", async function Get_AutoScroll(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: false};
  L0["result"] = (await $.v(C, "AutoScroll"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TfmMEDPolicy", "Get_AutoSize", async function Get_AutoSize(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: false};
  L0["result"] = (await $.v(C, "AutoSize"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TfmMEDPolicy", "Get_AxBorderStyle", async function Get_AxBorderStyle(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: null};
  L0["result"] = (await $.call(C, "Ord", [(await $.v(C, "AxBorderStyle"))]));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TfmMEDPolicy", "Get_Caption", async function Get_Caption(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: ''};
  L0["result"] = (await $.call(C, "WideString", [(await $.v(C, "Caption"))]));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TfmMEDPolicy", "Get_Color", async function Get_Color(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: null};
  L0["result"] = (await $.call(C, "OLE_COLOR", [(await $.v(C, "Color"))]));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TfmMEDPolicy", "Get_Cursor", async function Get_Cursor(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: 0};
  L0["result"] = (await $.call(C, "Smallint", [(await $.v(C, "Cursor"))]));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TfmMEDPolicy", "Get_DoubleBuffered", async function Get_DoubleBuffered(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: false};
  L0["result"] = (await $.v(C, "DoubleBuffered"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TfmMEDPolicy", "Get_DropTarget", async function Get_DropTarget(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: false};
  L0["result"] = (await $.v(C, "DropTarget"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TfmMEDPolicy", "Get_Enabled", async function Get_Enabled(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: false};
  L0["result"] = (await $.v(C, "Enabled"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TfmMEDPolicy", "Get_Font", async function Get_Font(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: null};
  await $.stmt((await $.call(C, "GetOleFont", [(await $.v(C, "Font")), L0["result"]])));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TfmMEDPolicy", "Get_HelpFile", async function Get_HelpFile(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: ''};
  L0["result"] = (await $.call(C, "WideString", [(await $.v(C, "HelpFile"))]));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TfmMEDPolicy", "Get_KeyPreview", async function Get_KeyPreview(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: false};
  L0["result"] = (await $.v(C, "KeyPreview"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TfmMEDPolicy", "Get_PixelsPerInch", async function Get_PixelsPerInch(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: 0};
  L0["result"] = (await $.v(C, "PixelsPerInch"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TfmMEDPolicy", "Get_PrintScale", async function Get_PrintScale(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: null};
  L0["result"] = (await $.call(C, "Ord", [(await $.v(C, "PrintScale"))]));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TfmMEDPolicy", "Get_Scaled", async function Get_Scaled(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: false};
  L0["result"] = (await $.v(C, "Scaled"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TfmMEDPolicy", "Get_Visible", async function Get_Visible(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: false};
  L0["result"] = (await $.v(C, "Visible"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TfmMEDPolicy", "Get_VisibleDockClientCount", async function Get_VisibleDockClientCount(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: 0};
  L0["result"] = (await $.v(C, "VisibleDockClientCount"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TfmMEDPolicy", "_Set_Font", async function _Set_Font(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.stmt((await $.call(C, "SetOleFont", [(await $.v(C, "Font")), L0["value"]])));
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["IFontDisp"]});
  U.method("TfmMEDPolicy", "ActivateEvent", async function ActivateEvent(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.ne((await $.v(C, "FEvents")), null))) {
    await $.mcall((await $.v(C, "FEvents")), "OnActivate", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TfmMEDPolicy", "ClickEvent", async function ClickEvent(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.ne((await $.v(C, "FEvents")), null))) {
    await $.mcall((await $.v(C, "FEvents")), "OnClick", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TfmMEDPolicy", "CreateEvent", async function CreateEvent(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.ne((await $.v(C, "FEvents")), null))) {
    await $.mcall((await $.v(C, "FEvents")), "OnCreate", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TfmMEDPolicy", "DblClickEvent", async function DblClickEvent(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.ne((await $.v(C, "FEvents")), null))) {
    await $.mcall((await $.v(C, "FEvents")), "OnDblClick", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TfmMEDPolicy", "DeactivateEvent", async function DeactivateEvent(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.ne((await $.v(C, "FEvents")), null))) {
    await $.mcall((await $.v(C, "FEvents")), "OnDeactivate", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TfmMEDPolicy", "DestroyEvent", async function DestroyEvent(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.ne((await $.v(C, "FEvents")), null))) {
    await $.mcall((await $.v(C, "FEvents")), "OnDestroy", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TfmMEDPolicy", "KeyPressEvent", async function KeyPressEvent(Self, p0, p1) {
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
  U.method("TfmMEDPolicy", "PaintEvent", async function PaintEvent(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.ne((await $.v(C, "FEvents")), null))) {
    await $.mcall((await $.v(C, "FEvents")), "OnPaint", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TfmMEDPolicy", "Set_AutoScroll", async function Set_AutoScroll(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "AutoScroll", L0["value"]);
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["WordBool"]});
  U.method("TfmMEDPolicy", "Set_AutoSize", async function Set_AutoSize(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "AutoSize", L0["value"]);
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["WordBool"]});
  U.method("TfmMEDPolicy", "Set_AxBorderStyle", async function Set_AxBorderStyle(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "AxBorderStyle", (await $.call(C, "TActiveFormBorderStyle", [L0["value"]])));
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["TxActiveFormBorderStyle"]});
  U.method("TfmMEDPolicy", "Set_Caption", async function Set_Caption(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "Caption", (await $.call(C, "TCaption", [L0["value"]])));
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["WideString"]});
  U.method("TfmMEDPolicy", "Set_Color", async function Set_Color(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "Color", (await $.call(C, "TColor", [L0["value"]])));
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["OLE_COLOR"]});
  U.method("TfmMEDPolicy", "Set_Cursor", async function Set_Cursor(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "Cursor", (await $.call(C, "TCursor", [L0["value"]])));
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["Smallint"]});
  U.method("TfmMEDPolicy", "Set_DoubleBuffered", async function Set_DoubleBuffered(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "DoubleBuffered", L0["value"]);
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["WordBool"]});
  U.method("TfmMEDPolicy", "Set_DropTarget", async function Set_DropTarget(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "DropTarget", L0["value"]);
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["WordBool"]});
  U.method("TfmMEDPolicy", "Set_Enabled", async function Set_Enabled(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "Enabled", L0["value"]);
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["WordBool"]});
  U.method("TfmMEDPolicy", "Set_Font", async function Set_Font(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.asRef(p0), result: undefined};
  await $.stmt((await $.call(C, "SetOleFont", [(await $.v(C, "Font")), (await L0["value"].get())])));
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["IFontDisp"]});
  U.method("TfmMEDPolicy", "Set_HelpFile", async function Set_HelpFile(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "HelpFile", (await $.call(C, "String", [L0["value"]])));
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["WideString"]});
  U.method("TfmMEDPolicy", "Set_KeyPreview", async function Set_KeyPreview(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "KeyPreview", L0["value"]);
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["WordBool"]});
  U.method("TfmMEDPolicy", "Set_PixelsPerInch", async function Set_PixelsPerInch(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "PixelsPerInch", L0["value"]);
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["Integer"]});
  U.method("TfmMEDPolicy", "Set_PrintScale", async function Set_PrintScale(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "PrintScale", (await $.call(C, "TPrintScale", [L0["value"]])));
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["TxPrintScale"]});
  U.method("TfmMEDPolicy", "Set_Scaled", async function Set_Scaled(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "Scaled", L0["value"]);
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["WordBool"]});
  U.method("TfmMEDPolicy", "Set_Visible", async function Set_Visible(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "Visible", L0["value"]);
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["WordBool"]});
  U.method("TfmMEDPolicy", "Get_Owner", async function Get_Owner(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: 0};
  L0["result"] = (await $.v(C, "handle"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TfmMEDPolicy", "Set_Owner", async function Set_Owner(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"val": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["val"]);
  if ($.truthy($.gt(L0["val"], 0))) {
    await $.set(C, "FOwnerHandle", L0["val"]);
  }
  return L0.result;
}, {"params": ["val"], "kind": "procedure", "ptypes": ["Integer"]});
  U.method("TfmMEDPolicy", "Get_Params", async function Get_Params(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"name": $.copyArg(p0), result: null};
  await $.fixArgs(L0, ["name"]);
  L0["result"] = (await $.idx((await $.mv((await $.v(C, "FParams")), "Values")), [L0["name"]]));
  return L0.result;
}, {"params": ["Name"], "kind": "function", "ptypes": ["WideString"]});
  U.method("TfmMEDPolicy", "Set_Params", async function Set_Params(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"name": $.copyArg(p0), "value": $.copyArg(p1), result: undefined};
  await $.fixArgs(L0, ["name", "value"]);
  { const $t1 = await $.iset((await $.mv((await $.v(C, "FParams")), "Values")), [L0["name"]], L0["value"]); if ($t1 !== undefined) { await $.mset((await $.v(C, "FParams")), "Values", $t1); } }
  return L0.result;
}, {"params": ["Name", "Value"], "kind": "procedure", "ptypes": ["WideString", "OleVariant"]});
  U.method("TfmMEDPolicy", "InstanceInitialize", async function InstanceInitialize(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: null};
  L0["result"] = (await $.v(C, "S_OK"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TfmMEDPolicy", "Cleanup", async function Cleanup(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: null};
  L0["result"] = (await $.v(C, "S_OK"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TfmMEDPolicy", "UIObjectActivate", async function UIObjectActivate(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: null};
  await $.set(C, "id", (await $.call(C, "StrToInt", [(await $.call(C, "Get_Params", ["MEDS_ID"]))])));
  await $.mcall((await $.v(C, "ODSSpecCond")), "Open", []);
  await $.stmt((await $.mcall((await $.v(C, "ODSPolicy")), "SetVariable", ["MEDS_ID", (await $.v(C, "id"))])));
  await $.mcall((await $.v(C, "ODSPolicy")), "Open", []);
  await $.stmt((await $.mcall((await $.v(C, "ODSContracts")), "SetVariable", ["suggid", (await $.v(C, "id"))])));
  await $.mcall((await $.v(C, "ODSContracts")), "Open", []);
  await $.set(C, "tid", (await $.mv((await $.v(C, "ODSContractsType_ID")), "Value")));
  await $.mcall((await $.v(C, "ODSContracts")), "Edit", []);
  if ($.truthy((await $.mv((await $.v(C, "ODSPolicy")), "isEmpty")))) {
    await $.mcall((await $.v(C, "ODSPolicy")), "Insert", []);
    await $.set(C, "Caption", (await $.call(C, "format", [(await $.v(C, "fmCaption")), ["Yeni policy"]])));
  } else {
    await $.mcall((await $.v(C, "ODSPolicy")), "Edit", []);
    await $.set(C, "Caption", (await $.call(C, "format", [(await $.v(C, "fmCaption")), ["Redakte"]])));
    await $.mset((await $.v(C, "btPrint")), "Enabled", true);
  }
  L0["result"] = (await $.v(C, "S_OK"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TfmMEDPolicy", "QueryDeactivate", async function QueryDeactivate(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: null};
  L0["result"] = (await $.v(C, "S_OK"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TfmMEDPolicy", "UIObjectDeactivate", async function UIObjectDeactivate(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: null};
  L0["result"] = (await $.v(C, "S_OK"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TfmMEDPolicy", "SaveState", async function SaveState(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: null};
  L0["result"] = (await $.v(C, "S_OK"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TfmMEDPolicy", "Get_Height", async function Get_Height(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: 0};
  L0["result"] = (await $.v(C, "Height"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TfmMEDPolicy", "Get_Width", async function Get_Width(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: 0};
  L0["result"] = (await $.v(C, "Width"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TfmMEDPolicy", "SaveData", async function SaveData(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: false};
  if ($.truthy($.ne((await $.mv((await $.v(C, "memSpecCond")), "Text")), ""))) {
    {
      const $t2 = (await $.v(C, "ODSSpecCond"));
      await $.stmt($.wcall([$t2], "Insert", [], C));
      await $.mset((await $.wcall([$t2], "FieldByName", ["name"], C)), "asString", (await $.mv((await $.wv([$t2], "memSpecCond", C, false)), "Text")));
      await $.stmt($.wcall([$t2], "Post", [], C));
      await $.stmt($.wcall([$t2], "RefreshRecord", [], C));
      await $.mset((await $.wv([$t2], "memSpecCond", C, false)), "Text", "");
    }
  }
  {
    const $t3 = (await $.v(C, "ODSPolicy"));
    if ($.truthy($.in_((await $.wv([$t3], "State", C, false)), [(await $.wv([$t3], "dsEdit", C, false)), (await $.wv([$t3], "dsInsert", C, false))]))) {
      await $.mset((await $.wcall([$t3], "FieldByName", ["MEDS_ID"], C)), "asFloat", (await $.wv([$t3], "id", C, false)));
      await $.mset((await $.wcall([$t3], "FieldByName", ["sc_id"], C)), "AsFloat", (await $.mv((await $.mcall((await $.wv([$t3], "ODSSpecCond", C, false)), "FieldByName", ["id"])), "asFloat")));
      await $.stmt($.wcall([$t3], "Post", [], C));
      await $.stmt($.wcall([$t3], "RefreshRecord", [], C));
    }
  }
  {
    const $t4 = (await $.v(C, "ODSContracts"));
    if ($.truthy($.in_((await $.wv([$t4], "State", C, false)), [(await $.wv([$t4], "dsEdit", C, false)), (await $.wv([$t4], "dsInsert", C, false))]))) {
      await $.mset((await $.wcall([$t4], "FieldByName", ["policy_id"], C)), "asFloat", (await $.mv((await $.mcall((await $.wv([$t4], "ODSPolicy", C, false)), "FieldByName", ["id"])), "asFloat")));
      if ($.truthy((await $.mv((await $.wv([$t4], "ODSContractsPolicy_Num", C, false)), "IsNull")))) {
        await $.mset((await $.wcall([$t4], "FieldByName", ["POLICY_NUM"], C)), "AsString", (await $.mcall((await $.wv([$t4], "OPCommon", C, false)), "callStringFunction", ["generatePolicy_Num", [(await $.wv([$t4], "tid", C, false))]])));
      }
      await $.stmt($.wcall([$t4], "Post", [], C));
    }
  }
  L0["result"] = true;
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TfmMEDPolicy", "ExportToWord", async function ExportToWord(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: undefined, "docfile": null, "day": 0, "month": 0, "year": 0, "i": 0};
  await $.staticConst(L0, "months", "medpolicyimpl.tfmmedpolicy.exporttoword.months", async () => ["Yanvar", "Fevral", "Mart", "Aprel", "May", "İyun", "İyul", "Avqust", "Sentyabr", "Oktyabr", "Noyabr", "Dekabr"]);
  L0["docfile"] = $.add((await $.call(C, "ExtractFilePath", [(await $.mv((await $.v(C, "Application")), "ExeName"))])), "\\MedicalPolicy.doc");
  {
    const $t5 = (await $.v(C, "INSWordExporter"));
    const $t6 = (await $.wv([$t5], "ODSReport", C, false));
    await $.wset([$t5, $t6], "FileName", (await $.wv([$t5, $t6], "DocFile", { get: async () => L0["docfile"], set: async (v) => { L0["docfile"] = v; }, local: true }, false)), C);
    await $.stmt((await $.mcall((await $.wv([$t5, $t6], "INSWordExporter", C, false)), "Open", [(await $.wv([$t5, $t6], "False", C, false))])));
    await $.stmt((await $.wcall([$t5, $t6], "SetVariable", ["mp_id", (await $.mv((await $.wv([$t5, $t6], "ODSPolicyID", C, false)), "value"))], C)));
    await $.mcall((await $.wv([$t5, $t6], "ODSReport", C, false)), "Open", []);
    { const $t7 = $.sub((await $.wv([$t5, $t6], "FieldCount", C, false)), 5);
      await $.wset([$t5, $t6], "i", 0, { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true });
      let $t8 = true;
      for (;;) {
        if (!$t8) { await $.wset([$t5, $t6], "i", $.succ((await $.wv([$t5, $t6], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false)), 1), { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }); }
        $t8 = false;
        if (!($.ord((await $.wv([$t5, $t6], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false))) <= $.ord($t7))) break;
        try {
          await $.stmt((await $.wcall([$t5, $t6], "SetBookmark", [(await $.wcall([$t5, $t6], "lowercase", [(await $.mv((await $.idx((await $.wv([$t5, $t6], "fields", C, false)), [(await $.wv([$t5, $t6], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false))])), "DisplayName"))], C)), (await $.wcall([$t5, $t6], "VarToStr", [(await $.mv((await $.idx((await $.wv([$t5, $t6], "fields", C, false)), [(await $.wv([$t5, $t6], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false))])), "AsVariant"))], C)), (await $.wv([$t5, $t6], "False", C, false)), (await $.wv([$t5, $t6], "False", C, false)), (await $.wv([$t5, $t6], "False", C, false)), (await $.wv([$t5, $t6], "False", C, false)), 10, "Arial AzLat", (await $.wv([$t5, $t6], "False", C, false))], C)));
        } catch ($t9) {
          $.rethrowControl($t9);
          if ($.excIs($t9, "Exception")) {
            L0["e"] = $.exc($t9);
            await $.stmt((await $.wcall([$t5, $t6], "MessageDlg", [(await $.mv((await $.wv([$t5, $t6], "E", { get: async () => L0["e"], set: async (v) => { L0["e"] = v; }, local: true }, false)), "Message")), (await $.wv([$t5, $t6], "mtConfirmation", C, false)), [(await $.wv([$t5, $t6], "mbYes", C, false)), (await $.wv([$t5, $t6], "mbNo", C, false))], 0], C)));
          }
          else { throw $t9; }
        }
        await $.tick();
      }
    }
    await $.stmt((await $.wcall([$t5, $t6], "DecodeDate", [(await $.mv((await $.mcall((await $.wv([$t5, $t6], "ODSReport", C, false)), "FieldByName", ["CONTRACTDATE"])), "Value")), $.ref(async () => (await $.wv([$t5, $t6], "year", { get: async () => L0["year"], set: async (v) => { L0["year"] = v; }, local: true }, false)), async ($t10) => { await $.wset([$t5, $t6], "year", $t10, { get: async () => L0["year"], set: async (v) => { L0["year"] = v; }, local: true }); }), $.ref(async () => (await $.wv([$t5, $t6], "month", { get: async () => L0["month"], set: async (v) => { L0["month"] = v; }, local: true }, false)), async ($t11) => { await $.wset([$t5, $t6], "month", $t11, { get: async () => L0["month"], set: async (v) => { L0["month"] = v; }, local: true }); }), $.ref(async () => (await $.wv([$t5, $t6], "day", { get: async () => L0["day"], set: async (v) => { L0["day"] = v; }, local: true }, false)), async ($t12) => { await $.wset([$t5, $t6], "day", $t12, { get: async () => L0["day"], set: async (v) => { L0["day"] = v; }, local: true }); })], C)));
    await $.stmt((await $.wcall([$t5, $t6], "SetBookmark", ["contractdate", $.add($.add($.add($.add((await $.wcall([$t5, $t6], "IntToStr", [(await $.wv([$t5, $t6], "day", { get: async () => L0["day"], set: async (v) => { L0["day"] = v; }, local: true }, false))], C)), "    "), (await $.idx((await $.wv([$t5, $t6], "months", { get: async () => L0["months"], set: async (v) => { L0["months"] = v; }, local: true }, false)), [(await $.wv([$t5, $t6], "month", { get: async () => L0["month"], set: async (v) => { L0["month"] = v; }, local: true }, false))]))), "    "), (await $.wcall([$t5, $t6], "IntToStr", [(await $.wv([$t5, $t6], "year", { get: async () => L0["year"], set: async (v) => { L0["year"] = v; }, local: true }, false))], C))), (await $.wv([$t5, $t6], "False", C, false)), (await $.wv([$t5, $t6], "False", C, false)), (await $.wv([$t5, $t6], "False", C, false)), (await $.wv([$t5, $t6], "False", C, false)), 10, "Arial AzLat", (await $.wv([$t5, $t6], "False", C, false))], C)));
    await $.stmt($.wcall([$t5, $t6], "Show", [], C));
    await $.mcall((await $.wv([$t5, $t6], "INSWordExporter", C, false)), "Close", []);
    await $.stmt($.wcall([$t5, $t6], "Close", [], C));
  }
  return L0.result;
}, {"params": [], "kind": "procedure", "ptypes": []});
  U.method("TfmMEDPolicy", "btApplyClick", async function btApplyClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy((await $.call(C, "SaveData", [])))) {
    await $.mset((await $.v(C, "btPrint")), "Enabled", true);
    await $.mset((await $.v(C, "btApply")), "Enabled", false);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TfmMEDPolicy", "btOkClick", async function btOkClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy((await $.call(C, "SaveData", [])))) {
    await $.stmt((await $.call(C, "PostMessage", [(await $.v(C, "FOwnerHandle")), (await $.v(C, "WM_ModalResult")), (await $.v(C, "mrOk")), 0])));
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TfmMEDPolicy", "btCancelClick", async function btCancelClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy((await $.call(C, "SaveData", [])))) {
    await $.stmt((await $.call(C, "PostMessage", [(await $.v(C, "FOwnerHandle")), (await $.v(C, "WM_ModalResult")), (await $.v(C, "mrCancel")), 0])));
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TfmMEDPolicy", "DBEdit7KeyPress", async function DBEdit7KeyPress(Self, p0, p1) {
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
  U.method("TfmMEDPolicy", "ActiveFormCreate", async function ActiveFormCreate(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.set(C, "fmMEDPolicy", Self);
  await $.set(C, "FParams", (await $.mv((await $.v(C, "TStringList")), "Create")));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TfmMEDPolicy", "DBLookupComboBox2Click", async function DBLookupComboBox2Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "key": ''};
  await $.fixArgs(L0, ["sender"]);
  await $.stmt((await $.call(C, "DBEdit7KeyPress", [L0["sender"], $.ref(async () => L0["key"], async ($t13) => { L0["key"] = $t13; })])));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TfmMEDPolicy", "AddTransh", async function AddTransh(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: undefined};
  {
    const $t14 = (await $.v(C, "ODSReport"));
    const $t15 = (await $.wv([$t14], "OPCOMMON", C, false));
    await $.stmt((await $.mcall((await $.wv([$t14, $t15], "ODSReport", C, false)), "SetVariable", ["mp_id", (await $.mv((await $.wv([$t14, $t15], "ODSPolicyID", C, false)), "value"))])));
    await $.stmt($.wcall([$t14, $t15], "Open", [], C));
    if ($.truthy($.gt((await $.wcall([$t14, $t15], "CallIntegerFunction", ["addtransaction", [(await $.mv((await $.wcall([$t14, $t15], "FieldByName", ["LOANACC_ID"], C)), "asFloat")), (await $.mv((await $.wcall([$t14, $t15], "FieldByName", ["CURRACC_ID"], C)), "asFloat")), (await $.mv((await $.wcall([$t14, $t15], "FieldByName", ["AMMOUNT"], C)), "asFloat"))]], C)), 0))) {
      await $.stmt((await $.wcall([$t14, $t15], "MessageDlg", ["Emeliyyat kecirildi.", (await $.wv([$t14, $t15], "mtInformation", C, false)), [(await $.wv([$t14, $t15], "mbOK", C, false))], 0], C)));
    }
    await $.stmt($.wcall([$t14, $t15], "Close", [], C));
  }
  return L0.result;
}, {"params": [], "kind": "procedure", "ptypes": []});
  U.method("TfmMEDPolicy", "btPrintClick", async function btPrintClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.eq((await $.call(C, "MessageDlg", ["Emeliyyat aparilsin?", (await $.v(C, "mtConfirmation")), [(await $.v(C, "mbYes")), (await $.v(C, "mbNo"))], 0])), (await $.v(C, "mrYes"))))) {
    await $.stmt((await $.call(C, "AddTransh", [])));
  }
  await $.stmt((await $.call(C, "ExportToWord", [])));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  return U;
}
