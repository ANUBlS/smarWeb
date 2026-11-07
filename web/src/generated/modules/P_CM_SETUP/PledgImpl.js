// Generated from PledgImpl.pas by pas2js — do not edit by hand; regenerate instead.
/* eslint-disable */
// @ts-nocheck

export default function define($) {
  const U = $.unit("PledgImpl", ["Windows", "Messages", "SysUtils", "Classes", "Graphics", "Controls", "Forms", "Dialogs", "DBCtrls", "Db", "OracleData", "ExtCtrls", "Grids", "DBGridEh", "DBGrids", "StdCtrls", "DBGridEhGrouping", "GridsEh", "sboapiDataModuleImpl"]);
  const C = [U];
  U.defClass("TPledgForm", "TForm", {"panel1": {"name": "Panel1", "type": "TPanel"}, "datasourceplegds": {"name": "DataSourcePlegds", "type": "TDataSource"}, "plegds": {"name": "Plegds", "type": "TOracleDataSet"}, "dbnavigator1": {"name": "DBNavigator1", "type": "TDBNavigator"}, "plegdstypecode": {"name": "PlegdsTYPECODE", "type": "TWideStringField"}, "plegdsdescription": {"name": "PlegdsDESCRIPTION", "type": "TWideStringField"}, "plegdsneedplaceout": {"name": "PlegdsNEEDPLACEOUT", "type": "TFloatField"}, "plegdstemid": {"name": "PlegdsTEMID", "type": "TFloatField"}, "plegdsid": {"name": "PlegdsID", "type": "TFloatField"}, "plegdspurcode": {"name": "PlegdsPURCODE", "type": "TWideStringField"}, "plegdsoutbal_cin": {"name": "PlegdsOUTBAL_CIN", "type": "TWideStringField"}, "groupbox1": {"name": "GroupBox1", "type": "TGroupBox"}, "dbgrideh1": {"name": "DBGridEh1", "type": "TDBGridEh"}, "groupbox2": {"name": "GroupBox2", "type": "TGroupBox"}, "dbgrid1": {"name": "DBGrid1", "type": "TDBGrid"}, "dbnavigator2": {"name": "DBNavigator2", "type": "TDBNavigator"}, "datasource1": {"name": "DataSource1", "type": "TDataSource"}, "oracledataset1": {"name": "OracleDataSet1", "type": "TOracleDataSet"}, "oracledataset1id": {"name": "OracleDataSet1ID", "type": "TFloatField"}, "oracledataset1name": {"name": "OracleDataSet1NAME", "type": "TWideStringField"}, "oracledataset1pldid": {"name": "OracleDataSet1PLDID", "type": "TFloatField"}, "oracledataset1hesabkod": {"name": "OracleDataSet1HESABKOD", "type": "TWideStringField"}, "oracledataset1outbal_cin": {"name": "OracleDataSet1OUTBAL_CIN", "type": "TWideStringField"}, "plegdspecent": {"name": "PlegdsPECENT", "type": "TFloatField"}}, {});
  U.init(async () => {
    U.var_("PledgForm", null, "TPledgForm");
  });
  U.method("TPledgForm", "FormShow", async function FormShow(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mcall((await $.v(C, "Plegds")), "open", []);
  await $.mcall((await $.v(C, "OracleDataSet1")), "Open", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TPledgForm", "FormClose", async function FormClose(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "action": $.asRef(p1), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mcall((await $.v(C, "Plegds")), "CloseAll", []);
  await $.mcall((await $.v(C, "OracleDataSet1")), "CloseAll", []);
  return L0.result;
}, {"params": ["Sender", "Action"], "kind": "procedure", "ptypes": ["TObject", "TCloseAction"]});
  U.method("TPledgForm", "FormCanResize", async function FormCanResize(Self, p0, p1, p2, p3) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "newwidth": $.asRef(p1), "newheight": $.asRef(p2), "resize": $.asRef(p3), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await L0["resize"].set(false);
  return L0.result;
}, {"params": ["Sender", "NewWidth", "NewHeight", "Resize"], "kind": "procedure", "ptypes": ["TObject", "Integer", "Integer", "Boolean"]});
  U.method("TPledgForm", "FormKeyPress", async function FormKeyPress(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "key": $.asRef(p1), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.eq((await $.call(C, "ord", [(await L0["key"].get())])), (await $.v(C, "VK_ESCAPE"))))) {
    await $.stmt($.call(C, "close", []));
  }
  return L0.result;
}, {"params": ["Sender", "Key"], "kind": "procedure", "ptypes": ["TObject", "Char"]});
  return U;
}
