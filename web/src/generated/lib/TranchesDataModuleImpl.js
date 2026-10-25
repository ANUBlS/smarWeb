// Generated from TranchesDataModuleImpl.pas by pas2js — do not edit by hand; regenerate instead.
/* eslint-disable */
// @ts-nocheck

export default function define($) {
  const U = $.unit("TranchesDataModuleImpl", ["Windows", "Messages", "SysUtils", "Classes", "Graphics", "Controls", "Forms", "Dialogs", "Oracle", "Db", "OracleData", "sboapiDataModuleImpl"]);
  const C = [U];
  U.defClass("TTranchesDataModule", "TDataModule", {"tranchespackage": {"name": "TranchesPackage", "type": "TOraclePackage"}, "accountdata": {"name": "AccountData", "type": "TOracleDataSet"}, "datasrcaccountdata": {"name": "DataSrcAccountData", "type": "TDataSource"}, "accountdataclientaccno": {"name": "AccountDataCLIENTACCNO", "type": "TStringField"}, "accountdataclientaccname": {"name": "AccountDataCLIENTACCNAME", "type": "TStringField"}, "accountdataclientcurrency": {"name": "AccountDataCLIENTCURRENCY", "type": "TStringField"}}, {});
  U.init(async () => {
    U.var_("TranchesDataModule", null, "TTranchesDataModule");
  });
  return U;
}
