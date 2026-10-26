// Generated from DataModPartialPaymentImpl_new.pas by pas2js — do not edit by hand; regenerate instead.
/* eslint-disable */
// @ts-nocheck

export default function define($) {
  const U = $.unit("DataModPartialPaymentImpl_new", ["Windows", "Messages", "SysUtils", "Classes", "Graphics", "Controls", "Forms", "Dialogs", "Db", "OracleData", "Oracle", "sboapiDataModuleImpl"]);
  const C = [U];
  U.defClass("TDataModPartialPayment_new", "TDataModule", {"payments": {"name": "Payments", "type": "TOracleDataSet"}, "paymentsid": {"name": "PaymentsID", "type": "TFloatField"}, "paymentshdate": {"name": "PaymentsHDATE", "type": "TDateTimeField"}, "paymentsreserve": {"name": "PaymentsRESERVE", "type": "TFloatField"}, "paymentstotal": {"name": "PaymentsTOTAL", "type": "TFloatField"}, "paymentsdescription": {"name": "PaymentsDESCRIPTION", "type": "TWideStringField"}, "paymentsdatsrc": {"name": "PaymentsDatSrc", "type": "TDataSource"}, "depositinfo": {"name": "DepositInfo", "type": "TOracleDataSet"}, "depositinfoname": {"name": "DepositInfoNAME", "type": "TWideStringField"}, "depositinfoamount": {"name": "DepositInfoAMOUNT", "type": "TFloatField"}, "depositinfocurrency": {"name": "DepositInfoCURRENCY", "type": "TFloatField"}, "depositinfocustomerid": {"name": "DepositInfoCUSTOMERID", "type": "TFloatField"}, "depositinfosrc": {"name": "DepositInfoSrc", "type": "TDataSource"}, "sysdat": {"name": "Sysdat", "type": "TOracleDataSet"}, "sysdattek_dat": {"name": "SysdatTEK_DAT", "type": "TDateTimeField"}, "sysdatdatsrc": {"name": "SysdatDatSrc", "type": "TDataSource"}, "sbcm_payment": {"name": "sbcm_payment", "type": "TOraclePackage"}, "debitaccs": {"name": "DebitAccs", "type": "TOracleDataSet"}, "debitaccsdatsrc": {"name": "DebitAccsDatSrc", "type": "TDataSource"}, "creditaccs": {"name": "CreditAccs", "type": "TOracleDataSet"}, "creditaccsdatsrc": {"name": "CreditAccsDatSrc", "type": "TDataSource"}, "percentaccs": {"name": "PercentAccs", "type": "TOracleDataSet"}, "percentaccsdatsrc": {"name": "PercentAccsDatSrc", "type": "TDataSource"}, "sb_aca": {"name": "sb_aca", "type": "TOraclePackage"}}, {});
  U.init(async () => {
    U.var_("DataModPartialPayment_new", null, "TDataModPartialPayment_new");
  });
  return U;
}
