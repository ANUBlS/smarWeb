// Generated from IntCalcDataModImpl.pas by pas2js — do not edit by hand; regenerate instead.
/* eslint-disable */
// @ts-nocheck

export default function define($) {
  const U = $.unit("IntCalcDataModImpl", ["Windows", "Messages", "SysUtils", "Classes", "Graphics", "Controls", "Forms", "Dialogs", "Oracle", "DB", "OracleData", "sboapiDataModuleImpl"]);
  const C = [U];
  U.defClass("TDefineCalcDatMod", "TDataModule", {"cm_credits": {"name": "CM_CREDITS", "type": "TOraclePackage"}, "oracledataset1": {"name": "OracleDataSet1", "type": "TOracleDataSet"}, "datasource1": {"name": "DataSource1", "type": "TDataSource"}, "oracledataset2": {"name": "OracleDataSet2", "type": "TOracleDataSet"}, "oracledataset2id": {"name": "OracleDataSet2ID", "type": "TFloatField"}, "oracledataset2creditid": {"name": "OracleDataSet2CREDITID", "type": "TFloatField"}, "oracledataset2hdate": {"name": "OracleDataSet2HDATE", "type": "TDateTimeField"}, "oracledataset2enddat": {"name": "OracleDataSet2ENDDAT", "type": "TDateTimeField"}, "oracledataset2interest": {"name": "OracleDataSet2INTEREST", "type": "TFloatField"}, "oracledataset2dueinterest": {"name": "OracleDataSet2DUEINTEREST", "type": "TFloatField"}, "oracledataset2status": {"name": "OracleDataSet2STATUS", "type": "TFloatField"}, "oracledataset2startdat": {"name": "OracleDataSet2STARTDAT", "type": "TDateTimeField"}, "oracledataset2faiz": {"name": "OracleDataSet2faiz", "type": "TWideStringField"}, "oracledataset2duefaiz": {"name": "OracleDataSet2duefaiz", "type": "TWideStringField"}}, {});
  U.init(async () => {
    U.var_("DefineCalcDatMod", null, "TDefineCalcDatMod");
  });
  U.method("TDefineCalcDatMod", "DataModuleCreate", async function DataModuleCreate(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mcall((await $.v(C, "OracleDataSet2")), "Open", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TDefineCalcDatMod", "DataModuleDestroy", async function DataModuleDestroy(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mcall((await $.v(C, "OracleDataSet2")), "Close", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TDefineCalcDatMod", "OracleDataSet2CalcFields", async function OracleDataSet2CalcFields(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"dataset": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["dataset"]);
  return L0.result;
}, {"params": ["DataSet"], "kind": "procedure", "ptypes": ["TDataSet"]});
  U.method("TDefineCalcDatMod", "OracleDataSet3CalcFields", async function OracleDataSet3CalcFields(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"dataset": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["dataset"]);
  if ($.truthy((await $.mv((await $.v(C, "OracleDataSet2INTEREST")), "IsNull")))) {
    if ($.truthy($.eq((await $.mv((await $.v(C, "OracleDataSet2INTEREST")), "AsInteger")), 1))) {
      await $.mset((await $.v(C, "OracleDataSet2faiz")), "AsString", "Faiz dayanıb");
    }
  }
  if ($.truthy($.not((await $.mv((await $.v(C, "OracleDataSet2DUEINTEREST")), "IsNull"))))) {
    if ($.truthy($.eq((await $.mv((await $.v(C, "OracleDataSet2DUEINTEREST")), "AsInteger")), 1))) {
      await $.mset((await $.v(C, "OracleDataSet2duefaiz")), "AsString", "Gec faiz dayanıb");
    }
  }
  if ($.truthy($.not((await $.mv((await $.v(C, "OracleDataSet2STATUS")), "IsNull"))))) {
    if ($.truthy($.eq((await $.mv((await $.v(C, "OracleDataSet2STATUS")), "AsInteger")), 1))) {
      await $.mset((await $.v(C, "OracleDataSet2duefaiz")), "AsString", "Tam dayanıb");
      await $.mset((await $.v(C, "OracleDataSet2faiz")), "AsString", "Tam dayanıb");
    }
  }
  return L0.result;
}, {"params": ["DataSet"], "kind": "procedure", "ptypes": ["TDataSet"]});
  return U;
}
