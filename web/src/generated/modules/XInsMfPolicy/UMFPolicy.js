// Generated from UMFPolicy.pas by pas2js — do not edit by hand; regenerate instead.
/* eslint-disable */
// @ts-nocheck

export default function define($) {
  const U = $.unit("UMFPolicy", ["Windows", "Messages", "SysUtils", "Classes", "Graphics", "Controls", "Forms", "Dialogs", "ActiveX", "AxCtrls", "PMFPolicy_TLB", "StdVcl", "Db", "OracleData", "StdCtrls", "Buttons", "ExtCtrls", "HintBox", "DBCtrls", "Mask", "SBPlgAx50_TLB", "INSWordExporter", "Oracle", "ComObj", "ComServ", "sboapiDataModuleImpl"]);
  const C = [U];
  U.defClass("TMFPolicy", "TActiveForm", {"groupbox3": {"name": "GroupBox3", "type": "TGroupBox"}, "label4": {"name": "Label4", "type": "TLabel"}, "enum": {"name": "ENum", "type": "TDBEdit"}, "groupbox2": {"name": "GroupBox2", "type": "TGroupBox"}, "label2": {"name": "Label2", "type": "TLabel"}, "label11": {"name": "Label11", "type": "TLabel"}, "label14": {"name": "Label14", "type": "TLabel"}, "dbedit8": {"name": "DBEdit8", "type": "TDBEdit"}, "dbedit9": {"name": "DBEdit9", "type": "TDBEdit"}, "dbedit10": {"name": "DBEdit10", "type": "TDBEdit"}, "groupbox1": {"name": "GroupBox1", "type": "TGroupBox"}, "label30": {"name": "Label30", "type": "TLabel"}, "label32": {"name": "Label32", "type": "TLabel"}, "label31": {"name": "Label31", "type": "TLabel"}, "label33": {"name": "Label33", "type": "TLabel"}, "label34": {"name": "Label34", "type": "TLabel"}, "label27": {"name": "Label27", "type": "TLabel"}, "enumberp": {"name": "ENumberP", "type": "TDBEdit"}, "etotalmedical": {"name": "ETotalMedical", "type": "TDBEdit"}, "etotallimit": {"name": "ETotalLimit", "type": "TDBEdit"}, "elimitper": {"name": "ELimitPer", "type": "TDBEdit"}, "emedicalexpen": {"name": "EMedicalExpen", "type": "TDBEdit"}, "epremiuumins": {"name": "EPremiuumIns", "type": "TDBEdit"}, "ins_motorfulldata": {"name": "Ins_MotorFullData", "type": "TDataSource"}, "ins_motorfull": {"name": "Ins_MotorFull", "type": "TOracleDataSet"}, "ins_motorfullid": {"name": "Ins_MotorFullID", "type": "TFloatField"}, "ins_motorfullkli_id": {"name": "Ins_MotorFullKLI_ID", "type": "TFloatField"}, "ins_motorfullbanking_details": {"name": "Ins_MotorFullBANKING_DETAILS", "type": "TStringField"}, "ins_motorfullinsuredmodel": {"name": "Ins_MotorFullINSUREDMODEL", "type": "TStringField"}, "ins_motorfullinsuredstatenum": {"name": "Ins_MotorFullINSUREDSTATENUM", "type": "TStringField"}, "ins_motorfullinsuredcolor": {"name": "Ins_MotorFullINSUREDCOLOR", "type": "TStringField"}, "ins_motorfullinsuredoutputyear": {"name": "Ins_MotorFullINSUREDOUTPUTYEAR", "type": "TIntegerField"}, "ins_motorfullinsurednumseats": {"name": "Ins_MotorFullINSUREDNUMSEATS", "type": "TIntegerField"}, "ins_motorfullinsuredenginenum": {"name": "Ins_MotorFullINSUREDENGINENUM", "type": "TStringField"}, "ins_motorfullinsuredchassisnum": {"name": "Ins_MotorFullINSUREDCHASSISNUM", "type": "TStringField"}, "ins_motorfullinsuredactualvalue": {"name": "Ins_MotorFullINSUREDACTUALVALUE", "type": "TFloatField"}, "ins_motorfulltransmission_type": {"name": "Ins_MotorFullTRANSMISSION_TYPE", "type": "TStringField"}, "ins_motorfullpresence_alarm": {"name": "Ins_MotorFullPRESENCE_ALARM", "type": "TStringField"}, "ins_motorfullmotor_usage": {"name": "Ins_MotorFullMOTOR_USAGE", "type": "TStringField"}, "ins_motorfullmotorstorageplace": {"name": "Ins_MotorFullMOTORSTORAGEPLACE", "type": "TStringField"}, "ins_motorfullexistingdamage": {"name": "Ins_MotorFullEXISTINGDAMAGE", "type": "TStringField"}, "ins_motorfullinsurancegeographicallimit": {"name": "Ins_MotorFullINSURANCEGEOGRAPHICALLIMIT", "type": "TStringField"}, "ins_motorfullinsuredbody": {"name": "Ins_MotorFullINSUREDBODY", "type": "TStringField"}, "policydata": {"name": "PolicyData", "type": "TDataSource"}, "policy": {"name": "Policy", "type": "TOracleDataSet"}, "policyid": {"name": "PolicyID", "type": "TFloatField"}, "policyms_id": {"name": "PolicyMS_ID", "type": "TFloatField"}, "policypolicynum": {"name": "PolicyPOLICYNUM", "type": "TStringField"}, "policysubjectvalue": {"name": "PolicySUBJECTVALUE", "type": "TFloatField"}, "customers": {"name": "Customers", "type": "TOracleDataSet"}, "customersid": {"name": "CustomersID", "type": "TIntegerField"}, "customersname": {"name": "CustomersNAME", "type": "TStringField"}, "customersaddress": {"name": "CustomersADDRESS", "type": "TStringField"}, "customersmobilephone": {"name": "CustomersMOBILEPHONE", "type": "TStringField"}, "customersfax": {"name": "CustomersFAX", "type": "TStringField"}, "customersdata": {"name": "CustomersData", "type": "TDataSource"}, "bankinfodata": {"name": "BankInfoData", "type": "TDataSource"}, "bankinfo": {"name": "BankInfo", "type": "TOracleDataSet"}, "avalute": {"name": "AValute", "type": "TOracleDataSet"}, "avalutevalu_name": {"name": "AValuteVALU_NAME", "type": "TStringField"}, "avalutevalute": {"name": "AValuteVALUTE", "type": "TIntegerField"}, "avaluteval_name": {"name": "AValuteVAL_NAME", "type": "TStringField"}, "avalutevalu_short": {"name": "AValuteVALU_SHORT", "type": "TStringField"}, "avalutedata": {"name": "AValuteData", "type": "TDataSource"}, "suggestiondata": {"name": "SuggestionData", "type": "TDataSource"}, "suggestion": {"name": "Suggestion", "type": "TOracleDataSet"}, "suggestionid": {"name": "SuggestionID", "type": "TFloatField"}, "suggestionmk_id": {"name": "SuggestionMK_ID", "type": "TFloatField"}, "suggestionriskaddress": {"name": "SuggestionRISKADDRESS", "type": "TStringField"}, "suggestioninsuranceammount": {"name": "SuggestionINSURANCEAMMOUNT", "type": "TFloatField"}, "suggestionenddate": {"name": "SuggestionENDDATE", "type": "TDateTimeField"}, "suggestionrsk_id": {"name": "SuggestionRSK_ID", "type": "TFloatField"}, "suggestionfrz_id": {"name": "SuggestionFRZ_ID", "type": "TFloatField"}, "suggestioncndt_id": {"name": "SuggestionCNDT_ID", "type": "TFloatField"}, "franshizdata": {"name": "FranshizData", "type": "TDataSource"}, "franshiz": {"name": "Franshiz", "type": "TOracleDataSet"}, "franshizid": {"name": "FranshizID", "type": "TFloatField"}, "franshizname": {"name": "FranshizNAME", "type": "TStringField"}, "inswordexporter1": {"name": "INSWordExporter1", "type": "TINSWordExporter"}, "morethandata": {"name": "MoreThanData", "type": "TDataSource"}, "morethan": {"name": "MoreThan", "type": "TOracleDataSet"}, "morethanonename": {"name": "MoreThanOneNAME", "type": "TStringField"}, "dbedit1": {"name": "DBEdit1", "type": "TDBEdit"}, "label1": {"name": "Label1", "type": "TLabel"}, "panel1": {"name": "Panel1", "type": "TPanel"}, "btprint": {"name": "btPrint", "type": "TBitBtn"}, "bitbtn2": {"name": "BitBtn2", "type": "TBitBtn"}, "bitbtn3": {"name": "BitBtn3", "type": "TBitBtn"}, "btapply": {"name": "btApply", "type": "TBitBtn"}, "ins_motorfullbroker": {"name": "Ins_MotorFullBROKER", "type": "TFloatField"}, "odsbeneficiary": {"name": "ODSBeneficiary", "type": "TOracleDataSet"}, "odsbeneficiaryid": {"name": "ODSBeneficiaryID", "type": "TFloatField"}, "odsbeneficiaryname": {"name": "ODSBeneficiaryNAME", "type": "TStringField"}, "odsbeneficiaryaddress": {"name": "ODSBeneficiaryADDRESS", "type": "TStringField"}, "odsbeneficiaryphone": {"name": "ODSBeneficiaryPHONE", "type": "TStringField"}, "odsbeneficiarybanking_details": {"name": "ODSBeneficiaryBANKING_DETAILS", "type": "TStringField"}, "beneficiarysource": {"name": "BeneficiarySource", "type": "TDataSource"}, "odscontracts": {"name": "ODSContracts", "type": "TOracleDataSet"}, "dscontracts": {"name": "DSContracts", "type": "TDataSource"}, "odscontractsid": {"name": "ODSContractsID", "type": "TFloatField"}, "odscontractstype_id": {"name": "ODSContractsTYPE_ID", "type": "TFloatField"}, "odscontractsins_date": {"name": "ODSContractsINS_DATE", "type": "TDateTimeField"}, "odscontractsbegin_date": {"name": "ODSContractsBEGIN_DATE", "type": "TDateTimeField"}, "odscontractsend_date": {"name": "ODSContractsEND_DATE", "type": "TDateTimeField"}, "odscontractsvalute_id": {"name": "ODSContractsVALUTE_ID", "type": "TFloatField"}, "odscontractsammount": {"name": "ODSContractsAMMOUNT", "type": "TFloatField"}, "odscontractsclose_prefix": {"name": "ODSContractsCLOSE_PREFIX", "type": "TIntegerField"}, "odscontractskli_id": {"name": "ODSContractsKLI_ID", "type": "TFloatField"}, "odscontractsloanacc_id": {"name": "ODSContractsLOANACC_ID", "type": "TFloatField"}, "odscontractscurracc_id": {"name": "ODSContractsCURRACC_ID", "type": "TFloatField"}, "odscontractspolicy_num": {"name": "ODSContractsPOLICY_NUM", "type": "TStringField"}, "suggestioninsurancesum": {"name": "SuggestionINSURANCESUM", "type": "TFloatField"}, "suggestionval_id": {"name": "SuggestionVAL_ID", "type": "TFloatField"}, "odsagents": {"name": "ODSAgents", "type": "TOracleDataSet"}, "odsagentsname": {"name": "ODSAgentsNAME", "type": "TStringField"}, "odsagentsid": {"name": "ODSAgentsID", "type": "TFloatField"}, "agentssource": {"name": "AgentsSource", "type": "TDataSource"}, "opcommon": {"name": "OPCOMMON", "type": "TOraclePackage"}, "ins_motorfullprofitid": {"name": "Ins_MotorFullPROFITID", "type": "TFloatField"}, "ins_motorfulltypeid": {"name": "Ins_MotorFullTYPEID", "type": "TIntegerField"}, "ins_motorfullinsuredtype": {"name": "Ins_MotorFullINSUREDTYPE", "type": "TFloatField"}, "ins_motorfullinsuredmark": {"name": "Ins_MotorFullINSUREDMARK", "type": "TStringField"}, "odsautotypes": {"name": "ODSAutoTypes", "type": "TOracleDataSet"}, "odsautotypesid": {"name": "ODSAutoTypesID", "type": "TFloatField"}, "odsautotypesname": {"name": "ODSAutoTypesNAME", "type": "TStringField"}, "dsautotypes": {"name": "DSAutoTypes", "type": "TDataSource"}, "speedbutton1": {"name": "SpeedButton1", "type": "TSpeedButton"}, "ins_motorfullcid": {"name": "Ins_MotorFullCID", "type": "TFloatField"}, "fparams": {"name": "FParams", "type": "TStrings"}, "fownerhandle": {"name": "FOwnerHandle", "type": "Integer"}, "id": {"name": "ID", "type": "Integer"}, "tid": {"name": "tid", "type": "Integer"}, "fevents": {"name": "FEvents", "type": "IMFPolicyEvents"}}, {"params": {"name": "Params", "read": "Get_Params", "write": "Set_Params"}});
  U.init(async () => {
    U.const("WM_ModalResult", $.add((await $.v(C, "WM_USER")), 139));
    U.const("fmCaption", "Policy: (%s)");
    U.var_("MFPolicy", null, "TMFPolicy");
  });
  U.method("TMFPolicy", "DefinePropertyPages", async function DefinePropertyPages(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"definepropertypage": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["definepropertypage"]);
  return L0.result;
}, {"params": ["DefinePropertyPage"], "kind": "procedure", "ptypes": ["TDefinePropertyPage"]});
  U.method("TMFPolicy", "EventSinkChanged", async function EventSinkChanged(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"eventsink": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["eventsink"]);
  await $.set(C, "FEvents", L0["eventsink"]);
  return L0.result;
}, {"params": ["EventSink"], "kind": "procedure", "ptypes": ["IUnknown"]});
  U.method("TMFPolicy", "Initialize", async function Initialize(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: undefined};
  await $.inherited(Self, "TMFPolicy", "Initialize", null, arguments);
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
  U.method("TMFPolicy", "Get_Active", async function Get_Active(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: false};
  L0["result"] = (await $.v(C, "Active"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TMFPolicy", "Get_AutoScroll", async function Get_AutoScroll(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: false};
  L0["result"] = (await $.v(C, "AutoScroll"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TMFPolicy", "Get_AutoSize", async function Get_AutoSize(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: false};
  L0["result"] = (await $.v(C, "AutoSize"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TMFPolicy", "Get_AxBorderStyle", async function Get_AxBorderStyle(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: null};
  L0["result"] = (await $.call(C, "Ord", [(await $.v(C, "AxBorderStyle"))]));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TMFPolicy", "Get_Caption", async function Get_Caption(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: ''};
  L0["result"] = (await $.call(C, "WideString", [(await $.v(C, "Caption"))]));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TMFPolicy", "Get_Color", async function Get_Color(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: null};
  L0["result"] = (await $.call(C, "OLE_COLOR", [(await $.v(C, "Color"))]));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TMFPolicy", "Get_Cursor", async function Get_Cursor(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: 0};
  L0["result"] = (await $.call(C, "Smallint", [(await $.v(C, "Cursor"))]));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TMFPolicy", "Get_DoubleBuffered", async function Get_DoubleBuffered(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: false};
  L0["result"] = (await $.v(C, "DoubleBuffered"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TMFPolicy", "Get_DropTarget", async function Get_DropTarget(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: false};
  L0["result"] = (await $.v(C, "DropTarget"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TMFPolicy", "Get_Enabled", async function Get_Enabled(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: false};
  L0["result"] = (await $.v(C, "Enabled"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TMFPolicy", "Get_Font", async function Get_Font(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: null};
  await $.stmt((await $.call(C, "GetOleFont", [(await $.v(C, "Font")), L0["result"]])));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TMFPolicy", "Get_HelpFile", async function Get_HelpFile(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: ''};
  L0["result"] = (await $.call(C, "WideString", [(await $.v(C, "HelpFile"))]));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TMFPolicy", "Get_KeyPreview", async function Get_KeyPreview(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: false};
  L0["result"] = (await $.v(C, "KeyPreview"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TMFPolicy", "Get_PixelsPerInch", async function Get_PixelsPerInch(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: 0};
  L0["result"] = (await $.v(C, "PixelsPerInch"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TMFPolicy", "Get_PrintScale", async function Get_PrintScale(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: null};
  L0["result"] = (await $.call(C, "Ord", [(await $.v(C, "PrintScale"))]));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TMFPolicy", "Get_Scaled", async function Get_Scaled(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: false};
  L0["result"] = (await $.v(C, "Scaled"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TMFPolicy", "Get_Visible", async function Get_Visible(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: false};
  L0["result"] = (await $.v(C, "Visible"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TMFPolicy", "Get_VisibleDockClientCount", async function Get_VisibleDockClientCount(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: 0};
  L0["result"] = (await $.v(C, "VisibleDockClientCount"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TMFPolicy", "_Set_Font", async function _Set_Font(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.stmt((await $.call(C, "SetOleFont", [(await $.v(C, "Font")), L0["value"]])));
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["IFontDisp"]});
  U.method("TMFPolicy", "ActivateEvent", async function ActivateEvent(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.ne((await $.v(C, "FEvents")), null))) {
    await $.mcall((await $.v(C, "FEvents")), "OnActivate", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TMFPolicy", "ClickEvent", async function ClickEvent(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.ne((await $.v(C, "FEvents")), null))) {
    await $.mcall((await $.v(C, "FEvents")), "OnClick", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TMFPolicy", "CreateEvent", async function CreateEvent(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.ne((await $.v(C, "FEvents")), null))) {
    await $.mcall((await $.v(C, "FEvents")), "OnCreate", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TMFPolicy", "DblClickEvent", async function DblClickEvent(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.ne((await $.v(C, "FEvents")), null))) {
    await $.mcall((await $.v(C, "FEvents")), "OnDblClick", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TMFPolicy", "DeactivateEvent", async function DeactivateEvent(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.ne((await $.v(C, "FEvents")), null))) {
    await $.mcall((await $.v(C, "FEvents")), "OnDeactivate", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TMFPolicy", "DestroyEvent", async function DestroyEvent(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.ne((await $.v(C, "FEvents")), null))) {
    await $.mcall((await $.v(C, "FEvents")), "OnDestroy", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TMFPolicy", "KeyPressEvent", async function KeyPressEvent(Self, p0, p1) {
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
  U.method("TMFPolicy", "PaintEvent", async function PaintEvent(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.ne((await $.v(C, "FEvents")), null))) {
    await $.mcall((await $.v(C, "FEvents")), "OnPaint", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TMFPolicy", "Set_AutoScroll", async function Set_AutoScroll(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "AutoScroll", L0["value"]);
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["WordBool"]});
  U.method("TMFPolicy", "Set_AutoSize", async function Set_AutoSize(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "AutoSize", L0["value"]);
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["WordBool"]});
  U.method("TMFPolicy", "Set_AxBorderStyle", async function Set_AxBorderStyle(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "AxBorderStyle", (await $.call(C, "TActiveFormBorderStyle", [L0["value"]])));
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["TxActiveFormBorderStyle"]});
  U.method("TMFPolicy", "Set_Caption", async function Set_Caption(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "Caption", (await $.call(C, "TCaption", [L0["value"]])));
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["WideString"]});
  U.method("TMFPolicy", "Set_Color", async function Set_Color(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "Color", (await $.call(C, "TColor", [L0["value"]])));
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["OLE_COLOR"]});
  U.method("TMFPolicy", "Set_Cursor", async function Set_Cursor(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "Cursor", (await $.call(C, "TCursor", [L0["value"]])));
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["Smallint"]});
  U.method("TMFPolicy", "Set_DoubleBuffered", async function Set_DoubleBuffered(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "DoubleBuffered", L0["value"]);
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["WordBool"]});
  U.method("TMFPolicy", "Set_DropTarget", async function Set_DropTarget(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "DropTarget", L0["value"]);
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["WordBool"]});
  U.method("TMFPolicy", "Set_Enabled", async function Set_Enabled(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "Enabled", L0["value"]);
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["WordBool"]});
  U.method("TMFPolicy", "Set_Font", async function Set_Font(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.asRef(p0), result: undefined};
  await $.stmt((await $.call(C, "SetOleFont", [(await $.v(C, "Font")), (await L0["value"].get())])));
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["IFontDisp"]});
  U.method("TMFPolicy", "Set_HelpFile", async function Set_HelpFile(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "HelpFile", (await $.call(C, "String", [L0["value"]])));
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["WideString"]});
  U.method("TMFPolicy", "Set_KeyPreview", async function Set_KeyPreview(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "KeyPreview", L0["value"]);
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["WordBool"]});
  U.method("TMFPolicy", "Set_PixelsPerInch", async function Set_PixelsPerInch(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "PixelsPerInch", L0["value"]);
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["Integer"]});
  U.method("TMFPolicy", "Set_PrintScale", async function Set_PrintScale(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "PrintScale", (await $.call(C, "TPrintScale", [L0["value"]])));
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["TxPrintScale"]});
  U.method("TMFPolicy", "Set_Scaled", async function Set_Scaled(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "Scaled", L0["value"]);
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["WordBool"]});
  U.method("TMFPolicy", "Set_Visible", async function Set_Visible(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "Visible", L0["value"]);
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["WordBool"]});
  U.method("TMFPolicy", "Get_Owner", async function Get_Owner(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: 0};
  L0["result"] = (await $.v(C, "handle"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TMFPolicy", "Set_Owner", async function Set_Owner(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"val": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["val"]);
  if ($.truthy($.gt(L0["val"], 0))) {
    await $.set(C, "FOwnerHandle", L0["val"]);
  }
  return L0.result;
}, {"params": ["val"], "kind": "procedure", "ptypes": ["Integer"]});
  U.method("TMFPolicy", "Get_Params", async function Get_Params(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"name": $.copyArg(p0), result: null};
  await $.fixArgs(L0, ["name"]);
  L0["result"] = (await $.idx((await $.mv((await $.v(C, "FParams")), "Values")), [L0["name"]]));
  return L0.result;
}, {"params": ["Name"], "kind": "function", "ptypes": ["WideString"]});
  U.method("TMFPolicy", "Set_Params", async function Set_Params(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"name": $.copyArg(p0), "value": $.copyArg(p1), result: undefined};
  await $.fixArgs(L0, ["name", "value"]);
  { const $t1 = await $.iset((await $.mv((await $.v(C, "FParams")), "Values")), [L0["name"]], L0["value"]); if ($t1 !== undefined) { await $.mset((await $.v(C, "FParams")), "Values", $t1); } }
  return L0.result;
}, {"params": ["Name", "Value"], "kind": "procedure", "ptypes": ["WideString", "OleVariant"]});
  U.method("TMFPolicy", "InstanceInitialize", async function InstanceInitialize(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: null};
  L0["result"] = (await $.v(C, "S_OK"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TMFPolicy", "Cleanup", async function Cleanup(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: null};
  L0["result"] = (await $.v(C, "S_OK"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TMFPolicy", "UIObjectActivate", async function UIObjectActivate(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: null};
  await $.set(C, "id", (await $.call(C, "StrToInt", [(await $.call(C, "Get_Params", ["id"]))])));
  await $.stmt((await $.mcall((await $.v(C, "Ins_motorFull")), "Locate", ["ID", (await $.v(C, "id")), []])));
  await $.stmt((await $.mcall((await $.v(C, "Franshiz")), "Locate", ["ID", (await $.mv((await $.v(C, "Ins_motorFullBroker")), "Value")), []])));
  await $.stmt((await $.mcall((await $.v(C, "Suggestion")), "Locate", ["MK_ID", (await $.mv((await $.v(C, "Ins_MotorFullID")), "Value")), []])));
  await $.mcall((await $.v(C, "ODSContracts")), "Close", []);
  await $.stmt((await $.mcall((await $.v(C, "ODSContracts")), "SetVariable", ["cid", (await $.mv((await $.v(C, "Ins_MotorFullCid")), "value"))])));
  await $.mcall((await $.v(C, "ODSContracts")), "Open", []);
  await $.mcall((await $.v(C, "ODSContracts")), "Edit", []);
  await $.stmt((await $.mcall((await $.v(C, "Policy")), "SetVariable", ["MS_ID", (await $.mv((await $.v(C, "SuggestionId")), "value"))])));
  await $.mcall((await $.v(C, "Policy")), "Open", []);
  await $.set(C, "tid", (await $.mv((await $.v(C, "Ins_MotorFullTypeId")), "Value")));
  if ($.truthy($.eq((await $.call(C, "Get_Params", ["Mod"])), "Insert"))) {
    await $.set(C, "Caption", (await $.call(C, "format", [(await $.v(C, "fmCaption")), ["Elave"]])));
    await $.mcall((await $.v(C, "Policy")), "Insert", []);
    await $.stmt((await $.mcall((await $.v(C, "Policy")), "SetVariable", ["MS_ID", (await $.call(C, "FloatToStr", [(await $.mv((await $.v(C, "SuggestionId")), "value"))]))])));
    await $.mcall((await $.v(C, "Policy")), "Open", []);
  } else {
    await $.set(C, "Caption", (await $.call(C, "format", [(await $.v(C, "fmCaption")), ["Redakte"]])));
    await $.mcall((await $.v(C, "Policy")), "Edit", []);
    await $.mset((await $.v(C, "btPrint")), "Enabled", true);
    await $.mset((await $.v(C, "btApply")), "Enabled", true);
  }
  L0["result"] = (await $.v(C, "S_OK"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TMFPolicy", "QueryDeactivate", async function QueryDeactivate(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: null};
  L0["result"] = (await $.v(C, "S_OK"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TMFPolicy", "UIObjectDeactivate", async function UIObjectDeactivate(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: null};
  L0["result"] = (await $.v(C, "S_OK"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TMFPolicy", "SaveState", async function SaveState(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: null};
  L0["result"] = (await $.v(C, "S_OK"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TMFPolicy", "Get_Height", async function Get_Height(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: 0};
  L0["result"] = (await $.v(C, "Height"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TMFPolicy", "Get_Width", async function Get_Width(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: 0};
  L0["result"] = (await $.v(C, "Width"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TMFPolicy", "ActiveFormCreate", async function ActiveFormCreate(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.set(C, "MFPolicy", Self);
  await $.set(C, "FParams", (await $.mv((await $.v(C, "TStringList")), "Create")));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TMFPolicy", "BitBtn3Click", async function BitBtn3Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.stmt((await $.call(C, "PostMessage", [(await $.v(C, "FOwnerHandle")), (await $.v(C, "WM_ModalResult")), (await $.v(C, "mrCancel")), 0])));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TMFPolicy", "SaveData", async function SaveData(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: undefined};
  await $.mset((await $.v(C, "PolicyMS_id")), "Value", (await $.mv((await $.v(C, "SuggestionID")), "Value")));
  await $.mcall((await $.v(C, "Policy")), "Post", []);
  await $.stmt((await $.mcall((await $.v(C, "Policy")), "RefreshRecord", [])));
  return L0.result;
}, {"params": [], "kind": "procedure", "ptypes": []});
  U.method("TMFPolicy", "ENumKeyPress", async function ENumKeyPress(Self, p0, p1) {
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
  U.method("TMFPolicy", "BitBtn2Click", async function BitBtn2Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.stmt($.call(C, "SaveData", []));
  {
    const $t4 = (await $.v(C, "Policy"));
    if ($.truthy($.in_((await $.wv([$t4], "State", C, false)), [(await $.wv([$t4], "dsInsert", C, false)), (await $.wv([$t4], "dsEdit", C, false))]))) {
      await $.stmt($.wcall([$t4], "Post", [], C));
    }
    await $.stmt($.wcall([$t4], "RefreshRecord", [], C));
  }
  await $.stmt((await $.call(C, "PostMessage", [(await $.v(C, "FOwnerHandle")), (await $.v(C, "WM_ModalResult")), (await $.v(C, "mrOk")), 0])));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TMFPolicy", "btPrintClick", async function btPrintClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "i": 0};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.eq((await $.call(C, "MessageDlg", ["Emeliyyat aparilsin?", (await $.v(C, "mtConfirmation")), [(await $.v(C, "mbYes")), (await $.v(C, "mbNo"))], 0])), (await $.v(C, "mrYes"))))) {
    await $.stmt((await $.call(C, "AddTransh", [])));
  }
  await $.stmt((await $.mcall((await $.v(C, "AValute")), "Locate", ["valute", (await $.mv((await $.v(C, "ODSCOntractsValute_ID")), "Value")), []])));
  await $.stmt((await $.mcall((await $.v(C, "Customers")), "Locate", ["id", (await $.mv((await $.v(C, "Ins_MotorFullKli_ID")), "value")), []])));
  {
    const $t5 = (await $.v(C, "INSWordExporter1"));
    await $.stmt((await $.mcall((await $.wv([$t5], "ODSBeneficiary", C, false)), "Locate", ["id", (await $.mv((await $.wv([$t5], "Ins_MotorFullProfitID", C, false)), "Value")), []])));
    await $.stmt((await $.mcall((await $.wv([$t5], "ODSAgents", C, false)), "Locate", ["id", (await $.mv((await $.wv([$t5], "Ins_MotorFullBroker", C, false)), "Value")), []])));
    if ($.truthy($.not((await $.mv((await $.wv([$t5], "ODSAutoTypes", C, false)), "Active"))))) {
      await $.mcall((await $.wv([$t5], "ODSAutoTypes", C, false)), "Open", []);
    }
    await $.stmt((await $.mcall((await $.wv([$t5], "ODSAutoTypes", C, false)), "Locate", ["ID", (await $.mv((await $.wv([$t5], "Ins_MotorFullInsuredType", C, false)), "Value")), []])));
    await $.wset([$t5], "FileName", $.add((await $.wcall([$t5], "ExtractFilePath", [(await $.mv((await $.wv([$t5], "Application", C, false)), "ExeName"))], C)), "\\MotorFullPolicys.doc"), C);
    await $.stmt((await $.wcall([$t5], "Open", [(await $.wv([$t5], "False", C, false))], C)));
    if ($.truthy($.not((await $.mv((await $.wv([$t5], "CustomersName", C, false)), "IsNull"))))) {
      await $.stmt((await $.wcall([$t5], "SetBookmark", ["Insured1", (await $.mv((await $.wv([$t5], "CustomersName", C, false)), "value")), (await $.wv([$t5], "false", C, false)), (await $.wv([$t5], "false", C, false)), (await $.wv([$t5], "False", C, false)), (await $.wv([$t5], "false", C, false)), 8, "Arial AzLat", (await $.wv([$t5], "False", C, false))], C)));
    }
    if ($.truthy($.not((await $.mv((await $.wv([$t5], "SuggestionEndDate", C, false)), "IsNull"))))) {
      await $.stmt((await $.wcall([$t5], "SetBookmark", ["Date1", (await $.wcall([$t5], "DateToStr", [(await $.mv((await $.wv([$t5], "SuggestionEndDate", C, false)), "value"))], C)), (await $.wv([$t5], "False", C, false)), (await $.wv([$t5], "False", C, false)), (await $.wv([$t5], "False", C, false)), (await $.wv([$t5], "False", C, false)), 8, "Arial AzLat", (await $.wv([$t5], "False", C, false))], C)));
      await $.stmt((await $.wcall([$t5], "SetBookmark", ["Date2", (await $.wcall([$t5], "DateToStr", [(await $.mv((await $.wv([$t5], "SuggestionEndDate", C, false)), "value"))], C)), (await $.wv([$t5], "False", C, false)), (await $.wv([$t5], "False", C, false)), (await $.wv([$t5], "False", C, false)), (await $.wv([$t5], "False", C, false)), 8, "Arial AzLat", (await $.wv([$t5], "False", C, false))], C)));
    }
    await $.stmt((await $.wcall([$t5], "SetBookmark", ["Agent", (await $.mv((await $.wv([$t5], "ODSAgentsName", C, false)), "value")), (await $.wv([$t5], "false", C, false)), (await $.wv([$t5], "false", C, false)), (await $.wv([$t5], "False", C, false)), (await $.wv([$t5], "false", C, false)), 8, "Arial AzLat", (await $.wv([$t5], "False", C, false))], C)));
    await $.stmt((await $.wcall([$t5], "SetBookmark", ["PolicyN", (await $.mv((await $.wv([$t5], "ODSContractsPolicy_Num", C, false)), "value")), (await $.wv([$t5], "false", C, false)), (await $.wv([$t5], "false", C, false)), (await $.wv([$t5], "False", C, false)), (await $.wv([$t5], "false", C, false)), 8, "Arial AzLat", (await $.wv([$t5], "False", C, false))], C)));
    await $.stmt((await $.wcall([$t5], "SetBookmark", ["Beneficiary", (await $.mv((await $.wv([$t5], "ODSBeneficiaryName", C, false)), "value")), (await $.wv([$t5], "false", C, false)), (await $.wv([$t5], "false", C, false)), (await $.wv([$t5], "False", C, false)), (await $.wv([$t5], "false", C, false)), 8, "Arial AzLat", (await $.wv([$t5], "False", C, false))], C)));
    await $.stmt((await $.wcall([$t5], "SetBookmark", ["Insured", (await $.mv((await $.wv([$t5], "CustomersName", C, false)), "value")), (await $.wv([$t5], "false", C, false)), (await $.wv([$t5], "false", C, false)), (await $.wv([$t5], "False", C, false)), (await $.wv([$t5], "false", C, false)), 8, "Arial AzLat", (await $.wv([$t5], "False", C, false))], C)));
    await $.stmt((await $.wcall([$t5], "SetBookmark", ["AInsured", (await $.mv((await $.wv([$t5], "CustomersAddress", C, false)), "value")), (await $.wv([$t5], "false", C, false)), (await $.wv([$t5], "false", C, false)), (await $.wv([$t5], "False", C, false)), (await $.wv([$t5], "false", C, false)), 8, "Arial AzLat", (await $.wv([$t5], "False", C, false))], C)));
    await $.stmt((await $.wcall([$t5], "SetBookmark", ["TInsured", (await $.mv((await $.wv([$t5], "CustomersMobilePhone", C, false)), "value")), (await $.wv([$t5], "false", C, false)), (await $.wv([$t5], "false", C, false)), (await $.wv([$t5], "False", C, false)), (await $.wv([$t5], "false", C, false)), 8, "Arial AzLat", (await $.wv([$t5], "False", C, false))], C)));
    await $.stmt((await $.wcall([$t5], "SetBookmark", ["Geo", (await $.mv((await $.wv([$t5], "Ins_MotorFullInsuranceGeographicalLimit", C, false)), "value")), (await $.wv([$t5], "false", C, false)), (await $.wv([$t5], "false", C, false)), (await $.wv([$t5], "False", C, false)), (await $.wv([$t5], "false", C, false)), 8, "Arial AzLat", (await $.wv([$t5], "False", C, false))], C)));
    await $.stmt((await $.wcall([$t5], "SetBookmark", ["Model", $.add($.add((await $.mv((await $.wv([$t5], "Ins_MotorFullInsuredMark", C, false)), "value")), " "), (await $.mv((await $.wv([$t5], "Ins_MotorFullInsuredModel", C, false)), "value"))), (await $.wv([$t5], "false", C, false)), (await $.wv([$t5], "false", C, false)), (await $.wv([$t5], "False", C, false)), (await $.wv([$t5], "false", C, false)), 8, "Arial AzLat", (await $.wv([$t5], "False", C, false))], C)));
    await $.stmt((await $.wcall([$t5], "SetBookmark", ["Year", (await $.wcall([$t5], "InTToStr", [(await $.mv((await $.wv([$t5], "Ins_MotorFullInsuredoutputYear", C, false)), "value"))], C)), (await $.wv([$t5], "false", C, false)), (await $.wv([$t5], "false", C, false)), (await $.wv([$t5], "False", C, false)), (await $.wv([$t5], "false", C, false)), 8, "Arial AzLat", (await $.wv([$t5], "False", C, false))], C)));
    await $.stmt((await $.wcall([$t5], "SetBookmark", ["Color", (await $.mv((await $.wv([$t5], "Ins_MotorFullInsuredColor", C, false)), "value")), (await $.wv([$t5], "false", C, false)), (await $.wv([$t5], "false", C, false)), (await $.wv([$t5], "False", C, false)), (await $.wv([$t5], "false", C, false)), 8, "Arial AzLat", (await $.wv([$t5], "False", C, false))], C)));
    await $.stmt((await $.wcall([$t5], "SetBookmark", ["Type", (await $.mv((await $.wv([$t5], "ODSAutoTypesName", C, false)), "Value")), (await $.wv([$t5], "false", C, false)), (await $.wv([$t5], "false", C, false)), (await $.wv([$t5], "False", C, false)), (await $.wv([$t5], "false", C, false)), 8, "Arial AzLat", (await $.wv([$t5], "False", C, false))], C)));
    await $.stmt((await $.wcall([$t5], "SetBookmark", ["Capacity", (await $.wcall([$t5], "IntToStr", [(await $.mv((await $.wv([$t5], "Ins_MotorFullInsuredNumSeats", C, false)), "value"))], C)), (await $.wv([$t5], "false", C, false)), (await $.wv([$t5], "false", C, false)), (await $.wv([$t5], "False", C, false)), (await $.wv([$t5], "false", C, false)), 8, "Arial AzLat", (await $.wv([$t5], "False", C, false))], C)));
    await $.stmt((await $.wcall([$t5], "SetBookmark", ["Engine", (await $.mv((await $.wv([$t5], "Ins_MotorFullInsuredEngineNum", C, false)), "value")), (await $.wv([$t5], "false", C, false)), (await $.wv([$t5], "false", C, false)), (await $.wv([$t5], "False", C, false)), (await $.wv([$t5], "false", C, false)), 8, "Arial AzLat", (await $.wv([$t5], "False", C, false))], C)));
    await $.stmt((await $.wcall([$t5], "SetBookmark", ["Body", (await $.mv((await $.wv([$t5], "Ins_MotorFullInsuredBody", C, false)), "value")), (await $.wv([$t5], "false", C, false)), (await $.wv([$t5], "false", C, false)), (await $.wv([$t5], "False", C, false)), (await $.wv([$t5], "false", C, false)), 8, "Arial AzLat", (await $.wv([$t5], "False", C, false))], C)));
    await $.stmt((await $.wcall([$t5], "SetBookmark", ["Chassis", (await $.mv((await $.wv([$t5], "Ins_MotorFullInsuredChassisNum", C, false)), "value")), (await $.wv([$t5], "false", C, false)), (await $.wv([$t5], "false", C, false)), (await $.wv([$t5], "False", C, false)), (await $.wv([$t5], "false", C, false)), 8, "Arial AzLat", (await $.wv([$t5], "False", C, false))], C)));
    await $.stmt((await $.wcall([$t5], "SetBookmark", ["Plate", (await $.mv((await $.wv([$t5], "Ins_MotorFullInsuredStateNum", C, false)), "value")), (await $.wv([$t5], "false", C, false)), (await $.wv([$t5], "false", C, false)), (await $.wv([$t5], "False", C, false)), (await $.wv([$t5], "false", C, false)), 8, "Arial AzLat", (await $.wv([$t5], "False", C, false))], C)));
    if ($.truthy($.not((await $.mv((await $.idx((await $.mv((await $.wv([$t5], "Franshiz", C, false)), "Fields")), [1])), "IsNull"))))) {
      await $.stmt((await $.wcall([$t5], "SetBookmark", ["Deductible", (await $.mv((await $.idx((await $.mv((await $.wv([$t5], "Franshiz", C, false)), "Fields")), [1])), "value")), (await $.wv([$t5], "false", C, false)), (await $.wv([$t5], "false", C, false)), (await $.wv([$t5], "False", C, false)), (await $.wv([$t5], "false", C, false)), 8, "Arial AzLat", (await $.wv([$t5], "False", C, false))], C)));
    }
    if ($.truthy($.not((await $.mv((await $.wv([$t5], "SuggestionInsuranceSum", C, false)), "IsNull"))))) {
      await $.stmt((await $.wcall([$t5], "SetBookmark", ["SumInsured", (await $.wcall([$t5], "CurrToStr", [(await $.mv((await $.wv([$t5], "SuggestionInsuranceSum", C, false)), "value"))], C)), (await $.wv([$t5], "false", C, false)), (await $.wv([$t5], "false", C, false)), (await $.wv([$t5], "False", C, false)), (await $.wv([$t5], "false", C, false)), 8, "Arial AzLat", (await $.wv([$t5], "False", C, false))], C)));
    }
    if ($.truthy($.not((await $.mv((await $.wv([$t5], "ODSContractsAmmount", C, false)), "IsNull"))))) {
      await $.stmt((await $.wcall([$t5], "SetBookmark", ["InsPrem", (await $.wcall([$t5], "CurrToStr", [(await $.mv((await $.wv([$t5], "ODSContractsAmmount", C, false)), "value"))], C)), (await $.wv([$t5], "false", C, false)), (await $.wv([$t5], "false", C, false)), (await $.wv([$t5], "False", C, false)), (await $.wv([$t5], "false", C, false)), 8, "Arial AzLat", (await $.wv([$t5], "False", C, false))], C)));
    }
    if ($.truthy($.not((await $.mv((await $.idx((await $.mv((await $.wv([$t5], "AValute", C, false)), "Fields")), [0])), "IsNull"))))) {
      await $.stmt((await $.wcall([$t5], "SetBookmark", ["Currency", (await $.mv((await $.idx((await $.mv((await $.wv([$t5], "AValute", C, false)), "Fields")), [0])), "value")), (await $.wv([$t5], "false", C, false)), (await $.wv([$t5], "false", C, false)), (await $.wv([$t5], "False", C, false)), (await $.wv([$t5], "false", C, false)), 8, "Arial AzLat", (await $.wv([$t5], "False", C, false))], C)));
    }
    await $.mcall((await $.wv([$t5], "MoreThan", C, false)), "First", []);
    { const $t6 = $.sub((await $.mv((await $.wv([$t5], "MoreThan", C, false)), "RecordCount")), 1);
      await $.wset([$t5], "i", 0, { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true });
      let $t7 = true;
      for (;;) {
        if (!$t7) { await $.wset([$t5], "i", $.succ((await $.wv([$t5], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false)), 1), { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }); }
        $t7 = false;
        if (!($.ord((await $.wv([$t5], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false))) <= $.ord($t6))) break;
        if ($.truthy((await $.mv((await $.idx((await $.mv((await $.wv([$t5], "MoreThan", C, false)), "Fields")), [0])), "IsNull")))) {
          continue;
        }
        await $.stmt((await $.wcall([$t5], "SetBookmark", ["Drivers", $.add((await $.mv((await $.idx((await $.mv((await $.wv([$t5], "MoreThan", C, false)), "Fields")), [0])), "value")), "\r\n"), (await $.wv([$t5], "false", C, false)), (await $.wv([$t5], "false", C, false)), (await $.wv([$t5], "false", C, false)), (await $.wv([$t5], "false", C, false)), 8, "Arial AzLat", (await $.wv([$t5], "False", C, false))], C)));
        await $.mcall((await $.wv([$t5], "MoreThan", C, false)), "Next", []);
        await $.tick();
      }
    }
    await $.stmt($.wcall([$t5], "Show", [], C));
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TMFPolicy", "btApplyClick", async function btApplyClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.stmt($.call(C, "SaveData", []));
  {
    const $t8 = (await $.v(C, "Policy"));
    if ($.truthy($.in_((await $.wv([$t8], "State", C, false)), [(await $.wv([$t8], "dsInsert", C, false)), (await $.wv([$t8], "dsEdit", C, false))]))) {
      await $.stmt($.wcall([$t8], "Post", [], C));
    }
    await $.stmt($.wcall([$t8], "RefreshRecord", [], C));
    await $.stmt($.wcall([$t8], "Edit", [], C));
  }
  await $.mset((await $.v(C, "btPrint")), "Enabled", true);
  await $.mset((await $.v(C, "btApply")), "Enabled", false);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TMFPolicy", "DBEdit8Change", async function DBEdit8Change(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mset((await $.v(C, "btApply")), "Enabled", true);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TMFPolicy", "AddTransh", async function AddTransh(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: undefined};
  {
    const $t9 = (await $.v(C, "OPCOMMON"));
    await $.mcall((await $.wv([$t9], "ODSContracts", C, false)), "Close", []);
    await $.stmt((await $.mcall((await $.wv([$t9], "ODSContracts", C, false)), "SetVariable", ["blankid", (await $.mv((await $.wv([$t9], "Ins_MotorFullID", C, false)), "Value"))])));
    await $.mcall((await $.wv([$t9], "ODSContracts", C, false)), "Open", []);
    if ($.truthy($.gt((await $.wcall([$t9], "CallIntegerFunction", ["addtransaction", [(await $.mv((await $.mcall((await $.wv([$t9], "ODSContracts", C, false)), "FieldByName", ["LOANACC_ID"])), "asFloat")), (await $.mv((await $.mcall((await $.wv([$t9], "ODSContracts", C, false)), "FieldByName", ["CURRACC_ID"])), "asFloat")), (await $.mv((await $.mcall((await $.wv([$t9], "ODSContracts", C, false)), "FieldByName", ["AMMOUNT"])), "asFloat"))]], C)), 0))) {
      await $.stmt((await $.wcall([$t9], "MessageDlg", ["Emeliyyat kecirildi.", (await $.wv([$t9], "mtInformation", C, false)), [(await $.wv([$t9], "mbOK", C, false))], 0], C)));
    }
    await $.stmt($.wcall([$t9], "Close", [], C));
  }
  return L0.result;
}, {"params": [], "kind": "procedure", "ptypes": []});
  U.method("TMFPolicy", "SpeedButton1Click", async function SpeedButton1Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t10 = (await $.v(C, "ODSContracts"));
    if ($.truthy((await $.mv((await $.wv([$t10], "ODSContractsPolicy_Num", C, false)), "IsNull")))) {
      await $.mset((await $.wcall([$t10], "FieldByName", ["POLICY_NUM"], C)), "AsString", (await $.mcall((await $.wv([$t10], "OPCommon", C, false)), "callStringFunction", ["generatePolicy_Num", [(await $.wv([$t10], "tid", C, false))]])));
    }
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  return U;
}
