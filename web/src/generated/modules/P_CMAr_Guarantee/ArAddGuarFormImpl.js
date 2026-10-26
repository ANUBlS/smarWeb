// Generated from ArAddGuarFormImpl.pas by pas2js — do not edit by hand; regenerate instead.
/* eslint-disable */
// @ts-nocheck

export default function define($) {
  const U = $.unit("ArAddGuarFormImpl", ["Windows", "Messages", "SysUtils", "Variants", "Classes", "Graphics", "Controls", "Forms", "Dialogs", "ExtCtrls", "StdCtrls", "CheckLst", "Evanescence", "Buttons", "ArDmImpl", "ArCommonDecls", "ArGuaranteImpl"]);
  const C = [U];
  U.defClass("TAddGuarForm", "TForm", {"panel1": {"name": "Panel1", "type": "TPanel"}, "panel2": {"name": "Panel2", "type": "TPanel"}, "lookfilgrp": {"name": "LookFilGrp", "type": "TEvanescence"}, "speedbutton1": {"name": "SpeedButton1", "type": "TSpeedButton"}, "speedbutton2": {"name": "SpeedButton2", "type": "TSpeedButton"}}, {});
  U.init(async () => {
    U.var_("AddGuarForm", null, "TAddGuarForm");
  });
  U.method("TAddGuarForm", "FormShow", async function FormShow(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "i": 0};
  await $.fixArgs(L0, ["sender"]);
  { const $t1 = $.sub((await $.v(C, "ComponentCount")), 1);
    L0["i"] = 0;
    let $t2 = true;
    for (;;) {
      if (!$t2) { L0["i"] = $.succ(L0["i"], 1); }
      $t2 = false;
      if (!($.ord(L0["i"]) <= $.ord($t1))) break;
      if ($.truthy($.eq((await $.mv((await $.idx((await $.v(C, "Components")), [L0["i"]])), "Tag")), 3112))) {
        await $.mcall((await $.idx((await $.v(C, "Components")), [L0["i"]])), "Open", []);
        await $.mcall((await $.idx((await $.v(C, "Components")), [L0["i"]])), "CheckAll", []);
      }
      await $.tick();
    }
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TAddGuarForm", "SpeedButton1Click", async function SpeedButton1Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "i": 0};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t3 = (await $.v(C, "ArGurDm"));
    const $t4 = (await $.wv([$t3], "LookFilGrp", C, false));
    { const $t5 = $.sub((await $.mv((await $.wv([$t3, $t4], "Items", C, false)), "Count")), 1);
      await $.wset([$t3, $t4], "i", 0, { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true });
      let $t6 = true;
      for (;;) {
        if (!$t6) { await $.wset([$t3, $t4], "i", $.succ((await $.wv([$t3, $t4], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false)), 1), { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }); }
        $t6 = false;
        if (!($.ord((await $.wv([$t3, $t4], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false))) <= $.ord($t5))) break;
        if ($.truthy((await $.idx((await $.wv([$t3, $t4], "Checked", C, false)), [(await $.wv([$t3, $t4], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false))])))) {
          await $.stmt((await $.mcall((await $.wv([$t3, $t4], "Guarante", C, false)), "CallProcedure", ["Upd_girov", [(await $.idx((await $.wv([$t3, $t4], "Items", C, false)), [(await $.wv([$t3, $t4], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false))])), (await $.wv([$t3, $t4], "Get_SelectedCrdID", C, false))]])));
        }
        await $.tick();
      }
    }
    await $.mcall((await $.wv([$t3, $t4], "GurOracleData", C, false)), "Refresh", []);
    await $.stmt($.wcall([$t3, $t4], "RefreshList", [], C));
    await $.stmt((await $.wcall([$t3, $t4], "LogInformation", [$.add($.add("Girov -", (await $.wv([$t3, $t4], "Get_SelectedCrdNo", C, false))), "- Nömrəli kreditlə əlaqələndirildi")], C)));
  }
  await $.stmt($.call(C, "close", []));
  await $.mcall((await $.v(C, "FrmGuarante")), "close", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TAddGuarForm", "SpeedButton2Click", async function SpeedButton2Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.stmt($.call(C, "close", []));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  return U;
}
