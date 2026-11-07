// Generated from GrantUnit.pas by pas2js — do not edit by hand; regenerate instead.
/* eslint-disable */
// @ts-nocheck

export default function define($) {
  const U = $.unit("GrantUnit", ["Windows", "Messages", "SysUtils", "Classes", "Graphics", "Controls", "Forms", "Dialogs", "NLSLocalizer", "DBLookupEh", "Mask", "DBCtrlsEh", "ActnList", "ImgList", "Buttons", "StdCtrls", "ExtCtrls", "GrantDatModImpl", "CommonDecls"]);
  const C = [U];
  U.defClass("TGrantForm", "TForm", {"nlslocalizer1": {"name": "NLSLocalizer1", "type": "TNLSLocalizer"}, "panel1": {"name": "Panel1", "type": "TPanel"}, "groupbox1": {"name": "GroupBox1", "type": "TGroupBox"}, "groupbox2": {"name": "GroupBox2", "type": "TGroupBox"}, "editamount": {"name": "EditAmount", "type": "TEdit"}, "lblvalute": {"name": "LblValute", "type": "TLabel"}, "panel2": {"name": "Panel2", "type": "TPanel"}, "speedbutton1": {"name": "SpeedButton1", "type": "TSpeedButton"}, "imagelist1": {"name": "ImageList1", "type": "TImageList"}, "actionlist1": {"name": "ActionList1", "type": "TActionList"}, "groupbox3": {"name": "GroupBox3", "type": "TGroupBox"}, "groupbox4": {"name": "GroupBox4", "type": "TGroupBox"}, "dbediteh1": {"name": "DBEditEh1", "type": "TDBEditEh"}, "cusiintacc": {"name": "CusiIntacc", "type": "TDBLookupComboboxEh"}, "bankacc": {"name": "BankAcc", "type": "TDBLookupComboboxEh"}, "speedbutton2": {"name": "SpeedButton2", "type": "TSpeedButton"}, "actnaccept": {"name": "ActnAccept", "type": "TAction"}, "actnreject": {"name": "ActnReject", "type": "TAction"}}, {});
  U.init(async () => {
    U.var_("GrantForm", null, "TGrantForm");
  });
  U.func("InitPlugin", async function InitPlugin(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"s": $.copyArg(p0), result: undefined, "crdid": 0, "val_kod": ''};
  await $.fixArgs(L0, ["s"]);
  L0["crdid"] = (await $.v(C, "Get_SelectedCrdID"));
  {
    const $t1 = (await $.wobj(C, "GrantDataMod"));
    {
      const $t2 = (await $.wv([$t1], "CustAccounts", C, false));
      if ($.truthy((await $.wv([$t1, $t2], "Active", C, false)))) {
        await $.stmt($.wcall([$t1, $t2], "CloseAll", [], C));
      }
      await $.stmt((await $.wcall([$t1, $t2], "SetVariable", ["CrdID", (await $.wv([$t1, $t2], "CrdID", { get: async () => L0["crdid"], set: async (v) => { L0["crdid"] = v; }, local: true }, false))], C)));
      await $.stmt($.wcall([$t1, $t2], "Open", [], C));
      await $.mset((await $.mv((await $.wv([$t1, $t2], "GrantForm", C, false)), "CusiIntacc")), "KeyValue", (await $.mv((await $.wcall([$t1, $t2], "FieldByName", ["ID"], C)), "AsInteger")));
    }
    {
      const $t3 = (await $.wv([$t1], "BankAccounts", C, false));
      await $.stmt($.wcall([$t1, $t3], "Open", [], C));
      await $.mset((await $.mv((await $.wv([$t1, $t3], "GrantForm", C, false)), "BankAcc")), "KeyValue", (await $.mv((await $.wcall([$t1, $t3], "FieldByName", ["ID"], C)), "AsInteger")));
    }
    {
      const $t4 = (await $.wv([$t1], "CustInfo", C, false));
      if ($.truthy((await $.wv([$t1, $t4], "Active", C, false)))) {
        await $.stmt($.wcall([$t1, $t4], "close", [], C));
      }
      await $.stmt((await $.wcall([$t1, $t4], "setvariable", ["CrdID", (await $.wv([$t1, $t4], "CrdID", { get: async () => L0["crdid"], set: async (v) => { L0["crdid"] = v; }, local: true }, false))], C)));
      await $.stmt($.wcall([$t1, $t4], "open", [], C));
    }
    {
      const $t5 = (await $.wv([$t1], "Avalute", C, false));
      if ($.truthy((await $.wv([$t1, $t5], "Active", C, false)))) {
        await $.stmt($.wcall([$t1, $t5], "CloseAll", [], C));
      }
      await $.stmt((await $.wcall([$t1, $t5], "SetVariable", ["CrdID", (await $.wv([$t1, $t5], "CrdID", { get: async () => L0["crdid"], set: async (v) => { L0["crdid"] = v; }, local: true }, false))], C)));
      await $.stmt($.wcall([$t1, $t5], "Open", [], C));
      await $.wset([$t1, $t5], "Val_kod", (await $.mv((await $.wcall([$t1, $t5], "FieldByName", ["Val_Name"], C)), "AsString")), { get: async () => L0["val_kod"], set: async (v) => { L0["val_kod"] = v; }, local: true });
    }
  }
  {
    const $t6 = (await $.wobj(C, "GrantForm"));
    await $.mset((await $.wv([$t6], "LblValute", C, false)), "Caption", (await $.wv([$t6], "Val_kod", { get: async () => L0["val_kod"], set: async (v) => { L0["val_kod"] = v; }, local: true }, false)));
    await $.stmt($.wcall([$t6], "ShowModal", [], C));
  }
  return L0.result;
}, {"params": ["S"], "kind": "procedure", "ptypes": ["String"]});
  U.method("TGrantForm", "FormCreate", async function FormCreate(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.set(C, "GrantDataMod", (await $.mcall((await $.v(C, "TGrantDataMod")), "Create", [Self])));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TGrantForm", "FormDestroy", async function FormDestroy(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mcall((await $.v(C, "GrantDataMod")), "Free", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TGrantForm", "ActnAcceptExecute", async function ActnAcceptExecute(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "crdid": 0, "custaccid": 0, "committr": false, "p_amount": 0};
  await $.fixArgs(L0, ["sender"]);
  L0["rstransactionswillprocessed"] = "Əməliyyat aparılır əminsinizmi? ...";
  L0["crdid"] = (await $.v(C, "Get_SelectedCrdID"));
  L0["custaccid"] = (await $.mv((await $.mcall((await $.mv((await $.mv((await $.v(C, "BankAcc")), "ListSource")), "DataSet")), "FieldByName", ["ID"])), "AsInteger"));
  L0["p_amount"] = (await $.call(C, "StrToFloat", [(await $.mv((await $.v(C, "EditAmount")), "Text"))]));
  {
    const $t7 = (await $.wobj(C, "GrantDataMod"));
    await $.stmt((await $.mcall((await $.wv([$t7], "CM_PAYMENTGRANT", C, false)), "CallProcedure", ["paymentgrant", ["p_CreditID", (await $.wv([$t7], "CrdID", { get: async () => L0["crdid"], set: async (v) => { L0["crdid"] = v; }, local: true }, false)), "p_account", (await $.wv([$t7], "CustAccID", { get: async () => L0["custaccid"], set: async (v) => { L0["custaccid"] = v; }, local: true }, false)), "p_grantamount", (await $.wv([$t7], "P_Amount", { get: async () => L0["p_amount"], set: async (v) => { L0["p_amount"] = v; }, local: true }, false))]])));
  }
  try {
    L0["committr"] = (await $.call(C, "TrDelayed_Show", [Self, L0["rstransactionswillprocessed"]]));
    await $.stmt($.call(C, "Update", []));
    {
      const $t9 = (await $.wobj(C, "GrantDataMod"));
      await $.stmt((await $.mcall((await $.wv([$t9], "CM_PAYMENTGRANT", C, false)), "CallProcedure", ["commitpaymentgrant", ["docommit", (await $.wv([$t9], "CommitTr", { get: async () => L0["committr"], set: async (v) => { L0["committr"] = v; }, local: true }, false))]])));
    }
  } catch ($t8) {
    $.rethrowControl($t8);
    $.handled($t8);
    {
      const $t10 = (await $.wobj(C, "GrantDataMod"));
      await $.stmt((await $.mcall((await $.wv([$t10], "CM_PAYMENTGRANT", C, false)), "CallProcedure", ["commitpaymentgrant", ["docommit", (await $.wv([$t10], "False", C, false))]])));
    }
    throw $t8;
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TGrantForm", "ActnRejectExecute", async function ActnRejectExecute(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.stmt($.call(C, "Close", []));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TGrantForm", "FormKeyPress", async function FormKeyPress(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "key": $.asRef(p1), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.eq((await $.call(C, "ord", [(await L0["key"].get())])), (await $.v(C, "VK_ESCAPE"))))) {
    await $.stmt($.call(C, "Close", []));
  }
  return L0.result;
}, {"params": ["Sender", "Key"], "kind": "procedure", "ptypes": ["TObject", "Char"]});
  U.method("TGrantForm", "FormCanResize", async function FormCanResize(Self, p0, p1, p2, p3) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "newwidth": $.asRef(p1), "newheight": $.asRef(p2), "resize": $.asRef(p3), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await L0["resize"].set(false);
  return L0.result;
}, {"params": ["Sender", "NewWidth", "NewHeight", "Resize"], "kind": "procedure", "ptypes": ["TObject", "Integer", "Integer", "Boolean"]});
  U.setInitialization(async function __initialization(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: undefined};
  await $.set(C, "GrantForm", (await $.mcall((await $.v(C, "TGrantForm")), "Create", [(await $.v(C, "CommonApplication"))])));
  return L0.result;
});
  return U;
}
