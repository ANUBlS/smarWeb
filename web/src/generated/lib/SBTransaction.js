// Generated from SBTransaction.pas by pas2js — do not edit by hand; regenerate instead.
/* eslint-disable */
// @ts-nocheck

export default function define($) {
  const U = $.unit("SBTransaction", ["SysUtils", "SBSrvIntf", "Variants", "sboapiDataModuleImpl", "SBCore", "Oracle"]);
  const C = [U];
  U.enumType("taddtransactionflag", 5);
  U.const("tfNoAdd", 0);
  U.const("tfNoAddChild", 1);
  U.const("tfNoControl", 2);
  U.const("tfCommitImmediate", 3);
  U.const("tfNoAddName", 4);
  U.enumType("tdeletetransactionflag", 2);
  U.const("dfNoControl", 0);
  U.const("dfNoChild", 1);
  U.enumType("ttransactionstatus", 3);
  U.const("tsDelayed", 0);
  U.const("tsCommited", 1);
  U.const("tsRejected", 2);
  $.defRecord("ttransaction", {"size": () => 0, "transactiondate": () => 0, "hdebit": () => 0, "hcredit": () => 0, "debitamount": () => 0, "creditamount": () => 0, "lamount": () => 0, "debitrate": () => 0, "creditrate": () => 0, "parentid": () => 0, "debitbankid": () => 0, "creditbankid": () => 0, "filialid": () => 0, "packagenumber": () => 0, "inbalancechar": () => 0, "outbalancechar": () => 0, "cyphercode": () => 0, "operationcode": () => 0, "transactionid": () => 0, "trname": () => '', "isroot": () => false, "archiveid": () => 0});
  $.defRecord("ttransactions", {"size": () => 0, "count": () => 0, "transactionarray": () => null});
  U.defClass("ETransactionException", "Exception", {}, {});
  U.defClass("ENotImplemented", "ETransactionException", {}, {});
  U.defClass("ENeedCurrencySetup", "ETransactionException", {}, {});
  U.defClass("ETransactionsLimitExceeded", "ETransactionException", {}, {});
  U.defClass("ENotEnoughtAmmount", "ETransactionException", {}, {});
  U.defClass("ETransactionNotFound", "ETransactionException", {}, {});
  U.init(async () => {
    U.const("MaxTransactionCount", 10);
    U.const("AddTransactionFlagMapping", [(await $.v(C, "satfNoAdd")), (await $.v(C, "satfNoAddChild")), (await $.v(C, "satfNoControl")), (await $.v(C, "satfCommitImmediate")), 0]);
    U.const("AddTransactionStdFlags", []);
    U.const("IntToTransactionStatusMapping", [(await $.v(C, "tsDelayed")), (await $.v(C, "tsCommited")), (await $.v(C, "tsRejected"))]);
  });
  U.func("SB_InitializeTransaction", async function SB_InitializeTransaction(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"transaction": $.asRef(p0), result: undefined};
  {
    const $t1 = (await L0["transaction"].get());
    await $.wset([$t1], "Size", (await $.wcall([$t1], "SizeOf", [(await $.wv([$t1], "TTransaction", C, false))], C)), C);
    await $.wset([$t1], "TransactionDate", (await $.wv([$t1], "Sb_GetSystemDate", C, false)), C);
    await $.wset([$t1], "DebitAmount", 0.0, C);
    await $.wset([$t1], "CreditAmount", 0.0, C);
    await $.wset([$t1], "LAmount", 0.0, C);
    await $.wset([$t1], "TransactionID", (-(1)), C);
    await $.wset([$t1], "ParentID", 0, C);
    await $.wset([$t1], "IsRoot", (await $.wv([$t1], "True", C, false)), C);
  }
  return L0.result;
}, {"params": ["Transaction"], "kind": "procedure", "ptypes": ["TTransaction"]});
  U.func("BuildAddTransactionFlags", async function BuildAddTransactionFlags(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"flags": $.copyArg(p0), result: 0, "flag": null};
  await $.fixArgs(L0, ["flags"]);
  L0["result"] = 0;
  { const $t2 = (await $.lowHigh("high", "TAddTransactionFlag", async () => L0["flag"]));
    L0["flag"] = (await $.lowHigh("low", "TAddTransactionFlag", async () => L0["flag"]));
    let $t3 = true;
    for (;;) {
      if (!$t3) { L0["flag"] = $.succ(L0["flag"], 1); }
      $t3 = false;
      if (!($.ord(L0["flag"]) <= $.ord($t2))) break;
      if ($.truthy($.in_(L0["flag"], L0["flags"]))) {
        L0["result"] = (await $.or_(L0["result"], async () => (await $.idx((await $.v(C, "AddTransactionFlagMapping")), [L0["flag"]]))));
      }
      await $.tick();
    }
  }
  return L0.result;
}, {"params": ["Flags"], "kind": "function", "ptypes": ["TAddTransactionFlags"]});
  U.func("SB_AddTransaction", async function SB_AddTransaction(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"transaction": $.asRef(p0), "flags": $.copyArg(p1), result: 0, "atransactionid": null};
  await $.fixArgs(L0, ["flags"]);
  try {
    {
      const $t5 = (await L0["transaction"].get());
      const $t6 = (await $.mv((await $.wv([$t5], "sboapiDataModule", C, false)), "SBTransaction"));
      if ($.truthy($.eq((await $.wv([$t5, $t6], "TransactionID", C, false)), (-(1))))) {
        await $.wset([$t5, $t6], "ATransactionID", (await $.wv([$t5, $t6], "Null", C, false)), { get: async () => L0["atransactionid"], set: async (v) => { L0["atransactionid"] = v; }, local: true });
      } else {
        await $.wset([$t5, $t6], "ATransactionID", (await $.wv([$t5, $t6], "TransactionID", C, false)), { get: async () => L0["atransactionid"], set: async (v) => { L0["atransactionid"] = v; }, local: true });
      }
      await $.wset([$t5, $t6], "Result", (await $.wcall([$t5, $t6], "CallIntegerFunction", [(await $.wv([$t5, $t6], "sPN_AddTransaction", C, false)), ["TransactionDate", (await $.wv([$t5, $t6], "TransactionDate", C, false)), "DebitID", (await $.wv([$t5, $t6], "hDebit", C, false)), "CreditID", (await $.wv([$t5, $t6], "hCredit", C, false)), "DebitAmount", (await $.wv([$t5, $t6], "DebitAmount", C, false)), "CreditAmount", (await $.wv([$t5, $t6], "CreditAmount", C, false)), "LAmount", (await $.wv([$t5, $t6], "LAmount", C, false)), "DebitRate", (await $.wv([$t5, $t6], "DebitRate", C, false)), "CreditRate", (await $.wv([$t5, $t6], "CreditRate", C, false)), "TrName", (await $.wv([$t5, $t6], "TrName", C, false)), "Flags", (await $.wcall([$t5, $t6], "Integer", [(await $.wcall([$t5, $t6], "BuildAddTransactionFlags", [(await $.wv([$t5, $t6], "Flags", { get: async () => L0["flags"], set: async (v) => { L0["flags"] = v; }, local: true }, false))], C))], C)), "InBalanceChar", (await $.wv([$t5, $t6], "InBalanceChar", C, false)), "OutBalanceChar", (await $.wv([$t5, $t6], "OutBalanceChar", C, false)), "TransactionID", (await $.wv([$t5, $t6], "ATransactionID", { get: async () => L0["atransactionid"], set: async (v) => { L0["atransactionid"] = v; }, local: true }, false))]], C)), { get: async () => L0["result"], set: async (v) => { L0["result"] = v; }, local: true });
    }
  } catch ($t4) {
    $.rethrowControl($t4);
    if ($.excIs($t4, "EOracleError")) {
      L0["e"] = $.exc($t4);
      await $.stmt((await $.call(C, "Sb_ProcessException", [L0["e"]])));
      throw $t4;
    }
    else { throw $t4; }
  }
  return L0.result;
}, {"params": ["Transaction", "Flags"], "kind": "function", "ptypes": ["TTransaction", "TAddTransactionFlags"]});
  U.func("Sb_CommitTransaction", async function Sb_CommitTransaction(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"id": $.copyArg(p0), "committemp": $.copyArg(p1), result: 0};
  await $.fixArgs(L0, ["id", "committemp"]);
  try {
    {
      const $t8 = (await $.mv((await $.v(C, "sboapiDataModule")), "SBTransaction"));
      await $.wset([$t8], "Result", (await $.wcall([$t8], "CallIntegerFunction", [(await $.wv([$t8], "sPN_TransactionCommit", C, false)), ["TransactionID", (await $.wv([$t8], "ID", { get: async () => L0["id"], set: async (v) => { L0["id"] = v; }, local: true }, false)), "CommitTemp", (await $.wv([$t8], "CommitTemp", { get: async () => L0["committemp"], set: async (v) => { L0["committemp"] = v; }, local: true }, false))]], C)), { get: async () => L0["result"], set: async (v) => { L0["result"] = v; }, local: true });
    }
  } catch ($t7) {
    $.rethrowControl($t7);
    if ($.excIs($t7, "EOracleError")) {
      L0["e"] = $.exc($t7);
      await $.stmt((await $.call(C, "Sb_ProcessException", [L0["e"]])));
      throw $t7;
    }
    else { throw $t7; }
  }
  return L0.result;
}, {"params": ["ID", "CommitTemp"], "kind": "function", "ptypes": ["Integer", "Boolean"]});
  U.func("Sb_CommitTransactions", async function Sb_CommitTransactions(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"ids": $.copyArg(p0), "committemp": $.copyArg(p1), result: 0};
  await $.fixArgs(L0, ["ids", "committemp"]);
  try {
    {
      const $t10 = (await $.mv((await $.v(C, "sboapiDataModule")), "SBTransaction"));
      await $.wset([$t10], "Result", (await $.wcall([$t10], "CallIntegerFunction", [(await $.wv([$t10], "sPN_TransactionCommit", C, false)), ["TrIDs", (await $.wv([$t10], "IDs", { get: async () => L0["ids"], set: async (v) => { L0["ids"] = v; }, local: true }, false)), "CommitTemp", (await $.wv([$t10], "CommitTemp", { get: async () => L0["committemp"], set: async (v) => { L0["committemp"] = v; }, local: true }, false))]], C)), { get: async () => L0["result"], set: async (v) => { L0["result"] = v; }, local: true });
    }
  } catch ($t9) {
    $.rethrowControl($t9);
    if ($.excIs($t9, "EOracleError")) {
      L0["e"] = $.exc($t9);
      await $.stmt((await $.call(C, "Sb_ProcessException", [L0["e"]])));
      throw $t9;
    }
    else { throw $t9; }
  }
  return L0.result;
}, {"params": ["IDs", "CommitTemp"], "kind": "function", "ptypes": ["String", "Boolean"]});
  U.func("Sb_CommitDelayedTransactions", async function Sb_CommitDelayedTransactions(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"ids": $.copyArg(p0), "committemp": $.copyArg(p1), result: 0};
  await $.fixArgs(L0, ["ids", "committemp"]);
  try {
    {
      const $t12 = (await $.mv((await $.v(C, "sboapiDataModule")), "SBTransaction"));
      await $.wset([$t12], "Result", (await $.wcall([$t12], "CallIntegerFunction", [(await $.wv([$t12], "sPN_TransactionsDelayedCommit", C, false)), ["OverloadIDsStr", (await $.wcall([$t12], "Sb_PackArray", [(await $.wv([$t12], "IDs", { get: async () => L0["ids"], set: async (v) => { L0["ids"] = v; }, local: true }, false))], C)), "CommitTemp", (await $.wv([$t12], "CommitTemp", { get: async () => L0["committemp"], set: async (v) => { L0["committemp"] = v; }, local: true }, false))]], C)), { get: async () => L0["result"], set: async (v) => { L0["result"] = v; }, local: true });
    }
  } catch ($t11) {
    $.rethrowControl($t11);
    if ($.excIs($t11, "EOracleError")) {
      L0["e"] = $.exc($t11);
      await $.stmt((await $.call(C, "Sb_ProcessException", [L0["e"]])));
      throw $t11;
    }
    else { throw $t11; }
  }
  return L0.result;
}, {"params": ["IDs", "CommitTemp"], "kind": "function", "ptypes": ["TConstArray", "Boolean"]});
  U.func("SB_CheckStdTransaction", async function SB_CheckStdTransaction(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"transaction": $.copyArg(p0), "flags": $.copyArg(p1), result: undefined};
  await $.fixArgs(L0, ["transaction", "flags"]);
  return L0.result;
}, {"params": ["Transaction", "Flags"], "kind": "procedure", "ptypes": ["TTransaction", "TAddTransactionFlags"]});
  U.func("SB_DeleteTransaction", async function SB_DeleteTransaction(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"id": $.copyArg(p0), "flags": $.copyArg(p1), result: undefined};
  await $.fixArgs(L0, ["id", "flags"]);
  try {
    {
      const $t14 = (await $.mv((await $.v(C, "sboapiDataModule")), "SBTransaction"));
      await $.stmt((await $.wcall([$t14], "CallProcedure", [(await $.wv([$t14], "sPN_DelTransaction", C, false)), ["TransactionID", (await $.wv([$t14], "ID", { get: async () => L0["id"], set: async (v) => { L0["id"] = v; }, local: true }, false))]], C)));
    }
  } catch ($t13) {
    $.rethrowControl($t13);
    if ($.excIs($t13, "EOracleError")) {
      L0["e"] = $.exc($t13);
      await $.stmt((await $.call(C, "Sb_ProcessException", [L0["e"]])));
      throw $t13;
    }
    else { throw $t13; }
  }
  return L0.result;
}, {"params": ["ID", "Flags"], "kind": "procedure", "ptypes": ["Integer", "TDeleteTransactionFlags"]});
  U.func("Sb_RejectTransaction", async function Sb_RejectTransaction(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"transactionid": $.copyArg(p0), "reason": $.copyArg(p1), result: undefined, "result": 0};
  await $.fixArgs(L0, ["transactionid", "reason"]);
  try {
    {
      const $t16 = (await $.mv((await $.v(C, "sboapiDataModule")), "SBTransaction"));
      await $.wset([$t16], "Result", (await $.wcall([$t16], "CallIntegerFunction", [(await $.wv([$t16], "sPN_RejectTransaction", C, false)), ["TransactionID", (await $.wv([$t16], "TransactionID", { get: async () => L0["transactionid"], set: async (v) => { L0["transactionid"] = v; }, local: true }, false)), "RejectReason", (await $.wv([$t16], "Reason", { get: async () => L0["reason"], set: async (v) => { L0["reason"] = v; }, local: true }, false))]], C)), { get: async () => L0["result"], set: async (v) => { L0["result"] = v; }, local: true });
    }
  } catch ($t15) {
    $.rethrowControl($t15);
    if ($.excIs($t15, "EOracleError")) {
      L0["e"] = $.exc($t15);
      await $.stmt((await $.call(C, "Sb_ProcessException", [L0["e"]])));
      throw $t15;
    }
    else { throw $t15; }
  }
  return L0.result;
}, {"params": ["TransactionID", "Reason"], "kind": "procedure", "ptypes": ["Integer", "String"]});
  U.func("Sb_GetTransactionStatus", async function Sb_GetTransactionStatus(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"transactionid": $.copyArg(p0), result: null};
  await $.fixArgs(L0, ["transactionid"]);
  try {
    {
      const $t18 = (await $.mv((await $.v(C, "sboapiDataModule")), "SBTransaction"));
      await $.wset([$t18], "Result", (await $.idx((await $.wv([$t18], "IntToTransactionStatusMapping", C, false)), [(await $.wcall([$t18], "Integer", [(await $.wcall([$t18], "CallIntegerFunction", [(await $.wv([$t18], "sPN_GetTransactionStatus", C, false)), ["TransactionID", (await $.wv([$t18], "TransactionID", { get: async () => L0["transactionid"], set: async (v) => { L0["transactionid"] = v; }, local: true }, false))]], C))], C))])), { get: async () => L0["result"], set: async (v) => { L0["result"] = v; }, local: true });
    }
  } catch ($t17) {
    $.rethrowControl($t17);
    if ($.excIs($t17, "EOracleError")) {
      L0["e"] = $.exc($t17);
      await $.stmt((await $.call(C, "Sb_ProcessException", [L0["e"]])));
      throw $t17;
    }
    else { throw $t17; }
  }
  return L0.result;
}, {"params": ["TransactionID"], "kind": "function", "ptypes": ["Integer"]});
  U.func("Sb_TransactionsTempDelete", async function Sb_TransactionsTempDelete(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"tempid": $.copyArg(p0), result: 0};
  await $.fixArgs(L0, ["tempid"]);
  try {
    {
      const $t20 = (await $.mv((await $.v(C, "sboapiDataModule")), "SBTransaction"));
      await $.wset([$t20], "Result", (await $.wcall([$t20], "CallIntegerFunction", [(await $.wv([$t20], "sPN_TransactionsTempDelete", C, false)), ["ATempID", (await $.wv([$t20], "TempID", { get: async () => L0["tempid"], set: async (v) => { L0["tempid"] = v; }, local: true }, false))]], C)), { get: async () => L0["result"], set: async (v) => { L0["result"] = v; }, local: true });
    }
  } catch ($t19) {
    $.rethrowControl($t19);
    if ($.excIs($t19, "EOracleError")) {
      L0["e"] = $.exc($t19);
      await $.stmt((await $.call(C, "Sb_ProcessException", [L0["e"]])));
      throw $t19;
    }
    else { throw $t19; }
  }
  return L0.result;
}, {"params": ["TempID"], "kind": "function", "ptypes": ["Integer"]});
  U.func("Sb_TransactionsTempCommit", async function Sb_TransactionsTempCommit(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"tempid": $.copyArg(p0), result: 0};
  await $.fixArgs(L0, ["tempid"]);
  try {
    {
      const $t22 = (await $.mv((await $.v(C, "sboapiDataModule")), "SBTransaction"));
      await $.wset([$t22], "Result", (await $.wcall([$t22], "CallIntegerFunction", [(await $.wv([$t22], "sPN_TransactionsTempCommit", C, false)), ["ATempID", (await $.wv([$t22], "TempID", { get: async () => L0["tempid"], set: async (v) => { L0["tempid"] = v; }, local: true }, false))]], C)), { get: async () => L0["result"], set: async (v) => { L0["result"] = v; }, local: true });
    }
  } catch ($t21) {
    $.rethrowControl($t21);
    if ($.excIs($t21, "EOracleError")) {
      L0["e"] = $.exc($t21);
      await $.stmt((await $.call(C, "Sb_ProcessException", [L0["e"]])));
      throw $t21;
    }
    else { throw $t21; }
  }
  return L0.result;
}, {"params": ["TempID"], "kind": "function", "ptypes": ["Integer"]});
  U.func("Sb_GenTempID", async function Sb_GenTempID(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: 0};
  try {
    {
      const $t24 = (await $.mv((await $.v(C, "sboapiDataModule")), "SBOperationDay"));
      await $.wset([$t24], "Result", (await $.wcall([$t24], "CallIntegerFunction", [(await $.wv([$t24], "sPN_GenTempID", C, false)), []], C)), { get: async () => L0["result"], set: async (v) => { L0["result"] = v; }, local: true });
    }
  } catch ($t23) {
    $.rethrowControl($t23);
    if ($.excIs($t23, "EOracleError")) {
      L0["e"] = $.exc($t23);
      await $.stmt((await $.call(C, "Sb_ProcessException", [L0["e"]])));
      throw $t23;
    }
    else { throw $t23; }
  }
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.func("Sb_AddTempTransaction", async function Sb_AddTempTransaction(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"tempid": $.copyArg(p0), "transaction": $.copyArg(p1), result: undefined};
  await $.fixArgs(L0, ["tempid", "transaction"]);
  return L0.result;
}, {"params": ["TempID", "Transaction"], "kind": "procedure", "ptypes": ["Integer", "TTransaction"]});
  U.func("Sb_ApplyTempTransaction", async function Sb_ApplyTempTransaction(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"temptrid": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["temptrid"]);
  return L0.result;
}, {"params": ["TempTrID"], "kind": "procedure", "ptypes": ["Integer"]});
  return U;
}
