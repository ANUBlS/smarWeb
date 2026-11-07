// Generated from frmReserveInfImpl.pas by pas2js — do not edit by hand; regenerate instead.
/* eslint-disable */
// @ts-nocheck

export default function define($) {
  const U = $.unit("frmReserveInfImpl", ["Windows", "Messages", "SysUtils", "Classes", "Graphics", "Controls", "Forms", "Dialogs", "StdCtrls", "Mask", "DBCtrlsEh", "DBLookupEh", "ExtCtrls", "Buttons", "CMExcelExport", "ComCtrls", "DBGridEh", "dmReserveInfImpl", "CommonDecls", "sbsystem", "SBTranslateProc", "sboapiDataModuleimpl"]);
  const C = [U];
  U.defClass("TfrmReserveInf", "TForm", {"panel1": {"name": "Panel1", "type": "TPanel"}, "groupbox1": {"name": "GroupBox1", "type": "TGroupBox"}, "cbavalute": {"name": "CBaValute", "type": "TCheckBox"}, "lcbvalutes": {"name": "LCBValutes", "type": "TDBLookupComboboxEh"}, "groupbox3": {"name": "GroupBox3", "type": "TGroupBox"}, "lcbfilials": {"name": "LCBFilials", "type": "TDBLookupComboboxEh"}, "cbfilial": {"name": "CBFilial", "type": "TCheckBox"}, "panel2": {"name": "Panel2", "type": "TPanel"}, "groupbox4": {"name": "GroupBox4", "type": "TGroupBox"}, "cbcategories": {"name": "CBCategories", "type": "TCheckBox"}, "lcbcategories": {"name": "LCBCategories", "type": "TDBLookupComboboxEh"}, "groupbox6": {"name": "GroupBox6", "type": "TGroupBox"}, "lcbpersons": {"name": "LCBPersons", "type": "TDBLookupComboboxEh"}, "cbpersons": {"name": "CBPersons", "type": "TCheckBox"}, "panel3": {"name": "Panel3", "type": "TPanel"}, "groupbox7": {"name": "GroupBox7", "type": "TGroupBox"}, "cbreserve": {"name": "CBReserve", "type": "TCheckBox"}, "groupbox9": {"name": "GroupBox9", "type": "TGroupBox"}, "lcbcredittype": {"name": "LCBCreditType", "type": "TDBLookupComboboxEh"}, "cbcredittype": {"name": "CBCreditType", "type": "TCheckBox"}, "bitbtnok": {"name": "BitBtnOk", "type": "TBitBtn"}, "bitbtncancel": {"name": "BitBtnCancel", "type": "TBitBtn"}, "dtpdat": {"name": "DTPDat", "type": "TDateTimePicker"}, "animate1": {"name": "Animate1", "type": "TAnimate"}, "eexport": {"name": "EExport", "type": "TCMExcelExport"}, "chbactcrd": {"name": "ChBActCrd", "type": "TCheckBox"}}, {});
  U.init(async () => {
    U.var_("frmReserveInf", null, "TfrmReserveInf");
  });
  U.func("InitPlugin", async function InitPlugin(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"s": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["s"]);
  await $.mcall((await $.v(C, "frmReserveInf")), "ShowModal", []);
  return L0.result;
}, {"params": ["s"], "kind": "procedure", "ptypes": ["String"]});
  U.method("TfrmReserveInf", "FormCanResize", async function FormCanResize(Self, p0, p1, p2, p3) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "newwidth": $.asRef(p1), "newheight": $.asRef(p2), "resize": $.asRef(p3), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await L0["resize"].set(false);
  return L0.result;
}, {"params": ["Sender", "NewWidth", "NewHeight", "Resize"], "kind": "procedure", "ptypes": ["TObject", "Integer", "Integer", "Boolean"]});
  U.method("TfrmReserveInf", "FormKeyPress", async function FormKeyPress(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "key": $.asRef(p1), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.eq((await $.call(C, "ord", [(await L0["key"].get())])), (await $.v(C, "VK_ESCAPE"))))) {
    await $.stmt($.call(C, "close", []));
  }
  return L0.result;
}, {"params": ["Sender", "Key"], "kind": "procedure", "ptypes": ["TObject", "Char"]});
  U.method("TfrmReserveInf", "BuildFilterString", async function BuildFilterString(Self) {
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
  await $.stmt((await $.callv(L0["concatfilter"], [$.ref(async () => L0["result"], async ($t1) => { L0["result"] = $t1; }), "p.CURRENCY", (await $.mv((await $.v(C, "CBaValute")), "Checked")), (await $.mv((await $.v(C, "LCBValutes")), "KeyValue"))])));
  await $.stmt((await $.callv(L0["concatfilter"], [$.ref(async () => L0["result"], async ($t2) => { L0["result"] = $t2; }), "p.BRANCHID", (await $.mv((await $.v(C, "CBFilial")), "Checked")), (await $.mv((await $.v(C, "LCBFilials")), "KeyValue"))])));
  await $.stmt((await $.callv(L0["concatfilter"], [$.ref(async () => L0["result"], async ($t3) => { L0["result"] = $t3; }), "p.PERSONALTYPE", (await $.mv((await $.v(C, "CBPersons")), "Checked")), (await $.mv((await $.v(C, "LCBPersons")), "KeyValue"))])));
  await $.stmt((await $.callv(L0["concatfilter"], [$.ref(async () => L0["result"], async ($t4) => { L0["result"] = $t4; }), "p.CustomerTYPE", (await $.mv((await $.v(C, "CBCategories")), "Checked")), (await $.mv((await $.v(C, "LCBCategories")), "KeyValue"))])));
  await $.stmt((await $.callv(L0["concatfilter"], [$.ref(async () => L0["result"], async ($t5) => { L0["result"] = $t5; }), "p.CreditType", (await $.mv((await $.v(C, "CBCreditType")), "Checked")), (await $.mv((await $.v(C, "LCBCreditType")), "KeyValue"))])));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TfrmReserveInf", "FormCreate", async function FormCreate(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.set(C, "dmReserveInf", (await $.mcall((await $.v(C, "TdmReserveInf")), "create", [Self])));
  await $.stmt((await $.mcall((await $.v(C, "SBTranslateProc")), "TranslateAllCompForms", [Self, (await $.mv((await $.v(C, "sboapiDataModule")), "OrPack_SL"))])));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TfrmReserveInf", "FormDestroy", async function FormDestroy(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mcall((await $.v(C, "dmReserveInf")), "free", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TfrmReserveInf", "BitBtnOkClick", async function BitBtnOkClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "repdat": 0, "partkey": '', "filterstr": ''};
  await $.fixArgs(L0, ["sender"]);
  L0["repdat"] = (await $.call(C, "integer", [(await $.call(C, "trunc", [(await $.mv((await $.v(C, "DTPDat")), "DateTime"))]))]));
  await $.mset((await $.v(C, "Animate1")), "Visible", true);
  await $.mset((await $.v(C, "Animate1")), "Active", true);
  await $.mset((await $.v(C, "Animate1")), "CommonAVI", (await $.v(C, "aviFindFolder")));
  if ($.truthy((await $.mv((await $.v(C, "ChBActCrd")), "checked")))) {
    L0["partkey"] = "and p.partitionkey=0 ";
  } else {
    L0["partkey"] = "and p.partitionkey like '%'";
  }
  {
    const $t6 = (await $.wobj(C, "dmReserveInf"));
    const $t7 = (await $.wv([$t6], "ReserveInf", C, false));
    if ($.truthy((await $.wv([$t6, $t7], "Active", C, false)))) {
      await $.stmt($.wcall([$t6, $t7], "CloseAll", [], C));
    }
    await $.stmt((await $.wcall([$t6, $t7], "SetVariable", ["dat", (await $.wv([$t6, $t7], "repdat", { get: async () => L0["repdat"], set: async (v) => { L0["repdat"] = v; }, local: true }, false))], C)));
    if ($.truthy($.ne((await $.wv([$t6, $t7], "BuildFilterString", C, false)), ""))) {
      await $.wset([$t6, $t7], "FilterStr", $.add(" and ", (await $.wv([$t6, $t7], "BuildFilterString", C, false))), { get: async () => L0["filterstr"], set: async (v) => { L0["filterstr"] = v; }, local: true });
      { const $t8 = await $.iset((await $.wv([$t6, $t7], "SQL", C, false)), [48], (await $.wv([$t6, $t7], "FilterStr", { get: async () => L0["filterstr"], set: async (v) => { L0["filterstr"] = v; }, local: true }, false))); if ($t8 !== undefined) { await $.wset([$t6, $t7], "SQL", $t8, C); } }
    }
    { const $t9 = await $.iset((await $.wv([$t6, $t7], "SQL", C, false)), [50], (await $.wv([$t6, $t7], "partkey", { get: async () => L0["partkey"], set: async (v) => { L0["partkey"] = v; }, local: true }, false))); if ($t9 !== undefined) { await $.wset([$t6, $t7], "SQL", $t9, C); } }
    await $.stmt($.wcall([$t6, $t7], "open", [], C));
  }
  {
    const $t10 = (await $.wobj(C, "EExport"));
    await $.stmt($.wcall([$t10], "Connect", [], C));
    await $.stmt((await $.wcall([$t10], "ExportDataset", [(await $.mv((await $.wv([$t10], "dmReserveInf", C, false)), "ReserveInf")), "Ehtiyyat hesabati", (await $.wv([$t10], "true", C, false)), (await $.wv([$t10], "false", C, false))], C)));
    await $.stmt($.wcall([$t10], "Disconnect", [], C));
  }
  await $.mset((await $.v(C, "Animate1")), "Visible", false);
  await $.mset((await $.v(C, "Animate1")), "Active", false);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TfrmReserveInf", "FormShow", async function FormShow(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mset((await $.v(C, "DTPDat")), "DateTime", (await $.v(C, "Get_CurrentDate")));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.setInitialization(async function __initialization(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: undefined};
  await $.set(C, "frmReserveInf", (await $.mcall((await $.v(C, "TfrmReserveInf")), "Create", [(await $.v(C, "CommonApplication"))])));
  return L0.result;
});
  return U;
}
