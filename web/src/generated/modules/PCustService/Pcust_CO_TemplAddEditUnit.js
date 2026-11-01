// Generated from Pcust_CO_TemplAddEditUnit.pas by pas2js — do not edit by hand; regenerate instead.
/* eslint-disable */
// @ts-nocheck

export default function define($) {
  const U = $.unit("Pcust_CO_TemplAddEditUnit", ["Windows", "Messages", "SysUtils", "Classes", "Graphics", "Controls", "Forms", "Dialogs", "StdCtrls", "ActnList", "Buttons", "Mask", "DBCtrls", "UnitDataModPCustService", "Pcust_CO_BookmarkSetupUnit", "sboapiDataModuleImpl", "SBTranslateProc"]);
  const C = [U];
  U.defClass("TPh_CO_TemplAddEditForm", "TForm", {"label1": {"name": "Label1", "type": "TLabel"}, "dbedit1": {"name": "DBEdit1", "type": "TDBEdit"}, "label2": {"name": "Label2", "type": "TLabel"}, "dbedit2": {"name": "DBEdit2", "type": "TDBEdit"}, "sbopendlg": {"name": "SBOpenDlg", "type": "TSpeedButton"}, "dbedit3": {"name": "DBEdit3", "type": "TDBEdit"}, "actionlist1": {"name": "ActionList1", "type": "TActionList"}, "actnaccept": {"name": "ActnAccept", "type": "TAction"}, "actnreject": {"name": "ActnReject", "type": "TAction"}, "button1": {"name": "Button1", "type": "TButton"}, "button2": {"name": "Button2", "type": "TButton"}}, {});
  U.init(async () => {
    U.var_("Ph_CO_TemplAddEditForm", null, "TPh_CO_TemplAddEditForm");
  });
  U.method("TPh_CO_TemplAddEditForm", "ActnAcceptExecute", async function ActnAcceptExecute(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mset((await $.v(C, "DBEdit3")), "Text", "2");
  if ($.truthy((await $.and_(($.ne((await $.mv((await $.v(C, "DBEdit1")), "Text")), "")), async () => ($.ne((await $.mv((await $.v(C, "DBEdit2")), "Text")), "")))))) {
    {
      const $t1 = (await $.mv((await $.v(C, "DataModPCustService")), "Templates"));
      await $.stmt($.wcall([$t1], "Post", [], C));
    }
    await $.set(C, "ModalResult", (await $.v(C, "mrOk")));
  } else {
    if ($.truthy($.eq((await $.mv((await $.v(C, "DBEdit1")), "Text")), ""))) {
      await $.stmt((await $.call(C, "ShowMessage", ["Şablonun adı daxil deilməyib"])));
    }
    if ($.truthy($.eq((await $.mv((await $.v(C, "DBEdit2")), "Text")), ""))) {
      await $.stmt((await $.call(C, "ShowMessage", ["Şablon faylı daxil edilməyib"])));
    }
    {
      const $t2 = (await $.mv((await $.v(C, "DataModPCustService")), "Templates"));
      await $.stmt($.wcall([$t2], "Cancel", [], C));
    }
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TPh_CO_TemplAddEditForm", "ActnRejectExecute", async function ActnRejectExecute(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t3 = (await $.mv((await $.v(C, "DataModPCustService")), "Templates"));
    await $.stmt($.wcall([$t3], "Cancel", [], C));
  }
  await $.set(C, "ModalResult", (await $.v(C, "mrCancel")));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TPh_CO_TemplAddEditForm", "FormCreate", async function FormCreate(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.stmt((await $.mcall((await $.v(C, "SBTranslateProc")), "TranslateAllCompForms", [Self, (await $.mv((await $.v(C, "sboapiDataModule")), "OrPack_SL"))])));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TPh_CO_TemplAddEditForm", "SBOpenDlgClick", async function SBOpenDlgClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy((await $.mv((await $.mv((await $.v(C, "Ph_CO_BookmarkSetupFrom")), "OpenDlg")), "Execute")))) {
    await $.mset((await $.mcall((await $.mv((await $.v(C, "DataModPCustService")), "Templates")), "FieldByName", ["Path"])), "AsString", (await $.mv((await $.mv((await $.v(C, "Ph_CO_BookmarkSetupFrom")), "OpenDlg")), "FileName")));
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  return U;
}
