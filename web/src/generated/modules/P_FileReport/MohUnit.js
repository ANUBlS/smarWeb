// Generated from MohUnit.pas by pas2js — do not edit by hand; regenerate instead.
/* eslint-disable */
// @ts-nocheck

export default function define($) {
  const U = $.unit("MohUnit", ["Windows", "Messages", "SysUtils", "Classes", "Graphics", "Controls", "Forms", "Dialogs", "Grids", "DBGrids", "StdCtrls", "ComCtrls", "ToolWin", "ExtCtrls", "Db", "OracleData", "CMExcelExport", "ImgList", "Oracle", "NLSLocalizer"]);
  const C = [U];
  U.defClass("TKorrMoh", "TForm", {"imagelist1": {"name": "ImageList1", "type": "TImageList"}, "cmexcelexport1": {"name": "CMExcelExport1", "type": "TCMExcelExport"}, "datasource1": {"name": "DataSource1", "type": "TDataSource"}, "oracledataset1": {"name": "OracleDataSet1", "type": "TOracleDataSet"}, "panel3": {"name": "Panel3", "type": "TPanel"}, "coolbar1": {"name": "CoolBar1", "type": "TCoolBar"}, "toolbar1": {"name": "ToolBar1", "type": "TToolBar"}, "toolbutton1": {"name": "ToolButton1", "type": "TToolButton"}, "toolbutton10": {"name": "ToolButton10", "type": "TToolButton"}, "toolbutton11": {"name": "ToolButton11", "type": "TToolButton"}, "toolbutton20": {"name": "ToolButton20", "type": "TToolButton"}, "toolbutton14": {"name": "ToolButton14", "type": "TToolButton"}, "toolbutton15": {"name": "ToolButton15", "type": "TToolButton"}, "toolbutton17": {"name": "ToolButton17", "type": "TToolButton"}, "toolbutton3": {"name": "ToolButton3", "type": "TToolButton"}, "toolbutton6": {"name": "ToolButton6", "type": "TToolButton"}, "toolbutton2": {"name": "ToolButton2", "type": "TToolButton"}, "toolbutton4": {"name": "ToolButton4", "type": "TToolButton"}, "toolbutton5": {"name": "ToolButton5", "type": "TToolButton"}, "radiobutton1": {"name": "RadioButton1", "type": "TRadioButton"}, "radiobutton2": {"name": "RadioButton2", "type": "TRadioButton"}, "panel1": {"name": "Panel1", "type": "TPanel"}, "dbgrid1": {"name": "DBGrid1", "type": "TDBGrid"}, "toolbutton7": {"name": "ToolButton7", "type": "TToolButton"}, "oraclepackage1": {"name": "OraclePackage1", "type": "TOraclePackage"}, "nlslocalizer1": {"name": "NLSLocalizer1", "type": "TNLSLocalizer"}}, {});
  U.init(async () => {
    U.var_("KorrMoh", null, "TKorrMoh");
  });
  U.method("TKorrMoh", "ToolButton1Click", async function ToolButton1Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mcall((await $.v(C, "OracleDataSet1")), "Open", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TKorrMoh", "ToolButton14Click", async function ToolButton14Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mcall((await $.v(C, "OracleDataSet1")), "close", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TKorrMoh", "ToolButton6Click", async function ToolButton6Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.not((await $.mv((await $.v(C, "CMExcelExport1")), "Connected"))))) {
    await $.mcall((await $.v(C, "CMExcelExport1")), "Connect", []);
  }
  await $.stmt((await $.mcall((await $.v(C, "CMExcelExport1")), "ExportDataset", [(await $.mv((await $.mv((await $.v(C, "dbgrid1")), "datasource")), "dataset")), "Korr", true, true])));
  await $.mcall((await $.v(C, "CMExcelExport1")), "Disconnect", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TKorrMoh", "ToolButton7Click", async function ToolButton7Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "i": 0};
  await $.fixArgs(L0, ["sender"]);
  await $.mcall((await $.v(C, "OracleDataSet1")), "Close", []);
  await $.mcall((await $.v(C, "OracleDataSet1")), "Open", []);
  await $.mcall((await $.v(C, "OracleDataSet1")), "First", []);
  await $.mset((await $.v(C, "ToolButton7")), "Enabled", false);
  { const $t1 = (await $.mv((await $.v(C, "OracleDataSet1")), "RecordCount"));
    L0["i"] = 1;
    let $t2 = true;
    for (;;) {
      if (!$t2) { L0["i"] = $.succ(L0["i"], 1); }
      $t2 = false;
      if (!($.ord(L0["i"]) <= $.ord($t1))) break;
      await $.stmt((await $.mcall((await $.v(C, "OraclePackage1")), "CallProcedure", ["mohset", [(await $.mv((await $.mcall((await $.v(C, "OracleDataSet1")), "fieldbyname", ["HESAB"])), "asstring")), (await $.mv((await $.mcall((await $.v(C, "OracleDataSet1")), "fieldbyname", ["VERILECEK_MEBLEQ"])), "asFLOAT"))]])));
      await $.mcall((await $.v(C, "OracleDataSet1")), "Next", []);
      await $.mset((await $.v(C, "ToolButton7")), "Enabled", true);
      await $.tick();
    }
  }
  await $.stmt((await $.call(C, "ShowMessage", ["Mohkemlendirme verildi!"])));
  await $.mcall((await $.v(C, "OracleDataSet1")), "refresh", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  return U;
}
