// Generated from Data_Unit.pas by pas2js — do not edit by hand; regenerate instead.
/* eslint-disable */
// @ts-nocheck

export default function define($) {
  const U = $.unit("Data_Unit", ["Windows", "Messages", "SysUtils", "Classes", "Graphics", "Controls", "Forms", "Dialogs", "sboapiDataModuleImpl", "Db", "OracleData", "Oracle", "LVPCSSImpl", "Payment_Det"]);
  const C = [U];
  U.defClass("TDataMod", "TDataModule", {"dataaccount": {"name": "DataAccount", "type": "TOracleDataSet"}, "account_source": {"name": "Account_Source", "type": "TDataSource"}, "dataaccountview": {"name": "DataAccountView", "type": "TOracleDataSet"}, "ds_view": {"name": "DS_View", "type": "TDataSource"}, "ds_bankinfo": {"name": "DS_BankInfo", "type": "TDataSource"}, "databankinfo": {"name": "DataBankInfo", "type": "TOracleDataSet"}, "databankm": {"name": "DataBankM", "type": "TOracleDataSet"}, "ds_bankm": {"name": "DS_BankM", "type": "TDataSource"}, "datavalute": {"name": "DataValute", "type": "TOracleDataSet"}, "xs_batchs": {"name": "XS_BATCHS", "type": "TOracleDataSet"}, "ds_batchs": {"name": "DS_BATCHS", "type": "TDataSource"}, "ins": {"name": "Ins", "type": "TOraclePackage"}, "datacheck": {"name": "DataCheck", "type": "TOracleDataSet"}, "xs_beneficiary": {"name": "XS_BENEFICIARY", "type": "TOracleDataSet"}, "ds_beneficiary": {"name": "DS_BENEFICIARY", "type": "TDataSource"}, "del": {"name": "Del", "type": "TOraclePackage"}, "getreference": {"name": "GetReference", "type": "TOraclePackage"}, "xs_config": {"name": "XS_CONFIG", "type": "TOracleDataSet"}, "dstranstypecode": {"name": "DSTransTypeCode", "type": "TDataSource"}, "packtemp": {"name": "PackTemp", "type": "TOraclePackage"}, "datatemp": {"name": "DataTemp", "type": "TOracleDataSet"}, "xs_incoming": {"name": "XS_INCOMING", "type": "TOracleDataSet"}, "xs_incomingview": {"name": "XS_IncomingView", "type": "TOracleDataSet"}, "ds_xs_incomingview": {"name": "DS_XS_IncomingView", "type": "TDataSource"}, "getsysdate": {"name": "GetSysDate", "type": "TOraclePackage"}, "datasetfilial": {"name": "DataSetFilial", "type": "TOracleDataSet"}, "datasourcefilial": {"name": "DataSourceFilial", "type": "TDataSource"}, "datasetfilialid": {"name": "DataSetFilialID", "type": "TFloatField"}, "datasetfilialname": {"name": "DataSetFilialNAME", "type": "TStringField"}, "databatchfilialview": {"name": "DataBatchFilialView", "type": "TOracleDataSet"}, "ds_filialview": {"name": "DS_FilialView", "type": "TDataSource"}, "transtypename": {"name": "TransTypeName", "type": "TOracleDataSet"}, "transtypecode": {"name": "TransTypeCode", "type": "TOracleDataSet"}, "transtypecodecode": {"name": "TransTypeCodeCODE", "type": "TIntegerField"}, "transtypecodename": {"name": "TransTypeCodeNAME", "type": "TStringField"}, "transtypecodenameid": {"name": "TransTypeCodeNAMEID", "type": "TFloatField"}, "transtypecodeid": {"name": "TransTypeCodeID", "type": "TFloatField"}, "xs_batchsid": {"name": "XS_BATCHSID", "type": "TFloatField"}, "xs_batchsf_id": {"name": "XS_BATCHSF_ID", "type": "TFloatField"}, "xs_batchsopercode": {"name": "XS_BATCHSOPERCODE", "type": "TStringField"}, "xs_batchsacc_id": {"name": "XS_BATCHSACC_ID", "type": "TFloatField"}, "xs_batchsclient_name": {"name": "XS_BATCHSCLIENT_NAME", "type": "TStringField"}, "xs_batchsclient_code": {"name": "XS_BATCHSCLIENT_CODE", "type": "TStringField"}, "xs_batchstrans_ref": {"name": "XS_BATCHSTRANS_REF", "type": "TStringField"}, "xs_batchsamount": {"name": "XS_BATCHSAMOUNT", "type": "TFloatField"}, "xs_batchsval_acc": {"name": "XS_BATCHSVAL_ACC", "type": "TIntegerField"}, "xs_batchstransdate": {"name": "XS_BATCHSTRANSDATE", "type": "TDateTimeField"}, "xs_batchssend": {"name": "XS_BATCHSSEND", "type": "TIntegerField"}, "xs_batchsstatus": {"name": "XS_BATCHSSTATUS", "type": "TIntegerField"}, "xs_batchsfilial": {"name": "XS_BATCHSFILIAL", "type": "TFloatField"}, "xs_batchstransaction_id": {"name": "XS_BATCHSTRANSACTION_ID", "type": "TFloatField"}, "xs_batchsclient_inn": {"name": "XS_BATCHSCLIENT_INN", "type": "TStringField"}, "xs_batchsuserid": {"name": "XS_BATCHSUSERID", "type": "TFloatField"}, "xs_batchsacc_no": {"name": "XS_BATCHSACC_NO", "type": "TStringField"}, "xs_batchsname": {"name": "XS_BATCHSNAME", "type": "TStringField"}, "xs_batchsval_name": {"name": "XS_BATCHSVAL_NAME", "type": "TStringField"}, "sb_aca": {"name": "SB_ACA", "type": "TOraclePackage"}, "xs_batchsarchive": {"name": "XS_BatchsArchive", "type": "TOracleDataSet"}, "floatfield1": {"name": "FloatField1", "type": "TFloatField"}, "floatfield2": {"name": "FloatField2", "type": "TFloatField"}, "stringfield1": {"name": "StringField1", "type": "TStringField"}, "floatfield3": {"name": "FloatField3", "type": "TFloatField"}, "stringfield2": {"name": "StringField2", "type": "TStringField"}, "stringfield3": {"name": "StringField3", "type": "TStringField"}, "stringfield4": {"name": "StringField4", "type": "TStringField"}, "floatfield4": {"name": "FloatField4", "type": "TFloatField"}, "integerfield1": {"name": "IntegerField1", "type": "TIntegerField"}, "datetimefield1": {"name": "DateTimeField1", "type": "TDateTimeField"}, "integerfield2": {"name": "IntegerField2", "type": "TIntegerField"}, "integerfield3": {"name": "IntegerField3", "type": "TIntegerField"}, "floatfield5": {"name": "FloatField5", "type": "TFloatField"}, "floatfield6": {"name": "FloatField6", "type": "TFloatField"}, "stringfield5": {"name": "StringField5", "type": "TStringField"}, "floatfield7": {"name": "FloatField7", "type": "TFloatField"}, "stringfield6": {"name": "StringField6", "type": "TStringField"}, "stringfield7": {"name": "StringField7", "type": "TStringField"}, "stringfield8": {"name": "StringField8", "type": "TStringField"}, "ds_batchsarchive": {"name": "DS_BatchsArchive", "type": "TDataSource"}, "ds_beneficiaryarchive": {"name": "DS_BeneficiaryArchive", "type": "TDataSource"}, "xs_beneficiaryarchive": {"name": "XS_BeneficiaryArchive", "type": "TOracleDataSet"}, "floatfield8": {"name": "FloatField8", "type": "TFloatField"}, "floatfield9": {"name": "FloatField9", "type": "TFloatField"}, "floatfield10": {"name": "FloatField10", "type": "TFloatField"}, "floatfield11": {"name": "FloatField11", "type": "TFloatField"}, "stringfield9": {"name": "StringField9", "type": "TStringField"}, "stringfield10": {"name": "StringField10", "type": "TStringField"}, "stringfield11": {"name": "StringField11", "type": "TStringField"}, "stringfield12": {"name": "StringField12", "type": "TStringField"}, "integerfield4": {"name": "IntegerField4", "type": "TIntegerField"}, "stringfield13": {"name": "StringField13", "type": "TStringField"}, "datetimefield2": {"name": "DateTimeField2", "type": "TDateTimeField"}, "integerfield5": {"name": "IntegerField5", "type": "TIntegerField"}, "stringfield14": {"name": "StringField14", "type": "TStringField"}, "floatfield12": {"name": "FloatField12", "type": "TFloatField"}, "integerfield6": {"name": "IntegerField6", "type": "TIntegerField"}, "integerfield7": {"name": "IntegerField7", "type": "TIntegerField"}, "floatfield13": {"name": "FloatField13", "type": "TFloatField"}, "stringfield15": {"name": "StringField15", "type": "TStringField"}, "stringfield16": {"name": "StringField16", "type": "TStringField"}, "stringfield17": {"name": "StringField17", "type": "TStringField"}, "ods_shablon": {"name": "ODS_shablon", "type": "TOracleDataSet"}, "ds_shablon": {"name": "DS_shablon", "type": "TDataSource"}, "ods_xs_filter": {"name": "ODS_XS_Filter", "type": "TOracleDataSet"}, "ds_xs_filter": {"name": "DS_XS_Filter", "type": "TDataSource"}, "ods_institution": {"name": "ODS_Institution", "type": "TOracleDataSet"}, "ods_budgetlevel": {"name": "ODS_BudgetLevel", "type": "TOracleDataSet"}, "ods_destination": {"name": "ODS_Destination", "type": "TOracleDataSet"}, "ds_institution": {"name": "DS_Institution", "type": "TDataSource"}, "ds_budgetlevel": {"name": "DS_BudgetLevel", "type": "TDataSource"}, "ds_destination": {"name": "DS_Destination", "type": "TDataSource"}, "ods_report": {"name": "ODS_Report", "type": "TOracleDataSet"}, "ds_report": {"name": "DS_Report", "type": "TDataSource"}, "ods_report_temp": {"name": "ODS_Report_Temp", "type": "TOracleDataSet"}, "ods_admin_setting": {"name": "ODS_Admin_Setting", "type": "TOracleDataSet"}, "ds_admin_setting": {"name": "DS_Admin_Setting", "type": "TDataSource"}, "ods_ad_sett_fili": {"name": "ODS_Ad_Sett_Fili", "type": "TOracleDataSet"}, "ds_ad_sett_fili": {"name": "DS_Ad_Sett_Fili", "type": "TDataSource"}, "ods_admin_in": {"name": "ODS_Admin_in", "type": "TOracleDataSet"}, "ds_admin_in": {"name": "DS_Admin_in", "type": "TDataSource"}, "xs_configid": {"name": "XS_CONFIGID", "type": "TFloatField"}, "xs_configin_dir": {"name": "XS_CONFIGIN_DIR", "type": "TStringField"}, "xs_configout_dir": {"name": "XS_CONFIGOUT_DIR", "type": "TStringField"}, "xs_configamount_limit": {"name": "XS_CONFIGAMOUNT_LIMIT", "type": "TFloatField"}, "xs_configaccount": {"name": "XS_CONFIGACCOUNT", "type": "TStringField"}, "xs_configarchive_dir": {"name": "XS_CONFIGARCHIVE_DIR", "type": "TStringField"}, "xs_configusebankdate": {"name": "XS_CONFIGUSEBANKDATE", "type": "TFloatField"}, "xs_configcommisionid": {"name": "XS_CONFIGCOMMISIONID", "type": "TFloatField"}, "xs_confignb_swift": {"name": "XS_CONFIGNB_SWIFT", "type": "TStringField"}, "xs_configcoraccount": {"name": "XS_CONFIGCORACCOUNT", "type": "TStringField"}, "xs_confignew_date": {"name": "XS_CONFIGNEW_DATE", "type": "TDateTimeField"}, "xs_configver_dir": {"name": "XS_CONFIGVER_DIR", "type": "TStringField"}, "xs_batchsfuserid": {"name": "XS_BATCHSFUSERID", "type": "TStringField"}, "xs_batchsvuserid": {"name": "XS_BATCHSVUSERID", "type": "TStringField"}, "xs_batchsauserid": {"name": "XS_BATCHSAUSERID", "type": "TStringField"}, "xs_batchsusername": {"name": "XS_BATCHSUSERNAME", "type": "TStringField"}, "xs_batchsarchivefuserid": {"name": "XS_BatchsArchiveFUSERID", "type": "TStringField"}, "xs_batchsarchivevuserid": {"name": "XS_BatchsArchiveVUSERID", "type": "TStringField"}, "xs_batchsarchiveauserid": {"name": "XS_BatchsArchiveAUSERID", "type": "TStringField"}, "xs_batchsarchivesdate": {"name": "XS_BatchsArchiveSDATE", "type": "TDateTimeField"}, "xs_batchsarchiveusername": {"name": "XS_BatchsArchiveUSERNAME", "type": "TStringField"}, "odssum": {"name": "ODSSum", "type": "TOracleDataSet"}, "ds_code": {"name": "DS_CODE", "type": "TDataSource"}, "ods_code": {"name": "ODS_CODE", "type": "TOracleDataSet"}, "datasum": {"name": "DataSum", "type": "TOracleDataSet"}, "ods_codeid": {"name": "ODS_CODEID", "type": "TOracleDataSet"}, "dstranstypename": {"name": "DSTransTypeName", "type": "TDataSource"}, "xs_beneficiaryid": {"name": "XS_BENEFICIARYID", "type": "TFloatField"}, "xs_beneficiarybatchid": {"name": "XS_BENEFICIARYBATCHID", "type": "TFloatField"}, "xs_beneficiaryrec_bank_id": {"name": "XS_BENEFICIARYREC_BANK_ID", "type": "TFloatField"}, "xs_beneficiaryrec_bank_sub_acc": {"name": "XS_BENEFICIARYREC_BANK_SUB_ACC", "type": "TFloatField"}, "xs_beneficiaryclient_acc_no": {"name": "XS_BENEFICIARYCLIENT_ACC_NO", "type": "TStringField"}, "xs_beneficiaryclient_name": {"name": "XS_BENEFICIARYCLIENT_NAME", "type": "TStringField"}, "xs_beneficiaryclient_code": {"name": "XS_BENEFICIARYCLIENT_CODE", "type": "TStringField"}, "xs_beneficiaryclient_inn": {"name": "XS_BENEFICIARYCLIENT_INN", "type": "TStringField"}, "xs_beneficiaryremit_inf": {"name": "XS_BENEFICIARYREMIT_INF", "type": "TStringField"}, "xs_beneficiarytrans_cod": {"name": "XS_BENEFICIARYTRANS_COD", "type": "TIntegerField"}, "xs_beneficiaryadd_inf": {"name": "XS_BENEFICIARYADD_INF", "type": "TStringField"}, "xs_beneficiaryval_date": {"name": "XS_BENEFICIARYVAL_DATE", "type": "TDateTimeField"}, "xs_beneficiaryval_cod": {"name": "XS_BENEFICIARYVAL_COD", "type": "TIntegerField"}, "xs_beneficiarymess_reference": {"name": "XS_BENEFICIARYMESS_REFERENCE", "type": "TStringField"}, "xs_beneficiaryamount": {"name": "XS_BENEFICIARYAMOUNT", "type": "TFloatField"}, "xs_beneficiarybnfcount": {"name": "XS_BENEFICIARYBNFCOUNT", "type": "TIntegerField"}, "xs_beneficiarystatus": {"name": "XS_BENEFICIARYSTATUS", "type": "TIntegerField"}, "xs_beneficiarytransaction_id": {"name": "XS_BENEFICIARYTRANSACTION_ID", "type": "TFloatField"}, "xs_beneficiaryuserid": {"name": "XS_BENEFICIARYUSERID", "type": "TFloatField"}, "xs_beneficiaryval_name": {"name": "XS_BENEFICIARYVAL_NAME", "type": "TStringField"}, "xs_beneficiarybankname": {"name": "XS_BENEFICIARYBANKNAME", "type": "TStringField"}, "ds_xs_incoming": {"name": "DS_XS_INCOMING", "type": "TDataSource"}, "data_admin_in": {"name": "Data_Admin_in", "type": "TOracleDataSet"}, "ds_adminin": {"name": "DS_Adminin", "type": "TDataSource"}, "data_code": {"name": "Data_Code", "type": "TOracleDataSet"}, "dscode": {"name": "DSCode", "type": "TDataSource"}, "xs_batchsformat": {"name": "XS_BATCHSFORMAT", "type": "TStringField"}, "xs_batchsarchiveformat": {"name": "XS_BatchsArchiveFORMAT", "type": "TStringField"}}, {});
  U.init(async () => {
    U.const("msDefault", 0);
    U.const("msCommit", 1);
    U.const("msReject", 2);
    U.const("msFileCreated", 3);
    U.const("msFilial", 0);
    U.const("MsHeadOffice", 0);
    U.const("msSwiftIN", 1);
    U.const("msVerifikator", 4);
    U.const("msFVerifikator", 5);
    U.const("msAvtorizator", 6);
    U.const("msReturnBack", 7);
    U.var_("DataMod", null, "TDataMod");
  });
  U.method("TDataMod", "XS_BATCHSAfterScroll", async function XS_BATCHSAfterScroll(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"dataset": $.copyArg(p0), result: undefined, "filial_id": 0};
  await $.fixArgs(L0, ["dataset"]);
  await $.mcall((await $.mv((await $.mv((await $.v(C, "LVPCSSForm")), "GridBeneficiary")), "SelectedRows")), "Clear", []);
  await $.mset((await $.mv((await $.v(C, "LVPCSSForm")), "AcceptButton")), "Enabled", $.not((await $.mv(L0["dataset"], "IsEmpty"))));
  await $.mset((await $.mv((await $.v(C, "LVPCSSForm")), "AcceptButton")), "Enabled", $.in_((await $.mv((await $.mcall((await $.mv((await $.v(C, "DataMod")), "XS_BATCHS")), "FieldByName", ["status"])), "AsInteger")), [(await $.v(C, "msdefault"))]));
  await $.mset((await $.mv((await $.v(C, "LVPCSSForm")), "ToolButton9")), "Enabled", $.not((await $.mv(L0["dataset"], "IsEmpty"))));
  await $.mset((await $.mv((await $.v(C, "LVPCSSForm")), "ToolButton9")), "Enabled", $.in_((await $.mv((await $.mcall((await $.mv((await $.v(C, "DataMod")), "XS_BATCHS")), "FieldByName", ["status"])), "AsInteger")), [(await $.v(C, "msdefault"))]));
  await $.mset((await $.mv((await $.v(C, "LVPCSSForm")), "N19")), "Enabled", $.not((await $.mv(L0["dataset"], "IsEmpty"))));
  await $.mset((await $.mv((await $.v(C, "LVPCSSForm")), "N19")), "Enabled", $.in_((await $.mv((await $.mcall((await $.mv((await $.v(C, "DataMod")), "XS_BATCHS")), "FieldByName", ["status"])), "AsInteger")), [(await $.v(C, "msdefault"))]));
  await $.mset((await $.mv((await $.v(C, "LVPCSSForm")), "N2")), "Enabled", $.not((await $.mv(L0["dataset"], "IsEmpty"))));
  await $.mset((await $.mv((await $.v(C, "LVPCSSForm")), "N2")), "Enabled", $.in_((await $.mv((await $.mcall((await $.mv((await $.v(C, "DataMod")), "XS_BATCHS")), "FieldByName", ["status"])), "AsInteger")), [(await $.v(C, "msdefault"))]));
  await $.mset((await $.mv((await $.v(C, "LVPCSSForm")), "N4")), "Enabled", $.not((await $.mv(L0["dataset"], "IsEmpty"))));
  await $.mset((await $.mv((await $.v(C, "LVPCSSForm")), "N4")), "Enabled", $.in_((await $.mv((await $.mcall((await $.mv((await $.v(C, "DataMod")), "XS_BATCHS")), "FieldByName", ["status"])), "AsInteger")), [(await $.v(C, "msdefault"))]));
  L0["filial_id"] = (await $.mv((await $.mcall((await $.mv((await $.v(C, "DataMod")), "XS_BATCHS")), "FieldByName", ["Filial"])), "AsInteger"));
  await $.stmt((await $.mcall((await $.mv((await $.v(C, "DataMod")), "DataSetFilial")), "SetVariable", ["FilialID", L0["filial_id"]])));
  await $.mcall((await $.mv((await $.v(C, "DataMod")), "DataSetFilial")), "Refresh", []);
  return L0.result;
}, {"params": ["DataSet"], "kind": "procedure", "ptypes": ["TDataSet"]});
  U.method("TDataMod", "XS_BENEFICIARYAfterScroll", async function XS_BENEFICIARYAfterScroll(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"dataset": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["dataset"]);
  await $.mset((await $.mv((await $.v(C, "LVPCSSForm")), "ToolButton4")), "Enabled", $.not((await $.mv(L0["dataset"], "IsEmpty"))));
  await $.mset((await $.mv((await $.v(C, "LVPCSSForm")), "ToolButton4")), "Enabled", $.in_((await $.mv((await $.mcall((await $.mv((await $.v(C, "DataMod")), "XS_BENEFICIARY")), "FieldByName", ["status"])), "AsInteger")), [(await $.v(C, "msdefault"))]));
  await $.mset((await $.mv((await $.v(C, "LVPCSSForm")), "MenuItem1")), "Enabled", $.not((await $.mv(L0["dataset"], "IsEmpty"))));
  await $.mset((await $.mv((await $.v(C, "LVPCSSForm")), "MenuItem1")), "Enabled", $.in_((await $.mv((await $.mcall((await $.mv((await $.v(C, "DataMod")), "XS_BATCHS")), "FieldByName", ["status"])), "AsInteger")), [(await $.v(C, "msdefault"))]));
  await $.mset((await $.mv((await $.v(C, "LVPCSSForm")), "MenuItem2")), "Enabled", $.not((await $.mv(L0["dataset"], "IsEmpty"))));
  await $.mset((await $.mv((await $.v(C, "LVPCSSForm")), "MenuItem2")), "Enabled", $.in_((await $.mv((await $.mcall((await $.mv((await $.v(C, "DataMod")), "XS_BATCHS")), "FieldByName", ["status"])), "AsInteger")), [(await $.v(C, "msdefault"))]));
  await $.mset((await $.mv((await $.v(C, "LVPCSSForm")), "MenuItem4")), "Enabled", $.not((await $.mv(L0["dataset"], "IsEmpty"))));
  await $.mset((await $.mv((await $.v(C, "LVPCSSForm")), "MenuItem4")), "Enabled", $.in_((await $.mv((await $.mcall((await $.mv((await $.v(C, "DataMod")), "XS_BATCHS")), "FieldByName", ["status"])), "AsInteger")), [(await $.v(C, "msdefault"))]));
  await $.mset((await $.mv((await $.v(C, "LVPCSSForm")), "ToolButton2")), "Enabled", $.not((await $.mv(L0["dataset"], "IsEmpty"))));
  await $.mset((await $.mv((await $.v(C, "LVPCSSForm")), "ToolButton2")), "Enabled", $.in_((await $.mv((await $.mcall((await $.mv((await $.v(C, "DataMod")), "XS_BENEFICIARY")), "FieldByName", ["status"])), "AsInteger")), [(await $.v(C, "msdefault"))]));
  await $.mset((await $.mv((await $.v(C, "LVPCSSForm")), "MessAcceptButton")), "Enabled", $.not((await $.mv(L0["dataset"], "IsEmpty"))));
  await $.mset((await $.mv((await $.v(C, "LVPCSSForm")), "MessAcceptButton")), "Enabled", $.eq((await $.mv((await $.mcall((await $.mv((await $.v(C, "DataMod")), "XS_BENEFICIARY")), "FieldByName", ["status"])), "AsInteger")), 0));
  return L0.result;
}, {"params": ["DataSet"], "kind": "procedure", "ptypes": ["TDataSet"]});
  U.method("TDataMod", "XS_IncomingViewAfterScroll", async function XS_IncomingViewAfterScroll(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"dataset": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["dataset"]);
  await $.mset((await $.mv((await $.v(C, "LVPCSSForm")), "ButtonMessInAccept")), "Enabled", $.in_((await $.mv((await $.mcall((await $.v(C, "XS_IncomingView")), "FieldByName", ["status"])), "AsInteger")), [(await $.v(C, "msdefault"))]));
  return L0.result;
}, {"params": ["DataSet"], "kind": "procedure", "ptypes": ["TDataSet"]});
  U.method("TDataMod", "XS_BatchsArchiveAfterScroll", async function XS_BatchsArchiveAfterScroll(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"dataset": $.copyArg(p0), result: undefined, "filial_id": 0};
  await $.fixArgs(L0, ["dataset"]);
  await $.mcall((await $.mv((await $.mv((await $.v(C, "LVPCSSForm")), "DBGridOUTArchBeneficiary")), "SelectedRows")), "Clear", []);
  L0["filial_id"] = (await $.mv((await $.mcall((await $.mv((await $.v(C, "DataMod")), "XS_BatchsArchive")), "FieldByName", ["Filial"])), "AsInteger"));
  await $.stmt((await $.mcall((await $.mv((await $.v(C, "DataMod")), "DataSetFilial")), "SetVariable", ["FilialID", L0["filial_id"]])));
  await $.mcall((await $.mv((await $.v(C, "DataMod")), "DataSetFilial")), "Refresh", []);
  return L0.result;
}, {"params": ["DataSet"], "kind": "procedure", "ptypes": ["TDataSet"]});
  U.method("TDataMod", "ODS_BudgetLevelAfterScroll", async function ODS_BudgetLevelAfterScroll(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"dataset": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["dataset"]);
  try {
    {
      const $t2 = (await $.v(C, "PaymentDetalsForm"));
      const $t3 = (await $.wv([$t2], "ODS_BudgetLevel", C, false));
      await $.mset((await $.wv([$t2, $t3], "Edit_tey1", C, false)), "Text", (await $.mv((await $.wcall([$t2, $t3], "fieldbyname", ["ID"], C)), "Asstring")));
    }
  } catch ($t1) {
    $.rethrowControl($t1);
    $.handled($t1);
  }
  return L0.result;
}, {"params": ["DataSet"], "kind": "procedure", "ptypes": ["TDataSet"]});
  U.method("TDataMod", "ODS_DestinationAfterScroll", async function ODS_DestinationAfterScroll(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"dataset": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["dataset"]);
  try {
    {
      const $t5 = (await $.v(C, "PaymentDetalsForm"));
      const $t6 = (await $.wv([$t5], "ODS_Destination", C, false));
      await $.mset((await $.wv([$t5, $t6], "Edit_tey2", C, false)), "Text", (await $.wcall([$t5, $t6], "IntToStr", [(await $.mv((await $.wcall([$t5, $t6], "fieldbyname", ["ID"], C)), "AsInteger"))], C)));
    }
  } catch ($t4) {
    $.rethrowControl($t4);
    $.handled($t4);
  }
  return L0.result;
}, {"params": ["DataSet"], "kind": "procedure", "ptypes": ["TDataSet"]});
  U.method("TDataMod", "ODS_InstitutionAfterScroll", async function ODS_InstitutionAfterScroll(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"dataset": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["dataset"]);
  try {
    {
      const $t8 = (await $.v(C, "PaymentDetalsForm"));
      const $t9 = (await $.wv([$t8], "ODS_Institution", C, false));
      await $.mset((await $.wv([$t8, $t9], "Edit_Client_acc_no", C, false)), "Text", (await $.wcall([$t8, $t9], "IntToStr", [(await $.mv((await $.wcall([$t8, $t9], "fieldbyname", ["ID"], C)), "AsInteger"))], C)));
      await $.mset((await $.wv([$t8, $t9], "Edit_Client_Name", C, false)), "Text", (await $.mv((await $.wcall([$t8, $t9], "fieldbyname", ["NAME"], C)), "AsString")));
      await $.mset((await $.wv([$t8, $t9], "Edit_Client_Code", C, false)), "Text", $.add("/", (await $.mv((await $.wcall([$t8, $t9], "fieldbyname", ["BOSH"], C)), "AsString"))));
      await $.mset((await $.wv([$t8, $t9], "Edit_Client_Voen", C, false)), "Text", (await $.mv((await $.wcall([$t8, $t9], "fieldbyname", ["TEK"], C)), "AsString")));
    }
  } catch ($t7) {
    $.rethrowControl($t7);
    $.handled($t7);
  }
  return L0.result;
}, {"params": ["DataSet"], "kind": "procedure", "ptypes": ["TDataSet"]});
  return U;
}
