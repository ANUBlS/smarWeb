// Generated from ExportFormUnit.pas by pas2js — do not edit by hand; regenerate instead.
/* eslint-disable */
// @ts-nocheck

export default function define($) {
  const U = $.unit("ExportFormUnit", ["Windows", "Messages", "SysUtils", "Classes", "Graphics", "Controls", "Forms", "Dialogs", "ExtCtrls", "StdCtrls", "CheckLst", "Db", "ExcelXP", "Variants", "ExpertDataModule"]);
  const C = [U];
  U.defClass("TExportForm", "TForm", {"panel1": {"name": "Panel1", "type": "TPanel"}, "checkexportlist": {"name": "CheckExportList", "type": "TCheckListBox"}, "buttonexport": {"name": "ButtonExport", "type": "TButton"}, "panel2": {"name": "Panel2", "type": "TPanel"}, "checkbox1": {"name": "CheckBox1", "type": "TCheckBox"}, "exportlist": {"name": "ExportList", "type": "TStrings"}}, {});
  U.init(async () => {
    U.const("LCID", (await $.v(C, "LOCALE_SYSTEM_DEFAULT")));
    U.var_("ExportForm", null, "TExportForm");
  });
  U.method("TExportForm", "WillEnabled", async function WillEnabled(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: undefined, "i": 0, "icount": 0, "ischecked": false};
  L0["ischecked"] = false;
  {
    const $t1 = (await $.v(C, "CheckExportList"));
    await $.wset([$t1], "icount", (await $.mv((await $.wv([$t1], "Items", C, false)), "Count")), { get: async () => L0["icount"], set: async (v) => { L0["icount"] = v; }, local: true });
    await $.wset([$t1], "i", 1, { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true });
    while ($.truthy((await $.and_(($.le((await $.wv([$t1], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false)), $.sub((await $.wv([$t1], "icount", { get: async () => L0["icount"], set: async (v) => { L0["icount"] = v; }, local: true }, false)), 1))), async () => ($.not((await $.wv([$t1], "IsChecked", { get: async () => L0["ischecked"], set: async (v) => { L0["ischecked"] = v; }, local: true }, false)))))))) {
      await $.wset([$t1], "IsChecked", (await $.idx((await $.wv([$t1], "Checked", C, false)), [(await $.wv([$t1], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false))])), { get: async () => L0["ischecked"], set: async (v) => { L0["ischecked"] = v; }, local: true });
      await $.stmt((await $.wcall([$t1], "inc", [$.ref(async () => (await $.wv([$t1], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false)), async ($t2) => { await $.wset([$t1], "i", $t2, { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }); })], C)));
      await $.tick();
    }
    await $.mset((await $.wv([$t1], "ButtonExport", C, false)), "Enabled", (await $.wv([$t1], "IsChecked", { get: async () => L0["ischecked"], set: async (v) => { L0["ischecked"] = v; }, local: true }, false)));
  }
  return L0.result;
}, {"params": [], "kind": "procedure", "ptypes": []});
  U.method("TExportForm", "FormCreate", async function FormCreate(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "dummy": 0, "exportedfieldscount": 0};
  await $.fixArgs(L0, ["sender"]);
  await $.set(C, "ExportList", (await $.mv((await $.v(C, "TStringList")), "Create")));
  {
    const $t3 = (await $.mv((await $.v(C, "CheckExportList")), "Items"));
    const $t4 = (await $.wv([$t3], "ExpertDataModul", C, false));
    await $.wset([$t3, $t4], "ExportedFieldsCount", (await $.mv((await $.wv([$t3, $t4], "Traffics", C, false)), "FieldCount")), { get: async () => L0["exportedfieldscount"], set: async (v) => { L0["exportedfieldscount"] = v; }, local: true });
    await $.stmt($.wcall([$t3, $t4], "Clear", [], C));
    { const $t5 = $.sub((await $.wv([$t3, $t4], "ExportedFieldsCount", { get: async () => L0["exportedfieldscount"], set: async (v) => { L0["exportedfieldscount"] = v; }, local: true }, false)), 1);
      await $.wset([$t3, $t4], "Dummy", 0, { get: async () => L0["dummy"], set: async (v) => { L0["dummy"] = v; }, local: true });
      let $t6 = true;
      for (;;) {
        if (!$t6) { await $.wset([$t3, $t4], "Dummy", $.succ((await $.wv([$t3, $t4], "Dummy", { get: async () => L0["dummy"], set: async (v) => { L0["dummy"] = v; }, local: true }, false)), 1), { get: async () => L0["dummy"], set: async (v) => { L0["dummy"] = v; }, local: true }); }
        $t6 = false;
        if (!($.ord((await $.wv([$t3, $t4], "Dummy", { get: async () => L0["dummy"], set: async (v) => { L0["dummy"] = v; }, local: true }, false))) <= $.ord($t5))) break;
        await $.stmt((await $.wcall([$t3, $t4], "Add", [(await $.mv((await $.idx((await $.mv((await $.wv([$t3, $t4], "Traffics", C, false)), "Fields")), [(await $.wv([$t3, $t4], "Dummy", { get: async () => L0["dummy"], set: async (v) => { L0["dummy"] = v; }, local: true }, false))])), "DisplayName"))], C)));
        { const $t7 = await $.iset((await $.mv((await $.wv([$t3, $t4], "CheckExportList", C, false)), "Checked")), [(await $.wv([$t3, $t4], "Dummy", { get: async () => L0["dummy"], set: async (v) => { L0["dummy"] = v; }, local: true }, false))], (await $.wv([$t3, $t4], "True", C, false))); if ($t7 !== undefined) { await $.mset((await $.wv([$t3, $t4], "CheckExportList", C, false)), "Checked", $t7); } }
        await $.tick();
      }
    }
    { const $t8 = await $.iset((await $.mv((await $.wv([$t3, $t4], "CheckExportList", C, false)), "Checked")), [0], (await $.wv([$t3, $t4], "False", C, false))); if ($t8 !== undefined) { await $.mset((await $.wv([$t3, $t4], "CheckExportList", C, false)), "Checked", $t8); } }
    { const $t9 = await $.iset((await $.mv((await $.wv([$t3, $t4], "CheckExportList", C, false)), "ItemEnabled")), [0], (await $.wv([$t3, $t4], "False", C, false))); if ($t9 !== undefined) { await $.mset((await $.wv([$t3, $t4], "CheckExportList", C, false)), "ItemEnabled", $t9); } }
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TExportForm", "ButtonExportClick", async function ButtonExportClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "dummy": 0, "r": 0, "c": 0, "i": 0, "j": 0, "v": null, "xlws": null, "xlapplication": null, "dataset": null, "fname": ''};
  await $.fixArgs(L0, ["sender"]);
  L0["dataset"] = (await $.mv((await $.v(C, "ExpertDataModul")), "Traffics"));
  {
    const $t10 = L0["dataset"];
    const $t11 = (await $.wv([$t10], "CheckExportList", C, false));
    await $.mcall((await $.wv([$t10, $t11], "ExportList", C, false)), "Clear", []);
    { const $t12 = $.sub((await $.wv([$t10, $t11], "FieldCount", C, false)), 1);
      await $.wset([$t10, $t11], "Dummy", 0, { get: async () => L0["dummy"], set: async (v) => { L0["dummy"] = v; }, local: true });
      let $t13 = true;
      for (;;) {
        if (!$t13) { await $.wset([$t10, $t11], "Dummy", $.succ((await $.wv([$t10, $t11], "Dummy", { get: async () => L0["dummy"], set: async (v) => { L0["dummy"] = v; }, local: true }, false)), 1), { get: async () => L0["dummy"], set: async (v) => { L0["dummy"] = v; }, local: true }); }
        $t13 = false;
        if (!($.ord((await $.wv([$t10, $t11], "Dummy", { get: async () => L0["dummy"], set: async (v) => { L0["dummy"] = v; }, local: true }, false))) <= $.ord($t12))) break;
        if ($.truthy((await $.idx((await $.wv([$t10, $t11], "Checked", C, false)), [(await $.wv([$t10, $t11], "Dummy", { get: async () => L0["dummy"], set: async (v) => { L0["dummy"] = v; }, local: true }, false))])))) {
          await $.wset([$t10, $t11], "FName", (await $.mv((await $.idx((await $.wv([$t10, $t11], "Fields", C, false)), [(await $.wv([$t10, $t11], "Dummy", { get: async () => L0["dummy"], set: async (v) => { L0["dummy"] = v; }, local: true }, false))])), "Name")), { get: async () => L0["fname"], set: async (v) => { L0["fname"] = v; }, local: true });
          await $.stmt((await $.mcall((await $.wv([$t10, $t11], "System", C, false)), "Delete", [$.ref(async () => (await $.wv([$t10, $t11], "FName", { get: async () => L0["fname"], set: async (v) => { L0["fname"] = v; }, local: true }, false)), async ($t14) => { await $.wset([$t10, $t11], "FName", $t14, { get: async () => L0["fname"], set: async (v) => { L0["fname"] = v; }, local: true }); }), 1, 8])));
          await $.stmt((await $.mcall((await $.wv([$t10, $t11], "ExportList", C, false)), "Add", [(await $.wv([$t10, $t11], "FName", { get: async () => L0["fname"], set: async (v) => { L0["fname"] = v; }, local: true }, false))])));
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
    const $t15 = L0["dataset"];
    await $.stmt($.wcall([$t15], "Open", [], C));
    await $.stmt($.wcall([$t15], "DisableControls", [], C));
    await $.stmt($.wcall([$t15], "First", [], C));
    try {
      { const $t16 = $.sub((await $.wv([$t15], "C", { get: async () => L0["c"], set: async (v) => { L0["c"] = v; }, local: true }, false)), 1);
        await $.wset([$t15], "J", 0, { get: async () => L0["j"], set: async (v) => { L0["j"] = v; }, local: true });
        let $t17 = true;
        for (;;) {
          if (!$t17) { await $.wset([$t15], "J", $.succ((await $.wv([$t15], "J", { get: async () => L0["j"], set: async (v) => { L0["j"] = v; }, local: true }, false)), 1), { get: async () => L0["j"], set: async (v) => { L0["j"] = v; }, local: true }); }
          $t17 = false;
          if (!($.ord((await $.wv([$t15], "J", { get: async () => L0["j"], set: async (v) => { L0["j"] = v; }, local: true }, false))) <= $.ord($t16))) break;
          { const $t18 = await $.iset((await $.wv([$t15], "V", { get: async () => L0["v"], set: async (v) => { L0["v"] = v; }, local: true }, false)), [(await $.wv([$t15], "I", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false)), (await $.wv([$t15], "J", { get: async () => L0["j"], set: async (v) => { L0["j"] = v; }, local: true }, false))], (await $.mv((await $.wcall([$t15], "FindField", [(await $.idx((await $.wv([$t15], "ExportList", C, false)), [(await $.wv([$t15], "J", { get: async () => L0["j"], set: async (v) => { L0["j"] = v; }, local: true }, false))]))], C)), "DisplayLabel"))); if ($t18 !== undefined) { await $.wset([$t15], "V", $t18, { get: async () => L0["v"], set: async (v) => { L0["v"] = v; }, local: true }); } }
          await $.tick();
        }
      }
      await $.stmt((await $.wcall([$t15], "INC", [$.ref(async () => (await $.wv([$t15], "I", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false)), async ($t19) => { await $.wset([$t15], "I", $t19, { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }); })], C)));
      while ($.truthy($.not((await $.mv((await $.wv([$t15], "DataSet", { get: async () => L0["dataset"], set: async (v) => { L0["dataset"] = v; }, local: true }, false)), "Eof"))))) {
        { const $t20 = $.sub((await $.wv([$t15], "C", { get: async () => L0["c"], set: async (v) => { L0["c"] = v; }, local: true }, false)), 1);
          await $.wset([$t15], "J", 0, { get: async () => L0["j"], set: async (v) => { L0["j"] = v; }, local: true });
          let $t21 = true;
          for (;;) {
            if (!$t21) { await $.wset([$t15], "J", $.succ((await $.wv([$t15], "J", { get: async () => L0["j"], set: async (v) => { L0["j"] = v; }, local: true }, false)), 1), { get: async () => L0["j"], set: async (v) => { L0["j"] = v; }, local: true }); }
            $t21 = false;
            if (!($.ord((await $.wv([$t15], "J", { get: async () => L0["j"], set: async (v) => { L0["j"] = v; }, local: true }, false))) <= $.ord($t20))) break;
            { const $t22 = await $.iset((await $.wv([$t15], "V", { get: async () => L0["v"], set: async (v) => { L0["v"] = v; }, local: true }, false)), [(await $.wv([$t15], "I", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false)), (await $.wv([$t15], "J", { get: async () => L0["j"], set: async (v) => { L0["j"] = v; }, local: true }, false))], (await $.mv((await $.wcall([$t15], "FindField", [(await $.idx((await $.wv([$t15], "ExportList", C, false)), [(await $.wv([$t15], "J", { get: async () => L0["j"], set: async (v) => { L0["j"] = v; }, local: true }, false))]))], C)), "AsVariant"))); if ($t22 !== undefined) { await $.wset([$t15], "V", $t22, { get: async () => L0["v"], set: async (v) => { L0["v"] = v; }, local: true }); } }
            await $.tick();
          }
        }
        await $.stmt((await $.wcall([$t15], "INC", [$.ref(async () => (await $.wv([$t15], "I", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false)), async ($t23) => { await $.wset([$t15], "I", $t23, { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }); })], C)));
        await $.stmt($.wcall([$t15], "Next", [], C));
        await $.tick();
      }
    } finally {
      await $.stmt($.wcall([$t15], "EnableControls", [], C));
      await $.stmt((await $.wcall([$t15], "VarArrayUnlock", [(await $.wv([$t15], "V", { get: async () => L0["v"], set: async (v) => { L0["v"] = v; }, local: true }, false))], C)));
    }
  }
  await $.mcall(L0["xlapplication"], "Connect", []);
  { const $t24 = await $.iset((await $.mv(L0["xlapplication"], "Visible")), [(await $.v(C, "LCID"))], true); if ($t24 !== undefined) { await $.mset(L0["xlapplication"], "Visible", $t24); } }
  try {
    await $.stmt((await $.mcall((await $.mv(L0["xlapplication"], "Workbooks")), "Add", [(await $.v(C, "EmptyParam")), (await $.v(C, "LCID"))])));
    L0["xlws"] = (await $.idx((await $.mv(L0["xlapplication"], "Sheets")), [1]));
    await $.stmt((await $.mcall(L0["xlws"], "Activate", [(await $.v(C, "LCID"))])));
    await $.mset((await $.mv((await $.idx((await $.mv(L0["xlws"], "Range")), ["A1", "CA1"])), "Font")), "Bold", true);
    await $.mset((await $.mv((await $.mv(L0["xlws"], "Cells")), "Font")), "Name", "Tahoma");
    {
      const $t25 = L0["xlws"];
      { const $t26 = await $.iset((await $.mv((await $.idx((await $.wv([$t25], "Range", C, false)), ["A1", (await $.idx((await $.mv((await $.mv((await $.wv([$t25], "XLWS", { get: async () => L0["xlws"], set: async (v) => { L0["xlws"] = v; }, local: true }, false)), "Cells")), "Item")), [(await $.wv([$t25], "R", { get: async () => L0["r"], set: async (v) => { L0["r"] = v; }, local: true }, false)), (await $.wv([$t25], "C", { get: async () => L0["c"], set: async (v) => { L0["c"] = v; }, local: true }, false))]))])), "Value")), [(await $.wv([$t25], "null", C, false))], (await $.wv([$t25], "V", { get: async () => L0["v"], set: async (v) => { L0["v"] = v; }, local: true }, false))); if ($t26 !== undefined) { await $.mset((await $.idx((await $.wv([$t25], "Range", C, false)), ["A1", (await $.idx((await $.mv((await $.mv((await $.wv([$t25], "XLWS", { get: async () => L0["xlws"], set: async (v) => { L0["xlws"] = v; }, local: true }, false)), "Cells")), "Item")), [(await $.wv([$t25], "R", { get: async () => L0["r"], set: async (v) => { L0["r"] = v; }, local: true }, false)), (await $.wv([$t25], "C", { get: async () => L0["c"], set: async (v) => { L0["c"] = v; }, local: true }, false))]))])), "Value", $t26); } }
    }
  } finally {
    await $.mcall(L0["xlapplication"], "Disconnect", []);
  }
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
    const $t27 = (await $.v(C, "CheckExportList"));
    await $.wset([$t27], "icount", (await $.mv((await $.wv([$t27], "Items", C, false)), "Count")), { get: async () => L0["icount"], set: async (v) => { L0["icount"] = v; }, local: true });
    { const $t28 = $.sub((await $.wv([$t27], "icount", { get: async () => L0["icount"], set: async (v) => { L0["icount"] = v; }, local: true }, false)), 1);
      await $.wset([$t27], "i", 1, { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true });
      let $t29 = true;
      for (;;) {
        if (!$t29) { await $.wset([$t27], "i", $.succ((await $.wv([$t27], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false)), 1), { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }); }
        $t29 = false;
        if (!($.ord((await $.wv([$t27], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false))) <= $.ord($t28))) break;
        { const $t30 = await $.iset((await $.wv([$t27], "Checked", C, false)), [(await $.wv([$t27], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false))], (await $.wv([$t27], "IsChecked", { get: async () => L0["ischecked"], set: async (v) => { L0["ischecked"] = v; }, local: true }, false))); if ($t30 !== undefined) { await $.wset([$t27], "Checked", $t30, C); } }
        await $.tick();
      }
    }
  }
  await $.stmt($.call(C, "WillEnabled", []));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TExportForm", "CheckExportListClickCheck", async function CheckExportListClickCheck(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.stmt($.call(C, "WillEnabled", []));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  return U;
}
