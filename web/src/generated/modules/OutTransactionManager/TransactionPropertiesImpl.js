// Generated from TransactionPropertiesImpl.pas by pas2js — do not edit by hand; regenerate instead.
/* eslint-disable */
// @ts-nocheck

export default function define($) {
  const U = $.unit("TransactionPropertiesImpl", ["Windows", "Messages", "SysUtils", "Classes", "Graphics", "Controls", "Forms", "Dialogs", "StdCtrls", "ComCtrls", "SearchEdit", "DBCtrls", "CurrencyEdit", "Db", "Mask", "ExtCtrls", "ActnList", "Variants", "out_TransactionDestinationForm", "TransactionDataModuleUnit", "TransactionManagerImpl", "sboapiDataModuleImpl", "SBTranslateProc"]);
  const C = [U];
  U.const("tsDebet", 0);
  U.const("tsCredit", 1);
  U.const("tsUnknown", 2);
  U.defClass("TTransactionEditForm", "TForm", {"buttonapply": {"name": "ButtonApply", "type": "TButton"}, "buttoncancel": {"name": "ButtonCancel", "type": "TButton"}, "buttonclose": {"name": "ButtonClose", "type": "TButton"}, "groupbox1": {"name": "GroupBox1", "type": "TGroupBox"}, "headercontrol1": {"name": "HeaderControl1", "type": "THeaderControl"}, "panel1": {"name": "Panel1", "type": "TPanel"}, "paneldebit": {"name": "PanelDebit", "type": "TPanel"}, "paneldebitrest": {"name": "PanelDebitRest", "type": "TPanel"}, "label1": {"name": "Label1", "type": "TLabel"}, "dbtext1": {"name": "DBText1", "type": "TDBText"}, "label2": {"name": "Label2", "type": "TLabel"}, "dbtext2": {"name": "DBText2", "type": "TDBText"}, "panel4": {"name": "Panel4", "type": "TPanel"}, "debitaccnamecb": {"name": "DebitAccNameCB", "type": "TDBLookupComboBox"}, "panel5": {"name": "Panel5", "type": "TPanel"}, "debitaccnolookup": {"name": "DebitAccNoLookUp", "type": "TDBLookupComboBox"}, "debtaccsearchedit": {"name": "DebtAccSearchEdit", "type": "TSearchEdit"}, "panel6": {"name": "Panel6", "type": "TPanel"}, "debitcurrencyidedit": {"name": "DebitCurrencyIDEdit", "type": "TDBEdit"}, "debitcurrencyrate": {"name": "DebitCurrencyRate", "type": "TDBEdit"}, "debitcurrencylookup": {"name": "DebitCurrencyLookUp", "type": "TDBLookupComboBox"}, "panel2": {"name": "Panel2", "type": "TPanel"}, "panelcredit": {"name": "PanelCredit", "type": "TPanel"}, "panelcreditrest": {"name": "PanelCreditRest", "type": "TPanel"}, "label3": {"name": "Label3", "type": "TLabel"}, "dbtext3": {"name": "DBText3", "type": "TDBText"}, "label4": {"name": "Label4", "type": "TLabel"}, "dbtext4": {"name": "DBText4", "type": "TDBText"}, "panel8": {"name": "Panel8", "type": "TPanel"}, "dblookupcombobox3": {"name": "DBLookupComboBox3", "type": "TDBLookupComboBox"}, "panel9": {"name": "Panel9", "type": "TPanel"}, "creditaccnolookup": {"name": "CreditAccNoLookUp", "type": "TDBLookupComboBox"}, "creditaccsearchedit": {"name": "CreditAccSearchEdit", "type": "TSearchEdit"}, "panel10": {"name": "Panel10", "type": "TPanel"}, "creditcurrencyidedit": {"name": "CreditCurrencyIDEdit", "type": "TDBEdit"}, "creditcurrencyrate": {"name": "CreditCurrencyRate", "type": "TDBEdit"}, "creditcurrencylookup": {"name": "CreditCurrencyLookUp", "type": "TDBLookupComboBox"}, "groupbox2": {"name": "GroupBox2", "type": "TGroupBox"}, "panel11": {"name": "Panel11", "type": "TPanel"}, "currencyeditdebit": {"name": "CurrencyEditDebit", "type": "TCurrencyEdit"}, "panel12": {"name": "Panel12", "type": "TPanel"}, "currencyeditcredit": {"name": "CurrencyEditCredit", "type": "TCurrencyEdit"}, "panel13": {"name": "Panel13", "type": "TPanel"}, "currencyeditlammount": {"name": "CurrencyEditLammount", "type": "TCurrencyEdit"}, "groupbox3": {"name": "GroupBox3", "type": "TGroupBox"}, "panel14": {"name": "Panel14", "type": "TPanel"}, "convertationsymbolidbedit": {"name": "ConvertationSymbolIDBEdit", "type": "TDBEdit"}, "convertationsymbollookup": {"name": "ConvertationSymbolLookUp", "type": "TDBLookupComboBox"}, "panel15": {"name": "Panel15", "type": "TPanel"}, "cashsymbollookup": {"name": "CashSymbolLookUp", "type": "TDBLookupComboBox"}, "cashsymboldbedit": {"name": "CashSymbolDBEdit", "type": "TDBEdit"}, "panel16": {"name": "Panel16", "type": "TPanel"}, "trdestnoedit": {"name": "TrDestNoEdit", "type": "TEdit"}, "combobox1": {"name": "ComboBox1", "type": "TComboBox"}, "dbeditdestination": {"name": "DBEditDestination", "type": "TDBEdit"}, "groupbox4": {"name": "GroupBox4", "type": "TGroupBox"}, "label5": {"name": "Label5", "type": "TLabel"}, "label6": {"name": "Label6", "type": "TLabel"}, "label7": {"name": "Label7", "type": "TLabel"}, "transdate": {"name": "TransDate", "type": "TDateTimePicker"}, "operationtypelookup": {"name": "OperationTypeLookUp", "type": "TDBLookupComboBox"}, "dbeditoperationno": {"name": "DBEditOperationNo", "type": "TDBEdit"}, "dbedit4": {"name": "DBEdit4", "type": "TDBEdit"}, "actionlist1": {"name": "ActionList1", "type": "TActionList"}, "actioninsert": {"name": "ActionInsert", "type": "TAction"}, "actioncancel": {"name": "ActionCancel", "type": "TAction"}, "actionexit": {"name": "ActionExit", "type": "TAction"}, "panel3": {"name": "Panel3", "type": "TPanel"}, "panel7": {"name": "Panel7", "type": "TPanel"}, "label8": {"name": "Label8", "type": "TLabel"}, "label9": {"name": "Label9", "type": "TLabel"}, "debt_custid": {"name": "Debt_Custid", "type": "TEdit"}, "kredit_custid": {"name": "Kredit_Custid", "type": "TEdit"}, "transactionside": {"name": "TransactionSide", "type": "TTransactionSide"}, "debitcurrencyid": {"name": "DebitCurrencyID", "type": "Word"}, "creditcurrencyid": {"name": "CreditCurrencyID", "type": "Word"}, "modifed": {"name": "Modifed", "type": "Boolean"}}, {});
  U.init(async () => {
    U.var_("TransactionEditForm", null, "TTransactionEditForm");
  });
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
  U.method("TTransactionEditForm", "ResetTransaction", async function ResetTransaction(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: undefined};
  await $.stmt($.call(C, "OperationCancel", []));
  await $.stmt($.call(C, "ClearAmmounts", []));
  {
    const $t1 = (await $.v(C, "out_transactionDataModule"));
    const $t2 = (await $.wv([$t1], "Transactions", C, false));
    await $.stmt($.wcall([$t1, $t2], "Insert", [], C));
    await $.mset((await $.wcall([$t1, $t2], "FieldByName", ["DebitCurrencyID"], C)), "AsInteger", (await $.wv([$t1, $t2], "DebitCurrencyID", C, false)));
    await $.mset((await $.wcall([$t1, $t2], "FieldByName", ["CreditCurrencyID"], C)), "AsInteger", (await $.wv([$t1, $t2], "CreditCurrencyID", C, false)));
  }
  return L0.result;
}, {"params": [], "kind": "procedure", "ptypes": []});
  U.method("TTransactionEditForm", "Scroll", async function Scroll(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: undefined};
  if ($.truthy($.eq((await $.mv((await $.v(C, "TransactionManagerForm")), "OperationMode")), (await $.v(C, "omEdit"))))) {
    {
      const $t3 = (await $.v(C, "out_transactionDataModule"));
      await $.mcall((await $.wv([$t3], "DebitAccData", C, false)), "Next", []);
      await $.mcall((await $.wv([$t3], "DebitAccData", C, false)), "Prior", []);
      await $.mcall((await $.wv([$t3], "CreditAccData", C, false)), "Next", []);
      await $.mcall((await $.wv([$t3], "CreditAccData", C, false)), "Prior", []);
    }
  }
  return L0.result;
}, {"params": [], "kind": "procedure", "ptypes": []});
  U.method("TTransactionEditForm", "ClearAmmounts", async function ClearAmmounts(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: undefined};
  await $.mset((await $.v(C, "CurrencyEditDebit")), "Value", 0.0);
  await $.mset((await $.v(C, "CurrencyEditCredit")), "Value", 0.0);
  await $.mset((await $.v(C, "CurrencyEditLammount")), "Value", 0.0);
  return L0.result;
}, {"params": [], "kind": "procedure", "ptypes": []});
  U.method("TTransactionEditForm", "Init", async function Init(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: undefined};
  {
    const $t4 = (await $.v(C, "TransactionManagerForm"));
    const $t5 = (await $.wv([$t4], "out_transactionDataModule", C, false));
    const $t6 = (await $.wv([$t4, $t5], "Transactions", C, false));
    { const $t7 = (await $.wv([$t4, $t5, $t6], "OperationMode", C, false));
      if ($.eq($t7, (await $.wv([$t4, $t5, $t6], "omInsert", C, false)))) {
        await $.mset((await $.wcall([$t4, $t5, $t6], "FieldByName", ["DebitCurrencyID"], C)), "AsInteger", 0);
        await $.mset((await $.wcall([$t4, $t5, $t6], "FieldByName", ["CreditCurrencyID"], C)), "AsInteger", 0);
        await $.mset((await $.wcall([$t4, $t5, $t6], "FieldByName", ["DebitRate"], C)), "AsFloat", (await $.mv((await $.mcall((await $.wv([$t4, $t5, $t6], "DebitCurrencyData", C, false)), "FieldByName", ["Rate"])), "AsFloat")));
        await $.mset((await $.wcall([$t4, $t5, $t6], "FieldByName", ["CreditRate"], C)), "AsFloat", (await $.mv((await $.mcall((await $.wv([$t4, $t5, $t6], "CreditCurrencyData", C, false)), "FieldByName", ["Rate"])), "AsFloat")));
        await $.mcall((await $.wcall([$t4, $t5, $t6], "FieldByName", ["DebitID"], C)), "Clear", []);
        await $.mcall((await $.wcall([$t4, $t5, $t6], "FieldByName", ["CreditID"], C)), "Clear", []);
        await $.mset((await $.wv([$t4, $t5, $t6], "PanelDebitRest", C, false)), "Visible", (await $.wv([$t4, $t5, $t6], "False", C, false)));
        await $.mset((await $.wv([$t4, $t5, $t6], "PanelCreditRest", C, false)), "Visible", (await $.wv([$t4, $t5, $t6], "False", C, false)));
      }
      else if ($.eq($t7, (await $.wv([$t4, $t5, $t6], "omEdit", C, false)))) {
        await $.mset((await $.wv([$t4, $t5, $t6], "TransDate", C, false)), "DateTime", (await $.mv((await $.wcall([$t4, $t5, $t6], "FieldByName", ["TransactionDate"], C)), "AsDateTime")));
        await $.mset((await $.wv([$t4, $t5, $t6], "DebtAccSearchEdit", C, false)), "Text", (await $.mv((await $.wcall([$t4, $t5, $t6], "FieldByName", ["DebitAccNo"], C)), "AsString")));
        await $.mset((await $.wv([$t4, $t5, $t6], "CreditAccSearchEdit", C, false)), "Text", (await $.mv((await $.wcall([$t4, $t5, $t6], "FieldByName", ["CreditAccNo"], C)), "AsString")));
        await $.mset((await $.wv([$t4, $t5, $t6], "CurrencyEditDebit", C, false)), "Value", (await $.mv((await $.wcall([$t4, $t5, $t6], "FieldByName", ["DebitAmount"], C)), "AsCurrency")));
        await $.mset((await $.wv([$t4, $t5, $t6], "CurrencyEditCredit", C, false)), "Value", (await $.mv((await $.wcall([$t4, $t5, $t6], "FieldByName", ["CreditAmount"], C)), "AsCurrency")));
        await $.mset((await $.wv([$t4, $t5, $t6], "CurrencyEditLammount", C, false)), "Value", (await $.mv((await $.wcall([$t4, $t5, $t6], "FieldByName", ["Lamount"], C)), "AsCurrency")));
      }
      else if ($.eq($t7, (await $.wv([$t4, $t5, $t6], "omCommission", C, false)))) {
        await $.mset((await $.wcall([$t4, $t5, $t6], "FieldByName", ["DebitCurrencyID"], C)), "AsInteger", (await $.mv((await $.mcall((await $.wv([$t4, $t5, $t6], "Commission", C, false)), "FieldByName", ["DebitCurrencyID"])), "AsInteger")));
        await $.mset((await $.wcall([$t4, $t5, $t6], "FieldByName", ["CreditCurrencyID"], C)), "AsInteger", (await $.mv((await $.mcall((await $.wv([$t4, $t5, $t6], "Commission", C, false)), "FieldByName", ["CreditCurrencyID"])), "AsInteger")));
        await $.mset((await $.wcall([$t4, $t5, $t6], "FieldByName", ["DebitID"], C)), "AsInteger", (await $.mv((await $.mcall((await $.wv([$t4, $t5, $t6], "Commission", C, false)), "FieldByName", ["Debt"])), "AsInteger")));
        await $.mset((await $.wcall([$t4, $t5, $t6], "FieldByName", ["CreditID"], C)), "AsInteger", (await $.mv((await $.mcall((await $.wv([$t4, $t5, $t6], "Commission", C, false)), "FieldByName", ["Credit"])), "AsInteger")));
        await $.mset((await $.wv([$t4, $t5, $t6], "DebtAccSearchEdit", C, false)), "Text", (await $.mv((await $.mcall((await $.wv([$t4, $t5, $t6], "Commission", C, false)), "FieldByName", ["DebitAccount"])), "AsString")));
        await $.mset((await $.wv([$t4, $t5, $t6], "CreditAccSearchEdit", C, false)), "Text", (await $.mv((await $.mcall((await $.wv([$t4, $t5, $t6], "Commission", C, false)), "FieldByName", ["CreditAccount"])), "AsString")));
        await $.mset((await $.wcall([$t4, $t5, $t6], "FieldByName", ["Name"], C)), "AsString", (await $.mv((await $.mcall((await $.wv([$t4, $t5, $t6], "Commission", C, false)), "FieldByName", ["Assignment"])), "AsString")));
        await $.mset((await $.wv([$t4, $t5, $t6], "PanelDebitRest", C, false)), "Visible", $.ne((await $.mv((await $.wv([$t4, $t5, $t6], "DebtAccSearchEdit", C, false)), "Text")), (await $.wv([$t4, $t5, $t6], "EmptyStr", C, false))));
        await $.mset((await $.wv([$t4, $t5, $t6], "PanelCreditRest", C, false)), "Visible", $.ne((await $.mv((await $.wv([$t4, $t5, $t6], "CreditAccSearchEdit", C, false)), "Text")), (await $.wv([$t4, $t5, $t6], "EmptyStr", C, false))));
      }
    }
  }
  return L0.result;
}, {"params": [], "kind": "procedure", "ptypes": []});
  U.method("TTransactionEditForm", "Kredit_CustidChange", async function Kredit_CustidChange(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t8 = (await $.mv((await $.v(C, "out_transactionDataModule")), "CreditAccData"));
    if ($.truthy($.ne((await $.mv((await $.wv([$t8], "Debt_Custid", C, false)), "Text")), ""))) {
      await $.stmt($.wcall([$t8], "close", [], C));
      await $.stmt((await $.wcall([$t8], "SetVariable", ["v_custid", (await $.wcall([$t8], "strtoint", [(await $.mv((await $.wv([$t8], "Kredit_Custid", C, false)), "Text"))], C))], C)));
      await $.stmt($.wcall([$t8], "open", [], C));
    } else {
      await $.mcall((await $.wv([$t8], "CreditAccSearchEdit", C, false)), "Clear", []);
      await $.stmt($.wcall([$t8], "close", [], C));
      await $.stmt((await $.wcall([$t8], "SetVariable", ["v_custid", (-(999999))], C)));
      await $.stmt($.wcall([$t8], "open", [], C));
    }
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TTransactionEditForm", "OperationCancel", async function OperationCancel(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: undefined};
  {
    const $t9 = (await $.v(C, "out_transactiondatamodule"));
    const $t10 = (await $.wv([$t9], "Transactions", C, false));
    if ($.truthy($.in_((await $.wv([$t9, $t10], "State", C, false)), [(await $.wv([$t9, $t10], "dsInsert", C, false)), (await $.wv([$t9, $t10], "dsEdit", C, false))]))) {
      await $.stmt($.wcall([$t9, $t10], "Cancel", [], C));
      await $.stmt($.wcall([$t9, $t10], "RefreshRecord", [], C));
    }
  }
  return L0.result;
}, {"params": [], "kind": "procedure", "ptypes": []});
  U.method("TTransactionEditForm", "RoundNew", async function RoundNew(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"x": $.copyArg(p0), "precision": $.copyArg(p1), result: 0, "scaledfractpart": 0, "temp": 0};
  await $.fixArgs(L0, ["x", "precision"]);
  L0["scaledfractpart"] = $.mul((await $.call(C, "Frac", [L0["x"]])), L0["precision"]);
  L0["temp"] = (await $.call(C, "Frac", [L0["scaledfractpart"]]));
  L0["scaledfractpart"] = (await $.call(C, "Int", [L0["scaledfractpart"]]));
  if ($.truthy($.ge(L0["temp"], 0.4))) {
    L0["scaledfractpart"] = $.add(L0["scaledfractpart"], 1);
  }
  if ($.truthy($.le(L0["temp"], (-(0.4))))) {
    L0["scaledfractpart"] = $.sub(L0["scaledfractpart"], 1);
  }
  L0.result = $.add((await $.call(C, "Int", [L0["x"]])), $.fdiv(L0["scaledfractpart"], L0["precision"]));
  return L0.result;
}, {"params": ["X", "Precision"], "kind": "function", "ptypes": ["Double", "Integer"]});
  U.method("TTransactionEditForm", "ResetAccountFilter", async function ResetAccountFilter(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"accountdataset": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["accountdataset"]);
  {
    const $t11 = L0["accountdataset"];
    if ($.truthy($.ne((await $.wv([$t11], "Filter", C, false)), ""))) {
      await $.wset([$t11], "Filtered", (await $.wv([$t11], "False", C, false)), C);
      await $.wset([$t11], "Filter", "", C);
      await $.wset([$t11], "Filtered", (await $.wv([$t11], "True", C, false)), C);
    }
  }
  return L0.result;
}, {"params": ["AccountDataSet"], "kind": "procedure", "ptypes": ["TDataSet"]});
  U.method("TTransactionEditForm", "CMDialogKey", async function CMDialogKey(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"msg": $.asRef(p0), result: undefined};
  await $.inherited(Self, "TTransactionEditForm", "CMDialogKey", null, arguments);
  return L0.result;
}, {"params": ["Msg"], "kind": "procedure", "ptypes": ["TWMKey"]});
  U.method("TTransactionEditForm", "LoadComboData", async function LoadComboData(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t12 = (await $.mv((await $.v(C, "out_transactionDataModule")), "Destinations"));
    const $t13 = (await $.wv([$t12], "Sender", { get: async () => L0["sender"], set: async (v) => { L0["sender"] = v; }, local: true }, false));
    if ($.truthy($.not(((await $.wv([$t12, $t13], "Active", C, false)))))) {
      await $.stmt($.wcall([$t12, $t13], "Open", [], C));
    } else {
      await $.stmt($.wcall([$t12, $t13], "Refresh", [], C));
    }
    if ($.truthy($.ne((await $.mv((await $.wv([$t12, $t13], "Items", C, false)), "Count")), (await $.wv([$t12, $t13], "RecordCount", C, false))))) {
      await $.mcall((await $.wv([$t12, $t13], "Items", C, false)), "Clear", []);
      await $.stmt($.wcall([$t12, $t13], "First", [], C));
      while ($.truthy($.not(((await $.wv([$t12, $t13], "EOF", C, false)))))) {
        await $.stmt((await $.mcall((await $.wv([$t12, $t13], "Items", C, false)), "Add", [(await $.mv((await $.wcall([$t12, $t13], "FieldByName", ["NAME"], C)), "AsString"))])));
        await $.stmt($.wcall([$t12, $t13], "Next", [], C));
        await $.tick();
      }
    }
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TComboBox"]});
  U.method("TTransactionEditForm", "SaveTransaction", async function SaveTransaction(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: undefined};
  {
    const $t14 = (await $.v(C, "out_transactionDataModule"));
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
  U.method("TTransactionEditForm", "SetAmmounts", async function SetAmmounts(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"transactionside": $.copyArg(p0), result: undefined, "debetrate": 0, "creditrate": 0, "debitammount": 0, "creditammount": 0, "lammount": 0};
  await $.fixArgs(L0, ["transactionside"]);
  {
    const $t16 = (await $.v(C, "out_transactionDataModule"));
    await $.wset([$t16], "DebetRate", (await $.mv((await $.mcall((await $.wv([$t16], "DebitCurrencyData", C, false)), "FieldByName", ["Rate"])), "AsCurrency")), { get: async () => L0["debetrate"], set: async (v) => { L0["debetrate"] = v; }, local: true });
    await $.wset([$t16], "CreditRate", (await $.mv((await $.mcall((await $.wv([$t16], "CreditCurrencyData", C, false)), "FieldByName", ["Rate"])), "AsCurrency")), { get: async () => L0["creditrate"], set: async (v) => { L0["creditrate"] = v; }, local: true });
  }
  { const $t17 = L0["transactionside"];
    if ($.eq($t17, (await $.v(C, "tsDebet")))) {
      L0["lammount"] = (await $.call(C, "RoundNew", [$.mul((await $.mv((await $.v(C, "CurrencyEditDebit")), "Value")), L0["debetrate"]), 10000]));
      L0["creditammount"] = (await $.call(C, "RoundNew", [$.fdiv(L0["lammount"], L0["creditrate"]), 10000]));
      await $.mset((await $.v(C, "CurrencyEditLammount")), "Value", (await $.call(C, "RoundNew", [L0["lammount"], 100])));
      await $.mset((await $.v(C, "CurrencyEditCredit")), "Value", (await $.call(C, "RoundNew", [L0["creditammount"], 100])));
    }
    else if ($.eq($t17, (await $.v(C, "tsCredit")))) {
      L0["lammount"] = (await $.call(C, "RoundNew", [$.mul((await $.mv((await $.v(C, "CurrencyEditCredit")), "Value")), L0["creditrate"]), 10000]));
      L0["debitammount"] = (await $.call(C, "RoundNew", [$.fdiv(L0["lammount"], L0["debetrate"]), 10000]));
      await $.mset((await $.v(C, "CurrencyEditLammount")), "Value", (await $.call(C, "RoundNew", [L0["lammount"], 100])));
      await $.mset((await $.v(C, "CurrencyEditDebit")), "Value", (await $.call(C, "RoundNew", [L0["debitammount"], 100])));
    }
    else if ($.eq($t17, (await $.v(C, "tsUnknown")))) {
      {
        const $t18 = (await $.v(C, "out_transactionDataModule"));
        if ($.truthy($.eq((await $.mv((await $.mcall((await $.wv([$t18], "DebitCurrencyData", C, false)), "FieldByName", ["ID"])), "AsInteger")), 0))) {
          await $.mset((await $.wv([$t18], "CurrencyEditDebit", C, false)), "Value", (await $.mv((await $.wv([$t18], "CurrencyEditLammount", C, false)), "Value")));
        }
        if ($.truthy($.eq((await $.mv((await $.mcall((await $.wv([$t18], "CreditCurrencyData", C, false)), "FieldByName", ["ID"])), "AsInteger")), 0))) {
          await $.mset((await $.wv([$t18], "CurrencyEditCredit", C, false)), "Value", (await $.mv((await $.wv([$t18], "CurrencyEditLammount", C, false)), "Value")));
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
    const $t19 = (await $.v(C, "out_transactionDataModule"));
    const $t20 = (await $.wv([$t19], "CashSymbolLookUp", C, false));
    if ($.truthy((await $.and_(($.eq((await $.mv((await $.mcall((await $.wv([$t19, $t20], "DebitAccData", C, false)), "FieldByName", ["IsCacheAccount"])), "AsInteger")), 1)), async () => ($.eq((await $.mv((await $.mcall((await $.wv([$t19, $t20], "DebitAccData", C, false)), "FieldByName", ["val_acc"])), "AsInteger")), 0)))))) {
      await $.mset((await $.mv((await $.wv([$t19, $t20], "ListSource", C, false)), "DataSet")), "Filter", "Mediocrity = 0");
    } else {
      if ($.truthy((await $.and_(($.eq((await $.mv((await $.mcall((await $.wv([$t19, $t20], "CreditAccData", C, false)), "FieldByName", ["IsCacheAccount"])), "AsInteger")), 1)), async () => ($.eq((await $.mv((await $.mcall((await $.wv([$t19, $t20], "CreditAccData", C, false)), "FieldByName", ["val_acc"])), "AsInteger")), 0)))))) {
        await $.mset((await $.mv((await $.wv([$t19, $t20], "ListSource", C, false)), "DataSet")), "Filter", "Mediocrity = 1");
      } else {
        await $.mset((await $.mv((await $.wv([$t19, $t20], "ListSource", C, false)), "DataSet")), "Filter", "Mediocrity = -1");
      }
    }
    await $.mset((await $.mv((await $.wv([$t19, $t20], "ListSource", C, false)), "DataSet")), "Filtered", (await $.wv([$t19, $t20], "False", C, false)));
    await $.mset((await $.mv((await $.wv([$t19, $t20], "ListSource", C, false)), "DataSet")), "Filtered", (await $.wv([$t19, $t20], "True", C, false)));
  }
  return L0.result;
}, {"params": [], "kind": "procedure", "ptypes": []});
  U.method("TTransactionEditForm", "ActionInsertExecute", async function ActionInsertExecute(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.stmt($.call(C, "SaveTransaction", []));
  await $.stmt($.call(C, "ResetTransaction", []));
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
  U.method("TTransactionEditForm", "DBEditOperationNoChange", async function DBEditOperationNoChange(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.set(C, "Modifed", true);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TTransactionEditForm", "DBEdit4Change", async function DBEdit4Change(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.set(C, "Modifed", true);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.func("CheckCurrency", async function CheckCurrency(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: false};
  await $.fixArgs(L0, ["value"]);
  {
    const $t21 = (await $.v(C, "out_transactionDataModule"));
    const $t22 = (await $.wv([$t21], "Currency", C, false));
    await $.wset([$t21, $t22], "Result", (await $.wcall([$t21, $t22], "Locate", ["valute", (await $.wv([$t21, $t22], "Value", { get: async () => L0["value"], set: async (v) => { L0["value"] = v; }, local: true }, false)), []], C)), { get: async () => L0["result"], set: async (v) => { L0["result"] = v; }, local: true });
  }
  return L0.result;
}, {"params": ["Value"], "kind": "function", "ptypes": ["Variant"]});
  U.method("TTransactionEditForm", "DebitCurrencyIDEditExit", async function DebitCurrencyIDEditExit(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t23 = (await $.call(C, "TDBEdit", [L0["sender"]]));
    const $t24 = (await $.wv([$t23], "out_transactionDataModule", C, false));
    const $t25 = (await $.wv([$t23, $t24], "Transactions", C, false));
    if ($.truthy($.not((await $.wcall([$t23, $t24, $t25], "CheckCurrency", [(await $.wv([$t23, $t24, $t25], "Text", C, false))], C))))) {
      await $.mset((await $.wv([$t23, $t24, $t25], "DebtAccSearchEdit", C, false)), "Text", (await $.wv([$t23, $t24, $t25], "EmptyStr", C, false)));
      await $.mcall((await $.wcall([$t23, $t24, $t25], "FieldByName", ["DebitRate"], C)), "Clear", []);
      await $.wset([$t23, $t24, $t25], "Color", (await $.wv([$t23, $t24, $t25], "clRed", C, false)), C);
      await $.stmt($.wcall([$t23, $t24, $t25], "SetFocus", [], C));
    } else {
      await $.wset([$t23, $t24, $t25], "Color", (await $.wv([$t23, $t24, $t25], "clWindow", C, false)), C);
    }
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TTransactionEditForm", "DebitCurrencyLookUpCloseUp", async function DebitCurrencyLookUpCloseUp(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t26 = (await $.v(C, "DebtAccSearchEdit"));
    const $t27 = (await $.wv([$t26], "out_transactionDataModule", C, false));
    await $.mset((await $.mv((await $.wv([$t26, $t27], "DataSource", C, false)), "DataSet")), "Filtered", (await $.wv([$t26, $t27], "False", C, false)));
    await $.mset((await $.mv((await $.wv([$t26, $t27], "DataSource", C, false)), "DataSet")), "Filter", $.add("val_acc= ", (await $.mv((await $.mcall((await $.wv([$t26, $t27], "DebitCurrencyData", C, false)), "FieldByName", ["ID"])), "AsString"))));
    await $.mset((await $.mv((await $.wv([$t26, $t27], "DataSource", C, false)), "DataSet")), "Filtered", (await $.wv([$t26, $t27], "True", C, false)));
    await $.wset([$t26, $t27], "Text", "", C);
    await $.mset((await $.mcall((await $.mv((await $.mv((await $.wcall([$t26, $t27], "TDBLookupComboBox", [(await $.wv([$t26, $t27], "Sender", { get: async () => L0["sender"], set: async (v) => { L0["sender"] = v; }, local: true }, false))], C)), "DataSource")), "DataSet")), "FieldByName", ["DEBITRATE"])), "AsCurrency", (await $.mv((await $.mcall((await $.mv((await $.mv((await $.wcall([$t26, $t27], "TDBLookupComboBox", [(await $.wv([$t26, $t27], "Sender", { get: async () => L0["sender"], set: async (v) => { L0["sender"] = v; }, local: true }, false))], C)), "ListSource")), "DataSet")), "FieldByName", ["RATE"])), "AsCurrency")));
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
  U.method("TTransactionEditForm", "DebtAccSearchEditChange", async function DebtAccSearchEditChange(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t28 = (await $.call(C, "TSearchEdit", [L0["sender"]]));
    const $t29 = (await $.wv([$t28], "out_transactionDataModule", C, false));
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
  U.method("TTransactionEditForm", "DebtAccSearchEditEnter", async function DebtAccSearchEditEnter(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t31 = (await $.v(C, "out_transactionDataModule"));
    await $.stmt((await $.wcall([$t31], "SetCurrencyFilter", [(await $.wv([$t31], "DebitAccData", C, false)), (await $.wv([$t31], "DebitCurrencyData", C, false))], C)));
    if ($.truthy($.eq((await $.mv((await $.wcall([$t31], "TEdit", [(await $.wv([$t31], "Sender", { get: async () => L0["sender"], set: async (v) => { L0["sender"] = v; }, local: true }, false))], C)), "Text")), (await $.wv([$t31], "EmptyStr", C, false))))) {
      await $.mcall((await $.mcall((await $.wv([$t31], "Transactions", C, false)), "FieldByName", ["DebitID"])), "Clear", []);
    }
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TTransactionEditForm", "Debt_CustidChange", async function Debt_CustidChange(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t32 = (await $.mv((await $.v(C, "out_transactionDataModule")), "DebitAccData"));
    if ($.truthy($.ne((await $.mv((await $.wv([$t32], "Debt_Custid", C, false)), "Text")), ""))) {
      await $.stmt($.wcall([$t32], "close", [], C));
      await $.stmt((await $.wcall([$t32], "SetVariable", ["v_custid", (await $.wcall([$t32], "strtoint", [(await $.mv((await $.wv([$t32], "Debt_Custid", C, false)), "Text"))], C))], C)));
      await $.stmt($.wcall([$t32], "open", [], C));
    } else {
      await $.mcall((await $.wv([$t32], "DebtAccSearchEdit", C, false)), "Clear", []);
      await $.stmt($.wcall([$t32], "close", [], C));
      await $.stmt((await $.wcall([$t32], "SetVariable", ["v_custid", (-(999999))], C)));
      await $.stmt($.wcall([$t32], "open", [], C));
    }
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TTransactionEditForm", "Debt_CustidExit", async function Debt_CustidExit(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TTransactionEditForm", "DebitAccNoLookUpDropDown", async function DebitAccNoLookUpDropDown(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t33 = (await $.v(C, "out_transactionDataModule"));
    await $.stmt((await $.wcall([$t33], "SetCurrencyFilter", [(await $.wv([$t33], "DebitAccData", C, false)), (await $.wv([$t33], "DebitCurrencyData", C, false))], C)));
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TTransactionEditForm", "DebitAccNameCBDropDown", async function DebitAccNameCBDropDown(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t34 = (await $.v(C, "out_transactionDataModule"));
    await $.stmt((await $.wcall([$t34], "SetCurrencyFilter", [(await $.wv([$t34], "DebitAccData", C, false)), (await $.wv([$t34], "DebitCurrencyData", C, false))], C)));
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.func("CutEditText", async function CutEditText(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "x": 0, "sel": 0};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t35 = (await $.call(C, "TCurrencyEdit", [L0["sender"]]));
    if ($.truthy($.eq((await $.wv([$t35], "DecimalSeparator", C, false)), (await $.wv([$t35], "ThousandSeparator", C, false))))) {
      return L0.result;
    }
    if ($.truthy($.eq((await $.wcall([$t35], "Pos", [(await $.wv([$t35], "DecimalSeparator", C, false)), (await $.wv([$t35], "Text", C, false))], C)), 0))) {
      return L0.result;
    }
    await $.wset([$t35], "Sel", (await $.wv([$t35], "SelStart", C, false)), { get: async () => L0["sel"], set: async (v) => { L0["sel"] = v; }, local: true });
    await $.wset([$t35], "X", $.sub($.sub((await $.wcall([$t35], "Length", [(await $.wv([$t35], "Text", C, false))], C)), (await $.wcall([$t35], "Pos", [(await $.wv([$t35], "DecimalSeparator", C, false)), (await $.wv([$t35], "Text", C, false))], C))), (await $.wv([$t35], "CurrencyDecimals", C, false))), { get: async () => L0["x"], set: async (v) => { L0["x"] = v; }, local: true });
    if ($.truthy(($.gt((await $.wv([$t35], "X", { get: async () => L0["x"], set: async (v) => { L0["x"] = v; }, local: true }, false)), 0)))) {
      await $.wset([$t35], "Text", (await $.wcall([$t35], "Copy", [(await $.wv([$t35], "Text", C, false)), 0, ($.sub((await $.wcall([$t35], "Length", [(await $.wv([$t35], "Text", C, false))], C)), (await $.wv([$t35], "X", { get: async () => L0["x"], set: async (v) => { L0["x"] = v; }, local: true }, false))))], C)), C);
      await $.wset([$t35], "SelStart", (await $.wv([$t35], "Sel", { get: async () => L0["sel"], set: async (v) => { L0["sel"] = v; }, local: true }, false)), C);
    }
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TTransactionEditForm", "DBEditOperationNoKeyDown", async function DBEditOperationNoKeyDown(Self, p0, p1, p2) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "key": $.asRef(p1), "shift": $.copyArg(p2), result: undefined};
  await $.fixArgs(L0, ["sender", "shift"]);
  if ($.truthy($.eq((await L0["key"].get()), (await $.v(C, "VK_F3"))))) {
    {
      const $t36 = (await $.v(C, "TransactionDestinationForm"));
      const $t37 = (await $.wv([$t36], "out_transactionDataModule", C, false));
      await $.stmt($.wcall([$t36, $t37], "ShowModal", [], C));
    }
  }
  return L0.result;
}, {"params": ["Sender", "Key", "Shift"], "kind": "procedure", "ptypes": ["TObject", "Word", "TShiftState"]});
  U.method("TTransactionEditForm", "CreditAccSearchEditKeyDown", async function CreditAccSearchEditKeyDown(Self, p0, p1, p2) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "key": $.asRef(p1), "shift": $.copyArg(p2), result: undefined};
  await $.fixArgs(L0, ["sender", "shift"]);
  if ($.truthy($.eq((await L0["key"].get()), (await $.v(C, "VK_F3"))))) {
    {
      const $t38 = (await $.v(C, "TransactionDestinationForm"));
      const $t39 = (await $.wv([$t38], "out_transactionDataModule", C, false));
      await $.stmt($.wcall([$t38, $t39], "ShowModal", [], C));
    }
  }
  return L0.result;
}, {"params": ["Sender", "Key", "Shift"], "kind": "procedure", "ptypes": ["TObject", "Word", "TShiftState"]});
  U.method("TTransactionEditForm", "DBEditDestinationKeyDown", async function DBEditDestinationKeyDown(Self, p0, p1, p2) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "key": $.asRef(p1), "shift": $.copyArg(p2), result: undefined};
  await $.fixArgs(L0, ["sender", "shift"]);
  if ($.truthy($.eq((await L0["key"].get()), (await $.v(C, "VK_F3"))))) {
    {
      const $t40 = (await $.v(C, "TransactionDestinationForm"));
      const $t41 = (await $.wv([$t40], "out_transactionDataModule", C, false));
      await $.stmt($.wcall([$t40, $t41], "ShowModal", [], C));
      if ($.truthy($.eq((await $.wv([$t40, $t41], "Key", { get: async () => await L0["key"].get(), set: async (v) => { await L0["key"].set(v); }, local: true }, false)), (await $.wv([$t40, $t41], "VK_ESCAPE", C, false))))) {
        await $.stmt($.wcall([$t40, $t41], "Close", [], C));
      }
    }
  }
  return L0.result;
}, {"params": ["Sender", "Key", "Shift"], "kind": "procedure", "ptypes": ["TObject", "Word", "TShiftState"]});
  U.method("TTransactionEditForm", "TrDestNoEditKeyDown", async function TrDestNoEditKeyDown(Self, p0, p1, p2) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "key": $.asRef(p1), "shift": $.copyArg(p2), result: undefined};
  await $.fixArgs(L0, ["sender", "shift"]);
  if ($.truthy($.eq((await L0["key"].get()), (await $.v(C, "VK_F3"))))) {
    {
      const $t42 = (await $.v(C, "TransactionDestinationForm"));
      const $t43 = (await $.wv([$t42], "out_transactionDataModule", C, false));
      await $.stmt($.wcall([$t42, $t43], "ShowModal", [], C));
      if ($.truthy($.eq((await $.wv([$t42, $t43], "Key", { get: async () => await L0["key"].get(), set: async (v) => { await L0["key"].set(v); }, local: true }, false)), (await $.wv([$t42, $t43], "VK_ESCAPE", C, false))))) {
        await $.stmt($.wcall([$t42, $t43], "Close", [], C));
      }
    }
  }
  return L0.result;
}, {"params": ["Sender", "Key", "Shift"], "kind": "procedure", "ptypes": ["TObject", "Word", "TShiftState"]});
  U.method("TTransactionEditForm", "CurrencyEditDebitChange", async function CurrencyEditDebitChange(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.stmt((await $.call(C, "CutEditText", [L0["sender"]])));
  if ($.truthy($.eq((await $.mv((await $.call(C, "TCurrencyEdit", [L0["sender"]])), "Text")), (await $.v(C, "EmptyStr"))))) {
    await $.mset((await $.call(C, "TCurrencyEdit", [L0["sender"]])), "Value", 0);
  }
  { const $t44 = (await $.mv((await $.call(C, "TCurrencyEdit", [L0["sender"]])), "Tag"));
    if ($.eq($t44, 1)) {
      await $.set(C, "TransactionSide", (await $.v(C, "tsDebet")));
    }
    else if ($.eq($t44, 2)) {
      await $.set(C, "TransactionSide", (await $.v(C, "tsCredit")));
    }
    else if ($.eq($t44, 3)) {
      await $.set(C, "TransactionSide", (await $.v(C, "tsUnknown")));
    }
  }
  await $.stmt((await $.call(C, "SetAmmounts", [(await $.v(C, "TransactionSide"))])));
  await $.set(C, "Modifed", true);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TTransactionEditForm", "CurrencyEditCreditChange", async function CurrencyEditCreditChange(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.stmt((await $.call(C, "CutEditText", [L0["sender"]])));
  if ($.truthy($.eq((await $.mv((await $.call(C, "TCurrencyEdit", [L0["sender"]])), "Text")), (await $.v(C, "EmptyStr"))))) {
    await $.mset((await $.call(C, "TCurrencyEdit", [L0["sender"]])), "Value", 0);
  }
  { const $t45 = (await $.mv((await $.call(C, "TCurrencyEdit", [L0["sender"]])), "Tag"));
    if ($.eq($t45, 1)) {
      await $.set(C, "TransactionSide", (await $.v(C, "tsDebet")));
    }
    else if ($.eq($t45, 2)) {
      await $.set(C, "TransactionSide", (await $.v(C, "tsCredit")));
    }
    else if ($.eq($t45, 3)) {
      await $.set(C, "TransactionSide", (await $.v(C, "tsUnknown")));
    }
  }
  await $.stmt((await $.call(C, "SetAmmounts", [(await $.v(C, "TransactionSide"))])));
  await $.set(C, "Modifed", true);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TTransactionEditForm", "CurrencyEditCreditExit", async function CurrencyEditCreditExit(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.stmt((await $.call(C, "CutEditText", [L0["sender"]])));
  if ($.truthy($.eq((await $.mv((await $.call(C, "TCurrencyEdit", [L0["sender"]])), "Text")), (await $.v(C, "EmptyStr"))))) {
    await $.mset((await $.call(C, "TCurrencyEdit", [L0["sender"]])), "Value", 0);
  }
  { const $t46 = (await $.mv((await $.call(C, "TCurrencyEdit", [L0["sender"]])), "Tag"));
    if ($.eq($t46, 1)) {
      await $.set(C, "TransactionSide", (await $.v(C, "tsDebet")));
    }
    else if ($.eq($t46, 2)) {
      await $.set(C, "TransactionSide", (await $.v(C, "tsCredit")));
    }
    else if ($.eq($t46, 3)) {
      await $.set(C, "TransactionSide", (await $.v(C, "tsUnknown")));
    }
  }
  await $.stmt((await $.call(C, "SetAmmounts", [(await $.v(C, "TransactionSide"))])));
  await $.set(C, "Modifed", true);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TTransactionEditForm", "CurrencyEditLammountChange", async function CurrencyEditLammountChange(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.stmt((await $.call(C, "CutEditText", [L0["sender"]])));
  if ($.truthy($.eq((await $.mv((await $.call(C, "TCurrencyEdit", [L0["sender"]])), "Text")), (await $.v(C, "EmptyStr"))))) {
    await $.mset((await $.call(C, "TCurrencyEdit", [L0["sender"]])), "Value", 0);
  }
  { const $t47 = (await $.mv((await $.call(C, "TCurrencyEdit", [L0["sender"]])), "Tag"));
    if ($.eq($t47, 1)) {
      await $.set(C, "TransactionSide", (await $.v(C, "tsDebet")));
    }
    else if ($.eq($t47, 2)) {
      await $.set(C, "TransactionSide", (await $.v(C, "tsCredit")));
    }
    else if ($.eq($t47, 3)) {
      await $.set(C, "TransactionSide", (await $.v(C, "tsUnknown")));
    }
  }
  await $.stmt((await $.call(C, "SetAmmounts", [(await $.v(C, "TransactionSide"))])));
  await $.set(C, "Modifed", true);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TTransactionEditForm", "CurrencyEditLammountExit", async function CurrencyEditLammountExit(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.stmt((await $.call(C, "CutEditText", [L0["sender"]])));
  if ($.truthy($.eq((await $.mv((await $.call(C, "TCurrencyEdit", [L0["sender"]])), "Text")), (await $.v(C, "EmptyStr"))))) {
    await $.mset((await $.call(C, "TCurrencyEdit", [L0["sender"]])), "Value", 0);
  }
  { const $t48 = (await $.mv((await $.call(C, "TCurrencyEdit", [L0["sender"]])), "Tag"));
    if ($.eq($t48, 1)) {
      await $.set(C, "TransactionSide", (await $.v(C, "tsDebet")));
    }
    else if ($.eq($t48, 2)) {
      await $.set(C, "TransactionSide", (await $.v(C, "tsCredit")));
    }
    else if ($.eq($t48, 3)) {
      await $.set(C, "TransactionSide", (await $.v(C, "tsUnknown")));
    }
  }
  await $.stmt((await $.call(C, "SetAmmounts", [(await $.v(C, "TransactionSide"))])));
  await $.set(C, "Modifed", true);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TTransactionEditForm", "CashSymbolLookUpDropDown", async function CashSymbolLookUpDropDown(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.stmt($.call(C, "SetCashSymbol", []));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TTransactionEditForm", "DBEditDestinationChange", async function DBEditDestinationChange(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.set(C, "Modifed", true);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TTransactionEditForm", "TrDestNoEditChange", async function TrDestNoEditChange(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t49 = (await $.call(C, "TEdit", [L0["sender"]]));
    const $t50 = (await $.mv((await $.wv([$t49], "TransactionDestinationForm", C, false)), "TrDest"));
    const $t51 = (await $.wv([$t49, $t50], "out_transactionDataModule", C, false));
    if ($.truthy($.ne((await $.wv([$t49, $t50, $t51], "Text", C, false)), (await $.wv([$t49, $t50, $t51], "EmptyStr", C, false))))) {
      if ($.truthy((await $.wcall([$t49, $t50, $t51], "Locate", ["ID", (await $.wv([$t49, $t50, $t51], "Text", C, false)), []], C)))) {
        await $.mset((await $.mcall((await $.wv([$t49, $t50, $t51], "Transactions", C, false)), "FieldByName", ["Name"])), "AsString", (await $.mv((await $.wcall([$t49, $t50, $t51], "FieldByName", ["Name"], C)), "AsString")));
      }
    }
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TTransactionEditForm", "ConvertationSymbolIDBEditChange", async function ConvertationSymbolIDBEditChange(Self, p0) {
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
    const $t52 = (await $.call(C, "TDBEdit", [L0["sender"]]));
    const $t53 = (await $.wv([$t52], "out_transactionDataModule", C, false));
    if ($.truthy($.eq((await $.wv([$t52, $t53], "Text", C, false)), (await $.wv([$t52, $t53], "EmptyStr", C, false))))) {
      return L0.result;
    }
    await $.wset([$t52, $t53], "ConvertationSymbol", (await $.mv((await $.mcall((await $.wv([$t52, $t53], "Transactions", C, false)), "FieldByName", ["OutBalanceChar"])), "AsInteger")), { get: async () => L0["convertationsymbol"], set: async (v) => { L0["convertationsymbol"] = v; }, local: true });
    if ($.truthy($.not((await $.mcall((await $.wv([$t52, $t53], "ConvertationSymbols", C, false)), "Locate", ["ID", (await $.wv([$t52, $t53], "ConvertationSymbol", { get: async () => L0["convertationsymbol"], set: async (v) => { L0["convertationsymbol"] = v; }, local: true }, false)), []]))))) {
      await $.wset([$t52, $t53], "Modifed", (await $.wv([$t52, $t53], "False", C, false)), C);
      await $.wset([$t52, $t53], "Color", (await $.wv([$t52, $t53], "clRed", C, false)), C);
      await $.stmt($.wcall([$t52, $t53], "SetFocus", [], C));
    } else {
      await $.wset([$t52, $t53], "Color", (await $.wv([$t52, $t53], "clWhite", C, false)), C);
      await $.wset([$t52, $t53], "Modifed", (await $.wv([$t52, $t53], "True", C, false)), C);
    }
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TTransactionEditForm", "CashSymbolDBEditChange", async function CashSymbolDBEditChange(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.set(C, "Modifed", true);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TTransactionEditForm", "CashSymbolDBEditEnter", async function CashSymbolDBEditEnter(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.stmt($.call(C, "SetCashSymbol", []));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TTransactionEditForm", "CashSymbolDBEditExit", async function CashSymbolDBEditExit(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "cashsymbol": 0};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t54 = (await $.call(C, "TDBEdit", [L0["sender"]]));
    const $t55 = (await $.wv([$t54], "out_transactionDataModule", C, false));
    if ($.truthy($.eq((await $.wv([$t54, $t55], "Text", C, false)), (await $.wv([$t54, $t55], "EmptyStr", C, false))))) {
      return L0.result;
    }
    await $.wset([$t54, $t55], "CashSymbol", (await $.mv((await $.mcall((await $.wv([$t54, $t55], "Transactions", C, false)), "FieldByName", ["InBalanceChar"])), "AsInteger")), { get: async () => L0["cashsymbol"], set: async (v) => { L0["cashsymbol"] = v; }, local: true });
    if ($.truthy((await $.mcall((await $.wv([$t54, $t55], "CashSymbols", C, false)), "Locate", ["Symbol", (await $.wv([$t54, $t55], "CashSymbol", { get: async () => L0["cashsymbol"], set: async (v) => { L0["cashsymbol"] = v; }, local: true }, false)), []])))) {
      await $.wset([$t54, $t55], "Color", (await $.wv([$t54, $t55], "clWhite", C, false)), C);
      await $.wset([$t54, $t55], "Modifed", (await $.wv([$t54, $t55], "True", C, false)), C);
    }
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TTransactionEditForm", "CreditCurrencyIDEditExit", async function CreditCurrencyIDEditExit(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t56 = (await $.call(C, "TDBEdit", [L0["sender"]]));
    const $t57 = (await $.wv([$t56], "out_transactionDataModule", C, false));
    const $t58 = (await $.wv([$t56, $t57], "Transactions", C, false));
    if ($.truthy($.not((await $.wcall([$t56, $t57, $t58], "CheckCurrency", [(await $.wv([$t56, $t57, $t58], "Text", C, false))], C))))) {
      await $.mset((await $.wv([$t56, $t57, $t58], "CreditAccSearchEdit", C, false)), "Text", (await $.wv([$t56, $t57, $t58], "EmptyStr", C, false)));
      await $.mcall((await $.wcall([$t56, $t57, $t58], "FieldByName", ["CreditRate"], C)), "Clear", []);
      await $.wset([$t56, $t57, $t58], "Color", (await $.wv([$t56, $t57, $t58], "clRed", C, false)), C);
      await $.stmt($.wcall([$t56, $t57, $t58], "SetFocus", [], C));
    } else {
      await $.wset([$t56, $t57, $t58], "Color", (await $.wv([$t56, $t57, $t58], "clWindow", C, false)), C);
    }
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TTransactionEditForm", "CreditCurrencyLookUpCloseUp", async function CreditCurrencyLookUpCloseUp(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t59 = (await $.v(C, "CreditAccSearchEdit"));
    const $t60 = (await $.wv([$t59], "out_transactionDataModule", C, false));
    await $.mset((await $.mv((await $.wv([$t59, $t60], "DataSource", C, false)), "DataSet")), "Filtered", (await $.wv([$t59, $t60], "False", C, false)));
    await $.mset((await $.mv((await $.wv([$t59, $t60], "DataSource", C, false)), "DataSet")), "Filter", $.add("val_acc= ", (await $.mv((await $.mcall((await $.wv([$t59, $t60], "CreditCurrencyData", C, false)), "FieldByName", ["ID"])), "AsString"))));
    await $.mset((await $.mv((await $.wv([$t59, $t60], "DataSource", C, false)), "DataSet")), "Filtered", (await $.wv([$t59, $t60], "True", C, false)));
    await $.wset([$t59, $t60], "Text", "", C);
    await $.mset((await $.mcall((await $.mv((await $.mv((await $.wcall([$t59, $t60], "TDBLookupComboBox", [(await $.wv([$t59, $t60], "Sender", { get: async () => L0["sender"], set: async (v) => { L0["sender"] = v; }, local: true }, false))], C)), "DataSource")), "DataSet")), "FieldByName", ["CREDITRATE"])), "AsCurrency", (await $.mv((await $.mcall((await $.mv((await $.mv((await $.wcall([$t59, $t60], "TDBLookupComboBox", [(await $.wv([$t59, $t60], "Sender", { get: async () => L0["sender"], set: async (v) => { L0["sender"] = v; }, local: true }, false))], C)), "ListSource")), "DataSet")), "FieldByName", ["RATE"])), "AsCurrency")));
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TTransactionEditForm", "CreditCurrencyRateChange", async function CreditCurrencyRateChange(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.set(C, "Modifed", true);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TTransactionEditForm", "CreditAccSearchEditChange", async function CreditAccSearchEditChange(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t61 = (await $.call(C, "TSearchEdit", [L0["sender"]]));
    const $t62 = (await $.wv([$t61], "out_transactionDataModule", C, false));
    const $t63 = (await $.wv([$t61, $t62], "Transactions", C, false));
    if ($.truthy($.eq((await $.wv([$t61, $t62, $t63], "Text", C, false)), (await $.wv([$t61, $t62, $t63], "EmptyStr", C, false))))) {
      await $.mcall((await $.mcall((await $.mv((await $.wv([$t61, $t62, $t63], "out_transactionDataModule", C, false)), "Transactions")), "FieldByName", ["CreditID"])), "Clear", []);
      await $.mcall((await $.mcall((await $.mv((await $.wv([$t61, $t62, $t63], "out_transactionDataModule", C, false)), "Transactions")), "FieldByName", ["InBalanceChar"])), "Clear", []);
    }
    await $.wset([$t61, $t62, $t63], "Modifed", (await $.wv([$t61, $t62, $t63], "True", C, false)), C);
    await $.mset((await $.wv([$t61, $t62, $t63], "PanelCreditRest", C, false)), "Visible", (await $.and_($.not(($.eq((await $.wcall([$t61, $t62, $t63], "Trim", [(await $.wv([$t61, $t62, $t63], "Text", C, false))], C)), (await $.wv([$t61, $t62, $t63], "EmptyStr", C, false))))), async () => ($.not((await $.mv((await $.wcall([$t61, $t62, $t63], "FieldByName", ["CreditID"], C)), "IsNull")))))));
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TTransactionEditForm", "CreditAccSearchEditEnter", async function CreditAccSearchEditEnter(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t64 = (await $.v(C, "out_transactionDataModule"));
    await $.stmt((await $.wcall([$t64], "SetCurrencyFilter", [(await $.wv([$t64], "CreditAccData", C, false)), (await $.wv([$t64], "CreditCurrencyData", C, false))], C)));
    if ($.truthy($.eq((await $.mv((await $.wcall([$t64], "TEdit", [(await $.wv([$t64], "Sender", { get: async () => L0["sender"], set: async (v) => { L0["sender"] = v; }, local: true }, false))], C)), "Text")), (await $.wv([$t64], "EmptyStr", C, false))))) {
      await $.mcall((await $.mcall((await $.wv([$t64], "Transactions", C, false)), "FieldByName", ["CreditID"])), "Clear", []);
    }
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TTransactionEditForm", "CreditAccNoLookUpDropDown", async function CreditAccNoLookUpDropDown(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t65 = (await $.v(C, "out_transactionDataModule"));
    await $.stmt((await $.wcall([$t65], "SetCurrencyFilter", [(await $.wv([$t65], "CreditAccData", C, false)), (await $.wv([$t65], "CreditCurrencyData", C, false))], C)));
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TTransactionEditForm", "DBLookupComboBox3DropDown", async function DBLookupComboBox3DropDown(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t66 = (await $.v(C, "out_transactionDataModule"));
    await $.stmt((await $.wcall([$t66], "SetCurrencyFilter", [(await $.wv([$t66], "CreditAccData", C, false)), (await $.wv([$t66], "CreditCurrencyData", C, false))], C)));
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TTransactionEditForm", "ButtonApplyClick", async function ButtonApplyClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.stmt($.call(C, "SaveTransaction", []));
  await $.stmt($.call(C, "ResetTransaction", []));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TTransactionEditForm", "ButtonCancelClick", async function ButtonCancelClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.stmt($.call(C, "ResetTransaction", []));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TTransactionEditForm", "ButtonCloseClick", async function ButtonCloseClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.stmt($.call(C, "close", []));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TTransactionEditForm", "FormCreate", async function FormCreate(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mset((await $.v(C, "TransDate")), "datetime", (await $.mv((await $.mcall((await $.mv((await $.v(C, "out_transactionDataModule")), "sysdat")), "fieldbyname", ["tek_dat"])), "asdatetime")));
  {
    const $t67 = (await $.v(C, "out_transactionDataModule"));
    const $t68 = (await $.wv([$t67], "Sysdat", C, false));
    const $t69 = (await $.wv([$t67, $t68], "TransDate", C, false));
    if ($.truthy($.not((await $.mv((await $.wv([$t67, $t68, $t69], "DebitAccData", C, false)), "Active"))))) {
      await $.mcall((await $.wv([$t67, $t68, $t69], "DebitAccData", C, false)), "Open", []);
    }
    if ($.truthy($.not((await $.mv((await $.wv([$t67, $t68, $t69], "CreditAccData", C, false)), "Active"))))) {
      await $.mcall((await $.wv([$t67, $t68, $t69], "CreditAccData", C, false)), "Open", []);
    }
    await $.wset([$t67, $t68, $t69], "DateTime", (await $.mv((await $.wcall([$t67, $t68, $t69], "FieldByName", ["tek_dat"], C)), "AsDateTime")), C);
  }
  await $.stmt((await $.mcall((await $.v(C, "SBTranslateProc")), "TranslateAllCompForms", [Self, (await $.mv((await $.v(C, "sboapiDataModule")), "OrPack_SL"))])));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TTransactionEditForm", "FormClose", async function FormClose(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "action": $.asRef(p1), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t70 = (await $.v(C, "out_transactionDataModule"));
    await $.stmt((await $.wcall([$t70], "ResetAccountFilter", [(await $.wv([$t70], "DebitAccData", C, false))], C)));
    await $.stmt((await $.wcall([$t70], "ResetAccountFilter", [(await $.wv([$t70], "CreditAccData", C, false))], C)));
    await $.stmt((await $.wcall([$t70], "ResetAccountFilter", [(await $.wv([$t70], "CashSymbols", C, false))], C)));
  }
  await $.stmt($.call(C, "OperationCancel", []));
  return L0.result;
}, {"params": ["Sender", "Action"], "kind": "procedure", "ptypes": ["TObject", "TCloseAction"]});
  U.method("TTransactionEditForm", "FormKeyDown", async function FormKeyDown(Self, p0, p1, p2) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "key": $.asRef(p1), "shift": $.copyArg(p2), result: undefined};
  await $.fixArgs(L0, ["sender", "shift"]);
  if ($.truthy($.eq((await L0["key"].get()), (await $.v(C, "VK_F3"))))) {
    {
      const $t71 = (await $.v(C, "TransactionDestinationForm"));
      const $t72 = (await $.wv([$t71], "out_transactionDataModule", C, false));
      await $.stmt($.wcall([$t71, $t72], "ShowModal", [], C));
      if ($.truthy($.eq((await $.wv([$t71, $t72], "ModalResult", C, false)), (await $.wv([$t71, $t72], "mrOk", C, false))))) {
        await $.mset((await $.mcall((await $.wv([$t71, $t72], "Transactions", C, false)), "FieldByName", ["Name"])), "AsString", (await $.wv([$t71, $t72], "Value", C, false)));
        await $.mset((await $.wv([$t71, $t72], "TrDestNoEdit", C, false)), "Text", (await $.mv((await $.mcall((await $.wv([$t71, $t72], "TrDest", C, false)), "FieldByName", ["ID"])), "AsString")));
      }
    }
  } else {
    if ($.truthy($.eq((await L0["key"].get()), (await $.v(C, "VK_ESCAPE"))))) {
      await $.stmt($.call(C, "Close", []));
    }
  }
  return L0.result;
}, {"params": ["Sender", "Key", "Shift"], "kind": "procedure", "ptypes": ["TObject", "Word", "TShiftState"]});
  U.method("TTransactionEditForm", "FormKeyPress", async function FormKeyPress(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "key": $.asRef(p1), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.eq((await $.call(C, "Ord", [(await L0["key"].get())])), (await $.v(C, "VK_RETURN"))))) {
    {
      const $t73 = L0["sender"];
      await $.stmt((await $.wcall([$t73], "SelectNext", [(await $.wv([$t73], "ActiveControl", C, false)), (await $.wv([$t73], "True", C, false)), (await $.wv([$t73], "True", C, false))], C)));
    }
  }
  return L0.result;
}, {"params": ["Sender", "Key"], "kind": "procedure", "ptypes": ["TObject", "Char"]});
  U.method("TTransactionEditForm", "ComboBox1Click", async function ComboBox1Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t74 = (await $.v(C, "out_transactionDataModule"));
    await $.mset((await $.mcall((await $.wv([$t74], "Transactions", C, false)), "FieldByName", ["Name"])), "AsString", (await $.mv(((await $.wv([$t74], "Sender", { get: async () => L0["sender"], set: async (v) => { L0["sender"] = v; }, local: true }, false))), "Text")));
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TTransactionEditForm", "ComboBox1DropDown", async function ComboBox1DropDown(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.stmt((await $.call(C, "LoadComboData", [(await $.call(C, "TComboBox", [L0["sender"]]))])));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TTransactionEditForm", "ButtonApplyKeyDown", async function ButtonApplyKeyDown(Self, p0, p1, p2) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "key": $.asRef(p1), "shift": $.copyArg(p2), result: undefined};
  await $.fixArgs(L0, ["sender", "shift"]);
  if ($.truthy($.eq((await L0["key"].get()), (await $.v(C, "VK_F3"))))) {
    {
      const $t75 = (await $.v(C, "TransactionDestinationForm"));
      const $t76 = (await $.wv([$t75], "out_transactionDataModule", C, false));
      await $.stmt($.wcall([$t75, $t76], "ShowModal", [], C));
      if ($.truthy($.eq((await $.wv([$t75, $t76], "Key", { get: async () => await L0["key"].get(), set: async (v) => { await L0["key"].set(v); }, local: true }, false)), (await $.wv([$t75, $t76], "VK_ESCAPE", C, false))))) {
        await $.stmt($.wcall([$t75, $t76], "Close", [], C));
      }
    }
  }
  return L0.result;
}, {"params": ["Sender", "Key", "Shift"], "kind": "procedure", "ptypes": ["TObject", "Word", "TShiftState"]});
  U.method("TTransactionEditForm", "ActionInsertUpdate", async function ActionInsertUpdate(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t77 = (L0["sender"]);
    const $t78 = (await $.mv((await $.wv([$t77], "out_transactionDataModule", C, false)), "Transactions"));
    await $.wset([$t77, $t78], "Enabled", (await $.and_((await $.and_((await $.and_((await $.wv([$t77, $t78], "Modifed", C, false)), async () => ($.not((await $.mv((await $.wcall([$t77, $t78], "FieldByName", ["DebitID"], C)), "IsNull")))))), async () => ($.not((await $.mv((await $.wcall([$t77, $t78], "FieldByName", ["CreditID"], C)), "IsNull")))))), async () => ($.ne((await $.mv((await $.wv([$t77, $t78], "CurrencyEditLammount", C, false)), "Value")), 0.0)))), C);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TTransactionEditForm", "ActionCancelUpdate", async function ActionCancelUpdate(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t79 = (L0["sender"]);
    const $t80 = (await $.mv((await $.wv([$t79], "out_transactionDataModule", C, false)), "Transactions"));
    await $.wset([$t79, $t80], "Enabled", (await $.and_((await $.and_((await $.and_((await $.wv([$t79, $t80], "Modifed", C, false)), async () => ($.not((await $.mv((await $.wcall([$t79, $t80], "FieldByName", ["DebitID"], C)), "IsNull")))))), async () => ($.not((await $.mv((await $.wcall([$t79, $t80], "FieldByName", ["CreditID"], C)), "IsNull")))))), async () => ($.ne((await $.mv((await $.wv([$t79, $t80], "CurrencyEditLammount", C, false)), "Value")), 0.0)))), C);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TTransactionEditForm", "FormShow", async function FormShow(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "debt": '', "credit": ''};
  await $.fixArgs(L0, ["sender"]);
  await $.stmt($.call(C, "Init", []));
  await $.set(C, "Modifed", false);
  await $.mcall((await $.v(C, "DebitCurrencyIDEdit")), "Setfocus", []);
  L0["debt"] = ((await $.mv((await $.mv((await $.v(C, "out_transactionDataModule")), "TransactionsDCUSTID")), "AsString")));
  L0["credit"] = ((await $.mv((await $.mv((await $.v(C, "out_transactionDataModule")), "TransactionsCCUSTID")), "AsString")));
  await $.mset((await $.v(C, "Debt_Custid")), "Text", L0["debt"]);
  await $.mset((await $.v(C, "Kredit_Custid")), "Text", L0["credit"]);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TTransactionEditForm", "DebitCurrencyIDEditKeyDown", async function DebitCurrencyIDEditKeyDown(Self, p0, p1, p2) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "key": $.asRef(p1), "shift": $.copyArg(p2), result: undefined};
  await $.fixArgs(L0, ["sender", "shift"]);
  if ($.truthy($.eq((await L0["key"].get()), (await $.v(C, "VK_ESCAPE"))))) {
    await $.stmt($.call(C, "Close", []));
  }
  if ($.truthy($.eq((await L0["key"].get()), (await $.v(C, "VK_F3"))))) {
    {
      const $t81 = (await $.v(C, "TransactionDestinationForm"));
      const $t82 = (await $.wv([$t81], "out_transactionDataModule", C, false));
      await $.stmt($.wcall([$t81, $t82], "ShowModal", [], C));
    }
  }
  return L0.result;
}, {"params": ["Sender", "Key", "Shift"], "kind": "procedure", "ptypes": ["TObject", "Word", "TShiftState"]});
  U.method("TTransactionEditForm", "ButtonCloseKeyDown", async function ButtonCloseKeyDown(Self, p0, p1, p2) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "key": $.asRef(p1), "shift": $.copyArg(p2), result: undefined};
  await $.fixArgs(L0, ["sender", "shift"]);
  if ($.truthy($.eq((await L0["key"].get()), (await $.v(C, "VK_F3"))))) {
    {
      const $t83 = (await $.v(C, "TransactionDestinationForm"));
      const $t84 = (await $.wv([$t83], "out_transactionDataModule", C, false));
      await $.stmt($.wcall([$t83, $t84], "ShowModal", [], C));
      if ($.truthy($.eq((await $.wv([$t83, $t84], "Key", { get: async () => await L0["key"].get(), set: async (v) => { await L0["key"].set(v); }, local: true }, false)), (await $.wv([$t83, $t84], "VK_ESCAPE", C, false))))) {
        await $.stmt($.wcall([$t83, $t84], "Close", [], C));
      }
    }
  }
  return L0.result;
}, {"params": ["Sender", "Key", "Shift"], "kind": "procedure", "ptypes": ["TObject", "Word", "TShiftState"]});
  U.method("TTransactionEditForm", "ButtonCancelKeyDown", async function ButtonCancelKeyDown(Self, p0, p1, p2) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "key": $.asRef(p1), "shift": $.copyArg(p2), result: undefined};
  await $.fixArgs(L0, ["sender", "shift"]);
  if ($.truthy($.eq((await L0["key"].get()), (await $.v(C, "VK_F3"))))) {
    {
      const $t85 = (await $.v(C, "TransactionDestinationForm"));
      const $t86 = (await $.wv([$t85], "out_transactionDataModule", C, false));
      await $.stmt($.wcall([$t85, $t86], "ShowModal", [], C));
      if ($.truthy($.eq((await $.wv([$t85, $t86], "Key", { get: async () => await L0["key"].get(), set: async (v) => { await L0["key"].set(v); }, local: true }, false)), (await $.wv([$t85, $t86], "VK_ESCAPE", C, false))))) {
        await $.stmt($.wcall([$t85, $t86], "Close", [], C));
      }
    }
  }
  return L0.result;
}, {"params": ["Sender", "Key", "Shift"], "kind": "procedure", "ptypes": ["TObject", "Word", "TShiftState"]});
  U.method("TTransactionEditForm", "DBEditAssignmentChange", async function DBEditAssignmentChange(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.set(C, "Modifed", true);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TTransactionEditForm", "CurrencyEditDebitExit", async function CurrencyEditDebitExit(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.stmt((await $.call(C, "CutEditText", [L0["sender"]])));
  if ($.truthy($.eq((await $.mv((await $.call(C, "TCurrencyEdit", [L0["sender"]])), "Text")), (await $.v(C, "EmptyStr"))))) {
    await $.mset((await $.call(C, "TCurrencyEdit", [L0["sender"]])), "Value", 0);
  }
  { const $t87 = (await $.mv((await $.call(C, "TCurrencyEdit", [L0["sender"]])), "Tag"));
    if ($.eq($t87, 1)) {
      await $.set(C, "TransactionSide", (await $.v(C, "tsDebet")));
    }
    else if ($.eq($t87, 2)) {
      await $.set(C, "TransactionSide", (await $.v(C, "tsCredit")));
    }
    else if ($.eq($t87, 3)) {
      await $.set(C, "TransactionSide", (await $.v(C, "tsUnknown")));
    }
  }
  await $.stmt((await $.call(C, "SetAmmounts", [(await $.v(C, "TransactionSide"))])));
  await $.set(C, "Modifed", true);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TTransactionEditForm", "TransDateChange", async function TransDateChange(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.set(C, "Modifed", true);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TTransactionEditForm", "CreditCurrencyIDEditKeyDown", async function CreditCurrencyIDEditKeyDown(Self, p0, p1, p2) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "key": $.asRef(p1), "shift": $.copyArg(p2), result: undefined};
  await $.fixArgs(L0, ["sender", "shift"]);
  if ($.truthy($.eq((await L0["key"].get()), (await $.v(C, "VK_F3"))))) {
    {
      const $t88 = (await $.v(C, "TransactionDestinationForm"));
      const $t89 = (await $.wv([$t88], "out_transactionDataModule", C, false));
      await $.stmt($.wcall([$t88, $t89], "ShowModal", [], C));
    }
  }
  return L0.result;
}, {"params": ["Sender", "Key", "Shift"], "kind": "procedure", "ptypes": ["TObject", "Word", "TShiftState"]});
  U.method("TTransactionEditForm", "TransDateKeyDown", async function TransDateKeyDown(Self, p0, p1, p2) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "key": $.asRef(p1), "shift": $.copyArg(p2), result: undefined};
  await $.fixArgs(L0, ["sender", "shift"]);
  if ($.truthy($.eq((await L0["key"].get()), (await $.v(C, "VK_F3"))))) {
    {
      const $t90 = (await $.v(C, "TransactionDestinationForm"));
      const $t91 = (await $.wv([$t90], "out_transactionDataModule", C, false));
      await $.stmt($.wcall([$t90, $t91], "ShowModal", [], C));
    }
  }
  return L0.result;
}, {"params": ["Sender", "Key", "Shift"], "kind": "procedure", "ptypes": ["TObject", "Word", "TShiftState"]});
  return U;
}
