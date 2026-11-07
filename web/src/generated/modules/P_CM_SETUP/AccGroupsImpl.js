// Generated from AccGroupsImpl.pas by pas2js — do not edit by hand; regenerate instead.
/* eslint-disable */
// @ts-nocheck

export default function define($) {
  const U = $.unit("AccGroupsImpl", ["Windows", "Messages", "SysUtils", "Classes", "Graphics", "Controls", "Forms", "Dialogs", "NLSLocalizer", "ExtCtrls", "Db", "OracleData", "Grids", "DBGrids", "DBCtrls", "ComCtrls", "sboapiDataModuleImpl"]);
  const C = [U];
  U.defClass("TAccGrpForm", "TForm", {"panel1": {"name": "Panel1", "type": "TPanel"}, "accgroups": {"name": "AccGroups", "type": "TOracleDataSet"}, "accgrinfo": {"name": "AccGrInfo", "type": "TOracleDataSet"}, "datasource1": {"name": "DataSource1", "type": "TDataSource"}, "datasource2": {"name": "DataSource2", "type": "TDataSource"}, "dbgrid1": {"name": "DBGrid1", "type": "TDBGrid"}, "statusbar1": {"name": "StatusBar1", "type": "TStatusBar"}, "panel2": {"name": "Panel2", "type": "TPanel"}, "dbnavigator1": {"name": "DBNavigator1", "type": "TDBNavigator"}, "dbgrid2": {"name": "DBGrid2", "type": "TDBGrid"}, "accgrinfogroupid": {"name": "AccGrInfoGROUPID", "type": "TFloatField"}, "accgrinfoaccountnumber": {"name": "AccGrInfoACCOUNTNUMBER", "type": "TFloatField"}, "accgroupsid": {"name": "AccGroupsID", "type": "TFloatField"}, "accgroupsiname": {"name": "AccGroupsINAME", "type": "TWideStringField"}, "accgroupsdescription": {"name": "AccGroupsDESCRIPTION", "type": "TWideStringField"}}, {});
  U.init(async () => {
    U.var_("AccGrpForm", null, "TAccGrpForm");
  });
  U.method("TAccGrpForm", "FormShow", async function FormShow(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mcall((await $.v(C, "AccGroups")), "Open", []);
  await $.mcall((await $.v(C, "AccGrInfo")), "Open", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TAccGrpForm", "FormKeyPress", async function FormKeyPress(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "key": $.asRef(p1), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.eq((await $.call(C, "ORD", [(await L0["key"].get())])), (await $.v(C, "VK_ESCAPE"))))) {
    await $.stmt($.call(C, "Close", []));
  }
  return L0.result;
}, {"params": ["Sender", "Key"], "kind": "procedure", "ptypes": ["TObject", "Char"]});
  return U;
}
