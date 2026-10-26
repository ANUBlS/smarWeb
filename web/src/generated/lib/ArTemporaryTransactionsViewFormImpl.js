// Generated from ArTemporaryTransactionsViewFormImpl.pas by pas2js — do not edit by hand; regenerate instead.
/* eslint-disable */
// @ts-nocheck

export default function define($) {
  const U = $.unit("ArTemporaryTransactionsViewFormImpl", ["Windows", "Messages", "SysUtils", "Classes", "Graphics", "Controls", "Forms", "Dialogs", "ExtCtrls", "Grids", "DBGrids", "StdCtrls", "Db", "OracleData", "Mask", "DBCtrls", "ImgList", "DBGridEh", "DBCtrlsEh", "DBGridEhGrouping", "GridsEh", "sboapiDataModuleImpl"]);
  const C = [U];
  U.defClass("TTrViewForm", "TForm", {"panel1": {"name": "Panel1", "type": "TPanel"}, "buttoncommit": {"name": "ButtonCommit", "type": "TButton"}, "buttondismis": {"name": "ButtonDismis", "type": "TButton"}, "transactions": {"name": "Transactions", "type": "TOracleDataSet"}, "datasrctransactions": {"name": "DataSrcTransactions", "type": "TDataSource"}, "panel2": {"name": "Panel2", "type": "TPanel"}, "transactionstramount": {"name": "TransactionsTrAmount", "type": "TFloatField"}, "statusimages": {"name": "StatusImages", "type": "TImageList"}, "transactionscanprocess": {"name": "TransactionsCANPROCESS", "type": "TFloatField"}, "dbediteh1": {"name": "DBEditEh1", "type": "TDBEditEh"}, "transactionsdebitaccno": {"name": "TransactionsDEBITACCNO", "type": "TWideStringField"}, "transactionsdebitcurrency": {"name": "TransactionsDEBITCURRENCY", "type": "TWideStringField"}, "transactionscreditaccno": {"name": "TransactionsCREDITACCNO", "type": "TWideStringField"}, "transactionscreditcurrency": {"name": "TransactionsCREDITCURRENCY", "type": "TWideStringField"}, "transactionstrdate": {"name": "TransactionsTRDATE", "type": "TDateTimeField"}, "transactionsflags": {"name": "TransactionsFLAGS", "type": "TFloatField"}, "transactionsdebitamount": {"name": "TransactionsDEBITAMOUNT", "type": "TFloatField"}, "transactionscreditamount": {"name": "TransactionsCREDITAMOUNT", "type": "TFloatField"}, "transactionsnatamount": {"name": "TransactionsNATAMOUNT", "type": "TFloatField"}, "transactionstrdescription": {"name": "TransactionsTRDESCRIPTION", "type": "TWideStringField"}, "transactionsinbalancechar": {"name": "TransactionsINBALANCECHAR", "type": "TWideStringField"}, "dbediteh2": {"name": "DBEditEh2", "type": "TDBEditEh"}, "dbediteh3": {"name": "DBEditEh3", "type": "TDBEditEh"}, "label1": {"name": "Label1", "type": "TLabel"}, "label2": {"name": "Label2", "type": "TLabel"}, "dbgridtransactions": {"name": "DBGridTransactions", "type": "TDBGridEh"}, "fcommittransactions": {"name": "FCommitTransactions", "type": "Boolean"}}, {});
  U.init(async () => {
    U.var_("TrViewForm", null, "TTrViewForm");
  });
  U.method("TTrViewForm", "FormDestroy", async function FormDestroy(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mcall((await $.v(C, "Transactions")), "CloseAll", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TTrViewForm", "FormShow", async function FormShow(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mcall((await $.v(C, "Transactions")), "Open", []);
  await $.set(C, "FCommitTransactions", false);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TTrViewForm", "FormCloseQuery", async function FormCloseQuery(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "canclose": $.asRef(p1), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  L0["scanceltransactions"] = "Əməliyyat aparılmayacaq! Əminsiniz?";
  await L0["canclose"].set((await $.or_((await $.v(C, "FCommitTransactions")), async () => ($.eq((await $.call(C, "MessageDlg", [L0["scanceltransactions"], (await $.v(C, "mtWarning")), [(await $.v(C, "mbYes")), (await $.v(C, "mbNo"))], 0])), (await $.v(C, "mrYes")))))));
  return L0.result;
}, {"params": ["Sender", "CanClose"], "kind": "procedure", "ptypes": ["TObject", "Boolean"]});
  U.method("TTrViewForm", "ButtonCommitClick", async function ButtonCommitClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.set(C, "FCommitTransactions", true);
  await $.set(C, "ModalResult", (await $.v(C, "mrOk")));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TTrViewForm", "TransactionsCalcFields", async function TransactionsCalcFields(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"dataset": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["dataset"]);
  {
    const $t1 = L0["dataset"];
    if ($.truthy($.not((await $.mv((await $.wcall([$t1], "FieldByName", ["DEBITAMOUNT"], C)), "IsNull"))))) {
      await $.mset((await $.wcall([$t1], "FieldByName", ["TrAmount"], C)), "AsFloat", (await $.mv((await $.wcall([$t1], "FieldByName", ["DEBITAMOUNT"], C)), "AsFloat")));
    } else {
      await $.mset((await $.wcall([$t1], "FieldByName", ["TrAmount"], C)), "AsFloat", (await $.mv((await $.wcall([$t1], "FieldByName", ["CREDITAMOUNT"], C)), "AsFloat")));
    }
  }
  return L0.result;
}, {"params": ["DataSet"], "kind": "procedure", "ptypes": ["TDataSet"]});
  U.method("TTrViewForm", "FormClose", async function FormClose(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "action": $.asRef(p1), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.stmt($.call(C, "Update", []));
  return L0.result;
}, {"params": ["Sender", "Action"], "kind": "procedure", "ptypes": ["TObject", "TCloseAction"]});
  U.method("TTrViewForm", "DBGridTransactionsDrawColumnCell", async function DBGridTransactionsDrawColumnCell(Self, p0, p1, p2, p3, p4) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "rect": $.copyArg(p1), "datacol": $.copyArg(p2), "column": $.copyArg(p3), "state": $.copyArg(p4), result: undefined};
  await $.fixArgs(L0, ["sender", "rect", "datacol", "column", "state"]);
  L0["datacolindex"] = 1;
  {
    const $t2 = L0["sender"];
    if ($.truthy($.ne((await $.mv((await $.mv((await $.wv([$t2], "DataSource", C, false)), "DataSet")), "RecordCount")), 0))) {
      if ($.truthy(($.eq((await $.wv([$t2], "DataCol", { get: async () => L0["datacol"], set: async (v) => { L0["datacol"] = v; }, local: true }, false)), (await $.wv([$t2], "DataColIndex", { get: async () => L0["datacolindex"], set: async (v) => { L0["datacolindex"] = v; }, local: true }, false)))))) {
        await $.mset((await $.mv((await $.wv([$t2], "Canvas", C, false)), "Brush")), "Color", (await $.wv([$t2], "clSilver", C, false)));
        await $.stmt((await $.mcall((await $.wv([$t2], "StatusImages", C, false)), "Draw", [(await $.wv([$t2], "Canvas", C, false)), (await $.mv((await $.wv([$t2], "Rect", { get: async () => L0["rect"], set: async (v) => { L0["rect"] = v; }, local: true }, false)), "Left")), (await $.mv((await $.wv([$t2], "Rect", { get: async () => L0["rect"], set: async (v) => { L0["rect"] = v; }, local: true }, false)), "Top")), (await $.mv((await $.mcall((await $.mv((await $.wv([$t2], "DataSource", C, false)), "DataSet")), "FieldByName", ["CANPROCESS"])), "AsInteger")), (await $.wv([$t2], "True", C, false))])));
      } else {
        await $.stmt((await $.wcall([$t2], "DefaultDrawColumnCell", [(await $.wv([$t2], "Rect", { get: async () => L0["rect"], set: async (v) => { L0["rect"] = v; }, local: true }, false)), (await $.wv([$t2], "DataCol", { get: async () => L0["datacol"], set: async (v) => { L0["datacol"] = v; }, local: true }, false)), (await $.wv([$t2], "Column", { get: async () => L0["column"], set: async (v) => { L0["column"] = v; }, local: true }, false)), (await $.wv([$t2], "State", { get: async () => L0["state"], set: async (v) => { L0["state"] = v; }, local: true }, false))], C)));
      }
    }
  }
  return L0.result;
}, {"params": ["Sender", "Rect", "DataCol", "Column", "State"], "kind": "procedure", "ptypes": ["TObject", "TRect", "Integer", "TColumnEh", "TGridDrawState"]});
  U.method("TTrViewForm", "FormCanResize", async function FormCanResize(Self, p0, p1, p2, p3) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "newwidth": $.asRef(p1), "newheight": $.asRef(p2), "resize": $.asRef(p3), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await L0["resize"].set(false);
  return L0.result;
}, {"params": ["Sender", "NewWidth", "NewHeight", "Resize"], "kind": "procedure", "ptypes": ["TObject", "Integer", "Integer", "Boolean"]});
  U.method("TTrViewForm", "FormKeyPress", async function FormKeyPress(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "key": $.asRef(p1), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.eq((await $.call(C, "Ord", [(await L0["key"].get())])), (await $.v(C, "VK_ESCAPE"))))) {
    await L0["key"].set("\u0000");
    await $.stmt($.call(C, "Close", []));
  }
  return L0.result;
}, {"params": ["Sender", "Key"], "kind": "procedure", "ptypes": ["TObject", "Char"]});
  return U;
}
