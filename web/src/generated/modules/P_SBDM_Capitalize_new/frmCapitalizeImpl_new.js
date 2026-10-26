// Generated from frmCapitalizeImpl_new.pas by pas2js — do not edit by hand; regenerate instead.
/* eslint-disable */
// @ts-nocheck

export default function define($) {
  const U = $.unit("frmCapitalizeImpl_new", ["Windows", "Messages", "SysUtils", "Classes", "Graphics", "Controls", "Forms", "Dialogs", "Db", "OracleData", "StdCtrls", "Mask", "DBCtrls", "ExtCtrls", "ComCtrls", "ToolWin", "ImgList", "Grids", "DBGridEh", "CMExcelExport", "Oracle", "ActnList", "sboapiDataModuleImpl", "NewCommonDeclsImpl", "frmAddCapitalizeImpl_new", "SBTranslateProc"]);
  const C = [U];
  U.defClass("TfrmCapitalize_new", "TForm", {"actionlist1": {"name": "ActionList1", "type": "TActionList"}, "actnaddtr": {"name": "ActnAddTr", "type": "TAction"}, "actndel": {"name": "ActnDel", "type": "TAction"}, "actnexport": {"name": "ActnExport", "type": "TAction"}, "capitals": {"name": "Capitals", "type": "TOracleDataSet"}, "capitalsid": {"name": "CapitalsID", "type": "TFloatField"}, "capitalshdate": {"name": "CapitalsHDATE", "type": "TDateTimeField"}, "capitalstotal": {"name": "CapitalsTOTAL", "type": "TFloatField"}, "capitalstrid": {"name": "CapitalsTRID", "type": "TFloatField"}, "dbgrideh1": {"name": "DBGridEh1", "type": "TDBGridEh"}, "depositinfo": {"name": "DepositInfo", "type": "TOracleDataSet"}, "depositinfocontractno": {"name": "DepositInfoCONTRACTNO", "type": "TWideStringField"}, "depositinfoname": {"name": "DepositInfoNAME", "type": "TWideStringField"}, "depositinfofacticaldebt": {"name": "DepositInfoFACTICALDEBT", "type": "TFloatField"}, "depositinfofacticalinterestdebt": {"name": "DepositInfoFACTICALINTERESTDEBT", "type": "TFloatField"}, "depositinfocontractaccno": {"name": "DepositInfoCONTRACTACCNO", "type": "TWideStringField"}, "depositinfointerestaccno": {"name": "DepositInfoINTERESTACCNO", "type": "TWideStringField"}, "excelexp": {"name": "ExcelExp", "type": "TCMExcelExport"}, "groupbox1": {"name": "GroupBox1", "type": "TGroupBox"}, "panel3": {"name": "Panel3", "type": "TPanel"}, "dbedit2": {"name": "DBEdit2", "type": "TDBEdit"}, "statictext2": {"name": "StaticText2", "type": "TStaticText"}, "imagelist1": {"name": "ImageList1", "type": "TImageList"}, "panel4": {"name": "Panel4", "type": "TPanel"}, "toolbar1": {"name": "ToolBar1", "type": "TToolBar"}, "toolbutton1": {"name": "ToolButton1", "type": "TToolButton"}, "toolbutton2": {"name": "ToolButton2", "type": "TToolButton"}, "toolbutton3": {"name": "ToolButton3", "type": "TToolButton"}, "toolbutton4": {"name": "ToolButton4", "type": "TToolButton"}, "toolbutton5": {"name": "ToolButton5", "type": "TToolButton"}, "toolbutton6": {"name": "ToolButton6", "type": "TToolButton"}, "toolbutton7": {"name": "ToolButton7", "type": "TToolButton"}, "sbcm_payment": {"name": "sbcm_payment", "type": "TOraclePackage"}, "statusbar1": {"name": "StatusBar1", "type": "TStatusBar"}, "depositinfodatsrc": {"name": "DepositInfoDatSrc", "type": "TDataSource"}, "capitalsdatsrc": {"name": "CapitalsDatSrc", "type": "TDataSource"}, "sb_aca": {"name": "sb_aca", "type": "TOraclePackage"}, "canafterrefresh": {"name": "CanAfterRefresh", "type": "Boolean"}}, {});
  U.init(async () => {
    U.var_("frmCapitalize_new", null, "TfrmCapitalize_new");
  });
  U.func("exportproc", async function exportproc(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"s": $.copyArg(p0), result: undefined, "contractid": 0};
  await $.fixArgs(L0, ["s"]);
  L0["contractid"] = (await $.v(C, "Get_SelectedContID"));
  {
    const $t1 = (await $.v(C, "frmCapitalize_new"));
    {
      const $t2 = (await $.wv([$t1], "DepositInfo", C, false));
      if ($.truthy((await $.wv([$t1, $t2], "Active", C, false)))) {
        await $.stmt($.wcall([$t1, $t2], "CloseAll", [], C));
      }
      await $.stmt((await $.wcall([$t1, $t2], "SetVariable", ["ContractID", (await $.wv([$t1, $t2], "ContractID", { get: async () => L0["contractid"], set: async (v) => { L0["contractid"] = v; }, local: true }, false))], C)));
      await $.stmt($.wcall([$t1, $t2], "Open", [], C));
    }
    {
      const $t3 = (await $.wv([$t1], "Capitals", C, false));
      if ($.truthy((await $.wv([$t1, $t3], "Active", C, false)))) {
        await $.stmt($.wcall([$t1, $t3], "CloseAll", [], C));
      }
      await $.stmt((await $.wcall([$t1, $t3], "SetVariable", ["ContractID", (await $.wv([$t1, $t3], "ContractID", { get: async () => L0["contractid"], set: async (v) => { L0["contractid"] = v; }, local: true }, false))], C)));
      await $.stmt($.wcall([$t1, $t3], "Open", [], C));
    }
    await $.wset([$t1], "Caption", $.add((await $.wv([$t1], "Get_SelectedContNo", C, false)), " nömrəli depozitin  kapitallaşdırılması"), C);
    await $.stmt($.wcall([$t1], "ShowModal", [], C));
  }
  return L0.result;
}, {"params": ["S"], "kind": "procedure", "ptypes": ["String"]});
  U.method("TfrmCapitalize_new", "ActnAddTrExecute", async function ActnAddTrExecute(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t4 = (await $.v(C, "frmCapitalize_new"));
    const $t5 = (await $.wv([$t4], "sb_aca", C, false));
    await $.stmt((await $.wcall([$t4, $t5], "CallProcedure", ["checkadvancedobjectaccess", ["INSERT_SBCM_CAPITALIZATION"]], C)));
  }
  if ($.truthy($.eq((await $.mv((await $.v(C, "frmAddCapitalize_new")), "ShowModal")), (await $.v(C, "mrOk"))))) {
    await $.set(C, "CanAfterRefresh", true);
    await $.mcall((await $.v(C, "Capitals")), "Refresh", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TfrmCapitalize_new", "ActnDelExecute", async function ActnDelExecute(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t6 = (await $.v(C, "frmCapitalize_new"));
    const $t7 = (await $.wv([$t6], "sb_aca", C, false));
    await $.stmt((await $.wcall([$t6, $t7], "CallProcedure", ["checkadvancedobjectaccess", ["DELETE_SBCM_CAPITALIZATION"]], C)));
  }
  if ($.truthy($.eq((await $.call(C, "MessageDlg", ["Silinməsinə əminsinizmi?", (await $.v(C, "mtConfirmation")), [(await $.v(C, "mbYes")), (await $.v(C, "mbNo"))], 0])), (await $.v(C, "mrNo"))))) {
    return L0.result;
  }
  {
    const $t8 = (await $.v(C, "Capitals"));
    const $t9 = (await $.wv([$t8], "sbcm_payment", C, false));
    await $.stmt((await $.wcall([$t8, $t9], "CallProcedure", ["DeleteCapitalization", ["p_capitalizationID", (await $.mv((await $.wcall([$t8, $t9], "FieldByName", ["ID"], C)), "AsInteger"))]], C)));
    await $.stmt($.wcall([$t8, $t9], "Refresh", [], C));
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TfrmCapitalize_new", "ActnExportExecute", async function ActnExportExecute(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t10 = (await $.v(C, "frmCapitalize_new"));
    const $t11 = (await $.wv([$t10], "sb_aca", C, false));
    await $.stmt((await $.wcall([$t10, $t11], "CallProcedure", ["checkadvancedobjectaccess", ["EXCEL_SBCM_CAPITALIZATION"]], C)));
  }
  {
    const $t12 = (await $.v(C, "ExcelExp"));
    await $.stmt($.wcall([$t12], "Connect", [], C));
    await $.stmt((await $.wcall([$t12], "ExportDataset", [(await $.wv([$t12], "Capitals", C, false)), "Kapitallaşdırma", (await $.wv([$t12], "true", C, false)), (await $.wv([$t12], "false", C, false))], C)));
    await $.stmt($.wcall([$t12], "DisConnect", [], C));
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TfrmCapitalize_new", "ActnExportUpdate", async function ActnExportUpdate(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t13 = (L0["sender"]);
    await $.wset([$t13], "Enabled", $.gt((await $.mv((await $.wv([$t13], "Capitals", C, false)), "RecordCount")), 0), C);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TfrmCapitalize_new", "FormCanResize", async function FormCanResize(Self, p0, p1, p2, p3) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "newwidth": $.asRef(p1), "newheight": $.asRef(p2), "resize": $.asRef(p3), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await L0["resize"].set(false);
  return L0.result;
}, {"params": ["Sender", "NewWidth", "NewHeight", "Resize"], "kind": "procedure", "ptypes": ["TObject", "Integer", "Integer", "Boolean"]});
  U.method("TfrmCapitalize_new", "FormCreate", async function FormCreate(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.set(C, "frmAddCapitalize_new", (await $.mcall((await $.v(C, "TfrmAddCapitalize_new")), "Create", [Self])));
  await $.stmt((await $.mcall((await $.v(C, "SBTranslateProc")), "TranslateAllCompForms", [Self, (await $.mv((await $.v(C, "sboapiDataModule")), "OrPack_SL"))])));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TfrmCapitalize_new", "FormDestroy", async function FormDestroy(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mcall((await $.v(C, "frmAddCapitalize_new")), "Free", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TfrmCapitalize_new", "FormKeyPress", async function FormKeyPress(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "key": $.asRef(p1), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.eq((await $.call(C, "Ord", [(await L0["key"].get())])), (await $.v(C, "VK_ESCAPE"))))) {
    await $.stmt($.call(C, "Close", []));
  }
  return L0.result;
}, {"params": ["Sender", "Key"], "kind": "procedure", "ptypes": ["TObject", "Char"]});
  U.method("TfrmCapitalize_new", "ToolButton7Click", async function ToolButton7Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.stmt($.call(C, "Close", []));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.setInitialization(async function __initialization(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: undefined};
  await $.set(C, "frmCapitalize_new", (await $.mcall((await $.v(C, "TfrmCapitalize_new")), "Create", [(await $.v(C, "CommonApplication"))])));
  return L0.result;
});
  return U;
}
