// Generated from DMautoImpl.pas by pas2js — do not edit by hand; regenerate instead.
/* eslint-disable */
// @ts-nocheck

export default function define($) {
  const U = $.unit("DMautoImpl", ["SysUtils", "Classes", "DB", "OracleData"]);
  const C = [U];
  U.defClass("TDMauto", "TDataModule", {}, {});
  U.init(async () => {
    U.var_("DMauto", null, "TDMauto");
  });
  U.method("TDMauto", "ODSMainAfterPost", async function ODSMainAfterPost(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"dataset": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["dataset"]);
  await $.mcall(L0["dataset"], "RefreshRecord", []);
  return L0.result;
}, {"params": ["DataSet"], "kind": "procedure", "ptypes": ["TDataSet"]});
  return U;
}
