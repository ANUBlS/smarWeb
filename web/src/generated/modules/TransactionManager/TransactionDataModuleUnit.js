// Generated from TransactionDataModuleUnit.pas by pas2js — do not edit by hand; regenerate instead.
/* eslint-disable */
// @ts-nocheck

export default function define($) {
  const U = $.unit("TransactionDataModuleUnit", ["Windows", "Messages", "SysUtils", "Classes", "Graphics", "Controls", "Forms", "Dialogs", "Db", "OracleData", "Oracle", "sboapiDataModuleImpl", "TransactionPropertiesImpl", "TransactionManagerImpl"]);
  const C = [U];
  $.defRecord("ttransaction", {"transactionid": () => 0, "transactiondate": () => 0, "transactionno": () => '', "debitid": () => 0, "creditid": () => 0, "debitamount": () => 0, "creditamount": () => 0, "lamount": () => 0, "debitrate": () => 0, "creditrate": () => 0, "cashsymbol": () => 0, "convertationsymbol": () => 0, "operationcode": () => null, "flags": () => 0, "transactionname": () => ''});
  U.defClass("TTransactionDataModule", "TDataModule", {"sysdat": {"name": "Sysdat", "type": "TOracleDataSet"}, "transactionsdata": {"name": "TransactionsData", "type": "TDataSource"}, "datasysdat": {"name": "DataSysdat", "type": "TDataSource"}, "debitcurrency": {"name": "DebitCurrency", "type": "TDataSource"}, "debitcurrencydata": {"name": "DebitCurrencyData", "type": "TOracleDataSet"}, "debitcurrencydataid": {"name": "DebitCurrencyDataID", "type": "TIntegerField"}, "debitcurrencydatasname": {"name": "DebitCurrencyDataSNAME", "type": "TStringField"}, "debitcurrencydataname": {"name": "DebitCurrencyDataNAME", "type": "TStringField"}, "debitcurrencydatarate": {"name": "DebitCurrencyDataRATE", "type": "TFloatField"}, "creditcurrency": {"name": "CreditCurrency", "type": "TDataSource"}, "creditcurrencydata": {"name": "CreditCurrencyData", "type": "TOracleDataSet"}, "creditcurrencydataid": {"name": "CreditCurrencyDataID", "type": "TIntegerField"}, "creditcurrencydatasname": {"name": "CreditCurrencyDataSNAME", "type": "TStringField"}, "creditcurrencydataname": {"name": "CreditCurrencyDataNAME", "type": "TStringField"}, "creditcurrencydatarate": {"name": "CreditCurrencyDataRATE", "type": "TFloatField"}, "debitaccs": {"name": "DebitAccs", "type": "TDataSource"}, "debitaccdata": {"name": "DebitAccData", "type": "TOracleDataSet"}, "debitaccdataid": {"name": "DebitAccDataID", "type": "TFloatField"}, "debitaccdataacc_no": {"name": "DebitAccDataACC_NO", "type": "TStringField"}, "debitaccdataval_acc": {"name": "DebitAccDataVAL_ACC", "type": "TIntegerField"}, "debitaccdataname": {"name": "DebitAccDataNAME", "type": "TStringField"}, "debitaccdataiscacheaccount": {"name": "DebitAccDataISCACHEACCOUNT", "type": "TFloatField"}, "creditaccdata": {"name": "CreditAccData", "type": "TOracleDataSet"}, "creditaccs": {"name": "CreditAccs", "type": "TDataSource"}, "convertationsymbols": {"name": "ConvertationSymbols", "type": "TOracleDataSet"}, "convertationsymbolsdata": {"name": "ConvertationSymbolsData", "type": "TDataSource"}, "cashsymbols": {"name": "CashSymbols", "type": "TOracleDataSet"}, "cashsymbolsdata": {"name": "CashSymbolsData", "type": "TDataSource"}, "creditaccdataid": {"name": "CreditAccDataID", "type": "TFloatField"}, "creditaccdataacc_no": {"name": "CreditAccDataACC_NO", "type": "TStringField"}, "creditaccdataval_acc": {"name": "CreditAccDataVAL_ACC", "type": "TIntegerField"}, "creditaccdataname": {"name": "CreditAccDataNAME", "type": "TStringField"}, "creditaccdataiscacheaccount": {"name": "CreditAccDataISCACHEACCOUNT", "type": "TFloatField"}, "currency": {"name": "Currency", "type": "TOracleDataSet"}, "operationtypes": {"name": "OperationTypes", "type": "TOracleDataSet"}, "operationtypesdata": {"name": "OperationTypesData", "type": "TDataSource"}, "transactions": {"name": "Transactions", "type": "TOracleDataSet"}, "transactionsid": {"name": "TransactionsID", "type": "TFloatField"}, "transactionsoperatorid": {"name": "TransactionsOPERATORID", "type": "TFloatField"}, "transactionsoperationno": {"name": "TransactionsOPERATIONNO", "type": "TStringField"}, "transactionstransactiondate": {"name": "TransactionsTRANSACTIONDATE", "type": "TDateTimeField"}, "transactionsdebitid": {"name": "TransactionsDEBITID", "type": "TFloatField"}, "transactionsdebitaccno": {"name": "TransactionsDEBITACCNO", "type": "TStringField"}, "transactionsdebitcurrencyid": {"name": "TransactionsDEBITCURRENCYID", "type": "TFloatField"}, "transactionsdebitcurrencysname": {"name": "TransactionsDEBITCURRENCYSNAME", "type": "TStringField"}, "transactionscreditid": {"name": "TransactionsCREDITID", "type": "TFloatField"}, "transactionscreditaccno": {"name": "TransactionsCREDITACCNO", "type": "TStringField"}, "transactionscreditcurrencyid": {"name": "TransactionsCREDITCURRENCYID", "type": "TFloatField"}, "transactionscreditcurrencysname": {"name": "TransactionsCREDITCURRENCYSNAME", "type": "TStringField"}, "transactionsdebitamount": {"name": "TransactionsDEBITAMOUNT", "type": "TFloatField"}, "transactionscreditamount": {"name": "TransactionsCREDITAMOUNT", "type": "TFloatField"}, "transactionslamount": {"name": "TransactionsLAMOUNT", "type": "TFloatField"}, "transactionsdebitrate": {"name": "TransactionsDEBITRATE", "type": "TFloatField"}, "transactionscreditrate": {"name": "TransactionsCREDITRATE", "type": "TFloatField"}, "transactionsdebitbank": {"name": "TransactionsDEBITBANK", "type": "TFloatField"}, "transactionscreditbank": {"name": "TransactionsCREDITBANK", "type": "TFloatField"}, "transactionspackagenumber": {"name": "TransactionsPACKAGENUMBER", "type": "TFloatField"}, "transactionscyphercode": {"name": "TransactionsCYPHERCODE", "type": "TFloatField"}, "transactionsoperationcode": {"name": "TransactionsOPERATIONCODE", "type": "TFloatField"}, "transactionsinbalancechar": {"name": "TransactionsINBALANCECHAR", "type": "TFloatField"}, "transactionsoutbalancechar": {"name": "TransactionsOUTBALANCECHAR", "type": "TFloatField"}, "transactionsfilialid": {"name": "TransactionsFILIALID", "type": "TFloatField"}, "transactionsdebitbalance": {"name": "TransactionsDEBITBALANCE", "type": "TFloatField"}, "transactionsname": {"name": "TransactionsNAME", "type": "TStringField"}, "transactionsflags": {"name": "TransactionsFLAGS", "type": "TFloatField"}, "transactionsstatus": {"name": "TransactionsSTATUS", "type": "TFloatField"}, "transactionsreject_reason": {"name": "TransactionsREJECT_REASON", "type": "TStringField"}, "debitbranch": {"name": "DebitBranch", "type": "TOracleDataSet"}, "debitbranchdata": {"name": "DebitBranchData", "type": "TDataSource"}, "creditbranch": {"name": "CreditBranch", "type": "TOracleDataSet"}, "creditbranchdata": {"name": "CreditBranchData", "type": "TDataSource"}, "usersdata": {"name": "UsersData", "type": "TDataSource"}, "users": {"name": "Users", "type": "TOracleDataSet"}, "operations": {"name": "Operations", "type": "TOracleQuery"}, "valute": {"name": "Valute", "type": "TOracleQuery"}, "transactionsdebitbranch": {"name": "TransactionsDEBITBRANCH", "type": "TFloatField"}, "transactionscreditbranch": {"name": "TransactionsCREDITBRANCH", "type": "TFloatField"}, "sbtransaction": {"name": "SBTransaction", "type": "TOraclePackage"}, "commission": {"name": "Commission", "type": "TOracleDataSet"}, "commissiondata": {"name": "CommissionData", "type": "TDataSource"}, "commissionid": {"name": "CommissionID", "type": "TFloatField"}, "commissionname": {"name": "CommissionNAME", "type": "TStringField"}, "commissiondebt": {"name": "CommissionDEBT", "type": "TFloatField"}, "commissiondebitaccount": {"name": "CommissionDEBITACCOUNT", "type": "TStringField"}, "commissiondebitcurrency": {"name": "CommissionDEBITCURRENCY", "type": "TStringField"}, "commissiondebitcurrencyid": {"name": "CommissionDEBITCURRENCYID", "type": "TFloatField"}, "commissioncredit": {"name": "CommissionCREDIT", "type": "TFloatField"}, "commissioncreditaccount": {"name": "CommissionCREDITACCOUNT", "type": "TStringField"}, "commissioncreditcurrency": {"name": "CommissionCREDITCURRENCY", "type": "TStringField"}, "commissioncreditcurrencyid": {"name": "CommissionCREDITCURRENCYID", "type": "TFloatField"}, "commissionadditionaldebt": {"name": "CommissionADDITIONALDEBT", "type": "TFloatField"}, "commissionadebitaccount": {"name": "CommissionADEBITACCOUNT", "type": "TStringField"}, "commissionadebitcurrency": {"name": "CommissionADEBITCURRENCY", "type": "TStringField"}, "commissionadddebitcurrencyid": {"name": "CommissionADDDEBITCURRENCYID", "type": "TFloatField"}, "commissionadditionalcredit": {"name": "CommissionADDITIONALCREDIT", "type": "TFloatField"}, "commissionacreditaccount": {"name": "CommissionACREDITACCOUNT", "type": "TStringField"}, "commissionacreditcurrency": {"name": "CommissionACREDITCURRENCY", "type": "TStringField"}, "commissionaddcreditcurrencyid": {"name": "CommissionADDCREDITCURRENCYID", "type": "TFloatField"}, "commissionassignment": {"name": "CommissionASSIGNMENT", "type": "TStringField"}, "commissioncommisionassignment": {"name": "CommissionCOMMISIONASSIGNMENT", "type": "TStringField"}, "commissionuserid": {"name": "CommissionUSERID", "type": "TFloatField"}, "sbcomplextrans": {"name": "SBComplexTrans", "type": "TOraclePackage"}, "destinations": {"name": "Destinations", "type": "TOracleDataSet"}, "destinationsdata": {"name": "DestinationsData", "type": "TDataSource"}, "debitaccrestdata": {"name": "DebitAccRestData", "type": "TOracleDataSet"}, "debitaccdatabalance": {"name": "DebitAccDataBALANCE", "type": "TCurrencyField"}, "debitaccdatalbalance": {"name": "DebitAccDataLBALANCE", "type": "TCurrencyField"}, "creditaccrestdata": {"name": "CreditAccRestData", "type": "TOracleDataSet"}, "creditaccdatabalance": {"name": "CreditAccDataBALANCE", "type": "TCurrencyField"}, "creditaccdatalbalance": {"name": "CreditAccDataLBALANCE", "type": "TCurrencyField"}}, {});
  U.init(async () => {
    U.const("cs_generateid", "GenerateID");
    U.const("cs_add_transaction", "transaction_add");
    U.const("cs_del_transaction", "transaction_delete");
    U.const("cs_commit_transaction", "transaction_commit");
    U.const("cs_reject_transaction", "transaction_reject");
    U.const("cs_commission_execute", "SetTransactions");
    U.const("cs_commit_delayed_transactions", "transactions_delayed_commit");
    U.var_("TransactionDataModule", null, "TTransactionDataModule");
  });
  U.method("TTransactionDataModule", "TransactionsApplyRecord", async function TransactionsApplyRecord(Self, p0, p1, p2, p3) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "action": $.copyArg(p1), "applied": $.asRef(p2), "newrowid": $.asRef(p3), result: undefined, "transaction": $.rec("ttransaction")};
  await $.fixArgs(L0, ["sender", "action"]);
  L0["buildtransaction"] = $.fn(async function BuildTransaction() {
  const L1 = {result: undefined};
  {
    const $t1 = L0["sender"];
    const $t2 = (await $.wv([$t1], "Transaction", { get: async () => L0["transaction"], set: async (v) => { L0["transaction"] = v; }, local: true }, false));
    await $.wset([$t1, $t2], "TransactionDate", (await $.mv((await $.wcall([$t1, $t2], "FieldByName", ["TransactionDate"], C)), "AsDateTime")), C);
    await $.wset([$t1, $t2], "TransactionNo", (await $.mv((await $.wcall([$t1, $t2], "FieldByName", ["OperationNo"], C)), "AsString")), C);
    await $.wset([$t1, $t2], "DebitID", (await $.mv((await $.wcall([$t1, $t2], "FieldByName", ["DebitID"], C)), "AsInteger")), C);
    await $.wset([$t1, $t2], "CreditID", (await $.mv((await $.wcall([$t1, $t2], "FieldByName", ["CreditID"], C)), "AsInteger")), C);
    await $.wset([$t1, $t2], "DebitAmount", (await $.mv((await $.wcall([$t1, $t2], "FieldByName", ["DebitAmount"], C)), "AsCurrency")), C);
    await $.wset([$t1, $t2], "CreditAmount", (await $.mv((await $.wcall([$t1, $t2], "FieldByName", ["CreditAmount"], C)), "AsCurrency")), C);
    await $.wset([$t1, $t2], "LAmount", (await $.mv((await $.wcall([$t1, $t2], "FieldByName", ["LAmount"], C)), "AsCurrency")), C);
    await $.wset([$t1, $t2], "DebitRate", (await $.mv((await $.wcall([$t1, $t2], "FieldByName", ["DebitRate"], C)), "AsCurrency")), C);
    await $.wset([$t1, $t2], "CreditRate", (await $.mv((await $.wcall([$t1, $t2], "FieldByName", ["CreditRate"], C)), "AsCurrency")), C);
    await $.wset([$t1, $t2], "CashSymbol", (await $.mv((await $.wcall([$t1, $t2], "FieldByName", ["InbalanceChar"], C)), "AsInteger")), C);
    await $.wset([$t1, $t2], "ConvertationSymbol", (await $.mv((await $.wcall([$t1, $t2], "FieldByName", ["OutbalanceChar"], C)), "AsInteger")), C);
    await $.wset([$t1, $t2], "OperationCode", (await $.mv((await $.wcall([$t1, $t2], "FieldByName", ["OperationCode"], C)), "Value")), C);
    await $.wset([$t1, $t2], "Flags", 0, C);
    await $.wset([$t1, $t2], "TransactionName", (await $.mv((await $.wcall([$t1, $t2], "FieldByName", ["Name"], C)), "AsString")), C);
    {
      const $t3 = (await $.wcall([$t1, $t2], "FieldByName", ["ID"], C));
      if ($.truthy((await $.wv([$t1, $t2, $t3], "IsNull", C, false)))) {
        await $.wset([$t1, $t2, $t3], "TransactionID", (-(1)), C);
      } else {
        await $.wset([$t1, $t2, $t3], "TransactionID", (await $.wv([$t1, $t2, $t3], "AsInteger", C, false)), C);
      }
    }
  }
  return L1.result;
});
  { const $t4 = L0["action"];
    if ($.eq($t4, "I")) {
      await $.mset((await $.mcall(L0["sender"], "FieldByName", ["ID"])), "AsInteger", (await $.v(C, "GenerateID")));
      await $.stmt($.callv(L0["buildtransaction"], []));
      await $.stmt((await $.call(C, "AddTransaction", [L0["transaction"]])));
      await $.stmt((await $.call(C, "SetCommission", [(await $.mv((await $.mcall((await $.v(C, "Commission")), "FieldByName", ["ID"])), "AsInteger")), (await $.mv(L0["transaction"], "DebitID")), (await $.mv(L0["transaction"], "CreditID")), (await $.mv(L0["transaction"], "DebitAmount")), (await $.mv(L0["transaction"], "CreditAmount")), (await $.mv(L0["transaction"], "TransactionDate"))])));
      await L0["applied"].set(true);
    }
    else if ($.eq($t4, "U")) {
      await $.stmt($.callv(L0["buildtransaction"], []));
      await $.stmt((await $.call(C, "DeleteTransaction", [(await $.mv((await $.mcall(L0["sender"], "FieldByName", ["ID"])), "AsInteger"))])));
      await $.stmt((await $.call(C, "AddTransaction", [L0["transaction"]])));
      await L0["applied"].set(true);
    }
    else if ($.eq($t4, "L") || $.eq($t4, "R") || $.eq($t4, "C")) {
      await L0["applied"].set(true);
    }
    else {
      await L0["applied"].set(false);
    }
  }
  return L0.result;
}, {"params": ["Sender", "Action", "Applied", "NewRowId"], "kind": "procedure", "ptypes": ["TOracleDataSet", "Char", "Boolean", "String"]});
  U.method("TTransactionDataModule", "DebitCurrencyDataAfterScroll", async function DebitCurrencyDataAfterScroll(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"dataset": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["dataset"]);
  if ($.truthy($.not((await $.call(C, "Assigned", [(await $.v(C, "TransactionEditForm"))]))))) {
    return L0.result;
  }
  {
    const $t5 = (await $.v(C, "TransactionEditForm"));
    const $t6 = (await $.wv([$t5], "DebitAccData", C, false));
    await $.wset([$t5, $t6], "DebitCurrencyID", (await $.mv((await $.mcall((await $.wv([$t5, $t6], "DataSet", { get: async () => L0["dataset"], set: async (v) => { L0["dataset"] = v; }, local: true }, false)), "FieldByName", ["ID"])), "AsInteger")), C);
    await $.mset((await $.mcall((await $.wv([$t5, $t6], "Transactions", C, false)), "FieldByName", ["DebitRate"])), "AsFloat", (await $.mv((await $.mcall((await $.wv([$t5, $t6], "DataSet", { get: async () => L0["dataset"], set: async (v) => { L0["dataset"] = v; }, local: true }, false)), "FieldByName", ["Rate"])), "AsFloat")));
    await $.mset((await $.wv([$t5, $t6], "DebtAccSearchEdit", C, false)), "Text", "");
    await $.stmt($.wcall([$t5, $t6], "ClearAmmounts", [], C));
  }
  return L0.result;
}, {"params": ["DataSet"], "kind": "procedure", "ptypes": ["TDataSet"]});
  U.method("TTransactionDataModule", "DebitAccDataAfterScroll", async function DebitAccDataAfterScroll(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"dataset": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["dataset"]);
  if ($.truthy($.not((await $.call(C, "Assigned", [(await $.v(C, "TransactionEditForm"))]))))) {
    return L0.result;
  }
  {
    const $t7 = (await $.v(C, "TransactionEditForm"));
    const $t8 = (await $.wv([$t7], "DataSet", { get: async () => L0["dataset"], set: async (v) => { L0["dataset"] = v; }, local: true }, false));
    await $.mset((await $.mcall((await $.wv([$t7, $t8], "Transactions", C, false)), "FieldByName", ["DebitID"])), "AsInteger", (await $.mv((await $.wcall([$t7, $t8], "FieldByName", ["ID"], C)), "AsInteger")));
    if ($.truthy($.not((await $.mv((await $.wv([$t7, $t8], "DebtAccSearchEdit", C, false)), "Focused"))))) {
      await $.mset((await $.wv([$t7, $t8], "DebtAccSearchEdit", C, false)), "Text", (await $.mv((await $.wcall([$t7, $t8], "FieldByName", ["acc_no"], C)), "AsString")));
    }
  }
  return L0.result;
}, {"params": ["DataSet"], "kind": "procedure", "ptypes": ["TDataSet"]});
  U.method("TTransactionDataModule", "CreditCurrencyDataAfterScroll", async function CreditCurrencyDataAfterScroll(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"dataset": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["dataset"]);
  if ($.truthy($.not((await $.call(C, "Assigned", [(await $.v(C, "TransactionEditForm"))]))))) {
    return L0.result;
  }
  {
    const $t9 = (await $.v(C, "TransactionEditForm"));
    const $t10 = (await $.wv([$t9], "CreditAccData", C, false));
    await $.wset([$t9, $t10], "CreditCurrencyID", (await $.mv((await $.mcall((await $.wv([$t9, $t10], "DataSet", { get: async () => L0["dataset"], set: async (v) => { L0["dataset"] = v; }, local: true }, false)), "FieldByName", ["ID"])), "AsInteger")), C);
    await $.mset((await $.mcall((await $.wv([$t9, $t10], "Transactions", C, false)), "FieldByName", ["CreditRate"])), "AsFloat", (await $.mv((await $.mcall((await $.wv([$t9, $t10], "DataSet", { get: async () => L0["dataset"], set: async (v) => { L0["dataset"] = v; }, local: true }, false)), "FieldByName", ["Rate"])), "AsFloat")));
    await $.mset((await $.wv([$t9, $t10], "CreditAccSearchEdit", C, false)), "Text", "");
    await $.stmt($.wcall([$t9, $t10], "ClearAmmounts", [], C));
  }
  return L0.result;
}, {"params": ["DataSet"], "kind": "procedure", "ptypes": ["TDataSet"]});
  U.method("TTransactionDataModule", "CreditAccDataAfterScroll", async function CreditAccDataAfterScroll(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"dataset": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["dataset"]);
  if ($.truthy($.not((await $.call(C, "Assigned", [(await $.v(C, "TransactionEditForm"))]))))) {
    return L0.result;
  }
  {
    const $t11 = (await $.v(C, "TransactionEditForm"));
    const $t12 = (await $.wv([$t11], "DataSet", { get: async () => L0["dataset"], set: async (v) => { L0["dataset"] = v; }, local: true }, false));
    await $.mset((await $.mcall((await $.wv([$t11, $t12], "Transactions", C, false)), "FieldByName", ["CreditID"])), "AsInteger", (await $.mv((await $.wcall([$t11, $t12], "FieldByName", ["ID"], C)), "AsInteger")));
    if ($.truthy($.not((await $.mv((await $.wv([$t11, $t12], "CreditAccSearchEdit", C, false)), "Focused"))))) {
      await $.mset((await $.wv([$t11, $t12], "CreditAccSearchEdit", C, false)), "Text", (await $.mv((await $.wcall([$t11, $t12], "FieldByName", ["acc_no"], C)), "AsString")));
    }
  }
  return L0.result;
}, {"params": ["DataSet"], "kind": "procedure", "ptypes": ["TDataSet"]});
  U.method("TTransactionDataModule", "ValuteThreadRecord", async function ValuteThreadRecord(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t13 = (await $.v(C, "TransactionManagerForm"));
    const $t14 = (await $.wv([$t13], "CLBCurrency", C, false));
    const $t15 = (await $.wv([$t13, $t14], "Items", C, false));
    await $.stmt((await $.wcall([$t13, $t14, $t15], "Add", [(await $.mcall((await $.wv([$t13, $t14, $t15], "Sender", { get: async () => L0["sender"], set: async (v) => { L0["sender"] = v; }, local: true }, false)), "Field", ["valu_name"]))], C)));
    { const $t16 = await $.iset((await $.wv([$t13, $t14, $t15], "Checked", C, false)), [$.sub((await $.wv([$t13, $t14, $t15], "Count", C, false)), 1)], (await $.wv([$t13, $t14, $t15], "True", C, false))); if ($t16 !== undefined) { await $.wset([$t13, $t14, $t15], "Checked", $t16, C); } }
    await $.stmt((await $.mcall((await $.wcall([$t13, $t14, $t15], "TStringList", [(await $.wcall([$t13, $t14, $t15], "Pointer", [(await $.mv((await $.wv([$t13, $t14, $t15], "CLBCurrency", C, false)), "Tag"))], C))], C)), "Add", [(await $.mcall((await $.wv([$t13, $t14, $t15], "Sender", { get: async () => L0["sender"], set: async (v) => { L0["sender"] = v; }, local: true }, false)), "Field", ["valute"]))])));
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TOracleQuery"]});
  U.method("TTransactionDataModule", "OperationsThreadRecord", async function OperationsThreadRecord(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t17 = (await $.v(C, "TransactionManagerForm"));
    const $t18 = (await $.wv([$t17], "CLBOperationTypes", C, false));
    const $t19 = (await $.wv([$t17, $t18], "Items", C, false));
    await $.stmt((await $.wcall([$t17, $t18, $t19], "Add", [(await $.mcall((await $.wv([$t17, $t18, $t19], "Sender", { get: async () => L0["sender"], set: async (v) => { L0["sender"] = v; }, local: true }, false)), "Field", ["name"]))], C)));
    { const $t20 = await $.iset((await $.wv([$t17, $t18, $t19], "Checked", C, false)), [$.sub((await $.wv([$t17, $t18, $t19], "Count", C, false)), 1)], (await $.wv([$t17, $t18, $t19], "True", C, false))); if ($t20 !== undefined) { await $.wset([$t17, $t18, $t19], "Checked", $t20, C); } }
    await $.stmt((await $.mcall((await $.wcall([$t17, $t18, $t19], "TStringList", [(await $.wcall([$t17, $t18, $t19], "Pointer", [(await $.mv((await $.wv([$t17, $t18, $t19], "CLBOperationTypes", C, false)), "Tag"))], C))], C)), "Add", [(await $.mcall((await $.wv([$t17, $t18, $t19], "Sender", { get: async () => L0["sender"], set: async (v) => { L0["sender"] = v; }, local: true }, false)), "Field", ["ID"]))])));
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TOracleQuery"]});
  U.method("TTransactionDataModule", "SBCommit", async function SBCommit(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: undefined};
  await $.mcall((await $.mv((await $.v(C, "sboapiDataModule")), "SBSession")), "Commit", []);
  return L0.result;
}, {"params": [], "kind": "procedure", "ptypes": []});
  U.method("TTransactionDataModule", "AddTransaction", async function AddTransaction(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"transaction": $.copyArg(p0), result: 0, "atransactionid": null};
  await $.fixArgs(L0, ["transaction"]);
  {
    const $t21 = L0["transaction"];
    const $t22 = (await $.wv([$t21], "SBTransaction", C, false));
    if ($.truthy($.eq((await $.wv([$t21, $t22], "TransactionID", C, false)), (-(1))))) {
      await $.wset([$t21, $t22], "ATransactionID", (await $.wv([$t21, $t22], "Null", C, false)), { get: async () => L0["atransactionid"], set: async (v) => { L0["atransactionid"] = v; }, local: true });
    } else {
      await $.wset([$t21, $t22], "ATransactionID", (await $.wv([$t21, $t22], "TransactionID", C, false)), { get: async () => L0["atransactionid"], set: async (v) => { L0["atransactionid"] = v; }, local: true });
    }
    await $.wset([$t21, $t22], "Result", (await $.wcall([$t21, $t22], "CallIntegerFunction", [(await $.wv([$t21, $t22], "cs_add_transaction", C, false)), ["TransactionDate", (await $.wv([$t21, $t22], "TransactionDate", C, false)), "DebitID", (await $.wv([$t21, $t22], "DebitID", C, false)), "CreditID", (await $.wv([$t21, $t22], "CreditID", C, false)), "DebitAmount", (await $.wv([$t21, $t22], "DebitAmount", C, false)), "CreditAmount", (await $.wv([$t21, $t22], "CreditAmount", C, false)), "LAmount", (await $.wv([$t21, $t22], "LAmount", C, false)), "DebitRate", (await $.wv([$t21, $t22], "DebitRate", C, false)), "CreditRate", (await $.wv([$t21, $t22], "CreditRate", C, false)), "TrName", (await $.wv([$t21, $t22], "TransactionName", C, false)), "Flags", (await $.wv([$t21, $t22], "Flags", C, false)), "InBalanceChar", (await $.wv([$t21, $t22], "CashSymbol", C, false)), "OutBalanceChar", (await $.wv([$t21, $t22], "ConvertationSymbol", C, false)), "TransactionID", (await $.wv([$t21, $t22], "ATransactionID", { get: async () => L0["atransactionid"], set: async (v) => { L0["atransactionid"] = v; }, local: true }, false)), "OperationType", (await $.wv([$t21, $t22], "OperationCode", C, false)), "TransactionNo", (await $.wv([$t21, $t22], "TransactionNo", C, false))]], C)), { get: async () => L0["result"], set: async (v) => { L0["result"] = v; }, local: true });
  }
  return L0.result;
}, {"params": ["Transaction"], "kind": "function", "ptypes": ["TTransaction"]});
  U.method("TTransactionDataModule", "DeleteTransaction", async function DeleteTransaction(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"transactionid": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["transactionid"]);
  {
    const $t23 = (await $.v(C, "SBTransaction"));
    await $.stmt((await $.wcall([$t23], "CallProcedure", [(await $.wv([$t23], "cs_del_transaction", C, false)), ["TransactionID", (await $.wv([$t23], "TransactionID", { get: async () => L0["transactionid"], set: async (v) => { L0["transactionid"] = v; }, local: true }, false))]], C)));
  }
  return L0.result;
}, {"params": ["TransactionID"], "kind": "procedure", "ptypes": ["Longint"]});
  U.method("TTransactionDataModule", "CommitTransactions", async function CommitTransactions(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"transactionids": $.copyArg(p0), result: 0};
  await $.fixArgs(L0, ["transactionids"]);
  {
    const $t24 = (await $.v(C, "SBTransaction"));
    await $.wset([$t24], "Result", (await $.wcall([$t24], "CallIntegerFunction", [(await $.wv([$t24], "cs_commit_delayed_transactions", C, false)), ["OverloadIDsStr", (await $.wv([$t24], "TransactionIDs", { get: async () => L0["transactionids"], set: async (v) => { L0["transactionids"] = v; }, local: true }, false)), "CommitTemp", (await $.wv([$t24], "True", C, false))]], C)), { get: async () => L0["result"], set: async (v) => { L0["result"] = v; }, local: true });
  }
  return L0.result;
}, {"params": ["TransactionIDs"], "kind": "function", "ptypes": ["WideString"]});
  U.method("TTransactionDataModule", "CommitTransaction", async function CommitTransaction(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"transactionid": $.copyArg(p0), result: 0};
  await $.fixArgs(L0, ["transactionid"]);
  {
    const $t25 = (await $.v(C, "SBTransaction"));
    await $.wset([$t25], "Result", (await $.wcall([$t25], "CallIntegerFunction", [(await $.wv([$t25], "cs_commit_transaction", C, false)), ["TransactionID", (await $.wv([$t25], "TransactionID", { get: async () => L0["transactionid"], set: async (v) => { L0["transactionid"] = v; }, local: true }, false)), "CommitTemp", (await $.wv([$t25], "True", C, false))]], C)), { get: async () => L0["result"], set: async (v) => { L0["result"] = v; }, local: true });
  }
  return L0.result;
}, {"params": ["TransactionID"], "kind": "function", "ptypes": ["Longint"]});
  U.method("TTransactionDataModule", "GenerateID", async function GenerateID(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: 0};
  {
    const $t26 = (await $.v(C, "SBTransaction"));
    await $.wset([$t26], "Result", (await $.wcall([$t26], "CallIntegerFunction", [(await $.wv([$t26], "cs_generateid", C, false)), []], C)), { get: async () => L0["result"], set: async (v) => { L0["result"] = v; }, local: true });
  }
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TTransactionDataModule", "RejectTransaction", async function RejectTransaction(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"transactionid": $.copyArg(p0), "rejectreason": $.copyArg(p1), result: 0};
  await $.fixArgs(L0, ["transactionid", "rejectreason"]);
  {
    const $t27 = (await $.v(C, "SBTransaction"));
    await $.wset([$t27], "Result", (await $.wcall([$t27], "CallIntegerFunction", [(await $.wv([$t27], "cs_reject_transaction", C, false)), ["TransactionID", (await $.wv([$t27], "TransactionID", { get: async () => L0["transactionid"], set: async (v) => { L0["transactionid"] = v; }, local: true }, false)), "RejectReason", (await $.wv([$t27], "RejectReason", { get: async () => L0["rejectreason"], set: async (v) => { L0["rejectreason"] = v; }, local: true }, false))]], C)), { get: async () => L0["result"], set: async (v) => { L0["result"] = v; }, local: true });
  }
  return L0.result;
}, {"params": ["TransactionID", "RejectReason"], "kind": "function", "ptypes": ["Longint", "String"]});
  U.method("TTransactionDataModule", "SetCommission", async function SetCommission(Self, p0, p1, p2, p3, p4, p5) {
  const C = $.chain(Self, U);
  const L0 = {"commissionid": $.copyArg(p0), "debitid": $.copyArg(p1), "creditid": $.copyArg(p2), "debitammount": $.copyArg(p3), "creditammount": $.copyArg(p4), "transdate": $.copyArg(p5), result: undefined};
  await $.fixArgs(L0, ["commissionid", "debitid", "creditid", "debitammount", "creditammount", "transdate"]);
  L0["iscommission"] = $.fn(async function IsCommission() {
  const L1 = {result: false};
  {
    const $t28 = (await $.v(C, "TransactionManagerForm"));
    await $.wset([$t28], "Result", $.eq((await $.wv([$t28], "OperationMode", C, false)), (await $.wv([$t28], "omCommission", C, false))), { get: async () => L1["result"], set: async (v) => { L1["result"] = v; }, local: true });
  }
  return L1.result;
});
  if ($.truthy(L0["iscommission"])) {
    {
      const $t29 = (await $.v(C, "SBComplexTrans"));
      await $.stmt((await $.wcall([$t29], "CallProcedure", [(await $.wv([$t29], "cs_commission_execute", C, false)), ["CommisionID", (await $.wv([$t29], "CommissionID", { get: async () => L0["commissionid"], set: async (v) => { L0["commissionid"] = v; }, local: true }, false)), "DebitID", (await $.wv([$t29], "DebitID", { get: async () => L0["debitid"], set: async (v) => { L0["debitid"] = v; }, local: true }, false)), "CreditID", (await $.wv([$t29], "CreditID", { get: async () => L0["creditid"], set: async (v) => { L0["creditid"] = v; }, local: true }, false)), "DebitAmmount", (await $.wv([$t29], "DebitAmmount", { get: async () => L0["debitammount"], set: async (v) => { L0["debitammount"] = v; }, local: true }, false)), "CreditAmmount", (await $.wv([$t29], "CreditAmmount", { get: async () => L0["creditammount"], set: async (v) => { L0["creditammount"] = v; }, local: true }, false)), "TransDate", (await $.wv([$t29], "TransDate", { get: async () => L0["transdate"], set: async (v) => { L0["transdate"] = v; }, local: true }, false))]], C)));
    }
  }
  return L0.result;
}, {"params": ["CommissionID", "DebitID", "CreditID", "DebitAmmount", "CreditAmmount", "TransDate"], "kind": "procedure", "ptypes": ["Longint", "Longint", "Longint", "Currency", "Currency", "TDateTime"]});
  U.method("TTransactionDataModule", "ShowInfo", async function ShowInfo(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: undefined};
  await $.stmt((await $.call(C, "ShowDOAInfo", [(await $.mv((await $.v(C, "sboapiDataModule")), "SBSession"))])));
  return L0.result;
}, {"params": [], "kind": "procedure", "ptypes": []});
  U.method("TTransactionDataModule", "FullRefresh", async function FullRefresh(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: undefined, "i": 0};
  { const $t30 = $.sub((await $.v(C, "ComponentCount")), 1);
    L0["i"] = 0;
    let $t31 = true;
    for (;;) {
      if (!$t31) { L0["i"] = $.succ(L0["i"], 1); }
      $t31 = false;
      if (!($.ord(L0["i"]) <= $.ord($t30))) break;
      if ($.truthy(($.is_((await $.idx((await $.v(C, "Components")), [L0["i"]])), "TOracleDataSet")))) {
        await $.mcall((await $.idx((await $.v(C, "Components")), [L0["i"]])), "Close", []);
        await $.mcall((await $.idx((await $.v(C, "Components")), [L0["i"]])), "Open", []);
      }
      await $.tick();
    }
  }
  return L0.result;
}, {"params": [], "kind": "procedure", "ptypes": []});
  U.method("TTransactionDataModule", "DebitAccRestDataAfterScroll", async function DebitAccRestDataAfterScroll(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"dataset": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["dataset"]);
  {
    const $t32 = L0["dataset"];
    await $.mset((await $.mcall((await $.wv([$t32], "DebitAccData", C, false)), "FieldByName", ["BALANCE"])), "AsCurrency", (await $.mv((await $.wcall([$t32], "FieldByName", ["OSTAT"], C)), "AsCurrency")));
    await $.mset((await $.mcall((await $.wv([$t32], "DebitAccData", C, false)), "FieldByName", ["LBALANCE"])), "AsCurrency", (await $.mv((await $.wcall([$t32], "FieldByName", ["POK_OSTAT"], C)), "AsCurrency")));
  }
  return L0.result;
}, {"params": ["DataSet"], "kind": "procedure", "ptypes": ["TDataSet"]});
  U.method("TTransactionDataModule", "CreditAccRestDataAfterScroll", async function CreditAccRestDataAfterScroll(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"dataset": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["dataset"]);
  {
    const $t33 = L0["dataset"];
    await $.mset((await $.mcall((await $.wv([$t33], "CreditAccData", C, false)), "FieldByName", ["BALANCE"])), "AsCurrency", (await $.mv((await $.wcall([$t33], "FieldByName", ["OSTAT"], C)), "AsCurrency")));
    await $.mset((await $.mcall((await $.wv([$t33], "CreditAccData", C, false)), "FieldByName", ["LBALANCE"])), "AsCurrency", (await $.mv((await $.wcall([$t33], "FieldByName", ["POK_OSTAT"], C)), "AsCurrency")));
  }
  return L0.result;
}, {"params": ["DataSet"], "kind": "procedure", "ptypes": ["TDataSet"]});
  return U;
}
