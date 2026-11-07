// Generated from BriefcaseQrepDataModuleImpl.pas by pas2js — do not edit by hand; regenerate instead.
/* eslint-disable */
// @ts-nocheck

export default function define($) {
  const U = $.unit("BriefcaseQrepDataModuleImpl", ["Windows", "Messages", "SysUtils", "Classes", "Graphics", "Controls", "Forms", "Dialogs", "Db", "OracleData", "CMOracleAPIDataModuleImpl"]);
  const C = [U];
  U.defClass("TBriefcaseQRepDataMod", "TDataModule", {"exportdataset": {"name": "ExportDataSet", "type": "TOracleDataSet"}}, {});
  U.init(async () => {
    U.var_("BriefcaseQRepDataMod", null, "TBriefcaseQRepDataMod");
  });
  U.method("TBriefcaseQRepDataMod", "DataModuleCreate", async function DataModuleCreate(Self, p0) {
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
      if ($.truthy($.eq((await $.mv((await $.idx((await $.v(C, "Components")), [L0["i"]])), "Tag")), 1))) {
        if ($.truthy($.not((await $.mv(((await $.idx((await $.v(C, "Components")), [L0["i"]]))), "Active"))))) {
          await $.mcall((await $.idx((await $.v(C, "Components")), [L0["i"]])), "Open", []);
        }
      }
      await $.tick();
    }
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  return U;
}
