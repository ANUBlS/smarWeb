// Generated from UnitTr.pas by pas2js — do not edit by hand; regenerate instead.
/* eslint-disable */
// @ts-nocheck

export default function define($) {
  const U = $.unit("UnitTr", ["Windows", "Messages", "SysUtils", "Variants", "Classes", "Graphics", "Controls", "Forms", "Dialogs", "StdCtrls", "ExtCtrls", "Grids", "DBGrids", "DMBusProcSetimpl", "BusinessProcessSetupImpl", "SBTranslateProc", "sboapidatamoduleimpl"]);
  const C = [U];
  U.defClass("TFrmTransaction", "TForm", {"gridaccount1": {"name": "GridAccount1", "type": "TDBGrid"}, "panel1": {"name": "Panel1", "type": "TPanel"}, "edit1": {"name": "Edit1", "type": "TEdit"}, "edit2": {"name": "Edit2", "type": "TEdit"}, "v_transaction": {"name": "v_transaction", "type": "integer"}}, {});
  U.init(async () => {
    U.var_("FrmTransaction", null, "TFrmTransaction");
  });
  U.method("TFrmTransaction", "Edit1Change", async function Edit1Change(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.ne((await $.mv((await $.v(C, "Edit1")), "Text")), ""))) {
    { const $t1 = await $.iset((await $.mv((await $.mv((await $.v(C, "DMBusProcSet")), "ODS_Transaction")), "SQL")), [2], $.add($.add(" where id like ('%", (await $.mv((await $.v(C, "Edit1")), "Text"))), "%')")); if ($t1 !== undefined) { await $.mset((await $.mv((await $.v(C, "DMBusProcSet")), "ODS_Transaction")), "SQL", $t1); } }
  } else {
    { const $t2 = await $.iset((await $.mv((await $.mv((await $.v(C, "DMBusProcSet")), "ODS_Transaction")), "SQL")), [2], ""); if ($t2 !== undefined) { await $.mset((await $.mv((await $.v(C, "DMBusProcSet")), "ODS_Transaction")), "SQL", $t2); } }
  }
  await $.mcall((await $.mv((await $.v(C, "DMBusProcSet")), "ODS_Transaction")), "Refresh", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFrmTransaction", "Edit2Change", async function Edit2Change(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.ne((await $.mv((await $.v(C, "Edit2")), "Text")), ""))) {
    { const $t3 = await $.iset((await $.mv((await $.mv((await $.v(C, "DMBusProcSet")), "ODS_Transaction")), "SQL")), [3], $.add($.add(" where name  like ('%", (await $.mv((await $.v(C, "Edit2")), "Text"))), "%')")); if ($t3 !== undefined) { await $.mset((await $.mv((await $.v(C, "DMBusProcSet")), "ODS_Transaction")), "SQL", $t3); } }
  } else {
    { const $t4 = await $.iset((await $.mv((await $.mv((await $.v(C, "DMBusProcSet")), "ODS_Transaction")), "SQL")), [3], ""); if ($t4 !== undefined) { await $.mset((await $.mv((await $.v(C, "DMBusProcSet")), "ODS_Transaction")), "SQL", $t4); } }
  }
  await $.mcall((await $.mv((await $.v(C, "DMBusProcSet")), "ODS_Transaction")), "Refresh", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFrmTransaction", "FormCreate", async function FormCreate(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.stmt((await $.mcall((await $.v(C, "SBTranslateProc")), "TranslateAllCompForms", [Self, (await $.mv((await $.v(C, "sboapiDataModule")), "OrPack_SL"))])));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFrmTransaction", "GridAccount1DblClick", async function GridAccount1DblClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.set(C, "v_transaction", (await $.mv((await $.mv((await $.v(C, "DMBusProcSet")), "ODS_Transactionid")), "AsInteger")));
  await $.mcall((await $.v(C, "FrmTransaction")), "Close", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  return U;
}
