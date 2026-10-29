// Generated from InFormUnit.pas by pas2js — do not edit by hand; regenerate instead.
/* eslint-disable */
// @ts-nocheck

export default function define($) {
  const U = $.unit("InFormUnit", ["Windows", "Messages", "SysUtils", "Classes", "Graphics", "Controls", "Forms", "Dialogs", "NLSLocalizer", "StdCtrls", "ComCtrls", "CurrencyEdit", "SearchEdit", "Mask", "DBCtrls", "ExtCtrls", "Db", "OracleData", "co_datamod_impl"]);
  const C = [U];
  U.enumType("ttransactionside", 3);
  U.const("tsDebet", 0);
  U.const("tsCredit", 1);
  U.const("tsUnknown", 2);
  U.defClass("TInForm", "TForm", {"groupbox1": {"name": "GroupBox1", "type": "TGroupBox"}, "headercontrol1": {"name": "HeaderControl1", "type": "THeaderControl"}, "panel1": {"name": "Panel1", "type": "TPanel"}, "paneldebit": {"name": "PanelDebit", "type": "TPanel"}, "paneldebitrest": {"name": "PanelDebitRest", "type": "TPanel"}, "label1": {"name": "Label1", "type": "TLabel"}, "label2": {"name": "Label2", "type": "TLabel"}, "d_ostat": {"name": "D_Ostat", "type": "TLabel"}, "d_pok_ostat": {"name": "D_Pok_Ostat", "type": "TLabel"}, "panel4": {"name": "Panel4", "type": "TPanel"}, "dblookupcombobox2": {"name": "DBLookupComboBox2", "type": "TDBLookupComboBox"}, "dbedit2": {"name": "DBEdit2", "type": "TDBEdit"}, "panel5": {"name": "Panel5", "type": "TPanel"}, "debtaccsearchedit": {"name": "DebtAccSearchEdit", "type": "TSearchEdit"}, "dblookupcombobox1": {"name": "DBLookupComboBox1", "type": "TDBLookupComboBox"}, "dbedit1": {"name": "DBEdit1", "type": "TDBEdit"}, "acc_id": {"name": "Acc_ID", "type": "TEdit"}, "panel6": {"name": "Panel6", "type": "TPanel"}, "editvalute": {"name": "EditValute", "type": "TComboBox"}, "val_code": {"name": "val_code", "type": "TEdit"}, "editrate": {"name": "editrate", "type": "TEdit"}, "valname": {"name": "valname", "type": "TEdit"}, "panel2": {"name": "Panel2", "type": "TPanel"}, "panel7": {"name": "Panel7", "type": "TPanel"}, "panel8": {"name": "Panel8", "type": "TPanel"}, "label3": {"name": "Label3", "type": "TLabel"}, "label4": {"name": "Label4", "type": "TLabel"}, "c_ostat": {"name": "C_Ostat", "type": "TLabel"}, "c_pok_ostat": {"name": "C_Pok_Ostat", "type": "TLabel"}, "panel9": {"name": "Panel9", "type": "TPanel"}, "dblookupcombobox3": {"name": "DBLookupComboBox3", "type": "TDBLookupComboBox"}, "dbedit3": {"name": "DBEdit3", "type": "TDBEdit"}, "panel10": {"name": "Panel10", "type": "TPanel"}, "creditaccsearchedit": {"name": "CreditAccSearchEdit", "type": "TSearchEdit"}, "dblookupcombobox4": {"name": "DBLookupComboBox4", "type": "TDBLookupComboBox"}, "dbedit5": {"name": "DBEdit5", "type": "TDBEdit"}, "acc_id_": {"name": "Acc_ID_", "type": "TEdit"}, "panel11": {"name": "Panel11", "type": "TPanel"}, "editrate_": {"name": "editrate_", "type": "TEdit"}, "editvalute_": {"name": "EditValute_", "type": "TComboBox"}, "cur_val_code": {"name": "cur_val_code", "type": "TEdit"}, "valname_": {"name": "valname_", "type": "TEdit"}, "groupbox2": {"name": "GroupBox2", "type": "TGroupBox"}, "panel3": {"name": "Panel3", "type": "TPanel"}, "panel12": {"name": "Panel12", "type": "TPanel"}, "panel13": {"name": "Panel13", "type": "TPanel"}, "groupbox3": {"name": "GroupBox3", "type": "TGroupBox"}, "panel14": {"name": "Panel14", "type": "TPanel"}, "convertationsymbollookup": {"name": "ConvertationSymbolLookUp", "type": "TDBLookupComboBox"}, "searchedit2": {"name": "SearchEdit2", "type": "TSearchEdit"}, "panel15": {"name": "Panel15", "type": "TPanel"}, "cashsymbollookup": {"name": "CashSymbolLookUp", "type": "TDBLookupComboBox"}, "searchedit3": {"name": "SearchEdit3", "type": "TSearchEdit"}, "panel16": {"name": "Panel16", "type": "TPanel"}, "dblookupcombobox5": {"name": "DBLookupComboBox5", "type": "TDBLookupComboBox"}, "dbedit6": {"name": "DBEdit6", "type": "TDBEdit"}, "searchedit1": {"name": "SearchEdit1", "type": "TSearchEdit"}, "groupbox4": {"name": "GroupBox4", "type": "TGroupBox"}, "label5": {"name": "Label5", "type": "TLabel"}, "label6": {"name": "Label6", "type": "TLabel"}, "label7": {"name": "Label7", "type": "TLabel"}, "transdate": {"name": "TransDate", "type": "TDateTimePicker"}, "dbeditoperationno": {"name": "DBEditOperationNo", "type": "TDBEdit"}, "dbedit4": {"name": "DBEdit4", "type": "TDBEdit"}, "dblookupcombobox6": {"name": "DBLookupComboBox6", "type": "TDBLookupComboBox"}, "searchedit4": {"name": "SearchEdit4", "type": "TSearchEdit"}, "dbedit9": {"name": "DBEdit9", "type": "TDBEdit"}, "panel17": {"name": "Panel17", "type": "TPanel"}, "buttonapply": {"name": "ButtonApply", "type": "TButton"}, "buttoncancel": {"name": "ButtonCancel", "type": "TButton"}, "buttonclose": {"name": "ButtonClose", "type": "TButton"}, "commission_id": {"name": "commission_id", "type": "TEdit"}, "debtvalue": {"name": "DebtValue", "type": "TCurrencyEdit"}, "creditvalue": {"name": "CreditValue", "type": "TCurrencyEdit"}, "ekv": {"name": "Ekv", "type": "TCurrencyEdit"}, "panel18": {"name": "Panel18", "type": "TPanel"}, "reportiddbedit": {"name": "ReportIDDBEdit", "type": "TEdit"}, "reportidlookup": {"name": "ReportIDLookUp", "type": "TDBLookupComboBox"}, "panel19": {"name": "Panel19", "type": "TPanel"}, "countriddbedit": {"name": "CountrIDDBEdit", "type": "TEdit"}, "countridlookup": {"name": "CountrIDLookUp", "type": "TDBLookupComboBox"}, "button1": {"name": "Button1", "type": "TButton"}, "debitaccdata": {"name": "DebitAccData", "type": "TOracleDataSet"}, "creditaccdata": {"name": "CreditAccData", "type": "TOracleDataSet"}, "creditaccs": {"name": "CreditAccs", "type": "TDataSource"}, "debitaccs": {"name": "DebitAccs", "type": "TDataSource"}, "debitaccdataid": {"name": "DebitAccDataID", "type": "TFloatField"}, "debitaccdataacc_no": {"name": "DebitAccDataACC_NO", "type": "TStringField"}, "debitaccdataval_acc": {"name": "DebitAccDataVAL_ACC", "type": "TIntegerField"}, "debitaccdataname": {"name": "DebitAccDataNAME", "type": "TStringField"}, "debitaccdataiscacheaccount": {"name": "DebitAccDataISCACHEACCOUNT", "type": "TFloatField"}, "creditaccdataid": {"name": "CreditAccDataID", "type": "TFloatField"}, "creditaccdataacc_no": {"name": "CreditAccDataACC_NO", "type": "TStringField"}, "creditaccdataval_acc": {"name": "CreditAccDataVAL_ACC", "type": "TIntegerField"}, "creditaccdataname": {"name": "CreditAccDataNAME", "type": "TStringField"}, "creditaccdataiscacheaccount": {"name": "CreditAccDataISCACHEACCOUNT", "type": "TFloatField"}, "debitcurrencydata": {"name": "DebitCurrencyData", "type": "TOracleDataSet"}, "debitcurrencydataid": {"name": "DebitCurrencyDataID", "type": "TIntegerField"}, "debitcurrencydatasname": {"name": "DebitCurrencyDataSNAME", "type": "TStringField"}, "debitcurrencydataname": {"name": "DebitCurrencyDataNAME", "type": "TStringField"}, "debitcurrencydatarate": {"name": "DebitCurrencyDataRATE", "type": "TFloatField"}, "creditcurrencydata": {"name": "CreditCurrencyData", "type": "TOracleDataSet"}, "creditcurrencydataid": {"name": "CreditCurrencyDataID", "type": "TIntegerField"}, "creditcurrencydatasname": {"name": "CreditCurrencyDataSNAME", "type": "TStringField"}, "creditcurrencydataname": {"name": "CreditCurrencyDataNAME", "type": "TStringField"}, "creditcurrencydatarate": {"name": "CreditCurrencyDataRATE", "type": "TFloatField"}, "creditcurrency": {"name": "CreditCurrency", "type": "TDataSource"}, "debitcurrency": {"name": "DebitCurrency", "type": "TDataSource"}, "nlslocalizer1": {"name": "NLSLocalizer1", "type": "TNLSLocalizer"}}, {});
  U.init(async () => {
    U.var_("InForm", null, "TInForm");
    U.var_("TransactionSide", null, "TTransactionSide");
  });
  U.method("TInForm", "SetCashSymbol", async function SetCashSymbol(Self) {
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
  U.method("TInForm", "RoundNew", async function RoundNew(Self, p0, p1) {
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
  U.method("TInForm", "SetAmmounts", async function SetAmmounts(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"transactionside": $.copyArg(p0), result: undefined, "debetrate": 0, "creditrate": 0, "debitammount": 0, "creditammount": 0, "lammount": 0};
  await $.fixArgs(L0, ["transactionside"]);
  L0["debetrate"] = (await $.call(C, "strtofloat", [(await $.mv((await $.v(C, "editrate")), "text"))]));
  L0["creditrate"] = (await $.call(C, "strtofloat", [(await $.mv((await $.v(C, "editrate_")), "text"))]));
  { const $t3 = L0["transactionside"];
    if ($.eq($t3, (await $.v(C, "tsDebet")))) {
      L0["lammount"] = (await $.call(C, "RoundNew", [$.mul((await $.mv((await $.v(C, "debtvalue")), "Value")), L0["debetrate"]), 1000000]));
      if ($.truthy($.eq((await $.mv((await $.mcall((await $.v(C, "DebitCurrencyData")), "FieldByName", ["ID"])), "AsInteger")), (await $.mv((await $.mcall((await $.v(C, "CreditCurrencyData")), "FieldByName", ["ID"])), "AsInteger"))))) {
        L0["creditammount"] = (await $.mv((await $.v(C, "DebtValue")), "Value"));
      } else {
        L0["creditammount"] = (await $.call(C, "RoundNew", [$.fdiv(L0["lammount"], L0["creditrate"]), 1000000]));
      }
      await $.mset((await $.v(C, "ekv")), "Value", (await $.call(C, "RoundNew", [L0["lammount"], 100])));
      await $.mset((await $.v(C, "creditvalue")), "Value", (await $.call(C, "RoundNew", [L0["creditammount"], 100])));
    }
    else if ($.eq($t3, (await $.v(C, "tsCredit")))) {
      L0["lammount"] = (await $.call(C, "RoundNew", [$.mul((await $.mv((await $.v(C, "creditvalue")), "Value")), L0["creditrate"]), 1000000]));
      if ($.truthy($.eq((await $.mv((await $.mcall((await $.v(C, "DebitCurrencyData")), "FieldByName", ["ID"])), "AsInteger")), (await $.mv((await $.mcall((await $.v(C, "CreditCurrencyData")), "FieldByName", ["ID"])), "AsInteger"))))) {
        L0["debitammount"] = (await $.mv((await $.v(C, "CreditValue")), "Value"));
      } else {
        L0["debitammount"] = (await $.call(C, "RoundNew", [$.fdiv(L0["lammount"], L0["debetrate"]), 1000000]));
      }
      await $.mset((await $.v(C, "ekv")), "Value", (await $.call(C, "RoundNew", [L0["lammount"], 100])));
      await $.mset((await $.v(C, "debtvalue")), "Value", (await $.call(C, "RoundNew", [L0["debitammount"], 100])));
    }
    else if ($.eq($t3, (await $.v(C, "tsUnknown")))) {
      {
        const $t4 = Self;
        if ($.truthy($.eq((await $.mv((await $.mcall((await $.wv([$t4], "DebitCurrencyData", C, false)), "FieldByName", ["ID"])), "AsInteger")), 0))) {
          await $.mset((await $.wv([$t4], "debtvalue", C, false)), "Value", (await $.mv((await $.wv([$t4], "ekv", C, false)), "Value")));
        }
        if ($.truthy($.eq((await $.mv((await $.mcall((await $.wv([$t4], "CreditCurrencyData", C, false)), "FieldByName", ["ID"])), "AsInteger")), 0))) {
          await $.mset((await $.wv([$t4], "creditvalue", C, false)), "Value", (await $.mv((await $.wv([$t4], "ekv", C, false)), "Value")));
        }
      }
    }
  }
  return L0.result;
}, {"params": ["TransactionSide"], "kind": "procedure", "ptypes": ["TTransactionSide"]});
  U.method("TInForm", "val_codeChange", async function val_codeChange(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t5 = (await $.mv((await $.v(C, "CO_DataMod")), "temprate"));
    await $.stmt($.wcall([$t5], "Close", [], C));
    await $.mcall((await $.wv([$t5], "SQL", C, false)), "Clear", []);
    await $.mset((await $.wv([$t5], "SQL", C, false)), "Text", $.add($.add($.add("Select c.rowid ,c.* from temprate c where val_kod= ", "'"), (await $.mv((await $.wv([$t5], "val_code", C, false)), "Text"))), "'"));
    await $.stmt($.wcall([$t5], "Open", [], C));
    await $.mset((await $.wv([$t5], "editrate", C, false)), "Text", (await $.mv((await $.wcall([$t5], "FieldByName", ["ostat"], C)), "AsString")));
  }
  {
    const $t6 = (await $.mv((await $.v(C, "CO_DataMod")), "avalute"));
    await $.stmt($.wcall([$t6], "Close", [], C));
    await $.mcall((await $.wv([$t6], "SQL", C, false)), "Clear", []);
    await $.mset((await $.wv([$t6], "SQL", C, false)), "Text", $.add($.add($.add("Select c.rowid ,c.* from avalute_t c where valute= ", "'"), (await $.mv((await $.wv([$t6], "val_code", C, false)), "Text"))), "'"));
    await $.stmt($.wcall([$t6], "Open", [], C));
    await $.mset((await $.wv([$t6], "editvalute", C, false)), "Text", (await $.mv((await $.wcall([$t6], "FieldByName", ["valu_name"], C)), "AsString")));
  }
  {
    const $t7 = (await $.mv((await $.v(C, "CO_DataMod")), "avalute"));
    await $.stmt($.wcall([$t7], "Close", [], C));
    await $.mcall((await $.wv([$t7], "SQL", C, false)), "Clear", []);
    await $.mset((await $.wv([$t7], "SQL", C, false)), "Text", $.add($.add($.add("Select c.rowid ,c.* from avalute_t c where valute= ", "'"), (await $.mv((await $.wv([$t7], "val_code", C, false)), "Text"))), "'"));
    await $.stmt($.wcall([$t7], "Open", [], C));
    await $.mset((await $.wv([$t7], "valname", C, false)), "Text", (await $.mv((await $.wcall([$t7], "FieldByName", ["val_name"], C)), "AsString")));
  }
  await $.stmt((await $.mcall((await $.v(C, "DebitCurrencyData")), "Locate", ["ID", (await $.mv((await $.v(C, "val_code")), "Text")), []])));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TInForm", "EditValuteChange", async function EditValuteChange(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t8 = (await $.mv((await $.v(C, "CO_DataMod")), "avalute"));
    await $.stmt($.wcall([$t8], "Close", [], C));
    await $.mcall((await $.wv([$t8], "SQL", C, false)), "Clear", []);
    await $.mset((await $.wv([$t8], "SQL", C, false)), "Text", $.add($.add($.add("Select c.rowid ,c.* from avalute c where valu_name= ", "'"), (await $.mv((await $.wv([$t8], "editvalute", C, false)), "Text"))), "'"));
    await $.stmt($.wcall([$t8], "Open", [], C));
    await $.mset((await $.wv([$t8], "val_code", C, false)), "Text", (await $.mv((await $.wcall([$t8], "FieldByName", ["valute"], C)), "AsString")));
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TInForm", "DebtAccSearchEditChange", async function DebtAccSearchEditChange(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mset((await $.v(C, "d_ostat")), "visible", true);
  await $.mset((await $.v(C, "d_pok_ostat")), "visible", true);
  {
    const $t9 = (await $.mv((await $.v(C, "CO_DataMod")), "archost"));
    await $.stmt($.wcall([$t9], "Close", [], C));
    await $.mcall((await $.wv([$t9], "SQL", C, false)), "Clear", []);
    await $.mset((await $.wv([$t9], "SQL", C, false)), "Text", $.add("Select * from tenostat where acc_id=", (await $.mv((await $.wv([$t9], "Acc_ID", C, false)), "Text"))));
    await $.stmt($.wcall([$t9], "Open", [], C));
    await $.mset((await $.wv([$t9], "d_ostat", C, false)), "caption", (await $.mv((await $.wcall([$t9], "fieldbyname", ["ostat"], C)), "asstring")));
    await $.mset((await $.wv([$t9], "d_pok_ostat", C, false)), "caption", (await $.mv((await $.wcall([$t9], "fieldbyname", ["pok_ostat"], C)), "asstring")));
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TInForm", "Acc_IDChange", async function Acc_IDChange(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t10 = (await $.mv((await $.v(C, "CO_DataMod")), "ACC"));
    await $.stmt($.wcall([$t10], "Close", [], C));
    await $.mcall((await $.wv([$t10], "SQL", C, false)), "Clear", []);
    await $.mset((await $.wv([$t10], "SQL", C, false)), "Text", $.add($.add($.add("Select c.rowid ,c.* from account c where id= ", "'"), (await $.mv((await $.wv([$t10], "acc_id", C, false)), "Text"))), "'"));
    await $.stmt($.wcall([$t10], "Open", [], C));
    await $.mset((await $.wv([$t10], "DebtAccSearchEdit", C, false)), "Text", (await $.mv((await $.wcall([$t10], "FieldByName", ["acc_no"], C)), "AsString")));
    await $.mset((await $.wv([$t10], "dbedit1", C, false)), "text", (await $.mv((await $.wv([$t10], "DebtAccSearchEdit", C, false)), "Text")));
  }
  {
    const $t11 = (await $.mv((await $.v(C, "CO_DataMod")), "ACC"));
    await $.stmt($.wcall([$t11], "Close", [], C));
    await $.mcall((await $.wv([$t11], "SQL", C, false)), "Clear", []);
    await $.mset((await $.wv([$t11], "SQL", C, false)), "Text", $.add($.add($.add("Select c.rowid ,c.* from account c where id= ", "'"), (await $.mv((await $.wv([$t11], "acc_id", C, false)), "Text"))), "'"));
    await $.stmt($.wcall([$t11], "Open", [], C));
    await $.mset((await $.wv([$t11], "val_code", C, false)), "Text", (await $.mv((await $.wcall([$t11], "FieldByName", ["val_acc"], C)), "AsString")));
  }
  {
    const $t12 = (await $.mv((await $.v(C, "CO_DataMod")), "ACC"));
    await $.stmt($.wcall([$t12], "Close", [], C));
    await $.mcall((await $.wv([$t12], "SQL", C, false)), "Clear", []);
    await $.mset((await $.wv([$t12], "SQL", C, false)), "Text", $.add($.add($.add("Select c.rowid ,c.* from account c where id= ", "'"), (await $.mv((await $.wv([$t12], "acc_id", C, false)), "Text"))), "'"));
    await $.stmt($.wcall([$t12], "Open", [], C));
    await $.mset((await $.wv([$t12], "dbedit2", C, false)), "Text", (await $.mv((await $.wcall([$t12], "FieldByName", ["name"], C)), "AsString")));
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TInForm", "DBEdit1Change", async function DBEdit1Change(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t13 = (await $.mv((await $.v(C, "CO_DataMod")), "archost"));
    await $.stmt($.wcall([$t13], "Close", [], C));
    await $.mcall((await $.wv([$t13], "SQL", C, false)), "Clear", []);
    await $.mset((await $.wv([$t13], "SQL", C, false)), "Text", $.add("Select * from tenostat where acc_id=", (await $.mv((await $.wv([$t13], "Acc_ID", C, false)), "Text"))));
    await $.stmt($.wcall([$t13], "Open", [], C));
    await $.mset((await $.wv([$t13], "d_ostat", C, false)), "caption", (await $.mv((await $.wcall([$t13], "fieldbyname", ["ostat"], C)), "asstring")));
    await $.mset((await $.wv([$t13], "D_Pok_Ostat", C, false)), "Caption", (await $.mv((await $.wcall([$t13], "FieldByName", ["Pok_Ostat"], C)), "AsString")));
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TInForm", "DBLookupComboBox1Click", async function DBLookupComboBox1Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mset((await $.v(C, "DebtAccSearchEdit")), "text", (await $.mv((await $.v(C, "Dbedit1")), "text")));
  await $.mset((await $.v(C, "d_ostat")), "visible", true);
  await $.mset((await $.v(C, "d_pok_ostat")), "visible", true);
  {
    const $t14 = (await $.mv((await $.v(C, "CO_DataMod")), "archost"));
    await $.stmt($.wcall([$t14], "Close", [], C));
    await $.mcall((await $.wv([$t14], "SQL", C, false)), "Clear", []);
    await $.mset((await $.wv([$t14], "SQL", C, false)), "Text", $.add("Select * from tenostat where acc_id=", (await $.mv((await $.wv([$t14], "Acc_ID", C, false)), "Text"))));
    await $.stmt($.wcall([$t14], "Open", [], C));
    await $.mset((await $.wv([$t14], "d_ostat", C, false)), "caption", (await $.mv((await $.wcall([$t14], "fieldbyname", ["ostat"], C)), "asstring")));
    await $.mset((await $.wv([$t14], "d_pok_ostat", C, false)), "caption", (await $.mv((await $.wcall([$t14], "fieldbyname", ["pok_ostat"], C)), "asstring")));
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TInForm", "addvalute", async function addvalute(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: undefined, "xxx": 0};
  {
    const $t15 = (await $.mv((await $.v(C, "CO_DataMod")), "avalute"));
    await $.stmt($.wcall([$t15], "Close", [], C));
    await $.mcall((await $.wv([$t15], "SQL", C, false)), "Clear", []);
    await $.stmt((await $.mcall((await $.wv([$t15], "SQL", C, false)), "Add", ["select valu_name from avalute"])));
    await $.stmt($.wcall([$t15], "Open", [], C));
  }
  await $.mcall((await $.v(C, "editvalute")), "Clear", []);
  await $.mcall((await $.v(C, "editvalute_")), "Clear", []);
  { const $t16 = (await $.mv((await $.mv((await $.v(C, "CO_DataMod")), "avalute")), "RecordCount"));
    L0["xxx"] = 1;
    let $t17 = true;
    for (;;) {
      if (!$t17) { L0["xxx"] = $.succ(L0["xxx"], 1); }
      $t17 = false;
      if (!($.ord(L0["xxx"]) <= $.ord($t16))) break;
      await $.stmt((await $.mcall((await $.mv((await $.v(C, "EditValute")), "Items")), "Add", [(await $.mv((await $.mcall((await $.mv((await $.v(C, "CO_DataMod")), "avalute")), "FieldByName", ["valu_name"])), "AsString"))])));
      await $.stmt((await $.mcall((await $.mv((await $.v(C, "EditValute_")), "Items")), "Add", [(await $.mv((await $.mcall((await $.mv((await $.v(C, "CO_DataMod")), "avalute")), "FieldByName", ["valu_name"])), "AsString"))])));
      await $.mcall((await $.mv((await $.v(C, "CO_DataMod")), "avalute")), "Next", []);
      await $.tick();
    }
  }
  return L0.result;
}, {"params": [], "kind": "procedure", "ptypes": []});
  U.method("TInForm", "DBLookupComboBox2Click", async function DBLookupComboBox2Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mset((await $.v(C, "DebtAccSearchEdit")), "text", (await $.mv((await $.v(C, "Dbedit1")), "text")));
  await $.mset((await $.v(C, "d_ostat")), "visible", true);
  await $.mset((await $.v(C, "d_pok_ostat")), "visible", true);
  {
    const $t18 = (await $.mv((await $.v(C, "CO_DataMod")), "archost"));
    await $.stmt($.wcall([$t18], "Close", [], C));
    await $.mcall((await $.wv([$t18], "SQL", C, false)), "Clear", []);
    await $.mset((await $.wv([$t18], "SQL", C, false)), "Text", $.add("Select * from tenostat where acc_id=", (await $.mv((await $.wv([$t18], "Acc_ID", C, false)), "Text"))));
    await $.stmt($.wcall([$t18], "Open", [], C));
    await $.mset((await $.wv([$t18], "d_ostat", C, false)), "caption", (await $.mv((await $.wcall([$t18], "fieldbyname", ["ostat"], C)), "asstring")));
    await $.mset((await $.wv([$t18], "d_pok_ostat", C, false)), "caption", (await $.mv((await $.wcall([$t18], "fieldbyname", ["pok_ostat"], C)), "asstring")));
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TInForm", "cur_val_codeChange", async function cur_val_codeChange(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t19 = (await $.mv((await $.v(C, "CO_DataMod")), "temprate"));
    await $.stmt($.wcall([$t19], "Close", [], C));
    await $.mcall((await $.wv([$t19], "SQL", C, false)), "Clear", []);
    await $.mset((await $.wv([$t19], "SQL", C, false)), "Text", $.add($.add($.add("Select c.rowid ,c.* from temprate c where val_kod= ", "'"), (await $.mv((await $.wv([$t19], "cur_val_code", C, false)), "Text"))), "'"));
    await $.stmt($.wcall([$t19], "Open", [], C));
    await $.mset((await $.wv([$t19], "editrate_", C, false)), "Text", (await $.mv((await $.wcall([$t19], "FieldByName", ["ostat"], C)), "AsString")));
  }
  {
    const $t20 = (await $.mv((await $.v(C, "CO_DataMod")), "avalute"));
    await $.stmt($.wcall([$t20], "Close", [], C));
    await $.mcall((await $.wv([$t20], "SQL", C, false)), "Clear", []);
    await $.mset((await $.wv([$t20], "SQL", C, false)), "Text", $.add($.add($.add("Select c.rowid ,c.* from avalute c where valute= ", "'"), (await $.mv((await $.wv([$t20], "cur_val_code", C, false)), "Text"))), "'"));
    await $.stmt($.wcall([$t20], "Open", [], C));
    await $.mset((await $.wv([$t20], "editvalute_", C, false)), "Text", (await $.mv((await $.wcall([$t20], "FieldByName", ["valu_name"], C)), "AsString")));
  }
  {
    const $t21 = (await $.mv((await $.v(C, "CO_DataMod")), "avalute"));
    await $.stmt($.wcall([$t21], "Close", [], C));
    await $.mcall((await $.wv([$t21], "SQL", C, false)), "Clear", []);
    await $.mset((await $.wv([$t21], "SQL", C, false)), "Text", $.add($.add($.add("Select c.rowid ,c.* from avalute c where valute= ", "'"), (await $.mv((await $.wv([$t21], "cur_val_code", C, false)), "Text"))), "'"));
    await $.stmt($.wcall([$t21], "Open", [], C));
    await $.mset((await $.wv([$t21], "valname_", C, false)), "Text", (await $.mv((await $.wcall([$t21], "FieldByName", ["val_name"], C)), "AsString")));
  }
  await $.stmt((await $.mcall((await $.v(C, "CreditCurrencyData")), "Locate", ["ID", (await $.mv((await $.v(C, "cur_val_code")), "Text")), []])));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TInForm", "EditValute_Change", async function EditValute_Change(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t22 = (await $.mv((await $.v(C, "CO_DataMod")), "avalute"));
    await $.stmt($.wcall([$t22], "Close", [], C));
    await $.mcall((await $.wv([$t22], "SQL", C, false)), "Clear", []);
    await $.mset((await $.wv([$t22], "SQL", C, false)), "Text", $.add($.add($.add("Select c.rowid ,c.* from avalute c where valu_name= ", "'"), (await $.mv((await $.wv([$t22], "editvalute_", C, false)), "Text"))), "'"));
    await $.stmt($.wcall([$t22], "Open", [], C));
    await $.mset((await $.wv([$t22], "cur_val_code", C, false)), "Text", (await $.mv((await $.wcall([$t22], "FieldByName", ["valute"], C)), "AsString")));
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TInForm", "CreditAccSearchEditChange", async function CreditAccSearchEditChange(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t23 = (await $.mv((await $.v(C, "CO_DataMod")), "archost"));
    await $.stmt($.wcall([$t23], "Close", [], C));
    await $.mcall((await $.wv([$t23], "SQL", C, false)), "Clear", []);
    await $.mset((await $.wv([$t23], "SQL", C, false)), "Text", $.add("Select * from tenostat where acc_id=", (await $.mv((await $.wv([$t23], "Acc_ID_", C, false)), "Text"))));
    await $.stmt($.wcall([$t23], "Open", [], C));
    await $.mset((await $.wv([$t23], "c_ostat", C, false)), "caption", (await $.mv((await $.wcall([$t23], "fieldbyname", ["ostat"], C)), "asstring")));
    await $.mset((await $.wv([$t23], "c_pok_ostat", C, false)), "caption", (await $.mv((await $.wcall([$t23], "fieldbyname", ["pok_ostat"], C)), "asstring")));
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TInForm", "DBLookupComboBox4Click", async function DBLookupComboBox4Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mset((await $.v(C, "CreditAccSearchEdit")), "text", (await $.mv((await $.v(C, "Dbedit5")), "text")));
  {
    const $t24 = (await $.mv((await $.v(C, "CO_DataMod")), "archost"));
    await $.stmt($.wcall([$t24], "Close", [], C));
    await $.mcall((await $.wv([$t24], "SQL", C, false)), "Clear", []);
    await $.mset((await $.wv([$t24], "SQL", C, false)), "Text", $.add("Select * from tenostat where acc_id=", (await $.mv((await $.wv([$t24], "Acc_ID_", C, false)), "Text"))));
    await $.stmt($.wcall([$t24], "Open", [], C));
    await $.mset((await $.wv([$t24], "c_ostat", C, false)), "caption", (await $.mv((await $.wcall([$t24], "fieldbyname", ["ostat"], C)), "asstring")));
    await $.mset((await $.wv([$t24], "c_pok_ostat", C, false)), "caption", (await $.mv((await $.wcall([$t24], "fieldbyname", ["pok_ostat"], C)), "asstring")));
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TInForm", "DBLookupComboBox3Click", async function DBLookupComboBox3Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mset((await $.v(C, "CreditAccSearchEdit")), "text", (await $.mv((await $.v(C, "Dbedit5")), "text")));
  {
    const $t25 = (await $.mv((await $.v(C, "CO_DataMod")), "archost"));
    await $.stmt($.wcall([$t25], "Close", [], C));
    await $.mcall((await $.wv([$t25], "SQL", C, false)), "Clear", []);
    await $.mset((await $.wv([$t25], "SQL", C, false)), "Text", $.add("Select * from tenostat where acc_id=", (await $.mv((await $.wv([$t25], "Acc_ID_", C, false)), "Text"))));
    await $.stmt($.wcall([$t25], "Open", [], C));
    await $.mset((await $.wv([$t25], "c_ostat", C, false)), "caption", (await $.mv((await $.wcall([$t25], "fieldbyname", ["ostat"], C)), "asstring")));
    await $.mset((await $.wv([$t25], "c_pok_ostat", C, false)), "caption", (await $.mv((await $.wcall([$t25], "fieldbyname", ["pok_ostat"], C)), "asstring")));
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.func("CutEditText", async function CutEditText(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "x": 0, "sel": 0};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t26 = (await $.call(C, "TCurrencyEdit", [L0["sender"]]));
    if ($.truthy($.eq((await $.wv([$t26], "DecimalSeparator", C, false)), (await $.wv([$t26], "ThousandSeparator", C, false))))) {
      return L0.result;
    }
    if ($.truthy($.eq((await $.wcall([$t26], "Pos", [(await $.wv([$t26], "DecimalSeparator", C, false)), (await $.wv([$t26], "Text", C, false))], C)), 0))) {
      return L0.result;
    }
    await $.wset([$t26], "Sel", (await $.wv([$t26], "SelStart", C, false)), { get: async () => L0["sel"], set: async (v) => { L0["sel"] = v; }, local: true });
    await $.wset([$t26], "X", $.sub($.sub((await $.wcall([$t26], "Length", [(await $.wv([$t26], "Text", C, false))], C)), (await $.wcall([$t26], "Pos", [(await $.wv([$t26], "DecimalSeparator", C, false)), (await $.wv([$t26], "Text", C, false))], C))), (await $.wv([$t26], "CurrencyDecimals", C, false))), { get: async () => L0["x"], set: async (v) => { L0["x"] = v; }, local: true });
    if ($.truthy(($.gt((await $.wv([$t26], "X", { get: async () => L0["x"], set: async (v) => { L0["x"] = v; }, local: true }, false)), 0)))) {
      await $.wset([$t26], "Text", (await $.wcall([$t26], "Copy", [(await $.wv([$t26], "Text", C, false)), 0, ($.sub((await $.wcall([$t26], "Length", [(await $.wv([$t26], "Text", C, false))], C)), (await $.wv([$t26], "X", { get: async () => L0["x"], set: async (v) => { L0["x"] = v; }, local: true }, false))))], C)), C);
      await $.wset([$t26], "SelStart", (await $.wv([$t26], "Sel", { get: async () => L0["sel"], set: async (v) => { L0["sel"] = v; }, local: true }, false)), C);
    }
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TInForm", "DebtValueChange", async function DebtValueChange(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.stmt((await $.call(C, "CutEditText", [L0["sender"]])));
  if ($.truthy($.eq((await $.mv((await $.call(C, "TCurrencyEdit", [L0["sender"]])), "Text")), (await $.v(C, "EmptyStr"))))) {
    await $.mset((await $.call(C, "TCurrencyEdit", [L0["sender"]])), "Value", 0);
  }
  { const $t27 = (await $.mv((await $.call(C, "TCurrencyEdit", [L0["sender"]])), "Tag"));
    if ($.eq($t27, 1)) {
      await $.set(C, "TransactionSide", (await $.v(C, "tsDebet")));
    }
    else if ($.eq($t27, 2)) {
      await $.set(C, "TransactionSide", (await $.v(C, "tsCredit")));
    }
    else if ($.eq($t27, 3)) {
      await $.set(C, "TransactionSide", (await $.v(C, "tsUnknown")));
    }
  }
  await $.stmt((await $.call(C, "SetAmmounts", [(await $.v(C, "TransactionSide"))])));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TInForm", "SearchEdit1Change", async function SearchEdit1Change(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mset((await $.mcall((await $.mv((await $.v(C, "CO_DataMod")), "Trdestination")), "fieldbyname", ["id"])), "asinteger", (await $.mv((await $.mcall((await $.mv((await $.mv((await $.call(C, "TSearchEdit", [L0["sender"]])), "datasource")), "dataset")), "fieldbyname", ["id"])), "asinteger")));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TInForm", "FormCreate", async function FormCreate(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.stmt($.call(C, "AddValute", []));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TInForm", "FormActivate", async function FormActivate(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t28 = (await $.v(C, "CO_DataMod"));
    if ($.truthy($.not((await $.mv((await $.wv([$t28], "Sysdat", C, false)), "Active"))))) {
      await $.mcall((await $.mv((await $.wv([$t28], "CO_DataMod", C, false)), "Sysdat")), "Open", []);
    }
    if ($.truthy($.not((await $.mv((await $.wv([$t28], "ACC", C, false)), "Active"))))) {
      await $.mcall((await $.wv([$t28], "ACC", C, false)), "open", []);
    }
    if ($.truthy($.not((await $.mv((await $.wv([$t28], "ACC_", C, false)), "Active"))))) {
      await $.mcall((await $.wv([$t28], "ACC_", C, false)), "open", []);
    }
    if ($.truthy($.not((await $.mv((await $.wv([$t28], "Account", C, false)), "Active"))))) {
      await $.mcall((await $.wv([$t28], "Account", C, false)), "open", []);
    }
    if ($.truthy($.not((await $.mv((await $.wv([$t28], "CashSymbols", C, false)), "Active"))))) {
      await $.mcall((await $.wv([$t28], "CashSymbols", C, false)), "Open", []);
    }
    if ($.truthy($.not((await $.mv((await $.wv([$t28], "commission_trans_km", C, false)), "Active"))))) {
      await $.mcall((await $.wv([$t28], "commission_trans_km", C, false)), "Open", []);
    }
    if ($.truthy($.not((await $.mv((await $.wv([$t28], "CO_In", C, false)), "Active"))))) {
      await $.mcall((await $.wv([$t28], "CO_In", C, false)), "Open", []);
    }
  }
  if ($.truthy($.not((await $.mv((await $.v(C, "DebitAccData")), "Active"))))) {
    await $.mcall((await $.v(C, "DebitAccData")), "Open", []);
  }
  await $.mset((await $.v(C, "Acc_ID")), "Text", (await $.mv((await $.mcall((await $.mv((await $.v(C, "CO_DataMod")), "CO_In")), "FieldByName", ["debt"])), "AsString")));
  await $.mset((await $.v(C, "Acc_ID_")), "Text", (await $.mv((await $.mcall((await $.mv((await $.v(C, "CO_DataMod")), "Account")), "FieldByName", ["ID"])), "AsString")));
  await $.mset((await $.v(C, "DebtAccSearchEdit")), "Text", (await $.mv((await $.mcall((await $.mv((await $.v(C, "CO_DataMod")), "CO_In")), "FieldByName", ["debitaccount"])), "AsString")));
  await $.mset((await $.v(C, "dbedit4")), "text", "");
  await $.mset((await $.v(C, "dbedit9")), "text", "");
  await $.mset((await $.v(C, "ReportIDDBEdit")), "Text", "0");
  await $.mset((await $.v(C, "CountrIDDBEdit")), "Text", "0");
  await $.mset((await $.v(C, "TransDate")), "date", (await $.mv((await $.mcall((await $.mv((await $.v(C, "CO_DataMod")), "Sysdat")), "Fieldbyname", ["tek_dat"])), "asdatetime")));
  await $.mset((await $.v(C, "CreditAccSearchEdit")), "text", (await $.mv((await $.mcall((await $.mv((await $.v(C, "CO_DataMod")), "Account")), "fieldbyname", ["accno"])), "asstring")));
  await $.mset((await $.v(C, "dbedit3")), "text", (await $.mv((await $.mcall((await $.mv((await $.v(C, "CO_DataMod")), "Account")), "fieldbyname", ["accname"])), "asstring")));
  await $.mset((await $.v(C, "cur_val_code")), "text", (await $.mv((await $.mcall((await $.mv((await $.v(C, "CO_DataMod")), "Account")), "fieldbyname", ["accvalcode"])), "asstring")));
  await $.mset((await $.v(C, "commission_id")), "text", (await $.mv((await $.mcall((await $.mv((await $.v(C, "CO_DataMod")), "CO_In")), "fieldbyname", ["id"])), "asstring")));
  await $.mset((await $.v(C, "dbedit6")), "text", (await $.mv((await $.mcall((await $.mv((await $.v(C, "CO_DataMod")), "CO_In")), "fieldbyname", ["assignment"])), "asstring")));
  await $.mset((await $.v(C, "dbedit5")), "text", (await $.mv((await $.v(C, "CreditAccSearchEdit")), "text")));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TInForm", "ButtonApplyClick", async function ButtonApplyClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "ddate": 0, "transid": 0};
  await $.fixArgs(L0, ["sender"]);
  L0["ddate"] = (await $.call(C, "Trunc", [(await $.mv((await $.v(C, "TransDate")), "date"))]));
  if ($.truthy((await $.and_((await $.and_(($.ne((await $.mv((await $.v(C, "debtvalue")), "Text")), "")), async () => ($.ne((await $.mv((await $.v(C, "creditvalue")), "Text")), "")))), async () => ($.ne((await $.mv((await $.v(C, "ekv")), "Text")), "")))))) {
    await $.stmt((await $.mcall((await $.mv((await $.v(C, "CO_DataMod")), "OPackage")), "CallProcedure", ["ins_commission_trans_km", [(await $.call(C, "Strtoint", [(await $.mv((await $.v(C, "commission_id")), "text"))])), (await $.call(C, "Strtoint", [(await $.mv((await $.v(C, "acc_id")), "text"))])), (await $.call(C, "Strtoint", [(await $.mv((await $.v(C, "acc_id_")), "text"))])), (await $.mv((await $.v(C, "debtvalue")), "value")), (await $.mv((await $.v(C, "creditvalue")), "value")), L0["ddate"]]])));
    await $.mcall((await $.mv((await $.v(C, "CO_DataMod")), "commission_trans_km")), "refresh", []);
  }
  if ($.truthy((await $.and_((await $.and_(($.ne((await $.mv((await $.v(C, "debtvalue")), "Text")), "")), async () => ($.ne((await $.mv((await $.v(C, "creditvalue")), "Text")), "")))), async () => ($.ne((await $.mv((await $.v(C, "ekv")), "Text")), "")))))) {
    await $.stmt((await $.mcall((await $.mv((await $.v(C, "CO_DataMod")), "OPackage")), "CallProcedure", ["ins_transaction", [(await $.call(C, "strtoint", [(await $.mv((await $.v(C, "acc_id")), "text"))])), (await $.call(C, "strtoint", [(await $.mv((await $.v(C, "acc_id_")), "text"))])), (await $.mv((await $.v(C, "debtvalue")), "value")), (await $.mv((await $.v(C, "creditvalue")), "value")), (await $.mv((await $.v(C, "dbedit6")), "text")), (await $.mv((await $.v(C, "ekv")), "value")), (await $.call(C, "strtofloat", [(await $.mv((await $.v(C, "editrate")), "text"))])), (await $.call(C, "strtofloat", [(await $.mv((await $.v(C, "editrate_")), "text"))])), (await $.mv((await $.v(C, "ReportIDLookUp")), "KeyValue")), (await $.mv((await $.v(C, "CountrIDLookUp")), "KeyValue")), (await $.mv((await $.v(C, "CashSymbolLookUp")), "KeyValue")), (await $.mv((await $.v(C, "ConvertationSymbolLookUp")), "KeyValue"))]])));
    L0["transid"] = (await $.mcall((await $.mv((await $.v(C, "CO_DataMod")), "OPackage")), "CallIntegerFunction", ["transaction_mn", []]));
    await $.stmt((await $.mcall((await $.mv((await $.v(C, "CO_DataMod")), "OSCT")), "CallProcedure", ["SetTransactions", [(await $.mv((await $.mcall((await $.mv((await $.v(C, "CO_DataMod")), "commission_trans_km")), "fieldbyname", ["id"])), "asinteger")), (await $.mv((await $.mcall((await $.mv((await $.v(C, "CO_DataMod")), "commission_trans_km")), "fieldbyname", ["debt"])), "asinteger")), (await $.mv((await $.mcall((await $.mv((await $.v(C, "CO_DataMod")), "commission_trans_km")), "fieldbyname", ["credit"])), "asinteger")), (await $.mv((await $.mcall((await $.mv((await $.v(C, "CO_DataMod")), "commission_trans_km")), "fieldbyname", ["c_value"])), "asinteger")), (await $.mv((await $.mcall((await $.mv((await $.v(C, "CO_DataMod")), "commission_trans_km")), "fieldbyname", ["d_value"])), "asinteger")), (await $.mv((await $.mcall((await $.mv((await $.v(C, "CO_DataMod")), "commission_trans_km")), "fieldbyname", ["ddate"])), "asdatetime")), L0["transid"]]])));
    await $.stmt($.call(C, "Close", []));
    await $.mcall((await $.mv((await $.v(C, "CO_DataMod")), "Transactions")), "close", []);
    await $.mcall((await $.mv((await $.v(C, "CO_DataMod")), "Transactions")), "open", []);
  }
  if ($.truthy((await $.and_((await $.and_(($.eq((await $.mv((await $.v(C, "debtvalue")), "text")), "0")), async () => ($.eq((await $.mv((await $.v(C, "creditvalue")), "text")), "0")))), async () => ($.eq((await $.mv((await $.v(C, "ekv")), "text")), "0")))))) {
    await $.stmt((await $.call(C, "ShowMessage", ["Daxil etdiyiniz məbləğ sıfırdan böyük olmalıdır!"])));
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TInForm", "ButtonCancelClick", async function ButtonCancelClick(Self, p0) {
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
  U.method("TInForm", "ButtonCloseClick", async function ButtonCloseClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.stmt($.call(C, "close", []));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TInForm", "DebtValueKeyPress", async function DebtValueKeyPress(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "key": $.asRef(p1), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.not(($.in_((await L0["key"].get()), [...$.range("0","9"), ".", "\b"]))))) {
    await L0["key"].set("\u0000");
  }
  return L0.result;
}, {"params": ["Sender", "Key"], "kind": "procedure", "ptypes": ["TObject", "Char"]});
  U.method("TInForm", "creditvalueKeyPress", async function creditvalueKeyPress(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "key": $.asRef(p1), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.not(($.in_((await L0["key"].get()), [...$.range("0","9"), ".", "\b"]))))) {
    await L0["key"].set("\u0000");
  }
  return L0.result;
}, {"params": ["Sender", "Key"], "kind": "procedure", "ptypes": ["TObject", "Char"]});
  U.method("TInForm", "ReportIDDBEditChange", async function ReportIDDBEditChange(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mset((await $.v(C, "ReportIDLookUp")), "KeyValue", (await $.mv((L0["sender"]), "Text")));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TInForm", "CountrIDDBEditChange", async function CountrIDDBEditChange(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mset((await $.v(C, "CountrIDLookUp")), "KeyValue", (await $.mv((L0["sender"]), "Text")));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TInForm", "ReportIDLookUpCloseUp", async function ReportIDLookUpCloseUp(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mset((await $.v(C, "ReportIDDBEdit")), "Text", (await $.mv((L0["sender"]), "keyvalue")));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TInForm", "CountrIDLookUpCloseUp", async function CountrIDLookUpCloseUp(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mset((await $.v(C, "CountrIDDBEdit")), "Text", (await $.mv((L0["sender"]), "keyvalue")));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TInForm", "ConvertationSymbolLookUpCloseUp", async function ConvertationSymbolLookUpCloseUp(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  try {
    await $.mset((await $.v(C, "SearchEdit2")), "Text", (await $.mv((L0["sender"]), "keyvalue")));
  } catch ($t29) {
    $.rethrowControl($t29);
    $.handled($t29);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TInForm", "CashSymbolLookUpCloseUp", async function CashSymbolLookUpCloseUp(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  try {
    await $.mset((await $.v(C, "SearchEdit3")), "Text", (await $.mv((L0["sender"]), "keyvalue")));
  } catch ($t30) {
    $.rethrowControl($t30);
    $.handled($t30);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TInForm", "SearchEdit3Change", async function SearchEdit3Change(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mset((await $.v(C, "CashSymbolLookUp")), "KeyValue", (await $.mv((L0["sender"]), "Text")));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TInForm", "SearchEdit2Change", async function SearchEdit2Change(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mset((await $.v(C, "ConvertationSymbolLookUp")), "KeyValue", (await $.mv((L0["sender"]), "Text")));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TInForm", "Button1Click", async function Button1Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t31 = (await $.v(C, "CO_DataMod"));
    await $.mcall((await $.wv([$t31], "Cntries", C, false)), "refresh", []);
    await $.mcall((await $.wv([$t31], "ReportDesc", C, false)), "refresh", []);
    await $.mcall((await $.wv([$t31], "ConvertationSymbols", C, false)), "refresh", []);
    await $.mcall((await $.wv([$t31], "CashSymbols", C, false)), "refresh", []);
    await $.mcall((await $.wv([$t31], "Trdestination", C, false)), "refresh", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TInForm", "SearchEdit3Enter", async function SearchEdit3Enter(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.stmt($.call(C, "SetCashSymbol", []));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  return U;
}
