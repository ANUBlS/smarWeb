// Generated from UnitTaxPayments.pas by pas2js — do not edit by hand; regenerate instead.
/* eslint-disable */
// @ts-nocheck

export default function define($) {
  const U = $.unit("UnitTaxPayments", ["Windows", "Messages", "SysUtils", "Variants", "Classes", "Graphics", "Controls", "Forms", "Dialogs", "ExtCtrls", "DB", "OracleData", "ImgList", "CMExcelExport", "Grids", "XDBGrids", "ComCtrls", "ToolWin", "StdCtrls", "Mask", "DBCtrls", "sboapiDataModuleImpl", "UnitSearch", "UnitTransactions", "CommonDeclsImpl", "UnitDataMod"]);
  const C = [U];
  U.defClass("TFormTaxPayments", "TForm", {"panel1": {"name": "Panel1", "type": "TPanel"}, "coolbar1": {"name": "CoolBar1", "type": "TCoolBar"}, "toolbar1": {"name": "ToolBar1", "type": "TToolBar"}, "toolbutton1": {"name": "ToolButton1", "type": "TToolButton"}, "xdbgrid1": {"name": "XDBGrid1", "type": "TXDBGrid"}, "excelexport": {"name": "ExcelExport", "type": "TCMExcelExport"}, "imagelist1": {"name": "ImageList1", "type": "TImageList"}, "toolbutton2": {"name": "ToolButton2", "type": "TToolButton"}, "toolbutton3": {"name": "ToolButton3", "type": "TToolButton"}, "toolbutton4": {"name": "ToolButton4", "type": "TToolButton"}, "toolbutton5": {"name": "ToolButton5", "type": "TToolButton"}, "toolbutton6": {"name": "ToolButton6", "type": "TToolButton"}, "toolbutton7": {"name": "ToolButton7", "type": "TToolButton"}, "toolbutton8": {"name": "ToolButton8", "type": "TToolButton"}}, {});
  U.init(async () => {
    U.var_("FormTaxPayments", null, "TFormTaxPayments");
  });
  U.func("exportproc", async function exportproc(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"s": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["s"]);
  await $.mcall((await $.v(C, "FormTaxPayments")), "ShowModal", []);
  return L0.result;
}, {"params": ["S"], "kind": "procedure", "ptypes": ["String"]});
  U.method("TFormTaxPayments", "FormCanResize", async function FormCanResize(Self, p0, p1, p2, p3) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "newwidth": $.asRef(p1), "newheight": $.asRef(p2), "resize": $.asRef(p3), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await L0["resize"].set(false);
  return L0.result;
}, {"params": ["Sender", "NewWidth", "NewHeight", "Resize"], "kind": "procedure", "ptypes": ["TObject", "Integer", "Integer", "Boolean"]});
  U.method("TFormTaxPayments", "FormClose", async function FormClose(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "action": $.asRef(p1), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mcall((await $.mv((await $.v(C, "DataModuleTax")), "ODSTaxPayment")), "CloseAll", []);
  await $.mcall((await $.mv((await $.v(C, "DataModuleTax")), "ODSFields")), "CloseAll", []);
  return L0.result;
}, {"params": ["Sender", "Action"], "kind": "procedure", "ptypes": ["TObject", "TCloseAction"]});
  U.method("TFormTaxPayments", "FormCreate", async function FormCreate(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.set(C, "DataModuleTax", (await $.mcall((await $.v(C, "TDataModuleTax")), "Create", [Self])));
  await $.set(C, "FormSearch", (await $.mcall((await $.v(C, "TFormSearch")), "Create", [Self])));
  await $.set(C, "FormTransactions", (await $.mcall((await $.v(C, "TFormTransactions")), "Create", [Self])));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFormTaxPayments", "FormDestroy", async function FormDestroy(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mcall((await $.v(C, "FormTaxPayments")), "Free", []);
  await $.mcall((await $.v(C, "FormSearch")), "Free", []);
  await $.mcall((await $.v(C, "FormTransactions")), "Free", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFormTaxPayments", "FormShow", async function FormShow(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mcall((await $.mv((await $.v(C, "DataModuleTax")), "ODSTaxPayment")), "Close", []);
  await $.mcall((await $.mv((await $.v(C, "DataModuleTax")), "ODSTaxPayment")), "Open", []);
  await $.mcall((await $.mv((await $.v(C, "DataModuleTax")), "ODSFields")), "close", []);
  await $.mcall((await $.mv((await $.v(C, "DataModuleTax")), "ODSFields")), "Open", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFormTaxPayments", "ToolButton2Click", async function ToolButton2Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.eq((await $.mv((await $.mv((await $.v(C, "DataModuleTax")), "ODSTaxPayment")), "RecordCount")), 0))) {
    return L0.result;
  }
  await $.mset((await $.v(C, "FormSearch")), "DbGr", (await $.v(C, "XDBGrid1")));
  await $.mcall((await $.v(C, "FormSearch")), "ShowModal", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFormTaxPayments", "ToolButton3Click", async function ToolButton3Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.eq((await $.mv((await $.mv((await $.v(C, "DataModuleTax")), "ODSTaxPayment")), "RecordCount")), 0))) {
    return L0.result;
  }
  {
    const $t1 = (await $.v(C, "ExcelExport"));
    await $.stmt($.wcall([$t1], "Connect", [], C));
    await $.stmt((await $.wcall([$t1], "ExportDataset", [(await $.mv((await $.mv((await $.wv([$t1], "XDBGrid1", C, false)), "DataSource")), "DataSet")), "Vergi", (await $.wv([$t1], "true", C, false)), (await $.wv([$t1], "true", C, false))], C)));
    await $.stmt($.wcall([$t1], "Disconnect", [], C));
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFormTaxPayments", "ToolButton4Click", async function ToolButton4Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.stmt($.call(C, "Close", []));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFormTaxPayments", "XDBGrid1TitleClick", async function XDBGrid1TitleClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"column": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["column"]);
  if ($.truthy($.eq((await $.mv(L0["column"], "FieldName")), ""))) {
    return L0.result;
  }
  {
    const $t2 = (await $.v(C, "DataModuleTax"));
    const $t3 = (await $.wv([$t2], "ODSTaxPayment", C, false));
    await $.stmt($.wcall([$t2, $t3], "close", [], C));
    if ($.truthy($.eq((await $.mv((await $.mv((await $.wv([$t2, $t3], "Column", { get: async () => L0["column"], set: async (v) => { L0["column"] = v; }, local: true }, false)), "Title")), "MarkerIndex")), 2))) {
      await $.stmt((await $.wcall([$t2, $t3], "SetVariable", ["title", $.add($.add((await $.mv((await $.wv([$t2, $t3], "Column", { get: async () => L0["column"], set: async (v) => { L0["column"] = v; }, local: true }, false)), "FieldName")), " "), "ASC")], C)));
    } else {
      await $.stmt((await $.wcall([$t2, $t3], "SetVariable", ["title", $.add($.add((await $.mv((await $.wv([$t2, $t3], "Column", { get: async () => L0["column"], set: async (v) => { L0["column"] = v; }, local: true }, false)), "FieldName")), " "), "DESC")], C)));
    }
    await $.stmt($.wcall([$t2, $t3], "open", [], C));
  }
  return L0.result;
}, {"params": ["Column"], "kind": "procedure", "ptypes": ["TXColumn"]});
  U.setInitialization(async function __initialization(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: undefined};
  await $.set(C, "FormTaxPayments", (await $.mcall((await $.v(C, "TFormTaxPayments")), "Create", [(await $.v(C, "CommonApplication"))])));
  return L0.result;
});
  return U;
}
