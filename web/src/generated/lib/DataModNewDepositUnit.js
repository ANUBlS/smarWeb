// Generated from DataModNewDepositUnit.pas by pas2js — do not edit by hand; regenerate instead.
/* eslint-disable */
// @ts-nocheck

export default function define($) {
  const U = $.unit("DataModNewDepositUnit", ["Windows", "Messages", "SysUtils", "Classes", "Graphics", "Controls", "Forms", "Dialogs", "Db", "OracleData", "Oracle", "sboapiDataModuleImpl"]);
  const C = [U];
  U.defClass("TDataModuleNewDeposit", "TDataModule", {"depositaccs": {"name": "DepositAccs", "type": "TOracleDataSet"}, "datasrcdepositaccs": {"name": "DataSrcDepositAccs", "type": "TDataSource"}, "clientaccs": {"name": "ClientAccs", "type": "TOracleDataSet"}, "datasrcclientaccs": {"name": "DataSrcClientAccs", "type": "TDataSource"}, "interestaccs": {"name": "InterestAccs", "type": "TOracleDataSet"}, "datasrcinterestaccs": {"name": "DataSrcInterestAccs", "type": "TDataSource"}, "clientcategoriesdataset": {"name": "ClientCategoriesDataSet", "type": "TOracleDataSet"}, "datasrcclientcategories": {"name": "DataSrcClientCategories", "type": "TDataSource"}, "deposittypes": {"name": "DepositTypes", "type": "TOracleDataSet"}, "datasrcdeposittypes": {"name": "DataSrcdepositTypes", "type": "TDataSource"}, "currencys": {"name": "Currencys", "type": "TOracleDataSet"}, "datasrccurrencys": {"name": "DataSrcCurrencys", "type": "TDataSource"}, "currencysvalute": {"name": "CurrencysVALUTE", "type": "TIntegerField"}, "currencysvalu_name": {"name": "CurrencysVALU_NAME", "type": "TStringField"}, "depositaccsid": {"name": "DepositAccsID", "type": "TFloatField"}, "depositaccsaccno": {"name": "DepositAccsACCNO", "type": "TStringField"}, "depositaccsclientname": {"name": "DepositAccsCLIENTNAME", "type": "TStringField"}, "depositaccsval_acc": {"name": "DepositAccsVAL_ACC", "type": "TIntegerField"}, "clientaccsid": {"name": "ClientAccsID", "type": "TFloatField"}, "clientaccsaccno": {"name": "ClientAccsACCNO", "type": "TStringField"}, "clientaccsclientname": {"name": "ClientAccsCLIENTNAME", "type": "TStringField"}, "clientaccsval_acc": {"name": "ClientAccsVAL_ACC", "type": "TIntegerField"}, "interestaccsid": {"name": "InterestAccsID", "type": "TFloatField"}, "interestaccsaccno": {"name": "InterestAccsACCNO", "type": "TStringField"}, "interestaccsclientname": {"name": "InterestAccsCLIENTNAME", "type": "TStringField"}, "interestaccsval_acc": {"name": "InterestAccsVAL_ACC", "type": "TIntegerField"}, "depositproperties": {"name": "DepositProperties", "type": "TOraclePackage"}}, {});
  U.init(async () => {
    U.var_("DataModuleNewDeposit", null, "TDataModuleNewDeposit");
  });
  U.method("TDataModuleNewDeposit", "DataModuleCreate", async function DataModuleCreate(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mcall((await $.v(C, "Currencys")), "Open", []);
  await $.mcall((await $.v(C, "DepositAccs")), "Open", []);
  await $.mcall((await $.v(C, "ClientAccs")), "Open", []);
  await $.mcall((await $.v(C, "InterestAccs")), "Open", []);
  await $.mcall((await $.v(C, "ClientCategoriesDataSet")), "Open", []);
  await $.mcall((await $.v(C, "DepositTypes")), "Open", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TDataModuleNewDeposit", "DataModuleDestroy", async function DataModuleDestroy(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mcall((await $.v(C, "DepositAccs")), "Close", []);
  await $.mcall((await $.v(C, "ClientAccs")), "Close", []);
  await $.mcall((await $.v(C, "InterestAccs")), "Close", []);
  await $.mcall((await $.v(C, "ClientCategoriesDataSet")), "Close", []);
  await $.mcall((await $.v(C, "DepositTypes")), "Close", []);
  await $.mcall((await $.v(C, "Currencys")), "Close", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  return U;
}
