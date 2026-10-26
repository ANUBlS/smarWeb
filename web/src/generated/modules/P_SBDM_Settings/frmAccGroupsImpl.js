// Generated from frmAccGroupsImpl.pas by pas2js — do not edit by hand; regenerate instead.
/* eslint-disable */
// @ts-nocheck

export default function define($) {
  const U = $.unit("frmAccGroupsImpl", ["Windows", "Messages", "SysUtils", "Classes", "Graphics", "Controls", "Forms", "Dialogs", "Grids", "DBGridEh", "ComCtrls", "ExtCtrls", "DBCtrls", "Db", "OracleData", "sboapiDataModuleImpl", "SBTranslateProc"]);
  const C = [U];
  U.defClass("TfrmAccGroups", "TForm", {"dbgrideh1": {"name": "DBGridEh1", "type": "TDBGridEh"}, "dbnavigator1": {"name": "DBNavigator1", "type": "TDBNavigator"}, "dbgrideh2": {"name": "DBGridEh2", "type": "TDBGridEh"}, "statusbar1": {"name": "StatusBar1", "type": "TStatusBar"}, "acc_zones": {"name": "acc_zones", "type": "TOracleDataSet"}, "acc_zonesdatsrc": {"name": "acc_zonesDatSrc", "type": "TDataSource"}, "acc_zone_info": {"name": "acc_zone_info", "type": "TOracleDataSet"}, "acc_zone_infodatsrc": {"name": "acc_zone_infoDatSrc", "type": "TDataSource"}, "acc_zone_infozoneid": {"name": "acc_zone_infoZONEID", "type": "TFloatField"}, "acc_zone_infoaccgroup": {"name": "acc_zone_infoACCGROUP", "type": "TFloatField"}, "acc_zoneszoneid": {"name": "acc_zonesZONEID", "type": "TFloatField"}, "acc_zonesdescription": {"name": "acc_zonesDESCRIPTION", "type": "Twidestringfield"}}, {});
  U.init(async () => {
    U.var_("frmAccGroups", null, "TfrmAccGroups");
  });
  U.method("TfrmAccGroups", "FormCanResize", async function FormCanResize(Self, p0, p1, p2, p3) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "newwidth": $.asRef(p1), "newheight": $.asRef(p2), "resize": $.asRef(p3), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await L0["resize"].set(false);
  return L0.result;
}, {"params": ["Sender", "NewWidth", "NewHeight", "Resize"], "kind": "procedure", "ptypes": ["TObject", "Integer", "Integer", "Boolean"]});
  U.method("TfrmAccGroups", "FormKeyPress", async function FormKeyPress(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "key": $.asRef(p1), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.eq((await $.call(C, "Ord", [(await L0["key"].get())])), (await $.v(C, "VK_ESCAPE"))))) {
    await $.stmt($.call(C, "Close", []));
  }
  return L0.result;
}, {"params": ["Sender", "Key"], "kind": "procedure", "ptypes": ["TObject", "Char"]});
  U.method("TfrmAccGroups", "FormCreate", async function FormCreate(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mcall((await $.v(C, "acc_zones")), "Open", []);
  await $.mcall((await $.v(C, "acc_zone_info")), "Open", []);
  await $.stmt((await $.mcall((await $.v(C, "SBTranslateProc")), "TranslateAllCompForms", [Self, (await $.mv((await $.v(C, "sboapiDataModule")), "OrPack_SL"))])));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TfrmAccGroups", "FormDestroy", async function FormDestroy(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mcall((await $.v(C, "acc_zones")), "CloseAll", []);
  await $.mcall((await $.v(C, "acc_zone_info")), "CloseAll", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  return U;
}
