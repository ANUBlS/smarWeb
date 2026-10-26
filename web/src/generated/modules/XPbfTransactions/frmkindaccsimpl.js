// Generated from frmkindaccsimpl.pas by pas2js — do not edit by hand; regenerate instead.
/* eslint-disable */
// @ts-nocheck

export default function define($) {
  const U = $.unit("frmkindaccsimpl", ["Windows", "Messages", "SysUtils", "Classes", "Graphics", "Controls", "Forms", "Dialogs", "ComCtrls", "ExtCtrls", "DBCtrls", "Grids", "DBGrids", "Db", "OracleData", "sboapiDataModuleImpl", "SBTranslateProc"]);
  const C = [U];
  U.defClass("Tfrmkindaccs", "TForm", {"oracledataset1": {"name": "OracleDataSet1", "type": "TOracleDataSet"}, "datasource1": {"name": "DataSource1", "type": "TDataSource"}, "statusbar1": {"name": "StatusBar1", "type": "TStatusBar"}, "oracledataset1acc_no": {"name": "OracleDataSet1ACC_NO", "type": "TWideStringField"}, "pagecontrol1": {"name": "PageControl1", "type": "TPageControl"}, "tabsheet1": {"name": "TabSheet1", "type": "TTabSheet"}, "tabsheet2": {"name": "TabSheet2", "type": "TTabSheet"}, "dbgrid1": {"name": "DBGrid1", "type": "TDBGrid"}, "dbnavigator1": {"name": "DBNavigator1", "type": "TDBNavigator"}, "dbgrid2": {"name": "DBGrid2", "type": "TDBGrid"}, "dbnavigator2": {"name": "DBNavigator2", "type": "TDBNavigator"}, "oracledataset2": {"name": "OracleDataSet2", "type": "TOracleDataSet"}, "datasource2": {"name": "DataSource2", "type": "TDataSource"}, "oracledataset2id": {"name": "OracleDataSet2ID", "type": "TFloatField"}, "oracledataset2name": {"name": "OracleDataSet2NAME", "type": "TWideStringField"}, "oracledataset2description": {"name": "OracleDataSet2DESCRIPTION", "type": "TWideStringField"}}, {});
  U.init(async () => {
    U.var_("frmkindaccs", null, "Tfrmkindaccs");
  });
  U.method("Tfrmkindaccs", "FormCreate", async function FormCreate(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mcall((await $.v(C, "OracleDataSet1")), "open", []);
  await $.mcall((await $.v(C, "OracleDataSet2")), "open", []);
  await $.stmt((await $.mcall((await $.v(C, "SBTranslateProc")), "TranslateAllCompForms", [Self, (await $.mv((await $.v(C, "sboapiDataModule")), "OrPack_SL"))])));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  return U;
}
