// Generated from dmReserveInfImpl.pas by pas2js — do not edit by hand; regenerate instead.
/* eslint-disable */
// @ts-nocheck

export default function define($) {
  const U = $.unit("dmReserveInfImpl", ["Windows", "Messages", "SysUtils", "Classes", "Graphics", "Controls", "Forms", "Dialogs", "Db", "OracleData", "SboApiDataModuleImpl"]);
  const C = [U];
  U.defClass("TdmReserveInf", "TDataModule", {"reserveinf": {"name": "ReserveInf", "type": "TOracleDataSet"}, "datsetvalute": {"name": "DatSetValute", "type": "TOracleDataSet"}, "datsetvalutevalute": {"name": "DatSetValuteVALUTE", "type": "TIntegerField"}, "datsetvalutevalu_name": {"name": "DatSetValuteVALU_NAME", "type": "TWidestringfield"}, "datsrcvalute": {"name": "DatSrcValute", "type": "TDataSource"}, "datsetfilials": {"name": "DatSetFilials", "type": "TOracleDataSet"}, "datsrcfilials": {"name": "DatSrcFilials", "type": "TDataSource"}, "datsetpersons": {"name": "DatSetPersons", "type": "TOracleDataSet"}, "datsetpersonsid": {"name": "DatSetPersonsID", "type": "TFloatField"}, "datsetpersonsdescripion": {"name": "DatSetPersonsDESCRIPION", "type": "TWidestringfield"}, "datsrcpersons": {"name": "DatSrcPersons", "type": "TDataSource"}, "datsetcategories": {"name": "DatSetCategories", "type": "TOracleDataSet"}, "datsetcategoriesid": {"name": "DatSetCategoriesID", "type": "TFloatField"}, "datsetcategoriesdescription": {"name": "DatSetCategoriesDESCRIPTION", "type": "TWidestringfield"}, "datsrctcategories": {"name": "DatSrctCategories", "type": "TDataSource"}, "datsetcredittypes": {"name": "DatSetCreditTypes", "type": "TOracleDataSet"}, "datsetcredittypesid": {"name": "DatSetCreditTypesID", "type": "TFloatField"}, "datsetcredittypesdescription": {"name": "DatSetCreditTypesDESCRIPTION", "type": "TWidestringfield"}, "datsrccredittypes": {"name": "DatSrcCreditTypes", "type": "TDataSource"}, "datsetreserves": {"name": "DatSetReserves", "type": "TOracleDataSet"}, "datsetreservesid": {"name": "DatSetReservesID", "type": "TFloatField"}, "datsetreservesdescription": {"name": "DatSetReservesDESCRIPTION", "type": "TWidestringfield"}, "datsrcreserves": {"name": "DatSrcReserves", "type": "TDataSource"}, "reserveinfloanaccno": {"name": "ReserveInfLOANACCNO", "type": "TWidestringfield"}, "reserveinfname": {"name": "ReserveInfNAME", "type": "TWidestringfield"}, "reserveinfdateofconclusion": {"name": "ReserveInfDATEOFCONCLUSION", "type": "TDateTimeField"}, "reserveinfduedatefirstcontract": {"name": "ReserveInfDUEDATEFIRSTCONTRACT", "type": "TDateTimeField"}, "reserveinfduedatelastcontract": {"name": "ReserveInfDUEDATELASTCONTRACT", "type": "TDateTimeField"}, "reserveinfrest": {"name": "ReserveInfREST", "type": "TFloatField"}, "reserveinfpledgeprice": {"name": "ReserveInfPLEDGEPRICE", "type": "TFloatField"}, "reserveinfplanrest": {"name": "ReserveInfPLANREST", "type": "TFloatField"}, "reserveinfrespercent": {"name": "ReserveInfRESPERCENT", "type": "TFloatField"}, "reserveinfpl": {"name": "ReserveInfPL", "type": "TFloatField"}, "reserveinfekrest": {"name": "ReserveInfEKREST", "type": "TFloatField"}, "reserveinfdescription": {"name": "ReserveInfDESCRIPTION", "type": "TWidestringfield"}, "reserveinfodemeli_faiz": {"name": "ReserveInfODEMELI_FAIZ", "type": "TFloatField"}, "reserveinfekv_intrest": {"name": "ReserveInfEKV_INTREST", "type": "TFloatField"}, "reserveinfinterestrest": {"name": "ReserveInfINTERESTREST", "type": "TFloatField"}, "reserveinfstopcalcdate": {"name": "ReserveInfSTOPCALCDATE", "type": "TDateTimeField"}, "reserveinfgrovname": {"name": "ReserveInfGROVNAME", "type": "TWidestringfield"}, "reserveinfpr_numberofcredit": {"name": "ReserveInfPR_NUMBEROFCREDIT", "type": "TWidestringfield"}, "reserveinfresostat": {"name": "ReserveInfRESOSTAT", "type": "TFloatField"}, "reserveinfreserveintrest": {"name": "ReserveInfRESERVEINTREST", "type": "TFloatField"}, "reserveinfduerespercent": {"name": "ReserveInfDUERESPERCENT", "type": "TFloatField"}, "reserveinfdueinterestrest": {"name": "ReserveInfDUEINTERESTREST", "type": "TFloatField"}, "reserveinfekgecfaiz": {"name": "ReserveInfEKGECFAIZ", "type": "TFloatField"}, "reserveinfkefiyet": {"name": "ReserveInfKEFIYET", "type": "TWideStringField"}, "reserveinfehname": {"name": "ReserveInfEHNAME", "type": "TWideStringField"}, "reserveinfgecehname": {"name": "ReserveInfGECEHNAME", "type": "TWideStringField"}, "reserveinffilial": {"name": "ReserveInfFILIAL", "type": "TWideStringField"}, "reserveinfval_name": {"name": "ReserveInfVAL_NAME", "type": "TWideStringField"}}, {});
  U.init(async () => {
    U.var_("dmReserveInf", null, "TdmReserveInf");
  });
  U.method("TdmReserveInf", "checkzero", async function checkzero(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"x": $.copyArg(p0), result: 0};
  await $.fixArgs(L0, ["x"]);
  if ($.truthy($.eq(L0["x"], 0))) {
    L0["result"] = 1;
  } else {
    L0["result"] = L0["x"];
  }
  return L0.result;
}, {"params": ["x"], "kind": "function", "ptypes": ["real"]});
  U.method("TdmReserveInf", "DataModuleCreate", async function DataModuleCreate(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mcall((await $.v(C, "DatSetValute")), "open", []);
  await $.mcall((await $.v(C, "DatSetFilials")), "open", []);
  await $.mcall((await $.v(C, "DatSetPersons")), "open", []);
  await $.mcall((await $.v(C, "DatSetCategories")), "open", []);
  await $.mcall((await $.v(C, "DatSetCreditTypes")), "open", []);
  await $.mcall((await $.v(C, "DatSetReserves")), "open", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TdmReserveInf", "DataModuleDestroy", async function DataModuleDestroy(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mcall((await $.v(C, "DatSetValute")), "Close", []);
  await $.mcall((await $.v(C, "DatSetFilials")), "Close", []);
  await $.mcall((await $.v(C, "DatSetPersons")), "Close", []);
  await $.mcall((await $.v(C, "DatSetCategories")), "Close", []);
  await $.mcall((await $.v(C, "DatSetCreditTypes")), "Close", []);
  await $.mcall((await $.v(C, "DatSetReserves")), "Close", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  return U;
}
