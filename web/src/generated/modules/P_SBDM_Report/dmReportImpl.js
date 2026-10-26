// Generated from dmReportImpl.pas by pas2js — do not edit by hand; regenerate instead.
/* eslint-disable */
// @ts-nocheck

export default function define($) {
  const U = $.unit("dmReportImpl", ["Windows", "Messages", "SysUtils", "Classes", "Graphics", "Controls", "Forms", "Dialogs", "Db", "OracleData", "sboapiDataModuleImpl"]);
  const C = [U];
  U.defClass("TdmReport", "TDataModule", {"valutes": {"name": "valutes", "type": "TOracleDataSet"}, "valutesvalute": {"name": "valutesVALUTE", "type": "TIntegerField"}, "valutesvalu_name": {"name": "valutesVALU_NAME", "type": "Twidestringfield"}, "valutesdatsrc": {"name": "valutesDatSrc", "type": "TDataSource"}, "filials": {"name": "Filials", "type": "TOracleDataSet"}, "filialsid": {"name": "FilialsID", "type": "TFloatField"}, "filialsname": {"name": "FilialsNAME", "type": "Twidestringfield"}, "customersdatsrc": {"name": "CustomersDatSrc", "type": "TDataSource"}, "customers": {"name": "Customers", "type": "TOracleDataSet"}, "categoriesdatsrc": {"name": "CategoriesDatSrc", "type": "TDataSource"}, "categories": {"name": "Categories", "type": "TOracleDataSet"}, "categoriesid": {"name": "CategoriesID", "type": "TFloatField"}, "categoriescategory": {"name": "CategoriesCATEGORY", "type": "Twidestringfield"}, "filialsdatsrc": {"name": "FilialsDatSrc", "type": "TDataSource"}, "persons": {"name": "persons", "type": "TOracleDataSet"}, "personsid": {"name": "personsID", "type": "TFloatField"}, "personsname": {"name": "personsNAME", "type": "Twidestringfield"}, "deposittypes": {"name": "DepositTypes", "type": "TOracleDataSet"}, "deposittypesid": {"name": "DepositTypesID", "type": "TFloatField"}, "deposittypestype": {"name": "DepositTypesTYPE", "type": "Twidestringfield"}, "personsdatsrc": {"name": "personsDatSrc", "type": "TDataSource"}, "deposittypesdatsrc": {"name": "DepositTypesDatSrc", "type": "TDataSource"}, "deps": {"name": "Deps", "type": "TOracleDataSet"}, "depsid": {"name": "DepsID", "type": "TFloatField"}, "depscontractno": {"name": "DepsCONTRACTNO", "type": "Twidestringfield"}, "depscontractaccno": {"name": "DepsCONTRACTACCNO", "type": "Twidestringfield"}, "depsdatsrc": {"name": "DepsDatSrc", "type": "TDataSource"}, "reportdata": {"name": "ReportData", "type": "TOracleDataSet"}, "reportdatacontractno": {"name": "ReportDataCONTRACTNO", "type": "Twidestringfield"}, "reportdataval_name": {"name": "ReportDataVAL_NAME", "type": "Twidestringfield"}, "reportdatacustname": {"name": "ReportDataCUSTNAME", "type": "Twidestringfield"}, "reportdatacontractaccno": {"name": "ReportDataCONTRACTACCNO", "type": "Twidestringfield"}, "reportdatainterestaccno": {"name": "ReportDataINTERESTACCNO", "type": "Twidestringfield"}, "reportdataclientaccno": {"name": "ReportDataCLIENTACCNO", "type": "Twidestringfield"}, "reportdataopendate": {"name": "ReportDataOPENDATE", "type": "TDateTimeField"}, "reportdataclosedate": {"name": "ReportDataCLOSEDATE", "type": "TDateTimeField"}, "reportdataamount": {"name": "ReportDataAMOUNT", "type": "TFloatField"}, "reportdatainterest": {"name": "ReportDataINTEREST", "type": "TFloatField"}, "reportdataoverdueinterest": {"name": "ReportDataOVERDUEINTEREST", "type": "TFloatField"}, "reportdatadueinterest": {"name": "ReportDataDUEINTEREST", "type": "TFloatField"}, "reportdatafacticaldebt": {"name": "ReportDataFACTICALDEBT", "type": "TFloatField"}, "reportdataefacticaldebt": {"name": "ReportDataEFACTICALDEBT", "type": "TFloatField"}, "reportdatafacticalinterestdebt": {"name": "ReportDataFACTICALINTERESTDEBT", "type": "TFloatField"}, "reportdataefacticalinterestdebt": {"name": "ReportDataEFACTICALINTERESTDEBT", "type": "TFloatField"}, "reportdatacategory": {"name": "ReportDataCATEGORY", "type": "Twidestringfield"}, "reportdatapername": {"name": "ReportDataPERNAME", "type": "Twidestringfield"}, "reportdatatype": {"name": "ReportDataTYPE", "type": "Twidestringfield"}, "reportdatafilname": {"name": "ReportDataFILNAME", "type": "Twidestringfield"}, "reportdatacustid": {"name": "ReportDataCUSTID", "type": "TFloatField"}, "reportdatabalans": {"name": "ReportDataBALANS", "type": "TFloatField"}, "reportdatapayamt": {"name": "ReportDataPAYAMT", "type": "TFloatField"}, "reportdataepayamt": {"name": "ReportDataEPAYAMT", "type": "TFloatField"}, "reportdataeamount": {"name": "ReportDataEAMOUNT", "type": "TFloatField"}, "reportdatafirstopdate": {"name": "ReportDataFIRSTOPDATE", "type": "TDateTimeField"}, "reportdatafclosedat": {"name": "ReportDatafclosedat", "type": "TDateField"}, "contracts": {"name": "Contracts", "type": "TOracleDataSet"}, "contractsdatasource": {"name": "ContractsDataSource", "type": "TDataSource"}, "customersid": {"name": "CustomersID", "type": "TIntegerField"}, "customersname": {"name": "CustomersNAME", "type": "Twidestringfield"}, "customerskod": {"name": "CustomersKOD", "type": "Twidestringfield"}, "contractscontractaccid": {"name": "ContractsCONTRACTACCID", "type": "TFloatField"}, "contractsname": {"name": "ContractsNAME", "type": "Twidestringfield"}}, {});
  U.init(async () => {
    U.var_("dmReport", null, "TdmReport");
  });
  U.method("TdmReport", "DataModuleCreate", async function DataModuleCreate(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mcall((await $.v(C, "valutes")), "Open", []);
  await $.mcall((await $.v(C, "Filials")), "Open", []);
  await $.mcall((await $.v(C, "Contracts")), "Open", []);
  await $.mcall((await $.v(C, "Customers")), "Open", []);
  await $.mcall((await $.v(C, "DepositTypes")), "Open", []);
  await $.mcall((await $.v(C, "Categories")), "Open", []);
  await $.mcall((await $.v(C, "persons")), "Open", []);
  await $.mcall((await $.v(C, "Deps")), "Open", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TdmReport", "DataModuleDestroy", async function DataModuleDestroy(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mcall((await $.v(C, "valutes")), "CloseAll", []);
  await $.mcall((await $.v(C, "Filials")), "CloseAll", []);
  await $.mcall((await $.v(C, "Contracts")), "CloseAll", []);
  await $.mcall((await $.v(C, "Customers")), "CloseAll", []);
  await $.mcall((await $.v(C, "DepositTypes")), "CloseAll", []);
  await $.mcall((await $.v(C, "Categories")), "CloseAll", []);
  await $.mcall((await $.v(C, "persons")), "CloseAll", []);
  await $.mcall((await $.v(C, "Deps")), "CloseAll", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TdmReport", "ReportDataCalcFields", async function ReportDataCalcFields(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"dataset": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["dataset"]);
  {
    const $t1 = (await $.v(C, "ReportData"));
    await $.mset((await $.wcall([$t1], "fieldByName", ["fclosedat"], C)), "AsDateTime", (await $.mv((await $.wcall([$t1], "fieldByName", ["FIRSTOPDATE"], C)), "AsDateTime")));
    if ($.truthy((await $.mv((await $.wcall([$t1], "fieldByName", ["FIRSTOPDATE"], C)), "IsNull")))) {
      await $.mset((await $.wcall([$t1], "fieldByName", ["fclosedat"], C)), "AsDateTime", (await $.mv((await $.wcall([$t1], "fieldByName", ["CLOSEDATE"], C)), "AsDateTime")));
    }
  }
  return L0.result;
}, {"params": ["DataSet"], "kind": "procedure", "ptypes": ["TDataSet"]});
  return U;
}
