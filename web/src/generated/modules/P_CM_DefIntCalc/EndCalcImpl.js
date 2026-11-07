// Generated from EndCalcImpl.pas by pas2js — do not edit by hand; regenerate instead.
/* eslint-disable */
// @ts-nocheck

export default function define($) {
  const U = $.unit("EndCalcImpl", ["Windows", "Messages", "SysUtils", "Variants", "Classes", "Graphics", "Controls", "Forms", "Dialogs", "DBGridEhGrouping", "GridsEh", "DBGridEh", "ComCtrls", "ToolWin", "ExtCtrls", "ImgList", "EndCallAddİmpl", "IntCalcDataModImpl"]);
  const C = [U];
  U.defClass("TFrmEndCalc", "TForm", {"imagelist1": {"name": "ImageList1", "type": "TImageList"}, "panel4": {"name": "Panel4", "type": "TPanel"}, "toolbar1": {"name": "ToolBar1", "type": "TToolBar"}, "toolbutton1": {"name": "ToolButton1", "type": "TToolButton"}, "toolbutton2": {"name": "ToolButton2", "type": "TToolButton"}, "toolbutton6": {"name": "ToolButton6", "type": "TToolButton"}, "toolbutton7": {"name": "ToolButton7", "type": "TToolButton"}, "dbgrideh1": {"name": "DBGridEh1", "type": "TDBGridEh"}, "toolbutton3": {"name": "ToolButton3", "type": "TToolButton"}}, {});
  U.init(async () => {
    U.var_("FrmEndCalc", null, "TFrmEndCalc");
  });
  U.method("TFrmEndCalc", "FormCreate", async function FormCreate(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.set(C, "EndCallAddform", (await $.mcall((await $.v(C, "TEndCallAddform")), "Create", [Self])));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFrmEndCalc", "ToolButton1Click", async function ToolButton1Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mcall((await $.mv((await $.v(C, "DefineCalcDatMod")), "OracleDataSet2")), "insert", []);
  await $.mset((await $.mv((await $.v(C, "EndCallAddform")), "CheckBox1")), "Checked", true);
  await $.mcall((await $.v(C, "EndCallAddform")), "ShowModal", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFrmEndCalc", "ToolButton3Click", async function ToolButton3Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mcall((await $.mv((await $.v(C, "DefineCalcDatMod")), "OracleDataSet2")), "Edit", []);
  await $.mset((await $.mv((await $.v(C, "EndCallAddform")), "DBDateTimeEditEh1")), "Enabled", false);
  await $.mset((await $.mv((await $.v(C, "EndCallAddform")), "CheckBox1")), "Checked", $.eq((await $.mv((await $.mv((await $.v(C, "DefineCalcDatMod")), "OracleDataSet2STATUS")), "AsInteger")), 1));
  await $.mset((await $.mv((await $.v(C, "EndCallAddform")), "CheckBox2")), "Checked", $.eq((await $.mv((await $.mv((await $.v(C, "DefineCalcDatMod")), "OracleDataSet2INTEREST")), "AsInteger")), 1));
  await $.mset((await $.mv((await $.v(C, "EndCallAddform")), "CheckBox3")), "Checked", $.eq((await $.mv((await $.mv((await $.v(C, "DefineCalcDatMod")), "OracleDataSet2DUEINTEREST")), "AsInteger")), 1));
  await $.mcall((await $.v(C, "EndCallAddform")), "ShowModal", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFrmEndCalc", "ToolButton7Click", async function ToolButton7Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.stmt($.call(C, "close", []));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  return U;
}
