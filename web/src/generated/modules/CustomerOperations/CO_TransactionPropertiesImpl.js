// Generated from CO_TransactionPropertiesImpl.pas by pas2js — do not edit by hand; regenerate instead.
/* eslint-disable */
// @ts-nocheck

export default function define($) {
  const U = $.unit("CO_TransactionPropertiesImpl", ["Windows", "Messages", "SysUtils", "Classes", "Graphics", "Controls", "Forms", "NLSDialogs", "ActnList", "ComCtrls", "StdCtrls", "CurrencyEdit", "Mask", "DBCtrls", "SearchEdit", "ExtCtrls", "NLSLocalizer", "Db", "OracleData", "Variants", "co_datamod_impl", "sboapiDataModuleImpl"]);
  const C = [U];
  U.enumType("ttransactionside", 3);
  U.const("tsDebet", 0);
  U.const("tsCredit", 1);
  U.const("tsUnknown", 2);
  U.defClass("TCO_Transaction", "TForm", {"groupbox1": {"name": "GroupBox1", "type": "TGroupBox"}, "headercontrol1": {"name": "HeaderControl1", "type": "THeaderControl"}, "panel1": {"name": "Panel1", "type": "TPanel"}, "paneldebit": {"name": "PanelDebit", "type": "TPanel"}, "paneldebitrest": {"name": "PanelDebitRest", "type": "TPanel"}, "label1": {"name": "Label1", "type": "TLabel"}, "label2": {"name": "Label2", "type": "TLabel"}, "d_pok_ostat": {"name": "d_pok_ostat", "type": "TLabel"}, "panel4": {"name": "Panel4", "type": "TPanel"}, "dblookupcombobox2": {"name": "DBLookupComboBox2", "type": "TDBLookupComboBox"}, "dbedit2": {"name": "DBEdit2", "type": "TDBEdit"}, "panel5": {"name": "Panel5", "type": "TPanel"}, "debtaccsearchedit": {"name": "DebtAccSearchEdit", "type": "TSearchEdit"}, "dblookupcombobox1": {"name": "DBLookupComboBox1", "type": "TDBLookupComboBox"}, "dbedit1": {"name": "DBEdit1", "type": "TDBEdit"}, "panel6": {"name": "Panel6", "type": "TPanel"}, "panel2": {"name": "Panel2", "type": "TPanel"}, "panel7": {"name": "Panel7", "type": "TPanel"}, "panel8": {"name": "Panel8", "type": "TPanel"}, "label3": {"name": "Label3", "type": "TLabel"}, "label4": {"name": "Label4", "type": "TLabel"}, "c_ostat": {"name": "c_ostat", "type": "TLabel"}, "c_pok_ostat": {"name": "c_pok_ostat", "type": "TLabel"}, "panel9": {"name": "Panel9", "type": "TPanel"}, "dblookupcombobox3": {"name": "DBLookupComboBox3", "type": "TDBLookupComboBox"}, "dbedit3": {"name": "DBEdit3", "type": "TDBEdit"}, "panel10": {"name": "Panel10", "type": "TPanel"}, "creditaccsearchedit": {"name": "CreditAccSearchEdit", "type": "TSearchEdit"}, "dblookupcombobox4": {"name": "DBLookupComboBox4", "type": "TDBLookupComboBox"}, "dbedit5": {"name": "DBEdit5", "type": "TDBEdit"}, "panel11": {"name": "Panel11", "type": "TPanel"}, "cur_val_code": {"name": "cur_val_code", "type": "TEdit"}, "groupbox2": {"name": "GroupBox2", "type": "TGroupBox"}, "panel3": {"name": "Panel3", "type": "TPanel"}, "debtvalue": {"name": "debtvalue", "type": "TCurrencyEdit"}, "panel12": {"name": "Panel12", "type": "TPanel"}, "creditvalue": {"name": "creditvalue", "type": "TCurrencyEdit"}, "panel13": {"name": "Panel13", "type": "TPanel"}, "ekv": {"name": "ekv", "type": "TCurrencyEdit"}, "groupbox3": {"name": "GroupBox3", "type": "TGroupBox"}, "panel14": {"name": "Panel14", "type": "TPanel"}, "convertationsymbollookup": {"name": "ConvertationSymbolLookUp", "type": "TDBLookupComboBox"}, "searchedit2": {"name": "SearchEdit2", "type": "TSearchEdit"}, "cashpanel": {"name": "cashpanel", "type": "TPanel"}, "cashsymbollookup": {"name": "CashSymbolLookUp", "type": "TDBLookupComboBox"}, "searchedit3": {"name": "SearchEdit3", "type": "TSearchEdit"}, "panel16": {"name": "Panel16", "type": "TPanel"}, "dblookupcombobox5": {"name": "DBLookupComboBox5", "type": "TDBLookupComboBox"}, "groupbox4": {"name": "GroupBox4", "type": "TGroupBox"}, "label5": {"name": "Label5", "type": "TLabel"}, "transdate": {"name": "TransDate", "type": "TDateTimePicker"}, "panel17": {"name": "Panel17", "type": "TPanel"}, "buttonapply": {"name": "ButtonApply", "type": "TButton"}, "buttoncancel": {"name": "ButtonCancel", "type": "TButton"}, "buttonclose": {"name": "ButtonClose", "type": "TButton"}, "nlslocalizer1": {"name": "NLSLocalizer1", "type": "TNLSLocalizer"}, "trdest": {"name": "Trdest", "type": "TEdit"}, "acc_id": {"name": "acc_id", "type": "TDBEdit"}, "acc_id_": {"name": "acc_id_", "type": "TDBEdit"}, "debitcurrencydata": {"name": "DebitCurrencyData", "type": "TOracleDataSet"}, "debitcurrencydataid": {"name": "DebitCurrencyDataID", "type": "TIntegerField"}, "debitcurrencydatasname": {"name": "DebitCurrencyDataSNAME", "type": "TStringField"}, "debitcurrencydataname": {"name": "DebitCurrencyDataNAME", "type": "TStringField"}, "debitcurrencydatarate": {"name": "DebitCurrencyDataRATE", "type": "TFloatField"}, "debitcurrency": {"name": "DebitCurrency", "type": "TDataSource"}, "debitaccdata": {"name": "DebitAccData", "type": "TOracleDataSet"}, "debitaccs": {"name": "DebitAccs", "type": "TDataSource"}, "editvalute": {"name": "editvalute", "type": "TDBLookupComboBox"}, "editrate": {"name": "editrate", "type": "TDBEdit"}, "val_code": {"name": "val_code", "type": "TEdit"}, "editrate_": {"name": "editrate_", "type": "TDBEdit"}, "creditcurrencydata": {"name": "CreditCurrencyData", "type": "TOracleDataSet"}, "creditcurrencydataid": {"name": "CreditCurrencyDataID", "type": "TIntegerField"}, "creditcurrencydatasname": {"name": "CreditCurrencyDataSNAME", "type": "TStringField"}, "creditcurrencydataname": {"name": "CreditCurrencyDataNAME", "type": "TStringField"}, "creditcurrencydatarate": {"name": "CreditCurrencyDataRATE", "type": "TFloatField"}, "creditcurrency": {"name": "CreditCurrency", "type": "TDataSource"}, "editvalute_": {"name": "editvalute_", "type": "TDBLookupComboBox"}, "creditaccdata": {"name": "CreditAccData", "type": "TOracleDataSet"}, "creditaccs": {"name": "CreditAccs", "type": "TDataSource"}, "d_ostat": {"name": "d_ostat", "type": "TLabel"}, "dbedit6": {"name": "DBEdit6", "type": "TEdit"}, "panel18": {"name": "Panel18", "type": "TPanel"}, "reportiddbedit": {"name": "ReportIDDBEdit", "type": "TEdit"}, "reportidlookup": {"name": "ReportIDLookUp", "type": "TDBLookupComboBox"}, "panel19": {"name": "Panel19", "type": "TPanel"}, "countriddbedit": {"name": "CountrIDDBEdit", "type": "TEdit"}, "countridlookup": {"name": "CountrIDLookUp", "type": "TDBLookupComboBox"}, "creditaccdataid": {"name": "CreditAccDataID", "type": "TFloatField"}, "creditaccdataacc_no": {"name": "CreditAccDataACC_NO", "type": "TStringField"}, "creditaccdataval_acc": {"name": "CreditAccDataVAL_ACC", "type": "TIntegerField"}, "creditaccdataname": {"name": "CreditAccDataNAME", "type": "TStringField"}, "creditaccdataiscacheaccount": {"name": "CreditAccDataISCACHEACCOUNT", "type": "TFloatField"}, "debitaccdataid": {"name": "DebitAccDataID", "type": "TFloatField"}, "debitaccdataacc_no": {"name": "DebitAccDataACC_NO", "type": "TStringField"}, "debitaccdataval_acc": {"name": "DebitAccDataVAL_ACC", "type": "TIntegerField"}, "debitaccdataname": {"name": "DebitAccDataNAME", "type": "TStringField"}, "debitaccdataiscacheaccount": {"name": "DebitAccDataISCACHEACCOUNT", "type": "TFloatField"}, "modifed": {"name": "Modifed", "type": "boolean"}, "transactionside": {"name": "TransactionSide", "type": "TTransactionSide"}}, {});
  U.init(async () => {
    U.var_("CO_Transaction", null, "TCO_Transaction");
  });
  U.method("TCO_Transaction", "DebtAccSearchEditChange", async function DebtAccSearchEditChange(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mset((await $.v(C, "d_ostat")), "visible", true);
  await $.mset((await $.v(C, "d_pok_ostat")), "visible", true);
  {
    const $t1 = (await $.mv((await $.v(C, "CO_DataMod")), "archost"));
    await $.stmt($.wcall([$t1], "Close", [], C));
    await $.mcall((await $.wv([$t1], "SQL", C, false)), "Clear", []);
    await $.mset((await $.wv([$t1], "SQL", C, false)), "Text", $.add($.add($.add("Select * from tenostat where acc_id in (select id from FSACCS where accno=", "'"), (await $.mv((await $.wv([$t1], "DebtAccSearchEdit", C, false)), "Text"))), "')"));
    await $.stmt($.wcall([$t1], "Open", [], C));
    await $.mset((await $.wv([$t1], "d_ostat", C, false)), "caption", (await $.mv((await $.wcall([$t1], "fieldbyname", ["ostat"], C)), "asstring")));
  }
  {
    const $t2 = (await $.mv((await $.v(C, "CO_DataMod")), "archost"));
    await $.stmt($.wcall([$t2], "Close", [], C));
    await $.mcall((await $.wv([$t2], "SQL", C, false)), "Clear", []);
    await $.mset((await $.wv([$t2], "SQL", C, false)), "Text", $.add($.add($.add("Select * from tenostat where acc_id in (select id from FSACCS where accno=", "'"), (await $.mv((await $.wv([$t2], "DebtAccSearchEdit", C, false)), "Text"))), "')"));
    await $.stmt($.wcall([$t2], "Open", [], C));
    await $.mset((await $.wv([$t2], "d_pok_ostat", C, false)), "caption", (await $.mv((await $.wcall([$t2], "fieldbyname", ["pok_ostat"], C)), "asstring")));
  }
  await $.mset((await $.v(C, "cashpanel")), "Enabled", $.eq((await $.mv((await $.v(C, "DebitAccDataISCACHEACCOUNT")), "AsInteger")), 1));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TCO_Transaction", "DBEdit1Change", async function DBEdit1Change(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TCO_Transaction", "DBLookupComboBox1Click", async function DBLookupComboBox1Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mset((await $.v(C, "DebtAccSearchEdit")), "text", (await $.mv((await $.v(C, "Dbedit1")), "text")));
  await $.mset((await $.v(C, "d_ostat")), "visible", true);
  await $.mset((await $.v(C, "d_pok_ostat")), "visible", true);
  {
    const $t3 = (await $.mv((await $.v(C, "CO_DataMod")), "archost"));
    await $.stmt($.wcall([$t3], "Close", [], C));
    await $.mcall((await $.wv([$t3], "SQL", C, false)), "Clear", []);
    await $.mset((await $.wv([$t3], "SQL", C, false)), "Text", $.add($.add($.add("Select * from tenostat where acc_id in (select id from FSACCS where accno=", "'"), (await $.mv((await $.wv([$t3], "DebtAccSearchEdit", C, false)), "Text"))), "')"));
    await $.stmt($.wcall([$t3], "Open", [], C));
    await $.mset((await $.wv([$t3], "d_ostat", C, false)), "caption", (await $.mv((await $.wcall([$t3], "fieldbyname", ["ostat"], C)), "asstring")));
  }
  {
    const $t4 = (await $.mv((await $.v(C, "CO_DataMod")), "archost"));
    await $.stmt($.wcall([$t4], "Close", [], C));
    await $.mcall((await $.wv([$t4], "SQL", C, false)), "Clear", []);
    await $.mset((await $.wv([$t4], "SQL", C, false)), "Text", $.add($.add($.add("Select * from tenostat where acc_id in (select id from FSACCS where accno=", "'"), (await $.mv((await $.wv([$t4], "DebtAccSearchEdit", C, false)), "Text"))), "')"));
    await $.stmt($.wcall([$t4], "Open", [], C));
    await $.mset((await $.wv([$t4], "d_pok_ostat", C, false)), "caption", (await $.mv((await $.wcall([$t4], "fieldbyname", ["pok_ostat"], C)), "asstring")));
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TCO_Transaction", "DBLookupComboBox2Click", async function DBLookupComboBox2Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mset((await $.v(C, "DebtAccSearchEdit")), "text", (await $.mv((await $.v(C, "Dbedit1")), "text")));
  await $.mset((await $.v(C, "d_ostat")), "visible", true);
  await $.mset((await $.v(C, "d_pok_ostat")), "visible", true);
  {
    const $t5 = (await $.mv((await $.v(C, "CO_DataMod")), "archost"));
    await $.stmt($.wcall([$t5], "Close", [], C));
    await $.mcall((await $.wv([$t5], "SQL", C, false)), "Clear", []);
    await $.mset((await $.wv([$t5], "SQL", C, false)), "Text", $.add($.add($.add("Select * from tenostat where acc_id in (select id from FSACCS where accno=", "'"), (await $.mv((await $.wv([$t5], "DebtAccSearchEdit", C, false)), "Text"))), "')"));
    await $.stmt($.wcall([$t5], "Open", [], C));
    await $.mset((await $.wv([$t5], "d_ostat", C, false)), "caption", (await $.mv((await $.wcall([$t5], "fieldbyname", ["ostat"], C)), "asstring")));
  }
  {
    const $t6 = (await $.mv((await $.v(C, "CO_DataMod")), "archost"));
    await $.stmt($.wcall([$t6], "Close", [], C));
    await $.mcall((await $.wv([$t6], "SQL", C, false)), "Clear", []);
    await $.mset((await $.wv([$t6], "SQL", C, false)), "Text", $.add($.add($.add("Select * from tenostat where acc_id in (select id from FSACCS where accno=", "'"), (await $.mv((await $.wv([$t6], "DebtAccSearchEdit", C, false)), "Text"))), "')"));
    await $.stmt($.wcall([$t6], "Open", [], C));
    await $.mset((await $.wv([$t6], "d_pok_ostat", C, false)), "caption", (await $.mv((await $.wcall([$t6], "fieldbyname", ["pok_ostat"], C)), "asstring")));
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TCO_Transaction", "FormActivate", async function FormActivate(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mcall((await $.mv((await $.v(C, "CO_DataMod")), "Sysdat")), "Open", []);
  await $.mset((await $.v(C, "DebtAccSearchEdit")), "text", "");
  await $.mset((await $.v(C, "Dbedit1")), "text", "");
  await $.mset((await $.v(C, "Dbedit2")), "text", "");
  await $.mset((await $.v(C, "CreditAccSearchEdit")), "text", "");
  await $.mset((await $.v(C, "Dbedit5")), "text", "");
  await $.mset((await $.v(C, "Dbedit3")), "text", "");
  await $.mset((await $.v(C, "TransDate")), "date", (await $.mv((await $.mcall((await $.mv((await $.v(C, "CO_DataMod")), "Sysdat")), "Fieldbyname", ["tek_dat"])), "asdatetime")));
  await $.mset((await $.v(C, "val_code")), "text", "0");
  await $.mset((await $.v(C, "cur_val_code")), "text", "0");
  await $.mset((await $.v(C, "ReportIDDBEdit")), "Text", "0");
  await $.mset((await $.v(C, "CountrIDDBEdit")), "Text", "0");
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TCO_Transaction", "FormCreate", async function FormCreate(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.not((await $.mv((await $.v(C, "DebitAccData")), "Active"))))) {
    await $.mcall((await $.v(C, "DebitAccData")), "Open", []);
  }
  if ($.truthy($.not((await $.mv((await $.v(C, "CreditAccData")), "Active"))))) {
    await $.mcall((await $.v(C, "CreditAccData")), "Open", []);
  }
  await $.mset((await $.v(C, "editvalute")), "KeyValue", 0);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TCO_Transaction", "cur_val_codeChange", async function cur_val_codeChange(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.ne((await $.mv((L0["sender"]), "Text")), ""))) {
    await $.mset((await $.v(C, "editvalute_")), "KeyValue", (await $.call(C, "StrToInt", [(await $.mv((L0["sender"]), "Text"))])));
  } else {
    await $.mset((await $.v(C, "editvalute_")), "KeyValue", (await $.v(C, "null")));
  }
  await $.stmt((await $.call(C, "editvalute_CloseUp", [L0["sender"]])));
  await $.mset((await $.v(C, "dbedit3")), "text", "");
  await $.mset((await $.v(C, "dbedit5")), "text", "");
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TCO_Transaction", "editvalute_Change", async function editvalute_Change(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t7 = (await $.mv((await $.v(C, "CO_DataMod")), "avalute"));
    await $.stmt($.wcall([$t7], "Close", [], C));
    await $.mcall((await $.wv([$t7], "SQL", C, false)), "Clear", []);
    await $.mset((await $.wv([$t7], "SQL", C, false)), "Text", $.add($.add($.add("Select c.rowid ,c.* from avalute c where valu_name= ", "'"), (await $.mv((await $.wv([$t7], "editvalute_", C, false)), "Text"))), "'"));
    await $.stmt($.wcall([$t7], "Open", [], C));
    await $.mset((await $.wv([$t7], "cur_val_code", C, false)), "Text", (await $.mv((await $.wcall([$t7], "FieldByName", ["valute"], C)), "AsString")));
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TCO_Transaction", "CreditAccSearchEditChange", async function CreditAccSearchEditChange(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mset((await $.v(C, "c_ostat")), "visible", true);
  await $.mset((await $.v(C, "c_pok_ostat")), "visible", true);
  {
    const $t8 = (await $.mv((await $.v(C, "CO_DataMod")), "archost"));
    await $.stmt($.wcall([$t8], "Close", [], C));
    await $.mcall((await $.wv([$t8], "SQL", C, false)), "Clear", []);
    await $.mset((await $.wv([$t8], "SQL", C, false)), "Text", $.add($.add($.add("Select * from tenostat where acc_id in (select id from FSACCS where accno=", "'"), (await $.mv((await $.wv([$t8], "creditAccSearchEdit", C, false)), "Text"))), "')"));
    await $.stmt($.wcall([$t8], "Open", [], C));
    await $.mset((await $.wv([$t8], "c_ostat", C, false)), "caption", (await $.mv((await $.wcall([$t8], "fieldbyname", ["ostat"], C)), "asstring")));
  }
  {
    const $t9 = (await $.mv((await $.v(C, "CO_DataMod")), "archost"));
    await $.stmt($.wcall([$t9], "Close", [], C));
    await $.mcall((await $.wv([$t9], "SQL", C, false)), "Clear", []);
    await $.mset((await $.wv([$t9], "SQL", C, false)), "Text", $.add($.add($.add("Select * from tenostat where acc_id in (select id from FSACCS where accno=", "'"), (await $.mv((await $.wv([$t9], "creditAccSearchEdit", C, false)), "Text"))), "')"));
    await $.stmt($.wcall([$t9], "Open", [], C));
    await $.mset((await $.wv([$t9], "c_pok_ostat", C, false)), "caption", (await $.mv((await $.wcall([$t9], "fieldbyname", ["pok_ostat"], C)), "asstring")));
  }
  await $.mset((await $.v(C, "cashpanel")), "Enabled", $.eq((await $.mv((await $.v(C, "CreditAccDataISCACHEACCOUNT")), "AsInteger")), 1));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TCO_Transaction", "DBLookupComboBox4Click", async function DBLookupComboBox4Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mset((await $.v(C, "CreditAccSearchEdit")), "text", (await $.mv((await $.v(C, "Dbedit5")), "text")));
  {
    const $t10 = (await $.mv((await $.v(C, "CO_DataMod")), "archost"));
    await $.stmt($.wcall([$t10], "Close", [], C));
    await $.mcall((await $.wv([$t10], "SQL", C, false)), "Clear", []);
    await $.mset((await $.wv([$t10], "SQL", C, false)), "Text", $.add($.add($.add("Select * from tenostat where acc_id in (select id from FSACCS where accno=", "'"), (await $.mv((await $.wv([$t10], "creditAccSearchEdit", C, false)), "Text"))), "')"));
    await $.stmt($.wcall([$t10], "Open", [], C));
    await $.mset((await $.wv([$t10], "c_ostat", C, false)), "caption", (await $.mv((await $.wcall([$t10], "fieldbyname", ["ostat"], C)), "asstring")));
  }
  {
    const $t11 = (await $.mv((await $.v(C, "CO_DataMod")), "archost"));
    await $.stmt($.wcall([$t11], "Close", [], C));
    await $.mcall((await $.wv([$t11], "SQL", C, false)), "Clear", []);
    await $.mset((await $.wv([$t11], "SQL", C, false)), "Text", $.add($.add($.add("Select * from tenostat where acc_id in (select id from FSACCS where accno=", "'"), (await $.mv((await $.wv([$t11], "creditAccSearchEdit", C, false)), "Text"))), "')"));
    await $.stmt($.wcall([$t11], "Open", [], C));
    await $.mset((await $.wv([$t11], "c_pok_ostat", C, false)), "caption", (await $.mv((await $.wcall([$t11], "fieldbyname", ["pok_ostat"], C)), "asstring")));
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TCO_Transaction", "DBLookupComboBox3Click", async function DBLookupComboBox3Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mset((await $.v(C, "CreditAccSearchEdit")), "text", (await $.mv((await $.v(C, "Dbedit5")), "text")));
  {
    const $t12 = (await $.mv((await $.v(C, "CO_DataMod")), "archost"));
    await $.stmt($.wcall([$t12], "Close", [], C));
    await $.mcall((await $.wv([$t12], "SQL", C, false)), "Clear", []);
    await $.mset((await $.wv([$t12], "SQL", C, false)), "Text", $.add($.add($.add("Select * from tenostat where acc_id in (select id from FSACCS where accno=", "'"), (await $.mv((await $.wv([$t12], "creditAccSearchEdit", C, false)), "Text"))), "')"));
    await $.stmt($.wcall([$t12], "Open", [], C));
    await $.mset((await $.wv([$t12], "c_ostat", C, false)), "caption", (await $.mv((await $.wcall([$t12], "fieldbyname", ["ostat"], C)), "asstring")));
  }
  {
    const $t13 = (await $.mv((await $.v(C, "CO_DataMod")), "archost"));
    await $.stmt($.wcall([$t13], "Close", [], C));
    await $.mcall((await $.wv([$t13], "SQL", C, false)), "Clear", []);
    await $.mset((await $.wv([$t13], "SQL", C, false)), "Text", $.add($.add($.add("Select * from tenostat where acc_id in (select id from FSACCS where accno=", "'"), (await $.mv((await $.wv([$t13], "creditAccSearchEdit", C, false)), "Text"))), "')"));
    await $.stmt($.wcall([$t13], "Open", [], C));
    await $.mset((await $.wv([$t13], "c_pok_ostat", C, false)), "caption", (await $.mv((await $.wcall([$t13], "fieldbyname", ["pok_ostat"], C)), "asstring")));
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.func("CutEditText", async function CutEditText(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "x": 0, "sel": 0};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t14 = (await $.call(C, "TCurrencyEdit", [L0["sender"]]));
    if ($.truthy($.eq((await $.wv([$t14], "DecimalSeparator", C, false)), (await $.wv([$t14], "ThousandSeparator", C, false))))) {
      return L0.result;
    }
    if ($.truthy($.eq((await $.wcall([$t14], "Pos", [(await $.wv([$t14], "DecimalSeparator", C, false)), (await $.wv([$t14], "Text", C, false))], C)), 0))) {
      return L0.result;
    }
    await $.wset([$t14], "Sel", (await $.wv([$t14], "SelStart", C, false)), { get: async () => L0["sel"], set: async (v) => { L0["sel"] = v; }, local: true });
    await $.wset([$t14], "X", $.sub($.sub((await $.wcall([$t14], "Length", [(await $.wv([$t14], "Text", C, false))], C)), (await $.wcall([$t14], "Pos", [(await $.wv([$t14], "DecimalSeparator", C, false)), (await $.wv([$t14], "Text", C, false))], C))), (await $.wv([$t14], "CurrencyDecimals", C, false))), { get: async () => L0["x"], set: async (v) => { L0["x"] = v; }, local: true });
    if ($.truthy(($.gt((await $.wv([$t14], "X", { get: async () => L0["x"], set: async (v) => { L0["x"] = v; }, local: true }, false)), 0)))) {
      await $.wset([$t14], "Text", (await $.wcall([$t14], "Copy", [(await $.wv([$t14], "Text", C, false)), 0, ($.sub((await $.wcall([$t14], "Length", [(await $.wv([$t14], "Text", C, false))], C)), (await $.wv([$t14], "X", { get: async () => L0["x"], set: async (v) => { L0["x"] = v; }, local: true }, false))))], C)), C);
      await $.wset([$t14], "SelStart", (await $.wv([$t14], "Sel", { get: async () => L0["sel"], set: async (v) => { L0["sel"] = v; }, local: true }, false)), C);
    }
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TCO_Transaction", "RoundNew", async function RoundNew(Self, p0, p1) {
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
  U.method("TCO_Transaction", "SetAmmounts", async function SetAmmounts(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"transactionside": $.copyArg(p0), result: undefined, "debetrate": 0, "creditrate": 0, "debitammount": 0, "creditammount": 0, "lammount": 0};
  await $.fixArgs(L0, ["transactionside"]);
  L0["debetrate"] = (await $.mv((await $.mcall((await $.v(C, "DebitCurrencyData")), "FieldByName", ["Rate"])), "AsCurrency"));
  L0["creditrate"] = (await $.mv((await $.mcall((await $.v(C, "CreditCurrencyData")), "FieldByName", ["Rate"])), "AsCurrency"));
  { const $t15 = L0["transactionside"];
    if ($.eq($t15, (await $.v(C, "tsDebet")))) {
      L0["lammount"] = (await $.call(C, "RoundNew", [$.mul((await $.mv((await $.v(C, "debtvalue")), "Value")), L0["debetrate"]), 10000]));
      L0["creditammount"] = (await $.call(C, "RoundNew", [$.fdiv(L0["lammount"], L0["creditrate"]), 10000]));
      await $.mset((await $.v(C, "ekv")), "Value", (await $.call(C, "RoundNew", [L0["lammount"], 100])));
      await $.mset((await $.v(C, "creditvalue")), "Value", (await $.call(C, "RoundNew", [L0["creditammount"], 100])));
    }
    else if ($.eq($t15, (await $.v(C, "tsCredit")))) {
      L0["lammount"] = (await $.call(C, "RoundNew", [$.mul((await $.mv((await $.v(C, "creditvalue")), "Value")), L0["creditrate"]), 10000]));
      L0["debitammount"] = (await $.call(C, "RoundNew", [$.fdiv(L0["lammount"], L0["debetrate"]), 10000]));
      await $.mset((await $.v(C, "ekv")), "Value", (await $.call(C, "RoundNew", [L0["lammount"], 100])));
      await $.mset((await $.v(C, "debtvalue")), "Value", (await $.call(C, "RoundNew", [L0["debitammount"], 100])));
    }
    else if ($.eq($t15, (await $.v(C, "tsUnknown")))) {
      {
        const $t16 = Self;
        if ($.truthy($.eq((await $.mv((await $.mcall((await $.wv([$t16], "DebitCurrencyData", C, false)), "FieldByName", ["ID"])), "AsInteger")), 0))) {
          await $.mset((await $.wv([$t16], "debtvalue", C, false)), "Value", (await $.mv((await $.wv([$t16], "ekv", C, false)), "Value")));
        }
        if ($.truthy($.eq((await $.mv((await $.mcall((await $.wv([$t16], "CreditCurrencyData", C, false)), "FieldByName", ["ID"])), "AsInteger")), 0))) {
          await $.mset((await $.wv([$t16], "creditvalue", C, false)), "Value", (await $.mv((await $.wv([$t16], "ekv", C, false)), "Value")));
        }
      }
    }
  }
  return L0.result;
}, {"params": ["TransactionSide"], "kind": "procedure", "ptypes": ["TTransactionSide"]});
  U.method("TCO_Transaction", "debtvalueChange", async function debtvalueChange(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.stmt((await $.call(C, "CutEditText", [L0["sender"]])));
  await $.mset((await $.v(C, "ButtonApply")), "enabled", true);
  if ($.truthy($.eq((await $.mv((await $.call(C, "TCurrencyEdit", [L0["sender"]])), "Text")), (await $.v(C, "EmptyStr"))))) {
    await $.mset((await $.call(C, "TCurrencyEdit", [L0["sender"]])), "Value", 0);
  }
  { const $t17 = (await $.mv((await $.call(C, "TCurrencyEdit", [L0["sender"]])), "Tag"));
    if ($.eq($t17, 1)) {
      await $.set(C, "TransactionSide", (await $.v(C, "tsDebet")));
    }
    else if ($.eq($t17, 2)) {
      await $.set(C, "TransactionSide", (await $.v(C, "tsCredit")));
    }
    else if ($.eq($t17, 3)) {
      await $.set(C, "TransactionSide", (await $.v(C, "tsUnknown")));
    }
  }
  await $.stmt((await $.call(C, "SetAmmounts", [(await $.v(C, "TransactionSide"))])));
  await $.set(C, "Modifed", true);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TCO_Transaction", "creditvalueChange", async function creditvalueChange(Self, p0) {
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
  U.method("TCO_Transaction", "TrdestChange", async function TrdestChange(Self, p0) {
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
  U.method("TCO_Transaction", "DBLookupComboBox5Click", async function DBLookupComboBox5Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mset((await $.v(C, "Trdest")), "Text", (await $.call(C, "IntToStr", [(await $.mv((await $.mcall((await $.mv((await $.mv((await $.v(C, "DBLookupComboBox5")), "ListSource")), "DataSet")), "FieldByName", ["id"])), "AsInTeger"))])));
  await $.mset((await $.v(C, "dbedit6")), "text", (await $.mv((await $.v(C, "DBLookupComboBox5")), "text")));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TCO_Transaction", "val_codeKeyPress", async function val_codeKeyPress(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "key": $.asRef(p1), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.eq((await L0["key"].get()), "\r"))) {
    await $.mcall((await $.v(C, "DebtAccSearchEdit")), "SetFocus", []);
  }
  return L0.result;
}, {"params": ["Sender", "Key"], "kind": "procedure", "ptypes": ["TObject", "Char"]});
  U.method("TCO_Transaction", "DebtAccSearchEditKeyPress", async function DebtAccSearchEditKeyPress(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "key": $.asRef(p1), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.eq((await L0["key"].get()), "\r"))) {
    await $.mcall((await $.v(C, "cur_val_code")), "setfocus", []);
  }
  return L0.result;
}, {"params": ["Sender", "Key"], "kind": "procedure", "ptypes": ["TObject", "Char"]});
  U.method("TCO_Transaction", "cur_val_codeKeyPress", async function cur_val_codeKeyPress(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "key": $.asRef(p1), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.eq((await L0["key"].get()), "\r"))) {
    await $.mcall((await $.v(C, "CreditAccSearchEdit")), "Setfocus", []);
  }
  return L0.result;
}, {"params": ["Sender", "Key"], "kind": "procedure", "ptypes": ["TObject", "Char"]});
  U.method("TCO_Transaction", "CreditAccSearchEditKeyPress", async function CreditAccSearchEditKeyPress(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "key": $.asRef(p1), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.eq((await L0["key"].get()), "\r"))) {
    await $.mcall((await $.v(C, "debtvalue")), "setfocus", []);
  }
  return L0.result;
}, {"params": ["Sender", "Key"], "kind": "procedure", "ptypes": ["TObject", "Char"]});
  U.method("TCO_Transaction", "debtvalueKeyPress", async function debtvalueKeyPress(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "key": $.asRef(p1), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.eq((await L0["key"].get()), "\r"))) {
    await $.mcall((await $.v(C, "Trdest")), "Setfocus", []);
  }
  return L0.result;
}, {"params": ["Sender", "Key"], "kind": "procedure", "ptypes": ["TObject", "Char"]});
  U.method("TCO_Transaction", "TrdestKeyPress", async function TrdestKeyPress(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "key": $.asRef(p1), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.eq((await L0["key"].get()), "\r"))) {
    await $.mcall((await $.v(C, "ButtonApply")), "SetFocus", []);
  }
  return L0.result;
}, {"params": ["Sender", "Key"], "kind": "procedure", "ptypes": ["TObject", "Char"]});
  U.method("TCO_Transaction", "ButtonApplyKeyPress", async function ButtonApplyKeyPress(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "key": $.asRef(p1), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.eq((await $.call(C, "ORD", [(await L0["key"].get())])), (await $.v(C, "VK_RETURN"))))) {
    if ($.truthy($.is_(L0["sender"], "TWinControl"))) {
      {
        const $t18 = L0["sender"];
        { const $t19 = (await $.wv([$t18], "Tag", C, false));
          if ($.eq($t19, 1)) {
            await $.stmt((await $.wcall([$t18], "SelectNext", [(await $.wv([$t18], "Sender", { get: async () => L0["sender"], set: async (v) => { L0["sender"] = v; }, local: true }, false)), (await $.wv([$t18], "True", C, false)), (await $.wv([$t18], "True", C, false))], C)));
          }
        }
      }
    }
    await L0["key"].set("\u0000");
  }
  return L0.result;
}, {"params": ["Sender", "Key"], "kind": "procedure", "ptypes": ["TObject", "Char"]});
  U.method("TCO_Transaction", "ButtonApplyClick", async function ButtonApplyClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy((await $.and_((await $.and_((await $.and_((await $.and_((await $.and_(($.ne((await $.mv((await $.v(C, "debtvalue")), "Text")), "")), async () => ($.ne((await $.mv((await $.v(C, "debtvalue")), "Text")), "0")))), async () => ($.ne((await $.mv((await $.v(C, "creditvalue")), "Text")), "")))), async () => ($.ne((await $.mv((await $.v(C, "creditvalue")), "Text")), "0")))), async () => ($.ne((await $.mv((await $.v(C, "ekv")), "Text")), "")))), async () => ($.ne((await $.mv((await $.v(C, "ekv")), "Text")), "0")))))) {
    await $.stmt((await $.mcall((await $.mv((await $.v(C, "CO_DataMod")), "OPackage")), "CallProcedure", ["ins_transaction", [(await $.call(C, "strtoint", [(await $.mv((await $.v(C, "acc_id")), "text"))])), (await $.call(C, "strtoint", [(await $.mv((await $.v(C, "acc_id_")), "text"))])), (await $.mv((await $.v(C, "debtvalue")), "value")), (await $.mv((await $.v(C, "creditvalue")), "value")), (await $.mv((await $.v(C, "dbedit6")), "text")), (await $.mv((await $.v(C, "ekv")), "Value")), (await $.call(C, "strtofloat", [(await $.mv((await $.v(C, "editrate")), "text"))])), (await $.call(C, "strtofloat", [(await $.mv((await $.v(C, "editrate_")), "text"))])), (await $.mv((await $.v(C, "ReportIDLookUp")), "KeyValue")), (await $.mv((await $.v(C, "CountrIDLookUp")), "KeyValue")), (await $.mv((await $.v(C, "CashSymbolLookUp")), "KeyValue")), (await $.mv((await $.v(C, "ConvertationSymbolLookUp")), "KeyValue"))]])));
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
    await $.stmt((await $.call(C, "Showmessage", ["Məbləği daxil edin!"])));
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TCO_Transaction", "ButtonCloseClick", async function ButtonCloseClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.stmt($.call(C, "Close", []));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TCO_Transaction", "ButtonCancelClick", async function ButtonCancelClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mset((await $.v(C, "debtvalue")), "text", "");
  await $.mset((await $.v(C, "creditvalue")), "text", "");
  await $.mset((await $.v(C, "ekv")), "Text", "");
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TCO_Transaction", "SetCurrencyFilter", async function SetCurrencyFilter(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"accountdataset": $.copyArg(p0), "currencydataset": $.copyArg(p1), result: undefined, "accountid": 0};
  await $.fixArgs(L0, ["accountdataset", "currencydataset"]);
  L0["accountid"] = (await $.mv((await $.mcall(L0["accountdataset"], "FieldByName", ["ID"])), "AsInteger"));
  await $.mset(L0["accountdataset"], "Filtered", false);
  await $.mset(L0["accountdataset"], "Filter", $.add("val_acc=", (await $.mv((await $.mcall(L0["currencydataset"], "FieldByName", ["ID"])), "AsString"))));
  await $.mset(L0["accountdataset"], "Filtered", true);
  await $.stmt((await $.mcall(L0["accountdataset"], "Locate", ["ID", L0["accountid"], []])));
  return L0.result;
}, {"params": ["AccountDataSet", "CurrencyDataSet"], "kind": "procedure", "ptypes": ["TDataSet", "TDataSet"]});
  U.method("TCO_Transaction", "editvaluteCloseUp", async function editvaluteCloseUp(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t20 = (await $.v(C, "DebtAccSearchEdit"));
    const $t21 = (await $.wv([$t20], "CO_DataMod", C, false));
    await $.mset((await $.mv((await $.wv([$t20, $t21], "DataSource", C, false)), "DataSet")), "Filtered", (await $.wv([$t20, $t21], "False", C, false)));
    await $.mset((await $.mv((await $.wv([$t20, $t21], "DataSource", C, false)), "DataSet")), "Filter", $.add("val_acc= ", (await $.mv((await $.mcall((await $.wv([$t20, $t21], "DebitCurrencyData", C, false)), "FieldByName", ["ID"])), "AsString"))));
    await $.mset((await $.mv((await $.wv([$t20, $t21], "DataSource", C, false)), "DataSet")), "Filtered", (await $.wv([$t20, $t21], "True", C, false)));
    await $.wset([$t20, $t21], "Text", "", C);
  }
  {
    const $t22 = (await $.mv((await $.v(C, "CO_DataMod")), "temprate"));
    await $.stmt($.wcall([$t22], "Close", [], C));
    await $.mcall((await $.wv([$t22], "SQL", C, false)), "Clear", []);
    await $.mset((await $.wv([$t22], "SQL", C, false)), "Text", $.add($.add($.add("Select c.rowid ,c.* from temprate c where val_kod= ", "'"), (await $.mv((await $.wv([$t22], "val_code", C, false)), "Text"))), "'"));
    await $.stmt($.wcall([$t22], "Open", [], C));
    await $.mset((await $.wv([$t22], "editrate", C, false)), "Text", (await $.mv((await $.wcall([$t22], "FieldByName", ["ostat"], C)), "AsString")));
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TCO_Transaction", "editrateChange", async function editrateChange(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TCO_Transaction", "val_codeChange", async function val_codeChange(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.ne((await $.mv((L0["sender"]), "Text")), ""))) {
    await $.mset((await $.v(C, "Editvalute")), "KeyValue", (await $.call(C, "StrToInt", [(await $.mv((L0["sender"]), "Text"))])));
  } else {
    await $.mset((await $.v(C, "Editvalute")), "KeyValue", (await $.v(C, "null")));
  }
  await $.stmt((await $.call(C, "EditvaluteCloseUp", [L0["sender"]])));
  await $.mset((await $.v(C, "dbedit1")), "text", "");
  await $.mset((await $.v(C, "dbedit2")), "text", "");
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TCO_Transaction", "editvaluteClick", async function editvaluteClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mset((await $.v(C, "val_code")), "Text", (await $.call(C, "IntToStr", [(await $.mv((await $.mcall((await $.mv((await $.mv((await $.v(C, "editvalute")), "ListSource")), "DataSet")), "FieldByName", ["id"])), "AsInTeger"))])));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TCO_Transaction", "editvalute_Click", async function editvalute_Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mset((await $.v(C, "cur_val_code")), "Text", (await $.call(C, "IntToStr", [(await $.mv((await $.mcall((await $.mv((await $.mv((await $.v(C, "editvalute")), "ListSource")), "DataSet")), "FieldByName", ["id"])), "AsInTeger"))])));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TCO_Transaction", "DBLookupComboBox7Click", async function DBLookupComboBox7Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mset((await $.v(C, "cur_val_code")), "Text", (await $.call(C, "IntToStr", [(await $.mv((await $.mcall((await $.mv((await $.mv((await $.v(C, "editvalute_")), "ListSource")), "DataSet")), "FieldByName", ["id"])), "AsInTeger"))])));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TCO_Transaction", "editvalute_CloseUp", async function editvalute_CloseUp(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t23 = (await $.v(C, "CreditAccSearchEdit"));
    const $t24 = (await $.wv([$t23], "CO_DataMod", C, false));
    await $.mset((await $.mv((await $.wv([$t23, $t24], "DataSource", C, false)), "DataSet")), "Filtered", (await $.wv([$t23, $t24], "False", C, false)));
    await $.mset((await $.mv((await $.wv([$t23, $t24], "DataSource", C, false)), "DataSet")), "Filter", $.add("val_acc= ", (await $.mv((await $.mcall((await $.wv([$t23, $t24], "CreditCurrencyData", C, false)), "FieldByName", ["ID"])), "AsString"))));
    await $.mset((await $.mv((await $.wv([$t23, $t24], "DataSource", C, false)), "DataSet")), "Filtered", (await $.wv([$t23, $t24], "True", C, false)));
    await $.wset([$t23, $t24], "Text", "", C);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TCO_Transaction", "ReportIDDBEditChange", async function ReportIDDBEditChange(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mset((await $.v(C, "ReportIDLookUp")), "KeyValue", (await $.mv((L0["sender"]), "Text")));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TCO_Transaction", "CountrIDDBEditChange", async function CountrIDDBEditChange(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mset((await $.v(C, "CountrIDLookUp")), "KeyValue", (await $.mv((L0["sender"]), "Text")));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TCO_Transaction", "ReportIDLookUpCloseUp", async function ReportIDLookUpCloseUp(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mset((await $.v(C, "ReportIDDBEdit")), "Text", (await $.mv((L0["sender"]), "keyvalue")));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TCO_Transaction", "CountrIDLookUpCloseUp", async function CountrIDLookUpCloseUp(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mset((await $.v(C, "CountrIDDBEdit")), "Text", (await $.mv((L0["sender"]), "keyvalue")));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TCO_Transaction", "ConvertationSymbolLookUpCloseUp", async function ConvertationSymbolLookUpCloseUp(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  try {
    await $.mset((await $.v(C, "SearchEdit2")), "Text", (await $.mv((L0["sender"]), "keyvalue")));
  } catch ($t25) {
    $.rethrowControl($t25);
    $.handled($t25);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TCO_Transaction", "CashSymbolLookUpCloseUp", async function CashSymbolLookUpCloseUp(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  try {
    await $.mset((await $.v(C, "SearchEdit3")), "Text", (await $.mv((L0["sender"]), "keyvalue")));
  } catch ($t26) {
    $.rethrowControl($t26);
    $.handled($t26);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TCO_Transaction", "SearchEdit3Change", async function SearchEdit3Change(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mset((await $.v(C, "CashSymbolLookUp")), "KeyValue", (await $.mv((L0["sender"]), "Text")));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TCO_Transaction", "SearchEdit2Change", async function SearchEdit2Change(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mset((await $.v(C, "ConvertationSymbolLookUp")), "KeyValue", (await $.mv((L0["sender"]), "Text")));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  return U;
}
