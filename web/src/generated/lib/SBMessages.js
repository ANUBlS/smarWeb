// Generated from SBMessages.pas by pas2js — do not edit by hand; regenerate instead.
/* eslint-disable */
// @ts-nocheck

export default function define($) {
  const U = $.unit("SBMessages", ["sboapiDataModuleImpl", "SBSrvIntf"]);
  const C = [U];
  U.init(async () => {
  });
  U.func("Sb_GetError", async function Sb_GetError(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"errorcode": $.copyArg(p0), "message": $.asRef(p1), result: false};
  await $.fixArgs(L0, ["errorcode"]);
  {
    const $t1 = (await $.mv((await $.v(C, "sboapiDataModule")), "SBMessage"));
    await $.wset([$t1], "Result", (await $.wcall([$t1], "CallBooleanFunction", [(await $.wv([$t1], "sPN_GetError", C, false)), ["ErrorCode", (await $.wv([$t1], "ErrorCode", { get: async () => L0["errorcode"], set: async (v) => { L0["errorcode"] = v; }, local: true }, false)), "Message", ""]], C)), { get: async () => L0["result"], set: async (v) => { L0["result"] = v; }, local: true });
    if ($.truthy((await $.wv([$t1], "Result", { get: async () => L0["result"], set: async (v) => { L0["result"] = v; }, local: true }, false)))) {
      await $.wset([$t1], "Message", (await $.wcall([$t1], "GetParameter", ["Message"], C)), { get: async () => await L0["message"].get(), set: async (v) => { await L0["message"].set(v); }, local: true });
    }
  }
  return L0.result;
}, {"params": ["ErrorCode", "Message"], "kind": "function", "ptypes": ["Integer", "String"]});
  U.func("Sb_GetMessage", async function Sb_GetMessage(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"messageid": $.copyArg(p0), result: ''};
  await $.fixArgs(L0, ["messageid"]);
  {
    const $t2 = (await $.mv((await $.v(C, "sboapiDataModule")), "SBMessage"));
    await $.stmt((await $.wcall([$t2], "CallStringFunction", [(await $.wv([$t2], "sPN_GetError", C, false)), ["MsgID", (await $.wv([$t2], "MessageID", { get: async () => L0["messageid"], set: async (v) => { L0["messageid"] = v; }, local: true }, false))]], C)));
  }
  return L0.result;
}, {"params": ["MessageID"], "kind": "function", "ptypes": ["Integer"]});
  U.func("Sb_GetMessage", async function Sb_GetMessage(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"messagename": $.copyArg(p0), result: ''};
  await $.fixArgs(L0, ["messagename"]);
  {
    const $t3 = (await $.mv((await $.v(C, "sboapiDataModule")), "SBMessage"));
    await $.stmt((await $.wcall([$t3], "CallStringFunction", [(await $.wv([$t3], "sPN_GetError", C, false)), ["MsgName", (await $.wv([$t3], "MessageName", { get: async () => L0["messagename"], set: async (v) => { L0["messagename"] = v; }, local: true }, false))]], C)));
  }
  return L0.result;
}, {"params": ["MessageName"], "kind": "function", "ptypes": ["String"]});
  return U;
}
