// Generated from UnitDataMod.pas by pas2js — do not edit by hand; regenerate instead.
/* eslint-disable */
// @ts-nocheck

export default function define($) {
  const U = $.unit("UnitDataMod", ["SysUtils", "Classes", "DB", "OracleData", "Oracle", "sboapiDataModuleImpl"]);
  const C = [U];
  U.defClass("TDataModuleTax", "TDataModule", {"dsfields": {"name": "DSFields", "type": "TDataSource"}, "odsfields": {"name": "ODSFields", "type": "TOracleDataSet"}, "odstaxpayment": {"name": "ODSTaxPayment", "type": "TOracleDataSet"}, "datasource1": {"name": "DataSource1", "type": "TDataSource"}, "odstaxpaymentid": {"name": "ODSTaxPaymentID", "type": "TFloatField"}, "odstaxpaymentcustomerid": {"name": "ODSTaxPaymentCUSTOMERID", "type": "TFloatField"}, "odstaxpaymenttaxamount": {"name": "ODSTaxPaymentTAXAMOUNT", "type": "TFloatField"}, "odstaxpaymenttaxpayamount": {"name": "ODSTaxPaymentTAXPAYAMOUNT", "type": "TFloatField"}, "odstaxpaymentcustname": {"name": "ODSTaxPaymentCUSTNAME", "type": "TWideStringField"}, "odstaxpaymentcustpayamount": {"name": "ODSTaxPaymentCUSTPAYAMOUNT", "type": "TFloatField"}}, {});
  U.init(async () => {
    U.var_("DataModuleTax", null, "TDataModuleTax");
  });
  return U;
}
