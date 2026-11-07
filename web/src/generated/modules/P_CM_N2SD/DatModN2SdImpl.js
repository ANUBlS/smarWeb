// Generated from DatModN2SdImpl.pas by pas2js — do not edit by hand; regenerate instead.
/* eslint-disable */
// @ts-nocheck

export default function define($) {
  const U = $.unit("DatModN2SdImpl", ["Windows", "Messages", "SysUtils", "Classes", "Graphics", "Controls", "Forms", "Dialogs", "Db", "OracleData", "Oracle", "sboAPIDataModuleImpl"]);
  const C = [U];
  U.defClass("TDatModN2Sd", "TDataModule", {"valdatset": {"name": "ValDatSet", "type": "TOracleDataSet"}, "regdatset": {"name": "RegDatSet", "type": "TOracleDataSet"}, "brdatset": {"name": "BrDatSet", "type": "TOracleDataSet"}, "resultdatset": {"name": "ResultDatSet", "type": "TOracleDataSet"}, "valdatsrc": {"name": "ValDatSrc", "type": "TDataSource"}, "regdatsrc": {"name": "RegDatSrc", "type": "TDataSource"}, "brdatsrc": {"name": "BrDatSrc", "type": "TDataSource"}, "resultdatsetregion_name": {"name": "ResultDatSetREGION_NAME", "type": "TWideStringField"}, "resultdatsetsumgeneralamt": {"name": "ResultDatSetSUMGENERALAMT", "type": "TFloatField"}, "resultdatsetsumnatvalamt": {"name": "ResultDatSetSUMNATVALAMT", "type": "TFloatField"}, "resultdatsetsumfreevalamt": {"name": "ResultDatSetSUMFREEVALAMT", "type": "TFloatField"}, "resultdatsetsumexpiresamt": {"name": "ResultDatSetSUMEXPIRESAMT", "type": "TFloatField"}, "crdinfodatset": {"name": "CrdinfoDatSet", "type": "TOracleDataSet"}, "cm_n3_sd": {"name": "CM_N3_SD", "type": "TOraclePackage"}, "perioddatset": {"name": "PeriodDatSet", "type": "TOracleDataSet"}, "perioddatsrc": {"name": "PeriodDatSrc", "type": "TDataSource"}, "perioddatsetperiod": {"name": "PeriodDatSetPERIOD", "type": "TFloatField"}, "resultdatsetavgamt": {"name": "ResultDatSetAVGAMT", "type": "TFloatField"}, "resultdatsetavgnatvalamt": {"name": "ResultDatSetAVGNATVALAMT", "type": "TFloatField"}, "resultdatsetavgfreevalamt": {"name": "ResultDatSetAVGFREEVALAMT", "type": "TFloatField"}, "resultdatsetsumum_sdv_mv": {"name": "ResultDatSetSUMUM_SDV_MV", "type": "TFloatField"}, "resultdatsetum_sdv_orta": {"name": "ResultDatSetUM_SDV_ORTA", "type": "TFloatField"}, "resultdatsetsumrest": {"name": "ResultDatSetSUMREST", "type": "TFloatField"}, "resultdatsetintrest_orta": {"name": "ResultDatSetINTREST_ORTA", "type": "TFloatField"}, "resultdatsetsumrest_mv": {"name": "ResultDatSetSUMREST_MV", "type": "TFloatField"}, "resultdatsetintrest_orta_mv": {"name": "ResultDatSetINTREST_ORTA_MV", "type": "TFloatField"}, "resultdatsetsumrest_sdv": {"name": "ResultDatSetSUMREST_SDV", "type": "TFloatField"}, "resultdatsetint_sdv_orta": {"name": "ResultDatSetINT_SDV_ORTA", "type": "TFloatField"}, "crdinfodatsetid": {"name": "CrdinfoDatSetID", "type": "TFloatField"}, "crdinfodatsetcurrency": {"name": "CrdinfoDatSetCURRENCY", "type": "TFloatField"}, "crdinfodatsetcustomertype": {"name": "CrdinfoDatSetCUSTOMERTYPE", "type": "TFloatField"}, "crdinfodatsetbranchid": {"name": "CrdinfoDatSetBRANCHID", "type": "TFloatField"}, "crdinfodatsetperiod": {"name": "CrdinfoDatSetPERIOD", "type": "TFloatField"}}, {});
  U.init(async () => {
    U.var_("DatModN2Sd", null, "TDatModN2Sd");
  });
  U.method("TDatModN2Sd", "DataModuleCreate", async function DataModuleCreate(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mcall((await $.v(C, "ValDatSet")), "Open", []);
  await $.mcall((await $.v(C, "RegDatSet")), "Open", []);
  await $.mcall((await $.v(C, "BrDatSet")), "Open", []);
  await $.mcall((await $.v(C, "CrdinfoDatSet")), "Open", []);
  await $.mcall((await $.v(C, "PeriodDatSet")), "Open", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TDatModN2Sd", "DataModuleDestroy", async function DataModuleDestroy(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mcall((await $.v(C, "ValDatSet")), "CloseAll", []);
  await $.mcall((await $.v(C, "RegDatSet")), "CloseAll", []);
  await $.mcall((await $.v(C, "BrDatSet")), "CloseAll", []);
  await $.mcall((await $.v(C, "PeriodDatSet")), "CloseAll", []);
  await $.mcall((await $.v(C, "CrdinfoDatSet")), "CloseAll", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  return U;
}
