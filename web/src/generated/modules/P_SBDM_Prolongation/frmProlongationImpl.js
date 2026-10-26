// Generated from frmProlongationImpl.pas by pas2js — do not edit by hand; regenerate instead.
/* eslint-disable */
// @ts-nocheck

export default function define($) {
  const U = $.unit("frmProlongationImpl", ["Windows", "Messages", "SysUtils", "Classes", "Graphics", "Controls", "Forms", "NLSDialogs", "Oracle", "Db", "OracleData", "ComCtrls", "ToolWin", "ExtCtrls", "CMExcelExport", "ImgList", "ActnList", "Grids", "DBGridEh", "StdCtrls", "sboapiDataModuleImpl", "frmAddProlongationImpl", "CommonDeclsImpl", "SBTranslateProc"]);
  const C = [U];
  U.defClass("TfrmProlongation", "TForm", {"prolongations": {"name": "prolongations", "type": "TOracleDataSet"}, "prolongationsid": {"name": "prolongationsID", "type": "TFloatField"}, "prolongationsid2": {"name": "prolongationsID2", "type": "TFloatField"}, "prolongationshdate": {"name": "prolongationsHDATE", "type": "TDateTimeField"}, "prolongationsolddate": {"name": "prolongationsOLDDATE", "type": "TDateTimeField"}, "prolongationsnewdate": {"name": "prolongationsNEWDATE", "type": "TDateTimeField"}, "prolongationsdatsrc": {"name": "prolongationsDatSrc", "type": "TDataSource"}, "sbcm_prolongation": {"name": "sbcm_prolongation", "type": "TOraclePackage"}, "actionlist1": {"name": "ActionList1", "type": "TActionList"}, "actnaddprolong": {"name": "ActnAddProlong", "type": "TAction"}, "actndel": {"name": "ActnDel", "type": "TAction"}, "actnexport": {"name": "ActnExport", "type": "TAction"}, "actnquit": {"name": "ActnQuit", "type": "TAction"}, "imagelist1": {"name": "ImageList1", "type": "TImageList"}, "eexporter": {"name": "EExporter", "type": "TCMExcelExport"}, "panel1": {"name": "Panel1", "type": "TPanel"}, "toolbar1": {"name": "ToolBar1", "type": "TToolBar"}, "toolbutton1": {"name": "ToolButton1", "type": "TToolButton"}, "toolbutton2": {"name": "ToolButton2", "type": "TToolButton"}, "toolbutton3": {"name": "ToolButton3", "type": "TToolButton"}, "toolbutton4": {"name": "ToolButton4", "type": "TToolButton"}, "toolbutton5": {"name": "ToolButton5", "type": "TToolButton"}, "toolbutton7": {"name": "ToolButton7", "type": "TToolButton"}, "toolbutton6": {"name": "ToolButton6", "type": "TToolButton"}, "statusbar1": {"name": "StatusBar1", "type": "TStatusBar"}, "dbgrideh1": {"name": "DBGridEh1", "type": "TDBGridEh"}, "depositinf": {"name": "DepositInf", "type": "TOracleDataSet"}, "depositinfclosedate": {"name": "DepositInfCLOSEDATE", "type": "TDateTimeField"}}, {});
  U.init(async () => {
    U.var_("frmProlongation", null, "TfrmProlongation");
  });
  U.func("exportproc", async function exportproc(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"s": $.copyArg(p0), result: undefined, "contid": 0};
  await $.fixArgs(L0, ["s"]);
  L0["contid"] = (await $.v(C, "Get_SelectedContID"));
  {
    const $t1 = (await $.v(C, "frmProlongation"));
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
  await $.mcall((await $.v(C, "frmProlongation")), "ShowModal", []);
  return L0.result;
}, {"params": ["s"], "kind": "procedure", "ptypes": ["String"]});
  U.method("TfrmProlongation", "FormCanResize", async function FormCanResize(Self, p0, p1, p2, p3) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "newwidth": $.asRef(p1), "newheight": $.asRef(p2), "resize": $.asRef(p3), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await L0["resize"].set(false);
  return L0.result;
}, {"params": ["Sender", "NewWidth", "NewHeight", "Resize"], "kind": "procedure", "ptypes": ["TObject", "Integer", "Integer", "Boolean"]});
  U.method("TfrmProlongation", "FormKeyPress", async function FormKeyPress(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "key": $.asRef(p1), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.eq((await $.call(C, "ord", [(await L0["key"].get())])), (await $.v(C, "VK_ESCAPE"))))) {
    await $.stmt($.call(C, "Close", []));
  }
  return L0.result;
}, {"params": ["Sender", "Key"], "kind": "procedure", "ptypes": ["TObject", "Char"]});
  U.method("TfrmProlongation", "FormCreate", async function FormCreate(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.set(C, "frmAddProlongation", (await $.mcall((await $.v(C, "TfrmAddProlongation")), "Create", [Self])));
  await $.stmt((await $.mcall((await $.v(C, "SBTranslateProc")), "TranslateAllCompForms", [Self, (await $.mv((await $.v(C, "sboapiDataModule")), "OrPack_SL"))])));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TfrmProlongation", "FormDestroy", async function FormDestroy(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mcall((await $.v(C, "frmAddProlongation")), "Free", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TfrmProlongation", "ActnAddProlongExecute", async function ActnAddProlongExecute(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mcall((await $.v(C, "frmAddProlongation")), "ShowModal", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TfrmProlongation", "ActnDelExecute", async function ActnDelExecute(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.eq((await $.call(C, "MessageDlg", ["Silinməsinə əminsinizmi?", (await $.v(C, "mtInformation")), [(await $.v(C, "mbYes")), (await $.v(C, "mbNo"))], 0])), (await $.v(C, "mrNo"))))) {
    return L0.result;
  }
  {
    const $t4 = (await $.v(C, "sbcm_prolongation"));
    await $.stmt((await $.wcall([$t4], "CallProcedure", ["DelLastProlongation", [(await $.wv([$t4], "Get_SelectedContID", C, false))]], C)));
  }
  await $.mcall((await $.v(C, "prolongations")), "refresh", []);
  await $.mcall((await $.v(C, "DepositInf")), "refresh", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TfrmProlongation", "ActnExportExecute", async function ActnExportExecute(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t5 = (await $.v(C, "EExporter"));
    await $.stmt($.wcall([$t5], "Connect", [], C));
    await $.stmt((await $.wcall([$t5], "ExportDataset", [(await $.wv([$t5], "prolongations", C, false)), "Prolonqasiya", (await $.wv([$t5], "True", C, false))], C)));
    await $.stmt($.wcall([$t5], "Disconnect", [], C));
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TfrmProlongation", "ActnDelUpdate", async function ActnDelUpdate(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t6 = (L0["sender"]);
    await $.wset([$t6], "Enabled", $.gt((await $.mv((await $.wv([$t6], "prolongations", C, false)), "RecordCount")), 0), C);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TfrmProlongation", "ActnQuitExecute", async function ActnQuitExecute(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.stmt($.call(C, "Close", []));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.setInitialization(async function __initialization(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: undefined};
  await $.set(C, "frmProlongation", (await $.mcall((await $.v(C, "TfrmProlongation")), "Create", [(await $.v(C, "CommonApplication"))])));
  return L0.result;
});
  return U;
}
