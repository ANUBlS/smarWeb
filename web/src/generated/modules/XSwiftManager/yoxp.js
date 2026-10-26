// Generated from yoxp.pas by pas2js — do not edit by hand; regenerate instead.
/* eslint-disable */
// @ts-nocheck

export default function define($) {
  const U = $.unit("yoxp", ["Windows", "Messages", "SysUtils", "Classes", "Graphics", "Controls", "Forms", "Dialogs", "Mask", "DBCtrls", "StdCtrls", "Unit19", "Unit2", "SWIFT_MAINImpl1"]);
  const C = [U];
  U.defClass("TForm12", "TForm", {"edit1": {"name": "Edit1", "type": "TEdit"}, "dblookupcombobox1": {"name": "DBLookupComboBox1", "type": "TDBLookupComboBox"}, "dbedit1": {"name": "DBEdit1", "type": "TDBEdit"}, "dbedit2": {"name": "DBEdit2", "type": "TDBEdit"}, "button1": {"name": "Button1", "type": "TButton"}, "button2": {"name": "Button2", "type": "TButton"}, "edit2": {"name": "Edit2", "type": "TEdit"}, "dbedit3": {"name": "DBEdit3", "type": "TDBEdit"}, "dbedit4": {"name": "DBEdit4", "type": "TDBEdit"}}, {});
  U.init(async () => {
    U.var_("Form12", null, "TForm12");
  });
  U.method("TForm12", "Button2Click", async function Button2Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.stmt($.call(C, "close", []));
  await $.mset((await $.v(C, "edit2")), "Text", "0");
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TForm12", "Button1Click", async function Button1Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy((await $.and_(($.eq((await $.mv((await $.v(C, "edit1")), "Text")), (await $.mv((await $.v(C, "DBEdit1")), "text")))), async () => ($.eq((await $.mv((await $.v(C, "DBEdit2")), "Text")), (await $.mv((await $.v(C, "DBLookupComboBox1")), "Text")))))))) {
    await $.stmt($.call(C, "close", []));
    await $.mset((await $.v(C, "Edit2")), "Text", "1");
  } else {
    await $.mcall((await $.mv((await $.v(C, "SWDataModule")), "sw_out_2")), "Edit", []);
    await $.mset((await $.v(C, "DBEdit3")), "Text", "7");
    await $.mset((await $.mcall((await $.mv((await $.v(C, "SWDataModule")), "sw_out_2")), "FieldByName", ["INFO"])), "asstring", "Mebleq ve ya Valyuta duzgun yazilmayib!");
    await $.mcall((await $.mv((await $.v(C, "SWDataModule")), "sw_out_2")), "Post", []);
    await $.mcall((await $.mv((await $.mv((await $.v(C, "SWDataModule")), "sw_out_2")), "Session")), "Commit", []);
    await $.stmt($.call(C, "close", []));
    await $.mset((await $.v(C, "Edit2")), "Text", "0");
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TForm12", "FormActivate", async function FormActivate(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mset((await $.v(C, "Edit2")), "Text", "");
  await $.mset((await $.v(C, "Edit1")), "Text", "");
  if ($.truthy($.not((await $.mv((await $.mv((await $.v(C, "SWDataModule")), "ValuteForCommit")), "Active"))))) {
    await $.mcall((await $.mv((await $.v(C, "SWDataModule")), "ValuteForCommit")), "Open", []);
  }
  await $.mset((await $.v(C, "DBLookupComboBox1")), "KeyValue", 0);
  await $.mset((await $.v(C, "DBLookupComboBox1")), "KeyValue", (await $.mv((await $.mcall((await $.mv((await $.mv((await $.v(C, "DBLookupComboBox1")), "ListSource")), "DataSet")), "FieldByName", [(await $.mv((await $.v(C, "DBLookupComboBox1")), "KeyField"))])), "Value")));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TForm12", "Edit1KeyPress", async function Edit1KeyPress(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "key": $.asRef(p1), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.not(($.in_((await L0["key"].get()), [...$.range("0","9"), "\b", "."]))))) {
    await L0["key"].set("\u0000");
  }
  return L0.result;
}, {"params": ["Sender", "Key"], "kind": "procedure", "ptypes": ["TObject", "Char"]});
  return U;
}
