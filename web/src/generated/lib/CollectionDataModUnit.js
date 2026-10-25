// Generated from CollectionDataModUnit.pas by pas2js — do not edit by hand; regenerate instead.
/* eslint-disable */
// @ts-nocheck

export default function define($) {
  const U = $.unit("CollectionDataModUnit", ["Windows", "Messages", "SysUtils", "Classes", "Graphics", "Controls", "Forms", "Dialogs", "Db", "OracleData", "sboapiDataModuleImpl"]);
  const C = [U];
  U.defClass("TCollectionDataMod", "TDataModule", {"collectiondata": {"name": "CollectionData", "type": "TOracleDataSet"}, "datasrccollection": {"name": "DataSrcCollection", "type": "TDataSource"}, "collectiondataid": {"name": "CollectionDataID", "type": "TFloatField"}, "collectiondataid2": {"name": "CollectionDataID2", "type": "TFloatField"}, "collectiondatahdate": {"name": "CollectionDataHDATE", "type": "TDateTimeField"}, "collectiondataamount": {"name": "CollectionDataAMOUNT", "type": "TFloatField"}, "collectiondatapercent": {"name": "CollectionDataPERCENT", "type": "TFloatField"}}, {});
  U.init(async () => {
    U.var_("CollectionDataMod", null, "TCollectionDataMod");
  });
  U.method("TCollectionDataMod", "DataModuleDestroy", async function DataModuleDestroy(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mcall((await $.v(C, "CollectionData")), "CloseAll", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  return U;
}
