// Generated from CUReplaceImpl.pas by pas2js — do not edit by hand; regenerate instead.
/* eslint-disable */
// @ts-nocheck

export default function define($) {
  const U = $.unit("CUReplaceImpl", ["Windows", "Messages", "SysUtils", "Classes", "Graphics", "Controls", "Forms", "Dialogs", "StdCtrls", "XFSCtrls", "ExtCtrls", "CMCurrencyEdit", "ComCtrls", "CUPaymentDataModuleImpl", "sbsystem", "CUCommonDecls", "CUPaymentAddFormImpl"]);
  const C = [U];
  U.defClass("TSheduleReplace", "TForm", {"xfgroupbox1": {"name": "XFGroupBox1", "type": "TXFGroupBox"}, "xfbutton11": {"name": "XFButton11", "type": "TXFButton"}, "xfbutton1": {"name": "XFButton1", "type": "TXFButton"}, "xfradiogroup1": {"name": "XFRadioGroup1", "type": "TXFRadioGroup"}, "image1": {"name": "Image1", "type": "TImage"}, "xflabel1": {"name": "XFLabel1", "type": "TXFLabel"}, "rest": {"name": "Rest", "type": "TCMCurrencyEdit"}, "xflabel2": {"name": "XFLabel2", "type": "TXFLabel"}, "edit1": {"name": "Edit1", "type": "TEdit"}, "xflabel3": {"name": "XFLabel3", "type": "TXFLabel"}, "xfgroupbox2": {"name": "XFGroupBox2", "type": "TXFGroupBox"}, "xfcheckbox1": {"name": "XFCheckBox1", "type": "TXFCheckBox"}, "datetimepicker1": {"name": "DateTimePicker1", "type": "TDateTimePicker"}}, {});
  U.init(async () => {
    U.var_("SheduleReplace", null, "TSheduleReplace");
  });
  U.method("TSheduleReplace", "FormCanResize", async function FormCanResize(Self, p0, p1, p2, p3) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "newwidth": $.asRef(p1), "newheight": $.asRef(p2), "resize": $.asRef(p3), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await L0["resize"].set(false);
  return L0.result;
}, {"params": ["Sender", "NewWidth", "NewHeight", "Resize"], "kind": "procedure", "ptypes": ["TObject", "Integer", "Integer", "Boolean"]});
  U.method("TSheduleReplace", "FormShow", async function FormShow(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mset((await $.v(C, "XFRadioGroup1")), "ItemIndex", 0);
  await $.mset((await $.v(C, "DateTimePicker1")), "DateTime", (await $.v(C, "Get_CurrentDate")));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TSheduleReplace", "FormKeyPress", async function FormKeyPress(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "key": $.asRef(p1), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.eq((await $.call(C, "ORD", [(await L0["key"].get())])), (await $.v(C, "VK_ESCAPE"))))) {
    await $.stmt($.call(C, "Close", []));
  }
  return L0.result;
}, {"params": ["Sender", "Key"], "kind": "procedure", "ptypes": ["TObject", "Char"]});
  U.method("TSheduleReplace", "XFRadioGroup1Click", async function XFRadioGroup1Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.eq((await $.mv((await $.v(C, "XFRadioGroup1")), "ItemIndex")), 2))) {
    await $.mset((await $.v(C, "XFGroupBox2")), "Enabled", false);
    await $.mset((await $.v(C, "XFCheckBox1")), "Checked", false);
    await $.mset((await $.v(C, "Edit1")), "text", "0");
  } else {
    await $.mset((await $.v(C, "XFGroupBox2")), "Enabled", true);
  }
  if ($.truthy($.eq((await $.mv((await $.v(C, "XFRadioGroup1")), "ItemIndex")), 0))) {
    await $.mset((await $.v(C, "Edit1")), "text", (await $.call(C, "floattostr", [(await $.mcall((await $.mv((await $.v(C, "CUPaymentDataModule")), "cm_utils")), "CallFloatFunction", ["get_period", [(await $.v(C, "Get_SelectedCrdID")), (await $.v(C, "Get_CurrentDate"))]]))])));
    await $.mset((await $.v(C, "edit1")), "readonly", true);
  } else {
    await $.mset((await $.v(C, "edit1")), "readonly", false);
  }
  if ($.truthy($.eq((await $.mv((await $.v(C, "XFRadioGroup1")), "ItemIndex")), 1))) {
    await $.mset((await $.v(C, "Edit1")), "text", (await $.call(C, "floattostr", [$.sub((await $.mcall((await $.mv((await $.v(C, "CUPaymentDataModule")), "cm_utils")), "CallFloatFunction", ["get_period", [(await $.v(C, "Get_SelectedCrdID")), (await $.v(C, "Get_CurrentDate"))]])), (await $.mcall((await $.mv((await $.v(C, "CUPaymentDataModule")), "CM_SCHEDULE")), "CallFloatFunction", ["annuty_period", ["p_creditid", (await $.v(C, "Get_SelectedCrdID")), "p_date", (await $.v(C, "Get_CurrentDate")), "p_pay", (await $.mv((await $.mv((await $.v(C, "PaymentAddForm")), "MainAmtEdit")), "value"))]])))])));
    await $.mset((await $.v(C, "edit1")), "readonly", true);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TSheduleReplace", "XFCheckBox1Click", async function XFCheckBox1Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.eq((await $.mv((await $.v(C, "XFCheckBox1")), "Checked")), true))) {
    await $.mset((await $.v(C, "DateTimePicker1")), "Enabled", true);
  } else {
    await $.mset((await $.v(C, "DateTimePicker1")), "Enabled", false);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TSheduleReplace", "FormClose", async function FormClose(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "action": $.asRef(p1), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mset((await $.v(C, "XFRadioGroup1")), "ItemIndex", 0);
  return L0.result;
}, {"params": ["Sender", "Action"], "kind": "procedure", "ptypes": ["TObject", "TCloseAction"]});
  U.method("TSheduleReplace", "XFButton1Click", async function XFButton1Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "begindate": 0, "creditid": 0, "period": 0, "crdrest": 0};
  await $.fixArgs(L0, ["sender"]);
  await $.set(C, "a", 0);
  if ($.truthy($.eq((await $.mv((await $.v(C, "XFRadioGroup1")), "ItemIndex")), 0))) {
    L0["begindate"] = (await $.mv((await $.v(C, "DateTimePicker1")), "DateTime"));
    L0["creditid"] = (await $.v(C, "Get_SelectedCrdID"));
    L0["period"] = (await $.call(C, "StrToInt", [(await $.mv((await $.v(C, "Edit1")), "Text"))]));
    L0["crdrest"] = (await $.mv((await $.v(C, "Rest")), "value"));
    {
      const $t1 = (await $.v(C, "CUPaymentDataModule"));
      const $t2 = (await $.wv([$t1], "CM_SCHEDULE", C, false));
      await $.stmt((await $.wcall([$t1, $t2], "CallProcedure", ["ChangeSchedule", ["p_CreditID", (await $.wv([$t1, $t2], "CreditID", { get: async () => L0["creditid"], set: async (v) => { L0["creditid"] = v; }, local: true }, false)), "P_Date", (await $.wv([$t1, $t2], "BeginDate", { get: async () => L0["begindate"], set: async (v) => { L0["begindate"] = v; }, local: true }, false)), "p_period", (await $.wv([$t1, $t2], "period", { get: async () => L0["period"], set: async (v) => { L0["period"] = v; }, local: true }, false)), "p_rest", (await $.wv([$t1, $t2], "CrdRest", { get: async () => L0["crdrest"], set: async (v) => { L0["crdrest"] = v; }, local: true }, false)), "p_changedate", (await $.mv((await $.wv([$t1, $t2], "XFCheckBox1", C, false)), "checked")), "p_status", 1]], C)));
    }
  }
  if ($.truthy($.eq((await $.mv((await $.v(C, "XFRadioGroup1")), "ItemIndex")), 1))) {
    L0["begindate"] = (await $.call(C, "integer", [(await $.call(C, "trunc", [(await $.mv((await $.v(C, "DateTimePicker1")), "DateTime"))]))]));
    L0["creditid"] = (await $.v(C, "Get_SelectedCrdID"));
    L0["period"] = (await $.call(C, "StrToInt", [(await $.mv((await $.v(C, "Edit1")), "Text"))]));
    L0["crdrest"] = (await $.mv((await $.v(C, "Rest")), "value"));
    {
      const $t3 = (await $.v(C, "CUPaymentDataModule"));
      const $t4 = (await $.wv([$t3], "CM_SCHEDULE", C, false));
      await $.stmt((await $.wcall([$t3, $t4], "CallProcedure", ["ChangeSchedule", ["p_CreditID", (await $.wv([$t3, $t4], "CreditID", { get: async () => L0["creditid"], set: async (v) => { L0["creditid"] = v; }, local: true }, false)), "P_Date", (await $.wv([$t3, $t4], "BeginDate", { get: async () => L0["begindate"], set: async (v) => { L0["begindate"] = v; }, local: true }, false)), "p_period", (await $.wv([$t3, $t4], "period", { get: async () => L0["period"], set: async (v) => { L0["period"] = v; }, local: true }, false)), "p_rest", (await $.wv([$t3, $t4], "CrdRest", { get: async () => L0["crdrest"], set: async (v) => { L0["crdrest"] = v; }, local: true }, false)), "p_changedate", (await $.mv((await $.wv([$t3, $t4], "XFCheckBox1", C, false)), "checked")), "p_status", 2, "p_pay", (await $.mv((await $.mv((await $.wv([$t3, $t4], "PaymentAddForm", C, false)), "MainAmtEdit")), "value"))]], C)));
    }
  }
  await $.stmt($.call(C, "Close", []));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TSheduleReplace", "XFButton11Click", async function XFButton11Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  L0["rsconfirmpaymentdelete"] = "Siz ödəmə planınin dəyişdirilməsindən imtina edirsiz ! Əminsiniz?";
  if ($.truthy($.ne((await $.call(C, "MessageDlg", [L0["rsconfirmpaymentdelete"], (await $.v(C, "mtConfirmation")), [(await $.v(C, "mbYes")), (await $.v(C, "mbNo"))], 0])), (await $.v(C, "mrYes"))))) {
    return L0.result;
  } else {
    await $.set(C, "a", 1);
  }
  await $.stmt($.call(C, "CLOSE", []));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  return U;
}
