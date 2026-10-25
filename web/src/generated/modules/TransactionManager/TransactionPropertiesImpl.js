// Generated from TransactionPropertiesImpl.pas by pas2js — do not edit by hand; regenerate instead.
/* eslint-disable */
// @ts-nocheck

export default function define($) {
  const U = $.unit("TransactionPropertiesImpl", ["Windows", "Messages", "SysUtils", "Classes", "Graphics", "Controls", "Forms", "Dialogs", "ComCtrls", "StdCtrls", "ImgList", "ExtCtrls", "CurrencyEdit", "DBCtrls", "Mask", "DBViewComboBox", "Db", "SearchEdit", "ActnList", "TransactionDataModuleUnit", "TransactionManagerImpl", "sboapidatamoduleimpl", "TransactionDestinationImpl"]);
  const C = [U];
  U.const("tsDebet", 0);
  U.const("tsCredit", 1);
  U.const("tsUnknown", 2);
  U.defClass("TTransactionEditForm", "TForm", {"groupbox1": {"name": "GroupBox1", "type": "TGroupBox"}, "headercontrol1": {"name": "HeaderControl1", "type": "THeaderControl"}, "panel1": {"name": "Panel1", "type": "TPanel"}, "paneldebit": {"name": "PanelDebit", "type": "TPanel"}, "panel4": {"name": "Panel4", "type": "TPanel"}, "panel5": {"name": "Panel5", "type": "TPanel"}, "panel6": {"name": "Panel6", "type": "TPanel"}, "panel2": {"name": "Panel2", "type": "TPanel"}, "panelcredit": {"name": "PanelCredit", "type": "TPanel"}, "panel8": {"name": "Panel8", "type": "TPanel"}, "panel9": {"name": "Panel9", "type": "TPanel"}, "panel10": {"name": "Panel10", "type": "TPanel"}, "groupbox2": {"name": "GroupBox2", "type": "TGroupBox"}, "panel11": {"name": "Panel11", "type": "TPanel"}, "panel12": {"name": "Panel12", "type": "TPanel"}, "panel13": {"name": "Panel13", "type": "TPanel"}, "currencyeditdebit": {"name": "CurrencyEditDebit", "type": "TCurrencyEdit"}, "currencyeditcredit": {"name": "CurrencyEditCredit", "type": "TCurrencyEdit"}, "currencyeditlammount": {"name": "CurrencyEditLammount", "type": "TCurrencyEdit"}, "groupbox3": {"name": "GroupBox3", "type": "TGroupBox"}, "panel14": {"name": "Panel14", "type": "TPanel"}, "panel15": {"name": "Panel15", "type": "TPanel"}, "cashsymbollookup": {"name": "CashSymbolLookUp", "type": "TDBLookupComboBox"}, "cashsymboldbedit": {"name": "CashSymbolDBEdit", "type": "TDBEdit"}, "convertationsymbolidbedit": {"name": "ConvertationSymbolIDBEdit", "type": "TDBEdit"}, "panel16": {"name": "Panel16", "type": "TPanel"}, "trdestnoedit": {"name": "TrDestNoEdit", "type": "TEdit"}, "panel17": {"name": "Panel17", "type": "TPanel"}, "buttonapply": {"name": "ButtonApply", "type": "TButton"}, "buttoncancel": {"name": "ButtonCancel", "type": "TButton"}, "buttonclose": {"name": "ButtonClose", "type": "TButton"}, "debitcurrencyidedit": {"name": "DebitCurrencyIDEdit", "type": "TDBEdit"}, "debitcurrencyrate": {"name": "DebitCurrencyRate", "type": "TDBEdit"}, "creditcurrencyidedit": {"name": "CreditCurrencyIDEdit", "type": "TDBEdit"}, "creditcurrencyrate": {"name": "CreditCurrencyRate", "type": "TDBEdit"}, "debitcurrencylookup": {"name": "DebitCurrencyLookUp", "type": "TDBLookupComboBox"}, "creditcurrencylookup": {"name": "CreditCurrencyLookUp", "type": "TDBLookupComboBox"}, "creditaccnolookup": {"name": "CreditAccNoLookUp", "type": "TDBLookupComboBox"}, "debitaccnolookup": {"name": "DebitAccNoLookUp", "type": "TDBLookupComboBox"}, "debtaccsearchedit": {"name": "DebtAccSearchEdit", "type": "TSearchEdit"}, "creditaccsearchedit": {"name": "CreditAccSearchEdit", "type": "TSearchEdit"}, "debitaccnamecb": {"name": "DebitAccNameCB", "type": "TDBLookupComboBox"}, "dblookupcombobox3": {"name": "DBLookupComboBox3", "type": "TDBLookupComboBox"}, "convertationsymbollookup": {"name": "ConvertationSymbolLookUp", "type": "TDBLookupComboBox"}, "groupbox4": {"name": "GroupBox4", "type": "TGroupBox"}, "label5": {"name": "Label5", "type": "TLabel"}, "transdate": {"name": "TransDate", "type": "TDateTimePicker"}, "paneldebitrest": {"name": "PanelDebitRest", "type": "TPanel"}, "label1": {"name": "Label1", "type": "TLabel"}, "dbtext1": {"name": "DBText1", "type": "TDBText"}, "label2": {"name": "Label2", "type": "TLabel"}, "dbtext2": {"name": "DBText2", "type": "TDBText"}, "panelcreditrest": {"name": "PanelCreditRest", "type": "TPanel"}, "label3": {"name": "Label3", "type": "TLabel"}, "dbtext3": {"name": "DBText3", "type": "TDBText"}, "label4": {"name": "Label4", "type": "TLabel"}, "dbtext4": {"name": "DBText4", "type": "TDBText"}, "label6": {"name": "Label6", "type": "TLabel"}, "label7": {"name": "Label7", "type": "TLabel"}, "operationtypelookup": {"name": "OperationTypeLookUp", "type": "TDBLookupComboBox"}, "dbeditoperationno": {"name": "DBEditOperationNo", "type": "TDBEdit"}, "actionlist1": {"name": "ActionList1", "type": "TActionList"}, "actioninsert": {"name": "ActionInsert", "type": "TAction"}, "actioncancel": {"name": "ActionCancel", "type": "TAction"}, "actionexit": {"name": "ActionExit", "type": "TAction"}, "dbedit4": {"name": "DBEdit4", "type": "TDBEdit"}, "combobox1": {"name": "ComboBox1", "type": "TComboBox"}, "dbeditdestination": {"name": "DBEditDestination", "type": "TDBEdit"}, "transactionside": {"name": "TransactionSide", "type": "TTransactionSide"}, "debitcurrencyid": {"name": "DebitCurrencyID", "type": "Word"}, "creditcurrencyid": {"name": "CreditCurrencyID", "type": "Word"}, "modifed": {"name": "Modifed", "type": "Boolean"}}, {});
  U.init(async () => {
    U.var_("TransactionEditForm", null, "TTransactionEditForm");
  });
  U.method("TTransactionEditForm", "SIK", async function SIK(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"message": $.asRef(p0), result: undefined};
  await $.inherited(Self, "TTransactionEditForm", "SIK", null, arguments);
  return L0.result;
}, {"params": ["message"], "kind": "procedure", "ptypes": ["TMessage"]});
  U.method("TTransactionEditForm", "SetCurrencyFilter", async function SetCurrencyFilter(Self, p0, p1) {
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
  U.method("TTransactionEditForm", "OperationCancel", async function OperationCancel(Self) {
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
  U.method("TTransactionEditForm", "SetAmmounts", async function SetAmmounts(Self, p0) {
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
  U.method("TTransactionEditForm", "SetCashSymbol", async function SetCashSymbol(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: undefined};
  {
    const $t6 = (await $.v(C, "TransactionDataModule"));
    const $t7 = (await $.wv([$t6], "CashSymbolLookUp", C, false));
    if ($.truthy((await $.and_(($.eq((await $.mv((await $.mcall((await $.wv([$t6, $t7], "DebitAccData", C, false)), "FieldByName", ["IsCacheAccount"])), "AsInteger")), 1)), async () => ($.eq((await $.mv((await $.mcall((await $.wv([$t6, $t7], "DebitAccData", C, false)), "FieldByName", ["val_acc"])), "AsInteger")), 0)))))) {
      await $.mset((await $.mv((await $.wv([$t6, $t7], "ListSource", C, false)), "DataSet")), "Filter", "Mediocrity = 0");
    } else {
      if ($.truthy((await $.and_(($.eq((await $.mv((await $.mcall((await $.wv([$t6, $t7], "CreditAccData", C, false)), "FieldByName", ["IsCacheAccount"])), "AsInteger")), 1)), async () => ($.eq((await $.mv((await $.mcall((await $.wv([$t6, $t7], "CreditAccData", C, false)), "FieldByName", ["val_acc"])), "AsInteger")), 0)))))) {
        await $.mset((await $.mv((await $.wv([$t6, $t7], "ListSource", C, false)), "DataSet")), "Filter", "Mediocrity = 1");
      } else {
        await $.mset((await $.mv((await $.wv([$t6, $t7], "ListSource", C, false)), "DataSet")), "Filter", "Mediocrity = -1");
      }
    }
    await $.mset((await $.mv((await $.wv([$t6, $t7], "ListSource", C, false)), "DataSet")), "Filtered", (await $.wv([$t6, $t7], "False", C, false)));
    await $.mset((await $.mv((await $.wv([$t6, $t7], "ListSource", C, false)), "DataSet")), "Filtered", (await $.wv([$t6, $t7], "True", C, false)));
  }
  return L0.result;
}, {"params": [], "kind": "procedure", "ptypes": []});
  U.method("TTransactionEditForm", "CMDialogKey", async function CMDialogKey(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"msg": $.asRef(p0), result: undefined};
  await $.inherited(Self, "TTransactionEditForm", "CMDialogKey", null, arguments);
  return L0.result;
}, {"params": ["Msg"], "kind": "procedure", "ptypes": ["TWMKey"]});
  U.method("TTransactionEditForm", "Init", async function Init(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: undefined};
  {
    const $t8 = (await $.v(C, "TransactionManagerForm"));
    const $t9 = (await $.wv([$t8], "TransactionDataModule", C, false));
    const $t10 = (await $.wv([$t8, $t9], "Transactions", C, false));
    { const $t11 = (await $.wv([$t8, $t9, $t10], "OperationMode", C, false));
      if ($.eq($t11, (await $.wv([$t8, $t9, $t10], "omInsert", C, false)))) {
        await $.mset((await $.wcall([$t8, $t9, $t10], "FieldByName", ["DebitCurrencyID"], C)), "AsInteger", 0);
        await $.mset((await $.wcall([$t8, $t9, $t10], "FieldByName", ["CreditCurrencyID"], C)), "AsInteger", 0);
        await $.mset((await $.wcall([$t8, $t9, $t10], "FieldByName", ["DebitRate"], C)), "AsFloat", (await $.mv((await $.mcall((await $.wv([$t8, $t9, $t10], "DebitCurrencyData", C, false)), "FieldByName", ["Rate"])), "AsFloat")));
        await $.mset((await $.wcall([$t8, $t9, $t10], "FieldByName", ["CreditRate"], C)), "AsFloat", (await $.mv((await $.mcall((await $.wv([$t8, $t9, $t10], "CreditCurrencyData", C, false)), "FieldByName", ["Rate"])), "AsFloat")));
        await $.mcall((await $.wcall([$t8, $t9, $t10], "FieldByName", ["DebitID"], C)), "Clear", []);
        await $.mcall((await $.wcall([$t8, $t9, $t10], "FieldByName", ["CreditID"], C)), "Clear", []);
        await $.mset((await $.wv([$t8, $t9, $t10], "PanelDebitRest", C, false)), "Visible", (await $.wv([$t8, $t9, $t10], "False", C, false)));
        await $.mset((await $.wv([$t8, $t9, $t10], "PanelCreditRest", C, false)), "Visible", (await $.wv([$t8, $t9, $t10], "False", C, false)));
      }
      else if ($.eq($t11, (await $.wv([$t8, $t9, $t10], "omEdit", C, false)))) {
        await $.mset((await $.wv([$t8, $t9, $t10], "TransDate", C, false)), "DateTime", (await $.mv((await $.wcall([$t8, $t9, $t10], "FieldByName", ["TransactionDate"], C)), "AsDateTime")));
        await $.mset((await $.wv([$t8, $t9, $t10], "DebtAccSearchEdit", C, false)), "Text", (await $.mv((await $.wcall([$t8, $t9, $t10], "FieldByName", ["DebitAccNo"], C)), "AsString")));
        await $.mset((await $.wv([$t8, $t9, $t10], "CreditAccSearchEdit", C, false)), "Text", (await $.mv((await $.wcall([$t8, $t9, $t10], "FieldByName", ["CreditAccNo"], C)), "AsString")));
        await $.mset((await $.wv([$t8, $t9, $t10], "CurrencyEditDebit", C, false)), "Value", (await $.mv((await $.wcall([$t8, $t9, $t10], "FieldByName", ["DebitAmount"], C)), "AsCurrency")));
        await $.mset((await $.wv([$t8, $t9, $t10], "CurrencyEditCredit", C, false)), "Value", (await $.mv((await $.wcall([$t8, $t9, $t10], "FieldByName", ["CreditAmount"], C)), "AsCurrency")));
        await $.mset((await $.wv([$t8, $t9, $t10], "CurrencyEditLammount", C, false)), "Value", (await $.mv((await $.wcall([$t8, $t9, $t10], "FieldByName", ["Lamount"], C)), "AsCurrency")));
      }
      else if ($.eq($t11, (await $.wv([$t8, $t9, $t10], "omCommission", C, false)))) {
        await $.mset((await $.wcall([$t8, $t9, $t10], "FieldByName", ["DebitCurrencyID"], C)), "AsInteger", (await $.mv((await $.mcall((await $.wv([$t8, $t9, $t10], "Commission", C, false)), "FieldByName", ["DebitCurrencyID"])), "AsInteger")));
        await $.mset((await $.wcall([$t8, $t9, $t10], "FieldByName", ["CreditCurrencyID"], C)), "AsInteger", (await $.mv((await $.mcall((await $.wv([$t8, $t9, $t10], "Commission", C, false)), "FieldByName", ["CreditCurrencyID"])), "AsInteger")));
        await $.mset((await $.wcall([$t8, $t9, $t10], "FieldByName", ["DebitID"], C)), "AsInteger", (await $.mv((await $.mcall((await $.wv([$t8, $t9, $t10], "Commission", C, false)), "FieldByName", ["Debt"])), "AsInteger")));
        await $.mset((await $.wcall([$t8, $t9, $t10], "FieldByName", ["CreditID"], C)), "AsInteger", (await $.mv((await $.mcall((await $.wv([$t8, $t9, $t10], "Commission", C, false)), "FieldByName", ["Credit"])), "AsInteger")));
        await $.mset((await $.wv([$t8, $t9, $t10], "DebtAccSearchEdit", C, false)), "Text", (await $.mv((await $.mcall((await $.wv([$t8, $t9, $t10], "Commission", C, false)), "FieldByName", ["DebitAccount"])), "AsString")));
        await $.mset((await $.wv([$t8, $t9, $t10], "CreditAccSearchEdit", C, false)), "Text", (await $.mv((await $.mcall((await $.wv([$t8, $t9, $t10], "Commission", C, false)), "FieldByName", ["CreditAccount"])), "AsString")));
        await $.mset((await $.wcall([$t8, $t9, $t10], "FieldByName", ["Name"], C)), "AsString", (await $.mv((await $.mcall((await $.wv([$t8, $t9, $t10], "Commission", C, false)), "FieldByName", ["Assignment"])), "AsString")));
        await $.mset((await $.wv([$t8, $t9, $t10], "PanelDebitRest", C, false)), "Visible", $.ne((await $.mv((await $.wv([$t8, $t9, $t10], "DebtAccSearchEdit", C, false)), "Text")), (await $.wv([$t8, $t9, $t10], "EmptyStr", C, false))));
        await $.mset((await $.wv([$t8, $t9, $t10], "PanelCreditRest", C, false)), "Visible", $.ne((await $.mv((await $.wv([$t8, $t9, $t10], "CreditAccSearchEdit", C, false)), "Text")), (await $.wv([$t8, $t9, $t10], "EmptyStr", C, false))));
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
    const $t12 = (await $.call(C, "TCurrencyEdit", [L0["sender"]]));
    if ($.truthy($.eq((await $.wv([$t12], "DecimalSeparator", C, false)), (await $.wv([$t12], "ThousandSeparator", C, false))))) {
      return L0.result;
    }
    if ($.truthy($.eq((await $.wcall([$t12], "Pos", [(await $.wv([$t12], "DecimalSeparator", C, false)), (await $.wv([$t12], "Text", C, false))], C)), 0))) {
      return L0.result;
    }
    await $.wset([$t12], "Sel", (await $.wv([$t12], "SelStart", C, false)), { get: async () => L0["sel"], set: async (v) => { L0["sel"] = v; }, local: true });
    await $.wset([$t12], "X", $.sub($.sub((await $.wcall([$t12], "Length", [(await $.wv([$t12], "Text", C, false))], C)), (await $.wcall([$t12], "Pos", [(await $.wv([$t12], "DecimalSeparator", C, false)), (await $.wv([$t12], "Text", C, false))], C))), (await $.wv([$t12], "CurrencyDecimals", C, false))), { get: async () => L0["x"], set: async (v) => { L0["x"] = v; }, local: true });
    if ($.truthy(($.gt((await $.wv([$t12], "X", { get: async () => L0["x"], set: async (v) => { L0["x"] = v; }, local: true }, false)), 0)))) {
      await $.wset([$t12], "Text", (await $.wcall([$t12], "Copy", [(await $.wv([$t12], "Text", C, false)), 0, ($.sub((await $.wcall([$t12], "Length", [(await $.wv([$t12], "Text", C, false))], C)), (await $.wv([$t12], "X", { get: async () => L0["x"], set: async (v) => { L0["x"] = v; }, local: true }, false))))], C)), C);
      await $.wset([$t12], "SelStart", (await $.wv([$t12], "Sel", { get: async () => L0["sel"], set: async (v) => { L0["sel"] = v; }, local: true }, false)), C);
    }
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TTransactionEditForm", "RoundNew", async function RoundNew(Self, p0, p1) {
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
  U.method("TTransactionEditForm", "ClearAmmounts", async function ClearAmmounts(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: undefined};
  await $.mset((await $.v(C, "CurrencyEditDebit")), "Value", 0.0);
  await $.mset((await $.v(C, "CurrencyEditCredit")), "Value", 0.0);
  await $.mset((await $.v(C, "CurrencyEditLammount")), "Value", 0.0);
  return L0.result;
}, {"params": [], "kind": "procedure", "ptypes": []});
  U.method("TTransactionEditForm", "ResetAccountFilter", async function ResetAccountFilter(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"accountdataset": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["accountdataset"]);
  {
    const $t13 = L0["accountdataset"];
    if ($.truthy($.ne((await $.wv([$t13], "Filter", C, false)), ""))) {
      await $.wset([$t13], "Filtered", (await $.wv([$t13], "False", C, false)), C);
      await $.wset([$t13], "Filter", "", C);
      await $.wset([$t13], "Filtered", (await $.wv([$t13], "True", C, false)), C);
    }
  }
  return L0.result;
}, {"params": ["AccountDataSet"], "kind": "procedure", "ptypes": ["TDataSet"]});
  U.method("TTransactionEditForm", "SaveTransaction", async function SaveTransaction(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: undefined};
  {
    const $t14 = (await $.v(C, "TransactionDataModule"));
    const $t15 = (await $.wv([$t14], "Transactions", C, false));
    if ($.truthy($.in_((await $.wv([$t14, $t15], "State", C, false)), [(await $.wv([$t14, $t15], "dsEdit", C, false)), (await $.wv([$t14, $t15], "dsInsert", C, false))]))) {
      await $.mset((await $.wcall([$t14, $t15], "FieldByName", ["TransactionDate"], C)), "AsDateTime", (await $.wcall([$t14, $t15], "Int", [(await $.mv((await $.wv([$t14, $t15], "TransDate", C, false)), "DateTime"))], C)));
      await $.mset((await $.wcall([$t14, $t15], "FieldByName", ["DebitAmount"], C)), "AsCurrency", (await $.mv((await $.wv([$t14, $t15], "CurrencyEditDebit", C, false)), "Value")));
      await $.mset((await $.wcall([$t14, $t15], "FieldByName", ["CreditAmount"], C)), "AsCurrency", (await $.mv((await $.wv([$t14, $t15], "CurrencyEditCredit", C, false)), "Value")));
      await $.mset((await $.wcall([$t14, $t15], "FieldByName", ["Lamount"], C)), "AsCurrency", (await $.mv((await $.wv([$t14, $t15], "CurrencyEditLammount", C, false)), "Value")));
      await $.mset((await $.wcall([$t14, $t15], "FieldByName", ["Status"], C)), "AsInteger", 1);
      await $.mset((await $.wcall([$t14, $t15], "FieldByName", ["DebitAccNo"], C)), "AsString", (await $.mv((await $.wv([$t14, $t15], "DebtAccSearchEdit", C, false)), "Text")));
      await $.mset((await $.wcall([$t14, $t15], "FieldByName", ["CreditAccNo"], C)), "AsString", (await $.mv((await $.wv([$t14, $t15], "CreditAccSearchEdit", C, false)), "Text")));
      await $.mset((await $.wcall([$t14, $t15], "FieldByName", ["DebitCurrencySName"], C)), "AsString", (await $.mv((await $.mcall((await $.wv([$t14, $t15], "DebitCurrencyData", C, false)), "FieldByName", ["SName"])), "AsString")));
      await $.mset((await $.wcall([$t14, $t15], "FieldByName", ["CreditCurrencySName"], C)), "AsString", (await $.mv((await $.mcall((await $.wv([$t14, $t15], "CreditCurrencyData", C, false)), "FieldByName", ["SName"])), "AsString")));
      await $.mset((await $.wcall([$t14, $t15], "FieldByName", ["OperationNo"], C)), "AsString", (await $.mv((await $.wv([$t14, $t15], "DBEditOperationNo", C, false)), "Text")));
      if ($.truthy($.eq((await $.mv((await $.wv([$t14, $t15], "OperationTypeLookUp", C, false)), "Text")), (await $.wv([$t14, $t15], "EmptyStr", C, false))))) {
        await $.mset((await $.wcall([$t14, $t15], "FieldByName", ["OperationCode"], C)), "Value", (await $.wv([$t14, $t15], "Null", C, false)));
      }
      await $.stmt($.wcall([$t14, $t15], "Post", [], C));
      await $.stmt((await $.wcall([$t14, $t15], "SBCommit", [], C)));
    }
  }
  return L0.result;
}, {"params": [], "kind": "procedure", "ptypes": []});
  U.method("TTransactionEditForm", "ResetTransaction", async function ResetTransaction(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: undefined};
  await $.stmt($.call(C, "OperationCancel", []));
  await $.stmt($.call(C, "ClearAmmounts", []));
  {
    const $t16 = (await $.v(C, "TransactionDataModule"));
    const $t17 = (await $.wv([$t16], "Transactions", C, false));
    await $.stmt($.wcall([$t16, $t17], "Insert", [], C));
    await $.mset((await $.wcall([$t16, $t17], "FieldByName", ["DebitCurrencyID"], C)), "AsInteger", (await $.wv([$t16, $t17], "DebitCurrencyID", C, false)));
    await $.mset((await $.wcall([$t16, $t17], "FieldByName", ["CreditCurrencyID"], C)), "AsInteger", (await $.wv([$t16, $t17], "CreditCurrencyID", C, false)));
  }
  return L0.result;
}, {"params": [], "kind": "procedure", "ptypes": []});
  U.method("TTransactionEditForm", "Scroll", async function Scroll(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: undefined};
  if ($.truthy($.eq((await $.mv((await $.v(C, "TransactionManagerForm")), "OperationMode")), (await $.v(C, "omEdit"))))) {
    {
      const $t18 = (await $.v(C, "TransactionDataModule"));
      await $.mcall((await $.wv([$t18], "DebitAccData", C, false)), "Next", []);
      await $.mcall((await $.wv([$t18], "DebitAccData", C, false)), "Prior", []);
      await $.mcall((await $.wv([$t18], "CreditAccData", C, false)), "Next", []);
      await $.mcall((await $.wv([$t18], "CreditAccData", C, false)), "Prior", []);
    }
  }
  return L0.result;
}, {"params": [], "kind": "procedure", "ptypes": []});
  U.func("CheckCurrency", async function CheckCurrency(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: false};
  await $.fixArgs(L0, ["value"]);
  {
    const $t19 = (await $.v(C, "TransactionDataModule"));
    const $t20 = (await $.wv([$t19], "Currency", C, false));
    await $.wset([$t19, $t20], "Result", (await $.wcall([$t19, $t20], "Locate", ["valute", (await $.wv([$t19, $t20], "Value", { get: async () => L0["value"], set: async (v) => { L0["value"] = v; }, local: true }, false)), []], C)), { get: async () => L0["result"], set: async (v) => { L0["result"] = v; }, local: true });
  }
  return L0.result;
}, {"params": ["Value"], "kind": "function", "ptypes": ["Variant"]});
  U.method("TTransactionEditForm", "DebitAccNoLookUpDropDown", async function DebitAccNoLookUpDropDown(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t21 = (await $.v(C, "TransactionDataModule"));
    await $.stmt((await $.wcall([$t21], "SetCurrencyFilter", [(await $.wv([$t21], "DebitAccData", C, false)), (await $.wv([$t21], "DebitCurrencyData", C, false))], C)));
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TTransactionEditForm", "FormClose", async function FormClose(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "action": $.asRef(p1), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t22 = (await $.v(C, "TransactionDataModule"));
    await $.stmt((await $.wcall([$t22], "ResetAccountFilter", [(await $.wv([$t22], "DebitAccData", C, false))], C)));
    await $.stmt((await $.wcall([$t22], "ResetAccountFilter", [(await $.wv([$t22], "CreditAccData", C, false))], C)));
    await $.stmt((await $.wcall([$t22], "ResetAccountFilter", [(await $.wv([$t22], "CashSymbols", C, false))], C)));
  }
  await $.stmt($.call(C, "OperationCancel", []));
  return L0.result;
}, {"params": ["Sender", "Action"], "kind": "procedure", "ptypes": ["TObject", "TCloseAction"]});
  U.method("TTransactionEditForm", "FormShow", async function FormShow(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.stmt($.call(C, "Init", []));
  await $.stmt($.call(C, "Scroll", []));
  await $.set(C, "Modifed", false);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TTransactionEditForm", "CreditAccNoLookUpDropDown", async function CreditAccNoLookUpDropDown(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t23 = (await $.v(C, "TransactionDataModule"));
    await $.stmt((await $.wcall([$t23], "SetCurrencyFilter", [(await $.wv([$t23], "CreditAccData", C, false)), (await $.wv([$t23], "CreditCurrencyData", C, false))], C)));
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TTransactionEditForm", "DebitCurrencyLookUpCloseUp", async function DebitCurrencyLookUpCloseUp(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t24 = (await $.v(C, "DebtAccSearchEdit"));
    const $t25 = (await $.wv([$t24], "TransactionDataModule", C, false));
    await $.mset((await $.mv((await $.wv([$t24, $t25], "DataSource", C, false)), "DataSet")), "Filtered", (await $.wv([$t24, $t25], "False", C, false)));
    await $.mset((await $.mv((await $.wv([$t24, $t25], "DataSource", C, false)), "DataSet")), "Filter", $.add("val_acc= ", (await $.mv((await $.mcall((await $.wv([$t24, $t25], "DebitCurrencyData", C, false)), "FieldByName", ["ID"])), "AsString"))));
    await $.mset((await $.mv((await $.wv([$t24, $t25], "DataSource", C, false)), "DataSet")), "Filtered", (await $.wv([$t24, $t25], "True", C, false)));
    await $.wset([$t24, $t25], "Text", "", C);
    await $.mset((await $.mcall((await $.mv((await $.mv((await $.wcall([$t24, $t25], "TDBLookupComboBox", [(await $.wv([$t24, $t25], "Sender", { get: async () => L0["sender"], set: async (v) => { L0["sender"] = v; }, local: true }, false))], C)), "DataSource")), "DataSet")), "FieldByName", ["DEBITRATE"])), "AsCurrency", (await $.mv((await $.mcall((await $.mv((await $.mv((await $.wcall([$t24, $t25], "TDBLookupComboBox", [(await $.wv([$t24, $t25], "Sender", { get: async () => L0["sender"], set: async (v) => { L0["sender"] = v; }, local: true }, false))], C)), "ListSource")), "DataSet")), "FieldByName", ["RATE"])), "AsCurrency")));
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TTransactionEditForm", "CreditCurrencyLookUpCloseUp", async function CreditCurrencyLookUpCloseUp(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t26 = (await $.v(C, "CreditAccSearchEdit"));
    const $t27 = (await $.wv([$t26], "TransactionDataModule", C, false));
    await $.mset((await $.mv((await $.wv([$t26, $t27], "DataSource", C, false)), "DataSet")), "Filtered", (await $.wv([$t26, $t27], "False", C, false)));
    await $.mset((await $.mv((await $.wv([$t26, $t27], "DataSource", C, false)), "DataSet")), "Filter", $.add("val_acc= ", (await $.mv((await $.mcall((await $.wv([$t26, $t27], "CreditCurrencyData", C, false)), "FieldByName", ["ID"])), "AsString"))));
    await $.mset((await $.mv((await $.wv([$t26, $t27], "DataSource", C, false)), "DataSet")), "Filtered", (await $.wv([$t26, $t27], "True", C, false)));
    await $.wset([$t26, $t27], "Text", "", C);
    await $.mset((await $.mcall((await $.mv((await $.mv((await $.wcall([$t26, $t27], "TDBLookupComboBox", [(await $.wv([$t26, $t27], "Sender", { get: async () => L0["sender"], set: async (v) => { L0["sender"] = v; }, local: true }, false))], C)), "DataSource")), "DataSet")), "FieldByName", ["CREDITRATE"])), "AsCurrency", (await $.mv((await $.mcall((await $.mv((await $.mv((await $.wcall([$t26, $t27], "TDBLookupComboBox", [(await $.wv([$t26, $t27], "Sender", { get: async () => L0["sender"], set: async (v) => { L0["sender"] = v; }, local: true }, false))], C)), "ListSource")), "DataSet")), "FieldByName", ["RATE"])), "AsCurrency")));
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TTransactionEditForm", "DebtAccSearchEditChange", async function DebtAccSearchEditChange(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t28 = (await $.call(C, "TSearchEdit", [L0["sender"]]));
    const $t29 = (await $.wv([$t28], "TransactionDataModule", C, false));
    const $t30 = (await $.wv([$t28, $t29], "Transactions", C, false));
    if ($.truthy($.eq((await $.wv([$t28, $t29, $t30], "Text", C, false)), (await $.wv([$t28, $t29, $t30], "EmptyStr", C, false))))) {
      await $.mcall((await $.wcall([$t28, $t29, $t30], "FieldByName", ["DebitID"], C)), "Clear", []);
      await $.mcall((await $.wcall([$t28, $t29, $t30], "FieldByName", ["InBalanceChar"], C)), "Clear", []);
    }
    await $.wset([$t28, $t29, $t30], "Modifed", (await $.wv([$t28, $t29, $t30], "True", C, false)), C);
    await $.mset((await $.wv([$t28, $t29, $t30], "PanelDebitRest", C, false)), "Visible", (await $.and_($.not(($.eq((await $.wcall([$t28, $t29, $t30], "Trim", [(await $.wv([$t28, $t29, $t30], "Text", C, false))], C)), (await $.wv([$t28, $t29, $t30], "EmptyStr", C, false))))), async () => ($.not((await $.mv((await $.wcall([$t28, $t29, $t30], "FieldByName", ["DebitID"], C)), "IsNull")))))));
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TTransactionEditForm", "FormKeyPress", async function FormKeyPress(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "key": $.asRef(p1), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.eq((await $.call(C, "Ord", [(await L0["key"].get())])), (await $.v(C, "VK_RETURN"))))) {
    {
      const $t31 = L0["sender"];
      await $.stmt((await $.wcall([$t31], "SelectNext", [(await $.wv([$t31], "ActiveControl", C, false)), (await $.wv([$t31], "True", C, false)), (await $.wv([$t31], "True", C, false))], C)));
    }
  }
  return L0.result;
}, {"params": ["Sender", "Key"], "kind": "procedure", "ptypes": ["TObject", "Char"]});
  U.method("TTransactionEditForm", "CashSymbolDBEditEnter", async function CashSymbolDBEditEnter(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.stmt($.call(C, "SetCashSymbol", []));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TTransactionEditForm", "DebtAccSearchEditEnter", async function DebtAccSearchEditEnter(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t32 = (await $.v(C, "TransactionDataModule"));
    await $.stmt((await $.wcall([$t32], "SetCurrencyFilter", [(await $.wv([$t32], "DebitAccData", C, false)), (await $.wv([$t32], "DebitCurrencyData", C, false))], C)));
    if ($.truthy($.eq((await $.mv((await $.wcall([$t32], "TEdit", [(await $.wv([$t32], "Sender", { get: async () => L0["sender"], set: async (v) => { L0["sender"] = v; }, local: true }, false))], C)), "Text")), (await $.wv([$t32], "EmptyStr", C, false))))) {
      await $.mcall((await $.mcall((await $.wv([$t32], "Transactions", C, false)), "FieldByName", ["DebitID"])), "Clear", []);
    }
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TTransactionEditForm", "CreditAccSearchEditEnter", async function CreditAccSearchEditEnter(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t33 = (await $.v(C, "TransactionDataModule"));
    await $.stmt((await $.wcall([$t33], "SetCurrencyFilter", [(await $.wv([$t33], "CreditAccData", C, false)), (await $.wv([$t33], "CreditCurrencyData", C, false))], C)));
    if ($.truthy($.eq((await $.mv((await $.wcall([$t33], "TEdit", [(await $.wv([$t33], "Sender", { get: async () => L0["sender"], set: async (v) => { L0["sender"] = v; }, local: true }, false))], C)), "Text")), (await $.wv([$t33], "EmptyStr", C, false))))) {
      await $.mcall((await $.mcall((await $.wv([$t33], "Transactions", C, false)), "FieldByName", ["CreditID"])), "Clear", []);
    }
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TTransactionEditForm", "CreditAccSearchEditChange", async function CreditAccSearchEditChange(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t34 = (await $.call(C, "TSearchEdit", [L0["sender"]]));
    const $t35 = (await $.wv([$t34], "TransactionDataModule", C, false));
    const $t36 = (await $.wv([$t34, $t35], "Transactions", C, false));
    if ($.truthy($.eq((await $.wv([$t34, $t35, $t36], "Text", C, false)), (await $.wv([$t34, $t35, $t36], "EmptyStr", C, false))))) {
      await $.mcall((await $.mcall((await $.mv((await $.wv([$t34, $t35, $t36], "TransactionDataModule", C, false)), "Transactions")), "FieldByName", ["CreditID"])), "Clear", []);
      await $.mcall((await $.mcall((await $.mv((await $.wv([$t34, $t35, $t36], "TransactionDataModule", C, false)), "Transactions")), "FieldByName", ["InBalanceChar"])), "Clear", []);
    }
    await $.wset([$t34, $t35, $t36], "Modifed", (await $.wv([$t34, $t35, $t36], "True", C, false)), C);
    await $.mset((await $.wv([$t34, $t35, $t36], "PanelCreditRest", C, false)), "Visible", (await $.and_($.not(($.eq((await $.wcall([$t34, $t35, $t36], "Trim", [(await $.wv([$t34, $t35, $t36], "Text", C, false))], C)), (await $.wv([$t34, $t35, $t36], "EmptyStr", C, false))))), async () => ($.not((await $.mv((await $.wcall([$t34, $t35, $t36], "FieldByName", ["CreditID"], C)), "IsNull")))))));
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TTransactionEditForm", "CurrencyEditDebitChange", async function CurrencyEditDebitChange(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.stmt((await $.call(C, "CutEditText", [L0["sender"]])));
  if ($.truthy($.eq((await $.mv((await $.call(C, "TCurrencyEdit", [L0["sender"]])), "Text")), (await $.v(C, "EmptyStr"))))) {
    await $.mset((await $.call(C, "TCurrencyEdit", [L0["sender"]])), "Value", 0);
  }
  { const $t37 = (await $.mv((await $.call(C, "TCurrencyEdit", [L0["sender"]])), "Tag"));
    if ($.eq($t37, 1)) {
      await $.set(C, "TransactionSide", (await $.v(C, "tsDebet")));
    }
    else if ($.eq($t37, 2)) {
      await $.set(C, "TransactionSide", (await $.v(C, "tsCredit")));
    }
    else if ($.eq($t37, 3)) {
      await $.set(C, "TransactionSide", (await $.v(C, "tsUnknown")));
    }
  }
  await $.stmt((await $.call(C, "SetAmmounts", [(await $.v(C, "TransactionSide"))])));
  await $.set(C, "Modifed", true);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TTransactionEditForm", "FormKeyDown", async function FormKeyDown(Self, p0, p1, p2) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "key": $.asRef(p1), "shift": $.copyArg(p2), result: undefined};
  await $.fixArgs(L0, ["sender", "shift"]);
  if ($.truthy($.eq((await L0["key"].get()), (await $.v(C, "VK_F3"))))) {
    {
      const $t38 = (await $.v(C, "TransactionDestinationForm"));
      const $t39 = (await $.wv([$t38], "TransactionDataModule", C, false));
      await $.stmt($.wcall([$t38, $t39], "ShowModal", [], C));
      if ($.truthy($.eq((await $.wv([$t38, $t39], "ModalResult", C, false)), (await $.wv([$t38, $t39], "mrOk", C, false))))) {
        await $.mset((await $.mcall((await $.wv([$t38, $t39], "Transactions", C, false)), "FieldByName", ["Name"])), "AsString", (await $.wv([$t38, $t39], "Value", C, false)));
        await $.mset((await $.wv([$t38, $t39], "TrDestNoEdit", C, false)), "Text", (await $.mv((await $.mcall((await $.wv([$t38, $t39], "TrDest", C, false)), "FieldByName", ["ID"])), "AsString")));
      }
    }
  } else {
    if ($.truthy($.eq((await L0["key"].get()), (await $.v(C, "VK_ESCAPE"))))) {
      await $.stmt($.call(C, "Close", []));
    }
  }
  return L0.result;
}, {"params": ["Sender", "Key", "Shift"], "kind": "procedure", "ptypes": ["TObject", "Word", "TShiftState"]});
  U.method("TTransactionEditForm", "FormCreate", async function FormCreate(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t40 = (await $.v(C, "TransactionDataModule"));
    const $t41 = (await $.wv([$t40], "Sysdat", C, false));
    const $t42 = (await $.wv([$t40, $t41], "TransDate", C, false));
    if ($.truthy($.not((await $.mv((await $.wv([$t40, $t41, $t42], "DebitAccData", C, false)), "Active"))))) {
      await $.mcall((await $.wv([$t40, $t41, $t42], "DebitAccData", C, false)), "Open", []);
    }
    if ($.truthy($.not((await $.mv((await $.wv([$t40, $t41, $t42], "CreditAccData", C, false)), "Active"))))) {
      await $.mcall((await $.wv([$t40, $t41, $t42], "CreditAccData", C, false)), "Open", []);
    }
    await $.wset([$t40, $t41, $t42], "DateTime", (await $.mv((await $.wcall([$t40, $t41, $t42], "FieldByName", ["tek_dat"], C)), "AsDateTime")), C);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TTransactionEditForm", "DebitCurrencyIDEditExit", async function DebitCurrencyIDEditExit(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t43 = (await $.call(C, "TDBEdit", [L0["sender"]]));
    const $t44 = (await $.wv([$t43], "TransactionDataModule", C, false));
    const $t45 = (await $.wv([$t43, $t44], "Transactions", C, false));
    if ($.truthy($.not((await $.wcall([$t43, $t44, $t45], "CheckCurrency", [(await $.wv([$t43, $t44, $t45], "Text", C, false))], C))))) {
      await $.mset((await $.wv([$t43, $t44, $t45], "DebtAccSearchEdit", C, false)), "Text", (await $.wv([$t43, $t44, $t45], "EmptyStr", C, false)));
      await $.mcall((await $.wcall([$t43, $t44, $t45], "FieldByName", ["DebitRate"], C)), "Clear", []);
      await $.wset([$t43, $t44, $t45], "Color", (await $.wv([$t43, $t44, $t45], "clRed", C, false)), C);
      await $.stmt($.wcall([$t43, $t44, $t45], "SetFocus", [], C));
    } else {
      await $.wset([$t43, $t44, $t45], "Color", (await $.wv([$t43, $t44, $t45], "clWindow", C, false)), C);
    }
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TTransactionEditForm", "CreditCurrencyIDEditExit", async function CreditCurrencyIDEditExit(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t46 = (await $.call(C, "TDBEdit", [L0["sender"]]));
    const $t47 = (await $.wv([$t46], "TransactionDataModule", C, false));
    const $t48 = (await $.wv([$t46, $t47], "Transactions", C, false));
    if ($.truthy($.not((await $.wcall([$t46, $t47, $t48], "CheckCurrency", [(await $.wv([$t46, $t47, $t48], "Text", C, false))], C))))) {
      await $.mset((await $.wv([$t46, $t47, $t48], "CreditAccSearchEdit", C, false)), "Text", (await $.wv([$t46, $t47, $t48], "EmptyStr", C, false)));
      await $.mcall((await $.wcall([$t46, $t47, $t48], "FieldByName", ["CreditRate"], C)), "Clear", []);
      await $.wset([$t46, $t47, $t48], "Color", (await $.wv([$t46, $t47, $t48], "clRed", C, false)), C);
      await $.stmt($.wcall([$t46, $t47, $t48], "SetFocus", [], C));
    } else {
      await $.wset([$t46, $t47, $t48], "Color", (await $.wv([$t46, $t47, $t48], "clWindow", C, false)), C);
    }
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TTransactionEditForm", "Button3Click", async function Button3Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.stmt($.call(C, "OperationCancel", []));
  await $.mcall((await $.mv((await $.v(C, "TransactionDataModule")), "Transactions")), "Insert", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TTransactionEditForm", "ActionCancelExecute", async function ActionCancelExecute(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.stmt($.call(C, "ResetTransaction", []));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TTransactionEditForm", "ActionExitExecute", async function ActionExitExecute(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.stmt($.call(C, "Close", []));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TTransactionEditForm", "ActionInsertExecute", async function ActionInsertExecute(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.stmt($.call(C, "SaveTransaction", []));
  await $.stmt($.call(C, "ResetTransaction", []));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TTransactionEditForm", "ActionInsertUpdate", async function ActionInsertUpdate(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t49 = (L0["sender"]);
    const $t50 = (await $.mv((await $.wv([$t49], "TransactionDataModule", C, false)), "Transactions"));
    await $.wset([$t49, $t50], "Enabled", (await $.and_((await $.and_((await $.and_((await $.wv([$t49, $t50], "Modifed", C, false)), async () => ($.not((await $.mv((await $.wcall([$t49, $t50], "FieldByName", ["DebitID"], C)), "IsNull")))))), async () => ($.not((await $.mv((await $.wcall([$t49, $t50], "FieldByName", ["CreditID"], C)), "IsNull")))))), async () => ($.ne((await $.mv((await $.wv([$t49, $t50], "CurrencyEditLammount", C, false)), "Value")), 0.0)))), C);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TTransactionEditForm", "TrDestNoEditChange", async function TrDestNoEditChange(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t51 = (await $.call(C, "TEdit", [L0["sender"]]));
    const $t52 = (await $.mv((await $.wv([$t51], "TransactionDestinationForm", C, false)), "TrDest"));
    const $t53 = (await $.wv([$t51, $t52], "TransactionDataModule", C, false));
    if ($.truthy($.ne((await $.wv([$t51, $t52, $t53], "Text", C, false)), (await $.wv([$t51, $t52, $t53], "EmptyStr", C, false))))) {
      if ($.truthy((await $.wcall([$t51, $t52, $t53], "Locate", ["ID", (await $.wv([$t51, $t52, $t53], "Text", C, false)), []], C)))) {
        await $.mset((await $.mcall((await $.wv([$t51, $t52, $t53], "Transactions", C, false)), "FieldByName", ["Name"])), "AsString", (await $.mv((await $.wcall([$t51, $t52, $t53], "FieldByName", ["Name"], C)), "AsString")));
      }
    }
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TTransactionEditForm", "TransDateChange", async function TransDateChange(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.set(C, "Modifed", true);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TTransactionEditForm", "CashSymbolDBEditExit", async function CashSymbolDBEditExit(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "cashsymbol": 0};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t54 = (await $.call(C, "TDBEdit", [L0["sender"]]));
    const $t55 = (await $.wv([$t54], "TransactionDataModule", C, false));
    if ($.truthy($.eq((await $.wv([$t54, $t55], "Text", C, false)), (await $.wv([$t54, $t55], "EmptyStr", C, false))))) {
      return L0.result;
    }
    await $.wset([$t54, $t55], "CashSymbol", (await $.mv((await $.mcall((await $.wv([$t54, $t55], "Transactions", C, false)), "FieldByName", ["InBalanceChar"])), "AsInteger")), { get: async () => L0["cashsymbol"], set: async (v) => { L0["cashsymbol"] = v; }, local: true });
    if ($.truthy($.not((await $.mcall((await $.wv([$t54, $t55], "CashSymbols", C, false)), "Locate", ["Symbol", (await $.wv([$t54, $t55], "CashSymbol", { get: async () => L0["cashsymbol"], set: async (v) => { L0["cashsymbol"] = v; }, local: true }, false)), []]))))) {
      await $.wset([$t54, $t55], "Modifed", (await $.wv([$t54, $t55], "False", C, false)), C);
      await $.wset([$t54, $t55], "Color", (await $.wv([$t54, $t55], "clRed", C, false)), C);
      await $.stmt($.wcall([$t54, $t55], "SetFocus", [], C));
    } else {
      await $.wset([$t54, $t55], "Color", (await $.wv([$t54, $t55], "clWhite", C, false)), C);
      await $.wset([$t54, $t55], "Modifed", (await $.wv([$t54, $t55], "True", C, false)), C);
    }
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TTransactionEditForm", "DBEditDestinationChange", async function DBEditDestinationChange(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.set(C, "Modifed", true);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TTransactionEditForm", "ConvertationSymbolIDBEditExit", async function ConvertationSymbolIDBEditExit(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "convertationsymbol": 0};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t56 = (await $.call(C, "TDBEdit", [L0["sender"]]));
    const $t57 = (await $.wv([$t56], "TransactionDataModule", C, false));
    if ($.truthy($.eq((await $.wv([$t56, $t57], "Text", C, false)), (await $.wv([$t56, $t57], "EmptyStr", C, false))))) {
      return L0.result;
    }
    await $.wset([$t56, $t57], "ConvertationSymbol", (await $.mv((await $.mcall((await $.wv([$t56, $t57], "Transactions", C, false)), "FieldByName", ["OutBalanceChar"])), "AsInteger")), { get: async () => L0["convertationsymbol"], set: async (v) => { L0["convertationsymbol"] = v; }, local: true });
    if ($.truthy($.not((await $.mcall((await $.wv([$t56, $t57], "ConvertationSymbols", C, false)), "Locate", ["ID", (await $.wv([$t56, $t57], "ConvertationSymbol", { get: async () => L0["convertationsymbol"], set: async (v) => { L0["convertationsymbol"] = v; }, local: true }, false)), []]))))) {
      await $.wset([$t56, $t57], "Modifed", (await $.wv([$t56, $t57], "False", C, false)), C);
      await $.wset([$t56, $t57], "Color", (await $.wv([$t56, $t57], "clRed", C, false)), C);
      await $.stmt($.wcall([$t56, $t57], "SetFocus", [], C));
    } else {
      await $.wset([$t56, $t57], "Color", (await $.wv([$t56, $t57], "clWhite", C, false)), C);
      await $.wset([$t56, $t57], "Modifed", (await $.wv([$t56, $t57], "True", C, false)), C);
    }
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TTransactionEditForm", "DebitCurrencyRateChange", async function DebitCurrencyRateChange(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.set(C, "Modifed", true);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TTransactionEditForm", "LoadComboData", async function LoadComboData(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t58 = (await $.mv((await $.v(C, "TransactionDataModule")), "Destinations"));
    const $t59 = (await $.wv([$t58], "Sender", { get: async () => L0["sender"], set: async (v) => { L0["sender"] = v; }, local: true }, false));
    if ($.truthy($.not(((await $.wv([$t58, $t59], "Active", C, false)))))) {
      await $.stmt($.wcall([$t58, $t59], "Open", [], C));
    } else {
      await $.stmt($.wcall([$t58, $t59], "Refresh", [], C));
    }
    if ($.truthy($.ne((await $.mv((await $.wv([$t58, $t59], "Items", C, false)), "Count")), (await $.wv([$t58, $t59], "RecordCount", C, false))))) {
      await $.mcall((await $.wv([$t58, $t59], "Items", C, false)), "Clear", []);
      await $.stmt($.wcall([$t58, $t59], "First", [], C));
      while ($.truthy($.not(((await $.wv([$t58, $t59], "EOF", C, false)))))) {
        await $.stmt((await $.mcall((await $.wv([$t58, $t59], "Items", C, false)), "Add", [(await $.mv((await $.wcall([$t58, $t59], "FieldByName", ["NAME"], C)), "AsString"))])));
        await $.stmt($.wcall([$t58, $t59], "Next", [], C));
        await $.tick();
      }
    }
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TComboBox"]});
  U.method("TTransactionEditForm", "ComboBox1DropDown", async function ComboBox1DropDown(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.stmt((await $.call(C, "LoadComboData", [(await $.call(C, "TComboBox", [L0["sender"]]))])));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TTransactionEditForm", "ComboBox1Click", async function ComboBox1Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t60 = (await $.v(C, "TransactionDataModule"));
    await $.mset((await $.mcall((await $.wv([$t60], "Transactions", C, false)), "FieldByName", ["Name"])), "AsString", (await $.mv(((await $.wv([$t60], "Sender", { get: async () => L0["sender"], set: async (v) => { L0["sender"] = v; }, local: true }, false))), "Text")));
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  return U;
}
