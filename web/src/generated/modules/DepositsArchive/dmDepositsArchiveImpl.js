// Generated from dmDepositsArchiveImpl.pas by pas2js — do not edit by hand; regenerate instead.
/* eslint-disable */
// @ts-nocheck

export default function define($) {
  const U = $.unit("dmDepositsArchiveImpl", ["Windows", "Messages", "SysUtils", "Classes", "Graphics", "Controls", "Forms", "Dialogs", "Db", "OracleData", "sboapiDatamoduleImpl"]);
  const C = [U];
  U.defClass("TdmDepositsArchive", "TDataModule", {"depositsdata": {"name": "DepositsData", "type": "TOracleDataSet"}, "depositsdataid": {"name": "DepositsDataID", "type": "TFloatField"}, "depositsdatacontractno": {"name": "DepositsDataCONTRACTNO", "type": "Twidestringfield"}, "depositsdatacontractaccno": {"name": "DepositsDataCONTRACTACCNO", "type": "Twidestringfield"}, "depositsdataval_name": {"name": "DepositsDataVAL_NAME", "type": "Twidestringfield"}, "depositsdatacustomername": {"name": "DepositsDataCUSTOMERNAME", "type": "Twidestringfield"}, "depositsdatainterestaccno": {"name": "DepositsDataINTERESTACCNO", "type": "Twidestringfield"}, "depositsdataopendate": {"name": "DepositsDataOPENDATE", "type": "TDateTimeField"}, "depositsdataclosedate": {"name": "DepositsDataCLOSEDATE", "type": "TDateTimeField"}, "depositsdataamount": {"name": "DepositsDataAMOUNT", "type": "TFloatField"}, "depositsdataekamount": {"name": "DepositsDataEKAMOUNT", "type": "TFloatField"}, "depositsdatainterest": {"name": "DepositsDataINTEREST", "type": "TFloatField"}, "depositsdatafacticaldebt": {"name": "DepositsDataFACTICALDEBT", "type": "TFloatField"}, "depositsdataekfacticaldebt": {"name": "DepositsDataEKFACTICALDEBT", "type": "TFloatField"}, "depositsdatafacticalinterestdebt": {"name": "DepositsDataFACTICALINTERESTDEBT", "type": "TFloatField"}, "depositsdataekfacticalinterestdebt": {"name": "DepositsDataEKFACTICALINTERESTDEBT", "type": "TFloatField"}, "depositsdatastopcalculationdate": {"name": "DepositsDataSTOPCALCULATIONDATE", "type": "TDateTimeField"}, "depositsdatacurrency": {"name": "DepositsDataCURRENCY", "type": "TFloatField"}, "depositsdatapersonaltype": {"name": "DepositsDataPERSONALTYPE", "type": "TFloatField"}, "depositsdataclienttype": {"name": "DepositsDataCLIENTTYPE", "type": "TFloatField"}, "depositsdatabranchid": {"name": "DepositsDataBRANCHID", "type": "TFloatField"}, "depositsdatacontracttype": {"name": "DepositsDataCONTRACTTYPE", "type": "TIntegerField"}, "depositsdatastatus": {"name": "DepositsDataSTATUS", "type": "TFloatField"}, "depositsdatacustomerid": {"name": "DepositsDataCUSTOMERID", "type": "TFloatField"}, "depositsdatausid": {"name": "DepositsDataUSID", "type": "TFloatField"}, "valutes": {"name": "Valutes", "type": "TOracleDataSet"}, "valutesvalute": {"name": "ValutesVALUTE", "type": "TIntegerField"}, "valutesvalu_name": {"name": "ValutesVALU_NAME", "type": "Twidestringfield"}, "filials": {"name": "Filials", "type": "TOracleDataSet"}, "filialsid": {"name": "FilialsID", "type": "TFloatField"}, "filialsname": {"name": "FilialsNAME", "type": "Twidestringfield"}, "deposittypes": {"name": "DepositTypes", "type": "TOracleDataSet"}, "deposittypesid": {"name": "DepositTypesID", "type": "TFloatField"}, "deposittypestype": {"name": "DepositTypesTYPE", "type": "Twidestringfield"}, "categories": {"name": "Categories", "type": "TOracleDataSet"}, "categoriesid": {"name": "CategoriesID", "type": "TFloatField"}, "categoriescategory": {"name": "CategoriesCATEGORY", "type": "Twidestringfield"}, "persons": {"name": "persons", "type": "TOracleDataSet"}, "personsid": {"name": "personsID", "type": "TFloatField"}, "personsname": {"name": "personsNAME", "type": "Twidestringfield"}, "depositsdatasrc": {"name": "DepositsDataSrc", "type": "TDataSource"}, "valutesdatsrc": {"name": "ValutesDatSrc", "type": "TDataSource"}, "filialsdatsrc": {"name": "FilialsDatSrc", "type": "TDataSource"}, "deposittypesdatsrc": {"name": "DepositTypesDatSrc", "type": "TDataSource"}, "categoriesdatsrc": {"name": "CategoriesDatSrc", "type": "TDataSource"}, "personsdatsrc": {"name": "personsDatSrc", "type": "TDataSource"}, "bankdate": {"name": "BankDate", "type": "TOracleDataSet"}, "bankdatetek_dat": {"name": "BankDateTEK_DAT", "type": "TDateTimeField"}, "tranches": {"name": "Tranches", "type": "TOracleDataSet"}, "tranchesid": {"name": "TranchesID", "type": "TFloatField"}, "tranchestotal": {"name": "TranchesTOTAL", "type": "TFloatField"}, "trancheshdate": {"name": "TranchesHDATE", "type": "TDateTimeField"}, "tranchestrid": {"name": "TranchesTRID", "type": "TFloatField"}, "tranchesdatsrc": {"name": "TranchesDatSrc", "type": "TDataSource"}, "depositinfodatsrc": {"name": "DepositInfoDatSrc", "type": "TDataSource"}, "depositinfo": {"name": "DepositInfo", "type": "TOracleDataSet"}, "depositinfoname": {"name": "DepositInfoNAME", "type": "Twidestringfield"}, "depositinfointerest": {"name": "DepositInfoINTEREST", "type": "TFloatField"}, "depositinfoamount": {"name": "DepositInfoAMOUNT", "type": "TFloatField"}, "depositinfocurrency": {"name": "DepositInfoCURRENCY", "type": "TFloatField"}, "depositinfocustomerid": {"name": "DepositInfoCUSTOMERID", "type": "TFloatField"}, "payments": {"name": "Payments", "type": "TOracleDataSet"}, "paymentsid": {"name": "PaymentsID", "type": "TFloatField"}, "paymentshdate": {"name": "PaymentsHDATE", "type": "TDateTimeField"}, "paymentsfacticaldebt": {"name": "PaymentsFACTICALDEBT", "type": "TFloatField"}, "paymentsinterestdebt": {"name": "PaymentsINTERESTDEBT", "type": "TFloatField"}, "paymentstrid": {"name": "PaymentsTRID", "type": "TFloatField"}, "paymentsinttrid": {"name": "PaymentsINTTRID", "type": "TFloatField"}, "paymentsdatsrc": {"name": "PaymentsDatSrc", "type": "TDataSource"}, "paymentsbankdebt": {"name": "PaymentsBANKDEBT", "type": "TFloatField"}, "paymentsbankinterestdebt": {"name": "PaymentsBANKINTERESTDEBT", "type": "TFloatField"}, "paymentsoverduedebt": {"name": "PaymentsOVERDUEDEBT", "type": "TFloatField"}, "paymentsoverdueinterestdebt": {"name": "PaymentsOVERDUEINTERESTDEBT", "type": "TFloatField"}, "paymentsbefointtrid": {"name": "PaymentsBEFOINTTRID", "type": "TFloatField"}}, {});
  U.init(async () => {
    U.var_("dmDepositsArchive", null, "TdmDepositsArchive");
  });
  U.method("TdmDepositsArchive", "DataModuleCreate", async function DataModuleCreate(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t1 = (await $.v(C, "DepositsData"));
    await $.stmt((await $.wcall([$t1], "SetVariable", ["OrderField", "cont.id"], C)));
    await $.stmt($.wcall([$t1], "Open", [], C));
  }
  await $.mcall((await $.v(C, "Valutes")), "Open", []);
  await $.mcall((await $.v(C, "Filials")), "Open", []);
  await $.mcall((await $.v(C, "DepositTypes")), "Open", []);
  await $.mcall((await $.v(C, "Categories")), "Open", []);
  await $.mcall((await $.v(C, "persons")), "Open", []);
  await $.mcall((await $.v(C, "BankDate")), "open", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TdmDepositsArchive", "DataModuleDestroy", async function DataModuleDestroy(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mcall((await $.v(C, "DepositsData")), "CloseAll", []);
  await $.mcall((await $.v(C, "Valutes")), "CloseAll", []);
  await $.mcall((await $.v(C, "Filials")), "CloseAll", []);
  await $.mcall((await $.v(C, "DepositTypes")), "CloseAll", []);
  await $.mcall((await $.v(C, "Categories")), "CloseAll", []);
  await $.mcall((await $.v(C, "persons")), "CloseAll", []);
  await $.mcall((await $.v(C, "BankDate")), "CloseAll", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  return U;
}
