// Generated from SBAccount.pas by pas2js — do not edit by hand; regenerate instead.
/* eslint-disable */
// @ts-nocheck

export default function define($) {
  const U = $.unit("SBAccount", ["SBSecurity", "sboapiDataModuleImpl", "SBCore", "SBSrvIntf"]);
  const C = [U];
  U.const("aeBalance", 0);
  U.const("aeAccBalance", 1);
  U.const("aeDebitTurnover", 2);
  U.const("aeDebitLTurnover", 3);
  U.const("aeCreditTurnover", 4);
  U.const("aeCreditLTurnover", 5);
  $.defRecord("tsaccounts", {"acc1": () => 0, "acc2": () => 0, "acc3": () => 0, "acc4": () => 0, "accs": () => $.sarr()});
  $.defRecord("taccount", {"customerid": () => 0, "accno": () => '', "currencyid": () => 0, "name": () => '', "opendate": () => 0, "limit": () => 0, "closedate": () => 0, "saccs": () => $.rec("tsaccounts"), "filialid": () => 0, "reportsymbol": () => 0, "pairaccid": () => 0, "isinsider": () => false, "accflags": () => ''});
  U.init(async () => {
  });
  U.func("FlagExsist", async function FlagExsist(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"accid": $.copyArg(p0), "ch": $.copyArg(p1), result: false};
  await $.fixArgs(L0, ["accid", "ch"]);
  {
    const $t1 = (await $.mv((await $.v(C, "sboapiDataModule")), "SBUtil"));
    await $.wset([$t1], "Result", (await $.wcall([$t1], "CallBooleanFunction", [(await $.wv([$t1], "sPN_FlagExsist", C, false)), ["AccID", (await $.wv([$t1], "AccID", { get: async () => L0["accid"], set: async (v) => { L0["accid"] = v; }, local: true }, false)), "FlagChar", (await $.wv([$t1], "ch", { get: async () => L0["ch"], set: async (v) => { L0["ch"] = v; }, local: true }, false))]], C)), { get: async () => L0["result"], set: async (v) => { L0["result"] = v; }, local: true });
  }
  return L0.result;
}, {"params": ["AccID", "Ch"], "kind": "function", "ptypes": ["Integer", "Char"]});
  U.func("FlagExsist", async function FlagExsist(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"acctype": $.copyArg(p0), "ch": $.copyArg(p1), result: false};
  await $.fixArgs(L0, ["acctype", "ch"]);
  {
    const $t2 = (await $.mv((await $.v(C, "sboapiDataModule")), "SBUtil"));
    await $.wset([$t2], "Result", (await $.wcall([$t2], "CallBooleanFunction", [(await $.wv([$t2], "sPN_FlagExsist", C, false)), ["AccountType", (await $.wv([$t2], "AccType", { get: async () => L0["acctype"], set: async (v) => { L0["acctype"] = v; }, local: true }, false)), "FlagChar", (await $.wv([$t2], "ch", { get: async () => L0["ch"], set: async (v) => { L0["ch"] = v; }, local: true }, false))]], C)), { get: async () => L0["result"], set: async (v) => { L0["result"] = v; }, local: true });
  }
  return L0.result;
}, {"params": ["AccType", "Ch"], "kind": "function", "ptypes": ["String", "Char"]});
  U.func("Sb_AddAccount", async function Sb_AddAccount(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"accountinfo": $.copyArg(p0), result: 0};
  await $.fixArgs(L0, ["accountinfo"]);
  {
    const $t3 = (await $.mv((await $.v(C, "sboapiDataModule")), "SBOperationDay"));
    const $t4 = (await $.wv([$t3], "AccountInfo", { get: async () => L0["accountinfo"], set: async (v) => { L0["accountinfo"] = v; }, local: true }, false));
    await $.wset([$t3, $t4], "Result", (await $.wcall([$t3, $t4], "CallIntegerFunction", [(await $.wv([$t3, $t4], "sPN_AddAccount", C, false)), ["customerid", (await $.wv([$t3, $t4], "CustomerID", C, false)), "op_id", 0, "accno", (await $.wv([$t3, $t4], "AccNo", C, false)), "currencyid", (await $.wv([$t3, $t4], "CurrencyID", C, false)), "NAME", (await $.wv([$t3, $t4], "Name", C, false)), "open_dat", (await $.wv([$t3, $t4], "OpenDate", C, false)), "balcn", (await $.mv((await $.wv([$t3, $t4], "SAccs", C, false)), "Acc1")), "LIMIT", (await $.wv([$t3, $t4], "Limit", C, false)), "close_dat", (await $.wv([$t3, $t4], "NullDate", C, false)), "filial", (await $.wv([$t3, $t4], "FilialID", C, false)), "sim_otcet", (await $.wv([$t3, $t4], "ReportSymbol", C, false)), "pair_acc", (await $.wv([$t3, $t4], "PairAccID", C, false)), "bal_cn2", (await $.mv((await $.wv([$t3, $t4], "SAccs", C, false)), "Acc2")), "bal_cn3", (await $.mv((await $.wv([$t3, $t4], "SAccs", C, false)), "Acc3")), "bal_cn4", (await $.mv((await $.wv([$t3, $t4], "SAccs", C, false)), "Acc4")), "typeacc", (await $.wv([$t3, $t4], "AccFlags", C, false))]], C)), { get: async () => L0["result"], set: async (v) => { L0["result"] = v; }, local: true });
  }
  return L0.result;
}, {"params": ["AccountInfo"], "kind": "function", "ptypes": ["TAccount"]});
  U.func("Sb_EditAccount", async function Sb_EditAccount(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"accid": $.copyArg(p0), "accountinfo": $.copyArg(p1), result: undefined};
  await $.fixArgs(L0, ["accid", "accountinfo"]);
  {
    const $t5 = (await $.mv((await $.v(C, "sboapiDataModule")), "SBOperationDay"));
    const $t6 = (await $.wv([$t5], "AccountInfo", { get: async () => L0["accountinfo"], set: async (v) => { L0["accountinfo"] = v; }, local: true }, false));
    await $.stmt((await $.wcall([$t5, $t6], "CallProcedure", [(await $.wv([$t5, $t6], "sPN_UpdateAccount", C, false)), ["v_id", (await $.wv([$t5, $t6], "AccID", { get: async () => L0["accid"], set: async (v) => { L0["accid"] = v; }, local: true }, false)), "v_customerid", (await $.wv([$t5, $t6], "CustomerID", C, false)), "v_op_id", 0, "v_accno", (await $.wv([$t5, $t6], "AccNo", C, false)), "v_currencyid", (await $.wv([$t5, $t6], "CurrencyID", C, false)), "v_NAME", (await $.wv([$t5, $t6], "Name", C, false)), "v_open_dat", (await $.wv([$t5, $t6], "OpenDate", C, false)), "v_balcn", (await $.mv((await $.wv([$t5, $t6], "SAccs", C, false)), "Acc1")), "v_LIMIT", (await $.wv([$t5, $t6], "Limit", C, false)), "v_close_dat", (await $.wv([$t5, $t6], "NullDate", C, false)), "v_filial", (await $.wv([$t5, $t6], "FilialID", C, false)), "v_sim_otcet", (await $.wv([$t5, $t6], "ReportSymbol", C, false)), "v_pair_acc", (await $.wv([$t5, $t6], "PairAccID", C, false)), "v_bal_cn2", (await $.mv((await $.wv([$t5, $t6], "SAccs", C, false)), "Acc2")), "v_bal_cn3", (await $.mv((await $.wv([$t5, $t6], "SAccs", C, false)), "Acc3")), "v_bal_cn4", (await $.mv((await $.wv([$t5, $t6], "SAccs", C, false)), "Acc4")), "v_typeacc", (await $.wv([$t5, $t6], "AccFlags", C, false))]], C)));
  }
  return L0.result;
}, {"params": ["AccID", "AccountInfo"], "kind": "procedure", "ptypes": ["Integer", "TAccount"]});
  U.func("Sb_CloseAccount", async function Sb_CloseAccount(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"accid": $.copyArg(p0), "doclose": (p1 === undefined ? true : p1), result: undefined};
  await $.fixArgs(L0, ["accid", "doclose"]);
  {
    const $t7 = (await $.mv((await $.v(C, "sboapiDataModule")), "SBOperationDay"));
    await $.stmt((await $.wcall([$t7], "CallProcedure", [(await $.wv([$t7], "sPN_CloseAccount", C, false)), ["AccID", (await $.wv([$t7], "AccID", { get: async () => L0["accid"], set: async (v) => { L0["accid"] = v; }, local: true }, false)), "DoClose", (await $.wcall([$t7], "Integer", [(await $.wv([$t7], "DoClose", { get: async () => L0["doclose"], set: async (v) => { L0["doclose"] = v; }, local: true }, false))], C))]], C)));
  }
  return L0.result;
}, {"params": ["AccID", "DoClose"], "kind": "procedure", "ptypes": ["Integer", "Boolean"]});
  U.func("Sb_BuildAccountDefaultSecurity", async function Sb_BuildAccountDefaultSecurity(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"id": $.copyArg(p0), result: 0};
  await $.fixArgs(L0, ["id"]);
  L0["result"] = (await $.call(C, "Sb_CreateSecurityDescriptor", [(await $.v(C, "Sb_GetUserID")), (await $.v(C, "Sb_GetGroupID")), (await $.call(C, "Sb_GetTypeID", ["account"]))]));
  await $.stmt((await $.call(C, "Sb_BuildDefaultSecurity", [L0["result"]])));
  await $.stmt((await $.call(C, "Sb_SetAccSecurityDescriptor", [L0["id"], L0["result"]])));
  return L0.result;
}, {"params": ["ID"], "kind": "function", "ptypes": ["Integer"]});
  U.func("Sb_SetAccSecurityDescriptor", async function Sb_SetAccSecurityDescriptor(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"accid": $.copyArg(p0), "sid": $.copyArg(p1), result: undefined};
  await $.fixArgs(L0, ["accid", "sid"]);
  {
    const $t8 = (await $.mv((await $.v(C, "sboapiDataModule")), "SBOperationDay"));
    await $.stmt((await $.wcall([$t8], "CallProcedure", [(await $.wv([$t8], "sPN_SetAccSID", C, false)), ["acc_id", (await $.wv([$t8], "AccID", { get: async () => L0["accid"], set: async (v) => { L0["accid"] = v; }, local: true }, false)), "sid", (await $.wv([$t8], "Sid", { get: async () => L0["sid"], set: async (v) => { L0["sid"] = v; }, local: true }, false))]], C)));
  }
  return L0.result;
}, {"params": ["AccID", "Sid"], "kind": "procedure", "ptypes": ["Integer", "TSid"]});
  U.func("Sb_CheckAccBalance", async function Sb_CheckAccBalance(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"accid": $.copyArg(p0), "errors": $.asRef(p1), result: false, "ierrors": 0};
  await $.fixArgs(L0, ["accid"]);
  L0["ierrors"] = 0;
  {
    const $t9 = (await $.mv((await $.v(C, "sboapiDataModule")), "SBCorrection"));
    await $.wset([$t9], "Result", (await $.wcall([$t9], "CallBooleanFunction", [(await $.wv([$t9], "sPN_CheckAccBalance", C, false)), ["AccID", (await $.wv([$t9], "AccID", { get: async () => L0["accid"], set: async (v) => { L0["accid"] = v; }, local: true }, false)), "ErrorSet", (await $.wv([$t9], "IErrors", { get: async () => L0["ierrors"], set: async (v) => { L0["ierrors"] = v; }, local: true }, false))]], C)), { get: async () => L0["result"], set: async (v) => { L0["result"] = v; }, local: true });
  }
  await L0["errors"].set([]);
  return L0.result;
}, {"params": ["AccID", "Errors"], "kind": "function", "ptypes": ["Integer", "TErrorSet"]});
  U.func("Sb_CorrectAccBalance", async function Sb_CorrectAccBalance(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"accid": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["accid"]);
  {
    const $t10 = (await $.mv((await $.v(C, "sboapiDataModule")), "SBCorrection"));
    await $.stmt((await $.wcall([$t10], "CallProcedure", [(await $.wv([$t10], "sPN_CorrectAccBalance", C, false)), ["AccID", (await $.wv([$t10], "AccID", { get: async () => L0["accid"], set: async (v) => { L0["accid"] = v; }, local: true }, false))]], C)));
  }
  return L0.result;
}, {"params": ["AccID"], "kind": "procedure", "ptypes": ["Integer"]});
  return U;
}
