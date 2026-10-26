// Generated from DMDepositManagerImpl.pas by pas2js — do not edit by hand; regenerate instead.
/* eslint-disable */
// @ts-nocheck

export default function define($) {
  const U = $.unit("DMDepositManagerImpl", ["Windows", "Messages", "SysUtils", "Classes", "Graphics", "Controls", "Forms", "Dialogs", "Db", "OracleData", "Oracle", "sboapiDataModuleImpl"]);
  const C = [U];
  U.defClass("TDMDepositsManager", "TDataModule", {"depositsdata": {"name": "DepositsData", "type": "TOracleDataSet"}, "depositsdatasrc": {"name": "DepositsDataSrc", "type": "TDataSource"}, "depositsdatacontractno": {"name": "DepositsDataCONTRACTNO", "type": "Twidestringfield"}, "depositsdatacontractaccno": {"name": "DepositsDataCONTRACTACCNO", "type": "Twidestringfield"}, "depositsdatacustomername": {"name": "DepositsDataCUSTOMERNAME", "type": "Twidestringfield"}, "depositsdataopendate": {"name": "DepositsDataOPENDATE", "type": "TDateTimeField"}, "depositsdataclosedate": {"name": "DepositsDataCLOSEDATE", "type": "TDateTimeField"}, "depositsdataamount": {"name": "DepositsDataAMOUNT", "type": "TFloatField"}, "depositsdatainterest": {"name": "DepositsDataINTEREST", "type": "TFloatField"}, "depositsdatafacticaldebt": {"name": "DepositsDataFACTICALDEBT", "type": "TFloatField"}, "depositsdatafacticalinterestdebt": {"name": "DepositsDataFACTICALINTERESTDEBT", "type": "TFloatField"}, "depositsdatastopcalculationdate": {"name": "DepositsDataSTOPCALCULATIONDATE", "type": "TDateTimeField"}, "depositsdataval_name": {"name": "DepositsDataVAL_NAME", "type": "Twidestringfield"}, "valutes": {"name": "Valutes", "type": "TOracleDataSet"}, "valutesdatsrc": {"name": "ValutesDatSrc", "type": "TDataSource"}, "valutesvalute": {"name": "ValutesVALUTE", "type": "TIntegerField"}, "valutesvalu_name": {"name": "ValutesVALU_NAME", "type": "Twidestringfield"}, "filials": {"name": "Filials", "type": "TOracleDataSet"}, "filialsdatsrc": {"name": "FilialsDatSrc", "type": "TDataSource"}, "filialsid": {"name": "FilialsID", "type": "TFloatField"}, "filialsname": {"name": "FilialsNAME", "type": "Twidestringfield"}, "deposittypes": {"name": "DepositTypes", "type": "TOracleDataSet"}, "deposittypesdatsrc": {"name": "DepositTypesDatSrc", "type": "TDataSource"}, "deposittypesid": {"name": "DepositTypesID", "type": "TFloatField"}, "deposittypestype": {"name": "DepositTypesTYPE", "type": "Twidestringfield"}, "categories": {"name": "Categories", "type": "TOracleDataSet"}, "categoriesdatsrc": {"name": "CategoriesDatSrc", "type": "TDataSource"}, "categoriesid": {"name": "CategoriesID", "type": "TFloatField"}, "categoriescategory": {"name": "CategoriesCATEGORY", "type": "Twidestringfield"}, "persons": {"name": "persons", "type": "TOracleDataSet"}, "personsdatsrc": {"name": "personsDatSrc", "type": "TDataSource"}, "personsid": {"name": "personsID", "type": "TFloatField"}, "personsname": {"name": "personsNAME", "type": "Twidestringfield"}, "depositsdatainterestaccno": {"name": "DepositsDataINTERESTACCNO", "type": "Twidestringfield"}, "depositsdatacurrency": {"name": "DepositsDataCURRENCY", "type": "TFloatField"}, "depositsdatapersonaltype": {"name": "DepositsDataPERSONALTYPE", "type": "TFloatField"}, "depositsdataclienttype": {"name": "DepositsDataCLIENTTYPE", "type": "TFloatField"}, "depositsdatabranchid": {"name": "DepositsDataBRANCHID", "type": "TFloatField"}, "depositsdatacontracttype": {"name": "DepositsDataCONTRACTTYPE", "type": "TIntegerField"}, "depositsdataid": {"name": "DepositsDataID", "type": "TFloatField"}, "bankdate": {"name": "BankDate", "type": "TOracleDataSet"}, "bankdatedatsrc": {"name": "BankDateDatSrc", "type": "TDataSource"}, "filialid": {"name": "FilialID", "type": "TOracleDataSet"}, "filialiddatsrc": {"name": "FilialIDDatSrc", "type": "TDataSource"}, "filialidkod_fil": {"name": "FilialIDKOD_FIL", "type": "TIntegerField"}, "bankdatetek_dat": {"name": "BankDateTEK_DAT", "type": "TDateTimeField"}, "stored_programs": {"name": "Stored_Programs", "type": "TOraclePackage"}, "depositsdatastatus": {"name": "DepositsDataSTATUS", "type": "TFloatField"}, "depositsdatacustomerid": {"name": "DepositsDataCUSTOMERID", "type": "TFloatField"}, "depositsdatausid": {"name": "DepositsDataUSID", "type": "TFloatField"}, "users": {"name": "users", "type": "TOracleDataSet"}, "usersdatsrc": {"name": "usersDatSrc", "type": "TDataSource"}, "usersid": {"name": "usersID", "type": "TFloatField"}, "usersname": {"name": "usersNAME", "type": "Twidestringfield"}, "depositsdataekamount": {"name": "DepositsDataEKAMOUNT", "type": "TFloatField"}, "depositsdataekfacticaldebt": {"name": "DepositsDataEKFACTICALDEBT", "type": "TFloatField"}, "depositsdataekfacticalinterestdebt": {"name": "DepositsDataEKFACTICALINTERESTDEBT", "type": "TFloatField"}, "depositsdatafilial": {"name": "DepositsDataFILIAL", "type": "TWideStringField"}, "depositsdatacontracttypename": {"name": "DepositsDataCONTRACTTYPENAME", "type": "TWideStringField"}, "sb_aca": {"name": "SB_ACA", "type": "TOraclePackage"}, "depositsdataaccountid": {"name": "DepositsDataACCOUNTID", "type": "TFloatField"}}, {});
  U.init(async () => {
    U.var_("DMDepositsManager", null, "TDMDepositsManager");
  });
  U.method("TDMDepositsManager", "DataModuleCreate", async function DataModuleCreate(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t1 = (await $.v(C, "DepositsData"));
    await $.stmt((await $.wcall([$t1], "SetVariable", ["OrderField", "cont.id"], C)));
    await $.stmt($.wcall([$t1], "Open", [], C));
  }
  await $.mcall((await $.v(C, "BankDate")), "Open", []);
  await $.mcall((await $.v(C, "FilialID")), "Open", []);
  await $.mcall((await $.v(C, "Valutes")), "Open", []);
  await $.mcall((await $.v(C, "Filials")), "Open", []);
  await $.mcall((await $.v(C, "DepositTypes")), "Open", []);
  await $.mcall((await $.v(C, "Categories")), "Open", []);
  await $.mcall((await $.v(C, "persons")), "Open", []);
  await $.mcall((await $.v(C, "users")), "Open", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TDMDepositsManager", "DataModuleDestroy", async function DataModuleDestroy(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mcall((await $.v(C, "DepositsData")), "CloseAll", []);
  await $.mcall((await $.v(C, "BankDate")), "Open", []);
  await $.mcall((await $.v(C, "FilialID")), "Open", []);
  await $.mcall((await $.v(C, "Valutes")), "CloseAll", []);
  await $.mcall((await $.v(C, "Filials")), "CloseAll", []);
  await $.mcall((await $.v(C, "DepositTypes")), "CloseAll", []);
  await $.mcall((await $.v(C, "Categories")), "CloseAll", []);
  await $.mcall((await $.v(C, "persons")), "CloseAll", []);
  await $.mcall((await $.v(C, "users")), "CloseAll", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  return U;
}
