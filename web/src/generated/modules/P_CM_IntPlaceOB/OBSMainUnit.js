// Generated from OBSMainUnit.pas by pas2js — do not edit by hand; regenerate instead.
/* eslint-disable */
// @ts-nocheck

export default function define($) {
  const U = $.unit("OBSMainUnit", ["Windows", "Messages", "SysUtils", "Classes", "Graphics", "Controls", "Forms", "Dialogs", "ExtCtrls", "StdCtrls", "Mask", "DBCtrls", "DBCtrlsEh", "DBLookupEh", "Buttons", "ComCtrls", "CommonDecls", "OBSDatModImpl", "sbsystem"]);
  const C = [U];
  U.defClass("TOBSMainForm", "TForm", {"panel1": {"name": "Panel1", "type": "TPanel"}, "panel2": {"name": "Panel2", "type": "TPanel"}, "groupbox1": {"name": "GroupBox1", "type": "TGroupBox"}, "dbediteh1": {"name": "DBEditEh1", "type": "TDBEditEh"}, "groupbox5": {"name": "GroupBox5", "type": "TGroupBox"}, "dbediteh3": {"name": "DBEditEh3", "type": "TDBEditEh"}, "panel3": {"name": "Panel3", "type": "TPanel"}, "groupbox2": {"name": "GroupBox2", "type": "TGroupBox"}, "groupbox3": {"name": "GroupBox3", "type": "TGroupBox"}, "accountlistincomeintinout": {"name": "AccountListIncomeIntInout", "type": "TDBLookupComboboxEh"}, "panel4": {"name": "Panel4", "type": "TPanel"}, "intinflbl": {"name": "IntInfLbl", "type": "TLabel"}, "panel5": {"name": "Panel5", "type": "TPanel"}, "groupbox4": {"name": "GroupBox4", "type": "TGroupBox"}, "groupbox6": {"name": "GroupBox6", "type": "TGroupBox"}, "cusiintacc": {"name": "CusiIntacc", "type": "TDBLookupComboboxEh"}, "intincomeacc": {"name": "IntincomeAcc", "type": "TDBLookupComboboxEh"}, "bitbtn1": {"name": "BitBtn1", "type": "TBitBtn"}, "bitbtn2": {"name": "BitBtn2", "type": "TBitBtn"}, "accountlistcb": {"name": "AccountListCB", "type": "TDBLookupComboboxEh"}, "trdatetime": {"name": "TrDateTime", "type": "TDateTimePicker"}, "label1": {"name": "Label1", "type": "TLabel"}}, {});
  U.init(async () => {
    U.var_("OBSMainForm", null, "TOBSMainForm");
  });
  U.func("InitPlugin", async function InitPlugin(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"s": $.copyArg(p0), result: undefined, "crd_id": 0, "cust_id": 0, "curr_id": 0, "br_id": 0, "cat_id": 0, "crd_num": '', "val_name": '', "intstopdate": 0};
  await $.fixArgs(L0, ["s"]);
  L0["rsmaincaption"] = "%s № Li kreditin informasiyası";
  L0["crd_id"] = (await $.v(C, "Get_SelectedCrdID"));
  L0["crd_num"] = (await $.v(C, "Get_SelectedCrdNo"));
  {
    const $t1 = (await $.wobj(C, "OBSDatMod"));
    {
      const $t2 = (await $.wv([$t1], "OutInterestsAccounts", C, false));
      await $.stmt($.wcall([$t1, $t2], "Open", [], C));
      await $.mset((await $.mv((await $.wv([$t1, $t2], "OBSMainForm", C, false)), "AccountListCB")), "KeyValue", (await $.mv((await $.wcall([$t1, $t2], "FieldByName", ["ID"], C)), "AsInteger")));
    }
    {
      const $t3 = (await $.wv([$t1], "OutIntIncomeAccounts", C, false));
      await $.stmt($.wcall([$t1, $t3], "Open", [], C));
      await $.mset((await $.mv((await $.wv([$t1, $t3], "OBSMainForm", C, false)), "AccountListIncomeIntInout")), "KeyValue", (await $.mv((await $.wcall([$t1, $t3], "FieldByName", ["ID"], C)), "AsInteger")));
    }
    {
      const $t4 = (await $.wv([$t1], "OutInterestsAccounts", C, false));
      if ($.truthy((await $.wv([$t1, $t4], "Active", C, false)))) {
        await $.stmt($.wcall([$t1, $t4], "Close", [], C));
      }
      await $.stmt((await $.wcall([$t1, $t4], "SetVariable", ["CrdID", (await $.wv([$t1, $t4], "Crd_id", { get: async () => L0["crd_id"], set: async (v) => { L0["crd_id"] = v; }, local: true }, false))], C)));
      await $.stmt($.wcall([$t1, $t4], "Open", [], C));
      await $.mset((await $.mv((await $.wv([$t1, $t4], "OBSMainForm", C, false)), "AccountListCB")), "KeyValue", (await $.mv((await $.wcall([$t1, $t4], "FieldByName", ["ID"], C)), "AsInteger")));
    }
    {
      const $t5 = (await $.wv([$t1], "InterestInfo", C, false));
      if ($.truthy((await $.wv([$t1, $t5], "Active", C, false)))) {
        await $.stmt($.wcall([$t1, $t5], "Close", [], C));
      }
      await $.stmt((await $.wcall([$t1, $t5], "SetVariable", ["Crdid", (await $.wv([$t1, $t5], "Crd_id", { get: async () => L0["crd_id"], set: async (v) => { L0["crd_id"] = v; }, local: true }, false))], C)));
      await $.stmt($.wcall([$t1, $t5], "Open", [], C));
      await $.wset([$t1, $t5], "IntStopDate", (await $.mv((await $.wcall([$t1, $t5], "FieldByName", ["StopCalcDate"], C)), "AsDateTime")), { get: async () => L0["intstopdate"], set: async (v) => { L0["intstopdate"] = v; }, local: true });
    }
    {
      const $t6 = (await $.wv([$t1], "CreditInfo", C, false));
      if ($.truthy((await $.wv([$t1, $t6], "Active", C, false)))) {
        await $.stmt($.wcall([$t1, $t6], "Close", [], C));
      }
      await $.stmt((await $.wcall([$t1, $t6], "SetVariable", ["B_ID", (await $.wv([$t1, $t6], "Crd_id", { get: async () => L0["crd_id"], set: async (v) => { L0["crd_id"] = v; }, local: true }, false))], C)));
      await $.stmt($.wcall([$t1, $t6], "Open", [], C));
      await $.wset([$t1, $t6], "Cust_id", (await $.mv((await $.wcall([$t1, $t6], "FieldByName", ["Boorowerid"], C)), "AsInteger")), { get: async () => L0["cust_id"], set: async (v) => { L0["cust_id"] = v; }, local: true });
      await $.wset([$t1, $t6], "Curr_id", (await $.mv((await $.wcall([$t1, $t6], "FieldByName", ["currency"], C)), "AsInteger")), { get: async () => L0["curr_id"], set: async (v) => { L0["curr_id"] = v; }, local: true });
      await $.wset([$t1, $t6], "Br_id", (await $.mv((await $.wcall([$t1, $t6], "FieldByName", ["branchid"], C)), "AsInteger")), { get: async () => L0["br_id"], set: async (v) => { L0["br_id"] = v; }, local: true });
      await $.wset([$t1, $t6], "Cat_id", (await $.mv((await $.wcall([$t1, $t6], "FieldByName", ["customertype"], C)), "AsInteger")), { get: async () => L0["cat_id"], set: async (v) => { L0["cat_id"] = v; }, local: true });
    }
    {
      const $t7 = (await $.wv([$t1], "Customers", C, false));
      if ($.truthy((await $.wv([$t1, $t7], "Active", C, false)))) {
        await $.stmt($.wcall([$t1, $t7], "Close", [], C));
      }
      await $.stmt((await $.wcall([$t1, $t7], "SetVariable", ["CliID", (await $.wv([$t1, $t7], "Cust_id", { get: async () => L0["cust_id"], set: async (v) => { L0["cust_id"] = v; }, local: true }, false))], C)));
      await $.stmt($.wcall([$t1, $t7], "Open", [], C));
    }
    {
      const $t8 = (await $.wv([$t1], "Avalute", C, false));
      if ($.truthy((await $.wv([$t1, $t8], "Active", C, false)))) {
        await $.stmt($.wcall([$t1, $t8], "Close", [], C));
      }
      await $.stmt((await $.wcall([$t1, $t8], "SetVariable", ["val_id", (await $.wv([$t1, $t8], "Curr_id", { get: async () => L0["curr_id"], set: async (v) => { L0["curr_id"] = v; }, local: true }, false))], C)));
      await $.stmt($.wcall([$t1, $t8], "Open", [], C));
      await $.wset([$t1, $t8], "Val_name", (await $.mv((await $.wcall([$t1, $t8], "FieldByName", ["val_name"], C)), "AsString")), { get: async () => L0["val_name"], set: async (v) => { L0["val_name"] = v; }, local: true });
    }
    {
      const $t9 = (await $.wv([$t1], "Interestrests", C, false));
      if ($.truthy((await $.wv([$t1, $t9], "Active", C, false)))) {
        await $.stmt($.wcall([$t1, $t9], "Close", [], C));
      }
      await $.stmt((await $.wcall([$t1, $t9], "SetVariable", ["Ac_ID", (await $.wv([$t1, $t9], "Crd_id", { get: async () => L0["crd_id"], set: async (v) => { L0["crd_id"] = v; }, local: true }, false))], C)));
      await $.stmt($.wcall([$t1, $t9], "Open", [], C));
    }
    {
      const $t10 = (await $.wv([$t1], "InterestsAccounts", C, false));
      if ($.truthy((await $.wv([$t1, $t10], "Active", C, false)))) {
        await $.stmt($.wcall([$t1, $t10], "Close", [], C));
      }
      await $.stmt((await $.wcall([$t1, $t10], "SetVariable", ["CurrID", (await $.wv([$t1, $t10], "Curr_id", { get: async () => L0["curr_id"], set: async (v) => { L0["curr_id"] = v; }, local: true }, false))], C)));
      await $.stmt((await $.wcall([$t1, $t10], "SetVariable", ["BrID", (await $.wv([$t1, $t10], "br_id", { get: async () => L0["br_id"], set: async (v) => { L0["br_id"] = v; }, local: true }, false))], C)));
      await $.stmt((await $.wcall([$t1, $t10], "SetVariable", ["CatID", (await $.wv([$t1, $t10], "Cat_id", { get: async () => L0["cat_id"], set: async (v) => { L0["cat_id"] = v; }, local: true }, false))], C)));
      await $.stmt($.wcall([$t1, $t10], "Open", [], C));
      await $.mset((await $.mv((await $.wv([$t1, $t10], "OBSMainForm", C, false)), "IntincomeAcc")), "KeyValue", (await $.mv((await $.wcall([$t1, $t10], "FieldByName", ["ID"], C)), "AsInteger")));
    }
    {
      const $t11 = (await $.wv([$t1], "CustIntAccounts", C, false));
      if ($.truthy((await $.wv([$t1, $t11], "Active", C, false)))) {
        await $.stmt($.wcall([$t1, $t11], "Close", [], C));
      }
      await $.stmt((await $.wcall([$t1, $t11], "SetVariable", ["CrdID", (await $.wv([$t1, $t11], "Crd_id", { get: async () => L0["crd_id"], set: async (v) => { L0["crd_id"] = v; }, local: true }, false))], C)));
      await $.stmt($.wcall([$t1, $t11], "Open", [], C));
      await $.mset((await $.mv((await $.wv([$t1, $t11], "OBSMainForm", C, false)), "CusiIntacc")), "KeyValue", (await $.mv((await $.wcall([$t1, $t11], "FieldByName", ["ID"], C)), "AsInteger")));
    }
  }
  {
    const $t12 = (await $.wobj(C, "OBSMainForm"));
    if ($.truthy(($.ne((await $.wcall([$t12], "integer", [(await $.wcall([$t12], "trunc", [(await $.wv([$t12], "IntStopDate", { get: async () => L0["intstopdate"], set: async (v) => { L0["intstopdate"] = v; }, local: true }, false))], C))], C)), 0)))) {
      await $.wset([$t12], "Caption", $.add((await $.wv([$t12], "Crd_num", { get: async () => L0["crd_num"], set: async (v) => { L0["crd_num"] = v; }, local: true }, false)), " -nömrəli kredit üçün faizlərin Bk da otuzdurmaq "), C);
      await $.mset((await $.wv([$t12], "IntInfLbl", C, false)), "Caption", $.add($.add("Faizlərin hesablanması  ", (await $.wcall([$t12], "DateToStr", [(await $.wv([$t12], "IntStopDate", { get: async () => L0["intstopdate"], set: async (v) => { L0["intstopdate"] = v; }, local: true }, false))], C))), " -Tarixindən dayandırılıb"));
      await $.stmt($.wcall([$t12], "ShowModal", [], C));
    }
  }
  return L0.result;
}, {"params": ["S"], "kind": "procedure", "ptypes": ["String"]});
  U.method("TOBSMainForm", "FormCanResize", async function FormCanResize(Self, p0, p1, p2, p3) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "newwidth": $.asRef(p1), "newheight": $.asRef(p2), "resize": $.asRef(p3), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await L0["resize"].set(false);
  return L0.result;
}, {"params": ["Sender", "NewWidth", "NewHeight", "Resize"], "kind": "procedure", "ptypes": ["TObject", "Integer", "Integer", "Boolean"]});
  U.method("TOBSMainForm", "FormKeyPress", async function FormKeyPress(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "key": $.asRef(p1), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.eq((await $.call(C, "ord", [(await L0["key"].get())])), (await $.v(C, "VK_ESCAPE"))))) {
    await $.stmt($.call(C, "Close", []));
  }
  return L0.result;
}, {"params": ["Sender", "Key"], "kind": "procedure", "ptypes": ["TObject", "Char"]});
  U.method("TOBSMainForm", "FormDestroy", async function FormDestroy(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t13 = (await $.wobj(C, "OBSDatMod"));
    await $.mcall((await $.wv([$t13], "OutInterestsAccounts", C, false)), "CloseAll", []);
    await $.mcall((await $.wv([$t13], "OutIntIncomeAccounts", C, false)), "CloseAll", []);
    await $.mcall((await $.wv([$t13], "CreditInfo", C, false)), "CloseAll", []);
    await $.mcall((await $.wv([$t13], "Customers", C, false)), "CloseAll", []);
    await $.mcall((await $.wv([$t13], "Interestrests", C, false)), "CloseAll", []);
  }
  await $.mcall((await $.v(C, "OBSDatMod")), "Free", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TOBSMainForm", "FormCreate", async function FormCreate(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.set(C, "OBSDatMod", (await $.mcall((await $.v(C, "TOBSDatMod")), "Create", [Self])));
  await $.mset((await $.v(C, "TrDateTime")), "DateTime", (await $.v(C, "Get_CurrentDate")));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TOBSMainForm", "BitBtn1Click", async function BitBtn1Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.stmt($.call(C, "Close", []));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TOBSMainForm", "BitBtn2Click", async function BitBtn2Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "crdid": 0, "tdate": 0, "custaccid": 0, "committr": false};
  await $.fixArgs(L0, ["sender"]);
  L0["rstransactionswillprocessed"] = "Faizlərin  Bk da otuzdurmaq ...";
  L0["crdid"] = (await $.v(C, "Get_SelectedCrdID"));
  L0["tdate"] = (await $.call(C, "Integer", [(await $.call(C, "Trunc", [(await $.mv((await $.v(C, "TrDateTime")), "DateTime"))]))]));
  L0["custaccid"] = (await $.mv((await $.mcall((await $.mv((await $.mv((await $.v(C, "AccountListCB")), "ListSource")), "DataSet")), "FieldByName", ["ID"])), "AsInteger"));
  {
    const $t14 = (await $.wobj(C, "OBSDatMod"));
    await $.stmt((await $.mcall((await $.wv([$t14], "CM_INT_PLACEOUTBALANCE", C, false)), "CallProcedure", ["Int_PlaceOutBalance", ["p_CreditID", (await $.wv([$t14], "CrdID", { get: async () => L0["crdid"], set: async (v) => { L0["crdid"] = v; }, local: true }, false)), "P_Cust_IntOutAccID", (await $.wv([$t14], "CustAccID", { get: async () => L0["custaccid"], set: async (v) => { L0["custaccid"] = v; }, local: true }, false)), "p_Date", (await $.wv([$t14], "TDate", { get: async () => L0["tdate"], set: async (v) => { L0["tdate"] = v; }, local: true }, false))]])));
  }
  try {
    L0["committr"] = (await $.call(C, "TrDelayed_Show", [Self, L0["rstransactionswillprocessed"]]));
    await $.stmt($.call(C, "Update", []));
    {
      const $t16 = (await $.wobj(C, "OBSDatMod"));
      await $.stmt((await $.mcall((await $.wv([$t16], "CM_INT_PLACEOUTBALANCE", C, false)), "CallProcedure", ["CommitTr", ["DefCommit", (await $.wv([$t16], "CommitTr", { get: async () => L0["committr"], set: async (v) => { L0["committr"] = v; }, local: true }, false))]])));
    }
  } catch ($t15) {
    $.rethrowControl($t15);
    $.handled($t15);
    {
      const $t17 = (await $.wobj(C, "OBSDatMod"));
      await $.stmt((await $.mcall((await $.wv([$t17], "CM_INT_PLACEOUTBALANCE", C, false)), "CallProcedure", ["CommitTr", ["DefCommit", (await $.wv([$t17], "False", C, false))]])));
    }
    throw $t15;
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.setInitialization(async function __initialization(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: undefined};
  await $.set(C, "OBSMainForm", (await $.mcall((await $.v(C, "TOBSMainForm")), "Create", [(await $.v(C, "CommonApplication"))])));
  return L0.result;
});
  return U;
}
