// Generated from transferimpl.pas by pas2js — do not edit by hand; regenerate instead.
/* eslint-disable */
// @ts-nocheck

export default function define($) {
  const U = $.unit("transferimpl", ["Windows", "Messages", "SysUtils", "Classes", "Graphics", "Controls", "Forms", "Dialogs", "StdCtrls", "ExtCtrls"]);
  const C = [U];
  U.defClass("TTransfer", "TForm", {"button1": {"name": "Button1", "type": "TButton"}, "button2": {"name": "Button2", "type": "TButton"}, "button3": {"name": "Button3", "type": "TButton"}}, {});
  U.init(async () => {
    U.var_("Transfer", null, "TTransfer");
  });
  U.method("TTransfer", "Button1Click", async function Button1Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  try {
    await $.set(C, "transfer", (await $.mcall((await $.v(C, "transfer")), "create", [Self])));
    await $.mcall((await $.v(C, "transfer")), "showmodal", []);
  } finally {
    await $.mcall((await $.v(C, "transfer")), "release", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  return U;
}
