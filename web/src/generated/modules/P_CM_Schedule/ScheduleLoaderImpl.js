// Generated from ScheduleLoaderImpl.pas by pas2js — do not edit by hand; regenerate instead.
/* eslint-disable */
// @ts-nocheck

export default function define($) {
  const U = $.unit("ScheduleLoaderImpl", ["SysUtils", "ScheduleMainFormImpl", "TrancheScheduleImpl", "CommonDecls"]);
  const C = [U];
  U.init(async () => {
  });
  U.func("ShowPaymentForm", async function ShowPaymentForm(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: undefined};
  {
    const $t1 = (await $.mcall((await $.v(C, "TScheduleForm")), "Create", [(await $.v(C, "CommonApplication"))]));
    try {
      await $.stmt($.wcall([$t1], "ShowPaymentSchedule", [], C));
    } finally {
      await $.stmt($.wcall([$t1], "Release", [], C));
    }
  }
  return L0.result;
}, {"params": [], "kind": "procedure", "ptypes": []});
  U.func("ShowTrancheForm", async function ShowTrancheForm(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: undefined};
  {
    const $t2 = (await $.mcall((await $.v(C, "TTrancheScheduleForm")), "Create", [(await $.v(C, "CommonApplication"))]));
    try {
      await $.stmt($.wcall([$t2], "ShowTrancheSchedule", [], C));
    } finally {
      await $.stmt($.wcall([$t2], "Release", [], C));
    }
  }
  return L0.result;
}, {"params": [], "kind": "procedure", "ptypes": []});
  U.func("InitPlugin", async function InitPlugin(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"s": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["s"]);
  L0["spaymentschedule"] = "PAYMENT";
  L0["strancheschedule"] = "TRANCHE";
  if ($.truthy($.eq((await $.call(C, "uppercase", [L0["s"]])), L0["spaymentschedule"]))) {
    await $.stmt($.call(C, "ShowPaymentForm", []));
  }
  if ($.truthy($.eq((await $.call(C, "uppercase", [L0["s"]])), L0["strancheschedule"]))) {
    await $.stmt($.call(C, "ShowTrancheForm", []));
  }
  return L0.result;
}, {"params": ["S"], "kind": "procedure", "ptypes": ["String"]});
  return U;
}
