// Generated from ExpertDataModule.pas by pas2js — do not edit by hand; regenerate instead.
/* eslint-disable */
// @ts-nocheck

export default function define($) {
  const U = $.unit("ExpertDataModule", ["Windows", "Messages", "SysUtils", "Classes", "Graphics", "Controls", "Forms", "Dialogs", "Db", "OracleData", "sboapiDataModuleImpl", "ExpertAnalysImpl"]);
  const C = [U];
  U.defClass("TExpertDataModul", "TDataModule", {"operations": {"name": "Operations", "type": "TOracleDataSet"}, "operationsid": {"name": "OperationsID", "type": "TFloatField"}, "operationsdata": {"name": "OperationsData", "type": "TDataSource"}, "operations_balance": {"name": "Operations_balance", "type": "TOracleDataSet"}, "balancesdata": {"name": "BalancesData", "type": "TDataSource"}, "currency": {"name": "Currency", "type": "TOracleDataSet"}, "report": {"name": "Report", "type": "TOracleDataSet"}, "sysdat": {"name": "Sysdat", "type": "TOracleDataSet"}, "reportoperationid": {"name": "ReportOPERATIONID", "type": "TFloatField"}, "reportbal_cn": {"name": "ReportBAL_CN", "type": "TFloatField"}, "reportacc_id": {"name": "ReportACC_ID", "type": "TFloatField"}, "reportval_acc": {"name": "ReportVAL_ACC", "type": "TIntegerField"}, "trafficsdata": {"name": "TrafficsData", "type": "TDataSource"}, "traffics": {"name": "Traffics", "type": "TOracleDataSet"}, "trafficsrecordno": {"name": "TrafficsRecordNo", "type": "TIntegerField"}, "accounts": {"name": "Accounts", "type": "TOracleDataSet"}, "balances": {"name": "Balances", "type": "TOracleDataSet"}, "schemas": {"name": "Schemas", "type": "TOracleDataSet"}, "schemasdata": {"name": "SchemasData", "type": "TDataSource"}, "operationsschemaid": {"name": "OperationsSCHEMAID", "type": "TFloatField"}, "schemasid": {"name": "SchemasID", "type": "TFloatField"}, "operations_balanceid": {"name": "Operations_balanceID", "type": "TFloatField"}, "operations_balanceoperationid": {"name": "Operations_balanceOPERATIONID", "type": "TFloatField"}, "operations_balancebalance": {"name": "Operations_balanceBALANCE", "type": "TFloatField"}, "operations_balanceaccgroup": {"name": "Operations_balanceACCGROUP", "type": "TFloatField"}, "operations_balanceclass": {"name": "Operations_balanceCLASS", "type": "TFloatField"}, "totaltraffics": {"name": "TotalTraffics", "type": "TOracleDataSet"}, "totaltrafficsdata": {"name": "TotalTrafficsData", "type": "TDataSource"}, "totaltrafficsbal_cn1": {"name": "TotalTrafficsBAL_CN1", "type": "TFloatField"}, "totaltrafficsostat": {"name": "TotalTrafficsOSTAT", "type": "TFloatField"}, "totaltrafficspok_ostat": {"name": "TotalTrafficsPOK_OSTAT", "type": "TFloatField"}, "totaltrafficsrecordn": {"name": "TotalTrafficsRecordN", "type": "TIntegerField"}, "schematraffics": {"name": "SchemaTraffics", "type": "TOracleDataSet"}, "schematrafficsdata": {"name": "SchemaTrafficsData", "type": "TDataSource"}, "schematrafficsid": {"name": "SchemaTrafficsID", "type": "TFloatField"}, "schematrafficsostat": {"name": "SchemaTrafficsOSTAT", "type": "TFloatField"}, "schematrafficspok_ostat": {"name": "SchemaTrafficsPOK_OSTAT", "type": "TFloatField"}, "reportschemaid": {"name": "ReportSCHEMAID", "type": "TFloatField"}, "reportdecimalostat": {"name": "ReportDecimalOstat", "type": "TFloatField"}, "reportdecimalpokostat": {"name": "ReportDecimalPokOstat", "type": "TFloatField"}, "totaltrafficsdebtturnover": {"name": "TotalTrafficsDEBTTURNOVER", "type": "TFloatField"}, "totaltrafficsdebtpokturnover": {"name": "TotalTrafficsDEBTPOKTURNOVER", "type": "TFloatField"}, "totaltrafficscreditturnover": {"name": "TotalTrafficsCREDITTURNOVER", "type": "TFloatField"}, "totaltrafficscreditpokturnover": {"name": "TotalTrafficsCREDITPOKTURNOVER", "type": "TFloatField"}, "schematrafficsdebtturnover": {"name": "SchemaTrafficsDEBTTURNOVER", "type": "TFloatField"}, "schematrafficsdebtpokturnover": {"name": "SchemaTrafficsDEBTPOKTURNOVER", "type": "TFloatField"}, "schematrafficscreditturnover": {"name": "SchemaTrafficsCREDITTURNOVER", "type": "TFloatField"}, "schematrafficscreditpokturnover": {"name": "SchemaTrafficsCREDITPOKTURNOVER", "type": "TFloatField"}, "databranch": {"name": "DataBranch", "type": "TDataSource"}, "branch": {"name": "Branch", "type": "TOracleDataSet"}, "trafficsbal_cn": {"name": "TrafficsBAL_CN", "type": "TFloatField"}, "trafficsval_acc": {"name": "TrafficsVAL_ACC", "type": "TIntegerField"}, "trafficsbeginrest": {"name": "TrafficsBEGINREST", "type": "TFloatField"}, "trafficsbeginlrest": {"name": "TrafficsBEGINLREST", "type": "TFloatField"}, "trafficsdebtturnover": {"name": "TrafficsDEBTTURNOVER", "type": "TFloatField"}, "trafficsdebtpokturnover": {"name": "TrafficsDEBTPOKTURNOVER", "type": "TFloatField"}, "trafficscreditturnover": {"name": "TrafficsCREDITTURNOVER", "type": "TFloatField"}, "trafficscreditpokturnover": {"name": "TrafficsCREDITPOKTURNOVER", "type": "TFloatField"}, "trafficslastrest": {"name": "TrafficsLASTREST", "type": "TFloatField"}, "trafficslastlrest": {"name": "TrafficsLASTLREST", "type": "TFloatField"}, "perioddata": {"name": "PeriodData", "type": "TOracleDataSet"}, "accflags": {"name": "AccFlags", "type": "TOracleDataSet"}, "reportlastrest": {"name": "ReportLASTREST", "type": "TFloatField"}, "reportlastlrest": {"name": "ReportLASTLREST", "type": "TFloatField"}, "schemasschema": {"name": "SchemasSCHEMA", "type": "TWideStringField"}, "operationsoperation": {"name": "OperationsOPERATION", "type": "TWideStringField"}, "operations_balanceaccno": {"name": "Operations_balanceACCNO", "type": "TWideStringField"}, "operations_balancetipacc": {"name": "Operations_balanceTIPACC", "type": "TWideStringField"}, "reporttype": {"name": "ReportTYPE", "type": "TWideStringField"}, "reportacc_no": {"name": "ReportACC_NO", "type": "TWideStringField"}, "reportname": {"name": "ReportNAME", "type": "TWideStringField"}, "reportval_name": {"name": "ReportVAL_NAME", "type": "TWideStringField"}, "reportoperation": {"name": "ReportOPERATION", "type": "TWideStringField"}, "trafficstype": {"name": "TrafficsTYPE", "type": "TWideStringField"}, "trafficsacc_no": {"name": "TrafficsACC_NO", "type": "TWideStringField"}, "trafficsname": {"name": "TrafficsNAME", "type": "TWideStringField"}, "trafficsval_name": {"name": "TrafficsVAL_NAME", "type": "TWideStringField"}, "totaltrafficsbalname": {"name": "TotalTrafficsBALNAME", "type": "TWideStringField"}, "totaltrafficstype": {"name": "TotalTrafficsTYPE", "type": "TWideStringField"}, "schematrafficsoperation": {"name": "SchemaTrafficsOPERATION", "type": "TWideStringField"}}, {});
  U.init(async () => {
    U.var_("ExpertDataModul", null, "TExpertDataModul");
  });
  U.method("TExpertDataModul", "ReportCalcFields", async function ReportCalcFields(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"dataset": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["dataset"]);
  {
    const $t1 = L0["dataset"];
    const $t2 = (await $.wv([$t1], "ExpertAnalysX", C, false));
    await $.mset((await $.wcall([$t1, $t2], "FieldByName", ["LASTREST"], C)), "AsFloat", $.fdiv((await $.mv((await $.wcall([$t1, $t2], "FieldByName", ["LASTREST"], C)), "AsFloat")), (await $.mv((await $.mv((await $.wv([$t1, $t2], "ExpertAnalysX", C, false)), "CEDecimal")), "Value"))));
    await $.mset((await $.wcall([$t1, $t2], "FieldByName", ["LASTLREST"], C)), "AsFloat", $.fdiv((await $.mv((await $.wcall([$t1, $t2], "FieldByName", ["LASTLREST"], C)), "AsFloat")), (await $.mv((await $.mv((await $.wv([$t1, $t2], "ExpertAnalysX", C, false)), "CEDecimal")), "Value"))));
  }
  return L0.result;
}, {"params": ["DataSet"], "kind": "procedure", "ptypes": ["TDataSet"]});
  U.method("TExpertDataModul", "TrafficsRecordNoGetText", async function TrafficsRecordNoGetText(Self, p0, p1, p2) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "text": $.asRef(p1), "displaytext": $.copyArg(p2), result: undefined};
  await $.fixArgs(L0, ["sender", "displaytext"]);
  await L0["text"].set((await $.call(C, "IntToStr", [(await $.mv((await $.v(C, "Traffics")), "RecNo"))])));
  return L0.result;
}, {"params": ["Sender", "Text", "DisplayText"], "kind": "procedure", "ptypes": ["TField", "String", "Boolean"]});
  U.method("TExpertDataModul", "SchemasAfterPost", async function SchemasAfterPost(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"dataset": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["dataset"]);
  await $.mcall(L0["dataset"], "Refresh", []);
  return L0.result;
}, {"params": ["DataSet"], "kind": "procedure", "ptypes": ["TDataSet"]});
  U.method("TExpertDataModul", "TotalTrafficsRecordNGetText", async function TotalTrafficsRecordNGetText(Self, p0, p1, p2) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "text": $.asRef(p1), "displaytext": $.copyArg(p2), result: undefined};
  await $.fixArgs(L0, ["sender", "displaytext"]);
  await L0["text"].set((await $.call(C, "IntToStr", [(await $.mv((await $.v(C, "TotalTraffics")), "RecNo"))])));
  return L0.result;
}, {"params": ["Sender", "Text", "DisplayText"], "kind": "procedure", "ptypes": ["TField", "String", "Boolean"]});
  return U;
}
