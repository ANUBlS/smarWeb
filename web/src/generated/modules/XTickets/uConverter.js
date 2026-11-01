// Generated from uConverter.pas by pas2js — do not edit by hand; regenerate instead.
/* eslint-disable */
// @ts-nocheck

export default function define($) {
  const U = $.unit("uConverter", ["Sysutils"]);
  const C = [U];
  U.init(async () => {
  });
  U.func("ConvertCyrToAzeri", async function ConvertCyrToAzeri(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"str": $.copyArg(p0), result: null, "i": 0};
  await $.fixArgs(L0, ["str"]);
  await $.staticConst(L0, "cyrs", "uconverter..convertcyrtoazeri.cyrs", async () => ["A", "B", "V", "Q", "D", "E", "C", "Z", "İ", "Y", "K", "L", "M", "N", "O", "P", "R", "S", "T", "U", "F", "X", "Ü", "Ç", "Ş", "H", "J", "I", "Ğ", "G", "Ö", "Ə", "a", "b", "v", "q", "d", "e", "c", "z", "i", "y", "k", "l", "m", "n", "o", "p", "r", "s", "t", "u", "f", "x", "ü", "ç", "ş", "h", "j", "ı", "ğ", "g", "ö", "ə"]);
  await $.staticConst(L0, "azes", "uconverter..convertcyrtoazeri.azes", async () => ["A", "B", "V", "Q", "D", "E", "C", "Z", "I", "Y", "K", "L", "M", "N", "O", "P", "R", "S", "T", "U", "F", "X", "U", "CH", "SH", "H", "J", "I", "G", "G", "O", "A", "a", "b", "v", "q", "d", "e", "c", "z", "i", "y", "k", "l", "m", "n", "o", "p", "r", "s", "t", "u", "f", "x", "u", "ch", "sh", "h", "j", "i", "g", "g", "o", "a"]);
  { const $t1 = 63;
    L0["i"] = 0;
    let $t2 = true;
    for (;;) {
      if (!$t2) { L0["i"] = $.succ(L0["i"], 1); }
      $t2 = false;
      if (!($.ord(L0["i"]) <= $.ord($t1))) break;
      L0["str"] = (await $.call(C, "StringReplace", [L0["str"], (await $.idx(L0["cyrs"], [L0["i"]])), (await $.idx(L0["azes"], [L0["i"]])), [(await $.v(C, "rfReplaceAll"))]]));
      await $.tick();
    }
  }
  L0["result"] = L0["str"];
  return L0.result;
}, {"params": ["str"], "kind": "function", "ptypes": ["String"]});
  return U;
}
