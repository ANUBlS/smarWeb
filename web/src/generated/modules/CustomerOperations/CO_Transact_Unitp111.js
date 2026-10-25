// Generated from CO_Transact_Unitp.pas by pas2js — do not edit by hand; regenerate instead.
/* eslint-disable */
// @ts-nocheck

export default function define($) {
  const U = $.unit("CO_Transact_Unitp", ["Windows", "Messages", "SysUtils", "Classes", "Graphics", "Controls", "Forms", "NLSDialogs", "Db", "OracleData", "NLSLocalizer", "StdCtrls", "ComCtrls", "SearchEdit", "Mask", "DBCtrls", "ExtCtrls", "CO_datamod_impl"]);
  const C = [U];
  U.defClass("TCO_Transactions", "TForm", {"groupbox1": {"name": "GroupBox1", "type": "TGroupBox"}, "headercontrol1": {"name": "HeaderControl1", "type": "THeaderControl"}, "panel1": {"name": "Panel1", "type": "TPanel"}, "paneldebit": {"name": "PanelDebit", "type": "TPanel"}, "paneldebitrest": {"name": "PanelDebitRest", "type": "TPanel"}, "label1": {"name": "Label1", "type": "TLabel"}, "label2": {"name": "Label2", "type": "TLabel"}, "d_pok_ostat": {"name": "d_pok_ostat", "type": "TLabel"}, "d_ostat": {"name": "d_ostat", "type": "TLabel"}, "panel4": {"name": "Panel4", "type": "TPanel"}, "dblookupcombobox2": {"name": "DBLookupComboBox2", "type": "TDBLookupComboBox"}, "dbedit2": {"name": "DBEdit2", "type": "TDBEdit"}, "panel5": {"name": "Panel5", "type": "TPanel"}, "debtaccsearchedit": {"name": "DebtAccSearchEdit", "type": "TSearchEdit"}, "dblookupcombobox1": {"name": "DBLookupComboBox1", "type": "TDBLookupComboBox"}, "dbedit1": {"name": "DBEdit1", "type": "TDBEdit"}, "panel6": {"name": "Panel6", "type": "TPanel"}, "editrate": {"name": "editrate", "type": "TDBEdit"}, "val_code": {"name": "val_code", "type": "TEdit"}, "acc_id": {"name": "acc_id", "type": "TDBEdit"}, "panel2": {"name": "Panel2", "type": "TPanel"}, "panel7": {"name": "Panel7", "type": "TPanel"}, "panel8": {"name": "Panel8", "type": "TPanel"}, "label3": {"name": "Label3", "type": "TLabel"}, "label4": {"name": "Label4", "type": "TLabel"}, "c_ostat": {"name": "c_ostat", "type": "TLabel"}, "c_pok_ostat": {"name": "c_pok_ostat", "type": "TLabel"}, "panel9": {"name": "Panel9", "type": "TPanel"}, "dblookupcombobox3": {"name": "DBLookupComboBox3", "type": "TDBLookupComboBox"}, "dbedit3": {"name": "DBEdit3", "type": "TDBEdit"}, "panel10": {"name": "Panel10", "type": "TPanel"}, "creditaccsearchedit": {"name": "CreditAccSearchEdit", "type": "TSearchEdit"}, "dblookupcombobox4": {"name": "DBLookupComboBox4", "type": "TDBLookupComboBox"}, "dbedit5": {"name": "DBEdit5", "type": "TDBEdit"}, "panel11": {"name": "Panel11", "type": "TPanel"}, "cur_val_code": {"name": "cur_val_code", "type": "TEdit"}, "editrate_": {"name": "editrate_", "type": "TDBEdit"}, "editvalute_": {"name": "editvalute_", "type": "TDBLookupComboBox"}, "acc_id_": {"name": "acc_id_", "type": "TDBEdit"}, "editvalute": {"name": "editvalute", "type": "TDBLookupComboBox"}, "groupbox2": {"name": "GroupBox2", "type": "TGroupBox"}, "panel3": {"name": "Panel3", "type": "TPanel"}, "debtvalue": {"name": "debtvalue", "type": "TEdit"}, "panel12": {"name": "Panel12", "type": "TPanel"}, "creditvalue": {"name": "creditvalue", "type": "TEdit"}, "panel13": {"name": "Panel13", "type": "TPanel"}, "ekv": {"name": "ekv", "type": "TEdit"}, "groupbox3": {"name": "GroupBox3", "type": "TGroupBox"}, "panel14": {"name": "Panel14", "type": "TPanel"}, "convertationsymbollookup": {"name": "ConvertationSymbolLookUp", "type": "TDBLookupComboBox"}, "searchedit2": {"name": "SearchEdit2", "type": "TSearchEdit"}, "dbedit7": {"name": "DBEdit7", "type": "TDBEdit"}, "panel15": {"name": "Panel15", "type": "TPanel"}, "cashsymbollookup": {"name": "CashSymbolLookUp", "type": "TDBLookupComboBox"}, "searchedit3": {"name": "SearchEdit3", "type": "TSearchEdit"}, "dbedit8": {"name": "DBEdit8", "type": "TDBEdit"}, "panel16": {"name": "Panel16", "type": "TPanel"}, "dblookupcombobox5": {"name": "DBLookupComboBox5", "type": "TDBLookupComboBox"}, "trdest": {"name": "Trdest", "type": "TEdit"}, "groupbox4": {"name": "GroupBox4", "type": "TGroupBox"}, "label5": {"name": "Label5", "type": "TLabel"}, "transdate": {"name": "TransDate", "type": "TDateTimePicker"}, "panel17": {"name": "Panel17", "type": "TPanel"}, "buttonapply": {"name": "ButtonApply", "type": "TButton"}, "buttoncancel": {"name": "ButtonCancel", "type": "TButton"}, "buttonclose": {"name": "ButtonClose", "type": "TButton"}, "nlslocalizer1": {"name": "NLSLocalizer1", "type": "TNLSLocalizer"}, "debitcurrencydata": {"name": "DebitCurrencyData", "type": "TOracleDataSet"}, "debitcurrencydataid": {"name": "DebitCurrencyDataID", "type": "TIntegerField"}, "debitcurrencydatasname": {"name": "DebitCurrencyDataSNAME", "type": "TStringField"}, "debitcurrencydataname": {"name": "DebitCurrencyDataNAME", "type": "TStringField"}, "debitcurrencydatarate": {"name": "DebitCurrencyDataRATE", "type": "TFloatField"}, "debitcurrency": {"name": "DebitCurrency", "type": "TDataSource"}, "debitaccdata": {"name": "DebitAccData", "type": "TOracleDataSet"}, "debitaccs": {"name": "DebitAccs", "type": "TDataSource"}, "creditcurrencydata": {"name": "CreditCurrencyData", "type": "TOracleDataSet"}, "creditcurrencydataid": {"name": "CreditCurrencyDataID", "type": "TIntegerField"}, "creditcurrencydatasname": {"name": "CreditCurrencyDataSNAME", "type": "TStringField"}, "creditcurrencydataname": {"name": "CreditCurrencyDataNAME", "type": "TStringField"}, "creditcurrencydatarate": {"name": "CreditCurrencyDataRATE", "type": "TFloatField"}, "creditcurrency": {"name": "CreditCurrency", "type": "TDataSource"}, "creditaccdata": {"name": "CreditAccData", "type": "TOracleDataSet"}, "creditaccs": {"name": "CreditAccs", "type": "TDataSource"}, "dbedit6": {"name": "dbedit6", "type": "TEdit"}}, {});
  U.init(async () => {
    U.var_("CO_Transactions", null, "TCO_Transactions");
  });
  U.method("TCO_Transactions", "val_codeChange", async function val_codeChange(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.ne((await $.mv((L0["sender"]), "Text")), ""))) {
    await $.mset((await $.v(C, "Editvalute")), "KeyValue", (await $.call(C, "StrToInt", [(await $.mv((L0["sender"]), "Text"))])));
  } else {
    await $.mset((await $.v(C, "Editvalute")), "KeyValue", (await $.v(C, "null")));
  }
  await $.stmt((await $.call(C, "EditvaluteCloseUp", [L0["sender"]])));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TCO_Transactions", "val_codeKeyPress", async function val_codeKeyPress(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "key": $.asRef(p1), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.eq((await L0["key"].get()), "\r"))) {
    await $.mcall((await $.v(C, "DebtAccSearchEdit")), "SetFocus", []);
  }
  return L0.result;
}, {"params": ["Sender", "Key"], "kind": "procedure", "ptypes": ["TObject", "Char"]});
  U.method("TCO_Transactions", "editvaluteClick", async function editvaluteClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mset((await $.v(C, "val_code")), "Text", (await $.call(C, "IntToStr", [(await $.mv((await $.mcall((await $.mv((await $.mv((await $.v(C, "editvalute")), "ListSource")), "DataSet")), "FieldByName", ["id"])), "AsInTeger"))])));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TCO_Transactions", "editvaluteCloseUp", async function editvaluteCloseUp(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t1 = (await $.v(C, "DebtAccSearchEdit"));
    const $t2 = (await $.wv([$t1], "CO_Datamod", C, false));
    await $.mset((await $.mv((await $.wv([$t1, $t2], "DataSource", C, false)), "DataSet")), "Filtered", (await $.wv([$t1, $t2], "False", C, false)));
    await $.mset((await $.mv((await $.wv([$t1, $t2], "DataSource", C, false)), "DataSet")), "Filter", $.add("val_acc= ", (await $.mv((await $.mcall((await $.wv([$t1, $t2], "DebitCurrencyData", C, false)), "FieldByName", ["ID"])), "AsString"))));
    await $.mset((await $.mv((await $.wv([$t1, $t2], "DataSource", C, false)), "DataSet")), "Filtered", (await $.wv([$t1, $t2], "True", C, false)));
    await $.wset([$t1, $t2], "Text", "", C);
  }
  {
    const $t3 = (await $.mv((await $.v(C, "CO_Datamod")), "temprate"));
    await $.stmt($.wcall([$t3], "Close", [], C));
    await $.mcall((await $.wv([$t3], "SQL", C, false)), "Clear", []);
    await $.mset((await $.wv([$t3], "SQL", C, false)), "Text", $.add($.add($.add("Select c.rowid ,c.* from temprate c where val_kod= ", "'"), (await $.mv((await $.wv([$t3], "val_code", C, false)), "Text"))), "'"));
    await $.stmt($.wcall([$t3], "Open", [], C));
    await $.mset((await $.wv([$t3], "editrate", C, false)), "Text", (await $.mv((await $.wcall([$t3], "FieldByName", ["ostat"], C)), "AsString")));
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TCO_Transactions", "DebtAccSearchEditChange", async function DebtAccSearchEditChange(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mset((await $.v(C, "d_ostat")), "visible", true);
  await $.mset((await $.v(C, "d_pok_ostat")), "visible", true);
  {
    const $t4 = (await $.mv((await $.v(C, "CO_Datamod")), "archost"));
    await $.stmt($.wcall([$t4], "Close", [], C));
    await $.mcall((await $.wv([$t4], "SQL", C, false)), "Clear", []);
    await $.mset((await $.wv([$t4], "SQL", C, false)), "Text", $.add($.add($.add("Select * from tenostat where acc_id in (select id from accno where accno=", "'"), (await $.mv((await $.wv([$t4], "DebtAccSearchEdit", C, false)), "Text"))), "')"));
    await $.stmt($.wcall([$t4], "Open", [], C));
    await $.mset((await $.wv([$t4], "d_ostat", C, false)), "caption", (await $.mv((await $.wcall([$t4], "fieldbyname", ["ostat"], C)), "asstring")));
  }
  {
    const $t5 = (await $.mv((await $.v(C, "CO_Datamod")), "archost"));
    await $.stmt($.wcall([$t5], "Close", [], C));
    await $.mcall((await $.wv([$t5], "SQL", C, false)), "Clear", []);
    await $.mset((await $.wv([$t5], "SQL", C, false)), "Text", $.add($.add($.add("Select * from tenostat where acc_id in (select id from accno where accno=", "'"), (await $.mv((await $.wv([$t5], "DebtAccSearchEdit", C, false)), "Text"))), "')"));
    await $.stmt($.wcall([$t5], "Open", [], C));
    await $.mset((await $.wv([$t5], "d_pok_ostat", C, false)), "caption", (await $.mv((await $.wcall([$t5], "fieldbyname", ["pok_ostat"], C)), "asstring")));
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TCO_Transactions", "DebtAccSearchEditKeyPress", async function DebtAccSearchEditKeyPress(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "key": $.asRef(p1), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.eq((await L0["key"].get()), "\r"))) {
    await $.mcall((await $.v(C, "cur_val_code")), "setfocus", []);
  }
  return L0.result;
}, {"params": ["Sender", "Key"], "kind": "procedure", "ptypes": ["TObject", "Char"]});
  U.method("TCO_Transactions", "DBLookupComboBox1Click", async function DBLookupComboBox1Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mset((await $.v(C, "DebtAccSearchEdit")), "text", (await $.mv((await $.v(C, "Dbedit1")), "text")));
  await $.mset((await $.v(C, "d_ostat")), "visible", true);
  await $.mset((await $.v(C, "d_pok_ostat")), "visible", true);
  {
    const $t6 = (await $.mv((await $.v(C, "CO_Datamod")), "archost"));
    await $.stmt($.wcall([$t6], "Close", [], C));
    await $.mcall((await $.wv([$t6], "SQL", C, false)), "Clear", []);
    await $.mset((await $.wv([$t6], "SQL", C, false)), "Text", $.add($.add($.add("Select * from tenostat where acc_id in (select id from accno where accno=", "'"), (await $.mv((await $.wv([$t6], "DebtAccSearchEdit", C, false)), "Text"))), "')"));
    await $.stmt($.wcall([$t6], "Open", [], C));
    await $.mset((await $.wv([$t6], "d_ostat", C, false)), "caption", (await $.mv((await $.wcall([$t6], "fieldbyname", ["ostat"], C)), "asstring")));
  }
  {
    const $t7 = (await $.mv((await $.v(C, "CO_Datamod")), "archost"));
    await $.stmt($.wcall([$t7], "Close", [], C));
    await $.mcall((await $.wv([$t7], "SQL", C, false)), "Clear", []);
    await $.mset((await $.wv([$t7], "SQL", C, false)), "Text", $.add($.add($.add("Select * from tenostat where acc_id in (select id from accno where accno=", "'"), (await $.mv((await $.wv([$t7], "DebtAccSearchEdit", C, false)), "Text"))), "')"));
    await $.stmt($.wcall([$t7], "Open", [], C));
    await $.mset((await $.wv([$t7], "d_pok_ostat", C, false)), "caption", (await $.mv((await $.wcall([$t7], "fieldbyname", ["pok_ostat"], C)), "asstring")));
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TCO_Transactions", "DBLookupComboBox2Click", async function DBLookupComboBox2Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mset((await $.v(C, "DebtAccSearchEdit")), "text", (await $.mv((await $.v(C, "Dbedit1")), "text")));
  await $.mset((await $.v(C, "d_ostat")), "visible", true);
  await $.mset((await $.v(C, "d_pok_ostat")), "visible", true);
  {
    const $t8 = (await $.mv((await $.v(C, "CO_Datamod")), "archost"));
    await $.stmt($.wcall([$t8], "Close", [], C));
    await $.mcall((await $.wv([$t8], "SQL", C, false)), "Clear", []);
    await $.mset((await $.wv([$t8], "SQL", C, false)), "Text", $.add($.add($.add("Select * from tenostat where acc_id in (select id from accno where accno=", "'"), (await $.mv((await $.wv([$t8], "DebtAccSearchEdit", C, false)), "Text"))), "')"));
    await $.stmt($.wcall([$t8], "Open", [], C));
    await $.mset((await $.wv([$t8], "d_ostat", C, false)), "caption", (await $.mv((await $.wcall([$t8], "fieldbyname", ["ostat"], C)), "asstring")));
  }
  {
    const $t9 = (await $.mv((await $.v(C, "CO_Datamod")), "archost"));
    await $.stmt($.wcall([$t9], "Close", [], C));
    await $.mcall((await $.wv([$t9], "SQL", C, false)), "Clear", []);
    await $.mset((await $.wv([$t9], "SQL", C, false)), "Text", $.add($.add($.add("Select * from tenostat where acc_id in (select id from accno where accno=", "'"), (await $.mv((await $.wv([$t9], "DebtAccSearchEdit", C, false)), "Text"))), "')"));
    await $.stmt($.wcall([$t9], "Open", [], C));
    await $.mset((await $.wv([$t9], "d_pok_ostat", C, false)), "caption", (await $.mv((await $.wcall([$t9], "fieldbyname", ["pok_ostat"], C)), "asstring")));
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TCO_Transactions", "cur_val_codeChange", async function cur_val_codeChange(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.ne((await $.mv((L0["sender"]), "Text")), ""))) {
    await $.mset((await $.v(C, "editvalute_")), "KeyValue", (await $.call(C, "StrToInt", [(await $.mv((L0["sender"]), "Text"))])));
  } else {
    await $.mset((await $.v(C, "editvalute_")), "KeyValue", (await $.v(C, "null")));
  }
  await $.stmt((await $.call(C, "editvalute_CloseUp", [L0["sender"]])));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TCO_Transactions", "cur_val_codeKeyPress", async function cur_val_codeKeyPress(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "key": $.asRef(p1), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.eq((await L0["key"].get()), "\r"))) {
    await $.mcall((await $.v(C, "CreditAccSearchEdit")), "Setfocus", []);
  }
  return L0.result;
}, {"params": ["Sender", "Key"], "kind": "procedure", "ptypes": ["TObject", "Char"]});
  U.method("TCO_Transactions", "editvalute_Click", async function editvalute_Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mset((await $.v(C, "cur_val_code")), "Text", (await $.call(C, "IntToStr", [(await $.mv((await $.mcall((await $.mv((await $.mv((await $.v(C, "editvalute_")), "ListSource")), "DataSet")), "FieldByName", ["id"])), "AsInTeger"))])));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TCO_Transactions", "editvalute_CloseUp", async function editvalute_CloseUp(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t10 = (await $.v(C, "CreditAccSearchEdit"));
    const $t11 = (await $.wv([$t10], "CO_Datamod", C, false));
    await $.mset((await $.mv((await $.wv([$t10, $t11], "DataSource", C, false)), "DataSet")), "Filtered", (await $.wv([$t10, $t11], "False", C, false)));
    await $.mset((await $.mv((await $.wv([$t10, $t11], "DataSource", C, false)), "DataSet")), "Filter", $.add("val_acc= ", (await $.mv((await $.mcall((await $.wv([$t10, $t11], "CreditCurrencyData", C, false)), "FieldByName", ["ID"])), "AsString"))));
    await $.mset((await $.mv((await $.wv([$t10, $t11], "DataSource", C, false)), "DataSet")), "Filtered", (await $.wv([$t10, $t11], "True", C, false)));
    await $.wset([$t10, $t11], "Text", "", C);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TCO_Transactions", "CreditAccSearchEditChange", async function CreditAccSearchEditChange(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mset((await $.v(C, "c_ostat")), "visible", true);
  await $.mset((await $.v(C, "c_pok_ostat")), "visible", true);
  {
    const $t12 = (await $.mv((await $.v(C, "CO_Datamod")), "archost"));
    await $.stmt($.wcall([$t12], "Close", [], C));
    await $.mcall((await $.wv([$t12], "SQL", C, false)), "Clear", []);
    await $.mset((await $.wv([$t12], "SQL", C, false)), "Text", $.add($.add($.add("Select * from tenostat where acc_id in (select id from accno where accno=", "'"), (await $.mv((await $.wv([$t12], "creditAccSearchEdit", C, false)), "Text"))), "')"));
    await $.stmt($.wcall([$t12], "Open", [], C));
    await $.mset((await $.wv([$t12], "c_ostat", C, false)), "caption", (await $.mv((await $.wcall([$t12], "fieldbyname", ["ostat"], C)), "asstring")));
  }
  {
    const $t13 = (await $.mv((await $.v(C, "CO_Datamod")), "archost"));
    await $.stmt($.wcall([$t13], "Close", [], C));
    await $.mcall((await $.wv([$t13], "SQL", C, false)), "Clear", []);
    await $.mset((await $.wv([$t13], "SQL", C, false)), "Text", $.add($.add($.add("Select * from tenostat where acc_id in (select id from accno where accno=", "'"), (await $.mv((await $.wv([$t13], "creditAccSearchEdit", C, false)), "Text"))), "')"));
    await $.stmt($.wcall([$t13], "Open", [], C));
    await $.mset((await $.wv([$t13], "c_pok_ostat", C, false)), "caption", (await $.mv((await $.wcall([$t13], "fieldbyname", ["pok_ostat"], C)), "asstring")));
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TCO_Transactions", "CreditAccSearchEditKeyPress", async function CreditAccSearchEditKeyPress(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "key": $.asRef(p1), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.eq((await L0["key"].get()), "\r"))) {
    await $.mcall((await $.v(C, "debtvalue")), "setfocus", []);
  }
  return L0.result;
}, {"params": ["Sender", "Key"], "kind": "procedure", "ptypes": ["TObject", "Char"]});
  U.method("TCO_Transactions", "DBLookupComboBox4Click", async function DBLookupComboBox4Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mset((await $.v(C, "CreditAccSearchEdit")), "text", (await $.mv((await $.v(C, "Dbedit5")), "text")));
  {
    const $t14 = (await $.mv((await $.v(C, "CO_Datamod")), "archost"));
    await $.stmt($.wcall([$t14], "Close", [], C));
    await $.mcall((await $.wv([$t14], "SQL", C, false)), "Clear", []);
    await $.mset((await $.wv([$t14], "SQL", C, false)), "Text", $.add($.add($.add("Select * from tenostat where acc_id in (select id from accno where accno=", "'"), (await $.mv((await $.wv([$t14], "creditAccSearchEdit", C, false)), "Text"))), "')"));
    await $.stmt($.wcall([$t14], "Open", [], C));
    await $.mset((await $.wv([$t14], "c_ostat", C, false)), "caption", (await $.mv((await $.wcall([$t14], "fieldbyname", ["ostat"], C)), "asstring")));
  }
  {
    const $t15 = (await $.mv((await $.v(C, "CO_Datamod")), "archost"));
    await $.stmt($.wcall([$t15], "Close", [], C));
    await $.mcall((await $.wv([$t15], "SQL", C, false)), "Clear", []);
    await $.mset((await $.wv([$t15], "SQL", C, false)), "Text", $.add($.add($.add("Select * from tenostat where acc_id in (select id from accno where accno=", "'"), (await $.mv((await $.wv([$t15], "creditAccSearchEdit", C, false)), "Text"))), "')"));
    await $.stmt($.wcall([$t15], "Open", [], C));
    await $.mset((await $.wv([$t15], "c_pok_ostat", C, false)), "caption", (await $.mv((await $.wcall([$t15], "fieldbyname", ["pok_ostat"], C)), "asstring")));
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TCO_Transactions", "DBLookupComboBox3Click", async function DBLookupComboBox3Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mset((await $.v(C, "CreditAccSearchEdit")), "text", (await $.mv((await $.v(C, "Dbedit5")), "text")));
  {
    const $t16 = (await $.mv((await $.v(C, "CO_Datamod")), "archost"));
    await $.stmt($.wcall([$t16], "Close", [], C));
    await $.mcall((await $.wv([$t16], "SQL", C, false)), "Clear", []);
    await $.mset((await $.wv([$t16], "SQL", C, false)), "Text", $.add($.add($.add("Select * from tenostat where acc_id in (select id from accno where accno=", "'"), (await $.mv((await $.wv([$t16], "creditAccSearchEdit", C, false)), "Text"))), "')"));
    await $.stmt($.wcall([$t16], "Open", [], C));
    await $.mset((await $.wv([$t16], "c_ostat", C, false)), "caption", (await $.mv((await $.wcall([$t16], "fieldbyname", ["ostat"], C)), "asstring")));
  }
  {
    const $t17 = (await $.mv((await $.v(C, "CO_Datamod")), "archost"));
    await $.stmt($.wcall([$t17], "Close", [], C));
    await $.mcall((await $.wv([$t17], "SQL", C, false)), "Clear", []);
    await $.mset((await $.wv([$t17], "SQL", C, false)), "Text", $.add($.add($.add("Select * from tenostat where acc_id in (select id from accno where accno=", "'"), (await $.mv((await $.wv([$t17], "creditAccSearchEdit", C, false)), "Text"))), "')"));
    await $.stmt($.wcall([$t17], "Open", [], C));
    await $.mset((await $.wv([$t17], "c_pok_ostat", C, false)), "caption", (await $.mv((await $.wcall([$t17], "fieldbyname", ["pok_ostat"], C)), "asstring")));
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TCO_Transactions", "debtvalueChange", async function debtvalueChange(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy((await $.and_((await $.and_((await $.and_((await $.and_((await $.and_(($.ne((await $.mv((await $.v(C, "debtvalue")), "Text")), "")), async () => ($.ne((await $.mv((await $.v(C, "debtvalue")), "Text")), "0")))), async () => ($.ne((await $.mv((await $.v(C, "creditvalue")), "Text")), "")))), async () => ($.ne((await $.mv((await $.v(C, "creditvalue")), "Text")), "0")))), async () => ($.ne((await $.mv((await $.v(C, "ekv")), "Text")), "")))), async () => ($.ne((await $.mv((await $.v(C, "ekv")), "Text")), "0")))))) {
    await $.mset((await $.v(C, "ButtonApply")), "enabled", true);
    await $.mset((await $.v(C, "ButtonCancel")), "enabled", true);
  }
  if ($.truthy((await $.and_(($.ne((await $.mv((await $.v(C, "debtvalue")), "Text")), "")), async () => ($.ne((await $.mv((await $.v(C, "debtvalue")), "Text")), "0")))))) {
    await $.mset((await $.v(C, "Ekv")), "text", (await $.call(C, "FormatFloat", ["#.##", $.mul((await $.call(C, "Strtofloat", [(await $.mv((await $.v(C, "debtvalue")), "text"))])), (await $.call(C, "Strtofloat", [(await $.mv((await $.v(C, "editrate")), "text"))])))])));
    await $.mset((await $.v(C, "creditvalue")), "text", (await $.call(C, "FormatFloat", ["#.##", $.fdiv((await $.call(C, "Strtofloat", [(await $.mv((await $.v(C, "ekv")), "text"))])), (await $.call(C, "Strtofloat", [(await $.mv((await $.v(C, "editrate_")), "text"))])))])));
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TCO_Transactions", "debtvalueKeyPress", async function debtvalueKeyPress(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "key": $.asRef(p1), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.eq((await L0["key"].get()), "\r"))) {
    await $.mcall((await $.v(C, "Trdest")), "Setfocus", []);
  }
  return L0.result;
}, {"params": ["Sender", "Key"], "kind": "procedure", "ptypes": ["TObject", "Char"]});
  U.method("TCO_Transactions", "creditvalueChange", async function creditvalueChange(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy((await $.and_((await $.and_((await $.and_((await $.and_((await $.and_(($.ne((await $.mv((await $.v(C, "debtvalue")), "Text")), "")), async () => ($.ne((await $.mv((await $.v(C, "debtvalue")), "Text")), "0")))), async () => ($.ne((await $.mv((await $.v(C, "creditvalue")), "Text")), "")))), async () => ($.ne((await $.mv((await $.v(C, "creditvalue")), "Text")), "0")))), async () => ($.ne((await $.mv((await $.v(C, "ekv")), "Text")), "")))), async () => ($.ne((await $.mv((await $.v(C, "ekv")), "Text")), "0")))))) {
    await $.mset((await $.v(C, "ButtonApply")), "enabled", true);
    await $.mset((await $.v(C, "ButtonCancel")), "enabled", true);
  }
  if ($.truthy((await $.and_(($.ne((await $.mv((await $.v(C, "creditvalue")), "Text")), "")), async () => ($.ne((await $.mv((await $.v(C, "creditvalue")), "Text")), "0")))))) {
    await $.mset((await $.v(C, "Ekv")), "text", (await $.call(C, "FormatFloat", ["#.##", $.mul((await $.call(C, "Strtofloat", [(await $.mv((await $.v(C, "creditvalue")), "text"))])), (await $.call(C, "Strtofloat", [(await $.mv((await $.v(C, "editrate_")), "text"))])))])));
    await $.mset((await $.v(C, "Debtvalue")), "text", (await $.call(C, "FormatFloat", ["#.##", $.fdiv((await $.call(C, "Strtofloat", [(await $.mv((await $.v(C, "ekv")), "text"))])), (await $.call(C, "Strtofloat", [(await $.mv((await $.v(C, "editrate")), "text"))])))])));
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TCO_Transactions", "TrdestChange", async function TrdestChange(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.ne((await $.mv((L0["sender"]), "Text")), ""))) {
    await $.mset((await $.v(C, "DBLookupComboBox5")), "KeyValue", (await $.call(C, "StrToInt", [(await $.mv((L0["sender"]), "Text"))])));
  } else {
    await $.mset((await $.v(C, "DBLookupComboBox5")), "KeyValue", (await $.v(C, "null")));
  }
  await $.mset((await $.v(C, "dbedit6")), "text", (await $.mv((await $.v(C, "DBLookupComboBox5")), "text")));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TCO_Transactions", "DBLookupComboBox5Click", async function DBLookupComboBox5Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mset((await $.v(C, "Trdest")), "Text", (await $.call(C, "IntToStr", [(await $.mv((await $.mcall((await $.mv((await $.mv((await $.v(C, "DBLookupComboBox5")), "ListSource")), "DataSet")), "FieldByName", ["id"])), "AsInTeger"))])));
  await $.mset((await $.v(C, "dbedit6")), "text", (await $.mv((await $.v(C, "DBLookupComboBox5")), "text")));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TCO_Transactions", "ButtonApplyClick", async function ButtonApplyClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy((await $.and_((await $.and_((await $.and_((await $.and_((await $.and_(($.ne((await $.mv((await $.v(C, "debtvalue")), "Text")), "")), async () => ($.ne((await $.mv((await $.v(C, "debtvalue")), "Text")), "0")))), async () => ($.ne((await $.mv((await $.v(C, "creditvalue")), "Text")), "")))), async () => ($.ne((await $.mv((await $.v(C, "creditvalue")), "Text")), "0")))), async () => ($.ne((await $.mv((await $.v(C, "ekv")), "Text")), "")))), async () => ($.ne((await $.mv((await $.v(C, "ekv")), "Text")), "0")))))) {
    await $.stmt((await $.mcall((await $.mv((await $.v(C, "CO_DataMod")), "OPackage")), "CallProcedure", ["ins_transaction", [(await $.call(C, "strtoint", [(await $.mv((await $.v(C, "acc_id")), "text"))])), (await $.call(C, "strtoint", [(await $.mv((await $.v(C, "acc_id_")), "text"))])), (await $.mv((await $.v(C, "debtvalue")), "Text")), (await $.mv((await $.v(C, "creditvalue")), "Text")), (await $.mv((await $.v(C, "dbedit6")), "text")), (await $.mv((await $.v(C, "ekv")), "Text")), (await $.call(C, "strtofloat", [(await $.mv((await $.v(C, "editrate")), "text"))])), (await $.call(C, "strtofloat", [(await $.mv((await $.v(C, "editrate_")), "text"))]))]])));
    await $.stmt((await $.mcall((await $.mv((await $.v(C, "CO_DataMod")), "OPackage")), "Callprocedure", ["transaction_mn", []])));
    await $.mset((await $.v(C, "DebtAccSearchEdit")), "text", "");
    await $.mset((await $.v(C, "CreditAccSearchEdit")), "text", "");
    await $.mset((await $.v(C, "dbedit1")), "text", "");
    await $.mset((await $.v(C, "dbedit2")), "text", "");
    await $.mset((await $.v(C, "dbedit3")), "text", "");
    await $.mset((await $.v(C, "dbedit5")), "text", "");
    await $.mset((await $.v(C, "debtvalue")), "Text", "");
    await $.mset((await $.v(C, "creditvalue")), "text", "");
    await $.mset((await $.v(C, "ekv")), "text", "");
    await $.mset((await $.v(C, "trdest")), "text", "");
    await $.mcall((await $.v(C, "val_code")), "Setfocus", []);
  } else {
    await $.stmt((await $.call(C, "ShowMessage", ["Məbləği daxil edin!"])));
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TCO_Transactions", "ButtonCancelClick", async function ButtonCancelClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mset((await $.v(C, "debtvalue")), "text", "");
  await $.mset((await $.v(C, "creditvalue")), "text", "");
  await $.mset((await $.v(C, "ekv")), "Text", "");
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TCO_Transactions", "ButtonCloseClick", async function ButtonCloseClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.stmt($.call(C, "close", []));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TCO_Transactions", "FormCreate", async function FormCreate(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.not((await $.mv((await $.v(C, "DebitAccData")), "Active"))))) {
    await $.mcall((await $.v(C, "DebitAccData")), "Open", []);
  }
  if ($.truthy($.not((await $.mv((await $.v(C, "CreditAccData")), "Active"))))) {
    await $.mcall((await $.v(C, "CreditAccData")), "Open", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TCO_Transactions", "FormActivate", async function FormActivate(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mcall((await $.mv((await $.v(C, "CO_DataMod")), "Sysdat")), "Open", []);
  await $.mset((await $.v(C, "TransDate")), "Date", (await $.mv((await $.mcall((await $.mv((await $.v(C, "CO_DataMod")), "Sysdat")), "fieldbyname", ["tek_dat"])), "asdatetime")));
  await $.mset((await $.v(C, "val_code")), "text", "0");
  await $.mset((await $.v(C, "cur_val_code")), "text", "0");
  await $.mset((await $.v(C, "DebtAccSearchEdit")), "text", "");
  await $.mset((await $.v(C, "Dbedit1")), "text", "");
  await $.mset((await $.v(C, "Dbedit2")), "text", "");
  await $.mset((await $.v(C, "CreditAccSearchEdit")), "text", "");
  await $.mset((await $.v(C, "Dbedit5")), "text", "");
  await $.mset((await $.v(C, "Dbedit3")), "text", "");
  await $.mset((await $.v(C, "dbedit7")), "text", "");
  await $.mset((await $.v(C, "dbedit8")), "text", "");
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TCO_Transactions", "TrdestKeyPress", async function TrdestKeyPress(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "key": $.asRef(p1), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.eq((await L0["key"].get()), "\r"))) {
    await $.mcall((await $.v(C, "ButtonApply")), "SetFocus", []);
  }
  return L0.result;
}, {"params": ["Sender", "Key"], "kind": "procedure", "ptypes": ["TObject", "Char"]});
  return U;
}
