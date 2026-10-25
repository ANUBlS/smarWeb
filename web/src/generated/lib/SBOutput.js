// Generated from SBOutput.pas by pas2js — do not edit by hand; regenerate instead.
/* eslint-disable */
// @ts-nocheck

export default function define($) {
  const U = $.unit("SBOutput", ["sboapiDataModuleImpl", "Oracle", "SBCore"]);
  const C = [U];
  U.init(async () => {
  });
  U.func("Sb_LogGetLine", async function Sb_LogGetLine(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"line": $.asRef(p0), result: false, "status": 0};
  L0["result"] = (await $.mv((await $.mv((await $.v(C, "sboapiDataModule")), "SBSession")), "Connected"));
  if ($.truthy(L0["result"])) {
    try {
      await $.stmt((await $.mcall((await $.mv((await $.mv((await $.v(C, "sboapiDataModule")), "SBSession")), "DBMS_Output")), "Get_Line", [(await L0["line"].get()), L0["status"]])));
      L0["result"] = $.eq(L0["status"], (await $.v(C, "glSuccess")));
    } catch ($t1) {
      $.rethrowControl($t1);
      if ($.excIs($t1, "EOracleError")) {
        L0["e"] = $.exc($t1);
        await $.stmt((await $.call(C, "Sb_ProcessException", [L0["e"]])));
      }
      else { throw $t1; }
    }
  }
  return L0.result;
}, {"params": ["Line"], "kind": "function", "ptypes": ["String"]});
  U.func("Sb_LogEnable", async function Sb_LogEnable(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: undefined};
  await $.mcall((await $.mv((await $.mv((await $.v(C, "sboapiDataModule")), "SBSession")), "DBMS_Output")), "Enable", []);
  return L0.result;
}, {"params": [], "kind": "procedure", "ptypes": []});
  U.func("Sb_LogDisable", async function Sb_LogDisable(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: undefined};
  await $.mcall((await $.mv((await $.mv((await $.v(C, "sboapiDataModule")), "SBSession")), "DBMS_Output")), "Disable", []);
  return L0.result;
}, {"params": [], "kind": "procedure", "ptypes": []});
  U.func("Sb_LogPutLine", async function Sb_LogPutLine(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"line": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["line"]);
  await $.stmt((await $.mcall((await $.mv((await $.mv((await $.v(C, "sboapiDataModule")), "SBSession")), "DBMS_Output")), "Put_Line", [L0["line"]])));
  return L0.result;
}, {"params": ["Line"], "kind": "procedure", "ptypes": ["String"]});
  return U;
}
