// Generated from P_AccTransaction_Unit.pas by pas2js — do not edit by hand; regenerate instead.
/* eslint-disable */
// @ts-nocheck

export default function define($) {
  const U = $.unit("P_AccTransaction_Unit", ["Windows", "Messages", "SysUtils", "Classes", "Graphics", "Controls", "Forms", "Dialogs", "ExcelExporter", "Db", "OracleData", "Grids", "DBGrids", "Mask", "DBCtrls", "StdCtrls", "CurrencyEdit", "ExtCtrls", "ComCtrls", "sboapiDataModuleImpl", "CO_datamod_impl", "SBTranslateProc"]);
  const C = [U];
  U.defClass("TFormAccTransaction", "TForm", {"panel3": {"name": "Panel3", "type": "TPanel"}, "okbutton": {"name": "OkButton", "type": "TButton"}, "pagecontroltrans": {"name": "PageControlTrans", "type": "TPageControl"}, "tabsheet1": {"name": "TabSheet1", "type": "TTabSheet"}, "panel1": {"name": "Panel1", "type": "TPanel"}, "label1": {"name": "Label1", "type": "TLabel"}, "label2": {"name": "Label2", "type": "TLabel"}, "bevel1": {"name": "Bevel1", "type": "TBevel"}, "debitamountedit": {"name": "DebitAmountEdit", "type": "TCurrencyEdit"}, "debitlamountedit": {"name": "DebitLAmountEdit", "type": "TCurrencyEdit"}, "panel2": {"name": "Panel2", "type": "TPanel"}, "dbedit1": {"name": "DBEdit1", "type": "TDBEdit"}, "debittransactionsgrid": {"name": "DebitTransactionsGrid", "type": "TDBGrid"}, "tabsheet2": {"name": "TabSheet2", "type": "TTabSheet"}, "panel5": {"name": "Panel5", "type": "TPanel"}, "label3": {"name": "Label3", "type": "TLabel"}, "label4": {"name": "Label4", "type": "TLabel"}, "bevel2": {"name": "Bevel2", "type": "TBevel"}, "creditamountedit": {"name": "CreditAmountEdit", "type": "TCurrencyEdit"}, "creditlamountedit": {"name": "CreditLAmountEdit", "type": "TCurrencyEdit"}, "panel4": {"name": "Panel4", "type": "TPanel"}, "dbedit2": {"name": "DBEdit2", "type": "TDBEdit"}, "dbgrid1": {"name": "DBGrid1", "type": "TDBGrid"}, "debettransactionsdata": {"name": "DebetTransactionsData", "type": "TOracleDataSet"}, "debettransactionsdataid": {"name": "DebetTransactionsDataID", "type": "TFloatField"}, "debettransactionsdatadebitaccid": {"name": "DebetTransactionsDataDEBITACCID", "type": "TFloatField"}, "debettransactionsdataoperationdate": {"name": "DebetTransactionsDataOPERATIONDATE", "type": "TDateTimeField"}, "debettransactionsdatadebitamount": {"name": "DebetTransactionsDataDEBITAMOUNT", "type": "TFloatField"}, "debettransactionsdatacreditamount": {"name": "DebetTransactionsDataCREDITAMOUNT", "type": "TFloatField"}, "debettransactionsdatalamount": {"name": "DebetTransactionsDataLAMOUNT", "type": "TFloatField"}, "debettransactionsdatadestination": {"name": "DebetTransactionsDataDESTINATION", "type": "TWideStringField"}, "debettransactionsdatarownumber": {"name": "DebetTransactionsDataRowNumber", "type": "TIntegerField"}, "debettransactionsdatadebitaccno": {"name": "DebetTransactionsDataDebitAccNo", "type": "TWideStringField"}, "credittransactionsdata": {"name": "CreditTransactionsData", "type": "TOracleDataSet"}, "credittransactionsdataid": {"name": "CreditTransactionsDataID", "type": "TFloatField"}, "integerfield1": {"name": "IntegerField1", "type": "TIntegerField"}, "credittransactionsdatacreditaccid": {"name": "CreditTransactionsDataCREDITACCID", "type": "TFloatField"}, "credittransactionsdataoperationdate": {"name": "CreditTransactionsDataOPERATIONDATE", "type": "TDateTimeField"}, "credittransactionsdatadebitamount": {"name": "CreditTransactionsDataDEBITAMOUNT", "type": "TFloatField"}, "credittransactionsdatacreditamount": {"name": "CreditTransactionsDataCREDITAMOUNT", "type": "TFloatField"}, "credittransactionsdatalamount": {"name": "CreditTransactionsDataLAMOUNT", "type": "TFloatField"}, "credittransactionsdatadebitaccno": {"name": "CreditTransactionsDataDEBITACCNO", "type": "TWideStringField"}, "credittransactionsdatadestination": {"name": "CreditTransactionsDataDESTINATION", "type": "TWideStringField"}, "credittransactionsdatacreditaccno": {"name": "CreditTransactionsDataCreditAccNo", "type": "TWideStringField"}, "credittransactions": {"name": "CreditTransactions", "type": "TDataSource"}, "debettransactions": {"name": "DebetTransactions", "type": "TDataSource"}, "debettransactionsdatacreditaccno": {"name": "DebetTransactionsDataCREDITACCNO", "type": "TWideStringField"}, "accountid": {"name": "AccountID", "type": "Longint"}, "accountnumber": {"name": "AccountNumber", "type": "String"}}, {});
  U.init(async () => {
    U.var_("FormAccTransaction", null, "TFormAccTransaction");
  });
  U.method("TFormAccTransaction", "WMNCACTIVATE", async function WMNCACTIVATE(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"message": $.asRef(p0), result: undefined, "s": null};
  await $.inherited(Self, "TFormAccTransaction", "WMNCACTIVATE", null, arguments);
  await $.stmt((await $.call(C, "WMNCPaint", [$.ref(async () => L0["s"], async ($t1) => { L0["s"] = $t1; })])));
  return L0.result;
}, {"params": ["message"], "kind": "procedure", "ptypes": ["TWMNCActivate"]});
  U.method("TFormAccTransaction", "WMNCPaint", async function WMNCPaint(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"message": $.asRef(p0), result: undefined, "dc": null};
  L0["capt"] = "Sərəncamlar";
  await $.inherited(Self, "TFormAccTransaction", "WMNCPaint", null, arguments);
  await $.set(C, "Caption", "");
  L0["dc"] = (await $.call(C, "GetWindowDC", [(await $.v(C, "Handle"))]));
  await $.stmt((await $.call(C, "SetBkMode", [L0["dc"], (await $.v(C, "Transparent"))])));
  await $.stmt((await $.call(C, "SetTextColor", [L0["dc"], (await $.v(C, "clWhite"))])));
  await $.stmt((await $.call(C, "SelectObject", [L0["dc"], (await $.mv((await $.v(C, "Font")), "Handle"))])));
  await $.stmt((await $.call(C, "TextOut", [L0["dc"], 23, 6, L0["capt"], (await $.call(C, "Length", [L0["capt"]]))])));
  return L0.result;
}, {"params": ["message"], "kind": "procedure", "ptypes": ["TWMNCPaint"]});
  U.method("TFormAccTransaction", "OpenDataControls", async function OpenDataControls(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"begindate": $.copyArg(p0), "enddate": $.copyArg(p1), result: undefined};
  await $.fixArgs(L0, ["begindate", "enddate"]);
  L0["open_"] = $.fn(async function Open_(p0) {
  const L1 = {"dataset": $.copyArg(p0), result: undefined};
  await $.fixArgs(L1, ["dataset"]);
  {
    const $t2 = L1["dataset"];
    await $.stmt($.wcall([$t2], "CloseAll", [], C));
    await $.stmt((await $.wcall([$t2], "SetVariable", ["AccountID", (await $.wv([$t2], "AccountID", C, false))], C)));
    await $.stmt((await $.wcall([$t2], "SetVariable", ["StartDate", (await $.wv([$t2], "BeginDate", { get: async () => L0["begindate"], set: async (v) => { L0["begindate"] = v; }, local: true }, false))], C)));
    await $.stmt((await $.wcall([$t2], "SetVariable", ["EndDate", (await $.wv([$t2], "EndDate", { get: async () => L0["enddate"], set: async (v) => { L0["enddate"] = v; }, local: true }, false))], C)));
    await $.stmt($.wcall([$t2], "Open", [], C));
  }
  return L1.result;
});
  {
    const $t3 = (await $.mv((await $.v(C, "CO_Datamod")), "Account"));
    await $.wset([$t3], "AccountID", (await $.mv((await $.wcall([$t3], "FieldByName", ["ID"], C)), "AsInteger")), C);
  }
  await $.stmt((await $.callv(L0["open_"], [(await $.v(C, "DebetTransactionsData"))])));
  await $.stmt((await $.callv(L0["open_"], [(await $.v(C, "CreditTransactionsData"))])));
  return L0.result;
}, {"params": ["BeginDate", "EndDate"], "kind": "procedure", "ptypes": ["TDateTime", "TDateTime"]});
  U.method("TFormAccTransaction", "FillAmounts", async function FillAmounts(Self, p0, p1, p2, p3, p4) {
  const C = $.chain(Self, U);
  const L0 = {"dataset": $.copyArg(p0), "amountfield": $.copyArg(p1), "lamountfield": $.copyArg(p2), "amountedit": $.copyArg(p3), "lamountedit": $.copyArg(p4), result: undefined, "amount": 0, "lamount": 0};
  await $.fixArgs(L0, ["dataset", "amountfield", "lamountfield", "amountedit", "lamountedit"]);
  L0["amount"] = 0.0;
  L0["lamount"] = 0.0;
  {
    const $t4 = L0["dataset"];
    await $.stmt($.wcall([$t4], "DisableControls", [], C));
    try {
      while ($.truthy($.not((await $.wv([$t4], "Eof", C, false))))) {
        await $.wset([$t4], "Amount", $.add((await $.wv([$t4], "Amount", { get: async () => L0["amount"], set: async (v) => { L0["amount"] = v; }, local: true }, false)), (await $.mv((await $.wv([$t4], "AmountField", { get: async () => L0["amountfield"], set: async (v) => { L0["amountfield"] = v; }, local: true }, false)), "Value"))), { get: async () => L0["amount"], set: async (v) => { L0["amount"] = v; }, local: true });
        await $.wset([$t4], "LAmount", $.add((await $.wv([$t4], "LAmount", { get: async () => L0["lamount"], set: async (v) => { L0["lamount"] = v; }, local: true }, false)), (await $.mv((await $.wv([$t4], "LAmountField", { get: async () => L0["lamountfield"], set: async (v) => { L0["lamountfield"] = v; }, local: true }, false)), "Value"))), { get: async () => L0["lamount"], set: async (v) => { L0["lamount"] = v; }, local: true });
        await $.stmt($.wcall([$t4], "Next", [], C));
        await $.tick();
      }
    } finally {
      await $.stmt($.wcall([$t4], "EnableControls", [], C));
    }
  }
  await $.mset(L0["amountedit"], "Value", L0["amount"]);
  await $.mset(L0["lamountedit"], "Value", L0["lamount"]);
  return L0.result;
}, {"params": ["DataSet", "AmountField", "LAmountField", "AmountEdit", "LAmountEdit"], "kind": "procedure", "ptypes": ["TDataSet", "TField", "TField", "TCurrencyEdit", "TCurrencyEdit"]});
  U.method("TFormAccTransaction", "DebetTransactionsDataAfterOpen", async function DebetTransactionsDataAfterOpen(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"dataset": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["dataset"]);
  await $.stmt((await $.call(C, "FillAmounts", [L0["dataset"], (await $.v(C, "DebetTransactionsDataDEBITAMOUNT")), (await $.v(C, "DebetTransactionsDataLAMOUNT")), (await $.v(C, "DebitAmountEdit")), (await $.v(C, "DebitLAmountEdit"))])));
  return L0.result;
}, {"params": ["DataSet"], "kind": "procedure", "ptypes": ["TDataSet"]});
  U.method("TFormAccTransaction", "DebetTransactionsDataCalcFields", async function DebetTransactionsDataCalcFields(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"dataset": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["dataset"]);
  {
    const $t5 = L0["dataset"];
    await $.mset((await $.wcall([$t5], "FieldByName", ["DebitAccNo"], C)), "AsString", (await $.mv((await $.mcall((await $.mv((await $.wv([$t5], "CO_Datamod", C, false)), "Account")), "FieldByName", ["accno"])), "AsString")));
  }
  return L0.result;
}, {"params": ["DataSet"], "kind": "procedure", "ptypes": ["TDataSet"]});
  U.method("TFormAccTransaction", "CreditTransactionsDataAfterOpen", async function CreditTransactionsDataAfterOpen(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"dataset": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["dataset"]);
  await $.stmt((await $.call(C, "FillAmounts", [L0["dataset"], (await $.v(C, "CreditTransactionsDataCREDITAMOUNT")), (await $.v(C, "CreditTransactionsDataLAMOUNT")), (await $.v(C, "CreditAmountEdit")), (await $.v(C, "CreditLAmountEdit"))])));
  return L0.result;
}, {"params": ["DataSet"], "kind": "procedure", "ptypes": ["TDataSet"]});
  U.method("TFormAccTransaction", "CreditTransactionsDataCalcFields", async function CreditTransactionsDataCalcFields(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"dataset": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["dataset"]);
  {
    const $t6 = L0["dataset"];
    await $.mset((await $.wcall([$t6], "FieldByName", ["CreditAccNo"], C)), "AsString", (await $.mv((await $.mcall((await $.mv((await $.wv([$t6], "CO_Datamod", C, false)), "Account")), "FieldByName", ["accno"])), "AsString")));
  }
  return L0.result;
}, {"params": ["DataSet"], "kind": "procedure", "ptypes": ["TDataSet"]});
  U.method("TFormAccTransaction", "FormActivate", async function FormActivate(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t7 = (await $.mv((await $.v(C, "CO_Datamod")), "Account"));
    await $.wset([$t7], "AccountNumber", (await $.mv((await $.wcall([$t7], "FieldByName", ["accno"], C)), "AsString")), C);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFormAccTransaction", "FormCreate", async function FormCreate(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.stmt((await $.mcall((await $.v(C, "SBTranslateProc")), "TranslateAllCompForms", [Self, (await $.mv((await $.v(C, "sboapiDataModule")), "OrPack_SL"))])));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  return U;
}
