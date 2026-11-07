// Generated from YoneltmeImpl.pas by pas2js — do not edit by hand; regenerate instead.
/* eslint-disable */
// @ts-nocheck

export default function define($) {
  const U = $.unit("YoneltmeImpl", ["Windows", "Messages", "SysUtils", "Variants", "Classes", "Graphics", "Controls", "Forms", "Dialogs", "ExtCtrls", "DBCtrls", "Grids", "DBGrids", "DB", "OracleData", "DBGridEhGrouping", "GridsEh", "DBGridEh", "sboapiDataModuleImpl", "BPMainFormImpl"]);
  const C = [U];
  U.defClass("TYoneltmeFrm", "TForm", {"dbnavigator1": {"name": "DBNavigator1", "type": "TDBNavigator"}, "oracledataset1": {"name": "OracleDataSet1", "type": "TOracleDataSet"}, "datasource1": {"name": "DataSource1", "type": "TDataSource"}, "oracledataset1name": {"name": "OracleDataSet1NAME", "type": "TWideStringField"}, "oracledataset1wherefrom": {"name": "OracleDataSet1WHEREFROM", "type": "TWideStringField"}, "oracledataset1ammount": {"name": "OracleDataSet1AMMOUNT", "type": "TFloatField"}, "oracledataset1creditid": {"name": "OracleDataSet1CREDITID", "type": "TFloatField"}, "oracledataset1id": {"name": "OracleDataSet1ID", "type": "TFloatField"}, "oracledataset1dat": {"name": "OracleDataSet1DAT", "type": "TDateTimeField"}, "dbgrideh1": {"name": "DBGridEh1", "type": "TDBGridEh"}}, {});
  U.init(async () => {
    U.var_("YoneltmeFrm", null, "TYoneltmeFrm");
  });
  U.method("TYoneltmeFrm", "FormClose", async function FormClose(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "action": $.asRef(p1), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mcall((await $.v(C, "YoneltmeFrm")), "Free", []);
  return L0.result;
}, {"params": ["Sender", "Action"], "kind": "procedure", "ptypes": ["TObject", "TCloseAction"]});
  U.method("TYoneltmeFrm", "FormShow", async function FormShow(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mcall((await $.v(C, "OracleDataSet1")), "Close", []);
  await $.stmt((await $.mcall((await $.v(C, "OracleDataSet1")), "SetVariable", ["creditid", (await $.v(C, "CrdID"))])));
  await $.mcall((await $.v(C, "OracleDataSet1")), "open", []);
  await $.mset((await $.v(C, "OracleDataSet1CREDITID")), "AsInteger", (await $.v(C, "CrdID")));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TYoneltmeFrm", "OracleDataSet1ApplyRecord", async function OracleDataSet1ApplyRecord(Self, p0, p1, p2, p3) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "action": $.copyArg(p1), "applied": $.asRef(p2), "newrowid": $.asRef(p3), result: undefined};
  await $.fixArgs(L0, ["sender", "action"]);
  await $.mset((await $.v(C, "OracleDataSet1CREDITID")), "AsInteger", (await $.v(C, "CrdID")));
  return L0.result;
}, {"params": ["Sender", "Action", "Applied", "NewRowId"], "kind": "procedure", "ptypes": ["TOracleDataSet", "Char", "Boolean", "String"]});
  return U;
}
