// Generated from CryptoUnit.pas by pas2js — do not edit by hand; regenerate instead.
/* eslint-disable */
// @ts-nocheck

export default function define($) {
  const U = $.unit("CryptoUnit", ["Messages", "SysUtils", "Dialogs", "CRYPTOMODELLib_TLB"]);
  const C = [U];
  U.init(async () => {
    U.var_("SBCryptoSession", null, "TCryptoSession");
    U.var_("i", 0, "integer");
    U.var_("k", 0, "integer");
    U.var_("j", 0, "integer");
    U.var_("SetPos", null, "_LARGE_INTEGER");
    U.var_("NewPos", null, "TGUID");
    U.var_("piinSession", null, "IStream");
    U.var_("pioutSession", null, "IStream");
    U.var_("piEndSession", null, "IStream");
    U.var_("Str", '', "AnsiString");
    U.var_("DoubleStr", '', "AnsiString");
    U.var_("ByteCount", 0, "cardinal");
    U.var_("ByteWrited", 0, "cardinal");
    U.var_("ReadArray", $.sarr(), "array");
    U.var_("byt", 0, "BYTE");
    U.var_("tagSt", null, "tagSTATSTG");
    U.var_("car", 0, "Cardinal");
    U.var_("ch", '', "char");
  });
  U.func("SetSign", async function SetSign(Self, p0, p1, p2) {
  const C = $.chain(Self, U);
  const L0 = {"secret_key": $.copyArg(p0), "base_key": $.copyArg(p1), "datastring": $.copyArg(p2), result: '', "signstring": ''};
  await $.fixArgs(L0, ["secret_key", "base_key", "datastring"]);
  await $.set(C, "SBCryptoSession", (await $.mcall((await $.v(C, "TCryptoSession")), "Create", [null])));
  await $.stmt((await $.mcall((await $.v(C, "SBCryptoSession")), "Init", [L0["secret_key"], L0["base_key"]])));
  await $.stmt((await $.mcall((await $.v(C, "SBCryptoSession")), "CreateStreamOnMemory", [(await $.v(C, "piinSession"))])));
  await $.stmt((await $.mcall((await $.v(C, "SBCryptoSession")), "CreateStreamOnMemory", [(await $.v(C, "pioutSession"))])));
  try {
    await $.set(C, "Str", L0["datastring"]);
    { const $t1 = (await $.call(C, "length", [(await $.v(C, "str"))]));
      await $.set(C, "i", 1);
      let $t2 = true;
      for (;;) {
        if (!$t2) { await $.set(C, "i", $.succ((await $.v(C, "i")), 1)); }
        $t2 = false;
        if (!($.ord((await $.v(C, "i"))) <= $.ord($t1))) break;
        await $.set(C, "ch", (await $.idx((await $.v(C, "str")), [(await $.v(C, "i"))])));
        await $.set(C, "byt", (await $.call(C, "ord", [(await $.v(C, "ch"))])));
        if ($.truthy($.ne((await $.v(C, "byt")), 13))) {
          await $.stmt((await $.mcall((await $.v(C, "piinSession")), "RemoteWrite", [(await $.v(C, "byt")), 1, (await $.v(C, "ByteWrited"))])));
          await $.set(C, "byt", (await $.call(C, "ord", ["\u0000"])));
          await $.stmt((await $.mcall((await $.v(C, "piinSession")), "RemoteWrite", [(await $.v(C, "byt")), 1, (await $.v(C, "ByteWrited"))])));
        }
        await $.tick();
      }
    }
    await $.mset((await $.v(C, "SetPos")), "QuadPart", 0);
    await $.stmt((await $.mcall((await $.v(C, "piinSession")), "RemoteSeek", [(await $.v(C, "SetPos")), 0, (await $.v(C, "NewPos"))])));
    await $.stmt((await $.mcall((await $.v(C, "pioutSession")), "RemoteSeek", [(await $.v(C, "SetPos")), 0, (await $.v(C, "NewPos"))])));
    await $.stmt((await $.mcall((await $.v(C, "SBCryptoSession")), "Sign", [(await $.v(C, "piinSession")), (await $.v(C, "pioutSession"))])));
    await $.stmt((await $.mcall((await $.v(C, "pioutSession")), "Stat", [(await $.v(C, "tagSt")), (await $.v(C, "car"))])));
    await $.set(C, "k", (await $.mv((await $.mv((await $.v(C, "tagSt")), "cbSize")), "D1")));
    { const $t3 = (await $.v(C, "k"));
      await $.set(C, "i", 1);
      let $t4 = true;
      for (;;) {
        if (!$t4) { await $.set(C, "i", $.succ((await $.v(C, "i")), 1)); }
        $t4 = false;
        if (!($.ord((await $.v(C, "i"))) <= $.ord($t3))) break;
        await $.mset((await $.v(C, "SetPos")), "QuadPart", $.sub((await $.v(C, "i")), 1));
        await $.stmt((await $.mcall((await $.v(C, "pioutSession")), "RemoteSeek", [(await $.v(C, "SetPos")), 0, (await $.v(C, "NewPos"))])));
        await $.stmt((await $.mcall((await $.v(C, "pioutSession")), "RemoteRead", [(await $.idx((await $.v(C, "readarray")), [(await $.v(C, "i"))])), 1, (await $.v(C, "ByteCount"))])));
        L0["signstring"] = $.add(L0["signstring"], (await $.call(C, "IntToHex", [(await $.idx((await $.v(C, "readarray")), [(await $.v(C, "i"))])), 2])));
        await $.tick();
      }
    }
  } finally {
    await $.stmt((await $.mcall((await $.v(C, "SBCryptoSession")), "DeleteStreamOnMemory", [(await $.v(C, "piinSession"))])));
    await $.stmt((await $.mcall((await $.v(C, "SBCryptoSession")), "DeleteStreamOnMemory", [(await $.v(C, "pioutSession"))])));
    await $.mcall((await $.v(C, "SBCryptoSession")), "Close", []);
    await $.mcall((await $.v(C, "SBCryptoSession")), "Free", []);
    L0["result"] = L0["signstring"];
  }
  return L0.result;
}, {"params": ["secret_key", "base_key", "DataString"], "kind": "function", "ptypes": ["WideString", "WideString", "AnsiString"]});
  U.func("SignCheck", async function SignCheck(Self, p0, p1, p2, p3, p4) {
  const C = $.chain(Self, U);
  const L0 = {"secret_key": $.copyArg(p0), "base_key": $.copyArg(p1), "datastring": $.copyArg(p2), "signstring": $.copyArg(p3), "getabonent": $.asRef(p4), result: false, "checkresult": false};
  await $.fixArgs(L0, ["secret_key", "base_key", "datastring", "signstring"]);
  await $.set(C, "SBCryptoSession", (await $.mcall((await $.v(C, "TCryptoSession")), "Create", [null])));
  await $.stmt((await $.mcall((await $.v(C, "SBCryptoSession")), "Init", [L0["secret_key"], L0["base_key"]])));
  await $.stmt((await $.mcall((await $.v(C, "SBCryptoSession")), "CreateStreamOnMemory", [(await $.v(C, "piinSession"))])));
  await $.stmt((await $.mcall((await $.v(C, "SBCryptoSession")), "CreateStreamOnMemory", [(await $.v(C, "pioutSession"))])));
  try {
    await $.mset((await $.v(C, "SetPos")), "QuadPart", 0);
    await $.stmt((await $.mcall((await $.v(C, "piinSession")), "RemoteSeek", [(await $.v(C, "SetPos")), 0, (await $.v(C, "NewPos"))])));
    await $.stmt((await $.mcall((await $.v(C, "pioutSession")), "RemoteSeek", [(await $.v(C, "SetPos")), 0, (await $.v(C, "NewPos"))])));
    await $.set(C, "str", L0["datastring"]);
    { const $t5 = (await $.call(C, "length", [(await $.v(C, "str"))]));
      await $.set(C, "i", 1);
      let $t6 = true;
      for (;;) {
        if (!$t6) { await $.set(C, "i", $.succ((await $.v(C, "i")), 1)); }
        $t6 = false;
        if (!($.ord((await $.v(C, "i"))) <= $.ord($t5))) break;
        await $.set(C, "ch", (await $.idx((await $.v(C, "str")), [(await $.v(C, "i"))])));
        await $.set(C, "byt", (await $.call(C, "ord", [(await $.v(C, "ch"))])));
        if ($.truthy($.ne((await $.v(C, "byt")), 13))) {
          await $.stmt((await $.mcall((await $.v(C, "piinSession")), "RemoteWrite", [(await $.v(C, "byt")), 1, (await $.v(C, "ByteWrited"))])));
          await $.set(C, "byt", (await $.call(C, "ord", ["\u0000"])));
          await $.stmt((await $.mcall((await $.v(C, "piinSession")), "RemoteWrite", [(await $.v(C, "byt")), 1, (await $.v(C, "ByteWrited"))])));
        }
        await $.tick();
      }
    }
    await $.set(C, "str", L0["signstring"]);
    await $.set(C, "j", 0);
    { const $t7 = 140;
      await $.set(C, "i", 0);
      let $t8 = true;
      for (;;) {
        if (!$t8) { await $.set(C, "i", $.succ((await $.v(C, "i")), 1)); }
        $t8 = false;
        if (!($.ord((await $.v(C, "i"))) <= $.ord($t7))) break;
        await $.set(C, "DoubleStr", ($.add("$", (await $.call(C, "copy", [(await $.v(C, "str")), $.add((await $.v(C, "j")), 1), 2])))));
        await $.set(C, "byt", (await $.call(C, "byte", [(await $.call(C, "strtoint", [(await $.v(C, "DoubleStr"))]))])));
        await $.stmt((await $.mcall((await $.v(C, "pioutSession")), "RemoteWrite", [(await $.v(C, "byt")), 1, (await $.v(C, "ByteWrited"))])));
        await $.stmt((await $.call(C, "inc", [$.ref(async () => (await $.v(C, "j")), async ($t9) => { await $.set(C, "j", $t9); }), 2])));
        await $.tick();
      }
    }
    L0["result"] = false;
    await $.mset((await $.v(C, "SetPos")), "QuadPart", 0);
    await $.stmt((await $.mcall((await $.v(C, "piinSession")), "RemoteSeek", [(await $.v(C, "SetPos")), 0, (await $.v(C, "NewPos"))])));
    await $.stmt((await $.mcall((await $.v(C, "pioutSession")), "RemoteSeek", [(await $.v(C, "SetPos")), 0, (await $.v(C, "NewPos"))])));
    await $.stmt((await $.mcall((await $.v(C, "SBCryptoSession")), "CheckSign", [(await $.v(C, "piinSession")), (await $.v(C, "pioutSession")), (await L0["getabonent"].get()), L0["checkresult"]])));
    if ($.truthy(L0["checkresult"])) {
      await $.stmt((await $.call(C, "ShowMessage", ["Sign OK"])));
    } else {
      await $.stmt((await $.call(C, "ShowMessage", ["Bad Sign"])));
    }
  } finally {
    await $.stmt((await $.mcall((await $.v(C, "SBCryptoSession")), "DeleteStreamOnMemory", [(await $.v(C, "piinSession"))])));
    await $.stmt((await $.mcall((await $.v(C, "SBCryptoSession")), "DeleteStreamOnMemory", [(await $.v(C, "pioutSession"))])));
    await $.mcall((await $.v(C, "SBCryptoSession")), "Close", []);
    await $.mcall((await $.v(C, "SBCryptoSession")), "Free", []);
    L0["result"] = L0["checkresult"];
  }
  return L0.result;
}, {"params": ["secret_key", "base_key", "DataString", "SignString", "GetAbonent"], "kind": "function", "ptypes": ["WideString", "WideString", "AnsiString", "AnsiString", "WideString"]});
  return U;
}
