// Generated from Transaction_PropertiesImpl.pas by pas2js — do not edit by hand; regenerate instead.
/* eslint-disable */
// @ts-nocheck

export default function define($) {
  const U = $.unit("Transaction_PropertiesImpl", ["Windows", "Messages", "SysUtils", "Classes", "Graphics", "Controls", "Forms", "Dialogs", "ComCtrls", "StdCtrls", "ImgList", "ExtCtrls", "CurrencyEdit", "DBCtrls", "Mask", "DBViewComboBox", "Db", "SearchEdit", "ActnList", "Variants", "Buttons", "Transaction_DataModuleUnit", "sboapidatamoduleimpl", "Transaction_DestinationImpl", "BProc_Trans", "SBTranslateProc", "FormBalCnImpl", "Form_AccountsImpl", "OpenAccountImpl"]);
  const C = [U];
  U.enumType("ttransactionside", 3);
  U.const("tsDebet", 0);
  U.const("tsCredit", 1);
  U.const("tsUnknown", 2);
  U.enumType("toperationmode", 3);
  U.const("omInsert", 0);
  U.const("omEdit", 1);
  U.const("omCommission", 2);
  U.defClass("TTransactionForm", "TForm", {"groupbox1": {"name": "GroupBox1", "type": "TGroupBox"}, "panel1": {"name": "Panel1", "type": "TPanel"}, "paneldebit": {"name": "PanelDebit", "type": "TPanel"}, "panel4": {"name": "Panel4", "type": "TPanel"}, "panel5": {"name": "Panel5", "type": "TPanel"}, "panel6": {"name": "Panel6", "type": "TPanel"}, "groupbox2": {"name": "GroupBox2", "type": "TGroupBox"}, "groupbox3": {"name": "GroupBox3", "type": "TGroupBox"}, "panel14": {"name": "Panel14", "type": "TPanel"}, "panel15": {"name": "Panel15", "type": "TPanel"}, "cashsymbollookup": {"name": "CashSymbolLookUp", "type": "TDBLookupComboBox"}, "cashsymboldbedit": {"name": "CashSymbolDBEdit", "type": "TDBEdit"}, "convertationsymbolidbedit": {"name": "ConvertationSymbolIDBEdit", "type": "TDBEdit"}, "panel17": {"name": "Panel17", "type": "TPanel"}, "buttonapply": {"name": "ButtonApply", "type": "TButton"}, "buttoncancel": {"name": "ButtonCancel", "type": "TButton"}, "buttonclose": {"name": "ButtonClose", "type": "TButton"}, "debitcurrencyidedit": {"name": "DebitCurrencyIDEdit", "type": "TDBEdit"}, "debitcurrencyrate": {"name": "DebitCurrencyRate", "type": "TDBEdit"}, "debitcurrencylookup": {"name": "DebitCurrencyLookUp", "type": "TDBLookupComboBox"}, "convertationsymbollookup": {"name": "ConvertationSymbolLookUp", "type": "TDBLookupComboBox"}, "groupbox4": {"name": "GroupBox4", "type": "TGroupBox"}, "label5": {"name": "Label5", "type": "TLabel"}, "transdate": {"name": "TransDate", "type": "TDateTimePicker"}, "paneldebitrest": {"name": "PanelDebitRest", "type": "TPanel"}, "label1": {"name": "Label1", "type": "TLabel"}, "dbtext1": {"name": "DBText1", "type": "TDBText"}, "label2": {"name": "Label2", "type": "TLabel"}, "dbtext2": {"name": "DBText2", "type": "TDBText"}, "label6": {"name": "Label6", "type": "TLabel"}, "dblookupcombobox1": {"name": "DBLookupComboBox1", "type": "TDBLookupComboBox"}, "button1": {"name": "Button1", "type": "TButton"}, "editdebtbal_cn": {"name": "EditDebtBal_CN", "type": "TSearchEdit"}, "editdebtaccno": {"name": "EditDebtAccNo", "type": "TEdit"}, "dbedit1": {"name": "DBEdit1", "type": "TDBEdit"}, "panel16": {"name": "Panel16", "type": "TPanel"}, "trdestnoedit": {"name": "TrDestNoEdit", "type": "TEdit"}, "panel3": {"name": "Panel3", "type": "TPanel"}, "reportiddbedit": {"name": "ReportIDDBEdit", "type": "TDBEdit"}, "reportidlookup": {"name": "ReportIDLookUp", "type": "TDBLookupComboBox"}, "panel7": {"name": "Panel7", "type": "TPanel"}, "countriddbedit": {"name": "CountrIDDBEdit", "type": "TDBEdit"}, "countridlookup": {"name": "CountrIDLookUp", "type": "TDBLookupComboBox"}, "label7": {"name": "Label7", "type": "TLabel"}, "dbeditoperationno": {"name": "DBEditOperationNo", "type": "TDBEdit"}, "dbedit4": {"name": "DBEdit4", "type": "TDBEdit"}, "operationtypelookup": {"name": "OperationTypeLookUp", "type": "TDBLookupComboBox"}, "panel11": {"name": "Panel11", "type": "TPanel"}, "currencyeditdebit": {"name": "CurrencyEditDebit", "type": "TCurrencyEdit"}, "panel12": {"name": "Panel12", "type": "TPanel"}, "currencyeditcredit": {"name": "CurrencyEditCredit", "type": "TCurrencyEdit"}, "panel13": {"name": "Panel13", "type": "TPanel"}, "currencyeditlammount": {"name": "CurrencyEditLammount", "type": "TCurrencyEdit"}, "headercontrol1": {"name": "HeaderControl1", "type": "THeaderControl"}, "goaml": {"name": "GoAml", "type": "TButton"}, "panel18": {"name": "Panel18", "type": "TPanel"}, "dblc_mmx_transmode": {"name": "DBLC_MMX_Transmode", "type": "TDBLookupComboBox"}, "edittransmodecode": {"name": "EditTransModeCode", "type": "TEdit"}, "label8": {"name": "Label8", "type": "TLabel"}, "label9": {"name": "Label9", "type": "TLabel"}, "panel2": {"name": "Panel2", "type": "TPanel"}, "panelcredit": {"name": "PanelCredit", "type": "TPanel"}, "panelcreditrest": {"name": "PanelCreditRest", "type": "TPanel"}, "label3": {"name": "Label3", "type": "TLabel"}, "dbtext3": {"name": "DBText3", "type": "TDBText"}, "label4": {"name": "Label4", "type": "TLabel"}, "dbtext4": {"name": "DBText4", "type": "TDBText"}, "panel8": {"name": "Panel8", "type": "TPanel"}, "dbedit2": {"name": "DBEdit2", "type": "TDBEdit"}, "panel9": {"name": "Panel9", "type": "TPanel"}, "editkredbal_cn": {"name": "EditKredBal_CN", "type": "TSearchEdit"}, "editcredaccno": {"name": "EditCredAccNo", "type": "TEdit"}, "panel10": {"name": "Panel10", "type": "TPanel"}, "creditcurrencyidedit": {"name": "CreditCurrencyIDEdit", "type": "TDBEdit"}, "creditcurrencyrate": {"name": "CreditCurrencyRate", "type": "TDBEdit"}, "creditcurrencylookup": {"name": "CreditCurrencyLookUp", "type": "TDBLookupComboBox"}, "panel20": {"name": "Panel20", "type": "TPanel"}, "label10": {"name": "Label10", "type": "TLabel"}, "edit_dcustid": {"name": "Edit_DCustId", "type": "TEdit"}, "btndebtcustomer": {"name": "BtnDebtCustomer", "type": "TSpeedButton"}, "dcust": {"name": "DCust", "type": "TDBEdit"}, "panel21": {"name": "Panel21", "type": "TPanel"}, "label11": {"name": "Label11", "type": "TLabel"}, "edit_ccustid": {"name": "Edit_CCustId", "type": "TEdit"}, "btncredcustomer": {"name": "BtnCredCustomer", "type": "TSpeedButton"}, "ccust": {"name": "CCust", "type": "TDBEdit"}, "combobox1": {"name": "ComboBox1", "type": "TComboBox"}, "headercontrol2": {"name": "HeaderControl2", "type": "THeaderControl"}, "label12": {"name": "Label12", "type": "TLabel"}, "label13": {"name": "Label13", "type": "TLabel"}, "label14": {"name": "Label14", "type": "TLabel"}, "label15": {"name": "Label15", "type": "TLabel"}, "label16": {"name": "Label16", "type": "TLabel"}, "label17": {"name": "Label17", "type": "TLabel"}, "dbeditdestination": {"name": "DBEditDestination", "type": "TDBEdit"}, "actionlist1": {"name": "ActionList1", "type": "TActionList"}, "actioninsert": {"name": "ActionInsert", "type": "TAction"}, "actioncancel": {"name": "ActionCancel", "type": "TAction"}, "actionexit": {"name": "ActionExit", "type": "TAction"}, "button2": {"name": "Button2", "type": "TButton"}, "button3": {"name": "Button3", "type": "TButton"}, "transactionside": {"name": "TransactionSide", "type": "TTransactionSide"}, "operationmode": {"name": "OperationMode", "type": "TOperationMode"}, "debitcurrencyid": {"name": "DebitCurrencyID", "type": "Word"}, "creditcurrencyid": {"name": "CreditCurrencyID", "type": "Word"}, "modifed": {"name": "Modifed", "type": "Boolean"}, "text": {"name": "text", "type": "String"}, "db1": {"name": "db1", "type": "String"}, "cr1": {"name": "cr1", "type": "String"}}, {});
  U.init(async () => {
    U.var_("TransactionForm", null, "TTransactionForm");
  });
  U.method("TTransactionForm", "SIK", async function SIK(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"message": $.asRef(p0), result: undefined};
  await $.inherited(Self, "TTransactionForm", "SIK", null, arguments);
  return L0.result;
}, {"params": ["message"], "kind": "procedure", "ptypes": ["TMessage"]});
  U.func("LoadPlugin", async function LoadPlugin(Self, p0, p1, p2) {
  const C = $.chain(Self, U);
  const L0 = {"pluginname": $.copyArg(p0), "pluginparam": $.copyArg(p1), "pluginparam2": $.copyArg(p2), result: undefined, "pluginhandle": 0, "exportproc": null};
  await $.fixArgs(L0, ["pluginname", "pluginparam", "pluginparam2"]);
  L0["pluginhandle"] = (await $.call(C, "LoadPackage", [$.add((await $.call(C, "ExtractFilePath", [(await $.mv((await $.v(C, "Application")), "ExeName"))])), L0["pluginname"])]));
  if ($.truthy($.gt(L0["pluginhandle"], 0))) {
    L0["exportproc"] = (await $.call(C, "GetProcAddress", [L0["pluginhandle"], "InitPlugin"]));
    await $.stmt((await $.callv(L0["exportproc"], [L0["pluginparam"], L0["pluginparam2"]])));
  }
  return L0.result;
}, {"params": ["PluginName", "PluginParam", "PluginParam2"], "kind": "procedure", "ptypes": ["String", "String", "String"]});
  U.method("TTransactionForm", "SetCurrencyFilter", async function SetCurrencyFilter(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"accountdataset": $.copyArg(p0), "currencydataset": $.copyArg(p1), result: undefined, "accountid": 0};
  await $.fixArgs(L0, ["accountdataset", "currencydataset"]);
  L0["accountid"] = (await $.mv((await $.mcall(L0["accountdataset"], "FieldByName", ["ID"])), "AsInteger"));
  await $.stmt((await $.mcall(L0["accountdataset"], "Locate", ["ID", L0["accountid"], []])));
  return L0.result;
}, {"params": ["AccountDataSet", "CurrencyDataSet"], "kind": "procedure", "ptypes": ["TDataSet", "TDataSet"]});
  U.method("TTransactionForm", "OperationCancel", async function OperationCancel(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: undefined};
  {
    const $t1 = (await $.v(C, "transaction_DataModule"));
    const $t2 = (await $.wv([$t1], "Transactions", C, false));
    if ($.truthy($.in_((await $.wv([$t1, $t2], "State", C, false)), [(await $.wv([$t1, $t2], "dsInsert", C, false)), (await $.wv([$t1, $t2], "dsEdit", C, false))]))) {
      await $.stmt($.wcall([$t1, $t2], "Cancel", [], C));
      await $.stmt($.wcall([$t1, $t2], "RefreshRecord", [], C));
    }
  }
  return L0.result;
}, {"params": [], "kind": "procedure", "ptypes": []});
  U.method("TTransactionForm", "SetAmmounts", async function SetAmmounts(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"transactionside": $.copyArg(p0), result: undefined, "debetrate": 0, "creditrate": 0, "debitammount": 0, "creditammount": 0, "lammount": 0};
  await $.fixArgs(L0, ["transactionside"]);
  {
    const $t3 = (await $.v(C, "Transaction_DataModule"));
    await $.wset([$t3], "DebetRate", (await $.mv((await $.mcall((await $.wv([$t3], "DebitCurrencyData", C, false)), "FieldByName", ["Rate"])), "AsFloat")), { get: async () => L0["debetrate"], set: async (v) => { L0["debetrate"] = v; }, local: true });
    await $.wset([$t3], "CreditRate", (await $.mv((await $.mcall((await $.wv([$t3], "CreditCurrencyData", C, false)), "FieldByName", ["Rate"])), "AsFloat")), { get: async () => L0["creditrate"], set: async (v) => { L0["creditrate"] = v; }, local: true });
  }
  { const $t4 = L0["transactionside"];
    if ($.eq($t4, (await $.v(C, "tsDebet")))) {
      L0["lammount"] = (await $.call(C, "RoundNew", [$.mul((await $.mv((await $.v(C, "CurrencyEditDebit")), "Value")), L0["debetrate"]), 1000000]));
      if ($.truthy($.eq((await $.mv((await $.mcall((await $.mv((await $.v(C, "Transaction_DataModule")), "DebitCurrencyData")), "FieldByName", ["ID"])), "AsInteger")), (await $.mv((await $.mcall((await $.mv((await $.v(C, "Transaction_DataModule")), "CreditCurrencyData")), "FieldByName", ["ID"])), "AsInteger"))))) {
        L0["creditammount"] = (await $.mv((await $.v(C, "CurrencyEditDebit")), "Value"));
      } else {
        L0["creditammount"] = (await $.call(C, "RoundNew", [$.fdiv(L0["lammount"], L0["creditrate"]), 1000000]));
      }
      await $.mset((await $.v(C, "CurrencyEditLammount")), "Value", (await $.call(C, "RoundNew", [L0["lammount"], 100])));
      await $.mset((await $.v(C, "CurrencyEditCredit")), "Value", (await $.call(C, "RoundNew", [L0["creditammount"], 100])));
    }
    else if ($.eq($t4, (await $.v(C, "tsCredit")))) {
      L0["lammount"] = (await $.call(C, "RoundNew", [$.mul((await $.mv((await $.v(C, "CurrencyEditCredit")), "Value")), L0["creditrate"]), 1000000]));
      if ($.truthy($.eq((await $.mv((await $.mcall((await $.mv((await $.v(C, "Transaction_DataModule")), "DebitCurrencyData")), "FieldByName", ["ID"])), "AsInteger")), (await $.mv((await $.mcall((await $.mv((await $.v(C, "Transaction_DataModule")), "CreditCurrencyData")), "FieldByName", ["ID"])), "AsInteger"))))) {
        L0["debitammount"] = (await $.mv((await $.v(C, "CurrencyEditCredit")), "Value"));
      } else {
        L0["debitammount"] = (await $.call(C, "RoundNew", [$.fdiv(L0["lammount"], L0["debetrate"]), 1000000]));
      }
      await $.mset((await $.v(C, "CurrencyEditLammount")), "Value", (await $.call(C, "RoundNew", [L0["lammount"], 100])));
      await $.mset((await $.v(C, "CurrencyEditDebit")), "Value", (await $.call(C, "RoundNew", [L0["debitammount"], 100])));
    }
    else if ($.eq($t4, (await $.v(C, "tsUnknown")))) {
      {
        const $t5 = (await $.v(C, "Transaction_DataModule"));
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
  U.method("TTransactionForm", "SetCashSymbol", async function SetCashSymbol(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: undefined};
  {
    const $t6 = (await $.v(C, "Transaction_DataModule"));
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
  U.method("TTransactionForm", "CMDialogKey", async function CMDialogKey(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"msg": $.asRef(p0), result: undefined};
  await $.inherited(Self, "TTransactionForm", "CMDialogKey", null, arguments);
  return L0.result;
}, {"params": ["Msg"], "kind": "procedure", "ptypes": ["TWMKey"]});
  U.method("TTransactionForm", "Tr_Update", async function Tr_Update(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: undefined};
  {
    const $t8 = (await $.v(C, "Transaction_DataModule"));
    const $t9 = (await $.wv([$t8], "Transactions", C, false));
    await $.mset((await $.wv([$t8, $t9], "TransDate", C, false)), "DateTime", (await $.mv((await $.wcall([$t8, $t9], "FieldByName", ["TransactionDate"], C)), "AsDateTime")));
    {
      const $t10 = (await $.wv([$t8, $t9], "DebitAccData", C, false));
      await $.stmt($.wcall([$t8, $t9, $t10], "Close", [], C));
      await $.stmt((await $.wcall([$t8, $t9, $t10], "SetVariable", ["v_id", (await $.mv((await $.mcall((await $.wv([$t8, $t9, $t10], "Transactions", C, false)), "FieldByName", ["DEBITID"])), "asInteger"))], C)));
      await $.stmt($.wcall([$t8, $t9, $t10], "Open", [], C));
      await $.mset((await $.wv([$t8, $t9, $t10], "EditDebtBal_CN", C, false)), "Text", (await $.mv((await $.wcall([$t8, $t9, $t10], "FieldByName", ["BAL_CN"], C)), "asString")));
    }
    {
      const $t11 = (await $.wv([$t8, $t9], "CreditAccData", C, false));
      await $.stmt($.wcall([$t8, $t9, $t11], "Close", [], C));
      await $.stmt((await $.wcall([$t8, $t9, $t11], "SetVariable", ["v_id", (await $.mv((await $.mcall((await $.wv([$t8, $t9, $t11], "Transactions", C, false)), "FieldByName", ["CREDITID"])), "asInteger"))], C)));
      await $.stmt($.wcall([$t8, $t9, $t11], "Open", [], C));
      await $.mset((await $.wv([$t8, $t9, $t11], "EditKredBal_CN", C, false)), "Text", (await $.mv((await $.wcall([$t8, $t9, $t11], "FieldByName", ["BAL_CN"], C)), "asString")));
    }
    await $.mset((await $.wv([$t8, $t9], "EditDebtAccNo", C, false)), "Text", (await $.mv((await $.wcall([$t8, $t9], "FieldByName", ["DebitAccNo"], C)), "AsString")));
    await $.mset((await $.wv([$t8, $t9], "EditCredAccNo", C, false)), "Text", (await $.mv((await $.wcall([$t8, $t9], "FieldByName", ["CREDITACCNO"], C)), "AsString")));
    await $.mset((await $.wv([$t8, $t9], "CurrencyEditDebit", C, false)), "Value", (await $.mv((await $.wcall([$t8, $t9], "FieldByName", ["DebitAmount"], C)), "AsCurrency")));
    await $.mset((await $.wv([$t8, $t9], "CurrencyEditCredit", C, false)), "Value", (await $.mv((await $.wcall([$t8, $t9], "FieldByName", ["CreditAmount"], C)), "AsCurrency")));
    await $.mset((await $.wv([$t8, $t9], "CurrencyEditLammount", C, false)), "Value", (await $.mv((await $.wcall([$t8, $t9], "FieldByName", ["Lamount"], C)), "AsCurrency")));
    await $.mcall((await $.wv([$t8, $t9], "ODS_TransInfo", C, false)), "Close", []);
    await $.stmt((await $.mcall((await $.wv([$t8, $t9], "ODS_TransInfo", C, false)), "SetVariable", ["v_trID", (await $.mv((await $.wv([$t8, $t9], "TransactionsID", C, false)), "AsFloat"))])));
    await $.mcall((await $.wv([$t8, $t9], "ODS_TransInfo", C, false)), "Open", []);
    await $.mset((await $.wv([$t8, $t9], "DBLC_MMX_Transmode", C, false)), "KeyValue", (await $.mv((await $.mcall((await $.wv([$t8, $t9], "ODS_TransInfo", C, false)), "FieldByName", ["TRANSMODE_CODE"])), "AsInteger")));
    await $.mset((await $.wv([$t8, $t9], "EditTransModeCode", C, false)), "Text", (await $.mv((await $.mcall((await $.wv([$t8, $t9], "ODS_TransInfo", C, false)), "FieldByName", ["TRANSMODE_CODE"])), "AsString")));
    await $.mcall((await $.wv([$t8, $t9], "ODS_DebtCustomer", C, false)), "CloseAll", []);
    await $.stmt((await $.mcall((await $.wv([$t8, $t9], "ODS_DebtCustomer", C, false)), "SetVariable", ["v_custid", (await $.mv((await $.mcall((await $.wv([$t8, $t9], "ODS_TransInfo", C, false)), "FieldByName", ["DCUSTID"])), "AsInteger"))])));
    await $.mcall((await $.wv([$t8, $t9], "ODS_DebtCustomer", C, false)), "Open", []);
    await $.mset((await $.wv([$t8, $t9], "Edit_DCustId", C, false)), "Text", (await $.mv((await $.wv([$t8, $t9], "ODS_DebtCustomerID", C, false)), "AsString")));
    await $.mcall((await $.wv([$t8, $t9], "ODS_CredCustomer", C, false)), "CloseAll", []);
    await $.stmt((await $.mcall((await $.wv([$t8, $t9], "ODS_CredCustomer", C, false)), "SetVariable", ["v_custid", (await $.mv((await $.mcall((await $.wv([$t8, $t9], "ODS_TransInfo", C, false)), "FieldByName", ["CCUSTID"])), "AsInteger"))])));
    await $.mcall((await $.wv([$t8, $t9], "ODS_CredCustomer", C, false)), "Open", []);
    await $.mset((await $.wv([$t8, $t9], "Edit_CCustId", C, false)), "Text", (await $.mv((await $.wv([$t8, $t9], "ODS_CredCustomerID", C, false)), "AsString")));
  }
  return L0.result;
}, {"params": [], "kind": "procedure", "ptypes": []});
  U.method("TTransactionForm", "Tr_Insert", async function Tr_Insert(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: undefined};
  {
    const $t12 = (await $.v(C, "Transaction_DataModule"));
    const $t13 = (await $.wv([$t12], "Transactions", C, false));
    await $.mset((await $.wcall([$t12, $t13], "FieldByName", ["DebitCurrencyID"], C)), "AsInteger", 0);
    await $.mset((await $.wcall([$t12, $t13], "FieldByName", ["CreditCurrencyID"], C)), "AsInteger", 0);
    await $.mset((await $.wcall([$t12, $t13], "FieldByName", ["DebitRate"], C)), "AsFloat", (await $.mv((await $.mcall((await $.wv([$t12, $t13], "DebitCurrencyData", C, false)), "FieldByName", ["Rate"])), "AsFloat")));
    await $.mset((await $.wcall([$t12, $t13], "FieldByName", ["CreditRate"], C)), "AsFloat", (await $.mv((await $.mcall((await $.wv([$t12, $t13], "CreditCurrencyData", C, false)), "FieldByName", ["Rate"])), "AsFloat")));
    await $.mcall((await $.wcall([$t12, $t13], "FieldByName", ["DebitID"], C)), "Clear", []);
    await $.mcall((await $.wcall([$t12, $t13], "FieldByName", ["CreditID"], C)), "Clear", []);
    await $.stmt((await $.mcall((await $.wv([$t12, $t13], "Country", C, false)), "Locate", ["name", "Azərbaycan", [(await $.wv([$t12, $t13], "loCaseInsensitive", C, false))]])));
    await $.mset((await $.wv([$t12, $t13], "CountrIDDBEdit", C, false)), "Text", (await $.mv((await $.mcall((await $.wv([$t12, $t13], "Country", C, false)), "FieldByName", ["id"])), "AsString")));
    await $.mset((await $.wv([$t12, $t13], "CountrIDLookUp", C, false)), "KeyValue", (await $.mv((await $.mcall((await $.wv([$t12, $t13], "Country", C, false)), "FieldByName", ["id"])), "AsInteger")));
    await $.mset((await $.mv((await $.wv([$t12, $t13], "Transaction_DataModule", C, false)), "TransactionsREPORTID")), "Value", 0);
    await $.mset((await $.wv([$t12, $t13], "DBLC_MMX_Transmode", C, false)), "KeyValue", (-(1)));
    await $.mset((await $.wv([$t12, $t13], "EditTransModeCode", C, false)), "Text", "");
  }
  return L0.result;
}, {"params": [], "kind": "procedure", "ptypes": []});
  U.method("TTransactionForm", "Tr_Credit", async function Tr_Credit(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: undefined};
  {
    const $t14 = (await $.v(C, "Transaction_DataModule"));
    const $t15 = (await $.wv([$t14], "Transactions", C, false));
    await $.mset((await $.wcall([$t14, $t15], "FieldByName", ["DebitCurrencyID"], C)), "AsInteger", 0);
    await $.mset((await $.wcall([$t14, $t15], "FieldByName", ["CreditCurrencyID"], C)), "AsInteger", 0);
    await $.mset((await $.wcall([$t14, $t15], "FieldByName", ["DebitRate"], C)), "AsFloat", (await $.mv((await $.mcall((await $.wv([$t14, $t15], "DebitCurrencyData", C, false)), "FieldByName", ["Rate"])), "AsFloat")));
    await $.mset((await $.wcall([$t14, $t15], "FieldByName", ["CreditRate"], C)), "AsFloat", (await $.mv((await $.mcall((await $.wv([$t14, $t15], "CreditCurrencyData", C, false)), "FieldByName", ["Rate"])), "AsFloat")));
    await $.mcall((await $.wcall([$t14, $t15], "FieldByName", ["DebitID"], C)), "Clear", []);
    await $.mcall((await $.wcall([$t14, $t15], "FieldByName", ["CreditID"], C)), "Clear", []);
    await $.stmt((await $.mcall((await $.wv([$t14, $t15], "Country", C, false)), "Locate", ["name", "Azərbaycan", [(await $.wv([$t14, $t15], "loCaseInsensitive", C, false))]])));
    await $.mset((await $.wv([$t14, $t15], "CountrIDDBEdit", C, false)), "Text", (await $.mv((await $.mcall((await $.wv([$t14, $t15], "Country", C, false)), "FieldByName", ["id"])), "AsString")));
    await $.mset((await $.wv([$t14, $t15], "CountrIDLookUp", C, false)), "KeyValue", (await $.mv((await $.mcall((await $.wv([$t14, $t15], "Country", C, false)), "FieldByName", ["id"])), "AsInteger")));
    await $.mset((await $.mv((await $.wv([$t14, $t15], "Transaction_DataModule", C, false)), "TransactionsREPORTID")), "Value", 0);
    await $.mset((await $.wv([$t14, $t15], "DBLC_MMX_Transmode", C, false)), "KeyValue", (-(1)));
    await $.mset((await $.wv([$t14, $t15], "EditTransModeCode", C, false)), "Text", "");
  }
  return L0.result;
}, {"params": [], "kind": "procedure", "ptypes": []});
  U.method("TTransactionForm", "Tr_Debt", async function Tr_Debt(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: undefined};
  {
    const $t16 = (await $.v(C, "Transaction_DataModule"));
    const $t17 = (await $.wv([$t16], "Transactions", C, false));
    await $.mset((await $.wcall([$t16, $t17], "FieldByName", ["DebitCurrencyID"], C)), "AsInteger", 0);
    await $.mset((await $.wcall([$t16, $t17], "FieldByName", ["CreditCurrencyID"], C)), "AsInteger", 0);
    await $.mset((await $.wcall([$t16, $t17], "FieldByName", ["DebitRate"], C)), "AsFloat", (await $.mv((await $.mcall((await $.wv([$t16, $t17], "DebitCurrencyData", C, false)), "FieldByName", ["Rate"])), "AsFloat")));
    await $.mset((await $.wcall([$t16, $t17], "FieldByName", ["CreditRate"], C)), "AsFloat", (await $.mv((await $.mcall((await $.wv([$t16, $t17], "CreditCurrencyData", C, false)), "FieldByName", ["Rate"])), "AsFloat")));
    await $.mcall((await $.wcall([$t16, $t17], "FieldByName", ["DebitID"], C)), "Clear", []);
    await $.mcall((await $.wcall([$t16, $t17], "FieldByName", ["CreditID"], C)), "Clear", []);
    await $.stmt((await $.mcall((await $.wv([$t16, $t17], "Country", C, false)), "Locate", ["name", "Azərbaycan", [(await $.wv([$t16, $t17], "loCaseInsensitive", C, false))]])));
    await $.mset((await $.wv([$t16, $t17], "CountrIDDBEdit", C, false)), "Text", (await $.mv((await $.mcall((await $.wv([$t16, $t17], "Country", C, false)), "FieldByName", ["id"])), "AsString")));
    await $.mset((await $.wv([$t16, $t17], "CountrIDLookUp", C, false)), "KeyValue", (await $.mv((await $.mcall((await $.wv([$t16, $t17], "Country", C, false)), "FieldByName", ["id"])), "AsInteger")));
    await $.mset((await $.mv((await $.wv([$t16, $t17], "Transaction_DataModule", C, false)), "TransactionsREPORTID")), "Value", 0);
    await $.mset((await $.wv([$t16, $t17], "DBLC_MMX_Transmode", C, false)), "KeyValue", (-(1)));
    await $.mset((await $.wv([$t16, $t17], "EditTransModeCode", C, false)), "Text", "");
  }
  return L0.result;
}, {"params": [], "kind": "procedure", "ptypes": []});
  U.method("TTransactionForm", "Init", async function Init(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: undefined};
  {
    const $t18 = (await $.v(C, "Transaction_DataModule"));
    const $t19 = (await $.wv([$t18], "Transactions", C, false));
    { const $t20 = (await $.wv([$t18, $t19], "OperationMode", C, false));
      if ($.eq($t20, (await $.wv([$t18, $t19], "omInsert", C, false)))) {
        await $.mset((await $.wcall([$t18, $t19], "FieldByName", ["DebitCurrencyID"], C)), "AsInteger", 0);
        await $.mset((await $.wcall([$t18, $t19], "FieldByName", ["CreditCurrencyID"], C)), "AsInteger", 0);
        await $.mset((await $.wcall([$t18, $t19], "FieldByName", ["DebitRate"], C)), "AsFloat", (await $.mv((await $.mcall((await $.wv([$t18, $t19], "DebitCurrencyData", C, false)), "FieldByName", ["Rate"])), "AsFloat")));
        await $.mset((await $.wcall([$t18, $t19], "FieldByName", ["CreditRate"], C)), "AsFloat", (await $.mv((await $.mcall((await $.wv([$t18, $t19], "CreditCurrencyData", C, false)), "FieldByName", ["Rate"])), "AsFloat")));
        await $.mcall((await $.wcall([$t18, $t19], "FieldByName", ["DebitID"], C)), "Clear", []);
        await $.mcall((await $.wcall([$t18, $t19], "FieldByName", ["CreditID"], C)), "Clear", []);
        await $.stmt((await $.mcall((await $.wv([$t18, $t19], "Country", C, false)), "Locate", ["name", "Azərbaycan", [(await $.wv([$t18, $t19], "loCaseInsensitive", C, false))]])));
        await $.mset((await $.wv([$t18, $t19], "CountrIDDBEdit", C, false)), "Text", (await $.mv((await $.mcall((await $.wv([$t18, $t19], "Country", C, false)), "FieldByName", ["id"])), "AsString")));
        await $.mset((await $.wv([$t18, $t19], "CountrIDLookUp", C, false)), "KeyValue", (await $.mv((await $.mcall((await $.wv([$t18, $t19], "Country", C, false)), "FieldByName", ["id"])), "AsInteger")));
      }
      else if ($.eq($t20, (await $.wv([$t18, $t19], "omEdit", C, false)))) {
        await $.mset((await $.wv([$t18, $t19], "TransDate", C, false)), "DateTime", (await $.mv((await $.wcall([$t18, $t19], "FieldByName", ["TransactionDate"], C)), "AsDateTime")));
        {
          const $t21 = (await $.wv([$t18, $t19], "DebitAccData", C, false));
          await $.stmt($.wcall([$t18, $t19, $t21], "Close", [], C));
          await $.stmt((await $.wcall([$t18, $t19, $t21], "SetVariable", ["v_id", (await $.mv((await $.mcall((await $.wv([$t18, $t19, $t21], "Transactions", C, false)), "FieldByName", ["DEBITID"])), "asInteger"))], C)));
          await $.stmt($.wcall([$t18, $t19, $t21], "Open", [], C));
          await $.mset((await $.wv([$t18, $t19, $t21], "EditDebtBal_CN", C, false)), "Text", (await $.mv((await $.wcall([$t18, $t19, $t21], "FieldByName", ["BAL_CN"], C)), "asString")));
        }
        {
          const $t22 = (await $.wv([$t18, $t19], "CreditAccData", C, false));
          await $.stmt($.wcall([$t18, $t19, $t22], "Close", [], C));
          await $.stmt((await $.wcall([$t18, $t19, $t22], "SetVariable", ["v_id", (await $.mv((await $.mcall((await $.wv([$t18, $t19, $t22], "Transactions", C, false)), "FieldByName", ["CREDITID"])), "asInteger"))], C)));
          await $.stmt($.wcall([$t18, $t19, $t22], "Open", [], C));
          await $.mset((await $.wv([$t18, $t19, $t22], "EditKredBal_CN", C, false)), "Text", (await $.mv((await $.wcall([$t18, $t19, $t22], "FieldByName", ["BAL_CN"], C)), "asString")));
        }
        await $.mset((await $.wv([$t18, $t19], "EditDebtAccNo", C, false)), "Text", (await $.mv((await $.wcall([$t18, $t19], "FieldByName", ["DebitAccNo"], C)), "AsString")));
        await $.mset((await $.wv([$t18, $t19], "EditCredAccNo", C, false)), "Text", (await $.mv((await $.wcall([$t18, $t19], "FieldByName", ["CREDITACCNO"], C)), "AsString")));
        await $.mset((await $.wv([$t18, $t19], "CurrencyEditDebit", C, false)), "Value", (await $.mv((await $.wcall([$t18, $t19], "FieldByName", ["DebitAmount"], C)), "AsCurrency")));
        await $.mset((await $.wv([$t18, $t19], "CurrencyEditCredit", C, false)), "Value", (await $.mv((await $.wcall([$t18, $t19], "FieldByName", ["CreditAmount"], C)), "AsCurrency")));
        await $.mset((await $.wv([$t18, $t19], "CurrencyEditLammount", C, false)), "Value", (await $.mv((await $.wcall([$t18, $t19], "FieldByName", ["Lamount"], C)), "AsCurrency")));
        await $.mcall((await $.wv([$t18, $t19], "ODS_TransInfo", C, false)), "Close", []);
        await $.stmt((await $.mcall((await $.wv([$t18, $t19], "ODS_TransInfo", C, false)), "SetVariable", ["v_trID", (await $.mv((await $.wv([$t18, $t19], "TransactionsID", C, false)), "AsFloat"))])));
        await $.mcall((await $.wv([$t18, $t19], "ODS_TransInfo", C, false)), "Open", []);
        await $.mset((await $.wv([$t18, $t19], "DBLC_MMX_Transmode", C, false)), "KeyValue", (await $.mv((await $.mcall((await $.wv([$t18, $t19], "ODS_TransInfo", C, false)), "FieldByName", ["TRANSMODE_CODE"])), "AsInteger")));
        await $.mset((await $.wv([$t18, $t19], "EditTransModeCode", C, false)), "Text", (await $.mv((await $.mcall((await $.wv([$t18, $t19], "ODS_TransInfo", C, false)), "FieldByName", ["TRANSMODE_CODE"])), "AsString")));
        await $.mcall((await $.wv([$t18, $t19], "ODS_DebtCustomer", C, false)), "CloseAll", []);
        await $.stmt((await $.mcall((await $.wv([$t18, $t19], "ODS_DebtCustomer", C, false)), "SetVariable", ["v_custid", (await $.mv((await $.mcall((await $.wv([$t18, $t19], "ODS_TransInfo", C, false)), "FieldByName", ["DCUSTID"])), "AsInteger"))])));
        await $.mcall((await $.wv([$t18, $t19], "ODS_DebtCustomer", C, false)), "Open", []);
        await $.mset((await $.wv([$t18, $t19], "Edit_DCustId", C, false)), "Text", (await $.mv((await $.wv([$t18, $t19], "ODS_DebtCustomerID", C, false)), "AsString")));
        await $.mcall((await $.wv([$t18, $t19], "ODS_CredCustomer", C, false)), "CloseAll", []);
        await $.stmt((await $.mcall((await $.wv([$t18, $t19], "ODS_CredCustomer", C, false)), "SetVariable", ["v_custid", (await $.mv((await $.mcall((await $.wv([$t18, $t19], "ODS_TransInfo", C, false)), "FieldByName", ["CCUSTID"])), "AsInteger"))])));
        await $.mcall((await $.wv([$t18, $t19], "ODS_CredCustomer", C, false)), "Open", []);
        await $.mset((await $.wv([$t18, $t19], "Edit_CCustId", C, false)), "Text", (await $.mv((await $.wv([$t18, $t19], "ODS_CredCustomerID", C, false)), "AsString")));
      }
      else if ($.eq($t20, (await $.wv([$t18, $t19], "omCommission", C, false)))) {
        await $.mset((await $.wcall([$t18, $t19], "FieldByName", ["DebitCurrencyID"], C)), "AsInteger", (await $.mv((await $.mcall((await $.wv([$t18, $t19], "Commission", C, false)), "FieldByName", ["DebitCurrencyID"])), "AsInteger")));
        await $.mset((await $.wcall([$t18, $t19], "FieldByName", ["CreditCurrencyID"], C)), "AsInteger", (await $.mv((await $.mcall((await $.wv([$t18, $t19], "Commission", C, false)), "FieldByName", ["CreditCurrencyID"])), "AsInteger")));
        await $.mset((await $.wcall([$t18, $t19], "FieldByName", ["DebitID"], C)), "AsInteger", (await $.mv((await $.mcall((await $.wv([$t18, $t19], "Commission", C, false)), "FieldByName", ["Debt"])), "AsInteger")));
        await $.mset((await $.wcall([$t18, $t19], "FieldByName", ["CreditID"], C)), "AsInteger", (await $.mv((await $.mcall((await $.wv([$t18, $t19], "Commission", C, false)), "FieldByName", ["Credit"])), "AsInteger")));
        await $.mset((await $.wv([$t18, $t19], "EditDebtAccNo", C, false)), "Text", (await $.mv((await $.wcall([$t18, $t19], "FieldByName", ["DebitAccNo"], C)), "AsString")));
        await $.mset((await $.wcall([$t18, $t19], "FieldByName", ["Name"], C)), "AsString", (await $.mv((await $.mcall((await $.wv([$t18, $t19], "Commission", C, false)), "FieldByName", ["Assignment"])), "AsString")));
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
    const $t23 = (await $.call(C, "TCurrencyEdit", [L0["sender"]]));
    if ($.truthy($.eq((await $.wv([$t23], "DecimalSeparator", C, false)), (await $.wv([$t23], "ThousandSeparator", C, false))))) {
      return L0.result;
    }
    if ($.truthy($.eq((await $.wcall([$t23], "Pos", [(await $.wv([$t23], "DecimalSeparator", C, false)), (await $.wv([$t23], "Text", C, false))], C)), 0))) {
      return L0.result;
    }
    await $.wset([$t23], "Sel", (await $.wv([$t23], "SelStart", C, false)), { get: async () => L0["sel"], set: async (v) => { L0["sel"] = v; }, local: true });
    await $.wset([$t23], "X", $.sub($.sub((await $.wcall([$t23], "Length", [(await $.wv([$t23], "Text", C, false))], C)), (await $.wcall([$t23], "Pos", [(await $.wv([$t23], "DecimalSeparator", C, false)), (await $.wv([$t23], "Text", C, false))], C))), (await $.wv([$t23], "CurrencyDecimals", C, false))), { get: async () => L0["x"], set: async (v) => { L0["x"] = v; }, local: true });
    if ($.truthy(($.gt((await $.wv([$t23], "X", { get: async () => L0["x"], set: async (v) => { L0["x"] = v; }, local: true }, false)), 0)))) {
      await $.wset([$t23], "Text", (await $.wcall([$t23], "Copy", [(await $.wv([$t23], "Text", C, false)), 0, ($.sub((await $.wcall([$t23], "Length", [(await $.wv([$t23], "Text", C, false))], C)), (await $.wv([$t23], "X", { get: async () => L0["x"], set: async (v) => { L0["x"] = v; }, local: true }, false))))], C)), C);
      await $.wset([$t23], "SelStart", (await $.wv([$t23], "Sel", { get: async () => L0["sel"], set: async (v) => { L0["sel"] = v; }, local: true }, false)), C);
    }
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TTransactionForm", "RoundNew", async function RoundNew(Self, p0, p1) {
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
  U.method("TTransactionForm", "ClearAmmounts", async function ClearAmmounts(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: undefined};
  await $.mset((await $.v(C, "CurrencyEditDebit")), "Value", 0.0);
  await $.mset((await $.v(C, "CurrencyEditCredit")), "Value", 0.0);
  await $.mset((await $.v(C, "CurrencyEditLammount")), "Value", 0.0);
  return L0.result;
}, {"params": [], "kind": "procedure", "ptypes": []});
  U.method("TTransactionForm", "ReportIDDBEditKeyPress", async function ReportIDDBEditKeyPress(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "key": $.asRef(p1), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.eq((await L0["key"].get()), "\r"))) {
    await $.mcall((await $.v(C, "ReportIDLookUp")), "SetFocus", []);
  }
  return L0.result;
}, {"params": ["Sender", "Key"], "kind": "procedure", "ptypes": ["TObject", "Char"]});
  U.method("TTransactionForm", "ReportIDLookUpKeyPress", async function ReportIDLookUpKeyPress(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "key": $.asRef(p1), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.eq((await L0["key"].get()), "\r"))) {
    await $.mcall((await $.v(C, "EditTransModeCode")), "SetFocus", []);
  }
  return L0.result;
}, {"params": ["Sender", "Key"], "kind": "procedure", "ptypes": ["TObject", "Char"]});
  U.method("TTransactionForm", "ResetAccountFilter", async function ResetAccountFilter(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"accountdataset": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["accountdataset"]);
  {
    const $t24 = L0["accountdataset"];
    if ($.truthy($.ne((await $.wv([$t24], "Filter", C, false)), ""))) {
      await $.wset([$t24], "Filtered", (await $.wv([$t24], "False", C, false)), C);
      await $.wset([$t24], "Filter", "", C);
    }
  }
  return L0.result;
}, {"params": ["AccountDataSet"], "kind": "procedure", "ptypes": ["TDataSet"]});
  U.method("TTransactionForm", "SaveTransaction", async function SaveTransaction(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: undefined};
  {
    const $t25 = (await $.v(C, "Transaction_DataModule"));
    const $t26 = (await $.wv([$t25], "Transactions", C, false));
    if ($.truthy($.in_((await $.wv([$t25, $t26], "State", C, false)), [(await $.wv([$t25, $t26], "dsEdit", C, false)), (await $.wv([$t25, $t26], "dsInsert", C, false))]))) {
      if ($.truthy((await $.or_(($.eq((await $.mv((await $.mcall((await $.wv([$t25, $t26], "DebitAccData", C, false)), "FieldByName", ["fromTrans"])), "AsInteger")), 1)), async () => ($.eq((await $.mv((await $.mcall((await $.wv([$t25, $t26], "CreditAccData", C, false)), "FieldByName", ["fromTrans"])), "AsInteger")), 1)))))) {
        await $.stmt((await $.wcall([$t25, $t26], "ShowMessage", ["Bu balans hesabı ilə bu moduldan əməliyyat aparmaq olmaz!"], C)));
        return L0.result;
      }
      {
        const $t27 = (await $.wv([$t25, $t26], "ODS_VidOPTrDel", C, false));
        await $.stmt($.wcall([$t25, $t26, $t27], "Close", [], C));
        await $.stmt((await $.wcall([$t25, $t26, $t27], "SetVariable", ["v_ID", (await $.mv((await $.mcall((await $.mv((await $.wv([$t25, $t26, $t27], "Transaction_DataModule", C, false)), "Transactions")), "FieldByName", ["OperationCode"])), "AsInteger"))], C)));
        await $.stmt($.wcall([$t25, $t26, $t27], "Open", [], C));
      }
      if ($.truthy($.eq((await $.mv((await $.mcall((await $.wv([$t25, $t26], "ODS_VidOPTrDel", C, false)), "FieldByName", ["Cnt"])), "AsInteger")), 1))) {
        await $.stmt((await $.wcall([$t25, $t26], "ShowMessage", ["Bu növ əməliyyatı bu moduldan redaktə etmək olmaz."], C)));
        return L0.result;
      }
      await $.mset((await $.wcall([$t25, $t26], "FieldByName", ["TransactionDate"], C)), "AsDateTime", (await $.wcall([$t25, $t26], "Int", [(await $.mv((await $.wv([$t25, $t26], "TransDate", C, false)), "DateTime"))], C)));
      await $.mset((await $.wcall([$t25, $t26], "FieldByName", ["DebitAmount"], C)), "AsCurrency", (await $.mv((await $.wv([$t25, $t26], "CurrencyEditDebit", C, false)), "Value")));
      await $.mset((await $.wcall([$t25, $t26], "FieldByName", ["CreditAmount"], C)), "AsCurrency", (await $.mv((await $.wv([$t25, $t26], "CurrencyEditCredit", C, false)), "Value")));
      await $.mset((await $.wcall([$t25, $t26], "FieldByName", ["Lamount"], C)), "AsCurrency", (await $.mv((await $.wv([$t25, $t26], "CurrencyEditLammount", C, false)), "Value")));
      await $.mset((await $.wcall([$t25, $t26], "FieldByName", ["Status"], C)), "AsInteger", 1);
      await $.mset((await $.wcall([$t25, $t26], "FieldByName", ["DebitAccNo"], C)), "AsString", (await $.mv((await $.wv([$t25, $t26], "EditDebtAccNo", C, false)), "Text")));
      await $.mset((await $.wcall([$t25, $t26], "FieldByName", ["CreditAccNo"], C)), "AsString", (await $.mv((await $.wv([$t25, $t26], "EditCredAccNo", C, false)), "Text")));
      await $.mset((await $.wcall([$t25, $t26], "FieldByName", ["DebitCurrencySName"], C)), "AsString", (await $.mv((await $.mcall((await $.wv([$t25, $t26], "DebitCurrencyData", C, false)), "FieldByName", ["SName"])), "AsString")));
      await $.mset((await $.wcall([$t25, $t26], "FieldByName", ["CreditCurrencySName"], C)), "AsString", (await $.mv((await $.mcall((await $.wv([$t25, $t26], "CreditCurrencyData", C, false)), "FieldByName", ["SName"])), "AsString")));
      await $.mset((await $.wcall([$t25, $t26], "FieldByName", ["OperationNo"], C)), "AsString", (await $.mv((await $.wv([$t25, $t26], "DBEditOperationNo", C, false)), "Text")));
      await $.mset((await $.wcall([$t25, $t26], "FieldByName", ["COUNTRID"], C)), "AsString", (await $.mv((await $.wv([$t25, $t26], "CountrIDDBEdit", C, false)), "Text")));
      if ($.truthy($.eq((await $.mv((await $.wv([$t25, $t26], "OperationTypeLookUp", C, false)), "Text")), (await $.wv([$t25, $t26], "EmptyStr", C, false))))) {
        await $.mset((await $.wcall([$t25, $t26], "FieldByName", ["OperationCode"], C)), "Value", (await $.wv([$t25, $t26], "Null", C, false)));
      }
      await $.stmt((await $.mcall((await $.wv([$t25, $t26], "OP_MMX", C, false)), "CallProcedure", ["mmx_transaction", [(await $.mv((await $.mcall((await $.wv([$t25, $t26], "DebitAccData", C, false)), "FieldByName", ["ID"])), "AsInteger")), (await $.mv((await $.mcall((await $.wv([$t25, $t26], "Sysdat", C, false)), "FieldByName", ["tek_dat"])), "AsDateTime")), (await $.mv((await $.wv([$t25, $t26], "CurrencyEditLammount", C, false)), "Value")), (await $.mv((await $.wv([$t25, $t26], "DBLC_MMX_Transmode", C, false)), "KeyValue"))]])));
      await $.stmt((await $.mcall((await $.wv([$t25, $t26], "OP_MMX", C, false)), "CallProcedure", ["mmx_transaction", [(await $.mv((await $.mcall((await $.wv([$t25, $t26], "CreditAccData", C, false)), "FieldByName", ["ID"])), "AsInteger")), (await $.mv((await $.mcall((await $.wv([$t25, $t26], "Sysdat", C, false)), "FieldByName", ["tek_dat"])), "AsDateTime")), (await $.mv((await $.wv([$t25, $t26], "CurrencyEditLammount", C, false)), "Value")), (await $.mv((await $.wv([$t25, $t26], "DBLC_MMX_Transmode", C, false)), "KeyValue"))]])));
      await $.stmt($.wcall([$t25, $t26], "Post", [], C));
      await $.stmt((await $.wcall([$t25, $t26], "SBCommit", [], C)));
    }
  }
  return L0.result;
}, {"params": [], "kind": "procedure", "ptypes": []});
  U.method("TTransactionForm", "ResetTransaction", async function ResetTransaction(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: undefined};
  await $.stmt($.call(C, "OperationCancel", []));
  await $.stmt($.call(C, "ClearAmmounts", []));
  {
    const $t28 = (await $.v(C, "Transaction_DataModule"));
    const $t29 = (await $.wv([$t28], "Transactions", C, false));
    await $.stmt($.wcall([$t28, $t29], "Insert", [], C));
    await $.mset((await $.wcall([$t28, $t29], "FieldByName", ["DebitCurrencyID"], C)), "AsInteger", (await $.wv([$t28, $t29], "DebitCurrencyID", C, false)));
    await $.mset((await $.wcall([$t28, $t29], "FieldByName", ["CreditCurrencyID"], C)), "AsInteger", (await $.wv([$t28, $t29], "CreditCurrencyID", C, false)));
  }
  await $.mcall((await $.v(C, "EditDebtAccNo")), "Clear", []);
  await $.mcall((await $.v(C, "EditDebtBal_CN")), "Clear", []);
  await $.mcall((await $.v(C, "EditKredBal_CN")), "Clear", []);
  await $.mcall((await $.v(C, "EditCredAccNo")), "Clear", []);
  await $.mset((await $.v(C, "DBLC_MMX_Transmode")), "KeyValue", (await $.v(C, "null")));
  await $.mcall((await $.v(C, "EditTransModeCode")), "Clear", []);
  await $.mset((await $.v(C, "EditTransModeCode")), "Color", (await $.v(C, "clWhite")));
  await $.mcall((await $.mv((await $.v(C, "Transaction_DataModule")), "DebitAccData")), "Close", []);
  await $.mcall((await $.mv((await $.v(C, "Transaction_DataModule")), "CreditAccData")), "Close", []);
  await $.mcall((await $.mv((await $.v(C, "Transaction_DataModule")), "ODS_DebtCustomer")), "Close", []);
  await $.mcall((await $.mv((await $.v(C, "Transaction_DataModule")), "ODS_CredCustomer")), "Close", []);
  await $.mcall((await $.v(C, "Edit_DCustId")), "Clear", []);
  await $.mcall((await $.v(C, "Edit_CCustId")), "Clear", []);
  await $.mcall((await $.v(C, "DebitCurrencyIDEdit")), "SetFocus", []);
  return L0.result;
}, {"params": [], "kind": "procedure", "ptypes": []});
  U.method("TTransactionForm", "Scroll", async function Scroll(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: undefined};
  if ($.truthy($.eq((await $.v(C, "OperationMode")), (await $.v(C, "omEdit"))))) {
    {
      const $t30 = (await $.v(C, "Transaction_DataModule"));
      await $.mcall((await $.wv([$t30], "DebitAccData", C, false)), "Next", []);
      await $.mcall((await $.wv([$t30], "DebitAccData", C, false)), "Prior", []);
      await $.mcall((await $.wv([$t30], "CreditAccData", C, false)), "Next", []);
      await $.mcall((await $.wv([$t30], "CreditAccData", C, false)), "Prior", []);
    }
  }
  return L0.result;
}, {"params": [], "kind": "procedure", "ptypes": []});
  U.func("CheckCurrency", async function CheckCurrency(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: false};
  await $.fixArgs(L0, ["value"]);
  {
    const $t31 = (await $.v(C, "Transaction_DataModule"));
    const $t32 = (await $.wv([$t31], "Currency", C, false));
    await $.wset([$t31, $t32], "Result", (await $.wcall([$t31, $t32], "Locate", ["valute", (await $.wv([$t31, $t32], "Value", { get: async () => L0["value"], set: async (v) => { L0["value"] = v; }, local: true }, false)), []], C)), { get: async () => L0["result"], set: async (v) => { L0["result"] = v; }, local: true });
  }
  return L0.result;
}, {"params": ["Value"], "kind": "function", "ptypes": ["Variant"]});
  U.method("TTransactionForm", "Edit_DCustIdChange", async function Edit_DCustIdChange(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.set(C, "Modifed", true);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TTransactionForm", "Edit_DCustIdKeyPress", async function Edit_DCustIdKeyPress(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "key": $.asRef(p1), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.eq((await L0["key"].get()), "\r"))) {
    if ($.truthy($.ne((await $.call(C, "trim", [(await $.mv((await $.v(C, "Edit_DCustID")), "Text"))])), ""))) {
      {
        const $t33 = (await $.mv((await $.v(C, "Transaction_DataModule")), "ODS_DebtCustomer"));
        await $.stmt($.wcall([$t33], "Close", [], C));
        await $.stmt((await $.wcall([$t33], "SetVariable", ["v_CustID", (await $.mv((await $.wv([$t33], "Edit_DCustID", C, false)), "Text"))], C)));
        await $.stmt($.wcall([$t33], "Open", [], C));
        await $.mcall((await $.wv([$t33], "Edit_CCustId", C, false)), "SetFocus", []);
      }
    } else {
      await $.mcall((await $.v(C, "DCust")), "Clear", []);
    }
  } else {
    if ($.truthy($.not(($.in_((await L0["key"].get()), [...$.range("0","9"), "\b"]))))) {
      await L0["key"].set("\u0000");
    }
  }
  return L0.result;
}, {"params": ["Sender", "Key"], "kind": "procedure", "ptypes": ["TObject", "Char"]});
  U.method("TTransactionForm", "Edit_DCustIdKeyUp", async function Edit_DCustIdKeyUp(Self, p0, p1, p2) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "key": $.asRef(p1), "shift": $.copyArg(p2), result: undefined};
  await $.fixArgs(L0, ["sender", "shift"]);
  await $.mcall((await $.v(C, "EditDebtBal_CN")), "Clear", []);
  await $.mcall((await $.v(C, "EditDebtAccNo")), "Clear", []);
  return L0.result;
}, {"params": ["Sender", "Key", "Shift"], "kind": "procedure", "ptypes": ["TObject", "Word", "TShiftState"]});
  U.method("TTransactionForm", "Edit_CCustIDKeyPress", async function Edit_CCustIDKeyPress(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "key": $.asRef(p1), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.eq((await L0["key"].get()), "\r"))) {
    if ($.truthy($.ne((await $.call(C, "trim", [(await $.mv((await $.v(C, "Edit_CCustID")), "Text"))])), ""))) {
      {
        const $t34 = (await $.mv((await $.v(C, "Transaction_DataModule")), "ODS_CredCustomer"));
        await $.stmt($.wcall([$t34], "Close", [], C));
        await $.stmt((await $.wcall([$t34], "SetVariable", ["v_CustID", (await $.mv((await $.wv([$t34], "Edit_CCustID", C, false)), "Text"))], C)));
        await $.stmt($.wcall([$t34], "Open", [], C));
        await $.mcall((await $.wv([$t34], "CurrencyEditDebit", C, false)), "SetFocus", []);
      }
    } else {
      await $.mcall((await $.v(C, "CCust")), "Clear", []);
    }
  } else {
    if ($.truthy($.not(($.in_((await L0["key"].get()), [...$.range("0","9"), "\b"]))))) {
      await L0["key"].set("\u0000");
    }
  }
  return L0.result;
}, {"params": ["Sender", "Key"], "kind": "procedure", "ptypes": ["TObject", "Char"]});
  U.method("TTransactionForm", "Edit_CCustIdKeyUp", async function Edit_CCustIdKeyUp(Self, p0, p1, p2) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "key": $.asRef(p1), "shift": $.copyArg(p2), result: undefined};
  await $.fixArgs(L0, ["sender", "shift"]);
  await $.mcall((await $.v(C, "EditKredBal_CN")), "Clear", []);
  await $.mcall((await $.v(C, "EditCredAccNo")), "Clear", []);
  return L0.result;
}, {"params": ["Sender", "Key", "Shift"], "kind": "procedure", "ptypes": ["TObject", "Word", "TShiftState"]});
  U.method("TTransactionForm", "FormClose", async function FormClose(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "action": $.asRef(p1), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  try {
    {
      const $t36 = (await $.v(C, "Transaction_DataModule"));
      await $.stmt((await $.wcall([$t36], "ResetAccountFilter", [(await $.wv([$t36], "DebitAccData", C, false))], C)));
      await $.stmt((await $.wcall([$t36], "ResetAccountFilter", [(await $.wv([$t36], "CreditAccData", C, false))], C)));
      await $.stmt((await $.wcall([$t36], "ResetAccountFilter", [(await $.wv([$t36], "CashSymbols", C, false))], C)));
      await $.mcall((await $.wv([$t36], "DebitAccData", C, false)), "Close", []);
      await $.mcall((await $.wv([$t36], "CreditAccData", C, false)), "Close", []);
      await $.mcall((await $.wv([$t36], "Edit_DCustId", C, false)), "Clear", []);
      await $.mcall((await $.wv([$t36], "DCust", C, false)), "Clear", []);
      await $.mcall((await $.wv([$t36], "Edit_CCustId", C, false)), "Clear", []);
      await $.mcall((await $.wv([$t36], "CCust", C, false)), "Clear", []);
      await $.stmt((await $.wcall([$t36], "ResetAccountFilter", [(await $.wv([$t36], "DEBT_BAL_SPR1", C, false))], C)));
      await $.stmt((await $.wcall([$t36], "ResetAccountFilter", [(await $.wv([$t36], "KREDT_BAL_SPR1", C, false))], C)));
      await $.mcall((await $.wv([$t36], "EditDebtBal_CN", C, false)), "Clear", []);
      await $.mcall((await $.wv([$t36], "EditDebtAccNo", C, false)), "Clear", []);
      await $.mcall((await $.wv([$t36], "EditKredBal_CN", C, false)), "Clear", []);
      await $.mcall((await $.wv([$t36], "EditCredAccNo", C, false)), "Clear", []);
      await $.mcall((await $.wv([$t36], "DBEdit1", C, false)), "Clear", []);
      await $.mcall((await $.wv([$t36], "DBEdit2", C, false)), "Clear", []);
    }
    await $.stmt($.call(C, "OperationCancel", []));
  } catch ($t35) {
    $.rethrowControl($t35);
    if ($.excIs($t35, "Exception")) {
      L0["e"] = $.exc($t35);
      await $.stmt((await $.call(C, "ShowMessage", [(await $.mv(L0["e"], "Message"))])));
    }
    else { throw $t35; }
  }
  return L0.result;
}, {"params": ["Sender", "Action"], "kind": "procedure", "ptypes": ["TObject", "TCloseAction"]});
  U.method("TTransactionForm", "FormShow", async function FormShow(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "db_bal_cn": '', "db_accno": '', "db_acc_name": '', "cr_bal_cn": '', "cr_accno": '', "cr_acc_name": ''};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.ne((await $.v(C, "phys_cust_DbHesabID")), ""))) {
    await $.stmt($.call(C, "Tr_Credit", []));
    {
      const $t37 = (await $.v(C, "Transaction_DataModule"));
      const $t38 = (await $.wv([$t37], "DebitAccData", C, false));
      await $.stmt($.wcall([$t37, $t38], "close", [], C));
      await $.stmt((await $.wcall([$t37, $t38], "SetVariable", ["v_id", (await $.wv([$t37, $t38], "phys_cust_DbHesabID", C, false))], C)));
      await $.stmt($.wcall([$t37, $t38], "open", [], C));
      await $.wset([$t37, $t38], "db_bal_cn", (await $.mv((await $.wcall([$t37, $t38], "FieldByName", ["BAL_CN"], C)), "asString")), { get: async () => L0["db_bal_cn"], set: async (v) => { L0["db_bal_cn"] = v; }, local: true });
      await $.wset([$t37, $t38], "db_AccNo", (await $.mv((await $.wcall([$t37, $t38], "FieldByName", ["acc_no"], C)), "asString")), { get: async () => L0["db_accno"], set: async (v) => { L0["db_accno"] = v; }, local: true });
      await $.wset([$t37, $t38], "db_Acc_name", (await $.mv((await $.wcall([$t37, $t38], "FieldByName", ["name"], C)), "asString")), { get: async () => L0["db_acc_name"], set: async (v) => { L0["db_acc_name"] = v; }, local: true });
      await $.mset((await $.wv([$t37, $t38], "Edit_DCustId", C, false)), "Text", (await $.wcall([$t37, $t38], "inttostr", [(await $.mv((await $.wcall([$t37, $t38], "FieldByName", ["kli_id"], C)), "asinteger"))], C)));
      await $.mset((await $.mv((await $.wv([$t37, $t38], "Transaction_DataModule", C, false)), "TransactionsDEBITCURRENCYID")), "AsInteger", (await $.mv((await $.wcall([$t37, $t38], "FieldByName", ["VAL_ACC"], C)), "asinteger")));
      await $.mset((await $.wv([$t37, $t38], "EditDebtBal_CN", C, false)), "Text", (await $.wv([$t37, $t38], "db_bal_cn", { get: async () => L0["db_bal_cn"], set: async (v) => { L0["db_bal_cn"] = v; }, local: true }, false)));
      await $.mset((await $.wv([$t37, $t38], "EditDebtAccNo", C, false)), "text", (await $.wv([$t37, $t38], "db_AccNo", { get: async () => L0["db_accno"], set: async (v) => { L0["db_accno"] = v; }, local: true }, false)));
      await $.mset((await $.wv([$t37, $t38], "DBEdit1", C, false)), "Text", (await $.wv([$t37, $t38], "db_Acc_name", { get: async () => L0["db_acc_name"], set: async (v) => { L0["db_acc_name"] = v; }, local: true }, false)));
      await $.mset((await $.mcall((await $.mv((await $.wv([$t37, $t38], "Transaction_DataModule", C, false)), "Transactions")), "FieldByName", ["DEBITID"])), "AsInteger", (await $.wcall([$t37, $t38], "strtoint", [(await $.wv([$t37, $t38], "phys_cust_DbHesabID", C, false))], C)));
      await $.wset([$t37, $t38], "db1", (await $.wcall([$t37, $t38], "inttostr", [(await $.mv((await $.mcall((await $.mv((await $.wv([$t37, $t38], "Transaction_DataModule", C, false)), "Transactions")), "FieldByName", ["DEBITID"])), "AsInteger"))], C)), C);
    }
    if ($.truthy($.ne((await $.call(C, "trim", [(await $.mv((await $.v(C, "Edit_DCustID")), "Text"))])), ""))) {
      {
        const $t39 = (await $.mv((await $.v(C, "Transaction_DataModule")), "ODS_DebtCustomer"));
        await $.stmt($.wcall([$t39], "Close", [], C));
        await $.stmt((await $.wcall([$t39], "SetVariable", ["v_CustID", (await $.mv((await $.wv([$t39], "Edit_DCustID", C, false)), "Text"))], C)));
        await $.stmt($.wcall([$t39], "Open", [], C));
      }
    }
    await $.set(C, "phys_cust_DbHesabID", "");
  } else {
    if ($.truthy($.ne((await $.v(C, "phys_cust_CrHesabID")), ""))) {
      await $.stmt($.call(C, "Tr_Debt", []));
      {
        const $t40 = (await $.v(C, "Transaction_DataModule"));
        const $t41 = (await $.wv([$t40], "CreditAccData", C, false));
        await $.stmt($.wcall([$t40, $t41], "close", [], C));
        await $.stmt((await $.wcall([$t40, $t41], "SetVariable", ["v_id", (await $.wv([$t40, $t41], "phys_cust_CrHesabID", C, false))], C)));
        await $.stmt($.wcall([$t40, $t41], "open", [], C));
        await $.wset([$t40, $t41], "cr_bal_cn", (await $.mv((await $.wcall([$t40, $t41], "FieldByName", ["BAL_CN"], C)), "asString")), { get: async () => L0["cr_bal_cn"], set: async (v) => { L0["cr_bal_cn"] = v; }, local: true });
        await $.wset([$t40, $t41], "cr_AccNo", (await $.mv((await $.wcall([$t40, $t41], "FieldByName", ["acc_no"], C)), "asString")), { get: async () => L0["cr_accno"], set: async (v) => { L0["cr_accno"] = v; }, local: true });
        await $.wset([$t40, $t41], "cr_Acc_name", (await $.mv((await $.wcall([$t40, $t41], "FieldByName", ["name"], C)), "asString")), { get: async () => L0["cr_acc_name"], set: async (v) => { L0["cr_acc_name"] = v; }, local: true });
        await $.mset((await $.wv([$t40, $t41], "Edit_CCustId", C, false)), "Text", (await $.wcall([$t40, $t41], "inttostr", [(await $.mv((await $.wcall([$t40, $t41], "FieldByName", ["kli_id"], C)), "asinteger"))], C)));
        await $.mset((await $.mv((await $.wv([$t40, $t41], "Transaction_DataModule", C, false)), "TransactionsCREDITCURRENCYID")), "AsInteger", (await $.mv((await $.wcall([$t40, $t41], "FieldByName", ["VAL_ACC"], C)), "asinteger")));
        await $.mset((await $.wv([$t40, $t41], "EditKredBal_CN", C, false)), "Text", (await $.wv([$t40, $t41], "cr_bal_cn", { get: async () => L0["cr_bal_cn"], set: async (v) => { L0["cr_bal_cn"] = v; }, local: true }, false)));
        await $.mset((await $.wv([$t40, $t41], "EditCredAccNo", C, false)), "text", (await $.wv([$t40, $t41], "cr_AccNo", { get: async () => L0["cr_accno"], set: async (v) => { L0["cr_accno"] = v; }, local: true }, false)));
        await $.mset((await $.wv([$t40, $t41], "DBEdit2", C, false)), "Text", (await $.wv([$t40, $t41], "cr_Acc_name", { get: async () => L0["cr_acc_name"], set: async (v) => { L0["cr_acc_name"] = v; }, local: true }, false)));
        await $.mset((await $.mcall((await $.wv([$t40, $t41], "Transactions", C, false)), "FieldByName", ["CREDITID"])), "AsInteger", (await $.wcall([$t40, $t41], "strtoint", [(await $.wv([$t40, $t41], "phys_cust_CrHesabID", C, false))], C)));
        await $.wset([$t40, $t41], "cr1", (await $.wcall([$t40, $t41], "inttostr", [(await $.mv((await $.mcall((await $.wv([$t40, $t41], "Transactions", C, false)), "FieldByName", ["CREDITID"])), "AsInteger"))], C)), C);
      }
      if ($.truthy($.ne((await $.call(C, "trim", [(await $.mv((await $.v(C, "Edit_CCustID")), "Text"))])), ""))) {
        {
          const $t42 = (await $.mv((await $.v(C, "Transaction_DataModule")), "ODS_CredCustomer"));
          await $.stmt($.wcall([$t42], "Close", [], C));
          await $.stmt((await $.wcall([$t42], "SetVariable", ["v_CustID", (await $.mv((await $.wv([$t42], "Edit_CCustID", C, false)), "Text"))], C)));
          await $.stmt($.wcall([$t42], "Open", [], C));
        }
      }
      await $.set(C, "phys_cust_CrHesabID", "");
    } else {
      if ($.truthy($.eq((await $.v(C, "trid")), ""))) {
        await $.stmt($.call(C, "Tr_Insert", []));
      } else {
        await $.stmt($.call(C, "Tr_Update", []));
      }
    }
  }
  await $.set(C, "Modifed", false);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TTransactionForm", "GoAmlClick", async function GoAmlClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TTransactionForm", "CreditAccNoLookUpDropDown", async function CreditAccNoLookUpDropDown(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t43 = (await $.v(C, "Transaction_DataModule"));
    await $.stmt((await $.wcall([$t43], "SetCurrencyFilter", [(await $.wv([$t43], "CreditAccData", C, false)), (await $.wv([$t43], "CreditCurrencyData", C, false))], C)));
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TTransactionForm", "DebtAccSearchEditChange", async function DebtAccSearchEditChange(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t44 = (await $.call(C, "TSearchEdit", [L0["sender"]]));
    const $t45 = (await $.wv([$t44], "Transaction_DataModule", C, false));
    const $t46 = (await $.wv([$t44, $t45], "Transactions", C, false));
    if ($.truthy($.eq((await $.wv([$t44, $t45, $t46], "Text", C, false)), (await $.wv([$t44, $t45, $t46], "EmptyStr", C, false))))) {
      await $.mcall((await $.wcall([$t44, $t45, $t46], "FieldByName", ["DebitID"], C)), "Clear", []);
      await $.mcall((await $.wcall([$t44, $t45, $t46], "FieldByName", ["InBalanceChar"], C)), "Clear", []);
    }
    await $.wset([$t44, $t45, $t46], "Modifed", (await $.wv([$t44, $t45, $t46], "True", C, false)), C);
    await $.mset((await $.wv([$t44, $t45, $t46], "PanelDebitRest", C, false)), "Visible", (await $.and_($.not(($.eq((await $.wcall([$t44, $t45, $t46], "Trim", [(await $.wv([$t44, $t45, $t46], "Text", C, false))], C)), (await $.wv([$t44, $t45, $t46], "EmptyStr", C, false))))), async () => ($.not((await $.mv((await $.wcall([$t44, $t45, $t46], "FieldByName", ["DebitID"], C)), "IsNull")))))));
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TTransactionForm", "CashSymbolDBEditEnter", async function CashSymbolDBEditEnter(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.stmt($.call(C, "SetCashSymbol", []));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TTransactionForm", "DebtAccSearchEditEnter", async function DebtAccSearchEditEnter(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t47 = (await $.v(C, "Transaction_DataModule"));
    await $.stmt((await $.wcall([$t47], "SetCurrencyFilter", [(await $.wv([$t47], "DebitAccData", C, false)), (await $.wv([$t47], "DebitCurrencyData", C, false))], C)));
    if ($.truthy($.eq((await $.mv((await $.wcall([$t47], "TEdit", [(await $.wv([$t47], "Sender", { get: async () => L0["sender"], set: async (v) => { L0["sender"] = v; }, local: true }, false))], C)), "Text")), (await $.wv([$t47], "EmptyStr", C, false))))) {
      await $.mcall((await $.mcall((await $.wv([$t47], "Transactions", C, false)), "FieldByName", ["DebitID"])), "Clear", []);
    }
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TTransactionForm", "Edit_CCustIdChange", async function Edit_CCustIdChange(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.set(C, "Modifed", true);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TTransactionForm", "EditCredAccNoDblClick", async function EditCredAccNoDblClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t48 = (await $.v(C, "Transaction_DataModule"));
    const $t49 = (await $.wv([$t48], "ODS_Account", C, false));
    { const $t50 = await $.iset((await $.wv([$t48, $t49], "SQL", C, false)), [18], ""); if ($t50 !== undefined) { await $.wset([$t48, $t49], "SQL", $t50, C); } }
    await $.stmt($.wcall([$t48, $t49], "close", [], C));
    if ($.truthy($.ne((await $.mv((await $.wv([$t48, $t49], "Edit_CCustId", C, false)), "Text")), ""))) {
      { const $t51 = await $.iset((await $.wv([$t48, $t49], "SQL", C, false)), [18], $.add("and  A.Kli_ID=", (await $.mv((await $.wv([$t48, $t49], "Edit_CCustId", C, false)), "Text")))); if ($t51 !== undefined) { await $.wset([$t48, $t49], "SQL", $t51, C); } }
    }
    if ($.truthy($.ne((await $.mv((await $.wv([$t48, $t49], "CreditCurrencyIDEdit", C, false)), "Text")), ""))) {
      { const $t52 = await $.iset((await $.wv([$t48, $t49], "SQL", C, false)), [18], $.add($.add((await $.idx((await $.wv([$t48, $t49], "SQL", C, false)), [18])), "and  A.VAL_ACC="), (await $.mv((await $.wv([$t48, $t49], "CreditCurrencyIDEdit", C, false)), "Text")))); if ($t52 !== undefined) { await $.wset([$t48, $t49], "SQL", $t52, C); } }
    }
    if ($.truthy($.ne((await $.mv((await $.wv([$t48, $t49], "EditKredBal_CN", C, false)), "Text")), ""))) {
      { const $t53 = await $.iset((await $.wv([$t48, $t49], "SQL", C, false)), [18], $.add($.add($.add($.add((await $.idx((await $.wv([$t48, $t49], "SQL", C, false)), [18])), "and B.BAL_CN="), "'"), (await $.mv((await $.wv([$t48, $t49], "EditKredBal_CN", C, false)), "Text"))), "'")); if ($t53 !== undefined) { await $.wset([$t48, $t49], "SQL", $t53, C); } }
    }
    await $.stmt($.wcall([$t48, $t49], "open", [], C));
  }
  await $.mset((await $.v(C, "FormAccounts")), "DebOrKred", true);
  await $.mset((await $.v(C, "FormAccounts")), "v_AccNo", (await $.mv((await $.v(C, "EditDebtAccNo")), "Text")));
  await $.mcall((await $.v(C, "FormAccounts")), "ShowModal", []);
  await $.mset((await $.v(C, "EditKredBal_CN")), "Text", (await $.mv((await $.v(C, "FormAccounts")), "v_bal_cn")));
  await $.mset((await $.v(C, "EditCredAccNo")), "Text", (await $.mv((await $.v(C, "FormAccounts")), "v_AccNo")));
  await $.mset((await $.v(C, "Edit_CCustId")), "Text", (await $.call(C, "IntToStr", [(await $.mv((await $.v(C, "FormAccounts")), "v_KliID"))])));
  await $.mcall((await $.v(C, "Edit_CCustId")), "SetFocus", []);
  await $.stmt((await $.call(C, "keybd_event", [(await $.v(C, "VK_RETURN")), 0, 0, 0])));
  {
    const $t54 = (await $.v(C, "Transaction_DataModule"));
    await $.mcall((await $.wv([$t54], "CreditAccData", C, false)), "Close", []);
    await $.stmt((await $.mcall((await $.wv([$t54], "CreditAccData", C, false)), "SetVariable", ["v_id", (await $.mv((await $.mcall((await $.wv([$t54], "ODS_Account", C, false)), "FieldByName", ["ID"])), "AsInteger"))])));
    await $.mcall((await $.wv([$t54], "CreditAccData", C, false)), "Open", []);
  }
  await $.mset((await $.mcall((await $.mv((await $.v(C, "Transaction_DataModule")), "Transactions")), "FieldByName", ["CreditID"])), "AsInteger", (await $.mv((await $.mcall((await $.mv((await $.v(C, "Transaction_DataModule")), "CreditAccData")), "FieldByName", ["ID"])), "AsInteger")));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TTransactionForm", "EditCredAccNoKeyPress", async function EditCredAccNoKeyPress(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "key": $.asRef(p1), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy((await $.and_(($.eq((await $.mv((await $.v(C, "EditCredAccNo")), "Text")), "")), async () => ($.eq((await L0["key"].get()), "\r")))))) {
    {
      const $t55 = (await $.v(C, "Transaction_DataModule"));
      const $t56 = (await $.wv([$t55], "ODS_Account", C, false));
      { const $t57 = await $.iset((await $.wv([$t55, $t56], "SQL", C, false)), [18], ""); if ($t57 !== undefined) { await $.wset([$t55, $t56], "SQL", $t57, C); } }
      await $.stmt($.wcall([$t55, $t56], "close", [], C));
      if ($.truthy($.ne((await $.mv((await $.wv([$t55, $t56], "Edit_CCustId", C, false)), "Text")), ""))) {
        { const $t58 = await $.iset((await $.wv([$t55, $t56], "SQL", C, false)), [18], $.add("and  A.Kli_ID=", (await $.mv((await $.wv([$t55, $t56], "Edit_CCustId", C, false)), "Text")))); if ($t58 !== undefined) { await $.wset([$t55, $t56], "SQL", $t58, C); } }
      }
      if ($.truthy($.ne((await $.mv((await $.wv([$t55, $t56], "CreditCurrencyIDEdit", C, false)), "Text")), ""))) {
        { const $t59 = await $.iset((await $.wv([$t55, $t56], "SQL", C, false)), [18], $.add($.add((await $.idx((await $.wv([$t55, $t56], "SQL", C, false)), [18])), " and  A.VAL_ACC="), (await $.mv((await $.wv([$t55, $t56], "CreditCurrencyIDEdit", C, false)), "Text")))); if ($t59 !== undefined) { await $.wset([$t55, $t56], "SQL", $t59, C); } }
      }
      if ($.truthy($.ne((await $.mv((await $.wv([$t55, $t56], "EditKredBal_CN", C, false)), "Text")), ""))) {
        { const $t60 = await $.iset((await $.wv([$t55, $t56], "SQL", C, false)), [18], $.add($.add($.add($.add((await $.idx((await $.wv([$t55, $t56], "SQL", C, false)), [18])), " and B.BAL_CN="), "'"), (await $.mv((await $.wv([$t55, $t56], "EditKredBal_CN", C, false)), "Text"))), "'")); if ($t60 !== undefined) { await $.wset([$t55, $t56], "SQL", $t60, C); } }
      }
      await $.stmt($.wcall([$t55, $t56], "open", [], C));
    }
    await $.mset((await $.v(C, "FormAccounts")), "DebOrKred", false);
    await $.mset((await $.v(C, "FormAccounts")), "v_AccNo", (await $.mv((await $.v(C, "EditCredAccNo")), "Text")));
    await $.mcall((await $.v(C, "FormAccounts")), "ShowModal", []);
    await $.mset((await $.v(C, "EditCredAccNo")), "Text", (await $.mv((await $.v(C, "FormAccounts")), "v_AccNo")));
    await $.mset((await $.v(C, "EditKredBal_CN")), "Text", (await $.mv((await $.v(C, "FormAccounts")), "v_bal_cn")));
    await $.mset((await $.v(C, "Edit_CCustId")), "Text", (await $.call(C, "IntToStr", [(await $.mv((await $.v(C, "FormAccounts")), "v_KliID"))])));
    await $.mcall((await $.v(C, "Edit_CCustId")), "SetFocus", []);
    await $.stmt((await $.call(C, "keybd_event", [(await $.v(C, "VK_RETURN")), 0, 0, 0])));
    {
      const $t61 = (await $.v(C, "Transaction_DataModule"));
      await $.mcall((await $.wv([$t61], "CreditAccData", C, false)), "Close", []);
      await $.stmt((await $.mcall((await $.wv([$t61], "CreditAccData", C, false)), "SetVariable", ["v_id", (await $.mv((await $.mcall((await $.wv([$t61], "ODS_Account", C, false)), "FieldByName", ["ID"])), "AsInteger"))])));
      await $.mcall((await $.wv([$t61], "CreditAccData", C, false)), "Open", []);
    }
    await $.mset((await $.mcall((await $.mv((await $.v(C, "Transaction_DataModule")), "Transactions")), "FieldByName", ["CREDITID"])), "AsInteger", (await $.mv((await $.mcall((await $.mv((await $.v(C, "Transaction_DataModule")), "CreditAccData")), "FieldByName", ["ID"])), "AsInteger")));
  } else {
    if ($.truthy(($.eq((await L0["key"].get()), "\r")))) {
      await $.mcall((await $.v(C, "Edit_DCustId")), "SetFocus", []);
    }
  }
  return L0.result;
}, {"params": ["Sender", "Key"], "kind": "procedure", "ptypes": ["TObject", "Char"]});
  U.method("TTransactionForm", "EditDebtAccNoDblClick", async function EditDebtAccNoDblClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t62 = (await $.v(C, "Transaction_DataModule"));
    const $t63 = (await $.wv([$t62], "ODS_Account", C, false));
    { const $t64 = await $.iset((await $.wv([$t62, $t63], "SQL", C, false)), [18], ""); if ($t64 !== undefined) { await $.wset([$t62, $t63], "SQL", $t64, C); } }
    await $.stmt($.wcall([$t62, $t63], "close", [], C));
    if ($.truthy($.ne((await $.mv((await $.wv([$t62, $t63], "Edit_DCustId", C, false)), "Text")), ""))) {
      { const $t65 = await $.iset((await $.wv([$t62, $t63], "SQL", C, false)), [18], $.add("and  A.Kli_ID=", (await $.mv((await $.wv([$t62, $t63], "Edit_DCustId", C, false)), "Text")))); if ($t65 !== undefined) { await $.wset([$t62, $t63], "SQL", $t65, C); } }
    }
    if ($.truthy($.ne((await $.mv((await $.wv([$t62, $t63], "DebitCurrencyIDEdit", C, false)), "Text")), ""))) {
      { const $t66 = await $.iset((await $.wv([$t62, $t63], "SQL", C, false)), [18], $.add($.add((await $.idx((await $.wv([$t62, $t63], "SQL", C, false)), [18])), "and  A.VAL_ACC="), (await $.mv((await $.wv([$t62, $t63], "DebitCurrencyIDEdit", C, false)), "Text")))); if ($t66 !== undefined) { await $.wset([$t62, $t63], "SQL", $t66, C); } }
    }
    if ($.truthy($.ne((await $.mv((await $.wv([$t62, $t63], "EditDebtBal_CN", C, false)), "Text")), ""))) {
      { const $t67 = await $.iset((await $.wv([$t62, $t63], "SQL", C, false)), [18], $.add($.add($.add($.add((await $.idx((await $.wv([$t62, $t63], "SQL", C, false)), [18])), "and B.BAL_CN="), "'"), (await $.mv((await $.wv([$t62, $t63], "EditDebtBal_CN", C, false)), "Text"))), "'")); if ($t67 !== undefined) { await $.wset([$t62, $t63], "SQL", $t67, C); } }
    }
    await $.stmt($.wcall([$t62, $t63], "open", [], C));
  }
  await $.mset((await $.v(C, "FormAccounts")), "DebOrKred", true);
  await $.mset((await $.v(C, "FormAccounts")), "v_AccNo", (await $.mv((await $.v(C, "EditDebtAccNo")), "Text")));
  await $.mcall((await $.v(C, "FormAccounts")), "ShowModal", []);
  await $.mset((await $.v(C, "EditDebtBal_CN")), "Text", (await $.mv((await $.v(C, "FormAccounts")), "v_bal_cn")));
  await $.mset((await $.v(C, "EditDebtAccNo")), "Text", (await $.mv((await $.v(C, "FormAccounts")), "v_AccNo")));
  await $.mset((await $.v(C, "Edit_DCustId")), "Text", (await $.mv((await $.v(C, "FormAccounts")), "v_KliID")));
  await $.mcall((await $.v(C, "Edit_DCustId")), "SetFocus", []);
  await $.stmt((await $.call(C, "keybd_event", [(await $.v(C, "VK_RETURN")), 0, 0, 0])));
  {
    const $t68 = (await $.v(C, "Transaction_DataModule"));
    await $.mcall((await $.wv([$t68], "DebitAccData", C, false)), "Close", []);
    await $.stmt((await $.mcall((await $.wv([$t68], "DebitAccData", C, false)), "SetVariable", ["v_id", (await $.mv((await $.mcall((await $.wv([$t68], "ODS_Account", C, false)), "FieldByName", ["ID"])), "AsInteger"))])));
    await $.mcall((await $.wv([$t68], "DebitAccData", C, false)), "Open", []);
  }
  await $.mset((await $.mcall((await $.mv((await $.v(C, "Transaction_DataModule")), "Transactions")), "FieldByName", ["DEBITID"])), "AsInteger", (await $.mv((await $.mcall((await $.mv((await $.v(C, "Transaction_DataModule")), "DebitAccData")), "FieldByName", ["ID"])), "AsInteger")));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TTransactionForm", "EditDebtAccNoKeyPress", async function EditDebtAccNoKeyPress(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "key": $.asRef(p1), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy((await $.and_(($.eq((await $.mv((await $.v(C, "EditDebtAccNo")), "Text")), "")), async () => ($.eq((await L0["key"].get()), "\r")))))) {
    {
      const $t69 = (await $.v(C, "Transaction_DataModule"));
      const $t70 = (await $.wv([$t69], "ODS_Account", C, false));
      { const $t71 = await $.iset((await $.wv([$t69, $t70], "SQL", C, false)), [18], ""); if ($t71 !== undefined) { await $.wset([$t69, $t70], "SQL", $t71, C); } }
      await $.stmt($.wcall([$t69, $t70], "close", [], C));
      if ($.truthy($.ne((await $.mv((await $.wv([$t69, $t70], "Edit_DCustId", C, false)), "Text")), ""))) {
        { const $t72 = await $.iset((await $.wv([$t69, $t70], "SQL", C, false)), [18], $.add("and  A.Kli_ID=", (await $.mv((await $.wv([$t69, $t70], "Edit_DCustId", C, false)), "Text")))); if ($t72 !== undefined) { await $.wset([$t69, $t70], "SQL", $t72, C); } }
      }
      if ($.truthy($.ne((await $.mv((await $.wv([$t69, $t70], "DebitCurrencyIDEdit", C, false)), "Text")), ""))) {
        { const $t73 = await $.iset((await $.wv([$t69, $t70], "SQL", C, false)), [18], $.add($.add((await $.idx((await $.wv([$t69, $t70], "SQL", C, false)), [18])), "and  A.VAL_ACC="), (await $.mv((await $.wv([$t69, $t70], "DebitCurrencyIDEdit", C, false)), "Text")))); if ($t73 !== undefined) { await $.wset([$t69, $t70], "SQL", $t73, C); } }
      }
      if ($.truthy($.ne((await $.mv((await $.wv([$t69, $t70], "EditDebtBal_CN", C, false)), "Text")), ""))) {
        { const $t74 = await $.iset((await $.wv([$t69, $t70], "SQL", C, false)), [18], $.add($.add($.add($.add((await $.idx((await $.wv([$t69, $t70], "SQL", C, false)), [18])), "and B.BAL_CN="), "'"), (await $.mv((await $.wv([$t69, $t70], "EditDebtBal_CN", C, false)), "Text"))), "'")); if ($t74 !== undefined) { await $.wset([$t69, $t70], "SQL", $t74, C); } }
      }
      await $.stmt($.wcall([$t69, $t70], "open", [], C));
    }
    await $.mset((await $.v(C, "FormAccounts")), "DebOrKred", true);
    await $.mset((await $.v(C, "FormAccounts")), "v_AccNo", (await $.mv((await $.v(C, "EditDebtAccNo")), "Text")));
    await $.mcall((await $.v(C, "FormAccounts")), "ShowModal", []);
    await $.mset((await $.v(C, "EditDebtAccNo")), "Text", (await $.mv((await $.v(C, "FormAccounts")), "v_AccNo")));
    await $.mset((await $.v(C, "EditDebtBal_CN")), "Text", (await $.mv((await $.v(C, "FormAccounts")), "v_bal_cn")));
    await $.mset((await $.v(C, "Edit_DCustId")), "Text", (await $.call(C, "IntToStr", [(await $.mv((await $.v(C, "FormAccounts")), "v_KliID"))])));
    await $.mcall((await $.v(C, "Edit_DCustId")), "SetFocus", []);
    await $.stmt((await $.call(C, "keybd_event", [(await $.v(C, "VK_RETURN")), 0, 0, 0])));
    {
      const $t75 = (await $.v(C, "Transaction_DataModule"));
      await $.mcall((await $.wv([$t75], "DebitAccData", C, false)), "Close", []);
      await $.stmt((await $.mcall((await $.wv([$t75], "DebitAccData", C, false)), "SetVariable", ["v_id", (await $.mv((await $.mcall((await $.wv([$t75], "ODS_Account", C, false)), "FieldByName", ["ID"])), "AsInteger"))])));
      await $.mcall((await $.wv([$t75], "DebitAccData", C, false)), "Open", []);
    }
    await $.mset((await $.mcall((await $.mv((await $.v(C, "Transaction_DataModule")), "Transactions")), "FieldByName", ["DEBITID"])), "AsInteger", (await $.mv((await $.mcall((await $.mv((await $.v(C, "Transaction_DataModule")), "DebitAccData")), "FieldByName", ["ID"])), "AsInteger")));
  } else {
    if ($.truthy(($.eq((await L0["key"].get()), "\r")))) {
      await $.mcall((await $.v(C, "CreditCurrencyIDEdit")), "SetFocus", []);
    }
  }
  return L0.result;
}, {"params": ["Sender", "Key"], "kind": "procedure", "ptypes": ["TObject", "Char"]});
  U.method("TTransactionForm", "EditDebtBal_CNChange", async function EditDebtBal_CNChange(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mcall((await $.v(C, "EditDebtAccNo")), "Clear", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TTransactionForm", "EditDebtBal_CNDblClick", async function EditDebtBal_CNDblClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mset((await $.mv((await $.v(C, "FormBal_CN12")), "XDBGridBal_spr1")), "DataSource", (await $.mv((await $.v(C, "Transaction_DataModule")), "DEB_BAL_SPR1")));
  await $.mset((await $.v(C, "FormBal_CN12")), "DebOrKred", true);
  await $.mset((await $.v(C, "FormBal_CN12")), "V_balCn", (await $.mv((await $.v(C, "EditDebtBal_CN")), "Text")));
  await $.mcall((await $.v(C, "FormBal_CN12")), "ShowModal", []);
  await $.mset((await $.v(C, "EditDebtBal_CN")), "Text", (await $.mv((await $.v(C, "FormBal_CN12")), "V_balCn")));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TTransactionForm", "EditDebtBal_CNKeyPress", async function EditDebtBal_CNKeyPress(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "key": $.asRef(p1), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy((await $.and_(($.eq((await $.mv((await $.v(C, "EditDebtBal_CN")), "Text")), "")), async () => ($.eq((await L0["key"].get()), "\r")))))) {
    await $.mset((await $.v(C, "FormBal_CN12")), "DebOrKred", true);
    await $.mset((await $.v(C, "FormBal_CN12")), "V_balCn", (await $.mv((await $.v(C, "EditDebtBal_CN")), "Text")));
    await $.mcall((await $.v(C, "FormBal_CN12")), "ShowModal", []);
    await $.mset((await $.v(C, "EditDebtBal_CN")), "Text", (await $.mv((await $.v(C, "FormBal_CN12")), "V_balCn")));
  } else {
    if ($.truthy(($.eq((await L0["key"].get()), "\r")))) {
      await $.mcall((await $.v(C, "EditDebtAccNo")), "SetFocus", []);
    }
  }
  return L0.result;
}, {"params": ["Sender", "Key"], "kind": "procedure", "ptypes": ["TObject", "Char"]});
  U.method("TTransactionForm", "EditKredBal_CNChange", async function EditKredBal_CNChange(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mcall((await $.v(C, "EditCredAccNo")), "Clear", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TTransactionForm", "EditKredBal_CNDblClick", async function EditKredBal_CNDblClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mset((await $.mv((await $.v(C, "FormBal_CN12")), "XDBGridBal_spr1")), "DataSource", (await $.mv((await $.v(C, "Transaction_DataModule")), "KRED_BAL_SPR1")));
  await $.mset((await $.v(C, "FormBal_CN12")), "DebOrKred", false);
  await $.mset((await $.v(C, "FormBal_CN12")), "V_balCn", (await $.mv((await $.v(C, "EditKredBal_CN")), "Text")));
  await $.mcall((await $.v(C, "FormBal_CN12")), "ShowModal", []);
  await $.mset((await $.v(C, "EditKredBal_CN")), "Text", (await $.mv((await $.v(C, "FormBal_CN12")), "V_balCn")));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TTransactionForm", "EditKredBal_CNKeyPress", async function EditKredBal_CNKeyPress(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "key": $.asRef(p1), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy((await $.and_(($.eq((await $.mv((await $.v(C, "EditKredBal_CN")), "Text")), "")), async () => ($.eq((await L0["key"].get()), "\r")))))) {
    await $.mset((await $.v(C, "FormBal_CN12")), "DebOrKred", false);
    await $.mset((await $.v(C, "FormBal_CN12")), "V_balCn", (await $.mv((await $.v(C, "EditKredBal_CN")), "Text")));
    await $.mcall((await $.v(C, "FormBal_CN12")), "ShowModal", []);
    await $.mset((await $.v(C, "EditKredBal_CN")), "Text", (await $.mv((await $.v(C, "FormBal_CN12")), "V_balCn")));
  } else {
    if ($.truthy(($.eq((await L0["key"].get()), "\r")))) {
      await $.mcall((await $.v(C, "EditCredAccNo")), "SetFocus", []);
    }
  }
  return L0.result;
}, {"params": ["Sender", "Key"], "kind": "procedure", "ptypes": ["TObject", "Char"]});
  U.method("TTransactionForm", "EditTransModeCodeChange", async function EditTransModeCodeChange(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.set(C, "Modifed", true);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TTransactionForm", "EditTransModeCodeKeyPress", async function EditTransModeCodeKeyPress(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "key": $.asRef(p1), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.eq((await L0["key"].get()), "\r"))) {
    if ($.truthy($.ne((await $.call(C, "trim", [(await $.mv((await $.v(C, "EditTransModeCode")), "Text"))])), ""))) {
      await $.mset((await $.v(C, "DBLC_MMX_Transmode")), "KeyValue", (await $.mv((await $.v(C, "EditTransModeCode")), "Text")));
    }
    await $.mcall((await $.v(C, "DBLC_MMX_Transmode")), "SetFocus", []);
  }
  return L0.result;
}, {"params": ["Sender", "Key"], "kind": "procedure", "ptypes": ["TObject", "Char"]});
  U.method("TTransactionForm", "CreditAccSearchEditEnter", async function CreditAccSearchEditEnter(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t76 = (await $.v(C, "Transaction_DataModule"));
    await $.stmt((await $.wcall([$t76], "SetCurrencyFilter", [(await $.wv([$t76], "CreditAccData", C, false)), (await $.wv([$t76], "CreditCurrencyData", C, false))], C)));
    if ($.truthy($.eq((await $.mv((await $.wcall([$t76], "TEdit", [(await $.wv([$t76], "Sender", { get: async () => L0["sender"], set: async (v) => { L0["sender"] = v; }, local: true }, false))], C)), "Text")), (await $.wv([$t76], "EmptyStr", C, false))))) {
      await $.mcall((await $.mcall((await $.wv([$t76], "Transactions", C, false)), "FieldByName", ["CreditID"])), "Clear", []);
    }
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TTransactionForm", "CreditAccSearchEditChange", async function CreditAccSearchEditChange(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t77 = (await $.call(C, "TSearchEdit", [L0["sender"]]));
    const $t78 = (await $.wv([$t77], "Transaction_DataModule", C, false));
    const $t79 = (await $.wv([$t77, $t78], "Transactions", C, false));
    if ($.truthy($.eq((await $.wv([$t77, $t78, $t79], "Text", C, false)), (await $.wv([$t77, $t78, $t79], "EmptyStr", C, false))))) {
      await $.mcall((await $.mcall((await $.mv((await $.wv([$t77, $t78, $t79], "Transaction_DataModule", C, false)), "Transactions")), "FieldByName", ["CreditID"])), "Clear", []);
      await $.mcall((await $.mcall((await $.mv((await $.wv([$t77, $t78, $t79], "Transaction_DataModule", C, false)), "Transactions")), "FieldByName", ["InBalanceChar"])), "Clear", []);
    }
    await $.wset([$t77, $t78, $t79], "Modifed", (await $.wv([$t77, $t78, $t79], "True", C, false)), C);
    await $.mset((await $.wv([$t77, $t78, $t79], "PanelCreditRest", C, false)), "Visible", (await $.and_($.not(($.eq((await $.wcall([$t77, $t78, $t79], "Trim", [(await $.wv([$t77, $t78, $t79], "Text", C, false))], C)), (await $.wv([$t77, $t78, $t79], "EmptyStr", C, false))))), async () => ($.not((await $.mv((await $.wcall([$t77, $t78, $t79], "FieldByName", ["CreditID"], C)), "IsNull")))))));
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TTransactionForm", "CurrencyEditCreditKeyPress", async function CurrencyEditCreditKeyPress(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "key": $.asRef(p1), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.eq((await L0["key"].get()), "\r"))) {
    await $.mcall((await $.v(C, "CurrencyEditLammount")), "SetFocus", []);
  }
  return L0.result;
}, {"params": ["Sender", "Key"], "kind": "procedure", "ptypes": ["TObject", "Char"]});
  U.method("TTransactionForm", "CurrencyEditDebitChange", async function CurrencyEditDebitChange(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.stmt((await $.call(C, "CutEditText", [L0["sender"]])));
  if ($.truthy($.eq((await $.mv((await $.call(C, "TCurrencyEdit", [L0["sender"]])), "Text")), (await $.v(C, "EmptyStr"))))) {
    await $.mset((await $.call(C, "TCurrencyEdit", [L0["sender"]])), "Value", 0);
  }
  { const $t80 = (await $.mv((await $.call(C, "TCurrencyEdit", [L0["sender"]])), "Tag"));
    if ($.eq($t80, 1)) {
      await $.set(C, "TransactionSide", (await $.v(C, "tsDebet")));
    }
    else if ($.eq($t80, 2)) {
      await $.set(C, "TransactionSide", (await $.v(C, "tsCredit")));
    }
    else if ($.eq($t80, 3)) {
      await $.set(C, "TransactionSide", (await $.v(C, "tsUnknown")));
    }
  }
  await $.stmt((await $.call(C, "SetAmmounts", [(await $.v(C, "TransactionSide"))])));
  await $.set(C, "Modifed", true);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TTransactionForm", "CurrencyEditDebitKeyPress", async function CurrencyEditDebitKeyPress(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "key": $.asRef(p1), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.eq((await L0["key"].get()), "\r"))) {
    await $.mcall((await $.v(C, "CurrencyEditCredit")), "SetFocus", []);
  }
  return L0.result;
}, {"params": ["Sender", "Key"], "kind": "procedure", "ptypes": ["TObject", "Char"]});
  U.method("TTransactionForm", "CurrencyEditLammountKeyPress", async function CurrencyEditLammountKeyPress(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "key": $.asRef(p1), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.eq((await L0["key"].get()), "\r"))) {
    await $.mcall((await $.v(C, "CashSymbolDBEdit")), "SetFocus", []);
  }
  return L0.result;
}, {"params": ["Sender", "Key"], "kind": "procedure", "ptypes": ["TObject", "Char"]});
  U.method("TTransactionForm", "FormKeyDown", async function FormKeyDown(Self, p0, p1, p2) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "key": $.asRef(p1), "shift": $.copyArg(p2), result: undefined};
  await $.fixArgs(L0, ["sender", "shift"]);
  if ($.truthy($.eq((await L0["key"].get()), (await $.v(C, "VK_F3"))))) {
    {
      const $t81 = (await $.v(C, "TransactionDestinationForm"));
      const $t82 = (await $.wv([$t81], "Transaction_DataModule", C, false));
      await $.stmt($.wcall([$t81, $t82], "ShowModal", [], C));
      if ($.truthy($.eq((await $.wv([$t81, $t82], "ModalResult", C, false)), (await $.wv([$t81, $t82], "mrOk", C, false))))) {
        await $.mset((await $.mcall((await $.wv([$t81, $t82], "Transactions", C, false)), "FieldByName", ["Name"])), "AsString", (await $.wv([$t81, $t82], "Value", C, false)));
        await $.mset((await $.wv([$t81, $t82], "TrDestNoEdit", C, false)), "Text", (await $.mv((await $.mcall((await $.wv([$t81, $t82], "TrDest", C, false)), "FieldByName", ["ID"])), "AsString")));
      }
    }
  } else {
    if ($.truthy($.eq((await L0["key"].get()), (await $.v(C, "VK_ESCAPE"))))) {
      await $.stmt($.call(C, "Close", []));
    }
  }
  return L0.result;
}, {"params": ["Sender", "Key", "Shift"], "kind": "procedure", "ptypes": ["TObject", "Word", "TShiftState"]});
  U.method("TTransactionForm", "FormCreate", async function FormCreate(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.set(C, "Transaction_DataModule", (await $.mcall((await $.v(C, "TTransaction_DataModule")), "Create", [Self])));
  if ($.truthy($.not((await $.call(C, "assigned", [(await $.v(C, "FormBal_CN12"))]))))) {
    await $.set(C, "FormBal_CN12", (await $.mcall((await $.v(C, "TFormBal_CN12")), "Create", [Self])));
  }
  if ($.truthy($.not((await $.call(C, "assigned", [(await $.v(C, "FormAccounts"))]))))) {
    await $.set(C, "FormAccounts", (await $.mcall((await $.v(C, "TFormAccounts")), "Create", [Self])));
  }
  {
    const $t83 = (await $.v(C, "Transaction_DataModule"));
    const $t84 = (await $.wv([$t83], "Sysdat", C, false));
    const $t85 = (await $.wv([$t83, $t84], "TransDate", C, false));
    if ($.truthy($.not((await $.mv((await $.wv([$t83, $t84, $t85], "ODS_Settings", C, false)), "Active"))))) {
      await $.mcall((await $.wv([$t83, $t84, $t85], "ODS_Settings", C, false)), "Open", []);
    }
    if ($.truthy((await $.mv((await $.wv([$t83, $t84, $t85], "ReportDesc", C, false)), "Active")))) {
      await $.mcall((await $.wv([$t83, $t84, $t85], "ReportDesc", C, false)), "Close", []);
    }
    await $.mcall((await $.wv([$t83, $t84, $t85], "ReportDesc", C, false)), "Open", []);
    if ($.truthy((await $.mv((await $.wv([$t83, $t84, $t85], "Country", C, false)), "Active")))) {
      await $.mcall((await $.wv([$t83, $t84, $t85], "Country", C, false)), "Close", []);
    }
    await $.mcall((await $.wv([$t83, $t84, $t85], "Country", C, false)), "Open", []);
    if ($.truthy((await $.mv((await $.wv([$t83, $t84, $t85], "ODS_MMX_TRANSMODE", C, false)), "Active")))) {
      await $.mcall((await $.wv([$t83, $t84, $t85], "ODS_MMX_TRANSMODE", C, false)), "Close", []);
    }
    await $.mcall((await $.wv([$t83, $t84, $t85], "ODS_MMX_TRANSMODE", C, false)), "Open", []);
    await $.wset([$t83, $t84, $t85], "DateTime", (await $.mv((await $.wcall([$t83, $t84, $t85], "FieldByName", ["tek_dat"], C)), "AsDateTime")), C);
    if ($.truthy($.eq((await $.mv((await $.wv([$t83, $t84, $t85], "TransactionsREPORTID", C, false)), "AsString")), ""))) {
      await $.mset((await $.wv([$t83, $t84, $t85], "ReportIDDBEdit", C, false)), "Text", "0");
      await $.mset((await $.wv([$t83, $t84, $t85], "ReportIDLookUp", C, false)), "KeyValue", 0);
    }
  }
  await $.stmt((await $.mcall((await $.v(C, "SBTranslateProc")), "TranslateAllCompForms", [Self, (await $.mv((await $.v(C, "sboapiDataModule")), "OrPack_SL"))])));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TTransactionForm", "DebitCurrencyIDEditExit", async function DebitCurrencyIDEditExit(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TTransactionForm", "DebitCurrencyIDEditKeyPress", async function DebitCurrencyIDEditKeyPress(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "key": $.asRef(p1), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.eq((await L0["key"].get()), "\r"))) {
    await $.mcall((await $.v(C, "EditDebtBal_CN")), "SetFocus", []);
  }
  return L0.result;
}, {"params": ["Sender", "Key"], "kind": "procedure", "ptypes": ["TObject", "Char"]});
  U.method("TTransactionForm", "CreditCurrencyIDEditExit", async function CreditCurrencyIDEditExit(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TTransactionForm", "CreditCurrencyIDEditKeyPress", async function CreditCurrencyIDEditKeyPress(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "key": $.asRef(p1), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.eq((await L0["key"].get()), "\r"))) {
    await $.mcall((await $.v(C, "EditKredBal_CN")), "SetFocus", []);
  }
  return L0.result;
}, {"params": ["Sender", "Key"], "kind": "procedure", "ptypes": ["TObject", "Char"]});
  U.method("TTransactionForm", "Button3Click", async function Button3Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.stmt((await $.mcall((await $.v(C, "EditDebtAccNo")), "OnDblClick", [L0["sender"]])));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TTransactionForm", "ActionCancelExecute", async function ActionCancelExecute(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.stmt($.call(C, "ResetTransaction", []));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TTransactionForm", "ActionExitExecute", async function ActionExitExecute(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.stmt($.call(C, "Close", []));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TTransactionForm", "ActionInsertExecute", async function ActionInsertExecute(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.eq((await $.mv((await $.v(C, "CountrIDLookUp")), "KeyValue")), (await $.v(C, "null"))))) {
    await $.stmt((await $.call(C, "showmessage", ["Ölkə daxil edilməıidir!"])));
    return L0.result;
  }
  if ($.truthy($.eq((await $.mv((await $.v(C, "CountrIDLookUp")), "Text")), ""))) {
    await $.stmt((await $.call(C, "showmessage", ["Ölkə daxil edilməıidir!"])));
    return L0.result;
  }
  if ($.truthy($.eq((await $.mv((await $.v(C, "DBLC_MMX_Transmode")), "KeyValue")), (await $.v(C, "null"))))) {
    await $.stmt((await $.call(C, "showmessage", ["Əməliyyatın növü daxil edilməıidir!"])));
    return L0.result;
  }
  if ($.truthy(($.eq((await $.mv((await $.v(C, "Transaction_DataModuleUnit")), "NonCustMustBe")), true)))) {
    await $.stmt((await $.call(C, "showmessage", ["Nominal  seçilməlidir!"])));
    return L0.result;
  }
  await $.stmt($.call(C, "SaveTransaction", []));
  await $.stmt($.call(C, "ResetTransaction", []));
  if ($.truthy((await $.or_(($.eq((await $.v(C, "Form_Close")), "DB_Hesab")), async () => ($.eq((await $.v(C, "Form_Close")), "CR_Hesab")))))) {
    await $.mcall((await $.v(C, "TransactionForm")), "close", []);
    await $.set(C, "Form_Close", "");
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TTransactionForm", "ActionInsertUpdate", async function ActionInsertUpdate(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t86 = (L0["sender"]);
    const $t87 = (await $.mv((await $.wv([$t86], "Transaction_DataModule", C, false)), "Transactions"));
    await $.wset([$t86, $t87], "Enabled", (await $.and_((await $.and_((await $.and_((await $.wv([$t86, $t87], "Modifed", C, false)), async () => ($.not((await $.mv((await $.wcall([$t86, $t87], "FieldByName", ["DebitID"], C)), "IsNull")))))), async () => ($.not((await $.mv((await $.wcall([$t86, $t87], "FieldByName", ["CreditID"], C)), "IsNull")))))), async () => ($.ne((await $.mv((await $.wv([$t86, $t87], "CurrencyEditLammount", C, false)), "Value")), 0.0)))), C);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TTransactionForm", "TrDestNoEditChange", async function TrDestNoEditChange(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t88 = (await $.call(C, "TEdit", [L0["sender"]]));
    const $t89 = (await $.mv((await $.wv([$t88], "TransactionDestinationForm", C, false)), "TrDest"));
    const $t90 = (await $.wv([$t88, $t89], "Transaction_DataModule", C, false));
    if ($.truthy($.ne((await $.wv([$t88, $t89, $t90], "Text", C, false)), (await $.wv([$t88, $t89, $t90], "EmptyStr", C, false))))) {
      if ($.truthy((await $.wcall([$t88, $t89, $t90], "Locate", ["ID", (await $.wv([$t88, $t89, $t90], "Text", C, false)), []], C)))) {
        await $.mset((await $.mcall((await $.wv([$t88, $t89, $t90], "Transactions", C, false)), "FieldByName", ["Name"])), "AsString", (await $.mv((await $.wcall([$t88, $t89, $t90], "FieldByName", ["Name"], C)), "AsString")));
      }
    }
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TTransactionForm", "TrDestNoEditKeyPress", async function TrDestNoEditKeyPress(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "key": $.asRef(p1), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.eq((await L0["key"].get()), "\r"))) {
    await $.mcall((await $.v(C, "DBEditDestination")), "SetFocus", []);
  }
  return L0.result;
}, {"params": ["Sender", "Key"], "kind": "procedure", "ptypes": ["TObject", "Char"]});
  U.method("TTransactionForm", "TransDateChange", async function TransDateChange(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.set(C, "Modifed", true);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TTransactionForm", "CashSymbolDBEditExit", async function CashSymbolDBEditExit(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "cashsymbol": ''};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t91 = (await $.call(C, "TDBEdit", [L0["sender"]]));
    const $t92 = (await $.wv([$t91], "Transaction_DataModule", C, false));
    if ($.truthy($.eq((await $.wv([$t91, $t92], "Text", C, false)), (await $.wv([$t91, $t92], "EmptyStr", C, false))))) {
      return L0.result;
    }
    await $.wset([$t91, $t92], "CashSymbol", (await $.mv((await $.mcall((await $.wv([$t91, $t92], "Transactions", C, false)), "FieldByName", ["InBalanceChar"])), "AsString")), { get: async () => L0["cashsymbol"], set: async (v) => { L0["cashsymbol"] = v; }, local: true });
    if ($.truthy($.not((await $.mcall((await $.wv([$t91, $t92], "CashSymbols", C, false)), "Locate", ["Symbol", (await $.wv([$t91, $t92], "CashSymbol", { get: async () => L0["cashsymbol"], set: async (v) => { L0["cashsymbol"] = v; }, local: true }, false)), [(await $.wv([$t91, $t92], "loCaseInsensitive", C, false))]]))))) {
      await $.wset([$t91, $t92], "Modifed", (await $.wv([$t91, $t92], "False", C, false)), C);
      await $.wset([$t91, $t92], "Color", (await $.wv([$t91, $t92], "clRed", C, false)), C);
      await $.stmt($.wcall([$t91, $t92], "SetFocus", [], C));
    } else {
      await $.wset([$t91, $t92], "Color", (await $.wv([$t91, $t92], "clWhite", C, false)), C);
      await $.wset([$t91, $t92], "Modifed", (await $.wv([$t91, $t92], "True", C, false)), C);
    }
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TTransactionForm", "CashSymbolDBEditKeyPress", async function CashSymbolDBEditKeyPress(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "key": $.asRef(p1), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.eq((await L0["key"].get()), "\r"))) {
    await $.mcall((await $.v(C, "CashSymbolLookUp")), "SetFocus", []);
  }
  return L0.result;
}, {"params": ["Sender", "Key"], "kind": "procedure", "ptypes": ["TObject", "Char"]});
  U.method("TTransactionForm", "CashSymbolLookUpKeyPress", async function CashSymbolLookUpKeyPress(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "key": $.asRef(p1), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.eq((await L0["key"].get()), "\r"))) {
    await $.mcall((await $.v(C, "ConvertationSymbolIDBEdit")), "SetFocus", []);
  }
  return L0.result;
}, {"params": ["Sender", "Key"], "kind": "procedure", "ptypes": ["TObject", "Char"]});
  U.method("TTransactionForm", "DBEditDestinationChange", async function DBEditDestinationChange(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.set(C, "Modifed", true);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TTransactionForm", "DBEditDestinationKeyPress", async function DBEditDestinationKeyPress(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "key": $.asRef(p1), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.eq((await L0["key"].get()), "\r"))) {
    await $.mcall((await $.v(C, "CountrIDDBEdit")), "SetFocus", []);
  }
  return L0.result;
}, {"params": ["Sender", "Key"], "kind": "procedure", "ptypes": ["TObject", "Char"]});
  U.method("TTransactionForm", "DBLC_MMX_TransmodeCloseUp", async function DBLC_MMX_TransmodeCloseUp(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.ne((await $.mv((await $.v(C, "DBLC_MMX_Transmode")), "KeyVAlue")), (await $.v(C, "null"))))) {
    await $.mset((await $.mv((await $.v(C, "TransactionForm")), "EditTransModeCode")), "Text", (await $.mv((await $.v(C, "DBLC_MMX_Transmode")), "KeyVAlue")));
  }
  await $.set(C, "Modifed", true);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TTransactionForm", "DBLC_MMX_TransmodeKeyPress", async function DBLC_MMX_TransmodeKeyPress(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "key": $.asRef(p1), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.eq((await $.mv((await $.v(C, "ButtonApply")), "Enabled")), true))) {
    if ($.truthy($.eq((await L0["key"].get()), "\r"))) {
      await $.mcall((await $.v(C, "ButtonApply")), "SetFocus", []);
    }
  }
  return L0.result;
}, {"params": ["Sender", "Key"], "kind": "procedure", "ptypes": ["TObject", "Char"]});
  U.method("TTransactionForm", "ConvertationSymbolIDBEditExit", async function ConvertationSymbolIDBEditExit(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "convertationsymbol": 0};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t93 = (await $.call(C, "TDBEdit", [L0["sender"]]));
    const $t94 = (await $.wv([$t93], "Transaction_DataModule", C, false));
    if ($.truthy($.eq((await $.wv([$t93, $t94], "Text", C, false)), (await $.wv([$t93, $t94], "EmptyStr", C, false))))) {
      return L0.result;
    }
    await $.wset([$t93, $t94], "ConvertationSymbol", (await $.mv((await $.mcall((await $.wv([$t93, $t94], "Transactions", C, false)), "FieldByName", ["OutBalanceChar"])), "AsInteger")), { get: async () => L0["convertationsymbol"], set: async (v) => { L0["convertationsymbol"] = v; }, local: true });
    if ($.truthy($.not((await $.mcall((await $.wv([$t93, $t94], "ConvertationSymbols", C, false)), "Locate", ["ID", (await $.wv([$t93, $t94], "ConvertationSymbol", { get: async () => L0["convertationsymbol"], set: async (v) => { L0["convertationsymbol"] = v; }, local: true }, false)), []]))))) {
      await $.wset([$t93, $t94], "Modifed", (await $.wv([$t93, $t94], "False", C, false)), C);
      await $.wset([$t93, $t94], "Color", (await $.wv([$t93, $t94], "clRed", C, false)), C);
      await $.stmt($.wcall([$t93, $t94], "SetFocus", [], C));
    } else {
      await $.wset([$t93, $t94], "Color", (await $.wv([$t93, $t94], "clWhite", C, false)), C);
      await $.wset([$t93, $t94], "Modifed", (await $.wv([$t93, $t94], "True", C, false)), C);
    }
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TTransactionForm", "ConvertationSymbolIDBEditKeyPress", async function ConvertationSymbolIDBEditKeyPress(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "key": $.asRef(p1), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.eq((await L0["key"].get()), "\r"))) {
    await $.mcall((await $.v(C, "ConvertationSymbolLookUp")), "SetFocus", []);
  }
  return L0.result;
}, {"params": ["Sender", "Key"], "kind": "procedure", "ptypes": ["TObject", "Char"]});
  U.method("TTransactionForm", "ConvertationSymbolLookUpKeyPress", async function ConvertationSymbolLookUpKeyPress(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "key": $.asRef(p1), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.eq((await L0["key"].get()), "\r"))) {
    await $.mcall((await $.v(C, "TrDestNoEdit")), "SetFocus", []);
  }
  return L0.result;
}, {"params": ["Sender", "Key"], "kind": "procedure", "ptypes": ["TObject", "Char"]});
  U.method("TTransactionForm", "CountrIDDBEditChange", async function CountrIDDBEditChange(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.set(C, "Modifed", true);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TTransactionForm", "CountrIDDBEditKeyPress", async function CountrIDDBEditKeyPress(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "key": $.asRef(p1), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.eq((await L0["key"].get()), "\r"))) {
    await $.mcall((await $.v(C, "CountrIDLookUp")), "SetFocus", []);
  }
  return L0.result;
}, {"params": ["Sender", "Key"], "kind": "procedure", "ptypes": ["TObject", "Char"]});
  U.method("TTransactionForm", "CountrIDLookUpKeyPress", async function CountrIDLookUpKeyPress(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "key": $.asRef(p1), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.eq((await L0["key"].get()), "\r"))) {
    await $.mcall((await $.v(C, "ReportIDDBEdit")), "SetFocus", []);
  }
  return L0.result;
}, {"params": ["Sender", "Key"], "kind": "procedure", "ptypes": ["TObject", "Char"]});
  U.method("TTransactionForm", "DebitCurrencyRateChange", async function DebitCurrencyRateChange(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.set(C, "Modifed", true);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TTransactionForm", "LoadComboData", async function LoadComboData(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t95 = (await $.mv((await $.v(C, "Transaction_DataModule")), "Destinations"));
    const $t96 = (await $.wv([$t95], "Sender", { get: async () => L0["sender"], set: async (v) => { L0["sender"] = v; }, local: true }, false));
    if ($.truthy($.not(((await $.wv([$t95, $t96], "Active", C, false)))))) {
      await $.stmt($.wcall([$t95, $t96], "Open", [], C));
    } else {
      await $.stmt($.wcall([$t95, $t96], "Refresh", [], C));
    }
    if ($.truthy($.ne((await $.mv((await $.wv([$t95, $t96], "Items", C, false)), "Count")), (await $.wv([$t95, $t96], "RecordCount", C, false))))) {
      await $.mcall((await $.wv([$t95, $t96], "Items", C, false)), "Clear", []);
      await $.stmt($.wcall([$t95, $t96], "First", [], C));
      while ($.truthy($.not(((await $.wv([$t95, $t96], "EOF", C, false)))))) {
        await $.stmt((await $.mcall((await $.wv([$t95, $t96], "Items", C, false)), "Add", [(await $.mv((await $.wcall([$t95, $t96], "FieldByName", ["NAME"], C)), "AsString"))])));
        await $.stmt($.wcall([$t95, $t96], "Next", [], C));
        await $.tick();
      }
    }
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TComboBox"]});
  U.method("TTransactionForm", "ComboBox1DropDown", async function ComboBox1DropDown(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.stmt((await $.call(C, "LoadComboData", [(await $.call(C, "TComboBox", [L0["sender"]]))])));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TTransactionForm", "ComboBox1Click", async function ComboBox1Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t97 = (await $.v(C, "Transaction_DataModule"));
    await $.mset((await $.mcall((await $.wv([$t97], "Transactions", C, false)), "FieldByName", ["Name"])), "AsString", (await $.mv(((await $.wv([$t97], "Sender", { get: async () => L0["sender"], set: async (v) => { L0["sender"] = v; }, local: true }, false))), "Text")));
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TTransactionForm", "BtnCredCustomerClick", async function BtnCredCustomerClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mcall((await $.v(C, "EditKredBal_CN")), "Clear", []);
  await $.mcall((await $.v(C, "EditCredAccNo")), "Clear", []);
  {
    const $t98 = (await $.v(C, "Transaction_DataModule"));
    const $t99 = (await $.wv([$t98], "ODS_Account", C, false));
    { const $t100 = await $.iset((await $.wv([$t98, $t99], "SQL", C, false)), [18], ""); if ($t100 !== undefined) { await $.wset([$t98, $t99], "SQL", $t100, C); } }
    await $.stmt($.wcall([$t98, $t99], "close", [], C));
    if ($.truthy($.ne((await $.mv((await $.wv([$t98, $t99], "Edit_CCustId", C, false)), "Text")), ""))) {
      { const $t101 = await $.iset((await $.wv([$t98, $t99], "SQL", C, false)), [18], $.add("and  A.Kli_ID=", (await $.mv((await $.wv([$t98, $t99], "Edit_CCustId", C, false)), "Text")))); if ($t101 !== undefined) { await $.wset([$t98, $t99], "SQL", $t101, C); } }
    }
    if ($.truthy($.ne((await $.mv((await $.wv([$t98, $t99], "CreditCurrencyIDEdit", C, false)), "Text")), ""))) {
      { const $t102 = await $.iset((await $.wv([$t98, $t99], "SQL", C, false)), [18], $.add($.add((await $.idx((await $.wv([$t98, $t99], "SQL", C, false)), [18])), " and  A.VAL_ACC="), (await $.mv((await $.wv([$t98, $t99], "CreditCurrencyIDEdit", C, false)), "Text")))); if ($t102 !== undefined) { await $.wset([$t98, $t99], "SQL", $t102, C); } }
    }
    if ($.truthy($.ne((await $.mv((await $.wv([$t98, $t99], "EditKredBal_CN", C, false)), "Text")), ""))) {
      { const $t103 = await $.iset((await $.wv([$t98, $t99], "SQL", C, false)), [18], $.add($.add($.add($.add((await $.idx((await $.wv([$t98, $t99], "SQL", C, false)), [18])), " and B.BAL_CN="), "'"), (await $.mv((await $.wv([$t98, $t99], "EditKredBal_CN", C, false)), "Text"))), "'")); if ($t103 !== undefined) { await $.wset([$t98, $t99], "SQL", $t103, C); } }
    }
    await $.stmt($.wcall([$t98, $t99], "open", [], C));
  }
  await $.mset((await $.v(C, "FormAccounts")), "DebOrKred", false);
  await $.mset((await $.v(C, "FormAccounts")), "v_AccNo", (await $.mv((await $.v(C, "EditCredAccNo")), "Text")));
  await $.mcall((await $.v(C, "FormAccounts")), "ShowModal", []);
  await $.mset((await $.v(C, "EditKredBal_CN")), "Text", (await $.mv((await $.v(C, "FormAccounts")), "v_bal_cn")));
  await $.mset((await $.v(C, "EditCredAccNo")), "Text", (await $.mv((await $.v(C, "FormAccounts")), "v_AccNo")));
  await $.mset((await $.v(C, "Edit_CCustId")), "Text", (await $.mv((await $.v(C, "FormAccounts")), "v_KliID")));
  await $.mcall((await $.v(C, "Edit_CCustId")), "SetFocus", []);
  await $.stmt((await $.call(C, "keybd_event", [(await $.v(C, "VK_RETURN")), 0, 0, 0])));
  {
    const $t104 = (await $.v(C, "Transaction_DataModule"));
    await $.mcall((await $.wv([$t104], "CreditAccData", C, false)), "Close", []);
    await $.stmt((await $.mcall((await $.wv([$t104], "CreditAccData", C, false)), "SetVariable", ["v_id", (await $.mv((await $.mcall((await $.wv([$t104], "ODS_Account", C, false)), "FieldByName", ["ID"])), "AsInteger"))])));
    await $.mcall((await $.wv([$t104], "CreditAccData", C, false)), "Open", []);
    await $.mset((await $.mcall((await $.wv([$t104], "Transactions", C, false)), "FieldByName", ["CREDITID"])), "AsInteger", (await $.mv((await $.mcall((await $.wv([$t104], "CreditAccData", C, false)), "FieldByName", ["ID"])), "AsInteger")));
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TTransactionForm", "BtnDebtCustomerClick", async function BtnDebtCustomerClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mcall((await $.v(C, "EditDebtBal_CN")), "Clear", []);
  await $.mcall((await $.v(C, "EditDebtAccNo")), "Clear", []);
  {
    const $t105 = (await $.v(C, "Transaction_DataModule"));
    const $t106 = (await $.wv([$t105], "ODS_Account", C, false));
    { const $t107 = await $.iset((await $.wv([$t105, $t106], "SQL", C, false)), [18], ""); if ($t107 !== undefined) { await $.wset([$t105, $t106], "SQL", $t107, C); } }
    await $.stmt($.wcall([$t105, $t106], "close", [], C));
    if ($.truthy($.ne((await $.mv((await $.wv([$t105, $t106], "Edit_DCustId", C, false)), "Text")), ""))) {
      { const $t108 = await $.iset((await $.wv([$t105, $t106], "SQL", C, false)), [18], $.add("and  A.Kli_ID=", (await $.mv((await $.wv([$t105, $t106], "Edit_DCustId", C, false)), "Text")))); if ($t108 !== undefined) { await $.wset([$t105, $t106], "SQL", $t108, C); } }
    }
    if ($.truthy($.ne((await $.mv((await $.wv([$t105, $t106], "DebitCurrencyIDEdit", C, false)), "Text")), ""))) {
      { const $t109 = await $.iset((await $.wv([$t105, $t106], "SQL", C, false)), [18], $.add($.add((await $.idx((await $.wv([$t105, $t106], "SQL", C, false)), [18])), " and  A.VAL_ACC="), (await $.mv((await $.wv([$t105, $t106], "DebitCurrencyIDEdit", C, false)), "Text")))); if ($t109 !== undefined) { await $.wset([$t105, $t106], "SQL", $t109, C); } }
    }
    if ($.truthy($.ne((await $.mv((await $.wv([$t105, $t106], "EditDebtBal_CN", C, false)), "Text")), ""))) {
      { const $t110 = await $.iset((await $.wv([$t105, $t106], "SQL", C, false)), [18], $.add($.add($.add($.add((await $.idx((await $.wv([$t105, $t106], "SQL", C, false)), [18])), " and B.BAL_CN="), "'"), (await $.mv((await $.wv([$t105, $t106], "EditDebtBal_CN", C, false)), "Text"))), "'")); if ($t110 !== undefined) { await $.wset([$t105, $t106], "SQL", $t110, C); } }
    }
    await $.stmt($.wcall([$t105, $t106], "open", [], C));
  }
  await $.mset((await $.v(C, "FormAccounts")), "DebOrKred", true);
  await $.mset((await $.v(C, "FormAccounts")), "v_AccNo", (await $.mv((await $.v(C, "EditDebtAccNo")), "Text")));
  await $.mcall((await $.v(C, "FormAccounts")), "ShowModal", []);
  await $.mset((await $.v(C, "EditDebtBal_CN")), "Text", (await $.mv((await $.v(C, "FormAccounts")), "v_bal_cn")));
  await $.mset((await $.v(C, "EditDebtAccNo")), "Text", (await $.mv((await $.v(C, "FormAccounts")), "v_AccNo")));
  await $.mset((await $.v(C, "Edit_DCustId")), "Text", (await $.mv((await $.v(C, "FormAccounts")), "v_KliID")));
  await $.mcall((await $.v(C, "Edit_DCustId")), "SetFocus", []);
  await $.stmt((await $.call(C, "keybd_event", [(await $.v(C, "VK_RETURN")), 0, 0, 0])));
  {
    const $t111 = (await $.v(C, "Transaction_DataModule"));
    await $.mcall((await $.wv([$t111], "DebitAccData", C, false)), "Close", []);
    await $.stmt((await $.mcall((await $.wv([$t111], "DebitAccData", C, false)), "SetVariable", ["v_id", (await $.mv((await $.mcall((await $.wv([$t111], "ODS_Account", C, false)), "FieldByName", ["ID"])), "AsInteger"))])));
    await $.mcall((await $.wv([$t111], "DebitAccData", C, false)), "Open", []);
  }
  await $.mset((await $.mcall((await $.mv((await $.v(C, "Transaction_DataModule")), "Transactions")), "FieldByName", ["DEBITID"])), "AsInteger", (await $.mv((await $.mcall((await $.mv((await $.v(C, "Transaction_DataModule")), "DebitAccData")), "FieldByName", ["ID"])), "AsInteger")));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TTransactionForm", "Button1Click", async function Button1Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t112 = (await $.v(C, "Transaction_DataModule"));
    const $t113 = (await $.wv([$t112], "PACKBPROC", C, false));
    await $.stmt((await $.wcall([$t112, $t113], "callprocedure", ["execbprocess", [(await $.mv((await $.wv([$t112, $t113], "BProcDataID", C, false)), "AsVariant")), (await $.mv((await $.wv([$t112, $t113], "CurrencyEditDebit", C, false)), "Value")), (await $.mv((await $.wv([$t112, $t113], "CurrencyEditCredit", C, false)), "Value")), (await $.mv((await $.wv([$t112, $t113], "CurrencyEditLammount", C, false)), "Value")), (await $.mv((await $.wv([$t112, $t113], "CashSymbolLookUp", C, false)), "KeyValue")), (await $.mv((await $.wv([$t112, $t113], "ConvertationSymbolLookUp", C, false)), "KeyValue")), (await $.mv((await $.wv([$t112, $t113], "DBEditDestination", C, false)), "text")), (await $.mv((await $.wv([$t112, $t113], "ReportIDDBEdit", C, false)), "Text")), (await $.mv((await $.wv([$t112, $t113], "CountrIDDBEdit", C, false)), "Text"))]], C)));
    await $.mcall((await $.wv([$t112, $t113], "BPTransData", C, false)), "Close", []);
    await $.mcall((await $.wv([$t112, $t113], "BPTransData", C, false)), "Open", []);
    if ($.truthy($.eq((await $.mv((await $.wv([$t112, $t113], "frmBTrans", C, false)), "ShowModal")), (await $.wv([$t112, $t113], "IDOK", C, false))))) {
      try {
        await $.stmt((await $.wcall([$t112, $t113], "callprocedure", ["commitprocs", []], C)));
      } finally {
        await $.mcall((await $.wv([$t112, $t113], "Session", C, false)), "commit", []);
      }
    } else {
      await $.mcall((await $.wv([$t112, $t113], "Session", C, false)), "commit", []);
    }
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TTransactionForm", "Button2Click", async function Button2Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.stmt((await $.mcall((await $.v(C, "EditCredAccNo")), "OnDblClick", [L0["sender"]])));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  return U;
}
