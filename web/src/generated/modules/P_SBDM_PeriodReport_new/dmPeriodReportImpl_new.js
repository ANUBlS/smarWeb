// Generated from dmPeriodReportImpl_new.pas by pas2js — do not edit by hand; regenerate instead.
/* eslint-disable */
// @ts-nocheck

export default function define($) {
  const U = $.unit("dmPeriodReportImpl_new", ["Windows", "Messages", "SysUtils", "Classes", "Graphics", "Controls", "Forms", "Dialogs", "Db", "OracleData", "Oracle", "sboapiDataModuleImpl"]);
  const C = [U];
  U.defClass("TdmPeriodReport_new", "TDataModule", {"valutes": {"name": "valutes", "type": "TOracleDataSet"}, "valutesvalute": {"name": "valutesVALUTE", "type": "TIntegerField"}, "valutesvalu_name": {"name": "valutesVALU_NAME", "type": "TWideStringField"}, "valutesdatsrc": {"name": "valutesDatSrc", "type": "TDataSource"}, "filials": {"name": "Filials", "type": "TOracleDataSet"}, "filialsid": {"name": "FilialsID", "type": "TFloatField"}, "filialsname": {"name": "FilialsNAME", "type": "TWideStringField"}, "customersdatsrc": {"name": "CustomersDatSrc", "type": "TDataSource"}, "customers": {"name": "Customers", "type": "TOracleDataSet"}, "customersid": {"name": "CustomersID", "type": "TIntegerField"}, "customersname": {"name": "CustomersNAME", "type": "TWideStringField"}, "customerskod": {"name": "CustomersKOD", "type": "TWideStringField"}, "categoriesdatsrc": {"name": "CategoriesDatSrc", "type": "TDataSource"}, "categories": {"name": "Categories", "type": "TOracleDataSet"}, "categoriesid": {"name": "CategoriesID", "type": "TFloatField"}, "categoriescategory": {"name": "CategoriesCATEGORY", "type": "TWideStringField"}, "filialsdatsrc": {"name": "FilialsDatSrc", "type": "TDataSource"}, "persons": {"name": "persons", "type": "TOracleDataSet"}, "personsid": {"name": "personsID", "type": "TFloatField"}, "personsname": {"name": "personsNAME", "type": "TWideStringField"}, "deposittypes": {"name": "DepositTypes", "type": "TOracleDataSet"}, "deposittypesid": {"name": "DepositTypesID", "type": "TFloatField"}, "deposittypestype": {"name": "DepositTypesTYPE", "type": "TWideStringField"}, "personsdatsrc": {"name": "personsDatSrc", "type": "TDataSource"}, "deposittypesdatsrc": {"name": "DepositTypesDatSrc", "type": "TDataSource"}, "deps": {"name": "Deps", "type": "TOracleDataSet"}, "depsid": {"name": "DepsID", "type": "TFloatField"}, "depscontractno": {"name": "DepsCONTRACTNO", "type": "TWideStringField"}, "depscontractaccno": {"name": "DepsCONTRACTACCNO", "type": "TWideStringField"}, "depsdatsrc": {"name": "DepsDatSrc", "type": "TDataSource"}, "resultdata": {"name": "ResultData", "type": "TOracleDataSet"}, "resultdatacontractno": {"name": "ResultDataCONTRACTNO", "type": "TWideStringField"}, "resultdataopendate": {"name": "ResultDataOPENDATE", "type": "TDateTimeField"}, "resultdataclosedate": {"name": "ResultDataCLOSEDATE", "type": "TDateTimeField"}, "resultdatabalans": {"name": "ResultDataBALANS", "type": "TFloatField"}, "resultdatacontractaccno": {"name": "ResultDataCONTRACTACCNO", "type": "TWideStringField"}, "resultdataval_name": {"name": "ResultDataVAL_NAME", "type": "TWideStringField"}, "resultdataannualint": {"name": "ResultDataANNUALINT", "type": "TFloatField"}, "resultdataname": {"name": "ResultDataNAME", "type": "TWideStringField"}, "resultdatafrest": {"name": "ResultDataFREST", "type": "TFloatField"}, "resultdataefrest": {"name": "ResultDataEFREST", "type": "TFloatField"}, "resultdatafinterestrest": {"name": "ResultDataFINTERESTREST", "type": "TFloatField"}, "resultdataefinterestrest": {"name": "ResultDataEFINTERESTREST", "type": "TFloatField"}, "resultdatatramt": {"name": "ResultDataTRAMT", "type": "TFloatField"}, "resultdataetramt": {"name": "ResultDataETRAMT", "type": "TFloatField"}, "resultdatapayamt": {"name": "ResultDataPAYAMT", "type": "TFloatField"}, "resultdataepayamt": {"name": "ResultDataEPAYAMT", "type": "TFloatField"}, "resultdatapayint": {"name": "ResultDataPAYINT", "type": "TFloatField"}, "resultdataepayint": {"name": "ResultDataEPAYINT", "type": "TFloatField"}, "resultdatasrest": {"name": "ResultDataSREST", "type": "TFloatField"}, "resultdataesrest": {"name": "ResultDataESREST", "type": "TFloatField"}, "resultdatasinterestrest": {"name": "ResultDataSINTERESTREST", "type": "TFloatField"}, "resultdataesinterestrest": {"name": "ResultDataESINTERESTREST", "type": "TFloatField"}, "resultdatafilial": {"name": "ResultDataFILIAL", "type": "TWideStringField"}, "resultdatatype": {"name": "ResultDataTYPE", "type": "TWideStringField"}, "sbcm_period_report": {"name": "sbcm_period_report", "type": "TOraclePackage"}}, {});
  U.init(async () => {
    U.var_("dmPeriodReport_new", null, "TdmPeriodReport_new");
  });
  U.method("TdmPeriodReport_new", "DataModuleCreate", async function DataModuleCreate(Self, p0) {
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
  U.method("TdmPeriodReport_new", "DataModuleDestroy", async function DataModuleDestroy(Self, p0) {
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
