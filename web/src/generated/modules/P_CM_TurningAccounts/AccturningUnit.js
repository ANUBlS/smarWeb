// Generated from AccturningUnit.pas by pas2js — do not edit by hand; regenerate instead.
/* eslint-disable */
// @ts-nocheck

export default function define($) {
  const U = $.unit("AccturningUnit", ["Windows", "Messages", "SysUtils", "Classes", "Graphics", "Controls", "Forms", "Dialogs", "StdCtrls", "DBCtrls", "Db", "OracleData", "Grids", "DBGridEh", "ExtCtrls", "NLSLocalizer", "ComCtrls", "DBGrids", "DBGridEhGrouping", "GridsEh", "sboapiDataModuleImpl", "CommonDecls", "SBTranslateProc"]);
  const C = [U];
  U.defClass("TFormAccTurning", "TForm", {"oracledataset1": {"name": "OracleDataSet1", "type": "TOracleDataSet"}, "oracledataset2": {"name": "OracleDataSet2", "type": "TOracleDataSet"}, "datasource1": {"name": "DataSource1", "type": "TDataSource"}, "datasource2": {"name": "DataSource2", "type": "TDataSource"}, "pagecontrolmain": {"name": "PageControlMain", "type": "TPageControl"}, "tabsheet1": {"name": "TabSheet1", "type": "TTabSheet"}, "tabsheet2": {"name": "TabSheet2", "type": "TTabSheet"}, "groupbox1": {"name": "GroupBox1", "type": "TGroupBox"}, "dbgrideh1": {"name": "DBGridEh1", "type": "TDBGridEh"}, "panel1": {"name": "Panel1", "type": "TPanel"}, "dbnavigator1": {"name": "DBNavigator1", "type": "TDBNavigator"}, "groupbox2": {"name": "GroupBox2", "type": "TGroupBox"}, "dbgrideh2": {"name": "DBGridEh2", "type": "TDBGridEh"}, "panel2": {"name": "Panel2", "type": "TPanel"}, "dbnavigator2": {"name": "DBNavigator2", "type": "TDBNavigator"}, "panel3": {"name": "Panel3", "type": "TPanel"}, "button1": {"name": "Button1", "type": "TButton"}, "groupbox3": {"name": "GroupBox3", "type": "TGroupBox"}, "panel4": {"name": "Panel4", "type": "TPanel"}, "button2": {"name": "Button2", "type": "TButton"}, "groupbox4": {"name": "GroupBox4", "type": "TGroupBox"}, "dbgrideh3": {"name": "DBGridEh3", "type": "TDBGridEh"}, "dbgrideh4": {"name": "DBGridEh4", "type": "TDBGridEh"}, "usergroups": {"name": "UserGroups", "type": "TOracleDataSet"}, "filials": {"name": "Filials", "type": "TOracleDataSet"}, "usergroupsdatsrc": {"name": "UserGroupsDatSrc", "type": "TDataSource"}, "filialsdatsrc": {"name": "FilialsDatSrc", "type": "TDataSource"}, "tabsheet3": {"name": "TabSheet3", "type": "TTabSheet"}, "datasource3": {"name": "DataSource3", "type": "TDataSource"}, "oracledataset3": {"name": "OracleDataSet3", "type": "TOracleDataSet"}, "dbgrid1": {"name": "DBGrid1", "type": "TDBGrid"}, "dbnavigator3": {"name": "DBNavigator3", "type": "TDBNavigator"}, "oracledataset1id": {"name": "OracleDataSet1ID", "type": "TFloatField"}, "oracledataset1bal_acc": {"name": "OracleDataSet1BAL_ACC", "type": "TFloatField"}, "oracledataset2id": {"name": "OracleDataSet2ID", "type": "TFloatField"}, "oracledataset2genid": {"name": "OracleDataSet2GENID", "type": "TFloatField"}, "oracledataset2bal_acc": {"name": "OracleDataSet2BAL_ACC", "type": "TFloatField"}, "oracledataset2name": {"name": "OracleDataSet2NAME", "type": "TWideStringField"}, "oracledataset2accdescription": {"name": "OracleDataSet2ACCDESCRIPTION", "type": "TWideStringField"}, "usergroupsid": {"name": "UserGroupsID", "type": "TFloatField"}, "usergroupsdescription": {"name": "UserGroupsDESCRIPTION", "type": "TWideStringField"}, "usergroupsbank_kod": {"name": "UserGroupsBANK_KOD", "type": "TWideStringField"}, "filialsid": {"name": "FilialsID", "type": "TFloatField"}, "filialsname": {"name": "FilialsNAME", "type": "TWideStringField"}, "filialskod_filial": {"name": "FilialsKOD_FILIAL", "type": "TWideStringField"}}, {});
  U.init(async () => {
    U.var_("FormAccTurning", null, "TFormAccTurning");
  });
  U.func("InitPlugin", async function InitPlugin(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"s": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["s"]);
  await $.mcall((await $.v(C, "FormAccTurning")), "ShowModal", []);
  return L0.result;
}, {"params": ["S"], "kind": "procedure", "ptypes": ["String"]});
  U.method("TFormAccTurning", "DBNavigator1Click", async function DBNavigator1Click(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "button": $.copyArg(p1), result: undefined};
  await $.fixArgs(L0, ["sender", "button"]);
  await $.mset((await $.mcall((await $.v(C, "OracleDataSet1")), "FieldByName", ["ID"])), "AsInteger", 1);
  return L0.result;
}, {"params": ["Sender", "Button"], "kind": "procedure", "ptypes": ["TObject", "TNavigateBtn"]});
  U.method("TFormAccTurning", "FormCanResize", async function FormCanResize(Self, p0, p1, p2, p3) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "newwidth": $.asRef(p1), "newheight": $.asRef(p2), "resize": $.asRef(p3), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await L0["resize"].set(false);
  return L0.result;
}, {"params": ["Sender", "NewWidth", "NewHeight", "Resize"], "kind": "procedure", "ptypes": ["TObject", "Integer", "Integer", "Boolean"]});
  U.method("TFormAccTurning", "FormCreate", async function FormCreate(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mcall((await $.v(C, "OracleDataSet2")), "Open", []);
  await $.mcall((await $.v(C, "OracleDataSet1")), "Open", []);
  await $.mcall((await $.v(C, "UserGroups")), "Open", []);
  await $.mcall((await $.v(C, "Filials")), "Open", []);
  await $.mcall((await $.v(C, "OracleDataSet3")), "Open", []);
  await $.stmt((await $.mcall((await $.v(C, "SBTranslateProc")), "TranslateAllCompForms", [Self, (await $.mv((await $.v(C, "sboapiDataModule")), "OrPack_SL"))])));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFormAccTurning", "FormDestroy", async function FormDestroy(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mcall((await $.v(C, "OracleDataSet2")), "CloseAll", []);
  await $.mcall((await $.v(C, "UserGroups")), "CloseAll", []);
  await $.mcall((await $.v(C, "Filials")), "CloseAll", []);
  await $.mcall((await $.v(C, "OracleDataSet1")), "CloseAll", []);
  await $.mcall((await $.v(C, "OracleDataSet3")), "CloseAll", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFormAccTurning", "Button2Click", async function Button2Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t1 = (await $.mv((await $.v(C, "UserGroups")), "Session"));
    await $.stmt((await $.wcall([$t1], "ApplyUpdates", [[(await $.wv([$t1], "UserGroups", C, false))], (await $.wv([$t1], "True", C, false))], C)));
  }
  await $.mcall((await $.v(C, "UserGroups")), "Refresh", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFormAccTurning", "Button1Click", async function Button1Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t2 = (await $.mv((await $.v(C, "Filials")), "Session"));
    await $.stmt((await $.wcall([$t2], "ApplyUpdates", [[(await $.wv([$t2], "Filials", C, false))], (await $.wv([$t2], "True", C, false))], C)));
  }
  await $.mcall((await $.v(C, "Filials")), "Refresh", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFormAccTurning", "FormShow", async function FormShow(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mset((await $.v(C, "PageControlMain")), "ActivePageIndex", 0);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.setInitialization(async function __initialization(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: undefined};
  await $.set(C, "FormAccTurning", (await $.mcall((await $.v(C, "TFormAccTurning")), "Create", [(await $.v(C, "CommonApplication"))])));
  return L0.result;
});
  return U;
}
