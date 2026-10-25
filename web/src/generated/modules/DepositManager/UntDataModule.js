// Generated from UntDataModule.pas by pas2js — do not edit by hand; regenerate instead.
/* eslint-disable */
// @ts-nocheck

export default function define($) {
  const U = $.unit("UntDataModule", ["Windows", "Messages", "SysUtils", "Classes", "Graphics", "Controls", "Forms", "Dialogs", "Oracle", "Db", "OracleData", "sboapiDataModuleImpl"]);
  const C = [U];
  U.defClass("TDataModDeposits", "TDataModule", {"depositsconvpackage": {"name": "DepositsConvPackage", "type": "TOraclePackage"}, "datasrccurrencys": {"name": "DataSrcCurrencys", "type": "TDataSource"}, "currencysdata": {"name": "CurrencysData", "type": "TOracleDataSet"}, "datasrcdeposittypes": {"name": "DataSrcDepositTypes", "type": "TDataSource"}, "deposittypes": {"name": "DepositTypes", "type": "TOracleDataSet"}, "datasrccategories": {"name": "DataSrcCategories", "type": "TDataSource"}, "categoriesdata": {"name": "CategoriesData", "type": "TOracleDataSet"}, "currencysdatacurrencyid": {"name": "CurrencysDataCURRENCYID", "type": "TIntegerField"}, "currencysdatacurrencylongname": {"name": "CurrencysDataCURRENCYLONGNAME", "type": "TStringField"}, "deposittypesid": {"name": "DepositTypesID", "type": "TFloatField"}, "deposittypestype": {"name": "DepositTypesTYPE", "type": "TStringField"}, "categoriesdataid": {"name": "CategoriesDataID", "type": "TFloatField"}, "categoriesdatacategory": {"name": "CategoriesDataCATEGORY", "type": "TStringField"}}, {});
  U.init(async () => {
    U.var_("DataModDeposits", null, "TDataModDeposits");
  });
  U.method("TDataModDeposits", "DataModuleCreate", async function DataModuleCreate(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mcall((await $.v(C, "CurrencysData")), "Open", []);
  await $.mcall((await $.v(C, "CategoriesData")), "Open", []);
  await $.mcall((await $.v(C, "DepositTypes")), "Open", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TDataModDeposits", "DataModuleDestroy", async function DataModuleDestroy(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mcall((await $.v(C, "CurrencysData")), "CloseAll", []);
  await $.mcall((await $.v(C, "CategoriesData")), "CloseAll", []);
  await $.mcall((await $.v(C, "DepositTypes")), "CloseAll", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  return U;
}
