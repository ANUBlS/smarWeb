// Generated from TrancheAddFormImpl.pas by pas2js — do not edit by hand; regenerate instead.
/* eslint-disable */
// @ts-nocheck

export default function define($) {
  const U = $.unit("TrancheAddFormImpl", ["Windows", "Messages", "SysUtils", "Classes", "Graphics", "Controls", "Forms", "Dialogs", "StdCtrls", "ActnList", "Mask", "DBCtrlsEh", "DBLookupEh", "ExtCtrls", "CMCurrencyEdit", "ComCtrls", "DBCtrls", "DBGridEh", "DB", "OracleData", "TranceDataModuleImpl", "CommonDecls"]);
  const C = [U];
  U.defClass("TTrchAddForm", "TForm", {"groupbox2": {"name": "GroupBox2", "type": "TGroupBox"}, "label1": {"name": "Label1", "type": "TLabel"}, "label2": {"name": "Label2", "type": "TLabel"}, "tranchedatepckr": {"name": "TrancheDatePckr", "type": "TDateTimePicker"}, "tranchesumedit": {"name": "TrancheSumEdit", "type": "TCMCurrencyEdit"}, "cbprcesstransactions": {"name": "CBPrcessTransactions", "type": "TCheckBox"}, "panel4": {"name": "Panel4", "type": "TPanel"}, "statictext3": {"name": "StaticText3", "type": "TStaticText"}, "accountlistcb": {"name": "AccountListCB", "type": "TDBLookupComboboxEh"}, "actionslist": {"name": "ActionsList", "type": "TActionList"}, "actnprocesstranche": {"name": "ActnProcessTranche", "type": "TAction"}, "actncanceltranche": {"name": "ActnCancelTranche", "type": "TAction"}, "buttoncommit": {"name": "ButtonCommit", "type": "TButton"}, "buttoncancel": {"name": "ButtonCancel", "type": "TButton"}, "label3": {"name": "Label3", "type": "TLabel"}, "dbedit1": {"name": "DBEdit1", "type": "TDBEdit"}, "panel2": {"name": "Panel2", "type": "TPanel"}, "statictext2": {"name": "StaticText2", "type": "TStaticText"}, "dblookupcomboboxeh1": {"name": "DBLookupComboboxEh1", "type": "TDBLookupComboboxEh"}}, {});
  U.init(async () => {
    U.var_("TrchAddForm", null, "TTrchAddForm");
  });
  U.method("TTrchAddForm", "ActnProcessTrancheExecute", async function ActnProcessTrancheExecute(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "crdid": 0, "trchdate": 0, "custaccid": 0, "trchamount": 0, "trprocess": false, "committranche": false, "return_id": 0, "p_accid": 0};
  await $.fixArgs(L0, ["sender"]);
  L0["rstransactionswillprocessed"] = "Kredit tranşı ...";
  L0["crdid"] = (await $.v(C, "Get_SelectedCrdID"));
  L0["trchdate"] = (await $.call(C, "Integer", [(await $.call(C, "Trunc", [(await $.mv((await $.v(C, "TrancheDatePckr")), "DateTime"))]))]));
  L0["custaccid"] = (await $.mv((await $.mcall((await $.mv((await $.mv((await $.v(C, "AccountListCB")), "ListSource")), "DataSet")), "FieldByName", ["ACCID"])), "AsInteger"));
  L0["trchamount"] = (await $.mv((await $.v(C, "TrancheSumEdit")), "Value"));
  L0["p_accid"] = (await $.mv((await $.mcall((await $.mv((await $.mv((await $.v(C, "DBLookupComboboxEh1")), "ListSource")), "DataSet")), "FieldByName", ["ACCID"])), "AsInteger"));
  L0["trprocess"] = (await $.mv((await $.v(C, "CBPrcessTransactions")), "Checked"));
  {
    const $t1 = (await $.v(C, "TrancheDataModule"));
    await $.stmt((await $.mcall((await $.wv([$t1], "CM_TRANCHE", C, false)), "CallProcedure", ["Tranche_Add", ["p_CreditID", (await $.wv([$t1], "CrdID", { get: async () => L0["crdid"], set: async (v) => { L0["crdid"] = v; }, local: true }, false)), "p_TrchDate", (await $.wv([$t1], "TrchDate", { get: async () => L0["trchdate"], set: async (v) => { L0["trchdate"] = v; }, local: true }, false)), "p_CustAccID", (await $.wv([$t1], "CustAccID", { get: async () => L0["custaccid"], set: async (v) => { L0["custaccid"] = v; }, local: true }, false)), "p_TrchAmount", (await $.wv([$t1], "TrchAmount", { get: async () => L0["trchamount"], set: async (v) => { L0["trchamount"] = v; }, local: true }, false)), "p_ProcessTransactions", (await $.wv([$t1], "TrProcess", { get: async () => L0["trprocess"], set: async (v) => { L0["trprocess"] = v; }, local: true }, false)), "p_micacca", (await $.wv([$t1], "p_accid", { get: async () => L0["p_accid"], set: async (v) => { L0["p_accid"] = v; }, local: true }, false))]])));
  }
  try {
    L0["committranche"] = (await $.call(C, "TrDelayed_Show", [Self, L0["rstransactionswillprocessed"]]));
    await $.stmt($.call(C, "Update", []));
    {
      const $t3 = (await $.v(C, "TrancheDataModule"));
      await $.stmt((await $.mcall((await $.wv([$t3], "CM_TRANCHE", C, false)), "CallProcedure", ["CommitTranche", ["DoCommit", (await $.wv([$t3], "CommitTranche", { get: async () => L0["committranche"], set: async (v) => { L0["committranche"] = v; }, local: true }, false))]])));
    }
    if ($.truthy(L0["committranche"])) {
      await $.mset(Self, "ModalResult", (await $.v(C, "mrOk")));
    }
    await $.mcall(Self, "Update", []);
  } catch ($t2) {
    $.rethrowControl($t2);
    $.handled($t2);
    {
      const $t4 = (await $.v(C, "TrancheDataModule"));
      await $.stmt((await $.mcall((await $.wv([$t4], "CM_TRANCHE", C, false)), "CallProcedure", ["CommitTranche", ["DoCommit", (await $.wv([$t4], "False", C, false))]])));
    }
    throw $t2;
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TTrchAddForm", "ActnProcessTrancheUpdate", async function ActnProcessTrancheUpdate(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mset(L0["sender"], "Enabled", $.gt((await $.mv((await $.v(C, "TrancheSumEdit")), "Value")), 0));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TTrchAddForm", "ActnCancelTrancheExecute", async function ActnCancelTrancheExecute(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.stmt($.call(C, "Close", []));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TTrchAddForm", "TrancheSumEditKeyPress", async function TrancheSumEditKeyPress(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "key": $.asRef(p1), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.eq((await $.call(C, "ORD", [(await L0["key"].get())])), (await $.v(C, "VK_RETURN"))))) {
    await $.stmt((await $.call(C, "SelectNext", [(await $.v(C, "TrancheSumEdit")), true, true])));
    await L0["key"].set("\u0000");
  }
  return L0.result;
}, {"params": ["Sender", "Key"], "kind": "procedure", "ptypes": ["TObject", "Char"]});
  U.method("TTrchAddForm", "FormKeyPress", async function FormKeyPress(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "key": $.asRef(p1), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.eq((await $.call(C, "ORD", [(await L0["key"].get())])), (await $.v(C, "VK_ESCAPE"))))) {
    await $.mcall((await $.v(C, "ButtonCancel")), "Click", []);
  }
  return L0.result;
}, {"params": ["Sender", "Key"], "kind": "procedure", "ptypes": ["TObject", "Char"]});
  U.method("TTrchAddForm", "FormShow", async function FormShow(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "crtype": 0, "crdid": 0};
  await $.fixArgs(L0, ["sender"]);
  L0["crdid"] = (await $.v(C, "Get_SelectedCrdID"));
  {
    const $t5 = (await $.mv((await $.v(C, "TrancheDataModule")), "active"));
    await $.stmt($.wcall([$t5], "close", [], C));
    await $.stmt((await $.wcall([$t5], "SetVariable", ["CrdID", (await $.wv([$t5], "CrdID", { get: async () => L0["crdid"], set: async (v) => { L0["crdid"] = v; }, local: true }, false))], C)));
    await $.stmt($.wcall([$t5], "open", [], C));
  }
  if ($.truthy($.ne((await $.mv((await $.mv((await $.v(C, "TrancheDataModule")), "activeMEHSULID")), "AsInteger")), 296))) {
    await $.mset((await $.v(C, "DBLookupComboboxEh1")), "ListSource", (await $.mv((await $.v(C, "TrancheDataModule")), "dsrc_hesab")));
  } else {
    await $.mset((await $.v(C, "DBLookupComboboxEh1")), "ListSource", (await $.mv((await $.v(C, "TrancheDataModule")), "DataSource1")));
  }
  if ($.truthy($.eq((await $.mv((await $.mv((await $.v(C, "TrancheDataModule")), "activeMEHSULID")), "AsInteger")), 296))) {
    {
      const $t6 = (await $.mv((await $.v(C, "TrancheDataModule")), "OracleDataSet1"));
      await $.stmt($.wcall([$t6], "close", [], C));
      await $.stmt((await $.wcall([$t6], "SetVariable", ["creditid", (await $.wv([$t6], "CrdID", { get: async () => L0["crdid"], set: async (v) => { L0["crdid"] = v; }, local: true }, false))], C)));
      await $.stmt($.wcall([$t6], "open", [], C));
    }
  }
  await $.mset((await $.v(C, "TrancheSumEdit")), "Text", (await $.mv((await $.mv((await $.v(C, "TrancheDataModule")), "CreditInfoOBLIGATION")), "AsString")));
  if ($.truthy(($.eq((await $.mv((await $.mv((await $.v(C, "TrancheDataModule")), "activeCURRENCY")), "AsInteger")), 0)))) {
    {
      const $t7 = (await $.mv((await $.v(C, "TrancheDataModule")), "ods_hesab"));
      { const $t8 = await $.iset((await $.wv([$t7], "sql", C, false)), [2], ""); if ($t8 !== undefined) { await $.wset([$t7], "sql", $t8, C); } }
      await $.stmt($.wcall([$t7], "close", [], C));
      { const $t9 = await $.iset((await $.wv([$t7], "sql", C, false)), [2], " where bal_cn1 in(15010) and close_dat is  null "); if ($t9 !== undefined) { await $.wset([$t7], "sql", $t9, C); } }
      await $.stmt($.wcall([$t7], "open", [], C));
    }
  }
  if ($.truthy(($.ne((await $.mv((await $.mv((await $.v(C, "TrancheDataModule")), "activeCURRENCY")), "AsInteger")), 0)))) {
    {
      const $t10 = (await $.mv((await $.v(C, "TrancheDataModule")), "ods_hesab"));
      { const $t11 = await $.iset((await $.wv([$t10], "sql", C, false)), [2], ""); if ($t11 !== undefined) { await $.wset([$t10], "sql", $t11, C); } }
      await $.stmt($.wcall([$t10], "close", [], C));
      { const $t12 = await $.iset((await $.wv([$t10], "sql", C, false)), [2], " where bal_cn1 in(15020) and close_dat is  null "); if ($t12 !== undefined) { await $.wset([$t10], "sql", $t12, C); } }
      await $.stmt($.wcall([$t10], "open", [], C));
    }
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TTrchAddForm", "FormClose", async function FormClose(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "action": $.asRef(p1), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mset((await $.v(C, "DBLookupComboboxEh1")), "KeyValue", (-(1)));
  return L0.result;
}, {"params": ["Sender", "Action"], "kind": "procedure", "ptypes": ["TObject", "TCloseAction"]});
  U.method("TTrchAddForm", "FormCanResize", async function FormCanResize(Self, p0, p1, p2, p3) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "newwidth": $.asRef(p1), "newheight": $.asRef(p2), "resize": $.asRef(p3), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await L0["resize"].set(false);
  return L0.result;
}, {"params": ["Sender", "NewWidth", "NewHeight", "Resize"], "kind": "procedure", "ptypes": ["TObject", "Integer", "Integer", "Boolean"]});
  return U;
}
