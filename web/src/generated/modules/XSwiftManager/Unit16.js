// Generated from Unit16.pas by pas2js — do not edit by hand; regenerate instead.
/* eslint-disable */
// @ts-nocheck

export default function define($) {
  const U = $.unit("Unit16", ["Windows", "Messages", "SysUtils", "Variants", "Classes", "Graphics", "Controls", "Forms", "Dialogs", "StdCtrls", "DBCtrls", "Unit2", "DB", "OracleData", "archivout", "Azipsn", "cap", "ceskin", "createmess", "editmt103", "Editmt103Show", "formmt103", "OUT_MT", "qr5", "qrp1", "qrp5", "SWIFT_MANAGER_TLB", "Unit19", "Unit3", "Unit4", "Unit7", "Unit8", "yoxp"]);
  const C = [U];
  U.defClass("TrdkİN", "TForm", {"edit1": {"name": "Edit1", "type": "TEdit"}, "edit2": {"name": "Edit2", "type": "TEdit"}, "button1": {"name": "Button1", "type": "TButton"}, "label1": {"name": "Label1", "type": "TLabel"}, "label2": {"name": "Label2", "type": "TLabel"}, "edit3": {"name": "Edit3", "type": "TEdit"}}, {});
  U.init(async () => {
    U.var_("rdkİN", null, "TrdkİN");
  });
  U.method("TrdkİN", "Button1Click", async function Button1Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.stmt((await $.mcall((await $.mv((await $.v(C, "SWDataModule")), "sw_in_insert")), "CallProcedure", ["UPDIN", [(await $.mv((await $.v(C, "EDIT1")), "Text")), (await $.mv((await $.v(C, "EDIT2")), "Text")), (await $.mv((await $.v(C, "EDIT3")), "Text"))]])));
  await $.mcall((await $.mv((await $.v(C, "SWDataModule")), "sw_in")), "Refresh", []);
  await $.stmt($.call(C, "CLOSE", []));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TrdkİN", "DBLookupComboBox1CloseUp", async function DBLookupComboBox1CloseUp(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  return U;
}
