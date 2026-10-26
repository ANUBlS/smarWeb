// Generated from ceskin.pas by pas2js — do not edit by hand; regenerate instead.
/* eslint-disable */
// @ts-nocheck

export default function define($) {
  const U = $.unit("ceskin", ["Windows", "Messages", "SysUtils", "Classes", "Graphics", "Controls", "Forms", "Dialogs", "StdCtrls", "Mask", "DBCtrls", "SearchEdit", "Unit2"]);
  const C = [U];
  U.defClass("TCeskform", "TForm", {"groupbox1": {"name": "GroupBox1", "type": "TGroupBox"}, "groupbox2": {"name": "GroupBox2", "type": "TGroupBox"}, "label1": {"name": "Label1", "type": "TLabel"}, "dbedit1": {"name": "DBEdit1", "type": "TDBEdit"}, "dbedit2": {"name": "DBEdit2", "type": "TDBEdit"}, "label2": {"name": "Label2", "type": "TLabel"}, "searchedit1": {"name": "SearchEdit1", "type": "TSearchEdit"}, "label3": {"name": "Label3", "type": "TLabel"}}, {});
  U.init(async () => {
    U.var_("Ceskform", null, "TCeskform");
  });
  U.method("TCeskform", "SearchEdit1Change", async function SearchEdit1Change(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.eq((await $.mv((await $.v(C, "SearchEdit1")), "Text")), ""))) {
    await $.mcall((await $.v(C, "DBEdit1")), "Clear", []);
    await $.mcall((await $.v(C, "DBEdit2")), "Clear", []);
  }
  await $.stmt((await $.mcall((await $.mv((await $.v(C, "swdatamodule")), "sw_customers")), "Locate", ["id", (await $.mv((await $.mcall((await $.mv((await $.v(C, "SWDataModule")), "Account")), "Fieldbyname", ["KLI_ID"])), "asinteger")), []])));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  return U;
}
