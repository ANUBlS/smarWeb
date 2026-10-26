// Generated from hesabqaliq.pas by pas2js — do not edit by hand; regenerate instead.
/* eslint-disable */
// @ts-nocheck

export default function define($) {
  const U = $.unit("hesabqaliq", ["Windows", "Messages", "SysUtils", "Classes", "Graphics", "Controls", "Forms", "Dialogs", "Grids", "DBGrids", "StdCtrls", "ComCtrls", "ToolWin", "ExtCtrls", "Db", "OracleData", "CMExcelExport", "ImgList", "SBTranslateProc", "sboapiDataModuleImpl"]);
  const C = [U];
  U.defClass("Thesab", "TForm", {"imagelist1": {"name": "ImageList1", "type": "TImageList"}, "cmexcelexport1": {"name": "CMExcelExport1", "type": "TCMExcelExport"}, "oracledataset1": {"name": "OracleDataSet1", "type": "TOracleDataSet"}, "datasource1": {"name": "DataSource1", "type": "TDataSource"}, "panel3": {"name": "Panel3", "type": "TPanel"}, "coolbar1": {"name": "CoolBar1", "type": "TCoolBar"}, "toolbar1": {"name": "ToolBar1", "type": "TToolBar"}, "toolbutton1": {"name": "ToolButton1", "type": "TToolButton"}, "toolbutton10": {"name": "ToolButton10", "type": "TToolButton"}, "toolbutton11": {"name": "ToolButton11", "type": "TToolButton"}, "toolbutton20": {"name": "ToolButton20", "type": "TToolButton"}, "toolbutton14": {"name": "ToolButton14", "type": "TToolButton"}, "toolbutton15": {"name": "ToolButton15", "type": "TToolButton"}, "toolbutton17": {"name": "ToolButton17", "type": "TToolButton"}, "toolbutton3": {"name": "ToolButton3", "type": "TToolButton"}, "toolbutton6": {"name": "ToolButton6", "type": "TToolButton"}, "toolbutton2": {"name": "ToolButton2", "type": "TToolButton"}, "toolbutton4": {"name": "ToolButton4", "type": "TToolButton"}, "toolbutton5": {"name": "ToolButton5", "type": "TToolButton"}, "radiobutton1": {"name": "RadioButton1", "type": "TRadioButton"}, "radiobutton2": {"name": "RadioButton2", "type": "TRadioButton"}, "panel1": {"name": "Panel1", "type": "TPanel"}, "dbgrid1": {"name": "DBGrid1", "type": "TDBGrid"}}, {});
  U.init(async () => {
    U.var_("hesab", null, "Thesab");
  });
  U.method("Thesab", "ToolButton1Click", async function ToolButton1Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mcall((await $.v(C, "OracleDataSet1")), "close", []);
  await $.mcall((await $.v(C, "OracleDataSet1")), "Open", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("Thesab", "FormCreate", async function FormCreate(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.stmt((await $.mcall((await $.v(C, "SBTranslateProc")), "TranslateAllCompForms", [Self, (await $.mv((await $.v(C, "sboapiDataModule")), "OrPack_SL"))])));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("Thesab", "ToolButton14Click", async function ToolButton14Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mcall((await $.v(C, "OracleDataSet1")), "close", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("Thesab", "ToolButton6Click", async function ToolButton6Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mcall((await $.v(C, "OracleDataSet1")), "open", []);
  {
    const $t1 = (await $.v(C, "CMExcelExport1"));
    await $.stmt($.wcall([$t1], "Connect", [], C));
    await $.stmt((await $.wcall([$t1], "ExportDataset", [(await $.wv([$t1], "OracleDataSet1", C, false)), "FileReport", (await $.wv([$t1], "True", C, false))], C)));
    await $.stmt($.wcall([$t1], "Disconnect", [], C));
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  return U;
}
