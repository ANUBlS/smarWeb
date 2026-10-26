// Generated from DMIns_ReinsReceiveImpl.pas by pas2js — do not edit by hand; regenerate instead.
/* eslint-disable */
// @ts-nocheck

export default function define($) {
  const U = $.unit("DMIns_ReinsReceiveImpl", ["SysUtils", "Classes", "DB", "OracleData", "Oracle", "sboapiDataModuleImpl", "CommanParametrs"]);
  const C = [U];
  U.defClass("TDMIns_ReinsReceive", "TDataModule", {"dsmain": {"name": "DSMain", "type": "TOracleDataSet"}, "dsrmain": {"name": "DSRMain", "type": "TDataSource"}, "dsins_cust": {"name": "DSIns_cust", "type": "TOracleDataSet"}, "dsins_custid": {"name": "DSIns_custID", "type": "TIntegerField"}, "dsins_custname1": {"name": "DSIns_custNAME1", "type": "TWideStringField"}, "dscutomers": {"name": "DScutomers", "type": "TOracleDataSet"}, "dscutomersid": {"name": "DScutomersID", "type": "TIntegerField"}, "dscutomersname": {"name": "DScutomersNAME", "type": "TWideStringField"}, "dsins_agents": {"name": "DSins_agents", "type": "TOracleDataSet"}, "dsins_agentsid": {"name": "DSins_agentsID", "type": "TFloatField"}, "dsins_agentsname": {"name": "DSins_agentsNAME", "type": "TWideStringField"}, "dsrins_cust": {"name": "DSRIns_cust", "type": "TDataSource"}, "dsrcutomers": {"name": "DSRcutomers", "type": "TDataSource"}, "dsrins_agents": {"name": "DSRins_agents", "type": "TDataSource"}, "dsmainid": {"name": "DSMainID", "type": "TFloatField"}, "dsmaintype_id": {"name": "DSMainTYPE_ID", "type": "TFloatField"}, "dsmainbegin_date": {"name": "DSMainBEGIN_DATE", "type": "TDateTimeField"}, "dsmainend_date": {"name": "DSMainEND_DATE", "type": "TDateTimeField"}, "dsmainammount": {"name": "DSMainAMMOUNT", "type": "TFloatField"}, "dsmainpolicy_num": {"name": "DSMainPOLICY_NUM", "type": "TWideStringField"}, "dsmaininssumm": {"name": "DSMainINSSUMM", "type": "TFloatField"}, "dsmainfranshiz": {"name": "DSMainFRANSHIZ", "type": "TFloatField"}, "dsmainreins": {"name": "DSMainREINS", "type": "TFloatField"}, "dsmainins_type": {"name": "DSMainINS_TYPE", "type": "TFloatField"}, "dsmaincustid": {"name": "DSMainCUSTID", "type": "TFloatField"}, "dsmainreins_part_komis": {"name": "DSMainREINS_PART_KOMIS", "type": "TFloatField"}, "dsmainreins_ammount": {"name": "DSMainREINS_AMMOUNT", "type": "TFloatField"}, "dsmainreins_bruto_ammount": {"name": "DSMainREINS_BRUTO_AMMOUNT", "type": "TFloatField"}, "dsmainins__pred_ammount": {"name": "DSMainINS__PRED_AMMOUNT", "type": "TFloatField"}, "dsmainins_id": {"name": "DSMainINS_ID", "type": "TFloatField"}, "dsmainins_ammount": {"name": "DSMainINS_AMMOUNT", "type": "TFloatField"}, "dsmainins_pred_info": {"name": "DSMainINS_PRED_INFO", "type": "TWideStringField"}, "dsmaincid": {"name": "DSMainCID", "type": "TFloatField"}, "dsmainname2": {"name": "DSMainNAME2", "type": "TWideStringField"}, "dsmainstate": {"name": "DSMainSTATE", "type": "TIntegerField"}, "sb_aca": {"name": "sb_aca", "type": "TOraclePackage"}, "opcommon": {"name": "OPCOMMON", "type": "TOraclePackage"}, "odsaccount": {"name": "ODSAccount", "type": "TOracleDataSet"}, "odsaccountid": {"name": "ODSAccountID", "type": "TFloatField"}, "odsaccountkli_id": {"name": "ODSAccountKLI_ID", "type": "TFloatField"}, "odsaccountop_id": {"name": "ODSAccountOP_ID", "type": "TFloatField"}, "odsaccountacc_no": {"name": "ODSAccountACC_NO", "type": "TWideStringField"}, "odsaccountval_acc": {"name": "ODSAccountVAL_ACC", "type": "TIntegerField"}, "odsaccountname": {"name": "ODSAccountNAME", "type": "TWideStringField"}, "odsaccountopen_dat": {"name": "ODSAccountOPEN_DAT", "type": "TDateTimeField"}, "odsaccountclose_dat": {"name": "ODSAccountCLOSE_DAT", "type": "TDateTimeField"}, "odsaccountstatus": {"name": "ODSAccountSTATUS", "type": "TFloatField"}, "odsaccountbal_cn1": {"name": "ODSAccountBAL_CN1", "type": "TFloatField"}, "odsaccountbal_cn2": {"name": "ODSAccountBAL_CN2", "type": "TFloatField"}, "odsaccountbal_cn3": {"name": "ODSAccountBAL_CN3", "type": "TFloatField"}, "odsaccountbal_cn4": {"name": "ODSAccountBAL_CN4", "type": "TFloatField"}, "odsaccountfilial": {"name": "ODSAccountFILIAL", "type": "TIntegerField"}, "odsaccountsim_otcet": {"name": "ODSAccountSIM_OTCET", "type": "TFloatField"}, "odsaccounttipacc": {"name": "ODSAccountTIPACC", "type": "TWideStringField"}, "odsaccountlimit": {"name": "ODSAccountLIMIT", "type": "TFloatField"}, "odsaccountold_acc_no": {"name": "ODSAccountOLD_ACC_NO", "type": "TWideStringField"}, "odsaccountpair_acc": {"name": "ODSAccountPAIR_ACC", "type": "TFloatField"}, "odsaccountinsider": {"name": "ODSAccountINSIDER", "type": "TWideStringField"}, "odsaccountval_name": {"name": "ODSAccountVAL_NAME", "type": "TWideStringField"}, "odsaccountownid": {"name": "ODSAccountOWNID", "type": "TFloatField"}, "odsaccountostat": {"name": "ODSAccountOSTAT", "type": "TFloatField"}, "odsaccountpok_ostat": {"name": "ODSAccountPOK_OSTAT", "type": "TFloatField"}, "dsmaincust_name": {"name": "DSMainCUST_NAME", "type": "TWideStringField"}, "dsmainsigorta_novu": {"name": "DSMainSIGORTA_NOVU", "type": "TWideStringField"}, "dsins_type": {"name": "dsins_type", "type": "TOracleDataSet"}, "drsins_type": {"name": "drsins_type", "type": "TDataSource"}, "dsins_typename": {"name": "dsins_typeNAME", "type": "TWideStringField"}, "dsins_typeid": {"name": "dsins_typeID", "type": "TIntegerField"}, "dsreins": {"name": "DSReins", "type": "TOracleDataSet"}, "dsreinssay": {"name": "DSReinsSAY", "type": "TFloatField"}, "dspaymentsettinginfo": {"name": "DSPaymentSettingInfo", "type": "TOracleDataSet"}, "dspaymentsettinginfosay": {"name": "DSPaymentSettingInfoSAY", "type": "TFloatField"}, "dspaymentinfo": {"name": "DSPaymentInfo", "type": "TOracleDataSet"}, "dspaymentinfosay": {"name": "DSPaymentInfoSAY", "type": "TFloatField"}, "dspaymentsetting": {"name": "DSPaymentsetting", "type": "TOracleDataSet"}, "dspaymentsettingid": {"name": "DSPaymentsettingID", "type": "TFloatField"}, "dspaymentsettingcid": {"name": "DSPaymentsettingCID", "type": "TFloatField"}, "dspaymentsettingpayment_type": {"name": "DSPaymentsettingPAYMENT_TYPE", "type": "TFloatField"}, "dspaymentsettingpercent": {"name": "DSPaymentsettingPERCENT", "type": "TFloatField"}, "dspaymentsettingpercent_f": {"name": "DSPaymentsettingPERCENT_F", "type": "TFloatField"}, "dspaymentsettingpercent_m": {"name": "DSPaymentsettingPERCENT_M", "type": "TFloatField"}, "dspaymentsettingop_id": {"name": "DSPaymentsettingOP_ID", "type": "TFloatField"}, "dspaymentsettingammount_f": {"name": "DSPaymentsettingAMMOUNT_F", "type": "TFloatField"}, "dspaymentsettingammount_m": {"name": "DSPaymentsettingAMMOUNT_M", "type": "TFloatField"}, "dspaymentsettingammount": {"name": "DSPaymentsettingAMMOUNT", "type": "TFloatField"}, "dsoperkurs": {"name": "DSOperkurs", "type": "TOracleDataSet"}, "dsmainvalute_id": {"name": "DSMainVALUTE_ID", "type": "TFloatField"}, "dsmainins_date": {"name": "DSMainINS_DATE", "type": "TDateTimeField"}, "dsmaininfo_id": {"name": "DSMainINFO_ID", "type": "TFloatField"}}, {});
  U.init(async () => {
    U.var_("DMIns_ReinsReceive", null, "TDMIns_ReinsReceive");
  });
  U.method("TDMIns_ReinsReceive", "DataModuleCreate", async function DataModuleCreate(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mcall((await $.v(C, "DSReins")), "Open", []);
  await $.mcall((await $.v(C, "dsins_type")), "Open", []);
  await $.mcall((await $.v(C, "DSMain")), "Open", []);
  await $.mcall((await $.v(C, "DSIns_cust")), "Open", []);
  await $.mcall((await $.v(C, "DScutomers")), "Open", []);
  await $.mcall((await $.v(C, "DSins_agents")), "Open", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TDMIns_ReinsReceive", "DataModuleDestroy", async function DataModuleDestroy(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mcall((await $.v(C, "DSReins")), "Close", []);
  await $.mcall((await $.v(C, "dsins_type")), "close", []);
  await $.mcall((await $.v(C, "DSMain")), "close", []);
  await $.mcall((await $.v(C, "DSIns_cust")), "close", []);
  await $.mcall((await $.v(C, "DScutomers")), "close", []);
  await $.mcall((await $.v(C, "DSins_agents")), "close", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TDMIns_ReinsReceive", "DSMainAfterInsert", async function DSMainAfterInsert(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"dataset": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["dataset"]);
  await $.mcall((await $.v(C, "DSMain")), "Refresh", []);
  return L0.result;
}, {"params": ["DataSet"], "kind": "procedure", "ptypes": ["TDataSet"]});
  return U;
}
