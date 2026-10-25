// Generated from SBUtils.pas by pas2js — do not edit by hand; regenerate instead.
/* eslint-disable */
// @ts-nocheck

export default function define($) {
  const U = $.unit("SBUtils", ["Bde", "sboapiDataModuleImpl"]);
  const C = [U];
  U.init(async () => {
  });
  U.func("SB_GetDatabaseHandle", async function SB_GetDatabaseHandle(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: null};
  L0["result"] = (await $.mv((await $.mv((await $.v(C, "sboapiDataModule")), "Database")), "Handle"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  return U;
}
