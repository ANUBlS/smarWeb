// Generated from uBriefCaseFilter.pas by pas2js — do not edit by hand; regenerate instead.
/* eslint-disable */
// @ts-nocheck

export default function define($) {
  const U = $.unit("uBriefCaseFilter", ["Windows", "Messages", "SysUtils", "Classes", "Graphics", "Controls", "Forms", "Dialogs", "CMExcelExport", "Db", "Oracle", "OracleData", "StdCtrls", "ComCtrls", "Mask", "DBCtrlsEh", "DBLookupEh", "ExtCtrls", "Math", "DBCtrls", "Grids", "DBGrids", "CMCurrencyEdit", "DBGridEh", "XLSExportComp", "Buttons", "sboapiDataModuleImpl", "CommonDecls", "AKProgressFormImpl", "uBCDataModImpl", "uQRF1", "sbSystem", "uGBQRF1", "uQRF2", "uQRF3", "uQRFBP", "uQRFProblem", "uQRFLYT", "uQRFL5YP", "uQRFL5YT", "uQRFLYPS1", "uQRFLYPS2", "uQRFMg", "uQRF2Full", "uQRF2Type", "uQRFMonit", "uQRFProblemli", "uQRFLegalM", "uQRFProlongs", "uQRFYPays1", "uQRFYPays2", "uQRFAboutCrediting", "uQRFAboutCrediting2", "uQRFCreditPaying", "uQRFWBM1", "uQRFWBM2", "uQRFWBA1", "uQRFWBA2", "uQRFMustRet1", "uQRFMustRet2", "uQRFPurpose", "uQRF3Branch", "uQRF3Filial", "uQRF3Proj", "uQRF3abLegM", "uQRFProviz", "uQRFGrantYear", "uQRFGrantBranch", "uQRFGrantContract", "SBTranslateProc", "ShellAPI", "XLSFile"]);
  const C = [U];
  U.defClass("TfrmBCFilter", "TForm", {"panel1": {"name": "Panel1", "type": "TPanel"}, "groupbox1": {"name": "GroupBox1", "type": "TGroupBox"}, "checkbox1": {"name": "CheckBox1", "type": "TCheckBox"}, "dblookupcomboboxeh1": {"name": "DBLookupComboboxEh1", "type": "TDBLookupComboboxEh"}, "groupbox2": {"name": "GroupBox2", "type": "TGroupBox"}, "dblookupcomboboxeh3": {"name": "DBLookupComboboxEh3", "type": "TDBLookupComboboxEh"}, "checkbox3": {"name": "CheckBox3", "type": "TCheckBox"}, "groupbox3": {"name": "GroupBox3", "type": "TGroupBox"}, "dblookupcomboboxeh2": {"name": "DBLookupComboboxEh2", "type": "TDBLookupComboboxEh"}, "checkbox2": {"name": "CheckBox2", "type": "TCheckBox"}, "panel5": {"name": "Panel5", "type": "TPanel"}, "groupbox7": {"name": "GroupBox7", "type": "TGroupBox"}, "checkbox7": {"name": "CheckBox7", "type": "TCheckBox"}, "dblookupcomboboxeh7": {"name": "DBLookupComboboxEh7", "type": "TDBLookupComboboxEh"}, "groupbox9": {"name": "GroupBox9", "type": "TGroupBox"}, "checkbox8": {"name": "CheckBox8", "type": "TCheckBox"}, "dblookupcomboboxeh8": {"name": "DBLookupComboboxEh8", "type": "TDBLookupComboboxEh"}, "creditsds": {"name": "CreditsDS", "type": "TOracleDataSet"}, "cm_ak_reports": {"name": "CM_AK_REPORTS", "type": "TOraclePackage"}, "dscurrencys": {"name": "DSCurrencys", "type": "TDataSource"}, "currencys": {"name": "Currencys", "type": "TOracleDataSet"}, "dsbranches": {"name": "DSBranches", "type": "TDataSource"}, "branches": {"name": "Branches", "type": "TOracleDataSet"}, "dsusergroups": {"name": "DSUserGroups", "type": "TDataSource"}, "usergroups": {"name": "UserGroups", "type": "TOracleDataSet"}, "dspersons": {"name": "DSPersons", "type": "TDataSource"}, "persons": {"name": "Persons", "type": "TOracleDataSet"}, "dscategories": {"name": "DSCategories", "type": "TDataSource"}, "categories": {"name": "Categories", "type": "TOracleDataSet"}, "kera": {"name": "Kera", "type": "TCMExcelExport"}, "panel2": {"name": "Panel2", "type": "TPanel"}, "groupbox6": {"name": "GroupBox6", "type": "TGroupBox"}, "checkbox5": {"name": "CheckBox5", "type": "TCheckBox"}, "dblookupcomboboxeh4": {"name": "DBLookupComboboxEh4", "type": "TDBLookupComboboxEh"}, "customers": {"name": "Customers", "type": "TOracleDataSet"}, "dscustomers": {"name": "DSCustomers", "type": "TDataSource"}, "panel3": {"name": "Panel3", "type": "TPanel"}, "rgreporttype": {"name": "RGReportType", "type": "TRadioGroup"}, "rgpr": {"name": "rgPR", "type": "TRadioGroup"}, "groupbox5": {"name": "GroupBox5", "type": "TGroupBox"}, "cbprintdeep": {"name": "cbPrintDeep", "type": "TComboBox"}, "checkbox4": {"name": "CheckBox4", "type": "TCheckBox"}, "groupbox8": {"name": "GroupBox8", "type": "TGroupBox"}, "checkbox6": {"name": "CheckBox6", "type": "TCheckBox"}, "dblookupcomboboxeh5": {"name": "DBLookupComboboxEh5", "type": "TDBLookupComboboxEh"}, "districts": {"name": "Districts", "type": "TOracleDataSet"}, "dsdistricts": {"name": "DSDistricts", "type": "TDataSource"}, "districtsid": {"name": "DistrictsID", "type": "TFloatField"}, "districtsidname": {"name": "DistrictsIDNAME", "type": "TWideStringField"}, "groupbox10": {"name": "GroupBox10", "type": "TGroupBox"}, "checkbox9": {"name": "CheckBox9", "type": "TCheckBox"}, "dblookupcomboboxeh6": {"name": "DBLookupComboboxEh6", "type": "TDBLookupComboboxEh"}, "custnames": {"name": "CustNames", "type": "TOracleDataSet"}, "dscustname": {"name": "DSCustName", "type": "TDataSource"}, "usergroupsid": {"name": "UserGroupsID", "type": "TFloatField"}, "usergroupsdescription": {"name": "UserGroupsDESCRIPTION", "type": "TWideStringField"}, "panel4": {"name": "Panel4", "type": "TPanel"}, "button1": {"name": "Button1", "type": "TButton"}, "btnyeniden": {"name": "btnYeniden", "type": "TButton"}, "button2": {"name": "Button2", "type": "TButton"}, "btnall": {"name": "btnAll", "type": "TButton"}, "repforms": {"name": "RepForms", "type": "TOracleDataSet"}, "dsrepforms": {"name": "DSRepForms", "type": "TDataSource"}, "rgkredstatus": {"name": "rgKredStatus", "type": "TRadioGroup"}, "groupbox11": {"name": "GroupBox11", "type": "TGroupBox"}, "checkbox10": {"name": "CheckBox10", "type": "TCheckBox"}, "cbformslook": {"name": "cbFormsLook", "type": "TDBLookupComboboxEh"}, "panel6": {"name": "Panel6", "type": "TPanel"}, "groupbox4": {"name": "GroupBox4", "type": "TGroupBox"}, "label1": {"name": "Label1", "type": "TLabel"}, "label2": {"name": "Label2", "type": "TLabel"}, "bdatep": {"name": "BDateP", "type": "TDateTimePicker"}, "edatep": {"name": "EDateP", "type": "TDateTimePicker"}, "groupbox12": {"name": "GroupBox12", "type": "TGroupBox"}, "gcredbegd": {"name": "GCredBegD", "type": "TDateTimePicker"}, "gcredendd": {"name": "GCredEndD", "type": "TDateTimePicker"}, "label3": {"name": "Label3", "type": "TLabel"}, "label4": {"name": "Label4", "type": "TLabel"}, "groupbox13": {"name": "GroupBox13", "type": "TGroupBox"}, "checkbox11": {"name": "CheckBox11", "type": "TCheckBox"}, "dblookupcomboboxeh9": {"name": "DBLookupComboboxEh9", "type": "TDBLookupComboboxEh"}, "groupbox14": {"name": "GroupBox14", "type": "TGroupBox"}, "checkbox12": {"name": "CheckBox12", "type": "TCheckBox"}, "dblookupcomboboxeh10": {"name": "DBLookupComboboxEh10", "type": "TDBLookupComboboxEh"}, "periods": {"name": "Periods", "type": "TOracleDataSet"}, "statuses": {"name": "Statuses", "type": "TOracleDataSet"}, "dsperiods": {"name": "DSPeriods", "type": "TDataSource"}, "dsstatuses": {"name": "DSStatuses", "type": "TDataSource"}, "odsmaketemp": {"name": "ODSMakeTemp", "type": "TOracleDataSet"}, "panel7": {"name": "Panel7", "type": "TPanel"}, "groupbox15": {"name": "GroupBox15", "type": "TGroupBox"}, "checkbox13": {"name": "CheckBox13", "type": "TCheckBox"}, "types": {"name": "Types", "type": "TOracleDataSet"}, "floatfield1": {"name": "FloatField1", "type": "TFloatField"}, "stringfield1": {"name": "StringField1", "type": "TWideStringField"}, "dstypes": {"name": "DSTypes", "type": "TDataSource"}, "groupbox16": {"name": "GroupBox16", "type": "TGroupBox"}, "checkbox14": {"name": "CheckBox14", "type": "TCheckBox"}, "dblookupcomboboxeh12": {"name": "DBLookupComboboxEh12", "type": "TDBLookupComboboxEh"}, "fsm": {"name": "fsm", "type": "TCMCurrencyEdit"}, "fsx": {"name": "fsx", "type": "TCMCurrencyEdit"}, "label5": {"name": "Label5", "type": "TLabel"}, "groupbox17": {"name": "GroupBox17", "type": "TGroupBox"}, "label6": {"name": "Label6", "type": "TLabel"}, "checkbox15": {"name": "CheckBox15", "type": "TCheckBox"}, "ntmm": {"name": "ntmm", "type": "TCMCurrencyEdit"}, "ntmx": {"name": "ntmx", "type": "TCMCurrencyEdit"}, "groupbox18": {"name": "GroupBox18", "type": "TGroupBox"}, "checkbox16": {"name": "CheckBox16", "type": "TCheckBox"}, "dblookupcomboboxeh11": {"name": "DBLookupComboboxEh11", "type": "TDBLookupComboboxEh"}, "short": {"name": "Short", "type": "TOracleDataSet"}, "dsshort": {"name": "DSShort", "type": "TDataSource"}, "shortid": {"name": "ShortID", "type": "TFloatField"}, "shortshort": {"name": "ShortSHORT", "type": "TWideStringField"}, "shortdescription": {"name": "ShortDESCRIPTION", "type": "TWideStringField"}, "groupbox19": {"name": "GroupBox19", "type": "TGroupBox"}, "checkbox17": {"name": "CheckBox17", "type": "TCheckBox"}, "dblookupcomboboxeh13": {"name": "DBLookupComboboxEh13", "type": "TDBLookupComboboxEh"}, "gtypes": {"name": "GTypes", "type": "TOracleDataSet"}, "dsgtype": {"name": "DSGType", "type": "TDataSource"}, "gtypesid": {"name": "GTypesID", "type": "TFloatField"}, "gtypesname": {"name": "GTypesNAME", "type": "TWideStringField"}, "sysdat": {"name": "sysdat", "type": "TOracleDataSet"}, "sysdattek_dat": {"name": "sysdatTEK_DAT", "type": "TDateTimeField"}, "sysdatpred_dat": {"name": "sysdatPRED_DAT", "type": "TDateTimeField"}, "sysdatarc_day": {"name": "sysdatARC_DAY", "type": "TDateTimeField"}, "sysdatclose": {"name": "sysdatCLOSE", "type": "TIntegerField"}, "resultds_": {"name": "ResultDS_", "type": "TOracleDataSet"}, "resultds_odeme_emsali": {"name": "ResultDS_ODEME_EMSALI", "type": "TFloatField"}, "resultds_creditid": {"name": "ResultDS_CREDITID", "type": "TFloatField"}, "resultds_boorowerid": {"name": "ResultDS_BOOROWERID", "type": "TFloatField"}, "resultds_crdnum": {"name": "ResultDS_CRDNUM", "type": "TWideStringField"}, "resultds_boorowername": {"name": "ResultDS_BOOROWERNAME", "type": "TWideStringField"}, "resultds_dsdesigner": {"name": "ResultDS_DSDesigner", "type": "TWideStringField"}, "resultds_dsdesigner2": {"name": "ResultDS_DSDesigner2", "type": "TWideStringField"}, "resultds_i": {"name": "ResultDS_i", "type": "TWideStringField"}, "resultds_dsdesigner3": {"name": "ResultDS_DSDesigner3", "type": "TWideStringField"}, "resultds_branchid": {"name": "ResultDS_BRANCHID", "type": "TFloatField"}, "resultds_branch": {"name": "ResultDS_BRANCH", "type": "TWideStringField"}, "resultds_villageid": {"name": "ResultDS_VILLAGEID", "type": "TFloatField"}, "resultds_districtid": {"name": "ResultDS_DISTRICTID", "type": "TFloatField"}, "resultds_village": {"name": "ResultDS_VILLAGE", "type": "TWideStringField"}, "resultds_district": {"name": "ResultDS_DISTRICT", "type": "TWideStringField"}, "resultds_credperiod": {"name": "ResultDS_CREDPERIOD", "type": "TWideStringField"}, "resultds_descripion": {"name": "ResultDS_DESCRIPION", "type": "TWideStringField"}, "resultds_sex": {"name": "ResultDS_SEX", "type": "TWideStringField"}, "resultds_purpose": {"name": "ResultDS_PURPOSE", "type": "TWideStringField"}, "resultds_sferaday": {"name": "ResultDS_SFERADAY", "type": "TWideStringField"}, "resultds_purposeofcredit": {"name": "ResultDS_PURPOSEOFCREDIT", "type": "TWideStringField"}, "resultds_purposeid": {"name": "ResultDS_PURPOSEID", "type": "TFloatField"}, "resultds_typeid": {"name": "ResultDS_TYPEID", "type": "TFloatField"}, "resultds_typedesc": {"name": "ResultDS_TYPEDESC", "type": "TWideStringField"}, "resultds_crdcount": {"name": "ResultDS_CRDCOUNT", "type": "TFloatField"}, "resultds_payedcrdcount": {"name": "ResultDS_PAYEDCRDCOUNT", "type": "TFloatField"}, "resultds_firsttrchdate": {"name": "ResultDS_FIRSTTRCHDATE", "type": "TDateTimeField"}, "resultds_lastpaydate": {"name": "ResultDS_LASTPAYDATE", "type": "TDateTimeField"}, "resultds_prolongdate": {"name": "ResultDS_PROLONGDATE", "type": "TDateTimeField"}, "resultds_prolongcnt": {"name": "ResultDS_PROLONGCNT", "type": "TFloatField"}, "resultds_currency": {"name": "ResultDS_CURRENCY", "type": "TWideStringField"}, "resultds_kurus": {"name": "ResultDS_KURUS", "type": "TFloatField"}, "resultds_intrate": {"name": "ResultDS_INTRATE", "type": "TFloatField"}, "resultds_odrate": {"name": "ResultDS_ODRATE", "type": "TFloatField"}, "resultds_givenamount": {"name": "ResultDS_GIVENAMOUNT", "type": "TFloatField"}, "resultds_datedebtmain": {"name": "ResultDS_DATEDEBTMAIN", "type": "TFloatField"}, "resultds_payedmain": {"name": "ResultDS_PAYEDMAIN", "type": "TFloatField"}, "resultds_payedmonmain": {"name": "ResultDS_PAYEDMONMAIN", "type": "TFloatField"}, "resultds_debtmain": {"name": "ResultDS_DEBTMAIN", "type": "TFloatField"}, "resultds_debtovermain": {"name": "ResultDS_DEBTOVERMAIN", "type": "TFloatField"}, "resultds_lateday": {"name": "ResultDS_LATEDAY", "type": "TFloatField"}, "resultds_calculatedpercent": {"name": "ResultDS_CALCULATEDPERCENT", "type": "TFloatField"}, "resultds_datedebtint": {"name": "ResultDS_DATEDEBTINT", "type": "TFloatField"}, "resultds_payedint": {"name": "ResultDS_PAYEDINT", "type": "TFloatField"}, "resultds_payedmonint": {"name": "ResultDS_PAYEDMONINT", "type": "TFloatField"}, "resultds_debtint": {"name": "ResultDS_DEBTINT", "type": "TFloatField"}, "resultds_debtoverint": {"name": "ResultDS_DEBTOVERINT", "type": "TFloatField"}, "resultds_gecgunfaiz": {"name": "ResultDS_GECGUNFAIZ", "type": "TFloatField"}, "resultds_loanaccid": {"name": "ResultDS_LOANACCID", "type": "TWideStringField"}, "resultds_booroweraccid": {"name": "ResultDS_BOOROWERACCID", "type": "TWideStringField"}, "resultds_booroweraccrest": {"name": "ResultDS_BOOROWERACCREST", "type": "TFloatField"}, "resultds_address": {"name": "ResultDS_ADDRESS", "type": "TWideStringField"}, "resultds_phonenumber": {"name": "ResultDS_PHONENUMBER", "type": "TWideStringField"}, "resultds_salary": {"name": "ResultDS_SALARY", "type": "TWideStringField"}, "resultds_description": {"name": "ResultDS_DESCRIPTION", "type": "TWideStringField"}, "resultds_girovrest": {"name": "ResultDS_GIROVREST", "type": "TFloatField"}, "resultds_duebyscheme": {"name": "ResultDS_DUEBYSCHEME", "type": "TFloatField"}, "resultds_calcstatus": {"name": "ResultDS_CALCSTATUS", "type": "TWideStringField"}, "resultds_reserve": {"name": "ResultDS_RESERVE", "type": "TWideStringField"}, "resultds_primaryreservearest": {"name": "ResultDS_PRIMARYRESERVEAREST", "type": "TFloatField"}, "resultds_primarypurreservearest": {"name": "ResultDS_PRIMARYPURRESERVEAREST", "type": "TFloatField"}, "resultds_pret": {"name": "ResultDS_PRET", "type": "TFloatField"}, "resultds_idd": {"name": "ResultDS_IDD", "type": "TFloatField"}, "resultds_qatn": {"name": "ResultDS_QATN", "type": "TFloatField"}, "resultds_icra": {"name": "ResultDS_ICRA", "type": "TFloatField"}, "resultds_expert__name": {"name": "ResultDS_EXPERT__NAME", "type": "TWideStringField"}, "resultds_paymentdate": {"name": "ResultDS_PAYMENTDATE", "type": "TDateTimeField"}, "resultds_principal": {"name": "ResultDS_PRINCIPAL", "type": "TFloatField"}, "resultds_interest": {"name": "ResultDS_INTEREST", "type": "TFloatField"}, "resultds_cem": {"name": "ResultDS_CEM", "type": "TFloatField"}, "xlsexportfile1": {"name": "XLSExportFile1", "type": "TXLSExportFile"}, "xlsexportdatasource1": {"name": "XLSExportDataSource1", "type": "TXLSExportDataSource"}, "button4": {"name": "Button4", "type": "TButton"}, "bitbtn1": {"name": "BitBtn1", "type": "TBitBtn"}, "savedialog": {"name": "SaveDialog", "type": "TSaveDialog"}}, {});
  U.init(async () => {
    U.const("rsProgressCaption", "                 Hesabat alınır gözləyin.   .....   ");
    U.const("rsReportHeaderCaption", "Aqrar Kredit SKT-nin %s vəsaiti hesabına göstərdiyi kredit xidməti haqqında məlumat");
    U.const("rsForm2Caption", "Aqrar Kredit SKT-nin %s vəsaiti hesabına göstərdiyi kredit xidməti haqqında məlumat");
    U.const("rsForm3Caption", "Aqrar Kredit SKT-nin %s vəsaiti hesabına göstərdiyi kredit xidməti haqqında məlumat");
    U.const("rsForm4Caption", "Aqrar Kredit SKT-nin %s vəsaiti hesabına göstərdiyi Bizness Plan haqqinda məlumat");
    U.const("rsForm5Caption", "Aqrar Kredit SKT-nin %s vəsaiti hesabına göstərdiyi Problemli kreditlər haqqinda məlumat");
    U.const("rsForm6Caption", "Aqrar Kredit SKT-nin %s vəsaiti hesabına göstərdiyi verilmiş kreditlər haqqinda məlumat");
    U.const("rsForm7Caption", "Aqrar Kredit SKT-nin %s vəsaiti hesabına göstərdiyi odənilmiş kreditlər haqqinda məlumat");
    U.const("rsForm8Caption", "Aqrar Kredit SKT-nin %s vəsaiti hesabına göstərdiyi verilmiş kreditlər haqqinda məlumat");
    U.const("rsForm9Caption", "Aqrar Kredit SKT-nin %s vəsaiti hesabına göstərdiyi qaytarılmalı kreditlər haqqında məlumat");
    U.const("rsForm10Caption", "Aqrar Kredit SKT-nin %s vəsaiti hesabına göstərdiyi qaytarılmalı kreditlər üçün görülmüş haqqında məlumat");
    U.const("rsForm11Caption", "Aqrar Kredit SKT-nin %s vəsaiti hesabına göstərdiyi kredit xidməti haqqında məlumat");
    U.const("rsForm12Caption", "Aqrar Kredit SKT-nin %s vəsaiti hesabına göstərdiyi kredit xidməti haqqında məlumat");
    U.const("rsForm13Caption", "Aqrar Kredit SKT-nin %s vəsaiti hesabına göstərdiyi keçirilən monitorinqlər haqqında məlumat");
    U.const("rsForm14Caption", "Aqrar Kredit SKT-nin %s vəsaiti hesabına göstərdiyi Problemli kreditlər haqqında məlumat");
    U.const("rsForm15Caption", "Aqrar Kredit SKT-nin %s vəsaiti hesabına göstərdiyi Hüquqi tədbirlər haqqında məlumat");
    U.const("rsForm16Caption", "Aqrar Kredit SKT-nin %s vəsaiti hesabına göstərdiyi kreditlərin vaxtının uzadılması haqqında məlumat");
    U.const("rsForm17Caption", "Aqrar Kredit SKT-nin %s vəsaiti hesabına göstərdiyi keçirilən monitorinqlər haqqında məlumat");
    U.const("rsForm18Caption", "Aqrar Kredit SKT-nin %s vəsaiti hesabına göstərdiyi kreditləşmə haqqında məlumat");
    U.const("rsForm19Caption", "Aqrar Kredit SKT-nin %s vəsaiti hesabına göstərdiyi kreditlərin odənilməsi haqqında məlumat");
    U.const("rsForm20Caption", "Aqrar Kredit SKT-nin %s vəsaiti hesabına göstərdiyi kredit xidməti haqqında məlumat");
    U.const("rsForm21Caption", "Aqrar Kredit SKT-nin %s vəsaiti hesabına göstərdiyi kredit xidməti haqqında məlumat");
    U.const("rsForm22Caption", "Aqrar Kredit SKT-nin %s vəsaiti hesabına göstərdiyi verilməli kreditlər haqqinda məlumat");
    U.const("rsForm23Caption", "Aqrar Kredit SKT-nin %s vəsaiti hesabına göstərdiyi kredit xidməti haqqında məlumat");
    U.const("rsForm26Caption", "Aqrar Kredit SKT-nin %s layihəsində görülmüş hüquqi tədbirlər haqqında");
    U.const("rsForm28Caption", "Yaradılan Ehtiyyatlar Barədə Məlumat");
    U.const("rsForm29Caption", "Aqrar Kredit SKT-nin Yaponiya Hökümətinin ayırdığı qrant hesabına alınmış və icarəyə verilmiş texnikalardan daxil olmuş vəsaitləri barədə Məlumat");
    U.var_("frmBCFilter", null, "TfrmBCFilter");
    U.var_("Counter", 0, "Integer");
    U.var_("PrintDeep", 0, "Integer");
  });
  U.method("TfrmBCFilter", "PrepareProgress", async function PrepareProgress(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"progcnt": $.copyArg(p0), "opdesc": $.copyArg(p1), result: undefined};
  await $.fixArgs(L0, ["progcnt", "opdesc"]);
  {
    const $t1 = (await $.wobj(C, "AKProgressForm"));
    const $t2 = (await $.wv([$t1], "ProgressShower", C, false));
    await $.wset([$t1, $t2], "Position", 0, C);
    await $.wset([$t1, $t2], "Max", (await $.wv([$t1, $t2], "ProgCnt", { get: async () => L0["progcnt"], set: async (v) => { L0["progcnt"] = v; }, local: true }, false)), C);
    await $.wset([$t1, $t2], "Step", 1, C);
    await $.wset([$t1, $t2], "Caption", (await $.wv([$t1, $t2], "opDesc", { get: async () => L0["opdesc"], set: async (v) => { L0["opdesc"] = v; }, local: true }, false)), C);
  }
  await $.mcall((await $.v(C, "AKProgressForm")), "Show", []);
  return L0.result;
}, {"params": ["ProgCnt", "opDesc"], "kind": "procedure", "ptypes": ["Integer", "String"]});
  U.method("TfrmBCFilter", "InsertOneRow", async function InsertOneRow(Self, p0, p1, p2, p3) {
  const C = $.chain(Self, U);
  const L0 = {"pid": $.copyArg(p0), "bdate": $.copyArg(p1), "edate": $.copyArg(p2), "incstat": $.copyArg(p3), result: undefined};
  await $.fixArgs(L0, ["pid", "bdate", "edate", "incstat"]);
  L0["rscreditnumber"] = "%d - № li kredit: ";
  {
    const $t3 = (await $.wobj(C, "CM_AK_REPORTS"));
    try {
      await $.stmt((await $.wcall([$t3], "CallProcedure", ["insinfof1", ["p_ID", (await $.wv([$t3], "pID", { get: async () => L0["pid"], set: async (v) => { L0["pid"] = v; }, local: true }, false)), "p_bDate", (await $.wv([$t3], "bDate", { get: async () => L0["bdate"], set: async (v) => { L0["bdate"] = v; }, local: true }, false)), "p_eDate", (await $.wv([$t3], "eDate", { get: async () => L0["edate"], set: async (v) => { L0["edate"] = v; }, local: true }, false)), "includeold", (await $.wv([$t3], "incstat", { get: async () => L0["incstat"], set: async (v) => { L0["incstat"] = v; }, local: true }, false))]], C)));
    } catch ($t4) {
      $.rethrowControl($t4);
      if ($.excIs($t4, "Exception")) {
        L0["e"] = $.exc($t4);
        await $.stmt((await $.wcall([$t3], "LogError", [$.add((await $.wcall([$t3], "Format", [(await $.wv([$t3], "rsCreditNumber", { get: async () => L0["rscreditnumber"], set: async (v) => { L0["rscreditnumber"] = v; }, local: true }, false)), [(await $.wv([$t3], "pid", { get: async () => L0["pid"], set: async (v) => { L0["pid"] = v; }, local: true }, false))]], C)), (await $.mv((await $.wv([$t3], "E", { get: async () => L0["e"], set: async (v) => { L0["e"] = v; }, local: true }, false)), "Message")))], C)));
      }
      else { throw $t4; }
    }
  }
  return L0.result;
}, {"params": ["PID", "BDate", "EDate", "incstat"], "kind": "procedure", "ptypes": ["Integer", "TDateTime", "TDateTime", "Integer"]});
  U.method("TfrmBCFilter", "InsertOneRow2", async function InsertOneRow2(Self, p0, p1, p2) {
  const C = $.chain(Self, U);
  const L0 = {"pid": $.copyArg(p0), "bdate": $.copyArg(p1), "edate": $.copyArg(p2), result: undefined};
  await $.fixArgs(L0, ["pid", "bdate", "edate"]);
  L0["rscreditnumber"] = "%d - № li kredit : ";
  {
    const $t5 = (await $.wobj(C, "CM_AK_REPORTS"));
    try {
      await $.stmt((await $.wcall([$t5], "CallProcedure", ["insinfof2", ["p_ID", (await $.wv([$t5], "pID", { get: async () => L0["pid"], set: async (v) => { L0["pid"] = v; }, local: true }, false)), "p_bDate", (await $.wv([$t5], "bDate", { get: async () => L0["bdate"], set: async (v) => { L0["bdate"] = v; }, local: true }, false)), "p_eDate", (await $.wv([$t5], "eDate", { get: async () => L0["edate"], set: async (v) => { L0["edate"] = v; }, local: true }, false))]], C)));
    } catch ($t6) {
      $.rethrowControl($t6);
      if ($.excIs($t6, "Exception")) {
        L0["e"] = $.exc($t6);
        await $.stmt((await $.wcall([$t5], "LogError", [$.add((await $.wcall([$t5], "Format", [(await $.wv([$t5], "rsCreditNumber", { get: async () => L0["rscreditnumber"], set: async (v) => { L0["rscreditnumber"] = v; }, local: true }, false)), [(await $.wv([$t5], "pid", { get: async () => L0["pid"], set: async (v) => { L0["pid"] = v; }, local: true }, false))]], C)), (await $.mv((await $.wv([$t5], "E", { get: async () => L0["e"], set: async (v) => { L0["e"] = v; }, local: true }, false)), "Message")))], C)));
      }
      else { throw $t6; }
    }
  }
  return L0.result;
}, {"params": ["PID", "BDate", "EDate"], "kind": "procedure", "ptypes": ["Integer", "TDateTime", "TDateTime"]});
  U.method("TfrmBCFilter", "InsertOneRow3", async function InsertOneRow3(Self, p0, p1, p2) {
  const C = $.chain(Self, U);
  const L0 = {"pid": $.copyArg(p0), "bdate": $.copyArg(p1), "edate": $.copyArg(p2), result: undefined};
  await $.fixArgs(L0, ["pid", "bdate", "edate"]);
  L0["rscreditnumber"] = "%d - № li kredit : ";
  {
    const $t7 = (await $.wobj(C, "CM_AK_REPORTS"));
    try {
      await $.stmt((await $.wcall([$t7], "CallProcedure", ["insinfof3", ["p_ID", (await $.wv([$t7], "pID", { get: async () => L0["pid"], set: async (v) => { L0["pid"] = v; }, local: true }, false)), "p_bDate", (await $.wv([$t7], "bDate", { get: async () => L0["bdate"], set: async (v) => { L0["bdate"] = v; }, local: true }, false)), "p_eDate", (await $.wv([$t7], "eDate", { get: async () => L0["edate"], set: async (v) => { L0["edate"] = v; }, local: true }, false))]], C)));
    } catch ($t8) {
      $.rethrowControl($t8);
      if ($.excIs($t8, "Exception")) {
        L0["e"] = $.exc($t8);
        await $.stmt((await $.wcall([$t7], "LogError", [$.add((await $.wcall([$t7], "Format", [(await $.wv([$t7], "rsCreditNumber", { get: async () => L0["rscreditnumber"], set: async (v) => { L0["rscreditnumber"] = v; }, local: true }, false)), [(await $.wv([$t7], "pid", { get: async () => L0["pid"], set: async (v) => { L0["pid"] = v; }, local: true }, false))]], C)), (await $.mv((await $.wv([$t7], "E", { get: async () => L0["e"], set: async (v) => { L0["e"] = v; }, local: true }, false)), "Message")))], C)));
      }
      else { throw $t8; }
    }
  }
  return L0.result;
}, {"params": ["PID", "BDate", "EDate"], "kind": "procedure", "ptypes": ["Integer", "TDateTime", "TDateTime"]});
  U.method("TfrmBCFilter", "InsertOneRow4", async function InsertOneRow4(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"pid": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["pid"]);
  L0["rscreditnumber"] = "%d - № li kredit : ";
  {
    const $t9 = (await $.wobj(C, "CM_AK_REPORTS"));
    try {
      await $.stmt((await $.wcall([$t9], "CallProcedure", ["insinfobp", ["p_ID", (await $.wv([$t9], "pID", { get: async () => L0["pid"], set: async (v) => { L0["pid"] = v; }, local: true }, false))]], C)));
    } catch ($t10) {
      $.rethrowControl($t10);
      if ($.excIs($t10, "Exception")) {
        L0["e"] = $.exc($t10);
        await $.stmt((await $.wcall([$t9], "LogError", [$.add((await $.wcall([$t9], "Format", [(await $.wv([$t9], "rsCreditNumber", { get: async () => L0["rscreditnumber"], set: async (v) => { L0["rscreditnumber"] = v; }, local: true }, false)), [(await $.wv([$t9], "pid", { get: async () => L0["pid"], set: async (v) => { L0["pid"] = v; }, local: true }, false))]], C)), (await $.mv((await $.wv([$t9], "E", { get: async () => L0["e"], set: async (v) => { L0["e"] = v; }, local: true }, false)), "Message")))], C)));
      }
      else { throw $t10; }
    }
  }
  return L0.result;
}, {"params": ["PID"], "kind": "procedure", "ptypes": ["Integer"]});
  U.method("TfrmBCFilter", "InsertOneRow5", async function InsertOneRow5(Self, p0, p1, p2) {
  const C = $.chain(Self, U);
  const L0 = {"pid": $.copyArg(p0), "bdate": $.copyArg(p1), "edate": $.copyArg(p2), result: undefined};
  await $.fixArgs(L0, ["pid", "bdate", "edate"]);
  L0["rscreditnumber"] = "%d - № li kredit : ";
  {
    const $t11 = (await $.wobj(C, "CM_AK_REPORTS"));
    try {
      await $.stmt((await $.wcall([$t11], "CallProcedure", ["insinfotrouble", ["p_ID", (await $.wv([$t11], "pID", { get: async () => L0["pid"], set: async (v) => { L0["pid"] = v; }, local: true }, false)), "p_bDate", (await $.wv([$t11], "bDate", { get: async () => L0["bdate"], set: async (v) => { L0["bdate"] = v; }, local: true }, false)), "p_eDate", (await $.wv([$t11], "eDate", { get: async () => L0["edate"], set: async (v) => { L0["edate"] = v; }, local: true }, false))]], C)));
    } catch ($t12) {
      $.rethrowControl($t12);
      if ($.excIs($t12, "Exception")) {
        L0["e"] = $.exc($t12);
        await $.stmt((await $.wcall([$t11], "LogError", [$.add((await $.wcall([$t11], "Format", [(await $.wv([$t11], "rsCreditNumber", { get: async () => L0["rscreditnumber"], set: async (v) => { L0["rscreditnumber"] = v; }, local: true }, false)), [(await $.wv([$t11], "pid", { get: async () => L0["pid"], set: async (v) => { L0["pid"] = v; }, local: true }, false))]], C)), (await $.mv((await $.wv([$t11], "E", { get: async () => L0["e"], set: async (v) => { L0["e"] = v; }, local: true }, false)), "Message")))], C)));
      }
      else { throw $t12; }
    }
  }
  return L0.result;
}, {"params": ["PID", "BDate", "EDate"], "kind": "procedure", "ptypes": ["Integer", "TDateTime", "TDateTime"]});
  U.method("TfrmBCFilter", "InsertOneRow6", async function InsertOneRow6(Self, p0, p1, p2) {
  const C = $.chain(Self, U);
  const L0 = {"pid": $.copyArg(p0), "bdate": $.copyArg(p1), "edate": $.copyArg(p2), result: undefined};
  await $.fixArgs(L0, ["pid", "bdate", "edate"]);
  L0["rscreditnumber"] = "%d - № li kredit : ";
  {
    const $t13 = (await $.wobj(C, "CM_AK_REPORTS"));
    try {
      await $.stmt((await $.wcall([$t13], "CallProcedure", ["insinfolastyeartranches", ["p_ID", (await $.wv([$t13], "pID", { get: async () => L0["pid"], set: async (v) => { L0["pid"] = v; }, local: true }, false)), "p_bDate", (await $.wv([$t13], "bDate", { get: async () => L0["bdate"], set: async (v) => { L0["bdate"] = v; }, local: true }, false)), "p_eDate", (await $.wv([$t13], "eDate", { get: async () => L0["edate"], set: async (v) => { L0["edate"] = v; }, local: true }, false))]], C)));
    } catch ($t14) {
      $.rethrowControl($t14);
      if ($.excIs($t14, "Exception")) {
        L0["e"] = $.exc($t14);
        await $.stmt((await $.wcall([$t13], "LogError", [$.add((await $.wcall([$t13], "Format", [(await $.wv([$t13], "rsCreditNumber", { get: async () => L0["rscreditnumber"], set: async (v) => { L0["rscreditnumber"] = v; }, local: true }, false)), [(await $.wv([$t13], "pid", { get: async () => L0["pid"], set: async (v) => { L0["pid"] = v; }, local: true }, false))]], C)), (await $.mv((await $.wv([$t13], "E", { get: async () => L0["e"], set: async (v) => { L0["e"] = v; }, local: true }, false)), "Message")))], C)));
      }
      else { throw $t14; }
    }
  }
  return L0.result;
}, {"params": ["PID", "BDate", "EDate"], "kind": "procedure", "ptypes": ["Integer", "TDateTime", "TDateTime"]});
  U.method("TfrmBCFilter", "InsertOneRow7", async function InsertOneRow7(Self, p0, p1, p2) {
  const C = $.chain(Self, U);
  const L0 = {"pid": $.copyArg(p0), "bdate": $.copyArg(p1), "edate": $.copyArg(p2), result: undefined};
  await $.fixArgs(L0, ["pid", "bdate", "edate"]);
  L0["rscreditnumber"] = "%d - № li kredit : ";
  {
    const $t15 = (await $.wobj(C, "CM_AK_REPORTS"));
    try {
      await $.stmt((await $.wcall([$t15], "CallProcedure", ["insinfolast5yearpayments", ["p_ID", (await $.wv([$t15], "pID", { get: async () => L0["pid"], set: async (v) => { L0["pid"] = v; }, local: true }, false)), "p_bDate", (await $.wv([$t15], "bDate", { get: async () => L0["bdate"], set: async (v) => { L0["bdate"] = v; }, local: true }, false)), "p_eDate", (await $.wv([$t15], "eDate", { get: async () => L0["edate"], set: async (v) => { L0["edate"] = v; }, local: true }, false))]], C)));
    } catch ($t16) {
      $.rethrowControl($t16);
      if ($.excIs($t16, "Exception")) {
        L0["e"] = $.exc($t16);
        await $.stmt((await $.wcall([$t15], "LogError", [$.add((await $.wcall([$t15], "Format", [(await $.wv([$t15], "rsCreditNumber", { get: async () => L0["rscreditnumber"], set: async (v) => { L0["rscreditnumber"] = v; }, local: true }, false)), [(await $.wv([$t15], "pid", { get: async () => L0["pid"], set: async (v) => { L0["pid"] = v; }, local: true }, false))]], C)), (await $.mv((await $.wv([$t15], "E", { get: async () => L0["e"], set: async (v) => { L0["e"] = v; }, local: true }, false)), "Message")))], C)));
      }
      else { throw $t16; }
    }
  }
  return L0.result;
}, {"params": ["PID", "BDate", "EDate"], "kind": "procedure", "ptypes": ["Integer", "TDateTime", "TDateTime"]});
  U.method("TfrmBCFilter", "InsertOneRow8", async function InsertOneRow8(Self, p0, p1, p2) {
  const C = $.chain(Self, U);
  const L0 = {"pid": $.copyArg(p0), "bdate": $.copyArg(p1), "edate": $.copyArg(p2), result: undefined};
  await $.fixArgs(L0, ["pid", "bdate", "edate"]);
  L0["rscreditnumber"] = "%d - № li kredit : ";
  {
    const $t17 = (await $.wobj(C, "CM_AK_REPORTS"));
    try {
      await $.stmt((await $.wcall([$t17], "CallProcedure", ["insinfolast5yeartranches", ["p_ID", (await $.wv([$t17], "pID", { get: async () => L0["pid"], set: async (v) => { L0["pid"] = v; }, local: true }, false)), "p_bDate", (await $.wv([$t17], "bDate", { get: async () => L0["bdate"], set: async (v) => { L0["bdate"] = v; }, local: true }, false)), "p_eDate", (await $.wv([$t17], "eDate", { get: async () => L0["edate"], set: async (v) => { L0["edate"] = v; }, local: true }, false))]], C)));
    } catch ($t18) {
      $.rethrowControl($t18);
      if ($.excIs($t18, "Exception")) {
        L0["e"] = $.exc($t18);
        await $.stmt((await $.wcall([$t17], "LogError", [$.add((await $.wcall([$t17], "Format", [(await $.wv([$t17], "rsCreditNumber", { get: async () => L0["rscreditnumber"], set: async (v) => { L0["rscreditnumber"] = v; }, local: true }, false)), [(await $.wv([$t17], "pid", { get: async () => L0["pid"], set: async (v) => { L0["pid"] = v; }, local: true }, false))]], C)), (await $.mv((await $.wv([$t17], "E", { get: async () => L0["e"], set: async (v) => { L0["e"] = v; }, local: true }, false)), "Message")))], C)));
      }
      else { throw $t18; }
    }
  }
  return L0.result;
}, {"params": ["PID", "BDate", "EDate"], "kind": "procedure", "ptypes": ["Integer", "TDateTime", "TDateTime"]});
  U.method("TfrmBCFilter", "InsertOneRow9", async function InsertOneRow9(Self, p0, p1, p2) {
  const C = $.chain(Self, U);
  const L0 = {"pid": $.copyArg(p0), "bdate": $.copyArg(p1), "edate": $.copyArg(p2), result: undefined};
  await $.fixArgs(L0, ["pid", "bdate", "edate"]);
  L0["rscreditnumber"] = "%d - № li kredit : ";
  {
    const $t19 = (await $.wobj(C, "CM_AK_REPORTS"));
    try {
      await $.stmt((await $.wcall([$t19], "CallProcedure", ["insinfolastyearmpays", ["p_ID", (await $.wv([$t19], "pID", { get: async () => L0["pid"], set: async (v) => { L0["pid"] = v; }, local: true }, false)), "p_bDate", (await $.wv([$t19], "bDate", { get: async () => L0["bdate"], set: async (v) => { L0["bdate"] = v; }, local: true }, false)), "p_eDate", (await $.wv([$t19], "eDate", { get: async () => L0["edate"], set: async (v) => { L0["edate"] = v; }, local: true }, false))]], C)));
    } catch ($t20) {
      $.rethrowControl($t20);
      if ($.excIs($t20, "Exception")) {
        L0["e"] = $.exc($t20);
        await $.stmt((await $.wcall([$t19], "LogError", [$.add((await $.wcall([$t19], "Format", [(await $.wv([$t19], "rsCreditNumber", { get: async () => L0["rscreditnumber"], set: async (v) => { L0["rscreditnumber"] = v; }, local: true }, false)), [(await $.wv([$t19], "pid", { get: async () => L0["pid"], set: async (v) => { L0["pid"] = v; }, local: true }, false))]], C)), (await $.mv((await $.wv([$t19], "E", { get: async () => L0["e"], set: async (v) => { L0["e"] = v; }, local: true }, false)), "Message")))], C)));
      }
      else { throw $t20; }
    }
  }
  return L0.result;
}, {"params": ["PID", "BDate", "EDate"], "kind": "procedure", "ptypes": ["Integer", "TDateTime", "TDateTime"]});
  U.method("TfrmBCFilter", "InsertOneRow10", async function InsertOneRow10(Self, p0, p1, p2) {
  const C = $.chain(Self, U);
  const L0 = {"pid": $.copyArg(p0), "bdate": $.copyArg(p1), "edate": $.copyArg(p2), result: undefined};
  await $.fixArgs(L0, ["pid", "bdate", "edate"]);
  L0["rscreditnumber"] = "%d - № li kredit : ";
  {
    const $t21 = (await $.wobj(C, "CM_AK_REPORTS"));
    try {
      await $.stmt((await $.wcall([$t21], "CallProcedure", ["insinfomong", ["p_ID", (await $.wv([$t21], "pID", { get: async () => L0["pid"], set: async (v) => { L0["pid"] = v; }, local: true }, false)), "p_bDate", (await $.wv([$t21], "bDate", { get: async () => L0["bdate"], set: async (v) => { L0["bdate"] = v; }, local: true }, false)), "p_eDate", (await $.wv([$t21], "eDate", { get: async () => L0["edate"], set: async (v) => { L0["edate"] = v; }, local: true }, false))]], C)));
    } catch ($t22) {
      $.rethrowControl($t22);
      if ($.excIs($t22, "Exception")) {
        L0["e"] = $.exc($t22);
        await $.stmt((await $.wcall([$t21], "LogError", [$.add((await $.wcall([$t21], "Format", [(await $.wv([$t21], "rsCreditNumber", { get: async () => L0["rscreditnumber"], set: async (v) => { L0["rscreditnumber"] = v; }, local: true }, false)), [(await $.wv([$t21], "pid", { get: async () => L0["pid"], set: async (v) => { L0["pid"] = v; }, local: true }, false))]], C)), (await $.mv((await $.wv([$t21], "E", { get: async () => L0["e"], set: async (v) => { L0["e"] = v; }, local: true }, false)), "Message")))], C)));
      }
      else { throw $t22; }
    }
  }
  return L0.result;
}, {"params": ["PID", "BDate", "EDate"], "kind": "procedure", "ptypes": ["Integer", "TDateTime", "TDateTime"]});
  U.method("TfrmBCFilter", "InsertOneRow11", async function InsertOneRow11(Self, p0, p1, p2) {
  const C = $.chain(Self, U);
  const L0 = {"pid": $.copyArg(p0), "bdate": $.copyArg(p1), "edate": $.copyArg(p2), result: undefined};
  await $.fixArgs(L0, ["pid", "bdate", "edate"]);
  L0["rscreditnumber"] = "%d - № li kredit : ";
  {
    const $t23 = (await $.wobj(C, "CM_AK_REPORTS"));
    try {
      await $.stmt((await $.wcall([$t23], "CallProcedure", ["insinfof2_full", ["p_ID", (await $.wv([$t23], "pID", { get: async () => L0["pid"], set: async (v) => { L0["pid"] = v; }, local: true }, false)), "p_bDate", (await $.wv([$t23], "bDate", { get: async () => L0["bdate"], set: async (v) => { L0["bdate"] = v; }, local: true }, false)), "p_eDate", (await $.wv([$t23], "eDate", { get: async () => L0["edate"], set: async (v) => { L0["edate"] = v; }, local: true }, false))]], C)));
    } catch ($t24) {
      $.rethrowControl($t24);
      if ($.excIs($t24, "Exception")) {
        L0["e"] = $.exc($t24);
        await $.stmt((await $.wcall([$t23], "LogError", [$.add((await $.wcall([$t23], "Format", [(await $.wv([$t23], "rsCreditNumber", { get: async () => L0["rscreditnumber"], set: async (v) => { L0["rscreditnumber"] = v; }, local: true }, false)), [(await $.wv([$t23], "pid", { get: async () => L0["pid"], set: async (v) => { L0["pid"] = v; }, local: true }, false))]], C)), (await $.mv((await $.wv([$t23], "E", { get: async () => L0["e"], set: async (v) => { L0["e"] = v; }, local: true }, false)), "Message")))], C)));
      }
      else { throw $t24; }
    }
  }
  return L0.result;
}, {"params": ["PID", "BDate", "EDate"], "kind": "procedure", "ptypes": ["Integer", "TDateTime", "TDateTime"]});
  U.method("TfrmBCFilter", "InsertOneRow12", async function InsertOneRow12(Self, p0, p1, p2) {
  const C = $.chain(Self, U);
  const L0 = {"pid": $.copyArg(p0), "bdate": $.copyArg(p1), "edate": $.copyArg(p2), result: undefined};
  await $.fixArgs(L0, ["pid", "bdate", "edate"]);
  L0["rscreditnumber"] = "%d - № li kredit : ";
  {
    const $t25 = (await $.wobj(C, "CM_AK_REPORTS"));
    try {
      await $.stmt((await $.wcall([$t25], "CallProcedure", ["insinfof2_full", ["p_ID", (await $.wv([$t25], "pID", { get: async () => L0["pid"], set: async (v) => { L0["pid"] = v; }, local: true }, false)), "p_bDate", (await $.wv([$t25], "bDate", { get: async () => L0["bdate"], set: async (v) => { L0["bdate"] = v; }, local: true }, false)), "p_eDate", (await $.wv([$t25], "eDate", { get: async () => L0["edate"], set: async (v) => { L0["edate"] = v; }, local: true }, false))]], C)));
    } catch ($t26) {
      $.rethrowControl($t26);
      if ($.excIs($t26, "Exception")) {
        L0["e"] = $.exc($t26);
        await $.stmt((await $.wcall([$t25], "LogError", [$.add((await $.wcall([$t25], "Format", [(await $.wv([$t25], "rsCreditNumber", { get: async () => L0["rscreditnumber"], set: async (v) => { L0["rscreditnumber"] = v; }, local: true }, false)), [(await $.wv([$t25], "pid", { get: async () => L0["pid"], set: async (v) => { L0["pid"] = v; }, local: true }, false))]], C)), (await $.mv((await $.wv([$t25], "E", { get: async () => L0["e"], set: async (v) => { L0["e"] = v; }, local: true }, false)), "Message")))], C)));
      }
      else { throw $t26; }
    }
  }
  return L0.result;
}, {"params": ["PID", "BDate", "EDate"], "kind": "procedure", "ptypes": ["Integer", "TDateTime", "TDateTime"]});
  U.method("TfrmBCFilter", "InsertOneRow13", async function InsertOneRow13(Self, p0, p1, p2) {
  const C = $.chain(Self, U);
  const L0 = {"pid": $.copyArg(p0), "bdate": $.copyArg(p1), "edate": $.copyArg(p2), result: undefined};
  await $.fixArgs(L0, ["pid", "bdate", "edate"]);
  L0["rscreditnumber"] = "%d - № li kredit : ";
  {
    const $t27 = (await $.wobj(C, "CM_AK_REPORTS"));
    try {
      await $.stmt((await $.wcall([$t27], "CallProcedure", ["insinfomong", ["p_ID", (await $.wv([$t27], "pID", { get: async () => L0["pid"], set: async (v) => { L0["pid"] = v; }, local: true }, false)), "p_bDate", (await $.wv([$t27], "bDate", { get: async () => L0["bdate"], set: async (v) => { L0["bdate"] = v; }, local: true }, false)), "p_eDate", (await $.wv([$t27], "eDate", { get: async () => L0["edate"], set: async (v) => { L0["edate"] = v; }, local: true }, false))]], C)));
    } catch ($t28) {
      $.rethrowControl($t28);
      if ($.excIs($t28, "Exception")) {
        L0["e"] = $.exc($t28);
        await $.stmt((await $.wcall([$t27], "LogError", [$.add((await $.wcall([$t27], "Format", [(await $.wv([$t27], "rsCreditNumber", { get: async () => L0["rscreditnumber"], set: async (v) => { L0["rscreditnumber"] = v; }, local: true }, false)), [(await $.wv([$t27], "pid", { get: async () => L0["pid"], set: async (v) => { L0["pid"] = v; }, local: true }, false))]], C)), (await $.mv((await $.wv([$t27], "E", { get: async () => L0["e"], set: async (v) => { L0["e"] = v; }, local: true }, false)), "Message")))], C)));
      }
      else { throw $t28; }
    }
  }
  return L0.result;
}, {"params": ["PID", "BDate", "EDate"], "kind": "procedure", "ptypes": ["Integer", "TDateTime", "TDateTime"]});
  U.method("TfrmBCFilter", "InsertOneRow14", async function InsertOneRow14(Self, p0, p1, p2) {
  const C = $.chain(Self, U);
  const L0 = {"pid": $.copyArg(p0), "bdate": $.copyArg(p1), "edate": $.copyArg(p2), result: undefined};
  await $.fixArgs(L0, ["pid", "bdate", "edate"]);
  L0["rscreditnumber"] = "%d - № li kredit : ";
  {
    const $t29 = (await $.wobj(C, "CM_AK_REPORTS"));
    try {
      await $.stmt((await $.wcall([$t29], "CallProcedure", ["insinfoabouttrouble", ["p_ID", (await $.wv([$t29], "pID", { get: async () => L0["pid"], set: async (v) => { L0["pid"] = v; }, local: true }, false)), "p_bDate", (await $.wv([$t29], "bDate", { get: async () => L0["bdate"], set: async (v) => { L0["bdate"] = v; }, local: true }, false)), "p_eDate", (await $.wv([$t29], "eDate", { get: async () => L0["edate"], set: async (v) => { L0["edate"] = v; }, local: true }, false))]], C)));
    } catch ($t30) {
      $.rethrowControl($t30);
      if ($.excIs($t30, "Exception")) {
        L0["e"] = $.exc($t30);
        await $.stmt((await $.wcall([$t29], "LogError", [$.add((await $.wcall([$t29], "Format", [(await $.wv([$t29], "rsCreditNumber", { get: async () => L0["rscreditnumber"], set: async (v) => { L0["rscreditnumber"] = v; }, local: true }, false)), [(await $.wv([$t29], "pid", { get: async () => L0["pid"], set: async (v) => { L0["pid"] = v; }, local: true }, false))]], C)), (await $.mv((await $.wv([$t29], "E", { get: async () => L0["e"], set: async (v) => { L0["e"] = v; }, local: true }, false)), "Message")))], C)));
      }
      else { throw $t30; }
    }
  }
  return L0.result;
}, {"params": ["PID", "BDate", "EDate"], "kind": "procedure", "ptypes": ["Integer", "TDateTime", "TDateTime"]});
  U.method("TfrmBCFilter", "InsertOneRow15", async function InsertOneRow15(Self, p0, p1, p2) {
  const C = $.chain(Self, U);
  const L0 = {"pid": $.copyArg(p0), "bdate": $.copyArg(p1), "edate": $.copyArg(p2), result: undefined};
  await $.fixArgs(L0, ["pid", "bdate", "edate"]);
  L0["rscreditnumber"] = "%d - № li kredit : ";
  {
    const $t31 = (await $.wobj(C, "CM_AK_REPORTS"));
    try {
      await $.stmt((await $.wcall([$t31], "CallProcedure", ["insinfomeasures", ["p_ID", (await $.wv([$t31], "pID", { get: async () => L0["pid"], set: async (v) => { L0["pid"] = v; }, local: true }, false)), "p_bDate", (await $.wv([$t31], "bDate", { get: async () => L0["bdate"], set: async (v) => { L0["bdate"] = v; }, local: true }, false)), "p_eDate", (await $.wv([$t31], "eDate", { get: async () => L0["edate"], set: async (v) => { L0["edate"] = v; }, local: true }, false))]], C)));
    } catch ($t32) {
      $.rethrowControl($t32);
      if ($.excIs($t32, "Exception")) {
        L0["e"] = $.exc($t32);
        await $.stmt((await $.wcall([$t31], "LogError", [$.add((await $.wcall([$t31], "Format", [(await $.wv([$t31], "rsCreditNumber", { get: async () => L0["rscreditnumber"], set: async (v) => { L0["rscreditnumber"] = v; }, local: true }, false)), [(await $.wv([$t31], "pid", { get: async () => L0["pid"], set: async (v) => { L0["pid"] = v; }, local: true }, false))]], C)), (await $.mv((await $.wv([$t31], "E", { get: async () => L0["e"], set: async (v) => { L0["e"] = v; }, local: true }, false)), "Message")))], C)));
      }
      else { throw $t32; }
    }
  }
  return L0.result;
}, {"params": ["PID", "BDate", "EDate"], "kind": "procedure", "ptypes": ["Integer", "TDateTime", "TDateTime"]});
  U.method("TfrmBCFilter", "InsertOneRow16", async function InsertOneRow16(Self, p0, p1, p2) {
  const C = $.chain(Self, U);
  const L0 = {"pid": $.copyArg(p0), "bdate": $.copyArg(p1), "edate": $.copyArg(p2), result: undefined};
  await $.fixArgs(L0, ["pid", "bdate", "edate"]);
  L0["rscreditnumber"] = "%d - № li kredit : ";
  {
    const $t33 = (await $.wobj(C, "CM_AK_REPORTS"));
    try {
      await $.stmt((await $.wcall([$t33], "CallProcedure", ["insinfoprolong", ["p_ID", (await $.wv([$t33], "pID", { get: async () => L0["pid"], set: async (v) => { L0["pid"] = v; }, local: true }, false)), "p_bDate", (await $.wv([$t33], "bDate", { get: async () => L0["bdate"], set: async (v) => { L0["bdate"] = v; }, local: true }, false)), "p_eDate", (await $.wv([$t33], "eDate", { get: async () => L0["edate"], set: async (v) => { L0["edate"] = v; }, local: true }, false))]], C)));
    } catch ($t34) {
      $.rethrowControl($t34);
      if ($.excIs($t34, "Exception")) {
        L0["e"] = $.exc($t34);
        await $.stmt((await $.wcall([$t33], "LogError", [$.add((await $.wcall([$t33], "Format", [(await $.wv([$t33], "rsCreditNumber", { get: async () => L0["rscreditnumber"], set: async (v) => { L0["rscreditnumber"] = v; }, local: true }, false)), [(await $.wv([$t33], "pid", { get: async () => L0["pid"], set: async (v) => { L0["pid"] = v; }, local: true }, false))]], C)), (await $.mv((await $.wv([$t33], "E", { get: async () => L0["e"], set: async (v) => { L0["e"] = v; }, local: true }, false)), "Message")))], C)));
      }
      else { throw $t34; }
    }
  }
  return L0.result;
}, {"params": ["PID", "BDate", "EDate"], "kind": "procedure", "ptypes": ["Integer", "TDateTime", "TDateTime"]});
  U.method("TfrmBCFilter", "InsertOneRow17", async function InsertOneRow17(Self, p0, p1, p2) {
  const C = $.chain(Self, U);
  const L0 = {"pid": $.copyArg(p0), "bdate": $.copyArg(p1), "edate": $.copyArg(p2), result: undefined};
  await $.fixArgs(L0, ["pid", "bdate", "edate"]);
  L0["rscreditnumber"] = "%d - № li kredit : ";
  {
    const $t35 = (await $.wobj(C, "CM_AK_REPORTS"));
    try {
      await $.stmt((await $.wcall([$t35], "CallProcedure", ["insinfolastyearpayments", ["p_ID", (await $.wv([$t35], "pID", { get: async () => L0["pid"], set: async (v) => { L0["pid"] = v; }, local: true }, false)), "p_bDate", (await $.wv([$t35], "bDate", { get: async () => L0["bdate"], set: async (v) => { L0["bdate"] = v; }, local: true }, false)), "p_eDate", (await $.wv([$t35], "eDate", { get: async () => L0["edate"], set: async (v) => { L0["edate"] = v; }, local: true }, false))]], C)));
    } catch ($t36) {
      $.rethrowControl($t36);
      if ($.excIs($t36, "Exception")) {
        L0["e"] = $.exc($t36);
        await $.stmt((await $.wcall([$t35], "LogError", [$.add((await $.wcall([$t35], "Format", [(await $.wv([$t35], "rsCreditNumber", { get: async () => L0["rscreditnumber"], set: async (v) => { L0["rscreditnumber"] = v; }, local: true }, false)), [(await $.wv([$t35], "pid", { get: async () => L0["pid"], set: async (v) => { L0["pid"] = v; }, local: true }, false))]], C)), (await $.mv((await $.wv([$t35], "E", { get: async () => L0["e"], set: async (v) => { L0["e"] = v; }, local: true }, false)), "Message")))], C)));
      }
      else { throw $t36; }
    }
  }
  return L0.result;
}, {"params": ["PID", "BDate", "EDate"], "kind": "procedure", "ptypes": ["Integer", "TDateTime", "TDateTime"]});
  U.method("TfrmBCFilter", "InsertOneRow18", async function InsertOneRow18(Self, p0, p1, p2) {
  const C = $.chain(Self, U);
  const L0 = {"pid": $.copyArg(p0), "bdate": $.copyArg(p1), "edate": $.copyArg(p2), result: undefined};
  await $.fixArgs(L0, ["pid", "bdate", "edate"]);
  L0["rscreditnumber"] = "%d - № li kredit: ";
  {
    const $t37 = (await $.wobj(C, "CM_AK_REPORTS"));
    try {
      await $.stmt((await $.wcall([$t37], "CallProcedure", ["insinfoaboutcrediting", ["p_ID", (await $.wv([$t37], "pID", { get: async () => L0["pid"], set: async (v) => { L0["pid"] = v; }, local: true }, false)), "p_bDate", (await $.wv([$t37], "bDate", { get: async () => L0["bdate"], set: async (v) => { L0["bdate"] = v; }, local: true }, false)), "p_eDate", (await $.wv([$t37], "eDate", { get: async () => L0["edate"], set: async (v) => { L0["edate"] = v; }, local: true }, false))]], C)));
    } catch ($t38) {
      $.rethrowControl($t38);
      if ($.excIs($t38, "Exception")) {
        L0["e"] = $.exc($t38);
        await $.stmt((await $.wcall([$t37], "LogError", [$.add((await $.wcall([$t37], "Format", [(await $.wv([$t37], "rsCreditNumber", { get: async () => L0["rscreditnumber"], set: async (v) => { L0["rscreditnumber"] = v; }, local: true }, false)), [(await $.wv([$t37], "pid", { get: async () => L0["pid"], set: async (v) => { L0["pid"] = v; }, local: true }, false))]], C)), (await $.mv((await $.wv([$t37], "E", { get: async () => L0["e"], set: async (v) => { L0["e"] = v; }, local: true }, false)), "Message")))], C)));
      }
      else { throw $t38; }
    }
  }
  return L0.result;
}, {"params": ["PID", "BDate", "EDate"], "kind": "procedure", "ptypes": ["Integer", "TDateTime", "TDateTime"]});
  U.method("TfrmBCFilter", "InsertOneRow19", async function InsertOneRow19(Self, p0, p1, p2) {
  const C = $.chain(Self, U);
  const L0 = {"pid": $.copyArg(p0), "bdate": $.copyArg(p1), "edate": $.copyArg(p2), result: undefined};
  await $.fixArgs(L0, ["pid", "bdate", "edate"]);
  L0["rscreditnumber"] = "%d - № li kredit : ";
  {
    const $t39 = (await $.wobj(C, "CM_AK_REPORTS"));
    try {
      await $.stmt((await $.wcall([$t39], "CallProcedure", ["insinfocreditpaying", ["p_ID", (await $.wv([$t39], "pID", { get: async () => L0["pid"], set: async (v) => { L0["pid"] = v; }, local: true }, false)), "p_bDate", (await $.wv([$t39], "bDate", { get: async () => L0["bdate"], set: async (v) => { L0["bdate"] = v; }, local: true }, false)), "p_eDate", (await $.wv([$t39], "eDate", { get: async () => L0["edate"], set: async (v) => { L0["edate"] = v; }, local: true }, false))]], C)));
    } catch ($t40) {
      $.rethrowControl($t40);
      if ($.excIs($t40, "Exception")) {
        L0["e"] = $.exc($t40);
        await $.stmt((await $.wcall([$t39], "LogError", [$.add((await $.wcall([$t39], "Format", [(await $.wv([$t39], "rsCreditNumber", { get: async () => L0["rscreditnumber"], set: async (v) => { L0["rscreditnumber"] = v; }, local: true }, false)), [(await $.wv([$t39], "pid", { get: async () => L0["pid"], set: async (v) => { L0["pid"] = v; }, local: true }, false))]], C)), (await $.mv((await $.wv([$t39], "E", { get: async () => L0["e"], set: async (v) => { L0["e"] = v; }, local: true }, false)), "Message")))], C)));
      }
      else { throw $t40; }
    }
  }
  return L0.result;
}, {"params": ["PID", "BDate", "EDate"], "kind": "procedure", "ptypes": ["Integer", "TDateTime", "TDateTime"]});
  U.method("TfrmBCFilter", "InsertOneRow20", async function InsertOneRow20(Self, p0, p1, p2) {
  const C = $.chain(Self, U);
  const L0 = {"pid": $.copyArg(p0), "bdate": $.copyArg(p1), "edate": $.copyArg(p2), result: undefined};
  await $.fixArgs(L0, ["pid", "bdate", "edate"]);
  L0["rscreditnumber"] = "%d - № li kredit : ";
  {
    const $t41 = (await $.wobj(C, "CM_AK_REPORTS"));
    try {
      await $.stmt((await $.wcall([$t41], "CallProcedure", ["insinfoworldbankmain", ["p_ID", (await $.wv([$t41], "pID", { get: async () => L0["pid"], set: async (v) => { L0["pid"] = v; }, local: true }, false)), "p_bDate", (await $.wv([$t41], "bDate", { get: async () => L0["bdate"], set: async (v) => { L0["bdate"] = v; }, local: true }, false)), "p_eDate", (await $.wv([$t41], "eDate", { get: async () => L0["edate"], set: async (v) => { L0["edate"] = v; }, local: true }, false))]], C)));
    } catch ($t42) {
      $.rethrowControl($t42);
      if ($.excIs($t42, "Exception")) {
        L0["e"] = $.exc($t42);
        await $.stmt((await $.wcall([$t41], "LogError", [$.add((await $.wcall([$t41], "Format", [(await $.wv([$t41], "rsCreditNumber", { get: async () => L0["rscreditnumber"], set: async (v) => { L0["rscreditnumber"] = v; }, local: true }, false)), [(await $.wv([$t41], "pid", { get: async () => L0["pid"], set: async (v) => { L0["pid"] = v; }, local: true }, false))]], C)), (await $.mv((await $.wv([$t41], "E", { get: async () => L0["e"], set: async (v) => { L0["e"] = v; }, local: true }, false)), "Message")))], C)));
      }
      else { throw $t42; }
    }
  }
  return L0.result;
}, {"params": ["PID", "BDate", "EDate"], "kind": "procedure", "ptypes": ["Integer", "TDateTime", "TDateTime"]});
  U.method("TfrmBCFilter", "InsertOneRow21", async function InsertOneRow21(Self, p0, p1, p2) {
  const C = $.chain(Self, U);
  const L0 = {"pid": $.copyArg(p0), "bdate": $.copyArg(p1), "edate": $.copyArg(p2), result: undefined};
  await $.fixArgs(L0, ["pid", "bdate", "edate"]);
  L0["rscreditnumber"] = "%d - № li kredit : ";
  {
    const $t43 = (await $.wobj(C, "CM_AK_REPORTS"));
    try {
      await $.stmt((await $.wcall([$t43], "CallProcedure", ["insinfoworldbankactive", ["p_ID", (await $.wv([$t43], "pID", { get: async () => L0["pid"], set: async (v) => { L0["pid"] = v; }, local: true }, false)), "p_bDate", (await $.wv([$t43], "bDate", { get: async () => L0["bdate"], set: async (v) => { L0["bdate"] = v; }, local: true }, false)), "p_eDate", (await $.wv([$t43], "eDate", { get: async () => L0["edate"], set: async (v) => { L0["edate"] = v; }, local: true }, false))]], C)));
    } catch ($t44) {
      $.rethrowControl($t44);
      if ($.excIs($t44, "Exception")) {
        L0["e"] = $.exc($t44);
        await $.stmt((await $.wcall([$t43], "LogError", [$.add((await $.wcall([$t43], "Format", [(await $.wv([$t43], "rsCreditNumber", { get: async () => L0["rscreditnumber"], set: async (v) => { L0["rscreditnumber"] = v; }, local: true }, false)), [(await $.wv([$t43], "pid", { get: async () => L0["pid"], set: async (v) => { L0["pid"] = v; }, local: true }, false))]], C)), (await $.mv((await $.wv([$t43], "E", { get: async () => L0["e"], set: async (v) => { L0["e"] = v; }, local: true }, false)), "Message")))], C)));
      }
      else { throw $t44; }
    }
  }
  return L0.result;
}, {"params": ["PID", "BDate", "EDate"], "kind": "procedure", "ptypes": ["Integer", "TDateTime", "TDateTime"]});
  U.method("TfrmBCFilter", "InsertOneRow22", async function InsertOneRow22(Self, p0, p1, p2) {
  const C = $.chain(Self, U);
  const L0 = {"pid": $.copyArg(p0), "bdate": $.copyArg(p1), "edate": $.copyArg(p2), result: undefined};
  await $.fixArgs(L0, ["pid", "bdate", "edate"]);
  L0["rscreditnumber"] = "%d - № li kredit : ";
  {
    const $t45 = (await $.wobj(C, "CM_AK_REPORTS"));
    try {
      await $.stmt((await $.wcall([$t45], "CallProcedure", ["insinfomusttr", ["p_ID", (await $.wv([$t45], "pID", { get: async () => L0["pid"], set: async (v) => { L0["pid"] = v; }, local: true }, false)), "p_bDate", (await $.wv([$t45], "bDate", { get: async () => L0["bdate"], set: async (v) => { L0["bdate"] = v; }, local: true }, false)), "p_eDate", (await $.wv([$t45], "eDate", { get: async () => L0["edate"], set: async (v) => { L0["edate"] = v; }, local: true }, false))]], C)));
    } catch ($t46) {
      $.rethrowControl($t46);
      if ($.excIs($t46, "Exception")) {
        L0["e"] = $.exc($t46);
        await $.stmt((await $.wcall([$t45], "LogError", [$.add((await $.wcall([$t45], "Format", [(await $.wv([$t45], "rsCreditNumber", { get: async () => L0["rscreditnumber"], set: async (v) => { L0["rscreditnumber"] = v; }, local: true }, false)), [(await $.wv([$t45], "pid", { get: async () => L0["pid"], set: async (v) => { L0["pid"] = v; }, local: true }, false))]], C)), (await $.mv((await $.wv([$t45], "E", { get: async () => L0["e"], set: async (v) => { L0["e"] = v; }, local: true }, false)), "Message")))], C)));
      }
      else { throw $t46; }
    }
  }
  return L0.result;
}, {"params": ["PID", "BDate", "EDate"], "kind": "procedure", "ptypes": ["Integer", "TDateTime", "TDateTime"]});
  U.method("TfrmBCFilter", "InsertOneRow23", async function InsertOneRow23(Self, p0, p1, p2) {
  const C = $.chain(Self, U);
  const L0 = {"pid": $.copyArg(p0), "bdate": $.copyArg(p1), "edate": $.copyArg(p2), result: undefined};
  await $.fixArgs(L0, ["pid", "bdate", "edate"]);
  L0["rscreditnumber"] = "%d - № li kredit : ";
  {
    const $t47 = (await $.wobj(C, "CM_AK_REPORTS"));
    try {
      await $.stmt((await $.wcall([$t47], "CallProcedure", ["insinfof2_full", ["p_ID", (await $.wv([$t47], "pID", { get: async () => L0["pid"], set: async (v) => { L0["pid"] = v; }, local: true }, false)), "p_bDate", (await $.wv([$t47], "bDate", { get: async () => L0["bdate"], set: async (v) => { L0["bdate"] = v; }, local: true }, false)), "p_eDate", (await $.wv([$t47], "eDate", { get: async () => L0["edate"], set: async (v) => { L0["edate"] = v; }, local: true }, false))]], C)));
    } catch ($t48) {
      $.rethrowControl($t48);
      if ($.excIs($t48, "Exception")) {
        L0["e"] = $.exc($t48);
        await $.stmt((await $.wcall([$t47], "LogError", [$.add((await $.wcall([$t47], "Format", [(await $.wv([$t47], "rsCreditNumber", { get: async () => L0["rscreditnumber"], set: async (v) => { L0["rscreditnumber"] = v; }, local: true }, false)), [(await $.wv([$t47], "pid", { get: async () => L0["pid"], set: async (v) => { L0["pid"] = v; }, local: true }, false))]], C)), (await $.mv((await $.wv([$t47], "E", { get: async () => L0["e"], set: async (v) => { L0["e"] = v; }, local: true }, false)), "Message")))], C)));
      }
      else { throw $t48; }
    }
  }
  return L0.result;
}, {"params": ["PID", "BDate", "EDate"], "kind": "procedure", "ptypes": ["Integer", "TDateTime", "TDateTime"]});
  U.method("TfrmBCFilter", "InsertOneRow24", async function InsertOneRow24(Self, p0, p1, p2) {
  const C = $.chain(Self, U);
  const L0 = {"pid": $.copyArg(p0), "bdate": $.copyArg(p1), "edate": $.copyArg(p2), result: undefined};
  await $.fixArgs(L0, ["pid", "bdate", "edate"]);
  L0["rscreditnumber"] = "%d - № li kredit : ";
  {
    const $t49 = (await $.wobj(C, "CM_AK_REPORTS"));
    try {
      await $.stmt((await $.wcall([$t49], "CallProcedure", ["insinfof3_full", ["p_ID", (await $.wv([$t49], "pID", { get: async () => L0["pid"], set: async (v) => { L0["pid"] = v; }, local: true }, false)), "p_bDate", (await $.wv([$t49], "bDate", { get: async () => L0["bdate"], set: async (v) => { L0["bdate"] = v; }, local: true }, false)), "p_eDate", (await $.wv([$t49], "eDate", { get: async () => L0["edate"], set: async (v) => { L0["edate"] = v; }, local: true }, false))]], C)));
    } catch ($t50) {
      $.rethrowControl($t50);
      if ($.excIs($t50, "Exception")) {
        L0["e"] = $.exc($t50);
        await $.stmt((await $.wcall([$t49], "LogError", [$.add((await $.wcall([$t49], "Format", [(await $.wv([$t49], "rsCreditNumber", { get: async () => L0["rscreditnumber"], set: async (v) => { L0["rscreditnumber"] = v; }, local: true }, false)), [(await $.wv([$t49], "pid", { get: async () => L0["pid"], set: async (v) => { L0["pid"] = v; }, local: true }, false))]], C)), (await $.mv((await $.wv([$t49], "E", { get: async () => L0["e"], set: async (v) => { L0["e"] = v; }, local: true }, false)), "Message")))], C)));
      }
      else { throw $t50; }
    }
  }
  return L0.result;
}, {"params": ["PID", "BDate", "EDate"], "kind": "procedure", "ptypes": ["Integer", "TDateTime", "TDateTime"]});
  U.method("TfrmBCFilter", "InsertOneRow25", async function InsertOneRow25(Self, p0, p1, p2) {
  const C = $.chain(Self, U);
  const L0 = {"pid": $.copyArg(p0), "bdate": $.copyArg(p1), "edate": $.copyArg(p2), result: undefined};
  await $.fixArgs(L0, ["pid", "bdate", "edate"]);
  L0["rscreditnumber"] = "%d - № li kredit : ";
  {
    const $t51 = (await $.wobj(C, "CM_AK_REPORTS"));
    try {
      await $.stmt((await $.wcall([$t51], "CallProcedure", ["insinfof3_filial", ["p_ID", (await $.wv([$t51], "pID", { get: async () => L0["pid"], set: async (v) => { L0["pid"] = v; }, local: true }, false)), "p_bDate", (await $.wv([$t51], "bDate", { get: async () => L0["bdate"], set: async (v) => { L0["bdate"] = v; }, local: true }, false)), "p_eDate", (await $.wv([$t51], "eDate", { get: async () => L0["edate"], set: async (v) => { L0["edate"] = v; }, local: true }, false))]], C)));
    } catch ($t52) {
      $.rethrowControl($t52);
      if ($.excIs($t52, "Exception")) {
        L0["e"] = $.exc($t52);
        await $.stmt((await $.wcall([$t51], "LogError", [$.add((await $.wcall([$t51], "Format", [(await $.wv([$t51], "rsCreditNumber", { get: async () => L0["rscreditnumber"], set: async (v) => { L0["rscreditnumber"] = v; }, local: true }, false)), [(await $.wv([$t51], "pid", { get: async () => L0["pid"], set: async (v) => { L0["pid"] = v; }, local: true }, false))]], C)), (await $.mv((await $.wv([$t51], "E", { get: async () => L0["e"], set: async (v) => { L0["e"] = v; }, local: true }, false)), "Message")))], C)));
      }
      else { throw $t52; }
    }
  }
  return L0.result;
}, {"params": ["PID", "BDate", "EDate"], "kind": "procedure", "ptypes": ["Integer", "TDateTime", "TDateTime"]});
  U.method("TfrmBCFilter", "InsertOneRow26", async function InsertOneRow26(Self, p0, p1, p2) {
  const C = $.chain(Self, U);
  const L0 = {"pid": $.copyArg(p0), "bdate": $.copyArg(p1), "edate": $.copyArg(p2), result: undefined};
  await $.fixArgs(L0, ["pid", "bdate", "edate"]);
  L0["rscreditnumber"] = "%d - №  li kredit : ";
  {
    const $t53 = (await $.wobj(C, "CM_AK_REPORTS"));
    try {
      await $.stmt((await $.wcall([$t53], "CallProcedure", ["insinfof3_proj", ["p_ID", (await $.wv([$t53], "pID", { get: async () => L0["pid"], set: async (v) => { L0["pid"] = v; }, local: true }, false)), "p_bDate", (await $.wv([$t53], "bDate", { get: async () => L0["bdate"], set: async (v) => { L0["bdate"] = v; }, local: true }, false)), "p_eDate", (await $.wv([$t53], "eDate", { get: async () => L0["edate"], set: async (v) => { L0["edate"] = v; }, local: true }, false))]], C)));
    } catch ($t54) {
      $.rethrowControl($t54);
      if ($.excIs($t54, "Exception")) {
        L0["e"] = $.exc($t54);
        await $.stmt((await $.wcall([$t53], "LogError", [$.add((await $.wcall([$t53], "Format", [(await $.wv([$t53], "rsCreditNumber", { get: async () => L0["rscreditnumber"], set: async (v) => { L0["rscreditnumber"] = v; }, local: true }, false)), [(await $.wv([$t53], "pid", { get: async () => L0["pid"], set: async (v) => { L0["pid"] = v; }, local: true }, false))]], C)), (await $.mv((await $.wv([$t53], "E", { get: async () => L0["e"], set: async (v) => { L0["e"] = v; }, local: true }, false)), "Message")))], C)));
      }
      else { throw $t54; }
    }
  }
  return L0.result;
}, {"params": ["PID", "BDate", "EDate"], "kind": "procedure", "ptypes": ["Integer", "TDateTime", "TDateTime"]});
  U.method("TfrmBCFilter", "InsertOneRow27", async function InsertOneRow27(Self, p0, p1, p2) {
  const C = $.chain(Self, U);
  const L0 = {"pid": $.copyArg(p0), "bdate": $.copyArg(p1), "edate": $.copyArg(p2), result: undefined};
  await $.fixArgs(L0, ["pid", "bdate", "edate"]);
  L0["rscreditnumber"] = "%d - № li kredit : ";
  {
    const $t55 = (await $.wobj(C, "CM_AK_REPORTS"));
    try {
      await $.stmt((await $.wcall([$t55], "CallProcedure", ["insinfoablegm", ["p_ID", (await $.wv([$t55], "pID", { get: async () => L0["pid"], set: async (v) => { L0["pid"] = v; }, local: true }, false)), "p_bDate", (await $.wv([$t55], "bDate", { get: async () => L0["bdate"], set: async (v) => { L0["bdate"] = v; }, local: true }, false)), "p_eDate", (await $.wv([$t55], "eDate", { get: async () => L0["edate"], set: async (v) => { L0["edate"] = v; }, local: true }, false))]], C)));
    } catch ($t56) {
      $.rethrowControl($t56);
      if ($.excIs($t56, "Exception")) {
        L0["e"] = $.exc($t56);
        await $.stmt((await $.wcall([$t55], "LogError", [$.add((await $.wcall([$t55], "Format", [(await $.wv([$t55], "rsCreditNumber", { get: async () => L0["rscreditnumber"], set: async (v) => { L0["rscreditnumber"] = v; }, local: true }, false)), [(await $.wv([$t55], "pid", { get: async () => L0["pid"], set: async (v) => { L0["pid"] = v; }, local: true }, false))]], C)), (await $.mv((await $.wv([$t55], "E", { get: async () => L0["e"], set: async (v) => { L0["e"] = v; }, local: true }, false)), "Message")))], C)));
      }
      else { throw $t56; }
    }
  }
  return L0.result;
}, {"params": ["PID", "BDate", "EDate"], "kind": "procedure", "ptypes": ["Integer", "TDateTime", "TDateTime"]});
  U.method("TfrmBCFilter", "InsertOneRow28", async function InsertOneRow28(Self, p0, p1, p2) {
  const C = $.chain(Self, U);
  const L0 = {"pid": $.copyArg(p0), "bdate": $.copyArg(p1), "edate": $.copyArg(p2), result: undefined};
  await $.fixArgs(L0, ["pid", "bdate", "edate"]);
  L0["rscreditnumber"] = "%d - № li kredit : ";
  {
    const $t57 = (await $.wobj(C, "CM_AK_REPORTS"));
    try {
      await $.stmt((await $.wcall([$t57], "CallProcedure", ["insinfoproviz", ["p_ID", (await $.wv([$t57], "pID", { get: async () => L0["pid"], set: async (v) => { L0["pid"] = v; }, local: true }, false)), "p_bDate", (await $.wv([$t57], "bDate", { get: async () => L0["bdate"], set: async (v) => { L0["bdate"] = v; }, local: true }, false)), "p_eDate", (await $.wv([$t57], "eDate", { get: async () => L0["edate"], set: async (v) => { L0["edate"] = v; }, local: true }, false))]], C)));
    } catch ($t58) {
      $.rethrowControl($t58);
      if ($.excIs($t58, "Exception")) {
        L0["e"] = $.exc($t58);
        await $.stmt((await $.wcall([$t57], "LogError", [$.add((await $.wcall([$t57], "Format", [(await $.wv([$t57], "rsCreditNumber", { get: async () => L0["rscreditnumber"], set: async (v) => { L0["rscreditnumber"] = v; }, local: true }, false)), [(await $.wv([$t57], "pid", { get: async () => L0["pid"], set: async (v) => { L0["pid"] = v; }, local: true }, false))]], C)), (await $.mv((await $.wv([$t57], "E", { get: async () => L0["e"], set: async (v) => { L0["e"] = v; }, local: true }, false)), "Message")))], C)));
      }
      else { throw $t58; }
    }
  }
  return L0.result;
}, {"params": ["PID", "BDate", "EDate"], "kind": "procedure", "ptypes": ["Integer", "TDateTime", "TDateTime"]});
  U.method("TfrmBCFilter", "InsertOneRow29", async function InsertOneRow29(Self, p0, p1, p2) {
  const C = $.chain(Self, U);
  const L0 = {"pid": $.copyArg(p0), "bdate": $.copyArg(p1), "edate": $.copyArg(p2), result: undefined};
  await $.fixArgs(L0, ["pid", "bdate", "edate"]);
  L0["rscreditnumber"] = "%d - № li kredit : ";
  {
    const $t59 = (await $.wobj(C, "CM_AK_REPORTS"));
    try {
      await $.stmt((await $.wcall([$t59], "CallProcedure", ["insinfograntyear", ["p_ID", (await $.wv([$t59], "pID", { get: async () => L0["pid"], set: async (v) => { L0["pid"] = v; }, local: true }, false)), "p_bDate", (await $.wv([$t59], "bDate", { get: async () => L0["bdate"], set: async (v) => { L0["bdate"] = v; }, local: true }, false)), "p_eDate", (await $.wv([$t59], "eDate", { get: async () => L0["edate"], set: async (v) => { L0["edate"] = v; }, local: true }, false))]], C)));
    } catch ($t60) {
      $.rethrowControl($t60);
      if ($.excIs($t60, "Exception")) {
        L0["e"] = $.exc($t60);
        await $.stmt((await $.wcall([$t59], "LogError", [$.add((await $.wcall([$t59], "Format", [(await $.wv([$t59], "rsCreditNumber", { get: async () => L0["rscreditnumber"], set: async (v) => { L0["rscreditnumber"] = v; }, local: true }, false)), [(await $.wv([$t59], "pid", { get: async () => L0["pid"], set: async (v) => { L0["pid"] = v; }, local: true }, false))]], C)), (await $.mv((await $.wv([$t59], "E", { get: async () => L0["e"], set: async (v) => { L0["e"] = v; }, local: true }, false)), "Message")))], C)));
      }
      else { throw $t60; }
    }
  }
  return L0.result;
}, {"params": ["PID", "BDate", "EDate"], "kind": "procedure", "ptypes": ["Integer", "TDateTime", "TDateTime"]});
  U.method("TfrmBCFilter", "InsertOneRow30", async function InsertOneRow30(Self, p0, p1, p2) {
  const C = $.chain(Self, U);
  const L0 = {"pid": $.copyArg(p0), "bdate": $.copyArg(p1), "edate": $.copyArg(p2), result: undefined};
  await $.fixArgs(L0, ["pid", "bdate", "edate"]);
  L0["rscreditnumber"] = "%d - № li kredit : ";
  {
    const $t61 = (await $.wobj(C, "CM_AK_REPORTS"));
    try {
      await $.stmt((await $.wcall([$t61], "CallProcedure", ["insinfograntbranch", ["p_ID", (await $.wv([$t61], "pID", { get: async () => L0["pid"], set: async (v) => { L0["pid"] = v; }, local: true }, false)), "p_bDate", (await $.wv([$t61], "bDate", { get: async () => L0["bdate"], set: async (v) => { L0["bdate"] = v; }, local: true }, false)), "p_eDate", (await $.wv([$t61], "eDate", { get: async () => L0["edate"], set: async (v) => { L0["edate"] = v; }, local: true }, false))]], C)));
    } catch ($t62) {
      $.rethrowControl($t62);
      if ($.excIs($t62, "Exception")) {
        L0["e"] = $.exc($t62);
        await $.stmt((await $.wcall([$t61], "LogError", [$.add((await $.wcall([$t61], "Format", [(await $.wv([$t61], "rsCreditNumber", { get: async () => L0["rscreditnumber"], set: async (v) => { L0["rscreditnumber"] = v; }, local: true }, false)), [(await $.wv([$t61], "pid", { get: async () => L0["pid"], set: async (v) => { L0["pid"] = v; }, local: true }, false))]], C)), (await $.mv((await $.wv([$t61], "E", { get: async () => L0["e"], set: async (v) => { L0["e"] = v; }, local: true }, false)), "Message")))], C)));
      }
      else { throw $t62; }
    }
  }
  return L0.result;
}, {"params": ["PID", "BDate", "EDate"], "kind": "procedure", "ptypes": ["Integer", "TDateTime", "TDateTime"]});
  U.method("TfrmBCFilter", "InsertOneRow31", async function InsertOneRow31(Self, p0, p1, p2) {
  const C = $.chain(Self, U);
  const L0 = {"pid": $.copyArg(p0), "bdate": $.copyArg(p1), "edate": $.copyArg(p2), result: undefined};
  await $.fixArgs(L0, ["pid", "bdate", "edate"]);
  L0["rscreditnumber"] = "%d - № li kredit : ";
  {
    const $t63 = (await $.wobj(C, "CM_AK_REPORTS"));
    try {
      await $.stmt((await $.wcall([$t63], "CallProcedure", ["insinfograntcontract", ["p_ID", (await $.wv([$t63], "pID", { get: async () => L0["pid"], set: async (v) => { L0["pid"] = v; }, local: true }, false)), "p_bDate", (await $.wv([$t63], "bDate", { get: async () => L0["bdate"], set: async (v) => { L0["bdate"] = v; }, local: true }, false)), "p_eDate", (await $.wv([$t63], "eDate", { get: async () => L0["edate"], set: async (v) => { L0["edate"] = v; }, local: true }, false))]], C)));
    } catch ($t64) {
      $.rethrowControl($t64);
      if ($.excIs($t64, "Exception")) {
        L0["e"] = $.exc($t64);
        await $.stmt((await $.wcall([$t63], "LogError", [$.add((await $.wcall([$t63], "Format", [(await $.wv([$t63], "rsCreditNumber", { get: async () => L0["rscreditnumber"], set: async (v) => { L0["rscreditnumber"] = v; }, local: true }, false)), [(await $.wv([$t63], "pid", { get: async () => L0["pid"], set: async (v) => { L0["pid"] = v; }, local: true }, false))]], C)), (await $.mv((await $.wv([$t63], "E", { get: async () => L0["e"], set: async (v) => { L0["e"] = v; }, local: true }, false)), "Message")))], C)));
      }
      else { throw $t64; }
    }
  }
  return L0.result;
}, {"params": ["PID", "BDate", "EDate"], "kind": "procedure", "ptypes": ["Integer", "TDateTime", "TDateTime"]});
  U.method("TfrmBCFilter", "printreport4", async function printreport4(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: undefined, "s": '', "counter": 0};
  if ($.truthy($.not((await $.call(C, "assigned", [(await $.v(C, "QRCM_AK_FORM2"))]))))) {
    await $.set(C, "QRCM_AK_FORM2", (await $.mcall((await $.v(C, "TQRCM_AK_FORM2")), "Create", [Self])));
  }
  {
    const $t65 = (await $.mv((await $.v(C, "DMBC")), "ResultDSBP"));
    if ($.truthy((await $.mv((await $.wv([$t65], "CheckBox6", C, false)), "Checked")))) {
      { const $t66 = await $.iset((await $.wv([$t65], "SQL", C, false)), [21], $.add("where districtid=", (await $.mv((await $.wv([$t65], "DistrictsID", C, false)), "AsString")))); if ($t66 !== undefined) { await $.wset([$t65], "SQL", $t66, C); } }
    }
    if ($.truthy($.not((await $.wv([$t65], "Active", C, false))))) {
      await $.stmt($.wcall([$t65], "Open", [], C));
    } else {
      await $.stmt($.wcall([$t65], "Refresh", [], C));
    }
  }
  if ($.truthy($.eq((await $.mv((await $.v(C, "RGReportType")), "ItemIndex")), 0))) {
    {
      const $t67 = (await $.wobj(C, "Kera"));
      await $.stmt($.wcall([$t67], "Connect", [], C));
      await $.stmt((await $.wcall([$t67], "ExportDataset", [(await $.mv((await $.wv([$t67], "DMBC", C, false)), "ResultDSBP")), "FBP", (await $.wv([$t67], "True", C, false))], C)));
    }
  } else {
    {
      const $t68 = (await $.wobj(C, "QRCM_AK_FORM2"));
      await $.wset([$t68], "S", (await $.wcall([$t68], "FOrmat", [(await $.wv([$t68], "rsForm4Caption", C, false)), [(await $.mv((await $.mcall((await $.wv([$t68], "UserGroups", C, false)), "FieldByName", ["DESCRIPTION"])), "AsString"))]], C)), { get: async () => L0["s"], set: async (v) => { L0["s"] = v; }, local: true });
      await $.mset((await $.wv([$t68], "titleLabel", C, false)), "Caption", (await $.wv([$t68], "S", { get: async () => L0["s"], set: async (v) => { L0["s"] = v; }, local: true }, false)));
      { const $t69 = $.sub((await $.mv((await $.wv([$t68], "QRCM_AK_FORM2", C, false)), "ComponentCount")), 1);
        await $.wset([$t68], "Counter", 0, { get: async () => L0["counter"], set: async (v) => { L0["counter"] = v; }, local: true });
        let $t70 = true;
        for (;;) {
          if (!$t70) { await $.wset([$t68], "Counter", $.succ((await $.wv([$t68], "Counter", { get: async () => L0["counter"], set: async (v) => { L0["counter"] = v; }, local: true }, false)), 1), { get: async () => L0["counter"], set: async (v) => { L0["counter"] = v; }, local: true }); }
          $t70 = false;
          if (!($.ord((await $.wv([$t68], "Counter", { get: async () => L0["counter"], set: async (v) => { L0["counter"] = v; }, local: true }, false))) <= $.ord($t69))) break;
          if ($.truthy($.gt((await $.mv((await $.idx((await $.wv([$t68], "Components", C, false)), [(await $.wv([$t68], "Counter", { get: async () => L0["counter"], set: async (v) => { L0["counter"] = v; }, local: true }, false))])), "Tag")), 0))) {
            await $.mset((await $.idx((await $.wv([$t68], "Components", C, false)), [(await $.wv([$t68], "Counter", { get: async () => L0["counter"], set: async (v) => { L0["counter"] = v; }, local: true }, false))])), "Enabled", $.le((await $.mv((await $.idx((await $.wv([$t68], "Components", C, false)), [(await $.wv([$t68], "Counter", { get: async () => L0["counter"], set: async (v) => { L0["counter"] = v; }, local: true }, false))])), "Tag")), (await $.wv([$t68], "PrintDeep", C, false))));
          }
          await $.tick();
        }
      }
      await $.stmt($.wcall([$t68], "Preview", [], C));
    }
  }
  await $.mset((await $.v(C, "btnYeniden")), "Enabled", true);
  return L0.result;
}, {"params": [], "kind": "procedure", "ptypes": []});
  U.method("TfrmBCFilter", "printreport5", async function printreport5(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: undefined, "s": '', "counter": 0};
  if ($.truthy($.not((await $.call(C, "assigned", [(await $.v(C, "QRCM_AK_FORM3"))]))))) {
    await $.set(C, "QRCM_AK_FORM3", (await $.mcall((await $.v(C, "TQRCM_AK_FORM3")), "Create", [Self])));
  }
  {
    const $t71 = (await $.mv((await $.v(C, "DMBC")), "ResultDSTrouble"));
    if ($.truthy((await $.mv((await $.wv([$t71], "CheckBox6", C, false)), "Checked")))) {
      { const $t72 = await $.iset((await $.wv([$t71], "SQL", C, false)), [21], $.add("where districtid=", (await $.mv((await $.wv([$t71], "DistrictsID", C, false)), "AsString")))); if ($t72 !== undefined) { await $.wset([$t71], "SQL", $t72, C); } }
    }
    if ($.truthy($.not((await $.wv([$t71], "Active", C, false))))) {
      await $.stmt($.wcall([$t71], "Open", [], C));
    } else {
      await $.stmt($.wcall([$t71], "Refresh", [], C));
    }
  }
  if ($.truthy($.eq((await $.mv((await $.v(C, "RGReportType")), "ItemIndex")), 0))) {
    {
      const $t73 = (await $.wobj(C, "Kera"));
      await $.stmt($.wcall([$t73], "Connect", [], C));
      await $.stmt((await $.wcall([$t73], "ExportDataset", [(await $.mv((await $.wv([$t73], "DMBC", C, false)), "ResultDSTrouble")), "FTr", (await $.wv([$t73], "True", C, false))], C)));
    }
  } else {
    {
      const $t74 = (await $.wobj(C, "QRCM_AK_FORM3"));
      await $.wset([$t74], "S", (await $.wcall([$t74], "FOrmat", [(await $.wv([$t74], "rsForm5Caption", C, false)), [(await $.mv((await $.mcall((await $.wv([$t74], "UserGroups", C, false)), "FieldByName", ["DESCRIPTION"])), "AsString"))]], C)), { get: async () => L0["s"], set: async (v) => { L0["s"] = v; }, local: true });
      await $.mset((await $.wv([$t74], "titleLabel", C, false)), "Caption", (await $.wv([$t74], "S", { get: async () => L0["s"], set: async (v) => { L0["s"] = v; }, local: true }, false)));
      { const $t75 = $.sub((await $.mv((await $.wv([$t74], "QRCM_AK_FORM3", C, false)), "ComponentCount")), 1);
        await $.wset([$t74], "Counter", 0, { get: async () => L0["counter"], set: async (v) => { L0["counter"] = v; }, local: true });
        let $t76 = true;
        for (;;) {
          if (!$t76) { await $.wset([$t74], "Counter", $.succ((await $.wv([$t74], "Counter", { get: async () => L0["counter"], set: async (v) => { L0["counter"] = v; }, local: true }, false)), 1), { get: async () => L0["counter"], set: async (v) => { L0["counter"] = v; }, local: true }); }
          $t76 = false;
          if (!($.ord((await $.wv([$t74], "Counter", { get: async () => L0["counter"], set: async (v) => { L0["counter"] = v; }, local: true }, false))) <= $.ord($t75))) break;
          if ($.truthy($.gt((await $.mv((await $.idx((await $.wv([$t74], "Components", C, false)), [(await $.wv([$t74], "Counter", { get: async () => L0["counter"], set: async (v) => { L0["counter"] = v; }, local: true }, false))])), "Tag")), 0))) {
            await $.mset((await $.idx((await $.wv([$t74], "Components", C, false)), [(await $.wv([$t74], "Counter", { get: async () => L0["counter"], set: async (v) => { L0["counter"] = v; }, local: true }, false))])), "Enabled", $.le((await $.mv((await $.idx((await $.wv([$t74], "Components", C, false)), [(await $.wv([$t74], "Counter", { get: async () => L0["counter"], set: async (v) => { L0["counter"] = v; }, local: true }, false))])), "Tag")), (await $.wv([$t74], "PrintDeep", C, false))));
          }
          await $.tick();
        }
      }
      await $.stmt($.wcall([$t74], "Preview", [], C));
    }
  }
  await $.mset((await $.v(C, "btnYeniden")), "Enabled", true);
  return L0.result;
}, {"params": [], "kind": "procedure", "ptypes": []});
  U.method("TfrmBCFilter", "printreport6", async function printreport6(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: undefined, "s": '', "counter": 0};
  if ($.truthy($.not((await $.call(C, "assigned", [(await $.v(C, "QRCM_AK_FORM10"))]))))) {
    await $.set(C, "QRCM_AK_FORM10", (await $.mcall((await $.v(C, "TQRCM_AK_FORM10")), "Create", [Self])));
  }
  {
    const $t77 = (await $.mv((await $.v(C, "DMBC")), "ResultDSLYT"));
    if ($.truthy((await $.mv((await $.wv([$t77], "CheckBox6", C, false)), "Checked")))) {
      { const $t78 = await $.iset((await $.wv([$t77], "SQL", C, false)), [21], $.add("where districtid=", (await $.mv((await $.wv([$t77], "DistrictsID", C, false)), "AsString")))); if ($t78 !== undefined) { await $.wset([$t77], "SQL", $t78, C); } }
    }
    if ($.truthy($.not((await $.wv([$t77], "Active", C, false))))) {
      await $.stmt($.wcall([$t77], "Open", [], C));
    } else {
      await $.stmt($.wcall([$t77], "Refresh", [], C));
    }
  }
  if ($.truthy($.eq((await $.mv((await $.v(C, "RGReportType")), "ItemIndex")), 0))) {
    {
      const $t79 = (await $.wobj(C, "Kera"));
      await $.stmt($.wcall([$t79], "Connect", [], C));
      await $.stmt((await $.wcall([$t79], "ExportDataset", [(await $.mv((await $.wv([$t79], "DMBC", C, false)), "ResultDSLYT")), "FLastYear", (await $.wv([$t79], "True", C, false))], C)));
    }
  } else {
    {
      const $t80 = (await $.wobj(C, "QRCM_AK_FORM10"));
      await $.wset([$t80], "S", (await $.wcall([$t80], "FOrmat", [(await $.wv([$t80], "rsForm6Caption", C, false)), [(await $.mv((await $.mcall((await $.wv([$t80], "UserGroups", C, false)), "FieldByName", ["DESCRIPTION"])), "AsString"))]], C)), { get: async () => L0["s"], set: async (v) => { L0["s"] = v; }, local: true });
      await $.mset((await $.wv([$t80], "titleLabel", C, false)), "Caption", (await $.wv([$t80], "S", { get: async () => L0["s"], set: async (v) => { L0["s"] = v; }, local: true }, false)));
      { const $t81 = $.sub((await $.mv((await $.wv([$t80], "QRCM_AK_FORM10", C, false)), "ComponentCount")), 1);
        await $.wset([$t80], "Counter", 0, { get: async () => L0["counter"], set: async (v) => { L0["counter"] = v; }, local: true });
        let $t82 = true;
        for (;;) {
          if (!$t82) { await $.wset([$t80], "Counter", $.succ((await $.wv([$t80], "Counter", { get: async () => L0["counter"], set: async (v) => { L0["counter"] = v; }, local: true }, false)), 1), { get: async () => L0["counter"], set: async (v) => { L0["counter"] = v; }, local: true }); }
          $t82 = false;
          if (!($.ord((await $.wv([$t80], "Counter", { get: async () => L0["counter"], set: async (v) => { L0["counter"] = v; }, local: true }, false))) <= $.ord($t81))) break;
          if ($.truthy($.gt((await $.mv((await $.idx((await $.wv([$t80], "Components", C, false)), [(await $.wv([$t80], "Counter", { get: async () => L0["counter"], set: async (v) => { L0["counter"] = v; }, local: true }, false))])), "Tag")), 0))) {
            await $.mset((await $.idx((await $.wv([$t80], "Components", C, false)), [(await $.wv([$t80], "Counter", { get: async () => L0["counter"], set: async (v) => { L0["counter"] = v; }, local: true }, false))])), "Enabled", $.le((await $.mv((await $.idx((await $.wv([$t80], "Components", C, false)), [(await $.wv([$t80], "Counter", { get: async () => L0["counter"], set: async (v) => { L0["counter"] = v; }, local: true }, false))])), "Tag")), (await $.wv([$t80], "PrintDeep", C, false))));
          }
          await $.tick();
        }
      }
      await $.stmt($.wcall([$t80], "Preview", [], C));
    }
  }
  await $.mset((await $.v(C, "btnYeniden")), "Enabled", true);
  return L0.result;
}, {"params": [], "kind": "procedure", "ptypes": []});
  U.method("TfrmBCFilter", "printreport7", async function printreport7(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: undefined, "s": '', "counter": 0};
  if ($.truthy($.not((await $.call(C, "assigned", [(await $.v(C, "QRCM_AK_FORM11"))]))))) {
    await $.set(C, "QRCM_AK_FORM11", (await $.mcall((await $.v(C, "TQRCM_AK_FORM11")), "Create", [Self])));
  }
  {
    const $t83 = (await $.mv((await $.v(C, "DMBC")), "ResultDSL5YP"));
    if ($.truthy((await $.mv((await $.wv([$t83], "CheckBox6", C, false)), "Checked")))) {
      { const $t84 = await $.iset((await $.wv([$t83], "SQL", C, false)), [21], $.add("where districtid=", (await $.mv((await $.wv([$t83], "DistrictsID", C, false)), "AsString")))); if ($t84 !== undefined) { await $.wset([$t83], "SQL", $t84, C); } }
    }
    if ($.truthy($.not((await $.wv([$t83], "Active", C, false))))) {
      await $.stmt($.wcall([$t83], "Open", [], C));
    } else {
      await $.stmt($.wcall([$t83], "Refresh", [], C));
    }
  }
  if ($.truthy($.eq((await $.mv((await $.v(C, "RGReportType")), "ItemIndex")), 0))) {
    {
      const $t85 = (await $.wobj(C, "Kera"));
      await $.stmt($.wcall([$t85], "Connect", [], C));
      await $.stmt((await $.wcall([$t85], "ExportDataset", [(await $.mv((await $.wv([$t85], "DMBC", C, false)), "ResultDSL5YP")), "FLast5YearP", (await $.wv([$t85], "True", C, false))], C)));
    }
  } else {
    {
      const $t86 = (await $.wobj(C, "QRCM_AK_FORM11"));
      await $.wset([$t86], "S", (await $.wcall([$t86], "FOrmat", [(await $.wv([$t86], "rsForm7Caption", C, false)), [(await $.mv((await $.mcall((await $.wv([$t86], "UserGroups", C, false)), "FieldByName", ["DESCRIPTION"])), "AsString"))]], C)), { get: async () => L0["s"], set: async (v) => { L0["s"] = v; }, local: true });
      await $.mset((await $.wv([$t86], "titleLabel", C, false)), "Caption", (await $.wv([$t86], "S", { get: async () => L0["s"], set: async (v) => { L0["s"] = v; }, local: true }, false)));
      { const $t87 = $.sub((await $.mv((await $.wv([$t86], "QRCM_AK_FORM11", C, false)), "ComponentCount")), 1);
        await $.wset([$t86], "Counter", 0, { get: async () => L0["counter"], set: async (v) => { L0["counter"] = v; }, local: true });
        let $t88 = true;
        for (;;) {
          if (!$t88) { await $.wset([$t86], "Counter", $.succ((await $.wv([$t86], "Counter", { get: async () => L0["counter"], set: async (v) => { L0["counter"] = v; }, local: true }, false)), 1), { get: async () => L0["counter"], set: async (v) => { L0["counter"] = v; }, local: true }); }
          $t88 = false;
          if (!($.ord((await $.wv([$t86], "Counter", { get: async () => L0["counter"], set: async (v) => { L0["counter"] = v; }, local: true }, false))) <= $.ord($t87))) break;
          if ($.truthy($.gt((await $.mv((await $.idx((await $.wv([$t86], "Components", C, false)), [(await $.wv([$t86], "Counter", { get: async () => L0["counter"], set: async (v) => { L0["counter"] = v; }, local: true }, false))])), "Tag")), 0))) {
            await $.mset((await $.idx((await $.wv([$t86], "Components", C, false)), [(await $.wv([$t86], "Counter", { get: async () => L0["counter"], set: async (v) => { L0["counter"] = v; }, local: true }, false))])), "Enabled", $.le((await $.mv((await $.idx((await $.wv([$t86], "Components", C, false)), [(await $.wv([$t86], "Counter", { get: async () => L0["counter"], set: async (v) => { L0["counter"] = v; }, local: true }, false))])), "Tag")), (await $.wv([$t86], "PrintDeep", C, false))));
          }
          await $.tick();
        }
      }
      await $.stmt($.wcall([$t86], "Preview", [], C));
    }
  }
  await $.mset((await $.v(C, "btnYeniden")), "Enabled", true);
  return L0.result;
}, {"params": [], "kind": "procedure", "ptypes": []});
  U.method("TfrmBCFilter", "printreport8", async function printreport8(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: undefined, "s": '', "counter": 0};
  if ($.truthy($.not((await $.call(C, "assigned", [(await $.v(C, "QRCM_AK_FORM12"))]))))) {
    await $.set(C, "QRCM_AK_FORM12", (await $.mcall((await $.v(C, "TQRCM_AK_FORM12")), "Create", [Self])));
  }
  {
    const $t89 = (await $.mv((await $.v(C, "DMBC")), "ResultDSL5YT"));
    if ($.truthy((await $.mv((await $.wv([$t89], "CheckBox6", C, false)), "Checked")))) {
      { const $t90 = await $.iset((await $.wv([$t89], "SQL", C, false)), [21], $.add("where districtid=", (await $.mv((await $.wv([$t89], "DistrictsID", C, false)), "AsString")))); if ($t90 !== undefined) { await $.wset([$t89], "SQL", $t90, C); } }
    }
    if ($.truthy($.not((await $.wv([$t89], "Active", C, false))))) {
      await $.stmt($.wcall([$t89], "Open", [], C));
    } else {
      await $.stmt($.wcall([$t89], "Refresh", [], C));
    }
  }
  if ($.truthy($.eq((await $.mv((await $.v(C, "RGReportType")), "ItemIndex")), 0))) {
    {
      const $t91 = (await $.wobj(C, "Kera"));
      await $.stmt($.wcall([$t91], "Connect", [], C));
      await $.stmt((await $.wcall([$t91], "ExportDataset", [(await $.mv((await $.wv([$t91], "DMBC", C, false)), "ResultDSL5YT")), "FLast5YearT", (await $.wv([$t91], "True", C, false))], C)));
    }
  } else {
    {
      const $t92 = (await $.wobj(C, "QRCM_AK_FORM12"));
      await $.wset([$t92], "S", (await $.wcall([$t92], "FOrmat", [(await $.wv([$t92], "rsForm7Caption", C, false)), [(await $.mv((await $.mcall((await $.wv([$t92], "UserGroups", C, false)), "FieldByName", ["DESCRIPTION"])), "AsString"))]], C)), { get: async () => L0["s"], set: async (v) => { L0["s"] = v; }, local: true });
      await $.mset((await $.wv([$t92], "titleLabel", C, false)), "Caption", (await $.wv([$t92], "S", { get: async () => L0["s"], set: async (v) => { L0["s"] = v; }, local: true }, false)));
      { const $t93 = $.sub((await $.mv((await $.wv([$t92], "QRCM_AK_FORM12", C, false)), "ComponentCount")), 1);
        await $.wset([$t92], "Counter", 0, { get: async () => L0["counter"], set: async (v) => { L0["counter"] = v; }, local: true });
        let $t94 = true;
        for (;;) {
          if (!$t94) { await $.wset([$t92], "Counter", $.succ((await $.wv([$t92], "Counter", { get: async () => L0["counter"], set: async (v) => { L0["counter"] = v; }, local: true }, false)), 1), { get: async () => L0["counter"], set: async (v) => { L0["counter"] = v; }, local: true }); }
          $t94 = false;
          if (!($.ord((await $.wv([$t92], "Counter", { get: async () => L0["counter"], set: async (v) => { L0["counter"] = v; }, local: true }, false))) <= $.ord($t93))) break;
          if ($.truthy($.gt((await $.mv((await $.idx((await $.wv([$t92], "Components", C, false)), [(await $.wv([$t92], "Counter", { get: async () => L0["counter"], set: async (v) => { L0["counter"] = v; }, local: true }, false))])), "Tag")), 0))) {
            await $.mset((await $.idx((await $.wv([$t92], "Components", C, false)), [(await $.wv([$t92], "Counter", { get: async () => L0["counter"], set: async (v) => { L0["counter"] = v; }, local: true }, false))])), "Enabled", $.le((await $.mv((await $.idx((await $.wv([$t92], "Components", C, false)), [(await $.wv([$t92], "Counter", { get: async () => L0["counter"], set: async (v) => { L0["counter"] = v; }, local: true }, false))])), "Tag")), (await $.wv([$t92], "PrintDeep", C, false))));
          }
          await $.tick();
        }
      }
      await $.stmt($.wcall([$t92], "Preview", [], C));
    }
  }
  await $.mset((await $.v(C, "btnYeniden")), "Enabled", true);
  return L0.result;
}, {"params": [], "kind": "procedure", "ptypes": []});
  U.method("TfrmBCFilter", "printreport9", async function printreport9(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: undefined, "s": '', "counter": 0, "dd": 0, "mm": 0, "yy": 0};
  await $.staticConst(L0, "tmons", "ubriefcasefilter.tfrmbcfilter.printreport9.tmons", async () => ["Yanvar", "Fevral", "Mart", "Aprel", "May", "Iyun", "Iyul", "Avqust", "Sentyabr", "Oktyabr", "Noyabr", "Dekabr"]);
  if ($.truthy($.not((await $.call(C, "assigned", [(await $.v(C, "QRCM_AK_FORM13"))]))))) {
    await $.set(C, "QRCM_AK_FORM13", (await $.mcall((await $.v(C, "TQRCM_AK_FORM13")), "Create", [Self])));
  }
  if ($.truthy($.not((await $.call(C, "assigned", [(await $.v(C, "QRCM_AK_FORM13_2"))]))))) {
    await $.set(C, "QRCM_AK_FORM13_2", (await $.mcall((await $.v(C, "TQRCM_AK_FORM13_2")), "Create", [Self])));
  }
  {
    const $t95 = (await $.mv((await $.v(C, "DMBC")), "ResultDSLYPS"));
    if ($.truthy((await $.mv((await $.wv([$t95], "CheckBox6", C, false)), "Checked")))) {
      { const $t96 = await $.iset((await $.wv([$t95], "SQL", C, false)), [21], $.add("where districtid=", (await $.mv((await $.wv([$t95], "DistrictsID", C, false)), "AsString")))); if ($t96 !== undefined) { await $.wset([$t95], "SQL", $t96, C); } }
    }
    if ($.truthy($.not((await $.wv([$t95], "Active", C, false))))) {
      await $.stmt($.wcall([$t95], "Open", [], C));
    } else {
      await $.stmt($.wcall([$t95], "Refresh", [], C));
    }
  }
  if ($.truthy($.eq((await $.mv((await $.v(C, "RGReportType")), "ItemIndex")), 0))) {
    {
      const $t97 = (await $.wobj(C, "Kera"));
      await $.stmt($.wcall([$t97], "Connect", [], C));
      await $.stmt((await $.wcall([$t97], "ExportDataset", [(await $.mv((await $.wv([$t97], "DMBC", C, false)), "ResultDSLYPS")), "FLast5YearT", (await $.wv([$t97], "True", C, false))], C)));
    }
  } else {
    {
      const $t98 = (await $.wobj(C, "QRCM_AK_FORM13"));
      await $.wset([$t98], "S", (await $.wcall([$t98], "FOrmat", [(await $.wv([$t98], "rsForm9Caption", C, false)), [(await $.mv((await $.mcall((await $.wv([$t98], "UserGroups", C, false)), "FieldByName", ["DESCRIPTION"])), "AsString"))]], C)), { get: async () => L0["s"], set: async (v) => { L0["s"] = v; }, local: true });
      await $.mset((await $.wv([$t98], "titleLabel", C, false)), "Caption", (await $.wv([$t98], "S", { get: async () => L0["s"], set: async (v) => { L0["s"] = v; }, local: true }, false)));
      await $.mset((await $.wv([$t98], "lbbegdate", C, false)), "Caption", (await $.wcall([$t98], "FormatDateTime", ["dd/mm/yyyy", (await $.mv((await $.wv([$t98], "BDateP", C, false)), "DateTime"))], C)));
      await $.mset((await $.wv([$t98], "lbenddate", C, false)), "Caption", (await $.wcall([$t98], "FormatDateTime", ["dd/mm/yyyy", (await $.mv((await $.wv([$t98], "EDateP", C, false)), "DateTime"))], C)));
      await $.stmt((await $.wcall([$t98], "DecodeDate", [(await $.mv((await $.wv([$t98], "BDateP", C, false)), "DateTime")), $.ref(async () => (await $.wv([$t98], "yy", { get: async () => L0["yy"], set: async (v) => { L0["yy"] = v; }, local: true }, false)), async ($t99) => { await $.wset([$t98], "yy", $t99, { get: async () => L0["yy"], set: async (v) => { L0["yy"] = v; }, local: true }); }), $.ref(async () => (await $.wv([$t98], "mm", { get: async () => L0["mm"], set: async (v) => { L0["mm"] = v; }, local: true }, false)), async ($t100) => { await $.wset([$t98], "mm", $t100, { get: async () => L0["mm"], set: async (v) => { L0["mm"] = v; }, local: true }); }), $.ref(async () => (await $.wv([$t98], "dd", { get: async () => L0["dd"], set: async (v) => { L0["dd"] = v; }, local: true }, false)), async ($t101) => { await $.wset([$t98], "dd", $t101, { get: async () => L0["dd"], set: async (v) => { L0["dd"] = v; }, local: true }); })], C)));
      if ($.truthy((await $.mv((await $.wv([$t98], "CheckBox4", C, false)), "Checked")))) {
        await $.wset([$t98], "PrintDeep", 30, C);
      }
      { const $t102 = $.sub((await $.mv((await $.wv([$t98], "QRCM_AK_FORM13", C, false)), "ComponentCount")), 1);
        await $.wset([$t98], "Counter", 0, { get: async () => L0["counter"], set: async (v) => { L0["counter"] = v; }, local: true });
        let $t103 = true;
        for (;;) {
          if (!$t103) { await $.wset([$t98], "Counter", $.succ((await $.wv([$t98], "Counter", { get: async () => L0["counter"], set: async (v) => { L0["counter"] = v; }, local: true }, false)), 1), { get: async () => L0["counter"], set: async (v) => { L0["counter"] = v; }, local: true }); }
          $t103 = false;
          if (!($.ord((await $.wv([$t98], "Counter", { get: async () => L0["counter"], set: async (v) => { L0["counter"] = v; }, local: true }, false))) <= $.ord($t102))) break;
          if ($.truthy($.gt((await $.mv((await $.idx((await $.wv([$t98], "Components", C, false)), [(await $.wv([$t98], "Counter", { get: async () => L0["counter"], set: async (v) => { L0["counter"] = v; }, local: true }, false))])), "Tag")), 0))) {
            await $.mset((await $.idx((await $.wv([$t98], "Components", C, false)), [(await $.wv([$t98], "Counter", { get: async () => L0["counter"], set: async (v) => { L0["counter"] = v; }, local: true }, false))])), "Enabled", $.le((await $.mv((await $.idx((await $.wv([$t98], "Components", C, false)), [(await $.wv([$t98], "Counter", { get: async () => L0["counter"], set: async (v) => { L0["counter"] = v; }, local: true }, false))])), "Tag")), (await $.wv([$t98], "PrintDeep", C, false))));
          }
          await $.tick();
        }
      }
      await $.stmt($.wcall([$t98], "Preview", [], C));
    }
    {
      const $t104 = (await $.wobj(C, "QRCM_AK_FORM13_2"));
      await $.wset([$t104], "S", (await $.wcall([$t104], "FOrmat", [(await $.wv([$t104], "rsForm9Caption", C, false)), [(await $.mv((await $.mcall((await $.wv([$t104], "UserGroups", C, false)), "FieldByName", ["DESCRIPTION"])), "AsString"))]], C)), { get: async () => L0["s"], set: async (v) => { L0["s"] = v; }, local: true });
      await $.mset((await $.wv([$t104], "titleLabel", C, false)), "Caption", (await $.wv([$t104], "S", { get: async () => L0["s"], set: async (v) => { L0["s"] = v; }, local: true }, false)));
      await $.mset((await $.wv([$t104], "lbbegdate", C, false)), "Caption", (await $.wcall([$t104], "FormatDateTime", ["dd/mm/yyyy", (await $.mv((await $.wv([$t104], "BDateP", C, false)), "DateTime"))], C)));
      await $.mset((await $.wv([$t104], "lbenddate", C, false)), "Caption", (await $.wcall([$t104], "FormatDateTime", ["dd/mm/yyyy", (await $.mv((await $.wv([$t104], "EDateP", C, false)), "DateTime"))], C)));
      if ($.truthy((await $.mv((await $.wv([$t104], "CheckBox4", C, false)), "Checked")))) {
        await $.wset([$t104], "PrintDeep", 30, C);
      }
      { const $t105 = $.sub((await $.mv((await $.wv([$t104], "QRCM_AK_FORM13_2", C, false)), "ComponentCount")), 1);
        await $.wset([$t104], "Counter", 0, { get: async () => L0["counter"], set: async (v) => { L0["counter"] = v; }, local: true });
        let $t106 = true;
        for (;;) {
          if (!$t106) { await $.wset([$t104], "Counter", $.succ((await $.wv([$t104], "Counter", { get: async () => L0["counter"], set: async (v) => { L0["counter"] = v; }, local: true }, false)), 1), { get: async () => L0["counter"], set: async (v) => { L0["counter"] = v; }, local: true }); }
          $t106 = false;
          if (!($.ord((await $.wv([$t104], "Counter", { get: async () => L0["counter"], set: async (v) => { L0["counter"] = v; }, local: true }, false))) <= $.ord($t105))) break;
          if ($.truthy($.gt((await $.mv((await $.idx((await $.wv([$t104], "Components", C, false)), [(await $.wv([$t104], "Counter", { get: async () => L0["counter"], set: async (v) => { L0["counter"] = v; }, local: true }, false))])), "Tag")), 0))) {
            await $.mset((await $.idx((await $.wv([$t104], "Components", C, false)), [(await $.wv([$t104], "Counter", { get: async () => L0["counter"], set: async (v) => { L0["counter"] = v; }, local: true }, false))])), "Enabled", $.le((await $.mv((await $.idx((await $.wv([$t104], "Components", C, false)), [(await $.wv([$t104], "Counter", { get: async () => L0["counter"], set: async (v) => { L0["counter"] = v; }, local: true }, false))])), "Tag")), (await $.wv([$t104], "PrintDeep", C, false))));
          }
          await $.tick();
        }
      }
      await $.stmt($.wcall([$t104], "Preview", [], C));
    }
  }
  await $.mset((await $.v(C, "btnYeniden")), "Enabled", true);
  return L0.result;
}, {"params": [], "kind": "procedure", "ptypes": []});
  U.method("TfrmBCFilter", "printreport10", async function printreport10(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: undefined, "s": '', "counter": 0};
  if ($.truthy($.not((await $.call(C, "assigned", [(await $.v(C, "QRCM_AK_FORM16"))]))))) {
    await $.set(C, "QRCM_AK_FORM16", (await $.mcall((await $.v(C, "TQRCM_AK_FORM16")), "Create", [Self])));
  }
  {
    const $t107 = (await $.mv((await $.v(C, "DMBC")), "ResultDSMg"));
    if ($.truthy((await $.mv((await $.wv([$t107], "CheckBox6", C, false)), "Checked")))) {
      { const $t108 = await $.iset((await $.wv([$t107], "SQL", C, false)), [21], $.add("where districtid=", (await $.mv((await $.wv([$t107], "DistrictsID", C, false)), "AsString")))); if ($t108 !== undefined) { await $.wset([$t107], "SQL", $t108, C); } }
    }
    if ($.truthy($.not((await $.wv([$t107], "Active", C, false))))) {
      await $.stmt($.wcall([$t107], "Open", [], C));
    } else {
      await $.stmt($.wcall([$t107], "Refresh", [], C));
    }
  }
  if ($.truthy($.eq((await $.mv((await $.v(C, "RGReportType")), "ItemIndex")), 0))) {
    {
      const $t109 = (await $.wobj(C, "Kera"));
      await $.stmt($.wcall([$t109], "Connect", [], C));
      await $.stmt((await $.wcall([$t109], "ExportDataset", [(await $.mv((await $.wv([$t109], "DMBC", C, false)), "ResultDSMg")), "FLast5YearT", (await $.wv([$t109], "True", C, false))], C)));
    }
  } else {
    {
      const $t110 = (await $.wobj(C, "QRCM_AK_FORM16"));
      await $.wset([$t110], "S", (await $.wcall([$t110], "FOrmat", [(await $.wv([$t110], "rsForm10Caption", C, false)), [(await $.mv((await $.mcall((await $.wv([$t110], "UserGroups", C, false)), "FieldByName", ["DESCRIPTION"])), "AsString"))]], C)), { get: async () => L0["s"], set: async (v) => { L0["s"] = v; }, local: true });
      await $.mset((await $.wv([$t110], "titleLabel", C, false)), "Caption", (await $.wv([$t110], "S", { get: async () => L0["s"], set: async (v) => { L0["s"] = v; }, local: true }, false)));
      { const $t111 = $.sub((await $.mv((await $.wv([$t110], "QRCM_AK_FORM16", C, false)), "ComponentCount")), 1);
        await $.wset([$t110], "Counter", 0, { get: async () => L0["counter"], set: async (v) => { L0["counter"] = v; }, local: true });
        let $t112 = true;
        for (;;) {
          if (!$t112) { await $.wset([$t110], "Counter", $.succ((await $.wv([$t110], "Counter", { get: async () => L0["counter"], set: async (v) => { L0["counter"] = v; }, local: true }, false)), 1), { get: async () => L0["counter"], set: async (v) => { L0["counter"] = v; }, local: true }); }
          $t112 = false;
          if (!($.ord((await $.wv([$t110], "Counter", { get: async () => L0["counter"], set: async (v) => { L0["counter"] = v; }, local: true }, false))) <= $.ord($t111))) break;
          if ($.truthy($.gt((await $.mv((await $.idx((await $.wv([$t110], "Components", C, false)), [(await $.wv([$t110], "Counter", { get: async () => L0["counter"], set: async (v) => { L0["counter"] = v; }, local: true }, false))])), "Tag")), 0))) {
            await $.mset((await $.idx((await $.wv([$t110], "Components", C, false)), [(await $.wv([$t110], "Counter", { get: async () => L0["counter"], set: async (v) => { L0["counter"] = v; }, local: true }, false))])), "Enabled", $.le((await $.mv((await $.idx((await $.wv([$t110], "Components", C, false)), [(await $.wv([$t110], "Counter", { get: async () => L0["counter"], set: async (v) => { L0["counter"] = v; }, local: true }, false))])), "Tag")), (await $.wv([$t110], "PrintDeep", C, false))));
          }
          await $.tick();
        }
      }
      await $.stmt($.wcall([$t110], "Preview", [], C));
    }
  }
  await $.mset((await $.v(C, "btnYeniden")), "Enabled", true);
  return L0.result;
}, {"params": [], "kind": "procedure", "ptypes": []});
  U.method("TfrmBCFilter", "printreport11", async function printreport11(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: undefined, "s": '', "counter": 0};
  if ($.truthy($.not((await $.call(C, "assigned", [(await $.v(C, "QRF2Full"))]))))) {
    await $.set(C, "QRF2Full", (await $.mcall((await $.v(C, "TQRF2Full")), "Create", [Self])));
  }
  {
    const $t113 = (await $.mv((await $.v(C, "DMBC")), "ResultDS2Full"));
    if ($.truthy((await $.mv((await $.wv([$t113], "CheckBox6", C, false)), "Checked")))) {
      { const $t114 = await $.iset((await $.wv([$t113], "SQL", C, false)), [21], $.add("where districtid=", (await $.mv((await $.wv([$t113], "DistrictsID", C, false)), "AsString")))); if ($t114 !== undefined) { await $.wset([$t113], "SQL", $t114, C); } }
    }
    if ($.truthy($.not((await $.wv([$t113], "Active", C, false))))) {
      await $.stmt($.wcall([$t113], "Open", [], C));
    } else {
      await $.stmt($.wcall([$t113], "Refresh", [], C));
    }
  }
  if ($.truthy($.eq((await $.mv((await $.v(C, "RGReportType")), "ItemIndex")), 0))) {
    {
      const $t115 = (await $.wobj(C, "Kera"));
      await $.stmt($.wcall([$t115], "Connect", [], C));
      await $.stmt((await $.wcall([$t115], "ExportDataset", [(await $.mv((await $.wv([$t115], "DMBC", C, false)), "ResultDS2Full")), "F2", (await $.wv([$t115], "True", C, false))], C)));
    }
  } else {
    {
      const $t116 = (await $.wobj(C, "QRF2Full"));
      await $.wset([$t116], "S", (await $.wcall([$t116], "FOrmat", [(await $.wv([$t116], "rsForm2Caption", C, false)), [(await $.mv((await $.mcall((await $.wv([$t116], "UserGroups", C, false)), "FieldByName", ["DESCRIPTION"])), "AsString"))]], C)), { get: async () => L0["s"], set: async (v) => { L0["s"] = v; }, local: true });
      await $.mset((await $.wv([$t116], "titleLabel", C, false)), "Caption", (await $.wv([$t116], "S", { get: async () => L0["s"], set: async (v) => { L0["s"] = v; }, local: true }, false)));
      if ($.truthy((await $.mv((await $.wv([$t116], "CheckBox4", C, false)), "Checked")))) {
        await $.wset([$t116], "PrintDeep", (await $.wcall([$t116], "StrToInt", [(await $.wcall([$t116], "FloatToStr", [(await $.wcall([$t116], "Round", [(await $.wcall([$t116], "power", [2, $.sub(4, (await $.mv((await $.wv([$t116], "cbPrintDeep", C, false)), "ItemIndex")))], C))], C))], C))], C)), C);
      } else {
        await $.wset([$t116], "PrintDeep", 32, C);
      }
      { const $t117 = $.sub((await $.mv((await $.wv([$t116], "QRF2Full", C, false)), "ComponentCount")), 1);
        await $.wset([$t116], "Counter", 0, { get: async () => L0["counter"], set: async (v) => { L0["counter"] = v; }, local: true });
        let $t118 = true;
        for (;;) {
          if (!$t118) { await $.wset([$t116], "Counter", $.succ((await $.wv([$t116], "Counter", { get: async () => L0["counter"], set: async (v) => { L0["counter"] = v; }, local: true }, false)), 1), { get: async () => L0["counter"], set: async (v) => { L0["counter"] = v; }, local: true }); }
          $t118 = false;
          if (!($.ord((await $.wv([$t116], "Counter", { get: async () => L0["counter"], set: async (v) => { L0["counter"] = v; }, local: true }, false))) <= $.ord($t117))) break;
          if ($.truthy($.gt((await $.mv((await $.idx((await $.wv([$t116], "Components", C, false)), [(await $.wv([$t116], "Counter", { get: async () => L0["counter"], set: async (v) => { L0["counter"] = v; }, local: true }, false))])), "Tag")), 0))) {
            await $.mset((await $.idx((await $.wv([$t116], "Components", C, false)), [(await $.wv([$t116], "Counter", { get: async () => L0["counter"], set: async (v) => { L0["counter"] = v; }, local: true }, false))])), "Enabled", $.le((await $.mv((await $.idx((await $.wv([$t116], "Components", C, false)), [(await $.wv([$t116], "Counter", { get: async () => L0["counter"], set: async (v) => { L0["counter"] = v; }, local: true }, false))])), "Tag")), (await $.wv([$t116], "PrintDeep", C, false))));
          }
          await $.tick();
        }
      }
      await $.stmt($.wcall([$t116], "Preview", [], C));
    }
  }
  return L0.result;
}, {"params": [], "kind": "procedure", "ptypes": []});
  U.method("TfrmBCFilter", "printreport12", async function printreport12(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: undefined, "s": ''};
  if ($.truthy($.not((await $.call(C, "assigned", [(await $.v(C, "QRF2Type"))]))))) {
    await $.set(C, "QRF2Type", (await $.mcall((await $.v(C, "TQRF2Type")), "Create", [Self])));
  }
  {
    const $t119 = (await $.mv((await $.v(C, "DMBC")), "ResultDS2Type"));
    if ($.truthy((await $.mv((await $.wv([$t119], "CheckBox6", C, false)), "Checked")))) {
      { const $t120 = await $.iset((await $.wv([$t119], "SQL", C, false)), [21], $.add("where districtid=", (await $.mv((await $.wv([$t119], "DistrictsID", C, false)), "AsString")))); if ($t120 !== undefined) { await $.wset([$t119], "SQL", $t120, C); } }
    }
    if ($.truthy($.not((await $.wv([$t119], "Active", C, false))))) {
      await $.stmt($.wcall([$t119], "Open", [], C));
    } else {
      await $.stmt($.wcall([$t119], "Refresh", [], C));
    }
  }
  if ($.truthy($.eq((await $.mv((await $.v(C, "RGReportType")), "ItemIndex")), 0))) {
    {
      const $t121 = (await $.wobj(C, "Kera"));
      await $.stmt($.wcall([$t121], "Connect", [], C));
      await $.stmt((await $.wcall([$t121], "ExportDataset", [(await $.mv((await $.wv([$t121], "DMBC", C, false)), "ResultDS2Type")), "F2", (await $.wv([$t121], "True", C, false))], C)));
    }
  } else {
    {
      const $t122 = (await $.wobj(C, "QRF2Type"));
      await $.wset([$t122], "S", (await $.wcall([$t122], "FOrmat", [(await $.wv([$t122], "rsForm2Caption", C, false)), [(await $.mv((await $.mcall((await $.wv([$t122], "UserGroups", C, false)), "FieldByName", ["DESCRIPTION"])), "AsString"))]], C)), { get: async () => L0["s"], set: async (v) => { L0["s"] = v; }, local: true });
      await $.mset((await $.wv([$t122], "titleLabel", C, false)), "Caption", (await $.wv([$t122], "S", { get: async () => L0["s"], set: async (v) => { L0["s"] = v; }, local: true }, false)));
      await $.stmt($.wcall([$t122], "Preview", [], C));
    }
  }
  return L0.result;
}, {"params": [], "kind": "procedure", "ptypes": []});
  U.method("TfrmBCFilter", "printreport13", async function printreport13(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: undefined, "s": '', "counter": 0};
  if ($.truthy($.not((await $.call(C, "assigned", [(await $.v(C, "QRCM_AK_FORM15"))]))))) {
    await $.set(C, "QRCM_AK_FORM15", (await $.mcall((await $.v(C, "TQRCM_AK_FORM15")), "Create", [Self])));
  }
  {
    const $t123 = (await $.mv((await $.v(C, "DMBC")), "ResultDSMg"));
    if ($.truthy((await $.mv((await $.wv([$t123], "CheckBox6", C, false)), "Checked")))) {
      { const $t124 = await $.iset((await $.wv([$t123], "SQL", C, false)), [21], $.add("where districtid=", (await $.mv((await $.wv([$t123], "DistrictsID", C, false)), "AsString")))); if ($t124 !== undefined) { await $.wset([$t123], "SQL", $t124, C); } }
    }
    if ($.truthy($.not((await $.wv([$t123], "Active", C, false))))) {
      await $.stmt($.wcall([$t123], "Open", [], C));
    } else {
      await $.stmt($.wcall([$t123], "Refresh", [], C));
    }
  }
  if ($.truthy($.eq((await $.mv((await $.v(C, "RGReportType")), "ItemIndex")), 0))) {
    {
      const $t125 = (await $.wobj(C, "Kera"));
      await $.stmt($.wcall([$t125], "Connect", [], C));
      await $.stmt((await $.wcall([$t125], "ExportDataset", [(await $.mv((await $.wv([$t125], "DMBC", C, false)), "ResultDSMg")), "FMonitoring", (await $.wv([$t125], "True", C, false))], C)));
    }
  } else {
    {
      const $t126 = (await $.wobj(C, "QRCM_AK_FORM15"));
      await $.wset([$t126], "S", (await $.wcall([$t126], "FOrmat", [(await $.wv([$t126], "rsForm10Caption", C, false)), [(await $.mv((await $.mcall((await $.wv([$t126], "UserGroups", C, false)), "FieldByName", ["DESCRIPTION"])), "AsString"))]], C)), { get: async () => L0["s"], set: async (v) => { L0["s"] = v; }, local: true });
      await $.mset((await $.wv([$t126], "titleLabel", C, false)), "Caption", (await $.wv([$t126], "S", { get: async () => L0["s"], set: async (v) => { L0["s"] = v; }, local: true }, false)));
      { const $t127 = $.sub((await $.mv((await $.wv([$t126], "QRCM_AK_FORM15", C, false)), "ComponentCount")), 1);
        await $.wset([$t126], "Counter", 0, { get: async () => L0["counter"], set: async (v) => { L0["counter"] = v; }, local: true });
        let $t128 = true;
        for (;;) {
          if (!$t128) { await $.wset([$t126], "Counter", $.succ((await $.wv([$t126], "Counter", { get: async () => L0["counter"], set: async (v) => { L0["counter"] = v; }, local: true }, false)), 1), { get: async () => L0["counter"], set: async (v) => { L0["counter"] = v; }, local: true }); }
          $t128 = false;
          if (!($.ord((await $.wv([$t126], "Counter", { get: async () => L0["counter"], set: async (v) => { L0["counter"] = v; }, local: true }, false))) <= $.ord($t127))) break;
          if ($.truthy($.gt((await $.mv((await $.idx((await $.wv([$t126], "Components", C, false)), [(await $.wv([$t126], "Counter", { get: async () => L0["counter"], set: async (v) => { L0["counter"] = v; }, local: true }, false))])), "Tag")), 0))) {
            await $.mset((await $.idx((await $.wv([$t126], "Components", C, false)), [(await $.wv([$t126], "Counter", { get: async () => L0["counter"], set: async (v) => { L0["counter"] = v; }, local: true }, false))])), "Enabled", $.le((await $.mv((await $.idx((await $.wv([$t126], "Components", C, false)), [(await $.wv([$t126], "Counter", { get: async () => L0["counter"], set: async (v) => { L0["counter"] = v; }, local: true }, false))])), "Tag")), (await $.wv([$t126], "PrintDeep", C, false))));
          }
          await $.tick();
        }
      }
      await $.stmt($.wcall([$t126], "Preview", [], C));
    }
  }
  await $.mset((await $.v(C, "btnYeniden")), "Enabled", true);
  return L0.result;
}, {"params": [], "kind": "procedure", "ptypes": []});
  U.method("TfrmBCFilter", "printreport14", async function printreport14(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: undefined, "s": ''};
  if ($.truthy($.not((await $.call(C, "assigned", [(await $.v(C, "QRCM_AK_FORM17"))]))))) {
    await $.set(C, "QRCM_AK_FORM17", (await $.mcall((await $.v(C, "TQRCM_AK_FORM17")), "Create", [Self])));
  }
  {
    const $t129 = (await $.mv((await $.v(C, "DMBC")), "ResultDS2AboutTruoble"));
    if ($.truthy((await $.mv((await $.wv([$t129], "CheckBox6", C, false)), "Checked")))) {
      { const $t130 = await $.iset((await $.wv([$t129], "SQL", C, false)), [21], $.add("where districtid=", (await $.mv((await $.wv([$t129], "DistrictsID", C, false)), "AsString")))); if ($t130 !== undefined) { await $.wset([$t129], "SQL", $t130, C); } }
    }
    if ($.truthy($.not((await $.wv([$t129], "Active", C, false))))) {
      await $.stmt($.wcall([$t129], "Open", [], C));
    } else {
      await $.stmt($.wcall([$t129], "Refresh", [], C));
    }
  }
  if ($.truthy($.eq((await $.mv((await $.v(C, "RGReportType")), "ItemIndex")), 0))) {
    {
      const $t131 = (await $.wobj(C, "Kera"));
      await $.stmt($.wcall([$t131], "Connect", [], C));
      await $.stmt((await $.wcall([$t131], "ExportDataset", [(await $.mv((await $.wv([$t131], "DMBC", C, false)), "ResultDS2AboutTruoble")), "F2", (await $.wv([$t131], "True", C, false))], C)));
    }
  } else {
    {
      const $t132 = (await $.wobj(C, "QRCM_AK_FORM17"));
      await $.wset([$t132], "S", (await $.wcall([$t132], "FOrmat", [(await $.wv([$t132], "rsForm2Caption", C, false)), [(await $.mv((await $.mcall((await $.wv([$t132], "UserGroups", C, false)), "FieldByName", ["DESCRIPTION"])), "AsString"))]], C)), { get: async () => L0["s"], set: async (v) => { L0["s"] = v; }, local: true });
      await $.mset((await $.wv([$t132], "titleLabel", C, false)), "Caption", (await $.wv([$t132], "S", { get: async () => L0["s"], set: async (v) => { L0["s"] = v; }, local: true }, false)));
      await $.stmt($.wcall([$t132], "Preview", [], C));
    }
  }
  return L0.result;
}, {"params": [], "kind": "procedure", "ptypes": []});
  U.method("TfrmBCFilter", "printreport15", async function printreport15(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: undefined, "s": ''};
  if ($.truthy($.not((await $.call(C, "assigned", [(await $.v(C, "QRCM_AK_FORM18"))]))))) {
    await $.set(C, "QRCM_AK_FORM18", (await $.mcall((await $.v(C, "TQRCM_AK_FORM18")), "Create", [Self])));
  }
  {
    const $t133 = (await $.mv((await $.v(C, "DMBC")), "ResultDSMeasures"));
    if ($.truthy((await $.mv((await $.wv([$t133], "CheckBox6", C, false)), "Checked")))) {
      { const $t134 = await $.iset((await $.wv([$t133], "SQL", C, false)), [21], $.add("where districtid=", (await $.mv((await $.wv([$t133], "DistrictsID", C, false)), "AsString")))); if ($t134 !== undefined) { await $.wset([$t133], "SQL", $t134, C); } }
    }
    if ($.truthy($.not((await $.wv([$t133], "Active", C, false))))) {
      await $.stmt($.wcall([$t133], "Open", [], C));
    } else {
      await $.stmt($.wcall([$t133], "Refresh", [], C));
    }
  }
  if ($.truthy($.eq((await $.mv((await $.v(C, "RGReportType")), "ItemIndex")), 0))) {
    {
      const $t135 = (await $.wobj(C, "Kera"));
      await $.stmt($.wcall([$t135], "Connect", [], C));
      await $.stmt((await $.wcall([$t135], "ExportDataset", [(await $.mv((await $.wv([$t135], "DMBC", C, false)), "ResultDSMeasures")), "F2", (await $.wv([$t135], "True", C, false))], C)));
    }
  } else {
    {
      const $t136 = (await $.wobj(C, "QRCM_AK_FORM18"));
      await $.wset([$t136], "S", (await $.wcall([$t136], "FOrmat", [(await $.wv([$t136], "rsForm2Caption", C, false)), [(await $.mv((await $.mcall((await $.wv([$t136], "UserGroups", C, false)), "FieldByName", ["DESCRIPTION"])), "AsString"))]], C)), { get: async () => L0["s"], set: async (v) => { L0["s"] = v; }, local: true });
      await $.mset((await $.wv([$t136], "titleLabel", C, false)), "Caption", (await $.wv([$t136], "S", { get: async () => L0["s"], set: async (v) => { L0["s"] = v; }, local: true }, false)));
      await $.stmt($.wcall([$t136], "Preview", [], C));
    }
  }
  return L0.result;
}, {"params": [], "kind": "procedure", "ptypes": []});
  U.method("TfrmBCFilter", "printreport16", async function printreport16(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: undefined, "s": ''};
  if ($.truthy($.not((await $.call(C, "assigned", [(await $.v(C, "QRCM_AK_FORM8"))]))))) {
    await $.set(C, "QRCM_AK_FORM8", (await $.mcall((await $.v(C, "TQRCM_AK_FORM8")), "Create", [Self])));
  }
  {
    const $t137 = (await $.mv((await $.v(C, "DMBC")), "ResultDSProlongs"));
    if ($.truthy((await $.mv((await $.wv([$t137], "CheckBox6", C, false)), "Checked")))) {
      { const $t138 = await $.iset((await $.wv([$t137], "SQL", C, false)), [21], $.add("where districtid=", (await $.mv((await $.wv([$t137], "DistrictsID", C, false)), "AsString")))); if ($t138 !== undefined) { await $.wset([$t137], "SQL", $t138, C); } }
    }
    if ($.truthy($.not((await $.wv([$t137], "Active", C, false))))) {
      await $.stmt($.wcall([$t137], "Open", [], C));
    } else {
      await $.stmt($.wcall([$t137], "Refresh", [], C));
    }
  }
  if ($.truthy($.eq((await $.mv((await $.v(C, "RGReportType")), "ItemIndex")), 0))) {
    {
      const $t139 = (await $.wobj(C, "Kera"));
      await $.stmt($.wcall([$t139], "Connect", [], C));
      await $.stmt((await $.wcall([$t139], "ExportDataset", [(await $.mv((await $.wv([$t139], "DMBC", C, false)), "ResultDSProlongs")), "F2", (await $.wv([$t139], "True", C, false))], C)));
    }
  } else {
    {
      const $t140 = (await $.wobj(C, "QRCM_AK_FORM8"));
      await $.wset([$t140], "S", (await $.wcall([$t140], "FOrmat", [(await $.wv([$t140], "rsForm16Caption", C, false)), [(await $.mv((await $.mcall((await $.wv([$t140], "UserGroups", C, false)), "FieldByName", ["DESCRIPTION"])), "AsString"))]], C)), { get: async () => L0["s"], set: async (v) => { L0["s"] = v; }, local: true });
      await $.mset((await $.wv([$t140], "titleLabel", C, false)), "Caption", (await $.wv([$t140], "S", { get: async () => L0["s"], set: async (v) => { L0["s"] = v; }, local: true }, false)));
      await $.stmt($.wcall([$t140], "Preview", [], C));
    }
  }
  return L0.result;
}, {"params": [], "kind": "procedure", "ptypes": []});
  U.method("TfrmBCFilter", "printreport17", async function printreport17(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: undefined, "s": ''};
  if ($.truthy($.not((await $.call(C, "assigned", [(await $.v(C, "QRCM_AK_FORM9"))]))))) {
    await $.set(C, "QRCM_AK_FORM9", (await $.mcall((await $.v(C, "TQRCM_AK_FORM9")), "Create", [Self])));
  }
  if ($.truthy($.not((await $.call(C, "assigned", [(await $.v(C, "QRCM_AK_FORM9_2"))]))))) {
    await $.set(C, "QRCM_AK_FORM9_2", (await $.mcall((await $.v(C, "TQRCM_AK_FORM9_2")), "Create", [Self])));
  }
  {
    const $t141 = (await $.mv((await $.v(C, "DMBC")), "ResultDSYPays"));
    if ($.truthy((await $.mv((await $.wv([$t141], "CheckBox6", C, false)), "Checked")))) {
      { const $t142 = await $.iset((await $.wv([$t141], "SQL", C, false)), [21], $.add("where districtid=", (await $.mv((await $.wv([$t141], "DistrictsID", C, false)), "AsString")))); if ($t142 !== undefined) { await $.wset([$t141], "SQL", $t142, C); } }
    }
    if ($.truthy($.not((await $.wv([$t141], "Active", C, false))))) {
      await $.stmt($.wcall([$t141], "Open", [], C));
    } else {
      await $.stmt($.wcall([$t141], "Refresh", [], C));
    }
  }
  if ($.truthy($.eq((await $.mv((await $.v(C, "RGReportType")), "ItemIndex")), 0))) {
    {
      const $t143 = (await $.wobj(C, "Kera"));
      await $.stmt($.wcall([$t143], "Connect", [], C));
      await $.stmt((await $.wcall([$t143], "ExportDataset", [(await $.mv((await $.wv([$t143], "DMBC", C, false)), "ResultDSYPays")), "FLastYearPay", (await $.wv([$t143], "True", C, false))], C)));
    }
  } else {
    {
      const $t144 = (await $.wobj(C, "QRCM_AK_FORM9"));
      await $.wset([$t144], "S", (await $.wcall([$t144], "FOrmat", [(await $.wv([$t144], "rsForm9Caption", C, false)), [(await $.mv((await $.mcall((await $.wv([$t144], "UserGroups", C, false)), "FieldByName", ["DESCRIPTION"])), "AsString"))]], C)), { get: async () => L0["s"], set: async (v) => { L0["s"] = v; }, local: true });
      await $.mset((await $.wv([$t144], "titleLabel", C, false)), "Caption", (await $.wv([$t144], "S", { get: async () => L0["s"], set: async (v) => { L0["s"] = v; }, local: true }, false)));
      await $.stmt($.wcall([$t144], "Preview", [], C));
    }
    {
      const $t145 = (await $.wobj(C, "QRCM_AK_FORM9_2"));
      await $.wset([$t145], "S", (await $.wcall([$t145], "FOrmat", [(await $.wv([$t145], "rsForm9Caption", C, false)), [(await $.mv((await $.mcall((await $.wv([$t145], "UserGroups", C, false)), "FieldByName", ["DESCRIPTION"])), "AsString"))]], C)), { get: async () => L0["s"], set: async (v) => { L0["s"] = v; }, local: true });
      await $.mset((await $.wv([$t145], "titleLabel", C, false)), "Caption", (await $.wv([$t145], "S", { get: async () => L0["s"], set: async (v) => { L0["s"] = v; }, local: true }, false)));
      await $.stmt($.wcall([$t145], "Preview", [], C));
    }
  }
  return L0.result;
}, {"params": [], "kind": "procedure", "ptypes": []});
  U.method("TfrmBCFilter", "printreport18", async function printreport18(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: undefined, "s": ''};
  {
    const $t146 = (await $.mv((await $.v(C, "DMBC")), "ResultDSAboutCrediting"));
    if ($.truthy((await $.mv((await $.wv([$t146], "CheckBox6", C, false)), "Checked")))) {
      { const $t147 = await $.iset((await $.wv([$t146], "SQL", C, false)), [21], $.add("where districtid=", (await $.mv((await $.wv([$t146], "DistrictsID", C, false)), "AsString")))); if ($t147 !== undefined) { await $.wset([$t146], "SQL", $t147, C); } }
    }
    if ($.truthy($.not((await $.wv([$t146], "Active", C, false))))) {
      await $.stmt($.wcall([$t146], "Open", [], C));
    } else {
      await $.stmt($.wcall([$t146], "Refresh", [], C));
    }
  }
  if ($.truthy($.eq((await $.mv((await $.v(C, "RGReportType")), "ItemIndex")), 0))) {
    {
      const $t148 = (await $.wobj(C, "Kera"));
      await $.stmt($.wcall([$t148], "Connect", [], C));
      await $.stmt((await $.wcall([$t148], "ExportDataset", [(await $.mv((await $.wv([$t148], "DMBC", C, false)), "ResultDSAboutCrediting")), "FCredit", (await $.wv([$t148], "True", C, false))], C)));
    }
  } else {
    if ($.truthy($.not((await $.call(C, "assigned", [(await $.v(C, "QRCM_AK_FORM6"))]))))) {
      await $.set(C, "QRCM_AK_FORM6", (await $.mcall((await $.v(C, "TQRCM_AK_FORM6")), "Create", [Self])));
    }
    if ($.truthy($.not((await $.call(C, "assigned", [(await $.v(C, "QRCM_AK_FORM6_2"))]))))) {
      await $.set(C, "QRCM_AK_FORM6_2", (await $.mcall((await $.v(C, "TQRCM_AK_FORM6_2")), "Create", [Self])));
    }
    {
      const $t149 = (await $.wobj(C, "QRCM_AK_FORM6"));
      await $.wset([$t149], "S", (await $.wcall([$t149], "FOrmat", [(await $.wv([$t149], "rsForm18Caption", C, false)), [(await $.mv((await $.mcall((await $.wv([$t149], "UserGroups", C, false)), "FieldByName", ["DESCRIPTION"])), "AsString"))]], C)), { get: async () => L0["s"], set: async (v) => { L0["s"] = v; }, local: true });
      await $.mset((await $.wv([$t149], "titleLabel", C, false)), "Caption", (await $.wv([$t149], "S", { get: async () => L0["s"], set: async (v) => { L0["s"] = v; }, local: true }, false)));
      await $.stmt($.wcall([$t149], "Preview", [], C));
    }
    {
      const $t150 = (await $.wobj(C, "QRCM_AK_FORM6_2"));
      await $.wset([$t150], "S", (await $.wcall([$t150], "FOrmat", [(await $.wv([$t150], "rsForm18Caption", C, false)), [(await $.mv((await $.mcall((await $.wv([$t150], "UserGroups", C, false)), "FieldByName", ["DESCRIPTION"])), "AsString"))]], C)), { get: async () => L0["s"], set: async (v) => { L0["s"] = v; }, local: true });
      await $.mset((await $.wv([$t150], "titleLabel", C, false)), "Caption", (await $.wv([$t150], "S", { get: async () => L0["s"], set: async (v) => { L0["s"] = v; }, local: true }, false)));
      await $.stmt($.wcall([$t150], "Preview", [], C));
    }
  }
  return L0.result;
}, {"params": [], "kind": "procedure", "ptypes": []});
  U.method("TfrmBCFilter", "printreport19", async function printreport19(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: undefined, "s": ''};
  if ($.truthy($.not((await $.call(C, "assigned", [(await $.v(C, "QRCM_AK_FORM7"))]))))) {
    await $.set(C, "QRCM_AK_FORM7", (await $.mcall((await $.v(C, "TQRCM_AK_FORM7")), "Create", [Self])));
  }
  {
    const $t151 = (await $.mv((await $.v(C, "DMBC")), "ResultDSCreditPaying"));
    if ($.truthy((await $.mv((await $.wv([$t151], "CheckBox6", C, false)), "Checked")))) {
      { const $t152 = await $.iset((await $.wv([$t151], "SQL", C, false)), [21], $.add("where districtid=", (await $.mv((await $.wv([$t151], "DistrictsID", C, false)), "AsString")))); if ($t152 !== undefined) { await $.wset([$t151], "SQL", $t152, C); } }
    }
    if ($.truthy($.not((await $.wv([$t151], "Active", C, false))))) {
      await $.stmt($.wcall([$t151], "Open", [], C));
    } else {
      await $.stmt($.wcall([$t151], "Refresh", [], C));
    }
  }
  if ($.truthy($.eq((await $.mv((await $.v(C, "RGReportType")), "ItemIndex")), 0))) {
    {
      const $t153 = (await $.wobj(C, "Kera"));
      await $.stmt($.wcall([$t153], "Connect", [], C));
      await $.stmt((await $.wcall([$t153], "ExportDataset", [(await $.mv((await $.wv([$t153], "DMBC", C, false)), "ResultDSCreditPaying")), "F2", (await $.wv([$t153], "True", C, false))], C)));
    }
  } else {
    {
      const $t154 = (await $.wobj(C, "QRCM_AK_FORM7"));
      await $.wset([$t154], "S", (await $.wcall([$t154], "FOrmat", [(await $.wv([$t154], "rsForm19Caption", C, false)), [(await $.mv((await $.mcall((await $.wv([$t154], "UserGroups", C, false)), "FieldByName", ["DESCRIPTION"])), "AsString"))]], C)), { get: async () => L0["s"], set: async (v) => { L0["s"] = v; }, local: true });
      await $.mset((await $.wv([$t154], "titleLabel", C, false)), "Caption", (await $.wv([$t154], "S", { get: async () => L0["s"], set: async (v) => { L0["s"] = v; }, local: true }, false)));
      await $.stmt($.wcall([$t154], "Preview", [], C));
    }
  }
  return L0.result;
}, {"params": [], "kind": "procedure", "ptypes": []});
  U.method("TfrmBCFilter", "printreport20", async function printreport20(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: undefined, "s": ''};
  {
    const $t155 = (await $.mv((await $.v(C, "DMBC")), "ResultDSWBMain"));
    if ($.truthy((await $.mv((await $.wv([$t155], "CheckBox6", C, false)), "Checked")))) {
      { const $t156 = await $.iset((await $.wv([$t155], "SQL", C, false)), [21], $.add("where districtid=", (await $.mv((await $.wv([$t155], "DistrictsID", C, false)), "AsString")))); if ($t156 !== undefined) { await $.wset([$t155], "SQL", $t156, C); } }
    }
    if ($.truthy($.not((await $.wv([$t155], "Active", C, false))))) {
      await $.stmt($.wcall([$t155], "Open", [], C));
    } else {
      await $.stmt($.wcall([$t155], "Refresh", [], C));
    }
  }
  if ($.truthy($.eq((await $.mv((await $.v(C, "RGReportType")), "ItemIndex")), 0))) {
    {
      const $t157 = (await $.wobj(C, "Kera"));
      await $.stmt($.wcall([$t157], "Connect", [], C));
      await $.stmt((await $.wcall([$t157], "ExportDataset", [(await $.mv((await $.wv([$t157], "DMBC", C, false)), "ResultDSWBMain")), "FWB", (await $.wv([$t157], "True", C, false))], C)));
    }
  } else {
    if ($.truthy($.not((await $.call(C, "assigned", [(await $.v(C, "QRCM_AK_FORM4"))]))))) {
      await $.set(C, "QRCM_AK_FORM4", (await $.mcall((await $.v(C, "TQRCM_AK_FORM4")), "Create", [Self])));
    }
    if ($.truthy($.not((await $.call(C, "assigned", [(await $.v(C, "QRCM_AK_FORM4_2"))]))))) {
      await $.set(C, "QRCM_AK_FORM4_2", (await $.mcall((await $.v(C, "TQRCM_AK_FORM4_2")), "Create", [Self])));
    }
    L0["s"] = (await $.call(C, "FOrmat", [(await $.v(C, "rsForm20Caption")), [(await $.mv((await $.mcall((await $.v(C, "UserGroups")), "FieldByName", ["DESCRIPTION"])), "AsString"))]]));
    await $.mset((await $.mv((await $.v(C, "QRCM_AK_FORM4_2")), "titleLabel")), "Caption", L0["s"]);
    await $.mcall((await $.v(C, "QRCM_AK_FORM4_2")), "Preview", []);
    await $.mset((await $.mv((await $.v(C, "QRCM_AK_FORM4")), "titleLabel")), "Caption", L0["s"]);
    await $.mcall((await $.v(C, "QRCM_AK_FORM4")), "Preview", []);
  }
  return L0.result;
}, {"params": [], "kind": "procedure", "ptypes": []});
  U.method("TfrmBCFilter", "printreport21", async function printreport21(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: undefined};
  {
    const $t158 = (await $.mv((await $.v(C, "DMBC")), "ResultDSWBActive"));
    if ($.truthy((await $.mv((await $.wv([$t158], "CheckBox6", C, false)), "Checked")))) {
      { const $t159 = await $.iset((await $.wv([$t158], "SQL", C, false)), [21], $.add("where districtid=", (await $.mv((await $.wv([$t158], "DistrictsID", C, false)), "AsString")))); if ($t159 !== undefined) { await $.wset([$t158], "SQL", $t159, C); } }
    }
    if ($.truthy($.not((await $.wv([$t158], "Active", C, false))))) {
      await $.stmt($.wcall([$t158], "Open", [], C));
    } else {
      await $.stmt($.wcall([$t158], "Refresh", [], C));
    }
  }
  if ($.truthy($.eq((await $.mv((await $.v(C, "RGReportType")), "ItemIndex")), 0))) {
    {
      const $t160 = (await $.wobj(C, "Kera"));
      await $.stmt($.wcall([$t160], "Connect", [], C));
      await $.stmt((await $.wcall([$t160], "ExportDataset", [(await $.mv((await $.wv([$t160], "DMBC", C, false)), "ResultDSWBActive")), "FWB", (await $.wv([$t160], "True", C, false))], C)));
    }
  } else {
    if ($.truthy($.not((await $.call(C, "assigned", [(await $.v(C, "QRCM_AK_FORM5"))]))))) {
      await $.set(C, "QRCM_AK_FORM5", (await $.mcall((await $.v(C, "TQRCM_AK_FORM5")), "Create", [Self])));
    }
    if ($.truthy($.not((await $.call(C, "assigned", [(await $.v(C, "QRCM_AK_FORM5_2"))]))))) {
      await $.set(C, "QRCM_AK_FORM5_2", (await $.mcall((await $.v(C, "TQRCM_AK_FORM5_2")), "Create", [Self])));
    }
    await $.mcall((await $.v(C, "QRCM_AK_FORM5")), "Preview", []);
    await $.mcall((await $.v(C, "QRCM_AK_FORM5_2")), "Preview", []);
  }
  return L0.result;
}, {"params": [], "kind": "procedure", "ptypes": []});
  U.method("TfrmBCFilter", "printreport22", async function printreport22(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: undefined};
  {
    const $t161 = (await $.mv((await $.v(C, "DMBC")), "ResultDSMtr"));
    if ($.truthy((await $.mv((await $.wv([$t161], "CheckBox6", C, false)), "Checked")))) {
      { const $t162 = await $.iset((await $.wv([$t161], "SQL", C, false)), [21], $.add("where districtid=", (await $.mv((await $.wv([$t161], "DistrictsID", C, false)), "AsString")))); if ($t162 !== undefined) { await $.wset([$t161], "SQL", $t162, C); } }
    }
    if ($.truthy($.not((await $.wv([$t161], "Active", C, false))))) {
      await $.stmt($.wcall([$t161], "Open", [], C));
    } else {
      await $.stmt($.wcall([$t161], "Refresh", [], C));
    }
  }
  if ($.truthy($.eq((await $.mv((await $.v(C, "RGReportType")), "ItemIndex")), 0))) {
    {
      const $t163 = (await $.wobj(C, "Kera"));
      await $.stmt($.wcall([$t163], "Connect", [], C));
      await $.stmt((await $.wcall([$t163], "ExportDataset", [(await $.mv((await $.wv([$t163], "DMBC", C, false)), "ResultDSMTr")), "FWB", (await $.wv([$t163], "True", C, false))], C)));
    }
  } else {
    if ($.truthy($.not((await $.call(C, "assigned", [(await $.v(C, "QRCM_AK_FORM14"))]))))) {
      await $.set(C, "QRCM_AK_FORM14", (await $.mcall((await $.v(C, "TQRCM_AK_FORM14")), "Create", [Self])));
    }
    if ($.truthy($.not((await $.call(C, "assigned", [(await $.v(C, "QRCM_AK_FORM14_2"))]))))) {
      await $.set(C, "QRCM_AK_FORM14_2", (await $.mcall((await $.v(C, "TQRCM_AK_FORM14_2")), "Create", [Self])));
    }
    await $.mcall((await $.v(C, "QRCM_AK_FORM14")), "Preview", []);
    await $.mcall((await $.v(C, "QRCM_AK_FORM14_2")), "Preview", []);
  }
  return L0.result;
}, {"params": [], "kind": "procedure", "ptypes": []});
  U.method("TfrmBCFilter", "printreport23", async function printreport23(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: undefined, "s": '', "counter": 0};
  {
    const $t164 = (await $.mv((await $.v(C, "DMBC")), "ResultDSPurposes"));
    if ($.truthy((await $.mv((await $.wv([$t164], "CheckBox6", C, false)), "Checked")))) {
      { const $t165 = await $.iset((await $.wv([$t164], "SQL", C, false)), [21], $.add("where districtid=", (await $.mv((await $.wv([$t164], "DistrictsID", C, false)), "AsString")))); if ($t165 !== undefined) { await $.wset([$t164], "SQL", $t165, C); } }
    }
    if ($.truthy($.not((await $.wv([$t164], "Active", C, false))))) {
      await $.stmt($.wcall([$t164], "Open", [], C));
    } else {
      await $.stmt($.wcall([$t164], "Refresh", [], C));
    }
  }
  if ($.truthy($.eq((await $.mv((await $.v(C, "RGReportType")), "ItemIndex")), 0))) {
    {
      const $t166 = (await $.wobj(C, "Kera"));
      await $.stmt($.wcall([$t166], "Connect", [], C));
      await $.stmt((await $.wcall([$t166], "ExportDataset", [(await $.mv((await $.wv([$t166], "DMBC", C, false)), "ResultDSPurposes")), "FPurposes", (await $.wv([$t166], "True", C, false))], C)));
    }
  } else {
    if ($.truthy($.not((await $.call(C, "assigned", [(await $.v(C, "QRFPurposeRep"))]))))) {
      await $.set(C, "QRFPurposeRep", (await $.mcall((await $.v(C, "TQRFPurposeRep")), "Create", [Self])));
    }
    {
      const $t167 = (await $.wobj(C, "QRFPurposeRep"));
      await $.wset([$t167], "S", (await $.wcall([$t167], "FOrmat", [(await $.wv([$t167], "rsForm2Caption", C, false)), [(await $.mv((await $.mcall((await $.wv([$t167], "UserGroups", C, false)), "FieldByName", ["DESCRIPTION"])), "AsString"))]], C)), { get: async () => L0["s"], set: async (v) => { L0["s"] = v; }, local: true });
      await $.mset((await $.wv([$t167], "titleLabel", C, false)), "Caption", (await $.wv([$t167], "S", { get: async () => L0["s"], set: async (v) => { L0["s"] = v; }, local: true }, false)));
      await $.mset((await $.wv([$t167], "qrlbr", C, false)), "Enabled", (await $.mv((await $.wv([$t167], "CheckBox2", C, false)), "Checked")));
      await $.mset((await $.wv([$t167], "qrtbr", C, false)), "Enabled", (await $.mv((await $.wv([$t167], "CheckBox2", C, false)), "Checked")));
      if ($.truthy((await $.mv((await $.wv([$t167], "CheckBox4", C, false)), "Checked")))) {
        await $.wset([$t167], "PrintDeep", (await $.wcall([$t167], "StrToInt", [(await $.wcall([$t167], "FloatToStr", [(await $.wcall([$t167], "Round", [(await $.wcall([$t167], "power", [2, $.sub(5, (await $.mv((await $.wv([$t167], "cbPrintDeep", C, false)), "ItemIndex")))], C))], C))], C))], C)), C);
      } else {
        await $.wset([$t167], "PrintDeep", 64, C);
      }
      { const $t168 = $.sub((await $.mv((await $.wv([$t167], "QRFPurposeRep", C, false)), "ComponentCount")), 1);
        await $.wset([$t167], "Counter", 0, { get: async () => L0["counter"], set: async (v) => { L0["counter"] = v; }, local: true });
        let $t169 = true;
        for (;;) {
          if (!$t169) { await $.wset([$t167], "Counter", $.succ((await $.wv([$t167], "Counter", { get: async () => L0["counter"], set: async (v) => { L0["counter"] = v; }, local: true }, false)), 1), { get: async () => L0["counter"], set: async (v) => { L0["counter"] = v; }, local: true }); }
          $t169 = false;
          if (!($.ord((await $.wv([$t167], "Counter", { get: async () => L0["counter"], set: async (v) => { L0["counter"] = v; }, local: true }, false))) <= $.ord($t168))) break;
          if ($.truthy($.gt((await $.mv((await $.idx((await $.wv([$t167], "Components", C, false)), [(await $.wv([$t167], "Counter", { get: async () => L0["counter"], set: async (v) => { L0["counter"] = v; }, local: true }, false))])), "Tag")), 0))) {
            await $.mset((await $.idx((await $.wv([$t167], "Components", C, false)), [(await $.wv([$t167], "Counter", { get: async () => L0["counter"], set: async (v) => { L0["counter"] = v; }, local: true }, false))])), "Enabled", $.le((await $.mv((await $.idx((await $.wv([$t167], "Components", C, false)), [(await $.wv([$t167], "Counter", { get: async () => L0["counter"], set: async (v) => { L0["counter"] = v; }, local: true }, false))])), "Tag")), (await $.wv([$t167], "PrintDeep", C, false))));
          }
          await $.tick();
        }
      }
      await $.stmt($.wcall([$t167], "Preview", [], C));
    }
  }
  return L0.result;
}, {"params": [], "kind": "procedure", "ptypes": []});
  U.method("TfrmBCFilter", "printreport24", async function printreport24(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: undefined, "s": '', "counter": 0};
  {
    const $t170 = (await $.mv((await $.v(C, "DMBC")), "ResultDS3Full"));
    if ($.truthy($.not((await $.wv([$t170], "Active", C, false))))) {
      await $.stmt($.wcall([$t170], "Open", [], C));
    } else {
      await $.stmt($.wcall([$t170], "Refresh", [], C));
    }
  }
  if ($.truthy($.eq((await $.mv((await $.v(C, "RGReportType")), "ItemIndex")), 0))) {
    {
      const $t171 = (await $.wobj(C, "Kera"));
      await $.stmt($.wcall([$t171], "Connect", [], C));
      await $.stmt((await $.wcall([$t171], "ExportDataset", [(await $.mv((await $.wv([$t171], "DMBC", C, false)), "ResultDS3Full")), "F3Types", (await $.wv([$t171], "True", C, false))], C)));
    }
  } else {
    if ($.truthy($.not((await $.call(C, "assigned", [(await $.v(C, "QRF3Branch"))]))))) {
      await $.set(C, "QRF3Branch", (await $.mcall((await $.v(C, "TQRF3Branch")), "Create", [Self])));
    }
    {
      const $t172 = (await $.wobj(C, "QRF3Branch"));
      await $.wset([$t172], "S", (await $.wcall([$t172], "FOrmat", [(await $.wv([$t172], "rsForm2Caption", C, false)), [(await $.mv((await $.mcall((await $.wv([$t172], "UserGroups", C, false)), "FieldByName", ["DESCRIPTION"])), "AsString"))]], C)), { get: async () => L0["s"], set: async (v) => { L0["s"] = v; }, local: true });
      await $.mset((await $.wv([$t172], "titleLabel", C, false)), "Caption", (await $.wv([$t172], "S", { get: async () => L0["s"], set: async (v) => { L0["s"] = v; }, local: true }, false)));
      await $.mset((await $.wv([$t172], "qrlBeginDate", C, false)), "Caption", (await $.wcall([$t172], "FormatDateTime", ["dd/mm/yyyy", (await $.mv((await $.wv([$t172], "BDateP", C, false)), "DateTime"))], C)));
      await $.mset((await $.wv([$t172], "qrlEndDate", C, false)), "Caption", (await $.wcall([$t172], "FormatDateTime", ["dd/mm/yyyy", (await $.mv((await $.wv([$t172], "EDateP", C, false)), "DateTime"))], C)));
      if ($.truthy((await $.mv((await $.wv([$t172], "CheckBox4", C, false)), "Checked")))) {
        await $.wset([$t172], "PrintDeep", (await $.wcall([$t172], "StrToInt", [(await $.wcall([$t172], "FloatToStr", [(await $.wcall([$t172], "Round", [(await $.wcall([$t172], "power", [2, $.sub(5, (await $.mv((await $.wv([$t172], "cbPrintDeep", C, false)), "ItemIndex")))], C))], C))], C))], C)), C);
      } else {
        await $.wset([$t172], "PrintDeep", 32, C);
      }
      { const $t173 = $.sub((await $.mv((await $.wv([$t172], "QRF3Branch", C, false)), "ComponentCount")), 1);
        await $.wset([$t172], "Counter", 0, { get: async () => L0["counter"], set: async (v) => { L0["counter"] = v; }, local: true });
        let $t174 = true;
        for (;;) {
          if (!$t174) { await $.wset([$t172], "Counter", $.succ((await $.wv([$t172], "Counter", { get: async () => L0["counter"], set: async (v) => { L0["counter"] = v; }, local: true }, false)), 1), { get: async () => L0["counter"], set: async (v) => { L0["counter"] = v; }, local: true }); }
          $t174 = false;
          if (!($.ord((await $.wv([$t172], "Counter", { get: async () => L0["counter"], set: async (v) => { L0["counter"] = v; }, local: true }, false))) <= $.ord($t173))) break;
          if ($.truthy($.gt((await $.mv((await $.idx((await $.wv([$t172], "Components", C, false)), [(await $.wv([$t172], "Counter", { get: async () => L0["counter"], set: async (v) => { L0["counter"] = v; }, local: true }, false))])), "Tag")), 0))) {
            await $.mset((await $.idx((await $.wv([$t172], "Components", C, false)), [(await $.wv([$t172], "Counter", { get: async () => L0["counter"], set: async (v) => { L0["counter"] = v; }, local: true }, false))])), "Enabled", $.le((await $.mv((await $.idx((await $.wv([$t172], "Components", C, false)), [(await $.wv([$t172], "Counter", { get: async () => L0["counter"], set: async (v) => { L0["counter"] = v; }, local: true }, false))])), "Tag")), (await $.wv([$t172], "PrintDeep", C, false))));
          }
          await $.tick();
        }
      }
      await $.stmt($.wcall([$t172], "Preview", [], C));
    }
  }
  return L0.result;
}, {"params": [], "kind": "procedure", "ptypes": []});
  U.method("TfrmBCFilter", "printreport25", async function printreport25(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: undefined, "s": '', "counter": 0};
  {
    const $t175 = (await $.mv((await $.v(C, "DMBC")), "ResultDS3Filial"));
    if ($.truthy($.not((await $.wv([$t175], "Active", C, false))))) {
      await $.stmt($.wcall([$t175], "Open", [], C));
    } else {
      await $.stmt($.wcall([$t175], "Refresh", [], C));
    }
  }
  if ($.truthy($.eq((await $.mv((await $.v(C, "RGReportType")), "ItemIndex")), 0))) {
    {
      const $t176 = (await $.wobj(C, "Kera"));
      await $.stmt($.wcall([$t176], "Connect", [], C));
      await $.stmt((await $.wcall([$t176], "ExportDataset", [(await $.mv((await $.wv([$t176], "DMBC", C, false)), "ResultDS3Filial")), "F3Filial", (await $.wv([$t176], "True", C, false))], C)));
    }
  } else {
    if ($.truthy($.not((await $.call(C, "assigned", [(await $.v(C, "QRF3Filial"))]))))) {
      await $.set(C, "QRF3Filial", (await $.mcall((await $.v(C, "TQRF3Filial")), "Create", [Self])));
    }
    {
      const $t177 = (await $.wobj(C, "QRF3Filial"));
      await $.wset([$t177], "S", (await $.wcall([$t177], "FOrmat", [(await $.wv([$t177], "rsForm2Caption", C, false)), [(await $.mv((await $.mcall((await $.wv([$t177], "UserGroups", C, false)), "FieldByName", ["DESCRIPTION"])), "AsString"))]], C)), { get: async () => L0["s"], set: async (v) => { L0["s"] = v; }, local: true });
      await $.mset((await $.wv([$t177], "titleLabel", C, false)), "Caption", (await $.wv([$t177], "S", { get: async () => L0["s"], set: async (v) => { L0["s"] = v; }, local: true }, false)));
      await $.mset((await $.wv([$t177], "qrlBeginDate", C, false)), "Caption", (await $.wcall([$t177], "FormatDateTime", ["dd/mm/yyyy", (await $.mv((await $.wv([$t177], "BDateP", C, false)), "DateTime"))], C)));
      await $.mset((await $.wv([$t177], "qrlEndDate", C, false)), "Caption", (await $.wcall([$t177], "FormatDateTime", ["dd/mm/yyyy", (await $.mv((await $.wv([$t177], "EDateP", C, false)), "DateTime"))], C)));
      if ($.truthy((await $.mv((await $.wv([$t177], "CheckBox4", C, false)), "Checked")))) {
        await $.wset([$t177], "PrintDeep", (await $.wcall([$t177], "StrToInt", [(await $.wcall([$t177], "FloatToStr", [(await $.wcall([$t177], "Round", [(await $.wcall([$t177], "power", [2, $.sub(5, (await $.mv((await $.wv([$t177], "cbPrintDeep", C, false)), "ItemIndex")))], C))], C))], C))], C)), C);
      } else {
        await $.wset([$t177], "PrintDeep", 32, C);
      }
      { const $t178 = $.sub((await $.mv((await $.wv([$t177], "QRF3Filial", C, false)), "ComponentCount")), 1);
        await $.wset([$t177], "Counter", 0, { get: async () => L0["counter"], set: async (v) => { L0["counter"] = v; }, local: true });
        let $t179 = true;
        for (;;) {
          if (!$t179) { await $.wset([$t177], "Counter", $.succ((await $.wv([$t177], "Counter", { get: async () => L0["counter"], set: async (v) => { L0["counter"] = v; }, local: true }, false)), 1), { get: async () => L0["counter"], set: async (v) => { L0["counter"] = v; }, local: true }); }
          $t179 = false;
          if (!($.ord((await $.wv([$t177], "Counter", { get: async () => L0["counter"], set: async (v) => { L0["counter"] = v; }, local: true }, false))) <= $.ord($t178))) break;
          if ($.truthy($.gt((await $.mv((await $.idx((await $.wv([$t177], "Components", C, false)), [(await $.wv([$t177], "Counter", { get: async () => L0["counter"], set: async (v) => { L0["counter"] = v; }, local: true }, false))])), "Tag")), 0))) {
            await $.mset((await $.idx((await $.wv([$t177], "Components", C, false)), [(await $.wv([$t177], "Counter", { get: async () => L0["counter"], set: async (v) => { L0["counter"] = v; }, local: true }, false))])), "Enabled", $.le((await $.mv((await $.idx((await $.wv([$t177], "Components", C, false)), [(await $.wv([$t177], "Counter", { get: async () => L0["counter"], set: async (v) => { L0["counter"] = v; }, local: true }, false))])), "Tag")), (await $.wv([$t177], "PrintDeep", C, false))));
          }
          await $.tick();
        }
      }
      await $.stmt($.wcall([$t177], "Preview", [], C));
    }
  }
  return L0.result;
}, {"params": [], "kind": "procedure", "ptypes": []});
  U.method("TfrmBCFilter", "printreport26", async function printreport26(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: undefined, "s": '', "counter": 0};
  {
    const $t180 = (await $.mv((await $.v(C, "DMBC")), "ResultDS3Proj"));
    if ($.truthy($.not((await $.wv([$t180], "Active", C, false))))) {
      await $.stmt($.wcall([$t180], "Open", [], C));
    } else {
      await $.stmt($.wcall([$t180], "Refresh", [], C));
    }
  }
  if ($.truthy($.eq((await $.mv((await $.v(C, "RGReportType")), "ItemIndex")), 0))) {
    {
      const $t181 = (await $.wobj(C, "Kera"));
      await $.stmt($.wcall([$t181], "Connect", [], C));
      await $.stmt((await $.wcall([$t181], "ExportDataset", [(await $.mv((await $.wv([$t181], "DMBC", C, false)), "ResultDS3Proj")), "F3Proj", (await $.wv([$t181], "True", C, false))], C)));
    }
  } else {
    if ($.truthy($.not((await $.call(C, "assigned", [(await $.v(C, "QRF3Proj"))]))))) {
      await $.set(C, "QRF3Proj", (await $.mcall((await $.v(C, "TQRF3Proj")), "Create", [Self])));
    }
    {
      const $t182 = (await $.wobj(C, "QRF3Proj"));
      await $.wset([$t182], "S", (await $.wcall([$t182], "FOrmat", [(await $.wv([$t182], "rsForm2Caption", C, false)), [(await $.mv((await $.mcall((await $.wv([$t182], "UserGroups", C, false)), "FieldByName", ["DESCRIPTION"])), "AsString"))]], C)), { get: async () => L0["s"], set: async (v) => { L0["s"] = v; }, local: true });
      await $.mset((await $.wv([$t182], "titleLabel", C, false)), "Caption", (await $.wv([$t182], "S", { get: async () => L0["s"], set: async (v) => { L0["s"] = v; }, local: true }, false)));
      await $.mset((await $.wv([$t182], "qrlBeginDate", C, false)), "Caption", (await $.wcall([$t182], "FormatDateTime", ["dd/mm/yyyy", (await $.mv((await $.wv([$t182], "BDateP", C, false)), "DateTime"))], C)));
      await $.mset((await $.wv([$t182], "qrlEndDate", C, false)), "Caption", (await $.wcall([$t182], "FormatDateTime", ["dd/mm/yyyy", (await $.mv((await $.wv([$t182], "EDateP", C, false)), "DateTime"))], C)));
      if ($.truthy((await $.mv((await $.wv([$t182], "CheckBox4", C, false)), "Checked")))) {
        await $.wset([$t182], "PrintDeep", (await $.wcall([$t182], "StrToInt", [(await $.wcall([$t182], "FloatToStr", [(await $.wcall([$t182], "Round", [(await $.wcall([$t182], "power", [2, $.sub(5, (await $.mv((await $.wv([$t182], "cbPrintDeep", C, false)), "ItemIndex")))], C))], C))], C))], C)), C);
      } else {
        await $.wset([$t182], "PrintDeep", 32, C);
      }
      { const $t183 = $.sub((await $.mv((await $.wv([$t182], "QRF3Proj", C, false)), "ComponentCount")), 1);
        await $.wset([$t182], "Counter", 0, { get: async () => L0["counter"], set: async (v) => { L0["counter"] = v; }, local: true });
        let $t184 = true;
        for (;;) {
          if (!$t184) { await $.wset([$t182], "Counter", $.succ((await $.wv([$t182], "Counter", { get: async () => L0["counter"], set: async (v) => { L0["counter"] = v; }, local: true }, false)), 1), { get: async () => L0["counter"], set: async (v) => { L0["counter"] = v; }, local: true }); }
          $t184 = false;
          if (!($.ord((await $.wv([$t182], "Counter", { get: async () => L0["counter"], set: async (v) => { L0["counter"] = v; }, local: true }, false))) <= $.ord($t183))) break;
          if ($.truthy($.gt((await $.mv((await $.idx((await $.wv([$t182], "Components", C, false)), [(await $.wv([$t182], "Counter", { get: async () => L0["counter"], set: async (v) => { L0["counter"] = v; }, local: true }, false))])), "Tag")), 0))) {
            await $.mset((await $.idx((await $.wv([$t182], "Components", C, false)), [(await $.wv([$t182], "Counter", { get: async () => L0["counter"], set: async (v) => { L0["counter"] = v; }, local: true }, false))])), "Enabled", $.le((await $.mv((await $.idx((await $.wv([$t182], "Components", C, false)), [(await $.wv([$t182], "Counter", { get: async () => L0["counter"], set: async (v) => { L0["counter"] = v; }, local: true }, false))])), "Tag")), (await $.wv([$t182], "PrintDeep", C, false))));
          }
          await $.tick();
        }
      }
      await $.stmt($.wcall([$t182], "Preview", [], C));
    }
  }
  return L0.result;
}, {"params": [], "kind": "procedure", "ptypes": []});
  U.method("TfrmBCFilter", "printreport27", async function printreport27(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: undefined, "s": '', "counter": 0};
  {
    const $t185 = (await $.mv((await $.v(C, "DMBC")), "ResultDSabLegM"));
    if ($.truthy($.not((await $.wv([$t185], "Active", C, false))))) {
      await $.stmt($.wcall([$t185], "Open", [], C));
    } else {
      await $.stmt($.wcall([$t185], "Refresh", [], C));
    }
  }
  if ($.truthy($.eq((await $.mv((await $.v(C, "RGReportType")), "ItemIndex")), 0))) {
    {
      const $t186 = (await $.wobj(C, "Kera"));
      await $.stmt($.wcall([$t186], "Connect", [], C));
      await $.stmt((await $.wcall([$t186], "ExportDataset", [(await $.mv((await $.wv([$t186], "DMBC", C, false)), "ResultDSabLegM")), "F3Proj", (await $.wv([$t186], "True", C, false))], C)));
    }
  } else {
    if ($.truthy($.not((await $.call(C, "assigned", [(await $.v(C, "QRF3abLegM"))]))))) {
      await $.set(C, "QRF3abLegM", (await $.mcall((await $.v(C, "TQRF3abLegM")), "Create", [Self])));
    }
    {
      const $t187 = (await $.wobj(C, "QRF3abLegM"));
      await $.wset([$t187], "S", (await $.wcall([$t187], "FOrmat", [(await $.wv([$t187], "rsForm26Caption", C, false)), [(await $.mv((await $.mcall((await $.wv([$t187], "UserGroups", C, false)), "FieldByName", ["DESCRIPTION"])), "AsString"))]], C)), { get: async () => L0["s"], set: async (v) => { L0["s"] = v; }, local: true });
      await $.mset((await $.wv([$t187], "titleLabel", C, false)), "Caption", (await $.wv([$t187], "S", { get: async () => L0["s"], set: async (v) => { L0["s"] = v; }, local: true }, false)));
      await $.mset((await $.wv([$t187], "qrlBeginDate", C, false)), "Caption", (await $.wcall([$t187], "FormatDateTime", ["dd/mm/yyyy", (await $.mv((await $.wv([$t187], "BDateP", C, false)), "DateTime"))], C)));
      await $.mset((await $.wv([$t187], "qrlEndDate", C, false)), "Caption", (await $.wcall([$t187], "FormatDateTime", ["dd/mm/yyyy", (await $.mv((await $.wv([$t187], "EDateP", C, false)), "DateTime"))], C)));
      if ($.truthy((await $.mv((await $.wv([$t187], "CheckBox4", C, false)), "Checked")))) {
        await $.wset([$t187], "PrintDeep", (await $.wcall([$t187], "StrToInt", [(await $.wcall([$t187], "FloatToStr", [(await $.wcall([$t187], "Round", [(await $.wcall([$t187], "power", [2, $.sub(5, (await $.mv((await $.wv([$t187], "cbPrintDeep", C, false)), "ItemIndex")))], C))], C))], C))], C)), C);
      } else {
        await $.wset([$t187], "PrintDeep", 32, C);
      }
      { const $t188 = $.sub((await $.mv((await $.wv([$t187], "QRF3abLegM", C, false)), "ComponentCount")), 1);
        await $.wset([$t187], "Counter", 0, { get: async () => L0["counter"], set: async (v) => { L0["counter"] = v; }, local: true });
        let $t189 = true;
        for (;;) {
          if (!$t189) { await $.wset([$t187], "Counter", $.succ((await $.wv([$t187], "Counter", { get: async () => L0["counter"], set: async (v) => { L0["counter"] = v; }, local: true }, false)), 1), { get: async () => L0["counter"], set: async (v) => { L0["counter"] = v; }, local: true }); }
          $t189 = false;
          if (!($.ord((await $.wv([$t187], "Counter", { get: async () => L0["counter"], set: async (v) => { L0["counter"] = v; }, local: true }, false))) <= $.ord($t188))) break;
          if ($.truthy($.gt((await $.mv((await $.idx((await $.wv([$t187], "Components", C, false)), [(await $.wv([$t187], "Counter", { get: async () => L0["counter"], set: async (v) => { L0["counter"] = v; }, local: true }, false))])), "Tag")), 0))) {
            await $.mset((await $.idx((await $.wv([$t187], "Components", C, false)), [(await $.wv([$t187], "Counter", { get: async () => L0["counter"], set: async (v) => { L0["counter"] = v; }, local: true }, false))])), "Enabled", $.le((await $.mv((await $.idx((await $.wv([$t187], "Components", C, false)), [(await $.wv([$t187], "Counter", { get: async () => L0["counter"], set: async (v) => { L0["counter"] = v; }, local: true }, false))])), "Tag")), (await $.wv([$t187], "PrintDeep", C, false))));
          }
          await $.tick();
        }
      }
      await $.stmt($.wcall([$t187], "Preview", [], C));
    }
  }
  return L0.result;
}, {"params": [], "kind": "procedure", "ptypes": []});
  U.method("TfrmBCFilter", "printreport28", async function printreport28(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: undefined, "s": '', "counter": 0};
  try {
    {
      const $t191 = (await $.mv((await $.v(C, "DMBC")), "ResultDSProviz"));
      await $.stmt($.wcall([$t191], "Close", [], C));
      await $.stmt($.wcall([$t191], "open", [], C));
    }
  } catch ($t190) {
    $.rethrowControl($t190);
    $.handled($t190);
  }
  if ($.truthy($.eq((await $.mv((await $.v(C, "RGReportType")), "ItemIndex")), 0))) {
    {
      const $t192 = (await $.wobj(C, "Kera"));
      await $.stmt($.wcall([$t192], "Connect", [], C));
      await $.stmt((await $.wcall([$t192], "ExportDataset", [(await $.mv((await $.wv([$t192], "DMBC", C, false)), "ResultDSProviz")), "Ehtiyyat", (await $.wv([$t192], "True", C, false))], C)));
    }
  } else {
    if ($.truthy($.not((await $.call(C, "assigned", [(await $.v(C, "QRFProviz"))]))))) {
      await $.set(C, "QRFProviz", (await $.mcall((await $.v(C, "TQRFProviz")), "Create", [Self])));
    }
    {
      const $t193 = (await $.wobj(C, "QRFProviz"));
      await $.wset([$t193], "S", (await $.wcall([$t193], "FOrmat", [(await $.wv([$t193], "rsForm28Caption", C, false)), [(await $.mv((await $.mcall((await $.wv([$t193], "UserGroups", C, false)), "FieldByName", ["DESCRIPTION"])), "AsString"))]], C)), { get: async () => L0["s"], set: async (v) => { L0["s"] = v; }, local: true });
      await $.mset((await $.wv([$t193], "titleLabel", C, false)), "Caption", (await $.wv([$t193], "S", { get: async () => L0["s"], set: async (v) => { L0["s"] = v; }, local: true }, false)));
      await $.mset((await $.wv([$t193], "qrlBeginDate", C, false)), "Caption", (await $.wcall([$t193], "FormatDateTime", ["dd/mm/yyyy", (await $.mv((await $.wv([$t193], "BDateP", C, false)), "DateTime"))], C)));
      await $.mset((await $.wv([$t193], "qrlEndDate", C, false)), "Caption", (await $.wcall([$t193], "FormatDateTime", ["dd/mm/yyyy", (await $.mv((await $.wv([$t193], "EDateP", C, false)), "DateTime"))], C)));
      if ($.truthy((await $.mv((await $.wv([$t193], "CheckBox4", C, false)), "Checked")))) {
        await $.wset([$t193], "PrintDeep", (await $.wcall([$t193], "StrToInt", [(await $.wcall([$t193], "FloatToStr", [(await $.wcall([$t193], "Round", [(await $.wcall([$t193], "power", [2, $.sub(5, (await $.mv((await $.wv([$t193], "cbPrintDeep", C, false)), "ItemIndex")))], C))], C))], C))], C)), C);
      } else {
        await $.wset([$t193], "PrintDeep", 32, C);
      }
      { const $t194 = $.sub((await $.mv((await $.wv([$t193], "QRFProviz", C, false)), "ComponentCount")), 1);
        await $.wset([$t193], "Counter", 0, { get: async () => L0["counter"], set: async (v) => { L0["counter"] = v; }, local: true });
        let $t195 = true;
        for (;;) {
          if (!$t195) { await $.wset([$t193], "Counter", $.succ((await $.wv([$t193], "Counter", { get: async () => L0["counter"], set: async (v) => { L0["counter"] = v; }, local: true }, false)), 1), { get: async () => L0["counter"], set: async (v) => { L0["counter"] = v; }, local: true }); }
          $t195 = false;
          if (!($.ord((await $.wv([$t193], "Counter", { get: async () => L0["counter"], set: async (v) => { L0["counter"] = v; }, local: true }, false))) <= $.ord($t194))) break;
          if ($.truthy($.gt((await $.mv((await $.idx((await $.wv([$t193], "Components", C, false)), [(await $.wv([$t193], "Counter", { get: async () => L0["counter"], set: async (v) => { L0["counter"] = v; }, local: true }, false))])), "Tag")), 0))) {
            await $.mset((await $.idx((await $.wv([$t193], "Components", C, false)), [(await $.wv([$t193], "Counter", { get: async () => L0["counter"], set: async (v) => { L0["counter"] = v; }, local: true }, false))])), "Enabled", $.le((await $.mv((await $.idx((await $.wv([$t193], "Components", C, false)), [(await $.wv([$t193], "Counter", { get: async () => L0["counter"], set: async (v) => { L0["counter"] = v; }, local: true }, false))])), "Tag")), (await $.wv([$t193], "PrintDeep", C, false))));
          }
          await $.tick();
        }
      }
      await $.stmt($.wcall([$t193], "Preview", [], C));
    }
  }
  return L0.result;
}, {"params": [], "kind": "procedure", "ptypes": []});
  U.method("TfrmBCFilter", "printreport29", async function printreport29(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: undefined, "counter": 0};
  {
    const $t196 = (await $.mv((await $.v(C, "DMBC")), "ResultDSGrantYear"));
    if ($.truthy($.not((await $.wv([$t196], "Active", C, false))))) {
      await $.stmt($.wcall([$t196], "Open", [], C));
    } else {
      await $.stmt($.wcall([$t196], "Refresh", [], C));
    }
  }
  if ($.truthy($.eq((await $.mv((await $.v(C, "RGReportType")), "ItemIndex")), 0))) {
    {
      const $t197 = (await $.wobj(C, "Kera"));
      await $.stmt($.wcall([$t197], "Connect", [], C));
      await $.stmt((await $.wcall([$t197], "ExportDataset", [(await $.mv((await $.wv([$t197], "DMBC", C, false)), "ResultDSGrantYear")), "Grant", (await $.wv([$t197], "True", C, false))], C)));
    }
  } else {
    if ($.truthy($.not((await $.call(C, "assigned", [(await $.v(C, "QRFGrantYear"))]))))) {
      await $.set(C, "QRFGrantYear", (await $.mcall((await $.v(C, "TQRFGrantYear")), "Create", [Self])));
    }
    {
      const $t198 = (await $.wobj(C, "QRFGrantYear"));
      await $.mset((await $.wv([$t198], "qrlBeginDate", C, false)), "Caption", (await $.wcall([$t198], "FormatDateTime", ["dd/mm/yyyy", (await $.mv((await $.wv([$t198], "BDateP", C, false)), "DateTime"))], C)));
      await $.mset((await $.wv([$t198], "qrlEndDate", C, false)), "Caption", (await $.wcall([$t198], "FormatDateTime", ["dd/mm/yyyy", (await $.mv((await $.wv([$t198], "EDateP", C, false)), "DateTime"))], C)));
      if ($.truthy((await $.mv((await $.wv([$t198], "CheckBox4", C, false)), "Checked")))) {
        await $.wset([$t198], "PrintDeep", (await $.wcall([$t198], "StrToInt", [(await $.wcall([$t198], "FloatToStr", [(await $.wcall([$t198], "Round", [(await $.wcall([$t198], "power", [2, $.sub(5, (await $.mv((await $.wv([$t198], "cbPrintDeep", C, false)), "ItemIndex")))], C))], C))], C))], C)), C);
      } else {
        await $.wset([$t198], "PrintDeep", 32, C);
      }
      { const $t199 = $.sub((await $.mv((await $.wv([$t198], "QRFGrantYear", C, false)), "ComponentCount")), 1);
        await $.wset([$t198], "Counter", 0, { get: async () => L0["counter"], set: async (v) => { L0["counter"] = v; }, local: true });
        let $t200 = true;
        for (;;) {
          if (!$t200) { await $.wset([$t198], "Counter", $.succ((await $.wv([$t198], "Counter", { get: async () => L0["counter"], set: async (v) => { L0["counter"] = v; }, local: true }, false)), 1), { get: async () => L0["counter"], set: async (v) => { L0["counter"] = v; }, local: true }); }
          $t200 = false;
          if (!($.ord((await $.wv([$t198], "Counter", { get: async () => L0["counter"], set: async (v) => { L0["counter"] = v; }, local: true }, false))) <= $.ord($t199))) break;
          if ($.truthy($.gt((await $.mv((await $.idx((await $.wv([$t198], "Components", C, false)), [(await $.wv([$t198], "Counter", { get: async () => L0["counter"], set: async (v) => { L0["counter"] = v; }, local: true }, false))])), "Tag")), 0))) {
            await $.mset((await $.idx((await $.wv([$t198], "Components", C, false)), [(await $.wv([$t198], "Counter", { get: async () => L0["counter"], set: async (v) => { L0["counter"] = v; }, local: true }, false))])), "Enabled", $.le((await $.mv((await $.idx((await $.wv([$t198], "Components", C, false)), [(await $.wv([$t198], "Counter", { get: async () => L0["counter"], set: async (v) => { L0["counter"] = v; }, local: true }, false))])), "Tag")), (await $.wv([$t198], "PrintDeep", C, false))));
          }
          await $.tick();
        }
      }
      await $.stmt($.wcall([$t198], "Preview", [], C));
    }
  }
  return L0.result;
}, {"params": [], "kind": "procedure", "ptypes": []});
  U.method("TfrmBCFilter", "printreport30", async function printreport30(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: undefined, "counter": 0};
  {
    const $t201 = (await $.mv((await $.v(C, "DMBC")), "ResultDSGrantBranch"));
    if ($.truthy($.not((await $.wv([$t201], "Active", C, false))))) {
      await $.stmt($.wcall([$t201], "Open", [], C));
    } else {
      await $.stmt($.wcall([$t201], "Refresh", [], C));
    }
  }
  if ($.truthy($.eq((await $.mv((await $.v(C, "RGReportType")), "ItemIndex")), 0))) {
    {
      const $t202 = (await $.wobj(C, "Kera"));
      await $.stmt($.wcall([$t202], "Connect", [], C));
      await $.stmt((await $.wcall([$t202], "ExportDataset", [(await $.mv((await $.wv([$t202], "DMBC", C, false)), "ResultDSGrantBranch")), "Grant", (await $.wv([$t202], "True", C, false))], C)));
    }
  } else {
    if ($.truthy($.not((await $.call(C, "assigned", [(await $.v(C, "QRFGrantBranch"))]))))) {
      await $.set(C, "QRFGrantBranch", (await $.mcall((await $.v(C, "TQRFGrantBranch")), "Create", [Self])));
    }
    {
      const $t203 = (await $.wobj(C, "QRFGrantBranch"));
      await $.mset((await $.wv([$t203], "qrlBeginDate", C, false)), "Caption", (await $.wcall([$t203], "FormatDateTime", ["dd/mm/yyyy", (await $.mv((await $.wv([$t203], "BDateP", C, false)), "DateTime"))], C)));
      await $.mset((await $.wv([$t203], "qrlEndDate", C, false)), "Caption", (await $.wcall([$t203], "FormatDateTime", ["dd/mm/yyyy", (await $.mv((await $.wv([$t203], "EDateP", C, false)), "DateTime"))], C)));
      if ($.truthy((await $.mv((await $.wv([$t203], "CheckBox4", C, false)), "Checked")))) {
        await $.wset([$t203], "PrintDeep", (await $.wcall([$t203], "StrToInt", [(await $.wcall([$t203], "FloatToStr", [(await $.wcall([$t203], "Round", [(await $.wcall([$t203], "power", [2, $.sub(5, (await $.mv((await $.wv([$t203], "cbPrintDeep", C, false)), "ItemIndex")))], C))], C))], C))], C)), C);
      } else {
        await $.wset([$t203], "PrintDeep", 32, C);
      }
      { const $t204 = $.sub((await $.mv((await $.wv([$t203], "QRFGrantBranch", C, false)), "ComponentCount")), 1);
        await $.wset([$t203], "Counter", 0, { get: async () => L0["counter"], set: async (v) => { L0["counter"] = v; }, local: true });
        let $t205 = true;
        for (;;) {
          if (!$t205) { await $.wset([$t203], "Counter", $.succ((await $.wv([$t203], "Counter", { get: async () => L0["counter"], set: async (v) => { L0["counter"] = v; }, local: true }, false)), 1), { get: async () => L0["counter"], set: async (v) => { L0["counter"] = v; }, local: true }); }
          $t205 = false;
          if (!($.ord((await $.wv([$t203], "Counter", { get: async () => L0["counter"], set: async (v) => { L0["counter"] = v; }, local: true }, false))) <= $.ord($t204))) break;
          if ($.truthy($.gt((await $.mv((await $.idx((await $.wv([$t203], "Components", C, false)), [(await $.wv([$t203], "Counter", { get: async () => L0["counter"], set: async (v) => { L0["counter"] = v; }, local: true }, false))])), "Tag")), 0))) {
            await $.mset((await $.idx((await $.wv([$t203], "Components", C, false)), [(await $.wv([$t203], "Counter", { get: async () => L0["counter"], set: async (v) => { L0["counter"] = v; }, local: true }, false))])), "Enabled", $.le((await $.mv((await $.idx((await $.wv([$t203], "Components", C, false)), [(await $.wv([$t203], "Counter", { get: async () => L0["counter"], set: async (v) => { L0["counter"] = v; }, local: true }, false))])), "Tag")), (await $.wv([$t203], "PrintDeep", C, false))));
          }
          await $.tick();
        }
      }
      await $.stmt($.wcall([$t203], "Preview", [], C));
    }
  }
  return L0.result;
}, {"params": [], "kind": "procedure", "ptypes": []});
  U.method("TfrmBCFilter", "printreport31", async function printreport31(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: undefined, "counter": 0};
  {
    const $t206 = (await $.mv((await $.v(C, "DMBC")), "ResultDSGrantContract"));
    if ($.truthy($.not((await $.wv([$t206], "Active", C, false))))) {
      await $.stmt($.wcall([$t206], "Open", [], C));
    } else {
      await $.stmt($.wcall([$t206], "Refresh", [], C));
    }
  }
  if ($.truthy($.eq((await $.mv((await $.v(C, "RGReportType")), "ItemIndex")), 0))) {
    {
      const $t207 = (await $.wobj(C, "Kera"));
      await $.stmt($.wcall([$t207], "Connect", [], C));
      await $.stmt((await $.wcall([$t207], "ExportDataset", [(await $.mv((await $.wv([$t207], "DMBC", C, false)), "ResultDSGrantContract")), "Grant", (await $.wv([$t207], "True", C, false))], C)));
    }
  } else {
    if ($.truthy($.not((await $.call(C, "assigned", [(await $.v(C, "QRFGrantContract"))]))))) {
      await $.set(C, "QRFGrantContract", (await $.mcall((await $.v(C, "TQRFGrantContract")), "Create", [Self])));
    }
    {
      const $t208 = (await $.wobj(C, "QRFGrantContract"));
      await $.mset((await $.wv([$t208], "qrlBeginDate", C, false)), "Caption", (await $.wcall([$t208], "FormatDateTime", ["dd/mm/yyyy", (await $.mv((await $.wv([$t208], "BDateP", C, false)), "DateTime"))], C)));
      await $.mset((await $.wv([$t208], "qrlEndDate", C, false)), "Caption", (await $.wcall([$t208], "FormatDateTime", ["dd/mm/yyyy", (await $.mv((await $.wv([$t208], "EDateP", C, false)), "DateTime"))], C)));
      if ($.truthy((await $.mv((await $.wv([$t208], "CheckBox4", C, false)), "Checked")))) {
        await $.wset([$t208], "PrintDeep", (await $.wcall([$t208], "StrToInt", [(await $.wcall([$t208], "FloatToStr", [(await $.wcall([$t208], "Round", [(await $.wcall([$t208], "power", [2, $.sub(5, (await $.mv((await $.wv([$t208], "cbPrintDeep", C, false)), "ItemIndex")))], C))], C))], C))], C)), C);
      } else {
        await $.wset([$t208], "PrintDeep", 32, C);
      }
      { const $t209 = $.sub((await $.mv((await $.wv([$t208], "QRFGrantContract", C, false)), "ComponentCount")), 1);
        await $.wset([$t208], "Counter", 0, { get: async () => L0["counter"], set: async (v) => { L0["counter"] = v; }, local: true });
        let $t210 = true;
        for (;;) {
          if (!$t210) { await $.wset([$t208], "Counter", $.succ((await $.wv([$t208], "Counter", { get: async () => L0["counter"], set: async (v) => { L0["counter"] = v; }, local: true }, false)), 1), { get: async () => L0["counter"], set: async (v) => { L0["counter"] = v; }, local: true }); }
          $t210 = false;
          if (!($.ord((await $.wv([$t208], "Counter", { get: async () => L0["counter"], set: async (v) => { L0["counter"] = v; }, local: true }, false))) <= $.ord($t209))) break;
          if ($.truthy($.gt((await $.mv((await $.idx((await $.wv([$t208], "Components", C, false)), [(await $.wv([$t208], "Counter", { get: async () => L0["counter"], set: async (v) => { L0["counter"] = v; }, local: true }, false))])), "Tag")), 0))) {
            await $.mset((await $.idx((await $.wv([$t208], "Components", C, false)), [(await $.wv([$t208], "Counter", { get: async () => L0["counter"], set: async (v) => { L0["counter"] = v; }, local: true }, false))])), "Enabled", $.le((await $.mv((await $.idx((await $.wv([$t208], "Components", C, false)), [(await $.wv([$t208], "Counter", { get: async () => L0["counter"], set: async (v) => { L0["counter"] = v; }, local: true }, false))])), "Tag")), (await $.wv([$t208], "PrintDeep", C, false))));
          }
          await $.tick();
        }
      }
      await $.stmt($.wcall([$t208], "Preview", [], C));
    }
  }
  return L0.result;
}, {"params": [], "kind": "procedure", "ptypes": []});
  U.method("TfrmBCFilter", "BuildFilterString", async function BuildFilterString(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: ''};
  L0["concatfilter"] = $.fn(async function ConcatFilter(p0, p1, p2, p3) {
  const L1 = {"s": $.asRef(p0), "prefix": $.copyArg(p1), "checked": $.copyArg(p2), "keyvalue": $.copyArg(p3), result: undefined, "temp": ''};
  await $.fixArgs(L1, ["prefix", "checked", "keyvalue"]);
  L1["csformat"] = "(%s=%s)";
  if ($.truthy(L1["checked"])) {
    L1["temp"] = (await $.call(C, "Format", [L1["csformat"], [L1["prefix"], L1["keyvalue"]]]));
    if ($.truthy($.eq((await L1["s"].get()), ""))) {
      await L1["s"].set(L1["temp"]);
    } else {
      await L1["s"].set($.add($.add((await L1["s"].get()), "AND "), L1["temp"]));
    }
  }
  return L1.result;
});
  L0["result"] = $.add($.add($.add($.add("DATEOFCONCLUSION between '", (await $.call(C, "FormatDateTime", ["d-mmm-yyyy", (await $.mv((await $.v(C, "GCredBegD")), "DateTime"))]))), "' AND '"), (await $.call(C, "FormatDateTime", ["d-mmm-yyyy", (await $.mv((await $.v(C, "GCredEndD")), "DateTime"))]))), "' ");
  await $.stmt((await $.callv(L0["concatfilter"], [$.ref(async () => L0["result"], async ($t211) => { L0["result"] = $t211; }), "CURRENCY", (await $.mv((await $.v(C, "CheckBox1")), "Checked")), (await $.mv((await $.v(C, "DBLookupComboboxEh1")), "KeyValue"))])));
  await $.stmt((await $.callv(L0["concatfilter"], [$.ref(async () => L0["result"], async ($t212) => { L0["result"] = $t212; }), "BRANCHID", (await $.mv((await $.v(C, "CheckBox2")), "Checked")), (await $.mv((await $.v(C, "DBLookupComboboxEh2")), "KeyValue"))])));
  await $.stmt((await $.callv(L0["concatfilter"], [$.ref(async () => L0["result"], async ($t213) => { L0["result"] = $t213; }), "USRGROUP", (await $.mv((await $.v(C, "CheckBox3")), "Checked")), (await $.mv((await $.v(C, "DBLookupComboboxEh3")), "KeyValue"))])));
  await $.stmt((await $.callv(L0["concatfilter"], [$.ref(async () => L0["result"], async ($t214) => { L0["result"] = $t214; }), "PERSONALTYPE", (await $.mv((await $.v(C, "CheckBox7")), "Checked")), (await $.mv((await $.v(C, "DBLookupComboboxEh7")), "KeyValue"))])));
  await $.stmt((await $.callv(L0["concatfilter"], [$.ref(async () => L0["result"], async ($t215) => { L0["result"] = $t215; }), "CUSTOMERTYPE", (await $.mv((await $.v(C, "CheckBox8")), "Checked")), (await $.mv((await $.v(C, "DBLookupComboboxEh8")), "KeyValue"))])));
  await $.stmt((await $.callv(L0["concatfilter"], [$.ref(async () => L0["result"], async ($t216) => { L0["result"] = $t216; }), "BOOROWERID", (await $.mv((await $.v(C, "CheckBox5")), "Checked")), (await $.mv((await $.v(C, "DBLookupComboboxEh4")), "KeyValue"))])));
  await $.stmt((await $.callv(L0["concatfilter"], [$.ref(async () => L0["result"], async ($t217) => { L0["result"] = $t217; }), "BOOROWERID", (await $.mv((await $.v(C, "CheckBox9")), "Checked")), (await $.mv((await $.v(C, "DBLookupComboboxEh6")), "KeyValue"))])));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TfrmBCFilter", "ShowMe", async function ShowMe(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: undefined};
  await $.mcall((await $.v(C, "Currencys")), "Open", []);
  await $.mcall((await $.v(C, "Branches")), "Open", []);
  await $.mcall((await $.v(C, "Persons")), "Open", []);
  await $.mcall((await $.v(C, "Categories")), "Open", []);
  await $.mcall((await $.v(C, "UserGroups")), "Open", []);
  await $.mcall((await $.v(C, "Customers")), "Open", []);
  await $.mcall((await $.v(C, "CustNames")), "Open", []);
  await $.mcall((await $.v(C, "Districts")), "Open", []);
  await $.mcall((await $.v(C, "RepForms")), "Open", []);
  await $.mcall((await $.v(C, "Periods")), "Open", []);
  await $.mcall((await $.v(C, "Statuses")), "Open", []);
  await $.mcall((await $.v(C, "Types")), "Open", []);
  await $.mcall((await $.v(C, "GTypes")), "Open", []);
  await $.mcall((await $.v(C, "Short")), "Open", []);
  await $.mset((await $.v(C, "cbFormsLook")), "KeyValue", 1);
  await $.stmt($.call(C, "ShowModal", []));
  return L0.result;
}, {"params": [], "kind": "procedure", "ptypes": []});
  U.func("OpenFileInOSShell", async function OpenFileInOSShell(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"afile": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["afile"]);
  await $.stmt((await $.call(C, "ShellExecute", [0, null, (await $.call(C, "PChar", [L0["afile"]])), null, null, (await $.v(C, "SW_SHOW"))])));
  return L0.result;
}, {"params": ["AFile"], "kind": "procedure", "ptypes": ["String"]});
  U.method("TfrmBCFilter", "Button1Click", async function Button1Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "files": '', "s": '', "crdid": 0, "printdeep": 0, "counter": 0};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.eq((await $.mv((await $.v(C, "cbFormsLook")), "KeyValue")), 1))) {
    if ($.truthy($.gt((await $.mv((await $.v(C, "EDateP")), "DateTime")), (await $.mv((await $.mcall((await $.v(C, "sysdat")), "fieldbyname", ["tek_dat"])), "AsDateTime"))))) {
    }
  }
  if ($.truthy((await $.mv((await $.v(C, "CheckBox4")), "Checked")))) {
    L0["printdeep"] = (await $.call(C, "StrToInt", [(await $.call(C, "FloatToStr", [(await $.call(C, "Round", [(await $.call(C, "power", [2, $.sub(3, (await $.mv((await $.v(C, "cbPrintDeep")), "ItemIndex")))]))]))]))]));
  } else {
    L0["printdeep"] = 32;
  }
  if ($.truthy($.ne((await $.v(C, "BuildFilterString")), ""))) {
    L0["s"] = $.add("where ", (await $.v(C, "BuildFilterString")));
  }
  if ($.truthy($.eq((await $.mv((await $.v(C, "rgKredStatus")), "ItemIndex")), 0))) {
    L0["s"] = $.add(L0["s"], "and(partitionkey =0)");
  }
  if ($.truthy($.eq((await $.mv((await $.v(C, "rgKredStatus")), "ItemIndex")), 1))) {
    L0["s"] = L0["s"];
  }
  if ($.truthy($.eq((await $.mv((await $.v(C, "rgKredStatus")), "ItemIndex")), 2))) {
    L0["s"] = $.add(L0["s"], " and partitionkey =1");
  }
  if ($.truthy((await $.mv((await $.v(C, "CheckBox11")), "Checked")))) {
    L0["s"] = $.add($.add($.add(L0["s"], " AND id in (select creditid from cm_business_plan WHERE purpose = "), (await $.mv((await $.mcall((await $.v(C, "Periods")), "FieldByName", ["ID"])), "AsString"))), ") ");
  }
  if ($.truthy((await $.mv((await $.v(C, "CheckBox16")), "Checked")))) {
    L0["s"] = $.add($.add($.add(L0["s"], " AND id in (select creditid from cm_business_plan WHERE source = "), (await $.mv((await $.mcall((await $.v(C, "Short")), "FieldByName", ["ID"])), "AsString"))), ") ");
  }
  if ($.truthy((await $.mv((await $.v(C, "CheckBox13")), "Checked")))) {
    L0["s"] = $.add($.add($.add($.add(L0["s"], " AND ANNUALYINTERESTRATE between "), (await $.mv((await $.v(C, "fsm")), "Text"))), " AND "), (await $.mv((await $.v(C, "fsx")), "Text")));
  }
  if ($.truthy((await $.mv((await $.v(C, "CheckBox14")), "Checked")))) {
    L0["s"] = $.add($.add($.add(L0["s"], " AND id in (select creditid from cm_business_plan WHERE type = "), (await $.mv((await $.mcall((await $.v(C, "Types")), "FieldByName", ["ID"])), "AsString"))), ") ");
  }
  if ($.truthy((await $.mv((await $.v(C, "CheckBox15")), "Checked")))) {
    L0["s"] = $.add($.add($.add($.add(L0["s"], " AND CREDITLINEAMOUNT between "), (await $.call(C, "floattostr", [(await $.mv((await $.v(C, "ntmm")), "Value"))]))), " AND "), (await $.call(C, "floattostr", [(await $.mv((await $.v(C, "ntmx")), "Value"))])));
  }
  if ($.truthy((await $.mv((await $.v(C, "CheckBox12")), "Checked")))) {
    L0["s"] = $.add($.add($.add(L0["s"], " AND id in (select creditid from cm_curr_state WHERE decode(stopcalcdate,null,1,0) = "), (await $.mv((await $.mcall((await $.v(C, "Statuses")), "FieldByName", ["ID"])), "AsString"))), ") ");
  }
  if ($.truthy((await $.mv((await $.v(C, "CheckBox6")), "Checked")))) {
    L0["s"] = $.add($.add($.add($.add(L0["s"], " and  id in (select creditid from cm_business_plan where villageid in"), "(select id from agro_village where depend_id="), (await $.mv((await $.v(C, "DistrictsID")), "AsString"))), "))");
  }
  if ($.truthy((await $.mv((await $.v(C, "CheckBox17")), "Checked")))) {
    L0["s"] = $.add($.add($.add(L0["s"], " and  id in (select creditid from cm_ak_grants where typeid = "), (await $.mv((await $.v(C, "GTypesID")), "AsString"))), ")");
  }
  if ($.truthy((await $.or_(($.eq((await $.mv((await $.v(C, "cbFormsLook")), "KeyValue")), 5)), async () => ($.eq((await $.mv((await $.v(C, "cbFormsLook")), "KeyValue")), 27)))))) {
    L0["s"] = $.add(L0["s"], " and id in (select creditid from cm_legal_measures)");
  }
  if ($.truthy((await $.and_(($.eq((await $.mv((await $.v(C, "cbFormsLook")), "KeyValue")), 14)), async () => ($.eq((await $.mv((await $.v(C, "rgKredStatus")), "ItemIndex")), 0)))))) {
    L0["s"] = $.add(L0["s"], " and id not in (select creditid from cm_old_credits)");
  }
  await $.stmt((await $.call(C, "showmessage", [L0["s"]])));
  return L0.result;
  { const $t218 = await $.iset((await $.mv((await $.v(C, "CreditsDS")), "SQL")), [2], L0["s"]); if ($t218 !== undefined) { await $.mset((await $.v(C, "CreditsDS")), "SQL", $t218); } }
  {
    const $t219 = (await $.wobj(C, "CreditsDS"));
    await $.mcall((await $.wv([$t219], "Session", C, false)), "Commit", []);
    if ($.truthy($.eq((await $.mv((await $.wv([$t219], "cbFormsLook", C, false)), "KeyValue")), 24))) {
      await $.stmt((await $.mcall((await $.mv((await $.wv([$t219], "DMBC", C, false)), "CM_AK_REP")), "CallProcedure", ["ins_agro_values", [(await $.mv((await $.wv([$t219], "EDateP", C, false)), "DateTime")), (await $.wv([$t219], "S", { get: async () => L0["s"], set: async (v) => { L0["s"] = v; }, local: true }, false))]])));
      await $.stmt((await $.wcall([$t219], "LogInformation", ["İlkin məlumatlar toplanır"], C)));
    }
    if ($.truthy($.eq((await $.mv((await $.wv([$t219], "cbFormsLook", C, false)), "KeyValue")), 25))) {
      await $.stmt((await $.mcall((await $.mv((await $.wv([$t219], "DMBC", C, false)), "CM_AK_REP")), "CallProcedure", ["ins_agro_bvalues", [(await $.mv((await $.wv([$t219], "EDateP", C, false)), "DateTime")), (await $.wv([$t219], "S", { get: async () => L0["s"], set: async (v) => { L0["s"] = v; }, local: true }, false))]])));
      await $.stmt((await $.wcall([$t219], "LogInformation", ["İlkin məlumatlar toplanır"], C)));
    }
    if ($.truthy($.eq((await $.mv((await $.wv([$t219], "cbFormsLook", C, false)), "KeyValue")), 26))) {
      await $.stmt((await $.mcall((await $.mv((await $.wv([$t219], "DMBC", C, false)), "CM_AK_REP")), "CallProcedure", ["ins_agro_projvalues", [(await $.mv((await $.wv([$t219], "EDateP", C, false)), "DateTime")), (await $.wv([$t219], "S", { get: async () => L0["s"], set: async (v) => { L0["s"] = v; }, local: true }, false))]])));
      await $.stmt((await $.wcall([$t219], "LogInformation", ["İlkin məlumatlar toplanır"], C)));
    }
    await $.stmt((await $.wcall([$t219], "LogInformation", ["İxreac Başladı"], C)));
    if ($.truthy((await $.wv([$t219], "Active", C, false)))) {
      await $.stmt($.wcall([$t219], "CloseAll", [], C));
    }
    await $.stmt($.wcall([$t219], "Open", [], C));
    await $.stmt($.wcall([$t219], "First", [], C));
    await $.stmt((await $.wcall([$t219], "PrepareProgress", [(await $.wv([$t219], "RecordCount", C, false)), (await $.wv([$t219], "rsProgressCaption", C, false))], C)));
    while ($.truthy($.not((await $.wv([$t219], "Eof", C, false))))) {
      await $.wset([$t219], "CrdID", (await $.mv((await $.mcall((await $.wv([$t219], "CreditsDS", C, false)), "FieldByName", ["ID"])), "AsInteger")), { get: async () => L0["crdid"], set: async (v) => { L0["crdid"] = v; }, local: true });
      { const $t220 = (await $.mv((await $.wv([$t219], "cbFormsLook", C, false)), "KeyValue"));
        if ($.eq($t220, 1)) {
          await $.stmt((await $.wcall([$t219], "InsertOneRow", [(await $.wv([$t219], "CrdID", { get: async () => L0["crdid"], set: async (v) => { L0["crdid"] = v; }, local: true }, false)), (await $.wcall([$t219], "Integer", [(await $.wcall([$t219], "Trunc", [(await $.mv((await $.wv([$t219], "BDateP", C, false)), "DateTime"))], C))], C)), (await $.wcall([$t219], "Integer", [(await $.wcall([$t219], "Trunc", [(await $.mv((await $.wv([$t219], "EDateP", C, false)), "DateTime"))], C))], C)), (await $.mv((await $.wv([$t219], "rgKredStatus", C, false)), "ItemIndex"))], C)));
        }
        else if ($.eq($t220, 2)) {
          await $.stmt((await $.wcall([$t219], "InsertOneRow2", [(await $.wv([$t219], "CrdID", { get: async () => L0["crdid"], set: async (v) => { L0["crdid"] = v; }, local: true }, false)), (await $.wcall([$t219], "Integer", [(await $.wcall([$t219], "Trunc", [(await $.mv((await $.wv([$t219], "BDateP", C, false)), "DateTime"))], C))], C)), (await $.wcall([$t219], "Integer", [(await $.wcall([$t219], "Trunc", [(await $.mv((await $.wv([$t219], "EDateP", C, false)), "DateTime"))], C))], C))], C)));
        }
        else if ($.eq($t220, 3)) {
          await $.stmt((await $.wcall([$t219], "InsertOneRow3", [(await $.wv([$t219], "CrdID", { get: async () => L0["crdid"], set: async (v) => { L0["crdid"] = v; }, local: true }, false)), (await $.wcall([$t219], "Integer", [(await $.wcall([$t219], "Trunc", [(await $.mv((await $.wv([$t219], "BDateP", C, false)), "DateTime"))], C))], C)), (await $.wcall([$t219], "Integer", [(await $.wcall([$t219], "Trunc", [(await $.mv((await $.wv([$t219], "EDateP", C, false)), "DateTime"))], C))], C))], C)));
        }
        else if ($.eq($t220, 4)) {
          await $.stmt((await $.wcall([$t219], "InsertOneRow4", [(await $.wv([$t219], "CrdID", { get: async () => L0["crdid"], set: async (v) => { L0["crdid"] = v; }, local: true }, false))], C)));
        }
        else if ($.eq($t220, 5)) {
          await $.stmt((await $.wcall([$t219], "InsertOneRow5", [(await $.wv([$t219], "CrdID", { get: async () => L0["crdid"], set: async (v) => { L0["crdid"] = v; }, local: true }, false)), (await $.wcall([$t219], "Integer", [(await $.wcall([$t219], "Trunc", [(await $.mv((await $.wv([$t219], "BDateP", C, false)), "DateTime"))], C))], C)), (await $.wcall([$t219], "Integer", [(await $.wcall([$t219], "Trunc", [(await $.mv((await $.wv([$t219], "EDateP", C, false)), "DateTime"))], C))], C))], C)));
        }
        else if ($.eq($t220, 6)) {
          await $.stmt((await $.wcall([$t219], "InsertOneRow6", [(await $.wv([$t219], "CrdID", { get: async () => L0["crdid"], set: async (v) => { L0["crdid"] = v; }, local: true }, false)), (await $.wcall([$t219], "Integer", [(await $.wcall([$t219], "Trunc", [(await $.mv((await $.wv([$t219], "BDateP", C, false)), "DateTime"))], C))], C)), (await $.wcall([$t219], "Integer", [(await $.wcall([$t219], "Trunc", [(await $.mv((await $.wv([$t219], "EDateP", C, false)), "DateTime"))], C))], C))], C)));
        }
        else if ($.eq($t220, 7)) {
          await $.stmt((await $.wcall([$t219], "InsertOneRow7", [(await $.wv([$t219], "CrdID", { get: async () => L0["crdid"], set: async (v) => { L0["crdid"] = v; }, local: true }, false)), (await $.wcall([$t219], "Integer", [(await $.wcall([$t219], "Trunc", [(await $.mv((await $.wv([$t219], "BDateP", C, false)), "DateTime"))], C))], C)), (await $.wcall([$t219], "Integer", [(await $.wcall([$t219], "Trunc", [(await $.mv((await $.wv([$t219], "EDateP", C, false)), "DateTime"))], C))], C))], C)));
        }
        else if ($.eq($t220, 8)) {
          await $.stmt((await $.wcall([$t219], "InsertOneRow8", [(await $.wv([$t219], "CrdID", { get: async () => L0["crdid"], set: async (v) => { L0["crdid"] = v; }, local: true }, false)), (await $.wcall([$t219], "Integer", [(await $.wcall([$t219], "Trunc", [(await $.mv((await $.wv([$t219], "BDateP", C, false)), "DateTime"))], C))], C)), (await $.wcall([$t219], "Integer", [(await $.wcall([$t219], "Trunc", [(await $.mv((await $.wv([$t219], "EDateP", C, false)), "DateTime"))], C))], C))], C)));
        }
        else if ($.eq($t220, 9)) {
          await $.stmt((await $.wcall([$t219], "InsertOneRow9", [(await $.wv([$t219], "CrdID", { get: async () => L0["crdid"], set: async (v) => { L0["crdid"] = v; }, local: true }, false)), (await $.wcall([$t219], "Integer", [(await $.wcall([$t219], "Trunc", [(await $.mv((await $.wv([$t219], "BDateP", C, false)), "DateTime"))], C))], C)), (await $.wcall([$t219], "Integer", [(await $.wcall([$t219], "Trunc", [(await $.mv((await $.wv([$t219], "EDateP", C, false)), "DateTime"))], C))], C))], C)));
        }
        else if ($.eq($t220, 10)) {
          await $.stmt((await $.wcall([$t219], "InsertOneRow10", [(await $.wv([$t219], "CrdID", { get: async () => L0["crdid"], set: async (v) => { L0["crdid"] = v; }, local: true }, false)), (await $.wcall([$t219], "Integer", [(await $.wcall([$t219], "Trunc", [(await $.mv((await $.wv([$t219], "BDateP", C, false)), "DateTime"))], C))], C)), (await $.wcall([$t219], "Integer", [(await $.wcall([$t219], "Trunc", [(await $.mv((await $.wv([$t219], "EDateP", C, false)), "DateTime"))], C))], C))], C)));
        }
        else if ($.eq($t220, 11)) {
          await $.stmt((await $.wcall([$t219], "InsertOneRow11", [(await $.wv([$t219], "CrdID", { get: async () => L0["crdid"], set: async (v) => { L0["crdid"] = v; }, local: true }, false)), (await $.wcall([$t219], "Integer", [(await $.wcall([$t219], "Trunc", [(await $.mv((await $.wv([$t219], "BDateP", C, false)), "DateTime"))], C))], C)), (await $.wcall([$t219], "Integer", [(await $.wcall([$t219], "Trunc", [(await $.mv((await $.wv([$t219], "EDateP", C, false)), "DateTime"))], C))], C))], C)));
        }
        else if ($.eq($t220, 12)) {
          await $.stmt((await $.wcall([$t219], "InsertOneRow12", [(await $.wv([$t219], "CrdID", { get: async () => L0["crdid"], set: async (v) => { L0["crdid"] = v; }, local: true }, false)), (await $.wcall([$t219], "Integer", [(await $.wcall([$t219], "Trunc", [(await $.mv((await $.wv([$t219], "BDateP", C, false)), "DateTime"))], C))], C)), (await $.wcall([$t219], "Integer", [(await $.wcall([$t219], "Trunc", [(await $.mv((await $.wv([$t219], "EDateP", C, false)), "DateTime"))], C))], C))], C)));
        }
        else if ($.eq($t220, 13)) {
          await $.stmt((await $.wcall([$t219], "InsertOneRow13", [(await $.wv([$t219], "CrdID", { get: async () => L0["crdid"], set: async (v) => { L0["crdid"] = v; }, local: true }, false)), (await $.wcall([$t219], "Integer", [(await $.wcall([$t219], "Trunc", [(await $.mv((await $.wv([$t219], "BDateP", C, false)), "DateTime"))], C))], C)), (await $.wcall([$t219], "Integer", [(await $.wcall([$t219], "Trunc", [(await $.mv((await $.wv([$t219], "EDateP", C, false)), "DateTime"))], C))], C))], C)));
        }
        else if ($.eq($t220, 14)) {
          await $.stmt((await $.wcall([$t219], "InsertOneRow14", [(await $.wv([$t219], "CrdID", { get: async () => L0["crdid"], set: async (v) => { L0["crdid"] = v; }, local: true }, false)), (await $.wcall([$t219], "Integer", [(await $.wcall([$t219], "Trunc", [(await $.mv((await $.wv([$t219], "BDateP", C, false)), "DateTime"))], C))], C)), (await $.wcall([$t219], "Integer", [(await $.wcall([$t219], "Trunc", [(await $.mv((await $.wv([$t219], "EDateP", C, false)), "DateTime"))], C))], C))], C)));
        }
        else if ($.eq($t220, 15)) {
          await $.stmt((await $.wcall([$t219], "InsertOneRow15", [(await $.wv([$t219], "CrdID", { get: async () => L0["crdid"], set: async (v) => { L0["crdid"] = v; }, local: true }, false)), (await $.wcall([$t219], "Integer", [(await $.wcall([$t219], "Trunc", [(await $.mv((await $.wv([$t219], "BDateP", C, false)), "DateTime"))], C))], C)), (await $.wcall([$t219], "Integer", [(await $.wcall([$t219], "Trunc", [(await $.mv((await $.wv([$t219], "EDateP", C, false)), "DateTime"))], C))], C))], C)));
        }
        else if ($.eq($t220, 16)) {
          await $.stmt((await $.wcall([$t219], "InsertOneRow16", [(await $.wv([$t219], "CrdID", { get: async () => L0["crdid"], set: async (v) => { L0["crdid"] = v; }, local: true }, false)), (await $.wcall([$t219], "Integer", [(await $.wcall([$t219], "Trunc", [(await $.mv((await $.wv([$t219], "BDateP", C, false)), "DateTime"))], C))], C)), (await $.wcall([$t219], "Integer", [(await $.wcall([$t219], "Trunc", [(await $.mv((await $.wv([$t219], "EDateP", C, false)), "DateTime"))], C))], C))], C)));
        }
        else if ($.eq($t220, 17)) {
          await $.stmt((await $.wcall([$t219], "InsertOneRow17", [(await $.wv([$t219], "CrdID", { get: async () => L0["crdid"], set: async (v) => { L0["crdid"] = v; }, local: true }, false)), (await $.wcall([$t219], "Integer", [(await $.wcall([$t219], "Trunc", [(await $.mv((await $.wv([$t219], "BDateP", C, false)), "DateTime"))], C))], C)), (await $.wcall([$t219], "Integer", [(await $.wcall([$t219], "Trunc", [(await $.mv((await $.wv([$t219], "EDateP", C, false)), "DateTime"))], C))], C))], C)));
        }
        else if ($.eq($t220, 18)) {
          await $.stmt((await $.wcall([$t219], "InsertOneRow18", [(await $.wv([$t219], "CrdID", { get: async () => L0["crdid"], set: async (v) => { L0["crdid"] = v; }, local: true }, false)), (await $.wcall([$t219], "Integer", [(await $.wcall([$t219], "Trunc", [(await $.mv((await $.wv([$t219], "BDateP", C, false)), "DateTime"))], C))], C)), (await $.wcall([$t219], "Integer", [(await $.wcall([$t219], "Trunc", [(await $.mv((await $.wv([$t219], "EDateP", C, false)), "DateTime"))], C))], C))], C)));
        }
        else if ($.eq($t220, 19)) {
          await $.stmt((await $.wcall([$t219], "InsertOneRow19", [(await $.wv([$t219], "CrdID", { get: async () => L0["crdid"], set: async (v) => { L0["crdid"] = v; }, local: true }, false)), (await $.wcall([$t219], "Integer", [(await $.wcall([$t219], "Trunc", [(await $.mv((await $.wv([$t219], "BDateP", C, false)), "DateTime"))], C))], C)), (await $.wcall([$t219], "Integer", [(await $.wcall([$t219], "Trunc", [(await $.mv((await $.wv([$t219], "EDateP", C, false)), "DateTime"))], C))], C))], C)));
        }
        else if ($.eq($t220, 20)) {
          await $.stmt((await $.wcall([$t219], "InsertOneRow20", [(await $.wv([$t219], "CrdID", { get: async () => L0["crdid"], set: async (v) => { L0["crdid"] = v; }, local: true }, false)), (await $.wcall([$t219], "Integer", [(await $.wcall([$t219], "Trunc", [(await $.mv((await $.wv([$t219], "BDateP", C, false)), "DateTime"))], C))], C)), (await $.wcall([$t219], "Integer", [(await $.wcall([$t219], "Trunc", [(await $.mv((await $.wv([$t219], "EDateP", C, false)), "DateTime"))], C))], C))], C)));
        }
        else if ($.eq($t220, 21)) {
          await $.stmt((await $.wcall([$t219], "InsertOneRow21", [(await $.wv([$t219], "CrdID", { get: async () => L0["crdid"], set: async (v) => { L0["crdid"] = v; }, local: true }, false)), (await $.wcall([$t219], "Integer", [(await $.wcall([$t219], "Trunc", [(await $.mv((await $.wv([$t219], "BDateP", C, false)), "DateTime"))], C))], C)), (await $.wcall([$t219], "Integer", [(await $.wcall([$t219], "Trunc", [(await $.mv((await $.wv([$t219], "EDateP", C, false)), "DateTime"))], C))], C))], C)));
        }
        else if ($.eq($t220, 22)) {
          await $.stmt((await $.wcall([$t219], "InsertOneRow22", [(await $.wv([$t219], "CrdID", { get: async () => L0["crdid"], set: async (v) => { L0["crdid"] = v; }, local: true }, false)), (await $.wcall([$t219], "Integer", [(await $.wcall([$t219], "Trunc", [(await $.mv((await $.wv([$t219], "BDateP", C, false)), "DateTime"))], C))], C)), (await $.wcall([$t219], "Integer", [(await $.wcall([$t219], "Trunc", [(await $.mv((await $.wv([$t219], "EDateP", C, false)), "DateTime"))], C))], C))], C)));
        }
        else if ($.eq($t220, 23)) {
          await $.stmt((await $.wcall([$t219], "InsertOneRow23", [(await $.wv([$t219], "CrdID", { get: async () => L0["crdid"], set: async (v) => { L0["crdid"] = v; }, local: true }, false)), (await $.wcall([$t219], "Integer", [(await $.wcall([$t219], "Trunc", [(await $.mv((await $.wv([$t219], "BDateP", C, false)), "DateTime"))], C))], C)), (await $.wcall([$t219], "Integer", [(await $.wcall([$t219], "Trunc", [(await $.mv((await $.wv([$t219], "EDateP", C, false)), "DateTime"))], C))], C))], C)));
        }
        else if ($.eq($t220, 24)) {
          await $.stmt((await $.wcall([$t219], "InsertOneRow24", [(await $.wv([$t219], "CrdID", { get: async () => L0["crdid"], set: async (v) => { L0["crdid"] = v; }, local: true }, false)), (await $.wcall([$t219], "Integer", [(await $.wcall([$t219], "Trunc", [(await $.mv((await $.wv([$t219], "BDateP", C, false)), "DateTime"))], C))], C)), (await $.wcall([$t219], "Integer", [(await $.wcall([$t219], "Trunc", [(await $.mv((await $.wv([$t219], "EDateP", C, false)), "DateTime"))], C))], C))], C)));
        }
        else if ($.eq($t220, 25)) {
          await $.stmt((await $.wcall([$t219], "InsertOneRow25", [(await $.wv([$t219], "CrdID", { get: async () => L0["crdid"], set: async (v) => { L0["crdid"] = v; }, local: true }, false)), (await $.wcall([$t219], "Integer", [(await $.wcall([$t219], "Trunc", [(await $.mv((await $.wv([$t219], "BDateP", C, false)), "DateTime"))], C))], C)), (await $.wcall([$t219], "Integer", [(await $.wcall([$t219], "Trunc", [(await $.mv((await $.wv([$t219], "EDateP", C, false)), "DateTime"))], C))], C))], C)));
        }
        else if ($.eq($t220, 26)) {
          await $.stmt((await $.wcall([$t219], "InsertOneRow26", [(await $.wv([$t219], "CrdID", { get: async () => L0["crdid"], set: async (v) => { L0["crdid"] = v; }, local: true }, false)), (await $.wcall([$t219], "Integer", [(await $.wcall([$t219], "Trunc", [(await $.mv((await $.wv([$t219], "BDateP", C, false)), "DateTime"))], C))], C)), (await $.wcall([$t219], "Integer", [(await $.wcall([$t219], "Trunc", [(await $.mv((await $.wv([$t219], "EDateP", C, false)), "DateTime"))], C))], C))], C)));
        }
        else if ($.eq($t220, 27)) {
          await $.stmt((await $.wcall([$t219], "InsertOneRow27", [(await $.wv([$t219], "CrdID", { get: async () => L0["crdid"], set: async (v) => { L0["crdid"] = v; }, local: true }, false)), (await $.wcall([$t219], "Integer", [(await $.wcall([$t219], "Trunc", [(await $.mv((await $.wv([$t219], "BDateP", C, false)), "DateTime"))], C))], C)), (await $.wcall([$t219], "Integer", [(await $.wcall([$t219], "Trunc", [(await $.mv((await $.wv([$t219], "EDateP", C, false)), "DateTime"))], C))], C))], C)));
        }
        else if ($.eq($t220, 28)) {
          await $.stmt((await $.wcall([$t219], "InsertOneRow28", [(await $.wv([$t219], "CrdID", { get: async () => L0["crdid"], set: async (v) => { L0["crdid"] = v; }, local: true }, false)), (await $.wcall([$t219], "Integer", [(await $.wcall([$t219], "Trunc", [(await $.mv((await $.wv([$t219], "BDateP", C, false)), "DateTime"))], C))], C)), (await $.wcall([$t219], "Integer", [(await $.wcall([$t219], "Trunc", [(await $.mv((await $.wv([$t219], "EDateP", C, false)), "DateTime"))], C))], C))], C)));
        }
        else if ($.eq($t220, 29)) {
          await $.stmt((await $.wcall([$t219], "InsertOneRow29", [(await $.wv([$t219], "CrdID", { get: async () => L0["crdid"], set: async (v) => { L0["crdid"] = v; }, local: true }, false)), (await $.wcall([$t219], "Integer", [(await $.wcall([$t219], "Trunc", [(await $.mv((await $.wv([$t219], "BDateP", C, false)), "DateTime"))], C))], C)), (await $.wcall([$t219], "Integer", [(await $.wcall([$t219], "Trunc", [(await $.mv((await $.wv([$t219], "EDateP", C, false)), "DateTime"))], C))], C))], C)));
        }
        else if ($.eq($t220, 30)) {
          await $.stmt((await $.wcall([$t219], "InsertOneRow30", [(await $.wv([$t219], "CrdID", { get: async () => L0["crdid"], set: async (v) => { L0["crdid"] = v; }, local: true }, false)), (await $.wcall([$t219], "Integer", [(await $.wcall([$t219], "Trunc", [(await $.mv((await $.wv([$t219], "BDateP", C, false)), "DateTime"))], C))], C)), (await $.wcall([$t219], "Integer", [(await $.wcall([$t219], "Trunc", [(await $.mv((await $.wv([$t219], "EDateP", C, false)), "DateTime"))], C))], C))], C)));
        }
        else if ($.eq($t220, 31)) {
          await $.stmt((await $.wcall([$t219], "InsertOneRow31", [(await $.wv([$t219], "CrdID", { get: async () => L0["crdid"], set: async (v) => { L0["crdid"] = v; }, local: true }, false)), (await $.wcall([$t219], "Integer", [(await $.wcall([$t219], "Trunc", [(await $.mv((await $.wv([$t219], "BDateP", C, false)), "DateTime"))], C))], C)), (await $.wcall([$t219], "Integer", [(await $.wcall([$t219], "Trunc", [(await $.mv((await $.wv([$t219], "EDateP", C, false)), "DateTime"))], C))], C))], C)));
        }
      }
      await $.mset((await $.mv((await $.wv([$t219], "AKProgressForm", C, false)), "ProgressShower")), "Position", (await $.wv([$t219], "RecNo", C, false)));
      await $.mset((await $.wv([$t219], "AKProgressForm", C, false)), "Caption", $.add((await $.wv([$t219], "rsProgressCaption", C, false)), (await $.wcall([$t219], "FormatFloat", ["<0.0%>", $.fdiv(($.mul(100, (await $.wv([$t219], "RecNo", C, false)))), (await $.wv([$t219], "RecordCount", C, false)))], C))));
      await $.stmt($.wcall([$t219], "Next", [], C));
      await $.mcall((await $.wv([$t219], "CommonApplication", C, false)), "ProcessMessages", []);
      await $.tick();
    }
    await $.mcall((await $.wv([$t219], "AKProgressForm", C, false)), "Close", []);
  }
  { const $t221 = (await $.mv((await $.v(C, "cbFormsLook")), "KeyValue"));
    if ($.eq($t221, 1)) {
      {
        const $t222 = (await $.mv((await $.v(C, "DMBC")), "ResultDS"));
        if ($.truthy((await $.mv((await $.wv([$t222], "CheckBox6", C, false)), "Checked")))) {
          { const $t223 = await $.iset((await $.wv([$t222], "SQL", C, false)), [3], $.add("where districtid=", (await $.mv((await $.wv([$t222], "DistrictsID", C, false)), "AsString")))); if ($t223 !== undefined) { await $.wset([$t222], "SQL", $t223, C); } }
        }
        if ($.truthy($.not((await $.wv([$t222], "Active", C, false))))) {
          await $.stmt($.wcall([$t222], "Open", [], C));
        } else {
          await $.stmt($.wcall([$t222], "Refresh", [], C));
        }
      }
      if ($.truthy($.eq((await $.mv((await $.v(C, "RGReportType")), "ItemIndex")), 0))) {
        await $.mcall((await $.mv((await $.v(C, "XLSExportFile1")), "Workbook")), "Clear", []);
        await $.stmt((await $.mcall((await $.mv((await $.mv((await $.v(C, "XLSExportFile1")), "Workbook")), "Sheets")), "Add", ["sheet1"])));
        await $.stmt((await $.mcall((await $.v(C, "XLSExportDataSource1")), "ExportData", [0, 0, 0])));
        if ($.truthy((await $.mv((await $.v(C, "saveDialog")), "Execute")))) {
          L0["files"] = (await $.mv((await $.v(C, "saveDialog")), "FileName"));
        }
        await $.stmt((await $.call(C, "ShowMessage", [L0["files"]])));
        await $.stmt((await $.mcall((await $.v(C, "XLSExportFile1")), "SaveToFile", [L0["files"]])));
        await $.stmt((await $.call(C, "OpenFileInOSShell", [L0["files"]])));
        await $.mcall((await $.v(C, "saveDialog")), "Free", []);
      } else {
        {
          const $t224 = (await $.wobj(C, "QRF1"));
          await $.wset([$t224], "S", "", { get: async () => L0["s"], set: async (v) => { L0["s"] = v; }, local: true });
          if ($.truthy((await $.mv((await $.wv([$t224], "CheckBox3", C, false)), "Checked")))) {
            await $.wset([$t224], "S", (await $.mv((await $.mcall((await $.wv([$t224], "UserGroups", C, false)), "FieldByName", ["DESCRIPTION"])), "AsString")), { get: async () => L0["s"], set: async (v) => { L0["s"] = v; }, local: true });
          } else {
            await $.wset([$t224], "S", "Öz", { get: async () => L0["s"], set: async (v) => { L0["s"] = v; }, local: true });
          }
          await $.mset((await $.wv([$t224], "lbMainTitle", C, false)), "Caption", (await $.wcall([$t224], "Format", [(await $.wv([$t224], "rsReportHeaderCaption", C, false)), [(await $.wv([$t224], "S", { get: async () => L0["s"], set: async (v) => { L0["s"] = v; }, local: true }, false))]], C)));
          await $.mset((await $.wv([$t224], "qrlBeginDate", C, false)), "Caption", (await $.wcall([$t224], "FormatDateTime", ["dd/mm/yyyy", (await $.mv((await $.wv([$t224], "BDateP", C, false)), "DateTime"))], C)));
          await $.mset((await $.wv([$t224], "qrlEndDate", C, false)), "Caption", (await $.wcall([$t224], "FormatDateTime", ["dd/mm/yyyy", (await $.mv((await $.wv([$t224], "EDateP", C, false)), "DateTime"))], C)));
          { const $t225 = $.sub((await $.mv((await $.wv([$t224], "QRF1", C, false)), "ComponentCount")), 1);
            await $.wset([$t224], "Counter", 0, { get: async () => L0["counter"], set: async (v) => { L0["counter"] = v; }, local: true });
            let $t226 = true;
            for (;;) {
              if (!$t226) { await $.wset([$t224], "Counter", $.succ((await $.wv([$t224], "Counter", { get: async () => L0["counter"], set: async (v) => { L0["counter"] = v; }, local: true }, false)), 1), { get: async () => L0["counter"], set: async (v) => { L0["counter"] = v; }, local: true }); }
              $t226 = false;
              if (!($.ord((await $.wv([$t224], "Counter", { get: async () => L0["counter"], set: async (v) => { L0["counter"] = v; }, local: true }, false))) <= $.ord($t225))) break;
              if ($.truthy($.gt((await $.mv((await $.idx((await $.wv([$t224], "Components", C, false)), [(await $.wv([$t224], "Counter", { get: async () => L0["counter"], set: async (v) => { L0["counter"] = v; }, local: true }, false))])), "Tag")), 0))) {
                await $.mset((await $.idx((await $.wv([$t224], "Components", C, false)), [(await $.wv([$t224], "Counter", { get: async () => L0["counter"], set: async (v) => { L0["counter"] = v; }, local: true }, false))])), "Enabled", $.le((await $.mv((await $.idx((await $.wv([$t224], "Components", C, false)), [(await $.wv([$t224], "Counter", { get: async () => L0["counter"], set: async (v) => { L0["counter"] = v; }, local: true }, false))])), "Tag")), (await $.wv([$t224], "PrintDeep", { get: async () => L0["printdeep"], set: async (v) => { L0["printdeep"] = v; }, local: true }, false))));
              }
              await $.tick();
            }
          }
          if ($.truthy($.eq((await $.mv((await $.wv([$t224], "RGPR", C, false)), "ItemIndex")), 0))) {
            await $.mset((await $.wv([$t224], "QRExpr13", C, false)), "Expression", "sum(ResultDS.DEBTOVERMAIN)");
            await $.mset((await $.wv([$t224], "QRExpr27", C, false)), "Expression", "sum(ResultDS.DEBTOVERMAIN)");
            await $.mset((await $.wv([$t224], "QRExpr41", C, false)), "Expression", "sum(ResultDS.DEBTOVERMAIN)");
            await $.mset((await $.wv([$t224], "QRExpr55", C, false)), "Expression", "sum(ResultDS.DEBTOVERMAIN)");
            await $.mset((await $.wv([$t224], "QRDBText22", C, false)), "DataField", "DEBTOVERMAIN");
          } else {
            await $.mset((await $.wv([$t224], "QRExpr13", C, false)), "Expression", "sum(ResultDS.DUEBYSCHEME)");
            await $.mset((await $.wv([$t224], "QRExpr27", C, false)), "Expression", "sum(ResultDS.DUEBYSCHEME)");
            await $.mset((await $.wv([$t224], "QRExpr41", C, false)), "Expression", "sum(ResultDS.DUEBYSCHEME)");
            await $.mset((await $.wv([$t224], "QRExpr55", C, false)), "Expression", "sum(ResultDS.DUEBYSCHEME)");
            await $.mset((await $.wv([$t224], "QRDBText22", C, false)), "DataField", "DUEBYSCHEME");
          }
          await $.stmt($.wcall([$t224], "Preview", [], C));
        }
      }
      await $.mset((await $.v(C, "btnYeniden")), "Enabled", true);
    }
    else if ($.eq($t221, 2)) {
      {
        const $t227 = (await $.wobj(C, "DMBC"));
        const $t228 = (await $.wv([$t227], "QRF2", C, false));
        await $.mcall((await $.wv([$t227, $t228], "ResultDS2", C, false)), "Close", []);
        await $.mcall((await $.wv([$t227, $t228], "F2QisaDS", C, false)), "Close", []);
        await $.mcall((await $.wv([$t227, $t228], "F2OrtaDS", C, false)), "Close", []);
        await $.mcall((await $.wv([$t227, $t228], "F2UzunDS", C, false)), "Close", []);
        await $.mcall((await $.wv([$t227, $t228], "ResultDS2", C, false)), "Open", []);
        await $.mcall((await $.wv([$t227, $t228], "F2QisaDS", C, false)), "Open", []);
        await $.mcall((await $.wv([$t227, $t228], "F2OrtaDS", C, false)), "Open", []);
        await $.mcall((await $.wv([$t227, $t228], "F2UzunDS", C, false)), "Open", []);
        if ($.truthy((await $.mv((await $.wv([$t227, $t228], "CheckBox3", C, false)), "Checked")))) {
          await $.wset([$t227, $t228], "S", (await $.wcall([$t227, $t228], "Format", [(await $.wv([$t227, $t228], "rsForm2Caption", C, false)), [(await $.mv((await $.mcall((await $.wv([$t227, $t228], "UserGroups", C, false)), "FieldByName", ["DESCRIPTION"])), "AsString"))]], C)), { get: async () => L0["s"], set: async (v) => { L0["s"] = v; }, local: true });
        }
        await $.mset((await $.wv([$t227, $t228], "qrlBeginDate", C, false)), "Caption", (await $.wcall([$t227, $t228], "FormatDateTime", ["dd/mm/yyyy", (await $.mv((await $.wv([$t227, $t228], "BDateP", C, false)), "DateTime"))], C)));
        await $.mset((await $.wv([$t227, $t228], "qrlEndDate", C, false)), "Caption", (await $.wcall([$t227, $t228], "FormatDateTime", ["dd/mm/yyyy", (await $.mv((await $.wv([$t227, $t228], "EDateP", C, false)), "DateTime"))], C)));
        await $.mset((await $.wv([$t227, $t228], "titleLabel", C, false)), "Caption", (await $.wv([$t227, $t228], "S", { get: async () => L0["s"], set: async (v) => { L0["s"] = v; }, local: true }, false)));
        await $.stmt($.wcall([$t227, $t228], "Preview", [], C));
      }
    }
    else if ($.eq($t221, 3)) {
      if ($.truthy((await $.mv((await $.v(C, "CheckBox4")), "Checked")))) {
        L0["printdeep"] = (await $.call(C, "StrToInt", [(await $.call(C, "FloatToStr", [(await $.call(C, "Round", [(await $.call(C, "power", [2, $.sub(4, (await $.mv((await $.v(C, "cbPrintDeep")), "ItemIndex")))]))]))]))]));
      } else {
        L0["printdeep"] = 32;
      }
      {
        const $t229 = (await $.mv((await $.v(C, "DMBC")), "ResultDS3"));
        if ($.truthy($.eq((await $.mv((await $.wv([$t229], "cbPrintDeep", C, false)), "ItemIndex")), 4))) {
          await $.stmt((await $.wcall([$t229], "SetVariable", ["f1", "branch, purposeid"], C)));
        } else {
          await $.stmt((await $.wcall([$t229], "SetVariable", ["f1", "purposeid"], C)));
        }
        if ($.truthy($.not((await $.wv([$t229], "Active", C, false))))) {
          await $.stmt($.wcall([$t229], "Open", [], C));
        } else {
          await $.stmt($.wcall([$t229], "Refresh", [], C));
        }
      }
      if ($.truthy($.eq((await $.mv((await $.v(C, "RGReportType")), "ItemIndex")), 0))) {
        {
          const $t230 = (await $.wobj(C, "Kera"));
          await $.stmt($.wcall([$t230], "Connect", [], C));
          await $.stmt((await $.wcall([$t230], "ExportDataset", [(await $.mv((await $.wv([$t230], "DMBC", C, false)), "ResultDS3")), "F3", (await $.wv([$t230], "True", C, false))], C)));
        }
      } else {
        {
          const $t231 = (await $.wobj(C, "QRF3"));
          await $.wset([$t231], "S", "", { get: async () => L0["s"], set: async (v) => { L0["s"] = v; }, local: true });
          if ($.truthy((await $.mv((await $.wv([$t231], "CheckBox3", C, false)), "Checked")))) {
            await $.wset([$t231], "S", (await $.mv((await $.mcall((await $.wv([$t231], "UserGroups", C, false)), "FieldByName", ["DESCRIPTION"])), "AsString")), { get: async () => L0["s"], set: async (v) => { L0["s"] = v; }, local: true });
            await $.wset([$t231], "S", $.add($.add("(", (await $.wv([$t231], "S", { get: async () => L0["s"], set: async (v) => { L0["s"] = v; }, local: true }, false))), ")"), { get: async () => L0["s"], set: async (v) => { L0["s"] = v; }, local: true });
          }
          await $.mset((await $.wv([$t231], "titleLabel", C, false)), "Caption", (await $.wcall([$t231], "Format", [(await $.wv([$t231], "rsForm3Caption", C, false)), [(await $.wv([$t231], "S", { get: async () => L0["s"], set: async (v) => { L0["s"] = v; }, local: true }, false))]], C)));
          { const $t232 = $.sub((await $.mv((await $.wv([$t231], "QRF3", C, false)), "ComponentCount")), 1);
            await $.wset([$t231], "Counter", 0, { get: async () => L0["counter"], set: async (v) => { L0["counter"] = v; }, local: true });
            let $t233 = true;
            for (;;) {
              if (!$t233) { await $.wset([$t231], "Counter", $.succ((await $.wv([$t231], "Counter", { get: async () => L0["counter"], set: async (v) => { L0["counter"] = v; }, local: true }, false)), 1), { get: async () => L0["counter"], set: async (v) => { L0["counter"] = v; }, local: true }); }
              $t233 = false;
              if (!($.ord((await $.wv([$t231], "Counter", { get: async () => L0["counter"], set: async (v) => { L0["counter"] = v; }, local: true }, false))) <= $.ord($t232))) break;
              if ($.truthy($.gt((await $.mv((await $.idx((await $.wv([$t231], "Components", C, false)), [(await $.wv([$t231], "Counter", { get: async () => L0["counter"], set: async (v) => { L0["counter"] = v; }, local: true }, false))])), "Tag")), 0))) {
                await $.mset((await $.idx((await $.wv([$t231], "Components", C, false)), [(await $.wv([$t231], "Counter", { get: async () => L0["counter"], set: async (v) => { L0["counter"] = v; }, local: true }, false))])), "Enabled", $.le((await $.mv((await $.idx((await $.wv([$t231], "Components", C, false)), [(await $.wv([$t231], "Counter", { get: async () => L0["counter"], set: async (v) => { L0["counter"] = v; }, local: true }, false))])), "Tag")), (await $.wv([$t231], "PrintDeep", { get: async () => L0["printdeep"], set: async (v) => { L0["printdeep"] = v; }, local: true }, false))));
              }
              await $.tick();
            }
          }
          await $.stmt($.wcall([$t231], "Preview", [], C));
        }
      }
      await $.mset((await $.v(C, "btnYeniden")), "Enabled", true);
    }
    else if ($.eq($t221, 4)) {
      await $.stmt($.call(C, "printreport4", []));
    }
    else if ($.eq($t221, 5)) {
      await $.stmt($.call(C, "printreport5", []));
    }
    else if ($.eq($t221, 6)) {
      await $.stmt($.call(C, "printreport6", []));
    }
    else if ($.eq($t221, 7)) {
      await $.stmt($.call(C, "printreport7", []));
    }
    else if ($.eq($t221, 8)) {
      await $.stmt($.call(C, "printreport8", []));
    }
    else if ($.eq($t221, 9)) {
      await $.stmt($.call(C, "printreport9", []));
    }
    else if ($.eq($t221, 10)) {
      await $.stmt($.call(C, "printreport10", []));
    }
    else if ($.eq($t221, 11)) {
      await $.stmt($.call(C, "printreport11", []));
    }
    else if ($.eq($t221, 12)) {
      await $.stmt($.call(C, "printreport12", []));
    }
    else if ($.eq($t221, 13)) {
      await $.stmt($.call(C, "printreport13", []));
    }
    else if ($.eq($t221, 14)) {
      await $.stmt($.call(C, "printreport14", []));
    }
    else if ($.eq($t221, 15)) {
      await $.stmt($.call(C, "printreport15", []));
    }
    else if ($.eq($t221, 16)) {
      await $.stmt($.call(C, "printreport16", []));
    }
    else if ($.eq($t221, 17)) {
      await $.stmt($.call(C, "printreport17", []));
    }
    else if ($.eq($t221, 18)) {
      await $.stmt($.call(C, "printreport18", []));
    }
    else if ($.eq($t221, 19)) {
      await $.stmt($.call(C, "printreport19", []));
    }
    else if ($.eq($t221, 20)) {
      await $.stmt($.call(C, "printreport20", []));
    }
    else if ($.eq($t221, 21)) {
      await $.stmt($.call(C, "printreport21", []));
    }
    else if ($.eq($t221, 22)) {
      await $.stmt($.call(C, "printreport22", []));
    }
    else if ($.eq($t221, 23)) {
      await $.stmt($.call(C, "printreport23", []));
    }
    else if ($.eq($t221, 24)) {
      await $.stmt($.call(C, "printreport24", []));
    }
    else if ($.eq($t221, 25)) {
      await $.stmt($.call(C, "printreport25", []));
    }
    else if ($.eq($t221, 26)) {
      await $.stmt($.call(C, "printreport26", []));
    }
    else if ($.eq($t221, 27)) {
      await $.stmt($.call(C, "printreport27", []));
    }
    else if ($.eq($t221, 28)) {
      await $.stmt($.call(C, "printreport28", []));
    }
    else if ($.eq($t221, 29)) {
      await $.stmt($.call(C, "printreport29", []));
    }
    else if ($.eq($t221, 30)) {
      await $.stmt($.call(C, "printreport30", []));
    }
    else if ($.eq($t221, 31)) {
      await $.stmt($.call(C, "printreport31", []));
    }
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TfrmBCFilter", "Button3Click", async function Button3Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mcall((await $.mv((await $.v(C, "DMBC")), "OracleDataSet1")), "Open", []);
  {
    const $t234 = (await $.wobj(C, "Kera"));
    await $.stmt($.wcall([$t234], "Connect", [], C));
    await $.stmt((await $.wcall([$t234], "ExportDataset", [(await $.mv((await $.wv([$t234], "DMBC", C, false)), "OracleDataSet1")), "F1", (await $.wv([$t234], "True", C, false)), (await $.wv([$t234], "True", C, false))], C)));
    await $.stmt($.wcall([$t234], "Disconnect", [], C));
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TfrmBCFilter", "FormCreate", async function FormCreate(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "dy": 0, "dm": 0, "dd": 0};
  await $.fixArgs(L0, ["sender"]);
  await $.mcall((await $.v(C, "sysdat")), "open", []);
  await $.stmt((await $.call(C, "DecodeDate", [(await $.mv((await $.mcall((await $.v(C, "sysdat")), "fieldbyname", ["tek_dat"])), "AsDateTime")), $.ref(async () => L0["dy"], async ($t235) => { L0["dy"] = $t235; }), $.ref(async () => L0["dm"], async ($t236) => { L0["dm"] = $t236; }), $.ref(async () => L0["dd"], async ($t237) => { L0["dd"] = $t237; })])));
  if ($.truthy($.eq($.sub(L0["dm"], 1), 0))) {
    L0["dy"] = L0["dy"];
  } else {
    L0["dm"] = L0["dm"];
  }
  await $.mset((await $.v(C, "BDateP")), "DateTime", (await $.call(C, "EncodeDate", [L0["dy"], L0["dm"], 1])));
  await $.mset((await $.v(C, "EDateP")), "DateTime", (await $.mv((await $.mcall((await $.v(C, "sysdat")), "fieldbyname", ["tek_dat"])), "AsDateTime")));
  await $.mset((await $.v(C, "GCredEndD")), "DateTime", (await $.mv((await $.v(C, "EDateP")), "DateTime")));
  await $.set(C, "AKProgressForm", (await $.mcall((await $.v(C, "TAKProgressForm")), "Create", [Self])));
  await $.set(C, "DMBC", (await $.mcall((await $.v(C, "TDMBC")), "Create", [Self])));
  await $.set(C, "QRF1", (await $.mcall((await $.v(C, "TQRF1")), "Create", [Self])));
  await $.set(C, "QRF2", (await $.mcall((await $.v(C, "TQRF2")), "Create", [Self])));
  await $.set(C, "QRF3", (await $.mcall((await $.v(C, "TQRF3")), "Create", [Self])));
  await $.set(C, "GBQRF1", (await $.mcall((await $.v(C, "TGBQRF1")), "Create", [Self])));
  await $.set(C, "QRFProviz", (await $.mcall((await $.v(C, "TQRFProviz")), "Create", [Self])));
  await $.mset((await $.v(C, "btnAll")), "Visible", $.eq((await $.call(C, "UpperCase", [(await $.mv((await $.mv((await $.v(C, "CreditsDS")), "Session")), "LogonUsername"))])), "SMART"));
  await $.stmt((await $.mcall((await $.v(C, "SBTranslateProc")), "TranslateAllCompForms", [Self, (await $.mv((await $.v(C, "sboapiDataModule")), "OrPack_SL"))])));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TfrmBCFilter", "FormCanResize", async function FormCanResize(Self, p0, p1, p2, p3) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "newwidth": $.asRef(p1), "newheight": $.asRef(p2), "resize": $.asRef(p3), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await L0["resize"].set(false);
  return L0.result;
}, {"params": ["Sender", "NewWidth", "NewHeight", "Resize"], "kind": "procedure", "ptypes": ["TObject", "Integer", "Integer", "Boolean"]});
  U.method("TfrmBCFilter", "btnYenidenClick", async function btnYenidenClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "s": '', "printdeep": 0, "counter": 0};
  await $.fixArgs(L0, ["sender"]);
  { const $t238 = (await $.mv((await $.v(C, "cbFormsLook")), "KeyValue"));
    if ($.eq($t238, 1)) {
      if ($.truthy((await $.mv((await $.v(C, "CheckBox4")), "Checked")))) {
        L0["printdeep"] = (await $.call(C, "StrToInt", [(await $.call(C, "FloatToStr", [(await $.call(C, "power", [2, $.sub(3, (await $.mv((await $.v(C, "cbPrintDeep")), "ItemIndex")))]))]))]));
      } else {
        L0["printdeep"] = 32;
      }
      {
        const $t239 = (await $.mv((await $.v(C, "DMBC")), "ResultDS"));
        if ($.truthy((await $.mv((await $.wv([$t239], "CheckBox6", C, false)), "Checked")))) {
          { const $t240 = await $.iset((await $.wv([$t239], "SQL", C, false)), [3], $.add("where districtid=", (await $.mv((await $.wv([$t239], "DistrictsID", C, false)), "AsString")))); if ($t240 !== undefined) { await $.wset([$t239], "SQL", $t240, C); } }
        }
        if ($.truthy($.not((await $.wv([$t239], "Active", C, false))))) {
          await $.stmt($.wcall([$t239], "Open", [], C));
        } else {
          await $.stmt($.wcall([$t239], "Refresh", [], C));
        }
      }
      if ($.truthy($.eq((await $.mv((await $.v(C, "RGReportType")), "ItemIndex")), 0))) {
        {
          const $t241 = (await $.wobj(C, "Kera"));
          await $.stmt($.wcall([$t241], "Connect", [], C));
          await $.stmt((await $.wcall([$t241], "ExportDataset", [(await $.mv((await $.wv([$t241], "DMBC", C, false)), "ResultDS")), "F1", (await $.wv([$t241], "True", C, false))], C)));
        }
      } else {
        {
          const $t242 = (await $.wobj(C, "QRF1"));
          await $.wset([$t242], "S", "", { get: async () => L0["s"], set: async (v) => { L0["s"] = v; }, local: true });
          if ($.truthy((await $.mv((await $.wv([$t242], "CheckBox3", C, false)), "Checked")))) {
            await $.wset([$t242], "S", (await $.mv((await $.mcall((await $.wv([$t242], "UserGroups", C, false)), "FieldByName", ["DESCRIPTION"])), "AsString")), { get: async () => L0["s"], set: async (v) => { L0["s"] = v; }, local: true });
            await $.wset([$t242], "S", $.add($.add("(", (await $.wv([$t242], "S", { get: async () => L0["s"], set: async (v) => { L0["s"] = v; }, local: true }, false))), ")"), { get: async () => L0["s"], set: async (v) => { L0["s"] = v; }, local: true });
          }
          await $.mset((await $.wv([$t242], "lbMainTitle", C, false)), "Caption", (await $.wcall([$t242], "Format", [(await $.wv([$t242], "rsReportHeaderCaption", C, false)), [(await $.wv([$t242], "S", { get: async () => L0["s"], set: async (v) => { L0["s"] = v; }, local: true }, false))]], C)));
          await $.mset((await $.wv([$t242], "qrlBeginDate", C, false)), "Caption", (await $.wcall([$t242], "FormatDateTime", ["dd/mm/yyyy", (await $.mv((await $.wv([$t242], "BDateP", C, false)), "DateTime"))], C)));
          await $.mset((await $.wv([$t242], "qrlEndDate", C, false)), "Caption", (await $.wcall([$t242], "FormatDateTime", ["dd/mm/yyyy", (await $.mv((await $.wv([$t242], "EDateP", C, false)), "DateTime"))], C)));
          { const $t243 = $.sub((await $.mv((await $.wv([$t242], "QRF1", C, false)), "ComponentCount")), 1);
            await $.wset([$t242], "Counter", 0, { get: async () => L0["counter"], set: async (v) => { L0["counter"] = v; }, local: true });
            let $t244 = true;
            for (;;) {
              if (!$t244) { await $.wset([$t242], "Counter", $.succ((await $.wv([$t242], "Counter", { get: async () => L0["counter"], set: async (v) => { L0["counter"] = v; }, local: true }, false)), 1), { get: async () => L0["counter"], set: async (v) => { L0["counter"] = v; }, local: true }); }
              $t244 = false;
              if (!($.ord((await $.wv([$t242], "Counter", { get: async () => L0["counter"], set: async (v) => { L0["counter"] = v; }, local: true }, false))) <= $.ord($t243))) break;
              if ($.truthy($.gt((await $.mv((await $.idx((await $.wv([$t242], "Components", C, false)), [(await $.wv([$t242], "Counter", { get: async () => L0["counter"], set: async (v) => { L0["counter"] = v; }, local: true }, false))])), "Tag")), 0))) {
                await $.mset((await $.idx((await $.wv([$t242], "Components", C, false)), [(await $.wv([$t242], "Counter", { get: async () => L0["counter"], set: async (v) => { L0["counter"] = v; }, local: true }, false))])), "Enabled", $.le((await $.mv((await $.idx((await $.wv([$t242], "Components", C, false)), [(await $.wv([$t242], "Counter", { get: async () => L0["counter"], set: async (v) => { L0["counter"] = v; }, local: true }, false))])), "Tag")), (await $.wv([$t242], "PrintDeep", { get: async () => L0["printdeep"], set: async (v) => { L0["printdeep"] = v; }, local: true }, false))));
              }
              await $.tick();
            }
          }
          if ($.truthy($.eq((await $.mv((await $.wv([$t242], "RGPR", C, false)), "ItemIndex")), 0))) {
            await $.mset((await $.wv([$t242], "QRExpr13", C, false)), "Expression", "sum(ResultDS.DEBTOVERMAIN)");
            await $.mset((await $.wv([$t242], "QRExpr27", C, false)), "Expression", "sum(ResultDS.DEBTOVERMAIN)");
            await $.mset((await $.wv([$t242], "QRExpr41", C, false)), "Expression", "sum(ResultDS.DEBTOVERMAIN)");
            await $.mset((await $.wv([$t242], "QRExpr55", C, false)), "Expression", "sum(ResultDS.DEBTOVERMAIN)");
            await $.mset((await $.wv([$t242], "QRDBText22", C, false)), "DataField", "DEBTOVERMAIN");
          } else {
            await $.mset((await $.wv([$t242], "QRExpr13", C, false)), "Expression", "sum(ResultDS.DUEBYSCHEME)");
            await $.mset((await $.wv([$t242], "QRExpr27", C, false)), "Expression", "sum(ResultDS.DUEBYSCHEME)");
            await $.mset((await $.wv([$t242], "QRExpr41", C, false)), "Expression", "sum(ResultDS.DUEBYSCHEME)");
            await $.mset((await $.wv([$t242], "QRExpr55", C, false)), "Expression", "sum(ResultDS.DUEBYSCHEME)");
            await $.mset((await $.wv([$t242], "QRDBText22", C, false)), "DataField", "DUEBYSCHEME");
          }
          await $.stmt($.wcall([$t242], "Preview", [], C));
        }
      }
    }
    else if ($.eq($t238, 2)) {
      L0["printdeep"] = 32;
      {
        const $t245 = (await $.mv((await $.v(C, "DMBC")), "ResultDS2"));
        if ($.truthy($.not((await $.wv([$t245], "Active", C, false))))) {
          await $.stmt($.wcall([$t245], "Open", [], C));
        } else {
          await $.stmt($.wcall([$t245], "Refresh", [], C));
        }
      }
      if ($.truthy($.eq((await $.mv((await $.v(C, "RGReportType")), "ItemIndex")), 0))) {
        {
          const $t246 = (await $.wobj(C, "Kera"));
          await $.stmt($.wcall([$t246], "Connect", [], C));
          await $.stmt((await $.wcall([$t246], "ExportDataset", [(await $.mv((await $.wv([$t246], "DMBC", C, false)), "ResultDS2")), "F2", (await $.wv([$t246], "True", C, false))], C)));
        }
      } else {
        {
          const $t247 = (await $.wobj(C, "QRF2"));
          await $.wset([$t247], "S", "", { get: async () => L0["s"], set: async (v) => { L0["s"] = v; }, local: true });
          if ($.truthy((await $.mv((await $.wv([$t247], "CheckBox3", C, false)), "Checked")))) {
            await $.wset([$t247], "S", (await $.mv((await $.mcall((await $.wv([$t247], "UserGroups", C, false)), "FieldByName", ["DESCRIPTION"])), "AsString")), { get: async () => L0["s"], set: async (v) => { L0["s"] = v; }, local: true });
            await $.wset([$t247], "S", $.add($.add("(", (await $.wv([$t247], "S", { get: async () => L0["s"], set: async (v) => { L0["s"] = v; }, local: true }, false))), ")"), { get: async () => L0["s"], set: async (v) => { L0["s"] = v; }, local: true });
          }
          { const $t248 = $.sub((await $.mv((await $.wv([$t247], "QRF2", C, false)), "ComponentCount")), 1);
            await $.wset([$t247], "Counter", 0, { get: async () => L0["counter"], set: async (v) => { L0["counter"] = v; }, local: true });
            let $t249 = true;
            for (;;) {
              if (!$t249) { await $.wset([$t247], "Counter", $.succ((await $.wv([$t247], "Counter", { get: async () => L0["counter"], set: async (v) => { L0["counter"] = v; }, local: true }, false)), 1), { get: async () => L0["counter"], set: async (v) => { L0["counter"] = v; }, local: true }); }
              $t249 = false;
              if (!($.ord((await $.wv([$t247], "Counter", { get: async () => L0["counter"], set: async (v) => { L0["counter"] = v; }, local: true }, false))) <= $.ord($t248))) break;
              if ($.truthy($.gt((await $.mv((await $.idx((await $.wv([$t247], "Components", C, false)), [(await $.wv([$t247], "Counter", { get: async () => L0["counter"], set: async (v) => { L0["counter"] = v; }, local: true }, false))])), "Tag")), 0))) {
                await $.mset((await $.idx((await $.wv([$t247], "Components", C, false)), [(await $.wv([$t247], "Counter", { get: async () => L0["counter"], set: async (v) => { L0["counter"] = v; }, local: true }, false))])), "Enabled", $.le((await $.mv((await $.idx((await $.wv([$t247], "Components", C, false)), [(await $.wv([$t247], "Counter", { get: async () => L0["counter"], set: async (v) => { L0["counter"] = v; }, local: true }, false))])), "Tag")), (await $.wv([$t247], "PrintDeep", { get: async () => L0["printdeep"], set: async (v) => { L0["printdeep"] = v; }, local: true }, false))));
              }
              await $.tick();
            }
          }
          await $.stmt($.wcall([$t247], "Preview", [], C));
        }
      }
    }
    else if ($.eq($t238, 3)) {
      if ($.truthy((await $.mv((await $.v(C, "CheckBox4")), "Checked")))) {
        L0["printdeep"] = (await $.call(C, "StrToInt", [(await $.call(C, "FloatToStr", [(await $.call(C, "power", [2, $.sub(4, (await $.mv((await $.v(C, "cbPrintDeep")), "ItemIndex")))]))]))]));
      } else {
        L0["printdeep"] = 32;
      }
      {
        const $t250 = (await $.mv((await $.v(C, "DMBC")), "ResultDS3"));
        if ($.truthy($.not((await $.wv([$t250], "Active", C, false))))) {
          await $.stmt($.wcall([$t250], "Open", [], C));
        } else {
          await $.stmt($.wcall([$t250], "Refresh", [], C));
        }
      }
      if ($.truthy($.eq((await $.mv((await $.v(C, "RGReportType")), "ItemIndex")), 0))) {
        {
          const $t251 = (await $.wobj(C, "Kera"));
          await $.stmt($.wcall([$t251], "Connect", [], C));
          await $.stmt((await $.wcall([$t251], "ExportDataset", [(await $.mv((await $.wv([$t251], "DMBC", C, false)), "ResultDS3")), "F3", (await $.wv([$t251], "True", C, false))], C)));
        }
      } else {
        {
          const $t252 = (await $.wobj(C, "QRF3"));
          await $.wset([$t252], "S", "", { get: async () => L0["s"], set: async (v) => { L0["s"] = v; }, local: true });
          if ($.truthy((await $.mv((await $.wv([$t252], "CheckBox3", C, false)), "Checked")))) {
            await $.wset([$t252], "S", (await $.mv((await $.mcall((await $.wv([$t252], "UserGroups", C, false)), "FieldByName", ["DESCRIPTION"])), "AsString")), { get: async () => L0["s"], set: async (v) => { L0["s"] = v; }, local: true });
            await $.wset([$t252], "S", $.add($.add("(", (await $.wv([$t252], "S", { get: async () => L0["s"], set: async (v) => { L0["s"] = v; }, local: true }, false))), ")"), { get: async () => L0["s"], set: async (v) => { L0["s"] = v; }, local: true });
          }
          await $.mset((await $.wv([$t252], "titleLabel", C, false)), "Caption", (await $.wcall([$t252], "Format", [(await $.wv([$t252], "rsForm3Caption", C, false)), [(await $.wv([$t252], "S", { get: async () => L0["s"], set: async (v) => { L0["s"] = v; }, local: true }, false))]], C)));
          { const $t253 = $.sub((await $.mv((await $.wv([$t252], "QRF3", C, false)), "ComponentCount")), 1);
            await $.wset([$t252], "Counter", 0, { get: async () => L0["counter"], set: async (v) => { L0["counter"] = v; }, local: true });
            let $t254 = true;
            for (;;) {
              if (!$t254) { await $.wset([$t252], "Counter", $.succ((await $.wv([$t252], "Counter", { get: async () => L0["counter"], set: async (v) => { L0["counter"] = v; }, local: true }, false)), 1), { get: async () => L0["counter"], set: async (v) => { L0["counter"] = v; }, local: true }); }
              $t254 = false;
              if (!($.ord((await $.wv([$t252], "Counter", { get: async () => L0["counter"], set: async (v) => { L0["counter"] = v; }, local: true }, false))) <= $.ord($t253))) break;
              if ($.truthy($.gt((await $.mv((await $.idx((await $.wv([$t252], "Components", C, false)), [(await $.wv([$t252], "Counter", { get: async () => L0["counter"], set: async (v) => { L0["counter"] = v; }, local: true }, false))])), "Tag")), 0))) {
                await $.mset((await $.idx((await $.wv([$t252], "Components", C, false)), [(await $.wv([$t252], "Counter", { get: async () => L0["counter"], set: async (v) => { L0["counter"] = v; }, local: true }, false))])), "Enabled", $.le((await $.mv((await $.idx((await $.wv([$t252], "Components", C, false)), [(await $.wv([$t252], "Counter", { get: async () => L0["counter"], set: async (v) => { L0["counter"] = v; }, local: true }, false))])), "Tag")), (await $.wv([$t252], "PrintDeep", { get: async () => L0["printdeep"], set: async (v) => { L0["printdeep"] = v; }, local: true }, false))));
              }
              await $.tick();
            }
          }
          await $.stmt($.wcall([$t252], "Preview", [], C));
        }
      }
    }
    else if ($.eq($t238, 4)) {
      await $.stmt($.call(C, "printreport4", []));
    }
    else if ($.eq($t238, 5)) {
      await $.stmt($.call(C, "printreport5", []));
    }
    else if ($.eq($t238, 6)) {
      await $.stmt($.call(C, "printreport6", []));
    }
    else if ($.eq($t238, 7)) {
      await $.stmt($.call(C, "printreport7", []));
    }
    else if ($.eq($t238, 8)) {
      await $.stmt($.call(C, "printreport8", []));
    }
    else if ($.eq($t238, 9)) {
      await $.stmt($.call(C, "printreport9", []));
    }
    else if ($.eq($t238, 10)) {
      await $.stmt($.call(C, "printreport10", []));
    }
    else if ($.eq($t238, 11)) {
      await $.stmt($.call(C, "printreport11", []));
    }
    else if ($.eq($t238, 12)) {
      await $.stmt($.call(C, "printreport12", []));
    }
    else if ($.eq($t238, 13)) {
      await $.stmt($.call(C, "printreport13", []));
    }
    else if ($.eq($t238, 14)) {
      await $.stmt($.call(C, "printreport14", []));
    }
    else if ($.eq($t238, 15)) {
      await $.stmt($.call(C, "printreport15", []));
    }
    else if ($.eq($t238, 16)) {
      await $.stmt($.call(C, "printreport16", []));
    }
    else if ($.eq($t238, 17)) {
      await $.stmt($.call(C, "printreport17", []));
    }
    else if ($.eq($t238, 18)) {
      await $.stmt($.call(C, "printreport18", []));
    }
    else if ($.eq($t238, 19)) {
      await $.stmt($.call(C, "printreport19", []));
    }
    else if ($.eq($t238, 20)) {
      await $.stmt($.call(C, "printreport20", []));
    }
    else if ($.eq($t238, 21)) {
      await $.stmt($.call(C, "printreport21", []));
    }
    else if ($.eq($t238, 22)) {
      await $.stmt($.call(C, "printreport22", []));
    }
    else if ($.eq($t238, 23)) {
      await $.stmt($.call(C, "printreport23", []));
    }
    else if ($.eq($t238, 24)) {
      await $.stmt($.call(C, "printreport24", []));
    }
    else if ($.eq($t238, 25)) {
      await $.stmt($.call(C, "printreport25", []));
    }
    else if ($.eq($t238, 26)) {
      await $.stmt($.call(C, "printreport26", []));
    }
    else if ($.eq($t238, 27)) {
      await $.stmt($.call(C, "printreport27", []));
    }
    else if ($.eq($t238, 28)) {
      await $.stmt($.call(C, "printreport28", []));
    }
    else if ($.eq($t238, 29)) {
      await $.stmt($.call(C, "printreport29", []));
    }
    else if ($.eq($t238, 30)) {
      await $.stmt($.call(C, "printreport30", []));
    }
    else if ($.eq($t238, 31)) {
      await $.stmt($.call(C, "printreport31", []));
    }
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TfrmBCFilter", "CheckBox5Click", async function CheckBox5Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.not((await $.mv((L0["sender"]), "Checked"))))) {
    return L0.result;
  }
  if ($.truthy($.eq((await $.call(C, "lowercase", [(await $.mv((L0["sender"]), "Name"))])), "checkbox5"))) {
    await $.mset((await $.v(C, "CheckBox9")), "Checked", $.not((await $.mv((await $.v(C, "CheckBox5")), "Checked"))));
  }
  if ($.truthy($.eq((await $.call(C, "lowercase", [(await $.mv((L0["sender"]), "Name"))])), "checkbox9"))) {
    await $.mset((await $.v(C, "CheckBox5")), "Checked", $.not((await $.mv((await $.v(C, "CheckBox9")), "Checked"))));
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TfrmBCFilter", "BitBtn1Click", async function BitBtn1Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mcall((await $.mv((await $.v(C, "DMBC")), "OracleDataSet1")), "Open", []);
  await $.mcall((await $.mv((await $.v(C, "XLSExportFile1")), "Workbook")), "Clear", []);
  await $.stmt((await $.mcall((await $.mv((await $.mv((await $.v(C, "XLSExportFile1")), "Workbook")), "Sheets")), "Add", ["F1"])));
  await $.stmt((await $.mcall((await $.v(C, "XLSExportDataSource1")), "ExportData", [0, 0, 0])));
  await $.stmt((await $.mcall((await $.v(C, "XLSExportFile1")), "SaveToFile", ["Portfel.xls"])));
  await $.stmt((await $.call(C, "OpenFileInOSShell", ["Portfel.xls"])));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TfrmBCFilter", "btnAllClick", async function btnAllClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "tblsquery": '', "counter": 0, "printdeep": 0};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t255 = (await $.wobj(C, "DMBC"));
    const $t256 = (await $.wv([$t255], "GBQRF1", C, false));
    await $.mset((await $.wv([$t255, $t256], "lbMainTitle", C, false)), "Caption", (await $.wcall([$t255, $t256], "Format", [(await $.wv([$t255, $t256], "rsReportHeaderCaption", C, false)), [(await $.mv((await $.mcall((await $.wv([$t255, $t256], "UserGroups", C, false)), "FieldByName", ["DESCRIPTION"])), "AsString"))]], C)));
    await $.mset((await $.wv([$t255, $t256], "qrlBeginDate", C, false)), "Caption", (await $.wcall([$t255, $t256], "FormatDateTime", ["dd/mm/yyyy", (await $.mv((await $.wv([$t255, $t256], "BDateP", C, false)), "DateTime"))], C)));
    await $.mset((await $.wv([$t255, $t256], "qrlEndDate", C, false)), "Caption", (await $.wcall([$t255, $t256], "FormatDateTime", ["dd/mm/yyyy", (await $.mv((await $.wv([$t255, $t256], "EDateP", C, false)), "DateTime"))], C)));
    await $.wset([$t255, $t256], "tblsquery", (await $.mcall((await $.wv([$t255, $t256], "CM_AK_REP", C, false)), "CallStringFunction", ["gettableselect", [(await $.mv((await $.wv([$t255, $t256], "UserGroupsID", C, false)), "AsInteger"))]])), { get: async () => L0["tblsquery"], set: async (v) => { L0["tblsquery"] = v; }, local: true });
    await $.mcall((await $.wv([$t255, $t256], "ResultGB", C, false)), "Close", []);
    { const $t257 = await $.iset((await $.mv((await $.wv([$t255, $t256], "ResultGB", C, false)), "SQL")), [3], (await $.wv([$t255, $t256], "tblsquery", { get: async () => L0["tblsquery"], set: async (v) => { L0["tblsquery"] = v; }, local: true }, false))); if ($t257 !== undefined) { await $.mset((await $.wv([$t255, $t256], "ResultGB", C, false)), "SQL", $t257); } }
    await $.mcall((await $.wv([$t255, $t256], "ResultGB", C, false)), "Open", []);
    if ($.truthy($.eq((await $.mv((await $.wv([$t255, $t256], "RGReportType", C, false)), "ItemIndex")), 0))) {
      {
        const $t258 = (await $.wv([$t255, $t256], "Kera", C, false));
        await $.stmt($.wcall([$t255, $t256, $t258], "Connect", [], C));
        await $.stmt((await $.wcall([$t255, $t256, $t258], "ExportDataset", [(await $.mv((await $.wv([$t255, $t256, $t258], "DMBC", C, false)), "ResultGB")), "F1", (await $.wv([$t255, $t256, $t258], "True", C, false))], C)));
      }
    } else {
      if ($.truthy((await $.mv((await $.wv([$t255, $t256], "CheckBox4", C, false)), "Checked")))) {
        await $.wset([$t255, $t256], "PrintDeep", (await $.wcall([$t255, $t256], "StrToInt", [(await $.wcall([$t255, $t256], "FloatToStr", [(await $.wcall([$t255, $t256], "power", [2, $.sub(3, (await $.mv((await $.wv([$t255, $t256], "cbPrintDeep", C, false)), "ItemIndex")))], C))], C))], C)), { get: async () => L0["printdeep"], set: async (v) => { L0["printdeep"] = v; }, local: true });
      } else {
        await $.wset([$t255, $t256], "PrintDeep", 32, { get: async () => L0["printdeep"], set: async (v) => { L0["printdeep"] = v; }, local: true });
      }
      await $.mset((await $.wv([$t255, $t256], "qrlBeginDate", C, false)), "Caption", (await $.wcall([$t255, $t256], "FormatDateTime", ["dd/mm/yyyy", (await $.mv((await $.wv([$t255, $t256], "BDateP", C, false)), "DateTime"))], C)));
      await $.mset((await $.wv([$t255, $t256], "qrlEndDate", C, false)), "Caption", (await $.wcall([$t255, $t256], "FormatDateTime", ["dd/mm/yyyy", (await $.mv((await $.wv([$t255, $t256], "EDateP", C, false)), "DateTime"))], C)));
      { const $t259 = $.sub((await $.mv((await $.wv([$t255, $t256], "GBQRF1", C, false)), "ComponentCount")), 1);
        await $.wset([$t255, $t256], "Counter", 0, { get: async () => L0["counter"], set: async (v) => { L0["counter"] = v; }, local: true });
        let $t260 = true;
        for (;;) {
          if (!$t260) { await $.wset([$t255, $t256], "Counter", $.succ((await $.wv([$t255, $t256], "Counter", { get: async () => L0["counter"], set: async (v) => { L0["counter"] = v; }, local: true }, false)), 1), { get: async () => L0["counter"], set: async (v) => { L0["counter"] = v; }, local: true }); }
          $t260 = false;
          if (!($.ord((await $.wv([$t255, $t256], "Counter", { get: async () => L0["counter"], set: async (v) => { L0["counter"] = v; }, local: true }, false))) <= $.ord($t259))) break;
          if ($.truthy($.gt((await $.mv((await $.idx((await $.wv([$t255, $t256], "Components", C, false)), [(await $.wv([$t255, $t256], "Counter", { get: async () => L0["counter"], set: async (v) => { L0["counter"] = v; }, local: true }, false))])), "Tag")), 0))) {
            await $.mset((await $.idx((await $.wv([$t255, $t256], "Components", C, false)), [(await $.wv([$t255, $t256], "Counter", { get: async () => L0["counter"], set: async (v) => { L0["counter"] = v; }, local: true }, false))])), "Enabled", $.le((await $.mv((await $.idx((await $.wv([$t255, $t256], "Components", C, false)), [(await $.wv([$t255, $t256], "Counter", { get: async () => L0["counter"], set: async (v) => { L0["counter"] = v; }, local: true }, false))])), "Tag")), (await $.wv([$t255, $t256], "PrintDeep", { get: async () => L0["printdeep"], set: async (v) => { L0["printdeep"] = v; }, local: true }, false))));
          }
          await $.tick();
        }
      }
      await $.stmt($.wcall([$t255, $t256], "Preview", [], C));
    }
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TfrmBCFilter", "cbFormsLookChange", async function cbFormsLookChange(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.eq((await $.mv((await $.v(C, "cbFormsLook")), "KeyValue")), 1))) {
    await $.mset((await $.v(C, "btnAll")), "Visible", true);
  } else {
    await $.mset((await $.v(C, "btnAll")), "Visible", false);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TfrmBCFilter", "FormDestroy", async function FormDestroy(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mcall((await $.v(C, "sysdat")), "close", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  return U;
}
