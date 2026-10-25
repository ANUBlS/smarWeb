// Generated from SBSessionMgr.pas by pas2js — do not edit by hand; regenerate instead.
/* eslint-disable */
// @ts-nocheck

export default function define($) {
  const U = $.unit("SBSessionMgr", ["sboapiDataModuleImpl", "SBSrvIntf", "Oracle", "SBCore", "Variants"]);
  const C = [U];
  U.init(async () => {
  });
  U.func("Sb_KillSession", async function Sb_KillSession(Self, p0, p1, p2, p3, p4) {
  const C = $.chain(Self, U);
  const L0 = {"sessionid": $.copyArg(p0), "serial": $.copyArg(p1), "message": (p2 === undefined ? "" : p2), "usertimeout": (p3 === undefined ? 0 : p3), "sleeptimeout": (p4 === undefined ? (-(1)) : p4), result: undefined, "asleeptimeout": null};
  await $.fixArgs(L0, ["sessionid", "serial", "message", "usertimeout", "sleeptimeout"]);
  if ($.truthy($.eq(L0["sleeptimeout"], (-(1))))) {
    L0["asleeptimeout"] = (await $.v(C, "Null"));
  } else {
    L0["asleeptimeout"] = L0["sleeptimeout"];
  }
  try {
    {
      const $t2 = (await $.mv((await $.v(C, "sboapiDataModule")), "SBSessionMgr"));
      await $.stmt((await $.wcall([$t2], "CallProcedure", [(await $.wv([$t2], "sPN_KillSession", C, false)), [(await $.wv([$t2], "SessionID", { get: async () => L0["sessionid"], set: async (v) => { L0["sessionid"] = v; }, local: true }, false)), (await $.wv([$t2], "Serial", { get: async () => L0["serial"], set: async (v) => { L0["serial"] = v; }, local: true }, false)), (await $.wv([$t2], "Message", { get: async () => L0["message"], set: async (v) => { L0["message"] = v; }, local: true }, false)), (await $.wv([$t2], "UserTimeout", { get: async () => L0["usertimeout"], set: async (v) => { L0["usertimeout"] = v; }, local: true }, false)), (await $.wv([$t2], "ASleepTimeout", { get: async () => L0["asleeptimeout"], set: async (v) => { L0["asleeptimeout"] = v; }, local: true }, false))]], C)));
    }
  } catch ($t1) {
    $.rethrowControl($t1);
    if ($.excIs($t1, "EOracleError")) {
      L0["e"] = $.exc($t1);
      await $.stmt((await $.call(C, "Sb_ProcessException", [L0["e"]])));
    }
    else { throw $t1; }
  }
  return L0.result;
}, {"params": ["SessionID", "Serial", "Message", "UserTimeout", "SleepTimeout"], "kind": "procedure", "ptypes": ["String", "String", "String", "Single", "Single"]});
  U.func("Sb_KillAll", async function Sb_KillAll(Self, p0, p1, p2) {
  const C = $.chain(Self, U);
  const L0 = {"usernamemask": $.copyArg(p0), "message": $.copyArg(p1), "timeout": $.copyArg(p2), result: undefined};
  await $.fixArgs(L0, ["usernamemask", "message", "timeout"]);
  try {
    {
      const $t4 = (await $.mv((await $.v(C, "sboapiDataModule")), "SBSessionMgr"));
      await $.stmt((await $.wcall([$t4], "CallProcedure", [(await $.wv([$t4], "sPN_KillAll", C, false)), [(await $.wv([$t4], "UserNameMask", { get: async () => L0["usernamemask"], set: async (v) => { L0["usernamemask"] = v; }, local: true }, false)), (await $.wv([$t4], "Message", { get: async () => L0["message"], set: async (v) => { L0["message"] = v; }, local: true }, false)), (await $.wv([$t4], "Timeout", { get: async () => L0["timeout"], set: async (v) => { L0["timeout"] = v; }, local: true }, false))]], C)));
    }
  } catch ($t3) {
    $.rethrowControl($t3);
    if ($.excIs($t3, "EOracleError")) {
      L0["e"] = $.exc($t3);
      await $.stmt((await $.call(C, "Sb_ProcessException", [L0["e"]])));
    }
    else { throw $t3; }
  }
  return L0.result;
}, {"params": ["UserNameMask", "Message", "Timeout"], "kind": "procedure", "ptypes": ["String", "String", "Single"]});
  U.func("Sb_SendMessage", async function Sb_SendMessage(Self, p0, p1, p2) {
  const C = $.chain(Self, U);
  const L0 = {"sessionid": $.copyArg(p0), "message": $.copyArg(p1), "messagename": (p2 === undefined ? "" : p2), result: undefined, "amessagename": null};
  await $.fixArgs(L0, ["sessionid", "message", "messagename"]);
  if ($.truthy($.eq(L0["messagename"], ""))) {
    L0["amessagename"] = (await $.v(C, "Null"));
  } else {
    L0["amessagename"] = L0["messagename"];
  }
  {
    const $t5 = (await $.mv((await $.v(C, "sboapiDataModule")), "SBSessionMgr"));
    await $.stmt((await $.wcall([$t5], "CallProcedure", [(await $.wv([$t5], "sPN_SendMessage", C, false)), [(await $.wv([$t5], "SessionID", { get: async () => L0["sessionid"], set: async (v) => { L0["sessionid"] = v; }, local: true }, false)), (await $.wv([$t5], "Message", { get: async () => L0["message"], set: async (v) => { L0["message"] = v; }, local: true }, false)), (await $.wv([$t5], "AMessageName", { get: async () => L0["amessagename"], set: async (v) => { L0["amessagename"] = v; }, local: true }, false))]], C)));
  }
  return L0.result;
}, {"params": ["SessionID", "Message", "MessageName"], "kind": "procedure", "ptypes": ["String", "String", "String"]});
  return U;
}
