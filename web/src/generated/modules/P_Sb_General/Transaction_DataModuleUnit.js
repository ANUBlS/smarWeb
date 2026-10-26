// Generated from Transaction_DataModuleUnit.pas by pas2js — do not edit by hand; regenerate instead.
/* eslint-disable */
// @ts-nocheck

export default function define($) {
  const U = $.unit("Transaction_DataModuleUnit", ["SysUtils", "Classes", "DB", "OracleData", "Oracle", "Dialogs", "OpenAccountImpl", "sboapiDataModuleImpl", "Transaction_PropertiesImpl"]);
  const C = [U];
  $.defRecord("ttransaction", {"transactionid": () => 0, "transactiondate": () => 0, "transactionno": () => '', "debitid": () => 0, "creditid": () => 0, "debitamount": () => 0, "creditamount": () => 0, "lamount": () => 0, "debitrate": () => 0, "creditrate": () => 0, "cashsymbol": () => '', "convertationsymbol": () => 0, "operationcode": () => null, "flags": () => 0, "transactionname": () => '', "reportid": () => 0, "countrid": () => 0});
  U.defClass("TTransaction_DataModule", "TDataModule", {"ods_account1": {"name": "ODS_Account1", "type": "TOracleDataSet"}, "ods_account1id": {"name": "ODS_Account1ID", "type": "TFloatField"}, "ods_account1acc_no": {"name": "ODS_Account1ACC_NO", "type": "TWideStringField"}, "ods_account1acc_no_search": {"name": "ODS_Account1ACC_NO_SEARCH", "type": "TWideStringField"}, "ods_account1val_acc": {"name": "ODS_Account1VAL_ACC", "type": "TIntegerField"}, "ods_account1name": {"name": "ODS_Account1NAME", "type": "TWideStringField"}, "ods_account1iscacheaccount": {"name": "ODS_Account1ISCACHEACCOUNT", "type": "TFloatField"}, "ods_account1kli_id": {"name": "ODS_Account1KLI_ID", "type": "TFloatField"}, "ds_account": {"name": "DS_Account", "type": "TDataSource"}, "transactions": {"name": "Transactions", "type": "TOracleDataSet"}, "transactionsid": {"name": "TransactionsID", "type": "TFloatField"}, "transactionsoperatorid": {"name": "TransactionsOPERATORID", "type": "TFloatField"}, "transactionsoperationno": {"name": "TransactionsOPERATIONNO", "type": "TWideStringField"}, "transactionstransactiondate": {"name": "TransactionsTRANSACTIONDATE", "type": "TDateTimeField"}, "transactionsdebitid": {"name": "TransactionsDEBITID", "type": "TFloatField"}, "transactionsdebitaccno": {"name": "TransactionsDEBITACCNO", "type": "TWideStringField"}, "transactionsdebitcurrencyid": {"name": "TransactionsDEBITCURRENCYID", "type": "TFloatField"}, "transactionsdebitcurrencysname": {"name": "TransactionsDEBITCURRENCYSNAME", "type": "TWideStringField"}, "transactionscreditid": {"name": "TransactionsCREDITID", "type": "TFloatField"}, "transactionscreditaccno": {"name": "TransactionsCREDITACCNO", "type": "TWideStringField"}, "transactionscreditcurrencysname": {"name": "TransactionsCREDITCURRENCYSNAME", "type": "TWideStringField"}, "transactionsdebitamount": {"name": "TransactionsDEBITAMOUNT", "type": "TFloatField"}, "transactionscreditamount": {"name": "TransactionsCREDITAMOUNT", "type": "TFloatField"}, "transactionsdebitrate": {"name": "TransactionsDEBITRATE", "type": "TFloatField"}, "transactionscreditrate": {"name": "TransactionsCREDITRATE", "type": "TFloatField"}, "transactionslamount": {"name": "TransactionsLAMOUNT", "type": "TFloatField"}, "transactionsdebitbank": {"name": "TransactionsDEBITBANK", "type": "TFloatField"}, "transactionscreditbank": {"name": "TransactionsCREDITBANK", "type": "TFloatField"}, "transactionsusr": {"name": "TransactionsUSR", "type": "TWideStringField"}, "transactionsdebitbranch": {"name": "TransactionsDEBITBRANCH", "type": "TIntegerField"}, "transactionscreditbranch": {"name": "TransactionsCREDITBRANCH", "type": "TIntegerField"}, "transactionscyphercode": {"name": "TransactionsCYPHERCODE", "type": "TIntegerField"}, "transactionsoperationcode": {"name": "TransactionsOPERATIONCODE", "type": "TFloatField"}, "transactionsinbalancechar": {"name": "TransactionsINBALANCECHAR", "type": "TWideStringField"}, "transactionsoutbalancechar": {"name": "TransactionsOUTBALANCECHAR", "type": "TIntegerField"}, "transactionsfilialid": {"name": "TransactionsFILIALID", "type": "TIntegerField"}, "transactionsdebitbalance": {"name": "TransactionsDEBITBALANCE", "type": "TFloatField"}, "transactionsname": {"name": "TransactionsNAME", "type": "TWideStringField"}, "transactionsflags": {"name": "TransactionsFLAGS", "type": "TFloatField"}, "transactionsstatus": {"name": "TransactionsSTATUS", "type": "TFloatField"}, "transactionsreject_reason": {"name": "TransactionsREJECT_REASON", "type": "TWideStringField"}, "transactionspackagenumber": {"name": "TransactionsPACKAGENUMBER", "type": "TIntegerField"}, "transactionscreditcurrencyid": {"name": "TransactionsCREDITCURRENCYID", "type": "TIntegerField"}, "transactionsreportid": {"name": "TransactionsREPORTID", "type": "TFloatField"}, "transactionscountrid": {"name": "TransactionsCOUNTRID", "type": "TFloatField"}, "transactionsusrcommit": {"name": "TransactionsUSRCOMMIT", "type": "TWideStringField"}, "transactionsdata": {"name": "TransactionsData", "type": "TDataSource"}, "debitcurrencydata": {"name": "DebitCurrencyData", "type": "TOracleDataSet"}, "debitcurrencydataid": {"name": "DebitCurrencyDataID", "type": "TIntegerField"}, "debitcurrencydatasname": {"name": "DebitCurrencyDataSNAME", "type": "TWideStringField"}, "debitcurrencydataname": {"name": "DebitCurrencyDataNAME", "type": "TWideStringField"}, "debitcurrencydatarate": {"name": "DebitCurrencyDataRATE", "type": "TFloatField"}, "debitcurrency": {"name": "DebitCurrency", "type": "TDataSource"}, "creditcurrencydata": {"name": "CreditCurrencyData", "type": "TOracleDataSet"}, "creditcurrencydataid": {"name": "CreditCurrencyDataID", "type": "TIntegerField"}, "creditcurrencydatasname": {"name": "CreditCurrencyDataSNAME", "type": "TWideStringField"}, "creditcurrencydataname": {"name": "CreditCurrencyDataNAME", "type": "TWideStringField"}, "creditcurrencydatarate": {"name": "CreditCurrencyDataRATE", "type": "TFloatField"}, "creditcurrency": {"name": "CreditCurrency", "type": "TDataSource"}, "creditaccdata": {"name": "CreditAccData", "type": "TOracleDataSet"}, "creditaccdataid": {"name": "CreditAccDataID", "type": "TFloatField"}, "creditaccdataacc_no": {"name": "CreditAccDataACC_NO", "type": "TWideStringField"}, "creditaccdataval_acc": {"name": "CreditAccDataVAL_ACC", "type": "TIntegerField"}, "creditaccdataname": {"name": "CreditAccDataNAME", "type": "TWideStringField"}, "creditaccdataiscacheaccount": {"name": "CreditAccDataISCACHEACCOUNT", "type": "TFloatField"}, "creditaccdatabalance": {"name": "CreditAccDataBALANCE", "type": "TCurrencyField"}, "creditaccdatalbalance": {"name": "CreditAccDataLBALANCE", "type": "TCurrencyField"}, "creditaccdataostat": {"name": "CreditAccDataOSTAT", "type": "TFloatField"}, "creditaccdatapok_ostat": {"name": "CreditAccDataPOK_OSTAT", "type": "TFloatField"}, "creditaccdatabal_cn": {"name": "CreditAccDataBAL_CN", "type": "TFloatField"}, "creditaccdatafromtrans": {"name": "CreditAccDataFROMTRANS", "type": "TFloatField"}, "creditaccdatakli_id": {"name": "CreditAccDataKLI_ID", "type": "TFloatField"}, "creditaccs": {"name": "CreditAccs", "type": "TDataSource"}, "debitaccdata": {"name": "DebitAccData", "type": "TOracleDataSet"}, "debitaccdataid": {"name": "DebitAccDataID", "type": "TFloatField"}, "debitaccdataacc_no": {"name": "DebitAccDataACC_NO", "type": "TWideStringField"}, "debitaccdataval_acc": {"name": "DebitAccDataVAL_ACC", "type": "TIntegerField"}, "debitaccdataname": {"name": "DebitAccDataNAME", "type": "TWideStringField"}, "debitaccdataiscacheaccount": {"name": "DebitAccDataISCACHEACCOUNT", "type": "TFloatField"}, "debitaccdatabalance": {"name": "DebitAccDataBALANCE", "type": "TCurrencyField"}, "debitaccdatalbalance": {"name": "DebitAccDataLBALANCE", "type": "TCurrencyField"}, "debitaccdataostat": {"name": "DebitAccDataOSTAT", "type": "TFloatField"}, "debitaccdatapok_ostat": {"name": "DebitAccDataPOK_OSTAT", "type": "TFloatField"}, "debitaccdatabal_cn": {"name": "DebitAccDataBAL_CN", "type": "TFloatField"}, "debitaccdatafromtrans": {"name": "DebitAccDataFROMTRANS", "type": "TFloatField"}, "debitaccdatakli_id": {"name": "DebitAccDataKLI_ID", "type": "TFloatField"}, "debitaccs": {"name": "DebitAccs", "type": "TDataSource"}, "country": {"name": "Country", "type": "TOracleDataSet"}, "ods_transinfo": {"name": "ODS_TransInfo", "type": "TOracleDataSet"}, "ods_transinfoid": {"name": "ODS_TransInfoID", "type": "TFloatField"}, "ods_transinfotransmode_code": {"name": "ODS_TransInfoTRANSMODE_CODE", "type": "TIntegerField"}, "ods_transinfotransmode_comment": {"name": "ODS_TransInfoTRANSMODE_COMMENT", "type": "TWideStringField"}, "ods_transinfotransid": {"name": "ODS_TransInfoTRANSID", "type": "TFloatField"}, "ods_transinfodcustid": {"name": "ODS_TransInfoDCUSTID", "type": "TFloatField"}, "ods_transinfoccustid": {"name": "ODS_TransInfoCCUSTID", "type": "TFloatField"}, "ods_debtcustomer": {"name": "ODS_DebtCustomer", "type": "TOracleDataSet"}, "ods_debtcustomerid": {"name": "ODS_DebtCustomerID", "type": "TIntegerField"}, "ods_debtcustomername": {"name": "ODS_DebtCustomerNAME", "type": "TWideStringField"}, "ds_debtcustomer": {"name": "DS_DebtCustomer", "type": "TDataSource"}, "ods_credcustomer": {"name": "ODS_CredCustomer", "type": "TOracleDataSet"}, "ods_credcustomerid": {"name": "ODS_CredCustomerID", "type": "TIntegerField"}, "ods_credcustomername": {"name": "ODS_CredCustomerNAME", "type": "TWideStringField"}, "ds_credcustomer": {"name": "DS_CredCustomer", "type": "TDataSource"}, "commission": {"name": "Commission", "type": "TOracleDataSet"}, "commissionid": {"name": "CommissionID", "type": "TFloatField"}, "commissionname": {"name": "CommissionNAME", "type": "TWideStringField"}, "commissiondebt": {"name": "CommissionDEBT", "type": "TFloatField"}, "commissiondebitaccount": {"name": "CommissionDEBITACCOUNT", "type": "TWideStringField"}, "commissiondebitcurrency": {"name": "CommissionDEBITCURRENCY", "type": "TWideStringField"}, "commissiondebitcurrencyid": {"name": "CommissionDEBITCURRENCYID", "type": "TFloatField"}, "commissioncredit": {"name": "CommissionCREDIT", "type": "TFloatField"}, "commissioncreditaccount": {"name": "CommissionCREDITACCOUNT", "type": "TWideStringField"}, "commissioncreditcurrency": {"name": "CommissionCREDITCURRENCY", "type": "TWideStringField"}, "commissioncreditcurrencyid": {"name": "CommissionCREDITCURRENCYID", "type": "TFloatField"}, "commissionadditionaldebt": {"name": "CommissionADDITIONALDEBT", "type": "TFloatField"}, "commissionadebitaccount": {"name": "CommissionADEBITACCOUNT", "type": "TWideStringField"}, "commissionadebitcurrency": {"name": "CommissionADEBITCURRENCY", "type": "TWideStringField"}, "commissionadditionalcredit": {"name": "CommissionADDITIONALCREDIT", "type": "TFloatField"}, "commissionacreditaccount": {"name": "CommissionACREDITACCOUNT", "type": "TWideStringField"}, "commissionacreditcurrency": {"name": "CommissionACREDITCURRENCY", "type": "TWideStringField"}, "commissionadddebitcurrencyid": {"name": "CommissionADDDEBITCURRENCYID", "type": "TFloatField"}, "commissionaddcreditcurrencyid": {"name": "CommissionADDCREDITCURRENCYID", "type": "TFloatField"}, "commissionassignment": {"name": "CommissionASSIGNMENT", "type": "TWideStringField"}, "commissioncommisionassignment": {"name": "CommissionCOMMISIONASSIGNMENT", "type": "TWideStringField"}, "commissionuserid": {"name": "CommissionUSERID", "type": "TFloatField"}, "commissiondata": {"name": "CommissionData", "type": "TDataSource"}, "ods_vidoptrdel": {"name": "ODS_VidOPTrDel", "type": "TOracleDataSet"}, "op_mmx": {"name": "OP_MMX", "type": "TOraclePackage"}, "sysdat": {"name": "Sysdat", "type": "TOracleDataSet"}, "datasysdat": {"name": "DataSysdat", "type": "TDataSource"}, "currency": {"name": "Currency", "type": "TOracleDataSet"}, "cashsymbols": {"name": "CashSymbols", "type": "TOracleDataSet"}, "cashsymbolsdata": {"name": "CashSymbolsData", "type": "TDataSource"}, "ods_settings": {"name": "ODS_Settings", "type": "TOracleDataSet"}, "ods_settingsvalue": {"name": "ODS_SettingsVALUE", "type": "TWideStringField"}, "debt_bal_spr1": {"name": "DEBT_BAL_SPR1", "type": "TOracleDataSet"}, "debt_bal_spr1bal_cn": {"name": "DEBT_BAL_SPR1BAL_CN", "type": "TFloatField"}, "debt_bal_spr1balname": {"name": "DEBT_BAL_SPR1BALNAME", "type": "TWideStringField"}, "deb_bal_spr1": {"name": "DEB_BAL_SPR1", "type": "TDataSource"}, "kredt_bal_spr1": {"name": "KREDT_BAL_SPR1", "type": "TOracleDataSet"}, "floatfield1": {"name": "FloatField1", "type": "TFloatField"}, "widestringfield1": {"name": "WideStringField1", "type": "TWideStringField"}, "kred_bal_spr1": {"name": "KRED_BAL_SPR1", "type": "TDataSource"}, "reportdesc": {"name": "ReportDesc", "type": "TOracleDataSet"}, "convertationsymbols": {"name": "ConvertationSymbols", "type": "TOracleDataSet"}, "convertationsymbolsdata": {"name": "ConvertationSymbolsData", "type": "TDataSource"}, "destinations": {"name": "Destinations", "type": "TOracleDataSet"}, "destinationsdata": {"name": "DestinationsData", "type": "TDataSource"}, "packbproc": {"name": "PACKBPROC", "type": "TOraclePackage"}, "bprocdata": {"name": "BProcData", "type": "TOracleDataSet"}, "bprocdataid": {"name": "BProcDataID", "type": "TFloatField"}, "bprocdataname": {"name": "BProcDataNAME", "type": "TWideStringField"}, "bproc": {"name": "BProc", "type": "TDataSource"}, "bptransdata": {"name": "BPTransData", "type": "TOracleDataSet"}, "bptrans": {"name": "BPTrans", "type": "TDataSource"}, "sbtransaction": {"name": "SBTransaction", "type": "TOraclePackage"}, "sbcomplextrans": {"name": "SBComplexTrans", "type": "TOraclePackage"}, "operationtypes": {"name": "OperationTypes", "type": "TOracleDataSet"}, "operationtypesdata": {"name": "OperationTypesData", "type": "TDataSource"}, "countrydata": {"name": "CountryData", "type": "TDataSource"}, "reportdescsdata": {"name": "ReportDescsData", "type": "TDataSource"}, "ods_mmx_transmode": {"name": "ODS_MMX_TRANSMODE", "type": "TOracleDataSet"}, "ods_mmx_transmodeid": {"name": "ODS_MMX_TRANSMODEID", "type": "TIntegerField"}, "ods_mmx_transmodename": {"name": "ODS_MMX_TRANSMODENAME", "type": "TIntegerField"}, "ods_mmx_transmodedescription": {"name": "ODS_MMX_TRANSMODEDESCRIPTION", "type": "TWideStringField"}, "ds_mmx_transmode": {"name": "DS_MMX_TRANSMODE", "type": "TDataSource"}, "sysdattek_dat": {"name": "SysdatTEK_DAT", "type": "TDateTimeField"}, "sb_aca": {"name": "SB_ACA", "type": "TOraclePackage"}, "creditaccrestdata": {"name": "CreditAccRestData", "type": "TOracleDataSet"}, "debitaccrestdata": {"name": "DebitAccRestData", "type": "TOracleDataSet"}, "ods_account": {"name": "ODS_Account", "type": "TOracleDataSet"}, "ods_accountid": {"name": "ODS_AccountID", "type": "TFloatField"}, "ods_accountacc_no": {"name": "ODS_AccountACC_NO", "type": "TWideStringField"}, "ods_accountacc_no_search": {"name": "ODS_AccountACC_NO_SEARCH", "type": "TWideStringField"}, "ods_accountval_acc": {"name": "ODS_AccountVAL_ACC", "type": "TIntegerField"}, "ods_accountname": {"name": "ODS_AccountNAME", "type": "TWideStringField"}, "ods_accountiscacheaccount": {"name": "ODS_AccountISCACHEACCOUNT", "type": "TFloatField"}, "ods_accountkli_id": {"name": "ODS_AccountKLI_ID", "type": "TFloatField"}, "ods_accountbal_cn": {"name": "ODS_AccountBAL_CN", "type": "TFloatField"}}, {});
  U.init(async () => {
    U.const("cs_generateid", "GenerateID");
    U.const("cs_add_transaction", "transaction_add");
    U.const("cs_del_transaction", "transaction_delete");
    U.const("cs_commit_transaction", "transaction_commit");
    U.const("cs_reject_transaction", "transaction_reject");
    U.const("cs_commission_execute", "SetTransactions");
    U.const("cs_commit_delayed_transactions", "transactions_delayed_commit");
    U.var_("Transaction_DataModule", null, "TTransaction_DataModule");
    U.var_("NonCustMustBe", false, "Boolean");
  });
  U.method("TTransaction_DataModule", "SBCommit", async function SBCommit(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: undefined};
  await $.mcall((await $.mv((await $.v(C, "sboapiDataModule")), "SBSession")), "Commit", []);
  return L0.result;
}, {"params": [], "kind": "procedure", "ptypes": []});
  U.method("TTransaction_DataModule", "GenerateID", async function GenerateID(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: 0};
  {
    const $t1 = (await $.v(C, "SBTransaction"));
    await $.wset([$t1], "Result", (await $.wcall([$t1], "CallIntegerFunction", [(await $.wv([$t1], "cs_generateid", C, false)), []], C)), { get: async () => L0["result"], set: async (v) => { L0["result"] = v; }, local: true });
  }
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TTransaction_DataModule", "AddTransaction", async function AddTransaction(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"transaction": $.copyArg(p0), result: 0, "atransactionid": null, "report": '', "db": '', "cr": ''};
  await $.fixArgs(L0, ["transaction"]);
  {
    const $t2 = L0["transaction"];
    const $t3 = (await $.wv([$t2], "SBTransaction", C, false));
    if ($.truthy($.eq((await $.wv([$t2, $t3], "TransactionID", C, false)), (-(1))))) {
      await $.wset([$t2, $t3], "ATransactionID", (-(1)), { get: async () => L0["atransactionid"], set: async (v) => { L0["atransactionid"] = v; }, local: true });
    } else {
      await $.wset([$t2, $t3], "ATransactionID", (await $.wv([$t2, $t3], "TransactionID", C, false)), { get: async () => L0["atransactionid"], set: async (v) => { L0["atransactionid"] = v; }, local: true });
    }
    await $.wset([$t2, $t3], "Result", (await $.wcall([$t2, $t3], "CallIntegerFunction", [(await $.wv([$t2, $t3], "cs_add_transaction", C, false)), ["TransactionDate", (await $.wv([$t2, $t3], "TransactionDate", C, false)), "DebitID", (await $.wv([$t2, $t3], "DebitID", C, false)), "CreditID", (await $.wv([$t2, $t3], "CreditID", C, false)), "DebitAmount", (await $.wv([$t2, $t3], "DebitAmount", C, false)), "CreditAmount", (await $.wv([$t2, $t3], "CreditAmount", C, false)), "LAmount", (await $.wv([$t2, $t3], "LAmount", C, false)), "DebitRate", (await $.wv([$t2, $t3], "DebitRate", C, false)), "CreditRate", (await $.wv([$t2, $t3], "CreditRate", C, false)), "TrName", (await $.wv([$t2, $t3], "TransactionName", C, false)), "Flags", (await $.wv([$t2, $t3], "Flags", C, false)), "InBalanceChar", (await $.wv([$t2, $t3], "CashSymbol", C, false)), "OutBalanceChar", (await $.wv([$t2, $t3], "ConvertationSymbol", C, false)), "TransactionID", (await $.wv([$t2, $t3], "ATransactionID", { get: async () => L0["atransactionid"], set: async (v) => { L0["atransactionid"] = v; }, local: true }, false)), "OperationType", (await $.wv([$t2, $t3], "OperationCode", C, false)), "TransactionNo", (await $.wv([$t2, $t3], "TransactionNo", C, false)), "pReportID", (await $.wv([$t2, $t3], "Reportid", C, false)), "pCountrID", (await $.wv([$t2, $t3], "CountrID", C, false))]], C)), { get: async () => L0["result"], set: async (v) => { L0["result"] = v; }, local: true });
  }
  if ($.truthy($.ne((await $.mv((await $.v(C, "TransactionForm")), "db1")), ""))) {
    L0["db"] = ((await $.mv((await $.v(C, "TransactionForm")), "db1")));
  } else {
    L0["db"] = (await $.call(C, "inttostr", [(await $.mv((await $.mcall((await $.v(C, "DebitAccData")), "FieldByName", ["ID"])), "AsInteger"))]));
  }
  if ($.truthy($.ne((await $.mv((await $.v(C, "TransactionForm")), "cr1")), ""))) {
    L0["cr"] = ((await $.mv((await $.v(C, "TransactionForm")), "cr1")));
  } else {
    L0["cr"] = (await $.call(C, "inttostr", [(await $.mv((await $.mcall((await $.v(C, "CreditAccData")), "FieldByName", ["ID"])), "AsInteger"))]));
  }
  L0["report"] = (await $.mcall((await $.v(C, "OP_MMX")), "CallStringFunction", ["get_report", [(await $.mv((await $.mv((await $.v(C, "TransactionForm")), "Edit_DCustId")), "Text")), (await $.mv((await $.mv((await $.v(C, "TransactionForm")), "Edit_CCustId")), "Text")), (await $.call(C, "strtoint", [L0["db"]])), (await $.call(C, "strtoint", [L0["cr"]]))]]));
  await $.stmt((await $.mcall((await $.v(C, "OP_MMX")), "CallProcedure", ["ins_mmx_transinfo", [L0["report"], (await $.mv((await $.mv((await $.v(C, "TransactionForm")), "DBLC_MMX_Transmode")), "Keyvalue")), L0["result"], (await $.mv((await $.mv((await $.v(C, "TransactionForm")), "DBEditOperationNo")), "text")), $.add("49-", (await $.mv((await $.mv((await $.v(C, "TransactionForm")), "DBEditOperationNo")), "text"))), (await $.mv((await $.mcall((await $.v(C, "ODS_DebtCustomer")), "FieldByName", ["id"])), "AsInteger")), (await $.mv((await $.v(C, "ODS_CredCustomerID")), "AsInteger")), "", "", "", "", "", ""]])));
  return L0.result;
}, {"params": ["Transaction"], "kind": "function", "ptypes": ["TTransaction"]});
  U.method("TTransaction_DataModule", "CreditCurrencyDataAfterScroll", async function CreditCurrencyDataAfterScroll(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"dataset": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["dataset"]);
  if ($.truthy($.not((await $.call(C, "Assigned", [(await $.v(C, "TransactionForm"))]))))) {
    return L0.result;
  }
  {
    const $t4 = (await $.v(C, "TransactionForm"));
    const $t5 = (await $.wv([$t4], "CreditAccData", C, false));
    await $.mset((await $.wv([$t4, $t5], "EditCredAccNo", C, false)), "Text", "");
    await $.mset((await $.wv([$t4, $t5], "EditKredBal_CN", C, false)), "Text", "");
    await $.mcall((await $.mv((await $.wv([$t4, $t5], "Transaction_DataModule", C, false)), "CreditAccData")), "Close", []);
    await $.wset([$t4, $t5], "CreditCurrencyID", (await $.mv((await $.mcall((await $.wv([$t4, $t5], "DataSet", { get: async () => L0["dataset"], set: async (v) => { L0["dataset"] = v; }, local: true }, false)), "FieldByName", ["ID"])), "AsInteger")), C);
    await $.mset((await $.mcall((await $.wv([$t4, $t5], "Transactions", C, false)), "FieldByName", ["CreditRate"])), "AsFloat", (await $.mv((await $.mcall((await $.wv([$t4, $t5], "DataSet", { get: async () => L0["dataset"], set: async (v) => { L0["dataset"] = v; }, local: true }, false)), "FieldByName", ["Rate"])), "AsFloat")));
    await $.stmt($.wcall([$t4, $t5], "ClearAmmounts", [], C));
  }
  return L0.result;
}, {"params": ["DataSet"], "kind": "procedure", "ptypes": ["TDataSet"]});
  U.method("TTransaction_DataModule", "DataModuleCreate", async function DataModuleCreate(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mcall((await $.v(C, "DebitCurrencyData")), "Open", []);
  await $.mcall((await $.v(C, "CreditCurrencyData")), "Open", []);
  await $.mcall((await $.v(C, "Sysdat")), "Open", []);
  await $.mcall((await $.v(C, "CashSymbols")), "Open", []);
  await $.mcall((await $.v(C, "ConvertationSymbols")), "Open", []);
  await $.mcall((await $.v(C, "OperationTypes")), "Open", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TTransaction_DataModule", "DataModuleDestroy", async function DataModuleDestroy(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mcall((await $.v(C, "DebitCurrencyData")), "Close", []);
  await $.mcall((await $.v(C, "CreditCurrencyData")), "Close", []);
  await $.mcall((await $.v(C, "Sysdat")), "Close", []);
  await $.mcall((await $.v(C, "CashSymbols")), "Close", []);
  await $.mcall((await $.v(C, "ConvertationSymbols")), "Close", []);
  await $.mcall((await $.v(C, "OperationTypes")), "Close", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TTransaction_DataModule", "DebitCurrencyDataAfterScroll", async function DebitCurrencyDataAfterScroll(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"dataset": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["dataset"]);
  if ($.truthy($.not((await $.call(C, "Assigned", [(await $.v(C, "TransactionForm"))]))))) {
    return L0.result;
  }
  {
    const $t6 = (await $.v(C, "TransactionForm"));
    const $t7 = (await $.wv([$t6], "DebitAccData", C, false));
    await $.mset((await $.wv([$t6, $t7], "EditDebtBal_CN", C, false)), "Text", "");
    await $.mset((await $.wv([$t6, $t7], "EditDebtAccNo", C, false)), "Text", "");
    await $.mcall((await $.mv((await $.wv([$t6, $t7], "Transaction_DataModule", C, false)), "DebitAccData")), "Close", []);
    await $.wset([$t6, $t7], "DebitCurrencyID", (await $.mv((await $.mcall((await $.wv([$t6, $t7], "DataSet", { get: async () => L0["dataset"], set: async (v) => { L0["dataset"] = v; }, local: true }, false)), "FieldByName", ["ID"])), "AsInteger")), C);
    await $.mset((await $.mcall((await $.wv([$t6, $t7], "Transactions", C, false)), "FieldByName", ["DebitRate"])), "AsFloat", (await $.mv((await $.mcall((await $.wv([$t6, $t7], "DataSet", { get: async () => L0["dataset"], set: async (v) => { L0["dataset"] = v; }, local: true }, false)), "FieldByName", ["Rate"])), "AsFloat")));
    await $.stmt($.wcall([$t6, $t7], "ClearAmmounts", [], C));
  }
  return L0.result;
}, {"params": ["DataSet"], "kind": "procedure", "ptypes": ["TDataSet"]});
  U.method("TTransaction_DataModule", "DeleteTransaction", async function DeleteTransaction(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"transactionid": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["transactionid"]);
  await $.stmt((await $.mcall((await $.v(C, "OP_MMX")), "CallProcedure", ["delete_mmx_transinfo", [L0["transactionid"]]])));
  {
    const $t8 = (await $.v(C, "SBTransaction"));
    await $.stmt((await $.wcall([$t8], "CallProcedure", [(await $.wv([$t8], "cs_del_transaction", C, false)), ["TransactionID", (await $.wv([$t8], "TransactionID", { get: async () => L0["transactionid"], set: async (v) => { L0["transactionid"] = v; }, local: true }, false))]], C)));
  }
  return L0.result;
}, {"params": ["TransactionID"], "kind": "procedure", "ptypes": ["Longint"]});
  U.method("TTransaction_DataModule", "SetCommission", async function SetCommission(Self, p0, p1, p2, p3, p4, p5, p6) {
  const C = $.chain(Self, U);
  const L0 = {"commissionid": $.copyArg(p0), "debitid": $.copyArg(p1), "creditid": $.copyArg(p2), "debitammount": $.copyArg(p3), "creditammount": $.copyArg(p4), "transdate": $.copyArg(p5), "parentid": $.copyArg(p6), result: undefined};
  await $.fixArgs(L0, ["commissionid", "debitid", "creditid", "debitammount", "creditammount", "transdate", "parentid"]);
  L0["iscommission"] = $.fn(async function IsCommission() {
  const L1 = {result: false};
  {
    const $t9 = (await $.v(C, "TransactionForm"));
    await $.wset([$t9], "Result", $.eq((await $.wv([$t9], "OperationMode", C, false)), (await $.wv([$t9], "omCommission", C, false))), { get: async () => L1["result"], set: async (v) => { L1["result"] = v; }, local: true });
  }
  return L1.result;
});
  if ($.truthy(L0["iscommission"])) {
    {
      const $t10 = (await $.mv((await $.v(C, "Transaction_DataModule")), "SBComplexTrans"));
      await $.stmt((await $.wcall([$t10], "CallProcedure", [(await $.wv([$t10], "cs_commission_execute", C, false)), ["CommisionID", (await $.wv([$t10], "CommissionID", { get: async () => L0["commissionid"], set: async (v) => { L0["commissionid"] = v; }, local: true }, false)), "DebitID", (await $.wv([$t10], "DebitID", { get: async () => L0["debitid"], set: async (v) => { L0["debitid"] = v; }, local: true }, false)), "CreditID", (await $.wv([$t10], "CreditID", { get: async () => L0["creditid"], set: async (v) => { L0["creditid"] = v; }, local: true }, false)), "DebitAmmount", (await $.wv([$t10], "DebitAmmount", { get: async () => L0["debitammount"], set: async (v) => { L0["debitammount"] = v; }, local: true }, false)), "CreditAmmount", (await $.wv([$t10], "CreditAmmount", { get: async () => L0["creditammount"], set: async (v) => { L0["creditammount"] = v; }, local: true }, false)), "TransDate", (await $.wv([$t10], "TransDate", { get: async () => L0["transdate"], set: async (v) => { L0["transdate"] = v; }, local: true }, false)), "v_ParentID", (await $.wv([$t10], "ParentID", { get: async () => L0["parentid"], set: async (v) => { L0["parentid"] = v; }, local: true }, false))]], C)));
    }
  }
  return L0.result;
}, {"params": ["CommissionID", "DebitID", "CreditID", "DebitAmmount", "CreditAmmount", "TransDate", "ParentID"], "kind": "procedure", "ptypes": ["Longint", "Longint", "Longint", "Currency", "Currency", "TDateTime", "Integer"]});
  U.method("TTransaction_DataModule", "TransactionsApplyRecord", async function TransactionsApplyRecord(Self, p0, p1, p2, p3) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "action": $.copyArg(p1), "applied": $.asRef(p2), "newrowid": $.asRef(p3), result: undefined, "transaction": $.rec("ttransaction")};
  await $.fixArgs(L0, ["sender", "action"]);
  L0["buildtransaction"] = $.fn(async function BuildTransaction() {
  const L1 = {result: undefined};
  {
    const $t11 = L0["sender"];
    const $t12 = (await $.wv([$t11], "Transaction", { get: async () => L0["transaction"], set: async (v) => { L0["transaction"] = v; }, local: true }, false));
    await $.wset([$t11, $t12], "TransactionDate", (await $.mv((await $.wcall([$t11, $t12], "FieldByName", ["TransactionDate"], C)), "AsDateTime")), C);
    await $.wset([$t11, $t12], "TransactionNo", (await $.mv((await $.wcall([$t11, $t12], "FieldByName", ["OperationNo"], C)), "AsString")), C);
    await $.wset([$t11, $t12], "DebitID", (await $.mv((await $.wcall([$t11, $t12], "FieldByName", ["DebitID"], C)), "AsInteger")), C);
    await $.wset([$t11, $t12], "CreditID", (await $.mv((await $.wcall([$t11, $t12], "FieldByName", ["CreditID"], C)), "AsInteger")), C);
    await $.wset([$t11, $t12], "DebitAmount", (await $.mv((await $.wcall([$t11, $t12], "FieldByName", ["DebitAmount"], C)), "AsCurrency")), C);
    await $.wset([$t11, $t12], "CreditAmount", (await $.mv((await $.wcall([$t11, $t12], "FieldByName", ["CreditAmount"], C)), "AsCurrency")), C);
    await $.wset([$t11, $t12], "LAmount", (await $.mv((await $.wcall([$t11, $t12], "FieldByName", ["LAmount"], C)), "AsCurrency")), C);
    await $.wset([$t11, $t12], "DebitRate", (await $.mv((await $.wcall([$t11, $t12], "FieldByName", ["DebitRate"], C)), "AsFloat")), C);
    await $.wset([$t11, $t12], "CreditRate", (await $.mv((await $.wcall([$t11, $t12], "FieldByName", ["CreditRate"], C)), "AsFloat")), C);
    await $.wset([$t11, $t12], "CashSymbol", (await $.mv((await $.wcall([$t11, $t12], "FieldByName", ["InbalanceChar"], C)), "AsString")), C);
    await $.wset([$t11, $t12], "ConvertationSymbol", (await $.mv((await $.wcall([$t11, $t12], "FieldByName", ["OutbalanceChar"], C)), "AsInteger")), C);
    await $.wset([$t11, $t12], "OperationCode", (await $.mv((await $.wcall([$t11, $t12], "FieldByName", ["OperationCode"], C)), "Value")), C);
    await $.wset([$t11, $t12], "ReportID", (await $.mv((await $.wcall([$t11, $t12], "FieldByName", ["ReportID"], C)), "Value")), C);
    await $.wset([$t11, $t12], "CountrID", (await $.mv((await $.wcall([$t11, $t12], "FieldByName", ["CountrID"], C)), "Value")), C);
    await $.wset([$t11, $t12], "Flags", 0, C);
    await $.wset([$t11, $t12], "TransactionName", (await $.mv((await $.wcall([$t11, $t12], "FieldByName", ["Name"], C)), "AsString")), C);
    {
      const $t13 = (await $.wcall([$t11, $t12], "FieldByName", ["ID"], C));
      if ($.truthy((await $.wv([$t11, $t12, $t13], "IsNull", C, false)))) {
        await $.wset([$t11, $t12, $t13], "TransactionID", (-(1)), C);
      } else {
        await $.wset([$t11, $t12, $t13], "TransactionID", (await $.wv([$t11, $t12, $t13], "AsInteger", C, false)), C);
      }
    }
  }
  return L1.result;
});
  { const $t14 = L0["action"];
    if ($.eq($t14, "I")) {
      await $.mset((await $.mcall(L0["sender"], "FieldByName", ["ID"])), "AsInteger", (await $.v(C, "GenerateID")));
      await $.stmt($.callv(L0["buildtransaction"], []));
      await $.stmt((await $.call(C, "AddTransaction", [L0["transaction"]])));
      await $.stmt((await $.call(C, "SetCommission", [(await $.mv((await $.mcall((await $.v(C, "Commission")), "FieldByName", ["ID"])), "AsInteger")), (await $.mv(L0["transaction"], "DebitID")), (await $.mv(L0["transaction"], "CreditID")), (await $.mv(L0["transaction"], "DebitAmount")), (await $.mv(L0["transaction"], "CreditAmount")), (await $.mv(L0["transaction"], "TransactionDate")), (await $.mv(L0["transaction"], "TransactionID"))])));
      await L0["applied"].set(true);
    }
    else if ($.eq($t14, "U")) {
      await $.stmt($.callv(L0["buildtransaction"], []));
      await $.stmt((await $.call(C, "DeleteTransaction", [(await $.mv((await $.mcall(L0["sender"], "FieldByName", ["ID"])), "AsInteger"))])));
      await $.stmt((await $.call(C, "AddTransaction", [L0["transaction"]])));
      await L0["applied"].set(true);
    }
    else if ($.eq($t14, "L") || $.eq($t14, "R") || $.eq($t14, "C")) {
      await L0["applied"].set(true);
    }
    else {
      await L0["applied"].set(false);
    }
  }
  return L0.result;
}, {"params": ["Sender", "Action", "Applied", "NewRowId"], "kind": "procedure", "ptypes": ["TOracleDataSet", "Char", "Boolean", "String"]});
  return U;
}
