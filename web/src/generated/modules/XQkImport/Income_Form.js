// Generated from Income_Form.pas by pas2js — do not edit by hand; regenerate instead.
/* eslint-disable */
// @ts-nocheck

export default function define($) {
  const U = $.unit("Income_Form", ["Windows", "Messages", "SysUtils", "Variants", "Classes", "Graphics", "Controls", "Forms", "Dialogs", "StdCtrls", "XFSCtrls", "Grids", "XDBGrids", "ExtCtrls", "ActnList", "OracleData", "DB", "SearchEdit", "dblookup", "Designer", "QK_İmpotDataMod", "FormReport"]);
  const C = [U];
  U.defClass("TIncomeForm", "TForm", {"xfpanel1": {"name": "XFPanel1", "type": "TXFPanel"}, "xfpanel2": {"name": "XFPanel2", "type": "TXFPanel"}, "xfbutton1": {"name": "XFButton1", "type": "TXFButton"}, "xdbgridaccounts": {"name": "XDBGridAccounts", "type": "TXDBGrid"}, "editbal_cn": {"name": "EditBal_Cn", "type": "TEdit"}, "editacc_no": {"name": "EditACC_NO", "type": "TEdit"}, "editname": {"name": "EditName", "type": "TEdit"}, "xfbutton2": {"name": "XFButton2", "type": "TXFButton"}, "actionlist1": {"name": "ActionList1", "type": "TActionList"}, "action_src": {"name": "Action_Src", "type": "TAction"}}, {});
  U.init(async () => {
    U.var_("IncomeForm", null, "TIncomeForm");
  });
  U.method("TIncomeForm", "Action_SrcExecute", async function Action_SrcExecute(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t1 = (await $.v(C, "QKİmportDataMod"));
    const $t2 = (await $.wv([$t1], "Ods_FormIncomeAcc", C, false));
    if ($.truthy($.ne((await $.mv((await $.wv([$t1, $t2], "EditBal_Cn", C, false)), "Text")), ""))) {
      { const $t3 = await $.iset((await $.wv([$t1, $t2], "SQL", C, false)), [10], $.add($.add("and b.bal_cn like ('%", (await $.mv((await $.wv([$t1, $t2], "EditBal_Cn", C, false)), "Text"))), "%')")); if ($t3 !== undefined) { await $.wset([$t1, $t2], "SQL", $t3, C); } }
    } else {
      { const $t4 = await $.iset((await $.wv([$t1, $t2], "SQL", C, false)), [10], ""); if ($t4 !== undefined) { await $.wset([$t1, $t2], "SQL", $t4, C); } }
    }
    if ($.truthy($.ne((await $.mv((await $.wv([$t1, $t2], "EditAcc_No", C, false)), "Text")), ""))) {
      { const $t5 = await $.iset((await $.wv([$t1, $t2], "SQL", C, false)), [11], $.add($.add("and  nvl(upper(a.ACC_NO),0) like upper('%", (await $.mv((await $.wv([$t1, $t2], "EditAcc_No", C, false)), "Text"))), "%')")); if ($t5 !== undefined) { await $.wset([$t1, $t2], "SQL", $t5, C); } }
    } else {
      { const $t6 = await $.iset((await $.wv([$t1, $t2], "SQL", C, false)), [11], ""); if ($t6 !== undefined) { await $.wset([$t1, $t2], "SQL", $t6, C); } }
    }
    if ($.truthy($.ne((await $.mv((await $.wv([$t1, $t2], "EditName", C, false)), "Text")), ""))) {
      { const $t7 = await $.iset((await $.wv([$t1, $t2], "SQL", C, false)), [12], $.add($.add("and nvl(upper(a.name),0) like upper('%", (await $.mv((await $.wv([$t1, $t2], "EditName", C, false)), "Text"))), "%')")); if ($t7 !== undefined) { await $.wset([$t1, $t2], "SQL", $t7, C); } }
    } else {
      { const $t8 = await $.iset((await $.wv([$t1, $t2], "SQL", C, false)), [12], ""); if ($t8 !== undefined) { await $.wset([$t1, $t2], "SQL", $t8, C); } }
    }
    await $.stmt($.wcall([$t1, $t2], "Refresh", [], C));
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TIncomeForm", "EditACC_NOChange", async function EditACC_NOChange(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.eq((await $.mv((await $.mv((await $.v(C, "QKİmportDataMod")), "Ods_FormIncomeAcc")), "Active")), false))) {
    await $.mcall((await $.mv((await $.v(C, "QKİmportDataMod")), "Ods_FormIncomeAcc")), "open", []);
  }
  await $.mcall((await $.v(C, "Action_Src")), "Execute", []);
  if ($.truthy((await $.and_((await $.and_(($.eq((await $.mv((await $.v(C, "EditBal_Cn")), "Text")), "")), async () => ($.eq((await $.mv((await $.v(C, "EditACC_NO")), "Text")), "")))), async () => ($.eq((await $.mv((await $.v(C, "EditName")), "Text")), "")))))) {
    await $.mcall((await $.mv((await $.v(C, "QKİmportDataMod")), "Ods_FormIncomeAcc")), "close", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TIncomeForm", "EditBal_CnChange", async function EditBal_CnChange(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.eq((await $.mv((await $.mv((await $.v(C, "QKİmportDataMod")), "Ods_FormIncomeAcc")), "Active")), false))) {
    await $.mcall((await $.mv((await $.v(C, "QKİmportDataMod")), "Ods_FormIncomeAcc")), "open", []);
  }
  await $.mcall((await $.v(C, "Action_Src")), "Execute", []);
  if ($.truthy((await $.and_((await $.and_(($.eq((await $.mv((await $.v(C, "EditBal_Cn")), "Text")), "")), async () => ($.eq((await $.mv((await $.v(C, "EditACC_NO")), "Text")), "")))), async () => ($.eq((await $.mv((await $.v(C, "EditName")), "Text")), "")))))) {
    await $.mcall((await $.mv((await $.v(C, "QKİmportDataMod")), "Ods_FormIncomeAcc")), "close", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TIncomeForm", "EditNameChange", async function EditNameChange(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.eq((await $.mv((await $.mv((await $.v(C, "QKİmportDataMod")), "Ods_FormIncomeAcc")), "Active")), false))) {
    await $.mcall((await $.mv((await $.v(C, "QKİmportDataMod")), "Ods_FormIncomeAcc")), "open", []);
  }
  await $.mcall((await $.v(C, "Action_Src")), "Execute", []);
  if ($.truthy((await $.and_((await $.and_(($.eq((await $.mv((await $.v(C, "EditBal_Cn")), "Text")), "")), async () => ($.eq((await $.mv((await $.v(C, "EditACC_NO")), "Text")), "")))), async () => ($.eq((await $.mv((await $.v(C, "EditName")), "Text")), "")))))) {
    await $.mcall((await $.mv((await $.v(C, "QKİmportDataMod")), "Ods_FormIncomeAcc")), "close", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TIncomeForm", "FormClose", async function FormClose(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "action": $.asRef(p1), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mcall((await $.mv((await $.v(C, "QKİmportDataMod")), "Ods_FormIncomeAcc")), "close", []);
  return L0.result;
}, {"params": ["Sender", "Action"], "kind": "procedure", "ptypes": ["TObject", "TCloseAction"]});
  U.method("TIncomeForm", "FormKeyPress", async function FormKeyPress(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "key": $.asRef(p1), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  return L0.result;
}, {"params": ["Sender", "Key"], "kind": "procedure", "ptypes": ["TObject", "Char"]});
  U.method("TIncomeForm", "FormShow", async function FormShow(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mcall((await $.v(C, "EditBal_Cn")), "SetFocus", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TIncomeForm", "XDBGridAccountsDblClick", async function XDBGridAccountsDblClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mset((await $.mv((await $.v(C, "Form_Report")), "edit1")), "Text", (await $.mv((await $.mcall((await $.mv((await $.v(C, "QKİmportDataMod")), "Ods_FormIncomeAcc")), "FieldByName", ["acc_no"])), "AsString")));
  await $.mset((await $.mv((await $.v(C, "Form_Report")), "edit3")), "text", (await $.mv((await $.mcall((await $.mv((await $.v(C, "QKİmportDataMod")), "Ods_FormIncomeAcc")), "FieldByName", ["id"])), "AsString")));
  await $.mcall((await $.v(C, "IncomeForm")), "Close", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TIncomeForm", "XFButton1Click", async function XFButton1Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mset((await $.mv((await $.v(C, "Form_Report")), "edit1")), "Text", (await $.mv((await $.mcall((await $.mv((await $.v(C, "QKİmportDataMod")), "Ods_FormIncomeAcc")), "FieldByName", ["acc_no"])), "AsString")));
  await $.mset((await $.mv((await $.v(C, "Form_Report")), "edit3")), "text", (await $.mv((await $.mcall((await $.mv((await $.v(C, "QKİmportDataMod")), "Ods_FormIncomeAcc")), "FieldByName", ["id"])), "AsString")));
  await $.mcall((await $.v(C, "IncomeForm")), "Close", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TIncomeForm", "XFButton2Click", async function XFButton2Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mcall((await $.mv((await $.v(C, "QKİmportDataMod")), "Ods_FormIncomeAcc")), "open", []);
  await $.mcall((await $.v(C, "Action_Src")), "Execute", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  return U;
}
