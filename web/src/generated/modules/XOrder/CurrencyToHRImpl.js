// Generated from CurrencyToHRImpl.pas by pas2js — do not edit by hand; regenerate instead.
/* eslint-disable */
// @ts-nocheck

export default function define($) {
  const U = $.unit("CurrencyToHRImpl", ["Windows", "SysUtils", "Classes", "Math", "CurrencyToHR_Azeri_Impl"]);
  const C = [U];
  $.defRecord("ttranslatordesc", {"localeid": () => null, "translatorproc": () => null});
  U.init(async () => {
    U.const("tfNoFrac", 1);
    U.const("tfFracDigital", 2);
    U.const("tfNoCent", 4);
    U.var_("Translators", null, "TList");
  });
  U.func("GetTranslatorIndex", async function GetTranslatorIndex(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"alocaleid": $.copyArg(p0), result: 0};
  await $.fixArgs(L0, ["alocaleid"]);
  { const $t1 = $.sub((await $.mv((await $.v(C, "Translators")), "Count")), 1);
    L0["result"] = 0;
    let $t2 = true;
    for (;;) {
      if (!$t2) { L0["result"] = $.succ(L0["result"], 1); }
      $t2 = false;
      if (!($.ord(L0["result"]) <= $.ord($t1))) break;
      {
        const $t3 = (await $.call(C, "PTranslatorDesc", [(await $.idx((await $.v(C, "Translators")), [L0["result"]]))]));
        if ($.truthy($.eq((await $.wv([$t3], "LocaleID", C, false)), (await $.wv([$t3], "ALocaleID", { get: async () => L0["alocaleid"], set: async (v) => { L0["alocaleid"] = v; }, local: true }, false))))) {
          break;
        }
      }
      await $.tick();
    }
  }
  return L0.result;
}, {"params": ["ALocaleID"], "kind": "function", "ptypes": ["LCID"]});
  U.func("GetTranslatorProc", async function GetTranslatorProc(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"alocaleid": $.copyArg(p0), result: null, "index": 0};
  await $.fixArgs(L0, ["alocaleid"]);
  L0["index"] = (await $.call(C, "GetTranslatorIndex", [L0["alocaleid"]]));
  if ($.truthy($.ne(L0["index"], (-(1))))) {
    L0["result"] = (await $.mv((await $.call(C, "PTranslatorDesc", [(await $.idx((await $.v(C, "Translators")), [L0["index"]]))])), "TranslatorProc"));
  } else {
    L0["result"] = null;
  }
  return L0.result;
}, {"params": ["ALocaleID"], "kind": "function", "ptypes": ["LCID"]});
  U.func("CurrencyToHR", async function CurrencyToHR(Self, p0, p1, p2, p3) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), "decimals": $.copyArg(p1), "flags": $.copyArg(p2), "localeid": (p3 === undefined ? 0 : p3), result: '', "p": null};
  await $.fixArgs(L0, ["value", "decimals", "flags", "localeid"]);
  L0["p"] = (await $.call(C, "GetTranslatorProc", [L0["localeid"]]));
  L0["result"] = (await $.callv(L0["p"], [L0["value"], L0["decimals"], L0["flags"]]));
  return L0.result;
}, {"params": ["Value", "Decimals", "Flags", "LocaleID"], "kind": "function", "ptypes": ["Extended", "Byte", "TTranslatorFlags", "LCID"]});
  U.func("RegCurrencyTranslator", async function RegCurrencyTranslator(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"alocaleid": $.copyArg(p0), "atranslatorproc": $.copyArg(p1), result: undefined, "desc": null};
  await $.fixArgs(L0, ["alocaleid", "atranslatorproc"]);
  await $.stmt((await $.call(C, "UnRegCurrencyTranslator", [L0["alocaleid"]])));
  await $.stmt((await $.call(C, "GetMem", [L0["desc"], (await $.call(C, "SizeOf", [(await $.v(C, "TTranslatorDesc"))]))])));
  {
    const $t4 = L0["desc"];
    await $.wset([$t4], "LocaleID", (await $.wv([$t4], "ALocaleID", { get: async () => L0["alocaleid"], set: async (v) => { L0["alocaleid"] = v; }, local: true }, false)), C);
    await $.wset([$t4], "TranslatorProc", (await $.wv([$t4], "ATranslatorProc", { get: async () => L0["atranslatorproc"], set: async (v) => { L0["atranslatorproc"] = v; }, local: true }, false)), C);
  }
  await $.stmt((await $.mcall((await $.v(C, "Translators")), "Add", [L0["desc"]])));
  return L0.result;
}, {"params": ["ALocaleID", "ATranslatorProc"], "kind": "procedure", "ptypes": ["LCID", "TCurrencyTranslatorProc"]});
  U.func("UnRegCurrencyTranslator", async function UnRegCurrencyTranslator(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"localeid": $.copyArg(p0), result: undefined, "index": 0};
  await $.fixArgs(L0, ["localeid"]);
  { const $t5 = $.sub((await $.mv((await $.v(C, "Translators")), "Count")), 1);
    L0["index"] = 0;
    let $t6 = true;
    for (;;) {
      if (!$t6) { L0["index"] = $.succ(L0["index"], 1); }
      $t6 = false;
      if (!($.ord(L0["index"]) <= $.ord($t5))) break;
      await $.stmt((await $.mcall((await $.v(C, "Translators")), "Delete", [$.ref(async () => L0["index"], async ($t7) => { L0["index"] = $t7; })])));
      await $.tick();
    }
  }
  return L0.result;
}, {"params": ["LocaleID"], "kind": "procedure", "ptypes": ["LCID"]});
  U.func("Initialize", async function Initialize(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: undefined};
  await $.set(C, "Translators", (await $.mv((await $.v(C, "TList")), "Create")));
  await $.stmt((await $.call(C, "RegCurrencyTranslator", [(await $.v(C, "LOCALE_AZERI")), (await $.ref_(C, "CurrencyToHR_Azeri"))])));
  return L0.result;
}, {"params": [], "kind": "procedure", "ptypes": []});
  U.func("Cleanup", async function Cleanup(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: undefined};
  await $.mcall((await $.v(C, "Translators")), "Free", []);
  return L0.result;
}, {"params": [], "kind": "procedure", "ptypes": []});
  U.setInitialization(async function __initialization(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: undefined};
  await $.stmt($.call(C, "Initialize", []));
  return L0.result;
});
  return U;
}
