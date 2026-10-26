// Generated from UnitUpdGroups.pas by pas2js — do not edit by hand; regenerate instead.
/* eslint-disable */
// @ts-nocheck

export default function define($) {
  const U = $.unit("UnitUpdGroups", ["Windows", "Messages", "SysUtils", "Classes", "Graphics", "Controls", "Forms", "Dialogs", "StdCtrls", "Buttons", "ExtCtrls", "DBCtrls", "oracledata", "oracle", "sboapiDataModuleImpl", "SearchCombo", "Mask", "DBCtrlsEh", "DBLookupEh", "DBGridEh", "UnitData", "SBTranslateProc"]);
  const C = [U];
  U.defClass("TFormUpdGroups", "TForm", {"panelm": {"name": "PanelM", "type": "TPanel"}, "sbutton": {"name": "SButton", "type": "TSpeedButton"}, "groupboxname": {"name": "GroupBoxName", "type": "TGroupBox"}, "editgroupname": {"name": "EditGroupName", "type": "TEdit"}, "groupboxnbpercent": {"name": "GroupBoxNBPercent", "type": "TGroupBox"}, "editpercentnb": {"name": "EditPercentNB", "type": "TEdit"}, "groupboxnlpercent": {"name": "GroupBoxNLPercent", "type": "TGroupBox"}, "editpercentnl": {"name": "EditPercentNL", "type": "TEdit"}, "groupboxdebtacc": {"name": "GroupBoxDebtAcc", "type": "TGroupBox"}, "groupboxcredacc": {"name": "GroupBoxCredAcc", "type": "TGroupBox"}, "groupbox_main_acc": {"name": "GroupBox_main_acc", "type": "TGroupBox"}, "cb_main_acc1": {"name": "CB_main_acc1", "type": "TDBLookupComboBox"}, "groupbox_sale_acc": {"name": "GroupBox_sale_acc", "type": "TGroupBox"}, "cb_sale_acc1": {"name": "CB_sale_acc1", "type": "TDBLookupComboBox"}, "cb_exp_acc1": {"name": "CB_exp_acc1", "type": "TDBLookupComboBox"}, "cb_amort_acc1": {"name": "CB_amort_acc1", "type": "TDBLookupComboBox"}, "cb_exp_acc": {"name": "CB_exp_acc", "type": "TDBLookupComboboxEh"}, "cb_amort_acc": {"name": "CB_amort_acc", "type": "TDBLookupComboboxEh"}, "cb_main_acc": {"name": "CB_main_acc", "type": "TDBLookupComboboxEh"}, "cb_sale_acc": {"name": "CB_sale_acc", "type": "TDBLookupComboboxEh"}, "edit1": {"name": "Edit1", "type": "TEdit"}, "combobox1": {"name": "ComboBox1", "type": "TComboBox"}, "edit2": {"name": "Edit2", "type": "TEdit"}, "combobox2": {"name": "ComboBox2", "type": "TComboBox"}, "edit3": {"name": "Edit3", "type": "TEdit"}, "combobox3": {"name": "ComboBox3", "type": "TComboBox"}, "edit4": {"name": "Edit4", "type": "TEdit"}, "combobox4": {"name": "ComboBox4", "type": "TComboBox"}}, {});
  U.init(async () => {
    U.var_("FormUpdGroups", null, "TFormUpdGroups");
    U.var_("s", '', "String");
  });
  U.method("TFormUpdGroups", "FormCreate", async function FormCreate(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.stmt((await $.mcall((await $.v(C, "SBTranslateProc")), "TranslateAllCompForms", [Self, (await $.mv((await $.v(C, "sboapiDataModule")), "OrPack_SL"))])));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFormUpdGroups", "FormKeyPress", async function FormKeyPress(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "key": $.asRef(p1), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy(($.eq((await $.call(C, "ORD", [(await L0["key"].get())])), (await $.v(C, "VK_ESCAPE")))))) {
    await $.stmt($.call(C, "Close", []));
  }
  return L0.result;
}, {"params": ["Sender", "Key"], "kind": "procedure", "ptypes": ["TObject", "Char"]});
  U.method("TFormUpdGroups", "ComboBox1Change", async function ComboBox1Change(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mset((await $.v(C, "CB_exp_acc")), "text", (await $.mv((await $.v(C, "combobox1")), "Text")));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFormUpdGroups", "ComboBox2Change", async function ComboBox2Change(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mset((await $.v(C, "CB_main_acc")), "text", (await $.mv((await $.v(C, "combobox2")), "Text")));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFormUpdGroups", "ComboBox3Change", async function ComboBox3Change(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mset((await $.v(C, "CB_amort_acc")), "Text", (await $.mv((await $.v(C, "combobox3")), "Text")));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFormUpdGroups", "ComboBox4Change", async function ComboBox4Change(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mset((await $.v(C, "CB_sale_acc")), "text", (await $.mv((await $.v(C, "combobox4")), "Text")));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFormUpdGroups", "Edit1Change", async function Edit1Change(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mset((await $.v(C, "ComboBox1")), "Visible", true);
  await $.mset((await $.v(C, "CB_exp_acc")), "Visible", false);
  {
    const $t1 = (await $.mv((await $.v(C, "DataModWares")), "ODSViewGr1"));
    await $.stmt($.wcall([$t1], "close", [], C));
    await $.stmt((await $.wcall([$t1], "SetVariable", ["a", (await $.mv((await $.wv([$t1], "edit1", C, false)), "Text"))], C)));
    await $.stmt($.wcall([$t1], "Open", [], C));
  }
  while ($.truthy($.not((await $.mv((await $.mv((await $.v(C, "DataModWares")), "ODSViewGr1")), "eof"))))) {
    await $.stmt((await $.mcall((await $.mv((await $.v(C, "ComboBox1")), "Items")), "Add", [(await $.mv((await $.mcall((await $.mv((await $.v(C, "DataModWares")), "ODSViewGr1")), "FieldByName", ["acc_no"])), "AsString"))])));
    await $.mcall((await $.mv((await $.v(C, "DataModWares")), "ODSViewGr1")), "Next", []);
    await $.tick();
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFormUpdGroups", "Edit1Enter", async function Edit1Enter(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mcall((await $.mv((await $.v(C, "ComboBox1")), "Items")), "Clear", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFormUpdGroups", "Edit2Change", async function Edit2Change(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mset((await $.v(C, "ComboBox2")), "Visible", true);
  await $.mset((await $.v(C, "CB_main_acc")), "Visible", false);
  {
    const $t2 = (await $.mv((await $.v(C, "DataModWares")), "ODSViewGr1"));
    await $.stmt($.wcall([$t2], "close", [], C));
    await $.stmt((await $.wcall([$t2], "SetVariable", ["a", (await $.mv((await $.wv([$t2], "edit2", C, false)), "Text"))], C)));
    await $.stmt($.wcall([$t2], "Open", [], C));
  }
  while ($.truthy($.not((await $.mv((await $.mv((await $.v(C, "DataModWares")), "ODSViewGr1")), "eof"))))) {
    await $.stmt((await $.mcall((await $.mv((await $.v(C, "ComboBox2")), "Items")), "Add", [(await $.mv((await $.mcall((await $.mv((await $.v(C, "DataModWares")), "ODSViewGr1")), "FieldByName", ["acc_no"])), "AsString"))])));
    await $.mcall((await $.mv((await $.v(C, "DataModWares")), "ODSViewGr1")), "Next", []);
    await $.tick();
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFormUpdGroups", "Edit2Enter", async function Edit2Enter(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mcall((await $.mv((await $.v(C, "ComboBox2")), "Items")), "Clear", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFormUpdGroups", "Edit3Change", async function Edit3Change(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mset((await $.v(C, "combobox3")), "Visible", true);
  await $.mset((await $.v(C, "CB_amort_acc")), "Visible", false);
  {
    const $t3 = (await $.mv((await $.v(C, "DataModWares")), "ODSViewGr1"));
    await $.stmt($.wcall([$t3], "close", [], C));
    await $.stmt((await $.wcall([$t3], "SetVariable", ["a", (await $.mv((await $.wv([$t3], "edit3", C, false)), "Text"))], C)));
    await $.stmt($.wcall([$t3], "Open", [], C));
  }
  while ($.truthy($.not((await $.mv((await $.mv((await $.v(C, "DataModWares")), "ODSViewGr1")), "eof"))))) {
    await $.stmt((await $.mcall((await $.mv((await $.v(C, "ComboBox3")), "Items")), "Add", [(await $.mv((await $.mcall((await $.mv((await $.v(C, "DataModWares")), "ODSViewGr1")), "FieldByName", ["acc_no"])), "AsString"))])));
    await $.mcall((await $.mv((await $.v(C, "DataModWares")), "ODSViewGr1")), "Next", []);
    await $.tick();
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFormUpdGroups", "Edit3Enter", async function Edit3Enter(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mset((await $.v(C, "ComboBox3")), "Text", "");
  await $.mcall((await $.mv((await $.v(C, "ComboBox3")), "Items")), "Clear", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFormUpdGroups", "Edit4Change", async function Edit4Change(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mset((await $.v(C, "ComboBox4")), "Visible", true);
  await $.mset((await $.v(C, "CB_sale_acc")), "Visible", false);
  {
    const $t4 = (await $.mv((await $.v(C, "DataModWares")), "ODSViewGr1"));
    await $.stmt($.wcall([$t4], "close", [], C));
    await $.stmt((await $.wcall([$t4], "SetVariable", ["a", (await $.mv((await $.wv([$t4], "edit4", C, false)), "Text"))], C)));
    await $.stmt($.wcall([$t4], "Open", [], C));
  }
  while ($.truthy($.not((await $.mv((await $.mv((await $.v(C, "DataModWares")), "ODSViewGr1")), "eof"))))) {
    await $.stmt((await $.mcall((await $.mv((await $.v(C, "ComboBox4")), "Items")), "Add", [(await $.mv((await $.mcall((await $.mv((await $.v(C, "DataModWares")), "ODSViewGr1")), "FieldByName", ["acc_no"])), "AsString"))])));
    await $.mcall((await $.mv((await $.v(C, "DataModWares")), "ODSViewGr1")), "Next", []);
    await $.tick();
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFormUpdGroups", "Edit4Enter", async function Edit4Enter(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mcall((await $.mv((await $.v(C, "ComboBox4")), "Items")), "Clear", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFormUpdGroups", "FormActivate", async function FormActivate(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "i": 0};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t5 = (await $.v(C, "DataModWares"));
    await $.mcall((await $.wv([$t5], "ODSViewGr", C, false)), "Close", []);
    await $.mcall((await $.wv([$t5], "ODSViewGr", C, false)), "Open", []);
    await $.mcall((await $.wv([$t5], "odsviewgr", C, false)), "first", []);
    if ($.truthy($.gt((await $.mv((await $.wv([$t5], "odsviewgr", C, false)), "RecordCount")), 0))) {
      { const $t6 = $.sub((await $.mv((await $.wv([$t5], "odsviewgr", C, false)), "RecordCount")), 1);
        await $.wset([$t5], "i", 1, { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true });
        let $t7 = true;
        for (;;) {
          if (!$t7) { await $.wset([$t5], "i", $.succ((await $.wv([$t5], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false)), 1), { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }); }
          $t7 = false;
          if (!($.ord((await $.wv([$t5], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false))) <= $.ord($t6))) break;
          await $.mcall((await $.wv([$t5], "odsviewgr", C, false)), "Next", []);
          await $.tick();
        }
      }
    }
    await $.mset((await $.wv([$t5], "ComboBox1", C, false)), "Visible", (await $.wv([$t5], "false", C, false)));
    await $.mset((await $.wv([$t5], "ComboBox2", C, false)), "Visible", (await $.wv([$t5], "false", C, false)));
    await $.mset((await $.wv([$t5], "ComboBox4", C, false)), "Visible", (await $.wv([$t5], "false", C, false)));
    await $.mset((await $.wv([$t5], "CB_main_acc", C, false)), "Visible", (await $.wv([$t5], "true", C, false)));
    await $.mset((await $.wv([$t5], "CB_amort_acc", C, false)), "Visible", (await $.wv([$t5], "true", C, false)));
    await $.mset((await $.wv([$t5], "CB_exp_acc", C, false)), "Visible", (await $.wv([$t5], "true", C, false)));
    await $.mset((await $.wv([$t5], "CB_sale_acc", C, false)), "Visible", (await $.wv([$t5], "true", C, false)));
    await $.mset((await $.wv([$t5], "EditGroupName", C, false)), "Text", (await $.mv((await $.mcall((await $.wv([$t5], "ODSGroups", C, false)), "FieldByName", ["name"])), "AsString")));
    await $.mset((await $.wv([$t5], "EditPercentNB", C, false)), "Text", (await $.mv((await $.mcall((await $.wv([$t5], "ODSGroups", C, false)), "FieldByName", ["amort"])), "AsString")));
    await $.mset((await $.wv([$t5], "EditPercentNL", C, false)), "Text", (await $.mv((await $.mcall((await $.wv([$t5], "ODSGroups", C, false)), "FieldByName", ["taxamort"])), "AsString")));
    await $.mset((await $.wv([$t5], "CB_main_acc", C, false)), "KeyValue", (await $.mv((await $.mcall((await $.wv([$t5], "ODSGroups", C, false)), "FieldByName", ["main_account"])), "AsInteger")));
    await $.mset((await $.wv([$t5], "CB_amort_acc", C, false)), "KeyValue", (await $.mv((await $.mcall((await $.wv([$t5], "ODSGroups", C, false)), "FieldByName", ["amort_account"])), "AsInteger")));
    await $.mset((await $.wv([$t5], "ComboBox3", C, false)), "Text", (await $.mv((await $.mcall((await $.wv([$t5], "ODSGroups", C, false)), "FieldByName", ["Creditaccno"])), "AsVariant")));
    await $.mset((await $.wv([$t5], "CB_exp_acc", C, false)), "KeyValue", (await $.mv((await $.mcall((await $.wv([$t5], "ODSGroups", C, false)), "FieldByName", ["exp_account"])), "AsInteger")));
    await $.mset((await $.wv([$t5], "CB_sale_acc", C, false)), "KeyValue", (await $.mv((await $.mcall((await $.wv([$t5], "ODSGroups", C, false)), "FieldByName", ["sale_account"])), "AsInteger")));
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFormUpdGroups", "SButtonClick", async function SButtonClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy((await $.and_((await $.and_((await $.and_(($.ne((await $.mv((await $.v(C, "EditGroupName")), "Text")), "")), async () => ($.ne((await $.mv((await $.v(C, "EditPercentNB")), "Text")), "")))), async () => ($.ne((await $.mv((await $.v(C, "EditPercentNB")), "Text")), "")))), async () => ($.ne((await $.mv((await $.v(C, "EditPercentNL")), "Text")), "")))))) {
    await $.stmt((await $.mcall((await $.mv((await $.v(C, "DataModWares")), "SB_MAIN_RESOURCE")), "CallProcedure", ["upd_groups", [(await $.mv((await $.mcall((await $.mv((await $.v(C, "DataModWares")), "ODSGroups")), "FieldByName", ["id"])), "AsFloat")), (await $.mv((await $.v(C, "EditGroupName")), "Text")), (await $.call(C, "strtofloat", [(await $.mv((await $.v(C, "EditPercentNB")), "Text"))])), (await $.mv((await $.v(C, "CB_main_acc")), "KeyValue")), (await $.mv((await $.v(C, "CB_exp_acc")), "KeyValue")), (await $.mv((await $.v(C, "CB_amort_acc")), "KeyValue")), (await $.mv((await $.v(C, "CB_sale_acc")), "KeyValue")), (await $.call(C, "strtofloat", [(await $.mv((await $.v(C, "EditPercentNL")), "Text"))]))]])));
    await $.mcall((await $.mv((await $.v(C, "DataModWares")), "ODSGroups")), "Refresh", []);
    await $.stmt($.call(C, "close", []));
  } else {
    await $.stmt((await $.call(C, "ShowMessage", ["Boş qalan xanalar var!"])));
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  return U;
}
