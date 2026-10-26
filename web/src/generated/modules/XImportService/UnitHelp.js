// Generated from UnitHelp.pas by pas2js — do not edit by hand; regenerate instead.
/* eslint-disable */
// @ts-nocheck

export default function define($) {
  const U = $.unit("UnitHelp", ["Windows", "Messages", "SysUtils", "Classes", "Graphics", "Controls", "Forms", "Dialogs", "StdCtrls", "Buttons", "ExtCtrls"]);
  const C = [U];
  U.defClass("TFormHelp", "TForm", {"imagehelp": {"name": "ImageHelp", "type": "TImage"}, "btnok": {"name": "BtnOK", "type": "TBitBtn"}}, {});
  U.init(async () => {
    U.var_("FormHelp", null, "TFormHelp");
  });
  U.method("TFormHelp", "BtnOKClick", async function BtnOKClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.stmt($.call(C, "Close", []));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  return U;
}
