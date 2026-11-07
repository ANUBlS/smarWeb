// Generated from frmCardPercentImpl.pas by pas2js — do not edit by hand; regenerate instead.
/* eslint-disable */
// @ts-nocheck

export default function define($) {
  const U = $.unit("frmCardPercentImpl", ["Windows", "Messages", "SysUtils", "Classes", "Graphics", "Controls", "Forms", "Dialogs", "NLSLocalizer", "ComCtrls", "ToolWin", "Grids", "DBGridEh", "ImgList", "ActnList", "DMCardPercentImpl", "frmTranchRestImpl", "frmTranchCalcedIntImpl", "frmTranchPaymentImpl", "CommonDecls"]);
  const C = [U];
  U.defClass("TrmCardPercent", "TForm", {"nlslocalizer1": {"name": "NLSLocalizer1", "type": "TNLSLocalizer"}, "dbgrideh1": {"name": "DBGridEh1", "type": "TDBGridEh"}, "toolbar1": {"name": "ToolBar1", "type": "TToolBar"}, "statusbar1": {"name": "StatusBar1", "type": "TStatusBar"}, "imagelist1": {"name": "ImageList1", "type": "TImageList"}, "toolbutton1": {"name": "ToolButton1", "type": "TToolButton"}, "toolbutton2": {"name": "ToolButton2", "type": "TToolButton"}, "toolbutton3": {"name": "ToolButton3", "type": "TToolButton"}, "toolbutton4": {"name": "ToolButton4", "type": "TToolButton"}, "actionlist1": {"name": "ActionList1", "type": "TActionList"}, "toolbutton5": {"name": "ToolButton5", "type": "TToolButton"}, "toolbutton6": {"name": "ToolButton6", "type": "TToolButton"}, "toolbutton7": {"name": "ToolButton7", "type": "TToolButton"}, "actnrests": {"name": "ActnRests", "type": "TAction"}, "actncalcedint": {"name": "ActnCalcedInt", "type": "TAction"}, "actnpayment": {"name": "ActnPayment", "type": "TAction"}}, {});
  U.init(async () => {
    U.var_("rmCardPercent", null, "TrmCardPercent");
  });
  U.func("InitPlugin", async function InitPlugin(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"s": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["s"]);
  await $.mcall((await $.v(C, "rmCardPercent")), "ShowModal", []);
  return L0.result;
}, {"params": ["S"], "kind": "procedure", "ptypes": ["String"]});
  U.method("TrmCardPercent", "ActnRestsExecute", async function ActnRestsExecute(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "trid": 0};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t1 = (await $.wobj(C, "DMCardPercent"));
    await $.wset([$t1], "TrID", (await $.mv((await $.mcall((await $.wv([$t1], "Tranches", C, false)), "FieldByName", ["ID"])), "AsInteger")), { get: async () => L0["trid"], set: async (v) => { L0["trid"] = v; }, local: true });
    {
      const $t2 = (await $.wv([$t1], "Tranchrest", C, false));
      if ($.truthy((await $.wv([$t1, $t2], "Active", C, false)))) {
        await $.stmt($.wcall([$t1, $t2], "close", [], C));
      }
      await $.stmt((await $.wcall([$t1, $t2], "SetVariable", ["TRID", (await $.wv([$t1, $t2], "TrID", { get: async () => L0["trid"], set: async (v) => { L0["trid"] = v; }, local: true }, false))], C)));
      await $.stmt($.wcall([$t1, $t2], "open", [], C));
    }
  }
  await $.mcall((await $.v(C, "frmTranchRest")), "ShowModal", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TrmCardPercent", "ActnCalcedIntExecute", async function ActnCalcedIntExecute(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "trid": 0};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t3 = (await $.wobj(C, "DMCardPercent"));
    await $.wset([$t3], "TrID", (await $.mv((await $.mcall((await $.wv([$t3], "Tranches", C, false)), "FieldByName", ["ID"])), "AsInteger")), { get: async () => L0["trid"], set: async (v) => { L0["trid"] = v; }, local: true });
    {
      const $t4 = (await $.wv([$t3], "TranchcalcedPer", C, false));
      if ($.truthy((await $.wv([$t3, $t4], "Active", C, false)))) {
        await $.stmt($.wcall([$t3, $t4], "close", [], C));
      }
      await $.stmt((await $.wcall([$t3, $t4], "SetVariable", ["TRID", (await $.wv([$t3, $t4], "TrID", { get: async () => L0["trid"], set: async (v) => { L0["trid"] = v; }, local: true }, false))], C)));
      await $.stmt($.wcall([$t3, $t4], "open", [], C));
    }
  }
  await $.mcall((await $.v(C, "frmTranchCalcedInt")), "ShowModal", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TrmCardPercent", "ActnPaymentExecute", async function ActnPaymentExecute(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "trid": 0};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t5 = (await $.wobj(C, "DMCardPercent"));
    await $.wset([$t5], "TrID", (await $.mv((await $.mcall((await $.wv([$t5], "Tranches", C, false)), "FieldByName", ["ID"])), "AsInteger")), { get: async () => L0["trid"], set: async (v) => { L0["trid"] = v; }, local: true });
    {
      const $t6 = (await $.wv([$t5], "Tranchpayments", C, false));
      if ($.truthy((await $.wv([$t5, $t6], "Active", C, false)))) {
        await $.stmt($.wcall([$t5, $t6], "close", [], C));
      }
      await $.stmt((await $.wcall([$t5, $t6], "SetVariable", ["TRID", (await $.wv([$t5, $t6], "TrID", { get: async () => L0["trid"], set: async (v) => { L0["trid"] = v; }, local: true }, false))], C)));
      await $.stmt($.wcall([$t5, $t6], "open", [], C));
    }
  }
  await $.mcall((await $.v(C, "frmTranchPayment")), "ShowModal", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TrmCardPercent", "FormCanResize", async function FormCanResize(Self, p0, p1, p2, p3) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "newwidth": $.asRef(p1), "newheight": $.asRef(p2), "resize": $.asRef(p3), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await L0["resize"].set(false);
  return L0.result;
}, {"params": ["Sender", "NewWidth", "NewHeight", "Resize"], "kind": "procedure", "ptypes": ["TObject", "Integer", "Integer", "Boolean"]});
  U.method("TrmCardPercent", "FormKeyPress", async function FormKeyPress(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "key": $.asRef(p1), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.eq((await $.call(C, "Ord", [(await L0["key"].get())])), (await $.v(C, "VK_ESCAPE"))))) {
    await $.stmt($.call(C, "close", []));
  }
  return L0.result;
}, {"params": ["Sender", "Key"], "kind": "procedure", "ptypes": ["TObject", "Char"]});
  U.method("TrmCardPercent", "FormCreate", async function FormCreate(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.set(C, "DMCardPercent", (await $.mcall((await $.v(C, "TDMCardPercent")), "Create", [Self])));
  await $.set(C, "frmTranchCalcedInt", (await $.mcall((await $.v(C, "TfrmTranchCalcedInt")), "Create", [Self])));
  await $.set(C, "frmTranchPayment", (await $.mcall((await $.v(C, "TfrmTranchPayment")), "Create", [Self])));
  await $.set(C, "frmTranchRest", (await $.mcall((await $.v(C, "TfrmTranchRest")), "Create", [Self])));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TrmCardPercent", "FormDestroy", async function FormDestroy(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mcall((await $.v(C, "DMCardPercent")), "Free", []);
  await $.mcall((await $.v(C, "frmTranchCalcedInt")), "Free", []);
  await $.mcall((await $.v(C, "frmTranchPayment")), "Free", []);
  await $.mcall((await $.v(C, "frmTranchRest")), "Free", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TrmCardPercent", "ToolButton7Click", async function ToolButton7Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.stmt($.call(C, "close", []));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TrmCardPercent", "FormShow", async function FormShow(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t7 = (await $.wobj(C, "DMCardPercent"));
    const $t8 = (await $.wv([$t7], "Tranches", C, false));
    await $.stmt((await $.wcall([$t7, $t8], "SetVariable", ["CrdID", (await $.wv([$t7, $t8], "Get_SelectedCrdID", C, false))], C)));
    await $.stmt($.wcall([$t7, $t8], "Open", [], C));
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TrmCardPercent", "FormClose", async function FormClose(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "action": $.asRef(p1), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t9 = (await $.wobj(C, "DMCardPercent"));
    const $t10 = (await $.wv([$t9], "Tranches", C, false));
    await $.stmt($.wcall([$t9, $t10], "CloseAll", [], C));
  }
  return L0.result;
}, {"params": ["Sender", "Action"], "kind": "procedure", "ptypes": ["TObject", "TCloseAction"]});
  U.setInitialization(async function __initialization(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: undefined};
  await $.set(C, "rmCardPercent", (await $.mcall((await $.v(C, "TrmCardPercent")), "Create", [(await $.v(C, "CommonApplication"))])));
  return L0.result;
});
  return U;
}
