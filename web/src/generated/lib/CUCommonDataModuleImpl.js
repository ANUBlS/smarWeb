// Generated from cuCommonDataModuleImpl.pas by pas2js — do not edit by hand; regenerate instead.
/* eslint-disable */
// @ts-nocheck

export default function define($) {
  const U = $.unit("cuCommonDataModuleImpl", ["Windows", "Messages", "SysUtils", "Classes", "Graphics", "Controls", "Forms", "Dialogs", "Db", "OracleData", "sboapiDataModuleImpl"]);
  const C = [U];
  U.defClass("TCUCommonDataModule", "TDataModule", {"referencesdata": {"name": "ReferencesData", "type": "TOracleDataSet"}}, {});
  U.init(async () => {
    U.var_("CUCommonDataModule", null, "TCUCommonDataModule");
  });
  return U;
}
