// Generated from TransactionviewFormImpl.pas by pas2js — do not edit by hand; regenerate instead.
/* eslint-disable */
// @ts-nocheck

export default function define($) {
  const U = $.unit("TransactionviewFormImpl", ["Windows", "Messages", "SysUtils", "Variants", "Classes", "Graphics", "Controls", "Forms", "Dialogs", "ImgList", "DB", "OracleData", "Grids", "DBGridEh", "StdCtrls", "Mask", "DBCtrlsEh", "ExtCtrls", "PayForm", "OrderImpl", "OrderPayRepFrm", "CC_CashOperationImpl", "CC_CashOperationMgr_TLB", "cc_DataMod_CashOper", "CurrencyToHR_Azeri_Impl"]);
  const C = [U];
  U.defClass("TTransactionviewForm", "TForm", {"panel1": {"name": "Panel1", "type": "TPanel"}, "buttoncommit": {"name": "ButtonCommit", "type": "TButton"}, "buttondismis": {"name": "ButtonDismis", "type": "TButton"}, "panel2": {"name": "Panel2", "type": "TPanel"}, "dbediteh1": {"name": "DBEditEh1", "type": "TDBEditEh"}, "dbgridtransactions": {"name": "DBGridTransactions", "type": "TDBGridEh"}, "transactions": {"name": "Transactions", "type": "TOracleDataSet"}, "transactionsdebitaccno": {"name": "TransactionsDEBITACCNO", "type": "TWideStringField"}, "transactionsdebitcurrency": {"name": "TransactionsDEBITCURRENCY", "type": "TWideStringField"}, "transactionscreditaccno": {"name": "TransactionsCREDITACCNO", "type": "TWideStringField"}, "transactionscreditcurrency": {"name": "TransactionsCREDITCURRENCY", "type": "TWideStringField"}, "transactionstrdate": {"name": "TransactionsTRDATE", "type": "TDateTimeField"}, "transactionsinbalancechar": {"name": "TransactionsINBALANCECHAR", "type": "TWideStringField"}, "transactionsflags": {"name": "TransactionsFLAGS", "type": "TFloatField"}, "transactionsdebitamount": {"name": "TransactionsDEBITAMOUNT", "type": "TFloatField"}, "transactionscreditamount": {"name": "TransactionsCREDITAMOUNT", "type": "TFloatField"}, "transactionsnatamount": {"name": "TransactionsNATAMOUNT", "type": "TFloatField"}, "transactionstrdescription": {"name": "TransactionsTRDESCRIPTION", "type": "TWideStringField"}, "transactionscanprocess": {"name": "TransactionsCANPROCESS", "type": "TFloatField"}, "datasrctransactions": {"name": "DataSrcTransactions", "type": "TDataSource"}, "statusimages": {"name": "StatusImages", "type": "TImageList"}, "transactionstramount": {"name": "TransactionsTrAmount", "type": "TFloatField"}, "fcommittransactions": {"name": "FCommitTransactions", "type": "Boolean"}}, {});
  U.init(async () => {
    U.var_("TransactionviewForm", null, "TTransactionviewForm");
  });
  U.method("TTransactionviewForm", "ButtonCommitClick", async function ButtonCommitClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.set(C, "FCommitTransactions", true);
  await $.set(C, "ModalResult", (await $.v(C, "mrOk")));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TTransactionviewForm", "FormCanResize", async function FormCanResize(Self, p0, p1, p2, p3) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "newwidth": $.asRef(p1), "newheight": $.asRef(p2), "resize": $.asRef(p3), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await L0["resize"].set(false);
  return L0.result;
}, {"params": ["Sender", "NewWidth", "NewHeight", "Resize"], "kind": "procedure", "ptypes": ["TObject", "Integer", "Integer", "Boolean"]});
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
  return U;
}
