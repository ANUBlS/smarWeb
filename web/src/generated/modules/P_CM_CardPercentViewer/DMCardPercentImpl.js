// Generated from DMCardPercentImpl.pas by pas2js — do not edit by hand; regenerate instead.
/* eslint-disable */
// @ts-nocheck

export default function define($) {
  const U = $.unit("DMCardPercentImpl", ["Windows", "Messages", "SysUtils", "Classes", "Graphics", "Controls", "Forms", "Dialogs", "Db", "OracleData", "CMOracleAPIDataModuleImpl", "CommonDecls"]);
  const C = [U];
  U.defClass("TDMCardPercent", "TDataModule", {"tranchesdatsrc": {"name": "TranchesDatSrc", "type": "TDataSource"}, "tranches": {"name": "Tranches", "type": "TOracleDataSet"}, "tranchesid": {"name": "TranchesID", "type": "TFloatField"}, "tranchescreditid": {"name": "TranchesCREDITID", "type": "TFloatField"}, "tranchestranchedate": {"name": "TranchesTRANCHEDATE", "type": "TDateTimeField"}, "tranchestrancheamount": {"name": "TranchesTRANCHEAMOUNT", "type": "TFloatField"}, "tranchrestdatsrc": {"name": "TranchrestDatSrc", "type": "TDataSource"}, "tranchrest": {"name": "Tranchrest", "type": "TOracleDataSet"}, "tranchresthdate": {"name": "TranchrestHDATE", "type": "TDateTimeField"}, "tranchresttranchid": {"name": "TranchrestTRANCHID", "type": "TFloatField"}, "tranchrestrest": {"name": "TranchrestREST", "type": "TFloatField"}, "tranchrestintrest": {"name": "TranchrestINTREST", "type": "TFloatField"}, "tranchcalcedperdatsrc": {"name": "TranchcalcedPerDatSrc", "type": "TDataSource"}, "tranchcalcedper": {"name": "TranchcalcedPer", "type": "TOracleDataSet"}, "tranchcalcedperhdate": {"name": "TranchcalcedPerHDATE", "type": "TDateTimeField"}, "tranchcalcedpertranchid": {"name": "TranchcalcedPerTRANCHID", "type": "TFloatField"}, "tranchcalcedperinterest": {"name": "TranchcalcedPerINTEREST", "type": "TFloatField"}, "tranchpaymentsdatsrc": {"name": "TranchpaymentsDatSrc", "type": "TDataSource"}, "tranchpayments": {"name": "Tranchpayments", "type": "TOracleDataSet"}, "tranchpaymentspaymentid": {"name": "TranchpaymentsPAYMENTID", "type": "TFloatField"}, "tranchpaymentspaymentdate": {"name": "TranchpaymentsPAYMENTDATE", "type": "TDateTimeField"}, "tranchpaymentstranchid": {"name": "TranchpaymentsTRANCHID", "type": "TFloatField"}, "tranchpaymentsmaindebit": {"name": "TranchpaymentsMAINDEBIT", "type": "TFloatField"}, "tranchpaymentsintdebit": {"name": "TranchpaymentsINTDEBIT", "type": "TFloatField"}}, {});
  U.init(async () => {
    U.var_("DMCardPercent", null, "TDMCardPercent");
  });
  return U;
}
