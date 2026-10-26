// Generated from AddInvestmentimpl.pas by pas2js — do not edit by hand; regenerate instead.
/* eslint-disable */
// @ts-nocheck

export default function define($) {
  const U = $.unit("AddInvestmentimpl", ["Windows", "Messages", "SysUtils", "Variants", "Classes", "Graphics", "Controls", "Forms", "Dialogs", "StdCtrls", "DBCtrls", "ComCtrls", "CurrencyEdit", "Mask", "ExtCtrls", "XFSCtrls", "CommanParametrs", "sboapiDataModuleImpl", "Dm_invstimpl", "FrmMainTransimpl"]);
  const C = [U];
  U.defClass("TAddInvestment", "TForm", {"panel2": {"name": "Panel2", "type": "TPanel"}, "panel1": {"name": "Panel1", "type": "TPanel"}, "button1": {"name": "Button1", "type": "TButton"}, "button2": {"name": "Button2", "type": "TButton"}, "groupbox1": {"name": "GroupBox1", "type": "TGroupBox"}, "label1": {"name": "Label1", "type": "TLabel"}, "edit2": {"name": "Edit2", "type": "TEdit"}, "groupbox3": {"name": "GroupBox3", "type": "TGroupBox"}, "label2": {"name": "Label2", "type": "TLabel"}, "groupbox4": {"name": "GroupBox4", "type": "TGroupBox"}, "label3": {"name": "Label3", "type": "TLabel"}, "datetimepicker1": {"name": "DateTimePicker1", "type": "TDateTimePicker"}, "groupbox2": {"name": "GroupBox2", "type": "TGroupBox"}, "label4": {"name": "Label4", "type": "TLabel"}, "edit3": {"name": "Edit3", "type": "TEdit"}, "groupbox5": {"name": "GroupBox5", "type": "TGroupBox"}, "label5": {"name": "Label5", "type": "TLabel"}, "dblookupcombobox1": {"name": "DBLookupComboBox1", "type": "TDBLookupComboBox"}, "currencyedit1": {"name": "CurrencyEdit1", "type": "TCurrencyEdit"}}, {});
  U.init(async () => {
    U.var_("AddInvestment", null, "TAddInvestment");
  });
  U.method("TAddInvestment", "Button1Click", async function Button1Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.eq((await $.mv((await $.v(C, "Edit2")), "Text")), ""))) {
    await $.stmt((await $.call(C, "showmessage", ["Diqqət! Məbləğ sahesi boşdu"])));
    return L0.result;
  }
  if ($.truthy($.lt((await $.mv((await $.v(C, "CurrencyEdit1")), "Value")), 0))) {
    await $.stmt((await $.call(C, "ShowMessage", ["Yatirim Məbləği 0-dan böyük olmalidir!!!!"])));
    return L0.result;
  }
  {
    const $t1 = (await $.v(C, "Dm_invst"));
    if ($.truthy($.eq((await $.mcall((await $.wv([$t1], "pk_ins_investment", C, false)), "CallBooleanFunction", ["ins_investment_transaction", [(await $.wv([$t1], "contactid", C, false)), (await $.mv((await $.wv([$t1], "CurrencyEdit1", C, false)), "Value")), (await $.mv((await $.mcall((await $.wv([$t1], "DsInvest", C, false)), "FieldByName", ["id"])), "AsInteger")), (await $.mv((await $.wv([$t1], "DBLookupComboBox1", C, false)), "KeyValue"))]])), (await $.wv([$t1], "true", C, false))))) {
      await $.stmt((await $.wcall([$t1], "ShowMessage", ["Emeliyyat yerine yetirildi!!!"], C)));
    }
  }
  await $.mcall((await $.v(C, "AddInvestment")), "Close", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TAddInvestment", "Edit2KeyPress", async function Edit2KeyPress(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "key": $.asRef(p1), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.not(($.in_((await L0["key"].get()), [...$.range("0","9")]))))) {
    await L0["key"].set("\u0000");
  }
  return L0.result;
}, {"params": ["Sender", "Key"], "kind": "procedure", "ptypes": ["TObject", "Char"]});
  U.method("TAddInvestment", "FormKeyPress", async function FormKeyPress(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "key": $.asRef(p1), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.eq((await $.call(C, "ord", [(await L0["key"].get())])), (await $.v(C, "vk_escape"))))) {
    await $.stmt($.call(C, "close", []));
  }
  return L0.result;
}, {"params": ["Sender", "Key"], "kind": "procedure", "ptypes": ["TObject", "Char"]});
  U.method("TAddInvestment", "FormShow", async function FormShow(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mcall((await $.mv((await $.v(C, "Dm_invst")), "ds_sum")), "Close", []);
  await $.stmt((await $.mcall((await $.mv((await $.v(C, "Dm_invst")), "ds_sum")), "SetVariable", ["P_CID", (await $.v(C, "contactid"))])));
  await $.mcall((await $.mv((await $.v(C, "Dm_invst")), "ds_sum")), "Open", []);
  await $.mcall((await $.mv((await $.v(C, "Dm_invst")), "ds_main_acc_no")), "Close", []);
  await $.stmt((await $.mcall((await $.mv((await $.v(C, "Dm_invst")), "ds_main_acc_no")), "SetVariable", ["P_ID", (await $.v(C, "contactid"))])));
  await $.mcall((await $.mv((await $.v(C, "Dm_invst")), "ds_main_acc_no")), "Open", []);
  await $.mcall((await $.mv((await $.v(C, "Dm_invst")), "Dscontracts")), "Close", []);
  await $.stmt((await $.mcall((await $.mv((await $.v(C, "Dm_invst")), "Dscontracts")), "SetVariable", ["cid", (await $.v(C, "contactid"))])));
  await $.mcall((await $.mv((await $.v(C, "Dm_invst")), "Dscontracts")), "Open", []);
  await $.mset((await $.v(C, "CurrencyEdit1")), "Text", "");
  await $.mset((await $.v(C, "DBLookupComboBox1")), "KeyValue", (await $.v(C, "null")));
  await $.mset((await $.v(C, "DateTimePicker1")), "DateTime", (await $.mv((await $.mcall((await $.mv((await $.v(C, "Dm_invst")), "DsSysdat")), "FieldByName", ["tek_dat"])), "AsDateTime")));
  await $.mset((await $.v(C, "Edit2")), "Text", (await $.mv((await $.mcall((await $.mv((await $.v(C, "Dm_invst")), "Dscontracts")), "FieldByName", ["AMMOUNT"])), "AsString")));
  await $.mset((await $.v(C, "Edit3")), "Text", (await $.mv((await $.mcall((await $.mv((await $.v(C, "Dm_invst")), "ds_main_acc_no")), "FieldByName", ["acc_no"])), "AsString")));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  return U;
}
