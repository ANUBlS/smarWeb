// Generated from admLoader.pas by pas2js — do not edit by hand; regenerate instead.
/* eslint-disable */
// @ts-nocheck

export default function define($) {
  const U = $.unit("admLoader", ["admMainFormImpl", "CommonDecls", "LogReportImpl"]);
  const C = [U];
  U.init(async () => {
  });
  U.func("ShowAdministrationMain", async function ShowAdministrationMain(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: undefined};
  {
    const $t1 = (await $.mcall((await $.v(C, "TfrmMain")), "Create", [(await $.v(C, "CommonApplication"))]));
    try {
      await $.stmt($.wcall([$t1], "ShowModal", [], C));
    } finally {
      await $.stmt($.wcall([$t1], "Release", [], C));
    }
  }
  return L0.result;
}, {"params": [], "kind": "procedure", "ptypes": []});
  U.func("InitPlugin", async function InitPlugin(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"s": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["s"]);
  L0["sadminmain"] = "MAIN";
  if ($.truthy($.eq(L0["s"], L0["sadminmain"]))) {
    await $.stmt($.call(C, "ShowAdministrationMain", []));
  }
  if ($.truthy($.eq(L0["s"], "LOGREP"))) {
    {
      const $t2 = (await $.mcall((await $.v(C, "TFrmLogReport")), "Create", [(await $.v(C, "CommonApplication"))]));
      try {
        await $.stmt($.wcall([$t2], "ShowModal", [], C));
      } finally {
        await $.stmt($.wcall([$t2], "Release", [], C));
      }
    }
  }
  return L0.result;
}, {"params": ["S"], "kind": "procedure", "ptypes": ["String"]});
  return U;
}
