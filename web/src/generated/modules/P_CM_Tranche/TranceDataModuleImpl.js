// Generated from TranceDataModuleImpl.pas by pas2js — do not edit by hand; regenerate instead.
/* eslint-disable */
// @ts-nocheck

export default function define($) {
  const U = $.unit("TranceDataModuleImpl", ["Windows", "Messages", "SysUtils", "Classes", "Graphics", "Controls", "Forms", "Dialogs", "Db", "OracleData", "Oracle", "sboapiDataModuleImpl"]);
  const C = [U];
  U.defClass("TTrancheDataModule", "TDataModule", {"creditinfo": {"name": "CreditInfo", "type": "TOracleDataSet"}, "datasrccreditinfo": {"name": "DataSrcCreditInfo", "type": "TDataSource"}, "trancheaccounts": {"name": "TrancheAccounts", "type": "TOracleDataSet"}, "datasrctrancheaccounts": {"name": "DataSrcTrancheAccounts", "type": "TDataSource"}, "creditinfoid": {"name": "CreditInfoID", "type": "TFloatField"}, "creditinfonumberofcredit": {"name": "CreditInfoNUMBEROFCREDIT", "type": "TWideStringField"}, "creditinfocreditlineamount": {"name": "CreditInfoCREDITLINEAMOUNT", "type": "TFloatField"}, "creditinfoname": {"name": "CreditInfoNAME", "type": "TWideStringField"}, "creditinfocurrency": {"name": "CreditInfoCURRENCY", "type": "TFloatField"}, "creditinfoboorowerid": {"name": "CreditInfoBOOROWERID", "type": "TFloatField"}, "custaccount": {"name": "CustAccount", "type": "TOracleDataSet"}, "custaccountbooroweraccid": {"name": "CustAccountBOOROWERACCID", "type": "TFloatField"}, "creditinfoval_name": {"name": "CreditInfoVAL_NAME", "type": "TWideStringField"}, "creditinfoobligation": {"name": "CreditInfoOBLIGATION", "type": "TFloatField"}, "cm_tranche": {"name": "CM_TRANCHE", "type": "TOraclePackage"}, "tranchesdata": {"name": "TranchesData", "type": "TOracleDataSet"}, "datasrctranches": {"name": "DataSrcTranches", "type": "TDataSource"}, "tranchesdataid": {"name": "TranchesDataID", "type": "TFloatField"}, "tranchesdatacreditid": {"name": "TranchesDataCREDITID", "type": "TFloatField"}, "tranchesdatatranchedate": {"name": "TranchesDataTRANCHEDATE", "type": "TDateTimeField"}, "tranchesdatatrancheamount": {"name": "TranchesDataTRANCHEAMOUNT", "type": "TFloatField"}, "datasourc": {"name": "DataSourc", "type": "TDataSource"}, "oracledataset_": {"name": "OracleDataSet_", "type": "TOracleDataSet"}, "active": {"name": "active", "type": "TOracleDataSet"}, "activecredittype": {"name": "activeCREDITTYPE", "type": "TFloatField"}, "oracledataset": {"name": "OracleDataSet", "type": "TOracleDataSet"}, "trancheaccountsaccid": {"name": "TrancheAccountsACCID", "type": "TFloatField"}, "trancheaccountskli_id": {"name": "TrancheAccountsKLI_ID", "type": "TFloatField"}, "trancheaccountsaccountnumber": {"name": "TrancheAccountsACCOUNTNUMBER", "type": "TWideStringField"}, "trancheaccountsaccountname": {"name": "TrancheAccountsACCOUNTNAME", "type": "TWideStringField"}, "oraclepackage1": {"name": "OraclePackage1", "type": "TOraclePackage"}, "ods_hesab": {"name": "ods_hesab", "type": "TOracleDataSet"}, "dsrc_hesab": {"name": "dsrc_hesab", "type": "TDataSource"}, "activecurrency": {"name": "activeCURRENCY", "type": "TFloatField"}, "activebranchid": {"name": "activeBRANCHID", "type": "TFloatField"}, "datasource1": {"name": "DataSource1", "type": "TDataSource"}, "oracledataset1": {"name": "OracleDataSet1", "type": "TOracleDataSet"}, "oracledataset1accid": {"name": "OracleDataSet1ACCID", "type": "TFloatField"}, "oracledataset1kli_id": {"name": "OracleDataSet1KLI_ID", "type": "TFloatField"}, "oracledataset1accountnumber": {"name": "OracleDataSet1ACCOUNTNUMBER", "type": "TWideStringField"}, "oracledataset1accountname": {"name": "OracleDataSet1ACCOUNTNAME", "type": "TWideStringField"}, "oracledataset1acc_no": {"name": "OracleDataSet1ACC_NO", "type": "TWideStringField"}, "activemehsulid": {"name": "activeMEHSULID", "type": "TFloatField"}, "ods_hesabaccid": {"name": "ods_hesabACCID", "type": "TFloatField"}, "ods_hesabkli_id": {"name": "ods_hesabKLI_ID", "type": "TFloatField"}, "ods_hesabaccountnumber": {"name": "ods_hesabACCOUNTNUMBER", "type": "TWideStringField"}, "ods_hesabaccountname": {"name": "ods_hesabACCOUNTNAME", "type": "TWideStringField"}, "ods_hesabacc_no": {"name": "ods_hesabACC_NO", "type": "TWideStringField"}}, {});
  U.init(async () => {
    U.var_("TrancheDataModule", null, "TTrancheDataModule");
  });
  U.method("TTrancheDataModule", "DataModuleCreate", async function DataModuleCreate(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mcall((await $.v(C, "OracleDataSet")), "Open", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TTrancheDataModule", "DataModuleDestroy", async function DataModuleDestroy(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mcall((await $.v(C, "OracleDataSet")), "closeall", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  return U;
}
