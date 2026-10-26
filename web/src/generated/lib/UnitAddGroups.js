// Generated from UnitAddGroups.pas by pas2js — do not edit by hand; regenerate instead.
/* eslint-disable */
// @ts-nocheck

export default function define($) {
  const U = $.unit("UnitAddGroups", ["Windows", "Messages", "SysUtils", "Classes", "Graphics", "Controls", "Forms", "Dialogs", "ExtCtrls", "StdCtrls", "Buttons", "DBCtrls", "Mask", "DBCtrlsEh", "DBLookupEh", "DBGridEh", "XFSCtrls", "unitdata", "sboapiDataModuleImpl", "SBTranslateProc"]);
  const C = [U];
  U.defClass("TFormAddGroups", "TForm", {"panelm": {"name": "PanelM", "type": "TPanel"}, "groupboxname": {"name": "GroupBoxName", "type": "TGroupBox"}, "editgroupname": {"name": "EditGroupName", "type": "TEdit"}, "groupboxnbpercent": {"name": "GroupBoxNBPercent", "type": "TGroupBox"}, "groupboxnlpercent": {"name": "GroupBoxNLPercent", "type": "TGroupBox"}, "editpercentnb": {"name": "EditPercentNB", "type": "TEdit"}, "editpercentnl": {"name": "EditPercentNL", "type": "TEdit"}, "groupboxdebtacc": {"name": "GroupBoxDebtAcc", "type": "TGroupBox"}, "groupboxcredacc": {"name": "GroupBoxCredAcc", "type": "TGroupBox"}, "cboxdebtacc": {"name": "CBoxDebtAcc", "type": "TComboBox"}, "cboxcredacc": {"name": "CBoxCredAcc", "type": "TComboBox"}, "groupbox_main_acc": {"name": "GroupBox_main_acc", "type": "TGroupBox"}, "groupbox_sale_acc": {"name": "GroupBox_sale_acc", "type": "TGroupBox"}, "cb_main_acc1": {"name": "CB_main_acc1", "type": "TDBLookupComboBox"}, "cb_sale_acc1": {"name": "CB_sale_acc1", "type": "TDBLookupComboBox"}, "cb_main_acc": {"name": "CB_main_acc", "type": "TDBLookupComboboxEh"}, "cb_sale_acc": {"name": "CB_sale_acc", "type": "TDBLookupComboboxEh"}, "button1": {"name": "Button1", "type": "TButton"}, "edit1": {"name": "Edit1", "type": "TEdit"}, "edit2": {"name": "Edit2", "type": "TEdit"}, "combobox2": {"name": "ComboBox2", "type": "TComboBox"}, "edit3": {"name": "Edit3", "type": "TEdit"}, "edit4": {"name": "Edit4", "type": "TEdit"}, "combobox4": {"name": "ComboBox4", "type": "TComboBox"}}, {});
  U.init(async () => {
    U.var_("FormAddGroups", null, "TFormAddGroups");
  });
  U.method("TFormAddGroups", "FormKeyPress", async function FormKeyPress(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "key": $.asRef(p1), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy(($.eq((await $.call(C, "ORD", [(await L0["key"].get())])), (await $.v(C, "VK_ESCAPE")))))) {
    await $.stmt($.call(C, "Close", []));
  }
  return L0.result;
}, {"params": ["Sender", "Key"], "kind": "procedure", "ptypes": ["TObject", "Char"]});
  U.method("TFormAddGroups", "FormActivate", async function FormActivate(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "rec": 0};
  await $.fixArgs(L0, ["sender"]);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFormAddGroups", "FormCreate", async function FormCreate(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.stmt((await $.mcall((await $.v(C, "SBTranslateProc")), "TranslateAllCompForms", [Self, (await $.mv((await $.v(C, "sboapiDataModule")), "OrPack_SL"))])));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFormAddGroups", "Button1Click", async function Button1Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy((await $.and_((await $.and_((await $.and_((await $.and_((await $.and_(($.ne((await $.mv((await $.v(C, "EditGroupName")), "Text")), "")), async () => ($.ne((await $.mv((await $.v(C, "EditPercentNB")), "Text")), "")))), async () => ($.ne((await $.mv((await $.v(C, "EditPercentNB")), "Text")), "")))), async () => ($.ne((await $.mv((await $.v(C, "EditPercentNL")), "Text")), "")))), async () => ($.ne((await $.mv((await $.v(C, "CBoxCredAcc")), "Text")), "")))), async () => ($.ne((await $.mv((await $.v(C, "CBoxDebtAcc")), "Text")), "")))))) {
    await $.stmt((await $.mcall((await $.mv((await $.v(C, "DataModWares")), "SB_MAIN_RESOURCE")), "CallProcedure", ["add_groups", [(await $.mv((await $.v(C, "EditGroupName")), "Text")), (await $.call(C, "strtofloat", [(await $.mv((await $.v(C, "EditPercentNB")), "Text"))])), (await $.mv((await $.v(C, "CB_main_acc")), "KeyValue")), (await $.mv((await $.v(C, "CBoxDebtAcc")), "tag")), (await $.mv((await $.v(C, "CBoxCredAcc")), "tag")), (await $.mv((await $.v(C, "CB_sale_acc")), "KeyValue")), (await $.call(C, "strtofloat", [(await $.mv((await $.v(C, "EditPercentNL")), "Text"))]))]])));
    await $.mcall((await $.mv((await $.v(C, "DataModWares")), "ODSGroups")), "Refresh", []);
    await $.stmt($.call(C, "close", []));
  } else {
    await $.stmt((await $.call(C, "ShowMessage", ["Boş qalan xanalar var!"])));
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFormAddGroups", "CBoxDebtAccChange", async function CBoxDebtAccChange(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t1 = (await $.mv((await $.v(C, "DataModWares")), "SB_MAIN_RESOURCE"));
    await $.mset((await $.wv([$t1], "Sender", { get: async () => L0["sender"], set: async (v) => { L0["sender"] = v; }, local: true }, false)), "Tag", (await $.wcall([$t1], "CallIntegerFunction", ["GetAccountID", [(await $.mv(((await $.wv([$t1], "Sender", { get: async () => L0["sender"], set: async (v) => { L0["sender"] = v; }, local: true }, false))), "Text"))]], C)));
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFormAddGroups", "ComboBox1Change", async function ComboBox1Change(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "a": ''};
  await $.fixArgs(L0, ["sender"]);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFormAddGroups", "ComboBox2Change", async function ComboBox2Change(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mset((await $.v(C, "CB_main_acc")), "text", (await $.mv((await $.v(C, "combobox2")), "Text")));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFormAddGroups", "ComboBox3Change", async function ComboBox3Change(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "a": ''};
  await $.fixArgs(L0, ["sender"]);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFormAddGroups", "ComboBox4Change", async function ComboBox4Change(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mset((await $.v(C, "CB_sale_acc")), "text", (await $.mv((await $.v(C, "combobox4")), "Text")));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFormAddGroups", "Edit1Change", async function Edit1Change(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t2 = (await $.mv((await $.v(C, "DataModWares")), "ODSViewGr1"));
    await $.stmt($.wcall([$t2], "close", [], C));
    await $.stmt((await $.wcall([$t2], "SetVariable", ["a", (await $.mv((await $.wv([$t2], "edit1", C, false)), "Text"))], C)));
    await $.stmt($.wcall([$t2], "Open", [], C));
  }
  while ($.truthy($.not((await $.mv((await $.mv((await $.v(C, "DataModWares")), "ODSViewGr1")), "eof"))))) {
    await $.stmt((await $.mcall((await $.mv((await $.v(C, "CBoxDebtAcc")), "Items")), "Add", [(await $.mv((await $.mcall((await $.mv((await $.v(C, "DataModWares")), "ODSViewGr1")), "FieldByName", ["acc_no"])), "AsString"))])));
    await $.mcall((await $.mv((await $.v(C, "DataModWares")), "ODSViewGr1")), "Next", []);
    await $.tick();
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFormAddGroups", "Edit1Enter", async function Edit1Enter(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFormAddGroups", "Edit2Change", async function Edit2Change(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t3 = (await $.mv((await $.v(C, "DataModWares")), "ODSViewGr1"));
    await $.stmt($.wcall([$t3], "close", [], C));
    await $.stmt((await $.wcall([$t3], "SetVariable", ["a", (await $.mv((await $.wv([$t3], "edit2", C, false)), "Text"))], C)));
    await $.stmt($.wcall([$t3], "Open", [], C));
  }
  while ($.truthy($.not((await $.mv((await $.mv((await $.v(C, "DataModWares")), "ODSViewGr1")), "eof"))))) {
    await $.stmt((await $.mcall((await $.mv((await $.v(C, "ComboBox2")), "Items")), "Add", [(await $.mv((await $.mcall((await $.mv((await $.v(C, "DataModWares")), "ODSViewGr1")), "FieldByName", ["acc_no"])), "AsString"))])));
    await $.mcall((await $.mv((await $.v(C, "DataModWares")), "ODSViewGr1")), "Next", []);
    await $.tick();
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFormAddGroups", "Edit2Enter", async function Edit2Enter(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mcall((await $.mv((await $.v(C, "ComboBox2")), "Items")), "Clear", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFormAddGroups", "Edit3Change", async function Edit3Change(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t4 = (await $.mv((await $.v(C, "DataModWares")), "ODSViewGr1"));
    await $.stmt($.wcall([$t4], "close", [], C));
    await $.stmt((await $.wcall([$t4], "SetVariable", ["a", (await $.mv((await $.wv([$t4], "edit3", C, false)), "Text"))], C)));
    await $.stmt($.wcall([$t4], "Open", [], C));
  }
  while ($.truthy($.not((await $.mv((await $.mv((await $.v(C, "DataModWares")), "ODSViewGr1")), "eof"))))) {
    await $.stmt((await $.mcall((await $.mv((await $.v(C, "CBoxCredAcc")), "Items")), "Add", [(await $.mv((await $.mcall((await $.mv((await $.v(C, "DataModWares")), "ODSViewGr1")), "FieldByName", ["acc_no"])), "AsString"))])));
    await $.mcall((await $.mv((await $.v(C, "DataModWares")), "ODSViewGr1")), "Next", []);
    await $.tick();
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFormAddGroups", "Edit3Enter", async function Edit3Enter(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFormAddGroups", "Edit4Change", async function Edit4Change(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t5 = (await $.mv((await $.v(C, "DataModWares")), "ODSViewGr1"));
    await $.stmt($.wcall([$t5], "close", [], C));
    await $.stmt((await $.wcall([$t5], "SetVariable", ["a", (await $.mv((await $.wv([$t5], "edit4", C, false)), "Text"))], C)));
    await $.stmt($.wcall([$t5], "Open", [], C));
  }
  while ($.truthy($.not((await $.mv((await $.mv((await $.v(C, "DataModWares")), "ODSViewGr1")), "eof"))))) {
    await $.stmt((await $.mcall((await $.mv((await $.v(C, "ComboBox4")), "Items")), "Add", [(await $.mv((await $.mcall((await $.mv((await $.v(C, "DataModWares")), "ODSViewGr1")), "FieldByName", ["acc_no"])), "AsString"))])));
    await $.mcall((await $.mv((await $.v(C, "DataModWares")), "ODSViewGr1")), "Next", []);
    await $.tick();
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFormAddGroups", "Edit4Enter", async function Edit4Enter(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mcall((await $.mv((await $.v(C, "ComboBox4")), "Items")), "Clear", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  return U;
}
