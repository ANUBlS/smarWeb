// Generated from DataModEnforcement.pas by pas2js — do not edit by hand; regenerate instead.
/* eslint-disable */
// @ts-nocheck

export default function define($) {
  const U = $.unit("DataModEnforcement", ["SysUtils", "Classes", "DB", "OracleData", "sboapiDataModuleImpl"]);
  const C = [U];
  U.defClass("TDataModuleEnforcement", "TDataModule", {"odsenforcement": {"name": "ODSEnforcement", "type": "TOracleDataSet"}, "dsenforcement": {"name": "DSEnforcement", "type": "TDataSource"}}, {});
  U.init(async () => {
    U.var_("DataModuleEnforcement", null, "TDataModuleEnforcement");
  });
  U.method("TDataModuleEnforcement", "DataModuleCreate", async function DataModuleCreate(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mcall((await $.v(C, "ODSEnforcement")), "Open", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  return U;
}
