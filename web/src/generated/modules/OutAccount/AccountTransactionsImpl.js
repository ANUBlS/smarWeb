// Generated from AccountTransactionsImpl.pas by pas2js — do not edit by hand; regenerate instead.
/* eslint-disable */
// @ts-nocheck

export default function define($) {
  const U = $.unit("AccountTransactionsImpl", ["Windows", "Messages", "SysUtils", "Classes", "Graphics", "Controls", "Forms", "Dialogs", "StdCtrls", "Buttons", "Grids", "DBGrids", "Mask", "DBCtrls", "CurrencyEdit", "ExtCtrls", "ComCtrls", "ExcelExporter", "Db", "OracleData", "AccountDataModuleImpl", "sboapiDataModuleImpl", "SBTranslateProc"]);
  const C = [U];
  U.defClass("TFormAccountTransactions", "TForm", {"pagecontroltrans": {"name": "PageControlTrans", "type": "TPageControl"}, "tabsheet1": {"name": "TabSheet1", "type": "TTabSheet"}, "panel1": {"name": "Panel1", "type": "TPanel"}, "label1": {"name": "Label1", "type": "TLabel"}, "label2": {"name": "Label2", "type": "TLabel"}, "bevel1": {"name": "Bevel1", "type": "TBevel"}, "debitamountedit": {"name": "DebitAmountEdit", "type": "TCurrencyEdit"}, "debitlamountedit": {"name": "DebitLAmountEdit", "type": "TCurrencyEdit"}, "panel2": {"name": "Panel2", "type": "TPanel"}, "dbedit1": {"name": "DBEdit1", "type": "TDBEdit"}, "debittransactionsgrid": {"name": "DebitTransactionsGrid", "type": "TDBGrid"}, "tabsheet2": {"name": "TabSheet2", "type": "TTabSheet"}, "panel5": {"name": "Panel5", "type": "TPanel"}, "label3": {"name": "Label3", "type": "TLabel"}, "label4": {"name": "Label4", "type": "TLabel"}, "bevel2": {"name": "Bevel2", "type": "TBevel"}, "creditamountedit": {"name": "CreditAmountEdit", "type": "TCurrencyEdit"}, "creditlamountedit": {"name": "CreditLAmountEdit", "type": "TCurrencyEdit"}, "panel4": {"name": "Panel4", "type": "TPanel"}, "dbedit2": {"name": "DBEdit2", "type": "TDBEdit"}, "dbgrid1": {"name": "DBGrid1", "type": "TDBGrid"}, "panel3": {"name": "Panel3", "type": "TPanel"}, "speedbutton1": {"name": "SpeedButton1", "type": "TSpeedButton"}, "okbutton": {"name": "OkButton", "type": "TButton"}, "debettransactionsdata": {"name": "DebetTransactionsData", "type": "TOracleDataSet"}, "debettransactionsdataid": {"name": "DebetTransactionsDataID", "type": "TFloatField"}, "debettransactionsdatadebitaccid": {"name": "DebetTransactionsDataDEBITACCID", "type": "TFloatField"}, "debettransactionsdataoperationdate": {"name": "DebetTransactionsDataOPERATIONDATE", "type": "TDateTimeField"}, "debettransactionsdatadebitamount": {"name": "DebetTransactionsDataDEBITAMOUNT", "type": "TFloatField"}, "debettransactionsdatacreditamount": {"name": "DebetTransactionsDataCREDITAMOUNT", "type": "TFloatField"}, "debettransactionsdatalamount": {"name": "DebetTransactionsDataLAMOUNT", "type": "TFloatField"}, "debettransactionsdatacreditaccno": {"name": "DebetTransactionsDataCREDITACCNO", "type": "TWideStringField"}, "debettransactionsdatadestination": {"name": "DebetTransactionsDataDESTINATION", "type": "TWideStringField"}, "debettransactionsdatarownumber": {"name": "DebetTransactionsDataRowNumber", "type": "TIntegerField"}, "debettransactionsdatadebitaccno": {"name": "DebetTransactionsDataDebitAccNo", "type": "TWideStringField"}, "debettransactions": {"name": "DebetTransactions", "type": "TDataSource"}, "credittransactions": {"name": "CreditTransactions", "type": "TDataSource"}, "credittransactionsdata": {"name": "CreditTransactionsData", "type": "TOracleDataSet"}, "credittransactionsdataid": {"name": "CreditTransactionsDataID", "type": "TFloatField"}, "integerfield1": {"name": "IntegerField1", "type": "TIntegerField"}, "credittransactionsdatacreditaccid": {"name": "CreditTransactionsDataCREDITACCID", "type": "TFloatField"}, "credittransactionsdataoperationdate": {"name": "CreditTransactionsDataOPERATIONDATE", "type": "TDateTimeField"}, "credittransactionsdatadebitamount": {"name": "CreditTransactionsDataDEBITAMOUNT", "type": "TFloatField"}, "credittransactionsdatacreditamount": {"name": "CreditTransactionsDataCREDITAMOUNT", "type": "TFloatField"}, "credittransactionsdatalamount": {"name": "CreditTransactionsDataLAMOUNT", "type": "TFloatField"}, "credittransactionsdatadebitaccno": {"name": "CreditTransactionsDataDEBITACCNO", "type": "TWideStringField"}, "credittransactionsdatadestination": {"name": "CreditTransactionsDataDESTINATION", "type": "TWideStringField"}, "credittransactionsdatacreditaccno": {"name": "CreditTransactionsDataCreditAccNo", "type": "TWideStringField"}, "acctrexport": {"name": "AccTrExport", "type": "TExcelExporter"}, "accountid": {"name": "AccountID", "type": "Longint"}, "accountnumber": {"name": "AccountNumber", "type": "String"}}, {});
  U.init(async () => {
    U.var_("FormAccountTransactions", null, "TFormAccountTransactions");
  });
  U.method("TFormAccountTransactions", "OpenDataControls", async function OpenDataControls(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"begindate": $.copyArg(p0), "enddate": $.copyArg(p1), result: undefined};
  await $.fixArgs(L0, ["begindate", "enddate"]);
  L0["open_"] = $.fn(async function Open_(p0) {
  const L1 = {"dataset": $.copyArg(p0), result: undefined};
  await $.fixArgs(L1, ["dataset"]);
  {
    const $t1 = L1["dataset"];
    await $.stmt($.wcall([$t1], "CloseAll", [], C));
    await $.stmt((await $.wcall([$t1], "SetVariable", ["AccountID", (await $.wv([$t1], "AccountID", C, false))], C)));
    await $.stmt((await $.wcall([$t1], "SetVariable", ["StartDate", (await $.wv([$t1], "BeginDate", { get: async () => L0["begindate"], set: async (v) => { L0["begindate"] = v; }, local: true }, false))], C)));
    await $.stmt((await $.wcall([$t1], "SetVariable", ["EndDate", (await $.wv([$t1], "EndDate", { get: async () => L0["enddate"], set: async (v) => { L0["enddate"] = v; }, local: true }, false))], C)));
    await $.stmt($.wcall([$t1], "Open", [], C));
  }
  return L1.result;
});
  {
    const $t2 = (await $.mv((await $.v(C, "out_accdatamodule")), "Account"));
    await $.wset([$t2], "AccountID", (await $.mv((await $.wcall([$t2], "FieldByName", ["ID"], C)), "AsInteger")), C);
  }
  await $.stmt((await $.callv(L0["open_"], [(await $.v(C, "DebetTransactionsData"))])));
  await $.stmt((await $.callv(L0["open_"], [(await $.v(C, "CreditTransactionsData"))])));
  return L0.result;
}, {"params": ["BeginDate", "EndDate"], "kind": "procedure", "ptypes": ["TDateTime", "TDateTime"]});
  U.method("TFormAccountTransactions", "DebetTransactionsDataAfterOpen", async function DebetTransactionsDataAfterOpen(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"dataset": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["dataset"]);
  await $.stmt((await $.call(C, "FillAmounts", [L0["dataset"], (await $.v(C, "DebetTransactionsDataDEBITAMOUNT")), (await $.v(C, "DebetTransactionsDataLAMOUNT")), (await $.v(C, "DebitAmountEdit")), (await $.v(C, "DebitLAmountEdit"))])));
  return L0.result;
}, {"params": ["DataSet"], "kind": "procedure", "ptypes": ["TDataSet"]});
  U.method("TFormAccountTransactions", "DebetTransactionsDataCalcFields", async function DebetTransactionsDataCalcFields(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"dataset": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["dataset"]);
  {
    const $t3 = L0["dataset"];
    await $.mset((await $.wcall([$t3], "FieldByName", ["DebitAccNo"], C)), "AsString", (await $.mv((await $.mcall((await $.mv((await $.wv([$t3], "out_accdatamodule", C, false)), "Account")), "FieldByName", ["acc_no"])), "AsString")));
  }
  return L0.result;
}, {"params": ["DataSet"], "kind": "procedure", "ptypes": ["TDataSet"]});
  U.method("TFormAccountTransactions", "CreditTransactionsDataAfterOpen", async function CreditTransactionsDataAfterOpen(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"dataset": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["dataset"]);
  await $.stmt((await $.call(C, "FillAmounts", [L0["dataset"], (await $.v(C, "CreditTransactionsDataCreditAMOUNT")), (await $.v(C, "CreditTransactionsDataLAMOUNT")), (await $.v(C, "CreditAmountEdit")), (await $.v(C, "CreditLAmountEdit"))])));
  return L0.result;
}, {"params": ["DataSet"], "kind": "procedure", "ptypes": ["TDataSet"]});
  U.method("TFormAccountTransactions", "CreditTransactionsDataCalcFields", async function CreditTransactionsDataCalcFields(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"dataset": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["dataset"]);
  {
    const $t4 = L0["dataset"];
    await $.mset((await $.wcall([$t4], "FieldByName", ["CreditAccNo"], C)), "AsString", (await $.mv((await $.mcall((await $.mv((await $.wv([$t4], "out_accdatamodule", C, false)), "Account")), "FieldByName", ["acc_no"])), "AsString")));
  }
  return L0.result;
}, {"params": ["DataSet"], "kind": "procedure", "ptypes": ["TDataSet"]});
  U.method("TFormAccountTransactions", "FillAmounts", async function FillAmounts(Self, p0, p1, p2, p3, p4) {
  const C = $.chain(Self, U);
  const L0 = {"dataset": $.copyArg(p0), "amountfield": $.copyArg(p1), "lamountfield": $.copyArg(p2), "amountedit": $.copyArg(p3), "lamountedit": $.copyArg(p4), result: undefined, "amount": 0, "lamount": 0};
  await $.fixArgs(L0, ["dataset", "amountfield", "lamountfield", "amountedit", "lamountedit"]);
  L0["amount"] = 0.0;
  L0["lamount"] = 0.0;
  {
    const $t5 = L0["dataset"];
    await $.stmt($.wcall([$t5], "DisableControls", [], C));
    try {
      while ($.truthy($.not((await $.wv([$t5], "Eof", C, false))))) {
        await $.wset([$t5], "Amount", $.add((await $.wv([$t5], "Amount", { get: async () => L0["amount"], set: async (v) => { L0["amount"] = v; }, local: true }, false)), (await $.mv((await $.wv([$t5], "AmountField", { get: async () => L0["amountfield"], set: async (v) => { L0["amountfield"] = v; }, local: true }, false)), "Value"))), { get: async () => L0["amount"], set: async (v) => { L0["amount"] = v; }, local: true });
        await $.wset([$t5], "LAmount", $.add((await $.wv([$t5], "LAmount", { get: async () => L0["lamount"], set: async (v) => { L0["lamount"] = v; }, local: true }, false)), (await $.mv((await $.wv([$t5], "LAmountField", { get: async () => L0["lamountfield"], set: async (v) => { L0["lamountfield"] = v; }, local: true }, false)), "Value"))), { get: async () => L0["lamount"], set: async (v) => { L0["lamount"] = v; }, local: true });
        await $.stmt($.wcall([$t5], "Next", [], C));
        await $.tick();
      }
    } finally {
      await $.stmt($.wcall([$t5], "EnableControls", [], C));
    }
  }
  await $.mset(L0["amountedit"], "Value", L0["amount"]);
  await $.mset(L0["lamountedit"], "Value", L0["lamount"]);
  return L0.result;
}, {"params": ["DataSet", "AmountField", "LAmountField", "AmountEdit", "LAmountEdit"], "kind": "procedure", "ptypes": ["TDataSet", "TField", "TField", "TCurrencyEdit", "TCurrencyEdit"]});
  U.method("TFormAccountTransactions", "SpeedButton1Click", async function SpeedButton1Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t6 = (await $.v(C, "AccTrExport"));
    if ($.truthy($.eq((await $.mv((await $.wv([$t6], "PageControlTrans", C, false)), "ActivePageIndex")), 0))) {
      await $.wset([$t6], "ExportSource", (await $.wv([$t6], "DebetTransactions", C, false)), C);
    } else {
      await $.wset([$t6], "ExportSource", (await $.wv([$t6], "CreditTransactions", C, false)), C);
    }
    await $.stmt($.wcall([$t6], "Report", [], C));
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFormAccountTransactions", "FormKeyDown", async function FormKeyDown(Self, p0, p1, p2) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "key": $.asRef(p1), "shift": $.copyArg(p2), result: undefined};
  await $.fixArgs(L0, ["sender", "shift"]);
  if ($.truthy($.eq((await $.call(C, "Ord", [(await L0["key"].get())])), (await $.v(C, "VK_ESCAPE"))))) {
    await $.stmt($.call(C, "Close", []));
  }
  return L0.result;
}, {"params": ["Sender", "Key", "Shift"], "kind": "procedure", "ptypes": ["TObject", "Word", "TShiftState"]});
  U.method("TFormAccountTransactions", "FormActivate", async function FormActivate(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  L0["cs_message"] = "Transactions for account \"%s\"";
  {
    const $t7 = (await $.mv((await $.v(C, "out_accdatamodule")), "Account"));
    await $.wset([$t7], "AccountNumber", (await $.mv((await $.wcall([$t7], "FieldByName", ["acc_no"], C)), "AsString")), C);
  }
  await $.set(C, "Caption", (await $.call(C, "Format", [L0["cs_message"], [(await $.v(C, "AccountNumber"))]])));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFormAccountTransactions", "FormCreate", async function FormCreate(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.stmt((await $.mcall((await $.v(C, "SBTranslateProc")), "TranslateAllCompForms", [Self, (await $.mv((await $.v(C, "sboapiDataModule")), "OrPack_SL"))])));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  return U;
}
