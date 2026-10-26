// Generated from AddUnit2.pas by pas2js — do not edit by hand; regenerate instead.
/* eslint-disable */
// @ts-nocheck

export default function define($) {
  const U = $.unit("AddUnit2", ["Windows", "Messages", "SysUtils", "Variants", "Classes", "Graphics", "Controls", "Forms", "Dialogs", "ExtCtrls", "StdCtrls", "ComCtrls", "ImgList", "DBCtrls", "DB", "OracleData", "Mask", "CurrencyEdit", "CMCurrencyEdit", "DBCtrlsEh", "DMSec", "Unit1", "Commonimpl"]);
  const C = [U];
  U.defClass("TForm2", "TForm", {"panel1": {"name": "Panel1", "type": "TPanel"}, "label1": {"name": "Label1", "type": "TLabel"}, "label2": {"name": "Label2", "type": "TLabel"}, "label3": {"name": "Label3", "type": "TLabel"}, "label4": {"name": "Label4", "type": "TLabel"}, "label5": {"name": "Label5", "type": "TLabel"}, "label6": {"name": "Label6", "type": "TLabel"}, "label7": {"name": "Label7", "type": "TLabel"}, "label8": {"name": "Label8", "type": "TLabel"}, "button1": {"name": "Button1", "type": "TButton"}, "button2": {"name": "Button2", "type": "TButton"}, "dblookupcombobox1": {"name": "DBLookupComboBox1", "type": "TDBLookupComboBox"}, "edit1": {"name": "Edit1", "type": "TEdit"}, "edit2": {"name": "Edit2", "type": "TEdit"}, "edit3": {"name": "Edit3", "type": "TEdit"}, "edit4": {"name": "Edit4", "type": "TEdit"}, "dbdatetimeediteh1": {"name": "DBDateTimeEditEh1", "type": "TDBDateTimeEditEh"}, "dbdatetimeediteh2": {"name": "DBDateTimeEditEh2", "type": "TDBDateTimeEditEh"}, "dbdatetimeediteh3": {"name": "DBDateTimeEditEh3", "type": "TDBDateTimeEditEh"}, "label9": {"name": "Label9", "type": "TLabel"}, "label10": {"name": "Label10", "type": "TLabel"}, "label11": {"name": "Label11", "type": "TLabel"}, "label12": {"name": "Label12", "type": "TLabel"}, "label13": {"name": "Label13", "type": "TLabel"}, "label14": {"name": "Label14", "type": "TLabel"}, "label15": {"name": "Label15", "type": "TLabel"}, "label16": {"name": "Label16", "type": "TLabel"}, "label17": {"name": "Label17", "type": "TLabel"}, "pid": {"name": "pid", "type": "Integer"}}, {});
  U.init(async () => {
    U.var_("Form2", null, "TForm2");
  });
  U.method("TForm2", "Button2Click", async function Button2Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.stmt($.call(C, "close", []));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TForm2", "Edit4KeyPress", async function Edit4KeyPress(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "key": $.asRef(p1), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.not(($.in_((await L0["key"].get()), [...$.range("0","9"), "\b", "."]))))) {
    await L0["key"].set("\u0000");
  }
  return L0.result;
}, {"params": ["Sender", "Key"], "kind": "procedure", "ptypes": ["TObject", "Char"]});
  U.method("TForm2", "FormKeyPress", async function FormKeyPress(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "key": $.asRef(p1), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.eq((await $.call(C, "ord", [(await L0["key"].get())])), (await $.v(C, "vk_escape"))))) {
    await $.stmt($.call(C, "close", []));
  }
  return L0.result;
}, {"params": ["Sender", "Key"], "kind": "procedure", "ptypes": ["TObject", "Char"]});
  U.method("TForm2", "FormClose", async function FormClose(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "action": $.asRef(p1), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mcall((await $.v(C, "Edit1")), "Clear", []);
  await $.mcall((await $.v(C, "Edit2")), "Clear", []);
  await $.mcall((await $.v(C, "Edit3")), "Clear", []);
  await $.mcall((await $.v(C, "Edit4")), "Clear", []);
  await $.mset((await $.v(C, "DBLookupComboBox1")), "KeyValue", (-(1)));
  await $.mcall((await $.v(C, "DBDateTimeEditEh1")), "Clear", []);
  await $.mcall((await $.v(C, "DBDateTimeEditEh2")), "Clear", []);
  await $.mcall((await $.v(C, "DBDateTimeEditEh3")), "Clear", []);
  return L0.result;
}, {"params": ["Sender", "Action"], "kind": "procedure", "ptypes": ["TObject", "TCloseAction"]});
  U.method("TForm2", "FormCreate", async function FormCreate(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TForm2", "FormShow", async function FormShow(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.eq((await $.v(C, "edit_insert")), false))) {
    {
      const $t1 = (await $.v(C, "Dmexpired_sec"));
      const $t2 = (await $.wv([$t1], "dsexp_sec_ins", C, false));
      await $.mset((await $.wv([$t1, $t2], "edit1", C, false)), "Text", (await $.mv((await $.wcall([$t1, $t2], "FieldByName", ["name"], C)), "AsString")));
      await $.mset((await $.wv([$t1, $t2], "edit2", C, false)), "Text", (await $.mv((await $.wcall([$t1, $t2], "FieldByName", ["acc_bal"], C)), "AsString")));
      await $.mset((await $.wv([$t1, $t2], "edit3", C, false)), "Text", (await $.mv((await $.wcall([$t1, $t2], "FieldByName", ["isin"], C)), "AsString")));
      await $.mset((await $.wv([$t1, $t2], "DBLookupComboBox1", C, false)), "KeyValue", (await $.mv((await $.wcall([$t1, $t2], "FieldByName", ["val_name"], C)), "AsString")));
      await $.mset((await $.wv([$t1, $t2], "DBDateTimeEditEh1", C, false)), "Value", (await $.mv((await $.wcall([$t1, $t2], "FieldByName", ["obtain_date"], C)), "AsVariant")));
      await $.mset((await $.wv([$t1, $t2], "DBDateTimeEditEh2", C, false)), "Value", (await $.mv((await $.wcall([$t1, $t2], "FieldByName", ["return_date"], C)), "AsVariant")));
      await $.mset((await $.wv([$t1, $t2], "edit4", C, false)), "Text", (await $.mv((await $.wcall([$t1, $t2], "FieldByName", ["nominal_ammount"], C)), "AsString")));
      await $.mset((await $.wv([$t1, $t2], "DBDateTimeEditEh3", C, false)), "Value", (await $.mv((await $.wcall([$t1, $t2], "FieldByName", ["erase_date"], C)), "AsVariant")));
    }
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TForm2", "Button1Click", async function Button1Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "p_name": '', "p_acc_bal": '', "p_isin": '', "p_val_name": '', "p_obtain_date": null, "p_return_date": null, "p_nominal_ammount": null, "p_erase_date": null};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.eq((await $.call(C, "trim", [(await $.mv((await $.v(C, "Edit1")), "Text"))])), ""))) {
    await $.stmt((await $.call(C, "showmessage", ["Qiymətli Kağızın adı sahəsi boşdur!"])));
    return L0.result;
  }
  if ($.truthy($.eq((await $.call(C, "trim", [(await $.mv((await $.v(C, "Edit2")), "Text"))])), ""))) {
    await $.stmt((await $.call(C, "showmessage", ["Balans hesabi sahəsi boşdur!"])));
    return L0.result;
  }
  if ($.truthy($.eq((await $.call(C, "trim", [(await $.mv((await $.v(C, "Edit3")), "Text"))])), ""))) {
    await $.stmt((await $.call(C, "showmessage", ["İSİN sahəsi boşdur!"])));
    return L0.result;
  }
  if ($.truthy($.eq((await $.mv((await $.v(C, "DBLookupComboBox1")), "Text")), ""))) {
    await $.stmt((await $.call(C, "showmessage", ["Valyuta sahəsi boşdur!"])));
    return L0.result;
  }
  if ($.truthy($.eq((await $.mv((await $.v(C, "DBDateTimeEditEh1")), "Value")), (await $.v(C, "null"))))) {
    await $.stmt((await $.call(C, "showmessage", ["Alinma tarixi sahəsi boşdur!"])));
    return L0.result;
  }
  if ($.truthy($.eq((await $.mv((await $.v(C, "DBDateTimeEditEh2")), "Value")), (await $.v(C, "null"))))) {
    await $.stmt((await $.call(C, "showmessage", ["Qaytarılma tarixi  sahəsi boşdur!"])));
    return L0.result;
  }
  if ($.truthy($.eq((await $.mv((await $.v(C, "Edit4")), "Text")), ""))) {
    await $.stmt((await $.call(C, "showmessage", ["Nominal məbləğ sahəsi boşdur!"])));
    return L0.result;
  }
  if ($.truthy($.eq((await $.mv((await $.v(C, "DBDateTimeEditEh3")), "Value")), (await $.v(C, "null"))))) {
    await $.stmt((await $.call(C, "showmessage", ["Balansdan silinmə tarixi sahəsi boşdur!"])));
    return L0.result;
  }
  if ($.truthy($.eq((await $.v(C, "edit_insert")), true))) {
    await $.mset((await $.v(C, "DBLookupComboBox1")), "KeyValue", (await $.mv((await $.mcall((await $.mv((await $.v(C, "Dmexpired_sec")), "Avalute")), "FieldByName", ["val_name"])), "AsString")));
    L0["p_name"] = (await $.mv((await $.v(C, "edit1")), "Text"));
    L0["p_acc_bal"] = (await $.mv((await $.v(C, "edit2")), "Text"));
    L0["p_isin"] = (await $.mv((await $.v(C, "edit3")), "Text"));
    L0["p_val_name"] = (await $.mv((await $.v(C, "DBLookupComboBox1")), "KeyValue"));
    L0["p_obtain_date"] = (await $.mv((await $.v(C, "DBDateTimeEditEh1")), "Value"));
    L0["p_return_date"] = (await $.mv((await $.v(C, "DBDateTimeEditEh2")), "Value"));
    L0["p_nominal_ammount"] = (await $.mv((await $.v(C, "edit4")), "Text"));
    L0["p_erase_date"] = (await $.mv((await $.v(C, "DBDateTimeEditEh3")), "Value"));
    await $.stmt((await $.mcall((await $.mv((await $.v(C, "Dmexpired_sec")), "PG_EXPIRED_SECURITIES")), "CallProcedure", ["add_EXPIRED_SECURITIES", [L0["p_name"], L0["p_acc_bal"], L0["p_isin"], L0["p_val_name"], L0["p_obtain_date"], L0["p_return_date"], L0["p_nominal_ammount"], L0["p_erase_date"]]])));
  }
  if ($.truthy($.eq((await $.v(C, "edit_insert")), false))) {
    await $.mset((await $.v(C, "DBLookupComboBox1")), "KeyValue", (await $.mv((await $.mcall((await $.mv((await $.v(C, "Dmexpired_sec")), "Avalute")), "FieldByName", ["val_name"])), "AsString")));
    L0["p_name"] = (await $.mv((await $.v(C, "edit1")), "Text"));
    L0["p_acc_bal"] = (await $.mv((await $.v(C, "edit2")), "Text"));
    L0["p_isin"] = (await $.mv((await $.v(C, "edit3")), "Text"));
    L0["p_val_name"] = (await $.mv((await $.v(C, "DBLookupComboBox1")), "KeyValue"));
    L0["p_obtain_date"] = (await $.mv((await $.v(C, "DBDateTimeEditEh1")), "Value"));
    L0["p_return_date"] = (await $.mv((await $.v(C, "DBDateTimeEditEh2")), "Value"));
    L0["p_nominal_ammount"] = (await $.mv((await $.v(C, "edit4")), "Text"));
    L0["p_erase_date"] = (await $.mv((await $.v(C, "DBDateTimeEditEh3")), "Value"));
    await $.stmt((await $.mcall((await $.mv((await $.v(C, "Dmexpired_sec")), "PG_EXPIRED_SECURITIES")), "CallProcedure", ["edit_EXPIRED_SECURITIES", [(await $.v(C, "CID")), L0["p_name"], L0["p_acc_bal"], L0["p_isin"], L0["p_val_name"], L0["p_obtain_date"], L0["p_return_date"], L0["p_nominal_ammount"], L0["p_erase_date"]]])));
  }
  await $.mcall((await $.mv((await $.v(C, "Dmexpired_sec")), "dsexp_sec_ins")), "Refresh", []);
  await $.mcall((await $.v(C, "Form2")), "close", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  return U;
}
