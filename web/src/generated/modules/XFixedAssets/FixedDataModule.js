// Generated from FixedDataModule.pas by pas2js — do not edit by hand; regenerate instead.
/* eslint-disable */
// @ts-nocheck

export default function define($) {
  const U = $.unit("FixedDataModule", ["SysUtils", "Classes", "DB", "OracleData", "sboapiDataModuleImpl"]);
  const C = [U];
  U.defClass("TDataModuleFixed", "TDataModule", {"dfixed": {"name": "DFixed", "type": "TDataSource"}, "odsfixed": {"name": "ODSFixed", "type": "TOracleDataSet"}}, {});
  U.init(async () => {
    U.var_("DataModuleFixed", null, "TDataModuleFixed");
  });
  return U;
}
