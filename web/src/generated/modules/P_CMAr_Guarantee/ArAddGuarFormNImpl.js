// Generated from ArAddGuarFormNImpl.pas by pas2js — do not edit by hand; regenerate instead.
/* eslint-disable */
// @ts-nocheck

export default function define($) {
  const U = $.unit("ArAddGuarFormNImpl", ["Windows", "Messages", "SysUtils", "Variants", "Classes", "Graphics", "Controls", "Forms", "Dialogs"]);
  const C = [U];
  U.defClass("TAddGuarFormN", "TForm", {}, {});
  U.init(async () => {
    U.var_("AddGuarFormN", null, "TAddGuarFormN");
  });
  U.method("TAddGuarFormN", "FormCreate", async function FormCreate(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.stmt((await $.call(C, "ShowMessage", ["asasasasa"])));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  return U;
}
