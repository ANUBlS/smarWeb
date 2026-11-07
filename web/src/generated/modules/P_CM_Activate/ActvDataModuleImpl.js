// Generated from ActvDataModuleImpl.pas by pas2js — do not edit by hand; regenerate instead.
/* eslint-disable */
// @ts-nocheck

export default function define($) {
  const U = $.unit("ActvDataModuleImpl", ["Windows", "Messages", "SysUtils", "Classes", "Graphics", "Controls", "Forms", "Dialogs", "Oracle", "Db", "OracleData", "sboapiDataModuleImpl"]);
  const C = [U];
  U.defClass("TActvDataMod", "TDataModule", {"creditinfo": {"name": "CreditInfo", "type": "TOracleDataSet"}, "datasrccreditinfo": {"name": "DataSrcCreditInfo", "type": "TDataSource"}, "activationpckg": {"name": "ActivationPckg", "type": "TOraclePackage"}, "creditinfoobligation": {"name": "CreditInfoOBLIGATION", "type": "TFloatField"}, "creditinfopledgeprice": {"name": "CreditInfoPLEDGEPRICE", "type": "TFloatField"}, "creditinfoname": {"name": "CreditInfoNAME", "type": "TWideStringField"}, "creditinfoval_name": {"name": "CreditInfoVAL_NAME", "type": "TWideStringField"}, "actvinfo": {"name": "ActvInfo", "type": "TOracleDataSet"}, "actvinfoactvdate": {"name": "ActvInfoACTVDATE", "type": "TDateTimeField"}}, {});
  U.init(async () => {
    U.var_("ActvDataMod", null, "TActvDataMod");
  });
  return U;
}
