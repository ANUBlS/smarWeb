// Generated from uUsrGroupDMImpl.pas by pas2js — do not edit by hand; regenerate instead.
/* eslint-disable */
// @ts-nocheck

export default function define($) {
  const U = $.unit("uUsrGroupDMImpl", ["Windows", "Messages", "SysUtils", "Classes", "Graphics", "Controls", "Forms", "Dialogs", "Oracle", "Db", "OracleData", "sboapiDataModuleImpl"]);
  const C = [U];
  U.defClass("TUsrGrDataMod", "TDataModule", {"cm_setup": {"name": "CM_SETUP", "type": "TOraclePackage"}, "usergroupsdatasrc": {"name": "UserGroupsDataSrc", "type": "TDataSource"}, "catdataset": {"name": "CatDataSet", "type": "TOracleDataSet"}, "catdatasource": {"name": "CatDataSource", "type": "TDataSource"}, "personsdataset": {"name": "PersonsDataSet", "type": "TOracleDataSet"}, "personsdatasource": {"name": "PersonsDataSource", "type": "TDataSource"}, "datasource1": {"name": "DataSource1", "type": "TDataSource"}, "oracledataset1": {"name": "OracleDataSet1", "type": "TOracleDataSet"}, "catdatasetid": {"name": "CatDataSetID", "type": "TFloatField"}, "catdatasetperson": {"name": "CatDataSetPERSON", "type": "TFloatField"}, "catdatasetcode": {"name": "CatDataSetCODE", "type": "TWideStringField"}, "catdatasetdescription": {"name": "CatDataSetDESCRIPTION", "type": "TWideStringField"}, "catdatasetact_id": {"name": "CatDataSetACT_ID", "type": "TFloatField"}, "catdatasetkodu": {"name": "CatDataSetKODU", "type": "TWideStringField"}, "personsdatasetid": {"name": "PersonsDataSetID", "type": "TFloatField"}, "personsdatasetname": {"name": "PersonsDataSetNAME", "type": "TWideStringField"}, "personsdatasetdescripion": {"name": "PersonsDataSetDESCRIPION", "type": "TWideStringField"}, "oracledataset1id": {"name": "OracleDataSet1ID", "type": "TFloatField"}, "oracledataset1name": {"name": "OracleDataSet1NAME", "type": "TWideStringField"}, "oracledataset1newid": {"name": "OracleDataSet1NEWID", "type": "TFloatField"}, "oracledataset1code": {"name": "OracleDataSet1CODE", "type": "TWideStringField"}, "oracledataset1custtype": {"name": "OracleDataSet1CUSTTYPE", "type": "TFloatField"}, "datasource2": {"name": "DataSource2", "type": "TDataSource"}, "oracledataset2": {"name": "OracleDataSet2", "type": "TOracleDataSet"}, "oracledataset2id": {"name": "OracleDataSet2ID", "type": "TFloatField"}, "oracledataset2name": {"name": "OracleDataSet2NAME", "type": "TWideStringField"}, "usergroupsdataset": {"name": "UserGroupsDataSet", "type": "TOracleDataSet"}, "usergroupsdatasetdescription": {"name": "UserGroupsDataSetDESCRIPTION", "type": "TWideStringField"}, "usergroupsdatasetfaiz": {"name": "UserGroupsDataSetFAIZ", "type": "TFloatField"}, "usergroupsdatasetkart": {"name": "UserGroupsDataSetKART", "type": "TFloatField"}, "usergroupsdatasetkomissya": {"name": "UserGroupsDataSetKOMISSYA", "type": "TFloatField"}, "usergroupsdatasetid": {"name": "UserGroupsDataSetID", "type": "TFloatField"}, "usergroupsdatasetbank_kod": {"name": "UserGroupsDataSetBANK_KOD", "type": "TWideStringField"}}, {});
  U.init(async () => {
    U.var_("UsrGrDataMod", null, "TUsrGrDataMod");
  });
  U.method("TUsrGrDataMod", "DataModuleCreate", async function DataModuleCreate(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mcall((await $.v(C, "UserGroupsDataSet")), "Open", []);
  await $.mcall((await $.v(C, "CatDataSet")), "Open", []);
  await $.mcall((await $.v(C, "PersonsDataSet")), "Open", []);
  await $.mcall((await $.v(C, "OracleDataSet1")), "open", []);
  await $.mcall((await $.v(C, "OracleDataSet2")), "open", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TUsrGrDataMod", "UserGroupsDataSet1212ApplyRecord", async function UserGroupsDataSet1212ApplyRecord(Self, p0, p1, p2, p3) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "action": $.copyArg(p1), "applied": $.asRef(p2), "newrowid": $.asRef(p3), result: undefined, "id": 0, "sed": 0, "description": ''};
  await $.fixArgs(L0, ["sender", "action"]);
  {
    const $t1 = L0["sender"];
    await $.wset([$t1], "id", (await $.mv((await $.wcall([$t1], "FieldByName", ["id"], C)), "AsInteger")), { get: async () => L0["id"], set: async (v) => { L0["id"] = v; }, local: true });
    await $.wset([$t1], "description", (await $.mv((await $.wcall([$t1], "FieldByName", ["description"], C)), "AsString")), { get: async () => L0["description"], set: async (v) => { L0["description"] = v; }, local: true });
  }
  await L0["applied"].set(true);
  { const $t2 = L0["action"];
    if ($.eq($t2, "I")) {
      await $.stmt((await $.mcall((await $.v(C, "CM_SETUP")), "CallProcedure", ["UsrGroupAdd", [L0["description"]]])));
    }
    else if ($.eq($t2, "U")) {
      await $.stmt((await $.mcall((await $.v(C, "CM_SETUP")), "CallProcedure", ["UsrGroupEdit", [L0["id"], L0["description"]]])));
    }
    else if ($.eq($t2, "D")) {
      await $.stmt((await $.mcall((await $.v(C, "CM_SETUP")), "CallProcedure", ["UsrGroupDelete", [L0["id"]]])));
    }
    else {
      await L0["applied"].set(false);
    }
  }
  return L0.result;
}, {"params": ["Sender", "Action", "Applied", "NewRowId"], "kind": "procedure", "ptypes": ["TOracleDataSet", "Char", "Boolean", "String"]});
  U.method("TUsrGrDataMod", "CatDataSetApplyRecord", async function CatDataSetApplyRecord(Self, p0, p1, p2, p3) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "action": $.copyArg(p1), "applied": $.asRef(p2), "newrowid": $.asRef(p3), result: undefined, "v_id": 0, "v_person": 0, "v_code": '', "v_description": ''};
  await $.fixArgs(L0, ["sender", "action"]);
  {
    const $t3 = L0["sender"];
    await $.wset([$t3], "v_id", (await $.mv((await $.wcall([$t3], "FieldByName", ["id"], C)), "AsInteger")), { get: async () => L0["v_id"], set: async (v) => { L0["v_id"] = v; }, local: true });
    await $.wset([$t3], "v_code", (await $.mv((await $.wcall([$t3], "FieldByName", ["code"], C)), "AsString")), { get: async () => L0["v_code"], set: async (v) => { L0["v_code"] = v; }, local: true });
    await $.wset([$t3], "v_person", (await $.mv((await $.wcall([$t3], "FieldByName", ["person"], C)), "AsInteger")), { get: async () => L0["v_person"], set: async (v) => { L0["v_person"] = v; }, local: true });
    await $.wset([$t3], "v_description", (await $.mv((await $.wcall([$t3], "FieldByName", ["description"], C)), "Asstring")), { get: async () => L0["v_description"], set: async (v) => { L0["v_description"] = v; }, local: true });
  }
  await L0["applied"].set(true);
  { const $t4 = L0["action"];
    if ($.eq($t4, "I")) {
      await $.stmt((await $.mcall((await $.v(C, "CM_SETUP")), "CallProcedure", ["CategoriesAdd", [L0["v_person"], L0["v_code"], L0["v_description"]]])));
    }
    else if ($.eq($t4, "U")) {
      await $.stmt((await $.mcall((await $.v(C, "CM_SETUP")), "CallProcedure", ["CategoriesEdit", [L0["v_id"], L0["v_person"], L0["v_code"], L0["v_description"]]])));
    }
    else if ($.eq($t4, "D")) {
      await $.stmt((await $.mcall((await $.v(C, "CM_SETUP")), "CallProcedure", ["CategoriesDelete", [L0["v_id"]]])));
    }
    else {
      await L0["applied"].set(false);
    }
  }
  return L0.result;
}, {"params": ["Sender", "Action", "Applied", "NewRowId"], "kind": "procedure", "ptypes": ["TOracleDataSet", "Char", "Boolean", "String"]});
  U.method("TUsrGrDataMod", "DataModuleDestroy", async function DataModuleDestroy(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mcall((await $.v(C, "UserGroupsDataSet")), "CloseAll", []);
  await $.mcall((await $.v(C, "CatDataSet")), "CloseAll", []);
  await $.mcall((await $.v(C, "PersonsDataSet")), "CloseAll", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  return U;
}
