// Generated from OutForm_Unit.pas by pas2js — do not edit by hand; regenerate instead.
/* eslint-disable */
// @ts-nocheck

export default function define($) {
  const U = $.unit("OutForm_Unit", ["Windows", "Messages", "SysUtils", "Classes", "Graphics", "Controls", "Forms", "Dialogs", "NLSLocalizer", "StdCtrls", "ComCtrls", "CurrencyEdit", "SearchEdit", "Mask", "DBCtrls", "ExtCtrls", "Db", "OracleData", "CO_datamod_impl"]);
  const C = [U];
  U.enumType("ttransactionside", 3);
  U.const("tsDebet", 0);
  U.const("tsCredit", 1);
  U.const("tsUnknown", 2);
  U.defClass("TOutForm", "TForm", {"groupbox1": {"name": "GroupBox1", "type": "TGroupBox"}, "headercontrol1": {"name": "HeaderControl1", "type": "THeaderControl"}, "panel1": {"name": "Panel1", "type": "TPanel"}, "paneldebit": {"name": "PanelDebit", "type": "TPanel"}, "paneldebitrest": {"name": "PanelDebitRest", "type": "TPanel"}, "label1": {"name": "Label1", "type": "TLabel"}, "label2": {"name": "Label2", "type": "TLabel"}, "d_ostat": {"name": "d_ostat", "type": "TLabel"}, "d_pok_ostat": {"name": "d_pok_ostat", "type": "TLabel"}, "panel4": {"name": "Panel4", "type": "TPanel"}, "dblookupcombobox1": {"name": "DBLookupComboBox1", "type": "TDBLookupComboBox"}, "dbedit1": {"name": "DBEdit1", "type": "TDBEdit"}, "panel5": {"name": "Panel5", "type": "TPanel"}, "dblookupcombobox2": {"name": "DBLookupComboBox2", "type": "TDBLookupComboBox"}, "dbedit2": {"name": "DBEdit2", "type": "TDBEdit"}, "debtaccsearchedit": {"name": "DebtAccSearchEdit", "type": "TSearchEdit"}, "acc_id_": {"name": "acc_id_", "type": "TEdit"}, "panel6": {"name": "Panel6", "type": "TPanel"}, "valcode": {"name": "ValCode", "type": "TEdit"}, "editvalute": {"name": "editvalute", "type": "TComboBox"}, "editrate": {"name": "editrate", "type": "TEdit"}, "panel2": {"name": "Panel2", "type": "TPanel"}, "panel7": {"name": "Panel7", "type": "TPanel"}, "panel8": {"name": "Panel8", "type": "TPanel"}, "label3": {"name": "Label3", "type": "TLabel"}, "label4": {"name": "Label4", "type": "TLabel"}, "c_ostat": {"name": "c_ostat", "type": "TLabel"}, "c_pok_ostat": {"name": "c_pok_ostat", "type": "TLabel"}, "panel9": {"name": "Panel9", "type": "TPanel"}, "dblookupcombobox3": {"name": "DBLookupComboBox3", "type": "TDBLookupComboBox"}, "dbedit3": {"name": "DBEdit3", "type": "TDBEdit"}, "panel10": {"name": "Panel10", "type": "TPanel"}, "dblookupcombobox4": {"name": "DBLookupComboBox4", "type": "TDBLookupComboBox"}, "dbedit5": {"name": "DBEdit5", "type": "TDBEdit"}, "creditaccsearchedit": {"name": "CreditAccSearchEdit", "type": "TSearchEdit"}, "acc_id": {"name": "acc_id", "type": "TEdit"}, "panel11": {"name": "Panel11", "type": "TPanel"}, "valcode_": {"name": "ValCode_", "type": "TEdit"}, "editvalute_": {"name": "editvalute_", "type": "TComboBox"}, "editrate_": {"name": "editrate_", "type": "TEdit"}, "edit1": {"name": "Edit1", "type": "TEdit"}, "groupbox2": {"name": "GroupBox2", "type": "TGroupBox"}, "panel3": {"name": "Panel3", "type": "TPanel"}, "panel12": {"name": "Panel12", "type": "TPanel"}, "panel13": {"name": "Panel13", "type": "TPanel"}, "groupbox3": {"name": "GroupBox3", "type": "TGroupBox"}, "panel14": {"name": "Panel14", "type": "TPanel"}, "convertationsymbollookup": {"name": "ConvertationSymbolLookUp", "type": "TDBLookupComboBox"}, "searchedit2": {"name": "SearchEdit2", "type": "TSearchEdit"}, "panel15": {"name": "Panel15", "type": "TPanel"}, "cashsymbollookup": {"name": "CashSymbolLookUp", "type": "TDBLookupComboBox"}, "searchedit3": {"name": "SearchEdit3", "type": "TSearchEdit"}, "panel16": {"name": "Panel16", "type": "TPanel"}, "dblookupcombobox5": {"name": "DBLookupComboBox5", "type": "TDBLookupComboBox"}, "dbedit6": {"name": "DBEdit6", "type": "TDBEdit"}, "searchedit1": {"name": "SearchEdit1", "type": "TSearchEdit"}, "groupbox4": {"name": "GroupBox4", "type": "TGroupBox"}, "label5": {"name": "Label5", "type": "TLabel"}, "label6": {"name": "Label6", "type": "TLabel"}, "label7": {"name": "Label7", "type": "TLabel"}, "transdate": {"name": "TransDate", "type": "TDateTimePicker"}, "dbeditoperationno": {"name": "DBEditOperationNo", "type": "TDBEdit"}, "dblookupcombobox6": {"name": "DBLookupComboBox6", "type": "TDBLookupComboBox"}, "dbedit9": {"name": "DBEdit9", "type": "TDBEdit"}, "searchedit4": {"name": "SearchEdit4", "type": "TSearchEdit"}, "panel17": {"name": "Panel17", "type": "TPanel"}, "buttonapply": {"name": "ButtonApply", "type": "TButton"}, "buttoncancel": {"name": "ButtonCancel", "type": "TButton"}, "buttonclose": {"name": "ButtonClose", "type": "TButton"}, "commission_id": {"name": "commission_id", "type": "TEdit"}, "nlslocalizer1": {"name": "NLSLocalizer1", "type": "TNLSLocalizer"}, "debtvalue": {"name": "DebtValue", "type": "TCurrencyEdit"}, "creditvalue": {"name": "CreditValue", "type": "TCurrencyEdit"}, "ekv": {"name": "Ekv", "type": "TCurrencyEdit"}, "panel19": {"name": "Panel19", "type": "TPanel"}, "countriddbedit": {"name": "CountrIDDBEdit", "type": "TEdit"}, "countridlookup": {"name": "CountrIDLookUp", "type": "TDBLookupComboBox"}, "panel18": {"name": "Panel18", "type": "TPanel"}, "reportiddbedit": {"name": "ReportIDDBEdit", "type": "TEdit"}, "reportidlookup": {"name": "ReportIDLookUp", "type": "TDBLookupComboBox"}, "debitaccdata": {"name": "DebitAccData", "type": "TOracleDataSet"}, "debitaccs": {"name": "DebitAccs", "type": "TDataSource"}, "creditaccs": {"name": "CreditAccs", "type": "TDataSource"}, "creditaccdata": {"name": "CreditAccData", "type": "TOracleDataSet"}, "button1": {"name": "Button1", "type": "TButton"}, "debitaccdataid": {"name": "DebitAccDataID", "type": "TFloatField"}, "debitaccdataacc_no": {"name": "DebitAccDataACC_NO", "type": "TStringField"}, "debitaccdataval_acc": {"name": "DebitAccDataVAL_ACC", "type": "TIntegerField"}, "debitaccdataname": {"name": "DebitAccDataNAME", "type": "TStringField"}, "debitaccdataiscacheaccount": {"name": "DebitAccDataISCACHEACCOUNT", "type": "TFloatField"}, "creditaccdataid": {"name": "CreditAccDataID", "type": "TFloatField"}, "creditaccdataacc_no": {"name": "CreditAccDataACC_NO", "type": "TStringField"}, "creditaccdataval_acc": {"name": "CreditAccDataVAL_ACC", "type": "TIntegerField"}, "creditaccdataname": {"name": "CreditAccDataNAME", "type": "TStringField"}, "creditaccdataiscacheaccount": {"name": "CreditAccDataISCACHEACCOUNT", "type": "TFloatField"}}, {});
  U.init(async () => {
    U.var_("OutForm", null, "TOutForm");
    U.var_("TransactionSide", null, "TTransactionSide");
  });
  U.method("TOutForm", "SetCashSymbol", async function SetCashSymbol(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: undefined};
  {
    const $t1 = (await $.v(C, "CO_DataMod"));
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
  U.method("TOutForm", "RoundNew", async function RoundNew(Self, p0, p1) {
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
  U.method("TOutForm", "SetAmmounts", async function SetAmmounts(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"transactionside": $.copyArg(p0), result: undefined, "debetrate": 0, "creditrate": 0, "debitammount": 0, "creditammount": 0, "lammount": 0};
  await $.fixArgs(L0, ["transactionside"]);
  L0["debetrate"] = (await $.call(C, "strtofloat", [(await $.mv((await $.v(C, "editrate")), "text"))]));
  L0["creditrate"] = (await $.call(C, "strtofloat", [(await $.mv((await $.v(C, "editrate_")), "text"))]));
  { const $t3 = L0["transactionside"];
    if ($.eq($t3, (await $.v(C, "tsDebet")))) {
      L0["lammount"] = (await $.call(C, "RoundNew", [$.mul((await $.mv((await $.v(C, "debtvalue")), "Value")), L0["debetrate"]), 1000000]));
      if ($.truthy($.eq((await $.mv((await $.v(C, "ValCode")), "Text")), (await $.mv((await $.v(C, "ValCode_")), "Text"))))) {
        L0["creditammount"] = (await $.mv((await $.v(C, "DebtValue")), "Value"));
      } else {
        L0["creditammount"] = (await $.call(C, "RoundNew", [$.fdiv(L0["lammount"], L0["creditrate"]), 1000000]));
      }
      await $.mset((await $.v(C, "Ekv")), "Value", (await $.call(C, "RoundNew", [L0["lammount"], 100])));
      await $.mset((await $.v(C, "creditvalue")), "Value", (await $.call(C, "RoundNew", [L0["creditammount"], 100])));
    }
    else if ($.eq($t3, (await $.v(C, "tsCredit")))) {
      L0["lammount"] = (await $.call(C, "RoundNew", [$.mul((await $.mv((await $.v(C, "creditvalue")), "Value")), L0["creditrate"]), 1000000]));
      if ($.truthy($.eq((await $.mv((await $.v(C, "ValCode")), "Text")), (await $.mv((await $.v(C, "ValCode_")), "Text"))))) {
        L0["debitammount"] = (await $.mv((await $.v(C, "CreditValue")), "Value"));
      } else {
        L0["debitammount"] = (await $.call(C, "RoundNew", [$.fdiv(L0["lammount"], L0["debetrate"]), 1000000]));
      }
      await $.mset((await $.v(C, "Ekv")), "Value", (await $.call(C, "RoundNew", [L0["lammount"], 100])));
      await $.mset((await $.v(C, "debtvalue")), "Value", (await $.call(C, "RoundNew", [L0["debitammount"], 100])));
    }
    else if ($.eq($t3, (await $.v(C, "tsUnknown")))) {
      {
        const $t4 = Self;
        if ($.truthy($.eq((await $.mv((await $.wv([$t4], "valcode", C, false)), "text")), "0"))) {
          await $.mset((await $.wv([$t4], "debtvalue", C, false)), "Value", (await $.mv((await $.wv([$t4], "ekv", C, false)), "Value")));
        }
        if ($.truthy($.eq((await $.mv((await $.wv([$t4], "valcode_", C, false)), "text")), "0"))) {
          await $.mset((await $.wv([$t4], "creditvalue", C, false)), "Value", (await $.mv((await $.wv([$t4], "ekv", C, false)), "Value")));
        }
      }
    }
  }
  return L0.result;
}, {"params": ["TransactionSide"], "kind": "procedure", "ptypes": ["TTransactionSide"]});
  U.method("TOutForm", "ValCodeChange", async function ValCodeChange(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t5 = (await $.mv((await $.v(C, "CO_DataMod")), "temprate"));
    await $.stmt($.wcall([$t5], "Close", [], C));
    await $.mcall((await $.wv([$t5], "SQL", C, false)), "Clear", []);
    await $.mset((await $.wv([$t5], "SQL", C, false)), "Text", $.add($.add($.add("Select c.rowid ,c.* from temprate c where val_kod= ", "'"), (await $.mv((await $.wv([$t5], "valcode", C, false)), "Text"))), "'"));
    await $.stmt($.wcall([$t5], "Open", [], C));
    await $.mset((await $.wv([$t5], "editrate", C, false)), "Text", (await $.mv((await $.wcall([$t5], "FieldByName", ["ostat"], C)), "AsString")));
  }
  {
    const $t6 = (await $.mv((await $.v(C, "CO_DataMod")), "temprate"));
    await $.stmt($.wcall([$t6], "Close", [], C));
    await $.mcall((await $.wv([$t6], "SQL", C, false)), "Clear", []);
    await $.mset((await $.wv([$t6], "SQL", C, false)), "Text", $.add($.add($.add("Select c.rowid ,c.* from avalute c where valute= ", "'"), (await $.mv((await $.wv([$t6], "valcode", C, false)), "Text"))), "'"));
    await $.stmt($.wcall([$t6], "Open", [], C));
    await $.mset((await $.wv([$t6], "editvalute", C, false)), "Text", (await $.mv((await $.wcall([$t6], "FieldByName", ["valu_name"], C)), "AsString")));
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TOutForm", "editvaluteChange", async function editvaluteChange(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t7 = (await $.mv((await $.v(C, "CO_DataMod")), "avalute"));
    await $.stmt($.wcall([$t7], "Close", [], C));
    await $.mcall((await $.wv([$t7], "SQL", C, false)), "Clear", []);
    await $.mset((await $.wv([$t7], "SQL", C, false)), "Text", $.add($.add($.add("Select c.rowid ,c.* from avalute c where valu_name= ", "'"), (await $.mv((await $.wv([$t7], "editvalute", C, false)), "Text"))), "'"));
    await $.stmt($.wcall([$t7], "Open", [], C));
    await $.mset((await $.wv([$t7], "valcode", C, false)), "Text", (await $.mv((await $.wcall([$t7], "FieldByName", ["valute"], C)), "AsString")));
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TOutForm", "DebtAccSearchEditChange", async function DebtAccSearchEditChange(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mset((await $.v(C, "d_ostat")), "visible", true);
  await $.mset((await $.v(C, "d_pok_ostat")), "visible", true);
  {
    const $t8 = (await $.mv((await $.v(C, "CO_DataMod")), "archost"));
    await $.stmt($.wcall([$t8], "Close", [], C));
    await $.mcall((await $.wv([$t8], "SQL", C, false)), "Clear", []);
    await $.mset((await $.wv([$t8], "SQL", C, false)), "Text", $.add($.add($.add("Select * from tenostat where acc_id in (select id from juraccs where accno=", "'"), (await $.mv((await $.wv([$t8], "DebtAccSearchEdit", C, false)), "Text"))), "')"));
    await $.stmt($.wcall([$t8], "Open", [], C));
    await $.mset((await $.wv([$t8], "d_ostat", C, false)), "caption", (await $.mv((await $.wcall([$t8], "fieldbyname", ["ostat"], C)), "asstring")));
  }
  {
    const $t9 = (await $.mv((await $.v(C, "CO_DataMod")), "archost"));
    await $.stmt($.wcall([$t9], "Close", [], C));
    await $.mcall((await $.wv([$t9], "SQL", C, false)), "Clear", []);
    await $.mset((await $.wv([$t9], "SQL", C, false)), "Text", $.add($.add($.add("Select * from tenostat where acc_id in (select id from juraccs where accno=", "'"), (await $.mv((await $.wv([$t9], "DebtAccSearchEdit", C, false)), "Text"))), "')"));
    await $.stmt($.wcall([$t9], "Open", [], C));
    await $.mset((await $.wv([$t9], "d_pok_ostat", C, false)), "caption", (await $.mv((await $.wcall([$t9], "fieldbyname", ["pok_ostat"], C)), "asstring")));
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TOutForm", "DBLookupComboBox2Click", async function DBLookupComboBox2Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mset((await $.v(C, "DebtAccSearchEdit")), "text", (await $.mv((await $.v(C, "Dbedit2")), "text")));
  {
    const $t10 = (await $.mv((await $.v(C, "CO_DataMod")), "archost"));
    await $.stmt($.wcall([$t10], "Close", [], C));
    await $.mcall((await $.wv([$t10], "SQL", C, false)), "Clear", []);
    await $.mset((await $.wv([$t10], "SQL", C, false)), "Text", $.add($.add($.add("Select * from tenostat where acc_id in (select id from juraccs where accno=", "'"), (await $.mv((await $.wv([$t10], "DebtAccSearchEdit", C, false)), "Text"))), "')"));
    await $.stmt($.wcall([$t10], "Open", [], C));
    await $.mset((await $.wv([$t10], "d_ostat", C, false)), "caption", (await $.mv((await $.wcall([$t10], "fieldbyname", ["ostat"], C)), "asstring")));
  }
  {
    const $t11 = (await $.mv((await $.v(C, "CO_DataMod")), "archost"));
    await $.stmt($.wcall([$t11], "Close", [], C));
    await $.mcall((await $.wv([$t11], "SQL", C, false)), "Clear", []);
    await $.mset((await $.wv([$t11], "SQL", C, false)), "Text", $.add($.add($.add("Select * from tenostat where acc_id in (select id from juraccs where accno=", "'"), (await $.mv((await $.wv([$t11], "DebtAccSearchEdit", C, false)), "Text"))), "')"));
    await $.stmt($.wcall([$t11], "Open", [], C));
    await $.mset((await $.wv([$t11], "d_pok_ostat", C, false)), "caption", (await $.mv((await $.wcall([$t11], "fieldbyname", ["pok_ostat"], C)), "asstring")));
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TOutForm", "DBLookupComboBox1Click", async function DBLookupComboBox1Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mset((await $.v(C, "DebtAccSearchEdit")), "text", (await $.mv((await $.v(C, "Dbedit2")), "text")));
  {
    const $t12 = (await $.mv((await $.v(C, "CO_DataMod")), "archost"));
    await $.stmt($.wcall([$t12], "Close", [], C));
    await $.mcall((await $.wv([$t12], "SQL", C, false)), "Clear", []);
    await $.mset((await $.wv([$t12], "SQL", C, false)), "Text", $.add($.add($.add("Select * from tenostat where acc_id in (select id from juraccs where accno=", "'"), (await $.mv((await $.wv([$t12], "DebtAccSearchEdit", C, false)), "Text"))), "')"));
    await $.stmt($.wcall([$t12], "Open", [], C));
    await $.mset((await $.wv([$t12], "d_ostat", C, false)), "caption", (await $.mv((await $.wcall([$t12], "fieldbyname", ["ostat"], C)), "asstring")));
  }
  {
    const $t13 = (await $.mv((await $.v(C, "CO_DataMod")), "archost"));
    await $.stmt($.wcall([$t13], "Close", [], C));
    await $.mcall((await $.wv([$t13], "SQL", C, false)), "Clear", []);
    await $.mset((await $.wv([$t13], "SQL", C, false)), "Text", $.add($.add($.add("Select * from tenostat where acc_id in (select id from juraccs where accno=", "'"), (await $.mv((await $.wv([$t13], "DebtAccSearchEdit", C, false)), "Text"))), "')"));
    await $.stmt($.wcall([$t13], "Open", [], C));
    await $.mset((await $.wv([$t13], "d_pok_ostat", C, false)), "caption", (await $.mv((await $.wcall([$t13], "fieldbyname", ["pok_ostat"], C)), "asstring")));
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TOutForm", "ValCode_Change", async function ValCode_Change(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t14 = (await $.mv((await $.v(C, "CO_DataMod")), "temprate"));
    await $.stmt($.wcall([$t14], "Close", [], C));
    await $.mcall((await $.wv([$t14], "SQL", C, false)), "Clear", []);
    await $.mset((await $.wv([$t14], "SQL", C, false)), "Text", $.add($.add($.add("Select c.rowid ,c.* from temprate c where val_kod= ", "'"), (await $.mv((await $.wv([$t14], "valcode_", C, false)), "Text"))), "'"));
    await $.stmt($.wcall([$t14], "Open", [], C));
    await $.mset((await $.wv([$t14], "editrate_", C, false)), "Text", (await $.mv((await $.wcall([$t14], "FieldByName", ["ostat"], C)), "AsString")));
  }
  {
    const $t15 = (await $.mv((await $.v(C, "CO_DataMod")), "avalute"));
    await $.stmt($.wcall([$t15], "Close", [], C));
    await $.mcall((await $.wv([$t15], "SQL", C, false)), "Clear", []);
    await $.mset((await $.wv([$t15], "SQL", C, false)), "Text", $.add($.add($.add("Select c.rowid ,c.* from avalute_t c where valute= ", "'"), (await $.mv((await $.wv([$t15], "valcode_", C, false)), "Text"))), "'"));
    await $.stmt($.wcall([$t15], "Open", [], C));
    await $.mset((await $.wv([$t15], "editvalute_", C, false)), "Text", (await $.mv((await $.wcall([$t15], "FieldByName", ["valu_name"], C)), "AsString")));
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TOutForm", "editvalute_Change", async function editvalute_Change(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t16 = (await $.mv((await $.v(C, "CO_DataMod")), "avalute"));
    await $.stmt($.wcall([$t16], "Close", [], C));
    await $.mcall((await $.wv([$t16], "SQL", C, false)), "Clear", []);
    await $.mset((await $.wv([$t16], "SQL", C, false)), "Text", $.add($.add($.add("Select c.rowid ,c.* from avalute c where valu_name= ", "'"), (await $.mv((await $.wv([$t16], "editvalute_", C, false)), "Text"))), "'"));
    await $.stmt($.wcall([$t16], "Open", [], C));
    await $.mset((await $.wv([$t16], "valcode_", C, false)), "Text", (await $.mv((await $.wcall([$t16], "FieldByName", ["valute"], C)), "AsString")));
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TOutForm", "CreditAccSearchEditChange", async function CreditAccSearchEditChange(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t17 = (await $.mv((await $.v(C, "CO_DataMod")), "archost"));
    await $.stmt($.wcall([$t17], "Close", [], C));
    await $.mcall((await $.wv([$t17], "SQL", C, false)), "Clear", []);
    await $.mset((await $.wv([$t17], "SQL", C, false)), "Text", $.add($.add($.add("Select * from tenostat where acc_id in (select id from juraccs where accno=", "'"), (await $.mv((await $.wv([$t17], "creditAccSearchEdit", C, false)), "Text"))), "')"));
    await $.stmt($.wcall([$t17], "Open", [], C));
    await $.mset((await $.wv([$t17], "c_ostat", C, false)), "caption", (await $.mv((await $.wcall([$t17], "fieldbyname", ["ostat"], C)), "asstring")));
  }
  {
    const $t18 = (await $.mv((await $.v(C, "CO_DataMod")), "archost"));
    await $.stmt($.wcall([$t18], "Close", [], C));
    await $.mcall((await $.wv([$t18], "SQL", C, false)), "Clear", []);
    await $.mset((await $.wv([$t18], "SQL", C, false)), "Text", $.add($.add($.add("Select * from tenostat where acc_id in (select id from juraccs where accno=", "'"), (await $.mv((await $.wv([$t18], "creditAccSearchEdit", C, false)), "Text"))), "')"));
    await $.stmt($.wcall([$t18], "Open", [], C));
    await $.mset((await $.wv([$t18], "c_pok_ostat", C, false)), "caption", (await $.mv((await $.wcall([$t18], "fieldbyname", ["pok_ostat"], C)), "asstring")));
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TOutForm", "acc_idChange", async function acc_idChange(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t19 = (await $.mv((await $.v(C, "CO_DataMod")), "ACC"));
    await $.stmt($.wcall([$t19], "Close", [], C));
    await $.mcall((await $.wv([$t19], "SQL", C, false)), "Clear", []);
    await $.mset((await $.wv([$t19], "SQL", C, false)), "Text", $.add($.add($.add("Select c.rowid ,c.* from account c where id= ", "'"), (await $.mv((await $.wv([$t19], "acc_id", C, false)), "Text"))), "'"));
    await $.stmt($.wcall([$t19], "Open", [], C));
    await $.mset((await $.wv([$t19], "creditAccSearchEdit", C, false)), "Text", (await $.mv((await $.wcall([$t19], "FieldByName", ["acc_no"], C)), "AsString")));
    await $.mset((await $.wv([$t19], "dbedit5", C, false)), "text", (await $.mv((await $.wv([$t19], "CreditAccSearchEdit", C, false)), "Text")));
  }
  {
    const $t20 = (await $.mv((await $.v(C, "CO_DataMod")), "ACC"));
    await $.stmt($.wcall([$t20], "Close", [], C));
    await $.mcall((await $.wv([$t20], "SQL", C, false)), "Clear", []);
    await $.mset((await $.wv([$t20], "SQL", C, false)), "Text", $.add($.add($.add("Select c.rowid ,c.* from account c where id= ", "'"), (await $.mv((await $.wv([$t20], "acc_id", C, false)), "Text"))), "'"));
    await $.stmt($.wcall([$t20], "Open", [], C));
    await $.mset((await $.wv([$t20], "valcode_", C, false)), "Text", (await $.mv((await $.wcall([$t20], "FieldByName", ["val_acc"], C)), "AsString")));
  }
  {
    const $t21 = (await $.mv((await $.v(C, "CO_DataMod")), "ACC"));
    await $.stmt($.wcall([$t21], "Close", [], C));
    await $.mcall((await $.wv([$t21], "SQL", C, false)), "Clear", []);
    await $.mset((await $.wv([$t21], "SQL", C, false)), "Text", $.add($.add($.add("Select c.rowid ,c.* from account c where id= ", "'"), (await $.mv((await $.wv([$t21], "acc_id", C, false)), "Text"))), "'"));
    await $.stmt($.wcall([$t21], "Open", [], C));
    await $.mset((await $.wv([$t21], "dbedit3", C, false)), "Text", (await $.mv((await $.wcall([$t21], "FieldByName", ["name"], C)), "AsString")));
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.func("CutEditText", async function CutEditText(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "x": 0, "sel": 0};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t22 = (await $.call(C, "TCurrencyEdit", [L0["sender"]]));
    if ($.truthy($.eq((await $.wv([$t22], "DecimalSeparator", C, false)), (await $.wv([$t22], "ThousandSeparator", C, false))))) {
      return L0.result;
    }
    if ($.truthy($.eq((await $.wcall([$t22], "Pos", [(await $.wv([$t22], "DecimalSeparator", C, false)), (await $.wv([$t22], "Text", C, false))], C)), 0))) {
      return L0.result;
    }
    await $.wset([$t22], "Sel", (await $.wv([$t22], "SelStart", C, false)), { get: async () => L0["sel"], set: async (v) => { L0["sel"] = v; }, local: true });
    await $.wset([$t22], "X", $.sub($.sub((await $.wcall([$t22], "Length", [(await $.wv([$t22], "Text", C, false))], C)), (await $.wcall([$t22], "Pos", [(await $.wv([$t22], "DecimalSeparator", C, false)), (await $.wv([$t22], "Text", C, false))], C))), (await $.wv([$t22], "CurrencyDecimals", C, false))), { get: async () => L0["x"], set: async (v) => { L0["x"] = v; }, local: true });
    if ($.truthy(($.gt((await $.wv([$t22], "X", { get: async () => L0["x"], set: async (v) => { L0["x"] = v; }, local: true }, false)), 0)))) {
      await $.wset([$t22], "Text", (await $.wcall([$t22], "Copy", [(await $.wv([$t22], "Text", C, false)), 0, ($.sub((await $.wcall([$t22], "Length", [(await $.wv([$t22], "Text", C, false))], C)), (await $.wv([$t22], "X", { get: async () => L0["x"], set: async (v) => { L0["x"] = v; }, local: true }, false))))], C)), C);
      await $.wset([$t22], "SelStart", (await $.wv([$t22], "Sel", { get: async () => L0["sel"], set: async (v) => { L0["sel"] = v; }, local: true }, false)), C);
    }
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TOutForm", "DebtValueChange", async function DebtValueChange(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.stmt((await $.call(C, "CutEditText", [L0["sender"]])));
  if ($.truthy($.eq((await $.mv((await $.call(C, "TCurrencyEdit", [L0["sender"]])), "Text")), (await $.v(C, "EmptyStr"))))) {
    await $.mset((await $.call(C, "TCurrencyEdit", [L0["sender"]])), "Value", 0);
  }
  { const $t23 = (await $.mv((await $.call(C, "TCurrencyEdit", [L0["sender"]])), "Tag"));
    if ($.eq($t23, 1)) {
      await $.set(C, "TransactionSide", (await $.v(C, "tsDebet")));
    }
    else if ($.eq($t23, 2)) {
      await $.set(C, "TransactionSide", (await $.v(C, "tsCredit")));
    }
    else if ($.eq($t23, 3)) {
      await $.set(C, "TransactionSide", (await $.v(C, "tsUnknown")));
    }
  }
  await $.stmt((await $.call(C, "SetAmmounts", [(await $.v(C, "TransactionSide"))])));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TOutForm", "creditvalueChange", async function creditvalueChange(Self, p0) {
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
  U.method("TOutForm", "FormActivate", async function FormActivate(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mset((await $.v(C, "TransDate")), "date", (await $.mv((await $.mcall((await $.mv((await $.v(C, "CO_DataMod")), "Sysdat")), "Fieldbyname", ["tek_dat"])), "asdatetime")));
  await $.mset((await $.v(C, "DebtAccSearchEdit")), "text", (await $.mv((await $.mcall((await $.mv((await $.v(C, "CO_DataMod")), "Account")), "fieldbyname", ["accno"])), "asstring")));
  await $.mset((await $.v(C, "CreditAccSearchEdit")), "text", (await $.mv((await $.mcall((await $.mv((await $.v(C, "CO_DataMod")), "CO_Out")), "fieldbyname", ["creditaccount"])), "asstring")));
  await $.mset((await $.v(C, "dbedit2")), "text", (await $.mv((await $.v(C, "DebtAccSearchEdit")), "text")));
  await $.mset((await $.v(C, "dbedit1")), "text", (await $.mv((await $.mcall((await $.mv((await $.v(C, "CO_DataMod")), "Account")), "fieldbyname", ["accname"])), "asstring")));
  await $.mset((await $.v(C, "valcode")), "text", (await $.mv((await $.mcall((await $.mv((await $.v(C, "CO_DataMod")), "Account")), "fieldbyname", ["accvalcode"])), "asstring")));
  await $.mset((await $.v(C, "acc_id")), "text", (await $.mv((await $.mcall((await $.mv((await $.v(C, "CO_DataMod")), "CO_Out")), "fieldbyname", ["credit"])), "asstring")));
  await $.mset((await $.v(C, "acc_id_")), "text", (await $.mv((await $.mcall((await $.mv((await $.v(C, "CO_DataMod")), "Account")), "fieldbyname", ["id"])), "asstring")));
  await $.mset((await $.v(C, "dbedit6")), "text", (await $.mv((await $.mcall((await $.mv((await $.v(C, "CO_DataMod")), "CO_Out")), "fieldbyname", ["assignment"])), "asstring")));
  await $.mset((await $.v(C, "commission_id")), "text", (await $.mv((await $.mcall((await $.mv((await $.v(C, "CO_DataMod")), "CO_Out")), "fieldbyname", ["id"])), "asstring")));
  await $.mcall((await $.mv((await $.v(C, "CO_DataMod")), "commission_trans_km")), "Open", []);
  await $.mset((await $.v(C, "dbedit9")), "text", "");
  await $.mset((await $.v(C, "ReportIDDBEdit")), "Text", "0");
  await $.mset((await $.v(C, "CountrIDDBEdit")), "Text", "0");
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TOutForm", "addvalute", async function addvalute(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: undefined, "xxx": 0};
  {
    const $t24 = (await $.mv((await $.v(C, "CO_DataMod")), "avalute"));
    await $.stmt($.wcall([$t24], "Close", [], C));
    await $.mcall((await $.wv([$t24], "SQL", C, false)), "Clear", []);
    await $.stmt((await $.mcall((await $.wv([$t24], "SQL", C, false)), "Add", ["select valu_name from avalute"])));
    await $.stmt($.wcall([$t24], "Open", [], C));
  }
  await $.mcall((await $.v(C, "editvalute")), "Clear", []);
  { const $t25 = (await $.mv((await $.mv((await $.v(C, "CO_DataMod")), "avalute")), "RecordCount"));
    L0["xxx"] = 1;
    let $t26 = true;
    for (;;) {
      if (!$t26) { L0["xxx"] = $.succ(L0["xxx"], 1); }
      $t26 = false;
      if (!($.ord(L0["xxx"]) <= $.ord($t25))) break;
      {
        const $t27 = (await $.v(C, "editvalute"));
        await $.stmt((await $.mcall((await $.wv([$t27], "Items", C, false)), "Add", [(await $.mv((await $.mcall((await $.mv((await $.wv([$t27], "CO_DataMod", C, false)), "avalute")), "FieldByName", ["valu_name"])), "AsString"))])));
      }
      await $.mcall((await $.mv((await $.v(C, "CO_DataMod")), "avalute")), "Next", []);
      await $.tick();
    }
  }
  return L0.result;
}, {"params": [], "kind": "procedure", "ptypes": []});
  U.method("TOutForm", "FormCreate", async function FormCreate(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.stmt($.call(C, "addvalute", []));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TOutForm", "ButtonApplyClick", async function ButtonApplyClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "ddate": 0, "transid": 0};
  await $.fixArgs(L0, ["sender"]);
  L0["ddate"] = (await $.call(C, "Trunc", [(await $.mv((await $.v(C, "TransDate")), "date"))]));
  if ($.truthy((await $.and_((await $.and_(($.ne((await $.mv((await $.v(C, "debtvalue")), "text")), "")), async () => ($.ne((await $.mv((await $.v(C, "creditvalue")), "text")), "")))), async () => ($.ne((await $.mv((await $.v(C, "ekv")), "text")), "")))))) {
    await $.stmt((await $.mcall((await $.mv((await $.v(C, "CO_DataMod")), "OPackage")), "CallProcedure", ["ins_commission_trans_km", [(await $.call(C, "Strtoint", [(await $.mv((await $.v(C, "commission_id")), "text"))])), (await $.call(C, "Strtoint", [(await $.mv((await $.v(C, "acc_id_")), "text"))])), (await $.call(C, "Strtoint", [(await $.mv((await $.v(C, "acc_id")), "text"))])), (await $.mv((await $.v(C, "debtvalue")), "value")), (await $.mv((await $.v(C, "creditvalue")), "value")), L0["ddate"]]])));
    await $.mcall((await $.mv((await $.v(C, "CO_DataMod")), "commission_trans_km")), "refresh", []);
  }
  if ($.truthy((await $.and_((await $.and_(($.ne((await $.mv((await $.v(C, "debtvalue")), "Text")), "")), async () => ($.ne((await $.mv((await $.v(C, "creditvalue")), "Text")), "")))), async () => ($.ne((await $.mv((await $.v(C, "ekv")), "Text")), "")))))) {
    await $.stmt((await $.mcall((await $.mv((await $.v(C, "CO_DataMod")), "OPackage")), "CallProcedure", ["ins_transaction", [(await $.call(C, "strtoint", [(await $.mv((await $.v(C, "acc_id_")), "text"))])), (await $.call(C, "strtoint", [(await $.mv((await $.v(C, "acc_id")), "text"))])), (await $.mv((await $.v(C, "debtvalue")), "value")), (await $.mv((await $.v(C, "creditvalue")), "value")), (await $.mv((await $.v(C, "dbedit6")), "text")), (await $.mv((await $.v(C, "ekv")), "value")), (await $.call(C, "strtofloat", [(await $.mv((await $.v(C, "editrate")), "text"))])), (await $.call(C, "strtofloat", [(await $.mv((await $.v(C, "editrate_")), "text"))])), (await $.mv((await $.v(C, "ReportIDLookUp")), "KeyValue")), (await $.mv((await $.v(C, "CountrIDLookUp")), "KeyValue")), (await $.mv((await $.v(C, "CashSymbolLookUp")), "KeyValue")), (await $.mv((await $.v(C, "ConvertationSymbolLookUp")), "KeyValue"))]])));
    L0["transid"] = (await $.mcall((await $.mv((await $.v(C, "CO_DataMod")), "OPackage")), "CallIntegerFunction", ["transaction_mn", []]));
    await $.stmt((await $.mcall((await $.mv((await $.v(C, "CO_DataMod")), "OSCT")), "CallProcedure", ["SetTransactions", [(await $.mv((await $.mcall((await $.mv((await $.v(C, "CO_DataMod")), "commission_trans_km")), "fieldbyname", ["id"])), "asinteger")), (await $.mv((await $.mcall((await $.mv((await $.v(C, "CO_DataMod")), "commission_trans_km")), "fieldbyname", ["debt"])), "asinteger")), (await $.mv((await $.mcall((await $.mv((await $.v(C, "CO_DataMod")), "commission_trans_km")), "fieldbyname", ["credit"])), "asinteger")), (await $.mv((await $.mcall((await $.mv((await $.v(C, "CO_DataMod")), "commission_trans_km")), "fieldbyname", ["c_value"])), "asinteger")), (await $.mv((await $.mcall((await $.mv((await $.v(C, "CO_DataMod")), "commission_trans_km")), "fieldbyname", ["d_value"])), "asinteger")), (await $.mv((await $.mcall((await $.mv((await $.v(C, "CO_DataMod")), "commission_trans_km")), "fieldbyname", ["ddate"])), "asdatetime")), L0["transid"]]])));
    await $.stmt($.call(C, "Close", []));
    await $.mcall((await $.mv((await $.v(C, "CO_DataMod")), "Transactions")), "close", []);
    await $.mcall((await $.mv((await $.v(C, "CO_DataMod")), "Transactions")), "open", []);
  }
  if ($.truthy((await $.and_((await $.and_(($.eq((await $.mv((await $.v(C, "debtvalue")), "Text")), "0")), async () => ($.eq((await $.mv((await $.v(C, "creditvalue")), "Text")), "0")))), async () => ($.eq((await $.mv((await $.v(C, "ekv")), "Text")), "0")))))) {
    await $.stmt((await $.call(C, "showmessage", ["Daxil etdiyiniz məbləğ sıfırdan böyük olmalıdır!"])));
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TOutForm", "ButtonCancelClick", async function ButtonCancelClick(Self, p0) {
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
  U.method("TOutForm", "ButtonCloseClick", async function ButtonCloseClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.stmt($.call(C, "close", []));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TOutForm", "DebtValueKeyPress", async function DebtValueKeyPress(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "key": $.asRef(p1), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.not(($.in_((await L0["key"].get()), [...$.range("0","9"), ".", "\b"]))))) {
    await L0["key"].set("\u0000");
  }
  return L0.result;
}, {"params": ["Sender", "Key"], "kind": "procedure", "ptypes": ["TObject", "Char"]});
  U.method("TOutForm", "CreditValueKeyPress", async function CreditValueKeyPress(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "key": $.asRef(p1), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.not(($.in_((await L0["key"].get()), [...$.range("0","9"), ".", "\b"]))))) {
    await L0["key"].set("\u0000");
  }
  return L0.result;
}, {"params": ["Sender", "Key"], "kind": "procedure", "ptypes": ["TObject", "Char"]});
  U.method("TOutForm", "EkvKeyPress", async function EkvKeyPress(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "key": $.asRef(p1), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.not(($.in_((await L0["key"].get()), [...$.range("0","9"), ".", "\b"]))))) {
    await L0["key"].set("\u0000");
  }
  return L0.result;
}, {"params": ["Sender", "Key"], "kind": "procedure", "ptypes": ["TObject", "Char"]});
  U.method("TOutForm", "DBLookupComboBox4Click", async function DBLookupComboBox4Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mset((await $.v(C, "CreditAccSearchEdit")), "text", (await $.mv((await $.v(C, "Dbedit5")), "text")));
  {
    const $t28 = (await $.mv((await $.v(C, "CO_DataMod")), "archost"));
    await $.stmt($.wcall([$t28], "Close", [], C));
    await $.mcall((await $.wv([$t28], "SQL", C, false)), "Clear", []);
    await $.mset((await $.wv([$t28], "SQL", C, false)), "Text", $.add($.add($.add("Select * from tenostat where acc_id in (select id from juraccs where accno=", "'"), (await $.mv((await $.wv([$t28], "CreditAccSearchEdit", C, false)), "Text"))), "')"));
    await $.stmt($.wcall([$t28], "Open", [], C));
    await $.mset((await $.wv([$t28], "c_ostat", C, false)), "caption", (await $.mv((await $.wcall([$t28], "fieldbyname", ["ostat"], C)), "asstring")));
  }
  {
    const $t29 = (await $.mv((await $.v(C, "CO_DataMod")), "archost"));
    await $.stmt($.wcall([$t29], "Close", [], C));
    await $.mcall((await $.wv([$t29], "SQL", C, false)), "Clear", []);
    await $.mset((await $.wv([$t29], "SQL", C, false)), "Text", $.add($.add($.add("Select * from tenostat where acc_id in (select id from juraccs where accno=", "'"), (await $.mv((await $.wv([$t29], "CreditAccSearchEdit", C, false)), "Text"))), "')"));
    await $.stmt($.wcall([$t29], "Open", [], C));
    await $.mset((await $.wv([$t29], "c_pok_ostat", C, false)), "caption", (await $.mv((await $.wcall([$t29], "fieldbyname", ["pok_ostat"], C)), "asstring")));
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TOutForm", "DBLookupComboBox3Click", async function DBLookupComboBox3Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mset((await $.v(C, "CreditAccSearchEdit")), "text", (await $.mv((await $.v(C, "Dbedit5")), "text")));
  {
    const $t30 = (await $.mv((await $.v(C, "CO_DataMod")), "archost"));
    await $.stmt($.wcall([$t30], "Close", [], C));
    await $.mcall((await $.wv([$t30], "SQL", C, false)), "Clear", []);
    await $.mset((await $.wv([$t30], "SQL", C, false)), "Text", $.add($.add($.add("Select * from tenostat where acc_id in (select id from juraccs where accno=", "'"), (await $.mv((await $.wv([$t30], "CreditAccSearchEdit", C, false)), "Text"))), "')"));
    await $.stmt($.wcall([$t30], "Open", [], C));
    await $.mset((await $.wv([$t30], "c_ostat", C, false)), "caption", (await $.mv((await $.wcall([$t30], "fieldbyname", ["ostat"], C)), "asstring")));
  }
  {
    const $t31 = (await $.mv((await $.v(C, "CO_DataMod")), "archost"));
    await $.stmt($.wcall([$t31], "Close", [], C));
    await $.mcall((await $.wv([$t31], "SQL", C, false)), "Clear", []);
    await $.mset((await $.wv([$t31], "SQL", C, false)), "Text", $.add($.add($.add("Select * from tenostat where acc_id in (select id from juraccs where accno=", "'"), (await $.mv((await $.wv([$t31], "CreditAccSearchEdit", C, false)), "Text"))), "')"));
    await $.stmt($.wcall([$t31], "Open", [], C));
    await $.mset((await $.wv([$t31], "c_pok_ostat", C, false)), "caption", (await $.mv((await $.wcall([$t31], "fieldbyname", ["pok_ostat"], C)), "asstring")));
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TOutForm", "ReportIDDBEditChange", async function ReportIDDBEditChange(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mset((await $.v(C, "ReportIDLookUp")), "KeyValue", (await $.mv((L0["sender"]), "Text")));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TOutForm", "CountrIDDBEditChange", async function CountrIDDBEditChange(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mset((await $.v(C, "CountrIDLookUp")), "KeyValue", (await $.mv((L0["sender"]), "Text")));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TOutForm", "ReportIDLookUpCloseUp", async function ReportIDLookUpCloseUp(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mset((await $.v(C, "ReportIDDBEdit")), "Text", (await $.mv((L0["sender"]), "keyvalue")));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TOutForm", "CountrIDLookUpCloseUp", async function CountrIDLookUpCloseUp(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mset((await $.v(C, "CountrIDDBEdit")), "Text", (await $.mv((L0["sender"]), "keyvalue")));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TOutForm", "ConvertationSymbolLookUpCloseUp", async function ConvertationSymbolLookUpCloseUp(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  try {
    await $.mset((await $.v(C, "SearchEdit2")), "Text", (await $.mv((L0["sender"]), "keyvalue")));
  } catch ($t32) {
    $.rethrowControl($t32);
    $.handled($t32);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TOutForm", "CashSymbolLookUpCloseUp", async function CashSymbolLookUpCloseUp(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  try {
    await $.mset((await $.v(C, "SearchEdit3")), "Text", (await $.mv((L0["sender"]), "keyvalue")));
  } catch ($t33) {
    $.rethrowControl($t33);
    $.handled($t33);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TOutForm", "SearchEdit3Change", async function SearchEdit3Change(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mset((await $.v(C, "CashSymbolLookUp")), "KeyValue", (await $.mv((L0["sender"]), "Text")));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TOutForm", "SearchEdit2Change", async function SearchEdit2Change(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mset((await $.v(C, "ConvertationSymbolLookUp")), "KeyValue", (await $.mv((L0["sender"]), "Text")));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TOutForm", "Button1Click", async function Button1Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t34 = (await $.v(C, "CO_DataMod"));
    await $.mcall((await $.wv([$t34], "Cntries", C, false)), "refresh", []);
    await $.mcall((await $.wv([$t34], "ReportDesc", C, false)), "refresh", []);
    await $.mcall((await $.wv([$t34], "ConvertationSymbols", C, false)), "refresh", []);
    await $.mcall((await $.wv([$t34], "CashSymbols", C, false)), "refresh", []);
    await $.mcall((await $.wv([$t34], "Trdestination", C, false)), "refresh", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TOutForm", "SearchEdit3Enter", async function SearchEdit3Enter(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.stmt($.call(C, "SetCashSymbol", []));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  return U;
}
