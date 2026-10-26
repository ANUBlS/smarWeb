// Generated from Unit_Rekvezit.pas by pas2js — do not edit by hand; regenerate instead.
/* eslint-disable */
// @ts-nocheck

export default function define($) {
  const U = $.unit("Unit_Rekvezit", ["Windows", "Messages", "SysUtils", "Variants", "Classes", "Graphics", "Controls", "Forms", "Dialogs", "Grids", "XDBGrids", "ExtCtrls", "StdCtrls", "OpenAccdataImpl", "OpenAccountImpl", "Account_edit_Unit"]);
  const C = [U];
  U.defClass("TFormRekvezit", "TForm", {"xdbgrid1": {"name": "XDBGrid1", "type": "TXDBGrid"}, "panel1": {"name": "Panel1", "type": "TPanel"}, "button1": {"name": "Button1", "type": "TButton"}, "editbankname": {"name": "EditBankName", "type": "TEdit"}, "editbankcode": {"name": "EditBankCODE", "type": "TEdit"}, "edit_inn": {"name": "Edit_inn", "type": "TEdit"}}, {});
  U.init(async () => {
    U.var_("FormRekvezit", null, "TFormRekvezit");
  });
  U.method("TFormRekvezit", "Button1Click", async function Button1Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.eq((await $.v(C, "accont_id")), ""))) {
    await $.mset((await $.mv((await $.v(C, "OpenAccount")), "Edit_BankCod")), "text", (await $.mv((await $.mcall((await $.mv((await $.v(C, "DataAcc")), "Ods_BankM")), "FieldByName", ["bankcode"])), "AsString")));
  } else {
    await $.mset((await $.mv((await $.v(C, "Account_edit")), "Edit_BankCod")), "text", (await $.mv((await $.mcall((await $.mv((await $.v(C, "DataAcc")), "Ods_BankM")), "FieldByName", ["bankcode"])), "AsString")));
  }
  await $.mcall((await $.v(C, "FormRekvezit")), "Close", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFormRekvezit", "EditBankCODEChange", async function EditBankCODEChange(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.ne((await $.mv((await $.v(C, "EditBankCODE")), "Text")), ""))) {
    { const $t1 = await $.iset((await $.mv((await $.mv((await $.v(C, "DataAcc")), "Ods_BankM")), "SQL")), [3], $.add($.add("where bankcode like ('%", (await $.mv((await $.v(C, "EditBankCODE")), "Text"))), "%')")); if ($t1 !== undefined) { await $.mset((await $.mv((await $.v(C, "DataAcc")), "Ods_BankM")), "SQL", $t1); } }
  } else {
    { const $t2 = await $.iset((await $.mv((await $.mv((await $.v(C, "DataAcc")), "Ods_BankM")), "SQL")), [3], ""); if ($t2 !== undefined) { await $.mset((await $.mv((await $.v(C, "DataAcc")), "Ods_BankM")), "SQL", $t2); } }
  }
  await $.mcall((await $.mv((await $.v(C, "DataAcc")), "Ods_BankM")), "Refresh", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFormRekvezit", "EditBankNameChange", async function EditBankNameChange(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.ne((await $.mv((await $.v(C, "EditBankName")), "Text")), ""))) {
    { const $t3 = await $.iset((await $.mv((await $.mv((await $.v(C, "DataAcc")), "Ods_BankM")), "SQL")), [3], $.add($.add("where name like ('%", (await $.mv((await $.v(C, "EditBankName")), "Text"))), "%')")); if ($t3 !== undefined) { await $.mset((await $.mv((await $.v(C, "DataAcc")), "Ods_BankM")), "SQL", $t3); } }
  } else {
    { const $t4 = await $.iset((await $.mv((await $.mv((await $.v(C, "DataAcc")), "Ods_BankM")), "SQL")), [3], ""); if ($t4 !== undefined) { await $.mset((await $.mv((await $.v(C, "DataAcc")), "Ods_BankM")), "SQL", $t4); } }
  }
  await $.mcall((await $.mv((await $.v(C, "DataAcc")), "Ods_BankM")), "Refresh", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFormRekvezit", "Edit_innChange", async function Edit_innChange(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.ne((await $.mv((await $.v(C, "Edit_inn")), "Text")), ""))) {
    { const $t5 = await $.iset((await $.mv((await $.mv((await $.v(C, "DataAcc")), "Ods_BankM")), "SQL")), [3], $.add($.add("where inn like ('%", (await $.mv((await $.v(C, "Edit_inn")), "Text"))), "%')")); if ($t5 !== undefined) { await $.mset((await $.mv((await $.v(C, "DataAcc")), "Ods_BankM")), "SQL", $t5); } }
  } else {
    { const $t6 = await $.iset((await $.mv((await $.mv((await $.v(C, "DataAcc")), "Ods_BankM")), "SQL")), [3], ""); if ($t6 !== undefined) { await $.mset((await $.mv((await $.v(C, "DataAcc")), "Ods_BankM")), "SQL", $t6); } }
  }
  await $.mcall((await $.mv((await $.v(C, "DataAcc")), "Ods_BankM")), "Refresh", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFormRekvezit", "FormClose", async function FormClose(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "action": $.asRef(p1), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mcall((await $.v(C, "EditBankCODE")), "Clear", []);
  await $.mcall((await $.v(C, "EditBankName")), "Clear", []);
  await $.mcall((await $.mv((await $.v(C, "DataAcc")), "Ods_BankM")), "Refresh", []);
  return L0.result;
}, {"params": ["Sender", "Action"], "kind": "procedure", "ptypes": ["TObject", "TCloseAction"]});
  U.method("TFormRekvezit", "XDBGrid1DblClick", async function XDBGrid1DblClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mcall((await $.v(C, "Button1")), "Click", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  return U;
}
