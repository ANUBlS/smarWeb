// Generated from NewDepositsFrmProlongationImpl.pas by pas2js — do not edit by hand; regenerate instead.
/* eslint-disable */
// @ts-nocheck

export default function define($) {
  const U = $.unit("NewDepositsFrmProlongationImpl", ["Windows", "Messages", "SysUtils", "Classes", "Graphics", "Controls", "Forms", "LDialogs", "Oracle", "Db", "OracleData", "ComCtrls", "ToolWin", "ExtCtrls", "CMExcelExport", "ImgList", "ActnList", "Grids", "DBGridEh", "StdCtrls", "DBGridEhGrouping", "GridsEh", "sboapiDataModuleImpl", "NewDepositsFrmAddProlongationImpl", "NewCommonDeclsImpl", "SBTranslateProc"]);
  const C = [U];
  U.defClass("TNewDepositsFrmProlongation", "TForm", {"actionlist1": {"name": "ActionList1", "type": "TActionList"}, "actnaddprolong": {"name": "ActnAddProlong", "type": "TAction"}, "actndel": {"name": "ActnDel", "type": "TAction"}, "actnexport": {"name": "ActnExport", "type": "TAction"}, "actnquit": {"name": "ActnQuit", "type": "TAction"}, "dbgrideh1": {"name": "DBGridEh1", "type": "TDBGridEh"}, "depositinf": {"name": "DepositInf", "type": "TOracleDataSet"}, "depositinfclosedate": {"name": "DepositInfCLOSEDATE", "type": "TDateTimeField"}, "eexporter": {"name": "EExporter", "type": "TCMExcelExport"}, "imagelist1": {"name": "ImageList1", "type": "TImageList"}, "prolongations": {"name": "prolongations", "type": "TOracleDataSet"}, "prolongationsid": {"name": "prolongationsID", "type": "TFloatField"}, "prolongationsid2": {"name": "prolongationsID2", "type": "TFloatField"}, "prolongationshdate": {"name": "prolongationsHDATE", "type": "TDateTimeField"}, "prolongationsolddate": {"name": "prolongationsOLDDATE", "type": "TDateTimeField"}, "prolongationsnewdate": {"name": "prolongationsNEWDATE", "type": "TDateTimeField"}, "sbcm_prolongation": {"name": "sbcm_prolongation", "type": "TOraclePackage"}, "statusbar1": {"name": "StatusBar1", "type": "TStatusBar"}, "prolongationsdatsrc": {"name": "prolongationsDatSrc", "type": "TDataSource"}, "sb_aca": {"name": "sb_aca", "type": "TOraclePackage"}, "toolbar2": {"name": "ToolBar2", "type": "TToolBar"}, "btncust": {"name": "BtnCust", "type": "TToolButton"}, "toolbutton8": {"name": "ToolButton8", "type": "TToolButton"}, "toolbutton9": {"name": "ToolButton9", "type": "TToolButton"}, "köçermeler": {"name": "Köçermeler", "type": "TToolButton"}, "toolbutton11": {"name": "ToolButton11", "type": "TToolButton"}, "əməliyyat": {"name": "Əməliyyat", "type": "TToolButton"}, "toolbutton1": {"name": "ToolButton1", "type": "TToolButton"}, "toolbutton2": {"name": "ToolButton2", "type": "TToolButton"}, "toolbutton3": {"name": "ToolButton3", "type": "TToolButton"}}, {});
  U.init(async () => {
    U.var_("NewDepositsFrmProlongation", null, "TNewDepositsFrmProlongation");
  });
  U.func("exportproc", async function exportproc(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"s": $.copyArg(p0), result: undefined, "contid": 0, "contno": ''};
  await $.fixArgs(L0, ["s"]);
  L0["contid"] = (await $.v(C, "Get_SelectedContID"));
  L0["contno"] = (await $.v(C, "Get_SelectedContNo"));
  {
    const $t1 = (await $.v(C, "NewDepositsFrmProlongation"));
    {
      const $t2 = (await $.wv([$t1], "prolongations", C, false));
      if ($.truthy((await $.wv([$t1, $t2], "Active", C, false)))) {
        await $.stmt($.wcall([$t1, $t2], "CloseAll", [], C));
      }
      await $.stmt((await $.wcall([$t1, $t2], "SetVariable", ["ContractID", (await $.wv([$t1, $t2], "ContID", { get: async () => L0["contid"], set: async (v) => { L0["contid"] = v; }, local: true }, false))], C)));
      await $.stmt($.wcall([$t1, $t2], "Open", [], C));
    }
    {
      const $t3 = (await $.wv([$t1], "DepositInf", C, false));
      if ($.truthy((await $.wv([$t1, $t3], "Active", C, false)))) {
        await $.stmt($.wcall([$t1, $t3], "CloseAll", [], C));
      }
      await $.stmt((await $.wcall([$t1, $t3], "SetVariable", ["ContractID", (await $.wv([$t1, $t3], "ContID", { get: async () => L0["contid"], set: async (v) => { L0["contid"] = v; }, local: true }, false))], C)));
      await $.stmt($.wcall([$t1, $t3], "Open", [], C));
    }
  }
  await $.mset((await $.v(C, "NewDepositsFrmProlongation")), "Caption", $.add($.add("No-", L0["contno"]), "Müqavilənin uzadılması"));
  await $.mcall((await $.v(C, "NewDepositsFrmProlongation")), "ShowModal", []);
  return L0.result;
}, {"params": ["s"], "kind": "procedure", "ptypes": ["String"]});
  U.method("TNewDepositsFrmProlongation", "ActnAddProlongExecute", async function ActnAddProlongExecute(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t4 = (await $.v(C, "NewDepositsFrmProlongation"));
    const $t5 = (await $.wv([$t4], "sb_aca", C, false));
    await $.stmt((await $.wcall([$t4, $t5], "CallProcedure", ["checkadvancedobjectaccess", ["INSERT_DM_PROLONGATION"]], C)));
  }
  await $.mcall((await $.v(C, "NewDepositsFrmAddProlongation")), "ShowModal", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TNewDepositsFrmProlongation", "ActnDelExecute", async function ActnDelExecute(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t6 = (await $.v(C, "NewDepositsFrmProlongation"));
    const $t7 = (await $.wv([$t6], "sb_aca", C, false));
    await $.stmt((await $.wcall([$t6, $t7], "CallProcedure", ["checkadvancedobjectaccess", ["DELETE_DM_PROLONGATION"]], C)));
  }
  if ($.truthy($.eq((await $.call(C, "MessageDlg", ["Silinməsinə Əminsinizmi?", (await $.v(C, "mtInformation")), [(await $.v(C, "mbYes")), (await $.v(C, "mbNo"))], 0])), (await $.v(C, "mrNo"))))) {
    return L0.result;
  }
  {
    const $t8 = (await $.v(C, "sbcm_prolongation"));
    await $.stmt((await $.wcall([$t8], "CallProcedure", ["DelProlongation", [(await $.mv((await $.wv([$t8], "prolongationsID", C, false)), "AsInteger"))]], C)));
  }
  await $.mcall((await $.v(C, "prolongations")), "refresh", []);
  await $.mcall((await $.v(C, "DepositInf")), "refresh", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TNewDepositsFrmProlongation", "ActnDelUpdate", async function ActnDelUpdate(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t9 = (L0["sender"]);
    await $.wset([$t9], "Enabled", $.gt((await $.mv((await $.wv([$t9], "prolongations", C, false)), "RecordCount")), 0), C);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TNewDepositsFrmProlongation", "ActnExportExecute", async function ActnExportExecute(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t10 = (await $.v(C, "NewDepositsFrmProlongation"));
    const $t11 = (await $.wv([$t10], "sb_aca", C, false));
    await $.stmt((await $.wcall([$t10, $t11], "CallProcedure", ["checkadvancedobjectaccess", ["EXCEL_DM__PROLONGATION"]], C)));
  }
  {
    const $t12 = (await $.v(C, "EExporter"));
    await $.stmt($.wcall([$t12], "Connect", [], C));
    await $.stmt((await $.wcall([$t12], "ExportDataset", [(await $.wv([$t12], "prolongations", C, false)), "Prolonqasiya", (await $.wv([$t12], "True", C, false))], C)));
    await $.stmt($.wcall([$t12], "Disconnect", [], C));
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TNewDepositsFrmProlongation", "ActnExportUpdate", async function ActnExportUpdate(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t13 = (L0["sender"]);
    await $.wset([$t13], "Enabled", $.gt((await $.mv((await $.wv([$t13], "prolongations", C, false)), "RecordCount")), 0), C);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TNewDepositsFrmProlongation", "ActnQuitExecute", async function ActnQuitExecute(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.stmt($.call(C, "Close", []));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TNewDepositsFrmProlongation", "FormCanResize", async function FormCanResize(Self, p0, p1, p2, p3) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "newwidth": $.asRef(p1), "newheight": $.asRef(p2), "resize": $.asRef(p3), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await L0["resize"].set(false);
  return L0.result;
}, {"params": ["Sender", "NewWidth", "NewHeight", "Resize"], "kind": "procedure", "ptypes": ["TObject", "Integer", "Integer", "Boolean"]});
  U.method("TNewDepositsFrmProlongation", "FormCreate", async function FormCreate(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.set(C, "NewDepositsFrmAddProlongation", (await $.mcall((await $.v(C, "TNewDepositsFrmAddProlongation")), "Create", [Self])));
  await $.stmt((await $.mcall((await $.v(C, "SBTranslateProc")), "TranslateAllCompForms", [Self, (await $.mv((await $.v(C, "sboapiDataModule")), "OrPack_SL"))])));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TNewDepositsFrmProlongation", "FormDestroy", async function FormDestroy(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mcall((await $.v(C, "NewDepositsFrmAddProlongation")), "Free", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TNewDepositsFrmProlongation", "FormKeyPress", async function FormKeyPress(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "key": $.asRef(p1), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.eq((await $.call(C, "ord", [(await L0["key"].get())])), (await $.v(C, "VK_ESCAPE"))))) {
    await $.stmt($.call(C, "Close", []));
  }
  return L0.result;
}, {"params": ["Sender", "Key"], "kind": "procedure", "ptypes": ["TObject", "Char"]});
  U.setInitialization(async function __initialization(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: undefined};
  await $.set(C, "NewDepositsFrmProlongation", (await $.mcall((await $.v(C, "TNewDepositsFrmProlongation")), "Create", [(await $.v(C, "CommonApplication"))])));
  return L0.result;
});
  return U;
}
