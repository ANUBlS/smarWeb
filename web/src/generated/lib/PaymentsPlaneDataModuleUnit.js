// Generated from PaymentsPlaneDataModuleUnit.pas by pas2js — do not edit by hand; regenerate instead.
/* eslint-disable */
// @ts-nocheck

export default function define($) {
  const U = $.unit("PaymentsPlaneDataModuleUnit", ["Windows", "Messages", "SysUtils", "Classes", "Graphics", "Controls", "Forms", "Dialogs", "Oracle", "Db", "OracleData", "sboapiDataModuleImpl"]);
  const C = [U];
  U.defClass("TPlaneDataModule", "TDataModule", {"datasrcpaymentsplane": {"name": "DataSrcPaymentsPlane", "type": "TDataSource"}, "paymentsplanedata": {"name": "PaymentsPlaneData", "type": "TOracleDataSet"}, "paymentsplane": {"name": "PaymentsPlane", "type": "TOraclePackage"}, "paymentsplanedataid": {"name": "PaymentsPlaneDataID", "type": "TFloatField"}, "paymentsplanedatafacticaldebtpayment": {"name": "PaymentsPlaneDataFACTICALDEBTPAYMENT", "type": "TFloatField"}, "paymentsplanedatainterestdebtpayment": {"name": "PaymentsPlaneDataINTERESTDEBTPAYMENT", "type": "TFloatField"}, "paymentsplanedatapaid": {"name": "PaymentsPlaneDataPAID", "type": "TStringField"}, "paymentsplanedatahdate": {"name": "PaymentsPlaneDataHDATE", "type": "TDateTimeField"}, "paymentsplanedataid2": {"name": "PaymentsPlaneDataID2", "type": "TFloatField"}}, {});
  U.init(async () => {
    U.var_("PlaneDataModule", null, "TPlaneDataModule");
  });
  return U;
}
