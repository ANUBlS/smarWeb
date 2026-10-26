// Generated from Add_Invest_paymentimpl.pas by pas2js — do not edit by hand; regenerate instead.
/* eslint-disable */
// @ts-nocheck

export default function define($) {
  const U = $.unit("Add_Invest_paymentimpl", ["Windows", "Messages", "SysUtils", "Variants", "Classes", "Graphics", "Controls", "Forms", "Dialogs", "StdCtrls", "ComCtrls", "XFSCtrls", "ExtCtrls", "DBCtrls", "CurrencyEdit", "CommanParametrs", "sboapiDataModuleImpl", "DmPayment1impl", "Frmpayment1impl"]);
  const C = [U];
  U.defClass("TAdd_Invest_payment", "TForm", {"panel2": {"name": "Panel2", "type": "TPanel"}, "panel1": {"name": "Panel1", "type": "TPanel"}, "button1": {"name": "Button1", "type": "TButton"}, "button2": {"name": "Button2", "type": "TButton"}, "groupbox1": {"name": "GroupBox1", "type": "TGroupBox"}, "label1": {"name": "Label1", "type": "TLabel"}, "groupbox2": {"name": "GroupBox2", "type": "TGroupBox"}, "label2": {"name": "Label2", "type": "TLabel"}, "edit1": {"name": "Edit1", "type": "TEdit"}, "groupbox3": {"name": "GroupBox3", "type": "TGroupBox"}, "label3": {"name": "Label3", "type": "TLabel"}, "groupbox4": {"name": "GroupBox4", "type": "TGroupBox"}, "label8": {"name": "Label8", "type": "TLabel"}, "groupbox5": {"name": "GroupBox5", "type": "TGroupBox"}, "label9": {"name": "Label9", "type": "TLabel"}, "edit6": {"name": "Edit6", "type": "TEdit"}, "groupbox6": {"name": "GroupBox6", "type": "TGroupBox"}, "label10": {"name": "Label10", "type": "TLabel"}, "groupbox7": {"name": "GroupBox7", "type": "TGroupBox"}, "label7": {"name": "Label7", "type": "TLabel"}, "datetimepicker1": {"name": "DateTimePicker1", "type": "TDateTimePicker"}, "edit3": {"name": "Edit3", "type": "TEdit"}, "edit4": {"name": "Edit4", "type": "TEdit"}, "groupbox8": {"name": "GroupBox8", "type": "TGroupBox"}, "label4": {"name": "Label4", "type": "TLabel"}, "dblookupcombobox1": {"name": "DBLookupComboBox1", "type": "TDBLookupComboBox"}, "groupbox9": {"name": "GroupBox9", "type": "TGroupBox"}, "label5": {"name": "Label5", "type": "TLabel"}, "dblookupcombobox2": {"name": "DBLookupComboBox2", "type": "TDBLookupComboBox"}, "groupbox10": {"name": "GroupBox10", "type": "TGroupBox"}, "label6": {"name": "Label6", "type": "TLabel"}, "dblookupcombobox3": {"name": "DBLookupComboBox3", "type": "TDBLookupComboBox"}, "groupbox11": {"name": "GroupBox11", "type": "TGroupBox"}, "label11": {"name": "Label11", "type": "TLabel"}, "edit7": {"name": "Edit7", "type": "TEdit"}, "groupbox12": {"name": "GroupBox12", "type": "TGroupBox"}, "label12": {"name": "Label12", "type": "TLabel"}, "edit8": {"name": "Edit8", "type": "TEdit"}, "groupbox13": {"name": "GroupBox13", "type": "TGroupBox"}, "label13": {"name": "Label13", "type": "TLabel"}, "groupbox14": {"name": "GroupBox14", "type": "TGroupBox"}, "label14": {"name": "Label14", "type": "TLabel"}, "dblookupcombobox4": {"name": "DBLookupComboBox4", "type": "TDBLookupComboBox"}, "groupbox15": {"name": "GroupBox15", "type": "TGroupBox"}, "label15": {"name": "Label15", "type": "TLabel"}, "edit10": {"name": "Edit10", "type": "TEdit"}, "groupbox16": {"name": "GroupBox16", "type": "TGroupBox"}, "label16": {"name": "Label16", "type": "TLabel"}, "edit11": {"name": "Edit11", "type": "TEdit"}, "groupbox17": {"name": "GroupBox17", "type": "TGroupBox"}, "label17": {"name": "Label17", "type": "TLabel"}, "currencyedit3": {"name": "CurrencyEdit3", "type": "TCurrencyEdit"}, "currencyedit4": {"name": "CurrencyEdit4", "type": "TCurrencyEdit"}, "currencyedit2": {"name": "CurrencyEdit2", "type": "TCurrencyEdit"}, "currencyedit1": {"name": "CurrencyEdit1", "type": "TCurrencyEdit"}, "edit2": {"name": "Edit2", "type": "TEdit"}, "edit5": {"name": "Edit5", "type": "TEdit"}}, {});
  U.init(async () => {
    U.var_("Add_Invest_payment", null, "TAdd_Invest_payment");
  });
  U.method("TAdd_Invest_payment", "Button1Click", async function Button1Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t1 = (await $.v(C, "DmPayment1"));
    if ($.truthy($.eq((await $.mcall((await $.wv([$t1], "pk_ins_investment", C, false)), "CallBooleanFunction", ["ins_invest_payment_transaction", [(await $.wv([$t1], "contactid", C, false)), (await $.mv((await $.wv([$t1], "CurrencyEdit1", C, false)), "Value")), (await $.mv((await $.wv([$t1], "DBLookupComboBox1", C, false)), "KeyValue")), (await $.mv((await $.wv([$t1], "CurrencyEdit2", C, false)), "Value")), (await $.mv((await $.wv([$t1], "DBLookupComboBox2", C, false)), "KeyValue")), (await $.mv((await $.wv([$t1], "CurrencyEdit3", C, false)), "Value")), (await $.mv((await $.mcall((await $.mv((await $.wv([$t1], "DmPayment1", C, false)), "Dscontracts")), "FieldByName", ["INCOME_ACC_ID"])), "AsInteger")), (await $.mv((await $.wv([$t1], "CurrencyEdit4", C, false)), "Value")), (await $.mv((await $.mcall((await $.mv((await $.wv([$t1], "DmPayment1", C, false)), "Dscontracts")), "FieldByName", ["EXP_ACC_ID"])), "AsInteger"))]])), (await $.wv([$t1], "true", C, false))))) {
      await $.stmt((await $.wcall([$t1], "ShowMessage", ["Əməliyyatlar yerinə yetirildi!"], C)));
    }
  }
  await $.mcall((await $.mv((await $.v(C, "DmPayment1")), "DsMain")), "Close", []);
  await $.stmt((await $.mcall((await $.mv((await $.v(C, "DmPayment1")), "DsMain")), "SetVariable", ["PCID", (await $.v(C, "contactid"))])));
  await $.mcall((await $.mv((await $.v(C, "DmPayment1")), "DsMain")), "Open", []);
  await $.mcall((await $.v(C, "Add_Invest_payment")), "close", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TAdd_Invest_payment", "Button2Click", async function Button2Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.stmt($.call(C, "close", []));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TAdd_Invest_payment", "FormKeyPress", async function FormKeyPress(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "key": $.asRef(p1), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.eq((await $.call(C, "ord", [(await L0["key"].get())])), (await $.v(C, "vk_escape"))))) {
    await $.stmt($.call(C, "close", []));
  }
  return L0.result;
}, {"params": ["Sender", "Key"], "kind": "procedure", "ptypes": ["TObject", "Char"]});
  U.method("TAdd_Invest_payment", "FormShow", async function FormShow(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mcall((await $.mv((await $.v(C, "DmPayment1")), "Dscontracts")), "Close", []);
  await $.stmt((await $.mcall((await $.mv((await $.v(C, "DmPayment1")), "Dscontracts")), "SetVariable", ["cid", (await $.v(C, "contactid"))])));
  await $.mcall((await $.mv((await $.v(C, "DmPayment1")), "Dscontracts")), "Open", []);
  await $.mcall((await $.mv((await $.v(C, "DmPayment1")), "ds_kassa")), "Refresh", []);
  await $.mcall((await $.mv((await $.v(C, "DmPayment1")), "ds_kassa1")), "Refresh", []);
  await $.mset((await $.v(C, "DBLookupComboBox1")), "KeyValue", (await $.v(C, "null")));
  await $.mset((await $.v(C, "DBLookupComboBox2")), "KeyValue", (await $.v(C, "null")));
  await $.mset((await $.v(C, "Edit2")), "Text", (await $.mv((await $.mcall((await $.mv((await $.v(C, "DmPayment1")), "Dscontracts")), "FieldByName", ["INCOME_ACC_NO"])), "AsString")));
  await $.mset((await $.v(C, "Edit5")), "Text", (await $.mv((await $.mcall((await $.mv((await $.v(C, "DmPayment1")), "Dscontracts")), "FieldByName", ["EXP_ACC_NO"])), "AsString")));
  await $.mset((await $.v(C, "CurrencyEdit1")), "Value", 0);
  await $.mset((await $.v(C, "CurrencyEdit2")), "Value", 0);
  await $.mset((await $.v(C, "CurrencyEdit3")), "Value", 0);
  await $.mset((await $.v(C, "CurrencyEdit4")), "Value", 0);
  await $.mset((await $.v(C, "Edit3")), "Text", (await $.mv((await $.mcall((await $.mv((await $.v(C, "DmPayment1")), "Dscontracts")), "FieldByName", ["MAIN_ACC_ID"])), "AsString")));
  await $.mset((await $.v(C, "Edit4")), "Text", (await $.mv((await $.mcall((await $.mv((await $.v(C, "DmPayment1")), "Dscontracts")), "FieldByName", ["per_acc_id"])), "AsString")));
  await $.mset((await $.v(C, "Edit7")), "Text", (await $.mv((await $.mcall((await $.mv((await $.v(C, "DmPayment1")), "Dscontracts")), "FieldByName", ["per_acc_id"])), "AsString")));
  await $.mset((await $.v(C, "Edit10")), "Text", (await $.mv((await $.mcall((await $.mv((await $.v(C, "DmPayment1")), "Dscontracts")), "FieldByName", ["per_acc_id"])), "AsString")));
  await $.mset((await $.v(C, "Edit1")), "Text", (await $.mv((await $.mcall((await $.mv((await $.v(C, "DmPayment1")), "Dscontracts")), "FieldByName", ["ammount"])), "AsString")));
  await $.mset((await $.v(C, "Edit6")), "Text", (await $.mv((await $.mcall((await $.mv((await $.v(C, "DmPayment1")), "Dscontracts")), "FieldByName", ["faiz_qaliq"])), "AsString")));
  await $.mset((await $.v(C, "DateTimePicker1")), "DateTime", (await $.mv((await $.mcall((await $.mv((await $.v(C, "DmPayment1")), "DsSysdat")), "FieldByName", ["tek_dat"])), "AsDateTime")));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  return U;
}
