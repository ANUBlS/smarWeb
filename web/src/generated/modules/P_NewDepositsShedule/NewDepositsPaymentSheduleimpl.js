// Generated from NewDepositsPaymentSheduleimpl.pas by pas2js — do not edit by hand; regenerate instead.
/* eslint-disable */
// @ts-nocheck

export default function define($) {
  const U = $.unit("NewDepositsPaymentSheduleimpl", ["Windows", "Messages", "SysUtils", "Classes", "Graphics", "Controls", "Forms", "Dialogs", "StdCtrls", "CMCurrencyEdit", "ComCtrls", "ExtCtrls", "NewCommonDeclsImpl", "NewDepositsScheduleDataModuleImpl", "NewDepositsSheduleImpl", "SBTranslateProc", "sboapiDataModuleimpl"]);
  const C = [U];
  U.defClass("TNewDepositsPaymentShedule", "TForm", {"button1": {"name": "Button1", "type": "TButton"}, "button2": {"name": "Button2", "type": "TButton"}, "groupbox1": {"name": "GroupBox1", "type": "TGroupBox"}, "groupbox2": {"name": "GroupBox2", "type": "TGroupBox"}, "datetimepicker1": {"name": "DateTimePicker1", "type": "TDateTimePicker"}, "panel1": {"name": "Panel1", "type": "TPanel"}, "groupbox3": {"name": "GroupBox3", "type": "TGroupBox"}, "cmcurrencyrest": {"name": "CMCurrencyRest", "type": "TCMCurrencyEdit"}, "groupbox4": {"name": "GroupBox4", "type": "TGroupBox"}, "editperiod": {"name": "EditPeriod", "type": "TEdit"}}, {});
  U.init(async () => {
    U.var_("NewDepositsPaymentShedule", null, "TNewDepositsPaymentShedule");
  });
  U.method("TNewDepositsPaymentShedule", "Button1Click", async function Button1Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "period": 0, "firstdate": 0, "amount": 0, "percent": 0};
  await $.fixArgs(L0, ["sender"]);
  L0["firstdate"] = (await $.mv((await $.v(C, "DateTimePicker1")), "datetime"));
  L0["amount"] = (await $.mv((await $.v(C, "CMCurrencyRest")), "Value"));
  L0["period"] = (await $.call(C, "StrToInt", [(await $.mv((await $.v(C, "EditPeriod")), "text"))]));
  L0["percent"] = (await $.call(C, "StrToCurr", [(await $.mv((await $.mv((await $.v(C, "NewDepositsFrmShedule")), "DBEdit2")), "text"))]));
  {
    const $t1 = (await $.v(C, "NewDepositsScheduleDataModule"));
    const $t2 = (await $.wv([$t1], "dm_payment_schedules", C, false));
    await $.stmt((await $.wcall([$t1, $t2], "CallProcedure", ["DmPeriod", ["Contractid", (await $.wv([$t1, $t2], "Get_SelectedContID", C, false)), "PaymentDate", (await $.wv([$t1, $t2], "FirstDate", { get: async () => L0["firstdate"], set: async (v) => { L0["firstdate"] = v; }, local: true }, false)), "PRest", (await $.wv([$t1, $t2], "Amount", { get: async () => L0["amount"], set: async (v) => { L0["amount"] = v; }, local: true }, false)), "Period", (await $.wv([$t1, $t2], "Period", { get: async () => L0["period"], set: async (v) => { L0["period"] = v; }, local: true }, false)), "Percent", (await $.wv([$t1, $t2], "Percent", { get: async () => L0["percent"], set: async (v) => { L0["percent"] = v; }, local: true }, false))]], C)));
    await $.mcall((await $.wv([$t1, $t2], "OracleDataSet2", C, false)), "Refresh", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TNewDepositsPaymentShedule", "Button2Click", async function Button2Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mcall((await $.v(C, "NewDepositsPaymentShedule")), "Close", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TNewDepositsPaymentShedule", "FormCreate", async function FormCreate(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.stmt((await $.mcall((await $.v(C, "SBTranslateProc")), "TranslateAllCompForms", [Self, (await $.mv((await $.v(C, "sboapiDataModule")), "OrPack_SL"))])));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  return U;
}
