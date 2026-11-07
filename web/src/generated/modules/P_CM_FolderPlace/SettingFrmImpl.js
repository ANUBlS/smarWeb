// Generated from SettingFrmImpl.pas by pas2js — do not edit by hand; regenerate instead.
/* eslint-disable */
// @ts-nocheck

export default function define($) {
  const U = $.unit("SettingFrmImpl", ["Windows", "Messages", "SysUtils", "Variants", "Classes", "Graphics", "Controls", "Forms", "Dialogs", "StdCtrls", "ExtCtrls", "DBGridEhGrouping", "DBCtrls", "GridsEh", "DBGridEh", "FlReCalculationDataModuleImpl"]);
  const C = [U];
  U.defClass("TSettingFrm", "TForm", {"panel1": {"name": "Panel1", "type": "TPanel"}, "radiogroup1": {"name": "RadioGroup1", "type": "TRadioGroup"}, "groupbox1": {"name": "GroupBox1", "type": "TGroupBox"}, "groupbox2": {"name": "GroupBox2", "type": "TGroupBox"}, "dbgrideh1": {"name": "DBGridEh1", "type": "TDBGridEh"}, "dbgrideh2": {"name": "DBGridEh2", "type": "TDBGridEh"}, "dbnavigator1": {"name": "DBNavigator1", "type": "TDBNavigator"}, "dbnavigator2": {"name": "DBNavigator2", "type": "TDBNavigator"}, "groupbox3": {"name": "GroupBox3", "type": "TGroupBox"}, "dbgrideh3": {"name": "DBGridEh3", "type": "TDBGridEh"}, "dbnavigator3": {"name": "DBNavigator3", "type": "TDBNavigator"}}, {});
  U.init(async () => {
    U.var_("SettingFrm", null, "TSettingFrm");
  });
  U.method("TSettingFrm", "DBNavigator1Click", async function DBNavigator1Click(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "button": $.copyArg(p1), result: undefined};
  await $.fixArgs(L0, ["sender", "button"]);
  await $.mset((await $.mcall((await $.mv((await $.v(C, "PRDataModule")), "OracleDataSet8")), "FieldByName", ["pr_id"])), "AsInteger", (await $.mv((await $.v(C, "RadioGroup1")), "ItemIndex")));
  return L0.result;
}, {"params": ["Sender", "Button"], "kind": "procedure", "ptypes": ["TObject", "TNavigateBtn"]});
  U.method("TSettingFrm", "RadioGroup1Click", async function RadioGroup1Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.not((await $.mv((await $.mv((await $.v(C, "PRDataModule")), "OracleDataSet9")), "active"))))) {
    await $.mcall((await $.mv((await $.v(C, "PRDataModule")), "OracleDataSet9")), "Open", []);
  }
  if ($.truthy($.not((await $.mv((await $.mv((await $.v(C, "PRDataModule")), "OracleDataSet10")), "active"))))) {
    await $.mcall((await $.mv((await $.v(C, "PRDataModule")), "OracleDataSet10")), "Open", []);
  }
  if ($.truthy($.eq((await $.mv((await $.v(C, "RadioGroup1")), "ItemIndex")), 0))) {
    await $.mset((await $.v(C, "GroupBox2")), "Caption", "Filyallar");
    await $.mcall((await $.mv((await $.v(C, "PRDataModule")), "OracleDataSet8")), "close", []);
    await $.stmt((await $.mcall((await $.mv((await $.v(C, "PRDataModule")), "OracleDataSet8")), "SetVariable", ["prid", (await $.mv((await $.v(C, "RadioGroup1")), "ItemIndex"))])));
    await $.mcall((await $.mv((await $.v(C, "PRDataModule")), "OracleDataSet8")), "Open", []);
    await $.mset((await $.mcall((await $.mv((await $.v(C, "PRDataModule")), "OracleDataSet8")), "FieldByName", ["pr_id"])), "AsInteger", (await $.mv((await $.v(C, "RadioGroup1")), "ItemIndex")));
    await $.mset((await $.v(C, "DBGridEh2")), "DataSource", (await $.mv((await $.v(C, "PRDataModule")), "DataSource10")));
    await $.mset((await $.v(C, "DBNavigator2")), "DataSource", (await $.mv((await $.v(C, "PRDataModule")), "DataSource10")));
    await $.mset((await $.v(C, "SettingFrm")), "Height", 658);
    await $.mset((await $.v(C, "SettingFrm")), "Position", (await $.v(C, "poScreenCenter")));
  }
  if ($.truthy($.eq((await $.mv((await $.v(C, "RadioGroup1")), "ItemIndex")), 1))) {
    await $.mset((await $.v(C, "GroupBox2")), "Caption", "Filyallar");
    await $.mcall((await $.mv((await $.v(C, "PRDataModule")), "OracleDataSet8")), "close", []);
    await $.stmt((await $.mcall((await $.mv((await $.v(C, "PRDataModule")), "OracleDataSet8")), "SetVariable", ["prid", (await $.mv((await $.v(C, "RadioGroup1")), "ItemIndex"))])));
    await $.mcall((await $.mv((await $.v(C, "PRDataModule")), "OracleDataSet8")), "Open", []);
    await $.mset((await $.mcall((await $.mv((await $.v(C, "PRDataModule")), "OracleDataSet8")), "FieldByName", ["pr_id"])), "AsInteger", (await $.mv((await $.v(C, "RadioGroup1")), "ItemIndex")));
    await $.mset((await $.v(C, "DBGridEh2")), "DataSource", (await $.mv((await $.v(C, "PRDataModule")), "DataSource10")));
    await $.mset((await $.v(C, "DBNavigator2")), "DataSource", (await $.mv((await $.v(C, "PRDataModule")), "DataSource10")));
    await $.mset((await $.v(C, "SettingFrm")), "Height", 658);
    await $.mset((await $.v(C, "SettingFrm")), "Position", (await $.v(C, "poScreenCenter")));
  }
  if ($.truthy($.eq((await $.mv((await $.v(C, "RadioGroup1")), "ItemIndex")), 2))) {
    await $.mset((await $.v(C, "GroupBox2")), "Caption", "İcra şöbələri ");
    await $.mcall((await $.mv((await $.v(C, "PRDataModule")), "OracleDataSet8")), "close", []);
    await $.stmt((await $.mcall((await $.mv((await $.v(C, "PRDataModule")), "OracleDataSet8")), "SetVariable", ["prid", (await $.mv((await $.v(C, "RadioGroup1")), "ItemIndex"))])));
    await $.mcall((await $.mv((await $.v(C, "PRDataModule")), "OracleDataSet8")), "Open", []);
    await $.mset((await $.mcall((await $.mv((await $.v(C, "PRDataModule")), "OracleDataSet8")), "FieldByName", ["pr_id"])), "AsInteger", (await $.mv((await $.v(C, "RadioGroup1")), "ItemIndex")));
    await $.mset((await $.v(C, "DBGridEh2")), "DataSource", (await $.mv((await $.v(C, "PRDataModule")), "DataSource9")));
    await $.mset((await $.v(C, "DBNavigator2")), "DataSource", (await $.mv((await $.v(C, "PRDataModule")), "DataSource9")));
    await $.mset((await $.v(C, "SettingFrm")), "Height", 459);
    await $.mset((await $.v(C, "SettingFrm")), "Position", (await $.v(C, "poScreenCenter")));
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  return U;
}
