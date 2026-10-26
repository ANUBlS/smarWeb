// Generated from FrmPartialPaymentImpl_new.pas by pas2js — do not edit by hand; regenerate instead.
/* eslint-disable */
// @ts-nocheck

export default function define($) {
  const U = $.unit("FrmPartialPaymentImpl_new", ["Windows", "Messages", "SysUtils", "Classes", "Graphics", "Controls", "Forms", "Dialogs", "XFSCtrls", "XDBCtrls", "StdCtrls", "Mask", "DBCtrls", "ComCtrls", "Grids", "XDBGrids", "ToolWin", "ExtCtrls", "Menus", "CMExcelExport", "ImgList", "ActnList", "Buttons", "NewCommonDeclsImpl", "DataModPartialPaymentImpl_new", "FrmPaymentAddImpl_new", "SBTranslateProc", "sboapiDataModuleimpl"]);
  const C = [U];
  U.defClass("TFrmPartialPayment_new", "TForm", {"actionlist1": {"name": "ActionList1", "type": "TActionList"}, "actnadd": {"name": "ActnAdd", "type": "TAction"}, "actndel": {"name": "ActnDel", "type": "TAction"}, "actnexprt": {"name": "ActnExprt", "type": "TAction"}, "excelexport": {"name": "ExcelExport", "type": "TCMExcelExport"}, "xdbgrid1": {"name": "XDBGrid1", "type": "TXDBGrid"}, "xfgroupbox1": {"name": "XFGroupBox1", "type": "TXFGroupBox"}, "dbedit1": {"name": "DBEdit1", "type": "TDBEdit"}, "imagelist1": {"name": "ImageList1", "type": "TImageList"}, "pmshowtr": {"name": "PMShowTr", "type": "TPopupMenu"}, "n1": {"name": "N1", "type": "TMenuItem"}, "toolbar1": {"name": "ToolBar1", "type": "TToolBar"}, "toolbutton3": {"name": "ToolButton3", "type": "TToolButton"}, "toolbutton4": {"name": "ToolButton4", "type": "TToolButton"}, "toolbutton5": {"name": "ToolButton5", "type": "TToolButton"}, "toolbutton6": {"name": "ToolButton6", "type": "TToolButton"}, "toolbutton7": {"name": "ToolButton7", "type": "TToolButton"}, "toolbutton8": {"name": "ToolButton8", "type": "TToolButton"}, "toolbutton9": {"name": "ToolButton9", "type": "TToolButton"}}, {});
  U.init(async () => {
    U.var_("FrmPartialPayment_new", null, "TFrmPartialPayment_new");
  });
  U.func("exportproc", async function exportproc(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"s": $.copyArg(p0), result: undefined, "contid": 0};
  await $.fixArgs(L0, ["s"]);
  L0["contid"] = (await $.v(C, "Get_SelectedContID"));
  {
    const $t1 = (await $.mv((await $.v(C, "DataModPartialPayment_new")), "Payments"));
    await $.stmt($.wcall([$t1], "Close", [], C));
    await $.stmt((await $.wcall([$t1], "SetVariable", ["CONTRACTID", (await $.wv([$t1], "ContID", { get: async () => L0["contid"], set: async (v) => { L0["contid"] = v; }, local: true }, false))], C)));
    await $.stmt($.wcall([$t1], "Open", [], C));
  }
  {
    const $t2 = (await $.mv((await $.v(C, "DataModPartialPayment_new")), "DepositInfo"));
    await $.stmt($.wcall([$t2], "Close", [], C));
    await $.stmt((await $.wcall([$t2], "SetVariable", ["CONTRACTID", (await $.wv([$t2], "ContID", { get: async () => L0["contid"], set: async (v) => { L0["contid"] = v; }, local: true }, false))], C)));
    await $.stmt($.wcall([$t2], "Open", [], C));
  }
  {
    const $t3 = (await $.mv((await $.v(C, "DataModPartialPayment_new")), "DebitAccs"));
    await $.stmt($.wcall([$t3], "Close", [], C));
    await $.stmt((await $.wcall([$t3], "SetVariable", ["CONTRACTID", (await $.wv([$t3], "ContID", { get: async () => L0["contid"], set: async (v) => { L0["contid"] = v; }, local: true }, false))], C)));
    await $.stmt($.wcall([$t3], "Open", [], C));
  }
  {
    const $t4 = (await $.mv((await $.v(C, "DataModPartialPayment_new")), "CreditAccs"));
    await $.stmt($.wcall([$t4], "Close", [], C));
    await $.stmt((await $.wcall([$t4], "SetVariable", ["CONTRACTID", (await $.wv([$t4], "ContID", { get: async () => L0["contid"], set: async (v) => { L0["contid"] = v; }, local: true }, false))], C)));
    await $.stmt($.wcall([$t4], "Open", [], C));
  }
  {
    const $t5 = (await $.mv((await $.v(C, "DataModPartialPayment_new")), "PercentAccs"));
    await $.stmt($.wcall([$t5], "Close", [], C));
    await $.stmt((await $.wcall([$t5], "SetVariable", ["CONTRACTID", (await $.wv([$t5], "ContID", { get: async () => L0["contid"], set: async (v) => { L0["contid"] = v; }, local: true }, false))], C)));
    await $.stmt($.wcall([$t5], "Open", [], C));
  }
  {
    const $t6 = (await $.mv((await $.v(C, "DataModPartialPayment_new")), "Sysdat"));
    await $.stmt($.wcall([$t6], "Close", [], C));
    await $.stmt($.wcall([$t6], "Open", [], C));
  }
  await $.mcall((await $.v(C, "FrmPartialPayment_new")), "ShowModal", []);
  return L0.result;
}, {"params": ["S"], "kind": "procedure", "ptypes": ["String"]});
  U.method("TFrmPartialPayment_new", "FormCreate", async function FormCreate(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.set(C, "DataModPartialPayment_new", (await $.mcall((await $.v(C, "TDataModPartialPayment_new")), "Create", [Self])));
  await $.set(C, "FrmPaymentAdd_new", (await $.mcall((await $.v(C, "TFrmPaymentAdd_new")), "create", [Self])));
  await $.stmt((await $.mcall((await $.v(C, "SBTranslateProc")), "TranslateAllCompForms", [Self, (await $.mv((await $.v(C, "sboapiDataModule")), "OrPack_SL"))])));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFrmPartialPayment_new", "FormDestroy", async function FormDestroy(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mcall((await $.v(C, "DataModPartialPayment_new")), "Free", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFrmPartialPayment_new", "ToolButton5Click", async function ToolButton5Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t7 = (await $.v(C, "DataModPartialPayment_new"));
    const $t8 = (await $.wv([$t7], "sb_aca", C, false));
    await $.stmt((await $.wcall([$t7, $t8], "CallProcedure", ["checkadvancedobjectaccess", ["DELETE_SBCM_PARTIAL_PEYMENT"]], C)));
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFrmPartialPayment_new", "ToolButton7Click", async function ToolButton7Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t9 = (await $.v(C, "DataModPartialPayment_new"));
    const $t10 = (await $.wv([$t9], "sb_aca", C, false));
    await $.stmt((await $.wcall([$t9, $t10], "CallProcedure", ["checkadvancedobjectaccess", ["EXCEL_SBCM_PARTIAL_PEYMENT"]], C)));
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFrmPartialPayment_new", "ToolButton9Click", async function ToolButton9Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.stmt($.call(C, "Close", []));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFrmPartialPayment_new", "ActnAddExecute", async function ActnAddExecute(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t11 = (await $.v(C, "DataModPartialPayment_new"));
    const $t12 = (await $.wv([$t11], "sb_aca", C, false));
    await $.stmt((await $.wcall([$t11, $t12], "CallProcedure", ["checkadvancedobjectaccess", ["INSERT_SBCM_PARTIAL_PEYMENT"]], C)));
  }
  await $.mcall((await $.v(C, "FrmPaymentAdd_new")), "ShowModal", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.setInitialization(async function __initialization(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: undefined};
  await $.set(C, "FrmPartialPayment_new", (await $.mcall((await $.v(C, "TFrmPartialPayment_new")), "Create", [(await $.v(C, "CommonApplication"))])));
  return L0.result;
});
  return U;
}
