// Generated from P_OutForm_Unit.pas by pas2js — do not edit by hand; regenerate instead.
/* eslint-disable */
// @ts-nocheck

export default function define($) {
  const U = $.unit("P_OutForm_Unit", ["Windows", "Messages", "SysUtils", "Classes", "Graphics", "Controls", "Forms", "Dialogs", "StdCtrls", "ComCtrls", "CurrencyEdit", "SearchEdit", "Mask", "DBCtrls", "ExtCtrls", "Db", "OracleData", "P_Datamod_Unit"]);
  const C = [U];
  U.enumType("ttransactionside", 3);
  U.const("tsDebet", 0);
  U.const("tsCredit", 1);
  U.const("tsUnknown", 2);
  U.defClass("TP_OutForm", "TForm", {"groupbox1": {"name": "GroupBox1", "type": "TGroupBox"}, "headercontrol1": {"name": "HeaderControl1", "type": "THeaderControl"}, "panel1": {"name": "Panel1", "type": "TPanel"}, "paneldebit": {"name": "PanelDebit", "type": "TPanel"}, "paneldebitrest": {"name": "PanelDebitRest", "type": "TPanel"}, "label1": {"name": "Label1", "type": "TLabel"}, "label2": {"name": "Label2", "type": "TLabel"}, "d_ostat": {"name": "d_ostat", "type": "TLabel"}, "d_pok_ostat": {"name": "d_pok_ostat", "type": "TLabel"}, "panel4": {"name": "Panel4", "type": "TPanel"}, "dblookupcombobox1": {"name": "DBLookupComboBox1", "type": "TDBLookupComboBox"}, "dbedit1": {"name": "DBEdit1", "type": "TDBEdit"}, "panel5": {"name": "Panel5", "type": "TPanel"}, "dblookupcombobox2": {"name": "DBLookupComboBox2", "type": "TDBLookupComboBox"}, "dbedit2": {"name": "DBEdit2", "type": "TDBEdit"}, "debtaccsearchedit": {"name": "DebtAccSearchEdit", "type": "TSearchEdit"}, "acc_id_": {"name": "acc_id_", "type": "TEdit"}, "panel6": {"name": "Panel6", "type": "TPanel"}, "valcode": {"name": "ValCode", "type": "TEdit"}, "editvalute": {"name": "editvalute", "type": "TComboBox"}, "editrate": {"name": "editrate", "type": "TEdit"}, "panel2": {"name": "Panel2", "type": "TPanel"}, "panel7": {"name": "Panel7", "type": "TPanel"}, "panel8": {"name": "Panel8", "type": "TPanel"}, "label3": {"name": "Label3", "type": "TLabel"}, "label4": {"name": "Label4", "type": "TLabel"}, "c_ostat": {"name": "c_ostat", "type": "TLabel"}, "c_pok_ostat": {"name": "c_pok_ostat", "type": "TLabel"}, "panel9": {"name": "Panel9", "type": "TPanel"}, "dblookupcombobox3": {"name": "DBLookupComboBox3", "type": "TDBLookupComboBox"}, "dbedit3": {"name": "DBEdit3", "type": "TDBEdit"}, "panel10": {"name": "Panel10", "type": "TPanel"}, "dblookupcombobox4": {"name": "DBLookupComboBox4", "type": "TDBLookupComboBox"}, "dbedit5": {"name": "DBEdit5", "type": "TDBEdit"}, "creditaccsearchedit": {"name": "CreditAccSearchEdit", "type": "TSearchEdit"}, "acc_id": {"name": "acc_id", "type": "TEdit"}, "panel11": {"name": "Panel11", "type": "TPanel"}, "valcode_": {"name": "ValCode_", "type": "TEdit"}, "editvalute_": {"name": "editvalute_", "type": "TComboBox"}, "editrate_": {"name": "editrate_", "type": "TEdit"}, "edit1": {"name": "Edit1", "type": "TEdit"}, "groupbox2": {"name": "GroupBox2", "type": "TGroupBox"}, "panel3": {"name": "Panel3", "type": "TPanel"}, "panel12": {"name": "Panel12", "type": "TPanel"}, "panel13": {"name": "Panel13", "type": "TPanel"}, "groupbox3": {"name": "GroupBox3", "type": "TGroupBox"}, "panel14": {"name": "Panel14", "type": "TPanel"}, "convertationsymbollookup": {"name": "ConvertationSymbolLookUp", "type": "TDBLookupComboBox"}, "searchedit2": {"name": "SearchEdit2", "type": "TSearchEdit"}, "panel15": {"name": "Panel15", "type": "TPanel"}, "cashsymbollookup": {"name": "CashSymbolLookUp", "type": "TDBLookupComboBox"}, "searchedit3": {"name": "SearchEdit3", "type": "TSearchEdit"}, "panel16": {"name": "Panel16", "type": "TPanel"}, "dblookupcombobox5": {"name": "DBLookupComboBox5", "type": "TDBLookupComboBox"}, "dbedit6": {"name": "DBEdit6", "type": "TDBEdit"}, "searchedit1": {"name": "SearchEdit1", "type": "TSearchEdit"}, "groupbox4": {"name": "GroupBox4", "type": "TGroupBox"}, "label5": {"name": "Label5", "type": "TLabel"}, "label6": {"name": "Label6", "type": "TLabel"}, "label7": {"name": "Label7", "type": "TLabel"}, "transdate": {"name": "TransDate", "type": "TDateTimePicker"}, "dbeditoperationno": {"name": "DBEditOperationNo", "type": "TDBEdit"}, "dblookupcombobox6": {"name": "DBLookupComboBox6", "type": "TDBLookupComboBox"}, "dbedit9": {"name": "DBEdit9", "type": "TDBEdit"}, "searchedit4": {"name": "SearchEdit4", "type": "TSearchEdit"}, "panel17": {"name": "Panel17", "type": "TPanel"}, "buttonapply": {"name": "ButtonApply", "type": "TButton"}, "buttoncancel": {"name": "ButtonCancel", "type": "TButton"}, "buttonclose": {"name": "ButtonClose", "type": "TButton"}, "commission_id": {"name": "commission_id", "type": "TEdit"}, "debtvalue": {"name": "debtvalue", "type": "TCurrencyEdit"}, "creditvalue": {"name": "creditvalue", "type": "TCurrencyEdit"}, "ekv": {"name": "ekv", "type": "TCurrencyEdit"}, "panel19": {"name": "Panel19", "type": "TPanel"}, "countriddbedit": {"name": "CountrIDDBEdit", "type": "TEdit"}, "countridlookup": {"name": "CountrIDLookUp", "type": "TDBLookupComboBox"}, "panel18": {"name": "Panel18", "type": "TPanel"}, "reportiddbedit": {"name": "ReportIDDBEdit", "type": "TEdit"}, "reportidlookup": {"name": "ReportIDLookUp", "type": "TDBLookupComboBox"}, "debitaccdata": {"name": "DebitAccData", "type": "TOracleDataSet"}, "debitaccs": {"name": "DebitAccs", "type": "TDataSource"}, "creditaccs": {"name": "CreditAccs", "type": "TDataSource"}, "creditaccdata": {"name": "CreditAccData", "type": "TOracleDataSet"}, "button1": {"name": "Button1", "type": "TButton"}}, {});
  U.init(async () => {
    U.var_("TransactionSide", null, "TTransactionSide");
    U.var_("P_OutForm", null, "TP_OutForm");
  });
  U.method("TP_OutForm", "ValCodeChange", async function ValCodeChange(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t1 = (await $.mv((await $.v(C, "P_DataModule")), "temprate"));
    await $.stmt($.wcall([$t1], "Close", [], C));
    await $.mcall((await $.wv([$t1], "SQL", C, false)), "Clear", []);
    await $.mset((await $.wv([$t1], "SQL", C, false)), "Text", $.add($.add($.add("Select c.rowid ,c.* from temprate c where val_kod= ", "'"), (await $.mv((await $.wv([$t1], "valcode", C, false)), "Text"))), "'"));
    await $.stmt($.wcall([$t1], "Open", [], C));
    await $.mset((await $.wv([$t1], "editrate", C, false)), "Text", (await $.mv((await $.wcall([$t1], "FieldByName", ["ostat"], C)), "AsString")));
  }
  {
    const $t2 = (await $.mv((await $.v(C, "P_DataModule")), "temprate"));
    await $.stmt($.wcall([$t2], "Close", [], C));
    await $.mcall((await $.wv([$t2], "SQL", C, false)), "Clear", []);
    await $.mset((await $.wv([$t2], "SQL", C, false)), "Text", $.add($.add($.add("Select c.rowid ,c.* from avalute c where valute= ", "'"), (await $.mv((await $.wv([$t2], "valcode", C, false)), "Text"))), "'"));
    await $.stmt($.wcall([$t2], "Open", [], C));
    await $.mset((await $.wv([$t2], "editvalute", C, false)), "Text", (await $.mv((await $.wcall([$t2], "FieldByName", ["valu_name"], C)), "AsString")));
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TP_OutForm", "editvaluteChange", async function editvaluteChange(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t3 = (await $.mv((await $.v(C, "P_DataModule")), "avalute"));
    await $.stmt($.wcall([$t3], "Close", [], C));
    await $.mcall((await $.wv([$t3], "SQL", C, false)), "Clear", []);
    await $.mset((await $.wv([$t3], "SQL", C, false)), "Text", $.add($.add($.add("Select c.rowid ,c.* from avalute c where valu_name= ", "'"), (await $.mv((await $.wv([$t3], "editvalute", C, false)), "Text"))), "'"));
    await $.stmt($.wcall([$t3], "Open", [], C));
    await $.mset((await $.wv([$t3], "valcode", C, false)), "Text", (await $.mv((await $.wcall([$t3], "FieldByName", ["valute"], C)), "AsString")));
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TP_OutForm", "DebtAccSearchEditChange", async function DebtAccSearchEditChange(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mset((await $.v(C, "d_ostat")), "visible", true);
  await $.mset((await $.v(C, "d_pok_ostat")), "visible", true);
  {
    const $t4 = (await $.mv((await $.v(C, "P_DataModule")), "archost"));
    await $.stmt($.wcall([$t4], "Close", [], C));
    await $.mcall((await $.wv([$t4], "SQL", C, false)), "Clear", []);
    await $.mset((await $.wv([$t4], "SQL", C, false)), "Text", $.add($.add($.add("Select * from tenostat where acc_id in (select id from fizaccs where accno=", "'"), (await $.mv((await $.wv([$t4], "DebtAccSearchEdit", C, false)), "Text"))), "')"));
    await $.stmt($.wcall([$t4], "Open", [], C));
    await $.mset((await $.wv([$t4], "d_ostat", C, false)), "caption", (await $.mv((await $.wcall([$t4], "fieldbyname", ["ostat"], C)), "asstring")));
  }
  {
    const $t5 = (await $.mv((await $.v(C, "P_DataModule")), "archost"));
    await $.stmt($.wcall([$t5], "Close", [], C));
    await $.mcall((await $.wv([$t5], "SQL", C, false)), "Clear", []);
    await $.mset((await $.wv([$t5], "SQL", C, false)), "Text", $.add($.add($.add("Select * from tenostat where acc_id in (select id from fizaccs where accno=", "'"), (await $.mv((await $.wv([$t5], "DebtAccSearchEdit", C, false)), "Text"))), "')"));
    await $.stmt($.wcall([$t5], "Open", [], C));
    await $.mset((await $.wv([$t5], "d_pok_ostat", C, false)), "caption", (await $.mv((await $.wcall([$t5], "fieldbyname", ["pok_ostat"], C)), "asstring")));
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TP_OutForm", "DBLookupComboBox2Click", async function DBLookupComboBox2Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mset((await $.v(C, "DebtAccSearchEdit")), "text", (await $.mv((await $.v(C, "Dbedit2")), "text")));
  {
    const $t6 = (await $.mv((await $.v(C, "P_DataModule")), "archost"));
    await $.stmt($.wcall([$t6], "Close", [], C));
    await $.mcall((await $.wv([$t6], "SQL", C, false)), "Clear", []);
    await $.mset((await $.wv([$t6], "SQL", C, false)), "Text", $.add($.add($.add("Select * from tenostat where acc_id in (select id from fizaccs where accno=", "'"), (await $.mv((await $.wv([$t6], "DebtAccSearchEdit", C, false)), "Text"))), "')"));
    await $.stmt($.wcall([$t6], "Open", [], C));
    await $.mset((await $.wv([$t6], "d_ostat", C, false)), "caption", (await $.mv((await $.wcall([$t6], "fieldbyname", ["ostat"], C)), "asstring")));
  }
  {
    const $t7 = (await $.mv((await $.v(C, "P_DataModule")), "archost"));
    await $.stmt($.wcall([$t7], "Close", [], C));
    await $.mcall((await $.wv([$t7], "SQL", C, false)), "Clear", []);
    await $.mset((await $.wv([$t7], "SQL", C, false)), "Text", $.add($.add($.add("Select * from tenostat where acc_id in (select id from fizaccs where accno=", "'"), (await $.mv((await $.wv([$t7], "DebtAccSearchEdit", C, false)), "Text"))), "')"));
    await $.stmt($.wcall([$t7], "Open", [], C));
    await $.mset((await $.wv([$t7], "d_pok_ostat", C, false)), "caption", (await $.mv((await $.wcall([$t7], "fieldbyname", ["pok_ostat"], C)), "asstring")));
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TP_OutForm", "DBLookupComboBox1Click", async function DBLookupComboBox1Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mset((await $.v(C, "DebtAccSearchEdit")), "text", (await $.mv((await $.v(C, "Dbedit2")), "text")));
  {
    const $t8 = (await $.mv((await $.v(C, "P_DataModule")), "archost"));
    await $.stmt($.wcall([$t8], "Close", [], C));
    await $.mcall((await $.wv([$t8], "SQL", C, false)), "Clear", []);
    await $.mset((await $.wv([$t8], "SQL", C, false)), "Text", $.add($.add($.add("Select * from tenostat where acc_id in (select id from fizaccs where accno=", "'"), (await $.mv((await $.wv([$t8], "DebtAccSearchEdit", C, false)), "Text"))), "')"));
    await $.stmt($.wcall([$t8], "Open", [], C));
    await $.mset((await $.wv([$t8], "d_ostat", C, false)), "caption", (await $.mv((await $.wcall([$t8], "fieldbyname", ["ostat"], C)), "asstring")));
  }
  {
    const $t9 = (await $.mv((await $.v(C, "P_DataModule")), "archost"));
    await $.stmt($.wcall([$t9], "Close", [], C));
    await $.mcall((await $.wv([$t9], "SQL", C, false)), "Clear", []);
    await $.mset((await $.wv([$t9], "SQL", C, false)), "Text", $.add($.add($.add("Select * from tenostat where acc_id in (select id from fizaccs where accno=", "'"), (await $.mv((await $.wv([$t9], "DebtAccSearchEdit", C, false)), "Text"))), "')"));
    await $.stmt($.wcall([$t9], "Open", [], C));
    await $.mset((await $.wv([$t9], "d_pok_ostat", C, false)), "caption", (await $.mv((await $.wcall([$t9], "fieldbyname", ["pok_ostat"], C)), "asstring")));
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TP_OutForm", "ValCode_Change", async function ValCode_Change(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t10 = (await $.mv((await $.v(C, "P_DataModule")), "temprate"));
    await $.stmt($.wcall([$t10], "Close", [], C));
    await $.mcall((await $.wv([$t10], "SQL", C, false)), "Clear", []);
    await $.mset((await $.wv([$t10], "SQL", C, false)), "Text", $.add($.add($.add("Select c.rowid ,c.* from temprate c where val_kod= ", "'"), (await $.mv((await $.wv([$t10], "valcode_", C, false)), "Text"))), "'"));
    await $.stmt($.wcall([$t10], "Open", [], C));
    await $.mset((await $.wv([$t10], "editrate_", C, false)), "Text", (await $.mv((await $.wcall([$t10], "FieldByName", ["ostat"], C)), "AsString")));
  }
  {
    const $t11 = (await $.mv((await $.v(C, "P_DataModule")), "avalute"));
    await $.stmt($.wcall([$t11], "Close", [], C));
    await $.mcall((await $.wv([$t11], "SQL", C, false)), "Clear", []);
    await $.mset((await $.wv([$t11], "SQL", C, false)), "Text", $.add($.add($.add("Select c.rowid ,c.* from avalute_t c where valute= ", "'"), (await $.mv((await $.wv([$t11], "valcode_", C, false)), "Text"))), "'"));
    await $.stmt($.wcall([$t11], "Open", [], C));
    await $.mset((await $.wv([$t11], "editvalute_", C, false)), "Text", (await $.mv((await $.wcall([$t11], "FieldByName", ["valu_name"], C)), "AsString")));
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TP_OutForm", "editvalute_Change", async function editvalute_Change(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t12 = (await $.mv((await $.v(C, "P_DataModule")), "avalute"));
    await $.stmt($.wcall([$t12], "Close", [], C));
    await $.mcall((await $.wv([$t12], "SQL", C, false)), "Clear", []);
    await $.mset((await $.wv([$t12], "SQL", C, false)), "Text", $.add($.add($.add("Select c.rowid ,c.* from avalute c where valu_name= ", "'"), (await $.mv((await $.wv([$t12], "editvalute_", C, false)), "Text"))), "'"));
    await $.stmt($.wcall([$t12], "Open", [], C));
    await $.mset((await $.wv([$t12], "valcode_", C, false)), "Text", (await $.mv((await $.wcall([$t12], "FieldByName", ["valute"], C)), "AsString")));
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TP_OutForm", "CreditAccSearchEditChange", async function CreditAccSearchEditChange(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t13 = (await $.mv((await $.v(C, "P_DataModule")), "archost"));
    await $.stmt($.wcall([$t13], "Close", [], C));
    await $.mcall((await $.wv([$t13], "SQL", C, false)), "Clear", []);
    await $.mset((await $.wv([$t13], "SQL", C, false)), "Text", $.add($.add($.add("Select * from tenostat where acc_id in (select id from fizaccs where accno=", "'"), (await $.mv((await $.wv([$t13], "creditAccSearchEdit", C, false)), "Text"))), "')"));
    await $.stmt($.wcall([$t13], "Open", [], C));
    await $.mset((await $.wv([$t13], "c_ostat", C, false)), "caption", (await $.mv((await $.wcall([$t13], "fieldbyname", ["ostat"], C)), "asstring")));
  }
  {
    const $t14 = (await $.mv((await $.v(C, "P_DataModule")), "archost"));
    await $.stmt($.wcall([$t14], "Close", [], C));
    await $.mcall((await $.wv([$t14], "SQL", C, false)), "Clear", []);
    await $.mset((await $.wv([$t14], "SQL", C, false)), "Text", $.add($.add($.add("Select * from tenostat where acc_id in (select id from fizaccs where accno=", "'"), (await $.mv((await $.wv([$t14], "creditAccSearchEdit", C, false)), "Text"))), "')"));
    await $.stmt($.wcall([$t14], "Open", [], C));
    await $.mset((await $.wv([$t14], "c_pok_ostat", C, false)), "caption", (await $.mv((await $.wcall([$t14], "fieldbyname", ["pok_ostat"], C)), "asstring")));
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TP_OutForm", "acc_idChange", async function acc_idChange(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t15 = (await $.mv((await $.v(C, "P_DataModule")), "ACC"));
    await $.stmt($.wcall([$t15], "Close", [], C));
    await $.mcall((await $.wv([$t15], "SQL", C, false)), "Clear", []);
    await $.mset((await $.wv([$t15], "SQL", C, false)), "Text", $.add($.add($.add("Select c.rowid ,c.* from account c where id= ", "'"), (await $.mv((await $.wv([$t15], "acc_id", C, false)), "Text"))), "'"));
    await $.stmt($.wcall([$t15], "Open", [], C));
    await $.mset((await $.wv([$t15], "creditAccSearchEdit", C, false)), "Text", (await $.mv((await $.wcall([$t15], "FieldByName", ["acc_no"], C)), "AsString")));
    await $.mset((await $.wv([$t15], "dbedit5", C, false)), "text", (await $.mv((await $.wv([$t15], "CreditAccSearchEdit", C, false)), "Text")));
  }
  {
    const $t16 = (await $.mv((await $.v(C, "P_DataModule")), "ACC"));
    await $.stmt($.wcall([$t16], "Close", [], C));
    await $.mcall((await $.wv([$t16], "SQL", C, false)), "Clear", []);
    await $.mset((await $.wv([$t16], "SQL", C, false)), "Text", $.add($.add($.add("Select c.rowid ,c.* from account c where id= ", "'"), (await $.mv((await $.wv([$t16], "acc_id", C, false)), "Text"))), "'"));
    await $.stmt($.wcall([$t16], "Open", [], C));
    await $.mset((await $.wv([$t16], "valcode_", C, false)), "Text", (await $.mv((await $.wcall([$t16], "FieldByName", ["val_acc"], C)), "AsString")));
  }
  {
    const $t17 = (await $.mv((await $.v(C, "P_DataModule")), "ACC"));
    await $.stmt($.wcall([$t17], "Close", [], C));
    await $.mcall((await $.wv([$t17], "SQL", C, false)), "Clear", []);
    await $.mset((await $.wv([$t17], "SQL", C, false)), "Text", $.add($.add($.add("Select c.rowid ,c.* from account c where id= ", "'"), (await $.mv((await $.wv([$t17], "acc_id", C, false)), "Text"))), "'"));
    await $.stmt($.wcall([$t17], "Open", [], C));
    await $.mset((await $.wv([$t17], "dbedit3", C, false)), "Text", (await $.mv((await $.wcall([$t17], "FieldByName", ["name"], C)), "AsString")));
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.func("CutEditText", async function CutEditText(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "x": 0, "sel": 0};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t18 = (await $.call(C, "TCurrencyEdit", [L0["sender"]]));
    if ($.truthy($.eq((await $.wv([$t18], "DecimalSeparator", C, false)), (await $.wv([$t18], "ThousandSeparator", C, false))))) {
      return L0.result;
    }
    if ($.truthy($.eq((await $.wcall([$t18], "Pos", [(await $.wv([$t18], "DecimalSeparator", C, false)), (await $.wv([$t18], "Text", C, false))], C)), 0))) {
      return L0.result;
    }
    await $.wset([$t18], "Sel", (await $.wv([$t18], "SelStart", C, false)), { get: async () => L0["sel"], set: async (v) => { L0["sel"] = v; }, local: true });
    await $.wset([$t18], "X", $.sub($.sub((await $.wcall([$t18], "Length", [(await $.wv([$t18], "Text", C, false))], C)), (await $.wcall([$t18], "Pos", [(await $.wv([$t18], "DecimalSeparator", C, false)), (await $.wv([$t18], "Text", C, false))], C))), (await $.wv([$t18], "CurrencyDecimals", C, false))), { get: async () => L0["x"], set: async (v) => { L0["x"] = v; }, local: true });
    if ($.truthy(($.gt((await $.wv([$t18], "X", { get: async () => L0["x"], set: async (v) => { L0["x"] = v; }, local: true }, false)), 0)))) {
      await $.wset([$t18], "Text", (await $.wcall([$t18], "Copy", [(await $.wv([$t18], "Text", C, false)), 0, ($.sub((await $.wcall([$t18], "Length", [(await $.wv([$t18], "Text", C, false))], C)), (await $.wv([$t18], "X", { get: async () => L0["x"], set: async (v) => { L0["x"] = v; }, local: true }, false))))], C)), C);
      await $.wset([$t18], "SelStart", (await $.wv([$t18], "Sel", { get: async () => L0["sel"], set: async (v) => { L0["sel"] = v; }, local: true }, false)), C);
    }
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.func("RoundNew", async function RoundNew(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"x": $.copyArg(p0), "precision": $.copyArg(p1), result: 0, "scaledfractpart": 0, "temp": 0};
  await $.fixArgs(L0, ["x", "precision"]);
  L0["scaledfractpart"] = $.mul((await $.call(C, "Frac", [L0["x"]])), L0["precision"]);
  L0["temp"] = (await $.call(C, "Frac", [L0["scaledfractpart"]]));
  L0["scaledfractpart"] = (await $.call(C, "Int", [L0["scaledfractpart"]]));
  if ($.truthy($.ge((await $.call(C, "Round", [$.mul(L0["temp"], 100)])), 50))) {
    L0["scaledfractpart"] = $.add(L0["scaledfractpart"], 1);
  }
  if ($.truthy($.le((await $.call(C, "Round", [$.mul(L0["temp"], 100)])), (-(50))))) {
    L0["scaledfractpart"] = $.sub(L0["scaledfractpart"], 1);
  }
  L0.result = $.add((await $.call(C, "Int", [L0["x"]])), $.fdiv(L0["scaledfractpart"], L0["precision"]));
  return L0.result;
}, {"params": ["X", "Precision"], "kind": "function", "ptypes": ["Double", "Integer"]});
  U.method("TP_OutForm", "SetAmmounts", async function SetAmmounts(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"transactionside": $.copyArg(p0), result: undefined, "debetrate": 0, "creditrate": 0, "debitammount": 0, "creditammount": 0, "lammount": 0};
  await $.fixArgs(L0, ["transactionside"]);
  L0["debetrate"] = (await $.call(C, "strtofloat", [(await $.mv((await $.v(C, "editrate")), "text"))]));
  L0["creditrate"] = (await $.call(C, "strtofloat", [(await $.mv((await $.v(C, "editrate_")), "text"))]));
  { const $t19 = L0["transactionside"];
    if ($.eq($t19, (await $.v(C, "tsDebet")))) {
      L0["lammount"] = (await $.call(C, "RoundNew", [$.mul((await $.mv((await $.v(C, "debtvalue")), "Value")), L0["debetrate"]), 1000000]));
      if ($.truthy($.eq((await $.mv((await $.v(C, "ValCode")), "Text")), (await $.mv((await $.v(C, "ValCode_")), "Text"))))) {
        L0["creditammount"] = (await $.mv((await $.v(C, "DebtValue")), "Value"));
      } else {
        L0["creditammount"] = (await $.call(C, "RoundNew", [$.fdiv(L0["lammount"], L0["creditrate"]), 1000000]));
      }
      await $.mset((await $.v(C, "ekv")), "Value", (await $.call(C, "RoundNew", [L0["lammount"], 100])));
      await $.mset((await $.v(C, "creditvalue")), "Value", (await $.call(C, "RoundNew", [L0["creditammount"], 100])));
    }
    else if ($.eq($t19, (await $.v(C, "tsCredit")))) {
      L0["lammount"] = (await $.call(C, "RoundNew", [$.mul((await $.mv((await $.v(C, "creditvalue")), "Value")), L0["creditrate"]), 1000000]));
      if ($.truthy($.eq((await $.mv((await $.v(C, "ValCode")), "Text")), (await $.mv((await $.v(C, "ValCode_")), "Text"))))) {
        L0["debitammount"] = (await $.mv((await $.v(C, "CreditValue")), "Value"));
      } else {
        L0["debitammount"] = (await $.call(C, "RoundNew", [$.fdiv(L0["lammount"], L0["debetrate"]), 1000000]));
      }
      await $.mset((await $.v(C, "ekv")), "Value", (await $.call(C, "RoundNew", [L0["lammount"], 100])));
      await $.mset((await $.v(C, "debtvalue")), "Value", (await $.call(C, "RoundNew", [L0["debitammount"], 100])));
    }
    else if ($.eq($t19, (await $.v(C, "tsUnknown")))) {
      {
        const $t20 = Self;
        if ($.truthy($.eq((await $.mv((await $.wv([$t20], "valcode", C, false)), "text")), "0"))) {
          await $.mset((await $.wv([$t20], "debtvalue", C, false)), "Value", (await $.mv((await $.wv([$t20], "ekv", C, false)), "Value")));
        }
        if ($.truthy($.eq((await $.mv((await $.wv([$t20], "valcode_", C, false)), "text")), "0"))) {
          await $.mset((await $.wv([$t20], "creditvalue", C, false)), "Value", (await $.mv((await $.wv([$t20], "ekv", C, false)), "Value")));
        }
      }
    }
  }
  return L0.result;
}, {"params": ["TransactionSide"], "kind": "procedure", "ptypes": ["TTransactionSide"]});
  U.method("TP_OutForm", "debtvalueChange", async function debtvalueChange(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.stmt((await $.call(C, "CutEditText", [L0["sender"]])));
  if ($.truthy($.eq((await $.mv((await $.call(C, "TCurrencyEdit", [L0["sender"]])), "Text")), (await $.v(C, "EmptyStr"))))) {
    await $.mset((await $.call(C, "TCurrencyEdit", [L0["sender"]])), "Value", 0);
  }
  { const $t21 = (await $.mv((await $.call(C, "TCurrencyEdit", [L0["sender"]])), "Tag"));
    if ($.eq($t21, 1)) {
      await $.set(C, "TransactionSide", (await $.v(C, "tsDebet")));
    }
    else if ($.eq($t21, 2)) {
      await $.set(C, "TransactionSide", (await $.v(C, "tsCredit")));
    }
    else if ($.eq($t21, 3)) {
      await $.set(C, "TransactionSide", (await $.v(C, "tsUnknown")));
    }
  }
  await $.stmt((await $.call(C, "SetAmmounts", [(await $.v(C, "TransactionSide"))])));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TP_OutForm", "creditvalueChange", async function creditvalueChange(Self, p0) {
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
  U.method("TP_OutForm", "FormActivate", async function FormActivate(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mset((await $.v(C, "TransDate")), "date", (await $.mv((await $.mcall((await $.mv((await $.v(C, "P_DataModule")), "Sysdat")), "Fieldbyname", ["tek_dat"])), "asdatetime")));
  await $.mset((await $.v(C, "DebtAccSearchEdit")), "text", (await $.mv((await $.mcall((await $.mv((await $.v(C, "P_DataModule")), "Account")), "fieldbyname", ["accno"])), "asstring")));
  await $.mset((await $.v(C, "CreditAccSearchEdit")), "text", (await $.mv((await $.mcall((await $.mv((await $.v(C, "P_DataModule")), "CO_Out")), "fieldbyname", ["creditaccount"])), "asstring")));
  await $.mset((await $.v(C, "dbedit2")), "text", (await $.mv((await $.v(C, "DebtAccSearchEdit")), "text")));
  await $.mset((await $.v(C, "dbedit1")), "text", (await $.mv((await $.mcall((await $.mv((await $.v(C, "P_DataModule")), "Account")), "fieldbyname", ["accname"])), "asstring")));
  await $.mset((await $.v(C, "valcode")), "text", (await $.mv((await $.mcall((await $.mv((await $.v(C, "P_DataModule")), "Account")), "fieldbyname", ["accvalcode"])), "asstring")));
  await $.mset((await $.v(C, "acc_id")), "text", (await $.mv((await $.mcall((await $.mv((await $.v(C, "P_DataModule")), "CO_Out")), "fieldbyname", ["credit"])), "asstring")));
  await $.mset((await $.v(C, "acc_id_")), "text", (await $.mv((await $.mcall((await $.mv((await $.v(C, "P_DataModule")), "Account")), "fieldbyname", ["id"])), "asstring")));
  await $.mset((await $.v(C, "dbedit6")), "text", (await $.mv((await $.mcall((await $.mv((await $.v(C, "P_DataModule")), "CO_Out")), "fieldbyname", ["assignment"])), "asstring")));
  await $.mset((await $.v(C, "commission_id")), "text", (await $.mv((await $.mcall((await $.mv((await $.v(C, "P_DataModule")), "CO_Out")), "fieldbyname", ["id"])), "asstring")));
  await $.mcall((await $.mv((await $.v(C, "P_DataModule")), "commission_trans_km")), "Open", []);
  await $.mset((await $.v(C, "dbedit9")), "text", "");
  await $.mset((await $.v(C, "ReportIDDBEdit")), "Text", "0");
  await $.mset((await $.v(C, "CountrIDDBEdit")), "Text", "0");
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TP_OutForm", "addvalute", async function addvalute(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: undefined, "xxx": 0};
  {
    const $t22 = (await $.mv((await $.v(C, "P_DataModule")), "avalute"));
    await $.stmt($.wcall([$t22], "Close", [], C));
    await $.mcall((await $.wv([$t22], "SQL", C, false)), "Clear", []);
    await $.stmt((await $.mcall((await $.wv([$t22], "SQL", C, false)), "Add", ["select valu_name from avalute"])));
    await $.stmt($.wcall([$t22], "Open", [], C));
  }
  await $.mcall((await $.v(C, "editvalute")), "Clear", []);
  { const $t23 = (await $.mv((await $.mv((await $.v(C, "P_DataModule")), "avalute")), "RecordCount"));
    L0["xxx"] = 1;
    let $t24 = true;
    for (;;) {
      if (!$t24) { L0["xxx"] = $.succ(L0["xxx"], 1); }
      $t24 = false;
      if (!($.ord(L0["xxx"]) <= $.ord($t23))) break;
      {
        const $t25 = (await $.wobj(C, "editvalute"));
        await $.stmt((await $.mcall((await $.wv([$t25], "Items", C, false)), "Add", [(await $.mv((await $.mcall((await $.mv((await $.wv([$t25], "P_DataModule", C, false)), "avalute")), "FieldByName", ["valu_name"])), "AsString"))])));
      }
      await $.mcall((await $.mv((await $.v(C, "P_DataModule")), "avalute")), "Next", []);
      await $.tick();
    }
  }
  return L0.result;
}, {"params": [], "kind": "procedure", "ptypes": []});
  U.method("TP_OutForm", "FormCreate", async function FormCreate(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.stmt($.call(C, "addvalute", []));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TP_OutForm", "ButtonApplyClick", async function ButtonApplyClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "ddate": 0, "transid": 0};
  await $.fixArgs(L0, ["sender"]);
  L0["ddate"] = (await $.call(C, "Trunc", [(await $.mv((await $.v(C, "TransDate")), "date"))]));
  if ($.truthy((await $.and_((await $.and_(($.ne((await $.mv((await $.v(C, "debtvalue")), "text")), "")), async () => ($.ne((await $.mv((await $.v(C, "creditvalue")), "text")), "")))), async () => ($.ne((await $.mv((await $.v(C, "ekv")), "text")), "")))))) {
    await $.stmt((await $.mcall((await $.mv((await $.v(C, "P_DataModule")), "OPackage")), "CallProcedure", ["ins_commission_trans_km", [(await $.call(C, "Strtoint", [(await $.mv((await $.v(C, "commission_id")), "text"))])), (await $.call(C, "Strtoint", [(await $.mv((await $.v(C, "acc_id_")), "text"))])), (await $.call(C, "Strtoint", [(await $.mv((await $.v(C, "acc_id")), "text"))])), (await $.mv((await $.v(C, "debtvalue")), "value")), (await $.mv((await $.v(C, "creditvalue")), "value")), L0["ddate"]]])));
    await $.mcall((await $.mv((await $.v(C, "P_DataModule")), "commission_trans_km")), "refresh", []);
  }
  if ($.truthy((await $.and_((await $.and_(($.ne((await $.mv((await $.v(C, "debtvalue")), "Text")), "")), async () => ($.ne((await $.mv((await $.v(C, "creditvalue")), "Text")), "")))), async () => ($.ne((await $.mv((await $.v(C, "ekv")), "Text")), "")))))) {
    await $.stmt((await $.mcall((await $.mv((await $.v(C, "P_DataModule")), "OPackage")), "CallProcedure", ["ins_transaction", [(await $.call(C, "strtoint", [(await $.mv((await $.v(C, "acc_id_")), "text"))])), (await $.call(C, "strtoint", [(await $.mv((await $.v(C, "acc_id")), "text"))])), (await $.mv((await $.v(C, "debtvalue")), "value")), (await $.mv((await $.v(C, "creditvalue")), "value")), (await $.mv((await $.v(C, "dbedit6")), "text")), (await $.mv((await $.v(C, "ekv")), "value")), (await $.call(C, "strtofloat", [(await $.mv((await $.v(C, "editrate")), "text"))])), (await $.call(C, "strtofloat", [(await $.mv((await $.v(C, "editrate_")), "text"))])), (await $.mv((await $.v(C, "ReportIDLookUp")), "KeyValue")), (await $.mv((await $.v(C, "CountrIDLookUp")), "KeyValue")), (await $.mv((await $.v(C, "CashSymbolLookUp")), "KeyValue")), (await $.mv((await $.v(C, "ConvertationSymbolLookUp")), "KeyValue"))]])));
    L0["transid"] = (await $.mcall((await $.mv((await $.v(C, "P_DataModule")), "OPackage")), "CallIntegerFunction", ["transaction_mn", []]));
    await $.stmt((await $.mcall((await $.mv((await $.v(C, "P_DataModule")), "OSCT")), "CallProcedure", ["SetTransactions", [(await $.mv((await $.mcall((await $.mv((await $.v(C, "P_DataModule")), "commission_trans_km")), "fieldbyname", ["id"])), "asinteger")), (await $.mv((await $.mcall((await $.mv((await $.v(C, "P_DataModule")), "commission_trans_km")), "fieldbyname", ["debt"])), "asinteger")), (await $.mv((await $.mcall((await $.mv((await $.v(C, "P_DataModule")), "commission_trans_km")), "fieldbyname", ["credit"])), "asinteger")), (await $.mv((await $.mcall((await $.mv((await $.v(C, "P_DataModule")), "commission_trans_km")), "fieldbyname", ["c_value"])), "asinteger")), (await $.mv((await $.mcall((await $.mv((await $.v(C, "P_DataModule")), "commission_trans_km")), "fieldbyname", ["d_value"])), "asinteger")), (await $.mv((await $.mcall((await $.mv((await $.v(C, "P_DataModule")), "commission_trans_km")), "fieldbyname", ["ddate"])), "asdatetime")), L0["transid"]]])));
    await $.stmt($.call(C, "Close", []));
    await $.mcall((await $.mv((await $.v(C, "P_DataModule")), "Transactions")), "close", []);
    await $.mcall((await $.mv((await $.v(C, "P_DataModule")), "Transactions")), "open", []);
  }
  if ($.truthy((await $.and_((await $.and_(($.eq((await $.mv((await $.v(C, "debtvalue")), "Text")), "0")), async () => ($.eq((await $.mv((await $.v(C, "creditvalue")), "Text")), "0")))), async () => ($.eq((await $.mv((await $.v(C, "ekv")), "Text")), "0")))))) {
    await $.stmt((await $.call(C, "ShowMessage", ["Daxil etdiyiniz məbləğ sıfırdan böyük olmalıdır!"])));
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TP_OutForm", "ButtonCancelClick", async function ButtonCancelClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mset((await $.v(C, "debtvalue")), "Text", "");
  await $.mset((await $.v(C, "creditvalue")), "Text", "");
  await $.mset((await $.v(C, "ekv")), "Text", "");
  await $.mset((await $.v(C, "SearchEdit2")), "text", "");
  await $.mset((await $.v(C, "SearchEdit3")), "text", "");
  await $.mset((await $.v(C, "SearchEdit1")), "text", "");
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TP_OutForm", "ButtonCloseClick", async function ButtonCloseClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.stmt($.call(C, "close", []));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TP_OutForm", "debtvalueKeyPress", async function debtvalueKeyPress(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "key": $.asRef(p1), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.not(($.in_((await L0["key"].get()), [...$.range("0","9"), ".", "\b"]))))) {
    await L0["key"].set("\u0000");
  }
  return L0.result;
}, {"params": ["Sender", "Key"], "kind": "procedure", "ptypes": ["TObject", "Char"]});
  U.method("TP_OutForm", "creditvalueKeyPress", async function creditvalueKeyPress(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "key": $.asRef(p1), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.not(($.in_((await L0["key"].get()), [...$.range("0","9"), ".", "\b"]))))) {
    await L0["key"].set("\u0000");
  }
  return L0.result;
}, {"params": ["Sender", "Key"], "kind": "procedure", "ptypes": ["TObject", "Char"]});
  U.method("TP_OutForm", "ekvKeyPress", async function ekvKeyPress(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "key": $.asRef(p1), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.not(($.in_((await L0["key"].get()), [...$.range("0","9"), ".", "\b"]))))) {
    await L0["key"].set("\u0000");
  }
  return L0.result;
}, {"params": ["Sender", "Key"], "kind": "procedure", "ptypes": ["TObject", "Char"]});
  U.method("TP_OutForm", "DBLookupComboBox4Click", async function DBLookupComboBox4Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mset((await $.v(C, "CreditAccSearchEdit")), "text", (await $.mv((await $.v(C, "Dbedit5")), "text")));
  {
    const $t26 = (await $.mv((await $.v(C, "P_DataModule")), "archost"));
    await $.stmt($.wcall([$t26], "Close", [], C));
    await $.mcall((await $.wv([$t26], "SQL", C, false)), "Clear", []);
    await $.mset((await $.wv([$t26], "SQL", C, false)), "Text", $.add($.add($.add("Select * from tenostat where acc_id in (select id from fizaccs where accno=", "'"), (await $.mv((await $.wv([$t26], "CreditAccSearchEdit", C, false)), "Text"))), "')"));
    await $.stmt($.wcall([$t26], "Open", [], C));
    await $.mset((await $.wv([$t26], "c_ostat", C, false)), "caption", (await $.mv((await $.wcall([$t26], "fieldbyname", ["ostat"], C)), "asstring")));
  }
  {
    const $t27 = (await $.mv((await $.v(C, "P_DataModule")), "archost"));
    await $.stmt($.wcall([$t27], "Close", [], C));
    await $.mcall((await $.wv([$t27], "SQL", C, false)), "Clear", []);
    await $.mset((await $.wv([$t27], "SQL", C, false)), "Text", $.add($.add($.add("Select * from tenostat where acc_id in (select id from fizaccs where accno=", "'"), (await $.mv((await $.wv([$t27], "CreditAccSearchEdit", C, false)), "Text"))), "')"));
    await $.stmt($.wcall([$t27], "Open", [], C));
    await $.mset((await $.wv([$t27], "c_pok_ostat", C, false)), "caption", (await $.mv((await $.wcall([$t27], "fieldbyname", ["pok_ostat"], C)), "asstring")));
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TP_OutForm", "DBLookupComboBox3Click", async function DBLookupComboBox3Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mset((await $.v(C, "CreditAccSearchEdit")), "text", (await $.mv((await $.v(C, "Dbedit5")), "text")));
  {
    const $t28 = (await $.mv((await $.v(C, "P_DataModule")), "archost"));
    await $.stmt($.wcall([$t28], "Close", [], C));
    await $.mcall((await $.wv([$t28], "SQL", C, false)), "Clear", []);
    await $.mset((await $.wv([$t28], "SQL", C, false)), "Text", $.add($.add($.add("Select * from tenostat where acc_id in (select id from fizaccs where accno=", "'"), (await $.mv((await $.wv([$t28], "CreditAccSearchEdit", C, false)), "Text"))), "')"));
    await $.stmt($.wcall([$t28], "Open", [], C));
    await $.mset((await $.wv([$t28], "c_ostat", C, false)), "caption", (await $.mv((await $.wcall([$t28], "fieldbyname", ["ostat"], C)), "asstring")));
  }
  {
    const $t29 = (await $.mv((await $.v(C, "P_DataModule")), "archost"));
    await $.stmt($.wcall([$t29], "Close", [], C));
    await $.mcall((await $.wv([$t29], "SQL", C, false)), "Clear", []);
    await $.mset((await $.wv([$t29], "SQL", C, false)), "Text", $.add($.add($.add("Select * from tenostat where acc_id in (select id from fizaccs where accno=", "'"), (await $.mv((await $.wv([$t29], "CreditAccSearchEdit", C, false)), "Text"))), "')"));
    await $.stmt($.wcall([$t29], "Open", [], C));
    await $.mset((await $.wv([$t29], "c_pok_ostat", C, false)), "caption", (await $.mv((await $.wcall([$t29], "fieldbyname", ["pok_ostat"], C)), "asstring")));
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TP_OutForm", "ReportIDDBEditChange", async function ReportIDDBEditChange(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mset((await $.v(C, "ReportIDLookUp")), "KeyValue", (await $.mv((L0["sender"]), "Text")));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TP_OutForm", "CountrIDDBEditChange", async function CountrIDDBEditChange(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mset((await $.v(C, "CountrIDLookUp")), "KeyValue", (await $.mv((L0["sender"]), "Text")));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TP_OutForm", "ReportIDLookUpCloseUp", async function ReportIDLookUpCloseUp(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mset((await $.v(C, "ReportIDDBEdit")), "Text", (await $.mv((L0["sender"]), "keyvalue")));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TP_OutForm", "CountrIDLookUpCloseUp", async function CountrIDLookUpCloseUp(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mset((await $.v(C, "CountrIDDBEdit")), "Text", (await $.mv((L0["sender"]), "keyvalue")));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TP_OutForm", "ConvertationSymbolLookUpCloseUp", async function ConvertationSymbolLookUpCloseUp(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  try {
    await $.mset((await $.v(C, "SearchEdit2")), "Text", (await $.mv((L0["sender"]), "keyvalue")));
  } catch ($t30) {
    $.rethrowControl($t30);
    $.handled($t30);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TP_OutForm", "CashSymbolLookUpCloseUp", async function CashSymbolLookUpCloseUp(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  try {
    await $.mset((await $.v(C, "SearchEdit3")), "Text", (await $.mv((L0["sender"]), "keyvalue")));
  } catch ($t31) {
    $.rethrowControl($t31);
    $.handled($t31);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TP_OutForm", "SearchEdit3Change", async function SearchEdit3Change(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mset((await $.v(C, "CashSymbolLookUp")), "KeyValue", (await $.mv((L0["sender"]), "Text")));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TP_OutForm", "SearchEdit2Change", async function SearchEdit2Change(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mset((await $.v(C, "ConvertationSymbolLookUp")), "KeyValue", (await $.mv((L0["sender"]), "Text")));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TP_OutForm", "SetCashSymbol", async function SetCashSymbol(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: undefined};
  {
    const $t32 = (await $.wobj(C, "P_DataModule"));
    const $t33 = (await $.wv([$t32], "CashSymbolLookUp", C, false));
    await $.stmt((await $.mcall((await $.wv([$t32, $t33], "DebitAccData", C, false)), "locate", ["acc_no", (await $.mv((await $.wv([$t32, $t33], "DebtAccSearchEdit", C, false)), "text")), []])));
    await $.stmt((await $.mcall((await $.wv([$t32, $t33], "CreditAccData", C, false)), "locate", ["acc_no", (await $.mv((await $.wv([$t32, $t33], "CreditAccSearchEdit", C, false)), "text")), []])));
    if ($.truthy((await $.and_(($.eq((await $.mv((await $.mcall((await $.wv([$t32, $t33], "DebitAccData", C, false)), "FieldByName", ["IsCacheAccount"])), "AsInteger")), 1)), async () => ($.eq((await $.mv((await $.mcall((await $.wv([$t32, $t33], "DebitAccData", C, false)), "FieldByName", ["val_acc"])), "AsInteger")), 0)))))) {
      await $.mset((await $.mv((await $.wv([$t32, $t33], "ListSource", C, false)), "DataSet")), "Filter", "Mediocrity = 0");
    } else {
      if ($.truthy((await $.and_(($.eq((await $.mv((await $.mcall((await $.wv([$t32, $t33], "CreditAccData", C, false)), "FieldByName", ["IsCacheAccount"])), "AsInteger")), 1)), async () => ($.eq((await $.mv((await $.mcall((await $.wv([$t32, $t33], "CreditAccData", C, false)), "FieldByName", ["val_acc"])), "AsInteger")), 0)))))) {
        await $.mset((await $.mv((await $.wv([$t32, $t33], "ListSource", C, false)), "DataSet")), "Filter", "Mediocrity = 1");
      } else {
        await $.mset((await $.mv((await $.wv([$t32, $t33], "ListSource", C, false)), "DataSet")), "Filter", "Mediocrity = -1");
      }
    }
    await $.mset((await $.mv((await $.wv([$t32, $t33], "ListSource", C, false)), "DataSet")), "Filtered", (await $.wv([$t32, $t33], "False", C, false)));
    await $.mset((await $.mv((await $.wv([$t32, $t33], "ListSource", C, false)), "DataSet")), "Filtered", (await $.wv([$t32, $t33], "True", C, false)));
  }
  return L0.result;
}, {"params": [], "kind": "procedure", "ptypes": []});
  U.method("TP_OutForm", "Button1Click", async function Button1Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t34 = (await $.wobj(C, "P_DataModule"));
    await $.mcall((await $.wv([$t34], "Cntries", C, false)), "refresh", []);
    await $.mcall((await $.wv([$t34], "ReportDesc", C, false)), "refresh", []);
    await $.mcall((await $.wv([$t34], "ConvertationSymbols", C, false)), "refresh", []);
    await $.mcall((await $.wv([$t34], "CashSymbols", C, false)), "refresh", []);
    await $.mcall((await $.wv([$t34], "Trdestination", C, false)), "refresh", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TP_OutForm", "SearchEdit3Enter", async function SearchEdit3Enter(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.stmt($.call(C, "SetCashSymbol", []));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  return U;
}
