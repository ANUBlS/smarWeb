// Generated from CustomersInformationsImpl.pas by pas2js — do not edit by hand; regenerate instead.
/* eslint-disable */
// @ts-nocheck

export default function define($) {
  const U = $.unit("CustomersInformationsImpl", ["Windows", "Messages", "SysUtils", "Classes", "Graphics", "Controls", "Forms", "Dialogs", "ActiveX", "AxCtrls", "Customers_Informations_TLB", "StdVcl", "StdCtrls", "Grids", "DBGrids", "Db", "OracleData", "ExtCtrls", "ComCtrls", "SearchCombo", "Buttons", "CheckLst", "Mask", "DBCtrls", "ExcelExporter", "ImgList", "ShlObj", "CMExcelExport", "SBPlgAx50_TLB", "QExport4", "QExport4Xlsx", "QExport4Dialog", "ComObj", "ComServ", "SboapiDataModuleImpl", "SBTranslateProc"]);
  const C = [U];
  U.defClass("TCustomersInformations", "TActiveForm", {"ordscustomers": {"name": "OrDSCustomers", "type": "TOracleDataSet"}, "datasourcecustomers": {"name": "DataSourceCustomers", "type": "TDataSource"}, "ordscustomersid": {"name": "OrDSCustomersID", "type": "TIntegerField"}, "ordscustomersopen_dat": {"name": "OrDSCustomersOPEN_DAT", "type": "TDateTimeField"}, "ordscustomersclose_dat": {"name": "OrDSCustomersCLOSE_DAT", "type": "TDateTimeField"}, "ordsdates": {"name": "OrDSDates", "type": "TOracleDataSet"}, "ordsaccount": {"name": "OrDSAccount", "type": "TOracleDataSet"}, "datasourceaccount": {"name": "DataSourceAccount", "type": "TDataSource"}, "ordssysdat": {"name": "OrDSSysDat", "type": "TOracleDataSet"}, "ordssysdattek_dat": {"name": "OrDSSysDatTEK_DAT", "type": "TDateTimeField"}, "panelaltop": {"name": "PanelAlTop", "type": "TPanel"}, "label1": {"name": "Label1", "type": "TLabel"}, "searchcfilial": {"name": "SearchCFilial", "type": "TSearchCombo"}, "ordsfilials": {"name": "OrDSFilials", "type": "TOracleDataSet"}, "datasourcefilial": {"name": "DataSourceFilial", "type": "TDataSource"}, "ordsfilialsid": {"name": "OrDSFilialsID", "type": "TFloatField"}, "ordsaccountopen_dat": {"name": "OrDSAccountOPEN_DAT", "type": "TDateTimeField"}, "ordsaccountclose_dat": {"name": "OrDSAccountCLOSE_DAT", "type": "TDateTimeField"}, "ordsavalute": {"name": "OrDSAvalute", "type": "TOracleDataSet"}, "datasourceavalute": {"name": "DataSourceAvalute", "type": "TDataSource"}, "ordsavalutevalute": {"name": "OrDSAvaluteVALUTE", "type": "TIntegerField"}, "ordsdocs": {"name": "OrDSDocs", "type": "TOracleDataSet"}, "datasourcedocs": {"name": "DataSourceDocs", "type": "TDataSource"}, "ordsdocsdat": {"name": "OrDSDocsDAT", "type": "TDateTimeField"}, "ordsdocsammount": {"name": "OrDSDocsAMMOUNT", "type": "TFloatField"}, "ordsdocslammount": {"name": "OrDSDocsLAMMOUNT", "type": "TFloatField"}, "ordsdocsammount_c": {"name": "OrDSDocsAMMOUNT_C", "type": "TFloatField"}, "panel1": {"name": "Panel1", "type": "TPanel"}, "dbgridcustomers": {"name": "DBGridCustomers", "type": "TDBGrid"}, "dbgridaccounts": {"name": "DBGridAccounts", "type": "TDBGrid"}, "dbgriddocs": {"name": "DBGridDocs", "type": "TDBGrid"}, "panel2": {"name": "Panel2", "type": "TPanel"}, "grboxcustomers": {"name": "GrBoxCustomers", "type": "TGroupBox"}, "grboxcustdates": {"name": "GrBoxCustDates", "type": "TGroupBox"}, "rgrcustdates": {"name": "RGrCustDates", "type": "TRadioGroup"}, "begdatecust": {"name": "BegDateCust", "type": "TDateTimePicker"}, "enddatecust": {"name": "EndDateCust", "type": "TDateTimePicker"}, "grboxdocs": {"name": "GrBoxDocs", "type": "TGroupBox"}, "gboxdatedocs": {"name": "GBoxDateDocs", "type": "TGroupBox"}, "label4": {"name": "Label4", "type": "TLabel"}, "label5": {"name": "Label5", "type": "TLabel"}, "begdatedocs": {"name": "BegDateDocs", "type": "TDateTimePicker"}, "enddatedocs": {"name": "EndDateDocs", "type": "TDateTimePicker"}, "chlistdocs": {"name": "ChListDocs", "type": "TCheckListBox"}, "activegbox": {"name": "ActiveGBox", "type": "TGroupBox"}, "rbtncust": {"name": "RBtnCust", "type": "TRadioButton"}, "rbtnacc": {"name": "RBtnAcc", "type": "TRadioButton"}, "rbtndocs": {"name": "RBtnDocs", "type": "TRadioButton"}, "hidebtn": {"name": "HideBtn", "type": "TSpeedButton"}, "ordsdocsdebit": {"name": "OrDSDocsDEBIT", "type": "TWideStringField"}, "ordsdocscredit": {"name": "OrDSDocsCREDIT", "type": "TWideStringField"}, "ordsaccountabstenostat": {"name": "OrDSAccountABSTENOSTAT", "type": "TFloatField"}, "ordsaccountabstenpok_ostat": {"name": "OrDSAccountABSTENPOK_OSTAT", "type": "TFloatField"}, "waitlabel": {"name": "WaitLabel", "type": "TLabel"}, "labelcountcust": {"name": "LabelCountCust", "type": "TLabel"}, "labelcountdocs": {"name": "LabelCountDocs", "type": "TLabel"}, "imagelist": {"name": "ImageList", "type": "TImageList"}, "accpagecontrol": {"name": "AccPageControl", "type": "TPageControl"}, "accmainpage": {"name": "AccMainPage", "type": "TTabSheet"}, "accadtpage": {"name": "AccAdtPage", "type": "TTabSheet"}, "gboxostatvalacc": {"name": "GBoxOstatValAcc", "type": "TGroupBox"}, "rbtnostatazm": {"name": "RBtnOstatAZM", "type": "TRadioButton"}, "rbtnostatvalute": {"name": "RBtnOstatValute", "type": "TRadioButton"}, "label2": {"name": "Label2", "type": "TLabel"}, "searchcavaluteacc": {"name": "SearchCAvaluteAcc", "type": "TSearchCombo"}, "labelcountacc": {"name": "LabelCountAcc", "type": "TLabel"}, "locaccnum": {"name": "LocAccNum", "type": "TEdit"}, "locaccname": {"name": "LocAccName", "type": "TEdit"}, "label6": {"name": "Label6", "type": "TLabel"}, "gboxopenfilteracc": {"name": "GBoxOpenFilterAcc", "type": "TGroupBox"}, "cboxopenaccs": {"name": "CBoxOpenAccs", "type": "TCheckBox"}, "cboxcloseaccs": {"name": "CBoxCloseAccs", "type": "TCheckBox"}, "gboxostatsumacc": {"name": "GBoxOstatSumAcc", "type": "TGroupBox"}, "editostatmin": {"name": "EditOstatMin", "type": "TEdit"}, "editostatmax": {"name": "EditOstatMax", "type": "TEdit"}, "label7": {"name": "Label7", "type": "TLabel"}, "label8": {"name": "Label8", "type": "TLabel"}, "gboxacccbdates": {"name": "GBoxAccCBDates", "type": "TGroupBox"}, "begdateacc": {"name": "BegDateAcc", "type": "TDateTimePicker"}, "enddateacc": {"name": "EndDateAcc", "type": "TDateTimePicker"}, "rgraccdates": {"name": "RGrAccDates", "type": "TRadioGroup"}, "ordsdatescmindate": {"name": "OrDSDatesCMINDATE", "type": "TDateTimeField"}, "ordsdatescmaxdate": {"name": "OrDSDatesCMAXDATE", "type": "TDateTimeField"}, "ordsdatesamindate": {"name": "OrDSDatesAMINDATE", "type": "TDateTimeField"}, "ordsdatesamaxdate": {"name": "OrDSDatesAMAXDATE", "type": "TDateTimeField"}, "gboxopenfiltercust": {"name": "GBoxOpenFilterCust", "type": "TGroupBox"}, "cboxopencust": {"name": "CBoxOpenCust", "type": "TCheckBox"}, "cboxclosecust": {"name": "CBoxCloseCust", "type": "TCheckBox"}, "excelexporter": {"name": "ExcelExporter", "type": "TCMExcelExport"}, "ordsaccountkli_id": {"name": "OrDSAccountKLI_ID", "type": "TFloatField"}, "custexcel": {"name": "CustExcel", "type": "TSpeedButton"}, "loccustnum": {"name": "LocCustNum", "type": "TEdit"}, "editlocate": {"name": "EditLocate", "type": "TEdit"}, "label3": {"name": "Label3", "type": "TLabel"}, "accexcel": {"name": "AccExcel", "type": "TSpeedButton"}, "docexcel": {"name": "DocExcel", "type": "TSpeedButton"}, "okbtn": {"name": "OKBtn", "type": "TSpeedButton"}, "accdatepage": {"name": "AccDatePage", "type": "TTabSheet"}, "dtpicker_archost": {"name": "DTPicker_Archost", "type": "TDateTimePicker"}, "label9": {"name": "Label9", "type": "TLabel"}, "ordsaccounttarix": {"name": "OrDSAccountTARIX", "type": "TDateTimeField"}, "ordsfilialsname": {"name": "OrDSFilialsNAME", "type": "TWideStringField"}, "ordsavaluteval_name": {"name": "OrDSAvaluteVAL_NAME", "type": "TWideStringField"}, "ordsavalutevalu_name": {"name": "OrDSAvaluteVALU_NAME", "type": "TWideStringField"}, "ordscustomersname": {"name": "OrDSCustomersNAME", "type": "TWideStringField"}, "ordscustomersinn": {"name": "OrDSCustomersINN", "type": "TWideStringField"}, "ordsaccountacc_no": {"name": "OrDSAccountACC_NO", "type": "TWideStringField"}, "ordsaccountname": {"name": "OrDSAccountNAME", "type": "TWideStringField"}, "ordsaccountval_name": {"name": "OrDSAccountVAL_NAME", "type": "TWideStringField"}, "ordsaccountsymbol": {"name": "OrDSAccountSYMBOL", "type": "TWideStringField"}, "ordsdocsname": {"name": "OrDSDocsNAME", "type": "TWideStringField"}, "ordsdocsd_symbol": {"name": "OrDSDocsD_SYMBOL", "type": "TWideStringField"}, "ordsdocsc_symbol": {"name": "OrDSDocsC_SYMBOL", "type": "TWideStringField"}, "combobox1": {"name": "ComboBox1", "type": "TComboBox"}, "ordscustomerscust_type_name": {"name": "OrDSCustomersCUST_TYPE_NAME", "type": "TWideStringField"}, "ordsaccountfilial": {"name": "OrDSAccountFILIAL", "type": "TWideStringField"}, "ordscustomersuser_name": {"name": "OrDSCustomersUSER_NAME", "type": "TWideStringField"}, "ordscustomersfilial_name": {"name": "OrDSCustomersFILIAL_NAME", "type": "TWideStringField"}, "ordscustomersfilial_id": {"name": "OrDSCustomersFILIAL_ID", "type": "TFloatField"}, "memo1": {"name": "Memo1", "type": "TMemo"}, "ordscustomersshort_name": {"name": "OrDSCustomersSHORT_NAME", "type": "TWideStringField"}, "ordscustomersdat_nal": {"name": "OrDSCustomersDAT_NAL", "type": "TDateTimeField"}, "ordscustomersdat_ustav": {"name": "OrDSCustomersDAT_USTAV", "type": "TDateTimeField"}, "ordscustomersincorporation_number": {"name": "OrDSCustomersINCORPORATION_NUMBER", "type": "TWideStringField"}, "memo2": {"name": "Memo2", "type": "TMemo"}, "ordsdocsdname": {"name": "OrDSDocsDNAME", "type": "TWideStringField"}, "ordsdocscname": {"name": "OrDSDocsCNAME", "type": "TWideStringField"}, "ordsaccountcust_name": {"name": "OrDSAccountCUST_NAME", "type": "TWideStringField"}, "ordsaccountcust_voen": {"name": "OrDSAccountCUST_VOEN", "type": "TWideStringField"}, "ordsaccountid": {"name": "OrDSAccountID", "type": "TFloatField"}, "ordsaccountcust_type": {"name": "OrDSAccountCUST_TYPE", "type": "TWideStringField"}, "ordsaccountbal_cn1": {"name": "OrDSAccountBAL_CN1", "type": "TFloatField"}, "ordscustomersnerezident": {"name": "OrDSCustomersNEREZIDENT", "type": "TWideStringField"}, "ordscustomersprinad": {"name": "OrDSCustomersPRINAD", "type": "TWideStringField"}, "ordscustomersvid_sob": {"name": "OrDSCustomersVID_SOB", "type": "TWideStringField"}, "ordscustomersorg_sob": {"name": "OrDSCustomersORG_SOB", "type": "TWideStringField"}, "ordscustomerssfera_dey": {"name": "OrDSCustomersSFERA_DEY", "type": "TWideStringField"}, "ordscustomersgroup_klie": {"name": "OrDSCustomersGROUP_KLIE", "type": "TWideStringField"}, "ordscustomersotrasl": {"name": "OrDSCustomersOTRASL", "type": "TWideStringField"}, "ordscustomersnalog_kod": {"name": "OrDSCustomersNALOG_KOD", "type": "TWideStringField"}, "ordscustomerscategory": {"name": "OrDSCustomersCATEGORY", "type": "TWideStringField"}, "ordscustomersbik": {"name": "OrDSCustomersBIK", "type": "TWideStringField"}, "label10": {"name": "Label10", "type": "TLabel"}, "cmexcelexport1": {"name": "CMExcelExport1", "type": "TCMExcelExport"}, "oracledataset1": {"name": "OracleDataSet1", "type": "TOracleDataSet"}, "qexport4dialog1": {"name": "QExport4Dialog1", "type": "TQExport4Dialog"}, "ordscustomersbirthday": {"name": "OrDSCustomersBIRTHDAY", "type": "TDateTimeField"}, "ordscustomerspasser": {"name": "OrDSCustomersPASSER", "type": "TWideStringField"}, "ordscustomerspaspnum": {"name": "OrDSCustomersPASPNUM", "type": "TWideStringField"}, "ordscustomerspasspin": {"name": "OrDSCustomersPASSPIN", "type": "TWideStringField"}, "ordscustomerscust_type": {"name": "OrDSCustomersCUST_TYPE", "type": "TIntegerField"}, "ordscustomersop_id": {"name": "OrDSCustomersOP_ID", "type": "TFloatField"}, "ordscustomerscntr_name": {"name": "OrDSCustomersCNTR_NAME", "type": "TWideStringField"}, "ordscustomersadrs_state": {"name": "OrDSCustomersADRS_STATE", "type": "TWideStringField"}, "fevents": {"name": "FEvents", "type": "ICustomersInformationsEvents"}}, {});
  U.init(async () => {
    U.var_("HidePanel2", false, "Boolean");
    U.var_("CTitle", 0, "Integer");
    U.var_("ATitle", 0, "Integer");
    U.var_("DTitle", 0, "Integer");
    U.var_("ExcelCl", false, "Boolean");
  });
  U.method("TCustomersInformations", "Get_Icon", async function Get_Icon(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: null};
  L0["imageindex"] = 0;
  await $.stmt((await $.mcall((await $.v(C, "ImageList")), "GetIcon", [L0["imageindex"], (await $.v(C, "Icon"))])));
  L0["result"] = (await $.mv((await $.v(C, "Icon")), "Handle"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TCustomersInformations", "DefinePropertyPages", async function DefinePropertyPages(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"definepropertypage": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["definepropertypage"]);
  return L0.result;
}, {"params": ["DefinePropertyPage"], "kind": "procedure", "ptypes": ["TDefinePropertyPage"]});
  U.method("TCustomersInformations", "EventSinkChanged", async function EventSinkChanged(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"eventsink": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["eventsink"]);
  await $.set(C, "FEvents", L0["eventsink"]);
  return L0.result;
}, {"params": ["EventSink"], "kind": "procedure", "ptypes": ["IUnknown"]});
  U.method("TCustomersInformations", "Initialize", async function Initialize(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: undefined};
  await $.inherited(Self, "TCustomersInformations", "Initialize", null, arguments);
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
  U.method("TCustomersInformations", "Get_Active", async function Get_Active(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: false};
  L0["result"] = (await $.v(C, "Active"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TCustomersInformations", "Get_AutoScroll", async function Get_AutoScroll(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: false};
  L0["result"] = (await $.v(C, "AutoScroll"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TCustomersInformations", "Get_AutoSize", async function Get_AutoSize(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: false};
  L0["result"] = (await $.v(C, "AutoSize"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TCustomersInformations", "Get_AxBorderStyle", async function Get_AxBorderStyle(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: null};
  L0["result"] = (await $.call(C, "Ord", [(await $.v(C, "AxBorderStyle"))]));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TCustomersInformations", "Get_Caption", async function Get_Caption(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: ''};
  L0["result"] = (await $.call(C, "WideString", [(await $.v(C, "Caption"))]));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TCustomersInformations", "Get_Color", async function Get_Color(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: null};
  L0["result"] = (await $.call(C, "OLE_COLOR", [(await $.v(C, "Color"))]));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TCustomersInformations", "Get_Cursor", async function Get_Cursor(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: 0};
  L0["result"] = (await $.call(C, "Smallint", [(await $.v(C, "Cursor"))]));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TCustomersInformations", "Get_DoubleBuffered", async function Get_DoubleBuffered(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: false};
  L0["result"] = (await $.v(C, "DoubleBuffered"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TCustomersInformations", "Get_DropTarget", async function Get_DropTarget(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: false};
  L0["result"] = (await $.v(C, "DropTarget"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.func("DesktopPath", async function DesktopPath(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: '', "zpath": $.sarr()};
  await $.stmt((await $.call(C, "SHGetFolderPath", [0, (await $.v(C, "CSIDL_DESKTOP")), 0, (await $.v(C, "SHGFP_TYPE_CURRENT")), L0["zpath"]])));
  L0["result"] = (L0["zpath"]);
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TCustomersInformations", "Get_Enabled", async function Get_Enabled(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: false};
  L0["result"] = (await $.v(C, "Enabled"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TCustomersInformations", "Get_Font", async function Get_Font(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: null};
  await $.stmt((await $.call(C, "GetOleFont", [(await $.v(C, "Font")), L0["result"]])));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TCustomersInformations", "Get_HelpFile", async function Get_HelpFile(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: ''};
  L0["result"] = (await $.call(C, "WideString", [(await $.v(C, "HelpFile"))]));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TCustomersInformations", "Get_KeyPreview", async function Get_KeyPreview(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: false};
  L0["result"] = (await $.v(C, "KeyPreview"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TCustomersInformations", "Get_PixelsPerInch", async function Get_PixelsPerInch(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: 0};
  L0["result"] = (await $.v(C, "PixelsPerInch"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TCustomersInformations", "Get_PrintScale", async function Get_PrintScale(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: null};
  L0["result"] = (await $.call(C, "Ord", [(await $.v(C, "PrintScale"))]));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TCustomersInformations", "Get_Scaled", async function Get_Scaled(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: false};
  L0["result"] = (await $.v(C, "Scaled"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TCustomersInformations", "Get_Visible", async function Get_Visible(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: false};
  L0["result"] = (await $.v(C, "Visible"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TCustomersInformations", "Get_VisibleDockClientCount", async function Get_VisibleDockClientCount(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: 0};
  L0["result"] = (await $.v(C, "VisibleDockClientCount"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TCustomersInformations", "_Set_Font", async function _Set_Font(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.asRef(p0), result: undefined};
  await $.stmt((await $.call(C, "SetOleFont", [(await $.v(C, "Font")), (await L0["value"].get())])));
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["IFontDisp"]});
  U.method("TCustomersInformations", "ActivateEvent", async function ActivateEvent(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.ne((await $.v(C, "FEvents")), null))) {
    await $.mcall((await $.v(C, "FEvents")), "OnActivate", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TCustomersInformations", "ClickEvent", async function ClickEvent(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.ne((await $.v(C, "FEvents")), null))) {
    await $.mcall((await $.v(C, "FEvents")), "OnClick", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TCustomersInformations", "ComboBox1CloseUp", async function ComboBox1CloseUp(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.eq((await $.mv((await $.v(C, "OrDSAccount")), "Active")), true))) {
    await $.mcall((await $.v(C, "OrDSCustomers")), "Close", []);
    await $.mcall((await $.v(C, "OrDSCustomers")), "Open", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TCustomersInformations", "CreateEvent", async function CreateEvent(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.ne((await $.v(C, "FEvents")), null))) {
    await $.mcall((await $.v(C, "FEvents")), "OnCreate", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TCustomersInformations", "DblClickEvent", async function DblClickEvent(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.ne((await $.v(C, "FEvents")), null))) {
    await $.mcall((await $.v(C, "FEvents")), "OnDblClick", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TCustomersInformations", "DeactivateEvent", async function DeactivateEvent(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.ne((await $.v(C, "FEvents")), null))) {
    await $.mcall((await $.v(C, "FEvents")), "OnDeactivate", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TCustomersInformations", "DestroyEvent", async function DestroyEvent(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.ne((await $.v(C, "FEvents")), null))) {
    await $.mcall((await $.v(C, "FEvents")), "OnDestroy", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TCustomersInformations", "KeyPressEvent", async function KeyPressEvent(Self, p0, p1) {
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
  U.method("TCustomersInformations", "PaintEvent", async function PaintEvent(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.ne((await $.v(C, "FEvents")), null))) {
    await $.mcall((await $.v(C, "FEvents")), "OnPaint", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TCustomersInformations", "Set_AutoScroll", async function Set_AutoScroll(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "AutoScroll", L0["value"]);
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["WordBool"]});
  U.method("TCustomersInformations", "Set_AutoSize", async function Set_AutoSize(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "AutoSize", L0["value"]);
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["WordBool"]});
  U.method("TCustomersInformations", "Set_AxBorderStyle", async function Set_AxBorderStyle(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "AxBorderStyle", (await $.call(C, "TActiveFormBorderStyle", [L0["value"]])));
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["TxActiveFormBorderStyle"]});
  U.method("TCustomersInformations", "Set_Caption", async function Set_Caption(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "Caption", (await $.call(C, "TCaption", [L0["value"]])));
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["WideString"]});
  U.method("TCustomersInformations", "Set_Color", async function Set_Color(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "Color", (await $.call(C, "TColor", [L0["value"]])));
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["OLE_COLOR"]});
  U.method("TCustomersInformations", "Set_Cursor", async function Set_Cursor(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "Cursor", (await $.call(C, "TCursor", [L0["value"]])));
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["Smallint"]});
  U.method("TCustomersInformations", "Set_DoubleBuffered", async function Set_DoubleBuffered(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "DoubleBuffered", L0["value"]);
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["WordBool"]});
  U.method("TCustomersInformations", "Set_DropTarget", async function Set_DropTarget(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "DropTarget", L0["value"]);
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["WordBool"]});
  U.method("TCustomersInformations", "Set_Enabled", async function Set_Enabled(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "Enabled", L0["value"]);
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["WordBool"]});
  U.method("TCustomersInformations", "Set_Font", async function Set_Font(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.stmt((await $.call(C, "SetOleFont", [(await $.v(C, "Font")), L0["value"]])));
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["IFontDisp"]});
  U.method("TCustomersInformations", "Set_HelpFile", async function Set_HelpFile(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "HelpFile", (await $.call(C, "String", [L0["value"]])));
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["WideString"]});
  U.method("TCustomersInformations", "Set_KeyPreview", async function Set_KeyPreview(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "KeyPreview", L0["value"]);
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["WordBool"]});
  U.method("TCustomersInformations", "Set_PixelsPerInch", async function Set_PixelsPerInch(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "PixelsPerInch", L0["value"]);
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["Integer"]});
  U.method("TCustomersInformations", "Set_PrintScale", async function Set_PrintScale(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "PrintScale", (await $.call(C, "TPrintScale", [L0["value"]])));
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["TxPrintScale"]});
  U.method("TCustomersInformations", "Set_Scaled", async function Set_Scaled(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "Scaled", L0["value"]);
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["WordBool"]});
  U.method("TCustomersInformations", "Set_Visible", async function Set_Visible(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "Visible", L0["value"]);
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["WordBool"]});
  U.method("TCustomersInformations", "ActiveFormCreate", async function ActiveFormCreate(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.set(C, "HidePanel2", false);
  await $.set(C, "CTitle", 0);
  await $.set(C, "ATitle", 0);
  await $.set(C, "DTitle", 0);
  await $.set(C, "ExcelCl", false);
  await $.mcall((await $.v(C, "OrDSFilials")), "Open", []);
  await $.mset((await $.v(C, "SearchCFilial")), "ItemIndex", 0);
  await $.mset((await $.v(C, "EndDateCust")), "Date", (await $.v(C, "Date")));
  await $.mset((await $.v(C, "EndDateAcc")), "Date", (await $.v(C, "Date")));
  await $.mcall((await $.v(C, "OrDSAvalute")), "Open", []);
  await $.mset((await $.v(C, "SearchCAvaluteAcc")), "ItemIndex", 0);
  await $.mcall((await $.v(C, "OrDSSysDat")), "Open", []);
  await $.mset((await $.v(C, "BegDateDocs")), "Date", (await $.mv((await $.v(C, "OrDSSysDatTEK_DAT")), "AsDateTime")));
  await $.mset((await $.v(C, "EndDateDocs")), "Date", (await $.mv((await $.v(C, "OrDSSysDatTEK_DAT")), "AsDateTime")));
  await $.mset((await $.v(C, "DTPicker_Archost")), "Date", (await $.mv((await $.v(C, "OrDSSysDatTEK_DAT")), "AsDateTime")));
  await $.stmt((await $.mcall((await $.v(C, "SBTranslateProc")), "TranslateAllComponents", [Self, (await $.mv((await $.v(C, "sboapiDataModule")), "OrPack_SL"))])));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TCustomersInformations", "OrDSCustomersBeforeOpen", async function OrDSCustomersBeforeOpen(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"dataset": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["dataset"]);
  {
    const $t1 = (await $.v(C, "OrDSCustomers"));
    await $.stmt($.wcall([$t1], "Close", [], C));
    await $.mcall((await $.wv([$t1], "SQL", C, false)), "Clear", []);
    await $.stmt((await $.mcall((await $.wv([$t1], "SQL", C, false)), "Add", [(await $.mv((await $.wv([$t1], "Memo2", C, false)), "Text"))])));
    if ($.truthy((await $.and_(($.eq((await $.mv((await $.wv([$t1], "RBtnCust", C, false)), "Checked")), (await $.wv([$t1], "false", C, false)))), async () => ($.ne((await $.mv((await $.wv([$t1], "OrDSAccount", C, false)), "RecordCount")), 0)))))) {
      await $.stmt((await $.mcall((await $.wv([$t1], "SQL", C, false)), "Add", [$.add($.add(" c.ID=", (await $.mv((await $.wv([$t1], "OrDSAccountKLI_ID", C, false)), "AsString"))), " and")])));
    }
    if ($.truthy($.ne((await $.mv((await $.wv([$t1], "SearchCFilial", C, false)), "ItemIndex")), 0))) {
      await $.stmt((await $.mcall((await $.wv([$t1], "SQL", C, false)), "Add", [$.add($.add(" (select filialid from sba_objinf where obj=(select name from user$ where id=c.op_id)) =", (await $.mv((await $.wv([$t1], "OrDSFilialsID", C, false)), "AsString"))), " and")])));
    }
    if ($.truthy((await $.and_(($.eq((await $.mv((await $.wv([$t1], "CBoxOpenCust", C, false)), "Checked")), (await $.wv([$t1], "true", C, false)))), async () => ($.eq((await $.mv((await $.wv([$t1], "CBoxCloseCust", C, false)), "Checked")), (await $.wv([$t1], "false", C, false)))))))) {
      await $.stmt((await $.mcall((await $.wv([$t1], "SQL", C, false)), "Add", [" c.close_dat is null and"])));
    }
    if ($.truthy((await $.and_(($.eq((await $.mv((await $.wv([$t1], "CBoxOpenCust", C, false)), "Checked")), (await $.wv([$t1], "false", C, false)))), async () => ($.eq((await $.mv((await $.wv([$t1], "CBoxCloseCust", C, false)), "Checked")), (await $.wv([$t1], "true", C, false)))))))) {
      await $.stmt((await $.mcall((await $.wv([$t1], "SQL", C, false)), "Add", [" c.close_dat is not null and"])));
    }
    if ($.truthy($.eq((await $.mv((await $.wv([$t1], "RGrCustDates", C, false)), "ItemIndex")), 0))) {
      await $.stmt((await $.mcall((await $.wv([$t1], "SQL", C, false)), "Add", [" (c.open_dat between (:BegDate) and (:EndDate))"])));
    }
    if ($.truthy($.eq((await $.mv((await $.wv([$t1], "RGrCustDates", C, false)), "ItemIndex")), 1))) {
      await $.stmt((await $.mcall((await $.wv([$t1], "SQL", C, false)), "Add", [" (c.close_dat between (:BegDate) and (:EndDate))"])));
    }
    await $.stmt((await $.mcall((await $.wv([$t1], "SQL", C, false)), "Add", [" and upper(c.name) like :pName "])));
    await $.stmt((await $.mcall((await $.wv([$t1], "SQL", C, false)), "Add", [" and (NVL(c.cust_type,0) in (:P_CUSTTYPE)) "])));
    await $.stmt((await $.mcall((await $.wv([$t1], "SQL", C, false)), "Add", [$.add(" order by c.", (await $.mv((await $.idx((await $.mv((await $.wv([$t1], "DBGridCustomers", C, false)), "Columns")), [(await $.wv([$t1], "CTitle", C, false))])), "FieldName")))])));
    { const $t2 = (await $.mv((await $.wv([$t1], "ComboBox1", C, false)), "ItemIndex"));
      if ($.eq($t2, 0)) {
        await $.stmt((await $.mcall((await $.wv([$t1], "OrDSCustomers", C, false)), "SetVariable", ["P_CUSTTYPE", "0,1,2,3"])));
      }
      else if ($.eq($t2, 1)) {
        await $.stmt((await $.mcall((await $.wv([$t1], "OrDSCustomers", C, false)), "SetVariable", ["P_CUSTTYPE", "0"])));
      }
      else if ($.eq($t2, 2)) {
        await $.stmt((await $.mcall((await $.wv([$t1], "OrDSCustomers", C, false)), "SetVariable", ["P_CUSTTYPE", "1"])));
      }
      else if ($.eq($t2, 3)) {
        await $.stmt((await $.mcall((await $.wv([$t1], "OrDSCustomers", C, false)), "SetVariable", ["P_CUSTTYPE", "2"])));
      }
      else if ($.eq($t2, 4)) {
        await $.stmt((await $.mcall((await $.wv([$t1], "OrDSCustomers", C, false)), "SetVariable", ["P_CUSTTYPE", "3"])));
      }
    }
    await $.stmt((await $.wcall([$t1], "SetVariable", ["BegDate", (await $.wcall([$t1], "Integer", [(await $.wcall([$t1], "trunc", [(await $.mv((await $.wv([$t1], "BegDateCust", C, false)), "Date"))], C))], C))], C)));
    await $.stmt((await $.wcall([$t1], "SetVariable", ["EndDate", (await $.wcall([$t1], "Integer", [(await $.wcall([$t1], "trunc", [(await $.mv((await $.wv([$t1], "EndDateCust", C, false)), "Date"))], C))], C))], C)));
    await $.stmt((await $.wcall([$t1], "SetVariable", ["pName", "%%"], C)));
  }
  return L0.result;
}, {"params": ["DataSet"], "kind": "procedure", "ptypes": ["TDataSet"]});
  U.method("TCustomersInformations", "OrDSCustomersCalcFields", async function OrDSCustomersCalcFields(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"dataset": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["dataset"]);
  { const $t3 = (await $.mv((await $.v(C, "OrDSCustomersCUST_TYPE")), "AsInteger"));
    if ($.eq($t3, 0)) {
      await $.mset((await $.v(C, "OrDSCustomersCUST_TYPE_NAME")), "Value", "Hüquqi şəxs");
    }
    else if ($.eq($t3, 1)) {
      await $.mset((await $.v(C, "OrDSCustomersCUST_TYPE_NAME")), "Value", "Fiziki şəxs");
    }
    else if ($.eq($t3, 2)) {
      await $.mset((await $.v(C, "OrDSCustomersCUST_TYPE_NAME")), "Value", "Fiziki sahibkar");
    }
    else if ($.eq($t3, 3)) {
      await $.mset((await $.v(C, "OrDSCustomersCUST_TYPE_NAME")), "Value", "Fiziki şəxs və sahibkar");
    }
  }
  return L0.result;
}, {"params": ["DataSet"], "kind": "procedure", "ptypes": ["TDataSet"]});
  U.method("TCustomersInformations", "OrDSAccountBeforeOpen", async function OrDSAccountBeforeOpen(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"dataset": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["dataset"]);
  {
    const $t4 = (await $.v(C, "OrDSAccount"));
    await $.stmt($.wcall([$t4], "Close", [], C));
    await $.mcall((await $.wv([$t4], "SQL", C, false)), "Clear", []);
    await $.stmt((await $.mcall((await $.wv([$t4], "SQL", C, false)), "Add", [$.add($.add($.add($.add(" select ac.id,ac.ACC_NO,ac.Name,val.Val_Name,ac.Open_Dat,ac.Close_Dat,", "ac.Kli_ID,abs(ten.Ostat),abs(ten.Pok_Ostat),ten.datdate as Tarix ,"), "ac.tipacc as symbol, f.Name as Filial, cu.name as cust_name,ac.bal_cn1,cu.inn as cust_voen,ct.name as cust_type"), " from Account ac, Avalute val, Archost ten, Filial f, customers cu,cust_types ct"), " where ten.Datdate=:BalDate and f.ID=ac.filial and cu.id=ac.kli_id and ct.id=cu.cust_type and")])));
    if ($.truthy((await $.and_(($.eq((await $.mv((await $.wv([$t4], "RBtnCust", C, false)), "Checked")), (await $.wv([$t4], "true", C, false)))), async () => ($.ne((await $.mv((await $.wv([$t4], "OrDSCustomers", C, false)), "RecordCount")), 0)))))) {
      await $.stmt((await $.mcall((await $.wv([$t4], "SQL", C, false)), "Add", [$.add($.add(" ac.Kli_ID=", (await $.mv((await $.wv([$t4], "OrDSCustomersID", C, false)), "AsString"))), " and")])));
    }
    if ($.truthy($.eq((await $.mv((await $.wv([$t4], "RBtnDocs", C, false)), "Checked")), (await $.wv([$t4], "true", C, false))))) {
      await $.stmt((await $.mcall((await $.wv([$t4], "SQL", C, false)), "Add", [$.add($.add($.add($.add($.add($.add($.add($.add(" (ac.ACC_NO=", "'"), (await $.mv((await $.wv([$t4], "OrDSDocsDEBIT", C, false)), "AsString"))), "'"), " or ac.ACC_NO="), "'"), (await $.mv((await $.wv([$t4], "OrDSDocsCREDIT", C, false)), "AsString"))), "'"), ") and")])));
    }
    await $.stmt((await $.mcall((await $.wv([$t4], "SQL", C, false)), "Add", [" ac.Val_Acc=val.Valute and ac.ID=ten.Acc_ID"])));
    if ($.truthy($.ne((await $.mv((await $.wv([$t4], "SearchCFilial", C, false)), "ItemIndex")), 0))) {
      await $.stmt((await $.mcall((await $.wv([$t4], "SQL", C, false)), "Add", [$.add(" and ac.Filial=", (await $.mv((await $.wv([$t4], "OrDSFilialsID", C, false)), "AsString")))])));
    }
    if ($.truthy($.ne((await $.mv((await $.wv([$t4], "SearchCAvaluteAcc", C, false)), "ItemIndex")), 0))) {
      await $.stmt((await $.mcall((await $.wv([$t4], "SQL", C, false)), "Add", [$.add($.add(" and (ac.Val_Acc=", (await $.mv((await $.wv([$t4], "OrDSAvaluteVALUTE", C, false)), "AsString"))), ")")])));
    }
    if ($.truthy($.ne((await $.mv((await $.wv([$t4], "EditOstatMin", C, false)), "Text")), ""))) {
      if ($.truthy($.eq((await $.mv((await $.wv([$t4], "RBtnOstatAZM", C, false)), "Checked")), (await $.wv([$t4], "true", C, false))))) {
        await $.stmt((await $.mcall((await $.wv([$t4], "SQL", C, false)), "Add", [$.add(" and abs(ten.Pok_ostat)>=", (await $.mv((await $.wv([$t4], "EditOstatMin", C, false)), "Text")))])));
      } else {
        await $.stmt((await $.mcall((await $.wv([$t4], "SQL", C, false)), "Add", [$.add(" and abs(ten.Ostat)>=", (await $.mv((await $.wv([$t4], "EditOstatMin", C, false)), "Text")))])));
      }
    }
    if ($.truthy($.ne((await $.mv((await $.wv([$t4], "EditOstatMax", C, false)), "Text")), ""))) {
      if ($.truthy($.eq((await $.mv((await $.wv([$t4], "RBtnOstatAZM", C, false)), "Checked")), (await $.wv([$t4], "true", C, false))))) {
        await $.stmt((await $.mcall((await $.wv([$t4], "SQL", C, false)), "Add", [$.add(" and abs(ten.Pok_ostat)<=", (await $.mv((await $.wv([$t4], "EditOstatMax", C, false)), "Text")))])));
      } else {
        await $.stmt((await $.mcall((await $.wv([$t4], "SQL", C, false)), "Add", [$.add(" and abs(ten.Ostat)<=", (await $.mv((await $.wv([$t4], "EditOstatMax", C, false)), "Text")))])));
      }
    }
    if ($.truthy((await $.and_(($.eq((await $.mv((await $.wv([$t4], "CBoxOpenAccs", C, false)), "Checked")), (await $.wv([$t4], "true", C, false)))), async () => ($.eq((await $.mv((await $.wv([$t4], "CBoxCloseAccs", C, false)), "Checked")), (await $.wv([$t4], "false", C, false)))))))) {
      await $.stmt((await $.mcall((await $.wv([$t4], "SQL", C, false)), "Add", [" and  (ac.Close_Dat is null)"])));
    }
    if ($.truthy((await $.and_(($.eq((await $.mv((await $.wv([$t4], "CBoxOpenAccs", C, false)), "Checked")), (await $.wv([$t4], "false", C, false)))), async () => ($.eq((await $.mv((await $.wv([$t4], "CBoxCloseAccs", C, false)), "Checked")), (await $.wv([$t4], "true", C, false)))))))) {
      await $.stmt((await $.mcall((await $.wv([$t4], "SQL", C, false)), "Add", [" and (ac.Close_Dat is not null)"])));
    }
    if ($.truthy($.eq((await $.mv((await $.wv([$t4], "RGrAccDates", C, false)), "ItemIndex")), 0))) {
      await $.stmt((await $.mcall((await $.wv([$t4], "SQL", C, false)), "Add", [" and (ac.open_dat between (:BegDate) and (:EndDate))"])));
    }
    if ($.truthy($.eq((await $.mv((await $.wv([$t4], "RGrAccDates", C, false)), "ItemIndex")), 1))) {
      await $.stmt((await $.mcall((await $.wv([$t4], "SQL", C, false)), "Add", [" and (ac.close_dat between (:BegDate) and (:EndDate))"])));
    }
    await $.stmt((await $.mcall((await $.wv([$t4], "SQL", C, false)), "Add", [" and upper(ac.name) like :pName "])));
    await $.stmt((await $.mcall((await $.wv([$t4], "SQL", C, false)), "Add", [$.add(" order by ", (await $.mv((await $.idx((await $.mv((await $.wv([$t4], "DBGridAccounts", C, false)), "Columns")), [(await $.wv([$t4], "ATitle", C, false))])), "FieldName")))])));
    await $.stmt((await $.wcall([$t4], "SetVariable", ["BalDate", (await $.wcall([$t4], "Integer", [(await $.wcall([$t4], "trunc", [(await $.mv((await $.wv([$t4], "DTPicker_Archost", C, false)), "Date"))], C))], C))], C)));
    await $.stmt((await $.wcall([$t4], "SetVariable", ["BegDate", (await $.wcall([$t4], "Integer", [(await $.wcall([$t4], "trunc", [(await $.mv((await $.wv([$t4], "BegDateAcc", C, false)), "Date"))], C))], C))], C)));
    await $.stmt((await $.wcall([$t4], "SetVariable", ["EndDate", (await $.wcall([$t4], "Integer", [(await $.wcall([$t4], "trunc", [(await $.mv((await $.wv([$t4], "EndDateAcc", C, false)), "Date"))], C))], C))], C)));
    await $.stmt((await $.wcall([$t4], "SetVariable", ["pName", "%%"], C)));
  }
  return L0.result;
}, {"params": ["DataSet"], "kind": "procedure", "ptypes": ["TDataSet"]});
  U.method("TCustomersInformations", "OrDSDocsBeforeOpen", async function OrDSDocsBeforeOpen(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"dataset": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["dataset"]);
  {
    const $t5 = (await $.v(C, "OrDSDocs"));
    await $.stmt($.wcall([$t5], "Close", [], C));
    await $.mcall((await $.wv([$t5], "SQL", C, false)), "Clear", []);
    await $.stmt((await $.mcall((await $.wv([$t5], "SQL", C, false)), "Add", [$.add($.add(" select p.dat,a1.acc_no as Debit,a1.Name as DName,a2.acc_no as Credit,a2.Name as CName,", "p.ammount,p.lammount,p.ammount_c,p.name, a1.tipacc as d_symbol, a2.tipacc as c_symbol"), " from provarch p, account a1, account a2 ")])));
    await $.stmt((await $.mcall((await $.wv([$t5], "SQL", C, false)), "Add", [" where (dat between (:BegDate) and (:EndDate))"])));
    if ($.truthy((await $.and_(($.eq((await $.mv((await $.wv([$t5], "RBtnDocs", C, false)), "Checked")), (await $.wv([$t5], "false", C, false)))), async () => ($.ne((await $.mv((await $.wv([$t5], "OrDSAccount", C, false)), "RecordCount")), 0)))))) {
      if ($.truthy($.eq($.eq((await $.idx((await $.mv((await $.wv([$t5], "ChListDocs", C, false)), "Checked")), [0])), (await $.and_((await $.wv([$t5], "true", C, false)), async () => (await $.idx((await $.mv((await $.wv([$t5], "ChListDocs", C, false)), "Checked")), [1]))))), (await $.wv([$t5], "true", C, false))))) {
        await $.stmt((await $.mcall((await $.wv([$t5], "SQL", C, false)), "Add", [$.add($.add($.add($.add($.add($.add($.add($.add($.add(" and (p.debt in (select id from account where acc_no=", "'"), (await $.mv((await $.wv([$t5], "OrDSAccountACC_NO", C, false)), "AsString"))), "'"), ")"), " or p.kredit in (select id from account where acc_no="), "'"), (await $.mv((await $.wv([$t5], "OrDSAccountACC_NO", C, false)), "AsString"))), "'"), "))")])));
      } else {
        if ($.truthy($.eq((await $.idx((await $.mv((await $.wv([$t5], "ChListDocs", C, false)), "Checked")), [0])), (await $.wv([$t5], "true", C, false))))) {
          await $.stmt((await $.mcall((await $.wv([$t5], "SQL", C, false)), "Add", [$.add($.add($.add($.add(" and (p.debt in (select id from account where acc_no=", "'"), (await $.mv((await $.wv([$t5], "OrDSAccountACC_NO", C, false)), "AsString"))), "'"), "))")])));
        }
        if ($.truthy($.eq((await $.idx((await $.mv((await $.wv([$t5], "ChListDocs", C, false)), "Checked")), [1])), (await $.wv([$t5], "true", C, false))))) {
          await $.stmt((await $.mcall((await $.wv([$t5], "SQL", C, false)), "Add", [$.add($.add($.add($.add(" and (p.kredit in (select id from account where acc_no=", "'"), (await $.mv((await $.wv([$t5], "OrDSAccountACC_NO", C, false)), "AsString"))), "'"), "))")])));
        }
      }
    } else {
      if ($.truthy($.ne((await $.mv((await $.wv([$t5], "SearchCFilial", C, false)), "ItemIndex")), 0))) {
        await $.stmt((await $.mcall((await $.wv([$t5], "SQL", C, false)), "Add", [$.add($.add($.add($.add(" and (a1.Filial=", (await $.mv((await $.wv([$t5], "OrDSFilialsID", C, false)), "AsString"))), " or a2.Filial="), (await $.mv((await $.wv([$t5], "OrDSFilialsID", C, false)), "AsString"))), ")")])));
      }
    }
    await $.stmt((await $.mcall((await $.wv([$t5], "SQL", C, false)), "Add", [" and (p.debt=a1.id and p.kredit=a2.id)"])));
    await $.stmt((await $.mcall((await $.wv([$t5], "SQL", C, false)), "Add", [$.add(" order by ", (await $.mv((await $.idx((await $.mv((await $.wv([$t5], "DBGridDocs", C, false)), "Columns")), [(await $.wv([$t5], "DTitle", C, false))])), "FieldName")))])));
    await $.stmt((await $.wcall([$t5], "SetVariable", ["BegDate", (await $.wcall([$t5], "Integer", [(await $.wcall([$t5], "trunc", [(await $.mv((await $.wv([$t5], "BegDateDocs", C, false)), "Date"))], C))], C))], C)));
    await $.stmt((await $.wcall([$t5], "SetVariable", ["EndDate", (await $.wcall([$t5], "Integer", [(await $.wcall([$t5], "trunc", [(await $.mv((await $.wv([$t5], "EndDateDocs", C, false)), "Date"))], C))], C))], C)));
  }
  return L0.result;
}, {"params": ["DataSet"], "kind": "procedure", "ptypes": ["TDataSet"]});
  U.method("TCustomersInformations", "OrDSCustomersAfterOpen", async function OrDSCustomersAfterOpen(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"dataset": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["dataset"]);
  await $.mset((await $.v(C, "LabelCountCust")), "Caption", (await $.call(C, "IntToStr", [(await $.mv((await $.v(C, "OrDSCustomers")), "RecordCount"))])));
  return L0.result;
}, {"params": ["DataSet"], "kind": "procedure", "ptypes": ["TDataSet"]});
  U.method("TCustomersInformations", "OrDSAccountAfterOpen", async function OrDSAccountAfterOpen(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"dataset": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["dataset"]);
  await $.mset((await $.v(C, "LabelCountAcc")), "Caption", (await $.call(C, "IntToStr", [(await $.mv((await $.v(C, "OrDSAccount")), "RecordCount"))])));
  return L0.result;
}, {"params": ["DataSet"], "kind": "procedure", "ptypes": ["TDataSet"]});
  U.method("TCustomersInformations", "OrDSDocsAfterOpen", async function OrDSDocsAfterOpen(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"dataset": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["dataset"]);
  await $.mset((await $.v(C, "LabelCountDocs")), "Caption", (await $.call(C, "IntToStr", [(await $.mv((await $.v(C, "OrDSDocs")), "RecordCount"))])));
  return L0.result;
}, {"params": ["DataSet"], "kind": "procedure", "ptypes": ["TDataSet"]});
  U.method("TCustomersInformations", "OrDSCustomersAfterScroll", async function OrDSCustomersAfterScroll(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"dataset": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["dataset"]);
  return L0.result;
}, {"params": ["DataSet"], "kind": "procedure", "ptypes": ["TDataSet"]});
  U.method("TCustomersInformations", "OrDSAccountAfterScroll", async function OrDSAccountAfterScroll(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"dataset": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["dataset"]);
  if ($.truthy($.eq((await $.v(C, "ExcelCl")), false))) {
    if ($.truthy($.eq((await $.mv((await $.v(C, "RBtnCust")), "Checked")), false))) {
      await $.mcall((await $.v(C, "OrDSCustomers")), "Close", []);
      await $.mcall((await $.v(C, "OrDSCustomers")), "Open", []);
    }
  }
  return L0.result;
}, {"params": ["DataSet"], "kind": "procedure", "ptypes": ["TDataSet"]});
  U.method("TCustomersInformations", "OrDSDocsAfterScroll", async function OrDSDocsAfterScroll(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"dataset": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["dataset"]);
  if ($.truthy($.eq((await $.v(C, "ExcelCl")), false))) {
    if ($.truthy($.eq((await $.mv((await $.v(C, "RBtnDocs")), "Checked")), true))) {
      await $.mcall((await $.v(C, "OrDSAccount")), "Close", []);
      await $.mcall((await $.v(C, "OrDSAccount")), "Open", []);
    }
  }
  return L0.result;
}, {"params": ["DataSet"], "kind": "procedure", "ptypes": ["TDataSet"]});
  U.method("TCustomersInformations", "CBoxOpenCustClick", async function CBoxOpenCustClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t6 = (await $.v(C, "OrDSCustomers"));
    await $.stmt($.wcall([$t6], "Close", [], C));
    await $.mset((await $.wv([$t6], "Memo1", C, false)), "Text", (await $.mv((await $.wv([$t6], "sql", C, false)), "Text")));
    await $.stmt($.wcall([$t6], "Open", [], C));
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TCustomersInformations", "SearchCAvaluteAccChange", async function SearchCAvaluteAccChange(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t7 = (await $.v(C, "OrDSAccount"));
    await $.stmt($.wcall([$t7], "Close", [], C));
    await $.stmt($.wcall([$t7], "Open", [], C));
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TCustomersInformations", "SearchCFilialChange", async function SearchCFilialChange(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t8 = (await $.v(C, "OrDSCustomers"));
    await $.stmt($.wcall([$t8], "Close", [], C));
    await $.stmt($.wcall([$t8], "Open", [], C));
  }
  {
    const $t9 = (await $.v(C, "OrDSAccount"));
    await $.stmt($.wcall([$t9], "Close", [], C));
    await $.stmt($.wcall([$t9], "Open", [], C));
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TCustomersInformations", "EditLocateChange", async function EditLocateChange(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.stmt((await $.mcall((await $.v(C, "OrDSCustomers")), "Locate", ["Name", (await $.mv((await $.v(C, "EditLocate")), "Text")), [(await $.v(C, "loCaseInsensitive")), (await $.v(C, "loPartialKey"))]])));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TCustomersInformations", "ActiveFormDestroy", async function ActiveFormDestroy(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mcall((await $.v(C, "OrDSAccount")), "Close", []);
  await $.mcall((await $.v(C, "OrDSFilials")), "Close", []);
  await $.mcall((await $.v(C, "OrDSAvalute")), "Close", []);
  await $.mcall((await $.v(C, "OrDSCustomers")), "Close", []);
  await $.mcall((await $.v(C, "OrDSDates")), "Close", []);
  await $.mcall((await $.v(C, "OrDSDocs")), "Close", []);
  await $.mcall((await $.v(C, "OrDSSysDat")), "Close", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TCustomersInformations", "Button1Click", async function Button1Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TCustomersInformations", "Button2Click", async function Button2Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mset((await $.v(C, "oracledataset1")), "Active", true);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TCustomersInformations", "EditLocateExit", async function EditLocateExit(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mset((await $.v(C, "EditLocate")), "Text", "");
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TCustomersInformations", "LocCustNumChange", async function LocCustNumChange(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.stmt((await $.mcall((await $.v(C, "OrDSCustomers")), "Locate", ["ID", (await $.mv((await $.v(C, "LocCustNum")), "Text")), [(await $.v(C, "loCaseInsensitive")), (await $.v(C, "loPartialKey"))]])));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TCustomersInformations", "LocAccNumChange", async function LocAccNumChange(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.stmt((await $.mcall((await $.v(C, "OrDSAccount")), "Locate", ["Acc_NO", (await $.mv((await $.v(C, "LocAccNum")), "Text")), [(await $.v(C, "loCaseInsensitive")), (await $.v(C, "loPartialKey"))]])));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TCustomersInformations", "LocAccNameChange", async function LocAccNameChange(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.stmt((await $.mcall((await $.v(C, "OrDSAccount")), "Locate", ["Name", (await $.mv((await $.v(C, "LocAccName")), "Text")), [(await $.v(C, "loCaseInsensitive")), (await $.v(C, "loPartialKey"))]])));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TCustomersInformations", "LocCustNumExit", async function LocCustNumExit(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mset((await $.v(C, "LocCustNum")), "Text", "");
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TCustomersInformations", "LocAccNumExit", async function LocAccNumExit(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mset((await $.v(C, "LocAccNum")), "Text", "");
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TCustomersInformations", "LocAccNameExit", async function LocAccNameExit(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mset((await $.v(C, "LocAccName")), "Text", "");
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TCustomersInformations", "RBtnAccClick", async function RBtnAccClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mcall((await $.v(C, "OrDSAccount")), "Close", []);
  await $.mcall((await $.v(C, "OrDSAccount")), "Open", []);
  await $.mcall((await $.v(C, "OrDSCustomers")), "Close", []);
  await $.mcall((await $.v(C, "OrDSCustomers")), "Open", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TCustomersInformations", "RBtnCustClick", async function RBtnCustClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mcall((await $.v(C, "OrDSCustomers")), "Close", []);
  await $.mcall((await $.v(C, "OrDSCustomers")), "Open", []);
  await $.mcall((await $.v(C, "OrDSAccount")), "Close", []);
  await $.mcall((await $.v(C, "OrDSAccount")), "Open", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TCustomersInformations", "RBtnDocsClick", async function RBtnDocsClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mcall((await $.v(C, "OrDSDocs")), "Close", []);
  await $.mcall((await $.v(C, "OrDSDocs")), "Open", []);
  await $.mcall((await $.v(C, "OrDSAccount")), "Close", []);
  await $.mcall((await $.v(C, "OrDSAccount")), "Open", []);
  await $.mcall((await $.v(C, "OrDSCustomers")), "Close", []);
  await $.mcall((await $.v(C, "OrDSCustomers")), "Open", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TCustomersInformations", "HideBtnClick", async function HideBtnClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.eq((await $.v(C, "HidePanel2")), true))) {
    await $.mset((await $.v(C, "Panel2")), "Visible", true);
    await $.set(C, "HidePanel2", false);
  } else {
    await $.mset((await $.v(C, "Panel2")), "Visible", false);
    await $.set(C, "HidePanel2", true);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TCustomersInformations", "DBGridCustomersDblClick", async function DBGridCustomersDblClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.eq((await $.v(C, "ExcelCl")), false))) {
    if ($.truthy($.eq((await $.mv((await $.v(C, "RBtnCust")), "Checked")), true))) {
      await $.mcall((await $.v(C, "OrDSAccount")), "Close", []);
      await $.mcall((await $.v(C, "OrDSAccount")), "Open", []);
    }
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TCustomersInformations", "DBGridCustomersTitleClick", async function DBGridCustomersTitleClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"column": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["column"]);
  await $.mcall((await $.v(C, "OrDSCustomers")), "Close", []);
  await $.set(C, "CTitle", (await $.mv(L0["column"], "Index")));
  await $.mcall((await $.v(C, "OrDSCustomers")), "Open", []);
  return L0.result;
}, {"params": ["Column"], "kind": "procedure", "ptypes": ["TColumn"]});
  U.method("TCustomersInformations", "DBGridAccountsTitleClick", async function DBGridAccountsTitleClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"column": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["column"]);
  await $.mcall((await $.v(C, "OrDSAccount")), "Close", []);
  await $.set(C, "ATitle", (await $.mv(L0["column"], "Index")));
  await $.mcall((await $.v(C, "OrDSAccount")), "Open", []);
  return L0.result;
}, {"params": ["Column"], "kind": "procedure", "ptypes": ["TColumn"]});
  U.method("TCustomersInformations", "DBGridDocsTitleClick", async function DBGridDocsTitleClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"column": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["column"]);
  await $.mcall((await $.v(C, "OrDSDocs")), "Close", []);
  await $.set(C, "DTitle", (await $.mv(L0["column"], "Index")));
  await $.mcall((await $.v(C, "OrDSDocs")), "Open", []);
  return L0.result;
}, {"params": ["Column"], "kind": "procedure", "ptypes": ["TColumn"]});
  U.method("TCustomersInformations", "EditOstatMinKeyPress", async function EditOstatMinKeyPress(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "key": $.asRef(p1), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.eq((await L0["key"].get()), "\r"))) {
    {
      const $t10 = (await $.v(C, "OrDSAccount"));
      await $.stmt($.wcall([$t10], "Close", [], C));
      await $.stmt($.wcall([$t10], "Open", [], C));
    }
  }
  return L0.result;
}, {"params": ["Sender", "Key"], "kind": "procedure", "ptypes": ["TObject", "Char"]});
  U.method("TCustomersInformations", "AccExcelClick", async function AccExcelClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.set(C, "ExcelCl", true);
  {
    const $t11 = (await $.v(C, "CMExcelExport1"));
    if ($.truthy($.not((await $.wv([$t11], "Connected", C, false))))) {
      await $.stmt($.wcall([$t11], "Connect", [], C));
    }
    await $.stmt((await $.wcall([$t11], "ExportDataset", [(await $.wv([$t11], "OrDSAccount", C, false)), "Accounts", (await $.wv([$t11], "true", C, false))], C)));
    await $.stmt($.wcall([$t11], "Disconnect", [], C));
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TCustomersInformations", "CustExcelClick", async function CustExcelClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.set(C, "ExcelCl", true);
  await $.mcall((await $.v(C, "OrDSCustomers")), "Last", []);
  {
    const $t12 = (await $.v(C, "CMExcelExport1"));
    await $.stmt($.wcall([$t12], "Connect", [], C));
    await $.stmt((await $.wcall([$t12], "ExportDataset", [(await $.wv([$t12], "OrDSCustomers", C, false)), "Customers", (await $.wv([$t12], "True", C, false)), (await $.wv([$t12], "True", C, false))], C)));
    await $.stmt($.wcall([$t12], "Disconnect", [], C));
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TCustomersInformations", "DocExcelClick", async function DocExcelClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.set(C, "ExcelCl", true);
  {
    const $t13 = (await $.v(C, "CMExcelExport1"));
    if ($.truthy($.not((await $.wv([$t13], "Connected", C, false))))) {
      await $.stmt($.wcall([$t13], "Connect", [], C));
    }
    await $.stmt((await $.wcall([$t13], "ExportDataset", [(await $.wv([$t13], "OrDSDocs", C, false)), "Documents", (await $.wv([$t13], "true", C, false))], C)));
    await $.stmt($.wcall([$t13], "Disconnect", [], C));
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TCustomersInformations", "OKBtnClick", async function OKBtnClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mset((await $.v(C, "WaitLabel")), "Visible", true);
  await $.mcall((await $.v(C, "Application")), "ProcessMessages", []);
  {
    const $t14 = (await $.v(C, "OrDSDocs"));
    await $.stmt($.wcall([$t14], "Close", [], C));
    await $.stmt($.wcall([$t14], "Open", [], C));
  }
  await $.mset((await $.v(C, "WaitLabel")), "Visible", false);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TCustomersInformations", "EditLocateKeyPress", async function EditLocateKeyPress(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "key": $.asRef(p1), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.eq((await L0["key"].get()), "\r"))) {
    {
      const $t15 = (await $.v(C, "OrDSCustomers"));
      await $.stmt((await $.wcall([$t15], "SetVariable", ["pName", $.add($.add("%", (await $.wcall([$t15], "upperCase", [(await $.mv((await $.wv([$t15], "EditLocate", C, false)), "text"))], C))), "%")], C)));
      await $.stmt($.wcall([$t15], "Refresh", [], C));
    }
  }
  return L0.result;
}, {"params": ["Sender", "Key"], "kind": "procedure", "ptypes": ["TObject", "Char"]});
  U.method("TCustomersInformations", "OrDSCustomersAfterRefresh", async function OrDSCustomersAfterRefresh(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"dataset": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["dataset"]);
  await $.mset((await $.v(C, "LabelCountCust")), "Caption", (await $.call(C, "IntToStr", [(await $.mv((await $.v(C, "OrDSCustomers")), "RecordCount"))])));
  return L0.result;
}, {"params": ["DataSet"], "kind": "procedure", "ptypes": ["TDataSet"]});
  U.method("TCustomersInformations", "LocAccNameKeyPress", async function LocAccNameKeyPress(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "key": $.asRef(p1), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.eq((await L0["key"].get()), "\r"))) {
    {
      const $t16 = (await $.v(C, "OrDSAccount"));
      await $.stmt((await $.wcall([$t16], "SetVariable", ["pName", $.add($.add("%", (await $.wcall([$t16], "upperCase", [(await $.mv((await $.wv([$t16], "LocAccName", C, false)), "text"))], C))), "%")], C)));
      await $.stmt((await $.wcall([$t16], "ShowMessage", [$.add($.add("%", (await $.wcall([$t16], "upperCase", [(await $.mv((await $.wv([$t16], "LocAccName", C, false)), "text"))], C))), "%")], C)));
      await $.stmt($.wcall([$t16], "Refresh", [], C));
    }
  }
  return L0.result;
}, {"params": ["Sender", "Key"], "kind": "procedure", "ptypes": ["TObject", "Char"]});
  return U;
}
