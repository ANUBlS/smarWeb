// Generated from CC_AccTransaction_Unit.pas by pas2js — do not edit by hand; regenerate instead.
/* eslint-disable */
// @ts-nocheck

export default function define($) {
  const U = $.unit("CC_AccTransaction_Unit", ["Windows", "Messages", "SysUtils", "Classes", "Graphics", "Controls", "Forms", "Dialogs", "NLSLocalizer", "StdCtrls", "ComCtrls", "CurrencyEdit", "SearchEdit", "Mask", "DBCtrls", "ExtCtrls", "Db", "OracleData", "UnitData", "CC_AccInForm_Unit", "CC_AccOutForm_Unit"]);
  const C = [U];
  U.defClass("TFormAccOut", "TForm", {"groupbox1": {"name": "GroupBox1", "type": "TGroupBox"}, "headercontrol1": {"name": "HeaderControl1", "type": "THeaderControl"}, "panel1": {"name": "Panel1", "type": "TPanel"}, "paneldebit": {"name": "PanelDebit", "type": "TPanel"}, "paneldebitrest": {"name": "PanelDebitRest", "type": "TPanel"}, "label1": {"name": "Label1", "type": "TLabel"}, "label2": {"name": "Label2", "type": "TLabel"}, "d_ostat": {"name": "d_ostat", "type": "TLabel"}, "d_pok_ostat": {"name": "d_pok_ostat", "type": "TLabel"}, "panel4": {"name": "Panel4", "type": "TPanel"}, "dblookupcombobox2": {"name": "DBLookupComboBox2", "type": "TDBLookupComboBox"}, "dbedit2": {"name": "DBEdit2", "type": "TDBEdit"}, "panel5": {"name": "Panel5", "type": "TPanel"}, "debtaccsearchedit": {"name": "DebtAccSearchEdit", "type": "TSearchEdit"}, "dblookupcombobox1": {"name": "DBLookupComboBox1", "type": "TDBLookupComboBox"}, "dbedit1": {"name": "DBEdit1", "type": "TDBEdit"}, "acc_id": {"name": "acc_id", "type": "TEdit"}, "panel6": {"name": "Panel6", "type": "TPanel"}, "editvalute": {"name": "editvalute", "type": "TComboBox"}, "val_code": {"name": "val_code", "type": "TEdit"}, "editrate": {"name": "editrate", "type": "TEdit"}, "valname": {"name": "valname", "type": "TEdit"}, "panel2": {"name": "Panel2", "type": "TPanel"}, "panel7": {"name": "Panel7", "type": "TPanel"}, "panel8": {"name": "Panel8", "type": "TPanel"}, "label3": {"name": "Label3", "type": "TLabel"}, "label4": {"name": "Label4", "type": "TLabel"}, "c_ostat": {"name": "c_ostat", "type": "TLabel"}, "c_pok_ostat": {"name": "c_pok_ostat", "type": "TLabel"}, "panel9": {"name": "Panel9", "type": "TPanel"}, "dblookupcombobox3": {"name": "DBLookupComboBox3", "type": "TDBLookupComboBox"}, "dbedit3": {"name": "DBEdit3", "type": "TDBEdit"}, "panel10": {"name": "Panel10", "type": "TPanel"}, "creditaccsearchedit": {"name": "CreditAccSearchEdit", "type": "TSearchEdit"}, "dblookupcombobox4": {"name": "DBLookupComboBox4", "type": "TDBLookupComboBox"}, "dbedit5": {"name": "DBEdit5", "type": "TDBEdit"}, "acc_id_": {"name": "acc_id_", "type": "TEdit"}, "panel11": {"name": "Panel11", "type": "TPanel"}, "editrate_": {"name": "editrate_", "type": "TEdit"}, "editvalute_": {"name": "editvalute_", "type": "TComboBox"}, "cur_val_code": {"name": "cur_val_code", "type": "TEdit"}, "valname_": {"name": "valname_", "type": "TEdit"}, "groupbox2": {"name": "GroupBox2", "type": "TGroupBox"}, "panel3": {"name": "Panel3", "type": "TPanel"}, "panel12": {"name": "Panel12", "type": "TPanel"}, "creditvalue": {"name": "creditvalue", "type": "TCurrencyEdit"}, "panel13": {"name": "Panel13", "type": "TPanel"}, "ekv": {"name": "ekv", "type": "TCurrencyEdit"}, "groupbox3": {"name": "GroupBox3", "type": "TGroupBox"}, "panel14": {"name": "Panel14", "type": "TPanel"}, "convertationsymbollookup": {"name": "ConvertationSymbolLookUp", "type": "TDBLookupComboBox"}, "searchedit2": {"name": "SearchEdit2", "type": "TSearchEdit"}, "dbedit7": {"name": "DBEdit7", "type": "TDBEdit"}, "panel15": {"name": "Panel15", "type": "TPanel"}, "cashsymbollookup": {"name": "CashSymbolLookUp", "type": "TDBLookupComboBox"}, "searchedit3": {"name": "SearchEdit3", "type": "TSearchEdit"}, "dbedit8": {"name": "DBEdit8", "type": "TDBEdit"}, "panel16": {"name": "Panel16", "type": "TPanel"}, "dblookupcombobox5": {"name": "DBLookupComboBox5", "type": "TDBLookupComboBox"}, "dbedit6": {"name": "DBEdit6", "type": "TDBEdit"}, "searchedit1": {"name": "SearchEdit1", "type": "TSearchEdit"}, "groupbox4": {"name": "GroupBox4", "type": "TGroupBox"}, "label5": {"name": "Label5", "type": "TLabel"}, "label6": {"name": "Label6", "type": "TLabel"}, "label7": {"name": "Label7", "type": "TLabel"}, "transdate": {"name": "TransDate", "type": "TDateTimePicker"}, "dbeditoperationno": {"name": "DBEditOperationNo", "type": "TDBEdit"}, "dbedit4": {"name": "DBEdit4", "type": "TDBEdit"}, "dblookupcombobox6": {"name": "DBLookupComboBox6", "type": "TDBLookupComboBox"}, "searchedit4": {"name": "SearchEdit4", "type": "TSearchEdit"}, "dbedit9": {"name": "DBEdit9", "type": "TDBEdit"}, "panel17": {"name": "Panel17", "type": "TPanel"}, "buttonapply": {"name": "ButtonApply", "type": "TButton"}, "buttoncancel": {"name": "ButtonCancel", "type": "TButton"}, "buttonclose": {"name": "ButtonClose", "type": "TButton"}, "debtvalue": {"name": "debtvalue", "type": "TCurrencyEdit"}, "commission_id": {"name": "commission_id", "type": "TEdit"}, "commission_trans_km": {"name": "commission_trans_km", "type": "TOracleDataSet"}, "commission_trans_data": {"name": "commission_trans_data", "type": "TDataSource"}}, {});
  U.init(async () => {
    U.var_("FormAccOut", null, "TFormAccOut");
  });
  U.method("TFormAccOut", "DebtAccSearchEditChange", async function DebtAccSearchEditChange(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mset((await $.v(C, "d_ostat")), "visible", true);
  await $.mset((await $.v(C, "d_pok_ostat")), "visible", true);
  await $.mset((await $.v(C, "Dbedit1")), "text", (await $.mv((await $.v(C, "DebtAccSearchEdit")), "Text")));
  {
    const $t1 = (await $.mv((await $.v(C, "DataMod_Buyers")), "archost"));
    await $.stmt($.wcall([$t1], "Close", [], C));
    await $.mcall((await $.wv([$t1], "SQL", C, false)), "Clear", []);
    await $.mset((await $.wv([$t1], "SQL", C, false)), "Text", $.add($.add($.add("Select * from tenostat where acc_id in (select id from accno where accno=", "'"), (await $.mv((await $.wv([$t1], "DebtAccSearchEdit", C, false)), "Text"))), "')"));
    await $.stmt($.wcall([$t1], "Open", [], C));
    await $.mset((await $.wv([$t1], "d_ostat", C, false)), "caption", (await $.mv((await $.wcall([$t1], "fieldbyname", ["ostat"], C)), "asstring")));
  }
  {
    const $t2 = (await $.mv((await $.v(C, "DataMod_Buyers")), "archost"));
    await $.stmt($.wcall([$t2], "Close", [], C));
    await $.mcall((await $.wv([$t2], "SQL", C, false)), "Clear", []);
    await $.mset((await $.wv([$t2], "SQL", C, false)), "Text", $.add($.add($.add("Select * from tenostat where acc_id in (select id from accno where accno=", "'"), (await $.mv((await $.wv([$t2], "DebtAccSearchEdit", C, false)), "Text"))), "')"));
    await $.stmt($.wcall([$t2], "Open", [], C));
    await $.mset((await $.wv([$t2], "d_pok_ostat", C, false)), "caption", (await $.mv((await $.wcall([$t2], "fieldbyname", ["pok_ostat"], C)), "asstring")));
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFormAccOut", "addvalute", async function addvalute(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: undefined, "xxx": 0};
  {
    const $t3 = (await $.mv((await $.v(C, "DataMod_Buyers")), "avalute"));
    await $.stmt($.wcall([$t3], "Close", [], C));
    await $.mcall((await $.wv([$t3], "SQL", C, false)), "Clear", []);
    await $.stmt((await $.mcall((await $.wv([$t3], "SQL", C, false)), "Add", ["select valu_name from avalute"])));
    await $.stmt($.wcall([$t3], "Open", [], C));
  }
  await $.mcall((await $.v(C, "editvalute")), "Clear", []);
  { const $t4 = (await $.mv((await $.mv((await $.v(C, "DataMod_Buyers")), "avalute")), "RecordCount"));
    L0["xxx"] = 1;
    let $t5 = true;
    for (;;) {
      if (!$t5) { L0["xxx"] = $.succ(L0["xxx"], 1); }
      $t5 = false;
      if (!($.ord(L0["xxx"]) <= $.ord($t4))) break;
      {
        const $t6 = (await $.v(C, "editvalute"));
        await $.stmt((await $.mcall((await $.wv([$t6], "Items", C, false)), "Add", [(await $.mv((await $.mcall((await $.mv((await $.wv([$t6], "DataMod_Buyers", C, false)), "avalute")), "FieldByName", ["valu_name"])), "AsString"))])));
      }
      await $.mcall((await $.mv((await $.v(C, "DataMod_Buyers")), "avalute")), "Next", []);
      await $.tick();
    }
  }
  return L0.result;
}, {"params": [], "kind": "procedure", "ptypes": []});
  U.method("TFormAccOut", "FormActivate", async function FormActivate(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mcall((await $.mv((await $.v(C, "DataMod_Buyers")), "Accno")), "Open", []);
  await $.mcall((await $.mv((await $.v(C, "DataMod_Buyers")), "Sysdat")), "Open", []);
  await $.mset((await $.v(C, "acc_id")), "text", (await $.mv((await $.mcall((await $.mv((await $.v(C, "DataMod_Buyers")), "Accno")), "fieldbyname", ["id"])), "asstring")));
  await $.mset((await $.v(C, "acc_id_")), "text", (await $.mv((await $.mcall((await $.mv((await $.v(C, "CC_AccOutForm")), "CC_OutForm")), "fieldbyname", ["credit"])), "asstring")));
  await $.mset((await $.v(C, "commission_id")), "text", (await $.mv((await $.mcall((await $.mv((await $.v(C, "CC_AccOutForm")), "CC_OutForm")), "fieldbyname", ["id"])), "asstring")));
  await $.mset((await $.v(C, "TransDate")), "date", (await $.mv((await $.mcall((await $.mv((await $.v(C, "DataMod_Buyers")), "Sysdat")), "Fieldbyname", ["tek_dat"])), "asdatetime")));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFormAccOut", "acc_idChange", async function acc_idChange(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t7 = (await $.mv((await $.v(C, "DataMod_Buyers")), "Archost"));
    await $.stmt($.wcall([$t7], "Close", [], C));
    await $.mcall((await $.wv([$t7], "SQL", C, false)), "Clear", []);
    await $.mset((await $.wv([$t7], "SQL", C, false)), "Text", $.add($.add($.add("Select c.rowid ,c.* from account c where id= ", "'"), (await $.mv((await $.wv([$t7], "acc_id", C, false)), "Text"))), "'"));
    await $.stmt($.wcall([$t7], "Open", [], C));
    await $.mset((await $.wv([$t7], "DebtAccSearchEdit", C, false)), "Text", (await $.mv((await $.wcall([$t7], "FieldByName", ["acc_no"], C)), "AsString")));
    await $.mset((await $.wv([$t7], "dbedit1", C, false)), "text", (await $.mv((await $.wv([$t7], "DebtAccSearchEdit", C, false)), "Text")));
  }
  {
    const $t8 = (await $.mv((await $.v(C, "DataMod_Buyers")), "Archost"));
    await $.stmt($.wcall([$t8], "Close", [], C));
    await $.mcall((await $.wv([$t8], "SQL", C, false)), "Clear", []);
    await $.mset((await $.wv([$t8], "SQL", C, false)), "Text", $.add($.add($.add("Select c.rowid ,c.* from account c where id= ", "'"), (await $.mv((await $.wv([$t8], "acc_id", C, false)), "Text"))), "'"));
    await $.stmt($.wcall([$t8], "Open", [], C));
    await $.mset((await $.wv([$t8], "val_code", C, false)), "Text", (await $.mv((await $.wcall([$t8], "FieldByName", ["val_acc"], C)), "AsString")));
  }
  {
    const $t9 = (await $.mv((await $.v(C, "DataMod_Buyers")), "Archost"));
    await $.stmt($.wcall([$t9], "Close", [], C));
    await $.mcall((await $.wv([$t9], "SQL", C, false)), "Clear", []);
    await $.mset((await $.wv([$t9], "SQL", C, false)), "Text", $.add($.add($.add("Select c.rowid ,c.* from account c where id= ", "'"), (await $.mv((await $.wv([$t9], "acc_id", C, false)), "Text"))), "'"));
    await $.stmt($.wcall([$t9], "Open", [], C));
    await $.mset((await $.wv([$t9], "dbedit2", C, false)), "Text", (await $.mv((await $.wcall([$t9], "FieldByName", ["name"], C)), "AsString")));
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFormAccOut", "val_codeChange", async function val_codeChange(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t10 = (await $.mv((await $.v(C, "DataMod_Buyers")), "archost"));
    await $.stmt($.wcall([$t10], "Close", [], C));
    await $.mcall((await $.wv([$t10], "SQL", C, false)), "Clear", []);
    await $.mset((await $.wv([$t10], "SQL", C, false)), "Text", $.add($.add($.add("Select c.rowid ,c.* from temprate c where val_kod= ", "'"), (await $.mv((await $.wv([$t10], "val_code", C, false)), "Text"))), "'"));
    await $.stmt($.wcall([$t10], "Open", [], C));
    await $.mset((await $.wv([$t10], "editrate", C, false)), "Text", (await $.mv((await $.wcall([$t10], "FieldByName", ["ostat"], C)), "AsString")));
  }
  {
    const $t11 = (await $.mv((await $.v(C, "DataMod_Buyers")), "archost"));
    await $.stmt($.wcall([$t11], "Close", [], C));
    await $.mcall((await $.wv([$t11], "SQL", C, false)), "Clear", []);
    await $.mset((await $.wv([$t11], "SQL", C, false)), "Text", $.add($.add($.add("Select c.rowid ,c.* from avalute_t c where valute= ", "'"), (await $.mv((await $.wv([$t11], "val_code", C, false)), "Text"))), "'"));
    await $.stmt($.wcall([$t11], "Open", [], C));
    await $.mset((await $.wv([$t11], "editvalute", C, false)), "Text", (await $.mv((await $.wcall([$t11], "FieldByName", ["valu_name"], C)), "AsString")));
  }
  {
    const $t12 = (await $.mv((await $.v(C, "DataMod_Buyers")), "archost"));
    await $.stmt($.wcall([$t12], "Close", [], C));
    await $.mcall((await $.wv([$t12], "SQL", C, false)), "Clear", []);
    await $.mset((await $.wv([$t12], "SQL", C, false)), "Text", $.add($.add($.add("Select c.rowid ,c.* from avalute_t c where valute= ", "'"), (await $.mv((await $.wv([$t12], "val_code", C, false)), "Text"))), "'"));
    await $.stmt($.wcall([$t12], "Open", [], C));
    await $.mset((await $.wv([$t12], "valname", C, false)), "Text", (await $.mv((await $.wcall([$t12], "FieldByName", ["val_name"], C)), "AsString")));
  }
  {
    const $t13 = (await $.mv((await $.v(C, "DataMod_Buyers")), "Archost"));
    await $.stmt($.wcall([$t13], "Close", [], C));
    await $.mcall((await $.wv([$t13], "SQL", C, false)), "Clear", []);
    await $.mset((await $.wv([$t13], "SQL", C, false)), "Text", $.add($.add("Select c.rowid ,c.* from account c where id= '", (await $.mv((await $.wv([$t13], "CreditAccSearchEdit", C, false)), "text"))), "' "));
    await $.stmt($.wcall([$t13], "Open", [], C));
    await $.mset((await $.wv([$t13], "cur_val_code", C, false)), "Text", (await $.mv((await $.wcall([$t13], "FieldByName", ["val_acc"], C)), "AsString")));
  }
  {
    const $t14 = (await $.mv((await $.v(C, "DataMod_Buyers")), "Archost"));
    await $.stmt($.wcall([$t14], "Close", [], C));
    await $.mcall((await $.wv([$t14], "SQL", C, false)), "Clear", []);
    await $.mset((await $.wv([$t14], "SQL", C, false)), "Text", "Select c.rowid ,c.* from account c where id= 1001001 ");
    await $.stmt($.wcall([$t14], "Open", [], C));
    await $.mset((await $.wv([$t14], "dbedit3", C, false)), "Text", (await $.mv((await $.wcall([$t14], "FieldByName", ["name"], C)), "AsString")));
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFormAccOut", "debtvalueChange", async function debtvalueChange(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mset((await $.v(C, "Ekv")), "text", (await $.call(C, "FormatFloat", ["#.##", $.mul((await $.call(C, "Strtofloat", [(await $.mv((await $.v(C, "debtvalue")), "text"))])), (await $.call(C, "Strtofloat", [(await $.mv((await $.v(C, "editrate")), "text"))])))])));
  await $.mset((await $.v(C, "creditvalue")), "text", (await $.call(C, "FormatFloat", ["#.##", $.fdiv((await $.call(C, "Strtofloat", [(await $.mv((await $.v(C, "ekv")), "text"))])), (await $.call(C, "Strtofloat", [(await $.mv((await $.v(C, "editrate_")), "text"))])))])));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFormAccOut", "creditvalueChange", async function creditvalueChange(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mset((await $.v(C, "Ekv")), "text", (await $.call(C, "FormatFloat", ["#.##", $.mul((await $.call(C, "Strtofloat", [(await $.mv((await $.v(C, "creditvalue")), "text"))])), (await $.call(C, "Strtofloat", [(await $.mv((await $.v(C, "editrate_")), "text"))])))])));
  await $.mset((await $.v(C, "Debtvalue")), "text", (await $.call(C, "FormatFloat", ["#.##", $.fdiv((await $.call(C, "Strtofloat", [(await $.mv((await $.v(C, "ekv")), "text"))])), (await $.call(C, "Strtofloat", [(await $.mv((await $.v(C, "editrate")), "text"))])))])));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFormAccOut", "SearchEdit1Change", async function SearchEdit1Change(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mset((await $.mcall((await $.mv((await $.v(C, "Datamod_Buyers")), "Trdestination")), "fieldbyname", ["id"])), "asinteger", (await $.mv((await $.mcall((await $.mv((await $.mv((await $.call(C, "TSearchEdit", [L0["sender"]])), "datasource")), "dataset")), "fieldbyname", ["id"])), "asinteger")));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFormAccOut", "CreditAccSearchEditChange", async function CreditAccSearchEditChange(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t15 = (await $.mv((await $.v(C, "DataMod_Buyers")), "archost"));
    await $.stmt($.wcall([$t15], "Close", [], C));
    await $.mcall((await $.wv([$t15], "SQL", C, false)), "Clear", []);
    await $.mset((await $.wv([$t15], "SQL", C, false)), "Text", $.add($.add($.add("select * from accno where accno=", "'"), (await $.mv((await $.wv([$t15], "CreditAccSearchEdit", C, false)), "Text"))), "' "));
    await $.stmt($.wcall([$t15], "Open", [], C));
    await $.mset((await $.wv([$t15], "cur_val_code", C, false)), "text", (await $.mv((await $.wcall([$t15], "fieldbyname", ["accvalcode"], C)), "asstring")));
  }
  {
    const $t16 = (await $.mv((await $.v(C, "DataMod_Buyers")), "archost"));
    await $.stmt($.wcall([$t16], "Close", [], C));
    await $.mcall((await $.wv([$t16], "SQL", C, false)), "Clear", []);
    await $.mset((await $.wv([$t16], "SQL", C, false)), "Text", $.add($.add($.add("Select * from tenostat where acc_id in (select id from accno where accno=", "'"), (await $.mv((await $.wv([$t16], "CreditAccSearchEdit", C, false)), "Text"))), "')"));
    await $.stmt($.wcall([$t16], "Open", [], C));
    await $.mset((await $.wv([$t16], "c_ostat", C, false)), "caption", (await $.mv((await $.wcall([$t16], "fieldbyname", ["ostat"], C)), "asstring")));
  }
  {
    const $t17 = (await $.mv((await $.v(C, "DataMod_Buyers")), "archost"));
    await $.stmt($.wcall([$t17], "Close", [], C));
    await $.mcall((await $.wv([$t17], "SQL", C, false)), "Clear", []);
    await $.mset((await $.wv([$t17], "SQL", C, false)), "Text", $.add($.add($.add("Select * from tenostat where acc_id in (select id from accno where accno=", "'"), (await $.mv((await $.wv([$t17], "CreditAccSearchEdit", C, false)), "Text"))), "')"));
    await $.stmt($.wcall([$t17], "Open", [], C));
    await $.mset((await $.wv([$t17], "c_pok_ostat", C, false)), "caption", (await $.mv((await $.wcall([$t17], "fieldbyname", ["pok_ostat"], C)), "asstring")));
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFormAccOut", "acc_id_Change", async function acc_id_Change(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t18 = (await $.mv((await $.v(C, "DataMod_Buyers")), "Archost"));
    await $.stmt($.wcall([$t18], "Close", [], C));
    await $.mcall((await $.wv([$t18], "SQL", C, false)), "Clear", []);
    await $.mset((await $.wv([$t18], "SQL", C, false)), "Text", $.add($.add($.add("Select c.rowid ,c.* from account c where id= ", "'"), (await $.mv((await $.wv([$t18], "acc_id_", C, false)), "Text"))), "'"));
    await $.stmt($.wcall([$t18], "Open", [], C));
    await $.mset((await $.wv([$t18], "CreditAccSearchEdit", C, false)), "Text", (await $.mv((await $.wcall([$t18], "FieldByName", ["acc_no"], C)), "AsString")));
    await $.mset((await $.wv([$t18], "dbedit5", C, false)), "text", (await $.mv((await $.wv([$t18], "CreditAccSearchEdit", C, false)), "Text")));
  }
  {
    const $t19 = (await $.mv((await $.v(C, "DataMod_Buyers")), "Archost"));
    await $.stmt($.wcall([$t19], "Close", [], C));
    await $.mcall((await $.wv([$t19], "SQL", C, false)), "Clear", []);
    await $.mset((await $.wv([$t19], "SQL", C, false)), "Text", $.add($.add($.add("Select c.rowid ,c.* from account c where id= ", "'"), (await $.mv((await $.wv([$t19], "acc_id_", C, false)), "Text"))), "'"));
    await $.stmt($.wcall([$t19], "Open", [], C));
    await $.mset((await $.wv([$t19], "cur_val_code", C, false)), "Text", (await $.mv((await $.wcall([$t19], "FieldByName", ["val_acc"], C)), "AsString")));
  }
  {
    const $t20 = (await $.mv((await $.v(C, "DataMod_Buyers")), "Archost"));
    await $.stmt($.wcall([$t20], "Close", [], C));
    await $.mcall((await $.wv([$t20], "SQL", C, false)), "Clear", []);
    await $.mset((await $.wv([$t20], "SQL", C, false)), "Text", $.add($.add($.add("Select c.rowid ,c.* from account c where id= ", "'"), (await $.mv((await $.wv([$t20], "acc_id_", C, false)), "Text"))), "'"));
    await $.stmt($.wcall([$t20], "Open", [], C));
    await $.mset((await $.wv([$t20], "dbedit3", C, false)), "Text", (await $.mv((await $.wcall([$t20], "FieldByName", ["name"], C)), "AsString")));
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFormAccOut", "cur_val_codeChange", async function cur_val_codeChange(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t21 = (await $.mv((await $.v(C, "DataMod_Buyers")), "archost"));
    await $.stmt($.wcall([$t21], "Close", [], C));
    await $.mcall((await $.wv([$t21], "SQL", C, false)), "Clear", []);
    await $.mset((await $.wv([$t21], "SQL", C, false)), "Text", $.add($.add($.add("Select c.rowid ,c.* from temprate c where val_kod= ", "'"), (await $.mv((await $.wv([$t21], "cur_val_code", C, false)), "Text"))), "'"));
    await $.stmt($.wcall([$t21], "Open", [], C));
    await $.mset((await $.wv([$t21], "editrate_", C, false)), "Text", (await $.mv((await $.wcall([$t21], "FieldByName", ["ostat"], C)), "AsString")));
  }
  {
    const $t22 = (await $.mv((await $.v(C, "DataMod_Buyers")), "archost"));
    await $.stmt($.wcall([$t22], "Close", [], C));
    await $.mcall((await $.wv([$t22], "SQL", C, false)), "Clear", []);
    await $.mset((await $.wv([$t22], "SQL", C, false)), "Text", $.add($.add($.add("Select c.rowid ,c.* from avalute_t c where valute= ", "'"), (await $.mv((await $.wv([$t22], "cur_val_code", C, false)), "Text"))), "'"));
    await $.stmt($.wcall([$t22], "Open", [], C));
    await $.mset((await $.wv([$t22], "editvalute_", C, false)), "Text", (await $.mv((await $.wcall([$t22], "FieldByName", ["valu_name"], C)), "AsString")));
  }
  {
    const $t23 = (await $.mv((await $.v(C, "DataMod_Buyers")), "archost"));
    await $.stmt($.wcall([$t23], "Close", [], C));
    await $.mcall((await $.wv([$t23], "SQL", C, false)), "Clear", []);
    await $.mset((await $.wv([$t23], "SQL", C, false)), "Text", $.add($.add($.add("Select c.rowid ,c.* from avalute_t c where valute= ", "'"), (await $.mv((await $.wv([$t23], "cur_val_code", C, false)), "Text"))), "'"));
    await $.stmt($.wcall([$t23], "Open", [], C));
    await $.mset((await $.wv([$t23], "valname_", C, false)), "Text", (await $.mv((await $.wcall([$t23], "FieldByName", ["val_name"], C)), "AsString")));
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFormAccOut", "ButtonCloseClick", async function ButtonCloseClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.stmt($.call(C, "close", []));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFormAccOut", "ButtonCancelClick", async function ButtonCancelClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mset((await $.v(C, "debtvalue")), "value", 0.0);
  await $.mset((await $.v(C, "creditvalue")), "value", 0.0);
  await $.mset((await $.v(C, "ekv")), "value", 0.0);
  await $.mset((await $.v(C, "dbedit7")), "text", "");
  await $.mset((await $.v(C, "dbedit8")), "text", "");
  await $.mset((await $.v(C, "dbedit6")), "text", "");
  await $.mset((await $.v(C, "SearchEdit2")), "text", "");
  await $.mset((await $.v(C, "SearchEdit3")), "text", "");
  await $.mset((await $.v(C, "SearchEdit1")), "text", "");
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFormAccOut", "ButtonApplyClick", async function ButtonApplyClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy((await $.and_((await $.and_(($.gt((await $.mv((await $.v(C, "debtvalue")), "value")), 0)), async () => ($.gt((await $.mv((await $.v(C, "creditvalue")), "value")), 0)))), async () => ($.gt((await $.mv((await $.v(C, "ekv")), "value")), 0)))))) {
    await $.stmt((await $.mcall((await $.mv((await $.v(C, "DataMod_Buyers")), "OPackage")), "CallProcedure", ["ins_commission_trans_km", [(await $.call(C, "Strtoint", [(await $.mv((await $.v(C, "commission_id")), "text"))])), (await $.call(C, "Strtoint", [(await $.mv((await $.v(C, "acc_id")), "text"))])), (await $.call(C, "Strtoint", [(await $.mv((await $.v(C, "acc_id_")), "text"))])), (await $.mv((await $.v(C, "debtvalue")), "value")), (await $.mv((await $.v(C, "creditvalue")), "value")), (await $.call(C, "datetostr", [(await $.mv((await $.v(C, "transdate")), "datetime"))]))]])));
    await $.mcall((await $.v(C, "commission_trans_km")), "refresh", []);
  }
  if ($.truthy((await $.and_((await $.and_(($.gt((await $.mv((await $.v(C, "debtvalue")), "value")), 0)), async () => ($.gt((await $.mv((await $.v(C, "creditvalue")), "value")), 0)))), async () => ($.gt((await $.mv((await $.v(C, "ekv")), "value")), 0)))))) {
    await $.stmt((await $.mcall((await $.mv((await $.v(C, "DataMod_Buyers")), "OPackage")), "CallProcedure", ["ins_transaction", [(await $.mv((await $.v(C, "acc_id")), "text")), (await $.mv((await $.v(C, "acc_id_")), "text")), (await $.mv((await $.v(C, "debtvalue")), "text")), (await $.mv((await $.v(C, "creditvalue")), "text")), (await $.mv((await $.v(C, "dbedit6")), "text")), (await $.mv((await $.v(C, "ekv")), "text")), (await $.mv((await $.v(C, "editrate")), "text")), (await $.mv((await $.v(C, "editrate_")), "text"))]])));
    await $.stmt((await $.mcall((await $.mv((await $.v(C, "DataMod_Buyers")), "OPackage")), "Callprocedure", ["transaction_mn", []])));
    await $.stmt((await $.mcall((await $.mv((await $.v(C, "DataMod_Buyers")), "OSCT")), "CallProcedure", ["settransactions", [(await $.mv((await $.mcall((await $.v(C, "commission_trans_km")), "fieldbyname", ["id"])), "asinteger")), (await $.mv((await $.mcall((await $.v(C, "commission_trans_km")), "fieldbyname", ["debt"])), "asinteger")), (await $.mv((await $.mcall((await $.v(C, "commission_trans_km")), "fieldbyname", ["credit"])), "asinteger")), (await $.mv((await $.mcall((await $.v(C, "commission_trans_km")), "fieldbyname", ["c_value"])), "asinteger")), (await $.mv((await $.mcall((await $.v(C, "commission_trans_km")), "fieldbyname", ["d_value"])), "asinteger")), (await $.mv((await $.mcall((await $.v(C, "commission_trans_km")), "fieldbyname", ["ddate"])), "asdatetime"))]])));
    await $.stmt($.call(C, "close", []));
    await $.stmt($.call(C, "close", []));
  }
  if ($.truthy((await $.and_((await $.and_(($.eq((await $.mv((await $.v(C, "debtvalue")), "value")), 0)), async () => ($.eq((await $.mv((await $.v(C, "creditvalue")), "value")), 0)))), async () => ($.eq((await $.mv((await $.v(C, "ekv")), "value")), 0)))))) {
    await $.stmt((await $.call(C, "showmessage", ["Daxil etdiyiniz məbləğ sıfırdan böyük olmalıdır!"])));
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  return U;
}
