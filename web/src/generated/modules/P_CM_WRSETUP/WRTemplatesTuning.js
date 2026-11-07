// Generated from WRTemplatesTuning.pas by pas2js — do not edit by hand; regenerate instead.
/* eslint-disable */
// @ts-nocheck

export default function define($) {
  const U = $.unit("WRTemplatesTuning", ["Windows", "Messages", "SysUtils", "Classes", "Graphics", "Controls", "Forms", "Dialogs", "Grids", "DBGrids", "DBGridEh", "StdCtrls", "Mask", "DBCtrls", "ToolWin", "ComCtrls", "ImgList", "ActnList", "DBGridEhGrouping", "GridsEh", "TemplateAddEditUnt", "WRSetupDataModImpl", "SBTranslateProc", "sboapiDataModuleimpl"]);
  const C = [U];
  U.defClass("TWRTemplateSetup", "TForm", {"groupbox1": {"name": "GroupBox1", "type": "TGroupBox"}, "dbedit1": {"name": "DBEdit1", "type": "TDBEdit"}, "actionlist1": {"name": "ActionList1", "type": "TActionList"}, "actnaddtemplate": {"name": "ActnAddTemplate", "type": "TAction"}, "actndeltemplate": {"name": "ActnDelTemplate", "type": "TAction"}, "actnrefreshtemplate": {"name": "ActnRefreshTemplate", "type": "TAction"}, "actnupdatetamplate": {"name": "ActnUpdatetamplate", "type": "TAction"}, "actnclose": {"name": "ActnClose", "type": "TAction"}, "dbgrideh1": {"name": "DBGridEh1", "type": "TDBGridEh"}, "toolbar1": {"name": "ToolBar1", "type": "TToolBar"}, "toolbutton1": {"name": "ToolButton1", "type": "TToolButton"}, "toolbutton2": {"name": "ToolButton2", "type": "TToolButton"}, "toolbutton3": {"name": "ToolButton3", "type": "TToolButton"}, "toolbutton4": {"name": "ToolButton4", "type": "TToolButton"}, "toolbutton5": {"name": "ToolButton5", "type": "TToolButton"}, "toolbutton6": {"name": "ToolButton6", "type": "TToolButton"}, "toolbutton7": {"name": "ToolButton7", "type": "TToolButton"}, "toolbutton8": {"name": "ToolButton8", "type": "TToolButton"}, "toolbutton9": {"name": "ToolButton9", "type": "TToolButton"}, "imagelist1": {"name": "ImageList1", "type": "TImageList"}}, {});
  U.init(async () => {
    U.var_("WRTemplateSetup", null, "TWRTemplateSetup");
  });
  U.method("TWRTemplateSetup", "ActnAddTemplateExecute", async function ActnAddTemplateExecute(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "i": 0};
  await $.fixArgs(L0, ["sender"]);
  L0["rstemplatecaption"] = "Yeni şablon";
  {
    const $t1 = (await $.mv((await $.v(C, "WRSetupDataMod")), "WRTemplatesDataSet"));
    await $.stmt($.wcall([$t1], "Insert", [], C));
  }
  await $.set(C, "Caption", L0["rstemplatecaption"]);
  L0["i"] = (await $.mv((await $.v(C, "TemplAddEditForm")), "ShowModal"));
  if ($.truthy($.eq(L0["i"], (await $.v(C, "mrOK"))))) {
    {
      const $t2 = (await $.mv((await $.v(C, "WRSetupDataMod")), "WRTemplatesDataSet"));
      await $.stmt($.wcall([$t2], "Refresh", [], C));
    }
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TWRTemplateSetup", "FormCreate", async function FormCreate(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.set(C, "WRSetupDataMod", (await $.mcall((await $.v(C, "TWRSetupDataMod")), "Create", [Self])));
  await $.set(C, "TemplAddEditForm", (await $.mcall((await $.v(C, "TTemplAddEditForm")), "Create", [Self])));
  await $.mcall((await $.mv((await $.v(C, "WRSetupDataMod")), "WRTemplatesDataSet")), "Open", []);
  await $.stmt((await $.mcall((await $.v(C, "SBTranslateProc")), "TranslateAllCompForms", [Self, (await $.mv((await $.v(C, "sboapiDataModule")), "OrPack_SL"))])));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TWRTemplateSetup", "FormDestroy", async function FormDestroy(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mcall((await $.mv((await $.v(C, "WRSetupDataMod")), "WRTemplatesDataSet")), "CloseAll", []);
  await $.mcall((await $.v(C, "TemplAddEditForm")), "Free", []);
  await $.mcall((await $.v(C, "WRSetupDataMod")), "Free", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TWRTemplateSetup", "ActnRefreshTemplateExecute", async function ActnRefreshTemplateExecute(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t3 = (await $.mv((await $.v(C, "WRSetupDataMod")), "WRTemplatesDataSet"));
    await $.stmt($.wcall([$t3], "Refresh", [], C));
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TWRTemplateSetup", "ActnUpdatetamplateExecute", async function ActnUpdatetamplateExecute(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  L0["rsupdtemplatecaption"] = "Şablonun redaktəsi";
  {
    const $t4 = (await $.mv((await $.v(C, "WRSetupDataMod")), "WRTemplatesDataSet"));
    await $.stmt($.wcall([$t4], "Edit", [], C));
  }
  await $.set(C, "Caption", L0["rsupdtemplatecaption"]);
  await $.mcall((await $.v(C, "TemplAddEditForm")), "ShowModal", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TWRTemplateSetup", "ActnDelTemplateExecute", async function ActnDelTemplateExecute(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  L0["tempdeletemsg"] = "Silinməsinə əminsinizmi?";
  if ($.truthy($.eq((await $.call(C, "MessageDlg", [L0["tempdeletemsg"], (await $.v(C, "mtConfirmation")), [(await $.v(C, "mbYes")), (await $.v(C, "mbNo"))], 0])), (await $.v(C, "mrYes"))))) {
    {
      const $t5 = (await $.mv((await $.v(C, "WRSetupDataMod")), "WRTemplatesDataSet"));
      await $.stmt($.wcall([$t5], "Delete", [], C));
    }
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TWRTemplateSetup", "FormCanResize", async function FormCanResize(Self, p0, p1, p2, p3) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "newwidth": $.asRef(p1), "newheight": $.asRef(p2), "resize": $.asRef(p3), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await L0["resize"].set(false);
  return L0.result;
}, {"params": ["Sender", "NewWidth", "NewHeight", "resize"], "kind": "procedure", "ptypes": ["TObject", "Integer", "Integer", "Boolean"]});
  U.method("TWRTemplateSetup", "ActnCloseExecute", async function ActnCloseExecute(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.stmt($.call(C, "Close", []));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TWRTemplateSetup", "ActnDelTemplateUpdate", async function ActnDelTemplateUpdate(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t6 = (await $.mv((await $.v(C, "WRSetupDataMod")), "WRTemplatesDataSet"));
    await $.mset((await $.wv([$t6], "Sender", { get: async () => L0["sender"], set: async (v) => { L0["sender"] = v; }, local: true }, false)), "Enabled", (await $.and_((await $.wv([$t6], "Active", C, false)), async () => ($.gt((await $.wv([$t6], "RecordCount", C, false)), 0)))));
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TWRTemplateSetup", "FormKeyPress", async function FormKeyPress(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "key": $.asRef(p1), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.eq((await $.call(C, "Ord", [(await L0["key"].get())])), (await $.v(C, "VK_ESCAPE"))))) {
    await $.stmt($.call(C, "close", []));
  }
  return L0.result;
}, {"params": ["Sender", "Key"], "kind": "procedure", "ptypes": ["TObject", "Char"]});
  return U;
}
