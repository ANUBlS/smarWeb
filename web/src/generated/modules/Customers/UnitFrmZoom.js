// Generated from UnitFrmZoom.pas by pas2js — do not edit by hand; regenerate instead.
/* eslint-disable */
// @ts-nocheck

export default function define($) {
  const U = $.unit("UnitFrmZoom", ["Windows", "Messages", "SysUtils", "Classes", "Graphics", "Controls", "Forms", "Dialogs", "DBCtrls", "ExtCtrls", "CustomerInfoFormImpl"]);
  const C = [U];
  U.defClass("TFormZoom", "TForm", {"image1": {"name": "Image1", "type": "TImage"}}, {});
  U.init(async () => {
    U.var_("FormZoom", null, "TFormZoom");
  });
  U.method("TFormZoom", "FormKeyPress", async function FormKeyPress(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "key": $.asRef(p1), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.eq((await L0["key"].get()), "\u001b"))) {
    await $.mcall((await $.v(C, "FormZoom")), "Close", []);
  }
  return L0.result;
}, {"params": ["Sender", "Key"], "kind": "procedure", "ptypes": ["TObject", "Char"]});
  return U;
}
