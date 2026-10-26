// Generated from UConstructionSuggest.pas by pas2js — do not edit by hand; regenerate instead.
/* eslint-disable */
// @ts-nocheck

export default function define($) {
  const U = $.unit("UConstructionSuggest", ["Windows", "Messages", "SysUtils", "Classes", "Graphics", "Controls", "Forms", "Dialogs", "ActiveX", "AxCtrls", "PConstructionSuggest_TLB", "StdVcl", "StdCtrls", "ComCtrls", "Buttons", "DBCtrls", "Mask", "ExtCtrls", "SBPlgAx50_TLB", "Db", "OracleData", "Oracle", "INSWordExporter", "PlgModalContainer", "ComObj", "ComServ", "sboapiDataModuleImpl"]);
  const C = [U];
  U.defClass("TConstructionSuggest", "TActiveForm", {"panel2": {"name": "Panel2", "type": "TPanel"}, "label1": {"name": "Label1", "type": "TLabel"}, "label2": {"name": "Label2", "type": "TLabel"}, "edit1": {"name": "Edit1", "type": "TEdit"}, "dbedit1": {"name": "DBEdit1", "type": "TDBEdit"}, "groupbox1": {"name": "GroupBox1", "type": "TGroupBox"}, "label3": {"name": "Label3", "type": "TLabel"}, "label4": {"name": "Label4", "type": "TLabel"}, "dblookupcombobox1": {"name": "DBLookupComboBox1", "type": "TDBLookupComboBox"}, "dblookupcombobox2": {"name": "DBLookupComboBox2", "type": "TDBLookupComboBox"}, "groupbox2": {"name": "GroupBox2", "type": "TGroupBox"}, "label7": {"name": "Label7", "type": "TLabel"}, "label9": {"name": "Label9", "type": "TLabel"}, "label10": {"name": "Label10", "type": "TLabel"}, "label11": {"name": "Label11", "type": "TLabel"}, "label12": {"name": "Label12", "type": "TLabel"}, "dbedit7": {"name": "DBEdit7", "type": "TDBEdit"}, "panel1": {"name": "Panel1", "type": "TPanel"}, "bitbtn1": {"name": "BitBtn1", "type": "TBitBtn"}, "bitbtn2": {"name": "BitBtn2", "type": "TBitBtn"}, "btapply": {"name": "btApply", "type": "TBitBtn"}, "btprint": {"name": "btPrint", "type": "TBitBtn"}, "btpolicy": {"name": "btPolicy", "type": "TBitBtn"}, "dblookupcomboboxcondition": {"name": "DBLookupComboBoxCondition", "type": "TDBLookupComboBox"}, "cbfranshiz": {"name": "cbFranshiz", "type": "TCheckBox"}, "cbconditions": {"name": "cbConditions", "type": "TCheckBox"}, "dblookupcomboboxfranshiz": {"name": "DBLookupComboBoxFranshiz", "type": "TDBLookupComboBox"}, "dtpcontractdate": {"name": "DTPContractDate", "type": "TDateTimePicker"}, "memfrashize": {"name": "memFrashize", "type": "TMemo"}, "memconditions": {"name": "memConditions", "type": "TMemo"}, "dbedit2": {"name": "DBEdit2", "type": "TDBEdit"}, "label5": {"name": "Label5", "type": "TLabel"}, "label13": {"name": "Label13", "type": "TLabel"}, "dbedit3": {"name": "DBEdit3", "type": "TDBEdit"}, "label14": {"name": "Label14", "type": "TLabel"}, "dblookupcombobox3": {"name": "DBLookupComboBox3", "type": "TDBLookupComboBox"}, "memorfranshiz": {"name": "MemoRFranshiz", "type": "TMemo"}, "cbifranshiz": {"name": "cbIFranshiz", "type": "TCheckBox"}, "label15": {"name": "Label15", "type": "TLabel"}, "dbedit4": {"name": "DBEdit4", "type": "TDBEdit"}, "label8": {"name": "Label8", "type": "TLabel"}, "label17": {"name": "Label17", "type": "TLabel"}, "dbedit8": {"name": "DBEdit8", "type": "TDBEdit"}, "label18": {"name": "Label18", "type": "TLabel"}, "constructiondata": {"name": "CONSTRUCTIONData", "type": "TDataSource"}, "constsuggestdata": {"name": "CONSTSUGGESTData", "type": "TDataSource"}, "odsconstruction": {"name": "ODSCONSTRUCTION", "type": "TOracleDataSet"}, "odsconstsuggest": {"name": "ODSCONSTSUGGEST", "type": "TOracleDataSet"}, "customers": {"name": "Customers", "type": "TOracleDataSet"}, "customersid": {"name": "CustomersID", "type": "TIntegerField"}, "customersname": {"name": "CustomersNAME", "type": "TStringField"}, "customersaddress": {"name": "CustomersADDRESS", "type": "TStringField"}, "customersmobilephone": {"name": "CustomersMOBILEPHONE", "type": "TStringField"}, "customersfax": {"name": "CustomersFAX", "type": "TStringField"}, "customersdata": {"name": "CustomersData", "type": "TDataSource"}, "bankinfo": {"name": "BankInfo", "type": "TOracleDataSet"}, "bankinfodata": {"name": "BankInfoData", "type": "TDataSource"}, "conditions": {"name": "Conditions", "type": "TOracleDataSet"}, "conditionsid": {"name": "ConditionsID", "type": "TFloatField"}, "conditionsname": {"name": "ConditionsNAME", "type": "TStringField"}, "conditionsdata": {"name": "ConditionsData", "type": "TDataSource"}, "franshizdata": {"name": "FranshizData", "type": "TDataSource"}, "franshiz": {"name": "Franshiz", "type": "TOracleDataSet"}, "franshizid": {"name": "FranshizID", "type": "TFloatField"}, "franshizname": {"name": "FranshizNAME", "type": "TStringField"}, "pins_construction": {"name": "PINS_CONSTRUCTION", "type": "TOraclePackage"}, "constructionwordexporter": {"name": "ConstructionWordExporter", "type": "TINSWordExporter"}, "odsconstructionid": {"name": "ODSCONSTRUCTIONID", "type": "TFloatField"}, "odsconstructionkli_id": {"name": "ODSCONSTRUCTIONKLI_ID", "type": "TFloatField"}, "odsconstructionfulldescription": {"name": "ODSCONSTRUCTIONFULLDESCRIPTION", "type": "TStringField"}, "odsconstructionlocationobj": {"name": "ODSCONSTRUCTIONLOCATIONOBJ", "type": "TStringField"}, "odsconstructionyearsinbusiness": {"name": "ODSCONSTRUCTIONYEARSINBUSINESS", "type": "TStringField"}, "odsconstructionbuildingusage": {"name": "ODSCONSTRUCTIONBUILDINGUSAGE", "type": "TStringField"}, "odsconstructionconstyear": {"name": "ODSCONSTRUCTIONCONSTYEAR", "type": "TDateTimeField"}, "odsconstructionfloorsnum": {"name": "ODSCONSTRUCTIONFLOORSNUM", "type": "TIntegerField"}, "odsconstructionwallsm": {"name": "ODSCONSTRUCTIONWALLSM", "type": "TStringField"}, "odsconstructionceilingsm": {"name": "ODSCONSTRUCTIONCEILINGSM", "type": "TStringField"}, "odsconstructionroofm": {"name": "ODSCONSTRUCTIONROOFM", "type": "TStringField"}, "odsconstructionarea": {"name": "ODSCONSTRUCTIONAREA", "type": "TFloatField"}, "odsconstructionapplicantspace": {"name": "ODSCONSTRUCTIONAPPLICANTSPACE", "type": "TFloatField"}, "odsconstructionearthquakedetails": {"name": "ODSCONSTRUCTIONEARTHQUAKEDETAILS", "type": "TStringField"}, "odsconstructionflamable": {"name": "ODSCONSTRUCTIONFLAMABLE", "type": "TStringField"}, "odsconstructionsurroindingdetails": {"name": "ODSCONSTRUCTIONSURROINDINGDETAILS", "type": "TStringField"}, "odsconstructionsitueted": {"name": "ODSCONSTRUCTIONSITUETED", "type": "TStringField"}, "odsconstructionguard": {"name": "ODSCONSTRUCTIONGUARD", "type": "TStringField"}, "odsconstructionalarm": {"name": "ODSCONSTRUCTIONALARM", "type": "TStringField"}, "odsconstructionlocks": {"name": "ODSCONSTRUCTIONLOCKS", "type": "TStringField"}, "odsconstructionsecuritylocks": {"name": "ODSCONSTRUCTIONSECURITYLOCKS", "type": "TStringField"}, "odsconstructionbars": {"name": "ODSCONSTRUCTIONBARS", "type": "TStringField"}, "odsconstructionother": {"name": "ODSCONSTRUCTIONOTHER", "type": "TStringField"}, "odsconstructionsettings": {"name": "ODSCONSTRUCTIONSETTINGS", "type": "TStringField"}, "odsconstructionrepair": {"name": "ODSCONSTRUCTIONREPAIR", "type": "TStringField"}, "odsconstructionheated": {"name": "ODSCONSTRUCTIONHEATED", "type": "TStringField"}, "odsconstructionriskid": {"name": "ODSCONSTRUCTIONRISKID", "type": "TFloatField"}, "odsconstructionannual": {"name": "ODSCONSTRUCTIONANNUAL", "type": "TFloatField"}, "odsconstructionwages": {"name": "ODSCONSTRUCTIONWAGES", "type": "TFloatField"}, "odsconstructionrent": {"name": "ODSCONSTRUCTIONRENT", "type": "TFloatField"}, "odsconstructionemployes": {"name": "ODSCONSTRUCTIONEMPLOYES", "type": "TFloatField"}, "odsconstructionexpirity": {"name": "ODSCONSTRUCTIONEXPIRITY", "type": "TDateTimeField"}, "odsconstructionlosshistory": {"name": "ODSCONSTRUCTIONLOSSHISTORY", "type": "TStringField"}, "odsconstructionrenewal": {"name": "ODSCONSTRUCTIONRENEWAL", "type": "TStringField"}, "odsconstructionthirdparty": {"name": "ODSCONSTRUCTIONTHIRDPARTY", "type": "TStringField"}, "odsconstructionotherinf": {"name": "ODSCONSTRUCTIONOTHERINF", "type": "TStringField"}, "odsconstructionindeminity": {"name": "ODSCONSTRUCTIONINDEMINITY", "type": "TStringField"}, "odsconstructionvaluetype": {"name": "ODSCONSTRUCTIONVALUETYPE", "type": "TStringField"}, "odsconstructionbuildings": {"name": "ODSCONSTRUCTIONBUILDINGS", "type": "TFloatField"}, "odsconstructionengineer": {"name": "ODSCONSTRUCTIONENGINEER", "type": "TFloatField"}, "odsconstructionexdeco": {"name": "ODSCONSTRUCTIONEXDECO", "type": "TFloatField"}, "odsconstructionindeco": {"name": "ODSCONSTRUCTIONINDECO", "type": "TFloatField"}, "odsconstructionfiresys": {"name": "ODSCONSTRUCTIONFIRESYS", "type": "TFloatField"}, "odsconstructiontypeid": {"name": "ODSCONSTRUCTIONTYPEID", "type": "TIntegerField"}, "plgpolicy": {"name": "PlgPolicy", "type": "TPlgModalContainer"}, "odsconstsuggestid": {"name": "ODSCONSTSUGGESTID", "type": "TFloatField"}, "odsconstsuggestcid": {"name": "ODSCONSTSUGGESTCID", "type": "TFloatField"}, "odsconstsuggestfrz_id": {"name": "ODSCONSTSUGGESTFRZ_ID", "type": "TFloatField"}, "odsconstsuggestcndt_id": {"name": "ODSCONSTSUGGESTCNDT_ID", "type": "TFloatField"}, "odsconstsuggestmlimit": {"name": "ODSCONSTSUGGESTMLIMIT", "type": "TFloatField"}, "odsconstsuggestrmlimit": {"name": "ODSCONSTSUGGESTRMLIMIT", "type": "TFloatField"}, "odsconstsuggestivaluemain": {"name": "ODSCONSTSUGGESTIVALUEMAIN", "type": "TFloatField"}, "odsconstsuggestrperiod": {"name": "ODSCONSTSUGGESTRPERIOD", "type": "TStringField"}, "odsconstsuggestrivalue": {"name": "ODSCONSTSUGGESTRIVALUE", "type": "TFloatField"}, "odsconstsuggestenddate": {"name": "ODSCONSTSUGGESTENDDATE", "type": "TDateTimeField"}, "odsconstsuggestrfrz_id": {"name": "ODSCONSTSUGGESTRFRZ_ID", "type": "TFloatField"}, "risks": {"name": "Risks", "type": "TOracleDataSet"}, "risksid": {"name": "RisksID", "type": "TFloatField"}, "risksname": {"name": "RisksNAME", "type": "TStringField"}, "risksdata": {"name": "RisksData", "type": "TDataSource"}, "dbedit9": {"name": "DBEdit9", "type": "TDBEdit"}, "label6": {"name": "Label6", "type": "TLabel"}, "odsconstructionprofitid": {"name": "ODSCONSTRUCTIONPROFITID", "type": "TFloatField"}, "odscontracts": {"name": "ODSContracts", "type": "TOracleDataSet"}, "odscontractsid": {"name": "ODSContractsID", "type": "TFloatField"}, "odscontractstype_id": {"name": "ODSContractsTYPE_ID", "type": "TFloatField"}, "odscontractsblank_id": {"name": "ODSContractsBLANK_ID", "type": "TFloatField"}, "odscontractssugg_id": {"name": "ODSContractsSUGG_ID", "type": "TFloatField"}, "odscontractspolicy_id": {"name": "ODSContractsPOLICY_ID", "type": "TFloatField"}, "odscontractsins_date": {"name": "ODSContractsINS_DATE", "type": "TDateTimeField"}, "odscontractsbegin_date": {"name": "ODSContractsBEGIN_DATE", "type": "TDateTimeField"}, "odscontractsend_date": {"name": "ODSContractsEND_DATE", "type": "TDateTimeField"}, "odscontractsvalute_id": {"name": "ODSContractsVALUTE_ID", "type": "TFloatField"}, "odscontractsammount": {"name": "ODSContractsAMMOUNT", "type": "TFloatField"}, "odscontractsclose_prefix": {"name": "ODSContractsCLOSE_PREFIX", "type": "TIntegerField"}, "odscontractskli_id": {"name": "ODSContractsKLI_ID", "type": "TFloatField"}, "odscontractsloanacc_id": {"name": "ODSContractsLOANACC_ID", "type": "TFloatField"}, "odscontractscurracc_id": {"name": "ODSContractsCURRACC_ID", "type": "TFloatField"}, "odscontractspolicy_num": {"name": "ODSContractsPOLICY_NUM", "type": "TStringField"}, "dscontracts": {"name": "DSContracts", "type": "TDataSource"}, "label19": {"name": "Label19", "type": "TLabel"}, "dblookupcombobox4": {"name": "DBLookupComboBox4", "type": "TDBLookupComboBox"}, "avalutedata": {"name": "AValuteData", "type": "TDataSource"}, "avalute": {"name": "AValute", "type": "TOracleDataSet"}, "avalutevalu_name": {"name": "AValuteVALU_NAME", "type": "TStringField"}, "avalutevalute": {"name": "AValuteVALUTE", "type": "TIntegerField"}, "avaluteval_name": {"name": "AValuteVAL_NAME", "type": "TStringField"}, "avalutevalu_short": {"name": "AValuteVALU_SHORT", "type": "TStringField"}, "odsconstsuggestval_id": {"name": "ODSCONSTSUGGESTVAL_ID", "type": "TFloatField"}, "odsinterest": {"name": "ODSInterest", "type": "TOracleDataSet"}, "floatfield1": {"name": "FloatField1", "type": "TFloatField"}, "interestsource": {"name": "InterestSource", "type": "TDataSource"}, "dblookupcombobox5": {"name": "DBLookupComboBox5", "type": "TDBLookupComboBox"}, "odsconstsuggestinter_id": {"name": "ODSCONSTSUGGESTINTER_ID", "type": "TFloatField"}, "odsinterestname": {"name": "ODSInterestNAME", "type": "TStringField"}, "meminterest": {"name": "MemInterest", "type": "TMemo"}, "cbinterest": {"name": "cbInterest", "type": "TCheckBox"}, "id": {"name": "id", "type": "Integer"}, "fparams": {"name": "FParams", "type": "TStrings"}, "fownerhandle": {"name": "FOwnerHandle", "type": "Integer"}, "f": {"name": "f", "type": "boolean"}, "fevents": {"name": "FEvents", "type": "IConstructionSuggestEvents"}}, {"params": {"name": "Params", "read": "Get_Params", "write": "Set_Params"}});
  U.init(async () => {
    U.const("WM_ModalResult", $.add((await $.v(C, "WM_USER")), 139));
    U.const("fmCaption", "Teklifname: (%s)");
    U.var_("ConstructionSuggest", null, "TConstructionSuggest");
  });
  U.method("TConstructionSuggest", "DefinePropertyPages", async function DefinePropertyPages(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"definepropertypage": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["definepropertypage"]);
  return L0.result;
}, {"params": ["DefinePropertyPage"], "kind": "procedure", "ptypes": ["TDefinePropertyPage"]});
  U.method("TConstructionSuggest", "EventSinkChanged", async function EventSinkChanged(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"eventsink": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["eventsink"]);
  await $.set(C, "FEvents", L0["eventsink"]);
  return L0.result;
}, {"params": ["EventSink"], "kind": "procedure", "ptypes": ["IUnknown"]});
  U.method("TConstructionSuggest", "Initialize", async function Initialize(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: undefined};
  await $.inherited(Self, "TConstructionSuggest", "Initialize", null, arguments);
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
  U.method("TConstructionSuggest", "Get_Active", async function Get_Active(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: false};
  L0["result"] = (await $.v(C, "Active"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TConstructionSuggest", "Get_AutoScroll", async function Get_AutoScroll(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: false};
  L0["result"] = (await $.v(C, "AutoScroll"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TConstructionSuggest", "Get_AutoSize", async function Get_AutoSize(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: false};
  L0["result"] = (await $.v(C, "AutoSize"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TConstructionSuggest", "Get_AxBorderStyle", async function Get_AxBorderStyle(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: null};
  L0["result"] = (await $.call(C, "Ord", [(await $.v(C, "AxBorderStyle"))]));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TConstructionSuggest", "Get_Caption", async function Get_Caption(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: ''};
  L0["result"] = (await $.call(C, "WideString", [(await $.v(C, "Caption"))]));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TConstructionSuggest", "Get_Color", async function Get_Color(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: null};
  L0["result"] = (await $.call(C, "OLE_COLOR", [(await $.v(C, "Color"))]));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TConstructionSuggest", "Get_Cursor", async function Get_Cursor(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: 0};
  L0["result"] = (await $.call(C, "Smallint", [(await $.v(C, "Cursor"))]));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TConstructionSuggest", "Get_DoubleBuffered", async function Get_DoubleBuffered(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: false};
  L0["result"] = (await $.v(C, "DoubleBuffered"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TConstructionSuggest", "Get_DropTarget", async function Get_DropTarget(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: false};
  L0["result"] = (await $.v(C, "DropTarget"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TConstructionSuggest", "Get_Enabled", async function Get_Enabled(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: false};
  L0["result"] = (await $.v(C, "Enabled"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TConstructionSuggest", "Get_Font", async function Get_Font(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: null};
  await $.stmt((await $.call(C, "GetOleFont", [(await $.v(C, "Font")), L0["result"]])));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TConstructionSuggest", "Get_HelpFile", async function Get_HelpFile(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: ''};
  L0["result"] = (await $.call(C, "WideString", [(await $.v(C, "HelpFile"))]));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TConstructionSuggest", "Get_KeyPreview", async function Get_KeyPreview(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: false};
  L0["result"] = (await $.v(C, "KeyPreview"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TConstructionSuggest", "Get_PixelsPerInch", async function Get_PixelsPerInch(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: 0};
  L0["result"] = (await $.v(C, "PixelsPerInch"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TConstructionSuggest", "Get_PrintScale", async function Get_PrintScale(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: null};
  L0["result"] = (await $.call(C, "Ord", [(await $.v(C, "PrintScale"))]));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TConstructionSuggest", "Get_Scaled", async function Get_Scaled(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: false};
  L0["result"] = (await $.v(C, "Scaled"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TConstructionSuggest", "Get_Visible", async function Get_Visible(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: false};
  L0["result"] = (await $.v(C, "Visible"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TConstructionSuggest", "Get_VisibleDockClientCount", async function Get_VisibleDockClientCount(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: 0};
  L0["result"] = (await $.v(C, "VisibleDockClientCount"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TConstructionSuggest", "_Set_Font", async function _Set_Font(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.stmt((await $.call(C, "SetOleFont", [(await $.v(C, "Font")), L0["value"]])));
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["IFontDisp"]});
  U.method("TConstructionSuggest", "ActivateEvent", async function ActivateEvent(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.ne((await $.v(C, "FEvents")), null))) {
    await $.mcall((await $.v(C, "FEvents")), "OnActivate", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TConstructionSuggest", "ClickEvent", async function ClickEvent(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.ne((await $.v(C, "FEvents")), null))) {
    await $.mcall((await $.v(C, "FEvents")), "OnClick", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TConstructionSuggest", "CreateEvent", async function CreateEvent(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.ne((await $.v(C, "FEvents")), null))) {
    await $.mcall((await $.v(C, "FEvents")), "OnCreate", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TConstructionSuggest", "DblClickEvent", async function DblClickEvent(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.ne((await $.v(C, "FEvents")), null))) {
    await $.mcall((await $.v(C, "FEvents")), "OnDblClick", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TConstructionSuggest", "DeactivateEvent", async function DeactivateEvent(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.ne((await $.v(C, "FEvents")), null))) {
    await $.mcall((await $.v(C, "FEvents")), "OnDeactivate", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TConstructionSuggest", "DestroyEvent", async function DestroyEvent(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.ne((await $.v(C, "FEvents")), null))) {
    await $.mcall((await $.v(C, "FEvents")), "OnDestroy", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TConstructionSuggest", "KeyPressEvent", async function KeyPressEvent(Self, p0, p1) {
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
  U.method("TConstructionSuggest", "PaintEvent", async function PaintEvent(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.ne((await $.v(C, "FEvents")), null))) {
    await $.mcall((await $.v(C, "FEvents")), "OnPaint", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TConstructionSuggest", "Set_AutoScroll", async function Set_AutoScroll(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "AutoScroll", L0["value"]);
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["WordBool"]});
  U.method("TConstructionSuggest", "Set_AutoSize", async function Set_AutoSize(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "AutoSize", L0["value"]);
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["WordBool"]});
  U.method("TConstructionSuggest", "Set_AxBorderStyle", async function Set_AxBorderStyle(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "AxBorderStyle", (await $.call(C, "TActiveFormBorderStyle", [L0["value"]])));
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["TxActiveFormBorderStyle"]});
  U.method("TConstructionSuggest", "Set_Caption", async function Set_Caption(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "Caption", (await $.call(C, "TCaption", [L0["value"]])));
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["WideString"]});
  U.method("TConstructionSuggest", "Set_Color", async function Set_Color(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "Color", (await $.call(C, "TColor", [L0["value"]])));
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["OLE_COLOR"]});
  U.method("TConstructionSuggest", "Set_Cursor", async function Set_Cursor(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "Cursor", (await $.call(C, "TCursor", [L0["value"]])));
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["Smallint"]});
  U.method("TConstructionSuggest", "Set_DoubleBuffered", async function Set_DoubleBuffered(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "DoubleBuffered", L0["value"]);
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["WordBool"]});
  U.method("TConstructionSuggest", "Set_DropTarget", async function Set_DropTarget(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "DropTarget", L0["value"]);
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["WordBool"]});
  U.method("TConstructionSuggest", "Set_Enabled", async function Set_Enabled(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "Enabled", L0["value"]);
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["WordBool"]});
  U.method("TConstructionSuggest", "Set_Font", async function Set_Font(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.asRef(p0), result: undefined};
  await $.stmt((await $.call(C, "SetOleFont", [(await $.v(C, "Font")), (await L0["value"].get())])));
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["IFontDisp"]});
  U.method("TConstructionSuggest", "Set_HelpFile", async function Set_HelpFile(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "HelpFile", (await $.call(C, "String", [L0["value"]])));
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["WideString"]});
  U.method("TConstructionSuggest", "Set_KeyPreview", async function Set_KeyPreview(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "KeyPreview", L0["value"]);
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["WordBool"]});
  U.method("TConstructionSuggest", "Set_PixelsPerInch", async function Set_PixelsPerInch(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "PixelsPerInch", L0["value"]);
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["Integer"]});
  U.method("TConstructionSuggest", "Set_PrintScale", async function Set_PrintScale(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "PrintScale", (await $.call(C, "TPrintScale", [L0["value"]])));
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["TxPrintScale"]});
  U.method("TConstructionSuggest", "Set_Scaled", async function Set_Scaled(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "Scaled", L0["value"]);
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["WordBool"]});
  U.method("TConstructionSuggest", "Set_Visible", async function Set_Visible(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "Visible", L0["value"]);
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["WordBool"]});
  U.method("TConstructionSuggest", "Get_Owner", async function Get_Owner(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: 0};
  L0["result"] = (await $.v(C, "handle"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TConstructionSuggest", "Set_Owner", async function Set_Owner(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"val": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["val"]);
  if ($.truthy($.gt(L0["val"], 0))) {
    await $.set(C, "FOwnerHandle", L0["val"]);
  }
  return L0.result;
}, {"params": ["val"], "kind": "procedure", "ptypes": ["Integer"]});
  U.method("TConstructionSuggest", "Get_Params", async function Get_Params(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"name": $.copyArg(p0), result: null};
  await $.fixArgs(L0, ["name"]);
  L0["result"] = (await $.idx((await $.mv((await $.v(C, "FParams")), "Values")), [L0["name"]]));
  return L0.result;
}, {"params": ["Name"], "kind": "function", "ptypes": ["WideString"]});
  U.method("TConstructionSuggest", "Set_Params", async function Set_Params(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"name": $.copyArg(p0), "value": $.copyArg(p1), result: undefined};
  await $.fixArgs(L0, ["name", "value"]);
  { const $t1 = await $.iset((await $.mv((await $.v(C, "FParams")), "Values")), [L0["name"]], L0["value"]); if ($t1 !== undefined) { await $.mset((await $.v(C, "FParams")), "Values", $t1); } }
  return L0.result;
}, {"params": ["Name", "Value"], "kind": "procedure", "ptypes": ["WideString", "OleVariant"]});
  U.method("TConstructionSuggest", "InstanceInitialize", async function InstanceInitialize(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: null};
  L0["result"] = (await $.v(C, "S_OK"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TConstructionSuggest", "Cleanup", async function Cleanup(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: null};
  L0["result"] = (await $.v(C, "S_OK"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TConstructionSuggest", "UIObjectActivate", async function UIObjectActivate(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: null};
  await $.set(C, "id", (await $.call(C, "StrToInt", [(await $.call(C, "Get_Params", ["ID"]))])));
  await $.set(C, "f", true);
  await $.stmt((await $.mcall((await $.v(C, "ODSConstruction")), "Locate", ["id", (await $.v(C, "id")), []])));
  await $.mcall((await $.v(C, "ODSContracts")), "Close", []);
  await $.stmt((await $.mcall((await $.v(C, "ODSContracts")), "SetVariable", ["blankid", (await $.mv((await $.v(C, "ODSConstructionID")), "value"))])));
  await $.mcall((await $.v(C, "ODSContracts")), "Open", []);
  await $.mcall((await $.v(C, "ODSCONSTSUGGEST")), "CloseAll", []);
  await $.stmt((await $.mcall((await $.v(C, "ODSCONSTSUGGEST")), "SetVariable", ["cid", (await $.v(C, "id"))])));
  await $.mcall((await $.v(C, "ODSConstSuggest")), "Open", []);
  if ($.truthy($.lt((await $.mv((await $.v(C, "ODSConstSuggest")), "RecordCount")), 1))) {
    await $.mset((await $.v(C, "DTPContractDate")), "DateTime", (await $.v(C, "Now")));
    await $.set(C, "Caption", (await $.call(C, "format", [(await $.v(C, "fmCaption")), ["Elave"]])));
  } else {
    await $.set(C, "Caption", (await $.call(C, "format", [(await $.v(C, "fmCaption")), ["Redakte"]])));
  }
  if ($.truthy($.eq((await $.mv((await $.v(C, "ODSCONSTSUGGESTId")), "Value")), 0))) {
    await $.mset((await $.v(C, "btPrint")), "Enabled", false);
    await $.mset((await $.v(C, "btPolicy")), "Enabled", false);
  }
  await $.stmt($.call(C, "LoadData", []));
  await $.mcall((await $.v(C, "ODSConstSuggest")), "Edit", []);
  L0["result"] = (await $.v(C, "S_OK"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TConstructionSuggest", "QueryDeactivate", async function QueryDeactivate(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: null};
  L0["result"] = (await $.v(C, "S_OK"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TConstructionSuggest", "UIObjectDeactivate", async function UIObjectDeactivate(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: null};
  L0["result"] = (await $.v(C, "S_OK"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TConstructionSuggest", "SaveState", async function SaveState(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: null};
  L0["result"] = (await $.v(C, "S_OK"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TConstructionSuggest", "Get_Height", async function Get_Height(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: 0};
  L0["result"] = (await $.v(C, "Height"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TConstructionSuggest", "Get_Width", async function Get_Width(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: 0};
  L0["result"] = (await $.v(C, "Width"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TConstructionSuggest", "ActiveFormCreate", async function ActiveFormCreate(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.set(C, "ConstructionSuggest", Self);
  await $.set(C, "FParams", (await $.mv((await $.v(C, "TStringList")), "Create")));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TConstructionSuggest", "BitBtn2Click", async function BitBtn2Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.stmt((await $.call(C, "PostMessage", [(await $.v(C, "FOwnerHandle")), (await $.v(C, "WM_ModalResult")), (await $.v(C, "mrCancel")), 0])));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TConstructionSuggest", "LoadData", async function LoadData(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: undefined};
  await $.mset((await $.v(C, "DTPContractDate")), "DateTime", (await $.mv((await $.mcall((await $.v(C, "ODSConstSuggest")), "FieldByName", ["enddate"])), "AsDateTime")));
  return L0.result;
}, {"params": [], "kind": "procedure", "ptypes": []});
  U.method("TConstructionSuggest", "SaveData", async function SaveData(Self) {
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
      const $t3 = (await $.v(C, "Conditions"));
      await $.stmt($.wcall([$t3], "Insert", [], C));
      await $.mset((await $.wcall([$t3], "FieldByName", ["name"], C)), "asString", (await $.mv((await $.wv([$t3], "memConditions", C, false)), "Text")));
      await $.stmt($.wcall([$t3], "Post", [], C));
      await $.stmt($.wcall([$t3], "RefreshRecord", [], C));
    }
  }
  if ($.truthy($.eq((await $.mv((await $.v(C, "cbInterest")), "State")), (await $.v(C, "cbChecked"))))) {
    {
      const $t4 = (await $.v(C, "ODSInterest"));
      await $.stmt($.wcall([$t4], "Insert", [], C));
      await $.mset((await $.wcall([$t4], "FieldByName", ["name"], C)), "asString", (await $.mv((await $.wv([$t4], "memInterest", C, false)), "Text")));
      await $.stmt($.wcall([$t4], "Post", [], C));
      await $.stmt($.wcall([$t4], "RefreshRecord", [], C));
    }
  }
  {
    const $t5 = (await $.v(C, "ODSConstSuggest"));
    await $.mset((await $.wcall([$t5], "FieldByName", ["cid"], C)), "AsFloat", (await $.wv([$t5], "id", C, false)));
    await $.mset((await $.wcall([$t5], "FieldByName", ["frz_id"], C)), "AsFloat", (await $.mv((await $.mcall((await $.wv([$t5], "Franshiz", C, false)), "FieldByName", ["id"])), "asFloat")));
    await $.mset((await $.wcall([$t5], "FieldByName", ["rfrz_id"], C)), "AsFloat", (await $.mv((await $.mcall((await $.wv([$t5], "Franshiz", C, false)), "FieldByName", ["id"])), "asFloat")));
    await $.mset((await $.wcall([$t5], "FieldByName", ["cndt_id"], C)), "AsFloat", (await $.mv((await $.mcall((await $.wv([$t5], "Conditions", C, false)), "FieldByName", ["id"])), "asFloat")));
    await $.mset((await $.wcall([$t5], "FieldByName", ["inter_id"], C)), "AsFloat", (await $.mv((await $.mcall((await $.wv([$t5], "ODSInterest", C, false)), "FieldByName", ["id"])), "asFloat")));
    await $.mset((await $.wcall([$t5], "FieldByName", ["enddate"], C)), "AsDateTime", (await $.mv((await $.wv([$t5], "DTPContractDate", C, false)), "DateTime")));
    if ($.truthy($.in_((await $.wv([$t5], "State", C, false)), [(await $.wv([$t5], "dsInsert", C, false)), (await $.wv([$t5], "dsEdit", C, false))]))) {
      await $.stmt($.wcall([$t5], "Post", [], C));
    }
    await $.stmt((await $.wcall([$t5], "RefreshRecord", [], C)));
    if ($.truthy((await $.wv([$t5], "f", C, false)))) {
      await $.mcall((await $.wv([$t5], "ODSContracts", C, false)), "Edit", []);
      await $.mset((await $.mcall((await $.wv([$t5], "ODSContracts", C, false)), "FieldByName", ["sugg_id"])), "AsFloat", (await $.mv((await $.wcall([$t5], "FieldByName", ["id"], C)), "asFloat")));
      await $.mset((await $.mcall((await $.wv([$t5], "ODSContracts", C, false)), "FieldByName", ["ins_date"])), "AsDateTime", (await $.mv((await $.wv([$t5], "DTPContractDate", C, false)), "DateTime")));
      await $.mcall((await $.wv([$t5], "ODSContracts", C, false)), "Post", []);
    }
    await $.wset([$t5], "f", (await $.wv([$t5], "false", C, false)), C);
    await $.wset([$t5], "result", (await $.wv([$t5], "True", C, false)), { get: async () => L0["result"], set: async (v) => { L0["result"] = v; }, local: true });
  }
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TConstructionSuggest", "BitBtn1Click", async function BitBtn1Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy((await $.call(C, "SaveData", [])))) {
    await $.stmt((await $.call(C, "PostMessage", [(await $.v(C, "FOwnerHandle")), (await $.v(C, "WM_ModalResult")), (await $.v(C, "mrOk")), 0])));
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TConstructionSuggest", "DBLookupComboBox3Click", async function DBLookupComboBox3Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t6 = (await $.v(C, "Franshiz"));
    await $.mset((await $.wv([$t6], "MemoRFranshiz", C, false)), "Text", (await $.mv((await $.wcall([$t6], "FieldByName", ["name"], C)), "asString")));
  }
  await $.mset((await $.v(C, "btApply")), "Enabled", true);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TConstructionSuggest", "DBLookupComboBoxConditionClick", async function DBLookupComboBoxConditionClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t7 = (await $.v(C, "Conditions"));
    await $.mset((await $.wv([$t7], "memConditions", C, false)), "Text", (await $.mv((await $.wcall([$t7], "FieldByName", ["name"], C)), "asString")));
  }
  await $.mset((await $.v(C, "btApply")), "Enabled", true);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TConstructionSuggest", "ETimeKeyPress", async function ETimeKeyPress(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "key": $.asRef(p1), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.eq((await L0["key"].get()), "\r"))) {
    if ($.truthy($.ne((await $.call(C, "HiWord", [(await $.call(C, "GetKeyState", [(await $.v(C, "VK_Shift"))]))])), 0))) {
      {
        const $t8 = L0["sender"];
        await $.stmt((await $.wcall([$t8], "SelectNext", [(await $.wv([$t8], "ActiveControl", C, false)), (await $.wv([$t8], "False", C, false)), (await $.wv([$t8], "True", C, false))], C)));
      }
    } else {
      {
        const $t9 = L0["sender"];
        await $.stmt((await $.wcall([$t9], "SelectNext", [(await $.wv([$t9], "ActiveControl", C, false)), (await $.wv([$t9], "True", C, false)), (await $.wv([$t9], "True", C, false))], C)));
      }
    }
    await L0["key"].set("\u0000");
  }
  return L0.result;
}, {"params": ["Sender", "Key"], "kind": "procedure", "ptypes": ["TObject", "Char"]});
  U.method("TConstructionSuggest", "DBLookupComboBoxFranshizClick", async function DBLookupComboBoxFranshizClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t10 = (await $.v(C, "Franshiz"));
    await $.mset((await $.wv([$t10], "memFrashize", C, false)), "Text", (await $.mv((await $.wcall([$t10], "FieldByName", ["name"], C)), "asString")));
  }
  await $.mset((await $.v(C, "btApply")), "Enabled", true);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TConstructionSuggest", "DTPContractDateChange", async function DTPContractDateChange(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "key": ''};
  await $.fixArgs(L0, ["sender"]);
  await $.stmt((await $.call(C, "ETimeKeyPress", [L0["sender"], $.ref(async () => L0["key"], async ($t11) => { L0["key"] = $t11; })])));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TConstructionSuggest", "ODSCONSTSUGGESTNewRecord", async function ODSCONSTSUGGESTNewRecord(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"dataset": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["dataset"]);
  await $.mset((await $.mcall(L0["dataset"], "FieldByName", ["ID"])), "AsInteger", (await $.mcall((await $.v(C, "PINS_construction")), "CallIntegerFunction", ["generateSugID", []])));
  return L0.result;
}, {"params": ["DataSet"], "kind": "procedure", "ptypes": ["TDataSet"]});
  U.method("TConstructionSuggest", "btPrintClick", async function btPrintClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.stmt((await $.mcall((await $.v(C, "ODSInterest")), "Locate", ["id", (await $.mv((await $.v(C, "ODSCONSTSUGGESTInter_ID")), "Value")), []])));
  await $.stmt((await $.mcall((await $.v(C, "AValute")), "Locate", ["valute", (await $.mv((await $.v(C, "ODSCOntractsValute_ID")), "Value")), []])));
  try {
    {
      const $t12 = (await $.v(C, "ConstructionWordExporter"));
      await $.wset([$t12], "FileName", $.add((await $.wcall([$t12], "ExtractFilePath", [(await $.mv((await $.wv([$t12], "Application", C, false)), "ExeName"))], C)), "\\ConstructionSuggest.doc"), C);
      await $.stmt((await $.wcall([$t12], "Open", [(await $.wv([$t12], "False", C, false))], C)));
      await $.stmt((await $.wcall([$t12], "SetBookmark", ["Insured", (await $.mv((await $.wv([$t12], "CustomersName", C, false)), "value")), (await $.wv([$t12], "false", C, false)), (await $.wv([$t12], "false", C, false)), (await $.wv([$t12], "False", C, false)), (await $.wv([$t12], "false", C, false)), 8, "Arial AzLat", (await $.wv([$t12], "False", C, false))], C)));
      await $.stmt((await $.wcall([$t12], "SetBookmark", ["IAddress", (await $.mv((await $.wv([$t12], "CustomersAddress", C, false)), "value")), (await $.wv([$t12], "false", C, false)), (await $.wv([$t12], "false", C, false)), (await $.wv([$t12], "False", C, false)), (await $.wv([$t12], "false", C, false)), 8, "Arial AzLat", (await $.wv([$t12], "False", C, false))], C)));
      await $.stmt((await $.wcall([$t12], "SetBookmark", ["IPeriod", $.add($.add((await $.wcall([$t12], "DateToStr", [(await $.mv((await $.wv([$t12], "ODSContractsBegin_date", C, false)), "value"))], C)), " - "), (await $.wcall([$t12], "DateToStr", [(await $.mv((await $.wv([$t12], "ODSContractsEnd_date", C, false)), "value"))], C))), (await $.wv([$t12], "false", C, false)), (await $.wv([$t12], "false", C, false)), (await $.wv([$t12], "False", C, false)), (await $.wv([$t12], "false", C, false)), 8, "Arial AzLat", (await $.wv([$t12], "False", C, false))], C)));
      await $.stmt((await $.wcall([$t12], "SetBookmark", ["MLimit", (await $.wcall([$t12], "CurrToStr", [(await $.mv((await $.wv([$t12], "ODSCONSTSUGGESTMLimit", C, false)), "value"))], C)), (await $.wv([$t12], "false", C, false)), (await $.wv([$t12], "false", C, false)), (await $.wv([$t12], "False", C, false)), (await $.wv([$t12], "false", C, false)), 8, "Arial AzLat", (await $.wv([$t12], "False", C, false))], C)));
      await $.stmt((await $.wcall([$t12], "SetBookmark", ["Franshiz", (await $.mv((await $.wv([$t12], "FranshizName", C, false)), "value")), (await $.wv([$t12], "false", C, false)), (await $.wv([$t12], "false", C, false)), (await $.wv([$t12], "False", C, false)), (await $.wv([$t12], "false", C, false)), 8, "Arial AzLat", (await $.wv([$t12], "False", C, false))], C)));
      await $.stmt((await $.wcall([$t12], "SetBookmark", ["IValue", (await $.wcall([$t12], "CurrToStr", [(await $.mv((await $.wv([$t12], "ODSCONtractsAmmount", C, false)), "value"))], C)), (await $.wv([$t12], "false", C, false)), (await $.wv([$t12], "false", C, false)), (await $.wv([$t12], "False", C, false)), (await $.wv([$t12], "false", C, false)), 8, "Arial AzLat", (await $.wv([$t12], "False", C, false))], C)));
      await $.stmt((await $.wcall([$t12], "SetBookmark", ["RMLimit", $.add($.add((await $.wcall([$t12], "CurrToStr", [(await $.mv((await $.wv([$t12], "ODSCONSTSUGGESTRMLimit", C, false)), "value"))], C)), " "), (await $.mv((await $.wv([$t12], "AValuteValu_name", C, false)), "value"))), (await $.wv([$t12], "false", C, false)), (await $.wv([$t12], "false", C, false)), (await $.wv([$t12], "False", C, false)), (await $.wv([$t12], "false", C, false)), 8, "Arial AzLat", (await $.wv([$t12], "False", C, false))], C)));
      await $.stmt((await $.wcall([$t12], "SetBookmark", ["RFranshiz", (await $.mv((await $.wv([$t12], "FranshizName", C, false)), "value")), (await $.wv([$t12], "false", C, false)), (await $.wv([$t12], "false", C, false)), (await $.wv([$t12], "False", C, false)), (await $.wv([$t12], "false", C, false)), 8, "Arial AzLat", (await $.wv([$t12], "False", C, false))], C)));
      await $.stmt((await $.wcall([$t12], "SetBookmark", ["Inter", (await $.mv((await $.wv([$t12], "ODSInterestName", C, false)), "value")), (await $.wv([$t12], "false", C, false)), (await $.wv([$t12], "false", C, false)), (await $.wv([$t12], "False", C, false)), (await $.wv([$t12], "false", C, false)), 8, "Arial AzLat", (await $.wv([$t12], "False", C, false))], C)));
      await $.stmt((await $.wcall([$t12], "SetBookmark", ["IValueMain", (await $.wcall([$t12], "CurrToStr", [(await $.mv((await $.wv([$t12], "ODSCONSTSUGGESTIValueMain", C, false)), "value"))], C)), (await $.wv([$t12], "false", C, false)), (await $.wv([$t12], "false", C, false)), (await $.wv([$t12], "False", C, false)), (await $.wv([$t12], "false", C, false)), 8, "Arial AzLat", (await $.wv([$t12], "False", C, false))], C)));
      await $.stmt((await $.wcall([$t12], "SetBookmark", ["Employees", (await $.wcall([$t12], "CurrToStr", [(await $.mv((await $.wv([$t12], "ODSCONSTRUCTIONEmployes", C, false)), "value"))], C)), (await $.wv([$t12], "false", C, false)), (await $.wv([$t12], "false", C, false)), (await $.wv([$t12], "False", C, false)), (await $.wv([$t12], "false", C, false)), 8, "Arial AzLat", (await $.wv([$t12], "False", C, false))], C)));
      await $.stmt((await $.wcall([$t12], "SetBookmark", ["RIPeriod", (await $.mv((await $.wv([$t12], "ODSCONSTSUGGESTRPeriod", C, false)), "value")), (await $.wv([$t12], "false", C, false)), (await $.wv([$t12], "false", C, false)), (await $.wv([$t12], "False", C, false)), (await $.wv([$t12], "false", C, false)), 8, "Arial AzLat", (await $.wv([$t12], "False", C, false))], C)));
      await $.stmt((await $.wcall([$t12], "SetBookmark", ["RIValue", (await $.wcall([$t12], "CurrToStr", [(await $.mv((await $.wv([$t12], "ODSCONSTSUGGESTRIValue", C, false)), "value"))], C)), (await $.wv([$t12], "false", C, false)), (await $.wv([$t12], "false", C, false)), (await $.wv([$t12], "False", C, false)), (await $.wv([$t12], "false", C, false)), 8, "Arial AzLat", (await $.wv([$t12], "False", C, false))], C)));
      await $.stmt((await $.wcall([$t12], "SetBookmark", ["Cond", (await $.mv((await $.wv([$t12], "ConditionsName", C, false)), "value")), (await $.wv([$t12], "false", C, false)), (await $.wv([$t12], "false", C, false)), (await $.wv([$t12], "False", C, false)), (await $.wv([$t12], "false", C, false)), 8, "Arial AzLat", (await $.wv([$t12], "False", C, false))], C)));
      await $.stmt((await $.wcall([$t12], "SetBookmark", ["EDate", (await $.wcall([$t12], "DateToStr", [(await $.mv((await $.wv([$t12], "ODSCONSTSUGGESTEndDate", C, false)), "value"))], C)), (await $.wv([$t12], "false", C, false)), (await $.wv([$t12], "false", C, false)), (await $.wv([$t12], "False", C, false)), (await $.wv([$t12], "false", C, false)), 8, "Arial AzLat", (await $.wv([$t12], "False", C, false))], C)));
    }
  } finally {
    await $.mcall((await $.v(C, "ConstructionWordExporter")), "Show", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TConstructionSuggest", "btPolicyClick", async function btPolicyClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "p": null};
  await $.fixArgs(L0, ["sender"]);
  L0["p"] = (await $.mv((await $.v(C, "TStringList")), "Create"));
  { const $t13 = await $.iset((await $.mv(L0["p"], "Values")), ["id"], (await $.call(C, "FloatToStr", [(await $.mv((await $.v(C, "ODSCONSTRUCTIONId")), "value"))]))); if ($t13 !== undefined) { await $.mset(L0["p"], "Values", $t13); } }
  { const $t14 = await $.iset((await $.mv(L0["p"], "Values")), ["fid"], (await $.call(C, "FloatToStr", [(await $.mv((await $.v(C, "ODSCONSTSUGGESTfrz_id")), "Value"))]))); if ($t14 !== undefined) { await $.mset(L0["p"], "Values", $t14); } }
  { const $t15 = await $.iset((await $.mv(L0["p"], "Values")), ["cdid"], (await $.call(C, "FloatToStr", [(await $.mv((await $.v(C, "ODSCONSTSUGGESTCNDT_id")), "Value"))]))); if ($t15 !== undefined) { await $.mset(L0["p"], "Values", $t15); } }
  { const $t16 = await $.iset((await $.mv(L0["p"], "Values")), ["riskid"], (await $.call(C, "FloatToStr", [(await $.mv((await $.v(C, "ODSCONSTRUCTIONRiskId")), "value"))]))); if ($t16 !== undefined) { await $.mset(L0["p"], "Values", $t16); } }
  { const $t17 = await $.iset((await $.mv(L0["p"], "Values")), ["Mod"], "Insert"); if ($t17 !== undefined) { await $.mset(L0["p"], "Values", $t17); } }
  {
    const $t18 = (await $.v(C, "plgPolicy"));
    await $.stmt((await $.wcall([$t18], "ShowModal", [(await $.wcall([$t18], "StringToGuid", ["{FEE93B74-CDCF-49A1-A5D9-84162C91971C}"], C)), (await $.wv([$t18], "p", { get: async () => L0["p"], set: async (v) => { L0["p"] = v; }, local: true }, false))], C)));
  }
  await $.mcall(L0["p"], "Free", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TConstructionSuggest", "btApplyClick", async function btApplyClick(Self, p0) {
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
  U.method("TConstructionSuggest", "DBEdit2Change", async function DBEdit2Change(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mset((await $.v(C, "btApply")), "Enabled", true);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  return U;
}
