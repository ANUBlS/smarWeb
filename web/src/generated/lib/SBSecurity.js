// Generated from SBSecurity.pas by pas2js — do not edit by hand; regenerate instead.
/* eslint-disable */
// @ts-nocheck

export default function define($) {
  const U = $.unit("SBSecurity", ["SysUtils", "SBSrvIntf", "Dialogs", "Oracle", "SBCore", "sboapiDataModuleImpl", "SBLogin"]);
  const C = [U];
  U.defClass("EPermissionedDenied", "Exception", {}, {});
  U.init(async () => {
    try { U.const("tgroup", await $.ref_(C, "TUser")); } catch (e) { /* unresolved alias */ }
    U.const("sAccessName_Execute", "Execute");
    U.const("InvalidSid", (-(1)));
    U.const("SMSEC_ERROR_PERMISSION_DENIED", (-(20001)));
    U.const("SMSEC_ERROR_INVALID_ACCESS_SPECIFIER", (-(20002)));
  });
  U.func("Sb_CreateSecurityDescriptor", async function Sb_CreateSecurityDescriptor(Self, p0, p1, p2) {
  const C = $.chain(Self, U);
  const L0 = {"userid": $.copyArg(p0), "groupid": $.copyArg(p1), "typeid": $.copyArg(p2), result: 0};
  await $.fixArgs(L0, ["userid", "groupid", "typeid"]);
  {
    const $t1 = (await $.mv((await $.v(C, "sboapiDataModule")), "SBSecurity"));
    await $.wset([$t1], "Result", (await $.wcall([$t1], "CallIntegerFunction", [(await $.wv([$t1], "sPN_CreateSID", C, false)), [(await $.wv([$t1], "UserID", { get: async () => L0["userid"], set: async (v) => { L0["userid"] = v; }, local: true }, false)), (await $.wv([$t1], "GroupID", { get: async () => L0["groupid"], set: async (v) => { L0["groupid"] = v; }, local: true }, false)), (await $.wv([$t1], "TypeID", { get: async () => L0["typeid"], set: async (v) => { L0["typeid"] = v; }, local: true }, false))]], C)), { get: async () => L0["result"], set: async (v) => { L0["result"] = v; }, local: true });
  }
  return L0.result;
}, {"params": ["UserID", "GroupID", "TypeID"], "kind": "function", "ptypes": ["Integer", "Integer", "Integer"]});
  U.func("Sb_DestroySecurityDescriptor", async function Sb_DestroySecurityDescriptor(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sid": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sid"]);
  {
    const $t2 = (await $.mv((await $.v(C, "sboapiDataModule")), "SBSecurity"));
    await $.stmt((await $.wcall([$t2], "CallProcedure", [(await $.wv([$t2], "sPN_DestroySID", C, false)), [(await $.wv([$t2], "SID", { get: async () => L0["sid"], set: async (v) => { L0["sid"] = v; }, local: true }, false))]], C)));
  }
  return L0.result;
}, {"params": ["SID"], "kind": "procedure", "ptypes": ["TSid"]});
  U.func("Sb_GrantUserAccess", async function Sb_GrantUserAccess(Self, p0, p1, p2) {
  const C = $.chain(Self, U);
  const L0 = {"sid": $.copyArg(p0), "user": $.copyArg(p1), "access": $.copyArg(p2), result: undefined};
  await $.fixArgs(L0, ["sid", "user", "access"]);
  {
    const $t3 = (await $.mv((await $.v(C, "sboapiDataModule")), "SBSecurity"));
    await $.stmt((await $.wcall([$t3], "CallProcedure", [(await $.wv([$t3], "sPN_GrantUserAccess", C, false)), [(await $.wv([$t3], "SID", { get: async () => L0["sid"], set: async (v) => { L0["sid"] = v; }, local: true }, false)), (await $.wv([$t3], "User", { get: async () => L0["user"], set: async (v) => { L0["user"] = v; }, local: true }, false)), (await $.wv([$t3], "Access", { get: async () => L0["access"], set: async (v) => { L0["access"] = v; }, local: true }, false))]], C)));
  }
  return L0.result;
}, {"params": ["SID", "User", "Access"], "kind": "procedure", "ptypes": ["TSid", "TUser", "String"]});
  U.func("Sb_GrantUserAccess", async function Sb_GrantUserAccess(Self, p0, p1, p2) {
  const C = $.chain(Self, U);
  const L0 = {"sid": $.copyArg(p0), "user": $.copyArg(p1), "access": $.copyArg(p2), result: undefined};
  await $.fixArgs(L0, ["sid", "user", "access"]);
  {
    const $t4 = (await $.mv((await $.v(C, "sboapiDataModule")), "SBSecurity"));
    await $.stmt((await $.wcall([$t4], "CallProcedure", [(await $.wv([$t4], "sPN_GrantUserAccess", C, false)), [(await $.wv([$t4], "SID", { get: async () => L0["sid"], set: async (v) => { L0["sid"] = v; }, local: true }, false)), (await $.wv([$t4], "User", { get: async () => L0["user"], set: async (v) => { L0["user"] = v; }, local: true }, false)), (await $.wv([$t4], "Access", { get: async () => L0["access"], set: async (v) => { L0["access"] = v; }, local: true }, false))]], C)));
  }
  return L0.result;
}, {"params": ["SID", "User", "Access"], "kind": "procedure", "ptypes": ["Integer", "TUser", "TAccess"]});
  U.func("Sb_RevokeUserAccess", async function Sb_RevokeUserAccess(Self, p0, p1, p2) {
  const C = $.chain(Self, U);
  const L0 = {"sid": $.copyArg(p0), "user": $.copyArg(p1), "access": $.copyArg(p2), result: undefined};
  await $.fixArgs(L0, ["sid", "user", "access"]);
  {
    const $t5 = (await $.mv((await $.v(C, "sboapiDataModule")), "SBSecurity"));
    try {
      await $.stmt((await $.wcall([$t5], "CallProcedure", [(await $.wv([$t5], "sPN_RevokeUserAccess", C, false)), [(await $.wv([$t5], "SID", { get: async () => L0["sid"], set: async (v) => { L0["sid"] = v; }, local: true }, false)), (await $.wv([$t5], "User", { get: async () => L0["user"], set: async (v) => { L0["user"] = v; }, local: true }, false)), (await $.wv([$t5], "Access", { get: async () => L0["access"], set: async (v) => { L0["access"] = v; }, local: true }, false))]], C)));
    } catch ($t6) {
      $.rethrowControl($t6);
      if ($.excIs($t6, "EOracleError")) {
        L0["e"] = $.exc($t6);
        await $.stmt((await $.wcall([$t5], "Sb_ProcessException", [(await $.wv([$t5], "E", { get: async () => L0["e"], set: async (v) => { L0["e"] = v; }, local: true }, false))], C)));
        throw $t6;
      }
      else { throw $t6; }
    }
  }
  return L0.result;
}, {"params": ["SID", "User", "Access"], "kind": "procedure", "ptypes": ["TSid", "TUser", "String"]});
  U.func("Sb_RevokeUserAccess", async function Sb_RevokeUserAccess(Self, p0, p1, p2) {
  const C = $.chain(Self, U);
  const L0 = {"sid": $.copyArg(p0), "user": $.copyArg(p1), "access": $.copyArg(p2), result: undefined};
  await $.fixArgs(L0, ["sid", "user", "access"]);
  {
    const $t7 = (await $.mv((await $.v(C, "sboapiDataModule")), "SBSecurity"));
    try {
      await $.stmt((await $.wcall([$t7], "CallProcedure", [(await $.wv([$t7], "sPN_RevokeUserAccess", C, false)), [(await $.wv([$t7], "SID", { get: async () => L0["sid"], set: async (v) => { L0["sid"] = v; }, local: true }, false)), (await $.wv([$t7], "User", { get: async () => L0["user"], set: async (v) => { L0["user"] = v; }, local: true }, false)), (await $.wv([$t7], "Access", { get: async () => L0["access"], set: async (v) => { L0["access"] = v; }, local: true }, false))]], C)));
    } catch ($t8) {
      $.rethrowControl($t8);
      if ($.excIs($t8, "EOracleError")) {
        L0["e"] = $.exc($t8);
        await $.stmt((await $.wcall([$t7], "Sb_ProcessException", [(await $.wv([$t7], "E", { get: async () => L0["e"], set: async (v) => { L0["e"] = v; }, local: true }, false))], C)));
        throw $t8;
      }
      else { throw $t8; }
    }
  }
  return L0.result;
}, {"params": ["SID", "User", "Access"], "kind": "procedure", "ptypes": ["TSid", "TUser", "TAccess"]});
  U.func("Sb_AccessCheck", async function Sb_AccessCheck(Self, p0, p1, p2) {
  const C = $.chain(Self, U);
  const L0 = {"clientid": $.copyArg(p0), "sid": $.copyArg(p1), "access": $.copyArg(p2), result: false};
  await $.fixArgs(L0, ["clientid", "sid", "access"]);
  {
    const $t9 = (await $.mv((await $.v(C, "sboapiDataModule")), "SBSecurity"));
    try {
      await $.wset([$t9], "Result", (await $.wcall([$t9], "CallBooleanFunction", [(await $.wv([$t9], "sPN_AccessCheck", C, false)), [(await $.wv([$t9], "Access", { get: async () => L0["access"], set: async (v) => { L0["access"] = v; }, local: true }, false)), (await $.wv([$t9], "ClientID", { get: async () => L0["clientid"], set: async (v) => { L0["clientid"] = v; }, local: true }, false)), (await $.wv([$t9], "SID", { get: async () => L0["sid"], set: async (v) => { L0["sid"] = v; }, local: true }, false))]], C)), { get: async () => L0["result"], set: async (v) => { L0["result"] = v; }, local: true });
    } catch ($t10) {
      $.rethrowControl($t10);
      if ($.excIs($t10, "EOracleError")) {
        L0["e"] = $.exc($t10);
        await $.stmt((await $.wcall([$t9], "Sb_ProcessException", [(await $.wv([$t9], "E", { get: async () => L0["e"], set: async (v) => { L0["e"] = v; }, local: true }, false))], C)));
        throw $t10;
      }
      else { throw $t10; }
    }
  }
  return L0.result;
}, {"params": ["ClientID", "SID", "Access"], "kind": "function", "ptypes": ["Integer", "Integer", "String"]});
  U.func("Sb_GetAccessDescription", async function Sb_GetAccessDescription(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"access": $.copyArg(p0), result: ''};
  await $.fixArgs(L0, ["access"]);
  {
    const $t11 = (await $.mv((await $.v(C, "sboapiDataModule")), "SBSecurity"));
    try {
      await $.wset([$t11], "Result", (await $.wcall([$t11], "CallStringFunction", [(await $.wv([$t11], "sPN_GetAccessDescription", C, false)), [(await $.wv([$t11], "Access", { get: async () => L0["access"], set: async (v) => { L0["access"] = v; }, local: true }, false))]], C)), { get: async () => L0["result"], set: async (v) => { L0["result"] = v; }, local: true });
    } catch ($t12) {
      $.rethrowControl($t12);
      if ($.excIs($t12, "EOracleError")) {
        L0["e"] = $.exc($t12);
        await $.stmt((await $.wcall([$t11], "Sb_ProcessException", [(await $.wv([$t11], "E", { get: async () => L0["e"], set: async (v) => { L0["e"] = v; }, local: true }, false))], C)));
        throw $t12;
      }
      else { throw $t12; }
    }
  }
  return L0.result;
}, {"params": ["Access"], "kind": "function", "ptypes": ["TAccess"]});
  U.func("Sb_GetUserName", async function Sb_GetUserName(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"userid": $.copyArg(p0), result: ''};
  await $.fixArgs(L0, ["userid"]);
  {
    const $t13 = (await $.mv((await $.v(C, "sboapiDataModule")), "SBSecurity"));
    try {
      await $.wset([$t13], "Result", (await $.wcall([$t13], "CallStringFunction", [(await $.wv([$t13], "sPN_GetUserName", C, false)), [(await $.wv([$t13], "UserID", { get: async () => L0["userid"], set: async (v) => { L0["userid"] = v; }, local: true }, false))]], C)), { get: async () => L0["result"], set: async (v) => { L0["result"] = v; }, local: true });
    } catch ($t14) {
      $.rethrowControl($t14);
      if ($.excIs($t14, "EOracleError")) {
        L0["e"] = $.exc($t14);
        await $.stmt((await $.wcall([$t13], "Sb_ProcessException", [(await $.wv([$t13], "E", { get: async () => L0["e"], set: async (v) => { L0["e"] = v; }, local: true }, false))], C)));
        throw $t14;
      }
      else { throw $t14; }
    }
  }
  return L0.result;
}, {"params": ["UserID"], "kind": "function", "ptypes": ["Integer"]});
  U.func("Sb_AddSecurityLink", async function Sb_AddSecurityLink(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sid": $.copyArg(p0), "clientid": $.copyArg(p1), result: 0};
  await $.fixArgs(L0, ["sid", "clientid"]);
  {
    const $t15 = (await $.mv((await $.v(C, "sboapidataModule")), "SBSecurity"));
    try {
      await $.wset([$t15], "Result", (await $.wcall([$t15], "CallIntegerFunction", [(await $.wv([$t15], "sPN_AddSecurityLink", C, false)), [(await $.wv([$t15], "Sid", { get: async () => L0["sid"], set: async (v) => { L0["sid"] = v; }, local: true }, false)), (await $.wv([$t15], "ClientID", { get: async () => L0["clientid"], set: async (v) => { L0["clientid"] = v; }, local: true }, false))]], C)), { get: async () => L0["result"], set: async (v) => { L0["result"] = v; }, local: true });
    } catch ($t16) {
      $.rethrowControl($t16);
      if ($.excIs($t16, "EOracleError")) {
        L0["e"] = $.exc($t16);
        await $.stmt((await $.wcall([$t15], "Sb_ProcessException", [(await $.wv([$t15], "E", { get: async () => L0["e"], set: async (v) => { L0["e"] = v; }, local: true }, false))], C)));
        throw $t16;
      }
      else { throw $t16; }
    }
  }
  return L0.result;
}, {"params": ["Sid", "ClientID"], "kind": "function", "ptypes": ["TSid", "TUser"]});
  U.func("Sb_RemoveSecurityLink", async function Sb_RemoveSecurityLink(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"linkid": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["linkid"]);
  {
    const $t17 = (await $.mv((await $.v(C, "sboapiDataModule")), "SBSecurity"));
    try {
      await $.stmt((await $.wcall([$t17], "CallProcedure", [(await $.wv([$t17], "sPN_RemoveSecurityLink", C, false)), [(await $.wv([$t17], "LinkID", { get: async () => L0["linkid"], set: async (v) => { L0["linkid"] = v; }, local: true }, false))]], C)));
    } catch ($t18) {
      $.rethrowControl($t18);
      if ($.excIs($t18, "EOracleError")) {
        L0["e"] = $.exc($t18);
        await $.stmt((await $.wcall([$t17], "Sb_ProcessException", [(await $.wv([$t17], "E", { get: async () => L0["e"], set: async (v) => { L0["e"] = v; }, local: true }, false))], C)));
        throw $t18;
      }
      else { throw $t18; }
    }
  }
  return L0.result;
}, {"params": ["LinkID"], "kind": "procedure", "ptypes": ["Integer"]});
  U.func("Sb_BuildDefaultSecurity", async function Sb_BuildDefaultSecurity(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sid": $.copyArg(p0), result: false};
  await $.fixArgs(L0, ["sid"]);
  {
    const $t19 = (await $.mv((await $.v(C, "sboapiDataModule")), "SBSecurity"));
    try {
      await $.wset([$t19], "Result", (await $.wcall([$t19], "CallBooleanFunction", [(await $.wv([$t19], "sPN_BuildDefaultSecurity", C, false)), [(await $.wv([$t19], "Sid", { get: async () => L0["sid"], set: async (v) => { L0["sid"] = v; }, local: true }, false))]], C)), { get: async () => L0["result"], set: async (v) => { L0["result"] = v; }, local: true });
    } catch ($t20) {
      $.rethrowControl($t20);
      if ($.excIs($t20, "EOracleError")) {
        L0["e"] = $.exc($t20);
        await $.stmt((await $.wcall([$t19], "Sb_ProcessException", [(await $.wv([$t19], "E", { get: async () => L0["e"], set: async (v) => { L0["e"] = v; }, local: true }, false))], C)));
        throw $t20;
      }
      else { throw $t20; }
    }
  }
  return L0.result;
}, {"params": ["Sid"], "kind": "function", "ptypes": ["TSid"]});
  U.func("Sb_GetUserID", async function Sb_GetUserID(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: 0};
  {
    const $t21 = (await $.mv((await $.v(C, "sboapiDataModule")), "SBSecurity"));
    try {
      await $.wset([$t21], "Result", (await $.wcall([$t21], "CallIntegerFunction", [(await $.wv([$t21], "sPN_GetUserID", C, false)), []], C)), { get: async () => L0["result"], set: async (v) => { L0["result"] = v; }, local: true });
    } catch ($t22) {
      $.rethrowControl($t22);
      if ($.excIs($t22, "EOracleError")) {
        L0["e"] = $.exc($t22);
        await $.stmt((await $.wcall([$t21], "Sb_ProcessException", [(await $.wv([$t21], "E", { get: async () => L0["e"], set: async (v) => { L0["e"] = v; }, local: true }, false))], C)));
        throw $t22;
      }
      else { throw $t22; }
    }
  }
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.func("Sb_GetGroupID", async function Sb_GetGroupID(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: 0};
  {
    const $t23 = (await $.mv((await $.v(C, "sboapiDataModule")), "SBUtil"));
    try {
      await $.wset([$t23], "Result", (await $.wcall([$t23], "CallIntegerFunction", [(await $.wv([$t23], "sPN_GetGroupID", C, false)), []], C)), { get: async () => L0["result"], set: async (v) => { L0["result"] = v; }, local: true });
    } catch ($t24) {
      $.rethrowControl($t24);
      if ($.excIs($t24, "EOracleError")) {
        L0["e"] = $.exc($t24);
        await $.stmt((await $.wcall([$t23], "Sb_ProcessException", [(await $.wv([$t23], "E", { get: async () => L0["e"], set: async (v) => { L0["e"] = v; }, local: true }, false))], C)));
        throw $t24;
      }
      else { throw $t24; }
    }
  }
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.func("Sb_GetTypeID", async function Sb_GetTypeID(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"typename": $.copyArg(p0), result: 0};
  await $.fixArgs(L0, ["typename"]);
  {
    const $t25 = (await $.mv((await $.v(C, "sboapiDataModule")), "SBSecurity"));
    try {
      await $.wset([$t25], "Result", (await $.wcall([$t25], "CallIntegerFunction", [(await $.wv([$t25], "sPN_GetTypeID", C, false)), [(await $.wv([$t25], "TypeName", { get: async () => L0["typename"], set: async (v) => { L0["typename"] = v; }, local: true }, false))]], C)), { get: async () => L0["result"], set: async (v) => { L0["result"] = v; }, local: true });
    } catch ($t26) {
      $.rethrowControl($t26);
      if ($.excIs($t26, "EOracleError")) {
        L0["e"] = $.exc($t26);
        await $.stmt((await $.wcall([$t25], "Sb_ProcessException", [(await $.wv([$t25], "E", { get: async () => L0["e"], set: async (v) => { L0["e"] = v; }, local: true }, false))], C)));
        throw $t26;
      }
      else { throw $t26; }
    }
  }
  return L0.result;
}, {"params": ["TypeName"], "kind": "function", "ptypes": ["String"]});
  U.func("Sb_AddGroup", async function Sb_AddGroup(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"groupname": $.copyArg(p0), "description": $.copyArg(p1), result: 0};
  await $.fixArgs(L0, ["groupname", "description"]);
  {
    const $t27 = (await $.mv((await $.v(C, "sboapiDataModule")), "SBSecurity"));
    try {
      await $.wset([$t27], "Result", (await $.wcall([$t27], "CallIntegerFunction", [(await $.wv([$t27], "sPN_AddGroup", C, false)), [(await $.wv([$t27], "GroupName", { get: async () => L0["groupname"], set: async (v) => { L0["groupname"] = v; }, local: true }, false)), (await $.wv([$t27], "Description", { get: async () => L0["description"], set: async (v) => { L0["description"] = v; }, local: true }, false))]], C)), { get: async () => L0["result"], set: async (v) => { L0["result"] = v; }, local: true });
    } catch ($t28) {
      $.rethrowControl($t28);
      if ($.excIs($t28, "EOracleError")) {
        L0["e"] = $.exc($t28);
        await $.stmt((await $.wcall([$t27], "Sb_ProcessException", [(await $.wv([$t27], "E", { get: async () => L0["e"], set: async (v) => { L0["e"] = v; }, local: true }, false))], C)));
        throw $t28;
      }
      else { throw $t28; }
    }
  }
  return L0.result;
}, {"params": ["GroupName", "Description"], "kind": "function", "ptypes": ["String", "String"]});
  U.func("Sb_EditGroup", async function Sb_EditGroup(Self, p0, p1, p2) {
  const C = $.chain(Self, U);
  const L0 = {"groupid": $.copyArg(p0), "groupname": $.copyArg(p1), "description": $.copyArg(p2), result: undefined};
  await $.fixArgs(L0, ["groupid", "groupname", "description"]);
  {
    const $t29 = (await $.mv((await $.v(C, "sboapiDataModule")), "SBSecurity"));
    try {
      await $.stmt((await $.wcall([$t29], "CallProcedure", [(await $.wv([$t29], "sPN_EditGroup", C, false)), [(await $.wv([$t29], "GroupID", { get: async () => L0["groupid"], set: async (v) => { L0["groupid"] = v; }, local: true }, false)), (await $.wv([$t29], "GroupName", { get: async () => L0["groupname"], set: async (v) => { L0["groupname"] = v; }, local: true }, false)), (await $.wv([$t29], "Description", { get: async () => L0["description"], set: async (v) => { L0["description"] = v; }, local: true }, false))]], C)));
    } catch ($t30) {
      $.rethrowControl($t30);
      if ($.excIs($t30, "EOracleError")) {
        L0["e"] = $.exc($t30);
        await $.stmt((await $.wcall([$t29], "Sb_ProcessException", [(await $.wv([$t29], "E", { get: async () => L0["e"], set: async (v) => { L0["e"] = v; }, local: true }, false))], C)));
        throw $t30;
      }
      else { throw $t30; }
    }
  }
  return L0.result;
}, {"params": ["GroupID", "GroupName", "Description"], "kind": "procedure", "ptypes": ["Integer", "String", "String"]});
  U.func("Sb_DeleteGroup", async function Sb_DeleteGroup(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"groupid": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["groupid"]);
  {
    const $t31 = (await $.mv((await $.v(C, "sboapiDataModule")), "SBSecurity"));
    try {
      await $.stmt((await $.wcall([$t31], "CallProcedure", [(await $.wv([$t31], "sPN_DeleteGroup", C, false)), [(await $.wv([$t31], "GroupID", { get: async () => L0["groupid"], set: async (v) => { L0["groupid"] = v; }, local: true }, false))]], C)));
    } catch ($t32) {
      $.rethrowControl($t32);
      if ($.excIs($t32, "EOracleError")) {
        L0["e"] = $.exc($t32);
        await $.stmt((await $.wcall([$t31], "Sb_ProcessException", [(await $.wv([$t31], "E", { get: async () => L0["e"], set: async (v) => { L0["e"] = v; }, local: true }, false))], C)));
        throw $t32;
      }
      else { throw $t32; }
    }
  }
  return L0.result;
}, {"params": ["GroupID"], "kind": "procedure", "ptypes": ["Integer"]});
  U.func("Sb_AddUser", async function Sb_AddUser(Self, p0, p1, p2, p3, p4, p5, p6, p7, p8) {
  const C = $.chain(Self, U);
  const L0 = {"username": $.copyArg(p0), "description": $.copyArg(p1), "defaultgroupid": $.copyArg(p2), "password": $.copyArg(p3), "createuser": (p4 === undefined ? true : p4), "createrepository": (p5 === undefined ? true : p5), "groupids": (p6 === undefined ? "" : p6), "rightids": (p7 === undefined ? "" : p7), "v_filial": (p8 === undefined ? 0 : p8), result: 0};
  await $.fixArgs(L0, ["username", "description", "defaultgroupid", "password", "createuser", "createrepository", "groupids", "rightids", "v_filial"]);
  {
    const $t33 = (await $.mv((await $.v(C, "sboapiDataModule")), "SBSecurity"));
    try {
      await $.wset([$t33], "Result", (await $.wcall([$t33], "CallIntegerFunction", [(await $.wv([$t33], "sPN_AddUser", C, false)), [(await $.wv([$t33], "Username", { get: async () => L0["username"], set: async (v) => { L0["username"] = v; }, local: true }, false)), (await $.wv([$t33], "Description", { get: async () => L0["description"], set: async (v) => { L0["description"] = v; }, local: true }, false)), (await $.wv([$t33], "DefaultGroupID", { get: async () => L0["defaultgroupid"], set: async (v) => { L0["defaultgroupid"] = v; }, local: true }, false)), (await $.wv([$t33], "Password", { get: async () => L0["password"], set: async (v) => { L0["password"] = v; }, local: true }, false)), (await $.wv([$t33], "CreateUser", { get: async () => L0["createuser"], set: async (v) => { L0["createuser"] = v; }, local: true }, false)), (await $.wv([$t33], "CreateRepository", { get: async () => L0["createrepository"], set: async (v) => { L0["createrepository"] = v; }, local: true }, false)), (await $.wv([$t33], "v_Filial", { get: async () => L0["v_filial"], set: async (v) => { L0["v_filial"] = v; }, local: true }, false))]], C)), { get: async () => L0["result"], set: async (v) => { L0["result"] = v; }, local: true });
    } catch ($t34) {
      $.rethrowControl($t34);
      if ($.excIs($t34, "EOracleError")) {
        L0["e"] = $.exc($t34);
        await $.stmt((await $.wcall([$t33], "Sb_ProcessException", [(await $.wv([$t33], "E", { get: async () => L0["e"], set: async (v) => { L0["e"] = v; }, local: true }, false))], C)));
        throw $t34;
      }
      else { throw $t34; }
    }
  }
  return L0.result;
}, {"params": ["Username", "Description", "DefaultGroupID", "Password", "CreateUser", "CreateRepository", "GroupIDs", "RightIDs", "v_Filial"], "kind": "function", "ptypes": ["String", "String", "Integer", "String", "Boolean", "Boolean", "String", "String", "integer"]});
  U.func("Sb_EditUser", async function Sb_EditUser(Self, p0, p1, p2, p3) {
  const C = $.chain(Self, U);
  const L0 = {"userid": $.copyArg(p0), "username": $.copyArg(p1), "description": $.copyArg(p2), "v_filial": $.copyArg(p3), result: undefined};
  await $.fixArgs(L0, ["userid", "username", "description", "v_filial"]);
  {
    const $t35 = (await $.mv((await $.v(C, "sboapiDataModule")), "SBSecurity"));
    try {
      await $.stmt((await $.wcall([$t35], "CallProcedure", [(await $.wv([$t35], "sPN_EditUser", C, false)), [(await $.wv([$t35], "UserID", { get: async () => L0["userid"], set: async (v) => { L0["userid"] = v; }, local: true }, false)), (await $.wv([$t35], "Username", { get: async () => L0["username"], set: async (v) => { L0["username"] = v; }, local: true }, false)), (await $.wv([$t35], "Description", { get: async () => L0["description"], set: async (v) => { L0["description"] = v; }, local: true }, false)), (await $.wv([$t35], "v_Filial", { get: async () => L0["v_filial"], set: async (v) => { L0["v_filial"] = v; }, local: true }, false))]], C)));
    } catch ($t36) {
      $.rethrowControl($t36);
      if ($.excIs($t36, "EOracleError")) {
        L0["e"] = $.exc($t36);
        await $.stmt((await $.wcall([$t35], "Sb_ProcessException", [(await $.wv([$t35], "E", { get: async () => L0["e"], set: async (v) => { L0["e"] = v; }, local: true }, false))], C)));
        throw $t36;
      }
      else { throw $t36; }
    }
  }
  return L0.result;
}, {"params": ["UserID", "Username", "Description", "v_Filial"], "kind": "procedure", "ptypes": ["Integer", "String", "String", "integer"]});
  U.func("Sb_DeleteUser", async function Sb_DeleteUser(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"userid": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["userid"]);
  {
    const $t37 = (await $.mv((await $.v(C, "sboapiDataModule")), "SBSecurity"));
    try {
      await $.stmt((await $.wcall([$t37], "CallProcedure", [(await $.wv([$t37], "sPN_DeleteUser", C, false)), [(await $.wv([$t37], "UserID", { get: async () => L0["userid"], set: async (v) => { L0["userid"] = v; }, local: true }, false))]], C)));
    } catch ($t38) {
      $.rethrowControl($t38);
      if ($.excIs($t38, "EOracleError")) {
        L0["e"] = $.exc($t38);
        await $.stmt((await $.wcall([$t37], "Sb_ProcessException", [(await $.wv([$t37], "E", { get: async () => L0["e"], set: async (v) => { L0["e"] = v; }, local: true }, false))], C)));
        throw $t38;
      }
      else { throw $t38; }
    }
  }
  return L0.result;
}, {"params": ["UserID"], "kind": "procedure", "ptypes": ["Integer"]});
  U.func("Sb_UserSetPassword", async function Sb_UserSetPassword(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"userid": $.copyArg(p0), "newpassword": $.copyArg(p1), result: undefined};
  await $.fixArgs(L0, ["userid", "newpassword"]);
  {
    const $t39 = (await $.mv((await $.v(C, "sboapiDataModule")), "SBSecurity"));
    try {
      await $.stmt((await $.wcall([$t39], "CallProcedure", [(await $.wv([$t39], "sPN_UserSetPassword", C, false)), [(await $.wv([$t39], "UserID", { get: async () => L0["userid"], set: async (v) => { L0["userid"] = v; }, local: true }, false)), (await $.wv([$t39], "NewPassword", { get: async () => L0["newpassword"], set: async (v) => { L0["newpassword"] = v; }, local: true }, false))]], C)));
    } catch ($t40) {
      $.rethrowControl($t40);
      if ($.excIs($t40, "EOracleError")) {
        L0["e"] = $.exc($t40);
        await $.stmt((await $.wcall([$t39], "Sb_ProcessException", [(await $.wv([$t39], "E", { get: async () => L0["e"], set: async (v) => { L0["e"] = v; }, local: true }, false))], C)));
        throw $t40;
      }
      else { throw $t40; }
    }
  }
  return L0.result;
}, {"params": ["UserID", "NewPassword"], "kind": "procedure", "ptypes": ["Integer", "String"]});
  U.func("Sb_GroupMembershipArray", async function Sb_GroupMembershipArray(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"clientid": $.copyArg(p0), "groupnames": $.copyArg(p1), result: undefined};
  await $.fixArgs(L0, ["clientid", "groupnames"]);
  {
    const $t41 = (await $.mv((await $.v(C, "sboapiDataModule")), "SBSecurity"));
    try {
      await $.stmt((await $.wcall([$t41], "CallProcedure", [(await $.wv([$t41], "sPN_GroupMembershipArray", C, false)), [(await $.wv([$t41], "ClientID", { get: async () => L0["clientid"], set: async (v) => { L0["clientid"] = v; }, local: true }, false)), (await $.wv([$t41], "GroupNames", { get: async () => L0["groupnames"], set: async (v) => { L0["groupnames"] = v; }, local: true }, false))]], C)));
    } catch ($t42) {
      $.rethrowControl($t42);
      if ($.excIs($t42, "EOracleError")) {
        L0["e"] = $.exc($t42);
        await $.stmt((await $.wcall([$t41], "Sb_ProcessException", [(await $.wv([$t41], "E", { get: async () => L0["e"], set: async (v) => { L0["e"] = v; }, local: true }, false))], C)));
        throw $t42;
      }
      else { throw $t42; }
    }
  }
  return L0.result;
}, {"params": ["ClientID", "GroupNames"], "kind": "procedure", "ptypes": ["Integer", "String"]});
  U.func("Sb_AssignGroupRoles", async function Sb_AssignGroupRoles(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"groupid": $.copyArg(p0), "roles": $.copyArg(p1), result: undefined};
  await $.fixArgs(L0, ["groupid", "roles"]);
  {
    const $t43 = (await $.mv((await $.v(C, "sboapiDataModule")), "SBSecurity"));
    try {
      await $.stmt((await $.wcall([$t43], "CallProcedure", [(await $.wv([$t43], "sPN_Group_Roles_Array", C, false)), [(await $.wv([$t43], "GroupID", { get: async () => L0["groupid"], set: async (v) => { L0["groupid"] = v; }, local: true }, false)), (await $.wv([$t43], "Roles", { get: async () => L0["roles"], set: async (v) => { L0["roles"] = v; }, local: true }, false))]], C)));
    } catch ($t44) {
      $.rethrowControl($t44);
      if ($.excIs($t44, "EOracleError")) {
        L0["e"] = $.exc($t44);
        await $.stmt((await $.wcall([$t43], "Sb_ProcessException", [(await $.wv([$t43], "E", { get: async () => L0["e"], set: async (v) => { L0["e"] = v; }, local: true }, false))], C)));
        throw $t44;
      }
      else { throw $t44; }
    }
  }
  return L0.result;
}, {"params": ["GroupID", "Roles"], "kind": "procedure", "ptypes": ["Integer", "String"]});
  U.func("Sb_SidRightsArray", async function Sb_SidRightsArray(Self, p0, p1, p2) {
  const C = $.chain(Self, U);
  const L0 = {"sid": $.copyArg(p0), "clientid": $.copyArg(p1), "arr": $.copyArg(p2), result: undefined};
  await $.fixArgs(L0, ["sid", "clientid", "arr"]);
  {
    const $t45 = (await $.mv((await $.v(C, "sboapiDataModule")), "SBSecurity"));
    try {
      await $.stmt((await $.wcall([$t45], "CallProcedure", [(await $.wv([$t45], "sPN_SidRightsArray", C, false)), [(await $.wv([$t45], "Sid", { get: async () => L0["sid"], set: async (v) => { L0["sid"] = v; }, local: true }, false)), (await $.wv([$t45], "ClientID", { get: async () => L0["clientid"], set: async (v) => { L0["clientid"] = v; }, local: true }, false)), (await $.wv([$t45], "Arr", { get: async () => L0["arr"], set: async (v) => { L0["arr"] = v; }, local: true }, false))]], C)));
    } catch ($t46) {
      $.rethrowControl($t46);
      if ($.excIs($t46, "EOracleError")) {
        L0["e"] = $.exc($t46);
        await $.stmt((await $.wcall([$t45], "Sb_ProcessException", [(await $.wv([$t45], "E", { get: async () => L0["e"], set: async (v) => { L0["e"] = v; }, local: true }, false))], C)));
        throw $t46;
      }
      else { throw $t46; }
    }
  }
  return L0.result;
}, {"params": ["Sid", "ClientID", "Arr"], "kind": "procedure", "ptypes": ["Integer", "Integer", "String"]});
  U.func("Sb_GetModuleSID", async function Sb_GetModuleSID(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"modulename": $.copyArg(p0), result: 0};
  await $.fixArgs(L0, ["modulename"]);
  {
    const $t47 = (await $.mv((await $.v(C, "sboapiDataModule")), "SBSecurity"));
    try {
      await $.wset([$t47], "Result", (await $.wcall([$t47], "CallIntegerFunction", [(await $.wv([$t47], "sPN_ModuleGetSid", C, false)), [(await $.wv([$t47], "ModuleName", { get: async () => L0["modulename"], set: async (v) => { L0["modulename"] = v; }, local: true }, false))]], C)), { get: async () => L0["result"], set: async (v) => { L0["result"] = v; }, local: true });
    } catch ($t48) {
      $.rethrowControl($t48);
      if ($.excIs($t48, "EOracleError")) {
        L0["e"] = $.exc($t48);
        await $.stmt((await $.wcall([$t47], "Sb_ProcessException", [(await $.wv([$t47], "E", { get: async () => L0["e"], set: async (v) => { L0["e"] = v; }, local: true }, false))], C)));
        throw $t48;
      }
      else { throw $t48; }
    }
  }
  return L0.result;
}, {"params": ["ModuleName"], "kind": "function", "ptypes": ["String"]});
  U.func("Sb_CheckModuleAccess", async function Sb_CheckModuleAccess(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"modulename": $.copyArg(p0), "accessname": (p1 === undefined ? (await $.v(C, "sAccessName_Execute")) : p1), result: false, "sid": 0};
  await $.fixArgs(L0, ["modulename", "accessname"]);
  L0["sid"] = (await $.call(C, "Sb_GetModuleSid", [L0["modulename"]]));
  L0["result"] = $.eq(L0["sid"], (await $.v(C, "InvalidSid")));
  if ($.truthy($.not(L0["result"]))) {
    L0["result"] = (await $.call(C, "Sb_AccessCheck", [(await $.call(C, "SB_GetLoginUserID", [])), L0["sid"], L0["accessname"]]));
  }
  return L0.result;
}, {"params": ["ModuleName", "AccessName"], "kind": "function", "ptypes": ["String", "String"]});
  U.func("Sb_AddModule", async function Sb_AddModule(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"modulename": $.copyArg(p0), "description": $.copyArg(p1), result: 0};
  await $.fixArgs(L0, ["modulename", "description"]);
  {
    const $t49 = (await $.mv((await $.v(C, "sboapiDataModule")), "SBModules"));
    try {
      await $.wset([$t49], "Result", (await $.wcall([$t49], "CallIntegerFunction", [(await $.wv([$t49], "sPN_ModuleAdd", C, false)), [(await $.wv([$t49], "ModuleName", { get: async () => L0["modulename"], set: async (v) => { L0["modulename"] = v; }, local: true }, false)), (await $.wv([$t49], "Description", { get: async () => L0["description"], set: async (v) => { L0["description"] = v; }, local: true }, false))]], C)), { get: async () => L0["result"], set: async (v) => { L0["result"] = v; }, local: true });
    } catch ($t50) {
      $.rethrowControl($t50);
      if ($.excIs($t50, "EOracleError")) {
        L0["e"] = $.exc($t50);
        await $.stmt((await $.wcall([$t49], "Sb_ProcessException", [(await $.wv([$t49], "E", { get: async () => L0["e"], set: async (v) => { L0["e"] = v; }, local: true }, false))], C)));
        throw $t50;
      }
      else { throw $t50; }
    }
  }
  return L0.result;
}, {"params": ["ModuleName", "Description"], "kind": "function", "ptypes": ["String", "String"]});
  U.func("Sb_DropModule", async function Sb_DropModule(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"moduleid": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["moduleid"]);
  {
    const $t51 = (await $.mv((await $.v(C, "sboapiDataModule")), "SBModules"));
    try {
      await $.stmt((await $.wcall([$t51], "CallProcedure", [(await $.wv([$t51], "sPN_ModuleDrop", C, false)), [(await $.wv([$t51], "ModuleID", { get: async () => L0["moduleid"], set: async (v) => { L0["moduleid"] = v; }, local: true }, false))]], C)));
    } catch ($t52) {
      $.rethrowControl($t52);
      if ($.excIs($t52, "EOracleError")) {
        L0["e"] = $.exc($t52);
        await $.stmt((await $.wcall([$t51], "Sb_ProcessException", [(await $.wv([$t51], "E", { get: async () => L0["e"], set: async (v) => { L0["e"] = v; }, local: true }, false))], C)));
        throw $t52;
      }
      else { throw $t52; }
    }
  }
  return L0.result;
}, {"params": ["ModuleID"], "kind": "procedure", "ptypes": ["Integer"]});
  U.func("Sb_UserReCreateRepository", async function Sb_UserReCreateRepository(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"userid": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["userid"]);
  {
    const $t53 = (await $.mv((await $.v(C, "sboapiDataModule")), "SBSecurity"));
    try {
      await $.stmt((await $.wcall([$t53], "CallProcedure", [(await $.wv([$t53], "sPN_UserReCreateRepository", C, false)), [(await $.wv([$t53], "UserID", { get: async () => L0["userid"], set: async (v) => { L0["userid"] = v; }, local: true }, false))]], C)));
    } catch ($t54) {
      $.rethrowControl($t54);
      if ($.excIs($t54, "EOracleError")) {
        L0["e"] = $.exc($t54);
        await $.stmt((await $.wcall([$t53], "Sb_ProcessException", [(await $.wv([$t53], "E", { get: async () => L0["e"], set: async (v) => { L0["e"] = v; }, local: true }, false))], C)));
        throw $t54;
      }
      else { throw $t54; }
    }
  }
  return L0.result;
}, {"params": ["UserID"], "kind": "procedure", "ptypes": ["Integer"]});
  return U;
}
