// Generated from EditTrUnit.pas by pas2js — do not edit by hand; regenerate instead.
/* eslint-disable */
// @ts-nocheck

export default function define($) {
  const U = $.unit("EditTrUnit", ["Windows", "Messages", "SysUtils", "Classes", "Graphics", "Controls", "Forms", "Dialogs", "ComCtrls", "StdCtrls", "Buttons", "CorrectDatModImpl", "CommonDecls", "sbsystem"]);
  const C = [U];
  U.defClass("TEditTrForm", "TForm", {"speedbutton1": {"name": "SpeedButton1", "type": "TSpeedButton"}, "speedbutton2": {"name": "SpeedButton2", "type": "TSpeedButton"}, "editamount": {"name": "EditAmount", "type": "TEdit"}, "datetimepicker": {"name": "DateTimePicker", "type": "TDateTimePicker"}, "label1": {"name": "Label1", "type": "TLabel"}, "label5": {"name": "Label5", "type": "TLabel"}}, {});
  U.init(async () => {
    U.var_("EditTrForm", null, "TEditTrForm");
  });
  U.method("TEditTrForm", "SpeedButton1Click", async function SpeedButton1Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "p_crdid": 0, "p_tranchedate": 0, "p_trchamount": 0};
  await $.fixArgs(L0, ["sender"]);
  L0["p_crdid"] = (await $.v(C, "Get_SelectedCrdID"));
  L0["p_trchamount"] = (await $.call(C, "StrToFloat", [(await $.mv((await $.v(C, "EditAmount")), "Text"))]));
  L0["p_tranchedate"] = (await $.call(C, "integer", [(await $.call(C, "trunc", [(await $.mv((await $.v(C, "DateTimePicker")), "DateTime"))]))]));
  {
    const $t1 = (await $.wobj(C, "CorrectDatMod"));
    const $t2 = (await $.wv([$t1], "CM_CORR_TRCH_PAY", C, false));
    const $t3 = (await $.wv([$t1, $t2], "Tranches", C, false));
    await $.stmt((await $.wcall([$t1, $t2, $t3], "CallProcedure", ["edit_tranches", [(await $.wv([$t1, $t2, $t3], "P_CrdID", { get: async () => L0["p_crdid"], set: async (v) => { L0["p_crdid"] = v; }, local: true }, false)), (await $.wv([$t1, $t2, $t3], "P_TrancheDate", { get: async () => L0["p_tranchedate"], set: async (v) => { L0["p_tranchedate"] = v; }, local: true }, false)), (await $.wv([$t1, $t2, $t3], "P_TrchAmount", { get: async () => L0["p_trchamount"], set: async (v) => { L0["p_trchamount"] = v; }, local: true }, false))]], C)));
    await $.stmt($.wcall([$t1, $t2, $t3], "Refresh", [], C));
  }
  {
    const $t4 = (await $.wobj(C, "EditTrForm"));
    await $.stmt($.wcall([$t4], "Close", [], C));
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TEditTrForm", "FormKeyPress", async function FormKeyPress(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "key": $.asRef(p1), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.eq((await $.call(C, "ord", [(await L0["key"].get())])), (await $.v(C, "VK_ESCAPE"))))) {
    await $.stmt($.call(C, "Close", []));
  }
  return L0.result;
}, {"params": ["Sender", "Key"], "kind": "procedure", "ptypes": ["TObject", "Char"]});
  U.method("TEditTrForm", "SpeedButton2Click", async function SpeedButton2Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.stmt($.call(C, "Close", []));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  return U;
}
