// Generated from UnitGoaml.pas by pas2js — do not edit by hand; regenerate instead.
/* eslint-disable */
// @ts-nocheck

export default function define($) {
  const U = $.unit("UnitGoaml", ["Windows", "Messages", "SysUtils", "Variants", "Classes", "Graphics", "Controls", "Forms", "Dialogs", "Grids", "DBGrids", "DB", "OracleData", "sboapiDataModuleImpl", "UnitReportCode"]);
  const C = [U];
  U.defClass("TFormGo", "TForm", {"dbgrid1": {"name": "DBGrid1", "type": "TDBGrid"}, "oracledataset1": {"name": "OracleDataSet1", "type": "TOracleDataSet"}, "oracledataset2": {"name": "OracleDataSet2", "type": "TOracleDataSet"}, "datasource1": {"name": "DataSource1", "type": "TDataSource"}, "oracledataset2id": {"name": "OracleDataSet2ID", "type": "TIntegerField"}, "oracledataset2name": {"name": "OracleDataSet2NAME", "type": "TWideStringField"}, "oracledataset2description": {"name": "OracleDataSet2DESCRIPTION", "type": "TWideStringField"}, "oracledataset1report_code": {"name": "OracleDataSet1REPORT_CODE", "type": "TWideStringField"}, "oracledataset1transmode_code": {"name": "OracleDataSet1TRANSMODE_CODE", "type": "TIntegerField"}, "oracledataset1id": {"name": "OracleDataSet1ID", "type": "TFloatField"}, "oracledataset1debitbalance": {"name": "OracleDataSet1DEBITBALANCE", "type": "TFloatField"}, "oracledataset1creditbalance": {"name": "OracleDataSet1CREDITBALANCE", "type": "TFloatField"}, "oracledataset1debitaccno": {"name": "OracleDataSet1DEBITACCNO", "type": "TWideStringField"}, "oracledataset1creditaccno": {"name": "OracleDataSet1CREDITACCNO", "type": "TWideStringField"}, "oracledataset1debitamount": {"name": "OracleDataSet1DEBITAMOUNT", "type": "TFloatField"}, "oracledataset1creditamount": {"name": "OracleDataSet1CREDITAMOUNT", "type": "TFloatField"}, "oracledataset1debitrate": {"name": "OracleDataSet1DEBITRATE", "type": "TFloatField"}, "oracledataset1creditrate": {"name": "OracleDataSet1CREDITRATE", "type": "TFloatField"}}, {});
  U.init(async () => {
    U.var_("FormGo", null, "TFormGo");
  });
  U.method("TFormGo", "DBGrid1DblClick", async function DBGrid1DblClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mcall((await $.v(C, "FormReportCode")), "ShowModal", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFormGo", "FormCreate", async function FormCreate(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.set(C, "FormReportCode", (await $.mcall((await $.v(C, "TFormReportCode")), "create", [Self])));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFormGo", "FormShow", async function FormShow(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mcall((await $.v(C, "OracleDataSet1")), "Open", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  return U;
}
