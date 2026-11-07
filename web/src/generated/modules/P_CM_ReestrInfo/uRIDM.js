// Generated from uRIDM.pas by pas2js — do not edit by hand; regenerate instead.
/* eslint-disable */
// @ts-nocheck

export default function define($) {
  const U = $.unit("uRIDM", ["Windows", "Messages", "SysUtils", "Classes", "Graphics", "Controls", "Forms", "Dialogs", "Db", "OracleData", "SboApiDataModuleImpl"]);
  const C = [U];
  U.defClass("TRIDataMod", "TDataModule", {"odsbanks": {"name": "ODSBanks", "type": "TOracleDataSet"}, "banks": {"name": "Banks", "type": "TDataSource"}, "odscredits": {"name": "ODSCredits", "type": "TOracleDataSet"}, "credits": {"name": "Credits", "type": "TDataSource"}, "odsrep": {"name": "ODSRep", "type": "TOracleDataSet"}, "odsnextval": {"name": "ODSNextVal", "type": "TOracleDataSet"}, "odsupdnextval": {"name": "ODSUpdNextVal", "type": "TOracleDataSet"}}, {});
  U.init(async () => {
    U.var_("RIDataMod", null, "TRIDataMod");
  });
  U.method("TRIDataMod", "DataModuleCreate", async function DataModuleCreate(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "i": 0};
  await $.fixArgs(L0, ["sender"]);
  { const $t1 = $.sub((await $.v(C, "componentcount")), 1);
    L0["i"] = 0;
    let $t2 = true;
    for (;;) {
      if (!$t2) { L0["i"] = $.succ(L0["i"], 1); }
      $t2 = false;
      if (!($.ord(L0["i"]) <= $.ord($t1))) break;
      if ($.truthy((await $.and_(($.is_((await $.idx((await $.v(C, "components")), [L0["i"]])), "TORacleDataSet")), async () => ($.eq((await $.mv((await $.idx((await $.v(C, "Components")), [L0["i"]])), "Tag")), 0)))))) {
        await $.mcall((await $.idx((await $.v(C, "components")), [L0["i"]])), "Open", []);
      }
      await $.tick();
    }
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  return U;
}
