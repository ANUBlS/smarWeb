// Generated from PayAddUnit.pas by pas2js — do not edit by hand; regenerate instead.
/* eslint-disable */
// @ts-nocheck

export default function define($) {
  const U = $.unit("PayAddUnit", ["Windows", "Messages", "SysUtils", "Classes", "Graphics", "Controls", "Forms", "Dialogs", "StdCtrls", "Buttons", "ComCtrls", "CorrectDatModImpl", "CommonDecls", "sbsystem"]);
  const C = [U];
  U.defClass("TPaymentAddForm", "TForm", {"editrest": {"name": "EditRest", "type": "TEdit"}, "editduerest": {"name": "EditDueRest", "type": "TEdit"}, "editinterestrest": {"name": "EditinterestRest", "type": "TEdit"}, "editdueinterestrest": {"name": "EditDueinterestRest", "type": "TEdit"}, "speedbutton1": {"name": "SpeedButton1", "type": "TSpeedButton"}, "speedbutton2": {"name": "SpeedButton2", "type": "TSpeedButton"}, "label1": {"name": "Label1", "type": "TLabel"}, "label2": {"name": "Label2", "type": "TLabel"}, "label3": {"name": "Label3", "type": "TLabel"}, "label4": {"name": "Label4", "type": "TLabel"}, "datetimepicker": {"name": "DateTimePicker", "type": "TDateTimePicker"}, "label5": {"name": "Label5", "type": "TLabel"}}, {});
  U.init(async () => {
    U.var_("PaymentAddForm", null, "TPaymentAddForm");
  });
  U.method("TPaymentAddForm", "SpeedButton1Click", async function SpeedButton1Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "p_crdid": 0, "p_paydate": 0, "p_rest": 0, "p_duerest": 0, "p_interestrest": 0, "p_dueinterestrest": 0};
  await $.fixArgs(L0, ["sender"]);
  L0["p_crdid"] = (await $.v(C, "Get_SelectedCrdID"));
  L0["p_paydate"] = (await $.call(C, "integer", [(await $.call(C, "trunc", [(await $.mv((await $.v(C, "DateTimePicker")), "DateTime"))]))]));
  L0["p_rest"] = (await $.call(C, "StrToFloat", [(await $.mv((await $.v(C, "EditRest")), "Text"))]));
  L0["p_duerest"] = (await $.call(C, "StrToFloat", [(await $.mv((await $.v(C, "EditDueRest")), "Text"))]));
  L0["p_interestrest"] = (await $.call(C, "StrToFloat", [(await $.mv((await $.v(C, "EditinterestRest")), "Text"))]));
  L0["p_dueinterestrest"] = (await $.call(C, "StrToFloat", [(await $.mv((await $.v(C, "EditDueinterestRest")), "Text"))]));
  {
    const $t1 = (await $.wobj(C, "CorrectDatMod"));
    const $t2 = (await $.wv([$t1], "CM_CORR_TRCH_PAY", C, false));
    const $t3 = (await $.wv([$t1, $t2], "Payments", C, false));
    await $.stmt((await $.wcall([$t1, $t2, $t3], "CallProcedure", ["add_payments", [(await $.wv([$t1, $t2, $t3], "P_CrdID", { get: async () => L0["p_crdid"], set: async (v) => { L0["p_crdid"] = v; }, local: true }, false)), (await $.wv([$t1, $t2, $t3], "P_PayDate", { get: async () => L0["p_paydate"], set: async (v) => { L0["p_paydate"] = v; }, local: true }, false)), (await $.wv([$t1, $t2, $t3], "P_Rest", { get: async () => L0["p_rest"], set: async (v) => { L0["p_rest"] = v; }, local: true }, false)), (await $.wv([$t1, $t2, $t3], "P_interestRest", { get: async () => L0["p_interestrest"], set: async (v) => { L0["p_interestrest"] = v; }, local: true }, false)), (await $.wv([$t1, $t2, $t3], "P_DueRest", { get: async () => L0["p_duerest"], set: async (v) => { L0["p_duerest"] = v; }, local: true }, false)), (await $.wv([$t1, $t2, $t3], "P_DueInterestRest", { get: async () => L0["p_dueinterestrest"], set: async (v) => { L0["p_dueinterestrest"] = v; }, local: true }, false))]], C)));
    await $.stmt($.wcall([$t1, $t2, $t3], "Refresh", [], C));
  }
  await $.stmt($.call(C, "Close", []));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TPaymentAddForm", "FormKeyPress", async function FormKeyPress(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "key": $.asRef(p1), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.eq((await $.call(C, "ord", [(await L0["key"].get())])), (await $.v(C, "VK_ESCAPE"))))) {
    await $.stmt($.call(C, "Close", []));
  }
  return L0.result;
}, {"params": ["Sender", "Key"], "kind": "procedure", "ptypes": ["TObject", "Char"]});
  U.method("TPaymentAddForm", "SpeedButton2Click", async function SpeedButton2Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.stmt($.call(C, "Close", []));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TPaymentAddForm", "FormCreate", async function FormCreate(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mset((await $.v(C, "DateTimePicker")), "DateTime", (await $.v(C, "Get_CurrentDate")));
  await $.mset((await $.v(C, "EditRest")), "Text", "0");
  await $.mset((await $.v(C, "EditDueRest")), "Text", "0");
  await $.mset((await $.v(C, "EditInterestRest")), "Text", "0");
  await $.mset((await $.v(C, "EditDueInterestRest")), "Text", "0");
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  return U;
}
