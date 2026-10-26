// Generated from DMPercentConveringImpl.pas by pas2js — do not edit by hand; regenerate instead.
/* eslint-disable */
// @ts-nocheck

export default function define($) {
  const U = $.unit("DMPercentConveringImpl", ["Windows", "Messages", "SysUtils", "Classes", "Graphics", "Controls", "Forms", "Dialogs", "Db", "OracleData", "Oracle", "sboapiDataModuleImpl"]);
  const C = [U];
  U.defClass("TDMPercentConvering", "TDataModule", {"calceddepositsdatsrc": {"name": "CalcedDepositsDatSrc", "type": "TDataSource"}, "calceddeposits": {"name": "CalcedDeposits", "type": "TOracleDataSet"}, "calceddepositscontractno": {"name": "CalcedDepositsCONTRACTNO", "type": "Twidestringfield"}, "calceddepositscustname": {"name": "CalcedDepositsCUSTNAME", "type": "Twidestringfield"}, "calceddepositsfacticaldebt": {"name": "CalcedDepositsFACTICALDEBT", "type": "TFloatField"}, "calceddepositsfacticalinterestdebt": {"name": "CalcedDepositsFACTICALINTERESTDEBT", "type": "TFloatField"}, "calceddepositsinterest": {"name": "CalcedDepositsINTEREST", "type": "TFloatField"}, "calceddepositscontractaccno": {"name": "CalcedDepositsCONTRACTACCNO", "type": "Twidestringfield"}, "calceddepositsid": {"name": "CalcedDepositsID", "type": "TFloatField"}, "calceddepositsstatus": {"name": "CalcedDepositsSTATUS", "type": "TFloatField"}, "calceddepositsval_name": {"name": "CalcedDepositsVAL_NAME", "type": "Twidestringfield"}, "sbcm_percent_converting": {"name": "sbcm_percent_converting", "type": "TOraclePackage"}, "valutes": {"name": "Valutes", "type": "TOracleDataSet"}, "valutesvalute": {"name": "ValutesVALUTE", "type": "TIntegerField"}, "valutesvalu_name": {"name": "ValutesVALU_NAME", "type": "Twidestringfield"}, "valutesdatsrc": {"name": "ValutesDatSrc", "type": "TDataSource"}, "filials": {"name": "Filials", "type": "TOracleDataSet"}, "filialsdatsrc": {"name": "FilialsDatSrc", "type": "TDataSource"}, "filialsid": {"name": "FilialsID", "type": "TFloatField"}, "filialsname": {"name": "FilialsNAME", "type": "Twidestringfield"}, "categories": {"name": "Categories", "type": "TOracleDataSet"}, "categoriesdatsrc": {"name": "CategoriesDatSrc", "type": "TDataSource"}, "categoriesid": {"name": "CategoriesID", "type": "TFloatField"}, "categoriescategory": {"name": "CategoriesCATEGORY", "type": "Twidestringfield"}, "deposittypes": {"name": "DepositTypes", "type": "TOracleDataSet"}, "deposittypesdatsrc": {"name": "DepositTypesDatSrc", "type": "TDataSource"}, "deposittypesid": {"name": "DepositTypesID", "type": "TFloatField"}, "deposittypestype": {"name": "DepositTypesTYPE", "type": "Twidestringfield"}, "customersdatsrc": {"name": "CustomersDatSrc", "type": "TDataSource"}, "customers": {"name": "Customers", "type": "TOracleDataSet"}, "customersid": {"name": "CustomersID", "type": "TIntegerField"}, "customersname": {"name": "CustomersNAME", "type": "Twidestringfield"}, "calceddepositsinterestaccno": {"name": "CalcedDepositsINTERESTACCNO", "type": "Twidestringfield"}, "personsdatsrc": {"name": "PersonsDatSrc", "type": "TDataSource"}, "persons": {"name": "Persons", "type": "TOracleDataSet"}, "personsid": {"name": "PersonsID", "type": "TFloatField"}, "personsname": {"name": "PersonsNAME", "type": "Twidestringfield"}, "calceddepositscurrency": {"name": "CalcedDepositsCURRENCY", "type": "TFloatField"}, "calceddepositspersonaltype": {"name": "CalcedDepositsPERSONALTYPE", "type": "TFloatField"}, "calceddepositsclienttype": {"name": "CalcedDepositsCLIENTTYPE", "type": "TFloatField"}, "calceddepositscustomerid": {"name": "CalcedDepositsCUSTOMERID", "type": "TFloatField"}, "calceddepositsbranchid": {"name": "CalcedDepositsBRANCHID", "type": "TFloatField"}}, {});
  U.init(async () => {
    U.var_("DMPercentConvering", null, "TDMPercentConvering");
  });
  U.method("TDMPercentConvering", "DataModuleCreate", async function DataModuleCreate(Self, p0) {
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
  U.method("TDMPercentConvering", "DataModuleDestroy", async function DataModuleDestroy(Self, p0) {
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
