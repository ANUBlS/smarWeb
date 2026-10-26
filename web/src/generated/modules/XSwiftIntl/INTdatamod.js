// Generated from INTdatamod.pas by pas2js — do not edit by hand; regenerate instead.
/* eslint-disable */
// @ts-nocheck

export default function define($) {
  const U = $.unit("INTdatamod", ["SysUtils", "Classes", "sboapiDataModuleImpl", "SBTranslateProc", "DB", "OracleData"]);
  const C = [U];
  U.defClass("TDATAMODUL", "TDataModule", {"dt103": {"name": "dt103", "type": "TOracleDataSet"}, "ds103": {"name": "ds103", "type": "TDataSource"}}, {});
  U.init(async () => {
    U.var_("DATAMODUL", null, "TDATAMODUL");
  });
  U.method("TDATAMODUL", "DataModuleCreate", async function DataModuleCreate(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mcall((await $.v(C, "dt103")), "Open", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  return U;
}
