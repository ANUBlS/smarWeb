// Generated from sboapiDataModuleImpl.pas by pas2js — do not edit by hand; regenerate instead.
/* eslint-disable */
// @ts-nocheck

export default function define($) {
  const U = $.unit("sboapiDataModuleImpl", ["Windows", "Messages", "SysUtils", "Classes", "Graphics", "Controls", "Forms", "Dialogs", "Db", "DBTables", "SBOInitPkg", "Oracle", "OracleData", "SBOracleLogOn"]);
  const C = [U];
  U.defClass("TsboapiDataModule", "TDataModule", {"sbsession": {"name": "SBSession", "type": "TOracleSession"}, "sblogon": {"name": "SBLogon", "type": "TOracleLogon"}, "sboperationday": {"name": "SBOperationDay", "type": "TOraclePackage"}, "getcustomer": {"name": "GetCustomer", "type": "TOracleDataSet"}, "sbsecurity": {"name": "SBSecurity", "type": "TOraclePackage"}, "sbreferences": {"name": "SBReferences", "type": "TOraclePackage"}, "sbreport": {"name": "SBReport", "type": "TOraclePackage"}, "sbratemanagement": {"name": "SBRateManagement", "type": "TOraclePackage"}, "sbsystem": {"name": "SBSystem", "type": "TOraclePackage"}, "sbutil": {"name": "SBUtil", "type": "TOraclePackage"}, "sbinstallation": {"name": "SBInstallation", "type": "TOraclePackage"}, "sbcorrection": {"name": "SBCorrection", "type": "TOraclePackage"}, "sbsettings": {"name": "SBSettings", "type": "TOraclePackage"}, "sbtransaction": {"name": "SBTransaction", "type": "TOraclePackage"}, "sbmessage": {"name": "SBMessage", "type": "TOraclePackage"}, "sbsessionmgr": {"name": "SBSessionMgr", "type": "TOraclePackage"}, "sblogin": {"name": "SBLogin", "type": "TOraclePackage"}, "sbmodules": {"name": "SBModules", "type": "TOraclePackage"}, "sbaca": {"name": "SBAca", "type": "TOraclePackage"}, "orpack_sl": {"name": "OrPack_SL", "type": "TOraclePackage"}, "dsbankdate": {"name": "DSBankDate", "type": "TOracleDataSet"}, "branch": {"name": "Branch", "type": "TOracleDataSet"}, "branchkod_fil": {"name": "BranchKOD_FIL", "type": "TIntegerField"}, "dsbankdatetek_dat": {"name": "DSBankDateTEK_DAT", "type": "TDateTimeField"}, "dsbankdatepred_dat": {"name": "DSBankDatePRED_DAT", "type": "TDateTimeField"}, "orpack_sms": {"name": "OrPack_SMS", "type": "TOraclePackage"}, "sboraclelogon": {"name": "SBOracleLogOn", "type": "TSBOracleLogOn"}, "fcurrentsbdata": {"name": "FCurrentSBData", "type": "TSBOData"}}, {});
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
  L0["result"] = false;
  {
    const $t3 = (await $.v(C, "SBOracleLogOn"));
    const $t4 = (await $.wv([$t3], "SBData", { get: async () => await L0["sbdata"].get(), set: async (v) => { await L0["sbdata"].set(v); }, local: true }, false));
    await $.wset([$t3, $t4], "LogonUsername", (await $.wv([$t3, $t4], "UserName", C, false)), C);
    await $.wset([$t3, $t4], "LogonPassword", (await $.wv([$t3, $t4], "Password", C, false)), C);
    await $.wset([$t3, $t4], "LogonDatabase", (await $.wv([$t3, $t4], "Database", C, false)), C);
    if ($.truthy($.eq((await $.wv([$t3, $t4], "Execute", C, false)), (await $.wcall([$t3, $t4], "TAskResult", [(await $.wv([$t3, $t4], "arSuccess", C, false))], C))))) {
      await $.wset([$t3, $t4], "Result", (await $.wv([$t3, $t4], "true", C, false)), { get: async () => L0["result"], set: async (v) => { L0["result"] = v; }, local: true });
    }
  }
  if ($.truthy(L0["result"])) {
    {
      const $t5 = (await $.v(C, "SBSession"));
      const $t6 = (await $.wv([$t5], "SBData", { get: async () => await L0["sbdata"].get(), set: async (v) => { await L0["sbdata"].set(v); }, local: true }, false));
      await $.wset([$t5, $t6], "UserName", (await $.wv([$t5, $t6], "LogonUsername", C, false)), C);
      await $.wset([$t5, $t6], "Password", (await $.wv([$t5, $t6], "LogonPassword", C, false)), C);
      await $.wset([$t5, $t6], "Database", (await $.wv([$t5, $t6], "LogonDatabase", C, false)), C);
    }
  }
  return L0.result;
}, {"params": ["SBData", "LogonOptions"], "kind": "function", "ptypes": ["TSBOData", "TAskForLogonOptions"]});
  U.method("TsboapiDataModule", "SetSBData", async function SetSBData(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sbdata": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sbdata"]);
  {
    const $t7 = L0["sbdata"];
    const $t8 = (await $.wv([$t7], "SBSession", C, false));
    await $.wset([$t7, $t8], "LogonUsername", (await $.wv([$t7, $t8], "UserName", C, false)), C);
    await $.wset([$t7, $t8], "LogonPassword", (await $.wv([$t7, $t8], "Password", C, false)), C);
    await $.wset([$t7, $t8], "LogonDatabase", (await $.wv([$t7, $t8], "Database", C, false)), C);
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
    const $t9 = (await $.v(C, "SBSession"));
    await $.stmt($.wcall([$t9], "LogOn", [], C));
  }
  return L0.result;
}, {"params": [], "kind": "procedure", "ptypes": []});
  U.method("TsboapiDataModule", "LogOff", async function LogOff(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: undefined};
  {
    const $t10 = (await $.v(C, "SBSession"));
    await $.stmt($.wcall([$t10], "LogOff", [], C));
  }
  return L0.result;
}, {"params": [], "kind": "procedure", "ptypes": []});
  return U;
}
