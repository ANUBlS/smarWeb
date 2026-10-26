// Generated from UPMFMain.pas by pas2js — do not edit by hand; regenerate instead.
/* eslint-disable */
// @ts-nocheck

export default function define($) {
  const U = $.unit("UPMFMain", ["Windows", "Messages", "SysUtils", "Classes", "Graphics", "Controls", "Forms", "LDialogs", "ActiveX", "AxCtrls", "PPMFMain_TLB", "StdVcl", "Oracle", "Db", "OracleData", "StdCtrls", "Grids", "DBGrids", "ExtCtrls", "ComCtrls", "ToolWin", "INSWordExporter", "ActnList", "ImgList", "Menus", "SBPlgAx50_TLB", "PlgModalContainer", "ComObj", "ComServ", "sboapidatamoduleimpl", "USearch"]);
  const C = [U];
  U.defClass("TPMFMain", "TActiveForm", {"popupmenu2": {"name": "PopupMenu2", "type": "TPopupMenu"}, "n2": {"name": "N2", "type": "TMenuItem"}, "n3": {"name": "N3", "type": "TMenuItem"}, "n4": {"name": "N4", "type": "TMenuItem"}, "n5": {"name": "N5", "type": "TMenuItem"}, "n6": {"name": "N6", "type": "TMenuItem"}, "n9": {"name": "N9", "type": "TMenuItem"}, "n7": {"name": "N7", "type": "TMenuItem"}, "n8": {"name": "N8", "type": "TMenuItem"}, "popupmenu1": {"name": "PopupMenu1", "type": "TPopupMenu"}, "n1": {"name": "N1", "type": "TMenuItem"}, "imagelist": {"name": "ImageList", "type": "TImageList"}, "actionlist1": {"name": "ActionList1", "type": "TActionList"}, "actioninsert": {"name": "ActionInsert", "type": "TAction"}, "actionedit": {"name": "ActionEdit", "type": "TAction"}, "actionrefresh": {"name": "ActionRefresh", "type": "TAction"}, "actionfullrefresh": {"name": "ActionFullRefresh", "type": "TAction"}, "actionsearch": {"name": "ActionSearch", "type": "TAction"}, "actionspeedsearch": {"name": "ActionSpeedSearch", "type": "TAction"}, "actiondelete": {"name": "ActionDelete", "type": "TAction"}, "report": {"name": "Report", "type": "TAction"}, "actionsuggestion": {"name": "ActionSuggestion", "type": "TAction"}, "actionpolicy": {"name": "ActionPolicy", "type": "TAction"}, "actionextra": {"name": "ActionExtra", "type": "TAction"}, "inswordexporter1": {"name": "INSWordExporter1", "type": "TINSWordExporter"}, "toolbar1": {"name": "ToolBar1", "type": "TToolBar"}, "toolbutton1": {"name": "ToolButton1", "type": "TToolButton"}, "toolbutton3": {"name": "ToolButton3", "type": "TToolButton"}, "toolbutton5": {"name": "ToolButton5", "type": "TToolButton"}, "toolbutton8": {"name": "ToolButton8", "type": "TToolButton"}, "toolbutton2": {"name": "ToolButton2", "type": "TToolButton"}, "toolbutton4": {"name": "ToolButton4", "type": "TToolButton"}, "toolbutton6": {"name": "ToolButton6", "type": "TToolButton"}, "toolbutton7": {"name": "ToolButton7", "type": "TToolButton"}, "panelacc": {"name": "PanelAcc", "type": "TPanel"}, "label2": {"name": "Label2", "type": "TLabel"}, "label3": {"name": "Label3", "type": "TLabel"}, "dbgrid1": {"name": "DBGrid1", "type": "TDBGrid"}, "gridmore": {"name": "GridMore", "type": "TDBGrid"}, "groupbox1": {"name": "GroupBox1", "type": "TGroupBox"}, "gridmotor": {"name": "GridMotor", "type": "TDBGrid"}, "ins_motorfulldata": {"name": "Ins_MotorFullData", "type": "TDataSource"}, "ins_motorfull": {"name": "Ins_MotorFull", "type": "TOracleDataSet"}, "ins_motorfullid": {"name": "Ins_MotorFullID", "type": "TFloatField"}, "ins_motorfullkli_id": {"name": "Ins_MotorFullKLI_ID", "type": "TFloatField"}, "ins_motorfullbanking_details": {"name": "Ins_MotorFullBANKING_DETAILS", "type": "TStringField"}, "ins_motorfullprofitid": {"name": "Ins_MotorFullPROFITID", "type": "TFloatField"}, "ins_motorfullinsuredmodel": {"name": "Ins_MotorFullINSUREDMODEL", "type": "TStringField"}, "ins_motorfullinsuredstatenum": {"name": "Ins_MotorFullINSUREDSTATENUM", "type": "TStringField"}, "ins_motorfullinsuredcolor": {"name": "Ins_MotorFullINSUREDCOLOR", "type": "TStringField"}, "ins_motorfullinsuredoutputyear": {"name": "Ins_MotorFullINSUREDOUTPUTYEAR", "type": "TIntegerField"}, "ins_motorfullinsurednumseats": {"name": "Ins_MotorFullINSUREDNUMSEATS", "type": "TIntegerField"}, "ins_motorfullinsuredenginenum": {"name": "Ins_MotorFullINSUREDENGINENUM", "type": "TStringField"}, "ins_motorfullinsuredchassisnum": {"name": "Ins_MotorFullINSUREDCHASSISNUM", "type": "TStringField"}, "ins_motorfullinsuredactualvalue": {"name": "Ins_MotorFullINSUREDACTUALVALUE", "type": "TFloatField"}, "ins_motorfulltransmission_type": {"name": "Ins_MotorFullTRANSMISSION_TYPE", "type": "TStringField"}, "ins_motorfullpresence_alarm": {"name": "Ins_MotorFullPRESENCE_ALARM", "type": "TStringField"}, "ins_motorfullmotor_usage": {"name": "Ins_MotorFullMOTOR_USAGE", "type": "TStringField"}, "ins_motorfullmotorstorageplace": {"name": "Ins_MotorFullMOTORSTORAGEPLACE", "type": "TStringField"}, "ins_motorfullexistingdamage": {"name": "Ins_MotorFullEXISTINGDAMAGE", "type": "TStringField"}, "ins_motorfullinsurancegeographicallimit": {"name": "Ins_MotorFullINSURANCEGEOGRAPHICALLIMIT", "type": "TStringField"}, "ins_motorfullbroker": {"name": "Ins_MotorFullBROKER", "type": "TFloatField"}, "ins_motorfullinsuredbody": {"name": "Ins_MotorFullINSUREDBODY", "type": "TStringField"}, "ins_motorfulltypeid": {"name": "Ins_MotorFullTYPEID", "type": "TIntegerField"}, "ins_motorfullclose_prefix": {"name": "Ins_MotorFullCLOSE_PREFIX", "type": "TIntegerField"}, "morethanonedata": {"name": "MoreThanOneData", "type": "TDataSource"}, "morethanone": {"name": "MoreThanOne", "type": "TOracleDataSet"}, "morethanoneid": {"name": "MoreThanOneID", "type": "TFloatField"}, "morethanonename2": {"name": "MoreThanOneNAME2", "type": "TStringField"}, "morethanonesurname": {"name": "MoreThanOneSURNAME", "type": "TStringField"}, "morethanonefathername": {"name": "MoreThanOneFATHERNAME", "type": "TStringField"}, "morethanoneage": {"name": "MoreThanOneAGE", "type": "TIntegerField"}, "morethanoneexperience": {"name": "MoreThanOneEXPERIENCE", "type": "TStringField"}, "morethanonefull_id": {"name": "MoreThanOneFULL_ID", "type": "TFloatField"}, "morethanonehistory": {"name": "MoreThanOneHISTORY", "type": "TStringField"}, "accesories": {"name": "Accesories", "type": "TOracleDataSet"}, "accesoriesid": {"name": "AccesoriesID", "type": "TFloatField"}, "accesoriestype": {"name": "AccesoriesTYPE", "type": "TStringField"}, "accesoriesmake": {"name": "AccesoriesMAKE", "type": "TStringField"}, "accesoriesvalue": {"name": "AccesoriesVALUE", "type": "TFloatField"}, "accesorieshowcreated": {"name": "AccesoriesHOWCREATED", "type": "TStringField"}, "accesoriesfull_id": {"name": "AccesoriesFULL_ID", "type": "TFloatField"}, "accesoriesdata": {"name": "AccesoriesData", "type": "TDataSource"}, "customers": {"name": "Customers", "type": "TOracleDataSet"}, "customersid": {"name": "CustomersID", "type": "TIntegerField"}, "customersname": {"name": "CustomersNAME", "type": "TStringField"}, "customersaddress": {"name": "CustomersADDRESS", "type": "TStringField"}, "customersmobilephone": {"name": "CustomersMOBILEPHONE", "type": "TStringField"}, "customersfax": {"name": "CustomersFAX", "type": "TStringField"}, "customerscontactperson": {"name": "CustomersCONTACTPERSON", "type": "TStringField"}, "customersdata": {"name": "CustomersData", "type": "TDataSource"}, "suggestiondata": {"name": "SuggestionData", "type": "TDataSource"}, "suggestion": {"name": "Suggestion", "type": "TOracleDataSet"}, "suggestionid": {"name": "SuggestionID", "type": "TFloatField"}, "suggestionmk_id": {"name": "SuggestionMK_ID", "type": "TFloatField"}, "suggestionriskaddress": {"name": "SuggestionRISKADDRESS", "type": "TStringField"}, "suggestioninsuranceammount": {"name": "SuggestionINSURANCEAMMOUNT", "type": "TFloatField"}, "suggestionenddate": {"name": "SuggestionENDDATE", "type": "TDateTimeField"}, "suggestionrsk_id": {"name": "SuggestionRSK_ID", "type": "TFloatField"}, "suggestionfrz_id": {"name": "SuggestionFRZ_ID", "type": "TFloatField"}, "suggestioncndt_id": {"name": "SuggestionCNDT_ID", "type": "TFloatField"}, "suggestionval_id": {"name": "SuggestionVAL_ID", "type": "TFloatField"}, "suggestioninsurancesum": {"name": "SuggestionINSURANCESUM", "type": "TFloatField"}, "beneficiarysource": {"name": "BeneficiarySource", "type": "TDataSource"}, "odsbeneficiary": {"name": "ODSBeneficiary", "type": "TOracleDataSet"}, "odsbeneficiaryid": {"name": "ODSBeneficiaryID", "type": "TFloatField"}, "odsbeneficiaryname": {"name": "ODSBeneficiaryNAME", "type": "TStringField"}, "odsbeneficiaryaddress": {"name": "ODSBeneficiaryADDRESS", "type": "TStringField"}, "odsbeneficiaryphone": {"name": "ODSBeneficiaryPHONE", "type": "TStringField"}, "odsbeneficiarybanking_details": {"name": "ODSBeneficiaryBANKING_DETAILS", "type": "TStringField"}, "opcommon": {"name": "OPCOMMON", "type": "TOraclePackage"}, "odscontracts": {"name": "ODSContracts", "type": "TOracleDataSet"}, "odscontractsid": {"name": "ODSContractsID", "type": "TFloatField"}, "odscontractstype_id": {"name": "ODSContractsTYPE_ID", "type": "TFloatField"}, "odscontractsins_date": {"name": "ODSContractsINS_DATE", "type": "TDateTimeField"}, "odscontractsbegin_date": {"name": "ODSContractsBEGIN_DATE", "type": "TDateTimeField"}, "odscontractsend_date": {"name": "ODSContractsEND_DATE", "type": "TDateTimeField"}, "odscontractsvalute_id": {"name": "ODSContractsVALUTE_ID", "type": "TFloatField"}, "odscontractsclose_prefix": {"name": "ODSContractsCLOSE_PREFIX", "type": "TIntegerField"}, "odscontractskli_id": {"name": "ODSContractsKLI_ID", "type": "TFloatField"}, "odscontractsloanacc_id": {"name": "ODSContractsLOANACC_ID", "type": "TFloatField"}, "odscontractscurracc_id": {"name": "ODSContractsCURRACC_ID", "type": "TFloatField"}, "odscontractspolicy_num": {"name": "ODSContractsPOLICY_NUM", "type": "TStringField"}, "odscontractsammount": {"name": "ODSContractsAMMOUNT", "type": "TFloatField"}, "dscontracts": {"name": "DSContracts", "type": "TDataSource"}, "plgblank": {"name": "PlgBlank", "type": "TPlgModalContainer"}, "policy": {"name": "Policy", "type": "TOracleDataSet"}, "policyid": {"name": "PolicyID", "type": "TFloatField"}, "policyms_id": {"name": "PolicyMS_ID", "type": "TFloatField"}, "policypolicynum": {"name": "PolicyPOLICYNUM", "type": "TStringField"}, "policysubjectvalue": {"name": "PolicySUBJECTVALUE", "type": "TFloatField"}, "policydata": {"name": "PolicyData", "type": "TDataSource"}, "pins_fullmotor": {"name": "PINS_FULLMOTOR", "type": "TOraclePackage"}, "more_report": {"name": "More_Report", "type": "TOracleDataSet"}, "more_reportid": {"name": "More_ReportID", "type": "TFloatField"}, "more_reportfull_id": {"name": "More_ReportFULL_ID", "type": "TFloatField"}, "more_reportname": {"name": "More_ReportNAME", "type": "TStringField"}, "more_reportage": {"name": "More_ReportAGE", "type": "TIntegerField"}, "more_reportexperience": {"name": "More_ReportEXPERIENCE", "type": "TStringField"}, "more_reporthistory": {"name": "More_ReportHISTORY", "type": "TStringField"}, "morereportdata": {"name": "MoreReportData", "type": "TDataSource"}, "odsagents": {"name": "ODSAgents", "type": "TOracleDataSet"}, "odsagentsname": {"name": "ODSAgentsNAME", "type": "TStringField"}, "odsagentsid": {"name": "ODSAgentsID", "type": "TFloatField"}, "agentssource": {"name": "AgentsSource", "type": "TDataSource"}, "n10": {"name": "N10", "type": "TMenuItem"}, "ins_motorfullname": {"name": "Ins_MotorFullNAME", "type": "TStringField"}, "toolbutton9": {"name": "ToolButton9", "type": "TToolButton"}, "ins_motorfullbegin_date": {"name": "Ins_MotorFullBEGIN_DATE", "type": "TDateTimeField"}, "ins_motorfullend_date": {"name": "Ins_MotorFullEND_DATE", "type": "TDateTimeField"}, "ins_motorfullinsuredtype": {"name": "Ins_MotorFullINSUREDTYPE", "type": "TFloatField"}, "ins_motorfullinsuredmark": {"name": "Ins_MotorFullINSUREDMARK", "type": "TStringField"}, "ins_motorfullmarka": {"name": "Ins_MotorFullMARKA", "type": "TStringField"}, "odsautotypes": {"name": "ODSAutoTypes", "type": "TOracleDataSet"}, "odsautotypesid": {"name": "ODSAutoTypesID", "type": "TFloatField"}, "odsautotypesname": {"name": "ODSAutoTypesNAME", "type": "TStringField"}, "dsautotypes": {"name": "DSAutoTypes", "type": "TDataSource"}, "ins_motorfullcontact_person": {"name": "Ins_MotorFullCONTACT_PERSON", "type": "TStringField"}, "ins_motorfullmonth_id": {"name": "Ins_MotorFullMONTH_ID", "type": "TFloatField"}, "ins_motorfullcid": {"name": "Ins_MotorFullCID", "type": "TFloatField"}, "id": {"name": "id", "type": "double"}, "fparams": {"name": "FParams", "type": "TStrings"}, "fownerhandle": {"name": "FOwnerHandle", "type": "Integer"}, "fevents": {"name": "FEvents", "type": "IPMFMainEvents"}}, {"params": {"name": "Params", "read": "Get_Params", "write": "Set_Params"}});
  U.init(async () => {
    U.var_("PMFMain", null, "TPMFMain");
  });
  U.method("TPMFMain", "DefinePropertyPages", async function DefinePropertyPages(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"definepropertypage": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["definepropertypage"]);
  return L0.result;
}, {"params": ["DefinePropertyPage"], "kind": "procedure", "ptypes": ["TDefinePropertyPage"]});
  U.method("TPMFMain", "EventSinkChanged", async function EventSinkChanged(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"eventsink": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["eventsink"]);
  await $.set(C, "FEvents", L0["eventsink"]);
  return L0.result;
}, {"params": ["EventSink"], "kind": "procedure", "ptypes": ["IUnknown"]});
  U.method("TPMFMain", "Initialize", async function Initialize(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: undefined};
  await $.inherited(Self, "TPMFMain", "Initialize", null, arguments);
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
  U.method("TPMFMain", "Get_Active", async function Get_Active(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: false};
  L0["result"] = (await $.v(C, "Active"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TPMFMain", "Get_AutoScroll", async function Get_AutoScroll(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: false};
  L0["result"] = (await $.v(C, "AutoScroll"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TPMFMain", "Get_AutoSize", async function Get_AutoSize(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: false};
  L0["result"] = (await $.v(C, "AutoSize"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TPMFMain", "Get_AxBorderStyle", async function Get_AxBorderStyle(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: null};
  L0["result"] = (await $.call(C, "Ord", [(await $.v(C, "AxBorderStyle"))]));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TPMFMain", "Get_Caption", async function Get_Caption(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: ''};
  L0["result"] = (await $.call(C, "WideString", [(await $.v(C, "Caption"))]));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TPMFMain", "Get_Color", async function Get_Color(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: null};
  L0["result"] = (await $.call(C, "OLE_COLOR", [(await $.v(C, "Color"))]));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TPMFMain", "Get_Cursor", async function Get_Cursor(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: 0};
  L0["result"] = (await $.call(C, "Smallint", [(await $.v(C, "Cursor"))]));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TPMFMain", "Get_DoubleBuffered", async function Get_DoubleBuffered(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: false};
  L0["result"] = (await $.v(C, "DoubleBuffered"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TPMFMain", "Get_DropTarget", async function Get_DropTarget(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: false};
  L0["result"] = (await $.v(C, "DropTarget"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TPMFMain", "Get_Enabled", async function Get_Enabled(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: false};
  L0["result"] = (await $.v(C, "Enabled"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TPMFMain", "Get_Font", async function Get_Font(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: null};
  await $.stmt((await $.call(C, "GetOleFont", [(await $.v(C, "Font")), L0["result"]])));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TPMFMain", "Get_HelpFile", async function Get_HelpFile(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: ''};
  L0["result"] = (await $.call(C, "WideString", [(await $.v(C, "HelpFile"))]));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TPMFMain", "Get_KeyPreview", async function Get_KeyPreview(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: false};
  L0["result"] = (await $.v(C, "KeyPreview"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TPMFMain", "Get_PixelsPerInch", async function Get_PixelsPerInch(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: 0};
  L0["result"] = (await $.v(C, "PixelsPerInch"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TPMFMain", "Get_PrintScale", async function Get_PrintScale(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: null};
  L0["result"] = (await $.call(C, "Ord", [(await $.v(C, "PrintScale"))]));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TPMFMain", "Get_Scaled", async function Get_Scaled(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: false};
  L0["result"] = (await $.v(C, "Scaled"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TPMFMain", "Get_Visible", async function Get_Visible(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: false};
  L0["result"] = (await $.v(C, "Visible"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TPMFMain", "Get_VisibleDockClientCount", async function Get_VisibleDockClientCount(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: 0};
  L0["result"] = (await $.v(C, "VisibleDockClientCount"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TPMFMain", "_Set_Font", async function _Set_Font(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.stmt((await $.call(C, "SetOleFont", [(await $.v(C, "Font")), L0["value"]])));
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["IFontDisp"]});
  U.method("TPMFMain", "ActivateEvent", async function ActivateEvent(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.ne((await $.v(C, "FEvents")), null))) {
    await $.mcall((await $.v(C, "FEvents")), "OnActivate", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TPMFMain", "ClickEvent", async function ClickEvent(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.ne((await $.v(C, "FEvents")), null))) {
    await $.mcall((await $.v(C, "FEvents")), "OnClick", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TPMFMain", "CreateEvent", async function CreateEvent(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.ne((await $.v(C, "FEvents")), null))) {
    await $.mcall((await $.v(C, "FEvents")), "OnCreate", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TPMFMain", "DblClickEvent", async function DblClickEvent(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.ne((await $.v(C, "FEvents")), null))) {
    await $.mcall((await $.v(C, "FEvents")), "OnDblClick", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TPMFMain", "DeactivateEvent", async function DeactivateEvent(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.ne((await $.v(C, "FEvents")), null))) {
    await $.mcall((await $.v(C, "FEvents")), "OnDeactivate", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TPMFMain", "DestroyEvent", async function DestroyEvent(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.ne((await $.v(C, "FEvents")), null))) {
    await $.mcall((await $.v(C, "FEvents")), "OnDestroy", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TPMFMain", "KeyPressEvent", async function KeyPressEvent(Self, p0, p1) {
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
  U.method("TPMFMain", "PaintEvent", async function PaintEvent(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.ne((await $.v(C, "FEvents")), null))) {
    await $.mcall((await $.v(C, "FEvents")), "OnPaint", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TPMFMain", "Set_AutoScroll", async function Set_AutoScroll(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "AutoScroll", L0["value"]);
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["WordBool"]});
  U.method("TPMFMain", "Set_AutoSize", async function Set_AutoSize(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "AutoSize", L0["value"]);
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["WordBool"]});
  U.method("TPMFMain", "Set_AxBorderStyle", async function Set_AxBorderStyle(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "AxBorderStyle", (await $.call(C, "TActiveFormBorderStyle", [L0["value"]])));
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["TxActiveFormBorderStyle"]});
  U.method("TPMFMain", "Set_Caption", async function Set_Caption(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "Caption", (await $.call(C, "TCaption", [L0["value"]])));
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["WideString"]});
  U.method("TPMFMain", "Set_Color", async function Set_Color(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "Color", (await $.call(C, "TColor", [L0["value"]])));
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["OLE_COLOR"]});
  U.method("TPMFMain", "Set_Cursor", async function Set_Cursor(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "Cursor", (await $.call(C, "TCursor", [L0["value"]])));
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["Smallint"]});
  U.method("TPMFMain", "Set_DoubleBuffered", async function Set_DoubleBuffered(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "DoubleBuffered", L0["value"]);
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["WordBool"]});
  U.method("TPMFMain", "Set_DropTarget", async function Set_DropTarget(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "DropTarget", L0["value"]);
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["WordBool"]});
  U.method("TPMFMain", "Set_Enabled", async function Set_Enabled(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "Enabled", L0["value"]);
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["WordBool"]});
  U.method("TPMFMain", "Set_Font", async function Set_Font(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.asRef(p0), result: undefined};
  await $.stmt((await $.call(C, "SetOleFont", [(await $.v(C, "Font")), (await L0["value"].get())])));
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["IFontDisp"]});
  U.method("TPMFMain", "Set_HelpFile", async function Set_HelpFile(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "HelpFile", (await $.call(C, "String", [L0["value"]])));
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["WideString"]});
  U.method("TPMFMain", "Set_KeyPreview", async function Set_KeyPreview(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "KeyPreview", L0["value"]);
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["WordBool"]});
  U.method("TPMFMain", "Set_PixelsPerInch", async function Set_PixelsPerInch(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "PixelsPerInch", L0["value"]);
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["Integer"]});
  U.method("TPMFMain", "Set_PrintScale", async function Set_PrintScale(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "PrintScale", (await $.call(C, "TPrintScale", [L0["value"]])));
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["TxPrintScale"]});
  U.method("TPMFMain", "Set_Scaled", async function Set_Scaled(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "Scaled", L0["value"]);
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["WordBool"]});
  U.method("TPMFMain", "Set_Visible", async function Set_Visible(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "Visible", L0["value"]);
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["WordBool"]});
  U.method("TPMFMain", "Get_Owner", async function Get_Owner(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: 0};
  L0["result"] = (await $.v(C, "handle"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TPMFMain", "Set_Owner", async function Set_Owner(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"val": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["val"]);
  if ($.truthy($.gt(L0["val"], 0))) {
    await $.set(C, "FOwnerHandle", L0["val"]);
  }
  return L0.result;
}, {"params": ["val"], "kind": "procedure", "ptypes": ["Integer"]});
  U.method("TPMFMain", "Get_Params", async function Get_Params(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"name": $.copyArg(p0), result: null};
  await $.fixArgs(L0, ["name"]);
  L0["result"] = (await $.idx((await $.mv((await $.v(C, "FParams")), "Values")), [L0["name"]]));
  return L0.result;
}, {"params": ["Name"], "kind": "function", "ptypes": ["WideString"]});
  U.method("TPMFMain", "Set_Params", async function Set_Params(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"name": $.copyArg(p0), "value": $.copyArg(p1), result: undefined};
  await $.fixArgs(L0, ["name", "value"]);
  { const $t1 = await $.iset((await $.mv((await $.v(C, "FParams")), "Values")), [L0["name"]], L0["value"]); if ($t1 !== undefined) { await $.mset((await $.v(C, "FParams")), "Values", $t1); } }
  return L0.result;
}, {"params": ["Name", "Value"], "kind": "procedure", "ptypes": ["WideString", "OleVariant"]});
  U.method("TPMFMain", "InstanceInitialize", async function InstanceInitialize(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: null};
  L0["result"] = (await $.v(C, "S_OK"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TPMFMain", "Cleanup", async function Cleanup(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: null};
  L0["result"] = (await $.v(C, "S_OK"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TPMFMain", "UIObjectActivate", async function UIObjectActivate(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: null};
  L0["result"] = (await $.v(C, "S_OK"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TPMFMain", "QueryDeactivate", async function QueryDeactivate(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: null};
  L0["result"] = (await $.v(C, "S_OK"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TPMFMain", "UIObjectDeactivate", async function UIObjectDeactivate(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: null};
  L0["result"] = (await $.v(C, "S_OK"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TPMFMain", "SaveState", async function SaveState(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: null};
  L0["result"] = (await $.v(C, "S_OK"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TPMFMain", "Get_Height", async function Get_Height(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: 0};
  L0["result"] = (await $.v(C, "Height"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TPMFMain", "Get_Width", async function Get_Width(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: 0};
  L0["result"] = (await $.v(C, "Width"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TPMFMain", "ActionInsertExecute", async function ActionInsertExecute(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "p": null};
  await $.fixArgs(L0, ["sender"]);
  L0["p"] = (await $.mv((await $.v(C, "TStringList")), "Create"));
  { const $t2 = await $.iset((await $.mv(L0["p"], "Values")), ["SID"], (await $.call(C, "FloatToStr", [(await $.mv((await $.v(C, "INS_MotorFullCID")), "Value"))]))); if ($t2 !== undefined) { await $.mset(L0["p"], "Values", $t2); } }
  { const $t3 = await $.iset((await $.mv(L0["p"], "Values")), ["KLI_ID"], (await $.call(C, "FloatToStr", [(await $.mv((await $.v(C, "INS_MotorFullKLI_ID")), "Value"))]))); if ($t3 !== undefined) { await $.mset(L0["p"], "Values", $t3); } }
  { const $t4 = await $.iset((await $.mv(L0["p"], "Values")), ["Mod"], "Insert"); if ($t4 !== undefined) { await $.mset(L0["p"], "Values", $t4); } }
  {
    const $t5 = (await $.v(C, "plgBlank"));
    await $.stmt((await $.wcall([$t5], "ShowModal", [(await $.wcall([$t5], "StringToGuid", ["{E23FC4C0-937D-4C1A-B8A0-00F4D9130FAA}"], C)), (await $.wv([$t5], "p", { get: async () => L0["p"], set: async (v) => { L0["p"] = v; }, local: true }, false))], C)));
  }
  await $.mcall(L0["p"], "Free", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TPMFMain", "ActionEditExecute", async function ActionEditExecute(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "p": null};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy((await $.mv((await $.v(C, "INS_MotorFull")), "IsEmpty")))) {
    await $.stmt((await $.call(C, "ShowMessage", ["Cədvəldə məlumat yoxdur !"])));
    return L0.result;
  }
  await $.stmt((await $.mcall((await $.v(C, "ODSContracts")), "SetVariable", ["cid", (await $.mv((await $.v(C, "INS_MotorFullCID")), "Value"))])));
  L0["p"] = (await $.mv((await $.v(C, "TStringList")), "Create"));
  { const $t6 = await $.iset((await $.mv(L0["p"], "Values")), ["Mod"], "Edit"); if ($t6 !== undefined) { await $.mset(L0["p"], "Values", $t6); } }
  { const $t7 = await $.iset((await $.mv(L0["p"], "Values")), ["SID"], (await $.call(C, "FloatToStr", [(await $.mv((await $.v(C, "INS_MotorFullCID")), "Value"))]))); if ($t7 !== undefined) { await $.mset(L0["p"], "Values", $t7); } }
  { const $t8 = await $.iset((await $.mv(L0["p"], "Values")), ["KLI_ID"], (await $.call(C, "FloatToStr", [(await $.mv((await $.v(C, "INS_MotorFullKLI_ID")), "Value"))]))); if ($t8 !== undefined) { await $.mset(L0["p"], "Values", $t8); } }
  {
    const $t9 = (await $.v(C, "plgBlank"));
    await $.stmt((await $.wcall([$t9], "ShowModal", [(await $.wcall([$t9], "StringToGuid", ["{E23FC4C0-937D-4C1A-B8A0-00F4D9130FAA}"], C)), (await $.wv([$t9], "p", { get: async () => L0["p"], set: async (v) => { L0["p"] = v; }, local: true }, false))], C)));
  }
  await $.mcall(L0["p"], "Free", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TPMFMain", "ActionDeleteExecute", async function ActionDeleteExecute(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "id": 0, "i": 0, "waitnextconfirm": false, "willrefresh": false};
  await $.fixArgs(L0, ["sender"]);
  L0["waitnextconfirm"] = true;
  L0["willrefresh"] = false;
  {
    const $t10 = (await $.v(C, "GridMotor"));
    const $t11 = (await $.wv([$t10], "SelectedRows", C, false));
    const $t12 = (await $.wv([$t10, $t11], "Ins_MotorFull", C, false));
    try {
      if ($.truthy($.eq((await $.wv([$t10, $t11, $t12], "Count", C, false)), 0))) {
        await $.wset([$t10, $t11, $t12], "CurrentRowSelected", (await $.wv([$t10, $t11, $t12], "True", C, false)), C);
      }
      { const $t13 = $.sub((await $.wv([$t10, $t11, $t12], "Count", C, false)), 1);
        await $.wset([$t10, $t11, $t12], "I", 0, { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true });
        let $t14 = true;
        for (;;) {
          if (!$t14) { await $.wset([$t10, $t11, $t12], "I", $.succ((await $.wv([$t10, $t11, $t12], "I", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false)), 1), { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }); }
          $t14 = false;
          if (!($.ord((await $.wv([$t10, $t11, $t12], "I", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false))) <= $.ord($t13))) break;
          await $.stmt((await $.wcall([$t10, $t11, $t12], "GotoBookmark", [(await $.wcall([$t10, $t11, $t12], "Pointer", [(await $.idx((await $.wv([$t10, $t11, $t12], "Items", C, false)), [(await $.wv([$t10, $t11, $t12], "I", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false))]))], C))], C)));
          await $.wset([$t10, $t11, $t12], "ID", (await $.mv((await $.wcall([$t10, $t11, $t12], "FieldbyName", ["CID"], C)), "AsInteger")), { get: async () => L0["id"], set: async (v) => { L0["id"] = v; }, local: true });
          if ($.truthy((await $.wv([$t10, $t11, $t12], "WaitNextConfirm", { get: async () => L0["waitnextconfirm"], set: async (v) => { L0["waitnextconfirm"] = v; }, local: true }, false)))) {
            { const $t15 = (await $.wcall([$t10, $t11, $t12], "MessageDlg", ["Məlumatlar silinsin ?", (await $.wv([$t10, $t11, $t12], "mtConfirmation", C, false)), [(await $.wv([$t10, $t11, $t12], "mbYes", C, false)), (await $.wv([$t10, $t11, $t12], "mbNo", C, false)), (await $.wv([$t10, $t11, $t12], "mbCancel", C, false)), (await $.wv([$t10, $t11, $t12], "mbYesToAll", C, false))], 0], C));
              if ($.eq($t15, (await $.wv([$t10, $t11, $t12], "mrNo", C, false)))) {
                continue;
              }
              else if ($.eq($t15, (await $.wv([$t10, $t11, $t12], "mrCancel", C, false)))) {
                break;
              }
              else if ($.eq($t15, (await $.wv([$t10, $t11, $t12], "mrYesToAll", C, false)))) {
                if ($.truthy($.eq((await $.wcall([$t10, $t11, $t12], "MessageDlg", [(await $.wcall([$t10, $t11, $t12], "Format", ["%d  sayda məlumat silinsin?", [$.sub((await $.wv([$t10, $t11, $t12], "Count", C, false)), (await $.wv([$t10, $t11, $t12], "I", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false)))]], C)), (await $.wv([$t10, $t11, $t12], "mtConfirmation", C, false)), [(await $.wv([$t10, $t11, $t12], "mbYes", C, false)), (await $.wv([$t10, $t11, $t12], "mbCancel", C, false))], 0], C)), (await $.wv([$t10, $t11, $t12], "mrYes", C, false))))) {
                  await $.wset([$t10, $t11, $t12], "WaitNextConfirm", (await $.wv([$t10, $t11, $t12], "False", C, false)), { get: async () => L0["waitnextconfirm"], set: async (v) => { L0["waitnextconfirm"] = v; }, local: true });
                } else {
                  continue;
                }
              }
            }
          }
          await $.mcall((await $.wv([$t10, $t11, $t12], "Application", C, false)), "ProcessMessages", []);
          await $.stmt((await $.wcall([$t10, $t11, $t12], "DeleteMotorInfo", [(await $.wv([$t10, $t11, $t12], "ID", { get: async () => L0["id"], set: async (v) => { L0["id"] = v; }, local: true }, false))], C)));
          await $.wset([$t10, $t11, $t12], "WillRefresh", (await $.wv([$t10, $t11, $t12], "True", C, false)), { get: async () => L0["willrefresh"], set: async (v) => { L0["willrefresh"] = v; }, local: true });
          await $.tick();
        }
      }
      await $.stmt((await $.wcall([$t10, $t11, $t12], "ActionRefreshExecute", [(await $.wv([$t10, $t11, $t12], "sender", { get: async () => L0["sender"], set: async (v) => { L0["sender"] = v; }, local: true }, false))], C)));
    } finally {
      if ($.truthy((await $.wv([$t10, $t11, $t12], "WillRefresh", { get: async () => L0["willrefresh"], set: async (v) => { L0["willrefresh"] = v; }, local: true }, false)))) {
        await $.stmt((await $.wcall([$t10, $t11, $t12], "ActionRefreshExecute", [(await $.wv([$t10, $t11, $t12], "Sender", { get: async () => L0["sender"], set: async (v) => { L0["sender"] = v; }, local: true }, false))], C)));
      }
    }
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TPMFMain", "ActionRefreshExecute", async function ActionRefreshExecute(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "id": 0};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t16 = (await $.v(C, "Ins_MotorFull"));
    await $.wset([$t16], "ID", (await $.mv((await $.wcall([$t16], "FieldByName", ["ID"], C)), "AsInteger")), { get: async () => L0["id"], set: async (v) => { L0["id"] = v; }, local: true });
    await $.stmt($.wcall([$t16], "Close", [], C));
    await $.stmt($.wcall([$t16], "Open", [], C));
    await $.stmt((await $.wcall([$t16], "Locate", ["ID", (await $.wv([$t16], "ID", { get: async () => L0["id"], set: async (v) => { L0["id"] = v; }, local: true }, false)), []], C)));
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TPMFMain", "FullRefresh", async function FullRefresh(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"datasetname": $.copyArg(p0), result: undefined, "i": 0};
  await $.fixArgs(L0, ["datasetname"]);
  L0["c_err_message"] = " Table or View in Dataset \"%s\" does not exist! ";
  { const $t17 = $.sub((await $.v(C, "ComponentCount")), 1);
    L0["i"] = 0;
    let $t18 = true;
    for (;;) {
      if (!$t18) { L0["i"] = $.succ(L0["i"], 1); }
      $t18 = false;
      if (!($.ord(L0["i"]) <= $.ord($t17))) break;
      if ($.truthy((await $.and_((await $.and_(($.is_((await $.idx((await $.v(C, "Components")), [L0["i"]])), "TOracleDataSet")), async () => ($.ne((await $.mv((await $.idx((await $.v(C, "Components")), [L0["i"]])), "Name")), L0["datasetname"])))), async () => ($.eq((await $.mv((await $.idx((await $.v(C, "Components")), [L0["i"]])), "Tag")), 0)))))) {
        try {
          await $.mcall((await $.idx((await $.v(C, "Components")), [L0["i"]])), "Close", []);
          await $.mcall((await $.idx((await $.v(C, "Components")), [L0["i"]])), "Open", []);
        } catch ($t19) {
          $.rethrowControl($t19);
          $.handled($t19);
          throw $.raise((await $.mcall((await $.v(C, "Exception")), "Create", [(await $.call(C, "Format", [L0["c_err_message"], [(await $.mv(((await $.idx((await $.v(C, "Components")), [L0["i"]]))), "Name"))]]))])));
        }
      }
      await $.tick();
    }
  }
  return L0.result;
}, {"params": ["DataSetName"], "kind": "procedure", "ptypes": ["String"]});
  U.method("TPMFMain", "ActionFullRefreshExecute", async function ActionFullRefreshExecute(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.stmt((await $.call(C, "FullRefresh", [""])));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TPMFMain", "N1DrawItem", async function N1DrawItem(Self, p0, p1, p2, p3) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "acanvas": $.copyArg(p1), "arect": $.copyArg(p2), "selected": $.copyArg(p3), result: undefined, "linebottom": 0, "stext": '', "bar": null};
  await $.fixArgs(L0, ["sender", "acanvas", "arect", "selected"]);
  {
    const $t20 = L0["acanvas"];
    const $t21 = (await $.wv([$t20], "Sender", { get: async () => L0["sender"], set: async (v) => { L0["sender"] = v; }, local: true }, false));
    {
      const $t22 = (await $.wv([$t20, $t21], "Font", C, false));
      await $.wset([$t20, $t21, $t22], "Name", "Azl Sans Serif", C);
      await $.wset([$t20, $t21, $t22], "Charset", (await $.wv([$t20, $t21, $t22], "RUSSIAN_CHARSET", C, false)), C);
      if ($.truthy((await $.wv([$t20, $t21, $t22], "Default", C, false)))) {
        await $.wset([$t20, $t21, $t22], "Style", [(await $.wv([$t20, $t21, $t22], "fsBold", C, false))], C);
      }
    }
    if ($.truthy($.eq((await $.wv([$t20, $t21], "Caption", C, false)), "-"))) {
      await $.mset((await $.wv([$t20, $t21], "Pen", C, false)), "Color", (await $.wv([$t20, $t21], "clBlack", C, false)));
      await $.wset([$t20, $t21], "LineBottom", $.sub(($.add((await $.mv((await $.wv([$t20, $t21], "ARect", { get: async () => L0["arect"], set: async (v) => { L0["arect"] = v; }, local: true }, false)), "Top")), $.idiv(($.sub((await $.mv((await $.wv([$t20, $t21], "ARect", { get: async () => L0["arect"], set: async (v) => { L0["arect"] = v; }, local: true }, false)), "Bottom")), (await $.mv((await $.wv([$t20, $t21], "ARect", { get: async () => L0["arect"], set: async (v) => { L0["arect"] = v; }, local: true }, false)), "Top")))), 2))), 1), { get: async () => L0["linebottom"], set: async (v) => { L0["linebottom"] = v; }, local: true });
      await $.stmt((await $.wcall([$t20, $t21], "MoveTo", [(await $.mv((await $.wv([$t20, $t21], "ARect", { get: async () => L0["arect"], set: async (v) => { L0["arect"] = v; }, local: true }, false)), "Left")), (await $.wv([$t20, $t21], "LineBottom", { get: async () => L0["linebottom"], set: async (v) => { L0["linebottom"] = v; }, local: true }, false))], C)));
      await $.stmt((await $.wcall([$t20, $t21], "LineTo", [(await $.mv((await $.wv([$t20, $t21], "ARect", { get: async () => L0["arect"], set: async (v) => { L0["arect"] = v; }, local: true }, false)), "Right")), (await $.wv([$t20, $t21], "LineBottom", { get: async () => L0["linebottom"], set: async (v) => { L0["linebottom"] = v; }, local: true }, false))], C)));
      await $.stmt((await $.wcall([$t20, $t21], "inc", [$.ref(async () => (await $.wv([$t20, $t21], "LineBottom", { get: async () => L0["linebottom"], set: async (v) => { L0["linebottom"] = v; }, local: true }, false)), async ($t23) => { await $.wset([$t20, $t21], "LineBottom", $t23, { get: async () => L0["linebottom"], set: async (v) => { L0["linebottom"] = v; }, local: true }); })], C)));
      await $.mset((await $.wv([$t20, $t21], "Pen", C, false)), "Color", (await $.wv([$t20, $t21], "clWhite", C, false)));
      await $.stmt((await $.wcall([$t20, $t21], "MoveTo", [(await $.mv((await $.wv([$t20, $t21], "ARect", { get: async () => L0["arect"], set: async (v) => { L0["arect"] = v; }, local: true }, false)), "Left")), (await $.wv([$t20, $t21], "LineBottom", { get: async () => L0["linebottom"], set: async (v) => { L0["linebottom"] = v; }, local: true }, false))], C)));
      await $.stmt((await $.wcall([$t20, $t21], "LineTo", [(await $.mv((await $.wv([$t20, $t21], "ARect", { get: async () => L0["arect"], set: async (v) => { L0["arect"] = v; }, local: true }, false)), "Right")), (await $.wv([$t20, $t21], "LineBottom", { get: async () => L0["linebottom"], set: async (v) => { L0["linebottom"] = v; }, local: true }, false))], C)));
    } else {
      if ($.truthy((await $.wv([$t20, $t21], "Selected", { get: async () => L0["selected"], set: async (v) => { L0["selected"] = v; }, local: true }, false)))) {
        await $.mset((await $.wv([$t20, $t21], "Brush", C, false)), "Color", (await $.wv([$t20, $t21], "clNavy", C, false)));
        if ($.truthy((await $.wv([$t20, $t21], "Enabled", C, false)))) {
          await $.mset((await $.wv([$t20, $t21], "Font", C, false)), "Color", (await $.wv([$t20, $t21], "clWhite", C, false)));
        } else {
          await $.mset((await $.wv([$t20, $t21], "Font", C, false)), "Color", (await $.wv([$t20, $t21], "clSilver", C, false)));
        }
      } else {
        await $.mset((await $.wv([$t20, $t21], "Brush", C, false)), "Color", (await $.wv([$t20, $t21], "clBtnFace", C, false)));
        if ($.truthy((await $.wv([$t20, $t21], "Enabled", C, false)))) {
          await $.mset((await $.wv([$t20, $t21], "Font", C, false)), "Color", (await $.wv([$t20, $t21], "clBlack", C, false)));
        } else {
          await $.mset((await $.wv([$t20, $t21], "Font", C, false)), "Color", (await $.wv([$t20, $t21], "clGrayText", C, false)));
        }
      }
      await $.wset([$t20, $t21], "Bar", (await $.wv([$t20, $t21], "ARect", { get: async () => L0["arect"], set: async (v) => { L0["arect"] = v; }, local: true }, false)), { get: async () => L0["bar"], set: async (v) => { L0["bar"] = v; }, local: true });
      await $.stmt((await $.wcall([$t20, $t21], "Inc", [$.ref(async () => (await $.mv((await $.wv([$t20, $t21], "Bar", { get: async () => L0["bar"], set: async (v) => { L0["bar"] = v; }, local: true }, false)), "Left")), async ($t24) => { await $.mset((await $.wv([$t20, $t21], "Bar", { get: async () => L0["bar"], set: async (v) => { L0["bar"] = v; }, local: true }, false)), "Left", $t24); }), 22], C)));
      await $.stmt((await $.wcall([$t20, $t21], "FillRect", [(await $.wv([$t20, $t21], "Bar", { get: async () => L0["bar"], set: async (v) => { L0["bar"] = v; }, local: true }, false))], C)));
      await $.stmt((await $.wcall([$t20, $t21], "TextOut", [$.add((await $.mv((await $.wv([$t20, $t21], "ARect", { get: async () => L0["arect"], set: async (v) => { L0["arect"] = v; }, local: true }, false)), "Left")), 22), $.add((await $.mv((await $.wv([$t20, $t21], "ARect", { get: async () => L0["arect"], set: async (v) => { L0["arect"] = v; }, local: true }, false)), "Top")), 1), (await $.wv([$t20, $t21], "Caption", C, false))], C)));
    }
    await $.wset([$t20, $t21], "SText", (await $.wcall([$t20, $t21], "ShortCutToText", [(await $.wv([$t20, $t21], "ShortCut", C, false))], C)), { get: async () => L0["stext"], set: async (v) => { L0["stext"] = v; }, local: true });
    await $.stmt((await $.wcall([$t20, $t21], "TextOut", [$.sub($.sub((await $.mv((await $.wv([$t20, $t21], "ARect", { get: async () => L0["arect"], set: async (v) => { L0["arect"] = v; }, local: true }, false)), "Right")), (await $.wcall([$t20, $t21], "TextWidth", [(await $.wv([$t20, $t21], "SText", { get: async () => L0["stext"], set: async (v) => { L0["stext"] = v; }, local: true }, false))], C))), 2), $.add((await $.mv((await $.wv([$t20, $t21], "ARect", { get: async () => L0["arect"], set: async (v) => { L0["arect"] = v; }, local: true }, false)), "Top")), 1), (await $.wv([$t20, $t21], "SText", { get: async () => L0["stext"], set: async (v) => { L0["stext"] = v; }, local: true }, false))], C)));
    if ($.truthy($.ne((await $.wv([$t20, $t21], "ImageIndex", C, false)), (-(1))))) {
      {
        const $t25 = (await $.wv([$t20, $t21], "GetParentMenu", C, false));
        if ($.truthy((await $.wcall([$t20, $t21, $t25], "Assigned", [(await $.wv([$t20, $t21, $t25], "Images", C, false))], C)))) {
          if ($.truthy((await $.wv([$t20, $t21, $t25], "Checked", C, false)))) {
            await $.mset((await $.wv([$t20, $t21, $t25], "Bar", { get: async () => L0["bar"], set: async (v) => { L0["bar"] = v; }, local: true }, false)), "Left", $.add((await $.mv((await $.wv([$t20, $t21, $t25], "ARect", { get: async () => L0["arect"], set: async (v) => { L0["arect"] = v; }, local: true }, false)), "Left")), 1));
            await $.mset((await $.wv([$t20, $t21, $t25], "Bar", { get: async () => L0["bar"], set: async (v) => { L0["bar"] = v; }, local: true }, false)), "Right", $.add((await $.mv((await $.wv([$t20, $t21, $t25], "Bar", { get: async () => L0["bar"], set: async (v) => { L0["bar"] = v; }, local: true }, false)), "Left")), 16));
            await $.mset((await $.wv([$t20, $t21, $t25], "Bar", { get: async () => L0["bar"], set: async (v) => { L0["bar"] = v; }, local: true }, false)), "Top", $.add((await $.mv((await $.wv([$t20, $t21, $t25], "ARect", { get: async () => L0["arect"], set: async (v) => { L0["arect"] = v; }, local: true }, false)), "Top")), 1));
            await $.mset((await $.wv([$t20, $t21, $t25], "Bar", { get: async () => L0["bar"], set: async (v) => { L0["bar"] = v; }, local: true }, false)), "Bottom", $.add((await $.mv((await $.wv([$t20, $t21, $t25], "Bar", { get: async () => L0["bar"], set: async (v) => { L0["bar"] = v; }, local: true }, false)), "Top")), 16));
            await $.mset((await $.mv((await $.wv([$t20, $t21, $t25], "ACanvas", { get: async () => L0["acanvas"], set: async (v) => { L0["acanvas"] = v; }, local: true }, false)), "Brush")), "Color", (await $.wv([$t20, $t21, $t25], "clBtnShadow", C, false)));
            await $.stmt((await $.mcall((await $.wv([$t20, $t21, $t25], "ACanvas", { get: async () => L0["acanvas"], set: async (v) => { L0["acanvas"] = v; }, local: true }, false)), "FrameRect", [(await $.wv([$t20, $t21, $t25], "Bar", { get: async () => L0["bar"], set: async (v) => { L0["bar"] = v; }, local: true }, false))])));
            await $.stmt((await $.wcall([$t20, $t21, $t25], "Inc", [$.ref(async () => (await $.mv((await $.wv([$t20, $t21, $t25], "Bar", { get: async () => L0["bar"], set: async (v) => { L0["bar"] = v; }, local: true }, false)), "Left")), async ($t26) => { await $.mset((await $.wv([$t20, $t21, $t25], "Bar", { get: async () => L0["bar"], set: async (v) => { L0["bar"] = v; }, local: true }, false)), "Left", $t26); }), 2], C)));
            await $.stmt((await $.wcall([$t20, $t21, $t25], "Inc", [$.ref(async () => (await $.mv((await $.wv([$t20, $t21, $t25], "Bar", { get: async () => L0["bar"], set: async (v) => { L0["bar"] = v; }, local: true }, false)), "Right")), async ($t27) => { await $.mset((await $.wv([$t20, $t21, $t25], "Bar", { get: async () => L0["bar"], set: async (v) => { L0["bar"] = v; }, local: true }, false)), "Right", $t27); }), 2], C)));
            await $.stmt((await $.wcall([$t20, $t21, $t25], "Inc", [$.ref(async () => (await $.mv((await $.wv([$t20, $t21, $t25], "Bar", { get: async () => L0["bar"], set: async (v) => { L0["bar"] = v; }, local: true }, false)), "Top")), async ($t28) => { await $.mset((await $.wv([$t20, $t21, $t25], "Bar", { get: async () => L0["bar"], set: async (v) => { L0["bar"] = v; }, local: true }, false)), "Top", $t28); }), 2], C)));
            await $.stmt((await $.wcall([$t20, $t21, $t25], "Inc", [$.ref(async () => (await $.mv((await $.wv([$t20, $t21, $t25], "Bar", { get: async () => L0["bar"], set: async (v) => { L0["bar"] = v; }, local: true }, false)), "Bottom")), async ($t29) => { await $.mset((await $.wv([$t20, $t21, $t25], "Bar", { get: async () => L0["bar"], set: async (v) => { L0["bar"] = v; }, local: true }, false)), "Bottom", $t29); }), 2], C)));
            await $.mset((await $.mv((await $.wv([$t20, $t21, $t25], "ACanvas", { get: async () => L0["acanvas"], set: async (v) => { L0["acanvas"] = v; }, local: true }, false)), "Brush")), "Color", (await $.wv([$t20, $t21, $t25], "clBtnHighlight", C, false)));
            await $.stmt((await $.mcall((await $.wv([$t20, $t21, $t25], "ACanvas", { get: async () => L0["acanvas"], set: async (v) => { L0["acanvas"] = v; }, local: true }, false)), "FrameRect", [(await $.wv([$t20, $t21, $t25], "Bar", { get: async () => L0["bar"], set: async (v) => { L0["bar"] = v; }, local: true }, false))])));
            await $.stmt((await $.wcall([$t20, $t21, $t25], "Dec", [$.ref(async () => (await $.mv((await $.wv([$t20, $t21, $t25], "Bar", { get: async () => L0["bar"], set: async (v) => { L0["bar"] = v; }, local: true }, false)), "Left")), async ($t30) => { await $.mset((await $.wv([$t20, $t21, $t25], "Bar", { get: async () => L0["bar"], set: async (v) => { L0["bar"] = v; }, local: true }, false)), "Left", $t30); }), 1], C)));
            await $.stmt((await $.wcall([$t20, $t21, $t25], "Dec", [$.ref(async () => (await $.mv((await $.wv([$t20, $t21, $t25], "Bar", { get: async () => L0["bar"], set: async (v) => { L0["bar"] = v; }, local: true }, false)), "Right")), async ($t31) => { await $.mset((await $.wv([$t20, $t21, $t25], "Bar", { get: async () => L0["bar"], set: async (v) => { L0["bar"] = v; }, local: true }, false)), "Right", $t31); }), 1], C)));
            await $.stmt((await $.wcall([$t20, $t21, $t25], "Dec", [$.ref(async () => (await $.mv((await $.wv([$t20, $t21, $t25], "Bar", { get: async () => L0["bar"], set: async (v) => { L0["bar"] = v; }, local: true }, false)), "Top")), async ($t32) => { await $.mset((await $.wv([$t20, $t21, $t25], "Bar", { get: async () => L0["bar"], set: async (v) => { L0["bar"] = v; }, local: true }, false)), "Top", $t32); }), 1], C)));
            await $.stmt((await $.wcall([$t20, $t21, $t25], "Dec", [$.ref(async () => (await $.mv((await $.wv([$t20, $t21, $t25], "Bar", { get: async () => L0["bar"], set: async (v) => { L0["bar"] = v; }, local: true }, false)), "Bottom")), async ($t33) => { await $.mset((await $.wv([$t20, $t21, $t25], "Bar", { get: async () => L0["bar"], set: async (v) => { L0["bar"] = v; }, local: true }, false)), "Bottom", $t33); }), 1], C)));
            if ($.truthy((await $.wv([$t20, $t21, $t25], "Selected", { get: async () => L0["selected"], set: async (v) => { L0["selected"] = v; }, local: true }, false)))) {
              await $.mset((await $.mv((await $.wv([$t20, $t21, $t25], "ACanvas", { get: async () => L0["acanvas"], set: async (v) => { L0["acanvas"] = v; }, local: true }, false)), "Brush")), "Color", (await $.wv([$t20, $t21, $t25], "clBtnFace", C, false)));
            } else {
              await $.mset((await $.mv((await $.wv([$t20, $t21, $t25], "ACanvas", { get: async () => L0["acanvas"], set: async (v) => { L0["acanvas"] = v; }, local: true }, false)), "Brush")), "Color", (await $.wv([$t20, $t21, $t25], "clBtnHighlight", C, false)));
            }
            await $.stmt((await $.mcall((await $.wv([$t20, $t21, $t25], "ACanvas", { get: async () => L0["acanvas"], set: async (v) => { L0["acanvas"] = v; }, local: true }, false)), "FillRect", [(await $.wv([$t20, $t21, $t25], "Bar", { get: async () => L0["bar"], set: async (v) => { L0["bar"] = v; }, local: true }, false))])));
          }
          await $.stmt((await $.mcall((await $.wv([$t20, $t21, $t25], "Images", C, false)), "Draw", [(await $.wv([$t20, $t21, $t25], "ACanvas", { get: async () => L0["acanvas"], set: async (v) => { L0["acanvas"] = v; }, local: true }, false)), (await $.mv((await $.wv([$t20, $t21, $t25], "ARect", { get: async () => L0["arect"], set: async (v) => { L0["arect"] = v; }, local: true }, false)), "Left")), (await $.mv((await $.wv([$t20, $t21, $t25], "ARect", { get: async () => L0["arect"], set: async (v) => { L0["arect"] = v; }, local: true }, false)), "Top")), (await $.wv([$t20, $t21, $t25], "ImageIndex", C, false)), (await $.wv([$t20, $t21, $t25], "Enabled", C, false))])));
        }
      }
    }
  }
  return L0.result;
}, {"params": ["Sender", "ACanvas", "ARect", "Selected"], "kind": "procedure", "ptypes": ["TObject", "TCanvas", "TRect", "Boolean"]});
  U.method("TPMFMain", "ActionExtraExecute", async function ActionExtraExecute(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mset((await $.v(C, "PanelAcc")), "Visible", $.not((await $.mv((await $.v(C, "PanelAcc")), "Visible"))));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TPMFMain", "GridMotorTitleClick", async function GridMotorTitleClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"column": $.copyArg(p0), result: undefined, "titlename": ''};
  await $.fixArgs(L0, ["column"]);
  if ($.truthy((await $.mv((await $.mv(L0["column"], "Field")), "Calculated")))) {
    return L0.result;
  }
  L0["titlename"] = (await $.mv(L0["column"], "FieldName"));
  if ($.truthy($.eq((await $.mv(L0["column"], "FieldName")), "NAME"))) {
    L0["titlename"] = "kli_id";
  }
  if ($.truthy($.eq((await $.mv(L0["column"], "FieldName")), "MARKA"))) {
    L0["titlename"] = "InsuredMark";
  }
  {
    const $t34 = (await $.v(C, "Ins_MotorFull"));
    await $.mset((await $.wv([$t34], "Screen", C, false)), "Cursor", (await $.wv([$t34], "crSQLWait", C, false)));
    await $.stmt((await $.wcall([$t34], "SetVariable", ["Title", (await $.wv([$t34], "TitleName", { get: async () => L0["titlename"], set: async (v) => { L0["titlename"] = v; }, local: true }, false))], C)));
    await $.stmt($.wcall([$t34], "Refresh", [], C));
    await $.mset((await $.wv([$t34], "Screen", C, false)), "Cursor", (await $.wv([$t34], "crDefault", C, false)));
  }
  return L0.result;
}, {"params": ["Column"], "kind": "procedure", "ptypes": ["TColumn"]});
  U.method("TPMFMain", "DeleteMotorInfo", async function DeleteMotorInfo(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"id": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["id"]);
  try {
    await $.stmt((await $.mcall((await $.v(C, "OPCommon")), "CallBooleanFunction", ["del_ins", [L0["id"], 4]])));
  } catch ($t35) {
    $.rethrowControl($t35);
    if ($.excIs($t35, "EOracleError")) {
      L0["e"] = $.exc($t35);
      { const $t36 = (await $.mv(L0["e"], "ErrorCode"));
        if ($.eq($t36, 20001)) {
          await $.stmt((await $.call(C, "ShowMessage", ["Asılı hesablarda qalıq sıfırdan fərqlidir!"])));
        }
        else if ($.eq($t36, 20002)) {
          await $.stmt((await $.call(C, "ShowMessage", ["Əvvəlcə asılı hesabları bağlayın!"])));
        }
      }
    }
    else { throw $t35; }
  }
  return L0.result;
}, {"params": ["id"], "kind": "procedure", "ptypes": ["Integer"]});
  U.method("TPMFMain", "ActiveFormCreate", async function ActiveFormCreate(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.set(C, "PMFMain", Self);
  await $.set(C, "FParams", (await $.mv((await $.v(C, "TStringList")), "Create")));
  await $.mset((await $.v(C, "PanelAcc")), "Visible", false);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TPMFMain", "ActionSuggestionExecute", async function ActionSuggestionExecute(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "p": null};
  await $.fixArgs(L0, ["sender"]);
  L0["p"] = (await $.mv((await $.v(C, "TStringList")), "Create"));
  { const $t37 = await $.iset((await $.mv(L0["p"], "Values")), ["MK_ID"], (await $.call(C, "FloatToStr", [(await $.mv((await $.v(C, "INS_MotorFullID")), "Value"))]))); if ($t37 !== undefined) { await $.mset(L0["p"], "Values", $t37); } }
  if ($.truthy($.lt((await $.mv((await $.v(C, "Suggestion")), "RecordCount")), 1))) {
    { const $t38 = await $.iset((await $.mv(L0["p"], "Values")), ["Mod"], "Insert"); if ($t38 !== undefined) { await $.mset(L0["p"], "Values", $t38); } }
  } else {
    { const $t39 = await $.iset((await $.mv(L0["p"], "Values")), ["Mod"], "Edit"); if ($t39 !== undefined) { await $.mset(L0["p"], "Values", $t39); } }
  }
  {
    const $t40 = (await $.v(C, "plgBlank"));
    await $.stmt((await $.wcall([$t40], "ShowModal", [(await $.wcall([$t40], "StringToGuid", ["{9D5D6D94-4ED9-4D64-9BC1-67394E009B52}"], C)), (await $.wv([$t40], "p", { get: async () => L0["p"], set: async (v) => { L0["p"] = v; }, local: true }, false))], C)));
  }
  await $.mcall(L0["p"], "Free", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TPMFMain", "ActionPolicyExecute", async function ActionPolicyExecute(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "p": null};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.eq((await $.mv((await $.v(C, "SUGGESTIONID")), "Value")), 0))) {
    await $.stmt((await $.call(C, "MessageDlg", ["Təklifnamə hazır deyil ! Əvvəlcə təklifnamə hazırlanmalıdır !", (await $.v(C, "mtWarning")), [(await $.v(C, "mbCancel"))], 0])));
    return L0.result;
  }
  L0["p"] = (await $.mv((await $.v(C, "TStringList")), "Create"));
  { const $t41 = await $.iset((await $.mv(L0["p"], "Values")), ["id"], (await $.call(C, "FloatToStr", [(await $.mv((await $.v(C, "INS_MotorFullId")), "value"))]))); if ($t41 !== undefined) { await $.mset(L0["p"], "Values", $t41); } }
  await $.mcall((await $.v(C, "Policy")), "Close", []);
  await $.stmt((await $.mcall((await $.v(C, "Policy")), "SetVariable", ["ms_id", (await $.mv((await $.v(C, "SuggestionID")), "value"))])));
  await $.mcall((await $.v(C, "Policy")), "Open", []);
  if ($.truthy($.lt((await $.mv((await $.v(C, "Policy")), "RecordCount")), 1))) {
    { const $t42 = await $.iset((await $.mv(L0["p"], "Values")), ["Mod"], "Insert"); if ($t42 !== undefined) { await $.mset(L0["p"], "Values", $t42); } }
  } else {
    { const $t43 = await $.iset((await $.mv(L0["p"], "Values")), ["Mod"], "Edit"); if ($t43 !== undefined) { await $.mset(L0["p"], "Values", $t43); } }
  }
  {
    const $t44 = (await $.v(C, "plgBlank"));
    await $.stmt((await $.wcall([$t44], "ShowModal", [(await $.wcall([$t44], "StringToGuid", ["{7269AF35-5AC3-406B-8330-29850E49B6A6}"], C)), (await $.wv([$t44], "p", { get: async () => L0["p"], set: async (v) => { L0["p"] = v; }, local: true }, false))], C)));
  }
  await $.mcall(L0["p"], "Free", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TPMFMain", "ReportExecute", async function ReportExecute(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "i": 0};
  await $.fixArgs(L0, ["sender"]);
  await $.set(C, "id", (await $.mv((await $.v(C, "Ins_MotorFullID")), "value")));
  await $.stmt((await $.mcall((await $.v(C, "ODSAutoTypes")), "Locate", ["id", (await $.mv((await $.v(C, "Ins_MotorFullInsuredType")), "value")), []])));
  await $.stmt((await $.mcall((await $.v(C, "Customers")), "Locate", ["id", (await $.mv((await $.v(C, "Ins_MotorFullKli_ID")), "Value")), []])));
  await $.mcall((await $.v(C, "More_Report")), "Close", []);
  await $.stmt((await $.mcall((await $.v(C, "More_Report")), "SetVariable", ["full_id", (await $.v(C, "id"))])));
  await $.mcall((await $.v(C, "More_Report")), "Open", []);
  await $.stmt((await $.mcall((await $.v(C, "ODSBeneficiary")), "Locate", ["id", (await $.mv((await $.v(C, "Ins_MotorFullProfitId")), "Value")), []])));
  await $.stmt((await $.mcall((await $.v(C, "ODSAgents")), "Locate", ["id", (await $.mv((await $.v(C, "Ins_MotorFullBroker")), "Value")), []])));
  await $.stmt((await $.mcall((await $.v(C, "Customers")), "Locate", ["id", (await $.mv((await $.v(C, "Ins_MotorFullKli_ID")), "Value")), []])));
  {
    const $t45 = (await $.v(C, "INSWordExporter1"));
    await $.wset([$t45], "FileName", $.add((await $.wcall([$t45], "ExtractFilePath", [(await $.mv((await $.wv([$t45], "Application", C, false)), "ExeName"))], C)), "\\MotorFullApplicationForm.doc"), C);
    await $.stmt((await $.wcall([$t45], "Open", [(await $.wv([$t45], "False", C, false))], C)));
    await $.stmt((await $.wcall([$t45], "SetBookmark", ["Insured", (await $.mv((await $.wv([$t45], "CustomersName", C, false)), "value")), (await $.wv([$t45], "True", C, false)), (await $.wv([$t45], "false", C, false)), (await $.wv([$t45], "False", C, false)), (await $.wv([$t45], "false", C, false)), 10, "Arial AzLat", (await $.wv([$t45], "False", C, false))], C)));
    await $.stmt((await $.wcall([$t45], "SetBookmark", ["Address", (await $.mv((await $.wv([$t45], "CustomersAddress", C, false)), "value")), (await $.wv([$t45], "True", C, false)), (await $.wv([$t45], "false", C, false)), (await $.wv([$t45], "False", C, false)), (await $.wv([$t45], "false", C, false)), 10, "Arial AzLat", (await $.wv([$t45], "False", C, false))], C)));
    await $.stmt((await $.wcall([$t45], "SetBookmark", ["Tel", (await $.mv((await $.wv([$t45], "CustomersMobilePhone", C, false)), "value")), (await $.wv([$t45], "True", C, false)), (await $.wv([$t45], "false", C, false)), (await $.wv([$t45], "False", C, false)), (await $.wv([$t45], "false", C, false)), 10, "Arial AzLat", (await $.wv([$t45], "False", C, false))], C)));
    await $.stmt((await $.wcall([$t45], "SetBookmark", ["fax", (await $.mv((await $.wv([$t45], "CustomersFax", C, false)), "value")), (await $.wv([$t45], "True", C, false)), (await $.wv([$t45], "false", C, false)), (await $.wv([$t45], "False", C, false)), (await $.wv([$t45], "false", C, false)), 10, "Arial AzLat", (await $.wv([$t45], "False", C, false))], C)));
    await $.stmt((await $.wcall([$t45], "SetBookmark", ["Model", $.add($.add((await $.mv((await $.wv([$t45], "Ins_MotorFullInsuredMark", C, false)), "value")), " "), (await $.mv((await $.wv([$t45], "Ins_MotorFullInsuredModel", C, false)), "Value"))), (await $.wv([$t45], "True", C, false)), (await $.wv([$t45], "false", C, false)), (await $.wv([$t45], "False", C, false)), (await $.wv([$t45], "false", C, false)), 10, "Arial AzLat", (await $.wv([$t45], "False", C, false))], C)));
    await $.stmt((await $.wcall([$t45], "SetBookmark", ["Type", (await $.mv((await $.wv([$t45], "ODSAutoTypesName", C, false)), "value")), (await $.wv([$t45], "True", C, false)), (await $.wv([$t45], "false", C, false)), (await $.wv([$t45], "False", C, false)), (await $.wv([$t45], "false", C, false)), 10, "Arial AzLat", (await $.wv([$t45], "False", C, false))], C)));
    await $.stmt((await $.wcall([$t45], "SetBookmark", ["Plate", (await $.mv((await $.wv([$t45], "Ins_MotorFullInsuredStateNum", C, false)), "value")), (await $.wv([$t45], "True", C, false)), (await $.wv([$t45], "false", C, false)), (await $.wv([$t45], "False", C, false)), (await $.wv([$t45], "false", C, false)), 10, "Arial AzLat", (await $.wv([$t45], "False", C, false))], C)));
    await $.stmt((await $.wcall([$t45], "SetBookmark", ["Colour", (await $.mv((await $.wv([$t45], "Ins_MotorFullInsuredColor", C, false)), "value")), (await $.wv([$t45], "True", C, false)), (await $.wv([$t45], "false", C, false)), (await $.wv([$t45], "False", C, false)), (await $.wv([$t45], "false", C, false)), 10, "Arial AzLat", (await $.wv([$t45], "False", C, false))], C)));
    await $.stmt((await $.wcall([$t45], "SetBookmark", ["Year", (await $.wcall([$t45], "IntToStr", [(await $.mv((await $.wv([$t45], "Ins_MotorFullInsuredOutputYear", C, false)), "value"))], C)), (await $.wv([$t45], "True", C, false)), (await $.wv([$t45], "false", C, false)), (await $.wv([$t45], "False", C, false)), (await $.wv([$t45], "false", C, false)), 10, "Arial AzLat", (await $.wv([$t45], "False", C, false))], C)));
    await $.stmt((await $.wcall([$t45], "SetBookmark", ["Seats", (await $.wcall([$t45], "IntToStr", [(await $.mv((await $.wv([$t45], "Ins_MotorFullInsuredNumSeats", C, false)), "value"))], C)), (await $.wv([$t45], "True", C, false)), (await $.wv([$t45], "false", C, false)), (await $.wv([$t45], "False", C, false)), (await $.wv([$t45], "false", C, false)), 10, "Arial AzLat", (await $.wv([$t45], "False", C, false))], C)));
    await $.stmt((await $.wcall([$t45], "SetBookmark", ["Nmotor", (await $.mv((await $.wv([$t45], "Ins_MotorFullInsuredEngineNum", C, false)), "value")), (await $.wv([$t45], "True", C, false)), (await $.wv([$t45], "false", C, false)), (await $.wv([$t45], "False", C, false)), (await $.wv([$t45], "false", C, false)), 10, "Arial AzLat", (await $.wv([$t45], "False", C, false))], C)));
    await $.stmt((await $.wcall([$t45], "SetBookmark", ["Nchassis", (await $.mv((await $.wv([$t45], "Ins_MotorFullInsuredChassisNum", C, false)), "value")), (await $.wv([$t45], "True", C, false)), (await $.wv([$t45], "false", C, false)), (await $.wv([$t45], "False", C, false)), (await $.wv([$t45], "false", C, false)), 10, "Arial AzLat", (await $.wv([$t45], "False", C, false))], C)));
    await $.stmt((await $.wcall([$t45], "SetBookmark", ["Avalue", (await $.wcall([$t45], "FloatToStr", [(await $.mv((await $.wv([$t45], "Ins_MotorFullInsuredActualvalue", C, false)), "value"))], C)), (await $.wv([$t45], "True", C, false)), (await $.wv([$t45], "false", C, false)), (await $.wv([$t45], "False", C, false)), (await $.wv([$t45], "false", C, false)), 10, "Arial AzLat", (await $.wv([$t45], "False", C, false))], C)));
    await $.stmt((await $.wcall([$t45], "SetBookmark", ["Transmission", (await $.mv((await $.wv([$t45], "Ins_MotorFullTransMission_Type", C, false)), "value")), (await $.wv([$t45], "True", C, false)), (await $.wv([$t45], "false", C, false)), (await $.wv([$t45], "False", C, false)), (await $.wv([$t45], "false", C, false)), 10, "Arial AzLat", (await $.wv([$t45], "False", C, false))], C)));
    await $.stmt((await $.wcall([$t45], "SetBookmark", ["Alarm", (await $.mv((await $.wv([$t45], "Ins_MotorFullPresence_Alarm", C, false)), "value")), (await $.wv([$t45], "True", C, false)), (await $.wv([$t45], "false", C, false)), (await $.wv([$t45], "False", C, false)), (await $.wv([$t45], "false", C, false)), 10, "Arial AzLat", (await $.wv([$t45], "False", C, false))], C)));
    await $.stmt((await $.wcall([$t45], "SetBookmark", ["Usage", (await $.mv((await $.wv([$t45], "Ins_MotorFullMotor_USAGE", C, false)), "value")), (await $.wv([$t45], "True", C, false)), (await $.wv([$t45], "false", C, false)), (await $.wv([$t45], "False", C, false)), (await $.wv([$t45], "false", C, false)), 10, "Arial AzLat", (await $.wv([$t45], "False", C, false))], C)));
    await $.stmt((await $.wcall([$t45], "SetBookmark", ["Splace", (await $.mv((await $.wv([$t45], "Ins_MotorFullMotorStoragePlace", C, false)), "value")), (await $.wv([$t45], "True", C, false)), (await $.wv([$t45], "false", C, false)), (await $.wv([$t45], "False", C, false)), (await $.wv([$t45], "false", C, false)), 10, "Arial AzLat", (await $.wv([$t45], "False", C, false))], C)));
    await $.stmt((await $.wcall([$t45], "SetBookmark", ["Edamage", (await $.mv((await $.wv([$t45], "Ins_MotorFullExistingDamage", C, false)), "value")), (await $.wv([$t45], "True", C, false)), (await $.wv([$t45], "false", C, false)), (await $.wv([$t45], "False", C, false)), (await $.wv([$t45], "false", C, false)), 10, "Arial AzLat", (await $.wv([$t45], "False", C, false))], C)));
    await $.stmt((await $.wcall([$t45], "SetBookmark", ["Geo", (await $.mv((await $.wv([$t45], "Ins_MotorFullInsuranceGeographicalLimit", C, false)), "value")), (await $.wv([$t45], "True", C, false)), (await $.wv([$t45], "false", C, false)), (await $.wv([$t45], "False", C, false)), (await $.wv([$t45], "false", C, false)), 10, "Arial AzLat", (await $.wv([$t45], "False", C, false))], C)));
    await $.stmt((await $.wcall([$t45], "SetBookmark", ["ContactP", (await $.mv((await $.wv([$t45], "CustomersContactperson", C, false)), "value")), (await $.wv([$t45], "True", C, false)), (await $.wv([$t45], "false", C, false)), (await $.wv([$t45], "False", C, false)), (await $.wv([$t45], "false", C, false)), 10, "Arial AzLat", (await $.wv([$t45], "False", C, false))], C)));
    await $.stmt((await $.wcall([$t45], "SetBookmark", ["ContactP1", (await $.mv((await $.wv([$t45], "CustomersContactperson", C, false)), "value")), (await $.wv([$t45], "True", C, false)), (await $.wv([$t45], "false", C, false)), (await $.wv([$t45], "False", C, false)), (await $.wv([$t45], "false", C, false)), 10, "Arial AzLat", (await $.wv([$t45], "False", C, false))], C)));
    await $.stmt((await $.wcall([$t45], "SetBookmark", ["Beneficiary", (await $.mv((await $.wv([$t45], "ODSBeneficiaryName", C, false)), "value")), (await $.wv([$t45], "True", C, false)), (await $.wv([$t45], "false", C, false)), (await $.wv([$t45], "False", C, false)), (await $.wv([$t45], "false", C, false)), 10, "Arial AzLat", (await $.wv([$t45], "False", C, false))], C)));
    await $.stmt((await $.wcall([$t45], "SetBookmark", ["BeneficiaryA", (await $.mv((await $.wv([$t45], "ODSBeneficiaryAddress", C, false)), "value")), (await $.wv([$t45], "True", C, false)), (await $.wv([$t45], "false", C, false)), (await $.wv([$t45], "False", C, false)), (await $.wv([$t45], "false", C, false)), 10, "Arial AzLat", (await $.wv([$t45], "False", C, false))], C)));
    await $.stmt((await $.wcall([$t45], "SetBookmark", ["BeneficiaryT", (await $.mv((await $.wv([$t45], "ODSBeneficiaryPhone", C, false)), "value")), (await $.wv([$t45], "True", C, false)), (await $.wv([$t45], "false", C, false)), (await $.wv([$t45], "False", C, false)), (await $.wv([$t45], "false", C, false)), 10, "Arial AzLat", (await $.wv([$t45], "False", C, false))], C)));
    await $.stmt((await $.wcall([$t45], "SetBookmark", ["BeneficiaryB", (await $.mv((await $.wv([$t45], "ODSBeneficiaryBanking_details", C, false)), "value")), (await $.wv([$t45], "True", C, false)), (await $.wv([$t45], "false", C, false)), (await $.wv([$t45], "False", C, false)), (await $.wv([$t45], "false", C, false)), 10, "Arial AzLat", (await $.wv([$t45], "False", C, false))], C)));
    if ($.truthy($.ne((await $.mv((await $.wv([$t45], "Accesories", C, false)), "RecordCount")), 0))) {
      await $.mcall((await $.wv([$t45], "Accesories", C, false)), "First", []);
      { const $t46 = $.sub((await $.mv((await $.wv([$t45], "Accesories", C, false)), "RecordCount")), 1);
        await $.wset([$t45], "i", 0, { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true });
        let $t47 = true;
        for (;;) {
          if (!$t47) { await $.wset([$t45], "i", $.succ((await $.wv([$t45], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false)), 1), { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }); }
          $t47 = false;
          if (!($.ord((await $.wv([$t45], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false))) <= $.ord($t46))) break;
          await $.stmt((await $.wcall([$t45], "SetBookmark", ["AType", $.add($.add((await $.mv((await $.wv([$t45], "AccesoriesType", C, false)), "value")), ","), "\r\n"), (await $.wv([$t45], "false", C, false)), (await $.wv([$t45], "false", C, false)), (await $.wv([$t45], "False", C, false)), (await $.wv([$t45], "false", C, false)), 10, "Arial AzLat", (await $.wv([$t45], "False", C, false))], C)));
          await $.stmt((await $.wcall([$t45], "SetBookmark", ["AMake", $.add($.add((await $.mv((await $.wv([$t45], "AccesoriesMake", C, false)), "value")), ","), "\r\n"), (await $.wv([$t45], "false", C, false)), (await $.wv([$t45], "false", C, false)), (await $.wv([$t45], "false", C, false)), (await $.wv([$t45], "false", C, false)), 10, "Arial AzLat", (await $.wv([$t45], "False", C, false))], C)));
          await $.stmt((await $.wcall([$t45], "SetBookmark", ["AValues", $.add($.add((await $.wcall([$t45], "FloatToStr", [(await $.mv((await $.wv([$t45], "AccesoriesValue", C, false)), "value"))], C)), ","), "\r\n"), (await $.wv([$t45], "false", C, false)), (await $.wv([$t45], "false", C, false)), (await $.wv([$t45], "False", C, false)), (await $.wv([$t45], "false", C, false)), 10, "Arial AzLat", (await $.wv([$t45], "False", C, false))], C)));
          await $.stmt((await $.wcall([$t45], "SetBookmark", ["Hcreated", $.add($.add((await $.mv((await $.wv([$t45], "AccesoriesHowcreated", C, false)), "value")), ","), "\r\n"), (await $.wv([$t45], "false", C, false)), (await $.wv([$t45], "false", C, false)), (await $.wv([$t45], "False", C, false)), (await $.wv([$t45], "false", C, false)), 10, "Arial AzLat", (await $.wv([$t45], "False", C, false))], C)));
          await $.mcall((await $.wv([$t45], "Accesories", C, false)), "Next", []);
          await $.tick();
        }
      }
    }
    if ($.truthy($.ne((await $.mv((await $.wv([$t45], "More_Report", C, false)), "RecordCount")), 0))) {
      await $.mcall((await $.wv([$t45], "More_Report", C, false)), "First", []);
      { const $t48 = $.sub((await $.mv((await $.wv([$t45], "More_Report", C, false)), "RecordCount")), 1);
        await $.wset([$t45], "i", 0, { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true });
        let $t49 = true;
        for (;;) {
          if (!$t49) { await $.wset([$t45], "i", $.succ((await $.wv([$t45], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false)), 1), { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }); }
          $t49 = false;
          if (!($.ord((await $.wv([$t45], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false))) <= $.ord($t48))) break;
          await $.stmt((await $.wcall([$t45], "SetBookmark", ["MName", $.add($.add((await $.mv((await $.wv([$t45], "More_ReportName", C, false)), "value")), ","), "\r\n"), (await $.wv([$t45], "false", C, false)), (await $.wv([$t45], "false", C, false)), (await $.wv([$t45], "False", C, false)), (await $.wv([$t45], "false", C, false)), 10, "Arial AzLat", (await $.wv([$t45], "False", C, false))], C)));
          await $.stmt((await $.wcall([$t45], "SetBookmark", ["MAge", $.add($.add((await $.wcall([$t45], "IntToStr", [(await $.mv((await $.wv([$t45], "More_ReportAge", C, false)), "value"))], C)), ","), "\r\n"), (await $.wv([$t45], "false", C, false)), (await $.wv([$t45], "false", C, false)), (await $.wv([$t45], "False", C, false)), (await $.wv([$t45], "false", C, false)), 10, "Arial AzLat", (await $.wv([$t45], "False", C, false))], C)));
          await $.stmt((await $.wcall([$t45], "SetBookmark", ["MExp", $.add($.add((await $.mv((await $.wv([$t45], "More_ReportExperience", C, false)), "value")), ","), "\r\n"), (await $.wv([$t45], "false", C, false)), (await $.wv([$t45], "false", C, false)), (await $.wv([$t45], "False", C, false)), (await $.wv([$t45], "false", C, false)), 10, "Arial AzLat", (await $.wv([$t45], "False", C, false))], C)));
          await $.stmt((await $.wcall([$t45], "SetBookmark", ["MHist", $.add($.add((await $.mv((await $.wv([$t45], "More_ReportHistory", C, false)), "value")), ","), "\r\n"), (await $.wv([$t45], "false", C, false)), (await $.wv([$t45], "false", C, false)), (await $.wv([$t45], "False", C, false)), (await $.wv([$t45], "false", C, false)), 10, "Arial AzLat", (await $.wv([$t45], "False", C, false))], C)));
          await $.mcall((await $.wv([$t45], "More_Report", C, false)), "Next", []);
          await $.tick();
        }
      }
    }
    await $.stmt($.wcall([$t45], "Show", [], C));
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TPMFMain", "ActionSearchExecute", async function ActionSearchExecute(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.not((await $.call(C, "Assigned", [(await $.v(C, "frmSearch"))]))))) {
    await $.set(C, "frmSearch", (await $.mcall((await $.v(C, "TfrmSearch")), "Create", [Self])));
  }
  await $.mcall((await $.v(C, "frmSearch")), "ShowModal", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  return U;
}
