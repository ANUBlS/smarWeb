// Generated from CO_TemplateAddEditUnt.pas by pas2js — do not edit by hand; regenerate instead.
/* eslint-disable */
// @ts-nocheck

export default function define($) {
  const U = $.unit("CO_TemplateAddEditUnt", ["Windows", "Messages", "SysUtils", "Classes", "Graphics", "Controls", "Forms", "Dialogs", "StdCtrls", "ActnList", "Buttons", "Mask", "DBCtrls", "CO_datamod_impl", "BookmarkSetup", "SBTranslateProc", "sboapiDataModuleImpl"]);
  const C = [U];
  U.defClass("TCO_TemplAddEditForm", "TForm", {"dbedit1": {"name": "DBEdit1", "type": "TDBEdit"}, "dbedit2": {"name": "DBEdit2", "type": "TDBEdit"}, "sbopendlg": {"name": "SBOpenDlg", "type": "TSpeedButton"}, "actionlist1": {"name": "ActionList1", "type": "TActionList"}, "actnaccept": {"name": "ActnAccept", "type": "TAction"}, "actnreject": {"name": "ActnReject", "type": "TAction"}, "label1": {"name": "Label1", "type": "TLabel"}, "label2": {"name": "Label2", "type": "TLabel"}, "button1": {"name": "Button1", "type": "TButton"}, "button2": {"name": "Button2", "type": "TButton"}, "dbedit3": {"name": "DBEdit3", "type": "TDBEdit"}}, {});
  U.init(async () => {
    U.var_("CO_TemplAddEditForm", null, "TCO_TemplAddEditForm");
  });
  U.method("TCO_TemplAddEditForm", "ActnAcceptExecute", async function ActnAcceptExecute(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mset((await $.v(C, "DBEdit3")), "Text", "0");
  if ($.truthy((await $.and_(($.ne((await $.mv((await $.v(C, "DBEdit1")), "Text")), "")), async () => ($.ne((await $.mv((await $.v(C, "DBEdit2")), "Text")), "")))))) {
    {
      const $t1 = (await $.mv((await $.v(C, "CO_DataMod")), "Templates"));
      await $.stmt($.wcall([$t1], "Post", [], C));
    }
    await $.set(C, "ModalResult", (await $.v(C, "mrOk")));
    await $.mcall((await $.mv((await $.v(C, "CO_DataMod")), "Templates")), "Refresh", []);
  } else {
    if ($.truthy($.eq((await $.mv((await $.v(C, "DBEdit1")), "Text")), ""))) {
      await $.stmt((await $.call(C, "ShowMessage", ["Şablonun adı daxil edilməyib"])));
    }
    if ($.truthy($.eq((await $.mv((await $.v(C, "DBEdit2")), "Text")), ""))) {
      await $.stmt((await $.call(C, "ShowMessage", ["Şablon faylı daxil edilməyib"])));
    }
    {
      const $t2 = (await $.mv((await $.v(C, "CO_DataMod")), "Templates"));
      await $.stmt($.wcall([$t2], "Cancel", [], C));
    }
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TCO_TemplAddEditForm", "ActnRejectExecute", async function ActnRejectExecute(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t3 = (await $.mv((await $.v(C, "CO_DataMod")), "Templates"));
    await $.stmt($.wcall([$t3], "Cancel", [], C));
  }
  await $.set(C, "ModalResult", (await $.v(C, "mrCancel")));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TCO_TemplAddEditForm", "FormCreate", async function FormCreate(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.stmt((await $.mcall((await $.v(C, "SBTranslateProc")), "TranslateAllCompForms", [Self, (await $.mv((await $.v(C, "sboapiDataModule")), "OrPack_SL"))])));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TCO_TemplAddEditForm", "SBOpenDlgClick", async function SBOpenDlgClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy((await $.mv((await $.mv((await $.v(C, "CO_BookmarkSetup")), "OpenDlg")), "Execute")))) {
    await $.mset((await $.mcall((await $.mv((await $.v(C, "CO_DataMod")), "Templates")), "FieldByName", ["Path"])), "AsString", (await $.mv((await $.mv((await $.v(C, "CO_BookmarkSetup")), "OpenDlg")), "FileName")));
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  return U;
}
