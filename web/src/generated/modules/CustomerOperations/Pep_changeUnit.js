// Generated from Pep_changeUnit.pas by pas2js — do not edit by hand; regenerate instead.
/* eslint-disable */
// @ts-nocheck

export default function define($) {
  const U = $.unit("Pep_changeUnit", ["Windows", "Messages", "SysUtils", "Variants", "Classes", "Graphics", "Controls", "Forms", "IdHTTP", "IdSSLOpenSSL", "IdURI", "Dialogs", "StdCtrls", "ExtCtrls", "customers_operation_impl"]);
  const C = [U];
  U.defClass("TPep_change", "TForm", {"label1": {"name": "Label1", "type": "TLabel"}, "edit1": {"name": "Edit1", "type": "TEdit"}, "memo1": {"name": "Memo1", "type": "TMemo"}, "panel1": {"name": "Panel1", "type": "TPanel"}, "button1": {"name": "Button1", "type": "TButton"}, "button2": {"name": "Button2", "type": "TButton"}}, {});
  U.init(async () => {
    U.var_("Pep_change", null, "TPep_change");
  });
  U.method("TPep_change", "Button1Click", async function Button1Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "http": null, "responsetext": '', "url": '', "name": '', "last_name": ''};
  await $.fixArgs(L0, ["sender"]);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TPep_change", "Button2Click", async function Button2Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.set(C, "pep_chek", (-(1)));
  await $.mcall((await $.v(C, "Pep_change")), "close", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  return U;
}
