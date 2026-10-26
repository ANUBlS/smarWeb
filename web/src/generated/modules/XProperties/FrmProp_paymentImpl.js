// Generated from FrmProp_paymentImpl.pas by pas2js — do not edit by hand; regenerate instead.
/* eslint-disable */
// @ts-nocheck

export default function define($) {
  const U = $.unit("FrmProp_paymentImpl", ["Windows", "Messages", "SysUtils", "Classes", "Graphics", "Controls", "Forms", "Dialogs", "StdCtrls", "Mask", "DBCtrls", "ExtCtrls", "ComCtrls", "ToolWin", "CMExcelExport", "ActnList", "ImgList", "Grids", "DBGridEh", "DMprop", "FrmProp_paymentAddImpl", "sboapiDataModuleImpl", "SBTranslateProc"]);
  const C = [U];
  U.defClass("TFrmProp_payment", "TForm", {"groupbox1": {"name": "GroupBox1", "type": "TGroupBox"}, "panel1": {"name": "Panel1", "type": "TPanel"}, "dbedit1": {"name": "DBEdit1", "type": "TDBEdit"}, "coolbar1": {"name": "CoolBar1", "type": "TCoolBar"}, "toolbar1": {"name": "ToolBar1", "type": "TToolBar"}, "toolbutton1": {"name": "ToolButton1", "type": "TToolButton"}, "toolbutton2": {"name": "ToolButton2", "type": "TToolButton"}, "toolbutton3": {"name": "ToolButton3", "type": "TToolButton"}, "imagelist1": {"name": "ImageList1", "type": "TImageList"}, "actionlist1": {"name": "ActionList1", "type": "TActionList"}, "actnadd": {"name": "ActnAdd", "type": "TAction"}, "actndel": {"name": "ActnDel", "type": "TAction"}, "actnexport": {"name": "ActnExport", "type": "TAction"}, "excelexport": {"name": "ExcelExport", "type": "TCMExcelExport"}, "toolbutton4": {"name": "ToolButton4", "type": "TToolButton"}, "dbgrideh1": {"name": "DBGridEh1", "type": "TDBGridEh"}, "refreshcontracts": {"name": "RefreshContracts", "type": "Boolean"}}, {});
  U.init(async () => {
    U.var_("FrmProp_payment", null, "TFrmProp_payment");
  });
  U.method("TFrmProp_payment", "FormCanResize", async function FormCanResize(Self, p0, p1, p2, p3) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "newwidth": $.asRef(p1), "newheight": $.asRef(p2), "resize": $.asRef(p3), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await L0["resize"].set(false);
  return L0.result;
}, {"params": ["Sender", "NewWidth", "NewHeight", "Resize"], "kind": "procedure", "ptypes": ["TObject", "Integer", "Integer", "Boolean"]});
  U.method("TFrmProp_payment", "FormKeyPress", async function FormKeyPress(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "key": $.asRef(p1), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.eq((await $.call(C, "Ord", [(await L0["key"].get())])), (await $.v(C, "VK_ESCAPE"))))) {
    await $.stmt($.call(C, "Close", []));
  }
  return L0.result;
}, {"params": ["Sender", "Key"], "kind": "procedure", "ptypes": ["TObject", "Char"]});
  U.method("TFrmProp_payment", "FormShow", async function FormShow(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "propid": 0, "name": ''};
  await $.fixArgs(L0, ["sender"]);
  L0["propid"] = (await $.mv((await $.mcall((await $.mv((await $.v(C, "DMproperties")), "DataSetPropIns")), "FieldByname", ["id"])), "asinteger"));
  L0["name"] = (await $.mv((await $.mcall((await $.mv((await $.v(C, "DMproperties")), "DataSetPropIns")), "FieldByname", ["name"])), "asstring"));
  await $.set(C, "Caption", $.add(L0["name"], " adlı əmlakın satılması"));
  {
    const $t1 = (await $.mv((await $.v(C, "DMproperties")), "DataSetproperties_payments"));
    await $.stmt($.wcall([$t1], "close", [], C));
    await $.stmt((await $.wcall([$t1], "SetVariable", ["propid", (await $.wv([$t1], "propid", { get: async () => L0["propid"], set: async (v) => { L0["propid"] = v; }, local: true }, false))], C)));
    await $.stmt($.wcall([$t1], "open", [], C));
    await $.stmt($.wcall([$t1], "refresh", [], C));
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFrmProp_payment", "FormCreate", async function FormCreate(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.set(C, "FrmProp_paymentAdd", (await $.mcall((await $.v(C, "TFrmProp_paymentAdd")), "create", [Self])));
  await $.stmt((await $.mcall((await $.v(C, "SBTranslateProc")), "TranslateAllCompForms", [Self, (await $.mv((await $.v(C, "sboapiDataModule")), "OrPack_SL"))])));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFrmProp_payment", "FormDestroy", async function FormDestroy(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mcall((await $.v(C, "FrmProp_paymentAdd")), "Free", []);
  await $.mcall((await $.mv((await $.v(C, "DMproperties")), "DataSetproperties_payments")), "CloseAll", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFrmProp_payment", "ActnAddExecute", async function ActnAddExecute(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.eq((await $.mv((await $.v(C, "FrmProp_paymentAdd")), "ShowModal")), (await $.v(C, "mrOk"))))) {
    await $.set(C, "RefreshContracts", true);
    await $.mcall((await $.mv((await $.v(C, "DMproperties")), "DataSetproperties_payments")), "Refresh", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFrmProp_payment", "ActnDelUpdate", async function ActnDelUpdate(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t2 = (L0["sender"]);
    await $.wset([$t2], "Enabled", ($.gt((await $.mv((await $.mv((await $.wv([$t2], "DMproperties", C, false)), "DataSetproperties_payments")), "RecordCount")), 0)), C);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFrmProp_payment", "ActnDelExecute", async function ActnDelExecute(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.eq((await $.call(C, "MessageDlg", ["Silinməsinə əminsinizmi?", (await $.v(C, "mtConfirmation")), [(await $.v(C, "mbYes")), (await $.v(C, "mbNo"))], 0])), (await $.v(C, "mrNo"))))) {
    return L0.result;
  }
  {
    const $t3 = (await $.v(C, "DMproperties"));
    const $t4 = (await $.wv([$t3], "OraclePackage2", C, false));
    const $t5 = (await $.wv([$t3, $t4], "DataSetproperties_payments", C, false));
    await $.stmt((await $.wcall([$t3, $t4, $t5], "CallProcedure", ["DeleteTranche_pay", ["P_Prop_PayId", (await $.mv((await $.wcall([$t3, $t4, $t5], "FieldByName", ["ID"], C)), "AsInteger"))]], C)));
    await $.stmt($.wcall([$t3, $t4, $t5], "Refresh", [], C));
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFrmProp_payment", "ActnExportExecute", async function ActnExportExecute(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t6 = (await $.v(C, "ExcelExport"));
    await $.stmt($.wcall([$t6], "Connect", [], C));
    await $.stmt((await $.wcall([$t6], "ExportDataset", [(await $.mv((await $.wv([$t6], "DMproperties", C, false)), "DataSetproperties_payments")), "Tranşlar", (await $.wv([$t6], "True", C, false))], C)));
    await $.stmt($.wcall([$t6], "Disconnect", [], C));
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFrmProp_payment", "ToolButton4Click", async function ToolButton4Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.stmt($.call(C, "close", []));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  return U;
}
