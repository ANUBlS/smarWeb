// Generated from DMImpPaymentsImpl.pas by pas2js — do not edit by hand; regenerate instead.
/* eslint-disable */
// @ts-nocheck

export default function define($) {
  const U = $.unit("DMImpPaymentsImpl", ["Windows", "Messages", "SysUtils", "Classes", "Graphics", "Controls", "Forms", "Dialogs", "Oracle", "DB", "OracleData", "sboapiDataModuleImpl"]);
  const C = [U];
  U.defClass("TDMImpPayments", "TDataModule", {"cm_common": {"name": "CM_Common", "type": "TOraclePackage"}, "cm_dif_trans": {"name": "cm_dif_trans", "type": "TOraclePackage"}, "oracledataset1": {"name": "OracleDataSet1", "type": "TOracleDataSet"}, "oracledataset1num": {"name": "OracleDataSet1NUM", "type": "TWideStringField"}, "oracledataset1cust": {"name": "OracleDataSet1CUST", "type": "TWideStringField"}, "oracledataset1main": {"name": "OracleDataSet1MAIN", "type": "TFloatField"}, "oracledataset1int": {"name": "OracleDataSet1INT", "type": "TFloatField"}, "oracledataset1pen": {"name": "OracleDataSet1PEN", "type": "TFloatField"}, "oracledataset1dat": {"name": "OracleDataSet1DAT", "type": "TDateTimeField"}, "oracledataset2": {"name": "OracleDataSet2", "type": "TOracleDataSet"}}, {});
  U.init(async () => {
    U.var_("DMImpPayments", null, "TDMImpPayments");
  });
  return U;
}
