// Generated from UCPropertySuggest.pas by pas2js — do not edit by hand; regenerate instead.
/* eslint-disable */
// @ts-nocheck

export default function define($) {
  const U = $.unit("UCPropertySuggest", ["Windows", "Messages", "SysUtils", "Classes", "Graphics", "Controls", "Forms", "Dialogs", "ActiveX", "AxCtrls", "PCPropertySuggest_TLB", "StdVcl", "StdCtrls", "ComCtrls", "Buttons", "ExtCtrls", "Mask", "DBCtrls", "SBPlgAx50_TLB", "Db", "OracleData", "INSWordExporter", "PlgModalContainer", "ComObj", "ComServ", "sboapiDataModuleImpl"]);
  const C = [U];
  U.defClass("TCPropertySuggest", "TActiveForm", {"groupbox2": {"name": "GroupBox2", "type": "TGroupBox"}, "label9": {"name": "Label9", "type": "TLabel"}, "label10": {"name": "Label10", "type": "TLabel"}, "label11": {"name": "Label11", "type": "TLabel"}, "label12": {"name": "Label12", "type": "TLabel"}, "label19": {"name": "Label19", "type": "TLabel"}, "dbedit7": {"name": "DBEdit7", "type": "TDBEdit"}, "panel1": {"name": "Panel1", "type": "TPanel"}, "bitbtn1": {"name": "BitBtn1", "type": "TBitBtn"}, "bitbtn2": {"name": "BitBtn2", "type": "TBitBtn"}, "btapply": {"name": "btApply", "type": "TBitBtn"}, "btprint": {"name": "btPrint", "type": "TBitBtn"}, "btpolicy": {"name": "btPolicy", "type": "TBitBtn"}, "dblookupcomboboxcondition": {"name": "DBLookupComboBoxCondition", "type": "TDBLookupComboBox"}, "cbfranshiz": {"name": "cbFranshiz", "type": "TCheckBox"}, "cbconditions": {"name": "cbConditions", "type": "TCheckBox"}, "dblookupcomboboxfranshiz": {"name": "DBLookupComboBoxFranshiz", "type": "TDBLookupComboBox"}, "dtpcontractdate": {"name": "DTPContractDate", "type": "TDateTimePicker"}, "memfrashize": {"name": "memFrashize", "type": "TMemo"}, "memconditions": {"name": "memConditions", "type": "TMemo"}, "dblookupcombobox4": {"name": "DBLookupComboBox4", "type": "TDBLookupComboBox"}, "odsrisks": {"name": "ODSRisks", "type": "TOracleDataSet"}, "odsrisksid": {"name": "ODSRisksID", "type": "TFloatField"}, "odsrisksname": {"name": "ODSRisksNAME", "type": "TStringField"}, "risksource": {"name": "RiskSource", "type": "TDataSource"}, "odscustomers": {"name": "ODSCustomers", "type": "TOracleDataSet"}, "odscustomersid": {"name": "ODSCustomersID", "type": "TIntegerField"}, "odscustomersname": {"name": "ODSCustomersNAME", "type": "TStringField"}, "odscustomersaddress": {"name": "ODSCustomersADDRESS", "type": "TStringField"}, "odscustomersmobilephone": {"name": "ODSCustomersMOBILEPHONE", "type": "TStringField"}, "odscustomersfax": {"name": "ODSCustomersFAX", "type": "TStringField"}, "odscustomerscontactperson": {"name": "ODSCustomersCONTACTPERSON", "type": "TStringField"}, "odscustomerscontactpersonphone": {"name": "ODSCustomersCONTACTPERSONPHONE", "type": "TStringField"}, "customerssource": {"name": "CustomersSource", "type": "TDataSource"}, "odscproperty": {"name": "ODSCProperty", "type": "TOracleDataSet"}, "odscpropertyid": {"name": "ODSCPropertyID", "type": "TFloatField"}, "odscpropertykli_id": {"name": "ODSCPropertyKLI_ID", "type": "TFloatField"}, "odscpropertyfulldescription": {"name": "ODSCPropertyFULLDESCRIPTION", "type": "TStringField"}, "odscpropertylocationobj": {"name": "ODSCPropertyLOCATIONOBJ", "type": "TStringField"}, "odscpropertyyearsinbusiness": {"name": "ODSCPropertyYEARSINBUSINESS", "type": "TStringField"}, "odscpropertybuildingusage": {"name": "ODSCPropertyBUILDINGUSAGE", "type": "TStringField"}, "odscpropertyconstyear": {"name": "ODSCPropertyCONSTYEAR", "type": "TDateTimeField"}, "odscpropertyfloorsnum": {"name": "ODSCPropertyFLOORSNUM", "type": "TIntegerField"}, "odscpropertywallsm": {"name": "ODSCPropertyWALLSM", "type": "TStringField"}, "odscpropertyceilingsm": {"name": "ODSCPropertyCEILINGSM", "type": "TStringField"}, "odscpropertyroofm": {"name": "ODSCPropertyROOFM", "type": "TStringField"}, "odscpropertyarea": {"name": "ODSCPropertyAREA", "type": "TFloatField"}, "odscpropertyapplicantspace": {"name": "ODSCPropertyAPPLICANTSPACE", "type": "TFloatField"}, "odscpropertyearthquakedetails": {"name": "ODSCPropertyEARTHQUAKEDETAILS", "type": "TStringField"}, "odscpropertyflamable": {"name": "ODSCPropertyFLAMABLE", "type": "TStringField"}, "odscpropertysurroindingdetails": {"name": "ODSCPropertySURROINDINGDETAILS", "type": "TStringField"}, "odscpropertysitueted": {"name": "ODSCPropertySITUETED", "type": "TStringField"}, "odscpropertyguard": {"name": "ODSCPropertyGUARD", "type": "TStringField"}, "odscpropertyalarm": {"name": "ODSCPropertyALARM", "type": "TStringField"}, "odscpropertylocks": {"name": "ODSCPropertyLOCKS", "type": "TStringField"}, "odscpropertysecuritylocks": {"name": "ODSCPropertySECURITYLOCKS", "type": "TStringField"}, "odscpropertybars": {"name": "ODSCPropertyBARS", "type": "TStringField"}, "odscpropertyother": {"name": "ODSCPropertyOTHER", "type": "TStringField"}, "odscpropertysettings": {"name": "ODSCPropertySETTINGS", "type": "TStringField"}, "odscpropertyrepair": {"name": "ODSCPropertyREPAIR", "type": "TStringField"}, "odscpropertyheated": {"name": "ODSCPropertyHEATED", "type": "TStringField"}, "odscpropertyriskid": {"name": "ODSCPropertyRISKID", "type": "TFloatField"}, "odscpropertyannual": {"name": "ODSCPropertyANNUAL", "type": "TFloatField"}, "odscpropertywages": {"name": "ODSCPropertyWAGES", "type": "TFloatField"}, "odscpropertyrent": {"name": "ODSCPropertyRENT", "type": "TFloatField"}, "odscpropertyemployes": {"name": "ODSCPropertyEMPLOYES", "type": "TFloatField"}, "odscpropertyexpirity": {"name": "ODSCPropertyEXPIRITY", "type": "TDateTimeField"}, "odscpropertylosshistory": {"name": "ODSCPropertyLOSSHISTORY", "type": "TStringField"}, "odscpropertyrenewal": {"name": "ODSCPropertyRENEWAL", "type": "TStringField"}, "odscpropertythirdparty": {"name": "ODSCPropertyTHIRDPARTY", "type": "TStringField"}, "odscpropertyotherinf": {"name": "ODSCPropertyOTHERINF", "type": "TStringField"}, "odscpropertyindeminity": {"name": "ODSCPropertyINDEMINITY", "type": "TStringField"}, "odscpropertyvaluetype": {"name": "ODSCPropertyVALUETYPE", "type": "TStringField"}, "odscpropertybuildings": {"name": "ODSCPropertyBUILDINGS", "type": "TFloatField"}, "odscpropertycontent": {"name": "ODSCPropertyCONTENT", "type": "TFloatField"}, "odscpropertyequipment": {"name": "ODSCPropertyEQUIPMENT", "type": "TFloatField"}, "odscpropertyglass": {"name": "ODSCPropertyGLASS", "type": "TFloatField"}, "odscpropertycash": {"name": "ODSCPropertyCASH", "type": "TFloatField"}, "odscpropertywarehouse": {"name": "ODSCPropertyWAREHOUSE", "type": "TFloatField"}, "odscpropertystock": {"name": "ODSCPropertySTOCK", "type": "TFloatField"}, "odscpropertyproducts": {"name": "ODSCPropertyPRODUCTS", "type": "TFloatField"}, "odscpropertyworkinprogress": {"name": "ODSCPropertyWORKINPROGRESS", "type": "TFloatField"}, "odscpropertyrawmaterials": {"name": "ODSCPropertyRAWMATERIALS", "type": "TFloatField"}, "odscpropertyclose_prefix": {"name": "ODSCPropertyCLOSE_PREFIX", "type": "TIntegerField"}, "odscpropertytypeid": {"name": "ODSCPropertyTYPEID", "type": "TIntegerField"}, "odscpropertyprofitid": {"name": "ODSCPropertyPROFITID", "type": "TFloatField"}, "cpropertysource": {"name": "CPropertySource", "type": "TDataSource"}, "odscontracts": {"name": "ODSContracts", "type": "TOracleDataSet"}, "odscontractsid": {"name": "ODSContractsID", "type": "TFloatField"}, "odscontractstype_id": {"name": "ODSContractsTYPE_ID", "type": "TFloatField"}, "odscontractsins_date": {"name": "ODSContractsINS_DATE", "type": "TDateTimeField"}, "odscontractsbegin_date": {"name": "ODSContractsBEGIN_DATE", "type": "TDateTimeField"}, "odscontractsend_date": {"name": "ODSContractsEND_DATE", "type": "TDateTimeField"}, "odscontractsvalute_id": {"name": "ODSContractsVALUTE_ID", "type": "TFloatField"}, "odscontractsammount": {"name": "ODSContractsAMMOUNT", "type": "TFloatField"}, "odscontractsclose_prefix": {"name": "ODSContractsCLOSE_PREFIX", "type": "TIntegerField"}, "odscontractskli_id": {"name": "ODSContractsKLI_ID", "type": "TFloatField"}, "odscontractsloanacc_id": {"name": "ODSContractsLOANACC_ID", "type": "TFloatField"}, "odscontractscurracc_id": {"name": "ODSContractsCURRACC_ID", "type": "TFloatField"}, "odscontractspolicy_num": {"name": "ODSContractsPOLICY_NUM", "type": "TStringField"}, "dscontracts": {"name": "DSContracts", "type": "TDataSource"}, "odscpropertysuggest": {"name": "ODSCPropertySuggest", "type": "TOracleDataSet"}, "cpsuggestsource": {"name": "CPSuggestSource", "type": "TDataSource"}, "odscpropertysuggestid": {"name": "ODSCPropertySuggestID", "type": "TFloatField"}, "odscpropertysuggestbid": {"name": "ODSCPropertySuggestBID", "type": "TFloatField"}, "odscpropertysuggestriskaddress": {"name": "ODSCPropertySuggestRISKADDRESS", "type": "TStringField"}, "odscpropertysuggestinsuranceammount": {"name": "ODSCPropertySuggestINSURANCEAMMOUNT", "type": "TFloatField"}, "odscpropertysuggestenddate": {"name": "ODSCPropertySuggestENDDATE", "type": "TDateTimeField"}, "odscpropertysuggestrisk_id": {"name": "ODSCPropertySuggestRISK_ID", "type": "TFloatField"}, "odscpropertysuggestfrz_id": {"name": "ODSCPropertySuggestFRZ_ID", "type": "TFloatField"}, "odscpropertysuggestcndt_id": {"name": "ODSCPropertySuggestCNDT_ID", "type": "TFloatField"}, "odscpropertysuggestval_id": {"name": "ODSCPropertySuggestVAL_ID", "type": "TFloatField"}, "odscpropertysuggestinsurancesum": {"name": "ODSCPropertySuggestINSURANCESUM", "type": "TFloatField"}, "avalute": {"name": "AValute", "type": "TOracleDataSet"}, "avalutevalu_name": {"name": "AValuteVALU_NAME", "type": "TStringField"}, "avalutevalute": {"name": "AValuteVALUTE", "type": "TIntegerField"}, "avaluteval_name": {"name": "AValuteVAL_NAME", "type": "TStringField"}, "avalutevalu_short": {"name": "AValuteVALU_SHORT", "type": "TStringField"}, "avalutedata": {"name": "AValuteData", "type": "TDataSource"}, "odsconditions": {"name": "ODSConditions", "type": "TOracleDataSet"}, "odsconditionsid": {"name": "ODSConditionsID", "type": "TFloatField"}, "odsconditionsname": {"name": "ODSConditionsNAME", "type": "TStringField"}, "conditionsdata": {"name": "ConditionsData", "type": "TDataSource"}, "franshiz": {"name": "Franshiz", "type": "TOracleDataSet"}, "franshizid": {"name": "FranshizID", "type": "TFloatField"}, "franshizname": {"name": "FranshizNAME", "type": "TStringField"}, "franshizdata": {"name": "FranshizData", "type": "TDataSource"}, "suggestexporter": {"name": "SuggestExporter", "type": "TINSWordExporter"}, "label1": {"name": "Label1", "type": "TLabel"}, "dbedit1": {"name": "DBEdit1", "type": "TDBEdit"}, "label2": {"name": "Label2", "type": "TLabel"}, "dbedit2": {"name": "DBEdit2", "type": "TDBEdit"}, "policycontainer": {"name": "PolicyContainer", "type": "TPlgModalContainer"}, "odscontractsinssumm": {"name": "ODSContractsINSSUMM", "type": "TFloatField"}, "odscontractsfranshiz": {"name": "ODSContractsFRANSHIZ", "type": "TFloatField"}, "odscontractstariff": {"name": "ODSContractsTARIFF", "type": "TFloatField"}, "odscontractsstate": {"name": "ODSContractsSTATE", "type": "TIntegerField"}, "odscontractsagent_id": {"name": "ODSContractsAGENT_ID", "type": "TFloatField"}, "odscontractspnum": {"name": "ODSContractsPNUM", "type": "TFloatField"}, "odscontractsben_id": {"name": "ODSContractsBEN_ID", "type": "TFloatField"}, "odscontractsbeneficiary": {"name": "ODSContractsBENEFICIARY", "type": "TStringField"}, "id": {"name": "id", "type": "Integer"}, "fparams": {"name": "FParams", "type": "TStrings"}, "fownerhandle": {"name": "FOwnerHandle", "type": "Integer"}, "f": {"name": "f", "type": "boolean"}, "fevents": {"name": "FEvents", "type": "ICPropertySuggestEvents"}}, {"params": {"name": "Params", "read": "Get_Params", "write": "Set_Params"}});
  U.init(async () => {
    U.const("WM_ModalResult", $.add((await $.v(C, "WM_USER")), 139));
    U.const("fmCaption", "Teklifname: (%s)");
    U.var_("CPropertySuggest", null, "TCPropertySuggest");
  });
  U.method("TCPropertySuggest", "DefinePropertyPages", async function DefinePropertyPages(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"definepropertypage": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["definepropertypage"]);
  return L0.result;
}, {"params": ["DefinePropertyPage"], "kind": "procedure", "ptypes": ["TDefinePropertyPage"]});
  U.method("TCPropertySuggest", "EventSinkChanged", async function EventSinkChanged(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"eventsink": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["eventsink"]);
  await $.set(C, "FEvents", L0["eventsink"]);
  return L0.result;
}, {"params": ["EventSink"], "kind": "procedure", "ptypes": ["IUnknown"]});
  U.method("TCPropertySuggest", "Initialize", async function Initialize(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: undefined};
  await $.inherited(Self, "TCPropertySuggest", "Initialize", null, arguments);
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
  U.method("TCPropertySuggest", "Get_Active", async function Get_Active(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: false};
  L0["result"] = (await $.v(C, "Active"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TCPropertySuggest", "Get_AutoScroll", async function Get_AutoScroll(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: false};
  L0["result"] = (await $.v(C, "AutoScroll"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TCPropertySuggest", "Get_AutoSize", async function Get_AutoSize(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: false};
  L0["result"] = (await $.v(C, "AutoSize"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TCPropertySuggest", "Get_AxBorderStyle", async function Get_AxBorderStyle(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: null};
  L0["result"] = (await $.call(C, "Ord", [(await $.v(C, "AxBorderStyle"))]));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TCPropertySuggest", "Get_Caption", async function Get_Caption(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: ''};
  L0["result"] = (await $.call(C, "WideString", [(await $.v(C, "Caption"))]));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TCPropertySuggest", "Get_Color", async function Get_Color(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: null};
  L0["result"] = (await $.call(C, "OLE_COLOR", [(await $.v(C, "Color"))]));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TCPropertySuggest", "Get_Cursor", async function Get_Cursor(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: 0};
  L0["result"] = (await $.call(C, "Smallint", [(await $.v(C, "Cursor"))]));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TCPropertySuggest", "Get_DoubleBuffered", async function Get_DoubleBuffered(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: false};
  L0["result"] = (await $.v(C, "DoubleBuffered"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TCPropertySuggest", "Get_DropTarget", async function Get_DropTarget(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: false};
  L0["result"] = (await $.v(C, "DropTarget"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TCPropertySuggest", "Get_Enabled", async function Get_Enabled(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: false};
  L0["result"] = (await $.v(C, "Enabled"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TCPropertySuggest", "Get_Font", async function Get_Font(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: null};
  await $.stmt((await $.call(C, "GetOleFont", [(await $.v(C, "Font")), L0["result"]])));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TCPropertySuggest", "Get_HelpFile", async function Get_HelpFile(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: ''};
  L0["result"] = (await $.call(C, "WideString", [(await $.v(C, "HelpFile"))]));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TCPropertySuggest", "Get_KeyPreview", async function Get_KeyPreview(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: false};
  L0["result"] = (await $.v(C, "KeyPreview"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TCPropertySuggest", "Get_PixelsPerInch", async function Get_PixelsPerInch(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: 0};
  L0["result"] = (await $.v(C, "PixelsPerInch"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TCPropertySuggest", "Get_PrintScale", async function Get_PrintScale(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: null};
  L0["result"] = (await $.call(C, "Ord", [(await $.v(C, "PrintScale"))]));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TCPropertySuggest", "Get_Scaled", async function Get_Scaled(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: false};
  L0["result"] = (await $.v(C, "Scaled"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TCPropertySuggest", "Get_Visible", async function Get_Visible(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: false};
  L0["result"] = (await $.v(C, "Visible"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TCPropertySuggest", "Get_VisibleDockClientCount", async function Get_VisibleDockClientCount(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: 0};
  L0["result"] = (await $.v(C, "VisibleDockClientCount"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TCPropertySuggest", "_Set_Font", async function _Set_Font(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.stmt((await $.call(C, "SetOleFont", [(await $.v(C, "Font")), L0["value"]])));
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["IFontDisp"]});
  U.method("TCPropertySuggest", "ActivateEvent", async function ActivateEvent(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.ne((await $.v(C, "FEvents")), null))) {
    await $.mcall((await $.v(C, "FEvents")), "OnActivate", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TCPropertySuggest", "ClickEvent", async function ClickEvent(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.ne((await $.v(C, "FEvents")), null))) {
    await $.mcall((await $.v(C, "FEvents")), "OnClick", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TCPropertySuggest", "CreateEvent", async function CreateEvent(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.ne((await $.v(C, "FEvents")), null))) {
    await $.mcall((await $.v(C, "FEvents")), "OnCreate", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TCPropertySuggest", "DblClickEvent", async function DblClickEvent(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.ne((await $.v(C, "FEvents")), null))) {
    await $.mcall((await $.v(C, "FEvents")), "OnDblClick", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TCPropertySuggest", "DeactivateEvent", async function DeactivateEvent(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.ne((await $.v(C, "FEvents")), null))) {
    await $.mcall((await $.v(C, "FEvents")), "OnDeactivate", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TCPropertySuggest", "DestroyEvent", async function DestroyEvent(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.ne((await $.v(C, "FEvents")), null))) {
    await $.mcall((await $.v(C, "FEvents")), "OnDestroy", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TCPropertySuggest", "KeyPressEvent", async function KeyPressEvent(Self, p0, p1) {
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
  U.method("TCPropertySuggest", "PaintEvent", async function PaintEvent(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.ne((await $.v(C, "FEvents")), null))) {
    await $.mcall((await $.v(C, "FEvents")), "OnPaint", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TCPropertySuggest", "Set_AutoScroll", async function Set_AutoScroll(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "AutoScroll", L0["value"]);
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["WordBool"]});
  U.method("TCPropertySuggest", "Set_AutoSize", async function Set_AutoSize(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "AutoSize", L0["value"]);
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["WordBool"]});
  U.method("TCPropertySuggest", "Set_AxBorderStyle", async function Set_AxBorderStyle(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "AxBorderStyle", (await $.call(C, "TActiveFormBorderStyle", [L0["value"]])));
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["TxActiveFormBorderStyle"]});
  U.method("TCPropertySuggest", "Set_Caption", async function Set_Caption(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "Caption", (await $.call(C, "TCaption", [L0["value"]])));
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["WideString"]});
  U.method("TCPropertySuggest", "Set_Color", async function Set_Color(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "Color", (await $.call(C, "TColor", [L0["value"]])));
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["OLE_COLOR"]});
  U.method("TCPropertySuggest", "Set_Cursor", async function Set_Cursor(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "Cursor", (await $.call(C, "TCursor", [L0["value"]])));
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["Smallint"]});
  U.method("TCPropertySuggest", "Set_DoubleBuffered", async function Set_DoubleBuffered(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "DoubleBuffered", L0["value"]);
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["WordBool"]});
  U.method("TCPropertySuggest", "Set_DropTarget", async function Set_DropTarget(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "DropTarget", L0["value"]);
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["WordBool"]});
  U.method("TCPropertySuggest", "Set_Enabled", async function Set_Enabled(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "Enabled", L0["value"]);
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["WordBool"]});
  U.method("TCPropertySuggest", "Set_Font", async function Set_Font(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.asRef(p0), result: undefined};
  await $.stmt((await $.call(C, "SetOleFont", [(await $.v(C, "Font")), (await L0["value"].get())])));
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["IFontDisp"]});
  U.method("TCPropertySuggest", "Set_HelpFile", async function Set_HelpFile(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "HelpFile", (await $.call(C, "String", [L0["value"]])));
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["WideString"]});
  U.method("TCPropertySuggest", "Set_KeyPreview", async function Set_KeyPreview(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "KeyPreview", L0["value"]);
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["WordBool"]});
  U.method("TCPropertySuggest", "Set_PixelsPerInch", async function Set_PixelsPerInch(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "PixelsPerInch", L0["value"]);
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["Integer"]});
  U.method("TCPropertySuggest", "Set_PrintScale", async function Set_PrintScale(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "PrintScale", (await $.call(C, "TPrintScale", [L0["value"]])));
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["TxPrintScale"]});
  U.method("TCPropertySuggest", "Set_Scaled", async function Set_Scaled(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "Scaled", L0["value"]);
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["WordBool"]});
  U.method("TCPropertySuggest", "Set_Visible", async function Set_Visible(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "Visible", L0["value"]);
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["WordBool"]});
  U.method("TCPropertySuggest", "Get_Owner", async function Get_Owner(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: 0};
  L0["result"] = (await $.v(C, "handle"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TCPropertySuggest", "Set_Owner", async function Set_Owner(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"val": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["val"]);
  if ($.truthy($.gt(L0["val"], 0))) {
    await $.set(C, "FOwnerHandle", L0["val"]);
  }
  return L0.result;
}, {"params": ["val"], "kind": "procedure", "ptypes": ["Integer"]});
  U.method("TCPropertySuggest", "Get_Params", async function Get_Params(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"name": $.copyArg(p0), result: null};
  await $.fixArgs(L0, ["name"]);
  L0["result"] = (await $.idx((await $.mv((await $.v(C, "FParams")), "Values")), [L0["name"]]));
  return L0.result;
}, {"params": ["Name"], "kind": "function", "ptypes": ["WideString"]});
  U.method("TCPropertySuggest", "Set_Params", async function Set_Params(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"name": $.copyArg(p0), "value": $.copyArg(p1), result: undefined};
  await $.fixArgs(L0, ["name", "value"]);
  { const $t1 = await $.iset((await $.mv((await $.v(C, "FParams")), "Values")), [L0["name"]], L0["value"]); if ($t1 !== undefined) { await $.mset((await $.v(C, "FParams")), "Values", $t1); } }
  return L0.result;
}, {"params": ["Name", "Value"], "kind": "procedure", "ptypes": ["WideString", "OleVariant"]});
  U.method("TCPropertySuggest", "InstanceInitialize", async function InstanceInitialize(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: null};
  L0["result"] = (await $.v(C, "S_OK"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TCPropertySuggest", "Cleanup", async function Cleanup(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: null};
  L0["result"] = (await $.v(C, "S_OK"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TCPropertySuggest", "UIObjectActivate", async function UIObjectActivate(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: null};
  await $.set(C, "id", (await $.call(C, "StrToInt", [(await $.call(C, "Get_Params", ["CID"]))])));
  await $.set(C, "f", true);
  await $.mcall((await $.v(C, "ODSCProperty")), "Close", []);
  await $.stmt((await $.mcall((await $.v(C, "ODSCProperty")), "SetVariable", ["cid", (await $.v(C, "id"))])));
  await $.mcall((await $.v(C, "ODSCProperty")), "Open", []);
  await $.mcall((await $.v(C, "ODSContracts")), "Close", []);
  await $.stmt((await $.mcall((await $.v(C, "ODSContracts")), "SetVariable", ["cid", (await $.v(C, "id"))])));
  await $.mcall((await $.v(C, "ODSContracts")), "Open", []);
  await $.mcall((await $.v(C, "ODSCPropertySUGGEST")), "CloseAll", []);
  await $.stmt((await $.mcall((await $.v(C, "ODSCPropertySUGGEST")), "SetVariable", ["bid", (await $.v(C, "id"))])));
  await $.mcall((await $.v(C, "ODSCPropertySUGGEST")), "Open", []);
  if ($.truthy($.lt((await $.mv((await $.v(C, "ODSCPropertySUGGEST")), "RecordCount")), 1))) {
    await $.mset((await $.v(C, "DTPContractDate")), "DateTime", (await $.v(C, "Now")));
    await $.set(C, "Caption", (await $.call(C, "format", [(await $.v(C, "fmCaption")), ["Elave"]])));
  } else {
    await $.set(C, "Caption", (await $.call(C, "format", [(await $.v(C, "fmCaption")), ["Redakte"]])));
  }
  if ($.truthy($.eq((await $.mv((await $.v(C, "ODSCPropertySUGGESTID")), "Value")), 0))) {
    await $.mset((await $.v(C, "btPrint")), "Enabled", false);
    await $.mset((await $.v(C, "btPolicy")), "Enabled", false);
  }
  await $.stmt($.call(C, "LoadData", []));
  await $.mcall((await $.v(C, "ODSCPropertySUGGEST")), "Edit", []);
  L0["result"] = (await $.v(C, "S_OK"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TCPropertySuggest", "QueryDeactivate", async function QueryDeactivate(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: null};
  L0["result"] = (await $.v(C, "S_OK"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TCPropertySuggest", "UIObjectDeactivate", async function UIObjectDeactivate(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: null};
  L0["result"] = (await $.v(C, "S_OK"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TCPropertySuggest", "SaveState", async function SaveState(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: null};
  L0["result"] = (await $.v(C, "S_OK"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TCPropertySuggest", "Get_Height", async function Get_Height(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: 0};
  L0["result"] = (await $.v(C, "Height"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TCPropertySuggest", "Get_Width", async function Get_Width(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: 0};
  L0["result"] = (await $.v(C, "Width"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TCPropertySuggest", "ActiveFormCreate", async function ActiveFormCreate(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.set(C, "CPropertySuggest", Self);
  await $.set(C, "FParams", (await $.mv((await $.v(C, "TStringList")), "Create")));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TCPropertySuggest", "BitBtn2Click", async function BitBtn2Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.stmt((await $.call(C, "PostMessage", [(await $.v(C, "FOwnerHandle")), (await $.v(C, "WM_ModalResult")), (await $.v(C, "mrCancel")), 0])));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TCPropertySuggest", "LoadData", async function LoadData(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: undefined};
  await $.mset((await $.v(C, "DTPContractDate")), "DateTime", (await $.mv((await $.mcall((await $.v(C, "ODSCPropertySuggest")), "FieldByName", ["enddate"])), "AsDateTime")));
  return L0.result;
}, {"params": [], "kind": "procedure", "ptypes": []});
  U.method("TCPropertySuggest", "SaveData", async function SaveData(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: false};
  L0["result"] = false;
  if ($.truthy($.eq((await $.mv((await $.v(C, "cbFranshiz")), "State")), (await $.v(C, "cbChecked"))))) {
    {
      const $t2 = (await $.v(C, "Franshiz"));
      await $.stmt($.wcall([$t2], "Insert", [], C));
      await $.mset((await $.wcall([$t2], "FieldByName", ["name"], C)), "asString", (await $.mv((await $.wv([$t2], "memFrashize", C, false)), "Text")));
      await $.stmt($.wcall([$t2], "Post", [], C));
      await $.stmt($.wcall([$t2], "RefreshRecord", [], C));
    }
  }
  if ($.truthy($.eq((await $.mv((await $.v(C, "cbConditions")), "State")), (await $.v(C, "cbChecked"))))) {
    {
      const $t3 = (await $.v(C, "ODSConditions"));
      await $.stmt($.wcall([$t3], "Insert", [], C));
      await $.mset((await $.wcall([$t3], "FieldByName", ["name"], C)), "asString", (await $.mv((await $.wv([$t3], "memConditions", C, false)), "Text")));
      await $.stmt($.wcall([$t3], "Post", [], C));
      await $.stmt($.wcall([$t3], "RefreshRecord", [], C));
    }
  }
  {
    const $t4 = (await $.v(C, "ODSCPropertySuggest"));
    await $.mset((await $.wcall([$t4], "FieldByName", ["bid"], C)), "AsFloat", (await $.wv([$t4], "id", C, false)));
    await $.mset((await $.wcall([$t4], "FieldByName", ["frz_id"], C)), "AsFloat", (await $.mv((await $.mcall((await $.wv([$t4], "Franshiz", C, false)), "FieldByName", ["id"])), "asFloat")));
    await $.mset((await $.wcall([$t4], "FieldByName", ["cndt_id"], C)), "AsFloat", (await $.mv((await $.mcall((await $.wv([$t4], "ODSConditions", C, false)), "FieldByName", ["id"])), "asFloat")));
    await $.mset((await $.wcall([$t4], "FieldByName", ["enddate"], C)), "AsDateTime", (await $.mv((await $.wv([$t4], "DTPContractDate", C, false)), "DateTime")));
    if ($.truthy($.in_((await $.wv([$t4], "State", C, false)), [(await $.wv([$t4], "dsInsert", C, false)), (await $.wv([$t4], "dsEdit", C, false))]))) {
      await $.stmt($.wcall([$t4], "Post", [], C));
    }
    await $.stmt((await $.wcall([$t4], "RefreshRecord", [], C)));
    if ($.truthy((await $.wv([$t4], "f", C, false)))) {
      await $.mcall((await $.wv([$t4], "ODSContracts", C, false)), "Edit", []);
      await $.mset((await $.mcall((await $.wv([$t4], "ODSContracts", C, false)), "FieldByName", ["ins_date"])), "AsDateTime", (await $.mv((await $.wv([$t4], "DTPContractDate", C, false)), "DateTime")));
      await $.mcall((await $.wv([$t4], "ODSContracts", C, false)), "Post", []);
    }
    await $.wset([$t4], "f", (await $.wv([$t4], "false", C, false)), C);
    await $.wset([$t4], "result", (await $.wv([$t4], "True", C, false)), { get: async () => L0["result"], set: async (v) => { L0["result"] = v; }, local: true });
  }
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TCPropertySuggest", "BitBtn1Click", async function BitBtn1Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy((await $.call(C, "SaveData", [])))) {
    await $.stmt((await $.call(C, "PostMessage", [(await $.v(C, "FOwnerHandle")), (await $.v(C, "WM_ModalResult")), (await $.v(C, "mrOk")), 0])));
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TCPropertySuggest", "DBLookupComboBoxFranshizClick", async function DBLookupComboBoxFranshizClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t5 = (await $.v(C, "Franshiz"));
    await $.mset((await $.wv([$t5], "memFrashize", C, false)), "Text", (await $.mv((await $.wcall([$t5], "FieldByName", ["name"], C)), "asString")));
  }
  await $.mset((await $.v(C, "btApply")), "Enabled", true);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TCPropertySuggest", "DBLookupComboBoxConditionClick", async function DBLookupComboBoxConditionClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t6 = (await $.v(C, "ODSConditions"));
    await $.mset((await $.wv([$t6], "memConditions", C, false)), "Text", (await $.mv((await $.wcall([$t6], "FieldByName", ["name"], C)), "asString")));
  }
  await $.mset((await $.v(C, "btApply")), "Enabled", true);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TCPropertySuggest", "DBEdit7Change", async function DBEdit7Change(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mset((await $.v(C, "btApply")), "Enabled", true);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TCPropertySuggest", "DBEdit7KeyPress", async function DBEdit7KeyPress(Self, p0, p1) {
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
  U.method("TCPropertySuggest", "btApplyClick", async function btApplyClick(Self, p0) {
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
  U.method("TCPropertySuggest", "btPrintClick", async function btPrintClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.stmt((await $.mcall((await $.v(C, "ODSCustomers")), "Locate", ["id", (await $.mv((await $.v(C, "ODSCPropertyKLI_ID")), "Value")), []])));
  await $.stmt((await $.mcall((await $.v(C, "AValute")), "Locate", ["valute", (await $.mv((await $.v(C, "ODSCOntractsValute_ID")), "Value")), []])));
  await $.stmt((await $.mcall((await $.v(C, "ODSRisks")), "Locate", ["id", (await $.mv((await $.v(C, "ODSCPropertyRISKid")), "Value")), []])));
  await $.stmt((await $.mcall((await $.v(C, "ODSConditions")), "Locate", ["id", (await $.mv((await $.v(C, "ODSCPropertySuggestCNDT_ID")), "Value")), []])));
  await $.stmt((await $.mcall((await $.v(C, "Franshiz")), "Locate", ["id", (await $.mv((await $.v(C, "ODSCPropertySuggestFRZ_ID")), "Value")), []])));
  try {
    {
      const $t9 = (await $.v(C, "SuggestExporter"));
      await $.wset([$t9], "FileName", $.add((await $.wcall([$t9], "ExtractFilePath", [(await $.mv((await $.wv([$t9], "Application", C, false)), "ExeName"))], C)), "\\CPropertySuggest.doc"), C);
      await $.stmt((await $.wcall([$t9], "Open", [(await $.wv([$t9], "False", C, false))], C)));
      await $.stmt((await $.wcall([$t9], "SetBookmark", ["Insured", (await $.mv((await $.wv([$t9], "ODSCustomersName", C, false)), "value")), (await $.wv([$t9], "false", C, false)), (await $.wv([$t9], "false", C, false)), (await $.wv([$t9], "False", C, false)), (await $.wv([$t9], "false", C, false)), 8, "Arial AzLat", (await $.wv([$t9], "False", C, false))], C)));
      await $.stmt((await $.wcall([$t9], "SetBookmark", ["RAddress", (await $.mv((await $.wv([$t9], "ODSCPropertySuggestRiskAddress", C, false)), "value")), (await $.wv([$t9], "false", C, false)), (await $.wv([$t9], "false", C, false)), (await $.wv([$t9], "False", C, false)), (await $.wv([$t9], "false", C, false)), 8, "Arial AzLat", (await $.wv([$t9], "False", C, false))], C)));
      await $.stmt((await $.wcall([$t9], "SetBookmark", ["Insperiod", $.add($.add((await $.wcall([$t9], "DateToStr", [(await $.mv((await $.wv([$t9], "ODSContractsBegin_date", C, false)), "value"))], C)), " - "), (await $.wcall([$t9], "DateToStr", [(await $.mv((await $.wv([$t9], "ODSContractsEnd_date", C, false)), "value"))], C))), (await $.wv([$t9], "false", C, false)), (await $.wv([$t9], "false", C, false)), (await $.wv([$t9], "False", C, false)), (await $.wv([$t9], "false", C, false)), 8, "Arial AzLat", (await $.wv([$t9], "False", C, false))], C)));
      await $.stmt((await $.wcall([$t9], "SetBookmark", ["Valute", (await $.mv((await $.wv([$t9], "AValuteValu_name", C, false)), "value")), (await $.wv([$t9], "false", C, false)), (await $.wv([$t9], "false", C, false)), (await $.wv([$t9], "False", C, false)), (await $.wv([$t9], "false", C, false)), 8, "Arial AzLat", (await $.wv([$t9], "False", C, false))], C)));
      await $.stmt((await $.wcall([$t9], "SetBookmark", ["IRisks", (await $.mv((await $.wv([$t9], "ODSRisksName", C, false)), "value")), (await $.wv([$t9], "false", C, false)), (await $.wv([$t9], "false", C, false)), (await $.wv([$t9], "False", C, false)), (await $.wv([$t9], "false", C, false)), 8, "Arial AzLat", (await $.wv([$t9], "False", C, false))], C)));
      await $.stmt((await $.wcall([$t9], "SetBookmark", ["Franshiz", (await $.mv((await $.wv([$t9], "FranshizName", C, false)), "value")), (await $.wv([$t9], "false", C, false)), (await $.wv([$t9], "false", C, false)), (await $.wv([$t9], "False", C, false)), (await $.wv([$t9], "false", C, false)), 8, "Arial AzLat", (await $.wv([$t9], "False", C, false))], C)));
      await $.stmt((await $.wcall([$t9], "SetBookmark", ["Inssum", (await $.wcall([$t9], "FloatToStr", [(await $.mv((await $.wv([$t9], "ODSCPropertySuggestInsurancesum", C, false)), "value"))], C)), (await $.wv([$t9], "false", C, false)), (await $.wv([$t9], "false", C, false)), (await $.wv([$t9], "False", C, false)), (await $.wv([$t9], "false", C, false)), 8, "Arial AzLat", (await $.wv([$t9], "False", C, false))], C)));
      await $.stmt((await $.wcall([$t9], "SetBookmark", ["Insammount", (await $.wcall([$t9], "CurrToStr", [(await $.mv((await $.wv([$t9], "ODSCONtractsAmmount", C, false)), "value"))], C)), (await $.wv([$t9], "false", C, false)), (await $.wv([$t9], "false", C, false)), (await $.wv([$t9], "False", C, false)), (await $.wv([$t9], "false", C, false)), 8, "Arial AzLat", (await $.wv([$t9], "False", C, false))], C)));
      await $.stmt((await $.wcall([$t9], "SetBookmark", ["Instime", (await $.wcall([$t9], "DateToStr", [(await $.mv((await $.wv([$t9], "ODSCPropertySuggestEndDate", C, false)), "value"))], C)), (await $.wv([$t9], "false", C, false)), (await $.wv([$t9], "false", C, false)), (await $.wv([$t9], "False", C, false)), (await $.wv([$t9], "false", C, false)), 8, "Arial AzLat", (await $.wv([$t9], "False", C, false))], C)));
      await $.stmt((await $.wcall([$t9], "SetBookmark", ["Condt", (await $.mv((await $.wv([$t9], "ODSConditionsName", C, false)), "value")), (await $.wv([$t9], "false", C, false)), (await $.wv([$t9], "false", C, false)), (await $.wv([$t9], "False", C, false)), (await $.wv([$t9], "false", C, false)), 8, "Arial AzLat", (await $.wv([$t9], "False", C, false))], C)));
      await $.stmt((await $.wcall([$t9], "SetBookmark", ["Insured1", (await $.mv((await $.wv([$t9], "ODSCustomersName", C, false)), "value")), (await $.wv([$t9], "false", C, false)), (await $.wv([$t9], "false", C, false)), (await $.wv([$t9], "False", C, false)), (await $.wv([$t9], "false", C, false)), 8, "Arial AzLat", (await $.wv([$t9], "False", C, false))], C)));
    }
  } finally {
    await $.mcall((await $.v(C, "SuggestExporter")), "Show", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TCPropertySuggest", "btPolicyClick", async function btPolicyClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "p": null};
  await $.fixArgs(L0, ["sender"]);
  L0["p"] = (await $.mv((await $.v(C, "TStringList")), "Create"));
  { const $t10 = await $.iset((await $.mv(L0["p"], "Values")), ["ID"], (await $.call(C, "FloatToStr", [(await $.mv((await $.v(C, "ODSCPropertyId")), "value"))]))); if ($t10 !== undefined) { await $.mset(L0["p"], "Values", $t10); } }
  {
    const $t11 = (await $.v(C, "PolicyContainer"));
    await $.stmt((await $.wcall([$t11], "ShowModal", [(await $.wcall([$t11], "StringToGuid", ["{0F2A35A4-7A65-4085-BED1-BDCBC55C5836}"], C)), (await $.wv([$t11], "p", { get: async () => L0["p"], set: async (v) => { L0["p"] = v; }, local: true }, false))], C)));
  }
  await $.mcall(L0["p"], "Free", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  return U;
}
