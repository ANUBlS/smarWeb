// Generated from CUPaymentAddFormImpl.pas by pas2js — do not edit by hand; regenerate instead.
/* eslint-disable */
// @ts-nocheck

export default function define($) {
  const U = $.unit("CUPaymentAddFormImpl", ["Windows", "Messages", "SysUtils", "Classes", "Graphics", "Controls", "Forms", "Dialogs", "StdCtrls", "ExtCtrls", "Mask", "DBCtrlsEh", "DBLookupEh", "DBCtrls", "CMCurrencyEdit", "ActnList", "oracle", "DBGridEh", "CUPaymentDataModuleImpl", "CUCommonDecls", "SbSystem", "SBTranslateProc", "sboapiDataModuleImpl", "CUReplaceImpl", "CUCust_combined"]);
  const C = [U];
  U.defClass("TPaymentAddForm", "TForm", {"panel1": {"name": "Panel1", "type": "TPanel"}, "groupbox1": {"name": "GroupBox1", "type": "TGroupBox"}, "dblookupcomboboxehcustacc": {"name": "DBLookupComboboxEhCustAcc", "type": "TDBLookupComboboxEh"}, "label1": {"name": "Label1", "type": "TLabel"}, "dbediteh1": {"name": "DBEditEh1", "type": "TDBEditEh"}, "panel2": {"name": "Panel2", "type": "TPanel"}, "groupbox5": {"name": "GroupBox5", "type": "TGroupBox"}, "panel4": {"name": "Panel4", "type": "TPanel"}, "statictext2": {"name": "StaticText2", "type": "TStaticText"}, "dbediteh3": {"name": "DBEditEh3", "type": "TDBEditEh"}, "panel5": {"name": "Panel5", "type": "TPanel"}, "statictext3": {"name": "StaticText3", "type": "TStaticText"}, "dbediteh4": {"name": "DBEditEh4", "type": "TDBEditEh"}, "panel6": {"name": "Panel6", "type": "TPanel"}, "statictext4": {"name": "StaticText4", "type": "TStaticText"}, "mainamtedit": {"name": "MainAmtEdit", "type": "TCMCurrencyEdit"}, "button1": {"name": "Button1", "type": "TButton"}, "button2": {"name": "Button2", "type": "TButton"}, "label2": {"name": "Label2", "type": "TLabel"}, "groupbox2": {"name": "GroupBox2", "type": "TGroupBox"}, "panel3": {"name": "Panel3", "type": "TPanel"}, "statictext1": {"name": "StaticText1", "type": "TStaticText"}, "dbediteh2": {"name": "DBEditEh2", "type": "TDBEditEh"}, "panel7": {"name": "Panel7", "type": "TPanel"}, "statictext5": {"name": "StaticText5", "type": "TStaticText"}, "dbediteh5": {"name": "DBEditEh5", "type": "TDBEditEh"}, "panel8": {"name": "Panel8", "type": "TPanel"}, "statictext6": {"name": "StaticText6", "type": "TStaticText"}, "intamtedit": {"name": "IntAmtEdit", "type": "TCMCurrencyEdit"}, "groupbox4": {"name": "GroupBox4", "type": "TGroupBox"}, "panel12": {"name": "Panel12", "type": "TPanel"}, "panel13": {"name": "Panel13", "type": "TPanel"}, "statictext11": {"name": "StaticText11", "type": "TStaticText"}, "dbediteh9": {"name": "DBEditEh9", "type": "TDBEditEh"}, "panel14": {"name": "Panel14", "type": "TPanel"}, "statictext12": {"name": "StaticText12", "type": "TStaticText"}, "penaltyamtedit": {"name": "PenaltyAmtEdit", "type": "TCMCurrencyEdit"}, "actionlist1": {"name": "ActionList1", "type": "TActionList"}, "actnaccept": {"name": "ActnAccept", "type": "TAction"}, "actnclose": {"name": "ActnClose", "type": "TAction"}, "statictext10": {"name": "StaticText10", "type": "TStaticText"}, "dbediteh8": {"name": "DBEditEh8", "type": "TDBEditEh"}, "panel20": {"name": "Panel20", "type": "TPanel"}, "panel19": {"name": "Panel19", "type": "TPanel"}, "statictext17": {"name": "StaticText17", "type": "TStaticText"}, "fullpayamt": {"name": "FullPayAmt", "type": "TCMCurrencyEdit"}, "panel18": {"name": "Panel18", "type": "TPanel"}, "statictext16": {"name": "StaticText16", "type": "TStaticText"}, "cbfullpay": {"name": "CBFullPay", "type": "TCheckBox"}, "expdatecount": {"name": "ExpdateCount", "type": "TCMCurrencyEdit"}, "chbchangeplandat": {"name": "ChBchangePlandat", "type": "TCheckBox"}, "label3": {"name": "Label3", "type": "TLabel"}, "cmcurrencyedit2": {"name": "CMCurrencyEdit2", "type": "TCMCurrencyEdit"}, "crdid": {"name": "crdid", "type": "integer"}}, {});
  U.init(async () => {
    U.var_("PaymentAddForm", null, "TPaymentAddForm");
    U.var_("cusb", 0, "integer");
    U.var_("a", 0, "integer");
  });
  U.method("TPaymentAddForm", "GeneratePlanPayment", async function GeneratePlanPayment(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: undefined};
  {
    const $t1 = (await $.v(C, "CUPaymentDataModule"));
    const $t2 = (await $.wv([$t1], "cm_utils", C, false));
    await $.mset((await $.wv([$t1, $t2], "MainAmtEdit", C, false)), "Value", (await $.wcall([$t1, $t2], "CallFloatFunction", ["Get_MainPlanPayment", [(await $.wv([$t1, $t2], "crdid", C, false))]], C)));
    await $.mset((await $.wv([$t1, $t2], "IntAmtEdit", C, false)), "Value", (await $.mv((await $.mcall((await $.wv([$t1, $t2], "IntRest", C, false)), "FieldByName", ["intrest"])), "AsFloat")));
    await $.mset((await $.wv([$t1, $t2], "PenaltyAmtEdit", C, false)), "Value", (await $.wcall([$t1, $t2], "CallFloatFunction", ["Get_creditPenalty", [(await $.wv([$t1, $t2], "crdid", C, false))]], C)));
    await $.mset((await $.wv([$t1, $t2], "FullPayAmt", C, false)), "Value", $.add($.add($.add($.add((await $.mv((await $.wv([$t1, $t2], "MainAmtEdit", C, false)), "Value")), (await $.mv((await $.wv([$t1, $t2], "IntAmtEdit", C, false)), "Value"))), (await $.mv((await $.wv([$t1, $t2], "PenaltyAmtEdit", C, false)), "Value"))), (await $.mv((await $.mcall((await $.mv((await $.wv([$t1, $t2], "CUPaymentDataModule", C, false)), "DueRest")), "FieldbyName", ["DUEREST"])), "AsFloat"))), (await $.mv((await $.mcall((await $.mv((await $.wv([$t1, $t2], "CUPaymentDataModule", C, false)), "DueIntRest")), "FieldbyName", ["DUEINTERESTREST"])), "AsFloat"))));
    await $.mset((await $.wv([$t1, $t2], "CMCurrencyEdit2", C, false)), "Value", $.add((await $.wcall([$t1, $t2], "CallFloatFunction", ["Get_MainPlanPayment", [(await $.wv([$t1, $t2], "crdid", C, false))]], C)), (await $.mv((await $.mcall((await $.mv((await $.wv([$t1, $t2], "CUPaymentDataModule", C, false)), "DueRest")), "FieldbyName", ["DUEREST"])), "AsFloat"))));
    {
      const $t3 = (await $.wv([$t1, $t2], "expcrdcnt", C, false));
      if ($.truthy((await $.wv([$t1, $t2, $t3], "active", C, false)))) {
        await $.stmt($.wcall([$t1, $t2, $t3], "Close", [], C));
      }
      await $.stmt((await $.wcall([$t1, $t2, $t3], "SetVariable", ["CrdID", (await $.wv([$t1, $t2, $t3], "CrdID", C, false))], C)));
      await $.stmt((await $.wcall([$t1, $t2, $t3], "SetVariable", ["dat", (await $.wv([$t1, $t2, $t3], "Get_CurrentDate", C, false))], C)));
      await $.stmt($.wcall([$t1, $t2, $t3], "Open", [], C));
    }
    await $.mset((await $.wv([$t1, $t2], "ExpdateCount", C, false)), "Text", (await $.wcall([$t1, $t2], "IntToStr", [(await $.mv((await $.mcall((await $.wv([$t1, $t2], "expcrdcnt", C, false)), "FieldByName", ["EXDATCOUNT"])), "AsInteger"))], C)));
  }
  return L0.result;
}, {"params": [], "kind": "procedure", "ptypes": []});
  U.method("TPaymentAddForm", "MainAmtEditChange", async function MainAmtEditChange(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mset((await $.v(C, "CMCurrencyEdit2")), "Value", (await $.mv((await $.v(C, "MainAmtEdit")), "Value")));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TPaymentAddForm", "GenerateFullPayment", async function GenerateFullPayment(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: undefined, "pen": 0};
  {
    const $t4 = (await $.v(C, "CUPaymentDataModule"));
    const $t5 = (await $.wv([$t4], "cm_utils", C, false));
    await $.mset((await $.wv([$t4, $t5], "MainAmtEdit", C, false)), "Text", (await $.wcall([$t4, $t5], "FloatToStr", [(await $.mv((await $.mcall((await $.wv([$t4, $t5], "LoanRest", C, false)), "FieldByName", ["REST"])), "AsFloat"))], C)));
    await $.mset((await $.wv([$t4, $t5], "IntAmtEdit", C, false)), "Text", (await $.wcall([$t4, $t5], "FloatToStr", [(await $.mv((await $.mcall((await $.wv([$t4, $t5], "IntRest", C, false)), "FieldByName", ["INTERESTREST"])), "AsFloat"))], C)));
    await $.mset((await $.wv([$t4, $t5], "PenaltyAmtEdit", C, false)), "Text", (await $.wcall([$t4, $t5], "FloatToStr", [(await $.wcall([$t4, $t5], "CallFloatFunction", ["Get_creditPenalty", [(await $.wv([$t4, $t5], "crdid", C, false))]], C))], C)));
    await $.wset([$t4, $t5], "pen", (await $.wcall([$t4, $t5], "round", [$.fdiv((await $.mv((await $.wv([$t4, $t5], "MainAmtEdit", C, false)), "Value")), 100)], C)), { get: async () => L0["pen"], set: async (v) => { L0["pen"] = v; }, local: true });
    await $.mset((await $.wv([$t4, $t5], "FullPayAmt", C, false)), "Value", $.add($.add((await $.mv((await $.wv([$t4, $t5], "MainAmtEdit", C, false)), "Value")), (await $.mv((await $.wv([$t4, $t5], "IntAmtEdit", C, false)), "Value"))), (await $.mv((await $.wv([$t4, $t5], "PenaltyAmtEdit", C, false)), "Value"))));
  }
  return L0.result;
}, {"params": [], "kind": "procedure", "ptypes": []});
  U.method("TPaymentAddForm", "FormCanResize", async function FormCanResize(Self, p0, p1, p2, p3) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "newwidth": $.asRef(p1), "newheight": $.asRef(p2), "resize": $.asRef(p3), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await L0["resize"].set(false);
  return L0.result;
}, {"params": ["Sender", "NewWidth", "NewHeight", "Resize"], "kind": "procedure", "ptypes": ["TObject", "Integer", "Integer", "Boolean"]});
  U.method("TPaymentAddForm", "FormCreate", async function FormCreate(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.set(C, "Form1", (await $.mcall((await $.v(C, "TForm1")), "Create", [Self])));
  await $.stmt((await $.mcall((await $.v(C, "SBTranslateProc")), "TranslateAllCompForms", [Self, (await $.mv((await $.v(C, "sboapiDataModule")), "OrPack_SL"))])));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TPaymentAddForm", "FormKeyPress", async function FormKeyPress(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "key": $.asRef(p1), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.eq((await $.call(C, "ORD", [(await L0["key"].get())])), (await $.v(C, "VK_ESCAPE"))))) {
    await $.stmt($.call(C, "Close", []));
  }
  return L0.result;
}, {"params": ["Sender", "Key"], "kind": "procedure", "ptypes": ["TObject", "Char"]});
  U.method("TPaymentAddForm", "ActnAcceptExecute", async function ActnAcceptExecute(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "date": 0, "custaccid": 0, "penaltyaccid": 0, "faktatm": 0, "bkintamt": 0, "mainamt": 0, "intamt": 0, "dueamt": 0, "dueintamt": 0, "penaltyamt": 0, "trprocess": false, "committranche": false, "f": 0, "cem": 0};
  await $.fixArgs(L0, ["sender"]);
  L0["rstransactionswillprocessed"] = "Kreditin ödənilməsi ...";
  L0["custaccid"] = (await $.mv((await $.mcall((await $.mv((await $.mv((await $.v(C, "DBLookupComboboxEhCustAcc")), "ListSource")), "DataSet")), "FieldByName", ["ACCID"])), "AsInteger"));
  L0["penaltyaccid"] = (await $.mcall((await $.mv((await $.v(C, "CUPaymentDataModule")), "cm_utils")), "CallIntegerFunction", ["Get_CreditPenaltyAccID", [(await $.v(C, "CrdID"))]]));
  L0["trprocess"] = true;
  L0["date"] = (await $.v(C, "Get_CurrentDate"));
  L0["mainamt"] = (await $.mv((await $.v(C, "MainAmtEdit")), "Value"));
  L0["faktatm"] = (await $.mcall((await $.mv((await $.v(C, "CUPaymentDataModule")), "cm_utils")), "CallFloatFunction", ["Get_MainPlanPayment", [(await $.v(C, "crdid"))]]));
  L0["intamt"] = (await $.mv((await $.v(C, "IntAmtEdit")), "Value"));
  L0["penaltyamt"] = (await $.mv((await $.v(C, "PenaltyAmtEdit")), "Value"));
  await $.set(C, "cusb", 0);
  {
    const $t6 = (await $.v(C, "CUPaymentDataModule"));
    if ($.truthy($.eq((await $.mv((await $.mcall((await $.wv([$t6], "PortfInfo", C, false)), "FieldByName", ["credittype"])), "AsInteger")), 13))) {
      if ($.truthy((await $.mv((await $.wv([$t6], "ODS_CUST_COMBİNED", C, false)), "Active")))) {
        await $.mcall((await $.wv([$t6], "ODS_CUST_COMBİNED", C, false)), "Close", []);
      }
      await $.stmt((await $.mcall((await $.wv([$t6], "ODS_CUST_COMBİNED", C, false)), "SetVariable", ["creditid", (await $.wv([$t6], "CrdID", C, false))])));
      await $.mcall((await $.wv([$t6], "ODS_CUST_COMBİNED", C, false)), "open", []);
      await $.mcall((await $.wv([$t6], "Form1", C, false)), "ShowModal", []);
      if ($.truthy((await $.and_(($.eq((await $.wv([$t6], "cusb", C, false)), 0)), async () => ($.gt((await $.mv((await $.wv([$t6], "ODS_CUST_COMBİNED", C, false)), "RecordCount")), 0)))))) {
        await $.stmt((await $.wcall([$t6], "ShowMessage", ["Birgə borcalanı seçməmisiniz !"], C)));
        return L0.result;
      }
    }
    await $.stmt((await $.mcall((await $.wv([$t6], "CM_PAYMENT", C, false)), "CallProcedure", ["PaymentAdd", ["p_CreditID", (await $.wv([$t6], "CrdID", C, false)), "p_Date", (await $.wv([$t6], "Date", { get: async () => L0["date"], set: async (v) => { L0["date"] = v; }, local: true }, false)), "p_CustAccID", (await $.wv([$t6], "CustAccID", { get: async () => L0["custaccid"], set: async (v) => { L0["custaccid"] = v; }, local: true }, false)), "P_PenaltyAccID", (await $.wv([$t6], "PenaltyAccID", { get: async () => L0["penaltyaccid"], set: async (v) => { L0["penaltyaccid"] = v; }, local: true }, false)), "p_MainDebt", (await $.wv([$t6], "MainAmt", { get: async () => L0["mainamt"], set: async (v) => { L0["mainamt"] = v; }, local: true }, false)), "p_MainInterest", (await $.wv([$t6], "IntAmt", { get: async () => L0["intamt"], set: async (v) => { L0["intamt"] = v; }, local: true }, false)), "p_DueDebt", (await $.wv([$t6], "DueAmt", { get: async () => L0["dueamt"], set: async (v) => { L0["dueamt"] = v; }, local: true }, false)), "p_DueInterest", (await $.wv([$t6], "DueIntAmt", { get: async () => L0["dueintamt"], set: async (v) => { L0["dueintamt"] = v; }, local: true }, false)), "P_PenaltyRest", (await $.wv([$t6], "PenaltyAmt", { get: async () => L0["penaltyamt"], set: async (v) => { L0["penaltyamt"] = v; }, local: true }, false)), "p_ProcessTransactions", (await $.wv([$t6], "TrProcess", { get: async () => L0["trprocess"], set: async (v) => { L0["trprocess"] = v; }, local: true }, false)), "p_fullpayment", (await $.mv((await $.wv([$t6], "CBFullPay", C, false)), "checked")), "p_changeplandate", (await $.mv((await $.wv([$t6], "ChBchangePlandat", C, false)), "checked")), "p_bkint", (await $.wv([$t6], "BkIntAmt", { get: async () => L0["bkintamt"], set: async (v) => { L0["bkintamt"] = v; }, local: true }, false))]])));
  }
  await $.stmt((await $.call(C, "ShowMessage", ["Ödəniş uğurlu keçdi... "])));
  await $.stmt($.call(C, "close", []));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TPaymentAddForm", "ActnCloseExecute", async function ActnCloseExecute(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.stmt($.call(C, "Close", []));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TPaymentAddForm", "ActnAcceptUpdate", async function ActnAcceptUpdate(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mset(L0["sender"], "Enabled", (await $.and_((await $.and_(($.ge((await $.mv((await $.v(C, "MainAmtEdit")), "Value")), 0)), async () => ($.ge((await $.mv((await $.v(C, "IntAmtEdit")), "Value")), 0)))), async () => ($.gt($.add($.add((await $.mv((await $.v(C, "MainAmtEdit")), "Value")), (await $.mv((await $.v(C, "IntAmtEdit")), "Value"))), (await $.mv((await $.v(C, "PenaltyAmtEdit")), "value"))), 0)))));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TPaymentAddForm", "FormShow", async function FormShow(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t7 = (await $.v(C, "CUPaymentDataModule"));
    await $.mset((await $.wv([$t7], "MainAmtEdit", C, false)), "ReadOnly", (await $.mv((await $.mcall((await $.wv([$t7], "LoanRest", C, false)), "FieldByName", ["ACC_NO"])), "IsNull")));
    await $.mset((await $.wv([$t7], "IntAmtEdit", C, false)), "ReadOnly", (await $.mv((await $.mcall((await $.wv([$t7], "IntRest", C, false)), "FieldByName", ["ACC_NO"])), "IsNull")));
  }
  await $.stmt($.call(C, "GeneratePlanPayment", []));
  await $.mset((await $.v(C, "CBFullPay")), "Checked", false);
  await $.mset((await $.v(C, "ChBchangePlandat")), "Checked", true);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TPaymentAddForm", "FullPayAmtKeyPress", async function FullPayAmtKeyPress(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "key": $.asRef(p1), result: undefined, "cem": 0};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.eq((await $.call(C, "ord", [(await L0["key"].get())])), 13))) {
    L0["cem"] = (await $.mv((await $.v(C, "FullPayAmt")), "Value"));
    if ($.truthy($.lt(L0["cem"], (await $.mv((await $.v(C, "DBEditEh9")), "value"))))) {
      await $.mset((await $.v(C, "PenaltyAmtEdit")), "value", L0["cem"]);
      L0["cem"] = 0;
    } else {
      await $.mset((await $.v(C, "PenaltyAmtEdit")), "value", (await $.call(C, "strtofloat", [(await $.mv((await $.v(C, "DBEditEh9")), "text"))])));
      L0["cem"] = $.sub(L0["cem"], (await $.mv((await $.v(C, "DBEditEh9")), "value")));
    }
    if ($.truthy($.lt(L0["cem"], (await $.call(C, "strtofloat", [(await $.mv((await $.v(C, "DBEditEh5")), "text"))]))))) {
      await $.mset((await $.v(C, "IntAmtEdit")), "value", L0["cem"]);
      L0["cem"] = 0;
    } else {
      await $.mset((await $.v(C, "IntAmtEdit")), "value", (await $.call(C, "strtofloat", [(await $.mv((await $.v(C, "DBEditEh5")), "text"))])));
      L0["cem"] = $.sub(L0["cem"], (await $.call(C, "strtofloat", [(await $.mv((await $.v(C, "DBEditEh5")), "text"))])));
    }
    await $.mset((await $.v(C, "MainAmtEdit")), "value", L0["cem"]);
  }
  return L0.result;
}, {"params": ["Sender", "Key"], "kind": "procedure", "ptypes": ["TObject", "Char"]});
  U.method("TPaymentAddForm", "DBLookupComboboxEhCustAccKeyValueChanged", async function DBLookupComboboxEhCustAccKeyValueChanged(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "customercanpay": 0, "temp": 0};
  await $.fixArgs(L0, ["sender"]);
  await $.mset((await $.v(C, "MainAmtEdit")), "Value", 0);
  await $.mset((await $.v(C, "IntAmtEdit")), "Value", 0);
  {
    const $t8 = (await $.v(C, "CUPaymentDataModule"));
    await $.wset([$t8], "CustomerCanPay", (await $.mv((await $.mcall((await $.wv([$t8], "PaymentAccounts", C, false)), "FieldByName", ["REST"])), "AsFloat")), { get: async () => L0["customercanpay"], set: async (v) => { L0["customercanpay"] = v; }, local: true });
    await $.wset([$t8], "Temp", (await $.mv((await $.mcall((await $.wv([$t8], "DueRest", C, false)), "FieldByName", ["DUEREST"])), "AsFloat")), { get: async () => L0["temp"], set: async (v) => { L0["temp"] = v; }, local: true });
    if ($.truthy((await $.and_(($.gt((await $.wv([$t8], "Temp", { get: async () => L0["temp"], set: async (v) => { L0["temp"] = v; }, local: true }, false)), 0)), async () => ($.gt((await $.wv([$t8], "CustomerCanPay", { get: async () => L0["customercanpay"], set: async (v) => { L0["customercanpay"] = v; }, local: true }, false)), 0)))))) {
      await $.wset([$t8], "CustomerCanPay", $.sub((await $.wv([$t8], "CustomerCanPay", { get: async () => L0["customercanpay"], set: async (v) => { L0["customercanpay"] = v; }, local: true }, false)), (await $.wv([$t8], "Temp", { get: async () => L0["temp"], set: async (v) => { L0["temp"] = v; }, local: true }, false))), { get: async () => L0["customercanpay"], set: async (v) => { L0["customercanpay"] = v; }, local: true });
    }
    await $.wset([$t8], "Temp", (await $.mv((await $.mcall((await $.wv([$t8], "DueIntRest", C, false)), "FieldByName", ["DUEINTERESTREST"])), "AsFloat")), { get: async () => L0["temp"], set: async (v) => { L0["temp"] = v; }, local: true });
    if ($.truthy((await $.and_(($.gt((await $.wv([$t8], "Temp", { get: async () => L0["temp"], set: async (v) => { L0["temp"] = v; }, local: true }, false)), 0)), async () => ($.gt((await $.wv([$t8], "CustomerCanPay", { get: async () => L0["customercanpay"], set: async (v) => { L0["customercanpay"] = v; }, local: true }, false)), 0)))))) {
      await $.wset([$t8], "CustomerCanPay", $.sub((await $.wv([$t8], "CustomerCanPay", { get: async () => L0["customercanpay"], set: async (v) => { L0["customercanpay"] = v; }, local: true }, false)), (await $.wv([$t8], "Temp", { get: async () => L0["temp"], set: async (v) => { L0["temp"] = v; }, local: true }, false))), { get: async () => L0["customercanpay"], set: async (v) => { L0["customercanpay"] = v; }, local: true });
    }
    await $.wset([$t8], "Temp", (await $.mv((await $.mcall((await $.wv([$t8], "IntRest", C, false)), "FieldByName", ["INTERESTREST"])), "AsFloat")), { get: async () => L0["temp"], set: async (v) => { L0["temp"] = v; }, local: true });
    if ($.truthy((await $.and_(($.gt((await $.wv([$t8], "Temp", { get: async () => L0["temp"], set: async (v) => { L0["temp"] = v; }, local: true }, false)), 0)), async () => ($.gt((await $.wv([$t8], "CustomerCanPay", { get: async () => L0["customercanpay"], set: async (v) => { L0["customercanpay"] = v; }, local: true }, false)), 0)))))) {
      if ($.truthy($.gt((await $.wv([$t8], "Temp", { get: async () => L0["temp"], set: async (v) => { L0["temp"] = v; }, local: true }, false)), (await $.wv([$t8], "CustomerCanPay", { get: async () => L0["customercanpay"], set: async (v) => { L0["customercanpay"] = v; }, local: true }, false))))) {
        await $.mset((await $.wv([$t8], "IntAmtEdit", C, false)), "Value", (await $.wv([$t8], "CustomerCanPay", { get: async () => L0["customercanpay"], set: async (v) => { L0["customercanpay"] = v; }, local: true }, false)));
      } else {
        await $.mset((await $.wv([$t8], "IntAmtEdit", C, false)), "Value", (await $.wv([$t8], "Temp", { get: async () => L0["temp"], set: async (v) => { L0["temp"] = v; }, local: true }, false)));
      }
      await $.wset([$t8], "CustomerCanPay", $.sub((await $.wv([$t8], "CustomerCanPay", { get: async () => L0["customercanpay"], set: async (v) => { L0["customercanpay"] = v; }, local: true }, false)), (await $.wv([$t8], "Temp", { get: async () => L0["temp"], set: async (v) => { L0["temp"] = v; }, local: true }, false))), { get: async () => L0["customercanpay"], set: async (v) => { L0["customercanpay"] = v; }, local: true });
    }
    await $.wset([$t8], "Temp", (await $.mv((await $.mcall((await $.wv([$t8], "LoanRest", C, false)), "FieldByName", ["REST"])), "AsFloat")), { get: async () => L0["temp"], set: async (v) => { L0["temp"] = v; }, local: true });
    if ($.truthy((await $.and_(($.gt((await $.wv([$t8], "Temp", { get: async () => L0["temp"], set: async (v) => { L0["temp"] = v; }, local: true }, false)), 0)), async () => ($.gt((await $.wv([$t8], "CustomerCanPay", { get: async () => L0["customercanpay"], set: async (v) => { L0["customercanpay"] = v; }, local: true }, false)), 0)))))) {
      if ($.truthy($.gt((await $.wv([$t8], "Temp", { get: async () => L0["temp"], set: async (v) => { L0["temp"] = v; }, local: true }, false)), (await $.wv([$t8], "CustomerCanPay", { get: async () => L0["customercanpay"], set: async (v) => { L0["customercanpay"] = v; }, local: true }, false))))) {
        await $.mset((await $.wv([$t8], "MainAmtEdit", C, false)), "Value", (await $.wv([$t8], "CustomerCanPay", { get: async () => L0["customercanpay"], set: async (v) => { L0["customercanpay"] = v; }, local: true }, false)));
      } else {
        await $.mset((await $.wv([$t8], "MainAmtEdit", C, false)), "Value", (await $.wv([$t8], "Temp", { get: async () => L0["temp"], set: async (v) => { L0["temp"] = v; }, local: true }, false)));
      }
      await $.wset([$t8], "CustomerCanPay", $.sub((await $.wv([$t8], "CustomerCanPay", { get: async () => L0["customercanpay"], set: async (v) => { L0["customercanpay"] = v; }, local: true }, false)), (await $.wv([$t8], "Temp", { get: async () => L0["temp"], set: async (v) => { L0["temp"] = v; }, local: true }, false))), { get: async () => L0["customercanpay"], set: async (v) => { L0["customercanpay"] = v; }, local: true });
    }
    await $.wset([$t8], "Temp", (await $.mv((await $.mcall((await $.wv([$t8], "LoanRest", C, false)), "FieldByName", ["PENALTYREST"])), "AsFloat")), { get: async () => L0["temp"], set: async (v) => { L0["temp"] = v; }, local: true });
    if ($.truthy((await $.and_(($.gt((await $.wv([$t8], "Temp", { get: async () => L0["temp"], set: async (v) => { L0["temp"] = v; }, local: true }, false)), 0)), async () => ($.gt((await $.wv([$t8], "CustomerCanPay", { get: async () => L0["customercanpay"], set: async (v) => { L0["customercanpay"] = v; }, local: true }, false)), 0)))))) {
      if ($.truthy($.gt((await $.wv([$t8], "Temp", { get: async () => L0["temp"], set: async (v) => { L0["temp"] = v; }, local: true }, false)), (await $.wv([$t8], "CustomerCanPay", { get: async () => L0["customercanpay"], set: async (v) => { L0["customercanpay"] = v; }, local: true }, false))))) {
        await $.mset((await $.wv([$t8], "PenaltyAmtEdit", C, false)), "Value", (await $.wv([$t8], "CustomerCanPay", { get: async () => L0["customercanpay"], set: async (v) => { L0["customercanpay"] = v; }, local: true }, false)));
      } else {
        await $.mset((await $.wv([$t8], "PenaltyAmtEdit", C, false)), "Value", (await $.wv([$t8], "Temp", { get: async () => L0["temp"], set: async (v) => { L0["temp"] = v; }, local: true }, false)));
      }
    }
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TPaymentAddForm", "DueAmtEditChange", async function DueAmtEditChange(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mset((await $.v(C, "CMCurrencyEdit2")), "Value", (await $.mv((await $.v(C, "MainAmtEdit")), "Value")));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TPaymentAddForm", "CBFullPayClick", async function CBFullPayClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy((await $.mv((await $.v(C, "CBFullPay")), "Checked")))) {
    await $.stmt($.call(C, "GenerateFullPayment", []));
  } else {
    await $.stmt($.call(C, "GeneratePlanPayment", []));
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  return U;
}
