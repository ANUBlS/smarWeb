// Generated from FormBal_CN.pas by pas2js — do not edit by hand; regenerate instead.
/* eslint-disable */
// @ts-nocheck

export default function define($) {
  const U = $.unit("FormBal_CN", ["Windows", "Messages", "SysUtils", "Variants", "Classes", "Graphics", "Controls", "Forms", "Dialogs", "ExtCtrls", "XFSCtrls", "Grids", "XDBGrids", "StdCtrls", "ActnList", "QK_İmpotDataMod", "FormReport"]);
  const C = [U];
  U.defClass("TFormBalCN", "TForm", {"xfpanel1": {"name": "XFPanel1", "type": "TXFPanel"}, "xfpanel2": {"name": "XFPanel2", "type": "TXFPanel"}, "xdbgrid1": {"name": "XDBGrid1", "type": "TXDBGrid"}, "edit_balcn": {"name": "Edit_BalCn", "type": "TEdit"}, "edit_balname": {"name": "Edit_BalName", "type": "TEdit"}, "xfbutton1": {"name": "XFButton1", "type": "TXFButton"}, "xfbutton2": {"name": "XFButton2", "type": "TXFButton"}, "actionlist_balcn": {"name": "ActionList_BalCN", "type": "TActionList"}, "action_src": {"name": "Action_Src", "type": "TAction"}}, {});
  U.init(async () => {
    U.var_("FormBalCN", null, "TFormBalCN");
  });
  U.method("TFormBalCN", "Action_SrcExecute", async function Action_SrcExecute(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t1 = (await $.v(C, "QKİmportDataMod"));
    const $t2 = (await $.wv([$t1], "ODS_BAL_SPR1", C, false));
    if ($.truthy($.ne((await $.mv((await $.wv([$t1, $t2], "Edit_BalCn", C, false)), "Text")), ""))) {
      { const $t3 = await $.iset((await $.wv([$t1, $t2], "SQL", C, false)), [3], $.add($.add(" and  BAL_CN like ('%", (await $.mv((await $.wv([$t1, $t2], "Edit_BalCn", C, false)), "Text"))), "%')")); if ($t3 !== undefined) { await $.wset([$t1, $t2], "SQL", $t3, C); } }
    } else {
      { const $t4 = await $.iset((await $.wv([$t1, $t2], "SQL", C, false)), [3], ""); if ($t4 !== undefined) { await $.wset([$t1, $t2], "SQL", $t4, C); } }
    }
    if ($.truthy($.ne((await $.mv((await $.wv([$t1, $t2], "Edit_BalName", C, false)), "Text")), ""))) {
      { const $t5 = await $.iset((await $.wv([$t1, $t2], "SQL", C, false)), [4], $.add($.add(" and nvl(upper(BALNAME),0) like upper('%", (await $.mv((await $.wv([$t1, $t2], "Edit_BalName", C, false)), "Text"))), "%')")); if ($t5 !== undefined) { await $.wset([$t1, $t2], "SQL", $t5, C); } }
    } else {
      { const $t6 = await $.iset((await $.wv([$t1, $t2], "SQL", C, false)), [4], ""); if ($t6 !== undefined) { await $.wset([$t1, $t2], "SQL", $t6, C); } }
    }
    await $.stmt($.wcall([$t1, $t2], "Refresh", [], C));
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFormBalCN", "Edit_BalCnChange", async function Edit_BalCnChange(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.eq((await $.mv((await $.mv((await $.v(C, "QKİmportDataMod")), "ODS_BAL_SPR1")), "Active")), false))) {
    await $.mcall((await $.mv((await $.v(C, "QKİmportDataMod")), "ODS_BAL_SPR1")), "open", []);
  }
  await $.mcall((await $.v(C, "Action_Src")), "Execute", []);
  if ($.truthy((await $.and_(($.eq((await $.mv((await $.v(C, "Edit_BalCn")), "Text")), "")), async () => ($.eq((await $.mv((await $.v(C, "Edit_BalName")), "Text")), "")))))) {
    await $.mcall((await $.mv((await $.v(C, "QKİmportDataMod")), "ODS_BAL_SPR1")), "close", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFormBalCN", "Edit_BalNameChange", async function Edit_BalNameChange(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.eq((await $.mv((await $.mv((await $.v(C, "QKİmportDataMod")), "ODS_BAL_SPR1")), "Active")), false))) {
    await $.mcall((await $.mv((await $.v(C, "QKİmportDataMod")), "ODS_BAL_SPR1")), "open", []);
  }
  await $.mcall((await $.v(C, "Action_Src")), "Execute", []);
  if ($.truthy((await $.and_(($.eq((await $.mv((await $.v(C, "Edit_BalCn")), "Text")), "")), async () => ($.eq((await $.mv((await $.v(C, "Edit_BalName")), "Text")), "")))))) {
    await $.mcall((await $.mv((await $.v(C, "QKİmportDataMod")), "ODS_BAL_SPR1")), "close", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFormBalCN", "FormClose", async function FormClose(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "action": $.asRef(p1), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mcall((await $.mv((await $.v(C, "QKİmportDataMod")), "ODS_BAL_SPR1")), "close", []);
  return L0.result;
}, {"params": ["Sender", "Action"], "kind": "procedure", "ptypes": ["TObject", "TCloseAction"]});
  U.method("TFormBalCN", "FormShow", async function FormShow(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mcall((await $.v(C, "Edit_BalCn")), "SetFocus", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFormBalCN", "XDBGrid1DblClick", async function XDBGrid1DblClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mset((await $.mv((await $.v(C, "Form_Report")), "Edit2")), "Text", (await $.mv((await $.mcall((await $.mv((await $.v(C, "QKİmportDataMod")), "ODS_BAL_SPR1")), "FieldByName", ["Bal_cn"])), "AsString")));
  await $.mset((await $.mv((await $.v(C, "Form_Report")), "Edit4")), "Text", (await $.mv((await $.mcall((await $.mv((await $.v(C, "QKİmportDataMod")), "ODS_BAL_SPR1")), "FieldByName", ["Bal_cn"])), "AsString")));
  await $.mcall((await $.v(C, "FormBalCN")), "Close", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFormBalCN", "XFButton1Click", async function XFButton1Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mset((await $.mv((await $.v(C, "Form_Report")), "Edit2")), "Text", (await $.mv((await $.mcall((await $.mv((await $.v(C, "QKİmportDataMod")), "ODS_BAL_SPR1")), "FieldByName", ["Bal_cn"])), "AsString")));
  await $.mset((await $.mv((await $.v(C, "Form_Report")), "Edit4")), "Text", (await $.mv((await $.mcall((await $.mv((await $.v(C, "QKİmportDataMod")), "ODS_BAL_SPR1")), "FieldByName", ["Bal_cn"])), "AsString")));
  await $.mcall((await $.v(C, "FormBalCN")), "Close", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFormBalCN", "XFButton2Click", async function XFButton2Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mcall((await $.mv((await $.v(C, "QKİmportDataMod")), "ODS_BAL_SPR1")), "open", []);
  await $.mcall((await $.v(C, "Action_Src")), "Execute", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  return U;
}
