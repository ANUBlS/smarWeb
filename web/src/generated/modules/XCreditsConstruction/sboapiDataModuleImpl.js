// Generated from sboapiDataModuleImpl.pas by pas2js — do not edit by hand; regenerate instead.
/* eslint-disable */
// @ts-nocheck

export default function define($) {
  const U = $.unit("sboapiDataModuleImpl", ["Windows", "Messages", "SysUtils", "Classes", "Graphics", "Controls", "Forms", "Dialogs", "Db", "DBTables", "SBOInitPkg", "Oracle", "OracleData"]);
  const C = [U];
  U.defClass("TsboapiDataModule", "TDataModule", {"sbsession": {"name": "SBSession", "type": "TOracleSession"}, "sblogon": {"name": "SBLogon", "type": "TOracleLogon"}, "sboperationday": {"name": "SBOperationDay", "type": "TOraclePackage"}, "getcustomer": {"name": "GetCustomer", "type": "TOracleDataSet"}, "sbsecurity": {"name": "SBSecurity", "type": "TOraclePackage"}, "sbreferences": {"name": "SBReferences", "type": "TOraclePackage"}, "sbreport": {"name": "SBReport", "type": "TOraclePackage"}, "sbratemanagement": {"name": "SBRateManagement", "type": "TOraclePackage"}, "sbsystem": {"name": "SBSystem", "type": "TOraclePackage"}, "sbutil": {"name": "SBUtil", "type": "TOraclePackage"}, "sbinstallation": {"name": "SBInstallation", "type": "TOraclePackage"}, "sbcorrection": {"name": "SBCorrection", "type": "TOraclePackage"}, "sbsettings": {"name": "SBSettings", "type": "TOraclePackage"}, "sbtransaction": {"name": "SBTransaction", "type": "TOraclePackage"}, "sbmessage": {"name": "SBMessage", "type": "TOraclePackage"}, "sbsessionmgr": {"name": "SBSessionMgr", "type": "TOraclePackage"}, "sblogin": {"name": "SBLogin", "type": "TOraclePackage"}, "sbmodules": {"name": "SBModules", "type": "TOraclePackage"}, "sbaca": {"name": "SBAca", "type": "TOraclePackage"}, "fcurrentsbdata": {"name": "FCurrentSBData", "type": "TSBOData"}}, {});
  U.fieldInit("TsboapiDataModule", "fcurrentsbdata", () => $.rec("tsbodata"));
  U.init(async () => {
    U.var_("sboapiDataModule", null, "TsboapiDataModule");
  });
  U.method("TsboapiDataModule", "AskForLogon", async function AskForLogon(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sbdata": $.asRef(p0), "logonoptions": $.copyArg(p1), result: false};
  await $.fixArgs(L0, ["logonoptions"]);
  {
    const $t1 = (await $.v(C, "SBSession"));
    const $t2 = (await $.wv([$t1], "SBData", { get: async () => await L0["sbdata"].get(), set: async (v) => { await L0["sbdata"].set(v); }, local: true }, false));
    await $.wset([$t1, $t2], "LogonUsername", (await $.wv([$t1, $t2], "UserName", C, false)), C);
    await $.wset([$t1, $t2], "LogonPassword", (await $.wv([$t1, $t2], "Password", C, false)), C);
    await $.wset([$t1, $t2], "LogonDatabase", (await $.wv([$t1, $t2], "Database", C, false)), C);
  }
  {
    const $t3 = (await $.v(C, "SBLogon"));
    if ($.truthy($.in_((await $.wv([$t3], "aflShowDatabase", C, false)), (await $.wv([$t3], "LogonOptions", { get: async () => L0["logonoptions"], set: async (v) => { L0["logonoptions"] = v; }, local: true }, false))))) {
      await $.wset([$t3], "Options", $.add((await $.wv([$t3], "Options", C, false)), [(await $.wv([$t3], "ldDatabase", C, false))]), C);
      if ($.truthy($.in_((await $.wv([$t3], "aflShowDatabaseList", C, false)), (await $.wv([$t3], "LogonOptions", { get: async () => L0["logonoptions"], set: async (v) => { L0["logonoptions"] = v; }, local: true }, false))))) {
        await $.wset([$t3], "Options", $.add((await $.wv([$t3], "Options", C, false)), [(await $.wv([$t3], "ldDatabaseList", C, false))]), C);
      }
    }
    await $.wset([$t3], "Result", (await $.wv([$t3], "Execute", C, false)), { get: async () => L0["result"], set: async (v) => { L0["result"] = v; }, local: true });
  }
  if ($.truthy(L0["result"])) {
    {
      const $t4 = (await $.v(C, "SBSession"));
      const $t5 = (await $.wv([$t4], "SBData", { get: async () => await L0["sbdata"].get(), set: async (v) => { await L0["sbdata"].set(v); }, local: true }, false));
      await $.wset([$t4, $t5], "UserName", (await $.wv([$t4, $t5], "LogonUsername", C, false)), C);
      await $.wset([$t4, $t5], "Password", (await $.wv([$t4, $t5], "LogonPassword", C, false)), C);
      await $.wset([$t4, $t5], "Database", (await $.wv([$t4, $t5], "LogonDatabase", C, false)), C);
    }
  }
  return L0.result;
}, {"params": ["SBData", "LogonOptions"], "kind": "function", "ptypes": ["TSBOData", "TAskForLogonOptions"]});
  U.method("TsboapiDataModule", "SetSBData", async function SetSBData(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sbdata": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sbdata"]);
  {
    const $t6 = L0["sbdata"];
    const $t7 = (await $.wv([$t6], "SBSession", C, false));
    await $.wset([$t6, $t7], "LogonUsername", (await $.wv([$t6, $t7], "UserName", C, false)), C);
    await $.wset([$t6, $t7], "LogonPassword", (await $.wv([$t6, $t7], "Password", C, false)), C);
    await $.wset([$t6, $t7], "LogonDatabase", (await $.wv([$t6, $t7], "Database", C, false)), C);
  }
  await $.set(C, "FCurrentSBData", L0["sbdata"]);
  return L0.result;
}, {"params": ["SBData"], "kind": "procedure", "ptypes": ["TSBOData"]});
  U.method("TsboapiDataModule", "GetSBData", async function GetSBData(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sbdata": $.asRef(p0), result: undefined};
  await L0["sbdata"].set((await $.v(C, "FCurrentSBData")));
  return L0.result;
}, {"params": ["SBData"], "kind": "procedure", "ptypes": ["TSBOData"]});
  U.method("TsboapiDataModule", "LogOn", async function LogOn(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: undefined};
  {
    const $t8 = (await $.v(C, "SBSession"));
    await $.stmt($.wcall([$t8], "LogOn", [], C));
  }
  return L0.result;
}, {"params": [], "kind": "procedure", "ptypes": []});
  U.method("TsboapiDataModule", "LogOff", async function LogOff(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: undefined};
  {
    const $t9 = (await $.v(C, "SBSession"));
    await $.stmt($.wcall([$t9], "LogOff", [], C));
  }
  return L0.result;
}, {"params": [], "kind": "procedure", "ptypes": []});
  return U;
}
