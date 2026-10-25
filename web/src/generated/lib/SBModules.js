// Generated from SBModules.pas by pas2js — do not edit by hand; regenerate instead.
/* eslint-disable */
// @ts-nocheck

export default function define($) {
  const U = $.unit("SBModules", ["sboapiDataModule"]);
  const C = [U];
  U.init(async () => {
  });
  U.func("Sb_CheckModuleAccess", async function Sb_CheckModuleAccess(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"module": $.copyArg(p0), "accessarr": $.copyArg(p1), result: false};
  await $.fixArgs(L0, ["module", "accessarr"]);
  return L0.result;
}, {"params": ["Module", "AccessArr"], "kind": "function", "ptypes": ["String", null]});
  return U;
}
