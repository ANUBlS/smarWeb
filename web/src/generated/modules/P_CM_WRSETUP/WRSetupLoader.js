// Generated from WRSetupLoader.pas by pas2js — do not edit by hand; regenerate instead.
/* eslint-disable */
// @ts-nocheck

export default function define($) {
  const U = $.unit("WRSetupLoader", ["CommonDecls", "WRBookmarksTuning", "WRTemplatesTuning", "TemplateAddEditUnt", "BookmarkAddEditunt", "Messages", "Dialogs"]);
  const C = [U];
  U.init(async () => {
    U.var_("meh", 0, "integer");
  });
  U.func("ShowWRTemplateSetup", async function ShowWRTemplateSetup(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: undefined};
  {
    const $t1 = (await $.mcall((await $.v(C, "TWRTemplateSetup")), "Create", [(await $.v(C, "CommonApplication"))]));
    try {
      await $.stmt($.wcall([$t1], "ShowModal", [], C));
    } finally {
      await $.stmt($.wcall([$t1], "Release", [], C));
    }
  }
  return L0.result;
}, {"params": [], "kind": "procedure", "ptypes": []});
  U.func("ShowWRBookmarkSetup", async function ShowWRBookmarkSetup(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: undefined};
  {
    const $t2 = (await $.mcall((await $.v(C, "TWRBookmarkSetup")), "Create", [(await $.v(C, "CommonApplication"))]));
    try {
      await $.stmt($.wcall([$t2], "Showmodal", [], C));
    } finally {
      await $.stmt($.wcall([$t2], "Release", [], C));
    }
  }
  return L0.result;
}, {"params": [], "kind": "procedure", "ptypes": []});
  U.func("InitPlugin", async function InitPlugin(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"s": $.copyArg(p0), "mehid": $.copyArg(p1), result: undefined};
  await $.fixArgs(L0, ["s", "mehid"]);
  L0["swrtemplatesetup"] = "WRTemplateSetup";
  L0["swrbookmarksetup"] = "WRBookmarkSetup";
  await $.set(C, "meh", L0["mehid"]);
  if ($.truthy($.eq(L0["s"], L0["swrtemplatesetup"]))) {
    await $.stmt($.call(C, "ShowWRTemplateSetup", []));
  }
  if ($.truthy($.eq(L0["s"], "WRBookmarkSetup"))) {
    await $.stmt($.call(C, "ShowWRbookmarkSetup", []));
  }
  return L0.result;
}, {"params": ["S", "mehid"], "kind": "procedure", "ptypes": ["String", "integer"]});
  return U;
}
