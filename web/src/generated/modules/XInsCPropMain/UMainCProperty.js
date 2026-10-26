// Generated from UMainCProperty.pas by pas2js — do not edit by hand; regenerate instead.
/* eslint-disable */
// @ts-nocheck

export default function define($) {
  const U = $.unit("UMainCProperty", ["Windows", "Messages", "SysUtils", "Classes", "Graphics", "Controls", "Forms", "Dialogs", "ActiveX", "AxCtrls", "PMainCProperty_TLB", "StdVcl", "SBPlgAx50_TLB", "Db", "OracleData", "ImgList", "Grids", "DBGrids", "ToolWin", "ComCtrls", "ActnList", "Menus", "Oracle", "PlgModalContainer", "INSWordExporter", "ComObj", "ComServ", "sboapidatamoduleimpl", "USearch"]);
  const C = [U];
  U.defClass("TfrmMainCProperty", "TActiveForm", {"toolbar1": {"name": "ToolBar1", "type": "TToolBar"}, "cpropertygrid": {"name": "CPropertyGrid", "type": "TDBGrid"}, "imagelist": {"name": "ImageList", "type": "TImageList"}, "odscontracts": {"name": "ODSContracts", "type": "TOracleDataSet"}, "odscontractsid": {"name": "ODSContractsID", "type": "TFloatField"}, "odscontractstype_id": {"name": "ODSContractsTYPE_ID", "type": "TFloatField"}, "odscontractsins_date": {"name": "ODSContractsINS_DATE", "type": "TDateTimeField"}, "odscontractsbegin_date": {"name": "ODSContractsBEGIN_DATE", "type": "TDateTimeField"}, "odscontractsend_date": {"name": "ODSContractsEND_DATE", "type": "TDateTimeField"}, "odscontractsvalute_id": {"name": "ODSContractsVALUTE_ID", "type": "TFloatField"}, "odscontractsammount": {"name": "ODSContractsAMMOUNT", "type": "TFloatField"}, "odscontractsclose_prefix": {"name": "ODSContractsCLOSE_PREFIX", "type": "TIntegerField"}, "odscontractskli_id": {"name": "ODSContractsKLI_ID", "type": "TFloatField"}, "odscontractsloanacc_id": {"name": "ODSContractsLOANACC_ID", "type": "TFloatField"}, "odscontractscurracc_id": {"name": "ODSContractsCURRACC_ID", "type": "TFloatField"}, "odscontractspolicy_num": {"name": "ODSContractsPOLICY_NUM", "type": "TStringField"}, "dscontracts": {"name": "DSContracts", "type": "TDataSource"}, "odscproperty": {"name": "ODSCProperty", "type": "TOracleDataSet"}, "cpropertysource": {"name": "CPropertySource", "type": "TDataSource"}, "odscustomers": {"name": "ODSCustomers", "type": "TOracleDataSet"}, "customerssource": {"name": "CustomersSource", "type": "TDataSource"}, "odsbeneficiary": {"name": "ODSBeneficiary", "type": "TOracleDataSet"}, "beneficiarysource": {"name": "BeneficiarySource", "type": "TDataSource"}, "odsrisks": {"name": "ODSRisks", "type": "TOracleDataSet"}, "risksource": {"name": "RiskSource", "type": "TDataSource"}, "odsrisktype": {"name": "ODSRiskType", "type": "TOracleDataSet"}, "odsrisktypeid": {"name": "ODSRiskTypeID", "type": "TFloatField"}, "odsrisktypename": {"name": "ODSRiskTypeNAME", "type": "TStringField"}, "risktypedata": {"name": "RiskTypeData", "type": "TDataSource"}, "toolbutton1": {"name": "ToolButton1", "type": "TToolButton"}, "toolbutton2": {"name": "ToolButton2", "type": "TToolButton"}, "toolbutton3": {"name": "ToolButton3", "type": "TToolButton"}, "toolbutton4": {"name": "ToolButton4", "type": "TToolButton"}, "toolbutton5": {"name": "ToolButton5", "type": "TToolButton"}, "actionlist1": {"name": "ActionList1", "type": "TActionList"}, "ainsert": {"name": "AInsert", "type": "TAction"}, "aedit": {"name": "AEdit", "type": "TAction"}, "adelete": {"name": "ADelete", "type": "TAction"}, "areport": {"name": "AReport", "type": "TAction"}, "arefresh": {"name": "ARefresh", "type": "TAction"}, "afullrefresh": {"name": "AFullRefresh", "type": "TAction"}, "asuggestion": {"name": "ASuggestion", "type": "TAction"}, "apolicy": {"name": "APolicy", "type": "TAction"}, "toolbutton6": {"name": "ToolButton6", "type": "TToolButton"}, "toolbutton7": {"name": "ToolButton7", "type": "TToolButton"}, "popupmenu2": {"name": "PopupMenu2", "type": "TPopupMenu"}, "n2": {"name": "N2", "type": "TMenuItem"}, "n3": {"name": "N3", "type": "TMenuItem"}, "n4": {"name": "N4", "type": "TMenuItem"}, "n5": {"name": "N5", "type": "TMenuItem"}, "n6": {"name": "N6", "type": "TMenuItem"}, "n9": {"name": "N9", "type": "TMenuItem"}, "n7": {"name": "N7", "type": "TMenuItem"}, "n8": {"name": "N8", "type": "TMenuItem"}, "popupmenu1": {"name": "PopupMenu1", "type": "TPopupMenu"}, "n1": {"name": "N1", "type": "TMenuItem"}, "odscustomersid": {"name": "ODSCustomersID", "type": "TIntegerField"}, "odscustomersname": {"name": "ODSCustomersNAME", "type": "TStringField"}, "odscustomersaddress": {"name": "ODSCustomersADDRESS", "type": "TStringField"}, "odscustomersmobilephone": {"name": "ODSCustomersMOBILEPHONE", "type": "TStringField"}, "odscustomersfax": {"name": "ODSCustomersFAX", "type": "TStringField"}, "odscustomerscontactperson": {"name": "ODSCustomersCONTACTPERSON", "type": "TStringField"}, "odscustomerscontactpersonphone": {"name": "ODSCustomersCONTACTPERSONPHONE", "type": "TStringField"}, "odsbeneficiaryid": {"name": "ODSBeneficiaryID", "type": "TFloatField"}, "odsbeneficiaryname": {"name": "ODSBeneficiaryNAME", "type": "TStringField"}, "odsbeneficiaryaddress": {"name": "ODSBeneficiaryADDRESS", "type": "TStringField"}, "odsbeneficiaryphone": {"name": "ODSBeneficiaryPHONE", "type": "TStringField"}, "odsbeneficiarybanking_details": {"name": "ODSBeneficiaryBANKING_DETAILS", "type": "TStringField"}, "odsrisksid": {"name": "ODSRisksID", "type": "TFloatField"}, "odsrisksname": {"name": "ODSRisksNAME", "type": "TStringField"}, "odscpropertysuggest": {"name": "ODSCPropertySuggest", "type": "TOracleDataSet"}, "odscpropertysuggestid": {"name": "ODSCPropertySuggestID", "type": "TFloatField"}, "odscpropertysuggestbid": {"name": "ODSCPropertySuggestBID", "type": "TFloatField"}, "odscpropertysuggestriskaddress": {"name": "ODSCPropertySuggestRISKADDRESS", "type": "TStringField"}, "odscpropertysuggestinsuranceammount": {"name": "ODSCPropertySuggestINSURANCEAMMOUNT", "type": "TFloatField"}, "odscpropertysuggestenddate": {"name": "ODSCPropertySuggestENDDATE", "type": "TDateTimeField"}, "odscpropertysuggestrisk_id": {"name": "ODSCPropertySuggestRISK_ID", "type": "TFloatField"}, "odscpropertysuggestfrz_id": {"name": "ODSCPropertySuggestFRZ_ID", "type": "TFloatField"}, "odscpropertysuggestcndt_id": {"name": "ODSCPropertySuggestCNDT_ID", "type": "TFloatField"}, "odscpropertysuggestval_id": {"name": "ODSCPropertySuggestVAL_ID", "type": "TFloatField"}, "odscpropertysuggestinsurancesum": {"name": "ODSCPropertySuggestINSURANCESUM", "type": "TFloatField"}, "cpsuggestsource": {"name": "CPSuggestSource", "type": "TDataSource"}, "pins_cproperty": {"name": "PINS_CPROPERTY", "type": "TOraclePackage"}, "opcommon": {"name": "OPCOMMON", "type": "TOraclePackage"}, "asearch": {"name": "ASearch", "type": "TAction"}, "toolbutton8": {"name": "ToolButton8", "type": "TToolButton"}, "odscpropertyname": {"name": "ODSCPropertyNAME", "type": "TStringField"}, "odscpropertybegin_date": {"name": "ODSCPropertyBEGIN_DATE", "type": "TDateTimeField"}, "odscpropertyend_date": {"name": "ODSCPropertyEND_DATE", "type": "TDateTimeField"}, "plgblank": {"name": "plgBlank", "type": "TPlgModalContainer"}, "cpropertyexporter": {"name": "CPropertyExporter", "type": "TINSWordExporter"}, "plgsuggest": {"name": "plgSuggest", "type": "TPlgModalContainer"}, "policycontainer": {"name": "policyContainer", "type": "TPlgModalContainer"}, "odscpropertycid": {"name": "ODSCPropertyCID", "type": "TFloatField"}, "odscpropertyfranshiz": {"name": "ODSCPropertyFRANSHIZ", "type": "TFloatField"}, "odscpropertyinssumm": {"name": "ODSCPropertyINSSUMM", "type": "TFloatField"}, "odscpropertyammount": {"name": "ODSCPropertyAMMOUNT", "type": "TFloatField"}, "odscpropertycost": {"name": "ODSCPropertyCOST", "type": "TFloatField"}, "odscpropertyid": {"name": "ODSCPropertyID", "type": "TFloatField"}, "odscpropertyriskid": {"name": "ODSCPropertyRISKID", "type": "TFloatField"}, "odscpropertyfulldescription": {"name": "ODSCPropertyFULLDESCRIPTION", "type": "TStringField"}, "odscpropertylocationobj": {"name": "ODSCPropertyLOCATIONOBJ", "type": "TStringField"}, "odscpropertyyearsinbusiness": {"name": "ODSCPropertyYEARSINBUSINESS", "type": "TStringField"}, "odscpropertybuildingusage": {"name": "ODSCPropertyBUILDINGUSAGE", "type": "TStringField"}, "odscpropertyconstyear": {"name": "ODSCPropertyCONSTYEAR", "type": "TDateTimeField"}, "odscpropertyfloorsnum": {"name": "ODSCPropertyFLOORSNUM", "type": "TIntegerField"}, "odscpropertywallsm": {"name": "ODSCPropertyWALLSM", "type": "TStringField"}, "odscpropertyceilingsm": {"name": "ODSCPropertyCEILINGSM", "type": "TStringField"}, "odscpropertyroofm": {"name": "ODSCPropertyROOFM", "type": "TStringField"}, "odscpropertyarea": {"name": "ODSCPropertyAREA", "type": "TFloatField"}, "odscpropertyapplicantspace": {"name": "ODSCPropertyAPPLICANTSPACE", "type": "TFloatField"}, "odscpropertyearthquakedetails": {"name": "ODSCPropertyEARTHQUAKEDETAILS", "type": "TStringField"}, "odscpropertyflamable": {"name": "ODSCPropertyFLAMABLE", "type": "TStringField"}, "odscpropertysurroindingdetails": {"name": "ODSCPropertySURROINDINGDETAILS", "type": "TStringField"}, "odscpropertysitueted": {"name": "ODSCPropertySITUETED", "type": "TStringField"}, "odscpropertyguard": {"name": "ODSCPropertyGUARD", "type": "TStringField"}, "odscpropertyalarm": {"name": "ODSCPropertyALARM", "type": "TStringField"}, "odscpropertylocks": {"name": "ODSCPropertyLOCKS", "type": "TStringField"}, "odscpropertysecuritylocks": {"name": "ODSCPropertySECURITYLOCKS", "type": "TStringField"}, "odscpropertybars": {"name": "ODSCPropertyBARS", "type": "TStringField"}, "odscpropertyother": {"name": "ODSCPropertyOTHER", "type": "TStringField"}, "odscpropertysettings": {"name": "ODSCPropertySETTINGS", "type": "TStringField"}, "odscpropertyrepair": {"name": "ODSCPropertyREPAIR", "type": "TStringField"}, "odscpropertyheated": {"name": "ODSCPropertyHEATED", "type": "TStringField"}, "odscpropertyannual": {"name": "ODSCPropertyANNUAL", "type": "TFloatField"}, "odscpropertywages": {"name": "ODSCPropertyWAGES", "type": "TFloatField"}, "odscpropertyrent": {"name": "ODSCPropertyRENT", "type": "TFloatField"}, "odscpropertyemployes": {"name": "ODSCPropertyEMPLOYES", "type": "TFloatField"}, "odscpropertyexpirity": {"name": "ODSCPropertyEXPIRITY", "type": "TDateTimeField"}, "odscpropertylosshistory": {"name": "ODSCPropertyLOSSHISTORY", "type": "TStringField"}, "odscpropertyrenewal": {"name": "ODSCPropertyRENEWAL", "type": "TStringField"}, "odscpropertythirdparty": {"name": "ODSCPropertyTHIRDPARTY", "type": "TStringField"}, "odscpropertyotherinf": {"name": "ODSCPropertyOTHERINF", "type": "TStringField"}, "odscpropertyindeminity": {"name": "ODSCPropertyINDEMINITY", "type": "TStringField"}, "odscpropertyvaluetype": {"name": "ODSCPropertyVALUETYPE", "type": "TStringField"}, "odscpropertybuildings": {"name": "ODSCPropertyBUILDINGS", "type": "TFloatField"}, "odscpropertycontent": {"name": "ODSCPropertyCONTENT", "type": "TFloatField"}, "odscpropertyequipment": {"name": "ODSCPropertyEQUIPMENT", "type": "TFloatField"}, "odscpropertyglass": {"name": "ODSCPropertyGLASS", "type": "TFloatField"}, "odscpropertycash": {"name": "ODSCPropertyCASH", "type": "TFloatField"}, "odscpropertywarehouse": {"name": "ODSCPropertyWAREHOUSE", "type": "TFloatField"}, "odscpropertystock": {"name": "ODSCPropertySTOCK", "type": "TFloatField"}, "odscpropertyproducts": {"name": "ODSCPropertyPRODUCTS", "type": "TFloatField"}, "odscpropertyworkinprogress": {"name": "ODSCPropertyWORKINPROGRESS", "type": "TFloatField"}, "odscpropertyrawmaterials": {"name": "ODSCPropertyRAWMATERIALS", "type": "TFloatField"}, "odscpropertyclose_prefix": {"name": "ODSCPropertyCLOSE_PREFIX", "type": "TIntegerField"}, "odscpropertytypeid": {"name": "ODSCPropertyTYPEID", "type": "TIntegerField"}, "odscpropertyprofitid": {"name": "ODSCPropertyPROFITID", "type": "TFloatField"}, "odscpropertyagentid": {"name": "ODSCPropertyAGENTID", "type": "TFloatField"}, "odscpropertymonth_id": {"name": "ODSCPropertyMONTH_ID", "type": "TFloatField"}, "odscpropertybank_id": {"name": "ODSCPropertyBANK_ID", "type": "TFloatField"}, "odscpropertytariff": {"name": "ODSCPropertyTARIFF", "type": "TFloatField"}, "odscpropertyinsured_obj": {"name": "ODSCPropertyINSURED_OBJ", "type": "TStringField"}, "id": {"name": "id", "type": "Integer"}, "fparams": {"name": "FParams", "type": "TStrings"}, "fownerhandle": {"name": "FOwnerHandle", "type": "Integer"}, "fevents": {"name": "FEvents", "type": "IMainCPropertyEvents"}}, {"params": {"name": "Params", "read": "Get_Params", "write": "Set_Params"}});
  U.init(async () => {
    U.var_("frmMainCProperty", null, "TfrmMainCProperty");
  });
  U.method("TfrmMainCProperty", "DefinePropertyPages", async function DefinePropertyPages(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"definepropertypage": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["definepropertypage"]);
  return L0.result;
}, {"params": ["DefinePropertyPage"], "kind": "procedure", "ptypes": ["TDefinePropertyPage"]});
  U.method("TfrmMainCProperty", "EventSinkChanged", async function EventSinkChanged(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"eventsink": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["eventsink"]);
  await $.set(C, "FEvents", L0["eventsink"]);
  return L0.result;
}, {"params": ["EventSink"], "kind": "procedure", "ptypes": ["IUnknown"]});
  U.method("TfrmMainCProperty", "Initialize", async function Initialize(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: undefined};
  await $.inherited(Self, "TfrmMainCProperty", "Initialize", null, arguments);
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
  U.method("TfrmMainCProperty", "Get_Active", async function Get_Active(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: false};
  L0["result"] = (await $.v(C, "Active"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TfrmMainCProperty", "Get_AutoScroll", async function Get_AutoScroll(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: false};
  L0["result"] = (await $.v(C, "AutoScroll"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TfrmMainCProperty", "Get_AutoSize", async function Get_AutoSize(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: false};
  L0["result"] = (await $.v(C, "AutoSize"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TfrmMainCProperty", "Get_AxBorderStyle", async function Get_AxBorderStyle(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: null};
  L0["result"] = (await $.call(C, "Ord", [(await $.v(C, "AxBorderStyle"))]));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TfrmMainCProperty", "Get_Caption", async function Get_Caption(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: ''};
  L0["result"] = (await $.call(C, "WideString", [(await $.v(C, "Caption"))]));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TfrmMainCProperty", "Get_Color", async function Get_Color(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: null};
  L0["result"] = (await $.call(C, "OLE_COLOR", [(await $.v(C, "Color"))]));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TfrmMainCProperty", "Get_Cursor", async function Get_Cursor(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: 0};
  L0["result"] = (await $.call(C, "Smallint", [(await $.v(C, "Cursor"))]));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TfrmMainCProperty", "Get_DoubleBuffered", async function Get_DoubleBuffered(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: false};
  L0["result"] = (await $.v(C, "DoubleBuffered"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TfrmMainCProperty", "Get_DropTarget", async function Get_DropTarget(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: false};
  L0["result"] = (await $.v(C, "DropTarget"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TfrmMainCProperty", "Get_Enabled", async function Get_Enabled(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: false};
  L0["result"] = (await $.v(C, "Enabled"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TfrmMainCProperty", "Get_Font", async function Get_Font(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: null};
  await $.stmt((await $.call(C, "GetOleFont", [(await $.v(C, "Font")), L0["result"]])));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TfrmMainCProperty", "Get_HelpFile", async function Get_HelpFile(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: ''};
  L0["result"] = (await $.call(C, "WideString", [(await $.v(C, "HelpFile"))]));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TfrmMainCProperty", "Get_KeyPreview", async function Get_KeyPreview(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: false};
  L0["result"] = (await $.v(C, "KeyPreview"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TfrmMainCProperty", "Get_PixelsPerInch", async function Get_PixelsPerInch(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: 0};
  L0["result"] = (await $.v(C, "PixelsPerInch"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TfrmMainCProperty", "Get_PrintScale", async function Get_PrintScale(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: null};
  L0["result"] = (await $.call(C, "Ord", [(await $.v(C, "PrintScale"))]));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TfrmMainCProperty", "Get_Scaled", async function Get_Scaled(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: false};
  L0["result"] = (await $.v(C, "Scaled"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TfrmMainCProperty", "Get_Visible", async function Get_Visible(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: false};
  L0["result"] = (await $.v(C, "Visible"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TfrmMainCProperty", "Get_VisibleDockClientCount", async function Get_VisibleDockClientCount(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: 0};
  L0["result"] = (await $.v(C, "VisibleDockClientCount"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TfrmMainCProperty", "_Set_Font", async function _Set_Font(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.stmt((await $.call(C, "SetOleFont", [(await $.v(C, "Font")), L0["value"]])));
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["IFontDisp"]});
  U.method("TfrmMainCProperty", "ActivateEvent", async function ActivateEvent(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.ne((await $.v(C, "FEvents")), null))) {
    await $.mcall((await $.v(C, "FEvents")), "OnActivate", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TfrmMainCProperty", "ClickEvent", async function ClickEvent(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.ne((await $.v(C, "FEvents")), null))) {
    await $.mcall((await $.v(C, "FEvents")), "OnClick", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TfrmMainCProperty", "CreateEvent", async function CreateEvent(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.ne((await $.v(C, "FEvents")), null))) {
    await $.mcall((await $.v(C, "FEvents")), "OnCreate", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TfrmMainCProperty", "DblClickEvent", async function DblClickEvent(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.ne((await $.v(C, "FEvents")), null))) {
    await $.mcall((await $.v(C, "FEvents")), "OnDblClick", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TfrmMainCProperty", "DeactivateEvent", async function DeactivateEvent(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.ne((await $.v(C, "FEvents")), null))) {
    await $.mcall((await $.v(C, "FEvents")), "OnDeactivate", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TfrmMainCProperty", "DestroyEvent", async function DestroyEvent(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.ne((await $.v(C, "FEvents")), null))) {
    await $.mcall((await $.v(C, "FEvents")), "OnDestroy", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TfrmMainCProperty", "KeyPressEvent", async function KeyPressEvent(Self, p0, p1) {
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
  U.method("TfrmMainCProperty", "PaintEvent", async function PaintEvent(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.ne((await $.v(C, "FEvents")), null))) {
    await $.mcall((await $.v(C, "FEvents")), "OnPaint", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TfrmMainCProperty", "Set_AutoScroll", async function Set_AutoScroll(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "AutoScroll", L0["value"]);
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["WordBool"]});
  U.method("TfrmMainCProperty", "Set_AutoSize", async function Set_AutoSize(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "AutoSize", L0["value"]);
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["WordBool"]});
  U.method("TfrmMainCProperty", "Set_AxBorderStyle", async function Set_AxBorderStyle(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "AxBorderStyle", (await $.call(C, "TActiveFormBorderStyle", [L0["value"]])));
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["TxActiveFormBorderStyle"]});
  U.method("TfrmMainCProperty", "Set_Caption", async function Set_Caption(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "Caption", (await $.call(C, "TCaption", [L0["value"]])));
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["WideString"]});
  U.method("TfrmMainCProperty", "Set_Color", async function Set_Color(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "Color", (await $.call(C, "TColor", [L0["value"]])));
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["OLE_COLOR"]});
  U.method("TfrmMainCProperty", "Set_Cursor", async function Set_Cursor(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "Cursor", (await $.call(C, "TCursor", [L0["value"]])));
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["Smallint"]});
  U.method("TfrmMainCProperty", "Set_DoubleBuffered", async function Set_DoubleBuffered(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "DoubleBuffered", L0["value"]);
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["WordBool"]});
  U.method("TfrmMainCProperty", "Set_DropTarget", async function Set_DropTarget(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "DropTarget", L0["value"]);
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["WordBool"]});
  U.method("TfrmMainCProperty", "Set_Enabled", async function Set_Enabled(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "Enabled", L0["value"]);
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["WordBool"]});
  U.method("TfrmMainCProperty", "Set_Font", async function Set_Font(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.asRef(p0), result: undefined};
  await $.stmt((await $.call(C, "SetOleFont", [(await $.v(C, "Font")), (await L0["value"].get())])));
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["IFontDisp"]});
  U.method("TfrmMainCProperty", "Set_HelpFile", async function Set_HelpFile(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "HelpFile", (await $.call(C, "String", [L0["value"]])));
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["WideString"]});
  U.method("TfrmMainCProperty", "Set_KeyPreview", async function Set_KeyPreview(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "KeyPreview", L0["value"]);
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["WordBool"]});
  U.method("TfrmMainCProperty", "Set_PixelsPerInch", async function Set_PixelsPerInch(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "PixelsPerInch", L0["value"]);
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["Integer"]});
  U.method("TfrmMainCProperty", "Set_PrintScale", async function Set_PrintScale(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "PrintScale", (await $.call(C, "TPrintScale", [L0["value"]])));
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["TxPrintScale"]});
  U.method("TfrmMainCProperty", "Set_Scaled", async function Set_Scaled(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "Scaled", L0["value"]);
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["WordBool"]});
  U.method("TfrmMainCProperty", "Set_Visible", async function Set_Visible(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "Visible", L0["value"]);
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["WordBool"]});
  U.method("TfrmMainCProperty", "Get_Owner", async function Get_Owner(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: 0};
  L0["result"] = (await $.v(C, "handle"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TfrmMainCProperty", "Set_Owner", async function Set_Owner(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"val": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["val"]);
  if ($.truthy($.gt(L0["val"], 0))) {
    await $.set(C, "FOwnerHandle", L0["val"]);
  }
  return L0.result;
}, {"params": ["val"], "kind": "procedure", "ptypes": ["Integer"]});
  U.method("TfrmMainCProperty", "Get_Params", async function Get_Params(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"name": $.copyArg(p0), result: null};
  await $.fixArgs(L0, ["name"]);
  L0["result"] = (await $.idx((await $.mv((await $.v(C, "FParams")), "Values")), [L0["name"]]));
  return L0.result;
}, {"params": ["Name"], "kind": "function", "ptypes": ["WideString"]});
  U.method("TfrmMainCProperty", "Set_Params", async function Set_Params(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"name": $.copyArg(p0), "value": $.copyArg(p1), result: undefined};
  await $.fixArgs(L0, ["name", "value"]);
  { const $t1 = await $.iset((await $.mv((await $.v(C, "FParams")), "Values")), [L0["name"]], L0["value"]); if ($t1 !== undefined) { await $.mset((await $.v(C, "FParams")), "Values", $t1); } }
  return L0.result;
}, {"params": ["Name", "Value"], "kind": "procedure", "ptypes": ["WideString", "OleVariant"]});
  U.method("TfrmMainCProperty", "InstanceInitialize", async function InstanceInitialize(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: null};
  L0["result"] = (await $.v(C, "S_OK"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TfrmMainCProperty", "Cleanup", async function Cleanup(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: null};
  L0["result"] = (await $.v(C, "S_OK"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TfrmMainCProperty", "UIObjectActivate", async function UIObjectActivate(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: null};
  L0["result"] = (await $.v(C, "S_OK"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TfrmMainCProperty", "QueryDeactivate", async function QueryDeactivate(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: null};
  L0["result"] = (await $.v(C, "S_OK"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TfrmMainCProperty", "UIObjectDeactivate", async function UIObjectDeactivate(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: null};
  L0["result"] = (await $.v(C, "S_OK"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TfrmMainCProperty", "SaveState", async function SaveState(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: null};
  L0["result"] = (await $.v(C, "S_OK"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TfrmMainCProperty", "Get_Height", async function Get_Height(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: 0};
  L0["result"] = (await $.v(C, "Height"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TfrmMainCProperty", "Get_Width", async function Get_Width(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: 0};
  L0["result"] = (await $.v(C, "Width"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TfrmMainCProperty", "ActiveFormCreate", async function ActiveFormCreate(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.set(C, "frmMainCProperty", Self);
  await $.set(C, "FParams", (await $.mv((await $.v(C, "TStringList")), "Create")));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TfrmMainCProperty", "AInsertExecute", async function AInsertExecute(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "p": null};
  await $.fixArgs(L0, ["sender"]);
  L0["p"] = (await $.mv((await $.v(C, "TStringList")), "Create"));
  { const $t2 = await $.iset((await $.mv(L0["p"], "Values")), ["KLI_ID"], "-1"); if ($t2 !== undefined) { await $.mset(L0["p"], "Values", $t2); } }
  { const $t3 = await $.iset((await $.mv(L0["p"], "Values")), ["Mod"], "Insert"); if ($t3 !== undefined) { await $.mset(L0["p"], "Values", $t3); } }
  { const $t4 = await $.iset((await $.mv(L0["p"], "Values")), ["SID"], "-1"); if ($t4 !== undefined) { await $.mset(L0["p"], "Values", $t4); } }
  {
    const $t5 = (await $.v(C, "plgBlank"));
    await $.stmt((await $.wcall([$t5], "ShowModal", [(await $.wcall([$t5], "StringToGuid", ["{9174F6E6-DEF4-4861-8301-61919D456EC5}"], C)), (await $.wv([$t5], "p", { get: async () => L0["p"], set: async (v) => { L0["p"] = v; }, local: true }, false))], C)));
  }
  await $.mcall(L0["p"], "Free", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TfrmMainCProperty", "AEditExecute", async function AEditExecute(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "p": null};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy((await $.mv((await $.v(C, "ODSCProperty")), "IsEmpty")))) {
    await $.stmt((await $.call(C, "ShowMessage", ["Cədvəldə məlumat yoxdur !"])));
    return L0.result;
  }
  L0["p"] = (await $.mv((await $.v(C, "TStringList")), "Create"));
  { const $t6 = await $.iset((await $.mv(L0["p"], "Values")), ["Mod"], "Edit"); if ($t6 !== undefined) { await $.mset(L0["p"], "Values", $t6); } }
  { const $t7 = await $.iset((await $.mv(L0["p"], "Values")), ["ID"], (await $.call(C, "FloatToStr", [(await $.mv((await $.v(C, "ODSCPropertyID")), "Value"))]))); if ($t7 !== undefined) { await $.mset(L0["p"], "Values", $t7); } }
  {
    const $t8 = (await $.v(C, "plgBlank"));
    await $.stmt((await $.wcall([$t8], "ShowModal", [(await $.wcall([$t8], "StringToGuid", ["{9174F6E6-DEF4-4861-8301-61919D456EC5}"], C)), (await $.wv([$t8], "p", { get: async () => L0["p"], set: async (v) => { L0["p"] = v; }, local: true }, false))], C)));
  }
  await $.mcall(L0["p"], "Free", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TfrmMainCProperty", "ADeleteExecute", async function ADeleteExecute(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "id": 0, "i": 0, "waitnextconfirm": false, "willrefresh": false};
  await $.fixArgs(L0, ["sender"]);
  L0["waitnextconfirm"] = true;
  L0["willrefresh"] = false;
  {
    const $t9 = (await $.v(C, "CPropertyGrid"));
    const $t10 = (await $.wv([$t9], "SelectedRows", C, false));
    const $t11 = (await $.wv([$t9, $t10], "ODSCProperty", C, false));
    try {
      if ($.truthy($.eq((await $.wv([$t9, $t10, $t11], "Count", C, false)), 0))) {
        await $.wset([$t9, $t10, $t11], "CurrentRowSelected", (await $.wv([$t9, $t10, $t11], "True", C, false)), C);
      }
      { const $t12 = $.sub((await $.wv([$t9, $t10, $t11], "Count", C, false)), 1);
        await $.wset([$t9, $t10, $t11], "I", 0, { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true });
        let $t13 = true;
        for (;;) {
          if (!$t13) { await $.wset([$t9, $t10, $t11], "I", $.succ((await $.wv([$t9, $t10, $t11], "I", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false)), 1), { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }); }
          $t13 = false;
          if (!($.ord((await $.wv([$t9, $t10, $t11], "I", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false))) <= $.ord($t12))) break;
          await $.stmt((await $.wcall([$t9, $t10, $t11], "GotoBookmark", [(await $.wcall([$t9, $t10, $t11], "Pointer", [(await $.idx((await $.wv([$t9, $t10, $t11], "Items", C, false)), [(await $.wv([$t9, $t10, $t11], "I", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false))]))], C))], C)));
          await $.wset([$t9, $t10, $t11], "ID", (await $.mv((await $.wcall([$t9, $t10, $t11], "FieldbyName", ["ID"], C)), "AsInteger")), { get: async () => L0["id"], set: async (v) => { L0["id"] = v; }, local: true });
          if ($.truthy((await $.wv([$t9, $t10, $t11], "WaitNextConfirm", { get: async () => L0["waitnextconfirm"], set: async (v) => { L0["waitnextconfirm"] = v; }, local: true }, false)))) {
            { const $t14 = (await $.wcall([$t9, $t10, $t11], "MessageDlg", ["Məlumatlar silinsin ?", (await $.wv([$t9, $t10, $t11], "mtConfirmation", C, false)), [(await $.wv([$t9, $t10, $t11], "mbYes", C, false)), (await $.wv([$t9, $t10, $t11], "mbNo", C, false)), (await $.wv([$t9, $t10, $t11], "mbCancel", C, false)), (await $.wv([$t9, $t10, $t11], "mbYesToAll", C, false))], 0], C));
              if ($.eq($t14, (await $.wv([$t9, $t10, $t11], "mrNo", C, false)))) {
                continue;
              }
              else if ($.eq($t14, (await $.wv([$t9, $t10, $t11], "mrCancel", C, false)))) {
                break;
              }
              else if ($.eq($t14, (await $.wv([$t9, $t10, $t11], "mrYesToAll", C, false)))) {
                if ($.truthy($.eq((await $.wcall([$t9, $t10, $t11], "MessageDlg", [(await $.wcall([$t9, $t10, $t11], "Format", ["%d  sayda məlumat silinsin?", [$.sub((await $.wv([$t9, $t10, $t11], "Count", C, false)), (await $.wv([$t9, $t10, $t11], "I", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false)))]], C)), (await $.wv([$t9, $t10, $t11], "mtConfirmation", C, false)), [(await $.wv([$t9, $t10, $t11], "mbYes", C, false)), (await $.wv([$t9, $t10, $t11], "mbCancel", C, false))], 0], C)), (await $.wv([$t9, $t10, $t11], "mrYes", C, false))))) {
                  await $.wset([$t9, $t10, $t11], "WaitNextConfirm", (await $.wv([$t9, $t10, $t11], "False", C, false)), { get: async () => L0["waitnextconfirm"], set: async (v) => { L0["waitnextconfirm"] = v; }, local: true });
                } else {
                  continue;
                }
              }
            }
          }
          await $.mcall((await $.wv([$t9, $t10, $t11], "Application", C, false)), "ProcessMessages", []);
          await $.stmt((await $.wcall([$t9, $t10, $t11], "DeleteInfo", [(await $.wv([$t9, $t10, $t11], "id", { get: async () => L0["id"], set: async (v) => { L0["id"] = v; }, local: true }, false))], C)));
          await $.wset([$t9, $t10, $t11], "WillRefresh", (await $.wv([$t9, $t10, $t11], "True", C, false)), { get: async () => L0["willrefresh"], set: async (v) => { L0["willrefresh"] = v; }, local: true });
          await $.tick();
        }
      }
      await $.stmt((await $.wcall([$t9, $t10, $t11], "ARefreshExecute", [(await $.wv([$t9, $t10, $t11], "sender", { get: async () => L0["sender"], set: async (v) => { L0["sender"] = v; }, local: true }, false))], C)));
    } finally {
      if ($.truthy((await $.wv([$t9, $t10, $t11], "WillRefresh", { get: async () => L0["willrefresh"], set: async (v) => { L0["willrefresh"] = v; }, local: true }, false)))) {
        await $.stmt((await $.wcall([$t9, $t10, $t11], "ARefreshExecute", [(await $.wv([$t9, $t10, $t11], "Sender", { get: async () => L0["sender"], set: async (v) => { L0["sender"] = v; }, local: true }, false))], C)));
      }
    }
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TfrmMainCProperty", "ARefreshExecute", async function ARefreshExecute(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "id": 0};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t15 = (await $.v(C, "ODSCProperty"));
    await $.wset([$t15], "ID", (await $.mv((await $.wcall([$t15], "FieldByName", ["ID"], C)), "AsInteger")), { get: async () => L0["id"], set: async (v) => { L0["id"] = v; }, local: true });
    await $.stmt($.wcall([$t15], "CloseAll", [], C));
    await $.stmt($.wcall([$t15], "Open", [], C));
    await $.stmt((await $.wcall([$t15], "Locate", ["ID", (await $.wv([$t15], "ID", { get: async () => L0["id"], set: async (v) => { L0["id"] = v; }, local: true }, false)), []], C)));
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TfrmMainCProperty", "DeleteInfo", async function DeleteInfo(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"id": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["id"]);
  try {
    await $.stmt((await $.mcall((await $.v(C, "OPCommon")), "CallBooleanFunction", ["del_ins", [L0["id"], 5]])));
  } catch ($t16) {
    $.rethrowControl($t16);
    if ($.excIs($t16, "EOracleError")) {
      L0["e"] = $.exc($t16);
      { const $t17 = (await $.mv(L0["e"], "ErrorCode"));
        if ($.eq($t17, 20001)) {
          await $.stmt((await $.call(C, "ShowMessage", ["Asılı hesablarda qalıq sıfırdan fərqlidir!"])));
        }
        else if ($.eq($t17, 20002)) {
          await $.stmt((await $.call(C, "ShowMessage", ["Əvvəlcə asılı hesabları bağlayın!"])));
        }
      }
    }
    else { throw $t16; }
  }
  return L0.result;
}, {"params": ["id"], "kind": "procedure", "ptypes": ["longint"]});
  U.method("TfrmMainCProperty", "N2DrawItem", async function N2DrawItem(Self, p0, p1, p2, p3) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "acanvas": $.copyArg(p1), "arect": $.copyArg(p2), "selected": $.copyArg(p3), result: undefined, "linebottom": 0, "stext": '', "bar": null};
  await $.fixArgs(L0, ["sender", "acanvas", "arect", "selected"]);
  {
    const $t18 = L0["acanvas"];
    const $t19 = (await $.wv([$t18], "Sender", { get: async () => L0["sender"], set: async (v) => { L0["sender"] = v; }, local: true }, false));
    {
      const $t20 = (await $.wv([$t18, $t19], "Font", C, false));
      await $.wset([$t18, $t19, $t20], "Name", "Azl Sans Serif", C);
      await $.wset([$t18, $t19, $t20], "Charset", (await $.wv([$t18, $t19, $t20], "RUSSIAN_CHARSET", C, false)), C);
      if ($.truthy((await $.wv([$t18, $t19, $t20], "Default", C, false)))) {
        await $.wset([$t18, $t19, $t20], "Style", [(await $.wv([$t18, $t19, $t20], "fsBold", C, false))], C);
      }
    }
    if ($.truthy($.eq((await $.wv([$t18, $t19], "Caption", C, false)), "-"))) {
      await $.mset((await $.wv([$t18, $t19], "Pen", C, false)), "Color", (await $.wv([$t18, $t19], "clBlack", C, false)));
      await $.wset([$t18, $t19], "LineBottom", $.sub(($.add((await $.mv((await $.wv([$t18, $t19], "ARect", { get: async () => L0["arect"], set: async (v) => { L0["arect"] = v; }, local: true }, false)), "Top")), $.idiv(($.sub((await $.mv((await $.wv([$t18, $t19], "ARect", { get: async () => L0["arect"], set: async (v) => { L0["arect"] = v; }, local: true }, false)), "Bottom")), (await $.mv((await $.wv([$t18, $t19], "ARect", { get: async () => L0["arect"], set: async (v) => { L0["arect"] = v; }, local: true }, false)), "Top")))), 2))), 1), { get: async () => L0["linebottom"], set: async (v) => { L0["linebottom"] = v; }, local: true });
      await $.stmt((await $.wcall([$t18, $t19], "MoveTo", [(await $.mv((await $.wv([$t18, $t19], "ARect", { get: async () => L0["arect"], set: async (v) => { L0["arect"] = v; }, local: true }, false)), "Left")), (await $.wv([$t18, $t19], "LineBottom", { get: async () => L0["linebottom"], set: async (v) => { L0["linebottom"] = v; }, local: true }, false))], C)));
      await $.stmt((await $.wcall([$t18, $t19], "LineTo", [(await $.mv((await $.wv([$t18, $t19], "ARect", { get: async () => L0["arect"], set: async (v) => { L0["arect"] = v; }, local: true }, false)), "Right")), (await $.wv([$t18, $t19], "LineBottom", { get: async () => L0["linebottom"], set: async (v) => { L0["linebottom"] = v; }, local: true }, false))], C)));
      await $.stmt((await $.wcall([$t18, $t19], "inc", [$.ref(async () => (await $.wv([$t18, $t19], "LineBottom", { get: async () => L0["linebottom"], set: async (v) => { L0["linebottom"] = v; }, local: true }, false)), async ($t21) => { await $.wset([$t18, $t19], "LineBottom", $t21, { get: async () => L0["linebottom"], set: async (v) => { L0["linebottom"] = v; }, local: true }); })], C)));
      await $.mset((await $.wv([$t18, $t19], "Pen", C, false)), "Color", (await $.wv([$t18, $t19], "clWhite", C, false)));
      await $.stmt((await $.wcall([$t18, $t19], "MoveTo", [(await $.mv((await $.wv([$t18, $t19], "ARect", { get: async () => L0["arect"], set: async (v) => { L0["arect"] = v; }, local: true }, false)), "Left")), (await $.wv([$t18, $t19], "LineBottom", { get: async () => L0["linebottom"], set: async (v) => { L0["linebottom"] = v; }, local: true }, false))], C)));
      await $.stmt((await $.wcall([$t18, $t19], "LineTo", [(await $.mv((await $.wv([$t18, $t19], "ARect", { get: async () => L0["arect"], set: async (v) => { L0["arect"] = v; }, local: true }, false)), "Right")), (await $.wv([$t18, $t19], "LineBottom", { get: async () => L0["linebottom"], set: async (v) => { L0["linebottom"] = v; }, local: true }, false))], C)));
    } else {
      if ($.truthy((await $.wv([$t18, $t19], "Selected", { get: async () => L0["selected"], set: async (v) => { L0["selected"] = v; }, local: true }, false)))) {
        await $.mset((await $.wv([$t18, $t19], "Brush", C, false)), "Color", (await $.wv([$t18, $t19], "clNavy", C, false)));
        if ($.truthy((await $.wv([$t18, $t19], "Enabled", C, false)))) {
          await $.mset((await $.wv([$t18, $t19], "Font", C, false)), "Color", (await $.wv([$t18, $t19], "clWhite", C, false)));
        } else {
          await $.mset((await $.wv([$t18, $t19], "Font", C, false)), "Color", (await $.wv([$t18, $t19], "clSilver", C, false)));
        }
      } else {
        await $.mset((await $.wv([$t18, $t19], "Brush", C, false)), "Color", (await $.wv([$t18, $t19], "clBtnFace", C, false)));
        if ($.truthy((await $.wv([$t18, $t19], "Enabled", C, false)))) {
          await $.mset((await $.wv([$t18, $t19], "Font", C, false)), "Color", (await $.wv([$t18, $t19], "clBlack", C, false)));
        } else {
          await $.mset((await $.wv([$t18, $t19], "Font", C, false)), "Color", (await $.wv([$t18, $t19], "clGrayText", C, false)));
        }
      }
      await $.wset([$t18, $t19], "Bar", (await $.wv([$t18, $t19], "ARect", { get: async () => L0["arect"], set: async (v) => { L0["arect"] = v; }, local: true }, false)), { get: async () => L0["bar"], set: async (v) => { L0["bar"] = v; }, local: true });
      await $.stmt((await $.wcall([$t18, $t19], "Inc", [$.ref(async () => (await $.mv((await $.wv([$t18, $t19], "Bar", { get: async () => L0["bar"], set: async (v) => { L0["bar"] = v; }, local: true }, false)), "Left")), async ($t22) => { await $.mset((await $.wv([$t18, $t19], "Bar", { get: async () => L0["bar"], set: async (v) => { L0["bar"] = v; }, local: true }, false)), "Left", $t22); }), 22], C)));
      await $.stmt((await $.wcall([$t18, $t19], "FillRect", [(await $.wv([$t18, $t19], "Bar", { get: async () => L0["bar"], set: async (v) => { L0["bar"] = v; }, local: true }, false))], C)));
      await $.stmt((await $.wcall([$t18, $t19], "TextOut", [$.add((await $.mv((await $.wv([$t18, $t19], "ARect", { get: async () => L0["arect"], set: async (v) => { L0["arect"] = v; }, local: true }, false)), "Left")), 22), $.add((await $.mv((await $.wv([$t18, $t19], "ARect", { get: async () => L0["arect"], set: async (v) => { L0["arect"] = v; }, local: true }, false)), "Top")), 1), (await $.wv([$t18, $t19], "Caption", C, false))], C)));
    }
    await $.wset([$t18, $t19], "SText", (await $.wcall([$t18, $t19], "ShortCutToText", [(await $.wv([$t18, $t19], "ShortCut", C, false))], C)), { get: async () => L0["stext"], set: async (v) => { L0["stext"] = v; }, local: true });
    await $.stmt((await $.wcall([$t18, $t19], "TextOut", [$.sub($.sub((await $.mv((await $.wv([$t18, $t19], "ARect", { get: async () => L0["arect"], set: async (v) => { L0["arect"] = v; }, local: true }, false)), "Right")), (await $.wcall([$t18, $t19], "TextWidth", [(await $.wv([$t18, $t19], "SText", { get: async () => L0["stext"], set: async (v) => { L0["stext"] = v; }, local: true }, false))], C))), 2), $.add((await $.mv((await $.wv([$t18, $t19], "ARect", { get: async () => L0["arect"], set: async (v) => { L0["arect"] = v; }, local: true }, false)), "Top")), 1), (await $.wv([$t18, $t19], "SText", { get: async () => L0["stext"], set: async (v) => { L0["stext"] = v; }, local: true }, false))], C)));
    if ($.truthy($.ne((await $.wv([$t18, $t19], "ImageIndex", C, false)), (-(1))))) {
      {
        const $t23 = (await $.wv([$t18, $t19], "GetParentMenu", C, false));
        if ($.truthy((await $.wcall([$t18, $t19, $t23], "Assigned", [(await $.wv([$t18, $t19, $t23], "Images", C, false))], C)))) {
          if ($.truthy((await $.wv([$t18, $t19, $t23], "Checked", C, false)))) {
            await $.mset((await $.wv([$t18, $t19, $t23], "Bar", { get: async () => L0["bar"], set: async (v) => { L0["bar"] = v; }, local: true }, false)), "Left", $.add((await $.mv((await $.wv([$t18, $t19, $t23], "ARect", { get: async () => L0["arect"], set: async (v) => { L0["arect"] = v; }, local: true }, false)), "Left")), 1));
            await $.mset((await $.wv([$t18, $t19, $t23], "Bar", { get: async () => L0["bar"], set: async (v) => { L0["bar"] = v; }, local: true }, false)), "Right", $.add((await $.mv((await $.wv([$t18, $t19, $t23], "Bar", { get: async () => L0["bar"], set: async (v) => { L0["bar"] = v; }, local: true }, false)), "Left")), 16));
            await $.mset((await $.wv([$t18, $t19, $t23], "Bar", { get: async () => L0["bar"], set: async (v) => { L0["bar"] = v; }, local: true }, false)), "Top", $.add((await $.mv((await $.wv([$t18, $t19, $t23], "ARect", { get: async () => L0["arect"], set: async (v) => { L0["arect"] = v; }, local: true }, false)), "Top")), 1));
            await $.mset((await $.wv([$t18, $t19, $t23], "Bar", { get: async () => L0["bar"], set: async (v) => { L0["bar"] = v; }, local: true }, false)), "Bottom", $.add((await $.mv((await $.wv([$t18, $t19, $t23], "Bar", { get: async () => L0["bar"], set: async (v) => { L0["bar"] = v; }, local: true }, false)), "Top")), 16));
            await $.mset((await $.mv((await $.wv([$t18, $t19, $t23], "ACanvas", { get: async () => L0["acanvas"], set: async (v) => { L0["acanvas"] = v; }, local: true }, false)), "Brush")), "Color", (await $.wv([$t18, $t19, $t23], "clBtnShadow", C, false)));
            await $.stmt((await $.mcall((await $.wv([$t18, $t19, $t23], "ACanvas", { get: async () => L0["acanvas"], set: async (v) => { L0["acanvas"] = v; }, local: true }, false)), "FrameRect", [(await $.wv([$t18, $t19, $t23], "Bar", { get: async () => L0["bar"], set: async (v) => { L0["bar"] = v; }, local: true }, false))])));
            await $.stmt((await $.wcall([$t18, $t19, $t23], "Inc", [$.ref(async () => (await $.mv((await $.wv([$t18, $t19, $t23], "Bar", { get: async () => L0["bar"], set: async (v) => { L0["bar"] = v; }, local: true }, false)), "Left")), async ($t24) => { await $.mset((await $.wv([$t18, $t19, $t23], "Bar", { get: async () => L0["bar"], set: async (v) => { L0["bar"] = v; }, local: true }, false)), "Left", $t24); }), 2], C)));
            await $.stmt((await $.wcall([$t18, $t19, $t23], "Inc", [$.ref(async () => (await $.mv((await $.wv([$t18, $t19, $t23], "Bar", { get: async () => L0["bar"], set: async (v) => { L0["bar"] = v; }, local: true }, false)), "Right")), async ($t25) => { await $.mset((await $.wv([$t18, $t19, $t23], "Bar", { get: async () => L0["bar"], set: async (v) => { L0["bar"] = v; }, local: true }, false)), "Right", $t25); }), 2], C)));
            await $.stmt((await $.wcall([$t18, $t19, $t23], "Inc", [$.ref(async () => (await $.mv((await $.wv([$t18, $t19, $t23], "Bar", { get: async () => L0["bar"], set: async (v) => { L0["bar"] = v; }, local: true }, false)), "Top")), async ($t26) => { await $.mset((await $.wv([$t18, $t19, $t23], "Bar", { get: async () => L0["bar"], set: async (v) => { L0["bar"] = v; }, local: true }, false)), "Top", $t26); }), 2], C)));
            await $.stmt((await $.wcall([$t18, $t19, $t23], "Inc", [$.ref(async () => (await $.mv((await $.wv([$t18, $t19, $t23], "Bar", { get: async () => L0["bar"], set: async (v) => { L0["bar"] = v; }, local: true }, false)), "Bottom")), async ($t27) => { await $.mset((await $.wv([$t18, $t19, $t23], "Bar", { get: async () => L0["bar"], set: async (v) => { L0["bar"] = v; }, local: true }, false)), "Bottom", $t27); }), 2], C)));
            await $.mset((await $.mv((await $.wv([$t18, $t19, $t23], "ACanvas", { get: async () => L0["acanvas"], set: async (v) => { L0["acanvas"] = v; }, local: true }, false)), "Brush")), "Color", (await $.wv([$t18, $t19, $t23], "clBtnHighlight", C, false)));
            await $.stmt((await $.mcall((await $.wv([$t18, $t19, $t23], "ACanvas", { get: async () => L0["acanvas"], set: async (v) => { L0["acanvas"] = v; }, local: true }, false)), "FrameRect", [(await $.wv([$t18, $t19, $t23], "Bar", { get: async () => L0["bar"], set: async (v) => { L0["bar"] = v; }, local: true }, false))])));
            await $.stmt((await $.wcall([$t18, $t19, $t23], "Dec", [$.ref(async () => (await $.mv((await $.wv([$t18, $t19, $t23], "Bar", { get: async () => L0["bar"], set: async (v) => { L0["bar"] = v; }, local: true }, false)), "Left")), async ($t28) => { await $.mset((await $.wv([$t18, $t19, $t23], "Bar", { get: async () => L0["bar"], set: async (v) => { L0["bar"] = v; }, local: true }, false)), "Left", $t28); }), 1], C)));
            await $.stmt((await $.wcall([$t18, $t19, $t23], "Dec", [$.ref(async () => (await $.mv((await $.wv([$t18, $t19, $t23], "Bar", { get: async () => L0["bar"], set: async (v) => { L0["bar"] = v; }, local: true }, false)), "Right")), async ($t29) => { await $.mset((await $.wv([$t18, $t19, $t23], "Bar", { get: async () => L0["bar"], set: async (v) => { L0["bar"] = v; }, local: true }, false)), "Right", $t29); }), 1], C)));
            await $.stmt((await $.wcall([$t18, $t19, $t23], "Dec", [$.ref(async () => (await $.mv((await $.wv([$t18, $t19, $t23], "Bar", { get: async () => L0["bar"], set: async (v) => { L0["bar"] = v; }, local: true }, false)), "Top")), async ($t30) => { await $.mset((await $.wv([$t18, $t19, $t23], "Bar", { get: async () => L0["bar"], set: async (v) => { L0["bar"] = v; }, local: true }, false)), "Top", $t30); }), 1], C)));
            await $.stmt((await $.wcall([$t18, $t19, $t23], "Dec", [$.ref(async () => (await $.mv((await $.wv([$t18, $t19, $t23], "Bar", { get: async () => L0["bar"], set: async (v) => { L0["bar"] = v; }, local: true }, false)), "Bottom")), async ($t31) => { await $.mset((await $.wv([$t18, $t19, $t23], "Bar", { get: async () => L0["bar"], set: async (v) => { L0["bar"] = v; }, local: true }, false)), "Bottom", $t31); }), 1], C)));
            if ($.truthy((await $.wv([$t18, $t19, $t23], "Selected", { get: async () => L0["selected"], set: async (v) => { L0["selected"] = v; }, local: true }, false)))) {
              await $.mset((await $.mv((await $.wv([$t18, $t19, $t23], "ACanvas", { get: async () => L0["acanvas"], set: async (v) => { L0["acanvas"] = v; }, local: true }, false)), "Brush")), "Color", (await $.wv([$t18, $t19, $t23], "clBtnFace", C, false)));
            } else {
              await $.mset((await $.mv((await $.wv([$t18, $t19, $t23], "ACanvas", { get: async () => L0["acanvas"], set: async (v) => { L0["acanvas"] = v; }, local: true }, false)), "Brush")), "Color", (await $.wv([$t18, $t19, $t23], "clBtnHighlight", C, false)));
            }
            await $.stmt((await $.mcall((await $.wv([$t18, $t19, $t23], "ACanvas", { get: async () => L0["acanvas"], set: async (v) => { L0["acanvas"] = v; }, local: true }, false)), "FillRect", [(await $.wv([$t18, $t19, $t23], "Bar", { get: async () => L0["bar"], set: async (v) => { L0["bar"] = v; }, local: true }, false))])));
          }
          await $.stmt((await $.mcall((await $.wv([$t18, $t19, $t23], "Images", C, false)), "Draw", [(await $.wv([$t18, $t19, $t23], "ACanvas", { get: async () => L0["acanvas"], set: async (v) => { L0["acanvas"] = v; }, local: true }, false)), (await $.mv((await $.wv([$t18, $t19, $t23], "ARect", { get: async () => L0["arect"], set: async (v) => { L0["arect"] = v; }, local: true }, false)), "Left")), (await $.mv((await $.wv([$t18, $t19, $t23], "ARect", { get: async () => L0["arect"], set: async (v) => { L0["arect"] = v; }, local: true }, false)), "Top")), (await $.wv([$t18, $t19, $t23], "ImageIndex", C, false)), (await $.wv([$t18, $t19, $t23], "Enabled", C, false))])));
        }
      }
    }
  }
  return L0.result;
}, {"params": ["Sender", "ACanvas", "ARect", "Selected"], "kind": "procedure", "ptypes": ["TObject", "TCanvas", "TRect", "Boolean"]});
  U.method("TfrmMainCProperty", "FullRefresh", async function FullRefresh(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"datasetname": $.copyArg(p0), result: undefined, "i": 0};
  await $.fixArgs(L0, ["datasetname"]);
  L0["c_err_message"] = " Table or View in Dataset \"%s\" does not exist! ";
  { const $t32 = $.sub((await $.v(C, "ComponentCount")), 1);
    L0["i"] = 0;
    let $t33 = true;
    for (;;) {
      if (!$t33) { L0["i"] = $.succ(L0["i"], 1); }
      $t33 = false;
      if (!($.ord(L0["i"]) <= $.ord($t32))) break;
      if ($.truthy((await $.and_(($.is_((await $.idx((await $.v(C, "Components")), [L0["i"]])), "TOracleDataSet")), async () => ($.ne((await $.mv((await $.idx((await $.v(C, "Components")), [L0["i"]])), "Name")), L0["datasetname"])))))) {
        try {
          await $.mcall((await $.idx((await $.v(C, "Components")), [L0["i"]])), "Close", []);
          await $.mcall((await $.idx((await $.v(C, "Components")), [L0["i"]])), "Open", []);
        } catch ($t34) {
          $.rethrowControl($t34);
          $.handled($t34);
          throw $.raise((await $.mcall((await $.v(C, "Exception")), "Create", [(await $.call(C, "Format", [L0["c_err_message"], [(await $.mv(((await $.idx((await $.v(C, "Components")), [L0["i"]]))), "Name"))]]))])));
        }
      }
      await $.tick();
    }
  }
  return L0.result;
}, {"params": ["DataSetName"], "kind": "procedure", "ptypes": ["String"]});
  U.method("TfrmMainCProperty", "AFullRefreshExecute", async function AFullRefreshExecute(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.stmt((await $.call(C, "FullRefresh", [""])));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TfrmMainCProperty", "AReportExecute", async function AReportExecute(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy((await $.mv((await $.v(C, "ODSCProperty")), "IsEmpty")))) {
    await $.stmt((await $.call(C, "ShowMessage", ["Cədvəldə məlumat yoxdur !"])));
    return L0.result;
  }
  await $.mcall((await $.v(C, "ODSContracts")), "Close", []);
  await $.stmt((await $.mcall((await $.v(C, "ODSContracts")), "SetVariable", ["blankid", (await $.mv((await $.v(C, "ODSCPropertyID")), "Value"))])));
  await $.mcall((await $.v(C, "ODSContracts")), "Open", []);
  await $.stmt((await $.mcall((await $.v(C, "ODSCustomers")), "Locate", ["id", (await $.mv((await $.v(C, "ODSContractsKLI_ID")), "Value")), []])));
  await $.stmt((await $.mcall((await $.v(C, "ODSRisks")), "Locate", ["id", (await $.mv((await $.v(C, "ODSCPropertyRiskID")), "Value")), []])));
  try {
    {
      const $t35 = (await $.v(C, "CPropertyExporter"));
      await $.wset([$t35], "FileName", $.add((await $.wcall([$t35], "ExtractFilePath", [(await $.mv((await $.wv([$t35], "Application", C, false)), "ExeName"))], C)), "\\CPropertyppl.doc"), C);
      await $.stmt((await $.wcall([$t35], "Open", [(await $.wv([$t35], "False", C, false))], C)));
      await $.stmt((await $.wcall([$t35], "SetBookmark", ["Insured", (await $.mv((await $.wv([$t35], "ODSCustomersName", C, false)), "value")), (await $.wv([$t35], "false", C, false)), (await $.wv([$t35], "false", C, false)), (await $.wv([$t35], "False", C, false)), (await $.wv([$t35], "false", C, false)), 8, "Arial AzLat", (await $.wv([$t35], "False", C, false))], C)));
      await $.stmt((await $.wcall([$t35], "SetBookmark", ["AInsured", (await $.mv((await $.wv([$t35], "ODSCustomersAddress", C, false)), "value")), (await $.wv([$t35], "false", C, false)), (await $.wv([$t35], "false", C, false)), (await $.wv([$t35], "False", C, false)), (await $.wv([$t35], "false", C, false)), 8, "Arial AzLat", (await $.wv([$t35], "False", C, false))], C)));
      await $.stmt((await $.wcall([$t35], "SetBookmark", ["TInsured", (await $.mv((await $.wv([$t35], "ODSCustomersMobilePhone", C, false)), "value")), (await $.wv([$t35], "false", C, false)), (await $.wv([$t35], "false", C, false)), (await $.wv([$t35], "False", C, false)), (await $.wv([$t35], "false", C, false)), 8, "Arial AzLat", (await $.wv([$t35], "False", C, false))], C)));
      await $.stmt((await $.wcall([$t35], "SetBookmark", ["FInsured", (await $.mv((await $.wv([$t35], "ODSCustomersFax", C, false)), "value")), (await $.wv([$t35], "false", C, false)), (await $.wv([$t35], "false", C, false)), (await $.wv([$t35], "False", C, false)), (await $.wv([$t35], "false", C, false)), 8, "Arial AzLat", (await $.wv([$t35], "False", C, false))], C)));
      await $.stmt((await $.wcall([$t35], "SetBookmark", ["RPeriod", $.add($.add((await $.wcall([$t35], "DateToStr", [(await $.mv((await $.wv([$t35], "ODSContractsBegin_Date", C, false)), "value"))], C)), " - "), (await $.wcall([$t35], "DateToStr", [(await $.mv((await $.wv([$t35], "ODSContractsEnd_Date", C, false)), "value"))], C))), (await $.wv([$t35], "false", C, false)), (await $.wv([$t35], "false", C, false)), (await $.wv([$t35], "False", C, false)), (await $.wv([$t35], "false", C, false)), 8, "Arial AzLat", (await $.wv([$t35], "False", C, false))], C)));
      await $.stmt((await $.wcall([$t35], "SetBookmark", ["Beneficiary", (await $.mv((await $.wv([$t35], "ODSBeneficiaryName", C, false)), "value")), (await $.wv([$t35], "True", C, false)), (await $.wv([$t35], "false", C, false)), (await $.wv([$t35], "False", C, false)), (await $.wv([$t35], "false", C, false)), 10, "Arial AzLat", (await $.wv([$t35], "False", C, false))], C)));
      await $.stmt((await $.wcall([$t35], "SetBookmark", ["BAddress", (await $.mv((await $.wv([$t35], "ODSBeneficiaryAddress", C, false)), "value")), (await $.wv([$t35], "True", C, false)), (await $.wv([$t35], "false", C, false)), (await $.wv([$t35], "False", C, false)), (await $.wv([$t35], "false", C, false)), 10, "Arial AzLat", (await $.wv([$t35], "False", C, false))], C)));
      await $.stmt((await $.wcall([$t35], "SetBookmark", ["BTel", (await $.mv((await $.wv([$t35], "ODSBeneficiaryPhone", C, false)), "value")), (await $.wv([$t35], "True", C, false)), (await $.wv([$t35], "false", C, false)), (await $.wv([$t35], "False", C, false)), (await $.wv([$t35], "false", C, false)), 10, "Arial AzLat", (await $.wv([$t35], "False", C, false))], C)));
      await $.stmt((await $.wcall([$t35], "SetBookmark", ["BBank", (await $.mv((await $.wv([$t35], "ODSBeneficiaryBanking_details", C, false)), "value")), (await $.wv([$t35], "True", C, false)), (await $.wv([$t35], "false", C, false)), (await $.wv([$t35], "False", C, false)), (await $.wv([$t35], "false", C, false)), 10, "Arial AzLat", (await $.wv([$t35], "False", C, false))], C)));
      await $.stmt((await $.wcall([$t35], "SetBookmark", ["FullDesc", (await $.mv((await $.wv([$t35], "ODSCPropertyFullDescription", C, false)), "value")), (await $.wv([$t35], "false", C, false)), (await $.wv([$t35], "false", C, false)), (await $.wv([$t35], "False", C, false)), (await $.wv([$t35], "false", C, false)), 8, "Arial AzLat", (await $.wv([$t35], "False", C, false))], C)));
      await $.stmt((await $.wcall([$t35], "SetBookmark", ["Location", (await $.mv((await $.wv([$t35], "ODSCPropertyLocationObj", C, false)), "value")), (await $.wv([$t35], "false", C, false)), (await $.wv([$t35], "false", C, false)), (await $.wv([$t35], "False", C, false)), (await $.wv([$t35], "false", C, false)), 8, "Arial AzLat", (await $.wv([$t35], "False", C, false))], C)));
      await $.stmt((await $.wcall([$t35], "SetBookmark", ["Yearsinb", (await $.mv((await $.wv([$t35], "ODSCPropertyYEARSINBUSINESS", C, false)), "value")), (await $.wv([$t35], "false", C, false)), (await $.wv([$t35], "false", C, false)), (await $.wv([$t35], "False", C, false)), (await $.wv([$t35], "false", C, false)), 8, "Arial AzLat", (await $.wv([$t35], "False", C, false))], C)));
      await $.stmt((await $.wcall([$t35], "SetBookmark", ["CPerson", (await $.mv((await $.wv([$t35], "ODSCustomersContactPerson", C, false)), "value")), (await $.wv([$t35], "false", C, false)), (await $.wv([$t35], "false", C, false)), (await $.wv([$t35], "False", C, false)), (await $.wv([$t35], "false", C, false)), 8, "Arial AzLat", (await $.wv([$t35], "False", C, false))], C)));
      await $.stmt((await $.wcall([$t35], "SetBookmark", ["TCPerson", (await $.mv((await $.wv([$t35], "ODSCustomersContactPersonPhone", C, false)), "value")), (await $.wv([$t35], "false", C, false)), (await $.wv([$t35], "false", C, false)), (await $.wv([$t35], "False", C, false)), (await $.wv([$t35], "false", C, false)), 8, "Arial AzLat", (await $.wv([$t35], "False", C, false))], C)));
      await $.stmt((await $.wcall([$t35], "SetBookmark", ["BUsage", (await $.mv((await $.wv([$t35], "ODSCPropertyBuildingusage", C, false)), "value")), (await $.wv([$t35], "false", C, false)), (await $.wv([$t35], "false", C, false)), (await $.wv([$t35], "False", C, false)), (await $.wv([$t35], "false", C, false)), 8, "Arial AzLat", (await $.wv([$t35], "False", C, false))], C)));
      await $.stmt((await $.wcall([$t35], "SetBookmark", ["YearConst", (await $.wcall([$t35], "DateToStr", [(await $.mv((await $.wv([$t35], "ODSCPropertyconstyear", C, false)), "value"))], C)), (await $.wv([$t35], "false", C, false)), (await $.wv([$t35], "false", C, false)), (await $.wv([$t35], "False", C, false)), (await $.wv([$t35], "false", C, false)), 8, "Arial AzLat", (await $.wv([$t35], "False", C, false))], C)));
      await $.stmt((await $.wcall([$t35], "SetBookmark", ["FloorsNum", (await $.wcall([$t35], "IntToStr", [(await $.mv((await $.wv([$t35], "ODSCPropertyFloorsNum", C, false)), "value"))], C)), (await $.wv([$t35], "false", C, false)), (await $.wv([$t35], "false", C, false)), (await $.wv([$t35], "False", C, false)), (await $.wv([$t35], "false", C, false)), 8, "Arial AzLat", (await $.wv([$t35], "False", C, false))], C)));
      await $.stmt((await $.wcall([$t35], "SetBookmark", ["WallsM", (await $.mv((await $.wv([$t35], "ODSCPropertyWallsM", C, false)), "value")), (await $.wv([$t35], "false", C, false)), (await $.wv([$t35], "false", C, false)), (await $.wv([$t35], "False", C, false)), (await $.wv([$t35], "false", C, false)), 8, "Arial AzLat", (await $.wv([$t35], "False", C, false))], C)));
      await $.stmt((await $.wcall([$t35], "SetBookmark", ["CeilingsM", (await $.mv((await $.wv([$t35], "ODSCPropertyCeilingsM", C, false)), "value")), (await $.wv([$t35], "false", C, false)), (await $.wv([$t35], "false", C, false)), (await $.wv([$t35], "False", C, false)), (await $.wv([$t35], "false", C, false)), 8, "Arial AzLat", (await $.wv([$t35], "False", C, false))], C)));
      await $.stmt((await $.wcall([$t35], "SetBookmark", ["RoofM", (await $.mv((await $.wv([$t35], "ODSCPropertyRoofM", C, false)), "value")), (await $.wv([$t35], "false", C, false)), (await $.wv([$t35], "false", C, false)), (await $.wv([$t35], "False", C, false)), (await $.wv([$t35], "false", C, false)), 8, "Arial AzLat", (await $.wv([$t35], "False", C, false))], C)));
      await $.stmt((await $.wcall([$t35], "SetBookmark", ["Area", (await $.wcall([$t35], "FloatToStr", [(await $.mv((await $.wv([$t35], "ODSCPropertyArea", C, false)), "value"))], C)), (await $.wv([$t35], "false", C, false)), (await $.wv([$t35], "false", C, false)), (await $.wv([$t35], "False", C, false)), (await $.wv([$t35], "false", C, false)), 8, "Arial AzLat", (await $.wv([$t35], "False", C, false))], C)));
      await $.stmt((await $.wcall([$t35], "SetBookmark", ["AppArea", (await $.wcall([$t35], "FloatToStr", [(await $.mv((await $.wv([$t35], "ODSCPropertyApplicantSpace", C, false)), "value"))], C)), (await $.wv([$t35], "false", C, false)), (await $.wv([$t35], "false", C, false)), (await $.wv([$t35], "False", C, false)), (await $.wv([$t35], "false", C, false)), 8, "Arial AzLat", (await $.wv([$t35], "False", C, false))], C)));
      await $.stmt((await $.wcall([$t35], "SetBookmark", ["Earthquake", (await $.mv((await $.wv([$t35], "ODSCPropertyEARTHQUAKEDETAILS", C, false)), "value")), (await $.wv([$t35], "false", C, false)), (await $.wv([$t35], "false", C, false)), (await $.wv([$t35], "False", C, false)), (await $.wv([$t35], "false", C, false)), 8, "Arial AzLat", (await $.wv([$t35], "False", C, false))], C)));
      await $.stmt((await $.wcall([$t35], "SetBookmark", ["Flamable", (await $.mv((await $.wv([$t35], "ODSCPropertyFlamable", C, false)), "value")), (await $.wv([$t35], "false", C, false)), (await $.wv([$t35], "false", C, false)), (await $.wv([$t35], "False", C, false)), (await $.wv([$t35], "false", C, false)), 8, "Arial AzLat", (await $.wv([$t35], "False", C, false))], C)));
      await $.stmt((await $.wcall([$t35], "SetBookmark", ["Surroinding", (await $.mv((await $.wv([$t35], "ODSCPropertySURROINDINGDETAILS", C, false)), "value")), (await $.wv([$t35], "false", C, false)), (await $.wv([$t35], "false", C, false)), (await $.wv([$t35], "False", C, false)), (await $.wv([$t35], "false", C, false)), 8, "Arial AzLat", (await $.wv([$t35], "False", C, false))], C)));
      await $.stmt((await $.wcall([$t35], "SetBookmark", ["Situeted", (await $.mv((await $.wv([$t35], "ODSCPropertySitueted", C, false)), "value")), (await $.wv([$t35], "false", C, false)), (await $.wv([$t35], "false", C, false)), (await $.wv([$t35], "False", C, false)), (await $.wv([$t35], "false", C, false)), 8, "Arial AzLat", (await $.wv([$t35], "False", C, false))], C)));
      await $.stmt((await $.wcall([$t35], "SetBookmark", ["Issecure", (await $.mv((await $.wv([$t35], "ODSCPropertyGuard", C, false)), "value")), (await $.wv([$t35], "false", C, false)), (await $.wv([$t35], "false", C, false)), (await $.wv([$t35], "False", C, false)), (await $.wv([$t35], "false", C, false)), 8, "Arial AzLat", (await $.wv([$t35], "False", C, false))], C)));
      await $.stmt((await $.wcall([$t35], "SetBookmark", ["Alarm", (await $.mv((await $.wv([$t35], "ODSCPropertyAlarm", C, false)), "value")), (await $.wv([$t35], "false", C, false)), (await $.wv([$t35], "false", C, false)), (await $.wv([$t35], "False", C, false)), (await $.wv([$t35], "false", C, false)), 8, "Arial AzLat", (await $.wv([$t35], "False", C, false))], C)));
      await $.stmt((await $.wcall([$t35], "SetBookmark", ["Locks", (await $.mv((await $.wv([$t35], "ODSCPropertyLocks", C, false)), "value")), (await $.wv([$t35], "false", C, false)), (await $.wv([$t35], "false", C, false)), (await $.wv([$t35], "False", C, false)), (await $.wv([$t35], "false", C, false)), 8, "Arial AzLat", (await $.wv([$t35], "False", C, false))], C)));
      await $.stmt((await $.wcall([$t35], "SetBookmark", ["SLocks", (await $.mv((await $.wv([$t35], "ODSCPropertySecurityLocks", C, false)), "value")), (await $.wv([$t35], "false", C, false)), (await $.wv([$t35], "false", C, false)), (await $.wv([$t35], "False", C, false)), (await $.wv([$t35], "false", C, false)), 8, "Arial AzLat", (await $.wv([$t35], "False", C, false))], C)));
      await $.stmt((await $.wcall([$t35], "SetBookmark", ["Bars", (await $.mv((await $.wv([$t35], "ODSCPropertyBars", C, false)), "value")), (await $.wv([$t35], "false", C, false)), (await $.wv([$t35], "false", C, false)), (await $.wv([$t35], "False", C, false)), (await $.wv([$t35], "false", C, false)), 8, "Arial AzLat", (await $.wv([$t35], "False", C, false))], C)));
      await $.stmt((await $.wcall([$t35], "SetBookmark", ["Other", (await $.mv((await $.wv([$t35], "ODSCPropertyOther", C, false)), "value")), (await $.wv([$t35], "false", C, false)), (await $.wv([$t35], "false", C, false)), (await $.wv([$t35], "False", C, false)), (await $.wv([$t35], "false", C, false)), 8, "Arial AzLat", (await $.wv([$t35], "False", C, false))], C)));
      await $.stmt((await $.wcall([$t35], "SetBookmark", ["Settings", (await $.mv((await $.wv([$t35], "ODSCPropertySettings", C, false)), "value")), (await $.wv([$t35], "false", C, false)), (await $.wv([$t35], "false", C, false)), (await $.wv([$t35], "False", C, false)), (await $.wv([$t35], "false", C, false)), 8, "Arial AzLat", (await $.wv([$t35], "False", C, false))], C)));
      await $.stmt((await $.wcall([$t35], "SetBookmark", ["Repair", (await $.mv((await $.wv([$t35], "ODSCPropertyRepair", C, false)), "value")), (await $.wv([$t35], "false", C, false)), (await $.wv([$t35], "false", C, false)), (await $.wv([$t35], "False", C, false)), (await $.wv([$t35], "false", C, false)), 8, "Arial AzLat", (await $.wv([$t35], "False", C, false))], C)));
      await $.stmt((await $.wcall([$t35], "SetBookmark", ["RepairDetail", (await $.mv((await $.wv([$t35], "ODSCPropertyRepair", C, false)), "value")), (await $.wv([$t35], "false", C, false)), (await $.wv([$t35], "false", C, false)), (await $.wv([$t35], "False", C, false)), (await $.wv([$t35], "false", C, false)), 8, "Arial AzLat", (await $.wv([$t35], "False", C, false))], C)));
      await $.stmt((await $.wcall([$t35], "SetBookmark", ["Heated", (await $.mv((await $.wv([$t35], "ODSCPropertyHeated", C, false)), "value")), (await $.wv([$t35], "false", C, false)), (await $.wv([$t35], "false", C, false)), (await $.wv([$t35], "False", C, false)), (await $.wv([$t35], "false", C, false)), 8, "Arial AzLat", (await $.wv([$t35], "False", C, false))], C)));
      await $.stmt((await $.wcall([$t35], "SetBookmark", ["Risks", (await $.mv((await $.wv([$t35], "ODSRisksName", C, false)), "value")), (await $.wv([$t35], "false", C, false)), (await $.wv([$t35], "false", C, false)), (await $.wv([$t35], "False", C, false)), (await $.wv([$t35], "false", C, false)), 8, "Arial AzLat", (await $.wv([$t35], "False", C, false))], C)));
      await $.stmt((await $.wcall([$t35], "SetBookmark", ["ValueType", (await $.mv((await $.wv([$t35], "ODSCPropertyValueType", C, false)), "value")), (await $.wv([$t35], "false", C, false)), (await $.wv([$t35], "false", C, false)), (await $.wv([$t35], "False", C, false)), (await $.wv([$t35], "false", C, false)), 8, "Arial AzLat", (await $.wv([$t35], "False", C, false))], C)));
      await $.stmt((await $.wcall([$t35], "SetBookmark", ["Buildings", (await $.wcall([$t35], "floatToStr", [(await $.mv((await $.wv([$t35], "ODSCPropertyBuildings", C, false)), "value"))], C)), (await $.wv([$t35], "false", C, false)), (await $.wv([$t35], "false", C, false)), (await $.wv([$t35], "False", C, false)), (await $.wv([$t35], "false", C, false)), 8, "Arial AzLat", (await $.wv([$t35], "False", C, false))], C)));
      await $.stmt((await $.wcall([$t35], "SetBookmark", ["Contents", (await $.wcall([$t35], "floatToStr", [(await $.mv((await $.wv([$t35], "ODSCPropertyContent", C, false)), "value"))], C)), (await $.wv([$t35], "false", C, false)), (await $.wv([$t35], "false", C, false)), (await $.wv([$t35], "False", C, false)), (await $.wv([$t35], "false", C, false)), 8, "Arial AzLat", (await $.wv([$t35], "False", C, false))], C)));
      await $.stmt((await $.wcall([$t35], "SetBookmark", ["Equipments", (await $.wcall([$t35], "floatToStr", [(await $.mv((await $.wv([$t35], "ODSCPropertyEquipment", C, false)), "value"))], C)), (await $.wv([$t35], "false", C, false)), (await $.wv([$t35], "false", C, false)), (await $.wv([$t35], "False", C, false)), (await $.wv([$t35], "false", C, false)), 8, "Arial AzLat", (await $.wv([$t35], "False", C, false))], C)));
      await $.stmt((await $.wcall([$t35], "SetBookmark", ["Glass", (await $.wcall([$t35], "floatToStr", [(await $.mv((await $.wv([$t35], "ODSCPropertyGlass", C, false)), "value"))], C)), (await $.wv([$t35], "false", C, false)), (await $.wv([$t35], "false", C, false)), (await $.wv([$t35], "False", C, false)), (await $.wv([$t35], "false", C, false)), 8, "Arial AzLat", (await $.wv([$t35], "False", C, false))], C)));
      await $.stmt((await $.wcall([$t35], "SetBookmark", ["Cash", (await $.wcall([$t35], "floatToStr", [(await $.mv((await $.wv([$t35], "ODSCPropertyCash", C, false)), "value"))], C)), (await $.wv([$t35], "false", C, false)), (await $.wv([$t35], "false", C, false)), (await $.wv([$t35], "False", C, false)), (await $.wv([$t35], "false", C, false)), 8, "Arial AzLat", (await $.wv([$t35], "False", C, false))], C)));
      await $.stmt((await $.wcall([$t35], "SetBookmark", ["Warehouse", (await $.wcall([$t35], "floatToStr", [(await $.mv((await $.wv([$t35], "ODSCPropertyWarehouse", C, false)), "value"))], C)), (await $.wv([$t35], "false", C, false)), (await $.wv([$t35], "false", C, false)), (await $.wv([$t35], "False", C, false)), (await $.wv([$t35], "false", C, false)), 8, "Arial AzLat", (await $.wv([$t35], "False", C, false))], C)));
      await $.stmt((await $.wcall([$t35], "SetBookmark", ["Stock", (await $.wcall([$t35], "floatToStr", [(await $.mv((await $.wv([$t35], "ODSCPropertyStock", C, false)), "value"))], C)), (await $.wv([$t35], "false", C, false)), (await $.wv([$t35], "false", C, false)), (await $.wv([$t35], "False", C, false)), (await $.wv([$t35], "false", C, false)), 8, "Arial AzLat", (await $.wv([$t35], "False", C, false))], C)));
      await $.stmt((await $.wcall([$t35], "SetBookmark", ["Products", (await $.wcall([$t35], "floatToStr", [(await $.mv((await $.wv([$t35], "ODSCPropertyProducts", C, false)), "value"))], C)), (await $.wv([$t35], "false", C, false)), (await $.wv([$t35], "false", C, false)), (await $.wv([$t35], "False", C, false)), (await $.wv([$t35], "false", C, false)), 8, "Arial AzLat", (await $.wv([$t35], "False", C, false))], C)));
      await $.stmt((await $.wcall([$t35], "SetBookmark", ["WProqress", (await $.wcall([$t35], "floatToStr", [(await $.mv((await $.wv([$t35], "ODSCPropertyWorkinprogress", C, false)), "value"))], C)), (await $.wv([$t35], "false", C, false)), (await $.wv([$t35], "false", C, false)), (await $.wv([$t35], "False", C, false)), (await $.wv([$t35], "false", C, false)), 8, "Arial AzLat", (await $.wv([$t35], "False", C, false))], C)));
      await $.stmt((await $.wcall([$t35], "SetBookmark", ["Raw", (await $.wcall([$t35], "floatToStr", [(await $.mv((await $.wv([$t35], "ODSCPropertyRawmaterials", C, false)), "value"))], C)), (await $.wv([$t35], "false", C, false)), (await $.wv([$t35], "false", C, false)), (await $.wv([$t35], "False", C, false)), (await $.wv([$t35], "false", C, false)), 8, "Arial AzLat", (await $.wv([$t35], "False", C, false))], C)));
      await $.stmt((await $.wcall([$t35], "SetBookmark", ["Annual", (await $.wcall([$t35], "floatToStr", [(await $.mv((await $.wv([$t35], "ODSCPropertyAnnual", C, false)), "value"))], C)), (await $.wv([$t35], "false", C, false)), (await $.wv([$t35], "false", C, false)), (await $.wv([$t35], "False", C, false)), (await $.wv([$t35], "false", C, false)), 8, "Arial AzLat", (await $.wv([$t35], "False", C, false))], C)));
      await $.stmt((await $.wcall([$t35], "SetBookmark", ["Wages", (await $.wcall([$t35], "floatToStr", [(await $.mv((await $.wv([$t35], "ODSCPropertyWages", C, false)), "value"))], C)), (await $.wv([$t35], "false", C, false)), (await $.wv([$t35], "false", C, false)), (await $.wv([$t35], "False", C, false)), (await $.wv([$t35], "false", C, false)), 8, "Arial AzLat", (await $.wv([$t35], "False", C, false))], C)));
      await $.stmt((await $.wcall([$t35], "SetBookmark", ["Rent", (await $.wcall([$t35], "floatToStr", [(await $.mv((await $.wv([$t35], "ODSCPropertyRent", C, false)), "value"))], C)), (await $.wv([$t35], "false", C, false)), (await $.wv([$t35], "false", C, false)), (await $.wv([$t35], "False", C, false)), (await $.wv([$t35], "false", C, false)), 8, "Arial AzLat", (await $.wv([$t35], "False", C, false))], C)));
      await $.stmt((await $.wcall([$t35], "SetBookmark", ["Employes", (await $.wcall([$t35], "floatToStr", [(await $.mv((await $.wv([$t35], "ODSCPropertyEmployes", C, false)), "value"))], C)), (await $.wv([$t35], "false", C, false)), (await $.wv([$t35], "false", C, false)), (await $.wv([$t35], "False", C, false)), (await $.wv([$t35], "false", C, false)), 8, "Arial AzLat", (await $.wv([$t35], "False", C, false))], C)));
      await $.stmt((await $.wcall([$t35], "SetBookmark", ["Indeminity", (await $.mv((await $.wv([$t35], "ODSCPropertyIndeminity", C, false)), "value")), (await $.wv([$t35], "false", C, false)), (await $.wv([$t35], "false", C, false)), (await $.wv([$t35], "False", C, false)), (await $.wv([$t35], "false", C, false)), 8, "Arial AzLat", (await $.wv([$t35], "False", C, false))], C)));
      await $.stmt((await $.wcall([$t35], "SetBookmark", ["Expirity", (await $.wcall([$t35], "DateToStr", [(await $.mv((await $.wv([$t35], "ODSCPropertyExpirity", C, false)), "value"))], C)), (await $.wv([$t35], "false", C, false)), (await $.wv([$t35], "false", C, false)), (await $.wv([$t35], "False", C, false)), (await $.wv([$t35], "false", C, false)), 8, "Arial AzLat", (await $.wv([$t35], "False", C, false))], C)));
      await $.stmt((await $.wcall([$t35], "SetBookmark", ["LHistory", (await $.mv((await $.wv([$t35], "ODSCPropertyLossHistory", C, false)), "value")), (await $.wv([$t35], "false", C, false)), (await $.wv([$t35], "false", C, false)), (await $.wv([$t35], "False", C, false)), (await $.wv([$t35], "false", C, false)), 8, "Arial AzLat", (await $.wv([$t35], "False", C, false))], C)));
      await $.stmt((await $.wcall([$t35], "SetBookmark", ["OtherInf", (await $.mv((await $.wv([$t35], "ODSCPropertyRenewal", C, false)), "value")), (await $.wv([$t35], "false", C, false)), (await $.wv([$t35], "false", C, false)), (await $.wv([$t35], "False", C, false)), (await $.wv([$t35], "false", C, false)), 8, "Arial AzLat", (await $.wv([$t35], "False", C, false))], C)));
      await $.stmt((await $.wcall([$t35], "SetBookmark", ["Thirdp", (await $.mv((await $.wv([$t35], "ODSCPropertyThirdParty", C, false)), "value")), (await $.wv([$t35], "false", C, false)), (await $.wv([$t35], "false", C, false)), (await $.wv([$t35], "False", C, false)), (await $.wv([$t35], "false", C, false)), 8, "Arial AzLat", (await $.wv([$t35], "False", C, false))], C)));
      await $.stmt((await $.wcall([$t35], "SetBookmark", ["OtherInform", (await $.mv((await $.wv([$t35], "ODSCPropertyOtherInf", C, false)), "value")), (await $.wv([$t35], "false", C, false)), (await $.wv([$t35], "false", C, false)), (await $.wv([$t35], "False", C, false)), (await $.wv([$t35], "false", C, false)), 8, "Arial AzLat", (await $.wv([$t35], "False", C, false))], C)));
    }
  } finally {
    await $.mcall((await $.v(C, "CPropertyExporter")), "Show", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TfrmMainCProperty", "ASuggestionExecute", async function ASuggestionExecute(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "p": null};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy((await $.mv((await $.v(C, "ODSCProperty")), "IsEmpty")))) {
    await $.stmt((await $.call(C, "ShowMessage", ["Əvvəlcə anket forması hazırlanmalıdır !"])));
    return L0.result;
  }
  L0["p"] = (await $.mv((await $.v(C, "TStringList")), "Create"));
  { const $t36 = await $.iset((await $.mv(L0["p"], "Values")), ["ID"], (await $.call(C, "FloatToStr", [(await $.mv((await $.v(C, "ODSCPropertyID")), "Value"))]))); if ($t36 !== undefined) { await $.mset(L0["p"], "Values", $t36); } }
  {
    const $t37 = (await $.v(C, "plgSuggest"));
    await $.stmt((await $.wcall([$t37], "ShowModal", [(await $.wcall([$t37], "StringToGuid", ["{3918AA1B-6A5D-4559-8F6E-826F4E72F309}"], C)), (await $.wv([$t37], "p", { get: async () => L0["p"], set: async (v) => { L0["p"] = v; }, local: true }, false))], C)));
  }
  await $.mcall(L0["p"], "Free", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TfrmMainCProperty", "APolicyExecute", async function APolicyExecute(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "p": null};
  await $.fixArgs(L0, ["sender"]);
  await $.mcall((await $.v(C, "ODSCPropertySuggest")), "Close", []);
  await $.stmt((await $.mcall((await $.v(C, "ODSCPropertySuggest")), "SetVariable", ["bid", (await $.mv((await $.v(C, "ODSCPropertyID")), "value"))])));
  await $.mcall((await $.v(C, "ODSCPropertySuggest")), "Open", []);
  if ($.truthy($.eq((await $.mv((await $.v(C, "ODSCPropertySuggestID")), "Value")), 0))) {
    await $.stmt((await $.call(C, "ShowMessage", ["Təklifnamə hazır deyil ! Əvvəlcə təklifnamə hazırlanmalıdır !"])));
    return L0.result;
  }
  L0["p"] = (await $.mv((await $.v(C, "TStringList")), "Create"));
  { const $t38 = await $.iset((await $.mv(L0["p"], "Values")), ["ID"], (await $.call(C, "FloatToStr", [(await $.mv((await $.v(C, "ODSCPropertyId")), "value"))]))); if ($t38 !== undefined) { await $.mset(L0["p"], "Values", $t38); } }
  {
    const $t39 = (await $.v(C, "PolicyContainer"));
    await $.stmt((await $.wcall([$t39], "ShowModal", [(await $.wcall([$t39], "StringToGuid", ["{0F2A35A4-7A65-4085-BED1-BDCBC55C5836}"], C)), (await $.wv([$t39], "p", { get: async () => L0["p"], set: async (v) => { L0["p"] = v; }, local: true }, false))], C)));
  }
  await $.mcall(L0["p"], "Free", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TfrmMainCProperty", "CPropertyGridTitleClick", async function CPropertyGridTitleClick(Self, p0) {
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
  {
    const $t40 = (await $.v(C, "ODSCProperty"));
    await $.mset((await $.wv([$t40], "Screen", C, false)), "Cursor", (await $.wv([$t40], "crSQLWait", C, false)));
    await $.stmt((await $.wcall([$t40], "SetVariable", ["title", (await $.wv([$t40], "TitleName", { get: async () => L0["titlename"], set: async (v) => { L0["titlename"] = v; }, local: true }, false))], C)));
    await $.stmt($.wcall([$t40], "Refresh", [], C));
    await $.mset((await $.wv([$t40], "Screen", C, false)), "Cursor", (await $.wv([$t40], "crDefault", C, false)));
  }
  return L0.result;
}, {"params": ["Column"], "kind": "procedure", "ptypes": ["TColumn"]});
  U.method("TfrmMainCProperty", "ASearchExecute", async function ASearchExecute(Self, p0) {
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
