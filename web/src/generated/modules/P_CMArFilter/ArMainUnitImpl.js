// Generated from ArMainUnitImpl.pas by pas2js — do not edit by hand; regenerate instead.
/* eslint-disable */
// @ts-nocheck

export default function define($) {
  const U = $.unit("ArMainUnitImpl", ["Windows", "Messages", "SysUtils", "Classes", "Graphics", "Controls", "Forms", "Dialogs", "ExtCtrls", "StdCtrls", "Mask", "DBCtrlsEh", "ComCtrls", "CMCurrencyEdit", "DBLookupEh", "DBGridEh", "ArCommonDecls", "SbSystem", "ArDataModuleImpl", "SBTranslateProc", "sboapiDataModuleImpl"]);
  const C = [U];
  U.defClass("TFilterMainForm", "TForm", {"panel1": {"name": "Panel1", "type": "TPanel"}, "groupbox1": {"name": "GroupBox1", "type": "TGroupBox"}, "groupbox2": {"name": "GroupBox2", "type": "TGroupBox"}, "checkbox1": {"name": "CheckBox1", "type": "TCheckBox"}, "groupbox3": {"name": "GroupBox3", "type": "TGroupBox"}, "panel2": {"name": "Panel2", "type": "TPanel"}, "groupbox4": {"name": "GroupBox4", "type": "TGroupBox"}, "checkbox4": {"name": "CheckBox4", "type": "TCheckBox"}, "groupbox5": {"name": "GroupBox5", "type": "TGroupBox"}, "groupbox6": {"name": "GroupBox6", "type": "TGroupBox"}, "panel5": {"name": "Panel5", "type": "TPanel"}, "groupbox7": {"name": "GroupBox7", "type": "TGroupBox"}, "checkbox7": {"name": "CheckBox7", "type": "TCheckBox"}, "groupbox8": {"name": "GroupBox8", "type": "TGroupBox"}, "checkbox9": {"name": "CheckBox9", "type": "TCheckBox"}, "groupbox9": {"name": "GroupBox9", "type": "TGroupBox"}, "checkbox8": {"name": "CheckBox8", "type": "TCheckBox"}, "panel9": {"name": "Panel9", "type": "TPanel"}, "groupbox10": {"name": "GroupBox10", "type": "TGroupBox"}, "checkbox10": {"name": "CheckBox10", "type": "TCheckBox"}, "button1": {"name": "Button1", "type": "TButton"}, "button2": {"name": "Button2", "type": "TButton"}, "button3": {"name": "Button3", "type": "TButton"}, "groupbox11": {"name": "GroupBox11", "type": "TGroupBox"}, "checkbox11": {"name": "CheckBox11", "type": "TCheckBox"}, "dblookupcomboboxeh1": {"name": "DBLookupComboboxEh1", "type": "TDBLookupComboboxEh"}, "dblookupcomboboxeh2": {"name": "DBLookupComboboxEh2", "type": "TDBLookupComboboxEh"}, "dblookupcomboboxeh3": {"name": "DBLookupComboboxEh3", "type": "TDBLookupComboboxEh"}, "dblookupcomboboxeh4": {"name": "DBLookupComboboxEh4", "type": "TDBLookupComboboxEh"}, "dblookupcomboboxeh5": {"name": "DBLookupComboboxEh5", "type": "TDBLookupComboboxEh"}, "dblookupcomboboxeh6": {"name": "DBLookupComboboxEh6", "type": "TDBLookupComboboxEh"}, "dblookupcomboboxeh7": {"name": "DBLookupComboboxEh7", "type": "TDBLookupComboboxEh"}, "dblookupcomboboxeh8": {"name": "DBLookupComboboxEh8", "type": "TDBLookupComboboxEh"}, "dblookupcomboboxeh9": {"name": "DBLookupComboboxEh9", "type": "TDBLookupComboboxEh"}, "dblookupcomboboxeh10": {"name": "DBLookupComboboxEh10", "type": "TDBLookupComboboxEh"}, "dblookupcomboboxeh11": {"name": "DBLookupComboboxEh11", "type": "TDBLookupComboboxEh"}, "checkbox2": {"name": "CheckBox2", "type": "TCheckBox"}, "checkbox3": {"name": "CheckBox3", "type": "TCheckBox"}, "checkbox5": {"name": "CheckBox5", "type": "TCheckBox"}, "checkbox6": {"name": "CheckBox6", "type": "TCheckBox"}, "checkbox12": {"name": "CheckBox12", "type": "TCheckBox"}}, {});
  U.init(async () => {
    U.const("LoadingFailed", false);
    U.var_("FilterMainForm", null, "TFilterMainForm");
  });
  U.method("TFilterMainForm", "BuildFilterString", async function BuildFilterString(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: ''};
  L0["concatfilter"] = $.fn(async function ConcatFilter(p0, p1, p2, p3) {
  const L1 = {"s": $.asRef(p0), "prefix": $.copyArg(p1), "checked": $.copyArg(p2), "keyvalue": $.copyArg(p3), result: undefined, "temp": ''};
  await $.fixArgs(L1, ["prefix", "checked", "keyvalue"]);
  L1["csformat"] = "(%s=%s)";
  if ($.truthy(L1["checked"])) {
    L1["temp"] = (await $.call(C, "Format", [L1["csformat"], [L1["prefix"], L1["keyvalue"]]]));
    if ($.truthy($.eq((await L1["s"].get()), ""))) {
      await L1["s"].set(L1["temp"]);
    } else {
      await L1["s"].set($.add($.add((await L1["s"].get()), "and "), L1["temp"]));
    }
  }
  return L1.result;
});
  L0["result"] = "";
  await $.stmt((await $.callv(L0["concatfilter"], [L0["result"], "CURRENCY", (await $.mv((await $.v(C, "CheckBox1")), "Checked")), (await $.mv((await $.v(C, "DBLookupComboboxEh1")), "KeyValue"))])));
  await $.stmt((await $.callv(L0["concatfilter"], [L0["result"], "BRANCHID", (await $.mv((await $.v(C, "CheckBox2")), "Checked")), (await $.mv((await $.v(C, "DBLookupComboboxEh2")), "KeyValue"))])));
  await $.stmt((await $.callv(L0["concatfilter"], [L0["result"], "USRGROUP", (await $.mv((await $.v(C, "CheckBox3")), "Checked")), (await $.mv((await $.v(C, "DBLookupComboboxEh3")), "KeyValue"))])));
  await $.stmt((await $.callv(L0["concatfilter"], [L0["result"], "RESERVEID", (await $.mv((await $.v(C, "CheckBox4")), "Checked")), (await $.mv((await $.v(C, "DBLookupComboboxEh4")), "KeyValue"))])));
  await $.stmt((await $.callv(L0["concatfilter"], [L0["result"], "AIM_ID", (await $.mv((await $.v(C, "CheckBox5")), "Checked")), (await $.mv((await $.v(C, "DBLookupComboboxEh5")), "KeyValue"))])));
  await $.stmt((await $.callv(L0["concatfilter"], [L0["result"], "USID", (await $.mv((await $.v(C, "CheckBox6")), "Checked")), (await $.mv((await $.v(C, "DBLookupComboboxEh6")), "KeyValue"))])));
  await $.stmt((await $.callv(L0["concatfilter"], [L0["result"], "PERSONALTYPE", (await $.mv((await $.v(C, "CheckBox7")), "Checked")), (await $.mv((await $.v(C, "DBLookupComboboxEh7")), "KeyValue"))])));
  await $.stmt((await $.callv(L0["concatfilter"], [L0["result"], "CUSTOMERTYPE", (await $.mv((await $.v(C, "CheckBox8")), "Checked")), (await $.mv((await $.v(C, "DBLookupComboboxEh8")), "KeyValue"))])));
  await $.stmt((await $.callv(L0["concatfilter"], [L0["result"], "CREDITTYPE", (await $.mv((await $.v(C, "CheckBox9")), "Checked")), (await $.mv((await $.v(C, "DBLookupComboboxEh9")), "KeyValue"))])));
  await $.stmt((await $.callv(L0["concatfilter"], [L0["result"], "PLEDGEID", (await $.mv((await $.v(C, "CheckBox10")), "Checked")), (await $.mv((await $.v(C, "DBLookupComboboxEh10")), "KeyValue"))])));
  await $.stmt((await $.callv(L0["concatfilter"], [L0["result"], "BOOROWERID", (await $.mv((await $.v(C, "CheckBox11")), "Checked")), (await $.mv((await $.v(C, "DBLookupComboboxEh11")), "KeyValue"))])));
  await $.stmt((await $.callv(L0["concatfilter"], [L0["result"], "ID", (await $.mv((await $.v(C, "CheckBox12")), "Checked")), "select creditid from cm_payments where paydate=sbop.get_date"])));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TFilterMainForm", "FormCreate", async function FormCreate(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  try {
    await $.set(C, "ArFilterDataModule", (await $.mcall((await $.v(C, "TArFilterDataModule")), "Create", [Self])));
  } catch ($t1) {
    $.rethrowControl($t1);
    $.handled($t1);
    await $.set(C, "LoadingFailed", true);
  }
  await $.stmt((await $.mcall((await $.v(C, "SBTranslateProc")), "TranslateAllCompForms", [Self, (await $.mv((await $.v(C, "sboapiDataModule")), "OrPack_SL"))])));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFilterMainForm", "FormDestroy", async function FormDestroy(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mcall((await $.v(C, "ArFilterDataModule")), "Free", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.func("InitPlugin", async function InitPlugin(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"s": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["s"]);
  if ($.truthy($.not((await $.v(C, "LoadingFailed"))))) {
    await $.mcall((await $.v(C, "FilterMainForm")), "Show", []);
  }
  return L0.result;
}, {"params": ["S"], "kind": "procedure", "ptypes": ["String"]});
  U.method("TFilterMainForm", "Button1Click", async function Button1Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t2 = (await $.v(C, "CommonDBGrid"));
    const $t3 = (await $.mv((await $.wv([$t2], "DataSource", C, false)), "DataSet"));
    await $.wset([$t2, $t3], "Filter", (await $.wv([$t2, $t3], "BuildFilterString", C, false)), C);
    await $.wset([$t2, $t3], "Filtered", (await $.wv([$t2, $t3], "False", C, false)), C);
    await $.wset([$t2, $t3], "Filtered", (await $.wv([$t2, $t3], "True", C, false)), C);
    await $.mcall((await $.wv([$t2, $t3], "SelectedRows", C, false)), "Clear", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFilterMainForm", "Button2Click", async function Button2Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t4 = (await $.v(C, "CommonDBGrid"));
    const $t5 = (await $.mv((await $.wv([$t4], "DataSource", C, false)), "DataSet"));
    await $.wset([$t4, $t5], "Filter", "", C);
    await $.wset([$t4, $t5], "Filtered", (await $.wv([$t4, $t5], "False", C, false)), C);
    await $.mcall((await $.wv([$t4, $t5], "SelectedRows", C, false)), "Clear", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFilterMainForm", "Button3Click", async function Button3Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.stmt($.call(C, "Close", []));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFilterMainForm", "FormKeyPress", async function FormKeyPress(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "key": $.asRef(p1), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.eq((await $.call(C, "Ord", [(await L0["key"].get())])), (await $.v(C, "VK_ESCAPE"))))) {
    await $.stmt($.call(C, "Close", []));
    await L0["key"].set("\u0000");
  }
  return L0.result;
}, {"params": ["Sender", "Key"], "kind": "procedure", "ptypes": ["TObject", "Char"]});
  U.setInitialization(async function __initialization(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: undefined};
  await $.set(C, "FilterMainForm", (await $.mcall((await $.v(C, "TFilterMainForm")), "Create", [(await $.v(C, "CommonApplication"))])));
  return L0.result;
});
  return U;
}
