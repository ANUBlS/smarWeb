// Generated from CRADMExtractMoneyImpl.pas by pas2js — do not edit by hand; regenerate instead.
/* eslint-disable */
// @ts-nocheck

export default function define($) {
  const U = $.unit("CRADMExtractMoneyImpl", ["Windows", "Messages", "SysUtils", "Classes", "Graphics", "Controls", "Forms", "Dialogs", "Db", "OracleData", "Oracle", "sboapiDataModuleImpl"]);
  const C = [U];
  U.defClass("TDMExtractMoney", "TDataModule", {"payments": {"name": "Payments", "type": "TOracleDataSet"}, "paymentsdatsrc": {"name": "PaymentsDatSrc", "type": "TDataSource"}, "creditaccsdatsrc": {"name": "CreditAccsDatSrc", "type": "TDataSource"}, "creditaccs": {"name": "CreditAccs", "type": "TOracleDataSet"}, "creditaccsid": {"name": "CreditAccsID", "type": "TFloatField"}, "cra_contract": {"name": "cra_contract", "type": "TOraclePackage"}, "depositinfo": {"name": "DepositInfo", "type": "TOracleDataSet"}, "depositinfocurrency": {"name": "DepositInfoCURRENCY", "type": "TFloatField"}, "depositinfocustomerid": {"name": "DepositInfoCUSTOMERID", "type": "TFloatField"}, "custacc": {"name": "CustAcc", "type": "TOracleDataSet"}, "custaccclientaccid": {"name": "CustAccCLIENTACCID", "type": "TFloatField"}, "depositinfodatsrc": {"name": "DepositInfoDatSrc", "type": "TDataSource"}, "custaccdatsrc": {"name": "CustAccDatSrc", "type": "TDataSource"}, "paymentsid": {"name": "PaymentsID", "type": "TFloatField"}, "paymentshdate": {"name": "PaymentsHDATE", "type": "TDateTimeField"}, "paymentsinterestdebt": {"name": "PaymentsINTERESTDEBT", "type": "TFloatField"}, "paymentstrid": {"name": "PaymentsTRID", "type": "TFloatField"}, "paymentsinttrid": {"name": "PaymentsINTTRID", "type": "TFloatField"}, "creditaccsacc_no": {"name": "CreditAccsACC_NO", "type": "TWideStringField"}, "creditaccsname": {"name": "CreditAccsNAME", "type": "TWideStringField"}, "depositinfoname": {"name": "DepositInfoNAME", "type": "TWideStringField"}, "custaccinterestaccno": {"name": "CustAccINTERESTACCNO", "type": "TWideStringField"}, "paymentsbankinterestdebt": {"name": "PaymentsBANKINTERESTDEBT", "type": "TFloatField"}, "paymentsoverduedebt": {"name": "PaymentsOVERDUEDEBT", "type": "TFloatField"}, "paymentsid2": {"name": "PaymentsID2", "type": "TFloatField"}, "depositinfoostat": {"name": "DepositInfoOSTAT", "type": "TFloatField"}, "sbop": {"name": "sbop", "type": "TOraclePackage"}}, {});
  U.init(async () => {
    U.var_("CRADMExtractMoney", null, "TDMExtractMoney");
  });
  return U;
}
