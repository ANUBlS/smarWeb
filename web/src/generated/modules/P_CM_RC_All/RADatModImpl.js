// Generated from RADatModImpl.pas by pas2js — do not edit by hand; regenerate instead.
/* eslint-disable */
// @ts-nocheck

export default function define($) {
  const U = $.unit("RADatModImpl", ["Windows", "Messages", "SysUtils", "Classes", "Graphics", "Controls", "Forms", "Dialogs", "Oracle", "Db", "OracleData", "sboapiDataModuleImpl"]);
  const C = [U];
  U.defClass("TRAllDatMod", "TDataModule", {"cm_reserve_count_new": {"name": "CM_RESERVE_COUNT_NEW", "type": "TOraclePackage"}, "creditsinfo": {"name": "CreditsInfo", "type": "TOracleDataSet"}, "creditsinfoid": {"name": "CreditsInfoID", "type": "TFloatField"}, "creditsinfonumberofcredit": {"name": "CreditsInfoNUMBEROFCREDIT", "type": "TWideStringField"}}, {});
  U.init(async () => {
    U.var_("RAllDatMod", null, "TRAllDatMod");
  });
  return U;
}
