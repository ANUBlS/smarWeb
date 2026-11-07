// Generated from FilterUnit.pas by pas2js — do not edit by hand; regenerate instead.
/* eslint-disable */
// @ts-nocheck

export default function define($) {
  const U = $.unit("FilterUnit", ["Windows", "Messages", "SysUtils", "Classes", "Graphics", "Controls", "Forms", "Dialogs", "StdCtrls", "ExtCtrls", "Mask", "DBCtrlsEh", "DBLookupEh", "CheckLst", "Evanescence", "Buttons", "ActnList", "CustAnalysDataModuleImpl", "CreditUnit"]);
  const C = [U];
  U.defClass("TFilterForm", "TForm", {"panel1": {"name": "Panel1", "type": "TPanel"}, "panel2": {"name": "Panel2", "type": "TPanel"}, "groupbox2": {"name": "GroupBox2", "type": "TGroupBox"}, "evanescencevalute": {"name": "EvanescenceValute", "type": "TEvanescence"}, "checkboxvalute": {"name": "CheckBoxValute", "type": "TCheckBox"}, "groupbox1": {"name": "GroupBox1", "type": "TGroupBox"}, "evanescencefilial": {"name": "EvanescenceFilial", "type": "TEvanescence"}, "checkboxfilial": {"name": "CheckBoxFilial", "type": "TCheckBox"}, "panel3": {"name": "Panel3", "type": "TPanel"}, "groupbox3": {"name": "GroupBox3", "type": "TGroupBox"}, "dblookupcomehcustomer": {"name": "DBLookupComEhCustomer", "type": "TDBLookupComboboxEh"}, "checkboxcustomer": {"name": "CheckBoxCustomer", "type": "TCheckBox"}, "groupbox4": {"name": "GroupBox4", "type": "TGroupBox"}, "dblookupcomehcredittype": {"name": "DBLookupComEhCredittype", "type": "TDBLookupComboboxEh"}, "groupbox5": {"name": "GroupBox5", "type": "TGroupBox"}, "dblookupcomehcategories": {"name": "DBLookupComEhCategories", "type": "TDBLookupComboboxEh"}, "checkboxcategories": {"name": "CheckBoxCategories", "type": "TCheckBox"}, "groupbox6": {"name": "GroupBox6", "type": "TGroupBox"}, "dblookupcomehusersgroup": {"name": "DBLookupComEhUsersGroup", "type": "TDBLookupComboboxEh"}, "checkboxusersgroup": {"name": "CheckBoxUsersgroup", "type": "TCheckBox"}, "groupbox7": {"name": "GroupBox7", "type": "TGroupBox"}, "dblookupcomehusers": {"name": "DBLookupComEhUsers", "type": "TDBLookupComboboxEh"}, "checkboxusers": {"name": "CheckBoxUsers", "type": "TCheckBox"}, "groupbox8": {"name": "GroupBox8", "type": "TGroupBox"}, "dblookupcomehpersons": {"name": "DBLookupComEhPersons", "type": "TDBLookupComboboxEh"}, "checkboxpersons": {"name": "CheckBoxPersons", "type": "TCheckBox"}, "checkboxcredittype": {"name": "CheckBoxCreditType", "type": "TCheckBox"}, "panel4": {"name": "Panel4", "type": "TPanel"}, "actionlist1": {"name": "ActionList1", "type": "TActionList"}, "actionflteraccept": {"name": "ActionFlterAccept", "type": "TAction"}, "actionfilterreject": {"name": "ActionFilterReject", "type": "TAction"}, "speedbutton1": {"name": "SpeedButton1", "type": "TSpeedButton"}, "speedbutton2": {"name": "SpeedButton2", "type": "TSpeedButton"}, "speedbutton3": {"name": "SpeedButton3", "type": "TSpeedButton"}}, {});
  U.init(async () => {
    U.var_("FilterForm", null, "TFilterForm");
  });
  U.method("TFilterForm", "FilterString", async function FilterString(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: '', "scurrency": '', "sbranchid": '', "spersons": '', "sandpersons": '', "susers": '', "sandusers": '', "sandcustomertype": '', "scustomertype": '', "sandcredittype": '', "scredittype": '', "susergroup": '', "sandusergroup": '', "scustomer": '', "sandcustomer": '', "mass": $.sarr(), "i": 0};
  L0["f_ev"] = $.fn(async function F_Ev(p0, p1, p2) {
  const L1 = {"cs": $.copyArg(p0), "checked": $.copyArg(p1), "ev": $.copyArg(p2), result: '', "s": '', "s1": '', "i": 0};
  await $.fixArgs(L1, ["cs", "checked", "ev"]);
  L1["s"] = "";
  L1["s1"] = "";
  if ($.truthy(L1["checked"])) {
    { const $t1 = $.sub((await $.mv((await $.mv(L1["ev"], "GetCheckedKeyList")), "Count")), 1);
      L1["i"] = 0;
      let $t2 = true;
      for (;;) {
        if (!$t2) { L1["i"] = $.succ(L1["i"], 1); }
        $t2 = false;
        if (!($.ord(L1["i"]) <= $.ord($t1))) break;
        L1["s1"] = $.add($.add($.add($.add("(", L1["cs"]), "="), (await $.idx((await $.mv(L1["ev"], "GetCheckedKeyList")), [L1["i"]]))), ")");
        if ($.truthy($.eq(L1["s"], ""))) {
          L1["s"] = L1["s1"];
        } else {
          L1["s"] = $.add($.add(L1["s"], " or "), L1["s1"]);
        }
        await $.tick();
      }
    }
    L1["result"] = L1["s"];
  } else {
    L1["result"] = "";
  }
  return L1.result;
});
  L0["f_lcomb"] = $.fn(async function F_LCOMB(p0, p1, p2, p3) {
  const L1 = {"cs": $.copyArg(p0), "cd": $.copyArg(p1), "checked": $.copyArg(p2), "comb": $.copyArg(p3), result: '', "kv": ''};
  await $.fixArgs(L1, ["cs", "cd", "checked", "comb"]);
  if ($.truthy(L1["checked"])) {
    L1["kv"] = (await $.call(C, "String", [(await $.mv(L1["comb"], "KeyValue"))]));
    L1["result"] = $.add($.add($.add($.add($.add(L1["cd"], "("), L1["cs"]), "="), L1["kv"]), ")");
  } else {
    L1["result"] = "";
  }
  return L1.result;
});
  L0["sandpersons"] = (await $.callv(L0["f_lcomb"], ["PERSONALTYPE", "AND", (await $.mv((await $.v(C, "CheckBoxPersons")), "Checked")), (await $.v(C, "DBLookupComEhPersons"))]));
  L0["spersons"] = (await $.callv(L0["f_lcomb"], ["PERSONALTYPE", "", (await $.mv((await $.v(C, "CheckBoxPersons")), "Checked")), (await $.v(C, "DBLookupComEhPersons"))]));
  L0["sandusers"] = (await $.callv(L0["f_lcomb"], ["USID", "AND", (await $.mv((await $.v(C, "CheckBoxUsers")), "Checked")), (await $.v(C, "DBLookupComEhUsers"))]));
  L0["susers"] = (await $.callv(L0["f_lcomb"], ["USID", "", (await $.mv((await $.v(C, "CheckBoxUsers")), "Checked")), (await $.v(C, "DBLookupComEhUsers"))]));
  L0["sandusergroup"] = (await $.callv(L0["f_lcomb"], ["USRGROUP", "AND", (await $.mv((await $.v(C, "CheckBoxUsersgroup")), "Checked")), (await $.v(C, "DBLookupComEhUsersGroup"))]));
  L0["susergroup"] = (await $.callv(L0["f_lcomb"], ["USRGROUP", "", (await $.mv((await $.v(C, "CheckBoxUsersgroup")), "Checked")), (await $.v(C, "DBLookupComEhUsersGroup"))]));
  L0["sandcustomertype"] = (await $.callv(L0["f_lcomb"], ["CUSTOMERTYPE", "AND", (await $.mv((await $.v(C, "CheckBoxCategories")), "Checked")), (await $.v(C, "DBLookupComEhCategories"))]));
  L0["scustomertype"] = (await $.callv(L0["f_lcomb"], ["CUSTOMERTYPE", "", (await $.mv((await $.v(C, "CheckBoxCategories")), "Checked")), (await $.v(C, "DBLookupComEhCategories"))]));
  L0["sandcredittype"] = (await $.callv(L0["f_lcomb"], ["CREDITTYPE", "AND", (await $.mv((await $.v(C, "CheckBoxCreditType")), "Checked")), (await $.v(C, "DBLookupComEhCredittype"))]));
  L0["scredittype"] = (await $.callv(L0["f_lcomb"], ["CREDITTYPE", "", (await $.mv((await $.v(C, "CheckBoxCreditType")), "Checked")), (await $.v(C, "DBLookupComEhCredittype"))]));
  L0["sandcustomer"] = (await $.callv(L0["f_lcomb"], ["BOOROWERID", "AND", (await $.mv((await $.v(C, "CheckBoxCustomer")), "Checked")), (await $.v(C, "DBLookupComEhCustomer"))]));
  L0["scustomer"] = (await $.callv(L0["f_lcomb"], ["BOOROWERID", "", (await $.mv((await $.v(C, "CheckBoxCustomer")), "Checked")), (await $.v(C, "DBLookupComEhCustomer"))]));
  L0["scurrency"] = (await $.callv(L0["f_ev"], ["CURRENCY", (await $.mv((await $.v(C, "CheckBoxValute")), "Checked")), (await $.v(C, "EvanescenceValute"))]));
  L0["sbranchid"] = (await $.callv(L0["f_ev"], ["BRANCHID", (await $.mv((await $.v(C, "CheckBoxFilial")), "Checked")), (await $.v(C, "EvanescenceFilial"))]));
  if ($.truthy((await $.and_(($.ne(L0["scurrency"], "")), async () => ($.ne(L0["sbranchid"], "")))))) {
    L0["result"] = $.add($.add($.add($.add($.add($.add($.add($.add(L0["scurrency"], "and"), L0["sbranchid"]), L0["sandpersons"]), L0["sandusers"]), L0["sandcustomertype"]), L0["sandcredittype"]), L0["sandusergroup"]), L0["sandcustomer"]);
  }
  if ($.truthy((await $.and_(($.ne(L0["scurrency"], "")), async () => ($.eq(L0["sbranchid"], "")))))) {
    L0["result"] = $.add($.add($.add($.add($.add($.add(L0["scurrency"], L0["sandpersons"]), L0["sandusers"]), L0["sandcustomertype"]), L0["sandcredittype"]), L0["sandusergroup"]), L0["sandcustomer"]);
  }
  if ($.truthy((await $.and_(($.eq(L0["scurrency"], "")), async () => ($.ne(L0["sbranchid"], "")))))) {
    L0["result"] = $.add($.add($.add($.add($.add($.add(L0["sbranchid"], L0["sandpersons"]), L0["sandusers"]), L0["sandcustomertype"]), L0["sandcredittype"]), L0["sandusergroup"]), L0["sandcustomer"]);
  }
  { const $t3 = await $.iset(L0["mass"], [1], L0["spersons"]); if ($t3 !== undefined) { L0["mass"] = $t3; } }
  { const $t4 = await $.iset(L0["mass"], [2], L0["susers"]); if ($t4 !== undefined) { L0["mass"] = $t4; } }
  { const $t5 = await $.iset(L0["mass"], [3], L0["scustomertype"]); if ($t5 !== undefined) { L0["mass"] = $t5; } }
  { const $t6 = await $.iset(L0["mass"], [4], L0["scredittype"]); if ($t6 !== undefined) { L0["mass"] = $t6; } }
  { const $t7 = await $.iset(L0["mass"], [5], L0["susergroup"]); if ($t7 !== undefined) { L0["mass"] = $t7; } }
  { const $t8 = await $.iset(L0["mass"], [6], L0["scustomer"]); if ($t8 !== undefined) { L0["mass"] = $t8; } }
  if ($.truthy((await $.and_(($.eq(L0["scurrency"], "")), async () => ($.eq(L0["sbranchid"], "")))))) {
    L0["result"] = "";
    { const $t9 = 6;
      L0["i"] = 1;
      let $t10 = true;
      for (;;) {
        if (!$t10) { L0["i"] = $.succ(L0["i"], 1); }
        $t10 = false;
        if (!($.ord(L0["i"]) <= $.ord($t9))) break;
        if ($.truthy($.ne((await $.idx(L0["mass"], [L0["i"]])), ""))) {
          if ($.truthy($.eq(L0["result"], ""))) {
            L0["result"] = (await $.idx(L0["mass"], [L0["i"]]));
          } else {
            L0["result"] = $.add($.add(L0["result"], " and "), (await $.idx(L0["mass"], [L0["i"]])));
          }
        }
        await $.tick();
      }
    }
  }
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TFilterForm", "FormCanResize", async function FormCanResize(Self, p0, p1, p2, p3) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "newwidth": $.asRef(p1), "newheight": $.asRef(p2), "resize": $.asRef(p3), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await L0["resize"].set(false);
  return L0.result;
}, {"params": ["Sender", "NewWidth", "NewHeight", "Resize"], "kind": "procedure", "ptypes": ["TObject", "Integer", "Integer", "Boolean"]});
  U.method("TFilterForm", "FormKeyPress", async function FormKeyPress(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "key": $.asRef(p1), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.eq((await $.call(C, "ord", [(await L0["key"].get())])), (await $.v(C, "VK_ESCAPE"))))) {
    await $.stmt($.call(C, "Close", []));
  }
  return L0.result;
}, {"params": ["Sender", "Key"], "kind": "procedure", "ptypes": ["TObject", "Char"]});
  U.method("TFilterForm", "ActionFlterAcceptExecute", async function ActionFlterAcceptExecute(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t11 = (await $.mv((await $.v(C, "CreditForm")), "DBGridEhCredit"));
    const $t12 = (await $.mv((await $.wv([$t11], "DataSource", C, false)), "DataSet"));
    await $.wset([$t11, $t12], "Filter", (await $.wv([$t11, $t12], "FilterString", C, false)), C);
    await $.wset([$t11, $t12], "Filtered", (await $.wv([$t11, $t12], "False", C, false)), C);
    await $.wset([$t11, $t12], "Filtered", (await $.wv([$t11, $t12], "True", C, false)), C);
    await $.mcall((await $.wv([$t11, $t12], "SelectedRows", C, false)), "Clear", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFilterForm", "ActionFilterRejectExecute", async function ActionFilterRejectExecute(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t13 = (await $.mv((await $.v(C, "CreditForm")), "DBGridEhCredit"));
    const $t14 = (await $.mv((await $.wv([$t13], "DataSource", C, false)), "DataSet"));
    await $.wset([$t13, $t14], "Filter", "", C);
    await $.wset([$t13, $t14], "Filtered", (await $.wv([$t13, $t14], "False", C, false)), C);
    await $.mcall((await $.wv([$t13, $t14], "SelectedRows", C, false)), "Clear", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFilterForm", "FormDestroy", async function FormDestroy(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mcall((await $.v(C, "EvanescenceValute")), "Close", []);
  await $.mcall((await $.v(C, "EvanescenceFilial")), "Close", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFilterForm", "SpeedButton3Click", async function SpeedButton3Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.stmt($.call(C, "Close", []));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  return U;
}
