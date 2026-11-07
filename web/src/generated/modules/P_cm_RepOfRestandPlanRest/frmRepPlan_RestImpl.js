// Generated from frmRepPlan_RestImpl.pas by pas2js — do not edit by hand; regenerate instead.
/* eslint-disable */
// @ts-nocheck

export default function define($) {
  const U = $.unit("frmRepPlan_RestImpl", ["Windows", "Messages", "SysUtils", "Classes", "Graphics", "Controls", "Forms", "Dialogs", "StdCtrls", "Mask", "DBCtrlsEh", "DBLookupEh", "ExtCtrls", "Buttons", "ComCtrls", "CMExcelExport", "CommonDecls", "dmRepPlan_RestImpl", "Sbsystem", "SBTranslateProc", "sboapiDataModuleimpl"]);
  const C = [U];
  U.defClass("TfrmRepPlan_Rest", "TForm", {"panel1": {"name": "Panel1", "type": "TPanel"}, "groupbox1": {"name": "GroupBox1", "type": "TGroupBox"}, "checkbox1": {"name": "CheckBox1", "type": "TCheckBox"}, "dblookupcomboboxeh1": {"name": "DBLookupComboboxEh1", "type": "TDBLookupComboboxEh"}, "groupbox2": {"name": "GroupBox2", "type": "TGroupBox"}, "dblookupcomboboxeh3": {"name": "DBLookupComboboxEh3", "type": "TDBLookupComboboxEh"}, "checkbox3": {"name": "CheckBox3", "type": "TCheckBox"}, "groupbox3": {"name": "GroupBox3", "type": "TGroupBox"}, "dblookupcomboboxeh2": {"name": "DBLookupComboboxEh2", "type": "TDBLookupComboboxEh"}, "checkbox2": {"name": "CheckBox2", "type": "TCheckBox"}, "panel5": {"name": "Panel5", "type": "TPanel"}, "groupbox7": {"name": "GroupBox7", "type": "TGroupBox"}, "checkbox7": {"name": "CheckBox7", "type": "TCheckBox"}, "dblookupcomboboxeh7": {"name": "DBLookupComboboxEh7", "type": "TDBLookupComboboxEh"}, "groupbox8": {"name": "GroupBox8", "type": "TGroupBox"}, "checkbox9": {"name": "CheckBox9", "type": "TCheckBox"}, "dblookupcomboboxeh9": {"name": "DBLookupComboboxEh9", "type": "TDBLookupComboboxEh"}, "groupbox9": {"name": "GroupBox9", "type": "TGroupBox"}, "checkbox8": {"name": "CheckBox8", "type": "TCheckBox"}, "dblookupcomboboxeh8": {"name": "DBLookupComboboxEh8", "type": "TDBLookupComboboxEh"}, "panel2": {"name": "Panel2", "type": "TPanel"}, "groupbox4": {"name": "GroupBox4", "type": "TGroupBox"}, "checkbox4": {"name": "CheckBox4", "type": "TCheckBox"}, "dblookupcomboboxeh4": {"name": "DBLookupComboboxEh4", "type": "TDBLookupComboboxEh"}, "groupbox5": {"name": "GroupBox5", "type": "TGroupBox"}, "dblookupcomboboxeh6": {"name": "DBLookupComboboxEh6", "type": "TDBLookupComboboxEh"}, "checkbox6": {"name": "CheckBox6", "type": "TCheckBox"}, "groupbox6": {"name": "GroupBox6", "type": "TGroupBox"}, "dblookupcomboboxeh5": {"name": "DBLookupComboboxEh5", "type": "TDBLookupComboboxEh"}, "checkbox5": {"name": "CheckBox5", "type": "TCheckBox"}, "bitbtn1": {"name": "BitBtn1", "type": "TBitBtn"}, "dtprest": {"name": "DTPRest", "type": "TDateTimePicker"}, "excelexp": {"name": "ExcelExp", "type": "TCMExcelExport"}}, {});
  U.init(async () => {
    U.var_("frmRepPlan_Rest", null, "TfrmRepPlan_Rest");
  });
  U.func("InitPlugin", async function InitPlugin(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"s": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["s"]);
  await $.mcall((await $.v(C, "frmRepPlan_Rest")), "ShowModal", []);
  return L0.result;
}, {"params": ["S"], "kind": "procedure", "ptypes": ["String"]});
  U.method("TfrmRepPlan_Rest", "BuildFilterString", async function BuildFilterString(Self) {
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
  await $.stmt((await $.callv(L0["concatfilter"], [$.ref(async () => L0["result"], async ($t1) => { L0["result"] = $t1; }), "p.CURRENCY", (await $.mv((await $.v(C, "CheckBox1")), "Checked")), (await $.mv((await $.v(C, "DBLookupComboboxEh1")), "KeyValue"))])));
  await $.stmt((await $.callv(L0["concatfilter"], [$.ref(async () => L0["result"], async ($t2) => { L0["result"] = $t2; }), "p.BRANCHID", (await $.mv((await $.v(C, "CheckBox2")), "Checked")), (await $.mv((await $.v(C, "DBLookupComboboxEh2")), "KeyValue"))])));
  await $.stmt((await $.callv(L0["concatfilter"], [$.ref(async () => L0["result"], async ($t3) => { L0["result"] = $t3; }), "p.USRGROUP", (await $.mv((await $.v(C, "CheckBox3")), "Checked")), (await $.mv((await $.v(C, "DBLookupComboboxEh3")), "KeyValue"))])));
  await $.stmt((await $.callv(L0["concatfilter"], [$.ref(async () => L0["result"], async ($t4) => { L0["result"] = $t4; }), "h.RESERVEID", (await $.mv((await $.v(C, "CheckBox4")), "Checked")), (await $.mv((await $.v(C, "DBLookupComboboxEh4")), "KeyValue"))])));
  await $.stmt((await $.callv(L0["concatfilter"], [$.ref(async () => L0["result"], async ($t5) => { L0["result"] = $t5; }), "h.DUERESERVEID", (await $.mv((await $.v(C, "CheckBox5")), "Checked")), (await $.mv((await $.v(C, "DBLookupComboboxEh5")), "KeyValue"))])));
  await $.stmt((await $.callv(L0["concatfilter"], [$.ref(async () => L0["result"], async ($t6) => { L0["result"] = $t6; }), "p.USID", (await $.mv((await $.v(C, "CheckBox6")), "Checked")), (await $.mv((await $.v(C, "DBLookupComboboxEh6")), "KeyValue"))])));
  await $.stmt((await $.callv(L0["concatfilter"], [$.ref(async () => L0["result"], async ($t7) => { L0["result"] = $t7; }), "p.PERSONALTYPE", (await $.mv((await $.v(C, "CheckBox7")), "Checked")), (await $.mv((await $.v(C, "DBLookupComboboxEh7")), "KeyValue"))])));
  await $.stmt((await $.callv(L0["concatfilter"], [$.ref(async () => L0["result"], async ($t8) => { L0["result"] = $t8; }), "p.CUSTOMERTYPE", (await $.mv((await $.v(C, "CheckBox8")), "Checked")), (await $.mv((await $.v(C, "DBLookupComboboxEh8")), "KeyValue"))])));
  await $.stmt((await $.callv(L0["concatfilter"], [$.ref(async () => L0["result"], async ($t9) => { L0["result"] = $t9; }), "p.CREDITTYPE", (await $.mv((await $.v(C, "CheckBox9")), "Checked")), (await $.mv((await $.v(C, "DBLookupComboboxEh9")), "KeyValue"))])));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TfrmRepPlan_Rest", "FormCanResize", async function FormCanResize(Self, p0, p1, p2, p3) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "newwidth": $.asRef(p1), "newheight": $.asRef(p2), "resize": $.asRef(p3), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await L0["resize"].set(false);
  return L0.result;
}, {"params": ["Sender", "NewWidth", "NewHeight", "Resize"], "kind": "procedure", "ptypes": ["TObject", "Integer", "Integer", "Boolean"]});
  U.method("TfrmRepPlan_Rest", "FormKeyPress", async function FormKeyPress(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "key": $.asRef(p1), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.eq((await $.call(C, "ord", [(await L0["key"].get())])), (await $.v(C, "VK_ESCAPE"))))) {
    await $.stmt($.call(C, "close", []));
  }
  return L0.result;
}, {"params": ["Sender", "Key"], "kind": "procedure", "ptypes": ["TObject", "Char"]});
  U.method("TfrmRepPlan_Rest", "FormCreate", async function FormCreate(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.set(C, "dmRepPlan_Rest", (await $.mcall((await $.v(C, "TdmRepPlan_Rest")), "create", [Self])));
  await $.mset((await $.v(C, "DTPRest")), "DateTime", (await $.v(C, "Get_CurrentDate")));
  await $.stmt((await $.mcall((await $.v(C, "SBTranslateProc")), "TranslateAllCompForms", [Self, (await $.mv((await $.v(C, "sboapiDataModule")), "OrPack_SL"))])));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TfrmRepPlan_Rest", "FormDestroy", async function FormDestroy(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mcall((await $.v(C, "dmRepPlan_Rest")), "free", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TfrmRepPlan_Rest", "BitBtn1Click", async function BitBtn1Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "repdat": 0};
  await $.fixArgs(L0, ["sender"]);
  L0["repdat"] = (await $.call(C, "integer", [(await $.call(C, "trunc", [(await $.mv((await $.v(C, "DTPRest")), "DateTime"))]))]));
  {
    const $t10 = (await $.wobj(C, "dmRepPlan_Rest"));
    const $t11 = (await $.wv([$t10], "R", C, false));
    if ($.truthy((await $.wv([$t10, $t11], "Active", C, false)))) {
      await $.stmt($.wcall([$t10, $t11], "Close", [], C));
    }
    await $.stmt((await $.wcall([$t10, $t11], "SetVariable", ["dat", (await $.wv([$t10, $t11], "repdat", { get: async () => L0["repdat"], set: async (v) => { L0["repdat"] = v; }, local: true }, false))], C)));
    if ($.truthy($.ne((await $.wv([$t10, $t11], "BuildFilterString", C, false)), ""))) {
      { const $t12 = await $.iset((await $.wv([$t10, $t11], "sql", C, false)), [17], $.add(" and  ", (await $.wv([$t10, $t11], "BuildFilterString", C, false)))); if ($t12 !== undefined) { await $.wset([$t10, $t11], "sql", $t12, C); } }
    }
    await $.stmt($.wcall([$t10, $t11], "open", [], C));
  }
  {
    const $t13 = (await $.wobj(C, "ExcelExp"));
    await $.stmt($.wcall([$t13], "Connect", [], C));
    await $.stmt((await $.wcall([$t13], "ExportDataset", [(await $.mv((await $.wv([$t13], "dmRepPlan_Rest", C, false)), "R")), "IP", (await $.wv([$t13], "true", C, false))], C)));
    await $.stmt($.wcall([$t13], "Disconnect", [], C));
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.setInitialization(async function __initialization(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: undefined};
  await $.set(C, "frmRepPlan_Rest", (await $.mcall((await $.v(C, "TfrmRepPlan_Rest")), "create", [(await $.v(C, "CommonApplication"))])));
  return L0.result;
});
  return U;
}
