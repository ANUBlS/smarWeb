// Generated from PaymentSheduleimpl_new.pas by pas2js — do not edit by hand; regenerate instead.
/* eslint-disable */
// @ts-nocheck

export default function define($) {
  const U = $.unit("PaymentSheduleimpl_new", ["Windows", "Messages", "SysUtils", "Classes", "Graphics", "Controls", "Forms", "Dialogs", "StdCtrls", "CMCurrencyEdit", "ComCtrls", "ExtCtrls", "NewCommonDeclsImpl", "ScheduleDataModuleImpl_new", "SheduleImpl_new", "SBTranslateProc", "sboapiDataModuleimpl"]);
  const C = [U];
  U.defClass("TPaymentShedule_new", "TForm", {"button1": {"name": "Button1", "type": "TButton"}, "button2": {"name": "Button2", "type": "TButton"}, "groupbox1": {"name": "GroupBox1", "type": "TGroupBox"}, "groupbox2": {"name": "GroupBox2", "type": "TGroupBox"}, "datetimepicker1": {"name": "DateTimePicker1", "type": "TDateTimePicker"}, "panel1": {"name": "Panel1", "type": "TPanel"}, "groupbox3": {"name": "GroupBox3", "type": "TGroupBox"}, "cmcurrencyedit1": {"name": "CMCurrencyEdit1", "type": "TCMCurrencyEdit"}, "groupbox4": {"name": "GroupBox4", "type": "TGroupBox"}, "edit1": {"name": "Edit1", "type": "TEdit"}}, {});
  U.init(async () => {
    U.var_("PaymentShedule_new", null, "TPaymentShedule_new");
  });
  U.method("TPaymentShedule_new", "Button1Click", async function Button1Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "depid": 0, "period": 0, "tarix": 0, "amount": 0, "per": 0};
  await $.fixArgs(L0, ["sender"]);
  L0["depid"] = (await $.v(C, "Get_SelectedContID"));
  L0["tarix"] = (await $.mv((await $.v(C, "DateTimePicker1")), "datetime"));
  L0["amount"] = (await $.mv((await $.v(C, "CMCurrencyEdit1")), "Value"));
  L0["period"] = (await $.call(C, "StrToInt", [(await $.mv((await $.v(C, "Edit1")), "text"))]));
  L0["per"] = (await $.call(C, "StrToCurr", [(await $.mv((await $.mv((await $.v(C, "form1")), "DBEdit2")), "text"))]));
  {
    const $t1 = (await $.v(C, "ScheduleDataModule_new"));
    const $t2 = (await $.wv([$t1], "SBCM_PAYMENT_SCHEDULE1", C, false));
    await $.stmt((await $.wcall([$t1, $t2], "CallProcedure", ["sbcmperiod", ["deposid", (await $.wv([$t1, $t2], "depid", { get: async () => L0["depid"], set: async (v) => { L0["depid"] = v; }, local: true }, false)), "PaymentDate", (await $.wv([$t1, $t2], "tarix", { get: async () => L0["tarix"], set: async (v) => { L0["tarix"] = v; }, local: true }, false)), "per_amount", (await $.wv([$t1, $t2], "amount", { get: async () => L0["amount"], set: async (v) => { L0["amount"] = v; }, local: true }, false)), "period", (await $.wv([$t1, $t2], "period", { get: async () => L0["period"], set: async (v) => { L0["period"] = v; }, local: true }, false)), "perc", (await $.wv([$t1, $t2], "per", { get: async () => L0["per"], set: async (v) => { L0["per"] = v; }, local: true }, false))]], C)));
    await $.mcall((await $.wv([$t1, $t2], "OracleDataSet2", C, false)), "Refresh", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TPaymentShedule_new", "Button2Click", async function Button2Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mcall((await $.v(C, "PaymentShedule_new")), "Close", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TPaymentShedule_new", "FormCreate", async function FormCreate(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.stmt((await $.mcall((await $.v(C, "SBTranslateProc")), "TranslateAllCompForms", [Self, (await $.mv((await $.v(C, "sboapiDataModule")), "OrPack_SL"))])));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  return U;
}
