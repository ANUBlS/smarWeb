// Generated from UntExpireDataModule.pas by pas2js — do not edit by hand; regenerate instead.
/* eslint-disable */
// @ts-nocheck

export default function define($) {
  const U = $.unit("UntExpireDataModule", ["Windows", "Messages", "SysUtils", "Classes", "Graphics", "Controls", "Forms", "Dialogs", "Oracle", "Db", "OracleData", "sboapiDataModuleimpl"]);
  const C = [U];
  U.defClass("TDataModExpire", "TDataModule", {"expirepackage": {"name": "ExpirePackage", "type": "TOraclePackage"}, "reliabilitypercentdata": {"name": "ReliabilityPercentData", "type": "TOracleDataSet"}, "datasrcreliability": {"name": "DataSrcReliability", "type": "TDataSource"}, "datasrcmainreserve": {"name": "DataSrcMainReserve", "type": "TDataSource"}, "mainreserve": {"name": "MainReserve", "type": "TOracleDataSet"}, "datasrcexpiredreserve": {"name": "DataSrcExpiredReserve", "type": "TDataSource"}, "expiredreserve": {"name": "ExpiredReserve", "type": "TOracleDataSet"}, "overduereservedata": {"name": "OverdueReserveData", "type": "TOracleDataSet"}, "datasrcoverduereserve": {"name": "DataSrcOverdueReserve", "type": "TDataSource"}, "reservecont": {"name": "ReserveCont", "type": "TOraclePackage"}, "overdueaccdata": {"name": "OverdueAccData", "type": "TOracleDataSet"}, "stringfield1": {"name": "StringField1", "type": "TStringField"}, "stringfield2": {"name": "StringField2", "type": "TStringField"}, "stringfield3": {"name": "StringField3", "type": "TStringField"}, "datasrcoverdueaccdata": {"name": "DataSrcOverdueAccData", "type": "TDataSource"}, "clientaccdata": {"name": "ClientAccData", "type": "TOracleDataSet"}, "clientaccdataclientaccno": {"name": "ClientAccDataCLIENTACCNO", "type": "TStringField"}, "clientaccdataclientaccname": {"name": "ClientAccDataCLIENTACCNAME", "type": "TStringField"}, "clientaccdataclientcurrency": {"name": "ClientAccDataCLIENTCURRENCY", "type": "TStringField"}, "datasrcclientaccdata": {"name": "DataSrcClientAccData", "type": "TDataSource"}, "sreservedata": {"name": "SReserveData", "type": "TOracleDataSet"}, "stringfield4": {"name": "StringField4", "type": "TStringField"}, "stringfield5": {"name": "StringField5", "type": "TStringField"}, "stringfield6": {"name": "StringField6", "type": "TStringField"}, "datasrcsreservedata": {"name": "DataSrcSReserveData", "type": "TDataSource"}, "preservedata": {"name": "PReserveData", "type": "TOracleDataSet"}, "stringfield7": {"name": "StringField7", "type": "TStringField"}, "stringfield8": {"name": "StringField8", "type": "TStringField"}, "stringfield9": {"name": "StringField9", "type": "TStringField"}, "datasrcpreservedata": {"name": "DataSrcPReserveData", "type": "TDataSource"}}, {});
  U.init(async () => {
    U.var_("DataModExpire", null, "TDataModExpire");
  });
  U.method("TDataModExpire", "DataModuleDestroy", async function DataModuleDestroy(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mcall((await $.v(C, "ReliabilityPercentData")), "CloseAll", []);
  await $.mcall((await $.v(C, "OverdueReserveData")), "CloseAll", []);
  await $.mcall((await $.v(C, "MainReserve")), "CloseAll", []);
  await $.mcall((await $.v(C, "ExpiredReserve")), "CloseAll", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  return U;
}
