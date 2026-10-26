// Generated from NewDepositsSSBWRSetupLoader.pas by pas2js — do not edit by hand; regenerate instead.
/* eslint-disable */
// @ts-nocheck

export default function define($) {
  const U = $.unit("NewDepositsSSBWRSetupLoader", ["SysUtils", "Windows", "NewCommonDeclsImpl", "NewDepositsSBWRBookmarksTuning"]);
  const C = [U];
  U.init(async () => {
  });
  U.func("shSBWRBookmarkSetup", async function shSBWRBookmarkSetup(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: undefined};
  {
    const $t1 = (await $.mcall((await $.v(C, "TNewDepositsSBWRBookmarkSetup")), "Create", [(await $.v(C, "CommonApplication"))]));
    try {
      await $.stmt($.wcall([$t1], "ShowModal", [], C));
    } finally {
      await $.stmt($.wcall([$t1], "Release", [], C));
    }
  }
  return L0.result;
}, {"params": [], "kind": "procedure", "ptypes": []});
  U.func("exportproc", async function exportproc(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"s": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["s"]);
  L0["cs_sbwrbookmarksetup"] = "showSBWRBookmarkSetup";
  L0["cs_agreeform"] = "showPrintContract";
  if ($.truthy($.eq(L0["s"], L0["cs_sbwrbookmarksetup"]))) {
    await $.stmt($.call(C, "shSBWRBookmarkSetup", []));
  }
  return L0.result;
}, {"params": ["S"], "kind": "procedure", "ptypes": ["String"]});
  return U;
}
