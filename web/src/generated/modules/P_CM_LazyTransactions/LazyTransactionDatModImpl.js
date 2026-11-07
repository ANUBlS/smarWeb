// Generated from LazyTransactionDatModImpl.pas by pas2js — do not edit by hand; regenerate instead.
/* eslint-disable */
// @ts-nocheck

export default function define($) {
  const U = $.unit("LazyTransactionDatModImpl", ["Windows", "Messages", "SysUtils", "Classes", "Graphics", "Controls", "Forms", "Dialogs", "Oracle", "Db", "OracleData", "sboapiDataModuleImpl", "sbsystem"]);
  const C = [U];
  U.defClass("TLazTrDatMod", "TDataModule", {"transactionsdata": {"name": "TransactionsData", "type": "TOracleDataSet"}, "transactions": {"name": "Transactions", "type": "TOraclePackage"}, "transactionsdatsrc": {"name": "TransactionsDatSrc", "type": "TDataSource"}, "transactionsdataid": {"name": "TransactionsDataID", "type": "TFloatField"}, "transactionsdatanumberofcredit": {"name": "TransactionsDataNUMBEROFCREDIT", "type": "TStringField"}, "transactionsdatacustname": {"name": "TransactionsDataCUSTNAME", "type": "TStringField"}, "transactionsdatadebitaccno": {"name": "TransactionsDataDEBITACCNO", "type": "TStringField"}, "transactionsdatacreditaccno": {"name": "TransactionsDataCREDITACCNO", "type": "TStringField"}, "transactionsdatadebitcurrency": {"name": "TransactionsDataDEBITCURRENCY", "type": "TStringField"}, "transactionsdatacreditcurrency": {"name": "TransactionsDataCREDITCURRENCY", "type": "TStringField"}, "transactionsdatadebitamount": {"name": "TransactionsDataDEBITAMOUNT", "type": "TFloatField"}, "transactionsdataplanpay": {"name": "TransactionsDataPLANPAY", "type": "TFloatField"}, "transactionsdatatrdescription": {"name": "TransactionsDataTRDESCRIPTION", "type": "TStringField"}, "transactionsdatastatus": {"name": "TransactionsDataSTATUS", "type": "TFloatField"}, "oracledataset1": {"name": "OracleDataSet1", "type": "TOracleDataSet"}, "datasource1": {"name": "DataSource1", "type": "TDataSource"}, "oracledataset1id": {"name": "OracleDataSet1ID", "type": "TFloatField"}, "oracledataset1description": {"name": "OracleDataSet1DESCRIPTION", "type": "TStringField"}, "oracledataset1bank_kod": {"name": "OracleDataSet1BANK_KOD", "type": "TStringField"}}, {});
  U.init(async () => {
    U.var_("LazTrDatMod", null, "TLazTrDatMod");
  });
  U.method("TLazTrDatMod", "DataModuleCreate", async function DataModuleCreate(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t1 = (await $.wobj(C, "TransactionsData"));
    await $.stmt((await $.wcall([$t1], "SetVariable", ["TransactionDate", (await $.wv([$t1], "Get_CurrentDate", C, false))], C)));
    await $.stmt((await $.wcall([$t1], "SetVariable", ["OrderField", "numberofcredit"], C)));
    await $.stmt($.wcall([$t1], "Open", [], C));
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TLazTrDatMod", "DataModuleDestroy", async function DataModuleDestroy(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mcall((await $.v(C, "TransactionsData")), "Close", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  return U;
}
