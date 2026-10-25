// Generated from AdministrationOwnerSheepAdvanced.pas by pas2js — do not edit by hand; regenerate instead.
/* eslint-disable */
// @ts-nocheck

export default function define($) {
  const U = $.unit("AdministrationOwnerSheepAdvanced", ["Windows", "Messages", "SysUtils", "Classes", "Graphics", "Controls", "Forms", "Dialogs", "StdCtrls", "Buttons", "ExtCtrls", "ComCtrls", "Grids", "DBGrids", "Tabs", "Db", "OracleData", "Oracle", "sboapiDataModuleImpl", "sbcore", "AdministrationDataModule", "DuplicateUint"]);
  const C = [U];
  U.const("soForward", 0);
  U.const("soBackward", 1);
  U.const("soNone", 2);
  U.defClass("TMyDBGrid", "TDBGrid", {}, {"datalink": {"name": "DataLink"}, "updatelock": {"name": "UpdateLock"}});
  U.defClass("TfmAdmOwnerChangeAdvanced", "TForm", {"pnmain": {"name": "pnMain", "type": "TPanel"}, "pnbtns": {"name": "pnBtns", "type": "TPanel"}, "btnok": {"name": "btnOk", "type": "TBitBtn"}, "btnexit": {"name": "btnExit", "type": "TBitBtn"}, "groupbox1": {"name": "GroupBox1", "type": "TGroupBox"}, "dtdat": {"name": "dtDat", "type": "TDateTimePicker"}, "btnsearch": {"name": "btnSearch", "type": "TBitBtn"}, "pcmain": {"name": "pcMain", "type": "TPageControl"}, "tbmain": {"name": "tbMain", "type": "TTabSet"}, "dbgowner": {"name": "dbgOwner", "type": "TDBGrid"}, "accountsdata": {"name": "AccountsData", "type": "TOracleDataSet"}, "transactionsdata": {"name": "TransactionsData", "type": "TOracleDataSet"}, "customersdata": {"name": "CustomersData", "type": "TOracleDataSet"}, "kreditsdata": {"name": "KreditsData", "type": "TOracleDataSet"}, "depozitsdata": {"name": "DepozitsData", "type": "TOracleDataSet"}, "dsmain": {"name": "dsMain", "type": "TDataSource"}, "accountsdataopendate": {"name": "AccountsDataOPENDATE", "type": "TDateTimeField"}, "accountsdataclosedate": {"name": "AccountsDataCLOSEDATE", "type": "TDateTimeField"}, "usersdata": {"name": "UsersData", "type": "TOracleDataSet"}, "usersdataid": {"name": "UsersDataID", "type": "TFloatField"}, "usersdatactime": {"name": "UsersDataCTIME", "type": "TDateTimeField"}, "accountsdataop_id": {"name": "AccountsDataOP_ID", "type": "TFloatField"}, "customersdataid": {"name": "CustomersDataID", "type": "TIntegerField"}, "customersdataop_id": {"name": "CustomersDataOP_ID", "type": "TFloatField"}, "customersdataopen_dat": {"name": "CustomersDataOPEN_DAT", "type": "TDateTimeField"}, "customersdataclose_dat": {"name": "CustomersDataCLOSE_DAT", "type": "TDateTimeField"}, "kreditsdataopendate": {"name": "KreditsDataOPENDATE", "type": "TDateTimeField"}, "kreditsdataclosedate": {"name": "KreditsDataCLOSEDATE", "type": "TDateTimeField"}, "kreditsdatafacticaldebt": {"name": "KreditsDataFACTICALDEBT", "type": "TFloatField"}, "kreditsdatafacticalinterestdebt": {"name": "KreditsDataFACTICALINTERESTDEBT", "type": "TFloatField"}, "kreditsdataoverduedebt": {"name": "KreditsDataOVERDUEDEBT", "type": "TFloatField"}, "kreditsdataoverdueinterestdebt": {"name": "KreditsDataOVERDUEINTERESTDEBT", "type": "TFloatField"}, "kreditsdataresiduaryamount": {"name": "KreditsDataRESIDUARYAMOUNT", "type": "TFloatField"}, "kreditsdatainterestbalance": {"name": "KreditsDataINTERESTBALANCE", "type": "TFloatField"}, "kreditsdataclientbalance": {"name": "KreditsDataCLIENTBALANCE", "type": "TFloatField"}, "depozitsdataopendate": {"name": "DepozitsDataOPENDATE", "type": "TDateTimeField"}, "depozitsdataclosedate": {"name": "DepozitsDataCLOSEDATE", "type": "TDateTimeField"}, "depozitsdataamount": {"name": "DepozitsDataAMOUNT", "type": "TFloatField"}, "depozitsdatafacticaldebt": {"name": "DepozitsDataFACTICALDEBT", "type": "TFloatField"}, "depozitsdatafacticalinterestdebt": {"name": "DepozitsDataFACTICALINTERESTDEBT", "type": "TFloatField"}, "depozitsdatastopcalculationdate": {"name": "DepozitsDataSTOPCALCULATIONDATE", "type": "TDateTimeField"}, "depozitsdataoverdueinterestdebt": {"name": "DepozitsDataOVERDUEINTERESTDEBT", "type": "TFloatField"}, "transactionsdataid": {"name": "TransactionsDataID", "type": "TFloatField"}, "transactionsdataop_id": {"name": "TransactionsDataOP_ID", "type": "TFloatField"}, "transactionsdatatransactiondate": {"name": "TransactionsDataTRANSACTIONDATE", "type": "TDateTimeField"}, "transactionsdatadebitamount": {"name": "TransactionsDataDEBITAMOUNT", "type": "TFloatField"}, "transactionsdatacreditamount": {"name": "TransactionsDataCREDITAMOUNT", "type": "TFloatField"}, "transactionsdatalamount": {"name": "TransactionsDataLAMOUNT", "type": "TFloatField"}, "bevel1": {"name": "Bevel1", "type": "TBevel"}, "btnrefresh": {"name": "btnRefresh", "type": "TBitBtn"}, "cbtriggersdisb": {"name": "cbTriggersDisb", "type": "TCheckBox"}, "pnsearch": {"name": "pnSearch", "type": "TScrollBox"}, "bvbevel": {"name": "bvBevel", "type": "TBevel"}, "kreditsdataop_id": {"name": "KreditsDataOP_ID", "type": "TFloatField"}, "depozitsdataop_id": {"name": "DepozitsDataOP_ID", "type": "TFloatField"}, "accountsdataaccno": {"name": "AccountsDataACCNO", "type": "TWideStringField"}, "accountsdatasacc": {"name": "AccountsDataSACC", "type": "TFloatField"}, "accountsdatacurrencysname": {"name": "AccountsDataCURRENCYSNAME", "type": "TWideStringField"}, "accountsdataaccname": {"name": "AccountsDataACCNAME", "type": "TWideStringField"}, "transactionsdatauser": {"name": "TransactionsDataUSER", "type": "TStringField"}, "transactionsdatadebitaccno": {"name": "TransactionsDataDEBITACCNO", "type": "TWideStringField"}, "transactionsdatadebitcurrencysname": {"name": "TransactionsDataDEBITCURRENCYSNAME", "type": "TWideStringField"}, "transactionsdatacreditaccno": {"name": "TransactionsDataCREDITACCNO", "type": "TWideStringField"}, "transactionsdatacreditcurrencysname": {"name": "TransactionsDataCREDITCURRENCYSNAME", "type": "TWideStringField"}, "transactionsdataname": {"name": "TransactionsDataNAME", "type": "TWideStringField"}, "customersdatauser": {"name": "CustomersDataUSER", "type": "TStringField"}, "customersdataname": {"name": "CustomersDataNAME", "type": "TWideStringField"}, "kreditsdatauser": {"name": "KreditsDataUSER", "type": "TStringField"}, "kreditsdatacontractno": {"name": "KreditsDataCONTRACTNO", "type": "TWideStringField"}, "kreditsdatamonthday": {"name": "KreditsDataMONTHDAY", "type": "TWideStringField"}, "kreditsdatacontractaccno": {"name": "KreditsDataCONTRACTACCNO", "type": "TWideStringField"}, "kreditsdatacontractaccname": {"name": "KreditsDataCONTRACTACCNAME", "type": "TWideStringField"}, "kreditsdatacontractcurrency": {"name": "KreditsDataCONTRACTCURRENCY", "type": "TWideStringField"}, "depozitsdatauser": {"name": "DepozitsDataUSER", "type": "TStringField"}, "depozitsdatacontractno": {"name": "DepozitsDataCONTRACTNO", "type": "TWideStringField"}, "depozitsdatacontractaccno": {"name": "DepozitsDataCONTRACTACCNO", "type": "TWideStringField"}, "depozitsdatacontractaccname": {"name": "DepozitsDataCONTRACTACCNAME", "type": "TWideStringField"}, "depozitsdatacontractcurrency": {"name": "DepozitsDataCONTRACTCURRENCY", "type": "TWideStringField"}, "usersdataname": {"name": "UsersDataNAME", "type": "TWideStringField"}, "accountsdatauser": {"name": "AccountsDataUSER", "type": "TStringField"}, "repaintflag": {"name": "RepaintFlag", "type": "Boolean"}, "executing": {"name": "Executing", "type": "Boolean"}, "forder": {"name": "FOrder", "type": "TSearchOrder"}, "grid": {"name": "Grid", "type": "TMyDBGrid"}}, {"searchorder": {"name": "SearchOrder", "read": "FOrder", "write": "FOrder"}});
  U.init(async () => {
  });
  U.method("TfmAdmOwnerChangeAdvanced", "dbgOwnerDrawColumnCell", async function dbgOwnerDrawColumnCell(Self, p0, p1, p2, p3, p4) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "rect": $.copyArg(p1), "datacol": $.copyArg(p2), "column": $.copyArg(p3), "state": $.copyArg(p4), result: undefined, "index": 0, "marked": false, "selected": false};
  await $.fixArgs(L0, ["sender", "rect", "datacol", "column", "state"]);
  L0["marked"] = false;
  {
    const $t1 = (await $.v(C, "Grid"));
    if ($.truthy((await $.and_(($.in_((await $.wv([$t1], "dgMultiSelect", C, false)), (await $.wv([$t1], "Options", C, false)))), async () => (await $.mv((await $.mv((await $.wcall([$t1], "TMyDBGrid", [(await $.wv([$t1], "Grid", C, false))], C)), "Datalink")), "Active")))))) {
      await $.wset([$t1], "Marked", (await $.mcall((await $.wv([$t1], "SelectedRows", C, false)), "Find", [(await $.mv((await $.mv((await $.mv((await $.mv((await $.wcall([$t1], "TMyDBGrid", [(await $.wv([$t1], "Grid", C, false))], C)), "Datalink")), "Datasource")), "Dataset")), "Bookmark")), (await $.wv([$t1], "Index", { get: async () => L0["index"], set: async (v) => { L0["index"] = v; }, local: true }, false))])), { get: async () => L0["marked"], set: async (v) => { L0["marked"] = v; }, local: true });
    }
    await $.wset([$t1], "Selected", (await $.and_((await $.mv((await $.mv((await $.wcall([$t1], "TMyDBGrid", [(await $.wv([$t1], "Grid", C, false))], C)), "Datalink")), "Active")), async () => ($.eq($.sub((await $.mv((await $.wv([$t1], "Grid", C, false)), "Row")), 1), (await $.mv((await $.mv((await $.wcall([$t1], "TMyDBGrid", [(await $.wv([$t1], "Grid", C, false))], C)), "Datalink")), "ActiveRecord")))))), { get: async () => L0["selected"], set: async (v) => { L0["selected"] = v; }, local: true });
    if ($.truthy((await $.wv([$t1], "Marked", { get: async () => L0["marked"], set: async (v) => { L0["marked"] = v; }, local: true }, false)))) {
      await $.mset((await $.mv((await $.wv([$t1], "Canvas", C, false)), "Brush")), "Color", (await $.wv([$t1], "clHighlight", C, false)));
      await $.mset((await $.mv((await $.wv([$t1], "Canvas", C, false)), "Font")), "Color", (await $.wv([$t1], "clWhite", C, false)));
    }
    if ($.truthy((await $.wv([$t1], "Selected", { get: async () => L0["selected"], set: async (v) => { L0["selected"] = v; }, local: true }, false)))) {
      await $.mset((await $.mv((await $.wv([$t1], "Canvas", C, false)), "Brush")), "Color", (await $.wv([$t1], "clHighlight", C, false)));
      await $.mset((await $.mv((await $.wv([$t1], "Canvas", C, false)), "Font")), "Color", (await $.wv([$t1], "clWhite", C, false)));
      if ($.truthy((await $.wv([$t1], "Marked", { get: async () => L0["marked"], set: async (v) => { L0["marked"] = v; }, local: true }, false)))) {
        await $.mset((await $.mv((await $.wv([$t1], "Canvas", C, false)), "Brush")), "Color", (await $.wv([$t1], "clHighlight", C, false)));
      }
    }
    await $.stmt((await $.wcall([$t1], "DefaultDrawColumnCell", [(await $.wv([$t1], "Rect", { get: async () => L0["rect"], set: async (v) => { L0["rect"] = v; }, local: true }, false)), (await $.wv([$t1], "DataCol", { get: async () => L0["datacol"], set: async (v) => { L0["datacol"] = v; }, local: true }, false)), (await $.wv([$t1], "Column", { get: async () => L0["column"], set: async (v) => { L0["column"] = v; }, local: true }, false)), (await $.wv([$t1], "State", { get: async () => L0["state"], set: async (v) => { L0["state"] = v; }, local: true }, false))], C)));
  }
  {
    const $t2 = L0["column"];
    if ($.truthy($.eq((await $.mv((await $.wv([$t2], "Field", C, false)), "Tag")), 0))) {
      if ($.truthy($.ne((await $.wv([$t2], "Color", C, false)), (await $.wv([$t2], "clWhite", C, false))))) {
        await $.wset([$t2], "Color", (await $.wv([$t2], "clWhite", C, false)), C);
      }
      if ($.truthy($.ne((await $.mv((await $.wv([$t2], "Font", C, false)), "Color")), (await $.wv([$t2], "clWindowText", C, false))))) {
        await $.mset((await $.wv([$t2], "Font", C, false)), "Color", (await $.wv([$t2], "clWindowText", C, false)));
      }
    } else {
      if ($.truthy($.ne((await $.mv((await $.wv([$t2], "Column", { get: async () => L0["column"], set: async (v) => { L0["column"] = v; }, local: true }, false)), "Color")), (await $.wv([$t2], "clSilver", C, false))))) {
        await $.mset((await $.wv([$t2], "Column", { get: async () => L0["column"], set: async (v) => { L0["column"] = v; }, local: true }, false)), "Color", (await $.wv([$t2], "clSilver", C, false)));
      }
      if ($.truthy($.ne((await $.mv((await $.wv([$t2], "Font", C, false)), "Color")), (await $.wv([$t2], "clNavy", C, false))))) {
        await $.mset((await $.wv([$t2], "Font", C, false)), "Color", (await $.wv([$t2], "clNavy", C, false)));
      }
    }
  }
  return L0.result;
}, {"params": ["Sender", "Rect", "DataCol", "Column", "State"], "kind": "procedure", "ptypes": ["TObject", "TRect", "Integer", "TColumn", "TGridDrawState"]});
  U.method("TfmAdmOwnerChangeAdvanced", "CreateGrid", async function CreateGrid() { return $.notPorted("TfmAdmOwnerChangeAdvanced.CreateGrid", "cannot assign to call"); }, {"params": [], "kind": "procedure", "ptypes": [], "error": "cannot assign to call", "src": "procedure TfmAdmOwnerChangeAdvanced.CreateGrid;\nvar\n TempName: String;\nbegin\n TComponent(GRID) :=DuplicateComponents(dbgOwner);\n TempName:=dbgOwner.Name;\n dbgOwner.Destroy;\n GRID.Name:=TempName;\nend;"});
  U.method("TfmAdmOwnerChangeAdvanced", "FormCreate", async function FormCreate(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.stmt($.call(C, "CreateGrid", []));
  await $.set(C, "FOrder", (await $.v(C, "soNone")));
  await $.mcall((await $.v(C, "UsersData")), "Open", []);
  await $.mcall((await $.v(C, "AccountsData")), "Open", []);
  await $.mset((await $.v(C, "dtDat")), "DateTime", (await $.v(C, "Sb_GetSystemDate")));
  await $.stmt((await $.mcall((await $.v(C, "TransactionsData")), "SetVariable", ["DAT", (await $.mv((await $.v(C, "dtDat")), "DateTime"))])));
  await $.set(C, "Executing", false);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TfmAdmOwnerChangeAdvanced", "tbMainChange", async function tbMainChange(Self, p0, p1, p2) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "newtab": $.copyArg(p1), "allowchange": $.asRef(p2), result: undefined};
  await $.fixArgs(L0, ["sender", "newtab"]);
  {
    const $t3 = (await $.v(C, "dbgOwner"));
    const $t4 = (await $.wv([$t3], "DataSource", C, false));
    { const $t5 = (await $.wv([$t3, $t4], "NewTab", { get: async () => L0["newtab"], set: async (v) => { L0["newtab"] = v; }, local: true }, false));
      if ($.eq($t5, 0)) {
        if ($.truthy($.not(((await $.mv((await $.wv([$t3, $t4], "AccountsData", C, false)), "Active")))))) {
          await $.mcall((await $.wv([$t3, $t4], "AccountsData", C, false)), "Open", []);
        }
        await $.wset([$t3, $t4], "DataSet", (await $.wv([$t3, $t4], "AccountsData", C, false)), C);
      }
      else if ($.eq($t5, 1)) {
        if ($.truthy($.not(((await $.mv((await $.wv([$t3, $t4], "TransactionsData", C, false)), "Active")))))) {
          await $.mcall((await $.wv([$t3, $t4], "TransactionsData", C, false)), "Open", []);
        }
        await $.wset([$t3, $t4], "DataSet", (await $.wv([$t3, $t4], "TransactionsData", C, false)), C);
      }
      else if ($.eq($t5, 2)) {
        if ($.truthy($.not(((await $.mv((await $.wv([$t3, $t4], "CustomersData", C, false)), "Active")))))) {
          await $.mcall((await $.wv([$t3, $t4], "CustomersData", C, false)), "Open", []);
        }
        await $.wset([$t3, $t4], "DataSet", (await $.wv([$t3, $t4], "CustomersData", C, false)), C);
      }
      else if ($.eq($t5, 3)) {
        if ($.truthy($.not(((await $.mv((await $.wv([$t3, $t4], "KreditsData", C, false)), "Active")))))) {
          await $.mcall((await $.wv([$t3, $t4], "KreditsData", C, false)), "Open", []);
        }
        await $.wset([$t3, $t4], "DataSet", (await $.wv([$t3, $t4], "KreditsData", C, false)), C);
      }
      else if ($.eq($t5, 4)) {
        if ($.truthy($.not(((await $.mv((await $.wv([$t3, $t4], "DepozitsData", C, false)), "Active")))))) {
          await $.mcall((await $.wv([$t3, $t4], "DepozitsData", C, false)), "Open", []);
        }
        await $.wset([$t3, $t4], "DataSet", (await $.wv([$t3, $t4], "DepozitsData", C, false)), C);
      }
    }
    if ($.truthy($.ne((await $.mcall((await $.wcall([$t3, $t4], "TOracleDataSet", [(await $.wv([$t3, $t4], "DataSet", C, false))], C)), "VariableIndex", ["DAT"])), (-(1))))) {
      await $.mset((await $.wv([$t3, $t4], "dtDat", C, false)), "DateTime", (await $.mcall((await $.wcall([$t3, $t4], "TOracleDataSet", [(await $.wv([$t3, $t4], "DataSet", C, false))], C)), "GetVariable", ["DAT"])));
      await $.mset((await $.wv([$t3, $t4], "dtDat", C, false)), "Enabled", (await $.wv([$t3, $t4], "True", C, false)));
    } else {
      await $.mset((await $.wv([$t3, $t4], "dtDat", C, false)), "Enabled", (await $.wv([$t3, $t4], "False", C, false)));
    }
  }
  await $.stmt($.call(C, "RecreateSearchPanel", []));
  return L0.result;
}, {"params": ["Sender", "NewTab", "AllowChange"], "kind": "procedure", "ptypes": ["TObject", "Integer", "Boolean"]});
  U.method("TfmAdmOwnerChangeAdvanced", "MouseWheelHandler", async function MouseWheelHandler(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"message": $.asRef(p0), result: undefined, "key": 0};
  if ($.truthy((await $.and_(($.eq((await $.mv((await L0["message"].get()), "Msg")), (await $.v(C, "WM_MOUSEWHEEL")))), async () => ((await $.mv((await $.v(C, "dbgOwner")), "Focused"))))))) {
    {
      const $t6 = (await $.call(C, "TCMMouseWheel", [(await L0["message"].get())]));
      const $t7 = (await $.mv((await $.mv((await $.wv([$t6], "dbgOwner", C, false)), "DataSource")), "DataSet"));
      if ($.truthy($.lt((await $.wv([$t6, $t7], "WheelDelta", C, false)), 0))) {
        await $.wset([$t6, $t7], "Key", (await $.wv([$t6, $t7], "VK_DOWN", C, false)), { get: async () => L0["key"], set: async (v) => { L0["key"] = v; }, local: true });
      } else {
        await $.wset([$t6, $t7], "Key", (await $.wv([$t6, $t7], "VK_UP", C, false)), { get: async () => L0["key"], set: async (v) => { L0["key"] = v; }, local: true });
      }
      if ($.truthy((await $.wcall([$t6, $t7], "Assigned", [(await $.wv([$t6, $t7], "dbgOwner", C, false))], C)))) {
        await $.stmt((await $.wcall([$t6, $t7], "PostMessage", [(await $.mv((await $.wv([$t6, $t7], "dbgOwner", C, false)), "Handle")), (await $.wv([$t6, $t7], "WM_KeyDOWN", C, false)), (await $.wv([$t6, $t7], "Key", { get: async () => L0["key"], set: async (v) => { L0["key"] = v; }, local: true }, false)), 0], C)));
      }
    }
  } else {
    await $.inherited(Self, "TfmAdmOwnerChangeAdvanced", "MouseWheelHandler", null, arguments);
  }
  return L0.result;
}, {"params": ["Message"], "kind": "procedure", "ptypes": ["TMessage"]});
  U.method("TfmAdmOwnerChangeAdvanced", "dtDatChange", async function dtDatChange(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t8 = (await $.v(C, "dbgOwner"));
    const $t9 = (await $.wcall([$t8], "TOracleDataSet", [(await $.mv((await $.wv([$t8], "DataSource", C, false)), "DataSet"))], C));
    if ($.truthy($.ne((await $.mv((await $.wv([$t8, $t9], "dtDat", C, false)), "DateTime")), (await $.wcall([$t8, $t9], "GetVariable", ["DAT"], C))))) {
      await $.stmt((await $.wcall([$t8, $t9], "SetVariable", ["DAT", (await $.mv((await $.wv([$t8, $t9], "dtDat", C, false)), "DateTime"))], C)));
      await $.stmt($.wcall([$t8, $t9], "Refresh", [], C));
    }
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TfmAdmOwnerChangeAdvanced", "btnRefreshClick", async function btnRefreshClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t10 = (await $.call(C, "TOracleDataSet", [(await $.mv((await $.mv((await $.v(C, "dbgOwner")), "DataSource")), "DataSet"))]));
    if ($.truthy((await $.wv([$t10], "CachedUpdates", C, false)))) {
      await $.stmt($.wcall([$t10], "Close", [], C));
      await $.stmt($.wcall([$t10], "Open", [], C));
    } else {
      await $.stmt($.wcall([$t10], "Refresh", [], C));
    }
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TfmAdmOwnerChangeAdvanced", "btnOkClick", async function btnOkClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "i": 0};
  await $.fixArgs(L0, ["sender"]);
  { const $t11 = $.sub((await $.v(C, "ComponentCount")), 1);
    L0["i"] = 0;
    let $t12 = true;
    for (;;) {
      if (!$t12) { L0["i"] = $.succ(L0["i"], 1); }
      $t12 = false;
      if (!($.ord(L0["i"]) <= $.ord($t11))) break;
      if ($.truthy(($.is_((await $.idx((await $.v(C, "Components")), [L0["i"]])), "TOracleDataSet")))) {
        {
          const $t13 = ((await $.idx((await $.v(C, "Components")), [L0["i"]])));
          const $t14 = (await $.mv((await $.wv([$t13], "AdministrationData", C, false)), "pcADM"));
          if ($.truthy((await $.and_((await $.wv([$t13, $t14], "CachedUpdates", C, false)), async () => (await $.wv([$t13, $t14], "UpdatesPending", C, false)))))) {
            if ($.truthy((await $.mv((await $.wv([$t13, $t14], "cbTriggersDisb", C, false)), "Checked")))) {
              await $.stmt((await $.wcall([$t13, $t14], "CallProcedure", ["TriggerInterface", [(await $.wv([$t13, $t14], "Sm_Own", C, false)), (await $.wv([$t13, $t14], "GetUpdatingTable", C, false)), (await $.wv([$t13, $t14], "False", C, false))]], C)));
            }
            await $.stmt((await $.mcall((await $.wv([$t13, $t14], "Session", C, false)), "ApplyUpdates", [[(await $.wcall([$t13, $t14], "TOracleDataSet", [(await $.idx((await $.mv(Self, "Components")), [(await $.wv([$t13, $t14], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false))]))], C))], (await $.wv([$t13, $t14], "True", C, false))])));
            if ($.truthy((await $.mv((await $.wv([$t13, $t14], "cbTriggersDisb", C, false)), "Checked")))) {
              await $.stmt((await $.wcall([$t13, $t14], "CallProcedure", ["TriggerInterface", [(await $.wv([$t13, $t14], "Sm_Own", C, false)), (await $.wv([$t13, $t14], "GetUpdatingTable", C, false)), (await $.wv([$t13, $t14], "True", C, false))]], C)));
            }
          }
        }
      }
      await $.tick();
    }
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TfmAdmOwnerChangeAdvanced", "RecreateSearchPanel", async function RecreateSearchPanel(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: undefined};
  await $.stmt($.call(C, "ClearSearhPanel", []));
  await $.stmt($.call(C, "CreateSearchPanel", []));
  return L0.result;
}, {"params": [], "kind": "procedure", "ptypes": []});
  U.method("TfmAdmOwnerChangeAdvanced", "ClearSearhPanel", async function ClearSearhPanel(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: undefined};
  await $.mcall((await $.v(C, "pnSearch")), "DestroyComponents", []);
  return L0.result;
}, {"params": [], "kind": "procedure", "ptypes": []});
  U.method("TfmAdmOwnerChangeAdvanced", "CreateSearchPanel", async function CreateSearchPanel(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: undefined, "i": 0, "edleft": 0, "tempedit": null};
  {
    const $t15 = (await $.v(C, "dbgOwner"));
    await $.wset([$t15], "edLeft", 4, { get: async () => L0["edleft"], set: async (v) => { L0["edleft"] = v; }, local: true });
    { const $t16 = $.sub((await $.mv((await $.wv([$t15], "Columns", C, false)), "Count")), 1);
      await $.wset([$t15], "i", 0, { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true });
      let $t17 = true;
      for (;;) {
        if (!$t17) { await $.wset([$t15], "i", $.succ((await $.wv([$t15], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false)), 1), { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }); }
        $t17 = false;
        if (!($.ord((await $.wv([$t15], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false))) <= $.ord($t16))) break;
        {
          const $t18 = (await $.wv([$t15], "TempEdit", { get: async () => L0["tempedit"], set: async (v) => { L0["tempedit"] = v; }, local: true }, false));
          await $.wset([$t15, $t18], "TempEdit", (await $.mcall((await $.wv([$t15, $t18], "TEdit", C, false)), "Create", [(await $.wv([$t15, $t18], "pnSearch", C, false))])), { get: async () => L0["tempedit"], set: async (v) => { L0["tempedit"] = v; }, local: true });
          await $.wset([$t15, $t18], "Hint", (await $.mv((await $.mv((await $.idx((await $.wv([$t15, $t18], "Columns", C, false)), [(await $.wv([$t15, $t18], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false))])), "Field")), "FieldName")), C);
          if ($.truthy($.eq((await $.mcall((await $.wv([$t15, $t18], "pnSearch", C, false)), "FindComponent", [$.add("ed_", (await $.wv([$t15, $t18], "Hint", C, false)))])), null))) {
            await $.wset([$t15, $t18], "Name", $.add("ed_", (await $.wv([$t15, $t18], "Hint", C, false))), C);
          }
          await $.wset([$t15, $t18], "Text", (await $.wv([$t15, $t18], "EmptyStr", C, false)), C);
          await $.wset([$t15, $t18], "OnChange", (await $.wv([$t15, $t18], "FastSearch", C, true)), C);
          await $.wset([$t15, $t18], "OnKeyPress", (await $.wv([$t15, $t18], "KeyFastSearch", C, true)), C);
          await $.wset([$t15, $t18], "OnKeyDown", (await $.wv([$t15, $t18], "KeyFastUpDownSearch", C, true)), C);
          await $.stmt((await $.wcall([$t15, $t18], "SetBounds", [(await $.wv([$t15, $t18], "edLeft", { get: async () => L0["edleft"], set: async (v) => { L0["edleft"] = v; }, local: true }, false)), 4, (await $.mv((await $.idx((await $.wv([$t15, $t18], "Columns", C, false)), [(await $.wv([$t15, $t18], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false))])), "Width")), 10], C)));
          await $.wset([$t15, $t18], "Parent", (await $.wv([$t15, $t18], "pnSearch", C, false)), C);
          await $.wset([$t15, $t18], "Ctl3D", (await $.wv([$t15, $t18], "False", C, false)), C);
          await $.wset([$t15, $t18], "Color", (await $.wv([$t15, $t18], "clSilver", C, false)), C);
          await $.mset((await $.wv([$t15, $t18], "Font", C, false)), "Color", (await $.wv([$t15, $t18], "clNavy", C, false)));
          await $.wset([$t15, $t18], "edLeft", $.add($.add((await $.wv([$t15, $t18], "edLeft", { get: async () => L0["edleft"], set: async (v) => { L0["edleft"] = v; }, local: true }, false)), (await $.mv((await $.idx((await $.wv([$t15, $t18], "Columns", C, false)), [(await $.wv([$t15, $t18], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false))])), "Width"))), 1), { get: async () => L0["edleft"], set: async (v) => { L0["edleft"] = v; }, local: true });
        }
        await $.tick();
      }
    }
  }
  return L0.result;
}, {"params": [], "kind": "procedure", "ptypes": []});
  U.method("TfmAdmOwnerChangeAdvanced", "KeyFastSearch", async function KeyFastSearch(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "key": $.asRef(p1), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.eq((await $.call(C, "Ord", [(await L0["key"].get())])), 13))) {
    await $.set(C, "SearchOrder", (await $.v(C, "soNone")));
    await $.stmt((await $.call(C, "FastSearch", [L0["sender"]])));
    await L0["key"].set("\u0000");
  }
  return L0.result;
}, {"params": ["Sender", "Key"], "kind": "procedure", "ptypes": ["TObject", "Char"]});
  U.method("TfmAdmOwnerChangeAdvanced", "KeyFastUpDownSearch", async function KeyFastUpDownSearch(Self, p0, p1, p2) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "key": $.asRef(p1), "shift": $.copyArg(p2), result: undefined};
  await $.fixArgs(L0, ["sender", "shift"]);
  { const $t19 = (await L0["key"].get());
    if ($.eq($t19, (await $.v(C, "VK_UP")))) {
      await $.set(C, "SearchOrder", (await $.v(C, "soBackward")));
      await $.stmt((await $.call(C, "FastSearch", [L0["sender"]])));
      await L0["key"].set(0);
    }
    else if ($.eq($t19, (await $.v(C, "VK_DOWN")))) {
      await $.set(C, "SearchOrder", (await $.v(C, "soForward")));
      await $.stmt((await $.call(C, "FastSearch", [L0["sender"]])));
      await L0["key"].set(0);
    }
  }
  return L0.result;
}, {"params": ["Sender", "Key", "Shift"], "kind": "procedure", "ptypes": ["TObject", "Word", "TShiftState"]});
  U.method("TfmAdmOwnerChangeAdvanced", "FastSearch", async function FastSearch(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "recopt": null};
  await $.fixArgs(L0, ["sender"]);
  L0["recopt"] = [(await $.v(C, "srIgnoreCase")), (await $.v(C, "srPartialMatch"))];
  if ($.truthy(($.is_(L0["sender"], "TEdit")))) {
    {
      const $t20 = (L0["sender"]);
      const $t21 = (await $.wcall([$t20], "TORacleDataSet", [(await $.mv((await $.mv((await $.wv([$t20], "dbgOwner", C, false)), "DataSource")), "DataSet"))], C));
      if ($.truthy((await $.wv([$t20, $t21], "Active", C, false)))) {
        { const $t22 = (await $.wv([$t20, $t21], "SearchOrder", C, false));
          if ($.eq($t22, (await $.wv([$t20, $t21], "soForward", C, false)))) {
            await $.stmt((await $.wcall([$t20, $t21], "Include", [$.ref(async () => (await $.wv([$t20, $t21], "RecOpt", { get: async () => L0["recopt"], set: async (v) => { L0["recopt"] = v; }, local: true }, false)), async ($t23) => { await $.wset([$t20, $t21], "RecOpt", $t23, { get: async () => L0["recopt"], set: async (v) => { L0["recopt"] = v; }, local: true }); }), (await $.wv([$t20, $t21], "srForward", C, false))], C)));
          }
          else if ($.eq($t22, (await $.wv([$t20, $t21], "soBackward", C, false)))) {
            await $.stmt((await $.wcall([$t20, $t21], "Include", [$.ref(async () => (await $.wv([$t20, $t21], "RecOpt", { get: async () => L0["recopt"], set: async (v) => { L0["recopt"] = v; }, local: true }, false)), async ($t24) => { await $.wset([$t20, $t21], "RecOpt", $t24, { get: async () => L0["recopt"], set: async (v) => { L0["recopt"] = v; }, local: true }); }), (await $.wv([$t20, $t21], "srBackward", C, false))], C)));
          }
          else if ($.eq($t22, (await $.wv([$t20, $t21], "soNone", C, false)))) {
            await $.stmt((await $.wcall([$t20, $t21], "Include", [$.ref(async () => (await $.wv([$t20, $t21], "RecOpt", { get: async () => L0["recopt"], set: async (v) => { L0["recopt"] = v; }, local: true }, false)), async ($t25) => { await $.wset([$t20, $t21], "RecOpt", $t25, { get: async () => L0["recopt"], set: async (v) => { L0["recopt"] = v; }, local: true }); }), (await $.wv([$t20, $t21], "srFromBeginning", C, false))], C)));
          }
        }
        await $.wset([$t20, $t21], "RepaintFlag", (await $.wv([$t20, $t21], "True", C, false)), C);
        await $.stmt((await $.wcall([$t20, $t21], "SearchRecord", [(await $.wv([$t20, $t21], "Hint", C, false)), (await $.wv([$t20, $t21], "Text", C, false)), (await $.wv([$t20, $t21], "RecOpt", { get: async () => L0["recopt"], set: async (v) => { L0["recopt"] = v; }, local: true }, false))], C)));
      }
    }
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TfmAdmOwnerChangeAdvanced", "btnSearchClick", async function btnSearchClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mset((await $.v(C, "pnSearch")), "Visible", $.not(((await $.mv((await $.v(C, "pnSearch")), "Visible")))));
  if ($.truthy((await $.mv((await $.v(C, "pnSearch")), "Visible")))) {
    await $.stmt($.call(C, "RecreateSearchPanel", []));
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TfmAdmOwnerChangeAdvanced", "EnablingData", async function EnablingData(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"dataset": $.copyArg(p0), result: undefined, "i": 0, "saveduserid": 0, "bk": null};
  await $.fixArgs(L0, ["dataset"]);
  L0["bk"] = (await $.mv(L0["dataset"], "GetBookmark"));
  await $.set(C, "Executing", true);
  {
    const $t26 = L0["dataset"];
    const $t27 = (await $.mv((await $.wv([$t26], "dbgOwner", C, false)), "SelectedRows"));
    try {
      if ($.truthy($.gt((await $.mv((await $.mv((await $.wv([$t26, $t27], "dbgOwner", C, false)), "SelectedRows")), "Count")), 0))) {
        await $.wset([$t26, $t27], "SavedUserID", (await $.mv((await $.wcall([$t26, $t27], "FieldByName", ["OP_ID"], C)), "AsInteger")), { get: async () => L0["saveduserid"], set: async (v) => { L0["saveduserid"] = v; }, local: true });
        await $.stmt($.wcall([$t26, $t27], "DisableControls", [], C));
        { const $t28 = $.sub((await $.wv([$t26, $t27], "Count", C, false)), 1);
          await $.wset([$t26, $t27], "i", 0, { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true });
          let $t29 = true;
          for (;;) {
            if (!$t29) { await $.wset([$t26, $t27], "i", $.succ((await $.wv([$t26, $t27], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false)), 1), { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }); }
            $t29 = false;
            if (!($.ord((await $.wv([$t26, $t27], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false))) <= $.ord($t28))) break;
            await $.stmt((await $.wcall([$t26, $t27], "GoToBookmark", [(await $.wcall([$t26, $t27], "pointer", [(await $.idx((await $.wv([$t26, $t27], "Items", C, false)), [(await $.wv([$t26, $t27], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false))]))], C))], C)));
            await $.stmt($.wcall([$t26, $t27], "Edit", [], C));
            await $.mset((await $.wcall([$t26, $t27], "FieldByName", ["OP_ID"], C)), "AsInteger", (await $.wv([$t26, $t27], "SavedUserID", { get: async () => L0["saveduserid"], set: async (v) => { L0["saveduserid"] = v; }, local: true }, false)));
            await $.stmt($.wcall([$t26, $t27], "Post", [], C));
            await $.tick();
          }
        }
        await $.stmt((await $.wcall([$t26, $t27], "GoToBookmark", [(await $.wv([$t26, $t27], "Bk", { get: async () => L0["bk"], set: async (v) => { L0["bk"] = v; }, local: true }, false))], C)));
        await $.stmt($.wcall([$t26, $t27], "EnableControls", [], C));
        await $.stmt((await $.wcall([$t26, $t27], "GoToBookmark", [(await $.wv([$t26, $t27], "Bk", { get: async () => L0["bk"], set: async (v) => { L0["bk"] = v; }, local: true }, false))], C)));
      }
    } finally {
      await $.wset([$t26, $t27], "Executing", (await $.wv([$t26, $t27], "False", C, false)), C);
    }
  }
  return L0.result;
}, {"params": ["DataSet"], "kind": "procedure", "ptypes": ["TORacleDataSet"]});
  U.method("TfmAdmOwnerChangeAdvanced", "AccountsDataAfterPost", async function AccountsDataAfterPost(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"dataset": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["dataset"]);
  if ($.truthy($.not(((await $.v(C, "Executing")))))) {
    await $.stmt((await $.call(C, "EnablingData", [(await $.call(C, "TOracleDataSet", [L0["dataset"]]))])));
  }
  return L0.result;
}, {"params": ["DataSet"], "kind": "procedure", "ptypes": ["TDataSet"]});
  U.method("TfmAdmOwnerChangeAdvanced", "dbgOwnerKeyDown", async function dbgOwnerKeyDown(Self, p0, p1, p2) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "key": $.asRef(p1), "shift": $.copyArg(p2), result: undefined};
  await $.fixArgs(L0, ["sender", "shift"]);
  if ($.truthy($.eq((await L0["key"].get()), (await $.v(C, "VK_RETURN"))))) {
    {
      const $t30 = (await $.mv((await $.mv((L0["sender"]), "DataSource")), "DataSet"));
      if ($.truthy((await $.and_(((await $.wv([$t30], "Active", C, false))), async () => ($.eq((await $.wv([$t30], "State", C, false)), (await $.wv([$t30], "dsEdit", C, false)))))))) {
        await $.stmt($.wcall([$t30], "Post", [], C));
      }
      await $.wset([$t30], "key", 0, { get: async () => await L0["key"].get(), set: async (v) => { await L0["key"].set(v); }, local: true });
    }
  }
  return L0.result;
}, {"params": ["Sender", "Key", "Shift"], "kind": "procedure", "ptypes": ["TObject", "Word", "TShiftState"]});
  return U;
}
