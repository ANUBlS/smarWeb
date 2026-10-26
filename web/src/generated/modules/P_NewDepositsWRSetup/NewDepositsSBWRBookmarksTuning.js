// Generated from NewDepositsSBWRBookmarksTuning.pas by pas2js — do not edit by hand; regenerate instead.
/* eslint-disable */
// @ts-nocheck

export default function define($) {
  const U = $.unit("NewDepositsSBWRBookmarksTuning", ["Windows", "Messages", "SysUtils", "Classes", "Graphics", "Controls", "Forms", "NLSDialogs", "ActnList", "ImgList", "ExtCtrls", "StdCtrls", "Mask", "DBCtrls", "Grids", "DBGridEh", "ComCtrls", "ToolWin", "PluginToolBar", "Buttons", "XFSCtrls", "DBGridEhGrouping", "GridsEh", "NewDepositsSBWRSetupDataModImpl", "NewDepositsSBTemplateAddEditUnt", "NewDepositsSBBookmarkAddEditunt", "NewCommonDeclsImpl", "SBTranslateProc", "sboapiDataModuleimpl"]);
  const C = [U];
  U.defClass("TNewDepositsSBWRBookmarkSetup", "TForm", {"xfpanel1": {"name": "XFPanel1", "type": "TXFPanel"}, "xfpanel2": {"name": "XFPanel2", "type": "TXFPanel"}, "actionlist1": {"name": "ActionList1", "type": "TActionList"}, "actnaddbookmark": {"name": "ActnAddBookmark", "type": "TAction"}, "actndeletebookmark": {"name": "ActnDeleteBookmark", "type": "TAction"}, "actneditbookmark": {"name": "ActnEditBookmark", "type": "TAction"}, "actnnewbookmark": {"name": "ActnNewBookmark", "type": "TAction"}, "actnclose": {"name": "ActnClose", "type": "TAction"}, "imagelist1": {"name": "ImageList1", "type": "TImageList"}, "actionlist2": {"name": "ActionList2", "type": "TActionList"}, "actionaddtemplare": {"name": "ActionAddTemplare", "type": "TAction"}, "actionedittemplate": {"name": "ActionEditTemplate", "type": "TAction"}, "actiondeletetemplate": {"name": "ActionDeleteTemplate", "type": "TAction"}, "actionrfreshtemplate": {"name": "ActionRfreshTemplate", "type": "TAction"}, "actionclose": {"name": "ActionClose", "type": "TAction"}, "toolbar1": {"name": "ToolBar1", "type": "TToolBar"}, "toolbutton5": {"name": "ToolButton5", "type": "TToolButton"}, "toolbutton1": {"name": "ToolButton1", "type": "TToolButton"}, "toolbutton2": {"name": "ToolButton2", "type": "TToolButton"}, "toolbutton3": {"name": "ToolButton3", "type": "TToolButton"}, "toolbutton4": {"name": "ToolButton4", "type": "TToolButton"}, "toolbutton6": {"name": "ToolButton6", "type": "TToolButton"}, "toolbutton7": {"name": "ToolButton7", "type": "TToolButton"}, "toolbutton8": {"name": "ToolButton8", "type": "TToolButton"}, "xfpanel3": {"name": "XFPanel3", "type": "TXFPanel"}, "dbgrideh1": {"name": "DBGridEh1", "type": "TDBGridEh"}, "xfpanel4": {"name": "XFPanel4", "type": "TXFPanel"}, "groupbox1": {"name": "GroupBox1", "type": "TGroupBox"}, "dbedit1": {"name": "DBEdit1", "type": "TDBEdit"}, "xfpanel5": {"name": "XFPanel5", "type": "TXFPanel"}, "toolbar2": {"name": "ToolBar2", "type": "TToolBar"}, "toolbutton9": {"name": "ToolButton9", "type": "TToolButton"}, "toolbutton10": {"name": "ToolButton10", "type": "TToolButton"}, "toolbutton11": {"name": "ToolButton11", "type": "TToolButton"}, "toolbutton12": {"name": "ToolButton12", "type": "TToolButton"}, "toolbutton13": {"name": "ToolButton13", "type": "TToolButton"}, "toolbutton14": {"name": "ToolButton14", "type": "TToolButton"}, "toolbutton15": {"name": "ToolButton15", "type": "TToolButton"}, "toolbutton16": {"name": "ToolButton16", "type": "TToolButton"}, "xfpanel6": {"name": "XFPanel6", "type": "TXFPanel"}, "dbgrideh2": {"name": "DBGridEh2", "type": "TDBGridEh"}, "xfpanel7": {"name": "XFPanel7", "type": "TXFPanel"}, "bitbtn1": {"name": "BitBtn1", "type": "TBitBtn"}}, {});
  U.init(async () => {
    U.var_("NewDepositsSBWRBookmarkSetup", null, "TNewDepositsSBWRBookmarkSetup");
    U.var_("i", 0, "integer");
  });
  U.method("TNewDepositsSBWRBookmarkSetup", "ActionAddTemplareExecute", async function ActionAddTemplareExecute(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "i": 0};
  await $.fixArgs(L0, ["sender"]);
  L0["rstemplatecaption"] = "Yeni şablon";
  {
    const $t1 = (await $.mv((await $.v(C, "NewDepositsSBWRSetupDataMod")), "SBWRTemplatesDSet"));
    await $.stmt($.wcall([$t1], "Insert", [], C));
  }
  await $.mset((await $.v(C, "NewDepositsSBTemplAddEditForm")), "Caption", L0["rstemplatecaption"]);
  L0["i"] = (await $.mv((await $.v(C, "NewDepositsSBTemplAddEditForm")), "ShowModal"));
  if ($.truthy($.eq(L0["i"], (await $.v(C, "mrOK"))))) {
    {
      const $t2 = (await $.mv((await $.v(C, "NewDepositsSBWRSetupDataMod")), "SBWRTemplatesDSet"));
      await $.stmt($.wcall([$t2], "Refresh", [], C));
    }
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TNewDepositsSBWRBookmarkSetup", "ActionAddTemplareUpdate", async function ActionAddTemplareUpdate(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t3 = (L0["sender"]);
    await $.wset([$t3], "Enabled", $.gt((await $.mv((await $.mv((await $.wv([$t3], "NewDepositsSBWRSetupDataMod", C, false)), "SBWRTemplatesDSet")), "RecordCount")), 0), C);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TNewDepositsSBWRBookmarkSetup", "ActionDeleteTemplateExecute", async function ActionDeleteTemplateExecute(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  L0["tempdeletemsg"] = "Silinməsinə əminsinizmi?";
  if ($.truthy($.eq((await $.call(C, "MessageDlg", [L0["tempdeletemsg"], (await $.v(C, "mtConfirmation")), [(await $.v(C, "mbYes")), (await $.v(C, "mbNo"))], 0])), (await $.v(C, "mrYes"))))) {
    {
      const $t4 = (await $.mv((await $.v(C, "NewDepositsSBWRSetupDataMod")), "SBWRTemplatesDSet"));
      await $.stmt($.wcall([$t4], "Delete", [], C));
    }
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TNewDepositsSBWRBookmarkSetup", "ActionEditTemplateExecute", async function ActionEditTemplateExecute(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  L0["rsupdtemplatecaption"] = "Şablonun redaktəsi";
  {
    const $t5 = (await $.mv((await $.v(C, "NewDepositsSBWRSetupDataMod")), "SBWRTemplatesDSet"));
    await $.stmt($.wcall([$t5], "Edit", [], C));
  }
  await $.mset((await $.v(C, "NewDepositsSBTemplAddEditForm")), "Caption", L0["rsupdtemplatecaption"]);
  await $.mcall((await $.v(C, "NewDepositsSBTemplAddEditForm")), "ShowModal", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TNewDepositsSBWRBookmarkSetup", "ActionRfreshTemplateExecute", async function ActionRfreshTemplateExecute(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t6 = (await $.mv((await $.v(C, "NewDepositsSBWRSetupDataMod")), "SBWRTemplatesDSet"));
    await $.stmt($.wcall([$t6], "Refresh", [], C));
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TNewDepositsSBWRBookmarkSetup", "ActnAddBookmarkExecute", async function ActnAddBookmarkExecute(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  L0["rsbookmarkcaption"] = "Yeni";
  {
    const $t7 = (await $.mv((await $.v(C, "NewDepositsSBWRSetupDataMod")), "SBWRBookmarksDSet"));
    await $.stmt($.wcall([$t7], "Insert", [], C));
  }
  await $.set(C, "i", (await $.mv((await $.v(C, "NewDepositsSBBookmarkAddEditForm")), "ShowModal")));
  await $.mset((await $.v(C, "NewDepositsSBBookmarkAddEditForm")), "Caption", L0["rsbookmarkcaption"]);
  if ($.truthy($.eq((await $.v(C, "i")), (await $.v(C, "mrOK"))))) {
    await $.mcall((await $.mv((await $.v(C, "NewDepositsSBWRSetupDataMod")), "SBWRBookmarksDSet")), "Refresh", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TNewDepositsSBWRBookmarkSetup", "ActnDeleteBookmarkExecute", async function ActnDeleteBookmarkExecute(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  L0["bookmarkdelete"] = "Silinməsinə əminsinizmi?";
  if ($.truthy($.eq((await $.call(C, "MessageDlg", [L0["bookmarkdelete"], (await $.v(C, "mtConfirmation")), [(await $.v(C, "mbYes")), (await $.v(C, "mbNo"))], 0])), (await $.v(C, "mrYes"))))) {
    {
      const $t8 = (await $.mv((await $.v(C, "NewDepositsSBWRSetupDataMod")), "SBWRBookmarksDSet"));
      await $.stmt($.wcall([$t8], "Delete", [], C));
    }
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TNewDepositsSBWRBookmarkSetup", "ActnEditBookmarkExecute", async function ActnEditBookmarkExecute(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  L0["rsbookmarkupdcaption"] = "Redaktə";
  {
    const $t9 = (await $.mv((await $.v(C, "NewDepositsSBWRSetupDataMod")), "SBWRBookmarksDSet"));
    await $.stmt($.wcall([$t9], "Edit", [], C));
  }
  await $.mset((await $.v(C, "NewDepositsSBBookmarkAddEditForm")), "Caption", L0["rsbookmarkupdcaption"]);
  await $.mcall((await $.v(C, "NewDepositsSBBookmarkAddEditForm")), "ShowModal", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TNewDepositsSBWRBookmarkSetup", "ActnNewBookmarkExecute", async function ActnNewBookmarkExecute(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t10 = (await $.mv((await $.v(C, "NewDepositsSBWRSetupDataMod")), "SBWRBookmarksDSet"));
    await $.stmt($.wcall([$t10], "Refresh", [], C));
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TNewDepositsSBWRBookmarkSetup", "BitBtn1Click", async function BitBtn1Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.stmt($.call(C, "Close", []));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TNewDepositsSBWRBookmarkSetup", "FormCanResize", async function FormCanResize(Self, p0, p1, p2, p3) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "newwidth": $.asRef(p1), "newheight": $.asRef(p2), "resize": $.asRef(p3), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await L0["resize"].set(false);
  return L0.result;
}, {"params": ["Sender", "NewWidth", "NewHeight", "Resize"], "kind": "procedure", "ptypes": ["TObject", "Integer", "Integer", "Boolean"]});
  U.method("TNewDepositsSBWRBookmarkSetup", "FormCreate", async function FormCreate(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "contractid": 0};
  await $.fixArgs(L0, ["sender"]);
  await $.set(C, "NewDepositsSBWRSetupDataMod", (await $.mcall((await $.v(C, "TNewDepositsSBWRSetupDataMod")), "Create", [Self])));
  await $.set(C, "NewDepositsSBBookmarkAddEditForm", (await $.mcall((await $.v(C, "TNewDepositsSBBookmarkAddEditForm")), "create", [Self])));
  await $.set(C, "NewDepositsSBTemplAddEditForm", (await $.mcall((await $.v(C, "TNewDepositsSBTemplAddEditForm")), "Create", [Self])));
  await $.mcall((await $.mv((await $.v(C, "NewDepositsSBWRSetupDataMod")), "SBWRFieldsDSet")), "Open", []);
  await $.mcall((await $.mv((await $.v(C, "NewDepositsSBWRSetupDataMod")), "SBWRBookmarksDSet")), "Open", []);
  await $.mcall((await $.mv((await $.v(C, "NewDepositsSBWRSetupDataMod")), "SBOracleDSetTamplates")), "Open", []);
  await $.mcall((await $.mv((await $.v(C, "NewDepositsSBWRSetupDataMod")), "SBWRTemplatesDSet")), "Open", []);
  await $.stmt((await $.mcall((await $.v(C, "SBTranslateProc")), "TranslateAllCompForms", [Self, (await $.mv((await $.v(C, "sboapiDataModule")), "OrPack_SL"))])));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TNewDepositsSBWRBookmarkSetup", "FormDestroy", async function FormDestroy(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mcall((await $.mv((await $.v(C, "NewDepositsSBWRSetupDataMod")), "SBWRFieldsDSet")), "CloseAll", []);
  await $.mcall((await $.mv((await $.v(C, "NewDepositsSBWRSetupDataMod")), "SBWRTemplatesDSet")), "CloseAll", []);
  await $.mcall((await $.mv((await $.v(C, "NewDepositsSBWRSetupDataMod")), "SBWRBookmarksDSet")), "CloseAll", []);
  await $.mcall((await $.mv((await $.v(C, "NewDepositsSBWRSetupDataMod")), "SBOracleDSetTamplates")), "CloseAll", []);
  await $.mcall((await $.v(C, "NewDepositsSBBookmarkAddEditForm")), "Free", []);
  await $.mcall((await $.v(C, "NewDepositsSBTemplAddEditForm")), "Free", []);
  await $.mcall((await $.v(C, "NewDepositsSBWRSetupDataMod")), "Free", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TNewDepositsSBWRBookmarkSetup", "FormKeyPress", async function FormKeyPress(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "key": $.asRef(p1), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.eq((await $.call(C, "Ord", [(await L0["key"].get())])), (await $.v(C, "VK_ESCAPE"))))) {
    await $.stmt($.call(C, "Close", []));
  }
  return L0.result;
}, {"params": ["Sender", "Key"], "kind": "procedure", "ptypes": ["TObject", "Char"]});
  U.method("TNewDepositsSBWRBookmarkSetup", "ActnCloseExecute", async function ActnCloseExecute(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.stmt($.call(C, "Close", []));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TNewDepositsSBWRBookmarkSetup", "ActnDeleteBookmarkUpdate", async function ActnDeleteBookmarkUpdate(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t11 = (L0["sender"]);
    const $t12 = (await $.wv([$t11], "NewDepositsSBWRSetupDataMod", C, false));
    await $.wset([$t11, $t12], "Enabled", (await $.and_(($.gt((await $.mv((await $.wv([$t11, $t12], "SBWRBookmarksDSet", C, false)), "RecordCount")), 0)), async () => ($.gt((await $.mv((await $.wv([$t11, $t12], "SBWRTemplatesDSet", C, false)), "RecordCount")), 0)))), C);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TNewDepositsSBWRBookmarkSetup", "ActionEditTemplateUpdate", async function ActionEditTemplateUpdate(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t13 = (L0["sender"]);
    await $.wset([$t13], "Enabled", $.gt((await $.mv((await $.mv((await $.wv([$t13], "NewDepositsSBWRSetupDataMod", C, false)), "SBWRTemplatesDSet")), "RecordCount")), 0), C);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  return U;
}
