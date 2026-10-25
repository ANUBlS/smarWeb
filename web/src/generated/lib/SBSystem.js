// Generated from SBSystem.pas by pas2js — do not edit by hand; regenerate instead.
/* eslint-disable */
// @ts-nocheck

export default function define($) {
  const U = $.unit("SBSystem", ["SBTransaction", "sboapiDataModuleImpl", "SBSrvIntf"]);
  const C = [U];
  U.init(async () => {
  });
  U.func("Sb_CloseDay", async function Sb_CloseDay(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"newdate": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["newdate"]);
  L0["newdate"] = (await $.call(C, "Trunc", [L0["newdate"]]));
  {
    const $t1 = (await $.mv((await $.v(C, "sboapiDataModule")), "SBSystem"));
    await $.stmt((await $.wcall([$t1], "CallProcedure", [(await $.wv([$t1], "sPN_CloseDay", C, false)), ["NewDate", (await $.wv([$t1], "NewDate", { get: async () => L0["newdate"], set: async (v) => { L0["newdate"] = v; }, local: true }, false))]], C)));
  }
  return L0.result;
}, {"params": ["NewDate"], "kind": "procedure", "ptypes": ["TDateTime"]});
  U.func("Sb_IsDayOpened", async function Sb_IsDayOpened(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: false};
  {
    const $t2 = (await $.mv((await $.v(C, "sboapiDataModule")), "SBSystem"));
    await $.wset([$t2], "Result", (await $.wcall([$t2], "CallBooleanFunction", [(await $.wv([$t2], "sPN_IsDayOpened", C, false)), []], C)), { get: async () => L0["result"], set: async (v) => { L0["result"] = v; }, local: true });
  }
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.func("Sb_CommitNewRates", async function Sb_CommitNewRates(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: undefined};
  {
    const $t3 = (await $.mv((await $.v(C, "sboapiDataModule")), "SBRateManagement"));
    await $.stmt((await $.wcall([$t3], "CallProcedure", [(await $.wv([$t3], "sPN_CommitNewRates", C, false)), []], C)));
  }
  return L0.result;
}, {"params": [], "kind": "procedure", "ptypes": []});
  U.func("Sb_OpenDay", async function Sb_OpenDay(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: undefined};
  {
    const $t4 = (await $.mv((await $.v(C, "sboapiDataModule")), "SBSystem"));
    await $.stmt((await $.wcall([$t4], "CallProcedure", [(await $.wv([$t4], "sPN_OpenDay", C, false)), []], C)));
  }
  return L0.result;
}, {"params": [], "kind": "procedure", "ptypes": []});
  U.func("Sb_ChangeRates", async function Sb_ChangeRates(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: undefined};
  return L0.result;
}, {"params": [], "kind": "procedure", "ptypes": []});
  U.func("Sb_CalculateRateDifference", async function Sb_CalculateRateDifference(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: 0};
  {
    const $t5 = (await $.mv((await $.v(C, "sboapiDataModule")), "SBRateManagement"));
    await $.wset([$t5], "Result", (await $.wcall([$t5], "CallIntegerFunction", [(await $.wv([$t5], "sPN_CalculateRateDifference", C, false)), []], C)), { get: async () => L0["result"], set: async (v) => { L0["result"] = v; }, local: true });
  }
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.func("Sb_CloseDayProfits", async function Sb_CloseDayProfits(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: 0};
  {
    const $t6 = (await $.mv((await $.v(C, "sboapiDataModule")), "SBSystem"));
    await $.wset([$t6], "Result", (await $.wcall([$t6], "CallIntegerFunction", [(await $.wv([$t6], "sPN_CloseDayProfits", C, false)), []], C)), { get: async () => L0["result"], set: async (v) => { L0["result"] = v; }, local: true });
  }
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.func("Sb_CorrectLAmount", async function Sb_CorrectLAmount(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: undefined};
  {
    const $t7 = (await $.mv((await $.v(C, "sboapiDataModule")), "SBRateManagement"));
    await $.stmt((await $.wcall([$t7], "CallProcedure", [(await $.wv([$t7], "sPN_CorrectLAmount", C, false)), []], C)));
  }
  return L0.result;
}, {"params": [], "kind": "procedure", "ptypes": []});
  U.func("Get_CurrentDate", async function Get_CurrentDate(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: 0};
  await $.mcall((await $.mv((await $.v(C, "sboapiDataModule")), "DSBankDate")), "Open", []);
  L0["result"] = (await $.mv((await $.mcall((await $.mv((await $.v(C, "sboapiDataModule")), "DSBankDate")), "fieldbyname", ["TEK_DAT"])), "asdatetime"));
  await $.mcall((await $.mv((await $.v(C, "sboapiDataModule")), "DSBankDate")), "close", []);
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.func("Get_PrevDate", async function Get_PrevDate(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: 0};
  await $.mcall((await $.mv((await $.v(C, "sboapiDataModule")), "DSBankDate")), "Open", []);
  L0["result"] = (await $.mv((await $.mcall((await $.mv((await $.v(C, "sboapiDataModule")), "DSBankDate")), "fieldbyname", ["PRED_DAT"])), "asdatetime"));
  await $.mcall((await $.mv((await $.v(C, "sboapiDataModule")), "DSBankDate")), "close", []);
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.func("Get_BranchID", async function Get_BranchID(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: 0};
  L0["result"] = (await $.mv((await $.mcall((await $.mv((await $.v(C, "sboapiDataModule")), "Branch")), "fieldbyname", ["KOD_FIL"])), "asinteger"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  return U;
}
