// Generated from UnitTransaction11.pas by pas2js — do not edit by hand; regenerate instead.
/* eslint-disable */
// @ts-nocheck

export default function define($) {
  const U = $.unit("UnitTransaction11", ["Windows", "Messages", "SysUtils", "Variants", "Classes", "Graphics", "Controls", "Forms", "Dialogs", "StdCtrls", "ComCtrls", "ExtCtrls", "DB", "OracleData", "DBGridEh", "Mask", "DBCtrlsEh", "DBLookupEh", "DBCtrls", "CurrencyEdit", "Grids", "XDBGrids", "UnitDataModPCustService", "sboapiDataModuleImpl"]);
  const C = [U];
  U.defClass("TFormTransaction11", "TForm", {"oracledataset1": {"name": "OracleDataSet1", "type": "TOracleDataSet"}, "oracledataset2": {"name": "OracleDataSet2", "type": "TOracleDataSet"}, "oracledataset3": {"name": "OracleDataSet3", "type": "TOracleDataSet"}, "oracledataset4": {"name": "OracleDataSet4", "type": "TOracleDataSet"}, "oracledataset1id": {"name": "OracleDataSet1ID", "type": "TFloatField"}, "oracledataset1name": {"name": "OracleDataSet1NAME", "type": "TWideStringField"}, "datasource1": {"name": "DataSource1", "type": "TDataSource"}, "datasource2": {"name": "DataSource2", "type": "TDataSource"}, "datasource3": {"name": "DataSource3", "type": "TDataSource"}, "datasource4": {"name": "DataSource4", "type": "TDataSource"}, "oracledataset2id": {"name": "OracleDataSet2ID", "type": "TIntegerField"}, "oracledataset2cust_name": {"name": "OracleDataSet2CUST_NAME", "type": "TWideStringField"}, "oracledataset3kli_id": {"name": "OracleDataSet3KLI_ID", "type": "TFloatField"}, "oracledataset3acc_no": {"name": "OracleDataSet3ACC_NO", "type": "TWideStringField"}, "oracledataset3id": {"name": "OracleDataSet3ID", "type": "TFloatField"}, "oracledataset4id": {"name": "OracleDataSet4ID", "type": "TFloatField"}, "oracledataset4name": {"name": "OracleDataSet4NAME", "type": "TWideStringField"}, "oracledataset4bp_id": {"name": "OracleDataSet4BP_ID", "type": "TFloatField"}, "oracledataset4rate": {"name": "OracleDataSet4RATE", "type": "TFloatField"}, "oracledataset4currency": {"name": "OracleDataSet4CURRENCY", "type": "TFloatField"}, "panel2": {"name": "Panel2", "type": "TPanel"}, "panel4": {"name": "Panel4", "type": "TPanel"}, "dblookupcomboboxeh3": {"name": "DBLookupComboboxEh3", "type": "TDBLookupComboboxEh"}, "edit4": {"name": "Edit4", "type": "TEdit"}, "panel5": {"name": "Panel5", "type": "TPanel"}, "edit1": {"name": "Edit1", "type": "TEdit"}, "panel6": {"name": "Panel6", "type": "TPanel"}, "datetimepicker1": {"name": "DateTimePicker1", "type": "TDateTimePicker"}, "panel7": {"name": "Panel7", "type": "TPanel"}, "edit3": {"name": "Edit3", "type": "TEdit"}, "panel8": {"name": "Panel8", "type": "TPanel"}, "edit2": {"name": "Edit2", "type": "TEdit"}, "panel14": {"name": "Panel14", "type": "TPanel"}, "dblookupcomboboxeh2": {"name": "DBLookupComboboxEh2", "type": "TDBLookupComboboxEh"}, "edit8": {"name": "Edit8", "type": "TEdit"}, "panel15": {"name": "Panel15", "type": "TPanel"}, "dblookupcomboboxeh1": {"name": "DBLookupComboboxEh1", "type": "TDBLookupComboboxEh"}, "edit9": {"name": "Edit9", "type": "TEdit"}, "panel1": {"name": "Panel1", "type": "TPanel"}, "panel9": {"name": "Panel9", "type": "TPanel"}, "edit5": {"name": "Edit5", "type": "TEdit"}, "panel10": {"name": "Panel10", "type": "TPanel"}, "edit6": {"name": "Edit6", "type": "TEdit"}, "panel11": {"name": "Panel11", "type": "TPanel"}, "dblookupcomboboxeh4": {"name": "DBLookupComboboxEh4", "type": "TDBLookupComboboxEh"}, "panel13": {"name": "Panel13", "type": "TPanel"}, "edit7": {"name": "Edit7", "type": "TEdit"}, "panel16": {"name": "Panel16", "type": "TPanel"}, "editamount": {"name": "EditAmount", "type": "TCurrencyEdit"}, "panel3": {"name": "Panel3", "type": "TPanel"}, "button1": {"name": "Button1", "type": "TButton"}, "button2": {"name": "Button2", "type": "TButton"}, "button3": {"name": "Button3", "type": "TButton"}, "oracledataset3accno": {"name": "OracleDataSet3ACCNO", "type": "TWideStringField"}, "edit11": {"name": "Edit11", "type": "TEdit"}, "oracledataset4rate1": {"name": "OracleDataSet4RATE1", "type": "TFloatField"}, "currencyedit1": {"name": "CurrencyEdit1", "type": "TCurrencyEdit"}, "oracledataset4carnumber": {"name": "OracleDataSet4CARNUMBER", "type": "TWideStringField"}, "label1": {"name": "Label1", "type": "TLabel"}, "radiogroup1": {"name": "RadioGroup1", "type": "TRadioGroup"}, "currencyedit2": {"name": "CurrencyEdit2", "type": "TCurrencyEdit"}, "label2": {"name": "Label2", "type": "TLabel"}}, {});
  U.init(async () => {
    U.var_("FormTransaction11", null, "TFormTransaction11");
    U.var_("procid", 0, "integer");
    U.var_("acc_id", 0, "integer");
    U.var_("kli_id", 0, "integer");
    U.var_("v_truefalse", false, "Boolean");
  });
  U.method("TFormTransaction11", "Button1Click", async function Button1Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "trdate": 0, "ammount": null, "ceki": null, "text": 0};
  await $.fixArgs(L0, ["sender"]);
  L0["text"] = (await $.call(C, "Length", [(await $.mv((await $.v(C, "edit1")), "Text"))]));
  if ($.truthy((await $.and_(($.eq((await $.mv((await $.v(C, "edit11")), "Text")), "")), async () => ($.lt(L0["text"], 5)))))) {
    await $.stmt((await $.call(C, "showmessage", ["Qaimənin Kodu  5 rəqəmdən ola bilməz !"])));
    return L0.result;
  }
  if ($.truthy((await $.and_(($.ne((await $.mv((await $.v(C, "edit11")), "Text")), "")), async () => ($.lt(L0["text"], 8)))))) {
    await $.stmt((await $.call(C, "showmessage", ["Qaimənin Kodu  8 rəqəmdən ola bilməz !"])));
    return L0.result;
  }
  if ($.truthy($.eq((await $.mv((await $.v(C, "CurrencyEdit1")), "Text")), ""))) {
    await $.stmt((await $.call(C, "ShowMessage", ["  Tarif sahesi seçilmeyib   !"])));
    return L0.result;
  }
  if ($.truthy($.eq((await $.mv((await $.v(C, "CurrencyEdit2")), "Value")), 0))) {
    await $.stmt((await $.call(C, "ShowMessage", ["   Yükün çəkisi sahəsi boşdur   !"])));
    return L0.result;
  }
  {
    const $t1 = (await $.v(C, "oracledataset1"));
    if ($.truthy((await $.and_(((await $.wv([$t1], "Active", C, false))), async () => ($.ne((await $.wv([$t1], "RecordCount", C, false)), 0)))))) {
      await $.wset([$t1], "procid", (await $.mv((await $.wcall([$t1], "FieldByName", ["id"], C)), "AsInteger")), C);
    } else {
      await $.wset([$t1], "procid", (await $.mv((await $.mcall((await $.mv((await $.wv([$t1], "DataModPCustService", C, false)), "ODS_BusProc")), "FieldByName", ["id"])), "AsInteger")), C);
    }
  }
  L0["trdate"] = (await $.mv((await $.v(C, "DateTimePicker1")), "DateTime"));
  {
    const $t2 = (await $.v(C, "oracledataset3"));
    if ($.truthy($.eq((await $.wv([$t2], "v_truefalse", C, false)), (await $.wv([$t2], "false", C, false))))) {
      await $.wset([$t2], "acc_id", (await $.mv((await $.wcall([$t2], "FieldByName", ["id"], C)), "AsInteger")), C);
      await $.wset([$t2], "kli_id", (await $.mv((await $.wcall([$t2], "FieldByName", ["kli_id"], C)), "AsInteger")), C);
    } else {
      await $.wset([$t2], "acc_id", (await $.mv((await $.mcall((await $.mv((await $.wv([$t2], "DataModPCustService", C, false)), "Ods_closAccount")), "FieldByName", ["id"])), "AsInteger")), C);
      await $.wset([$t2], "kli_id", (await $.mv((await $.mcall((await $.mv((await $.wv([$t2], "DataModPCustService", C, false)), "Ods_closAccount")), "FieldByName", ["kli_id"])), "AsInteger")), C);
    }
  }
  L0["ceki"] = (await $.mv((await $.v(C, "CurrencyEdit1")), "Value"));
  if ($.truthy($.gt((await $.mv((await $.v(C, "EditAmount")), "Value")), 0))) {
    await $.stmt((await $.mcall((await $.mv((await $.v(C, "DataModPCustService")), "OPG_BusProc")), "CallProcedure", ["insert_invoices", [(await $.v(C, "procid")), (await $.v(C, "acc_id")), (await $.mv((await $.v(C, "EditAmount")), "Value")), (await $.mv((await $.v(C, "Edit7")), "Text")), $.add($.add((await $.mv((await $.v(C, "Edit11")), "Text")), ""), (await $.mv((await $.v(C, "edit1")), "Text"))), (await $.mv((await $.v(C, "DateTimePicker1")), "DateTime")), (await $.mv((await $.v(C, "edit8")), "Text")), (await $.mv((await $.v(C, "edit4")), "Text")), (await $.mv((await $.v(C, "edit2")), "Text")), (await $.mv((await $.v(C, "edit3")), "Text")), (await $.mv((await $.v(C, "edit5")), "Text")), (await $.mv((await $.v(C, "edit9")), "Text")), (await $.mv((await $.v(C, "edit6")), "Text")), L0["ceki"], (await $.mv((await $.v(C, "DBLookupComboboxEh4")), "Text")), (await $.mv((await $.v(C, "DBLookupComboboxEh4")), "Value")), (await $.mv((await $.v(C, "CurrencyEdit2")), "Value")), (await $.v(C, "kli_id")), (await $.mv((await $.mv((await $.v(C, "DataModPCustService")), "ODS_BusProcCLASSID")), "AsInteger")), (await $.mv((await $.v(C, "OracleDataSet4BP_ID")), "AsInteger")), (await $.mv((await $.v(C, "edit2")), "Text")), (await $.mv((await $.v(C, "OracleDataSet4NAME")), "AsString")), (await $.mv((await $.v(C, "CurrencyEdit1")), "Value"))]])));
    await $.stmt((await $.call(C, "clear", [L0["sender"]])));
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFormTransaction11", "Button2Click", async function Button2Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mcall((await $.v(C, "Edit9")), "SetFocus", []);
  await $.mcall((await $.v(C, "oracledataset1")), "open", []);
  await $.mcall((await $.v(C, "oracledataset2")), "open", []);
  await $.mset((await $.v(C, "DBLookupComboboxEh1")), "Enabled", true);
  await $.mset((await $.v(C, "DBLookupComboboxEh2")), "Enabled", true);
  await $.mcall((await $.v(C, "edit9")), "Clear", []);
  await $.mcall((await $.v(C, "edit8")), "Clear", []);
  await $.stmt((await $.call(C, "clear", [L0["sender"]])));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFormTransaction11", "Button3Click", async function Button3Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mcall((await $.v(C, "FormTransaction11")), "Close", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFormTransaction11", "clear", async function clear(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mcall((await $.v(C, "edit1")), "Clear", []);
  await $.mcall((await $.v(C, "edit4")), "Clear", []);
  await $.mcall((await $.v(C, "edit2")), "Clear", []);
  await $.mcall((await $.v(C, "edit3")), "Clear", []);
  await $.mcall((await $.v(C, "edit5")), "Clear", []);
  await $.mcall((await $.v(C, "edit6")), "Clear", []);
  await $.mcall((await $.v(C, "edit7")), "Clear", []);
  await $.mcall((await $.v(C, "Edit11")), "Clear", []);
  await $.mset((await $.v(C, "DBLookupComboboxEh4")), "KeyValue", (-(1)));
  await $.mcall((await $.v(C, "CurrencyEdit1")), "Clear", []);
  await $.mcall((await $.v(C, "CurrencyEdit2")), "Clear", []);
  await $.mcall((await $.v(C, "EditAmount")), "Clear", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFormTransaction11", "CurrencyEdit1Change", async function CurrencyEdit1Change(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mset((await $.v(C, "EditAmount")), "Value", (await $.mv((await $.v(C, "CurrencyEdit1")), "Value")));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFormTransaction11", "CurrencyEdit1Click", async function CurrencyEdit1Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mset((await $.v(C, "CurrencyEdit1")), "Text", "");
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFormTransaction11", "CurrencyEdit1KeyPress", async function CurrencyEdit1KeyPress(Self, p0, p1) {
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
  U.method("TFormTransaction11", "CurrencyEdit2Change", async function CurrencyEdit2Change(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.eq((await $.mv((await $.v(C, "RadioGroup1")), "ItemIndex")), 1))) {
    await $.mset((await $.v(C, "EditAmount")), "Value", $.mul((await $.mv((await $.v(C, "CurrencyEdit1")), "Value")), (await $.mv((await $.v(C, "CurrencyEdit2")), "Value"))));
  } else {
    await $.mset((await $.v(C, "EditAmount")), "Value", (await $.mv((await $.v(C, "CurrencyEdit1")), "Value")));
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFormTransaction11", "CurrencyEdit2Click", async function CurrencyEdit2Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mset((await $.v(C, "CurrencyEdit2")), "Text", "");
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFormTransaction11", "CurrencyEdit2KeyPress", async function CurrencyEdit2KeyPress(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "key": $.asRef(p1), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy(($.not(($.in_((await L0["key"].get()), [...$.range("0","9"), "\r", ".", (await $.call(C, "Chr", [8]))])))))) {
    await L0["key"].set("\u0000");
  }
  if ($.truthy($.eq((await L0["key"].get()), "\r"))) {
    await $.mcall((await $.v(C, "Button1")), "SetFocus", []);
  }
  return L0.result;
}, {"params": ["Sender", "Key"], "kind": "procedure", "ptypes": ["TObject", "Char"]});
  U.method("TFormTransaction11", "DateTimePicker1KeyPress", async function DateTimePicker1KeyPress(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "key": $.asRef(p1), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.eq((await L0["key"].get()), "\r"))) {
    await $.mcall((await $.v(C, "edit8")), "SetFocus", []);
  }
  return L0.result;
}, {"params": ["Sender", "Key"], "kind": "procedure", "ptypes": ["TObject", "Char"]});
  U.method("TFormTransaction11", "DBLookupComboboxEh1Change", async function DBLookupComboboxEh1Change(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.set(C, "procid", (await $.mv((await $.mcall((await $.v(C, "OracleDataSet1")), "FieldByName", ["id"])), "AsInteger")));
  await $.mset((await $.v(C, "edit9")), "Text", (await $.mv((await $.mcall((await $.v(C, "OracleDataSet1")), "FieldByName", ["name"])), "AsString")));
  {
    const $t3 = (await $.v(C, "oracledataset4"));
    await $.stmt($.wcall([$t3], "close", [], C));
    await $.stmt((await $.wcall([$t3], "SetVariable", ["v_bp_id", (await $.mv((await $.mcall((await $.wv([$t3], "OracleDataSet1", C, false)), "FieldByName", ["id"])), "AsInteger"))], C)));
    await $.stmt($.wcall([$t3], "open", [], C));
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFormTransaction11", "DBLookupComboboxEh2Change", async function DBLookupComboboxEh2Change(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mset((await $.v(C, "edit8")), "Text", (await $.mv((await $.mcall((await $.v(C, "OracleDataSet2")), "FieldByName", ["CUST_NAME"])), "AsString")));
  {
    const $t4 = (await $.v(C, "OracleDataSet3"));
    { const $t5 = await $.iset((await $.wv([$t4], "sql", C, false)), [3], ""); if ($t5 !== undefined) { await $.wset([$t4], "sql", $t5, C); } }
    await $.stmt($.wcall([$t4], "close", [], C));
    { const $t6 = await $.iset((await $.wv([$t4], "sql", C, false)), [3], $.add($.add((await $.idx((await $.wv([$t4], "sql", C, false)), [3])), " and  kli_ID ="), (await $.mv((await $.mcall((await $.wv([$t4], "OracleDataSet2", C, false)), "FieldByName", ["id"])), "AsString")))); if ($t6 !== undefined) { await $.wset([$t4], "sql", $t6, C); } }
    await $.stmt($.wcall([$t4], "open", [], C));
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFormTransaction11", "DBLookupComboboxEh3Change", async function DBLookupComboboxEh3Change(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.set(C, "acc_id", (await $.mv((await $.mcall((await $.v(C, "OracleDataSet3")), "FieldByName", ["id"])), "AsInteger")));
  await $.set(C, "kli_id", (await $.mv((await $.mcall((await $.v(C, "OracleDataSet3")), "FieldByName", ["kli_id"])), "AsInteger")));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFormTransaction11", "DBLookupComboboxEh3CloseUp", async function DBLookupComboboxEh3CloseUp(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "accept": $.copyArg(p1), result: undefined};
  await $.fixArgs(L0, ["sender", "accept"]);
  await $.set(C, "v_truefalse", false);
  await $.mset((await $.v(C, "edit4")), "Text", (await $.mv((await $.mcall((await $.v(C, "OracleDataSet3")), "FieldByName", ["acc_no"])), "AsString")));
  await $.mset((await $.v(C, "Edit2")), "Text", (await $.mv((await $.v(C, "OracleDataSet3ACCNO")), "AsString")));
  return L0.result;
}, {"params": ["Sender", "Accept"], "kind": "procedure", "ptypes": ["TObject", "Boolean"]});
  U.method("TFormTransaction11", "DBLookupComboboxEh4Change", async function DBLookupComboboxEh4Change(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mset((await $.v(C, "CurrencyEdit1")), "Text", (await $.mv((await $.mcall((await $.v(C, "oracledataset4")), "FieldByName", ["rate1"])), "AsString")));
  await $.mset((await $.v(C, "EditAmount")), "Value", ((await $.mv((await $.v(C, "CurrencyEdit1")), "Value"))));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFormTransaction11", "DBLookupComboboxEh4CloseUp", async function DBLookupComboboxEh4CloseUp(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "accept": $.copyArg(p1), result: undefined};
  await $.fixArgs(L0, ["sender", "accept"]);
  await $.mset((await $.v(C, "CurrencyEdit1")), "Text", (await $.mv((await $.mcall((await $.v(C, "oracledataset4")), "FieldByName", ["rate1"])), "AsString")));
  await $.mset((await $.v(C, "EditAmount")), "Value", ((await $.mv((await $.v(C, "CurrencyEdit1")), "Value"))));
  return L0.result;
}, {"params": ["Sender", "Accept"], "kind": "procedure", "ptypes": ["TObject", "Boolean"]});
  U.method("TFormTransaction11", "DBLookupComboboxEh4KeyPress", async function DBLookupComboboxEh4KeyPress(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "key": $.asRef(p1), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.eq((await L0["key"].get()), "\r"))) {
    await $.mcall((await $.v(C, "CurrencyEdit2")), "SetFocus", []);
  }
  return L0.result;
}, {"params": ["Sender", "Key"], "kind": "procedure", "ptypes": ["TObject", "Char"]});
  U.method("TFormTransaction11", "Edit10Change", async function Edit10Change(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mset((await $.v(C, "EditAmount")), "Value", (await $.call(C, "StrToFloat", [(await $.mv((await $.v(C, "CurrencyEdit1")), "Text"))])));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFormTransaction11", "Edit10KeyPress", async function Edit10KeyPress(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "key": $.asRef(p1), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy(($.not(($.in_((await L0["key"].get()), [...$.range("0","9"), "\r", ".", (await $.call(C, "Chr", [8]))])))))) {
    await L0["key"].set("\u0000");
  }
  if ($.truthy($.eq((await L0["key"].get()), "\r"))) {
    await $.mcall((await $.v(C, "Button1")), "SetFocus", []);
  }
  return L0.result;
}, {"params": ["Sender", "Key"], "kind": "procedure", "ptypes": ["TObject", "Char"]});
  U.method("TFormTransaction11", "Edit11KeyPress", async function Edit11KeyPress(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "key": $.asRef(p1), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy(($.eq((await $.call(C, "ord", [(await L0["key"].get())])), 13)))) {
    await $.mcall((await $.v(C, "Edit1")), "SetFocus", []);
  }
  if ($.truthy((await $.or_(($.lt((await $.call(C, "upcase", [(await L0["key"].get())])), "A")), async () => ($.gt((await $.call(C, "Upcase", [(await L0["key"].get())])), "Z")))))) {
    if ($.truthy(($.in_((await L0["key"].get()), [...$.range("1","9")])))) {
      if ($.truthy(($.ne((await $.call(C, "ord", [(await L0["key"].get())])), 8)))) {
        await L0["key"].set("\u0000");
      }
    }
  }
  return L0.result;
}, {"params": ["Sender", "Key"], "kind": "procedure", "ptypes": ["TObject", "Char"]});
  U.method("TFormTransaction11", "Edit1KeyPress", async function Edit1KeyPress(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "key": $.asRef(p1), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy(($.not(($.in_((await L0["key"].get()), [...$.range("0","9"), "\r", ".", (await $.call(C, "Chr", [8]))])))))) {
    await L0["key"].set("\u0000");
  }
  if ($.truthy($.eq((await L0["key"].get()), "\r"))) {
    await $.mcall((await $.v(C, "DateTimePicker1")), "SetFocus", []);
  }
  return L0.result;
}, {"params": ["Sender", "Key"], "kind": "procedure", "ptypes": ["TObject", "Char"]});
  U.method("TFormTransaction11", "Edit2KeyPress", async function Edit2KeyPress(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "key": $.asRef(p1), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.eq((await L0["key"].get()), "\r"))) {
    await $.mcall((await $.v(C, "edit3")), "SetFocus", []);
  }
  return L0.result;
}, {"params": ["Sender", "Key"], "kind": "procedure", "ptypes": ["TObject", "Char"]});
  U.method("TFormTransaction11", "Edit3KeyPress", async function Edit3KeyPress(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "key": $.asRef(p1), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.eq((await L0["key"].get()), "\r"))) {
    await $.mcall((await $.v(C, "edit5")), "SetFocus", []);
  }
  return L0.result;
}, {"params": ["Sender", "Key"], "kind": "procedure", "ptypes": ["TObject", "Char"]});
  U.method("TFormTransaction11", "Edit4KeyPress", async function Edit4KeyPress(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "key": $.asRef(p1), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.eq((await L0["key"].get()), "\r"))) {
    await $.mcall((await $.v(C, "edit2")), "SetFocus", []);
  }
  return L0.result;
}, {"params": ["Sender", "Key"], "kind": "procedure", "ptypes": ["TObject", "Char"]});
  U.method("TFormTransaction11", "Edit5KeyPress", async function Edit5KeyPress(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "key": $.asRef(p1), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.eq((await L0["key"].get()), "\r"))) {
    await $.mcall((await $.v(C, "edit6")), "SetFocus", []);
  }
  return L0.result;
}, {"params": ["Sender", "Key"], "kind": "procedure", "ptypes": ["TObject", "Char"]});
  U.method("TFormTransaction11", "Edit6KeyPress", async function Edit6KeyPress(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "key": $.asRef(p1), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.eq((await L0["key"].get()), "\r"))) {
    await $.mcall((await $.v(C, "edit7")), "SetFocus", []);
  }
  return L0.result;
}, {"params": ["Sender", "Key"], "kind": "procedure", "ptypes": ["TObject", "Char"]});
  U.method("TFormTransaction11", "Edit7KeyPress", async function Edit7KeyPress(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "key": $.asRef(p1), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.eq((await L0["key"].get()), "\r"))) {
    await $.mcall((await $.v(C, "DBLookupComboboxEh4")), "SetFocus", []);
  }
  return L0.result;
}, {"params": ["Sender", "Key"], "kind": "procedure", "ptypes": ["TObject", "Char"]});
  U.method("TFormTransaction11", "Edit8KeyPress", async function Edit8KeyPress(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "key": $.asRef(p1), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.eq((await L0["key"].get()), "\r"))) {
    await $.mcall((await $.v(C, "edit4")), "SetFocus", []);
  }
  return L0.result;
}, {"params": ["Sender", "Key"], "kind": "procedure", "ptypes": ["TObject", "Char"]});
  U.method("TFormTransaction11", "Edit9KeyPress", async function Edit9KeyPress(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "key": $.asRef(p1), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.eq((await L0["key"].get()), "\r"))) {
    await $.mcall((await $.v(C, "edit1")), "SetFocus", []);
  }
  return L0.result;
}, {"params": ["Sender", "Key"], "kind": "procedure", "ptypes": ["TObject", "Char"]});
  U.method("TFormTransaction11", "FormClose", async function FormClose(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "action": $.asRef(p1), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mset((await $.v(C, "DBLookupComboboxEh1")), "Enabled", false);
  await $.mset((await $.v(C, "DBLookupComboboxEh2")), "Enabled", false);
  await $.stmt((await $.call(C, "clear", [L0["sender"]])));
  return L0.result;
}, {"params": ["Sender", "Action"], "kind": "procedure", "ptypes": ["TObject", "TCloseAction"]});
  U.method("TFormTransaction11", "FormShow", async function FormShow(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.set(C, "v_truefalse", true);
  await $.mcall((await $.v(C, "Edit11")), "SetFocus", []);
  await $.mset((await $.v(C, "DateTimePicker1")), "DateTime", (await $.v(C, "Date")));
  await $.mset((await $.v(C, "edit9")), "Text", (await $.mv((await $.mcall((await $.mv((await $.v(C, "DataModPCustService")), "ODS_BusProc")), "FieldByName", ["NAME"])), "asstring")));
  {
    const $t7 = (await $.v(C, "OracleDataSet3"));
    { const $t8 = await $.iset((await $.wv([$t7], "sql", C, false)), [3], ""); if ($t8 !== undefined) { await $.wset([$t7], "sql", $t8, C); } }
    await $.stmt($.wcall([$t7], "close", [], C));
    { const $t9 = await $.iset((await $.wv([$t7], "sql", C, false)), [3], $.add($.add((await $.idx((await $.wv([$t7], "sql", C, false)), [3])), " and  kli_ID ="), (await $.mv((await $.mcall((await $.mv((await $.wv([$t7], "DataModPCustService", C, false)), "ODS_CUSTOMERS_PHYS_FS")), "FieldByName", ["id"])), "asstring")))); if ($t9 !== undefined) { await $.wset([$t7], "sql", $t9, C); } }
    await $.stmt($.wcall([$t7], "open", [], C));
  }
  await $.mset((await $.v(C, "edit8")), "text", (await $.mv((await $.mcall((await $.mv((await $.v(C, "DataModPCustService")), "ODS_CUSTOMERS_PHYS_FS")), "FieldByName", ["CUST_NAME"])), "asstring")));
  await $.mset((await $.v(C, "edit4")), "text", (await $.mv((await $.mcall((await $.mv((await $.v(C, "DataModPCustService")), "Ods_closAccount")), "FieldByName", ["acc_no"])), "AsString")));
  await $.mset((await $.v(C, "edit2")), "text", (await $.mv((await $.mcall((await $.mv((await $.v(C, "DataModPCustService")), "Ods_closAccount")), "FieldByName", ["accno"])), "AsString")));
  {
    const $t10 = (await $.v(C, "oracledataset4"));
    await $.stmt($.wcall([$t10], "close", [], C));
    await $.stmt((await $.wcall([$t10], "SetVariable", ["v_bp_id", (await $.mv((await $.mcall((await $.mv((await $.wv([$t10], "DataModPCustService", C, false)), "ODS_BusProc")), "FieldByName", ["id"])), "AsInteger"))], C)));
    await $.stmt((await $.wcall([$t10], "SetVariable", ["V_CARN", (await $.mv((await $.wv([$t10], "edit2", C, false)), "Text"))], C)));
    await $.stmt($.wcall([$t10], "open", [], C));
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFormTransaction11", "RadioGroup1Click", async function RadioGroup1Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.eq((await $.mv((await $.v(C, "RadioGroup1")), "ItemIndex")), 0))) {
    await $.mset((await $.v(C, "EditAmount")), "Text", "");
    await $.mset((await $.v(C, "CurrencyEdit2")), "Text", "");
  }
  if ($.truthy($.eq((await $.mv((await $.v(C, "RadioGroup1")), "ItemIndex")), 1))) {
    await $.mset((await $.v(C, "EditAmount")), "Text", "");
    await $.mset((await $.v(C, "CurrencyEdit2")), "Text", "");
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  return U;
}
