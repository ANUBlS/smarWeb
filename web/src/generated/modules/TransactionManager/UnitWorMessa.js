// Generated from UnitWorMessa.pas by pas2js — do not edit by hand; regenerate instead.
/* eslint-disable */
// @ts-nocheck

export default function define($) {
  const U = $.unit("UnitWorMessa", ["Windows", "Messages", "SysUtils", "Variants", "Classes", "Graphics", "Controls", "Forms", "Dialogs", "StdCtrls", "ExtCtrls"]);
  const C = [U];
  U.defClass("TFormWorMessag", "TForm", {"label1": {"name": "Label1", "type": "TLabel"}, "timer1": {"name": "Timer1", "type": "TTimer"}, "memo1": {"name": "Memo1", "type": "TMemo"}}, {});
  U.init(async () => {
    U.var_("FormWorMessag", null, "TFormWorMessag");
  });
  U.method("TFormWorMessag", "Timer1Timer", async function Timer1Timer(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mset((await $.mv((await $.v(C, "FormWorMessag")), "Timer1")), "Enabled", false);
  await $.mcall((await $.v(C, "FormWorMessag")), "Close", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  return U;
}
