// Generated from DMPenaltySettImpl.pas by pas2js — do not edit by hand; regenerate instead.
/* eslint-disable */
// @ts-nocheck

export default function define($) {
  const U = $.unit("DMPenaltySettImpl", ["Windows", "Messages", "SysUtils", "Classes", "Graphics", "Controls", "Forms", "Dialogs", "Db", "OracleData", "Oracle", "sboapiDataModuleImpl"]);
  const C = [U];
  U.defClass("TDMPenaltySett", "TDataModule", {"valutes": {"name": "Valutes", "type": "TOracleDataSet"}, "valutesdatsrc": {"name": "ValutesDatSrc", "type": "TDataSource"}, "accounts": {"name": "Accounts", "type": "TOracleDataSet"}, "accountsdatsrc": {"name": "AccountsDatSrc", "type": "TDataSource"}, "branches": {"name": "Branches", "type": "TOracleDataSet"}, "branchesdatsrc": {"name": "BranchesDatSrc", "type": "TDataSource"}, "penaltysettings": {"name": "PenaltySettings", "type": "TOracleDataSet"}, "penaltysettingsdatsrc": {"name": "PenaltySettingsDatSrc", "type": "TDataSource"}, "cm_setup": {"name": "cm_setup", "type": "TOraclePackage"}, "avalutes": {"name": "avalutes", "type": "TOracleDataSet"}, "avalutesdatsourc": {"name": "avalutesDatSourc", "type": "TDataSource"}, "valutesvalute": {"name": "ValutesVALUTE", "type": "TIntegerField"}, "valutesval_name": {"name": "ValutesVAL_NAME", "type": "TWideStringField"}, "valutesvalu_name": {"name": "ValutesVALU_NAME", "type": "TWideStringField"}, "branchesid": {"name": "BranchesID", "type": "TFloatField"}, "branchesname": {"name": "BranchesNAME", "type": "TWideStringField"}, "accountsid": {"name": "AccountsID", "type": "TFloatField"}, "accountsacc_no": {"name": "AccountsACC_NO", "type": "TWideStringField"}, "penaltysettingsid": {"name": "PenaltySettingsID", "type": "TFloatField"}, "penaltysettingsbranchid": {"name": "PenaltySettingsBRANCHID", "type": "TFloatField"}, "penaltysettingscurrencyid": {"name": "PenaltySettingsCURRENCYID", "type": "TFloatField"}, "penaltysettingsaccid": {"name": "PenaltySettingsACCID", "type": "TFloatField"}, "avalutesvalute": {"name": "avalutesVALUTE", "type": "TIntegerField"}, "avalutesval_name": {"name": "avalutesVAL_NAME", "type": "TWideStringField"}, "avalutesvalu_name": {"name": "avalutesVALU_NAME", "type": "TWideStringField"}, "penaltysettingsfilial": {"name": "PenaltySettingsFilial", "type": "TWideStringField"}, "penaltysettingsaccno": {"name": "PenaltySettingsAccno", "type": "TStringField"}}, {});
  U.init(async () => {
    U.var_("DMPenaltySett", null, "TDMPenaltySett");
  });
  U.method("TDMPenaltySett", "DataModuleCreate", async function DataModuleCreate(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mcall((await $.v(C, "Valutes")), "Open", []);
  await $.mcall((await $.v(C, "Accounts")), "Open", []);
  await $.mcall((await $.v(C, "Branches")), "OPen", []);
  await $.mcall((await $.v(C, "PenaltySettings")), "OPen", []);
  await $.mcall((await $.v(C, "avalutes")), "Open", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TDMPenaltySett", "DataModuleDestroy", async function DataModuleDestroy(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mcall((await $.v(C, "Valutes")), "CloseAll", []);
  await $.mcall((await $.v(C, "Accounts")), "CloseAll", []);
  await $.mcall((await $.v(C, "Branches")), "CloseAll", []);
  await $.mcall((await $.v(C, "PenaltySettings")), "CloseAll", []);
  await $.mcall((await $.v(C, "avalutes")), "CloseAll", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TDMPenaltySett", "PenaltySettingsApplyRecord", async function PenaltySettingsApplyRecord(Self, p0, p1, p2, p3) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "action": $.copyArg(p1), "applied": $.asRef(p2), "newrowid": $.asRef(p3), result: undefined, "filialid": 0, "currencyid": 0, "accid": 0, "setid": 0};
  await $.fixArgs(L0, ["sender", "action"]);
  {
    const $t1 = L0["sender"];
    await $.wset([$t1], "FilialID", (await $.mv((await $.wcall([$t1], "FieldByName", ["Branchid"], C)), "AsInteger")), { get: async () => L0["filialid"], set: async (v) => { L0["filialid"] = v; }, local: true });
    await $.wset([$t1], "CurrencyID", (await $.mv((await $.wcall([$t1], "FieldByName", ["CurrencyID"], C)), "AsInteger")), { get: async () => L0["currencyid"], set: async (v) => { L0["currencyid"] = v; }, local: true });
    await $.wset([$t1], "ACCID", (await $.mv((await $.wcall([$t1], "FieldByName", ["ACCID"], C)), "AsInteger")), { get: async () => L0["accid"], set: async (v) => { L0["accid"] = v; }, local: true });
    await $.wset([$t1], "SetID", (await $.mv((await $.wcall([$t1], "FieldByName", ["ID"], C)), "AsInteger")), { get: async () => L0["setid"], set: async (v) => { L0["setid"] = v; }, local: true });
  }
  { const $t2 = L0["action"];
    if ($.eq($t2, "I")) {
      await $.stmt((await $.mcall((await $.mv((await $.v(C, "DMPenaltySett")), "cm_setup")), "CallProcedure", ["Add_PenaltySett", [L0["filialid"], L0["currencyid"], L0["accid"]]])));
    }
    else if ($.eq($t2, "U")) {
      await $.stmt((await $.mcall((await $.mv((await $.v(C, "DMPenaltySett")), "cm_setup")), "CallProcedure", ["upd_PenaltySett", [L0["setid"], L0["filialid"], L0["currencyid"], L0["accid"]]])));
    }
  }
  await L0["applied"].set(true);
  return L0.result;
}, {"params": ["Sender", "Action", "Applied", "NewRowId"], "kind": "procedure", "ptypes": ["TOracleDataSet", "Char", "Boolean", "String"]});
  return U;
}
