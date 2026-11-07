// Generated from CorrectMainUnit.pas by pas2js — do not edit by hand; regenerate instead.
/* eslint-disable */
// @ts-nocheck

export default function define($) {
  const U = $.unit("CorrectMainUnit", ["Windows", "Messages", "SysUtils", "Classes", "Graphics", "Controls", "Forms", "Dialogs", "Grids", "DBGridEh", "ComCtrls", "ToolWin", "ExtCtrls", "ActnList", "ImgList", "StdCtrls", "CommonDecls", "CorrectDatModImpl", "sbsystem", "Tranches_AddEditUnit", "EditTrUnit", "PayAddUnit", "PayEditUnit"]);
  const C = [U];
  U.defClass("TCorrectMainForm", "TForm", {"imagelist1": {"name": "ImageList1", "type": "TImageList"}, "actionlist1": {"name": "ActionList1", "type": "TActionList"}, "panel1": {"name": "Panel1", "type": "TPanel"}, "toolbar1": {"name": "ToolBar1", "type": "TToolBar"}, "toolbutton1": {"name": "ToolButton1", "type": "TToolButton"}, "toolbutton2": {"name": "ToolButton2", "type": "TToolButton"}, "toolbutton3": {"name": "ToolButton3", "type": "TToolButton"}, "toolbutton4": {"name": "ToolButton4", "type": "TToolButton"}, "toolbutton5": {"name": "ToolButton5", "type": "TToolButton"}, "toolbar2": {"name": "ToolBar2", "type": "TToolBar"}, "toolbutton6": {"name": "ToolButton6", "type": "TToolButton"}, "toolbutton7": {"name": "ToolButton7", "type": "TToolButton"}, "toolbutton8": {"name": "ToolButton8", "type": "TToolButton"}, "toolbutton9": {"name": "ToolButton9", "type": "TToolButton"}, "toolbutton10": {"name": "ToolButton10", "type": "TToolButton"}, "toolbutton11": {"name": "ToolButton11", "type": "TToolButton"}, "panel2": {"name": "Panel2", "type": "TPanel"}, "dbgrideh1": {"name": "DBGridEh1", "type": "TDBGridEh"}, "dbgrideh2": {"name": "DBGridEh2", "type": "TDBGridEh"}, "actnadd_tranches": {"name": "ActnAdd_Tranches", "type": "TAction"}, "actnedit_tranches": {"name": "ActnEdit_tranches", "type": "TAction"}, "actndel_tranches": {"name": "ActnDel_Tranches", "type": "TAction"}, "actnrest": {"name": "ActnRest", "type": "TAction"}, "toolbutton12": {"name": "ToolButton12", "type": "TToolButton"}, "toolbutton13": {"name": "ToolButton13", "type": "TToolButton"}, "toolbutton14": {"name": "ToolButton14", "type": "TToolButton"}, "label3": {"name": "Label3", "type": "TLabel"}, "label4": {"name": "Label4", "type": "TLabel"}}, {});
  U.init(async () => {
    U.var_("CorrectMainForm", null, "TCorrectMainForm");
  });
  U.func("InitPlugin", async function InitPlugin(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"s": $.copyArg(p0), result: undefined, "crdid": 0};
  await $.fixArgs(L0, ["s"]);
  L0["crdid"] = (await $.v(C, "Get_SelectedCrdID"));
  {
    const $t1 = (await $.wobj(C, "CorrectDatMod"));
    {
      const $t2 = (await $.wv([$t1], "Tranches", C, false));
      if ($.truthy((await $.wv([$t1, $t2], "Active", C, false)))) {
        await $.stmt($.wcall([$t1, $t2], "CloseAll", [], C));
      }
      await $.stmt((await $.wcall([$t1, $t2], "SetVariable", ["CrdID", (await $.wv([$t1, $t2], "CrdID", { get: async () => L0["crdid"], set: async (v) => { L0["crdid"] = v; }, local: true }, false))], C)));
      await $.stmt($.wcall([$t1, $t2], "Open", [], C));
    }
    {
      const $t3 = (await $.wv([$t1], "Payments", C, false));
      if ($.truthy((await $.wv([$t1, $t3], "Active", C, false)))) {
        await $.stmt($.wcall([$t1, $t3], "CloseAll", [], C));
      }
      await $.stmt((await $.wcall([$t1, $t3], "SetVariable", ["CrdID", (await $.wv([$t1, $t3], "CrdID", { get: async () => L0["crdid"], set: async (v) => { L0["crdid"] = v; }, local: true }, false))], C)));
      await $.stmt($.wcall([$t1, $t3], "Open", [], C));
    }
  }
  await $.mcall((await $.v(C, "CorrectMainForm")), "ShowModal", []);
  return L0.result;
}, {"params": ["s"], "kind": "procedure", "ptypes": ["String"]});
  U.method("TCorrectMainForm", "FormCreate", async function FormCreate(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.set(C, "CorrectDatMod", (await $.mcall((await $.v(C, "TCorrectDatMod")), "Create", [Self])));
  await $.set(C, "Tranches_AddEditForm", (await $.mcall((await $.v(C, "TTranches_AddEditForm")), "create", [Self])));
  await $.set(C, "EditTrForm", (await $.mcall((await $.v(C, "TEditTrForm")), "Create", [Self])));
  await $.set(C, "PaymentAddForm", (await $.mcall((await $.v(C, "TPaymentAddForm")), "create", [Self])));
  await $.set(C, "PaymentEditForm", (await $.mcall((await $.v(C, "TPaymentEditForm")), "Create", [Self])));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TCorrectMainForm", "FormDestroy", async function FormDestroy(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mcall((await $.v(C, "CorrectDatMod")), "Free", []);
  await $.mcall((await $.v(C, "Tranches_AddEditForm")), "Free", []);
  await $.mcall((await $.v(C, "EditTrForm")), "Free", []);
  await $.mcall((await $.v(C, "PaymentAddForm")), "Free", []);
  await $.mcall((await $.v(C, "PaymentEditForm")), "Free", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TCorrectMainForm", "ActnAdd_TranchesExecute", async function ActnAdd_TranchesExecute(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mcall((await $.v(C, "Tranches_AddEditForm")), "ShowModal", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TCorrectMainForm", "ActnEdit_tranchesExecute", async function ActnEdit_tranchesExecute(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mset((await $.mv((await $.v(C, "EditTrForm")), "DateTimePicker")), "DateTime", (await $.mv((await $.mcall((await $.mv((await $.v(C, "CorrectDatMod")), "Tranches")), "FieldByName", ["TRANCHEDATE"])), "AsDateTime")));
  await $.mset((await $.mv((await $.v(C, "EditTrForm")), "EditAmount")), "Text", (await $.call(C, "FloatToStr", [(await $.mv((await $.mcall((await $.mv((await $.v(C, "CorrectDatMod")), "Tranches")), "FieldByName", ["TRANCHEAMOUNT"])), "AsFloat"))])));
  await $.mcall((await $.v(C, "EditTrForm")), "ShowModal", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TCorrectMainForm", "ActnDel_TranchesExecute", async function ActnDel_TranchesExecute(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "p_crdid": 0, "p_tranchedate": 0};
  await $.fixArgs(L0, ["sender"]);
  L0["rs"] = "Silinməsinə əminsinizmi? ";
  L0["p_crdid"] = (await $.v(C, "Get_SelectedCrdID"));
  {
    const $t4 = (await $.wobj(C, "CorrectDatMod"));
    const $t5 = (await $.wv([$t4], "Tranches", C, false));
    await $.wset([$t4, $t5], "P_TrancheDate", (await $.mv((await $.wcall([$t4, $t5], "FieldByName", ["TRANCHEDATE"], C)), "AsDateTime")), { get: async () => L0["p_tranchedate"], set: async (v) => { L0["p_tranchedate"] = v; }, local: true });
  }
  if ($.truthy($.eq((await $.call(C, "MessageDlg", [L0["rs"], (await $.v(C, "mtConfirmation")), [(await $.v(C, "mbYes")), (await $.v(C, "mbNo"))], 0])), (await $.v(C, "mrYes"))))) {
    {
      const $t6 = (await $.wobj(C, "CorrectDatMod"));
      const $t7 = (await $.wv([$t6], "CM_CORR_TRCH_PAY", C, false));
      const $t8 = (await $.wv([$t6, $t7], "Tranches", C, false));
      await $.stmt((await $.wcall([$t6, $t7, $t8], "CallProcedure", ["del_tranches", [(await $.wv([$t6, $t7, $t8], "P_CrdID", { get: async () => L0["p_crdid"], set: async (v) => { L0["p_crdid"] = v; }, local: true }, false)), (await $.wv([$t6, $t7, $t8], "P_TrancheDate", { get: async () => L0["p_tranchedate"], set: async (v) => { L0["p_tranchedate"] = v; }, local: true }, false))]], C)));
      await $.stmt($.wcall([$t6, $t7, $t8], "Refresh", [], C));
    }
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TCorrectMainForm", "ToolButton6Click", async function ToolButton6Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mcall((await $.v(C, "PaymentAddForm")), "ShowModal", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TCorrectMainForm", "ToolButton8Click", async function ToolButton8Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mset((await $.mv((await $.v(C, "PaymentEditForm")), "EditRest")), "Text", (await $.call(C, "floattostr", [(await $.mv((await $.mcall((await $.mv((await $.v(C, "CorrectDatMod")), "Payments")), "fieldbyname", ["payedamt"])), "asfloat"))])));
  await $.mset((await $.mv((await $.v(C, "PaymentEditForm")), "EditDueRest")), "Text", "0");
  await $.mset((await $.mv((await $.v(C, "PaymentEditForm")), "EditInterestRest")), "Text", (await $.call(C, "floattostr", [(await $.mv((await $.mcall((await $.mv((await $.v(C, "CorrectDatMod")), "Payments")), "fieldbyname", ["payedintamt"])), "asfloat"))])));
  await $.mset((await $.mv((await $.v(C, "PaymentEditForm")), "EditDueInterestRest")), "Text", "0");
  await $.mcall((await $.v(C, "PaymentEditForm")), "ShowModal", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TCorrectMainForm", "ToolButton10Click", async function ToolButton10Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "p_crdid": 0, "p_tranchedate": 0};
  await $.fixArgs(L0, ["sender"]);
  L0["rs"] = "Silinməsinə əminsinizmi? ";
  L0["p_crdid"] = (await $.v(C, "Get_SelectedCrdID"));
  {
    const $t9 = (await $.wobj(C, "CorrectDatMod"));
    const $t10 = (await $.wv([$t9], "Payments", C, false));
    await $.wset([$t9, $t10], "P_TrancheDate", (await $.mv((await $.wcall([$t9, $t10], "FieldByName", ["paydate"], C)), "AsDateTime")), { get: async () => L0["p_tranchedate"], set: async (v) => { L0["p_tranchedate"] = v; }, local: true });
  }
  if ($.truthy($.eq((await $.call(C, "MessageDlg", [L0["rs"], (await $.v(C, "mtConfirmation")), [(await $.v(C, "mbYes")), (await $.v(C, "mbNo"))], 0])), (await $.v(C, "mrYes"))))) {
    {
      const $t11 = (await $.wobj(C, "CorrectDatMod"));
      const $t12 = (await $.wv([$t11], "CM_CORR_TRCH_PAY", C, false));
      const $t13 = (await $.wv([$t11, $t12], "Payments", C, false));
      await $.stmt((await $.wcall([$t11, $t12, $t13], "CallProcedure", ["del_payments", [(await $.wv([$t11, $t12, $t13], "P_CrdID", { get: async () => L0["p_crdid"], set: async (v) => { L0["p_crdid"] = v; }, local: true }, false)), (await $.wv([$t11, $t12, $t13], "P_TrancheDate", { get: async () => L0["p_tranchedate"], set: async (v) => { L0["p_tranchedate"] = v; }, local: true }, false))]], C)));
      await $.stmt($.wcall([$t11, $t12, $t13], "Refresh", [], C));
    }
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TCorrectMainForm", "ToolButton13Click", async function ToolButton13Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.stmt($.call(C, "Close", []));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TCorrectMainForm", "FormKeyPress", async function FormKeyPress(Self, p0, p1) {
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
  await $.set(C, "CorrectMainForm", (await $.mcall((await $.v(C, "TCorrectMainForm")), "Create", [(await $.v(C, "CommonApplication"))])));
  return L0.result;
});
  return U;
}
