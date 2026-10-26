// Generated from NewDepositDataModule.pas by pas2js — do not edit by hand; regenerate instead.
/* eslint-disable */
// @ts-nocheck

export default function define($) {
  const U = $.unit("NewDepositDataModule", ["SysUtils", "Classes", "Oracle", "DB", "OracleData", "sboapiDataModuleImpl"]);
  const C = [U];
  U.defClass("TNewDepsitDataModule", "TDataModule", {"valutes": {"name": "Valutes", "type": "TOracleDataSet"}, "valutesvalute": {"name": "ValutesVALUTE", "type": "TIntegerField"}, "valutesvalu_name": {"name": "ValutesVALU_NAME", "type": "TWideStringField"}, "valutesdatsrc": {"name": "ValutesDatSrc", "type": "TDataSource"}, "filials": {"name": "Filials", "type": "TOracleDataSet"}, "filialsid": {"name": "FilialsID", "type": "TFloatField"}, "filialsname": {"name": "FilialsNAME", "type": "TWideStringField"}, "filialsdatsrc": {"name": "FilialsDatSrc", "type": "TDataSource"}, "dm_types": {"name": "dm_types", "type": "TOracleDataSet"}, "dm_typesid": {"name": "dm_typesID", "type": "TFloatField"}, "dm_typestype": {"name": "dm_typesTYPE", "type": "TWideStringField"}, "dm_typesdatsrc": {"name": "dm_typesDatSrc", "type": "TDataSource"}, "dm_categories": {"name": "dm_categories", "type": "TOracleDataSet"}, "dm_categoriesid": {"name": "dm_categoriesID", "type": "TFloatField"}, "dm_categoriescategory": {"name": "dm_categoriesCATEGORY", "type": "TWideStringField"}, "dm_categoriesdatsrc": {"name": "dm_categoriesDatSrc", "type": "TDataSource"}, "dm_persons": {"name": "dm_persons", "type": "TOracleDataSet"}, "dm_personsid": {"name": "dm_personsID", "type": "TFloatField"}, "dm_personsname": {"name": "dm_personsNAME", "type": "TWideStringField"}, "dm_personsdatsrc": {"name": "dm_personsDatSrc", "type": "TDataSource"}, "bankdate": {"name": "BankDate", "type": "TOracleDataSet"}, "bankdatetek_dat": {"name": "BankDateTEK_DAT", "type": "TDateTimeField"}, "bankdatedatsrc": {"name": "BankDateDatSrc", "type": "TDataSource"}, "filialid": {"name": "FilialID", "type": "TOracleDataSet"}, "filialidkod_fil": {"name": "FilialIDKOD_FIL", "type": "TIntegerField"}, "filialiddatsrc": {"name": "FilialIDDatSrc", "type": "TDataSource"}, "dm_stored_programs": {"name": "dm_stored_programs", "type": "TOraclePackage"}, "users": {"name": "users", "type": "TOracleDataSet"}, "usersid": {"name": "usersID", "type": "TFloatField"}, "usersname": {"name": "usersNAME", "type": "TWideStringField"}, "usersdatsrc": {"name": "usersDatSrc", "type": "TDataSource"}, "sb_aca": {"name": "sb_aca", "type": "TOraclePackage"}, "dmdatasrc": {"name": "DMDataSrc", "type": "TDataSource"}, "dmdataset": {"name": "DmDataSet", "type": "TOracleDataSet"}, "dmdatasetid": {"name": "DmDataSetID", "type": "TFloatField"}, "dmdatasetcontractno": {"name": "DmDataSetCONTRACTNO", "type": "TWideStringField"}, "dmdatasetval_name": {"name": "DmDataSetVAL_NAME", "type": "TWideStringField"}, "dmdatasetcustomername": {"name": "DmDataSetCUSTOMERNAME", "type": "TWideStringField"}, "dmdatasetopendate": {"name": "DmDataSetOPENDATE", "type": "TDateTimeField"}, "dmdatasetclosedate": {"name": "DmDataSetCLOSEDATE", "type": "TDateTimeField"}, "dmdatasetamount": {"name": "DmDataSetAMOUNT", "type": "TFloatField"}, "dmdatasetinterest": {"name": "DmDataSetINTEREST", "type": "TFloatField"}, "dmdatasetfacticaldebt": {"name": "DmDataSetFACTICALDEBT", "type": "TFloatField"}, "dmdatasetfacticalinterestdebt": {"name": "DmDataSetFACTICALINTERESTDEBT", "type": "TFloatField"}, "dmdatasetcurrency": {"name": "DmDataSetCURRENCY", "type": "TFloatField"}, "dmdatasetpersonaltype": {"name": "DmDataSetPERSONALTYPE", "type": "TFloatField"}, "dmdatasetclienttype": {"name": "DmDataSetCLIENTTYPE", "type": "TFloatField"}, "dmdatasetbranchid": {"name": "DmDataSetBRANCHID", "type": "TFloatField"}, "dmdatasetcontracttype": {"name": "DmDataSetCONTRACTTYPE", "type": "TIntegerField"}, "dmdatasetcustomerid": {"name": "DmDataSetCUSTOMERID", "type": "TFloatField"}, "dmdatasetusid": {"name": "DmDataSetUSID", "type": "TFloatField"}, "dmdatasetostat": {"name": "DmDataSetOSTAT", "type": "TFloatField"}, "dmdatasetprolongationdate": {"name": "DmDataSetPROLONGATIONDATE", "type": "TDateTimeField"}, "dmdatasetstopcalcdate": {"name": "DmDataSetSTOPCALCDATE", "type": "TDateTimeField"}, "dmdatasetcontracttypename": {"name": "DmDataSetCONTRACTTYPENAME", "type": "TWideStringField"}, "dmdatasetusername": {"name": "DmDataSetUSERNAME", "type": "TWideStringField"}, "dmdatasetfilial": {"name": "DmDataSetFILIAL", "type": "TWideStringField"}, "dmdatasetagentid": {"name": "DmDataSetAGENTID", "type": "TFloatField"}, "dm_tranches": {"name": "dm_tranches", "type": "TOracleDataSet"}, "dm_tranchestotal": {"name": "dm_tranchesTOTAL", "type": "TFloatField"}, "dm_trancheshdate": {"name": "dm_tranchesHDATE", "type": "TDateTimeField"}, "dm_tranchesreserve": {"name": "dm_tranchesRESERVE", "type": "TFloatField"}}, {});
  U.init(async () => {
    U.var_("NewDepsitDataModule", null, "TNewDepsitDataModule");
  });
  U.method("TNewDepsitDataModule", "DataModuleCreate", async function DataModuleCreate(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t1 = (await $.v(C, "DmDataSet"));
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
  U.method("TNewDepsitDataModule", "DataModuleDestroy", async function DataModuleDestroy(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mcall((await $.v(C, "DmDataSet")), "CloseAll", []);
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
