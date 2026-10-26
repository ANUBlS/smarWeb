// Generated from DMExtractMoneyImpl.pas by pas2js — do not edit by hand; regenerate instead.
/* eslint-disable */
// @ts-nocheck

export default function define($) {
  const U = $.unit("DMExtractMoneyImpl", ["Windows", "Messages", "SysUtils", "Classes", "Graphics", "Controls", "Forms", "Dialogs", "Db", "OracleData", "Oracle", "sboapiDataModuleImpl"]);
  const C = [U];
  U.defClass("TDMExtractMoney", "TDataModule", {"payments": {"name": "Payments", "type": "TOracleDataSet"}, "paymentsdatsrc": {"name": "PaymentsDatSrc", "type": "TDataSource"}, "creditaccsdatsrc": {"name": "CreditAccsDatSrc", "type": "TDataSource"}, "creditaccs": {"name": "CreditAccs", "type": "TOracleDataSet"}, "creditaccsid": {"name": "CreditAccsID", "type": "TFloatField"}, "creditaccsacc_no": {"name": "CreditAccsACC_NO", "type": "Twidestringfield"}, "creditaccsname": {"name": "CreditAccsNAME", "type": "Twidestringfield"}, "sbcm_payment": {"name": "sbcm_payment", "type": "TOraclePackage"}, "depositinfo": {"name": "DepositInfo", "type": "TOracleDataSet"}, "depositinfoname": {"name": "DepositInfoNAME", "type": "Twidestringfield"}, "depositinfoamount": {"name": "DepositInfoAMOUNT", "type": "TFloatField"}, "depositinfocurrency": {"name": "DepositInfoCURRENCY", "type": "TFloatField"}, "depositinfocustomerid": {"name": "DepositInfoCUSTOMERID", "type": "TFloatField"}, "custacc": {"name": "CustAcc", "type": "TOracleDataSet"}, "custaccclientaccid": {"name": "CustAccCLIENTACCID", "type": "TFloatField"}, "depositinfodatsrc": {"name": "DepositInfoDatSrc", "type": "TDataSource"}, "custaccdatsrc": {"name": "CustAccDatSrc", "type": "TDataSource"}, "paymentsid": {"name": "PaymentsID", "type": "TFloatField"}, "paymentshdate": {"name": "PaymentsHDATE", "type": "TDateTimeField"}, "paymentsfacticaldebt": {"name": "PaymentsFACTICALDEBT", "type": "TFloatField"}, "paymentsinterestdebt": {"name": "PaymentsINTERESTDEBT", "type": "TFloatField"}, "paymentstrid": {"name": "PaymentsTRID", "type": "TFloatField"}, "paymentsinttrid": {"name": "PaymentsINTTRID", "type": "TFloatField"}, "depositinfofacticaldebt": {"name": "DepositInfoFACTICALDEBT", "type": "TFloatField"}, "depositinfofacticalinterestdebt": {"name": "DepositInfoFACTICALINTERESTDEBT", "type": "TFloatField"}, "custacccontractaccno": {"name": "CustAccCONTRACTACCNO", "type": "Twidestringfield"}, "custaccinterestaccno": {"name": "CustAccINTERESTACCNO", "type": "Twidestringfield"}}, {});
  U.init(async () => {
    U.var_("DMExtractMoney", null, "TDMExtractMoney");
  });
  return U;
}
