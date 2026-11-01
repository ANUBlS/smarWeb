// Generated from SBOInitPkg.pas by pas2js — do not edit by hand; regenerate instead.
/* eslint-disable */
// @ts-nocheck

export default function define($) {
  const U = $.unit("SBOInitPkg", ["sboapiDataModuleImpl", "SBLogin", "Dialogs", "Oracle"]);
  const C = [U];
  U.enumType("taskforlogonoption", 2);
  U.const("aflShowDatabase", 0);
  U.const("aflShowDatabaseList", 1);
  $.defRecord("tsbodata", {"username": () => '', "password": () => '', "database": () => '', "sessionid": () => 0});
  U.init(async () => {
    U.const("DefaultLogonOptions", [(await $.v(C, "aflShowDatabase")), (await $.v(C, "aflShowDatabaseList"))]);
    U.const("MaxLogonRetryCount", 3);
    U.var_("Initialized", false, "Boolean");
  });
  U.func("Sb_Initialized", async function Sb_Initialized(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: false};
  L0["result"] = (await $.v(C, "Initialized"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.func("Sb_Initialize", async function Sb_Initialize(Self, p0, p1, p2, p3) {
  const C = $.chain(Self, U);
  const L0 = {"asbdata": $.asRef(p0), "dologon": $.copyArg(p1), "askforlogon": $.copyArg(p2), "options": (p3 === undefined ? (await $.v(C, "DefaultLogonOptions")) : p3), result: false};
  await $.fixArgs(L0, ["dologon", "askforlogon", "options"]);
  L0["result"] = false;
  if ($.truthy($.not((await $.v(C, "Sb_Initialized"))))) {
    await $.set(C, "sboapiDataModule", (await $.mcall((await $.v(C, "TsboapiDataModule")), "Create", [null])));
    if ($.truthy(L0["dologon"])) {
      if ($.truthy(L0["askforlogon"])) {
        L0["result"] = (await $.call(C, "Sb_AskForLogin", [$.ref(async () => (await L0["asbdata"].get()), async ($t1) => { await L0["asbdata"].set($t1); }), L0["options"], (await $.v(C, "MaxLogonRetryCount"))]));
        if ($.truthy(L0["result"])) {
          {
            const $t2 = (await $.v(C, "sboapiDataModule"));
            await $.stmt((await $.wcall([$t2], "SetSBData", [(await $.wv([$t2], "ASBData", { get: async () => await L0["asbdata"].get(), set: async (v) => { await L0["asbdata"].set(v); }, local: true }, false))], C)));
            await $.stmt($.wcall([$t2], "LogOn", [], C));
            await $.mset((await $.wv([$t2], "ASBData", { get: async () => await L0["asbdata"].get(), set: async (v) => { await L0["asbdata"].set(v); }, local: true }, false)), "SessionID", (await $.wcall([$t2], "Sb_GetSessionID", [], C)));
          }
        }
      }
    }
    await $.set(C, "Initialized", L0["result"]);
  }
  return L0.result;
}, {"params": ["ASBData", "DoLogOn", "AskForLogon", "Options"], "kind": "function", "ptypes": ["TSBOData", "Boolean", "Boolean", "TAskForLogonOptions"]});
  U.func("Sb_Cleanup", async function Sb_Cleanup(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: undefined};
  if ($.truthy((await $.v(C, "Sb_Initialized")))) {
    await $.stmt($.call(C, "Sb_Disconnect", []));
    await $.mcall((await $.v(C, "sboapiDataModule")), "Free", []);
    await $.set(C, "Initialized", false);
  }
  return L0.result;
}, {"params": [], "kind": "procedure", "ptypes": []});
  U.func("Sb_AskForLogin", async function Sb_AskForLogin(Self, p0, p1, p2) {
  const C = $.chain(Self, U);
  const L0 = {"sbdata": $.asRef(p0), "logonoptions": $.copyArg(p1), "maxretrycount": $.copyArg(p2), result: false, "retrycounter": 0, "succeeded": false};
  await $.fixArgs(L0, ["logonoptions", "maxretrycount"]);
  L0["checkstopcondition"] = $.fn(async function CheckStopCondition() {
  const L1 = {result: false};
  L1["result"] = $.not(L0["succeeded"]);
  if ($.truthy(L1["result"])) {
    L1["result"] = $.eq(L0["maxretrycount"], 0);
    if ($.truthy($.not(L1["result"]))) {
      L1["result"] = $.ne(L0["retrycounter"], 0);
      await $.stmt((await $.call(C, "dec", [$.ref(async () => L0["retrycounter"], async ($t3) => { L0["retrycounter"] = $t3; })])));
    }
  }
  return L1.result;
});
  L0["result"] = false;
  L0["retrycounter"] = L0["maxretrycount"];
  L0["succeeded"] = false;
  {
    const $t4 = (await $.v(C, "sboapiDataModule"));
    while ($.truthy((await $.wv([$t4], "CheckStopCondition", { get: async () => L0["checkstopcondition"], set: async (v) => { L0["checkstopcondition"] = v; }, local: true }, false)))) {
      try {
        await $.wset([$t4], "Result", (await $.wcall([$t4], "AskForLogon", [$.ref(async () => (await $.wv([$t4], "SBData", { get: async () => await L0["sbdata"].get(), set: async (v) => { await L0["sbdata"].set(v); }, local: true }, false)), async ($t6) => { await $.wset([$t4], "SBData", $t6, { get: async () => await L0["sbdata"].get(), set: async (v) => { await L0["sbdata"].set(v); }, local: true }); }), (await $.wv([$t4], "LogonOptions", { get: async () => L0["logonoptions"], set: async (v) => { L0["logonoptions"] = v; }, local: true }, false))], C)), { get: async () => L0["result"], set: async (v) => { L0["result"] = v; }, local: true });
        await $.wset([$t4], "Succeeded", (await $.wv([$t4], "True", C, false)), { get: async () => L0["succeeded"], set: async (v) => { L0["succeeded"] = v; }, local: true });
      } catch ($t5) {
        $.rethrowControl($t5);
        if ($.excIs($t5, "EOracleError")) {
          L0["e"] = $.exc($t5);
          await $.stmt((await $.wcall([$t4], "MessageDlg", [(await $.mv((await $.wv([$t4], "E", { get: async () => L0["e"], set: async (v) => { L0["e"] = v; }, local: true }, false)), "Message")), (await $.wv([$t4], "mtError", C, false)), [(await $.wv([$t4], "mbOk", C, false))], 0], C)));
        }
        else {
          throw $t5;
        }
      }
      await $.tick();
    }
  }
  return L0.result;
}, {"params": ["SBData", "LogonOptions", "MaxRetryCount"], "kind": "function", "ptypes": ["TSBOData", "TAskForLogonOptions", "Integer"]});
  U.func("Sb_Disconnect", async function Sb_Disconnect(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: undefined};
  {
    const $t7 = (await $.v(C, "sboapiDataModule"));
    await $.mcall((await $.wv([$t7], "SBSession", C, false)), "LogOff", []);
  }
  return L0.result;
}, {"params": [], "kind": "procedure", "ptypes": []});
  U.func("Sb_GetSBData", async function Sb_GetSBData(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sbdata": $.asRef(p0), result: undefined};
  await $.stmt((await $.mcall((await $.v(C, "sboapiDataModule")), "GetSBData", [$.ref(async () => (await L0["sbdata"].get()), async ($t8) => { await L0["sbdata"].set($t8); })])));
  return L0.result;
}, {"params": ["SBData"], "kind": "procedure", "ptypes": ["TSBOData"]});
  return U;
}
