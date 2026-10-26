// Generated from FormUnit.pas by pas2js — do not edit by hand; regenerate instead.
/* eslint-disable */
// @ts-nocheck

export default function define($) {
  const U = $.unit("FormUnit", ["Windows", "Messages", "SysUtils", "Variants", "Classes", "Graphics", "Controls", "Forms", "Dialogs", "ExtCtrls", "XFSCtrls", "DB", "OracleData", "Grids", "XDBGrids", "StdCtrls", "sboapiDataModuleimpl", "NewCommonDeclsImpl"]);
  const C = [U];
  U.defClass("TForm_balace_settings", "TForm", {"xfpanel1": {"name": "XFPanel1", "type": "TXFPanel"}, "ods_person": {"name": "Ods_person", "type": "TOracleDataSet"}, "ods_balance_settings": {"name": "Ods_balance_settings", "type": "TOracleDataSet"}, "dsrc_person": {"name": "Dsrc_person", "type": "TDataSource"}, "dsrc_valyuta": {"name": "Dsrc_valyuta", "type": "TDataSource"}, "dsrc_balance_settings": {"name": "Dsrc_balance_settings", "type": "TDataSource"}, "ods_balance_settingsname": {"name": "Ods_balance_settingsNAME", "type": "TWideStringField"}, "ods_balance_settingsshort_balcn": {"name": "Ods_balance_settingsSHORT_BALCN", "type": "TFloatField"}, "ods_balance_settingslong_balcn": {"name": "Ods_balance_settingsLONG_BALCN", "type": "TFloatField"}, "ods_balance_settingsnewsort_balcn": {"name": "Ods_balance_settingsNEWSORT_BALCN", "type": "TFloatField"}, "ods_balance_settingsnewlongbalcn": {"name": "Ods_balance_settingsNEWLONGBALCN", "type": "TFloatField"}, "xfpanel2": {"name": "XFPanel2", "type": "TXFPanel"}, "xfpanel3": {"name": "XFPanel3", "type": "TXFPanel"}, "xfgroupbox1": {"name": "XFGroupBox1", "type": "TXFGroupBox"}, "xdbgrid1": {"name": "XDBGrid1", "type": "TXDBGrid"}, "xfgroupbox2": {"name": "XFGroupBox2", "type": "TXFGroupBox"}, "xdbgrid2": {"name": "XDBGrid2", "type": "TXDBGrid"}, "xfgroupbox3": {"name": "XFGroupBox3", "type": "TXFGroupBox"}, "xdbgrid3": {"name": "XDBGrid3", "type": "TXDBGrid"}, "xfpanel4": {"name": "XFPanel4", "type": "TXFPanel"}, "ods_valyuta": {"name": "ods_valyuta", "type": "TOracleDataSet"}, "ods_valyutaid": {"name": "ods_valyutaID", "type": "TFloatField"}, "ods_valyutaname": {"name": "ods_valyutaNAME", "type": "TWideStringField"}, "ods_valyutacust_typeid": {"name": "ods_valyutaCUST_TYPEID", "type": "TFloatField"}, "xfgroupbox4": {"name": "XFGroupBox4", "type": "TXFGroupBox"}, "xdbgrid4": {"name": "XDBGrid4", "type": "TXDBGrid"}, "ods_rezidents": {"name": "Ods_rezidents", "type": "TOracleDataSet"}, "dsrc_rezidents": {"name": "Dsrc_rezidents", "type": "TDataSource"}, "ods_rezidentsid": {"name": "Ods_rezidentsID", "type": "TFloatField"}, "ods_rezidentsname": {"name": "Ods_rezidentsNAME", "type": "TWideStringField"}, "ods_personid": {"name": "Ods_personID", "type": "TFloatField"}, "ods_personname": {"name": "Ods_personNAME", "type": "TWideStringField"}, "ods_personrez_qrez_id": {"name": "Ods_personREZ_QREZ_ID", "type": "TFloatField"}}, {});
  U.init(async () => {
    U.var_("Form_balace_settings", null, "TForm_balace_settings");
  });
  U.func("exportproc", async function exportproc(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"s": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["s"]);
  await $.mcall((await $.v(C, "Form_balace_settings")), "ShowModal", []);
  return L0.result;
}, {"params": ["s"], "kind": "procedure", "ptypes": ["String"]});
  U.method("TForm_balace_settings", "Ods_personAfterScroll", async function Ods_personAfterScroll(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"dataset": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["dataset"]);
  if ($.truthy($.not(((await $.mv((await $.v(C, "ods_valyuta")), "Active")))))) {
    await $.mset((await $.v(C, "ods_valyuta")), "Active", true);
  }
  return L0.result;
}, {"params": ["DataSet"], "kind": "procedure", "ptypes": ["TDataSet"]});
  U.method("TForm_balace_settings", "Ods_rezidentsAfterScroll", async function Ods_rezidentsAfterScroll(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"dataset": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["dataset"]);
  if ($.truthy($.not(((await $.mv((await $.v(C, "Ods_person")), "Active")))))) {
    await $.mset((await $.v(C, "Ods_person")), "Active", true);
  }
  return L0.result;
}, {"params": ["DataSet"], "kind": "procedure", "ptypes": ["TDataSet"]});
  U.method("TForm_balace_settings", "ods_valyutaAfterScroll", async function ods_valyutaAfterScroll(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"dataset": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["dataset"]);
  if ($.truthy($.not(((await $.mv((await $.v(C, "Ods_balance_settings")), "Active")))))) {
    await $.mset((await $.v(C, "Ods_balance_settings")), "Active", true);
  }
  return L0.result;
}, {"params": ["DataSet"], "kind": "procedure", "ptypes": ["TDataSet"]});
  U.setInitialization(async function __initialization(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: undefined};
  await $.set(C, "Form_balace_settings", (await $.mcall((await $.v(C, "TForm_balace_settings")), "Create", [(await $.v(C, "CommonApplication"))])));
  return L0.result;
});
  return U;
}
