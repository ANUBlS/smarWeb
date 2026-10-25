// Generated from UntPercentConverting.pas by pas2js — do not edit by hand; regenerate instead.
/* eslint-disable */
// @ts-nocheck

export default function define($) {
  const U = $.unit("UntPercentConverting", ["Windows", "Messages", "SysUtils", "Classes", "Graphics", "Controls", "Forms", "Dialogs", "StdCtrls", "ComCtrls", "Grids", "DBGrids", "ExtCtrls", "ToolWin", "ImgList", "Oracle", "DB", "OracleData", "PercentConvertingDataModule", "UnitCalcedPercentRPT", "UntConvertionProgress", "StoredProgramsUnit"]);
  const C = [U];
  U.defClass("TFrmPercentConvert", "TForm", {"panelfooter": {"name": "PanelFooter", "type": "TPanel"}, "lazypercentviewer": {"name": "LazyPercentViewer", "type": "TDBGrid"}, "headertoolbar": {"name": "HeaderToolBar", "type": "TToolBar"}, "tbrefresh": {"name": "tbRefresh", "type": "TToolButton"}, "toolbutton2": {"name": "ToolButton2", "type": "TToolButton"}, "tbprint": {"name": "tbPrint", "type": "TToolButton"}, "toolbutton6": {"name": "ToolButton6", "type": "TToolButton"}, "headerimages": {"name": "HeaderImages", "type": "TImageList"}, "panel1": {"name": "Panel1", "type": "TPanel"}, "tbcanceldeffferedtransactions": {"name": "tbCancelDeffferedTransactions", "type": "TToolButton"}, "toolbutton5": {"name": "ToolButton5", "type": "TToolButton"}, "tbapplydefferedtransactions": {"name": "tbApplyDefferedTransactions", "type": "TToolButton"}, "fcontractid": {"name": "FContractID", "type": "LongInt"}}, {});
  U.init(async () => {
    U.var_("FrmPercentConvert", null, "TFrmPercentConvert");
  });
  U.method("TFrmPercentConvert", "FormCreate", async function FormCreate(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.set(C, "DataModPercentConv", (await $.mcall((await $.v(C, "TDataModPercentConv")), "Create", [Self])));
  await $.set(C, "CalcedPercentRpt", (await $.mcall((await $.v(C, "TCalcedPercentRpt")), "Create", [Self])));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFrmPercentConvert", "LazyPercentViewerTitleClick", async function LazyPercentViewerTitleClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"column": $.copyArg(p0), result: undefined, "orderclause": ''};
  await $.fixArgs(L0, ["column"]);
  await $.mset((await $.v(C, "Screen")), "Cursor", (await $.v(C, "crHourGlass")));
  try {
    {
      const $t1 = (await $.call(C, "TOracleDataSet", [(await $.mv((await $.mv((await $.v(C, "LazyPercentViewer")), "DataSource")), "DataSet"))]));
      await $.wset([$t1], "OrderClause", $.add("ContractCurrencyID,", (await $.wcall([$t1], "Copy", [(await $.mv((await $.mv((await $.wv([$t1], "Column", { get: async () => L0["column"], set: async (v) => { L0["column"] = v; }, local: true }, false)), "Field")), "Name")), 15, (await $.wcall([$t1], "Length", [(await $.mv((await $.mv((await $.wv([$t1], "Column", { get: async () => L0["column"], set: async (v) => { L0["column"] = v; }, local: true }, false)), "Field")), "Name"))], C))], C))), { get: async () => L0["orderclause"], set: async (v) => { L0["orderclause"] = v; }, local: true });
      if ($.truthy((await $.wv([$t1], "Active", C, false)))) {
        await $.stmt($.wcall([$t1], "CloseAll", [], C));
      }
      await $.stmt((await $.wcall([$t1], "SetVariable", ["ORDERCLAUSE", (await $.wv([$t1], "OrderClause", { get: async () => L0["orderclause"], set: async (v) => { L0["orderclause"] = v; }, local: true }, false))], C)));
      await $.stmt($.wcall([$t1], "Open", [], C));
    }
  } finally {
    await $.mset((await $.v(C, "Screen")), "Cursor", (await $.v(C, "crDefault")));
  }
  return L0.result;
}, {"params": ["Column"], "kind": "procedure", "ptypes": ["TColumn"]});
  U.method("TFrmPercentConvert", "tbPrintClick", async function tbPrintClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mcall((await $.v(C, "CalcedPercentRpt")), "Preview", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFrmPercentConvert", "tbRefreshClick", async function tbRefreshClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "savedpos": null};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t2 = (await $.mv((await $.mv((await $.v(C, "LazyPercentViewer")), "DataSource")), "DataSet"));
    await $.wset([$t2], "SavedPos", (await $.wv([$t2], "GetBookmark", C, false)), { get: async () => L0["savedpos"], set: async (v) => { L0["savedpos"] = v; }, local: true });
    await $.stmt($.wcall([$t2], "Refresh", [], C));
    await $.stmt((await $.wcall([$t2], "GotoBookmark", [(await $.wv([$t2], "SavedPos", { get: async () => L0["savedpos"], set: async (v) => { L0["savedpos"] = v; }, local: true }, false))], C)));
  }
  await $.mcall((await $.mv((await $.call(C, "TOracleDataSet", [(await $.mv((await $.mv((await $.v(C, "LazyPercentViewer")), "DataSource")), "DataSet"))])), "Session")), "Commit", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFrmPercentConvert", "tbApplyDefferedTransactionsClick", async function tbApplyDefferedTransactionsClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "selrowscount": 0, "selrowindex": 0, "aborted": 0};
  await $.fixArgs(L0, ["sender"]);
  L0["resultitle"] = "  : Errors Found On Convertion Percents";
  await $.stmt($.call(C, "SelectAllRows", []));
  {
    const $t3 = (await $.v(C, "LazyPercentViewer"));
    const $t4 = (await $.wv([$t3], "SelectedRows", C, false));
    const $t5 = (await $.mv((await $.wv([$t3, $t4], "DataSource", C, false)), "DataSet"));
    await $.wset([$t3, $t4, $t5], "Aborted", 0, { get: async () => L0["aborted"], set: async (v) => { L0["aborted"] = v; }, local: true });
    await $.wset([$t3, $t4, $t5], "SelRowsCount", (await $.wv([$t3, $t4, $t5], "Count", C, false)), { get: async () => L0["selrowscount"], set: async (v) => { L0["selrowscount"] = v; }, local: true });
    if ($.truthy($.ne((await $.wcall([$t3, $t4, $t5], "MessageDlg", ["Apply Percents  Now?", (await $.wv([$t3, $t4, $t5], "mtConfirmation", C, false)), [(await $.wv([$t3, $t4, $t5], "mbYes", C, false)), (await $.wv([$t3, $t4, $t5], "mbNo", C, false))], 0], C)), (await $.wv([$t3, $t4, $t5], "mrYes", C, false))))) {
      $.abort();
    }
    await $.mcall((await $.mv((await $.wcall([$t3, $t4, $t5], "TOracleDataSet", [(await $.mv((await $.mv((await $.wv([$t3, $t4, $t5], "LazyPercentViewer", C, false)), "DataSource")), "DataSet"))], C)), "Session")), "Commit", []);
    {
      const $t6 = (await $.wv([$t3, $t4, $t5], "FrmProgress", C, false));
      const $t7 = (await $.wv([$t3, $t4, $t5, $t6], "ProgressBar", C, false));
      await $.wset([$t3, $t4, $t5, $t6, $t7], "Max", (await $.wv([$t3, $t4, $t5, $t6, $t7], "SelRowsCount", { get: async () => L0["selrowscount"], set: async (v) => { L0["selrowscount"] = v; }, local: true }, false)), C);
      await $.wset([$t3, $t4, $t5, $t6, $t7], "Position", 0, C);
      await $.mcall((await $.mv((await $.wv([$t3, $t4, $t5, $t6, $t7], "NoteMemo", C, false)), "Lines")), "Clear", []);
      await $.mcall((await $.wv([$t3, $t4, $t5, $t6, $t7], "NoteMemo", C, false)), "Hide", []);
      await $.mset((await $.wv([$t3, $t4, $t5, $t6, $t7], "BtnDetails", C, false)), "Enabled", (await $.wv([$t3, $t4, $t5, $t6, $t7], "False", C, false)));
      await $.mcall((await $.wv([$t3, $t4, $t5, $t6, $t7], "FrmProgress", C, false)), "Show", []);
    }
    await $.mcall((await $.wv([$t3, $t4, $t5], "Application", C, false)), "ProcessMessages", []);
    try {
      { const $t8 = $.sub((await $.wv([$t3, $t4, $t5], "SelRowsCount", { get: async () => L0["selrowscount"], set: async (v) => { L0["selrowscount"] = v; }, local: true }, false)), 1);
        await $.wset([$t3, $t4, $t5], "SelRowIndex", 0, { get: async () => L0["selrowindex"], set: async (v) => { L0["selrowindex"] = v; }, local: true });
        let $t9 = true;
        for (;;) {
          if (!$t9) { await $.wset([$t3, $t4, $t5], "SelRowIndex", $.succ((await $.wv([$t3, $t4, $t5], "SelRowIndex", { get: async () => L0["selrowindex"], set: async (v) => { L0["selrowindex"] = v; }, local: true }, false)), 1), { get: async () => L0["selrowindex"], set: async (v) => { L0["selrowindex"] = v; }, local: true }); }
          $t9 = false;
          if (!($.ord((await $.wv([$t3, $t4, $t5], "SelRowIndex", { get: async () => L0["selrowindex"], set: async (v) => { L0["selrowindex"] = v; }, local: true }, false))) <= $.ord($t8))) break;
          try {
            await $.stmt((await $.wcall([$t3, $t4, $t5], "GotoBookmark", [(await $.wcall([$t3, $t4, $t5], "Pointer", [(await $.idx((await $.wv([$t3, $t4, $t5], "Items", C, false)), [(await $.wv([$t3, $t4, $t5], "SelRowIndex", { get: async () => L0["selrowindex"], set: async (v) => { L0["selrowindex"] = v; }, local: true }, false))]))], C))], C)));
            await $.mcall((await $.mv((await $.wv([$t3, $t4, $t5], "FrmProgress", C, false)), "ProgressBar")), "StepIt", []);
            await $.mset((await $.mv((await $.wv([$t3, $t4, $t5], "FrmProgress", C, false)), "CurrentContractLabel")), "Caption", (await $.mv((await $.wcall([$t3, $t4, $t5], "FieldByName", ["ContractNo"], C)), "AsString")));
            {
              const $t11 = (await $.mv((await $.wv([$t3, $t4, $t5], "DataModPercentConv", C, false)), "CalcedPercentsPack"));
              await $.stmt((await $.wcall([$t3, $t4, $t5, $t11], "CallProcedure", ["ApplyDefferedTransactions", [(await $.mv((await $.wcall([$t3, $t4, $t5, $t11], "FieldByName", ["ContractID"], C)), "Value")), (await $.wv([$t3, $t4, $t5, $t11], "GetBankDate", C, false))]], C)));
            }
          } catch ($t10) {
            $.rethrowControl($t10);
            $.handled($t10);
            await $.stmt((await $.mcall((await $.mv((await $.mv((await $.wv([$t3, $t4, $t5], "FrmProgress", C, false)), "NoteMemo")), "Lines")), "Add", [$.add("Could Not Converting Percents for #", (await $.mv((await $.wcall([$t3, $t4, $t5], "FieldByName", ["ContractNo"], C)), "AsString")))])));
            await $.stmt((await $.wcall([$t3, $t4, $t5], "Inc", [$.ref(async () => (await $.wv([$t3, $t4, $t5], "Aborted", { get: async () => L0["aborted"], set: async (v) => { L0["aborted"] = v; }, local: true }, false)), async ($t12) => { await $.wset([$t3, $t4, $t5], "Aborted", $t12, { get: async () => L0["aborted"], set: async (v) => { L0["aborted"] = v; }, local: true }); })], C)));
            continue;
          }
          await $.tick();
        }
      }
    } finally {
      await $.mset((await $.mv((await $.wv([$t3, $t4, $t5], "FrmProgress", C, false)), "ProgressBar")), "Position", 0);
      await $.mset((await $.mv((await $.wv([$t3, $t4, $t5], "FrmProgress", C, false)), "LblResult")), "Caption", $.add((await $.wcall([$t3, $t4, $t5], "IntToStr", [(await $.wv([$t3, $t4, $t5], "Aborted", { get: async () => L0["aborted"], set: async (v) => { L0["aborted"] = v; }, local: true }, false))], C)), (await $.wv([$t3, $t4, $t5], "ResulTitle", { get: async () => L0["resultitle"], set: async (v) => { L0["resultitle"] = v; }, local: true }, false))));
      await $.mset((await $.mv((await $.wv([$t3, $t4, $t5], "FrmProgress", C, false)), "BtnDetails")), "Enabled", (await $.wv([$t3, $t4, $t5], "True", C, false)));
      await $.mset((await $.mv((await $.wv([$t3, $t4, $t5], "FrmProgress", C, false)), "CurrentContractLabel")), "Caption", "");
      await $.mset((await $.wv([$t3, $t4, $t5], "tbCancelDeffferedTransactions", C, false)), "Enabled", (await $.wv([$t3, $t4, $t5], "False", C, false)));
      await $.mset((await $.wv([$t3, $t4, $t5], "tbApplyDefferedTransactions", C, false)), "Enabled", (await $.wv([$t3, $t4, $t5], "False", C, false)));
      await $.stmt($.wcall([$t3, $t4, $t5], "Refresh", [], C));
    }
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFrmPercentConvert", "tbCancelDeffferedTransactionsClick", async function tbCancelDeffferedTransactionsClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.stmt($.call(C, "Close", []));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFrmPercentConvert", "SelectAllRows", async function SelectAllRows(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: undefined};
  {
    const $t13 = (await $.v(C, "LazyPercentViewer"));
    const $t14 = (await $.wv([$t13], "SelectedRows", C, false));
    const $t15 = (await $.mv((await $.wv([$t13, $t14], "DataSource", C, false)), "DataSet"));
    await $.stmt($.wcall([$t13, $t14, $t15], "DisableControls", [], C));
    try {
      await $.stmt($.wcall([$t13, $t14, $t15], "First", [], C));
      while ($.truthy($.not((await $.wv([$t13, $t14, $t15], "Eof", C, false))))) {
        await $.wset([$t13, $t14, $t15], "CurrentRowSelected", (await $.wv([$t13, $t14, $t15], "True", C, false)), C);
        await $.stmt($.wcall([$t13, $t14, $t15], "Next", [], C));
        await $.tick();
      }
    } finally {
      await $.stmt($.wcall([$t13, $t14, $t15], "EnableControls", [], C));
    }
  }
  return L0.result;
}, {"params": [], "kind": "procedure", "ptypes": []});
  return U;
}
