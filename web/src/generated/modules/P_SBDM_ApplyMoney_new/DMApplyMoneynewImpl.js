// Generated from DMApplyMoneynewImpl.pas by pas2js — do not edit by hand; regenerate instead.
/* eslint-disable */
// @ts-nocheck

export default function define($) {
  const U = $.unit("DMApplyMoneynewImpl", ["Windows", "Messages", "SysUtils", "Classes", "Graphics", "Controls", "Forms", "Dialogs", "Db", "OracleData", "Oracle", "sboapiDataModuleImpl"]);
  const C = [U];
  U.defClass("TDMApplyMoney_new", "TDataModule", {"tranches": {"name": "Tranches", "type": "TOracleDataSet"}, "tranchesid": {"name": "TranchesID", "type": "TFloatField"}, "tranchestotal": {"name": "TranchesTOTAL", "type": "TFloatField"}, "trancheshdate": {"name": "TranchesHDATE", "type": "TDateTimeField"}, "tranchestrid": {"name": "TranchesTRID", "type": "TFloatField"}, "tranchesdatsrc": {"name": "TranchesDatSrc", "type": "TDataSource"}, "debitaccs": {"name": "DebitAccs", "type": "TOracleDataSet"}, "debitaccsid": {"name": "DebitAccsID", "type": "TFloatField"}, "debitaccsacc_no": {"name": "DebitAccsACC_NO", "type": "TWideStringField"}, "debitaccsname": {"name": "DebitAccsNAME", "type": "TWideStringField"}, "debitaccsdatsrc": {"name": "DebitAccsDatSrc", "type": "TDataSource"}, "sbcm_tranches": {"name": "sbcm_tranches", "type": "TOraclePackage"}, "depositinfo": {"name": "DepositInfo", "type": "TOracleDataSet"}, "depositinfoname": {"name": "DepositInfoNAME", "type": "TWideStringField"}, "depositinfointerest": {"name": "DepositInfoINTEREST", "type": "TFloatField"}, "depositinfoamount": {"name": "DepositInfoAMOUNT", "type": "TFloatField"}, "depositinfocurrency": {"name": "DepositInfoCURRENCY", "type": "TFloatField"}, "depositinfocustomerid": {"name": "DepositInfoCUSTOMERID", "type": "TFloatField"}, "depositinfodatsrc": {"name": "DepositInfoDatSrc", "type": "TDataSource"}, "custaccdatsrc": {"name": "CustAccDatSrc", "type": "TDataSource"}, "custacc": {"name": "CustAcc", "type": "TOracleDataSet"}, "custaccclientaccid": {"name": "CustAccCLIENTACCID", "type": "TFloatField"}, "tranchesreserve": {"name": "TranchesRESERVE", "type": "TFloatField"}, "tranchesdescription": {"name": "TranchesDESCRIPTION", "type": "TWideStringField"}, "sb_aca": {"name": "sb_aca", "type": "TOraclePackage"}}, {});
  U.init(async () => {
    U.var_("DMApplyMoney_new", null, "TDMApplyMoney_new");
  });
  return U;
}
