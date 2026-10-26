// Generated from Datamodules.pas by pas2js — do not edit by hand; regenerate instead.
/* eslint-disable */
// @ts-nocheck

export default function define($) {
  const U = $.unit("Datamodules", ["SysUtils", "Classes", "sboapiDataModuleImpl", "DB", "OracleData", "Windows", "Messages", "Graphics", "Controls", "Forms", "Dialogs", "Oracle"]);
  const C = [U];
  U.defClass("TDataModule5", "TDataModule", {"paymentdata": {"name": "Paymentdata", "type": "TOracleDataSet"}, "payment_source": {"name": "Payment_source", "type": "TDataSource"}, "oracledataset1": {"name": "OracleDataSet1", "type": "TOracleDataSet"}}, {});
  U.init(async () => {
    U.var_("DataModule5", null, "TDataModule5");
  });
  return U;
}
