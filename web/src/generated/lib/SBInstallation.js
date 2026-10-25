// Generated from SBInstallation.pas by pas2js — do not edit by hand; regenerate instead.
/* eslint-disable */
// @ts-nocheck

export default function define($) {
  const U = $.unit("SBInstallation", ["Classes", "sboapiDataModuleImpl", "SBSrvIntf"]);
  const C = [U];
  U.init(async () => {
    U.const("opcExecSQL", 1);
    U.const("opcExecTask", 2);
  });
  U.func("Sb_GetTaskID", async function Sb_GetTaskID(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"taskname": $.copyArg(p0), result: 0};
  await $.fixArgs(L0, ["taskname"]);
  {
    const $t1 = (await $.mv((await $.v(C, "sboapiDataModule")), "SBInstallation"));
    await $.wset([$t1], "Result", (await $.wcall([$t1], "CallIntegerFunction", [(await $.wv([$t1], "sPN_GetTaskID", C, false)), [(await $.wv([$t1], "TaskName", { get: async () => L0["taskname"], set: async (v) => { L0["taskname"] = v; }, local: true }, false))]], C)), { get: async () => L0["result"], set: async (v) => { L0["result"] = v; }, local: true });
  }
  return L0.result;
}, {"params": ["TaskName"], "kind": "function", "ptypes": ["String"]});
  U.func("Sb_AddTaskAction", async function Sb_AddTaskAction(Self, p0, p1, p2, p3, p4) {
  const C = $.chain(Self, U);
  const L0 = {"taskid": $.copyArg(p0), "taskname": $.copyArg(p1), "metrica": $.copyArg(p2), "code": $.copyArg(p3), "operationcode": $.copyArg(p4), result: 0};
  await $.fixArgs(L0, ["taskid", "taskname", "metrica", "code", "operationcode"]);
  {
    const $t2 = (await $.mv((await $.v(C, "sboapiDataModule")), "SBInstallation"));
    await $.wset([$t2], "Result", (await $.wcall([$t2], "CallIntegerFunction", [(await $.wv([$t2], "sPN_AddTaskQuery", C, false)), [(await $.wv([$t2], "TaskID", { get: async () => L0["taskid"], set: async (v) => { L0["taskid"] = v; }, local: true }, false)), (await $.wv([$t2], "TaskName", { get: async () => L0["taskname"], set: async (v) => { L0["taskname"] = v; }, local: true }, false)), (await $.wv([$t2], "Metrica", { get: async () => L0["metrica"], set: async (v) => { L0["metrica"] = v; }, local: true }, false)), (await $.wv([$t2], "Code", { get: async () => L0["code"], set: async (v) => { L0["code"] = v; }, local: true }, false)), (await $.wv([$t2], "OperationCode", { get: async () => L0["operationcode"], set: async (v) => { L0["operationcode"] = v; }, local: true }, false))]], C)), { get: async () => L0["result"], set: async (v) => { L0["result"] = v; }, local: true });
  }
  return L0.result;
}, {"params": ["TaskID", "TaskName", "Metrica", "Code", "OperationCode"], "kind": "function", "ptypes": ["Integer", "String", "Integer", "String", "TOperationCode"]});
  U.func("Sb_UpdateTaskAction", async function Sb_UpdateTaskAction(Self, p0, p1, p2, p3, p4) {
  const C = $.chain(Self, U);
  const L0 = {"queryid": $.copyArg(p0), "taskname": $.copyArg(p1), "metrica": $.copyArg(p2), "code": $.copyArg(p3), "operationcode": $.copyArg(p4), result: undefined};
  await $.fixArgs(L0, ["queryid", "taskname", "metrica", "code", "operationcode"]);
  {
    const $t3 = (await $.mv((await $.v(C, "sboapiDataModule")), "SBInstallation"));
    await $.stmt((await $.wcall([$t3], "CallProcedure", [(await $.wv([$t3], "sPN_UpdateTaskQuery", C, false)), [(await $.wv([$t3], "QueryID", { get: async () => L0["queryid"], set: async (v) => { L0["queryid"] = v; }, local: true }, false)), (await $.wv([$t3], "TaskName", { get: async () => L0["taskname"], set: async (v) => { L0["taskname"] = v; }, local: true }, false)), (await $.wv([$t3], "Metrica", { get: async () => L0["metrica"], set: async (v) => { L0["metrica"] = v; }, local: true }, false)), (await $.wv([$t3], "Code", { get: async () => L0["code"], set: async (v) => { L0["code"] = v; }, local: true }, false)), (await $.wv([$t3], "OperationCode", { get: async () => L0["operationcode"], set: async (v) => { L0["operationcode"] = v; }, local: true }, false))]], C)));
  }
  return L0.result;
}, {"params": ["QueryID", "TaskName", "Metrica", "Code", "OperationCode"], "kind": "procedure", "ptypes": ["Integer", "String", "Integer", "String", "TOperationCode"]});
  U.func("Sb_DeleteTaskAction", async function Sb_DeleteTaskAction(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"queryid": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["queryid"]);
  {
    const $t4 = (await $.mv((await $.v(C, "sboapiDataModule")), "SBInstallation"));
    await $.stmt((await $.wcall([$t4], "CallProcedure", [(await $.wv([$t4], "sPN_DeleteTaskQuery", C, false)), [(await $.wv([$t4], "QueryID", { get: async () => L0["queryid"], set: async (v) => { L0["queryid"] = v; }, local: true }, false))]], C)));
  }
  return L0.result;
}, {"params": ["QueryID"], "kind": "procedure", "ptypes": ["Integer"]});
  U.func("Sb_ExecuteTaskAction", async function Sb_ExecuteTaskAction(Self, p0, p1, p2) {
  const C = $.chain(Self, U);
  const L0 = {"queryid": $.copyArg(p0), "params": $.copyArg(p1), "ignoreerrors": $.copyArg(p2), result: undefined};
  await $.fixArgs(L0, ["queryid", "params", "ignoreerrors"]);
  {
    const $t5 = (await $.mv((await $.v(C, "sboapiDataModule")), "SBInstallation"));
    await $.stmt((await $.wcall([$t5], "CallProcedure", [(await $.wv([$t5], "sPN_ExecuteTaskQuery", C, false)), [(await $.wv([$t5], "QueryID", { get: async () => L0["queryid"], set: async (v) => { L0["queryid"] = v; }, local: true }, false)), (await $.mv((await $.wv([$t5], "Params", { get: async () => L0["params"], set: async (v) => { L0["params"] = v; }, local: true }, false)), "CommaText")), (await $.wv([$t5], "IgnoreErrors", { get: async () => L0["ignoreerrors"], set: async (v) => { L0["ignoreerrors"] = v; }, local: true }, false))]], C)));
  }
  return L0.result;
}, {"params": ["QueryID", "Params", "IgnoreErrors"], "kind": "procedure", "ptypes": ["Integer", "TStrings", "Boolean"]});
  U.func("Sb_DeleteTaskActions", async function Sb_DeleteTaskActions(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"taskid": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["taskid"]);
  {
    const $t6 = (await $.mv((await $.v(C, "sboapiDataModule")), "SBInstallation"));
    await $.stmt((await $.wcall([$t6], "CallProcedure", [(await $.wv([$t6], "sPN_DeleteTaskActions", C, false)), [(await $.wv([$t6], "TaskID", { get: async () => L0["taskid"], set: async (v) => { L0["taskid"] = v; }, local: true }, false))]], C)));
  }
  return L0.result;
}, {"params": ["TaskID"], "kind": "procedure", "ptypes": ["Integer"]});
  return U;
}
