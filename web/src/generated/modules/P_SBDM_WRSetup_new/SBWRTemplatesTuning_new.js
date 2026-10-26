// Generated from SBWRTemplatesTuning_new.pas by pas2js — do not edit by hand; regenerate instead.
/* eslint-disable */
// @ts-nocheck

export default function define($) {
  const U = $.unit("SBWRTemplatesTuning_new", ["Windows", "Messages", "SysUtils", "Classes", "Graphics", "Controls", "Forms", "Dialogs", "StdCtrls", "Mask", "DBCtrls", "Grids", "DBGridEh", "ComCtrls", "ToolWin", "ActnList", "ImgList", "sboapiDataModuleimpl", "SBTranslateProc"]);
  const C = [U];
  U.defClass("TSBWRTemplateSetup_new", "TForm", {"actionlist1": {"name": "ActionList1", "type": "TActionList"}, "actnaddtemplate": {"name": "ActnAddTemplate", "type": "TAction"}, "actndeltemplate": {"name": "ActnDelTemplate", "type": "TAction"}, "actnrefreshtemplate": {"name": "ActnRefreshTemplate", "type": "TAction"}, "actnupdatetamplate": {"name": "ActnUpdatetamplate", "type": "TAction"}, "actnclose": {"name": "ActnClose", "type": "TAction"}, "dbgrideh1": {"name": "DBGridEh1", "type": "TDBGridEh"}, "groupbox1": {"name": "GroupBox1", "type": "TGroupBox"}, "dbedit1": {"name": "DBEdit1", "type": "TDBEdit"}, "imagelist1": {"name": "ImageList1", "type": "TImageList"}, "toolbar1": {"name": "ToolBar1", "type": "TToolBar"}, "toolbutton1": {"name": "ToolButton1", "type": "TToolButton"}, "toolbutton2": {"name": "ToolButton2", "type": "TToolButton"}, "toolbutton3": {"name": "ToolButton3", "type": "TToolButton"}, "toolbutton4": {"name": "ToolButton4", "type": "TToolButton"}, "toolbutton5": {"name": "ToolButton5", "type": "TToolButton"}, "toolbutton6": {"name": "ToolButton6", "type": "TToolButton"}, "toolbutton7": {"name": "ToolButton7", "type": "TToolButton"}, "toolbutton8": {"name": "ToolButton8", "type": "TToolButton"}, "toolbutton9": {"name": "ToolButton9", "type": "TToolButton"}}, {});
  U.init(async () => {
    U.var_("SBWRTemplateSetup_new", null, "TSBWRTemplateSetup_new");
  });
  U.method("TSBWRTemplateSetup_new", "FormCreate", async function FormCreate(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.stmt((await $.mcall((await $.v(C, "SBTranslateProc")), "TranslateAllCompForms", [Self, (await $.mv((await $.v(C, "sboapiDataModule")), "OrPack_SL"))])));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  return U;
}
