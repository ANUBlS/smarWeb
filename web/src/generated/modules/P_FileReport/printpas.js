// Generated from printpas.pas by pas2js — do not edit by hand; regenerate instead.
/* eslint-disable */
// @ts-nocheck

export default function define($) {
  const U = $.unit("printpas", ["Windows", "Messages", "SysUtils", "Variants", "Classes", "Graphics", "Controls", "Forms", "Dialogs", "StdCtrls", "ComCtrls"]);
  const C = [U];
  U.defClass("Tprintform", "TForm", {"button1": {"name": "Button1", "type": "TButton"}, "prt": {"name": "prt", "type": "TRichEdit"}}, {});
  U.init(async () => {
    U.var_("printform", null, "Tprintform");
  });
  U.method("Tprintform", "Button1Click", async function Button1Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.stmt((await $.mcall((await $.v(C, "prt")), "Print", ["S.W.I.F.t"])));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  return U;
}
