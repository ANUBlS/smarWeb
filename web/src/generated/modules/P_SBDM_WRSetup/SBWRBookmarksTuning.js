// Generated from SBWRBookmarksTuning.pas by pas2js — do not edit by hand; regenerate instead.
/* eslint-disable */
// @ts-nocheck

export default function define($) {
  const U = $.unit("SBWRBookmarksTuning", ["Windows", "Messages", "SysUtils", "Classes", "Graphics", "Controls", "Forms", "NLSDialogs", "NLSLocalizer", "ActnList", "ImgList", "ExtCtrls", "StdCtrls", "Mask", "DBCtrls", "Grids", "DBGridEh", "ComCtrls", "ToolWin", "PluginToolBar", "Buttons", "SBWRSetupDataModImpl", "SBTemplateAddEditUnt", "SBBookmarkAddEditunt", "CommonDeclsImpl", "SBTranslateProc", "sboapiDataModuleimpl"]);
  const C = [U];
  U.defClass("TSBWRBookmarkSetup", "TForm", {"plugintoolbar1": {"name": "PluginToolBar1", "type": "TPluginToolBar"}, "toolbutton1": {"name": "ToolButton1", "type": "TToolButton"}, "toolbutton2": {"name": "ToolButton2", "type": "TToolButton"}, "toolbutton3": {"name": "ToolButton3", "type": "TToolButton"}, "toolbutton4": {"name": "ToolButton4", "type": "TToolButton"}, "toolbutton5": {"name": "ToolButton5", "type": "TToolButton"}, "toolbutton6": {"name": "ToolButton6", "type": "TToolButton"}, "toolbutton7": {"name": "ToolButton7", "type": "TToolButton"}, "toolbutton8": {"name": "ToolButton8", "type": "TToolButton"}, "dbgrideh1": {"name": "DBGridEh1", "type": "TDBGridEh"}, "groupbox1": {"name": "GroupBox1", "type": "TGroupBox"}, "dbedit1": {"name": "DBEdit1", "type": "TDBEdit"}, "panel2": {"name": "Panel2", "type": "TPanel"}, "plugintoolbar2": {"name": "PluginToolBar2", "type": "TPluginToolBar"}, "toolbutton10": {"name": "ToolButton10", "type": "TToolButton"}, "toolbutton11": {"name": "ToolButton11", "type": "TToolButton"}, "toolbutton12": {"name": "ToolButton12", "type": "TToolButton"}, "toolbutton13": {"name": "ToolButton13", "type": "TToolButton"}, "toolbutton14": {"name": "ToolButton14", "type": "TToolButton"}, "toolbutton15": {"name": "ToolButton15", "type": "TToolButton"}, "toolbutton16": {"name": "ToolButton16", "type": "TToolButton"}, "toolbutton17": {"name": "ToolButton17", "type": "TToolButton"}, "dbgrideh2": {"name": "DBGridEh2", "type": "TDBGridEh"}, "imagelist1": {"name": "ImageList1", "type": "TImageList"}, "actionlist2": {"name": "ActionList2", "type": "TActionList"}, "actionaddtemplare": {"name": "ActionAddTemplare", "type": "TAction"}, "actionedittemplate": {"name": "ActionEditTemplate", "type": "TAction"}, "actiondeletetemplate": {"name": "ActionDeleteTemplate", "type": "TAction"}, "actionrfreshtemplate": {"name": "ActionRfreshTemplate", "type": "TAction"}, "actionclose": {"name": "ActionClose", "type": "TAction"}, "nlslocalizer1": {"name": "NLSLocalizer1", "type": "TNLSLocalizer"}, "actionlist1": {"name": "ActionList1", "type": "TActionList"}, "actnaddbookmark": {"name": "ActnAddBookmark", "type": "TAction"}, "actndeletebookmark": {"name": "ActnDeleteBookmark", "type": "TAction"}, "actneditbookmark": {"name": "ActnEditBookmark", "type": "TAction"}, "actnnewbookmark": {"name": "ActnNewBookmark", "type": "TAction"}, "actnclose": {"name": "ActnClose", "type": "TAction"}, "bitbtn1": {"name": "BitBtn1", "type": "TBitBtn"}}, {});
  U.init(async () => {
    U.var_("SBWRBookmarkSetup", null, "TSBWRBookmarkSetup");
    U.var_("i", 0, "integer");
  });
  U.method("TSBWRBookmarkSetup", "ActionAddTemplareExecute", async function ActionAddTemplareExecute(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "i": 0};
  await $.fixArgs(L0, ["sender"]);
  L0["rstemplatecaption"] = "Yeni şablon";
  {
    const $t1 = (await $.mv((await $.v(C, "SBWRSetupDataMod")), "SBWRTemplatesDSet"));
    await $.stmt($.wcall([$t1], "Insert", [], C));
  }
  await $.mset((await $.v(C, "SBTemplAddEditForm")), "Caption", L0["rstemplatecaption"]);
  L0["i"] = (await $.mv((await $.v(C, "SBTemplAddEditForm")), "ShowModal"));
  if ($.truthy($.eq(L0["i"], (await $.v(C, "mrOK"))))) {
    {
      const $t2 = (await $.mv((await $.v(C, "SBWRSetupDataMod")), "SBWRTemplatesDSet"));
      await $.stmt($.wcall([$t2], "Refresh", [], C));
    }
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TSBWRBookmarkSetup", "ActionEditTemplateExecute", async function ActionEditTemplateExecute(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  L0["rsupdtemplatecaption"] = "Şablonun redaktəsi";
  {
    const $t3 = (await $.mv((await $.v(C, "SBWRSetupDataMod")), "SBWRTemplatesDSet"));
    await $.stmt($.wcall([$t3], "Edit", [], C));
  }
  await $.mset((await $.v(C, "SBTemplAddEditForm")), "Caption", L0["rsupdtemplatecaption"]);
  await $.mcall((await $.v(C, "SBTemplAddEditForm")), "ShowModal", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TSBWRBookmarkSetup", "ActionAddTemplareUpdate", async function ActionAddTemplareUpdate(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t4 = (L0["sender"]);
    await $.wset([$t4], "Enabled", $.gt((await $.mv((await $.mv((await $.wv([$t4], "SBWRSetupDataMod", C, false)), "SBWRTemplatesDSet")), "RecordCount")), 0), C);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TSBWRBookmarkSetup", "ActionDeleteTemplateExecute", async function ActionDeleteTemplateExecute(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  L0["tempdeletemsg"] = "Silinməsinə əminsinizmi?";
  if ($.truthy($.eq((await $.call(C, "MessageDlg", [L0["tempdeletemsg"], (await $.v(C, "mtConfirmation")), [(await $.v(C, "mbYes")), (await $.v(C, "mbNo"))], 0])), (await $.v(C, "mrYes"))))) {
    {
      const $t5 = (await $.mv((await $.v(C, "SBWRSetupDataMod")), "SBWRTemplatesDSet"));
      await $.stmt($.wcall([$t5], "Delete", [], C));
    }
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TSBWRBookmarkSetup", "ActionRfreshTemplateExecute", async function ActionRfreshTemplateExecute(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t6 = (await $.mv((await $.v(C, "SBWRSetupDataMod")), "SBWRTemplatesDSet"));
    await $.stmt($.wcall([$t6], "Refresh", [], C));
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TSBWRBookmarkSetup", "ActnAddBookmarkExecute", async function ActnAddBookmarkExecute(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  L0["rsbookmarkcaption"] = "Yeni";
  {
    const $t7 = (await $.mv((await $.v(C, "SBWRSetupDataMod")), "SBWRBookmarksDSet"));
    await $.stmt($.wcall([$t7], "Insert", [], C));
  }
  await $.set(C, "i", (await $.mv((await $.v(C, "SBBookmarkAddEditForm")), "ShowModal")));
  await $.mset((await $.v(C, "SBBookmarkAddEditForm")), "Caption", L0["rsbookmarkcaption"]);
  if ($.truthy($.eq((await $.v(C, "i")), (await $.v(C, "mrOK"))))) {
    await $.mcall((await $.mv((await $.v(C, "SBWRSetupDataMod")), "SBWRBookmarksDSet")), "Refresh", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TSBWRBookmarkSetup", "ActnDeleteBookmarkExecute", async function ActnDeleteBookmarkExecute(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  L0["bookmarkdelete"] = "Silinməsinə əminsinizmi?";
  if ($.truthy($.eq((await $.call(C, "MessageDlg", [L0["bookmarkdelete"], (await $.v(C, "mtConfirmation")), [(await $.v(C, "mbYes")), (await $.v(C, "mbNo"))], 0])), (await $.v(C, "mrYes"))))) {
    {
      const $t8 = (await $.mv((await $.v(C, "SBWRSetupDataMod")), "SBWRBookmarksDSet"));
      await $.stmt($.wcall([$t8], "Delete", [], C));
    }
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TSBWRBookmarkSetup", "ActnEditBookmarkExecute", async function ActnEditBookmarkExecute(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  L0["rsbookmarkupdcaption"] = "Redaktə";
  {
    const $t9 = (await $.mv((await $.v(C, "SBWRSetupDataMod")), "SBWRBookmarksDSet"));
    await $.stmt($.wcall([$t9], "Edit", [], C));
  }
  await $.mset((await $.v(C, "SBBookmarkAddEditForm")), "Caption", L0["rsbookmarkupdcaption"]);
  await $.mcall((await $.v(C, "SBBookmarkAddEditForm")), "ShowModal", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TSBWRBookmarkSetup", "ActnNewBookmarkExecute", async function ActnNewBookmarkExecute(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t10 = (await $.mv((await $.v(C, "SBWRSetupDataMod")), "SBWRBookmarksDSet"));
    await $.stmt($.wcall([$t10], "Refresh", [], C));
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TSBWRBookmarkSetup", "ActnCloseExecute", async function ActnCloseExecute(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.stmt($.call(C, "Close", []));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TSBWRBookmarkSetup", "FormCanResize", async function FormCanResize(Self, p0, p1, p2, p3) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "newwidth": $.asRef(p1), "newheight": $.asRef(p2), "resize": $.asRef(p3), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await L0["resize"].set(false);
  return L0.result;
}, {"params": ["Sender", "NewWidth", "NewHeight", "Resize"], "kind": "procedure", "ptypes": ["TObject", "Integer", "Integer", "Boolean"]});
  U.method("TSBWRBookmarkSetup", "FormCreate", async function FormCreate(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "contractid": 0};
  await $.fixArgs(L0, ["sender"]);
  L0["contractid"] = (await $.v(C, "Get_SelectedContID"));
  await $.set(C, "SBWRSetupDataMod", (await $.mcall((await $.v(C, "TSBWRSetupDataMod")), "Create", [Self])));
  await $.set(C, "SBBookmarkAddEditForm", (await $.mcall((await $.v(C, "TSBBookmarkAddEditForm")), "create", [Self])));
  await $.set(C, "SBTemplAddEditForm", (await $.mcall((await $.v(C, "TSBTemplAddEditForm")), "Create", [Self])));
  await $.mcall((await $.mv((await $.v(C, "SBWRSetupDataMod")), "SBWRFieldsDSet")), "Open", []);
  await $.mcall((await $.mv((await $.v(C, "SBWRSetupDataMod")), "SBWRBookmarksDSet")), "Open", []);
  await $.mcall((await $.mv((await $.v(C, "SBWRSetupDataMod")), "SBOracleDSetTamplates")), "Open", []);
  await $.mcall((await $.mv((await $.v(C, "SBWRSetupDataMod")), "SBWRTemplatesDSet")), "Open", []);
  await $.stmt((await $.mcall((await $.v(C, "SBTranslateProc")), "TranslateAllCompForms", [Self, (await $.mv((await $.v(C, "sboapiDataModule")), "OrPack_SL"))])));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TSBWRBookmarkSetup", "FormDestroy", async function FormDestroy(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mcall((await $.mv((await $.v(C, "SBWRSetupDataMod")), "SBWRFieldsDSet")), "CloseAll", []);
  await $.mcall((await $.mv((await $.v(C, "SBWRSetupDataMod")), "SBWRTemplatesDSet")), "CloseAll", []);
  await $.mcall((await $.mv((await $.v(C, "SBWRSetupDataMod")), "SBWRBookmarksDSet")), "CloseAll", []);
  await $.mcall((await $.mv((await $.v(C, "SBWRSetupDataMod")), "SBOracleDSetTamplates")), "CloseAll", []);
  await $.mcall((await $.v(C, "SBBookmarkAddEditForm")), "Free", []);
  await $.mcall((await $.v(C, "SBTemplAddEditForm")), "Free", []);
  await $.mcall((await $.v(C, "SBWRSetupDataMod")), "Free", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TSBWRBookmarkSetup", "FormKeyPress", async function FormKeyPress(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "key": $.asRef(p1), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.eq((await $.call(C, "Ord", [(await L0["key"].get())])), (await $.v(C, "VK_ESCAPE"))))) {
    await $.stmt($.call(C, "Close", []));
  }
  return L0.result;
}, {"params": ["Sender", "Key"], "kind": "procedure", "ptypes": ["TObject", "Char"]});
  U.method("TSBWRBookmarkSetup", "BitBtn1Click", async function BitBtn1Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.stmt($.call(C, "Close", []));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TSBWRBookmarkSetup", "ActionEditTemplateUpdate", async function ActionEditTemplateUpdate(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t11 = (L0["sender"]);
    await $.wset([$t11], "Enabled", $.gt((await $.mv((await $.mv((await $.wv([$t11], "SBWRSetupDataMod", C, false)), "SBWRTemplatesDSet")), "RecordCount")), 0), C);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TSBWRBookmarkSetup", "ActnDeleteBookmarkUpdate", async function ActnDeleteBookmarkUpdate(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t12 = (L0["sender"]);
    const $t13 = (await $.wv([$t12], "SBWRSetupDataMod", C, false));
    await $.wset([$t12, $t13], "Enabled", (await $.and_(($.gt((await $.mv((await $.wv([$t12, $t13], "SBWRBookmarksDSet", C, false)), "RecordCount")), 0)), async () => ($.gt((await $.mv((await $.wv([$t12, $t13], "SBWRTemplatesDSet", C, false)), "RecordCount")), 0)))), C);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  return U;
}
