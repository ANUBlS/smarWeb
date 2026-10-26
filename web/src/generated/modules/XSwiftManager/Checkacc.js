// Generated from Checkacc.pas by pas2js — do not edit by hand; regenerate instead.
/* eslint-disable */
// @ts-nocheck

export default function define($) {
  const U = $.unit("Checkacc", ["Windows", "Messages", "SysUtils", "Variants", "Classes", "Graphics", "Controls", "Forms", "Dialogs", "StdCtrls", "Unit2"]);
  const C = [U];
  U.defClass("TCheckinacc", "TForm", {"edit1": {"name": "Edit1", "type": "TEdit"}, "label1": {"name": "Label1", "type": "TLabel"}, "label2": {"name": "Label2", "type": "TLabel"}, "edit2": {"name": "Edit2", "type": "TEdit"}, "button1": {"name": "Button1", "type": "TButton"}, "edit3": {"name": "Edit3", "type": "TEdit"}}, {});
  U.init(async () => {
    U.var_("Checkinacc", null, "TCheckinacc");
  });
  U.method("TCheckinacc", "Button1Click", async function Button1Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mcall((await $.mv((await $.v(C, "SWDataModule")), "acc_check")), "Close", []);
  await $.stmt((await $.mcall((await $.mv((await $.v(C, "SWDataModule")), "acc_check")), "SetVariable", ["acc", (await $.mv((await $.v(C, "edit1")), "Text"))])));
  await $.mcall((await $.mv((await $.v(C, "SWDataModule")), "acc_check")), "open", []);
  await $.mset((await $.v(C, "edit2")), "Text", (await $.mv((await $.mcall((await $.mv((await $.v(C, "SWDataModule")), "acc_check")), "FieldByName", ["name"])), "AsString")));
  if ($.truthy($.eq((await $.mv((await $.v(C, "edit2")), "Text")), ""))) {
    await $.stmt((await $.mcall((await $.mv((await $.v(C, "SWDataModule")), "sw_in_insert")), "CallProcedure", ["upd_none", [(await $.mv((await $.v(C, "edit3")), "Text"))]])));
    await $.stmt($.call(C, "close", []));
  } else {
    await $.stmt((await $.mcall((await $.mv((await $.v(C, "SWDataModule")), "sw_in_insert")), "CallProcedure", ["upd_none", [(await $.mv((await $.v(C, "edit3")), "Text"))]])));
  }
  await $.mcall((await $.mv((await $.v(C, "SWDataModule")), "sw_in")), "Refresh", []);
  await $.mcall((await $.mv((await $.v(C, "SWDataModule")), "sw_in2")), "Refresh", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  return U;
}
