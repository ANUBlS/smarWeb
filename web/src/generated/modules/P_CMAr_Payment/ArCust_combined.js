// Generated from ArCust_combined.pas by pas2js — do not edit by hand; regenerate instead.
/* eslint-disable */
// @ts-nocheck

export default function define($) {
  const U = $.unit("ArCust_combined", ["Windows", "Messages", "SysUtils", "Variants", "Classes", "Graphics", "Controls", "Forms", "Dialogs", "StdCtrls", "DBCtrls", "Buttons", "XFSCtrls", "ArPaymentDataModuleImpl", "ArPaymentAddFormImpl"]);
  const C = [U];
  U.defClass("TForm1", "TForm", {"groupbox1": {"name": "GroupBox1", "type": "TGroupBox"}, "dblookupcombobox1": {"name": "DBLookupComboBox1", "type": "TDBLookupComboBox"}, "xfbitbtn1": {"name": "XFBitBtn1", "type": "TXFBitBtn"}, "xfbitbtn2": {"name": "XFBitBtn2", "type": "TXFBitBtn"}}, {});
  U.init(async () => {
    U.var_("Form1", null, "TForm1");
  });
  U.method("TForm1", "XFBitBtn1Click", async function XFBitBtn1Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.ne((await $.mv((await $.v(C, "DBLookupComboBox1")), "KeyValue")), ""))) {
    await $.set(C, "cusb", (await $.mv((await $.v(C, "DBLookupComboBox1")), "KeyValue")));
  }
  await $.stmt($.call(C, "close", []));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TForm1", "XFBitBtn2Click", async function XFBitBtn2Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.stmt($.call(C, "close", []));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  return U;
}
