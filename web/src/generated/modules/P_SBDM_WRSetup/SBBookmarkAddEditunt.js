// Generated from SBBookmarkAddEditunt.pas by pas2js — do not edit by hand; regenerate instead.
/* eslint-disable */
// @ts-nocheck

export default function define($) {
  const U = $.unit("SBBookmarkAddEditunt", ["Windows", "Messages", "SysUtils", "Classes", "Graphics", "Controls", "Forms", "Dialogs", "ActnList", "DBCtrlsEh", "DBLookupEh", "StdCtrls", "Mask", "DBCtrls", "SBWRSetupDataModImpl", "SBWRBookmarksTuning", "SBTranslateProc", "sboapiDataModuleimpl"]);
  const C = [U];
  U.defClass("TSBBookmarkAddEditForm", "TForm", {"label1": {"name": "Label1", "type": "TLabel"}, "label4": {"name": "Label4", "type": "TLabel"}, "dbedit3": {"name": "DBEdit3", "type": "TDBEdit"}, "button1": {"name": "Button1", "type": "TButton"}, "button2": {"name": "Button2", "type": "TButton"}, "dblookupcomboboxeh1": {"name": "DBLookupComboboxEh1", "type": "TDBLookupComboboxEh"}, "actionlist1": {"name": "ActionList1", "type": "TActionList"}, "actnaccept": {"name": "ActnAccept", "type": "TAction"}, "actnreject": {"name": "ActnReject", "type": "TAction"}}, {});
  U.init(async () => {
    U.var_("SBBookmarkAddEditForm", null, "TSBBookmarkAddEditForm");
  });
  U.method("TSBBookmarkAddEditForm", "ActnAcceptExecute", async function ActnAcceptExecute(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  L0["bookmarknameemptymsg"] = "Bukmarkın adı  daxil edilməyib";
  L0["descriptionnameemptymsg"] = "Təyinatı  daxil edilməyib";
  if ($.truthy((await $.and_(($.ne((await $.mv((await $.v(C, "DBLookupComboboxEh1")), "Text")), "")), async () => ($.ne((await $.mv((await $.v(C, "DBEdit3")), "Text")), "")))))) {
    {
      const $t1 = (await $.mv((await $.v(C, "SBWRSetupDataMod")), "SBWRBookmarksDSet"));
      await $.stmt($.wcall([$t1], "Post", [], C));
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
      const $t2 = (await $.mv((await $.v(C, "SBWRSetupDataMod")), "SBWRBookmarksDSet"));
      await $.stmt($.wcall([$t2], "Cancel", [], C));
    }
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TSBBookmarkAddEditForm", "ActnRejectExecute", async function ActnRejectExecute(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t3 = (await $.mv((await $.v(C, "SBWRSetupDataMod")), "SBWRBookmarksDSet"));
    await $.stmt($.wcall([$t3], "Cancel", [], C));
  }
  await $.set(C, "ModalResult", (await $.v(C, "mrCancel")));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TSBBookmarkAddEditForm", "FormCreate", async function FormCreate(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t4 = (await $.v(C, "SBWRSetupDataMod"));
    await $.mcall((await $.wv([$t4], "SBWRBookmarksDSet", C, false)), "Open", []);
    await $.mcall((await $.wv([$t4], "SBWRFieldsDSet", C, false)), "Open", []);
  }
  await $.stmt((await $.mcall((await $.v(C, "SBTranslateProc")), "TranslateAllCompForms", [Self, (await $.mv((await $.v(C, "sboapiDataModule")), "OrPack_SL"))])));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TSBBookmarkAddEditForm", "FormCanResize", async function FormCanResize(Self, p0, p1, p2, p3) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "newwidth": $.asRef(p1), "newheight": $.asRef(p2), "resize": $.asRef(p3), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await L0["resize"].set(false);
  return L0.result;
}, {"params": ["Sender", "NewWidth", "NewHeight", "Resize"], "kind": "procedure", "ptypes": ["TObject", "Integer", "Integer", "Boolean"]});
  U.method("TSBBookmarkAddEditForm", "FormDestroy", async function FormDestroy(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t5 = (await $.v(C, "SBWRSetupDataMod"));
    await $.mcall((await $.wv([$t5], "SBWRBookmarksDSet", C, false)), "CloseAll", []);
    await $.mcall((await $.wv([$t5], "SBWRFieldsDSet", C, false)), "CloseAll", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TSBBookmarkAddEditForm", "FormKeyPress", async function FormKeyPress(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "key": $.asRef(p1), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.eq((await $.call(C, "ORD", [(await L0["key"].get())])), (await $.v(C, "VK_ESCAPE"))))) {
    await $.stmt((await $.call(C, "ActnRejectExecute", [null])));
  }
  return L0.result;
}, {"params": ["Sender", "Key"], "kind": "procedure", "ptypes": ["TObject", "Char"]});
  return U;
}
