// Generated from UntProlongationDataModule.pas by pas2js — do not edit by hand; regenerate instead.
/* eslint-disable */
// @ts-nocheck

export default function define($) {
  const U = $.unit("UntProlongationDataModule", ["Windows", "Messages", "SysUtils", "Classes", "Graphics", "Controls", "Forms", "Dialogs", "Db", "OracleData", "Oracle", "sboapiDataModuleImpl"]);
  const C = [U];
  U.defClass("TDataModuleProlongation", "TDataModule", {"prolongationpackage": {"name": "ProlongationPackage", "type": "TOraclePackage"}, "datasrcprolongations": {"name": "DataSrcProlongations", "type": "TDataSource"}, "prolongations": {"name": "Prolongations", "type": "TOracleDataSet"}}, {});
  U.init(async () => {
    U.var_("DataModuleProlongation", null, "TDataModuleProlongation");
  });
  U.method("TDataModuleProlongation", "DataModuleDestroy", async function DataModuleDestroy(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mcall((await $.v(C, "Prolongations")), "Close", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  return U;
}
