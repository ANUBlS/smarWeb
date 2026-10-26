// Generated from Unitcountry.pas by pas2js — do not edit by hand; regenerate instead.
/* eslint-disable */
// @ts-nocheck

export default function define($) {
  const U = $.unit("Unitcountry", ["Windows", "Messages", "SysUtils", "Variants", "Classes", "Graphics", "Controls", "Forms", "Dialogs", "StdCtrls", "ExtCtrls", "Grids", "DBGrids", "DMBusProcSetimpl", "BusinessProcessSetupImpl", "sbtranslateproc", "sboapiDataModuleimpl"]);
  const C = [U];
  U.defClass("TFrmCountry", "TForm", {"gridaccount1": {"name": "GridAccount1", "type": "TDBGrid"}, "panel1": {"name": "Panel1", "type": "TPanel"}, "edit1": {"name": "Edit1", "type": "TEdit"}, "edit2": {"name": "Edit2", "type": "TEdit"}, "v_countries": {"name": "v_countries", "type": "integer"}}, {});
  U.init(async () => {
    U.var_("FrmCountry", null, "TFrmCountry");
  });
  U.method("TFrmCountry", "Edit1Change", async function Edit1Change(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.ne((await $.mv((await $.v(C, "Edit1")), "Text")), ""))) {
    { const $t1 = await $.iset((await $.mv((await $.mv((await $.v(C, "DMBusProcSet")), "ODS_countries")), "SQL")), [2], $.add($.add(" where id like ('%", (await $.mv((await $.v(C, "Edit1")), "Text"))), "%')")); if ($t1 !== undefined) { await $.mset((await $.mv((await $.v(C, "DMBusProcSet")), "ODS_countries")), "SQL", $t1); } }
  } else {
    { const $t2 = await $.iset((await $.mv((await $.mv((await $.v(C, "DMBusProcSet")), "ODS_countries")), "SQL")), [2], ""); if ($t2 !== undefined) { await $.mset((await $.mv((await $.v(C, "DMBusProcSet")), "ODS_countries")), "SQL", $t2); } }
  }
  await $.mcall((await $.mv((await $.v(C, "DMBusProcSet")), "ODS_countries")), "Refresh", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFrmCountry", "Edit2Change", async function Edit2Change(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.ne((await $.mv((await $.v(C, "Edit2")), "Text")), ""))) {
    { const $t3 = await $.iset((await $.mv((await $.mv((await $.v(C, "DMBusProcSet")), "ODS_countries")), "SQL")), [3], $.add($.add(" where cntr_name like ('%", (await $.mv((await $.v(C, "Edit2")), "Text"))), "%')")); if ($t3 !== undefined) { await $.mset((await $.mv((await $.v(C, "DMBusProcSet")), "ODS_countries")), "SQL", $t3); } }
  } else {
    { const $t4 = await $.iset((await $.mv((await $.mv((await $.v(C, "DMBusProcSet")), "ODS_countries")), "SQL")), [3], ""); if ($t4 !== undefined) { await $.mset((await $.mv((await $.v(C, "DMBusProcSet")), "ODS_countries")), "SQL", $t4); } }
  }
  await $.mcall((await $.mv((await $.v(C, "DMBusProcSet")), "ODS_countries")), "Refresh", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFrmCountry", "FormCreate", async function FormCreate(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.stmt((await $.mcall((await $.v(C, "SBTranslateProc")), "TranslateAllCompForms", [Self, (await $.mv((await $.v(C, "sboapiDataModule")), "OrPack_SL"))])));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFrmCountry", "GridAccount1DblClick", async function GridAccount1DblClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.set(C, "v_countries", (await $.mv((await $.mv((await $.v(C, "DMBusProcSet")), "ODS_countriesid")), "AsInteger")));
  await $.mcall((await $.v(C, "FrmCountry")), "Close", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  return U;
}
