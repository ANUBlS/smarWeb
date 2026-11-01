// Generated from P_Inform_Unit.pas by pas2js — do not edit by hand; regenerate instead.
/* eslint-disable */
// @ts-nocheck

export default function define($) {
  const U = $.unit("P_Inform_Unit", ["Windows", "Messages", "SysUtils", "Classes", "Graphics", "Controls", "Forms", "Dialogs", "StdCtrls", "ComCtrls", "CurrencyEdit", "SearchEdit", "Mask", "DBCtrls", "ExtCtrls", "Db", "OracleData", "P_Datamod_Unit"]);
  const C = [U];
  U.enumType("ttransactionside", 3);
  U.const("tsDebet", 0);
  U.const("tsCredit", 1);
  U.const("tsUnknown", 2);
  U.defClass("TP_Inform", "TForm", {"groupbox1": {"name": "GroupBox1", "type": "TGroupBox"}, "headercontrol1": {"name": "HeaderControl1", "type": "THeaderControl"}, "panel1": {"name": "Panel1", "type": "TPanel"}, "paneldebit": {"name": "PanelDebit", "type": "TPanel"}, "paneldebitrest": {"name": "PanelDebitRest", "type": "TPanel"}, "label1": {"name": "Label1", "type": "TLabel"}, "label2": {"name": "Label2", "type": "TLabel"}, "d_ostat": {"name": "d_ostat", "type": "TLabel"}, "d_pok_ostat": {"name": "d_pok_ostat", "type": "TLabel"}, "panel4": {"name": "Panel4", "type": "TPanel"}, "dblookupcombobox2": {"name": "DBLookupComboBox2", "type": "TDBLookupComboBox"}, "dbedit2": {"name": "DBEdit2", "type": "TDBEdit"}, "panel5": {"name": "Panel5", "type": "TPanel"}, "debtaccsearchedit": {"name": "DebtAccSearchEdit", "type": "TSearchEdit"}, "dblookupcombobox1": {"name": "DBLookupComboBox1", "type": "TDBLookupComboBox"}, "dbedit1": {"name": "DBEdit1", "type": "TDBEdit"}, "acc_id": {"name": "acc_id", "type": "TEdit"}, "panel6": {"name": "Panel6", "type": "TPanel"}, "editvalute": {"name": "editvalute", "type": "TComboBox"}, "val_code": {"name": "val_code", "type": "TEdit"}, "editrate": {"name": "editrate", "type": "TEdit"}, "valname": {"name": "valname", "type": "TEdit"}, "panel2": {"name": "Panel2", "type": "TPanel"}, "panel7": {"name": "Panel7", "type": "TPanel"}, "panel8": {"name": "Panel8", "type": "TPanel"}, "label3": {"name": "Label3", "type": "TLabel"}, "label4": {"name": "Label4", "type": "TLabel"}, "c_ostat": {"name": "c_ostat", "type": "TLabel"}, "c_pok_ostat": {"name": "c_pok_ostat", "type": "TLabel"}, "panel9": {"name": "Panel9", "type": "TPanel"}, "dblookupcombobox3": {"name": "DBLookupComboBox3", "type": "TDBLookupComboBox"}, "dbedit3": {"name": "DBEdit3", "type": "TDBEdit"}, "panel10": {"name": "Panel10", "type": "TPanel"}, "creditaccsearchedit": {"name": "CreditAccSearchEdit", "type": "TSearchEdit"}, "dblookupcombobox4": {"name": "DBLookupComboBox4", "type": "TDBLookupComboBox"}, "dbedit5": {"name": "DBEdit5", "type": "TDBEdit"}, "acc_id_": {"name": "acc_id_", "type": "TEdit"}, "panel11": {"name": "Panel11", "type": "TPanel"}, "editrate_": {"name": "editrate_", "type": "TEdit"}, "editvalute_": {"name": "editvalute_", "type": "TComboBox"}, "cur_val_code": {"name": "cur_val_code", "type": "TEdit"}, "valname_": {"name": "valname_", "type": "TEdit"}, "groupbox2": {"name": "GroupBox2", "type": "TGroupBox"}, "panel3": {"name": "Panel3", "type": "TPanel"}, "panel12": {"name": "Panel12", "type": "TPanel"}, "panel13": {"name": "Panel13", "type": "TPanel"}, "groupbox3": {"name": "GroupBox3", "type": "TGroupBox"}, "panel14": {"name": "Panel14", "type": "TPanel"}, "convertationsymbollookup": {"name": "ConvertationSymbolLookUp", "type": "TDBLookupComboBox"}, "searchedit2": {"name": "SearchEdit2", "type": "TSearchEdit"}, "panel15": {"name": "Panel15", "type": "TPanel"}, "cashsymbollookup": {"name": "CashSymbolLookUp", "type": "TDBLookupComboBox"}, "searchedit3": {"name": "SearchEdit3", "type": "TSearchEdit"}, "panel16": {"name": "Panel16", "type": "TPanel"}, "dblookupcombobox5": {"name": "DBLookupComboBox5", "type": "TDBLookupComboBox"}, "dbedit6": {"name": "DBEdit6", "type": "TDBEdit"}, "searchedit1": {"name": "SearchEdit1", "type": "TSearchEdit"}, "groupbox4": {"name": "GroupBox4", "type": "TGroupBox"}, "label5": {"name": "Label5", "type": "TLabel"}, "label6": {"name": "Label6", "type": "TLabel"}, "label7": {"name": "Label7", "type": "TLabel"}, "transdate": {"name": "TransDate", "type": "TDateTimePicker"}, "dbeditoperationno": {"name": "DBEditOperationNo", "type": "TDBEdit"}, "dbedit4": {"name": "DBEdit4", "type": "TDBEdit"}, "dblookupcombobox6": {"name": "DBLookupComboBox6", "type": "TDBLookupComboBox"}, "searchedit4": {"name": "SearchEdit4", "type": "TSearchEdit"}, "dbedit9": {"name": "DBEdit9", "type": "TDBEdit"}, "panel17": {"name": "Panel17", "type": "TPanel"}, "buttonapply": {"name": "ButtonApply", "type": "TButton"}, "buttoncancel": {"name": "ButtonCancel", "type": "TButton"}, "buttonclose": {"name": "ButtonClose", "type": "TButton"}, "commission_id": {"name": "commission_id", "type": "TEdit"}, "debtvalue": {"name": "DebtValue", "type": "TCurrencyEdit"}, "ekv": {"name": "Ekv", "type": "TCurrencyEdit"}, "panel18": {"name": "Panel18", "type": "TPanel"}, "reportiddbedit": {"name": "ReportIDDBEdit", "type": "TEdit"}, "reportidlookup": {"name": "ReportIDLookUp", "type": "TDBLookupComboBox"}, "panel19": {"name": "Panel19", "type": "TPanel"}, "countriddbedit": {"name": "CountrIDDBEdit", "type": "TEdit"}, "countridlookup": {"name": "CountrIDLookUp", "type": "TDBLookupComboBox"}, "button1": {"name": "Button1", "type": "TButton"}, "debitaccdata": {"name": "DebitAccData", "type": "TOracleDataSet"}, "creditaccdata": {"name": "CreditAccData", "type": "TOracleDataSet"}, "creditaccs": {"name": "CreditAccs", "type": "TDataSource"}, "debitaccs": {"name": "DebitAccs", "type": "TDataSource"}, "button2": {"name": "Button2", "type": "TButton"}, "creditvalue": {"name": "CreditValue", "type": "TCurrencyEdit"}}, {});
  U.init(async () => {
    U.var_("TransactionSide", null, "TTransactionSide");
    U.var_("P_Inform", null, "TP_Inform");
  });
  U.method("TP_InForm", "SetCashSymbol", async function SetCashSymbol(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: undefined};
  {
    const $t1 = (await $.wobj(C, "P_DataModule"));
    const $t2 = (await $.wv([$t1], "CashSymbolLookUp", C, false));
    await $.stmt((await $.mcall((await $.wv([$t1, $t2], "DebitAccData", C, false)), "locate", ["acc_no", (await $.mv((await $.wv([$t1, $t2], "DebtAccSearchEdit", C, false)), "text")), []])));
    await $.stmt((await $.mcall((await $.wv([$t1, $t2], "CreditAccData", C, false)), "locate", ["acc_no", (await $.mv((await $.wv([$t1, $t2], "CreditAccSearchEdit", C, false)), "text")), []])));
    if ($.truthy((await $.and_(($.eq((await $.mv((await $.mcall((await $.wv([$t1, $t2], "DebitAccData", C, false)), "FieldByName", ["IsCacheAccount"])), "AsInteger")), 1)), async () => ($.eq((await $.mv((await $.mcall((await $.wv([$t1, $t2], "DebitAccData", C, false)), "FieldByName", ["val_acc"])), "AsInteger")), 0)))))) {
      await $.mset((await $.mv((await $.wv([$t1, $t2], "ListSource", C, false)), "DataSet")), "Filter", "Mediocrity = 0");
    } else {
      if ($.truthy((await $.and_(($.eq((await $.mv((await $.mcall((await $.wv([$t1, $t2], "CreditAccData", C, false)), "FieldByName", ["IsCacheAccount"])), "AsInteger")), 1)), async () => ($.eq((await $.mv((await $.mcall((await $.wv([$t1, $t2], "CreditAccData", C, false)), "FieldByName", ["val_acc"])), "AsInteger")), 0)))))) {
        await $.mset((await $.mv((await $.wv([$t1, $t2], "ListSource", C, false)), "DataSet")), "Filter", "Mediocrity = 1");
      } else {
        await $.mset((await $.mv((await $.wv([$t1, $t2], "ListSource", C, false)), "DataSet")), "Filter", "Mediocrity = -1");
      }
    }
    await $.mset((await $.mv((await $.wv([$t1, $t2], "ListSource", C, false)), "DataSet")), "Filtered", (await $.wv([$t1, $t2], "False", C, false)));
    await $.mset((await $.mv((await $.wv([$t1, $t2], "ListSource", C, false)), "DataSet")), "Filtered", (await $.wv([$t1, $t2], "True", C, false)));
  }
  return L0.result;
}, {"params": [], "kind": "procedure", "ptypes": []});
  U.method("TP_Inform", "val_codeChange", async function val_codeChange(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t3 = (await $.mv((await $.v(C, "P_DataModule")), "temprate"));
    await $.stmt($.wcall([$t3], "Close", [], C));
    await $.mcall((await $.wv([$t3], "SQL", C, false)), "Clear", []);
    await $.mset((await $.wv([$t3], "SQL", C, false)), "Text", $.add($.add($.add("Select c.rowid ,c.* from temprate c where val_kod= ", "'"), (await $.mv((await $.wv([$t3], "val_code", C, false)), "Text"))), "'"));
    await $.stmt($.wcall([$t3], "Open", [], C));
    await $.mset((await $.wv([$t3], "editrate", C, false)), "Text", (await $.mv((await $.wcall([$t3], "FieldByName", ["ostat"], C)), "AsString")));
  }
  {
    const $t4 = (await $.mv((await $.v(C, "P_DataModule")), "avalute"));
    await $.stmt($.wcall([$t4], "Close", [], C));
    await $.mcall((await $.wv([$t4], "SQL", C, false)), "Clear", []);
    await $.mset((await $.wv([$t4], "SQL", C, false)), "Text", $.add($.add($.add("Select c.rowid ,c.* from avalute_t c where valute= ", "'"), (await $.mv((await $.wv([$t4], "val_code", C, false)), "Text"))), "'"));
    await $.stmt($.wcall([$t4], "Open", [], C));
    await $.mset((await $.wv([$t4], "editvalute", C, false)), "Text", (await $.mv((await $.wcall([$t4], "FieldByName", ["valu_name"], C)), "AsString")));
  }
  {
    const $t5 = (await $.mv((await $.v(C, "P_DataModule")), "avalute"));
    await $.stmt($.wcall([$t5], "Close", [], C));
    await $.mcall((await $.wv([$t5], "SQL", C, false)), "Clear", []);
    await $.mset((await $.wv([$t5], "SQL", C, false)), "Text", $.add($.add($.add("Select c.rowid ,c.* from avalute_t c where valute= ", "'"), (await $.mv((await $.wv([$t5], "val_code", C, false)), "Text"))), "'"));
    await $.stmt($.wcall([$t5], "Open", [], C));
    await $.mset((await $.wv([$t5], "valname", C, false)), "Text", (await $.mv((await $.wcall([$t5], "FieldByName", ["val_name"], C)), "AsString")));
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TP_Inform", "editvaluteChange", async function editvaluteChange(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t6 = (await $.mv((await $.v(C, "P_DataModule")), "avalute"));
    await $.stmt($.wcall([$t6], "Close", [], C));
    await $.mcall((await $.wv([$t6], "SQL", C, false)), "Clear", []);
    await $.mset((await $.wv([$t6], "SQL", C, false)), "Text", $.add($.add($.add("Select c.rowid ,c.* from avalute c where valu_name= ", "'"), (await $.mv((await $.wv([$t6], "editvalute", C, false)), "Text"))), "'"));
    await $.stmt($.wcall([$t6], "Open", [], C));
    await $.mset((await $.wv([$t6], "val_code", C, false)), "Text", (await $.mv((await $.wcall([$t6], "FieldByName", ["valute"], C)), "AsString")));
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TP_Inform", "DebtAccSearchEditChange", async function DebtAccSearchEditChange(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mset((await $.v(C, "d_ostat")), "visible", true);
  await $.mset((await $.v(C, "d_pok_ostat")), "visible", true);
  {
    const $t7 = (await $.mv((await $.v(C, "P_DataModule")), "archost"));
    await $.stmt($.wcall([$t7], "Close", [], C));
    await $.mcall((await $.wv([$t7], "SQL", C, false)), "Clear", []);
    await $.mset((await $.wv([$t7], "SQL", C, false)), "Text", $.add($.add($.add("Select * from tenostat where acc_id in (select id from fizaccs where accno=", "'"), (await $.mv((await $.wv([$t7], "DebtAccSearchEdit", C, false)), "Text"))), "')"));
    await $.stmt($.wcall([$t7], "Open", [], C));
    await $.mset((await $.wv([$t7], "d_ostat", C, false)), "caption", (await $.mv((await $.wcall([$t7], "fieldbyname", ["ostat"], C)), "asstring")));
  }
  {
    const $t8 = (await $.mv((await $.v(C, "P_DataModule")), "archost"));
    await $.stmt($.wcall([$t8], "Close", [], C));
    await $.mcall((await $.wv([$t8], "SQL", C, false)), "Clear", []);
    await $.mset((await $.wv([$t8], "SQL", C, false)), "Text", $.add($.add($.add("Select * from tenostat where acc_id in (select id from fizaccs where accno=", "'"), (await $.mv((await $.wv([$t8], "DebtAccSearchEdit", C, false)), "Text"))), "')"));
    await $.stmt($.wcall([$t8], "Open", [], C));
    await $.mset((await $.wv([$t8], "d_pok_ostat", C, false)), "caption", (await $.mv((await $.wcall([$t8], "fieldbyname", ["pok_ostat"], C)), "asstring")));
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TP_Inform", "acc_idChange", async function acc_idChange(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t9 = (await $.mv((await $.v(C, "P_DataModule")), "ACC"));
    await $.stmt($.wcall([$t9], "Close", [], C));
    await $.mcall((await $.wv([$t9], "SQL", C, false)), "Clear", []);
    await $.mset((await $.wv([$t9], "SQL", C, false)), "Text", $.add($.add($.add("Select c.rowid ,c.* from account c where id= ", "'"), (await $.mv((await $.wv([$t9], "acc_id", C, false)), "Text"))), "'"));
    await $.stmt($.wcall([$t9], "Open", [], C));
    await $.mset((await $.wv([$t9], "DebtAccSearchEdit", C, false)), "Text", (await $.mv((await $.wcall([$t9], "FieldByName", ["acc_no"], C)), "AsString")));
    await $.mset((await $.wv([$t9], "dbedit1", C, false)), "text", (await $.mv((await $.wv([$t9], "DebtAccSearchEdit", C, false)), "Text")));
  }
  {
    const $t10 = (await $.mv((await $.v(C, "P_DataModule")), "ACC"));
    await $.stmt($.wcall([$t10], "Close", [], C));
    await $.mcall((await $.wv([$t10], "SQL", C, false)), "Clear", []);
    await $.mset((await $.wv([$t10], "SQL", C, false)), "Text", $.add($.add($.add("Select c.rowid ,c.* from account c where id= ", "'"), (await $.mv((await $.wv([$t10], "acc_id", C, false)), "Text"))), "'"));
    await $.stmt($.wcall([$t10], "Open", [], C));
    await $.mset((await $.wv([$t10], "val_code", C, false)), "Text", (await $.mv((await $.wcall([$t10], "FieldByName", ["val_acc"], C)), "AsString")));
  }
  {
    const $t11 = (await $.mv((await $.v(C, "P_DataModule")), "ACC"));
    await $.stmt($.wcall([$t11], "Close", [], C));
    await $.mcall((await $.wv([$t11], "SQL", C, false)), "Clear", []);
    await $.mset((await $.wv([$t11], "SQL", C, false)), "Text", $.add($.add($.add("Select c.rowid ,c.* from account c where id= ", "'"), (await $.mv((await $.wv([$t11], "acc_id", C, false)), "Text"))), "'"));
    await $.stmt($.wcall([$t11], "Open", [], C));
    await $.mset((await $.wv([$t11], "dbedit2", C, false)), "Text", (await $.mv((await $.wcall([$t11], "FieldByName", ["name"], C)), "AsString")));
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TP_Inform", "DBEdit1Change", async function DBEdit1Change(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t12 = (await $.mv((await $.v(C, "P_DataModule")), "archost"));
    await $.stmt($.wcall([$t12], "Close", [], C));
    await $.mcall((await $.wv([$t12], "SQL", C, false)), "Clear", []);
    await $.mset((await $.wv([$t12], "SQL", C, false)), "Text", $.add($.add($.add("Select * from tenostat where acc_id in (select id from fizaccs where accno=", "'"), (await $.mv((await $.wv([$t12], "DebtAccSearchEdit", C, false)), "Text"))), "')"));
    await $.stmt($.wcall([$t12], "Open", [], C));
    await $.mset((await $.wv([$t12], "d_ostat", C, false)), "caption", (await $.mv((await $.wcall([$t12], "fieldbyname", ["ostat"], C)), "asstring")));
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TP_Inform", "DBLookupComboBox1Click", async function DBLookupComboBox1Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mset((await $.v(C, "DebtAccSearchEdit")), "text", (await $.mv((await $.v(C, "Dbedit1")), "text")));
  await $.mset((await $.v(C, "d_ostat")), "visible", true);
  await $.mset((await $.v(C, "d_pok_ostat")), "visible", true);
  {
    const $t13 = (await $.mv((await $.v(C, "P_DataModule")), "archost"));
    await $.stmt($.wcall([$t13], "Close", [], C));
    await $.mcall((await $.wv([$t13], "SQL", C, false)), "Clear", []);
    await $.mset((await $.wv([$t13], "SQL", C, false)), "Text", $.add($.add($.add("Select * from tenostat where acc_id in (select id from fizaccs where accno=", "'"), (await $.mv((await $.wv([$t13], "DebtAccSearchEdit", C, false)), "Text"))), "')"));
    await $.stmt($.wcall([$t13], "Open", [], C));
    await $.mset((await $.wv([$t13], "d_ostat", C, false)), "caption", (await $.mv((await $.wcall([$t13], "fieldbyname", ["ostat"], C)), "asstring")));
  }
  {
    const $t14 = (await $.mv((await $.v(C, "P_DataModule")), "archost"));
    await $.stmt($.wcall([$t14], "Close", [], C));
    await $.mcall((await $.wv([$t14], "SQL", C, false)), "Clear", []);
    await $.mset((await $.wv([$t14], "SQL", C, false)), "Text", $.add($.add($.add("Select * from tenostat where acc_id in (select id from fizaccs where accno=", "'"), (await $.mv((await $.wv([$t14], "DebtAccSearchEdit", C, false)), "Text"))), "')"));
    await $.stmt($.wcall([$t14], "Open", [], C));
    await $.mset((await $.wv([$t14], "d_pok_ostat", C, false)), "caption", (await $.mv((await $.wcall([$t14], "fieldbyname", ["pok_ostat"], C)), "asstring")));
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TP_Inform", "addvalute", async function addvalute(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: undefined, "xxx": 0};
  {
    const $t15 = (await $.mv((await $.v(C, "P_DataModule")), "avalute"));
    await $.stmt($.wcall([$t15], "Close", [], C));
    await $.mcall((await $.wv([$t15], "SQL", C, false)), "Clear", []);
    await $.stmt((await $.mcall((await $.wv([$t15], "SQL", C, false)), "Add", ["select valu_name from avalute"])));
    await $.stmt($.wcall([$t15], "Open", [], C));
  }
  await $.mcall((await $.v(C, "editvalute")), "Clear", []);
  { const $t16 = (await $.mv((await $.mv((await $.v(C, "P_DataModule")), "avalute")), "RecordCount"));
    L0["xxx"] = 1;
    let $t17 = true;
    for (;;) {
      if (!$t17) { L0["xxx"] = $.succ(L0["xxx"], 1); }
      $t17 = false;
      if (!($.ord(L0["xxx"]) <= $.ord($t16))) break;
      {
        const $t18 = (await $.wobj(C, "editvalute"));
        await $.stmt((await $.mcall((await $.wv([$t18], "Items", C, false)), "Add", [(await $.mv((await $.mcall((await $.mv((await $.wv([$t18], "P_DataModule", C, false)), "avalute")), "FieldByName", ["valu_name"])), "AsString"))])));
      }
      await $.mcall((await $.mv((await $.v(C, "P_DataModule")), "avalute")), "Next", []);
      await $.tick();
    }
  }
  return L0.result;
}, {"params": [], "kind": "procedure", "ptypes": []});
  U.method("TP_Inform", "addvalute_", async function addvalute_(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: undefined, "xxx": 0};
  {
    const $t19 = (await $.mv((await $.v(C, "P_DataModule")), "avalute"));
    await $.stmt($.wcall([$t19], "Close", [], C));
    await $.mcall((await $.wv([$t19], "SQL", C, false)), "Clear", []);
    await $.stmt((await $.mcall((await $.wv([$t19], "SQL", C, false)), "Add", ["select valu_name from avalute"])));
    await $.stmt($.wcall([$t19], "Open", [], C));
  }
  await $.mcall((await $.v(C, "editvalute_")), "Clear", []);
  { const $t20 = (await $.mv((await $.mv((await $.v(C, "P_DataModule")), "avalute")), "RecordCount"));
    L0["xxx"] = 1;
    let $t21 = true;
    for (;;) {
      if (!$t21) { L0["xxx"] = $.succ(L0["xxx"], 1); }
      $t21 = false;
      if (!($.ord(L0["xxx"]) <= $.ord($t20))) break;
      {
        const $t22 = (await $.wobj(C, "editvalute_"));
        await $.stmt((await $.mcall((await $.wv([$t22], "Items", C, false)), "Add", [(await $.mv((await $.mcall((await $.mv((await $.wv([$t22], "P_DataModule", C, false)), "avalute")), "FieldByName", ["valu_name"])), "AsString"))])));
      }
      await $.mcall((await $.mv((await $.v(C, "P_DataModule")), "avalute")), "Next", []);
      await $.tick();
    }
  }
  return L0.result;
}, {"params": [], "kind": "procedure", "ptypes": []});
  U.method("TP_Inform", "DBLookupComboBox2Click", async function DBLookupComboBox2Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mset((await $.v(C, "DebtAccSearchEdit")), "text", (await $.mv((await $.v(C, "Dbedit1")), "text")));
  await $.mset((await $.v(C, "d_ostat")), "visible", true);
  await $.mset((await $.v(C, "d_pok_ostat")), "visible", true);
  {
    const $t23 = (await $.mv((await $.v(C, "P_DataModule")), "archost"));
    await $.stmt($.wcall([$t23], "Close", [], C));
    await $.mcall((await $.wv([$t23], "SQL", C, false)), "Clear", []);
    await $.mset((await $.wv([$t23], "SQL", C, false)), "Text", $.add($.add($.add("Select * from tenostat where acc_id in (select id from fizaccs where accno=", "'"), (await $.mv((await $.wv([$t23], "DebtAccSearchEdit", C, false)), "Text"))), "')"));
    await $.stmt($.wcall([$t23], "Open", [], C));
    await $.mset((await $.wv([$t23], "d_ostat", C, false)), "caption", (await $.mv((await $.wcall([$t23], "fieldbyname", ["ostat"], C)), "asstring")));
  }
  {
    const $t24 = (await $.mv((await $.v(C, "P_DataModule")), "archost"));
    await $.stmt($.wcall([$t24], "Close", [], C));
    await $.mcall((await $.wv([$t24], "SQL", C, false)), "Clear", []);
    await $.mset((await $.wv([$t24], "SQL", C, false)), "Text", $.add($.add($.add("Select * from tenostat where acc_id in (select id from fizaccs where accno=", "'"), (await $.mv((await $.wv([$t24], "DebtAccSearchEdit", C, false)), "Text"))), "')"));
    await $.stmt($.wcall([$t24], "Open", [], C));
    await $.mset((await $.wv([$t24], "d_pok_ostat", C, false)), "caption", (await $.mv((await $.wcall([$t24], "fieldbyname", ["pok_ostat"], C)), "asstring")));
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TP_Inform", "cur_val_codeChange", async function cur_val_codeChange(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t25 = (await $.mv((await $.v(C, "P_DataModule")), "temprate"));
    await $.stmt($.wcall([$t25], "Close", [], C));
    await $.mcall((await $.wv([$t25], "SQL", C, false)), "Clear", []);
    await $.mset((await $.wv([$t25], "SQL", C, false)), "Text", $.add($.add($.add("Select c.rowid ,c.* from temprate c where val_kod= ", "'"), (await $.mv((await $.wv([$t25], "cur_val_code", C, false)), "Text"))), "'"));
    await $.stmt($.wcall([$t25], "Open", [], C));
    await $.mset((await $.wv([$t25], "editrate_", C, false)), "Text", (await $.mv((await $.wcall([$t25], "FieldByName", ["ostat"], C)), "AsString")));
  }
  {
    const $t26 = (await $.mv((await $.v(C, "P_DataModule")), "avalute"));
    await $.stmt($.wcall([$t26], "Close", [], C));
    await $.mcall((await $.wv([$t26], "SQL", C, false)), "Clear", []);
    await $.mset((await $.wv([$t26], "SQL", C, false)), "Text", $.add($.add($.add("Select c.rowid ,c.* from avalute c where valute= ", "'"), (await $.mv((await $.wv([$t26], "cur_val_code", C, false)), "Text"))), "'"));
    await $.stmt($.wcall([$t26], "Open", [], C));
    await $.mset((await $.wv([$t26], "editvalute_", C, false)), "Text", (await $.mv((await $.wcall([$t26], "FieldByName", ["valu_name"], C)), "AsString")));
  }
  {
    const $t27 = (await $.mv((await $.v(C, "P_DataModule")), "avalute"));
    await $.stmt($.wcall([$t27], "Close", [], C));
    await $.mcall((await $.wv([$t27], "SQL", C, false)), "Clear", []);
    await $.mset((await $.wv([$t27], "SQL", C, false)), "Text", $.add($.add($.add("Select c.rowid ,c.* from avalute c where valute= ", "'"), (await $.mv((await $.wv([$t27], "cur_val_code", C, false)), "Text"))), "'"));
    await $.stmt($.wcall([$t27], "Open", [], C));
    await $.mset((await $.wv([$t27], "valname_", C, false)), "Text", (await $.mv((await $.wcall([$t27], "FieldByName", ["val_name"], C)), "AsString")));
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TP_Inform", "editvalute_Change", async function editvalute_Change(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t28 = (await $.mv((await $.v(C, "P_DataModule")), "avalute"));
    await $.stmt($.wcall([$t28], "Close", [], C));
    await $.mcall((await $.wv([$t28], "SQL", C, false)), "Clear", []);
    await $.mset((await $.wv([$t28], "SQL", C, false)), "Text", $.add($.add($.add("Select c.rowid ,c.* from avalute c where valu_name= ", "'"), (await $.mv((await $.wv([$t28], "editvalute_", C, false)), "Text"))), "'"));
    await $.stmt($.wcall([$t28], "Open", [], C));
    await $.mset((await $.wv([$t28], "cur_val_code", C, false)), "Text", (await $.mv((await $.wcall([$t28], "FieldByName", ["valute"], C)), "AsString")));
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TP_Inform", "CreditAccSearchEditChange", async function CreditAccSearchEditChange(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t29 = (await $.mv((await $.v(C, "P_DataModule")), "archost"));
    await $.stmt($.wcall([$t29], "Close", [], C));
    await $.mcall((await $.wv([$t29], "SQL", C, false)), "Clear", []);
    await $.mset((await $.wv([$t29], "SQL", C, false)), "Text", $.add($.add($.add("Select * from tenostat where acc_id in (select id from fizaccs where accno=", "'"), (await $.mv((await $.wv([$t29], "creditAccSearchEdit", C, false)), "Text"))), "')"));
    await $.stmt($.wcall([$t29], "Open", [], C));
    await $.mset((await $.wv([$t29], "c_ostat", C, false)), "caption", (await $.mv((await $.wcall([$t29], "fieldbyname", ["ostat"], C)), "asstring")));
  }
  {
    const $t30 = (await $.mv((await $.v(C, "P_DataModule")), "archost"));
    await $.stmt($.wcall([$t30], "Close", [], C));
    await $.mcall((await $.wv([$t30], "SQL", C, false)), "Clear", []);
    await $.mset((await $.wv([$t30], "SQL", C, false)), "Text", $.add($.add($.add("Select * from tenostat where acc_id in (select id from fizaccs where accno=", "'"), (await $.mv((await $.wv([$t30], "creditAccSearchEdit", C, false)), "Text"))), "')"));
    await $.stmt($.wcall([$t30], "Open", [], C));
    await $.mset((await $.wv([$t30], "c_pok_ostat", C, false)), "caption", (await $.mv((await $.wcall([$t30], "fieldbyname", ["pok_ostat"], C)), "asstring")));
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TP_Inform", "DBLookupComboBox4Click", async function DBLookupComboBox4Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mset((await $.v(C, "CreditAccSearchEdit")), "text", (await $.mv((await $.v(C, "Dbedit5")), "text")));
  {
    const $t31 = (await $.mv((await $.v(C, "P_DataModule")), "archost"));
    await $.stmt($.wcall([$t31], "Close", [], C));
    await $.mcall((await $.wv([$t31], "SQL", C, false)), "Clear", []);
    await $.mset((await $.wv([$t31], "SQL", C, false)), "Text", $.add($.add($.add("Select * from tenostat where acc_id in (select id from fizaccs where accno=", "'"), (await $.mv((await $.wv([$t31], "creditAccSearchEdit", C, false)), "Text"))), "')"));
    await $.stmt($.wcall([$t31], "Open", [], C));
    await $.mset((await $.wv([$t31], "c_ostat", C, false)), "caption", (await $.mv((await $.wcall([$t31], "fieldbyname", ["ostat"], C)), "asstring")));
  }
  {
    const $t32 = (await $.mv((await $.v(C, "P_DataModule")), "archost"));
    await $.stmt($.wcall([$t32], "Close", [], C));
    await $.mcall((await $.wv([$t32], "SQL", C, false)), "Clear", []);
    await $.mset((await $.wv([$t32], "SQL", C, false)), "Text", $.add($.add($.add("Select * from tenostat where acc_id in (select id from fizaccs where accno=", "'"), (await $.mv((await $.wv([$t32], "creditAccSearchEdit", C, false)), "Text"))), "')"));
    await $.stmt($.wcall([$t32], "Open", [], C));
    await $.mset((await $.wv([$t32], "c_pok_ostat", C, false)), "caption", (await $.mv((await $.wcall([$t32], "fieldbyname", ["pok_ostat"], C)), "asstring")));
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TP_Inform", "DBLookupComboBox3Click", async function DBLookupComboBox3Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mset((await $.v(C, "CreditAccSearchEdit")), "text", (await $.mv((await $.v(C, "Dbedit5")), "text")));
  {
    const $t33 = (await $.mv((await $.v(C, "P_DataModule")), "archost"));
    await $.stmt($.wcall([$t33], "Close", [], C));
    await $.mcall((await $.wv([$t33], "SQL", C, false)), "Clear", []);
    await $.mset((await $.wv([$t33], "SQL", C, false)), "Text", $.add($.add($.add("Select * from tenostat where acc_id in (select id from fizaccs where accno=", "'"), (await $.mv((await $.wv([$t33], "creditAccSearchEdit", C, false)), "Text"))), "')"));
    await $.stmt($.wcall([$t33], "Open", [], C));
    await $.mset((await $.wv([$t33], "c_ostat", C, false)), "caption", (await $.mv((await $.wcall([$t33], "fieldbyname", ["ostat"], C)), "asstring")));
  }
  {
    const $t34 = (await $.mv((await $.v(C, "P_DataModule")), "archost"));
    await $.stmt($.wcall([$t34], "Close", [], C));
    await $.mcall((await $.wv([$t34], "SQL", C, false)), "Clear", []);
    await $.mset((await $.wv([$t34], "SQL", C, false)), "Text", $.add($.add($.add("Select * from tenostat where acc_id in (select id from fizaccs where accno=", "'"), (await $.mv((await $.wv([$t34], "creditAccSearchEdit", C, false)), "Text"))), "')"));
    await $.stmt($.wcall([$t34], "Open", [], C));
    await $.mset((await $.wv([$t34], "c_pok_ostat", C, false)), "caption", (await $.mv((await $.wcall([$t34], "fieldbyname", ["pok_ostat"], C)), "asstring")));
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
  U.method("TP_InForm", "SetAmmounts", async function SetAmmounts(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"transactionside": $.copyArg(p0), result: undefined, "debetrate": 0, "creditrate": 0, "debitammount": 0, "creditammount": 0, "lammount": 0};
  await $.fixArgs(L0, ["transactionside"]);
  L0["debetrate"] = (await $.call(C, "strtofloat", [(await $.mv((await $.v(C, "editrate")), "text"))]));
  L0["creditrate"] = (await $.call(C, "strtofloat", [(await $.mv((await $.v(C, "editrate_")), "text"))]));
  { const $t35 = L0["transactionside"];
    if ($.eq($t35, (await $.v(C, "tsDebet")))) {
      L0["lammount"] = (await $.call(C, "RoundNew", [$.mul((await $.mv((await $.v(C, "debtvalue")), "Value")), L0["debetrate"]), 1000000]));
      if ($.truthy($.eq((await $.mv((await $.v(C, "val_code")), "Text")), (await $.mv((await $.v(C, "cur_val_code")), "Text"))))) {
        L0["creditammount"] = (await $.mv((await $.v(C, "DebtValue")), "Value"));
      } else {
        L0["creditammount"] = (await $.call(C, "RoundNew", [$.fdiv(L0["lammount"], L0["creditrate"]), 1000000]));
      }
      await $.mset((await $.v(C, "ekv")), "Value", (await $.call(C, "RoundNew", [L0["lammount"], 100])));
      await $.mset((await $.v(C, "creditvalue")), "Value", (await $.call(C, "RoundNew", [L0["creditammount"], 100])));
    }
    else if ($.eq($t35, (await $.v(C, "tsCredit")))) {
      L0["lammount"] = (await $.call(C, "RoundNew", [$.mul((await $.mv((await $.v(C, "creditvalue")), "Value")), L0["creditrate"]), 1000000]));
      if ($.truthy($.eq((await $.mv((await $.v(C, "val_code")), "Text")), (await $.mv((await $.v(C, "cur_val_code")), "Text"))))) {
        L0["debitammount"] = (await $.mv((await $.v(C, "CreditValue")), "Value"));
      } else {
        L0["debitammount"] = (await $.call(C, "RoundNew", [$.fdiv(L0["lammount"], L0["debetrate"]), 1000000]));
      }
      await $.mset((await $.v(C, "ekv")), "Value", (await $.call(C, "RoundNew", [L0["lammount"], 100])));
      await $.mset((await $.v(C, "debtvalue")), "Value", (await $.call(C, "RoundNew", [L0["debitammount"], 100])));
    }
    else if ($.eq($t35, (await $.v(C, "tsUnknown")))) {
      {
        const $t36 = Self;
        if ($.truthy($.eq((await $.mv((await $.wv([$t36], "val_code", C, false)), "text")), "0"))) {
          await $.mset((await $.wv([$t36], "debtvalue", C, false)), "Value", (await $.mv((await $.wv([$t36], "ekv", C, false)), "Value")));
        }
        if ($.truthy($.eq((await $.mv((await $.wv([$t36], "cur_val_code", C, false)), "text")), "0"))) {
          await $.mset((await $.wv([$t36], "creditvalue", C, false)), "Value", (await $.mv((await $.wv([$t36], "ekv", C, false)), "Value")));
        }
      }
    }
  }
  return L0.result;
}, {"params": ["TransactionSide"], "kind": "procedure", "ptypes": ["TTransactionSide"]});
  U.func("CutEditText", async function CutEditText(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "x": 0, "sel": 0};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t37 = (await $.call(C, "TCurrencyEdit", [L0["sender"]]));
    if ($.truthy($.eq((await $.wv([$t37], "DecimalSeparator", C, false)), (await $.wv([$t37], "ThousandSeparator", C, false))))) {
      return L0.result;
    }
    if ($.truthy($.eq((await $.wcall([$t37], "Pos", [(await $.wv([$t37], "DecimalSeparator", C, false)), (await $.wv([$t37], "Text", C, false))], C)), 0))) {
      return L0.result;
    }
    await $.wset([$t37], "Sel", (await $.wv([$t37], "SelStart", C, false)), { get: async () => L0["sel"], set: async (v) => { L0["sel"] = v; }, local: true });
    await $.wset([$t37], "X", $.sub($.sub((await $.wcall([$t37], "Length", [(await $.wv([$t37], "Text", C, false))], C)), (await $.wcall([$t37], "Pos", [(await $.wv([$t37], "DecimalSeparator", C, false)), (await $.wv([$t37], "Text", C, false))], C))), (await $.wv([$t37], "CurrencyDecimals", C, false))), { get: async () => L0["x"], set: async (v) => { L0["x"] = v; }, local: true });
    if ($.truthy(($.gt((await $.wv([$t37], "X", { get: async () => L0["x"], set: async (v) => { L0["x"] = v; }, local: true }, false)), 0)))) {
      await $.wset([$t37], "Text", (await $.wcall([$t37], "Copy", [(await $.wv([$t37], "Text", C, false)), 0, ($.sub((await $.wcall([$t37], "Length", [(await $.wv([$t37], "Text", C, false))], C)), (await $.wv([$t37], "X", { get: async () => L0["x"], set: async (v) => { L0["x"] = v; }, local: true }, false))))], C)), C);
      await $.wset([$t37], "SelStart", (await $.wv([$t37], "Sel", { get: async () => L0["sel"], set: async (v) => { L0["sel"] = v; }, local: true }, false)), C);
    }
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TP_Inform", "DebtValueChange", async function DebtValueChange(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.stmt((await $.call(C, "CutEditText", [L0["sender"]])));
  if ($.truthy($.eq((await $.mv((await $.call(C, "TCurrencyEdit", [L0["sender"]])), "Text")), (await $.v(C, "EmptyStr"))))) {
    await $.mset((await $.call(C, "TCurrencyEdit", [L0["sender"]])), "Value", 0);
  }
  { const $t38 = (await $.mv((await $.call(C, "TCurrencyEdit", [L0["sender"]])), "Tag"));
    if ($.eq($t38, 1)) {
      await $.set(C, "TransactionSide", (await $.v(C, "tsDebet")));
    }
    else if ($.eq($t38, 2)) {
      await $.set(C, "TransactionSide", (await $.v(C, "tsCredit")));
    }
    else if ($.eq($t38, 3)) {
      await $.set(C, "TransactionSide", (await $.v(C, "tsUnknown")));
    }
  }
  await $.stmt((await $.call(C, "SetAmmounts", [(await $.v(C, "TransactionSide"))])));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TP_Inform", "creditvalueChange", async function creditvalueChange(Self, p0) {
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
  U.method("TP_Inform", "SearchEdit1Change", async function SearchEdit1Change(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mset((await $.mcall((await $.mv((await $.v(C, "P_DataModule")), "Trdestination")), "fieldbyname", ["id"])), "asinteger", (await $.mv((await $.mcall((await $.mv((await $.mv((await $.call(C, "TSearchEdit", [L0["sender"]])), "datasource")), "dataset")), "fieldbyname", ["id"])), "asinteger")));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TP_Inform", "FormCreate", async function FormCreate(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.stmt($.call(C, "addvalute", []));
  await $.stmt($.call(C, "addvalute_", []));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TP_Inform", "FormActivate", async function FormActivate(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mcall((await $.mv((await $.v(C, "P_DataModule")), "Sysdat")), "Open", []);
  await $.mcall((await $.mv((await $.v(C, "P_DataModule")), "ACC")), "open", []);
  await $.mcall((await $.mv((await $.v(C, "P_DataModule")), "ACC_")), "open", []);
  await $.mcall((await $.mv((await $.v(C, "P_DataModule")), "Account")), "open", []);
  await $.mcall((await $.mv((await $.v(C, "P_DataModule")), "CashSymbols")), "Open", []);
  await $.mcall((await $.mv((await $.v(C, "P_DataModule")), "commission_trans_km")), "Open", []);
  await $.mset((await $.v(C, "DebtAccSearchEdit")), "text", "");
  await $.mset((await $.v(C, "Dbedit1")), "text", "");
  await $.mset((await $.v(C, "Dbedit2")), "text", "");
  await $.mset((await $.v(C, "CreditAccSearchEdit")), "text", "");
  await $.mset((await $.v(C, "Dbedit5")), "text", "");
  await $.mset((await $.v(C, "Dbedit3")), "text", "");
  await $.mset((await $.v(C, "dbedit4")), "text", "");
  await $.mset((await $.v(C, "dbedit9")), "text", "");
  await $.mset((await $.v(C, "ReportIDDBEdit")), "Text", "0");
  await $.mset((await $.v(C, "CountrIDDBEdit")), "Text", "0");
  await $.mset((await $.v(C, "TransDate")), "date", (await $.mv((await $.mcall((await $.mv((await $.v(C, "P_DataModule")), "Sysdat")), "Fieldbyname", ["tek_dat"])), "asdatetime")));
  await $.mset((await $.v(C, "DebtAccSearchEdit")), "text", (await $.mv((await $.mcall((await $.mv((await $.v(C, "P_DataModule")), "CO_In")), "fieldbyname", ["debitaccount"])), "asstring")));
  await $.mset((await $.v(C, "CreditAccSearchEdit")), "text", (await $.mv((await $.mcall((await $.mv((await $.v(C, "P_DataModule")), "Account")), "fieldbyname", ["accno"])), "asstring")));
  await $.mset((await $.v(C, "dbedit5")), "text", (await $.mv((await $.v(C, "DebtAccSearchEdit")), "text")));
  await $.mset((await $.v(C, "dbedit3")), "text", (await $.mv((await $.mcall((await $.mv((await $.v(C, "P_DataModule")), "Account")), "fieldbyname", ["accname"])), "asstring")));
  await $.mset((await $.v(C, "cur_val_code")), "text", (await $.mv((await $.mcall((await $.mv((await $.v(C, "P_DataModule")), "Account")), "fieldbyname", ["accvalcode"])), "asstring")));
  await $.mset((await $.v(C, "acc_id_")), "text", (await $.mv((await $.mcall((await $.mv((await $.v(C, "P_DataModule")), "Account")), "fieldbyname", ["id"])), "asstring")));
  await $.mset((await $.v(C, "commission_id")), "text", (await $.mv((await $.mcall((await $.mv((await $.v(C, "P_DataModule")), "CO_In")), "fieldbyname", ["id"])), "asstring")));
  await $.mset((await $.v(C, "acc_id")), "text", (await $.mv((await $.mcall((await $.mv((await $.v(C, "P_DataModule")), "CO_In")), "fieldbyname", ["debt"])), "asstring")));
  await $.mset((await $.v(C, "dbedit6")), "text", (await $.mv((await $.mcall((await $.mv((await $.v(C, "P_DataModule")), "CO_In")), "fieldbyname", ["assignment"])), "asstring")));
  await $.mset((await $.v(C, "dbedit5")), "text", (await $.mv((await $.v(C, "CreditAccSearchEdit")), "text")));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TP_Inform", "ButtonApplyClick", async function ButtonApplyClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "ddate": 0, "transid": 0};
  await $.fixArgs(L0, ["sender"]);
  L0["ddate"] = (await $.call(C, "Trunc", [(await $.mv((await $.v(C, "TransDate")), "date"))]));
  if ($.truthy((await $.and_((await $.and_(($.ne((await $.mv((await $.v(C, "debtvalue")), "Text")), "")), async () => ($.ne((await $.mv((await $.v(C, "creditvalue")), "Text")), "")))), async () => ($.ne((await $.mv((await $.v(C, "ekv")), "Text")), "")))))) {
    await $.stmt((await $.mcall((await $.mv((await $.v(C, "P_DataModule")), "OPackage")), "CallProcedure", ["ins_commission_trans_km", [(await $.call(C, "Strtoint", [(await $.mv((await $.v(C, "commission_id")), "text"))])), (await $.call(C, "Strtoint", [(await $.mv((await $.v(C, "acc_id")), "text"))])), (await $.call(C, "Strtoint", [(await $.mv((await $.v(C, "acc_id_")), "text"))])), (await $.mv((await $.v(C, "debtvalue")), "value")), (await $.mv((await $.v(C, "creditvalue")), "value")), L0["ddate"]]])));
    await $.mcall((await $.mv((await $.v(C, "P_DataModule")), "commission_trans_km")), "refresh", []);
  }
  if ($.truthy((await $.and_((await $.and_(($.ne((await $.mv((await $.v(C, "debtvalue")), "Text")), "")), async () => ($.ne((await $.mv((await $.v(C, "creditvalue")), "Text")), "")))), async () => ($.ne((await $.mv((await $.v(C, "ekv")), "Text")), "")))))) {
    await $.stmt((await $.mcall((await $.mv((await $.v(C, "P_DataModule")), "OPackage")), "CallProcedure", ["ins_transaction", [(await $.call(C, "strtoint", [(await $.mv((await $.v(C, "acc_id")), "text"))])), (await $.call(C, "strtoint", [(await $.mv((await $.v(C, "acc_id_")), "text"))])), (await $.mv((await $.v(C, "debtvalue")), "value")), (await $.mv((await $.v(C, "creditvalue")), "value")), (await $.mv((await $.v(C, "dbedit6")), "text")), (await $.mv((await $.v(C, "ekv")), "value")), (await $.call(C, "strtofloat", [(await $.mv((await $.v(C, "editrate")), "text"))])), (await $.call(C, "strtofloat", [(await $.mv((await $.v(C, "editrate_")), "text"))])), (await $.mv((await $.v(C, "ReportIDLookUp")), "KeyValue")), (await $.mv((await $.v(C, "CountrIDLookUp")), "KeyValue")), (await $.mv((await $.v(C, "CashSymbolLookUp")), "KeyValue")), (await $.mv((await $.v(C, "ConvertationSymbolLookUp")), "KeyValue"))]])));
    L0["transid"] = (await $.mcall((await $.mv((await $.v(C, "P_DataModule")), "OPackage")), "CallIntegerFunction", ["transaction_mn", []]));
    await $.stmt((await $.mcall((await $.mv((await $.v(C, "P_DataModule")), "OSCT")), "CallProcedure", ["SetTransactions", [(await $.mv((await $.mcall((await $.mv((await $.v(C, "P_DataModule")), "commission_trans_km")), "fieldbyname", ["id"])), "asinteger")), (await $.mv((await $.mcall((await $.mv((await $.v(C, "P_DataModule")), "commission_trans_km")), "fieldbyname", ["debt"])), "asinteger")), (await $.mv((await $.mcall((await $.mv((await $.v(C, "P_DataModule")), "commission_trans_km")), "fieldbyname", ["credit"])), "asinteger")), (await $.mv((await $.mcall((await $.mv((await $.v(C, "P_DataModule")), "commission_trans_km")), "fieldbyname", ["c_value"])), "asinteger")), (await $.mv((await $.mcall((await $.mv((await $.v(C, "P_DataModule")), "commission_trans_km")), "fieldbyname", ["d_value"])), "asinteger")), (await $.mv((await $.mcall((await $.mv((await $.v(C, "P_DataModule")), "commission_trans_km")), "fieldbyname", ["ddate"])), "asdatetime")), L0["transid"]]])));
    await $.stmt($.call(C, "Close", []));
    await $.mcall((await $.mv((await $.v(C, "P_DataModule")), "Transactions")), "close", []);
    await $.mcall((await $.mv((await $.v(C, "P_DataModule")), "Transactions")), "open", []);
  }
  if ($.truthy((await $.and_((await $.and_(($.eq((await $.mv((await $.v(C, "debtvalue")), "text")), "0")), async () => ($.eq((await $.mv((await $.v(C, "creditvalue")), "text")), "0")))), async () => ($.eq((await $.mv((await $.v(C, "ekv")), "text")), "0")))))) {
    await $.stmt((await $.call(C, "ShowMessage", ["Daxil etdiyiniz məbləğ sıfırdan böyük olmalıdır!"])));
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TP_Inform", "ButtonCancelClick", async function ButtonCancelClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mset((await $.v(C, "debtvalue")), "Text", "");
  await $.mset((await $.v(C, "creditvalue")), "Text", "");
  await $.mset((await $.v(C, "ekv")), "text", "");
  await $.mset((await $.v(C, "SearchEdit3")), "text", "");
  await $.mset((await $.v(C, "SearchEdit2")), "text", "");
  await $.mset((await $.v(C, "SearchEdit1")), "text", "");
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TP_Inform", "ButtonCloseClick", async function ButtonCloseClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.stmt($.call(C, "close", []));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TP_Inform", "DebtValueKeyPress", async function DebtValueKeyPress(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "key": $.asRef(p1), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.not(($.in_((await L0["key"].get()), [...$.range("0","9"), ".", "\b"]))))) {
    await L0["key"].set("\u0000");
  }
  return L0.result;
}, {"params": ["Sender", "Key"], "kind": "procedure", "ptypes": ["TObject", "Char"]});
  U.method("TP_Inform", "CreditValueKeyPress", async function CreditValueKeyPress(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "key": $.asRef(p1), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  return L0.result;
}, {"params": ["Sender", "Key"], "kind": "procedure", "ptypes": ["TObject", "Char"]});
  U.method("TP_Inform", "ReportIDDBEditChange", async function ReportIDDBEditChange(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mset((await $.v(C, "ReportIDLookUp")), "KeyValue", (await $.mv((L0["sender"]), "Text")));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TP_Inform", "CountrIDDBEditChange", async function CountrIDDBEditChange(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mset((await $.v(C, "CountrIDLookUp")), "KeyValue", (await $.mv((L0["sender"]), "Text")));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TP_Inform", "ReportIDLookUpCloseUp", async function ReportIDLookUpCloseUp(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mset((await $.v(C, "ReportIDDBEdit")), "Text", (await $.mv((L0["sender"]), "keyvalue")));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TP_Inform", "CountrIDLookUpCloseUp", async function CountrIDLookUpCloseUp(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mset((await $.v(C, "CountrIDDBEdit")), "Text", (await $.mv((L0["sender"]), "keyvalue")));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TP_Inform", "ConvertationSymbolLookUpCloseUp", async function ConvertationSymbolLookUpCloseUp(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  try {
    await $.mset((await $.v(C, "SearchEdit2")), "Text", (await $.mv((L0["sender"]), "keyvalue")));
  } catch ($t39) {
    $.rethrowControl($t39);
    $.handled($t39);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TP_Inform", "CashSymbolLookUpCloseUp", async function CashSymbolLookUpCloseUp(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  try {
    await $.mset((await $.v(C, "SearchEdit3")), "Text", (await $.mv((L0["sender"]), "keyvalue")));
  } catch ($t40) {
    $.rethrowControl($t40);
    $.handled($t40);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TP_Inform", "SearchEdit3Change", async function SearchEdit3Change(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mset((await $.v(C, "CashSymbolLookUp")), "KeyValue", (await $.mv((L0["sender"]), "Text")));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TP_Inform", "SearchEdit2Change", async function SearchEdit2Change(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mset((await $.v(C, "ConvertationSymbolLookUp")), "KeyValue", (await $.mv((L0["sender"]), "Text")));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TP_Inform", "Button1Click", async function Button1Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t41 = (await $.wobj(C, "P_DataModule"));
    await $.mcall((await $.wv([$t41], "Cntries", C, false)), "refresh", []);
    await $.mcall((await $.wv([$t41], "ReportDesc", C, false)), "refresh", []);
    await $.mcall((await $.wv([$t41], "ConvertationSymbols", C, false)), "refresh", []);
    await $.mcall((await $.wv([$t41], "CashSymbols", C, false)), "refresh", []);
    await $.mcall((await $.wv([$t41], "Trdestination", C, false)), "refresh", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TP_Inform", "SearchEdit3Enter", async function SearchEdit3Enter(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.stmt($.call(C, "SetCashSymbol", []));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  return U;
}
