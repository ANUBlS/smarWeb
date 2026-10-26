// Generated from CC_ACCInUnit.pas by pas2js — do not edit by hand; regenerate instead.
/* eslint-disable */
// @ts-nocheck

export default function define($) {
  const U = $.unit("CC_ACCInUnit", ["Windows", "Messages", "SysUtils", "Classes", "Graphics", "Controls", "Forms", "Dialogs", "NLSLocalizer", "StdCtrls", "ComCtrls", "CurrencyEdit", "SearchEdit", "Mask", "DBCtrls", "ExtCtrls", "Db", "OracleData", "UnitData", "CC_AccOutForm_Unit", "sboapiDataModuleImpl", "cc_BuyersImpl"]);
  const C = [U];
  U.defClass("TFormAccIn", "TForm", {"groupbox1": {"name": "GroupBox1", "type": "TGroupBox"}, "headercontrol1": {"name": "HeaderControl1", "type": "THeaderControl"}, "panel1": {"name": "Panel1", "type": "TPanel"}, "paneldebit": {"name": "PanelDebit", "type": "TPanel"}, "paneldebitrest": {"name": "PanelDebitRest", "type": "TPanel"}, "label1": {"name": "Label1", "type": "TLabel"}, "label2": {"name": "Label2", "type": "TLabel"}, "d_ostat": {"name": "d_ostat", "type": "TLabel"}, "d_pok_ostat": {"name": "d_pok_ostat", "type": "TLabel"}, "panel4": {"name": "Panel4", "type": "TPanel"}, "dblookupcombobox2": {"name": "DBLookupComboBox2", "type": "TDBLookupComboBox"}, "dbedit2": {"name": "DBEdit2", "type": "TDBEdit"}, "panel5": {"name": "Panel5", "type": "TPanel"}, "debtaccsearchedit": {"name": "DebtAccSearchEdit", "type": "TSearchEdit"}, "dblookupcombobox1": {"name": "DBLookupComboBox1", "type": "TDBLookupComboBox"}, "dbedit1": {"name": "DBEdit1", "type": "TDBEdit"}, "acc_id": {"name": "acc_id", "type": "TEdit"}, "panel6": {"name": "Panel6", "type": "TPanel"}, "editvalute": {"name": "editvalute", "type": "TComboBox"}, "val_code": {"name": "val_code", "type": "TEdit"}, "editrate": {"name": "editrate", "type": "TEdit"}, "valname": {"name": "valname", "type": "TEdit"}, "panel2": {"name": "Panel2", "type": "TPanel"}, "panel7": {"name": "Panel7", "type": "TPanel"}, "panel8": {"name": "Panel8", "type": "TPanel"}, "label3": {"name": "Label3", "type": "TLabel"}, "label4": {"name": "Label4", "type": "TLabel"}, "c_ostat": {"name": "c_ostat", "type": "TLabel"}, "c_pok_ostat": {"name": "c_pok_ostat", "type": "TLabel"}, "panel9": {"name": "Panel9", "type": "TPanel"}, "dblookupcombobox3": {"name": "DBLookupComboBox3", "type": "TDBLookupComboBox"}, "dbedit3": {"name": "DBEdit3", "type": "TDBEdit"}, "panel10": {"name": "Panel10", "type": "TPanel"}, "creditaccsearchedit": {"name": "CreditAccSearchEdit", "type": "TSearchEdit"}, "dblookupcombobox4": {"name": "DBLookupComboBox4", "type": "TDBLookupComboBox"}, "dbedit5": {"name": "DBEdit5", "type": "TDBEdit"}, "acc_id_": {"name": "acc_id_", "type": "TEdit"}, "panel11": {"name": "Panel11", "type": "TPanel"}, "editrate_": {"name": "editrate_", "type": "TEdit"}, "editvalute_": {"name": "editvalute_", "type": "TComboBox"}, "cur_val_code": {"name": "cur_val_code", "type": "TEdit"}, "valname_": {"name": "valname_", "type": "TEdit"}, "groupbox2": {"name": "GroupBox2", "type": "TGroupBox"}, "panel3": {"name": "Panel3", "type": "TPanel"}, "panel12": {"name": "Panel12", "type": "TPanel"}, "creditvalue": {"name": "creditvalue", "type": "TCurrencyEdit"}, "panel13": {"name": "Panel13", "type": "TPanel"}, "ekv": {"name": "ekv", "type": "TCurrencyEdit"}, "groupbox3": {"name": "GroupBox3", "type": "TGroupBox"}, "panel14": {"name": "Panel14", "type": "TPanel"}, "convertationsymbollookup": {"name": "ConvertationSymbolLookUp", "type": "TDBLookupComboBox"}, "searchedit2": {"name": "SearchEdit2", "type": "TSearchEdit"}, "dbedit7": {"name": "DBEdit7", "type": "TDBEdit"}, "panel15": {"name": "Panel15", "type": "TPanel"}, "cashsymbollookup": {"name": "CashSymbolLookUp", "type": "TDBLookupComboBox"}, "searchedit3": {"name": "SearchEdit3", "type": "TSearchEdit"}, "dbedit8": {"name": "DBEdit8", "type": "TDBEdit"}, "panel16": {"name": "Panel16", "type": "TPanel"}, "dblookupcombobox5": {"name": "DBLookupComboBox5", "type": "TDBLookupComboBox"}, "searchedit1": {"name": "SearchEdit1", "type": "TSearchEdit"}, "groupbox4": {"name": "GroupBox4", "type": "TGroupBox"}, "label5": {"name": "Label5", "type": "TLabel"}, "label6": {"name": "Label6", "type": "TLabel"}, "label7": {"name": "Label7", "type": "TLabel"}, "transdate": {"name": "TransDate", "type": "TDateTimePicker"}, "dbeditoperationno": {"name": "DBEditOperationNo", "type": "TDBEdit"}, "dbedit4": {"name": "DBEdit4", "type": "TDBEdit"}, "dblookupcombobox6": {"name": "DBLookupComboBox6", "type": "TDBLookupComboBox"}, "searchedit4": {"name": "SearchEdit4", "type": "TSearchEdit"}, "dbedit9": {"name": "DBEdit9", "type": "TDBEdit"}, "panel17": {"name": "Panel17", "type": "TPanel"}, "buttonapply": {"name": "ButtonApply", "type": "TButton"}, "buttoncancel": {"name": "ButtonCancel", "type": "TButton"}, "buttonclose": {"name": "ButtonClose", "type": "TButton"}, "debtvalue": {"name": "debtvalue", "type": "TCurrencyEdit"}, "commission_id": {"name": "commission_id", "type": "TEdit"}, "commission_trans_data": {"name": "commission_trans_data", "type": "TDataSource"}, "commission_trans_km": {"name": "commission_trans_km", "type": "TOracleDataSet"}, "edittransname": {"name": "EditTransName", "type": "TEdit"}}, {});
  U.init(async () => {
    U.var_("FormAccIn", null, "TFormAccIn");
  });
  U.method("TFormAccIn", "acc_idChange", async function acc_idChange(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t1 = (await $.mv((await $.v(C, "DataMod_Buyers")), "Archost"));
    await $.stmt($.wcall([$t1], "Close", [], C));
    await $.mcall((await $.wv([$t1], "SQL", C, false)), "Clear", []);
    await $.mset((await $.wv([$t1], "SQL", C, false)), "Text", $.add($.add($.add("Select c.rowid ,c.* from account c where id= ", "'"), (await $.mv((await $.wv([$t1], "acc_id", C, false)), "Text"))), "'"));
    await $.stmt($.wcall([$t1], "Open", [], C));
    await $.mset((await $.wv([$t1], "DebtAccSearchEdit", C, false)), "Text", (await $.mv((await $.wcall([$t1], "FieldByName", ["acc_no"], C)), "AsString")));
    await $.mset((await $.wv([$t1], "dbedit1", C, false)), "text", (await $.mv((await $.wv([$t1], "DebtAccSearchEdit", C, false)), "Text")));
  }
  {
    const $t2 = (await $.mv((await $.v(C, "DataMod_Buyers")), "Archost"));
    await $.stmt($.wcall([$t2], "Close", [], C));
    await $.mcall((await $.wv([$t2], "SQL", C, false)), "Clear", []);
    await $.mset((await $.wv([$t2], "SQL", C, false)), "Text", $.add($.add($.add("Select c.rowid ,c.* from account c where id= ", "'"), (await $.mv((await $.wv([$t2], "acc_id", C, false)), "Text"))), "'"));
    await $.stmt($.wcall([$t2], "Open", [], C));
    await $.mset((await $.wv([$t2], "val_code", C, false)), "Text", (await $.mv((await $.wcall([$t2], "FieldByName", ["val_acc"], C)), "AsString")));
  }
  {
    const $t3 = (await $.mv((await $.v(C, "DataMod_Buyers")), "Archost"));
    await $.stmt($.wcall([$t3], "Close", [], C));
    await $.mcall((await $.wv([$t3], "SQL", C, false)), "Clear", []);
    await $.mset((await $.wv([$t3], "SQL", C, false)), "Text", $.add($.add($.add("Select c.rowid ,c.* from account c where id= ", "'"), (await $.mv((await $.wv([$t3], "acc_id", C, false)), "Text"))), "'"));
    await $.stmt($.wcall([$t3], "Open", [], C));
    await $.mset((await $.wv([$t3], "dbedit2", C, false)), "Text", (await $.mv((await $.wcall([$t3], "FieldByName", ["name"], C)), "AsString")));
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFormAccIn", "DebtAccSearchEditChange", async function DebtAccSearchEditChange(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFormAccIn", "val_codeChange", async function val_codeChange(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t4 = (await $.mv((await $.v(C, "DataMod_Buyers")), "archost"));
    await $.stmt($.wcall([$t4], "Close", [], C));
    await $.mcall((await $.wv([$t4], "SQL", C, false)), "Clear", []);
    await $.mset((await $.wv([$t4], "SQL", C, false)), "Text", $.add($.add($.add("Select c.rowid ,c.* from temprate c where val_kod= ", "'"), (await $.mv((await $.wv([$t4], "val_code", C, false)), "Text"))), "'"));
    await $.stmt($.wcall([$t4], "Open", [], C));
    await $.mset((await $.wv([$t4], "editrate", C, false)), "Text", (await $.mv((await $.wcall([$t4], "FieldByName", ["ostat"], C)), "AsString")));
  }
  {
    const $t5 = (await $.mv((await $.v(C, "DataMod_Buyers")), "archost"));
    await $.stmt($.wcall([$t5], "Close", [], C));
    await $.mcall((await $.wv([$t5], "SQL", C, false)), "Clear", []);
    await $.mset((await $.wv([$t5], "SQL", C, false)), "Text", $.add($.add($.add("Select c.rowid ,c.* from avalute_t c where valute= ", "'"), (await $.mv((await $.wv([$t5], "val_code", C, false)), "Text"))), "'"));
    await $.stmt($.wcall([$t5], "Open", [], C));
    await $.mset((await $.wv([$t5], "editvalute", C, false)), "Text", (await $.mv((await $.wcall([$t5], "FieldByName", ["valu_name"], C)), "AsString")));
  }
  {
    const $t6 = (await $.mv((await $.v(C, "DataMod_Buyers")), "archost"));
    await $.stmt($.wcall([$t6], "Close", [], C));
    await $.mcall((await $.wv([$t6], "SQL", C, false)), "Clear", []);
    await $.mset((await $.wv([$t6], "SQL", C, false)), "Text", $.add($.add($.add("Select c.rowid ,c.* from avalute_t c where valute= ", "'"), (await $.mv((await $.wv([$t6], "val_code", C, false)), "Text"))), "'"));
    await $.stmt($.wcall([$t6], "Open", [], C));
    await $.mset((await $.wv([$t6], "valname", C, false)), "Text", (await $.mv((await $.wcall([$t6], "FieldByName", ["val_name"], C)), "AsString")));
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFormAccIn", "acc_id_Change", async function acc_id_Change(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t7 = (await $.mv((await $.v(C, "DataMod_Buyers")), "Archost"));
    await $.stmt($.wcall([$t7], "Close", [], C));
    await $.mcall((await $.wv([$t7], "SQL", C, false)), "Clear", []);
    await $.mset((await $.wv([$t7], "SQL", C, false)), "Text", $.add($.add($.add("Select c.rowid ,c.* from account c where id= ", "'"), (await $.mv((await $.wv([$t7], "acc_id_", C, false)), "Text"))), "'"));
    await $.stmt($.wcall([$t7], "Open", [], C));
    await $.mset((await $.wv([$t7], "CreditAccSearchEdit", C, false)), "Text", (await $.mv((await $.wcall([$t7], "FieldByName", ["acc_no"], C)), "AsString")));
    await $.mset((await $.wv([$t7], "dbedit5", C, false)), "text", (await $.mv((await $.wv([$t7], "DebtAccSearchEdit", C, false)), "Text")));
  }
  {
    const $t8 = (await $.mv((await $.v(C, "DataMod_Buyers")), "Archost"));
    await $.stmt($.wcall([$t8], "Close", [], C));
    await $.mcall((await $.wv([$t8], "SQL", C, false)), "Clear", []);
    await $.mset((await $.wv([$t8], "SQL", C, false)), "Text", $.add($.add($.add("Select c.rowid ,c.* from account c where id= ", "'"), (await $.mv((await $.wv([$t8], "acc_id_", C, false)), "Text"))), "'"));
    await $.stmt($.wcall([$t8], "Open", [], C));
    await $.mset((await $.wv([$t8], "cur_val_code", C, false)), "Text", (await $.mv((await $.wcall([$t8], "FieldByName", ["val_acc"], C)), "AsString")));
  }
  {
    const $t9 = (await $.mv((await $.v(C, "DataMod_Buyers")), "Archost"));
    await $.stmt($.wcall([$t9], "Close", [], C));
    await $.mcall((await $.wv([$t9], "SQL", C, false)), "Clear", []);
    await $.mset((await $.wv([$t9], "SQL", C, false)), "Text", $.add($.add($.add("Select c.rowid ,c.* from account c where id= ", "'"), (await $.mv((await $.wv([$t9], "acc_id_", C, false)), "Text"))), "'"));
    await $.stmt($.wcall([$t9], "Open", [], C));
    await $.mset((await $.wv([$t9], "dbedit3", C, false)), "Text", (await $.mv((await $.wcall([$t9], "FieldByName", ["name"], C)), "AsString")));
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFormAccIn", "cur_val_codeChange", async function cur_val_codeChange(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t10 = (await $.mv((await $.v(C, "DataMod_Buyers")), "archost"));
    await $.stmt($.wcall([$t10], "Close", [], C));
    await $.mcall((await $.wv([$t10], "SQL", C, false)), "Clear", []);
    await $.mset((await $.wv([$t10], "SQL", C, false)), "Text", $.add($.add($.add("Select c.rowid ,c.* from temprate c where val_kod= ", "'"), (await $.mv((await $.wv([$t10], "cur_val_code", C, false)), "Text"))), "'"));
    await $.stmt($.wcall([$t10], "Open", [], C));
    await $.mset((await $.wv([$t10], "editrate_", C, false)), "Text", (await $.mv((await $.wcall([$t10], "FieldByName", ["ostat"], C)), "AsString")));
  }
  {
    const $t11 = (await $.mv((await $.v(C, "DataMod_Buyers")), "archost"));
    await $.stmt($.wcall([$t11], "Close", [], C));
    await $.mcall((await $.wv([$t11], "SQL", C, false)), "Clear", []);
    await $.mset((await $.wv([$t11], "SQL", C, false)), "Text", $.add($.add($.add("Select c.rowid ,c.* from avalute_t c where valute= ", "'"), (await $.mv((await $.wv([$t11], "cur_val_code", C, false)), "Text"))), "'"));
    await $.stmt($.wcall([$t11], "Open", [], C));
    await $.mset((await $.wv([$t11], "editvalute_", C, false)), "Text", (await $.mv((await $.wcall([$t11], "FieldByName", ["valu_name"], C)), "AsString")));
  }
  {
    const $t12 = (await $.mv((await $.v(C, "DataMod_Buyers")), "archost"));
    await $.stmt($.wcall([$t12], "Close", [], C));
    await $.mcall((await $.wv([$t12], "SQL", C, false)), "Clear", []);
    await $.mset((await $.wv([$t12], "SQL", C, false)), "Text", $.add($.add($.add("Select c.rowid ,c.* from avalute_t c where valute= ", "'"), (await $.mv((await $.wv([$t12], "cur_val_code", C, false)), "Text"))), "'"));
    await $.stmt($.wcall([$t12], "Open", [], C));
    await $.mset((await $.wv([$t12], "valname_", C, false)), "Text", (await $.mv((await $.wcall([$t12], "FieldByName", ["val_name"], C)), "AsString")));
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFormAccIn", "debtvalueChange", async function debtvalueChange(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mset((await $.v(C, "Ekv")), "text", (await $.call(C, "FormatFloat", ["#.##", $.mul((await $.call(C, "Strtofloat", [(await $.mv((await $.v(C, "debtvalue")), "text"))])), (await $.call(C, "Strtofloat", [(await $.mv((await $.v(C, "editrate")), "text"))])))])));
  await $.mset((await $.v(C, "creditvalue")), "text", (await $.call(C, "FormatFloat", ["#.##", $.fdiv((await $.call(C, "Strtofloat", [(await $.mv((await $.v(C, "ekv")), "text"))])), (await $.call(C, "Strtofloat", [(await $.mv((await $.v(C, "editrate_")), "text"))])))])));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFormAccIn", "creditvalueChange", async function creditvalueChange(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mset((await $.v(C, "Ekv")), "text", (await $.call(C, "FormatFloat", ["#.##", $.mul((await $.call(C, "Strtofloat", [(await $.mv((await $.v(C, "creditvalue")), "text"))])), (await $.call(C, "Strtofloat", [(await $.mv((await $.v(C, "editrate_")), "text"))])))])));
  await $.mset((await $.v(C, "Debtvalue")), "text", (await $.call(C, "FormatFloat", ["#.##", $.fdiv((await $.call(C, "Strtofloat", [(await $.mv((await $.v(C, "ekv")), "text"))])), (await $.call(C, "Strtofloat", [(await $.mv((await $.v(C, "editrate")), "text"))])))])));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFormAccIn", "ButtonCloseClick", async function ButtonCloseClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.stmt($.call(C, "close", []));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFormAccIn", "ButtonCancelClick", async function ButtonCancelClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mset((await $.v(C, "debtvalue")), "value", 0.0);
  await $.mset((await $.v(C, "creditvalue")), "value", 0.0);
  await $.mset((await $.v(C, "ekv")), "value", 0.0);
  await $.mset((await $.v(C, "EditTransName")), "text", "");
  await $.mset((await $.v(C, "dbedit7")), "text", "");
  await $.mset((await $.v(C, "dbedit8")), "text", "");
  await $.mset((await $.v(C, "SearchEdit3")), "text", "");
  await $.mset((await $.v(C, "SearchEdit2")), "text", "");
  await $.mset((await $.v(C, "SearchEdit1")), "text", "");
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFormAccIn", "ButtonApplyClick", async function ButtonApplyClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "p_debitid": 0, "p_creditid": 0, "p_amount": 0, "p_transname": ''};
  await $.fixArgs(L0, ["sender"]);
  L0["p_debitid"] = (await $.call(C, "strtoint", [(await $.mv((await $.v(C, "acc_id")), "text"))]));
  L0["p_creditid"] = (await $.call(C, "strtoint", [(await $.mv((await $.v(C, "acc_id_")), "text"))]));
  L0["p_amount"] = (await $.mv((await $.v(C, "DebtValue")), "Value"));
  L0["p_transname"] = (await $.mv((await $.v(C, "EditTransName")), "Text"));
  {
    const $t13 = (await $.v(C, "DataMod_Buyers"));
    await $.stmt((await $.mcall((await $.wv([$t13], "CC_GENERAL", C, false)), "CallProcedure", ["set_Transaction", [(await $.wv([$t13], "p_DebitID", { get: async () => L0["p_debitid"], set: async (v) => { L0["p_debitid"] = v; }, local: true }, false)), (await $.wv([$t13], "p_CreditID", { get: async () => L0["p_creditid"], set: async (v) => { L0["p_creditid"] = v; }, local: true }, false)), (await $.wv([$t13], "p_Amount", { get: async () => L0["p_amount"], set: async (v) => { L0["p_amount"] = v; }, local: true }, false)), (await $.wv([$t13], "p_TransName", { get: async () => L0["p_transname"], set: async (v) => { L0["p_transname"] = v; }, local: true }, false))]])));
  }
  await $.stmt($.call(C, "Close", []));
  await $.mcall((await $.mv((await $.v(C, "DataMod_Buyers")), "Accno")), "Refresh", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFormAccIn", "DBLookupComboBox5CloseUp", async function DBLookupComboBox5CloseUp(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mset((await $.v(C, "EditTransName")), "Text", (await $.mv((await $.v(C, "DBLookupComboBox5")), "keyvalue")));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFormAccIn", "FormShow", async function FormShow(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.gt((await $.mv((await $.mcall((await $.mv((await $.v(C, "CC_AccInForm")), "CC_InForm")), "fieldbyname", ["debt"])), "asinteger")), 0))) {
    await $.mcall((await $.mv((await $.v(C, "DataMod_Buyers")), "Sysdat")), "Open", []);
    await $.mset((await $.v(C, "acc_id")), "text", (await $.mv((await $.mcall((await $.mv((await $.v(C, "CC_AccInForm")), "CC_InForm")), "fieldbyname", ["debt"])), "asstring")));
    await $.mset((await $.v(C, "acc_id_")), "text", (await $.mv((await $.mcall((await $.mv((await $.v(C, "DataMod_Buyers")), "Accno")), "fieldbyname", ["id"])), "asstring")));
    await $.mset((await $.v(C, "commission_id")), "text", (await $.mv((await $.mcall((await $.mv((await $.v(C, "CC_AccInForm")), "CC_InForm")), "fieldbyname", ["id"])), "asstring")));
    await $.mset((await $.v(C, "TransDate")), "date", (await $.mv((await $.mcall((await $.mv((await $.v(C, "DataMod_Buyers")), "Sysdat")), "Fieldbyname", ["tek_dat"])), "asdatetime")));
    await $.mset((await $.v(C, "EditTransName")), "text", (await $.mv((await $.mcall((await $.mv((await $.v(C, "CC_AccInForm")), "CC_InForm")), "fieldbyname", ["Name"])), "asstring")));
  } else {
    if ($.truthy($.gt((await $.mv((await $.mcall((await $.mv((await $.v(C, "CC_AccInForm")), "CC_InForm")), "fieldbyname", ["credit"])), "asinteger")), 0))) {
      await $.mcall((await $.mv((await $.v(C, "DataMod_Buyers")), "Sysdat")), "Open", []);
      await $.mset((await $.v(C, "acc_id")), "text", (await $.mv((await $.mcall((await $.mv((await $.v(C, "DataMod_Buyers")), "Accno")), "fieldbyname", ["id"])), "asstring")));
      await $.mset((await $.v(C, "acc_id_")), "text", (await $.mv((await $.mcall((await $.mv((await $.v(C, "CC_AccInForm")), "CC_InForm")), "fieldbyname", ["credit"])), "asstring")));
      await $.mset((await $.v(C, "commission_id")), "text", (await $.mv((await $.mcall((await $.mv((await $.v(C, "CC_AccInForm")), "CC_InForm")), "fieldbyname", ["id"])), "asstring")));
      await $.mset((await $.v(C, "TransDate")), "date", (await $.mv((await $.mcall((await $.mv((await $.v(C, "DataMod_Buyers")), "Sysdat")), "Fieldbyname", ["tek_dat"])), "asdatetime")));
      await $.mset((await $.v(C, "EditTransName")), "text", (await $.mv((await $.mcall((await $.mv((await $.v(C, "CC_AccInForm")), "CC_InForm")), "fieldbyname", ["Name"])), "asstring")));
    }
  }
  await $.mcall((await $.v(C, "debtvalue")), "SetFocus", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  return U;
}
