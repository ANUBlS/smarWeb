// Generated from CO_BookmarkAddEditunt.pas by pas2js — do not edit by hand; regenerate instead.
/* eslint-disable */
// @ts-nocheck

export default function define($) {
  const U = $.unit("CO_BookmarkAddEditunt", ["Windows", "Messages", "SysUtils", "Classes", "Graphics", "Controls", "Forms", "Dialogs", "StdCtrls", "ActnList", "DBCtrls", "Mask", "DBLookup", "CO_datamod_impl", "SBTranslateProc", "sboapiDataModuleImpl"]);
  const C = [U];
  U.defClass("TCO_BookmarkAddEditForm", "TForm", {"dbedit3": {"name": "DBEdit3", "type": "TDBEdit"}, "label1": {"name": "Label1", "type": "TLabel"}, "label4": {"name": "Label4", "type": "TLabel"}, "actionlist1": {"name": "ActionList1", "type": "TActionList"}, "actnaccept": {"name": "ActnAccept", "type": "TAction"}, "actnreject": {"name": "ActnReject", "type": "TAction"}, "button1": {"name": "Button1", "type": "TButton"}, "button2": {"name": "Button2", "type": "TButton"}, "dblookupcombobox1": {"name": "DBLookupComboBox1", "type": "TDBLookupComboBox"}}, {});
  U.init(async () => {
    U.var_("CO_BookmarkAddEditForm", null, "TCO_BookmarkAddEditForm");
  });
  U.method("TCO_BookmarkAddEditForm", "ActnAcceptExecute", async function ActnAcceptExecute(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  L0["bookmarknameemptymsg"] = "Əlfəcinin (Bookmark) adı daxil edilməyib";
  L0["descriptionnameemptymsg"] = "Təyinat daxil edilməyib";
  if ($.truthy((await $.and_(($.ne((await $.mv((await $.v(C, "DBLookupComboBox1")), "Text")), "")), async () => ($.ne((await $.mv((await $.v(C, "DBEdit3")), "Text")), "")))))) {
    {
      const $t1 = (await $.mv((await $.v(C, "CO_DataMod")), "Bookmarks"));
      await $.stmt($.wcall([$t1], "Post", [], C));
    }
    await $.set(C, "ModalResult", (await $.v(C, "mrOk")));
  } else {
    if ($.truthy($.eq((await $.mv((await $.v(C, "DBLookupComboBox1")), "Text")), ""))) {
      await $.stmt((await $.call(C, "Showmessage", ["Təyinat daxil edilməyib"])));
    }
    if ($.truthy($.eq((await $.mv((await $.v(C, "DBEdit3")), "Text")), ""))) {
      await $.stmt((await $.call(C, "Showmessage", ["Əlfəcinin (Bookmark) adı daxil edilməyib"])));
    }
    {
      const $t2 = (await $.mv((await $.v(C, "CO_DataMod")), "Bookmarks"));
      await $.stmt($.wcall([$t2], "Cancel", [], C));
    }
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TCO_BookmarkAddEditForm", "ActnRejectExecute", async function ActnRejectExecute(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t3 = (await $.mv((await $.v(C, "CO_DataMod")), "Bookmarks"));
    await $.stmt($.wcall([$t3], "Cancel", [], C));
  }
  await $.set(C, "ModalResult", (await $.v(C, "mrCancel")));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TCO_BookmarkAddEditForm", "FormCreate", async function FormCreate(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.stmt((await $.mcall((await $.v(C, "SBTranslateProc")), "TranslateAllCompForms", [Self, (await $.mv((await $.v(C, "sboapiDataModule")), "OrPack_SL"))])));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  return U;
}
