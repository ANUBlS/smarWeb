// Generated from PayForm.pas by pas2js — do not edit by hand; regenerate instead.
/* eslint-disable */
// @ts-nocheck

export default function define($) {
  const U = $.unit("PayForm", ["Windows", "Messages", "SysUtils", "Variants", "Classes", "Graphics", "Controls", "Forms", "Dialogs", "ExtCtrls", "DB", "OracleData", "Grids", "DBGrids", "StdCtrls", "Buttons", "ComCtrls", "Oracle", "CurrencyEdit", "Mask", "DBCtrls", "sboapiDataModuleImpl", "CC_CashOperationImpl", "TransactionviewFormImpl", "cc_DataMod_CashOper", "CC_CashOperationMgr_TLB", "OrderImpl"]);
  const C = [U];
  U.defClass("TPay", "TForm", {"groupbox2": {"name": "GroupBox2", "type": "TGroupBox"}, "dtpopdate": {"name": "DTPOpDate", "type": "TDateTimePicker"}, "sysdat": {"name": "SysDat", "type": "TOracleDataSet"}, "sysdattek_dat": {"name": "SysDatTEK_DAT", "type": "TDateTimeField"}, "sysdatpred_dat": {"name": "SysDatPRED_DAT", "type": "TDateTimeField"}, "sysdatarc_day": {"name": "SysDatARC_DAY", "type": "TDateTimeField"}, "sysdatclose": {"name": "SysDatCLOSE", "type": "TIntegerField"}, "groupbox1": {"name": "GroupBox1", "type": "TGroupBox"}, "statictext1": {"name": "StaticText1", "type": "TStaticText"}, "dbedit1": {"name": "DBEdit1", "type": "TDBEdit"}, "statictext2": {"name": "StaticText2", "type": "TStaticText"}, "currencyedit1": {"name": "CurrencyEdit1", "type": "TCurrencyEdit"}, "groupbox3": {"name": "GroupBox3", "type": "TGroupBox"}, "statictext3": {"name": "StaticText3", "type": "TStaticText"}, "dbedit2": {"name": "DBEdit2", "type": "TDBEdit"}, "statictext4": {"name": "StaticText4", "type": "TStaticText"}, "currencyedit2": {"name": "CurrencyEdit2", "type": "TCurrencyEdit"}, "speedbutton1": {"name": "SpeedButton1", "type": "TSpeedButton"}, "speedbutton2": {"name": "SpeedButton2", "type": "TSpeedButton"}, "sbcm_construction": {"name": "sbcm_construction", "type": "TOraclePackage"}, "cash": {"name": "Cash", "type": "TOracleDataSet"}, "cashid": {"name": "CashID", "type": "TFloatField"}, "cashacc_no": {"name": "CashACC_NO", "type": "TWideStringField"}, "cashname": {"name": "CashNAME", "type": "TWideStringField"}, "cashdatsrc": {"name": "CashDatSrc", "type": "TDataSource"}, "dbtext1": {"name": "DBText1", "type": "TDBText"}, "label1": {"name": "Label1", "type": "TLabel"}}, {});
  U.init(async () => {
    U.var_("Pay", null, "TPay");
  });
  U.method("TPay", "TrDelayed_Show", async function TrDelayed_Show(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"aowner": $.copyArg(p0), result: false};
  await $.fixArgs(L0, ["aowner"]);
  {
    const $t1 = (await $.mcall((await $.v(C, "TTransactionviewForm")), "Create", [L0["aowner"]]));
    try {
      await $.wset([$t1], "Result", $.eq((await $.wv([$t1], "ShowModal", C, false)), (await $.wv([$t1], "mrOk", C, false))), { get: async () => L0["result"], set: async (v) => { L0["result"] = v; }, local: true });
      await $.stmt($.wcall([$t1], "Update", [], C));
    } finally {
      await $.stmt($.wcall([$t1], "Release", [], C));
    }
  }
  return L0.result;
}, {"params": ["AOwner"], "kind": "function", "ptypes": ["TComponent"]});
  U.method("TPay", "BitBtn1Click", async function BitBtn1Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "commitpayment": false, "trdate": 0, "sum": 0, "desc": '', "code": 0};
  await $.fixArgs(L0, ["sender"]);
  L0["trdate"] = (await $.call(C, "integer", [(await $.call(C, "Trunc", [(await $.mv((await $.v(C, "DTPOpDate")), "dateTime"))]))]));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TPay", "FormClose", async function FormClose(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "action": $.asRef(p1), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  return L0.result;
}, {"params": ["Sender", "Action"], "kind": "procedure", "ptypes": ["TObject", "TCloseAction"]});
  U.method("TPay", "FormCreate", async function FormCreate(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mcall((await $.v(C, "SysDat")), "open", []);
  await $.mset((await $.v(C, "DTPOpDate")), "dateTime", (await $.mv((await $.mcall((await $.v(C, "SysDat")), "FieldByName", ["TEK_DAT"])), "AsDateTime")));
  await $.mcall((await $.v(C, "Cash")), "Open", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TPay", "FormDestroy", async function FormDestroy(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mcall((await $.v(C, "SysDat")), "closeall", []);
  await $.mcall((await $.v(C, "Cash")), "closeall", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TPay", "SpeedButton1Click", async function SpeedButton1Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "commitpayment": false, "trdate": 0, "faiz": 0, "sum": 0, "desc": '', "code": 0};
  await $.fixArgs(L0, ["sender"]);
  L0["sum"] = (await $.call(C, "StrToFloat", [(await $.mv((await $.v(C, "CurrencyEdit1")), "text"))]));
  L0["faiz"] = (await $.call(C, "StrToFloat", [(await $.mv((await $.v(C, "CurrencyEdit2")), "text"))]));
  L0["trdate"] = (await $.call(C, "integer", [(await $.call(C, "Trunc", [(await $.mv((await $.v(C, "DTPOpDate")), "dateTime"))]))]));
  L0["desc"] = "";
  L0["code"] = 0;
  {
    const $t2 = (await $.v(C, "sbcm_construction"));
    await $.stmt((await $.wcall([$t2], "CallProcedure", ["PaymentTracttransactions2", ["p_contractid", (await $.mv((await $.mcall((await $.mv((await $.wv([$t2], "DataMod_CCCashOper", C, false)), "cc_contracts")), "fieldbyname", ["id"])), "asinteger")), "p_dat", (await $.wv([$t2], "TrDate", { get: async () => L0["trdate"], set: async (v) => { L0["trdate"] = v; }, local: true }, false)), "p_desc", (await $.wv([$t2], "desc", { get: async () => L0["desc"], set: async (v) => { L0["desc"] = v; }, local: true }, false)), "p_code", (await $.wv([$t2], "code", { get: async () => L0["code"], set: async (v) => { L0["code"] = v; }, local: true }, false)), "p_flatamt", (await $.wv([$t2], "sum", { get: async () => L0["sum"], set: async (v) => { L0["sum"] = v; }, local: true }, false)), "p_showtr", (await $.wv([$t2], "TRUE", C, false)), "p_DebitAccID", (await $.mv((await $.mcall((await $.wv([$t2], "Cash", C, false)), "FieldByName", ["ID"])), "AsInteger")), "p_faiz", (await $.wv([$t2], "faiz", { get: async () => L0["faiz"], set: async (v) => { L0["faiz"] = v; }, local: true }, false))]], C)));
  }
  try {
    L0["commitpayment"] = (await $.call(C, "TrDelayed_Show", [Self]));
    await $.stmt($.call(C, "Update", []));
    {
      const $t4 = (await $.v(C, "sbcm_construction"));
      await $.stmt((await $.wcall([$t4], "CallProcedure", ["commitdelayedtransactions", ["DoCommit", (await $.wv([$t4], "CommitPayment", { get: async () => L0["commitpayment"], set: async (v) => { L0["commitpayment"] = v; }, local: true }, false))]], C)));
    }
    if ($.truthy(L0["commitpayment"])) {
      await $.mset(Self, "ModalResult", (await $.v(C, "mrOk")));
    }
    await $.mcall(Self, "Update", []);
    await $.mcall((await $.mv((await $.v(C, "FrmOrder")), "Payments")), "Refresh", []);
  } catch ($t3) {
    $.rethrowControl($t3);
    $.handled($t3);
    {
      const $t5 = (await $.v(C, "sbcm_construction"));
      await $.stmt((await $.wcall([$t5], "CallProcedure", ["commitdelayedtransactions", ["DoCommit", (await $.wv([$t5], "False", C, false))]], C)));
    }
    throw $t3;
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  return U;
}
