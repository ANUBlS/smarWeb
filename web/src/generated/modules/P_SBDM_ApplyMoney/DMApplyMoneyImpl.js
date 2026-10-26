// Generated from DMApplyMoneyImpl.pas by pas2js — do not edit by hand; regenerate instead.
/* eslint-disable */
// @ts-nocheck

export default function define($) {
  const U = $.unit("DMApplyMoneyImpl", ["Windows", "Messages", "SysUtils", "Classes", "Graphics", "Controls", "Forms", "Dialogs", "Db", "OracleData", "Oracle", "sboapiDataModuleImpl"]);
  const C = [U];
  U.defClass("TDMApplyMoney", "TDataModule", {"tranches": {"name": "Tranches", "type": "TOracleDataSet"}, "tranchesdatsrc": {"name": "TranchesDatSrc", "type": "TDataSource"}, "tranchesid": {"name": "TranchesID", "type": "TFloatField"}, "trancheshdate": {"name": "TranchesHDATE", "type": "TDateTimeField"}, "tranchestotal": {"name": "TranchesTOTAL", "type": "TFloatField"}, "tranchestrid": {"name": "TranchesTRID", "type": "TFloatField"}, "debitaccs": {"name": "DebitAccs", "type": "TOracleDataSet"}, "debitaccsid": {"name": "DebitAccsID", "type": "TFloatField"}, "debitaccsacc_no": {"name": "DebitAccsACC_NO", "type": "Twidestringfield"}, "debitaccsname": {"name": "DebitAccsNAME", "type": "Twidestringfield"}, "debitaccsdatsrc": {"name": "DebitAccsDatSrc", "type": "TDataSource"}, "sbcm_tranches": {"name": "sbcm_tranches", "type": "TOraclePackage"}, "depositinfo": {"name": "DepositInfo", "type": "TOracleDataSet"}, "depositinfodatsrc": {"name": "DepositInfoDatSrc", "type": "TDataSource"}, "depositinfoname": {"name": "DepositInfoNAME", "type": "Twidestringfield"}, "depositinfointerest": {"name": "DepositInfoINTEREST", "type": "TFloatField"}, "depositinfoamount": {"name": "DepositInfoAMOUNT", "type": "TFloatField"}, "depositinfocurrency": {"name": "DepositInfoCURRENCY", "type": "TFloatField"}, "custaccdatsrc": {"name": "CustAccDatSrc", "type": "TDataSource"}, "custacc": {"name": "CustAcc", "type": "TOracleDataSet"}, "custaccclientaccid": {"name": "CustAccCLIENTACCID", "type": "TFloatField"}, "depositinfocustomerid": {"name": "DepositInfoCUSTOMERID", "type": "TFloatField"}}, {});
  U.init(async () => {
    U.var_("DMApplyMoney", null, "TDMApplyMoney");
  });
  return U;
}
