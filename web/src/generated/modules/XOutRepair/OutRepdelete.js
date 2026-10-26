// Generated from OutRepdelete.pas by pas2js — do not edit by hand; regenerate instead.
/* eslint-disable */
// @ts-nocheck

export default function define($) {
  const U = $.unit("OutRepdelete", ["Windows", "Messages", "SysUtils", "Classes", "Graphics", "Controls", "Forms", "Dialogs", "ComCtrls", "StdCtrls", "ExtCtrls", "RepairNewDataModule", "RepairNewEdit", "Out_RepairImpl1"]);
  const C = [U];
  U.defClass("TOutRep_delete", "TForm", {"groupbox1": {"name": "GroupBox1", "type": "TGroupBox"}, "bevel1": {"name": "Bevel1", "type": "TBevel"}, "chrate": {"name": "chRate", "type": "TCheckBox"}, "chprofit": {"name": "chProfit", "type": "TCheckBox"}, "statictext1": {"name": "StaticText1", "type": "TStaticText"}, "panel2": {"name": "Panel2", "type": "TPanel"}, "button1": {"name": "Button1", "type": "TButton"}, "button2": {"name": "Button2", "type": "TButton"}, "delanim": {"name": "DelAnim", "type": "TAnimate"}}, {});
  U.init(async () => {
    U.var_("OutRep_delete", null, "TOutRep_delete");
  });
  U.func("ShowDeleteConfirm", async function ShowDeleteConfirm(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: false, "delform": null};
  await $.fixArgs(L0, ["value"]);
  L0["delform"] = (await $.mcall((await $.v(C, "TOutRep_delete")), "Create", [(await $.v(C, "Application"))]));
  await $.set(C, "OutRep_delete", L0["delform"]);
  {
    const $t1 = L0["delform"];
    try {
      await $.stmt($.wcall([$t1], "ShowModal", [], C));
      if ($.truthy($.eq((await $.wv([$t1], "ModalResult", C, false)), (await $.wv([$t1], "mrOk", C, false))))) {
        await $.wset([$t1], "Result", (await $.wv([$t1], "True", C, false)), { get: async () => L0["result"], set: async (v) => { L0["result"] = v; }, local: true });
      } else {
        await $.wset([$t1], "Result", (await $.wv([$t1], "False", C, false)), { get: async () => L0["result"], set: async (v) => { L0["result"] = v; }, local: true });
      }
    } finally {
      await $.stmt($.wcall([$t1], "Release", [], C));
      await $.wset([$t1], "OutRep_delete", null, C);
    }
  }
  return L0.result;
}, {"params": ["Value"], "kind": "function", "ptypes": ["String"]});
  U.method("TOutRep_delete", "Button1Click", async function Button1Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  L0["showavi"] = $.fn(async function ShowAvi(p0) {
  const L1 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L1, ["value"]);
  try {
    await $.mset((await $.v(C, "DelAnim")), "Active", L1["value"]);
    await $.mset((await $.v(C, "DelAnim")), "Visible", L1["value"]);
  } catch ($t2) {
    $.rethrowControl($t2);
    $.handled($t2);
    await $.mcall((await $.v(C, "DelAnim")), "Destroy", []);
  }
  return L1.result;
});
  {
    const $t3 = (await $.v(C, "Out_RepairFrm"));
    await $.stmt((await $.wcall([$t3], "ShowAvi", [(await $.wv([$t3], "True", C, false))], { get: async () => L0["showavi"], set: async (v) => { L0["showavi"] = v; }, local: true })));
    await $.stmt($.wcall([$t3], "DeleteTrans", [], C));
    await $.stmt((await $.wcall([$t3], "ShowAvi", [(await $.wv([$t3], "False", C, false))], { get: async () => L0["showavi"], set: async (v) => { L0["showavi"] = v; }, local: true })));
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.func("DeleteTrans", async function DeleteTrans(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: undefined, "temptrans": $.rec("ttransaction"), "rec": 0};
  L0["preparetransaction"] = $.fn(async function PrepareTransaction() {
  const L1 = {result: $.rec("ttransaction"), "acttransaction": $.rec("ttransaction")};
  {
    const $t4 = (await $.v(C, "OutRep_delete"));
    const $t5 = (await $.mv((await $.wv([$t4], "RepDataModule", C, false)), "TransactionData"));
    const $t6 = (await $.wv([$t4, $t5], "ActTransaction", { get: async () => L1["acttransaction"], set: async (v) => { L1["acttransaction"] = v; }, local: true }, false));
    await $.wset([$t4, $t5, $t6], "Action", (await $.wv([$t4, $t5, $t6], "acDelete", C, false)), C);
    if ($.truthy($.not(((await $.mv((await $.wv([$t4, $t5, $t6], "chRate", C, false)), "Checked")))))) {
      await $.wset([$t4, $t5, $t6], "Mode", 2, C);
    } else {
      if ($.truthy((await $.mv((await $.wv([$t4, $t5, $t6], "chProfit", C, false)), "Checked")))) {
        await $.wset([$t4, $t5, $t6], "Mode", 0, C);
      } else {
        await $.wset([$t4, $t5, $t6], "Mode", 1, C);
      }
    }
    await $.wset([$t4, $t5, $t6], "Id", (await $.mv((await $.wcall([$t4, $t5, $t6], "FieldByName", ["ID"], C)), "AsInteger")), C);
    await $.wset([$t4, $t5, $t6], "Date", (await $.mv((await $.wcall([$t4, $t5, $t6], "FieldByName", ["Transactiondate"], C)), "AsDateTime")), C);
    await $.wset([$t4, $t5, $t6], "DebitId", (await $.mv((await $.wcall([$t4, $t5, $t6], "FieldByName", ["DebitID"], C)), "AsInteger")), C);
    await $.wset([$t4, $t5, $t6], "CreditId", (await $.mv((await $.wcall([$t4, $t5, $t6], "FieldByName", ["CreditID"], C)), "AsInteger")), C);
    await $.wset([$t4, $t5, $t6], "DebitRate", (await $.mv((await $.wcall([$t4, $t5, $t6], "FieldByName", ["DebitRate"], C)), "AsCurrency")), C);
    await $.wset([$t4, $t5, $t6], "CreditRate", (await $.mv((await $.wcall([$t4, $t5, $t6], "FieldByName", ["CreditRate"], C)), "AsCurrency")), C);
    await $.wset([$t4, $t5, $t6], "DebitAmmount", (await $.mv((await $.wcall([$t4, $t5, $t6], "FieldByName", ["DebitAmount"], C)), "AsCurrency")), C);
    await $.wset([$t4, $t5, $t6], "CreditAmmount", (await $.mv((await $.wcall([$t4, $t5, $t6], "FieldByName", ["CreditAmount"], C)), "AsCurrency")), C);
    await $.wset([$t4, $t5, $t6], "LAmmount", (await $.mv((await $.wcall([$t4, $t5, $t6], "FieldByName", ["LAmount"], C)), "AsCurrency")), C);
    await $.wset([$t4, $t5, $t6], "Name", (await $.mv((await $.wcall([$t4, $t5, $t6], "FieldByName", ["Name"], C)), "AsString")), C);
    await $.wset([$t4, $t5, $t6], "DebitCurId", (await $.mv((await $.wcall([$t4, $t5, $t6], "FieldByName", ["DebitCurrencyID"], C)), "AsInteger")), C);
    await $.wset([$t4, $t5, $t6], "CreditCurId", (await $.mv((await $.wcall([$t4, $t5, $t6], "FieldByName", ["CreditCurrencyID"], C)), "AsInteger")), C);
    await $.wset([$t4, $t5, $t6], "InBalanceChar", (await $.mv((await $.wcall([$t4, $t5, $t6], "FieldByName", ["InBalanceChar"], C)), "AsInteger")), C);
    await $.wset([$t4, $t5, $t6], "OutBalanceChar", (await $.mv((await $.wcall([$t4, $t5, $t6], "FieldByName", ["OutBalanceChar"], C)), "AsInteger")), C);
    await $.wset([$t4, $t5, $t6], "Result", (await $.wv([$t4, $t5, $t6], "ActTransaction", { get: async () => L1["acttransaction"], set: async (v) => { L1["acttransaction"] = v; }, local: true }, false)), { get: async () => L1["result"], set: async (v) => { L1["result"] = v; }, local: true });
  }
  return L1.result;
});
  {
    const $t7 = (await $.v(C, "RepDataModule"));
    const $t8 = (await $.wv([$t7], "TransactionData", C, false));
    await $.wset([$t7, $t8], "Rec", (await $.wv([$t7, $t8], "RecNo", C, false)), { get: async () => L0["rec"], set: async (v) => { L0["rec"] = v; }, local: true });
    try {
      await $.stmt($.wcall([$t7, $t8], "DisableControls", [], C));
      await $.wset([$t7, $t8], "TempTrans", (await $.wv([$t7, $t8], "PrepareTransaction", { get: async () => L0["preparetransaction"], set: async (v) => { L0["preparetransaction"] = v; }, local: true }, false)), { get: async () => L0["temptrans"], set: async (v) => { L0["temptrans"] = v; }, local: true });
      await $.stmt((await $.wcall([$t7, $t8], "SaveTransaction", [(await $.wv([$t7, $t8], "TempTrans", { get: async () => L0["temptrans"], set: async (v) => { L0["temptrans"] = v; }, local: true }, false))], C)));
      await $.stmt($.wcall([$t7, $t8], "Refresh", [], C));
      await $.stmt($.wcall([$t7, $t8], "Last", [], C));
      if ($.truthy($.gt((await $.wv([$t7, $t8], "Rec", { get: async () => L0["rec"], set: async (v) => { L0["rec"] = v; }, local: true }, false)), (await $.wv([$t7, $t8], "RecordCount", C, false))))) {
        await $.stmt($.wcall([$t7, $t8], "Last", [], C));
      } else {
        await $.wset([$t7, $t8], "RecNo", (await $.wv([$t7, $t8], "Rec", { get: async () => L0["rec"], set: async (v) => { L0["rec"] = v; }, local: true }, false)), C);
      }
    } finally {
      await $.stmt($.wcall([$t7, $t8], "EnableControls", [], C));
    }
  }
  return L0.result;
}, {"params": [], "kind": "procedure", "ptypes": []});
  return U;
}
