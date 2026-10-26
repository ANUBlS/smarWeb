// Generated from FormAccNoBalCN.pas by pas2js — do not edit by hand; regenerate instead.
/* eslint-disable */
// @ts-nocheck

export default function define($) {
  const U = $.unit("FormAccNoBalCN", ["Windows", "Messages", "SysUtils", "Variants", "Classes", "Graphics", "Controls", "Forms", "Dialogs", "Grids", "XDBGrids", "StdCtrls", "XFSCtrls", "ExtCtrls", "ActnList", "QK_İmpotDataMod", "FormReport"]);
  const C = [U];
  U.defClass("TFormAccNo_BalCN", "TForm", {"xfpanel1": {"name": "XFPanel1", "type": "TXFPanel"}, "xfpanel2": {"name": "XFPanel2", "type": "TXFPanel"}, "xfbutton1": {"name": "XFButton1", "type": "TXFButton"}, "xdbgrid1": {"name": "XDBGrid1", "type": "TXDBGrid"}, "editacc_no": {"name": "EditAcc_no", "type": "TEdit"}, "editacc_name": {"name": "EditAcc_name", "type": "TEdit"}, "xfbutton2": {"name": "XFButton2", "type": "TXFButton"}, "actionlist_acc": {"name": "ActionList_acc", "type": "TActionList"}, "action_src": {"name": "Action_Src", "type": "TAction"}, "editbal_cn": {"name": "EditBal_Cn", "type": "TEdit"}, "edit_isin": {"name": "Edit_isin", "type": "TEdit"}}, {});
  U.init(async () => {
    U.var_("FormAccNo_BalCN", null, "TFormAccNo_BalCN");
  });
  U.method("TFormAccNo_BalCN", "Action_SrcExecute", async function Action_SrcExecute(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t1 = (await $.v(C, "QKİmportDataMod"));
    const $t2 = (await $.wv([$t1], "ODS_ACCOUNT", C, false));
    if ($.truthy($.ne((await $.mv((await $.wv([$t1, $t2], "EditBal_Cn", C, false)), "Text")), ""))) {
      { const $t3 = await $.iset((await $.wv([$t1, $t2], "SQL", C, false)), [2], $.add($.add(" and  nvl(upper(bal_cn1 ),0)like upper('%", (await $.mv((await $.wv([$t1, $t2], "EditBal_Cn", C, false)), "Text"))), "%')")); if ($t3 !== undefined) { await $.wset([$t1, $t2], "SQL", $t3, C); } }
    } else {
      { const $t4 = await $.iset((await $.wv([$t1, $t2], "SQL", C, false)), [2], ""); if ($t4 !== undefined) { await $.wset([$t1, $t2], "SQL", $t4, C); } }
    }
    if ($.truthy($.ne((await $.mv((await $.wv([$t1, $t2], "EditAcc_no", C, false)), "Text")), ""))) {
      { const $t5 = await $.iset((await $.wv([$t1, $t2], "SQL", C, false)), [3], $.add($.add(" and  nvl(upper(acc_no ),0)like upper('%", (await $.mv((await $.wv([$t1, $t2], "EditAcc_no", C, false)), "Text"))), "%')")); if ($t5 !== undefined) { await $.wset([$t1, $t2], "SQL", $t5, C); } }
    } else {
      { const $t6 = await $.iset((await $.wv([$t1, $t2], "SQL", C, false)), [3], ""); if ($t6 !== undefined) { await $.wset([$t1, $t2], "SQL", $t6, C); } }
    }
    if ($.truthy($.ne((await $.mv((await $.wv([$t1, $t2], "EditAcc_name", C, false)), "Text")), ""))) {
      { const $t7 = await $.iset((await $.wv([$t1, $t2], "SQL", C, false)), [4], $.add($.add(" and nvl(upper(name),0) like upper('%", (await $.mv((await $.wv([$t1, $t2], "EditAcc_name", C, false)), "Text"))), "%')")); if ($t7 !== undefined) { await $.wset([$t1, $t2], "SQL", $t7, C); } }
    } else {
      { const $t8 = await $.iset((await $.wv([$t1, $t2], "SQL", C, false)), [4], ""); if ($t8 !== undefined) { await $.wset([$t1, $t2], "SQL", $t8, C); } }
    }
    if ($.truthy($.ne((await $.mv((await $.wv([$t1, $t2], "Edit_isin", C, false)), "Text")), ""))) {
      { const $t9 = await $.iset((await $.wv([$t1, $t2], "SQL", C, false)), [5], $.add($.add(" and nvl(upper(old_acc_no),0) like upper('%", (await $.mv((await $.wv([$t1, $t2], "Edit_isin", C, false)), "Text"))), "%')")); if ($t9 !== undefined) { await $.wset([$t1, $t2], "SQL", $t9, C); } }
    } else {
      { const $t10 = await $.iset((await $.wv([$t1, $t2], "SQL", C, false)), [5], ""); if ($t10 !== undefined) { await $.wset([$t1, $t2], "SQL", $t10, C); } }
    }
    await $.stmt($.wcall([$t1, $t2], "Refresh", [], C));
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFormAccNo_BalCN", "EditAcc_nameChange", async function EditAcc_nameChange(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.eq((await $.mv((await $.mv((await $.v(C, "QKİmportDataMod")), "ODS_ACCOUNT")), "Active")), false))) {
    await $.mcall((await $.mv((await $.v(C, "QKİmportDataMod")), "ODS_ACCOUNT")), "open", []);
  }
  await $.mcall((await $.v(C, "Action_Src")), "Execute", []);
  if ($.truthy((await $.and_((await $.and_((await $.and_(($.eq((await $.mv((await $.v(C, "EditAcc_no")), "Text")), "")), async () => ($.eq((await $.mv((await $.v(C, "EditAcc_name")), "Text")), "")))), async () => ($.eq((await $.mv((await $.v(C, "EditBal_Cn")), "Text")), "")))), async () => ($.eq((await $.mv((await $.v(C, "Edit_isin")), "text")), "")))))) {
    await $.mcall((await $.mv((await $.v(C, "QKİmportDataMod")), "ODS_ACCOUNT")), "close", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFormAccNo_BalCN", "EditAcc_noChange", async function EditAcc_noChange(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.eq((await $.mv((await $.mv((await $.v(C, "QKİmportDataMod")), "ODS_ACCOUNT")), "Active")), false))) {
    await $.mcall((await $.mv((await $.v(C, "QKİmportDataMod")), "ODS_ACCOUNT")), "open", []);
  }
  await $.mcall((await $.v(C, "Action_Src")), "Execute", []);
  if ($.truthy((await $.and_((await $.and_((await $.and_(($.eq((await $.mv((await $.v(C, "EditAcc_no")), "Text")), "")), async () => ($.eq((await $.mv((await $.v(C, "EditAcc_name")), "Text")), "")))), async () => ($.eq((await $.mv((await $.v(C, "EditBal_Cn")), "Text")), "")))), async () => ($.eq((await $.mv((await $.v(C, "Edit_isin")), "text")), "")))))) {
    await $.mcall((await $.mv((await $.v(C, "QKİmportDataMod")), "ODS_ACCOUNT")), "close", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFormAccNo_BalCN", "EditBal_CnChange", async function EditBal_CnChange(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.eq((await $.mv((await $.mv((await $.v(C, "QKİmportDataMod")), "ODS_ACCOUNT")), "Active")), false))) {
    await $.mcall((await $.mv((await $.v(C, "QKİmportDataMod")), "ODS_ACCOUNT")), "open", []);
  }
  await $.mcall((await $.v(C, "Action_Src")), "Execute", []);
  if ($.truthy((await $.and_((await $.and_((await $.and_(($.eq((await $.mv((await $.v(C, "EditAcc_no")), "Text")), "")), async () => ($.eq((await $.mv((await $.v(C, "EditAcc_name")), "Text")), "")))), async () => ($.eq((await $.mv((await $.v(C, "EditBal_Cn")), "Text")), "")))), async () => ($.eq((await $.mv((await $.v(C, "Edit_isin")), "text")), "")))))) {
    await $.mcall((await $.mv((await $.v(C, "QKİmportDataMod")), "ODS_ACCOUNT")), "close", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFormAccNo_BalCN", "Edit_isinChange", async function Edit_isinChange(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.eq((await $.mv((await $.mv((await $.v(C, "QKİmportDataMod")), "ODS_ACCOUNT")), "Active")), false))) {
    await $.mcall((await $.mv((await $.v(C, "QKİmportDataMod")), "ODS_ACCOUNT")), "open", []);
  }
  await $.mcall((await $.v(C, "Action_Src")), "Execute", []);
  if ($.truthy((await $.and_((await $.and_((await $.and_(($.eq((await $.mv((await $.v(C, "EditAcc_no")), "Text")), "")), async () => ($.eq((await $.mv((await $.v(C, "EditAcc_name")), "Text")), "")))), async () => ($.eq((await $.mv((await $.v(C, "EditBal_Cn")), "Text")), "")))), async () => ($.eq((await $.mv((await $.v(C, "Edit_isin")), "text")), "")))))) {
    await $.mcall((await $.mv((await $.v(C, "QKİmportDataMod")), "ODS_ACCOUNT")), "close", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFormAccNo_BalCN", "FormClose", async function FormClose(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "action": $.asRef(p1), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mcall((await $.mv((await $.v(C, "QKİmportDataMod")), "ODS_ACCOUNT")), "Close", []);
  return L0.result;
}, {"params": ["Sender", "Action"], "kind": "procedure", "ptypes": ["TObject", "TCloseAction"]});
  U.method("TFormAccNo_BalCN", "FormShow", async function FormShow(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mcall((await $.v(C, "EditBal_Cn")), "SetFocus", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFormAccNo_BalCN", "XDBGrid1DblClick", async function XDBGrid1DblClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mset((await $.mv((await $.v(C, "Form_Report")), "Edit2")), "Text", (await $.mv((await $.mcall((await $.mv((await $.v(C, "QKİmportDataMod")), "ODS_ACCOUNT")), "FieldByName", ["acc_no"])), "AsString")));
  await $.mset((await $.mv((await $.v(C, "Form_Report")), "Edit4")), "Text", (await $.mv((await $.mcall((await $.mv((await $.v(C, "QKİmportDataMod")), "ODS_ACCOUNT")), "FieldByName", ["id"])), "AsString")));
  await $.mcall((await $.v(C, "FormAccNo_BalCN")), "Close", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFormAccNo_BalCN", "XFButton1Click", async function XFButton1Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mset((await $.mv((await $.v(C, "Form_Report")), "Edit2")), "Text", (await $.mv((await $.mcall((await $.mv((await $.v(C, "QKİmportDataMod")), "ODS_ACCOUNT")), "FieldByName", ["acc_no"])), "AsString")));
  await $.mset((await $.mv((await $.v(C, "Form_Report")), "Edit4")), "Text", (await $.mv((await $.mcall((await $.mv((await $.v(C, "QKİmportDataMod")), "ODS_ACCOUNT")), "FieldByName", ["id"])), "AsString")));
  await $.mcall((await $.v(C, "FormAccNo_BalCN")), "Close", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFormAccNo_BalCN", "XFButton2Click", async function XFButton2Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mcall((await $.mv((await $.v(C, "QKİmportDataMod")), "ODS_ACCOUNT")), "open", []);
  await $.mcall((await $.v(C, "Action_Src")), "Execute", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  return U;
}
