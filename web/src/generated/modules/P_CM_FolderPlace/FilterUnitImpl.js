// Generated from FilterUnitImpl.pas by pas2js — do not edit by hand; regenerate instead.
/* eslint-disable */
// @ts-nocheck

export default function define($) {
  const U = $.unit("FilterUnitImpl", ["Windows", "Messages", "SysUtils", "Classes", "Graphics", "Controls", "Forms", "Dialogs", "ExtCtrls", "StdCtrls", "Mask", "DBCtrlsEh", "ComCtrls", "CMCurrencyEdit", "DBLookupEh", "DB", "DBGridEh", "FlFilterDataModuleImpl", "CommonDecls", "SBTranslateProc", "sboapiDataModuleImpl"]);
  const C = [U];
  U.defClass("TFilterMainForm", "TForm", {"panel1": {"name": "Panel1", "type": "TPanel"}, "groupbox1": {"name": "GroupBox1", "type": "TGroupBox"}, "checkbox1": {"name": "CheckBox1", "type": "TCheckBox"}, "groupbox3": {"name": "GroupBox3", "type": "TGroupBox"}, "panel2": {"name": "Panel2", "type": "TPanel"}, "button1": {"name": "Button1", "type": "TButton"}, "button2": {"name": "Button2", "type": "TButton"}, "button3": {"name": "Button3", "type": "TButton"}, "dblookupcomboboxeh1": {"name": "DBLookupComboboxEh1", "type": "TDBLookupComboboxEh"}, "dblookupcomboboxeh2": {"name": "DBLookupComboboxEh2", "type": "TDBLookupComboboxEh"}, "checkbox2": {"name": "CheckBox2", "type": "TCheckBox"}, "checkbox20": {"name": "CheckBox20", "type": "TCheckBox"}, "checkbox21": {"name": "CheckBox21", "type": "TCheckBox"}, "checkbox22": {"name": "CheckBox22", "type": "TCheckBox"}, "groupbox2": {"name": "GroupBox2", "type": "TGroupBox"}, "checkbox3": {"name": "CheckBox3", "type": "TCheckBox"}, "dblookupcomboboxeh3": {"name": "DBLookupComboboxEh3", "type": "TDBLookupComboboxEh"}, "checkbox4": {"name": "CheckBox4", "type": "TCheckBox"}, "checkbox5": {"name": "CheckBox5", "type": "TCheckBox"}, "checkbox6": {"name": "CheckBox6", "type": "TCheckBox"}, "checkbox7": {"name": "CheckBox7", "type": "TCheckBox"}, "checkbox8": {"name": "CheckBox8", "type": "TCheckBox"}, "image12": {"name": "Image12", "type": "TImage"}, "image1": {"name": "Image1", "type": "TImage"}, "image4": {"name": "Image4", "type": "TImage"}, "image3": {"name": "Image3", "type": "TImage"}, "image5": {"name": "Image5", "type": "TImage"}, "checkbox9": {"name": "CheckBox9", "type": "TCheckBox"}, "checkbox10": {"name": "CheckBox10", "type": "TCheckBox"}, "ffiltergrid": {"name": "FFilterGrid", "type": "TDBGridEh"}}, {});
  U.init(async () => {
    U.var_("FilterMainForm", null, "TFilterMainForm");
  });
  U.method("TFilterMainForm", "BuildFilterString", async function BuildFilterString(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: '', "temp": '', "temp1": ''};
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
  L0["concatfilter2"] = $.fn(async function ConcatFilter2(p0, p1, p2, p3) {
  const L1 = {"s": $.asRef(p0), "prefix": $.copyArg(p1), "checked": $.copyArg(p2), "keyvalue": $.copyArg(p3), result: undefined, "temp": ''};
  await $.fixArgs(L1, ["prefix", "checked", "keyvalue"]);
  L1["csformat"] = "(%s=%s)";
  if ($.truthy(L1["checked"])) {
    L1["temp"] = (await $.call(C, "Format", [L1["csformat"], [L1["prefix"], L1["keyvalue"]]]));
    if ($.truthy($.eq((await L1["s"].get()), ""))) {
      await L1["s"].set(L1["temp"]);
    } else {
      await L1["s"].set($.add($.add((await L1["s"].get()), " or "), L1["temp"]));
    }
  }
  return L1.result;
});
  L0["concatfilter3"] = $.fn(async function ConcatFilter3(p0, p1, p2, p3) {
  const L1 = {"s": $.asRef(p0), "prefix": $.copyArg(p1), "checked": $.copyArg(p2), "keyvalue": $.copyArg(p3), result: undefined, "temp": ''};
  await $.fixArgs(L1, ["prefix", "checked", "keyvalue"]);
  L1["csformat"] = "(%s=%s)";
  if ($.truthy(L1["checked"])) {
    L1["temp"] = (await $.call(C, "Format", [L1["csformat"], [L1["prefix"], L1["keyvalue"]]]));
    if ($.truthy($.eq((await L1["s"].get()), ""))) {
      await L1["s"].set(L1["temp"]);
    } else {
      await L1["s"].set($.add($.add((await L1["s"].get()), " or "), L1["temp"]));
    }
  }
  return L1.result;
});
  L0["result"] = "";
  L0["temp"] = "";
  L0["temp1"] = "";
  await $.stmt((await $.callv(L0["concatfilter"], [$.ref(async () => L0["result"], async ($t1) => { L0["result"] = $t1; }), "CURRENCY", (await $.mv((await $.v(C, "CheckBox1")), "Checked")), (await $.mv((await $.v(C, "DBLookupComboboxEh1")), "KeyValue"))])));
  await $.stmt((await $.callv(L0["concatfilter"], [$.ref(async () => L0["result"], async ($t2) => { L0["result"] = $t2; }), "BRANCHID", (await $.mv((await $.v(C, "CheckBox2")), "Checked")), (await $.mv((await $.v(C, "DBLookupComboboxEh2")), "KeyValue"))])));
  await $.stmt((await $.callv(L0["concatfilter"], [$.ref(async () => L0["result"], async ($t3) => { L0["result"] = $t3; }), "CREDITTYPE", (await $.mv((await $.v(C, "CheckBox3")), "Checked")), (await $.mv((await $.v(C, "DBLookupComboboxEh3")), "KeyValue"))])));
  await $.stmt((await $.callv(L0["concatfilter2"], [$.ref(async () => L0["temp"], async ($t4) => { L0["temp"] = $t4; }), "TrProcessed", (await $.mv((await $.v(C, "CheckBox22")), "Checked")), 1])));
  await $.stmt((await $.callv(L0["concatfilter2"], [$.ref(async () => L0["temp"], async ($t5) => { L0["temp"] = $t5; }), "TrProcessed", (await $.mv((await $.v(C, "CheckBox21")), "Checked")), 0])));
  await $.stmt((await $.callv(L0["concatfilter2"], [$.ref(async () => L0["temp"], async ($t6) => { L0["temp"] = $t6; }), "TrProcessed", (await $.mv((await $.v(C, "CheckBox4")), "Checked")), 2])));
  await $.stmt((await $.callv(L0["concatfilter2"], [$.ref(async () => L0["temp"], async ($t7) => { L0["temp"] = $t7; }), "TrProcessed", (await $.mv((await $.v(C, "CheckBox20")), "Checked")), 3])));
  await $.stmt((await $.callv(L0["concatfilter2"], [$.ref(async () => L0["temp"], async ($t8) => { L0["temp"] = $t8; }), "TrProcessed", (await $.mv((await $.v(C, "CheckBox5")), "Checked")), 4])));
  await $.stmt((await $.callv(L0["concatfilter3"], [$.ref(async () => L0["temp1"], async ($t9) => { L0["temp1"] = $t9; }), "due", (await $.mv((await $.v(C, "CheckBox6")), "Checked")), 0])));
  await $.stmt((await $.callv(L0["concatfilter3"], [$.ref(async () => L0["temp1"], async ($t10) => { L0["temp1"] = $t10; }), "due", (await $.mv((await $.v(C, "CheckBox7")), "Checked")), 1])));
  await $.stmt((await $.callv(L0["concatfilter3"], [$.ref(async () => L0["temp1"], async ($t11) => { L0["temp1"] = $t11; }), "due", (await $.mv((await $.v(C, "CheckBox8")), "Checked")), 2])));
  await $.stmt((await $.callv(L0["concatfilter3"], [$.ref(async () => L0["temp1"], async ($t12) => { L0["temp1"] = $t12; }), "dstatus", (await $.mv((await $.v(C, "CheckBox10")), "Checked")), 1])));
  if ($.truthy($.ne(L0["temp1"], ""))) {
    if ($.truthy($.ne(L0["result"], ""))) {
      L0["result"] = $.add(L0["result"], (await $.call(C, "Format", [" and (%s)", [L0["temp1"]]])));
    } else {
      L0["result"] = (await $.call(C, "Format", [" (%s)", [L0["temp1"]]]));
    }
  }
  if ($.truthy($.ne(L0["temp"], ""))) {
    if ($.truthy($.ne(L0["result"], ""))) {
      L0["result"] = $.add(L0["result"], (await $.call(C, "Format", [" and (%s)", [L0["temp"]]])));
    } else {
      L0["result"] = L0["temp"];
    }
  }
  await $.stmt((await $.call(C, "LogInformation", [L0["result"]])));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TFilterMainForm", "Button1Click", async function Button1Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t13 = (await $.wobj(C, "FFilterGrid"));
    const $t14 = (await $.mv((await $.wv([$t13], "DataSource", C, false)), "DataSet"));
    await $.wset([$t13, $t14], "Filter", (await $.wv([$t13, $t14], "BuildFilterString", C, false)), C);
    await $.wset([$t13, $t14], "Filtered", (await $.wv([$t13, $t14], "False", C, false)), C);
    await $.wset([$t13, $t14], "Filtered", (await $.wv([$t13, $t14], "True", C, false)), C);
    await $.mcall((await $.wv([$t13, $t14], "SelectedRows", C, false)), "Clear", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFilterMainForm", "Button2Click", async function Button2Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t15 = (await $.wobj(C, "FFilterGrid"));
    const $t16 = (await $.mv((await $.wv([$t15], "DataSource", C, false)), "DataSet"));
    await $.wset([$t15, $t16], "Filter", "", C);
    await $.wset([$t15, $t16], "Filtered", (await $.wv([$t15, $t16], "False", C, false)), C);
    await $.mcall((await $.wv([$t15, $t16], "SelectedRows", C, false)), "Clear", []);
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
  U.method("TFilterMainForm", "CheckBox9Click", async function CheckBox9Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy((await $.mv((await $.v(C, "CheckBox9")), "Checked")))) {
    await $.mset((await $.v(C, "CheckBox9")), "Caption", "Təmizlə");
    await $.mset((await $.v(C, "CheckBox20")), "Checked", true);
    await $.mset((await $.v(C, "CheckBox21")), "Checked", true);
    await $.mset((await $.v(C, "CheckBox22")), "Checked", true);
    await $.mset((await $.v(C, "CheckBox4")), "Checked", true);
    await $.mset((await $.v(C, "CheckBox5")), "Checked", true);
  } else {
    await $.mset((await $.v(C, "CheckBox9")), "Caption", "Hamsını seç ");
    await $.mset((await $.v(C, "CheckBox20")), "Checked", false);
    await $.mset((await $.v(C, "CheckBox21")), "Checked", false);
    await $.mset((await $.v(C, "CheckBox22")), "Checked", false);
    await $.mset((await $.v(C, "CheckBox4")), "Checked", false);
    await $.mset((await $.v(C, "CheckBox5")), "Checked", false);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFilterMainForm", "FormCreate", async function FormCreate(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.stmt((await $.mcall((await $.v(C, "SBTranslateProc")), "TranslateAllCompForms", [Self, (await $.mv((await $.v(C, "sboapiDataModule")), "OrPack_SL"))])));
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
  return U;
}
