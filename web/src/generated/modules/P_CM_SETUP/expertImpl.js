// Generated from expertImpl.pas by pas2js — do not edit by hand; regenerate instead.
/* eslint-disable */
// @ts-nocheck

export default function define($) {
  const U = $.unit("expertImpl", ["Windows", "Messages", "SysUtils", "Classes", "Graphics", "Controls", "Forms", "Dialogs", "Db", "OracleData", "ExtCtrls", "DBCtrls", "Grids", "DBGrids", "ComCtrls", "DBGridEhGrouping", "GridsEh", "DBGridEh", "sboapiDataModuleImpl"]);
  const C = [U];
  U.defClass("TExpert", "TForm", {"oracledataset1": {"name": "OracleDataSet1", "type": "TOracleDataSet"}, "datasource1": {"name": "DataSource1", "type": "TDataSource"}, "oracledataset2": {"name": "OracleDataSet2", "type": "TOracleDataSet"}, "oracledataset1id": {"name": "OracleDataSet1ID", "type": "TFloatField"}, "oracledataset1code": {"name": "OracleDataSet1CODE", "type": "TWideStringField"}, "oracledataset1name": {"name": "OracleDataSet1NAME", "type": "TWideStringField"}, "oracledataset1filialid": {"name": "OracleDataSet1FILIALID", "type": "TFloatField"}, "oracledataset2id": {"name": "OracleDataSet2ID", "type": "TFloatField"}, "oracledataset2name": {"name": "OracleDataSet2NAME", "type": "TWideStringField"}, "oracledataset1filid": {"name": "OracleDataSet1filid", "type": "TWideStringField"}, "pagecontrol1": {"name": "PageControl1", "type": "TPageControl"}, "tabsheet1": {"name": "TabSheet1", "type": "TTabSheet"}, "dbgrid1": {"name": "DBGrid1", "type": "TDBGrid"}, "tabsheet2": {"name": "TabSheet2", "type": "TTabSheet"}, "dbgrid2": {"name": "DBGrid2", "type": "TDBGrid"}, "oracledataset3": {"name": "OracleDataSet3", "type": "TOracleDataSet"}, "datasource2": {"name": "DataSource2", "type": "TDataSource"}, "dbnavigator2": {"name": "DBNavigator2", "type": "TDBNavigator"}, "tabsheet3": {"name": "TabSheet3", "type": "TTabSheet"}, "dbnavigator3": {"name": "DBNavigator3", "type": "TDBNavigator"}, "oracledataset4": {"name": "OracleDataSet4", "type": "TOracleDataSet"}, "datasource3": {"name": "DataSource3", "type": "TDataSource"}, "dbgrid3": {"name": "DBGrid3", "type": "TDBGrid"}, "tabsheet4": {"name": "TabSheet4", "type": "TTabSheet"}, "problemlidset": {"name": "ProblemliDSet", "type": "TOracleDataSet"}, "problemlidsrc": {"name": "ProblemliDSrc", "type": "TDataSource"}, "dbgrid4": {"name": "DBGrid4", "type": "TDBGrid"}, "dbnavigator1": {"name": "DBNavigator1", "type": "TDBNavigator"}, "dbgrid5": {"name": "DBGrid5", "type": "TDBGrid"}, "dbnavigator4": {"name": "DBNavigator4", "type": "TDBNavigator"}, "probuserdset": {"name": "ProbUserDSet", "type": "TOracleDataSet"}, "probusersrc": {"name": "ProbUserSrc", "type": "TDataSource"}, "probuserdsetid": {"name": "ProbUserDSetID", "type": "TFloatField"}, "probuserdsetdue_id": {"name": "ProbUserDSetDUE_ID", "type": "TFloatField"}, "probuserdsetuserid": {"name": "ProbUserDSetUSERID", "type": "TFloatField"}, "userdset": {"name": "UserDSet", "type": "TOracleDataSet"}, "usersrc": {"name": "UserSrc", "type": "TDataSource"}, "userdsetid": {"name": "UserDSetID", "type": "TFloatField"}, "userdsetname": {"name": "UserDSetNAME", "type": "TWideStringField"}, "problemlidsetid": {"name": "ProblemliDSetID", "type": "TFloatField"}, "problemlidsetbday": {"name": "ProblemliDSetBDAY", "type": "TFloatField"}, "problemlidseteday": {"name": "ProblemliDSetEDAY", "type": "TFloatField"}, "probuserdsetuname": {"name": "ProbUserDSetuname", "type": "TStringField"}, "oracledataset5": {"name": "OracleDataSet5", "type": "TOracleDataSet"}, "datasource4": {"name": "DataSource4", "type": "TDataSource"}, "dbgrid6": {"name": "DBGrid6", "type": "TDBGrid"}, "dbnavigator5": {"name": "DBNavigator5", "type": "TDBNavigator"}, "oracledataset5id": {"name": "OracleDataSet5ID", "type": "TFloatField"}, "oracledataset5qovid": {"name": "OracleDataSet5QOVID", "type": "TFloatField"}, "oracledataset5usnam": {"name": "OracleDataSet5USNAM", "type": "TWideStringField"}, "oracledataset5username": {"name": "OracleDataSet5username", "type": "TStringField"}, "dbgrid7": {"name": "DBGrid7", "type": "TDBGrid"}, "oracledataset6": {"name": "OracleDataSet6", "type": "TOracleDataSet"}, "datasource5": {"name": "DataSource5", "type": "TDataSource"}, "dbnavigator6": {"name": "DBNavigator6", "type": "TDBNavigator"}, "oracledataset1phone": {"name": "OracleDataSet1PHONE", "type": "TWideStringField"}, "oracledataset4id": {"name": "OracleDataSet4ID", "type": "TFloatField"}, "oracledataset4description": {"name": "OracleDataSet4DESCRIPTION", "type": "TWideStringField"}, "oracledataset4acc_no": {"name": "OracleDataSet4ACC_NO", "type": "TWideStringField"}, "oracledataset4acc_no1": {"name": "OracleDataSet4ACC_NO1", "type": "TWideStringField"}, "oracledataset4acc_no2": {"name": "OracleDataSet4ACC_NO2", "type": "TWideStringField"}}, {});
  U.init(async () => {
    U.var_("Expert", null, "TExpert");
  });
  U.method("TExpert", "FormCanResize", async function FormCanResize(Self, p0, p1, p2, p3) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "newwidth": $.asRef(p1), "newheight": $.asRef(p2), "resize": $.asRef(p3), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await L0["resize"].set(false);
  return L0.result;
}, {"params": ["Sender", "NewWidth", "NewHeight", "Resize"], "kind": "procedure", "ptypes": ["TObject", "Integer", "Integer", "Boolean"]});
  U.method("TExpert", "FormCreate", async function FormCreate(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mset((await $.idx((await $.mv((await $.v(C, "PageControl1")), "Pages")), [3])), "TabVisible", false);
  await $.mcall((await $.v(C, "OracleDataSet1")), "open", []);
  await $.mcall((await $.v(C, "OracleDataSet2")), "open", []);
  await $.mcall((await $.v(C, "OracleDataSet3")), "open", []);
  await $.mcall((await $.v(C, "OracleDataSet4")), "open", []);
  await $.mcall((await $.v(C, "OracleDataSet5")), "open", []);
  await $.mcall((await $.v(C, "ProblemliDSet")), "Open", []);
  await $.mcall((await $.v(C, "ProbUserDSet")), "Open", []);
  await $.mcall((await $.v(C, "UserDSet")), "Open", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TExpert", "FormDestroy", async function FormDestroy(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mcall((await $.v(C, "OracleDataSet1")), "close", []);
  await $.mcall((await $.v(C, "OracleDataSet2")), "close", []);
  await $.mcall((await $.v(C, "OracleDataSet3")), "close", []);
  await $.mcall((await $.v(C, "OracleDataSet4")), "close", []);
  await $.mcall((await $.v(C, "OracleDataSet5")), "close", []);
  await $.mcall((await $.v(C, "ProblemliDSet")), "close", []);
  await $.mcall((await $.v(C, "ProbUserDSet")), "close", []);
  await $.mcall((await $.v(C, "UserDSet")), "close", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  return U;
}
