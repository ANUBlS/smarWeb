// Generated from ReportLoader.pas by pas2js — do not edit by hand; regenerate instead.
/* eslint-disable */
// @ts-nocheck

export default function define($) {
  const U = $.unit("ReportLoader", ["MISImpl", "PeriodReport", "CommonDecls"]);
  const C = [U];
  U.init(async () => {
  });
  U.func("ShowMisReport", async function ShowMisReport(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: undefined};
  {
    const $t1 = (await $.mcall((await $.v(C, "TMISForm")), "Create", [(await $.v(C, "CommonApplication"))]));
    try {
      await $.stmt($.wcall([$t1], "ShowModal", [], C));
    } finally {
      await $.stmt($.wcall([$t1], "Release", [], C));
    }
  }
  return L0.result;
}, {"params": [], "kind": "procedure", "ptypes": []});
  U.func("ShowPeriodReport", async function ShowPeriodReport(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: undefined};
  {
    const $t2 = (await $.mcall((await $.v(C, "TPeriodReportForm")), "Create", [(await $.v(C, "CommonApplication"))]));
    try {
      await $.stmt($.wcall([$t2], "ShowMe", [], C));
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
  L0["smisreport"] = "MIS";
  L0["speriodreport"] = "PERIODREPORT";
  if ($.truthy($.eq(L0["s"], L0["smisreport"]))) {
    await $.stmt($.call(C, "ShowMisReport", []));
  } else {
    if ($.truthy($.eq(L0["s"], L0["speriodreport"]))) {
      await $.stmt($.call(C, "ShowPeriodReport", []));
    }
  }
  return L0.result;
}, {"params": ["S"], "kind": "procedure", "ptypes": ["String"]});
  return U;
}
