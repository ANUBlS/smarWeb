// Generated from ProlongDataModuleImpl.pas by pas2js — do not edit by hand; regenerate instead.
/* eslint-disable */
// @ts-nocheck

export default function define($) {
  const U = $.unit("ProlongDataModuleImpl", ["Windows", "Messages", "SysUtils", "Classes", "Graphics", "Controls", "Forms", "Dialogs", "Db", "OracleData", "Oracle", "sboapiDataModuleImpl"]);
  const C = [U];
  U.defClass("TProlongDataMod", "TDataModule", {"prolongsdata": {"name": "ProlongsData", "type": "TOracleDataSet"}, "datasrcprolongsdata": {"name": "DataSrcProlongsData", "type": "TDataSource"}, "cm_prolongation": {"name": "CM_PROLONGATION", "type": "TOraclePackage"}, "creditinfo": {"name": "CreditInfo", "type": "TOracleDataSet"}, "dscreditinfo": {"name": "DSCreditInfo", "type": "TDataSource"}, "prolongsdataid": {"name": "ProlongsDataID", "type": "TFloatField"}, "prolongsdatacreditid": {"name": "ProlongsDataCREDITID", "type": "TFloatField"}, "prolongsdataprolongdate": {"name": "ProlongsDataPROLONGDATE", "type": "TDateTimeField"}, "prolongsdatanewclosedate": {"name": "ProlongsDataNEWCLOSEDATE", "type": "TDateTimeField"}, "prolongsdataoldclosedate": {"name": "ProlongsDataOLDCLOSEDATE", "type": "TDateTimeField"}, "oracledataset1": {"name": "OracleDataSet1", "type": "TOracleDataSet"}, "trancheaccounts": {"name": "TrancheAccounts", "type": "TOracleDataSet"}, "trancheaccountsaccid": {"name": "TrancheAccountsACCID", "type": "TFloatField"}, "trancheaccountskli_id": {"name": "TrancheAccountsKLI_ID", "type": "TFloatField"}, "trancheaccountsaccountnumber": {"name": "TrancheAccountsACCOUNTNUMBER", "type": "TWideStringField"}, "trancheaccountsaccountname": {"name": "TrancheAccountsACCOUNTNAME", "type": "TWideStringField"}, "custaccount": {"name": "CustAccount", "type": "TOracleDataSet"}, "custaccountbooroweraccid": {"name": "CustAccountBOOROWERACCID", "type": "TFloatField"}, "cm_tranche": {"name": "CM_TRANCHE", "type": "TOraclePackage"}, "oracledataset2": {"name": "OracleDataSet2", "type": "TOracleDataSet"}, "prolongsdatanewtrance": {"name": "ProlongsDataNEWTRANCE", "type": "TFloatField"}, "prolongsdatanewoblication": {"name": "ProlongsDataNEWOBLICATION", "type": "TFloatField"}, "oracledataset3": {"name": "OracleDataSet3", "type": "TOracleDataSet"}, "datasource1": {"name": "DataSource1", "type": "TDataSource"}}, {});
  U.init(async () => {
    U.var_("ProlongDataMod", null, "TProlongDataMod");
  });
  U.method("TProlongDataMod", "DataModuleCreate", async function DataModuleCreate(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mcall((await $.v(C, "OracleDataSet3")), "Open", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  return U;
}
