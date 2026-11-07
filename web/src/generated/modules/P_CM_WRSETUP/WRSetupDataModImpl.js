// Generated from WRSetupDataModImpl.pas by pas2js — do not edit by hand; regenerate instead.
/* eslint-disable */
// @ts-nocheck

export default function define($) {
  const U = $.unit("WRSetupDataModImpl", ["Windows", "Messages", "SysUtils", "Classes", "Graphics", "Controls", "Forms", "Db", "OracleData", "Oracle", "Dialogs", "sboapiDataModuleImpl"]);
  const C = [U];
  U.defClass("TWRSetupDataMod", "TDataModule", {"wrtemplatesdataset": {"name": "WRTemplatesDataSet", "type": "TOracleDataSet"}, "wrtemplatesdatasrc": {"name": "WRTemplatesDataSrc", "type": "TDataSource"}, "cm_wr_tools": {"name": "CM_WR_TOOLS", "type": "TOraclePackage"}, "wrbookmarksdataset": {"name": "WRBookmarksDataSet", "type": "TOracleDataSet"}, "wrbookmarksdatasrc": {"name": "WRBookmarksDataSrc", "type": "TDataSource"}, "wrfieldsdataset": {"name": "WRFieldsDataSet", "type": "TOracleDataSet"}, "wrfieldsdatasrc": {"name": "WRFieldsDataSrc", "type": "TDataSource"}, "opendlg": {"name": "OpenDlg", "type": "TOpenDialog"}, "wrtemplatesdatasetid": {"name": "WRTemplatesDataSetID", "type": "TFloatField"}, "wrtemplatesdatasetname": {"name": "WRTemplatesDataSetNAME", "type": "TWideStringField"}, "wrtemplatesdatasetpath": {"name": "WRTemplatesDataSetPATH", "type": "TWideStringField"}, "wrbookmarksdatasetid": {"name": "WRBookmarksDataSetID", "type": "TFloatField"}, "wrbookmarksdatasettemplateid": {"name": "WRBookmarksDataSetTEMPLATEID", "type": "TFloatField"}, "wrbookmarksdatasetfieldid": {"name": "WRBookmarksDataSetFIELDID", "type": "TFloatField"}, "wrbookmarksdatasetbookmarkname": {"name": "WRBookmarksDataSetBOOKMARKNAME", "type": "TWideStringField"}, "oracledatasettamplates": {"name": "OracleDataSetTamplates", "type": "TOracleDataSet"}, "datasourcetamplates": {"name": "DataSourceTamplates", "type": "TDataSource"}, "oracledatasettamplatesid": {"name": "OracleDataSetTamplatesID", "type": "TFloatField"}, "oracledatasettamplatespath": {"name": "OracleDataSetTamplatesPATH", "type": "TWideStringField"}, "filialdataset": {"name": "FilialDataSet", "type": "TOracleDataSet"}, "filialsrc": {"name": "FilialSrc", "type": "TDataSource"}, "filialdatasetname": {"name": "FilialDataSetNAME", "type": "TWideStringField"}, "filialdatasetc_name": {"name": "FilialDataSetC_NAME", "type": "TWideStringField"}, "filialdatasetdrname": {"name": "FilialDataSetDRNAME", "type": "TWideStringField"}, "filialdatasetdrfullname": {"name": "FilialDataSetDRFULLNAME", "type": "TWideStringField"}, "filialdatasetnname": {"name": "FilialDataSetNNAME", "type": "TWideStringField"}, "filialdatasetnfullname": {"name": "FilialDataSetNFULLNAME", "type": "TWideStringField"}, "oracledatasettamplatesname": {"name": "OracleDataSetTamplatesNAME", "type": "TWideStringField"}, "wrtemplatesdatasetmehid": {"name": "WRTemplatesDataSetMEHID", "type": "TFloatField"}, "oracledataset1": {"name": "OracleDataSet1", "type": "TOracleDataSet"}, "wrtemplatesdatasetactivities_id": {"name": "WRTemplatesDataSetACTIVITIES_ID", "type": "TFloatField"}}, {});
  U.init(async () => {
    U.var_("WRSetupDataMod", null, "TWRSetupDataMod");
  });
  U.method("TWRSetupDataMod", "WRBookmarksDataSetApplyRecord", async function WRBookmarksDataSetApplyRecord(Self, p0, p1, p2, p3) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "action": $.copyArg(p1), "applied": $.asRef(p2), "newrowid": $.asRef(p3), result: undefined, "id": 0, "stemplid": 0, "sfieldid": 0, "sbookmarkname": ''};
  await $.fixArgs(L0, ["sender", "action"]);
  {
    const $t1 = L0["sender"];
    await $.wset([$t1], "stemplid", (await $.mv((await $.wcall([$t1], "FieldByName", ["Templateid"], C)), "Asinteger")), { get: async () => L0["stemplid"], set: async (v) => { L0["stemplid"] = v; }, local: true });
    await $.wset([$t1], "sfieldid", (await $.mv((await $.wcall([$t1], "FieldByName", ["Fieldid"], C)), "Asinteger")), { get: async () => L0["sfieldid"], set: async (v) => { L0["sfieldid"] = v; }, local: true });
    await $.wset([$t1], "Sbookmarkname", (await $.mv((await $.wcall([$t1], "FieldByName", ["Bookmarkname"], C)), "Asstring")), { get: async () => L0["sbookmarkname"], set: async (v) => { L0["sbookmarkname"] = v; }, local: true });
    await $.wset([$t1], "id", (await $.mv((await $.wcall([$t1], "FieldByName", ["id"], C)), "Asinteger")), { get: async () => L0["id"], set: async (v) => { L0["id"] = v; }, local: true });
  }
  { const $t2 = L0["action"];
    if ($.eq($t2, "I")) {
      await $.stmt((await $.mcall((await $.v(C, "CM_WR_TOOLS")), "CallProcedure", ["AddBookmark", [L0["stemplid"], L0["sfieldid"], L0["sbookmarkname"]]])));
    }
    else if ($.eq($t2, "D")) {
      await $.stmt((await $.mcall((await $.v(C, "CM_WR_TOOLS")), "CallProcedure", ["DeleteBookmark", [L0["id"]]])));
    }
    else if ($.eq($t2, "U")) {
      await $.stmt((await $.mcall((await $.v(C, "CM_WR_TOOLS")), "CallProcedure", ["updateBookmark", [L0["id"], L0["sbookmarkname"], L0["stemplid"], L0["sfieldid"]]])));
    }
  }
  await L0["applied"].set(true);
  return L0.result;
}, {"params": ["Sender", "Action", "Applied", "NewRowId"], "kind": "procedure", "ptypes": ["TOracleDataSet", "Char", "Boolean", "String"]});
  U.method("TWRSetupDataMod", "WRTemplatesDataSetApplyRecord", async function WRTemplatesDataSetApplyRecord(Self, p0, p1, p2, p3) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "action": $.copyArg(p1), "applied": $.asRef(p2), "newrowid": $.asRef(p3), result: undefined, "mehid": 0, "activid": 0, "sname": '', "spath": '', "templid": 0};
  await $.fixArgs(L0, ["sender", "action"]);
  {
    const $t3 = L0["sender"];
    await $.wset([$t3], "SName", (await $.mv((await $.wcall([$t3], "FieldByName", ["NAME"], C)), "AsString")), { get: async () => L0["sname"], set: async (v) => { L0["sname"] = v; }, local: true });
    await $.wset([$t3], "SPath", (await $.mv((await $.wcall([$t3], "FieldByName", ["PATH"], C)), "AsString")), { get: async () => L0["spath"], set: async (v) => { L0["spath"] = v; }, local: true });
    await $.wset([$t3], "templid", (await $.mv((await $.wcall([$t3], "FieldByName", ["ID"], C)), "AsInteger")), { get: async () => L0["templid"], set: async (v) => { L0["templid"] = v; }, local: true });
    await $.wset([$t3], "mehid", (await $.mv((await $.wcall([$t3], "FieldByName", ["mehid"], C)), "AsInteger")), { get: async () => L0["mehid"], set: async (v) => { L0["mehid"] = v; }, local: true });
    await $.wset([$t3], "activid", (await $.mv((await $.wcall([$t3], "FieldByName", ["activities_id"], C)), "AsInteger")), { get: async () => L0["activid"], set: async (v) => { L0["activid"] = v; }, local: true });
  }
  { const $t4 = L0["action"];
    if ($.eq($t4, "I")) {
      await $.stmt((await $.mcall((await $.v(C, "CM_WR_TOOLS")), "CallProcedure", ["AddTemplate", [L0["sname"], L0["spath"], L0["mehid"], L0["activid"]]])));
    }
    else if ($.eq($t4, "D")) {
      await $.stmt((await $.mcall((await $.v(C, "CM_WR_TOOLS")), "CallProcedure", ["DeleteTemplate", [L0["templid"]]])));
    }
    else if ($.eq($t4, "U")) {
      await $.stmt((await $.mcall((await $.v(C, "CM_WR_TOOLS")), "CallProcedure", ["UpdateTemplates", [L0["templid"], L0["sname"], L0["spath"], L0["mehid"], L0["activid"]]])));
    }
  }
  await L0["applied"].set(true);
  return L0.result;
}, {"params": ["Sender", "Action", "Applied", "NewRowId"], "kind": "procedure", "ptypes": ["TOracleDataSet", "Char", "Boolean", "String"]});
  return U;
}
