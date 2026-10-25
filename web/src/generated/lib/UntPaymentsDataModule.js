// Generated from UntPaymentsDataModule.pas by pas2js — do not edit by hand; regenerate instead.
/* eslint-disable */
// @ts-nocheck

export default function define($) {
  const U = $.unit("UntPaymentsDataModule", ["Windows", "Messages", "SysUtils", "Classes", "Graphics", "Controls", "Forms", "Dialogs", "Oracle", "Db", "OracleData", "sboapiDatamoduleImpl"]);
  const C = [U];
  U.defClass("TDataModPayments", "TDataModule", {"paymentspackage": {"name": "PaymentsPackage", "type": "TOraclePackage"}, "accountrests": {"name": "AccountRests", "type": "TOracleDataSet"}, "datasrcrests": {"name": "DataSrcRests", "type": "TDataSource"}, "accountrestsostat": {"name": "AccountRestsOSTAT", "type": "TFloatField"}, "accountrestspok_ostat": {"name": "AccountRestsPOK_OSTAT", "type": "TFloatField"}, "clentaccdata": {"name": "ClentAccData", "type": "TOracleDataSet"}, "clentaccdataclientaccno": {"name": "ClentAccDataCLIENTACCNO", "type": "TStringField"}, "clentaccdataclientaccname": {"name": "ClentAccDataCLIENTACCNAME", "type": "TStringField"}, "clentaccdataclientcurrency": {"name": "ClentAccDataCLIENTCURRENCY", "type": "TStringField"}, "datasrcclientaccdata": {"name": "DataSrcClientAccData", "type": "TDataSource"}, "overdueaccdata": {"name": "OverdueAccData", "type": "TOracleDataSet"}, "stringfield1": {"name": "StringField1", "type": "TStringField"}, "stringfield2": {"name": "StringField2", "type": "TStringField"}, "stringfield3": {"name": "StringField3", "type": "TStringField"}, "datasrcoverdueaccdata": {"name": "DataSrcOverdueAccData", "type": "TDataSource"}, "ointerestaccdata": {"name": "OInterestAccData", "type": "TOracleDataSet"}, "stringfield4": {"name": "StringField4", "type": "TStringField"}, "stringfield5": {"name": "StringField5", "type": "TStringField"}, "stringfield6": {"name": "StringField6", "type": "TStringField"}, "datasrcointerestaccdata": {"name": "DataSrcOInterestAccData", "type": "TDataSource"}, "interestaccdata": {"name": "InterestAccData", "type": "TOracleDataSet"}, "stringfield7": {"name": "StringField7", "type": "TStringField"}, "stringfield8": {"name": "StringField8", "type": "TStringField"}, "stringfield9": {"name": "StringField9", "type": "TStringField"}, "datasrcinterestaccdata": {"name": "DataSrcInterestAccData", "type": "TDataSource"}}, {});
  U.init(async () => {
    U.var_("DataModPayments", null, "TDataModPayments");
  });
  return U;
}
