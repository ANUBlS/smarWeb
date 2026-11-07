// Generated from OBSDatModImpl.pas by pas2js — do not edit by hand; regenerate instead.
/* eslint-disable */
// @ts-nocheck

export default function define($) {
  const U = $.unit("OBSDatModImpl", ["Windows", "Messages", "SysUtils", "Classes", "Graphics", "Controls", "Forms", "Dialogs", "Oracle", "Db", "OracleData", "sboapiDataModuleImpl"]);
  const C = [U];
  U.defClass("TOBSDatMod", "TDataModule", {"outinterestsaccounts": {"name": "OutInterestsAccounts", "type": "TOracleDataSet"}, "outintincomeaccounts": {"name": "OutIntIncomeAccounts", "type": "TOracleDataSet"}, "outinterestsdatsrc": {"name": "OutInterestsDatSrc", "type": "TDataSource"}, "outintincomedatsrc": {"name": "OutIntIncomeDatSrc", "type": "TDataSource"}, "customers": {"name": "Customers", "type": "TOracleDataSet"}, "interestrests": {"name": "Interestrests", "type": "TOracleDataSet"}, "customersdatsrc": {"name": "CustomersDatSrc", "type": "TDataSource"}, "interestrestsdatsrc": {"name": "InterestrestsDatSrc", "type": "TDataSource"}, "creditinfo": {"name": "CreditInfo", "type": "TOracleDataSet"}, "interestinfo": {"name": "InterestInfo", "type": "TOracleDataSet"}, "interestsaccounts": {"name": "InterestsAccounts", "type": "TOracleDataSet"}, "intaccdatsrc": {"name": "IntAccDatSrc", "type": "TDataSource"}, "custintaccounts": {"name": "CustIntAccounts", "type": "TOracleDataSet"}, "custintaccdatsrc": {"name": "CustIntAccDatSrc", "type": "TDataSource"}, "avalute": {"name": "Avalute", "type": "TOracleDataSet"}, "cm_int_placeoutbalance": {"name": "CM_INT_PLACEOUTBALANCE", "type": "TOraclePackage"}, "outinterestsaccountsid": {"name": "OutInterestsAccountsID", "type": "TFloatField"}, "outinterestsaccountsacc_no": {"name": "OutInterestsAccountsACC_NO", "type": "TWideStringField"}}, {});
  U.init(async () => {
    U.var_("OBSDatMod", null, "TOBSDatMod");
  });
  return U;
}
