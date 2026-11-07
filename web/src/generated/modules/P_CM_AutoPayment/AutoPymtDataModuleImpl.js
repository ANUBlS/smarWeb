// Generated from AutoPymtDataModuleImpl.pas by pas2js — do not edit by hand; regenerate instead.
/* eslint-disable */
// @ts-nocheck

export default function define($) {
  const U = $.unit("AutoPymtDataModuleImpl", ["Windows", "Messages", "SysUtils", "Classes", "Graphics", "Controls", "Forms", "Dialogs", "Db", "OracleData", "Oracle", "sboapiDataModuleImpl"]);
  const C = [U];
  U.defClass("TAutoPymtDataMod", "TDataModule", {"autopaymentableloans": {"name": "AutoPaymentableLoans", "type": "TOracleDataSet"}, "cm_payment": {"name": "CM_PAYMENT", "type": "TOraclePackage"}}, {});
  U.init(async () => {
    U.var_("AutoPymtDataMod", null, "TAutoPymtDataMod");
  });
  return U;
}
