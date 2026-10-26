// Generated from MKSuggestionImpl.pas by pas2js — do not edit by hand; regenerate instead.
/* eslint-disable */
// @ts-nocheck

export default function define($) {
  const U = $.unit("MKSuggestionImpl", ["Windows", "Messages", "SysUtils", "Classes", "Graphics", "Controls", "Forms", "Dialogs", "ActiveX", "AxCtrls", "MKSuggestion_TLB", "StdVcl", "SBPlgAx50_TLB", "StdCtrls", "HintBox", "ExtCtrls", "Buttons", "Mask", "DBCtrls", "Db", "OracleData", "ComCtrls", "INSWordExporter", "PlgModalContainer", "Oracle", "Grids", "DBGrids", "TntStdCtrls", "ComObj", "ComServ", "sboapiDataModuleImpl", "URiskTypes", "MKSUnderTable"]);
  const C = [U];
  U.defClass("TfmMKSuggestion", "TActiveForm", {"panel1": {"name": "Panel1", "type": "TPanel"}, "btok": {"name": "btOk", "type": "TBitBtn"}, "bitbtn2": {"name": "BitBtn2", "type": "TBitBtn"}, "dscusts": {"name": "DSCusts", "type": "TDataSource"}, "odscusts": {"name": "ODSCusts", "type": "TOracleDataSet"}, "odscustsid": {"name": "ODSCustsID", "type": "TIntegerField"}, "odscustsaddress": {"name": "ODSCustsADDRESS", "type": "TStringField"}, "odsbankinfo": {"name": "ODSBankinfo", "type": "TOracleDataSet"}, "odsbankinfobank": {"name": "ODSBankinfoBANK", "type": "TStringField"}, "odsbankinfoaz_name": {"name": "ODSBankinfoAZ_NAME", "type": "TStringField"}, "odsbankinfoseher": {"name": "ODSBankinfoSEHER", "type": "TStringField"}, "odsbankinfoadress": {"name": "ODSBankinfoADRESS", "type": "TStringField"}, "odsbankinfotel": {"name": "ODSBankinfoTEL", "type": "TStringField"}, "odsbankinfofax": {"name": "ODSBankinfoFAX", "type": "TStringField"}, "odsbankinfoemail": {"name": "ODSBankinfoEMAIL", "type": "TStringField"}, "dsbankinfo": {"name": "DSBankinfo", "type": "TDataSource"}, "odspolicy": {"name": "ODSPolicy", "type": "TOracleDataSet"}, "dspolicy": {"name": "DSPolicy", "type": "TDataSource"}, "dsrisks": {"name": "DSRisks", "type": "TDataSource"}, "odsrisk": {"name": "ODSRisk", "type": "TOracleDataSet"}, "odsfranshiz": {"name": "ODSFranshiz", "type": "TOracleDataSet"}, "dsfranshiz": {"name": "DSFranshiz", "type": "TDataSource"}, "suggestionreport": {"name": "SuggestionReport", "type": "TINSWordExporter"}, "odsfranshizid": {"name": "ODSFranshizID", "type": "TFloatField"}, "odsfranshizname": {"name": "ODSFranshizNAME", "type": "TStringField"}, "btapply": {"name": "btApply", "type": "TBitBtn"}, "btpolicy": {"name": "btPolicy", "type": "TBitBtn"}, "pmcpolicy": {"name": "pmcPolicy", "type": "TPlgModalContainer"}, "odscontracts": {"name": "ODSContracts", "type": "TOracleDataSet"}, "odscontractsid": {"name": "ODSContractsID", "type": "TFloatField"}, "odscontractstype_id": {"name": "ODSContractsTYPE_ID", "type": "TFloatField"}, "odscontractsins_date": {"name": "ODSContractsINS_DATE", "type": "TDateTimeField"}, "odscontractsbegin_date": {"name": "ODSContractsBEGIN_DATE", "type": "TDateTimeField"}, "odscontractsend_date": {"name": "ODSContractsEND_DATE", "type": "TDateTimeField"}, "odscontractsvalute_id": {"name": "ODSContractsVALUTE_ID", "type": "TFloatField"}, "odscontractsammount": {"name": "ODSContractsAMMOUNT", "type": "TFloatField"}, "odscontractsclose_prefix": {"name": "ODSContractsCLOSE_PREFIX", "type": "TIntegerField"}, "odscontractskli_id": {"name": "ODSContractsKLI_ID", "type": "TFloatField"}, "odscontractsloanacc_id": {"name": "ODSContractsLOANACC_ID", "type": "TFloatField"}, "odscontractscurracc_id": {"name": "ODSContractsCURRACC_ID", "type": "TFloatField"}, "odscontractspolicy_num": {"name": "ODSContractsPOLICY_NUM", "type": "TStringField"}, "dscontracts": {"name": "DSContracts", "type": "TDataSource"}, "opkasko": {"name": "OPKASKO", "type": "TOraclePackage"}, "odsmotorkasko": {"name": "ODSMotorKasko", "type": "TOracleDataSet"}, "odsmotorkaskoid": {"name": "ODSMotorKaskoID", "type": "TFloatField"}, "odsmotorkaskoinsuredtype": {"name": "ODSMotorKaskoINSUREDTYPE", "type": "TStringField"}, "odsmotorkaskoinsuredcolor": {"name": "ODSMotorKaskoINSUREDCOLOR", "type": "TStringField"}, "odsmotorkaskoinsuredoutputyear": {"name": "ODSMotorKaskoINSUREDOUTPUTYEAR", "type": "TIntegerField"}, "odsmotorkaskoinsuredstatenum": {"name": "ODSMotorKaskoINSUREDSTATENUM", "type": "TStringField"}, "odsmotorkaskounderframenum": {"name": "ODSMotorKaskoUNDERFRAMENUM", "type": "TStringField"}, "odsmotorkaskoinsuredbannum": {"name": "ODSMotorKaskoINSUREDBANNUM", "type": "TStringField"}, "odsmotorkaskoinsuredenginenum": {"name": "ODSMotorKaskoINSUREDENGINENUM", "type": "TStringField"}, "odsmotorkaskodriveintended": {"name": "ODSMotorKaskoDRIVEINTENDED", "type": "TStringField"}, "odsmotorkaskodrivecost": {"name": "ODSMotorKaskoDRIVECOST", "type": "TFloatField"}, "odsmotorkaskobegindate": {"name": "ODSMotorKaskoBEGINDATE", "type": "TDateTimeField"}, "odsmotorkaskoenddate": {"name": "ODSMotorKaskoENDDATE", "type": "TDateTimeField"}, "odsmotorkaskotypeid": {"name": "ODSMotorKaskoTYPEID", "type": "TIntegerField"}, "odsmotorkaskoclose_prefix": {"name": "ODSMotorKaskoCLOSE_PREFIX", "type": "TIntegerField"}, "odsmotorkaskobank_id": {"name": "ODSMotorKaskoBANK_ID", "type": "TFloatField"}, "odsmotorkaskomonth_id": {"name": "ODSMotorKaskoMONTH_ID", "type": "TFloatField"}, "odsmotorkaskoinsobject": {"name": "ODSMotorKaskoINSOBJECT", "type": "TStringField"}, "odscontractsinssumm": {"name": "ODSContractsINSSUMM", "type": "TFloatField"}, "odscontractsfranshiz": {"name": "ODSContractsFRANSHIZ", "type": "TFloatField"}, "odscontractstariff": {"name": "ODSContractsTARIFF", "type": "TFloatField"}, "odsmotorkaskoinsuredmark": {"name": "ODSMotorKaskoINSUREDMARK", "type": "TStringField"}, "odsmotorkaskoinsuredmodel": {"name": "ODSMotorKaskoINSUREDMODEL", "type": "TStringField"}, "panel2": {"name": "Panel2", "type": "TPanel"}, "panel3": {"name": "Panel3", "type": "TPanel"}, "label1": {"name": "Label1", "type": "TLabel"}, "label2": {"name": "Label2", "type": "TLabel"}, "edit1": {"name": "Edit1", "type": "TEdit"}, "dbedit1": {"name": "DBEdit1", "type": "TDBEdit"}, "groupbox1": {"name": "GroupBox1", "type": "TGroupBox"}, "label3": {"name": "Label3", "type": "TLabel"}, "label4": {"name": "Label4", "type": "TLabel"}, "dbedit2": {"name": "DBEdit2", "type": "TDBEdit"}, "dbedit3": {"name": "DBEdit3", "type": "TDBEdit"}, "groupbox2": {"name": "GroupBox2", "type": "TGroupBox"}, "opcommon": {"name": "OPCOMMON", "type": "TOraclePackage"}, "odscontractsstate": {"name": "ODSContractsSTATE", "type": "TIntegerField"}, "btprint": {"name": "btPrint", "type": "TBitBtn"}, "odsmotorkaskofranshiz": {"name": "ODSMotorKaskoFRANSHIZ", "type": "TFloatField"}, "odsmotorkaskotariff": {"name": "ODSMotorKaskoTARIFF", "type": "TFloatField"}, "odsmotorkaskoinssumm": {"name": "ODSMotorKaskoINSSUMM", "type": "TFloatField"}, "odsmotorkaskoammount": {"name": "ODSMotorKaskoAMMOUNT", "type": "TFloatField"}, "odsavalute": {"name": "ODSAvalute", "type": "TOracleDataSet"}, "odsavalutevalute": {"name": "ODSAvaluteVALUTE", "type": "TIntegerField"}, "odsavaluteval_name": {"name": "ODSAvaluteVAL_NAME", "type": "TStringField"}, "odsavalutevalu_name": {"name": "ODSAvaluteVALU_NAME", "type": "TStringField"}, "odsavalutevalu_short": {"name": "ODSAvaluteVALU_SHORT", "type": "TStringField"}, "dsavalute": {"name": "DSAvalute", "type": "TDataSource"}, "odspolicyid": {"name": "ODSPolicyID", "type": "TFloatField"}, "odspolicytheft": {"name": "ODSPolicyTHEFT", "type": "TFloatField"}, "odspolicyfire": {"name": "ODSPolicyFIRE", "type": "TFloatField"}, "odspolicyexplosion": {"name": "ODSPolicyEXPLOSION", "type": "TFloatField"}, "odspolicytrafficaccident": {"name": "ODSPolicyTRAFFICACCIDENT", "type": "TFloatField"}, "odspolicyimpactanyobject": {"name": "ODSPolicyIMPACTANYOBJECT", "type": "TFloatField"}, "odspolicynatcatastrophe": {"name": "ODSPolicyNATCATASTROPHE", "type": "TFloatField"}, "odspolicypolicynum": {"name": "ODSPolicyPOLICYNUM", "type": "TStringField"}, "odspolicyundertable": {"name": "ODSPolicyUNDERTABLE", "type": "TBlobField"}, "odspolicycid": {"name": "ODSPolicyCID", "type": "TFloatField"}, "odspolicyrisks": {"name": "ODSPolicyRISKS", "type": "TFloatField"}, "odspolicyname": {"name": "ODSPolicyNAME", "type": "TStringField"}, "odspolicyriskaddress": {"name": "ODSPolicyRISKADDRESS", "type": "TStringField"}, "cbrisk": {"name": "cbRisk", "type": "TCheckBox"}, "cbdifrisk": {"name": "cbDifRisk", "type": "TCheckBox"}, "gbgrid": {"name": "gbGrid", "type": "TGroupBox"}, "dbgrid1": {"name": "DBGrid1", "type": "TDBGrid"}, "dbnavigator1": {"name": "DBNavigator1", "type": "TDBNavigator"}, "gbsame": {"name": "gbSame", "type": "TGroupBox"}, "label6": {"name": "Label6", "type": "TLabel"}, "label7": {"name": "Label7", "type": "TLabel"}, "label8": {"name": "Label8", "type": "TLabel"}, "label9": {"name": "Label9", "type": "TLabel"}, "label10": {"name": "Label10", "type": "TLabel"}, "dbedit5": {"name": "DBEdit5", "type": "TDBEdit"}, "dbedit6": {"name": "DBEdit6", "type": "TDBEdit"}, "dbedit7": {"name": "DBEdit7", "type": "TDBEdit"}, "dbedit8": {"name": "DBEdit8", "type": "TDBEdit"}, "dbedit9": {"name": "DBEdit9", "type": "TDBEdit"}, "odsriskid": {"name": "ODSRiskID", "type": "TFloatField"}, "odsriskname": {"name": "ODSRiskNAME", "type": "TStringField"}, "odspolicyrisk": {"name": "ODSPolicyrisk", "type": "TStringField"}, "dstemplates": {"name": "DSTemplates", "type": "TDataSource"}, "odstemplates": {"name": "ODSTemplates", "type": "TOracleDataSet"}, "odstemplatesid": {"name": "ODSTemplatesID", "type": "TFloatField"}, "odstemplatesname": {"name": "ODSTemplatesNAME", "type": "TStringField"}, "odstemplatestemplate": {"name": "ODSTemplatesTEMPLATE", "type": "TBlobField"}, "lbnonunicode": {"name": "lbNonUnicode", "type": "TListBox"}, "tlbunicode": {"name": "tlbUnicode", "type": "TTntListBox"}, "odscustsname": {"name": "ODSCustsNAME", "type": "TStringField"}, "opsbmsg": {"name": "OPSBMSG", "type": "TOraclePackage"}, "odsreport": {"name": "ODSReport", "type": "TOracleDataSet"}, "odsreportname": {"name": "ODSReportNAME", "type": "TStringField"}, "odsreportinsuredtype": {"name": "ODSReportINSUREDTYPE", "type": "TStringField"}, "odsreportinsuredcolor": {"name": "ODSReportINSUREDCOLOR", "type": "TStringField"}, "odsreportinsuredoutputyear": {"name": "ODSReportINSUREDOUTPUTYEAR", "type": "TIntegerField"}, "odsreportinsuredmodel": {"name": "ODSReportINSUREDMODEL", "type": "TStringField"}, "odsreportinsuredstatenum": {"name": "ODSReportINSUREDSTATENUM", "type": "TStringField"}, "odsreportunderframenum": {"name": "ODSReportUNDERFRAMENUM", "type": "TStringField"}, "odsreportinsuredbannum": {"name": "ODSReportINSUREDBANNUM", "type": "TStringField"}, "odsreportdriveaccesspiople": {"name": "ODSReportDRIVEACCESSPIOPLE", "type": "TStringField"}, "odsreportinsuredenginenum": {"name": "ODSReportINSUREDENGINENUM", "type": "TStringField"}, "odsreportaccessoriesname": {"name": "ODSReportACCESSORIESNAME", "type": "TStringField"}, "odsreportbegindate": {"name": "ODSReportBEGINDATE", "type": "TStringField"}, "odsreportinsdate": {"name": "ODSReportINSDATE", "type": "TStringField"}, "odsreportenddate": {"name": "ODSReportENDDATE", "type": "TStringField"}, "odsreportpolicynum": {"name": "ODSReportPOLICYNUM", "type": "TStringField"}, "odsreporttheft": {"name": "ODSReportTHEFT", "type": "TFloatField"}, "odsreportfire": {"name": "ODSReportFIRE", "type": "TFloatField"}, "odsreporttrafficaccident": {"name": "ODSReportTRAFFICACCIDENT", "type": "TFloatField"}, "odsreportimpactanyobject": {"name": "ODSReportIMPACTANYOBJECT", "type": "TFloatField"}, "odsreportexplosion": {"name": "ODSReportEXPLOSION", "type": "TFloatField"}, "odsreportagent": {"name": "ODSReportAGENT", "type": "TStringField"}, "odsreportvalute": {"name": "ODSReportVALUTE", "type": "TStringField"}, "odsreportbeneficiary": {"name": "ODSReportBENEFICIARY", "type": "TStringField"}, "odsreportloanacc_id": {"name": "ODSReportLOANACC_ID", "type": "TFloatField"}, "odsreportcurracc_id": {"name": "ODSReportCURRACC_ID", "type": "TFloatField"}, "odsreportdriveintended": {"name": "ODSReportDRIVEINTENDED", "type": "TStringField"}, "odsreportsex": {"name": "ODSReportSEX", "type": "TIntegerField"}, "odsreportnumseats": {"name": "ODSReportNUMSEATS", "type": "TStringField"}, "odsreportfranshiz": {"name": "ODSReportFRANSHIZ", "type": "TFloatField"}, "odsreportextrafranshiz": {"name": "ODSReportEXTRAFRANSHIZ", "type": "TStringField"}, "odsreportavtocost": {"name": "ODSReportAVTOCOST", "type": "TFloatField"}, "odsreportinssumm": {"name": "ODSReportINSSUMM", "type": "TFloatField"}, "odsreportammount": {"name": "ODSReportAMMOUNT", "type": "TFloatField"}, "odsreportinsuredaddress": {"name": "ODSReportINSUREDADDRESS", "type": "TStringField"}, "odsreportmobilephone": {"name": "ODSReportMOBILEPHONE", "type": "TStringField"}, "odsreporthomephone": {"name": "ODSReportHOMEPHONE", "type": "TStringField"}, "odsreporttariff": {"name": "ODSReportTARIFF", "type": "TFloatField"}, "odsactivity": {"name": "ODSActivity", "type": "TOracleDataSet"}, "dsactivity": {"name": "DSActivity", "type": "TDataSource"}, "odsactivityid": {"name": "ODSActivityID", "type": "TFloatField"}, "odsactivityname": {"name": "ODSActivityNAME", "type": "TStringField"}, "odsreportactivity": {"name": "ODSReportACTIVITY", "type": "TStringField"}, "odscustsact_id": {"name": "ODSCustsACT_ID", "type": "TIntegerField"}, "odsreportsugnum": {"name": "ODSReportSUGNUM", "type": "TStringField"}, "fparams": {"name": "FParams", "type": "TStrings"}, "fownerhandle": {"name": "FOwnerHandle", "type": "Integer"}, "id": {"name": "ID", "type": "Integer"}, "issaved": {"name": "IsSaved", "type": "Boolean"}, "fevents": {"name": "FEvents", "type": "IfmMKSuggestionEvents"}}, {"params": {"name": "Params", "read": "Get_Params", "write": "Set_Params"}});
  U.init(async () => {
    try { U.const("tconversionexcept", await $.ref_(C, "Exception")); } catch (e) { /* unresolved alias */ }
    U.const("WM_ModalResult", $.add((await $.v(C, "WM_USER")), 139));
    U.const("fmCaption", "Kasko sigortasi teklifname formasi: (%s)");
    U.const("pSuggMaking", 2);
    U.const("pSuggDone", 3);
    U.var_("fmMKSuggestion", null, "TfmMKSuggestion");
  });
  U.method("TfmMKSuggestion", "DefinePropertyPages", async function DefinePropertyPages(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"definepropertypage": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["definepropertypage"]);
  return L0.result;
}, {"params": ["DefinePropertyPage"], "kind": "procedure", "ptypes": ["TDefinePropertyPage"]});
  U.method("TfmMKSuggestion", "EventSinkChanged", async function EventSinkChanged(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"eventsink": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["eventsink"]);
  await $.set(C, "FEvents", L0["eventsink"]);
  return L0.result;
}, {"params": ["EventSink"], "kind": "procedure", "ptypes": ["IUnknown"]});
  U.method("TfmMKSuggestion", "Initialize", async function Initialize(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: undefined};
  await $.inherited(Self, "TfmMKSuggestion", "Initialize", null, arguments);
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
  U.method("TfmMKSuggestion", "Get_Active", async function Get_Active(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: false};
  L0["result"] = (await $.v(C, "Active"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TfmMKSuggestion", "Get_AutoScroll", async function Get_AutoScroll(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: false};
  L0["result"] = (await $.v(C, "AutoScroll"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TfmMKSuggestion", "Get_AutoSize", async function Get_AutoSize(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: false};
  L0["result"] = (await $.v(C, "AutoSize"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TfmMKSuggestion", "Get_AxBorderStyle", async function Get_AxBorderStyle(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: null};
  L0["result"] = (await $.call(C, "Ord", [(await $.v(C, "AxBorderStyle"))]));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TfmMKSuggestion", "Get_Caption", async function Get_Caption(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: ''};
  L0["result"] = (await $.call(C, "WideString", [(await $.v(C, "Caption"))]));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TfmMKSuggestion", "Get_Color", async function Get_Color(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: null};
  L0["result"] = (await $.call(C, "OLE_COLOR", [(await $.v(C, "Color"))]));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TfmMKSuggestion", "Get_Cursor", async function Get_Cursor(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: 0};
  L0["result"] = (await $.call(C, "Smallint", [(await $.v(C, "Cursor"))]));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TfmMKSuggestion", "Get_DoubleBuffered", async function Get_DoubleBuffered(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: false};
  L0["result"] = (await $.v(C, "DoubleBuffered"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TfmMKSuggestion", "Get_DropTarget", async function Get_DropTarget(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: false};
  L0["result"] = (await $.v(C, "DropTarget"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TfmMKSuggestion", "Get_Enabled", async function Get_Enabled(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: false};
  L0["result"] = (await $.v(C, "Enabled"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TfmMKSuggestion", "Get_Font", async function Get_Font(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: null};
  await $.stmt((await $.call(C, "GetOleFont", [(await $.v(C, "Font")), L0["result"]])));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TfmMKSuggestion", "Get_HelpFile", async function Get_HelpFile(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: ''};
  L0["result"] = (await $.call(C, "WideString", [(await $.v(C, "HelpFile"))]));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TfmMKSuggestion", "Get_KeyPreview", async function Get_KeyPreview(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: false};
  L0["result"] = (await $.v(C, "KeyPreview"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TfmMKSuggestion", "Get_PixelsPerInch", async function Get_PixelsPerInch(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: 0};
  L0["result"] = (await $.v(C, "PixelsPerInch"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TfmMKSuggestion", "Get_PrintScale", async function Get_PrintScale(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: null};
  L0["result"] = (await $.call(C, "Ord", [(await $.v(C, "PrintScale"))]));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TfmMKSuggestion", "Get_Scaled", async function Get_Scaled(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: false};
  L0["result"] = (await $.v(C, "Scaled"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TfmMKSuggestion", "Get_Visible", async function Get_Visible(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: false};
  L0["result"] = (await $.v(C, "Visible"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TfmMKSuggestion", "Get_VisibleDockClientCount", async function Get_VisibleDockClientCount(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: 0};
  L0["result"] = (await $.v(C, "VisibleDockClientCount"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TfmMKSuggestion", "_Set_Font", async function _Set_Font(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.stmt((await $.call(C, "SetOleFont", [(await $.v(C, "Font")), L0["value"]])));
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["IFontDisp"]});
  U.method("TfmMKSuggestion", "ActivateEvent", async function ActivateEvent(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.ne((await $.v(C, "FEvents")), null))) {
    await $.mcall((await $.v(C, "FEvents")), "OnActivate", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TfmMKSuggestion", "ClickEvent", async function ClickEvent(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.ne((await $.v(C, "FEvents")), null))) {
    await $.mcall((await $.v(C, "FEvents")), "OnClick", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TfmMKSuggestion", "CreateEvent", async function CreateEvent(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.ne((await $.v(C, "FEvents")), null))) {
    await $.mcall((await $.v(C, "FEvents")), "OnCreate", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TfmMKSuggestion", "DblClickEvent", async function DblClickEvent(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.ne((await $.v(C, "FEvents")), null))) {
    await $.mcall((await $.v(C, "FEvents")), "OnDblClick", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TfmMKSuggestion", "DeactivateEvent", async function DeactivateEvent(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.ne((await $.v(C, "FEvents")), null))) {
    await $.mcall((await $.v(C, "FEvents")), "OnDeactivate", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TfmMKSuggestion", "DestroyEvent", async function DestroyEvent(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.ne((await $.v(C, "FEvents")), null))) {
    await $.mcall((await $.v(C, "FEvents")), "OnDestroy", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TfmMKSuggestion", "KeyPressEvent", async function KeyPressEvent(Self, p0, p1) {
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
  U.method("TfmMKSuggestion", "PaintEvent", async function PaintEvent(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.ne((await $.v(C, "FEvents")), null))) {
    await $.mcall((await $.v(C, "FEvents")), "OnPaint", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TfmMKSuggestion", "Set_AutoScroll", async function Set_AutoScroll(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "AutoScroll", L0["value"]);
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["WordBool"]});
  U.method("TfmMKSuggestion", "Set_AutoSize", async function Set_AutoSize(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "AutoSize", L0["value"]);
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["WordBool"]});
  U.method("TfmMKSuggestion", "Set_AxBorderStyle", async function Set_AxBorderStyle(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "AxBorderStyle", (await $.call(C, "TActiveFormBorderStyle", [L0["value"]])));
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["TxActiveFormBorderStyle"]});
  U.method("TfmMKSuggestion", "Set_Caption", async function Set_Caption(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "Caption", (await $.call(C, "TCaption", [L0["value"]])));
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["WideString"]});
  U.method("TfmMKSuggestion", "Set_Color", async function Set_Color(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "Color", (await $.call(C, "TColor", [L0["value"]])));
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["OLE_COLOR"]});
  U.method("TfmMKSuggestion", "Set_Cursor", async function Set_Cursor(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "Cursor", (await $.call(C, "TCursor", [L0["value"]])));
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["Smallint"]});
  U.method("TfmMKSuggestion", "Set_DoubleBuffered", async function Set_DoubleBuffered(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "DoubleBuffered", L0["value"]);
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["WordBool"]});
  U.method("TfmMKSuggestion", "Set_DropTarget", async function Set_DropTarget(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "DropTarget", L0["value"]);
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["WordBool"]});
  U.method("TfmMKSuggestion", "Set_Enabled", async function Set_Enabled(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "Enabled", L0["value"]);
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["WordBool"]});
  U.method("TfmMKSuggestion", "Set_Font", async function Set_Font(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.asRef(p0), result: undefined};
  await $.stmt((await $.call(C, "SetOleFont", [(await $.v(C, "Font")), (await L0["value"].get())])));
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["IFontDisp"]});
  U.method("TfmMKSuggestion", "Set_HelpFile", async function Set_HelpFile(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "HelpFile", (await $.call(C, "String", [L0["value"]])));
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["WideString"]});
  U.method("TfmMKSuggestion", "Set_KeyPreview", async function Set_KeyPreview(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "KeyPreview", L0["value"]);
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["WordBool"]});
  U.method("TfmMKSuggestion", "Set_PixelsPerInch", async function Set_PixelsPerInch(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "PixelsPerInch", L0["value"]);
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["Integer"]});
  U.method("TfmMKSuggestion", "Set_PrintScale", async function Set_PrintScale(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "PrintScale", (await $.call(C, "TPrintScale", [L0["value"]])));
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["TxPrintScale"]});
  U.method("TfmMKSuggestion", "Set_Scaled", async function Set_Scaled(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "Scaled", L0["value"]);
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["WordBool"]});
  U.method("TfmMKSuggestion", "Set_Visible", async function Set_Visible(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "Visible", L0["value"]);
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["WordBool"]});
  U.method("TfmMKSuggestion", "Get_Owner", async function Get_Owner(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: 0};
  L0["result"] = (await $.v(C, "handle"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TfmMKSuggestion", "Set_Owner", async function Set_Owner(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"val": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["val"]);
  if ($.truthy($.gt(L0["val"], 0))) {
    await $.set(C, "FOwnerHandle", L0["val"]);
  }
  return L0.result;
}, {"params": ["val"], "kind": "procedure", "ptypes": ["Integer"]});
  U.method("TfmMKSuggestion", "Get_Params", async function Get_Params(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"name": $.copyArg(p0), result: null};
  await $.fixArgs(L0, ["name"]);
  L0["result"] = (await $.idx((await $.mv((await $.v(C, "FParams")), "Values")), [L0["name"]]));
  return L0.result;
}, {"params": ["Name"], "kind": "function", "ptypes": ["WideString"]});
  U.method("TfmMKSuggestion", "Set_Params", async function Set_Params(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"name": $.copyArg(p0), "value": $.copyArg(p1), result: undefined};
  await $.fixArgs(L0, ["name", "value"]);
  { const $t1 = await $.iset((await $.mv((await $.v(C, "FParams")), "Values")), [L0["name"]], L0["value"]); if ($t1 !== undefined) { await $.mset((await $.v(C, "FParams")), "Values", $t1); } }
  return L0.result;
}, {"params": ["Name", "Value"], "kind": "procedure", "ptypes": ["WideString", "OleVariant"]});
  U.method("TfmMKSuggestion", "InstanceInitialize", async function InstanceInitialize(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: null};
  L0["result"] = (await $.v(C, "S_OK"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TfmMKSuggestion", "Cleanup", async function Cleanup(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: null};
  L0["result"] = (await $.v(C, "S_OK"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TfmMKSuggestion", "DisableControls", async function DisableControls(Self, p0, p1) {
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
  return L0.result;
}, {"params": ["ControlName", "disable"], "kind": "procedure", "ptypes": ["TCustomControl", "boolean"]});
  U.method("TfmMKSuggestion", "UIObjectActivate", async function UIObjectActivate(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: null};
  await $.set(C, "id", (await $.call(C, "StrToInt", [(await $.call(C, "Get_Params", ["CID"]))])));
  await $.mcall((await $.v(C, "ODSTemplates")), "Open", []);
  await $.stmt((await $.mcall((await $.v(C, "ODSCusts")), "SetVariable", ["id", (await $.call(C, "StrToInt", [(await $.call(C, "Get_Params", ["KLI_ID"]))]))])));
  await $.mcall((await $.v(C, "ODSCusts")), "Open", []);
  await $.stmt((await $.mcall((await $.v(C, "ODSContracts")), "SetVariable", ["cid", (await $.v(C, "id"))])));
  await $.mcall((await $.v(C, "ODSContracts")), "Open", []);
  await $.stmt((await $.mcall((await $.v(C, "ODSMotorKasko")), "SetVariable", ["cid", (await $.v(C, "id"))])));
  await $.mcall((await $.v(C, "ODSMotorKasko")), "Open", []);
  await $.stmt((await $.mcall((await $.v(C, "ODSPolicy")), "SetVariable", ["CID", (await $.v(C, "id"))])));
  await $.mcall((await $.v(C, "ODSPolicy")), "Open", []);
  await $.set(C, "IsSaved", true);
  if ($.truthy((await $.mv((await $.v(C, "ODSPolicy")), "isEmpty")))) {
    await $.mcall((await $.v(C, "ODSPolicy")), "Insert", []);
    await $.mset((await $.mcall((await $.v(C, "ODSContracts")), "FieldByName", ["INSSUMM"])), "asFloat", (await $.mv((await $.v(C, "ODSMotorKaskoDRIVECOST")), "Value")));
    await $.set(C, "Caption", (await $.call(C, "format", [(await $.v(C, "fmCaption")), ["Yeni teklifname"]])));
  } else {
    await $.mcall((await $.v(C, "ODSPolicy")), "Edit", []);
    await $.set(C, "Caption", (await $.call(C, "format", [(await $.v(C, "fmCaption")), ["Redakte"]])));
    await $.mset((await $.v(C, "btPrint")), "Enabled", true);
    await $.mset((await $.v(C, "btPolicy")), "Enabled", true);
    await $.mset((await $.v(C, "btApply")), "Enabled", false);
    {
      const $t5 = (await $.v(C, "OPCOMMON"));
      if ($.truthy($.eq((await $.wcall([$t5], "CallIntegerFunction", ["get_state", [(await $.mv((await $.mcall((await $.wv([$t5], "ODSContracts", C, false)), "FieldByName", ["ID"])), "asInteger"))]], C)), 6))) {
        await $.stmt((await $.wcall([$t5], "DisableControls", [(await $.wv([$t5], "Panel2", C, false)), (await $.wv([$t5], "false", C, false))], C)));
      }
    }
  }
  L0["result"] = (await $.v(C, "S_OK"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TfmMKSuggestion", "QueryDeactivate", async function QueryDeactivate(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: null};
  L0["result"] = (await $.v(C, "S_OK"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TfmMKSuggestion", "UIObjectDeactivate", async function UIObjectDeactivate(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: null};
  L0["result"] = (await $.v(C, "S_OK"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TfmMKSuggestion", "SaveState", async function SaveState(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: null};
  L0["result"] = (await $.v(C, "S_OK"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TfmMKSuggestion", "Get_Height", async function Get_Height(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: 0};
  L0["result"] = (await $.v(C, "Height"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TfmMKSuggestion", "Get_Width", async function Get_Width(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: 0};
  L0["result"] = (await $.v(C, "Width"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TfmMKSuggestion", "ActiveFormCreate", async function ActiveFormCreate(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.set(C, "fmMKSuggestion", Self);
  await $.set(C, "FParams", (await $.mv((await $.v(C, "TStringList")), "Create")));
  await $.mcall((await $.v(C, "ODSRisk")), "Open", []);
  await $.mcall((await $.v(C, "ODSFranshiz")), "Open", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TfmMKSuggestion", "SaveData", async function SaveData(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: false, "res": false};
  L0["res"] = false;
  if ($.truthy((await $.mv((await $.v(C, "cbRisk")), "Checked")))) {
    {
      const $t6 = (await $.v(C, "ODSPolicy"));
      if ($.truthy($.in_((await $.wv([$t6], "State", C, false)), [(await $.wv([$t6], "dsEdit", C, false)), (await $.wv([$t6], "dsInsert", C, false))]))) {
        await $.mset((await $.wcall([$t6], "Fieldbyname", ["THEFT"], C)), "AsFloat", (await $.mv((await $.wv([$t6], "ODSMotorKaskoFRANSHIZ", C, false)), "AsFloat")));
        await $.mset((await $.wcall([$t6], "Fieldbyname", ["FIRE"], C)), "AsFloat", (await $.mv((await $.wv([$t6], "ODSMotorKaskoFRANSHIZ", C, false)), "AsFloat")));
        await $.mset((await $.wcall([$t6], "Fieldbyname", ["EXPLOSION"], C)), "AsFloat", (await $.mv((await $.wv([$t6], "ODSMotorKaskoFRANSHIZ", C, false)), "AsFloat")));
        await $.mset((await $.wcall([$t6], "Fieldbyname", ["TRAFFICACCIDENT"], C)), "AsFloat", (await $.mv((await $.wv([$t6], "ODSMotorKaskoFRANSHIZ", C, false)), "AsFloat")));
        await $.mset((await $.wcall([$t6], "Fieldbyname", ["IMPACTANYOBJECT"], C)), "AsFloat", (await $.mv((await $.wv([$t6], "ODSMotorKaskoFRANSHIZ", C, false)), "AsFloat")));
        await $.stmt($.wcall([$t6], "Post", [], C));
        await $.stmt((await $.wcall([$t6], "RefreshRecord", [], C)));
      }
    }
  }
  {
    const $t7 = (await $.v(C, "ODSContracts"));
    await $.stmt($.wcall([$t7], "Edit", [], C));
    if ($.truthy($.lt((await $.mv((await $.wcall([$t7], "FieldByName", ["state"], C)), "AsInteger")), 3))) {
      await $.mset((await $.wcall([$t7], "FieldByName", ["state"], C)), "AsInteger", (await $.wv([$t7], "pSuggMaking", C, false)));
    }
    await $.stmt($.wcall([$t7], "Post", [], C));
    await $.stmt($.wcall([$t7], "RefreshRecord", [], C));
    await $.wset([$t7], "res", (await $.wv([$t7], "True", C, false)), { get: async () => L0["res"], set: async (v) => { L0["res"] = v; }, local: true });
  }
  L0["result"] = L0["res"];
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TfmMKSuggestion", "btOkClick", async function btOkClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy((await $.or_((await $.call(C, "SaveData", [])), async () => (await $.v(C, "IsSaved")))))) {
    await $.stmt((await $.call(C, "PostMessage", [(await $.v(C, "FOwnerHandle")), (await $.v(C, "WM_ModalResult")), (await $.v(C, "mrOk")), 0])));
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TfmMKSuggestion", "BitBtn2Click", async function BitBtn2Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.stmt((await $.call(C, "PostMessage", [(await $.v(C, "FOwnerHandle")), (await $.v(C, "WM_ModalResult")), (await $.v(C, "mrCancel")), 0])));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TfmMKSuggestion", "memConditionsChange", async function memConditionsChange(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.stmt((await $.call(C, "DTPContractDateChange", [L0["sender"]])));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TfmMKSuggestion", "btPrintClick", async function btPrintClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "docfile": null, "str": '', "str1": '', "strdate": '', "errorstr": '', "filename": '', "day": 0, "month": 0, "year": 0, "wordapp": null, "wrddatadoc": null, "wrdapp": null, "wrdselection": null, "n": 0, "i": 0};
  await $.fixArgs(L0, ["sender"]);
  L0["months"] = ["Yanvar", "Fevral", "Mart", "Aprel", "May", "İyun", "İyul", "Avqust", "Sentyabr", "Oktyabr", "Noyabr", "Dekabr"];
  await $.stmt((await $.mcall((await $.v(C, "ODSAValute")), "Locate", ["valute", (await $.mv((await $.v(C, "ODSContractsValute_ID")), "Value")), []])));
  await $.stmt((await $.mcall((await $.v(C, "ODSActivity")), "SetVariable", ["id", (await $.mv((await $.v(C, "ODSCustsAct_Id")), "Value"))])));
  await $.mcall((await $.v(C, "ODSActivity")), "Open", []);
  L0["strdate"] = (await $.call(C, "IntToStr", [(await $.call(C, "Trunc", [$.fdiv(($.sub((await $.mv((await $.v(C, "ODSContractsEND_DATE")), "Value")), (await $.mv((await $.v(C, "ODSContractsBEGIN_DATE")), "Value")))), 30)]))]));
  await $.mcall((await $.v(C, "ODSContracts")), "Close", []);
  await $.stmt((await $.mcall((await $.v(C, "ODSContracts")), "SetVariable", ["CID", (await $.v(C, "ID"))])));
  await $.mcall((await $.v(C, "ODSContracts")), "Open", []);
  await $.mcall((await $.v(C, "ODSReport")), "Close", []);
  await $.stmt((await $.mcall((await $.v(C, "ODSReport")), "SetVariable", ["CID", (await $.v(C, "ID"))])));
  await $.mcall((await $.v(C, "ODSReport")), "Open", []);
  if ($.truthy($.eq((await $.mv((await $.v(C, "ODSReportSex")), "Value")), 0))) {
    L0["str"] = "oğlu";
  } else {
    if ($.truthy($.eq((await $.mv((await $.v(C, "ODSReportSex")), "Value")), 1))) {
      L0["str"] = "qızı";
    }
  }
  try {
    L0["filename"] = $.add((await $.call(C, "ExtractFilePath", [(await $.mv((await $.v(C, "Application")), "ExeName"))])), "\\KascoSuggestion.doc");
    L0["wrdapp"] = (await $.call(C, "CreateOleObject", ["Word.Application"]));
    await $.mset(L0["wrdapp"], "Visible", true);
    L0["wrddatadoc"] = (await $.mcall((await $.mv(L0["wrdapp"], "Documents")), "Open", [L0["filename"]]));
    L0["wrdselection"] = (await $.mv(L0["wrdapp"], "Selection"));
  } catch ($t8) {
    $.rethrowControl($t8);
    $.handled($t8);
    throw $t8;
  }
  try {
    await $.stmt((await $.mcall(L0["wrdselection"], "GoTo", [(-(1)), (await $.v(C, "unAssigned")), (await $.v(C, "unAssigned")), "sugnum"])));
    await $.stmt((await $.mcall(L0["wrdselection"], "TypeText", [(await $.call(C, "UTFEncoder", [(await $.mv((await $.v(C, "ODSReportSugnum")), "AsString"))]))])));
    await $.stmt((await $.mcall(L0["wrdselection"], "GoTo", [(-(1)), (await $.v(C, "unAssigned")), (await $.v(C, "unAssigned")), "name"])));
    await $.stmt((await $.mcall(L0["wrdselection"], "TypeText", [(await $.call(C, "UTFEncoder", [(await $.mv((await $.v(C, "ODSReportNAME")), "Value"))]))])));
    await $.stmt((await $.mcall(L0["wrdselection"], "GoTo", [(-(1)), (await $.v(C, "unAssigned")), (await $.v(C, "unAssigned")), "str"])));
    await $.stmt((await $.mcall(L0["wrdselection"], "TypeText", [(await $.call(C, "UTFEncoder", [L0["str"]]))])));
    await $.stmt((await $.mcall(L0["wrdselection"], "GoTo", [(-(1)), (await $.v(C, "unAssigned")), (await $.v(C, "unAssigned")), "activity"])));
    await $.stmt((await $.mcall(L0["wrdselection"], "TypeText", [(await $.call(C, "UTFEncoder", [(await $.mv((await $.v(C, "ODSActivityName")), "Value"))]))])));
    await $.stmt((await $.mcall(L0["wrdselection"], "GoTo", [(-(1)), (await $.v(C, "unAssigned")), (await $.v(C, "unAssigned")), "period"])));
    await $.stmt((await $.mcall(L0["wrdselection"], "TypeText", [(await $.call(C, "UTFEncoder", [L0["strdate"]]))])));
    await $.stmt((await $.mcall(L0["wrdselection"], "GoTo", [(-(1)), (await $.v(C, "unAssigned")), (await $.v(C, "unAssigned")), "mark"])));
    await $.stmt((await $.mcall(L0["wrdselection"], "TypeText", [(await $.call(C, "UTFEncoder", [(await $.mv((await $.v(C, "ODSReportInsuredModel")), "AsString"))]))])));
    await $.stmt((await $.mcall(L0["wrdselection"], "GoTo", [(-(1)), (await $.v(C, "unAssigned")), (await $.v(C, "unAssigned")), "type"])));
    await $.stmt((await $.mcall(L0["wrdselection"], "TypeText", [(await $.call(C, "UTFEncoder", [(await $.mv((await $.v(C, "ODSReportInsuredType")), "AsString"))]))])));
    await $.stmt((await $.mcall(L0["wrdselection"], "GoTo", [(-(1)), (await $.v(C, "unAssigned")), (await $.v(C, "unAssigned")), "ammount"])));
    await $.stmt((await $.mcall(L0["wrdselection"], "TypeText", [(await $.call(C, "UTFEncoder", [$.add($.add((await $.mv((await $.v(C, "ODSReportInsSumm")), "AsString")), " "), (await $.mv((await $.v(C, "ODSReportValute")), "AsString")))]))])));
    await $.stmt((await $.mcall(L0["wrdselection"], "GoTo", [(-(1)), (await $.v(C, "unAssigned")), (await $.v(C, "unAssigned")), "tarif"])));
    await $.stmt((await $.mcall(L0["wrdselection"], "TypeText", [(await $.call(C, "UTFEncoder", [(await $.mv((await $.v(C, "ODSReportTariff")), "AsString"))]))])));
    await $.stmt((await $.mcall(L0["wrdselection"], "GoTo", [(-(1)), (await $.v(C, "unAssigned")), (await $.v(C, "unAssigned")), "inssumm"])));
    await $.stmt((await $.mcall(L0["wrdselection"], "TypeText", [(await $.call(C, "UTFEncoder", [$.add($.add((await $.mv((await $.v(C, "ODSReportAmmount")), "AsString")), " "), (await $.mv((await $.v(C, "ODSReportValute")), "AsString")))]))])));
    await $.stmt((await $.mcall(L0["wrdselection"], "GoTo", [(-(1)), (await $.v(C, "unAssigned")), (await $.v(C, "unAssigned")), "franshiz"])));
    await $.stmt((await $.mcall(L0["wrdselection"], "TypeText", [(await $.call(C, "UTFEncoder", [$.add($.add((await $.mv((await $.v(C, "ODSReportFranshiz")), "AsString")), " "), (await $.mv((await $.v(C, "ODSReportValute")), "AsString")))]))])));
    await $.stmt((await $.mcall(L0["wrdselection"], "GoTo", [(-(1)), (await $.v(C, "unAssigned")), (await $.v(C, "unAssigned")), "date"])));
    await $.stmt((await $.mcall(L0["wrdselection"], "TypeText", [(await $.call(C, "UTFEncoder", [(await $.mv((await $.v(C, "ODSReportBeginDate")), "AsString"))]))])));
  } catch ($t9) {
    $.rethrowControl($t9);
    $.handled($t9);
    throw $t9;
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TfmMKSuggestion", "btApplyClick", async function btApplyClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy((await $.call(C, "SaveData", [])))) {
    await $.mset((await $.v(C, "btPrint")), "Enabled", true);
    await $.mset((await $.v(C, "btPolicy")), "Enabled", true);
    await $.mset((await $.v(C, "btApply")), "Enabled", false);
  }
  if ($.truthy($.eq((await $.mv((await $.mcall((await $.v(C, "ODSContracts")), "FieldByName", ["state"])), "AsInteger")), 2))) {
    await $.stmt((await $.mcall((await $.v(C, "OPSBMSG")), "CallProcedure", ["sendmessage", [707]])));
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TfmMKSuggestion", "DBEdit4KeyPress", async function DBEdit4KeyPress(Self, p0, p1) {
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
  U.method("TfmMKSuggestion", "DTPContractDateChange", async function DTPContractDateChange(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "key": ''};
  await $.fixArgs(L0, ["sender"]);
  await $.stmt((await $.call(C, "DBEdit4KeyPress", [L0["sender"], $.ref(async () => L0["key"], async ($t10) => { L0["key"] = $t10; })])));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TfmMKSuggestion", "LoadValues", async function LoadValues(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"params": $.asRef(p0), result: undefined};
  {
    const $t11 = (await L0["params"].get());
    { const $t12 = await $.iset((await $.wv([$t11], "values", C, false)), ["name"], (await $.mv((await $.wv([$t11], "ODSCustsNAME", C, false)), "Value"))); if ($t12 !== undefined) { await $.wset([$t11], "values", $t12, C); } }
  }
  return L0.result;
}, {"params": ["params"], "kind": "procedure", "ptypes": ["TStringlist"]});
  U.method("TfmMKSuggestion", "btPolicyClick", async function btPolicyClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "policformguid": null, "params": null};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.not((await $.v(C, "IsSaved"))))) {
    await $.stmt((await $.call(C, "btApplyClick", [L0["sender"]])));
  }
  {
    const $t13 = (await $.v(C, "ODSContracts"));
    await $.mset((await $.wcall([$t13], "FieldByName", ["state"], C)), "AsInteger", (await $.wv([$t13], "pSuggDone", C, false)));
  }
  L0["params"] = (await $.mv((await $.v(C, "TStringList")), "Create"));
  L0["policformguid"] = (await $.call(C, "StringToGUID", ["{3C454A4C-C304-4633-AAAD-4C46C68BB8EE}"]));
  { const $t14 = await $.iset((await $.mv(L0["params"], "Values")), ["CID"], (await $.call(C, "FloatToStr", [(await $.mv((await $.v(C, "ODSContractsID")), "Value"))]))); if ($t14 !== undefined) { await $.mset(L0["params"], "Values", $t14); } }
  {
    const $t15 = (await $.v(C, "pmcPolicy"));
    await $.stmt((await $.wcall([$t15], "ShowModal", [(await $.wv([$t15], "PolicFormGuid", { get: async () => L0["policformguid"], set: async (v) => { L0["policformguid"] = v; }, local: true }, false)), (await $.wv([$t15], "Params", { get: async () => L0["params"], set: async (v) => { L0["params"] = v; }, local: true }, false))], C)));
  }
  await $.mcall(L0["params"], "Free", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TfmMKSuggestion", "ODSPolicyAfterEdit", async function ODSPolicyAfterEdit(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"dataset": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["dataset"]);
  return L0.result;
}, {"params": ["DataSet"], "kind": "procedure", "ptypes": ["TDataSet"]});
  U.method("TfmMKSuggestion", "ODSPolicyAfterInsert", async function ODSPolicyAfterInsert(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"dataset": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["dataset"]);
  await $.mset((await $.mcall(L0["dataset"], "Fieldbyname", ["CID"])), "AsInteger", (await $.v(C, "ID")));
  return L0.result;
}, {"params": ["DataSet"], "kind": "procedure", "ptypes": ["TDataSet"]});
  U.method("TfmMKSuggestion", "DBEdit7Change", async function DBEdit7Change(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mset((await $.v(C, "btApply")), "Enabled", true);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TfmMKSuggestion", "memRiskExit", async function memRiskExit(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.ne((await $.mv((L0["sender"]), "Text")), ""))) {
    await $.mset((await $.v(C, "btApply")), "Enabled", true);
  }
  await $.mcall((await $.v(C, "ODSPolicy")), "Edit", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TfmMKSuggestion", "FillRow", async function FillRow(Self, p0, p1, p2, p3, p4, p5) {
  const C = $.chain(Self, U);
  const L0 = {"doc": $.copyArg(p0), "row": $.copyArg(p1), "text0": $.copyArg(p2), "text1": $.copyArg(p3), "text2": $.copyArg(p4), "text3": $.copyArg(p5), result: undefined};
  await $.fixArgs(L0, ["doc", "row", "text0", "text1", "text2", "text3"]);
  await $.stmt((await $.mcall((await $.mv((await $.mcall((await $.mcall((await $.mv(L0["doc"], "Tables")), "Item", [1])), "Cell", [L0["row"], 1])), "Range")), "InsertAfter", [L0["text0"]])));
  await $.stmt((await $.mcall((await $.mv((await $.mcall((await $.mcall((await $.mv(L0["doc"], "Tables")), "Item", [1])), "Cell", [L0["row"], 2])), "Range")), "InsertAfter", [L0["text1"]])));
  await $.stmt((await $.mcall((await $.mv((await $.mcall((await $.mcall((await $.mv(L0["doc"], "Tables")), "Item", [1])), "Cell", [L0["row"], 3])), "Range")), "InsertAfter", [L0["text2"]])));
  await $.stmt((await $.mcall((await $.mv((await $.mcall((await $.mcall((await $.mv(L0["doc"], "Tables")), "Item", [1])), "Cell", [L0["row"], 4])), "Range")), "InsertAfter", [L0["text3"]])));
  return L0.result;
}, {"params": ["Doc", "Row", "Text0", "Text1", "Text2", "Text3"], "kind": "procedure", "ptypes": ["Variant", "Integer", "String", "String", "String", "String"]});
  U.method("TfmMKSuggestion", "cbRiskClick", async function cbRiskClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mset((await $.v(C, "gbSame")), "Visible", (await $.mv((await $.v(C, "cbRisk")), "Checked")));
  await $.mset((await $.v(C, "gbGrid")), "Visible", (await $.mv((await $.v(C, "cbRisk")), "Checked")));
  await $.mset((await $.v(C, "cbDifRisk")), "Checked", false);
  await $.mset((await $.v(C, "btApply")), "Enabled", true);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TfmMKSuggestion", "cbDifRiskClick", async function cbDifRiskClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mset((await $.v(C, "gbGrid")), "Visible", (await $.mv((await $.v(C, "cbDifRisk")), "Checked")));
  await $.mset((await $.v(C, "gbSame")), "Visible", $.not(((await $.mv((await $.v(C, "cbDifRisk")), "Checked")))));
  await $.mset((await $.v(C, "cbRisk")), "Checked", false);
  await $.mset((await $.v(C, "btApply")), "Enabled", true);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TfmMKSuggestion", "BitBtn1Click", async function BitBtn1Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.set(C, "fmUndertable", (await $.mcall((await $.v(C, "TfmUndertable")), "Create", [Self])));
  await $.mcall((await $.v(C, "fmUndertable")), "ShowModal", []);
  await $.mcall((await $.v(C, "fmUndertable")), "Free", []);
  await $.mset((await $.v(C, "btApply")), "Enabled", true);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TfmMKSuggestion", "UTFEncoder", async function UTFEncoder(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"str": $.copyArg(p0), result: '', "i": 0, "j": 0};
  await $.fixArgs(L0, ["str"]);
  { const $t16 = (await $.call(C, "length", [L0["str"]]));
    L0["i"] = 1;
    let $t17 = true;
    for (;;) {
      if (!$t17) { L0["i"] = $.succ(L0["i"], 1); }
      $t17 = false;
      if (!($.ord(L0["i"]) <= $.ord($t16))) break;
      { const $t18 = $.sub((await $.mv((await $.mv((await $.v(C, "lbNonUnicode")), "Items")), "Count")), 1);
        L0["j"] = 0;
        let $t19 = true;
        for (;;) {
          if (!$t19) { L0["j"] = $.succ(L0["j"], 1); }
          $t19 = false;
          if (!($.ord(L0["j"]) <= $.ord($t18))) break;
          if ($.truthy($.eq((await $.idx(L0["str"], [L0["i"]])), (await $.idx((await $.mv((await $.v(C, "lbNonUnicode")), "Items")), [L0["j"]]))))) {
            { const $t20 = await $.iset(L0["str"], [L0["i"]], (await $.idx((await $.idx((await $.mv((await $.v(C, "tlbUnicode")), "Items")), [L0["j"]])), [1]))); if ($t20 !== undefined) { L0["str"] = $t20; } }
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
  U.method("TfmMKSuggestion", "DBEdit4Change", async function DBEdit4Change(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mset((await $.v(C, "btApply")), "Enabled", true);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  return U;
}
