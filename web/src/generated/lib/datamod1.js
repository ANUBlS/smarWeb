// Generated from datamod1.pas by pas2js — do not edit by hand; regenerate instead.
/* eslint-disable */
// @ts-nocheck

export default function define($) {
  const U = $.unit("datamod1", ["SysUtils", "Classes", "DB", "OracleData", "Oracle", "sboapiDataModuleImpl"]);
  const C = [U];
  U.defClass("TDataMod", "TDataModule", {"addgroup": {"name": "addgroup", "type": "TOracleDataSet"}, "groupdata": {"name": "Groupdata", "type": "TDataSource"}, "addname": {"name": "AddName", "type": "TOracleDataSet"}, "groupv": {"name": "groupv", "type": "TOracleDataSet"}, "datasource1": {"name": "DataSource1", "type": "TDataSource"}, "mainresoursce": {"name": "mainresoursce", "type": "TOraclePackage"}}, {});
  U.init(async () => {
    U.var_("DataMod", null, "TDataMod");
  });
  return U;
}
