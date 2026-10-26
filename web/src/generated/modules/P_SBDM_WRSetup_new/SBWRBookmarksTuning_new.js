// Generated from SBWRBookmarksTuning_new.pas by pas2js — do not edit by hand; regenerate instead.
/* eslint-disable */
// @ts-nocheck

export default function define($) {
  const U = $.unit("SBWRBookmarksTuning_new", ["Windows", "Messages", "SysUtils", "Classes", "Graphics", "Controls", "Forms", "NLSDialogs", "ActnList", "ImgList", "ExtCtrls", "StdCtrls", "Mask", "DBCtrls", "Grids", "DBGridEh", "ComCtrls", "ToolWin", "PluginToolBar", "Buttons", "SBWRSetupDataModImpl_new", "SBTemplateAddEditUnt_new", "SBBookmarkAddEditunt_new", "CommonDeclsImpl_new", "SBTranslateProc", "sboapiDataModuleimpl"]);
  const C = [U];
  U.defClass("TSBWRBookmarkSetup_new", "TForm", {"actionlist1": {"name": "ActionList1", "type": "TActionList"}, "actnaddbookmark": {"name": "ActnAddBookmark", "type": "TAction"}, "actndeletebookmark": {"name": "ActnDeleteBookmark", "type": "TAction"}, "actneditbookmark": {"name": "ActnEditBookmark", "type": "TAction"}, "actnnewbookmark": {"name": "ActnNewBookmark", "type": "TAction"}, "actnclose": {"name": "ActnClose", "type": "TAction"}, "actionlist2": {"name": "ActionList2", "type": "TActionList"}, "actionaddtemplare": {"name": "ActionAddTemplare", "type": "TAction"}, "actionedittemplate": {"name": "ActionEditTemplate", "type": "TAction"}, "actiondeletetemplate": {"name": "ActionDeleteTemplate", "type": "TAction"}, "actionrfreshtemplate": {"name": "ActionRfreshTemplate", "type": "TAction"}, "actionclose": {"name": "ActionClose", "type": "TAction"}, "bitbtn1": {"name": "BitBtn1", "type": "TBitBtn"}, "dbgrideh1": {"name": "DBGridEh1", "type": "TDBGridEh"}, "dbgrideh2": {"name": "DBGridEh2", "type": "TDBGridEh"}, "groupbox1": {"name": "GroupBox1", "type": "TGroupBox"}, "dbedit1": {"name": "DBEdit1", "type": "TDBEdit"}, "imagelist1": {"name": "ImageList1", "type": "TImageList"}, "panel2": {"name": "Panel2", "type": "TPanel"}, "plugintoolbar2": {"name": "PluginToolBar2", "type": "TPluginToolBar"}, "toolbutton10": {"name": "ToolButton10", "type": "TToolButton"}, "toolbutton11": {"name": "ToolButton11", "type": "TToolButton"}, "toolbutton12": {"name": "ToolButton12", "type": "TToolButton"}, "toolbutton13": {"name": "ToolButton13", "type": "TToolButton"}, "toolbutton14": {"name": "ToolButton14", "type": "TToolButton"}, "toolbutton15": {"name": "ToolButton15", "type": "TToolButton"}, "toolbutton16": {"name": "ToolButton16", "type": "TToolButton"}, "toolbutton17": {"name": "ToolButton17", "type": "TToolButton"}, "plugintoolbar1": {"name": "PluginToolBar1", "type": "TPluginToolBar"}, "toolbutton1": {"name": "ToolButton1", "type": "TToolButton"}, "toolbutton2": {"name": "ToolButton2", "type": "TToolButton"}, "toolbutton3": {"name": "ToolButton3", "type": "TToolButton"}, "toolbutton4": {"name": "ToolButton4", "type": "TToolButton"}, "toolbutton5": {"name": "ToolButton5", "type": "TToolButton"}, "toolbutton6": {"name": "ToolButton6", "type": "TToolButton"}, "toolbutton7": {"name": "ToolButton7", "type": "TToolButton"}, "toolbutton8": {"name": "ToolButton8", "type": "TToolButton"}, "bitbtn2": {"name": "BitBtn2", "type": "TBitBtn"}}, {});
  U.init(async () => {
    U.var_("SBWRBookmarkSetup_new", null, "TSBWRBookmarkSetup_new");
    U.var_("i", 0, "integer");
  });
  U.method("TSBWRBookmarkSetup_new", "ActionAddTemplareExecute", async function ActionAddTemplareExecute(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "i": 0};
  await $.fixArgs(L0, ["sender"]);
  L0["rstemplatecaption"] = "Yeni şablon";
  {
    const $t1 = (await $.mv((await $.v(C, "SBWRSetupDataMod_new")), "SBWRTemplatesDSet"));
    await $.stmt($.wcall([$t1], "Insert", [], C));
  }
  await $.mset((await $.v(C, "SBTemplAddEditForm_new")), "Caption", L0["rstemplatecaption"]);
  L0["i"] = (await $.mv((await $.v(C, "SBTemplAddEditForm_new")), "ShowModal"));
  if ($.truthy($.eq(L0["i"], (await $.v(C, "mrOK"))))) {
    {
      const $t2 = (await $.mv((await $.v(C, "SBWRSetupDataMod_new")), "SBWRTemplatesDSet"));
      await $.stmt($.wcall([$t2], "Refresh", [], C));
    }
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TSBWRBookmarkSetup_new", "ActionAddTemplareUpdate", async function ActionAddTemplareUpdate(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t3 = (L0["sender"]);
    await $.wset([$t3], "Enabled", $.gt((await $.mv((await $.mv((await $.wv([$t3], "SBWRSetupDataMod_new", C, false)), "SBWRTemplatesDSet")), "RecordCount")), 0), C);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TSBWRBookmarkSetup_new", "ActionDeleteTemplateExecute", async function ActionDeleteTemplateExecute(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  L0["tempdeletemsg"] = "Silinməsinə əminsinizmi?";
  if ($.truthy($.eq((await $.call(C, "MessageDlg", [L0["tempdeletemsg"], (await $.v(C, "mtConfirmation")), [(await $.v(C, "mbYes")), (await $.v(C, "mbNo"))], 0])), (await $.v(C, "mrYes"))))) {
    {
      const $t4 = (await $.mv((await $.v(C, "SBWRSetupDataMod_new")), "SBWRTemplatesDSet"));
      await $.stmt($.wcall([$t4], "Delete", [], C));
    }
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TSBWRBookmarkSetup_new", "ActionEditTemplateExecute", async function ActionEditTemplateExecute(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  L0["rsupdtemplatecaption"] = "Şablonun redaktəsi";
  {
    const $t5 = (await $.mv((await $.v(C, "SBWRSetupDataMod_new")), "SBWRTemplatesDSet"));
    await $.stmt($.wcall([$t5], "Edit", [], C));
  }
  await $.mset((await $.v(C, "SBTemplAddEditForm_new")), "Caption", L0["rsupdtemplatecaption"]);
  await $.mcall((await $.v(C, "SBTemplAddEditForm_new")), "ShowModal", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TSBWRBookmarkSetup_new", "ActionRfreshTemplateExecute", async function ActionRfreshTemplateExecute(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t6 = (await $.mv((await $.v(C, "SBWRSetupDataMod_new")), "SBWRTemplatesDSet"));
    await $.stmt($.wcall([$t6], "Refresh", [], C));
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TSBWRBookmarkSetup_new", "ActnAddBookmarkExecute", async function ActnAddBookmarkExecute(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  L0["rsbookmarkcaption"] = "Yeni";
  {
    const $t7 = (await $.mv((await $.v(C, "SBWRSetupDataMod_new")), "SBWRBookmarksDSet"));
    await $.stmt($.wcall([$t7], "Insert", [], C));
  }
  await $.set(C, "i", (await $.mv((await $.v(C, "SBBookmarkAddEditForm_new")), "ShowModal")));
  await $.mset((await $.v(C, "SBBookmarkAddEditForm_new")), "Caption", L0["rsbookmarkcaption"]);
  if ($.truthy($.eq((await $.v(C, "i")), (await $.v(C, "mrOK"))))) {
    await $.mcall((await $.mv((await $.v(C, "SBWRSetupDataMod_new")), "SBWRBookmarksDSet")), "Refresh", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TSBWRBookmarkSetup_new", "ActnDeleteBookmarkExecute", async function ActnDeleteBookmarkExecute(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  L0["bookmarkdelete"] = "Silinməsinə əminsinizmi?";
  if ($.truthy($.eq((await $.call(C, "MessageDlg", [L0["bookmarkdelete"], (await $.v(C, "mtConfirmation")), [(await $.v(C, "mbYes")), (await $.v(C, "mbNo"))], 0])), (await $.v(C, "mrYes"))))) {
    {
      const $t8 = (await $.mv((await $.v(C, "SBWRSetupDataMod_new")), "SBWRBookmarksDSet"));
      await $.stmt($.wcall([$t8], "Delete", [], C));
    }
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TSBWRBookmarkSetup_new", "ActnEditBookmarkExecute", async function ActnEditBookmarkExecute(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  L0["rsbookmarkupdcaption"] = "Redaktə";
  {
    const $t9 = (await $.mv((await $.v(C, "SBWRSetupDataMod_new")), "SBWRBookmarksDSet"));
    await $.stmt($.wcall([$t9], "Edit", [], C));
  }
  await $.mset((await $.v(C, "SBBookmarkAddEditForm_new")), "Caption", L0["rsbookmarkupdcaption"]);
  await $.mcall((await $.v(C, "SBBookmarkAddEditForm_new")), "ShowModal", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TSBWRBookmarkSetup_new", "ActnNewBookmarkExecute", async function ActnNewBookmarkExecute(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t10 = (await $.mv((await $.v(C, "SBWRSetupDataMod_new")), "SBWRBookmarksDSet"));
    await $.stmt($.wcall([$t10], "Refresh", [], C));
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TSBWRBookmarkSetup_new", "BitBtn2Click", async function BitBtn2Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.stmt($.call(C, "Close", []));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TSBWRBookmarkSetup_new", "FormCanResize", async function FormCanResize(Self, p0, p1, p2, p3) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "newwidth": $.asRef(p1), "newheight": $.asRef(p2), "resize": $.asRef(p3), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await L0["resize"].set(false);
  return L0.result;
}, {"params": ["Sender", "NewWidth", "NewHeight", "Resize"], "kind": "procedure", "ptypes": ["TObject", "Integer", "Integer", "Boolean"]});
  U.method("TSBWRBookmarkSetup_new", "FormCreate", async function FormCreate(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "contractid": 0};
  await $.fixArgs(L0, ["sender"]);
  L0["contractid"] = (await $.v(C, "Get_SelectedContID"));
  await $.set(C, "SBWRSetupDataMod_new", (await $.mcall((await $.v(C, "TSBWRSetupDataMod_new")), "Create", [Self])));
  await $.set(C, "SBBookmarkAddEditForm_new", (await $.mcall((await $.v(C, "TSBBookmarkAddEditForm_new")), "create", [Self])));
  await $.set(C, "SBTemplAddEditForm_new", (await $.mcall((await $.v(C, "TSBTemplAddEditForm_new")), "Create", [Self])));
  await $.mcall((await $.mv((await $.v(C, "SBWRSetupDataMod_new")), "SBWRFieldsDSet")), "Open", []);
  await $.mcall((await $.mv((await $.v(C, "SBWRSetupDataMod_new")), "SBWRBookmarksDSet")), "Open", []);
  await $.mcall((await $.mv((await $.v(C, "SBWRSetupDataMod_new")), "SBOracleDSetTamplates")), "Open", []);
  await $.mcall((await $.mv((await $.v(C, "SBWRSetupDataMod_new")), "SBWRTemplatesDSet")), "Open", []);
  await $.stmt((await $.mcall((await $.v(C, "SBTranslateProc")), "TranslateAllCompForms", [Self, (await $.mv((await $.v(C, "sboapiDataModule")), "OrPack_SL"))])));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TSBWRBookmarkSetup_new", "FormDestroy", async function FormDestroy(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mcall((await $.mv((await $.v(C, "SBWRSetupDataMod_new")), "SBWRFieldsDSet")), "CloseAll", []);
  await $.mcall((await $.mv((await $.v(C, "SBWRSetupDataMod_new")), "SBWRTemplatesDSet")), "CloseAll", []);
  await $.mcall((await $.mv((await $.v(C, "SBWRSetupDataMod_new")), "SBWRBookmarksDSet")), "CloseAll", []);
  await $.mcall((await $.mv((await $.v(C, "SBWRSetupDataMod_new")), "SBOracleDSetTamplates")), "CloseAll", []);
  await $.mcall((await $.v(C, "SBBookmarkAddEditForm_new")), "Free", []);
  await $.mcall((await $.v(C, "SBTemplAddEditForm_new")), "Free", []);
  await $.mcall((await $.v(C, "SBWRSetupDataMod_new")), "Free", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TSBWRBookmarkSetup_new", "FormKeyPress", async function FormKeyPress(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "key": $.asRef(p1), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.eq((await $.call(C, "Ord", [(await L0["key"].get())])), (await $.v(C, "VK_ESCAPE"))))) {
    await $.stmt($.call(C, "Close", []));
  }
  return L0.result;
}, {"params": ["Sender", "Key"], "kind": "procedure", "ptypes": ["TObject", "Char"]});
  U.method("TSBWRBookmarkSetup_new", "ActnCloseExecute", async function ActnCloseExecute(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.stmt($.call(C, "Close", []));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TSBWRBookmarkSetup_new", "ActnDeleteBookmarkUpdate", async function ActnDeleteBookmarkUpdate(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t11 = (L0["sender"]);
    const $t12 = (await $.wv([$t11], "SBWRSetupDataMod_new", C, false));
    await $.wset([$t11, $t12], "Enabled", (await $.and_(($.gt((await $.mv((await $.wv([$t11, $t12], "SBWRBookmarksDSet", C, false)), "RecordCount")), 0)), async () => ($.gt((await $.mv((await $.wv([$t11, $t12], "SBWRTemplatesDSet", C, false)), "RecordCount")), 0)))), C);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  return U;
}
