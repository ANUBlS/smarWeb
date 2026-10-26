// Generated from NewDepositsDataModule.pas by pas2js — do not edit by hand; regenerate instead.
/* eslint-disable */
// @ts-nocheck

export default function define($) {
  const U = $.unit("NewDepositsDataModule", ["SysUtils", "Classes", "DB", "OracleData", "sboapiDataModuleImpl"]);
  const C = [U];
  U.defClass("TNewDepositDataModule", "TDataModule", {"dmdatasetarchive": {"name": "DmDataSetArchive", "type": "TOracleDataSet"}, "dmdatasetarchiveid": {"name": "DmDataSetArchiveID", "type": "TFloatField"}, "dmdatasetarchivecontractno": {"name": "DmDataSetArchiveCONTRACTNO", "type": "TWideStringField"}, "dmdatasetarchiveval_name": {"name": "DmDataSetArchiveVAL_NAME", "type": "TWideStringField"}, "dmdatasetarchivecustomername": {"name": "DmDataSetArchiveCUSTOMERNAME", "type": "TWideStringField"}, "dmdatasetarchiveopendate": {"name": "DmDataSetArchiveOPENDATE", "type": "TDateTimeField"}, "dmdatasetarchiveclosedate": {"name": "DmDataSetArchiveCLOSEDATE", "type": "TDateTimeField"}, "dmdatasetarchiveamount": {"name": "DmDataSetArchiveAMOUNT", "type": "TFloatField"}, "dmdatasetarchiveinterest": {"name": "DmDataSetArchiveINTEREST", "type": "TFloatField"}, "dmdatasetarchivefacticaldebt": {"name": "DmDataSetArchiveFACTICALDEBT", "type": "TFloatField"}, "dmdatasetarchivefacticalinterestdebt": {"name": "DmDataSetArchiveFACTICALINTERESTDEBT", "type": "TFloatField"}, "dmdatasetarchiveostat": {"name": "DmDataSetArchiveOSTAT", "type": "TFloatField"}, "dmdatasetarchivecurrency": {"name": "DmDataSetArchiveCURRENCY", "type": "TFloatField"}, "dmdatasetarchivepersonaltype": {"name": "DmDataSetArchivePERSONALTYPE", "type": "TFloatField"}, "dmdatasetarchiveclienttype": {"name": "DmDataSetArchiveCLIENTTYPE", "type": "TFloatField"}, "dmdatasetarchivebranchid": {"name": "DmDataSetArchiveBRANCHID", "type": "TFloatField"}, "dmdatasetarchivecontracttype": {"name": "DmDataSetArchiveCONTRACTTYPE", "type": "TIntegerField"}, "dmdatasetarchivecustomerid": {"name": "DmDataSetArchiveCUSTOMERID", "type": "TFloatField"}, "dmdatasetarchiveusid": {"name": "DmDataSetArchiveUSID", "type": "TFloatField"}, "dmdatasetarchiveprolongationdate": {"name": "DmDataSetArchivePROLONGATIONDATE", "type": "TDateTimeField"}, "dmdatasetarchivestopcalcdate": {"name": "DmDataSetArchiveSTOPCALCDATE", "type": "TDateTimeField"}, "dmdatasetarchivecontracttypename": {"name": "DmDataSetArchiveCONTRACTTYPENAME", "type": "TWideStringField"}, "dmdatasetarchiveusername": {"name": "DmDataSetArchiveUSERNAME", "type": "TWideStringField"}, "dmdatasetarchivefilial": {"name": "DmDataSetArchiveFILIAL", "type": "TWideStringField"}, "dmdatasetarchiveagentid": {"name": "DmDataSetArchiveAGENTID", "type": "TFloatField"}, "dmarchivedatasrc": {"name": "DMArchiveDataSrc", "type": "TDataSource"}, "valutes": {"name": "Valutes", "type": "TOracleDataSet"}, "valutesvalute": {"name": "ValutesVALUTE", "type": "TIntegerField"}, "valutesvalu_name": {"name": "ValutesVALU_NAME", "type": "TWideStringField"}, "valutesdatsrc": {"name": "ValutesDatSrc", "type": "TDataSource"}, "filials": {"name": "Filials", "type": "TOracleDataSet"}, "filialsid": {"name": "FilialsID", "type": "TFloatField"}, "filialsname": {"name": "FilialsNAME", "type": "TWideStringField"}, "filialsdatsrc": {"name": "FilialsDatSrc", "type": "TDataSource"}, "dm_types": {"name": "dm_types", "type": "TOracleDataSet"}, "dm_typesid": {"name": "dm_typesID", "type": "TFloatField"}, "dm_typestype": {"name": "dm_typesTYPE", "type": "TWideStringField"}, "dm_typesdatsrc": {"name": "dm_typesDatSrc", "type": "TDataSource"}, "dm_categories": {"name": "dm_categories", "type": "TOracleDataSet"}, "dm_categoriesid": {"name": "dm_categoriesID", "type": "TFloatField"}, "dm_categoriescategory": {"name": "dm_categoriesCATEGORY", "type": "TWideStringField"}, "dm_categoriesdatsrc": {"name": "dm_categoriesDatSrc", "type": "TDataSource"}, "dm_persons": {"name": "dm_persons", "type": "TOracleDataSet"}, "dm_personsid": {"name": "dm_personsID", "type": "TFloatField"}, "dm_personsname": {"name": "dm_personsNAME", "type": "TWideStringField"}, "dm_personsdatsrc": {"name": "dm_personsDatSrc", "type": "TDataSource"}, "bankdate": {"name": "BankDate", "type": "TOracleDataSet"}, "bankdatetek_dat": {"name": "BankDateTEK_DAT", "type": "TDateTimeField"}, "bankdatedatsrc": {"name": "BankDateDatSrc", "type": "TDataSource"}, "filialid": {"name": "FilialID", "type": "TOracleDataSet"}, "filialidkod_fil": {"name": "FilialIDKOD_FIL", "type": "TIntegerField"}, "filialiddatsrc": {"name": "FilialIDDatSrc", "type": "TDataSource"}, "usersdatsrc": {"name": "usersDatSrc", "type": "TDataSource"}, "users": {"name": "users", "type": "TOracleDataSet"}, "usersid": {"name": "usersID", "type": "TFloatField"}, "usersname": {"name": "usersNAME", "type": "TWideStringField"}}, {});
  U.init(async () => {
    U.var_("NewDepositDataModule", null, "TNewDepositDataModule");
  });
  U.method("TNewDepositDataModule", "DataModuleCreate", async function DataModuleCreate(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t1 = (await $.v(C, "DmDataSetArchive"));
    await $.stmt((await $.wcall([$t1], "SetVariable", ["OrderField", "cont.id"], C)));
    await $.stmt($.wcall([$t1], "Open", [], C));
  }
  await $.mcall((await $.v(C, "BankDate")), "Open", []);
  await $.mcall((await $.v(C, "FilialID")), "Open", []);
  await $.mcall((await $.v(C, "Valutes")), "Open", []);
  await $.mcall((await $.v(C, "Filials")), "Open", []);
  await $.mcall((await $.v(C, "dm_types")), "Open", []);
  await $.mcall((await $.v(C, "dm_categories")), "Open", []);
  await $.mcall((await $.v(C, "dm_persons")), "Open", []);
  await $.mcall((await $.v(C, "users")), "Open", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TNewDepositDataModule", "DataModuleDestroy", async function DataModuleDestroy(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mcall((await $.v(C, "DmDataSetArchive")), "CloseAll", []);
  await $.mcall((await $.v(C, "BankDate")), "Open", []);
  await $.mcall((await $.v(C, "FilialID")), "Open", []);
  await $.mcall((await $.v(C, "Valutes")), "CloseAll", []);
  await $.mcall((await $.v(C, "Filials")), "CloseAll", []);
  await $.mcall((await $.v(C, "dm_types")), "CloseAll", []);
  await $.mcall((await $.v(C, "dm_categories")), "CloseAll", []);
  await $.mcall((await $.v(C, "dm_persons")), "CloseAll", []);
  await $.mcall((await $.v(C, "users")), "CloseAll", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  return U;
}
