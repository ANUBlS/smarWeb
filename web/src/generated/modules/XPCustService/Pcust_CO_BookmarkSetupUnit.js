// Generated from Pcust_CO_BookmarkSetupUnit.pas by pas2js — do not edit by hand; regenerate instead.
/* eslint-disable */
// @ts-nocheck

export default function define($) {
  const U = $.unit("Pcust_CO_BookmarkSetupUnit", ["Windows", "Messages", "SysUtils", "Classes", "Graphics", "Controls", "Forms", "Dialogs", "ImgList", "ActnList", "StdCtrls", "Mask", "DBCtrls", "Grids", "DBGrids", "ComCtrls", "ToolWin", "UnitDataModPCustService", "Pcust_CO_TemplAddEditUnit", "Pcust_CO_BookmarkAddEditUnit", "sboapiDataModuleImpl", "SBTranslateProc"]);
  const C = [U];
  U.defClass("TPh_CO_BookmarkSetupFrom", "TForm", {"toolbar1": {"name": "ToolBar1", "type": "TToolBar"}, "toolbutton1": {"name": "ToolButton1", "type": "TToolButton"}, "toolbutton2": {"name": "ToolButton2", "type": "TToolButton"}, "toolbutton3": {"name": "ToolButton3", "type": "TToolButton"}, "toolbutton4": {"name": "ToolButton4", "type": "TToolButton"}, "toolbutton5": {"name": "ToolButton5", "type": "TToolButton"}, "toolbutton6": {"name": "ToolButton6", "type": "TToolButton"}, "toolbutton7": {"name": "ToolButton7", "type": "TToolButton"}, "dbgrid1": {"name": "DBGrid1", "type": "TDBGrid"}, "opendlg": {"name": "OpenDlg", "type": "TOpenDialog"}, "actionlist2": {"name": "ActionList2", "type": "TActionList"}, "actionaddtemplare": {"name": "ActionAddTemplare", "type": "TAction"}, "actionedittemplate": {"name": "ActionEditTemplate", "type": "TAction"}, "actiondeletetemplate": {"name": "ActionDeleteTemplate", "type": "TAction"}, "actionrfreshtemplate": {"name": "ActionRfreshTemplate", "type": "TAction"}, "actionclose": {"name": "ActionClose", "type": "TAction"}, "groupbox1": {"name": "GroupBox1", "type": "TGroupBox"}, "dbedit1": {"name": "DBEdit1", "type": "TDBEdit"}, "toolbar2": {"name": "ToolBar2", "type": "TToolBar"}, "toolbutton8": {"name": "ToolButton8", "type": "TToolButton"}, "toolbutton9": {"name": "ToolButton9", "type": "TToolButton"}, "toolbutton10": {"name": "ToolButton10", "type": "TToolButton"}, "toolbutton11": {"name": "ToolButton11", "type": "TToolButton"}, "toolbutton12": {"name": "ToolButton12", "type": "TToolButton"}, "toolbutton13": {"name": "ToolButton13", "type": "TToolButton"}, "toolbutton14": {"name": "ToolButton14", "type": "TToolButton"}, "imagelist1": {"name": "ImageList1", "type": "TImageList"}, "actionlist1": {"name": "ActionList1", "type": "TActionList"}, "actnaddbookmark": {"name": "ActnAddBookmark", "type": "TAction"}, "actndeletebookmark": {"name": "ActnDeleteBookmark", "type": "TAction"}, "actneditbookmark": {"name": "ActnEditBookmark", "type": "TAction"}, "actnnewbookmark": {"name": "ActnNewBookmark", "type": "TAction"}, "actnclose": {"name": "ActnClose", "type": "TAction"}, "dbgrid2": {"name": "DBGrid2", "type": "TDBGrid"}}, {});
  U.init(async () => {
    U.var_("Ph_CO_BookmarkSetupFrom", null, "TPh_CO_BookmarkSetupFrom");
  });
  U.method("TPh_CO_BookmarkSetupFrom", "ActionAddTemplareExecute", async function ActionAddTemplareExecute(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "i": 0};
  await $.fixArgs(L0, ["sender"]);
  L0["rstemplatecaption"] = "Yeni şablon";
  {
    const $t1 = (await $.mv((await $.v(C, "DataModPCustService")), "Templates"));
    await $.stmt($.wcall([$t1], "Insert", [], C));
  }
  L0["i"] = (await $.mv((await $.v(C, "Ph_CO_TemplAddEditForm")), "ShowModal"));
  if ($.truthy($.eq(L0["i"], (await $.v(C, "mrOK"))))) {
    {
      const $t2 = (await $.mv((await $.v(C, "DataModPCustService")), "Templates"));
      await $.stmt($.wcall([$t2], "Refresh", [], C));
    }
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TPh_CO_BookmarkSetupFrom", "ActionEditTemplateExecute", async function ActionEditTemplateExecute(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  L0["rsupdtemplatecaption"] = "Şablonun redaktəsi";
  {
    const $t3 = (await $.mv((await $.v(C, "DataModPCustService")), "Templates"));
    await $.stmt($.wcall([$t3], "Edit", [], C));
  }
  await $.mcall((await $.v(C, "Ph_CO_TemplAddEditForm")), "ShowModal", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TPh_CO_BookmarkSetupFrom", "ActionDeleteTemplateExecute", async function ActionDeleteTemplateExecute(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  L0["tempdeletemsg"] = "Silinsin?";
  if ($.truthy($.eq((await $.call(C, "MessageDlg", [L0["tempdeletemsg"], (await $.v(C, "mtConfirmation")), [(await $.v(C, "mbYes")), (await $.v(C, "mbNo"))], 0])), (await $.v(C, "mrYes"))))) {
    {
      const $t4 = (await $.mv((await $.v(C, "DataModPCustService")), "Templates"));
      await $.stmt($.wcall([$t4], "Delete", [], C));
    }
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TPh_CO_BookmarkSetupFrom", "ActionRfreshTemplateExecute", async function ActionRfreshTemplateExecute(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t5 = (await $.mv((await $.v(C, "DataModPCustService")), "Templates"));
    await $.stmt($.wcall([$t5], "close", [], C));
    await $.stmt($.wcall([$t5], "open", [], C));
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TPh_CO_BookmarkSetupFrom", "ActnAddBookmarkExecute", async function ActnAddBookmarkExecute(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "i": 0};
  await $.fixArgs(L0, ["sender"]);
  L0["rsbookmarkcaption"] = "Yeni";
  {
    const $t6 = (await $.mv((await $.v(C, "DataModPCustService")), "Bookmarks"));
    await $.stmt($.wcall([$t6], "Insert", [], C));
  }
  L0["i"] = (await $.mv((await $.v(C, "Ph_CO_BookmarkAddEditForm")), "ShowModal"));
  if ($.truthy($.eq(L0["i"], (await $.v(C, "mrOK"))))) {
    await $.mcall((await $.mv((await $.v(C, "DataModPCustService")), "Bookmarks")), "Refresh", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TPh_CO_BookmarkSetupFrom", "ActnEditBookmarkExecute", async function ActnEditBookmarkExecute(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  L0["rsbookmarkupdcaption"] = "Redaktə";
  {
    const $t7 = (await $.mv((await $.v(C, "DataModPCustService")), "Bookmarks"));
    await $.stmt($.wcall([$t7], "Edit", [], C));
  }
  await $.mcall((await $.v(C, "Ph_CO_BookmarkAddEditForm")), "ShowModal", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TPh_CO_BookmarkSetupFrom", "ActnDeleteBookmarkExecute", async function ActnDeleteBookmarkExecute(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  L0["bookmarkdelete"] = "Silinsin?";
  if ($.truthy($.eq((await $.call(C, "MessageDlg", [L0["bookmarkdelete"], (await $.v(C, "mtConfirmation")), [(await $.v(C, "mbYes")), (await $.v(C, "mbNo"))], 0])), (await $.v(C, "mrYes"))))) {
    {
      const $t8 = (await $.mv((await $.v(C, "DataModPCustService")), "Bookmarks"));
      await $.stmt($.wcall([$t8], "Delete", [], C));
    }
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TPh_CO_BookmarkSetupFrom", "ActnNewBookmarkExecute", async function ActnNewBookmarkExecute(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t9 = (await $.mv((await $.v(C, "DataModPCustService")), "Bookmarks"));
    await $.stmt($.wcall([$t9], "close", [], C));
    await $.stmt($.wcall([$t9], "open", [], C));
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TPh_CO_BookmarkSetupFrom", "FormCreate", async function FormCreate(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.set(C, "Ph_CO_TemplAddEditForm", (await $.mcall((await $.v(C, "TPh_CO_TemplAddEditForm")), "Create", [Self])));
  await $.stmt((await $.mcall((await $.v(C, "SBTranslateProc")), "TranslateAllCompForms", [Self, (await $.mv((await $.v(C, "sboapiDataModule")), "OrPack_SL"))])));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  return U;
}
