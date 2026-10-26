// Generated from DataMPrCrImpl.pas by pas2js — do not edit by hand; regenerate instead.
/* eslint-disable */
// @ts-nocheck

export default function define($) {
  const U = $.unit("DataMPrCrImpl", ["SysUtils", "Classes", "DB", "OracleData", "sboapiDataModuleImpl"]);
  const C = [U];
  U.defClass("TDataMPrCredit", "TDataModule", {"intcache": {"name": "IntCache", "type": "TOracleDataSet"}, "datasrcintcache": {"name": "DataSrcIntCache", "type": "TDataSource"}, "intcacheid": {"name": "IntCacheID", "type": "TFloatField"}, "intcachenumberofcredit": {"name": "IntCacheNUMBEROFCREDIT", "type": "TWideStringField"}, "intcacheval_name": {"name": "IntCacheVAL_NAME", "type": "TWideStringField"}, "intcachename": {"name": "IntCacheNAME", "type": "TWideStringField"}, "intcacherest": {"name": "IntCacheREST", "type": "TFloatField"}, "intcacheduerest": {"name": "IntCacheDUEREST", "type": "TFloatField"}, "intcacheinterestrest": {"name": "IntCacheINTERESTREST", "type": "TFloatField"}, "intcachecreditlineamount": {"name": "IntCacheCREDITLINEAMOUNT", "type": "TFloatField"}, "intcachedateofconclusion": {"name": "IntCacheDATEOFCONCLUSION", "type": "TDateTimeField"}, "intcacheduedatefirstcontract": {"name": "IntCacheDUEDATEFIRSTCONTRACT", "type": "TDateTimeField"}, "intcachetrprocessed": {"name": "IntCacheTRPROCESSED", "type": "TFloatField"}, "intcacheqeydsayi": {"name": "IntCacheQEYDSAYI", "type": "TFloatField"}, "intcachecrtype": {"name": "IntCacheCRTYPE", "type": "TWideStringField"}, "intcachephonenumber": {"name": "IntCachePHONENUMBER", "type": "TWideStringField"}, "intcacheanyinfotodisting": {"name": "IntCacheANYINFOTODISTING", "type": "TWideStringField"}, "intcachepledgeprice": {"name": "IntCachePLEDGEPRICE", "type": "TFloatField"}, "intcachemeh": {"name": "IntCacheMEH", "type": "TWideStringField"}, "intcachemehid": {"name": "IntCacheMEHID", "type": "TFloatField"}, "intcachedueinterestrest": {"name": "IntCacheDUEINTERESTREST", "type": "TFloatField"}, "intcachefullrest": {"name": "IntCacheFULLREST", "type": "TFloatField"}, "intcachedueday": {"name": "IntCacheDUEDAY", "type": "TFloatField"}, "intcacheqovid": {"name": "IntCacheQOVID", "type": "TFloatField"}, "intcacheqovluq": {"name": "IntCacheQOVLUQ", "type": "TWideStringField"}, "intcachefilial": {"name": "IntCacheFILIAL", "type": "TWideStringField"}, "intcachestatus": {"name": "IntCacheSTATUS", "type": "TFloatField"}, "intcachecurrency": {"name": "IntCacheCURRENCY", "type": "TFloatField"}, "intcachebranchid": {"name": "IntCacheBRANCHID", "type": "TFloatField"}, "intcachecredittype": {"name": "IntCacheCREDITTYPE", "type": "TFloatField"}, "creditinfodset": {"name": "CreditInfoDSet", "type": "TOracleDataSet"}, "prviewdset": {"name": "PrViewDSet", "type": "TOracleDataSet"}}, {});
  U.init(async () => {
    U.var_("DataMPrCredit", null, "TDataMPrCredit");
  });
  U.method("TDataMPrCredit", "DataModuleCreate", async function DataModuleCreate(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mcall((await $.v(C, "IntCache")), "Open", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TDataMPrCredit", "DataModuleDestroy", async function DataModuleDestroy(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mcall((await $.v(C, "IntCache")), "Close", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  return U;
}
