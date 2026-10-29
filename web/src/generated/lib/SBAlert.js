// Generated from SBAlert.pas by pas2js — do not edit by hand; regenerate instead.
/* eslint-disable */
// @ts-nocheck

export default function define($) {
  const U = $.unit("SBAlert", ["sboapiDataModuleImpl"]);
  const C = [U];
  U.enumType("talertraisestatus", 2);
  U.const("arsRaised", 0);
  U.const("arsTimeout", 1);
  U.init(async () => {
    U.const("MAXWAIT", 86400000);
  });
  U.func("Sb_AlertRegister", async function Sb_AlertRegister(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"aname": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["aname"]);
  {
    const $t1 = (await $.mv((await $.mv((await $.v(C, "sboapiDataModule")), "SBSession")), "DBMS_Alert"));
    await $.stmt((await $.wcall([$t1], "Register", [(await $.wv([$t1], "AName", { get: async () => L0["aname"], set: async (v) => { L0["aname"] = v; }, local: true }, false))], C)));
  }
  return L0.result;
}, {"params": ["AName"], "kind": "procedure", "ptypes": ["String"]});
  U.func("DecodeAlertStatus", async function DecodeAlertStatus(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"statusint": $.copyArg(p0), "status": $.asRef(p1), result: undefined};
  await $.fixArgs(L0, ["statusint"]);
  if ($.truthy($.eq(L0["statusint"], 0))) {
    await L0["status"].set((await $.v(C, "arsRaised")));
  } else {
    await L0["status"].set((await $.v(C, "arsTimeout")));
  }
  return L0.result;
}, {"params": ["StatusInt", "Status"], "kind": "procedure", "ptypes": ["Integer", "TAlertRaiseStatus"]});
  U.func("Sb_AlertWaitOne", async function Sb_AlertWaitOne(Self, p0, p1, p2, p3) {
  const C = $.chain(Self, U);
  const L0 = {"aname": $.copyArg(p0), "message": $.asRef(p1), "status": $.asRef(p2), "timeout": (p3 === undefined ? (await $.v(C, "MAXWAIT")) : p3), result: undefined, "statusint": 0};
  await $.fixArgs(L0, ["aname", "timeout"]);
  {
    const $t2 = (await $.mv((await $.mv((await $.v(C, "sboapiDataModule")), "SBSession")), "DBMS_Alert"));
    await $.stmt((await $.wcall([$t2], "WaitOne", [(await $.wv([$t2], "AName", { get: async () => L0["aname"], set: async (v) => { L0["aname"] = v; }, local: true }, false)), (await $.wv([$t2], "Message", { get: async () => await L0["message"].get(), set: async (v) => { await L0["message"].set(v); }, local: true }, false)), (await $.wv([$t2], "StatusInt", { get: async () => L0["statusint"], set: async (v) => { L0["statusint"] = v; }, local: true }, false)), (await $.wv([$t2], "Timeout", { get: async () => L0["timeout"], set: async (v) => { L0["timeout"] = v; }, local: true }, false))], C)));
  }
  await $.stmt((await $.call(C, "DecodeAlertStatus", [L0["statusint"], $.ref(async () => (await L0["status"].get()), async ($t3) => { await L0["status"].set($t3); })])));
  return L0.result;
}, {"params": ["AName", "Message", "Status", "Timeout"], "kind": "procedure", "ptypes": ["String", "String", "TAlertRaiseStatus", "Integer"]});
  U.func("Sb_AlertSignal", async function Sb_AlertSignal(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"aname": $.copyArg(p0), "message": $.copyArg(p1), result: undefined};
  await $.fixArgs(L0, ["aname", "message"]);
  {
    const $t4 = (await $.mv((await $.mv((await $.v(C, "sboapiDataModule")), "SBSession")), "DBMS_Alert"));
    await $.stmt((await $.wcall([$t4], "Signal", [(await $.wv([$t4], "AName", { get: async () => L0["aname"], set: async (v) => { L0["aname"] = v; }, local: true }, false)), (await $.wv([$t4], "Message", { get: async () => L0["message"], set: async (v) => { L0["message"] = v; }, local: true }, false))], C)));
  }
  return L0.result;
}, {"params": ["AName", "Message"], "kind": "procedure", "ptypes": ["String", "String"]});
  U.func("Sb_AlertWaitAny", async function Sb_AlertWaitAny(Self, p0, p1, p2, p3) {
  const C = $.chain(Self, U);
  const L0 = {"aname": $.asRef(p0), "message": $.asRef(p1), "status": $.asRef(p2), "timeout": (p3 === undefined ? (await $.v(C, "MAXWAIT")) : p3), result: undefined, "statusint": 0};
  await $.fixArgs(L0, ["timeout"]);
  {
    const $t5 = (await $.mv((await $.mv((await $.v(C, "sboapiDataModule")), "SBSession")), "DBMS_Alert"));
    await $.stmt((await $.wcall([$t5], "WaitAny", [(await $.wv([$t5], "AName", { get: async () => await L0["aname"].get(), set: async (v) => { await L0["aname"].set(v); }, local: true }, false)), (await $.wv([$t5], "Message", { get: async () => await L0["message"].get(), set: async (v) => { await L0["message"].set(v); }, local: true }, false)), (await $.wv([$t5], "StatusInt", { get: async () => L0["statusint"], set: async (v) => { L0["statusint"] = v; }, local: true }, false)), (await $.wv([$t5], "Timeout", { get: async () => L0["timeout"], set: async (v) => { L0["timeout"] = v; }, local: true }, false))], C)));
  }
  await $.stmt((await $.call(C, "DecodeAlertStatus", [L0["statusint"], $.ref(async () => (await L0["status"].get()), async ($t6) => { await L0["status"].set($t6); })])));
  return L0.result;
}, {"params": ["AName", "Message", "Status", "Timeout"], "kind": "procedure", "ptypes": ["String", "String", "TAlertRaiseStatus", "Integer"]});
  U.func("Sb_AlertRemove", async function Sb_AlertRemove(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"aname": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["aname"]);
  {
    const $t7 = (await $.mv((await $.mv((await $.v(C, "sboapiDataModule")), "SBSession")), "DBMS_Alert"));
    await $.stmt((await $.wcall([$t7], "Remove", [(await $.wv([$t7], "AName", { get: async () => L0["aname"], set: async (v) => { L0["aname"] = v; }, local: true }, false))], C)));
  }
  return L0.result;
}, {"params": ["AName"], "kind": "procedure", "ptypes": ["String"]});
  U.func("Sb_AlterRemoveAll", async function Sb_AlterRemoveAll(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: undefined};
  {
    const $t8 = (await $.mv((await $.mv((await $.v(C, "sboapiDataModule")), "SBSession")), "DBMS_Alert"));
    await $.stmt($.wcall([$t8], "RemoveAll", [], C));
  }
  return L0.result;
}, {"params": [], "kind": "procedure", "ptypes": []});
  return U;
}
