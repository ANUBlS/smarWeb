// Generated from TrafficDataModuleUnit.pas by pas2js — do not edit by hand; regenerate instead.
/* eslint-disable */
// @ts-nocheck

export default function define($) {
  const U = $.unit("TrafficDataModuleUnit", ["Windows", "Messages", "SysUtils", "Classes", "Graphics", "Controls", "Forms", "Dialogs", "Db", "OracleData", "sboapiDataModuleImpl"]);
  const C = [U];
  U.defClass("TTrafficDataModule", "TDataModule", {"datasrctraffic": {"name": "DataSrcTraffic", "type": "TDataSource"}, "trafficdata": {"name": "TrafficData", "type": "TOracleDataSet"}, "trafficdataid": {"name": "TrafficDataID", "type": "TFloatField"}, "trafficdataid2": {"name": "TrafficDataID2", "type": "TFloatField"}, "trafficdatahdate": {"name": "TrafficDataHDATE", "type": "TDateTimeField"}, "trafficdatatotal": {"name": "TrafficDataTOTAL", "type": "TFloatField"}}, {});
  U.init(async () => {
    U.var_("TrafficDataModule", null, "TTrafficDataModule");
  });
  return U;
}
