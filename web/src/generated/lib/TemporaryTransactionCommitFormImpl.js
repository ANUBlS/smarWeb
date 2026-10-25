// Generated from TemporaryTransactionCommitFormImpl.pas by pas2js — do not edit by hand; regenerate instead.
/* eslint-disable */
// @ts-nocheck

export default function define($) {
  const U = $.unit("TemporaryTransactionCommitFormImpl", ["Windows", "Messages", "SysUtils", "Classes", "Graphics", "Controls", "Forms", "Dialogs", "Grids", "DBGrids", "ExtCtrls", "Db", "OracleData", "StdCtrls", "ComCtrls", "Mask", "DBCtrls", "SBSystem", "sboapiDataModuleImpl", "SBTransaction"]);
  const C = [U];
  U.const("tfDebitAccNo", 0);
  U.const("tfDebitAccName", 1);
  U.const("tfCReditAccNo", 2);
  U.const("tfCreditAccName", 3);
  U.const("tfDebitAmount", 4);
  U.const("tfLAmount", 5);
  U.const("tfCreditAmount", 6);
  U.const("tfDebitRate", 7);
  U.const("tfCreditRate", 8);
  U.const("tfTrName", 9);
  U.defClass("TTemporaryTransactionCommitForm", "TForm", {"panel1": {"name": "Panel1", "type": "TPanel"}, "trgrid": {"name": "TrGrid", "type": "TDBGrid"}, "datasource1": {"name": "DataSource1", "type": "TDataSource"}, "commitbutton": {"name": "CommitButton", "type": "TButton"}, "cancelbutton": {"name": "CancelButton", "type": "TButton"}, "temptransactionsdata": {"name": "TempTransactionsData", "type": "TOracleDataSet"}, "progressbar1": {"name": "ProgressBar1", "type": "TProgressBar"}, "countpanel": {"name": "CountPanel", "type": "TPanel"}, "countlabel": {"name": "CountLabel", "type": "TLabel"}, "panel2": {"name": "Panel2", "type": "TPanel"}, "dbedit1": {"name": "DBEdit1", "type": "TDBEdit"}, "temptransactionsdatadebitid": {"name": "TempTransactionsDataDEBITID", "type": "TFloatField"}, "temptransactionsdatacreditid": {"name": "TempTransactionsDataCREDITID", "type": "TFloatField"}, "temptransactionsdatadebitamount": {"name": "TempTransactionsDataDEBITAMOUNT", "type": "TFloatField"}, "temptransactionsdatacreditamount": {"name": "TempTransactionsDataCREDITAMOUNT", "type": "TFloatField"}, "temptransactionsdatalamount": {"name": "TempTransactionsDataLAMOUNT", "type": "TFloatField"}, "temptransactionsdatadebitrate": {"name": "TempTransactionsDataDEBITRATE", "type": "TFloatField"}, "temptransactionsdatacreditrate": {"name": "TempTransactionsDataCREDITRATE", "type": "TFloatField"}, "temptransactionsdatatrname": {"name": "TempTransactionsDataTRNAME", "type": "TWideStringField"}, "temptransactionsdatadebitaccno": {"name": "TempTransactionsDataDEBITACCNO", "type": "TWideStringField"}, "temptransactionsdatacreditaccno": {"name": "TempTransactionsDataCREDITACCNO", "type": "TWideStringField"}, "temptransactionsdatadebitaccname": {"name": "TempTransactionsDataDEBITACCNAME", "type": "TWideStringField"}, "temptransactionsdatacreditaccname": {"name": "TempTransactionsDataCREDITACCNAME", "type": "TWideStringField"}, "fcommited": {"name": "FCommited", "type": "Boolean"}, "fapplied": {"name": "FApplied", "type": "Boolean"}, "fapply": {"name": "FApply", "type": "Boolean"}, "fstepbystep": {"name": "FStepByStep", "type": "Boolean"}, "ftempid": {"name": "FTempID", "type": "Integer"}, "ftransactionscount": {"name": "FTransactionsCount", "type": "Integer"}}, {"transactionscount": {"name": "TransactionsCount", "read": "FTransactionsCount"}});
  U.init(async () => {
    U.const("FilterNone", [(await $.v(C, "tfDebitAccNo")), (await $.v(C, "tfDebitAccName")), (await $.v(C, "tfCReditAccNo")), (await $.v(C, "tfCreditAccName")), (await $.v(C, "tfDebitAmount")), (await $.v(C, "tfLAmount")), (await $.v(C, "tfDebitRate")), (await $.v(C, "tfCreditRate")), (await $.v(C, "tfTrName"))]);
    U.var_("TemporaryTransactionCommitForm", null, "TTemporaryTransactionCommitForm");
  });
  U.method("TTemporaryTransactionCommitForm", "Execute", async function Execute(Self, p0, p1, p2, p3, p4) {
  const C = $.chain(Self, U);
  const L0 = {"tempid": $.copyArg(p0), "title": $.copyArg(p1), "stepbystep": (p2 === undefined ? true : p2), "apply": (p3 === undefined ? true : p3), "filters": (p4 === undefined ? (await $.v(C, "FilterNone")) : p4), result: false};
  await $.fixArgs(L0, ["tempid", "title", "stepbystep", "apply", "filters"]);
  await $.set(C, "Caption", L0["title"]);
  {
    const $t1 = (await $.v(C, "TempTransactionsData"));
    await $.stmt($.wcall([$t1], "Close", [], C));
    {
      const $t2 = (await $.wv([$t1], "Variables", C, false));
      await $.stmt((await $.wcall([$t1, $t2], "SetVariable", ["TempID", (await $.wv([$t1, $t2], "TempID", { get: async () => L0["tempid"], set: async (v) => { L0["tempid"] = v; }, local: true }, false))], C)));
    }
    await $.stmt($.wcall([$t1], "Open", [], C));
    await $.mset((await $.wv([$t1], "TempTransactionsDataDebitAccNo", C, false)), "Visible", $.in_((await $.wv([$t1], "tfDebitAccNo", C, false)), (await $.wv([$t1], "Filters", { get: async () => L0["filters"], set: async (v) => { L0["filters"] = v; }, local: true }, false))));
    await $.mset((await $.wv([$t1], "TempTransactionsDataCreditAccNo", C, false)), "Visible", $.in_((await $.wv([$t1], "tfCreditAccNo", C, false)), (await $.wv([$t1], "Filters", { get: async () => L0["filters"], set: async (v) => { L0["filters"] = v; }, local: true }, false))));
    await $.mset((await $.wv([$t1], "TempTransactionsDataDebitAccName", C, false)), "Visible", $.in_((await $.wv([$t1], "tfDebitAccName", C, false)), (await $.wv([$t1], "Filters", { get: async () => L0["filters"], set: async (v) => { L0["filters"] = v; }, local: true }, false))));
    await $.mset((await $.wv([$t1], "TempTransactionsDataCreditAccName", C, false)), "Visible", $.in_((await $.wv([$t1], "tfCreditAccName", C, false)), (await $.wv([$t1], "Filters", { get: async () => L0["filters"], set: async (v) => { L0["filters"] = v; }, local: true }, false))));
    await $.mset((await $.wv([$t1], "TempTransactionsDataDebitAmount", C, false)), "Visible", $.in_((await $.wv([$t1], "tfDebitAmount", C, false)), (await $.wv([$t1], "Filters", { get: async () => L0["filters"], set: async (v) => { L0["filters"] = v; }, local: true }, false))));
    await $.mset((await $.wv([$t1], "TempTransactionsDataCreditAmount", C, false)), "Visible", $.in_((await $.wv([$t1], "tfCreditAmount", C, false)), (await $.wv([$t1], "Filters", { get: async () => L0["filters"], set: async (v) => { L0["filters"] = v; }, local: true }, false))));
    await $.mset((await $.wv([$t1], "TempTransactionsDataLAmount", C, false)), "Visible", $.in_((await $.wv([$t1], "tfLAmount", C, false)), (await $.wv([$t1], "Filters", { get: async () => L0["filters"], set: async (v) => { L0["filters"] = v; }, local: true }, false))));
    await $.mset((await $.wv([$t1], "TempTransactionsDataDebitRate", C, false)), "Visible", $.in_((await $.wv([$t1], "tfDebitRate", C, false)), (await $.wv([$t1], "Filters", { get: async () => L0["filters"], set: async (v) => { L0["filters"] = v; }, local: true }, false))));
    await $.mset((await $.wv([$t1], "TempTransactionsDataCreditRate", C, false)), "Visible", $.in_((await $.wv([$t1], "tfCreditRate", C, false)), (await $.wv([$t1], "Filters", { get: async () => L0["filters"], set: async (v) => { L0["filters"] = v; }, local: true }, false))));
    await $.mset((await $.wv([$t1], "TempTransactionsDataTrName", C, false)), "Visible", $.in_((await $.wv([$t1], "tfTrName", C, false)), (await $.wv([$t1], "Filters", { get: async () => L0["filters"], set: async (v) => { L0["filters"] = v; }, local: true }, false))));
  }
  await $.set(C, "FCommited", false);
  await $.set(C, "FApplied", false);
  await $.set(C, "FTempID", L0["tempid"]);
  await $.set(C, "FApply", L0["apply"]);
  await $.set(C, "FStepByStep", L0["stepbystep"]);
  await $.stmt($.call(C, "ShowModal", []));
  L0["result"] = (await $.and_((await $.v(C, "FCommited")), async () => ((await $.or_(($.not(L0["apply"])), async () => (await $.v(C, "FApplied")))))));
  return L0.result;
}, {"params": ["TempID", "Title", "StepByStep", "Apply", "Filters"], "kind": "function", "ptypes": ["Integer", "String", "Boolean", "Boolean", "TTempTransactionFilters"]});
  U.method("TTemporaryTransactionCommitForm", "CommitButtonClick", async function CommitButtonClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.set(C, "FCommited", true);
  if ($.truthy((await $.v(C, "FApply")))) {
    if ($.truthy((await $.v(C, "FStepByStep")))) {
    } else {
      await $.set(C, "FTransactionsCount", (await $.call(C, "Sb_TransactionsTempCommit", [(await $.v(C, "FTempID"))])));
    }
    await $.set(C, "FApplied", true);
  }
  await $.stmt($.call(C, "Close", []));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TTemporaryTransactionCommitForm", "CancelButtonClick", async function CancelButtonClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.stmt($.call(C, "Close", []));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TTemporaryTransactionCommitForm", "FormClose", async function FormClose(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "action": $.asRef(p1), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  return L0.result;
}, {"params": ["Sender", "Action"], "kind": "procedure", "ptypes": ["TObject", "TCloseAction"]});
  U.method("TTemporaryTransactionCommitForm", "TempTransactionsDataAfterOpen", async function TempTransactionsDataAfterOpen(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"dataset": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["dataset"]);
  await $.mset((await $.v(C, "CountLabel")), "Caption", (await $.call(C, "Format", ["Sayı: %d", [(await $.mv(L0["dataset"], "RecordCount"))]])));
  return L0.result;
}, {"params": ["DataSet"], "kind": "procedure", "ptypes": ["TDataSet"]});
  U.method("TTemporaryTransactionCommitForm", "FormCloseQuery", async function FormCloseQuery(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "canclose": $.asRef(p1), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  L0["abandonetransactionsprompt"] = "Sənədlər əməliyyat gününə daxil olmayacaq. Razısınız?";
  await L0["canclose"].set((await $.or_((await $.v(C, "FCommited")), async () => ($.eq((await $.call(C, "MessageDlg", [L0["abandonetransactionsprompt"], (await $.v(C, "mtConfirmation")), [(await $.v(C, "mbYes")), (await $.v(C, "mbNo"))], 0])), (await $.v(C, "mrYes")))))));
  return L0.result;
}, {"params": ["Sender", "CanClose"], "kind": "procedure", "ptypes": ["TObject", "Boolean"]});
  U.method("TTemporaryTransactionCommitForm", "FormKeyPress", async function FormKeyPress(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "key": $.asRef(p1), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.eq((await $.call(C, "Ord", [(await L0["key"].get())])), (await $.v(C, "VK_ESCAPE"))))) {
    await $.stmt($.call(C, "Close", []));
  }
  return L0.result;
}, {"params": ["Sender", "Key"], "kind": "procedure", "ptypes": ["TObject", "Char"]});
  return U;
}
