// Generated from frmExcelExportImpl.pas by pas2js — do not edit by hand; regenerate instead.
/* eslint-disable */
// @ts-nocheck

export default function define($) {
  const U = $.unit("frmExcelExportImpl", ["Windows", "Messages", "SysUtils", "Classes", "Graphics", "Controls", "Forms", "Dialogs", "StdCtrls", "CheckLst", "ExtCtrls", "NLSLocalizer", "DB", "CMExcelExport"]);
  const C = [U];
  U.defClass("TfrmExcelExport", "TForm", {"panel1": {"name": "Panel1", "type": "TPanel"}, "checkexportlist": {"name": "CheckExportList", "type": "TCheckListBox"}, "button1": {"name": "Button1", "type": "TButton"}, "panel2": {"name": "Panel2", "type": "TPanel"}, "checkbox": {"name": "CheckBox", "type": "TCheckBox"}, "nlslocalizer1": {"name": "NLSLocalizer1", "type": "TNLSLocalizer"}}, {});
  U.init(async () => {
    U.var_("frmExcelExport", null, "TfrmExcelExport");
  });
  U.method("TfrmExcelExport", "CheckSelected", async function CheckSelected(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"itemindex": $.copyArg(p0), result: false};
  await $.fixArgs(L0, ["itemindex"]);
  L0["result"] = (await $.idx((await $.mv((await $.v(C, "CheckExportList")), "Checked")), [L0["itemindex"]]));
  return L0.result;
}, {"params": ["ItemIndex"], "kind": "function", "ptypes": ["Integer"]});
  U.method("TfrmExcelExport", "ShowExportedFields", async function ShowExportedFields(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"dataset": $.copyArg(p0), "aowner": $.copyArg(p1), result: false, "i": 0, "exportedfieldscount": 0};
  await $.fixArgs(L0, ["dataset", "aowner"]);
  {
    const $t1 = L0["dataset"];
    const $t2 = (await $.mv((await $.wv([$t1], "CheckExportList", C, false)), "Items"));
    await $.wset([$t1, $t2], "ExportedFieldsCount", (await $.wv([$t1, $t2], "FieldCount", C, false)), { get: async () => L0["exportedfieldscount"], set: async (v) => { L0["exportedfieldscount"] = v; }, local: true });
    await $.stmt($.wcall([$t1, $t2], "Clear", [], C));
    { const $t3 = $.sub((await $.wv([$t1, $t2], "ExportedFieldsCount", { get: async () => L0["exportedfieldscount"], set: async (v) => { L0["exportedfieldscount"] = v; }, local: true }, false)), 1);
      await $.wset([$t1, $t2], "i", 0, { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true });
      let $t4 = true;
      for (;;) {
        if (!$t4) { await $.wset([$t1, $t2], "i", $.succ((await $.wv([$t1, $t2], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false)), 1), { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }); }
        $t4 = false;
        if (!($.ord((await $.wv([$t1, $t2], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false))) <= $.ord($t3))) break;
        await $.stmt((await $.wcall([$t1, $t2], "Add", [(await $.mv((await $.idx((await $.wv([$t1, $t2], "Fields", C, false)), [(await $.wv([$t1, $t2], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false))])), "DisplayName"))], C)));
        { const $t5 = await $.iset((await $.mv((await $.wv([$t1, $t2], "CheckExportList", C, false)), "Checked")), [(await $.wv([$t1, $t2], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false))], (await $.wv([$t1, $t2], "True", C, false))); if ($t5 !== undefined) { await $.mset((await $.wv([$t1, $t2], "CheckExportList", C, false)), "Checked", $t5); } }
        await $.tick();
      }
    }
  }
  await $.stmt($.call(C, "ShowModal", []));
  L0["result"] = $.eq((await $.v(C, "ModalResult")), (await $.v(C, "mrOk")));
  return L0.result;
}, {"params": ["DataSet", "AOwner"], "kind": "function", "ptypes": ["TDataSet", "TComponent"]});
  U.method("TfrmExcelExport", "Button1Click", async function Button1Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.set(C, "ModalResult", (await $.v(C, "mrOk")));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TfrmExcelExport", "CheckBoxClick", async function CheckBoxClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "i": 0, "icount": 0, "ischecked": false};
  await $.fixArgs(L0, ["sender"]);
  L0["ischecked"] = (await $.mv((await $.call(C, "TCheckBox", [L0["sender"]])), "Checked"));
  {
    const $t6 = (await $.v(C, "CheckExportList"));
    await $.wset([$t6], "icount", (await $.mv((await $.wv([$t6], "Items", C, false)), "Count")), { get: async () => L0["icount"], set: async (v) => { L0["icount"] = v; }, local: true });
    { const $t7 = $.sub((await $.wv([$t6], "icount", { get: async () => L0["icount"], set: async (v) => { L0["icount"] = v; }, local: true }, false)), 1);
      await $.wset([$t6], "i", 0, { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true });
      let $t8 = true;
      for (;;) {
        if (!$t8) { await $.wset([$t6], "i", $.succ((await $.wv([$t6], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false)), 1), { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }); }
        $t8 = false;
        if (!($.ord((await $.wv([$t6], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false))) <= $.ord($t7))) break;
        { const $t9 = await $.iset((await $.wv([$t6], "Checked", C, false)), [(await $.wv([$t6], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false))], (await $.wv([$t6], "IsChecked", { get: async () => L0["ischecked"], set: async (v) => { L0["ischecked"] = v; }, local: true }, false))); if ($t9 !== undefined) { await $.wset([$t6], "Checked", $t9, C); } }
        await $.tick();
      }
    }
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TfrmExcelExport", "FormShow", async function FormShow(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mset((await $.v(C, "CheckBox")), "checked", true);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TfrmExcelExport", "FormCanResize", async function FormCanResize(Self, p0, p1, p2, p3) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "newwidth": $.asRef(p1), "newheight": $.asRef(p2), "resize": $.asRef(p3), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await L0["resize"].set(false);
  return L0.result;
}, {"params": ["Sender", "NewWidth", "NewHeight", "Resize"], "kind": "procedure", "ptypes": ["TObject", "Integer", "Integer", "Boolean"]});
  U.method("TfrmExcelExport", "FormKeyPress", async function FormKeyPress(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "key": $.asRef(p1), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.eq((await $.call(C, "ord", [(await L0["key"].get())])), (await $.v(C, "VK_ESCAPE"))))) {
    await $.stmt($.call(C, "close", []));
  }
  return L0.result;
}, {"params": ["Sender", "Key"], "kind": "procedure", "ptypes": ["TObject", "Char"]});
  return U;
}
