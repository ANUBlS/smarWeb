// Generated from dmPeriodReportImpl.pas by pas2js — do not edit by hand; regenerate instead.
/* eslint-disable */
// @ts-nocheck

export default function define($) {
  const U = $.unit("dmPeriodReportImpl", ["Windows", "Messages", "SysUtils", "Classes", "Graphics", "Controls", "Forms", "Dialogs", "Db", "OracleData", "Oracle", "sboapiDataModuleImpl"]);
  const C = [U];
  U.defClass("TdmPeriodReport", "TDataModule", {"valutes": {"name": "valutes", "type": "TOracleDataSet"}, "valutesdatsrc": {"name": "valutesDatSrc", "type": "TDataSource"}, "filials": {"name": "Filials", "type": "TOracleDataSet"}, "customersdatsrc": {"name": "CustomersDatSrc", "type": "TDataSource"}, "customers": {"name": "Customers", "type": "TOracleDataSet"}, "categoriesdatsrc": {"name": "CategoriesDatSrc", "type": "TDataSource"}, "categories": {"name": "Categories", "type": "TOracleDataSet"}, "filialsdatsrc": {"name": "FilialsDatSrc", "type": "TDataSource"}, "persons": {"name": "persons", "type": "TOracleDataSet"}, "deposittypes": {"name": "DepositTypes", "type": "TOracleDataSet"}, "personsdatsrc": {"name": "personsDatSrc", "type": "TDataSource"}, "deposittypesdatsrc": {"name": "DepositTypesDatSrc", "type": "TDataSource"}, "valutesvalute": {"name": "valutesVALUTE", "type": "TIntegerField"}, "valutesvalu_name": {"name": "valutesVALU_NAME", "type": "Twidestringfield"}, "filialsid": {"name": "FilialsID", "type": "TFloatField"}, "filialsname": {"name": "FilialsNAME", "type": "Twidestringfield"}, "customersid": {"name": "CustomersID", "type": "TIntegerField"}, "customersname": {"name": "CustomersNAME", "type": "Twidestringfield"}, "deposittypesid": {"name": "DepositTypesID", "type": "TFloatField"}, "deposittypestype": {"name": "DepositTypesTYPE", "type": "Twidestringfield"}, "categoriesid": {"name": "CategoriesID", "type": "TFloatField"}, "categoriescategory": {"name": "CategoriesCATEGORY", "type": "Twidestringfield"}, "personsid": {"name": "personsID", "type": "TFloatField"}, "personsname": {"name": "personsNAME", "type": "Twidestringfield"}, "deps": {"name": "Deps", "type": "TOracleDataSet"}, "depsdatsrc": {"name": "DepsDatSrc", "type": "TDataSource"}, "depsid": {"name": "DepsID", "type": "TFloatField"}, "depscontractno": {"name": "DepsCONTRACTNO", "type": "Twidestringfield"}, "depscontractaccno": {"name": "DepsCONTRACTACCNO", "type": "Twidestringfield"}, "customerskod": {"name": "CustomersKOD", "type": "Twidestringfield"}, "resultdata": {"name": "ResultData", "type": "TOracleDataSet"}, "resultdatacontractno": {"name": "ResultDataCONTRACTNO", "type": "Twidestringfield"}, "resultdataopendate": {"name": "ResultDataOPENDATE", "type": "TDateTimeField"}, "resultdataclosedate": {"name": "ResultDataCLOSEDATE", "type": "TDateTimeField"}, "resultdatacontractaccno": {"name": "ResultDataCONTRACTACCNO", "type": "Twidestringfield"}, "resultdataname": {"name": "ResultDataNAME", "type": "Twidestringfield"}, "resultdatafrest": {"name": "ResultDataFREST", "type": "TFloatField"}, "resultdataefrest": {"name": "ResultDataEFREST", "type": "TFloatField"}, "resultdatafinterestrest": {"name": "ResultDataFINTERESTREST", "type": "TFloatField"}, "resultdataefinterestrest": {"name": "ResultDataEFINTERESTREST", "type": "TFloatField"}, "resultdatatramt": {"name": "ResultDataTRAMT", "type": "TFloatField"}, "resultdataetramt": {"name": "ResultDataETRAMT", "type": "TFloatField"}, "resultdatapayamt": {"name": "ResultDataPAYAMT", "type": "TFloatField"}, "resultdataepayamt": {"name": "ResultDataEPAYAMT", "type": "TFloatField"}, "resultdatapayint": {"name": "ResultDataPAYINT", "type": "TFloatField"}, "resultdataepayint": {"name": "ResultDataEPAYINT", "type": "TFloatField"}, "resultdatasrest": {"name": "ResultDataSREST", "type": "TFloatField"}, "resultdataesrest": {"name": "ResultDataESREST", "type": "TFloatField"}, "resultdatasinterestrest": {"name": "ResultDataSINTERESTREST", "type": "TFloatField"}, "resultdataesinterestrest": {"name": "ResultDataESINTERESTREST", "type": "TFloatField"}, "sbcm_period_report": {"name": "sbcm_period_report", "type": "TOraclePackage"}, "resultdataannualint": {"name": "ResultDataANNUALINT", "type": "TFloatField"}, "resultdataval_name": {"name": "ResultDataVAL_NAME", "type": "Twidestringfield"}, "resultdatabalans": {"name": "ResultDataBALANS", "type": "TFloatField"}, "resultdatafilial": {"name": "ResultDataFILIAL", "type": "Twidestringfield"}, "resultdatatype": {"name": "ResultDataTYPE", "type": "Twidestringfield"}}, {});
  U.init(async () => {
    U.var_("dmPeriodReport", null, "TdmPeriodReport");
  });
  U.method("TdmPeriodReport", "DataModuleCreate", async function DataModuleCreate(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mcall((await $.v(C, "valutes")), "Open", []);
  await $.mcall((await $.v(C, "Filials")), "Open", []);
  await $.mcall((await $.v(C, "Customers")), "Open", []);
  await $.mcall((await $.v(C, "DepositTypes")), "Open", []);
  await $.mcall((await $.v(C, "Categories")), "Open", []);
  await $.mcall((await $.v(C, "persons")), "Open", []);
  await $.mcall((await $.v(C, "Deps")), "Open", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TdmPeriodReport", "DataModuleDestroy", async function DataModuleDestroy(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mcall((await $.v(C, "valutes")), "CloseAll", []);
  await $.mcall((await $.v(C, "Filials")), "CloseAll", []);
  await $.mcall((await $.v(C, "Customers")), "CloseAll", []);
  await $.mcall((await $.v(C, "DepositTypes")), "CloseAll", []);
  await $.mcall((await $.v(C, "Categories")), "CloseAll", []);
  await $.mcall((await $.v(C, "persons")), "CloseAll", []);
  await $.mcall((await $.v(C, "Deps")), "CloseAll", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  return U;
}
