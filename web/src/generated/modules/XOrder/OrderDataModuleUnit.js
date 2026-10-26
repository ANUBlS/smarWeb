// Generated from OrderDataModuleUnit.pas by pas2js — do not edit by hand; regenerate instead.
/* eslint-disable */
// @ts-nocheck

export default function define($) {
  const U = $.unit("OrderDataModuleUnit", ["Windows", "Messages", "SysUtils", "Classes", "Graphics", "Controls", "Forms", "Dialogs", "Db", "OracleData", "sboapiDataModuleImpl", "OrderImpl"]);
  const C = [U];
  U.defClass("TDataModOrder", "TDataModule", {"sysdat": {"name": "SYSDAT", "type": "TOracleDataSet"}, "currencydata": {"name": "CurrencyData", "type": "TOracleDataSet"}, "datasrccurrency": {"name": "DataSrcCurrency", "type": "TDataSource"}, "sysdattek_dat": {"name": "SYSDATTEK_DAT", "type": "TDateTimeField"}, "currencydatavalute": {"name": "CurrencyDataVALUTE", "type": "TIntegerField"}, "contractaccs": {"name": "ContractAccs", "type": "TOracleDataSet"}, "clientaccs": {"name": "ClientAccs", "type": "TOracleDataSet"}, "reserveaccs": {"name": "ReserveAccs", "type": "TOracleDataSet"}, "datasrccontractaccs": {"name": "DataSrcContractAccs", "type": "TDataSource"}, "datasrcclientaccs": {"name": "DataSrcClientAccs", "type": "TDataSource"}, "datasrcreserveaccs": {"name": "DataSrcReserveAccs", "type": "TDataSource"}, "bankinfodata": {"name": "BankInfoData", "type": "TOracleDataSet"}, "contractaccsval_acc": {"name": "ContractAccsVAL_ACC", "type": "TIntegerField"}, "contractaccskli_id": {"name": "ContractAccsKLI_ID", "type": "TFloatField"}, "reserveaccsval_acc": {"name": "ReserveAccsVAL_ACC", "type": "TIntegerField"}, "clientaccsval_acc": {"name": "ClientAccsVAL_ACC", "type": "TIntegerField"}, "clientaccskli_id": {"name": "ClientAccsKLI_ID", "type": "TFloatField"}, "reserveaccskli_id": {"name": "ReserveAccsKLI_ID", "type": "TFloatField"}, "currencydataval_name": {"name": "CurrencyDataVAL_NAME", "type": "TWideStringField"}, "currencydatavalu_name": {"name": "CurrencyDataVALU_NAME", "type": "TWideStringField"}, "currencydatavalu_bala": {"name": "CurrencyDataVALU_BALA", "type": "TWideStringField"}, "reserveaccsacc_no": {"name": "ReserveAccsACC_NO", "type": "TWideStringField"}, "reserveaccsname": {"name": "ReserveAccsNAME", "type": "TWideStringField"}, "contractaccsacc_no": {"name": "ContractAccsACC_NO", "type": "TWideStringField"}, "contractaccsname": {"name": "ContractAccsNAME", "type": "TWideStringField"}, "clientaccsacc_no": {"name": "ClientAccsACC_NO", "type": "TWideStringField"}, "clientaccsname": {"name": "ClientAccsNAME", "type": "TWideStringField"}}, {});
  U.init(async () => {
    U.var_("DataModOrder", null, "TDataModOrder");
  });
  U.method("TDataModOrder", "DataModuleCreate", async function DataModuleCreate(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mcall((await $.v(C, "SYSDAT")), "Open", []);
  await $.mcall((await $.v(C, "CurrencyData")), "Open", []);
  await $.mcall((await $.v(C, "ContractAccs")), "Open", []);
  await $.mcall((await $.v(C, "ClientAccs")), "Open", []);
  await $.mcall((await $.v(C, "ReserveAccs")), "Open", []);
  await $.mcall((await $.v(C, "BankInfoData")), "Open", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TDataModOrder", "DataModuleDestroy", async function DataModuleDestroy(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mcall((await $.v(C, "SYSDAT")), "CloseAll", []);
  await $.mcall((await $.v(C, "CurrencyData")), "CloseAll", []);
  await $.mcall((await $.v(C, "ContractAccs")), "CloseAll", []);
  await $.mcall((await $.v(C, "ClientAccs")), "CloseAll", []);
  await $.mcall((await $.v(C, "ReserveAccs")), "CloseAll", []);
  await $.mcall((await $.v(C, "BankInfoData")), "CloseAll", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  return U;
}
