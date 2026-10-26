// Generated from TemplAddEditFormİmpl.pas by pas2js — do not edit by hand; regenerate instead.
/* eslint-disable */
// @ts-nocheck

export default function define($) {
  const U = $.unit("TemplAddEditFormİmpl", ["Windows", "Messages", "SysUtils", "Variants", "Classes", "Graphics", "Controls", "Forms", "Dialogs", "ActnList", "StdCtrls", "Mask", "DBCtrls", "Buttons", "DatModConstructionImpl", "BookMarkAddEditFormImpl", "BookMarkSetupFormImpl"]);
  const C = [U];
  U.defClass("TTempAddEditForm", "TForm", {"sbopendlg": {"name": "SBOpenDlg", "type": "TSpeedButton"}, "label1": {"name": "Label1", "type": "TLabel"}, "label2": {"name": "Label2", "type": "TLabel"}, "dbedit1": {"name": "DBEdit1", "type": "TDBEdit"}, "dbedit2": {"name": "DBEdit2", "type": "TDBEdit"}, "button2": {"name": "Button2", "type": "TButton"}, "dbedit3": {"name": "DBEdit3", "type": "TDBEdit"}, "actionlist1": {"name": "ActionList1", "type": "TActionList"}, "actnaccept": {"name": "ActnAccept", "type": "TAction"}, "actnreject": {"name": "ActnReject", "type": "TAction"}, "button3": {"name": "Button3", "type": "TButton"}}, {});
  U.init(async () => {
    U.var_("TempAddEditForm", null, "TTempAddEditForm");
  });
  U.method("TTempAddEditForm", "Button2Click", async function Button2Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t1 = (await $.mv((await $.v(C, "DatModConstruction")), "Templates"));
    await $.stmt($.wcall([$t1], "Cancel", [], C));
  }
  await $.set(C, "ModalResult", (await $.v(C, "mrCancel")));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TTempAddEditForm", "Button3Click", async function Button3Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mset((await $.v(C, "DBEdit3")), "Text", "0");
  if ($.truthy((await $.and_(($.ne((await $.mv((await $.v(C, "DBEdit1")), "Text")), "")), async () => ($.ne((await $.mv((await $.v(C, "DBEdit2")), "Text")), "")))))) {
    {
      const $t2 = (await $.mv((await $.v(C, "DatModConstruction")), "Templates"));
      await $.stmt($.wcall([$t2], "Post", [], C));
    }
    await $.set(C, "ModalResult", (await $.v(C, "mrOk")));
    await $.stmt($.call(C, "Refresh", []));
  } else {
    if ($.truthy($.eq((await $.mv((await $.v(C, "DBEdit1")), "Text")), ""))) {
      await $.stmt((await $.call(C, "ShowMessage", ["Şablonun adı daxil edilməyib"])));
    }
    if ($.truthy($.eq((await $.mv((await $.v(C, "DBEdit2")), "Text")), ""))) {
      await $.stmt((await $.call(C, "ShowMessage", ["Şablon faylı daxil edilməyib"])));
    }
    {
      const $t3 = (await $.mv((await $.v(C, "DatModConstruction")), "Templates"));
      await $.stmt($.wcall([$t3], "Cancel", [], C));
    }
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TTempAddEditForm", "FormClose", async function FormClose(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "action": $.asRef(p1), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mcall((await $.mv((await $.v(C, "DatModConstruction")), "Templates")), "Close", []);
  await $.mcall((await $.mv((await $.v(C, "DatModConstruction")), "Templates")), "Open", []);
  return L0.result;
}, {"params": ["Sender", "Action"], "kind": "procedure", "ptypes": ["TObject", "TCloseAction"]});
  U.method("TTempAddEditForm", "SBOpenDlgClick", async function SBOpenDlgClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy((await $.mv((await $.mv((await $.v(C, "BookMarkSetupForm")), "OpenDlg")), "Execute")))) {
    await $.mset((await $.mcall((await $.mv((await $.v(C, "DatModConstruction")), "Templates")), "FieldByName", ["Path"])), "AsString", (await $.mv((await $.mv((await $.v(C, "BookMarkSetupForm")), "OpenDlg")), "FileName")));
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  return U;
}
