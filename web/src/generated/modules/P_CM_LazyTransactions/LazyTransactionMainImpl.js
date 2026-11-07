// Generated from LazyTransactionMainImpl.pas by pas2js — do not edit by hand; regenerate instead.
/* eslint-disable */
// @ts-nocheck

export default function define($) {
  const U = $.unit("LazyTransactionMainImpl", ["Windows", "Messages", "SysUtils", "Classes", "Graphics", "Controls", "Forms", "Dialogs", "StdCtrls", "ExtCtrls", "ToolWin", "ComCtrls", "ActnList", "ImgList", "Grids", "DBGridEh", "Buttons", "CMExcelExport", "Mask", "DBCtrlsEh", "Menus", "oracle", "oracledata", "DBGridEhGrouping", "GridsEh", "LazyTransactionDatModImpl", "CommonDecls", "sbsystem", "ProgressImpl", "BanklarImpl"]);
  const C = [U];
  U.defClass("TLazTransMainForm", "TForm", {"groupbox1": {"name": "GroupBox1", "type": "TGroupBox"}, "actnloperations": {"name": "ActnLOperations", "type": "TActionList"}, "dbgridtransactions": {"name": "DBGridtransactions", "type": "TDBGridEh"}, "panel1": {"name": "Panel1", "type": "TPanel"}, "panel2": {"name": "Panel2", "type": "TPanel"}, "toolbar1": {"name": "ToolBar1", "type": "TToolBar"}, "statusimages": {"name": "StatusImages", "type": "TImageList"}, "statusbar1": {"name": "StatusBar1", "type": "TStatusBar"}, "exortoperations": {"name": "ExortOperations", "type": "TCMExcelExport"}, "actnrefresh": {"name": "ActnRefresh", "type": "TAction"}, "actncommittransaction": {"name": "ActnCommitTransaction", "type": "TAction"}, "groupbox3": {"name": "GroupBox3", "type": "TGroupBox"}, "dbediteh1": {"name": "DBEditEh1", "type": "TDBEditEh"}, "label1": {"name": "Label1", "type": "TLabel"}, "popupmenu": {"name": "PopupMenu", "type": "TPopupMenu"}, "actndelete": {"name": "ActnDelete", "type": "TAction"}, "toolbutton1": {"name": "ToolButton1", "type": "TToolButton"}, "toolbutton2": {"name": "ToolButton2", "type": "TToolButton"}, "toolbutton3": {"name": "ToolButton3", "type": "TToolButton"}, "toolbutton4": {"name": "ToolButton4", "type": "TToolButton"}, "toolbutton5": {"name": "ToolButton5", "type": "TToolButton"}, "toolbutton6": {"name": "ToolButton6", "type": "TToolButton"}, "toolbutton7": {"name": "ToolButton7", "type": "TToolButton"}, "toolbutton8": {"name": "ToolButton8", "type": "TToolButton"}, "toolbutton9": {"name": "ToolButton9", "type": "TToolButton"}, "n1": {"name": "N1", "type": "TMenuItem"}, "n2": {"name": "N2", "type": "TMenuItem"}, "n3": {"name": "N3", "type": "TMenuItem"}, "n4": {"name": "N4", "type": "TMenuItem"}, "groupbox2": {"name": "GroupBox2", "type": "TGroupBox"}, "operationdate": {"name": "OperationDate", "type": "TDateTimePicker"}, "actnexport": {"name": "ActnExport", "type": "TAction"}, "groupbox4": {"name": "GroupBox4", "type": "TGroupBox"}, "chbupdplane": {"name": "ChBUpdPlane", "type": "TCheckBox"}, "toolbutton10": {"name": "ToolButton10", "type": "TToolButton"}}, {});
  U.init(async () => {
    U.var_("LazTransMainForm", null, "TLazTransMainForm");
  });
  U.func("InitPlugin", async function InitPlugin(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"s": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["s"]);
  await $.mcall((await $.v(C, "LazTransMainForm")), "ShowModal", []);
  return L0.result;
}, {"params": ["s"], "kind": "procedure", "ptypes": ["String"]});
  U.method("TLazTransMainForm", "PrepareProgress", async function PrepareProgress(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"progcnt": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["progcnt"]);
  {
    const $t1 = (await $.wobj(C, "TransactionProgForm"));
    const $t2 = (await $.wv([$t1], "ProgressTr", C, false));
    await $.wset([$t1, $t2], "Position", 0, C);
    await $.wset([$t1, $t2], "Max", (await $.wv([$t1, $t2], "ProgCnt", { get: async () => L0["progcnt"], set: async (v) => { L0["progcnt"] = v; }, local: true }, false)), C);
    await $.wset([$t1, $t2], "Step", 1, C);
  }
  await $.mcall((await $.v(C, "TransactionProgForm")), "Show", []);
  return L0.result;
}, {"params": ["ProgCnt"], "kind": "procedure", "ptypes": ["integer"]});
  U.method("TLazTransMainForm", "CommitTransaction", async function CommitTransaction(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"trid": $.copyArg(p0), "prtr": $.copyArg(p1), result: undefined};
  await $.fixArgs(L0, ["trid", "prtr"]);
  L0["rscreditnumber"] = "%s - № li kredit : ";
  {
    const $t3 = (await $.wobj(C, "LazTrDatMod"));
    const $t4 = (await $.wv([$t3], "Transactions", C, false));
    try {
      await $.stmt((await $.wcall([$t3, $t4], "CallProcedure", ["Commit_Transaction", ["TransactionID", (await $.wv([$t3, $t4], "TrID", { get: async () => L0["trid"], set: async (v) => { L0["trid"] = v; }, local: true }, false)), "DefUpdPlane", (await $.wv([$t3, $t4], "PrTr", { get: async () => L0["prtr"], set: async (v) => { L0["prtr"] = v; }, local: true }, false))]], C)));
      await $.mcall((await $.wv([$t3, $t4], "TransactionsData", C, false)), "Refresh", []);
    } catch ($t5) {
      $.rethrowControl($t5);
      if ($.excIs($t5, "Exception")) {
        L0["e"] = $.exc($t5);
        await $.stmt((await $.wcall([$t3, $t4], "LogError", [$.add((await $.wcall([$t3, $t4], "Format", [(await $.wv([$t3, $t4], "rsCreditNumber", { get: async () => L0["rscreditnumber"], set: async (v) => { L0["rscreditnumber"] = v; }, local: true }, false)), [(await $.mv((await $.mcall((await $.wv([$t3, $t4], "TransactionsData", C, false)), "FieldByname", ["Numberofcredit"])), "AsString"))]], C)), (await $.mv((await $.wv([$t3, $t4], "E", { get: async () => L0["e"], set: async (v) => { L0["e"] = v; }, local: true }, false)), "Message")))], C)));
      }
      else { throw $t5; }
    }
  }
  return L0.result;
}, {"params": ["TrID", "PrTr"], "kind": "procedure", "ptypes": ["integer", "Boolean"]});
  U.method("TLazTransMainForm", "ActnRefreshExecute", async function ActnRefreshExecute(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t6 = (await $.wobj(C, "LazTrDatMod"));
    const $t7 = (await $.wv([$t6], "TransactionsData", C, false));
    await $.wset([$t6, $t7], "Cursor", (await $.wv([$t6, $t7], "crSqlWait", C, false)), C);
    await $.stmt($.wcall([$t6, $t7], "Close", [], C));
    await $.stmt((await $.wcall([$t6, $t7], "SetVariable", ["TransactionDate", (await $.wcall([$t6, $t7], "Integer", [(await $.wcall([$t6, $t7], "Trunc", [(await $.mv((await $.wv([$t6, $t7], "OperationDate", C, false)), "DateTime"))], C))], C))], C)));
    await $.stmt($.wcall([$t6, $t7], "Open", [], C));
    await $.wset([$t6, $t7], "Cursor", (await $.wv([$t6, $t7], "crDefault", C, false)), C);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TLazTransMainForm", "DBGridtransactionsDrawColumnCell", async function DBGridtransactionsDrawColumnCell(Self, p0, p1, p2, p3, p4) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "rect": $.copyArg(p1), "datacol": $.copyArg(p2), "column": $.copyArg(p3), "state": $.copyArg(p4), result: undefined, "imageindex": 0};
  await $.fixArgs(L0, ["sender", "rect", "datacol", "column", "state"]);
  L0["datacolindex"] = 1;
  L0["imageindex"] = (-(1));
  {
    const $t8 = L0["sender"];
    if ($.truthy($.ne((await $.mv((await $.mv((await $.wv([$t8], "DataSource", C, false)), "DataSet")), "RecordCount")), 0))) {
      { const $t9 = (await $.mv((await $.mcall((await $.mv((await $.wv([$t8], "DataSource", C, false)), "DataSet")), "FieldByName", ["Status"])), "AsInteger"));
        if ($.eq($t9, 0)) {
          await $.wset([$t8], "ImageIndex", 0, { get: async () => L0["imageindex"], set: async (v) => { L0["imageindex"] = v; }, local: true });
        }
        else if ($.eq($t9, 1)) {
          await $.wset([$t8], "ImageIndex", 1, { get: async () => L0["imageindex"], set: async (v) => { L0["imageindex"] = v; }, local: true });
        }
      }
      if ($.truthy(($.eq((await $.wv([$t8], "DataCol", { get: async () => L0["datacol"], set: async (v) => { L0["datacol"] = v; }, local: true }, false)), 1)))) {
        await $.stmt((await $.mcall((await $.wv([$t8], "StatusImages", C, false)), "Draw", [(await $.wv([$t8], "Canvas", C, false)), (await $.mv((await $.wv([$t8], "Rect", { get: async () => L0["rect"], set: async (v) => { L0["rect"] = v; }, local: true }, false)), "Left")), (await $.mv((await $.wv([$t8], "Rect", { get: async () => L0["rect"], set: async (v) => { L0["rect"] = v; }, local: true }, false)), "Top")), (await $.wv([$t8], "ImageIndex", { get: async () => L0["imageindex"], set: async (v) => { L0["imageindex"] = v; }, local: true }, false)), (await $.wv([$t8], "True", C, false))])));
      } else {
        await $.stmt((await $.wcall([$t8], "DefaultDrawColumnCell", [(await $.wv([$t8], "Rect", { get: async () => L0["rect"], set: async (v) => { L0["rect"] = v; }, local: true }, false)), (await $.wv([$t8], "DataCol", { get: async () => L0["datacol"], set: async (v) => { L0["datacol"] = v; }, local: true }, false)), (await $.wv([$t8], "Column", { get: async () => L0["column"], set: async (v) => { L0["column"] = v; }, local: true }, false)), (await $.wv([$t8], "State", { get: async () => L0["state"], set: async (v) => { L0["state"] = v; }, local: true }, false))], C)));
      }
    }
  }
  return L0.result;
}, {"params": ["Sender", "Rect", "DataCol", "Column", "State"], "kind": "procedure", "ptypes": ["TObject", "TRect", "Integer", "TColumnEh", "TGridDrawState"]});
  U.method("TLazTransMainForm", "ActnCommitTransactionExecute", async function ActnCommitTransactionExecute(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "selectedrowcount": 0, "transid": 0, "i": 0};
  await $.fixArgs(L0, ["sender"]);
  L0["rs_committransaction"] = " Əməliyyat təsdiq olunur əminsiniz? ";
  L0["rs_commitselectedtransactions"] = " Seçilmiş əməliyyatlar təsdiq olunur əminsiniz? ";
  {
    const $t10 = (await $.wobj(C, "DBGridtransactions"));
    const $t11 = (await $.mv((await $.wv([$t10], "DataSource", C, false)), "DataSet"));
    await $.wset([$t10, $t11], "SelectedRowCount", (await $.mv((await $.wv([$t10, $t11], "SelectedRows", C, false)), "count")), { get: async () => L0["selectedrowcount"], set: async (v) => { L0["selectedrowcount"] = v; }, local: true });
    if ($.truthy($.gt((await $.wv([$t10, $t11], "SelectedRowCount", { get: async () => L0["selectedrowcount"], set: async (v) => { L0["selectedrowcount"] = v; }, local: true }, false)), 1))) {
      if ($.truthy($.eq((await $.wcall([$t10, $t11], "MessageDlg", [(await $.wv([$t10, $t11], "rs_CommitSelectedTransactions", { get: async () => L0["rs_commitselectedtransactions"], set: async (v) => { L0["rs_commitselectedtransactions"] = v; }, local: true }, false)), (await $.wv([$t10, $t11], "mtConfirmation", C, false)), [(await $.wv([$t10, $t11], "mbYes", C, false)), (await $.wv([$t10, $t11], "mbNo", C, false))], 0], C)), (await $.wv([$t10, $t11], "mrNO", C, false))))) {
        return L0.result;
      }
      if ($.truthy($.eq((await $.wcall([$t10, $t11], "MessageDlg", [(await $.wv([$t10, $t11], "rs_CommitSelectedTransactions", { get: async () => L0["rs_commitselectedtransactions"], set: async (v) => { L0["rs_commitselectedtransactions"] = v; }, local: true }, false)), (await $.wv([$t10, $t11], "mtConfirmation", C, false)), [(await $.wv([$t10, $t11], "mbYes", C, false)), (await $.wv([$t10, $t11], "mbNo", C, false))], 0], C)), (await $.wv([$t10, $t11], "mrNO", C, false))))) {
        return L0.result;
      }
      await $.mcall(Self, "Update", []);
      await $.stmt((await $.wcall([$t10, $t11], "PrepareProgress", [(await $.wv([$t10, $t11], "SelectedRowCount", { get: async () => L0["selectedrowcount"], set: async (v) => { L0["selectedrowcount"] = v; }, local: true }, false))], C)));
      { const $t12 = $.sub((await $.wv([$t10, $t11], "SelectedRowCount", { get: async () => L0["selectedrowcount"], set: async (v) => { L0["selectedrowcount"] = v; }, local: true }, false)), 1);
        await $.wset([$t10, $t11], "I", 0, { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true });
        let $t13 = true;
        for (;;) {
          if (!$t13) { await $.wset([$t10, $t11], "I", $.succ((await $.wv([$t10, $t11], "I", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false)), 1), { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }); }
          $t13 = false;
          if (!($.ord((await $.wv([$t10, $t11], "I", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false))) <= $.ord($t12))) break;
          await $.stmt((await $.wcall([$t10, $t11], "GotoBookmark", [(await $.wcall([$t10, $t11], "Pointer", [(await $.idx((await $.wv([$t10, $t11], "SelectedRows", C, false)), [(await $.wv([$t10, $t11], "I", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false))]))], C))], C)));
          await $.wset([$t10, $t11], "TransID", (await $.mv((await $.wcall([$t10, $t11], "FieldByName", ["ID"], C)), "AsInteger")), { get: async () => L0["transid"], set: async (v) => { L0["transid"] = v; }, local: true });
          await $.stmt((await $.wcall([$t10, $t11], "GotoBookmark", [(await $.wcall([$t10, $t11], "Pointer", [(await $.idx((await $.wv([$t10, $t11], "SelectedRows", C, false)), [(await $.wv([$t10, $t11], "I", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false))]))], C))], C)));
          await $.stmt((await $.wcall([$t10, $t11], "CommitTransaction", [(await $.wv([$t10, $t11], "TransID", { get: async () => L0["transid"], set: async (v) => { L0["transid"] = v; }, local: true }, false)), (await $.mv((await $.wv([$t10, $t11], "ChBUpdPlane", C, false)), "Checked"))], C)));
          await $.mset((await $.mv((await $.wv([$t10, $t11], "TransactionProgForm", C, false)), "ProgressTr")), "Position", $.add((await $.wv([$t10, $t11], "I", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false)), 1));
          await $.tick();
        }
      }
      await $.mcall((await $.wv([$t10, $t11], "TransactionProgForm", C, false)), "Close", []);
    } else {
      if ($.truthy($.eq((await $.wcall([$t10, $t11], "MessageDlg", [(await $.wv([$t10, $t11], "rs_CommitTransaction", { get: async () => L0["rs_committransaction"], set: async (v) => { L0["rs_committransaction"] = v; }, local: true }, false)), (await $.wv([$t10, $t11], "mtConfirmation", C, false)), [(await $.wv([$t10, $t11], "mbYes", C, false)), (await $.wv([$t10, $t11], "mbNo", C, false))], 0], C)), (await $.wv([$t10, $t11], "mrNO", C, false))))) {
        return L0.result;
      }
    }
    await $.stmt((await $.wcall([$t10, $t11], "CommitTransaction", [(await $.mv((await $.wcall([$t10, $t11], "FieldByName", ["ID"], C)), "AsInteger")), (await $.mv((await $.wv([$t10, $t11], "ChBUpdPlane", C, false)), "Checked"))], C)));
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TLazTransMainForm", "FormCreate", async function FormCreate(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.set(C, "LazTrDatMod", (await $.mcall((await $.v(C, "TLazTrDatMod")), "Create", [Self])));
  await $.set(C, "TransactionProgForm", (await $.mcall((await $.v(C, "TTransactionProgForm")), "Create", [Self])));
  await $.mset((await $.v(C, "OperationDate")), "DateTime", (await $.v(C, "Get_CurrentDate")));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TLazTransMainForm", "FormDestroy", async function FormDestroy(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mcall((await $.v(C, "LazTrDatMod")), "Free", []);
  await $.mcall((await $.v(C, "TransactionProgForm")), "Free", []);
  await $.mcall((await $.mv((await $.v(C, "LazTrDatMod")), "OracleDataSet1")), "close", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TLazTransMainForm", "ActnDeleteExecute", async function ActnDeleteExecute(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  L0["rs_deletetransaction"] = " Əməliyyat silinir əminsiniz? ";
  if ($.truthy($.eq((await $.call(C, "MessageDlg", [L0["rs_deletetransaction"], (await $.v(C, "mtConfirmation")), [(await $.v(C, "mbYes")), (await $.v(C, "mbNo"))], 0])), (await $.v(C, "mrNO"))))) {
    return L0.result;
  }
  {
    const $t14 = (await $.wobj(C, "LazTrDatMod"));
    const $t15 = (await $.wv([$t14], "Transactions", C, false));
    const $t16 = (await $.wv([$t14, $t15], "TransactionsData", C, false));
    await $.stmt((await $.wcall([$t14, $t15, $t16], "CallProcedure", ["Delete_Transactions", ["TransactionID", (await $.mv((await $.mcall((await $.wv([$t14, $t15, $t16], "TransactionsData", C, false)), "FieldByName", ["ID"])), "AsInteger"))]], C)));
    await $.stmt($.wcall([$t14, $t15, $t16], "Refresh", [], C));
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TLazTransMainForm", "FormKeyPress", async function FormKeyPress(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "key": $.asRef(p1), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.eq((await $.call(C, "ord", [(await L0["key"].get())])), (await $.v(C, "VK_ESCAPE"))))) {
    await $.stmt($.call(C, "close", []));
  }
  return L0.result;
}, {"params": ["Sender", "Key"], "kind": "procedure", "ptypes": ["TObject", "Char"]});
  U.method("TLazTransMainForm", "ActnDeleteUpdate", async function ActnDeleteUpdate(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t17 = (await $.wobj(C, "LazTrDatMod"));
    const $t18 = (await $.wv([$t17], "TransactionsData", C, false));
    await $.mset((await $.wv([$t17, $t18], "Sender", { get: async () => L0["sender"], set: async (v) => { L0["sender"] = v; }, local: true }, false)), "Enabled", (await $.and_((await $.wv([$t17, $t18], "Active", C, false)), async () => ($.gt((await $.wv([$t17, $t18], "RecordCount", C, false)), 0)))));
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TLazTransMainForm", "ActnCommitTransactionUpdate", async function ActnCommitTransactionUpdate(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t19 = (await $.wobj(C, "LazTrDatMod"));
    const $t20 = (await $.wv([$t19], "TransactionsData", C, false));
    await $.mset((await $.wv([$t19, $t20], "Sender", { get: async () => L0["sender"], set: async (v) => { L0["sender"] = v; }, local: true }, false)), "Enabled", (await $.and_((await $.and_((await $.wv([$t19, $t20], "Active", C, false)), async () => ($.gt((await $.wv([$t19, $t20], "RecordCount", C, false)), 0)))), async () => ($.eq((await $.mv((await $.wcall([$t19, $t20], "FieldByName", ["Status"], C)), "AsInteger")), 0)))));
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TLazTransMainForm", "N4Click", async function N4Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t21 = (await $.wobj(C, "DBGridtransactions"));
    const $t22 = (await $.wv([$t21], "SelectedRows", C, false));
    const $t23 = (await $.mv((await $.wv([$t21, $t22], "DataSource", C, false)), "DataSet"));
    await $.stmt($.wcall([$t21, $t22, $t23], "DisableControls", [], C));
    try {
      await $.stmt($.wcall([$t21, $t22, $t23], "First", [], C));
      while ($.truthy($.not((await $.wv([$t21, $t22, $t23], "Eof", C, false))))) {
        await $.wset([$t21, $t22, $t23], "CurrentRowSelected", (await $.wv([$t21, $t22, $t23], "True", C, false)), C);
        await $.stmt($.wcall([$t21, $t22, $t23], "Next", [], C));
        await $.tick();
      }
    } finally {
      await $.stmt($.wcall([$t21, $t22, $t23], "EnableControls", [], C));
    }
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TLazTransMainForm", "N1DrawItem", async function N1DrawItem(Self, p0, p1, p2, p3) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "acanvas": $.copyArg(p1), "arect": $.copyArg(p2), "selected": $.copyArg(p3), result: undefined, "linebottom": 0, "stext": '', "bar": null};
  await $.fixArgs(L0, ["sender", "acanvas", "arect", "selected"]);
  {
    const $t24 = L0["acanvas"];
    const $t25 = (await $.wv([$t24], "Sender", { get: async () => L0["sender"], set: async (v) => { L0["sender"] = v; }, local: true }, false));
    {
      const $t26 = (await $.mv((await $.wv([$t24, $t25], "ACanvas", { get: async () => L0["acanvas"], set: async (v) => { L0["acanvas"] = v; }, local: true }, false)), "Font"));
      await $.wset([$t24, $t25, $t26], "Charset", (await $.wv([$t24, $t25, $t26], "DEFAULT_CHARSET", C, false)), C);
      await $.wset([$t24, $t25, $t26], "Name", "Azl Sans Serif", C);
      if ($.truthy((await $.wv([$t24, $t25, $t26], "Default", C, false)))) {
        await $.wset([$t24, $t25, $t26], "Style", [(await $.wv([$t24, $t25, $t26], "fsBold", C, false))], C);
      }
    }
    if ($.truthy($.eq((await $.wv([$t24, $t25], "Caption", C, false)), "-"))) {
      await $.mset((await $.wv([$t24, $t25], "Pen", C, false)), "Color", (await $.wv([$t24, $t25], "clBlack", C, false)));
      await $.wset([$t24, $t25], "LineBottom", $.sub(($.add((await $.mv((await $.wv([$t24, $t25], "ARect", { get: async () => L0["arect"], set: async (v) => { L0["arect"] = v; }, local: true }, false)), "Top")), $.idiv(($.sub((await $.mv((await $.wv([$t24, $t25], "ARect", { get: async () => L0["arect"], set: async (v) => { L0["arect"] = v; }, local: true }, false)), "Bottom")), (await $.mv((await $.wv([$t24, $t25], "ARect", { get: async () => L0["arect"], set: async (v) => { L0["arect"] = v; }, local: true }, false)), "Top")))), 2))), 1), { get: async () => L0["linebottom"], set: async (v) => { L0["linebottom"] = v; }, local: true });
      await $.stmt((await $.wcall([$t24, $t25], "MoveTo", [(await $.mv((await $.wv([$t24, $t25], "ARect", { get: async () => L0["arect"], set: async (v) => { L0["arect"] = v; }, local: true }, false)), "Left")), (await $.wv([$t24, $t25], "LineBottom", { get: async () => L0["linebottom"], set: async (v) => { L0["linebottom"] = v; }, local: true }, false))], C)));
      await $.stmt((await $.wcall([$t24, $t25], "LineTo", [(await $.mv((await $.wv([$t24, $t25], "ARect", { get: async () => L0["arect"], set: async (v) => { L0["arect"] = v; }, local: true }, false)), "Right")), (await $.wv([$t24, $t25], "LineBottom", { get: async () => L0["linebottom"], set: async (v) => { L0["linebottom"] = v; }, local: true }, false))], C)));
      await $.stmt((await $.wcall([$t24, $t25], "inc", [$.ref(async () => (await $.wv([$t24, $t25], "LineBottom", { get: async () => L0["linebottom"], set: async (v) => { L0["linebottom"] = v; }, local: true }, false)), async ($t27) => { await $.wset([$t24, $t25], "LineBottom", $t27, { get: async () => L0["linebottom"], set: async (v) => { L0["linebottom"] = v; }, local: true }); })], C)));
      await $.mset((await $.wv([$t24, $t25], "Pen", C, false)), "Color", (await $.wv([$t24, $t25], "clWhite", C, false)));
      await $.stmt((await $.wcall([$t24, $t25], "MoveTo", [(await $.mv((await $.wv([$t24, $t25], "ARect", { get: async () => L0["arect"], set: async (v) => { L0["arect"] = v; }, local: true }, false)), "Left")), (await $.wv([$t24, $t25], "LineBottom", { get: async () => L0["linebottom"], set: async (v) => { L0["linebottom"] = v; }, local: true }, false))], C)));
      await $.stmt((await $.wcall([$t24, $t25], "LineTo", [(await $.mv((await $.wv([$t24, $t25], "ARect", { get: async () => L0["arect"], set: async (v) => { L0["arect"] = v; }, local: true }, false)), "Right")), (await $.wv([$t24, $t25], "LineBottom", { get: async () => L0["linebottom"], set: async (v) => { L0["linebottom"] = v; }, local: true }, false))], C)));
    } else {
      if ($.truthy((await $.wv([$t24, $t25], "Selected", { get: async () => L0["selected"], set: async (v) => { L0["selected"] = v; }, local: true }, false)))) {
        await $.mset((await $.wv([$t24, $t25], "Brush", C, false)), "Color", (await $.wv([$t24, $t25], "clNavy", C, false)));
        if ($.truthy((await $.wv([$t24, $t25], "Enabled", C, false)))) {
          await $.mset((await $.wv([$t24, $t25], "Font", C, false)), "Color", (await $.wv([$t24, $t25], "clWhite", C, false)));
        } else {
          await $.mset((await $.wv([$t24, $t25], "Font", C, false)), "Color", (await $.wv([$t24, $t25], "clSilver", C, false)));
        }
      } else {
        await $.mset((await $.wv([$t24, $t25], "Brush", C, false)), "Color", (await $.wv([$t24, $t25], "clBtnFace", C, false)));
        if ($.truthy((await $.wv([$t24, $t25], "Enabled", C, false)))) {
          await $.mset((await $.wv([$t24, $t25], "Font", C, false)), "Color", (await $.wv([$t24, $t25], "clBlack", C, false)));
        } else {
          await $.mset((await $.wv([$t24, $t25], "Font", C, false)), "Color", (await $.wv([$t24, $t25], "clGrayText", C, false)));
        }
      }
      await $.wset([$t24, $t25], "Bar", (await $.wv([$t24, $t25], "ARect", { get: async () => L0["arect"], set: async (v) => { L0["arect"] = v; }, local: true }, false)), { get: async () => L0["bar"], set: async (v) => { L0["bar"] = v; }, local: true });
      await $.stmt((await $.wcall([$t24, $t25], "Inc", [$.ref(async () => (await $.mv((await $.wv([$t24, $t25], "Bar", { get: async () => L0["bar"], set: async (v) => { L0["bar"] = v; }, local: true }, false)), "Left")), async ($t28) => { await $.mset((await $.wv([$t24, $t25], "Bar", { get: async () => L0["bar"], set: async (v) => { L0["bar"] = v; }, local: true }, false)), "Left", $t28); }), 22], C)));
      await $.stmt((await $.wcall([$t24, $t25], "FillRect", [(await $.wv([$t24, $t25], "Bar", { get: async () => L0["bar"], set: async (v) => { L0["bar"] = v; }, local: true }, false))], C)));
      await $.stmt((await $.wcall([$t24, $t25], "TextOut", [$.add((await $.mv((await $.wv([$t24, $t25], "ARect", { get: async () => L0["arect"], set: async (v) => { L0["arect"] = v; }, local: true }, false)), "Left")), 22), $.add((await $.mv((await $.wv([$t24, $t25], "ARect", { get: async () => L0["arect"], set: async (v) => { L0["arect"] = v; }, local: true }, false)), "Top")), 1), (await $.wv([$t24, $t25], "Caption", C, false))], C)));
    }
    await $.wset([$t24, $t25], "SText", (await $.wcall([$t24, $t25], "ShortCutToText", [(await $.wv([$t24, $t25], "ShortCut", C, false))], C)), { get: async () => L0["stext"], set: async (v) => { L0["stext"] = v; }, local: true });
    await $.stmt((await $.wcall([$t24, $t25], "TextOut", [$.sub($.sub((await $.mv((await $.wv([$t24, $t25], "ARect", { get: async () => L0["arect"], set: async (v) => { L0["arect"] = v; }, local: true }, false)), "Right")), (await $.wcall([$t24, $t25], "TextWidth", [(await $.wv([$t24, $t25], "SText", { get: async () => L0["stext"], set: async (v) => { L0["stext"] = v; }, local: true }, false))], C))), 7), $.add((await $.mv((await $.wv([$t24, $t25], "ARect", { get: async () => L0["arect"], set: async (v) => { L0["arect"] = v; }, local: true }, false)), "Top")), 1), (await $.wv([$t24, $t25], "SText", { get: async () => L0["stext"], set: async (v) => { L0["stext"] = v; }, local: true }, false))], C)));
    if ($.truthy($.ne((await $.wv([$t24, $t25], "ImageIndex", C, false)), (-(1))))) {
      {
        const $t29 = (await $.wv([$t24, $t25], "GetParentMenu", C, false));
        if ($.truthy((await $.wcall([$t24, $t25, $t29], "Assigned", [(await $.wv([$t24, $t25, $t29], "Images", C, false))], C)))) {
          if ($.truthy((await $.wv([$t24, $t25, $t29], "Checked", C, false)))) {
            await $.mset((await $.wv([$t24, $t25, $t29], "Bar", { get: async () => L0["bar"], set: async (v) => { L0["bar"] = v; }, local: true }, false)), "Left", $.add((await $.mv((await $.wv([$t24, $t25, $t29], "ARect", { get: async () => L0["arect"], set: async (v) => { L0["arect"] = v; }, local: true }, false)), "Left")), 1));
            await $.mset((await $.wv([$t24, $t25, $t29], "Bar", { get: async () => L0["bar"], set: async (v) => { L0["bar"] = v; }, local: true }, false)), "Right", $.add((await $.mv((await $.wv([$t24, $t25, $t29], "Bar", { get: async () => L0["bar"], set: async (v) => { L0["bar"] = v; }, local: true }, false)), "Left")), 16));
            await $.mset((await $.wv([$t24, $t25, $t29], "Bar", { get: async () => L0["bar"], set: async (v) => { L0["bar"] = v; }, local: true }, false)), "Top", $.add((await $.mv((await $.wv([$t24, $t25, $t29], "ARect", { get: async () => L0["arect"], set: async (v) => { L0["arect"] = v; }, local: true }, false)), "Top")), 1));
            await $.mset((await $.wv([$t24, $t25, $t29], "Bar", { get: async () => L0["bar"], set: async (v) => { L0["bar"] = v; }, local: true }, false)), "Bottom", $.add((await $.mv((await $.wv([$t24, $t25, $t29], "Bar", { get: async () => L0["bar"], set: async (v) => { L0["bar"] = v; }, local: true }, false)), "Top")), 16));
            await $.mset((await $.mv((await $.wv([$t24, $t25, $t29], "ACanvas", { get: async () => L0["acanvas"], set: async (v) => { L0["acanvas"] = v; }, local: true }, false)), "Brush")), "Color", (await $.wv([$t24, $t25, $t29], "clBtnShadow", C, false)));
            await $.stmt((await $.mcall((await $.wv([$t24, $t25, $t29], "ACanvas", { get: async () => L0["acanvas"], set: async (v) => { L0["acanvas"] = v; }, local: true }, false)), "FrameRect", [(await $.wv([$t24, $t25, $t29], "Bar", { get: async () => L0["bar"], set: async (v) => { L0["bar"] = v; }, local: true }, false))])));
            await $.stmt((await $.wcall([$t24, $t25, $t29], "Inc", [$.ref(async () => (await $.mv((await $.wv([$t24, $t25, $t29], "Bar", { get: async () => L0["bar"], set: async (v) => { L0["bar"] = v; }, local: true }, false)), "Left")), async ($t30) => { await $.mset((await $.wv([$t24, $t25, $t29], "Bar", { get: async () => L0["bar"], set: async (v) => { L0["bar"] = v; }, local: true }, false)), "Left", $t30); }), 2], C)));
            await $.stmt((await $.wcall([$t24, $t25, $t29], "Inc", [$.ref(async () => (await $.mv((await $.wv([$t24, $t25, $t29], "Bar", { get: async () => L0["bar"], set: async (v) => { L0["bar"] = v; }, local: true }, false)), "Right")), async ($t31) => { await $.mset((await $.wv([$t24, $t25, $t29], "Bar", { get: async () => L0["bar"], set: async (v) => { L0["bar"] = v; }, local: true }, false)), "Right", $t31); }), 2], C)));
            await $.stmt((await $.wcall([$t24, $t25, $t29], "Inc", [$.ref(async () => (await $.mv((await $.wv([$t24, $t25, $t29], "Bar", { get: async () => L0["bar"], set: async (v) => { L0["bar"] = v; }, local: true }, false)), "Top")), async ($t32) => { await $.mset((await $.wv([$t24, $t25, $t29], "Bar", { get: async () => L0["bar"], set: async (v) => { L0["bar"] = v; }, local: true }, false)), "Top", $t32); }), 2], C)));
            await $.stmt((await $.wcall([$t24, $t25, $t29], "Inc", [$.ref(async () => (await $.mv((await $.wv([$t24, $t25, $t29], "Bar", { get: async () => L0["bar"], set: async (v) => { L0["bar"] = v; }, local: true }, false)), "Bottom")), async ($t33) => { await $.mset((await $.wv([$t24, $t25, $t29], "Bar", { get: async () => L0["bar"], set: async (v) => { L0["bar"] = v; }, local: true }, false)), "Bottom", $t33); }), 2], C)));
            await $.mset((await $.mv((await $.wv([$t24, $t25, $t29], "ACanvas", { get: async () => L0["acanvas"], set: async (v) => { L0["acanvas"] = v; }, local: true }, false)), "Brush")), "Color", (await $.wv([$t24, $t25, $t29], "clBtnHighlight", C, false)));
            await $.stmt((await $.mcall((await $.wv([$t24, $t25, $t29], "ACanvas", { get: async () => L0["acanvas"], set: async (v) => { L0["acanvas"] = v; }, local: true }, false)), "FrameRect", [(await $.wv([$t24, $t25, $t29], "Bar", { get: async () => L0["bar"], set: async (v) => { L0["bar"] = v; }, local: true }, false))])));
            await $.stmt((await $.wcall([$t24, $t25, $t29], "Dec", [$.ref(async () => (await $.mv((await $.wv([$t24, $t25, $t29], "Bar", { get: async () => L0["bar"], set: async (v) => { L0["bar"] = v; }, local: true }, false)), "Left")), async ($t34) => { await $.mset((await $.wv([$t24, $t25, $t29], "Bar", { get: async () => L0["bar"], set: async (v) => { L0["bar"] = v; }, local: true }, false)), "Left", $t34); }), 1], C)));
            await $.stmt((await $.wcall([$t24, $t25, $t29], "Dec", [$.ref(async () => (await $.mv((await $.wv([$t24, $t25, $t29], "Bar", { get: async () => L0["bar"], set: async (v) => { L0["bar"] = v; }, local: true }, false)), "Right")), async ($t35) => { await $.mset((await $.wv([$t24, $t25, $t29], "Bar", { get: async () => L0["bar"], set: async (v) => { L0["bar"] = v; }, local: true }, false)), "Right", $t35); }), 1], C)));
            await $.stmt((await $.wcall([$t24, $t25, $t29], "Dec", [$.ref(async () => (await $.mv((await $.wv([$t24, $t25, $t29], "Bar", { get: async () => L0["bar"], set: async (v) => { L0["bar"] = v; }, local: true }, false)), "Top")), async ($t36) => { await $.mset((await $.wv([$t24, $t25, $t29], "Bar", { get: async () => L0["bar"], set: async (v) => { L0["bar"] = v; }, local: true }, false)), "Top", $t36); }), 1], C)));
            await $.stmt((await $.wcall([$t24, $t25, $t29], "Dec", [$.ref(async () => (await $.mv((await $.wv([$t24, $t25, $t29], "Bar", { get: async () => L0["bar"], set: async (v) => { L0["bar"] = v; }, local: true }, false)), "Bottom")), async ($t37) => { await $.mset((await $.wv([$t24, $t25, $t29], "Bar", { get: async () => L0["bar"], set: async (v) => { L0["bar"] = v; }, local: true }, false)), "Bottom", $t37); }), 1], C)));
            if ($.truthy((await $.wv([$t24, $t25, $t29], "Selected", { get: async () => L0["selected"], set: async (v) => { L0["selected"] = v; }, local: true }, false)))) {
              await $.mset((await $.mv((await $.wv([$t24, $t25, $t29], "ACanvas", { get: async () => L0["acanvas"], set: async (v) => { L0["acanvas"] = v; }, local: true }, false)), "Brush")), "Color", (await $.wv([$t24, $t25, $t29], "clBtnFace", C, false)));
            } else {
              await $.mset((await $.mv((await $.wv([$t24, $t25, $t29], "ACanvas", { get: async () => L0["acanvas"], set: async (v) => { L0["acanvas"] = v; }, local: true }, false)), "Brush")), "Color", (await $.wv([$t24, $t25, $t29], "clBtnHighlight", C, false)));
            }
            await $.stmt((await $.mcall((await $.wv([$t24, $t25, $t29], "ACanvas", { get: async () => L0["acanvas"], set: async (v) => { L0["acanvas"] = v; }, local: true }, false)), "FillRect", [(await $.wv([$t24, $t25, $t29], "Bar", { get: async () => L0["bar"], set: async (v) => { L0["bar"] = v; }, local: true }, false))])));
          }
          await $.stmt((await $.mcall((await $.wv([$t24, $t25, $t29], "Images", C, false)), "Draw", [(await $.wv([$t24, $t25, $t29], "ACanvas", { get: async () => L0["acanvas"], set: async (v) => { L0["acanvas"] = v; }, local: true }, false)), (await $.mv((await $.wv([$t24, $t25, $t29], "ARect", { get: async () => L0["arect"], set: async (v) => { L0["arect"] = v; }, local: true }, false)), "Left")), (await $.mv((await $.wv([$t24, $t25, $t29], "ARect", { get: async () => L0["arect"], set: async (v) => { L0["arect"] = v; }, local: true }, false)), "Top")), (await $.wv([$t24, $t25, $t29], "ImageIndex", C, false)), (await $.wv([$t24, $t25, $t29], "Enabled", C, false))])));
        }
      }
    }
  }
  return L0.result;
}, {"params": ["Sender", "ACanvas", "ARect", "Selected"], "kind": "procedure", "ptypes": ["TObject", "TCanvas", "TRect", "Boolean"]});
  U.method("TLazTransMainForm", "ActnExportExecute", async function ActnExportExecute(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t38 = (await $.wobj(C, "ExortOperations"));
    await $.stmt($.wcall([$t38], "Connect", [], C));
    await $.stmt((await $.wcall([$t38], "ExportDataset", [(await $.mv((await $.wv([$t38], "LazTrDatMod", C, false)), "TransactionsData")), "Kredit Əməliyyatları", (await $.wv([$t38], "True", C, false))], C)));
    await $.stmt($.wcall([$t38], "Disconnect", [], C));
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TLazTransMainForm", "ToolButton9Click", async function ToolButton9Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.stmt($.call(C, "Close", []));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TLazTransMainForm", "DBGridtransactionsTitleBtnClick", async function DBGridtransactionsTitleBtnClick(Self, p0, p1, p2) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "acol": $.copyArg(p1), "column": $.copyArg(p2), result: undefined, "sortfield": ''};
  await $.fixArgs(L0, ["sender", "acol", "column"]);
  L0["sortfield"] = (await $.mv(L0["column"], "FieldName"));
  if ($.truthy($.eq(L0["sortfield"], ""))) {
    L0["sortfield"] = "Status";
  }
  if ($.truthy($.eq((await $.mv((await $.mv(L0["column"], "Title")), "SortMarker")), (await $.v(C, "smDownEh"))))) {
    L0["sortfield"] = $.add(L0["sortfield"], " DESC");
  }
  {
    const $t39 = L0["sender"];
    const $t40 = (await $.wcall([$t39], "TOracleDataSet", [(await $.mv((await $.wv([$t39], "DataSource", C, false)), "DataSet"))], C));
    await $.mset((await $.wv([$t39, $t40], "Screen", C, false)), "Cursor", (await $.wv([$t39, $t40], "crSQLWait", C, false)));
    await $.stmt((await $.wcall([$t39, $t40], "SetVariable", ["OrderField", (await $.wv([$t39, $t40], "SortField", { get: async () => L0["sortfield"], set: async (v) => { L0["sortfield"] = v; }, local: true }, false))], C)));
    await $.stmt($.wcall([$t39, $t40], "RefResh", [], C));
    await $.mset((await $.wv([$t39, $t40], "Screen", C, false)), "Cursor", (await $.wv([$t39, $t40], "crDefault", C, false)));
  }
  return L0.result;
}, {"params": ["Sender", "ACol", "Column"], "kind": "procedure", "ptypes": ["TObject", "Integer", "TColumnEh"]});
  U.method("TLazTransMainForm", "ToolButton10Click", async function ToolButton10Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.set(C, "FormBank", (await $.mcall((await $.v(C, "tFormBank")), "Create", [Self])));
  await $.mcall((await $.mv((await $.v(C, "LazTrDatMod")), "OracleDataSet1")), "open", []);
  await $.mcall((await $.v(C, "FormBank")), "showmodal", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.setInitialization(async function __initialization(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: undefined};
  await $.set(C, "LazTransMainForm", (await $.mcall((await $.v(C, "TLazTransMainForm")), "Create", [(await $.v(C, "CommonApplication"))])));
  return L0.result;
});
  return U;
}
