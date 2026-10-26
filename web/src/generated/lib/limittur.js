// Generated from limittur.pas by pas2js — do not edit by hand; regenerate instead.
/* eslint-disable */
// @ts-nocheck

export default function define($) {
  const U = $.unit("limittur", ["Windows", "Messages", "SysUtils", "Variants", "Classes", "Graphics", "Controls", "Forms", "Dialogs", "Menus", "OleServer", "ExcelXP", "CMExcelExport", "ImgList", "Grids", "DBGrids", "ComCtrls", "ToolWin", "DB", "OracleData", "Sboapidatamoduleimpl", "U9", "Unit18"]);
  const C = [U];
  U.defClass("Tlim", "TForm", {"coolbar1": {"name": "CoolBar1", "type": "TCoolBar"}, "toolbar1": {"name": "ToolBar1", "type": "TToolBar"}, "toolbutton1": {"name": "ToolButton1", "type": "TToolButton"}, "toolbutton2": {"name": "ToolButton2", "type": "TToolButton"}, "dbgrid1": {"name": "DBGrid1", "type": "TDBGrid"}, "dbgrid2": {"name": "DBGrid2", "type": "TDBGrid"}, "imagelist1": {"name": "ImageList1", "type": "TImageList"}, "cmexcelexport1": {"name": "CMExcelExport1", "type": "TCMExcelExport"}, "opendialogcards": {"name": "OpenDialogCards", "type": "TOpenDialog"}, "excelapplication1": {"name": "ExcelApplication1", "type": "TExcelApplication"}, "popupmenu1": {"name": "PopupMenu1", "type": "TPopupMenu"}, "n11": {"name": "N11", "type": "TMenuItem"}, "n12": {"name": "N12", "type": "TMenuItem"}, "popupmenu2": {"name": "PopupMenu2", "type": "TPopupMenu"}, "excel1": {"name": "EXCEL1", "type": "TMenuItem"}, "popupmenu3": {"name": "PopupMenu3", "type": "TPopupMenu"}, "excel2": {"name": "EXCEL2", "type": "TMenuItem"}, "datasource1": {"name": "DataSource1", "type": "TDataSource"}, "datasource2": {"name": "DataSource2", "type": "TDataSource"}, "oracledataset1": {"name": "OracleDataSet1", "type": "TOracleDataSet"}, "oracledataset2": {"name": "OracleDataSet2", "type": "TOracleDataSet"}}, {});
  U.init(async () => {
    U.var_("lim", null, "Tlim");
  });
  U.method("Tlim", "FormActivate", async function FormActivate(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mcall((await $.v(C, "OracleDataSet1")), "Open", []);
  await $.mcall((await $.v(C, "OracleDataSet2")), "Open", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("Tlim", "ToolButton1Click", async function ToolButton1Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.stmt((await $.mcall((await $.mv((await $.v(C, "DataMod_CARDS")), "mainpacket")), "CallProcedure", ["limits", []])));
  await $.mcall((await $.v(C, "OracleDataSet1")), "Refresh", []);
  await $.mcall((await $.v(C, "OracleDataSet2")), "Refresh", []);
  await $.stmt((await $.call(C, "ShowMessage", ["Limitlər daxil edildi!"])));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("Tlim", "ToolButton2Click", async function ToolButton2Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mcall((await $.v(C, "OracleDataSet1")), "Refresh", []);
  await $.mcall((await $.v(C, "OracleDataSet2")), "Refresh", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  return U;
}
