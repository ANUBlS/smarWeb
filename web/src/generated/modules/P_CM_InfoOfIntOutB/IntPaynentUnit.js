// Generated from IntPaynentUnit.pas by pas2js — do not edit by hand; regenerate instead.
/* eslint-disable */
// @ts-nocheck

export default function define($) {
  const U = $.unit("IntPaynentUnit", ["Windows", "Messages", "SysUtils", "Classes", "Graphics", "Controls", "Forms", "NLSDialogs", "ImgList", "ActnList", "StdCtrls", "ComCtrls", "Buttons", "ExtCtrls", "Mask", "DBCtrlsEh", "NLSLocalizer", "InfoOutIntImpl", "CommonDecls", "SystemState"]);
  const C = [U];
  U.defClass("TPaymentForm", "TForm", {"nlslocalizer1": {"name": "NLSLocalizer1", "type": "TNLSLocalizer"}, "groupbox1": {"name": "GroupBox1", "type": "TGroupBox"}, "dbediteh1": {"name": "DBEditEh1", "type": "TDBEditEh"}, "panel1": {"name": "Panel1", "type": "TPanel"}, "groupbox2": {"name": "GroupBox2", "type": "TGroupBox"}, "dbediteh2": {"name": "DBEditEh2", "type": "TDBEditEh"}, "groupbox3": {"name": "GroupBox3", "type": "TGroupBox"}, "speedbutton1": {"name": "SpeedButton1", "type": "TSpeedButton"}, "speedbutton2": {"name": "SpeedButton2", "type": "TSpeedButton"}, "datetimepicker": {"name": "DateTimePicker", "type": "TDateTimePicker"}, "label1": {"name": "Label1", "type": "TLabel"}, "amountedit": {"name": "AmountEdit", "type": "TEdit"}, "actionlist1": {"name": "ActionList1", "type": "TActionList"}, "imagelist1": {"name": "ImageList1", "type": "TImageList"}, "actnaccept": {"name": "ActnAccept", "type": "TAction"}, "actnreject": {"name": "ActnReject", "type": "TAction"}}, {});
  U.init(async () => {
    U.var_("PaymentForm", null, "TPaymentForm");
  });
  U.method("TPaymentForm", "FormCanResize", async function FormCanResize(Self, p0, p1, p2, p3) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "newwidth": $.asRef(p1), "newheight": $.asRef(p2), "resize": $.asRef(p3), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await L0["resize"].set(false);
  return L0.result;
}, {"params": ["Sender", "NewWidth", "NewHeight", "Resize"], "kind": "procedure", "ptypes": ["TObject", "Integer", "Integer", "Boolean"]});
  U.method("TPaymentForm", "FormKeyPress", async function FormKeyPress(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "key": $.asRef(p1), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.eq((await $.call(C, "Ord", [(await L0["key"].get())])), (await $.v(C, "VK_ESCAPE"))))) {
    await $.stmt($.call(C, "Close", []));
  }
  return L0.result;
}, {"params": ["Sender", "Key"], "kind": "procedure", "ptypes": ["TObject", "Char"]});
  U.method("TPaymentForm", "ActnAcceptExecute", async function ActnAcceptExecute(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "crdid": 0, "committr": false, "tramount": 0};
  await $.fixArgs(L0, ["sender"]);
  L0["rstr"] = " Əməliyatın aparılmasına əminsinizmi? ";
  L0["rstransactionswillprocessed"] = "Faizlərin B.K-dan ödənilməsi ...";
  L0["tramount"] = (await $.call(C, "StrToFloat", [(await $.mv((await $.v(C, "AmountEdit")), "Text"))]));
  if ($.truthy($.eq($.not((await $.call(C, "MessageDlg", [L0["rstr"], (await $.v(C, "mtConfirmation")), [(await $.v(C, "mbYes")), (await $.v(C, "mbNo"))], 0]))), (await $.v(C, "mrYes"))))) {
    return L0.result;
  }
  {
    const $t1 = (await $.wobj(C, "InfOutIntDatMod"));
    const $t2 = (await $.wv([$t1], "CM_RETURN_INT_OB", C, false));
    await $.wset([$t1, $t2], "CrdID", (await $.mv((await $.mcall((await $.wv([$t1, $t2], "IntPlaceOutBDatSet", C, false)), "FieldByName", ["CreditID"])), "Asinteger")), { get: async () => L0["crdid"], set: async (v) => { L0["crdid"] = v; }, local: true });
    await $.stmt((await $.mcall((await $.wv([$t1, $t2], "CM_RETURN_INT_OB", C, false)), "CallProcedure", ["return_int", ["p_CreditID", (await $.wv([$t1, $t2], "CrdID", { get: async () => L0["crdid"], set: async (v) => { L0["crdid"] = v; }, local: true }, false)), "p_tramount", (await $.wv([$t1, $t2], "TrAmount", { get: async () => L0["tramount"], set: async (v) => { L0["tramount"] = v; }, local: true }, false))]])));
  }
  try {
    L0["committr"] = (await $.call(C, "TrDelayed_Show", [Self, L0["rstransactionswillprocessed"]]));
    await $.stmt($.call(C, "Update", []));
    {
      const $t4 = (await $.wobj(C, "InfOutIntDatMod"));
      await $.stmt((await $.mcall((await $.wv([$t4], "CM_RETURN_INT_OB", C, false)), "CallProcedure", ["CommitTr", ["DefCommit", (await $.wv([$t4], "CommitTr", { get: async () => L0["committr"], set: async (v) => { L0["committr"] = v; }, local: true }, false))]])));
      await $.mcall((await $.wv([$t4], "IntPlaceOutBDatSet", C, false)), "Refresh", []);
    }
  } catch ($t3) {
    $.rethrowControl($t3);
    $.handled($t3);
    {
      const $t5 = (await $.wobj(C, "InfOutIntDatMod"));
      await $.stmt((await $.mcall((await $.wv([$t5], "CM_RETURN_INT_OB", C, false)), "CallProcedure", ["CommitTr", ["DefCommit", (await $.wv([$t5], "False", C, false))]])));
    }
    throw $t3;
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TPaymentForm", "ActnRejectExecute", async function ActnRejectExecute(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.stmt($.call(C, "Close", []));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TPaymentForm", "FormCreate", async function FormCreate(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mset((await $.v(C, "DateTimePicker")), "DateTime", (await $.v(C, "Get_CurrentDate")));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  return U;
}
