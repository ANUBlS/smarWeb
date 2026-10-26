// Generated from AnnutyPaymentFormImpl.pas by pas2js — do not edit by hand; regenerate instead.
/* eslint-disable */
// @ts-nocheck

export default function define($) {
  const U = $.unit("AnnutyPaymentFormImpl", ["Windows", "Messages", "SysUtils", "Classes", "Graphics", "Controls", "Forms", "Dialogs", "StdCtrls", "CMCurrencyEdit", "ComCtrls", "ExtCtrls", "ActnList", "ScheduleDataModuleImpl", "sboapiDataModuleImpl", "SBTranslateProc"]);
  const C = [U];
  $.defRecord("tannutypaymentinfo", {"paymenttype": () => false, "firstpaydate": () => 0, "amount": () => 0, "periodrate": () => 0, "nperiods": () => 0, "dovr": () => 0});
  U.defClass("TAnnutyForm", "TForm", {"groupbox1": {"name": "GroupBox1", "type": "TGroupBox"}, "rgannuty": {"name": "RGAnnuty", "type": "TRadioGroup"}, "groupbox2": {"name": "GroupBox2", "type": "TGroupBox"}, "dtpstartdate": {"name": "DTPStartDate", "type": "TDateTimePicker"}, "groupbox4": {"name": "GroupBox4", "type": "TGroupBox"}, "amountedit": {"name": "AmountEdit", "type": "TCMCurrencyEdit"}, "groupbox5": {"name": "GroupBox5", "type": "TGroupBox"}, "cmbboxperiodrate": {"name": "CmbBoxPeriodRate", "type": "TComboBox"}, "panel1": {"name": "Panel1", "type": "TPanel"}, "button2": {"name": "Button2", "type": "TButton"}, "button3": {"name": "Button3", "type": "TButton"}, "actionlist1": {"name": "ActionList1", "type": "TActionList"}, "groupbox6": {"name": "GroupBox6", "type": "TGroupBox"}, "nperiodsedit": {"name": "NPeriodsEdit", "type": "TEdit"}, "actnapply": {"name": "ActnApply", "type": "TAction"}, "actncancel": {"name": "ActnCancel", "type": "TAction"}, "groupbox3": {"name": "GroupBox3", "type": "TGroupBox"}, "gdovr": {"name": "Gdovr", "type": "TEdit"}}, {});
  U.init(async () => {
    U.var_("AnnutyForm", null, "TAnnutyForm");
  });
  U.method("TAnnutyForm", "AnnutyPayment_Get", async function AnnutyPayment_Get(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"payment": $.asRef(p0), result: false, "met": 0, "p": null, "perrate": 0};
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
    const $t2 = (await $.mv((await $.v(C, "ScheduleDataModule")), "CreditInfo"));
    await $.mset((await $.wv([$t2], "DTPStartDate", C, false)), "DateTime", (await $.wcall([$t2], "IncMonth", [(await $.mv((await $.wcall([$t2], "FieldByName", ["DATEOFCONCLUSION"], C)), "AsDateTime")), 1], C)));
    await $.wset([$t2], "met", (await $.mv((await $.wcall([$t2], "FieldByName", ["INTCALCMETHOD"], C)), "AsInteger")), { get: async () => L0["met"], set: async (v) => { L0["met"] = v; }, local: true });
    if ($.truthy($.eq((await $.wv([$t2], "met", { get: async () => L0["met"], set: async (v) => { L0["met"] = v; }, local: true }, false)), 2))) {
      await $.mset((await $.wv([$t2], "AmountEdit", C, false)), "ReadOnly", (await $.wv([$t2], "false", C, false)));
      await $.mset((await $.wv([$t2], "AmountEdit", C, false)), "Value", 0);
    } else {
      await $.mset((await $.wv([$t2], "AmountEdit", C, false)), "Value", (await $.mv((await $.wcall([$t2], "FieldByName", ["CREDITLINEAMOUNT"], C)), "AsCurrency")));
      await $.mset((await $.wv([$t2], "AmountEdit", C, false)), "ReadOnly", (await $.wv([$t2], "true", C, false)));
    }
    await $.mset((await $.wv([$t2], "CmbBoxPeriodRate", C, false)), "ItemIndex", 0);
    await $.wset([$t2], "D1", (await $.mv((await $.wcall([$t2], "FieldByName", ["DATEOFCONCLUSION"], C)), "AsDateTime")), { get: async () => L1["d1"], set: async (v) => { L1["d1"] = v; }, local: true });
    await $.wset([$t2], "D2", (await $.mv((await $.wcall([$t2], "FieldByName", ["DUEDATEFIRSTCONTRACT"], C)), "AsDateTime")), { get: async () => L1["d2"], set: async (v) => { L1["d2"] = v; }, local: true });
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
      await $.wset([$t4], "dovr", (await $.wcall([$t4], "StrToInt", [(await $.mv((await $.wv([$t4], "Gdovr", C, false)), "text"))], C)), C);
      if ($.truthy($.gt((await $.wv([$t4], "dovr", C, false)), (await $.wv([$t4], "NPeriods", C, false))))) {
        await $.stmt((await $.wcall([$t4], "showmessage", ["Güzəşt dövrlərinin sayı periodların sayından az olmalıdir"], C)));
        return L0.result;
      }
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
  U.method("TAnnutyForm", "FormCanResize", async function FormCanResize(Self, p0, p1, p2, p3) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "newwidth": $.asRef(p1), "newheight": $.asRef(p2), "resize": $.asRef(p3), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await L0["resize"].set(false);
  return L0.result;
}, {"params": ["Sender", "NewWidth", "NewHeight", "Resize"], "kind": "procedure", "ptypes": ["TObject", "Integer", "Integer", "Boolean"]});
  U.method("TAnnutyForm", "FormKeyPress", async function FormKeyPress(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "key": $.asRef(p1), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.eq((await $.call(C, "ord", [(await L0["key"].get())])), (await $.v(C, "VK_ESCAPE"))))) {
    await $.stmt($.call(C, "close", []));
  }
  return L0.result;
}, {"params": ["Sender", "Key"], "kind": "procedure", "ptypes": ["TObject", "Char"]});
  U.method("TAnnutyForm", "GdovrKeyPress", async function GdovrKeyPress(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "key": $.asRef(p1), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.not(($.in_((await L0["key"].get()), [...$.range("0","9"), "\b"]))))) {
    await L0["key"].set("\u0000");
    await $.stmt($.call(C, "Beep", []));
  }
  return L0.result;
}, {"params": ["Sender", "Key"], "kind": "procedure", "ptypes": ["TObject", "Char"]});
  U.method("TAnnutyForm", "GdovrChange", async function GdovrChange(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TAnnutyForm", "CmbBoxPeriodRateClick", async function CmbBoxPeriodRateClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TAnnutyForm", "FormClose", async function FormClose(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "action": $.asRef(p1), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  return L0.result;
}, {"params": ["Sender", "Action"], "kind": "procedure", "ptypes": ["TObject", "TCloseAction"]});
  U.method("TAnnutyForm", "FormCreate", async function FormCreate(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.stmt((await $.mcall((await $.v(C, "SBTranslateProc")), "TranslateAllCompForms", [Self, (await $.mv((await $.v(C, "sboapiDataModule")), "OrPack_SL"))])));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  return U;
}
