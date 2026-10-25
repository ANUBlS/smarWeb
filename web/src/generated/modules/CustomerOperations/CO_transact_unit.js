// Generated from CO_transact_unit.pas by pas2js — do not edit by hand; regenerate instead.
/* eslint-disable */
// @ts-nocheck

export default function define($) {
  const U = $.unit("CO_transact_unit", ["Windows", "Messages", "SysUtils", "Classes", "Graphics", "Controls", "Forms", "Dialogs", "StdCtrls", "ActnList", "Oracledata", "Oracle", "ComCtrls", "CurrencyEdit", "DB", "Mask", "DBCtrls", "SearchEdit", "ExtCtrls", "sboapidatamoduleimpl", "TransactionDataModuleUnit"]);
  const C = [U];
  U.const("tsDebet", 0);
  U.const("tsCredit", 1);
  U.const("tsUnknown", 2);
  U.const("omInsert", 0);
  U.const("omEdit", 1);
  U.const("omCommission", 2);
  U.defClass("TCO_Transact", "TForm", {"groupbox1": {"name": "GroupBox1", "type": "TGroupBox"}, "headercontrol1": {"name": "HeaderControl1", "type": "THeaderControl"}, "panel1": {"name": "Panel1", "type": "TPanel"}, "paneldebit": {"name": "PanelDebit", "type": "TPanel"}, "paneldebitrest": {"name": "PanelDebitRest", "type": "TPanel"}, "label1": {"name": "Label1", "type": "TLabel"}, "dbtext1": {"name": "DBText1", "type": "TDBText"}, "label2": {"name": "Label2", "type": "TLabel"}, "dbtext2": {"name": "DBText2", "type": "TDBText"}, "panel4": {"name": "Panel4", "type": "TPanel"}, "debitaccnamecb": {"name": "DebitAccNameCB", "type": "TDBLookupComboBox"}, "panel5": {"name": "Panel5", "type": "TPanel"}, "debitaccnolookup": {"name": "DebitAccNoLookUp", "type": "TDBLookupComboBox"}, "debtaccsearchedit": {"name": "DebtAccSearchEdit", "type": "TSearchEdit"}, "panel6": {"name": "Panel6", "type": "TPanel"}, "debitcurrencyidedit": {"name": "DebitCurrencyIDEdit", "type": "TDBEdit"}, "debitcurrencyrate": {"name": "DebitCurrencyRate", "type": "TDBEdit"}, "debitcurrencylookup": {"name": "DebitCurrencyLookUp", "type": "TDBLookupComboBox"}, "panel2": {"name": "Panel2", "type": "TPanel"}, "panelcredit": {"name": "PanelCredit", "type": "TPanel"}, "panelcreditrest": {"name": "PanelCreditRest", "type": "TPanel"}, "label3": {"name": "Label3", "type": "TLabel"}, "dbtext3": {"name": "DBText3", "type": "TDBText"}, "label4": {"name": "Label4", "type": "TLabel"}, "dbtext4": {"name": "DBText4", "type": "TDBText"}, "panel8": {"name": "Panel8", "type": "TPanel"}, "dblookupcombobox3": {"name": "DBLookupComboBox3", "type": "TDBLookupComboBox"}, "panel9": {"name": "Panel9", "type": "TPanel"}, "creditaccnolookup": {"name": "CreditAccNoLookUp", "type": "TDBLookupComboBox"}, "creditaccsearchedit": {"name": "CreditAccSearchEdit", "type": "TSearchEdit"}, "panel10": {"name": "Panel10", "type": "TPanel"}, "creditcurrencyidedit": {"name": "CreditCurrencyIDEdit", "type": "TDBEdit"}, "creditcurrencyrate": {"name": "CreditCurrencyRate", "type": "TDBEdit"}, "creditcurrencylookup": {"name": "CreditCurrencyLookUp", "type": "TDBLookupComboBox"}, "groupbox2": {"name": "GroupBox2", "type": "TGroupBox"}, "panel11": {"name": "Panel11", "type": "TPanel"}, "currencyeditdebit": {"name": "CurrencyEditDebit", "type": "TCurrencyEdit"}, "panel12": {"name": "Panel12", "type": "TPanel"}, "currencyeditcredit": {"name": "CurrencyEditCredit", "type": "TCurrencyEdit"}, "panel13": {"name": "Panel13", "type": "TPanel"}, "currencyeditlammount": {"name": "CurrencyEditLammount", "type": "TCurrencyEdit"}, "groupbox3": {"name": "GroupBox3", "type": "TGroupBox"}, "panel14": {"name": "Panel14", "type": "TPanel"}, "convertationsymbolidbedit": {"name": "ConvertationSymbolIDBEdit", "type": "TDBEdit"}, "convertationsymbollookup": {"name": "ConvertationSymbolLookUp", "type": "TDBLookupComboBox"}, "panel15": {"name": "Panel15", "type": "TPanel"}, "cashsymbollookup": {"name": "CashSymbolLookUp", "type": "TDBLookupComboBox"}, "cashsymboldbedit": {"name": "CashSymbolDBEdit", "type": "TDBEdit"}, "panel16": {"name": "Panel16", "type": "TPanel"}, "trdestnoedit": {"name": "TrDestNoEdit", "type": "TEdit"}, "combobox1": {"name": "ComboBox1", "type": "TComboBox"}, "dbeditdestination": {"name": "DBEditDestination", "type": "TDBEdit"}, "groupbox4": {"name": "GroupBox4", "type": "TGroupBox"}, "label5": {"name": "Label5", "type": "TLabel"}, "label6": {"name": "Label6", "type": "TLabel"}, "label7": {"name": "Label7", "type": "TLabel"}, "transdate": {"name": "TransDate", "type": "TDateTimePicker"}, "operationtypelookup": {"name": "OperationTypeLookUp", "type": "TDBLookupComboBox"}, "dbeditoperationno": {"name": "DBEditOperationNo", "type": "TDBEdit"}, "dbedit4": {"name": "DBEdit4", "type": "TDBEdit"}, "actionlist1": {"name": "ActionList1", "type": "TActionList"}, "actioninsert": {"name": "ActionInsert", "type": "TAction"}, "actioncancel": {"name": "ActionCancel", "type": "TAction"}, "actionexit": {"name": "ActionExit", "type": "TAction"}, "panel17": {"name": "Panel17", "type": "TPanel"}, "buttonapply": {"name": "ButtonApply", "type": "TButton"}, "buttoncancel": {"name": "ButtonCancel", "type": "TButton"}, "buttonclose": {"name": "ButtonClose", "type": "TButton"}, "transactionside": {"name": "TransactionSide", "type": "TTransactionSide"}, "operationmode": {"name": "OperationMode", "type": "TOperationMode"}, "debitcurrencyid": {"name": "DebitCurrencyID", "type": "Word"}, "creditcurrencyid": {"name": "CreditCurrencyID", "type": "Word"}, "modifed": {"name": "Modifed", "type": "Boolean"}}, {});
  U.init(async () => {
    U.var_("CO_Transact", null, "TCO_Transact");
  });
  U.method("TCO_Transact", "SetCurrencyFilter", async function SetCurrencyFilter(Self, p0, p1) {
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
  U.method("TCO_Transact", "OperationCancel", async function OperationCancel(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: undefined};
  {
    const $t1 = (await $.v(C, "TransactionDataModule"));
    const $t2 = (await $.wv([$t1], "Transactions", C, false));
    if ($.truthy($.in_((await $.wv([$t1, $t2], "State", C, false)), [(await $.wv([$t1, $t2], "dsInsert", C, false)), (await $.wv([$t1, $t2], "dsEdit", C, false))]))) {
      await $.stmt($.wcall([$t1, $t2], "Cancel", [], C));
      await $.stmt($.wcall([$t1, $t2], "RefreshRecord", [], C));
    }
  }
  return L0.result;
}, {"params": [], "kind": "procedure", "ptypes": []});
  U.method("TCO_Transact", "SetAmmounts", async function SetAmmounts(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"transactionside": $.copyArg(p0), result: undefined, "debetrate": 0, "creditrate": 0};
  await $.fixArgs(L0, ["transactionside"]);
  {
    const $t3 = (await $.v(C, "TransactionDataModule"));
    await $.wset([$t3], "DebetRate", (await $.mv((await $.mcall((await $.wv([$t3], "DebitCurrencyData", C, false)), "FieldByName", ["Rate"])), "AsCurrency")), { get: async () => L0["debetrate"], set: async (v) => { L0["debetrate"] = v; }, local: true });
    await $.wset([$t3], "CreditRate", (await $.mv((await $.mcall((await $.wv([$t3], "CreditCurrencyData", C, false)), "FieldByName", ["Rate"])), "AsCurrency")), { get: async () => L0["creditrate"], set: async (v) => { L0["creditrate"] = v; }, local: true });
  }
  { const $t4 = L0["transactionside"];
    if ($.eq($t4, (await $.v(C, "tsDebet")))) {
      await $.mset((await $.v(C, "CurrencyEditLammount")), "Value", (await $.call(C, "RoundNew", [$.mul((await $.mv((await $.v(C, "CurrencyEditDebit")), "Value")), L0["debetrate"]), 100])));
      await $.mset((await $.v(C, "CurrencyEditCredit")), "Value", (await $.call(C, "RoundNew", [$.fdiv((await $.mv((await $.v(C, "CurrencyEditLammount")), "Value")), L0["creditrate"]), 100])));
    }
    else if ($.eq($t4, (await $.v(C, "tsCredit")))) {
      await $.mset((await $.v(C, "CurrencyEditLammount")), "Value", (await $.call(C, "RoundNew", [$.mul((await $.mv((await $.v(C, "CurrencyEditCredit")), "Value")), L0["creditrate"]), 100])));
      await $.mset((await $.v(C, "CurrencyEditDebit")), "Value", (await $.call(C, "RoundNew", [$.fdiv((await $.mv((await $.v(C, "CurrencyEditLammount")), "Value")), L0["debetrate"]), 100])));
    }
    else if ($.eq($t4, (await $.v(C, "tsUnknown")))) {
      {
        const $t5 = (await $.v(C, "TransactionDataModule"));
        if ($.truthy($.eq((await $.mv((await $.mcall((await $.wv([$t5], "DebitCurrencyData", C, false)), "FieldByName", ["ID"])), "AsInteger")), 0))) {
          await $.mset((await $.wv([$t5], "CurrencyEditDebit", C, false)), "Value", (await $.mv((await $.wv([$t5], "CurrencyEditLammount", C, false)), "Value")));
        }
        if ($.truthy($.eq((await $.mv((await $.mcall((await $.wv([$t5], "CreditCurrencyData", C, false)), "FieldByName", ["ID"])), "AsInteger")), 0))) {
          await $.mset((await $.wv([$t5], "CurrencyEditCredit", C, false)), "Value", (await $.mv((await $.wv([$t5], "CurrencyEditLammount", C, false)), "Value")));
        }
      }
    }
  }
  return L0.result;
}, {"params": ["TransactionSide"], "kind": "procedure", "ptypes": ["TTransactionSide"]});
  U.method("TCO_Transact", "LoadComboData", async function LoadComboData(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t6 = (await $.mv((await $.v(C, "TransactionDataModule")), "Destinations"));
    const $t7 = (await $.wv([$t6], "Sender", { get: async () => L0["sender"], set: async (v) => { L0["sender"] = v; }, local: true }, false));
    if ($.truthy($.not(((await $.wv([$t6, $t7], "Active", C, false)))))) {
      await $.stmt($.wcall([$t6, $t7], "Open", [], C));
    } else {
      await $.stmt($.wcall([$t6, $t7], "Refresh", [], C));
    }
    if ($.truthy($.ne((await $.mv((await $.wv([$t6, $t7], "Items", C, false)), "Count")), (await $.wv([$t6, $t7], "RecordCount", C, false))))) {
      await $.mcall((await $.wv([$t6, $t7], "Items", C, false)), "Clear", []);
      await $.stmt($.wcall([$t6, $t7], "First", [], C));
      while ($.truthy($.not(((await $.wv([$t6, $t7], "EOF", C, false)))))) {
        await $.stmt((await $.mcall((await $.wv([$t6, $t7], "Items", C, false)), "Add", [(await $.mv((await $.wcall([$t6, $t7], "FieldByName", ["NAME"], C)), "AsString"))])));
        await $.stmt($.wcall([$t6, $t7], "Next", [], C));
        await $.tick();
      }
    }
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TComboBox"]});
  U.method("TCO_Transact", "SetCashSymbol", async function SetCashSymbol(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: undefined};
  {
    const $t8 = (await $.v(C, "TransactionDataModule"));
    const $t9 = (await $.wv([$t8], "CashSymbolLookUp", C, false));
    if ($.truthy((await $.and_(($.eq((await $.mv((await $.mcall((await $.wv([$t8, $t9], "DebitAccData", C, false)), "FieldByName", ["IsCacheAccount"])), "AsInteger")), 1)), async () => ($.eq((await $.mv((await $.mcall((await $.wv([$t8, $t9], "DebitAccData", C, false)), "FieldByName", ["val_acc"])), "AsInteger")), 0)))))) {
      await $.mset((await $.mv((await $.wv([$t8, $t9], "ListSource", C, false)), "DataSet")), "Filter", "Mediocrity = 0");
    } else {
      if ($.truthy((await $.and_(($.eq((await $.mv((await $.mcall((await $.wv([$t8, $t9], "CreditAccData", C, false)), "FieldByName", ["IsCacheAccount"])), "AsInteger")), 1)), async () => ($.eq((await $.mv((await $.mcall((await $.wv([$t8, $t9], "CreditAccData", C, false)), "FieldByName", ["val_acc"])), "AsInteger")), 0)))))) {
        await $.mset((await $.mv((await $.wv([$t8, $t9], "ListSource", C, false)), "DataSet")), "Filter", "Mediocrity = 1");
      } else {
        await $.mset((await $.mv((await $.wv([$t8, $t9], "ListSource", C, false)), "DataSet")), "Filter", "Mediocrity = -1");
      }
    }
    await $.mset((await $.mv((await $.wv([$t8, $t9], "ListSource", C, false)), "DataSet")), "Filtered", (await $.wv([$t8, $t9], "False", C, false)));
    await $.mset((await $.mv((await $.wv([$t8, $t9], "ListSource", C, false)), "DataSet")), "Filtered", (await $.wv([$t8, $t9], "True", C, false)));
  }
  return L0.result;
}, {"params": [], "kind": "procedure", "ptypes": []});
  U.method("TCO_Transact", "CMDialogKey", async function CMDialogKey(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"msg": $.asRef(p0), result: undefined};
  await $.inherited(Self, "TCO_Transact", "CMDialogKey", null, arguments);
  return L0.result;
}, {"params": ["Msg"], "kind": "procedure", "ptypes": ["TWMKey"]});
  U.method("TCO_Transact", "Init", async function Init(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: undefined};
  {
    const $t10 = (await $.v(C, "TransactionDataModule"));
    const $t11 = (await $.wv([$t10], "Transactions", C, false));
    { const $t12 = (await $.wv([$t10, $t11], "OperationMode", C, false));
      if ($.eq($t12, (await $.wv([$t10, $t11], "omInsert", C, false)))) {
        await $.mset((await $.wcall([$t10, $t11], "FieldByName", ["DebitCurrencyID"], C)), "AsInteger", 0);
        await $.mset((await $.wcall([$t10, $t11], "FieldByName", ["CreditCurrencyID"], C)), "AsInteger", 0);
        await $.mset((await $.wcall([$t10, $t11], "FieldByName", ["DebitRate"], C)), "AsFloat", (await $.mv((await $.mcall((await $.wv([$t10, $t11], "DebitCurrencyData", C, false)), "FieldByName", ["Rate"])), "AsFloat")));
        await $.mset((await $.wcall([$t10, $t11], "FieldByName", ["CreditRate"], C)), "AsFloat", (await $.mv((await $.mcall((await $.wv([$t10, $t11], "CreditCurrencyData", C, false)), "FieldByName", ["Rate"])), "AsFloat")));
        await $.mcall((await $.wcall([$t10, $t11], "FieldByName", ["DebitID"], C)), "Clear", []);
        await $.mcall((await $.wcall([$t10, $t11], "FieldByName", ["CreditID"], C)), "Clear", []);
        await $.mset((await $.wv([$t10, $t11], "PanelDebitRest", C, false)), "Visible", (await $.wv([$t10, $t11], "False", C, false)));
        await $.mset((await $.wv([$t10, $t11], "PanelCreditRest", C, false)), "Visible", (await $.wv([$t10, $t11], "False", C, false)));
      }
      else if ($.eq($t12, (await $.wv([$t10, $t11], "omEdit", C, false)))) {
        await $.mset((await $.wv([$t10, $t11], "TransDate", C, false)), "DateTime", (await $.mv((await $.wcall([$t10, $t11], "FieldByName", ["TransactionDate"], C)), "AsDateTime")));
        await $.mset((await $.wv([$t10, $t11], "DebtAccSearchEdit", C, false)), "Text", (await $.mv((await $.wcall([$t10, $t11], "FieldByName", ["DebitAccNo"], C)), "AsString")));
        await $.mset((await $.wv([$t10, $t11], "CreditAccSearchEdit", C, false)), "Text", (await $.mv((await $.wcall([$t10, $t11], "FieldByName", ["CreditAccNo"], C)), "AsString")));
        await $.mset((await $.wv([$t10, $t11], "CurrencyEditDebit", C, false)), "Value", (await $.mv((await $.wcall([$t10, $t11], "FieldByName", ["DebitAmount"], C)), "AsCurrency")));
        await $.mset((await $.wv([$t10, $t11], "CurrencyEditCredit", C, false)), "Value", (await $.mv((await $.wcall([$t10, $t11], "FieldByName", ["CreditAmount"], C)), "AsCurrency")));
        await $.mset((await $.wv([$t10, $t11], "CurrencyEditLammount", C, false)), "Value", (await $.mv((await $.wcall([$t10, $t11], "FieldByName", ["Lamount"], C)), "AsCurrency")));
      }
      else if ($.eq($t12, (await $.wv([$t10, $t11], "omCommission", C, false)))) {
        await $.mset((await $.wcall([$t10, $t11], "FieldByName", ["DebitCurrencyID"], C)), "AsInteger", (await $.mv((await $.mcall((await $.wv([$t10, $t11], "Commission", C, false)), "FieldByName", ["DebitCurrencyID"])), "AsInteger")));
        await $.mset((await $.wcall([$t10, $t11], "FieldByName", ["CreditCurrencyID"], C)), "AsInteger", (await $.mv((await $.mcall((await $.wv([$t10, $t11], "Commission", C, false)), "FieldByName", ["CreditCurrencyID"])), "AsInteger")));
        await $.mset((await $.wcall([$t10, $t11], "FieldByName", ["DebitID"], C)), "AsInteger", (await $.mv((await $.mcall((await $.wv([$t10, $t11], "Commission", C, false)), "FieldByName", ["Debt"])), "AsInteger")));
        await $.mset((await $.wcall([$t10, $t11], "FieldByName", ["CreditID"], C)), "AsInteger", (await $.mv((await $.mcall((await $.wv([$t10, $t11], "Commission", C, false)), "FieldByName", ["Credit"])), "AsInteger")));
        await $.mset((await $.wv([$t10, $t11], "DebtAccSearchEdit", C, false)), "Text", (await $.mv((await $.mcall((await $.wv([$t10, $t11], "Commission", C, false)), "FieldByName", ["DebitAccount"])), "AsString")));
        await $.mset((await $.wv([$t10, $t11], "CreditAccSearchEdit", C, false)), "Text", (await $.mv((await $.mcall((await $.wv([$t10, $t11], "Commission", C, false)), "FieldByName", ["CreditAccount"])), "AsString")));
        await $.mset((await $.wcall([$t10, $t11], "FieldByName", ["Name"], C)), "AsString", (await $.mv((await $.mcall((await $.wv([$t10, $t11], "Commission", C, false)), "FieldByName", ["Assignment"])), "AsString")));
        await $.mset((await $.wv([$t10, $t11], "PanelDebitRest", C, false)), "Visible", $.ne((await $.mv((await $.wv([$t10, $t11], "DebtAccSearchEdit", C, false)), "Text")), (await $.wv([$t10, $t11], "EmptyStr", C, false))));
        await $.mset((await $.wv([$t10, $t11], "PanelCreditRest", C, false)), "Visible", $.ne((await $.mv((await $.wv([$t10, $t11], "CreditAccSearchEdit", C, false)), "Text")), (await $.wv([$t10, $t11], "EmptyStr", C, false))));
      }
    }
  }
  return L0.result;
}, {"params": [], "kind": "procedure", "ptypes": []});
  U.func("CutEditText", async function CutEditText(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "x": 0, "sel": 0};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t13 = (await $.call(C, "TCurrencyEdit", [L0["sender"]]));
    if ($.truthy($.eq((await $.wv([$t13], "DecimalSeparator", C, false)), (await $.wv([$t13], "ThousandSeparator", C, false))))) {
      return L0.result;
    }
    if ($.truthy($.eq((await $.wcall([$t13], "Pos", [(await $.wv([$t13], "DecimalSeparator", C, false)), (await $.wv([$t13], "Text", C, false))], C)), 0))) {
      return L0.result;
    }
    await $.wset([$t13], "Sel", (await $.wv([$t13], "SelStart", C, false)), { get: async () => L0["sel"], set: async (v) => { L0["sel"] = v; }, local: true });
    await $.wset([$t13], "X", $.sub($.sub((await $.wcall([$t13], "Length", [(await $.wv([$t13], "Text", C, false))], C)), (await $.wcall([$t13], "Pos", [(await $.wv([$t13], "DecimalSeparator", C, false)), (await $.wv([$t13], "Text", C, false))], C))), (await $.wv([$t13], "CurrencyDecimals", C, false))), { get: async () => L0["x"], set: async (v) => { L0["x"] = v; }, local: true });
    if ($.truthy(($.gt((await $.wv([$t13], "X", { get: async () => L0["x"], set: async (v) => { L0["x"] = v; }, local: true }, false)), 0)))) {
      await $.wset([$t13], "Text", (await $.wcall([$t13], "Copy", [(await $.wv([$t13], "Text", C, false)), 0, ($.sub((await $.wcall([$t13], "Length", [(await $.wv([$t13], "Text", C, false))], C)), (await $.wv([$t13], "X", { get: async () => L0["x"], set: async (v) => { L0["x"] = v; }, local: true }, false))))], C)), C);
      await $.wset([$t13], "SelStart", (await $.wv([$t13], "Sel", { get: async () => L0["sel"], set: async (v) => { L0["sel"] = v; }, local: true }, false)), C);
    }
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TCO_Transact", "RoundNew", async function RoundNew(Self, p0, p1) {
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
  U.method("TCO_Transact", "ClearAmmounts", async function ClearAmmounts(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: undefined};
  await $.mset((await $.v(C, "CurrencyEditDebit")), "Value", 0.0);
  await $.mset((await $.v(C, "CurrencyEditCredit")), "Value", 0.0);
  await $.mset((await $.v(C, "CurrencyEditLammount")), "Value", 0.0);
  return L0.result;
}, {"params": [], "kind": "procedure", "ptypes": []});
  U.method("TCO_Transact", "ResetAccountFilter", async function ResetAccountFilter(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"accountdataset": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["accountdataset"]);
  {
    const $t14 = L0["accountdataset"];
    if ($.truthy($.ne((await $.wv([$t14], "Filter", C, false)), ""))) {
      await $.wset([$t14], "Filtered", (await $.wv([$t14], "False", C, false)), C);
      await $.wset([$t14], "Filter", "", C);
      await $.wset([$t14], "Filtered", (await $.wv([$t14], "True", C, false)), C);
    }
  }
  return L0.result;
}, {"params": ["AccountDataSet"], "kind": "procedure", "ptypes": ["TDataSet"]});
  U.method("TCO_Transact", "SaveTransaction", async function SaveTransaction(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: undefined};
  {
    const $t15 = (await $.v(C, "TransactionDataModule"));
    const $t16 = (await $.wv([$t15], "Transactions", C, false));
    if ($.truthy($.in_((await $.wv([$t15, $t16], "State", C, false)), [(await $.wv([$t15, $t16], "dsEdit", C, false)), (await $.wv([$t15, $t16], "dsInsert", C, false))]))) {
      await $.mset((await $.wcall([$t15, $t16], "FieldByName", ["TransactionDate"], C)), "AsDateTime", (await $.wcall([$t15, $t16], "Int", [(await $.mv((await $.wv([$t15, $t16], "TransDate", C, false)), "DateTime"))], C)));
      await $.mset((await $.wcall([$t15, $t16], "FieldByName", ["DebitAmount"], C)), "AsCurrency", (await $.mv((await $.wv([$t15, $t16], "CurrencyEditDebit", C, false)), "Value")));
      await $.mset((await $.wcall([$t15, $t16], "FieldByName", ["CreditAmount"], C)), "AsCurrency", (await $.mv((await $.wv([$t15, $t16], "CurrencyEditCredit", C, false)), "Value")));
      await $.mset((await $.wcall([$t15, $t16], "FieldByName", ["Lamount"], C)), "AsCurrency", (await $.mv((await $.wv([$t15, $t16], "CurrencyEditLammount", C, false)), "Value")));
      await $.mset((await $.wcall([$t15, $t16], "FieldByName", ["Status"], C)), "AsInteger", 1);
      await $.mset((await $.wcall([$t15, $t16], "FieldByName", ["DebitAccNo"], C)), "AsString", (await $.mv((await $.wv([$t15, $t16], "DebtAccSearchEdit", C, false)), "Text")));
      await $.mset((await $.wcall([$t15, $t16], "FieldByName", ["CreditAccNo"], C)), "AsString", (await $.mv((await $.wv([$t15, $t16], "CreditAccSearchEdit", C, false)), "Text")));
      await $.mset((await $.wcall([$t15, $t16], "FieldByName", ["DebitCurrencySName"], C)), "AsString", (await $.mv((await $.mcall((await $.wv([$t15, $t16], "DebitCurrencyData", C, false)), "FieldByName", ["SName"])), "AsString")));
      await $.mset((await $.wcall([$t15, $t16], "FieldByName", ["CreditCurrencySName"], C)), "AsString", (await $.mv((await $.mcall((await $.wv([$t15, $t16], "CreditCurrencyData", C, false)), "FieldByName", ["SName"])), "AsString")));
      await $.mset((await $.wcall([$t15, $t16], "FieldByName", ["OperationNo"], C)), "AsString", (await $.mv((await $.wv([$t15, $t16], "DBEditOperationNo", C, false)), "Text")));
      if ($.truthy($.eq((await $.mv((await $.wv([$t15, $t16], "OperationTypeLookUp", C, false)), "Text")), (await $.wv([$t15, $t16], "EmptyStr", C, false))))) {
        await $.mset((await $.wcall([$t15, $t16], "FieldByName", ["OperationCode"], C)), "Value", (await $.wv([$t15, $t16], "Null", C, false)));
      }
      await $.stmt($.wcall([$t15, $t16], "Post", [], C));
    }
  }
  return L0.result;
}, {"params": [], "kind": "procedure", "ptypes": []});
  U.method("TCO_Transact", "ResetTransaction", async function ResetTransaction(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: undefined};
  await $.stmt($.call(C, "OperationCancel", []));
  await $.stmt($.call(C, "ClearAmmounts", []));
  {
    const $t17 = (await $.v(C, "TransactionDataModule"));
    const $t18 = (await $.wv([$t17], "Transactions", C, false));
    await $.stmt($.wcall([$t17, $t18], "Insert", [], C));
    await $.mset((await $.wcall([$t17, $t18], "FieldByName", ["DebitCurrencyID"], C)), "AsInteger", (await $.wv([$t17, $t18], "DebitCurrencyID", C, false)));
    await $.mset((await $.wcall([$t17, $t18], "FieldByName", ["CreditCurrencyID"], C)), "AsInteger", (await $.wv([$t17, $t18], "CreditCurrencyID", C, false)));
  }
  return L0.result;
}, {"params": [], "kind": "procedure", "ptypes": []});
  U.method("TCO_Transact", "Scroll", async function Scroll(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: undefined};
  if ($.truthy($.eq((await $.mv((await $.v(C, "CO_Transact")), "OperationMode")), (await $.v(C, "omEdit"))))) {
    {
      const $t19 = (await $.v(C, "TransactionDataModule"));
      await $.mcall((await $.wv([$t19], "DebitAccData", C, false)), "Next", []);
      await $.mcall((await $.wv([$t19], "DebitAccData", C, false)), "Prior", []);
      await $.mcall((await $.wv([$t19], "CreditAccData", C, false)), "Next", []);
      await $.mcall((await $.wv([$t19], "CreditAccData", C, false)), "Prior", []);
    }
  }
  return L0.result;
}, {"params": [], "kind": "procedure", "ptypes": []});
  U.func("CheckCurrency", async function CheckCurrency(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: false};
  await $.fixArgs(L0, ["value"]);
  {
    const $t20 = (await $.v(C, "TransactionDataModule"));
    const $t21 = (await $.wv([$t20], "Currency", C, false));
    await $.wset([$t20, $t21], "Result", (await $.wcall([$t20, $t21], "Locate", ["valute", (await $.wv([$t20, $t21], "Value", { get: async () => L0["value"], set: async (v) => { L0["value"] = v; }, local: true }, false)), []], C)), { get: async () => L0["result"], set: async (v) => { L0["result"] = v; }, local: true });
  }
  return L0.result;
}, {"params": ["Value"], "kind": "function", "ptypes": ["Variant"]});
  U.method("TCO_Transact", "DebitCurrencyIDEditExit", async function DebitCurrencyIDEditExit(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t22 = (await $.call(C, "TDBEdit", [L0["sender"]]));
    const $t23 = (await $.wv([$t22], "TransactionDataModule", C, false));
    const $t24 = (await $.wv([$t22, $t23], "Transactions", C, false));
    if ($.truthy($.not((await $.wcall([$t22, $t23, $t24], "CheckCurrency", [(await $.wv([$t22, $t23, $t24], "Text", C, false))], C))))) {
      await $.mset((await $.wv([$t22, $t23, $t24], "DebtAccSearchEdit", C, false)), "Text", (await $.wv([$t22, $t23, $t24], "EmptyStr", C, false)));
      await $.mcall((await $.wcall([$t22, $t23, $t24], "FieldByName", ["DebitRate"], C)), "Clear", []);
      await $.wset([$t22, $t23, $t24], "Color", (await $.wv([$t22, $t23, $t24], "clRed", C, false)), C);
      await $.stmt($.wcall([$t22, $t23, $t24], "SetFocus", [], C));
    } else {
      await $.wset([$t22, $t23, $t24], "Color", (await $.wv([$t22, $t23, $t24], "clWindow", C, false)), C);
    }
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TCO_Transact", "DebitCurrencyLookUpCloseUp", async function DebitCurrencyLookUpCloseUp(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t25 = (await $.v(C, "DebtAccSearchEdit"));
    const $t26 = (await $.wv([$t25], "TransactionDataModule", C, false));
    await $.mset((await $.mv((await $.wv([$t25, $t26], "DataSource", C, false)), "DataSet")), "Filtered", (await $.wv([$t25, $t26], "False", C, false)));
    await $.mset((await $.mv((await $.wv([$t25, $t26], "DataSource", C, false)), "DataSet")), "Filter", $.add("val_acc= ", (await $.mv((await $.mcall((await $.wv([$t25, $t26], "DebitCurrencyData", C, false)), "FieldByName", ["ID"])), "AsString"))));
    await $.mset((await $.mv((await $.wv([$t25, $t26], "DataSource", C, false)), "DataSet")), "Filtered", (await $.wv([$t25, $t26], "True", C, false)));
    await $.wset([$t25, $t26], "Text", "", C);
    await $.mset((await $.mcall((await $.mv((await $.mv((await $.wcall([$t25, $t26], "TDBLookupComboBox", [(await $.wv([$t25, $t26], "Sender", { get: async () => L0["sender"], set: async (v) => { L0["sender"] = v; }, local: true }, false))], C)), "DataSource")), "DataSet")), "FieldByName", ["DEBITRATE"])), "AsCurrency", (await $.mv((await $.mcall((await $.mv((await $.mv((await $.wcall([$t25, $t26], "TDBLookupComboBox", [(await $.wv([$t25, $t26], "Sender", { get: async () => L0["sender"], set: async (v) => { L0["sender"] = v; }, local: true }, false))], C)), "ListSource")), "DataSet")), "FieldByName", ["RATE"])), "AsCurrency")));
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TCO_Transact", "DebitCurrencyRateChange", async function DebitCurrencyRateChange(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.set(C, "Modifed", true);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TCO_Transact", "DebtAccSearchEditChange", async function DebtAccSearchEditChange(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t27 = (await $.call(C, "TSearchEdit", [L0["sender"]]));
    const $t28 = (await $.wv([$t27], "TransactionDataModule", C, false));
    const $t29 = (await $.wv([$t27, $t28], "Transactions", C, false));
    if ($.truthy($.eq((await $.wv([$t27, $t28, $t29], "Text", C, false)), (await $.wv([$t27, $t28, $t29], "EmptyStr", C, false))))) {
      await $.mcall((await $.wcall([$t27, $t28, $t29], "FieldByName", ["DebitID"], C)), "Clear", []);
      await $.mcall((await $.wcall([$t27, $t28, $t29], "FieldByName", ["InBalanceChar"], C)), "Clear", []);
    }
    await $.wset([$t27, $t28, $t29], "Modifed", (await $.wv([$t27, $t28, $t29], "True", C, false)), C);
    await $.mset((await $.wv([$t27, $t28, $t29], "PanelDebitRest", C, false)), "Visible", (await $.and_($.not(($.eq((await $.wcall([$t27, $t28, $t29], "Trim", [(await $.wv([$t27, $t28, $t29], "Text", C, false))], C)), (await $.wv([$t27, $t28, $t29], "EmptyStr", C, false))))), async () => ($.not((await $.mv((await $.wcall([$t27, $t28, $t29], "FieldByName", ["DebitID"], C)), "IsNull")))))));
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TCO_Transact", "DebtAccSearchEditEnter", async function DebtAccSearchEditEnter(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t30 = (await $.v(C, "TransactionDataModule"));
    await $.stmt((await $.wcall([$t30], "SetCurrencyFilter", [(await $.wv([$t30], "DebitAccData", C, false)), (await $.wv([$t30], "DebitCurrencyData", C, false))], C)));
    if ($.truthy($.eq((await $.mv((await $.wcall([$t30], "TEdit", [(await $.wv([$t30], "Sender", { get: async () => L0["sender"], set: async (v) => { L0["sender"] = v; }, local: true }, false))], C)), "Text")), (await $.wv([$t30], "EmptyStr", C, false))))) {
      await $.mcall((await $.mcall((await $.wv([$t30], "Transactions", C, false)), "FieldByName", ["DebitID"])), "Clear", []);
    }
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TCO_Transact", "DebitAccNoLookUpDropDown", async function DebitAccNoLookUpDropDown(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t31 = (await $.v(C, "TransactionDataModule"));
    await $.stmt((await $.wcall([$t31], "SetCurrencyFilter", [(await $.wv([$t31], "DebitAccData", C, false)), (await $.wv([$t31], "DebitCurrencyData", C, false))], C)));
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TCO_Transact", "DebitAccNameCBDropDown", async function DebitAccNameCBDropDown(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t32 = (await $.v(C, "TransactionDataModule"));
    await $.stmt((await $.wcall([$t32], "SetCurrencyFilter", [(await $.wv([$t32], "DebitAccData", C, false)), (await $.wv([$t32], "DebitCurrencyData", C, false))], C)));
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TCO_Transact", "FormActivate", async function FormActivate(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  return U;
}
