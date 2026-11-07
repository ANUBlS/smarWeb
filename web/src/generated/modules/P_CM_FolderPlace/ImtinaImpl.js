// Generated from ImtinaImpl.pas by pas2js — do not edit by hand; regenerate instead.
/* eslint-disable */
// @ts-nocheck

export default function define($) {
  const U = $.unit("ImtinaImpl", ["Windows", "Messages", "SysUtils", "Variants", "Classes", "Graphics", "Controls", "Forms", "Dialogs", "StdCtrls", "FlReCalculationDataModuleImpl", "ReCalculationMainForm", "FrmReciverImpl"]);
  const C = [U];
  U.defClass("TImtinaFrm", "TForm", {"groupbox1": {"name": "GroupBox1", "type": "TGroupBox"}, "button1": {"name": "Button1", "type": "TButton"}, "button2": {"name": "Button2", "type": "TButton"}, "memo1": {"name": "Memo1", "type": "TMemo"}}, {});
  U.init(async () => {
    U.var_("ImtinaFrm", null, "TImtinaFrm");
  });
  U.method("TImtinaFrm", "Button2Click", async function Button2Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.stmt($.call(C, "close", []));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TImtinaFrm", "ExcuseMeUser", async function ExcuseMeUser(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"question": $.copyArg(p0), result: false};
  await $.fixArgs(L0, ["question"]);
  L0["result"] = $.eq((await $.call(C, "MessageDlg", [L0["question"], (await $.v(C, "mtConfirmation")), [(await $.v(C, "mbYes")), (await $.v(C, "mbNo"))], 0])), (await $.v(C, "mrYes")));
  return L0.result;
}, {"params": ["Question"], "kind": "function", "ptypes": ["String"]});
  U.method("TImtinaFrm", "Button1Click", async function Button1Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "i": 0, "selectedrowscnt": 0, "crdid": 0, "crdno": '', "crdstatus": 0};
  await $.fixArgs(L0, ["sender"]);
  L0["rsconfirmforone"] = "%s  - № li kredit dosyesi %s. Əminsiniz?";
  L0["rsconfirmforall"] = "%d - sayda kredit dosyesi %s. Əminsiniz?";
  L0["rscalcpercent"] = "imtina olunacaq";
  L0["rsalreadycalced"] = "%s - № li kredit üçün hələ hesablanmayıb və ya  təstiq olunub !";
  L0["rsprogresscaption"] = "                        Faizlər təstiq olunur . gözləyin.   .....";
  if ($.truthy($.eq((await $.mv((await $.v(C, "memo1")), "Text")), ""))) {
    await $.stmt((await $.call(C, "ShowMessage", ["İmtina səbəbini daxil etməmisiz!"])));
    return L0.result;
  }
  {
    const $t1 = (await $.mv((await $.v(C, "FrmReciver")), "DBGridEh1"));
    const $t2 = (await $.mv((await $.wv([$t1], "DataSource", C, false)), "DataSet"));
    await $.wset([$t1, $t2], "SelectedRowsCnt", (await $.mv((await $.wv([$t1, $t2], "SelectedRows", C, false)), "Count")), { get: async () => L0["selectedrowscnt"], set: async (v) => { L0["selectedrowscnt"] = v; }, local: true });
    if ($.truthy($.gt((await $.wv([$t1, $t2], "SelectedRowsCnt", { get: async () => L0["selectedrowscnt"], set: async (v) => { L0["selectedrowscnt"] = v; }, local: true }, false)), 1))) {
      if ($.truthy($.not((await $.wcall([$t1, $t2], "ExcuseMeUser", [(await $.wcall([$t1, $t2], "Format", [(await $.wv([$t1, $t2], "rsConfirmForAll", { get: async () => L0["rsconfirmforall"], set: async (v) => { L0["rsconfirmforall"] = v; }, local: true }, false)), [(await $.wv([$t1, $t2], "SelectedRowsCnt", { get: async () => L0["selectedrowscnt"], set: async (v) => { L0["selectedrowscnt"] = v; }, local: true }, false)), (await $.wv([$t1, $t2], "rsCalcPercent", { get: async () => L0["rscalcpercent"], set: async (v) => { L0["rscalcpercent"] = v; }, local: true }, false))]], C))], C))))) {
        return L0.result;
      }
      await $.mcall(Self, "Update", []);
      { const $t3 = $.sub((await $.wv([$t1, $t2], "SelectedRowsCnt", { get: async () => L0["selectedrowscnt"], set: async (v) => { L0["selectedrowscnt"] = v; }, local: true }, false)), 1);
        await $.wset([$t1, $t2], "I", 0, { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true });
        let $t4 = true;
        for (;;) {
          if (!$t4) { await $.wset([$t1, $t2], "I", $.succ((await $.wv([$t1, $t2], "I", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false)), 1), { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }); }
          $t4 = false;
          if (!($.ord((await $.wv([$t1, $t2], "I", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false))) <= $.ord($t3))) break;
          await $.stmt((await $.wcall([$t1, $t2], "GotoBookmark", [(await $.wcall([$t1, $t2], "Pointer", [(await $.idx((await $.wv([$t1, $t2], "SelectedRows", C, false)), [(await $.wv([$t1, $t2], "I", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false))]))], C))], C)));
          await $.wset([$t1, $t2], "CrdID", (await $.mv((await $.wcall([$t1, $t2], "FieldByName", ["ID"], C)), "AsInteger")), { get: async () => L0["crdid"], set: async (v) => { L0["crdid"] = v; }, local: true });
          {
            const $t5 = (await $.mv((await $.wv([$t1, $t2], "PRDataModule", C, false)), "CalculatorPackage"));
            await $.stmt((await $.wcall([$t1, $t2, $t5], "CallProcedure", ["decline_folder", ["p_id", (await $.wv([$t1, $t2, $t5], "CrdID", { get: async () => L0["crdid"], set: async (v) => { L0["crdid"] = v; }, local: true }, false)), "p_creditid", (await $.mv((await $.wcall([$t1, $t2, $t5], "FieldByName", ["creditid"], C)), "AsInteger")), "p_qovidreciver", (await $.mv((await $.wcall([$t1, $t2, $t5], "FieldByName", ["senderid"], C)), "AsInteger")), "p_info", (await $.mv((await $.wv([$t1, $t2, $t5], "Memo1", C, false)), "Text"))]], C)));
          }
          await $.tick();
        }
      }
    } else {
      await $.wset([$t1, $t2], "CrdNo", (await $.mv((await $.wcall([$t1, $t2], "FieldByName", ["NumberOfCredit"], C)), "AsString")), { get: async () => L0["crdno"], set: async (v) => { L0["crdno"] = v; }, local: true });
      if ($.truthy($.not((await $.wcall([$t1, $t2], "ExcuseMeUser", [(await $.wcall([$t1, $t2], "Format", [(await $.wv([$t1, $t2], "rsConfirmForOne", { get: async () => L0["rsconfirmforone"], set: async (v) => { L0["rsconfirmforone"] = v; }, local: true }, false)), [(await $.wv([$t1, $t2], "CrdNo", { get: async () => L0["crdno"], set: async (v) => { L0["crdno"] = v; }, local: true }, false)), (await $.wv([$t1, $t2], "rsCalcPercent", { get: async () => L0["rscalcpercent"], set: async (v) => { L0["rscalcpercent"] = v; }, local: true }, false))]], C))], C))))) {
        return L0.result;
      }
      await $.wset([$t1, $t2], "CrdID", (await $.mv((await $.wcall([$t1, $t2], "FieldByName", ["ID"], C)), "AsInteger")), { get: async () => L0["crdid"], set: async (v) => { L0["crdid"] = v; }, local: true });
      {
        const $t6 = (await $.mv((await $.wv([$t1, $t2], "PRDataModule", C, false)), "CalculatorPackage"));
        await $.stmt((await $.wcall([$t1, $t2, $t6], "CallProcedure", ["decline_folder", ["p_id", (await $.wv([$t1, $t2, $t6], "CrdID", { get: async () => L0["crdid"], set: async (v) => { L0["crdid"] = v; }, local: true }, false)), "p_creditid", (await $.mv((await $.wcall([$t1, $t2, $t6], "FieldByName", ["creditid"], C)), "AsInteger")), "p_qovidreciver", (await $.mv((await $.wcall([$t1, $t2, $t6], "FieldByName", ["senderid"], C)), "AsInteger")), "p_info", (await $.mv((await $.wv([$t1, $t2, $t6], "Memo1", C, false)), "Text"))]], C)));
      }
    }
  }
  await $.mcall((await $.mv((await $.mv((await $.mv((await $.v(C, "FrmReciver")), "DBGridEh1")), "DataSource")), "DataSet")), "Refresh", []);
  await $.mcall((await $.mv((await $.mv((await $.mv((await $.v(C, "PRMainForm")), "CalcGrid")), "DataSource")), "DataSet")), "Refresh", []);
  await $.stmt($.call(C, "close", []));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TImtinaFrm", "FormCanResize", async function FormCanResize(Self, p0, p1, p2, p3) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "newwidth": $.asRef(p1), "newheight": $.asRef(p2), "resize": $.asRef(p3), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await L0["resize"].set(false);
  return L0.result;
}, {"params": ["Sender", "NewWidth", "NewHeight", "Resize"], "kind": "procedure", "ptypes": ["TObject", "Integer", "Integer", "Boolean"]});
  U.method("TImtinaFrm", "FormShow", async function FormShow(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mcall((await $.v(C, "Memo1")), "Clear", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  return U;
}
