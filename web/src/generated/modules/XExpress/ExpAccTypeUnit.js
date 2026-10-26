// Generated from ExpAccTypeUnit.pas by pas2js — do not edit by hand; regenerate instead.
/* eslint-disable */
// @ts-nocheck

export default function define($) {
  const U = $.unit("ExpAccTypeUnit", ["Windows", "Messages", "SysUtils", "Variants", "Classes", "Graphics", "Controls", "Forms", "Dialogs", "DBCtrls", "StdCtrls", "ExtCtrls", "DB", "OracleData", "Mask", "DBCtrlsEh", "DBLookupEh", "DBGridEh", "ExpDataModuleUnit", "ExpAllParametrUnit"]);
  const C = [U];
  U.defClass("TExpAccType", "TForm", {"panel1": {"name": "Panel1", "type": "TPanel"}, "groupbox1": {"name": "GroupBox1", "type": "TGroupBox"}, "panel2": {"name": "Panel2", "type": "TPanel"}, "label5": {"name": "Label5", "type": "TLabel"}, "dblookupcomboboxeh3": {"name": "DBLookupComboboxEh3", "type": "TDBLookupComboboxEh"}, "label6": {"name": "Label6", "type": "TLabel"}, "dblookupcomboboxeh4": {"name": "DBLookupComboboxEh4", "type": "TDBLookupComboboxEh"}, "panel3": {"name": "Panel3", "type": "TPanel"}, "button2": {"name": "Button2", "type": "TButton"}, "button1": {"name": "Button1", "type": "TButton"}, "panel4": {"name": "Panel4", "type": "TPanel"}, "label3": {"name": "Label3", "type": "TLabel"}, "dblookupcomboboxeh1": {"name": "DBLookupComboboxEh1", "type": "TDBLookupComboboxEh"}, "label4": {"name": "Label4", "type": "TLabel"}, "dblookupcomboboxeh2": {"name": "DBLookupComboboxEh2", "type": "TDBLookupComboboxEh"}, "panel5": {"name": "Panel5", "type": "TPanel"}, "label1": {"name": "Label1", "type": "TLabel"}, "dblookupcombobox1": {"name": "DBLookupComboBox1", "type": "TDBLookupComboBox"}, "label2": {"name": "Label2", "type": "TLabel"}, "dblookupcombobox2": {"name": "DBLookupComboBox2", "type": "TDBLookupComboBox"}}, {});
  U.init(async () => {
    U.var_("ExpAccType", null, "TExpAccType");
  });
  U.method("TExpAccType", "Button1Click", async function Button1Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t1 = (await $.v(C, "ExpAllParametr"));
    await $.mset((await $.mcall((await $.wv([$t1], "ExpTypeAccountsDataSet", C, false)), "FieldByName", ["branchid"])), "AsInteger", (await $.mv((await $.wv([$t1], "DBLookupComboBox1", C, false)), "KeyValue")));
    await $.mset((await $.mcall((await $.wv([$t1], "ExpTypeAccountsDataSet", C, false)), "FieldByName", ["valute"])), "AsInteger", (await $.mv((await $.wv([$t1], "DBLookupComboBox2", C, false)), "KeyValue")));
    await $.mset((await $.mcall((await $.wv([$t1], "ExpTypeAccountsDataSet", C, false)), "FieldByName", ["debet"])), "AsInteger", (await $.mv((await $.wv([$t1], "DBLookupComboboxEh1", C, false)), "KeyValue")));
    await $.mset((await $.mcall((await $.wv([$t1], "ExpTypeAccountsDataSet", C, false)), "FieldByName", ["kredet"])), "AsInteger", (await $.mv((await $.wv([$t1], "DBLookupComboboxEh2", C, false)), "KeyValue")));
    if ($.truthy($.eq((await $.mv((await $.wv([$t1], "ExpSettingsDataSetNAME", C, false)), "AsWideString")), "Möhkəmləndirmə"))) {
      await $.mset((await $.mcall((await $.wv([$t1], "ExpTypeAccountsDataSet", C, false)), "FieldByName", ["bdebet"])), "AsInteger", (await $.mv((await $.wv([$t1], "DBLookupComboboxEh3", C, false)), "KeyValue")));
      await $.mset((await $.mcall((await $.wv([$t1], "ExpTypeAccountsDataSet", C, false)), "FieldByName", ["bkredet"])), "AsInteger", (await $.mv((await $.wv([$t1], "DBLookupComboboxEh4", C, false)), "KeyValue")));
    } else {
      await $.mset((await $.mcall((await $.wv([$t1], "ExpTypeAccountsDataSet", C, false)), "FieldByName", ["bdebet"])), "AsInteger", 0);
      await $.mset((await $.mcall((await $.wv([$t1], "ExpTypeAccountsDataSet", C, false)), "FieldByName", ["bkredet"])), "AsInteger", 0);
    }
    await $.mset((await $.mcall((await $.wv([$t1], "ExpTypeAccountsDataSet", C, false)), "FieldByName", ["OPTYPE"])), "AsInteger", (await $.mv((await $.mcall((await $.wv([$t1], "ExpSettingsTypeDataSet", C, false)), "FieldByName", ["id"])), "AsInteger")));
    await $.mcall((await $.wv([$t1], "ExpTypeAccountsDataSet", C, false)), "Post", []);
  }
  await $.mcall((await $.v(C, "ExpAccType")), "Close", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TExpAccType", "Button2Click", async function Button2Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t2 = (await $.v(C, "ExpAllParametr"));
    const $t3 = (await $.wv([$t2], "ExpTypeAccountsDataSet", C, false));
    await $.stmt($.wcall([$t2, $t3], "Cancel", [], C));
  }
  await $.mcall((await $.v(C, "ExpAccType")), "Close", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TExpAccType", "FormClose", async function FormClose(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "action": $.asRef(p1), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mcall((await $.v(C, "ExpAccType")), "Close", []);
  return L0.result;
}, {"params": ["Sender", "Action"], "kind": "procedure", "ptypes": ["TObject", "TCloseAction"]});
  U.method("TExpAccType", "FormShow", async function FormShow(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.not(((await $.mv((await $.v(C, "ExpAllParametr")), "F")))))) {
    await $.mset((await $.v(C, "DBLookupComboBox1")), "KeyValue", 0);
    await $.mset((await $.v(C, "DBLookupComboBox2")), "KeyValue", (-(1)));
    await $.mset((await $.v(C, "DBLookupComboboxEh1")), "KeyValue", 0);
    await $.mset((await $.v(C, "DBLookupComboboxEh2")), "KeyValue", 0);
    await $.mset((await $.v(C, "DBLookupComboboxEh3")), "KeyValue", 0);
    await $.mset((await $.v(C, "DBLookupComboboxEh4")), "KeyValue", 0);
  } else {
    await $.mset((await $.v(C, "DBLookupComboBox1")), "KeyValue", (await $.mv((await $.mcall((await $.mv((await $.mv((await $.mv((await $.v(C, "ExpAllParametr")), "DBGrid3")), "DataSource")), "DataSet")), "FieldByName", ["branchid"])), "AsInteger")));
    await $.mset((await $.v(C, "DBLookupComboBox2")), "KeyValue", (await $.mv((await $.mcall((await $.mv((await $.mv((await $.mv((await $.v(C, "ExpAllParametr")), "DBGrid3")), "DataSource")), "DataSet")), "FieldByName", ["valute"])), "AsInteger")));
    await $.mset((await $.v(C, "DBLookupComboboxEh1")), "KeyValue", (await $.mv((await $.mcall((await $.mv((await $.mv((await $.mv((await $.v(C, "ExpAllParametr")), "DBGrid3")), "DataSource")), "DataSet")), "FieldByName", ["debet"])), "AsInteger")));
    await $.mset((await $.v(C, "DBLookupComboboxEh2")), "KeyValue", (await $.mv((await $.mcall((await $.mv((await $.mv((await $.mv((await $.v(C, "ExpAllParametr")), "DBGrid3")), "DataSource")), "DataSet")), "FieldByName", ["kredet"])), "AsInteger")));
    if ($.truthy($.eq((await $.mv((await $.mv((await $.v(C, "ExpAllParametr")), "ExpSettingsDataSetNAME")), "AsWideString")), "Möhkəmləndirmə"))) {
      await $.mset((await $.v(C, "DBLookupComboboxEh3")), "KeyValue", (await $.mv((await $.mcall((await $.mv((await $.mv((await $.mv((await $.v(C, "ExpAllParametr")), "DBGrid3")), "DataSource")), "DataSet")), "FieldByName", ["bdebet"])), "AsInteger")));
      await $.mset((await $.v(C, "DBLookupComboboxEh4")), "KeyValue", (await $.mv((await $.mcall((await $.mv((await $.mv((await $.mv((await $.v(C, "ExpAllParametr")), "DBGrid3")), "DataSource")), "DataSet")), "FieldByName", ["bkredet"])), "AsInteger")));
    } else {
      await $.mset((await $.v(C, "DBLookupComboboxEh3")), "KeyValue", 0);
      await $.mset((await $.v(C, "DBLookupComboboxEh4")), "KeyValue", 0);
    }
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  return U;
}
