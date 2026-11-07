// Generated from frmPenaltyAccSettingImpl.pas by pas2js — do not edit by hand; regenerate instead.
/* eslint-disable */
// @ts-nocheck

export default function define($) {
  const U = $.unit("frmPenaltyAccSettingImpl", ["Windows", "Messages", "SysUtils", "Classes", "Graphics", "Controls", "Forms", "Dialogs", "StdCtrls", "ToolWin", "ComCtrls", "ExtCtrls", "ImgList", "Grids", "DBGridEh", "ActnList", "DBGridEhGrouping", "GridsEh", "CommonDecls", "DMPenaltySettImpl", "FrmAddEditPenSettImpl", "sboapiDataModuleImpl", "SBTranslateProc"]);
  const C = [U];
  U.defClass("TfrmPenaltyAccSetting", "TForm", {"groupbox1": {"name": "GroupBox1", "type": "TGroupBox"}, "groupbox2": {"name": "GroupBox2", "type": "TGroupBox"}, "imagelist1": {"name": "ImageList1", "type": "TImageList"}, "panel2": {"name": "Panel2", "type": "TPanel"}, "toolbar1": {"name": "ToolBar1", "type": "TToolBar"}, "toolbutton1": {"name": "ToolButton1", "type": "TToolButton"}, "toolbutton2": {"name": "ToolButton2", "type": "TToolButton"}, "toolbutton3": {"name": "ToolButton3", "type": "TToolButton"}, "toolbutton4": {"name": "ToolButton4", "type": "TToolButton"}, "toolbutton5": {"name": "ToolButton5", "type": "TToolButton"}, "toolbutton9": {"name": "ToolButton9", "type": "TToolButton"}, "toolbutton7": {"name": "ToolButton7", "type": "TToolButton"}, "dbgrideh1": {"name": "DBGridEh1", "type": "TDBGridEh"}, "dbgrideh2": {"name": "DBGridEh2", "type": "TDBGridEh"}, "actionlist1": {"name": "ActionList1", "type": "TActionList"}, "actnadd": {"name": "ActnAdd", "type": "TAction"}, "actnedit": {"name": "ActnEdit", "type": "TAction"}, "actndelete": {"name": "ActnDelete", "type": "TAction"}}, {});
  U.init(async () => {
    U.var_("frmPenaltyAccSetting", null, "TfrmPenaltyAccSetting");
  });
  U.func("InitPlugin", async function InitPlugin(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"s": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["s"]);
  await $.mcall((await $.v(C, "frmPenaltyAccSetting")), "ShowModal", []);
  return L0.result;
}, {"params": ["S"], "kind": "procedure", "ptypes": ["String"]});
  U.method("TfrmPenaltyAccSetting", "FormCanResize", async function FormCanResize(Self, p0, p1, p2, p3) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "newwidth": $.asRef(p1), "newheight": $.asRef(p2), "resize": $.asRef(p3), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await L0["resize"].set(false);
  return L0.result;
}, {"params": ["Sender", "NewWidth", "NewHeight", "Resize"], "kind": "procedure", "ptypes": ["TObject", "Integer", "Integer", "Boolean"]});
  U.method("TfrmPenaltyAccSetting", "FormKeyPress", async function FormKeyPress(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "key": $.asRef(p1), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.eq((await $.call(C, "ord", [(await L0["key"].get())])), (await $.v(C, "VK_ESCAPE"))))) {
    await $.stmt($.call(C, "close", []));
  }
  return L0.result;
}, {"params": ["Sender", "Key"], "kind": "procedure", "ptypes": ["TObject", "Char"]});
  U.method("TfrmPenaltyAccSetting", "FormCreate", async function FormCreate(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.set(C, "DMPenaltySett", (await $.mcall((await $.v(C, "TDMPenaltySett")), "Create", [Self])));
  await $.set(C, "FrmAddEditPenSett", (await $.mcall((await $.v(C, "TFrmAddEditPenSett")), "Create", [Self])));
  await $.stmt((await $.mcall((await $.v(C, "SBTranslateProc")), "TranslateAllCompForms", [Self, (await $.mv((await $.v(C, "sboapiDataModule")), "OrPack_SL"))])));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TfrmPenaltyAccSetting", "FormDestroy", async function FormDestroy(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mcall((await $.v(C, "DMPenaltySett")), "Free", []);
  await $.mcall((await $.v(C, "FrmAddEditPenSett")), "Free", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TfrmPenaltyAccSetting", "ActnAddExecute", async function ActnAddExecute(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t1 = (await $.wobj(C, "DMPenaltySett"));
    const $t2 = (await $.wv([$t1], "PenaltySettings", C, false));
    await $.stmt($.wcall([$t1, $t2], "Insert", [], C));
  }
  await $.mcall((await $.v(C, "FrmAddEditPenSett")), "ShowModal", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TfrmPenaltyAccSetting", "ToolButton7Click", async function ToolButton7Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.stmt($.call(C, "close", []));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TfrmPenaltyAccSetting", "ActnEditExecute", async function ActnEditExecute(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t3 = (await $.wobj(C, "DMPenaltySett"));
    const $t4 = (await $.wv([$t3], "PenaltySettings", C, false));
    await $.stmt($.wcall([$t3, $t4], "Edit", [], C));
  }
  await $.mcall((await $.v(C, "FrmAddEditPenSett")), "ShowModal", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TfrmPenaltyAccSetting", "ActnDeleteExecute", async function ActnDeleteExecute(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t5 = (await $.wobj(C, "DMPenaltySett"));
    const $t6 = (await $.wv([$t5], "cm_setup", C, false));
    await $.stmt((await $.wcall([$t5, $t6], "CallProcedure", ["del_penaltySett", [(await $.mv((await $.mcall((await $.mv((await $.wv([$t5, $t6], "DMPenaltySett", C, false)), "PenaltySettings")), "FieldByName", ["ID"])), "ASInteger"))]], C)));
  }
  await $.mcall((await $.mv((await $.v(C, "DMPenaltySett")), "PenaltySettings")), "Refresh", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.setInitialization(async function __initialization(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: undefined};
  await $.set(C, "frmPenaltyAccSetting", (await $.mcall((await $.v(C, "TfrmPenaltyAccSetting")), "Create", [(await $.v(C, "CommonApplication"))])));
  return L0.result;
});
  return U;
}
