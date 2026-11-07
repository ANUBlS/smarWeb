// Generated from dmFinishPeriodCreditsImpl.pas by pas2js — do not edit by hand; regenerate instead.
/* eslint-disable */
// @ts-nocheck

export default function define($) {
  const U = $.unit("dmFinishPeriodCreditsImpl", ["Windows", "Messages", "SysUtils", "Classes", "Graphics", "Controls", "Forms", "Dialogs", "Db", "OracleData", "SboApiDataModuleImpl"]);
  const C = [U];
  U.defClass("TdmFinishPeriodCredits", "TDataModule", {"valutes": {"name": "valutes", "type": "TOracleDataSet"}, "valutesvalute": {"name": "valutesVALUTE", "type": "TIntegerField"}, "valutesvalu_name": {"name": "valutesVALU_NAME", "type": "TWideStringField"}, "valutesdatsrc": {"name": "valutesDatSrc", "type": "TDataSource"}, "filials": {"name": "Filials", "type": "TOracleDataSet"}, "filialsid": {"name": "FilialsID", "type": "TFloatField"}, "filialsname": {"name": "FilialsNAME", "type": "TWideStringField"}, "pledgsdatsrc": {"name": "pledgsDatSrc", "type": "TDataSource"}, "pledgs": {"name": "pledgs", "type": "TOracleDataSet"}, "categoriesdatsrc": {"name": "CategoriesDatSrc", "type": "TDataSource"}, "categories": {"name": "Categories", "type": "TOracleDataSet"}, "filialsdatsrc": {"name": "FilialsDatSrc", "type": "TDataSource"}, "persons": {"name": "persons", "type": "TOracleDataSet"}, "credittypes": {"name": "CreditTypes", "type": "TOracleDataSet"}, "personsdatsrc": {"name": "personsDatSrc", "type": "TDataSource"}, "credittypesdatsrc": {"name": "CreditTypesDatSrc", "type": "TDataSource"}, "reportdata": {"name": "ReportData", "type": "TOracleDataSet"}, "pledgsid": {"name": "pledgsID", "type": "TFloatField"}, "pledgsdescription": {"name": "pledgsDESCRIPTION", "type": "TWideStringField"}, "credittypesid": {"name": "CreditTypesID", "type": "TFloatField"}, "credittypesdescription": {"name": "CreditTypesDESCRIPTION", "type": "TWideStringField"}, "personsid": {"name": "personsID", "type": "TFloatField"}, "personsdescripion": {"name": "personsDESCRIPION", "type": "TWideStringField"}, "reserves": {"name": "Reserves", "type": "TOracleDataSet"}, "reservesdatsrc": {"name": "ReservesDatSrc", "type": "TDataSource"}, "duereserves": {"name": "DueReserves", "type": "TOracleDataSet"}, "duereservesdatsrc": {"name": "DueReservesDatSrc", "type": "TDataSource"}, "usrgroups": {"name": "usrgroups", "type": "TOracleDataSet"}, "usrgroupsdatsrc": {"name": "usrgroupsDatSrc", "type": "TDataSource"}, "reservesid": {"name": "ReservesID", "type": "TFloatField"}, "reservesdescr": {"name": "ReservesDESCR", "type": "TWideStringField"}, "duereservesid": {"name": "DueReservesID", "type": "TFloatField"}, "duereservesdescr": {"name": "DueReservesDESCR", "type": "TWideStringField"}, "usrgroupsid": {"name": "usrgroupsID", "type": "TFloatField"}, "usrgroupsdescription": {"name": "usrgroupsDESCRIPTION", "type": "TWideStringField"}, "reportdataopendate": {"name": "ReportDataOPENDATE", "type": "TDateTimeField"}, "reportdataclosedate": {"name": "ReportDataCLOSEDATE", "type": "TDateTimeField"}, "reportdatacreditlineamount": {"name": "ReportDataCREDITLINEAMOUNT", "type": "TFloatField"}, "reportdataannualyinterestrate": {"name": "ReportDataANNUALYINTERESTRATE", "type": "TFloatField"}, "reportdatacustname": {"name": "ReportDataCUSTNAME", "type": "TWideStringField"}, "reportdatacustid": {"name": "ReportDataCUSTID", "type": "TIntegerField"}, "reportdatacontractaccno": {"name": "ReportDataCONTRACTACCNO", "type": "TWideStringField"}, "reportdatabalacc": {"name": "ReportDataBALACC", "type": "TFloatField"}, "reportdatarest": {"name": "ReportDataREST", "type": "TFloatField"}, "reportdatainterestrest": {"name": "ReportDataINTERESTREST", "type": "TFloatField"}, "reportdataduerest": {"name": "ReportDataDUEREST", "type": "TFloatField"}, "reportdatadueinterestrest": {"name": "ReportDataDUEINTERESTREST", "type": "TFloatField"}, "reportdatastopcalcdate": {"name": "ReportDataSTOPCALCDATE", "type": "TDateTimeField"}, "reportdatareserveid": {"name": "ReportDataRESERVEID", "type": "TFloatField"}, "reportdataduereserveid": {"name": "ReportDataDUERESERVEID", "type": "TFloatField"}, "categoriesid": {"name": "CategoriesID", "type": "TFloatField"}, "categoriesdescription": {"name": "CategoriesDESCRIPTION", "type": "TWideStringField"}, "customers": {"name": "Customers", "type": "TOracleDataSet"}, "customersdatsrc": {"name": "CustomersDatSrc", "type": "TDataSource"}, "customersid": {"name": "CustomersID", "type": "TIntegerField"}, "customersname": {"name": "CustomersNAME", "type": "TWideStringField"}, "customerskod": {"name": "CustomersKOD", "type": "TWideStringField"}, "reportdatapayamt": {"name": "ReportDataPAYAMT", "type": "TFloatField"}}, {});
  U.init(async () => {
    U.var_("dmFinishPeriodCredits", null, "TdmFinishPeriodCredits");
  });
  U.method("TdmFinishPeriodCredits", "DataModuleCreate", async function DataModuleCreate(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mcall((await $.v(C, "valutes")), "Open", []);
  await $.mcall((await $.v(C, "Filials")), "Open", []);
  await $.mcall((await $.v(C, "pledgs")), "Open", []);
  await $.mcall((await $.v(C, "CreditTypes")), "Open", []);
  await $.mcall((await $.v(C, "Categories")), "Open", []);
  await $.mcall((await $.v(C, "persons")), "Open", []);
  await $.mcall((await $.v(C, "Reserves")), "Open", []);
  await $.mcall((await $.v(C, "DueReserves")), "Open", []);
  await $.mcall((await $.v(C, "usrgroups")), "Open", []);
  await $.mcall((await $.v(C, "Customers")), "Open", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TdmFinishPeriodCredits", "DataModuleDestroy", async function DataModuleDestroy(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mcall((await $.v(C, "valutes")), "CloseAll", []);
  await $.mcall((await $.v(C, "Filials")), "CloseAll", []);
  await $.mcall((await $.v(C, "pledgs")), "CloseAll", []);
  await $.mcall((await $.v(C, "CreditTypes")), "CloseAll", []);
  await $.mcall((await $.v(C, "Categories")), "CloseAll", []);
  await $.mcall((await $.v(C, "persons")), "CloseAll", []);
  await $.mcall((await $.v(C, "Reserves")), "CloseAll", []);
  await $.mcall((await $.v(C, "DueReserves")), "CloseAll", []);
  await $.mcall((await $.v(C, "usrgroups")), "CloseAll", []);
  await $.mcall((await $.v(C, "Customers")), "CloseAll", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  return U;
}
