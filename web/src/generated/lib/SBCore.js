// Generated from SBCore.pas by pas2js — do not edit by hand; regenerate instead.
/* eslint-disable */
// @ts-nocheck

export default function define($) {
  const U = $.unit("SBCore", ["Bde", "Math", "Oracle", "SysUtils", "sboapiDataModuleImpl", "SBSrvIntf", "SBMessage"]);
  const C = [U];
  U.defClass("ESmartError", "Exception", {"ferrorcode": {"name": "FErrorCode", "type": "Integer"}, "foriginalmessage": {"name": "FOriginalMessage", "type": "String"}}, {"errorcode": {"name": "ErrorCode", "read": "FErrorCode"}, "originalmessage": {"name": "OriginalMessage", "read": "FOriginalMessage"}});
  U.defClass("ESessionKilled", "ESmartError", {}, {});
  U.init(async () => {
    U.const("NullDate", 0.0);
  });
  U.method("ESmartError", "Create", async function Create(Self, p0, p1, p2) {
  const C = $.chain(Self, U);
  const L0 = {"errcode": $.copyArg(p0), "message": $.copyArg(p1), "originalmessage": $.copyArg(p2), result: undefined};
  await $.fixArgs(L0, ["errcode", "message", "originalmessage"]);
  await $.set(C, "FErrorCode", L0["errcode"]);
  await $.set(C, "FOriginalMessage", L0["originalmessage"]);
  await $.inherited(Self, "ESmartError", "Create", [L0["message"]], arguments);
  return L0.result;
}, {"params": ["ErrCode", "Message", "OriginalMessage"], "kind": "constructor", "ptypes": ["Integer", "String", "String"]});
  U.method("ESmartError", "Create", async function Create(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"message": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["message"]);
  await $.inherited(Self, "ESmartError", "Create", [L0["message"]], arguments);
  return L0.result;
}, {"params": ["Message"], "kind": "constructor", "ptypes": ["String"]});
  U.func("SB_GetDatabaseHandle", async function SB_GetDatabaseHandle(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: null};
  L0["result"] = null;
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.func("Sb_GetSystemDate", async function Sb_GetSystemDate(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: 0};
  {
    const $t1 = (await $.v(C, "sboapiDataModule"));
    await $.wset([$t1], "Result", (await $.mcall((await $.wv([$t1], "SBOperationDay", C, false)), "CallDateFunction", [(await $.wv([$t1], "sPN_GetDate", C, false)), []])), { get: async () => L0["result"], set: async (v) => { L0["result"] = v; }, local: true });
  }
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.func("Sb_RoundCurrency", async function Sb_RoundCurrency(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), "decimals": $.copyArg(p1), result: 0, "p": 0};
  await $.fixArgs(L0, ["value", "decimals"]);
  L0["p"] = (await $.call(C, "Power", [10, L0["decimals"]]));
  L0["result"] = $.add((await $.call(C, "Trunc", [L0["value"]])), $.fdiv((await $.call(C, "Trunc", [$.mul((await $.call(C, "Frac", [L0["value"]])), L0["p"])])), L0["p"]));
  if ($.truthy($.ge((await $.call(C, "Abs", [$.mul($.mul(($.sub((await $.call(C, "Abs", [L0["result"]])), (await $.call(C, "Abs", [L0["value"]])))), L0["p"]), 10)])), 5))) {
    L0["result"] = $.add(L0["result"], $.mul(($.fdiv(1, L0["p"])), ($.fdiv(L0["result"], (await $.call(C, "Abs", [L0["result"]]))))));
  }
  return L0.result;
}, {"params": ["Value", "Decimals"], "kind": "function", "ptypes": ["Currency", "Integer"]});
  U.func("Sb_Commit", async function Sb_Commit(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: undefined};
  {
    const $t2 = (await $.mv((await $.v(C, "sboapiDataModule")), "SBSession"));
    await $.stmt($.wcall([$t2], "Commit", [], C));
  }
  return L0.result;
}, {"params": [], "kind": "procedure", "ptypes": []});
  U.func("Sb_Rollback", async function Sb_Rollback(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: undefined};
  {
    const $t3 = (await $.mv((await $.v(C, "sboapiDataModule")), "SBSession"));
    await $.stmt($.wcall([$t3], "Rollback", [], C));
  }
  return L0.result;
}, {"params": [], "kind": "procedure", "ptypes": []});
  U.func("Sb_CheckFatalError", async function Sb_CheckFatalError(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"errorcode": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["errorcode"]);
  if ($.truthy($.eq(L0["errorcode"], (await $.v(C, "SError_Disconnected"))))) {
    {
      const $t4 = (await $.mv((await $.v(C, "sboapiDataModule")), "SBSession"));
      await $.wset([$t4], "Connected", (await $.wv([$t4], "False", C, false)), C);
    }
    throw $.raise((await $.mcall((await $.v(C, "ESessionKilled")), "Create", ["Your session has been killed"])));
  }
  return L0.result;
}, {"params": ["ErrorCode"], "kind": "procedure", "ptypes": ["Integer"]});
  U.func("Sb_ProcessException", async function Sb_ProcessException(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"e": $.copyArg(p0), result: undefined, "newmessage": ''};
  await $.fixArgs(L0, ["e"]);
  await $.stmt((await $.call(C, "Sb_CheckFatalError", [(-((await $.mv(L0["e"], "ErrorCode"))))])));
  if ($.truthy($.not((await $.call(C, "Sb_GetError", [(-((await $.mv(L0["e"], "ErrorCode")))), $.ref(async () => L0["newmessage"], async ($t5) => { L0["newmessage"] = $t5; })]))))) {
    L0["newmessage"] = (await $.mv(L0["e"], "Message"));
  }
  throw $.raise((await $.mcall((await $.v(C, "ESmartError")), "Create", [(await $.mv(L0["e"], "ErrorCode")), L0["newmessage"], (await $.mv(L0["e"], "Message"))])));
  return L0.result;
}, {"params": ["E"], "kind": "procedure", "ptypes": ["EOracleError"]});
  return U;
}
