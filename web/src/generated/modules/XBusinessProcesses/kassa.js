// Generated from kassa.pas by pas2js — do not edit by hand; regenerate instead.
/* eslint-disable */
// @ts-nocheck

export default function define($) {
  const U = $.unit("kassa", ["Windows", "Messages", "SysUtils", "Variants", "Classes", "Graphics", "Controls", "Forms", "Dialogs", "StdCtrls", "ExtCtrls", "Grids", "DBGrids", "DMBusProcSetimpl", "BusinessProcessSetupImpl"]);
  const C = [U];
  U.defClass("Tkassa1", "TForm", {"gridaccount1": {"name": "GridAccount1", "type": "TDBGrid"}, "panel1": {"name": "Panel1", "type": "TPanel"}, "edit1": {"name": "Edit1", "type": "TEdit"}, "edit2": {"name": "Edit2", "type": "TEdit"}, "v_kassa": {"name": "v_kassa", "type": "String"}}, {});
  U.init(async () => {
    U.var_("kassa1", null, "Tkassa1");
  });
  U.method("Tkassa1", "Edit1Change", async function Edit1Change(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.ne((await $.mv((await $.v(C, "Edit1")), "Text")), ""))) {
    { const $t1 = await $.iset((await $.mv((await $.mv((await $.v(C, "DMBusProcSet")), "ODS_kassa_b")), "SQL")), [2], $.add($.add(" where symbol like ('%", (await $.mv((await $.v(C, "Edit1")), "Text"))), "%')")); if ($t1 !== undefined) { await $.mset((await $.mv((await $.v(C, "DMBusProcSet")), "ODS_kassa_b")), "SQL", $t1); } }
  } else {
    { const $t2 = await $.iset((await $.mv((await $.mv((await $.v(C, "DMBusProcSet")), "ODS_kassa_b")), "SQL")), [2], ""); if ($t2 !== undefined) { await $.mset((await $.mv((await $.v(C, "DMBusProcSet")), "ODS_kassa_b")), "SQL", $t2); } }
  }
  await $.mcall((await $.mv((await $.v(C, "DMBusProcSet")), "ODS_kassa_b")), "Refresh", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("Tkassa1", "Edit2Change", async function Edit2Change(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.ne((await $.mv((await $.v(C, "Edit2")), "Text")), ""))) {
    { const $t3 = await $.iset((await $.mv((await $.mv((await $.v(C, "DMBusProcSet")), "ODS_kassa_b")), "SQL")), [3], $.add($.add(" where name like ('%", (await $.mv((await $.v(C, "Edit2")), "Text"))), "%')")); if ($t3 !== undefined) { await $.mset((await $.mv((await $.v(C, "DMBusProcSet")), "ODS_kassa_b")), "SQL", $t3); } }
  } else {
    { const $t4 = await $.iset((await $.mv((await $.mv((await $.v(C, "DMBusProcSet")), "ODS_kassa_b")), "SQL")), [3], ""); if ($t4 !== undefined) { await $.mset((await $.mv((await $.v(C, "DMBusProcSet")), "ODS_kassa_b")), "SQL", $t4); } }
  }
  await $.mcall((await $.mv((await $.v(C, "DMBusProcSet")), "ODS_kassa_b")), "Refresh", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("Tkassa1", "GridAccount1DblClick", async function GridAccount1DblClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.set(C, "v_kassa", (await $.mv((await $.mv((await $.v(C, "DMBusProcSet")), "ODS_kassa_bSYMBOL")), "asstring")));
  await $.mcall((await $.v(C, "kassa1")), "Close", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  return U;
}
