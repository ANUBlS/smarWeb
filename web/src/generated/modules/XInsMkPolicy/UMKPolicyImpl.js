// Generated from UMKPolicyImpl.pas by pas2js — do not edit by hand; regenerate instead.
/* eslint-disable */
// @ts-nocheck

export default function define($) {
  const U = $.unit("UMKPolicyImpl", ["Windows", "Messages", "SysUtils", "Classes", "Graphics", "Controls", "Forms", "LDialogs", "ActiveX", "AxCtrls", "MKPolicy_TLB", "StdVcl", "SBPlgAx50_TLB", "ComCtrls", "HintBox", "StdCtrls", "Buttons", "ExtCtrls", "DBCtrls", "Mask", "Db", "OracleData", "INSWordExporter", "Oracle", "Grids", "DBGrids", "olectnrs", "TntStdCtrls", "Dialogs", "ComObj", "ComServ", "sboapiDataModuleImpl", "UUnderTable", "UProceses"]);
  const C = [U];
  U.defClass("TfmMKPolicy", "TActiveForm", {"groupbox1": {"name": "GroupBox1", "type": "TGroupBox"}, "bevel1": {"name": "Bevel1", "type": "TBevel"}, "label2": {"name": "Label2", "type": "TLabel"}, "label10": {"name": "Label10", "type": "TLabel"}, "dbedit7": {"name": "DBEdit7", "type": "TDBEdit"}, "panel1": {"name": "Panel1", "type": "TPanel"}, "btok": {"name": "btOk", "type": "TBitBtn"}, "btcancel": {"name": "btCancel", "type": "TBitBtn"}, "btprint": {"name": "btPrint", "type": "TBitBtn"}, "btapply": {"name": "btApply", "type": "TBitBtn"}, "hberrmsg": {"name": "hbErrMsg", "type": "THintBox"}, "odspolicy": {"name": "ODSPolicy", "type": "TOracleDataSet"}, "odspolicyid": {"name": "ODSPolicyID", "type": "TFloatField"}, "odspolicytheft": {"name": "ODSPolicyTHEFT", "type": "TFloatField"}, "odspolicyfire": {"name": "ODSPolicyFIRE", "type": "TFloatField"}, "odspolicyexplosion": {"name": "ODSPolicyEXPLOSION", "type": "TFloatField"}, "odspolicytrafficaccident": {"name": "ODSPolicyTRAFFICACCIDENT", "type": "TFloatField"}, "odspolicyimpactanyobject": {"name": "ODSPolicyIMPACTANYOBJECT", "type": "TFloatField"}, "odspolicynatcatastrophe": {"name": "ODSPolicyNATCATASTROPHE", "type": "TFloatField"}, "odspolicypolicynum": {"name": "ODSPolicyPOLICYNUM", "type": "TStringField"}, "dspolicy": {"name": "DSPolicy", "type": "TDataSource"}, "dsavalute": {"name": "DSAvalute", "type": "TDataSource"}, "inswordexporter": {"name": "INSWordExporter", "type": "TINSWordExporter"}, "odsreport": {"name": "ODSReport", "type": "TOracleDataSet"}, "odsreportname": {"name": "ODSReportNAME", "type": "TStringField"}, "odsreportinsuredtype": {"name": "ODSReportINSUREDTYPE", "type": "TStringField"}, "odsreportinsuredcolor": {"name": "ODSReportINSUREDCOLOR", "type": "TStringField"}, "odsreportinsuredoutputyear": {"name": "ODSReportINSUREDOUTPUTYEAR", "type": "TIntegerField"}, "odsreportinsuredmodel": {"name": "ODSReportINSUREDMODEL", "type": "TStringField"}, "odsreportinsuredstatenum": {"name": "ODSReportINSUREDSTATENUM", "type": "TStringField"}, "odsreportunderframenum": {"name": "ODSReportUNDERFRAMENUM", "type": "TStringField"}, "odsreportinsuredbannum": {"name": "ODSReportINSUREDBANNUM", "type": "TStringField"}, "odsreportinsuredenginenum": {"name": "ODSReportINSUREDENGINENUM", "type": "TStringField"}, "odsreportdriveaccesspiople": {"name": "ODSReportDRIVEACCESSPIOPLE", "type": "TStringField"}, "odsreportbegindate": {"name": "ODSReportBEGINDATE", "type": "TStringField"}, "odsreportenddate": {"name": "ODSReportENDDATE", "type": "TStringField"}, "odsreportpolicynum": {"name": "ODSReportPOLICYNUM", "type": "TStringField"}, "opcommon": {"name": "OPCOMMON", "type": "TOraclePackage"}, "odsreportloanacc_id": {"name": "ODSReportLOANACC_ID", "type": "TFloatField"}, "odsreportcurracc_id": {"name": "ODSReportCURRACC_ID", "type": "TFloatField"}, "odsreportvalute": {"name": "ODSReportVALUTE", "type": "TStringField"}, "odscontracts": {"name": "ODSContracts", "type": "TOracleDataSet"}, "odscontractsid": {"name": "ODSContractsID", "type": "TFloatField"}, "odscontractstype_id": {"name": "ODSContractsTYPE_ID", "type": "TFloatField"}, "odscontractsins_date": {"name": "ODSContractsINS_DATE", "type": "TDateTimeField"}, "odscontractsbegin_date": {"name": "ODSContractsBEGIN_DATE", "type": "TDateTimeField"}, "odscontractsend_date": {"name": "ODSContractsEND_DATE", "type": "TDateTimeField"}, "odscontractsvalute_id": {"name": "ODSContractsVALUTE_ID", "type": "TFloatField"}, "odscontractsammount": {"name": "ODSContractsAMMOUNT", "type": "TFloatField"}, "odscontractsclose_prefix": {"name": "ODSContractsCLOSE_PREFIX", "type": "TIntegerField"}, "odscontractskli_id": {"name": "ODSContractsKLI_ID", "type": "TFloatField"}, "odscontractsloanacc_id": {"name": "ODSContractsLOANACC_ID", "type": "TFloatField"}, "odscontractscurracc_id": {"name": "ODSContractsCURRACC_ID", "type": "TFloatField"}, "odscontractspolicy_num": {"name": "ODSContractsPOLICY_NUM", "type": "TStringField"}, "dscontracts": {"name": "DSContracts", "type": "TDataSource"}, "speedbutton1": {"name": "SpeedButton1", "type": "TSpeedButton"}, "odscontractsinssumm": {"name": "ODSContractsINSSUMM", "type": "TFloatField"}, "odscontractsfranshiz": {"name": "ODSContractsFRANSHIZ", "type": "TFloatField"}, "odscontractstariff": {"name": "ODSContractsTARIFF", "type": "TFloatField"}, "odscontractsstate": {"name": "ODSContractsSTATE", "type": "TIntegerField"}, "odsreportagent": {"name": "ODSReportAGENT", "type": "TStringField"}, "odspolicyundertable": {"name": "ODSPolicyUNDERTABLE", "type": "TBlobField"}, "dstemplates": {"name": "DSTemplates", "type": "TDataSource"}, "odstemplates": {"name": "ODSTemplates", "type": "TOracleDataSet"}, "odstemplatesid": {"name": "ODSTemplatesID", "type": "TFloatField"}, "odstemplatesname": {"name": "ODSTemplatesNAME", "type": "TStringField"}, "odstemplatestemplate": {"name": "ODSTemplatesTEMPLATE", "type": "TBlobField"}, "odsreportaccessoriesname": {"name": "ODSReportACCESSORIESNAME", "type": "TStringField"}, "odsreportinsdate": {"name": "ODSReportINSDATE", "type": "TStringField"}, "opmkkasco": {"name": "OPMKKASCO", "type": "TOraclePackage"}, "odspolicycid": {"name": "ODSPolicyCID", "type": "TFloatField"}, "dscustomers": {"name": "DSCustomers", "type": "TDataSource"}, "odscustomers": {"name": "ODSCustomers", "type": "TOracleDataSet"}, "odscustomersid": {"name": "ODSCustomersID", "type": "TIntegerField"}, "odscustomersinsured_typeid": {"name": "ODSCustomersINSURED_TYPEID", "type": "TIntegerField"}, "odsmotorkasko": {"name": "ODSMotorkasko", "type": "TOracleDataSet"}, "odsmotorkaskoid": {"name": "ODSMotorkaskoID", "type": "TFloatField"}, "odsmotorkaskocid": {"name": "ODSMotorkaskoCID", "type": "TFloatField"}, "odsmotorkaskoinsuredtype": {"name": "ODSMotorkaskoINSUREDTYPE", "type": "TStringField"}, "odsmotorkaskoinsuredcolor": {"name": "ODSMotorkaskoINSUREDCOLOR", "type": "TStringField"}, "odsmotorkaskoinsuredoutputyear": {"name": "ODSMotorkaskoINSUREDOUTPUTYEAR", "type": "TIntegerField"}, "odsmotorkaskoinsuredstatenum": {"name": "ODSMotorkaskoINSUREDSTATENUM", "type": "TStringField"}, "odsmotorkaskounderframenum": {"name": "ODSMotorkaskoUNDERFRAMENUM", "type": "TStringField"}, "odsmotorkaskoinsuredbannum": {"name": "ODSMotorkaskoINSUREDBANNUM", "type": "TStringField"}, "odsmotorkaskoinsuredenginenum": {"name": "ODSMotorkaskoINSUREDENGINENUM", "type": "TStringField"}, "odsmotorkaskodriveintended": {"name": "ODSMotorkaskoDRIVEINTENDED", "type": "TStringField"}, "odsmotorkaskodrivecost": {"name": "ODSMotorkaskoDRIVECOST", "type": "TFloatField"}, "odsmotorkaskobegindate": {"name": "ODSMotorkaskoBEGINDATE", "type": "TDateTimeField"}, "odsmotorkaskoenddate": {"name": "ODSMotorkaskoENDDATE", "type": "TDateTimeField"}, "odsmotorkaskotypeid": {"name": "ODSMotorkaskoTYPEID", "type": "TIntegerField"}, "odsmotorkaskoclose_prefix": {"name": "ODSMotorkaskoCLOSE_PREFIX", "type": "TIntegerField"}, "odsmotorkaskobank_id": {"name": "ODSMotorkaskoBANK_ID", "type": "TFloatField"}, "odsmotorkaskomonth_id": {"name": "ODSMotorkaskoMONTH_ID", "type": "TFloatField"}, "odsmotorkaskoinsuredmark": {"name": "ODSMotorkaskoINSUREDMARK", "type": "TStringField"}, "odsmotorkaskoinsuredmodel": {"name": "ODSMotorkaskoINSUREDMODEL", "type": "TStringField"}, "odsmotorkaskoclaim_date": {"name": "ODSMotorkaskoCLAIM_DATE", "type": "TDateTimeField"}, "odsmotorkaskoclaim_num": {"name": "ODSMotorkaskoCLAIM_NUM", "type": "TStringField"}, "odsmotorkaskoarea": {"name": "ODSMotorkaskoAREA", "type": "TStringField"}, "odsreportbeneficiary": {"name": "ODSReportBENEFICIARY", "type": "TStringField"}, "odsmotorkaskofranshiz": {"name": "ODSMotorkaskoFRANSHIZ", "type": "TFloatField"}, "odsmotorkaskotariff": {"name": "ODSMotorkaskoTARIFF", "type": "TFloatField"}, "odsmotorkaskoinssumm": {"name": "ODSMotorkaskoINSSUMM", "type": "TFloatField"}, "odsmotorkaskoammount": {"name": "ODSMotorkaskoAMMOUNT", "type": "TFloatField"}, "odsavalute": {"name": "ODSAvalute", "type": "TOracleDataSet"}, "odsavalutevalute": {"name": "ODSAvaluteVALUTE", "type": "TIntegerField"}, "odsavaluteval_name": {"name": "ODSAvaluteVAL_NAME", "type": "TStringField"}, "odsavalutevalu_name": {"name": "ODSAvaluteVALU_NAME", "type": "TStringField"}, "odsavalutevalu_short": {"name": "ODSAvaluteVALU_SHORT", "type": "TStringField"}, "odscustomersname": {"name": "ODSCustomersNAME", "type": "TStringField"}, "odscontractsbeneficiary": {"name": "ODSContractsBENEFICIARY", "type": "TStringField"}, "odsreportsex": {"name": "ODSReportSEX", "type": "TIntegerField"}, "odsmotorkaskonumseats": {"name": "ODSMotorkaskoNUMSEATS", "type": "TStringField"}, "lbnonunicode": {"name": "lbNonUnicode", "type": "TListBox"}, "tlbunicode": {"name": "tlbUnicode", "type": "TTntListBox"}, "odsavtointend": {"name": "ODSAvtoIntend", "type": "TOracleDataSet"}, "odsavtointendid": {"name": "ODSAvtoIntendID", "type": "TFloatField"}, "odsavtointendname": {"name": "ODSAvtoIntendNAME", "type": "TStringField"}, "odsreportdriveintended": {"name": "ODSReportDRIVEINTENDED", "type": "TStringField"}, "odsreportavtointend": {"name": "ODSReportavtointend", "type": "TStringField"}, "odspolicyrisks": {"name": "ODSPolicyRISKS", "type": "TFloatField"}, "odspolicyname": {"name": "ODSPolicyNAME", "type": "TStringField"}, "cbrisk": {"name": "cbRisk", "type": "TCheckBox"}, "gbgrid": {"name": "gbGrid", "type": "TGroupBox"}, "dbgrid1": {"name": "DBGrid1", "type": "TDBGrid"}, "dbnavigator1": {"name": "DBNavigator1", "type": "TDBNavigator"}, "gbsame": {"name": "gbSame", "type": "TGroupBox"}, "label3": {"name": "Label3", "type": "TLabel"}, "dbedit1": {"name": "DBEdit1", "type": "TDBEdit"}, "dbedit2": {"name": "DBEdit2", "type": "TDBEdit"}, "label5": {"name": "Label5", "type": "TLabel"}, "label6": {"name": "Label6", "type": "TLabel"}, "dbedit3": {"name": "DBEdit3", "type": "TDBEdit"}, "label7": {"name": "Label7", "type": "TLabel"}, "dbedit4": {"name": "DBEdit4", "type": "TDBEdit"}, "label8": {"name": "Label8", "type": "TLabel"}, "dbedit5": {"name": "DBEdit5", "type": "TDBEdit"}, "cbdifrisk": {"name": "cbDifRisk", "type": "TCheckBox"}, "odsreporttheft": {"name": "ODSReportTHEFT", "type": "TFloatField"}, "odsreportfire": {"name": "ODSReportFIRE", "type": "TFloatField"}, "odsreportexplosion": {"name": "ODSReportEXPLOSION", "type": "TFloatField"}, "odsreporttrafficaccident": {"name": "ODSReportTRAFFICACCIDENT", "type": "TFloatField"}, "odsreportimpactanyobject": {"name": "ODSReportIMPACTANYOBJECT", "type": "TFloatField"}, "odsrisk": {"name": "ODSRisk", "type": "TOracleDataSet"}, "odsriskid": {"name": "ODSRiskID", "type": "TFloatField"}, "odsriskname": {"name": "ODSRiskNAME", "type": "TStringField"}, "odspolicyrisk": {"name": "ODSPolicyrisk", "type": "TStringField"}, "odsreportnumseats": {"name": "ODSReportNUMSEATS", "type": "TStringField"}, "odsreportextrafranshiz": {"name": "ODSReportEXTRAFRANSHIZ", "type": "TStringField"}, "odsreportfranshiz": {"name": "ODSReportFRANSHIZ", "type": "TFloatField"}, "dblookupcombobox1": {"name": "DBLookupComboBox1", "type": "TDBLookupComboBox"}, "bitbtn1": {"name": "BitBtn1", "type": "TBitBtn"}, "odsreportavtocost": {"name": "ODSReportAVTOCOST", "type": "TFloatField"}, "odsreportinssumm": {"name": "ODSReportINSSUMM", "type": "TFloatField"}, "odsreportammount": {"name": "ODSReportAMMOUNT", "type": "TFloatField"}, "odsreportinsuredaddress": {"name": "ODSReportINSUREDADDRESS", "type": "TStringField"}, "odsreportmobilephone": {"name": "ODSReportMOBILEPHONE", "type": "TStringField"}, "odsreporthomephone": {"name": "ODSReportHOMEPHONE", "type": "TStringField"}, "bitbtn2": {"name": "BitBtn2", "type": "TBitBtn"}, "extraodialog": {"name": "ExtraODialog", "type": "TOpenDialog"}, "odscusttypes": {"name": "ODSCustTypes", "type": "TOracleDataSet"}, "odscusttypesid": {"name": "ODSCustTypesID", "type": "TFloatField"}, "odscusttypesname": {"name": "ODSCustTypesNAME", "type": "TStringField"}, "odsoperkurs": {"name": "ODSOperkurs", "type": "TOracleDataSet"}, "odsoperkursvalute_id": {"name": "ODSOperkursVALUTE_ID", "type": "TFloatField"}, "odsoperkursvalute": {"name": "ODSOperkursVALUTE", "type": "TIntegerField"}, "odsoperkursval_name": {"name": "ODSOperkursVAL_NAME", "type": "TStringField"}, "odsoperkursostat": {"name": "ODSOperkursOSTAT", "type": "TFloatField"}, "odsreportinscolor": {"name": "ODSReportINSCOLOR", "type": "TStringField"}, "odscontractssugnum": {"name": "ODSContractsSUGNUM", "type": "TStringField"}, "odsreportval_name": {"name": "ODSReportVAL_NAME", "type": "TStringField"}, "bitbtn3": {"name": "BitBtn3", "type": "TBitBtn"}, "bitbtn4": {"name": "BitBtn4", "type": "TBitBtn"}, "fparams": {"name": "FParams", "type": "TStrings"}, "fownerhandle": {"name": "FOwnerHandle", "type": "Integer"}, "tid": {"name": "tid", "type": "real"}, "fevents": {"name": "FEvents", "type": "IfmMKPolicyEvents"}, "cid": {"name": "CID", "type": "Integer"}, "strintend": {"name": "StrIntend", "type": "String"}, "strintend1": {"name": "StrIntend1", "type": "String"}, "str": {"name": "str", "type": "String"}}, {"params": {"name": "Params", "read": "Get_Params", "write": "Set_Params"}});
  U.init(async () => {
    U.const("WM_ModalResult", $.add((await $.v(C, "WM_USER")), 139));
    U.const("fmCaption", "Kasko sigortasi policy: (%s)");
    U.const("pDisabled", 6);
    U.const("pMaking", 4);
    U.var_("fmMKPolicy", null, "TfmMKPolicy");
  });
  U.method("TfmMKPolicy", "DefinePropertyPages", async function DefinePropertyPages(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"definepropertypage": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["definepropertypage"]);
  return L0.result;
}, {"params": ["DefinePropertyPage"], "kind": "procedure", "ptypes": ["TDefinePropertyPage"]});
  U.method("TfmMKPolicy", "EventSinkChanged", async function EventSinkChanged(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"eventsink": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["eventsink"]);
  await $.set(C, "FEvents", L0["eventsink"]);
  return L0.result;
}, {"params": ["EventSink"], "kind": "procedure", "ptypes": ["IUnknown"]});
  U.method("TfmMKPolicy", "Initialize", async function Initialize(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: undefined};
  await $.inherited(Self, "TfmMKPolicy", "Initialize", null, arguments);
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
  U.method("TfmMKPolicy", "Get_Active", async function Get_Active(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: false};
  L0["result"] = (await $.v(C, "Active"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TfmMKPolicy", "Get_AutoScroll", async function Get_AutoScroll(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: false};
  L0["result"] = (await $.v(C, "AutoScroll"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TfmMKPolicy", "Get_AutoSize", async function Get_AutoSize(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: false};
  L0["result"] = (await $.v(C, "AutoSize"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TfmMKPolicy", "Get_AxBorderStyle", async function Get_AxBorderStyle(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: null};
  L0["result"] = (await $.call(C, "Ord", [(await $.v(C, "AxBorderStyle"))]));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TfmMKPolicy", "Get_Caption", async function Get_Caption(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: ''};
  L0["result"] = (await $.call(C, "WideString", [(await $.v(C, "Caption"))]));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TfmMKPolicy", "Get_Color", async function Get_Color(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: null};
  L0["result"] = (await $.call(C, "OLE_COLOR", [(await $.v(C, "Color"))]));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TfmMKPolicy", "Get_Cursor", async function Get_Cursor(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: 0};
  L0["result"] = (await $.call(C, "Smallint", [(await $.v(C, "Cursor"))]));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TfmMKPolicy", "Get_DoubleBuffered", async function Get_DoubleBuffered(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: false};
  L0["result"] = (await $.v(C, "DoubleBuffered"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TfmMKPolicy", "Get_DropTarget", async function Get_DropTarget(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: false};
  L0["result"] = (await $.v(C, "DropTarget"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TfmMKPolicy", "Get_Enabled", async function Get_Enabled(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: false};
  L0["result"] = (await $.v(C, "Enabled"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TfmMKPolicy", "Get_Font", async function Get_Font(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: null};
  await $.stmt((await $.call(C, "GetOleFont", [(await $.v(C, "Font")), L0["result"]])));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TfmMKPolicy", "Get_HelpFile", async function Get_HelpFile(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: ''};
  L0["result"] = (await $.call(C, "WideString", [(await $.v(C, "HelpFile"))]));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TfmMKPolicy", "Get_KeyPreview", async function Get_KeyPreview(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: false};
  L0["result"] = (await $.v(C, "KeyPreview"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TfmMKPolicy", "Get_PixelsPerInch", async function Get_PixelsPerInch(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: 0};
  L0["result"] = (await $.v(C, "PixelsPerInch"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TfmMKPolicy", "Get_PrintScale", async function Get_PrintScale(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: null};
  L0["result"] = (await $.call(C, "Ord", [(await $.v(C, "PrintScale"))]));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TfmMKPolicy", "Get_Scaled", async function Get_Scaled(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: false};
  L0["result"] = (await $.v(C, "Scaled"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TfmMKPolicy", "Get_Visible", async function Get_Visible(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: false};
  L0["result"] = (await $.v(C, "Visible"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TfmMKPolicy", "Get_VisibleDockClientCount", async function Get_VisibleDockClientCount(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: 0};
  L0["result"] = (await $.v(C, "VisibleDockClientCount"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TfmMKPolicy", "_Set_Font", async function _Set_Font(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.stmt((await $.call(C, "SetOleFont", [(await $.v(C, "Font")), L0["value"]])));
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["IFontDisp"]});
  U.method("TfmMKPolicy", "ActivateEvent", async function ActivateEvent(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.ne((await $.v(C, "FEvents")), null))) {
    await $.mcall((await $.v(C, "FEvents")), "OnActivate", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TfmMKPolicy", "ClickEvent", async function ClickEvent(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.ne((await $.v(C, "FEvents")), null))) {
    await $.mcall((await $.v(C, "FEvents")), "OnClick", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TfmMKPolicy", "CreateEvent", async function CreateEvent(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.ne((await $.v(C, "FEvents")), null))) {
    await $.mcall((await $.v(C, "FEvents")), "OnCreate", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TfmMKPolicy", "DblClickEvent", async function DblClickEvent(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.ne((await $.v(C, "FEvents")), null))) {
    await $.mcall((await $.v(C, "FEvents")), "OnDblClick", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TfmMKPolicy", "DeactivateEvent", async function DeactivateEvent(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.ne((await $.v(C, "FEvents")), null))) {
    await $.mcall((await $.v(C, "FEvents")), "OnDeactivate", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TfmMKPolicy", "DestroyEvent", async function DestroyEvent(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.ne((await $.v(C, "FEvents")), null))) {
    await $.mcall((await $.v(C, "FEvents")), "OnDestroy", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TfmMKPolicy", "KeyPressEvent", async function KeyPressEvent(Self, p0, p1) {
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
  U.method("TfmMKPolicy", "PaintEvent", async function PaintEvent(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.ne((await $.v(C, "FEvents")), null))) {
    await $.mcall((await $.v(C, "FEvents")), "OnPaint", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TfmMKPolicy", "Set_AutoScroll", async function Set_AutoScroll(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "AutoScroll", L0["value"]);
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["WordBool"]});
  U.method("TfmMKPolicy", "Set_AutoSize", async function Set_AutoSize(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "AutoSize", L0["value"]);
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["WordBool"]});
  U.method("TfmMKPolicy", "Set_AxBorderStyle", async function Set_AxBorderStyle(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "AxBorderStyle", (await $.call(C, "TActiveFormBorderStyle", [L0["value"]])));
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["TxActiveFormBorderStyle"]});
  U.method("TfmMKPolicy", "Set_Caption", async function Set_Caption(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "Caption", (await $.call(C, "TCaption", [L0["value"]])));
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["WideString"]});
  U.method("TfmMKPolicy", "Set_Color", async function Set_Color(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "Color", (await $.call(C, "TColor", [L0["value"]])));
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["OLE_COLOR"]});
  U.method("TfmMKPolicy", "Set_Cursor", async function Set_Cursor(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "Cursor", (await $.call(C, "TCursor", [L0["value"]])));
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["Smallint"]});
  U.method("TfmMKPolicy", "Set_DoubleBuffered", async function Set_DoubleBuffered(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "DoubleBuffered", L0["value"]);
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["WordBool"]});
  U.method("TfmMKPolicy", "Set_DropTarget", async function Set_DropTarget(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "DropTarget", L0["value"]);
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["WordBool"]});
  U.method("TfmMKPolicy", "Set_Enabled", async function Set_Enabled(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "Enabled", L0["value"]);
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["WordBool"]});
  U.method("TfmMKPolicy", "Set_Font", async function Set_Font(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.asRef(p0), result: undefined};
  await $.stmt((await $.call(C, "SetOleFont", [(await $.v(C, "Font")), (await L0["value"].get())])));
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["IFontDisp"]});
  U.method("TfmMKPolicy", "Set_HelpFile", async function Set_HelpFile(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "HelpFile", (await $.call(C, "String", [L0["value"]])));
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["WideString"]});
  U.method("TfmMKPolicy", "Set_KeyPreview", async function Set_KeyPreview(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "KeyPreview", L0["value"]);
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["WordBool"]});
  U.method("TfmMKPolicy", "Set_PixelsPerInch", async function Set_PixelsPerInch(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "PixelsPerInch", L0["value"]);
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["Integer"]});
  U.method("TfmMKPolicy", "Set_PrintScale", async function Set_PrintScale(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "PrintScale", (await $.call(C, "TPrintScale", [L0["value"]])));
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["TxPrintScale"]});
  U.method("TfmMKPolicy", "Set_Scaled", async function Set_Scaled(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "Scaled", L0["value"]);
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["WordBool"]});
  U.method("TfmMKPolicy", "Set_Visible", async function Set_Visible(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "Visible", L0["value"]);
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["WordBool"]});
  U.method("TfmMKPolicy", "Get_Owner", async function Get_Owner(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: 0};
  L0["result"] = (await $.v(C, "handle"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TfmMKPolicy", "Set_Owner", async function Set_Owner(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"val": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["val"]);
  if ($.truthy($.gt(L0["val"], 0))) {
    await $.set(C, "FOwnerHandle", L0["val"]);
  }
  return L0.result;
}, {"params": ["val"], "kind": "procedure", "ptypes": ["Integer"]});
  U.method("TfmMKPolicy", "Get_Params", async function Get_Params(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"name": $.copyArg(p0), result: null};
  await $.fixArgs(L0, ["name"]);
  L0["result"] = (await $.idx((await $.mv((await $.v(C, "FParams")), "Values")), [L0["name"]]));
  return L0.result;
}, {"params": ["Name"], "kind": "function", "ptypes": ["WideString"]});
  U.method("TfmMKPolicy", "Set_Params", async function Set_Params(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"name": $.copyArg(p0), "value": $.copyArg(p1), result: undefined};
  await $.fixArgs(L0, ["name", "value"]);
  { const $t1 = await $.iset((await $.mv((await $.v(C, "FParams")), "Values")), [L0["name"]], L0["value"]); if ($t1 !== undefined) { await $.mset((await $.v(C, "FParams")), "Values", $t1); } }
  return L0.result;
}, {"params": ["Name", "Value"], "kind": "procedure", "ptypes": ["WideString", "OleVariant"]});
  U.method("TfmMKPolicy", "InstanceInitialize", async function InstanceInitialize(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: null};
  L0["result"] = (await $.v(C, "S_OK"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TfmMKPolicy", "Cleanup", async function Cleanup(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: null};
  L0["result"] = (await $.v(C, "S_OK"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TfmMKPolicy", "DisableControls", async function DisableControls(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"controlname": $.copyArg(p0), "disable": (p1 === undefined ? true : p1), result: undefined};
  await $.fixArgs(L0, ["controlname", "disable"]);
  L0["disablecontrol"] = $.fn(async function DisableControl(p0) {
  const L1 = {"cname": $.copyArg(p0), result: undefined, "i": 0};
  await $.fixArgs(L1, ["cname"]);
  {
    const $t2 = L1["cname"];
    { const $t3 = $.sub((await $.wv([$t2], "ControlCount", C, false)), 1);
      await $.wset([$t2], "i", 0, { get: async () => L1["i"], set: async (v) => { L1["i"] = v; }, local: true });
      let $t4 = true;
      for (;;) {
        if (!$t4) { await $.wset([$t2], "i", $.succ((await $.wv([$t2], "i", { get: async () => L1["i"], set: async (v) => { L1["i"] = v; }, local: true }, false)), 1), { get: async () => L1["i"], set: async (v) => { L1["i"] = v; }, local: true }); }
        $t4 = false;
        if (!($.ord((await $.wv([$t2], "i", { get: async () => L1["i"], set: async (v) => { L1["i"] = v; }, local: true }, false))) <= $.ord($t3))) break;
        if ($.truthy(($.is_((await $.idx((await $.wv([$t2], "Controls", C, false)), [(await $.wv([$t2], "i", { get: async () => L1["i"], set: async (v) => { L1["i"] = v; }, local: true }, false))])), "TCustomControl")))) {
          await $.stmt((await $.wcall([$t2], "DisableControl", [(await $.idx((await $.wv([$t2], "Controls", C, false)), [(await $.wv([$t2], "i", { get: async () => L1["i"], set: async (v) => { L1["i"] = v; }, local: true }, false))]))], { get: async () => L0["disablecontrol"], set: async (v) => { L0["disablecontrol"] = v; }, local: true })));
        }
        await $.mset((await $.idx((await $.wv([$t2], "Controls", C, false)), [(await $.wv([$t2], "i", { get: async () => L1["i"], set: async (v) => { L1["i"] = v; }, local: true }, false))])), "Enabled", (await $.wv([$t2], "disable", { get: async () => L0["disable"], set: async (v) => { L0["disable"] = v; }, local: true }, false)));
        await $.tick();
      }
    }
  }
  return L1.result;
});
  if ($.truthy($.eq((await $.mcall((await $.v(C, "OPCOMMON")), "CallIntegerFunction", ["disablepolicies", []])), 0))) {
    return L0.result;
  }
  await $.stmt((await $.callv(L0["disablecontrol"], [L0["controlname"]])));
  await $.mset((await $.v(C, "btApply")), "Enabled", L0["disable"]);
  await $.mset((await $.v(C, "btOk")), "Enabled", L0["disable"]);
  await $.mset((await $.v(C, "btPrint")), "Enabled", L0["disable"]);
  return L0.result;
}, {"params": ["ControlName", "disable"], "kind": "procedure", "ptypes": ["TCustomControl", "boolean"]});
  U.method("TfmMKPolicy", "UIObjectActivate", async function UIObjectActivate(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: null};
  await $.set(C, "CID", (await $.call(C, "StrToInt", [(await $.call(C, "Get_Params", ["CID"]))])));
  await $.mcall((await $.v(C, "ODSTemplates")), "Open", []);
  {
    const $t5 = (await $.v(C, "ODSContracts"));
    await $.stmt((await $.wcall([$t5], "SetVariable", ["CID", (await $.wv([$t5], "CID", C, false))], C)));
    await $.stmt($.wcall([$t5], "Open", [], C));
    await $.stmt((await $.mcall((await $.wv([$t5], "ODSCustomers", C, false)), "SetVariable", ["kli_id", (await $.mv((await $.wv([$t5], "ODSContractsKli_id", C, false)), "AsInteger"))])));
    await $.mcall((await $.wv([$t5], "ODSCustomers", C, false)), "Open", []);
    await $.wset([$t5], "tid", (await $.mv((await $.wcall([$t5], "FieldByName", ["TYPE_ID"], C)), "asInteger")), C);
    await $.stmt($.wcall([$t5], "Edit", [], C));
  }
  await $.stmt((await $.mcall((await $.v(C, "ODSMotorKasko")), "SetVariable", ["cid", (await $.v(C, "cid"))])));
  await $.mcall((await $.v(C, "ODSMotorKasko")), "Open", []);
  await $.stmt((await $.mcall((await $.v(C, "ODSPolicy")), "SetVariable", ["CID", (await $.v(C, "CID"))])));
  await $.mcall((await $.v(C, "ODSPolicy")), "Open", []);
  if ($.truthy((await $.mv((await $.v(C, "ODSPolicy")), "isEmpty")))) {
    await $.mcall((await $.v(C, "ODSPolicy")), "Insert", []);
    await $.set(C, "Caption", (await $.call(C, "format", [(await $.v(C, "fmCaption")), ["Yeni policy"]])));
  } else {
    await $.mcall((await $.v(C, "ODSPolicy")), "Edit", []);
    {
      const $t6 = (await $.v(C, "OPCOMMON"));
      if ($.truthy($.eq((await $.wcall([$t6], "CallIntegerFunction", ["get_state", [(await $.wv([$t6], "CID", C, false))]], C)), (await $.wv([$t6], "pDisabled", C, false))))) {
        await $.stmt((await $.wcall([$t6], "DisableControls", [(await $.wv([$t6], "GroupBox1", C, false)), (await $.wv([$t6], "false", C, false))], C)));
      }
    }
    await $.set(C, "Caption", (await $.call(C, "format", [(await $.v(C, "fmCaption")), ["Redakte"]])));
  }
  L0["result"] = (await $.v(C, "S_OK"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TfmMKPolicy", "QueryDeactivate", async function QueryDeactivate(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: null};
  L0["result"] = (await $.v(C, "S_OK"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TfmMKPolicy", "UIObjectDeactivate", async function UIObjectDeactivate(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: null};
  L0["result"] = (await $.v(C, "S_OK"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TfmMKPolicy", "SaveState", async function SaveState(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: null};
  L0["result"] = (await $.v(C, "S_OK"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TfmMKPolicy", "Get_Height", async function Get_Height(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: 0};
  L0["result"] = (await $.v(C, "Height"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TfmMKPolicy", "Get_Width", async function Get_Width(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: 0};
  L0["result"] = (await $.v(C, "Width"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TfmMKPolicy", "SaveData", async function SaveData(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: false, "res": false};
  L0["res"] = false;
  try {
    if ($.truthy((await $.mv((await $.v(C, "cbRisk")), "Checked")))) {
      {
        const $t7 = (await $.v(C, "ODSPolicy"));
        if ($.truthy($.in_((await $.wv([$t7], "State", C, false)), [(await $.wv([$t7], "dsEdit", C, false)), (await $.wv([$t7], "dsInsert", C, false))]))) {
          await $.mset((await $.wcall([$t7], "Fieldbyname", ["THEFT"], C)), "AsFloat", (await $.mv((await $.wv([$t7], "ODSMotorKaskoFRANSHIZ", C, false)), "AsFloat")));
          await $.mset((await $.wcall([$t7], "Fieldbyname", ["FIRE"], C)), "AsFloat", (await $.mv((await $.wv([$t7], "ODSMotorKaskoFRANSHIZ", C, false)), "AsFloat")));
          await $.mset((await $.wcall([$t7], "Fieldbyname", ["EXPLOSION"], C)), "AsFloat", (await $.mv((await $.wv([$t7], "ODSMotorKaskoFRANSHIZ", C, false)), "AsFloat")));
          await $.mset((await $.wcall([$t7], "Fieldbyname", ["TRAFFICACCIDENT"], C)), "AsFloat", (await $.mv((await $.wv([$t7], "ODSMotorKaskoFRANSHIZ", C, false)), "AsFloat")));
          await $.mset((await $.wcall([$t7], "Fieldbyname", ["IMPACTANYOBJECT"], C)), "AsFloat", (await $.mv((await $.wv([$t7], "ODSMotorKaskoFRANSHIZ", C, false)), "AsFloat")));
          await $.stmt($.wcall([$t7], "Post", [], C));
          await $.stmt((await $.wcall([$t7], "RefreshRecord", [], C)));
        }
      }
    }
    {
      const $t8 = (await $.v(C, "ODSContracts"));
      if ($.truthy($.in_((await $.wv([$t8], "State", C, false)), [(await $.wv([$t8], "dsEdit", C, false)), (await $.wv([$t8], "dsInsert", C, false))]))) {
        await $.stmt($.wcall([$t8], "Post", [], C));
        await $.stmt((await $.wcall([$t8], "RefreshRecord", [], C)));
      }
    }
    await $.stmt((await $.mcall((await $.v(C, "OPCOMMON")), "CallBooleanFunction", ["change_state", [(await $.v(C, "CID")), (await $.v(C, "pMaking"))]])));
    L0["res"] = true;
  } finally {
    await $.mset((await $.v(C, "btPrint")), "Enabled", L0["res"]);
    await $.mset((await $.v(C, "btApply")), "Enabled", $.not(L0["res"]));
  }
  L0["result"] = L0["res"];
  try {
    if ($.truthy($.not(L0["res"]))) {
      await $.stmt($.call(C, "RaiseLastWin32Error", []));
    }
  } catch ($t9) {
    $.rethrowControl($t9);
    if ($.excIs($t9, "Exception")) {
      L0["e"] = $.exc($t9);
      await $.stmt((await $.mcall((await $.v(C, "hbErrMsg")), "ShowMessage", [(await $.mv(L0["e"], "Message"))])));
    }
    else { throw $t9; }
  }
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TfmMKPolicy", "btOkClick", async function btOkClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy((await $.call(C, "SaveData", [])))) {
    await $.stmt((await $.call(C, "PostMessage", [(await $.v(C, "FOwnerHandle")), (await $.v(C, "WM_ModalResult")), (await $.v(C, "mrOk")), 0])));
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TfmMKPolicy", "btCancelClick", async function btCancelClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.stmt((await $.call(C, "PostMessage", [(await $.v(C, "FOwnerHandle")), (await $.v(C, "WM_ModalResult")), (await $.v(C, "mrCancel")), 0])));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TfmMKPolicy", "DBEdit7KeyPress", async function DBEdit7KeyPress(Self, p0, p1) {
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
  U.method("TfmMKPolicy", "btApplyClick", async function btApplyClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.stmt((await $.call(C, "SaveData", [])));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TfmMKPolicy", "ActiveFormCreate", async function ActiveFormCreate(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.set(C, "fmMKPolicy", Self);
  await $.set(C, "FParams", (await $.mv((await $.v(C, "TStringList")), "Create")));
  if ($.truthy((await $.mv((await $.v(C, "cbRisk")), "Checked")))) {
    await $.mset((await $.v(C, "btPrint")), "Enabled", true);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TfmMKPolicy", "ExportToWord", async function ExportToWord(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: undefined, "docfile": null, "i": 0, "n": 0, "j": 0, "wordapp": null, "wrddatadoc": null, "wrdapp": null, "wrdselection": null, "filename": '', "outputyear": '', "errorstr": ''};
  await $.staticConst(L0, "months", "umkpolicyimpl.tfmmkpolicy.exporttoword.months", async () => ["Yanvar", "Fevral", "Mart", "Aprel", "May", "İyun", "İyul", "Avqust", "Sentyabr", "Oktyabr", "Noyabr", "Dekabr"]);
  await $.set(C, "ThousandSeparator", " ");
  await $.stmt((await $.mcall((await $.v(C, "ODSAValute")), "Locate", ["valute", (await $.mv((await $.v(C, "ODSContractsValute_ID")), "Value")), []])));
  await $.mcall((await $.v(C, "ODSContracts")), "Close", []);
  await $.stmt((await $.mcall((await $.v(C, "ODSContracts")), "SetVariable", ["CID", (await $.v(C, "CID"))])));
  await $.mcall((await $.v(C, "ODSContracts")), "Open", []);
  await $.mcall((await $.v(C, "ODSReport")), "Close", []);
  await $.stmt((await $.mcall((await $.v(C, "ODSReport")), "SetVariable", ["CID", (await $.v(C, "CID"))])));
  await $.mcall((await $.v(C, "ODSReport")), "Open", []);
  await $.stmt((await $.mcall((await $.v(C, "ODSCustTypes")), "SetVariable", ["id", (await $.mv((await $.v(C, "ODSCustomersInsured_TypeID")), "Value"))])));
  await $.mcall((await $.v(C, "ODSCustTypes")), "Open", []);
  if ($.truthy($.ne((await $.mv((await $.v(C, "ODSCustTypesName")), "AsString")), "İndividual"))) {
    await $.mcall((await $.v(C, "ODSContracts")), "Edit", []);
    await $.mset((await $.v(C, "ODSContractsSugNum")), "Value", "");
    await $.mcall((await $.v(C, "ODSContracts")), "Post", []);
  }
  await $.stmt((await $.mcall((await $.v(C, "ODSOperkurs")), "Locate", ["valute_id", 1, []])));
  if ($.truthy($.eq((await $.mv((await $.v(C, "ODSReportSex")), "Value")), 0))) {
    await $.set(C, "str", "oğlu");
  } else {
    if ($.truthy($.eq((await $.mv((await $.v(C, "ODSReportSex")), "Value")), 1))) {
      await $.set(C, "str", "qızı");
    }
  }
  await $.set(C, "StrIntend", (await $.mv((await $.v(C, "ODSReportAvtoIntend")), "AsString")));
  if ($.truthy($.gt((await $.call(C, "Pos", [",", (await $.v(C, "StrIntend"))])), 0))) {
    await $.set(C, "StrIntend", (await $.call(C, "Copy", [(await $.v(C, "StrIntend")), 0, $.sub((await $.call(C, "Pos", [",", (await $.v(C, "StrIntend"))])), 1)])));
  }
  await $.set(C, "StrIntend1", (await $.v(C, "StrIntend")));
  if ($.truthy((await $.mv((await $.v(C, "cbRisk")), "Checked")))) {
    await $.set(C, "StrIntend1", (await $.call(C, "AnsiUpperCase", [(await $.v(C, "StrIntend1"))])));
    if ($.truthy($.eq((await $.mv((await $.v(C, "ODSCustTypesName")), "AsString")), "Bank"))) {
      if ($.truthy($.not(((await $.mv((await $.v(C, "ODSReportExtraFranshiz")), "isNull")))))) {
        L0["filename"] = $.add((await $.call(C, "ExtractFilePath", [(await $.mv((await $.v(C, "Application")), "ExeName"))])), "\\KaskoPolicyEmpty3.doc");
      } else {
        L0["filename"] = $.add((await $.call(C, "ExtractFilePath", [(await $.mv((await $.v(C, "Application")), "ExeName"))])), "\\KaskoPolicyEmpty1.doc");
      }
    }
    if ($.truthy($.eq((await $.mv((await $.v(C, "ODSCustTypesName")), "AsString")), "İndividual"))) {
      L0["filename"] = $.add((await $.call(C, "ExtractFilePath", [(await $.mv((await $.v(C, "Application")), "ExeName"))])), "\\IKascoPolicy.doc");
    }
    if ($.truthy($.eq((await $.mv((await $.v(C, "ODSCustTypesName")), "AsString")), "Korparativ"))) {
      L0["filename"] = $.add((await $.call(C, "ExtractFilePath", [(await $.mv((await $.v(C, "Application")), "ExeName"))])), "\\CMotorKaskoPolicy.doc");
    }
  } else {
    if ($.truthy($.eq((await $.mv((await $.v(C, "ODSCustTypesName")), "AsString")), "Bank"))) {
      L0["filename"] = $.add((await $.call(C, "ExtractFilePath", [(await $.mv((await $.v(C, "Application")), "ExeName"))])), "\\KaskoPolicyEmpty2.doc");
    }
    if ($.truthy($.eq((await $.mv((await $.v(C, "ODSCustTypesName")), "AsString")), "İndividual"))) {
      L0["filename"] = $.add((await $.call(C, "ExtractFilePath", [(await $.mv((await $.v(C, "Application")), "ExeName"))])), "\\IKascoPolicy.doc");
    }
    if ($.truthy($.eq((await $.mv((await $.v(C, "ODSCustTypesName")), "AsString")), "Korparativ"))) {
      L0["filename"] = $.add((await $.call(C, "ExtractFilePath", [(await $.mv((await $.v(C, "Application")), "ExeName"))])), "\\CMotorKaskoPolicy.doc");
    }
  }
  L0["wrdapp"] = (await $.call(C, "CreateOleObject", ["Word.Application"]));
  await $.mset(L0["wrdapp"], "Visible", true);
  L0["wrddatadoc"] = (await $.mcall((await $.mv(L0["wrdapp"], "Documents")), "Open", [L0["filename"]]));
  L0["wrdselection"] = (await $.mv(L0["wrdapp"], "Selection"));
  if ($.truthy($.not(((await $.mv((await $.v(C, "cbRisk")), "Checked")))))) {
    await $.mcall((await $.v(C, "ODSPolicy")), "First", []);
    await $.stmt((await $.mcall(L0["wrdselection"], "GoTo", [(-(1)), (await $.v(C, "unAssigned")), (await $.v(C, "unAssigned")), "risk"])));
    await $.mset((await $.mv(L0["wrdselection"], "Font")), "Bold", true);
    { const $t10 = $.sub((await $.mv((await $.v(C, "ODSPolicy")), "RecordCount")), 1);
      L0["i"] = 0;
      let $t11 = true;
      for (;;) {
        if (!$t11) { L0["i"] = $.succ(L0["i"], 1); }
        $t11 = false;
        if (!($.ord(L0["i"]) <= $.ord($t10))) break;
        await $.stmt((await $.mcall(L0["wrdselection"], "TypeText", [(await $.call(C, "UTFEncoder", [$.add($.add($.add((await $.call(C, "IntToStr", [$.add(L0["i"], 1)])), ". "), (await $.mv((await $.v(C, "ODSPolicyName")), "AsString"))), "\r\n")]))])));
        await $.mcall((await $.v(C, "ODSPolicy")), "Next", []);
        await $.tick();
      }
    }
  }
  if ($.truthy($.not(((await $.mv((await $.v(C, "cbRisk")), "Checked")))))) {
    await $.mcall((await $.v(C, "ODSPolicy")), "First", []);
    await $.stmt((await $.mcall(L0["wrdselection"], "GoTo", [(-(1)), (await $.v(C, "unAssigned")), (await $.v(C, "unAssigned")), "fransiza"])));
    { const $t12 = $.sub((await $.mv((await $.v(C, "ODSPolicy")), "RecordCount")), 1);
      L0["i"] = 0;
      let $t13 = true;
      for (;;) {
        if (!$t13) { L0["i"] = $.succ(L0["i"], 1); }
        $t13 = false;
        if (!($.ord(L0["i"]) <= $.ord($t12))) break;
        await $.stmt((await $.mcall(L0["wrdselection"], "TypeText", [(await $.call(C, "UTFEncoder", [$.add((await $.mv((await $.v(C, "ODSPolicyRisks")), "AsString")), "\r\n")]))])));
        await $.mcall((await $.v(C, "ODSPolicy")), "Next", []);
        await $.tick();
      }
    }
  }
  { const $t14 = (await $.mv((await $.v(C, "ODSReport")), "FieldCount"));
    L0["i"] = 0;
    let $t15 = true;
    for (;;) {
      if (!$t15) { L0["i"] = $.succ(L0["i"], 1); }
      $t15 = false;
      if (!($.ord(L0["i"]) <= $.ord($t14))) break;
      try {
        await $.stmt((await $.mcall(L0["wrdselection"], "GoTo", [(-(1)), (await $.v(C, "unAssigned")), (await $.v(C, "unAssigned")), (await $.call(C, "lowercase", [(await $.mv((await $.idx((await $.mv((await $.v(C, "ODSReport")), "fields")), [L0["i"]])), "DisplayName"))]))])));
        await $.stmt((await $.mcall(L0["wrdselection"], "TypeText", [(await $.call(C, "UTFEncoder", [(await $.call(C, "VarToStr", [(await $.mv((await $.idx((await $.mv((await $.v(C, "ODSReport")), "fields")), [L0["i"]])), "AsVariant"))]))]))])));
      } catch ($t16) {
        $.rethrowControl($t16);
        $.handled($t16);
      }
      await $.tick();
    }
  }
  if ($.truthy($.eq((await $.mv((await $.v(C, "ODSCustTypesName")), "AsString")), "Korparativ"))) {
    await $.stmt((await $.mcall(L0["wrdselection"], "GoTo", [(-(1)), (await $.v(C, "unAssigned")), (await $.v(C, "unAssigned")), "allinssum"])));
    await $.stmt((await $.mcall(L0["wrdselection"], "TypeText", [(await $.call(C, "UTFEncoder", [(await $.mv((await $.v(C, "ODSContractsInssumm")), "AsString"))]))])));
    await $.stmt((await $.mcall(L0["wrdselection"], "GoTo", [(-(1)), (await $.v(C, "unAssigned")), (await $.v(C, "unAssigned")), "allinscost"])));
    await $.stmt((await $.mcall(L0["wrdselection"], "TypeText", [(await $.call(C, "UTFEncoder", [(await $.mv((await $.v(C, "ODSContractsAmmount")), "AsString"))]))])));
  }
  try {
    await $.stmt((await $.mcall(L0["wrdselection"], "GoTo", [(-(1)), (await $.v(C, "unAssigned")), (await $.v(C, "unAssigned")), "address"])));
    await $.stmt((await $.mcall(L0["wrdselection"], "TypeText", [$.add($.add($.add($.add($.add($.add((await $.call(C, "UTFEncoder", [(await $.mv((await $.v(C, "ODSReportInsuredAddress")), "Value"))])), "\r\n"), "Mob: "), (await $.mv((await $.v(C, "ODSReportMobilePhone")), "Value"))), "\r\n"), "Ev:    "), (await $.mv((await $.v(C, "ODSReportHomePhone")), "Value")))])));
    await $.stmt((await $.mcall(L0["wrdselection"], "GoTo", [(-(1)), (await $.v(C, "unAssigned")), (await $.v(C, "unAssigned")), "drivecost"])));
    await $.stmt((await $.mcall(L0["wrdselection"], "TypeText", [(await $.call(C, "FloatToStrF", [(await $.mv((await $.v(C, "ODSReportAvtoCost")), "Value")), (await $.v(C, "ffCurrency")), 10, 0]))])));
    await $.stmt((await $.mcall(L0["wrdselection"], "GoTo", [(-(1)), (await $.v(C, "unAssigned")), (await $.v(C, "unAssigned")), "insurancesum"])));
    await $.stmt((await $.mcall(L0["wrdselection"], "TypeText", [(await $.call(C, "FloatToStrF", [(await $.mv((await $.v(C, "ODSReportInsSumm")), "Value")), (await $.v(C, "ffCurrency")), 10, 0]))])));
    await $.stmt((await $.mcall(L0["wrdselection"], "GoTo", [(-(1)), (await $.v(C, "unAssigned")), (await $.v(C, "unAssigned")), "insuranceammount"])));
    await $.stmt((await $.mcall(L0["wrdselection"], "TypeText", [(await $.call(C, "FloatToStrF", [(await $.mv((await $.v(C, "ODSReportAmmount")), "Value")), (await $.v(C, "ffCurrency")), 10, 0]))])));
    if ($.truthy($.eq((await $.mv((await $.v(C, "ODSCustTypesName")), "AsString")), "İndividual"))) {
      await $.stmt((await $.mcall(L0["wrdselection"], "GoTo", [(-(1)), (await $.v(C, "unAssigned")), (await $.v(C, "unAssigned")), "valaz"])));
      await $.stmt((await $.mcall(L0["wrdselection"], "TypeText", [(await $.call(C, "UTFEncoder", [(await $.mv((await $.v(C, "ODSReportValute")), "Value"))]))])));
      await $.stmt((await $.mcall(L0["wrdselection"], "GoTo", [(-(1)), (await $.v(C, "unAssigned")), (await $.v(C, "unAssigned")), "valeng"])));
      await $.stmt((await $.mcall(L0["wrdselection"], "TypeText", [(await $.call(C, "UTFEncoder", [(await $.mv((await $.v(C, "ODSReportVal_Name")), "Value"))]))])));
      await $.stmt((await $.mcall(L0["wrdselection"], "GoTo", [(-(1)), (await $.v(C, "unAssigned")), (await $.v(C, "unAssigned")), "franshiza"])));
      await $.stmt((await $.mcall(L0["wrdselection"], "TypeText", [(await $.call(C, "FloatToStrF", [(await $.mv((await $.v(C, "ODSReportFranshiz")), "Value")), (await $.v(C, "ffCurrency")), 10, 0]))])));
      await $.stmt((await $.mcall(L0["wrdselection"], "GoTo", [(-(1)), (await $.v(C, "unAssigned")), (await $.v(C, "unAssigned")), "beneficiaryi"])));
      await $.stmt((await $.mcall(L0["wrdselection"], "TypeText", [(await $.call(C, "UTFEncoder", [(await $.mv((await $.v(C, "ODSReportBeneficiary")), "Value"))]))])));
    }
  } catch ($t17) {
    $.rethrowControl($t17);
    $.handled($t17);
  }
  try {
    await $.stmt((await $.mcall(L0["wrdselection"], "GoTo", [(-(1)), (await $.v(C, "unAssigned")), (await $.v(C, "unAssigned")), "intend"])));
    await $.stmt((await $.mcall(L0["wrdselection"], "TypeText", [(await $.call(C, "UTFEncoder", [(await $.v(C, "StrIntend"))]))])));
  } catch ($t18) {
    $.rethrowControl($t18);
    $.handled($t18);
  }
  try {
    await $.stmt((await $.mcall(L0["wrdselection"], "GoTo", [(-(1)), (await $.v(C, "unAssigned")), (await $.v(C, "unAssigned")), "name2"])));
    await $.stmt((await $.mcall(L0["wrdselection"], "TypeText", [(await $.call(C, "UTFEncoder", [(await $.call(C, "AnsiUpperCase", [(await $.mv((await $.v(C, "ODSReportName")), "Value"))]))]))])));
    await $.stmt((await $.mcall(L0["wrdselection"], "GoTo", [(-(1)), (await $.v(C, "unAssigned")), (await $.v(C, "unAssigned")), "str"])));
    await $.stmt((await $.mcall(L0["wrdselection"], "TypeText", [(await $.call(C, "UTFEncoder", [(await $.v(C, "str"))]))])));
    await $.stmt((await $.mcall(L0["wrdselection"], "GoTo", [(-(1)), (await $.v(C, "unAssigned")), (await $.v(C, "unAssigned")), "str1"])));
    await $.stmt((await $.mcall(L0["wrdselection"], "TypeText", [(await $.call(C, "UTFEncoder", [(await $.call(C, "AnsiUpperCase", [(await $.v(C, "str"))]))]))])));
  } catch ($t19) {
    $.rethrowControl($t19);
    $.handled($t19);
  }
  try {
    await $.stmt((await $.mcall(L0["wrdselection"], "GoTo", [(-(1)), (await $.v(C, "unAssigned")), (await $.v(C, "unAssigned")), "beneficiary1"])));
    await $.stmt((await $.mcall(L0["wrdselection"], "TypeText", [(await $.call(C, "UTFEncoder", ["və sığorta etdirən"]))])));
    await $.stmt((await $.mcall(L0["wrdselection"], "GoTo", [(-(1)), (await $.v(C, "unAssigned")), (await $.v(C, "unAssigned")), "beneficiary2"])));
    await $.stmt((await $.mcall(L0["wrdselection"], "TypeText", [(await $.call(C, "UTFEncoder", [(await $.mv((await $.v(C, "ODSReportBeneficiary")), "Value"))]))])));
  } catch ($t20) {
    $.rethrowControl($t20);
    $.handled($t20);
  }
  try {
    await $.stmt((await $.mcall(L0["wrdselection"], "GoTo", [(-(1)), (await $.v(C, "unAssigned")), (await $.v(C, "unAssigned")), "date"])));
    await $.stmt((await $.mcall(L0["wrdselection"], "TypeText", [(await $.call(C, "UTFEncoder", [(await $.mv((await $.v(C, "ODSReportBeginDate")), "AsString"))]))])));
    await $.stmt((await $.mcall(L0["wrdselection"], "GoTo", [(-(1)), (await $.v(C, "unAssigned")), (await $.v(C, "unAssigned")), "date1"])));
    await $.stmt((await $.mcall(L0["wrdselection"], "TypeText", [(await $.call(C, "UTFEncoder", [(await $.mv((await $.v(C, "ODSReportInsDate")), "AsString"))]))])));
    await $.stmt((await $.mcall(L0["wrdselection"], "GoTo", [(-(1)), (await $.v(C, "unAssigned")), (await $.v(C, "unAssigned")), "val"])));
    await $.stmt((await $.mcall(L0["wrdselection"], "TypeText", [(await $.call(C, "UTFEncoder", [(await $.mv((await $.v(C, "ODSReportValute")), "Value"))]))])));
    await $.stmt((await $.mcall(L0["wrdselection"], "GoTo", [(-(1)), (await $.v(C, "unAssigned")), (await $.v(C, "unAssigned")), "inscolor"])));
    await $.stmt((await $.mcall(L0["wrdselection"], "TypeText", [(await $.call(C, "UTFEncoder", [(await $.call(C, "AnsiUpperCase", [(await $.mv((await $.v(C, "ODSReportInsColor")), "Value"))]))]))])));
  } catch ($t21) {
    $.rethrowControl($t21);
    $.handled($t21);
  }
  try {
    await $.stmt((await $.mcall(L0["wrdselection"], "GoTo", [(-(1)), (await $.v(C, "unAssigned")), (await $.v(C, "unAssigned")), "undertable"])));
    await $.set(C, "fmUndertable", (await $.mcall((await $.v(C, "TfmUndertable")), "Create", [Self])));
    {
      const $t23 = (await $.v(C, "fmUndertable"));
      await $.mcall((await $.wv([$t23], "fmUndertable", C, false)), "Show", []);
      await $.mcall((await $.mv((await $.mv((await $.mv((await $.wv([$t23], "OleContainer1", C, false)), "OleObject")), "Application")), "Selection")), "WholeStory", []);
      await $.mcall((await $.mv((await $.mv((await $.mv((await $.wv([$t23], "OleContainer1", C, false)), "OleObject")), "Application")), "Selection")), "Copy", []);
      try {
        await $.mcall((await $.wv([$t23], "fmUndertable", C, false)), "Free", []);
      } catch ($t24) {
        $.rethrowControl($t24);
        $.handled($t24);
        await $.wset([$t23], "ErrorStr", "urra!", { get: async () => L0["errorstr"], set: async (v) => { L0["errorstr"] = v; }, local: true });
      }
    }
    try {
      await $.mcall(L0["wrdselection"], "Paste", []);
    } catch ($t25) {
      $.rethrowControl($t25);
      $.handled($t25);
      L0["errorstr"] = "urrra!";
    }
  } catch ($t22) {
    $.rethrowControl($t22);
    $.handled($t22);
    L0["errorstr"] = "ura!";
  }
  if ($.truthy($.eq((await $.mv((await $.v(C, "ODSCustTypesName")), "AsString")), "Korparativ"))) {
    L0["filename"] = $.add((await $.call(C, "ExtractFilePath", [(await $.mv((await $.v(C, "Application")), "ExeName"))])), "\\CMotorKaskoPolicyExra.doc");
    L0["wrdapp"] = (await $.call(C, "CreateOleObject", ["Word.Application"]));
    await $.mset(L0["wrdapp"], "Visible", true);
    L0["wrddatadoc"] = (await $.mcall((await $.mv(L0["wrdapp"], "Documents")), "Open", [L0["filename"]]));
    L0["wrdselection"] = (await $.mv(L0["wrdapp"], "Selection"));
    await $.stmt((await $.mcall(L0["wrdselection"], "GoTo", [(-(1)), (await $.v(C, "unAssigned")), (await $.v(C, "unAssigned")), "policynum"])));
    await $.mset((await $.mv(L0["wrdselection"], "Font")), "Name", "Times New Roman");
    await $.mset((await $.mv(L0["wrdselection"], "Font")), "Size", 14);
    await $.mset((await $.mv(L0["wrdselection"], "Font")), "Bold", true);
    await $.stmt((await $.mcall(L0["wrdselection"], "TypeText", [(await $.call(C, "UTFEncoder", [(await $.mv((await $.v(C, "ODSContractsPolicy_Num")), "AsString"))]))])));
    await $.stmt((await $.mcall(L0["wrdselection"], "GoTo", [(-(1)), (await $.v(C, "unAssigned")), (await $.v(C, "unAssigned")), "insured"])));
    await $.mset((await $.mv(L0["wrdselection"], "Font")), "Size", 8);
    await $.mset((await $.mv(L0["wrdselection"], "Font")), "Bold", true);
    await $.stmt((await $.mcall(L0["wrdselection"], "TypeText", [(await $.call(C, "UTFEncoder", [(await $.call(C, "AnsiUpperCase", [(await $.mv((await $.v(C, "ODSReportName")), "AsString"))]))]))])));
    await $.stmt((await $.mcall(L0["wrdselection"], "GoTo", [(-(1)), (await $.v(C, "unAssigned")), (await $.v(C, "unAssigned")), "str"])));
    await $.mset((await $.mv(L0["wrdselection"], "Font")), "Size", 8);
    await $.mset((await $.mv(L0["wrdselection"], "Font")), "Bold", true);
    await $.stmt((await $.mcall(L0["wrdselection"], "TypeText", [(await $.call(C, "UTFEncoder", [(await $.call(C, "AnsiUpperCase", [(await $.v(C, "str"))]))]))])));
    await $.stmt((await $.mcall(L0["wrdselection"], "GoTo", [(-(1)), (await $.v(C, "unAssigned")), (await $.v(C, "unAssigned")), "date1"])));
    await $.mset((await $.mv(L0["wrdselection"], "Font")), "Size", 8);
    await $.mset((await $.mv(L0["wrdselection"], "Font")), "Bold", true);
    await $.stmt((await $.mcall(L0["wrdselection"], "TypeText", [(await $.call(C, "UTFEncoder", [(await $.mv((await $.v(C, "ODSReportBeginDate")), "AsString"))]))])));
    await $.stmt((await $.call(C, "MakeExtras", [L0["wrddatadoc"]])));
  }
  return L0.result;
}, {"params": [], "kind": "procedure", "ptypes": []});
  U.method("TfmMKPolicy", "AddTransh", async function AddTransh(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: false};
  {
    const $t26 = (await $.mcall((await $.v(C, "TfmProceses")), "Create", [Self]));
    try {
      await $.wset([$t26], "Result", $.eq((await $.wv([$t26], "ShowModal", C, false)), (await $.wv([$t26], "mrOk", C, false))), { get: async () => L0["result"], set: async (v) => { L0["result"] = v; }, local: true });
    } finally {
      await $.stmt($.wcall([$t26], "Free", [], C));
    }
  }
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TfmMKPolicy", "btPrintClick", async function btPrintClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.eq((await $.mcall((await $.v(C, "LDialogs")), "MessageDlg", ["Əməliyyat aparılsın?", (await $.mv((await $.v(C, "LDialogs")), "mtConfirmation")), [(await $.mv((await $.v(C, "LDialogs")), "mbYes")), (await $.mv((await $.v(C, "LDialogs")), "mbNo"))], 0])), (await $.v(C, "mrYes"))))) {
    if ($.truthy((await $.call(C, "SaveData", [])))) {
      if ($.truthy((await $.call(C, "AddTransh", [])))) {
        await $.stmt((await $.call(C, "ExportToWord", [])));
        await $.stmt((await $.call(C, "DisableControls", [(await $.v(C, "GroupBox1")), false])));
      }
    }
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TfmMKPolicy", "SpeedButton1Click", async function SpeedButton1Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mset((await $.mcall((await $.v(C, "ODSContracts")), "FieldByName", ["POLICY_NUM"])), "AsString", (await $.mcall((await $.v(C, "OPCommon")), "callStringFunction", ["generatePolicy_Num", [(await $.v(C, "tid"))]])));
  await $.mset((await $.v(C, "btApply")), "Enabled", true);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TfmMKPolicy", "BitBtn1Click", async function BitBtn1Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.set(C, "fmUndertable", (await $.mcall((await $.v(C, "TfmUndertable")), "Create", [Self])));
  await $.mcall((await $.v(C, "fmUndertable")), "ShowModal", []);
  await $.mcall((await $.v(C, "fmUndertable")), "Free", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TfmMKPolicy", "ODSContractsAfterEdit", async function ODSContractsAfterEdit(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"dataset": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["dataset"]);
  await $.mset((await $.v(C, "btApply")), "Enabled", true);
  return L0.result;
}, {"params": ["DataSet"], "kind": "procedure", "ptypes": ["TDataSet"]});
  U.method("TfmMKPolicy", "ODSPolicyAfterEdit", async function ODSPolicyAfterEdit(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"dataset": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["dataset"]);
  await $.mset((await $.v(C, "btApply")), "Enabled", true);
  return L0.result;
}, {"params": ["DataSet"], "kind": "procedure", "ptypes": ["TDataSet"]});
  U.method("TfmMKPolicy", "FillRow", async function FillRow(Self, p0, p1, p2, p3, p4, p5, p6, p7) {
  const C = $.chain(Self, U);
  const L0 = {"doc": $.copyArg(p0), "row": $.copyArg(p1), "text0": $.copyArg(p2), "text1": $.copyArg(p3), "text2": $.copyArg(p4), "text3": $.copyArg(p5), "text4": $.copyArg(p6), "text5": $.copyArg(p7), result: undefined};
  await $.fixArgs(L0, ["doc", "row", "text0", "text1", "text2", "text3", "text4", "text5"]);
  await $.stmt((await $.mcall((await $.mv((await $.mcall((await $.mcall((await $.mv(L0["doc"], "Tables")), "Item", [1])), "Cell", [L0["row"], 1])), "Range")), "InsertAfter", [L0["text0"]])));
  await $.stmt((await $.mcall((await $.mv((await $.mcall((await $.mcall((await $.mv(L0["doc"], "Tables")), "Item", [1])), "Cell", [L0["row"], 2])), "Range")), "InsertAfter", [L0["text1"]])));
  await $.stmt((await $.mcall((await $.mv((await $.mcall((await $.mcall((await $.mv(L0["doc"], "Tables")), "Item", [1])), "Cell", [L0["row"], 3])), "Range")), "InsertAfter", [L0["text2"]])));
  await $.stmt((await $.mcall((await $.mv((await $.mcall((await $.mcall((await $.mv(L0["doc"], "Tables")), "Item", [1])), "Cell", [L0["row"], 4])), "Range")), "InsertAfter", [L0["text3"]])));
  await $.stmt((await $.mcall((await $.mv((await $.mcall((await $.mcall((await $.mv(L0["doc"], "Tables")), "Item", [1])), "Cell", [L0["row"], 5])), "Range")), "InsertAfter", [L0["text4"]])));
  await $.stmt((await $.mcall((await $.mv((await $.mcall((await $.mcall((await $.mv(L0["doc"], "Tables")), "Item", [1])), "Cell", [L0["row"], 6])), "Range")), "InsertAfter", [L0["text5"]])));
  return L0.result;
}, {"params": ["Doc", "Row", "Text0", "Text1", "Text2", "Text3", "Text4", "Text5"], "kind": "procedure", "ptypes": ["Variant", "Integer", "String", "String", "String", "String", "String", "String"]});
  U.method("TfmMKPolicy", "MakeExtras", async function MakeExtras(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"wrddatadoc": $.copyArg(p0), result: undefined, "i": 0, "n": 0, "str": ''};
  await $.fixArgs(L0, ["wrddatadoc"]);
  {
    const $t27 = (await $.v(C, "ODSMotorKasko"));
    await $.wset([$t27], "n", (await $.wv([$t27], "RecordCount", C, false)), { get: async () => L0["n"], set: async (v) => { L0["n"] = v; }, local: true });
    await $.stmt($.wcall([$t27], "First", [], C));
    { const $t28 = (await $.wv([$t27], "n", { get: async () => L0["n"], set: async (v) => { L0["n"] = v; }, local: true }, false));
      await $.wset([$t27], "i", 1, { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true });
      let $t29 = true;
      for (;;) {
        if (!$t29) { await $.wset([$t27], "i", $.succ((await $.wv([$t27], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false)), 1), { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }); }
        $t29 = false;
        if (!($.ord((await $.wv([$t27], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false))) <= $.ord($t28))) break;
        await $.mcall((await $.mv((await $.mcall((await $.mv((await $.wv([$t27], "wrdDataDoc", { get: async () => L0["wrddatadoc"], set: async (v) => { L0["wrddatadoc"] = v; }, local: true }, false)), "Tables")), "Item", [1])), "Rows")), "Add", []);
        await $.mset((await $.mv((await $.mv((await $.mcall((await $.mv((await $.mcall((await $.mv((await $.wv([$t27], "wrdDataDoc", { get: async () => L0["wrddatadoc"], set: async (v) => { L0["wrddatadoc"] = v; }, local: true }, false)), "Tables")), "Item", [1])), "Rows")), "Item", [$.add((await $.wv([$t27], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false)), 1)])), "Range")), "Font")), "Name", "Arial AzLat");
        await $.mset((await $.mv((await $.mcall((await $.mv((await $.mcall((await $.mv((await $.wv([$t27], "wrdDataDoc", { get: async () => L0["wrddatadoc"], set: async (v) => { L0["wrddatadoc"] = v; }, local: true }, false)), "Tables")), "Item", [1])), "Rows")), "Item", [$.add((await $.wv([$t27], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false)), 1)])), "Range")), "Bold", (await $.wv([$t27], "false", C, false)));
        await $.stmt((await $.wcall([$t27], "FillRow", [(await $.wv([$t27], "wrdDataDoc", { get: async () => L0["wrddatadoc"], set: async (v) => { L0["wrddatadoc"] = v; }, local: true }, false)), $.add((await $.wv([$t27], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false)), 1), $.add($.add((await $.mv((await $.wv([$t27], "ODSMotorKaskoInsuredMark", C, false)), "AsString")), " "), (await $.mv((await $.wv([$t27], "ODSMotorKaskoInsuredModel", C, false)), "AsString"))), $.add($.add($.add($.add((await $.mv((await $.wv([$t27], "ODSMotorKaskoInsuredColor", C, false)), "AsString")), ", "), (await $.mv((await $.wv([$t27], "ODSMotorKaskoInsuredType", C, false)), "AsString"))), ","), (await $.wcall([$t27], "IntToStr", [(await $.mv((await $.wv([$t27], "ODSMotorKaskoInsuredOutputYear", C, false)), "Value"))], C))), (await $.mv((await $.wv([$t27], "ODSMotorKaskoInsuredEngineNum", C, false)), "AsString")), (await $.mv((await $.wv([$t27], "ODSMotorKaskoInsuredBanNum", C, false)), "AsString")), (await $.mv((await $.wv([$t27], "ODSMotorKaskoInsuredStateNum", C, false)), "AsString")), $.add($.add((await $.mv((await $.wv([$t27], "ODSMotorKaskoUnderFrameNum", C, false)), "AsString")), ", "), (await $.mv((await $.wv([$t27], "ODSMotorKaskoNumSeats", C, false)), "AsString")))], C)));
        await $.mcall((await $.mv((await $.mcall((await $.mv((await $.wv([$t27], "wrdDataDoc", { get: async () => L0["wrddatadoc"], set: async (v) => { L0["wrddatadoc"] = v; }, local: true }, false)), "Tables")), "Item", [2])), "Rows")), "Add", []);
        await $.mset((await $.mv((await $.mv((await $.mcall((await $.mv((await $.mcall((await $.mv((await $.wv([$t27], "wrdDataDoc", { get: async () => L0["wrddatadoc"], set: async (v) => { L0["wrddatadoc"] = v; }, local: true }, false)), "Tables")), "Item", [2])), "Rows")), "Item", [$.add((await $.wv([$t27], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false)), 1)])), "Range")), "Font")), "Name", "Arial AzLat");
        await $.mset((await $.mv((await $.mcall((await $.mv((await $.mcall((await $.mv((await $.wv([$t27], "wrdDataDoc", { get: async () => L0["wrddatadoc"], set: async (v) => { L0["wrddatadoc"] = v; }, local: true }, false)), "Tables")), "Item", [2])), "Rows")), "Item", [$.add((await $.wv([$t27], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false)), 1)])), "Range")), "Bold", (await $.wv([$t27], "false", C, false)));
        await $.stmt((await $.wcall([$t27], "FillRow1", [(await $.wv([$t27], "wrdDataDoc", { get: async () => L0["wrddatadoc"], set: async (v) => { L0["wrddatadoc"] = v; }, local: true }, false)), $.add((await $.wv([$t27], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false)), 1), $.add($.add((await $.mv((await $.wv([$t27], "ODSMotorKaskoFranshiz", C, false)), "AsString")), " "), (await $.mv((await $.wv([$t27], "ODSAvaluteVal_Name", C, false)), "Value"))), $.add($.add((await $.mv((await $.wv([$t27], "ODSMotorKaskoDriveCost", C, false)), "AsString")), " "), (await $.mv((await $.wv([$t27], "ODSAvaluteVal_Name", C, false)), "Value"))), $.add($.add((await $.mv((await $.wv([$t27], "ODSMotorKaskoInssumm", C, false)), "AsString")), " "), (await $.mv((await $.wv([$t27], "ODSAvaluteVal_Name", C, false)), "Value"))), $.add($.add((await $.mv((await $.wv([$t27], "ODSMotorKaskoAmmount", C, false)), "AsString")), " "), (await $.mv((await $.wv([$t27], "ODSAvaluteVal_Name", C, false)), "Value")))], C)));
        await $.stmt($.wcall([$t27], "Next", [], C));
        await $.tick();
      }
    }
  }
  return L0.result;
}, {"params": ["wrdDataDoc"], "kind": "procedure", "ptypes": ["Variant"]});
  U.method("TfmMKPolicy", "FillRow1", async function FillRow1(Self, p0, p1, p2, p3, p4, p5) {
  const C = $.chain(Self, U);
  const L0 = {"doc": $.copyArg(p0), "row": $.copyArg(p1), "text0": $.copyArg(p2), "text1": $.copyArg(p3), "text2": $.copyArg(p4), "text3": $.copyArg(p5), result: undefined};
  await $.fixArgs(L0, ["doc", "row", "text0", "text1", "text2", "text3"]);
  await $.stmt((await $.mcall((await $.mv((await $.mcall((await $.mcall((await $.mv(L0["doc"], "Tables")), "Item", [2])), "Cell", [L0["row"], 1])), "Range")), "InsertAfter", [L0["text0"]])));
  await $.stmt((await $.mcall((await $.mv((await $.mcall((await $.mcall((await $.mv(L0["doc"], "Tables")), "Item", [2])), "Cell", [L0["row"], 2])), "Range")), "InsertAfter", [L0["text1"]])));
  await $.stmt((await $.mcall((await $.mv((await $.mcall((await $.mcall((await $.mv(L0["doc"], "Tables")), "Item", [2])), "Cell", [L0["row"], 3])), "Range")), "InsertAfter", [L0["text2"]])));
  await $.stmt((await $.mcall((await $.mv((await $.mcall((await $.mcall((await $.mv(L0["doc"], "Tables")), "Item", [2])), "Cell", [L0["row"], 4])), "Range")), "InsertAfter", [L0["text3"]])));
  return L0.result;
}, {"params": ["Doc", "Row", "Text0", "Text1", "Text2", "Text3"], "kind": "procedure", "ptypes": ["Variant", "Integer", "String", "String", "String", "String"]});
  U.method("TfmMKPolicy", "UTFEncoder", async function UTFEncoder(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"str": $.copyArg(p0), result: '', "i": 0, "j": 0};
  await $.fixArgs(L0, ["str"]);
  { const $t30 = (await $.call(C, "length", [L0["str"]]));
    L0["i"] = 1;
    let $t31 = true;
    for (;;) {
      if (!$t31) { L0["i"] = $.succ(L0["i"], 1); }
      $t31 = false;
      if (!($.ord(L0["i"]) <= $.ord($t30))) break;
      { const $t32 = $.sub((await $.mv((await $.mv((await $.v(C, "lbNonUnicode")), "Items")), "Count")), 1);
        L0["j"] = 0;
        let $t33 = true;
        for (;;) {
          if (!$t33) { L0["j"] = $.succ(L0["j"], 1); }
          $t33 = false;
          if (!($.ord(L0["j"]) <= $.ord($t32))) break;
          if ($.truthy($.eq((await $.idx(L0["str"], [L0["i"]])), (await $.idx((await $.mv((await $.v(C, "lbNonUnicode")), "Items")), [L0["j"]]))))) {
            { const $t34 = await $.iset(L0["str"], [L0["i"]], (await $.idx((await $.idx((await $.mv((await $.v(C, "tlbUnicode")), "Items")), [L0["j"]])), [1]))); if ($t34 !== undefined) { L0["str"] = $t34; } }
          }
          await $.tick();
        }
      }
      await $.tick();
    }
  }
  L0["result"] = L0["str"];
  return L0.result;
}, {"params": ["str"], "kind": "function", "ptypes": ["WideString"]});
  U.method("TfmMKPolicy", "ODSPolicyAfterInsert", async function ODSPolicyAfterInsert(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"dataset": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["dataset"]);
  await $.mset((await $.mcall(L0["dataset"], "Fieldbyname", ["CID"])), "AsInteger", (await $.v(C, "CID")));
  return L0.result;
}, {"params": ["DataSet"], "kind": "procedure", "ptypes": ["TDataSet"]});
  U.method("TfmMKPolicy", "cbRiskClick", async function cbRiskClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mset((await $.v(C, "gbSame")), "Visible", (await $.mv((await $.v(C, "cbRisk")), "Checked")));
  await $.mset((await $.v(C, "gbGrid")), "Visible", (await $.mv((await $.v(C, "cbRisk")), "Checked")));
  await $.mset((await $.v(C, "cbDifRisk")), "Checked", false);
  await $.mset((await $.v(C, "btPrint")), "Enabled", true);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TfmMKPolicy", "cbDifRiskClick", async function cbDifRiskClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mset((await $.v(C, "gbGrid")), "Visible", (await $.mv((await $.v(C, "cbDifRisk")), "Checked")));
  await $.mset((await $.v(C, "gbSame")), "Visible", $.not(((await $.mv((await $.v(C, "cbDifRisk")), "Checked")))));
  await $.mset((await $.v(C, "cbRisk")), "Checked", false);
  await $.mset((await $.v(C, "btPrint")), "Enabled", true);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TfmMKPolicy", "BitBtn2Click", async function BitBtn2Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "strpath": ''};
  await $.fixArgs(L0, ["sender"]);
  L0["strpath"] = "E:\\Smart-Bank\\bin\\PolicyExtras";
  await $.mset((await $.v(C, "ExtraODialog")), "InitialDir", L0["strpath"]);
  if ($.truthy((await $.mv((await $.v(C, "ExtraODialog")), "Execute")))) {
    await $.mset((await $.v(C, "ExtraODialog")), "InitialDir", L0["strpath"]);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TfmMKPolicy", "BitBtn3Click", async function BitBtn3Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "docfile": null, "i": 0, "n": 0, "j": 0, "wordapp": null, "wrddatadoc": null, "wrdapp": null, "wrdselection": null, "filename": '', "str": '', "strintend": ''};
  await $.fixArgs(L0, ["sender"]);
  await $.mcall((await $.v(C, "ODSReport")), "Close", []);
  await $.stmt((await $.mcall((await $.v(C, "ODSReport")), "SetVariable", ["CID", (await $.v(C, "CID"))])));
  await $.mcall((await $.v(C, "ODSReport")), "Open", []);
  if ($.truthy($.eq((await $.mv((await $.v(C, "ODSReportSex")), "Value")), 0))) {
    L0["str"] = "oğlu";
  } else {
    if ($.truthy($.eq((await $.mv((await $.v(C, "ODSReportSex")), "Value")), 1))) {
      L0["str"] = "qızı";
    }
  }
  L0["filename"] = $.add((await $.call(C, "ExtractFilePath", [(await $.mv((await $.v(C, "Application")), "ExeName"))])), "\\ExtraToMkPolicy.doc");
  L0["wrdapp"] = (await $.call(C, "CreateOleObject", ["Word.Application"]));
  await $.mset(L0["wrdapp"], "Visible", true);
  L0["wrddatadoc"] = (await $.mcall((await $.mv(L0["wrdapp"], "Documents")), "Open", [L0["filename"]]));
  L0["wrdselection"] = (await $.mv(L0["wrdapp"], "Selection"));
  try {
    await $.stmt((await $.mcall(L0["wrdselection"], "GoTo", [(-(1)), (await $.v(C, "unAssigned")), (await $.v(C, "unAssigned")), "policynum"])));
    await $.stmt((await $.mcall(L0["wrdselection"], "TypeText", [(await $.call(C, "UTFEncoder", [(await $.mv((await $.v(C, "ODSReportPolicyNum")), "Value"))]))])));
    await $.stmt((await $.mcall(L0["wrdselection"], "GoTo", [(-(1)), (await $.v(C, "unAssigned")), (await $.v(C, "unAssigned")), "name"])));
    await $.stmt((await $.mcall(L0["wrdselection"], "TypeText", [(await $.call(C, "UTFEncoder", [(await $.mv((await $.v(C, "ODSReportName")), "Value"))]))])));
    await $.stmt((await $.mcall(L0["wrdselection"], "GoTo", [(-(1)), (await $.v(C, "unAssigned")), (await $.v(C, "unAssigned")), "str"])));
    await $.stmt((await $.mcall(L0["wrdselection"], "TypeText", [(await $.call(C, "UTFEncoder", [L0["str"]]))])));
    await $.stmt((await $.mcall(L0["wrdselection"], "GoTo", [(-(1)), (await $.v(C, "unAssigned")), (await $.v(C, "unAssigned")), "begindate"])));
    await $.stmt((await $.mcall(L0["wrdselection"], "TypeText", [(await $.mv((await $.v(C, "ODSReportBeginDate")), "Value"))])));
    await $.stmt((await $.mcall(L0["wrdselection"], "GoTo", [(-(1)), (await $.v(C, "unAssigned")), (await $.v(C, "unAssigned")), "enddate"])));
    await $.stmt((await $.mcall(L0["wrdselection"], "TypeText", [(await $.mv((await $.v(C, "ODSReportEndDate")), "Value"))])));
    await $.stmt((await $.mcall(L0["wrdselection"], "GoTo", [(-(1)), (await $.v(C, "unAssigned")), (await $.v(C, "unAssigned")), "name2"])));
    await $.stmt((await $.mcall(L0["wrdselection"], "TypeText", [(await $.call(C, "UTFEncoder", [(await $.call(C, "AnsiUpperCase", [(await $.mv((await $.v(C, "ODSReportName")), "Value"))]))]))])));
    await $.stmt((await $.mcall(L0["wrdselection"], "GoTo", [(-(1)), (await $.v(C, "unAssigned")), (await $.v(C, "unAssigned")), "str1"])));
    await $.stmt((await $.mcall(L0["wrdselection"], "TypeText", [(await $.call(C, "UTFEncoder", [(await $.call(C, "AnsiUpperCase", [L0["str"]]))]))])));
  } catch ($t35) {
    $.rethrowControl($t35);
    $.handled($t35);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TfmMKPolicy", "BitBtn4Click", async function BitBtn4Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "docfile": null, "i": 0, "n": 0, "j": 0, "k": 0, "wordapp": null, "wrddatadoc": null, "wrdapp": null, "wrdselection": null, "filename": '', "str": '', "strintend": ''};
  await $.fixArgs(L0, ["sender"]);
  await $.mcall((await $.v(C, "ODSReport")), "Close", []);
  await $.stmt((await $.mcall((await $.v(C, "ODSReport")), "SetVariable", ["CID", (await $.v(C, "CID"))])));
  await $.mcall((await $.v(C, "ODSReport")), "Open", []);
  if ($.truthy($.eq((await $.mv((await $.v(C, "ODSReportSex")), "Value")), 0))) {
    L0["str"] = "oğlu";
  } else {
    if ($.truthy($.eq((await $.mv((await $.v(C, "ODSReportSex")), "Value")), 1))) {
      L0["str"] = "qızı";
    }
  }
  await $.stmt((await $.mcall((await $.v(C, "ODSCustTypes")), "SetVariable", ["id", (await $.mv((await $.v(C, "ODSCustomersInsured_TypeID")), "Value"))])));
  await $.mcall((await $.v(C, "ODSCustTypes")), "Open", []);
  await $.mcall((await $.v(C, "ODSReport")), "First", []);
  { const $t36 = $.sub((await $.mv((await $.v(C, "ODSReport")), "RecordCount")), 1);
    L0["k"] = 0;
    let $t37 = true;
    for (;;) {
      if (!$t37) { L0["k"] = $.succ(L0["k"], 1); }
      $t37 = false;
      if (!($.ord(L0["k"]) <= $.ord($t36))) break;
      L0["filename"] = $.add((await $.call(C, "ExtractFilePath", [(await $.mv((await $.v(C, "Application")), "ExeName"))])), "\\KaskoInsuranceKart1.doc");
      L0["wrdapp"] = (await $.call(C, "CreateOleObject", ["Word.Application"]));
      await $.mset(L0["wrdapp"], "Visible", true);
      L0["wrddatadoc"] = (await $.mcall((await $.mv(L0["wrdapp"], "Documents")), "Open", [L0["filename"]]));
      L0["wrdselection"] = (await $.mv(L0["wrdapp"], "Selection"));
      { const $t38 = (await $.mv((await $.v(C, "ODSReport")), "FieldCount"));
        L0["i"] = 0;
        let $t39 = true;
        for (;;) {
          if (!$t39) { L0["i"] = $.succ(L0["i"], 1); }
          $t39 = false;
          if (!($.ord(L0["i"]) <= $.ord($t38))) break;
          try {
            await $.stmt((await $.mcall(L0["wrdselection"], "GoTo", [(-(1)), (await $.v(C, "unAssigned")), (await $.v(C, "unAssigned")), (await $.call(C, "lowercase", [(await $.mv((await $.idx((await $.mv((await $.v(C, "ODSReport")), "fields")), [L0["i"]])), "DisplayName"))]))])));
            await $.mset((await $.mv(L0["wrdselection"], "Font")), "Bold", true);
            await $.stmt((await $.mcall(L0["wrdselection"], "TypeText", [(await $.call(C, "UTFEncoder", [(await $.call(C, "VarToStr", [(await $.mv((await $.idx((await $.mv((await $.v(C, "ODSReport")), "fields")), [L0["i"]])), "AsVariant"))]))]))])));
          } catch ($t40) {
            $.rethrowControl($t40);
            $.handled($t40);
          }
          await $.tick();
        }
      }
      try {
        await $.stmt((await $.mcall(L0["wrdselection"], "GoTo", [(-(1)), (await $.v(C, "unAssigned")), (await $.v(C, "unAssigned")), (await $.call(C, "lowercase", ["insured"]))])));
        await $.mset((await $.mv(L0["wrdselection"], "Font")), "Bold", true);
        await $.stmt((await $.mcall(L0["wrdselection"], "TypeText", [(await $.call(C, "UTFEncoder", [$.add($.add((await $.mv((await $.v(C, "ODSReportName")), "AsString")), " "), L0["str"])]))])));
        await $.stmt((await $.mcall(L0["wrdselection"], "GoTo", [(-(1)), (await $.v(C, "unAssigned")), (await $.v(C, "unAssigned")), (await $.call(C, "lowercase", ["beneficiaryk"]))])));
        await $.mset((await $.mv(L0["wrdselection"], "Font")), "Bold", true);
        if ($.truthy($.ne((await $.mv((await $.v(C, "ODSCustTypesName")), "AsString")), "Bank"))) {
          await $.stmt((await $.mcall(L0["wrdselection"], "TypeText", [(await $.call(C, "UTFEncoder", [(await $.mv((await $.v(C, "ODSReportBeneficiary")), "AsString"))]))])));
        } else {
          await $.stmt((await $.mcall(L0["wrdselection"], "TypeText", [(await $.call(C, "UTFEncoder", [$.add((await $.mv((await $.v(C, "ODSReportBeneficiary")), "AsString")), " və sığorta etdirən")]))])));
        }
        await $.stmt((await $.mcall(L0["wrdselection"], "GoTo", [(-(1)), (await $.v(C, "unAssigned")), (await $.v(C, "unAssigned")), "insuredmodel1"])));
        await $.mset((await $.mv(L0["wrdselection"], "Font")), "Bold", true);
        await $.stmt((await $.mcall(L0["wrdselection"], "TypeText", [(await $.call(C, "UTFEncoder", [$.add($.add((await $.mv((await $.v(C, "ODSReportInsuredmodel")), "AsString")), ","), (await $.call(C, "LowerCase", [L0["strintend"]])))]))])));
        await $.stmt((await $.mcall(L0["wrdselection"], "GoTo", [(-(1)), (await $.v(C, "unAssigned")), (await $.v(C, "unAssigned")), (await $.call(C, "lowercase", ["franshiza"]))])));
        await $.mset((await $.mv(L0["wrdselection"], "Font")), "Bold", true);
        await $.stmt((await $.mcall(L0["wrdselection"], "TypeText", [(await $.call(C, "UTFEncoder", [$.add((await $.mv((await $.v(C, "ODSReportFranshiz")), "AsString")), (await $.mv((await $.v(C, "ODSReportValute")), "AsString")))]))])));
        await $.stmt((await $.mcall(L0["wrdselection"], "GoTo", [(-(1)), (await $.v(C, "unAssigned")), (await $.v(C, "unAssigned")), (await $.call(C, "lowercase", ["avtovalue"]))])));
        await $.mset((await $.mv(L0["wrdselection"], "Font")), "Bold", true);
        await $.stmt((await $.mcall(L0["wrdselection"], "TypeText", [(await $.call(C, "UTFEncoder", [$.add((await $.mv((await $.v(C, "ODSReportAvtoCost")), "AsString")), (await $.mv((await $.v(C, "ODSReportValute")), "AsString")))]))])));
        await $.stmt((await $.mcall(L0["wrdselection"], "GoTo", [(-(1)), (await $.v(C, "unAssigned")), (await $.v(C, "unAssigned")), (await $.call(C, "lowercase", ["insumm"]))])));
        await $.mset((await $.mv(L0["wrdselection"], "Font")), "Bold", true);
        await $.stmt((await $.mcall(L0["wrdselection"], "TypeText", [(await $.call(C, "UTFEncoder", [$.add((await $.mv((await $.v(C, "ODSReportInsSumm")), "AsString")), (await $.mv((await $.v(C, "ODSReportValute")), "AsString")))]))])));
      } catch ($t41) {
        $.rethrowControl($t41);
        $.handled($t41);
      }
      await $.mcall((await $.v(C, "ODSReport")), "Next", []);
      await $.tick();
    }
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  return U;
}
