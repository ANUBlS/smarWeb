// Generated from NewDepositsDmReportImpl.pas by pas2js — do not edit by hand; regenerate instead.
/* eslint-disable */
// @ts-nocheck

export default function define($) {
  const U = $.unit("NewDepositsDmReportImpl", ["Windows", "Messages", "SysUtils", "Classes", "Graphics", "Controls", "Forms", "Dialogs", "Db", "OracleData"]);
  const C = [U];
  U.defClass("TNewDepositsDmReport", "TDataModule", {"valutes": {"name": "valutes", "type": "TOracleDataSet"}, "valutesvalute": {"name": "valutesVALUTE", "type": "TIntegerField"}, "valutesvalu_name": {"name": "valutesVALU_NAME", "type": "TWideStringField"}, "valutesdatsrc": {"name": "valutesDatSrc", "type": "TDataSource"}, "filials": {"name": "Filials", "type": "TOracleDataSet"}, "filialsid": {"name": "FilialsID", "type": "TFloatField"}, "filialsname": {"name": "FilialsNAME", "type": "TWideStringField"}, "customersdatsrc": {"name": "CustomersDatSrc", "type": "TDataSource"}, "customers": {"name": "Customers", "type": "TOracleDataSet"}, "customersid": {"name": "CustomersID", "type": "TIntegerField"}, "customersname": {"name": "CustomersNAME", "type": "TWideStringField"}, "customerskod": {"name": "CustomersKOD", "type": "TWideStringField"}, "categoriesdatsrc": {"name": "CategoriesDatSrc", "type": "TDataSource"}, "categories": {"name": "Categories", "type": "TOracleDataSet"}, "categoriesid": {"name": "CategoriesID", "type": "TFloatField"}, "categoriescategory": {"name": "CategoriesCATEGORY", "type": "TWideStringField"}, "filialsdatsrc": {"name": "FilialsDatSrc", "type": "TDataSource"}, "persons": {"name": "persons", "type": "TOracleDataSet"}, "personsid": {"name": "personsID", "type": "TFloatField"}, "personsname": {"name": "personsNAME", "type": "TWideStringField"}, "deposittypes": {"name": "DepositTypes", "type": "TOracleDataSet"}, "deposittypesid": {"name": "DepositTypesID", "type": "TFloatField"}, "deposittypestype": {"name": "DepositTypesTYPE", "type": "TWideStringField"}, "personsdatsrc": {"name": "personsDatSrc", "type": "TDataSource"}, "deposittypesdatsrc": {"name": "DepositTypesDatSrc", "type": "TDataSource"}, "deps": {"name": "Deps", "type": "TOracleDataSet"}, "depsid": {"name": "DepsID", "type": "TFloatField"}, "depscontractno": {"name": "DepsCONTRACTNO", "type": "TWideStringField"}, "depscontractaccno": {"name": "DepsCONTRACTACCNO", "type": "TWideStringField"}, "depsdatsrc": {"name": "DepsDatSrc", "type": "TDataSource"}, "reportdata": {"name": "ReportData", "type": "TOracleDataSet"}, "reportdatacontractno": {"name": "ReportDataCONTRACTNO", "type": "TWideStringField"}, "reportdataval_name": {"name": "ReportDataVAL_NAME", "type": "TWideStringField"}, "reportdatacustname": {"name": "ReportDataCUSTNAME", "type": "TWideStringField"}, "reportdatacustid": {"name": "ReportDataCUSTID", "type": "TFloatField"}, "reportdatacontractaccno": {"name": "ReportDataCONTRACTACCNO", "type": "TWideStringField"}, "reportdatainterestaccno": {"name": "ReportDataINTERESTACCNO", "type": "TWideStringField"}, "reportdataclientaccno": {"name": "ReportDataCLIENTACCNO", "type": "TWideStringField"}, "reportdatabalans": {"name": "ReportDataBALANS", "type": "TFloatField"}, "reportdataopendate": {"name": "ReportDataOPENDATE", "type": "TDateTimeField"}, "reportdataclosedate": {"name": "ReportDataCLOSEDATE", "type": "TDateTimeField"}, "reportdatafclosedat": {"name": "ReportDatafclosedat", "type": "TDateField"}, "reportdatafirstopdate": {"name": "ReportDataFIRSTOPDATE", "type": "TDateTimeField"}, "reportdataamount": {"name": "ReportDataAMOUNT", "type": "TFloatField"}, "reportdataeamount": {"name": "ReportDataEAMOUNT", "type": "TFloatField"}, "reportdatainterest": {"name": "ReportDataINTEREST", "type": "TFloatField"}, "reportdataoverdueinterest": {"name": "ReportDataOVERDUEINTEREST", "type": "TFloatField"}, "reportdatadueinterest": {"name": "ReportDataDUEINTEREST", "type": "TFloatField"}, "reportdatafacticaldebt": {"name": "ReportDataFACTICALDEBT", "type": "TFloatField"}, "reportdataefacticaldebt": {"name": "ReportDataEFACTICALDEBT", "type": "TFloatField"}, "reportdatafacticalinterestdebt": {"name": "ReportDataFACTICALINTERESTDEBT", "type": "TFloatField"}, "reportdataefacticalinterestdebt": {"name": "ReportDataEFACTICALINTERESTDEBT", "type": "TFloatField"}, "reportdatapayamt": {"name": "ReportDataPAYAMT", "type": "TFloatField"}, "reportdataepayamt": {"name": "ReportDataEPAYAMT", "type": "TFloatField"}, "reportdatatype": {"name": "ReportDataTYPE", "type": "TWideStringField"}, "reportdatacategory": {"name": "ReportDataCATEGORY", "type": "TWideStringField"}, "reportdatapername": {"name": "ReportDataPERNAME", "type": "TWideStringField"}, "reportdatafilname": {"name": "ReportDataFILNAME", "type": "TWideStringField"}, "contracts": {"name": "Contracts", "type": "TOracleDataSet"}, "contractscontractaccid": {"name": "ContractsCONTRACTACCID", "type": "TFloatField"}, "contractsname": {"name": "ContractsNAME", "type": "TWideStringField"}, "contractsdatasource": {"name": "ContractsDataSource", "type": "TDataSource"}, "reportdataagentname": {"name": "ReportDataAGENTNAME", "type": "TWideStringField"}, "reportdataagentaccno": {"name": "ReportDataAGENTACCNO", "type": "TWideStringField"}, "reportdatausername": {"name": "ReportDataUSERNAME", "type": "TWideStringField"}, "reportdatacapitalperiodname": {"name": "ReportDataCAPITALPERIODNAME", "type": "TWideStringField"}, "reportdataperiodname": {"name": "ReportDataPERIODNAME", "type": "TWideStringField"}, "reportdatapassport": {"name": "ReportDataPASSPORT", "type": "TWideStringField"}, "reportdatapasspin": {"name": "ReportDataPASSPIN", "type": "TWideStringField"}, "reportdatabirthday": {"name": "ReportDataBIRTHDAY", "type": "TDateTimeField"}, "reportdataprizename": {"name": "ReportDataPRIZENAME", "type": "TWideStringField"}}, {});
  U.init(async () => {
    U.var_("NewDepositsDmReport", null, "TNewDepositsDmReport");
  });
  U.method("TNewDepositsDmReport", "DataModuleCreate", async function DataModuleCreate(Self, p0) {
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
  U.method("TNewDepositsDmReport", "DataModuleDestroy", async function DataModuleDestroy(Self, p0) {
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
  U.method("TNewDepositsDmReport", "ReportDataCalcFields", async function ReportDataCalcFields(Self, p0) {
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
