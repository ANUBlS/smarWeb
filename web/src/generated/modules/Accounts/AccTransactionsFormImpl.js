// Generated from AccTransactionsFormImpl.pas by pas2js — do not edit by hand; regenerate instead.
/* eslint-disable */
// @ts-nocheck

export default function define($) {
  const U = $.unit("AccTransactionsFormImpl", ["Windows", "Messages", "SysUtils", "Classes", "Graphics", "Controls", "Forms", "Dialogs", "ComCtrls", "Grids", "DBGrids", "Db", "OracleData", "ToolWin", "StdCtrls", "CurrencyEdit", "ExtCtrls", "Mask", "DBCtrls", "ExcelExporter", "AccountDataModuleImpl", "sboapiDataModuleiMPL", "StartEndDateInputImpl", "SBCore"]);
  const C = [U];
  U.defClass("TAccTransactionsForm", "TForm", {"transactionspagecontrol": {"name": "TransactionsPageControl", "type": "TPageControl"}, "debittrsheet": {"name": "DebitTrSheet", "type": "TTabSheet"}, "credittrsheet": {"name": "CreditTrSheet", "type": "TTabSheet"}, "debittransactionsgrid": {"name": "DebitTransactionsGrid", "type": "TDBGrid"}, "debittransactions": {"name": "DebitTransactions", "type": "TDataSource"}, "panel1": {"name": "Panel1", "type": "TPanel"}, "label1": {"name": "Label1", "type": "TLabel"}, "debitamountedit": {"name": "DebitAmountEdit", "type": "TCurrencyEdit"}, "label2": {"name": "Label2", "type": "TLabel"}, "debitlamountedit": {"name": "DebitLAmountEdit", "type": "TCurrencyEdit"}, "bevel1": {"name": "Bevel1", "type": "TBevel"}, "panel2": {"name": "Panel2", "type": "TPanel"}, "dbedit1": {"name": "DBEdit1", "type": "TDBEdit"}, "panel3": {"name": "Panel3", "type": "TPanel"}, "okbutton": {"name": "OkButton", "type": "TButton"}, "credittransactions": {"name": "CreditTransactions", "type": "TDataSource"}, "credittransactionsdata": {"name": "CreditTransactionsData", "type": "TOracleDataSet"}, "integerfield1": {"name": "IntegerField1", "type": "TIntegerField"}, "credittransactionsdatacreditaccid": {"name": "CreditTransactionsDataCREDITACCID", "type": "TFloatField"}, "credittransactionsdataoperationdate": {"name": "CreditTransactionsDataOPERATIONDATE", "type": "TDateTimeField"}, "credittransactionsdatadebitamount": {"name": "CreditTransactionsDataDEBITAMOUNT", "type": "TFloatField"}, "credittransactionsdatacreditamount": {"name": "CreditTransactionsDataCREDITAMOUNT", "type": "TFloatField"}, "credittransactionsdatalamount": {"name": "CreditTransactionsDataLAMOUNT", "type": "TFloatField"}, "credittransactionsdatadebitaccno": {"name": "CreditTransactionsDataDEBITACCNO", "type": "TStringField"}, "credittransactionsdatadestination": {"name": "CreditTransactionsDataDESTINATION", "type": "TStringField"}, "credittransactionsdatacreditaccno": {"name": "CreditTransactionsDataCreditAccNo", "type": "TStringField"}, "dbgrid1": {"name": "DBGrid1", "type": "TDBGrid"}, "panel4": {"name": "Panel4", "type": "TPanel"}, "dbedit2": {"name": "DBEdit2", "type": "TDBEdit"}, "panel5": {"name": "Panel5", "type": "TPanel"}, "label3": {"name": "Label3", "type": "TLabel"}, "label4": {"name": "Label4", "type": "TLabel"}, "bevel2": {"name": "Bevel2", "type": "TBevel"}, "creditamountedit": {"name": "CreditAmountEdit", "type": "TCurrencyEdit"}, "creditlamountedit": {"name": "CreditLAmountEdit", "type": "TCurrencyEdit"}, "startdateedit": {"name": "StartDateEdit", "type": "TDateTimePicker"}, "enddateedit": {"name": "EndDateEdit", "type": "TDateTimePicker"}, "debittransactionsdata": {"name": "DebitTransactionsData", "type": "TOracleDataSet"}, "debittransactionsdatadebitaccid": {"name": "DebitTransactionsDataDEBITACCID", "type": "TFloatField"}, "debittransactionsdataoperationdate": {"name": "DebitTransactionsDataOPERATIONDATE", "type": "TDateTimeField"}, "debittransactionsdatadebitamount": {"name": "DebitTransactionsDataDEBITAMOUNT", "type": "TFloatField"}, "debittransactionsdatacreditamount": {"name": "DebitTransactionsDataCREDITAMOUNT", "type": "TFloatField"}, "debittransactionsdatalamount": {"name": "DebitTransactionsDataLAMOUNT", "type": "TFloatField"}, "debittransactionsdatacreditaccno": {"name": "DebitTransactionsDataCREDITACCNO", "type": "TStringField"}, "debittransactionsdatadestination": {"name": "DebitTransactionsDataDESTINATION", "type": "TStringField"}, "debittransactionsdatarownumber": {"name": "DebitTransactionsDataRowNumber", "type": "TIntegerField"}, "debittransactionsdatadebitaccno": {"name": "DebitTransactionsDataDebitAccNo", "type": "TStringField"}, "debittransactionsdataid": {"name": "DebitTransactionsDataID", "type": "TFloatField"}, "credittransactionsdataid": {"name": "CreditTransactionsDataID", "type": "TFloatField"}, "label5": {"name": "Label5", "type": "TLabel"}, "label6": {"name": "Label6", "type": "TLabel"}, "acctrexport": {"name": "AccTrExport", "type": "TExcelExporter"}, "fstartdate": {"name": "FStartDate", "type": "TDateTime"}, "fenddate": {"name": "FEndDate", "type": "TDateTime"}}, {"startdate": {"name": "StartDate", "index": ["num", 0], "read": "FStartDate", "write": "SetBorderDate"}, "enddate": {"name": "EndDate", "index": ["num", 1], "read": "FEndDate", "write": "SetBorderDate"}});
  U.init(async () => {
    U.var_("AccTransactionsForm", null, "TAccTransactionsForm");
  });
  U.method("TAccTransactionsForm", "DebitTransactionsDataCalcFields", async function DebitTransactionsDataCalcFields(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"dataset": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["dataset"]);
  {
    const $t1 = L0["dataset"];
    await $.mset((await $.wcall([$t1], "FieldByName", ["DebitAccNo"], C)), "AsString", (await $.mv((await $.mcall((await $.mv((await $.mv((await $.wv([$t1], "AccountDataModule", C, false)), "Accounts")), "DataSet")), "FieldByName", ["AccNo"])), "AsString")));
  }
  return L0.result;
}, {"params": ["DataSet"], "kind": "procedure", "ptypes": ["TDataSet"]});
  U.method("TAccTransactionsForm", "OkButtonClick", async function OkButtonClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.stmt($.call(C, "Close", []));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TAccTransactionsForm", "CreditTransactionsDataCalcFields", async function CreditTransactionsDataCalcFields(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"dataset": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["dataset"]);
  {
    const $t2 = L0["dataset"];
    await $.mset((await $.wcall([$t2], "FieldByName", ["CreditAccNo"], C)), "AsString", (await $.mv((await $.mcall((await $.mv((await $.mv((await $.wv([$t2], "AccountDataModule", C, false)), "Accounts")), "DataSet")), "FieldByName", ["AccNo"])), "AsString")));
  }
  return L0.result;
}, {"params": ["DataSet"], "kind": "procedure", "ptypes": ["TDataSet"]});
  U.method("TAccTransactionsForm", "DebitTransactionsDataAfterOpen", async function DebitTransactionsDataAfterOpen(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"dataset": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["dataset"]);
  await $.stmt((await $.call(C, "FillAmounts", [L0["dataset"], (await $.v(C, "DebitTransactionsDataDEBITAMOUNT")), (await $.v(C, "DebitTransactionsDataLAMOUNT")), (await $.v(C, "DebitAmountEdit")), (await $.v(C, "DebitLAmountEdit"))])));
  return L0.result;
}, {"params": ["DataSet"], "kind": "procedure", "ptypes": ["TDataSet"]});
  U.method("TAccTransactionsForm", "FillAmounts", async function FillAmounts(Self, p0, p1, p2, p3, p4) {
  const C = $.chain(Self, U);
  const L0 = {"dataset": $.copyArg(p0), "amountfield": $.copyArg(p1), "lamountfield": $.copyArg(p2), "amountedit": $.copyArg(p3), "lamountedit": $.copyArg(p4), result: undefined, "amount": 0, "lamount": 0};
  await $.fixArgs(L0, ["dataset", "amountfield", "lamountfield", "amountedit", "lamountedit"]);
  L0["amount"] = 0.0;
  L0["lamount"] = 0.0;
  {
    const $t3 = L0["dataset"];
    await $.stmt($.wcall([$t3], "DisableControls", [], C));
    try {
      while ($.truthy($.not((await $.wv([$t3], "Eof", C, false))))) {
        await $.wset([$t3], "Amount", $.add((await $.wv([$t3], "Amount", { get: async () => L0["amount"], set: async (v) => { L0["amount"] = v; }, local: true }, false)), (await $.mv((await $.wv([$t3], "AmountField", { get: async () => L0["amountfield"], set: async (v) => { L0["amountfield"] = v; }, local: true }, false)), "Value"))), { get: async () => L0["amount"], set: async (v) => { L0["amount"] = v; }, local: true });
        await $.wset([$t3], "LAmount", $.add((await $.wv([$t3], "LAmount", { get: async () => L0["lamount"], set: async (v) => { L0["lamount"] = v; }, local: true }, false)), (await $.mv((await $.wv([$t3], "LAmountField", { get: async () => L0["lamountfield"], set: async (v) => { L0["lamountfield"] = v; }, local: true }, false)), "Value"))), { get: async () => L0["lamount"], set: async (v) => { L0["lamount"] = v; }, local: true });
        await $.stmt($.wcall([$t3], "Next", [], C));
        await $.tick();
      }
    } finally {
      await $.stmt($.wcall([$t3], "EnableControls", [], C));
    }
  }
  await $.mset(L0["amountedit"], "Value", L0["amount"]);
  await $.mset(L0["lamountedit"], "Value", L0["lamount"]);
  return L0.result;
}, {"params": ["DataSet", "AmountField", "LAmountField", "AmountEdit", "LAmountEdit"], "kind": "procedure", "ptypes": ["TDataSet", "TField", "TField", "TCurrencyEdit", "TCurrencyEdit"]});
  U.method("TAccTransactionsForm", "SetBorderDate", async function SetBorderDate(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"index": $.copyArg(p0), "value": $.copyArg(p1), result: undefined, "varname": ''};
  await $.fixArgs(L0, ["index", "value"]);
  { const $t4 = L0["index"];
    if ($.eq($t4, 0)) {
      L0["varname"] = "StartDate";
      await $.mset((await $.v(C, "StartDateEdit")), "DateTime", L0["value"]);
    }
    else if ($.eq($t4, 1)) {
      L0["varname"] = "EndDate";
      await $.mset((await $.v(C, "EndDateEdit")), "DateTime", L0["value"]);
    }
  }
  await $.stmt((await $.mcall((await $.v(C, "DebitTransactionsData")), "SetVariable", [L0["varname"], L0["value"]])));
  await $.stmt((await $.mcall((await $.v(C, "CreditTransactionsData")), "SetVariable", [L0["varname"], L0["value"]])));
  return L0.result;
}, {"params": ["Index", "Value"], "kind": "procedure", "ptypes": ["Integer", "TDateTime"]});
  U.method("TAccTransactionsForm", "CreditTransactionsDataAfterOpen", async function CreditTransactionsDataAfterOpen(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"dataset": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["dataset"]);
  await $.stmt((await $.call(C, "FillAmounts", [L0["dataset"], (await $.v(C, "CreditTransactionsDataCreditAMOUNT")), (await $.v(C, "CreditTransactionsDataLAMOUNT")), (await $.v(C, "CreditAmountEdit")), (await $.v(C, "CreditLAmountEdit"))])));
  return L0.result;
}, {"params": ["DataSet"], "kind": "procedure", "ptypes": ["TDataSet"]});
  U.method("TAccTransactionsForm", "StartDateEditChange", async function StartDateEditChange(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.set(C, "StartDate", (await $.mv((L0["sender"]), "DateTime")));
  await $.stmt($.call(C, "RefreshTransactions", []));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TAccTransactionsForm", "EndDateEditChange", async function EndDateEditChange(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.set(C, "EndDate", (await $.mv((L0["sender"]), "DateTime")));
  await $.stmt($.call(C, "RefreshTransactions", []));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TAccTransactionsForm", "RefreshTransactions", async function RefreshTransactions(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: undefined};
  L0["reopen"] = $.fn(async function ReOpen(p0) {
  const L1 = {"dataset": $.copyArg(p0), result: undefined};
  await $.fixArgs(L1, ["dataset"]);
  {
    const $t5 = L1["dataset"];
    await $.stmt($.wcall([$t5], "Close", [], C));
    await $.stmt($.wcall([$t5], "Open", [], C));
  }
  return L1.result;
});
  await $.stmt((await $.callv(L0["reopen"], [(await $.v(C, "DebitTransactionsData"))])));
  await $.stmt((await $.callv(L0["reopen"], [(await $.v(C, "CreditTransactionsData"))])));
  if ($.truthy((await $.and_(($.eq((await $.mv((await $.v(C, "DebitTransactionsData")), "RecordCount")), 0)), async () => ($.ne((await $.mv((await $.v(C, "CreditTransactionsData")), "RecordCount")), 0)))))) {
    await $.mset((await $.v(C, "TransactionsPageControl")), "ActivePageIndex", 1);
  }
  return L0.result;
}, {"params": [], "kind": "procedure", "ptypes": []});
  U.method("TAccTransactionsForm", "FormActivate", async function FormActivate(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.stmt($.call(C, "RefreshTransactions", []));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TAccTransactionsForm", "FormKeyPress", async function FormKeyPress(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "key": $.asRef(p1), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.eq((await $.call(C, "Ord", [(await L0["key"].get())])), (await $.v(C, "VK_ESCAPE"))))) {
    await $.stmt($.call(C, "Close", []));
  }
  return L0.result;
}, {"params": ["Sender", "Key"], "kind": "procedure", "ptypes": ["TObject", "Char"]});
  U.method("TAccTransactionsForm", "FormKeyDown", async function FormKeyDown(Self, p0, p1, p2) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "key": $.asRef(p1), "shift": $.copyArg(p2), result: undefined};
  await $.fixArgs(L0, ["sender", "shift"]);
  if ($.truthy($.eq((await L0["key"].get()), (await $.v(C, "VK_F3"))))) {
    {
      const $t6 = (await $.v(C, "AccTrExport"));
      if ($.truthy($.eq((await $.mv((await $.wv([$t6], "TransactionsPageControl", C, false)), "ActivePageIndex")), 0))) {
        await $.wset([$t6], "ExportSource", (await $.wv([$t6], "DebitTransactions", C, false)), C);
      } else {
        await $.wset([$t6], "ExportSource", (await $.wv([$t6], "CreditTransactions", C, false)), C);
      }
      await $.stmt($.wcall([$t6], "Report", [], C));
    }
  }
  return L0.result;
}, {"params": ["Sender", "Key", "Shift"], "kind": "procedure", "ptypes": ["TObject", "Word", "TShiftState"]});
  return U;
}
