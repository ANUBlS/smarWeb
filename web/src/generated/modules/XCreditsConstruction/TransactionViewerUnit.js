// Generated from TransactionViewerUnit.pas by pas2js — do not edit by hand; regenerate instead.
/* eslint-disable */
// @ts-nocheck

export default function define($) {
  const U = $.unit("TransactionViewerUnit", ["Windows", "Messages", "SysUtils", "Classes", "Graphics", "Controls", "Forms", "Dialogs", "Db", "ImgList", "OracleData", "Grids", "DBGridEh", "StdCtrls", "Mask", "DBCtrlsEh", "ExtCtrls", "sboapiDataModuleImpl", "DatModConstructionImpl", "OrderMgrUnit"]);
  const C = [U];
  U.defClass("TTransactionviewForm", "TForm", {"panel1": {"name": "Panel1", "type": "TPanel"}, "buttoncommit": {"name": "ButtonCommit", "type": "TButton"}, "buttondismis": {"name": "ButtonDismis", "type": "TButton"}, "panel2": {"name": "Panel2", "type": "TPanel"}, "dbediteh1": {"name": "DBEditEh1", "type": "TDBEditEh"}, "dbgridtransactions": {"name": "DBGridTransactions", "type": "TDBGridEh"}, "transactions": {"name": "Transactions", "type": "TOracleDataSet"}, "statusimages": {"name": "StatusImages", "type": "TImageList"}, "datasrctransactions": {"name": "DataSrcTransactions", "type": "TDataSource"}, "transactionsdebitaccno": {"name": "TransactionsDEBITACCNO", "type": "TWideStringField"}, "transactionsdebitcurrency": {"name": "TransactionsDEBITCURRENCY", "type": "TWideStringField"}, "transactionscreditaccno": {"name": "TransactionsCREDITACCNO", "type": "TWideStringField"}, "transactionscreditcurrency": {"name": "TransactionsCREDITCURRENCY", "type": "TWideStringField"}, "transactionstrdate": {"name": "TransactionsTRDATE", "type": "TDateTimeField"}, "transactionsinbalancechar": {"name": "TransactionsINBALANCECHAR", "type": "TWideStringField"}, "transactionsflags": {"name": "TransactionsFLAGS", "type": "TFloatField"}, "transactionsdebitamount": {"name": "TransactionsDEBITAMOUNT", "type": "TFloatField"}, "transactionscreditamount": {"name": "TransactionsCREDITAMOUNT", "type": "TFloatField"}, "transactionsnatamount": {"name": "TransactionsNATAMOUNT", "type": "TFloatField"}, "transactionstrdescription": {"name": "TransactionsTRDESCRIPTION", "type": "TWideStringField"}, "transactionscanprocess": {"name": "TransactionsCANPROCESS", "type": "TFloatField"}, "fcommittransactions": {"name": "FCommitTransactions", "type": "Boolean"}}, {});
  U.init(async () => {
    U.var_("TransactionviewForm", null, "TTransactionviewForm");
  });
  U.method("TTransactionviewForm", "ButtonCommitClick", async function ButtonCommitClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.set(C, "FCommitTransactions", true);
  await $.set(C, "ModalResult", (await $.v(C, "mrOk")));
  await $.mcall((await $.mv((await $.v(C, "DatModConstruction")), "PaySumDataSet")), "Refresh", []);
  await $.mcall((await $.mv((await $.v(C, "DatModConstruction")), "cc_sum_cols_payments")), "Refresh", []);
  await $.mset((await $.mv((await $.v(C, "OrderForm")), "Edit2")), "Text", (await $.mv((await $.mcall((await $.mv((await $.v(C, "DatModConstruction")), "cc_sum_cols_payments")), "FieldByName", ["SUM(PAYAMT)"])), "AsString")));
  await $.mset((await $.mv((await $.v(C, "OrderForm")), "Edit1")), "Text", (await $.mv((await $.mcall((await $.mv((await $.v(C, "DatModConstruction")), "Credits")), "FieldByName", ["CREDITAMOUNT"])), "AsString")));
  await $.mset((await $.mv((await $.v(C, "OrderForm")), "Edit3")), "Text", (await $.call(C, "FloatToStr", [$.sub((await $.mv((await $.mcall((await $.mv((await $.v(C, "DatModConstruction")), "Credits")), "FieldByName", ["CREDITAMOUNT"])), "AsFloat")), (await $.mv((await $.mcall((await $.mv((await $.v(C, "DatModConstruction")), "cc_sum_cols_payments")), "FieldByName", ["SUM(PAYAMT)"])), "AsFloat")))])));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TTransactionviewForm", "FormCreate", async function FormCreate(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t1 = (await $.v(C, "Transactions"));
    if ($.truthy((await $.wv([$t1], "Active", C, false)))) {
      await $.stmt($.wcall([$t1], "close", [], C));
    }
    await $.stmt($.wcall([$t1], "Open", [], C));
  }
  await $.set(C, "FCommitTransactions", false);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TTransactionviewForm", "FormDestroy", async function FormDestroy(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mcall((await $.v(C, "Transactions")), "Close", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TTransactionviewForm", "FormCanResize", async function FormCanResize(Self, p0, p1, p2, p3) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "newwidth": $.asRef(p1), "newheight": $.asRef(p2), "resize": $.asRef(p3), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await L0["resize"].set(false);
  return L0.result;
}, {"params": ["Sender", "NewWidth", "NewHeight", "Resize"], "kind": "procedure", "ptypes": ["TObject", "Integer", "Integer", "Boolean"]});
  U.method("TTransactionviewForm", "FormKeyPress", async function FormKeyPress(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "key": $.asRef(p1), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.eq((await $.call(C, "ord", [(await L0["key"].get())])), (await $.v(C, "VK_ESCAPE"))))) {
    await $.stmt($.call(C, "close", []));
  }
  return L0.result;
}, {"params": ["Sender", "Key"], "kind": "procedure", "ptypes": ["TObject", "Char"]});
  U.method("TTransactionviewForm", "TransactionsCalcFields", async function TransactionsCalcFields(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"dataset": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["dataset"]);
  {
    const $t2 = L0["dataset"];
    if ($.truthy($.not((await $.mv((await $.wcall([$t2], "FieldByName", ["DEBITAMOUNT"], C)), "IsNull"))))) {
      await $.mset((await $.wcall([$t2], "FieldByName", ["TrAmount"], C)), "AsFloat", (await $.mv((await $.wcall([$t2], "FieldByName", ["DEBITAMOUNT"], C)), "AsFloat")));
    } else {
      await $.mset((await $.wcall([$t2], "FieldByName", ["TrAmount"], C)), "AsFloat", (await $.mv((await $.wcall([$t2], "FieldByName", ["CREDITAMOUNT"], C)), "AsFloat")));
    }
  }
  return L0.result;
}, {"params": ["DataSet"], "kind": "procedure", "ptypes": ["TDataSet"]});
  U.method("TTransactionviewForm", "FormClose", async function FormClose(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "action": $.asRef(p1), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.stmt($.call(C, "update", []));
  return L0.result;
}, {"params": ["Sender", "Action"], "kind": "procedure", "ptypes": ["TObject", "TCloseAction"]});
  U.method("TTransactionviewForm", "FormCloseQuery", async function FormCloseQuery(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "canclose": $.asRef(p1), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  L0["scanceltransactions"] = "Əməliyyat aparılmayacaq! Əminsiniz?";
  await L0["canclose"].set((await $.or_((await $.v(C, "FCommitTransactions")), async () => ($.eq((await $.call(C, "MessageDlg", [L0["scanceltransactions"], (await $.v(C, "mtWarning")), [(await $.v(C, "mbYes")), (await $.v(C, "mbNo"))], 0])), (await $.v(C, "mrYes")))))));
  return L0.result;
}, {"params": ["Sender", "CanClose"], "kind": "procedure", "ptypes": ["TObject", "Boolean"]});
  U.method("TTransactionviewForm", "DBGridTransactionsDrawColumnCell", async function DBGridTransactionsDrawColumnCell(Self, p0, p1, p2, p3, p4) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "rect": $.copyArg(p1), "datacol": $.copyArg(p2), "column": $.copyArg(p3), "state": $.copyArg(p4), result: undefined};
  await $.fixArgs(L0, ["sender", "rect", "datacol", "column", "state"]);
  L0["datacolindex"] = 1;
  {
    const $t3 = L0["sender"];
    if ($.truthy($.ne((await $.mv((await $.mv((await $.wv([$t3], "DataSource", C, false)), "DataSet")), "RecordCount")), 0))) {
      if ($.truthy(($.eq((await $.wv([$t3], "DataCol", { get: async () => L0["datacol"], set: async (v) => { L0["datacol"] = v; }, local: true }, false)), (await $.wv([$t3], "DataColIndex", { get: async () => L0["datacolindex"], set: async (v) => { L0["datacolindex"] = v; }, local: true }, false)))))) {
        await $.mset((await $.mv((await $.wv([$t3], "Canvas", C, false)), "Brush")), "Color", (await $.wv([$t3], "clSilver", C, false)));
        await $.stmt((await $.mcall((await $.wv([$t3], "StatusImages", C, false)), "Draw", [(await $.wv([$t3], "Canvas", C, false)), (await $.mv((await $.wv([$t3], "Rect", { get: async () => L0["rect"], set: async (v) => { L0["rect"] = v; }, local: true }, false)), "Left")), (await $.mv((await $.wv([$t3], "Rect", { get: async () => L0["rect"], set: async (v) => { L0["rect"] = v; }, local: true }, false)), "Top")), (await $.mv((await $.mcall((await $.mv((await $.wv([$t3], "DataSource", C, false)), "DataSet")), "FieldByName", ["CANPROCESS"])), "AsInteger")), (await $.wv([$t3], "True", C, false))])));
      } else {
        await $.stmt((await $.wcall([$t3], "DefaultDrawColumnCell", [(await $.wv([$t3], "Rect", { get: async () => L0["rect"], set: async (v) => { L0["rect"] = v; }, local: true }, false)), (await $.wv([$t3], "DataCol", { get: async () => L0["datacol"], set: async (v) => { L0["datacol"] = v; }, local: true }, false)), (await $.wv([$t3], "Column", { get: async () => L0["column"], set: async (v) => { L0["column"] = v; }, local: true }, false)), (await $.wv([$t3], "State", { get: async () => L0["state"], set: async (v) => { L0["state"] = v; }, local: true }, false))], C)));
      }
    }
  }
  return L0.result;
}, {"params": ["Sender", "Rect", "DataCol", "Column", "State"], "kind": "procedure", "ptypes": ["TObject", "TRect", "Integer", "TColumnEh", "TGridDrawState"]});
  return U;
}
