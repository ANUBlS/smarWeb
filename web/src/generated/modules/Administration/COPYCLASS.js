// Generated from COPYCLASS.pas by pas2js — do not edit by hand; regenerate instead.
/* eslint-disable */
// @ts-nocheck

export default function define($) {
  const U = $.unit("COPYCLASS", ["Windows", "Messages", "SysUtils", "Classes", "Graphics", "Controls", "Forms", "Dialogs", "StdCtrls", "DBCtrls", "DBViewComboBox", "AdministrationDataModule"]);
  const C = [U];
  U.defClass("TCLSCOPY", "TForm", {"button1": {"name": "Button1", "type": "TButton"}, "button2": {"name": "Button2", "type": "TButton"}, "clsnew": {"name": "clsnew", "type": "TEdit"}, "label1": {"name": "Label1", "type": "TLabel"}, "label2": {"name": "Label2", "type": "TLabel"}, "clsold": {"name": "clsold", "type": "TDBViewComboBox"}}, {});
  U.init(async () => {
    U.var_("CLSCOPY", null, "TCLSCOPY");
  });
  U.method("TCLSCOPY", "Button1Click", async function Button1Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.stmt($.call(C, "close", []));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TCLSCOPY", "Button2Click", async function Button2Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy((await $.or_(($.eq((await $.mv((await $.v(C, "clsold")), "text")), "")), async () => ($.eq((await $.mv((await $.v(C, "clsnew")), "text")), "")))))) {
    await $.stmt((await $.call(C, "ShowMessage", ["Köhnə və yeni sinfi yazın"])));
  } else {
    if ($.truthy($.eq((await $.call(C, "MessageDlg", ["Sinfin kopyasi yaradilsin?", (await $.v(C, "mtConfirmation")), [(await $.v(C, "mbYes")), (await $.v(C, "mbNo"))], 0])), (await $.v(C, "mrYes"))))) {
      await $.stmt((await $.mcall((await $.mv((await $.v(C, "AdministrationData")), "pcADM")), "CallProcedure", ["copyclass", [(await $.mv((await $.v(C, "clsold")), "text")), (await $.mv((await $.v(C, "clsnew")), "text"))]])));
      await $.mcall((await $.mv((await $.v(C, "AdministrationData")), "Classesdata")), "close", []);
      await $.mcall((await $.mv((await $.v(C, "AdministrationData")), "Classesdata")), "Open", []);
    } else {
      return L0.result;
    }
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  return U;
}
