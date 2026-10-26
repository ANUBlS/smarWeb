// Generated from frmAddExtractMoneyImpl.pas by pas2js — do not edit by hand; regenerate instead.
/* eslint-disable */
// @ts-nocheck

export default function define($) {
  const U = $.unit("frmAddExtractMoneyImpl", ["Windows", "Messages", "SysUtils", "Classes", "Graphics", "Controls", "Forms", "NLSDialogs", "StdCtrls", "Mask", "DBCtrlsEh", "DBLookupEh", "ExtCtrls", "ComCtrls", "CMCurrencyEdit", "ActnList", "DMExtractMoneyImpl", "CommonDeclsImpl", "SBTranslateproc", "sboapiDataModuleimpl"]);
  const C = [U];
  U.defClass("TfrmAddExtractMoney", "TForm", {"panel1": {"name": "Panel1", "type": "TPanel"}, "panel2": {"name": "Panel2", "type": "TPanel"}, "button1": {"name": "Button1", "type": "TButton"}, "groupbox5": {"name": "GroupBox5", "type": "TGroupBox"}, "panel4": {"name": "Panel4", "type": "TPanel"}, "statictext2": {"name": "StaticText2", "type": "TStaticText"}, "dbediteh3": {"name": "DBEditEh3", "type": "TDBEditEh"}, "panel5": {"name": "Panel5", "type": "TPanel"}, "statictext1": {"name": "StaticText1", "type": "TStaticText"}, "dbediteh4": {"name": "DBEditEh4", "type": "TDBEditEh"}, "panel6": {"name": "Panel6", "type": "TPanel"}, "statictext4": {"name": "StaticText4", "type": "TStaticText"}, "edintdebit": {"name": "EdIntDebit", "type": "TCMCurrencyEdit"}, "groupbox1": {"name": "GroupBox1", "type": "TGroupBox"}, "panel3": {"name": "Panel3", "type": "TPanel"}, "statictext5": {"name": "StaticText5", "type": "TStaticText"}, "dbediteh1": {"name": "DBEditEh1", "type": "TDBEditEh"}, "panel7": {"name": "Panel7", "type": "TPanel"}, "statictext6": {"name": "StaticText6", "type": "TStaticText"}, "dbediteh2": {"name": "DBEditEh2", "type": "TDBEditEh"}, "panel8": {"name": "Panel8", "type": "TPanel"}, "statictext7": {"name": "StaticText7", "type": "TStaticText"}, "edmaindebit": {"name": "EdMainDebit", "type": "TCMCurrencyEdit"}, "button2": {"name": "Button2", "type": "TButton"}, "actionlist1": {"name": "ActionList1", "type": "TActionList"}, "actiontr": {"name": "Actiontr", "type": "TAction"}, "dtpoperation": {"name": "DTPOperation", "type": "TDateTimePicker"}, "panel9": {"name": "Panel9", "type": "TPanel"}, "accnamelictcb": {"name": "AccnameLictCb", "type": "TDBLookupComboboxEh"}, "accountlistcb": {"name": "AccountListCB", "type": "TDBLookupComboboxEh"}, "statictext3": {"name": "StaticText3", "type": "TStaticText"}, "label1": {"name": "Label1", "type": "TLabel"}}, {});
  U.init(async () => {
    U.var_("frmAddExtractMoney", null, "TfrmAddExtractMoney");
  });
  U.method("TfrmAddExtractMoney", "FormCanResize", async function FormCanResize(Self, p0, p1, p2, p3) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "newwidth": $.asRef(p1), "newheight": $.asRef(p2), "resize": $.asRef(p3), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await L0["resize"].set(false);
  return L0.result;
}, {"params": ["Sender", "NewWidth", "NewHeight", "Resize"], "kind": "procedure", "ptypes": ["TObject", "Integer", "Integer", "Boolean"]});
  U.method("TfrmAddExtractMoney", "FormCreate", async function FormCreate(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.stmt((await $.mcall((await $.v(C, "SBTranslateProc")), "TranslateAllCompForms", [Self, (await $.mv((await $.v(C, "sboapiDataModule")), "OrPack_SL"))])));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TfrmAddExtractMoney", "FormKeyPress", async function FormKeyPress(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "key": $.asRef(p1), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.eq((await $.call(C, "Ord", [(await L0["key"].get())])), (await $.v(C, "VK_ESCAPE"))))) {
    await $.stmt($.call(C, "Close", []));
  }
  return L0.result;
}, {"params": ["Sender", "Key"], "kind": "procedure", "ptypes": ["TObject", "Char"]});
  U.method("TfrmAddExtractMoney", "FormShow", async function FormShow(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mcall((await $.mv((await $.v(C, "DMExtractMoney")), "DepositInfo")), "Refresh", []);
  await $.mset((await $.v(C, "DTPOperation")), "DateTime", (await $.v(C, "Get_BankDate")));
  await $.mset((await $.v(C, "EdMainDebit")), "Value", 0);
  await $.mset((await $.v(C, "EdIntDebit")), "Value", 0);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TfrmAddExtractMoney", "ActiontrExecute", async function ActiontrExecute(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "p_accid": 0, "commitextractmoney": false};
  await $.fixArgs(L0, ["sender"]);
  L0["rstransactionswillprocessed"] = "Depozitin ödənilməsi ...";
  L0["p_accid"] = (await $.mv((await $.mcall((await $.mv((await $.mv((await $.v(C, "AccountListCB")), "ListSource")), "DataSet")), "FieldByName", ["ID"])), "AsInteger"));
  {
    const $t1 = (await $.v(C, "DMExtractMoney"));
    const $t2 = (await $.wv([$t1], "sbcm_payment", C, false));
    await $.stmt((await $.wcall([$t1, $t2], "CallProcedure", ["WithDrawMoney", ["ContractID", (await $.wv([$t1, $t2], "Get_SelectedContID", C, false)), "P_AccID", (await $.wv([$t1, $t2], "p_accid", { get: async () => L0["p_accid"], set: async (v) => { L0["p_accid"] = v; }, local: true }, false)), "HDate", (await $.wv([$t1, $t2], "Get_BankDate", C, false)), "FacticalDebtWithdraw", (await $.mv((await $.wv([$t1, $t2], "EdMainDebit", C, false)), "Value")), "InterestDebtWithdraw", (await $.mv((await $.wv([$t1, $t2], "EdIntDebit", C, false)), "value")), "UseTransactions", (await $.wv([$t1, $t2], "True", C, false)), "showTransaction", (await $.wv([$t1, $t2], "True", C, false))]], C)));
  }
  try {
    L0["commitextractmoney"] = (await $.call(C, "TrDelayed_Show", [Self, L0["rstransactionswillprocessed"]]));
    await $.stmt($.call(C, "Update", []));
    await $.stmt((await $.mcall((await $.mv((await $.v(C, "DMExtractMoney")), "SBCM_PAYMENT")), "CallProcedure", ["CommitWithDrawMoney", ["DoCommit", L0["commitextractmoney"]]])));
    if ($.truthy(L0["commitextractmoney"])) {
      await $.mset(Self, "ModalResult", (await $.v(C, "mrOk")));
    }
    await $.mcall(Self, "Update", []);
  } catch ($t3) {
    $.rethrowControl($t3);
    $.handled($t3);
    await $.stmt((await $.mcall((await $.mv((await $.v(C, "DMExtractMoney")), "SBCM_PAYMENT")), "CallProcedure", ["CommitWithDrawMoney", ["DoCommit", false]])));
    throw $t3;
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TfrmAddExtractMoney", "Button2Click", async function Button2Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.stmt($.call(C, "Close", []));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TfrmAddExtractMoney", "ActiontrUpdate", async function ActiontrUpdate(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t4 = (L0["sender"]);
    await $.wset([$t4], "Enabled", $.gt(($.add((await $.mv((await $.wv([$t4], "EdMainDebit", C, false)), "Value")), (await $.mv((await $.wv([$t4], "EdIntDebit", C, false)), "Value")))), 0), C);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TfrmAddExtractMoney", "AccountListCBChange", async function AccountListCBChange(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mset((await $.v(C, "AccnameLictCb")), "KeyValue", (await $.mv((await $.v(C, "AccountListCB")), "KeyValue")));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TfrmAddExtractMoney", "AccnameLictCbChange", async function AccnameLictCbChange(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mset((await $.v(C, "AccountListCB")), "KeyValue", (await $.mv((await $.v(C, "AccnameLictCb")), "KeyValue")));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  return U;
}
