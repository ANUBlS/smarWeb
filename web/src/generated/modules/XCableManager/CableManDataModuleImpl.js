// Generated from CableManDataModuleImpl.pas by pas2js — do not edit by hand; regenerate instead.
/* eslint-disable */
// @ts-nocheck

export default function define($) {
  const U = $.unit("CableManDataModuleImpl", ["Windows", "Messages", "SysUtils", "Classes", "Graphics", "Controls", "Forms", "Dialogs", "Db", "OracleData", "Oracle", "sboapidatamoduleimpl"]);
  const C = [U];
  U.defClass("TDataModCable", "TDataModule", {"odsabonents": {"name": "odsAbonents", "type": "TOracleDataSet"}, "dsabonents": {"name": "dsAbonents", "type": "TDataSource"}, "cable": {"name": "CABLE", "type": "TOraclePackage"}, "odsengineers": {"name": "odsEngineers", "type": "TOracleDataSet"}, "odsstatuses": {"name": "odsStatuses", "type": "TOracleDataSet"}, "odsdoctypes": {"name": "odsDocTypes", "type": "TOracleDataSet"}, "dsdoctypes": {"name": "dsDocTypes", "type": "TDataSource"}, "dsstatuses": {"name": "dsStatuses", "type": "TDataSource"}, "dsengineers": {"name": "dsEngineers", "type": "TDataSource"}, "odscontacts": {"name": "odsContacts", "type": "TOracleDataSet"}, "dscontacts": {"name": "dsContacts", "type": "TDataSource"}, "odsservs": {"name": "odsServs", "type": "TOracleDataSet"}, "dsservs": {"name": "dsServs", "type": "TDataSource"}, "dsvalutes": {"name": "dsValutes", "type": "TDataSource"}, "odspacks": {"name": "odsPacks", "type": "TOracleDataSet"}, "dspacks": {"name": "dsPacks", "type": "TDataSource"}, "odsvalutes": {"name": "odsValutes", "type": "TOracleDataSet"}, "odsservices": {"name": "odsServices", "type": "TOracleDataSet"}, "dsservices": {"name": "dsServices", "type": "TDataSource"}, "odsaccs": {"name": "odsAccs", "type": "TOracleDataSet"}, "dsaccs": {"name": "dsAccs", "type": "TDataSource"}, "ords_fullcontracts": {"name": "OrDS_fullContracts", "type": "TOracleDataSet"}, "ds_fullcontracts": {"name": "DS_fullContracts", "type": "TDataSource"}}, {});
  U.init(async () => {
    U.var_("DataModCable", null, "TDataModCable");
  });
  U.method("TDataModCable", "DataModuleCreate", async function DataModuleCreate(Self, p0) {
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
      if ($.truthy((await $.and_(($.is_((await $.idx((await $.v(C, "components")), [L0["i"]])), "toracledataset")), async () => ($.eq((await $.mv((await $.idx((await $.v(C, "components")), [L0["i"]])), "tag")), 1)))))) {
        await $.mcall((await $.idx((await $.v(C, "components")), [L0["i"]])), "open", []);
      }
      await $.tick();
    }
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  return U;
}
