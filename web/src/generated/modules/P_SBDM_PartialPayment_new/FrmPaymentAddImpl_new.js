// Generated from FrmPaymentAddImpl_new.pas by pas2js — do not edit by hand; regenerate instead.
/* eslint-disable */
// @ts-nocheck

export default function define($) {
  const U = $.unit("FrmPaymentAddImpl_new", ["Windows", "Messages", "SysUtils", "Classes", "Graphics", "Controls", "Forms", "Dialogs", "StdCtrls", "XFSCtrls", "CurrencyEdit", "CMCurrencyEdit", "DBCtrlsEh", "ExtCtrls", "Mask", "DBCtrls", "ActnList", "DataModPartialPaymentImpl_new", "SBTranslateProc", "sboapiDataModuleimpl"]);
  const C = [U];
  U.defClass("TFrmPaymentAdd_new", "TForm", {"actionlist1": {"name": "ActionList1", "type": "TActionList"}, "actiontr": {"name": "ActionTr", "type": "TAction"}, "xfpanel1": {"name": "XFPanel1", "type": "TXFPanel"}, "xfgroupbox3": {"name": "XFGroupBox3", "type": "TXFGroupBox"}, "dbedit3": {"name": "DBEdit3", "type": "TDBEdit"}, "xfpanel2": {"name": "XFPanel2", "type": "TXFPanel"}, "statictext1": {"name": "StaticText1", "type": "TStaticText"}, "dbedit1": {"name": "DBEdit1", "type": "TDBEdit"}, "dbedit2": {"name": "DBEdit2", "type": "TDBEdit"}, "groupbox1": {"name": "GroupBox1", "type": "TGroupBox"}, "panel3": {"name": "Panel3", "type": "TPanel"}, "statictext5": {"name": "StaticText5", "type": "TStaticText"}, "dbediteh1": {"name": "DBEditEh1", "type": "TDBEditEh"}, "panel7": {"name": "Panel7", "type": "TPanel"}, "statictext6": {"name": "StaticText6", "type": "TStaticText"}, "dbediteh2": {"name": "DBEditEh2", "type": "TDBEditEh"}, "panel8": {"name": "Panel8", "type": "TPanel"}, "statictext7": {"name": "StaticText7", "type": "TStaticText"}, "edmaindebit": {"name": "EdMainDebit", "type": "TCMCurrencyEdit"}, "groupbox5": {"name": "GroupBox5", "type": "TGroupBox"}, "panel4": {"name": "Panel4", "type": "TPanel"}, "statictext2": {"name": "StaticText2", "type": "TStaticText"}, "dbediteh3": {"name": "DBEditEh3", "type": "TDBEditEh"}, "panel5": {"name": "Panel5", "type": "TPanel"}, "statictext3": {"name": "StaticText3", "type": "TStaticText"}, "currencyedit1": {"name": "CurrencyEdit1", "type": "TCurrencyEdit"}, "panel6": {"name": "Panel6", "type": "TPanel"}, "statictext4": {"name": "StaticText4", "type": "TStaticText"}, "edintdebit": {"name": "EdIntDebit", "type": "TCMCurrencyEdit"}, "xfbutton1": {"name": "XFButton1", "type": "TXFButton"}, "xfbutton2": {"name": "XFButton2", "type": "TXFButton"}}, {});
  U.init(async () => {
    U.var_("FrmPaymentAdd_new", null, "TFrmPaymentAdd_new");
  });
  U.method("TFrmPaymentAdd_new", "ActionTrUpdate", async function ActionTrUpdate(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t1 = (L0["sender"]);
    await $.wset([$t1], "Enabled", $.gt((await $.mv((await $.wv([$t1], "EdMainDebit", C, false)), "Value")), 0), C);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFrmPaymentAdd_new", "FormCreate", async function FormCreate(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.stmt((await $.mcall((await $.v(C, "SBTranslateProc")), "TranslateAllCompForms", [Self, (await $.mv((await $.v(C, "sboapiDataModule")), "OrPack_SL"))])));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFrmPaymentAdd_new", "FormShow", async function FormShow(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mset((await $.v(C, "EdMainDebit")), "Value", 0);
  await $.mset((await $.v(C, "CurrencyEdit1")), "Value", 0);
  await $.mset((await $.v(C, "EdIntDebit")), "Value", 0);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFrmPaymentAdd_new", "XFButton2Click", async function XFButton2Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.stmt($.call(C, "Close", []));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFrmPaymentAdd_new", "EdMainDebitChange", async function EdMainDebitChange(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "vid": 0, "amount": 0, "vdate": 0, "peramount": 0, "intamount": 0};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.eq((await $.mv((await $.v(C, "EdMainDebit")), "Text")), ""))) {
    await $.stmt((await $.call(C, "ShowMessage", ["aa"])));
    await $.mset((await $.v(C, "CurrencyEdit1")), "Value", 0);
    await $.mset((await $.v(C, "EdIntDebit")), "Value", 0);
  }
  {
    const $t2 = (await $.v(C, "DataModPartialPayment_new"));
    await $.wset([$t2], "VID", (await $.mv((await $.wv([$t2], "PaymentsID", C, false)), "AsInteger")), { get: async () => L0["vid"], set: async (v) => { L0["vid"] = v; }, local: true });
    await $.wset([$t2], "Vdate", (await $.wcall([$t2], "trunc", [(await $.wcall([$t2], "StrToDateTime", [(await $.mv((await $.wv([$t2], "DBEdit3", C, false)), "Text"))], C))], C)), { get: async () => L0["vdate"], set: async (v) => { L0["vdate"] = v; }, local: true });
    await $.wset([$t2], "Amount", (await $.mv((await $.wv([$t2], "EdMainDebit", C, false)), "Value")), { get: async () => L0["amount"], set: async (v) => { L0["amount"] = v; }, local: true });
    await $.wset([$t2], "Peramount", 0, { get: async () => L0["peramount"], set: async (v) => { L0["peramount"] = v; }, local: true });
    await $.wset([$t2], "Intamount", 0, { get: async () => L0["intamount"], set: async (v) => { L0["intamount"] = v; }, local: true });
    await $.stmt((await $.mcall((await $.wv([$t2], "sbcm_payment", C, false)), "CallProcedure", ["SetPaymentPecentAmount", ["VID", (await $.wv([$t2], "VID", { get: async () => L0["vid"], set: async (v) => { L0["vid"] = v; }, local: true }, false)), "Vdate", (await $.wv([$t2], "Vdate", { get: async () => L0["vdate"], set: async (v) => { L0["vdate"] = v; }, local: true }, false)), "Amount", (await $.wv([$t2], "Amount", { get: async () => L0["amount"], set: async (v) => { L0["amount"] = v; }, local: true }, false)), "Peramount", (await $.wv([$t2], "Peramount", { get: async () => L0["peramount"], set: async (v) => { L0["peramount"] = v; }, local: true }, false)), "Intamount", (await $.wv([$t2], "Intamount", { get: async () => L0["intamount"], set: async (v) => { L0["intamount"] = v; }, local: true }, false))]])));
    await $.mset((await $.wv([$t2], "CurrencyEdit1", C, false)), "Value", (await $.mcall((await $.wv([$t2], "sbcm_payment", C, false)), "GetParameter", [3])));
    await $.mset((await $.wv([$t2], "EdIntDebit", C, false)), "Value", (await $.mcall((await $.wv([$t2], "sbcm_payment", C, false)), "GetParameter", [4])));
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  return U;
}
