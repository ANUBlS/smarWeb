// Generated from NewDepositsPercentConvertingImpl.pas by pas2js — do not edit by hand; regenerate instead.
/* eslint-disable */
// @ts-nocheck

export default function define($) {
  const U = $.unit("NewDepositsPercentConvertingImpl", ["Windows", "Messages", "SysUtils", "Classes", "Graphics", "Controls", "Forms", "Dialogs", "Db", "OracleData", "Oracle", "sboapiDataModuleImpl"]);
  const C = [U];
  U.defClass("TNewDepositsDMPercentConverting", "TDataModule", {"calceddepositsdatsrc": {"name": "CalcedDepositsDatSrc", "type": "TDataSource"}, "calceddeposits": {"name": "CalcedDeposits", "type": "TOracleDataSet"}, "dm_calculator": {"name": "dm_calculator", "type": "TOraclePackage"}, "valutes": {"name": "Valutes", "type": "TOracleDataSet"}, "valutesvalute": {"name": "ValutesVALUTE", "type": "TIntegerField"}, "valutesdatsrc": {"name": "ValutesDatSrc", "type": "TDataSource"}, "filials": {"name": "Filials", "type": "TOracleDataSet"}, "filialsdatsrc": {"name": "FilialsDatSrc", "type": "TDataSource"}, "filialsid": {"name": "FilialsID", "type": "TFloatField"}, "categories": {"name": "Categories", "type": "TOracleDataSet"}, "categoriesdatsrc": {"name": "CategoriesDatSrc", "type": "TDataSource"}, "categoriesid": {"name": "CategoriesID", "type": "TFloatField"}, "deposittypes": {"name": "DepositTypes", "type": "TOracleDataSet"}, "deposittypesdatsrc": {"name": "DepositTypesDatSrc", "type": "TDataSource"}, "deposittypesid": {"name": "DepositTypesID", "type": "TFloatField"}, "customersdatsrc": {"name": "CustomersDatSrc", "type": "TDataSource"}, "customers": {"name": "Customers", "type": "TOracleDataSet"}, "customersid": {"name": "CustomersID", "type": "TIntegerField"}, "personsdatsrc": {"name": "PersonsDatSrc", "type": "TDataSource"}, "persons": {"name": "Persons", "type": "TOracleDataSet"}, "personsid": {"name": "PersonsID", "type": "TFloatField"}, "valutesvalu_name": {"name": "ValutesVALU_NAME", "type": "TWideStringField"}, "filialsname": {"name": "FilialsNAME", "type": "TWideStringField"}, "categoriescategory": {"name": "CategoriesCATEGORY", "type": "TWideStringField"}, "deposittypestype": {"name": "DepositTypesTYPE", "type": "TWideStringField"}, "customersname": {"name": "CustomersNAME", "type": "TWideStringField"}, "personsname": {"name": "PersonsNAME", "type": "TWideStringField"}, "calceddepositsid": {"name": "CalcedDepositsID", "type": "TFloatField"}, "calceddepositscontractno": {"name": "CalcedDepositsCONTRACTNO", "type": "TWideStringField"}, "calceddepositscustname": {"name": "CalcedDepositsCUSTNAME", "type": "TWideStringField"}, "calceddepositsfacticaldebt": {"name": "CalcedDepositsFACTICALDEBT", "type": "TFloatField"}, "calceddepositsfacticalinterestdebt": {"name": "CalcedDepositsFACTICALINTERESTDEBT", "type": "TFloatField"}, "calceddepositsinterest": {"name": "CalcedDepositsINTEREST", "type": "TFloatField"}, "calceddepositsstatus": {"name": "CalcedDepositsSTATUS", "type": "TFloatField"}, "calceddepositsval_name": {"name": "CalcedDepositsVAL_NAME", "type": "TWideStringField"}, "calceddepositscurrency": {"name": "CalcedDepositsCURRENCY", "type": "TFloatField"}, "calceddepositspersonaltype": {"name": "CalcedDepositsPERSONALTYPE", "type": "TFloatField"}, "calceddepositsclienttype": {"name": "CalcedDepositsCLIENTTYPE", "type": "TFloatField"}, "calceddepositscustomerid": {"name": "CalcedDepositsCUSTOMERID", "type": "TFloatField"}, "calceddepositsbranchid": {"name": "CalcedDepositsBRANCHID", "type": "TFloatField"}, "calceddepositscontype": {"name": "CalcedDepositsCONTYPE", "type": "TWideStringField"}, "calceddepositscapitalname": {"name": "CalcedDepositsCAPITALNAME", "type": "TWideStringField"}, "calceddepositsopendate": {"name": "CalcedDepositsOPENDATE", "type": "TDateTimeField"}, "calceddepositsclosedate": {"name": "CalcedDepositsCLOSEDATE", "type": "TDateTimeField"}, "calceddepositscontper": {"name": "CalcedDepositsCONTPER", "type": "TFloatField"}, "calceddepositsprecent": {"name": "CalcedDepositsPRECENT", "type": "TFloatField"}}, {});
  U.init(async () => {
    U.var_("NewDepositsDMPercentConverting", null, "TNewDepositsDMPercentConverting");
  });
  U.method("TNewDepositsDMPercentConverting", "DataModuleCreate", async function DataModuleCreate(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t1 = (await $.v(C, "CalcedDeposits"));
    await $.stmt((await $.wcall([$t1], "SetVariable", ["OrderField", "ID"], C)));
    await $.stmt($.wcall([$t1], "Open", [], C));
  }
  await $.mcall((await $.v(C, "Valutes")), "Open", []);
  await $.mcall((await $.v(C, "Filials")), "Open", []);
  await $.mcall((await $.v(C, "Categories")), "Open", []);
  await $.mcall((await $.v(C, "DepositTypes")), "Open", []);
  await $.mcall((await $.v(C, "Customers")), "Open", []);
  await $.mcall((await $.v(C, "Persons")), "Open", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TNewDepositsDMPercentConverting", "DataModuleDestroy", async function DataModuleDestroy(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mcall((await $.v(C, "CalcedDeposits")), "CloseAll", []);
  await $.mcall((await $.v(C, "Valutes")), "CloseAll", []);
  await $.mcall((await $.v(C, "Filials")), "CloseAll", []);
  await $.mcall((await $.v(C, "Categories")), "CloseAll", []);
  await $.mcall((await $.v(C, "DepositTypes")), "CloseAll", []);
  await $.mcall((await $.v(C, "Customers")), "CloseAll", []);
  await $.mcall((await $.v(C, "Persons")), "CloseAll", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  return U;
}
