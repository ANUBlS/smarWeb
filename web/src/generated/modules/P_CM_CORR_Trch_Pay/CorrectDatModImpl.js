// Generated from CorrectDatModImpl.pas by pas2js — do not edit by hand; regenerate instead.
/* eslint-disable */
// @ts-nocheck

export default function define($) {
  const U = $.unit("CorrectDatModImpl", ["Windows", "Messages", "SysUtils", "Classes", "Graphics", "Controls", "Forms", "Dialogs", "Db", "OracleData", "Oracle", "sboapiDataModuleImpl", "CommonDecls"]);
  const C = [U];
  U.defClass("TCorrectDatMod", "TDataModule", {"tranches": {"name": "Tranches", "type": "TOracleDataSet"}, "payments": {"name": "Payments", "type": "TOracleDataSet"}, "tranchesdatsrc": {"name": "TranchesDatSrc", "type": "TDataSource"}, "paymentsdatsrc": {"name": "PaymentsDatSrc", "type": "TDataSource"}, "cm_corr_trch_pay": {"name": "CM_CORR_TRCH_PAY", "type": "TOraclePackage"}, "paymentspaydate": {"name": "PaymentsPAYDATE", "type": "TDateTimeField"}, "paymentspayedamt": {"name": "PaymentsPAYEDAMT", "type": "TFloatField"}, "paymentspayedintamt": {"name": "PaymentsPAYEDINTAMT", "type": "TFloatField"}, "paymentspayeddueamt": {"name": "PaymentsPAYEDDUEAMT", "type": "TFloatField"}, "paymentspayeddueintamt": {"name": "PaymentsPAYEDDUEINTAMT", "type": "TFloatField"}, "tranchestranchedate": {"name": "TranchesTRANCHEDATE", "type": "TDateTimeField"}, "tranchestrancheamount": {"name": "TranchesTRANCHEAMOUNT", "type": "TFloatField"}, "paymentsid": {"name": "PaymentsID", "type": "TFloatField"}}, {});
  U.init(async () => {
    U.var_("CorrectDatMod", null, "TCorrectDatMod");
  });
  U.method("TCorrectDatMod", "TranchesApplyRecord", async function TranchesApplyRecord(Self, p0, p1, p2, p3) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "action": $.copyArg(p1), "applied": $.asRef(p2), "newrowid": $.asRef(p3), result: undefined, "p_crdid": 0, "p_tranchedate": 0, "p_trchamount": 0};
  await $.fixArgs(L0, ["sender", "action"]);
  {
    const $t1 = L0["sender"];
    await $.wset([$t1], "P_CrdID", (await $.wv([$t1], "Get_SelectedCrdID", C, false)), { get: async () => L0["p_crdid"], set: async (v) => { L0["p_crdid"] = v; }, local: true });
    await $.stmt((await $.wcall([$t1], "ShowMessage", [(await $.wcall([$t1], "InttoStr", [(await $.wv([$t1], "P_CrdID", { get: async () => L0["p_crdid"], set: async (v) => { L0["p_crdid"] = v; }, local: true }, false))], C))], C)));
    await $.wset([$t1], "P_TrchAmount", (await $.mv((await $.wcall([$t1], "FieldByName", ["trancheamount"], C)), "AsFloat")), { get: async () => L0["p_trchamount"], set: async (v) => { L0["p_trchamount"] = v; }, local: true });
    await $.wset([$t1], "P_TrancheDate", (await $.mv((await $.wcall([$t1], "FieldByName", ["TRANCHEDATE "], C)), "AsDateTime")), { get: async () => L0["p_tranchedate"], set: async (v) => { L0["p_tranchedate"] = v; }, local: true });
  }
  {
    const $t2 = (await $.wobj(C, "CM_CORR_TRCH_PAY"));
    { const $t3 = (await $.wv([$t2], "Action", { get: async () => L0["action"], set: async (v) => { L0["action"] = v; }, local: true }, false));
      if ($.eq($t3, "I")) {
        await $.stmt((await $.wcall([$t2], "CallProcedure", ["add_tranches", [(await $.wv([$t2], "P_CrdID", { get: async () => L0["p_crdid"], set: async (v) => { L0["p_crdid"] = v; }, local: true }, false)), (await $.wv([$t2], "P_TrancheDate", { get: async () => L0["p_tranchedate"], set: async (v) => { L0["p_tranchedate"] = v; }, local: true }, false)), (await $.wv([$t2], "P_TrchAmount", { get: async () => L0["p_trchamount"], set: async (v) => { L0["p_trchamount"] = v; }, local: true }, false))]], C)));
      }
      else if ($.eq($t3, "U")) {
        await $.stmt((await $.wcall([$t2], "CallProcedure", ["edit_tranches", [(await $.wv([$t2], "P_CrdID", { get: async () => L0["p_crdid"], set: async (v) => { L0["p_crdid"] = v; }, local: true }, false)), (await $.wv([$t2], "P_TrancheDate", { get: async () => L0["p_tranchedate"], set: async (v) => { L0["p_tranchedate"] = v; }, local: true }, false)), (await $.wv([$t2], "P_TrchAmount", { get: async () => L0["p_trchamount"], set: async (v) => { L0["p_trchamount"] = v; }, local: true }, false))]], C)));
      }
      else if ($.eq($t3, "D")) {
        await $.stmt((await $.wcall([$t2], "CallProcedure", ["del_tranches", [(await $.wv([$t2], "P_CrdID", { get: async () => L0["p_crdid"], set: async (v) => { L0["p_crdid"] = v; }, local: true }, false)), (await $.wv([$t2], "P_TrancheDate", { get: async () => L0["p_tranchedate"], set: async (v) => { L0["p_tranchedate"] = v; }, local: true }, false)), (await $.wv([$t2], "P_TrchAmount", { get: async () => L0["p_trchamount"], set: async (v) => { L0["p_trchamount"] = v; }, local: true }, false))]], C)));
      }
    }
    await $.wset([$t2], "Applied", (await $.wv([$t2], "True", C, false)), { get: async () => await L0["applied"].get(), set: async (v) => { await L0["applied"].set(v); }, local: true });
  }
  return L0.result;
}, {"params": ["Sender", "Action", "Applied", "NewRowId"], "kind": "procedure", "ptypes": ["TOracleDataSet", "Char", "Boolean", "String"]});
  U.method("TCorrectDatMod", "DataModuleCreate", async function DataModuleCreate(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mcall((await $.v(C, "Payments")), "open", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  return U;
}
