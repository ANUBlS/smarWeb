// Generated from ExportUnit.pas by pas2js — do not edit by hand; regenerate instead.
/* eslint-disable */
// @ts-nocheck

export default function define($) {
  const U = $.unit("ExportUnit", ["Windows", "Messages", "SysUtils", "Classes", "Graphics", "Controls", "Forms", "Dialogs", "StdCtrls", "ExtCtrls", "CheckLst", "ExcelExporter", "sbcmMainDataModule"]);
  const C = [U];
  U.const("efiName", 0);
  U.const("efiDescription", 1);
  U.defClass("TFrmExport", "TForm", {"btnexport": {"name": "BtnExport", "type": "TButton"}, "btncancel": {"name": "BtnCancel", "type": "TButton"}, "groupbox1": {"name": "GroupBox1", "type": "TGroupBox"}, "clbexportlist": {"name": "CLBExportList", "type": "TCheckListBox"}, "creditsexporter": {"name": "CreditsExporter", "type": "TExcelExporter"}}, {});
  U.init(async () => {
    U.const("ExportedFieldsCount", 11);
    U.const("FieldsInfo", [["ContractNo", "Müqavilənin nömrəsi"], ["OpenDate", "Açılma tarixi"], ["CloseDate", "Bağlanma tarixi"], ["Amount", "İlkin Məbləğ"], ["ContractCurrency", "Valyutası"], ["ContractAccNo", "SSuda Hesabının nömrəsi"], ["ContractAccName", "SSuda Hesabının adı"], ["FacticalDebt", "Əsas Borc"], ["FacticalInterestDebt", "Əsas Borc üzrə %"], ["OverdueDebt", "Ğecikdirilmiş Borc"], ["OverdueInterestDebt", "Ğecikdirilmiş Borc üzrə %"]]);
    U.var_("FrmExport", null, "TFrmExport");
  });
  U.method("TFrmExport", "FormKeyPress", async function FormKeyPress(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "key": $.asRef(p1), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.eq((await L0["key"].get()), "\u001b"))) {
    await $.stmt($.call(C, "Close", []));
  }
  return L0.result;
}, {"params": ["Sender", "Key"], "kind": "procedure", "ptypes": ["TObject", "Char"]});
  U.method("TFrmExport", "FormCreate", async function FormCreate(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "i": 0};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t1 = (await $.mv((await $.v(C, "CLBExportList")), "Items"));
    await $.stmt($.wcall([$t1], "Clear", [], C));
    { const $t2 = $.sub((await $.wv([$t1], "ExportedFieldsCount", C, false)), 1);
      await $.wset([$t1], "i", 0, { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true });
      let $t3 = true;
      for (;;) {
        if (!$t3) { await $.wset([$t1], "i", $.succ((await $.wv([$t1], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false)), 1), { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }); }
        $t3 = false;
        if (!($.ord((await $.wv([$t1], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false))) <= $.ord($t2))) break;
        await $.stmt((await $.wcall([$t1], "Add", [(await $.idx((await $.idx((await $.wv([$t1], "FieldsInfo", C, false)), [(await $.wv([$t1], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false))])), [(await $.wv([$t1], "efiDescription", C, false))]))], C)));
        await $.tick();
      }
    }
  }
  { const $t4 = $.sub((await $.v(C, "ExportedFieldsCount")), 1);
    L0["i"] = 0;
    let $t5 = true;
    for (;;) {
      if (!$t5) { L0["i"] = $.succ(L0["i"], 1); }
      $t5 = false;
      if (!($.ord(L0["i"]) <= $.ord($t4))) break;
      { const $t6 = await $.iset((await $.mv((await $.v(C, "CLBExportList")), "Checked")), [L0["i"]], true); if ($t6 !== undefined) { await $.mset((await $.v(C, "CLBExportList")), "Checked", $t6); } }
      await $.tick();
    }
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFrmExport", "BtnExportClick", async function BtnExportClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "i": 0};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t7 = (await $.v(C, "CLBExportList"));
    const $t8 = (await $.wv([$t7], "CreditsExporter", C, false));
    await $.mcall((await $.wv([$t7, $t8], "ExportList", C, false)), "Clear", []);
    { const $t9 = $.sub((await $.wv([$t7, $t8], "ExportedFieldsCount", C, false)), 1);
      await $.wset([$t7, $t8], "i", 0, { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true });
      let $t10 = true;
      for (;;) {
        if (!$t10) { await $.wset([$t7, $t8], "i", $.succ((await $.wv([$t7, $t8], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false)), 1), { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }); }
        $t10 = false;
        if (!($.ord((await $.wv([$t7, $t8], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false))) <= $.ord($t9))) break;
        if ($.truthy((await $.idx((await $.wv([$t7, $t8], "Checked", C, false)), [(await $.wv([$t7, $t8], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false))])))) {
          await $.stmt((await $.mcall((await $.wv([$t7, $t8], "ExportList", C, false)), "Add", [(await $.wcall([$t7, $t8], "UpperCase", [(await $.idx((await $.idx((await $.wv([$t7, $t8], "FieldsInfo", C, false)), [(await $.wv([$t7, $t8], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false))])), [(await $.wv([$t7, $t8], "efiName", C, false))]))], C))])));
        }
        await $.tick();
      }
    }
    await $.stmt($.wcall([$t7, $t8], "Report", [], C));
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  return U;
}
