// Generated from NewDepositsPercentDataModule.pas by pas2js — do not edit by hand; regenerate instead.
/* eslint-disable */
// @ts-nocheck

export default function define($) {
  const U = $.unit("NewDepositsPercentDataModule", ["SysUtils", "Classes", "DB", "OracleData"]);
  const C = [U];
  U.defClass("TDataModuleTypes", "TDataModule", {"deptypes": {"name": "DepTypes", "type": "TOracleDataSet"}, "deptypesid": {"name": "DepTypesID", "type": "TFloatField"}, "deptypestype": {"name": "DepTypesTYPE", "type": "TWideStringField"}, "deptypesdatsrc": {"name": "DepTypesDatSrc", "type": "TDataSource"}, "dsdaycount": {"name": "DSDayCount", "type": "TDataSource"}, "odsdaycount": {"name": "ODSDayCount", "type": "TOracleDataSet"}}, {});
  U.init(async () => {
    U.var_("DataModuleTypes", null, "TDataModuleTypes");
  });
  return U;
}
