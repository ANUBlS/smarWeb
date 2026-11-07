// Generated from FrmReciverImpl.pas by pas2js — do not edit by hand; regenerate instead.
/* eslint-disable */
// @ts-nocheck

export default function define($) {
  const U = $.unit("FrmReciverImpl", ["Windows", "Messages", "SysUtils", "Variants", "Classes", "Graphics", "Controls", "Forms", "Dialogs", "DBGridEhGrouping", "GridsEh", "DBGridEh", "StdCtrls", "Buttons", "Menus", "ExtCtrls", "FlReCalculationDataModuleImpl", "ReCalculationMainForm", "MehtemeImpl", "ImtinaImpl"]);
  const C = [U];
  U.defClass("TFrmReciver", "TForm", {"dbgrideh1": {"name": "DBGridEh1", "type": "TDBGridEh"}, "popupmenu1": {"name": "PopupMenu1", "type": "TPopupMenu"}, "stiqet1": {"name": "stiqet1", "type": "TMenuItem"}, "mtinaet1": {"name": "mtinaet1", "type": "TMenuItem"}, "panel1": {"name": "Panel1", "type": "TPanel"}, "bitbtn2": {"name": "BitBtn2", "type": "TBitBtn"}}, {});
  U.init(async () => {
    U.var_("FrmReciver", null, "TFrmReciver");
  });
  U.method("TFrmReciver", "BitBtn2Click", async function BitBtn2Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.stmt($.call(C, "close", []));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFrmReciver", "ExcuseMeUser", async function ExcuseMeUser(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"question": $.copyArg(p0), result: false};
  await $.fixArgs(L0, ["question"]);
  L0["result"] = $.eq((await $.call(C, "MessageDlg", [L0["question"], (await $.v(C, "mtConfirmation")), [(await $.v(C, "mbYes")), (await $.v(C, "mbNo"))], 0])), (await $.v(C, "mrYes")));
  return L0.result;
}, {"params": ["Question"], "kind": "function", "ptypes": ["String"]});
  U.method("TFrmReciver", "mtinaet1Click", async function mtinaet1Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.not((await $.call(C, "Assigned", [(await $.v(C, "ImtinaFrm"))]))))) {
    await $.set(C, "ImtinaFrm", (await $.mcall((await $.v(C, "TImtinaFrm")), "Create", [Self])));
  }
  await $.mcall((await $.v(C, "ImtinaFrm")), "showmodal", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFrmReciver", "stiqet1Click", async function stiqet1Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "i": 0, "selectedrowscnt": 0, "crdid": 0, "crdno": '', "crdstatus": 0, "count": 0};
  await $.fixArgs(L0, ["sender"]);
  L0["rsconfirmforone"] = "%s  - № li kredit dosyesi %s. Əminsiniz?";
  L0["rsconfirmforall"] = "%d - sayda kredit dosyesi %s. Əminsiniz?";
  L0["rscalcpercent"] = "təsdiq olunacaq";
  L0["rsalreadycalced"] = "%s - № li kredit üçün hələ hesablanmayıb və ya  təstiq olunub !";
  L0["rsprogresscaption"] = "                        Faizlər təstiq olunur . gözləyin.   .....";
  await $.set(C, "mehid", 0);
  await $.set(C, "QCrdID", (await $.mv((await $.mcall((await $.mv((await $.v(C, "PRDataModule")), "OracleDataSet2")), "FieldByName", ["creditid"])), "AsInteger")));
  {
    const $t1 = (await $.wobj(C, "DBGridEh1"));
    const $t2 = (await $.mv((await $.wv([$t1], "DataSource", C, false)), "DataSet"));
    if ($.truthy($.eq((await $.mv((await $.wcall([$t1, $t2], "FieldByName", ["RECIVERIID"], C)), "AsInteger")), 4))) {
      await $.mcall((await $.wv([$t1, $t2], "MhFrm", C, false)), "showmodal", []);
      if ($.truthy($.eq((await $.wv([$t1, $t2], "mehid", C, false)), 0))) {
        await $.stmt((await $.wcall([$t1, $t2], "ShowMessage", ["Məhkəməni seçməmisiz!"], C)));
        return L0.result;
      }
    }
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
            await $.stmt((await $.wcall([$t1, $t2, $t5], "CallProcedure", ["post_folder", ["p_id", (await $.wv([$t1, $t2, $t5], "CrdID", { get: async () => L0["crdid"], set: async (v) => { L0["crdid"] = v; }, local: true }, false)), "p_creditid", (await $.mv((await $.wcall([$t1, $t2, $t5], "FieldByName", ["creditid"], C)), "AsInteger")), "p_qovidreciver", (await $.mv((await $.wcall([$t1, $t2, $t5], "FieldByName", ["reciveriid"], C)), "AsInteger")), "p_mehid", (await $.wv([$t1, $t2, $t5], "mehid", C, false))]], C)));
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
        await $.stmt((await $.wcall([$t1, $t2, $t6], "CallProcedure", ["post_folder", ["p_id", (await $.wv([$t1, $t2, $t6], "CrdID", { get: async () => L0["crdid"], set: async (v) => { L0["crdid"] = v; }, local: true }, false)), "p_creditid", (await $.mv((await $.wcall([$t1, $t2, $t6], "FieldByName", ["creditid"], C)), "AsInteger")), "p_qovidreciver", (await $.mv((await $.wcall([$t1, $t2, $t6], "FieldByName", ["reciveriid"], C)), "AsInteger")), "p_mehid", (await $.wv([$t1, $t2, $t6], "mehid", C, false))]], C)));
      }
    }
  }
  await $.mcall((await $.mv((await $.mv((await $.v(C, "DBGridEh1")), "DataSource")), "DataSet")), "Refresh", []);
  await $.mcall((await $.mv((await $.mv((await $.mv((await $.v(C, "PRMainForm")), "CalcGrid")), "DataSource")), "DataSet")), "Refresh", []);
  await $.stmt($.call(C, "close", []));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  return U;
}
