// Generated from uIprepFilter.pas by pas2js — do not edit by hand; regenerate instead.
/* eslint-disable */
// @ts-nocheck

export default function define($) {
  const U = $.unit("uIprepFilter", ["Windows", "Messages", "SysUtils", "Classes", "Graphics", "Controls", "Forms", "Dialogs", "StdCtrls", "Db", "OracleData", "Oracle", "CMExcelExport", "Mask", "DBCtrlsEh", "DBLookupEh", "ExtCtrls", "Quickrpt", "ComCtrls", "Gauges", "variants", "CommonDecls", "SbSystem", "sboapiDataModuleimpl", "uMKTInfoImpl", "uBoorInfoRepImpl", "uMKTsInfoImpl", "uDateInfoImpl", "uInsurInfoImpl", "uPredInfoImpl", "uALEVInfoImpl", "iPSchedInfoImpl"]);
  const C = [U];
  U.defClass("TfrmIpRepFilter", "TForm", {"odscredits": {"name": "ODSCredits", "type": "TOracleDataSet"}, "cm_ip_reports": {"name": "CM_IP_REPORTS", "type": "TOraclePackage"}, "odsboorinfo": {"name": "ODSBoorInfo", "type": "TOracleDataSet"}, "panel1": {"name": "Panel1", "type": "TPanel"}, "groupbox1": {"name": "GroupBox1", "type": "TGroupBox"}, "checkbox1": {"name": "CheckBox1", "type": "TCheckBox"}, "dblookupcomboboxeh1": {"name": "DBLookupComboboxEh1", "type": "TDBLookupComboboxEh"}, "groupbox2": {"name": "GroupBox2", "type": "TGroupBox"}, "dblookupcomboboxeh3": {"name": "DBLookupComboboxEh3", "type": "TDBLookupComboboxEh"}, "checkbox3": {"name": "CheckBox3", "type": "TCheckBox"}, "groupbox3": {"name": "GroupBox3", "type": "TGroupBox"}, "dblookupcomboboxeh2": {"name": "DBLookupComboboxEh2", "type": "TDBLookupComboboxEh"}, "checkbox2": {"name": "CheckBox2", "type": "TCheckBox"}, "panel2": {"name": "Panel2", "type": "TPanel"}, "groupbox4": {"name": "GroupBox4", "type": "TGroupBox"}, "checkbox4": {"name": "CheckBox4", "type": "TCheckBox"}, "dblookupcomboboxeh4": {"name": "DBLookupComboboxEh4", "type": "TDBLookupComboboxEh"}, "groupbox5": {"name": "GroupBox5", "type": "TGroupBox"}, "dblookupcomboboxeh6": {"name": "DBLookupComboboxEh6", "type": "TDBLookupComboboxEh"}, "checkbox6": {"name": "CheckBox6", "type": "TCheckBox"}, "groupbox6": {"name": "GroupBox6", "type": "TGroupBox"}, "dblookupcomboboxeh5": {"name": "DBLookupComboboxEh5", "type": "TDBLookupComboboxEh"}, "checkbox5": {"name": "CheckBox5", "type": "TCheckBox"}, "panel5": {"name": "Panel5", "type": "TPanel"}, "groupbox7": {"name": "GroupBox7", "type": "TGroupBox"}, "checkbox7": {"name": "CheckBox7", "type": "TCheckBox"}, "dblookupcomboboxeh7": {"name": "DBLookupComboboxEh7", "type": "TDBLookupComboboxEh"}, "groupbox8": {"name": "GroupBox8", "type": "TGroupBox"}, "checkbox9": {"name": "CheckBox9", "type": "TCheckBox"}, "dblookupcomboboxeh9": {"name": "DBLookupComboboxEh9", "type": "TDBLookupComboboxEh"}, "groupbox9": {"name": "GroupBox9", "type": "TGroupBox"}, "checkbox8": {"name": "CheckBox8", "type": "TCheckBox"}, "dblookupcomboboxeh8": {"name": "DBLookupComboboxEh8", "type": "TDBLookupComboboxEh"}, "panel9": {"name": "Panel9", "type": "TPanel"}, "groupbox10": {"name": "GroupBox10", "type": "TGroupBox"}, "checkbox10": {"name": "CheckBox10", "type": "TCheckBox"}, "dblookupcomboboxeh10": {"name": "DBLookupComboboxEh10", "type": "TDBLookupComboboxEh"}, "groupbox11": {"name": "GroupBox11", "type": "TGroupBox"}, "checkbox11": {"name": "CheckBox11", "type": "TCheckBox"}, "dblookupcomboboxeh11": {"name": "DBLookupComboboxEh11", "type": "TDBLookupComboboxEh"}, "odfvalute": {"name": "ODFValute", "type": "TOracleDataSet"}, "valute": {"name": "Valute", "type": "TDataSource"}, "odfbranch": {"name": "ODFBranch", "type": "TOracleDataSet"}, "branch": {"name": "Branch", "type": "TDataSource"}, "odfusrgroup": {"name": "ODFUsrGroup", "type": "TOracleDataSet"}, "usrgroup": {"name": "UsrGroup", "type": "TDataSource"}, "odfreserves": {"name": "ODFReserves", "type": "TOracleDataSet"}, "reserves": {"name": "Reserves", "type": "TDataSource"}, "duereserve": {"name": "DueReserve", "type": "TDataSource"}, "odfusers": {"name": "ODFUsers", "type": "TOracleDataSet"}, "users": {"name": "Users", "type": "TDataSource"}, "odfpersons": {"name": "ODFPersons", "type": "TOracleDataSet"}, "persons": {"name": "Persons", "type": "TDataSource"}, "odfcategories": {"name": "ODFCategories", "type": "TOracleDataSet"}, "categories": {"name": "Categories", "type": "TDataSource"}, "odfcrdtypes": {"name": "ODFCrdTypes", "type": "TOracleDataSet"}, "crdtype": {"name": "CrdType", "type": "TDataSource"}, "odfpledges": {"name": "ODFPledges", "type": "TOracleDataSet"}, "pledges": {"name": "Pledges", "type": "TDataSource"}, "odfcustomers": {"name": "ODFCustomers", "type": "TOracleDataSet"}, "customers": {"name": "Customers", "type": "TDataSource"}, "panel3": {"name": "Panel3", "type": "TPanel"}, "groupbox13": {"name": "GroupBox13", "type": "TGroupBox"}, "checkbox13": {"name": "CheckBox13", "type": "TCheckBox"}, "dblookupcomboboxeh13": {"name": "DBLookupComboboxEh13", "type": "TDBLookupComboboxEh"}, "odsmktsinfo": {"name": "ODSMKTsInfo", "type": "TOracleDataSet"}, "odfreport": {"name": "ODFReport", "type": "TOracleDataSet"}, "odfreportfullname": {"name": "ODFReportFULLNAME", "type": "TStringField"}, "odfreportdataset": {"name": "ODFReportDATASET", "type": "TStringField"}, "odfreportprocname": {"name": "ODFReportPROCNAME", "type": "TStringField"}, "odfreportqrname": {"name": "ODFReportQRNAME", "type": "TStringField"}, "reportsettings": {"name": "reportSettings", "type": "TDataSource"}, "odsmktinfo": {"name": "ODSMKTInfo", "type": "TOracleDataSet"}, "odsinsurinfo": {"name": "ODSInsurInfo", "type": "TOracleDataSet"}, "odsdateinfo": {"name": "ODSDateInfo", "type": "TOracleDataSet"}, "button1": {"name": "Button1", "type": "TButton"}, "odspredinfo": {"name": "ODSPredInfo", "type": "TOracleDataSet"}, "odsalevinfo": {"name": "ODSALEVInfo", "type": "TOracleDataSet"}, "odsboorinforownum": {"name": "ODSBoorInfoROWNUM", "type": "TFloatField"}, "odsboorinfocreditid": {"name": "ODSBoorInfoCREDITID", "type": "TFloatField"}, "odsboorinfoname": {"name": "ODSBoorInfoNAME", "type": "TStringField"}, "odsboorinfoage": {"name": "ODSBoorInfoAGE", "type": "TFloatField"}, "odsboorinfobirthdate": {"name": "ODSBoorInfoBIRTHDATE", "type": "TDateTimeField"}, "odsboorinfoaddress": {"name": "ODSBoorInfoADDRESS", "type": "TStringField"}, "odsboorinfoworknpost": {"name": "ODSBoorInfoWORKNPOST", "type": "TStringField"}, "odsboorinfomoneymoney": {"name": "ODSBoorInfoMONEYMONEY", "type": "TFloatField"}, "odsboorinfocredamtgiven": {"name": "ODSBoorInfoCREDAMTGIVEN", "type": "TFloatField"}, "odsboorinfocredamtym": {"name": "ODSBoorInfoCREDAMTYM", "type": "TFloatField"}, "odsboorinfocredperiodcred": {"name": "ODSBoorInfoCREDPERIODCRED", "type": "TFloatField"}, "odsboorinfocredperiodym": {"name": "ODSBoorInfoCREDPERIODYM", "type": "TFloatField"}, "odsboorinfocredperccred": {"name": "ODSBoorInfoCREDPERCCRED", "type": "TFloatField"}, "odsboorinfocredpercym": {"name": "ODSBoorInfoCREDPERCYM", "type": "TFloatField"}, "odsmktinforownum": {"name": "ODSMKTInfoROWNUM", "type": "TFloatField"}, "odsmktinfocreditid": {"name": "ODSMKTInfoCREDITID", "type": "TFloatField"}, "odsmktinfoaktno": {"name": "ODSMKTInfoAKTNO", "type": "TStringField"}, "odsmktinfoboorower": {"name": "ODSMKTInfoBOOROWER", "type": "TStringField"}, "odsmktinfocredamountgiven": {"name": "ODSMKTInfoCREDAMOUNTGIVEN", "type": "TFloatField"}, "odsmktinfocredamountym": {"name": "ODSMKTInfoCREDAMOUNTYM", "type": "TFloatField"}, "odsmktinfocredamountpayed": {"name": "ODSMKTInfoCREDAMOUNTPAYED", "type": "TFloatField"}, "odsmktinfocredamountrest": {"name": "ODSMKTInfoCREDAMOUNTREST", "type": "TFloatField"}, "odsmktinfopercentagemkt": {"name": "ODSMKTInfoPERCENTAGEMKT", "type": "TFloatField"}, "odsmktinfopercentageaif": {"name": "ODSMKTInfoPERCENTAGEAIF", "type": "TFloatField"}, "odsmktinfoperiodcredit": {"name": "ODSMKTInfoPERIODCREDIT", "type": "TFloatField"}, "odsmktinfoperiodym": {"name": "ODSMKTInfoPERIODYM", "type": "TFloatField"}, "odsmktinfoanuitet": {"name": "ODSMKTInfoANUITET", "type": "TFloatField"}, "odsmktinfocontractdate": {"name": "ODSMKTInfoCONTRACTDATE", "type": "TDateTimeField"}, "odsmktinfocontractno": {"name": "ODSMKTInfoCONTRACTNO", "type": "TStringField"}, "odsmktinfoipcontractdate": {"name": "ODSMKTInfoIPCONTRACTDATE", "type": "TDateTimeField"}, "odsmktinfoipcontractno": {"name": "ODSMKTInfoIPCONTRACTNO", "type": "TStringField"}, "odsinsurinforownum": {"name": "ODSInsurInfoROWNUM", "type": "TFloatField"}, "odsinsurinfocreditid": {"name": "ODSInsurInfoCREDITID", "type": "TFloatField"}, "odsinsurinfomktname": {"name": "ODSInsurInfoMKTNAME", "type": "TStringField"}, "odsinsurinfoboorower": {"name": "ODSInsurInfoBOOROWER", "type": "TStringField"}, "odsinsurinfocrdamount": {"name": "ODSInsurInfoCRDAMOUNT", "type": "TFloatField"}, "odsinsurinfocrdperiod": {"name": "ODSInsurInfoCRDPERIOD", "type": "TFloatField"}, "odsinsurinfocrdnum": {"name": "ODSInsurInfoCRDNUM", "type": "TStringField"}, "odsinsurinfocrddate": {"name": "ODSInsurInfoCRDDATE", "type": "TDateTimeField"}, "odsinsurinfopersamount": {"name": "ODSInsurInfoPERSAMOUNT", "type": "TFloatField"}, "odsinsurinfopersperiod": {"name": "ODSInsurInfoPERSPERIOD", "type": "TFloatField"}, "odsinsurinfoperslastdat": {"name": "ODSInsurInfoPERSLASTDAT", "type": "TDateTimeField"}, "odsinsurinfopropamount": {"name": "ODSInsurInfoPROPAMOUNT", "type": "TFloatField"}, "odsinsurinfopropperiod": {"name": "ODSInsurInfoPROPPERIOD", "type": "TFloatField"}, "odsinsurinfoproplastdat": {"name": "ODSInsurInfoPROPLASTDAT", "type": "TDateTimeField"}, "odspredinforownum": {"name": "ODSPredInfoROWNUM", "type": "TFloatField"}, "odspredinfocreditid": {"name": "ODSPredInfoCREDITID", "type": "TFloatField"}, "odspredinfomktname": {"name": "ODSPredInfoMKTNAME", "type": "TStringField"}, "odspredinfoboorower": {"name": "ODSPredInfoBOOROWER", "type": "TStringField"}, "odspredinfoippaste": {"name": "ODSPredInfoIPPASTE", "type": "TStringField"}, "odspredinfopaddr": {"name": "ODSPredInfoPADDR", "type": "TStringField"}, "odspredinfopprice": {"name": "ODSPredInfoPPRICE", "type": "TFloatField"}, "odspredinfoparea": {"name": "ODSPredInfoPAREA", "type": "TFloatField"}, "odspredinfoipcontnum": {"name": "ODSPredInfoIPCONTNUM", "type": "TStringField"}, "odspredinfoipcontdat": {"name": "ODSPredInfoIPCONTDAT", "type": "TDateTimeField"}, "odspredinfoipapernum": {"name": "ODSPredInfoIPAPERNUM", "type": "TStringField"}, "odspredinfoipaperdat": {"name": "ODSPredInfoIPAPERDAT", "type": "TDateTimeField"}, "odspredinfoipextrnum": {"name": "ODSPredInfoIPEXTRNUM", "type": "TStringField"}, "odspredinfoipextrdat": {"name": "ODSPredInfoIPEXTRDAT", "type": "TDateTimeField"}, "odspredinfopfirma": {"name": "ODSPredInfoPFIRMA", "type": "TStringField"}, "odspredinfopdate": {"name": "ODSPredInfoPDATE", "type": "TDateTimeField"}, "odspredinfoparazi": {"name": "ODSPredInfoPARAZI", "type": "TStringField"}, "odsdateinforownum": {"name": "ODSDateInfoROWNUM", "type": "TFloatField"}, "odsdateinfocreditid": {"name": "ODSDateInfoCREDITID", "type": "TFloatField"}, "odsdateinfoname": {"name": "ODSDateInfoNAME", "type": "TStringField"}, "odsdateinfoanderfirst": {"name": "ODSDateInfoANDERFIRST", "type": "TDateTimeField"}, "odsdateinfoanderipred": {"name": "ODSDateInfoANDERIPRED", "type": "TDateTimeField"}, "odsdateinfoanderanket": {"name": "ODSDateInfoANDERANKET", "type": "TDateTimeField"}, "odsdateinfoanderreprt": {"name": "ODSDateInfoANDERREPRT", "type": "TDateTimeField"}, "odsdateinfocrdnumber": {"name": "ODSDateInfoCRDNUMBER", "type": "TDateTimeField"}, "odsdateinfocrdfirst": {"name": "ODSDateInfoCRDFIRST", "type": "TDateTimeField"}, "odsdateinfocrdpayed": {"name": "ODSDateInfoCRDPAYED", "type": "TDateTimeField"}, "odsdateinfobuyselnum": {"name": "ODSDateInfoBUYSELNUM", "type": "TDateTimeField"}, "odsdateinfobuyselpay": {"name": "ODSDateInfoBUYSELPAY", "type": "TDateTimeField"}, "odsdateinfoipotekanum": {"name": "ODSDateInfoIPOTEKANUM", "type": "TDateTimeField"}, "odsdateinfoipotekapaper": {"name": "ODSDateInfoIPOTEKAPAPER", "type": "TDateTimeField"}, "odsdateinfoipotekaretpaper": {"name": "ODSDateInfoIPOTEKARETPAPER", "type": "TDateTimeField"}, "odsdateinfoymaif": {"name": "ODSDateInfoYMAIF", "type": "TDateTimeField"}, "odsdateinfoymbild": {"name": "ODSDateInfoYMBILD", "type": "TDateTimeField"}, "odsdateinfoymtehvil": {"name": "ODSDateInfoYMTEHVIL", "type": "TDateTimeField"}, "odsdateinfoymti": {"name": "ODSDateInfoYMTI", "type": "TDateTimeField"}, "odsdateinfomktname": {"name": "ODSDateInfoMKTNAME", "type": "TStringField"}, "odsalevinforownum": {"name": "ODSALEVInfoROWNUM", "type": "TFloatField"}, "odsalevinfocreditid": {"name": "ODSALEVInfoCREDITID", "type": "TFloatField"}, "odsalevinfomktname": {"name": "ODSALEVInfoMKTNAME", "type": "TStringField"}, "odsalevinfoboorower": {"name": "ODSALEVInfoBOOROWER", "type": "TStringField"}, "odsalevinfoparazi": {"name": "ODSALEVInfoPARAZI", "type": "TStringField"}, "odsalevinfopaddr": {"name": "ODSALEVInfoPADDR", "type": "TStringField"}, "odsalevinfopprice": {"name": "ODSALEVInfoPPRICE", "type": "TFloatField"}, "odsalevinfoparea": {"name": "ODSALEVInfoPAREA", "type": "TFloatField"}, "odsalevinfopdate": {"name": "ODSALEVInfoPDATE", "type": "TDateTimeField"}, "odspschedinfo": {"name": "ODSPschedInfo", "type": "TOracleDataSet"}, "odsmktinfomktname": {"name": "ODSMKTInfoMKTNAME", "type": "TStringField"}, "odsmktinfotickno": {"name": "ODSMKTInfoTICKNO", "type": "TStringField"}, "odspschedinfocreditid": {"name": "ODSPschedInfoCREDITID", "type": "TFloatField"}, "odspschedinfopaymentdate": {"name": "ODSPschedInfoPAYMENTDATE", "type": "TDateTimeField"}, "odspschedinfoprincipal": {"name": "ODSPschedInfoPRINCIPAL", "type": "TFloatField"}, "odspschedinforestbefore": {"name": "ODSPschedInfoRESTBEFORE", "type": "TFloatField"}, "odspschedinforestafter": {"name": "ODSPschedInfoRESTAFTER", "type": "TFloatField"}, "odspschedinfomktname": {"name": "ODSPschedInfoMKTNAME", "type": "TStringField"}, "odspschedinfoboorowername": {"name": "ODSPschedInfoBOOROWERNAME", "type": "TStringField"}, "odspschedinfocrdnum": {"name": "ODSPschedInfoCRDNUM", "type": "TStringField"}, "odspschedinfointerest": {"name": "ODSPschedInfoINTEREST", "type": "TFloatField"}, "rbreptype": {"name": "rbRepType", "type": "TRadioGroup"}, "groupbox12": {"name": "GroupBox12", "type": "TGroupBox"}, "dtp1": {"name": "dtp1", "type": "TDateTimePicker"}, "dtp2": {"name": "dtp2", "type": "TDateTimePicker"}, "odsmktsinforownum": {"name": "ODSMKTsInfoROWNUM", "type": "TFloatField"}, "odsmktsinfomktname": {"name": "ODSMKTsInfoMKTNAME", "type": "TStringField"}, "odsmktsinfoboorcnt": {"name": "ODSMKTsInfoBOORCNT", "type": "TFloatField"}, "odsmktsinfogivenamount": {"name": "ODSMKTsInfoGIVENAMOUNT", "type": "TFloatField"}, "odsmktsinfoymamount": {"name": "ODSMKTsInfoYMAMOUNT", "type": "TFloatField"}, "odsmktsinforest": {"name": "ODSMKTsInfoREST", "type": "TFloatField"}, "odsmktsinfoclosecrdcount": {"name": "ODSMKTsInfoCLOSECRDCOUNT", "type": "TFloatField"}, "odsmktsinfoclosecrdymamount": {"name": "ODSMKTsInfoCLOSECRDYMAMOUNT", "type": "TFloatField"}, "odsinsurinfoinsurancecompany": {"name": "ODSInsurInfoINSURANCECOMPANY", "type": "TStringField"}, "odsinsurinfoinsuranceno": {"name": "ODSInsurInfoINSURANCENO", "type": "TStringField"}, "odsinsurinfoinsurancedate": {"name": "ODSInsurInfoINSURANCEDATE", "type": "TDateTimeField"}, "odsmktsinfofakcredcount": {"name": "ODSMKTsInfoFAKCREDCOUNT", "type": "TFloatField"}, "odsmktsinfofakymkrcount": {"name": "ODSMKTsInfoFAKYMKRCOUNT", "type": "TFloatField"}, "odsmktsinfofakymkrrest": {"name": "ODSMKTsInfoFAKYMKRREST", "type": "TFloatField"}, "exporter": {"name": "Exporter", "type": "TCMExcelExport"}, "mkt": {"name": "MKT", "type": "TOracleDataSet"}, "mktrownum": {"name": "MKTROWNUM", "type": "TFloatField"}, "mktmktname": {"name": "MKTMKTNAME", "type": "TStringField"}, "mktboorcnt": {"name": "MKTBOORCNT", "type": "TFloatField"}, "mktgivenamount": {"name": "MKTGIVENAMOUNT", "type": "TFloatField"}, "mktymamount": {"name": "MKTYMAMOUNT", "type": "TFloatField"}, "mktrest": {"name": "MKTREST", "type": "TFloatField"}, "mktclosecrdcount": {"name": "MKTCLOSECRDCOUNT", "type": "TFloatField"}, "mktclosecrdymamount": {"name": "MKTCLOSECRDYMAMOUNT", "type": "TFloatField"}, "mktfakcredcount": {"name": "MKTFAKCREDCOUNT", "type": "TFloatField"}, "mktfakymkrcount": {"name": "MKTFAKYMKRCOUNT", "type": "TFloatField"}, "mktfakymkrrest": {"name": "MKTFAKYMKRREST", "type": "TFloatField"}, "gauge1": {"name": "Gauge1", "type": "TGauge"}}, {});
  U.init(async () => {
    U.var_("frmIpRepFilter", null, "TfrmIpRepFilter");
  });
  U.func("InitPlugin", async function InitPlugin(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"s": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["s"]);
  await $.mcall((await $.v(C, "frmIpRepFilter")), "ShowModal", []);
  return L0.result;
}, {"params": ["S"], "kind": "procedure", "ptypes": ["String"]});
  U.method("TfrmIpRepFilter", "BuildFilterString", async function BuildFilterString(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: null};
  L0["concatfilter"] = $.fn(async function ConcatFilter(p0, p1, p2, p3) {
  const L1 = {"s": $.asRef(p0), "prefix": $.copyArg(p1), "checked": $.copyArg(p2), "keyvalue": $.copyArg(p3), result: undefined, "temp": ''};
  await $.fixArgs(L1, ["prefix", "checked", "keyvalue"]);
  L1["csformat"] = "(%s=%s)";
  if ($.truthy(L1["checked"])) {
    L1["temp"] = (await $.call(C, "Format", [L1["csformat"], [L1["prefix"], L1["keyvalue"]]]));
    if ($.truthy($.eq((await L1["s"].get()), ""))) {
      await L1["s"].set(L1["temp"]);
    } else {
      await L1["s"].set($.add($.add((await L1["s"].get()), "and "), L1["temp"]));
    }
  }
  return L1.result;
});
  L0["result"] = $.add($.add($.add($.add("DATEOFCONCLUSION between '", (await $.call(C, "FormatDateTime", ["dd-mmm-yyyy", (await $.mv((await $.v(C, "dtp1")), "Date"))]))), "' and '"), (await $.call(C, "FormatDateTime", ["dd-mmm-yyyy", (await $.mv((await $.v(C, "dtp2")), "Date"))]))), "'");
  await $.stmt((await $.callv(L0["concatfilter"], [$.ref(async () => L0["result"], async ($t1) => { L0["result"] = $t1; }), "CURRENCY", (await $.mv((await $.v(C, "CheckBox1")), "Checked")), (await $.mv((await $.v(C, "DBLookupComboboxEh1")), "KeyValue"))])));
  await $.stmt((await $.callv(L0["concatfilter"], [$.ref(async () => L0["result"], async ($t2) => { L0["result"] = $t2; }), "BRANCHID", (await $.mv((await $.v(C, "CheckBox2")), "Checked")), (await $.mv((await $.v(C, "DBLookupComboboxEh2")), "KeyValue"))])));
  await $.stmt((await $.callv(L0["concatfilter"], [$.ref(async () => L0["result"], async ($t3) => { L0["result"] = $t3; }), "USRGROUP", (await $.mv((await $.v(C, "CheckBox3")), "Checked")), (await $.mv((await $.v(C, "DBLookupComboboxEh3")), "KeyValue"))])));
  await $.stmt((await $.callv(L0["concatfilter"], [$.ref(async () => L0["result"], async ($t4) => { L0["result"] = $t4; }), "RESERVEID", (await $.mv((await $.v(C, "CheckBox4")), "Checked")), (await $.mv((await $.v(C, "DBLookupComboboxEh4")), "KeyValue"))])));
  await $.stmt((await $.callv(L0["concatfilter"], [$.ref(async () => L0["result"], async ($t5) => { L0["result"] = $t5; }), "DUERESERVEID", (await $.mv((await $.v(C, "CheckBox5")), "Checked")), (await $.mv((await $.v(C, "DBLookupComboboxEh5")), "KeyValue"))])));
  await $.stmt((await $.callv(L0["concatfilter"], [$.ref(async () => L0["result"], async ($t6) => { L0["result"] = $t6; }), "USID", (await $.mv((await $.v(C, "CheckBox6")), "Checked")), (await $.mv((await $.v(C, "DBLookupComboboxEh6")), "KeyValue"))])));
  await $.stmt((await $.callv(L0["concatfilter"], [$.ref(async () => L0["result"], async ($t7) => { L0["result"] = $t7; }), "PERSONALTYPE", (await $.mv((await $.v(C, "CheckBox7")), "Checked")), (await $.mv((await $.v(C, "DBLookupComboboxEh7")), "KeyValue"))])));
  await $.stmt((await $.callv(L0["concatfilter"], [$.ref(async () => L0["result"], async ($t8) => { L0["result"] = $t8; }), "CUSTOMERTYPE", (await $.mv((await $.v(C, "CheckBox8")), "Checked")), (await $.mv((await $.v(C, "DBLookupComboboxEh8")), "KeyValue"))])));
  await $.stmt((await $.callv(L0["concatfilter"], [$.ref(async () => L0["result"], async ($t9) => { L0["result"] = $t9; }), "CREDITTYPE", (await $.mv((await $.v(C, "CheckBox9")), "Checked")), (await $.mv((await $.v(C, "DBLookupComboboxEh9")), "KeyValue"))])));
  await $.stmt((await $.callv(L0["concatfilter"], [$.ref(async () => L0["result"], async ($t10) => { L0["result"] = $t10; }), "PLEDGEID", (await $.mv((await $.v(C, "CheckBox10")), "Checked")), (await $.mv((await $.v(C, "DBLookupComboboxEh10")), "KeyValue"))])));
  await $.stmt((await $.callv(L0["concatfilter"], [$.ref(async () => L0["result"], async ($t11) => { L0["result"] = $t11; }), "BOOROWERID", (await $.mv((await $.v(C, "CheckBox11")), "Checked")), (await $.mv((await $.v(C, "DBLookupComboboxEh11")), "KeyValue"))])));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TfrmIpRepFilter", "GetReport", async function GetReport(Self, p0, p1, p2, p3) {
  const C = $.chain(Self, U);
  const L0 = {"repdataset": $.copyArg(p0), "procname": $.copyArg(p1), "reptype": $.copyArg(p2), "qrep": $.copyArg(p3), result: undefined, "bdat": 0, "edat": 0, "i": 0};
  await $.fixArgs(L0, ["repdataset", "procname", "reptype", "qrep"]);
  L0["bdat"] = (await $.call(C, "integer", [(await $.call(C, "trunc", [(await $.mv((await $.v(C, "dtp1")), "DateTime"))]))]));
  L0["edat"] = (await $.call(C, "integer", [(await $.call(C, "trunc", [(await $.mv((await $.v(C, "dtp2")), "DateTime"))]))]));
  L0["i"] = 1;
  await $.mset((await $.v(C, "Gauge1")), "Visible", true);
  {
    const $t12 = (await $.wobj(C, "ODSCredits"));
    await $.mcall((await $.wv([$t12], "Session", C, false)), "Commit", []);
    await $.stmt($.wcall([$t12], "Close", [], C));
    if ($.truthy($.ne((await $.wv([$t12], "BuildFilterString", C, false)), ""))) {
      { const $t13 = await $.iset((await $.wv([$t12], "SQL", C, false)), [2], $.add("where ", (await $.wv([$t12], "BuildFilterString", C, false)))); if ($t13 !== undefined) { await $.wset([$t12], "SQL", $t13, C); } }
    } else {
      { const $t14 = await $.iset((await $.wv([$t12], "SQL", C, false)), [3], ""); if ($t14 !== undefined) { await $.wset([$t12], "SQL", $t14, C); } }
    }
    await $.stmt($.wcall([$t12], "Open", [], C));
    while ($.truthy($.not((await $.wv([$t12], "Eof", C, false))))) {
      await $.stmt((await $.mcall((await $.wv([$t12], "CM_IP_REPORTS", C, false)), "CallProcedure", [(await $.wv([$t12], "procname", { get: async () => L0["procname"], set: async (v) => { L0["procname"] = v; }, local: true }, false)), [(await $.mv((await $.wcall([$t12], "fieldbyname", ["id"], C)), "AsVariant")), (await $.wv([$t12], "bdat", { get: async () => L0["bdat"], set: async (v) => { L0["bdat"] = v; }, local: true }, false)), (await $.wv([$t12], "edat", { get: async () => L0["edat"], set: async (v) => { L0["edat"] = v; }, local: true }, false))]])));
      await $.mset((await $.wv([$t12], "Gauge1", C, false)), "Progress", (await $.wcall([$t12], "trunc", [$.fdiv($.mul((await $.wv([$t12], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false)), 100), (await $.wv([$t12], "RecordCount", C, false)))], C)));
      await $.wset([$t12], "i", $.add((await $.wv([$t12], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false)), 1), { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true });
      await $.stmt($.wcall([$t12], "Next", [], C));
      await $.tick();
    }
  }
  await $.mcall(L0["repdataset"], "Close", []);
  await $.mcall(L0["repdataset"], "Open", []);
  await $.mset((await $.v(C, "Screen")), "Cursor", (await $.v(C, "crDefault")));
  if ($.truthy($.eq(L0["reptype"], 1))) {
    {
      const $t15 = L0["qrep"];
      await $.stmt($.wcall([$t15], "preview", [], C));
    }
  } else {
    {
      const $t16 = (await $.wobj(C, "Exporter"));
      await $.stmt($.wcall([$t16], "Connect", [], C));
      await $.stmt((await $.wcall([$t16], "ExportDataset", [(await $.wv([$t16], "RepDataSet", { get: async () => L0["repdataset"], set: async (v) => { L0["repdataset"] = v; }, local: true }, false)), "IP"], C)));
      await $.stmt($.wcall([$t16], "ShowExcel", [], C));
    }
  }
  await $.mset((await $.v(C, "Gauge1")), "Visible", false);
  return L0.result;
}, {"params": ["RepDataSet", "procname", "RepType", "QRep"], "kind": "procedure", "ptypes": ["TOracleDataSet", "String", "Byte", "TQuickRep"]});
  U.method("TfrmIpRepFilter", "Button1Click", async function Button1Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "a": 0, "repds": null, "repqr": null};
  await $.fixArgs(L0, ["sender"]);
  await $.mset((await $.v(C, "Screen")), "Cursor", (await $.v(C, "crSQLWait")));
  if ($.truthy($.ne((await $.mv((await $.v(C, "DBLookupComboboxEh8")), "keyvalue")), (await $.v(C, "null"))))) {
    L0["a"] = (await $.mv((await $.v(C, "DBLookupComboboxEh8")), "keyvalue"));
  }
  if ($.truthy($.eq((await $.mv((await $.v(C, "ODFReportPROCNAME")), "AsString")), ""))) {
    return L0.result;
  }
  if ($.truthy((await $.and_((await $.and_(($.eq(L0["a"], 1)), async () => ($.eq((await $.mv((await $.v(C, "CheckBox8")), "checked")), true)))), async () => ($.eq((await $.mv((await $.v(C, "ODFReportPROCNAME")), "AsString")), "insonerowmkts")))))) {
    await $.stmt((await $.call(C, "GetReport", [(await $.v(C, "MKT")), (await $.mv((await $.v(C, "ODFReportPROCNAME")), "AsString")), (await $.mv((await $.v(C, "rbRepType")), "ItemIndex")), L0["repqr"]])));
  } else {
    L0["repds"] = (await $.call(C, "FindComponent", [(await $.mv((await $.v(C, "ODFReportDATASET")), "AsString"))]));
    L0["repqr"] = (await $.call(C, "FindComponent", [(await $.mv((await $.v(C, "ODFReportQRNAME")), "AsString"))]));
    await $.stmt((await $.call(C, "GetReport", [L0["repds"], (await $.mv((await $.v(C, "ODFReportPROCNAME")), "AsString")), (await $.mv((await $.v(C, "rbRepType")), "ItemIndex")), L0["repqr"]])));
    await $.mset((await $.v(C, "Screen")), "Cursor", (await $.v(C, "crDefault")));
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TfrmIpRepFilter", "FormCreate", async function FormCreate(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "i": 0};
  await $.fixArgs(L0, ["sender"]);
  await $.set(C, "qrpMKTInfo", (await $.mcall((await $.v(C, "TqrpMKTInfo")), "Create", [Self])));
  await $.set(C, "qrpBoorInfo", (await $.mcall((await $.v(C, "TqrpBoorInfo")), "Create", [Self])));
  await $.set(C, "qrpInsurInfo", (await $.mcall((await $.v(C, "TqrpInsurInfo")), "Create", [Self])));
  await $.set(C, "qrpMKTsInfo", (await $.mcall((await $.v(C, "TqrpMKTsInfo")), "Create", [Self])));
  await $.set(C, "qrpDateInfo", (await $.mcall((await $.v(C, "TqrpDateInfo")), "Create", [Self])));
  await $.set(C, "qrpPredInfo", (await $.mcall((await $.v(C, "TqrpPredInfo")), "Create", [Self])));
  await $.set(C, "qrpALEVInfo", (await $.mcall((await $.v(C, "TqrpALEVInfo")), "Create", [Self])));
  await $.set(C, "qrpPSchedInfo", (await $.mcall((await $.v(C, "TqrpPSchedInfo")), "Create", [Self])));
  { const $t17 = $.sub((await $.v(C, "ComponentCount")), 1);
    L0["i"] = 0;
    let $t18 = true;
    for (;;) {
      if (!$t18) { L0["i"] = $.succ(L0["i"], 1); }
      $t18 = false;
      if (!($.ord(L0["i"]) <= $.ord($t17))) break;
      if ($.truthy((await $.and_(($.is_((await $.idx((await $.v(C, "Components")), [L0["i"]])), "TOracleDataSet")), async () => ($.eq((await $.mv((await $.idx((await $.v(C, "Components")), [L0["i"]])), "tag")), 0)))))) {
        await $.mcall((await $.idx((await $.v(C, "Components")), [L0["i"]])), "Open", []);
      }
      await $.tick();
    }
  }
  await $.mset((await $.v(C, "DBLookupComboboxEh13")), "KeyValue", "insonerowmkt");
  await $.mset((await $.v(C, "dtp1")), "DateTime", (await $.v(C, "Get_CurrentDate")));
  await $.mset((await $.v(C, "dtp2")), "DateTime", (await $.v(C, "Get_CurrentDate")));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.setInitialization(async function __initialization(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: undefined};
  await $.set(C, "frmIpRepFilter", (await $.mcall((await $.v(C, "TfrmIpRepFilter")), "Create", [(await $.v(C, "CommonApplication"))])));
  return L0.result;
});
  return U;
}
