// Generated from EndCallAddİmpl.pas by pas2js — do not edit by hand; regenerate instead.
/* eslint-disable */
// @ts-nocheck

export default function define($) {
  const U = $.unit("EndCallAddİmpl", ["Windows", "Messages", "SysUtils", "Variants", "Classes", "Graphics", "Controls", "Forms", "Dialogs", "StdCtrls", "Buttons", "DBCtrlsEh", "Mask", "IntCalcDataModImpl", "CommonDecls"]);
  const C = [U];
  U.defClass("TEndCallAddform", "TForm", {"bitbtn1": {"name": "BitBtn1", "type": "TBitBtn"}, "bitbtn2": {"name": "BitBtn2", "type": "TBitBtn"}, "groupbox1": {"name": "GroupBox1", "type": "TGroupBox"}, "label1": {"name": "Label1", "type": "TLabel"}, "label2": {"name": "Label2", "type": "TLabel"}, "label3": {"name": "Label3", "type": "TLabel"}, "checkbox1": {"name": "CheckBox1", "type": "TCheckBox"}, "dbdatetimeediteh1": {"name": "DBDateTimeEditEh1", "type": "TDBDateTimeEditEh"}, "checkbox2": {"name": "CheckBox2", "type": "TCheckBox"}, "checkbox3": {"name": "CheckBox3", "type": "TCheckBox"}}, {});
  U.init(async () => {
    U.var_("EndCallAddform", null, "TEndCallAddform");
  });
  U.method("TEndCallAddform", "BitBtn1Click", async function BitBtn1Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.eq((await $.mv((await $.v(C, "CheckBox1")), "Checked")), false))) {
    if ($.truthy((await $.and_(($.eq((await $.mv((await $.v(C, "CheckBox2")), "Checked")), false)), async () => ($.eq((await $.mv((await $.v(C, "CheckBox3")), "Checked")), false)))))) {
      await $.stmt((await $.call(C, "ShowMessage", ["Faiz və ya gecikmiş faiz bölmələrindən biri seçilməlidir"])));
      return L0.result;
    }
  }
  if ($.truthy((await $.mv((await $.v(C, "CheckBox1")), "Checked")))) {
    await $.mset((await $.mv((await $.v(C, "DefineCalcDatMod")), "OracleDataSet2STATUS")), "AsInteger", 1);
    await $.mset((await $.mv((await $.v(C, "DefineCalcDatMod")), "OracleDataSet2INTEREST")), "AsInteger", 0);
    await $.mset((await $.mv((await $.v(C, "DefineCalcDatMod")), "OracleDataSet2DUEINTEREST")), "AsInteger", 0);
  } else {
    await $.mset((await $.mv((await $.v(C, "DefineCalcDatMod")), "OracleDataSet2STATUS")), "AsInteger", 0);
  }
  await $.mset((await $.mv((await $.v(C, "DefineCalcDatMod")), "OracleDataSet2CREDITID")), "AsInteger", (await $.v(C, "Get_SelectedCrdID")));
  await $.mcall((await $.mv((await $.v(C, "DefineCalcDatMod")), "OracleDataSet2")), "Post", []);
  await $.stmt($.call(C, "close", []));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TEndCallAddform", "BitBtn2Click", async function BitBtn2Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.stmt($.call(C, "close", []));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TEndCallAddform", "CheckBox1Click", async function CheckBox1Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy((await $.mv((await $.v(C, "CheckBox1")), "Checked")))) {
    await $.mset((await $.v(C, "DBDateTimeEditEh1")), "Enabled", false);
    await $.mset((await $.v(C, "CheckBox2")), "Enabled", false);
    await $.mset((await $.v(C, "CheckBox3")), "Enabled", false);
    await $.mset((await $.v(C, "CheckBox2")), "Checked", false);
    await $.mset((await $.v(C, "CheckBox3")), "Checked", false);
  } else {
    await $.mset((await $.v(C, "DBDateTimeEditEh1")), "Enabled", true);
    await $.mset((await $.v(C, "CheckBox2")), "Enabled", true);
    await $.mset((await $.v(C, "CheckBox3")), "Enabled", true);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TEndCallAddform", "CheckBox2Click", async function CheckBox2Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy((await $.mv((await $.v(C, "CheckBox2")), "Checked")))) {
    await $.mset((await $.mv((await $.v(C, "DefineCalcDatMod")), "OracleDataSet2INTEREST")), "AsInteger", 1);
  } else {
    await $.mset((await $.mv((await $.v(C, "DefineCalcDatMod")), "OracleDataSet2INTEREST")), "AsInteger", 0);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TEndCallAddform", "CheckBox3Click", async function CheckBox3Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy((await $.mv((await $.v(C, "CheckBox3")), "Checked")))) {
    await $.mset((await $.mv((await $.v(C, "DefineCalcDatMod")), "OracleDataSet2DUEINTEREST")), "AsInteger", 1);
  } else {
    await $.mset((await $.mv((await $.v(C, "DefineCalcDatMod")), "OracleDataSet2DUEINTEREST")), "AsInteger", 0);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  return U;
}
