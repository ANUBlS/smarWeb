// Generated from SBTemplateAddEditUnt.pas by pas2js — do not edit by hand; regenerate instead.
/* eslint-disable */
// @ts-nocheck

export default function define($) {
  const U = $.unit("SBTemplateAddEditUnt", ["Windows", "Messages", "SysUtils", "Classes", "Graphics", "Controls", "Forms", "Dialogs", "StdCtrls", "ActnList", "Buttons", "Mask", "DBCtrls", "SBWRSetupDataModImpl", "SBTranslateProc", "sboapiDataModuleimpl"]);
  const C = [U];
  U.defClass("TSBTemplAddEditForm", "TForm", {"label1": {"name": "Label1", "type": "TLabel"}, "dbedit1": {"name": "DBEdit1", "type": "TDBEdit"}, "label2": {"name": "Label2", "type": "TLabel"}, "dbedit2": {"name": "DBEdit2", "type": "TDBEdit"}, "sbopendlg": {"name": "SBOpenDlg", "type": "TSpeedButton"}, "actionlist1": {"name": "ActionList1", "type": "TActionList"}, "actnaccept": {"name": "ActnAccept", "type": "TAction"}, "actnreject": {"name": "ActnReject", "type": "TAction"}, "button1": {"name": "Button1", "type": "TButton"}, "button2": {"name": "Button2", "type": "TButton"}}, {});
  U.init(async () => {
    U.var_("SBTemplAddEditForm", null, "TSBTemplAddEditForm");
  });
  U.method("TSBTemplAddEditForm", "ActnAcceptExecute", async function ActnAcceptExecute(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy((await $.and_(($.ne((await $.mv((await $.v(C, "DBEdit1")), "Text")), "")), async () => ($.ne((await $.mv((await $.v(C, "DBEdit2")), "Text")), "")))))) {
    {
      const $t1 = (await $.mv((await $.v(C, "SBWRSetupDataMod")), "SBWRTemplatesDSet"));
      await $.stmt($.wcall([$t1], "Post", [], C));
    }
    await $.set(C, "ModalResult", (await $.v(C, "mrOk")));
  } else {
    if ($.truthy($.eq((await $.mv((await $.v(C, "DBEdit1")), "Text")), ""))) {
      await $.stmt((await $.call(C, "ShowMessage", ["Şablonun adı   daxil  edilməyib"])));
    }
    if ($.truthy($.eq((await $.mv((await $.v(C, "DBEdit2")), "Text")), ""))) {
      await $.stmt((await $.call(C, "ShowMessage", ["Şablon faylı   daxil  edilməyib"])));
    }
    {
      const $t2 = (await $.mv((await $.v(C, "SBWRSetupDataMod")), "SBWRTemplatesDSet"));
      await $.stmt($.wcall([$t2], "Cancel", [], C));
    }
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TSBTemplAddEditForm", "ActnRejectExecute", async function ActnRejectExecute(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t3 = (await $.mv((await $.v(C, "SBWRSetupDataMod")), "SBWRTemplatesDSet"));
    await $.stmt($.wcall([$t3], "Cancel", [], C));
  }
  await $.set(C, "ModalResult", (await $.v(C, "mrCancel")));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TSBTemplAddEditForm", "SBOpenDlgClick", async function SBOpenDlgClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t4 = (await $.v(C, "SBWRSetupDataMod"));
    const $t5 = (await $.wv([$t4], "OpenDlg", C, false));
    const $t6 = (await $.wv([$t4, $t5], "SBWRTemplatesDSet", C, false));
    if ($.truthy((await $.wv([$t4, $t5, $t6], "Execute", C, false)))) {
      await $.mset((await $.wcall([$t4, $t5, $t6], "FieldByName", ["Path"], C)), "AsString", (await $.wv([$t4, $t5, $t6], "FileName", C, false)));
    }
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TSBTemplAddEditForm", "FormCanResize", async function FormCanResize(Self, p0, p1, p2, p3) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "newwidth": $.asRef(p1), "newheight": $.asRef(p2), "resize": $.asRef(p3), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await L0["resize"].set(false);
  return L0.result;
}, {"params": ["Sender", "NewWidth", "NewHeight", "Resize"], "kind": "procedure", "ptypes": ["TObject", "Integer", "Integer", "Boolean"]});
  U.method("TSBTemplAddEditForm", "FormCreate", async function FormCreate(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.stmt((await $.mcall((await $.v(C, "SBTranslateProc")), "TranslateAllCompForms", [Self, (await $.mv((await $.v(C, "sboapiDataModule")), "OrPack_SL"))])));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TSBTemplAddEditForm", "FormKeyPress", async function FormKeyPress(Self, p0, p1) {
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
