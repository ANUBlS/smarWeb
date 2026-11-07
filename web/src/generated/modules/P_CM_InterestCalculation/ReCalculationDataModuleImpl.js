// Generated from ReCalculationDataModuleImpl.pas by pas2js — do not edit by hand; regenerate instead.
/* eslint-disable */
// @ts-nocheck

export default function define($) {
  const U = $.unit("ReCalculationDataModuleImpl", ["Windows", "Messages", "SysUtils", "Classes", "Graphics", "Controls", "Forms", "NLSDialogs", "Oracle", "Db", "OracleData", "Grids", "sboapiDataModuleImpl"]);
  const C = [U];
  U.defClass("TPRDataModule", "TDataModule", {"calculatorpackage": {"name": "CalculatorPackage", "type": "TOraclePackage"}, "intcache": {"name": "IntCache", "type": "TOracleDataSet"}, "datasrcintcache": {"name": "DataSrcIntCache", "type": "TDataSource"}, "intcacheid": {"name": "IntCacheID", "type": "TFloatField"}, "intcachecurrency": {"name": "IntCacheCURRENCY", "type": "TFloatField"}, "intcacheboorowerid": {"name": "IntCacheBOOROWERID", "type": "TFloatField"}, "intcachenumberofcredit": {"name": "IntCacheNUMBEROFCREDIT", "type": "TWideStringField"}, "intcacheusrgroup": {"name": "IntCacheUSRGROUP", "type": "TFloatField"}, "intcachebranchid": {"name": "IntCacheBRANCHID", "type": "TFloatField"}, "intcacheusid": {"name": "IntCacheUSID", "type": "TFloatField"}, "intcachestopcalcdate": {"name": "IntCacheSTOPCALCDATE", "type": "TDateTimeField"}, "intcacherest": {"name": "IntCacheREST", "type": "TFloatField"}, "intcacheinterestrest": {"name": "IntCacheINTERESTREST", "type": "TFloatField"}, "intcacheduerest": {"name": "IntCacheDUEREST", "type": "TFloatField"}, "intcachedueinterestrest": {"name": "IntCacheDUEINTERESTREST", "type": "TFloatField"}, "intcachecontractaccno": {"name": "IntCacheCONTRACTACCNO", "type": "TWideStringField"}, "intcacheval_name": {"name": "IntCacheVAL_NAME", "type": "TWideStringField"}, "intcacheinterest": {"name": "IntCacheINTEREST", "type": "TFloatField"}, "intcachedueinterest": {"name": "IntCacheDUEINTEREST", "type": "TFloatField"}, "intcachetrprocessed": {"name": "IntCacheTRPROCESSED", "type": "TFloatField"}, "intcachecustomertype": {"name": "IntCacheCUSTOMERTYPE", "type": "TFloatField"}, "intcachepersonaltype": {"name": "IntCachePERSONALTYPE", "type": "TFloatField"}, "intcachecredittype": {"name": "IntCacheCREDITTYPE", "type": "TFloatField"}, "cm_autoexp": {"name": "cm_autoexp", "type": "TOraclePackage"}, "intcachepenaltyinterest": {"name": "IntCachePENALTYINTEREST", "type": "TFloatField"}, "intcachename": {"name": "IntCacheNAME", "type": "TWideStringField"}, "intcacheenddat": {"name": "IntCacheENDDAT", "type": "TDateTimeField"}, "intcacheint": {"name": "IntCacheINT", "type": "TFloatField"}, "intcachedueint": {"name": "IntCacheDUEINT", "type": "TFloatField"}, "intcachestatus": {"name": "IntCacheSTATUS", "type": "TFloatField"}, "intcacheestatus": {"name": "IntCacheestatus", "type": "TWideStringField"}, "intcacheannualyinterestrate": {"name": "IntCacheANNUALYINTERESTRATE", "type": "TFloatField"}, "intcachedateofconclusion": {"name": "IntCacheDATEOFCONCLUSION", "type": "TDateTimeField"}, "intcachecrtype": {"name": "IntCacheCRTYPE", "type": "TWideStringField"}, "intcacheaim_id": {"name": "IntCacheAIM_ID", "type": "TFloatField"}, "oracledataset1": {"name": "OracleDataSet1", "type": "TOracleDataSet"}, "oracledataset1dat": {"name": "OracleDataSet1DAT", "type": "TDateTimeField"}, "intcacheendcont": {"name": "IntCacheENDCONT", "type": "TDateTimeField"}}, {});
  U.init(async () => {
    U.var_("PRDataModule", null, "TPRDataModule");
  });
  U.method("TPRDataModule", "DataModuleCreate", async function DataModuleCreate(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t1 = (await $.wobj(C, "IntCache"));
    await $.stmt($.wcall([$t1], "Open", [], C));
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TPRDataModule", "IntCacheCalcFields", async function IntCacheCalcFields(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"dataset": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["dataset"]);
  if ($.truthy($.eq((await $.mv((await $.v(C, "IntCacheSTATUS")), "AsInteger")), 1))) {
    await $.mset((await $.v(C, "IntCacheestatus")), "AsString", "Hesablama tam dayandırılıb ");
  }
  if ($.truthy((await $.and_(($.eq((await $.mv((await $.v(C, "IntCacheINT")), "AsInteger")), 1)), async () => ($.eq((await $.mv((await $.v(C, "IntCacheDUEINT")), "AsInteger")), 1)))))) {
    await $.mset((await $.v(C, "IntCacheestatus")), "AsString", "Hər ikisi dayandırılıb ");
  }
  if ($.truthy((await $.and_(($.eq((await $.mv((await $.v(C, "IntCacheINT")), "AsInteger")), 1)), async () => ($.eq((await $.mv((await $.v(C, "IntCacheDUEINT")), "AsInteger")), 0)))))) {
    await $.mset((await $.v(C, "IntCacheestatus")), "AsString", "Faiz hesablaması dayandırılıb ");
  }
  if ($.truthy((await $.and_(($.eq((await $.mv((await $.v(C, "IntCacheDUEINT")), "AsInteger")), 1)), async () => ($.eq((await $.mv((await $.v(C, "IntCacheINT")), "AsInteger")), 0)))))) {
    await $.mset((await $.v(C, "IntCacheestatus")), "AsString", "Penya hesablaması  dayandırılıb ");
  }
  return L0.result;
}, {"params": ["DataSet"], "kind": "procedure", "ptypes": ["TDataSet"]});
  return U;
}
