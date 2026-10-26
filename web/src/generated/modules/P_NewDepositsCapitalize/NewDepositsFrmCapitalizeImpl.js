// Generated from NewDepositsFrmCapitalizeImpl.pas by pas2js — do not edit by hand; regenerate instead.
/* eslint-disable */
// @ts-nocheck

export default function define($) {
  const U = $.unit("NewDepositsFrmCapitalizeImpl", ["Windows", "Messages", "SysUtils", "Classes", "Graphics", "Controls", "Forms", "Dialogs", "Db", "OracleData", "StdCtrls", "Mask", "DBCtrls", "ExtCtrls", "ComCtrls", "ToolWin", "ImgList", "Grids", "DBGridEh", "CMExcelExport", "Oracle", "ActnList", "DBGridEhGrouping", "GridsEh", "XFSCtrls", "sboapiDataModuleImpl", "NewCommonDeclsImpl", "NewDepositsFrmAddCapitalizeImpl", "SBTranslateProc"]);
  const C = [U];
  U.defClass("TNewDepositsFrmCapitalize", "TForm", {"actionlist1": {"name": "ActionList1", "type": "TActionList"}, "actnaddtr": {"name": "ActnAddTr", "type": "TAction"}, "actndel": {"name": "ActnDel", "type": "TAction"}, "actnexport": {"name": "ActnExport", "type": "TAction"}, "capitals": {"name": "Capitals", "type": "TOracleDataSet"}, "capitalsid": {"name": "CapitalsID", "type": "TFloatField"}, "capitalshdate": {"name": "CapitalsHDATE", "type": "TDateTimeField"}, "capitalstotal": {"name": "CapitalsTOTAL", "type": "TFloatField"}, "capitalstrid": {"name": "CapitalsTRID", "type": "TFloatField"}, "dbgrideh1": {"name": "DBGridEh1", "type": "TDBGridEh"}, "depositinfo": {"name": "DepositInfo", "type": "TOracleDataSet"}, "depositinfoname": {"name": "DepositInfoNAME", "type": "TWideStringField"}, "depositinfofacticaldebt": {"name": "DepositInfoFACTICALDEBT", "type": "TFloatField"}, "depositinfofacticalinterestdebt": {"name": "DepositInfoFACTICALINTERESTDEBT", "type": "TFloatField"}, "excelexp": {"name": "ExcelExp", "type": "TCMExcelExport"}, "imagelist1": {"name": "ImageList1", "type": "TImageList"}, "dm_payment": {"name": "dm_payment", "type": "TOraclePackage"}, "statusbar1": {"name": "StatusBar1", "type": "TStatusBar"}, "depositinfodatsrc": {"name": "DepositInfoDatSrc", "type": "TDataSource"}, "capitalsdatsrc": {"name": "CapitalsDatSrc", "type": "TDataSource"}, "sb_aca": {"name": "sb_aca", "type": "TOraclePackage"}, "xfgroupbox1": {"name": "XFGroupBox1", "type": "TXFGroupBox"}, "xfpanel1": {"name": "XFPanel1", "type": "TXFPanel"}, "statictext2": {"name": "StaticText2", "type": "TStaticText"}, "dbedit2": {"name": "DBEdit2", "type": "TDBEdit"}, "toolbar2": {"name": "ToolBar2", "type": "TToolBar"}, "btncust": {"name": "BtnCust", "type": "TToolButton"}, "toolbutton8": {"name": "ToolButton8", "type": "TToolButton"}, "toolbutton9": {"name": "ToolButton9", "type": "TToolButton"}, "köçermeler": {"name": "Köçermeler", "type": "TToolButton"}, "əməliyyat": {"name": "Əməliyyat", "type": "TToolButton"}, "toolbutton12": {"name": "ToolButton12", "type": "TToolButton"}, "toolbutton11": {"name": "ToolButton11", "type": "TToolButton"}, "depositinfoamount": {"name": "DepositInfoAMOUNT", "type": "TFloatField"}, "depositinfocurrency": {"name": "DepositInfoCURRENCY", "type": "TFloatField"}, "depositinfoostat": {"name": "DepositInfoOSTAT", "type": "TFloatField"}, "custacc": {"name": "CustAcc", "type": "TOracleDataSet"}, "custaccclientaccid": {"name": "CustAccCLIENTACCID", "type": "TFloatField"}, "custacccontractaccno": {"name": "CustAccCONTRACTACCNO", "type": "TWideStringField"}, "custaccinterestaccno": {"name": "CustAccINTERESTACCNO", "type": "TWideStringField"}, "custaccclientaccno": {"name": "CustAccCLIENTACCNO", "type": "TWideStringField"}, "custaccdatsrc": {"name": "CustAccDatSrc", "type": "TDataSource"}, "canafterrefresh": {"name": "CanAfterRefresh", "type": "Boolean"}}, {});
  U.init(async () => {
    U.var_("NewDepositsFrmCapitalize", null, "TNewDepositsFrmCapitalize");
  });
  U.func("exportproc", async function exportproc(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"s": $.copyArg(p0), result: undefined, "contractid": 0, "custaccid": 0};
  await $.fixArgs(L0, ["s"]);
  L0["contractid"] = (await $.v(C, "Get_SelectedContID"));
  {
    const $t1 = (await $.v(C, "NewDepositsFrmCapitalize"));
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
    {
      const $t4 = (await $.wv([$t1], "CustAcc", C, false));
      if ($.truthy((await $.wv([$t1, $t4], "Active", C, false)))) {
        await $.stmt($.wcall([$t1, $t4], "CloseAll", [], C));
      }
      await $.stmt((await $.wcall([$t1, $t4], "SetVariable", ["ContractID", (await $.wv([$t1, $t4], "ContractID", { get: async () => L0["contractid"], set: async (v) => { L0["contractid"] = v; }, local: true }, false))], C)));
      await $.stmt($.wcall([$t1, $t4], "Open", [], C));
      await $.wset([$t1, $t4], "CustAccID", (await $.mv((await $.wcall([$t1, $t4], "FieldByName", ["ClientACCID"], C)), "AsInteger")), { get: async () => L0["custaccid"], set: async (v) => { L0["custaccid"] = v; }, local: true });
    }
    await $.wset([$t1], "Caption", $.add((await $.wv([$t1], "Get_SelectedContNo", C, false)), " nömrəli depozitin  kapitallaşdırılması"), C);
    await $.stmt($.wcall([$t1], "ShowModal", [], C));
  }
  return L0.result;
}, {"params": ["S"], "kind": "procedure", "ptypes": ["String"]});
  U.method("TNewDepositsFrmCapitalize", "ActnExportUpdate", async function ActnExportUpdate(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t5 = (L0["sender"]);
    await $.wset([$t5], "Enabled", $.gt((await $.mv((await $.wv([$t5], "Capitals", C, false)), "RecordCount")), 0), C);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TNewDepositsFrmCapitalize", "BtnCustClick", async function BtnCustClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t6 = (await $.v(C, "NewDepositsFrmCapitalize"));
    const $t7 = (await $.wv([$t6], "sb_aca", C, false));
    await $.stmt((await $.wcall([$t6, $t7], "CallProcedure", ["checkadvancedobjectaccess", ["INSERT_SBCM_CAPITALIZATION"]], C)));
  }
  if ($.truthy($.eq((await $.mv((await $.v(C, "NewDepositsFrmAddCapitalize")), "ShowModal")), (await $.v(C, "mrOk"))))) {
    await $.set(C, "CanAfterRefresh", true);
    await $.mcall((await $.v(C, "Capitals")), "Refresh", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TNewDepositsFrmCapitalize", "FormCanResize", async function FormCanResize(Self, p0, p1, p2, p3) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "newwidth": $.asRef(p1), "newheight": $.asRef(p2), "resize": $.asRef(p3), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await L0["resize"].set(false);
  return L0.result;
}, {"params": ["Sender", "NewWidth", "NewHeight", "Resize"], "kind": "procedure", "ptypes": ["TObject", "Integer", "Integer", "Boolean"]});
  U.method("TNewDepositsFrmCapitalize", "FormCreate", async function FormCreate(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.set(C, "NewDepositsFrmAddCapitalize", (await $.mcall((await $.v(C, "TNewDepositsFrmAddCapitalize")), "Create", [Self])));
  await $.stmt((await $.mcall((await $.v(C, "SBTranslateProc")), "TranslateAllCompForms", [Self, (await $.mv((await $.v(C, "sboapiDataModule")), "OrPack_SL"))])));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TNewDepositsFrmCapitalize", "FormDestroy", async function FormDestroy(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mcall((await $.v(C, "NewDepositsFrmAddCapitalize")), "Free", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TNewDepositsFrmCapitalize", "FormKeyPress", async function FormKeyPress(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "key": $.asRef(p1), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.eq((await $.call(C, "Ord", [(await L0["key"].get())])), (await $.v(C, "VK_ESCAPE"))))) {
    await $.stmt($.call(C, "Close", []));
  }
  return L0.result;
}, {"params": ["Sender", "Key"], "kind": "procedure", "ptypes": ["TObject", "Char"]});
  U.method("TNewDepositsFrmCapitalize", "KöçermelerClick", async function KöçermelerClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t8 = (await $.v(C, "NewDepositsFrmCapitalize"));
    const $t9 = (await $.wv([$t8], "sb_aca", C, false));
    await $.stmt((await $.wcall([$t8, $t9], "CallProcedure", ["checkadvancedobjectaccess", ["EXCEL_SBCM_CAPITALIZATION"]], C)));
  }
  {
    const $t10 = (await $.v(C, "ExcelExp"));
    await $.stmt($.wcall([$t10], "Connect", [], C));
    await $.stmt((await $.wcall([$t10], "ExportDataset", [(await $.wv([$t10], "Capitals", C, false)), "Kapitallaşdırma", (await $.wv([$t10], "true", C, false)), (await $.wv([$t10], "false", C, false))], C)));
    await $.stmt($.wcall([$t10], "DisConnect", [], C));
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TNewDepositsFrmCapitalize", "ToolButton9Click", async function ToolButton9Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t11 = (await $.v(C, "NewDepositsFrmCapitalize"));
    const $t12 = (await $.wv([$t11], "sb_aca", C, false));
    await $.stmt((await $.wcall([$t11, $t12], "CallProcedure", ["checkadvancedobjectaccess", ["DELETE_SBCM_CAPITALIZATION"]], C)));
  }
  if ($.truthy($.eq((await $.call(C, "MessageDlg", ["Silinməsinə əminsinizmi?", (await $.v(C, "mtConfirmation")), [(await $.v(C, "mbYes")), (await $.v(C, "mbNo"))], 0])), (await $.v(C, "mrNo"))))) {
    return L0.result;
  }
  {
    const $t13 = (await $.v(C, "Capitals"));
    const $t14 = (await $.wv([$t13], "dm_payment", C, false));
    await $.stmt((await $.wcall([$t13, $t14], "CallProcedure", ["DeleteCapitalization", ["p_capitalizationID", (await $.mv((await $.wcall([$t13, $t14], "FieldByName", ["ID"], C)), "AsInteger"))]], C)));
    await $.stmt($.wcall([$t13, $t14], "Refresh", [], C));
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TNewDepositsFrmCapitalize", "ƏməliyyatClick", async function ƏməliyyatClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.stmt($.call(C, "Close", []));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.setInitialization(async function __initialization(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: undefined};
  await $.set(C, "NewDepositsFrmCapitalize", (await $.mcall((await $.v(C, "TNewDepositsFrmCapitalize")), "Create", [(await $.v(C, "CommonApplication"))])));
  return L0.result;
});
  return U;
}
