// Generated from UConstructionPolicy.pas by pas2js — do not edit by hand; regenerate instead.
/* eslint-disable */
// @ts-nocheck

export default function define($) {
  const U = $.unit("UConstructionPolicy", ["Windows", "Messages", "SysUtils", "Classes", "Graphics", "Controls", "Forms", "LDialogs", "ActiveX", "AxCtrls", "PConstructionPolicy_TLB", "StdVcl", "DBCtrls", "StdCtrls", "Mask", "SBPlgAx50_TLB", "Db", "OracleData", "Buttons", "INSWordExporter", "ExtCtrls", "Oracle", "ComObj", "ComServ", "sboapiDataModuleImpl"]);
  const C = [U];
  U.defClass("TConstructionPolicy", "TActiveForm", {"groupbox3": {"name": "GroupBox3", "type": "TGroupBox"}, "label4": {"name": "Label4", "type": "TLabel"}, "enum": {"name": "ENum", "type": "TDBEdit"}, "label1": {"name": "Label1", "type": "TLabel"}, "label2": {"name": "Label2", "type": "TLabel"}, "odsconstpolicy": {"name": "ODSConstPolicy", "type": "TOracleDataSet"}, "constpolicydata": {"name": "ConstPolicyData", "type": "TDataSource"}, "edit1": {"name": "Edit1", "type": "TEdit"}, "odsconstsuggest": {"name": "ODSCONSTSUGGEST", "type": "TOracleDataSet"}, "constsuggestdata": {"name": "CONSTSUGGESTData", "type": "TDataSource"}, "odsconstpolicyid": {"name": "ODSConstPolicyID", "type": "TFloatField"}, "odsconstpolicycs_id": {"name": "ODSConstPolicyCS_ID", "type": "TFloatField"}, "panel1": {"name": "Panel1", "type": "TPanel"}, "policyexporter": {"name": "PolicyExporter", "type": "TINSWordExporter"}, "btprint": {"name": "btPrint", "type": "TBitBtn"}, "bitbtn2": {"name": "BitBtn2", "type": "TBitBtn"}, "bitbtn3": {"name": "BitBtn3", "type": "TBitBtn"}, "pins_construction": {"name": "PINS_CONSTRUCTION", "type": "TOraclePackage"}, "odsconstruction": {"name": "ODSConstruction", "type": "TOracleDataSet"}, "constdata": {"name": "ConstData", "type": "TDataSource"}, "odsconstructionid": {"name": "ODSConstructionID", "type": "TFloatField"}, "odsconstructionkli_id": {"name": "ODSConstructionKLI_ID", "type": "TFloatField"}, "odsconstructionfulldescription": {"name": "ODSConstructionFULLDESCRIPTION", "type": "TStringField"}, "odsconstructionlocationobj": {"name": "ODSConstructionLOCATIONOBJ", "type": "TStringField"}, "odsconstructionyearsinbusiness": {"name": "ODSConstructionYEARSINBUSINESS", "type": "TStringField"}, "odsconstructionbuildingusage": {"name": "ODSConstructionBUILDINGUSAGE", "type": "TStringField"}, "odsconstructionconstyear": {"name": "ODSConstructionCONSTYEAR", "type": "TDateTimeField"}, "odsconstructionfloorsnum": {"name": "ODSConstructionFLOORSNUM", "type": "TIntegerField"}, "odsconstructionwallsm": {"name": "ODSConstructionWALLSM", "type": "TStringField"}, "odsconstructionceilingsm": {"name": "ODSConstructionCEILINGSM", "type": "TStringField"}, "odsconstructionroofm": {"name": "ODSConstructionROOFM", "type": "TStringField"}, "odsconstructionarea": {"name": "ODSConstructionAREA", "type": "TFloatField"}, "odsconstructionapplicantspace": {"name": "ODSConstructionAPPLICANTSPACE", "type": "TFloatField"}, "odsconstructionearthquakedetails": {"name": "ODSConstructionEARTHQUAKEDETAILS", "type": "TStringField"}, "odsconstructionflamable": {"name": "ODSConstructionFLAMABLE", "type": "TStringField"}, "odsconstructionsurroindingdetails": {"name": "ODSConstructionSURROINDINGDETAILS", "type": "TStringField"}, "odsconstructionsitueted": {"name": "ODSConstructionSITUETED", "type": "TStringField"}, "odsconstructionguard": {"name": "ODSConstructionGUARD", "type": "TStringField"}, "odsconstructionalarm": {"name": "ODSConstructionALARM", "type": "TStringField"}, "odsconstructionlocks": {"name": "ODSConstructionLOCKS", "type": "TStringField"}, "odsconstructionsecuritylocks": {"name": "ODSConstructionSECURITYLOCKS", "type": "TStringField"}, "odsconstructionbars": {"name": "ODSConstructionBARS", "type": "TStringField"}, "odsconstructionother": {"name": "ODSConstructionOTHER", "type": "TStringField"}, "odsconstructionsettings": {"name": "ODSConstructionSETTINGS", "type": "TStringField"}, "odsconstructionrepair": {"name": "ODSConstructionREPAIR", "type": "TStringField"}, "odsconstructionheated": {"name": "ODSConstructionHEATED", "type": "TStringField"}, "odsconstructionriskid": {"name": "ODSConstructionRISKID", "type": "TFloatField"}, "odsconstructionannual": {"name": "ODSConstructionANNUAL", "type": "TFloatField"}, "odsconstructionwages": {"name": "ODSConstructionWAGES", "type": "TFloatField"}, "odsconstructionrent": {"name": "ODSConstructionRENT", "type": "TFloatField"}, "odsconstructionemployes": {"name": "ODSConstructionEMPLOYES", "type": "TFloatField"}, "odsconstructionexpirity": {"name": "ODSConstructionEXPIRITY", "type": "TDateTimeField"}, "odsconstructionlosshistory": {"name": "ODSConstructionLOSSHISTORY", "type": "TStringField"}, "odsconstructionrenewal": {"name": "ODSConstructionRENEWAL", "type": "TStringField"}, "odsconstructionthirdparty": {"name": "ODSConstructionTHIRDPARTY", "type": "TStringField"}, "odsconstructionotherinf": {"name": "ODSConstructionOTHERINF", "type": "TStringField"}, "odsconstructionindeminity": {"name": "ODSConstructionINDEMINITY", "type": "TStringField"}, "odsconstructionvaluetype": {"name": "ODSConstructionVALUETYPE", "type": "TStringField"}, "odsconstructionbuildings": {"name": "ODSConstructionBUILDINGS", "type": "TFloatField"}, "odsconstructionengineer": {"name": "ODSConstructionENGINEER", "type": "TFloatField"}, "odsconstructionexdeco": {"name": "ODSConstructionEXDECO", "type": "TFloatField"}, "odsconstructionindeco": {"name": "ODSConstructionINDECO", "type": "TFloatField"}, "odsconstructionfiresys": {"name": "ODSConstructionFIRESYS", "type": "TFloatField"}, "odsconstructiontypeid": {"name": "ODSConstructionTYPEID", "type": "TIntegerField"}, "customers": {"name": "Customers", "type": "TOracleDataSet"}, "customersid": {"name": "CustomersID", "type": "TIntegerField"}, "customersname": {"name": "CustomersNAME", "type": "TStringField"}, "customersaddress": {"name": "CustomersADDRESS", "type": "TStringField"}, "customersmobilephone": {"name": "CustomersMOBILEPHONE", "type": "TStringField"}, "customersfax": {"name": "CustomersFAX", "type": "TStringField"}, "customersdata": {"name": "CustomersData", "type": "TDataSource"}, "odsrisks": {"name": "ODSRisks", "type": "TOracleDataSet"}, "odsrisksid": {"name": "ODSRisksID", "type": "TFloatField"}, "odsrisksname": {"name": "ODSRisksNAME", "type": "TStringField"}, "risksdata": {"name": "RisksData", "type": "TDataSource"}, "franshiz": {"name": "Franshiz", "type": "TOracleDataSet"}, "franshizid": {"name": "FranshizID", "type": "TFloatField"}, "franshizname": {"name": "FranshizNAME", "type": "TStringField"}, "franshizdata": {"name": "FranshizData", "type": "TDataSource"}, "conditions": {"name": "Conditions", "type": "TOracleDataSet"}, "conditionsid": {"name": "ConditionsID", "type": "TFloatField"}, "conditionsname": {"name": "ConditionsNAME", "type": "TStringField"}, "conditionsdata": {"name": "ConditionsData", "type": "TDataSource"}, "odsconstsuggestid": {"name": "ODSCONSTSUGGESTID", "type": "TFloatField"}, "odsconstsuggestcid": {"name": "ODSCONSTSUGGESTCID", "type": "TFloatField"}, "odsconstsuggestfrz_id": {"name": "ODSCONSTSUGGESTFRZ_ID", "type": "TFloatField"}, "odsconstsuggestcndt_id": {"name": "ODSCONSTSUGGESTCNDT_ID", "type": "TFloatField"}, "odsconstsuggestmlimit": {"name": "ODSCONSTSUGGESTMLIMIT", "type": "TFloatField"}, "odsconstsuggestrmlimit": {"name": "ODSCONSTSUGGESTRMLIMIT", "type": "TFloatField"}, "odsconstsuggestivaluemain": {"name": "ODSCONSTSUGGESTIVALUEMAIN", "type": "TFloatField"}, "odsconstsuggestrperiod": {"name": "ODSCONSTSUGGESTRPERIOD", "type": "TStringField"}, "odsconstsuggestrivalue": {"name": "ODSCONSTSUGGESTRIVALUE", "type": "TFloatField"}, "odsconstsuggestenddate": {"name": "ODSCONSTSUGGESTENDDATE", "type": "TDateTimeField"}, "odsconstsuggestrfrz_id": {"name": "ODSCONSTSUGGESTRFRZ_ID", "type": "TFloatField"}, "odsconstructionr": {"name": "ODSConstructionR", "type": "TOracleDataSet"}, "odsconstructionrname": {"name": "ODSConstructionRNAME", "type": "TStringField"}, "odsconstructionraddress": {"name": "ODSConstructionRADDRESS", "type": "TStringField"}, "odsconstructionrphone": {"name": "ODSConstructionRPHONE", "type": "TStringField"}, "odsconstructionrfax": {"name": "ODSConstructionRFAX", "type": "TStringField"}, "odsconstructionrid": {"name": "ODSConstructionRID", "type": "TFloatField"}, "odsconstructionrkli_id": {"name": "ODSConstructionRKLI_ID", "type": "TFloatField"}, "odsconstructionrfulldescription": {"name": "ODSConstructionRFULLDESCRIPTION", "type": "TStringField"}, "odsconstructionrlocationobj": {"name": "ODSConstructionRLOCATIONOBJ", "type": "TStringField"}, "odsconstructionryearsinbusiness": {"name": "ODSConstructionRYEARSINBUSINESS", "type": "TStringField"}, "odsconstructionrbuildingusage": {"name": "ODSConstructionRBUILDINGUSAGE", "type": "TStringField"}, "odsconstructionrconstyear": {"name": "ODSConstructionRCONSTYEAR", "type": "TDateTimeField"}, "odsconstructionrfloorsnum": {"name": "ODSConstructionRFLOORSNUM", "type": "TIntegerField"}, "odsconstructionrwallsm": {"name": "ODSConstructionRWALLSM", "type": "TStringField"}, "odsconstructionrceilingsm": {"name": "ODSConstructionRCEILINGSM", "type": "TStringField"}, "odsconstructionrroofm": {"name": "ODSConstructionRROOFM", "type": "TStringField"}, "odsconstructionrarea": {"name": "ODSConstructionRAREA", "type": "TFloatField"}, "odsconstructionrapplicantspace": {"name": "ODSConstructionRAPPLICANTSPACE", "type": "TFloatField"}, "odsconstructionrearthquakedetails": {"name": "ODSConstructionREARTHQUAKEDETAILS", "type": "TStringField"}, "odsconstructionrflamable": {"name": "ODSConstructionRFLAMABLE", "type": "TStringField"}, "odsconstructionrsurroindingdetails": {"name": "ODSConstructionRSURROINDINGDETAILS", "type": "TStringField"}, "odsconstructionrsitueted": {"name": "ODSConstructionRSITUETED", "type": "TStringField"}, "odsconstructionrguard": {"name": "ODSConstructionRGUARD", "type": "TStringField"}, "odsconstructionralarm": {"name": "ODSConstructionRALARM", "type": "TStringField"}, "odsconstructionrlocks": {"name": "ODSConstructionRLOCKS", "type": "TStringField"}, "odsconstructionrsecuritylocks": {"name": "ODSConstructionRSECURITYLOCKS", "type": "TStringField"}, "odsconstructionrbars": {"name": "ODSConstructionRBARS", "type": "TStringField"}, "odsconstructionrother": {"name": "ODSConstructionROTHER", "type": "TStringField"}, "odsconstructionrsettings": {"name": "ODSConstructionRSETTINGS", "type": "TStringField"}, "odsconstructionrrepair": {"name": "ODSConstructionRREPAIR", "type": "TStringField"}, "odsconstructionrheated": {"name": "ODSConstructionRHEATED", "type": "TStringField"}, "odsconstructionrriskid": {"name": "ODSConstructionRRISKID", "type": "TFloatField"}, "odsconstructionrannual": {"name": "ODSConstructionRANNUAL", "type": "TFloatField"}, "odsconstructionrwages": {"name": "ODSConstructionRWAGES", "type": "TFloatField"}, "odsconstructionrrent": {"name": "ODSConstructionRRENT", "type": "TFloatField"}, "odsconstructionremployes": {"name": "ODSConstructionREMPLOYES", "type": "TFloatField"}, "odsconstructionrexpirity": {"name": "ODSConstructionREXPIRITY", "type": "TDateTimeField"}, "odsconstructionrlosshistory": {"name": "ODSConstructionRLOSSHISTORY", "type": "TStringField"}, "odsconstructionrrenewal": {"name": "ODSConstructionRRENEWAL", "type": "TStringField"}, "odsconstructionrthirdparty": {"name": "ODSConstructionRTHIRDPARTY", "type": "TStringField"}, "odsconstructionrotherinf": {"name": "ODSConstructionROTHERINF", "type": "TStringField"}, "odsconstructionrindeminity": {"name": "ODSConstructionRINDEMINITY", "type": "TStringField"}, "odsconstructionrvaluetype": {"name": "ODSConstructionRVALUETYPE", "type": "TStringField"}, "odsconstructionrbuildings": {"name": "ODSConstructionRBUILDINGS", "type": "TFloatField"}, "odsconstructionrengineer": {"name": "ODSConstructionRENGINEER", "type": "TFloatField"}, "odsconstructionrexdeco": {"name": "ODSConstructionREXDECO", "type": "TFloatField"}, "odsconstructionrindeco": {"name": "ODSConstructionRINDECO", "type": "TFloatField"}, "odsconstructionrfiresys": {"name": "ODSConstructionRFIRESYS", "type": "TFloatField"}, "odsconstructionrtypeid": {"name": "ODSConstructionRTYPEID", "type": "TIntegerField"}, "constreportsource": {"name": "ConstReportSource", "type": "TDataSource"}, "btapply": {"name": "btApply", "type": "TBitBtn"}, "odsconstructionprofitid": {"name": "ODSConstructionPROFITID", "type": "TFloatField"}, "odsconstructionrprofitid": {"name": "ODSConstructionRPROFITID", "type": "TFloatField"}, "odsbeneficiary": {"name": "ODSBeneficiary", "type": "TOracleDataSet"}, "beneficiarysource": {"name": "BeneficiarySource", "type": "TDataSource"}, "odsbeneficiaryid": {"name": "ODSBeneficiaryID", "type": "TFloatField"}, "odsbeneficiaryname": {"name": "ODSBeneficiaryNAME", "type": "TStringField"}, "odsbeneficiaryaddress": {"name": "ODSBeneficiaryADDRESS", "type": "TStringField"}, "odsbeneficiaryphone": {"name": "ODSBeneficiaryPHONE", "type": "TStringField"}, "odsbeneficiarybanking_details": {"name": "ODSBeneficiaryBANKING_DETAILS", "type": "TStringField"}, "dblookupcombobox2": {"name": "DBLookupComboBox2", "type": "TDBLookupComboBox"}, "agentsource": {"name": "AgentSource", "type": "TDataSource"}, "odsagent": {"name": "ODSAgent", "type": "TOracleDataSet"}, "odsconstpolicypolicynum": {"name": "ODSConstPolicyPOLICYNUM", "type": "TStringField"}, "odsconstpolicyagentid": {"name": "ODSConstPolicyAGENTID", "type": "TFloatField"}, "odsagentid": {"name": "ODSAgentID", "type": "TFloatField"}, "odsagentname": {"name": "ODSAgentNAME", "type": "TStringField"}, "odscontracts": {"name": "ODSContracts", "type": "TOracleDataSet"}, "odscontractsid": {"name": "ODSContractsID", "type": "TFloatField"}, "odscontractstype_id": {"name": "ODSContractsTYPE_ID", "type": "TFloatField"}, "odscontractsblank_id": {"name": "ODSContractsBLANK_ID", "type": "TFloatField"}, "odscontractssugg_id": {"name": "ODSContractsSUGG_ID", "type": "TFloatField"}, "odscontractspolicy_id": {"name": "ODSContractsPOLICY_ID", "type": "TFloatField"}, "odscontractsins_date": {"name": "ODSContractsINS_DATE", "type": "TDateTimeField"}, "odscontractsbegin_date": {"name": "ODSContractsBEGIN_DATE", "type": "TDateTimeField"}, "odscontractsend_date": {"name": "ODSContractsEND_DATE", "type": "TDateTimeField"}, "odscontractsvalute_id": {"name": "ODSContractsVALUTE_ID", "type": "TFloatField"}, "odscontractsammount": {"name": "ODSContractsAMMOUNT", "type": "TFloatField"}, "odscontractsclose_prefix": {"name": "ODSContractsCLOSE_PREFIX", "type": "TIntegerField"}, "odscontractskli_id": {"name": "ODSContractsKLI_ID", "type": "TFloatField"}, "odscontractsloanacc_id": {"name": "ODSContractsLOANACC_ID", "type": "TFloatField"}, "odscontractscurracc_id": {"name": "ODSContractsCURRACC_ID", "type": "TFloatField"}, "odscontractspolicy_num": {"name": "ODSContractsPOLICY_NUM", "type": "TStringField"}, "dscontracts": {"name": "DSContracts", "type": "TDataSource"}, "odsconstsuggestval_id": {"name": "ODSCONSTSUGGESTVAL_ID", "type": "TFloatField"}, "avalute": {"name": "AValute", "type": "TOracleDataSet"}, "avalutevalu_name": {"name": "AValuteVALU_NAME", "type": "TStringField"}, "avalutevalute": {"name": "AValuteVALUTE", "type": "TIntegerField"}, "avaluteval_name": {"name": "AValuteVAL_NAME", "type": "TStringField"}, "avalutevalu_short": {"name": "AValuteVALU_SHORT", "type": "TStringField"}, "avalutedata": {"name": "AValuteData", "type": "TDataSource"}, "opcommon": {"name": "OPCOMMON", "type": "TOraclePackage"}, "customerscontactperson": {"name": "CustomersCONTACTPERSON", "type": "TStringField"}, "customerscontactpersonphone": {"name": "CustomersCONTACTPERSONPHONE", "type": "TStringField"}, "odsconstsuggestinter_id": {"name": "ODSCONSTSUGGESTINTER_ID", "type": "TFloatField"}, "fparams": {"name": "FParams", "type": "TStrings"}, "fownerhandle": {"name": "FOwnerHandle", "type": "Integer"}, "id": {"name": "ID", "type": "Integer"}, "tid": {"name": "tid", "type": "Integer"}, "fevents": {"name": "FEvents", "type": "IConstructionPolicyEvents"}}, {"params": {"name": "Params", "read": "Get_Params", "write": "Set_Params"}});
  U.init(async () => {
    U.const("WM_ModalResult", $.add((await $.v(C, "WM_USER")), 139));
    U.const("fmCaption", "Policy: (%s)");
    U.var_("ConstructionPolicy", null, "TConstructionPolicy");
  });
  U.method("TConstructionPolicy", "DefinePropertyPages", async function DefinePropertyPages(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"definepropertypage": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["definepropertypage"]);
  return L0.result;
}, {"params": ["DefinePropertyPage"], "kind": "procedure", "ptypes": ["TDefinePropertyPage"]});
  U.method("TConstructionPolicy", "EventSinkChanged", async function EventSinkChanged(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"eventsink": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["eventsink"]);
  await $.set(C, "FEvents", L0["eventsink"]);
  return L0.result;
}, {"params": ["EventSink"], "kind": "procedure", "ptypes": ["IUnknown"]});
  U.method("TConstructionPolicy", "Initialize", async function Initialize(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: undefined};
  await $.inherited(Self, "TConstructionPolicy", "Initialize", null, arguments);
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
  U.method("TConstructionPolicy", "Get_Active", async function Get_Active(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: false};
  L0["result"] = (await $.v(C, "Active"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TConstructionPolicy", "Get_AutoScroll", async function Get_AutoScroll(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: false};
  L0["result"] = (await $.v(C, "AutoScroll"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TConstructionPolicy", "Get_AutoSize", async function Get_AutoSize(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: false};
  L0["result"] = (await $.v(C, "AutoSize"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TConstructionPolicy", "Get_AxBorderStyle", async function Get_AxBorderStyle(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: null};
  L0["result"] = (await $.call(C, "Ord", [(await $.v(C, "AxBorderStyle"))]));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TConstructionPolicy", "Get_Caption", async function Get_Caption(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: ''};
  L0["result"] = (await $.call(C, "WideString", [(await $.v(C, "Caption"))]));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TConstructionPolicy", "Get_Color", async function Get_Color(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: null};
  L0["result"] = (await $.call(C, "OLE_COLOR", [(await $.v(C, "Color"))]));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TConstructionPolicy", "Get_Cursor", async function Get_Cursor(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: 0};
  L0["result"] = (await $.call(C, "Smallint", [(await $.v(C, "Cursor"))]));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TConstructionPolicy", "Get_DoubleBuffered", async function Get_DoubleBuffered(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: false};
  L0["result"] = (await $.v(C, "DoubleBuffered"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TConstructionPolicy", "Get_DropTarget", async function Get_DropTarget(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: false};
  L0["result"] = (await $.v(C, "DropTarget"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TConstructionPolicy", "Get_Enabled", async function Get_Enabled(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: false};
  L0["result"] = (await $.v(C, "Enabled"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TConstructionPolicy", "Get_Font", async function Get_Font(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: null};
  await $.stmt((await $.call(C, "GetOleFont", [(await $.v(C, "Font")), L0["result"]])));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TConstructionPolicy", "Get_HelpFile", async function Get_HelpFile(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: ''};
  L0["result"] = (await $.call(C, "WideString", [(await $.v(C, "HelpFile"))]));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TConstructionPolicy", "Get_KeyPreview", async function Get_KeyPreview(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: false};
  L0["result"] = (await $.v(C, "KeyPreview"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TConstructionPolicy", "Get_PixelsPerInch", async function Get_PixelsPerInch(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: 0};
  L0["result"] = (await $.v(C, "PixelsPerInch"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TConstructionPolicy", "Get_PrintScale", async function Get_PrintScale(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: null};
  L0["result"] = (await $.call(C, "Ord", [(await $.v(C, "PrintScale"))]));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TConstructionPolicy", "Get_Scaled", async function Get_Scaled(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: false};
  L0["result"] = (await $.v(C, "Scaled"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TConstructionPolicy", "Get_Visible", async function Get_Visible(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: false};
  L0["result"] = (await $.v(C, "Visible"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TConstructionPolicy", "Get_VisibleDockClientCount", async function Get_VisibleDockClientCount(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: 0};
  L0["result"] = (await $.v(C, "VisibleDockClientCount"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TConstructionPolicy", "_Set_Font", async function _Set_Font(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.stmt((await $.call(C, "SetOleFont", [(await $.v(C, "Font")), L0["value"]])));
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["IFontDisp"]});
  U.method("TConstructionPolicy", "ActivateEvent", async function ActivateEvent(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.ne((await $.v(C, "FEvents")), null))) {
    await $.mcall((await $.v(C, "FEvents")), "OnActivate", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TConstructionPolicy", "ClickEvent", async function ClickEvent(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.ne((await $.v(C, "FEvents")), null))) {
    await $.mcall((await $.v(C, "FEvents")), "OnClick", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TConstructionPolicy", "CreateEvent", async function CreateEvent(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.ne((await $.v(C, "FEvents")), null))) {
    await $.mcall((await $.v(C, "FEvents")), "OnCreate", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TConstructionPolicy", "DblClickEvent", async function DblClickEvent(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.ne((await $.v(C, "FEvents")), null))) {
    await $.mcall((await $.v(C, "FEvents")), "OnDblClick", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TConstructionPolicy", "DeactivateEvent", async function DeactivateEvent(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.ne((await $.v(C, "FEvents")), null))) {
    await $.mcall((await $.v(C, "FEvents")), "OnDeactivate", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TConstructionPolicy", "DestroyEvent", async function DestroyEvent(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.ne((await $.v(C, "FEvents")), null))) {
    await $.mcall((await $.v(C, "FEvents")), "OnDestroy", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TConstructionPolicy", "KeyPressEvent", async function KeyPressEvent(Self, p0, p1) {
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
  U.method("TConstructionPolicy", "PaintEvent", async function PaintEvent(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.ne((await $.v(C, "FEvents")), null))) {
    await $.mcall((await $.v(C, "FEvents")), "OnPaint", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TConstructionPolicy", "Set_AutoScroll", async function Set_AutoScroll(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "AutoScroll", L0["value"]);
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["WordBool"]});
  U.method("TConstructionPolicy", "Set_AutoSize", async function Set_AutoSize(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "AutoSize", L0["value"]);
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["WordBool"]});
  U.method("TConstructionPolicy", "Set_AxBorderStyle", async function Set_AxBorderStyle(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "AxBorderStyle", (await $.call(C, "TActiveFormBorderStyle", [L0["value"]])));
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["TxActiveFormBorderStyle"]});
  U.method("TConstructionPolicy", "Set_Caption", async function Set_Caption(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "Caption", (await $.call(C, "TCaption", [L0["value"]])));
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["WideString"]});
  U.method("TConstructionPolicy", "Set_Color", async function Set_Color(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "Color", (await $.call(C, "TColor", [L0["value"]])));
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["OLE_COLOR"]});
  U.method("TConstructionPolicy", "Set_Cursor", async function Set_Cursor(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "Cursor", (await $.call(C, "TCursor", [L0["value"]])));
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["Smallint"]});
  U.method("TConstructionPolicy", "Set_DoubleBuffered", async function Set_DoubleBuffered(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "DoubleBuffered", L0["value"]);
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["WordBool"]});
  U.method("TConstructionPolicy", "Set_DropTarget", async function Set_DropTarget(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "DropTarget", L0["value"]);
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["WordBool"]});
  U.method("TConstructionPolicy", "Set_Enabled", async function Set_Enabled(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "Enabled", L0["value"]);
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["WordBool"]});
  U.method("TConstructionPolicy", "Set_Font", async function Set_Font(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.asRef(p0), result: undefined};
  await $.stmt((await $.call(C, "SetOleFont", [(await $.v(C, "Font")), (await L0["value"].get())])));
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["IFontDisp"]});
  U.method("TConstructionPolicy", "Set_HelpFile", async function Set_HelpFile(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "HelpFile", (await $.call(C, "String", [L0["value"]])));
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["WideString"]});
  U.method("TConstructionPolicy", "Set_KeyPreview", async function Set_KeyPreview(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "KeyPreview", L0["value"]);
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["WordBool"]});
  U.method("TConstructionPolicy", "Set_PixelsPerInch", async function Set_PixelsPerInch(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "PixelsPerInch", L0["value"]);
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["Integer"]});
  U.method("TConstructionPolicy", "Set_PrintScale", async function Set_PrintScale(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "PrintScale", (await $.call(C, "TPrintScale", [L0["value"]])));
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["TxPrintScale"]});
  U.method("TConstructionPolicy", "Set_Scaled", async function Set_Scaled(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "Scaled", L0["value"]);
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["WordBool"]});
  U.method("TConstructionPolicy", "Set_Visible", async function Set_Visible(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "Visible", L0["value"]);
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["WordBool"]});
  U.method("TConstructionPolicy", "Get_Owner", async function Get_Owner(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: 0};
  L0["result"] = (await $.v(C, "handle"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TConstructionPolicy", "Set_Owner", async function Set_Owner(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"val": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["val"]);
  if ($.truthy($.gt(L0["val"], 0))) {
    await $.set(C, "FOwnerHandle", L0["val"]);
  }
  return L0.result;
}, {"params": ["val"], "kind": "procedure", "ptypes": ["Integer"]});
  U.method("TConstructionPolicy", "Get_Params", async function Get_Params(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"name": $.copyArg(p0), result: null};
  await $.fixArgs(L0, ["name"]);
  L0["result"] = (await $.idx((await $.mv((await $.v(C, "FParams")), "Values")), [L0["name"]]));
  return L0.result;
}, {"params": ["Name"], "kind": "function", "ptypes": ["WideString"]});
  U.method("TConstructionPolicy", "Set_Params", async function Set_Params(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"name": $.copyArg(p0), "value": $.copyArg(p1), result: undefined};
  await $.fixArgs(L0, ["name", "value"]);
  { const $t1 = await $.iset((await $.mv((await $.v(C, "FParams")), "Values")), [L0["name"]], L0["value"]); if ($t1 !== undefined) { await $.mset((await $.v(C, "FParams")), "Values", $t1); } }
  return L0.result;
}, {"params": ["Name", "Value"], "kind": "procedure", "ptypes": ["WideString", "OleVariant"]});
  U.method("TConstructionPolicy", "InstanceInitialize", async function InstanceInitialize(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: null};
  L0["result"] = (await $.v(C, "S_OK"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TConstructionPolicy", "Cleanup", async function Cleanup(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: null};
  L0["result"] = (await $.v(C, "S_OK"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TConstructionPolicy", "UIObjectActivate", async function UIObjectActivate(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: null};
  await $.set(C, "id", (await $.call(C, "StrToInt", [(await $.call(C, "Get_Params", ["id"]))])));
  await $.mcall((await $.v(C, "ODSConstruction")), "CloseAll", []);
  await $.stmt((await $.mcall((await $.v(C, "ODSConstruction")), "SetVariable", ["id", (await $.v(C, "id"))])));
  await $.mcall((await $.v(C, "ODSConstruction")), "Open", []);
  await $.mcall((await $.v(C, "ODSContracts")), "Close", []);
  await $.stmt((await $.mcall((await $.v(C, "ODSContracts")), "SetVariable", ["blankid", (await $.mv((await $.v(C, "ODSConstructionId")), "value"))])));
  await $.mcall((await $.v(C, "ODSContracts")), "Open", []);
  await $.mcall((await $.v(C, "ODSContracts")), "Edit", []);
  await $.mcall((await $.v(C, "ODSConstructionR")), "CloseAll", []);
  await $.stmt((await $.mcall((await $.v(C, "ODSConstructionR")), "SetVariable", ["id", (await $.v(C, "id"))])));
  await $.mcall((await $.v(C, "ODSConstructionR")), "Open", []);
  await $.mcall((await $.v(C, "ODSConstSuggest")), "CloseAll", []);
  await $.stmt((await $.mcall((await $.v(C, "ODSCONSTSUGGEST")), "SetVariable", ["CID", (await $.call(C, "StrToInt", [(await $.call(C, "Get_Params", ["id"]))]))])));
  await $.mcall((await $.v(C, "ODSConstSuggest")), "Open", []);
  await $.stmt((await $.mcall((await $.v(C, "ODSCONSTSUGGEST")), "Locate", ["CID", (await $.mv((await $.v(C, "ODSConstructionID")), "Value")), []])));
  await $.stmt((await $.mcall((await $.v(C, "ODSRisks")), "Locate", ["id", (await $.call(C, "StrToInt", [(await $.call(C, "Get_Params", ["riskid"]))])), []])));
  await $.stmt((await $.mcall((await $.v(C, "Franshiz")), "Locate", ["id", (await $.call(C, "StrToInt", [(await $.call(C, "Get_Params", ["fid"]))])), []])));
  await $.stmt((await $.mcall((await $.v(C, "Conditions")), "Locate", ["id", (await $.call(C, "StrToInt", [(await $.call(C, "Get_Params", ["cdid"]))])), []])));
  await $.set(C, "tid", (await $.mv((await $.v(C, "ODSConstructionTypeID")), "Value")));
  if ($.truthy($.eq((await $.call(C, "Get_Params", ["Mod"])), "Insert"))) {
    await $.mcall((await $.v(C, "ODSConstPolicy")), "Insert", []);
    await $.mcall((await $.v(C, "ODSConstPolicy")), "CloseAll", []);
    await $.stmt((await $.mcall((await $.v(C, "ODSConstPolicy")), "SetVariable", ["CS_ID", (await $.call(C, "FloatToStr", [(await $.mv((await $.v(C, "ODSCONSTSUGGESTID")), "value"))]))])));
    await $.mcall((await $.v(C, "ODSConstPolicy")), "Open", []);
  }
  if ($.truthy((await $.and_(($.eq((await $.call(C, "Get_Params", ["Mod"])), "Insert")), async () => ($.lt((await $.mv((await $.v(C, "ODSConstPolicy")), "RecordCount")), 1)))))) {
    await $.set(C, "Caption", (await $.call(C, "format", [(await $.v(C, "fmCaption")), ["Elave"]])));
    await $.mset((await $.v(C, "btPrint")), "Enabled", false);
  } else {
    await $.set(C, "Caption", (await $.call(C, "format", [(await $.v(C, "fmCaption")), ["Redakte"]])));
  }
  L0["result"] = (await $.v(C, "S_OK"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TConstructionPolicy", "QueryDeactivate", async function QueryDeactivate(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: null};
  L0["result"] = (await $.v(C, "S_OK"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TConstructionPolicy", "UIObjectDeactivate", async function UIObjectDeactivate(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: null};
  L0["result"] = (await $.v(C, "S_OK"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TConstructionPolicy", "SaveState", async function SaveState(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: null};
  L0["result"] = (await $.v(C, "S_OK"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TConstructionPolicy", "Get_Height", async function Get_Height(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: 0};
  L0["result"] = (await $.v(C, "Height"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TConstructionPolicy", "Get_Width", async function Get_Width(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: 0};
  L0["result"] = (await $.v(C, "Width"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TConstructionPolicy", "ActiveFormCreate", async function ActiveFormCreate(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.set(C, "ConstructionPolicy", Self);
  await $.set(C, "FParams", (await $.mv((await $.v(C, "TStringList")), "Create")));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TConstructionPolicy", "BitBtn3Click", async function BitBtn3Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.stmt((await $.call(C, "PostMessage", [(await $.v(C, "FOwnerHandle")), (await $.v(C, "WM_ModalResult")), (await $.v(C, "mrCancel")), 0])));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TConstructionPolicy", "BitBtn2Click", async function BitBtn2Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t2 = (await $.v(C, "ODSConstPolicy"));
    await $.mset((await $.wv([$t2], "ODSConstPolicyCs_id", C, false)), "Value", (await $.mv((await $.wv([$t2], "ODSConstSuggestID", C, false)), "Value")));
    if ($.truthy($.in_((await $.wv([$t2], "State", C, false)), [(await $.wv([$t2], "dsInsert", C, false)), (await $.wv([$t2], "dsEdit", C, false))]))) {
      await $.stmt($.wcall([$t2], "Post", [], C));
    }
    await $.stmt($.wcall([$t2], "RefreshRecord", [], C));
  }
  {
    const $t3 = (await $.v(C, "ODSContracts"));
    if ($.truthy($.in_((await $.wv([$t3], "State", C, false)), [(await $.wv([$t3], "dsEdit", C, false)), (await $.wv([$t3], "dsInsert", C, false))]))) {
      await $.mset((await $.wcall([$t3], "FieldByName", ["policy_id"], C)), "asFloat", (await $.mv((await $.mcall((await $.wv([$t3], "ODSConstPolicy", C, false)), "FieldByName", ["id"])), "asFloat")));
      if ($.truthy((await $.mv((await $.wv([$t3], "ODSContractsPolicy_Num", C, false)), "IsNull")))) {
        await $.mset((await $.wcall([$t3], "FieldByName", ["POLICY_NUM"], C)), "AsString", (await $.mcall((await $.wv([$t3], "OPCommon", C, false)), "callStringFunction", ["generatePolicy_Num", [(await $.wv([$t3], "tid", C, false))]])));
      }
      await $.stmt($.wcall([$t3], "Post", [], C));
    }
  }
  await $.stmt((await $.call(C, "PostMessage", [(await $.v(C, "FOwnerHandle")), (await $.v(C, "WM_ModalResult")), (await $.v(C, "mrOk")), 0])));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TConstructionPolicy", "ODSConstPolicyNewRecord", async function ODSConstPolicyNewRecord(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"dataset": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["dataset"]);
  await $.mset((await $.mcall(L0["dataset"], "FieldByName", ["ID"])), "AsInteger", (await $.mcall((await $.v(C, "PINS_CONSTRUCTION")), "CallIntegerFunction", ["generatePolicyID", []])));
  return L0.result;
}, {"params": ["DataSet"], "kind": "procedure", "ptypes": ["TDataSet"]});
  U.method("TConstructionPolicy", "ENumKeyPress", async function ENumKeyPress(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "key": $.asRef(p1), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.eq((await L0["key"].get()), "\r"))) {
    if ($.truthy($.ne((await $.call(C, "HiWord", [(await $.call(C, "GetKeyState", [(await $.v(C, "VK_Shift"))]))])), 0))) {
      {
        const $t4 = L0["sender"];
        await $.stmt((await $.wcall([$t4], "SelectNext", [(await $.wv([$t4], "ActiveControl", C, false)), (await $.wv([$t4], "False", C, false)), (await $.wv([$t4], "True", C, false))], C)));
      }
    } else {
      {
        const $t5 = L0["sender"];
        await $.stmt((await $.wcall([$t5], "SelectNext", [(await $.wv([$t5], "ActiveControl", C, false)), (await $.wv([$t5], "True", C, false)), (await $.wv([$t5], "True", C, false))], C)));
      }
    }
    await L0["key"].set("\u0000");
  }
  return L0.result;
}, {"params": ["Sender", "Key"], "kind": "procedure", "ptypes": ["TObject", "Char"]});
  U.method("TConstructionPolicy", "btPrintClick", async function btPrintClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.eq((await $.call(C, "MessageDlg", ["Emeliyyat aparilsin?", (await $.v(C, "mtConfirmation")), [(await $.v(C, "mbYes")), (await $.v(C, "mbNo"))], 0])), (await $.v(C, "mrYes"))))) {
    await $.stmt((await $.call(C, "AddTransh", [])));
  }
  await $.stmt((await $.mcall((await $.v(C, "AValute")), "Locate", ["valute", (await $.mv((await $.v(C, "ODSCOntractsValute_ID")), "Value")), []])));
  try {
    {
      const $t6 = (await $.v(C, "PolicyExporter"));
      await $.wset([$t6], "FileName", $.add((await $.wcall([$t6], "ExtractFilePath", [(await $.mv((await $.wv([$t6], "Application", C, false)), "ExeName"))], C)), "\\Inshaat polis formasi.doc"), C);
      await $.stmt((await $.wcall([$t6], "Open", [(await $.wv([$t6], "False", C, false))], C)));
      await $.stmt((await $.wcall([$t6], "SetBookmark", ["PolicyNum", (await $.mv((await $.wv([$t6], "ODSContractsPolicy_Num", C, false)), "value")), (await $.wv([$t6], "false", C, false)), (await $.wv([$t6], "false", C, false)), (await $.wv([$t6], "False", C, false)), (await $.wv([$t6], "false", C, false)), 8, "Arial AzLat", (await $.wv([$t6], "False", C, false))], C)));
      await $.stmt((await $.wcall([$t6], "SetBookmark", ["Insured", (await $.mv((await $.wv([$t6], "ODSConstructionRName", C, false)), "value")), (await $.wv([$t6], "false", C, false)), (await $.wv([$t6], "false", C, false)), (await $.wv([$t6], "False", C, false)), (await $.wv([$t6], "false", C, false)), 8, "Arial AzLat", (await $.wv([$t6], "False", C, false))], C)));
      await $.stmt((await $.wcall([$t6], "SetBookmark", ["Agent", (await $.mv((await $.wv([$t6], "ODSAgentNAME", C, false)), "value")), (await $.wv([$t6], "false", C, false)), (await $.wv([$t6], "false", C, false)), (await $.wv([$t6], "False", C, false)), (await $.wv([$t6], "false", C, false)), 8, "Arial AzLat", (await $.wv([$t6], "False", C, false))], C)));
      await $.stmt((await $.wcall([$t6], "SetBookmark", ["Valute", (await $.mv((await $.wv([$t6], "AValuteValu_name", C, false)), "value")), (await $.wv([$t6], "false", C, false)), (await $.wv([$t6], "false", C, false)), (await $.wv([$t6], "False", C, false)), (await $.wv([$t6], "false", C, false)), 8, "Arial AzLat", (await $.wv([$t6], "False", C, false))], C)));
      await $.stmt((await $.wcall([$t6], "SetBookmark", ["Beneficiary", (await $.mv((await $.wv([$t6], "ODSBeneficiaryName", C, false)), "value")), (await $.wv([$t6], "false", C, false)), (await $.wv([$t6], "false", C, false)), (await $.wv([$t6], "False", C, false)), (await $.wv([$t6], "false", C, false)), 8, "Arial AzLat", (await $.wv([$t6], "False", C, false))], C)));
      await $.stmt((await $.wcall([$t6], "SetBookmark", ["ISubjAddr", (await $.mv((await $.wv([$t6], "ODSConstructionRLocationObj", C, false)), "value")), (await $.wv([$t6], "false", C, false)), (await $.wv([$t6], "false", C, false)), (await $.wv([$t6], "False", C, false)), (await $.wv([$t6], "false", C, false)), 8, "Arial AzLat", (await $.wv([$t6], "False", C, false))], C)));
      await $.stmt((await $.wcall([$t6], "SetBookmark", ["ContactTel", (await $.mv((await $.wv([$t6], "CustomersContactPersonPhone", C, false)), "value")), (await $.wv([$t6], "false", C, false)), (await $.wv([$t6], "false", C, false)), (await $.wv([$t6], "False", C, false)), (await $.wv([$t6], "false", C, false)), 8, "Arial AzLat", (await $.wv([$t6], "False", C, false))], C)));
      await $.stmt((await $.wcall([$t6], "SetBookmark", ["Risks", (await $.mv((await $.wv([$t6], "ODSRisksName", C, false)), "value")), (await $.wv([$t6], "false", C, false)), (await $.wv([$t6], "false", C, false)), (await $.wv([$t6], "False", C, false)), (await $.wv([$t6], "false", C, false)), 8, "Arial AzLat", (await $.wv([$t6], "False", C, false))], C)));
      await $.stmt((await $.wcall([$t6], "SetBookmark", ["Franshiz", (await $.mv((await $.wv([$t6], "FranshizName", C, false)), "value")), (await $.wv([$t6], "false", C, false)), (await $.wv([$t6], "false", C, false)), (await $.wv([$t6], "False", C, false)), (await $.wv([$t6], "false", C, false)), 8, "Arial AzLat", (await $.wv([$t6], "False", C, false))], C)));
      await $.stmt((await $.wcall([$t6], "SetBookmark", ["Cond", (await $.mv((await $.wv([$t6], "ConditionsName", C, false)), "value")), (await $.wv([$t6], "false", C, false)), (await $.wv([$t6], "false", C, false)), (await $.wv([$t6], "False", C, false)), (await $.wv([$t6], "false", C, false)), 8, "Arial AzLat", (await $.wv([$t6], "False", C, false))], C)));
      await $.stmt((await $.wcall([$t6], "SetBookmark", ["IPremium", (await $.wcall([$t6], "FloatToStr", [(await $.mv((await $.wv([$t6], "ODSContractsAmmount", C, false)), "value"))], C)), (await $.wv([$t6], "false", C, false)), (await $.wv([$t6], "false", C, false)), (await $.wv([$t6], "False", C, false)), (await $.wv([$t6], "false", C, false)), 8, "Arial AzLat", (await $.wv([$t6], "False", C, false))], C)));
    }
  } finally {
    await $.mcall((await $.v(C, "PolicyExporter")), "Show", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TConstructionPolicy", "btApplyClick", async function btApplyClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t7 = (await $.v(C, "ODSConstPolicy"));
    await $.mset((await $.wv([$t7], "ODSConstPolicyCs_id", C, false)), "Value", (await $.mv((await $.wv([$t7], "ODSConstSuggestID", C, false)), "Value")));
    if ($.truthy($.in_((await $.wv([$t7], "State", C, false)), [(await $.wv([$t7], "dsInsert", C, false)), (await $.wv([$t7], "dsEdit", C, false))]))) {
      await $.stmt($.wcall([$t7], "Post", [], C));
    }
    await $.stmt($.wcall([$t7], "RefreshRecord", [], C));
  }
  {
    const $t8 = (await $.v(C, "ODSContracts"));
    if ($.truthy($.in_((await $.wv([$t8], "State", C, false)), [(await $.wv([$t8], "dsEdit", C, false)), (await $.wv([$t8], "dsInsert", C, false))]))) {
      await $.mset((await $.wcall([$t8], "FieldByName", ["policy_id"], C)), "asFloat", (await $.mv((await $.mcall((await $.wv([$t8], "ODSConstPolicy", C, false)), "FieldByName", ["id"])), "asFloat")));
      if ($.truthy((await $.mv((await $.wv([$t8], "ODSContractsPolicy_Num", C, false)), "IsNull")))) {
        await $.mset((await $.wcall([$t8], "FieldByName", ["POLICY_NUM"], C)), "AsString", (await $.mcall((await $.wv([$t8], "OPCommon", C, false)), "callStringFunction", ["generatePolicy_Num", [(await $.wv([$t8], "tid", C, false))]])));
      }
      await $.stmt($.wcall([$t8], "Post", [], C));
    }
  }
  await $.mset((await $.v(C, "btApply")), "Enabled", false);
  await $.mset((await $.v(C, "btPrint")), "Enabled", true);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TConstructionPolicy", "ENumChange", async function ENumChange(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mset((await $.v(C, "btApply")), "Enabled", true);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TConstructionPolicy", "Addtransh", async function Addtransh(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: undefined};
  {
    const $t9 = (await $.v(C, "ODSConstructionR"));
    const $t10 = (await $.wv([$t9], "OPCOMMON", C, false));
    await $.stmt((await $.mcall((await $.wv([$t9, $t10], "ODSConstructionR", C, false)), "Locate", ["ID", (await $.mv((await $.wv([$t9, $t10], "ODSConstructionID", C, false)), "Value")), []])));
    await $.mcall((await $.wv([$t9, $t10], "ODSContracts", C, false)), "Close", []);
    await $.stmt((await $.mcall((await $.wv([$t9, $t10], "ODSContracts", C, false)), "SetVariable", ["blankid", (await $.mv((await $.wv([$t9, $t10], "ODSConstructionID", C, false)), "Value"))])));
    await $.mcall((await $.wv([$t9, $t10], "ODSContracts", C, false)), "Open", []);
    if ($.truthy($.gt((await $.wcall([$t9, $t10], "CallIntegerFunction", ["addtransaction", [(await $.mv((await $.mcall((await $.wv([$t9, $t10], "ODSContracts", C, false)), "FieldByName", ["LOANACC_ID"])), "asFloat")), (await $.mv((await $.mcall((await $.wv([$t9, $t10], "ODSContracts", C, false)), "FieldByName", ["CURRACC_ID"])), "asFloat")), (await $.mv((await $.mcall((await $.wv([$t9, $t10], "ODSContracts", C, false)), "FieldByName", ["AMMOUNT"])), "asFloat"))]], C)), 0))) {
      await $.stmt((await $.wcall([$t9, $t10], "MessageDlg", ["Emeliyyat kecirildi.", (await $.wv([$t9, $t10], "mtInformation", C, false)), [(await $.wv([$t9, $t10], "mbOK", C, false))], 0], C)));
    }
    await $.stmt($.wcall([$t9, $t10], "Close", [], C));
  }
  return L0.result;
}, {"params": [], "kind": "procedure", "ptypes": []});
  return U;
}
