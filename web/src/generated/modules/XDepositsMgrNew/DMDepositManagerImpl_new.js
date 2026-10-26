// Generated from DMDepositManagerImpl_new.pas by pas2js — do not edit by hand; regenerate instead.
/* eslint-disable */
// @ts-nocheck

export default function define($) {
  const U = $.unit("DMDepositManagerImpl_new", ["Windows", "Messages", "SysUtils", "Classes", "Graphics", "Controls", "Forms", "Dialogs", "Db", "OracleData", "Oracle", "sboapiDataModuleImpl"]);
  const C = [U];
  U.defClass("TDMDepositsManager_new", "TDataModule", {"depositsdatasrc": {"name": "DepositsDataSrc", "type": "TDataSource"}, "valutes": {"name": "Valutes", "type": "TOracleDataSet"}, "valutesvalute": {"name": "ValutesVALUTE", "type": "TIntegerField"}, "valutesvalu_name": {"name": "ValutesVALU_NAME", "type": "TWideStringField"}, "valutesdatsrc": {"name": "ValutesDatSrc", "type": "TDataSource"}, "filials": {"name": "Filials", "type": "TOracleDataSet"}, "filialsid": {"name": "FilialsID", "type": "TFloatField"}, "filialsname": {"name": "FilialsNAME", "type": "TWideStringField"}, "filialsdatsrc": {"name": "FilialsDatSrc", "type": "TDataSource"}, "deposittypes": {"name": "DepositTypes", "type": "TOracleDataSet"}, "deposittypesid": {"name": "DepositTypesID", "type": "TFloatField"}, "deposittypestype": {"name": "DepositTypesTYPE", "type": "TWideStringField"}, "deposittypesdatsrc": {"name": "DepositTypesDatSrc", "type": "TDataSource"}, "categories": {"name": "Categories", "type": "TOracleDataSet"}, "categoriesid": {"name": "CategoriesID", "type": "TFloatField"}, "categoriescategory": {"name": "CategoriesCATEGORY", "type": "TWideStringField"}, "categoriesdatsrc": {"name": "CategoriesDatSrc", "type": "TDataSource"}, "persons": {"name": "persons", "type": "TOracleDataSet"}, "personsid": {"name": "personsID", "type": "TFloatField"}, "personsname": {"name": "personsNAME", "type": "TWideStringField"}, "personsdatsrc": {"name": "personsDatSrc", "type": "TDataSource"}, "bankdate": {"name": "BankDate", "type": "TOracleDataSet"}, "bankdatetek_dat": {"name": "BankDateTEK_DAT", "type": "TDateTimeField"}, "bankdatedatsrc": {"name": "BankDateDatSrc", "type": "TDataSource"}, "filialid": {"name": "FilialID", "type": "TOracleDataSet"}, "filialidkod_fil": {"name": "FilialIDKOD_FIL", "type": "TIntegerField"}, "filialiddatsrc": {"name": "FilialIDDatSrc", "type": "TDataSource"}, "stored_programs": {"name": "Stored_Programs", "type": "TOraclePackage"}, "users": {"name": "users", "type": "TOracleDataSet"}, "usersid": {"name": "usersID", "type": "TFloatField"}, "usersname": {"name": "usersNAME", "type": "TWideStringField"}, "usersdatsrc": {"name": "usersDatSrc", "type": "TDataSource"}, "tranches": {"name": "Tranches", "type": "TOracleDataSet"}, "tranchestotal": {"name": "TranchesTOTAL", "type": "TFloatField"}, "trancheshdate": {"name": "TranchesHDATE", "type": "TDateTimeField"}, "tranchesreserve": {"name": "TranchesRESERVE", "type": "TFloatField"}, "depositsdata": {"name": "DepositsData", "type": "TOracleDataSet"}, "depositsdataid": {"name": "DepositsDataID", "type": "TFloatField"}, "depositsdatacontractno": {"name": "DepositsDataCONTRACTNO", "type": "TWideStringField"}, "depositsdatacontractaccno": {"name": "DepositsDataCONTRACTACCNO", "type": "TWideStringField"}, "depositsdataval_name": {"name": "DepositsDataVAL_NAME", "type": "TWideStringField"}, "depositsdatacustomername": {"name": "DepositsDataCUSTOMERNAME", "type": "TWideStringField"}, "depositsdatainterestaccno": {"name": "DepositsDataINTERESTACCNO", "type": "TWideStringField"}, "depositsdataopendate": {"name": "DepositsDataOPENDATE", "type": "TDateTimeField"}, "depositsdataclosedate": {"name": "DepositsDataCLOSEDATE", "type": "TDateTimeField"}, "depositsdataamount": {"name": "DepositsDataAMOUNT", "type": "TFloatField"}, "depositsdataekamount": {"name": "DepositsDataEKAMOUNT", "type": "TFloatField"}, "depositsdatainterest": {"name": "DepositsDataINTEREST", "type": "TWideStringField"}, "depositsdatafacticaldebt": {"name": "DepositsDataFACTICALDEBT", "type": "TFloatField"}, "depositsdataekfacticaldebt": {"name": "DepositsDataEKFACTICALDEBT", "type": "TFloatField"}, "depositsdatafacticalinterestdebt": {"name": "DepositsDataFACTICALINTERESTDEBT", "type": "TFloatField"}, "depositsdataekfacticalinterestdebt": {"name": "DepositsDataEKFACTICALINTERESTDEBT", "type": "TFloatField"}, "depositsdatastopcalculationdate": {"name": "DepositsDataSTOPCALCULATIONDATE", "type": "TDateTimeField"}, "depositsdatacurrency": {"name": "DepositsDataCURRENCY", "type": "TFloatField"}, "depositsdatapersonaltype": {"name": "DepositsDataPERSONALTYPE", "type": "TFloatField"}, "depositsdataclienttype": {"name": "DepositsDataCLIENTTYPE", "type": "TFloatField"}, "depositsdatabranchid": {"name": "DepositsDataBRANCHID", "type": "TFloatField"}, "depositsdatacontracttype": {"name": "DepositsDataCONTRACTTYPE", "type": "TIntegerField"}, "depositsdatastatus": {"name": "DepositsDataSTATUS", "type": "TFloatField"}, "depositsdatacustomerid": {"name": "DepositsDataCUSTOMERID", "type": "TFloatField"}, "depositsdatausid": {"name": "DepositsDataUSID", "type": "TFloatField"}, "sb_aca": {"name": "sb_aca", "type": "TOraclePackage"}}, {});
  U.init(async () => {
    U.var_("DMDepositsManager_new", null, "TDMDepositsManager_new");
  });
  U.method("TDMDepositsManager_new", "DataModuleCreate", async function DataModuleCreate(Self, p0) {
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
  await $.mcall((await $.v(C, "Tranches")), "Open", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TDMDepositsManager_new", "DataModuleDestroy", async function DataModuleDestroy(Self, p0) {
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
  await $.mcall((await $.v(C, "Tranches")), "CloseAll", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TDMDepositsManager_new", "DepositsDataBeforePost", async function DepositsDataBeforePost(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"dataset": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["dataset"]);
  await $.mcall((await $.mv((await $.v(C, "DMDepositsManager_new")), "DepositsData")), "Cancel", []);
  return L0.result;
}, {"params": ["DataSet"], "kind": "procedure", "ptypes": ["TDataSet"]});
  return U;
}
