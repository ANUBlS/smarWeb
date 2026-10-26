// Generated from cc_DataMod_CashOper.pas by pas2js — do not edit by hand; regenerate instead.
/* eslint-disable */
// @ts-nocheck

export default function define($) {
  const U = $.unit("cc_DataMod_CashOper", ["SysUtils", "Classes", "Oracle", "DB", "OracleData"]);
  const C = [U];
  U.defClass("TDataMod_CCCashOper", "TDataModule", {"cc_contracts": {"name": "cc_contracts", "type": "TOracleDataSet"}, "cc_contractssrc": {"name": "CC_contractsSrc", "type": "TDataSource"}, "sboapi": {"name": "sboapi", "type": "TOracleLogon"}, "main": {"name": "main", "type": "TOracleDataSet"}, "mainid": {"name": "mainID", "type": "TFloatField"}, "mainmonthpay": {"name": "mainMONTHPAY", "type": "TFloatField"}, "mainsuminterest": {"name": "mainSUMINTEREST", "type": "TFloatField"}, "maingecmeb": {"name": "mainGECMEB", "type": "TFloatField"}, "maingun": {"name": "mainGUN", "type": "TFloatField"}, "mainsrc": {"name": "MainSrc", "type": "TDataSource"}}, {});
  U.init(async () => {
    U.var_("DataMod_CCCashOper", null, "TDataMod_CCCashOper");
  });
  return U;
}
