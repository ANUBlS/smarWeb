// Generated from NewDepositsFrmAddExtractMoneyImpl.pas by pas2js — do not edit by hand; regenerate instead.
/* eslint-disable */
// @ts-nocheck

export default function define($) {
  const U = $.unit("NewDepositsFrmAddExtractMoneyImpl", ["Windows", "Messages", "SysUtils", "Classes", "Graphics", "Controls", "Forms", "NLSDialogs", "StdCtrls", "Mask", "DBCtrlsEh", "DBLookupEh", "ExtCtrls", "ComCtrls", "CMCurrencyEdit", "ActnList", "DBGridEh", "XFSCtrls", "NewDepositsDMExtractMoneyImpl", "NewCommonDeclsImpl", "SBTranslateproc", "sboapiDataModuleimpl"]);
  const C = [U];
  U.defClass("TNewDepositsFrmAddExtractMoney", "TForm", {"actionlist1": {"name": "ActionList1", "type": "TActionList"}, "actiontr": {"name": "Actiontr", "type": "TAction"}, "xfpanel1": {"name": "XFPanel1", "type": "TXFPanel"}, "xfgroupbox1": {"name": "XFGroupBox1", "type": "TXFGroupBox"}, "xfpanel2": {"name": "XFPanel2", "type": "TXFPanel"}, "xfpanel3": {"name": "XFPanel3", "type": "TXFPanel"}, "dbeditclient": {"name": "DBEditClient", "type": "TDBEditEh"}, "xfpanel5": {"name": "XFPanel5", "type": "TXFPanel"}, "xfstatictext1": {"name": "XFStaticText1", "type": "TXFStaticText"}, "xfpanel4": {"name": "XFPanel4", "type": "TXFPanel"}, "xfpanel6": {"name": "XFPanel6", "type": "TXFPanel"}, "xfstatictext2": {"name": "XFStaticText2", "type": "TXFStaticText"}, "xfpanel7": {"name": "XFPanel7", "type": "TXFPanel"}, "xfstatictext3": {"name": "XFStaticText3", "type": "TXFStaticText"}, "xfpanel8": {"name": "XFPanel8", "type": "TXFPanel"}, "edclientdebit": {"name": "EdClientDebit", "type": "TCMCurrencyEdit"}, "xfgroupbox2": {"name": "XFGroupBox2", "type": "TXFGroupBox"}, "xfpanel9": {"name": "XFPanel9", "type": "TXFPanel"}, "xfpanel10": {"name": "XFPanel10", "type": "TXFPanel"}, "dbeditcontract": {"name": "DBEditContract", "type": "TDBEditEh"}, "xfpanel11": {"name": "XFPanel11", "type": "TXFPanel"}, "xfstatictext4": {"name": "XFStaticText4", "type": "TXFStaticText"}, "xfpanel12": {"name": "XFPanel12", "type": "TXFPanel"}, "xfpanel13": {"name": "XFPanel13", "type": "TXFPanel"}, "xfstatictext5": {"name": "XFStaticText5", "type": "TXFStaticText"}, "xfpanel14": {"name": "XFPanel14", "type": "TXFPanel"}, "xfstatictext6": {"name": "XFStaticText6", "type": "TXFStaticText"}, "xfpanel15": {"name": "XFPanel15", "type": "TXFPanel"}, "edmaindebit": {"name": "EdMainDebit", "type": "TCMCurrencyEdit"}, "xfgroupbox3": {"name": "XFGroupBox3", "type": "TXFGroupBox"}, "xfpanel16": {"name": "XFPanel16", "type": "TXFPanel"}, "xfpanel17": {"name": "XFPanel17", "type": "TXFPanel"}, "dbeditinterest": {"name": "DBEditInterest", "type": "TDBEditEh"}, "xfpanel18": {"name": "XFPanel18", "type": "TXFPanel"}, "xfstatictext7": {"name": "XFStaticText7", "type": "TXFStaticText"}, "xfpanel19": {"name": "XFPanel19", "type": "TXFPanel"}, "xfpanel20": {"name": "XFPanel20", "type": "TXFPanel"}, "xfstatictext8": {"name": "XFStaticText8", "type": "TXFStaticText"}, "xfpanel21": {"name": "XFPanel21", "type": "TXFPanel"}, "xfstatictext9": {"name": "XFStaticText9", "type": "TXFStaticText"}, "xfpanel22": {"name": "XFPanel22", "type": "TXFPanel"}, "edintdebit": {"name": "EdIntDebit", "type": "TCMCurrencyEdit"}, "xfpanel23": {"name": "XFPanel23", "type": "TXFPanel"}, "xfpanel24": {"name": "XFPanel24", "type": "TXFPanel"}, "xfstatictext10": {"name": "XFStaticText10", "type": "TXFStaticText"}, "xfbutton1": {"name": "XFButton1", "type": "TXFButton"}, "xfbutton2": {"name": "XFButton2", "type": "TXFButton"}, "xfpanel25": {"name": "XFPanel25", "type": "TXFPanel"}, "dtpoperation": {"name": "DTPOperation", "type": "TDateTimePicker"}, "action1": {"name": "Action1", "type": "TAction"}, "dbediteh1": {"name": "DBEditEh1", "type": "TDBEditEh"}, "dbediteh2": {"name": "DBEditEh2", "type": "TDBEditEh"}, "dbediteh3": {"name": "DBEditEh3", "type": "TDBEditEh"}}, {});
  U.init(async () => {
    U.var_("NewDepositsFrmAddExtractMoney", null, "TNewDepositsFrmAddExtractMoney");
  });
  U.method("TNewDepositsFrmAddExtractMoney", "FormCanResize", async function FormCanResize(Self, p0, p1, p2, p3) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "newwidth": $.asRef(p1), "newheight": $.asRef(p2), "resize": $.asRef(p3), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await L0["resize"].set(false);
  return L0.result;
}, {"params": ["Sender", "NewWidth", "NewHeight", "Resize"], "kind": "procedure", "ptypes": ["TObject", "Integer", "Integer", "Boolean"]});
  U.method("TNewDepositsFrmAddExtractMoney", "FormCreate", async function FormCreate(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.stmt((await $.mcall((await $.v(C, "SBTranslateProc")), "TranslateAllCompForms", [Self, (await $.mv((await $.v(C, "sboapiDataModule")), "OrPack_SL"))])));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TNewDepositsFrmAddExtractMoney", "FormKeyPress", async function FormKeyPress(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "key": $.asRef(p1), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.eq((await $.call(C, "Ord", [(await L0["key"].get())])), (await $.v(C, "VK_ESCAPE"))))) {
    await $.stmt($.call(C, "Close", []));
  }
  return L0.result;
}, {"params": ["Sender", "Key"], "kind": "procedure", "ptypes": ["TObject", "Char"]});
  U.method("TNewDepositsFrmAddExtractMoney", "FormShow", async function FormShow(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "clientfact": 0};
  await $.fixArgs(L0, ["sender"]);
  await $.mcall((await $.mv((await $.v(C, "NewDepositsDMExtractMoney")), "DepositInfo")), "Refresh", []);
  await $.mset((await $.v(C, "DTPOperation")), "DateTime", (await $.v(C, "Get_BankDate")));
  L0["clientfact"] = (await $.mcall((await $.mv((await $.v(C, "NewDepositsDMExtractMoney")), "dm_payment")), "CallFloatFunction", ["SetResiduaryAmount", ["ContractID", (await $.v(C, "Get_SelectedContID")), "Wdate", (await $.v(C, "Get_BankDate"))]]));
  await $.mset((await $.v(C, "EdMainDebit")), "Value", 0);
  await $.mset((await $.v(C, "EdIntDebit")), "Value", 0);
  await $.mset((await $.v(C, "EdClientDebit")), "Value", L0["clientfact"]);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TNewDepositsFrmAddExtractMoney", "XFButton2Click", async function XFButton2Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.stmt($.call(C, "Close", []));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TNewDepositsFrmAddExtractMoney", "AccnameLictCbChange", async function AccnameLictCbChange(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TNewDepositsFrmAddExtractMoney", "AccountListCBChange", async function AccountListCBChange(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TNewDepositsFrmAddExtractMoney", "ActiontrExecute", async function ActiontrExecute(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "p_accid": 0, "commitextractmoney": false};
  await $.fixArgs(L0, ["sender"]);
  L0["rstransactionswillprocessed"] = "Depozitin ödənilməsi ...";
  L0["p_accid"] = (await $.mv((await $.mcall((await $.mv((await $.v(C, "NewDepositsDMExtractMoney")), "CustAcc")), "FieldByName", ["CLIENTACCID"])), "AsInteger"));
  {
    const $t1 = (await $.v(C, "NewDepositsDMExtractMoney"));
    const $t2 = (await $.wv([$t1], "dm_payment", C, false));
    await $.stmt((await $.wcall([$t1, $t2], "CallProcedure", ["WithDrawMoney", ["ContractID", (await $.wv([$t1, $t2], "Get_SelectedContID", C, false)), "HDate", (await $.wv([$t1, $t2], "Get_BankDate", C, false)), "FacticalDebtWithdraw", (await $.mv((await $.wv([$t1, $t2], "EdMainDebit", C, false)), "Value")), "InterestDebtWithdraw", (await $.mv((await $.wv([$t1, $t2], "EdIntDebit", C, false)), "value")), "ClientDebtWithdraw", (await $.mv((await $.wv([$t1, $t2], "EdClientDebit", C, false)), "Value")), "showTransaction", 3]], C)));
  }
  try {
    L0["commitextractmoney"] = (await $.call(C, "TrDelayed_Show", [Self, L0["rstransactionswillprocessed"]]));
    await $.stmt($.call(C, "Update", []));
    await $.stmt((await $.mcall((await $.mv((await $.v(C, "NewDepositsDMExtractMoney")), "DM_PAYMENT")), "CallProcedure", ["CommitWithDrawMoney", ["DoCommit", L0["commitextractmoney"]]])));
    if ($.truthy(L0["commitextractmoney"])) {
      await $.mset(Self, "ModalResult", (await $.v(C, "mrOk")));
    }
    await $.mcall(Self, "Update", []);
  } catch ($t3) {
    $.rethrowControl($t3);
    $.handled($t3);
    await $.stmt((await $.mcall((await $.mv((await $.v(C, "NewDepositsDMExtractMoney")), "DM_PAYMENT")), "CallProcedure", ["CommitWithDrawMoney", ["DoCommit", false]])));
    throw $t3;
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TNewDepositsFrmAddExtractMoney", "ActiontrUpdate", async function ActiontrUpdate(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t4 = (L0["sender"]);
    await $.wset([$t4], "Enabled", $.gt(($.add($.add((await $.mv((await $.wv([$t4], "EdMainDebit", C, false)), "Value")), (await $.mv((await $.wv([$t4], "EdIntDebit", C, false)), "Value"))), (await $.mv((await $.wv([$t4], "EdClientDebit", C, false)), "Value")))), 0), C);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  return U;
}
