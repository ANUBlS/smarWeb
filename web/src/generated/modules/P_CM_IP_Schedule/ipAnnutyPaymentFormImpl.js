// Generated from ipAnnutyPaymentFormImpl.pas by pas2js — do not edit by hand; regenerate instead.
/* eslint-disable */
// @ts-nocheck

export default function define($) {
  const U = $.unit("ipAnnutyPaymentFormImpl", ["Windows", "Messages", "SysUtils", "Classes", "Graphics", "Controls", "Forms", "Dialogs", "StdCtrls", "CMCurrencyEdit", "ComCtrls", "ExtCtrls", "NLSLocalizer", "ActnList", "ipScheduleDataModuleImpl"]);
  const C = [U];
  $.defRecord("tannutypaymentinfo", {"paymenttype": () => false, "firstpaydate": () => 0, "amount": () => 0, "periodrate": () => 0, "nperiods": () => 0});
  U.defClass("TAnnutyForm", "TForm", {"nlslocalizer1": {"name": "NLSLocalizer1", "type": "TNLSLocalizer"}, "groupbox1": {"name": "GroupBox1", "type": "TGroupBox"}, "rgannuty": {"name": "RGAnnuty", "type": "TRadioGroup"}, "groupbox2": {"name": "GroupBox2", "type": "TGroupBox"}, "dtpstartdate": {"name": "DTPStartDate", "type": "TDateTimePicker"}, "groupbox4": {"name": "GroupBox4", "type": "TGroupBox"}, "amountedit": {"name": "AmountEdit", "type": "TCMCurrencyEdit"}, "groupbox5": {"name": "GroupBox5", "type": "TGroupBox"}, "cmbboxperiodrate": {"name": "CmbBoxPeriodRate", "type": "TComboBox"}, "panel1": {"name": "Panel1", "type": "TPanel"}, "button2": {"name": "Button2", "type": "TButton"}, "button3": {"name": "Button3", "type": "TButton"}, "actionlist1": {"name": "ActionList1", "type": "TActionList"}, "groupbox6": {"name": "GroupBox6", "type": "TGroupBox"}, "nperiodsedit": {"name": "NPeriodsEdit", "type": "TEdit"}, "actnapply": {"name": "ActnApply", "type": "TAction"}, "actncancel": {"name": "ActnCancel", "type": "TAction"}}, {});
  U.init(async () => {
    U.var_("AnnutyForm", null, "TAnnutyForm");
  });
  U.method("TAnnutyForm", "AnnutyPayment_Get", async function AnnutyPayment_Get(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"payment": $.asRef(p0), result: false, "p": null, "perrate": 0};
  L0["initpaymentinfo"] = $.fn(async function InitPaymentInfo() {
  const L1 = {result: undefined, "periodcnt": 0, "d1": 0, "d2": 0};
  L1["monthsbeetwean"] = $.fn(async function MonthsBeetwean(p0, p1) {
  const L2 = {"d1": $.copyArg(p0), "d2": $.copyArg(p1), result: 0, "tempdate": 0};
  await $.fixArgs(L2, ["d1", "d2"]);
  L2["result"] = 1;
  L2["tempdate"] = L2["d1"];
  while ($.truthy($.le((await $.call(C, "IncMonth", [L2["tempdate"], L2["result"]])), L2["d2"]))) {
    await $.stmt((await $.call(C, "INC", [$.ref(async () => L2["result"], async ($t1) => { L2["result"] = $t1; })])));
    await $.tick();
  }
  if ($.truthy($.gt((await $.call(C, "IncMonth", [L2["tempdate"], L2["result"]])), L2["d2"]))) {
    L2["result"] = $.sub(L2["result"], 1);
  }
  return L2.result;
});
  {
    const $t2 = (await $.mv((await $.v(C, "ScheduleDataModule")), "IPInfo"));
    await $.mset((await $.wv([$t2], "DTPStartDate", C, false)), "DateTime", (await $.wcall([$t2], "IncMonth", [(await $.mv((await $.wcall([$t2], "FieldByName", ["BANKOPENDATE"], C)), "AsDateTime")), 1], C)));
    await $.mset((await $.wv([$t2], "AmountEdit", C, false)), "Value", (await $.mv((await $.mcall((await $.mv((await $.wv([$t2], "ScheduleDataModule", C, false)), "CreditInfo")), "FieldByName", ["NEWFINANCEAMOUNT"])), "AsCurrency")));
    await $.mset((await $.wv([$t2], "CmbBoxPeriodRate", C, false)), "ItemIndex", 0);
    await $.wset([$t2], "D1", (await $.mv((await $.wcall([$t2], "FieldByName", ["BANKOPENDATE"], C)), "AsDateTime")), { get: async () => L1["d1"], set: async (v) => { L1["d1"] = v; }, local: true });
    await $.wset([$t2], "D2", (await $.mv((await $.wcall([$t2], "FieldByName", ["BANKCLOSEDATE"], C)), "AsDateTime")), { get: async () => L1["d2"], set: async (v) => { L1["d2"] = v; }, local: true });
    await $.wset([$t2], "PeriodCnt", (await $.wcall([$t2], "MonthsBeetwean", [(await $.wv([$t2], "D1", { get: async () => L1["d1"], set: async (v) => { L1["d1"] = v; }, local: true }, false)), (await $.wv([$t2], "D2", { get: async () => L1["d2"], set: async (v) => { L1["d2"] = v; }, local: true }, false))], { get: async () => L1["monthsbeetwean"], set: async (v) => { L1["monthsbeetwean"] = v; }, local: true })), { get: async () => L1["periodcnt"], set: async (v) => { L1["periodcnt"] = v; }, local: true });
    await $.mset((await $.wv([$t2], "NPeriodsEdit", C, false)), "Text", (await $.wcall([$t2], "IntToStr", [(await $.wv([$t2], "PeriodCnt", { get: async () => L1["periodcnt"], set: async (v) => { L1["periodcnt"] = v; }, local: true }, false))], C)));
  }
  return L1.result;
});
  await $.stmt($.callv(L0["initpaymentinfo"], []));
  L0["result"] = $.eq((await $.v(C, "ShowModal")), (await $.v(C, "mrOK")));
  if ($.truthy(L0["result"])) {
    { const $t3 = (await $.mv((await $.v(C, "CmbBoxPeriodRate")), "ItemIndex"));
      if ($.eq($t3, 0)) {
        L0["perrate"] = 1;
      }
      else if ($.eq($t3, 1)) {
        L0["perrate"] = 3;
      }
      else if ($.eq($t3, 2)) {
        L0["perrate"] = 6;
      }
      else {
        L0["perrate"] = 12;
      }
    }
    await $.stmt((await $.call(C, "New", [L0["p"]])));
    {
      const $t4 = L0["p"];
      await $.wset([$t4], "PaymentType", $.eq((await $.mv((await $.wv([$t4], "RGAnnuty", C, false)), "ItemIndex")), 0), C);
      await $.wset([$t4], "FirstPayDate", (await $.wcall([$t4], "Integer", [(await $.wcall([$t4], "Trunc", [(await $.mv((await $.wv([$t4], "DTPStartDate", C, false)), "DateTime"))], C))], C)), C);
      await $.wset([$t4], "Amount", (await $.mv((await $.wv([$t4], "AmountEdit", C, false)), "Value")), C);
      await $.wset([$t4], "PeriodRate", (await $.wv([$t4], "PerRate", { get: async () => L0["perrate"], set: async (v) => { L0["perrate"] = v; }, local: true }, false)), C);
      await $.wset([$t4], "NPeriods", (await $.wcall([$t4], "StrToInt", [(await $.mv((await $.wv([$t4], "NPeriodsEdit", C, false)), "Text"))], C)), C);
    }
    await L0["payment"].set(L0["p"]);
  }
  return L0.result;
}, {"params": ["Payment"], "kind": "function", "ptypes": ["PAnnutyPaymentInfo"]});
  U.method("TAnnutyForm", "ActnApplyExecute", async function ActnApplyExecute(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.set(C, "ModalResult", (await $.v(C, "mrOk")));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TAnnutyForm", "ActnCancelExecute", async function ActnCancelExecute(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.set(C, "ModalResult", (await $.v(C, "mrCancel")));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TAnnutyForm", "FormCreate", async function FormCreate(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mset((await $.v(C, "DTPStartDate")), "DateTime", (await $.call(C, "IncMonth", [(await $.mv((await $.mcall((await $.mv((await $.v(C, "ScheduleDataModule")), "IPInfo")), "FieldByName", ["BANKOPENDATE"])), "AsDateTime")), 1])));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  return U;
}
