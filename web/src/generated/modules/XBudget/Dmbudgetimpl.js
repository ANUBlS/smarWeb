// Generated from Dmbudgetimpl.pas by pas2js — do not edit by hand; regenerate instead.
/* eslint-disable */
// @ts-nocheck

export default function define($) {
  const U = $.unit("Dmbudgetimpl", ["Windows", "Messages", "SysUtils", "Classes", "Graphics", "Controls", "Forms", "Dialogs", "Db", "OracleData", "Oracle", "sboapiDataModuleImpl"]);
  const C = [U];
  U.defClass("TDMBudget", "TDataModule", {"articlesds": {"name": "ArticlesDS", "type": "TDataSource"}, "articlesdst": {"name": "ArticlesDST", "type": "TOracleDataSet"}, "itemsofarticlesds": {"name": "ItemsofArticlesDS", "type": "TDataSource"}, "itemsofarticlesdst": {"name": "ItemsofArticlesDST", "type": "TOracleDataSet"}, "itemsofarticlesdstid": {"name": "ItemsofArticlesDSTID", "type": "TFloatField"}, "itemsofarticlesdstid_articl": {"name": "ItemsofArticlesDSTID_ARTICL", "type": "TFloatField"}, "itemsofarticlesdstname": {"name": "ItemsofArticlesDSTNAME", "type": "TWideStringField"}, "itemsofarticlesdstamountofbeginyear": {"name": "ItemsofArticlesDSTAMOUNTOFBEGINYEAR", "type": "TFloatField"}, "itemsofarticlesdstaccid": {"name": "ItemsofArticlesDSTACCID", "type": "TFloatField"}, "itemsofarticlesdstnumberofitem": {"name": "ItemsofArticlesDSTNUMBEROFITEM", "type": "TWideStringField"}, "itemsofarticlesdstamountoffirstquarter": {"name": "ItemsofArticlesDSTAMOUNTOFFIRSTQUARTER", "type": "TFloatField"}, "itemsofarticlesdstamountofsecondquarter": {"name": "ItemsofArticlesDSTAMOUNTOFSECONDQUARTER", "type": "TFloatField"}, "itemsofarticlesdstamountofthridquarter": {"name": "ItemsofArticlesDSTAMOUNTOFTHRIDQUARTER", "type": "TFloatField"}, "itemsofarticlesdstamountoffourthquarter": {"name": "ItemsofArticlesDSTAMOUNTOFFOURTHQUARTER", "type": "TFloatField"}, "itemsofarticlesdstamountofendyear": {"name": "ItemsofArticlesDSTAMOUNTOFENDYEAR", "type": "TFloatField"}, "addartdatsrc": {"name": "AddArtDatSrc", "type": "TDataSource"}, "addart": {"name": "AddArt", "type": "TOracleDataSet"}, "addartid": {"name": "AddArtID", "type": "TFloatField"}, "addartname": {"name": "AddArtNAME", "type": "TWideStringField"}, "addartnumberofarticle": {"name": "AddArtNUMBEROFARTICLE", "type": "TWideStringField"}, "addartstatus": {"name": "AddArtSTATUS", "type": "TFloatField"}, "additemsdatsrc": {"name": "AddItemsDatSrc", "type": "TDataSource"}, "additems": {"name": "AddItems", "type": "TOracleDataSet"}, "additemsid": {"name": "AddItemsID", "type": "TFloatField"}, "additemsid_articl": {"name": "AddItemsID_ARTICL", "type": "TFloatField"}, "additemsname": {"name": "AddItemsNAME", "type": "TWideStringField"}, "articlespkg": {"name": "ArticlesPkg", "type": "TOraclePackage"}, "accs": {"name": "Accs", "type": "TOracleDataSet"}, "accsdatsrc": {"name": "AccsDatSrc", "type": "TDataSource"}, "accsid": {"name": "AccsID", "type": "TFloatField"}, "accsacc_no": {"name": "AccsACC_NO", "type": "TWideStringField"}, "additemsnumberofitem": {"name": "AddItemsNUMBEROFITEM", "type": "TWideStringField"}, "itmdataset": {"name": "ItmDataSet", "type": "TOracleDataSet"}, "artdataset": {"name": "ArtDataSet", "type": "TOracleDataSet"}, "artdatasrc": {"name": "ArtDataSrc", "type": "TDataSource"}, "itmdatasrc": {"name": "ItmDataSrc", "type": "TDataSource"}, "artdatasetid": {"name": "ArtDataSetID", "type": "TFloatField"}, "artdatasetname": {"name": "ArtDataSetNAME", "type": "TWideStringField"}, "artdatasetnumberofarticle": {"name": "ArtDataSetNUMBEROFARTICLE", "type": "TWideStringField"}, "artdatasetstatus": {"name": "ArtDataSetSTATUS", "type": "TFloatField"}, "articlesdstid": {"name": "ArticlesDSTID", "type": "TFloatField"}, "articlesdstname": {"name": "ArticlesDSTNAME", "type": "TWideStringField"}, "articlesdstnumberofarticle": {"name": "ArticlesDSTNUMBEROFARTICLE", "type": "TWideStringField"}, "incomedst": {"name": "IncomeDst", "type": "TOracleDataSet"}, "incomedstid": {"name": "IncomeDstID", "type": "TFloatField"}, "articlesdststatus": {"name": "ArticlesDSTSTATUS", "type": "TFloatField"}, "articlesdstst": {"name": "ArticlesDSTst", "type": "TWideStringField"}, "setingdatsrc": {"name": "SetingDatSrc", "type": "TDataSource"}, "setigdatset": {"name": "SetigDatSet", "type": "TOracleDataSet"}, "setigdatsetname": {"name": "SetigDatSetNAME", "type": "TWideStringField"}, "setigdatsetamountofbeginyear": {"name": "SetigDatSetAMOUNTOFBEGINYEAR", "type": "TFloatField"}, "setigdatsetnumberofitem": {"name": "SetigDatSetNUMBEROFITEM", "type": "TWideStringField"}, "setigdatsetamountoffirstquarter": {"name": "SetigDatSetAMOUNTOFFIRSTQUARTER", "type": "TFloatField"}, "setigdatsetamountofsecondquarter": {"name": "SetigDatSetAMOUNTOFSECONDQUARTER", "type": "TFloatField"}, "setigdatsetamountofthridquarter": {"name": "SetigDatSetAMOUNTOFTHRIDQUARTER", "type": "TFloatField"}, "setigdatsetamountoffourthquarter": {"name": "SetigDatSetAMOUNTOFFOURTHQUARTER", "type": "TFloatField"}, "setigdatsetamountofendyear": {"name": "SetigDatSetAMOUNTOFENDYEAR", "type": "TFloatField"}, "artdatset": {"name": "ArtDatSet", "type": "TOracleDataSet"}, "artdatsrc": {"name": "ArtDatSrc", "type": "TDataSource"}, "sysdat": {"name": "SYSDAT", "type": "TOracleDataSet"}, "artdatsetid": {"name": "ArtDatSetID", "type": "TFloatField"}, "artdatsetbegindat": {"name": "ArtDatSetBEGINDAT", "type": "TDateTimeField"}, "artdatsetenddat": {"name": "ArtDatSetENDDAT", "type": "TDateTimeField"}, "sysdatbegindat": {"name": "SYSDATBEGINDAT", "type": "TDateTimeField"}, "sysdatenddat": {"name": "SYSDATENDDAT", "type": "TDateTimeField"}, "artdatasetstatu": {"name": "ArtDataSetstatu", "type": "TWideStringField"}, "setigdatsetid": {"name": "SetigDatSetID", "type": "TFloatField"}, "setigdatsetid_articl": {"name": "SetigDatSetID_ARTICL", "type": "TFloatField"}, "setigdatsetaccid": {"name": "SetigDatSetACCID", "type": "TFloatField"}, "setigdatsetid_artdat": {"name": "SetigDatSetID_ARTDAT", "type": "TFloatField"}, "sysdatsrc": {"name": "sysdatSrc", "type": "TDataSource"}, "articles_accsrc": {"name": "articles_accSrc", "type": "TDataSource"}, "articles_accs": {"name": "articles_accs", "type": "TOracleDataSet"}, "articles_accgroup": {"name": "articles_accgroup", "type": "TOracleDataSet"}, "articles_accgroupsrc": {"name": "articles_accgroupSrc", "type": "TDataSource"}, "articles_accsacc": {"name": "articles_accsACC", "type": "TFloatField"}, "articles_accgroupid": {"name": "articles_accgroupID", "type": "TFloatField"}, "articles_accgroupname": {"name": "articles_accgroupNAME", "type": "TWideStringField"}, "articles_accgroupdescription": {"name": "articles_accgroupDESCRIPTION", "type": "TWideStringField"}, "articles_accsgroupid": {"name": "articles_accsGROUPID", "type": "TFloatField"}, "accrestdatsrc": {"name": "accrestDatSrc", "type": "TDataSource"}, "accrest": {"name": "accrest", "type": "TOracleDataSet"}, "accrestacc_id": {"name": "accrestACC_ID", "type": "TFloatField"}, "accrestsm": {"name": "accrestSM", "type": "TFloatField"}, "artdatasetexcl": {"name": "ArtDataSetExcl", "type": "TOracleDataSet"}, "itmdatasetexcl": {"name": "ItmDataSetExcl", "type": "TOracleDataSet"}, "artdatasetexclname": {"name": "ArtDataSetExclNAME", "type": "TWideStringField"}, "artdatasetexclnumberofarticle": {"name": "ArtDataSetExclNUMBEROFARTICLE", "type": "TWideStringField"}, "artdatasetexclstatus": {"name": "ArtDataSetExclSTATUS", "type": "TFloatField"}, "artdatasetexclstat": {"name": "ArtDataSetExclstat", "type": "TWideStringField"}, "artdatasetexclid": {"name": "ArtDataSetExclID", "type": "TFloatField"}, "oracledataset1": {"name": "OracleDataSet1", "type": "TOracleDataSet"}, "oracledataset2": {"name": "OracleDataSet2", "type": "TOracleDataSet"}, "oracledataset3": {"name": "OracleDataSet3", "type": "TOracleDataSet"}, "oracledataset1acc_id": {"name": "OracleDataSet1ACC_ID", "type": "TFloatField"}, "oracledataset1sm": {"name": "OracleDataSet1SM", "type": "TFloatField"}, "oracledataset2acc_id": {"name": "OracleDataSet2ACC_ID", "type": "TFloatField"}, "oracledataset2sm1": {"name": "OracleDataSet2SM1", "type": "TFloatField"}, "oracledataset3acc_id": {"name": "OracleDataSet3ACC_ID", "type": "TFloatField"}, "oracledataset3sm2": {"name": "OracleDataSet3SM2", "type": "TFloatField"}, "oracledataset4": {"name": "OracleDataSet4", "type": "TOracleDataSet"}, "oracledataset4acc_id": {"name": "OracleDataSet4ACC_ID", "type": "TFloatField"}, "oracledataset4sm3": {"name": "OracleDataSet4SM3", "type": "TFloatField"}, "incomedstname": {"name": "IncomeDstNAME", "type": "TWideStringField"}, "additemsbal_cns": {"name": "AddItemsBAL_CNS", "type": "TWideStringField"}, "additemsaccounts": {"name": "AddItemsACCOUNTS", "type": "TWideStringField"}, "additemsdnt_accounts": {"name": "AddItemsDNT_ACCOUNTS", "type": "TWideStringField"}, "additemsprognoz": {"name": "AddItemsPROGNOZ", "type": "TFloatField"}, "additemspercent": {"name": "AddItemsPERCENT", "type": "TFloatField"}, "sysdattek_dat": {"name": "SYSDATTEK_DAT", "type": "TDateTimeField"}, "itmdatasetexclid": {"name": "ItmDataSetExclID", "type": "TFloatField"}, "itmdatasetexclid_articl": {"name": "ItmDataSetExclID_ARTICL", "type": "TFloatField"}, "itmdatasetexclname": {"name": "ItmDataSetExclNAME", "type": "TWideStringField"}, "itmdatasetexclamountofbeginyear": {"name": "ItmDataSetExclAMOUNTOFBEGINYEAR", "type": "TFloatField"}, "itmdatasetexclaccid": {"name": "ItmDataSetExclACCID", "type": "TFloatField"}, "itmdatasetexclnumberofitem": {"name": "ItmDataSetExclNUMBEROFITEM", "type": "TWideStringField"}, "itmdatasetexclamountoffirstquarter": {"name": "ItmDataSetExclAMOUNTOFFIRSTQUARTER", "type": "TFloatField"}, "itmdatasetexclamountofsecondquarter": {"name": "ItmDataSetExclAMOUNTOFSECONDQUARTER", "type": "TFloatField"}, "itmdatasetexclamountofthridquarter": {"name": "ItmDataSetExclAMOUNTOFTHRIDQUARTER", "type": "TFloatField"}, "itmdatasetexclamountoffourthquarter": {"name": "ItmDataSetExclAMOUNTOFFOURTHQUARTER", "type": "TFloatField"}, "itmdatasetexclamountofendyear": {"name": "ItmDataSetExclAMOUNTOFENDYEAR", "type": "TFloatField"}, "itmdatasetexclid_artdat": {"name": "ItmDataSetExclID_ARTDAT", "type": "TFloatField"}, "itmdatasetexclbal_cns": {"name": "ItmDataSetExclBAL_CNS", "type": "TWideStringField"}, "itmdatasetexclaccounts": {"name": "ItmDataSetExclACCOUNTS", "type": "TWideStringField"}, "itmdatasetexcldnt_accounts": {"name": "ItmDataSetExclDNT_ACCOUNTS", "type": "TWideStringField"}, "itmdatasetexclprognoz": {"name": "ItmDataSetExclPROGNOZ", "type": "TFloatField"}, "itmdatasetexclpercent": {"name": "ItmDataSetExclPERCENT", "type": "TFloatField"}, "itmdatasetaccounts": {"name": "ItmDataSetACCOUNTS", "type": "TWideStringField"}, "itmdatasetdnt_accounts": {"name": "ItmDataSetDNT_ACCOUNTS", "type": "TWideStringField"}, "itmdatasetprognoz": {"name": "ItmDataSetPROGNOZ", "type": "TFloatField"}, "itmdatasetpercent": {"name": "ItmDataSetPERCENT", "type": "TFloatField"}, "itmdatasetid": {"name": "ItmDataSetID", "type": "TFloatField"}, "itmdatasetid_articl": {"name": "ItmDataSetID_ARTICL", "type": "TFloatField"}, "itmdatasetname": {"name": "ItmDataSetNAME", "type": "TWideStringField"}, "itmdatasetamountofbeginyear": {"name": "ItmDataSetAMOUNTOFBEGINYEAR", "type": "TFloatField"}, "itmdatasetaccid": {"name": "ItmDataSetACCID", "type": "TFloatField"}, "itmdatasetnumberofitem": {"name": "ItmDataSetNUMBEROFITEM", "type": "TWideStringField"}, "itmdatasetamountoffirstquarter": {"name": "ItmDataSetAMOUNTOFFIRSTQUARTER", "type": "TFloatField"}, "itmdatasetamountofsecondquarter": {"name": "ItmDataSetAMOUNTOFSECONDQUARTER", "type": "TFloatField"}, "itmdatasetamountofthridquarter": {"name": "ItmDataSetAMOUNTOFTHRIDQUARTER", "type": "TFloatField"}, "itmdatasetamountoffourthquarter": {"name": "ItmDataSetAMOUNTOFFOURTHQUARTER", "type": "TFloatField"}, "itmdatasetamountofendyear": {"name": "ItmDataSetAMOUNTOFENDYEAR", "type": "TFloatField"}, "itmdatasetid_artdat": {"name": "ItmDataSetID_ARTDAT", "type": "TFloatField"}, "itmdatasetbal_cns": {"name": "ItmDataSetBAL_CNS", "type": "TWideStringField"}, "oracledataset5": {"name": "OracleDataSet5", "type": "TOracleDataSet"}, "sysdatolddat": {"name": "SYSDATOLDDAT", "type": "TDateTimeField"}, "dsrcfilial": {"name": "DSrcFilial", "type": "TDataSource"}, "dsetfilial": {"name": "DSetFilial", "type": "TOracleDataSet"}, "dsetfilialid": {"name": "DSetFilialID", "type": "TFloatField"}, "dsetfilialname": {"name": "DSetFilialNAME", "type": "TWideStringField"}, "status": {"name": "status", "type": "integer"}, "articleid": {"name": "ArticleID", "type": "Integer"}}, {});
  U.init(async () => {
    U.var_("DMBudget", null, "TDMBudget");
  });
  U.method("TDMBudget", "AddArtApplyRecord", async function AddArtApplyRecord(Self, p0, p1, p2, p3) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "action": $.copyArg(p1), "applied": $.asRef(p2), "newrowid": $.asRef(p3), result: undefined, "pname": '', "numberofarticle": ''};
  await $.fixArgs(L0, ["sender", "action"]);
  {
    const $t1 = (await $.v(C, "AddArt"));
    await $.wset([$t1], "pname", (await $.mv((await $.wcall([$t1], "FieldbyName", ["name"], C)), "AsString")), { get: async () => L0["pname"], set: async (v) => { L0["pname"] = v; }, local: true });
    await $.wset([$t1], "numberofarticle", (await $.mv((await $.wcall([$t1], "FieldbyName", ["numberofarticle"], C)), "AsString")), { get: async () => L0["numberofarticle"], set: async (v) => { L0["numberofarticle"] = v; }, local: true });
  }
  await L0["applied"].set(true);
  { const $t2 = L0["action"];
    if ($.eq($t2, "I")) {
      await $.set(C, "ArticleID", (await $.mcall((await $.v(C, "ArticlesPkg")), "CallIntegerFunction", ["add_art", [(await $.v(C, "status")), L0["pname"]]])));
    }
    else {
      await L0["applied"].set(false);
    }
  }
  return L0.result;
}, {"params": ["Sender", "Action", "Applied", "NewRowId"], "kind": "procedure", "ptypes": ["TOracleDataSet", "Char", "Boolean", "String"]});
  U.method("TDMBudget", "DataModuleCreate", async function DataModuleCreate(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mcall((await $.v(C, "ArtDataSet")), "open", []);
  await $.mcall((await $.v(C, "ItmDataSet")), "open", []);
  await $.mcall((await $.v(C, "accrest")), "open", []);
  await $.mcall((await $.v(C, "ArticlesDST")), "open", []);
  await $.mcall((await $.v(C, "AddItems")), "open", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TDMBudget", "AddItemsBeforePost", async function AddItemsBeforePost(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"dataset": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["dataset"]);
  await $.mset((await $.mcall((await $.v(C, "AddItems")), "FieldByName", ["ID_ARTICL"])), "AsInteger", (await $.mv((await $.mcall((await $.v(C, "ArticlesDST")), "Fieldbyname", ["id"])), "asInteger")));
  return L0.result;
}, {"params": ["DataSet"], "kind": "procedure", "ptypes": ["TDataSet"]});
  U.method("TDMBudget", "AddItemsAfterPost", async function AddItemsAfterPost(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"dataset": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["dataset"]);
  await $.mcall((await $.v(C, "AddItems")), "Refresh", []);
  return L0.result;
}, {"params": ["DataSet"], "kind": "procedure", "ptypes": ["TDataSet"]});
  U.method("TDMBudget", "ArtDataSetApplyRecord", async function ArtDataSetApplyRecord(Self, p0, p1, p2, p3) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "action": $.copyArg(p1), "applied": $.asRef(p2), "newrowid": $.asRef(p3), result: undefined, "pname": '', "numberofarticle": ''};
  await $.fixArgs(L0, ["sender", "action"]);
  {
    const $t3 = (await $.v(C, "AddArt"));
    await $.wset([$t3], "pname", (await $.mv((await $.wcall([$t3], "FieldbyName", ["name"], C)), "AsString")), { get: async () => L0["pname"], set: async (v) => { L0["pname"] = v; }, local: true });
    await $.wset([$t3], "numberofarticle", (await $.mv((await $.wcall([$t3], "FieldbyName", ["numberofarticle"], C)), "AsString")), { get: async () => L0["numberofarticle"], set: async (v) => { L0["numberofarticle"] = v; }, local: true });
  }
  await L0["applied"].set(true);
  { const $t4 = L0["action"];
    if ($.eq($t4, "I")) {
      await $.set(C, "ArticleID", (await $.mcall((await $.v(C, "ArticlesPkg")), "CallIntegerFunction", ["add_art", [(await $.v(C, "status")), L0["pname"]]])));
    }
    else if ($.eq($t4, "U")) {
      await $.stmt((await $.mcall((await $.v(C, "ArticlesPkg")), "callprocedure", ["edit_art", [(await $.mv((await $.mcall((await $.v(C, "ArticlesDST")), "Fieldbyname", ["id"])), "asInteger")), (await $.v(C, "status")), L0["pname"]]])));
    }
    else {
      await L0["applied"].set(false);
    }
  }
  return L0.result;
}, {"params": ["Sender", "Action", "Applied", "NewRowId"], "kind": "procedure", "ptypes": ["TOracleDataSet", "Char", "Boolean", "String"]});
  U.method("TDMBudget", "ItmDataSetAfterPost", async function ItmDataSetAfterPost(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"dataset": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["dataset"]);
  await $.mcall((await $.v(C, "ItmDataSet")), "Refresh", []);
  return L0.result;
}, {"params": ["DataSet"], "kind": "procedure", "ptypes": ["TDataSet"]});
  U.method("TDMBudget", "ItmDataSetBeforePost", async function ItmDataSetBeforePost(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"dataset": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["dataset"]);
  await $.mset((await $.mcall((await $.v(C, "ItmDataSet")), "FieldByName", ["ID_ARTICL"])), "AsInteger", (await $.mv((await $.mcall((await $.v(C, "ArticlesDST")), "Fieldbyname", ["id"])), "asInteger")));
  return L0.result;
}, {"params": ["DataSet"], "kind": "procedure", "ptypes": ["TDataSet"]});
  U.method("TDMBudget", "ArticlesDSTApplyRecord", async function ArticlesDSTApplyRecord(Self, p0, p1, p2, p3) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "action": $.copyArg(p1), "applied": $.asRef(p2), "newrowid": $.asRef(p3), result: undefined, "pname": '', "numberofarticle": '', "pstatus": 0};
  await $.fixArgs(L0, ["sender", "action"]);
  {
    const $t5 = (await $.v(C, "ArticlesDST"));
    await $.wset([$t5], "pname", (await $.mv((await $.wcall([$t5], "FieldbyName", ["name"], C)), "AsString")), { get: async () => L0["pname"], set: async (v) => { L0["pname"] = v; }, local: true });
    await $.wset([$t5], "pstatus", (await $.mv((await $.wcall([$t5], "FieldbyName", ["status"], C)), "Asinteger")), { get: async () => L0["pstatus"], set: async (v) => { L0["pstatus"] = v; }, local: true });
    await $.wset([$t5], "numberofarticle", (await $.mv((await $.wcall([$t5], "FieldbyName", ["numberofarticle"], C)), "AsString")), { get: async () => L0["numberofarticle"], set: async (v) => { L0["numberofarticle"] = v; }, local: true });
  }
  await L0["applied"].set(true);
  { const $t6 = L0["action"];
    if ($.eq($t6, "I")) {
      await $.set(C, "ArticleID", (await $.mcall((await $.v(C, "ArticlesPkg")), "CallIntegerFunction", ["add_art", [L0["pstatus"], L0["pname"]]])));
    }
    else {
      await L0["applied"].set(false);
    }
  }
  return L0.result;
}, {"params": ["Sender", "Action", "Applied", "NewRowId"], "kind": "procedure", "ptypes": ["TOracleDataSet", "Char", "Boolean", "String"]});
  U.method("TDMBudget", "ArticlesDSTAfterPost", async function ArticlesDSTAfterPost(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"dataset": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["dataset"]);
  await $.mcall((await $.v(C, "ArticlesDST")), "Refresh", []);
  return L0.result;
}, {"params": ["DataSet"], "kind": "procedure", "ptypes": ["TDataSet"]});
  U.method("TDMBudget", "ArtDataSetAfterPost", async function ArtDataSetAfterPost(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"dataset": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["dataset"]);
  await $.mcall((await $.v(C, "ArtDataSet")), "Refresh", []);
  return L0.result;
}, {"params": ["DataSet"], "kind": "procedure", "ptypes": ["TDataSet"]});
  U.method("TDMBudget", "ItmDataSetCalcFields", async function ItmDataSetCalcFields(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"dataset": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["dataset"]);
  {
    const $t7 = (await $.v(C, "ItmDataSet"));
    await $.mset((await $.wcall([$t7], "FieldByName", ["sumamount"], C)), "asFloat", $.add($.add($.add((await $.mv((await $.wcall([$t7], "FieldByName", ["AMOUNTOFFIRSTQUARTER"], C)), "asFloat")), (await $.mv((await $.wcall([$t7], "FieldByName", ["AMOUNTOFSECONDQUARTER"], C)), "asFloat"))), (await $.mv((await $.wcall([$t7], "FieldByName", ["AMOUNTOFTHRIDQUARTER"], C)), "asFloat"))), (await $.mv((await $.wcall([$t7], "FieldByName", ["AMOUNTOFFOURTHQUARTER"], C)), "asFloat"))));
    await $.mset((await $.wcall([$t7], "FieldByName", ["reate"], C)), "asFloat", $.sub((await $.mv((await $.wcall([$t7], "FieldByName", ["sumamount"], C)), "asFloat")), (await $.mv((await $.wcall([$t7], "FieldByName", ["r"], C)), "asFloat"))));
    await $.mset((await $.wcall([$t7], "FieldByName", ["difference"], C)), "asFloat", $.sub((await $.mv((await $.wcall([$t7], "FieldByName", ["AMOUNTOFENDYEAR"], C)), "asFloat")), (await $.mv((await $.wcall([$t7], "FieldByName", ["sumamount"], C)), "asFloat"))));
  }
  return L0.result;
}, {"params": ["DataSet"], "kind": "procedure", "ptypes": ["TDataSet"]});
  U.method("TDMBudget", "SetigDatSetBeforeInsert", async function SetigDatSetBeforeInsert(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"dataset": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["dataset"]);
  return L0.result;
}, {"params": ["DataSet"], "kind": "procedure", "ptypes": ["TDataSet"]});
  U.method("TDMBudget", "SetigDatSetAfterInsert", async function SetigDatSetAfterInsert(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"dataset": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["dataset"]);
  await $.mcall((await $.v(C, "SetigDatSet")), "Cancel", []);
  return L0.result;
}, {"params": ["DataSet"], "kind": "procedure", "ptypes": ["TDataSet"]});
  U.method("TDMBudget", "accrestAfterPost", async function accrestAfterPost(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"dataset": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["dataset"]);
  await $.mcall((await $.v(C, "accrest")), "refresh", []);
  return L0.result;
}, {"params": ["DataSet"], "kind": "procedure", "ptypes": ["TDataSet"]});
  U.method("TDMBudget", "DataModuleDestroy", async function DataModuleDestroy(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mcall((await $.v(C, "accs")), "close", []);
  await $.mcall((await $.v(C, "ArtDataSet")), "close", []);
  await $.mcall((await $.v(C, "ItmDataSet")), "close", []);
  await $.mcall((await $.v(C, "accrest")), "close", []);
  await $.mcall((await $.v(C, "ArticlesDST")), "close", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TDMBudget", "ItmDataSetExclCalcFields", async function ItmDataSetExclCalcFields(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"dataset": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["dataset"]);
  return L0.result;
}, {"params": ["DataSet"], "kind": "procedure", "ptypes": ["TDataSet"]});
  return U;
}
