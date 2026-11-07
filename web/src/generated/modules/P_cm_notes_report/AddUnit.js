// Generated from AddUnit.pas by pas2js — do not edit by hand; regenerate instead.
/* eslint-disable */
// @ts-nocheck

export default function define($) {
  const U = $.unit("AddUnit", ["Windows", "Messages", "SysUtils", "Variants", "Classes", "Graphics", "Controls", "Forms", "Dialogs", "StdCtrls", "ExtCtrls", "Oracle", "MainUnit"]);
  const C = [U];
  U.defClass("TForm4", "TForm", {"panel1": {"name": "Panel1", "type": "TPanel"}, "panel2": {"name": "Panel2", "type": "TPanel"}, "button1": {"name": "Button1", "type": "TButton"}, "memo1": {"name": "Memo1", "type": "TMemo"}, "oraclepackage1": {"name": "OraclePackage1", "type": "TOraclePackage"}, "v_ststus": {"name": "v_ststus", "type": "integer"}}, {});
  U.init(async () => {
    U.var_("Form4", null, "TForm4");
  });
  U.method("TForm4", "Button1Click", async function Button1Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.stmt((await $.mcall((await $.v(C, "OraclePackage1")), "CallProcedure", ["Addcm_notes_report", ["v_creditid", (await $.v(C, "creditid")), "v_par1", (await $.mv((await $.v(C, "memo1")), "Text")), "v_status", 0]])));
  await $.mcall((await $.mv((await $.v(C, "mainform")), "OracleDataSet1")), "refresh", []);
  await $.mcall((await $.v(C, "memo1")), "Clear", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TForm4", "FormClose", async function FormClose(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "action": $.asRef(p1), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mcall((await $.v(C, "memo1")), "Clear", []);
  return L0.result;
}, {"params": ["Sender", "Action"], "kind": "procedure", "ptypes": ["TObject", "TCloseAction"]});
  return U;
}
