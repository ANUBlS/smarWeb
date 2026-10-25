// Generated from BookmarkSetup.pas by pas2js — do not edit by hand; regenerate instead.
/* eslint-disable */
// @ts-nocheck

export default function define($) {
  const U = $.unit("BookmarkSetup", ["Windows", "Messages", "SysUtils", "Classes", "Graphics", "Controls", "Forms", "ComCtrls", "ActnList", "ImgList", "ToolWin", "StdCtrls", "Grids", "DBGrids", "Mask", "DBCtrls", "Dialogs", "CO_datamod_impl", "CO_TemplateAddEditUnt", "CO_BookmarkAddEditunt", "SBTranslateProc", "sboapiDataModuleImpl"]);
  const C = [U];
  U.defClass("TCO_BookmarkSetup", "TForm", {"toolbar1": {"name": "ToolBar1", "type": "TToolBar"}, "imagelist1": {"name": "ImageList1", "type": "TImageList"}, "actionlist2": {"name": "ActionList2", "type": "TActionList"}, "actionaddtemplare": {"name": "ActionAddTemplare", "type": "TAction"}, "actionedittemplate": {"name": "ActionEditTemplate", "type": "TAction"}, "actiondeletetemplate": {"name": "ActionDeleteTemplate", "type": "TAction"}, "actionrfreshtemplate": {"name": "ActionRfreshTemplate", "type": "TAction"}, "actionclose": {"name": "ActionClose", "type": "TAction"}, "dbgrid1": {"name": "DBGrid1", "type": "TDBGrid"}, "groupbox1": {"name": "GroupBox1", "type": "TGroupBox"}, "dbgrid2": {"name": "DBGrid2", "type": "TDBGrid"}, "toolbar2": {"name": "ToolBar2", "type": "TToolBar"}, "toolbutton1": {"name": "ToolButton1", "type": "TToolButton"}, "toolbutton2": {"name": "ToolButton2", "type": "TToolButton"}, "toolbutton3": {"name": "ToolButton3", "type": "TToolButton"}, "toolbutton4": {"name": "ToolButton4", "type": "TToolButton"}, "toolbutton5": {"name": "ToolButton5", "type": "TToolButton"}, "toolbutton6": {"name": "ToolButton6", "type": "TToolButton"}, "toolbutton7": {"name": "ToolButton7", "type": "TToolButton"}, "actionlist1": {"name": "ActionList1", "type": "TActionList"}, "actnaddbookmark": {"name": "ActnAddBookmark", "type": "TAction"}, "actndeletebookmark": {"name": "ActnDeleteBookmark", "type": "TAction"}, "actneditbookmark": {"name": "ActnEditBookmark", "type": "TAction"}, "actnnewbookmark": {"name": "ActnNewBookmark", "type": "TAction"}, "actnclose": {"name": "ActnClose", "type": "TAction"}, "toolbutton8": {"name": "ToolButton8", "type": "TToolButton"}, "toolbutton9": {"name": "ToolButton9", "type": "TToolButton"}, "toolbutton10": {"name": "ToolButton10", "type": "TToolButton"}, "toolbutton11": {"name": "ToolButton11", "type": "TToolButton"}, "toolbutton12": {"name": "ToolButton12", "type": "TToolButton"}, "toolbutton13": {"name": "ToolButton13", "type": "TToolButton"}, "toolbutton14": {"name": "ToolButton14", "type": "TToolButton"}, "opendlg": {"name": "OpenDlg", "type": "TOpenDialog"}, "dbedit1": {"name": "DBEdit1", "type": "TDBEdit"}}, {});
  U.init(async () => {
    U.var_("CO_BookmarkSetup", null, "TCO_BookmarkSetup");
  });
  U.method("TCO_BookmarkSetup", "ActionAddTemplareExecute", async function ActionAddTemplareExecute(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "i": 0};
  await $.fixArgs(L0, ["sender"]);
  L0["rstemplatecaption"] = "Yeni şablon";
  {
    const $t1 = (await $.mv((await $.v(C, "CO_DataMod")), "Templates"));
    await $.stmt($.wcall([$t1], "Insert", [], C));
  }
  await $.set(C, "CO_TemplAddEditForm", (await $.mcall((await $.v(C, "TCO_TemplAddEditForm")), "Create", [Self])));
  L0["i"] = (await $.mv((await $.v(C, "CO_TemplAddEditForm")), "ShowModal"));
  if ($.truthy($.eq(L0["i"], (await $.v(C, "mrOK"))))) {
    await $.stmt($.call(C, "Refresh", []));
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TCO_BookmarkSetup", "ActionEditTemplateExecute", async function ActionEditTemplateExecute(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  L0["rsupdtemplatecaption"] = "Şablonun redaktəsi";
  {
    const $t2 = (await $.mv((await $.v(C, "CO_DataMod")), "Templates"));
    await $.stmt($.wcall([$t2], "Edit", [], C));
  }
  await $.set(C, "CO_TemplAddEditForm", (await $.mcall((await $.v(C, "TCO_TemplAddEditForm")), "Create", [Self])));
  await $.mcall((await $.v(C, "CO_TemplAddEditForm")), "ShowModal", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TCO_BookmarkSetup", "ActionDeleteTemplateExecute", async function ActionDeleteTemplateExecute(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  L0["tempdeletemsg"] = "Silinsin?";
  if ($.truthy($.eq((await $.call(C, "MessageDlg", [L0["tempdeletemsg"], (await $.v(C, "mtConfirmation")), [(await $.v(C, "mbYes")), (await $.v(C, "mbNo"))], 0])), (await $.v(C, "mrYes"))))) {
    {
      const $t3 = (await $.mv((await $.v(C, "CO_DataMod")), "Templates"));
      await $.stmt($.wcall([$t3], "Delete", [], C));
    }
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TCO_BookmarkSetup", "ActionRfreshTemplateExecute", async function ActionRfreshTemplateExecute(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t4 = (await $.mv((await $.v(C, "CO_DataMod")), "Templates"));
    await $.stmt($.wcall([$t4], "close", [], C));
    await $.stmt($.wcall([$t4], "open", [], C));
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TCO_BookmarkSetup", "ActnAddBookmarkExecute", async function ActnAddBookmarkExecute(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "i": 0};
  await $.fixArgs(L0, ["sender"]);
  L0["rsbookmarkcaption"] = "Yeni";
  {
    const $t5 = (await $.mv((await $.v(C, "CO_DataMod")), "Bookmarks"));
    await $.stmt($.wcall([$t5], "Insert", [], C));
  }
  L0["i"] = (await $.mv((await $.v(C, "CO_BookmarkAddEditForm")), "ShowModal"));
  if ($.truthy($.eq(L0["i"], (await $.v(C, "mrOK"))))) {
    await $.mcall((await $.mv((await $.v(C, "CO_DataMod")), "Bookmarks")), "Refresh", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TCO_BookmarkSetup", "ActnEditBookmarkExecute", async function ActnEditBookmarkExecute(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  L0["rsbookmarkupdcaption"] = "Redaktə";
  {
    const $t6 = (await $.mv((await $.v(C, "CO_DataMod")), "Bookmarks"));
    await $.stmt($.wcall([$t6], "Edit", [], C));
  }
  await $.mcall((await $.v(C, "CO_BookmarkAddEditForm")), "ShowModal", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TCO_BookmarkSetup", "ActnDeleteBookmarkExecute", async function ActnDeleteBookmarkExecute(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  L0["bookmarkdelete"] = "Silinsin?";
  if ($.truthy($.eq((await $.call(C, "MessageDlg", [L0["bookmarkdelete"], (await $.v(C, "mtConfirmation")), [(await $.v(C, "mbYes")), (await $.v(C, "mbNo"))], 0])), (await $.v(C, "mrYes"))))) {
    {
      const $t7 = (await $.mv((await $.v(C, "CO_DataMod")), "Bookmarks"));
      await $.stmt($.wcall([$t7], "Delete", [], C));
    }
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TCO_BookmarkSetup", "ActnNewBookmarkExecute", async function ActnNewBookmarkExecute(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t8 = (await $.mv((await $.v(C, "CO_DataMod")), "Bookmarks"));
    await $.stmt($.wcall([$t8], "close", [], C));
    await $.stmt($.wcall([$t8], "open", [], C));
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TCO_BookmarkSetup", "FormCreate", async function FormCreate(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.stmt((await $.mcall((await $.v(C, "SBTranslateProc")), "TranslateAllCompForms", [Self, (await $.mv((await $.v(C, "sboapiDataModule")), "OrPack_SL"))])));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  return U;
}
