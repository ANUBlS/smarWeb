// Generated from OraLogon.pas by pas2js — do not edit by hand; regenerate instead.
/* eslint-disable */
// @ts-nocheck

export default function define($) {
  const U = $.unit("OraLogon", ["Windows", "Messages", "SysUtils", "Classes", "Graphics", "Controls", "Forms", "Dialogs", "Oracle", "OracleData", "FrmConnectionImpl", "FrmChangePasswordImpl", "Registry", "ICECrypt"]);
  const C = [U];
  U.defClass("TOraLogon", "TComponent", {"fcaption": {"name": "FCaption", "type": "String"}, "fsession": {"name": "FSession", "type": "TOracleSession"}, "fretries": {"name": "FRetries", "type": "Integer"}, "foraclehomes": {"name": "FOracleHomes", "type": "TStringlist"}, "plogondatabase": {"name": "PLogonDatabase", "type": "String"}, "plogonusername": {"name": "PLogonUsername", "type": "String"}, "plogonpassword": {"name": "PLogonPassword", "type": "String"}}, {"caption": {"name": "Caption", "read": "FCaption", "write": "FCaption"}, "session": {"name": "Session", "read": "FSession", "write": "SetSession"}, "retries": {"name": "Retries", "read": "FRetries", "write": "FRetries"}});
  U.init(async () => {
  });
  U.func("Register", async function Register(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: undefined};
  await $.stmt((await $.call(C, "RegisterComponents", ["Creditsmgr", [(await $.v(C, "TOraLogon"))]])));
  return L0.result;
}, {"params": [], "kind": "procedure", "ptypes": []});
  U.method("TOraLogon", "Execute", async function Execute(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: undefined, "ret": 0};
  L0["cryptpass"] = $.fn(async function CryptPass(p0) {
  const L1 = {"pass": $.copyArg(p0), result: '', "passcrt": null};
  await $.fixArgs(L1, ["pass"]);
  L1["result"] = "";
  L1["passcrt"] = (await $.mcall((await $.v(C, "TICECrypt")), "Create", [null]));
  try {
    await $.mset(L1["passcrt"], "Text", L1["pass"]);
    L1["result"] = $.add("s", (await $.mcall(L1["passcrt"], "GetCrypted", [])));
  } finally {
    await $.mcall(L1["passcrt"], "Free", []);
  }
  return L1.result;
});
  L0["ret"] = 1;
  while ($.truthy($.le(L0["ret"], (await $.v(C, "Retries"))))) {
    {
      const $t1 = (await $.v(C, "Session"));
      try {
        if ($.truthy($.not((await $.wv([$t1], "PrepareLogon", C, false))))) {
          return L0.result;
        }
        await $.wset([$t1], "LogonUsername", (await $.wv([$t1], "PLogonUsername", C, false)), C);
        await $.wset([$t1], "LogonPassword", (await $.wcall([$t1], "CryptPass", [(await $.wv([$t1], "PLogonPassword", C, false))], { get: async () => L0["cryptpass"], set: async (v) => { L0["cryptpass"] = v; }, local: true })), C);
        await $.wset([$t1], "LogonDatabase", (await $.wv([$t1], "PLogonDatabase", C, false)), C);
        await $.stmt($.wcall([$t1], "LogOn", [], C));
        if ($.truthy((await $.wv([$t1], "Connected", C, false)))) {
          return L0.result;
        }
        if ($.truthy($.ne((await $.wv([$t1], "ExpirationMessage", C, false)), ""))) {
          await $.stmt((await $.wcall([$t1], "ShowMessage", [(await $.wv([$t1], "ExpirationMessage", C, false))], C)));
        }
      } catch ($t2) {
        $.rethrowControl($t2);
        if ($.excIs($t2, "EOracleError")) {
          L0["e"] = $.exc($t2);
          if ($.truthy($.ne((await $.mv((await $.wv([$t1], "E", { get: async () => L0["e"], set: async (v) => { L0["e"] = v; }, local: true }, false)), "ErrorCode")), 28001))) {
            await $.stmt((await $.wcall([$t1], "ShowMessage", [(await $.mv((await $.wv([$t1], "E", { get: async () => L0["e"], set: async (v) => { L0["e"] = v; }, local: true }, false)), "Message"))], C)));
          } else {
            try {
              await $.stmt((await $.wcall([$t1], "ShowMessage", [(await $.mv((await $.wv([$t1], "E", { get: async () => L0["e"], set: async (v) => { L0["e"] = v; }, local: true }, false)), "Message"))], C)));
              await $.stmt((await $.wcall([$t1], "SetPass", [(await $.wv([$t1], "GetNewPassword", C, false)), (await $.wv([$t1], "Session", C, false))], C)));
              if ($.truthy((await $.mv((await $.wv([$t1], "FrmConnection", C, false)), "TryConnect")))) {
                await $.stmt($.wcall([$t1], "Logon", [], C));
              }
            } catch ($t3) {
              $.rethrowControl($t3);
              if ($.excIs($t3, "EOracleError")) {
                L0["e"] = $.exc($t3);
                await $.stmt((await $.wcall([$t1], "ShowMessage", [(await $.mv((await $.wv([$t1], "E", { get: async () => L0["e"], set: async (v) => { L0["e"] = v; }, local: true }, false)), "Message"))], C)));
              }
              else { throw $t3; }
            }
          }
        }
        else { throw $t2; }
      }
    }
    L0["ret"] = $.add(L0["ret"], 1);
    await $.tick();
  }
  return L0.result;
}, {"params": [], "kind": "procedure", "ptypes": []});
  U.method("TOraLogon", "SetPass", async function SetPass(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"newpass": $.copyArg(p0), "sess": $.copyArg(p1), result: undefined};
  await $.fixArgs(L0, ["newpass", "sess"]);
  if ($.truthy((await $.and_(($.ne(L0["newpass"], "")), async () => (await $.mv((await $.v(C, "FrmChangePassword")), "ChangePass")))))) {
    {
      const $t4 = L0["sess"];
      await $.stmt((await $.wcall([$t4], "SetPassword", [(await $.wv([$t4], "NewPass", { get: async () => L0["newpass"], set: async (v) => { L0["newpass"] = v; }, local: true }, false))], C)));
    }
  }
  return L0.result;
}, {"params": ["NewPass", "Sess"], "kind": "procedure", "ptypes": ["String", "TOracleSession"]});
  U.method("TOraLogon", "GetNewPassword", async function GetNewPassword(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: ''};
  await $.set(C, "FrmChangePassword", (await $.mcall((await $.v(C, "TFrmChangePassword")), "Create", [Self])));
  {
    const $t5 = (await $.v(C, "FrmChangePassword"));
    try {
      await $.stmt($.wcall([$t5], "ShowModal", [], C));
      await $.wset([$t5], "Result", (await $.wv([$t5], "NewPassword", C, false)), { get: async () => L0["result"], set: async (v) => { L0["result"] = v; }, local: true });
    } finally {
      await $.stmt($.wcall([$t5], "Free", [], C));
    }
  }
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TOraLogon", "GetLogonParams", async function GetLogonParams(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: undefined};
  await $.set(C, "PLogonDatabase", (await $.mv((await $.v(C, "FrmConnection")), "LogonDatabase")));
  await $.set(C, "PLogonUsername", (await $.mv((await $.v(C, "FrmConnection")), "LogonUsername")));
  await $.set(C, "PLogonPassword", (await $.mv((await $.v(C, "FrmConnection")), "LogonPassword")));
  return L0.result;
}, {"params": [], "kind": "procedure", "ptypes": []});
  U.method("TOraLogon", "PrepareLogon", async function PrepareLogon(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: false, "countorahomes": 0, "index": 0};
  L0["countorahomes"] = (await $.mv((await $.v(C, "FOracleHomes")), "Count"));
  await $.set(C, "FrmConnection", (await $.mcall((await $.v(C, "TFrmConnection")), "Create", [Self])));
  await $.stmt($.call(C, "SetFirstParams", []));
  {
    const $t6 = (await $.v(C, "FrmConnection"));
    try {
      await $.wset([$t6], "index", 0, { get: async () => L0["index"], set: async (v) => { L0["index"] = v; }, local: true });
      while ($.truthy($.not((await $.wcall([$t6], "GetServiceNames", [(await $.idx((await $.mv((await $.wv([$t6], "FOracleHomes", C, false)), "Strings")), [(await $.wv([$t6], "index", { get: async () => L0["index"], set: async (v) => { L0["index"] = v; }, local: true }, false))]))], C))))) {
        await $.wset([$t6], "index", $.add((await $.wv([$t6], "index", { get: async () => L0["index"], set: async (v) => { L0["index"] = v; }, local: true }, false)), 1), { get: async () => L0["index"], set: async (v) => { L0["index"] = v; }, local: true });
        if ($.truthy($.eq((await $.wv([$t6], "index", { get: async () => L0["index"], set: async (v) => { L0["index"] = v; }, local: true }, false)), (await $.wv([$t6], "CountOraHomes", { get: async () => L0["countorahomes"], set: async (v) => { L0["countorahomes"] = v; }, local: true }, false))))) {
          break;
        }
        await $.tick();
      }
      await $.wset([$t6], "Caption", (await $.wv([$t6], "FCaption", C, false)), C);
      await $.wset([$t6], "Result", $.eq((await $.wv([$t6], "ShowModal", C, false)), (await $.wv([$t6], "mrOk", C, false))), { get: async () => L0["result"], set: async (v) => { L0["result"] = v; }, local: true });
      await $.stmt($.wcall([$t6], "GetLogonParams", [], C));
    } finally {
      await $.stmt($.wcall([$t6], "Free", [], C));
    }
  }
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TOraLogon", "GetOracleHomes", async function GetOracleHomes(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: undefined, "horaclereg": null, "numsubkeys": 0, "maxsubkeylen": 0, "len": null, "st1": '', "i": 0, "oraclehomepaths": $.sarr()};
  L0["maxoraclehomes"] = 10;
  { const $t7 = $.sub(L0["maxoraclehomes"], 1);
    L0["i"] = 0;
    let $t8 = true;
    for (;;) {
      if (!$t8) { L0["i"] = $.succ(L0["i"], 1); }
      $t8 = false;
      if (!($.ord(L0["i"]) <= $.ord($t7))) break;
      { const $t9 = await $.iset(L0["oraclehomepaths"], [L0["i"]], ""); if ($t9 !== undefined) { L0["oraclehomepaths"] = $t9; } }
      await $.tick();
    }
  }
  if ($.truthy($.eq((await $.call(C, "RegOpenKeyEx", [(await $.v(C, "HKEY_LOCAL_MACHINE")), (await $.call(C, "PChar", ["SOFTWARE\\ORACLE"])), 0, (await $.v(C, "KEY_READ")), L0["horaclereg"]])), (await $.v(C, "ERROR_SUCCESS"))))) {
    if ($.truthy($.eq((await $.call(C, "RegQueryInfoKey", [L0["horaclereg"], null, null, null, L0["numsubkeys"], L0["maxsubkeylen"], null, null, null, null, null, null])), (await $.v(C, "ERROR_SUCCESS"))))) {
      { const $t10 = $.sub(L0["numsubkeys"], 1);
        L0["i"] = 0;
        let $t11 = true;
        for (;;) {
          if (!$t11) { L0["i"] = $.succ(L0["i"], 1); }
          $t11 = false;
          if (!($.ord(L0["i"]) <= $.ord($t10))) break;
          L0["len"] = $.add(L0["maxsubkeylen"], 1);
          await $.stmt((await $.call(C, "SetLength", [$.ref(async () => L0["st1"], async ($t12) => { L0["st1"] = $t12; }), L0["len"]])));
          await $.stmt((await $.call(C, "RegEnumKeyEx", [L0["horaclereg"], L0["i"], (await $.call(C, "PChar", [L0["st1"]])), L0["len"], null, null, null, null])));
          if ($.truthy((await $.or_(($.eq((await $.call(C, "AnsiStrLIComp", [(await $.call(C, "Pchar", [L0["st1"]])), "HOME", 4])), 0)), async () => ($.eq((await $.call(C, "AnsiStrLIComp", [(await $.call(C, "Pchar", [L0["st1"]])), "KEY_", 4])), 0)))))) {
            await $.stmt((await $.call(C, "Setlength", [$.ref(async () => L0["st1"], async ($t13) => { L0["st1"] = $t13; }), L0["len"]])));
            await $.stmt((await $.mcall((await $.v(C, "FOracleHomes")), "Add", [L0["st1"]])));
          }
          await $.tick();
        }
      }
    }
    await $.stmt((await $.call(C, "RegCloseKey", [L0["horaclereg"]])));
    L0["horaclereg"] = 0;
  }
  return L0.result;
}, {"params": [], "kind": "procedure", "ptypes": []});
  U.method("TOraLogon", "Create", async function Create(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"cowner": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["cowner"]);
  await $.inherited(Self, "TOraLogon", "Create", [L0["cowner"]], arguments);
  await $.set(C, "FRetries", 3);
  await $.set(C, "FOracleHomes", (await $.mv((await $.v(C, "TStringList")), "Create")));
  await $.stmt($.call(C, "GetOracleHomes", []));
  return L0.result;
}, {"params": ["COwner"], "kind": "constructor", "ptypes": ["TComponent"]});
  U.method("TOraLogon", "Destroy", async function Destroy(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: undefined};
  await $.mcall((await $.v(C, "FOracleHomes")), "Free", []);
  await $.inherited(Self, "TOraLogon", "Destroy", null, arguments);
  return L0.result;
}, {"params": [], "kind": "destructor", "ptypes": []});
  U.method("TOraLogon", "GetServiceNames", async function GetServiceNames(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"strkey": $.copyArg(p0), result: false, "i": 0, "k": 0, "n": '', "mem": null};
  await $.fixArgs(L0, ["strkey"]);
  L0["gettnsfile"] = $.fn(async function GetTNSFile() {
  const L1 = {result: false, "reg": null, "value": ''};
  L1["cval"] = "\\NETWORK\\ADMIN\\tnsnames.ora";
  L1["reg"] = (await $.mv((await $.v(C, "TRegistry")), "Create"));
  {
    const $t14 = L1["reg"];
    await $.wset([$t14], "RootKey", (await $.wv([$t14], "HKEY_LOCAL_MACHINE", C, false)), C);
    await $.stmt((await $.wcall([$t14], "OpenKey", [$.add("SOFTWARE\\ORACLE\\", (await $.wv([$t14], "StrKey", { get: async () => L0["strkey"], set: async (v) => { L0["strkey"] = v; }, local: true }, false))), (await $.wv([$t14], "False", C, false))], C)));
    await $.wset([$t14], "value", (await $.wcall([$t14], "ReadString", ["ORACLE_HOME"], C)), { get: async () => L1["value"], set: async (v) => { L1["value"] = v; }, local: true });
    if ($.truthy((await $.wcall([$t14], "FileExists", [$.add((await $.wv([$t14], "value", { get: async () => L1["value"], set: async (v) => { L1["value"] = v; }, local: true }, false)), (await $.wv([$t14], "cval", { get: async () => L1["cval"], set: async (v) => { L1["cval"] = v; }, local: true }, false)))], C)))) {
      await $.stmt((await $.mcall((await $.wv([$t14], "Mem", { get: async () => L0["mem"], set: async (v) => { L0["mem"] = v; }, local: true }, false)), "LoadFromFile", [$.add((await $.wv([$t14], "value", { get: async () => L1["value"], set: async (v) => { L1["value"] = v; }, local: true }, false)), (await $.wv([$t14], "cval", { get: async () => L1["cval"], set: async (v) => { L1["cval"] = v; }, local: true }, false)))])));
      await $.wset([$t14], "Result", (await $.wv([$t14], "True", C, false)), { get: async () => L1["result"], set: async (v) => { L1["result"] = v; }, local: true });
    } else {
      await $.wset([$t14], "Result", (await $.wv([$t14], "False", C, false)), { get: async () => L1["result"], set: async (v) => { L1["result"] = v; }, local: true });
    }
  }
  return L1.result;
});
  L0["mem"] = (await $.mv((await $.v(C, "TStringList")), "Create"));
  L0["result"] = L0["gettnsfile"];
  {
    const $t15 = L0["mem"];
    { const $t16 = $.sub((await $.wv([$t15], "Count", C, false)), 1);
      await $.wset([$t15], "i", 0, { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true });
      let $t17 = true;
      for (;;) {
        if (!$t17) { await $.wset([$t15], "i", $.succ((await $.wv([$t15], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false)), 1), { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }); }
        $t17 = false;
        if (!($.ord((await $.wv([$t15], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false))) <= $.ord($t16))) break;
        await $.wset([$t15], "n", (await $.wcall([$t15], "PChar", [(await $.idx((await $.wv([$t15], "mem", { get: async () => L0["mem"], set: async (v) => { L0["mem"] = v; }, local: true }, false)), [(await $.wv([$t15], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false))]))], C)), { get: async () => L0["n"], set: async (v) => { L0["n"] = v; }, local: true });
        if ($.truthy((await $.and_((await $.and_(($.ne((await $.idx((await $.wv([$t15], "n", { get: async () => L0["n"], set: async (v) => { L0["n"] = v; }, local: true }, false)), [0])), "#")), async () => ($.ne((await $.idx((await $.wv([$t15], "n", { get: async () => L0["n"], set: async (v) => { L0["n"] = v; }, local: true }, false)), [0])), "")))), async () => ($.ne((await $.idx((await $.wv([$t15], "n", { get: async () => L0["n"], set: async (v) => { L0["n"] = v; }, local: true }, false)), [0])), " ")))))) {
          await $.wset([$t15], "k", (await $.wcall([$t15], "Pos", ["=", (await $.idx((await $.wv([$t15], "mem", { get: async () => L0["mem"], set: async (v) => { L0["mem"] = v; }, local: true }, false)), [(await $.wv([$t15], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false))]))], C)), { get: async () => L0["k"], set: async (v) => { L0["k"] = v; }, local: true });
          await $.stmt((await $.mcall((await $.mv((await $.mv((await $.wv([$t15], "FrmConnection", C, false)), "CBDatabases")), "items")), "add", [(await $.wcall([$t15], "copy", [(await $.idx((await $.wv([$t15], "mem", { get: async () => L0["mem"], set: async (v) => { L0["mem"] = v; }, local: true }, false)), [(await $.wv([$t15], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false))])), 0, $.sub((await $.wv([$t15], "k", { get: async () => L0["k"], set: async (v) => { L0["k"] = v; }, local: true }, false)), 2)], C))])));
        }
        await $.tick();
      }
    }
  }
  return L0.result;
}, {"params": ["StrKey"], "kind": "function", "ptypes": ["String"]});
  U.method("TOraLogon", "SetSession", async function SetSession(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"ses": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["ses"]);
  await $.set(C, "FSession", L0["ses"]);
  return L0.result;
}, {"params": ["Ses"], "kind": "procedure", "ptypes": ["TOracleSession"]});
  U.method("TOraLogon", "SetFirstParams", async function SetFirstParams(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: undefined};
  {
    const $t18 = (await $.v(C, "FrmConnection"));
    await $.wset([$t18], "LogonDatabase", (await $.wv([$t18], "PLogonDatabase", C, false)), C);
    await $.wset([$t18], "LogonUsername", (await $.wv([$t18], "PLogonUsername", C, false)), C);
    await $.wset([$t18], "LogonPassword", (await $.wv([$t18], "PLogonPassword", C, false)), C);
  }
  return L0.result;
}, {"params": [], "kind": "procedure", "ptypes": []});
  return U;
}
