// Generated from konvert.pas by pas2js — do not edit by hand; regenerate instead.
/* eslint-disable */
// @ts-nocheck

export default function define($) {
  const U = $.unit("konvert", ["Windows", "Messages", "SysUtils", "Variants", "Classes", "Graphics", "Controls", "Forms", "Dialogs", "Grids", "DBGrids", "ExtCtrls", "StdCtrls", "DB", "OracleData", "BusinessProcessSetupImpl", "Unit6", "DMBusProcSetimpl"]);
  const C = [U];
  U.defClass("Tkonvert1", "TForm", {"panel1": {"name": "Panel1", "type": "TPanel"}, "gridaccount1": {"name": "GridAccount1", "type": "TDBGrid"}, "edit1": {"name": "Edit1", "type": "TEdit"}, "edit2": {"name": "Edit2", "type": "TEdit"}, "oracledataset9": {"name": "OracleDataSet9", "type": "TOracleDataSet"}, "oracledataset9id": {"name": "OracleDataSet9ID", "type": "TFloatField"}, "oracledataset9shortname": {"name": "OracleDataSet9SHORTNAME", "type": "TWideStringField"}, "oracledataset9fullpath": {"name": "OracleDataSet9FULLPATH", "type": "TWideStringField"}, "oracledataset9extra": {"name": "OracleDataSet9EXTRA", "type": "TWideStringField"}, "oracledataset9different": {"name": "OracleDataSet9DIFFERENT", "type": "TFloatField"}, "datasource9": {"name": "DataSource9", "type": "TDataSource"}, "v_shortname": {"name": "v_shortname", "type": "Integer"}}, {});
  U.init(async () => {
    U.var_("konvert1", null, "Tkonvert1");
  });
  U.method("Tkonvert1", "Edit1Change", async function Edit1Change(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.ne((await $.mv((await $.v(C, "Edit1")), "Text")), ""))) {
    { const $t1 = await $.iset((await $.mv((await $.v(C, "OracleDataSet9")), "SQL")), [2], $.add($.add(" where a.shortname like ('%", (await $.mv((await $.v(C, "Edit1")), "Text"))), "%')")); if ($t1 !== undefined) { await $.mset((await $.v(C, "OracleDataSet9")), "SQL", $t1); } }
  } else {
    { const $t2 = await $.iset((await $.mv((await $.v(C, "OracleDataSet9")), "SQL")), [2], ""); if ($t2 !== undefined) { await $.mset((await $.v(C, "OracleDataSet9")), "SQL", $t2); } }
  }
  await $.mcall((await $.v(C, "OracleDataSet9")), "Refresh", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("Tkonvert1", "Edit2Change", async function Edit2Change(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.ne((await $.mv((await $.v(C, "Edit2")), "Text")), ""))) {
    { const $t3 = await $.iset((await $.mv((await $.v(C, "OracleDataSet9")), "SQL")), [3], $.add($.add(" where a.fullpath like ('%", (await $.mv((await $.v(C, "Edit2")), "Text"))), "%')")); if ($t3 !== undefined) { await $.mset((await $.v(C, "OracleDataSet9")), "SQL", $t3); } }
  } else {
    { const $t4 = await $.iset((await $.mv((await $.v(C, "OracleDataSet9")), "SQL")), [3], ""); if ($t4 !== undefined) { await $.mset((await $.v(C, "OracleDataSet9")), "SQL", $t4); } }
  }
  await $.mcall((await $.v(C, "OracleDataSet9")), "Refresh", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("Tkonvert1", "GridAccount1DblClick", async function GridAccount1DblClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.set(C, "v_shortname", (await $.mv((await $.v(C, "OracleDataSet9SHORTNAME")), "AsInteger")));
  await $.mcall((await $.v(C, "konvert1")), "Close", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  return U;
}
