// Generated from DataModuleImpl.pas by pas2js — do not edit by hand; regenerate instead.
/* eslint-disable */
// @ts-nocheck

export default function define($) {
  const U = $.unit("DataModuleImpl", ["Windows", "Messages", "SysUtils", "Classes", "Graphics", "Controls", "Forms", "Dialogs", "Db", "OracleData", "TuningTransactionImpl", "Oracle", "Stdctrls", "sboapiDataModuleImpl", "UnitFormOperations"]);
  const C = [U];
  U.defClass("TTuningDataModule", "TDataModule", {"odssettings": {"name": "ODSSettings", "type": "TOracleDataSet"}, "dssettings": {"name": "DSSettings", "type": "TDataSource"}, "odscustomergroups": {"name": "ODSCustomerGroups", "type": "TOracleDataSet"}, "dscustomergroups": {"name": "DSCustomerGroups", "type": "TDataSource"}, "odsdebtaccount": {"name": "ODSDebtAccount", "type": "TOracleDataSet"}, "dsdebtaccount": {"name": "DSDebtAccount", "type": "TDataSource"}, "dscurrency": {"name": "DSCurrency", "type": "TDataSource"}, "opmainsettings": {"name": "OPMainSettings", "type": "TOraclePackage"}, "odstariffscale": {"name": "ODSTariffScale", "type": "TOracleDataSet"}, "dstariffscale": {"name": "DSTariffScale", "type": "TDataSource"}, "odscustomergroupsid": {"name": "ODSCustomerGroupsID", "type": "TFloatField"}, "odscustomergroupsname": {"name": "ODSCustomerGroupsNAME", "type": "TWideStringField"}, "odssettingsid": {"name": "ODSSettingsID", "type": "TFloatField"}, "odssettingsdebt": {"name": "ODSSettingsDEBT", "type": "TFloatField"}, "odssettingsdebitaccount": {"name": "ODSSettingsDEBITACCOUNT", "type": "TWideStringField"}, "odssettingsdebitcurrency": {"name": "ODSSettingsDEBITCURRENCY", "type": "TWideStringField"}, "odssettingscredit": {"name": "ODSSettingsCREDIT", "type": "TFloatField"}, "odssettingscreditaccount": {"name": "ODSSettingsCREDITACCOUNT", "type": "TWideStringField"}, "odssettingscreditcurrency": {"name": "ODSSettingsCREDITCURRENCY", "type": "TWideStringField"}, "odssettingsadditionaldebt": {"name": "ODSSettingsADDITIONALDEBT", "type": "TFloatField"}, "odssettingsadditionalcredit": {"name": "ODSSettingsADDITIONALCREDIT", "type": "TFloatField"}, "odssettingsadebt": {"name": "ODSSettingsADEBT", "type": "TWideStringField"}, "odssettingsacredit": {"name": "ODSSettingsACREDIT", "type": "TWideStringField"}, "odssettingsassignment": {"name": "ODSSettingsASSIGNMENT", "type": "TWideStringField"}, "odssettingscommisionassignment": {"name": "ODSSettingsCOMMISIONASSIGNMENT", "type": "TWideStringField"}, "odssettingsadebitcurrency": {"name": "ODSSettingsADEBITCURRENCY", "type": "TWideStringField"}, "odssettingsacreditcurrency": {"name": "ODSSettingsACREDITCURRENCY", "type": "TWideStringField"}, "odstariffscaleid": {"name": "ODSTariffScaleID", "type": "TFloatField"}, "odstariffscalegroupid": {"name": "ODSTariffScaleGROUPID", "type": "TFloatField"}, "odstariffscalepercent": {"name": "ODSTariffScalePERCENT", "type": "TFloatField"}, "odstariffscaleammount": {"name": "ODSTariffScaleAMMOUNT", "type": "TFloatField"}, "odstariffscaleminvalue": {"name": "ODSTariffScaleMINVALUE", "type": "TFloatField"}, "odstariffscalemaxvalue": {"name": "ODSTariffScaleMAXVALUE", "type": "TFloatField"}, "odstariffscalecommisionid": {"name": "ODSTariffScaleCOMMISIONID", "type": "TFloatField"}, "odssettingsuserid": {"name": "ODSSettingsUSERID", "type": "TFloatField"}, "odscurrency": {"name": "ODSCurrency", "type": "TOracleDataSet"}, "odssettingsname": {"name": "ODSSettingsNAME", "type": "TWideStringField"}, "settings": {"name": "Settings", "type": "TOracleDataSet"}, "iscommonset": {"name": "isCommonSet", "type": "boolean"}}, {});
  U.init(async () => {
    U.var_("TuningDataModule", null, "TTuningDataModule");
  });
  U.method("TTuningDataModule", "DataModuleCreate", async function DataModuleCreate(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mcall((await $.v(C, "ODSSettings")), "Open", []);
  await $.mcall((await $.v(C, "ODSCustomerGroups")), "Open", []);
  await $.mcall((await $.v(C, "Settings")), "Open", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TTuningDataModule", "add_commision_trans", async function add_commision_trans(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"settings": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["settings"]);
  L0["csinsert"] = "Insert_Commision_Trans";
  {
    const $t1 = (await $.v(C, "OPMainSettings"));
    const $t2 = (await $.wv([$t1], "Settings", { get: async () => L0["settings"], set: async (v) => { L0["settings"] = v; }, local: true }, false));
    await $.stmt((await $.wcall([$t1, $t2], "CallProcedure", [(await $.wv([$t1, $t2], "csInsert", { get: async () => L0["csinsert"], set: async (v) => { L0["csinsert"] = v; }, local: true }, false)), [(await $.wv([$t1, $t2], "name", C, false)), (await $.wv([$t1, $t2], "debt", C, false)), (await $.wv([$t1, $t2], "credit", C, false)), (await $.wv([$t1, $t2], "additionalDebt", C, false)), (await $.wv([$t1, $t2], "additionalCredit", C, false)), (await $.wv([$t1, $t2], "assignment", C, false)), (await $.wv([$t1, $t2], "commisionassignment", C, false)), (await $.wv([$t1, $t2], "isCommonSetting", C, false))]], C)));
  }
  return L0.result;
}, {"params": ["Settings"], "kind": "procedure", "ptypes": ["TSettings"]});
  U.method("TTuningDataModule", "update_commision_trans", async function update_commision_trans(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"settings": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["settings"]);
  L0["csupdate"] = "update_commision_trans";
  {
    const $t3 = (await $.v(C, "OPMainSettings"));
    const $t4 = (await $.wv([$t3], "Settings", { get: async () => L0["settings"], set: async (v) => { L0["settings"] = v; }, local: true }, false));
    await $.stmt((await $.wcall([$t3, $t4], "CallProcedure", [(await $.wv([$t3, $t4], "csUpdate", { get: async () => L0["csupdate"], set: async (v) => { L0["csupdate"] = v; }, local: true }, false)), [(await $.wv([$t3, $t4], "ID", C, false)), (await $.wv([$t3, $t4], "name", C, false)), (await $.wv([$t3, $t4], "debt", C, false)), (await $.wv([$t3, $t4], "credit", C, false)), (await $.wv([$t3, $t4], "additionalDebt", C, false)), (await $.wv([$t3, $t4], "additionalCredit", C, false)), (await $.wv([$t3, $t4], "assignment", C, false)), (await $.wv([$t3, $t4], "commisionassignment", C, false)), (await $.wv([$t3, $t4], "isCommonSetting", C, false))]], C)));
  }
  return L0.result;
}, {"params": ["Settings"], "kind": "procedure", "ptypes": ["TSettings"]});
  U.method("TTuningDataModule", "ODSSettingsApplyRecord", async function ODSSettingsApplyRecord(Self, p0, p1, p2, p3) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "action": $.copyArg(p1), "applied": $.asRef(p2), "newrowid": $.asRef(p3), result: undefined, "settings": $.rec("tsettings")};
  await $.fixArgs(L0, ["sender", "action"]);
  L0["preparesettings"] = $.fn(async function PrepareSettings() {
  const L1 = {result: undefined};
  {
    const $t5 = (L0["sender"]);
    const $t6 = (await $.wv([$t5], "Settings", { get: async () => L0["settings"], set: async (v) => { L0["settings"] = v; }, local: true }, false));
    await $.wset([$t5, $t6], "ID", (await $.mv((await $.wcall([$t5, $t6], "FieldByName", ["ID"], C)), "AsInteger")), C);
    await $.wset([$t5, $t6], "name", (await $.mv((await $.wcall([$t5, $t6], "FieldByName", ["name"], C)), "AsString")), C);
    await $.wset([$t5, $t6], "debt", (await $.mv((await $.wcall([$t5, $t6], "FieldByName", ["debt"], C)), "AsInteger")), C);
    await $.wset([$t5, $t6], "credit", (await $.mv((await $.wcall([$t5, $t6], "FieldByName", ["credit"], C)), "AsInteger")), C);
    await $.wset([$t5, $t6], "additionalDebt", (await $.mv((await $.wcall([$t5, $t6], "FieldByName", ["additionalDebt"], C)), "AsInteger")), C);
    await $.wset([$t5, $t6], "additionalCredit", (await $.mv((await $.wcall([$t5, $t6], "FieldByName", ["additionalCredit"], C)), "AsInteger")), C);
    await $.wset([$t5, $t6], "assignment", (await $.mv((await $.wcall([$t5, $t6], "FieldByName", ["assignment"], C)), "AsString")), C);
    await $.wset([$t5, $t6], "commisionassignment", (await $.mv((await $.wcall([$t5, $t6], "FieldByName", ["commisionassignment"], C)), "AsString")), C);
    await $.wset([$t5, $t6], "isCommonSetting", $.eq((await $.mv((await $.wcall([$t5, $t6], "FieldByName", ["UserID"], C)), "AsInteger")), 0), C);
  }
  return L1.result;
});
  { const $t7 = L0["action"];
    if ($.eq($t7, "I")) {
      await $.stmt($.callv(L0["preparesettings"], []));
      await $.stmt((await $.call(C, "add_commision_trans", [L0["settings"]])));
      await L0["applied"].set(true);
    }
    else if ($.eq($t7, "U")) {
      await $.stmt($.callv(L0["preparesettings"], []));
      await $.stmt((await $.call(C, "update_commision_trans", [L0["settings"]])));
      await L0["applied"].set(true);
    }
    else if ($.eq($t7, "L") || $.eq($t7, "R") || $.eq($t7, "C")) {
      await L0["applied"].set(true);
    }
    else {
      await L0["applied"].set(false);
    }
  }
  return L0.result;
}, {"params": ["Sender", "Action", "Applied", "NewRowId"], "kind": "procedure", "ptypes": ["TOracleDataSet", "Char", "Boolean", "String"]});
  U.method("TTuningDataModule", "DSSettingsDataChange", async function DSSettingsDataChange(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "field": $.copyArg(p1), result: undefined};
  await $.fixArgs(L0, ["sender", "field"]);
  if ($.truthy($.eq((await $.mv((await $.mv((L0["sender"]), "DataSet")), "State")), (await $.v(C, "dsBrowse"))))) {
    {
      const $t8 = (await $.mv((L0["sender"]), "DataSet"));
      const $t9 = (await $.wv([$t8], "TuningTransaction", C, false));
      await $.mset((await $.wv([$t8, $t9], "ActionUpdate", C, false)), "Enabled", $.not((await $.wv([$t8, $t9], "IsEmpty", C, false))));
      await $.mset((await $.wv([$t8, $t9], "ActionDelete", C, false)), "Enabled", $.not((await $.wv([$t8, $t9], "IsEmpty", C, false))));
      await $.mset((await $.wv([$t8, $t9], "ActionSetTariffScale", C, false)), "Enabled", $.not((await $.wv([$t8, $t9], "IsEmpty", C, false))));
    }
  }
  return L0.result;
}, {"params": ["Sender", "Field"], "kind": "procedure", "ptypes": ["TObject", "TField"]});
  U.method("TTuningDataModule", "ODSCustomerGroupsAfterPost", async function ODSCustomerGroupsAfterPost(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"dataset": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["dataset"]);
  await $.mcall(L0["dataset"], "Refresh", []);
  return L0.result;
}, {"params": ["DataSet"], "kind": "procedure", "ptypes": ["TDataSet"]});
  U.method("TTuningDataModule", "ODSTariffScaleTranslateMessage", async function ODSTariffScaleTranslateMessage(Self, p0, p1, p2, p3, p4) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "errorcode": $.copyArg(p1), "constraintname": $.copyArg(p2), "action": $.copyArg(p3), "msg": $.asRef(p4), result: undefined};
  await $.fixArgs(L0, ["sender", "errorcode", "constraintname", "action"]);
  if ($.truthy(($.eq(L0["constraintname"], "UK_TARIFFSCALE_MINVALUE")))) {
    await L0["msg"].set("SMART:Setting with this min value is already exists");
  } else {
    if ($.truthy(($.eq(L0["constraintname"], "UK_TARIFFSCALE_MAXVALUE")))) {
      await L0["msg"].set("SMART:Setting with this max value is already exists");
    }
  }
  await $.mcall(L0["sender"], "Cancel", []);
  return L0.result;
}, {"params": ["Sender", "ErrorCode", "ConstraintName", "Action", "Msg"], "kind": "procedure", "ptypes": ["TOracleDataSet", "Integer", "String", "Char", "String"]});
  U.method("TTuningDataModule", "ODSTariffScaleBeforePost", async function ODSTariffScaleBeforePost(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"dataset": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["dataset"]);
  await $.mset((await $.mcall(L0["dataset"], "FieldByName", ["commisionID"])), "AsInteger", (await $.mv((await $.mcall((await $.v(C, "ODSSettings")), "FieldByName", ["ID"])), "Value")));
  return L0.result;
}, {"params": ["DataSet"], "kind": "procedure", "ptypes": ["TDataSet"]});
  U.method("TTuningDataModule", "ODSDebtAccountAfterScroll", async function ODSDebtAccountAfterScroll(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"dataset": $.copyArg(p0), result: undefined, "foundfield": ''};
  await $.fixArgs(L0, ["dataset"]);
  if ($.truthy((await $.and_(((await $.call(C, "Assigned", [(await $.v(C, "FormOperations"))]))), async () => ($.ne((await $.call(C, "Trim", [(await $.mv((await $.v(C, "FormOperations")), "SearchField"))])), "")))))) {
    {
      const $t10 = (await $.v(C, "FormOperations"));
      const $t11 = (await $.wv([$t10], "DataSet", { get: async () => L0["dataset"], set: async (v) => { L0["dataset"] = v; }, local: true }, false));
      await $.wset([$t10, $t11], "FoundField", (await $.mv((await $.wcall([$t10, $t11], "FieldByName", ["ACC_NO"], C)), "AsString")), { get: async () => L0["foundfield"], set: async (v) => { L0["foundfield"] = v; }, local: true });
      if ($.truthy($.eq((await $.mv((await $.wv([$t10, $t11], "CurrentEdit", C, false)), "Tag")), 0))) {
        await $.stmt((await $.wcall([$t10, $t11], "SetSelectedText", [(await $.wv([$t10, $t11], "CurrentEdit", C, false)), (await $.wv([$t10, $t11], "FoundField", { get: async () => L0["foundfield"], set: async (v) => { L0["foundfield"] = v; }, local: true }, false))], C)));
      } else {
        await $.mset((await $.wv([$t10, $t11], "CurrentEdit", C, false)), "Tag", 0);
      }
      if ($.truthy((await $.mv((await $.wv([$t10, $t11], "CurrentEdit", C, false)), "Focused")))) {
        await $.mset((await $.mcall((await $.wv([$t10, $t11], "ODSSettings", C, false)), "FieldByName", [(await $.wv([$t10, $t11], "SearchField", C, false))])), "AsInteger", (await $.mv((await $.wcall([$t10, $t11], "FieldByName", ["ID"], C)), "AsInteger")));
      }
    }
  }
  return L0.result;
}, {"params": ["DataSet"], "kind": "procedure", "ptypes": ["TDataSet"]});
  return U;
}
