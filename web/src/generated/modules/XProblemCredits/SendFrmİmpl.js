// Generated from SendFrmİmpl.pas by pas2js — do not edit by hand; regenerate instead.
/* eslint-disable */
// @ts-nocheck

export default function define($) {
  const U = $.unit("SendFrmİmpl", ["Windows", "Messages", "SysUtils", "Variants", "Classes", "Graphics", "Controls", "Forms", "Dialogs", "DBGridEh", "StdCtrls", "Buttons", "Mask", "DBCtrlsEh", "DBLookupEh", "DB", "PrCmDMImpl", "ProblemCreditManagers"]);
  const C = [U];
  U.defClass("TSendFrm", "TForm", {"label1": {"name": "Label1", "type": "TLabel"}, "dblookupcomboboxeh2": {"name": "DBLookupComboboxEh2", "type": "TDBLookupComboboxEh"}, "bitbtn1": {"name": "BitBtn1", "type": "TBitBtn"}, "bitbtn2": {"name": "BitBtn2", "type": "TBitBtn"}}, {});
  U.init(async () => {
    U.var_("SendFrm", null, "TSendFrm");
  });
  U.method("TSendFrm", "ExcuseMeUser", async function ExcuseMeUser(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"question": $.copyArg(p0), result: false};
  await $.fixArgs(L0, ["question"]);
  L0["result"] = $.eq((await $.call(C, "MessageDlg", [L0["question"], (await $.v(C, "mtConfirmation")), [(await $.v(C, "mbYes")), (await $.v(C, "mbNo"))], 0])), (await $.v(C, "mrYes")));
  return L0.result;
}, {"params": ["Question"], "kind": "function", "ptypes": ["String"]});
  U.method("TSendFrm", "BitBtn1Click", async function BitBtn1Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "i": 0, "id": 0, "trcount": 0, "commitedcount": 0, "ids": ''};
  await $.fixArgs(L0, ["sender"]);
  L0["rsconfirmforone"] = "%s  - № li kredit  %s. Əminsiniz?";
  L0["rsconfirmforall"] = "%d - sayda kredit dosyesi %s. Əminsiniz?";
  L0["rscalcpercent"] = "göndəriləcək";
  L0["cs_commitinformation"] = $.add($.add("Ümumi əməliyyatlar: %d", "\r"), "Göndərildi");
  L0["ids"] = "";
  L0["trcount"] = 0;
  if ($.truthy($.eq((await $.mv((await $.v(C, "DBLookupComboboxEh2")), "text")), ""))) {
    await $.stmt((await $.call(C, "ShowMessage", ["Gondərəcəyiniz yeri seçin!"])));
    return L0.result;
  }
  {
    const $t1 = (await $.mv((await $.mv((await $.v(C, "ProblemCreditMgr")), "MainGrid")), "SelectedRows"));
    const $t2 = (await $.wv([$t1], "PrCmDM", C, false));
    const $t3 = (await $.wv([$t1, $t2], "IntCache", C, false));
    if ($.truthy($.eq((await $.wv([$t1, $t2, $t3], "Count", C, false)), 0))) {
      await $.wset([$t1, $t2, $t3], "IDs", (await $.mv((await $.wcall([$t1, $t2, $t3], "FieldByName", ["ID"], C)), "AsString")), { get: async () => L0["ids"], set: async (v) => { L0["ids"] = v; }, local: true });
    } else {
      await $.stmt($.wcall([$t1, $t2, $t3], "DisableControls", [], C));
      try {
        { const $t4 = $.sub((await $.wv([$t1, $t2, $t3], "Count", C, false)), 1);
          await $.wset([$t1, $t2, $t3], "i", 0, { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true });
          let $t5 = true;
          for (;;) {
            if (!$t5) { await $.wset([$t1, $t2, $t3], "i", $.succ((await $.wv([$t1, $t2, $t3], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false)), 1), { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }); }
            $t5 = false;
            if (!($.ord((await $.wv([$t1, $t2, $t3], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false))) <= $.ord($t4))) break;
            await $.stmt((await $.wcall([$t1, $t2, $t3], "inc", [$.ref(async () => (await $.wv([$t1, $t2, $t3], "TrCount", { get: async () => L0["trcount"], set: async (v) => { L0["trcount"] = v; }, local: true }, false)), async ($t6) => { await $.wset([$t1, $t2, $t3], "TrCount", $t6, { get: async () => L0["trcount"], set: async (v) => { L0["trcount"] = v; }, local: true }); })], C)));
            await $.stmt((await $.wcall([$t1, $t2, $t3], "GotoBookmark", [(await $.wcall([$t1, $t2, $t3], "TBookmark", [(await $.idx((await $.wv([$t1, $t2, $t3], "Items", C, false)), [(await $.wv([$t1, $t2, $t3], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false))]))], C))], C)));
            await $.wset([$t1, $t2, $t3], "IDs", $.add($.add((await $.wv([$t1, $t2, $t3], "IDs", { get: async () => L0["ids"], set: async (v) => { L0["ids"] = v; }, local: true }, false)), ","), (await $.mv((await $.wcall([$t1, $t2, $t3], "FieldByName", ["ID"], C)), "AsString"))), { get: async () => L0["ids"], set: async (v) => { L0["ids"] = v; }, local: true });
            await $.tick();
          }
        }
        await $.stmt((await $.mcall((await $.wv([$t1, $t2, $t3], "System", C, false)), "Delete", [$.ref(async () => (await $.wv([$t1, $t2, $t3], "IDs", { get: async () => L0["ids"], set: async (v) => { L0["ids"] = v; }, local: true }, false)), async ($t7) => { await $.wset([$t1, $t2, $t3], "IDs", $t7, { get: async () => L0["ids"], set: async (v) => { L0["ids"] = v; }, local: true }); }), 1, 1])));
      } finally {
        await $.stmt($.wcall([$t1, $t2, $t3], "EnableControls", [], C));
      }
    }
    if ($.truthy($.not((await $.wcall([$t1, $t2, $t3], "ExcuseMeUser", [(await $.wcall([$t1, $t2, $t3], "Format", [(await $.wv([$t1, $t2, $t3], "rsConfirmForAll", { get: async () => L0["rsconfirmforall"], set: async (v) => { L0["rsconfirmforall"] = v; }, local: true }, false)), [(await $.wv([$t1, $t2, $t3], "TrCount", { get: async () => L0["trcount"], set: async (v) => { L0["trcount"] = v; }, local: true }, false)), (await $.wv([$t1, $t2, $t3], "rsCalcPercent", { get: async () => L0["rscalcpercent"], set: async (v) => { L0["rscalcpercent"] = v; }, local: true }, false))]], C))], C))))) {
      return L0.result;
    }
    {
      const $t8 = (await $.mv((await $.wv([$t1, $t2, $t3], "PrCmDM", C, false)), "PrPackage"));
      await $.stmt((await $.wcall([$t1, $t2, $t3, $t8], "CallProcedure", ["add_folder", ["p_id", (await $.wv([$t1, $t2, $t3, $t8], "IDs", { get: async () => L0["ids"], set: async (v) => { L0["ids"] = v; }, local: true }, false)), "p_qovidsender", (await $.mv((await $.wcall([$t1, $t2, $t3, $t8], "FieldByName", ["qovid"], C)), "AsInteger")), "p_qovidreciver", (await $.mv((await $.wv([$t1, $t2, $t3, $t8], "DBLookupComboboxEh2", C, false)), "KeyValue"))]], C)));
    }
    await $.stmt((await $.wcall([$t1, $t2, $t3], "ExcuseMeUser", [(await $.wcall([$t1, $t2, $t3], "Format", [(await $.wv([$t1, $t2, $t3], "cs_CommitInformation", { get: async () => L0["cs_commitinformation"], set: async (v) => { L0["cs_commitinformation"] = v; }, local: true }, false)), [(await $.wv([$t1, $t2, $t3], "CommitedCount", { get: async () => L0["commitedcount"], set: async (v) => { L0["commitedcount"] = v; }, local: true }, false))]], C))], C)));
    await $.stmt($.wcall([$t1, $t2, $t3], "Refresh", [], C));
    await $.stmt((await $.wcall([$t1, $t2, $t3], "Locate", ["id", (await $.wv([$t1, $t2, $t3], "id", { get: async () => L0["id"], set: async (v) => { L0["id"] = v; }, local: true }, false)), []], C)));
  }
  await $.mcall((await $.v(C, "SendFrm")), "Close", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TSendFrm", "FormCanResize", async function FormCanResize(Self, p0, p1, p2, p3) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "newwidth": $.asRef(p1), "newheight": $.asRef(p2), "resize": $.asRef(p3), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await L0["resize"].set(false);
  return L0.result;
}, {"params": ["Sender", "NewWidth", "NewHeight", "Resize"], "kind": "procedure", "ptypes": ["TObject", "Integer", "Integer", "Boolean"]});
  return U;
}
