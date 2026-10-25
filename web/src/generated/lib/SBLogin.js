// Generated from SBLogin.pas by pas2js — do not edit by hand; regenerate instead.
/* eslint-disable */
// @ts-nocheck

export default function define($) {
  const U = $.unit("SBLogin", ["sboapiDataModuleImpl", "SBSrvIntf"]);
  const C = [U];
  U.init(async () => {
  });
  U.func("Sb_GetSessionID", async function Sb_GetSessionID(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: 0};
  {
    const $t1 = (await $.mv((await $.v(C, "sboapiDataModule")), "SBLogin"));
    await $.wset([$t1], "Result", (await $.wcall([$t1], "CallIntegerFunction", [(await $.wv([$t1], "sPN_GetSessionID", C, false)), []], C)), { get: async () => L0["result"], set: async (v) => { L0["result"] = v; }, local: true });
  }
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.func("Sb_GetLoginUserID", async function Sb_GetLoginUserID(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: 0};
  {
    const $t2 = (await $.mv((await $.v(C, "sboapiDataModule")), "SBLogin"));
    await $.wset([$t2], "Result", (await $.wcall([$t2], "CallIntegerFunction", [(await $.wv([$t2], "sPN_GetLoginUserID", C, false)), []], C)), { get: async () => L0["result"], set: async (v) => { L0["result"] = v; }, local: true });
  }
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  return U;
}
