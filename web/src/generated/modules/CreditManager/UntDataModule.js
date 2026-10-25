// Generated from UntDataModule.pas by pas2js — do not edit by hand; regenerate instead.
/* eslint-disable */
// @ts-nocheck

export default function define($) {
  const U = $.unit("UntDataModule", ["Windows", "Messages", "SysUtils", "Classes", "Graphics", "Controls", "Forms", "Dialogs", "Db", "OracleData", "Oracle", "sboapiDataModuleImpl"]);
  const C = [U];
  U.defClass("TContDataModule", "TDataModule", {"currencys": {"name": "Currencys", "type": "TOracleDataSet"}, "datasrccurrencys": {"name": "DataSrcCurrencys", "type": "TDataSource"}, "categories": {"name": "Categories", "type": "TOracleDataSet"}, "datasrccategories": {"name": "DataSrcCategories", "type": "TDataSource"}, "datasrctypes": {"name": "DataSrcTypes", "type": "TDataSource"}, "credittypes": {"name": "CreditTypes", "type": "TOracleDataSet"}, "credittypesid": {"name": "CreditTypesID", "type": "TIntegerField"}, "credittypestype": {"name": "CreditTypesTYPE", "type": "TStringField"}, "datasrccreditexporter": {"name": "DataSrcCreditExporter", "type": "TDataSource"}, "reliabilitydata": {"name": "ReliabilityData", "type": "TOracleDataSet"}, "reservedata": {"name": "ReserveData", "type": "TOracleDataSet"}, "datasrcreserve": {"name": "DataSrcReserve", "type": "TDataSource"}, "convertingpackage": {"name": "ConvertingPackage", "type": "TOraclePackage"}}, {});
  U.init(async () => {
    U.var_("ContDataModule", null, "TContDataModule");
  });
  U.method("TContDataModule", "DataModuleCreate", async function DataModuleCreate(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mcall((await $.v(C, "Currencys")), "Open", []);
  await $.mcall((await $.v(C, "Categories")), "Open", []);
  await $.mcall((await $.v(C, "CreditTypes")), "Open", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TContDataModule", "DataModuleDestroy", async function DataModuleDestroy(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mcall((await $.v(C, "Currencys")), "Close", []);
  await $.mcall((await $.v(C, "Categories")), "Close", []);
  await $.mcall((await $.v(C, "CreditTypes")), "Close", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  return U;
}
