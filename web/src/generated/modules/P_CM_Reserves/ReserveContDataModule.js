// Generated from ReserveContDataModule.pas by pas2js — do not edit by hand; regenerate instead.
/* eslint-disable */
// @ts-nocheck

export default function define($) {
  const U = $.unit("ReserveContDataModule", ["Windows", "Messages", "SysUtils", "Classes", "Graphics", "Controls", "Forms", "Dialogs", "Db", "OracleData", "Oracle", "CMOracleAPIDataModuleImpl"]);
  const C = [U];
  U.defClass("TReserveContDataMod", "TDataModule", {"cm_reserve_contr": {"name": "CM_RESERVE_CONTR", "type": "TOraclePackage"}, "creditsinfo": {"name": "CreditsInfo", "type": "TOracleDataSet"}, "creditsinfoid": {"name": "CreditsInfoID", "type": "TFloatField"}, "creditsinfonumberofcredit": {"name": "CreditsInfoNUMBEROFCREDIT", "type": "TStringField"}}, {});
  U.init(async () => {
    U.var_("ReserveContDataMod", null, "TReserveContDataMod");
  });
  return U;
}
