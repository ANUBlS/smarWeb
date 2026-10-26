// Generated from UPAccidentSuggest.pas by pas2js — do not edit by hand; regenerate instead.
/* eslint-disable */
// @ts-nocheck

export default function define($) {
  const U = $.unit("UPAccidentSuggest", ["Windows", "Messages", "SysUtils", "Classes", "Graphics", "Controls", "Forms", "Dialogs", "ActiveX", "AxCtrls", "PPAccidentSuggest_TLB", "StdVcl", "Db", "OracleData", "Mask", "DBCtrls", "StdCtrls", "ExtCtrls", "SBPlgAx50_TLB", "Buttons", "ComCtrls", "PlgModalContainer", "INSWordExporter", "ComObj", "ComServ", "sboapiDataModuleImpl"]);
  const C = [U];
  U.defClass("TPAccidentSuggest", "TActiveForm", {"panel1": {"name": "Panel1", "type": "TPanel"}, "panel2": {"name": "Panel2", "type": "TPanel"}, "label1": {"name": "Label1", "type": "TLabel"}, "label2": {"name": "Label2", "type": "TLabel"}, "label3": {"name": "Label3", "type": "TLabel"}, "label4": {"name": "Label4", "type": "TLabel"}, "label5": {"name": "Label5", "type": "TLabel"}, "label11": {"name": "Label11", "type": "TLabel"}, "dblookupcomboboxcondition": {"name": "DBLookupComboBoxCondition", "type": "TDBLookupComboBox"}, "memconditions": {"name": "memConditions", "type": "TMemo"}, "cbconditions": {"name": "cbConditions", "type": "TCheckBox"}, "label6": {"name": "Label6", "type": "TLabel"}, "dbedit1": {"name": "DBEdit1", "type": "TDBEdit"}, "dbedit3": {"name": "DBEdit3", "type": "TDBEdit"}, "dbedit4": {"name": "DBEdit4", "type": "TDBEdit"}, "dbedit5": {"name": "DBEdit5", "type": "TDBEdit"}, "dbedit6": {"name": "DBEdit6", "type": "TDBEdit"}, "accidentsource": {"name": "AccidentSource", "type": "TDataSource"}, "paccsugestsource": {"name": "PAccSugestSource", "type": "TDataSource"}, "conditionsource": {"name": "ConditionSource", "type": "TDataSource"}, "odspaccident": {"name": "ODSPAccident", "type": "TOracleDataSet"}, "odspaccsuggest": {"name": "ODSPAccSuggest", "type": "TOracleDataSet"}, "odscondition": {"name": "ODSCondition", "type": "TOracleDataSet"}, "btpolicy": {"name": "btPolicy", "type": "TBitBtn"}, "btprint": {"name": "btPrint", "type": "TBitBtn"}, "btapply": {"name": "btApply", "type": "TBitBtn"}, "bitbtn1": {"name": "BitBtn1", "type": "TBitBtn"}, "bitbtn2": {"name": "BitBtn2", "type": "TBitBtn"}, "odspaccsuggestid": {"name": "ODSPAccSuggestID", "type": "TFloatField"}, "odspaccsuggestpaid": {"name": "ODSPAccSuggestPAID", "type": "TFloatField"}, "odspaccsuggestcndt_id": {"name": "ODSPAccSuggestCNDT_ID", "type": "TFloatField"}, "odspaccsuggestinsurancesum": {"name": "ODSPAccSuggestINSURANCESUM", "type": "TFloatField"}, "odspaccsuggestinsurancetime": {"name": "ODSPAccSuggestINSURANCETIME", "type": "TDateTimeField"}, "odspaccsuggestmedicalcost": {"name": "ODSPAccSuggestMEDICALCOST", "type": "TFloatField"}, "odspaccsuggestall_insammount": {"name": "ODSPAccSuggestALL_INSAMMOUNT", "type": "TFloatField"}, "odspaccsuggestgeo": {"name": "ODSPAccSuggestGEO", "type": "TStringField"}, "label12": {"name": "Label12", "type": "TLabel"}, "dtpcontractdate": {"name": "DTPContractDate", "type": "TDateTimePicker"}, "odspaccidentid": {"name": "ODSPAccidentID", "type": "TFloatField"}, "odspaccidentkli_id": {"name": "ODSPAccidentKLI_ID", "type": "TFloatField"}, "odspaccidentcontact_person": {"name": "ODSPAccidentCONTACT_PERSON", "type": "TStringField"}, "odspaccidentbanking_details": {"name": "ODSPAccidentBANKING_DETAILS", "type": "TStringField"}, "odspaccidenttotalemp_number": {"name": "ODSPAccidentTOTALEMP_NUMBER", "type": "TFloatField"}, "odspaccidentaog": {"name": "ODSPAccidentAOG", "type": "TFloatField"}, "odspaccidentaop": {"name": "ODSPAccidentAOP", "type": "TFloatField"}, "odspaccidentsmg": {"name": "ODSPAccidentSMG", "type": "TFloatField"}, "odspaccidentsmp": {"name": "ODSPAccidentSMP", "type": "TFloatField"}, "odspaccidentbcg": {"name": "ODSPAccidentBCG", "type": "TFloatField"}, "odspaccidentbcp": {"name": "ODSPAccidentBCP", "type": "TFloatField"}, "odspaccidentdecired_amount": {"name": "ODSPAccidentDECIRED_AMOUNT", "type": "TFloatField"}, "odspaccidentad": {"name": "ODSPAccidentAD", "type": "TFloatField"}, "odspaccidentpd": {"name": "ODSPAccidentPD", "type": "TFloatField"}, "odspaccidentplu": {"name": "ODSPAccidentPLU", "type": "TFloatField"}, "odspaccidenteme": {"name": "ODSPAccidentEME", "type": "TFloatField"}, "odspaccidenthc": {"name": "ODSPAccidentHC", "type": "TFloatField"}, "odspaccidenths": {"name": "ODSPAccidentHS", "type": "TFloatField"}, "odspaccidentbrb": {"name": "ODSPAccidentBRB", "type": "TFloatField"}, "odspaccidentburn": {"name": "ODSPAccidentBURN", "type": "TFloatField"}, "odspaccidentttd": {"name": "ODSPAccidentTTD", "type": "TFloatField"}, "odspaccidentnot_coveredperiod": {"name": "ODSPAccidentNOT_COVEREDPERIOD", "type": "TStringField"}, "odspaccidentoutsideofaze": {"name": "ODSPAccidentOUTSIDEOFAZE", "type": "TStringField"}, "odspaccidentrenewal": {"name": "ODSPAccidentRENEWAL", "type": "TStringField"}, "odspaccidenttravels": {"name": "ODSPAccidentTRAVELS", "type": "TStringField"}, "odspaccidenttypeid": {"name": "ODSPAccidentTYPEID", "type": "TIntegerField"}, "odspaccidentriskid": {"name": "ODSPAccidentRISKID", "type": "TFloatField"}, "odspaccidentnot_covereperiod1": {"name": "ODSPAccidentNOT_COVEREPERIOD1", "type": "TStringField"}, "odspaccidentmaxweeks": {"name": "ODSPAccidentMAXWEEKS", "type": "TIntegerField"}, "odspaccidentprofitid": {"name": "ODSPAccidentPROFITID", "type": "TFloatField"}, "odscontracts": {"name": "ODSContracts", "type": "TOracleDataSet"}, "odscontractstype_id": {"name": "ODSContractsTYPE_ID", "type": "TFloatField"}, "odscontractsblank_id": {"name": "ODSContractsBLANK_ID", "type": "TFloatField"}, "odscontractssugg_id": {"name": "ODSContractsSUGG_ID", "type": "TFloatField"}, "odscontractspolicy_id": {"name": "ODSContractsPOLICY_ID", "type": "TFloatField"}, "odscontractsins_date": {"name": "ODSContractsINS_DATE", "type": "TDateTimeField"}, "odscontractsbegin_date": {"name": "ODSContractsBEGIN_DATE", "type": "TDateTimeField"}, "odscontractsend_date": {"name": "ODSContractsEND_DATE", "type": "TDateTimeField"}, "odscontractsvalute_id": {"name": "ODSContractsVALUTE_ID", "type": "TFloatField"}, "odscontractsammount": {"name": "ODSContractsAMMOUNT", "type": "TFloatField"}, "odscontractsclose_prefix": {"name": "ODSContractsCLOSE_PREFIX", "type": "TIntegerField"}, "odscontractskli_id": {"name": "ODSContractsKLI_ID", "type": "TFloatField"}, "odscontractsloanacc_id": {"name": "ODSContractsLOANACC_ID", "type": "TFloatField"}, "odscontractscurracc_id": {"name": "ODSContractsCURRACC_ID", "type": "TFloatField"}, "odscontractspolicy_num": {"name": "ODSContractsPOLICY_NUM", "type": "TStringField"}, "dscontracts": {"name": "DSContracts", "type": "TDataSource"}, "label7": {"name": "Label7", "type": "TLabel"}, "dblookupcombobox3": {"name": "DBLookupComboBox3", "type": "TDBLookupComboBox"}, "avalute": {"name": "AValute", "type": "TOracleDataSet"}, "avalutevalu_name": {"name": "AValuteVALU_NAME", "type": "TStringField"}, "avalutevalute": {"name": "AValuteVALUTE", "type": "TIntegerField"}, "avaluteval_name": {"name": "AValuteVAL_NAME", "type": "TStringField"}, "avalutevalu_short": {"name": "AValuteVALU_SHORT", "type": "TStringField"}, "avalutedata": {"name": "AValuteData", "type": "TDataSource"}, "odscontractsid": {"name": "ODSContractsID", "type": "TFloatField"}, "odspaccidentagentid": {"name": "ODSPAccidentAGENTID", "type": "TFloatField"}, "policycontainer": {"name": "PolicyContainer", "type": "TPlgModalContainer"}, "suggestexporter": {"name": "SuggestExporter", "type": "TINSWordExporter"}, "customers": {"name": "Customers", "type": "TOracleDataSet"}, "customersid": {"name": "CustomersID", "type": "TIntegerField"}, "customersname": {"name": "CustomersNAME", "type": "TStringField"}, "customersaddress": {"name": "CustomersADDRESS", "type": "TStringField"}, "customersmobilephone": {"name": "CustomersMOBILEPHONE", "type": "TStringField"}, "customersfax": {"name": "CustomersFAX", "type": "TStringField"}, "customersdata": {"name": "CustomersData", "type": "TDataSource"}, "odsconditionid": {"name": "ODSConditionID", "type": "TFloatField"}, "odsconditionname": {"name": "ODSConditionNAME", "type": "TStringField"}, "risksdata": {"name": "RisksData", "type": "TDataSource"}, "risks": {"name": "Risks", "type": "TOracleDataSet"}, "risksid": {"name": "RisksID", "type": "TFloatField"}, "risksname": {"name": "RisksNAME", "type": "TStringField"}, "odsbeneficiary": {"name": "ODSBeneficiary", "type": "TOracleDataSet"}, "odsbeneficiaryid": {"name": "ODSBeneficiaryID", "type": "TFloatField"}, "odsbeneficiaryname": {"name": "ODSBeneficiaryNAME", "type": "TStringField"}, "odsbeneficiaryaddress": {"name": "ODSBeneficiaryADDRESS", "type": "TStringField"}, "odsbeneficiaryphone": {"name": "ODSBeneficiaryPHONE", "type": "TStringField"}, "odsbeneficiarybanking_details": {"name": "ODSBeneficiaryBANKING_DETAILS", "type": "TStringField"}, "beneficiarysource": {"name": "BeneficiarySource", "type": "TDataSource"}, "odspaccsuggestfrz_id": {"name": "ODSPAccSuggestFRZ_ID", "type": "TFloatField"}, "franshiz": {"name": "Franshiz", "type": "TOracleDataSet"}, "franshizid": {"name": "FranshizID", "type": "TFloatField"}, "franshizname": {"name": "FranshizNAME", "type": "TStringField"}, "franshizdata": {"name": "FranshizData", "type": "TDataSource"}, "memfrashize": {"name": "memFrashize", "type": "TMemo"}, "cbfranshiz": {"name": "cbFranshiz", "type": "TCheckBox"}, "label9": {"name": "Label9", "type": "TLabel"}, "dblookupcomboboxfranshiz": {"name": "DBLookupComboBoxFranshiz", "type": "TDBLookupComboBox"}, "fparams": {"name": "FParams", "type": "TStrings"}, "fownerhandle": {"name": "FOwnerHandle", "type": "Integer"}, "id": {"name": "id", "type": "integer"}, "f": {"name": "f", "type": "boolean"}, "fevents": {"name": "FEvents", "type": "IPAccidentSuggestEvents"}}, {"params": {"name": "Params", "read": "Get_Params", "write": "Set_Params"}});
  U.init(async () => {
    U.const("WM_ModalResult", $.add((await $.v(C, "WM_USER")), 139));
    U.const("fmCaption", "Teklifname formasi: (%s)");
    U.var_("PAccidentSuggest", null, "TPAccidentSuggest");
  });
  U.method("TPAccidentSuggest", "DefinePropertyPages", async function DefinePropertyPages(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"definepropertypage": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["definepropertypage"]);
  return L0.result;
}, {"params": ["DefinePropertyPage"], "kind": "procedure", "ptypes": ["TDefinePropertyPage"]});
  U.method("TPAccidentSuggest", "EventSinkChanged", async function EventSinkChanged(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"eventsink": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["eventsink"]);
  await $.set(C, "FEvents", L0["eventsink"]);
  return L0.result;
}, {"params": ["EventSink"], "kind": "procedure", "ptypes": ["IUnknown"]});
  U.method("TPAccidentSuggest", "Initialize", async function Initialize(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: undefined};
  await $.inherited(Self, "TPAccidentSuggest", "Initialize", null, arguments);
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
  U.method("TPAccidentSuggest", "Get_Active", async function Get_Active(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: false};
  L0["result"] = (await $.v(C, "Active"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TPAccidentSuggest", "Get_AutoScroll", async function Get_AutoScroll(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: false};
  L0["result"] = (await $.v(C, "AutoScroll"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TPAccidentSuggest", "Get_AutoSize", async function Get_AutoSize(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: false};
  L0["result"] = (await $.v(C, "AutoSize"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TPAccidentSuggest", "Get_AxBorderStyle", async function Get_AxBorderStyle(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: null};
  L0["result"] = (await $.call(C, "Ord", [(await $.v(C, "AxBorderStyle"))]));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TPAccidentSuggest", "Get_Caption", async function Get_Caption(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: ''};
  L0["result"] = (await $.call(C, "WideString", [(await $.v(C, "Caption"))]));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TPAccidentSuggest", "Get_Color", async function Get_Color(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: null};
  L0["result"] = (await $.call(C, "OLE_COLOR", [(await $.v(C, "Color"))]));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TPAccidentSuggest", "Get_Cursor", async function Get_Cursor(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: 0};
  L0["result"] = (await $.call(C, "Smallint", [(await $.v(C, "Cursor"))]));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TPAccidentSuggest", "Get_DoubleBuffered", async function Get_DoubleBuffered(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: false};
  L0["result"] = (await $.v(C, "DoubleBuffered"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TPAccidentSuggest", "Get_DropTarget", async function Get_DropTarget(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: false};
  L0["result"] = (await $.v(C, "DropTarget"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TPAccidentSuggest", "Get_Enabled", async function Get_Enabled(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: false};
  L0["result"] = (await $.v(C, "Enabled"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TPAccidentSuggest", "Get_Font", async function Get_Font(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: null};
  await $.stmt((await $.call(C, "GetOleFont", [(await $.v(C, "Font")), L0["result"]])));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TPAccidentSuggest", "Get_HelpFile", async function Get_HelpFile(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: ''};
  L0["result"] = (await $.call(C, "WideString", [(await $.v(C, "HelpFile"))]));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TPAccidentSuggest", "Get_KeyPreview", async function Get_KeyPreview(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: false};
  L0["result"] = (await $.v(C, "KeyPreview"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TPAccidentSuggest", "Get_PixelsPerInch", async function Get_PixelsPerInch(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: 0};
  L0["result"] = (await $.v(C, "PixelsPerInch"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TPAccidentSuggest", "Get_PrintScale", async function Get_PrintScale(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: null};
  L0["result"] = (await $.call(C, "Ord", [(await $.v(C, "PrintScale"))]));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TPAccidentSuggest", "Get_Scaled", async function Get_Scaled(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: false};
  L0["result"] = (await $.v(C, "Scaled"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TPAccidentSuggest", "Get_Visible", async function Get_Visible(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: false};
  L0["result"] = (await $.v(C, "Visible"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TPAccidentSuggest", "Get_VisibleDockClientCount", async function Get_VisibleDockClientCount(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: 0};
  L0["result"] = (await $.v(C, "VisibleDockClientCount"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TPAccidentSuggest", "_Set_Font", async function _Set_Font(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.stmt((await $.call(C, "SetOleFont", [(await $.v(C, "Font")), L0["value"]])));
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["IFontDisp"]});
  U.method("TPAccidentSuggest", "ActivateEvent", async function ActivateEvent(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.ne((await $.v(C, "FEvents")), null))) {
    await $.mcall((await $.v(C, "FEvents")), "OnActivate", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TPAccidentSuggest", "ClickEvent", async function ClickEvent(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.ne((await $.v(C, "FEvents")), null))) {
    await $.mcall((await $.v(C, "FEvents")), "OnClick", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TPAccidentSuggest", "CreateEvent", async function CreateEvent(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.ne((await $.v(C, "FEvents")), null))) {
    await $.mcall((await $.v(C, "FEvents")), "OnCreate", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TPAccidentSuggest", "DblClickEvent", async function DblClickEvent(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.ne((await $.v(C, "FEvents")), null))) {
    await $.mcall((await $.v(C, "FEvents")), "OnDblClick", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TPAccidentSuggest", "DeactivateEvent", async function DeactivateEvent(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.ne((await $.v(C, "FEvents")), null))) {
    await $.mcall((await $.v(C, "FEvents")), "OnDeactivate", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TPAccidentSuggest", "DestroyEvent", async function DestroyEvent(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.ne((await $.v(C, "FEvents")), null))) {
    await $.mcall((await $.v(C, "FEvents")), "OnDestroy", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TPAccidentSuggest", "KeyPressEvent", async function KeyPressEvent(Self, p0, p1) {
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
  U.method("TPAccidentSuggest", "PaintEvent", async function PaintEvent(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.ne((await $.v(C, "FEvents")), null))) {
    await $.mcall((await $.v(C, "FEvents")), "OnPaint", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TPAccidentSuggest", "Set_AutoScroll", async function Set_AutoScroll(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "AutoScroll", L0["value"]);
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["WordBool"]});
  U.method("TPAccidentSuggest", "Set_AutoSize", async function Set_AutoSize(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "AutoSize", L0["value"]);
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["WordBool"]});
  U.method("TPAccidentSuggest", "Set_AxBorderStyle", async function Set_AxBorderStyle(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "AxBorderStyle", (await $.call(C, "TActiveFormBorderStyle", [L0["value"]])));
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["TxActiveFormBorderStyle"]});
  U.method("TPAccidentSuggest", "Set_Caption", async function Set_Caption(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "Caption", (await $.call(C, "TCaption", [L0["value"]])));
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["WideString"]});
  U.method("TPAccidentSuggest", "Set_Color", async function Set_Color(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "Color", (await $.call(C, "TColor", [L0["value"]])));
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["OLE_COLOR"]});
  U.method("TPAccidentSuggest", "Set_Cursor", async function Set_Cursor(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "Cursor", (await $.call(C, "TCursor", [L0["value"]])));
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["Smallint"]});
  U.method("TPAccidentSuggest", "Set_DoubleBuffered", async function Set_DoubleBuffered(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "DoubleBuffered", L0["value"]);
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["WordBool"]});
  U.method("TPAccidentSuggest", "Set_DropTarget", async function Set_DropTarget(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "DropTarget", L0["value"]);
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["WordBool"]});
  U.method("TPAccidentSuggest", "Set_Enabled", async function Set_Enabled(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "Enabled", L0["value"]);
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["WordBool"]});
  U.method("TPAccidentSuggest", "Set_Font", async function Set_Font(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.asRef(p0), result: undefined};
  await $.stmt((await $.call(C, "SetOleFont", [(await $.v(C, "Font")), (await L0["value"].get())])));
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["IFontDisp"]});
  U.method("TPAccidentSuggest", "Set_HelpFile", async function Set_HelpFile(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "HelpFile", (await $.call(C, "String", [L0["value"]])));
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["WideString"]});
  U.method("TPAccidentSuggest", "Set_KeyPreview", async function Set_KeyPreview(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "KeyPreview", L0["value"]);
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["WordBool"]});
  U.method("TPAccidentSuggest", "Set_PixelsPerInch", async function Set_PixelsPerInch(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "PixelsPerInch", L0["value"]);
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["Integer"]});
  U.method("TPAccidentSuggest", "Set_PrintScale", async function Set_PrintScale(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "PrintScale", (await $.call(C, "TPrintScale", [L0["value"]])));
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["TxPrintScale"]});
  U.method("TPAccidentSuggest", "Set_Scaled", async function Set_Scaled(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "Scaled", L0["value"]);
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["WordBool"]});
  U.method("TPAccidentSuggest", "Set_Visible", async function Set_Visible(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "Visible", L0["value"]);
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["WordBool"]});
  U.method("TPAccidentSuggest", "ActiveFormCreate", async function ActiveFormCreate(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.set(C, "PAccidentSuggest", Self);
  await $.set(C, "FParams", (await $.mv((await $.v(C, "TStringList")), "Create")));
  await $.mcall((await $.v(C, "ODSCondition")), "Open", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TPAccidentSuggest", "Get_Owner", async function Get_Owner(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: 0};
  L0["result"] = (await $.v(C, "handle"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TPAccidentSuggest", "Set_Owner", async function Set_Owner(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"val": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["val"]);
  if ($.truthy($.gt(L0["val"], 0))) {
    await $.set(C, "FOwnerHandle", L0["val"]);
  }
  return L0.result;
}, {"params": ["val"], "kind": "procedure", "ptypes": ["Integer"]});
  U.method("TPAccidentSuggest", "Get_Params", async function Get_Params(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"name": $.copyArg(p0), result: null};
  await $.fixArgs(L0, ["name"]);
  L0["result"] = (await $.idx((await $.mv((await $.v(C, "FParams")), "Values")), [L0["name"]]));
  return L0.result;
}, {"params": ["Name"], "kind": "function", "ptypes": ["WideString"]});
  U.method("TPAccidentSuggest", "Set_Params", async function Set_Params(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"name": $.copyArg(p0), "value": $.copyArg(p1), result: undefined};
  await $.fixArgs(L0, ["name", "value"]);
  { const $t1 = await $.iset((await $.mv((await $.v(C, "FParams")), "Values")), [L0["name"]], L0["value"]); if ($t1 !== undefined) { await $.mset((await $.v(C, "FParams")), "Values", $t1); } }
  return L0.result;
}, {"params": ["Name", "Value"], "kind": "procedure", "ptypes": ["WideString", "OleVariant"]});
  U.method("TPAccidentSuggest", "InstanceInitialize", async function InstanceInitialize(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: null};
  L0["result"] = (await $.v(C, "S_OK"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TPAccidentSuggest", "Cleanup", async function Cleanup(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: null};
  L0["result"] = (await $.v(C, "S_OK"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TPAccidentSuggest", "UIObjectActivate", async function UIObjectActivate(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: null};
  await $.set(C, "id", (await $.call(C, "StrToInt", [(await $.call(C, "Get_Params", ["MK_ID"]))])));
  await $.set(C, "f", true);
  await $.mcall((await $.v(C, "ODSPAccident")), "Close", []);
  await $.stmt((await $.mcall((await $.v(C, "ODSPAccident")), "SetVariable", ["ID", (await $.v(C, "id"))])));
  await $.mcall((await $.v(C, "ODSPaccident")), "Open", []);
  await $.mcall((await $.v(C, "ODSContracts")), "Close", []);
  await $.stmt((await $.mcall((await $.v(C, "ODSContracts")), "SetVariable", ["blankid", (await $.v(C, "id"))])));
  await $.mcall((await $.v(C, "ODSContracts")), "Open", []);
  if ($.truthy($.eq((await $.call(C, "Get_Params", ["Mod"])), "Insert"))) {
    await $.mcall((await $.v(C, "ODSPAccSuggest")), "Insert", []);
    await $.set(C, "Caption", (await $.call(C, "format", [(await $.v(C, "fmCaption")), ["Elave"]])));
    await $.stmt((await $.mcall((await $.v(C, "ODSPAccSuggest")), "SetVariable", ["paid", (await $.v(C, "id"))])));
    await $.mcall((await $.v(C, "ODSPAccSuggest")), "Open", []);
    await $.mset((await $.v(C, "DTPContractDate")), "DateTime", (await $.v(C, "Now")));
  } else {
    await $.mcall((await $.v(C, "ODSPAccSuggest")), "Close", []);
    await $.stmt((await $.mcall((await $.v(C, "ODSPAccSuggest")), "SetVariable", ["paid", (await $.v(C, "id"))])));
    await $.mcall((await $.v(C, "ODSPAccSuggest")), "Open", []);
    await $.mcall((await $.v(C, "ODSPAccSuggest")), "Edit", []);
    await $.mset((await $.v(C, "DTPContractDate")), "DateTime", (await $.mv((await $.v(C, "ODSPAccSuggestInsurancetime")), "value")));
    await $.mset((await $.v(C, "memConditions")), "Text", "");
    await $.set(C, "Caption", (await $.call(C, "format", [(await $.v(C, "fmCaption")), ["Redakte"]])));
    await $.mset((await $.v(C, "btPrint")), "Enabled", true);
    await $.mset((await $.v(C, "btPolicy")), "Enabled", true);
  }
  L0["result"] = (await $.v(C, "S_OK"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TPAccidentSuggest", "QueryDeactivate", async function QueryDeactivate(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: null};
  L0["result"] = (await $.v(C, "S_OK"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TPAccidentSuggest", "UIObjectDeactivate", async function UIObjectDeactivate(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: null};
  L0["result"] = (await $.v(C, "S_OK"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TPAccidentSuggest", "SaveState", async function SaveState(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: null};
  L0["result"] = (await $.v(C, "S_OK"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TPAccidentSuggest", "Get_Height", async function Get_Height(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: 0};
  L0["result"] = (await $.v(C, "Height"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TPAccidentSuggest", "Get_Width", async function Get_Width(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: 0};
  L0["result"] = (await $.v(C, "Width"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TPAccidentSuggest", "DBEdit1KeyPress", async function DBEdit1KeyPress(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "key": $.asRef(p1), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.eq((await L0["key"].get()), "\r"))) {
    if ($.truthy($.ne((await $.call(C, "HiWord", [(await $.call(C, "GetKeyState", [(await $.v(C, "VK_Shift"))]))])), 0))) {
      {
        const $t2 = L0["sender"];
        await $.stmt((await $.wcall([$t2], "SelectNext", [(await $.wv([$t2], "ActiveControl", C, false)), (await $.wv([$t2], "False", C, false)), (await $.wv([$t2], "True", C, false))], C)));
      }
    } else {
      {
        const $t3 = L0["sender"];
        await $.stmt((await $.wcall([$t3], "SelectNext", [(await $.wv([$t3], "ActiveControl", C, false)), (await $.wv([$t3], "True", C, false)), (await $.wv([$t3], "True", C, false))], C)));
      }
    }
    await L0["key"].set("\u0000");
  }
  return L0.result;
}, {"params": ["Sender", "Key"], "kind": "procedure", "ptypes": ["TObject", "Char"]});
  U.method("TPAccidentSuggest", "DBEdit1Change", async function DBEdit1Change(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t4 = (await $.v(C, "ODSCondition"));
    await $.mset((await $.wv([$t4], "memConditions", C, false)), "Text", (await $.mv((await $.wcall([$t4], "FieldByName", ["name"], C)), "asString")));
  }
  await $.mset((await $.v(C, "btApply")), "Enabled", true);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TPAccidentSuggest", "BitBtn1Click", async function BitBtn1Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy((await $.call(C, "SaveData", [])))) {
    await $.stmt((await $.call(C, "PostMessage", [(await $.v(C, "FOwnerHandle")), (await $.v(C, "WM_ModalResult")), (await $.v(C, "mrOk")), 0])));
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TPAccidentSuggest", "btApplyClick", async function btApplyClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy((await $.call(C, "SaveData", [])))) {
    await $.mset((await $.v(C, "btPolicy")), "Enabled", true);
    await $.mset((await $.v(C, "btPrint")), "Enabled", true);
    await $.mset((await $.v(C, "btApply")), "Enabled", false);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TPAccidentSuggest", "BitBtn2Click", async function BitBtn2Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.stmt((await $.call(C, "PostMessage", [(await $.v(C, "FOwnerHandle")), (await $.v(C, "WM_ModalResult")), (await $.v(C, "mrCancel")), 0])));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TPAccidentSuggest", "SaveData", async function SaveData(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: false};
  L0["result"] = false;
  if ($.truthy($.eq((await $.mv((await $.v(C, "cbConditions")), "State")), (await $.v(C, "cbChecked"))))) {
    {
      const $t5 = (await $.v(C, "ODSCondition"));
      await $.stmt($.wcall([$t5], "Insert", [], C));
      await $.mset((await $.wcall([$t5], "FieldByName", ["name"], C)), "asString", (await $.mv((await $.wv([$t5], "memConditions", C, false)), "Text")));
      await $.stmt($.wcall([$t5], "Post", [], C));
      await $.stmt($.wcall([$t5], "RefreshRecord", [], C));
    }
  }
  if ($.truthy($.eq((await $.mv((await $.v(C, "cbFranshiz")), "State")), (await $.v(C, "cbChecked"))))) {
    {
      const $t6 = (await $.v(C, "Franshiz"));
      await $.stmt($.wcall([$t6], "Insert", [], C));
      await $.mset((await $.wcall([$t6], "FieldByName", ["name"], C)), "asString", (await $.mv((await $.wv([$t6], "memFrashize", C, false)), "Text")));
      await $.stmt($.wcall([$t6], "Post", [], C));
      await $.stmt($.wcall([$t6], "RefreshRecord", [], C));
    }
  }
  {
    const $t7 = (await $.v(C, "ODSPAccSuggest"));
    await $.mset((await $.wcall([$t7], "FieldByName", ["paid"], C)), "AsFloat", (await $.wv([$t7], "id", C, false)));
    await $.mset((await $.wcall([$t7], "FieldByName", ["cndt_id"], C)), "AsFloat", (await $.mv((await $.mcall((await $.wv([$t7], "ODSCondition", C, false)), "FieldByName", ["id"])), "asFloat")));
    await $.mset((await $.wcall([$t7], "FieldByName", ["insurancetime"], C)), "AsDateTime", (await $.mv((await $.wv([$t7], "DTPContractDate", C, false)), "DateTime")));
    if ($.truthy($.in_((await $.wv([$t7], "State", C, false)), [(await $.wv([$t7], "dsInsert", C, false)), (await $.wv([$t7], "dsEdit", C, false))]))) {
      await $.stmt($.wcall([$t7], "Post", [], C));
    }
    await $.stmt((await $.wcall([$t7], "RefreshRecord", [], C)));
    if ($.truthy((await $.wv([$t7], "f", C, false)))) {
      await $.mcall((await $.wv([$t7], "ODSContracts", C, false)), "Edit", []);
      await $.mset((await $.mcall((await $.wv([$t7], "ODSContracts", C, false)), "FieldByName", ["sugg_id"])), "AsFloat", (await $.mv((await $.wcall([$t7], "FieldByName", ["id"], C)), "asFloat")));
      await $.mset((await $.mcall((await $.wv([$t7], "ODSContracts", C, false)), "FieldByName", ["ins_date"])), "AsDateTime", (await $.mv((await $.wv([$t7], "DTPContractDate", C, false)), "DateTime")));
      if ($.truthy($.in_((await $.mv((await $.wv([$t7], "ODSContracts", C, false)), "State")), [(await $.wv([$t7], "dsInsert", C, false)), (await $.wv([$t7], "dsEdit", C, false))]))) {
        await $.mcall((await $.wv([$t7], "ODSContracts", C, false)), "Post", []);
      }
    }
    await $.wset([$t7], "f", (await $.wv([$t7], "false", C, false)), C);
    await $.wset([$t7], "result", (await $.wv([$t7], "True", C, false)), { get: async () => L0["result"], set: async (v) => { L0["result"] = v; }, local: true });
  }
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TPAccidentSuggest", "DBLookupComboBox3Click", async function DBLookupComboBox3Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mset((await $.v(C, "btApply")), "Enabled", true);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TPAccidentSuggest", "btPolicyClick", async function btPolicyClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "p": null};
  await $.fixArgs(L0, ["sender"]);
  L0["p"] = (await $.mv((await $.v(C, "TStringList")), "Create"));
  { const $t8 = await $.iset((await $.mv(L0["p"], "Values")), ["ID"], (await $.call(C, "FloatToStr", [(await $.mv((await $.v(C, "ODSPAccidentId")), "value"))]))); if ($t8 !== undefined) { await $.mset(L0["p"], "Values", $t8); } }
  {
    const $t9 = (await $.v(C, "PolicyContainer"));
    await $.stmt((await $.wcall([$t9], "ShowModal", [(await $.wcall([$t9], "StringToGuid", ["{DF05FA85-2A5E-472D-8506-3C31DF75BDD8}"], C)), (await $.wv([$t9], "p", { get: async () => L0["p"], set: async (v) => { L0["p"] = v; }, local: true }, false))], C)));
  }
  await $.mcall(L0["p"], "Free", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TPAccidentSuggest", "btPrintClick", async function btPrintClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.stmt((await $.mcall((await $.v(C, "AValute")), "Locate", ["valute", (await $.mv((await $.v(C, "ODSCOntractsValute_ID")), "Value")), []])));
  await $.stmt((await $.mcall((await $.v(C, "Risks")), "Locate", ["id", (await $.mv((await $.v(C, "ODSPAccidentRISKid")), "Value")), []])));
  await $.stmt((await $.mcall((await $.v(C, "ODSBeneficiary")), "Locate", ["id", (await $.mv((await $.v(C, "ODSPAccidentPROFITID")), "Value")), []])));
  await $.stmt((await $.mcall((await $.v(C, "ODSCondition")), "Locate", ["id", (await $.mv((await $.v(C, "ODSPaccSuggestCNDT_ID")), "Value")), []])));
  await $.stmt((await $.mcall((await $.v(C, "Franshiz")), "Locate", ["id", (await $.mv((await $.v(C, "ODSPaccSuggestFRZ_ID")), "Value")), []])));
  try {
    {
      const $t10 = (await $.v(C, "SuggestExporter"));
      await $.wset([$t10], "FileName", $.add((await $.wcall([$t10], "ExtractFilePath", [(await $.mv((await $.wv([$t10], "Application", C, false)), "ExeName"))], C)), "\\Ferdi Qeza Teklif.doc"), C);
      await $.stmt((await $.wcall([$t10], "Open", [(await $.wv([$t10], "False", C, false))], C)));
      await $.stmt((await $.wcall([$t10], "SetBookmark", ["Insured", (await $.mv((await $.wv([$t10], "CustomersName", C, false)), "value")), (await $.wv([$t10], "false", C, false)), (await $.wv([$t10], "false", C, false)), (await $.wv([$t10], "False", C, false)), (await $.wv([$t10], "false", C, false)), 8, "Arial AzLat", (await $.wv([$t10], "False", C, false))], C)));
      await $.stmt((await $.wcall([$t10], "SetBookmark", ["Insperiod", $.add($.add((await $.wcall([$t10], "DateToStr", [(await $.mv((await $.wv([$t10], "ODSContractsBegin_date", C, false)), "value"))], C)), " - "), (await $.wcall([$t10], "DateToStr", [(await $.mv((await $.wv([$t10], "ODSContractsEnd_date", C, false)), "value"))], C))), (await $.wv([$t10], "false", C, false)), (await $.wv([$t10], "false", C, false)), (await $.wv([$t10], "False", C, false)), (await $.wv([$t10], "false", C, false)), 8, "Arial AzLat", (await $.wv([$t10], "False", C, false))], C)));
      await $.stmt((await $.wcall([$t10], "SetBookmark", ["Valute", (await $.mv((await $.wv([$t10], "AValuteValu_name", C, false)), "value")), (await $.wv([$t10], "false", C, false)), (await $.wv([$t10], "false", C, false)), (await $.wv([$t10], "False", C, false)), (await $.wv([$t10], "false", C, false)), 8, "Arial AzLat", (await $.wv([$t10], "False", C, false))], C)));
      await $.stmt((await $.wcall([$t10], "SetBookmark", ["Insrisks", (await $.mv((await $.wv([$t10], "RisksName", C, false)), "value")), (await $.wv([$t10], "false", C, false)), (await $.wv([$t10], "false", C, false)), (await $.wv([$t10], "False", C, false)), (await $.wv([$t10], "false", C, false)), 8, "Arial AzLat", (await $.wv([$t10], "False", C, false))], C)));
      await $.stmt((await $.wcall([$t10], "SetBookmark", ["Beneficiary", (await $.mv((await $.wv([$t10], "ODSBeneficiaryName", C, false)), "value")), (await $.wv([$t10], "false", C, false)), (await $.wv([$t10], "false", C, false)), (await $.wv([$t10], "False", C, false)), (await $.wv([$t10], "false", C, false)), 8, "Arial AzLat", (await $.wv([$t10], "False", C, false))], C)));
      await $.stmt((await $.wcall([$t10], "SetBookmark", ["Inssum", (await $.wcall([$t10], "FloatToStr", [(await $.mv((await $.wv([$t10], "ODSPAccSuggestInsurancesum", C, false)), "value"))], C)), (await $.wv([$t10], "false", C, false)), (await $.wv([$t10], "false", C, false)), (await $.wv([$t10], "False", C, false)), (await $.wv([$t10], "false", C, false)), 8, "Arial AzLat", (await $.wv([$t10], "False", C, false))], C)));
      await $.stmt((await $.wcall([$t10], "SetBookmark", ["Franshiz", (await $.mv((await $.wv([$t10], "FranshizName", C, false)), "value")), (await $.wv([$t10], "false", C, false)), (await $.wv([$t10], "false", C, false)), (await $.wv([$t10], "False", C, false)), (await $.wv([$t10], "false", C, false)), 8, "Arial AzLat", (await $.wv([$t10], "False", C, false))], C)));
      await $.stmt((await $.wcall([$t10], "SetBookmark", ["Insammount", (await $.wcall([$t10], "CurrToStr", [(await $.mv((await $.wv([$t10], "ODSCONtractsAmmount", C, false)), "value"))], C)), (await $.wv([$t10], "false", C, false)), (await $.wv([$t10], "false", C, false)), (await $.wv([$t10], "False", C, false)), (await $.wv([$t10], "false", C, false)), 8, "Arial AzLat", (await $.wv([$t10], "False", C, false))], C)));
      await $.stmt((await $.wcall([$t10], "SetBookmark", ["Medicalcost", (await $.wcall([$t10], "CurrToStr", [(await $.mv((await $.wv([$t10], "ODSPAccSuggestMedicalcost", C, false)), "value"))], C)), (await $.wv([$t10], "false", C, false)), (await $.wv([$t10], "false", C, false)), (await $.wv([$t10], "False", C, false)), (await $.wv([$t10], "false", C, false)), 8, "Arial AzLat", (await $.wv([$t10], "False", C, false))], C)));
      await $.stmt((await $.wcall([$t10], "SetBookmark", ["AInsammount", (await $.wcall([$t10], "FloatToStr", [(await $.mv((await $.wv([$t10], "ODSPAccSuggestAll_InsAmmount", C, false)), "value"))], C)), (await $.wv([$t10], "false", C, false)), (await $.wv([$t10], "false", C, false)), (await $.wv([$t10], "False", C, false)), (await $.wv([$t10], "false", C, false)), 8, "Arial AzLat", (await $.wv([$t10], "False", C, false))], C)));
      await $.stmt((await $.wcall([$t10], "SetBookmark", ["Geo", (await $.mv((await $.wv([$t10], "ODSPaccSuggestGeo", C, false)), "value")), (await $.wv([$t10], "false", C, false)), (await $.wv([$t10], "false", C, false)), (await $.wv([$t10], "False", C, false)), (await $.wv([$t10], "false", C, false)), 8, "Arial AzLat", (await $.wv([$t10], "False", C, false))], C)));
      await $.stmt((await $.wcall([$t10], "SetBookmark", ["Instime", (await $.wcall([$t10], "DateToStr", [(await $.mv((await $.wv([$t10], "ODSPAccSuggestInsuranceTime", C, false)), "value"))], C)), (await $.wv([$t10], "false", C, false)), (await $.wv([$t10], "false", C, false)), (await $.wv([$t10], "False", C, false)), (await $.wv([$t10], "false", C, false)), 8, "Arial AzLat", (await $.wv([$t10], "False", C, false))], C)));
      await $.stmt((await $.wcall([$t10], "SetBookmark", ["Cond", (await $.mv((await $.wv([$t10], "ODSConditionName", C, false)), "value")), (await $.wv([$t10], "false", C, false)), (await $.wv([$t10], "false", C, false)), (await $.wv([$t10], "False", C, false)), (await $.wv([$t10], "false", C, false)), 8, "Arial AzLat", (await $.wv([$t10], "False", C, false))], C)));
    }
  } finally {
    await $.mcall((await $.v(C, "SuggestExporter")), "Show", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  return U;
}
