// Generated from NewDepositsFrmAddCapitalizeImpl.pas by pas2js — do not edit by hand; regenerate instead.
/* eslint-disable */
// @ts-nocheck

export default function define($) {
  const U = $.unit("NewDepositsFrmAddCapitalizeImpl", ["Windows", "Messages", "SysUtils", "Classes", "Graphics", "Controls", "Forms", "StdCtrls", "ExtCtrls", "CMCurrencyEdit", "Mask", "DBCtrlsEh", "ComCtrls", "ActnList", "XFSCtrls", "NewDepositsFrmCapitalizeImpl", "NewCommonDeclsImpl", "SBTranslateProc", "sboapiDataModuleimpl"]);
  const C = [U];
  U.defClass("TNewDepositsFrmAddCapitalize", "TForm", {"actionlist1": {"name": "ActionList1", "type": "TActionList"}, "actntrans": {"name": "ActnTrans", "type": "TAction"}, "xfpanel1": {"name": "XFPanel1", "type": "TXFPanel"}, "xfgroupbox1": {"name": "XFGroupBox1", "type": "TXFGroupBox"}, "xfpanel2": {"name": "XFPanel2", "type": "TXFPanel"}, "xfpanel3": {"name": "XFPanel3", "type": "TXFPanel"}, "dbeditclient": {"name": "DBEditClient", "type": "TDBEditEh"}, "xfpanel5": {"name": "XFPanel5", "type": "TXFPanel"}, "xfstatictext1": {"name": "XFStaticText1", "type": "TXFStaticText"}, "xfpanel4": {"name": "XFPanel4", "type": "TXFPanel"}, "xfpanel6": {"name": "XFPanel6", "type": "TXFPanel"}, "xfstatictext2": {"name": "XFStaticText2", "type": "TXFStaticText"}, "xfpanel7": {"name": "XFPanel7", "type": "TXFPanel"}, "xfstatictext3": {"name": "XFStaticText3", "type": "TXFStaticText"}, "dbediteh3": {"name": "DBEditEh3", "type": "TDBEditEh"}, "xfpanel8": {"name": "XFPanel8", "type": "TXFPanel"}, "edclientdebit": {"name": "EdClientDebit", "type": "TCMCurrencyEdit"}, "xfgroupbox2": {"name": "XFGroupBox2", "type": "TXFGroupBox"}, "xfpanel9": {"name": "XFPanel9", "type": "TXFPanel"}, "xfpanel10": {"name": "XFPanel10", "type": "TXFPanel"}, "dbeditcontract": {"name": "DBEditContract", "type": "TDBEditEh"}, "xfpanel11": {"name": "XFPanel11", "type": "TXFPanel"}, "xfstatictext4": {"name": "XFStaticText4", "type": "TXFStaticText"}, "xfpanel12": {"name": "XFPanel12", "type": "TXFPanel"}, "xfpanel13": {"name": "XFPanel13", "type": "TXFPanel"}, "xfstatictext5": {"name": "XFStaticText5", "type": "TXFStaticText"}, "xfpanel14": {"name": "XFPanel14", "type": "TXFPanel"}, "xfstatictext6": {"name": "XFStaticText6", "type": "TXFStaticText"}, "dbediteh1": {"name": "DBEditEh1", "type": "TDBEditEh"}, "xfgroupbox3": {"name": "XFGroupBox3", "type": "TXFGroupBox"}, "xfpanel16": {"name": "XFPanel16", "type": "TXFPanel"}, "xfpanel17": {"name": "XFPanel17", "type": "TXFPanel"}, "dbeditinterest": {"name": "DBEditInterest", "type": "TDBEditEh"}, "xfpanel18": {"name": "XFPanel18", "type": "TXFPanel"}, "xfstatictext7": {"name": "XFStaticText7", "type": "TXFStaticText"}, "xfpanel19": {"name": "XFPanel19", "type": "TXFPanel"}, "xfpanel20": {"name": "XFPanel20", "type": "TXFPanel"}, "xfstatictext8": {"name": "XFStaticText8", "type": "TXFStaticText"}, "xfpanel21": {"name": "XFPanel21", "type": "TXFPanel"}, "xfstatictext9": {"name": "XFStaticText9", "type": "TXFStaticText"}, "dbediteh2": {"name": "DBEditEh2", "type": "TDBEditEh"}, "xfpanel22": {"name": "XFPanel22", "type": "TXFPanel"}, "edintdebit": {"name": "EdIntDebit", "type": "TCMCurrencyEdit"}, "xfpanel23": {"name": "XFPanel23", "type": "TXFPanel"}, "xfpanel24": {"name": "XFPanel24", "type": "TXFPanel"}, "xfstatictext10": {"name": "XFStaticText10", "type": "TXFStaticText"}, "xfpanel25": {"name": "XFPanel25", "type": "TXFPanel"}, "dtpoperation": {"name": "DTPOperation", "type": "TDateTimePicker"}, "xfbutton1": {"name": "XFButton1", "type": "TXFButton"}, "xfbutton2": {"name": "XFButton2", "type": "TXFButton"}}, {});
  U.init(async () => {
    U.var_("NewDepositsFrmAddCapitalize", null, "TNewDepositsFrmAddCapitalize");
  });
  U.method("TNewDepositsFrmAddCapitalize", "FormCanResize", async function FormCanResize(Self, p0, p1, p2, p3) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "newwidth": $.asRef(p1), "newheight": $.asRef(p2), "resize": $.asRef(p3), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await L0["resize"].set(false);
  return L0.result;
}, {"params": ["Sender", "NewWidth", "NewHeight", "Resize"], "kind": "procedure", "ptypes": ["TObject", "Integer", "Integer", "Boolean"]});
  U.method("TNewDepositsFrmAddCapitalize", "FormCreate", async function FormCreate(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.stmt((await $.mcall((await $.v(C, "SBTranslateProc")), "TranslateAllCompForms", [Self, (await $.mv((await $.v(C, "sboapiDataModule")), "OrPack_SL"))])));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TNewDepositsFrmAddCapitalize", "FormKeyPress", async function FormKeyPress(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "key": $.asRef(p1), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.eq((await $.call(C, "Ord", [(await L0["key"].get())])), (await $.v(C, "VK_ESCAPE"))))) {
    await $.stmt($.call(C, "Close", []));
  }
  return L0.result;
}, {"params": ["Sender", "Key"], "kind": "procedure", "ptypes": ["TObject", "Char"]});
  U.method("TNewDepositsFrmAddCapitalize", "FormShow", async function FormShow(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "clientfact": 0};
  await $.fixArgs(L0, ["sender"]);
  await $.mcall((await $.mv((await $.v(C, "NewDepositsFrmCapitalize")), "DepositInfo")), "Refresh", []);
  await $.mset((await $.v(C, "DTPOperation")), "DateTime", (await $.v(C, "Get_BankDate")));
  L0["clientfact"] = (await $.mcall((await $.mv((await $.v(C, "NewDepositsFrmCapitalize")), "dm_payment")), "CallFloatFunction", ["SetResiduaryAmount", ["ContractID", (await $.v(C, "Get_SelectedContID")), "Wdate", (await $.v(C, "Get_BankDate"))]]));
  await $.mset((await $.v(C, "EdIntDebit")), "Value", 0);
  await $.mset((await $.v(C, "EdClientDebit")), "Value", 0);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TNewDepositsFrmAddCapitalize", "XFButton2Click", async function XFButton2Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.stmt($.call(C, "Close", []));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TNewDepositsFrmAddCapitalize", "ActnTransExecute", async function ActnTransExecute(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "commitcapitalize": false};
  await $.fixArgs(L0, ["sender"]);
  L0["rstransactionswillprocessed"] = "Kapitallaödgrma ...";
  {
    const $t1 = (await $.v(C, "NewDepositsFrmCapitalize"));
    const $t2 = (await $.wv([$t1], "dm_payment", C, false));
    await $.stmt((await $.wcall([$t1, $t2], "CallProcedure", ["Capitalization", ["ContractID", (await $.wv([$t1, $t2], "Get_SelectedContID", C, false)), "HDate", (await $.wv([$t1, $t2], "Get_BankDate", C, false)), "InterestTotal", (await $.mv((await $.wv([$t1, $t2], "EdIntDebit", C, false)), "value")), "ClientTotal", (await $.mv((await $.wv([$t1, $t2], "EdClientDebit", C, false)), "Value")), "showTransaction", (await $.wv([$t1, $t2], "true", C, false))]], C)));
  }
  try {
    L0["commitcapitalize"] = (await $.call(C, "TrDelayed_Show", [Self, L0["rstransactionswillprocessed"]]));
    await $.stmt($.call(C, "Update", []));
    await $.stmt((await $.mcall((await $.mv((await $.v(C, "NewDepositsFrmCapitalize")), "dm_payment")), "CallProcedure", ["CommitWithDrawMoney", ["DoCommit", L0["commitcapitalize"]]])));
    if ($.truthy(L0["commitcapitalize"])) {
      await $.mset(Self, "ModalResult", (await $.v(C, "mrOk")));
    }
    await $.mcall(Self, "Update", []);
  } catch ($t3) {
    $.rethrowControl($t3);
    $.handled($t3);
    await $.stmt((await $.mcall((await $.mv((await $.v(C, "NewDepositsFrmCapitalize")), "dm_payment")), "CallProcedure", ["CommitWithDrawMoney", ["DoCommit", false]])));
    throw $t3;
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TNewDepositsFrmAddCapitalize", "ActnTransUpdate", async function ActnTransUpdate(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t4 = (L0["sender"]);
    await $.wset([$t4], "Enabled", $.gt(($.add((await $.mv((await $.wv([$t4], "EdIntDebit", C, false)), "Value")), (await $.mv((await $.wv([$t4], "EdClientDebit", C, false)), "Value")))), 0), C);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  return U;
}
