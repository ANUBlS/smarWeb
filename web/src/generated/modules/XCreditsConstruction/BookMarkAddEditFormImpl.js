// Generated from BookMarkAddEditFormImpl.pas by pas2js — do not edit by hand; regenerate instead.
/* eslint-disable */
// @ts-nocheck

export default function define($) {
  const U = $.unit("BookMarkAddEditFormImpl", ["Windows", "Messages", "SysUtils", "Variants", "Classes", "Graphics", "Controls", "Forms", "Dialogs", "ActnList", "StdCtrls", "DBCtrls", "Mask", "DBCtrlsEh", "DBLookupEh", "dblookup", "DatModConstructionImpl"]);
  const C = [U];
  U.defClass("TBookMarkAddEditForm", "TForm", {"label1": {"name": "Label1", "type": "TLabel"}, "label4": {"name": "Label4", "type": "TLabel"}, "dblookupcomboboxeh1": {"name": "DBLookupComboboxEh1", "type": "TDBLookupComboboxEh"}, "dbedit3": {"name": "DBEdit3", "type": "TDBEdit"}, "actionlist1": {"name": "ActionList1", "type": "TActionList"}, "actnaccept": {"name": "ActnAccept", "type": "TAction"}, "actnreject": {"name": "ActnReject", "type": "TAction"}, "button3": {"name": "Button3", "type": "TButton"}, "button1": {"name": "Button1", "type": "TButton"}}, {});
  U.init(async () => {
    U.var_("BookMarkAddEditForm", null, "TBookMarkAddEditForm");
  });
  U.method("TBookMarkAddEditForm", "Button1Click", async function Button1Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t1 = (await $.mv((await $.v(C, "DatModConstruction")), "Bookmarks"));
    await $.stmt($.wcall([$t1], "Cancel", [], C));
    await $.wset([$t1], "ModalResult", (await $.wv([$t1], "mrCancel", C, false)), C);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TBookMarkAddEditForm", "Button3Click", async function Button3Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  L0["bookmarknameemptymsg"] = "Bukmarkın adı  daxil edilməyib";
  L0["descriptionnameemptymsg"] = "Təyinatı  daxil edilməyib";
  if ($.truthy((await $.and_(($.ne((await $.mv((await $.v(C, "DBLookupComboboxEh1")), "Text")), "")), async () => ($.ne((await $.mv((await $.v(C, "DBEdit3")), "Text")), "")))))) {
    {
      const $t2 = (await $.mv((await $.v(C, "DatModConstruction")), "Bookmarks"));
      await $.stmt($.wcall([$t2], "Post", [], C));
    }
    await $.set(C, "ModalResult", (await $.v(C, "mrOk")));
  } else {
    if ($.truthy($.eq((await $.mv((await $.v(C, "DBLookupComboboxEh1")), "Text")), ""))) {
      await $.stmt((await $.call(C, "Showmessage", ["Təyinatı  daxil edilməyib"])));
    }
    if ($.truthy($.eq((await $.mv((await $.v(C, "DBEdit3")), "Text")), ""))) {
      await $.stmt((await $.call(C, "Showmessage", ["Bukmarkın adı  daxil edilməyib"])));
    }
    {
      const $t3 = (await $.mv((await $.v(C, "DatModConstruction")), "Bookmarks"));
      await $.stmt($.wcall([$t3], "Cancel", [], C));
    }
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  return U;
}
