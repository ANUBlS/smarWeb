// Generated from SettingsUnit.pas by pas2js — do not edit by hand; regenerate instead.
/* eslint-disable */
// @ts-nocheck

export default function define($) {
  const U = $.unit("SettingsUnit", ["Windows", "Messages", "SysUtils", "Variants", "Classes", "Graphics", "Controls", "Forms", "Dialogs", "DBCtrls", "Grids", "DBGrids", "StdCtrls", "Datamodunit"]);
  const C = [U];
  U.defClass("TSettingFrm", "TForm", {"button1": {"name": "Button1", "type": "TButton"}, "label1": {"name": "Label1", "type": "TLabel"}, "label2": {"name": "Label2", "type": "TLabel"}, "label3": {"name": "Label3", "type": "TLabel"}, "dbgrid1": {"name": "DBGrid1", "type": "TDBGrid"}, "dblookupcombobox1": {"name": "DBLookupComboBox1", "type": "TDBLookupComboBox"}, "dblookupcombobox2": {"name": "DBLookupComboBox2", "type": "TDBLookupComboBox"}, "dblookupcombobox3": {"name": "DBLookupComboBox3", "type": "TDBLookupComboBox"}}, {});
  U.init(async () => {
    U.var_("SettingFrm", null, "TSettingFrm");
  });
  U.method("TSettingFrm", "Button1Click", async function Button1Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mcall((await $.mv((await $.v(C, "DataMod")), "configs")), "Open", []);
  await $.mcall((await $.mv((await $.v(C, "DataMod")), "configs")), "insert", []);
  await $.mset((await $.mcall((await $.mv((await $.v(C, "DataMod")), "configs")), "FieldByName", ["account_a"])), "AsInteger", (await $.mv((await $.v(C, "DBLookupComboBox3")), "KeyValue")));
  await $.mset((await $.mcall((await $.mv((await $.v(C, "DataMod")), "configs")), "FieldByName", ["branch"])), "AsInteger", (await $.mv((await $.v(C, "DBLookupComboBox1")), "KeyValue")));
  await $.mset((await $.mcall((await $.mv((await $.v(C, "DataMod")), "configs")), "FieldByName", ["valute"])), "AsInteger", (await $.mv((await $.v(C, "DBLookupComboBox2")), "KeyValue")));
  await $.mcall((await $.mv((await $.v(C, "DataMod")), "configs")), "post", []);
  await $.mcall((await $.mv((await $.v(C, "DataMod")), "configs")), "close", []);
  await $.mcall((await $.mv((await $.v(C, "DataMod")), "configs")), "open", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TSettingFrm", "DBLookupComboBox2CloseUp", async function DBLookupComboBox2CloseUp(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mcall((await $.mv((await $.v(C, "DataMod")), "tranzit_acc")), "CloseAll", []);
  await $.stmt((await $.mcall((await $.mv((await $.v(C, "DataMod")), "tranzit_acc")), "SetVariable", ["vfil", (await $.mv((await $.v(C, "DBLookupComboBox1")), "KeyValue"))])));
  await $.stmt((await $.mcall((await $.mv((await $.v(C, "DataMod")), "tranzit_acc")), "SetVariable", ["vval", (await $.mv((await $.v(C, "DBLookupComboBox2")), "KeyValue"))])));
  await $.mcall((await $.mv((await $.v(C, "DataMod")), "tranzit_acc")), "Open", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TSettingFrm", "FormCreate", async function FormCreate(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.not((await $.mv((await $.mv((await $.v(C, "DataMod")), "configs")), "Active"))))) {
    await $.mcall((await $.mv((await $.v(C, "DataMod")), "configs")), "Open", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  return U;
}
