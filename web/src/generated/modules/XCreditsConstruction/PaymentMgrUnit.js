// Generated from PaymentMgrUnit.pas by pas2js — do not edit by hand; regenerate instead.
/* eslint-disable */
// @ts-nocheck

export default function define($) {
  const U = $.unit("PaymentMgrUnit", ["Windows", "Messages", "SysUtils", "Classes", "Graphics", "Controls", "Forms", "Dialogs", "StdCtrls", "DBViewComboBox", "SearchEdit", "ComCtrls", "Buttons", "OrderMgrUnit", "TransactionViewerUnit", "DatModConstructionImpl"]);
  const C = [U];
  U.defClass("TPaymentAddForm", "TForm", {"bitbtn1": {"name": "BitBtn1", "type": "TBitBtn"}, "bitbtn2": {"name": "BitBtn2", "type": "TBitBtn"}, "groupbox2": {"name": "GroupBox2", "type": "TGroupBox"}, "label1": {"name": "Label1", "type": "TLabel"}, "dtpopdate": {"name": "DTPOpDate", "type": "TDateTimePicker"}, "editpayamt": {"name": "EditPayAmt", "type": "TEdit"}, "groupbox1": {"name": "GroupBox1", "type": "TGroupBox"}, "searchedit1": {"name": "SearchEdit1", "type": "TSearchEdit"}, "dbviewcombobox1": {"name": "DBViewComboBox1", "type": "TDBViewComboBox"}, "edit1": {"name": "Edit1", "type": "TEdit"}}, {});
  U.init(async () => {
    U.var_("PaymentAddForm", null, "TPaymentAddForm");
  });
  U.method("TPaymentAddForm", "TrDelayed_Show", async function TrDelayed_Show(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"aowner": $.copyArg(p0), result: false};
  await $.fixArgs(L0, ["aowner"]);
  {
    const $t1 = (await $.mcall((await $.v(C, "TTransactionviewForm")), "Create", [L0["aowner"]]));
    try {
      await $.wset([$t1], "Result", $.eq((await $.wv([$t1], "ShowModal", C, false)), (await $.wv([$t1], "mrOk", C, false))), { get: async () => L0["result"], set: async (v) => { L0["result"] = v; }, local: true });
      await $.stmt($.wcall([$t1], "Update", [], C));
    } finally {
      await $.stmt($.wcall([$t1], "Release", [], C));
    }
  }
  return L0.result;
}, {"params": ["AOwner"], "kind": "function", "ptypes": ["TComponent"]});
  U.method("TPaymentAddForm", "FormCanResize", async function FormCanResize(Self, p0, p1, p2, p3) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "newwidth": $.asRef(p1), "newheight": $.asRef(p2), "resize": $.asRef(p3), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await L0["resize"].set(false);
  return L0.result;
}, {"params": ["Sender", "NewWidth", "NewHeight", "Resize"], "kind": "procedure", "ptypes": ["TObject", "Integer", "Integer", "Boolean"]});
  U.method("TPaymentAddForm", "FormKeyPress", async function FormKeyPress(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "key": $.asRef(p1), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.eq((await $.call(C, "ord", [(await L0["key"].get())])), (await $.v(C, "VK_ESCAPE"))))) {
    await $.stmt($.call(C, "close", []));
  }
  if ($.truthy($.eq((await $.call(C, "ord", [(await L0["key"].get())])), (await $.v(C, "VK_RETURN"))))) {
    await $.stmt((await $.call(C, "BitBtn1Click", [L0["sender"]])));
  }
  return L0.result;
}, {"params": ["Sender", "Key"], "kind": "procedure", "ptypes": ["TObject", "Char"]});
  U.method("TPaymentAddForm", "FormCreate", async function FormCreate(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mset((await $.v(C, "SearchEdit1")), "Text", (await $.mv((await $.mcall((await $.mv((await $.v(C, "OrderForm")), "Cash")), "FieldbyName", ["acc_no"])), "asString")));
  await $.mset((await $.v(C, "DBViewComboBox1")), "Text", (await $.mv((await $.mcall((await $.mv((await $.v(C, "DatModConstruction")), "Description")), "FieldByName", ["NAME"])), "AsString")));
  await $.mset((await $.v(C, "Edit1")), "Text", (await $.mv((await $.mcall((await $.mv((await $.v(C, "DatModConstruction")), "Description")), "FieldByName", ["CODE"])), "AsString")));
  await $.mset((await $.v(C, "EditPayAmt")), "Text", (await $.call(C, "FloatToStr", [(await $.mv((await $.mcall((await $.mv((await $.v(C, "OrderForm")), "PayData")), "FieldByName", ["MainAmt"])), "AsFloat"))])));
  await $.mset((await $.v(C, "DTPOpDate")), "DateTime", (await $.mv((await $.mcall((await $.mv((await $.v(C, "OrderForm")), "SysDat")), "FieldByName", ["TEK_DAT"])), "AsDateTime")));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TPaymentAddForm", "DBViewComboBox1Change", async function DBViewComboBox1Change(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mset((await $.v(C, "Edit1")), "Text", (await $.mv((await $.mcall((await $.mv((await $.v(C, "DatModConstruction")), "Description")), "FieldByName", ["CODE"])), "AsString")));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TPaymentAddForm", "BitBtn1Click", async function BitBtn1Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "commitpayment": false, "trdate": 0, "sum": 0, "desc": '', "code": 0};
  await $.fixArgs(L0, ["sender"]);
  L0["sum"] = (await $.call(C, "StrToFloat", [(await $.mv((await $.v(C, "EditPayAmt")), "text"))]));
  L0["trdate"] = (await $.call(C, "integer", [(await $.call(C, "Trunc", [(await $.mv((await $.v(C, "DTPOpDate")), "dateTime"))]))]));
  L0["desc"] = (await $.mv((await $.v(C, "DBViewComboBox1")), "Text"));
  L0["code"] = (await $.call(C, "strtoint", [(await $.mv((await $.v(C, "Edit1")), "Text"))]));
  {
    const $t2 = (await $.v(C, "DatModConstruction"));
    const $t3 = (await $.wv([$t2], "sbcm_construction", C, false));
    await $.stmt((await $.wcall([$t2, $t3], "CallProcedure", ["PaymentTracttransactions", ["p_contractid", (await $.mv((await $.mcall((await $.wv([$t2, $t3], "Credits", C, false)), "Fieldbyname", ["ID"])), "AsInteger")), "p_dat", (await $.wv([$t2, $t3], "TrDate", { get: async () => L0["trdate"], set: async (v) => { L0["trdate"] = v; }, local: true }, false)), "p_desc", (await $.wv([$t2, $t3], "desc", { get: async () => L0["desc"], set: async (v) => { L0["desc"] = v; }, local: true }, false)), "p_code", (await $.wv([$t2, $t3], "code", { get: async () => L0["code"], set: async (v) => { L0["code"] = v; }, local: true }, false)), "p_flatamt", (await $.wv([$t2, $t3], "sum", { get: async () => L0["sum"], set: async (v) => { L0["sum"] = v; }, local: true }, false)), "p_showtr", (await $.wv([$t2, $t3], "TRUE", C, false)), "p_DebitAccID", (await $.mv((await $.mcall((await $.mv((await $.wv([$t2, $t3], "OrderForm", C, false)), "Cash")), "FieldByName", ["ID"])), "AsInteger"))]], C)));
  }
  try {
    L0["commitpayment"] = (await $.call(C, "TrDelayed_Show", [Self]));
    await $.stmt($.call(C, "Update", []));
    {
      const $t5 = (await $.v(C, "DatModConstruction"));
      const $t6 = (await $.wv([$t5], "sbcm_construction", C, false));
      await $.stmt((await $.wcall([$t5, $t6], "CallProcedure", ["commitdelayedtransactions", ["DoCommit", (await $.wv([$t5, $t6], "CommitPayment", { get: async () => L0["commitpayment"], set: async (v) => { L0["commitpayment"] = v; }, local: true }, false))]], C)));
    }
    if ($.truthy(L0["commitpayment"])) {
      await $.mset(Self, "ModalResult", (await $.v(C, "mrOk")));
    }
    await $.mcall(Self, "Update", []);
    await $.mcall((await $.mv((await $.v(C, "OrderForm")), "Payments")), "Refresh", []);
  } catch ($t4) {
    $.rethrowControl($t4);
    $.handled($t4);
    {
      const $t7 = (await $.v(C, "DatModConstruction"));
      const $t8 = (await $.wv([$t7], "sbcm_construction", C, false));
      await $.stmt((await $.wcall([$t7, $t8], "CallProcedure", ["commitdelayedtransactions", ["DoCommit", (await $.wv([$t7, $t8], "False", C, false))]], C)));
    }
    throw $t4;
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  return U;
}
