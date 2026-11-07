// Generated from MehtemeImpl.pas by pas2js — do not edit by hand; regenerate instead.
/* eslint-disable */
// @ts-nocheck

export default function define($) {
  const U = $.unit("MehtemeImpl", ["Windows", "Messages", "SysUtils", "Variants", "Classes", "Graphics", "Controls", "Forms", "Dialogs", "StdCtrls", "DBGridEh", "Mask", "DBCtrlsEh", "DBLookupEh", "CurrencyEdit", "ComCtrls", "FlReCalculationDataModuleImpl", "ReCalculationMainForm"]);
  const C = [U];
  U.defClass("TMhFrm", "TForm", {"button1": {"name": "Button1", "type": "TButton"}, "button2": {"name": "Button2", "type": "TButton"}, "dblookupcomboboxeh4": {"name": "DBLookupComboboxEh4", "type": "TDBLookupComboboxEh"}, "label1": {"name": "Label1", "type": "TLabel"}, "label2": {"name": "Label2", "type": "TLabel"}, "datetimepicker1": {"name": "DateTimePicker1", "type": "TDateTimePicker"}, "label4": {"name": "Label4", "type": "TLabel"}, "currencyedit1": {"name": "CurrencyEdit1", "type": "TCurrencyEdit"}, "label3": {"name": "Label3", "type": "TLabel"}, "currencyedit2": {"name": "CurrencyEdit2", "type": "TCurrencyEdit"}, "label5": {"name": "Label5", "type": "TLabel"}, "currencyedit3": {"name": "CurrencyEdit3", "type": "TCurrencyEdit"}}, {});
  U.init(async () => {
    U.var_("MhFrm", null, "TMhFrm");
  });
  U.method("TMhFrm", "Button1Click", async function Button1Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.stmt($.call(C, "close", []));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TMhFrm", "Button2Click", async function Button2Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.set(C, "mehid", (await $.mv((await $.v(C, "DBLookupComboboxEh4")), "KeyValue")));
  if ($.truthy($.eq((await $.mv((await $.v(C, "CurrencyEdit1")), "Value")), 0))) {
    await $.stmt((await $.call(C, "ShowMessage", ["Qətnamə Ə.B seçin!"])));
    return L0.result;
  }
  if ($.truthy($.eq((await $.mv((await $.v(C, "CurrencyEdit1")), "Value")), 0))) {
    await $.stmt((await $.call(C, "ShowMessage", ["Qətnamə F.B!"])));
    return L0.result;
  }
  if ($.truthy($.eq((await $.mv((await $.v(C, "CurrencyEdit1")), "Value")), 0))) {
    await $.stmt((await $.call(C, "ShowMessage", ["Qətnamə Cərimə!"])));
    return L0.result;
  }
  {
    const $t1 = (await $.mv((await $.v(C, "PRDataModule")), "CalculatorPackage"));
    await $.stmt((await $.wcall([$t1], "CallProcedure", ["add_qetname", ["p_id", (await $.wv([$t1], "QCrdID", C, false)), "p_qdat", (await $.mv((await $.wv([$t1], "DateTimePicker1", C, false)), "DateTime")), "p_qrest", (await $.mv((await $.wv([$t1], "CurrencyEdit1", C, false)), "Value")), "p_qintrest", (await $.mv((await $.wv([$t1], "CurrencyEdit2", C, false)), "Value")), "p_qpen", (await $.mv((await $.wv([$t1], "CurrencyEdit3", C, false)), "Value"))]], C)));
  }
  await $.stmt($.call(C, "close", []));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TMhFrm", "FormShow", async function FormShow(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy((await $.mv((await $.mv((await $.v(C, "PRDataModule")), "OracleDataSet17")), "Active")))) {
    await $.mcall((await $.mv((await $.v(C, "PRDataModule")), "OracleDataSet17")), "close", []);
  }
  await $.stmt((await $.mcall((await $.mv((await $.v(C, "PRDataModule")), "OracleDataSet17")), "SetVariable", ["creditid", (await $.v(C, "QCrdID"))])));
  await $.mcall((await $.mv((await $.v(C, "PRDataModule")), "OracleDataSet17")), "open", []);
  await $.mset((await $.v(C, "DateTimePicker1")), "DateTime", (await $.mv((await $.mcall((await $.mv((await $.v(C, "PRDataModule")), "OracleDataSet17")), "FieldByName", ["q_dat"])), "AsDateTime")));
  await $.mset((await $.v(C, "CurrencyEdit1")), "Value", (await $.mv((await $.mcall((await $.mv((await $.v(C, "PRDataModule")), "OracleDataSet17")), "FieldByName", ["q_rest"])), "AsVariant")));
  await $.mset((await $.v(C, "CurrencyEdit2")), "Value", (await $.mv((await $.mcall((await $.mv((await $.v(C, "PRDataModule")), "OracleDataSet17")), "FieldByName", ["q_intrest"])), "AsVariant")));
  await $.mset((await $.v(C, "CurrencyEdit3")), "Value", (await $.mv((await $.mcall((await $.mv((await $.v(C, "PRDataModule")), "OracleDataSet17")), "FieldByName", ["q_penya"])), "AsVariant")));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  return U;
}
