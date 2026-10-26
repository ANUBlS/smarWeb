// Generated from UConstructionMain.pas by pas2js — do not edit by hand; regenerate instead.
/* eslint-disable */
// @ts-nocheck

export default function define($) {
  const U = $.unit("UConstructionMain", ["Windows", "Messages", "SysUtils", "Classes", "Graphics", "Controls", "Forms", "LDialogs", "ActiveX", "AxCtrls", "PConstructionMain_TLB", "StdVcl", "ComCtrls", "ActnList", "ImgList", "ToolWin", "Grids", "DBGrids", "ExtCtrls", "PlgModalContainer", "Db", "OracleData", "Oracle", "SBPlgAx50_TLB", "Menus", "INSWordExporter", "ComObj", "ComServ", "sboapiDataModuleImpl", "USearch"]);
  const C = [U];
  U.defClass("TConstructionMain", "TActiveForm", {"panel1": {"name": "Panel1", "type": "TPanel"}, "gridconstruction": {"name": "GridConstruction", "type": "TDBGrid"}, "toolbar1": {"name": "ToolBar1", "type": "TToolBar"}, "imagelist": {"name": "ImageList", "type": "TImageList"}, "actionlist1": {"name": "ActionList1", "type": "TActionList"}, "ainsert": {"name": "AInsert", "type": "TAction"}, "aedit": {"name": "AEdit", "type": "TAction"}, "adelete": {"name": "ADelete", "type": "TAction"}, "areport": {"name": "AReport", "type": "TAction"}, "arefresh": {"name": "ARefresh", "type": "TAction"}, "toolbutton1": {"name": "ToolButton1", "type": "TToolButton"}, "toolbutton2": {"name": "ToolButton2", "type": "TToolButton"}, "toolbutton3": {"name": "ToolButton3", "type": "TToolButton"}, "toolbutton4": {"name": "ToolButton4", "type": "TToolButton"}, "toolbutton5": {"name": "ToolButton5", "type": "TToolButton"}, "plgblank": {"name": "PlgBlank", "type": "TPlgModalContainer"}, "ins_construction": {"name": "INS_CONSTRUCTION", "type": "TOracleDataSet"}, "constructiondata": {"name": "CONSTRUCTIONDATA", "type": "TDataSource"}, "pins_construction": {"name": "PINS_CONSTRUCTION", "type": "TOraclePackage"}, "risksdata": {"name": "RisksData", "type": "TDataSource"}, "afullrefresh": {"name": "AFullRefresh", "type": "TAction"}, "popupmenu2": {"name": "PopupMenu2", "type": "TPopupMenu"}, "n2": {"name": "N2", "type": "TMenuItem"}, "n3": {"name": "N3", "type": "TMenuItem"}, "n4": {"name": "N4", "type": "TMenuItem"}, "n5": {"name": "N5", "type": "TMenuItem"}, "n6": {"name": "N6", "type": "TMenuItem"}, "n9": {"name": "N9", "type": "TMenuItem"}, "n7": {"name": "N7", "type": "TMenuItem"}, "n8": {"name": "N8", "type": "TMenuItem"}, "popupmenu1": {"name": "PopupMenu1", "type": "TPopupMenu"}, "n1": {"name": "N1", "type": "TMenuItem"}, "asuggestion": {"name": "ASuggestion", "type": "TAction"}, "toolbutton6": {"name": "ToolButton6", "type": "TToolButton"}, "odsconstsuggest": {"name": "ODSCONSTSUGGEST", "type": "TOracleDataSet"}, "constsuggestdata": {"name": "CONSTSUGGESTData", "type": "TDataSource"}, "ins_constructionid": {"name": "INS_CONSTRUCTIONID", "type": "TFloatField"}, "ins_constructionkli_id": {"name": "INS_CONSTRUCTIONKLI_ID", "type": "TFloatField"}, "ins_constructionfulldescription": {"name": "INS_CONSTRUCTIONFULLDESCRIPTION", "type": "TStringField"}, "ins_constructionlocationobj": {"name": "INS_CONSTRUCTIONLOCATIONOBJ", "type": "TStringField"}, "ins_constructionyearsinbusiness": {"name": "INS_CONSTRUCTIONYEARSINBUSINESS", "type": "TStringField"}, "ins_constructionbuildingusage": {"name": "INS_CONSTRUCTIONBUILDINGUSAGE", "type": "TStringField"}, "ins_constructionconstyear": {"name": "INS_CONSTRUCTIONCONSTYEAR", "type": "TDateTimeField"}, "ins_constructionfloorsnum": {"name": "INS_CONSTRUCTIONFLOORSNUM", "type": "TIntegerField"}, "ins_constructionwallsm": {"name": "INS_CONSTRUCTIONWALLSM", "type": "TStringField"}, "ins_constructionceilingsm": {"name": "INS_CONSTRUCTIONCEILINGSM", "type": "TStringField"}, "ins_constructionroofm": {"name": "INS_CONSTRUCTIONROOFM", "type": "TStringField"}, "ins_constructionarea": {"name": "INS_CONSTRUCTIONAREA", "type": "TFloatField"}, "ins_constructionapplicantspace": {"name": "INS_CONSTRUCTIONAPPLICANTSPACE", "type": "TFloatField"}, "ins_constructionearthquakedetails": {"name": "INS_CONSTRUCTIONEARTHQUAKEDETAILS", "type": "TStringField"}, "ins_constructionflamable": {"name": "INS_CONSTRUCTIONFLAMABLE", "type": "TStringField"}, "ins_constructionsurroindingdetails": {"name": "INS_CONSTRUCTIONSURROINDINGDETAILS", "type": "TStringField"}, "ins_constructionsitueted": {"name": "INS_CONSTRUCTIONSITUETED", "type": "TStringField"}, "ins_constructionguard": {"name": "INS_CONSTRUCTIONGUARD", "type": "TStringField"}, "ins_constructionalarm": {"name": "INS_CONSTRUCTIONALARM", "type": "TStringField"}, "ins_constructionlocks": {"name": "INS_CONSTRUCTIONLOCKS", "type": "TStringField"}, "ins_constructionsecuritylocks": {"name": "INS_CONSTRUCTIONSECURITYLOCKS", "type": "TStringField"}, "ins_constructionbars": {"name": "INS_CONSTRUCTIONBARS", "type": "TStringField"}, "ins_constructionother": {"name": "INS_CONSTRUCTIONOTHER", "type": "TStringField"}, "ins_constructionsettings": {"name": "INS_CONSTRUCTIONSETTINGS", "type": "TStringField"}, "ins_constructionrepair": {"name": "INS_CONSTRUCTIONREPAIR", "type": "TStringField"}, "ins_constructionheated": {"name": "INS_CONSTRUCTIONHEATED", "type": "TStringField"}, "ins_constructionriskid": {"name": "INS_CONSTRUCTIONRISKID", "type": "TFloatField"}, "ins_constructionannual": {"name": "INS_CONSTRUCTIONANNUAL", "type": "TFloatField"}, "ins_constructionwages": {"name": "INS_CONSTRUCTIONWAGES", "type": "TFloatField"}, "ins_constructionrent": {"name": "INS_CONSTRUCTIONRENT", "type": "TFloatField"}, "ins_constructionemployes": {"name": "INS_CONSTRUCTIONEMPLOYES", "type": "TFloatField"}, "ins_constructionexpirity": {"name": "INS_CONSTRUCTIONEXPIRITY", "type": "TDateTimeField"}, "ins_constructionlosshistory": {"name": "INS_CONSTRUCTIONLOSSHISTORY", "type": "TStringField"}, "ins_constructionrenewal": {"name": "INS_CONSTRUCTIONRENEWAL", "type": "TStringField"}, "ins_constructionthirdparty": {"name": "INS_CONSTRUCTIONTHIRDPARTY", "type": "TStringField"}, "ins_constructionotherinf": {"name": "INS_CONSTRUCTIONOTHERINF", "type": "TStringField"}, "ins_constructionindeminity": {"name": "INS_CONSTRUCTIONINDEMINITY", "type": "TStringField"}, "ins_constructionvaluetype": {"name": "INS_CONSTRUCTIONVALUETYPE", "type": "TStringField"}, "ins_constructionbuildings": {"name": "INS_CONSTRUCTIONBUILDINGS", "type": "TFloatField"}, "ins_constructionengineer": {"name": "INS_CONSTRUCTIONENGINEER", "type": "TFloatField"}, "ins_constructionexdeco": {"name": "INS_CONSTRUCTIONEXDECO", "type": "TFloatField"}, "ins_constructionindeco": {"name": "INS_CONSTRUCTIONINDECO", "type": "TFloatField"}, "ins_constructionfiresys": {"name": "INS_CONSTRUCTIONFIRESYS", "type": "TFloatField"}, "ins_constructiontypeid": {"name": "INS_CONSTRUCTIONTYPEID", "type": "TIntegerField"}, "constructionexporter": {"name": "ConstructionExporter", "type": "TINSWordExporter"}, "customers": {"name": "Customers", "type": "TOracleDataSet"}, "customersid": {"name": "CustomersID", "type": "TIntegerField"}, "customersname": {"name": "CustomersNAME", "type": "TStringField"}, "customersaddress": {"name": "CustomersADDRESS", "type": "TStringField"}, "customersmobilephone": {"name": "CustomersMOBILEPHONE", "type": "TStringField"}, "customersfax": {"name": "CustomersFAX", "type": "TStringField"}, "customersdata": {"name": "CustomersData", "type": "TDataSource"}, "odsconstructionr": {"name": "ODSConstructionR", "type": "TOracleDataSet"}, "odsconstructionrname": {"name": "ODSConstructionRNAME", "type": "TStringField"}, "odsconstructionraddress": {"name": "ODSConstructionRADDRESS", "type": "TStringField"}, "odsconstructionrphone": {"name": "ODSConstructionRPHONE", "type": "TStringField"}, "odsconstructionrfax": {"name": "ODSConstructionRFAX", "type": "TStringField"}, "odsconstructionrid": {"name": "ODSConstructionRID", "type": "TFloatField"}, "odsconstructionrkli_id": {"name": "ODSConstructionRKLI_ID", "type": "TFloatField"}, "odsconstructionrfulldescription": {"name": "ODSConstructionRFULLDESCRIPTION", "type": "TStringField"}, "odsconstructionrlocationobj": {"name": "ODSConstructionRLOCATIONOBJ", "type": "TStringField"}, "odsconstructionryearsinbusiness": {"name": "ODSConstructionRYEARSINBUSINESS", "type": "TStringField"}, "odsconstructionrbuildingusage": {"name": "ODSConstructionRBUILDINGUSAGE", "type": "TStringField"}, "odsconstructionrconstyear": {"name": "ODSConstructionRCONSTYEAR", "type": "TDateTimeField"}, "odsconstructionrfloorsnum": {"name": "ODSConstructionRFLOORSNUM", "type": "TIntegerField"}, "odsconstructionrwallsm": {"name": "ODSConstructionRWALLSM", "type": "TStringField"}, "odsconstructionrceilingsm": {"name": "ODSConstructionRCEILINGSM", "type": "TStringField"}, "odsconstructionrroofm": {"name": "ODSConstructionRROOFM", "type": "TStringField"}, "odsconstructionrarea": {"name": "ODSConstructionRAREA", "type": "TFloatField"}, "odsconstructionrapplicantspace": {"name": "ODSConstructionRAPPLICANTSPACE", "type": "TFloatField"}, "odsconstructionrearthquakedetails": {"name": "ODSConstructionREARTHQUAKEDETAILS", "type": "TStringField"}, "odsconstructionrflamable": {"name": "ODSConstructionRFLAMABLE", "type": "TStringField"}, "odsconstructionrsurroindingdetails": {"name": "ODSConstructionRSURROINDINGDETAILS", "type": "TStringField"}, "odsconstructionrsitueted": {"name": "ODSConstructionRSITUETED", "type": "TStringField"}, "odsconstructionrguard": {"name": "ODSConstructionRGUARD", "type": "TStringField"}, "odsconstructionralarm": {"name": "ODSConstructionRALARM", "type": "TStringField"}, "odsconstructionrlocks": {"name": "ODSConstructionRLOCKS", "type": "TStringField"}, "odsconstructionrsecuritylocks": {"name": "ODSConstructionRSECURITYLOCKS", "type": "TStringField"}, "odsconstructionrbars": {"name": "ODSConstructionRBARS", "type": "TStringField"}, "odsconstructionrother": {"name": "ODSConstructionROTHER", "type": "TStringField"}, "odsconstructionrsettings": {"name": "ODSConstructionRSETTINGS", "type": "TStringField"}, "odsconstructionrrepair": {"name": "ODSConstructionRREPAIR", "type": "TStringField"}, "odsconstructionrheated": {"name": "ODSConstructionRHEATED", "type": "TStringField"}, "odsconstructionrriskid": {"name": "ODSConstructionRRISKID", "type": "TFloatField"}, "odsconstructionrannual": {"name": "ODSConstructionRANNUAL", "type": "TFloatField"}, "odsconstructionrwages": {"name": "ODSConstructionRWAGES", "type": "TFloatField"}, "odsconstructionrrent": {"name": "ODSConstructionRRENT", "type": "TFloatField"}, "odsconstructionremployes": {"name": "ODSConstructionREMPLOYES", "type": "TFloatField"}, "odsconstructionrexpirity": {"name": "ODSConstructionREXPIRITY", "type": "TDateTimeField"}, "odsconstructionrlosshistory": {"name": "ODSConstructionRLOSSHISTORY", "type": "TStringField"}, "odsconstructionrrenewal": {"name": "ODSConstructionRRENEWAL", "type": "TStringField"}, "odsconstructionrthirdparty": {"name": "ODSConstructionRTHIRDPARTY", "type": "TStringField"}, "odsconstructionrotherinf": {"name": "ODSConstructionROTHERINF", "type": "TStringField"}, "odsconstructionrindeminity": {"name": "ODSConstructionRINDEMINITY", "type": "TStringField"}, "odsconstructionrvaluetype": {"name": "ODSConstructionRVALUETYPE", "type": "TStringField"}, "odsconstructionrbuildings": {"name": "ODSConstructionRBUILDINGS", "type": "TFloatField"}, "odsconstructionrengineer": {"name": "ODSConstructionRENGINEER", "type": "TFloatField"}, "odsconstructionrexdeco": {"name": "ODSConstructionREXDECO", "type": "TFloatField"}, "odsconstructionrindeco": {"name": "ODSConstructionRINDECO", "type": "TFloatField"}, "odsconstructionrfiresys": {"name": "ODSConstructionRFIRESYS", "type": "TFloatField"}, "odsconstructionrtypeid": {"name": "ODSConstructionRTYPEID", "type": "TIntegerField"}, "datasource1": {"name": "DataSource1", "type": "TDataSource"}, "pins_fullmotor": {"name": "PINS_FULLMOTOR", "type": "TOraclePackage"}, "apolicy": {"name": "APolicy", "type": "TAction"}, "toolbutton7": {"name": "ToolButton7", "type": "TToolButton"}, "odsconstsuggestid": {"name": "ODSCONSTSUGGESTID", "type": "TFloatField"}, "odsconstsuggestcid": {"name": "ODSCONSTSUGGESTCID", "type": "TFloatField"}, "odsconstsuggestfrz_id": {"name": "ODSCONSTSUGGESTFRZ_ID", "type": "TFloatField"}, "odsconstsuggestcndt_id": {"name": "ODSCONSTSUGGESTCNDT_ID", "type": "TFloatField"}, "odsconstsuggestmlimit": {"name": "ODSCONSTSUGGESTMLIMIT", "type": "TFloatField"}, "odsconstsuggestrmlimit": {"name": "ODSCONSTSUGGESTRMLIMIT", "type": "TFloatField"}, "odsconstsuggestivaluemain": {"name": "ODSCONSTSUGGESTIVALUEMAIN", "type": "TFloatField"}, "odsconstsuggestrperiod": {"name": "ODSCONSTSUGGESTRPERIOD", "type": "TStringField"}, "odsconstsuggestrivalue": {"name": "ODSCONSTSUGGESTRIVALUE", "type": "TFloatField"}, "odsconstsuggestenddate": {"name": "ODSCONSTSUGGESTENDDATE", "type": "TDateTimeField"}, "odsconstsuggestrfrz_id": {"name": "ODSCONSTSUGGESTRFRZ_ID", "type": "TFloatField"}, "risks": {"name": "Risks", "type": "TOracleDataSet"}, "risksid": {"name": "RisksID", "type": "TFloatField"}, "risksname": {"name": "RisksNAME", "type": "TStringField"}, "ins_constructionprofitid": {"name": "INS_CONSTRUCTIONPROFITID", "type": "TFloatField"}, "odsconstructionrprofitid": {"name": "ODSConstructionRPROFITID", "type": "TFloatField"}, "odsbeneficiary": {"name": "ODSBeneficiary", "type": "TOracleDataSet"}, "odsbeneficiaryid": {"name": "ODSBeneficiaryID", "type": "TFloatField"}, "odsbeneficiaryname": {"name": "ODSBeneficiaryNAME", "type": "TStringField"}, "odsbeneficiaryaddress": {"name": "ODSBeneficiaryADDRESS", "type": "TStringField"}, "odsbeneficiaryphone": {"name": "ODSBeneficiaryPHONE", "type": "TStringField"}, "odsbeneficiarybanking_details": {"name": "ODSBeneficiaryBANKING_DETAILS", "type": "TStringField"}, "beneficiarysource": {"name": "BeneficiarySource", "type": "TDataSource"}, "odscontracts": {"name": "ODSContracts", "type": "TOracleDataSet"}, "odscontractsid": {"name": "ODSContractsID", "type": "TFloatField"}, "odscontractstype_id": {"name": "ODSContractsTYPE_ID", "type": "TFloatField"}, "odscontractsblank_id": {"name": "ODSContractsBLANK_ID", "type": "TFloatField"}, "odscontractssugg_id": {"name": "ODSContractsSUGG_ID", "type": "TFloatField"}, "odscontractspolicy_id": {"name": "ODSContractsPOLICY_ID", "type": "TFloatField"}, "odscontractsins_date": {"name": "ODSContractsINS_DATE", "type": "TDateTimeField"}, "odscontractsbegin_date": {"name": "ODSContractsBEGIN_DATE", "type": "TDateTimeField"}, "odscontractsend_date": {"name": "ODSContractsEND_DATE", "type": "TDateTimeField"}, "odscontractsvalute_id": {"name": "ODSContractsVALUTE_ID", "type": "TFloatField"}, "odscontractsammount": {"name": "ODSContractsAMMOUNT", "type": "TFloatField"}, "odscontractsclose_prefix": {"name": "ODSContractsCLOSE_PREFIX", "type": "TIntegerField"}, "odscontractskli_id": {"name": "ODSContractsKLI_ID", "type": "TFloatField"}, "odscontractsloanacc_id": {"name": "ODSContractsLOANACC_ID", "type": "TFloatField"}, "odscontractscurracc_id": {"name": "ODSContractsCURRACC_ID", "type": "TFloatField"}, "odscontractspolicy_num": {"name": "ODSContractsPOLICY_NUM", "type": "TStringField"}, "dscontracts": {"name": "DSContracts", "type": "TDataSource"}, "customerscontactperson": {"name": "CustomersCONTACTPERSON", "type": "TStringField"}, "customerscontactpersonphone": {"name": "CustomersCONTACTPERSONPHONE", "type": "TStringField"}, "odsconstsuggestinter_id": {"name": "ODSCONSTSUGGESTINTER_ID", "type": "TFloatField"}, "ins_constructionclose_prefix": {"name": "INS_CONSTRUCTIONCLOSE_PREFIX", "type": "TIntegerField"}, "opcommon": {"name": "OPCOMMON", "type": "TOraclePackage"}, "ins_constructionbegin_date": {"name": "INS_CONSTRUCTIONBEGIN_DATE", "type": "TDateTimeField"}, "ins_constructionend_date": {"name": "INS_CONSTRUCTIONEND_DATE", "type": "TDateTimeField"}, "asearch": {"name": "ASearch", "type": "TAction"}, "toolbutton8": {"name": "ToolButton8", "type": "TToolButton"}, "ins_constructionname": {"name": "INS_CONSTRUCTIONNAME", "type": "TStringField"}, "id": {"name": "id", "type": "Integer"}, "fparams": {"name": "FParams", "type": "TStrings"}, "fownerhandle": {"name": "FOwnerHandle", "type": "Integer"}, "fevents": {"name": "FEvents", "type": "IConstructionMainEvents"}, "resultid": {"name": "resultID", "type": "integer"}, "resultb": {"name": "resultB", "type": "boolean"}}, {"params": {"name": "Params", "read": "Get_Params", "write": "Set_Params"}});
  U.init(async () => {
    U.const("WM_ModalResult", $.add((await $.v(C, "WM_USER")), 139));
    U.var_("ConstructionMain", null, "TConstructionMain");
  });
  U.method("TConstructionMain", "DefinePropertyPages", async function DefinePropertyPages(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"definepropertypage": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["definepropertypage"]);
  return L0.result;
}, {"params": ["DefinePropertyPage"], "kind": "procedure", "ptypes": ["TDefinePropertyPage"]});
  U.method("TConstructionMain", "EventSinkChanged", async function EventSinkChanged(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"eventsink": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["eventsink"]);
  await $.set(C, "FEvents", L0["eventsink"]);
  return L0.result;
}, {"params": ["EventSink"], "kind": "procedure", "ptypes": ["IUnknown"]});
  U.method("TConstructionMain", "Initialize", async function Initialize(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: undefined};
  await $.inherited(Self, "TConstructionMain", "Initialize", null, arguments);
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
  U.method("TConstructionMain", "Get_Active", async function Get_Active(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: false};
  L0["result"] = (await $.v(C, "Active"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TConstructionMain", "Get_AutoScroll", async function Get_AutoScroll(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: false};
  L0["result"] = (await $.v(C, "AutoScroll"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TConstructionMain", "Get_AutoSize", async function Get_AutoSize(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: false};
  L0["result"] = (await $.v(C, "AutoSize"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TConstructionMain", "Get_AxBorderStyle", async function Get_AxBorderStyle(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: null};
  L0["result"] = (await $.call(C, "Ord", [(await $.v(C, "AxBorderStyle"))]));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TConstructionMain", "Get_Caption", async function Get_Caption(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: ''};
  L0["result"] = (await $.call(C, "WideString", [(await $.v(C, "Caption"))]));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TConstructionMain", "Get_Color", async function Get_Color(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: null};
  L0["result"] = (await $.call(C, "OLE_COLOR", [(await $.v(C, "Color"))]));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TConstructionMain", "Get_Cursor", async function Get_Cursor(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: 0};
  L0["result"] = (await $.call(C, "Smallint", [(await $.v(C, "Cursor"))]));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TConstructionMain", "Get_DoubleBuffered", async function Get_DoubleBuffered(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: false};
  L0["result"] = (await $.v(C, "DoubleBuffered"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TConstructionMain", "Get_DropTarget", async function Get_DropTarget(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: false};
  L0["result"] = (await $.v(C, "DropTarget"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TConstructionMain", "Get_Enabled", async function Get_Enabled(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: false};
  L0["result"] = (await $.v(C, "Enabled"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TConstructionMain", "Get_Font", async function Get_Font(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: null};
  await $.stmt((await $.call(C, "GetOleFont", [(await $.v(C, "Font")), L0["result"]])));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TConstructionMain", "Get_HelpFile", async function Get_HelpFile(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: ''};
  L0["result"] = (await $.call(C, "WideString", [(await $.v(C, "HelpFile"))]));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TConstructionMain", "Get_KeyPreview", async function Get_KeyPreview(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: false};
  L0["result"] = (await $.v(C, "KeyPreview"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TConstructionMain", "Get_PixelsPerInch", async function Get_PixelsPerInch(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: 0};
  L0["result"] = (await $.v(C, "PixelsPerInch"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TConstructionMain", "Get_PrintScale", async function Get_PrintScale(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: null};
  L0["result"] = (await $.call(C, "Ord", [(await $.v(C, "PrintScale"))]));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TConstructionMain", "Get_Scaled", async function Get_Scaled(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: false};
  L0["result"] = (await $.v(C, "Scaled"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TConstructionMain", "Get_Visible", async function Get_Visible(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: false};
  L0["result"] = (await $.v(C, "Visible"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TConstructionMain", "Get_VisibleDockClientCount", async function Get_VisibleDockClientCount(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: 0};
  L0["result"] = (await $.v(C, "VisibleDockClientCount"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TConstructionMain", "_Set_Font", async function _Set_Font(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.stmt((await $.call(C, "SetOleFont", [(await $.v(C, "Font")), L0["value"]])));
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["IFontDisp"]});
  U.method("TConstructionMain", "ActivateEvent", async function ActivateEvent(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.ne((await $.v(C, "FEvents")), null))) {
    await $.mcall((await $.v(C, "FEvents")), "OnActivate", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TConstructionMain", "ClickEvent", async function ClickEvent(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.ne((await $.v(C, "FEvents")), null))) {
    await $.mcall((await $.v(C, "FEvents")), "OnClick", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TConstructionMain", "CreateEvent", async function CreateEvent(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.ne((await $.v(C, "FEvents")), null))) {
    await $.mcall((await $.v(C, "FEvents")), "OnCreate", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TConstructionMain", "DblClickEvent", async function DblClickEvent(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.ne((await $.v(C, "FEvents")), null))) {
    await $.mcall((await $.v(C, "FEvents")), "OnDblClick", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TConstructionMain", "DeactivateEvent", async function DeactivateEvent(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.ne((await $.v(C, "FEvents")), null))) {
    await $.mcall((await $.v(C, "FEvents")), "OnDeactivate", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TConstructionMain", "DestroyEvent", async function DestroyEvent(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.ne((await $.v(C, "FEvents")), null))) {
    await $.mcall((await $.v(C, "FEvents")), "OnDestroy", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TConstructionMain", "KeyPressEvent", async function KeyPressEvent(Self, p0, p1) {
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
  U.method("TConstructionMain", "PaintEvent", async function PaintEvent(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.ne((await $.v(C, "FEvents")), null))) {
    await $.mcall((await $.v(C, "FEvents")), "OnPaint", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TConstructionMain", "Set_AutoScroll", async function Set_AutoScroll(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "AutoScroll", L0["value"]);
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["WordBool"]});
  U.method("TConstructionMain", "Set_AutoSize", async function Set_AutoSize(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "AutoSize", L0["value"]);
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["WordBool"]});
  U.method("TConstructionMain", "Set_AxBorderStyle", async function Set_AxBorderStyle(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "AxBorderStyle", (await $.call(C, "TActiveFormBorderStyle", [L0["value"]])));
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["TxActiveFormBorderStyle"]});
  U.method("TConstructionMain", "Set_Caption", async function Set_Caption(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "Caption", (await $.call(C, "TCaption", [L0["value"]])));
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["WideString"]});
  U.method("TConstructionMain", "Set_Color", async function Set_Color(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "Color", (await $.call(C, "TColor", [L0["value"]])));
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["OLE_COLOR"]});
  U.method("TConstructionMain", "Set_Cursor", async function Set_Cursor(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "Cursor", (await $.call(C, "TCursor", [L0["value"]])));
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["Smallint"]});
  U.method("TConstructionMain", "Set_DoubleBuffered", async function Set_DoubleBuffered(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "DoubleBuffered", L0["value"]);
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["WordBool"]});
  U.method("TConstructionMain", "Set_DropTarget", async function Set_DropTarget(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "DropTarget", L0["value"]);
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["WordBool"]});
  U.method("TConstructionMain", "Set_Enabled", async function Set_Enabled(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "Enabled", L0["value"]);
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["WordBool"]});
  U.method("TConstructionMain", "Set_Font", async function Set_Font(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.asRef(p0), result: undefined};
  await $.stmt((await $.call(C, "SetOleFont", [(await $.v(C, "Font")), (await L0["value"].get())])));
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["IFontDisp"]});
  U.method("TConstructionMain", "Set_HelpFile", async function Set_HelpFile(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "HelpFile", (await $.call(C, "String", [L0["value"]])));
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["WideString"]});
  U.method("TConstructionMain", "Set_KeyPreview", async function Set_KeyPreview(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "KeyPreview", L0["value"]);
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["WordBool"]});
  U.method("TConstructionMain", "Set_PixelsPerInch", async function Set_PixelsPerInch(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "PixelsPerInch", L0["value"]);
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["Integer"]});
  U.method("TConstructionMain", "Set_PrintScale", async function Set_PrintScale(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "PrintScale", (await $.call(C, "TPrintScale", [L0["value"]])));
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["TxPrintScale"]});
  U.method("TConstructionMain", "Set_Scaled", async function Set_Scaled(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "Scaled", L0["value"]);
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["WordBool"]});
  U.method("TConstructionMain", "Set_Visible", async function Set_Visible(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "Visible", L0["value"]);
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["WordBool"]});
  U.method("TConstructionMain", "Get_Owner", async function Get_Owner(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: 0};
  L0["result"] = (await $.v(C, "handle"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TConstructionMain", "Set_Owner", async function Set_Owner(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"val": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["val"]);
  if ($.truthy($.gt(L0["val"], 0))) {
    await $.set(C, "FOwnerHandle", L0["val"]);
  }
  return L0.result;
}, {"params": ["val"], "kind": "procedure", "ptypes": ["Integer"]});
  U.method("TConstructionMain", "Get_Params", async function Get_Params(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"name": $.copyArg(p0), result: null};
  await $.fixArgs(L0, ["name"]);
  L0["result"] = (await $.idx((await $.mv((await $.v(C, "FParams")), "Values")), [L0["name"]]));
  return L0.result;
}, {"params": ["Name"], "kind": "function", "ptypes": ["WideString"]});
  U.method("TConstructionMain", "Set_Params", async function Set_Params(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"name": $.copyArg(p0), "value": $.copyArg(p1), result: undefined};
  await $.fixArgs(L0, ["name", "value"]);
  { const $t1 = await $.iset((await $.mv((await $.v(C, "FParams")), "Values")), [L0["name"]], L0["value"]); if ($t1 !== undefined) { await $.mset((await $.v(C, "FParams")), "Values", $t1); } }
  return L0.result;
}, {"params": ["Name", "Value"], "kind": "procedure", "ptypes": ["WideString", "OleVariant"]});
  U.method("TConstructionMain", "InstanceInitialize", async function InstanceInitialize(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: null};
  L0["result"] = (await $.v(C, "S_OK"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TConstructionMain", "Cleanup", async function Cleanup(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: null};
  L0["result"] = (await $.v(C, "S_OK"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TConstructionMain", "UIObjectActivate", async function UIObjectActivate(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: null};
  L0["result"] = (await $.v(C, "S_OK"));
  await $.mcall((await $.v(C, "ODSContracts")), "Close", []);
  await $.stmt((await $.mcall((await $.v(C, "ODSContracts")), "SetVariable", ["blankid", (await $.mv((await $.v(C, "INS_ConstructionID")), "value"))])));
  await $.mcall((await $.v(C, "ODSContracts")), "Open", []);
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TConstructionMain", "QueryDeactivate", async function QueryDeactivate(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: null};
  L0["result"] = (await $.v(C, "S_OK"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TConstructionMain", "UIObjectDeactivate", async function UIObjectDeactivate(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: null};
  L0["result"] = (await $.v(C, "S_OK"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TConstructionMain", "SaveState", async function SaveState(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: null};
  L0["result"] = (await $.v(C, "S_OK"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TConstructionMain", "Get_Height", async function Get_Height(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: 0};
  L0["result"] = (await $.v(C, "Height"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TConstructionMain", "Get_Width", async function Get_Width(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: 0};
  L0["result"] = (await $.v(C, "Width"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TConstructionMain", "ActiveFormCreate", async function ActiveFormCreate(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.set(C, "ConstructionMain", Self);
  await $.set(C, "FParams", (await $.mv((await $.v(C, "TStringList")), "Create")));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TConstructionMain", "DeleteConstructionInfo", async function DeleteConstructionInfo(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"id": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["id"]);
  try {
    await $.stmt((await $.mcall((await $.v(C, "OPCommon")), "CallBooleanFunction", ["del_ins", ["v_id", L0["id"], "v_typeid", 10]])));
  } catch ($t2) {
    $.rethrowControl($t2);
    if ($.excIs($t2, "EOracleError")) {
      L0["e"] = $.exc($t2);
      { const $t3 = (await $.mv(L0["e"], "ErrorCode"));
        if ($.eq($t3, 20001)) {
          await $.stmt((await $.call(C, "ShowMessage", ["Asılı hesablarda qalıq sıfırdan fərqlidir!"])));
        }
        else if ($.eq($t3, 20002)) {
          await $.stmt((await $.call(C, "ShowMessage", ["Əvvəlcə asılı hesabları bağlayın!"])));
        }
      }
    }
    else { throw $t2; }
  }
  return L0.result;
}, {"params": ["id"], "kind": "procedure", "ptypes": ["integer"]});
  U.method("TConstructionMain", "AInsertExecute", async function AInsertExecute(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "p": null};
  await $.fixArgs(L0, ["sender"]);
  L0["p"] = (await $.mv((await $.v(C, "TStringList")), "Create"));
  { const $t4 = await $.iset((await $.mv(L0["p"], "Values")), ["KLI_ID"], (await $.call(C, "FloatToStr", [(await $.mv((await $.v(C, "INS_ConstructionKLI_ID")), "Value"))]))); if ($t4 !== undefined) { await $.mset(L0["p"], "Values", $t4); } }
  { const $t5 = await $.iset((await $.mv(L0["p"], "Values")), ["Mod"], "Insert"); if ($t5 !== undefined) { await $.mset(L0["p"], "Values", $t5); } }
  {
    const $t6 = (await $.v(C, "plgBlank"));
    await $.stmt((await $.wcall([$t6], "ShowModal", [(await $.wcall([$t6], "StringToGuid", ["{5F747E30-D623-4C34-BB55-9FBC1288AA9C}"], C)), (await $.wv([$t6], "p", { get: async () => L0["p"], set: async (v) => { L0["p"] = v; }, local: true }, false))], C)));
  }
  await $.mcall(L0["p"], "Free", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TConstructionMain", "AEditExecute", async function AEditExecute(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "p": null};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy((await $.mv((await $.v(C, "INS_Construction")), "IsEmpty")))) {
    await $.stmt((await $.call(C, "ShowMessage", ["Cədvəldə məlumat yoxdur !"])));
    return L0.result;
  }
  L0["p"] = (await $.mv((await $.v(C, "TStringList")), "Create"));
  { const $t7 = await $.iset((await $.mv(L0["p"], "Values")), ["Mod"], "Edit"); if ($t7 !== undefined) { await $.mset(L0["p"], "Values", $t7); } }
  { const $t8 = await $.iset((await $.mv(L0["p"], "Values")), ["ID"], (await $.call(C, "FloatToStr", [(await $.mv((await $.v(C, "INS_ConstructionID")), "Value"))]))); if ($t8 !== undefined) { await $.mset(L0["p"], "Values", $t8); } }
  {
    const $t9 = (await $.v(C, "plgBlank"));
    await $.stmt((await $.wcall([$t9], "ShowModal", [(await $.wcall([$t9], "StringToGuid", ["{5F747E30-D623-4C34-BB55-9FBC1288AA9C}"], C)), (await $.wv([$t9], "p", { get: async () => L0["p"], set: async (v) => { L0["p"] = v; }, local: true }, false))], C)));
  }
  await $.mcall(L0["p"], "Free", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TConstructionMain", "ADeleteExecute", async function ADeleteExecute(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "id": 0, "i": 0, "waitnextconfirm": false, "willrefresh": false};
  await $.fixArgs(L0, ["sender"]);
  L0["waitnextconfirm"] = true;
  L0["willrefresh"] = false;
  {
    const $t10 = (await $.v(C, "GridConstruction"));
    const $t11 = (await $.wv([$t10], "SelectedRows", C, false));
    const $t12 = (await $.wv([$t10, $t11], "Ins_Construction", C, false));
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
          await $.wset([$t10, $t11, $t12], "ID", (await $.mv((await $.wcall([$t10, $t11, $t12], "FieldbyName", ["ID"], C)), "AsInteger")), { get: async () => L0["id"], set: async (v) => { L0["id"] = v; }, local: true });
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
          await $.stmt((await $.wcall([$t10, $t11, $t12], "DeleteConstructionInfo", [(await $.wv([$t10, $t11, $t12], "ID", { get: async () => L0["id"], set: async (v) => { L0["id"] = v; }, local: true }, false))], C)));
          await $.wset([$t10, $t11, $t12], "WillRefresh", (await $.wv([$t10, $t11, $t12], "True", C, false)), { get: async () => L0["willrefresh"], set: async (v) => { L0["willrefresh"] = v; }, local: true });
          await $.tick();
        }
      }
      await $.stmt((await $.wcall([$t10, $t11, $t12], "ARefreshExecute", [(await $.wv([$t10, $t11, $t12], "sender", { get: async () => L0["sender"], set: async (v) => { L0["sender"] = v; }, local: true }, false))], C)));
    } finally {
      if ($.truthy((await $.wv([$t10, $t11, $t12], "WillRefresh", { get: async () => L0["willrefresh"], set: async (v) => { L0["willrefresh"] = v; }, local: true }, false)))) {
        await $.stmt((await $.wcall([$t10, $t11, $t12], "ARefreshExecute", [(await $.wv([$t10, $t11, $t12], "Sender", { get: async () => L0["sender"], set: async (v) => { L0["sender"] = v; }, local: true }, false))], C)));
      }
    }
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TConstructionMain", "ARefreshExecute", async function ARefreshExecute(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "constructionid": 0};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t16 = (await $.v(C, "Ins_Construction"));
    await $.wset([$t16], "ConstructionID", (await $.mv((await $.wcall([$t16], "FieldByName", ["ID"], C)), "AsInteger")), { get: async () => L0["constructionid"], set: async (v) => { L0["constructionid"] = v; }, local: true });
    await $.stmt($.wcall([$t16], "CloseAll", [], C));
    await $.stmt($.wcall([$t16], "Open", [], C));
    await $.stmt((await $.wcall([$t16], "Locate", ["ID", (await $.wv([$t16], "ConstructionID", { get: async () => L0["constructionid"], set: async (v) => { L0["constructionid"] = v; }, local: true }, false)), []], C)));
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TConstructionMain", "FullRefresh", async function FullRefresh(Self, p0) {
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
      if ($.truthy((await $.and_(($.is_((await $.idx((await $.v(C, "Components")), [L0["i"]])), "TOracleDataSet")), async () => ($.ne((await $.mv((await $.idx((await $.v(C, "Components")), [L0["i"]])), "Name")), L0["datasetname"])))))) {
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
  U.method("TConstructionMain", "AFullRefreshExecute", async function AFullRefreshExecute(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.stmt((await $.call(C, "FullRefresh", [""])));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TConstructionMain", "N1DrawItem", async function N1DrawItem(Self, p0, p1, p2, p3) {
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
  U.method("TConstructionMain", "ASuggestionExecute", async function ASuggestionExecute(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "p": null};
  await $.fixArgs(L0, ["sender"]);
  L0["p"] = (await $.mv((await $.v(C, "TStringList")), "Create"));
  { const $t34 = await $.iset((await $.mv(L0["p"], "Values")), ["ID"], (await $.call(C, "FloatToStr", [(await $.mv((await $.v(C, "INS_ConstructionID")), "Value"))]))); if ($t34 !== undefined) { await $.mset(L0["p"], "Values", $t34); } }
  {
    const $t35 = (await $.v(C, "plgBlank"));
    await $.stmt((await $.wcall([$t35], "ShowModal", [(await $.wcall([$t35], "StringToGuid", ["{0D0BAE0E-C323-439C-AAD6-EBBB63D04E9C}"], C)), (await $.wv([$t35], "p", { get: async () => L0["p"], set: async (v) => { L0["p"] = v; }, local: true }, false))], C)));
  }
  await $.mcall(L0["p"], "Free", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TConstructionMain", "AReportExecute", async function AReportExecute(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "idr": 0};
  await $.fixArgs(L0, ["sender"]);
  L0["idr"] = (await $.mv((await $.v(C, "INS_ConstructionID")), "value"));
  await $.mcall((await $.v(C, "ODSConstructionR")), "CloseAll", []);
  await $.stmt((await $.mcall((await $.v(C, "ODSConstructionR")), "SetVariable", ["ID", L0["idr"]])));
  await $.mcall((await $.v(C, "ODSConstructionR")), "Open", []);
  await $.mcall((await $.v(C, "ODSContracts")), "Close", []);
  await $.stmt((await $.mcall((await $.v(C, "ODSContracts")), "SetVariable", ["blankid", L0["idr"]])));
  await $.mcall((await $.v(C, "ODSContracts")), "Open", []);
  try {
    {
      const $t36 = (await $.v(C, "ConstructionExporter"));
      await $.wset([$t36], "FileName", $.add((await $.wcall([$t36], "ExtractFilePath", [(await $.mv((await $.wv([$t36], "Application", C, false)), "ExeName"))], C)), "\\ConstructionAppl.doc"), C);
      await $.stmt((await $.wcall([$t36], "Open", [(await $.wv([$t36], "False", C, false))], C)));
      await $.stmt((await $.wcall([$t36], "SetBookmark", ["Insured", (await $.mv((await $.wv([$t36], "ODSConstructionRName", C, false)), "value")), (await $.wv([$t36], "false", C, false)), (await $.wv([$t36], "false", C, false)), (await $.wv([$t36], "False", C, false)), (await $.wv([$t36], "false", C, false)), 8, "Arial AzLat", (await $.wv([$t36], "False", C, false))], C)));
      await $.stmt((await $.wcall([$t36], "SetBookmark", ["AInsured", (await $.mv((await $.wv([$t36], "ODSConstructionRAddress", C, false)), "value")), (await $.wv([$t36], "false", C, false)), (await $.wv([$t36], "false", C, false)), (await $.wv([$t36], "False", C, false)), (await $.wv([$t36], "false", C, false)), 8, "Arial AzLat", (await $.wv([$t36], "False", C, false))], C)));
      await $.stmt((await $.wcall([$t36], "SetBookmark", ["TInsured", (await $.mv((await $.wv([$t36], "ODSConstructionRPhone", C, false)), "value")), (await $.wv([$t36], "false", C, false)), (await $.wv([$t36], "false", C, false)), (await $.wv([$t36], "False", C, false)), (await $.wv([$t36], "false", C, false)), 8, "Arial AzLat", (await $.wv([$t36], "False", C, false))], C)));
      await $.stmt((await $.wcall([$t36], "SetBookmark", ["FInsured", (await $.mv((await $.wv([$t36], "ODSConstructionRFax", C, false)), "value")), (await $.wv([$t36], "false", C, false)), (await $.wv([$t36], "false", C, false)), (await $.wv([$t36], "False", C, false)), (await $.wv([$t36], "false", C, false)), 8, "Arial AzLat", (await $.wv([$t36], "False", C, false))], C)));
      await $.stmt((await $.wcall([$t36], "SetBookmark", ["RPeriod", $.add($.add((await $.wcall([$t36], "DateToStr", [(await $.mv((await $.wv([$t36], "ODSContractsBegin_Date", C, false)), "value"))], C)), " - "), (await $.wcall([$t36], "DateToStr", [(await $.mv((await $.wv([$t36], "ODSContractsEnd_Date", C, false)), "value"))], C))), (await $.wv([$t36], "false", C, false)), (await $.wv([$t36], "false", C, false)), (await $.wv([$t36], "False", C, false)), (await $.wv([$t36], "false", C, false)), 8, "Arial AzLat", (await $.wv([$t36], "False", C, false))], C)));
      await $.stmt((await $.wcall([$t36], "SetBookmark", ["Beneficiary", (await $.mv((await $.wv([$t36], "ODSBeneficiaryName", C, false)), "value")), (await $.wv([$t36], "True", C, false)), (await $.wv([$t36], "false", C, false)), (await $.wv([$t36], "False", C, false)), (await $.wv([$t36], "false", C, false)), 10, "Arial AzLat", (await $.wv([$t36], "False", C, false))], C)));
      await $.stmt((await $.wcall([$t36], "SetBookmark", ["BAddress", (await $.mv((await $.wv([$t36], "ODSBeneficiaryAddress", C, false)), "value")), (await $.wv([$t36], "True", C, false)), (await $.wv([$t36], "false", C, false)), (await $.wv([$t36], "False", C, false)), (await $.wv([$t36], "false", C, false)), 10, "Arial AzLat", (await $.wv([$t36], "False", C, false))], C)));
      await $.stmt((await $.wcall([$t36], "SetBookmark", ["BTel", (await $.mv((await $.wv([$t36], "ODSBeneficiaryPhone", C, false)), "value")), (await $.wv([$t36], "True", C, false)), (await $.wv([$t36], "false", C, false)), (await $.wv([$t36], "False", C, false)), (await $.wv([$t36], "false", C, false)), 10, "Arial AzLat", (await $.wv([$t36], "False", C, false))], C)));
      await $.stmt((await $.wcall([$t36], "SetBookmark", ["BBank", (await $.mv((await $.wv([$t36], "ODSBeneficiaryBanking_details", C, false)), "value")), (await $.wv([$t36], "True", C, false)), (await $.wv([$t36], "false", C, false)), (await $.wv([$t36], "False", C, false)), (await $.wv([$t36], "false", C, false)), 10, "Arial AzLat", (await $.wv([$t36], "False", C, false))], C)));
      await $.stmt((await $.wcall([$t36], "SetBookmark", ["FullDesc", (await $.mv((await $.wv([$t36], "INS_CONSTRUCTIONFullDescription", C, false)), "value")), (await $.wv([$t36], "false", C, false)), (await $.wv([$t36], "false", C, false)), (await $.wv([$t36], "False", C, false)), (await $.wv([$t36], "false", C, false)), 8, "Arial AzLat", (await $.wv([$t36], "False", C, false))], C)));
      await $.stmt((await $.wcall([$t36], "SetBookmark", ["Location", (await $.mv((await $.wv([$t36], "INS_CONSTRUCTIONLocationObj", C, false)), "value")), (await $.wv([$t36], "false", C, false)), (await $.wv([$t36], "false", C, false)), (await $.wv([$t36], "False", C, false)), (await $.wv([$t36], "false", C, false)), 8, "Arial AzLat", (await $.wv([$t36], "False", C, false))], C)));
      await $.stmt((await $.wcall([$t36], "SetBookmark", ["Yearsinb", (await $.mv((await $.wv([$t36], "INS_CONSTRUCTIONYEARSINBUSINESS", C, false)), "value")), (await $.wv([$t36], "false", C, false)), (await $.wv([$t36], "false", C, false)), (await $.wv([$t36], "False", C, false)), (await $.wv([$t36], "false", C, false)), 8, "Arial AzLat", (await $.wv([$t36], "False", C, false))], C)));
      await $.stmt((await $.wcall([$t36], "SetBookmark", ["CPerson", (await $.mv((await $.wv([$t36], "CustomersContactPerson", C, false)), "value")), (await $.wv([$t36], "false", C, false)), (await $.wv([$t36], "false", C, false)), (await $.wv([$t36], "False", C, false)), (await $.wv([$t36], "false", C, false)), 8, "Arial AzLat", (await $.wv([$t36], "False", C, false))], C)));
      await $.stmt((await $.wcall([$t36], "SetBookmark", ["TCPerson", (await $.mv((await $.wv([$t36], "CustomersContactPersonPhone", C, false)), "value")), (await $.wv([$t36], "false", C, false)), (await $.wv([$t36], "false", C, false)), (await $.wv([$t36], "False", C, false)), (await $.wv([$t36], "false", C, false)), 8, "Arial AzLat", (await $.wv([$t36], "False", C, false))], C)));
      await $.stmt((await $.wcall([$t36], "SetBookmark", ["BUsage", (await $.mv((await $.wv([$t36], "INS_CONSTRUCTIONBuildingusage", C, false)), "value")), (await $.wv([$t36], "false", C, false)), (await $.wv([$t36], "false", C, false)), (await $.wv([$t36], "False", C, false)), (await $.wv([$t36], "false", C, false)), 8, "Arial AzLat", (await $.wv([$t36], "False", C, false))], C)));
      await $.stmt((await $.wcall([$t36], "SetBookmark", ["YearConst", (await $.wcall([$t36], "DateToStr", [(await $.mv((await $.wv([$t36], "INS_CONSTRUCTIONconstyear", C, false)), "value"))], C)), (await $.wv([$t36], "false", C, false)), (await $.wv([$t36], "false", C, false)), (await $.wv([$t36], "False", C, false)), (await $.wv([$t36], "false", C, false)), 8, "Arial AzLat", (await $.wv([$t36], "False", C, false))], C)));
      await $.stmt((await $.wcall([$t36], "SetBookmark", ["FloorsNum", (await $.wcall([$t36], "IntToStr", [(await $.mv((await $.wv([$t36], "INS_CONSTRUCTIONFloorsNum", C, false)), "value"))], C)), (await $.wv([$t36], "false", C, false)), (await $.wv([$t36], "false", C, false)), (await $.wv([$t36], "False", C, false)), (await $.wv([$t36], "false", C, false)), 8, "Arial AzLat", (await $.wv([$t36], "False", C, false))], C)));
      await $.stmt((await $.wcall([$t36], "SetBookmark", ["WallsM", (await $.mv((await $.wv([$t36], "INS_CONSTRUCTIONWallsM", C, false)), "value")), (await $.wv([$t36], "false", C, false)), (await $.wv([$t36], "false", C, false)), (await $.wv([$t36], "False", C, false)), (await $.wv([$t36], "false", C, false)), 8, "Arial AzLat", (await $.wv([$t36], "False", C, false))], C)));
      await $.stmt((await $.wcall([$t36], "SetBookmark", ["CeilingsM", (await $.mv((await $.wv([$t36], "INS_CONSTRUCTIONCeilingsM", C, false)), "value")), (await $.wv([$t36], "false", C, false)), (await $.wv([$t36], "false", C, false)), (await $.wv([$t36], "False", C, false)), (await $.wv([$t36], "false", C, false)), 8, "Arial AzLat", (await $.wv([$t36], "False", C, false))], C)));
      await $.stmt((await $.wcall([$t36], "SetBookmark", ["RoofM", (await $.mv((await $.wv([$t36], "INS_CONSTRUCTIONRoofM", C, false)), "value")), (await $.wv([$t36], "false", C, false)), (await $.wv([$t36], "false", C, false)), (await $.wv([$t36], "False", C, false)), (await $.wv([$t36], "false", C, false)), 8, "Arial AzLat", (await $.wv([$t36], "False", C, false))], C)));
      await $.stmt((await $.wcall([$t36], "SetBookmark", ["Area", (await $.wcall([$t36], "FloatToStr", [(await $.mv((await $.wv([$t36], "INS_CONSTRUCTIONArea", C, false)), "value"))], C)), (await $.wv([$t36], "false", C, false)), (await $.wv([$t36], "false", C, false)), (await $.wv([$t36], "False", C, false)), (await $.wv([$t36], "false", C, false)), 8, "Arial AzLat", (await $.wv([$t36], "False", C, false))], C)));
      await $.stmt((await $.wcall([$t36], "SetBookmark", ["AppArea", (await $.wcall([$t36], "FloatToStr", [(await $.mv((await $.wv([$t36], "INS_CONSTRUCTIONApplicantSpace", C, false)), "value"))], C)), (await $.wv([$t36], "false", C, false)), (await $.wv([$t36], "false", C, false)), (await $.wv([$t36], "False", C, false)), (await $.wv([$t36], "false", C, false)), 8, "Arial AzLat", (await $.wv([$t36], "False", C, false))], C)));
      await $.stmt((await $.wcall([$t36], "SetBookmark", ["Earthquake", (await $.mv((await $.wv([$t36], "INS_CONSTRUCTIONEARTHQUAKEDETAILS", C, false)), "value")), (await $.wv([$t36], "false", C, false)), (await $.wv([$t36], "false", C, false)), (await $.wv([$t36], "False", C, false)), (await $.wv([$t36], "false", C, false)), 8, "Arial AzLat", (await $.wv([$t36], "False", C, false))], C)));
      await $.stmt((await $.wcall([$t36], "SetBookmark", ["Flamable", (await $.mv((await $.wv([$t36], "INS_CONSTRUCTIONFlamable", C, false)), "value")), (await $.wv([$t36], "false", C, false)), (await $.wv([$t36], "false", C, false)), (await $.wv([$t36], "False", C, false)), (await $.wv([$t36], "false", C, false)), 8, "Arial AzLat", (await $.wv([$t36], "False", C, false))], C)));
      await $.stmt((await $.wcall([$t36], "SetBookmark", ["Surroinding", (await $.mv((await $.wv([$t36], "INS_CONSTRUCTIONSURROINDINGDETAILS", C, false)), "value")), (await $.wv([$t36], "false", C, false)), (await $.wv([$t36], "false", C, false)), (await $.wv([$t36], "False", C, false)), (await $.wv([$t36], "false", C, false)), 8, "Arial AzLat", (await $.wv([$t36], "False", C, false))], C)));
      await $.stmt((await $.wcall([$t36], "SetBookmark", ["Situeted", (await $.mv((await $.wv([$t36], "INS_CONSTRUCTIONSitueted", C, false)), "value")), (await $.wv([$t36], "false", C, false)), (await $.wv([$t36], "false", C, false)), (await $.wv([$t36], "False", C, false)), (await $.wv([$t36], "false", C, false)), 8, "Arial AzLat", (await $.wv([$t36], "False", C, false))], C)));
      await $.stmt((await $.wcall([$t36], "SetBookmark", ["Issecure", (await $.mv((await $.wv([$t36], "INS_CONSTRUCTIONGuard", C, false)), "value")), (await $.wv([$t36], "false", C, false)), (await $.wv([$t36], "false", C, false)), (await $.wv([$t36], "False", C, false)), (await $.wv([$t36], "false", C, false)), 8, "Arial AzLat", (await $.wv([$t36], "False", C, false))], C)));
      await $.stmt((await $.wcall([$t36], "SetBookmark", ["Alarm", (await $.mv((await $.wv([$t36], "INS_CONSTRUCTIONAlarm", C, false)), "value")), (await $.wv([$t36], "false", C, false)), (await $.wv([$t36], "false", C, false)), (await $.wv([$t36], "False", C, false)), (await $.wv([$t36], "false", C, false)), 8, "Arial AzLat", (await $.wv([$t36], "False", C, false))], C)));
      await $.stmt((await $.wcall([$t36], "SetBookmark", ["Locks", (await $.mv((await $.wv([$t36], "INS_CONSTRUCTIONLocks", C, false)), "value")), (await $.wv([$t36], "false", C, false)), (await $.wv([$t36], "false", C, false)), (await $.wv([$t36], "False", C, false)), (await $.wv([$t36], "false", C, false)), 8, "Arial AzLat", (await $.wv([$t36], "False", C, false))], C)));
      await $.stmt((await $.wcall([$t36], "SetBookmark", ["SLocks", (await $.mv((await $.wv([$t36], "INS_CONSTRUCTIONSecurityLocks", C, false)), "value")), (await $.wv([$t36], "false", C, false)), (await $.wv([$t36], "false", C, false)), (await $.wv([$t36], "False", C, false)), (await $.wv([$t36], "false", C, false)), 8, "Arial AzLat", (await $.wv([$t36], "False", C, false))], C)));
      await $.stmt((await $.wcall([$t36], "SetBookmark", ["Bars", (await $.mv((await $.wv([$t36], "INS_CONSTRUCTIONBars", C, false)), "value")), (await $.wv([$t36], "false", C, false)), (await $.wv([$t36], "false", C, false)), (await $.wv([$t36], "False", C, false)), (await $.wv([$t36], "false", C, false)), 8, "Arial AzLat", (await $.wv([$t36], "False", C, false))], C)));
      await $.stmt((await $.wcall([$t36], "SetBookmark", ["Other", (await $.mv((await $.wv([$t36], "INS_CONSTRUCTIONOther", C, false)), "value")), (await $.wv([$t36], "false", C, false)), (await $.wv([$t36], "false", C, false)), (await $.wv([$t36], "False", C, false)), (await $.wv([$t36], "false", C, false)), 8, "Arial AzLat", (await $.wv([$t36], "False", C, false))], C)));
      await $.stmt((await $.wcall([$t36], "SetBookmark", ["Settings", (await $.mv((await $.wv([$t36], "INS_CONSTRUCTIONSettings", C, false)), "value")), (await $.wv([$t36], "false", C, false)), (await $.wv([$t36], "false", C, false)), (await $.wv([$t36], "False", C, false)), (await $.wv([$t36], "false", C, false)), 8, "Arial AzLat", (await $.wv([$t36], "False", C, false))], C)));
      await $.stmt((await $.wcall([$t36], "SetBookmark", ["Repair", (await $.mv((await $.wv([$t36], "INS_CONSTRUCTIONRepair", C, false)), "value")), (await $.wv([$t36], "false", C, false)), (await $.wv([$t36], "false", C, false)), (await $.wv([$t36], "False", C, false)), (await $.wv([$t36], "false", C, false)), 8, "Arial AzLat", (await $.wv([$t36], "False", C, false))], C)));
      await $.stmt((await $.wcall([$t36], "SetBookmark", ["RepairDetail", (await $.mv((await $.wv([$t36], "INS_CONSTRUCTIONRepair", C, false)), "value")), (await $.wv([$t36], "false", C, false)), (await $.wv([$t36], "false", C, false)), (await $.wv([$t36], "False", C, false)), (await $.wv([$t36], "false", C, false)), 8, "Arial AzLat", (await $.wv([$t36], "False", C, false))], C)));
      await $.stmt((await $.wcall([$t36], "SetBookmark", ["Heated", (await $.mv((await $.wv([$t36], "INS_CONSTRUCTIONHeated", C, false)), "value")), (await $.wv([$t36], "false", C, false)), (await $.wv([$t36], "false", C, false)), (await $.wv([$t36], "False", C, false)), (await $.wv([$t36], "false", C, false)), 8, "Arial AzLat", (await $.wv([$t36], "False", C, false))], C)));
      await $.stmt((await $.wcall([$t36], "SetBookmark", ["ValueType", (await $.mv((await $.wv([$t36], "INS_CONSTRUCTIONValueType", C, false)), "value")), (await $.wv([$t36], "false", C, false)), (await $.wv([$t36], "false", C, false)), (await $.wv([$t36], "False", C, false)), (await $.wv([$t36], "false", C, false)), 8, "Arial AzLat", (await $.wv([$t36], "False", C, false))], C)));
      await $.stmt((await $.wcall([$t36], "SetBookmark", ["Buildings", (await $.wcall([$t36], "floatToStr", [(await $.mv((await $.wv([$t36], "INS_CONSTRUCTIONBuildings", C, false)), "value"))], C)), (await $.wv([$t36], "false", C, false)), (await $.wv([$t36], "false", C, false)), (await $.wv([$t36], "False", C, false)), (await $.wv([$t36], "false", C, false)), 8, "Arial AzLat", (await $.wv([$t36], "False", C, false))], C)));
      await $.stmt((await $.wcall([$t36], "SetBookmark", ["Engineering", (await $.wcall([$t36], "floatToStr", [(await $.mv((await $.wv([$t36], "INS_CONSTRUCTIONEngineer", C, false)), "value"))], C)), (await $.wv([$t36], "false", C, false)), (await $.wv([$t36], "false", C, false)), (await $.wv([$t36], "False", C, false)), (await $.wv([$t36], "false", C, false)), 8, "Arial AzLat", (await $.wv([$t36], "False", C, false))], C)));
      await $.stmt((await $.wcall([$t36], "SetBookmark", ["Exdeco", (await $.wcall([$t36], "floatToStr", [(await $.mv((await $.wv([$t36], "INS_CONSTRUCTIONExDeco", C, false)), "value"))], C)), (await $.wv([$t36], "false", C, false)), (await $.wv([$t36], "false", C, false)), (await $.wv([$t36], "False", C, false)), (await $.wv([$t36], "false", C, false)), 8, "Arial AzLat", (await $.wv([$t36], "False", C, false))], C)));
      await $.stmt((await $.wcall([$t36], "SetBookmark", ["Indeco", (await $.wcall([$t36], "floatToStr", [(await $.mv((await $.wv([$t36], "INS_CONSTRUCTIONIndeco", C, false)), "value"))], C)), (await $.wv([$t36], "false", C, false)), (await $.wv([$t36], "false", C, false)), (await $.wv([$t36], "False", C, false)), (await $.wv([$t36], "false", C, false)), 8, "Arial AzLat", (await $.wv([$t36], "False", C, false))], C)));
      await $.stmt((await $.wcall([$t36], "SetBookmark", ["Firesys", (await $.wcall([$t36], "floatToStr", [(await $.mv((await $.wv([$t36], "INS_CONSTRUCTIONFiresys", C, false)), "value"))], C)), (await $.wv([$t36], "false", C, false)), (await $.wv([$t36], "false", C, false)), (await $.wv([$t36], "False", C, false)), (await $.wv([$t36], "false", C, false)), 8, "Arial AzLat", (await $.wv([$t36], "False", C, false))], C)));
      await $.stmt((await $.wcall([$t36], "SetBookmark", ["Annual", (await $.wcall([$t36], "floatToStr", [(await $.mv((await $.wv([$t36], "INS_CONSTRUCTIONAnnual", C, false)), "value"))], C)), (await $.wv([$t36], "false", C, false)), (await $.wv([$t36], "false", C, false)), (await $.wv([$t36], "False", C, false)), (await $.wv([$t36], "false", C, false)), 8, "Arial AzLat", (await $.wv([$t36], "False", C, false))], C)));
      await $.stmt((await $.wcall([$t36], "SetBookmark", ["Wages", (await $.wcall([$t36], "floatToStr", [(await $.mv((await $.wv([$t36], "INS_CONSTRUCTIONWages", C, false)), "value"))], C)), (await $.wv([$t36], "false", C, false)), (await $.wv([$t36], "false", C, false)), (await $.wv([$t36], "False", C, false)), (await $.wv([$t36], "false", C, false)), 8, "Arial AzLat", (await $.wv([$t36], "False", C, false))], C)));
      await $.stmt((await $.wcall([$t36], "SetBookmark", ["Rent", (await $.wcall([$t36], "floatToStr", [(await $.mv((await $.wv([$t36], "INS_CONSTRUCTIONRent", C, false)), "value"))], C)), (await $.wv([$t36], "false", C, false)), (await $.wv([$t36], "false", C, false)), (await $.wv([$t36], "False", C, false)), (await $.wv([$t36], "false", C, false)), 8, "Arial AzLat", (await $.wv([$t36], "False", C, false))], C)));
      await $.stmt((await $.wcall([$t36], "SetBookmark", ["Employes", (await $.wcall([$t36], "floatToStr", [(await $.mv((await $.wv([$t36], "INS_CONSTRUCTIONEmployes", C, false)), "value"))], C)), (await $.wv([$t36], "false", C, false)), (await $.wv([$t36], "false", C, false)), (await $.wv([$t36], "False", C, false)), (await $.wv([$t36], "false", C, false)), 8, "Arial AzLat", (await $.wv([$t36], "False", C, false))], C)));
      await $.stmt((await $.wcall([$t36], "SetBookmark", ["Indeminity", (await $.mv((await $.wv([$t36], "INS_CONSTRUCTIONIndeminity", C, false)), "value")), (await $.wv([$t36], "false", C, false)), (await $.wv([$t36], "false", C, false)), (await $.wv([$t36], "False", C, false)), (await $.wv([$t36], "false", C, false)), 8, "Arial AzLat", (await $.wv([$t36], "False", C, false))], C)));
      await $.stmt((await $.wcall([$t36], "SetBookmark", ["Expirity", (await $.wcall([$t36], "DateToStr", [(await $.mv((await $.wv([$t36], "INS_CONSTRUCTIONExpirity", C, false)), "value"))], C)), (await $.wv([$t36], "false", C, false)), (await $.wv([$t36], "false", C, false)), (await $.wv([$t36], "False", C, false)), (await $.wv([$t36], "false", C, false)), 8, "Arial AzLat", (await $.wv([$t36], "False", C, false))], C)));
      await $.stmt((await $.wcall([$t36], "SetBookmark", ["LHistory", (await $.mv((await $.wv([$t36], "INS_CONSTRUCTIONLossHistory", C, false)), "value")), (await $.wv([$t36], "false", C, false)), (await $.wv([$t36], "false", C, false)), (await $.wv([$t36], "False", C, false)), (await $.wv([$t36], "false", C, false)), 8, "Arial AzLat", (await $.wv([$t36], "False", C, false))], C)));
      await $.stmt((await $.wcall([$t36], "SetBookmark", ["OtherInf", (await $.mv((await $.wv([$t36], "INS_CONSTRUCTIONRenewal", C, false)), "value")), (await $.wv([$t36], "false", C, false)), (await $.wv([$t36], "false", C, false)), (await $.wv([$t36], "False", C, false)), (await $.wv([$t36], "false", C, false)), 8, "Arial AzLat", (await $.wv([$t36], "False", C, false))], C)));
      await $.stmt((await $.wcall([$t36], "SetBookmark", ["Thirdp", (await $.mv((await $.wv([$t36], "INS_CONSTRUCTIONThirdParty", C, false)), "value")), (await $.wv([$t36], "false", C, false)), (await $.wv([$t36], "false", C, false)), (await $.wv([$t36], "False", C, false)), (await $.wv([$t36], "false", C, false)), 8, "Arial AzLat", (await $.wv([$t36], "False", C, false))], C)));
      await $.stmt((await $.wcall([$t36], "SetBookmark", ["OtherInform", (await $.mv((await $.wv([$t36], "INS_CONSTRUCTIONOtherInf", C, false)), "value")), (await $.wv([$t36], "false", C, false)), (await $.wv([$t36], "false", C, false)), (await $.wv([$t36], "False", C, false)), (await $.wv([$t36], "false", C, false)), 8, "Arial AzLat", (await $.wv([$t36], "False", C, false))], C)));
    }
  } finally {
    await $.mcall((await $.v(C, "ConstructionExporter")), "Show", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TConstructionMain", "GridConstructionTitleClick", async function GridConstructionTitleClick(Self, p0) {
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
    const $t37 = (await $.v(C, "Ins_Construction"));
    await $.mset((await $.wv([$t37], "Screen", C, false)), "Cursor", (await $.wv([$t37], "crSQLWait", C, false)));
    await $.stmt((await $.wcall([$t37], "SetVariable", ["ID", (await $.wv([$t37], "TitleName", { get: async () => L0["titlename"], set: async (v) => { L0["titlename"] = v; }, local: true }, false))], C)));
    await $.stmt($.wcall([$t37], "Refresh", [], C));
    await $.mset((await $.wv([$t37], "Screen", C, false)), "Cursor", (await $.wv([$t37], "crDefault", C, false)));
  }
  return L0.result;
}, {"params": ["Column"], "kind": "procedure", "ptypes": ["TColumn"]});
  U.method("TConstructionMain", "APolicyExecute", async function APolicyExecute(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "p": null};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.eq((await $.mv((await $.v(C, "ODSCONSTSUGGESTID")), "Value")), 0))) {
    await $.stmt((await $.call(C, "ShowMessage", ["Təklifnamə hazır deyil ! Əvvəlcə təklifnamə hazırlanmalıdır !"])));
    return L0.result;
  }
  L0["p"] = (await $.mv((await $.v(C, "TStringList")), "Create"));
  { const $t38 = await $.iset((await $.mv(L0["p"], "Values")), ["id"], (await $.call(C, "FloatToStr", [(await $.mv((await $.v(C, "INS_CONSTRUCTIONId")), "value"))]))); if ($t38 !== undefined) { await $.mset(L0["p"], "Values", $t38); } }
  { const $t39 = await $.iset((await $.mv(L0["p"], "Values")), ["fid"], (await $.call(C, "FloatToStr", [(await $.mv((await $.v(C, "ODSCONSTSUGGESTfrz_id")), "Value"))]))); if ($t39 !== undefined) { await $.mset(L0["p"], "Values", $t39); } }
  { const $t40 = await $.iset((await $.mv(L0["p"], "Values")), ["cdid"], (await $.call(C, "FloatToStr", [(await $.mv((await $.v(C, "ODSCONSTSUGGESTCNDT_id")), "Value"))]))); if ($t40 !== undefined) { await $.mset(L0["p"], "Values", $t40); } }
  { const $t41 = await $.iset((await $.mv(L0["p"], "Values")), ["riskid"], (await $.call(C, "FloatToStr", [(await $.mv((await $.v(C, "INS_CONSTRUCTIONRiskId")), "value"))]))); if ($t41 !== undefined) { await $.mset(L0["p"], "Values", $t41); } }
  { const $t42 = await $.iset((await $.mv(L0["p"], "Values")), ["Mod"], "Insert"); if ($t42 !== undefined) { await $.mset(L0["p"], "Values", $t42); } }
  {
    const $t43 = (await $.v(C, "plgBlank"));
    await $.stmt((await $.wcall([$t43], "ShowModal", [(await $.wcall([$t43], "StringToGuid", ["{FEE93B74-CDCF-49A1-A5D9-84162C91971C}"], C)), (await $.wv([$t43], "p", { get: async () => L0["p"], set: async (v) => { L0["p"] = v; }, local: true }, false))], C)));
  }
  await $.mcall(L0["p"], "Free", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TConstructionMain", "ASearchExecute", async function ASearchExecute(Self, p0) {
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
