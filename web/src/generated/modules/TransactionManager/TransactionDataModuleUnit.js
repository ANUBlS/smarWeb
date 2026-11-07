// Generated from TransactionDataModuleUnit.pas by pas2js — do not edit by hand; regenerate instead.
/* eslint-disable */
// @ts-nocheck

export default function define($) {
  const U = $.unit("TransactionDataModuleUnit", ["Windows", "Messages", "SysUtils", "Classes", "Graphics", "Controls", "Forms", "Dialogs", "Db", "OracleData", "Oracle", "Variants", "sboapiDataModuleImpl", "TransactionPropertiesImpl", "TransactionManagerImpl", "WorldCheckProc", "UnitWorMessa"]);
  const C = [U];
  $.defRecord("ttransaction", {"transactionid": () => 0, "transactiondate": () => 0, "transactionno": () => '', "debitid": () => 0, "creditid": () => 0, "debitamount": () => 0, "creditamount": () => 0, "lamount": () => 0, "debitrate": () => 0, "creditrate": () => 0, "cashsymbol": () => '', "convertationsymbol": () => 0, "operationcode": () => null, "flags": () => 0, "transactionname": () => '', "reportid": () => 0, "countrid": () => 0, "bdg_code": () => ''});
  U.defClass("TTransactionDataModule", "TDataModule", {"sysdat": {"name": "Sysdat", "type": "TOracleDataSet"}, "transactionsdata": {"name": "TransactionsData", "type": "TDataSource"}, "datasysdat": {"name": "DataSysdat", "type": "TDataSource"}, "debitcurrency": {"name": "DebitCurrency", "type": "TDataSource"}, "debitcurrencydata": {"name": "DebitCurrencyData", "type": "TOracleDataSet"}, "debitcurrencydataid": {"name": "DebitCurrencyDataID", "type": "TIntegerField"}, "debitcurrencydatarate": {"name": "DebitCurrencyDataRATE", "type": "TFloatField"}, "creditcurrency": {"name": "CreditCurrency", "type": "TDataSource"}, "creditcurrencydata": {"name": "CreditCurrencyData", "type": "TOracleDataSet"}, "creditcurrencydataid": {"name": "CreditCurrencyDataID", "type": "TIntegerField"}, "creditcurrencydatarate": {"name": "CreditCurrencyDataRATE", "type": "TFloatField"}, "debitaccs": {"name": "DebitAccs", "type": "TDataSource"}, "debitaccdata": {"name": "DebitAccData", "type": "TOracleDataSet"}, "debitaccdataid": {"name": "DebitAccDataID", "type": "TFloatField"}, "debitaccdataval_acc": {"name": "DebitAccDataVAL_ACC", "type": "TIntegerField"}, "debitaccdataiscacheaccount": {"name": "DebitAccDataISCACHEACCOUNT", "type": "TFloatField"}, "creditaccdata": {"name": "CreditAccData", "type": "TOracleDataSet"}, "creditaccs": {"name": "CreditAccs", "type": "TDataSource"}, "convertationsymbols": {"name": "ConvertationSymbols", "type": "TOracleDataSet"}, "convertationsymbolsdata": {"name": "ConvertationSymbolsData", "type": "TDataSource"}, "cashsymbols": {"name": "CashSymbols", "type": "TOracleDataSet"}, "cashsymbolsdata": {"name": "CashSymbolsData", "type": "TDataSource"}, "creditaccdataid": {"name": "CreditAccDataID", "type": "TFloatField"}, "creditaccdataval_acc": {"name": "CreditAccDataVAL_ACC", "type": "TIntegerField"}, "creditaccdataiscacheaccount": {"name": "CreditAccDataISCACHEACCOUNT", "type": "TFloatField"}, "currency": {"name": "Currency", "type": "TOracleDataSet"}, "operationtypes": {"name": "OperationTypes", "type": "TOracleDataSet"}, "operationtypesdata": {"name": "OperationTypesData", "type": "TDataSource"}, "transactions": {"name": "Transactions", "type": "TOracleDataSet"}, "transactionsid": {"name": "TransactionsID", "type": "TFloatField"}, "transactionsoperatorid": {"name": "TransactionsOPERATORID", "type": "TFloatField"}, "transactionstransactiondate": {"name": "TransactionsTRANSACTIONDATE", "type": "TDateTimeField"}, "transactionsdebitid": {"name": "TransactionsDEBITID", "type": "TFloatField"}, "transactionsdebitcurrencyid": {"name": "TransactionsDEBITCURRENCYID", "type": "TFloatField"}, "transactionscreditid": {"name": "TransactionsCREDITID", "type": "TFloatField"}, "transactionsdebitamount": {"name": "TransactionsDEBITAMOUNT", "type": "TFloatField"}, "transactionscreditamount": {"name": "TransactionsCREDITAMOUNT", "type": "TFloatField"}, "transactionslamount": {"name": "TransactionsLAMOUNT", "type": "TFloatField"}, "transactionsdebitbank": {"name": "TransactionsDEBITBANK", "type": "TFloatField"}, "transactionscreditbank": {"name": "TransactionsCREDITBANK", "type": "TFloatField"}, "debitbranch": {"name": "DebitBranch", "type": "TOracleDataSet"}, "debitbranchdata": {"name": "DebitBranchData", "type": "TDataSource"}, "creditbranch": {"name": "CreditBranch", "type": "TOracleDataSet"}, "creditbranchdata": {"name": "CreditBranchData", "type": "TDataSource"}, "usersdata": {"name": "UsersData", "type": "TDataSource"}, "users": {"name": "Users", "type": "TOracleDataSet"}, "operations": {"name": "Operations", "type": "TOracleQuery"}, "valute": {"name": "Valute", "type": "TOracleQuery"}, "sbtransaction": {"name": "SBTransaction", "type": "TOraclePackage"}, "commission": {"name": "Commission", "type": "TOracleDataSet"}, "commissiondata": {"name": "CommissionData", "type": "TDataSource"}, "commissionid": {"name": "CommissionID", "type": "TFloatField"}, "commissiondebt": {"name": "CommissionDEBT", "type": "TFloatField"}, "commissiondebitcurrencyid": {"name": "CommissionDEBITCURRENCYID", "type": "TFloatField"}, "commissioncredit": {"name": "CommissionCREDIT", "type": "TFloatField"}, "commissioncreditcurrencyid": {"name": "CommissionCREDITCURRENCYID", "type": "TFloatField"}, "commissionadditionaldebt": {"name": "CommissionADDITIONALDEBT", "type": "TFloatField"}, "commissionadddebitcurrencyid": {"name": "CommissionADDDEBITCURRENCYID", "type": "TFloatField"}, "commissionaddcreditcurrencyid": {"name": "CommissionADDCREDITCURRENCYID", "type": "TFloatField"}, "commissionuserid": {"name": "CommissionUSERID", "type": "TFloatField"}, "sbcomplextrans": {"name": "SBComplexTrans", "type": "TOraclePackage"}, "destinations": {"name": "Destinations", "type": "TOracleDataSet"}, "destinationsdata": {"name": "DestinationsData", "type": "TDataSource"}, "debitaccrestdata": {"name": "DebitAccRestData", "type": "TOracleDataSet"}, "debitaccdatabalance": {"name": "DebitAccDataBALANCE", "type": "TCurrencyField"}, "debitaccdatalbalance": {"name": "DebitAccDataLBALANCE", "type": "TCurrencyField"}, "creditaccrestdata": {"name": "CreditAccRestData", "type": "TOracleDataSet"}, "creditaccdatabalance": {"name": "CreditAccDataBALANCE", "type": "TCurrencyField"}, "creditaccdatalbalance": {"name": "CreditAccDataLBALANCE", "type": "TCurrencyField"}, "transactionscyphercode": {"name": "TransactionsCYPHERCODE", "type": "TIntegerField"}, "transactionsoperationcode": {"name": "TransactionsOPERATIONCODE", "type": "TFloatField"}, "transactionsoutbalancechar": {"name": "TransactionsOUTBALANCECHAR", "type": "TIntegerField"}, "transactionsfilialid": {"name": "TransactionsFILIALID", "type": "TIntegerField"}, "transactionsdebitbalance": {"name": "TransactionsDEBITBALANCE", "type": "TFloatField"}, "transactionsflags": {"name": "TransactionsFLAGS", "type": "TFloatField"}, "transactionsstatus": {"name": "TransactionsSTATUS", "type": "TFloatField"}, "transactionspackagenumber": {"name": "TransactionsPACKAGENUMBER", "type": "TIntegerField"}, "transactionscreditcurrencyid": {"name": "TransactionsCREDITCURRENCYID", "type": "TIntegerField"}, "transactionsreportid": {"name": "TransactionsREPORTID", "type": "TFloatField"}, "reportdesc": {"name": "ReportDesc", "type": "TOracleDataSet"}, "reportdescsdata": {"name": "ReportDescsData", "type": "TDataSource"}, "transactionscountrid": {"name": "TransactionsCOUNTRID", "type": "TFloatField"}, "country": {"name": "Country", "type": "TOracleDataSet"}, "countrydata": {"name": "CountryData", "type": "TDataSource"}, "sb_aca": {"name": "SB_ACA", "type": "TOraclePackage"}, "transactionsdebitbranch": {"name": "TransactionsDEBITBRANCH", "type": "TIntegerField"}, "transactionscreditbranch": {"name": "TransactionsCREDITBRANCH", "type": "TIntegerField"}, "bprocdata": {"name": "BProcData", "type": "TOracleDataSet"}, "bproc": {"name": "BProc", "type": "TDataSource"}, "bptransdata": {"name": "BPTransData", "type": "TOracleDataSet"}, "bptrans": {"name": "BPTrans", "type": "TDataSource"}, "packbproc": {"name": "PACKBPROC", "type": "TOraclePackage"}, "bprocdataid": {"name": "BProcDataID", "type": "TFloatField"}, "bprocdataname": {"name": "BProcDataNAME", "type": "TWideStringField"}, "debitcurrencydatasname": {"name": "DebitCurrencyDataSNAME", "type": "TWideStringField"}, "debitcurrencydataname": {"name": "DebitCurrencyDataNAME", "type": "TWideStringField"}, "creditcurrencydatasname": {"name": "CreditCurrencyDataSNAME", "type": "TWideStringField"}, "creditcurrencydataname": {"name": "CreditCurrencyDataNAME", "type": "TWideStringField"}, "transactionsoperationno": {"name": "TransactionsOPERATIONNO", "type": "TWideStringField"}, "transactionsdebitaccno": {"name": "TransactionsDEBITACCNO", "type": "TWideStringField"}, "transactionsdebitcurrencysname": {"name": "TransactionsDEBITCURRENCYSNAME", "type": "TWideStringField"}, "transactionscreditaccno": {"name": "TransactionsCREDITACCNO", "type": "TWideStringField"}, "transactionscreditcurrencysname": {"name": "TransactionsCREDITCURRENCYSNAME", "type": "TWideStringField"}, "transactionsusr": {"name": "TransactionsUSR", "type": "TWideStringField"}, "transactionsinbalancechar": {"name": "TransactionsINBALANCECHAR", "type": "TWideStringField"}, "transactionsname": {"name": "TransactionsNAME", "type": "TWideStringField"}, "transactionsreject_reason": {"name": "TransactionsREJECT_REASON", "type": "TWideStringField"}, "transactionsusrcommit": {"name": "TransactionsUSRCOMMIT", "type": "TWideStringField"}, "debitaccdataacc_no": {"name": "DebitAccDataACC_NO", "type": "TWideStringField"}, "debitaccdataname": {"name": "DebitAccDataNAME", "type": "TWideStringField"}, "creditaccdataacc_no": {"name": "CreditAccDataACC_NO", "type": "TWideStringField"}, "creditaccdataname": {"name": "CreditAccDataNAME", "type": "TWideStringField"}, "commissionname": {"name": "CommissionNAME", "type": "TWideStringField"}, "commissiondebitaccount": {"name": "CommissionDEBITACCOUNT", "type": "TWideStringField"}, "commissiondebitcurrency": {"name": "CommissionDEBITCURRENCY", "type": "TWideStringField"}, "commissioncreditaccount": {"name": "CommissionCREDITACCOUNT", "type": "TWideStringField"}, "commissioncreditcurrency": {"name": "CommissionCREDITCURRENCY", "type": "TWideStringField"}, "commissionadebitaccount": {"name": "CommissionADEBITACCOUNT", "type": "TWideStringField"}, "commissionadebitcurrency": {"name": "CommissionADEBITCURRENCY", "type": "TWideStringField"}, "commissionadditionalcredit": {"name": "CommissionADDITIONALCREDIT", "type": "TFloatField"}, "commissionacreditaccount": {"name": "CommissionACREDITACCOUNT", "type": "TWideStringField"}, "commissionacreditcurrency": {"name": "CommissionACREDITCURRENCY", "type": "TWideStringField"}, "commissionassignment": {"name": "CommissionASSIGNMENT", "type": "TWideStringField"}, "commissioncommisionassignment": {"name": "CommissionCOMMISIONASSIGNMENT", "type": "TWideStringField"}, "ods_statust": {"name": "ODS_StatusT", "type": "TOracleDataSet"}, "ods_vidoptrdel": {"name": "ODS_VidOPTrDel", "type": "TOracleDataSet"}, "ods_settings": {"name": "ODS_Settings", "type": "TOracleDataSet"}, "ods_settingsvalue": {"name": "ODS_SettingsVALUE", "type": "TWideStringField"}, "debt_bal_spr1": {"name": "DEBT_BAL_SPR1", "type": "TOracleDataSet"}, "deb_bal_spr1": {"name": "DEB_BAL_SPR1", "type": "TDataSource"}, "ods_account": {"name": "ODS_Account", "type": "TOracleDataSet"}, "ods_accountid": {"name": "ODS_AccountID", "type": "TFloatField"}, "ods_accountacc_no": {"name": "ODS_AccountACC_NO", "type": "TWideStringField"}, "ods_accountacc_no_search": {"name": "ODS_AccountACC_NO_SEARCH", "type": "TWideStringField"}, "ods_accountval_acc": {"name": "ODS_AccountVAL_ACC", "type": "TIntegerField"}, "ods_accountname": {"name": "ODS_AccountNAME", "type": "TWideStringField"}, "ods_accountiscacheaccount": {"name": "ODS_AccountISCACHEACCOUNT", "type": "TFloatField"}, "ds_account": {"name": "DS_Account", "type": "TDataSource"}, "debitaccdataostat": {"name": "DebitAccDataOSTAT", "type": "TFloatField"}, "debitaccdatapok_ostat": {"name": "DebitAccDataPOK_OSTAT", "type": "TFloatField"}, "creditaccdataostat": {"name": "CreditAccDataOSTAT", "type": "TFloatField"}, "creditaccdatapok_ostat": {"name": "CreditAccDataPOK_OSTAT", "type": "TFloatField"}, "debitaccdatabal_cn": {"name": "DebitAccDataBAL_CN", "type": "TFloatField"}, "creditaccdatabal_cn": {"name": "CreditAccDataBAL_CN", "type": "TFloatField"}, "transactionsdebitrate": {"name": "TransactionsDEBITRATE", "type": "TFloatField"}, "transactionscreditrate": {"name": "TransactionsCREDITRATE", "type": "TFloatField"}, "kredt_bal_spr1": {"name": "KREDT_BAL_SPR1", "type": "TOracleDataSet"}, "kred_bal_spr1": {"name": "KRED_BAL_SPR1", "type": "TDataSource"}, "debitaccdatafromtrans": {"name": "DebitAccDataFROMTRANS", "type": "TFloatField"}, "creditaccdatafromtrans": {"name": "CreditAccDataFROMTRANS", "type": "TFloatField"}, "ods_mmx_customers": {"name": "ODS_MMX_CUSTOMERS", "type": "TOracleDataSet"}, "op_mmx": {"name": "OP_MMX", "type": "TOraclePackage"}, "debitaccdatakli_id": {"name": "DebitAccDataKLI_ID", "type": "TFloatField"}, "creditaccdatakli_id": {"name": "CreditAccDataKLI_ID", "type": "TFloatField"}, "ods_mmx_transmode": {"name": "ODS_MMX_TRANSMODE", "type": "TOracleDataSet"}, "ds_mmx_transmode": {"name": "DS_MMX_TRANSMODE", "type": "TDataSource"}, "ods_mmx_transmodeid": {"name": "ODS_MMX_TRANSMODEID", "type": "TIntegerField"}, "ods_mmx_transmodename": {"name": "ODS_MMX_TRANSMODENAME", "type": "TIntegerField"}, "ods_mmx_transmodedescription": {"name": "ODS_MMX_TRANSMODEDESCRIPTION", "type": "TWideStringField"}, "ods_transinfo": {"name": "ODS_TransInfo", "type": "TOracleDataSet"}, "ods_transinfoid": {"name": "ODS_TransInfoID", "type": "TFloatField"}, "ods_transinfotransmode_code": {"name": "ODS_TransInfoTRANSMODE_CODE", "type": "TIntegerField"}, "ods_transinfotransid": {"name": "ODS_TransInfoTRANSID", "type": "TFloatField"}, "ods_debtcustomer": {"name": "ODS_DebtCustomer", "type": "TOracleDataSet"}, "ds_debtcustomer": {"name": "DS_DebtCustomer", "type": "TDataSource"}, "noncustbalcnc": {"name": "NonCustBalCnC", "type": "TOracleDataSet"}, "noncustbalcnd": {"name": "NonCustBalCnD", "type": "TOracleDataSet"}, "ds_credcustomer": {"name": "DS_CredCustomer", "type": "TDataSource"}, "ods_credcustomer": {"name": "ODS_CredCustomer", "type": "TOracleDataSet"}, "ods_transinfodcustid": {"name": "ODS_TransInfoDCUSTID", "type": "TFloatField"}, "ods_transinfoccustid": {"name": "ODS_TransInfoCCUSTID", "type": "TFloatField"}, "ods_accountkli_id": {"name": "ODS_AccountKLI_ID", "type": "TFloatField"}, "pg_pcustservice": {"name": "PG_PCustService", "type": "TOraclePackage"}, "ods_budce": {"name": "Ods_budce", "type": "TOracleDataSet"}, "dsrc_budce": {"name": "Dsrc_budce", "type": "TDataSource"}, "ods_budceid": {"name": "Ods_budceID", "type": "TFloatField"}, "ods_budcecode": {"name": "Ods_budceCODE", "type": "TWideStringField"}, "ods_budcename": {"name": "Ods_budceNAME", "type": "TWideStringField"}, "sbtransaction1": {"name": "SBTransaction1", "type": "TOraclePackage"}, "ods_budce_copy": {"name": "Ods_budce_copy", "type": "TOracleDataSet"}, "dsrc_budce_copy": {"name": "dsrc_budce_copy", "type": "TDataSource"}, "insert_oraclequery": {"name": "Insert_OracleQuery", "type": "TOracleQuery"}, "ods_budce_copyid": {"name": "Ods_budce_copyID", "type": "TFloatField"}, "ods_budce_copybc_accid": {"name": "Ods_budce_copyBC_ACCID", "type": "TFloatField"}, "ods_budce_copycode": {"name": "Ods_budce_copyCODE", "type": "TWideStringField"}, "ods_budce_copyammount": {"name": "Ods_budce_copyAMMOUNT", "type": "TFloatField"}, "ods_budce_copyname": {"name": "Ods_budce_copyNAME", "type": "TWideStringField"}, "ods_budce_copyusername": {"name": "Ods_budce_copyUSERNAME", "type": "TWideStringField"}, "delete_oraclequery": {"name": "Delete_OracleQuery", "type": "TOracleQuery"}, "ods_budce_subdivision": {"name": "Ods_budce_subdivision", "type": "TOracleDataSet"}, "dsrc_budce_subdivision": {"name": "Dsrc_budce_subdivision", "type": "TDataSource"}, "ods_budce_subdivisioncode": {"name": "Ods_budce_subdivisionCODE", "type": "TWideStringField"}, "ods_budce_subdivisionname": {"name": "Ods_budce_subdivisionNAME", "type": "TWideStringField"}, "transactionsbdg_code": {"name": "TransactionsBDG_CODE", "type": "TWideStringField"}, "ods_budce_copy_cum": {"name": "Ods_budce_copy_cum", "type": "TOracleDataSet"}, "ods_budce_copy_cumammount": {"name": "Ods_budce_copy_cumAMMOUNT", "type": "TFloatField"}, "debitaccdatacust_id": {"name": "DebitAccDataCUST_ID", "type": "TIntegerField"}, "debitaccdatacust_name": {"name": "DebitAccDataCUST_NAME", "type": "TWideStringField"}, "creditaccdatacust_id": {"name": "CreditAccDataCUST_ID", "type": "TIntegerField"}, "creditaccdatacust_name": {"name": "CreditAccDataCUST_NAME", "type": "TWideStringField"}, "transactionsd_accno": {"name": "TransactionsD_ACCNO", "type": "TWideStringField"}, "transactionsc_accno": {"name": "TransactionsC_ACCNO", "type": "TWideStringField"}, "transactionskreditbalance": {"name": "TransactionsKREDITBALANCE", "type": "TFloatField"}, "oraclepackage1": {"name": "OraclePackage1", "type": "TOraclePackage"}, "debitaccdatacustname": {"name": "DebitAccDataCUSTNAME", "type": "TWideStringField"}, "debitaccdatalastname": {"name": "DebitAccDataLASTNAME", "type": "TWideStringField"}, "debitaccdatasoname": {"name": "DebitAccDataSONAME", "type": "TWideStringField"}, "creditaccdatacustname": {"name": "CreditAccDataCUSTNAME", "type": "TWideStringField"}, "creditaccdatalastname": {"name": "CreditAccDataLASTNAME", "type": "TWideStringField"}, "creditaccdatasoname": {"name": "CreditAccDataSONAME", "type": "TWideStringField"}, "debitaccdatacitizenship": {"name": "DebitAccDataCITIZENSHIP", "type": "TFloatField"}, "debitaccdatacntr_name": {"name": "DebitAccDataCNTR_NAME", "type": "TWideStringField"}, "creditaccdatacitizenship": {"name": "CreditAccDataCITIZENSHIP", "type": "TFloatField"}, "creditaccdatacntr_name": {"name": "CreditAccDataCNTR_NAME", "type": "TWideStringField"}, "ds_dbtcustnom": {"name": "DS_DbtCustNom", "type": "TOracleDataSet"}, "ds_dbtcustnomacc_no": {"name": "DS_DbtCustNomACC_NO", "type": "TWideStringField"}, "ds_dbtcustnomkli_id": {"name": "DS_DbtCustNomKLI_ID", "type": "TFloatField"}, "ds_crecustnom": {"name": "DS_CreCustNom", "type": "TOracleDataSet"}, "ds_crecustnomid": {"name": "DS_CreCustNomID", "type": "TFloatField"}, "ds_crecustnomacc_no": {"name": "DS_CreCustNomACC_NO", "type": "TWideStringField"}, "ds_crecustnomkli_id": {"name": "DS_CreCustNomKLI_ID", "type": "TFloatField"}, "ds_dbtcustnomid": {"name": "DS_DbtCustNomID", "type": "TFloatField"}, "ds_dbtcustnomcitizenship": {"name": "DS_DbtCustNomCITIZENSHIP", "type": "TFloatField"}, "ds_dbtcustnomcntr_name": {"name": "DS_DbtCustNomCNTR_NAME", "type": "TWideStringField"}, "ds_crecustnomcitizenship": {"name": "DS_CreCustNomCITIZENSHIP", "type": "TFloatField"}, "ds_crecustnomcntr_name": {"name": "DS_CreCustNomCNTR_NAME", "type": "TWideStringField"}, "ods_mmx_reportcode": {"name": "Ods_mmx_reportcode", "type": "TOracleDataSet"}, "dsrc_mmx_reportcode": {"name": "Dsrc_mmx_reportcode", "type": "TDataSource"}, "ods_mmx_reportcodeid": {"name": "Ods_mmx_reportcodeID", "type": "TIntegerField"}, "ods_mmx_reportcodename": {"name": "Ods_mmx_reportcodeNAME", "type": "TWideStringField"}, "ods_mmx_reportcodedescription": {"name": "Ods_mmx_reportcodeDESCRIPTION", "type": "TWideStringField"}, "ods_transinforeport_code": {"name": "ODS_TransInfoREPORT_CODE", "type": "TWideStringField"}, "countryid": {"name": "CountryID", "type": "TFloatField"}, "countryname": {"name": "CountryNAME", "type": "TWideStringField"}, "ods_transinfocitizenship_db": {"name": "ODS_TransInfoCITIZENSHIP_DB", "type": "TFloatField"}, "ods_transinfocitizenship_cr": {"name": "ODS_TransInfoCITIZENSHIP_CR", "type": "TFloatField"}, "ods_transinfonomdcustid": {"name": "ODS_TransInfoNOMDCUSTID", "type": "TFloatField"}, "ods_transinfonomccustid": {"name": "ODS_TransInfoNOMCCUSTID", "type": "TFloatField"}, "ods_transinfonom_citizenship_db": {"name": "ODS_TransInfoNOM_CITIZENSHIP_DB", "type": "TFloatField"}, "ods_transinfonom_citizenship_cr": {"name": "ODS_TransInfoNOM_CITIZENSHIP_CR", "type": "TFloatField"}, "kredt_bal_spr1bal_cn": {"name": "KREDT_BAL_SPR1BAL_CN", "type": "TFloatField"}, "kredt_bal_spr1balname": {"name": "KREDT_BAL_SPR1BALNAME", "type": "TWideStringField"}, "kredt_bal_spr1bank_balance": {"name": "KREDT_BAL_SPR1BANK_BALANCE", "type": "TFloatField"}, "debt_bal_spr1bal_cn": {"name": "DEBT_BAL_SPR1BAL_CN", "type": "TFloatField"}, "debt_bal_spr1balname": {"name": "DEBT_BAL_SPR1BALNAME", "type": "TWideStringField"}, "debt_bal_spr1bank_balance": {"name": "DEBT_BAL_SPR1BANK_BALANCE", "type": "TFloatField"}, "ods_debtcustomerid": {"name": "ODS_DebtCustomerID", "type": "TFloatField"}, "ods_debtcustomername": {"name": "ODS_DebtCustomerNAME", "type": "TWideStringField"}, "ods_debtcustomercitizenship": {"name": "ODS_DebtCustomerCITIZENSHIP", "type": "TFloatField"}, "ods_debtcustomercntr_name": {"name": "ODS_DebtCustomerCNTR_NAME", "type": "TWideStringField"}, "ods_debtcustomercustname": {"name": "ODS_DebtCustomerCUSTNAME", "type": "TWideStringField"}, "ods_debtcustomerlastname": {"name": "ODS_DebtCustomerLASTNAME", "type": "TWideStringField"}, "ods_debtcustomersoname": {"name": "ODS_DebtCustomerSONAME", "type": "TWideStringField"}, "ods_credcustomerid": {"name": "ODS_CredCustomerID", "type": "TFloatField"}, "ods_credcustomername": {"name": "ODS_CredCustomerNAME", "type": "TWideStringField"}, "ods_credcustomercitizenship": {"name": "ODS_CredCustomerCITIZENSHIP", "type": "TFloatField"}, "ods_credcustomercntr_name": {"name": "ODS_CredCustomerCNTR_NAME", "type": "TWideStringField"}, "ods_credcustomercustname": {"name": "ODS_CredCustomerCUSTNAME", "type": "TWideStringField"}, "ods_credcustomerlastname": {"name": "ODS_CredCustomerLASTNAME", "type": "TWideStringField"}, "ods_credcustomersoname": {"name": "ODS_CredCustomerSONAME", "type": "TWideStringField"}, "transactionsd1": {"name": "TransactionsD1", "type": "TWideStringField"}, "ods_vidopuser": {"name": "ods_vidopUser", "type": "TOracleDataSet"}}, {});
  U.init(async () => {
    U.const("cs_generateid", "GenerateID");
    U.const("cs_add_transaction", "transaction_add");
    U.const("cs_del_transaction", "transaction_delete");
    U.const("cs_commit_transaction", "transaction_commit");
    U.const("cs_reject_transaction", "transaction_reject");
    U.const("cs_commission_execute", "SetTransactions");
    U.const("cs_commit_delayed_transactions", "transactions_delayed_commit");
    U.var_("TransactionDataModule", null, "TTransactionDataModule");
    U.var_("NonCustMustBe", false, "Boolean");
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
    await $.wset([$t1, $t2], "DebitRate", (await $.mv((await $.wcall([$t1, $t2], "FieldByName", ["DebitRate"], C)), "AsFloat")), C);
    await $.wset([$t1, $t2], "CreditRate", (await $.mv((await $.wcall([$t1, $t2], "FieldByName", ["CreditRate"], C)), "AsFloat")), C);
    await $.wset([$t1, $t2], "CashSymbol", (await $.mv((await $.wcall([$t1, $t2], "FieldByName", ["InbalanceChar"], C)), "AsString")), C);
    await $.wset([$t1, $t2], "ConvertationSymbol", (await $.mv((await $.wcall([$t1, $t2], "FieldByName", ["OutbalanceChar"], C)), "AsInteger")), C);
    await $.wset([$t1, $t2], "OperationCode", (await $.mv((await $.wcall([$t1, $t2], "FieldByName", ["OperationCode"], C)), "Value")), C);
    await $.wset([$t1, $t2], "ReportID", (await $.mv((await $.wcall([$t1, $t2], "FieldByName", ["ReportID"], C)), "Value")), C);
    await $.wset([$t1, $t2], "CountrID", (await $.mv((await $.wcall([$t1, $t2], "FieldByName", ["CountrID"], C)), "Value")), C);
    await $.wset([$t1, $t2], "Flags", 0, C);
    await $.wset([$t1, $t2], "TransactionName", (await $.mv((await $.wcall([$t1, $t2], "FieldByName", ["Name"], C)), "AsString")), C);
    await $.wset([$t1, $t2], "bdg_code", (await $.mv((await $.wcall([$t1, $t2], "FieldByName", ["bdg_code"], C)), "AsString")), C);
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
      await $.stmt((await $.call(C, "SetCommission", [(await $.mv((await $.mcall((await $.v(C, "Commission")), "FieldByName", ["ID"])), "AsInteger")), (await $.mv(L0["transaction"], "DebitID")), (await $.mv(L0["transaction"], "CreditID")), (await $.mv(L0["transaction"], "DebitAmount")), (await $.mv(L0["transaction"], "CreditAmount")), (await $.mv(L0["transaction"], "TransactionDate")), (await $.mv(L0["transaction"], "TransactionID"))])));
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
    const $t5 = (await $.wobj(C, "TransactionEditForm"));
    const $t6 = (await $.wv([$t5], "DebitAccData", C, false));
    await $.mset((await $.wv([$t5, $t6], "EditDebtBal_CN", C, false)), "Text", "");
    await $.mset((await $.wv([$t5, $t6], "EditDebtAccNo", C, false)), "Text", "");
    await $.mcall((await $.mv((await $.wv([$t5, $t6], "TransactionDataModule", C, false)), "DebitAccData")), "Close", []);
    await $.wset([$t5, $t6], "DebitCurrencyID", (await $.mv((await $.mcall((await $.wv([$t5, $t6], "DataSet", { get: async () => L0["dataset"], set: async (v) => { L0["dataset"] = v; }, local: true }, false)), "FieldByName", ["ID"])), "AsInteger")), C);
    await $.mset((await $.mcall((await $.wv([$t5, $t6], "Transactions", C, false)), "FieldByName", ["DebitRate"])), "AsFloat", (await $.mv((await $.mcall((await $.wv([$t5, $t6], "DataSet", { get: async () => L0["dataset"], set: async (v) => { L0["dataset"] = v; }, local: true }, false)), "FieldByName", ["Rate"])), "AsFloat")));
    if ($.truthy($.ne((await $.mv((await $.wv([$t5, $t6], "TransDate", C, false)), "Date")), (await $.mv((await $.mcall((await $.wv([$t5, $t6], "Sysdat", C, false)), "FieldByName", ["tek_dat"])), "AsDateTime"))))) {
      await $.mset((await $.mcall((await $.wv([$t5, $t6], "Transactions", C, false)), "FieldByName", ["DebitRate"])), "AsFloat", 0);
    }
    await $.stmt($.wcall([$t5, $t6], "ClearAmmounts", [], C));
  }
  return L0.result;
}, {"params": ["DataSet"], "kind": "procedure", "ptypes": ["TDataSet"]});
  U.method("TTransactionDataModule", "DataModuleCreate", async function DataModuleCreate(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mcall((await $.v(C, "Ods_budce_subdivision")), "Open", []);
  await $.mcall((await $.v(C, "Ods_budce")), "open", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TTransactionDataModule", "DataModuleDestroy", async function DataModuleDestroy(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mcall((await $.v(C, "Ods_budce_subdivision")), "Close", []);
  await $.mcall((await $.v(C, "Ods_budce")), "Close", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TTransactionDataModule", "DebitAccDataAfterScroll", async function DebitAccDataAfterScroll(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"dataset": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["dataset"]);
  return L0.result;
}, {"params": ["DataSet"], "kind": "procedure", "ptypes": ["TDataSet"]});
  U.method("TTransactionDataModule", "SetNonCustBal", async function SetNonCustBal(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: undefined};
  await $.mcall((await $.v(C, "NonCustBalCnC")), "Close", []);
  await $.stmt((await $.mcall((await $.v(C, "NonCustBalCnC")), "SetVariable", ["v_balcn", (await $.mv((await $.mcall((await $.v(C, "CreditAccData")), "FieldByName", ["BAL_CN"])), "AsString"))])));
  await $.mcall((await $.v(C, "NonCustBalCnC")), "Open", []);
  await $.mcall((await $.v(C, "NonCustBalCnD")), "Close", []);
  await $.stmt((await $.mcall((await $.v(C, "NonCustBalCnD")), "SetVariable", ["v_balcn", (await $.mv((await $.mcall((await $.v(C, "DebitAccData")), "FieldByName", ["BAL_CN"])), "AsString"))])));
  await $.mcall((await $.v(C, "NonCustBalCnD")), "Open", []);
  if ($.truthy((await $.and_(($.eq((await $.mv((await $.mcall((await $.v(C, "DebitAccData")), "FieldByName", ["IsCacheAccount"])), "AsInteger")), 1)), async () => ($.gt((await $.mv((await $.v(C, "NonCustBalCnC")), "RecordCount")), 0)))))) {
    await $.mset((await $.mv((await $.v(C, "TransactionEditForm")), "Edit_DCustID")), "Enabled", true);
    await $.mset((await $.mv((await $.v(C, "TransactionEditForm")), "Edit_DCustID")), "Color", (await $.v(C, "clWindow")));
    await $.set(C, "NonCustMustBe", true);
  } else {
    if ($.truthy((await $.and_(($.eq((await $.mv((await $.mcall((await $.v(C, "CreditAccData")), "FieldByName", ["IsCacheAccount"])), "AsInteger")), 1)), async () => ($.gt((await $.mv((await $.v(C, "NonCustBalCnD")), "RecordCount")), 0)))))) {
      await $.mset((await $.mv((await $.v(C, "TransactionEditForm")), "Edit_DCustID")), "Enabled", true);
      await $.mset((await $.mv((await $.v(C, "TransactionEditForm")), "Edit_DCustID")), "Color", (await $.v(C, "clWindow")));
      await $.set(C, "NonCustMustBe", true);
    } else {
      await $.mset((await $.mv((await $.v(C, "TransactionEditForm")), "Edit_DCustID")), "Enabled", false);
      await $.mset((await $.mv((await $.v(C, "TransactionEditForm")), "Edit_DCustID")), "Color", (await $.v(C, "clSilver")));
      await $.set(C, "NonCustMustBe", false);
    }
  }
  return L0.result;
}, {"params": [], "kind": "procedure", "ptypes": []});
  U.method("TTransactionDataModule", "CreditCurrencyDataAfterScroll", async function CreditCurrencyDataAfterScroll(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"dataset": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["dataset"]);
  if ($.truthy($.not((await $.call(C, "Assigned", [(await $.v(C, "TransactionEditForm"))]))))) {
    return L0.result;
  }
  {
    const $t7 = (await $.wobj(C, "TransactionEditForm"));
    const $t8 = (await $.wv([$t7], "CreditAccData", C, false));
    await $.mset((await $.wv([$t7, $t8], "EditCredAccNo", C, false)), "Text", "");
    await $.mset((await $.wv([$t7, $t8], "EditKredBal_CN", C, false)), "Text", "");
    await $.mcall((await $.mv((await $.wv([$t7, $t8], "TransactionDataModule", C, false)), "CreditAccData")), "Close", []);
    await $.wset([$t7, $t8], "CreditCurrencyID", (await $.mv((await $.mcall((await $.wv([$t7, $t8], "DataSet", { get: async () => L0["dataset"], set: async (v) => { L0["dataset"] = v; }, local: true }, false)), "FieldByName", ["ID"])), "AsInteger")), C);
    await $.mset((await $.mcall((await $.wv([$t7, $t8], "Transactions", C, false)), "FieldByName", ["CreditRate"])), "AsFloat", (await $.mv((await $.mcall((await $.wv([$t7, $t8], "DataSet", { get: async () => L0["dataset"], set: async (v) => { L0["dataset"] = v; }, local: true }, false)), "FieldByName", ["Rate"])), "AsFloat")));
    if ($.truthy($.ne((await $.mv((await $.wv([$t7, $t8], "TransDate", C, false)), "Date")), (await $.mv((await $.mcall((await $.wv([$t7, $t8], "Sysdat", C, false)), "FieldByName", ["tek_dat"])), "AsDateTime"))))) {
      await $.mset((await $.mcall((await $.wv([$t7, $t8], "Transactions", C, false)), "FieldByName", ["CreditRate"])), "AsFloat", 0);
    }
    await $.stmt($.wcall([$t7, $t8], "ClearAmmounts", [], C));
  }
  return L0.result;
}, {"params": ["DataSet"], "kind": "procedure", "ptypes": ["TDataSet"]});
  U.method("TTransactionDataModule", "CreditAccDataAfterScroll", async function CreditAccDataAfterScroll(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"dataset": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["dataset"]);
  return L0.result;
}, {"params": ["DataSet"], "kind": "procedure", "ptypes": ["TDataSet"]});
  U.method("TTransactionDataModule", "ValuteThreadRecord", async function ValuteThreadRecord(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t9 = (await $.wobj(C, "TransactionManagerForm"));
    const $t10 = (await $.wv([$t9], "CLBCurrency", C, false));
    const $t11 = (await $.wv([$t9, $t10], "Items", C, false));
    await $.stmt((await $.wcall([$t9, $t10, $t11], "Add", [(await $.mcall((await $.wv([$t9, $t10, $t11], "Sender", { get: async () => L0["sender"], set: async (v) => { L0["sender"] = v; }, local: true }, false)), "Field", ["valu_name"]))], C)));
    { const $t12 = await $.iset((await $.wv([$t9, $t10, $t11], "Checked", C, false)), [$.sub((await $.wv([$t9, $t10, $t11], "Count", C, false)), 1)], (await $.wv([$t9, $t10, $t11], "True", C, false))); if ($t12 !== undefined) { await $.wset([$t9, $t10, $t11], "Checked", $t12, C); } }
    await $.stmt((await $.mcall((await $.wcall([$t9, $t10, $t11], "TStringList", [(await $.wcall([$t9, $t10, $t11], "Pointer", [(await $.mv((await $.wv([$t9, $t10, $t11], "CLBCurrency", C, false)), "Tag"))], C))], C)), "Add", [(await $.mcall((await $.wv([$t9, $t10, $t11], "Sender", { get: async () => L0["sender"], set: async (v) => { L0["sender"] = v; }, local: true }, false)), "Field", ["valute"]))])));
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TOracleQuery"]});
  U.method("TTransactionDataModule", "OperationsThreadRecord", async function OperationsThreadRecord(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t13 = (await $.wobj(C, "TransactionManagerForm"));
    const $t14 = (await $.wv([$t13], "CLBOperationTypes", C, false));
    const $t15 = (await $.wv([$t13, $t14], "Items", C, false));
    await $.stmt((await $.wcall([$t13, $t14, $t15], "Add", [(await $.mcall((await $.wv([$t13, $t14, $t15], "Sender", { get: async () => L0["sender"], set: async (v) => { L0["sender"] = v; }, local: true }, false)), "Field", ["name"]))], C)));
    { const $t16 = await $.iset((await $.wv([$t13, $t14, $t15], "Checked", C, false)), [$.sub((await $.wv([$t13, $t14, $t15], "Count", C, false)), 1)], (await $.wv([$t13, $t14, $t15], "True", C, false))); if ($t16 !== undefined) { await $.wset([$t13, $t14, $t15], "Checked", $t16, C); } }
    await $.stmt((await $.mcall((await $.wcall([$t13, $t14, $t15], "TStringList", [(await $.wcall([$t13, $t14, $t15], "Pointer", [(await $.mv((await $.wv([$t13, $t14, $t15], "CLBOperationTypes", C, false)), "Tag"))], C))], C)), "Add", [(await $.mcall((await $.wv([$t13, $t14, $t15], "Sender", { get: async () => L0["sender"], set: async (v) => { L0["sender"] = v; }, local: true }, false)), "Field", ["ID"]))])));
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TOracleQuery"]});
  U.method("TTransactionDataModule", "DebitAccRestDataAfterScroll", async function DebitAccRestDataAfterScroll(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"dataset": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["dataset"]);
  {
    const $t17 = L0["dataset"];
    await $.mset((await $.mcall((await $.wv([$t17], "DebitAccData", C, false)), "FieldByName", ["BALANCE"])), "AsCurrency", (await $.mv((await $.wcall([$t17], "FieldByName", ["OSTAT"], C)), "AsCurrency")));
    await $.mset((await $.mcall((await $.wv([$t17], "DebitAccData", C, false)), "FieldByName", ["LBALANCE"])), "AsCurrency", (await $.mv((await $.wcall([$t17], "FieldByName", ["POK_OSTAT"], C)), "AsCurrency")));
  }
  return L0.result;
}, {"params": ["DataSet"], "kind": "procedure", "ptypes": ["TDataSet"]});
  U.method("TTransactionDataModule", "CreditAccRestDataAfterScroll", async function CreditAccRestDataAfterScroll(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"dataset": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["dataset"]);
  {
    const $t18 = L0["dataset"];
    await $.mset((await $.mcall((await $.wv([$t18], "CreditAccData", C, false)), "FieldByName", ["BALANCE"])), "AsCurrency", (await $.mv((await $.wcall([$t18], "FieldByName", ["OSTAT"], C)), "AsCurrency")));
    await $.mset((await $.mcall((await $.wv([$t18], "CreditAccData", C, false)), "FieldByName", ["LBALANCE"])), "AsCurrency", (await $.mv((await $.wcall([$t18], "FieldByName", ["POK_OSTAT"], C)), "AsCurrency")));
  }
  return L0.result;
}, {"params": ["DataSet"], "kind": "procedure", "ptypes": ["TDataSet"]});
  U.method("TTransactionDataModule", "SBCommit", async function SBCommit(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: undefined};
  await $.mcall((await $.mv((await $.v(C, "sboapiDataModule")), "SBSession")), "Commit", []);
  return L0.result;
}, {"params": [], "kind": "procedure", "ptypes": []});
  U.method("TTransactionDataModule", "AddTransaction", async function AddTransaction(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"transaction": $.copyArg(p0), result: 0, "atransactionid": null, "nomid": null, "nomid1": null, "db_bal_cn": 0, "cr_bal_cn": 0, "k1": 0, "v_report": ''};
  await $.fixArgs(L0, ["transaction"]);
  {
    const $t19 = L0["transaction"];
    const $t20 = (await $.wv([$t19], "SBTransaction", C, false));
    if ($.truthy($.eq((await $.wv([$t19, $t20], "TransactionID", C, false)), (-(1))))) {
      await $.wset([$t19, $t20], "ATransactionID", (await $.wv([$t19, $t20], "Null", C, false)), { get: async () => L0["atransactionid"], set: async (v) => { L0["atransactionid"] = v; }, local: true });
    } else {
      await $.wset([$t19, $t20], "ATransactionID", (await $.wv([$t19, $t20], "TransactionID", C, false)), { get: async () => L0["atransactionid"], set: async (v) => { L0["atransactionid"] = v; }, local: true });
    }
    await $.wset([$t19, $t20], "k1", 0, { get: async () => L0["k1"], set: async (v) => { L0["k1"] = v; }, local: true });
    await $.wset([$t19, $t20], "Result", (await $.wcall([$t19, $t20], "CallIntegerFunction", [(await $.wv([$t19, $t20], "cs_add_transaction", C, false)), ["TransactionDate", (await $.wv([$t19, $t20], "TransactionDate", C, false)), "DebitID", (await $.wv([$t19, $t20], "DebitID", C, false)), "CreditID", (await $.wv([$t19, $t20], "CreditID", C, false)), "DebitAmount", (await $.wv([$t19, $t20], "DebitAmount", C, false)), "CreditAmount", (await $.wv([$t19, $t20], "CreditAmount", C, false)), "LAmount", (await $.wv([$t19, $t20], "LAmount", C, false)), "DebitRate", (await $.wv([$t19, $t20], "DebitRate", C, false)), "CreditRate", (await $.wv([$t19, $t20], "CreditRate", C, false)), "TrName", (await $.wv([$t19, $t20], "TransactionName", C, false)), "Flags", (await $.wv([$t19, $t20], "Flags", C, false)), "InBalanceChar", (await $.wv([$t19, $t20], "CashSymbol", C, false)), "OutBalanceChar", (await $.wv([$t19, $t20], "ConvertationSymbol", C, false)), "TransactionID", (await $.wv([$t19, $t20], "ATransactionID", { get: async () => L0["atransactionid"], set: async (v) => { L0["atransactionid"] = v; }, local: true }, false)), "OperationType", (await $.wv([$t19, $t20], "OperationCode", C, false)), "TransactionNo", (await $.wv([$t19, $t20], "TransactionNo", C, false)), "pReportID", (await $.wv([$t19, $t20], "Reportid", C, false)), "pCountrID", (await $.wv([$t19, $t20], "CountrID", C, false)), "p_bdgcode", (await $.wv([$t19, $t20], "bdg_code", C, false))]], C)), { get: async () => L0["result"], set: async (v) => { L0["result"] = v; }, local: true });
  }
  return L0.result;
}, {"params": ["Transaction"], "kind": "function", "ptypes": ["TTransaction"]});
  U.method("TTransactionDataModule", "DeleteTransaction", async function DeleteTransaction(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"transactionid": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["transactionid"]);
  {
    const $t21 = (await $.wobj(C, "SBTransaction"));
    await $.stmt((await $.wcall([$t21], "CallProcedure", [(await $.wv([$t21], "cs_del_transaction", C, false)), ["TransactionID", (await $.wv([$t21], "TransactionID", { get: async () => L0["transactionid"], set: async (v) => { L0["transactionid"] = v; }, local: true }, false))]], C)));
  }
  return L0.result;
}, {"params": ["TransactionID"], "kind": "procedure", "ptypes": ["Longint"]});
  U.method("TTransactionDataModule", "CommitTransactions", async function CommitTransactions(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"transactionids": $.copyArg(p0), result: 0};
  await $.fixArgs(L0, ["transactionids"]);
  {
    const $t22 = (await $.wobj(C, "SBTransaction"));
    await $.wset([$t22], "Result", (await $.wcall([$t22], "CallIntegerFunction", [(await $.wv([$t22], "cs_commit_delayed_transactions", C, false)), ["OverloadIDsStr", (await $.wv([$t22], "TransactionIDs", { get: async () => L0["transactionids"], set: async (v) => { L0["transactionids"] = v; }, local: true }, false)), "CommitTemp", (await $.wv([$t22], "True", C, false))]], C)), { get: async () => L0["result"], set: async (v) => { L0["result"] = v; }, local: true });
  }
  return L0.result;
}, {"params": ["TransactionIDs"], "kind": "function", "ptypes": ["WideString"]});
  U.method("TTransactionDataModule", "CommitTransaction", async function CommitTransaction(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"transactionid": $.copyArg(p0), result: 0};
  await $.fixArgs(L0, ["transactionid"]);
  {
    const $t23 = (await $.wobj(C, "SBTransaction"));
    await $.wset([$t23], "Result", (await $.wcall([$t23], "CallIntegerFunction", [(await $.wv([$t23], "cs_commit_transaction", C, false)), ["TransactionID", (await $.wv([$t23], "TransactionID", { get: async () => L0["transactionid"], set: async (v) => { L0["transactionid"] = v; }, local: true }, false)), "CommitTemp", (await $.wv([$t23], "True", C, false))]], C)), { get: async () => L0["result"], set: async (v) => { L0["result"] = v; }, local: true });
  }
  return L0.result;
}, {"params": ["TransactionID"], "kind": "function", "ptypes": ["Longint"]});
  U.method("TTransactionDataModule", "GenerateID", async function GenerateID(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: 0};
  {
    const $t24 = (await $.wobj(C, "SBTransaction"));
    await $.wset([$t24], "Result", (await $.wcall([$t24], "CallIntegerFunction", [(await $.wv([$t24], "cs_generateid", C, false)), []], C)), { get: async () => L0["result"], set: async (v) => { L0["result"] = v; }, local: true });
  }
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TTransactionDataModule", "RejectTransaction", async function RejectTransaction(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"transactionid": $.copyArg(p0), "rejectreason": $.copyArg(p1), result: 0};
  await $.fixArgs(L0, ["transactionid", "rejectreason"]);
  {
    const $t25 = (await $.wobj(C, "SBTransaction"));
    await $.wset([$t25], "Result", (await $.wcall([$t25], "CallIntegerFunction", [(await $.wv([$t25], "cs_reject_transaction", C, false)), ["TransactionID", (await $.wv([$t25], "TransactionID", { get: async () => L0["transactionid"], set: async (v) => { L0["transactionid"] = v; }, local: true }, false)), "RejectReason", (await $.wv([$t25], "RejectReason", { get: async () => L0["rejectreason"], set: async (v) => { L0["rejectreason"] = v; }, local: true }, false))]], C)), { get: async () => L0["result"], set: async (v) => { L0["result"] = v; }, local: true });
  }
  return L0.result;
}, {"params": ["TransactionID", "RejectReason"], "kind": "function", "ptypes": ["Longint", "String"]});
  U.method("TTransactionDataModule", "SetCommission", async function SetCommission(Self, p0, p1, p2, p3, p4, p5, p6) {
  const C = $.chain(Self, U);
  const L0 = {"commissionid": $.copyArg(p0), "debitid": $.copyArg(p1), "creditid": $.copyArg(p2), "debitammount": $.copyArg(p3), "creditammount": $.copyArg(p4), "transdate": $.copyArg(p5), "parentid": $.copyArg(p6), result: undefined};
  await $.fixArgs(L0, ["commissionid", "debitid", "creditid", "debitammount", "creditammount", "transdate", "parentid"]);
  L0["iscommission"] = $.fn(async function IsCommission() {
  const L1 = {result: false};
  {
    const $t26 = (await $.wobj(C, "TransactionManagerForm"));
    await $.wset([$t26], "Result", $.eq((await $.wv([$t26], "OperationMode", C, false)), (await $.wv([$t26], "omCommission", C, false))), { get: async () => L1["result"], set: async (v) => { L1["result"] = v; }, local: true });
  }
  return L1.result;
});
  if ($.truthy(L0["iscommission"])) {
    {
      const $t27 = (await $.wobj(C, "SBComplexTrans"));
      await $.stmt((await $.wcall([$t27], "CallProcedure", [(await $.wv([$t27], "cs_commission_execute", C, false)), ["CommisionID", (await $.wv([$t27], "CommissionID", { get: async () => L0["commissionid"], set: async (v) => { L0["commissionid"] = v; }, local: true }, false)), "DebitID", (await $.wv([$t27], "DebitID", { get: async () => L0["debitid"], set: async (v) => { L0["debitid"] = v; }, local: true }, false)), "CreditID", (await $.wv([$t27], "CreditID", { get: async () => L0["creditid"], set: async (v) => { L0["creditid"] = v; }, local: true }, false)), "DebitAmmount", (await $.wv([$t27], "DebitAmmount", { get: async () => L0["debitammount"], set: async (v) => { L0["debitammount"] = v; }, local: true }, false)), "CreditAmmount", (await $.wv([$t27], "CreditAmmount", { get: async () => L0["creditammount"], set: async (v) => { L0["creditammount"] = v; }, local: true }, false)), "TransDate", (await $.wv([$t27], "TransDate", { get: async () => L0["transdate"], set: async (v) => { L0["transdate"] = v; }, local: true }, false)), "v_ParentID", (await $.wv([$t27], "ParentID", { get: async () => L0["parentid"], set: async (v) => { L0["parentid"] = v; }, local: true }, false))]], C)));
    }
  }
  return L0.result;
}, {"params": ["CommissionID", "DebitID", "CreditID", "DebitAmmount", "CreditAmmount", "TransDate", "ParentID"], "kind": "procedure", "ptypes": ["Longint", "Longint", "Longint", "Currency", "Currency", "TDateTime", "Integer"]});
  U.method("TTransactionDataModule", "ShowInfo", async function ShowInfo(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: undefined};
  await $.stmt((await $.call(C, "ShowDOAInfo", [(await $.mv((await $.v(C, "sboapiDataModule")), "SBSession"))])));
  return L0.result;
}, {"params": [], "kind": "procedure", "ptypes": []});
  U.method("TTransactionDataModule", "FullRefresh", async function FullRefresh(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: undefined, "i": 0};
  L0["c_err_message"] = " Table or View in Dataset \"%s\" does not exist! ";
  { const $t28 = $.sub((await $.v(C, "ComponentCount")), 1);
    L0["i"] = 0;
    let $t29 = true;
    for (;;) {
      if (!$t29) { L0["i"] = $.succ(L0["i"], 1); }
      $t29 = false;
      if (!($.ord(L0["i"]) <= $.ord($t28))) break;
      if ($.truthy(($.is_((await $.idx((await $.v(C, "Components")), [L0["i"]])), "TOracleDataSet")))) {
        try {
          await $.mcall((await $.idx((await $.v(C, "Components")), [L0["i"]])), "Close", []);
          await $.mcall((await $.idx((await $.v(C, "Components")), [L0["i"]])), "Open", []);
        } catch ($t30) {
          $.rethrowControl($t30);
          $.handled($t30);
          throw $.raise((await $.mcall((await $.v(C, "Exception")), "Create", [(await $.call(C, "Format", [L0["c_err_message"], [(await $.mv(((await $.idx((await $.v(C, "Components")), [L0["i"]]))), "Name"))]]))])));
        }
      }
      await $.tick();
    }
  }
  return L0.result;
}, {"params": [], "kind": "procedure", "ptypes": []});
  return U;
}
