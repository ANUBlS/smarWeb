// Generated from SBOracleLogOn.pas by pas2js — do not edit by hand; regenerate instead.
/* eslint-disable */
// @ts-nocheck

export default function define($) {
  const U = $.unit("SBOracleLogOn", ["Windows", "Messages", "SysUtils", "Classes", "Graphics", "Controls", "Forms", "Dialogs", "Db", "OraVariables", "Registry", "UnitChangePasswordForm", "Oracle", "DesignIntf", "DesignEditors", "UnitSBOraLogOn"]);
  const C = [U];
  U.const("caNormal", 0);
  U.const("caSYSDBA", 1);
  U.const("caSYSOPER", 2);
  U.const("arSuccess", 0);
  U.const("arError", 1);
  U.const("arCancel", 2);
  U.defClass("TOCILibError", "Exception", {}, {});
  U.defClass("TOCIInitializeError", "Exception", {}, {});
  U.defClass("TSBOracleLogOn", "TComponent", {"fserver": {"name": "FServer", "type": "String"}, "fname": {"name": "FName", "type": "String"}, "fretries": {"name": "FRetries", "type": "Integer"}, "foldpassword": {"name": "FOldPassword", "type": "String"}, "fnewpassword": {"name": "FNewPassword", "type": "String"}, "fsession": {"name": "FSession", "type": "TOracleSession"}, "fcaption": {"name": "FCaption", "type": "String"}, "hdll": {"name": "hDll", "type": "THandle"}, "logondatabase": {"name": "LogonDatabase", "type": "String"}, "logonusername": {"name": "LogonUsername", "type": "String"}, "logonpassword": {"name": "LogonPassword", "type": "String"}, "myenvhp": {"name": "myenvhp", "type": "pOCIEnv"}, "mysrvhp": {"name": "mysrvhp", "type": "pOCIServer"}, "dberrhp": {"name": "dberrhp", "type": "pOCIError"}, "myusrhp": {"name": "myusrhp", "type": "pOCISession"}, "mysvchp": {"name": "mysvchp", "type": "pOCISvcCtx"}, "ocienvcreate": {"name": "OCIEnvCreate", "type": "TOCIEnvCreate"}, "ociinitialize": {"name": "OCIInitialize", "type": "TOCIInitialize"}, "ocienvinit": {"name": "OCIEnvInit", "type": "TOCIEnvInit"}, "ocihandlealloc": {"name": "OCIHandleAlloc", "type": "TOCIHandleAlloc"}, "ociserverattach": {"name": "OCIServerAttach", "type": "TOCIServerAttach"}, "ociattrset": {"name": "OCIAttrSet", "type": "TOCIAttrSet"}, "ocisessionbegin": {"name": "OCISessionBegin", "type": "TOCISessionBegin"}, "ocierrorget": {"name": "OCIErrorGet", "type": "TOCIErrorGet"}, "ocipasswordchange": {"name": "OCIPasswordChange", "type": "TOCIPasswordChange"}, "ocisessionend": {"name": "OCISessionEnd", "type": "TOCISessionEnd"}, "ociserverdetach": {"name": "OCIServerDetach", "type": "TOCIServerDetach"}, "ocihandlefree": {"name": "OCIHandleFree", "type": "TOCIHandleFree"}}, {"session": {"name": "Session", "read": "FSession", "write": "SetOracleSession"}, "retries": {"name": "Retries", "read": "FRetries", "write": "FRetries"}, "caption": {"name": "Caption", "read": "GetCaption", "write": "SetCaption"}});
  U.init(async () => {
    U.const("sOraErrSuccessWithInfo", "Oracle error: OCI success with info.");
    U.const("sOraErrNeedData", "Oracle error: OCI need data.");
    U.const("sOraErrNoData", "Oracle error: OCI no data.");
    U.const("sOraErrInvalidHandle", "Oracle error: OCI invalid handle.");
    U.const("sOraErrStillExecute", "Oracle error: OCI still execute.");
    U.const("sOraErrUNKNOWN", "UNKNOWN ORACLE ERROR!");
    U.const("sOraErrLoadLibrary", "Error load OCI library \"%s\"!");
    U.const("sOraErrBadOCIVersion", "Bad OCI version [%s].");
    U.const("sOraErrOCIVersionInfoAbsent", "Absent information about version of OCI library");
    U.const("sOraErrOCINotInstalled", "OCI not properly istalled on this machine");
    U.const("sOraErrCannotGetFunctions", "Error in initialization OCI libriary: Cannot get next functions: %s");
    U.const("sOraErrLogin", "Cannot connect to server '%s '");
    U.const("sOraErrDatabaseNotActive", "Database is not active !");
  });
  U.func("Register", async function Register(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: undefined};
  await $.stmt((await $.call(C, "RegisterComponents", ["Smart", [(await $.v(C, "TSBOracleLogOn"))]])));
  return L0.result;
}, {"params": [], "kind": "procedure", "ptypes": []});
  U.method("TSBOracleLogOn", "SetCaption", async function SetCaption(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "FCaption", L0["value"]);
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["String"]});
  U.method("TSBOracleLogOn", "GetCaption", async function GetCaption(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: ''};
  L0["result"] = (await $.v(C, "FCaption"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TSBOracleLogOn", "SetOracleSession", async function SetOracleSession(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"ovalue": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["ovalue"]);
  await $.set(C, "FSession", L0["ovalue"]);
  {
    const $t1 = L0["ovalue"];
    await $.wset([$t1], "FServer", (await $.wv([$t1], "LogonDatabase", C, false)), C);
    await $.wset([$t1], "FName", (await $.wv([$t1], "LogonUsername", C, false)), C);
    await $.wset([$t1], "FOldPassword", (await $.wv([$t1], "LogonPassword", C, false)), C);
  }
  return L0.result;
}, {"params": ["OValue"], "kind": "procedure", "ptypes": ["TOracleSession"]});
  U.method("TSBOracleLogOn", "TestError", async function TestError(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"where": $.copyArg(p0), "ex": $.copyArg(p1), result: null, "errcode": null, "errbuf": $.sarr()};
  await $.fixArgs(L0, ["where", "ex"]);
  L0["result"] = L0["ex"];
  try {
    { const $t3 = L0["ex"];
      if ($.eq($t3, (await $.v(C, "OCI_SUCCESS")))) {
        return L0.result;
      }
      else if ($.eq($t3, (await $.v(C, "OCI_SUCCESS_WITH_INFO")))) {
        throw $.raise((await $.mcall((await $.v(C, "EDatabaseError")), "Create", [(await $.v(C, "sOraErrSuccessWithInfo"))])));
      }
      else if ($.eq($t3, (await $.v(C, "OCI_NEED_DATA")))) {
        throw $.raise((await $.mcall((await $.v(C, "EDatabaseError")), "Create", [(await $.v(C, "sOraErrNeedData"))])));
      }
      else if ($.eq($t3, (await $.v(C, "OCI_NO_DATA")))) {
        throw $.raise((await $.mcall((await $.v(C, "EDatabaseError")), "Create", [(await $.v(C, "sOraErrNoData"))])));
      }
      else if ($.eq($t3, (await $.v(C, "OCI_ERROR")))) {
        await $.stmt((await $.call(C, "OCIErrorGet", [(await $.v(C, "dberrhp")), 1, null, L0["errcode"], L0["errbuf"], (await $.call(C, "sizeof", [L0["errbuf"]])), (await $.v(C, "OCI_HTYPE_ERROR"))])));
        throw $.raise((await $.mcall((await $.v(C, "EDatabaseError")), "Create", [$.add($.add($.add("Oracle error #", (await $.call(C, "inttostr", [L0["errcode"]]))), ": "), (await $.call(C, "strpas", [L0["errbuf"]])))])));
      }
      else if ($.eq($t3, (await $.v(C, "OCI_INVALID_HANDLE")))) {
        throw $.raise((await $.mcall((await $.v(C, "EDatabaseError")), "Create", [$.add(L0["where"], (await $.v(C, "sOraErrInvalidHandle")))])));
      }
      else if ($.eq($t3, (await $.v(C, "OCI_STILL_EXECUTING")))) {
        throw $.raise((await $.mcall((await $.v(C, "EDatabaseError")), "Create", [(await $.v(C, "sOraErrStillExecute"))])));
      }
      else {
        throw $.raise((await $.mcall((await $.v(C, "EDatabaseError")), "Create", [(await $.v(C, "sOraErrUNKNOWN"))])));
      }
    }
  } catch ($t2) {
    $.rethrowControl($t2);
    if ($.excIs($t2, "Exception")) {
      L0["e"] = $.exc($t2);
      await $.stmt((await $.call(C, "MessageDlg", [$.add($.add("px2", L0["where"]), (await $.mv(L0["e"], "Message"))), (await $.v(C, "mtError")), [(await $.v(C, "mbOK"))], 0])));
    }
    else { throw $t2; }
  }
  return L0.result;
}, {"params": ["where", "ex"], "kind": "function", "ptypes": ["String", "sword"]});
  U.method("TSBOracleLogOn", "InitOCI", async function InitOCI(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"libaddrss": $.copyArg(p0), result: false};
  await $.fixArgs(L0, ["libaddrss"]);
  L0["result"] = false;
  if ($.truthy($.not((await $.call(C, "FileExists", [L0["libaddrss"]]))))) {
    return L0.result;
  } else {
    L0["result"] = true;
  }
  await $.set(C, "hDll", (await $.call(C, "LoadLibrary", [(await $.call(C, "PChar", [L0["libaddrss"]]))])));
  await $.set(C, "OCIEnvCreate", (await $.call(C, "GetProcAddress", [(await $.v(C, "hDll")), "OCIEnvCreate"])));
  await $.set(C, "OCIInitialize", (await $.call(C, "GetProcAddress", [(await $.v(C, "hDll")), "OCIInitialize"])));
  await $.set(C, "OCIEnvInit", (await $.call(C, "GetProcAddress", [(await $.v(C, "hDll")), "OCIEnvInit"])));
  await $.set(C, "OCIHandleAlloc", (await $.call(C, "GetProcAddress", [(await $.v(C, "hDll")), "OCIHandleAlloc"])));
  await $.set(C, "OCIServerAttach", (await $.call(C, "GetProcAddress", [(await $.v(C, "hDll")), "OCIServerAttach"])));
  await $.set(C, "OCIAttrSet", (await $.call(C, "GetProcAddress", [(await $.v(C, "hDll")), "OCIAttrSet"])));
  await $.set(C, "OCISessionBegin", (await $.call(C, "GetProcAddress", [(await $.v(C, "hDll")), "OCISessionBegin"])));
  await $.set(C, "OCIErrorGet", (await $.call(C, "GetProcAddress", [(await $.v(C, "hDll")), "OCIErrorGet"])));
  await $.set(C, "OCIPasswordChange", (await $.call(C, "GetProcAddress", [(await $.v(C, "hDll")), "OCIPasswordChange"])));
  await $.set(C, "OCISessionEnd", (await $.call(C, "GetProcAddress", [(await $.v(C, "hDll")), "OCISessionEnd"])));
  await $.set(C, "OCIServerDetach", (await $.call(C, "GetProcAddress", [(await $.v(C, "hDll")), "OCIServerDetach"])));
  await $.set(C, "OCIHandleFree", (await $.call(C, "GetProcAddress", [(await $.v(C, "hDll")), "OCIHandleFree"])));
  if ($.truthy($.eq((await $.ref_(C, "OCIEnvCreate")), null))) {
    await $.stmt((await $.call(C, "TestError", ["OCIInitialize ", (await $.call(C, "OCIInitialize", [(await $.v(C, "OCI_DEFAULT")), null, null, null, null]))])));
    await $.stmt((await $.call(C, "TestError", ["OCIEnvInit ", (await $.call(C, "OCIEnvInit", [(await $.v(C, "myenvhp")), (await $.v(C, "OCI_DEFAULT")), 0, null]))])));
  } else {
    await $.stmt((await $.call(C, "TestError", ["OCIEnvCreate", (await $.call(C, "OCIEnvCreate", [(await $.v(C, "myenvhp")), (await $.v(C, "OCI_DEFAULT")), null, null, null, null, 0, null]))])));
  }
  await $.stmt((await $.call(C, "TestError", ["OCIHandleAlloc ", (await $.call(C, "OCIHandleAlloc", [(await $.v(C, "myenvhp")), (await $.v(C, "mysrvhp")), (await $.v(C, "OCI_HTYPE_SERVER")), 0, null]))])));
  await $.stmt((await $.call(C, "TestError", ["OCIHandleAlloc ", (await $.call(C, "OCIHandleAlloc", [(await $.v(C, "myenvhp")), (await $.v(C, "dberrhp")), (await $.v(C, "OCI_HTYPE_ERROR")), 0, null]))])));
  await $.stmt((await $.call(C, "TestError", ["OCIHandleAlloc ", (await $.call(C, "OCIHandleAlloc", [(await $.v(C, "myenvhp")), (await $.v(C, "mysvchp")), (await $.v(C, "OCI_HTYPE_SVCCTX")), 0, null]))])));
  return L0.result;
}, {"params": ["libaddrss"], "kind": "function", "ptypes": ["String"]});
  U.method("TSBOracleLogOn", "ChaingePassword", async function ChaingePassword(Self, p0, p1, p2, p3, p4) {
  const C = $.chain(Self, U);
  const L0 = {"server": $.copyArg(p0), "usern": $.copyArg(p1), "oldpass": $.copyArg(p2), "newpass": $.copyArg(p3), "chngstatus": (p4 === undefined ? false : p4), result: false, "pserver": $.sarr(), "pname": $.sarr(), "poldpass": $.sarr(), "pnewpass": $.sarr(), "connas": [], "fconnectas": null};
  await $.fixArgs(L0, ["server", "usern", "oldpass", "newpass", "chngstatus"]);
  L0["result"] = false;
  { const $t4 = await $.iset(L0["connas"], [(await $.v(C, "caNormal"))], (await $.v(C, "OCI_DEFAULT"))); if ($t4 !== undefined) { L0["connas"] = $t4; } }
  { const $t5 = await $.iset(L0["connas"], [(await $.v(C, "caSYSDBA"))], (await $.v(C, "OCI_SYSDBA"))); if ($t5 !== undefined) { L0["connas"] = $t5; } }
  { const $t6 = await $.iset(L0["connas"], [(await $.v(C, "caSYSOPER"))], (await $.v(C, "OCI_SYSOPER"))); if ($t6 !== undefined) { L0["connas"] = $t6; } }
  L0["fconnectas"] = (await $.v(C, "caNormal"));
  await $.stmt((await $.call(C, "strpcopy", [L0["pserver"], L0["server"]])));
  await $.stmt((await $.call(C, "strpcopy", [L0["pname"], L0["usern"]])));
  await $.stmt((await $.call(C, "strpcopy", [L0["poldpass"], L0["oldpass"]])));
  await $.stmt((await $.call(C, "strpcopy", [L0["pnewpass"], L0["newpass"]])));
  await $.stmt((await $.call(C, "OCIServerAttach", [(await $.v(C, "mysrvhp")), (await $.v(C, "dberrhp")), L0["pserver"], (await $.call(C, "strlen", [L0["pserver"]])), (await $.v(C, "OCI_DEFAULT"))])));
  await $.stmt((await $.call(C, "OCIAttrSet", [(await $.v(C, "mysvchp")), (await $.v(C, "OCI_HTYPE_SVCCTX")), (await $.v(C, "mysrvhp")), 0, (await $.v(C, "OCI_ATTR_SERVER")), (await $.v(C, "dberrhp"))])));
  await $.stmt((await $.call(C, "OCIHandleAlloc", [(await $.v(C, "myenvhp")), (await $.v(C, "myusrhp")), (await $.v(C, "OCI_HTYPE_SESSION")), 0, null])));
  await $.stmt((await $.call(C, "TestError", ["OCIAttrSet ", (await $.call(C, "OCIAttrSet", [(await $.v(C, "myusrhp")), (await $.v(C, "OCI_HTYPE_SESSION")), L0["pname"], (await $.call(C, "strlen", [L0["pname"]])), (await $.v(C, "OCI_ATTR_USERNAME")), (await $.v(C, "dberrhp"))]))])));
  await $.stmt((await $.call(C, "TestError", ["OCIAttrSet ", (await $.call(C, "OCIAttrSet", [(await $.v(C, "myusrhp")), (await $.v(C, "OCI_HTYPE_SESSION")), L0["poldpass"], (await $.call(C, "strlen", [L0["poldpass"]])), (await $.v(C, "OCI_ATTR_PASSWORD")), (await $.v(C, "dberrhp"))]))])));
  await $.stmt((await $.call(C, "OCISessionBegin", [(await $.v(C, "mysvchp")), (await $.v(C, "dberrhp")), (await $.v(C, "myusrhp")), (await $.v(C, "OCI_CRED_RDBMS")), (await $.idx(L0["connas"], [L0["fconnectas"]]))])));
  await $.stmt((await $.call(C, "TestError", ["OCIAttrSet ", (await $.call(C, "OCIAttrSet", [(await $.v(C, "mysvchp")), (await $.v(C, "OCI_HTYPE_SVCCTX")), (await $.v(C, "myusrhp")), 0, (await $.v(C, "OCI_ATTR_SESSION")), (await $.v(C, "dberrhp"))]))])));
  if ($.truthy(L0["chngstatus"])) {
    await $.stmt((await $.call(C, "TestError", ["OCIPasswordChange ", (await $.call(C, "OCIPasswordChange", [(await $.v(C, "mysvchp")), (await $.v(C, "dberrhp")), L0["pname"], (await $.call(C, "strlen", [L0["pname"]])), L0["poldpass"], (await $.call(C, "strlen", [L0["poldpass"]])), L0["pnewpass"], (await $.call(C, "strlen", [L0["pnewpass"]])), (await $.v(C, "OCI_DEFAULT"))]))])));
  }
  L0["result"] = true;
  return L0.result;
}, {"params": ["server", "usern", "oldpass", "newpass", "chngstatus"], "kind": "function", "ptypes": ["String", "String", "String", "String", "boolean"]});
  U.func("getOCILibrary", async function getOCILibrary(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"libpath": $.asRef(p0), result: false, "reg": null, "ora_home": ''};
  L0["result"] = false;
  L0["reg"] = (await $.mv((await $.v(C, "TRegistry")), "Create"));
  await $.mset(L0["reg"], "Access", (await $.v(C, "KEY_READ")));
  try {
    await $.mset(L0["reg"], "RootKey", (await $.v(C, "HKEY_LOCAL_MACHINE")));
    if ($.truthy((await $.mcall(L0["reg"], "OpenKey", ["\\SOFTWARE\\ORACLE\\KEY_OraDb10g_home1", false])))) {
      L0["ora_home"] = (await $.mcall(L0["reg"], "ReadString", ["ORACLE_HOME"]));
    }
  } finally {
    await $.mcall(L0["reg"], "CloseKey", []);
    await $.mcall(L0["reg"], "Free", []);
  }
  if ($.truthy($.gt((await $.call(C, "Length", [L0["ora_home"]])), 0))) {
    await L0["libpath"].set($.add(L0["ora_home"], "\\bin\\oci.dll"));
    L0["result"] = true;
  }
  return L0.result;
}, {"params": ["libpath"], "kind": "function", "ptypes": ["String"]});
  U.func("GeneratePassword", async function GeneratePassword(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: ''};
  await $.fixArgs(L0, ["value"]);
  L0["result"] = "";
  try {
    L0["result"] = L0["value"];
  } finally {
  }
  return L0.result;
}, {"params": ["value"], "kind": "function", "ptypes": ["String"]});
  U.method("TSBOracleLogOn", "PasswordChangeExecute", async function PasswordChangeExecute(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"newpassword": $.asRef(p0), result: false};
  L0["result"] = false;
  try {
    {
      const $t8 = (await $.mcall((await $.v(C, "TfmPassChange")), "Create", [Self]));
      await $.wset([$t8], "oldpass", (await $.wv([$t8], "LogonPassword", C, false)), C);
      if ($.truthy($.eq((await $.wv([$t8], "ShowModal", C, false)), (await $.wv([$t8], "mrOk", C, false))))) {
        await $.wset([$t8], "FNewPassword", (await $.wcall([$t8], "GeneratePassword", [(await $.wv([$t8], "newpass", C, false))], C)), C);
        await $.wset([$t8], "NewPassword", (await $.wv([$t8], "FNewPassword", C, false)), { get: async () => await L0["newpassword"].get(), set: async (v) => { await L0["newpassword"].set(v); }, local: true });
        await $.wset([$t8], "result", (await $.wv([$t8], "true", C, false)), { get: async () => L0["result"], set: async (v) => { L0["result"] = v; }, local: true });
      }
      await $.stmt($.wcall([$t8], "Release", [], C));
    }
  } catch ($t7) {
    $.rethrowControl($t7);
    if ($.excIs($t7, "Exception")) {
      L0["e"] = $.exc($t7);
      await $.stmt((await $.call(C, "MessageDlg", [$.add("px1", (await $.mv(L0["e"], "Message"))), (await $.v(C, "mtError")), [(await $.v(C, "mbOK"))], 0])));
    }
    else { throw $t7; }
  }
  return L0.result;
}, {"params": ["NewPassword"], "kind": "function", "ptypes": ["String"]});
  U.method("TSBOracleLogOn", "CheckForExpire", async function CheckForExpire(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: null, "newpass": ''};
  await $.fixArgs(L0, ["sender"]);
  L0["result"] = (await $.v(C, "arError"));
  if ($.truthy((await $.call(C, "Assigned", [(await $.v(C, "FSession"))])))) {
    {
      const $t9 = (await $.v(C, "FSession"));
      try {
        await $.wset([$t9], "LogonUsername", (await $.mv((await $.wv([$t9], "Sender", { get: async () => L0["sender"], set: async (v) => { L0["sender"] = v; }, local: true }, false)), "LogonUsername")), C);
        await $.wset([$t9], "LogonPassword", (await $.wcall([$t9], "GeneratePassword", [(await $.mv((await $.wv([$t9], "Sender", { get: async () => L0["sender"], set: async (v) => { L0["sender"] = v; }, local: true }, false)), "LogonPassword"))], C)), C);
        await $.wset([$t9], "LogonDatabase", (await $.mv((await $.wv([$t9], "Sender", { get: async () => L0["sender"], set: async (v) => { L0["sender"] = v; }, local: true }, false)), "LogonDatabase")), C);
        await $.stmt((await $.wcall([$t9], "AssignParams", [(await $.wcall([$t9], "TpfmOraSBLogOn", [(await $.wv([$t9], "Sender", { get: async () => L0["sender"], set: async (v) => { L0["sender"] = v; }, local: true }, false))], C))], C)));
        await $.stmt($.wcall([$t9], "LogOn", [], C));
        await $.stmt($.wcall([$t9], "LogOff", [], C));
        await $.wset([$t9], "Result", (await $.wv([$t9], "arSuccess", C, false)), { get: async () => L0["result"], set: async (v) => { L0["result"] = v; }, local: true });
      } catch ($t10) {
        $.rethrowControl($t10);
        if ($.excIs($t10, "EOracleError")) {
          L0["e"] = $.exc($t10);
          if ($.truthy($.eq((await $.mv((await $.wv([$t9], "E", { get: async () => L0["e"], set: async (v) => { L0["e"] = v; }, local: true }, false)), "ErrorCode")), 28001))) {
            await $.wset([$t9], "Result", (await $.wv([$t9], "arSuccess", C, false)), { get: async () => L0["result"], set: async (v) => { L0["result"] = v; }, local: true });
            if ($.truthy((await $.wcall([$t9], "PasswordChangeExecute", [$.ref(async () => (await $.wv([$t9], "newPass", { get: async () => L0["newpass"], set: async (v) => { L0["newpass"] = v; }, local: true }, false)), async ($t11) => { await $.wset([$t9], "newPass", $t11, { get: async () => L0["newpass"], set: async (v) => { L0["newpass"] = v; }, local: true }); })], C)))) {
              if ($.truthy((await $.wcall([$t9], "Assigned", [(await $.wv([$t9], "FSession", C, false))], C)))) {
                await $.stmt((await $.mcall((await $.wv([$t9], "FSession", C, false)), "SetPassword", [(await $.wv([$t9], "newPass", { get: async () => L0["newpass"], set: async (v) => { L0["newpass"] = v; }, local: true }, false))])));
              }
            }
          } else {
            await $.stmt((await $.wcall([$t9], "MessageDlg", [$.add("px3", (await $.mv((await $.wv([$t9], "E", { get: async () => L0["e"], set: async (v) => { L0["e"] = v; }, local: true }, false)), "Message"))), (await $.wv([$t9], "mtError", C, false)), [(await $.wv([$t9], "mbOK", C, false))], 0], C)));
          }
        }
        else { throw $t10; }
      }
    }
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "function", "ptypes": ["TpfmOraSBLogOn"]});
  U.method("TSBOracleLogOn", "AssignParams", async function AssignParams(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.set(C, "LogonUsername", (await $.mv(L0["sender"], "LogonUsername")));
  await $.set(C, "LogonPassword", (await $.mv(L0["sender"], "LogonPassword")));
  await $.set(C, "LogonDatabase", (await $.mv(L0["sender"], "LogonDatabase")));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TpfmOraSBLogOn"]});
  U.method("TSBOracleLogOn", "AskForLogOn", async function AskForLogOn(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: null, "fmlogon": null};
  L0["result"] = (await $.v(C, "arError"));
  try {
    L0["fmlogon"] = (await $.mcall((await $.v(C, "TfmOraSBLogOn")), "Create", [null]));
    await $.mset(L0["fmlogon"], "Caption", (await $.v(C, "FCaption")));
    await $.mset(L0["fmlogon"], "LogonUsername", (await $.v(C, "LogonUsername")));
    await $.mset(L0["fmlogon"], "LogonPassword", (await $.v(C, "LogonPassword")));
    await $.mset(L0["fmlogon"], "LogonDatabase", (await $.v(C, "LogonDatabase")));
    { const $t12 = (await $.mv(L0["fmlogon"], "ShowModal"));
      if ($.eq($t12, (await $.v(C, "mrOk")))) {
        L0["result"] = (await $.call(C, "CheckForExpire", [L0["fmlogon"]]));
      }
      else if ($.eq($t12, (await $.v(C, "mrCancel")))) {
        L0["result"] = (await $.v(C, "arCancel"));
      }
    }
  } finally {
    await $.mcall(L0["fmlogon"], "Free", []);
  }
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TSBOracleLogOn", "Execute", async function Execute(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: null, "i": 0, "liblink": ''};
  L0["result"] = (await $.v(C, "arError"));
  L0["i"] = 1;
  try {
    while ($.truthy($.ge((await $.v(C, "FRetries")), L0["i"]))) {
      L0["result"] = (await $.v(C, "AskForLogOn"));
      if ($.truthy($.in_(L0["result"], [(await $.v(C, "arSuccess")), (await $.v(C, "arCancel"))]))) {
        break;
      }
      await $.stmt((await $.call(C, "inc", [$.ref(async () => L0["i"], async ($t13) => { L0["i"] = $t13; })])));
      await $.tick();
    }
  } finally {
  }
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TSBOracleLogOn", "CloseDll", async function CloseDll(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: undefined};
  await $.stmt((await $.call(C, "OCISessionEnd", [(await $.v(C, "mysvchp")), (await $.v(C, "dberrhp")), (await $.v(C, "myusrhp")), (await $.v(C, "OCI_DEFAULT"))])));
  await $.stmt((await $.call(C, "OCIServerDetach", [(await $.v(C, "mysrvhp")), (await $.v(C, "dberrhp")), (await $.v(C, "OCI_DEFAULT"))])));
  await $.stmt((await $.call(C, "OCIHandleFree", [(await $.v(C, "mysrvhp")), (await $.v(C, "OCI_HTYPE_SERVER"))])));
  await $.stmt((await $.call(C, "OCIHandleFree", [(await $.v(C, "mysvchp")), (await $.v(C, "OCI_HTYPE_SVCCTX"))])));
  await $.stmt((await $.call(C, "OCIHandleFree", [(await $.v(C, "myusrhp")), (await $.v(C, "OCI_HTYPE_SESSION"))])));
  await $.stmt((await $.call(C, "OCIHandleFree", [(await $.v(C, "dberrhp")), (await $.v(C, "OCI_HTYPE_ERROR"))])));
  await $.stmt((await $.call(C, "OCIHandleFree", [(await $.v(C, "myenvhp")), (await $.v(C, "OCI_HTYPE_ENV"))])));
  await $.stmt((await $.call(C, "FreeLibrary", [(await $.v(C, "hDll"))])));
  return L0.result;
}, {"params": [], "kind": "procedure", "ptypes": []});
  U.method("TSBOracleLogOn", "Create", async function Create(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"aowner": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["aowner"]);
  await $.inherited(Self, "TSBOracleLogOn", "Create", [L0["aowner"]], arguments);
  await $.set(C, "FRetries", 3);
  return L0.result;
}, {"params": ["AOwner"], "kind": "constructor", "ptypes": ["TComponent"]});
  U.method("TSBOracleLogOn", "Destroy", async function Destroy(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: undefined};
  await $.inherited(Self, "TSBOracleLogOn", "Destroy", null, arguments);
  return L0.result;
}, {"params": [], "kind": "destructor", "ptypes": []});
  return U;
}
