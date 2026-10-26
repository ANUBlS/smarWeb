// Generated from Unit10.pas by pas2js — do not edit by hand; regenerate instead.
/* eslint-disable */
// @ts-nocheck

export default function define($) {
  const U = $.unit("Unit10", ["Windows", "Messages", "SysUtils", "Variants", "Classes", "Graphics", "Controls", "Forms", "Dialogs", "ExtCtrls", "StdCtrls", "MainResourceImpl"]);
  const C = [U];
  U.defClass("TForm10", "TForm", {"radiobutton1": {"name": "RadioButton1", "type": "TRadioButton"}, "radiobutton2": {"name": "RadioButton2", "type": "TRadioButton"}, "panel1": {"name": "Panel1", "type": "TPanel"}}, {});
  U.init(async () => {
    U.var_("Form10", null, "TForm10");
  });
  U.method("TForm10", "RadioButton1Click", async function RadioButton1Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.set(C, "MainResource", (await $.mcall((await $.v(C, "TMainResource")), "Create", [Self])));
  await $.mset((await $.mv((await $.v(C, "MainResource")), "GBoxNB")), "Visible", ($.eq((await $.mv((await $.mv((await $.v(C, "MainResource")), "RButtonNB")), "Checked")), true)));
  await $.mset((await $.mv((await $.v(C, "MainResource")), "GBoxNL")), "Visible", false);
  await $.mcall((await $.v(C, "MainResource")), "ShowModal", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TForm10", "RadioButton2Click", async function RadioButton2Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.set(C, "MainResource", (await $.mcall((await $.v(C, "TMainResource")), "Create", [Self])));
  await $.mset((await $.mv((await $.v(C, "MainResource")), "GBoxNL")), "Visible", ($.eq((await $.mv((await $.mv((await $.v(C, "MainResource")), "RButtonNL")), "Checked")), true)));
  await $.mset((await $.mv((await $.v(C, "MainResource")), "GBoxNB")), "Visible", false);
  await $.mcall((await $.v(C, "MainResource")), "ShowModal", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  return U;
}
