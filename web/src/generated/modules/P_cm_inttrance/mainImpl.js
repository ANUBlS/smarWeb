// Generated from mainImpl.pas by pas2js — do not edit by hand; regenerate instead.
/* eslint-disable */
// @ts-nocheck

export default function define($) {
  const U = $.unit("mainImpl", ["Windows", "Messages", "SysUtils", "Classes", "Graphics", "Controls", "Forms", "NLSDialogs", "Buttons", "StdCtrls", "CMCurrencyEdit", "Mask", "DBCtrls", "ExtCtrls", "Db", "OracleData", "ComCtrls", "Oracle", "Grids", "DBGridEh", "ToolWin", "ImgList", "ActnList", "CMExcelExport", "DBGridEhGrouping", "GridsEh", "CommonDecls", "sboapiDataModuleImpl", "addimpl", "DueIntFormImpl"]);
  const C = [U];
  U.defClass("TMainforum", "TForm", {"cmexcelexport1": {"name": "CMExcelExport1", "type": "TCMExcelExport"}, "imagelist1": {"name": "ImageList1", "type": "TImageList"}, "panel4": {"name": "Panel4", "type": "TPanel"}, "toolbar1": {"name": "ToolBar1", "type": "TToolBar"}, "toolbutton1": {"name": "ToolButton1", "type": "TToolButton"}, "toolbutton2": {"name": "ToolButton2", "type": "TToolButton"}, "toolbutton3": {"name": "ToolButton3", "type": "TToolButton"}, "toolbutton6": {"name": "ToolButton6", "type": "TToolButton"}, "toolbutton7": {"name": "ToolButton7", "type": "TToolButton"}, "dbgrideh1": {"name": "DBGridEh1", "type": "TDBGridEh"}, "statusbar1": {"name": "StatusBar1", "type": "TStatusBar"}, "datasource1": {"name": "DataSource1", "type": "TDataSource"}, "oracledataset1": {"name": "OracleDataSet1", "type": "TOracleDataSet"}, "oracledataset1id": {"name": "OracleDataSet1ID", "type": "TFloatField"}, "oracledataset1creditid": {"name": "OracleDataSet1CREDITID", "type": "TFloatField"}, "oracledataset1dat": {"name": "OracleDataSet1DAT", "type": "TDateTimeField"}, "oracledataset1amount": {"name": "OracleDataSet1AMOUNT", "type": "TFloatField"}, "oracledataset1trid": {"name": "OracleDataSet1TRID", "type": "TFloatField"}, "toolbutton4": {"name": "ToolButton4", "type": "TToolButton"}, "oracledataset1stat": {"name": "OracleDataSet1stat", "type": "TWideStringField"}, "oracledataset1status": {"name": "OracleDataSet1STATUS", "type": "TFloatField"}, "oracledataset1text": {"name": "OracleDataSet1TEXT", "type": "TWideStringField"}}, {});
  U.init(async () => {
    U.var_("Mainforum", null, "TMainforum");
    U.var_("dd", 0, "integer");
    U.var_("RefreshAfterClose", false, "Boolean");
  });
  U.func("InitPlugin", async function InitPlugin(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"s": $.copyArg(p0), result: undefined, "crd_id": 0, "cust_id": 0, "curr_id": 0, "br_id": 0, "cat_id": 0, "crd_num": '', "val_name": ''};
  await $.fixArgs(L0, ["s"]);
  L0["crd_id"] = (await $.v(C, "Get_SelectedCrdID"));
  {
    const $t1 = (await $.mv((await $.v(C, "AddForm")), "OracleDataSet1"));
    if ($.truthy((await $.wv([$t1], "Active", C, false)))) {
      await $.stmt($.wcall([$t1], "Close", [], C));
    }
    await $.stmt((await $.wcall([$t1], "SetVariable", ["crid", (await $.wv([$t1], "Crd_id", { get: async () => L0["crd_id"], set: async (v) => { L0["crd_id"] = v; }, local: true }, false))], C)));
    await $.stmt($.wcall([$t1], "Open", [], C));
    await $.wset([$t1], "Cust_id", (await $.mv((await $.wcall([$t1], "FieldByName", ["Boorowerid"], C)), "AsInteger")), { get: async () => L0["cust_id"], set: async (v) => { L0["cust_id"] = v; }, local: true });
    await $.wset([$t1], "Curr_id", (await $.mv((await $.wcall([$t1], "FieldByName", ["currency"], C)), "AsInteger")), { get: async () => L0["curr_id"], set: async (v) => { L0["curr_id"] = v; }, local: true });
    await $.wset([$t1], "Br_id", (await $.mv((await $.wcall([$t1], "FieldByName", ["branchid"], C)), "AsInteger")), { get: async () => L0["br_id"], set: async (v) => { L0["br_id"] = v; }, local: true });
    await $.wset([$t1], "Cat_id", (await $.mv((await $.wcall([$t1], "FieldByName", ["customertype"], C)), "AsInteger")), { get: async () => L0["cat_id"], set: async (v) => { L0["cat_id"] = v; }, local: true });
  }
  {
    const $t2 = (await $.mv((await $.v(C, "AddForm")), "InterestInfo"));
    if ($.truthy((await $.wv([$t2], "Active", C, false)))) {
      await $.stmt($.wcall([$t2], "Close", [], C));
    }
    await $.stmt((await $.wcall([$t2], "SetVariable", ["Crdid", (await $.wv([$t2], "Crd_id", { get: async () => L0["crd_id"], set: async (v) => { L0["crd_id"] = v; }, local: true }, false))], C)));
    await $.stmt($.wcall([$t2], "Open", [], C));
    await $.wset([$t2], "dd", (await $.mv((await $.wcall([$t2], "FieldByName", ["d"], C)), "asinteger")), C);
  }
  if ($.truthy($.eq((await $.v(C, "dd")), 2))) {
    await $.mset((await $.mv((await $.v(C, "AddForm")), "Label1")), "caption", "Bk faiz hesabı");
    await $.mset((await $.mv((await $.v(C, "AddForm")), "Label2")), "caption", "Bk faiz gəlir hesabı");
    {
      const $t3 = (await $.mv((await $.v(C, "AddForm")), "OutIntIncomeAccounts"));
      if ($.truthy((await $.wv([$t3], "Active", C, false)))) {
        await $.stmt($.wcall([$t3], "Close", [], C));
      }
      await $.stmt((await $.wcall([$t3], "SetVariable", ["CurrID", (await $.wv([$t3], "Curr_id", { get: async () => L0["curr_id"], set: async (v) => { L0["curr_id"] = v; }, local: true }, false))], C)));
      await $.stmt((await $.wcall([$t3], "SetVariable", ["BrID", (await $.wv([$t3], "br_id", { get: async () => L0["br_id"], set: async (v) => { L0["br_id"] = v; }, local: true }, false))], C)));
      await $.stmt((await $.wcall([$t3], "SetVariable", ["CatID", (await $.wv([$t3], "Cat_id", { get: async () => L0["cat_id"], set: async (v) => { L0["cat_id"] = v; }, local: true }, false))], C)));
      await $.stmt($.wcall([$t3], "Open", [], C));
      await $.mset((await $.mv((await $.wv([$t3], "AddForm", C, false)), "DBEdit2")), "DataSource", (await $.mv((await $.wv([$t3], "AddForm", C, false)), "OutIntIncomeDatSrc")));
      await $.mset((await $.mv((await $.wv([$t3], "AddForm", C, false)), "DBEdit2")), "DataField", "ACC_NO");
    }
    {
      const $t4 = (await $.mv((await $.v(C, "AddForm")), "OutInterestsAccounts"));
      if ($.truthy((await $.wv([$t4], "Active", C, false)))) {
        await $.stmt($.wcall([$t4], "Close", [], C));
      }
      await $.stmt((await $.wcall([$t4], "SetVariable", ["CrdID", (await $.wv([$t4], "Crd_id", { get: async () => L0["crd_id"], set: async (v) => { L0["crd_id"] = v; }, local: true }, false))], C)));
      await $.stmt($.wcall([$t4], "Open", [], C));
      await $.mset((await $.mv((await $.wv([$t4], "AddForm", C, false)), "DBEdit1")), "DataSource", (await $.mv((await $.wv([$t4], "AddForm", C, false)), "OutInterestsDatSrc")));
      await $.mset((await $.mv((await $.wv([$t4], "AddForm", C, false)), "DBEdit1")), "DataField", "ACC_NO");
    }
  } else {
    {
      const $t5 = (await $.mv((await $.v(C, "AddForm")), "InterestsAccounts"));
      if ($.truthy((await $.wv([$t5], "Active", C, false)))) {
        await $.stmt($.wcall([$t5], "Close", [], C));
      }
      await $.stmt((await $.wcall([$t5], "SetVariable", ["CurrID", (await $.wv([$t5], "Curr_id", { get: async () => L0["curr_id"], set: async (v) => { L0["curr_id"] = v; }, local: true }, false))], C)));
      await $.stmt((await $.wcall([$t5], "SetVariable", ["BrID", (await $.wv([$t5], "br_id", { get: async () => L0["br_id"], set: async (v) => { L0["br_id"] = v; }, local: true }, false))], C)));
      await $.stmt((await $.wcall([$t5], "SetVariable", ["CatID", (await $.wv([$t5], "Cat_id", { get: async () => L0["cat_id"], set: async (v) => { L0["cat_id"] = v; }, local: true }, false))], C)));
      await $.stmt($.wcall([$t5], "Open", [], C));
      await $.mset((await $.mv((await $.wv([$t5], "AddForm", C, false)), "DBEdit2")), "DataSource", (await $.mv((await $.wv([$t5], "AddForm", C, false)), "IntAccDatSrc")));
      await $.mset((await $.mv((await $.wv([$t5], "AddForm", C, false)), "DBEdit2")), "DataField", "ACC_NO");
      await $.mset((await $.mv((await $.wv([$t5], "DueIntForm", C, false)), "DBEdit2")), "DataSource", (await $.mv((await $.wv([$t5], "AddForm", C, false)), "IntAccDatSrc")));
      await $.mset((await $.mv((await $.wv([$t5], "DueIntForm", C, false)), "DBEdit2")), "DataField", "ACC_NO");
    }
    {
      const $t6 = (await $.mv((await $.v(C, "AddForm")), "CustIntAccounts"));
      if ($.truthy((await $.wv([$t6], "Active", C, false)))) {
        await $.stmt($.wcall([$t6], "Close", [], C));
      }
      await $.stmt((await $.wcall([$t6], "SetVariable", ["CrdID", (await $.wv([$t6], "Crd_id", { get: async () => L0["crd_id"], set: async (v) => { L0["crd_id"] = v; }, local: true }, false))], C)));
      await $.stmt($.wcall([$t6], "Open", [], C));
      await $.mset((await $.mv((await $.wv([$t6], "AddForm", C, false)), "DBEdit1")), "DataSource", (await $.mv((await $.wv([$t6], "AddForm", C, false)), "CustIntAccDatSrc")));
      await $.mset((await $.mv((await $.wv([$t6], "AddForm", C, false)), "DBEdit1")), "DataField", "ACC_NO");
    }
    {
      const $t7 = (await $.mv((await $.v(C, "AddForm")), "CustDIntAccounts"));
      if ($.truthy((await $.wv([$t7], "Active", C, false)))) {
        await $.stmt($.wcall([$t7], "Close", [], C));
      }
      await $.stmt((await $.wcall([$t7], "SetVariable", ["CrdID", (await $.wv([$t7], "Crd_id", { get: async () => L0["crd_id"], set: async (v) => { L0["crd_id"] = v; }, local: true }, false))], C)));
      await $.stmt($.wcall([$t7], "Open", [], C));
      await $.mset((await $.mv((await $.wv([$t7], "DueIntForm", C, false)), "DBEdit1")), "DataSource", (await $.mv((await $.wv([$t7], "AddForm", C, false)), "CustDIntAccDatSrc")));
      await $.mset((await $.mv((await $.wv([$t7], "DueIntForm", C, false)), "DBEdit1")), "DataField", "ACC_NO");
    }
  }
  await $.mcall((await $.v(C, "Mainforum")), "ShowModal", []);
  return L0.result;
}, {"params": ["s"], "kind": "procedure", "ptypes": ["String"]});
  U.method("TMainforum", "FormCanResize", async function FormCanResize(Self, p0, p1, p2, p3) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "newwidth": $.asRef(p1), "newheight": $.asRef(p2), "resize": $.asRef(p3), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await L0["resize"].set(false);
  return L0.result;
}, {"params": ["Sender", "NewWidth", "NewHeight", "Resize"], "kind": "procedure", "ptypes": ["TObject", "Integer", "Integer", "Boolean"]});
  U.method("TMainforum", "FormCreate", async function FormCreate(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.set(C, "addform", (await $.mcall((await $.v(C, "Taddform")), "Create", [Self])));
  await $.set(C, "DueIntForm", (await $.mcall((await $.v(C, "TDueIntForm")), "Create", [Self])));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TMainforum", "SpeedButton3Click", async function SpeedButton3Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.stmt($.call(C, "close", []));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TMainforum", "FormClose", async function FormClose(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "action": $.asRef(p1), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy((await $.v(C, "RefreshAfterClose")))) {
    await $.stmt((await $.call(C, "SafeRefresh", [true, (await $.v(C, "rmLocateAfterRefresh"))])));
  }
  return L0.result;
}, {"params": ["Sender", "Action"], "kind": "procedure", "ptypes": ["TObject", "TCloseAction"]});
  U.method("TMainforum", "ToolButton7Click", async function ToolButton7Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.stmt($.call(C, "close", []));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TMainforum", "ToolButton1Click", async function ToolButton1Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.set(C, "RefreshAfterClose", true);
  await $.mcall((await $.v(C, "addform")), "showmodal", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TMainforum", "ToolButton3Click", async function ToolButton3Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "trancheid": 0};
  await $.fixArgs(L0, ["sender"]);
  L0["rsconfirmtranchedelete"] = "!Əminsiniz?";
  if ($.truthy($.ne((await $.call(C, "MessageDlg", [L0["rsconfirmtranchedelete"], (await $.v(C, "mtConfirmation")), [(await $.v(C, "mbYes")), (await $.v(C, "mbNo"))], 0])), (await $.v(C, "mrYes"))))) {
    return L0.result;
  }
  {
    const $t8 = (await $.wobj(C, "addform"));
    await $.wset([$t8], "TrancheID", (await $.mv((await $.mcall((await $.mv((await $.wv([$t8], "Mainforum", C, false)), "OracleDataSet1")), "FieldByName", ["ID"])), "AsInteger")), { get: async () => L0["trancheid"], set: async (v) => { L0["trancheid"] = v; }, local: true });
    {
      const $t9 = (await $.wv([$t8], "OraclePackage1", C, false));
      await $.stmt((await $.wcall([$t8, $t9], "CallProcedure", ["Delete_laz", ["p_ID", (await $.wv([$t8, $t9], "TrancheID", { get: async () => L0["trancheid"], set: async (v) => { L0["trancheid"] = v; }, local: true }, false)), "p_stopcalc", (await $.wv([$t8, $t9], "dd", C, false))]], C)));
    }
    await $.mcall((await $.mv((await $.wv([$t8], "Mainforum", C, false)), "OracleDataSet1")), "Refresh", []);
    await $.wset([$t8], "RefreshAfterClose", (await $.wv([$t8], "True", C, false)), C);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TMainforum", "FormShow", async function FormShow(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t10 = (await $.wobj(C, "OracleDataSet1"));
    if ($.truthy((await $.wv([$t10], "Active", C, false)))) {
      await $.stmt($.wcall([$t10], "Close", [], C));
    }
    await $.stmt((await $.wcall([$t10], "SetVariable", ["crid", (await $.wv([$t10], "Get_SelectedCrdID", C, false))], C)));
    await $.stmt($.wcall([$t10], "Open", [], C));
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TMainforum", "OracleDataSet1CalcFields", async function OracleDataSet1CalcFields(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"dataset": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["dataset"]);
  if ($.truthy($.eq((await $.mv((await $.v(C, "OracleDataSet1STATUS")), "AsInteger")), 1))) {
    await $.mset((await $.v(C, "OracleDataSet1stat")), "AsString", "Faiz");
  }
  if ($.truthy($.eq((await $.mv((await $.v(C, "OracleDataSet1STATUS")), "AsInteger")), 2))) {
    await $.mset((await $.v(C, "OracleDataSet1stat")), "AsString", "Gec faiz");
  }
  return L0.result;
}, {"params": ["DataSet"], "kind": "procedure", "ptypes": ["TDataSet"]});
  U.method("TMainforum", "ToolButton4Click", async function ToolButton4Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mcall((await $.v(C, "DueIntForm")), "ShowModal", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.setInitialization(async function __initialization(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: undefined};
  await $.set(C, "Mainforum", (await $.mcall((await $.v(C, "TMainforum")), "Create", [(await $.v(C, "CommonApplication"))])));
  return L0.result;
});
  return U;
}
