// Generated from WRBookmarksTuning.pas by pas2js — do not edit by hand; regenerate instead.
/* eslint-disable */
// @ts-nocheck

export default function define($) {
  const U = $.unit("WRBookmarksTuning", ["Windows", "Messages", "SysUtils", "Classes", "Graphics", "Controls", "Forms", "dialogs", "ComCtrls", "ToolWin", "ActnList", "ImgList", "Grids", "DBGridEh", "DBGrids", "StdCtrls", "Mask", "DBCtrls", "PluginToolBar", "ExtCtrls", "NLSLocalizer", "DBGridEhGrouping", "GridsEh", "WRSetupDataModImpl", "BookmarkAddEditUnt", "TemplateAddEditUnt", "Filialinfoimpl", "SBTranslateProc", "sboapiDataModuleImpl", "WRSetupLoader"]);
  const C = [U];
  U.defClass("TWRBookmarkSetup", "TForm", {"actionlist1": {"name": "ActionList1", "type": "TActionList"}, "actnaddbookmark": {"name": "ActnAddBookmark", "type": "TAction"}, "actndeletebookmark": {"name": "ActnDeleteBookmark", "type": "TAction"}, "actneditbookmark": {"name": "ActnEditBookmark", "type": "TAction"}, "actnnewbookmark": {"name": "ActnNewBookmark", "type": "TAction"}, "actnclose": {"name": "ActnClose", "type": "TAction"}, "imagelist1": {"name": "ImageList1", "type": "TImageList"}, "panel1": {"name": "Panel1", "type": "TPanel"}, "panel2": {"name": "Panel2", "type": "TPanel"}, "dbgrideh1": {"name": "DBGridEh1", "type": "TDBGridEh"}, "dbgrideh2": {"name": "DBGridEh2", "type": "TDBGridEh"}, "groupbox1": {"name": "GroupBox1", "type": "TGroupBox"}, "dbedit1": {"name": "DBEdit1", "type": "TDBEdit"}, "plugintoolbar1": {"name": "PluginToolBar1", "type": "TPluginToolBar"}, "plugintoolbar2": {"name": "PluginToolBar2", "type": "TPluginToolBar"}, "toolbutton1": {"name": "ToolButton1", "type": "TToolButton"}, "toolbutton2": {"name": "ToolButton2", "type": "TToolButton"}, "toolbutton3": {"name": "ToolButton3", "type": "TToolButton"}, "toolbutton4": {"name": "ToolButton4", "type": "TToolButton"}, "toolbutton5": {"name": "ToolButton5", "type": "TToolButton"}, "toolbutton6": {"name": "ToolButton6", "type": "TToolButton"}, "toolbutton7": {"name": "ToolButton7", "type": "TToolButton"}, "toolbutton8": {"name": "ToolButton8", "type": "TToolButton"}, "toolbutton10": {"name": "ToolButton10", "type": "TToolButton"}, "toolbutton11": {"name": "ToolButton11", "type": "TToolButton"}, "toolbutton12": {"name": "ToolButton12", "type": "TToolButton"}, "toolbutton13": {"name": "ToolButton13", "type": "TToolButton"}, "toolbutton14": {"name": "ToolButton14", "type": "TToolButton"}, "toolbutton15": {"name": "ToolButton15", "type": "TToolButton"}, "toolbutton16": {"name": "ToolButton16", "type": "TToolButton"}, "toolbutton17": {"name": "ToolButton17", "type": "TToolButton"}, "toolbutton18": {"name": "ToolButton18", "type": "TToolButton"}, "actionlist2": {"name": "ActionList2", "type": "TActionList"}, "actionaddtemplare": {"name": "ActionAddTemplare", "type": "TAction"}, "actiondeletetemplate": {"name": "ActionDeleteTemplate", "type": "TAction"}, "actionrfreshtemplate": {"name": "ActionRfreshTemplate", "type": "TAction"}, "actionclose": {"name": "ActionClose", "type": "TAction"}, "actionedittemplate": {"name": "ActionEditTemplate", "type": "TAction"}, "toolbutton9": {"name": "ToolButton9", "type": "TToolButton"}}, {});
  U.init(async () => {
    U.var_("WRBookmarkSetup", null, "TWRBookmarkSetup");
    U.var_("i", 0, "integer");
  });
  U.method("TWRBookmarkSetup", "ActnAddBookmarkExecute", async function ActnAddBookmarkExecute(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  L0["rsbookmarkcaption"] = "Yeni";
  {
    const $t1 = (await $.mv((await $.v(C, "WRSetupDataMod")), "WRBookmarksDataSet"));
    await $.stmt($.wcall([$t1], "Insert", [], C));
  }
  await $.set(C, "i", (await $.mv((await $.v(C, "BookmarkAddEditForm")), "ShowModal")));
  await $.set(C, "Caption", L0["rsbookmarkcaption"]);
  if ($.truthy($.eq((await $.v(C, "i")), (await $.v(C, "mrOK"))))) {
    await $.mcall((await $.mv((await $.v(C, "WRSetupDataMod")), "WRBookmarksDataSet")), "Refresh", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TWRBookmarkSetup", "FormCreate", async function FormCreate(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.set(C, "WRSetupDataMod", (await $.mcall((await $.v(C, "TWRSetupDataMod")), "Create", [Self])));
  await $.set(C, "BookmarkAddEditForm", (await $.mcall((await $.v(C, "TBookmarkAddEditForm")), "create", [Self])));
  await $.set(C, "TemplAddEditForm", (await $.mcall((await $.v(C, "TTemplAddEditForm")), "Create", [Self])));
  await $.mcall((await $.mv((await $.v(C, "WRSetupDataMod")), "WRFieldsDataSet")), "Open", []);
  await $.mcall((await $.mv((await $.v(C, "WRSetupDataMod")), "WRBookmarksDataSet")), "Open", []);
  await $.mcall((await $.mv((await $.v(C, "WRSetupDataMod")), "OracleDataSetTamplates")), "Open", []);
  await $.mcall((await $.mv((await $.v(C, "WRSetupDataMod")), "WRTemplatesDataSet")), "Open", []);
  await $.stmt((await $.mcall((await $.v(C, "SBTranslateProc")), "TranslateAllCompForms", [Self, (await $.mv((await $.v(C, "sboapiDataModule")), "OrPack_SL"))])));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TWRBookmarkSetup", "FormDestroy", async function FormDestroy(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mcall((await $.mv((await $.v(C, "WRSetupDataMod")), "WRFieldsDataSet")), "CloseAll", []);
  await $.mcall((await $.mv((await $.v(C, "WRSetupDataMod")), "WRTemplatesDataSet")), "CloseAll", []);
  await $.mcall((await $.mv((await $.v(C, "WRSetupDataMod")), "WRBookmarksDataSet")), "CloseAll", []);
  await $.mcall((await $.mv((await $.v(C, "WRSetupDataMod")), "OracleDataSetTamplates")), "CloseAll", []);
  await $.mcall((await $.v(C, "BookmarkAddEditForm")), "Free", []);
  await $.mcall((await $.v(C, "TemplAddEditForm")), "Free", []);
  await $.mcall((await $.v(C, "WRSetupDataMod")), "Free", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TWRBookmarkSetup", "ActnDeleteBookmarkExecute", async function ActnDeleteBookmarkExecute(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  L0["bookmarkdelete"] = "Silinməsinə əminsinizmi?";
  if ($.truthy($.eq((await $.call(C, "MessageDlg", [L0["bookmarkdelete"], (await $.v(C, "mtConfirmation")), [(await $.v(C, "mbYes")), (await $.v(C, "mbNo"))], 0])), (await $.v(C, "mrYes"))))) {
    {
      const $t2 = (await $.mv((await $.v(C, "WRSetupDataMod")), "WRBookmarksDataSet"));
      await $.stmt($.wcall([$t2], "Delete", [], C));
    }
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TWRBookmarkSetup", "ActnEditBookmarkExecute", async function ActnEditBookmarkExecute(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  L0["rsbookmarkupdcaption"] = "Redaktə";
  {
    const $t3 = (await $.mv((await $.v(C, "WRSetupDataMod")), "WRBookmarksDataSet"));
    await $.stmt($.wcall([$t3], "Edit", [], C));
  }
  await $.set(C, "Caption", L0["rsbookmarkupdcaption"]);
  await $.mcall((await $.v(C, "BookmarkAddEditForm")), "ShowModal", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TWRBookmarkSetup", "ActnNewBookmarkExecute", async function ActnNewBookmarkExecute(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t4 = (await $.mv((await $.v(C, "WRSetupDataMod")), "WRBookmarksDataSet"));
    await $.stmt($.wcall([$t4], "Refresh", [], C));
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TWRBookmarkSetup", "FormCanResize", async function FormCanResize(Self, p0, p1, p2, p3) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "newwidth": $.asRef(p1), "newheight": $.asRef(p2), "resize": $.asRef(p3), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await L0["resize"].set(false);
  return L0.result;
}, {"params": ["Sender", "NewWidth", "NewHeight", "Resize"], "kind": "procedure", "ptypes": ["TObject", "Integer", "Integer", "Boolean"]});
  U.method("TWRBookmarkSetup", "ActnCloseExecute", async function ActnCloseExecute(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.stmt($.call(C, "Close", []));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TWRBookmarkSetup", "ActnDeleteBookmarkUpdate", async function ActnDeleteBookmarkUpdate(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t5 = (await $.mv((await $.v(C, "WRSetupDataMod")), "WRBookmarksDataSet"));
    await $.mset((await $.wv([$t5], "Sender", { get: async () => L0["sender"], set: async (v) => { L0["sender"] = v; }, local: true }, false)), "Enabled", (await $.and_((await $.wv([$t5], "Active", C, false)), async () => ($.gt((await $.wv([$t5], "RecordCount", C, false)), 0)))));
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TWRBookmarkSetup", "ActnEditBookmarkUpdate", async function ActnEditBookmarkUpdate(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t6 = (await $.mv((await $.v(C, "WRSetupDataMod")), "WRBookmarksDataSet"));
    await $.mset((await $.wv([$t6], "Sender", { get: async () => L0["sender"], set: async (v) => { L0["sender"] = v; }, local: true }, false)), "Enabled", (await $.and_((await $.wv([$t6], "Active", C, false)), async () => ($.gt((await $.wv([$t6], "RecordCount", C, false)), 0)))));
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TWRBookmarkSetup", "FormKeyPress", async function FormKeyPress(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "key": $.asRef(p1), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.eq((await $.call(C, "Ord", [(await L0["key"].get())])), (await $.v(C, "VK_ESCAPE"))))) {
    await $.stmt($.call(C, "Close", []));
  }
  return L0.result;
}, {"params": ["Sender", "Key"], "kind": "procedure", "ptypes": ["TObject", "Char"]});
  U.method("TWRBookmarkSetup", "ActionAddTemplareExecute", async function ActionAddTemplareExecute(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "i": 0};
  await $.fixArgs(L0, ["sender"]);
  L0["rstemplatecaption"] = "Yeni şablon";
  {
    const $t7 = (await $.mv((await $.v(C, "WRSetupDataMod")), "WRTemplatesDataSet"));
    await $.stmt($.wcall([$t7], "Insert", [], C));
  }
  {
    const $t8 = (await $.mv((await $.v(C, "WRSetupDataMod")), "OracleDataSet1"));
    if ($.truthy((await $.wv([$t8], "Active", C, false)))) {
      await $.stmt($.wcall([$t8], "close", [], C));
    }
    await $.stmt((await $.wcall([$t8], "SetVariable", ["id", (await $.wv([$t8], "meh", C, false))], C)));
    await $.stmt($.wcall([$t8], "open", [], C));
    if ($.truthy($.gt((await $.wv([$t8], "RecordCount", C, false)), 0))) {
      await $.mset((await $.mcall((await $.mv((await $.wv([$t8], "WRSetupDataMod", C, false)), "WRTemplatesDataSet")), "FieldByName", ["mehid"])), "AsInteger", (await $.wv([$t8], "meh", C, false)));
      await $.mset((await $.mv((await $.wv([$t8], "TemplAddEditForm", C, false)), "DBEdit3")), "Text", (await $.wcall([$t8], "inttostr", [(await $.wv([$t8], "meh", C, false))], C)));
    }
  }
  await $.set(C, "Caption", L0["rstemplatecaption"]);
  L0["i"] = (await $.mv((await $.v(C, "TemplAddEditForm")), "ShowModal"));
  if ($.truthy($.eq(L0["i"], (await $.v(C, "mrOK"))))) {
    {
      const $t9 = (await $.mv((await $.v(C, "WRSetupDataMod")), "WRTemplatesDataSet"));
      await $.stmt($.wcall([$t9], "Refresh", [], C));
    }
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TWRBookmarkSetup", "ActionEditTemplateExecute", async function ActionEditTemplateExecute(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  L0["rsupdtemplatecaption"] = "Şablonun redaktəsi";
  {
    const $t10 = (await $.mv((await $.v(C, "WRSetupDataMod")), "WRTemplatesDataSet"));
    await $.stmt($.wcall([$t10], "Edit", [], C));
  }
  await $.set(C, "Caption", L0["rsupdtemplatecaption"]);
  await $.mcall((await $.v(C, "TemplAddEditForm")), "ShowModal", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TWRBookmarkSetup", "ActionDeleteTemplateExecute", async function ActionDeleteTemplateExecute(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  L0["tempdeletemsg"] = "Silinməsinə əminsinizmi?";
  if ($.truthy($.eq((await $.call(C, "MessageDlg", [L0["tempdeletemsg"], (await $.v(C, "mtConfirmation")), [(await $.v(C, "mbYes")), (await $.v(C, "mbNo"))], 0])), (await $.v(C, "mrYes"))))) {
    {
      const $t11 = (await $.mv((await $.v(C, "WRSetupDataMod")), "WRTemplatesDataSet"));
      await $.stmt($.wcall([$t11], "Delete", [], C));
    }
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TWRBookmarkSetup", "ActionRfreshTemplateExecute", async function ActionRfreshTemplateExecute(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t12 = (await $.mv((await $.v(C, "WRSetupDataMod")), "WRTemplatesDataSet"));
    await $.stmt($.wcall([$t12], "Refresh", [], C));
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TWRBookmarkSetup", "ActionDeleteTemplateUpdate", async function ActionDeleteTemplateUpdate(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t13 = (await $.mv((await $.v(C, "WRSetupDataMod")), "WRTemplatesDataSet"));
    await $.mset((await $.wv([$t13], "Sender", { get: async () => L0["sender"], set: async (v) => { L0["sender"] = v; }, local: true }, false)), "Enabled", (await $.and_((await $.wv([$t13], "Active", C, false)), async () => ($.gt((await $.wv([$t13], "RecordCount", C, false)), 0)))));
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TWRBookmarkSetup", "ActionEditTemplateUpdate", async function ActionEditTemplateUpdate(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t14 = (await $.mv((await $.v(C, "WRSetupDataMod")), "WRTemplatesDataSet"));
    await $.mset((await $.wv([$t14], "Sender", { get: async () => L0["sender"], set: async (v) => { L0["sender"] = v; }, local: true }, false)), "Enabled", (await $.and_((await $.wv([$t14], "Active", C, false)), async () => ($.gt((await $.wv([$t14], "RecordCount", C, false)), 0)))));
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TWRBookmarkSetup", "ToolButton9Click", async function ToolButton9Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mcall((await $.mv((await $.v(C, "WRSetupDataMod")), "FilialDataSet")), "open", []);
  if ($.truthy($.not((await $.call(C, "assigned", [(await $.v(C, "FrmFilial"))]))))) {
    {
      const $t15 = (await $.mcall((await $.v(C, "TFrmFilial")), "Create", [Self]));
      try {
        await $.stmt($.wcall([$t15], "ShowModal", [], C));
      } finally {
        await $.stmt($.wcall([$t15], "Release", [], C));
      }
    }
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  return U;
}
