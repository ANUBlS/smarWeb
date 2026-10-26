// Generated from SystemState.pas by pas2js — do not edit by hand; regenerate instead.
/* eslint-disable */
// @ts-nocheck

export default function define($) {
  const U = $.unit("SystemState", ["CMOracleAPIDataModuleImpl"]);
  const C = [U];
  U.init(async () => {
  });
  U.func("Get_CurrentDate", async function Get_CurrentDate(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: 0};
  L0["result"] = (await $.mv((await $.v(C, "CMDataModule")), "CurrentDate"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.func("Get_PrevDate", async function Get_PrevDate(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: 0};
  L0["result"] = (await $.mv((await $.v(C, "CMDataModule")), "PrevDate"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.func("Get_BranchID", async function Get_BranchID(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: 0};
  L0["result"] = (await $.mv((await $.v(C, "CMDataModule")), "BranchID"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  return U;
}
