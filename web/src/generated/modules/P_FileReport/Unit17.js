// Generated from Unit17.pas by pas2js — do not edit by hand; regenerate instead.
/* eslint-disable */
// @ts-nocheck

export default function define($) {
  const U = $.unit("Unit17", ["Windows", "Messages", "SysUtils", "Variants", "Classes", "Graphics", "Controls", "Forms", "Dialogs", "cardall", "Unitdatamod", "Grids", "DBGrids", "Unitazips2", "StdCtrls"]);
  const C = [U];
  U.defClass("TForm17", "TForm", {"button1": {"name": "Button1", "type": "TButton"}, "edit1": {"name": "edit1", "type": "TEdit"}}, {});
  U.init(async () => {
    U.var_("Form17", null, "TForm17");
  });
  U.method("TForm17", "Button1Click", async function Button1Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "vid": 0};
  await $.fixArgs(L0, ["sender"]);
  await $.mcall((await $.mv((await $.v(C, "DataModbpl")), "templ")), "Open", []);
  await $.mcall((await $.mv((await $.v(C, "DataModbpl")), "templates")), "open", []);
  await $.mcall((await $.mv((await $.v(C, "DataModbpl")), "templ")), "Refresh", []);
  await $.mcall((await $.mv((await $.v(C, "DataModbpl")), "templates")), "Refresh", []);
  await $.stmt($.call(C, "close", []));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  return U;
}
