// Generated from InsDataModule.pas by pas2js — do not edit by hand; regenerate instead.
/* eslint-disable */
// @ts-nocheck

export default function define($) {
  const U = $.unit("InsDataModule", ["Windows", "Messages", "SysUtils", "Classes", "Graphics", "Controls", "Forms", "Dialogs", "Db", "OracleData", "Oracle", "sboapiDataModuleImpl", "InsCustomersFormImpl"]);
  const C = [U];
  U.defClass("TInsDataMod", "TDataModule", {"dsinscustomers": {"name": "DSInsCustomers", "type": "TDataSource"}, "odsinscustomers": {"name": "ODSInsCustomers", "type": "TOracleDataSet"}, "dscustomers": {"name": "DSCustomers", "type": "TDataSource"}, "odscustomers": {"name": "ODSCustomers", "type": "TOracleDataSet"}, "odscustomersid": {"name": "ODSCustomersID", "type": "TIntegerField"}, "odscustomersname": {"name": "ODSCustomersNAME", "type": "TStringField"}, "odsinscustomersid": {"name": "ODSInsCustomersID", "type": "TIntegerField"}, "odsinscustomerscust_id": {"name": "ODSInsCustomersCUST_ID", "type": "TIntegerField"}, "odsinscustomersname": {"name": "ODSInsCustomersNAME", "type": "TStringField"}, "odsinscustomerssurname": {"name": "ODSInsCustomersSURNAME", "type": "TStringField"}, "odsinscustomersfathername": {"name": "ODSInsCustomersFATHERNAME", "type": "TStringField"}, "odsinscustomershomephone": {"name": "ODSInsCustomersHOMEPHONE", "type": "TStringField"}, "odsinscustomersworkphone": {"name": "ODSInsCustomersWORKPHONE", "type": "TStringField"}, "odsinscustomersfax": {"name": "ODSInsCustomersFAX", "type": "TStringField"}, "odsinscustomersaddress": {"name": "ODSInsCustomersADDRESS", "type": "TStringField"}, "odsaccount": {"name": "ODSAccount", "type": "TOracleDataSet"}, "odsaccountid": {"name": "ODSAccountID", "type": "TFloatField"}, "odsaccountkli_id": {"name": "ODSAccountKLI_ID", "type": "TFloatField"}, "odsaccountop_id": {"name": "ODSAccountOP_ID", "type": "TFloatField"}, "odsaccountacc_no": {"name": "ODSAccountACC_NO", "type": "TStringField"}, "odsaccountval_acc": {"name": "ODSAccountVAL_ACC", "type": "TIntegerField"}, "odsaccountname": {"name": "ODSAccountNAME", "type": "TStringField"}, "odsaccountopen_dat": {"name": "ODSAccountOPEN_DAT", "type": "TDateTimeField"}, "odsaccountclose_dat": {"name": "ODSAccountCLOSE_DAT", "type": "TDateTimeField"}, "odsaccountstatus": {"name": "ODSAccountSTATUS", "type": "TFloatField"}, "odsaccountbal_cn1": {"name": "ODSAccountBAL_CN1", "type": "TFloatField"}, "odsaccountbal_cn2": {"name": "ODSAccountBAL_CN2", "type": "TFloatField"}, "odsaccountbal_cn3": {"name": "ODSAccountBAL_CN3", "type": "TFloatField"}, "odsaccountbal_cn4": {"name": "ODSAccountBAL_CN4", "type": "TFloatField"}, "odsaccountfilial": {"name": "ODSAccountFILIAL", "type": "TIntegerField"}, "odsaccountsim_otcet": {"name": "ODSAccountSIM_OTCET", "type": "TFloatField"}, "odsaccounttipacc": {"name": "ODSAccountTIPACC", "type": "TStringField"}, "odsaccountlimit": {"name": "ODSAccountLIMIT", "type": "TFloatField"}, "odsaccountold_acc_no": {"name": "ODSAccountOLD_ACC_NO", "type": "TStringField"}, "odsaccountpair_acc": {"name": "ODSAccountPAIR_ACC", "type": "TFloatField"}, "odsaccountinsider": {"name": "ODSAccountINSIDER", "type": "TStringField"}, "dsaccount": {"name": "DSAccount", "type": "TDataSource"}, "balacc": {"name": "BalAcc", "type": "TOracleDataSet"}, "balaccbal_cn": {"name": "BalAccBAL_CN", "type": "TStringField"}, "balaccbalname": {"name": "BalAccBALNAME", "type": "TStringField"}, "balaccdata": {"name": "BalAccData", "type": "TDataSource"}, "currency": {"name": "Currency", "type": "TOracleDataSet"}, "currencydata": {"name": "CurrencyData", "type": "TDataSource"}, "tenostat": {"name": "Tenostat", "type": "TOracleDataSet"}, "tenostatostat": {"name": "TenostatOSTAT", "type": "TFloatField"}, "tenostatpok_ostat": {"name": "TenostatPOK_OSTAT", "type": "TFloatField"}, "tenostatacc_id": {"name": "TenostatACC_ID", "type": "TFloatField"}, "datatenostat": {"name": "DataTenostat", "type": "TDataSource"}, "pairaccount": {"name": "PairAccount", "type": "TOracleDataSet"}, "pairaccountdata": {"name": "PairAccountData", "type": "TDataSource"}, "odsaccountval_name": {"name": "ODSAccountVAL_NAME", "type": "TStringField"}, "currencyvalute": {"name": "CurrencyVALUTE", "type": "TIntegerField"}, "currencyval_name": {"name": "CurrencyVAL_NAME", "type": "TStringField"}, "currencyvalu_name": {"name": "CurrencyVALU_NAME", "type": "TStringField"}, "currencyvalu_short": {"name": "CurrencyVALU_SHORT", "type": "TStringField"}, "odsaccountownid": {"name": "ODSAccountOWNID", "type": "TFloatField"}, "odscontracts": {"name": "ODSContracts", "type": "TOracleDataSet"}, "dscontracts": {"name": "DSContracts", "type": "TDataSource"}, "odsinsurances": {"name": "ODSInsurances", "type": "TOracleDataSet"}, "dsinsurances": {"name": "DSInsurances", "type": "TDataSource"}, "odsinsurancesid": {"name": "ODSInsurancesID", "type": "TIntegerField"}, "odsinsurancesname": {"name": "ODSInsurancesNAME", "type": "TStringField"}, "odsinsuranceschangeguid": {"name": "ODSInsurancesCHANGEGUID", "type": "TStringField"}, "opins": {"name": "OPINS", "type": "TOraclePackage"}, "odsinscustomersdateofbirth": {"name": "ODSInsCustomersDATEOFBIRTH", "type": "TDateTimeField"}, "odsinscustomersplaceofbirth": {"name": "ODSInsCustomersPLACEOFBIRTH", "type": "TStringField"}, "odsinscustomersage": {"name": "ODSInsCustomersAGE", "type": "TIntegerField"}, "odsinscustomerssex": {"name": "ODSInsCustomersSEX", "type": "TIntegerField"}, "odsinscustomerspasportno": {"name": "ODSInsCustomersPASPORTNO", "type": "TStringField"}, "odsinscustomersms_id": {"name": "ODSInsCustomersMS_ID", "type": "TIntegerField"}, "odsinscustomerscity": {"name": "ODSInsCustomersCITY", "type": "TStringField"}, "odsinscustomersindex_": {"name": "ODSInsCustomersINDEX_", "type": "TStringField"}, "odsinscustomersmailingaddress": {"name": "ODSInsCustomersMAILINGADDRESS", "type": "TStringField"}, "odsinscustomersocc_id": {"name": "ODSInsCustomersOCC_ID", "type": "TIntegerField"}, "odsinscustomersed_id": {"name": "ODSInsCustomersED_ID", "type": "TIntegerField"}, "odsinscustomersstate": {"name": "ODSInsCustomersSTATE", "type": "TStringField"}, "dsoccupations": {"name": "DSOccupations", "type": "TDataSource"}, "odsoccupations": {"name": "ODSOccupations", "type": "TOracleDataSet"}, "odseducations": {"name": "ODSEducations", "type": "TOracleDataSet"}, "dseducations": {"name": "DSEducations", "type": "TDataSource"}, "odsinscustomersact_id": {"name": "ODSInsCustomersACT_ID", "type": "TIntegerField"}, "odsinscustomerscontactperson": {"name": "ODSInsCustomersCONTACTPERSON", "type": "TStringField"}, "dsactivity": {"name": "DSActivity", "type": "TDataSource"}, "odsactivity": {"name": "ODSActivity", "type": "TOracleDataSet"}, "odscontractsid": {"name": "ODSContractsID", "type": "TFloatField"}, "odscontractskli_id": {"name": "ODSContractsKLI_ID", "type": "TFloatField"}, "odscontractsname": {"name": "ODSContractsNAME", "type": "TStringField"}, "odscontractsmainformguid": {"name": "ODSContractsMAINFORMGUID", "type": "TStringField"}, "odscontractschangeguid": {"name": "ODSContractsCHANGEGUID", "type": "TStringField"}, "odscontractssuggestionguid": {"name": "ODSContractsSUGGESTIONGUID", "type": "TStringField"}, "odscontractspolicyguid": {"name": "ODSContractsPOLICYGUID", "type": "TStringField"}, "odscontractstablename": {"name": "ODSContractsTABLENAME", "type": "TStringField"}, "odsacc_types": {"name": "ODSAcc_types", "type": "TOracleDataSet"}, "dsacc_types": {"name": "DSAcc_types", "type": "TDataSource"}, "odsbal_cn": {"name": "ODSBal_cn", "type": "TOracleDataSet"}, "dsbal_cn": {"name": "DSBal_cn", "type": "TDataSource"}, "odsacc_typesid": {"name": "ODSAcc_typesID", "type": "TFloatField"}, "odsacc_typesname": {"name": "ODSAcc_typesNAME", "type": "TStringField"}, "odsbal_cndict_id": {"name": "ODSBal_cnDICT_ID", "type": "TFloatField"}, "odsbal_cnbal_cn": {"name": "ODSBal_cnBAL_CN", "type": "TFloatField"}, "odsloanacclists": {"name": "ODSLoanAccLists", "type": "TOracleDataSet"}, "dsloanacclists": {"name": "DSLoanAccLists", "type": "TDataSource"}, "odscontractsloanacc_id": {"name": "ODSContractsLOANACC_ID", "type": "TFloatField"}, "odscontractscurracc_id": {"name": "ODSContractsCURRACC_ID", "type": "TFloatField"}, "odscurracclist": {"name": "ODSCurrAccList", "type": "TOracleDataSet"}, "dscurracclist": {"name": "DSCurrAccList", "type": "TDataSource"}, "odsloanacclistsid": {"name": "ODSLoanAccListsID", "type": "TFloatField"}, "odsloanacclistsacc_no": {"name": "ODSLoanAccListsACC_NO", "type": "TStringField"}, "odsloanacclistsbal_cn1": {"name": "ODSLoanAccListsBAL_CN1", "type": "TFloatField"}, "odscurracclistid": {"name": "ODSCurrAccListID", "type": "TFloatField"}, "odscurracclistacc_no": {"name": "ODSCurrAccListACC_NO", "type": "TStringField"}, "odscurracclistbal_cn1": {"name": "ODSCurrAccListBAL_CN1", "type": "TFloatField"}, "odscurracclistname": {"name": "ODSCurrAccListNAME", "type": "TStringField"}, "odsloanacclistsname": {"name": "ODSLoanAccListsNAME", "type": "TStringField"}, "opcommon": {"name": "OPCOMMON", "type": "TOraclePackage"}, "odscontractspolicy_num": {"name": "ODSContractsPOLICY_NUM", "type": "TStringField"}, "odscontractsins_date": {"name": "ODSContractsINS_DATE", "type": "TDateTimeField"}, "odscontractssuggestion": {"name": "ODSContractsSUGGESTION", "type": "TStringField"}, "odspayplan": {"name": "ODSPayPlan", "type": "TOracleDataSet"}, "dspayplan": {"name": "DSPayPlan", "type": "TDataSource"}, "odscontractsammount": {"name": "ODSContractsAMMOUNT", "type": "TFloatField"}, "odscontractsbegin_date": {"name": "ODSContractsBEGIN_DATE", "type": "TDateTimeField"}, "odscontractsend_date": {"name": "ODSContractsEND_DATE", "type": "TDateTimeField"}, "odsagents": {"name": "ODSAgents", "type": "TOracleDataSet"}, "dsagents": {"name": "DSAgents", "type": "TDataSource"}, "odsbeneficiary": {"name": "ODSBeneficiary", "type": "TOracleDataSet"}, "dsbeneficiary": {"name": "DSBeneficiary", "type": "TDataSource"}, "odsbeneficiaryid": {"name": "ODSBeneficiaryID", "type": "TFloatField"}, "odsbeneficiaryname": {"name": "ODSBeneficiaryNAME", "type": "TStringField"}, "odsbeneficiaryaddress": {"name": "ODSBeneficiaryADDRESS", "type": "TStringField"}, "odsbeneficiaryphone": {"name": "ODSBeneficiaryPHONE", "type": "TStringField"}, "odsbeneficiarybanking_details": {"name": "ODSBeneficiaryBANKING_DETAILS", "type": "TStringField"}, "odsagentsid": {"name": "ODSAgentsID", "type": "TFloatField"}, "odsagentsname": {"name": "ODSAgentsNAME", "type": "TStringField"}, "odsagentssurname": {"name": "ODSAgentsSURNAME", "type": "TStringField"}, "odsagentsfathername": {"name": "ODSAgentsFATHERNAME", "type": "TStringField"}, "odsinscustomerscontactpersonphone": {"name": "ODSInsCustomersCONTACTPERSONPHONE", "type": "TStringField"}, "odspayplanid": {"name": "ODSPayPlanID", "type": "TFloatField"}, "odspayplanpay_date": {"name": "ODSPayPlanPAY_DATE", "type": "TDateTimeField"}, "odspayplanammount": {"name": "ODSPayPlanAMMOUNT", "type": "TFloatField"}, "odspayplanstatus": {"name": "ODSPayPlanSTATUS", "type": "TIntegerField"}, "odspayplanins_id": {"name": "ODSPayPlanINS_ID", "type": "TFloatField"}, "odspayplanispayed": {"name": "ODSPayPlanISPAYED", "type": "TStringField"}, "odsstates": {"name": "ODSStates", "type": "TOracleDataSet"}, "odstariffs": {"name": "ODSTariffs", "type": "TOracleDataSet"}, "dsstates": {"name": "DSStates", "type": "TDataSource"}, "dstariffs": {"name": "DSTariffs", "type": "TDataSource"}, "odsbankm": {"name": "ODSBankm", "type": "TOracleDataSet"}, "dsbankm": {"name": "DSBankm", "type": "TDataSource"}, "odsbankmid": {"name": "ODSBankmID", "type": "TFloatField"}, "odsbankmkrno": {"name": "ODSBankmKRNO", "type": "TFloatField"}, "odsbankmname": {"name": "ODSBankmNAME", "type": "TStringField"}, "odsbankminn": {"name": "ODSBankmINN", "type": "TStringField"}, "odsbankmswift": {"name": "ODSBankmSWIFT", "type": "TStringField"}, "odsbankmsubkrno": {"name": "ODSBankmSUBKRNO", "type": "TStringField"}, "odsstatesid": {"name": "ODSStatesID", "type": "TFloatField"}, "odsstatesname": {"name": "ODSStatesNAME", "type": "TStringField"}, "odsaccountostat": {"name": "ODSAccountOSTAT", "type": "TFloatField"}, "odsaccountpok_ostat": {"name": "ODSAccountPOK_OSTAT", "type": "TFloatField"}, "odsbankmbankcode": {"name": "ODSBankmBANKCODE", "type": "TStringField"}, "sysdat": {"name": "Sysdat", "type": "TOracleDataSet"}, "sysdattek_dat": {"name": "SysdatTEK_DAT", "type": "TDateTimeField"}, "odstarifstates": {"name": "ODSTarifStates", "type": "TOracleDataSet"}, "odstarifstatesid": {"name": "ODSTarifStatesID", "type": "TFloatField"}, "odstarifstatesbank_id": {"name": "ODSTarifStatesBANK_ID", "type": "TFloatField"}, "odstarifstatesstate_id": {"name": "ODSTarifStatesSTATE_ID", "type": "TFloatField"}, "dstarifstates": {"name": "DSTarifStates", "type": "TDataSource"}, "odsreportsymbols": {"name": "ODSReportSymbols", "type": "TOracleDataSet"}, "dsreportsymbols": {"name": "DSReportSymbols", "type": "TDataSource"}, "odsmonths": {"name": "ODSMonths", "type": "TOracleDataSet"}, "dsmonths": {"name": "DSMonths", "type": "TDataSource"}, "odsfranshiza": {"name": "ODSFranshiza", "type": "TOracleDataSet"}, "dsfranshiza": {"name": "DSFranshiza", "type": "TDataSource"}, "odsfranshizaid": {"name": "ODSFranshizaID", "type": "TFloatField"}, "odsfranshizamonth_id": {"name": "ODSFranshizaMONTH_ID", "type": "TFloatField"}, "odsfranshizaammount": {"name": "ODSFranshizaAMMOUNT", "type": "TFloatField"}, "odstariffsid": {"name": "ODSTariffsID", "type": "TFloatField"}, "odstariffsfranshiz_id": {"name": "ODSTariffsFRANSHIZ_ID", "type": "TFloatField"}, "odstariffsammount": {"name": "ODSTariffsAMMOUNT", "type": "TFloatField"}, "odsmonthsid": {"name": "ODSMonthsID", "type": "TFloatField"}, "odsmonthsrelease_id": {"name": "ODSMonthsRELEASE_ID", "type": "TFloatField"}, "odsmonthscount": {"name": "ODSMonthsCOUNT", "type": "TFloatField"}, "odstarifstatesstates": {"name": "ODSTarifStatesStates", "type": "TStringField"}, "odsbranches": {"name": "ODSBranches", "type": "TOracleDataSet"}, "odsbranchesid": {"name": "ODSBranchesID", "type": "TFloatField"}, "odsbranchesname": {"name": "ODSBranchesNAME", "type": "TStringField"}, "dsbranches": {"name": "DSBranches", "type": "TDataSource"}, "odsinscustomersclose_prefix": {"name": "ODSInsCustomersCLOSE_PREFIX", "type": "TIntegerField"}, "odscontractsval_name": {"name": "ODSContractsVAL_NAME", "type": "TStringField"}, "odscontractsinssumm": {"name": "ODSContractsINSSUMM", "type": "TFloatField"}, "odscontractstariff": {"name": "ODSContractsTARIFF", "type": "TFloatField"}, "odscontractsfranshiz": {"name": "ODSContractsFRANSHIZ", "type": "TFloatField"}, "odscontractsstate": {"name": "ODSContractsSTATE", "type": "TIntegerField"}, "odscontractstype_id": {"name": "ODSContractsTYPE_ID", "type": "TFloatField"}, "odsinscustomersinsured_typeid": {"name": "ODSInsCustomersINSURED_TYPEID", "type": "TIntegerField"}, "odsinsurancesloan_bal_cn": {"name": "ODSInsurancesLOAN_BAL_CN", "type": "TFloatField"}, "odsinsurancescurr_bal_cn": {"name": "ODSInsurancesCURR_BAL_CN", "type": "TFloatField"}, "odsreleasedate": {"name": "ODSReleaseDate", "type": "TOracleDataSet"}, "floatfield1": {"name": "FloatField1", "type": "TFloatField"}, "datetimefield1": {"name": "DateTimeField1", "type": "TDateTimeField"}, "datetimefield2": {"name": "DateTimeField2", "type": "TDateTimeField"}, "floatfield2": {"name": "FloatField2", "type": "TFloatField"}, "dsreleasedate": {"name": "DSReleaseDate", "type": "TDataSource"}, "odsreportsymbolsid": {"name": "ODSReportSymbolsID", "type": "TFloatField"}, "odsreportsymbolsname": {"name": "ODSReportSymbolsNAME", "type": "TStringField"}, "dscusttypes": {"name": "DSCustTypes", "type": "TDataSource"}, "odscusttypes": {"name": "ODSCustTypes", "type": "TOracleDataSet"}, "odspolicynums": {"name": "ODSPolicyNums", "type": "TOracleDataSet"}, "dspolicynums": {"name": "DSPolicyNums", "type": "TDataSource"}, "odscusttypesname": {"name": "ODSCustTypesNAME", "type": "TStringField"}, "odsinsurancesprofit_acc_id": {"name": "ODSInsurancesPROFIT_ACC_ID", "type": "TFloatField"}, "odsacclist": {"name": "ODSAccList", "type": "TOracleDataSet"}, "dsacclist": {"name": "DSAccList", "type": "TDataSource"}, "odsinsurancesacc_list": {"name": "ODSInsurancesAcc_list", "type": "TStringField"}, "odspolicynumsid": {"name": "ODSPolicyNumsID", "type": "TIntegerField"}, "odspolicynumsname": {"name": "ODSPolicyNumsNAME", "type": "TStringField"}, "odspolicynumstypeid": {"name": "ODSPolicyNumsTYPEID", "type": "TFloatField"}, "odspolicynumscounts": {"name": "ODSPolicyNumsCOUNTS", "type": "TFloatField"}, "odspolicynumsformat": {"name": "ODSPolicyNumsFORMAT", "type": "TStringField"}, "odspolicynumsprefix": {"name": "ODSPolicyNumsPREFIX", "type": "TStringField"}, "odscusttypesid": {"name": "ODSCustTypesID", "type": "TFloatField"}, "odsinscustomersmobilephone": {"name": "ODSInsCustomersMOBILEPHONE", "type": "TStringField"}, "odspolicynumsicounts": {"name": "ODSPolicyNumsICOUNTS", "type": "TFloatField"}, "odspolicynumsccounts": {"name": "ODSPolicyNumsCCOUNTS", "type": "TFloatField"}}, {});
  U.init(async () => {
    U.const("Condition", "and ic.KLI_ID = :KLI_ID ");
    U.const("ContractsSQL", $.add($.add($.add($.add($.add($.add($.add($.add($.add(" SELECT ic.rowid, ic.ID , ic.kli_id, ic.loanacc_id, ic.curracc_id,", " ii.NAME, ii.mainformguid, ii.changeguid,"), " ii.suggestionguid, ii.policyguid, ii.mainformname AS tablename, ic.policy_num,"), " trunc(ic.ins_date) as ins_date, ic.begin_date, ic.end_date, "), " av.val_name, ic.inssumm, ic.tariff, ic.ammount, ic.franshiz, ic.state, ic.type_id "), " FROM ins_contracts ic, ins_insurances ii, avalute av"), " WHERE ii.ID = ic.type_id"), " %s"), " and close_prefix=0"), " and ic.valute_id = av.valute(+) "));
    U.var_("InsDataMod", null, "TInsDataMod");
    U.var_("ContractsFullForm", true, "Boolean");
  });
  U.method("TInsDataMod", "SetFullForm", async function SetFullForm(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: undefined, "fid": 0};
  {
    const $t1 = (await $.v(C, "InsCustomersForm"));
    await $.mset((await $.wv([$t1], "gbCustomers", C, false)), "Visible", (await $.wv([$t1], "False", C, false)));
  }
  {
    const $t2 = (await $.v(C, "ODSContracts"));
    await $.wset([$t2], "fid", (await $.mv((await $.wcall([$t2], "FieldByName", ["id"], C)), "asInteger")), { get: async () => L0["fid"], set: async (v) => { L0["fid"] = v; }, local: true });
    await $.stmt($.wcall([$t2], "close", [], C));
    await $.stmt($.wcall([$t2], "DeleteVariables", [], C));
    await $.mset((await $.wv([$t2], "SQL", C, false)), "Text", (await $.wcall([$t2], "format", [(await $.wv([$t2], "ContractsSQL", C, false)), [" "]], C)));
    await $.stmt($.wcall([$t2], "Open", [], C));
    await $.stmt((await $.wcall([$t2], "Locate", ["ID", (await $.wv([$t2], "fid", { get: async () => L0["fid"], set: async (v) => { L0["fid"] = v; }, local: true }, false)), []], C)));
  }
  await $.set(C, "ContractsFullForm", true);
  return L0.result;
}, {"params": [], "kind": "procedure", "ptypes": []});
  U.method("TInsDataMod", "UnSetFullForm", async function UnSetFullForm(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: undefined, "fid": 0};
  {
    const $t3 = (await $.v(C, "InsCustomersForm"));
    await $.mset((await $.wv([$t3], "gbCustomers", C, false)), "Visible", (await $.wv([$t3], "True", C, false)));
  }
  {
    const $t4 = (await $.v(C, "ODSContracts"));
    await $.stmt((await $.mcall((await $.wv([$t4], "ODSInsCustomers", C, false)), "Locate", ["ID", (await $.mv((await $.wcall([$t4], "FieldByName", ["KLI_ID"], C)), "asInteger")), []])));
    await $.wset([$t4], "fid", (await $.mv((await $.wcall([$t4], "FieldByName", ["id"], C)), "asInteger")), { get: async () => L0["fid"], set: async (v) => { L0["fid"] = v; }, local: true });
    await $.stmt($.wcall([$t4], "close", [], C));
    await $.mset((await $.wv([$t4], "SQL", C, false)), "Text", (await $.wcall([$t4], "format", [(await $.wv([$t4], "ContractsSQL", C, false)), [(await $.wv([$t4], "Condition", C, false))]], C)));
    await $.stmt((await $.wcall([$t4], "DeclareVariable", ["KLI_ID", (await $.wv([$t4], "otInteger", C, false))], C)));
    await $.stmt((await $.wcall([$t4], "SetVariable", ["KLI_ID", (await $.mv((await $.mcall((await $.wv([$t4], "ODSInsCustomers", C, false)), "FieldByName", ["id"])), "asFloat"))], C)));
    await $.stmt($.wcall([$t4], "Open", [], C));
    await $.stmt((await $.wcall([$t4], "Locate", ["ID", (await $.wv([$t4], "fid", { get: async () => L0["fid"], set: async (v) => { L0["fid"] = v; }, local: true }, false)), []], C)));
  }
  await $.set(C, "ContractsFullForm", false);
  return L0.result;
}, {"params": [], "kind": "procedure", "ptypes": []});
  U.method("TInsDataMod", "ODSCustomersAfterFetchRecord", async function ODSCustomersAfterFetchRecord(Self, p0, p1, p2) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "filteraccept": $.copyArg(p1), "action": $.asRef(p2), result: undefined};
  await $.fixArgs(L0, ["sender", "filteraccept"]);
  L0["fetchreclimit"] = 50;
  {
    const $t5 = L0["sender"];
    if ($.truthy($.eq((await $.wv([$t5], "RecordCount", C, false)), (await $.wv([$t5], "FetchRecLimit", { get: async () => L0["fetchreclimit"], set: async (v) => { L0["fetchreclimit"] = v; }, local: true }, false))))) {
      await $.wset([$t5], "Action", (await $.wv([$t5], "afPause", C, false)), { get: async () => await L0["action"].get(), set: async (v) => { await L0["action"].set(v); }, local: true });
    }
  }
  return L0.result;
}, {"params": ["Sender", "FilterAccept", "Action"], "kind": "procedure", "ptypes": ["TOracleDataSet", "Boolean", "TAfterFetchRecordAction"]});
  U.method("TInsDataMod", "ODSInsCustomersBeforeDelete", async function ODSInsCustomersBeforeDelete(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"dataset": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["dataset"]);
  if ($.truthy($.eq((await $.call(C, "MessageDlg", ["Secilmish anket pozulacaq", (await $.v(C, "mtWarning")), [(await $.v(C, "mbYes")), (await $.v(C, "mbCancel"))], 0])), (await $.v(C, "mrCancel"))))) {
    $.abort();
  }
  return L0.result;
}, {"params": ["DataSet"], "kind": "procedure", "ptypes": ["TDataSet"]});
  U.method("TInsDataMod", "ODSAccountCalcFields", async function ODSAccountCalcFields(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"dataset": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["dataset"]);
  await $.stmt((await $.mcall((await $.v(C, "Currency")), "Locate", ["VALUTE", (await $.mv((await $.v(C, "ODSAccountVAL_ACC")), "value")), []])));
  await $.mset((await $.v(C, "ODSAccountVAL_NAME")), "Value", (await $.mv((await $.v(C, "CurrencyVAL_NAME")), "Value")));
  return L0.result;
}, {"params": ["DataSet"], "kind": "procedure", "ptypes": ["TDataSet"]});
  U.method("TInsDataMod", "DataModuleCreate", async function DataModuleCreate(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mcall((await $.v(C, "Currency")), "Open", []);
  await $.mcall((await $.v(C, "ODSAccount")), "Open", []);
  await $.mcall((await $.v(C, "BalAcc")), "Open", []);
  await $.mcall((await $.v(C, "PairAccount")), "Open", []);
  await $.mcall((await $.v(C, "ODSInsurances")), "Open", []);
  await $.mcall((await $.v(C, "Tenostat")), "Open", []);
  await $.mcall((await $.v(C, "ODSInsCustomers")), "Open", []);
  await $.mcall((await $.v(C, "ODSCustomers")), "Open", []);
  await $.mcall((await $.v(C, "ODSOccupations")), "Open", []);
  await $.mcall((await $.v(C, "ODSActivity")), "Open", []);
  await $.mcall((await $.v(C, "ODSEducations")), "open", []);
  await $.mcall((await $.v(C, "ODSCustTypes")), "Open", []);
  await $.stmt($.call(C, "UnSetFullForm", []));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TInsDataMod", "ODSAccountAfterFetchRecord", async function ODSAccountAfterFetchRecord(Self, p0, p1, p2) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "filteraccept": $.copyArg(p1), "action": $.asRef(p2), result: undefined};
  await $.fixArgs(L0, ["sender", "filteraccept"]);
  if ($.truthy($.eq((await $.mv(L0["sender"], "RecordCount")), 50))) {
    await L0["action"].set((await $.v(C, "afPause")));
  }
  return L0.result;
}, {"params": ["Sender", "FilterAccept", "Action"], "kind": "procedure", "ptypes": ["TOracleDataSet", "Boolean", "TAfterFetchRecordAction"]});
  U.method("TInsDataMod", "GetSysDate", async function GetSysDate(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: 0};
  if ($.truthy((await $.call(C, "Assigned", [(await $.v(C, "sboapiDataModule"))])))) {
    {
      const $t6 = (await $.v(C, "sboapiDataModule"));
      await $.wset([$t6], "Result", (await $.mcall((await $.wv([$t6], "SBOperationDay", C, false)), "CallDateFunction", ["get_date", []])), { get: async () => L0["result"], set: async (v) => { L0["result"] = v; }, local: true });
    }
  }
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TInsDataMod", "ODSAccountBeforeDelete", async function ODSAccountBeforeDelete(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"dataset": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["dataset"]);
  if ($.truthy($.eq((await $.call(C, "MessageDlg", ["Secilmish anket pozulacaq", (await $.v(C, "mtWarning")), [(await $.v(C, "mbYes")), (await $.v(C, "mbCancel"))], 0])), (await $.v(C, "mrCancel"))))) {
    $.abort();
  }
  return L0.result;
}, {"params": ["DataSet"], "kind": "procedure", "ptypes": ["TDataSet"]});
  U.method("TInsDataMod", "RefreshAll", async function RefreshAll(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: undefined};
  await $.mset((await $.v(C, "screen")), "Cursor", (await $.v(C, "crHourGlass")));
  try {
    await $.mcall((await $.v(C, "ODSInsCustomers")), "Refresh", []);
    await $.mcall((await $.v(C, "ODSCustomers")), "Refresh", []);
    await $.mcall((await $.v(C, "BalAcc")), "Refresh", []);
    await $.mcall((await $.v(C, "Currency")), "Refresh", []);
    await $.mcall((await $.v(C, "Tenostat")), "Refresh", []);
    await $.mcall((await $.v(C, "PairAccount")), "Refresh", []);
    await $.mcall((await $.v(C, "ODSAccount")), "Refresh", []);
    await $.mcall((await $.v(C, "ODSInsurances")), "Refresh", []);
    await $.mcall((await $.v(C, "ODSOccupations")), "Refresh", []);
    await $.mcall((await $.v(C, "ODSEducations")), "Refresh", []);
  } finally {
    await $.mset((await $.v(C, "Screen")), "Cursor", (await $.v(C, "crDefault")));
  }
  return L0.result;
}, {"params": [], "kind": "procedure", "ptypes": []});
  U.method("TInsDataMod", "ODSInsCustomersAfterScroll", async function ODSInsCustomersAfterScroll(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"dataset": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["dataset"]);
  if ($.truthy((await $.v(C, "ContractsFullForm")))) {
    return L0.result;
  }
  {
    const $t7 = (await $.v(C, "ODSContracts"));
    await $.stmt($.wcall([$t7], "Close", [], C));
    await $.stmt((await $.wcall([$t7], "SetVariable", ["kli_id", (await $.mv((await $.mcall((await $.wv([$t7], "Dataset", { get: async () => L0["dataset"], set: async (v) => { L0["dataset"] = v; }, local: true }, false)), "FieldByName", ["id"])), "asFloat"))], C)));
    await $.stmt($.wcall([$t7], "Open", [], C));
  }
  return L0.result;
}, {"params": ["DataSet"], "kind": "procedure", "ptypes": ["TDataSet"]});
  U.method("TInsDataMod", "RefreshContractRec", async function RefreshContractRec(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: undefined};
  {
    const $t8 = (await $.v(C, "ODSContracts"));
    await $.stmt($.wcall([$t8], "RefreshRecord", [], C));
  }
  return L0.result;
}, {"params": [], "kind": "procedure", "ptypes": []});
  U.method("TInsDataMod", "CloseOpenContracts", async function CloseOpenContracts(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: undefined};
  {
    const $t9 = (await $.v(C, "ODSContracts"));
    await $.stmt($.wcall([$t9], "Close", [], C));
    await $.stmt($.wcall([$t9], "Open", [], C));
  }
  return L0.result;
}, {"params": [], "kind": "procedure", "ptypes": []});
  U.method("TInsDataMod", "RefreshContracts", async function RefreshContracts(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: undefined};
  {
    const $t10 = (await $.v(C, "ODSContracts"));
    await $.stmt($.wcall([$t10], "Refresh", [], C));
  }
  return L0.result;
}, {"params": [], "kind": "procedure", "ptypes": []});
  U.method("TInsDataMod", "ODSContractsAfterScroll", async function ODSContractsAfterScroll(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"dataset": $.copyArg(p0), result: undefined, "img": null};
  await $.fixArgs(L0, ["dataset"]);
  {
    const $t11 = (await $.v(C, "ODSAccount"));
    await $.stmt($.wcall([$t11], "Close", [], C));
    await $.stmt((await $.wcall([$t11], "SetVariable", ["ownid", (await $.mv((await $.mcall((await $.wv([$t11], "Dataset", { get: async () => L0["dataset"], set: async (v) => { L0["dataset"] = v; }, local: true }, false)), "FieldByName", ["id"])), "asFloat"))], C)));
    await $.stmt($.wcall([$t11], "Open", [], C));
  }
  {
    const $t12 = (await $.v(C, "ODSContracts"));
    await $.mset((await $.mv((await $.wv([$t12], "InsCustomersForm", C, false)), "aCommit")), "Enabled", ($.in_((await $.mv((await $.wcall([$t12], "FieldByName", ["state"], C)), "asInteger")), [0, 2, 4])));
  }
  return L0.result;
}, {"params": ["DataSet"], "kind": "procedure", "ptypes": ["TDataSet"]});
  U.method("TInsDataMod", "ODSBal_cnBeforeInsert", async function ODSBal_cnBeforeInsert(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"dataset": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["dataset"]);
  {
    const $t13 = (await $.v(C, "InsDataMod"));
    if ($.truthy($.in_((await $.mv((await $.wv([$t13], "ODSAcc_types", C, false)), "State")), [(await $.wv([$t13], "dsEdit", C, false)), (await $.wv([$t13], "dsInsert", C, false))]))) {
      await $.mcall((await $.wv([$t13], "ODSAcc_types", C, false)), "Post", []);
      await $.mcall((await $.wv([$t13], "ODSAcc_types", C, false)), "RefreshRecord", []);
    }
  }
  return L0.result;
}, {"params": ["DataSet"], "kind": "procedure", "ptypes": ["TDataSet"]});
  U.method("TInsDataMod", "ODSContractsCalcFields", async function ODSContractsCalcFields(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"dataset": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["dataset"]);
  return L0.result;
}, {"params": ["DataSet"], "kind": "procedure", "ptypes": ["TDataSet"]});
  U.method("TInsDataMod", "ODSPayPlanCalcFields", async function ODSPayPlanCalcFields(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"dataset": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["dataset"]);
  {
    const $t14 = L0["dataset"];
    if ($.truthy($.gt((await $.mv((await $.wcall([$t14], "FieldByName", ["STATUS"], C)), "asInteger")), 0))) {
      await $.mset((await $.wcall([$t14], "FieldByName", ["ISPAYED"], C)), "asString", "Ödənilib");
    } else {
      await $.mset((await $.wcall([$t14], "FieldByName", ["ISPAYED"], C)), "asString", "---------");
    }
  }
  return L0.result;
}, {"params": ["DataSet"], "kind": "procedure", "ptypes": ["TDataSet"]});
  U.method("TInsDataMod", "SaveData", async function SaveData(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: undefined};
  {
    const $t15 = (await $.v(C, "sboapiDataModule"));
    await $.mcall((await $.wv([$t15], "SBSession", C, false)), "Commit", []);
  }
  return L0.result;
}, {"params": [], "kind": "procedure", "ptypes": []});
  U.method("TInsDataMod", "RedoData", async function RedoData(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: undefined};
  {
    const $t16 = (await $.v(C, "sboapiDataModule"));
    await $.mcall((await $.wv([$t16], "SBSession", C, false)), "Rollback", []);
  }
  return L0.result;
}, {"params": [], "kind": "procedure", "ptypes": []});
  U.method("TInsDataMod", "ODSTariffsAfterPost", async function ODSTariffsAfterPost(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"dataset": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["dataset"]);
  await $.mcall(L0["dataset"], "RefreshRecord", []);
  return L0.result;
}, {"params": ["DataSet"], "kind": "procedure", "ptypes": ["TDataSet"]});
  U.method("TInsDataMod", "ODSBeneficiaryBeforeDelete", async function ODSBeneficiaryBeforeDelete(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"dataset": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["dataset"]);
  if ($.truthy($.eq((await $.mv((await $.mcall((L0["dataset"]), "FieldByName", ["ID"])), "AsFloat")), (-(1))))) {
    await $.stmt((await $.call(C, "MessageDlg", ["Bu yazini pozmaq qadagandir!", (await $.v(C, "mtConfirmation")), [(await $.v(C, "mbOK"))], 0])));
  }
  return L0.result;
}, {"params": ["DataSet"], "kind": "procedure", "ptypes": ["TDataSet"]});
  return U;
}
