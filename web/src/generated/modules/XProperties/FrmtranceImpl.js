// Generated from FrmtranceImpl.pas by pas2js — do not edit by hand; regenerate instead.
/* eslint-disable */
// @ts-nocheck

export default function define($) {
  const U = $.unit("FrmtranceImpl", ["Windows", "Messages", "SysUtils", "Classes", "Graphics", "Controls", "Forms", "Dialogs", "StdCtrls", "ExtCtrls", "Mask", "DBCtrls", "ComCtrls", "ToolWin", "Grids", "DBGridEh", "ImgList", "CMExcelExport", "ActnList", "DMprop", "FrmTranchesAddImpl", "sboapiDataModuleImpl", "SBTranslateProc"]);
  const C = [U];
  U.defClass("TFrmTrance", "TForm", {"groupbox1": {"name": "GroupBox1", "type": "TGroupBox"}, "panel1": {"name": "Panel1", "type": "TPanel"}, "dbedit1": {"name": "DBEdit1", "type": "TDBEdit"}, "dbgrideh1": {"name": "DBGridEh1", "type": "TDBGridEh"}, "imagelist1": {"name": "ImageList1", "type": "TImageList"}, "coolbar2": {"name": "CoolBar2", "type": "TCoolBar"}, "toolbar2": {"name": "ToolBar2", "type": "TToolBar"}, "toolbutton5": {"name": "ToolButton5", "type": "TToolButton"}, "toolbutton6": {"name": "ToolButton6", "type": "TToolButton"}, "toolbutton7": {"name": "ToolButton7", "type": "TToolButton"}, "actionlist1": {"name": "ActionList1", "type": "TActionList"}, "actnadd": {"name": "ActnAdd", "type": "TAction"}, "actndel": {"name": "ActnDel", "type": "TAction"}, "actnexport": {"name": "ActnExport", "type": "TAction"}, "toolbutton8": {"name": "ToolButton8", "type": "TToolButton"}, "toolbutton1": {"name": "ToolButton1", "type": "TToolButton"}, "toolbutton2": {"name": "ToolButton2", "type": "TToolButton"}, "toolbutton3": {"name": "ToolButton3", "type": "TToolButton"}, "excelexport": {"name": "ExcelExport", "type": "TCMExcelExport"}, "refreshcontracts": {"name": "RefreshContracts", "type": "Boolean"}}, {});
  U.init(async () => {
    U.var_("FrmTrance", null, "TFrmTrance");
  });
  U.method("TFrmTrance", "FormCanResize", async function FormCanResize(Self, p0, p1, p2, p3) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "newwidth": $.asRef(p1), "newheight": $.asRef(p2), "resize": $.asRef(p3), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await L0["resize"].set(false);
  return L0.result;
}, {"params": ["Sender", "NewWidth", "NewHeight", "Resize"], "kind": "procedure", "ptypes": ["TObject", "Integer", "Integer", "Boolean"]});
  U.method("TFrmTrance", "ToolButton1Click", async function ToolButton1Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t1 = (await $.v(C, "DMproperties"));
    const $t2 = (await $.wv([$t1], "DataSetPropIns", C, false));
    await $.stmt($.wcall([$t1, $t2], "open", [], C));
  }
  if ($.truthy($.eq((await $.mv((await $.v(C, "FrmTranchesAdd")), "ShowModal")), (await $.v(C, "mrOk"))))) {
    await $.set(C, "RefreshContracts", true);
    await $.mcall((await $.mv((await $.v(C, "DMproperties")), "DataSetProp_take")), "Refresh", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFrmTrance", "FormCreate", async function FormCreate(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.set(C, "FrmTranchesAdd", (await $.mcall((await $.v(C, "TFrmTranchesAdd")), "create", [Self])));
  await $.stmt((await $.mcall((await $.v(C, "SBTranslateProc")), "TranslateAllCompForms", [Self, (await $.mv((await $.v(C, "sboapiDataModule")), "OrPack_SL"))])));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFrmTrance", "FormDestroy", async function FormDestroy(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mcall((await $.v(C, "FrmTranchesAdd")), "free", []);
  await $.mcall((await $.mv((await $.v(C, "DMproperties")), "DataSetProp_take")), "close", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFrmTrance", "FormKeyPress", async function FormKeyPress(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "key": $.asRef(p1), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.eq((await $.call(C, "Ord", [(await L0["key"].get())])), (await $.v(C, "VK_ESCAPE"))))) {
    await $.stmt($.call(C, "Close", []));
  }
  return L0.result;
}, {"params": ["Sender", "Key"], "kind": "procedure", "ptypes": ["TObject", "Char"]});
  U.method("TFrmTrance", "FormShow", async function FormShow(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "propid": 0, "name": ''};
  await $.fixArgs(L0, ["sender"]);
  L0["propid"] = (await $.mv((await $.mcall((await $.mv((await $.v(C, "DMproperties")), "DataSetPropIns")), "FieldByname", ["id"])), "asinteger"));
  L0["name"] = (await $.mv((await $.mcall((await $.mv((await $.v(C, "DMproperties")), "DataSetPropIns")), "FieldByname", ["name"])), "asstring"));
  await $.set(C, "Caption", $.add(L0["name"], " adlı əmlakın alınması"));
  {
    const $t3 = (await $.v(C, "DMproperties"));
    const $t4 = (await $.wv([$t3], "DataSetProp_take", C, false));
    await $.stmt($.wcall([$t3, $t4], "close", [], C));
    await $.stmt((await $.wcall([$t3, $t4], "SetVariable", ["propid", (await $.wv([$t3, $t4], "propid", { get: async () => L0["propid"], set: async (v) => { L0["propid"] = v; }, local: true }, false))], C)));
    await $.stmt($.wcall([$t3, $t4], "open", [], C));
    await $.stmt($.wcall([$t3, $t4], "refresh", [], C));
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFrmTrance", "ActnAddExecute", async function ActnAddExecute(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.eq((await $.mv((await $.v(C, "FrmTranchesAdd")), "ShowModal")), (await $.v(C, "mrOk"))))) {
    await $.set(C, "RefreshContracts", true);
    await $.mcall((await $.mv((await $.v(C, "DMproperties")), "DataSetProp_take")), "Refresh", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFrmTrance", "ActnDelExecute", async function ActnDelExecute(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.eq((await $.call(C, "MessageDlg", ["Silinməsinə əminsinizmi?", (await $.v(C, "mtConfirmation")), [(await $.v(C, "mbYes")), (await $.v(C, "mbNo"))], 0])), (await $.v(C, "mrNo"))))) {
    return L0.result;
  }
  {
    const $t5 = (await $.v(C, "DMproperties"));
    const $t6 = (await $.wv([$t5], "OraclePackage2", C, false));
    const $t7 = (await $.wv([$t5, $t6], "DataSetProp_take", C, false));
    await $.stmt((await $.wcall([$t5, $t6, $t7], "CallProcedure", ["DeleteTranche", ["P_Prop_Takeid", (await $.mv((await $.wcall([$t5, $t6, $t7], "FieldByName", ["ID"], C)), "AsInteger"))]], C)));
    await $.stmt($.wcall([$t5, $t6, $t7], "Refresh", [], C));
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFrmTrance", "ActnDelUpdate", async function ActnDelUpdate(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t8 = (L0["sender"]);
    await $.wset([$t8], "Enabled", ($.gt((await $.mv((await $.mv((await $.wv([$t8], "DMproperties", C, false)), "DataSetProp_take")), "RecordCount")), 0)), C);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFrmTrance", "ActnExportExecute", async function ActnExportExecute(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t9 = (await $.v(C, "ExcelExport"));
    await $.stmt($.wcall([$t9], "Connect", [], C));
    await $.stmt((await $.wcall([$t9], "ExportDataset", [(await $.mv((await $.wv([$t9], "DMproperties", C, false)), "DataSetProp_take")), "Tranşlar", (await $.wv([$t9], "True", C, false))], C)));
    await $.stmt($.wcall([$t9], "Disconnect", [], C));
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFrmTrance", "ToolButton8Click", async function ToolButton8Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.stmt($.call(C, "close", []));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  return U;
}
