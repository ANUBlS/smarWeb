// Generated from SBSettings.pas by pas2js — do not edit by hand; regenerate instead.
/* eslint-disable */
// @ts-nocheck

export default function define($) {
  const U = $.unit("SBSettings", ["SBSrvIntf", "sboapiDataModuleImpl"]);
  const C = [U];
  U.init(async () => {
  });
  U.func("Sb_GetOption", async function Sb_GetOption(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"optionname": $.copyArg(p0), result: null};
  await $.fixArgs(L0, ["optionname"]);
  {
    const $t1 = (await $.mv((await $.v(C, "sboapiDataModule")), "SBSettings"));
    await $.wset([$t1], "Result", (await $.wcall([$t1], "CallStringFunction", [(await $.wv([$t1], "sPN_GetOption", C, false)), [(await $.wv([$t1], "OptionName", { get: async () => L0["optionname"], set: async (v) => { L0["optionname"] = v; }, local: true }, false))]], C)), { get: async () => L0["result"], set: async (v) => { L0["result"] = v; }, local: true });
  }
  return L0.result;
}, {"params": ["OptionName"], "kind": "function", "ptypes": ["String"]});
  return U;
}
