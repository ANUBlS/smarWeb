// Generated from ArDataModuleImpl.pas by pas2js — do not edit by hand; regenerate instead.
/* eslint-disable */
// @ts-nocheck

export default function define($) {
  const U = $.unit("ArDataModuleImpl", ["Windows", "Messages", "SysUtils", "Classes", "Graphics", "Controls", "Forms", "Dialogs", "Db", "OracleData", "sboapiDataModuleImpl"]);
  const C = [U];
  U.defClass("TArFilterDataModule", "TDataModule", {"dscurrencys": {"name": "DSCurrencys", "type": "TDataSource"}, "currencys": {"name": "Currencys", "type": "TOracleDataSet"}, "dsbranches": {"name": "DSBranches", "type": "TDataSource"}, "branches": {"name": "Branches", "type": "TOracleDataSet"}, "dspledges": {"name": "DSPledges", "type": "TDataSource"}, "pledges": {"name": "Pledges", "type": "TOracleDataSet"}, "dsusergroups": {"name": "DSUserGroups", "type": "TDataSource"}, "usergroups": {"name": "UserGroups", "type": "TOracleDataSet"}, "dspreserves": {"name": "DSPReserves", "type": "TDataSource"}, "preserves": {"name": "PReserves", "type": "TOracleDataSet"}, "dssreserves": {"name": "DSSReserves", "type": "TDataSource"}, "sreserves": {"name": "SReserves", "type": "TOracleDataSet"}, "dsusers": {"name": "DSUsers", "type": "TDataSource"}, "users": {"name": "Users", "type": "TOracleDataSet"}, "dspersons": {"name": "DSPersons", "type": "TDataSource"}, "persons": {"name": "Persons", "type": "TOracleDataSet"}, "dscategories": {"name": "DSCategories", "type": "TDataSource"}, "categories": {"name": "Categories", "type": "TOracleDataSet"}, "dscredittypes": {"name": "DSCreditTypes", "type": "TDataSource"}, "credittypes": {"name": "CreditTypes", "type": "TOracleDataSet"}, "dscustomers": {"name": "DSCustomers", "type": "TDataSource"}, "customers": {"name": "Customers", "type": "TOracleDataSet"}, "expertdaet": {"name": "ExpertDaet", "type": "TOracleDataSet"}, "expertdsrc": {"name": "ExpertDSrc", "type": "TDataSource"}, "expertdaetid": {"name": "ExpertDaetID", "type": "TFloatField"}, "expertdaetcode": {"name": "ExpertDaetCODE", "type": "TWideStringField"}, "expertdaetname": {"name": "ExpertDaetNAME", "type": "TWideStringField"}, "expertdaetfilialid": {"name": "ExpertDaetFILIALID", "type": "TFloatField"}, "preservesid": {"name": "PReservesID", "type": "TFloatField"}, "preservespercent": {"name": "PReservesPERCENT", "type": "TFloatField"}, "preservesdescription": {"name": "PReservesDESCRIPTION", "type": "TWideStringField"}, "sreservesid": {"name": "SReservesID", "type": "TFloatField"}, "sreservesname": {"name": "SReservesNAME", "type": "TWideStringField"}}, {});
  U.init(async () => {
    U.var_("ArFilterDataModule", null, "TArFilterDataModule");
  });
  U.method("TArFilterDataModule", "PReservesCalcFields", async function PReservesCalcFields(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"dataset": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["dataset"]);
  {
    const $t1 = L0["dataset"];
    await $.mset((await $.wcall([$t1], "FieldByName", ["FULLDESC"], C)), "AsString", $.add($.add((await $.mv((await $.wcall([$t1], "FieldByName", ["PERCENT"], C)), "AsString")), "% - "), (await $.mv((await $.wcall([$t1], "FieldByName", ["DESCRIPTION"], C)), "AsString"))));
  }
  return L0.result;
}, {"params": ["DataSet"], "kind": "procedure", "ptypes": ["TDataSet"]});
  U.method("TArFilterDataModule", "DataModuleCreate", async function DataModuleCreate(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mcall((await $.v(C, "SReserves")), "Open", []);
  await $.mcall((await $.v(C, "PReserves")), "Open", []);
  await $.mcall((await $.v(C, "Currencys")), "Open", []);
  await $.mcall((await $.v(C, "Branches")), "Open", []);
  await $.mcall((await $.v(C, "Pledges")), "Open", []);
  await $.mcall((await $.v(C, "UserGroups")), "Open", []);
  await $.mcall((await $.v(C, "Users")), "Open", []);
  await $.mcall((await $.v(C, "Persons")), "Open", []);
  await $.mcall((await $.v(C, "Categories")), "Open", []);
  await $.mcall((await $.v(C, "CreditTypes")), "Open", []);
  await $.mcall((await $.v(C, "Customers")), "Open", []);
  await $.mcall((await $.v(C, "ExpertDaet")), "Open", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TArFilterDataModule", "DataModuleDestroy", async function DataModuleDestroy(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mcall((await $.v(C, "SReserves")), "CloseAll", []);
  await $.mcall((await $.v(C, "PReserves")), "CloseAll", []);
  await $.mcall((await $.v(C, "Currencys")), "CloseAll", []);
  await $.mcall((await $.v(C, "Branches")), "CloseAll", []);
  await $.mcall((await $.v(C, "Pledges")), "CloseAll", []);
  await $.mcall((await $.v(C, "UserGroups")), "CloseAll", []);
  await $.mcall((await $.v(C, "Users")), "CloseAll", []);
  await $.mcall((await $.v(C, "Persons")), "CloseAll", []);
  await $.mcall((await $.v(C, "Categories")), "CloseAll", []);
  await $.mcall((await $.v(C, "CreditTypes")), "CloseAll", []);
  await $.mcall((await $.v(C, "Customers")), "CloseAll", []);
  await $.mcall((await $.v(C, "ExpertDaet")), "CloseAll", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  return U;
}
