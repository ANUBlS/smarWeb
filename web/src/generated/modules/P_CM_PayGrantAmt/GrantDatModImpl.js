// Generated from GrantDatModImpl.pas by pas2js — do not edit by hand; regenerate instead.
/* eslint-disable */
// @ts-nocheck

export default function define($) {
  const U = $.unit("GrantDatModImpl", ["Windows", "Messages", "SysUtils", "Classes", "Graphics", "Controls", "Forms", "Dialogs", "Db", "OracleData", "Oracle", "CMOracleAPIDatamoduleImpl"]);
  const C = [U];
  U.defClass("TGrantDataMod", "TDataModule", {"custaccounts": {"name": "CustAccounts", "type": "TOracleDataSet"}, "bankaccounts": {"name": "BankAccounts", "type": "TOracleDataSet"}, "custaccountsdatsrc": {"name": "CustAccountsDatSrc", "type": "TDataSource"}, "bankaccountsdatsrc": {"name": "BankAccountsDatSrc", "type": "TDataSource"}, "custinfo": {"name": "CustInfo", "type": "TOracleDataSet"}, "custinfodatsrc": {"name": "CustInfoDatSrc", "type": "TDataSource"}, "avalute": {"name": "Avalute", "type": "TOracleDataSet"}, "cm_paymentgrant": {"name": "CM_PAYMENTGRANT", "type": "TOraclePackage"}}, {});
  U.init(async () => {
    U.var_("GrantDataMod", null, "TGrantDataMod");
  });
  return U;
}
