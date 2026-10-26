// Generated from FrmCalcPerFilterImpl.pas by pas2js — do not edit by hand; regenerate instead.
/* eslint-disable */
// @ts-nocheck

export default function define($) {
  const U = $.unit("FrmCalcPerFilterImpl", ["Windows", "Messages", "SysUtils", "Classes", "Graphics", "Controls", "Forms", "Dialogs", "ExtCtrls", "StdCtrls", "Mask", "DBCtrlsEh", "DBLookupEh", "DBGridEh", "PercentConvertingImpl", "FrmPercentConvertingImpl"]);
  const C = [U];
  U.defClass("TFrmCalcPerFilter", "TForm", {"button1": {"name": "Button1", "type": "TButton"}, "button2": {"name": "Button2", "type": "TButton"}, "button3": {"name": "Button3", "type": "TButton"}, "panel1": {"name": "Panel1", "type": "TPanel"}, "panel3": {"name": "Panel3", "type": "TPanel"}, "groupbox4": {"name": "GroupBox4", "type": "TGroupBox"}, "lcbpersons": {"name": "LCBPersons", "type": "TDBLookupComboboxEh"}, "cbpersons": {"name": "CBPersons", "type": "TCheckBox"}, "groupbox5": {"name": "GroupBox5", "type": "TGroupBox"}, "lcbvalute": {"name": "LCBValute", "type": "TDBLookupComboboxEh"}, "cbvalute": {"name": "CBValute", "type": "TCheckBox"}, "groupbox6": {"name": "GroupBox6", "type": "TGroupBox"}, "lcbfilial": {"name": "LCBFilial", "type": "TDBLookupComboboxEh"}, "cbfilial": {"name": "CBFilial", "type": "TCheckBox"}, "panel4": {"name": "Panel4", "type": "TPanel"}, "groupbox7": {"name": "GroupBox7", "type": "TGroupBox"}, "lcbcustomer": {"name": "LCBCustomer", "type": "TDBLookupComboboxEh"}, "cbcustomer": {"name": "CBCustomer", "type": "TCheckBox"}, "groupbox8": {"name": "GroupBox8", "type": "TGroupBox"}, "lcbcategories": {"name": "LCBCategories", "type": "TDBLookupComboboxEh"}, "cbcategories": {"name": "CBCategories", "type": "TCheckBox"}, "groupbox9": {"name": "GroupBox9", "type": "TGroupBox"}, "lcbdeposittypes": {"name": "LCBDepositTypes", "type": "TDBLookupComboboxEh"}, "cbdeposittypes": {"name": "CBDepositTypes", "type": "TCheckBox"}, "panel2": {"name": "Panel2", "type": "TPanel"}, "image1": {"name": "Image1", "type": "TImage"}, "image2": {"name": "Image2", "type": "TImage"}, "image3": {"name": "Image3", "type": "TImage"}, "checkbox20": {"name": "CheckBox20", "type": "TCheckBox"}, "checkbox21": {"name": "CheckBox21", "type": "TCheckBox"}, "checkbox22": {"name": "CheckBox22", "type": "TCheckBox"}}, {});
  U.init(async () => {
    U.var_("FrmCalcPerFilter", null, "TFrmCalcPerFilter");
  });
  U.method("TFrmCalcPerFilter", "BuildFilterString", async function BuildFilterString(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: '', "temp": ''};
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
  L0["result"] = "";
  L0["temp"] = "";
  await $.stmt((await $.callv(L0["concatfilter"], [L0["result"], "CURRENCY", (await $.mv((await $.v(C, "CBValute")), "Checked")), (await $.mv((await $.v(C, "LCBValute")), "KeyValue"))])));
  await $.stmt((await $.callv(L0["concatfilter"], [L0["result"], "BRANCHID", (await $.mv((await $.v(C, "CBFilial")), "Checked")), (await $.mv((await $.v(C, "LCBFilial")), "KeyValue"))])));
  await $.stmt((await $.callv(L0["concatfilter"], [L0["result"], "PERSONALTYPE", (await $.mv((await $.v(C, "CBPersons")), "Checked")), (await $.mv((await $.v(C, "LCBPersons")), "KeyValue"))])));
  await $.stmt((await $.callv(L0["concatfilter"], [L0["result"], "CLIENTTYPE", (await $.mv((await $.v(C, "CBCategories")), "Checked")), (await $.mv((await $.v(C, "LCBCategories")), "KeyValue"))])));
  await $.stmt((await $.callv(L0["concatfilter"], [L0["result"], "ContractType", (await $.mv((await $.v(C, "CBDepositTypes")), "Checked")), (await $.mv((await $.v(C, "LCBDepositTypes")), "KeyValue"))])));
  await $.stmt((await $.callv(L0["concatfilter"], [L0["result"], "CUSTOMERID", (await $.mv((await $.v(C, "CBCustomer")), "Checked")), (await $.mv((await $.v(C, "LCBCustomer")), "KeyValue"))])));
  await $.stmt((await $.callv(L0["concatfilter2"], [L0["temp"], "STATUS", (await $.mv((await $.v(C, "CheckBox20")), "Checked")), (-(9))])));
  await $.stmt((await $.callv(L0["concatfilter2"], [L0["temp"], "STATUS", (await $.mv((await $.v(C, "CheckBox21")), "Checked")), (-(11))])));
  await $.stmt((await $.callv(L0["concatfilter2"], [L0["temp"], "STATUS", (await $.mv((await $.v(C, "CheckBox22")), "Checked")), (-(10))])));
  if ($.truthy($.ne(L0["temp"], ""))) {
    if ($.truthy($.ne(L0["result"], ""))) {
      L0["result"] = $.add(L0["result"], (await $.call(C, "Format", [" and (%s)", [L0["temp"]]])));
    } else {
      L0["result"] = L0["temp"];
    }
  }
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TFrmCalcPerFilter", "FormCanResize", async function FormCanResize(Self, p0, p1, p2, p3) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "newwidth": $.asRef(p1), "newheight": $.asRef(p2), "resize": $.asRef(p3), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await L0["resize"].set(false);
  return L0.result;
}, {"params": ["Sender", "NewWidth", "NewHeight", "Resize"], "kind": "procedure", "ptypes": ["TObject", "Integer", "Integer", "Boolean"]});
  U.method("TFrmCalcPerFilter", "FormKeyPress", async function FormKeyPress(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "key": $.asRef(p1), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.eq((await $.call(C, "ord", [(await L0["key"].get())])), (await $.v(C, "VK_ESCAPE"))))) {
    await $.stmt($.call(C, "Close", []));
  }
  return L0.result;
}, {"params": ["Sender", "Key"], "kind": "procedure", "ptypes": ["TObject", "Char"]});
  U.method("TFrmCalcPerFilter", "Button1Click", async function Button1Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t1 = (await $.v(C, "FrmPercentConverting"));
    const $t2 = (await $.wv([$t1], "calcPerGrid", C, false));
    const $t3 = (await $.wv([$t1, $t2], "SelectedRows", C, false));
    await $.stmt($.wcall([$t1, $t2, $t3], "Clear", [], C));
  }
  {
    const $t4 = (await $.v(C, "DMPercentConverting"));
    const $t5 = (await $.wv([$t4], "CalcedDeposits", C, false));
    await $.wset([$t4, $t5], "Filtered", (await $.wv([$t4, $t5], "False", C, false)), C);
    await $.wset([$t4, $t5], "Filter", (await $.wv([$t4, $t5], "BuildFilterString", C, false)), C);
    await $.wset([$t4, $t5], "Filtered", (await $.wv([$t4, $t5], "True", C, false)), C);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFrmCalcPerFilter", "Button2Click", async function Button2Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t6 = (await $.v(C, "DMPercentConverting"));
    const $t7 = (await $.wv([$t6], "CalcedDeposits", C, false));
    await $.wset([$t6, $t7], "Filtered", (await $.wv([$t6, $t7], "False", C, false)), C);
    await $.wset([$t6, $t7], "Filter", "", C);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFrmCalcPerFilter", "Button3Click", async function Button3Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.stmt($.call(C, "Close", []));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  return U;
}
