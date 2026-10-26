// Generated from UnitRp.pas by pas2js — do not edit by hand; regenerate instead.
/* eslint-disable */
// @ts-nocheck

export default function define($) {
  const U = $.unit("UnitRp", ["Windows", "Messages", "SysUtils", "Variants", "Classes", "Graphics", "Controls", "Forms", "Dialogs", "StdCtrls", "Grids", "DB", "DBGrids", "ExtCtrls", "BusinessProcessSetupImpl", "DMBusProcSetimpl", "SBTranslateProc", "sboapidatamoduleimpl"]);
  const C = [U];
  U.defClass("TFrmReport", "TForm", {"gridaccount1": {"name": "GridAccount1", "type": "TDBGrid"}, "panel1": {"name": "Panel1", "type": "TPanel"}, "edit1": {"name": "Edit1", "type": "TEdit"}, "edit2": {"name": "Edit2", "type": "TEdit"}, "v_id": {"name": "v_id", "type": "integer"}}, {});
  U.init(async () => {
    U.var_("FrmReport", null, "TFrmReport");
  });
  U.method("TFrmReport", "Edit1Change", async function Edit1Change(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.ne((await $.mv((await $.v(C, "Edit1")), "Text")), ""))) {
    { const $t1 = await $.iset((await $.mv((await $.mv((await $.v(C, "DMBusProcSet")), "ODS_Report")), "SQL")), [2], $.add($.add(" where id like ('%", (await $.mv((await $.v(C, "Edit1")), "Text"))), "%')")); if ($t1 !== undefined) { await $.mset((await $.mv((await $.v(C, "DMBusProcSet")), "ODS_Report")), "SQL", $t1); } }
  } else {
    { const $t2 = await $.iset((await $.mv((await $.mv((await $.v(C, "DMBusProcSet")), "ODS_Report")), "SQL")), [2], ""); if ($t2 !== undefined) { await $.mset((await $.mv((await $.v(C, "DMBusProcSet")), "ODS_Report")), "SQL", $t2); } }
  }
  await $.mcall((await $.mv((await $.v(C, "DMBusProcSet")), "ODS_Report")), "Refresh", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFrmReport", "Edit2Change", async function Edit2Change(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.ne((await $.mv((await $.v(C, "Edit2")), "Text")), ""))) {
    { const $t3 = await $.iset((await $.mv((await $.mv((await $.v(C, "DMBusProcSet")), "ODS_Report")), "SQL")), [3], $.add($.add(" where name like ('%", (await $.mv((await $.v(C, "Edit2")), "Text"))), "%')")); if ($t3 !== undefined) { await $.mset((await $.mv((await $.v(C, "DMBusProcSet")), "ODS_Report")), "SQL", $t3); } }
  } else {
    { const $t4 = await $.iset((await $.mv((await $.mv((await $.v(C, "DMBusProcSet")), "ODS_Report")), "SQL")), [3], ""); if ($t4 !== undefined) { await $.mset((await $.mv((await $.v(C, "DMBusProcSet")), "ODS_Report")), "SQL", $t4); } }
  }
  await $.mcall((await $.mv((await $.v(C, "DMBusProcSet")), "ODS_Report")), "Refresh", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFrmReport", "FormCreate", async function FormCreate(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.stmt((await $.mcall((await $.v(C, "SBTranslateProc")), "TranslateAllCompForms", [Self, (await $.mv((await $.v(C, "sboapiDataModule")), "OrPack_SL"))])));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFrmReport", "GridAccount1DblClick", async function GridAccount1DblClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.set(C, "v_id", (await $.mv((await $.mv((await $.v(C, "DMBusProcSet")), "ODS_Reportid")), "AsInteger")));
  await $.mcall((await $.v(C, "FrmReport")), "Close", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  return U;
}
