// Generated from SytemManager.pas by pas2js — do not edit by hand; regenerate instead.
/* eslint-disable */
// @ts-nocheck

export default function define($) {
  const U = $.unit("SytemManager", ["SysUtils", "Windows", "Forms", "Dialogs", "ShellAPI", "CommonDecls", "AboutProgramImpl"]);
  const C = [U];
  U.init(async () => {
    U.const("sTurnOffSystem", "TURNOFFSYSTEM");
    U.const("sRefreshData", "REFRESHDATA");
    U.const("sAboutProgram", "ABOUTPROGRAMM");
    U.const("sShowHelp", "SHOWHELP");
  });
  U.func("ShowAbout", async function ShowAbout(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: undefined};
  {
    const $t1 = (await $.mcall((await $.v(C, "TfrmAboutProgram")), "Create", [(await $.v(C, "CommonApplication"))]));
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
  const L0 = {"p": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["p"]);
  if ($.truthy($.eq((await $.call(C, "UpperCase", [L0["p"]])), (await $.v(C, "sTurnOffSystem"))))) {
    await $.mcall((await $.mv((await $.v(C, "CommonApplication")), "MainForm")), "Close", []);
  } else {
    if ($.truthy($.eq((await $.call(C, "UpperCase", [L0["p"]])), (await $.v(C, "sRefreshData"))))) {
      await $.stmt((await $.call(C, "SafeRefresh", [true, (await $.v(C, "rmLocateAfterRefresh"))])));
    } else {
      if ($.truthy($.eq((await $.call(C, "UpperCase", [L0["p"]])), (await $.v(C, "sAboutProgram"))))) {
        await $.stmt($.call(C, "ShowAbout", []));
      }
    }
  }
  if ($.truthy($.eq((await $.call(C, "UpperCase", [L0["p"]])), (await $.v(C, "sShowHelp"))))) {
    await $.stmt((await $.call(C, "ShellExecuteA", [(await $.mv((await $.v(C, "CommonApplication")), "Handle")), "open", "CreditsMgr.chm", null, null, (await $.v(C, "SW_SHOWNORMAL"))])));
  }
  return L0.result;
}, {"params": ["P"], "kind": "procedure", "ptypes": ["String"]});
  return U;
}
