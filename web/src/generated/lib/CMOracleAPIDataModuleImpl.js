// Generated from CMOracleAPIDataModuleImpl.pas by pas2js — do not edit by hand; regenerate instead.
/* eslint-disable */
// @ts-nocheck

export default function define($) {
  const U = $.unit("CMOracleAPIDataModuleImpl", ["Windows", "Messages", "SysUtils", "Classes", "Graphics", "Controls", "Forms", "Dialogs", "Oracle", "Db", "OracleData", "OraLogon"]);
  const C = [U];
  U.defClass("TCMDataModule", "TDataModule", {"cmsession": {"name": "CMSession", "type": "TOracleSession"}, "dsbankdate": {"name": "DSBankDate", "type": "TOracleDataSet"}, "branch": {"name": "Branch", "type": "TOracleDataSet"}, "cm_login": {"name": "CM_LOGIN", "type": "TOraclePackage"}, "orpack_sl": {"name": "OrPack_SL", "type": "TOraclePackage"}, "cmlogon": {"name": "CMLogon", "type": "TOraLogon"}, "fcurrentdate": {"name": "FCurrentDate", "type": "TDateTime"}, "fprevdate": {"name": "FPrevDate", "type": "TDateTime"}, "fbranchid": {"name": "FBranchID", "type": "Integer"}}, {"currentdate": {"name": "CurrentDate", "read": "FCurrentDate"}, "prevdate": {"name": "PrevDate", "read": "FPrevDate"}, "branchid": {"name": "BranchID", "read": "FBranchID"}});
  U.init(async () => {
    U.var_("CMDataModule", null, "TCMDataModule");
  });
  U.method("TCMDataModule", "TryToConnect", async function TryToConnect(Self, p0, p1, p2) {
  const C = $.chain(Self, U);
  const L0 = {"username": $.copyArg(p0), "password": $.copyArg(p1), "database": $.copyArg(p2), result: false};
  await $.fixArgs(L0, ["username", "password", "database"]);
  {
    const $t1 = (await $.v(C, "CMLogon"));
    const $t2 = (await $.wv([$t1], "Session", C, false));
    await $.wset([$t1, $t2], "PLogonUsername", (await $.wv([$t1, $t2], "UserName", { get: async () => L0["username"], set: async (v) => { L0["username"] = v; }, local: true }, false)), C);
    await $.wset([$t1, $t2], "PLogonDatabase", (await $.wv([$t1, $t2], "Database", { get: async () => L0["database"], set: async (v) => { L0["database"] = v; }, local: true }, false)), C);
    await $.wset([$t1, $t2], "PLogonPassword", (await $.wv([$t1, $t2], "Password", { get: async () => L0["password"], set: async (v) => { L0["password"] = v; }, local: true }, false)), C);
    await $.stmt($.wcall([$t1, $t2], "Execute", [], C));
    await $.wset([$t1, $t2], "Result", (await $.wv([$t1, $t2], "Connected", C, false)), { get: async () => L0["result"], set: async (v) => { L0["result"] = v; }, local: true });
    if ($.truthy((await $.wv([$t1, $t2], "Result", { get: async () => L0["result"], set: async (v) => { L0["result"] = v; }, local: true }, false)))) {
      await $.stmt($.wcall([$t1, $t2], "Get_Defaults", [], C));
    }
  }
  return L0.result;
}, {"params": ["UserName", "Password", "Database"], "kind": "function", "ptypes": ["String", "String", "String"]});
  U.method("TCMDataModule", "Disconnect", async function Disconnect(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: undefined};
  {
    const $t3 = (await $.v(C, "CMSession"));
    if ($.truthy((await $.wv([$t3], "Connected", C, false)))) {
      await $.stmt($.wcall([$t3], "LogOff", [], C));
    }
  }
  return L0.result;
}, {"params": [], "kind": "procedure", "ptypes": []});
  U.method("TCMDataModule", "Get_Defaults", async function Get_Defaults(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: undefined};
  {
    const $t4 = (await $.v(C, "DSBankDate"));
    await $.stmt($.wcall([$t4], "Open", [], C));
    await $.wset([$t4], "FCurrentDate", (await $.mv((await $.wcall([$t4], "FieldByName", ["TEK_DAT"], C)), "AsDateTime")), C);
    await $.wset([$t4], "FPrevDate", (await $.mv((await $.wcall([$t4], "FieldByName", ["PRED_DAT"], C)), "AsDateTime")), C);
    await $.stmt($.wcall([$t4], "CloseAll", [], C));
  }
  {
    const $t5 = (await $.v(C, "Branch"));
    await $.stmt($.wcall([$t5], "Open", [], C));
    await $.wset([$t5], "FBranchID", (await $.mv((await $.wcall([$t5], "FieldByName", ["KOD_FIL"], C)), "AsInteger")), C);
    await $.stmt($.wcall([$t5], "CloseAll", [], C));
  }
  return L0.result;
}, {"params": [], "kind": "procedure", "ptypes": []});
  U.method("TCMDataModule", "DataModuleCreate", async function DataModuleCreate(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.set(C, "FBranchID", 0);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TCMDataModule", "Get_UserAlert", async function Get_UserAlert(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: ''};
  {
    const $t6 = (await $.v(C, "CM_LOGIN"));
    await $.wset([$t6], "Result", (await $.wcall([$t6], "callStringFunction", ["Get_UserAlert", []], C)), { get: async () => L0["result"], set: async (v) => { L0["result"] = v; }, local: true });
  }
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.setInitialization(async function __initialization(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: undefined};
  await $.set(C, "CMDataModule", (await $.mcall((await $.v(C, "TCMDataModule")), "Create", [null])));
  return L0.result;
});
  return U;
}
