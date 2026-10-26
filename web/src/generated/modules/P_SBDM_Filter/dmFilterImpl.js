// Generated from dmFilterImpl.pas by pas2js — do not edit by hand; regenerate instead.
/* eslint-disable */
// @ts-nocheck

export default function define($) {
  const U = $.unit("dmFilterImpl", ["Windows", "Messages", "SysUtils", "Classes", "Graphics", "Controls", "Forms", "Dialogs", "Db", "OracleData", "sboapiDataModuleImpl"]);
  const C = [U];
  U.defClass("TdmFilter", "TDataModule", {"valutes": {"name": "Valutes", "type": "TOracleDataSet"}, "valutesvalute": {"name": "ValutesVALUTE", "type": "TIntegerField"}, "valutesvalu_name": {"name": "ValutesVALU_NAME", "type": "TStringField"}, "filials": {"name": "Filials", "type": "TOracleDataSet"}, "filialsid": {"name": "FilialsID", "type": "TFloatField"}, "filialsname": {"name": "FilialsNAME", "type": "TStringField"}, "categories": {"name": "Categories", "type": "TOracleDataSet"}, "categoriesid": {"name": "CategoriesID", "type": "TFloatField"}, "categoriescategory": {"name": "CategoriesCATEGORY", "type": "TStringField"}, "deposittypes": {"name": "DepositTypes", "type": "TOracleDataSet"}, "deposittypesid": {"name": "DepositTypesID", "type": "TFloatField"}, "deposittypestype": {"name": "DepositTypesTYPE", "type": "TStringField"}, "deposittypesdatsrc": {"name": "DepositTypesDatSrc", "type": "TDataSource"}, "categoriesdatsrc": {"name": "CategoriesDatSrc", "type": "TDataSource"}, "filialsdatsrc": {"name": "FilialsDatSrc", "type": "TDataSource"}, "valutesdatsrc": {"name": "ValutesDatSrc", "type": "TDataSource"}, "customers": {"name": "Customers", "type": "TOracleDataSet"}, "customersid": {"name": "CustomersID", "type": "TIntegerField"}, "customersname": {"name": "CustomersNAME", "type": "TStringField"}, "persons": {"name": "Persons", "type": "TOracleDataSet"}, "personsid": {"name": "PersonsID", "type": "TFloatField"}, "personsname": {"name": "PersonsNAME", "type": "TStringField"}, "personsdatsrc": {"name": "PersonsDatSrc", "type": "TDataSource"}, "customersdatsrc": {"name": "CustomersDatSrc", "type": "TDataSource"}, "users": {"name": "users", "type": "TOracleDataSet"}, "usersdatsrc": {"name": "usersDatSrc", "type": "TDataSource"}, "usersid": {"name": "usersID", "type": "TFloatField"}, "usersname": {"name": "usersNAME", "type": "TStringField"}}, {});
  U.init(async () => {
    U.var_("dmFilter", null, "TdmFilter");
  });
  U.method("TdmFilter", "DataModuleCreate", async function DataModuleCreate(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mcall((await $.v(C, "Valutes")), "Open", []);
  await $.mcall((await $.v(C, "Filials")), "Open", []);
  await $.mcall((await $.v(C, "Categories")), "Open", []);
  await $.mcall((await $.v(C, "DepositTypes")), "Open", []);
  await $.mcall((await $.v(C, "Customers")), "Open", []);
  await $.mcall((await $.v(C, "Persons")), "Open", []);
  await $.mcall((await $.v(C, "users")), "Open", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TdmFilter", "DataModuleDestroy", async function DataModuleDestroy(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mcall((await $.v(C, "Valutes")), "CloseAll", []);
  await $.mcall((await $.v(C, "Filials")), "CloseAll", []);
  await $.mcall((await $.v(C, "Categories")), "CloseAll", []);
  await $.mcall((await $.v(C, "DepositTypes")), "CloseAll", []);
  await $.mcall((await $.v(C, "Customers")), "CloseAll", []);
  await $.mcall((await $.v(C, "Persons")), "CloseAll", []);
  await $.mcall((await $.v(C, "users")), "CloseAll", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  return U;
}
