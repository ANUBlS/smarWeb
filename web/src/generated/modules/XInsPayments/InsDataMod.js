// Generated from InsDataMod.pas by pas2js — do not edit by hand; regenerate instead.
/* eslint-disable */
// @ts-nocheck

export default function define($) {
  const U = $.unit("InsDataMod", ["Windows", "Messages", "SysUtils", "Classes", "Graphics", "Controls", "Forms", "Dialogs", "Db", "OracleData", "Oracle", "sboapiDataModuleImpl"]);
  const C = [U];
  U.defClass("TPayDataMod", "TDataModule", {"odspayments": {"name": "ODSPayments", "type": "TOracleDataSet"}, "dspayments": {"name": "DSPayments", "type": "TDataSource"}, "odspaymentsid": {"name": "ODSPaymentsID", "type": "TFloatField"}, "odspaymentsplanid": {"name": "ODSPaymentsPLANID", "type": "TFloatField"}, "odspaymentspaydate": {"name": "ODSPaymentsPAYDATE", "type": "TDateTimeField"}, "odspaymentsammount": {"name": "ODSPaymentsAMMOUNT", "type": "TFloatField"}, "odspaymentstraid": {"name": "ODSPaymentsTRAID", "type": "TFloatField"}, "odspaymentsins_id": {"name": "ODSPaymentsINS_ID", "type": "TFloatField"}, "odspaymentsname": {"name": "ODSPaymentsNAME", "type": "TStringField"}, "odsplan": {"name": "ODSPlan", "type": "TOracleDataSet"}, "dsplan": {"name": "DSPlan", "type": "TDataSource"}, "opsbop": {"name": "OPSBOP", "type": "TOraclePackage"}, "opcommon": {"name": "OPCOMMON", "type": "TOraclePackage"}, "odsplanid": {"name": "ODSPlanID", "type": "TFloatField"}, "odsplanpaydate": {"name": "ODSPlanPAYDATE", "type": "TStringField"}, "odsplanammount": {"name": "ODSPlanAMMOUNT", "type": "TFloatField"}, "odsplanstatus": {"name": "ODSPlanSTATUS", "type": "TFloatField"}}, {});
  U.init(async () => {
    U.var_("PayDataMod", null, "TPayDataMod");
  });
  return U;
}
