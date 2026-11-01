// Generated from PlaneAddEditUnit.pas by pas2js — do not edit by hand; regenerate instead.
/* eslint-disable */
// @ts-nocheck

export default function define($) {
  const U = $.unit("PlaneAddEditUnit", ["Windows", "Messages", "SysUtils", "Classes", "Graphics", "Controls", "Forms", "Dialogs", "ComCtrls", "StdCtrls", "CurrencyEdit", "PaymentsPlaneDataModuleUnit"]);
  const C = [U];
  U.enumType("tplanegridstate", 2);
  U.const("pgsInsert", 0);
  U.const("pgsEdit", 1);
  U.defClass("TPlaneAddEditForm", "TForm", {"dtppaymentdate": {"name": "DTPPaymentDate", "type": "TDateTimePicker"}, "maindebtedit": {"name": "MainDebtEdit", "type": "TCurrencyEdit"}, "percentedit": {"name": "PercentEdit", "type": "TCurrencyEdit"}, "statictext1": {"name": "StaticText1", "type": "TStaticText"}, "statictext2": {"name": "StaticText2", "type": "TStaticText"}, "statictext3": {"name": "StaticText3", "type": "TStaticText"}, "applybtn": {"name": "ApplyBtn", "type": "TButton"}, "cancelbtn": {"name": "CancelBtn", "type": "TButton"}, "cbpayed": {"name": "CBPayed", "type": "TCheckBox"}, "planegridstate": {"name": "PlaneGridState", "type": "TPlaneGridState"}, "contractid": {"name": "ContractID", "type": "Integer"}}, {});
  U.init(async () => {
    U.var_("PlaneAddEditForm", null, "TPlaneAddEditForm");
  });
  U.method("TPlaneAddEditForm", "FormKeyPress", async function FormKeyPress(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "key": $.asRef(p1), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.eq((await L0["key"].get()), "\u001b"))) {
    await $.mcall((await $.v(C, "CancelBtn")), "Click", []);
  }
  return L0.result;
}, {"params": ["Sender", "Key"], "kind": "procedure", "ptypes": ["TObject", "Char"]});
  U.method("TPlaneAddEditForm", "ApplyBtnClick", async function ApplyBtnClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "hdate": 0, "maindebt": 0, "interestdebt": 0, "payed": '', "id": 0};
  await $.fixArgs(L0, ["sender"]);
  L0["hdate"] = (await $.call(C, "Trunc", [(await $.mv((await $.v(C, "DTPPaymentDate")), "DateTime"))]));
  L0["maindebt"] = (await $.mv((await $.v(C, "MainDebtEdit")), "Value"));
  L0["interestdebt"] = (await $.mv((await $.v(C, "PercentEdit")), "Value"));
  if ($.truthy((await $.mv((await $.v(C, "CBPayed")), "Checked")))) {
    L0["payed"] = "P";
  } else {
    L0["payed"] = "N";
  }
  {
    const $t1 = (await $.mv((await $.v(C, "PlaneDataModule")), "PaymentsPlane"));
    if ($.truthy($.eq((await $.wv([$t1], "PlaneGridState", C, false)), (await $.wv([$t1], "pgsInsert", C, false))))) {
      await $.stmt((await $.wcall([$t1], "CallProcedure", ["Payments_Plane_Add", [(await $.wv([$t1], "ContractID", C, false)), (await $.wv([$t1], "HDate", { get: async () => L0["hdate"], set: async (v) => { L0["hdate"] = v; }, local: true }, false)), (await $.wv([$t1], "MainDebt", { get: async () => L0["maindebt"], set: async (v) => { L0["maindebt"] = v; }, local: true }, false)), (await $.wv([$t1], "InterestDebt", { get: async () => L0["interestdebt"], set: async (v) => { L0["interestdebt"] = v; }, local: true }, false)), (await $.wv([$t1], "Payed", { get: async () => L0["payed"], set: async (v) => { L0["payed"] = v; }, local: true }, false))]], C)));
    } else {
      await $.wset([$t1], "ID", (await $.mv((await $.mcall((await $.mv((await $.wv([$t1], "PlaneDataModule", C, false)), "PaymentsPlaneData")), "FieldByName", ["ID"])), "AsInteger")), { get: async () => L0["id"], set: async (v) => { L0["id"] = v; }, local: true });
      await $.stmt((await $.wcall([$t1], "CallProcedure", ["Payments_Plane_Upd", [(await $.wv([$t1], "ID", { get: async () => L0["id"], set: async (v) => { L0["id"] = v; }, local: true }, false)), (await $.wv([$t1], "HDate", { get: async () => L0["hdate"], set: async (v) => { L0["hdate"] = v; }, local: true }, false)), (await $.wv([$t1], "MainDebt", { get: async () => L0["maindebt"], set: async (v) => { L0["maindebt"] = v; }, local: true }, false)), (await $.wv([$t1], "InterestDebt", { get: async () => L0["interestdebt"], set: async (v) => { L0["interestdebt"] = v; }, local: true }, false)), (await $.wv([$t1], "Payed", { get: async () => L0["payed"], set: async (v) => { L0["payed"] = v; }, local: true }, false))]], C)));
    }
  }
  await $.set(C, "ModalResult", (await $.v(C, "mrOk")));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TPlaneAddEditForm", "FormShow", async function FormShow(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.eq((await $.v(C, "PlaneGridState")), (await $.v(C, "pgsEdit"))))) {
    {
      const $t2 = (await $.v(C, "PlaneDataModule"));
      const $t3 = (await $.wv([$t2], "PaymentsPlaneData", C, false));
      await $.mset((await $.wv([$t2, $t3], "DTPPaymentDate", C, false)), "DateTime", (await $.mv((await $.wcall([$t2, $t3], "FieldByName", ["HDate"], C)), "AsDateTime")));
      await $.mset((await $.wv([$t2, $t3], "MainDebtEdit", C, false)), "Value", (await $.mv((await $.wcall([$t2, $t3], "FieldByName", ["FACTICALDEBTPAYMENT"], C)), "AsCurrency")));
      await $.mset((await $.wv([$t2, $t3], "PercentEdit", C, false)), "Value", (await $.mv((await $.wcall([$t2, $t3], "FieldByName", ["INTERESTDEBTPAYMENT"], C)), "AsCurrency")));
      await $.mset((await $.wv([$t2, $t3], "CBPayed", C, false)), "Checked", $.eq((await $.mv((await $.wcall([$t2, $t3], "FieldByName", ["Paid"], C)), "AsString")), "P"));
    }
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  return U;
}
