// Generated from BookMarkSetupFormImpl.pas by pas2js — do not edit by hand; regenerate instead.
/* eslint-disable */
// @ts-nocheck

export default function define($) {
  const U = $.unit("BookMarkSetupFormImpl", ["Windows", "Messages", "SysUtils", "Variants", "Classes", "Graphics", "Controls", "Forms", "Dialogs", "ImgList", "ActnList", "StdCtrls", "Mask", "DBCtrls", "Grids", "DBGrids", "ComCtrls", "ToolWin", "DatModConstructionImpl", "TemplAddEditFormİmpl", "BookMarkAddEditFormImpl"]);
  const C = [U];
  U.defClass("TBookMarkSetupForm", "TForm", {"toolbar1": {"name": "ToolBar1", "type": "TToolBar"}, "toolbutton1": {"name": "ToolButton1", "type": "TToolButton"}, "toolbutton2": {"name": "ToolButton2", "type": "TToolButton"}, "toolbutton3": {"name": "ToolButton3", "type": "TToolButton"}, "toolbutton4": {"name": "ToolButton4", "type": "TToolButton"}, "toolbutton5": {"name": "ToolButton5", "type": "TToolButton"}, "toolbutton6": {"name": "ToolButton6", "type": "TToolButton"}, "toolbutton7": {"name": "ToolButton7", "type": "TToolButton"}, "dbgrid1": {"name": "DBGrid1", "type": "TDBGrid"}, "groupbox1": {"name": "GroupBox1", "type": "TGroupBox"}, "dbedit1": {"name": "DBEdit1", "type": "TDBEdit"}, "toolbar2": {"name": "ToolBar2", "type": "TToolBar"}, "toolbutton8": {"name": "ToolButton8", "type": "TToolButton"}, "toolbutton9": {"name": "ToolButton9", "type": "TToolButton"}, "toolbutton10": {"name": "ToolButton10", "type": "TToolButton"}, "toolbutton11": {"name": "ToolButton11", "type": "TToolButton"}, "toolbutton12": {"name": "ToolButton12", "type": "TToolButton"}, "toolbutton13": {"name": "ToolButton13", "type": "TToolButton"}, "toolbutton14": {"name": "ToolButton14", "type": "TToolButton"}, "dbgrid2": {"name": "DBGrid2", "type": "TDBGrid"}, "opendlg": {"name": "OpenDlg", "type": "TOpenDialog"}, "actionlist2": {"name": "ActionList2", "type": "TActionList"}, "actionaddtemplare": {"name": "ActionAddTemplare", "type": "TAction"}, "actionedittemplate": {"name": "ActionEditTemplate", "type": "TAction"}, "actiondeletetemplate": {"name": "ActionDeleteTemplate", "type": "TAction"}, "actionrfreshtemplate": {"name": "ActionRfreshTemplate", "type": "TAction"}, "actionclose": {"name": "ActionClose", "type": "TAction"}, "imagelist1": {"name": "ImageList1", "type": "TImageList"}, "actionlist1": {"name": "ActionList1", "type": "TActionList"}, "actnaddbookmark": {"name": "ActnAddBookmark", "type": "TAction"}, "actndeletebookmark": {"name": "ActnDeleteBookmark", "type": "TAction"}, "actneditbookmark": {"name": "ActnEditBookmark", "type": "TAction"}, "actnnewbookmark": {"name": "ActnNewBookmark", "type": "TAction"}, "actnclose": {"name": "ActnClose", "type": "TAction"}}, {});
  U.init(async () => {
    U.var_("BookMarkSetupForm", null, "TBookMarkSetupForm");
  });
  U.method("TBookMarkSetupForm", "ToolButton10Click", async function ToolButton10Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t1 = (await $.mv((await $.v(C, "DatModConstruction")), "Bookmarks"));
    await $.stmt($.wcall([$t1], "Edit", [], C));
    await $.wset([$t1], "BookMarkAddEditForm", (await $.mcall((await $.wv([$t1], "TBookMarkAddEditForm", C, false)), "Create", [Self])), C);
    await $.mcall((await $.wv([$t1], "BookMarkAddEditForm", C, false)), "ShowModal", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TBookMarkSetupForm", "ToolButton12Click", async function ToolButton12Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  L0["bookmarkdelete"] = "Silinməsinə əminsiniz?";
  if ($.truthy($.eq((await $.call(C, "MessageDlg", [L0["bookmarkdelete"], (await $.v(C, "mtConfirmation")), [(await $.v(C, "mbYes")), (await $.v(C, "mbNo"))], 0])), (await $.v(C, "mrYes"))))) {
    {
      const $t2 = (await $.mv((await $.v(C, "DatModConstruction")), "Bookmarks"));
      await $.stmt($.wcall([$t2], "Delete", [], C));
    }
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TBookMarkSetupForm", "ToolButton1Click", async function ToolButton1Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t3 = (await $.mv((await $.v(C, "DatModConstruction")), "Templates"));
    await $.stmt($.wcall([$t3], "Insert", [], C));
    await $.wset([$t3], "TempAddEditForm", (await $.mcall((await $.wv([$t3], "TTempAddEditForm", C, false)), "Create", [Self])), C);
    await $.mcall((await $.wv([$t3], "TempAddEditForm", C, false)), "ShowModal", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TBookMarkSetupForm", "ToolButton3Click", async function ToolButton3Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t4 = (await $.mv((await $.v(C, "DatModConstruction")), "Templates"));
    await $.stmt($.wcall([$t4], "Edit", [], C));
    await $.wset([$t4], "TempAddEditForm", (await $.mcall((await $.wv([$t4], "TTempAddEditForm", C, false)), "Create", [Self])), C);
    await $.mcall((await $.wv([$t4], "TempAddEditForm", C, false)), "ShowModal", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TBookMarkSetupForm", "ToolButton5Click", async function ToolButton5Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  L0["tempdeletemsg"] = "Silinməsinə əminsiniz?";
  if ($.truthy($.eq((await $.call(C, "MessageDlg", [L0["tempdeletemsg"], (await $.v(C, "mtConfirmation")), [(await $.v(C, "mbYes")), (await $.v(C, "mbNo"))], 0])), (await $.v(C, "mrYes"))))) {
    {
      const $t5 = (await $.mv((await $.v(C, "DatModConstruction")), "Templates"));
      await $.stmt($.wcall([$t5], "Delete", [], C));
    }
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TBookMarkSetupForm", "ToolButton7Click", async function ToolButton7Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t6 = (await $.mv((await $.v(C, "DatModConstruction")), "Templates"));
    await $.stmt($.wcall([$t6], "close", [], C));
    await $.stmt($.wcall([$t6], "open", [], C));
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TBookMarkSetupForm", "ToolButton8Click", async function ToolButton8Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t7 = (await $.mv((await $.v(C, "DatModConstruction")), "Bookmarks"));
    await $.stmt($.wcall([$t7], "Insert", [], C));
    await $.wset([$t7], "BookmarkAddEditForm", (await $.mcall((await $.wv([$t7], "TBookmarkAddEditForm", C, false)), "Create", [Self])), C);
    await $.mcall((await $.wv([$t7], "BookmarkAddEditForm", C, false)), "ShowModal", []);
    await $.mcall((await $.mv((await $.wv([$t7], "DatModConstruction", C, false)), "Bookmarks")), "Refresh", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TBookMarkSetupForm", "ToolButton14Click", async function ToolButton14Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t8 = (await $.mv((await $.v(C, "DatModConstruction")), "Bookmarks"));
    await $.stmt($.wcall([$t8], "close", [], C));
    await $.stmt($.wcall([$t8], "open", [], C));
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  return U;
}
