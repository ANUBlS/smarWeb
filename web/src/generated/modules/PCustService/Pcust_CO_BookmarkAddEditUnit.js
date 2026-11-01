// Generated from Pcust_CO_BookmarkAddEditUnit.pas by pas2js — do not edit by hand; regenerate instead.
/* eslint-disable */
// @ts-nocheck

export default function define($) {
  const U = $.unit("Pcust_CO_BookmarkAddEditUnit", ["Windows", "Messages", "SysUtils", "Classes", "Graphics", "Controls", "Forms", "Dialogs", "StdCtrls", "ActnList", "DBCtrls", "Mask", "UnitDataModPCustService", "sboapiDataModuleImpl", "SBTranslateProc"]);
  const C = [U];
  U.defClass("TPh_CO_BookmarkAddEditForm", "TForm", {"label1": {"name": "Label1", "type": "TLabel"}, "label4": {"name": "Label4", "type": "TLabel"}, "dbedit3": {"name": "DBEdit3", "type": "TDBEdit"}, "actionlist1": {"name": "ActionList1", "type": "TActionList"}, "actnaccept": {"name": "ActnAccept", "type": "TAction"}, "actnreject": {"name": "ActnReject", "type": "TAction"}, "button1": {"name": "Button1", "type": "TButton"}, "button2": {"name": "Button2", "type": "TButton"}, "dblookupcombobox1": {"name": "DBLookupComboBox1", "type": "TDBLookupComboBox"}}, {});
  U.init(async () => {
    U.var_("Ph_CO_BookmarkAddEditForm", null, "TPh_CO_BookmarkAddEditForm");
  });
  U.method("TPh_CO_BookmarkAddEditForm", "ActnAcceptExecute", async function ActnAcceptExecute(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  L0["bookmarknameemptymsg"] = "Əlfəcinin (bookmark) adı daxil edilməyib";
  L0["descriptionnameemptymsg"] = "Təyinatı daxil edilməyib";
  if ($.truthy((await $.and_(($.ne((await $.mv((await $.v(C, "DBLookupComboBox1")), "Text")), "")), async () => ($.ne((await $.mv((await $.v(C, "DBEdit3")), "Text")), "")))))) {
    {
      const $t1 = (await $.mv((await $.v(C, "DataModPCustService")), "Bookmarks"));
      await $.stmt($.wcall([$t1], "Post", [], C));
    }
    await $.set(C, "ModalResult", (await $.v(C, "mrOk")));
  } else {
    if ($.truthy($.eq((await $.mv((await $.v(C, "DBLookupComboBox1")), "Text")), ""))) {
      await $.stmt((await $.call(C, "Showmessage", ["Təyinatı daxil edilməyib"])));
    }
    if ($.truthy($.eq((await $.mv((await $.v(C, "DBEdit3")), "Text")), ""))) {
      await $.stmt((await $.call(C, "Showmessage", ["Əlfəcinin (bookmark) adı daxil edilməyib"])));
    }
    {
      const $t2 = (await $.mv((await $.v(C, "DataModPCustService")), "Bookmarks"));
      await $.stmt($.wcall([$t2], "Cancel", [], C));
    }
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TPh_CO_BookmarkAddEditForm", "ActnRejectExecute", async function ActnRejectExecute(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t3 = (await $.mv((await $.v(C, "DataModPCustService")), "Bookmarks"));
    await $.stmt($.wcall([$t3], "Cancel", [], C));
  }
  await $.set(C, "ModalResult", (await $.v(C, "mrCancel")));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TPh_CO_BookmarkAddEditForm", "FormCreate", async function FormCreate(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.stmt((await $.mcall((await $.v(C, "SBTranslateProc")), "TranslateAllCompForms", [Self, (await $.mv((await $.v(C, "sboapiDataModule")), "OrPack_SL"))])));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  return U;
}
