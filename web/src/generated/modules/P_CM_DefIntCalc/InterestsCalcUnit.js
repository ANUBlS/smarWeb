// Generated from InterestsCalcUnit.pas by pas2js — do not edit by hand; regenerate instead.
/* eslint-disable */
// @ts-nocheck

export default function define($) {
  const U = $.unit("InterestsCalcUnit", ["Windows", "Messages", "SysUtils", "Classes", "Dialogs", "DB", "Controls", "IntCalcDataModImpl", "InfarmatoinImpl", "EndCalcImpl", "CommonDecls"]);
  const C = [U];
  U.init(async () => {
  });
  U.func("ShowStopIntCalc", async function ShowStopIntCalc(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: undefined, "creditid": 0};
  L0["rsstopintcalc"] = "Faizlərin balansda hesablanması dayandırılır?";
  L0["rssoutintcalc"] = "Faizlərin hesablanması balansdankənarda davam etdirilsin ?";
  L0["creditid"] = (await $.v(C, "Get_SelectedCrdID"));
  {
    const $t1 = (await $.mv((await $.v(C, "DefineCalcDatMod")), "OracleDataSet2"));
    if ($.truthy((await $.wv([$t1], "Active", C, false)))) {
      await $.stmt($.wcall([$t1], "close", [], C));
    }
    await $.stmt((await $.wcall([$t1], "SetVariable", ["creditid", (await $.wv([$t1], "creditid", { get: async () => L0["creditid"], set: async (v) => { L0["creditid"] = v; }, local: true }, false))], C)));
    await $.stmt($.wcall([$t1], "open", [], C));
  }
  await $.mcall((await $.v(C, "FrmEndCalc")), "showmodal", []);
  return L0.result;
}, {"params": [], "kind": "procedure", "ptypes": []});
  U.func("ShowContinueIntcalc", async function ShowContinueIntcalc(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: undefined, "creditid": 0};
  L0["rscontinueintcalc"] = "Faizlərin hesablanması davam etdirilsin?";
  L0["creditid"] = (await $.v(C, "Get_SelectedCrdID"));
  if ($.truthy($.eq((await $.call(C, "MessageDlg", [L0["rscontinueintcalc"], (await $.v(C, "mtWarning")), [(await $.v(C, "mbYes")), (await $.v(C, "mbNo"))], 0])), (await $.v(C, "mrYes"))))) {
    await $.stmt((await $.mcall((await $.mv((await $.v(C, "DefineCalcDatMod")), "CM_CREDITS")), "CallProcedure", ["DisableInterestCalc", [L0["creditid"]]])));
  }
  return L0.result;
}, {"params": [], "kind": "procedure", "ptypes": []});
  U.func("InitPlugin", async function InitPlugin(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"s": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["s"]);
  L0["cstopintcalc"] = "StopIntCalc";
  L0["cconintcalc"] = "ConIntCalc";
  if ($.truthy($.eq(L0["s"], L0["cstopintcalc"]))) {
    await $.stmt($.call(C, "ShowStopIntCalc", []));
  }
  if ($.truthy($.eq(L0["s"], L0["cconintcalc"]))) {
    await $.stmt($.call(C, "ShowContinueIntcalc", []));
  }
  return L0.result;
}, {"params": ["S"], "kind": "procedure", "ptypes": ["String"]});
  U.setInitialization(async function __initialization(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: undefined};
  await $.set(C, "DefineCalcDatMod", (await $.mcall((await $.v(C, "TDefineCalcDatMod")), "Create", [(await $.v(C, "CommonApplication"))])));
  await $.set(C, "FrmInfarmatoin", (await $.mcall((await $.v(C, "TFrmInfarmatoin")), "Create", [(await $.v(C, "CommonApplication"))])));
  await $.set(C, "FrmEndCalc", (await $.mcall((await $.v(C, "TFrmEndCalc")), "Create", [(await $.v(C, "CommonApplication"))])));
  return L0.result;
});
  return U;
}
