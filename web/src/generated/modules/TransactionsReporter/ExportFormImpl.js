// Generated from ExportFormImpl.pas by pas2js — do not edit by hand; regenerate instead.
/* eslint-disable */
// @ts-nocheck

export default function define($) {
  const U = $.unit("ExportFormImpl", ["Windows", "Messages", "SysUtils", "Classes", "Graphics", "Controls", "Forms", "Dialogs", "StdCtrls", "CheckLst", "ExtCtrls", "ExcelXP", "Db", "Variants", "TransactionsViewerDataModuleUnit"]);
  const C = [U];
  U.defClass("TExportForm", "TForm", {"panel1": {"name": "Panel1", "type": "TPanel"}, "checkexportlist": {"name": "CheckExportList", "type": "TCheckListBox"}, "btnok": {"name": "BtnOK", "type": "TButton"}, "panel2": {"name": "Panel2", "type": "TPanel"}, "checkbox1": {"name": "CheckBox1", "type": "TCheckBox"}, "exportlist": {"name": "ExportList", "type": "TStrings"}}, {});
  U.init(async () => {
    U.const("LCID", (await $.v(C, "LOCALE_SYSTEM_DEFAULT")));
    U.var_("ExportForm", null, "TExportForm");
  });
  U.method("TExportForm", "FormCreate", async function FormCreate(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "dummy": 0, "exportedfieldscount": 0};
  await $.fixArgs(L0, ["sender"]);
  await $.set(C, "ExportList", (await $.mv((await $.v(C, "TStringList")), "Create")));
  {
    const $t1 = (await $.mv((await $.v(C, "CheckExportList")), "Items"));
    const $t2 = (await $.wv([$t1], "TransDataModule", C, false));
    await $.wset([$t1, $t2], "ExportedFieldsCount", (await $.mv((await $.wv([$t1, $t2], "Transactions", C, false)), "FieldCount")), { get: async () => L0["exportedfieldscount"], set: async (v) => { L0["exportedfieldscount"] = v; }, local: true });
    await $.stmt($.wcall([$t1, $t2], "Clear", [], C));
    { const $t3 = $.sub((await $.wv([$t1, $t2], "ExportedFieldsCount", { get: async () => L0["exportedfieldscount"], set: async (v) => { L0["exportedfieldscount"] = v; }, local: true }, false)), 1);
      await $.wset([$t1, $t2], "Dummy", 0, { get: async () => L0["dummy"], set: async (v) => { L0["dummy"] = v; }, local: true });
      let $t4 = true;
      for (;;) {
        if (!$t4) { await $.wset([$t1, $t2], "Dummy", $.succ((await $.wv([$t1, $t2], "Dummy", { get: async () => L0["dummy"], set: async (v) => { L0["dummy"] = v; }, local: true }, false)), 1), { get: async () => L0["dummy"], set: async (v) => { L0["dummy"] = v; }, local: true }); }
        $t4 = false;
        if (!($.ord((await $.wv([$t1, $t2], "Dummy", { get: async () => L0["dummy"], set: async (v) => { L0["dummy"] = v; }, local: true }, false))) <= $.ord($t3))) break;
        await $.stmt((await $.wcall([$t1, $t2], "Add", [(await $.mv((await $.idx((await $.mv((await $.wv([$t1, $t2], "Transactions", C, false)), "Fields")), [(await $.wv([$t1, $t2], "Dummy", { get: async () => L0["dummy"], set: async (v) => { L0["dummy"] = v; }, local: true }, false))])), "DisplayName"))], C)));
        { const $t5 = await $.iset((await $.mv((await $.wv([$t1, $t2], "CheckExportList", C, false)), "Checked")), [(await $.wv([$t1, $t2], "Dummy", { get: async () => L0["dummy"], set: async (v) => { L0["dummy"] = v; }, local: true }, false))], (await $.wv([$t1, $t2], "True", C, false))); if ($t5 !== undefined) { await $.mset((await $.wv([$t1, $t2], "CheckExportList", C, false)), "Checked", $t5); } }
        await $.tick();
      }
    }
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TExportForm", "BtnOKClick", async function BtnOKClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "dummy": 0, "r": 0, "c": 0, "i": 0, "j": 0, "v": null, "xlws": null, "xlapplication": null, "dataset": null, "fname": ''};
  await $.fixArgs(L0, ["sender"]);
  L0["dataset"] = (await $.mv((await $.v(C, "TransDataModule")), "Transactions"));
  await $.mcall(L0["dataset"], "Last", []);
  {
    const $t6 = L0["dataset"];
    const $t7 = (await $.wv([$t6], "CheckExportList", C, false));
    await $.mcall((await $.wv([$t6, $t7], "ExportList", C, false)), "Clear", []);
    { const $t8 = $.sub((await $.wv([$t6, $t7], "FieldCount", C, false)), 1);
      await $.wset([$t6, $t7], "Dummy", 0, { get: async () => L0["dummy"], set: async (v) => { L0["dummy"] = v; }, local: true });
      let $t9 = true;
      for (;;) {
        if (!$t9) { await $.wset([$t6, $t7], "Dummy", $.succ((await $.wv([$t6, $t7], "Dummy", { get: async () => L0["dummy"], set: async (v) => { L0["dummy"] = v; }, local: true }, false)), 1), { get: async () => L0["dummy"], set: async (v) => { L0["dummy"] = v; }, local: true }); }
        $t9 = false;
        if (!($.ord((await $.wv([$t6, $t7], "Dummy", { get: async () => L0["dummy"], set: async (v) => { L0["dummy"] = v; }, local: true }, false))) <= $.ord($t8))) break;
        if ($.truthy((await $.idx((await $.wv([$t6, $t7], "Checked", C, false)), [(await $.wv([$t6, $t7], "Dummy", { get: async () => L0["dummy"], set: async (v) => { L0["dummy"] = v; }, local: true }, false))])))) {
          await $.wset([$t6, $t7], "FName", (await $.mv((await $.idx((await $.wv([$t6, $t7], "Fields", C, false)), [(await $.wv([$t6, $t7], "Dummy", { get: async () => L0["dummy"], set: async (v) => { L0["dummy"] = v; }, local: true }, false))])), "Name")), { get: async () => L0["fname"], set: async (v) => { L0["fname"] = v; }, local: true });
          await $.stmt((await $.mcall((await $.wv([$t6, $t7], "System", C, false)), "Delete", [$.ref(async () => (await $.wv([$t6, $t7], "FName", { get: async () => L0["fname"], set: async (v) => { L0["fname"] = v; }, local: true }, false)), async ($t10) => { await $.wset([$t6, $t7], "FName", $t10, { get: async () => L0["fname"], set: async (v) => { L0["fname"] = v; }, local: true }); }), 1, 12])));
          await $.stmt((await $.mcall((await $.wv([$t6, $t7], "ExportList", C, false)), "Add", [(await $.wv([$t6, $t7], "FName", { get: async () => L0["fname"], set: async (v) => { L0["fname"] = v; }, local: true }, false))])));
        }
        await $.tick();
      }
    }
  }
  L0["i"] = 0;
  L0["r"] = $.add((await $.mv(L0["dataset"], "RecordCount")), 1);
  if ($.truthy($.gt($.not(((await $.mv((await $.v(C, "ExportList")), "Count")))), 0))) {
    L0["c"] = (await $.mv(L0["dataset"], "FieldCount"));
  } else {
    L0["c"] = (await $.mv((await $.v(C, "ExportList")), "Count"));
  }
  L0["v"] = (await $.call(C, "VarArrayCreate", [[0, (L0["r"]), 0, ($.sub(L0["c"], 1))], (await $.v(C, "varVariant"))]));
  await $.stmt((await $.call(C, "VarArrayLock", [L0["v"]])));
  L0["xlapplication"] = (await $.mcall((await $.v(C, "TExcelApplication")), "Create", [Self]));
  {
    const $t11 = L0["dataset"];
    await $.stmt($.wcall([$t11], "DisableControls", [], C));
    await $.stmt($.wcall([$t11], "First", [], C));
    try {
      { const $t12 = $.sub((await $.wv([$t11], "C", { get: async () => L0["c"], set: async (v) => { L0["c"] = v; }, local: true }, false)), 1);
        await $.wset([$t11], "J", 0, { get: async () => L0["j"], set: async (v) => { L0["j"] = v; }, local: true });
        let $t13 = true;
        for (;;) {
          if (!$t13) { await $.wset([$t11], "J", $.succ((await $.wv([$t11], "J", { get: async () => L0["j"], set: async (v) => { L0["j"] = v; }, local: true }, false)), 1), { get: async () => L0["j"], set: async (v) => { L0["j"] = v; }, local: true }); }
          $t13 = false;
          if (!($.ord((await $.wv([$t11], "J", { get: async () => L0["j"], set: async (v) => { L0["j"] = v; }, local: true }, false))) <= $.ord($t12))) break;
          { const $t14 = await $.iset((await $.wv([$t11], "V", { get: async () => L0["v"], set: async (v) => { L0["v"] = v; }, local: true }, false)), [(await $.wv([$t11], "I", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false)), (await $.wv([$t11], "J", { get: async () => L0["j"], set: async (v) => { L0["j"] = v; }, local: true }, false))], (await $.mv((await $.wcall([$t11], "FindField", [(await $.idx((await $.wv([$t11], "ExportList", C, false)), [(await $.wv([$t11], "J", { get: async () => L0["j"], set: async (v) => { L0["j"] = v; }, local: true }, false))]))], C)), "DisplayLabel"))); if ($t14 !== undefined) { await $.wset([$t11], "V", $t14, { get: async () => L0["v"], set: async (v) => { L0["v"] = v; }, local: true }); } }
          await $.tick();
        }
      }
      await $.stmt((await $.wcall([$t11], "INC", [$.ref(async () => (await $.wv([$t11], "I", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false)), async ($t15) => { await $.wset([$t11], "I", $t15, { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }); })], C)));
      while ($.truthy($.not((await $.mv((await $.wv([$t11], "DataSet", { get: async () => L0["dataset"], set: async (v) => { L0["dataset"] = v; }, local: true }, false)), "Eof"))))) {
        { const $t16 = $.sub((await $.wv([$t11], "C", { get: async () => L0["c"], set: async (v) => { L0["c"] = v; }, local: true }, false)), 1);
          await $.wset([$t11], "J", 0, { get: async () => L0["j"], set: async (v) => { L0["j"] = v; }, local: true });
          let $t17 = true;
          for (;;) {
            if (!$t17) { await $.wset([$t11], "J", $.succ((await $.wv([$t11], "J", { get: async () => L0["j"], set: async (v) => { L0["j"] = v; }, local: true }, false)), 1), { get: async () => L0["j"], set: async (v) => { L0["j"] = v; }, local: true }); }
            $t17 = false;
            if (!($.ord((await $.wv([$t11], "J", { get: async () => L0["j"], set: async (v) => { L0["j"] = v; }, local: true }, false))) <= $.ord($t16))) break;
            { const $t18 = await $.iset((await $.wv([$t11], "V", { get: async () => L0["v"], set: async (v) => { L0["v"] = v; }, local: true }, false)), [(await $.wv([$t11], "I", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false)), (await $.wv([$t11], "J", { get: async () => L0["j"], set: async (v) => { L0["j"] = v; }, local: true }, false))], (await $.mv((await $.wcall([$t11], "FindField", [(await $.idx((await $.wv([$t11], "ExportList", C, false)), [(await $.wv([$t11], "J", { get: async () => L0["j"], set: async (v) => { L0["j"] = v; }, local: true }, false))]))], C)), "AsVariant"))); if ($t18 !== undefined) { await $.wset([$t11], "V", $t18, { get: async () => L0["v"], set: async (v) => { L0["v"] = v; }, local: true }); } }
            await $.tick();
          }
        }
        await $.stmt((await $.wcall([$t11], "INC", [$.ref(async () => (await $.wv([$t11], "I", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false)), async ($t19) => { await $.wset([$t11], "I", $t19, { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }); })], C)));
        await $.stmt($.wcall([$t11], "Next", [], C));
        await $.tick();
      }
    } finally {
      await $.stmt($.wcall([$t11], "EnableControls", [], C));
      await $.stmt((await $.wcall([$t11], "VarArrayUnlock", [(await $.wv([$t11], "V", { get: async () => L0["v"], set: async (v) => { L0["v"] = v; }, local: true }, false))], C)));
    }
  }
  await $.mcall(L0["xlapplication"], "Connect", []);
  { const $t20 = await $.iset((await $.mv(L0["xlapplication"], "Visible")), [(await $.v(C, "LCID"))], true); if ($t20 !== undefined) { await $.mset(L0["xlapplication"], "Visible", $t20); } }
  try {
    await $.stmt((await $.mcall((await $.mv(L0["xlapplication"], "Workbooks")), "Add", [(await $.v(C, "EmptyParam")), (await $.v(C, "LCID"))])));
    L0["xlws"] = (await $.idx((await $.mv(L0["xlapplication"], "Sheets")), [1]));
    await $.stmt((await $.mcall(L0["xlws"], "Activate", [(await $.v(C, "LCID"))])));
    await $.mset((await $.mv((await $.idx((await $.mv(L0["xlws"], "Range")), ["A1", "CA1"])), "Font")), "Bold", true);
    await $.mset((await $.mv((await $.mv(L0["xlws"], "Cells")), "Font")), "Name", "Tahoma");
    {
      const $t21 = L0["xlws"];
      { const $t22 = await $.iset((await $.mv((await $.idx((await $.wv([$t21], "Range", C, false)), ["A1", (await $.idx((await $.mv((await $.mv((await $.wv([$t21], "XLWS", { get: async () => L0["xlws"], set: async (v) => { L0["xlws"] = v; }, local: true }, false)), "Cells")), "Item")), [(await $.wv([$t21], "R", { get: async () => L0["r"], set: async (v) => { L0["r"] = v; }, local: true }, false)), (await $.wv([$t21], "C", { get: async () => L0["c"], set: async (v) => { L0["c"] = v; }, local: true }, false))]))])), "Value")), [(await $.wv([$t21], "V", { get: async () => L0["v"], set: async (v) => { L0["v"] = v; }, local: true }, false))], (await $.wv([$t21], "V", { get: async () => L0["v"], set: async (v) => { L0["v"] = v; }, local: true }, false))); if ($t22 !== undefined) { await $.mset((await $.idx((await $.wv([$t21], "Range", C, false)), ["A1", (await $.idx((await $.mv((await $.mv((await $.wv([$t21], "XLWS", { get: async () => L0["xlws"], set: async (v) => { L0["xlws"] = v; }, local: true }, false)), "Cells")), "Item")), [(await $.wv([$t21], "R", { get: async () => L0["r"], set: async (v) => { L0["r"] = v; }, local: true }, false)), (await $.wv([$t21], "C", { get: async () => L0["c"], set: async (v) => { L0["c"] = v; }, local: true }, false))]))])), "Value", $t22); } }
    }
  } finally {
    await $.mcall(L0["xlapplication"], "Disconnect", []);
  }
  await $.stmt($.call(C, "Close", []));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TExportForm", "FormKeyDown", async function FormKeyDown(Self, p0, p1, p2) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "key": $.asRef(p1), "shift": $.copyArg(p2), result: undefined};
  await $.fixArgs(L0, ["sender", "shift"]);
  if ($.truthy(($.eq((await L0["key"].get()), (await $.v(C, "VK_ESCAPE")))))) {
    await $.stmt($.call(C, "Close", []));
  }
  return L0.result;
}, {"params": ["Sender", "Key", "Shift"], "kind": "procedure", "ptypes": ["TObject", "Word", "TShiftState"]});
  U.method("TExportForm", "CheckBox1Click", async function CheckBox1Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "i": 0, "icount": 0, "ischecked": false};
  await $.fixArgs(L0, ["sender"]);
  L0["ischecked"] = (await $.mv((await $.call(C, "TCheckBox", [L0["sender"]])), "Checked"));
  {
    const $t23 = (await $.v(C, "CheckExportList"));
    await $.wset([$t23], "icount", (await $.mv((await $.wv([$t23], "Items", C, false)), "Count")), { get: async () => L0["icount"], set: async (v) => { L0["icount"] = v; }, local: true });
    { const $t24 = $.sub((await $.wv([$t23], "icount", { get: async () => L0["icount"], set: async (v) => { L0["icount"] = v; }, local: true }, false)), 1);
      await $.wset([$t23], "i", 0, { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true });
      let $t25 = true;
      for (;;) {
        if (!$t25) { await $.wset([$t23], "i", $.succ((await $.wv([$t23], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false)), 1), { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }); }
        $t25 = false;
        if (!($.ord((await $.wv([$t23], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false))) <= $.ord($t24))) break;
        { const $t26 = await $.iset((await $.wv([$t23], "Checked", C, false)), [(await $.wv([$t23], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false))], (await $.wv([$t23], "IsChecked", { get: async () => L0["ischecked"], set: async (v) => { L0["ischecked"] = v; }, local: true }, false))); if ($t26 !== undefined) { await $.wset([$t23], "Checked", $t26, C); } }
        await $.tick();
      }
    }
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  return U;
}
