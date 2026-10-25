// Generated from TransactionPropertiesForm_Unit.pas by pas2js — do not edit by hand; regenerate instead.
/* eslint-disable */
// @ts-nocheck

export default function define($) {
  const U = $.unit("TransactionPropertiesForm_Unit", ["Windows", "Messages", "SysUtils", "Classes", "Graphics", "Controls", "Forms", "LDialogs", "StdCtrls", "ComCtrls", "ExtCtrls", "DBCtrls", "CurrencyEdit", "Mask", "Db", "DBTables", "Grids", "DBGrids", "ActnList", "OracleData", "DBViewComboBox", "SBTransaction", "HintBox", "sboapiDataModuleImpl", "TrDescrForm_Unit", "TransactionsDataModuleImpl", "SBCore"]);
  const C = [U];
  U.const("tmEdit", 0);
  U.const("tmNew", 1);
  U.defClass("TTransactionPropertiesForm", "TForm", {"accountgb": {"name": "AccountGB", "type": "TGroupBox"}, "headercontrol1": {"name": "HeaderControl1", "type": "THeaderControl"}, "headercontrol2": {"name": "HeaderControl2", "type": "THeaderControl"}, "ammountgb": {"name": "AmmountGB", "type": "TGroupBox"}, "debettrammountpanel": {"name": "DebetTrAmmountPanel", "type": "TPanel"}, "debetammountpanel": {"name": "DebetAmmountPanel", "type": "TPanel"}, "debitamountedit": {"name": "DebitAmountEdit", "type": "TCurrencyEdit"}, "debetlammountpanel": {"name": "DebetLAmmountPanel", "type": "TPanel"}, "debitlamountedit": {"name": "DebitLAmountEdit", "type": "TCurrencyEdit"}, "credittrammountpanel": {"name": "CreditTrAmmountPanel", "type": "TPanel"}, "creditammountpanel": {"name": "CreditAmmountPanel", "type": "TPanel"}, "creditamountedit": {"name": "CreditAmountEdit", "type": "TCurrencyEdit"}, "creditlammountpanel": {"name": "CreditLAmmountPanel", "type": "TPanel"}, "creditlamountedit": {"name": "CreditLAmountEdit", "type": "TCurrencyEdit"}, "othergb": {"name": "OtherGB", "type": "TGroupBox"}, "label14": {"name": "Label14", "type": "TLabel"}, "compositenumberedit": {"name": "CompositeNumberEdit", "type": "TDBEdit"}, "compositecb": {"name": "CompositeCB", "type": "TDBLookupComboBox"}, "dbedit29": {"name": "DBEdit29", "type": "TDBEdit"}, "dbedit22": {"name": "DBEdit22", "type": "TDBEdit"}, "label20": {"name": "Label20", "type": "TLabel"}, "label15": {"name": "Label15", "type": "TLabel"}, "label2": {"name": "Label2", "type": "TLabel"}, "trnoedit": {"name": "TrNoEdit", "type": "TEdit"}, "label17": {"name": "Label17", "type": "TLabel"}, "label12": {"name": "Label12", "type": "TLabel"}, "label22": {"name": "Label22", "type": "TLabel"}, "label25": {"name": "Label25", "type": "TLabel"}, "dbedit14": {"name": "DBEdit14", "type": "TDBEdit"}, "dbedit16": {"name": "DBEdit16", "type": "TDBEdit"}, "dbedit24": {"name": "DBEdit24", "type": "TDBEdit"}, "dbedit27": {"name": "DBEdit27", "type": "TDBEdit"}, "button1": {"name": "Button1", "type": "TButton"}, "button2": {"name": "Button2", "type": "TButton"}, "button3": {"name": "Button3", "type": "TButton"}, "groupbox1": {"name": "GroupBox1", "type": "TGroupBox"}, "label18": {"name": "Label18", "type": "TLabel"}, "label19": {"name": "Label19", "type": "TLabel"}, "inbalancecharcb": {"name": "InbalanceCharCB", "type": "TDBLookupComboBox"}, "outbalancecharcb": {"name": "OutBalanceCharCB", "type": "TDBLookupComboBox"}, "cyphergb": {"name": "CypherGB", "type": "TGroupBox"}, "operationnamecb": {"name": "OperationNameCB", "type": "TDBLookupComboBox"}, "packagenumberedit": {"name": "PackageNumberEdit", "type": "TDBEdit"}, "dbedit8": {"name": "DBEdit8", "type": "TDBEdit"}, "dbedit9": {"name": "DBEdit9", "type": "TDBEdit"}, "inbalancecharedit": {"name": "InBalanceCharEdit", "type": "TDBEdit"}, "dbedit11": {"name": "DBEdit11", "type": "TDBEdit"}, "trnameedit": {"name": "TrNameEdit", "type": "TDBEdit"}, "actionlist1": {"name": "ActionList1", "type": "TActionList"}, "commitaction": {"name": "CommitAction", "type": "TAction"}, "cancelaction": {"name": "CancelAction", "type": "TAction"}, "closeaction": {"name": "CloseAction", "type": "TAction"}, "panel1": {"name": "Panel1", "type": "TPanel"}, "panel2": {"name": "Panel2", "type": "TPanel"}, "panel3": {"name": "Panel3", "type": "TPanel"}, "label1": {"name": "Label1", "type": "TLabel"}, "debitaccbalancelabel": {"name": "DebitAccBalanceLabel", "type": "TLabel"}, "label3": {"name": "Label3", "type": "TLabel"}, "debitlbalancelabel": {"name": "DebitLBalanceLabel", "type": "TLabel"}, "debetaccnamepanel": {"name": "DebetAccNamePanel", "type": "TPanel"}, "debitaccnamecb": {"name": "DebitAccNameCB", "type": "TDBLookupComboBox"}, "debetaccnopanel": {"name": "DebetAccNoPanel", "type": "TPanel"}, "debitaccnosearchedit": {"name": "DebitAccNoSearchEdit", "type": "TEdit"}, "debitaccnocb": {"name": "DebitAccNoCB", "type": "TDBLookupComboBox"}, "debetcurrencypanel": {"name": "DebetCurrencyPanel", "type": "TPanel"}, "debitcurrencyidedit": {"name": "DebitCurrencyIDEdit", "type": "TDBEdit"}, "dbedit5": {"name": "DBEdit5", "type": "TDBEdit"}, "debitcurrencycb": {"name": "DebitCurrencyCB", "type": "TDBViewComboBox"}, "panel4": {"name": "Panel4", "type": "TPanel"}, "panel5": {"name": "Panel5", "type": "TPanel"}, "label4": {"name": "Label4", "type": "TLabel"}, "creditaccbalancelabel": {"name": "CreditAccBalanceLabel", "type": "TLabel"}, "label6": {"name": "Label6", "type": "TLabel"}, "creditlbalancelabel": {"name": "CreditLBalanceLabel", "type": "TLabel"}, "creditaccnamepanel": {"name": "CreditAccNamePanel", "type": "TPanel"}, "creditaccnamecb": {"name": "CreditAccNameCB", "type": "TDBLookupComboBox"}, "creditaccnopanel": {"name": "CreditAccNoPanel", "type": "TPanel"}, "creditaccnosearchedit": {"name": "CreditAccNoSearchEdit", "type": "TEdit"}, "creditaccnocb": {"name": "CreditAccNoCB", "type": "TDBLookupComboBox"}, "creditcurrencypanel": {"name": "CreditCurrencyPanel", "type": "TPanel"}, "creditcurrencyidedit": {"name": "CreditCurrencyIDEdit", "type": "TDBEdit"}, "dbedit6": {"name": "DBEdit6", "type": "TDBEdit"}, "creditcurrencycb": {"name": "CreditCurrencyCB", "type": "TDBViewComboBox"}, "panel6": {"name": "Panel6", "type": "TPanel"}, "debetbankpanel": {"name": "DebetBankPanel", "type": "TPanel"}, "panel10": {"name": "Panel10", "type": "TPanel"}, "dbedit1": {"name": "DBEdit1", "type": "TDBEdit"}, "panel11": {"name": "Panel11", "type": "TPanel"}, "dblookupcombobox5": {"name": "DBLookupComboBox5", "type": "TDBLookupComboBox"}, "creditbankpanel": {"name": "CreditBankPanel", "type": "TPanel"}, "panel15": {"name": "Panel15", "type": "TPanel"}, "dbedit2": {"name": "DBEdit2", "type": "TDBEdit"}, "panel16": {"name": "Panel16", "type": "TPanel"}, "dblookupcombobox6": {"name": "DBLookupComboBox6", "type": "TDBLookupComboBox"}, "groupbox2": {"name": "GroupBox2", "type": "TGroupBox"}, "label5": {"name": "Label5", "type": "TLabel"}, "transactiondateedit": {"name": "TransactionDateEdit", "type": "TDateTimePicker"}, "errorhintbox": {"name": "ErrorHintBox", "type": "THintBox"}, "fdebitammount": {"name": "FDebitAmmount", "type": "Currency"}, "fcreditammount": {"name": "FCreditAmmount", "type": "Currency"}, "flammount": {"name": "FLAmmount", "type": "Currency"}, "faccrefreshenabled": {"name": "FAccRefreshEnabled", "type": "Boolean"}, "fcascaderefreshdisabledcount": {"name": "FCascadeRefreshDisabledCount", "type": "Integer"}, "ftransactionid": {"name": "FTransactionID", "type": "Integer"}, "fischanged": {"name": "FIsChanged", "type": "Boolean"}, "fmodified": {"name": "FModified", "type": "Boolean"}, "finternalclosing": {"name": "FInternalClosing", "type": "Boolean"}, "frefreshdisabled": {"name": "FRefreshDisabled", "type": "Boolean"}, "fsavedstate": {"name": "FSavedState", "type": "TTransaction"}, "fdebitorate": {"name": "FDebitORate", "type": "Currency"}, "fcreditorate": {"name": "FCreditORate", "type": "Currency"}, "ftransactiondate": {"name": "FTransactionDate", "type": "TDateTime"}, "fmode": {"name": "FMode", "type": "TTransactionMode"}, "freadonly": {"name": "FReadOnly", "type": "Boolean"}}, {"ischanged": {"name": "IsChanged", "read": "FIsChanged"}, "modified": {"name": "Modified", "read": "FModified", "write": "SetModified"}, "refreshdisabled": {"name": "RefreshDisabled", "read": "FRefreshDisabled", "write": "FRefreshDisabled"}, "debitorate": {"name": "DebitORate", "read": "FDebitORate", "write": "FDebitORate"}, "creditorate": {"name": "CreditORate", "read": "FCreditORate", "write": "FCreditORate"}, "transactiondate": {"name": "TransactionDate", "read": "FTransactionDate", "write": "SetTransactionDate"}});
  U.fieldInit("TTransactionPropertiesForm", "fsavedstate", () => $.rec("ttransaction"));
  U.init(async () => {
    U.const("DefaultCurrency", 0);
    U.var_("TransactionPropertiesForm", null, "TTransactionPropertiesForm");
  });
  U.method("TTransactionPropertiesForm", "RoundNew", async function RoundNew(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"x": $.copyArg(p0), "precision": $.copyArg(p1), result: 0, "scaledfractpart": 0, "temp": 0};
  await $.fixArgs(L0, ["x", "precision"]);
  L0["scaledfractpart"] = $.mul((await $.call(C, "Frac", [L0["x"]])), L0["precision"]);
  L0["temp"] = (await $.call(C, "Frac", [L0["scaledfractpart"]]));
  L0["scaledfractpart"] = (await $.call(C, "Int", [L0["scaledfractpart"]]));
  if ($.truthy($.ge(L0["temp"], 0.5))) {
    L0["scaledfractpart"] = $.add(L0["scaledfractpart"], 1);
  }
  if ($.truthy($.le(L0["temp"], (-(0.5))))) {
    L0["scaledfractpart"] = $.sub(L0["scaledfractpart"], 1);
  }
  L0.result = $.add((await $.call(C, "Int", [L0["x"]])), $.fdiv(L0["scaledfractpart"], L0["precision"]));
  return L0.result;
}, {"params": ["X", "Precision"], "kind": "function", "ptypes": ["Double", "Integer"]});
  U.method("TTransactionPropertiesForm", "View", async function View(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"id": $.copyArg(p0), "readonly": $.copyArg(p1), result: false};
  await $.fixArgs(L0, ["id", "readonly"]);
  await $.set(C, "FMode", (await $.v(C, "tmEdit")));
  await $.set(C, "FTransactionID", L0["id"]);
  await $.set(C, "Caption", (await $.call(C, "Format", ["Editing transaction #%d", [(await $.v(C, "FTransactionID"))]])));
  {
    const $t1 = (await $.v(C, "TransactionsDataModule"));
    const $t2 = (await $.wv([$t1], "TransactionsData", C, false));
    await $.stmt($.wcall([$t1, $t2], "Edit", [], C));
    await $.mset((await $.wv([$t1, $t2], "DebitAmountEdit", C, false)), "Value", (await $.mv((await $.wcall([$t1, $t2], "FieldByName", ["DebitAmount"], C)), "AsCurrency")));
    await $.mset((await $.wv([$t1, $t2], "CreditAmountEdit", C, false)), "Value", (await $.mv((await $.wcall([$t1, $t2], "FieldByName", ["CreditAmount"], C)), "AsCurrency")));
    await $.mset((await $.wv([$t1, $t2], "DebitLAmountEdit", C, false)), "Value", (await $.mv((await $.wcall([$t1, $t2], "FieldByName", ["LAmount"], C)), "AsCurrency")));
    await $.mset((await $.wv([$t1, $t2], "CreditLAmountEdit", C, false)), "Value", (await $.mv((await $.wv([$t1, $t2], "DebitLAmountEdit", C, false)), "Value")));
    await $.mset((await $.wv([$t1, $t2], "TransactionDateEdit", C, false)), "DateTime", (await $.mv((await $.wcall([$t1, $t2], "FieldByName", ["TransactionDate"], C)), "AsDateTime")));
  }
  {
    const $t3 = (await $.v(C, "TransactionsDataModule"));
    await $.wset([$t3], "LastCacheAccountSide", (await $.wv([$t3], "asUnknown", C, false)), C);
    await $.stmt($.wcall([$t3], "PrepareCacheSymbols", [], C));
  }
  await $.set(C, "Modified", false);
  await $.set(C, "FReadOnly", L0["readonly"]);
  if ($.truthy($.not((await $.v(C, "Active"))))) {
    await $.stmt($.call(C, "ShowModal", []));
  }
  L0["result"] = (await $.v(C, "FIsChanged"));
  return L0.result;
}, {"params": ["ID", "ReadOnly"], "kind": "function", "ptypes": ["Integer", "Boolean"]});
  U.method("TTransactionPropertiesForm", "New", async function New(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: false};
  await $.set(C, "FMode", (await $.v(C, "tmNew")));
  await $.set(C, "Caption", "Adding new transaction");
  await $.stmt($.call(C, "Reset", []));
  await $.set(C, "FReadOnly", false);
  await $.stmt($.call(C, "ShowModal", []));
  L0["result"] = (await $.v(C, "FIsChanged"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TTransactionPropertiesForm", "DebetCurrencyTableAfterScroll", async function DebetCurrencyTableAfterScroll(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"dataset": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["dataset"]);
  await $.mset((await $.v(C, "DebitAccNoSearchEdit")), "Text", "");
  await $.mset((await $.v(C, "DebitAmountEdit")), "Value", 0.0);
  await $.mset((await $.v(C, "CreditAmountEdit")), "Value", 0.0);
  await $.mset((await $.v(C, "DebitLAmountEdit")), "Value", 0.0);
  await $.mset((await $.v(C, "CreditLAmountEdit")), "Value", 0.0);
  await $.mcall((await $.mcall((await $.mv((await $.v(C, "TransactionsDataModule")), "TransactionsData")), "FieldByName", ["DebitAccID"])), "Clear", []);
  return L0.result;
}, {"params": ["DataSet"], "kind": "procedure", "ptypes": ["TDataSet"]});
  U.method("TTransactionPropertiesForm", "DebitCurrencyNameCBChange", async function DebitCurrencyNameCBChange(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t4 = (L0["sender"]);
    const $t5 = (await $.mv((await $.wv([$t4], "TransactionsDataModule", C, false)), "DebitCurrencyData"));
    await $.wset([$t4, $t5], "RecNo", $.add((await $.wv([$t4, $t5], "ItemIndex", C, false)), 1), C);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TTransactionPropertiesForm", "CreditCurrencyTableAfterScroll", async function CreditCurrencyTableAfterScroll(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"dataset": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["dataset"]);
  await $.mset((await $.v(C, "CreditAccNoSearchEdit")), "Text", "");
  await $.mset((await $.v(C, "DebitAmountEdit")), "Value", 0.0);
  await $.mset((await $.v(C, "CreditAmountEdit")), "Value", 0.0);
  await $.mset((await $.v(C, "DebitLAmountEdit")), "Value", 0.0);
  await $.mset((await $.v(C, "CreditLAmountEdit")), "Value", 0.0);
  await $.mcall((await $.mv((await $.v(C, "TransactionsDataModule")), "TransactionsDataCREDITID")), "Clear", []);
  return L0.result;
}, {"params": ["DataSet"], "kind": "procedure", "ptypes": ["TDataSet"]});
  U.method("TTransactionPropertiesForm", "CreditCurrencyNameCBChange", async function CreditCurrencyNameCBChange(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TTransactionPropertiesForm", "DebitCurrencyIDEditChange", async function DebitCurrencyIDEditChange(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t6 = (L0["sender"]);
    if ($.truthy((await $.wv([$t6], "Focused", C, false)))) {
      if ($.truthy((await $.mcall((await $.mv((await $.wv([$t6], "TransactionsDataModule", C, false)), "DebitCurrencyData")), "Locate", ["ID", (await $.wv([$t6], "Text", C, false)), []])))) {
        await $.wset([$t6], "Color", (await $.wv([$t6], "clWhite", C, false)), C);
      } else {
        await $.wset([$t6], "Color", (await $.wv([$t6], "clRed", C, false)), C);
        await $.stmt($.wcall([$t6], "Beep", [], C));
      }
    }
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TTransactionPropertiesForm", "CreditCurrencyIDEditChange", async function CreditCurrencyIDEditChange(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TTransactionPropertiesForm", "CreditAccQueryAfterScroll", async function CreditAccQueryAfterScroll(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"dataset": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["dataset"]);
  if ($.truthy($.eq((await $.mv((await $.v(C, "CreditAccNoSearchEdit")), "Tag")), 0))) {
    await $.stmt((await $.call(C, "SetSelectedText", [(await $.v(C, "CreditAccNoSearchEdit")), (await $.mv((await $.mcall(L0["dataset"], "FieldByName", ["ACC_NO"])), "AsString"))])));
  } else {
    await $.mset((await $.v(C, "CreditAccNoSearchEdit")), "Tag", 0);
  }
  if ($.truthy($.not((await $.mv((await $.v(C, "CreditAccNoSearchEdit")), "Focused"))))) {
    await $.mset((await $.v(C, "CreditAccNoSearchEdit")), "Text", (await $.mv((await $.mcall(L0["dataset"], "FieldByName", ["ACC_NO"])), "AsString")));
  }
  return L0.result;
}, {"params": ["DataSet"], "kind": "procedure", "ptypes": ["TDataSet"]});
  U.method("TTransactionPropertiesForm", "SetDebitAmmount", async function SetDebitAmmount(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "debitrate": 0, "creditrate": 0, "fdebitlammount": 0};
  await $.fixArgs(L0, ["sender"]);
  await $.stmt((await $.call(C, "CutEditText", [L0["sender"]])));
  {
    const $t7 = L0["sender"];
    await $.wset([$t7], "FDebitAmmount", (await $.wv([$t7], "Value", C, false)), C);
    await $.mset((await $.wv([$t7], "DebitAmountEdit", C, false)), "Value", (await $.wv([$t7], "Value", C, false)));
    {
      const $t8 = (await $.mv((await $.wv([$t7], "TransactionsDataModule", C, false)), "DebitCurrencyData"));
      await $.wset([$t7, $t8], "DebitRate", (await $.mv((await $.wcall([$t7, $t8], "FieldByName", ["Rate"], C)), "AsCurrency")), { get: async () => L0["debitrate"], set: async (v) => { L0["debitrate"] = v; }, local: true });
    }
    {
      const $t9 = (await $.mv((await $.wv([$t7], "TransactionsDataModule", C, false)), "CreditCurrencyData"));
      await $.wset([$t7, $t9], "CreditRate", (await $.mv((await $.wcall([$t7, $t9], "FieldByName", ["Rate"], C)), "AsCurrency")), { get: async () => L0["creditrate"], set: async (v) => { L0["creditrate"] = v; }, local: true });
    }
    await $.wset([$t7], "FDebitLammount", (await $.wcall([$t7], "RoundNew", [$.mul((await $.mv((await $.wv([$t7], "DebitAmountEdit", C, false)), "Value")), (await $.wv([$t7], "DebitRate", { get: async () => L0["debitrate"], set: async (v) => { L0["debitrate"] = v; }, local: true }, false))), 10000], C)), { get: async () => L0["fdebitlammount"], set: async (v) => { L0["fdebitlammount"] = v; }, local: true });
    await $.mset((await $.wv([$t7], "DebitLAmountEdit", C, false)), "Value", (await $.wcall([$t7], "RoundNew", [(await $.wv([$t7], "FDebitLammount", { get: async () => L0["fdebitlammount"], set: async (v) => { L0["fdebitlammount"] = v; }, local: true }, false)), 100], C)));
    await $.mset((await $.wv([$t7], "CreditLAmountEdit", C, false)), "Value", (await $.mv((await $.wv([$t7], "DebitLAmountEdit", C, false)), "Value")));
    if ($.truthy((await $.and_((await $.and_(($.not((await $.mv((await $.wv([$t7], "CreditAmountEdit", C, false)), "Focused")))), async () => ($.ne((await $.wv([$t7], "CreditRate", { get: async () => L0["creditrate"], set: async (v) => { L0["creditrate"] = v; }, local: true }, false)), 0.0)))), async () => ($.eq((await $.wv([$t7], "FCascadeRefreshDisabledCount", C, false)), 0)))))) {
      await $.mset((await $.wv([$t7], "CreditAmountEdit", C, false)), "Value", (await $.wcall([$t7], "RoundNew", [$.fdiv((await $.wv([$t7], "FDebitLammount", { get: async () => L0["fdebitlammount"], set: async (v) => { L0["fdebitlammount"] = v; }, local: true }, false)), (await $.wv([$t7], "CreditRate", { get: async () => L0["creditrate"], set: async (v) => { L0["creditrate"] = v; }, local: true }, false))), 100], C)));
    }
  }
  await $.set(C, "Modified", true);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TTransactionPropertiesForm", "SetCreditAmmount", async function SetCreditAmmount(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "debitrate": 0, "creditrate": 0, "fcreditlammount": 0};
  await $.fixArgs(L0, ["sender"]);
  await $.stmt((await $.call(C, "CutEditText", [L0["sender"]])));
  {
    const $t10 = L0["sender"];
    await $.wset([$t10], "FCreditAmmount", (await $.wv([$t10], "Value", C, false)), C);
    await $.mset((await $.wv([$t10], "CreditAmountEdit", C, false)), "Value", (await $.wv([$t10], "Value", C, false)));
    {
      const $t11 = (await $.mv((await $.wv([$t10], "TransactionsDataModule", C, false)), "DebitCurrencyData"));
      await $.wset([$t10, $t11], "DebitRate", (await $.mv((await $.wcall([$t10, $t11], "FieldByName", ["Rate"], C)), "AsCurrency")), { get: async () => L0["debitrate"], set: async (v) => { L0["debitrate"] = v; }, local: true });
    }
    {
      const $t12 = (await $.mv((await $.wv([$t10], "TransactionsDataModule", C, false)), "CreditCurrencyData"));
      await $.wset([$t10, $t12], "CreditRate", (await $.mv((await $.wcall([$t10, $t12], "FieldByName", ["Rate"], C)), "AsCurrency")), { get: async () => L0["creditrate"], set: async (v) => { L0["creditrate"] = v; }, local: true });
    }
    await $.wset([$t10], "FCreditLAmmount", (await $.wcall([$t10], "RoundNew", [$.mul((await $.mv((await $.wv([$t10], "CreditAmountEdit", C, false)), "Value")), (await $.wv([$t10], "CreditRate", { get: async () => L0["creditrate"], set: async (v) => { L0["creditrate"] = v; }, local: true }, false))), 10000], C)), { get: async () => L0["fcreditlammount"], set: async (v) => { L0["fcreditlammount"] = v; }, local: true });
    await $.mset((await $.wv([$t10], "CreditLAmountEdit", C, false)), "Value", (await $.wcall([$t10], "RoundNew", [(await $.wv([$t10], "FCreditLAmmount", { get: async () => L0["fcreditlammount"], set: async (v) => { L0["fcreditlammount"] = v; }, local: true }, false)), 100], C)));
    await $.mset((await $.wv([$t10], "DebitLAmountEdit", C, false)), "Value", (await $.mv((await $.wv([$t10], "CreditLAmountEdit", C, false)), "Value")));
    if ($.truthy((await $.and_((await $.and_(($.not((await $.mv((await $.wv([$t10], "DebitAmountEdit", C, false)), "Focused")))), async () => ($.ne((await $.wv([$t10], "DebitRate", { get: async () => L0["debitrate"], set: async (v) => { L0["debitrate"] = v; }, local: true }, false)), 0.0)))), async () => ($.eq((await $.wv([$t10], "FCascadeRefreshDisabledCount", C, false)), 0)))))) {
      await $.mset((await $.wv([$t10], "DebitAmountEdit", C, false)), "Value", (await $.wcall([$t10], "RoundNew", [$.fdiv((await $.wv([$t10], "FCreditLAmmount", { get: async () => L0["fcreditlammount"], set: async (v) => { L0["fcreditlammount"] = v; }, local: true }, false)), (await $.wv([$t10], "DebitRate", { get: async () => L0["debitrate"], set: async (v) => { L0["debitrate"] = v; }, local: true }, false))), 100], C)));
    }
  }
  await $.set(C, "Modified", true);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TTransactionPropertiesForm", "SetLAmmount", async function SetLAmmount(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "debitrate": 0, "tempdebitrate": 0, "creditrate": 0, "tempcreditrate": 0};
  await $.fixArgs(L0, ["sender"]);
  await $.stmt((await $.call(C, "CutEditText", [L0["sender"]])));
  {
    const $t13 = L0["sender"];
    {
      const $t14 = (await $.mv((await $.wv([$t13], "TransactionsDataModule", C, false)), "TransactionsData"));
      await $.wset([$t13, $t14], "DebitRate", (await $.mv((await $.wcall([$t13, $t14], "FieldByName", ["DebitRate"], C)), "AsCurrency")), { get: async () => L0["debitrate"], set: async (v) => { L0["debitrate"] = v; }, local: true });
      await $.wset([$t13, $t14], "CreditRate", (await $.mv((await $.wcall([$t13, $t14], "FieldByName", ["CreditRate"], C)), "AsCurrency")), { get: async () => L0["creditrate"], set: async (v) => { L0["creditrate"] = v; }, local: true });
      if ($.truthy((await $.or_(((await $.mv((await $.wcall([$t13, $t14], "FieldByName", ["DebitRate"], C)), "IsNull"))), async () => ($.eq((await $.mv((await $.wcall([$t13, $t14], "FieldByName", ["DebitRate"], C)), "AsFloat")), 0.0)))))) {
        await $.wset([$t13, $t14], "TempDebitRate", (await $.mv((await $.mcall((await $.mv((await $.wv([$t13, $t14], "TransactionsDataModule", C, false)), "DebitCurrencyData")), "FieldByName", ["Rate"])), "AsCurrency")), { get: async () => L0["tempdebitrate"], set: async (v) => { L0["tempdebitrate"] = v; }, local: true });
      } else {
        await $.wset([$t13, $t14], "TempDebitRate", (await $.wv([$t13, $t14], "DebitRate", { get: async () => L0["debitrate"], set: async (v) => { L0["debitrate"] = v; }, local: true }, false)), { get: async () => L0["tempdebitrate"], set: async (v) => { L0["tempdebitrate"] = v; }, local: true });
      }
      if ($.truthy((await $.or_(((await $.mv((await $.wcall([$t13, $t14], "FieldByName", ["CreditRate"], C)), "IsNull"))), async () => ($.eq((await $.mv((await $.wcall([$t13, $t14], "FieldByName", ["CreditRate"], C)), "AsFloat")), 0.0)))))) {
        await $.wset([$t13, $t14], "TempCreditRate", (await $.mv((await $.mcall((await $.mv((await $.wv([$t13, $t14], "TransactionsDataModule", C, false)), "CreditCurrencyData")), "FieldByName", ["Rate"])), "AsCurrency")), { get: async () => L0["tempcreditrate"], set: async (v) => { L0["tempcreditrate"] = v; }, local: true });
      } else {
        await $.wset([$t13, $t14], "TempCreditRate", (await $.wv([$t13, $t14], "CreditRate", { get: async () => L0["creditrate"], set: async (v) => { L0["creditrate"] = v; }, local: true }, false)), { get: async () => L0["tempcreditrate"], set: async (v) => { L0["tempcreditrate"] = v; }, local: true });
      }
    }
    if ($.truthy((await $.and_(($.ne((await $.wv([$t13], "TempDebitRate", { get: async () => L0["tempdebitrate"], set: async (v) => { L0["tempdebitrate"] = v; }, local: true }, false)), 0.0)), async () => ($.ne((await $.wv([$t13], "TempCreditRate", { get: async () => L0["tempcreditrate"], set: async (v) => { L0["tempcreditrate"] = v; }, local: true }, false)), 0.0)))))) {
      await $.wset([$t13], "FLAmmount", (await $.wv([$t13], "Value", C, false)), C);
      if ($.truthy($.not((await $.mv((await $.wv([$t13], "DebitLAmountEdit", C, false)), "Focused"))))) {
        await $.mset((await $.wv([$t13], "DebitLAmountEdit", C, false)), "Value", (await $.wv([$t13], "Value", C, false)));
      }
      if ($.truthy($.not((await $.mv((await $.wv([$t13], "CreditLAmountEdit", C, false)), "Focused"))))) {
        await $.mset((await $.wv([$t13], "CreditLAmountEdit", C, false)), "Value", (await $.wv([$t13], "Value", C, false)));
      }
      await $.stmt((await $.wcall([$t13], "inc", [$.ref(async () => (await $.wv([$t13], "FCascadeRefreshDisabledCount", C, false)), async ($t15) => { await $.wset([$t13], "FCascadeRefreshDisabledCount", $t15, C); })], C)));
      {
        const $t16 = (await $.wv([$t13], "TransactionsDataModule", C, false));
        try {
          if ($.truthy((await $.and_(($.eq((await $.mv((await $.mcall((await $.wv([$t13, $t16], "DebitCurrencyData", C, false)), "FieldByName", ["ID"])), "AsInteger")), 0)), async () => ($.not((await $.mv((await $.wv([$t13, $t16], "DebitAmountEdit", C, false)), "Focused")))))))) {
            await $.mset((await $.wv([$t13, $t16], "DebitAmountEdit", C, false)), "Value", (await $.wcall([$t13, $t16], "RoundNew", [$.fdiv((await $.mv((await $.wv([$t13, $t16], "DebitLAmountEdit", C, false)), "Value")), (await $.wv([$t13, $t16], "TempDebitRate", { get: async () => L0["tempdebitrate"], set: async (v) => { L0["tempdebitrate"] = v; }, local: true }, false))), 100], C)));
          }
          if ($.truthy((await $.and_(($.eq((await $.mv((await $.mcall((await $.wv([$t13, $t16], "CreditCurrencyData", C, false)), "FieldByName", ["ID"])), "AsInteger")), 0)), async () => ($.not((await $.mv((await $.wv([$t13, $t16], "CreditAmountEdit", C, false)), "Focused")))))))) {
            await $.mset((await $.wv([$t13, $t16], "CreditAmountEdit", C, false)), "Value", (await $.wcall([$t13, $t16], "RoundNew", [$.fdiv((await $.mv((await $.wv([$t13, $t16], "CreditLAmountEdit", C, false)), "Value")), (await $.wv([$t13, $t16], "TempCreditRate", { get: async () => L0["tempcreditrate"], set: async (v) => { L0["tempcreditrate"] = v; }, local: true }, false))), 100], C)));
          }
        } finally {
          await $.stmt((await $.wcall([$t13, $t16], "dec", [$.ref(async () => (await $.wv([$t13, $t16], "FCascadeRefreshDisabledCount", C, false)), async ($t17) => { await $.wset([$t13, $t16], "FCascadeRefreshDisabledCount", $t17, C); })], C)));
        }
      }
    }
  }
  await $.set(C, "Modified", true);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TTransactionPropertiesForm", "SaveTransaction", async function SaveTransaction(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: undefined, "debitcurrencyrate": 0, "creditcurrencyrate": 0};
  L0["sconvertationnotenteredmsg"] = "Diqqət: konvertasiyya təyinatı daxil olunmayıb. Redaktəni davam etməyə razısınızmı?\r\n'İmtina' düyməsini basandan sonra əmaliyyat günün sərədlərinə əlavə olunacaq.";
  L0["checktransaction"] = $.fn(async function CheckTransaction() {
  const L1 = {result: false};
  L1["result"] = false;
  if ($.truthy($.not((await $.v(C, "CheckBalanceChar"))))) {
    await $.stmt((await $.mcall((await $.v(C, "ErrorHintBox")), "ShowMessage", ["Kassa simvolunu düzgün daxil edin"])));
  } else {
    if ($.truthy($.eq((await $.mv((await $.v(C, "TrNameEdit")), "Text")), ""))) {
      await $.stmt((await $.mcall((await $.v(C, "ErrorHintBox")), "ShowMessage", ["Əmalliyyatının təyyinatı daxil edin"])));
    } else {
      {
        const $t18 = (await $.v(C, "TransactionsDataModule"));
        const $t19 = (await $.wv([$t18], "TransactionsData", C, false));
        {
          const $t20 = (await $.wv([$t18, $t19], "DebitAccountData", C, false));
          await $.stmt($.wcall([$t18, $t19, $t20], "DisableControls", [], C));
          try {
            await $.stmt((await $.wcall([$t18, $t19, $t20], "Locate", ["ID", (await $.mv((await $.mcall((await $.wv([$t18, $t19, $t20], "TransactionsData", C, false)), "FieldByName", ["DebitID"])), "AsInteger")), []], C)));
          } finally {
            await $.stmt($.wcall([$t18, $t19, $t20], "EnableControls", [], C));
          }
        }
        {
          const $t21 = (await $.wv([$t18, $t19], "CreditAccountData", C, false));
          await $.stmt($.wcall([$t18, $t19, $t21], "DisableControls", [], C));
          try {
            await $.stmt((await $.wcall([$t18, $t19, $t21], "Locate", ["ID", (await $.mv((await $.mcall((await $.wv([$t18, $t19, $t21], "TransactionsData", C, false)), "FieldByName", ["CreditID"])), "AsInteger")), []], C)));
          } finally {
            await $.stmt($.wcall([$t18, $t19, $t21], "EnableControls", [], C));
          }
        }
        await $.wset([$t18, $t19], "DebitCurrencyRate", (await $.mv((await $.mcall((await $.wv([$t18, $t19], "DebitCurrencyData", C, false)), "FieldByName", ["Rate"])), "AsCurrency")), { get: async () => L0["debitcurrencyrate"], set: async (v) => { L0["debitcurrencyrate"] = v; }, local: true });
        await $.wset([$t18, $t19], "CreditCurrencyRate", (await $.mv((await $.mcall((await $.wv([$t18, $t19], "CreditCurrencyData", C, false)), "FieldByName", ["Rate"])), "AsCurrency")), { get: async () => L0["creditcurrencyrate"], set: async (v) => { L0["creditcurrencyrate"] = v; }, local: true });
        if ($.truthy($.not(((await $.and_((await $.and_((await $.and_(($.ne((await $.mv((await $.wcall([$t18, $t19], "FieldByName", ["DebitCurrencyID"], C)), "AsInteger")), (await $.mv((await $.wcall([$t18, $t19], "FieldByName", ["CreditCurrencyID"], C)), "AsInteger")))), async () => ($.not(($.in_((await $.mv((await $.mcall((await $.wv([$t18, $t19], "DebitAccountData", C, false)), "FieldByName", ["IsCacheAccount"])), "AsInteger")), [1, 2])))))), async () => ($.not(($.in_((await $.mv((await $.mcall((await $.wv([$t18, $t19], "CreditAccountData", C, false)), "FieldByName", ["IsCacheAccount"])), "AsInteger")), [1, 2])))))), async () => ($.eq((await $.mv((await $.wcall([$t18, $t19], "FieldByName", ["OUTBALANCECHAR"], C)), "AsInteger")), 0)))))))) {
          await $.wset([$t18, $t19], "Result", (await $.wv([$t18, $t19], "True", C, false)), { get: async () => L1["result"], set: async (v) => { L1["result"] = v; }, local: true });
        } else {
          if ($.truthy($.eq((await $.wcall([$t18, $t19], "MessageDlg", [(await $.wv([$t18, $t19], "sConvertationNotEnteredMsg", { get: async () => L0["sconvertationnotenteredmsg"], set: async (v) => { L0["sconvertationnotenteredmsg"] = v; }, local: true }, false)), (await $.wv([$t18, $t19], "mtConfirmation", C, false)), [(await $.wv([$t18, $t19], "mbYes", C, false)), (await $.wv([$t18, $t19], "mbCancel", C, false))], 0], C)), (await $.wv([$t18, $t19], "mrYes", C, false))))) {
            $.abort();
          } else {
            await $.wset([$t18, $t19], "Result", (await $.wv([$t18, $t19], "True", C, false)), { get: async () => L1["result"], set: async (v) => { L1["result"] = v; }, local: true });
          }
        }
      }
    }
  }
  return L1.result;
});
  if ($.truthy(L0["checktransaction"])) {
    await $.set(C, "FIsChanged", true);
    {
      const $t22 = (await $.mv((await $.v(C, "TransactionsDataModule")), "TransactionsData"));
      await $.wset([$t22], "TransactionDate", (await $.mv((await $.wv([$t22], "TransactionDateEdit", C, false)), "DateTime")), C);
      if ($.truthy($.in_((await $.wv([$t22], "State", C, false)), [(await $.wv([$t22], "dsEdit", C, false)), (await $.wv([$t22], "dsInsert", C, false))]))) {
        await $.mset((await $.wcall([$t22], "FieldByName", ["DebitAmount"], C)), "AsCurrency", (await $.mv((await $.wv([$t22], "DebitAmountEdit", C, false)), "Value")));
        await $.mset((await $.wcall([$t22], "FieldByName", ["CreditAmount"], C)), "AsCurrency", (await $.mv((await $.wv([$t22], "CreditAmountEdit", C, false)), "Value")));
        await $.mset((await $.wcall([$t22], "FieldByName", ["LAmount"], C)), "AsCurrency", (await $.mv((await $.wv([$t22], "DebitLAmountEdit", C, false)), "Value")));
        await $.mset((await $.wcall([$t22], "FieldByName", ["TransactionDate"], C)), "AsDateTime", (await $.wv([$t22], "TransactionDate", C, false)));
        await $.stmt($.wcall([$t22], "Post", [], C));
      }
      await $.stmt($.wcall([$t22], "Sb_Commit", [], C));
    }
    if ($.truthy($.eq((await $.v(C, "FMode")), (await $.v(C, "tmEdit"))))) {
      await $.set(C, "FInternalClosing", true);
      await $.stmt($.call(C, "Close", []));
    } else {
      await $.stmt($.call(C, "Reset", []));
    }
  }
  return L0.result;
}, {"params": [], "kind": "procedure", "ptypes": []});
  U.method("TTransactionPropertiesForm", "SaveState", async function SaveState(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: undefined};
  {
    const $t23 = (await $.mv((await $.mv((await $.v(C, "TransactionsDataModule")), "Transactions")), "DataSet"));
    const $t24 = (await $.wv([$t23], "FSavedState", C, false));
    await $.wset([$t23, $t24], "hDebit", (await $.mv((await $.wcall([$t23, $t24], "FieldByName", ["DebitID"], C)), "AsInteger")), C);
    await $.wset([$t23, $t24], "hCredit", (await $.mv((await $.wcall([$t23, $t24], "FieldByName", ["CreditID"], C)), "AsInteger")), C);
    await $.wset([$t23, $t24], "DebitAmount", (await $.mv((await $.wv([$t23, $t24], "DebitAmountEdit", C, false)), "Value")), C);
    await $.wset([$t23, $t24], "CreditAmount", (await $.mv((await $.wv([$t23, $t24], "CreditAmountEdit", C, false)), "Value")), C);
    await $.wset([$t23, $t24], "LAmount", (await $.mv((await $.wv([$t23, $t24], "DebitLAmountEdit", C, false)), "Value")), C);
    await $.wset([$t23, $t24], "DebitRate", (await $.mv((await $.wcall([$t23, $t24], "FieldByName", ["DebitRate"], C)), "AsCurrency")), C);
    await $.wset([$t23, $t24], "CreditRate", (await $.mv((await $.wcall([$t23, $t24], "FieldByName", ["CreditRate"], C)), "AsCurrency")), C);
    await $.wset([$t23, $t24], "TrName", (await $.mv((await $.wcall([$t23, $t24], "FieldByName", ["NAME"], C)), "AsString")), C);
  }
  return L0.result;
}, {"params": [], "kind": "procedure", "ptypes": []});
  U.method("TTransactionPropertiesForm", "RestoreState", async function RestoreState(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: undefined};
  {
    const $t25 = (await $.mv((await $.mv((await $.v(C, "TransactionsDataModule")), "Transactions")), "DataSet"));
    const $t26 = (await $.wv([$t25], "FSavedState", C, false));
    await $.mset((await $.wcall([$t25, $t26], "FieldByName", ["DebitID"], C)), "AsInteger", (await $.wv([$t25, $t26], "hDebit", C, false)));
    await $.mset((await $.wcall([$t25, $t26], "FieldByName", ["CreditID"], C)), "AsInteger", (await $.wv([$t25, $t26], "hCredit", C, false)));
    await $.mset((await $.wv([$t25, $t26], "DebitAmountEdit", C, false)), "Value", (await $.wv([$t25, $t26], "DebitAmount", C, false)));
    await $.mset((await $.wv([$t25, $t26], "CreditAmountEdit", C, false)), "Value", (await $.wv([$t25, $t26], "CreditAmount", C, false)));
    await $.mset((await $.wv([$t25, $t26], "DebitLAmountEdit", C, false)), "Value", (await $.wv([$t25, $t26], "LAmount", C, false)));
    await $.mset((await $.wv([$t25, $t26], "CreditLAmountEdit", C, false)), "Value", (await $.wv([$t25, $t26], "LAmount", C, false)));
    await $.mset((await $.wcall([$t25, $t26], "FieldByName", ["DebitRate"], C)), "AsCurrency", (await $.wv([$t25, $t26], "DebitRate", C, false)));
    await $.mset((await $.wcall([$t25, $t26], "FieldByName", ["CreditRate"], C)), "AsCurrency", (await $.wv([$t25, $t26], "CreditRate", C, false)));
    await $.mset((await $.wcall([$t25, $t26], "FieldByName", ["NAME"], C)), "AsString", (await $.wv([$t25, $t26], "TrName", C, false)));
  }
  return L0.result;
}, {"params": [], "kind": "procedure", "ptypes": []});
  U.method("TTransactionPropertiesForm", "FormCreate", async function FormCreate(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.set(C, "FAccRefreshEnabled", true);
  await $.set(C, "FCascadeRefreshDisabledCount", 0);
  await $.set(C, "FIsChanged", false);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TTransactionPropertiesForm", "DebitAccNoSearchEditChange", async function DebitAccNoSearchEditChange(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t27 = L0["sender"];
    if ($.truthy((await $.wv([$t27], "Focused", C, false)))) {
      if ($.truthy($.eq((await $.wv([$t27], "Text", C, false)), ""))) {
        await $.mcall((await $.mv((await $.wv([$t27], "TransactionsDataModule", C, false)), "TransactionsDataDEBITID")), "Clear", []);
      } else {
        {
          const $t28 = (await $.wv([$t27], "TransactionsDataModule", C, false));
          if ($.truthy((await $.mcall((await $.wv([$t27, $t28], "DebitAccData", C, false)), "Locate", ["ACC_NO", (await $.wv([$t27, $t28], "Text", C, false)), [(await $.wv([$t27, $t28], "loPartialKey", C, false)), (await $.wv([$t27, $t28], "loCaseInsensitive", C, false))]])))) {
            await $.wset([$t27, $t28], "Color", (await $.wv([$t27, $t28], "clWhite", C, false)), C);
            await $.mset((await $.wv([$t27, $t28], "DebitAccBalanceLabel", C, false)), "Caption", (await $.wcall([$t27, $t28], "CurrToStrF", [(await $.mv((await $.mcall((await $.wv([$t27, $t28], "DebitAccData", C, false)), "FieldByName", ["Balance"])), "AsCurrency")), (await $.wv([$t27, $t28], "ffCurrency", C, false)), 2], C)));
            await $.mset((await $.wv([$t27, $t28], "DebitLBalanceLabel", C, false)), "Caption", (await $.wcall([$t27, $t28], "CurrToStrF", [(await $.mv((await $.mcall((await $.wv([$t27, $t28], "DebitAccData", C, false)), "FieldByName", ["LBalance"])), "AsCurrency")), (await $.wv([$t27, $t28], "ffCurrency", C, false)), 2], C)));
          } else {
            await $.wset([$t27, $t28], "Color", (await $.wv([$t27, $t28], "clRed", C, false)), C);
            await $.stmt($.wcall([$t27, $t28], "Beep", [], C));
          }
        }
      }
    }
    if ($.truthy($.eq((await $.wv([$t27], "Text", C, false)), ""))) {
      await $.mset((await $.wv([$t27], "DebitAccBalanceLabel", C, false)), "Caption", "");
      await $.mset((await $.wv([$t27], "DebitLBalanceLabel", C, false)), "Caption", "");
    } else {
      {
        const $t29 = (await $.wv([$t27], "TransactionsDataModule", C, false));
        await $.mset((await $.wv([$t27, $t29], "DebitAccBalanceLabel", C, false)), "Caption", (await $.wcall([$t27, $t29], "CurrToStrF", [(await $.mv((await $.mcall((await $.wv([$t27, $t29], "DebitAccData", C, false)), "FieldByName", ["Balance"])), "AsCurrency")), (await $.wv([$t27, $t29], "ffCurrency", C, false)), 2], C)));
        await $.mset((await $.wv([$t27, $t29], "DebitLBalanceLabel", C, false)), "Caption", (await $.wcall([$t27, $t29], "CurrToStrF", [(await $.mv((await $.mcall((await $.wv([$t27, $t29], "DebitAccData", C, false)), "FieldByName", ["LBalance"])), "AsCurrency")), (await $.wv([$t27, $t29], "ffCurrency", C, false)), 2], C)));
      }
    }
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TTransactionPropertiesForm", "CreditAccNoSearchEditChange", async function CreditAccNoSearchEditChange(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "hasfound": false};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t30 = L0["sender"];
    if ($.truthy($.ne((await $.wv([$t30], "Text", C, false)), ""))) {
      {
        const $t31 = (await $.wv([$t30], "TransactionsDataModule", C, false));
        await $.wset([$t30, $t31], "HasFound", (await $.mcall((await $.wv([$t30, $t31], "CreditAccData", C, false)), "Locate", ["ACC_NO", (await $.wv([$t30, $t31], "Text", C, false)), [(await $.wv([$t30, $t31], "loPartialKey", C, false)), (await $.wv([$t30, $t31], "loCaseInsensitive", C, false))]])), { get: async () => L0["hasfound"], set: async (v) => { L0["hasfound"] = v; }, local: true });
      }
    } else {
      await $.wset([$t30], "HasFound", (await $.wv([$t30], "True", C, false)), { get: async () => L0["hasfound"], set: async (v) => { L0["hasfound"] = v; }, local: true });
    }
    if ($.truthy((await $.wv([$t30], "Focused", C, false)))) {
      if ($.truthy($.eq((await $.wv([$t30], "Text", C, false)), ""))) {
        await $.mcall((await $.mv((await $.wv([$t30], "TransactionsDataModule", C, false)), "TransactionsDataCreditID")), "Clear", []);
      } else {
        if ($.truthy((await $.wv([$t30], "HasFound", { get: async () => L0["hasfound"], set: async (v) => { L0["hasfound"] = v; }, local: true }, false)))) {
          await $.wset([$t30], "Color", (await $.wv([$t30], "clWhite", C, false)), C);
        } else {
          await $.wset([$t30], "Color", (await $.wv([$t30], "clRed", C, false)), C);
          await $.stmt($.wcall([$t30], "Beep", [], C));
        }
      }
    }
    if ($.truthy($.eq((await $.wv([$t30], "Text", C, false)), ""))) {
      await $.mset((await $.wv([$t30], "CreditAccBalanceLabel", C, false)), "Caption", "");
      await $.mset((await $.wv([$t30], "CreditLBalanceLabel", C, false)), "Caption", "");
    } else {
      {
        const $t32 = (await $.wv([$t30], "TransactionsDataModule", C, false));
        if ($.truthy((await $.wv([$t30, $t32], "HasFound", { get: async () => L0["hasfound"], set: async (v) => { L0["hasfound"] = v; }, local: true }, false)))) {
          await $.mset((await $.wv([$t30, $t32], "CreditAccBalanceLabel", C, false)), "Caption", (await $.wcall([$t30, $t32], "CurrToStrF", [(await $.mv((await $.mcall((await $.wv([$t30, $t32], "CreditAccData", C, false)), "FieldByName", ["Balance"])), "AsCurrency")), (await $.wv([$t30, $t32], "ffCurrency", C, false)), 2], C)));
          await $.mset((await $.wv([$t30, $t32], "CreditLBalanceLabel", C, false)), "Caption", (await $.wcall([$t30, $t32], "CurrToStrF", [(await $.mv((await $.mcall((await $.wv([$t30, $t32], "CreditAccData", C, false)), "FieldByName", ["LBalance"])), "AsCurrency")), (await $.wv([$t30, $t32], "ffCurrency", C, false)), 2], C)));
        }
      }
    }
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TTransactionPropertiesForm", "FormKeyDown", async function FormKeyDown(Self, p0, p1, p2) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "key": $.asRef(p1), "shift": $.copyArg(p2), result: undefined};
  await $.fixArgs(L0, ["sender", "shift"]);
  if ($.truthy($.eq((await L0["key"].get()), (await $.v(C, "VK_F3"))))) {
    await $.mcall((await $.v(C, "TrDescrForm")), "ShowModal", []);
    if ($.truthy((await $.mv((await $.v(C, "TrDescrForm")), "Commited")))) {
      await $.mset((await $.mcall((await $.mv((await $.v(C, "TransactionsDataModule")), "TransactionsData")), "FieldByName", ["Name"])), "AsString", (await $.mv((await $.v(C, "TrDescrForm")), "Value")));
      await $.mset((await $.v(C, "TrNoEdit")), "Text", (await $.mv((await $.mcall((await $.mv((await $.v(C, "TrDescrForm")), "DescrTable")), "FieldByName", ["ID"])), "AsString")));
    }
  } else {
    if ($.truthy($.eq((await L0["key"].get()), (await $.v(C, "VK_ESCAPE"))))) {
      await $.stmt($.call(C, "Close", []));
    }
  }
  return L0.result;
}, {"params": ["Sender", "Key", "Shift"], "kind": "procedure", "ptypes": ["TObject", "Word", "TShiftState"]});
  U.method("TTransactionPropertiesForm", "TrNoEditChange", async function TrNoEditChange(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t33 = (await $.mv((await $.v(C, "TrDescrForm")), "DescrTable"));
    const $t34 = (await $.wv([$t33], "Sender", { get: async () => L0["sender"], set: async (v) => { L0["sender"] = v; }, local: true }, false));
    if ($.truthy($.ne((await $.wv([$t33, $t34], "Text", C, false)), ""))) {
      if ($.truthy((await $.wcall([$t33, $t34], "Locate", ["ID", (await $.wv([$t33, $t34], "Text", C, false)), []], C)))) {
        await $.mset((await $.mcall((await $.mv((await $.wv([$t33, $t34], "TransactionsDataModule", C, false)), "TransactionsData")), "FieldByName", ["Name"])), "AsString", (await $.mv((await $.wcall([$t33, $t34], "FieldByName", ["NAME"], C)), "AsString")));
      }
    }
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TTransactionPropertiesForm", "OnKeyPressed", async function OnKeyPressed(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "key": $.asRef(p1), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.eq((await $.call(C, "Ord", [(await L0["key"].get())])), (await $.v(C, "VK_RETURN"))))) {
    {
      const $t35 = L0["sender"];
      await $.stmt((await $.wcall([$t35], "SelectNext", [(await $.wv([$t35], "ActiveControl", C, false)), (await $.wv([$t35], "True", C, false)), (await $.wv([$t35], "True", C, false))], C)));
    }
  }
  return L0.result;
}, {"params": ["Sender", "Key"], "kind": "procedure", "ptypes": ["TObject", "Char"]});
  U.method("TTransactionPropertiesForm", "Reset", async function Reset(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: undefined};
  {
    const $t36 = (await $.v(C, "TransactionsDataModule"));
    const $t37 = (await $.wv([$t36], "TransactionsData", C, false));
    if ($.truthy($.in_((await $.wv([$t36, $t37], "State", C, false)), [(await $.wv([$t36, $t37], "dsInsert", C, false)), (await $.wv([$t36, $t37], "dsEdit", C, false))]))) {
      await $.stmt($.wcall([$t36, $t37], "Cancel", [], C));
    }
    await $.stmt($.wcall([$t36, $t37], "CancelUpdates", [], C));
  }
  if ($.truthy($.eq((await $.v(C, "FMode")), (await $.v(C, "tmEdit"))))) {
    await $.stmt((await $.call(C, "View", [(await $.v(C, "FTransactionID")), (await $.v(C, "FReadOnly"))])));
  } else {
    await $.mset((await $.v(C, "DebitAmountEdit")), "Value", 0.0);
    await $.mset((await $.v(C, "DebitLAmountEdit")), "Value", 0.0);
    await $.mset((await $.v(C, "CreditAmountEdit")), "Value", 0.0);
    await $.mset((await $.v(C, "CreditLAmountEdit")), "Value", 0.0);
    await $.set(C, "RefreshDisabled", true);
    try {
      {
        const $t38 = (await $.v(C, "TransactionsDataModule"));
        const $t39 = (await $.wv([$t38], "TransactionsData", C, false));
        {
          const $t40 = (await $.wv([$t38, $t39], "DebitAccData", C, false));
          await $.stmt($.wcall([$t38, $t39, $t40], "Refresh", [], C));
        }
        {
          const $t41 = (await $.wv([$t38, $t39], "CreditAccData", C, false));
          await $.stmt($.wcall([$t38, $t39, $t41], "Refresh", [], C));
        }
        await $.stmt($.wcall([$t38, $t39], "Insert", [], C));
        await $.mset((await $.wcall([$t38, $t39], "FieldByName", ["DebitCurrencyID"], C)), "AsInteger", 0);
        await $.mset((await $.wcall([$t38, $t39], "FieldByName", ["CreditCurrencyID"], C)), "AsInteger", 0);
        await $.mset((await $.wv([$t38, $t39], "DebitCurrencyCB", C, false)), "ItemIndex", 0);
        await $.mset((await $.wv([$t38, $t39], "CreditCurrencyCB", C, false)), "ItemIndex", 0);
        await $.mcall((await $.wcall([$t38, $t39], "FieldByName", ["DebitID"], C)), "Clear", []);
        await $.mcall((await $.wcall([$t38, $t39], "FieldByName", ["CreditID"], C)), "Clear", []);
      }
      await $.mset((await $.v(C, "DebitAccNoSearchEdit")), "Text", "");
      await $.mset((await $.v(C, "CreditAccNoSearchEdit")), "Text", "");
      {
        const $t42 = (await $.v(C, "TransactionsDataModule"));
        await $.wset([$t42], "LastCacheAccountSide", (await $.wv([$t42], "asUnknown", C, false)), C);
        await $.stmt($.wcall([$t42], "PrepareCacheSymbols", [], C));
      }
    } finally {
      await $.set(C, "RefreshDisabled", false);
    }
    await $.set(C, "Modified", false);
  }
  return L0.result;
}, {"params": [], "kind": "procedure", "ptypes": []});
  U.method("TTransactionPropertiesForm", "SetSelectedText", async function SetSelectedText(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"edit": $.copyArg(p0), "s": $.copyArg(p1), result: undefined, "lastlen": 0};
  await $.fixArgs(L0, ["edit", "s"]);
  {
    const $t43 = L0["edit"];
    await $.wset([$t43], "LastLen", (await $.wcall([$t43], "Length", [(await $.wv([$t43], "Text", C, false))], C)), { get: async () => L0["lastlen"], set: async (v) => { L0["lastlen"] = v; }, local: true });
    await $.wset([$t43], "Text", (await $.wv([$t43], "S", { get: async () => L0["s"], set: async (v) => { L0["s"] = v; }, local: true }, false)), C);
    if ($.truthy((await $.wv([$t43], "Focused", C, false)))) {
      await $.wset([$t43], "SelStart", (await $.wv([$t43], "LastLen", { get: async () => L0["lastlen"], set: async (v) => { L0["lastlen"] = v; }, local: true }, false)), C);
      await $.wset([$t43], "SelLength", $.sub((await $.wcall([$t43], "Length", [(await $.wv([$t43], "S", { get: async () => L0["s"], set: async (v) => { L0["s"] = v; }, local: true }, false))], C)), (await $.wv([$t43], "LastLen", { get: async () => L0["lastlen"], set: async (v) => { L0["lastlen"] = v; }, local: true }, false))), C);
    }
    await $.wset([$t43], "Color", (await $.wv([$t43], "clWhite", C, false)), C);
  }
  return L0.result;
}, {"params": ["Edit", "S"], "kind": "procedure", "ptypes": ["TEdit", "String"]});
  U.method("TTransactionPropertiesForm", "DebitAccNoSearchEditKeyDown", async function DebitAccNoSearchEditKeyDown(Self, p0, p1, p2) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "key": $.asRef(p1), "shift": $.copyArg(p2), result: undefined};
  await $.fixArgs(L0, ["sender", "shift"]);
  {
    const $t44 = L0["sender"];
    if ($.truthy((await $.or_(($.eq((await $.wv([$t44], "Key", { get: async () => await L0["key"].get(), set: async (v) => { await L0["key"].set(v); }, local: true }, false)), (await $.wv([$t44], "VK_DELETE", C, false)))), async () => ($.eq((await $.wv([$t44], "Key", { get: async () => await L0["key"].get(), set: async (v) => { await L0["key"].set(v); }, local: true }, false)), (await $.wv([$t44], "VK_BACK", C, false)))))))) {
      await $.wset([$t44], "Tag", 1, C);
    } else {
      await $.wset([$t44], "Tag", 0, C);
    }
  }
  return L0.result;
}, {"params": ["Sender", "Key", "Shift"], "kind": "procedure", "ptypes": ["TObject", "Word", "TShiftState"]});
  U.method("TTransactionPropertiesForm", "FormCloseQuery", async function FormCloseQuery(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "canclose": $.asRef(p1), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  L0["smodifiedexitmsg"] = "Dokument yaddaşda saxlansınmı?";
  if ($.truthy((await $.and_($.not((await $.v(C, "FInternalClosing"))), async () => (await $.v(C, "Modified")))))) {
    { const $t45 = (await $.call(C, "MessageDlg", [L0["smodifiedexitmsg"], (await $.v(C, "mtConfirmation")), [(await $.v(C, "mbYes")), (await $.v(C, "mbNo")), (await $.v(C, "mbCancel"))], 0]));
      if ($.eq($t45, (await $.v(C, "mrYes")))) {
        await $.stmt($.call(C, "SaveTransaction", []));
      }
      else if ($.eq($t45, (await $.v(C, "mrCancel")))) {
        await L0["canclose"].set(false);
      }
    }
  }
  return L0.result;
}, {"params": ["Sender", "CanClose"], "kind": "procedure", "ptypes": ["TObject", "Boolean"]});
  U.method("TTransactionPropertiesForm", "DebitAccNoSearchEditExit", async function DebitAccNoSearchEditExit(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t46 = L0["sender"];
    const $t47 = (await $.mv((await $.wv([$t46], "TransactionsDataModule", C, false)), "TransactionsData"));
    if ($.truthy($.ne((await $.wv([$t46, $t47], "Text", C, false)), ""))) {
      await $.wset([$t46, $t47], "Text", (await $.mv((await $.wcall([$t46, $t47], "FieldByName", ["DebitAccNo"], C)), "AsString")), C);
    }
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TTransactionPropertiesForm", "FormClose", async function FormClose(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "action": $.asRef(p1), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t48 = (await $.mv((await $.v(C, "TransactionsDataModule")), "TransactionsData"));
    await $.stmt($.wcall([$t48], "Cancel", [], C));
  }
  return L0.result;
}, {"params": ["Sender", "Action"], "kind": "procedure", "ptypes": ["TObject", "TCloseAction"]});
  U.method("TTransactionPropertiesForm", "CommitActionExecute", async function CommitActionExecute(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.stmt($.call(C, "SaveState", []));
  try {
    await $.stmt($.call(C, "SaveTransaction", []));
  } catch ($t49) {
    $.rethrowControl($t49);
    $.handled($t49);
    await $.stmt($.call(C, "RestoreState", []));
    throw $t49;
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TTransactionPropertiesForm", "Button2Click", async function Button2Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.eq((await $.v(C, "FMode")), (await $.v(C, "tmEdit"))))) {
    await $.stmt((await $.call(C, "View", [(await $.v(C, "FTransactionID")), (await $.v(C, "FReadOnly"))])));
  } else {
    await $.stmt($.call(C, "Reset", []));
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TTransactionPropertiesForm", "CloseActionExecute", async function CloseActionExecute(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.stmt($.call(C, "Close", []));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TTransactionPropertiesForm", "CommitActionUpdate", async function CommitActionUpdate(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t50 = L0["sender"];
    const $t51 = (await $.mv((await $.wv([$t50], "TransactionsDataModule", C, false)), "TransactionsData"));
    await $.wset([$t50, $t51], "Enabled", (await $.and_((await $.and_((await $.and_((await $.and_(($.not((await $.wv([$t50, $t51], "FReadOnly", C, false)))), async () => (await $.mv(Self, "Modified")))), async () => ($.not((await $.mv((await $.wcall([$t50, $t51], "FieldByName", ["DebitID"], C)), "IsNull")))))), async () => ($.not((await $.mv((await $.wcall([$t50, $t51], "FieldByName", ["CreditID"], C)), "IsNull")))))), async () => ($.ne((await $.mv((await $.wv([$t50, $t51], "DebitLAmountEdit", C, false)), "Value")), 0)))), C);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TTransactionPropertiesForm", "SetModified", async function SetModified(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  if ($.truthy((await $.v(C, "FReadOnly")))) {
    L0["value"] = false;
  }
  await $.set(C, "FModified", L0["value"]);
  await $.stmt($.call(C, "UpdateActions", []));
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["Boolean"]});
  U.method("TTransactionPropertiesForm", "SetTransactionDate", async function SetTransactionDate(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "FTransactionDate", L0["value"]);
  await $.mset((await $.v(C, "TransactionDateEdit")), "DateTime", (await $.call(C, "Int", [L0["value"]])));
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["TDateTime"]});
  U.method("TTransactionPropertiesForm", "CancelActionExecute", async function CancelActionExecute(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.stmt($.call(C, "Reset", []));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TTransactionPropertiesForm", "CreditAccNoSearchEditExit", async function CreditAccNoSearchEditExit(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t52 = L0["sender"];
    const $t53 = (await $.mv((await $.wv([$t52], "TransactionsDataModule", C, false)), "TransactionsData"));
    if ($.truthy($.ne((await $.wv([$t52, $t53], "Text", C, false)), ""))) {
      await $.wset([$t52, $t53], "Text", (await $.mv((await $.wcall([$t52, $t53], "FieldByName", ["CreditAccNo"], C)), "AsString")), C);
    }
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TTransactionPropertiesForm", "TransactionDateEditChange", async function TransactionDateEditChange(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.set(C, "TransactionDate", (await $.mv((L0["sender"]), "DateTime")));
  await $.set(C, "Modified", true);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TTransactionPropertiesForm", "TrNameEditChange", async function TrNameEditChange(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.set(C, "Modified", true);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TTransactionPropertiesForm", "InBalanceCharEditExit", async function InBalanceCharEditExit(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.stmt($.call(C, "CheckBalanceChar", []));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TTransactionPropertiesForm", "CheckBalanceChar", async function CheckBalanceChar(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: false, "balancechar": 0, "colorerror": false};
  {
    const $t54 = (await $.v(C, "TransactionsDataModule"));
    const $t55 = (await $.wv([$t54], "InBalanceSymbolsData", C, false));
    await $.wset([$t54, $t55], "BalanceChar", (await $.mv((await $.mcall((await $.wv([$t54, $t55], "TransactionsData", C, false)), "FieldByName", ["InBalanceChar"])), "AsInteger")), { get: async () => L0["balancechar"], set: async (v) => { L0["balancechar"] = v; }, local: true });
    if ($.truthy($.ne((await $.wv([$t54, $t55], "BalanceChar", { get: async () => L0["balancechar"], set: async (v) => { L0["balancechar"] = v; }, local: true }, false)), 0))) {
      await $.wset([$t54, $t55], "Result", (await $.wcall([$t54, $t55], "Locate", ["SYMBOL", (await $.wv([$t54, $t55], "BalanceChar", { get: async () => L0["balancechar"], set: async (v) => { L0["balancechar"] = v; }, local: true }, false)), []], C)), { get: async () => L0["result"], set: async (v) => { L0["result"] = v; }, local: true });
      await $.wset([$t54, $t55], "ColorError", $.not((await $.wv([$t54, $t55], "Result", { get: async () => L0["result"], set: async (v) => { L0["result"] = v; }, local: true }, false))), { get: async () => L0["colorerror"], set: async (v) => { L0["colorerror"] = v; }, local: true });
    } else {
      await $.stmt($.wcall([$t54, $t55], "PrepareCacheSymbols", [], C));
      await $.wset([$t54, $t55], "Result", $.eq((await $.wv([$t54, $t55], "LastCacheAccountSide", C, false)), (await $.wv([$t54, $t55], "asUnknown", C, false))), { get: async () => L0["result"], set: async (v) => { L0["result"] = v; }, local: true });
      await $.wset([$t54, $t55], "ColorError", (await $.wv([$t54, $t55], "False", C, false)), { get: async () => L0["colorerror"], set: async (v) => { L0["colorerror"] = v; }, local: true });
    }
    if ($.truthy((await $.wv([$t54, $t55], "ColorError", { get: async () => L0["colorerror"], set: async (v) => { L0["colorerror"] = v; }, local: true }, false)))) {
      await $.mset((await $.wv([$t54, $t55], "InBalanceCharEdit", C, false)), "Color", (await $.wv([$t54, $t55], "clRed", C, false)));
    } else {
      await $.mset((await $.wv([$t54, $t55], "InBalanceCharEdit", C, false)), "Color", (await $.wv([$t54, $t55], "clWhite", C, false)));
    }
  }
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TTransactionPropertiesForm", "CutEditText", async function CutEditText(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "x": 0, "sel": 0};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t56 = (await $.call(C, "TCurrencyEdit", [L0["sender"]]));
    if ($.truthy($.eq((await $.wv([$t56], "DecimalSeparator", C, false)), (await $.wv([$t56], "ThousandSeparator", C, false))))) {
      return L0.result;
    }
    if ($.truthy($.eq((await $.wcall([$t56], "Pos", [(await $.wv([$t56], "DecimalSeparator", C, false)), (await $.wv([$t56], "Text", C, false))], C)), 0))) {
      return L0.result;
    }
    await $.wset([$t56], "Sel", (await $.wv([$t56], "SelStart", C, false)), { get: async () => L0["sel"], set: async (v) => { L0["sel"] = v; }, local: true });
    await $.wset([$t56], "X", $.sub($.sub((await $.wcall([$t56], "Length", [(await $.wv([$t56], "Text", C, false))], C)), (await $.wcall([$t56], "Pos", [(await $.wv([$t56], "DecimalSeparator", C, false)), (await $.wv([$t56], "Text", C, false))], C))), (await $.wv([$t56], "CurrencyDecimals", C, false))), { get: async () => L0["x"], set: async (v) => { L0["x"] = v; }, local: true });
    if ($.truthy(($.gt((await $.wv([$t56], "X", { get: async () => L0["x"], set: async (v) => { L0["x"] = v; }, local: true }, false)), 0)))) {
      await $.wset([$t56], "Text", (await $.wcall([$t56], "Copy", [(await $.wv([$t56], "Text", C, false)), 0, ($.sub((await $.wcall([$t56], "Length", [(await $.wv([$t56], "Text", C, false))], C)), (await $.wv([$t56], "X", { get: async () => L0["x"], set: async (v) => { L0["x"] = v; }, local: true }, false))))], C)), C);
      await $.wset([$t56], "SelStart", (await $.wv([$t56], "Sel", { get: async () => L0["sel"], set: async (v) => { L0["sel"] = v; }, local: true }, false)), C);
    }
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TTransactionPropertiesForm", "CreditLAmountEditExit", async function CreditLAmountEditExit(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t57 = (L0["sender"]);
    if ($.truthy((await $.or_(($.le((await $.wv([$t57], "Value", C, false)), 0.0)), async () => ($.eq((await $.wcall([$t57], "Trim", [(await $.wv([$t57], "Text", C, false))], C)), "")))))) {
      await $.stmt((await $.wcall([$t57], "ShowMessage", ["Məbləğ \"0.00\" dan böyük olmalıdır."], C)));
      await $.stmt($.wcall([$t57], "SetFocus", [], C));
    }
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TTransactionPropertiesForm", "CreditCurrencyCBChange", async function CreditCurrencyCBChange(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.eq((await $.v(C, "FMode")), (await $.v(C, "tmEdit"))))) {
    await $.stmt((await $.mcall((await $.v(C, "CreditAmountEdit")), "OnChange", [(await $.v(C, "CreditAmountEdit"))])));
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TTransactionPropertiesForm", "DebitCurrencyCBChange", async function DebitCurrencyCBChange(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.eq((await $.v(C, "FMode")), (await $.v(C, "tmEdit"))))) {
    await $.stmt((await $.mcall((await $.v(C, "DebitAmountEdit")), "OnChange", [(await $.v(C, "DebitAmountEdit"))])));
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  return U;
}
