// Generated from DMExtractMoneyImpl_new.pas by pas2js — do not edit by hand; regenerate instead.
/* eslint-disable */
// @ts-nocheck

export default function define($) {
  const U = $.unit("DMExtractMoneyImpl_new", ["Windows", "Messages", "SysUtils", "Classes", "Graphics", "Controls", "Forms", "Dialogs", "Db", "OracleData", "Oracle", "sboapiDataModuleImpl"]);
  const C = [U];
  U.defClass("TDMExtractMoney_new", "TDataModule", {"payments": {"name": "Payments", "type": "TOracleDataSet"}, "paymentsid": {"name": "PaymentsID", "type": "TFloatField"}, "paymentshdate": {"name": "PaymentsHDATE", "type": "TDateTimeField"}, "paymentsfacticaldebt": {"name": "PaymentsFACTICALDEBT", "type": "TFloatField"}, "paymentsinterestdebt": {"name": "PaymentsINTERESTDEBT", "type": "TFloatField"}, "paymentstrid": {"name": "PaymentsTRID", "type": "TFloatField"}, "paymentsinttrid": {"name": "PaymentsINTTRID", "type": "TFloatField"}, "paymentsdatsrc": {"name": "PaymentsDatSrc", "type": "TDataSource"}, "creditaccsdatsrc": {"name": "CreditAccsDatSrc", "type": "TDataSource"}, "creditaccs": {"name": "CreditAccs", "type": "TOracleDataSet"}, "creditaccsid": {"name": "CreditAccsID", "type": "TFloatField"}, "creditaccsacc_no": {"name": "CreditAccsACC_NO", "type": "TWideStringField"}, "creditaccsname": {"name": "CreditAccsNAME", "type": "TWideStringField"}, "sbcm_payment": {"name": "sbcm_payment", "type": "TOraclePackage"}, "depositinfo": {"name": "DepositInfo", "type": "TOracleDataSet"}, "depositinfoname": {"name": "DepositInfoNAME", "type": "TWideStringField"}, "depositinfoamount": {"name": "DepositInfoAMOUNT", "type": "TFloatField"}, "depositinfocurrency": {"name": "DepositInfoCURRENCY", "type": "TFloatField"}, "depositinfocustomerid": {"name": "DepositInfoCUSTOMERID", "type": "TFloatField"}, "depositinfofacticaldebt": {"name": "DepositInfoFACTICALDEBT", "type": "TFloatField"}, "depositinfofacticalinterestdebt": {"name": "DepositInfoFACTICALINTERESTDEBT", "type": "TFloatField"}, "custacc": {"name": "CustAcc", "type": "TOracleDataSet"}, "custaccclientaccid": {"name": "CustAccCLIENTACCID", "type": "TFloatField"}, "custacccontractaccno": {"name": "CustAccCONTRACTACCNO", "type": "TWideStringField"}, "custaccinterestaccno": {"name": "CustAccINTERESTACCNO", "type": "TWideStringField"}, "depositinfodatsrc": {"name": "DepositInfoDatSrc", "type": "TDataSource"}, "custaccdatsrc": {"name": "CustAccDatSrc", "type": "TDataSource"}, "sb_aca": {"name": "sb_aca", "type": "TOraclePackage"}}, {});
  U.init(async () => {
    U.var_("DMExtractMoney_new", null, "TDMExtractMoney_new");
  });
  return U;
}
