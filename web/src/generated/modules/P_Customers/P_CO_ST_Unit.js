// Generated from P_CO_ST_Unit.pas by pas2js — do not edit by hand; regenerate instead.
/* eslint-disable */
// @ts-nocheck

export default function define($) {
  const U = $.unit("P_CO_ST_Unit", ["Windows", "Messages", "SysUtils", "Classes", "Graphics", "Controls", "Forms", "Dialogs", "StdCtrls", "ExtCtrls", "p_CO_Statement_Unit"]);
  const C = [U];
  U.defClass("TP_CO_ST", "TForm", {"panel1": {"name": "Panel1", "type": "TPanel"}, "button1": {"name": "Button1", "type": "TButton"}, "chck2": {"name": "Chck2", "type": "TRadioButton"}, "chck1": {"name": "Chck1", "type": "TRadioButton"}}, {});
  U.init(async () => {
    U.var_("P_CO_ST", null, "TP_CO_ST");
  });
  U.method("TP_CO_ST", "Button1Click", async function Button1Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.set(C, "P_CO_Statement_Form", (await $.mcall((await $.v(C, "TP_CO_Statement_Form")), "Create", [Self])));
  await $.mcall((await $.v(C, "P_CO_Statement_Form")), "Showmodal", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TP_CO_ST", "FormActivate", async function FormActivate(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mset((await $.v(C, "Chck1")), "checked", true);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  return U;
}
