// Generated from SendImpl.pas by pas2js — do not edit by hand; regenerate instead.
/* eslint-disable */
// @ts-nocheck

export default function define($) {
  const U = $.unit("SendImpl", ["Windows", "Messages", "SysUtils", "Variants", "Classes", "Graphics", "Controls", "Forms", "Dialogs", "DBGridEh", "StdCtrls", "Buttons", "Mask", "DBCtrlsEh", "DBLookupEh", "CurrencyEdit", "ComCtrls", "FlReCalculationDataModuleImpl", "ReCalculationMainForm", "newProgressimpl"]);
  const C = [U];
  U.defClass("TFrmSend", "TForm", {"label1": {"name": "Label1", "type": "TLabel"}, "dblookupcomboboxeh2": {"name": "DBLookupComboboxEh2", "type": "TDBLookupComboboxEh"}, "bitbtn1": {"name": "BitBtn1", "type": "TBitBtn"}, "bitbtn2": {"name": "BitBtn2", "type": "TBitBtn"}}, {});
  U.init(async () => {
    U.var_("FrmSend", null, "TFrmSend");
  });
  U.method("TFrmSend", "ExcuseMeUser", async function ExcuseMeUser(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"question": $.copyArg(p0), result: false};
  await $.fixArgs(L0, ["question"]);
  L0["result"] = $.eq((await $.call(C, "MessageDlg", [L0["question"], (await $.v(C, "mtConfirmation")), [(await $.v(C, "mbYes")), (await $.v(C, "mbNo"))], 0])), (await $.v(C, "mrYes")));
  return L0.result;
}, {"params": ["Question"], "kind": "function", "ptypes": ["String"]});
  U.method("TFrmSend", "PrepareProgress", async function PrepareProgress(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"progcnt": $.copyArg(p0), "opdesc": $.copyArg(p1), result: undefined};
  await $.fixArgs(L0, ["progcnt", "opdesc"]);
  {
    const $t1 = (await $.wobj(C, "NewProgressForm"));
    const $t2 = (await $.wv([$t1], "ProgressShower", C, false));
    await $.wset([$t1, $t2], "Position", 0, C);
    await $.wset([$t1, $t2], "Max", (await $.wv([$t1, $t2], "ProgCnt", { get: async () => L0["progcnt"], set: async (v) => { L0["progcnt"] = v; }, local: true }, false)), C);
    await $.wset([$t1, $t2], "Step", 1, C);
    await $.wset([$t1, $t2], "Caption", (await $.wv([$t1, $t2], "opDesc", { get: async () => L0["opdesc"], set: async (v) => { L0["opdesc"] = v; }, local: true }, false)), C);
  }
  await $.mcall((await $.v(C, "NewProgressForm")), "Show", []);
  return L0.result;
}, {"params": ["ProgCnt", "opDesc"], "kind": "procedure", "ptypes": ["Integer", "String"]});
  U.method("TFrmSend", "BitBtn1Click", async function BitBtn1Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "i": 0, "selectedrowscnt": 0, "crdid": 0, "crdno": '', "crdstatus": 0};
  await $.fixArgs(L0, ["sender"]);
  L0["rsconfirmforone"] = "%s  - № li kredit dosyesi %s. Əminsiniz?";
  L0["rsconfirmforall"] = "%d - sayda kredit dosyesi %s. Əminsiniz?";
  L0["rscalcpercent"] = "göndəriləcək";
  L0["rsalreadycalced"] = "%s - № li kredit üçün hələ hesablanmayıb və ya  təstiq olunub !";
  L0["rsprogresscaption"] = "                        Faizlər təstiq olunur . gözləyin.   .....";
  if ($.truthy($.eq((await $.mv((await $.v(C, "DBLookupComboboxEh2")), "text")), ""))) {
    await $.stmt((await $.call(C, "ShowMessage", ["Qovluğu gondərəcəyiniz yeri seçin!"])));
    return L0.result;
  }
  {
    const $t3 = (await $.mv((await $.v(C, "PRMainForm")), "CalcGrid"));
    const $t4 = (await $.mv((await $.wv([$t3], "DataSource", C, false)), "DataSet"));
    await $.wset([$t3, $t4], "SelectedRowsCnt", (await $.mv((await $.wv([$t3, $t4], "SelectedRows", C, false)), "Count")), { get: async () => L0["selectedrowscnt"], set: async (v) => { L0["selectedrowscnt"] = v; }, local: true });
    if ($.truthy($.gt((await $.wv([$t3, $t4], "SelectedRowsCnt", { get: async () => L0["selectedrowscnt"], set: async (v) => { L0["selectedrowscnt"] = v; }, local: true }, false)), 1))) {
      if ($.truthy($.not((await $.wcall([$t3, $t4], "ExcuseMeUser", [(await $.wcall([$t3, $t4], "Format", [(await $.wv([$t3, $t4], "rsConfirmForAll", { get: async () => L0["rsconfirmforall"], set: async (v) => { L0["rsconfirmforall"] = v; }, local: true }, false)), [(await $.wv([$t3, $t4], "SelectedRowsCnt", { get: async () => L0["selectedrowscnt"], set: async (v) => { L0["selectedrowscnt"] = v; }, local: true }, false)), (await $.wv([$t3, $t4], "rsCalcPercent", { get: async () => L0["rscalcpercent"], set: async (v) => { L0["rscalcpercent"] = v; }, local: true }, false))]], C))], C))))) {
        return L0.result;
      }
      await $.mcall(Self, "Update", []);
      { const $t5 = $.sub((await $.wv([$t3, $t4], "SelectedRowsCnt", { get: async () => L0["selectedrowscnt"], set: async (v) => { L0["selectedrowscnt"] = v; }, local: true }, false)), 1);
        await $.wset([$t3, $t4], "I", 0, { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true });
        let $t6 = true;
        for (;;) {
          if (!$t6) { await $.wset([$t3, $t4], "I", $.succ((await $.wv([$t3, $t4], "I", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false)), 1), { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }); }
          $t6 = false;
          if (!($.ord((await $.wv([$t3, $t4], "I", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false))) <= $.ord($t5))) break;
          await $.stmt((await $.wcall([$t3, $t4], "GotoBookmark", [(await $.wcall([$t3, $t4], "Pointer", [(await $.idx((await $.wv([$t3, $t4], "SelectedRows", C, false)), [(await $.wv([$t3, $t4], "I", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false))]))], C))], C)));
          await $.wset([$t3, $t4], "CrdID", (await $.mv((await $.wcall([$t3, $t4], "FieldByName", ["ID"], C)), "AsInteger")), { get: async () => L0["crdid"], set: async (v) => { L0["crdid"] = v; }, local: true });
          await $.wset([$t3, $t4], "CrdStatus", (await $.mv((await $.wcall([$t3, $t4], "FieldByName", ["TrProcessed"], C)), "AsInteger")), { get: async () => L0["crdstatus"], set: async (v) => { L0["crdstatus"] = v; }, local: true });
          {
            const $t7 = (await $.mv((await $.wv([$t3, $t4], "PRDataModule", C, false)), "CalculatorPackage"));
            await $.stmt((await $.wcall([$t3, $t4, $t7], "CallProcedure", ["add_folder", ["p_id", (await $.wv([$t3, $t4, $t7], "CrdID", { get: async () => L0["crdid"], set: async (v) => { L0["crdid"] = v; }, local: true }, false)), "p_qovidsender", (await $.mv((await $.wcall([$t3, $t4, $t7], "FieldByName", ["qovid"], C)), "AsInteger")), "p_qovidreciver", (await $.mv((await $.wv([$t3, $t4, $t7], "DBLookupComboboxEh2", C, false)), "KeyValue"))]], C)));
          }
          await $.tick();
        }
      }
    } else {
      await $.wset([$t3, $t4], "CrdNo", (await $.mv((await $.wcall([$t3, $t4], "FieldByName", ["NumberOfCredit"], C)), "AsString")), { get: async () => L0["crdno"], set: async (v) => { L0["crdno"] = v; }, local: true });
      if ($.truthy($.not((await $.wcall([$t3, $t4], "ExcuseMeUser", [(await $.wcall([$t3, $t4], "Format", [(await $.wv([$t3, $t4], "rsConfirmForOne", { get: async () => L0["rsconfirmforone"], set: async (v) => { L0["rsconfirmforone"] = v; }, local: true }, false)), [(await $.wv([$t3, $t4], "CrdNo", { get: async () => L0["crdno"], set: async (v) => { L0["crdno"] = v; }, local: true }, false)), (await $.wv([$t3, $t4], "rsCalcPercent", { get: async () => L0["rscalcpercent"], set: async (v) => { L0["rscalcpercent"] = v; }, local: true }, false))]], C))], C))))) {
        return L0.result;
      }
      await $.wset([$t3, $t4], "CrdID", (await $.mv((await $.wcall([$t3, $t4], "FieldByName", ["ID"], C)), "AsInteger")), { get: async () => L0["crdid"], set: async (v) => { L0["crdid"] = v; }, local: true });
      await $.wset([$t3, $t4], "CrdStatus", (await $.mv((await $.wcall([$t3, $t4], "FieldByName", ["TrProcessed"], C)), "AsInteger")), { get: async () => L0["crdstatus"], set: async (v) => { L0["crdstatus"] = v; }, local: true });
      {
        const $t8 = (await $.mv((await $.wv([$t3, $t4], "PRDataModule", C, false)), "CalculatorPackage"));
        await $.stmt((await $.wcall([$t3, $t4, $t8], "CallProcedure", ["add_folder", ["p_id", (await $.wv([$t3, $t4, $t8], "CrdID", { get: async () => L0["crdid"], set: async (v) => { L0["crdid"] = v; }, local: true }, false)), "p_qovidsender", (await $.mv((await $.wcall([$t3, $t4, $t8], "FieldByName", ["qovid"], C)), "AsInteger")), "p_qovidreciver", (await $.mv((await $.wv([$t3, $t4, $t8], "DBLookupComboboxEh2", C, false)), "KeyValue"))]], C)));
      }
    }
  }
  await $.mcall((await $.mv((await $.mv((await $.mv((await $.v(C, "PRMainForm")), "CalcGrid")), "DataSource")), "DataSet")), "Refresh", []);
  await $.stmt($.call(C, "close", []));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFrmSend", "BitBtn2Click", async function BitBtn2Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.stmt($.call(C, "close", []));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  return U;
}
