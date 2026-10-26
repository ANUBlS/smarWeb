// Generated from TranceMainFormOmpl.pas by pas2js — do not edit by hand; regenerate instead.
/* eslint-disable */
// @ts-nocheck

export default function define($) {
  const U = $.unit("TranceMainFormOmpl", ["Windows", "Messages", "SysUtils", "Classes", "Graphics", "Controls", "Forms", "Dialogs", "StdCtrls", "ExtCtrls", "Mask", "DBCtrls", "DBCtrlsEh", "DBLookupEh", "ComCtrls", "CMCurrencyEdit", "Oracle", "ActnList", "Grids", "DBGrids", "ImgList", "ToolWin", "CMExcelExport", "DBGridEh", "DBGridEhGrouping", "GridsEh", "TranceDataModuleImpl", "CommonDecls", "sbsystem", "TrancheAddFormImpl"]);
  const C = [U];
  U.defClass("TTrancheMainForm", "TForm", {"groupbox1": {"name": "GroupBox1", "type": "TGroupBox"}, "panel4": {"name": "Panel4", "type": "TPanel"}, "toolbar1": {"name": "ToolBar1", "type": "TToolBar"}, "imagelist1": {"name": "ImageList1", "type": "TImageList"}, "toolbutton1": {"name": "ToolButton1", "type": "TToolButton"}, "toolbutton2": {"name": "ToolButton2", "type": "TToolButton"}, "toolbutton3": {"name": "ToolButton3", "type": "TToolButton"}, "toolbutton4": {"name": "ToolButton4", "type": "TToolButton"}, "toolbutton5": {"name": "ToolButton5", "type": "TToolButton"}, "actionlist1": {"name": "ActionList1", "type": "TActionList"}, "toolbutton6": {"name": "ToolButton6", "type": "TToolButton"}, "toolbutton7": {"name": "ToolButton7", "type": "TToolButton"}, "actnaddtranche": {"name": "ActnAddTranche", "type": "TAction"}, "actndeltranche": {"name": "ActnDelTranche", "type": "TAction"}, "actnexport": {"name": "ActnExport", "type": "TAction"}, "actnclose": {"name": "ActnClose", "type": "TAction"}, "panel3": {"name": "Panel3", "type": "TPanel"}, "dbedit2": {"name": "DBEdit2", "type": "TDBEdit"}, "statictext2": {"name": "StaticText2", "type": "TStaticText"}, "statusbar1": {"name": "StatusBar1", "type": "TStatusBar"}, "dbgrideh1": {"name": "DBGridEh1", "type": "TDBGridEh"}, "cmexcelexport1": {"name": "CMExcelExport1", "type": "TCMExcelExport"}, "fcreditid": {"name": "FCreditID", "type": "Integer"}}, {"creditid": {"name": "CreditID", "read": "FCreditID", "write": "FCreditID"}});
  U.init(async () => {
    U.var_("TrancheMainForm", null, "TTrancheMainForm");
    U.var_("RefreshAfterClose", false, "Boolean");
    U.var_("cusid", 0, "integer");
  });
  U.method("TTrancheMainForm", "FormCanResize", async function FormCanResize(Self, p0, p1, p2, p3) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "newwidth": $.asRef(p1), "newheight": $.asRef(p2), "resize": $.asRef(p3), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await L0["resize"].set(false);
  return L0.result;
}, {"params": ["Sender", "NewWidth", "NewHeight", "Resize"], "kind": "procedure", "ptypes": ["TObject", "Integer", "Integer", "Boolean"]});
  U.method("TTrancheMainForm", "FormCreate", async function FormCreate(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.set(C, "TrancheDataModule", (await $.mcall((await $.v(C, "TTrancheDataModule")), "Create", [Self])));
  await $.set(C, "TrchAddForm", (await $.mcall((await $.v(C, "TTrchAddForm")), "Create", [Self])));
  await $.set(C, "RefreshAfterClose", false);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TTrancheMainForm", "FormDestroy", async function FormDestroy(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mcall((await $.v(C, "TrchAddForm")), "Free", []);
  await $.mcall((await $.v(C, "TrancheDataModule")), "Free", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TTrancheMainForm", "FormClose", async function FormClose(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "action": $.asRef(p1), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t1 = (await $.v(C, "TrancheDataModule"));
    await $.mset((await $.mv((await $.wv([$t1], "TrchAddForm", C, false)), "TrancheSumEdit")), "Value", 0);
    await $.mcall((await $.wv([$t1], "CreditInfo", C, false)), "CloseAll", []);
    await $.mcall((await $.wv([$t1], "TrancheAccounts", C, false)), "CloseAll", []);
    await $.mcall((await $.wv([$t1], "CustAccount", C, false)), "CloseAll", []);
    await $.mcall((await $.wv([$t1], "TranchesData", C, false)), "CloseAll", []);
  }
  if ($.truthy((await $.v(C, "RefreshAfterClose")))) {
    await $.stmt((await $.call(C, "SafeRefresh", [true, (await $.v(C, "rmLocateAfterRefresh"))])));
  }
  return L0.result;
}, {"params": ["Sender", "Action"], "kind": "procedure", "ptypes": ["TObject", "TCloseAction"]});
  U.method("TTrancheMainForm", "FormKeyPress", async function FormKeyPress(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "key": $.asRef(p1), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.eq((await $.call(C, "ORD", [(await L0["key"].get())])), (await $.v(C, "VK_ESCAPE"))))) {
    await $.stmt((await $.call(C, "ActnCloseExecute", [null])));
    await L0["key"].set("\u0000");
  }
  return L0.result;
}, {"params": ["Sender", "Key"], "kind": "procedure", "ptypes": ["TObject", "Char"]});
  U.method("TTrancheMainForm", "ShowTrancheForm", async function ShowTrancheForm(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: undefined, "custid": 0, "custaccid": 0};
  L0["stranchecaption"] = " %s nömrəli müqavilənin tranşı...";
  await $.set(C, "CreditID", (await $.v(C, "Get_SelectedCrdID")));
  await $.mset((await $.mv((await $.v(C, "TrchAddForm")), "TrancheDatePckr")), "DateTime", (await $.v(C, "Get_CurrentDate")));
  await $.set(C, "Caption", (await $.call(C, "Format", [L0["stranchecaption"], [(await $.v(C, "Get_SelectedCrdNo"))]])));
  await $.set(C, "RefreshAfterClose", false);
  {
    const $t2 = (await $.v(C, "TrancheDataModule"));
    {
      const $t3 = (await $.wv([$t2], "CreditInfo", C, false));
      await $.stmt((await $.wcall([$t2, $t3], "SetVariable", ["ID", (await $.wv([$t2, $t3], "CreditID", C, false))], C)));
      await $.stmt($.wcall([$t2, $t3], "Open", [], C));
      await $.wset([$t2, $t3], "CustID", (await $.mv((await $.wcall([$t2, $t3], "FieldByName", ["BoorowerID"], C)), "AsInteger")), { get: async () => L0["custid"], set: async (v) => { L0["custid"] = v; }, local: true });
    }
    {
      const $t4 = (await $.wv([$t2], "CustAccount", C, false));
      await $.stmt((await $.wcall([$t2, $t4], "SetVariable", ["CreditID", (await $.wv([$t2, $t4], "CreditID", C, false))], C)));
      await $.stmt($.wcall([$t2, $t4], "Open", [], C));
      await $.wset([$t2, $t4], "CustAccID", (await $.mv((await $.wcall([$t2, $t4], "FieldByName", ["BOOROWERACCID"], C)), "AsInteger")), { get: async () => L0["custaccid"], set: async (v) => { L0["custaccid"] = v; }, local: true });
      await $.wset([$t2, $t4], "cusid", (await $.wv([$t2, $t4], "CustAccID", { get: async () => L0["custaccid"], set: async (v) => { L0["custaccid"] = v; }, local: true }, false)), C);
    }
    {
      const $t5 = (await $.wv([$t2], "TrancheAccounts", C, false));
      await $.stmt((await $.wcall([$t2, $t5], "SetVariable", ["KLI_ID", (await $.wv([$t2, $t5], "CustID", { get: async () => L0["custid"], set: async (v) => { L0["custid"] = v; }, local: true }, false))], C)));
      await $.stmt($.wcall([$t2, $t5], "Open", [], C));
      if ($.truthy((await $.wcall([$t2, $t5], "Locate", ["AccID", (await $.wv([$t2, $t5], "CustAccID", { get: async () => L0["custaccid"], set: async (v) => { L0["custaccid"] = v; }, local: true }, false)), []], C)))) {
        await $.mset((await $.mv((await $.wv([$t2, $t5], "TrchAddForm", C, false)), "AccountListCB")), "KeyValue", (await $.wv([$t2, $t5], "CustAccID", { get: async () => L0["custaccid"], set: async (v) => { L0["custaccid"] = v; }, local: true }, false)));
      }
    }
    {
      const $t6 = (await $.wv([$t2], "TranchesData", C, false));
      await $.stmt((await $.wcall([$t2, $t6], "SetVariable", ["CreditID", (await $.wv([$t2, $t6], "CreditID", C, false))], C)));
      await $.stmt($.wcall([$t2, $t6], "Open", [], C));
    }
  }
  await $.stmt($.call(C, "ShowModal", []));
  return L0.result;
}, {"params": [], "kind": "procedure", "ptypes": []});
  U.method("TTrancheMainForm", "ActnAddTrancheExecute", async function ActnAddTrancheExecute(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "s": false};
  await $.fixArgs(L0, ["sender"]);
  L0["s"] = (await $.mcall((await $.mv((await $.v(C, "TrancheDataModule")), "OraclePackage1")), "CallBooleanFunction", ["FindAccFlag", ["AccID", (await $.v(C, "cusid")), "FlagName", "DebitArested"]]));
  if ($.truthy($.eq(L0["s"], true))) {
    await $.stmt((await $.call(C, "ShowMessage", ["Müştərinin cari hesabında sərəncam (Debit arest)  var ! "])));
    return L0.result;
  }
  L0["s"] = (await $.mcall((await $.mv((await $.v(C, "TrancheDataModule")), "OraclePackage1")), "CallBooleanFunction", ["FindAccFlag", ["AccID", (await $.v(C, "cusid")), "FlagName", "DebitArested"]]));
  if ($.truthy($.eq(L0["s"], true))) {
    await $.stmt((await $.call(C, "ShowMessage", ["Müştərinin cari hesabında sərəncam (Credit arest) var !"])));
    return L0.result;
  }
  if ($.truthy($.eq((await $.mv((await $.v(C, "TrchAddForm")), "ShowModal")), (await $.v(C, "mrOk"))))) {
    await $.set(C, "RefreshAfterClose", true);
    await $.mcall((await $.mv((await $.v(C, "TrancheDataModule")), "TranchesData")), "Refresh", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TTrancheMainForm", "ActnCloseExecute", async function ActnCloseExecute(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.stmt($.call(C, "Close", []));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.func("InitPlugin", async function InitPlugin(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"s": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["s"]);
  await $.mcall((await $.v(C, "TrancheMainForm")), "ShowTrancheForm", []);
  return L0.result;
}, {"params": ["S"], "kind": "procedure", "ptypes": ["String"]});
  U.method("TTrancheMainForm", "ActnExportExecute", async function ActnExportExecute(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t7 = (await $.v(C, "CMExcelExport1"));
    await $.stmt($.wcall([$t7], "Connect", [], C));
    await $.stmt((await $.wcall([$t7], "ExportDataset", [(await $.mv((await $.wv([$t7], "TrancheDataModule", C, false)), "TranchesData")), "Tranches", (await $.wv([$t7], "True", C, false)), (await $.wv([$t7], "false", C, false))], C)));
    await $.stmt($.wcall([$t7], "Disconnect", [], C));
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TTrancheMainForm", "ActnDelTrancheExecute", async function ActnDelTrancheExecute(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "trancheid": 0};
  await $.fixArgs(L0, ["sender"]);
  L0["rsconfirmtranchedelete"] = "Seçilmiş tranş ləğv olunacaq!Əminsiniz?";
  if ($.truthy($.ne((await $.call(C, "MessageDlg", [L0["rsconfirmtranchedelete"], (await $.v(C, "mtConfirmation")), [(await $.v(C, "mbYes")), (await $.v(C, "mbNo"))], 0])), (await $.v(C, "mrYes"))))) {
    return L0.result;
  }
  {
    const $t8 = (await $.v(C, "TrancheDataModule"));
    await $.wset([$t8], "TrancheID", (await $.mv((await $.mcall((await $.wv([$t8], "TranchesData", C, false)), "FieldByName", ["ID"])), "AsInteger")), { get: async () => L0["trancheid"], set: async (v) => { L0["trancheid"] = v; }, local: true });
    {
      const $t9 = (await $.wv([$t8], "CM_TRANCHE", C, false));
      await $.stmt((await $.wcall([$t8, $t9], "CallProcedure", ["Tranche_Delete", ["p_TrancheID", (await $.wv([$t8, $t9], "TrancheID", { get: async () => L0["trancheid"], set: async (v) => { L0["trancheid"] = v; }, local: true }, false))]], C)));
    }
    await $.mcall((await $.wv([$t8], "TranchesData", C, false)), "Refresh", []);
    await $.wset([$t8], "RefreshAfterClose", (await $.wv([$t8], "True", C, false)), C);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TTrancheMainForm", "ActnDelTrancheUpdate", async function ActnDelTrancheUpdate(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t10 = (await $.mv((await $.v(C, "TrancheDataModule")), "TranchesData"));
    await $.mset((await $.wv([$t10], "Sender", { get: async () => L0["sender"], set: async (v) => { L0["sender"] = v; }, local: true }, false)), "Enabled", (await $.and_((await $.wv([$t10], "Active", C, false)), async () => ($.gt((await $.wv([$t10], "RecordCount", C, false)), 0)))));
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.setInitialization(async function __initialization(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: undefined};
  await $.set(C, "TrancheMainForm", (await $.mcall((await $.v(C, "TTrancheMainForm")), "Create", [(await $.v(C, "CommonApplication"))])));
  return L0.result;
});
  return U;
}
