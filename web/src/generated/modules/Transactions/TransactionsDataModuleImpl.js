// Generated from TransactionsDataModuleImpl.pas by pas2js — do not edit by hand; regenerate instead.
/* eslint-disable */
// @ts-nocheck

export default function define($) {
  const U = $.unit("TransactionsDataModuleImpl", ["Windows", "Messages", "SysUtils", "Classes", "Graphics", "Controls", "Forms", "Dialogs", "Db", "OracleData", "Oracle", "TransactionsMainFormImpl", "SBTransaction", "SBSrvIntf", "TransactionPropertiesForm_Unit", "SBMessage"]);
  const C = [U];
  U.const("asUnknown", 0);
  U.const("asDebit", 1);
  U.const("asCredit", 2);
  U.defClass("TTransactionsDataModule", "TDataModule", {"transactions": {"name": "Transactions", "type": "TDataSource"}, "debitcurrency": {"name": "DebitCurrency", "type": "TDataSource"}, "debitcurrencydata": {"name": "DebitCurrencyData", "type": "TOracleDataSet"}, "creditcurrency": {"name": "CreditCurrency", "type": "TDataSource"}, "creditcurrencydata": {"name": "CreditCurrencyData", "type": "TOracleDataSet"}, "debitaccs": {"name": "DebitAccs", "type": "TDataSource"}, "debitaccdata": {"name": "DebitAccData", "type": "TOracleDataSet"}, "creditaccs": {"name": "CreditAccs", "type": "TDataSource"}, "creditaccdata": {"name": "CreditAccData", "type": "TOracleDataSet"}, "bankm": {"name": "BankM", "type": "TDataSource"}, "bankmdata": {"name": "BankMData", "type": "TOracleDataSet"}, "debitcurrencydataid": {"name": "DebitCurrencyDataID", "type": "TIntegerField"}, "debitcurrencydatasname": {"name": "DebitCurrencyDataSNAME", "type": "TStringField"}, "debitcurrencydataname": {"name": "DebitCurrencyDataNAME", "type": "TStringField"}, "debitcurrencydatarate": {"name": "DebitCurrencyDataRATE", "type": "TFloatField"}, "creditcurrencydataid": {"name": "CreditCurrencyDataID", "type": "TIntegerField"}, "creditcurrencydatasname": {"name": "CreditCurrencyDataSNAME", "type": "TStringField"}, "creditcurrencydataname": {"name": "CreditCurrencyDataNAME", "type": "TStringField"}, "creditcurrencydatarate": {"name": "CreditCurrencyDataRATE", "type": "TFloatField"}, "transactionsdata": {"name": "TransactionsData", "type": "TOracleDataSet"}, "currencyfield1": {"name": "CurrencyField1", "type": "TCurrencyField"}, "sbreport": {"name": "SBReport", "type": "TOraclePackage"}, "inbalancesymbolsdata": {"name": "InBalanceSymbolsData", "type": "TOracleDataSet"}, "inbalancesymbols": {"name": "InBalanceSymbols", "type": "TDataSource"}, "outbalancesymbolsdata": {"name": "OutbalanceSymbolsData", "type": "TOracleDataSet"}, "outbalancesymbols": {"name": "OutbalanceSymbols", "type": "TDataSource"}, "transactionsdataid": {"name": "TransactionsDataID", "type": "TFloatField"}, "transactionsdatadebitid": {"name": "TransactionsDataDEBITID", "type": "TFloatField"}, "transactionsdatadebitaccno": {"name": "TransactionsDataDEBITACCNO", "type": "TStringField"}, "transactionsdatadebitcurrencyid": {"name": "TransactionsDataDEBITCURRENCYID", "type": "TFloatField"}, "transactionsdatadebitcurrencysname": {"name": "TransactionsDataDEBITCURRENCYSNAME", "type": "TStringField"}, "transactionsdatacreditid": {"name": "TransactionsDataCREDITID", "type": "TFloatField"}, "transactionsdatacreditaccno": {"name": "TransactionsDataCREDITACCNO", "type": "TStringField"}, "transactionsdatacreditcurrencysname": {"name": "TransactionsDataCREDITCURRENCYSNAME", "type": "TStringField"}, "transactionsdatadebitamount": {"name": "TransactionsDataDEBITAMOUNT", "type": "TFloatField"}, "transactionsdatacreditamount": {"name": "TransactionsDataCREDITAMOUNT", "type": "TFloatField"}, "transactionsdatalamount": {"name": "TransactionsDataLAMOUNT", "type": "TFloatField"}, "transactionsdatadebitrate": {"name": "TransactionsDataDEBITRATE", "type": "TFloatField"}, "transactionsdatacreditrate": {"name": "TransactionsDataCREDITRATE", "type": "TFloatField"}, "transactionsdatadebitbank": {"name": "TransactionsDataDEBITBANK", "type": "TFloatField"}, "transactionsdatacreditbank": {"name": "TransactionsDataCREDITBANK", "type": "TFloatField"}, "transactionsdataname": {"name": "TransactionsDataNAME", "type": "TStringField"}, "transactionsdatatransactiondate": {"name": "TransactionsDataTransactionDate", "type": "TDateTimeField"}, "creditaccountdatabalance": {"name": "CreditAccountDataBALANCE", "type": "TFloatField"}, "creditaccountdatalbalance": {"name": "CreditAccountDataLBALANCE", "type": "TFloatField"}, "debitaccountdatabalance": {"name": "DebitAccountDataBALANCE", "type": "TFloatField"}, "debitaccountdatalbalance": {"name": "DebitAccountDataLBALANCE", "type": "TFloatField"}, "debitaccountdata": {"name": "DebitAccountData", "type": "TOracleDataSet"}, "creditaccountdata": {"name": "CreditAccountData", "type": "TOracleDataSet"}, "debitaccountdataiscacheaccount": {"name": "DebitAccountDataISCACHEACCOUNT", "type": "TFloatField"}, "creditaccountdataiscacheaccount": {"name": "CreditAccountDataISCACHEACCOUNT", "type": "TFloatField"}, "odscommisiontrans": {"name": "ODSCommisionTrans", "type": "TOracleDataSet"}, "dscommisiontrans": {"name": "DSCommisionTrans", "type": "TDataSource"}, "odscommisiontransid": {"name": "ODSCommisionTransID", "type": "TFloatField"}, "odscommisiontransname": {"name": "ODSCommisionTransNAME", "type": "TStringField"}, "odscommisiontransdebt": {"name": "ODSCommisionTransDEBT", "type": "TFloatField"}, "odscommisiontransdebitaccount": {"name": "ODSCommisionTransDEBITACCOUNT", "type": "TStringField"}, "odscommisiontransdebitcurrency": {"name": "ODSCommisionTransDEBITCURRENCY", "type": "TStringField"}, "odscommisiontranscredit": {"name": "ODSCommisionTransCREDIT", "type": "TFloatField"}, "odscommisiontranscreditaccount": {"name": "ODSCommisionTransCREDITACCOUNT", "type": "TStringField"}, "odscommisiontranscreditcurrency": {"name": "ODSCommisionTransCREDITCURRENCY", "type": "TStringField"}, "odscommisiontransadditionaldebt": {"name": "ODSCommisionTransADDITIONALDEBT", "type": "TFloatField"}, "odscommisiontransadditionalcredit": {"name": "ODSCommisionTransADDITIONALCREDIT", "type": "TFloatField"}, "odscommisiontransadebt": {"name": "ODSCommisionTransADEBT", "type": "TStringField"}, "odscommisiontransacredit": {"name": "ODSCommisionTransACREDIT", "type": "TStringField"}, "odscommisiontransassignment": {"name": "ODSCommisionTransASSIGNMENT", "type": "TStringField"}, "odscommisiontranscommisionassignment": {"name": "ODSCommisionTransCOMMISIONASSIGNMENT", "type": "TStringField"}, "opcomplextrans": {"name": "OPComplexTrans", "type": "TOraclePackage"}, "filialsdata": {"name": "FilialsData", "type": "TOracleDataSet"}, "filialsdataid": {"name": "FilialsDataID", "type": "TFloatField"}, "filialsdataname": {"name": "FilialsDataNAME", "type": "TStringField"}, "filials": {"name": "Filials", "type": "TDataSource"}, "filialscdata": {"name": "FilialsCData", "type": "TOracleDataSet"}, "filialsc": {"name": "FilialsC", "type": "TDataSource"}, "usdata": {"name": "UsData", "type": "TOracleDataSet"}, "usdataid": {"name": "UsDataID", "type": "TFloatField"}, "usdataname": {"name": "UsDataNAME", "type": "TStringField"}, "us": {"name": "Us", "type": "TDataSource"}, "oraclepackage": {"name": "OraclePackage", "type": "TOraclePackage"}, "transactionsdatacyphercode": {"name": "TransactionsDataCYPHERCODE", "type": "TIntegerField"}, "transactionsdataoperationcode": {"name": "TransactionsDataOPERATIONCODE", "type": "TIntegerField"}, "transactionsdatainbalancechar": {"name": "TransactionsDataINBALANCECHAR", "type": "TIntegerField"}, "transactionsdataoutbalancechar": {"name": "TransactionsDataOUTBALANCECHAR", "type": "TIntegerField"}, "transactionsdatafilialid": {"name": "TransactionsDataFILIALID", "type": "TIntegerField"}, "transactionsdatadebitbalance": {"name": "TransactionsDataDEBITBALANCE", "type": "TFloatField"}, "transactionsdatastatus": {"name": "TransactionsDataSTATUS", "type": "TFloatField"}, "transactionsdatareject_reason": {"name": "TransactionsDataREJECT_REASON", "type": "TStringField"}, "transactionsdatapackagenumber": {"name": "TransactionsDataPACKAGENUMBER", "type": "TIntegerField"}, "transactionsdatacreditcurrencyid": {"name": "TransactionsDataCREDITCURRENCYID", "type": "TIntegerField"}, "ftransactionsdelayedbydefault": {"name": "FTransactionsDelayedByDefault", "type": "Boolean"}, "fmainform": {"name": "FMainForm", "type": "TTransactionsMainForm"}, "flastcacheaccountside": {"name": "FLastCacheAccountSide", "type": "TAccountSide"}}, {"transactionsdelayedbydefault": {"name": "TransactionsDelayedByDefault", "read": "FTransactionsDelayedByDefault", "write": "FTransactionsDelayedByDefault"}, "mainform": {"name": "MainForm", "read": "FMainForm", "write": "FMainForm"}, "lastcacheaccountside": {"name": "LastCacheAccountSide", "read": "FLastCacheAccountSide", "write": "FLastCacheAccountSide"}});
  U.init(async () => {
    U.var_("TransactionsDataModule", null, "TTransactionsDataModule");
  });
  U.method("TTransactionsDataModule", "TransactionsDataApplyRecord", async function TransactionsDataApplyRecord(Self, p0, p1, p2, p3) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "action": $.copyArg(p1), "applied": $.asRef(p2), "newrowid": $.asRef(p3), result: undefined, "transaction": $.rec("ttransaction"), "flags": []};
  await $.fixArgs(L0, ["sender", "action"]);
  L0["buildtransaction"] = $.fn(async function BuildTransaction() {
  const L1 = {result: undefined};
  await $.stmt((await $.call(C, "SB_InitializeTransaction", [$.ref(async () => L0["transaction"], async ($t1) => { L0["transaction"] = $t1; })])));
  {
    const $t2 = L0["sender"];
    const $t3 = (await $.wv([$t2], "Transaction", { get: async () => L0["transaction"], set: async (v) => { L0["transaction"] = v; }, local: true }, false));
    await $.wset([$t2, $t3], "TransactionDate", (await $.mv((await $.wcall([$t2, $t3], "FieldByName", ["TransactionDate"], C)), "AsDateTime")), C);
    await $.wset([$t2, $t3], "hDebit", (await $.mv((await $.wcall([$t2, $t3], "FieldByName", ["DebitID"], C)), "AsInteger")), C);
    await $.wset([$t2, $t3], "hCredit", (await $.mv((await $.wcall([$t2, $t3], "FieldByName", ["CreditID"], C)), "AsInteger")), C);
    await $.wset([$t2, $t3], "DebitAmount", (await $.mv((await $.wcall([$t2, $t3], "FieldByName", ["DebitAmount"], C)), "AsCurrency")), C);
    await $.wset([$t2, $t3], "CreditAmount", (await $.mv((await $.wcall([$t2, $t3], "FieldByName", ["CreditAmount"], C)), "AsCurrency")), C);
    await $.wset([$t2, $t3], "LAmount", (await $.mv((await $.wcall([$t2, $t3], "FieldByName", ["LAmount"], C)), "AsCurrency")), C);
    await $.wset([$t2, $t3], "DebitRate", (await $.mv((await $.wcall([$t2, $t3], "FieldByName", ["DebitRate"], C)), "AsCurrency")), C);
    await $.wset([$t2, $t3], "CreditRate", (await $.mv((await $.wcall([$t2, $t3], "FieldByName", ["CreditRate"], C)), "AsCurrency")), C);
    await $.wset([$t2, $t3], "DebitBankID", (await $.mv((await $.wcall([$t2, $t3], "FieldByName", ["DebitBank"], C)), "AsInteger")), C);
    await $.wset([$t2, $t3], "CreditBankID", (await $.mv((await $.wcall([$t2, $t3], "FieldByName", ["CreditBank"], C)), "AsInteger")), C);
    await $.wset([$t2, $t3], "FilialID", (await $.mv((await $.wcall([$t2, $t3], "FieldByName", ["FilialID"], C)), "AsInteger")), C);
    await $.wset([$t2, $t3], "PackageNumber", (await $.mv((await $.wcall([$t2, $t3], "FieldByName", ["PackageNumber"], C)), "AsInteger")), C);
    await $.wset([$t2, $t3], "InbalanceChar", (await $.mv((await $.wcall([$t2, $t3], "FieldByName", ["InbalanceChar"], C)), "AsInteger")), C);
    await $.wset([$t2, $t3], "OutBalanceChar", (await $.mv((await $.wcall([$t2, $t3], "FieldByName", ["OutbalanceChar"], C)), "AsInteger")), C);
    await $.wset([$t2, $t3], "CypherCode", (await $.mv((await $.wcall([$t2, $t3], "FieldByName", ["CypherCode"], C)), "AsInteger")), C);
    await $.wset([$t2, $t3], "OperationCode", (await $.mv((await $.wcall([$t2, $t3], "FieldByName", ["OperationCode"], C)), "AsInteger")), C);
    await $.wset([$t2, $t3], "TrName", (await $.mv((await $.wcall([$t2, $t3], "FieldByName", ["Name"], C)), "AsString")), C);
    {
      const $t4 = (await $.wcall([$t2, $t3], "FieldByName", ["ID"], C));
      if ($.truthy((await $.wv([$t2, $t3, $t4], "IsNull", C, false)))) {
        await $.wset([$t2, $t3, $t4], "TransactionID", (-(1)), C);
      } else {
        await $.wset([$t2, $t3, $t4], "TransactionID", (await $.wv([$t2, $t3, $t4], "AsInteger", C, false)), C);
      }
    }
    await $.wset([$t2, $t3], "ParentID", (-(1)), C);
  }
  if ($.truthy($.not((await $.v(C, "TransactionsDelayedByDefault"))))) {
    L0["flags"] = $.add(L0["flags"], [(await $.v(C, "tfCommitImmediate"))]);
  }
  return L1.result;
});
  L0["flags"] = [];
  { const $t5 = L0["action"];
    if ($.eq($t5, "I")) {
      await $.stmt($.callv(L0["buildtransaction"], []));
      await $.stmt((await $.call(C, "Sb_AddTransaction", [$.ref(async () => L0["transaction"], async ($t6) => { L0["transaction"] = $t6; }), L0["flags"]])));
      await $.stmt((await $.call(C, "SetCommisionTransaction", [(await $.mv((await $.v(C, "MainForm")), "isCommisionTransaction")), (await $.mv((await $.mcall((await $.v(C, "ODSCommisionTrans")), "FieldByName", ["ID"])), "AsInteger")), (await $.mv(L0["transaction"], "hDebit")), (await $.mv(L0["transaction"], "hCredit")), (await $.mv(L0["transaction"], "DebitAmount")), (await $.mv(L0["transaction"], "CreditAmount"))])));
      await L0["applied"].set(true);
    }
    else if ($.eq($t5, "U")) {
      await $.stmt($.callv(L0["buildtransaction"], []));
      await $.stmt((await $.call(C, "SB_DeleteTransaction", [(await $.mv((await $.mcall(L0["sender"], "FieldByName", ["ID"])), "AsInteger")), []])));
      await $.stmt((await $.call(C, "SB_AddTransaction", [$.ref(async () => L0["transaction"], async ($t7) => { L0["transaction"] = $t7; }), []])));
      await L0["applied"].set(true);
    }
    else if ($.eq($t5, "L") || $.eq($t5, "R") || $.eq($t5, "C")) {
      await L0["applied"].set(true);
    }
    else {
      await L0["applied"].set(false);
    }
  }
  return L0.result;
}, {"params": ["Sender", "Action", "Applied", "NewRowId"], "kind": "procedure", "ptypes": ["TOracleDataSet", "Char", "Boolean", "String"]});
  U.method("TTransactionsDataModule", "DebitCurrencyDataAfterScroll", async function DebitCurrencyDataAfterScroll(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"dataset": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["dataset"]);
  if ($.truthy($.not((await $.mv(L0["dataset"], "ControlsDisabled"))))) {
    await $.mset((await $.v(C, "TransactionsDataDEBITRATE")), "Value", (await $.mv((await $.v(C, "DebitCurrencyDataRate")), "Value")));
  }
  if ($.truthy($.eq((await $.mv((await $.v(C, "TransactionsData")), "State")), (await $.v(C, "dsInsert"))))) {
    await $.mcall((await $.mcall((await $.mv((await $.v(C, "Transactions")), "DataSet")), "FieldByName", ["DebitID"])), "Clear", []);
    if ($.truthy((await $.call(C, "Assigned", [(await $.v(C, "TransactionPropertiesForm"))])))) {
      {
        const $t8 = (await $.v(C, "TransactionPropertiesForm"));
        await $.mset((await $.wv([$t8], "DebitAmountEdit", C, false)), "Value", 0);
        await $.mset((await $.wv([$t8], "CreditAmountEdit", C, false)), "Value", 0);
        await $.mset((await $.wv([$t8], "DebitLAmountEdit", C, false)), "Value", 0);
        await $.mset((await $.wv([$t8], "CreditLAmountEdit", C, false)), "Value", 0);
        await $.mset((await $.wv([$t8], "DebitAccNoSearchEdit", C, false)), "Text", "");
      }
    }
    await $.mset((await $.mcall((await $.mv((await $.v(C, "Transactions")), "DataSet")), "FieldByName", ["DebitCurrencyID"])), "Value", (await $.mv((await $.mcall(L0["dataset"], "FieldByName", ["ID"])), "Value")));
    await $.mset((await $.mcall((await $.mv((await $.v(C, "Transactions")), "DataSet")), "FieldByName", ["DEBITRATE"])), "Value", (await $.mv((await $.mcall(L0["dataset"], "FieldByName", ["Rate"])), "Value")));
  }
  return L0.result;
}, {"params": ["DataSet"], "kind": "procedure", "ptypes": ["TDataSet"]});
  U.method("TTransactionsDataModule", "CreditCurrencyDataAfterScroll", async function CreditCurrencyDataAfterScroll(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"dataset": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["dataset"]);
  if ($.truthy($.not((await $.mv(L0["dataset"], "ControlsDisabled"))))) {
    await $.mset((await $.v(C, "TransactionsDataCREDITRATE")), "Value", (await $.mv((await $.v(C, "CreditCurrencyDataRate")), "Value")));
  }
  if ($.truthy($.eq((await $.mv((await $.v(C, "TransactionsData")), "State")), (await $.v(C, "dsInsert"))))) {
    await $.mcall((await $.mcall((await $.mv((await $.v(C, "Transactions")), "DataSet")), "FieldByName", ["CreditID"])), "Clear", []);
    if ($.truthy((await $.call(C, "Assigned", [(await $.v(C, "TransactionPropertiesForm"))])))) {
      {
        const $t9 = (await $.v(C, "TransactionPropertiesForm"));
        await $.mset((await $.wv([$t9], "DebitAmountEdit", C, false)), "Value", 0);
        await $.mset((await $.wv([$t9], "CreditAmountEdit", C, false)), "Value", 0);
        await $.mset((await $.wv([$t9], "DebitLAmountEdit", C, false)), "Value", 0);
        await $.mset((await $.wv([$t9], "CreditLAmountEdit", C, false)), "Value", 0);
        await $.mset((await $.wv([$t9], "CreditAccNoSearchEdit", C, false)), "Text", "");
      }
    }
    await $.mset((await $.mcall((await $.mv((await $.v(C, "Transactions")), "DataSet")), "FieldByName", ["CreditCurrencyID"])), "Value", (await $.mv((await $.mcall(L0["dataset"], "FieldByName", ["ID"])), "Value")));
    await $.mset((await $.mcall((await $.mv((await $.v(C, "Transactions")), "DataSet")), "FieldByName", ["CREDITRATE"])), "Value", (await $.mv((await $.mcall(L0["dataset"], "FieldByName", ["Rate"])), "Value")));
  }
  return L0.result;
}, {"params": ["DataSet"], "kind": "procedure", "ptypes": ["TDataSet"]});
  U.method("TTransactionsDataModule", "TransactionsDataDEBITCURRENCYIDChange", async function TransactionsDataDEBITCURRENCYIDChange(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.not((await $.mv((await $.v(C, "DebitCurrencyData")), "ControlsDisabled"))))) {
    await $.mcall((await $.v(C, "DebitCurrencyData")), "DisableControls", []);
    try {
      await $.stmt((await $.mcall((await $.v(C, "DebitCurrencyData")), "Locate", ["ID", (await $.mv(L0["sender"], "Value")), []])));
    } finally {
      await $.mcall((await $.v(C, "DebitCurrencyData")), "EnableControls", []);
    }
  }
  await $.mcall((await $.mcall((await $.mv((await $.v(C, "Transactions")), "DataSet")), "FieldByName", ["DebitID"])), "Clear", []);
  if ($.truthy((await $.call(C, "Assigned", [(await $.v(C, "TransactionPropertiesForm"))])))) {
    await $.mset((await $.mv((await $.v(C, "TransactionPropertiesForm")), "DebitAccNoSearchEdit")), "Text", "");
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TField"]});
  U.method("TTransactionsDataModule", "TransactionsDataCREDITCURRENCYIDChange", async function TransactionsDataCREDITCURRENCYIDChange(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.not((await $.mv((await $.v(C, "CreditCurrencyData")), "ControlsDisabled"))))) {
    await $.mcall((await $.v(C, "CreditCurrencyData")), "DisableControls", []);
    try {
      await $.stmt((await $.mcall((await $.v(C, "CreditCurrencyData")), "Locate", ["ID", (await $.mv(L0["sender"], "Value")), []])));
    } finally {
      await $.mcall((await $.v(C, "CreditCurrencyData")), "EnableControls", []);
    }
  }
  await $.mcall((await $.mcall((await $.mv((await $.v(C, "Transactions")), "DataSet")), "FieldByName", ["CreditID"])), "Clear", []);
  if ($.truthy((await $.call(C, "Assigned", [(await $.v(C, "TransactionPropertiesForm"))])))) {
    await $.mset((await $.mv((await $.v(C, "TransactionPropertiesForm")), "CreditAccNoSearchEdit")), "Text", "");
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TField"]});
  U.method("TTransactionsDataModule", "TransactionsDataChange", async function TransactionsDataChange(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "field": $.copyArg(p1), result: undefined};
  await $.fixArgs(L0, ["sender", "field"]);
  if ($.truthy((await $.call(C, "Assigned", [(await $.v(C, "TransactionPropertiesForm"))])))) {
    await $.mset((await $.v(C, "TransactionPropertiesForm")), "Modified", true);
  }
  return L0.result;
}, {"params": ["Sender", "Field"], "kind": "procedure", "ptypes": ["TObject", "TField"]});
  U.method("TTransactionsDataModule", "DebitAccDataAfterScroll", async function DebitAccDataAfterScroll(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"dataset": $.copyArg(p0), result: undefined, "s": ''};
  await $.fixArgs(L0, ["dataset"]);
  if ($.truthy((await $.call(C, "Assigned", [(await $.v(C, "TransactionPropertiesForm"))])))) {
    {
      const $t10 = (await $.v(C, "TransactionPropertiesForm"));
      if ($.truthy($.not((await $.wv([$t10], "RefreshDisabled", C, false))))) {
        await $.wset([$t10], "S", (await $.mv((await $.mcall((await $.wv([$t10], "DataSet", { get: async () => L0["dataset"], set: async (v) => { L0["dataset"] = v; }, local: true }, false)), "FieldByName", ["ACC_NO"])), "AsString")), { get: async () => L0["s"], set: async (v) => { L0["s"] = v; }, local: true });
        if ($.truthy($.eq((await $.mv((await $.wv([$t10], "DebitAccNoSearchEdit", C, false)), "Tag")), 0))) {
          await $.stmt((await $.wcall([$t10], "SetSelectedText", [(await $.wv([$t10], "DebitAccNoSearchEdit", C, false)), (await $.wv([$t10], "S", { get: async () => L0["s"], set: async (v) => { L0["s"] = v; }, local: true }, false))], C)));
        } else {
          await $.mset((await $.wv([$t10], "DebitAccNoSearchEdit", C, false)), "Tag", 0);
        }
        if ($.truthy($.not((await $.mv((await $.wv([$t10], "DebitAccNoSearchEdit", C, false)), "Focused"))))) {
          await $.mset((await $.wv([$t10], "DebitAccNoSearchEdit", C, false)), "Text", (await $.wv([$t10], "S", { get: async () => L0["s"], set: async (v) => { L0["s"] = v; }, local: true }, false)));
        }
        {
          const $t11 = (await $.mv((await $.wv([$t10], "TransactionsDataModule", C, false)), "TransactionsData"));
          await $.mset((await $.wcall([$t10, $t11], "FieldByName", ["DebitID"], C)), "AsInteger", (await $.mv((await $.mcall((await $.wv([$t10, $t11], "DataSet", { get: async () => L0["dataset"], set: async (v) => { L0["dataset"] = v; }, local: true }, false)), "FieldByName", ["ID"])), "AsInteger")));
          await $.mset((await $.wcall([$t10, $t11], "FieldByName", ["DebitAccNo"], C)), "AsString", (await $.wv([$t10, $t11], "S", { get: async () => L0["s"], set: async (v) => { L0["s"] = v; }, local: true }, false)));
        }
        if ($.truthy((await $.wv([$t10], "Visible", C, false)))) {
          await $.stmt($.wcall([$t10], "PrepareCacheSymbols", [], C));
        }
      }
    }
  }
  return L0.result;
}, {"params": ["DataSet"], "kind": "procedure", "ptypes": ["TDataSet"]});
  U.method("TTransactionsDataModule", "CreditAccDataAfterScroll", async function CreditAccDataAfterScroll(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"dataset": $.copyArg(p0), result: undefined, "s": ''};
  await $.fixArgs(L0, ["dataset"]);
  L0["inprogress"] = false;
  if ($.truthy($.not(L0["inprogress"]))) {
    L0["inprogress"] = true;
    try {
      if ($.truthy((await $.call(C, "Assigned", [(await $.v(C, "TransactionPropertiesForm"))])))) {
        {
          const $t12 = (await $.v(C, "TransactionPropertiesForm"));
          if ($.truthy($.not((await $.wv([$t12], "RefreshDisabled", C, false))))) {
            await $.wset([$t12], "S", (await $.mv((await $.mcall((await $.wv([$t12], "DataSet", { get: async () => L0["dataset"], set: async (v) => { L0["dataset"] = v; }, local: true }, false)), "FieldByName", ["ACC_NO"])), "AsString")), { get: async () => L0["s"], set: async (v) => { L0["s"] = v; }, local: true });
            if ($.truthy($.eq((await $.mv((await $.wv([$t12], "CreditAccNoSearchEdit", C, false)), "Tag")), 0))) {
              await $.stmt((await $.wcall([$t12], "SetSelectedText", [(await $.wv([$t12], "CreditAccNoSearchEdit", C, false)), (await $.wv([$t12], "S", { get: async () => L0["s"], set: async (v) => { L0["s"] = v; }, local: true }, false))], C)));
            } else {
              await $.mset((await $.wv([$t12], "CreditAccNoSearchEdit", C, false)), "Tag", 0);
            }
            if ($.truthy($.not((await $.mv((await $.wv([$t12], "CreditAccNoSearchEdit", C, false)), "Focused"))))) {
              await $.mset((await $.wv([$t12], "CreditAccNoSearchEdit", C, false)), "Text", (await $.wv([$t12], "S", { get: async () => L0["s"], set: async (v) => { L0["s"] = v; }, local: true }, false)));
            }
            {
              const $t13 = (await $.mv((await $.wv([$t12], "TransactionsDataModule", C, false)), "TransactionsData"));
              await $.mset((await $.wcall([$t12, $t13], "FieldByName", ["CreditID"], C)), "AsInteger", (await $.mv((await $.mcall((await $.wv([$t12, $t13], "DataSet", { get: async () => L0["dataset"], set: async (v) => { L0["dataset"] = v; }, local: true }, false)), "FieldByName", ["ID"])), "AsInteger")));
              await $.mset((await $.wcall([$t12, $t13], "FieldByName", ["CreditAccNo"], C)), "AsString", (await $.wv([$t12, $t13], "S", { get: async () => L0["s"], set: async (v) => { L0["s"] = v; }, local: true }, false)));
            }
            if ($.truthy((await $.wv([$t12], "Visible", C, false)))) {
              await $.stmt($.wcall([$t12], "PrepareCacheSymbols", [], C));
            }
          }
        }
      }
    } finally {
      L0["inprogress"] = false;
    }
  }
  return L0.result;
}, {"params": ["DataSet"], "kind": "procedure", "ptypes": ["TDataSet"]});
  U.method("TTransactionsDataModule", "TransactionsDataBeforeEdit", async function TransactionsDataBeforeEdit(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"dataset": $.copyArg(p0), result: undefined, "debitaccid": 0, "creditaccid": 0};
  await $.fixArgs(L0, ["dataset"]);
  L0["dolocate"] = $.fn(async function DoLocate(p0, p1) {
  const L1 = {"dataset": $.copyArg(p0), "fieldname": $.copyArg(p1), result: undefined};
  await $.fixArgs(L1, ["dataset", "fieldname"]);
  {
    const $t14 = L1["dataset"];
    await $.stmt($.wcall([$t14], "DisableControls", [], C));
    try {
      await $.stmt((await $.wcall([$t14], "Locate", ["ID", (await $.mv((await $.mcall((await $.wv([$t14], "TransactionsData", C, false)), "FieldByName", [(await $.wv([$t14], "FieldName", { get: async () => L1["fieldname"], set: async (v) => { L1["fieldname"] = v; }, local: true }, false))])), "AsInteger")), []], C)));
    } finally {
      await $.stmt($.wcall([$t14], "EnableControls", [], C));
    }
  }
  return L1.result;
});
  L0["debitaccid"] = (await $.mv((await $.mcall((await $.v(C, "TransactionsData")), "FieldByName", ["DebitID"])), "AsInteger"));
  L0["creditaccid"] = (await $.mv((await $.mcall((await $.v(C, "TransactionsData")), "FieldByName", ["CreditID"])), "AsInteger"));
  await $.stmt((await $.callv(L0["dolocate"], [(await $.v(C, "DebitCurrencyData")), "DebitCurrencyID"])));
  await $.stmt((await $.callv(L0["dolocate"], [(await $.v(C, "CreditCurrencyData")), "CreditCurrencyID"])));
  await $.stmt((await $.mcall((await $.v(C, "DebitAccData")), "Locate", ["ID", L0["debitaccid"], []])));
  await $.stmt((await $.mcall((await $.v(C, "CreditAccData")), "Locate", ["ID", L0["creditaccid"], []])));
  return L0.result;
}, {"params": ["DataSet"], "kind": "procedure", "ptypes": ["TDataSet"]});
  U.method("TTransactionsDataModule", "TransactionsDataAfterScroll", async function TransactionsDataAfterScroll(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"dataset": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["dataset"]);
  if ($.truthy((await $.and_(($.not((await $.mv(L0["dataset"], "ControlsDisabled")))), async () => ($.eq((await $.mv(L0["dataset"], "State")), (await $.v(C, "dsBrowse")))))))) {
    await $.mcall((await $.v(C, "MainForm")), "TransactionScrolled", []);
  }
  return L0.result;
}, {"params": ["DataSet"], "kind": "procedure", "ptypes": ["TDataSet"]});
  U.method("TTransactionsDataModule", "PrepareCacheSymbols", async function PrepareCacheSymbols(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: undefined, "willrefresh": false, "intaccountside": 0};
  if ($.truthy((await $.and_((await $.and_(($.not((await $.mv((await $.mcall((await $.v(C, "TransactionsData")), "FieldByName", ["DebitID"])), "IsNull")))), async () => ($.eq((await $.mv((await $.mcall((await $.v(C, "DebitAccData")), "FieldByName", ["IsCacheAccount"])), "AsInteger")), 1)))), async () => ($.eq((await $.mv((await $.mcall((await $.v(C, "DebitAccData")), "FieldByName", ["VAL_ACC"])), "AsInteger")), 0)))))) {
    L0["willrefresh"] = $.ne((await $.v(C, "FLastCacheAccountSide")), (await $.v(C, "asDebit")));
    if ($.truthy(L0["willrefresh"])) {
      await $.set(C, "FLastCacheAccountSide", (await $.v(C, "asDebit")));
    }
  } else {
    if ($.truthy((await $.and_((await $.and_(($.not((await $.mv((await $.mcall((await $.v(C, "TransactionsData")), "FieldByName", ["CreditID"])), "IsNull")))), async () => ($.eq((await $.mv((await $.mcall((await $.v(C, "CreditAccData")), "FieldByName", ["IsCacheAccount"])), "AsInteger")), 1)))), async () => ($.eq((await $.mv((await $.mcall((await $.v(C, "CreditAccData")), "FieldByName", ["VAL_ACC"])), "AsInteger")), 0)))))) {
      L0["willrefresh"] = $.ne((await $.v(C, "FLastCacheAccountSide")), (await $.v(C, "asCredit")));
      if ($.truthy(L0["willrefresh"])) {
        await $.set(C, "FLastCacheAccountSide", (await $.v(C, "asCredit")));
      }
    } else {
      L0["willrefresh"] = $.ne((await $.mv((await $.v(C, "InBalanceSymbolsData")), "RecordCount")), 0);
      await $.set(C, "FLastCacheAccountSide", (await $.v(C, "asUnknown")));
    }
  }
  if ($.truthy(L0["willrefresh"])) {
    {
      const $t15 = (await $.v(C, "InBalanceSymbolsData"));
      await $.stmt($.wcall([$t15], "Close", [], C));
      if ($.truthy($.eq((await $.wv([$t15], "FLastCacheAccountSide", C, false)), (await $.wv([$t15], "asDebit", C, false))))) {
        await $.wset([$t15], "IntAccountSide", 0, { get: async () => L0["intaccountside"], set: async (v) => { L0["intaccountside"] = v; }, local: true });
      } else {
        if ($.truthy($.eq((await $.wv([$t15], "FLastCacheAccountSide", C, false)), (await $.wv([$t15], "asCredit", C, false))))) {
          await $.wset([$t15], "IntAccountSide", 1, { get: async () => L0["intaccountside"], set: async (v) => { L0["intaccountside"] = v; }, local: true });
        } else {
          await $.wset([$t15], "IntAccountSide", (-(1)), { get: async () => L0["intaccountside"], set: async (v) => { L0["intaccountside"] = v; }, local: true });
        }
      }
      await $.stmt((await $.wcall([$t15], "SetVariable", ["AccountSide", (await $.wv([$t15], "IntAccountSide", { get: async () => L0["intaccountside"], set: async (v) => { L0["intaccountside"] = v; }, local: true }, false))], C)));
      await $.stmt($.wcall([$t15], "Open", [], C));
      await $.mcall((await $.wv([$t15], "TransactionPropertiesForm", C, false)), "CheckBalanceChar", []);
    }
  }
  return L0.result;
}, {"params": [], "kind": "procedure", "ptypes": []});
  U.method("TTransactionsDataModule", "DataModuleCreate", async function DataModuleCreate(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.set(C, "FLastCacheAccountSide", (await $.v(C, "asUnknown")));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TTransactionsDataModule", "SetCommisionTransaction", async function SetCommisionTransaction(Self, p0, p1, p2, p3, p4, p5) {
  const C = $.chain(Self, U);
  const L0 = {"applied": $.copyArg(p0), "operationid": $.copyArg(p1), "debitid": $.copyArg(p2), "creditid": $.copyArg(p3), "debitammount": $.copyArg(p4), "creditammount": $.copyArg(p5), result: undefined};
  await $.fixArgs(L0, ["applied", "operationid", "debitid", "creditid", "debitammount", "creditammount"]);
  L0["c_name"] = "SetTransactions";
  if ($.truthy(L0["applied"])) {
    {
      const $t16 = (await $.v(C, "OPComplexTrans"));
      await $.stmt((await $.wcall([$t16], "CallProcedure", [(await $.wv([$t16], "c_name", { get: async () => L0["c_name"], set: async (v) => { L0["c_name"] = v; }, local: true }, false)), [(await $.wv([$t16], "operationID", { get: async () => L0["operationid"], set: async (v) => { L0["operationid"] = v; }, local: true }, false)), (await $.wv([$t16], "DebitID", { get: async () => L0["debitid"], set: async (v) => { L0["debitid"] = v; }, local: true }, false)), (await $.wv([$t16], "CreditID", { get: async () => L0["creditid"], set: async (v) => { L0["creditid"] = v; }, local: true }, false)), (await $.wv([$t16], "DebitAmmount", { get: async () => L0["debitammount"], set: async (v) => { L0["debitammount"] = v; }, local: true }, false)), (await $.wv([$t16], "CreditAmmount", { get: async () => L0["creditammount"], set: async (v) => { L0["creditammount"] = v; }, local: true }, false))]], C)));
    }
  }
  return L0.result;
}, {"params": ["applied", "operationID", "DebitID", "CreditID", "DebitAmmount", "CreditAmmount"], "kind": "procedure", "ptypes": ["boolean", "integer", "longint", "longint", "currency", "currency"]});
  return U;
}
