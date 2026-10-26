// Generated from frmAddMoneyImpl.pas by pas2js — do not edit by hand; regenerate instead.
/* eslint-disable */
// @ts-nocheck

export default function define($) {
  const U = $.unit("frmAddMoneyImpl", ["Windows", "Messages", "SysUtils", "Classes", "Graphics", "Controls", "Forms", "NLSDialogs", "ExtCtrls", "StdCtrls", "Mask", "DBCtrlsEh", "DBLookupEh", "CMCurrencyEdit", "ComCtrls", "ActnList", "DBGridEh", "CommonDeclsImpl", "DMApplyMoneyImpl", "TemporaryTransactionsFormImpl", "SBTranslateProc", "sboapiDataModuleimpl"]);
  const C = [U];
  U.defClass("TfrmAddMoney", "TForm", {"panel1": {"name": "Panel1", "type": "TPanel"}, "label1": {"name": "Label1", "type": "TLabel"}, "dbediteh1": {"name": "DBEditEh1", "type": "TDBEditEh"}, "panel4": {"name": "Panel4", "type": "TPanel"}, "statictext3": {"name": "StaticText3", "type": "TStaticText"}, "accountlistcb": {"name": "AccountListCB", "type": "TDBLookupComboboxEh"}, "label2": {"name": "Label2", "type": "TLabel"}, "operationdatepckr": {"name": "OperationDatePckr", "type": "TDateTimePicker"}, "label3": {"name": "Label3", "type": "TLabel"}, "moneysumedit": {"name": "MoneySumEdit", "type": "TCMCurrencyEdit"}, "buttoncommit": {"name": "ButtonCommit", "type": "TButton"}, "buttoncancel": {"name": "ButtonCancel", "type": "TButton"}, "label4": {"name": "Label4", "type": "TLabel"}, "percentedit": {"name": "PercentEdit", "type": "TEdit"}, "actionlist1": {"name": "ActionList1", "type": "TActionList"}, "actntransaction": {"name": "ActnTransaction", "type": "TAction"}, "accnamelistcb": {"name": "AccnameListCB", "type": "TDBLookupComboboxEh"}}, {});
  U.init(async () => {
    U.var_("frmAddMoney", null, "TfrmAddMoney");
  });
  U.method("TfrmAddMoney", "FormCanResize", async function FormCanResize(Self, p0, p1, p2, p3) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "newwidth": $.asRef(p1), "newheight": $.asRef(p2), "resize": $.asRef(p3), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await L0["resize"].set(false);
  return L0.result;
}, {"params": ["Sender", "NewWidth", "NewHeight", "Resize"], "kind": "procedure", "ptypes": ["TObject", "Integer", "Integer", "Boolean"]});
  U.method("TfrmAddMoney", "FormCreate", async function FormCreate(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.stmt((await $.mcall((await $.v(C, "SBTranslateProc")), "TranslateAllCompForms", [Self, (await $.mv((await $.v(C, "sboapiDataModule")), "OrPack_SL"))])));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TfrmAddMoney", "FormKeyPress", async function FormKeyPress(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "key": $.asRef(p1), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.eq((await $.call(C, "ord", [(await L0["key"].get())])), (await $.v(C, "VK_ESCAPE"))))) {
    await $.stmt($.call(C, "close", []));
  }
  return L0.result;
}, {"params": ["Sender", "Key"], "kind": "procedure", "ptypes": ["TObject", "Char"]});
  U.method("TfrmAddMoney", "ActnTransactionExecute", async function ActnTransactionExecute(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "clientaccid": 0, "total": 0, "percent": 0, "commitdepositmoney": false};
  await $.fixArgs(L0, ["sender"]);
  L0["rstransactionswillprocessed"] = "Depozit yatrımı ...";
  L0["clientaccid"] = (await $.mv((await $.mcall((await $.mv((await $.mv((await $.v(C, "AccountListCB")), "ListSource")), "DataSet")), "FieldByName", ["ID"])), "AsInteger"));
  L0["total"] = (await $.mv((await $.v(C, "MoneySumEdit")), "Value"));
  L0["percent"] = (await $.call(C, "StrToFloat", [(await $.mv((await $.v(C, "PercentEdit")), "Text"))]));
  {
    const $t1 = (await $.v(C, "DMApplyMoney"));
    const $t2 = (await $.wv([$t1], "sbcm_tranches", C, false));
    await $.stmt((await $.wcall([$t1, $t2], "CallProcedure", ["depositmoney", ["P_ClientAccID", (await $.wv([$t1, $t2], "ClientAccID", { get: async () => L0["clientaccid"], set: async (v) => { L0["clientaccid"] = v; }, local: true }, false)), "contractid", (await $.wv([$t1, $t2], "Get_SelectedContID", C, false)), "hdate", (await $.wv([$t1, $t2], "Get_BankDate", C, false)), "total", (await $.wv([$t1, $t2], "Total", { get: async () => L0["total"], set: async (v) => { L0["total"] = v; }, local: true }, false)), "PERCENT", (await $.wv([$t1, $t2], "Percent", { get: async () => L0["percent"], set: async (v) => { L0["percent"] = v; }, local: true }, false)), "usetransaction", (await $.wv([$t1, $t2], "true", C, false))]], C)));
  }
  try {
    L0["commitdepositmoney"] = (await $.call(C, "TrDelayed_Show", [Self, L0["rstransactionswillprocessed"]]));
    await $.stmt($.call(C, "Update", []));
    await $.stmt((await $.mcall((await $.mv((await $.v(C, "DMApplyMoney")), "sbcm_tranches")), "CallProcedure", ["CommitDepositMoney", ["DoCommit", L0["commitdepositmoney"]]])));
    if ($.truthy(L0["commitdepositmoney"])) {
      await $.mset(Self, "ModalResult", (await $.v(C, "mrOk")));
    }
    await $.mcall(Self, "Update", []);
  } catch ($t3) {
    $.rethrowControl($t3);
    $.handled($t3);
    await $.stmt((await $.mcall((await $.mv((await $.v(C, "DMApplyMoney")), "sbcm_tranches")), "CallProcedure", ["CommitDepositMoney", ["DoCommit", false]])));
    throw $t3;
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TfrmAddMoney", "FormShow", async function FormShow(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t4 = (await $.v(C, "DMApplyMoney"));
    const $t5 = (await $.wv([$t4], "DepositInfo", C, false));
    await $.stmt($.wcall([$t4, $t5], "Refresh", [], C));
    await $.mset((await $.wv([$t4, $t5], "PercentEdit", C, false)), "Text", (await $.wcall([$t4, $t5], "FloatToStr", [(await $.mv((await $.wcall([$t4, $t5], "FieldByName", ["interest"], C)), "AsFloat"))], C)));
  }
  await $.mset((await $.v(C, "OperationDatePckr")), "DateTime", (await $.v(C, "Get_BankDate")));
  await $.mset((await $.v(C, "MoneySumEdit")), "Value", 0);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TfrmAddMoney", "ActnTransactionUpdate", async function ActnTransactionUpdate(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t6 = (L0["sender"]);
    await $.wset([$t6], "Enabled", $.gt((await $.mv((await $.wv([$t6], "MoneySumEdit", C, false)), "Value")), 0), C);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TfrmAddMoney", "AccountListCBChange", async function AccountListCBChange(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mset((await $.v(C, "AccnameListCB")), "KeyValue", (await $.mv((await $.v(C, "AccountListCB")), "KeyValue")));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TfrmAddMoney", "AccnameListCBChange", async function AccnameListCBChange(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mset((await $.v(C, "AccountListCB")), "KeyValue", (await $.mv((await $.v(C, "AccnameListCB")), "KeyValue")));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  return U;
}
