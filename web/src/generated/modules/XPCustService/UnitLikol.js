// Generated from UnitLikol.pas by pas2js — do not edit by hand; regenerate instead.
/* eslint-disable */
// @ts-nocheck

export default function define($) {
  const U = $.unit("UnitLikol", ["Windows", "Messages", "SysUtils", "Variants", "Classes", "Graphics", "Controls", "Forms", "Dialogs", "StdCtrls", "CurrencyEdit", "ComCtrls", "ExtCtrls", "DBGridEh", "Mask", "DBCtrlsEh", "DBLookupEh", "DB", "OracleData", "sboapiDataModuleImpl", "UnitDataModPCustService"]);
  const C = [U];
  U.defClass("TFormLikol", "TForm", {"panel1": {"name": "Panel1", "type": "TPanel"}, "panel2": {"name": "Panel2", "type": "TPanel"}, "panel6": {"name": "Panel6", "type": "TPanel"}, "datetimepicker1": {"name": "DateTimePicker1", "type": "TDateTimePicker"}, "panel8": {"name": "Panel8", "type": "TPanel"}, "panel3": {"name": "Panel3", "type": "TPanel"}, "edit2": {"name": "Edit2", "type": "TEdit"}, "panel4": {"name": "Panel4", "type": "TPanel"}, "edit3": {"name": "Edit3", "type": "TEdit"}, "panel5": {"name": "Panel5", "type": "TPanel"}, "edit4": {"name": "Edit4", "type": "TEdit"}, "panel12": {"name": "Panel12", "type": "TPanel"}, "currencyedit2": {"name": "CurrencyEdit2", "type": "TCurrencyEdit"}, "currencyedit1": {"name": "CurrencyEdit1", "type": "TCurrencyEdit"}, "panel16": {"name": "Panel16", "type": "TPanel"}, "editamount": {"name": "EditAmount", "type": "TCurrencyEdit"}, "button1": {"name": "Button1", "type": "TButton"}, "button2": {"name": "Button2", "type": "TButton"}, "dblookupcomboboxeh1": {"name": "DBLookupComboboxEh1", "type": "TDBLookupComboboxEh"}, "edit1": {"name": "Edit1", "type": "TEdit"}, "button3": {"name": "Button3", "type": "TButton"}, "oracledataset1": {"name": "OracleDataSet1", "type": "TOracleDataSet"}, "datasource1": {"name": "DataSource1", "type": "TDataSource"}, "oracledataset1id": {"name": "OracleDataSet1ID", "type": "TFloatField"}, "oracledataset1kli_id": {"name": "OracleDataSet1KLI_ID", "type": "TFloatField"}, "oracledataset1acc_no": {"name": "OracleDataSet1ACC_NO", "type": "TWideStringField"}, "oracledataset1accno": {"name": "OracleDataSet1ACCNO", "type": "TWideStringField"}, "oracledataset2": {"name": "OracleDataSet2", "type": "TOracleDataSet"}, "floatfield1": {"name": "FloatField1", "type": "TFloatField"}, "floatfield2": {"name": "FloatField2", "type": "TFloatField"}, "widestringfield1": {"name": "WideStringField1", "type": "TWideStringField"}, "datasource2": {"name": "DataSource2", "type": "TDataSource"}, "panel9": {"name": "Panel9", "type": "TPanel"}, "dblookupcomboboxeh2": {"name": "DBLookupComboboxEh2", "type": "TDBLookupComboboxEh"}, "edit7": {"name": "Edit7", "type": "TEdit"}}, {});
  U.init(async () => {
    U.var_("FormLikol", null, "TFormLikol");
    U.var_("v_accid", 0, "integer");
    U.var_("v_accno", '', "String");
    U.var_("v_accid1", 0, "integer");
    U.var_("v_accno1", '', "String");
  });
  U.method("TFormLikol", "Button1Click", async function Button1Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mcall((await $.v(C, "FormLikol")), "Close", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFormLikol", "Button2Click", async function Button2Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "kart_num": ''};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.eq((await $.mv((await $.v(C, "edit1")), "Text")), ""))) {
    await $.stmt((await $.call(C, "showmessage", [" Debit hesab seçilməyib   !"])));
    return L0.result;
  }
  if ($.truthy($.eq((await $.mv((await $.v(C, "edit7")), "Text")), ""))) {
    await $.stmt((await $.call(C, "showmessage", [" Kredit hesab seçilməyib   !"])));
    return L0.result;
  }
  if ($.truthy($.gt((await $.mv((await $.v(C, "EditAmount")), "Value")), 0))) {
    await $.stmt((await $.mcall((await $.mv((await $.v(C, "DataModPCustService")), "OPG_BusProc")), "CallProcedure", ["insert_invoices_fuel", [(await $.v(C, "v_accid")), (await $.v(C, "v_accid1")), (await $.mv((await $.v(C, "EditAmount")), "Value")), (await $.mv((await $.v(C, "DateTimePicker1")), "DateTime")), (await $.v(C, "v_accno1")), (await $.mv((await $.v(C, "edit2")), "Text")), (await $.mv((await $.v(C, "edit3")), "Text")), (await $.mv((await $.v(C, "edit4")), "Text")), (await $.mv((await $.v(C, "CurrencyEdit2")), "Value"))]])));
    await $.mcall((await $.v(C, "edit2")), "Clear", []);
    await $.mcall((await $.v(C, "edit3")), "Clear", []);
    await $.mcall((await $.v(C, "edit4")), "Clear", []);
    await $.mcall((await $.v(C, "CurrencyEdit1")), "Clear", []);
    await $.mcall((await $.v(C, "CurrencyEdit2")), "Clear", []);
    await $.mcall((await $.v(C, "EditAmount")), "clear", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFormLikol", "Button3Click", async function Button3Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mset((await $.v(C, "edit1")), "text", "");
  await $.mset((await $.v(C, "edit7")), "Text", "");
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFormLikol", "CurrencyEdit1Change", async function CurrencyEdit1Change(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.gt((await $.mv((await $.v(C, "CurrencyEdit2")), "Value")), 0))) {
    await $.mset((await $.v(C, "EditAmount")), "Value", $.mul((await $.mv((await $.v(C, "CurrencyEdit1")), "Value")), (await $.mv((await $.v(C, "CurrencyEdit2")), "Value"))));
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFormLikol", "CurrencyEdit1Click", async function CurrencyEdit1Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mset((await $.v(C, "CurrencyEdit1")), "Text", "");
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFormLikol", "CurrencyEdit1KeyPress", async function CurrencyEdit1KeyPress(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "key": $.asRef(p1), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy(($.not(($.in_((await L0["key"].get()), [...$.range("0","9"), "\r", ".", (await $.call(C, "Chr", [8]))])))))) {
    await L0["key"].set("\u0000");
  }
  if ($.truthy($.eq((await L0["key"].get()), "\r"))) {
    await $.mcall((await $.v(C, "CurrencyEdit2")), "SetFocus", []);
  }
  return L0.result;
}, {"params": ["Sender", "Key"], "kind": "procedure", "ptypes": ["TObject", "Char"]});
  U.method("TFormLikol", "CurrencyEdit2Change", async function CurrencyEdit2Change(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.gt((await $.mv((await $.v(C, "CurrencyEdit1")), "Value")), 0))) {
    await $.mset((await $.v(C, "EditAmount")), "Value", $.mul((await $.mv((await $.v(C, "CurrencyEdit1")), "Value")), (await $.mv((await $.v(C, "CurrencyEdit2")), "Value"))));
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFormLikol", "CurrencyEdit2Click", async function CurrencyEdit2Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mset((await $.v(C, "CurrencyEdit2")), "Text", "");
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFormLikol", "CurrencyEdit2KeyPress", async function CurrencyEdit2KeyPress(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "key": $.asRef(p1), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy(($.not(($.in_((await L0["key"].get()), [...$.range("0","9"), "\r", ".", (await $.call(C, "Chr", [8]))])))))) {
    await L0["key"].set("\u0000");
  }
  if ($.truthy($.eq((await L0["key"].get()), "\r"))) {
    await $.mcall((await $.v(C, "Button2")), "SetFocus", []);
  }
  return L0.result;
}, {"params": ["Sender", "Key"], "kind": "procedure", "ptypes": ["TObject", "Char"]});
  U.method("TFormLikol", "DateTimePicker1KeyPress", async function DateTimePicker1KeyPress(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "key": $.asRef(p1), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.eq((await L0["key"].get()), "\r"))) {
    await $.mcall((await $.v(C, "edit1")), "SetFocus", []);
  }
  return L0.result;
}, {"params": ["Sender", "Key"], "kind": "procedure", "ptypes": ["TObject", "Char"]});
  U.method("TFormLikol", "DBLookupComboboxEh1CloseUp", async function DBLookupComboboxEh1CloseUp(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "accept": $.copyArg(p1), result: undefined};
  await $.fixArgs(L0, ["sender", "accept"]);
  {
    const $t1 = (await $.v(C, "oracledataset1"));
    await $.wset([$t1], "v_accid", (await $.mv((await $.wcall([$t1], "FieldByName", ["id"], C)), "AsInteger")), C);
    await $.wset([$t1], "v_accno", (await $.mv((await $.wcall([$t1], "FieldByName", ["acc_no"], C)), "AsString")), C);
    await $.mset((await $.wv([$t1], "edit1", C, false)), "text", (await $.mv((await $.wcall([$t1], "FieldByName", ["accno"], C)), "AsString")));
  }
  return L0.result;
}, {"params": ["Sender", "Accept"], "kind": "procedure", "ptypes": ["TObject", "Boolean"]});
  U.method("TFormLikol", "DBLookupComboboxEh2CloseUp", async function DBLookupComboboxEh2CloseUp(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "accept": $.copyArg(p1), result: undefined};
  await $.fixArgs(L0, ["sender", "accept"]);
  {
    const $t2 = (await $.v(C, "oracledataset2"));
    await $.wset([$t2], "v_accid1", (await $.mv((await $.wcall([$t2], "FieldByName", ["id"], C)), "AsInteger")), C);
    await $.wset([$t2], "v_accno1", (await $.mv((await $.wcall([$t2], "FieldByName", ["acc_no"], C)), "AsString")), C);
    await $.mset((await $.wv([$t2], "edit7", C, false)), "text", (await $.mv((await $.wcall([$t2], "FieldByName", ["acc_no"], C)), "AsString")));
  }
  return L0.result;
}, {"params": ["Sender", "Accept"], "kind": "procedure", "ptypes": ["TObject", "Boolean"]});
  U.method("TFormLikol", "Edit1KeyPress", async function Edit1KeyPress(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "key": $.asRef(p1), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.eq((await L0["key"].get()), "\r"))) {
    await $.mcall((await $.v(C, "edit2")), "SetFocus", []);
  }
  return L0.result;
}, {"params": ["Sender", "Key"], "kind": "procedure", "ptypes": ["TObject", "Char"]});
  U.method("TFormLikol", "Edit2KeyPress", async function Edit2KeyPress(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "key": $.asRef(p1), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.eq((await L0["key"].get()), "\r"))) {
    await $.mcall((await $.v(C, "edit3")), "SetFocus", []);
  }
  return L0.result;
}, {"params": ["Sender", "Key"], "kind": "procedure", "ptypes": ["TObject", "Char"]});
  U.method("TFormLikol", "Edit3KeyPress", async function Edit3KeyPress(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "key": $.asRef(p1), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.eq((await L0["key"].get()), "\r"))) {
    await $.mcall((await $.v(C, "edit4")), "SetFocus", []);
  }
  return L0.result;
}, {"params": ["Sender", "Key"], "kind": "procedure", "ptypes": ["TObject", "Char"]});
  U.method("TFormLikol", "Edit4KeyPress", async function Edit4KeyPress(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "key": $.asRef(p1), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.eq((await L0["key"].get()), "\r"))) {
    await $.mcall((await $.v(C, "CurrencyEdit1")), "SetFocus", []);
  }
  return L0.result;
}, {"params": ["Sender", "Key"], "kind": "procedure", "ptypes": ["TObject", "Char"]});
  U.method("TFormLikol", "Edit6KeyPress", async function Edit6KeyPress(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "key": $.asRef(p1), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy(($.not(($.in_((await L0["key"].get()), [...$.range("0","9"), "\r", ".", (await $.call(C, "Chr", [8]))])))))) {
    await L0["key"].set("\u0000");
  }
  return L0.result;
}, {"params": ["Sender", "Key"], "kind": "procedure", "ptypes": ["TObject", "Char"]});
  U.method("TFormLikol", "FormClose", async function FormClose(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "action": $.asRef(p1), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mcall((await $.v(C, "edit1")), "Clear", []);
  await $.mcall((await $.v(C, "edit2")), "Clear", []);
  await $.mcall((await $.v(C, "edit3")), "Clear", []);
  await $.mcall((await $.v(C, "edit4")), "Clear", []);
  await $.mcall((await $.v(C, "edit7")), "Clear", []);
  await $.mcall((await $.v(C, "CurrencyEdit1")), "Clear", []);
  await $.mcall((await $.v(C, "CurrencyEdit2")), "Clear", []);
  await $.mcall((await $.v(C, "EditAmount")), "clear", []);
  return L0.result;
}, {"params": ["Sender", "Action"], "kind": "procedure", "ptypes": ["TObject", "TCloseAction"]});
  U.method("TFormLikol", "FormShow", async function FormShow(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mcall((await $.v(C, "Edit2")), "SetFocus", []);
  await $.mset((await $.v(C, "DateTimePicker1")), "DateTime", (await $.v(C, "Date")));
  if ($.truthy($.eq((await $.mv((await $.mcall((await $.mv((await $.v(C, "DataModPCustService")), "Ods_closAccount")), "FieldByName", ["bal_cn1"])), "AsString")), "531"))) {
    await $.set(C, "v_accid", (await $.mv((await $.mcall((await $.mv((await $.v(C, "DataModPCustService")), "Ods_closAccount")), "FieldByName", ["id"])), "AsInteger")));
    await $.set(C, "v_accno", (await $.mv((await $.mcall((await $.mv((await $.v(C, "DataModPCustService")), "Ods_closAccount")), "FieldByName", ["acc_no"])), "AsString")));
    await $.mset((await $.v(C, "edit1")), "text", (await $.mv((await $.mcall((await $.mv((await $.v(C, "DataModPCustService")), "Ods_closAccount")), "FieldByName", ["accno"])), "AsString")));
  }
  if ($.truthy($.eq((await $.mv((await $.mcall((await $.mv((await $.v(C, "DataModPCustService")), "Ods_closAccount")), "FieldByName", ["bal_cn1"])), "AsString")), "721"))) {
    await $.set(C, "v_accid1", (await $.mv((await $.mcall((await $.mv((await $.v(C, "DataModPCustService")), "Ods_closAccount")), "FieldByName", ["id"])), "AsInteger")));
    await $.set(C, "v_accno1", (await $.mv((await $.mcall((await $.mv((await $.v(C, "DataModPCustService")), "Ods_closAccount")), "FieldByName", ["acc_no"])), "AsString")));
    await $.mset((await $.v(C, "edit7")), "text", (await $.mv((await $.mcall((await $.mv((await $.v(C, "DataModPCustService")), "Ods_closAccount")), "FieldByName", ["acc_no"])), "AsString")));
  }
  {
    const $t3 = (await $.v(C, "OracleDataSet1"));
    await $.stmt($.wcall([$t3], "close", [], C));
    await $.stmt((await $.wcall([$t3], "SetVariable", ["v_kliid", (await $.mv((await $.mcall((await $.mv((await $.wv([$t3], "DataModPCustService", C, false)), "Ods_closAccount")), "FieldByName", ["kli_id"])), "AsInteger"))], C)));
    await $.stmt($.wcall([$t3], "open", [], C));
  }
  {
    const $t4 = (await $.v(C, "OracleDataSet2"));
    await $.stmt($.wcall([$t4], "close", [], C));
    await $.stmt($.wcall([$t4], "open", [], C));
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  return U;
}
