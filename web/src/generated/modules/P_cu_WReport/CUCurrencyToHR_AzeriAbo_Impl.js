// Generated from CUCurrencyToHR_AzeriAbo_Impl.pas by pas2js — do not edit by hand; regenerate instead.
/* eslint-disable */
// @ts-nocheck

export default function define($) {
  const U = $.unit("CUCurrencyToHR_AzeriAbo_Impl", ["CurrencyToHRImpl", "SysUtils", "Math"]);
  const C = [U];
  U.init(async () => {
    U.const("LOCALE_AZERI", 0);
  });
  U.func("CurrencyToHR_Azeri", async function CurrencyToHR_Azeri(Self, p0, p1, p2, p3) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), "decimals": $.copyArg(p1), "flags": $.copyArg(p2), "currencyname": $.copyArg(p3), result: ''};
  await $.fixArgs(L0, ["value", "decimals", "flags", "currencyname"]);
  L0["s100"] = "yüz";
  L0["s001"] = "qəpik";
  await $.staticConst(L0, "digits1", "cucurrencytohr_azeriabo_impl..currencytohr_azeri.digits1", async () => ["bir", "iki", "üç", "dörd", "beş", "altı", "yeddi", "səkkiz", "doqquz"]);
  await $.staticConst(L0, "digits2", "cucurrencytohr_azeriabo_impl..currencytohr_azeri.digits2", async () => ["on", "iyirmi", "otuz", "qırx", "əlli", "altmış", "yetmiş", "səksən", "doxsan"]);
  await $.staticConst(L0, "digits3", "cucurrencytohr_azeriabo_impl..currencytohr_azeri.digits3", async () => ["", "min", "milyon", "milliard", "billiard", "trillion", "trilliard"]);
  L0["convertpart"] = $.fn(async function ConvertPart(p0) {
  const L1 = {"value": $.copyArg(p0), result: '', "index": 0};
  await $.fixArgs(L1, ["value"]);
  L1["wrap"] = $.fn(async function Wrap(p0, p1) {
  const L2 = {"value": $.copyArg(p0), "divider": $.copyArg(p1), result: 0};
  await $.fixArgs(L2, ["value", "divider"]);
  L2["result"] = (await $.call(C, "Round", [$.mul((await $.mcall((await $.v(C, "System")), "Frac", [$.fdiv(L2["value"], L2["divider"])])), L2["divider"])]));
  return L2.result;
});
  L1["merge"] = $.fn(async function Merge(p0, p1, p2) {
  const L2 = {"digits": $.copyArg(p0), "s": $.asRef(p1), "index": $.copyArg(p2), result: ''};
  await $.fixArgs(L2, ["digits", "index"]);
  if ($.truthy($.ne(L2["index"], 0))) {
    await L2["s"].set($.add($.add((await L2["s"].get()), " "), (await $.idx(L2["digits"], [$.sub(L2["index"], 1)]))));
  }
  return L2.result;
});
  L1["result"] = "";
  L1["index"] = (await $.call(C, "Trunc", [$.fdiv(L1["value"], 100)]));
  if ($.truthy($.ne(L1["index"], 0))) {
    if ($.truthy($.ne(L1["index"], 1))) {
      L1["result"] = $.add((await $.idx(L0["digits1"], [L1["index"]])), " ");
    }
    L1["result"] = $.add(L1["result"], L0["s100"]);
  }
  L1["value"] = (await $.callv(L1["wrap"], [L1["value"], 100]));
  await $.stmt((await $.callv(L1["merge"], [L0["digits2"], L1["result"], (await $.call(C, "Trunc", [$.fdiv(L1["value"], 10)]))])));
  L1["value"] = (await $.callv(L1["wrap"], [L1["value"], 10]));
  await $.stmt((await $.callv(L1["merge"], [L0["digits1"], L1["result"], L1["value"]])));
  L1["result"] = (await $.call(C, "Trim", [L1["result"]]));
  return L1.result;
});
  L0["convertint"] = $.fn(async function ConvertInt(p0) {
  const L1 = {"int": $.copyArg(p0), result: '', "part": 0, "counter": 0, "sign": ''};
  await $.fixArgs(L1, ["int"]);
  if ($.truthy($.lt(L1["int"], 0))) {
    L1["sign"] = "-";
    L1["int"] = (-(L1["int"]));
  } else {
    L1["sign"] = " ";
  }
  L1["counter"] = 0;
  while ($.truthy($.ne(L1["int"], 0))) {
    if ($.truthy($.gt(L1["counter"], (await $.lowHigh("high", "Digits3", async () => L0["digits3"]))))) {
      throw $.raise((await $.mcall((await $.v(C, "EInvalidOp")), "Create", ["Too big integer to convert"])));
    }
    L1["part"] = (await $.call(C, "Round", [$.mul((await $.mcall((await $.v(C, "System")), "Frac", [$.fdiv(L1["int"], 1000)])), 1000)]));
    L1["int"] = (await $.call(C, "Trunc", [$.fdiv(L1["int"], 1000)]));
    if ($.truthy($.ne(L1["part"], 0))) {
      L1["result"] = $.add($.add($.add($.add((await $.callv(L0["convertpart"], [L1["part"]])), " "), (await $.idx(L0["digits3"], [L1["counter"]]))), " "), L1["result"]);
    }
    await $.stmt((await $.call(C, "Inc", [$.ref(async () => L1["counter"], async ($t1) => { L1["counter"] = $t1; })])));
    await $.tick();
  }
  L1["result"] = (await $.call(C, "Trim", [$.add(L1["sign"], L1["result"])]));
  return L1.result;
});
  L0["convertfrac"] = $.fn(async function ConvertFrac(p0) {
  const L1 = {"value": $.copyArg(p0), result: '', "int": 0};
  await $.fixArgs(L1, ["value"]);
  L1["int"] = (await $.call(C, "Round", [$.mul(L1["value"], (await $.call(C, "Power", [10, L0["decimals"]])))]));
  if ($.truthy($.ne(L1["int"], 0))) {
    if ($.truthy($.in_((await $.v(C, "tfFracDigital")), L0["flags"]))) {
      L1["result"] = (await $.call(C, "IntToStr", [L1["int"]]));
    } else {
      L1["result"] = (await $.callv(L0["convertint"], [L1["int"]]));
    }
    if ($.truthy($.not(($.in_((await $.v(C, "tfNoCent")), L0["flags"]))))) {
      L1["result"] = $.add($.add(L1["result"], " "), L0["s001"]);
    }
    L1["result"] = (await $.call(C, "Trim", [L1["result"]]));
  } else {
    L1["result"] = "";
  }
  return L1.result;
});
  if ($.truthy($.ne((await $.call(C, "Round", [L0["value"]])), 0))) {
    L0["result"] = $.add($.add($.add((await $.callv(L0["convertint"], [(await $.call(C, "Round", [(await $.call(C, "Int", [L0["value"]]))]))])), " "), L0["currencyname"]), " ");
  }
  if ($.truthy($.not(($.in_((await $.v(C, "tfNoFrac")), L0["flags"]))))) {
    L0["result"] = $.add($.add(L0["result"], " "), (await $.callv(L0["convertfrac"], [(await $.call(C, "Frac", [L0["value"]]))])));
  }
  L0["result"] = (await $.call(C, "Trim", [L0["result"]]));
  return L0.result;
}, {"params": ["Value", "Decimals", "Flags", "CurrencyName"], "kind": "function", "ptypes": ["Extended", "Byte", "TTranslatorFlags", "String"]});
  return U;
}
