// Generated from ApllPackUnit.pas by pas2js — do not edit by hand; regenerate instead.
/* eslint-disable */
// @ts-nocheck

export default function define($) {
  const U = $.unit("ApllPackUnit", ["SysUtils", "MasterBookImpl", "ComObj", "dialogs", "Db", "OracleData", "Oracle", "Controls"]);
  const C = [U];
  U.enumType("treptype", 2);
  U.const("rtAll", 0);
  U.const("rtOne", 1);
  U.init(async () => {
    U.const("Months", ["Yanvar", "Fevral", "Mart", "Aprel", "May", "İyun", "İyul", "Avqust", "Sentyabr", "Oktyabr", "Noyabr", "Dekabr"]);
    U.const("Capt", "____N-li hesabın kreditindən %s N-li jurnal-order üzrə");
    U.const("Debt_sumCol", "Cəmi debet üzrə");
    U.const("Sum_kreditCol", "Kredit üzrə dövriyyə");
    U.const("CapiSaldoCol", "Qalıq (saldo)");
    U.const("DebtCol", "Debet");
    U.const("KreditCol", "Kredit");
    U.const("MonthCol", "Ay");
    U.var_("XL", null, "Variant");
    U.var_("Sheet", null, "Variant");
    U.var_("MinDate", 0, "TDate");
    U.var_("MaxDate", 0, "TDate");
    U.var_("kredit_num", [], "array");
    U.var_("kredit_num_column", [], "array");
  });
  U.func("SearchArray", async function SearchArray(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"arr": $.copyArg(p0), "value": $.copyArg(p1), result: 0, "i": 0};
  await $.fixArgs(L0, ["arr", "value"]);
  { const $t1 = (await $.lowHigh("high", "arr", async () => L0["arr"]));
    L0["i"] = (await $.lowHigh("low", "arr", async () => L0["arr"]));
    let $t2 = true;
    for (;;) {
      if (!$t2) { L0["i"] = $.succ(L0["i"], 1); }
      $t2 = false;
      if (!($.ord(L0["i"]) <= $.ord($t1))) break;
      if ($.truthy($.eq(L0["value"], (await $.idx(L0["arr"], [L0["i"]]))))) {
        L0["result"] = L0["i"];
        break;
      } else {
        L0["result"] = 0;
      }
      await $.tick();
    }
  }
  return L0.result;
}, {"params": ["arr", "Value"], "kind": "function", "ptypes": [null, "String"]});
  U.func("SetCell", async function SetCell(Self, p0, p1, p2, p3, p4) {
  const C = $.chain(Self, U);
  const L0 = {"stoprow": $.copyArg(p0), "bal": $.copyArg(p1), "activ": $.copyArg(p2), "passiv": $.copyArg(p3), "name": (p4 === undefined ? "" : p4), result: undefined, "i": 0, "n": 0, "l": 0, "col": 0};
  await $.fixArgs(L0, ["stoprow", "bal", "activ", "passiv", "name"]);
  L0["getexlcol"] = $.fn(async function GetEXLCol(p0) {
  const L1 = {"num": $.copyArg(p0), result: '', "i": 0, "l": 0, "str": ''};
  await $.fixArgs(L1, ["num"]);
  L1["fonts"] = 26;
  L1["l"] = L1["num"];
  if ($.truthy($.lt(L1["l"], 0))) {
    L1["str"] = "A";
    L1["result"] = L1["str"];
    return L1.result;
  } else {
    if ($.truthy($.lt(L1["l"], L1["fonts"]))) {
      L1["str"] = (await $.call(C, "CHR", [$.add(65, L1["num"])]));
      L1["result"] = L1["str"];
      return L1.result;
    }
  }
  L1["i"] = 0;
  do {
    L1["str"] = (await $.call(C, "CHR", [$.add(65, L1["i"])]));
    await $.stmt((await $.call(C, "dec", [$.ref(async () => L1["l"], async ($t3) => { L1["l"] = $t3; }), L1["fonts"]])));
    await $.stmt((await $.call(C, "inc", [$.ref(async () => L1["i"], async ($t4) => { L1["i"] = $t4; })])));
    await $.tick();
  } while (!$.truthy($.lt(L1["l"], L1["fonts"])));
  if ($.truthy($.gt(L1["l"], 0))) {
    L1["str"] = $.add(L1["str"], (await $.call(C, "CHR", [$.add(65, L1["l"])])));
  }
  L1["result"] = L1["str"];
  return L1.result;
});
  await $.mset((await $.idx((await $.mv((await $.v(C, "XL")), "Range")), [$.add("B", (await $.call(C, "IntToStr", [L0["stoprow"]])))])), "value", L0["bal"]);
  await $.mset((await $.idx((await $.mv((await $.v(C, "XL")), "Range")), [$.add("C", (await $.call(C, "IntToStr", [L0["stoprow"]])))])), "value", L0["name"]);
  {
    const $t5 = (await $.v(C, "MasterBook"));
    const $t6 = (await $.wv([$t5], "KreditAccDataSet", C, false));
    await $.stmt((await $.wcall([$t5, $t6], "setVariable", ["Bal_cn", (await $.wv([$t5, $t6], "Bal", { get: async () => L0["bal"], set: async (v) => { L0["bal"] = v; }, local: true }, false))], C)));
    await $.stmt((await $.wcall([$t5, $t6], "setVariable", ["MinDate", (await $.wv([$t5, $t6], "MinDate", C, false))], C)));
    await $.stmt((await $.wcall([$t5, $t6], "setVariable", ["MaxDate", (await $.wv([$t5, $t6], "MaxDate", C, false))], C)));
    {
      const $t7 = (await $.wv([$t5, $t6], "CBBranch", C, false));
      if ($.truthy($.eq((await $.wv([$t5, $t6, $t7], "ItemIndex", C, false)), 0))) {
        await $.stmt((await $.wcall([$t5, $t6, $t7], "setVariable", ["wh", " "], C)));
      } else {
        await $.stmt((await $.wcall([$t5, $t6, $t7], "setVariable", ["wh", $.add(" where filial = ", (await $.wcall([$t5, $t6, $t7], "IntToStr", [(await $.idx((await $.wv([$t5, $t6, $t7], "Branch", C, false)), [(await $.wv([$t5, $t6, $t7], "ItemIndex", C, false))]))], C)))], C)));
      }
    }
    await $.stmt($.wcall([$t5, $t6], "Open", [], C));
    await $.stmt($.wcall([$t5, $t6], "First", [], C));
    await $.wset([$t5, $t6], "n", 0, { get: async () => L0["n"], set: async (v) => { L0["n"] = v; }, local: true });
    await $.wset([$t5, $t6], "kredit_num", null, C);
    await $.wset([$t5, $t6], "kredit_num_column", null, C);
    await $.stmt((await $.wcall([$t5, $t6], "SetLength", [$.ref(async () => (await $.wv([$t5, $t6], "kredit_num", C, false)), async ($t8) => { await $.wset([$t5, $t6], "kredit_num", $t8, C); }), (await $.wv([$t5, $t6], "RecordCount", C, false))], C)));
    await $.stmt((await $.wcall([$t5, $t6], "SetLength", [$.ref(async () => (await $.wv([$t5, $t6], "kredit_num_column", C, false)), async ($t9) => { await $.wset([$t5, $t6], "kredit_num_column", $t9, C); }), (await $.wv([$t5, $t6], "RecordCount", C, false))], C)));
    if ($.truthy($.not((await $.wv([$t5, $t6], "IsEmpty", C, false))))) {
      while ($.truthy($.not((await $.wv([$t5, $t6], "EOF", C, false))))) {
        { const $t10 = await $.iset((await $.wv([$t5, $t6], "kredit_num", C, false)), [(await $.wv([$t5, $t6], "n", { get: async () => L0["n"], set: async (v) => { L0["n"] = v; }, local: true }, false))], (await $.mv((await $.wcall([$t5, $t6], "fieldByName", ["BAL_CN_KREDIT"], C)), "asString"))); if ($t10 !== undefined) { await $.wset([$t5, $t6], "kredit_num", $t10, C); } }
        { const $t11 = await $.iset((await $.wv([$t5, $t6], "kredit_num_column", C, false)), [(await $.wv([$t5, $t6], "n", { get: async () => L0["n"], set: async (v) => { L0["n"] = v; }, local: true }, false))], (await $.wcall([$t5, $t6], "IntToStr", [$.add((await $.wv([$t5, $t6], "n", { get: async () => L0["n"], set: async (v) => { L0["n"] = v; }, local: true }, false)), 2)], C))); if ($t11 !== undefined) { await $.wset([$t5, $t6], "kredit_num_column", $t11, C); } }
        { const $t12 = await $.iset((await $.mv((await $.wv([$t5, $t6], "Sheet", C, false)), "Cells")), [$.add((await $.wv([$t5, $t6], "StopRow", { get: async () => L0["stoprow"], set: async (v) => { L0["stoprow"] = v; }, local: true }, false)), 1), (await $.wcall([$t5, $t6], "StrToInt", [(await $.idx((await $.wv([$t5, $t6], "kredit_num_column", C, false)), [(await $.wv([$t5, $t6], "n", { get: async () => L0["n"], set: async (v) => { L0["n"] = v; }, local: true }, false))]))], C))], (await $.mv((await $.wcall([$t5, $t6], "fieldByName", ["BAL_CN_KREDIT"], C)), "asString"))); if ($t12 !== undefined) { await $.mset((await $.wv([$t5, $t6], "Sheet", C, false)), "Cells", $t12); } }
        await $.stmt($.wcall([$t5, $t6], "Next", [], C));
        await $.stmt((await $.wcall([$t5, $t6], "inc", [$.ref(async () => (await $.wv([$t5, $t6], "n", { get: async () => L0["n"], set: async (v) => { L0["n"] = v; }, local: true }, false)), async ($t13) => { await $.wset([$t5, $t6], "n", $t13, { get: async () => L0["n"], set: async (v) => { L0["n"] = v; }, local: true }); })], C)));
        await $.tick();
      }
      await $.stmt((await $.wcall([$t5, $t6], "dec", [$.ref(async () => (await $.wv([$t5, $t6], "n", { get: async () => L0["n"], set: async (v) => { L0["n"] = v; }, local: true }, false)), async ($t14) => { await $.wset([$t5, $t6], "n", $t14, { get: async () => L0["n"], set: async (v) => { L0["n"] = v; }, local: true }); })], C)));
    }
    await $.stmt($.wcall([$t5, $t6], "Close", [], C));
    try {
      { const $t16 = await $.iset((await $.mv((await $.wv([$t5, $t6], "Sheet", C, false)), "Cells")), [$.add((await $.wv([$t5, $t6], "StopRow", { get: async () => L0["stoprow"], set: async (v) => { L0["stoprow"] = v; }, local: true }, false)), 1), $.add((await $.wv([$t5, $t6], "n", { get: async () => L0["n"], set: async (v) => { L0["n"] = v; }, local: true }, false)), 3)], (await $.wv([$t5, $t6], "Debt_sumCol", C, false))); if ($t16 !== undefined) { await $.mset((await $.wv([$t5, $t6], "Sheet", C, false)), "Cells", $t16); } }
      { const $t17 = await $.iset((await $.mv((await $.wv([$t5, $t6], "Sheet", C, false)), "Cells")), [$.add((await $.wv([$t5, $t6], "StopRow", { get: async () => L0["stoprow"], set: async (v) => { L0["stoprow"] = v; }, local: true }, false)), 1), $.add((await $.wv([$t5, $t6], "n", { get: async () => L0["n"], set: async (v) => { L0["n"] = v; }, local: true }, false)), 4)], (await $.wv([$t5, $t6], "Sum_kreditCol", C, false))); if ($t17 !== undefined) { await $.mset((await $.wv([$t5, $t6], "Sheet", C, false)), "Cells", $t17); } }
      { const $t18 = await $.iset((await $.mv((await $.wv([$t5, $t6], "Sheet", C, false)), "Cells")), [$.add((await $.wv([$t5, $t6], "StopRow", { get: async () => L0["stoprow"], set: async (v) => { L0["stoprow"] = v; }, local: true }, false)), 1), $.add((await $.wv([$t5, $t6], "n", { get: async () => L0["n"], set: async (v) => { L0["n"] = v; }, local: true }, false)), 5)], (await $.wv([$t5, $t6], "CapiSaldoCol", C, false))); if ($t18 !== undefined) { await $.mset((await $.wv([$t5, $t6], "Sheet", C, false)), "Cells", $t18); } }
      { const $t19 = await $.iset((await $.mv((await $.wv([$t5, $t6], "Sheet", C, false)), "Cells")), [$.add((await $.wv([$t5, $t6], "StopRow", { get: async () => L0["stoprow"], set: async (v) => { L0["stoprow"] = v; }, local: true }, false)), 2), $.add((await $.wv([$t5, $t6], "n", { get: async () => L0["n"], set: async (v) => { L0["n"] = v; }, local: true }, false)), 5)], (await $.wv([$t5, $t6], "DebtCol", C, false))); if ($t19 !== undefined) { await $.mset((await $.wv([$t5, $t6], "Sheet", C, false)), "Cells", $t19); } }
      { const $t20 = await $.iset((await $.mv((await $.wv([$t5, $t6], "Sheet", C, false)), "Cells")), [$.add((await $.wv([$t5, $t6], "StopRow", { get: async () => L0["stoprow"], set: async (v) => { L0["stoprow"] = v; }, local: true }, false)), 3), $.add((await $.wv([$t5, $t6], "n", { get: async () => L0["n"], set: async (v) => { L0["n"] = v; }, local: true }, false)), 5)], (await $.wv([$t5, $t6], "Activ", { get: async () => L0["activ"], set: async (v) => { L0["activ"] = v; }, local: true }, false))); if ($t20 !== undefined) { await $.mset((await $.wv([$t5, $t6], "Sheet", C, false)), "Cells", $t20); } }
      { const $t21 = await $.iset((await $.mv((await $.wv([$t5, $t6], "Sheet", C, false)), "Cells")), [$.add((await $.wv([$t5, $t6], "StopRow", { get: async () => L0["stoprow"], set: async (v) => { L0["stoprow"] = v; }, local: true }, false)), 2), $.add((await $.wv([$t5, $t6], "n", { get: async () => L0["n"], set: async (v) => { L0["n"] = v; }, local: true }, false)), 6)], (await $.wv([$t5, $t6], "KreditCol", C, false))); if ($t21 !== undefined) { await $.mset((await $.wv([$t5, $t6], "Sheet", C, false)), "Cells", $t21); } }
      { const $t22 = await $.iset((await $.mv((await $.wv([$t5, $t6], "Sheet", C, false)), "Cells")), [$.add((await $.wv([$t5, $t6], "StopRow", { get: async () => L0["stoprow"], set: async (v) => { L0["stoprow"] = v; }, local: true }, false)), 3), $.add((await $.wv([$t5, $t6], "n", { get: async () => L0["n"], set: async (v) => { L0["n"] = v; }, local: true }, false)), 6)], (await $.wv([$t5, $t6], "passiv", { get: async () => L0["passiv"], set: async (v) => { L0["passiv"] = v; }, local: true }, false))); if ($t22 !== undefined) { await $.mset((await $.wv([$t5, $t6], "Sheet", C, false)), "Cells", $t22); } }
      { const $t23 = await $.iset((await $.mv((await $.wv([$t5, $t6], "Sheet", C, false)), "Cells")), [$.add((await $.wv([$t5, $t6], "StopRow", { get: async () => L0["stoprow"], set: async (v) => { L0["stoprow"] = v; }, local: true }, false)), 1), $.add((await $.wv([$t5, $t6], "n", { get: async () => L0["n"], set: async (v) => { L0["n"] = v; }, local: true }, false)), 7)], (await $.wv([$t5, $t6], "MonthCol", C, false))); if ($t23 !== undefined) { await $.mset((await $.wv([$t5, $t6], "Sheet", C, false)), "Cells", $t23); } }
    } catch ($t15) {
      $.rethrowControl($t15);
      $.handled($t15);
      await $.stmt((await $.wcall([$t5, $t6], "ShowMessage", [$.add($.add($.add($.add((await $.wcall([$t5, $t6], "intToStr", [(await $.wv([$t5, $t6], "l", { get: async () => L0["l"], set: async (v) => { L0["l"] = v; }, local: true }, false))], C)), "  "), (await $.wcall([$t5, $t6], "intToStr", [(await $.wv([$t5, $t6], "StopRow", { get: async () => L0["stoprow"], set: async (v) => { L0["stoprow"] = v; }, local: true }, false))], C))), "  "), (await $.wcall([$t5, $t6], "intToStr", [$.add((await $.wv([$t5, $t6], "n", { get: async () => L0["n"], set: async (v) => { L0["n"] = v; }, local: true }, false)), 5)], C)))], C)));
    }
  }
  await $.mset((await $.idx((await $.mv((await $.v(C, "XL")), "Range")), [$.add("A", (await $.call(C, "IntToStr", [$.add(L0["stoprow"], 1)])))])), "value", (await $.v(C, "MonthCol")));
  { const $t24 = $.add(L0["stoprow"], 15);
    L0["i"] = $.add(L0["stoprow"], 4);
    let $t25 = true;
    for (;;) {
      if (!$t25) { L0["i"] = $.succ(L0["i"], 1); }
      $t25 = false;
      if (!($.ord(L0["i"]) <= $.ord($t24))) break;
      await $.mset((await $.idx((await $.mv((await $.v(C, "XL")), "Range")), [$.add("A", (await $.call(C, "IntToStr", [L0["i"]])))])), "value", (await $.idx((await $.v(C, "Months")), [$.sub($.sub(L0["i"], L0["stoprow"]), 3)])));
      await $.tick();
    }
  }
  {
    const $t26 = (await $.v(C, "MasterBook"));
    const $t27 = (await $.wv([$t26], "ObrDebtDataSet", C, false));
    await $.stmt((await $.wcall([$t26, $t27], "setVariable", ["Bal_cn", (await $.wv([$t26, $t27], "Bal", { get: async () => L0["bal"], set: async (v) => { L0["bal"] = v; }, local: true }, false))], C)));
    await $.stmt((await $.wcall([$t26, $t27], "setVariable", ["MinDate", (await $.wv([$t26, $t27], "MinDate", C, false))], C)));
    await $.stmt((await $.wcall([$t26, $t27], "setVariable", ["MaxDate", (await $.wv([$t26, $t27], "MaxDate", C, false))], C)));
    {
      const $t28 = (await $.wv([$t26, $t27], "CBBranch", C, false));
      if ($.truthy($.eq((await $.wv([$t26, $t27, $t28], "ItemIndex", C, false)), 0))) {
        await $.stmt((await $.wcall([$t26, $t27, $t28], "setVariable", ["wh", " "], C)));
      } else {
        await $.stmt((await $.wcall([$t26, $t27, $t28], "setVariable", ["wh", $.add(" where filial = ", (await $.wcall([$t26, $t27, $t28], "IntToStr", [(await $.idx((await $.wv([$t26, $t27, $t28], "Branch", C, false)), [(await $.wv([$t26, $t27, $t28], "ItemIndex", C, false))]))], C)))], C)));
      }
    }
    await $.stmt($.wcall([$t26, $t27], "Open", [], C));
    await $.stmt($.wcall([$t26, $t27], "First", [], C));
    while ($.truthy($.not((await $.wv([$t26, $t27], "EOF", C, false))))) {
      { const $t29 = await $.iset((await $.mv((await $.wv([$t26, $t27], "Sheet", C, false)), "Cells")), [$.add($.add((await $.wcall([$t26, $t27], "StrToInt", [(await $.mv((await $.wcall([$t26, $t27], "FieldByName", ["MONTH"], C)), "AsString"))], C)), (await $.wv([$t26, $t27], "StopRow", { get: async () => L0["stoprow"], set: async (v) => { L0["stoprow"] = v; }, local: true }, false))), 3), (await $.wcall([$t26, $t27], "StrToInt", [(await $.idx((await $.wv([$t26, $t27], "kredit_num_column", C, false)), [(await $.wcall([$t26, $t27], "SearchArray", [(await $.wv([$t26, $t27], "kredit_num", C, false)), (await $.mv((await $.wcall([$t26, $t27], "FieldByName", ["BAL_CN_KREDIT"], C)), "AsString"))], C))]))], C))], (await $.mv((await $.wcall([$t26, $t27], "FieldByName", ["obr"], C)), "AsString"))); if ($t29 !== undefined) { await $.mset((await $.wv([$t26, $t27], "Sheet", C, false)), "Cells", $t29); } }
      await $.stmt($.wcall([$t26, $t27], "Next", [], C));
      await $.tick();
    }
    await $.stmt($.wcall([$t26, $t27], "Close", [], C));
  }
  {
    const $t30 = (await $.v(C, "MasterBook"));
    const $t31 = (await $.wv([$t30], "DataSetSumDebt", C, false));
    await $.stmt((await $.wcall([$t30, $t31], "setVariable", ["Bal_cn", (await $.wv([$t30, $t31], "Bal", { get: async () => L0["bal"], set: async (v) => { L0["bal"] = v; }, local: true }, false))], C)));
    await $.stmt((await $.wcall([$t30, $t31], "setVariable", ["MinDate", (await $.wv([$t30, $t31], "MinDate", C, false))], C)));
    await $.stmt((await $.wcall([$t30, $t31], "setVariable", ["MaxDate", (await $.wv([$t30, $t31], "MaxDate", C, false))], C)));
    {
      const $t32 = (await $.wv([$t30, $t31], "CBBranch", C, false));
      if ($.truthy($.eq((await $.wv([$t30, $t31, $t32], "ItemIndex", C, false)), 0))) {
        await $.stmt((await $.wcall([$t30, $t31, $t32], "setVariable", ["wh", " "], C)));
      } else {
        await $.stmt((await $.wcall([$t30, $t31, $t32], "setVariable", ["wh", $.add(" where filial = ", (await $.wcall([$t30, $t31, $t32], "IntToStr", [(await $.idx((await $.wv([$t30, $t31, $t32], "Branch", C, false)), [(await $.wv([$t30, $t31, $t32], "ItemIndex", C, false))]))], C)))], C)));
      }
    }
    await $.stmt($.wcall([$t30, $t31], "Open", [], C));
    await $.stmt($.wcall([$t30, $t31], "First", [], C));
    while ($.truthy($.not((await $.wv([$t30, $t31], "EOF", C, false))))) {
      { const $t33 = await $.iset((await $.mv((await $.wv([$t30, $t31], "Sheet", C, false)), "Cells")), [$.add($.add((await $.wcall([$t30, $t31], "StrToInt", [(await $.mv((await $.wcall([$t30, $t31], "FieldByName", ["MONTH"], C)), "AsString"))], C)), (await $.wv([$t30, $t31], "stopRow", { get: async () => L0["stoprow"], set: async (v) => { L0["stoprow"] = v; }, local: true }, false))), 3), $.add((await $.wv([$t30, $t31], "n", { get: async () => L0["n"], set: async (v) => { L0["n"] = v; }, local: true }, false)), 3)], (await $.mv((await $.wcall([$t30, $t31], "FieldByName", ["obrdebt"], C)), "AsString"))); if ($t33 !== undefined) { await $.mset((await $.wv([$t30, $t31], "Sheet", C, false)), "Cells", $t33); } }
      await $.stmt($.wcall([$t30, $t31], "Next", [], C));
      await $.tick();
    }
    await $.stmt($.wcall([$t30, $t31], "Close", [], C));
  }
  {
    const $t34 = (await $.v(C, "MasterBook"));
    const $t35 = (await $.wv([$t34], "DataSetSumKredit", C, false));
    await $.stmt((await $.wcall([$t34, $t35], "setVariable", ["Bal_cn", (await $.wv([$t34, $t35], "Bal", { get: async () => L0["bal"], set: async (v) => { L0["bal"] = v; }, local: true }, false))], C)));
    await $.stmt((await $.wcall([$t34, $t35], "setVariable", ["MinDate", (await $.wv([$t34, $t35], "MinDate", C, false))], C)));
    await $.stmt((await $.wcall([$t34, $t35], "setVariable", ["MaxDate", (await $.wv([$t34, $t35], "MaxDate", C, false))], C)));
    {
      const $t36 = (await $.wv([$t34, $t35], "CBBranch", C, false));
      if ($.truthy($.eq((await $.wv([$t34, $t35, $t36], "ItemIndex", C, false)), 0))) {
        await $.stmt((await $.wcall([$t34, $t35, $t36], "setVariable", ["wh", " "], C)));
      } else {
        await $.stmt((await $.wcall([$t34, $t35, $t36], "setVariable", ["wh", $.add(" where filial = ", (await $.wcall([$t34, $t35, $t36], "IntToStr", [(await $.idx((await $.wv([$t34, $t35, $t36], "Branch", C, false)), [(await $.wv([$t34, $t35, $t36], "ItemIndex", C, false))]))], C)))], C)));
      }
    }
    await $.stmt($.wcall([$t34, $t35], "Open", [], C));
    await $.stmt($.wcall([$t34, $t35], "First", [], C));
    while ($.truthy($.not((await $.wv([$t34, $t35], "EOF", C, false))))) {
      { const $t37 = await $.iset((await $.mv((await $.wv([$t34, $t35], "Sheet", C, false)), "Cells")), [$.add($.add((await $.wcall([$t34, $t35], "StrToInt", [(await $.mv((await $.wcall([$t34, $t35], "FieldByName", ["MONTH"], C)), "AsString"))], C)), (await $.wv([$t34, $t35], "stopRow", { get: async () => L0["stoprow"], set: async (v) => { L0["stoprow"] = v; }, local: true }, false))), 3), $.add((await $.wv([$t34, $t35], "n", { get: async () => L0["n"], set: async (v) => { L0["n"] = v; }, local: true }, false)), 4)], (await $.mv((await $.wcall([$t34, $t35], "FieldByName", ["OBRKREDIT"], C)), "AsString"))); if ($t37 !== undefined) { await $.mset((await $.wv([$t34, $t35], "Sheet", C, false)), "Cells", $t37); } }
      await $.stmt($.wcall([$t34, $t35], "Next", [], C));
      await $.tick();
    }
    await $.stmt($.wcall([$t34, $t35], "Close", [], C));
  }
  {
    const $t38 = (await $.v(C, "MasterBook"));
    const $t39 = (await $.wv([$t38], "DataSetSumSaldo", C, false));
    await $.stmt((await $.wcall([$t38, $t39], "setVariable", ["Bal_cn", (await $.wv([$t38, $t39], "Bal", { get: async () => L0["bal"], set: async (v) => { L0["bal"] = v; }, local: true }, false))], C)));
    await $.stmt((await $.wcall([$t38, $t39], "setVariable", ["MinDate", (await $.wv([$t38, $t39], "MinDate", C, false))], C)));
    await $.stmt((await $.wcall([$t38, $t39], "setVariable", ["MaxDate", (await $.wv([$t38, $t39], "MaxDate", C, false))], C)));
    {
      const $t40 = (await $.wv([$t38, $t39], "CBBranch", C, false));
      if ($.truthy($.eq((await $.wv([$t38, $t39, $t40], "ItemIndex", C, false)), 0))) {
        await $.stmt((await $.wcall([$t38, $t39, $t40], "setVariable", ["fil", " "], C)));
      } else {
        await $.stmt((await $.wcall([$t38, $t39, $t40], "setVariable", ["fil", $.add(" and filial = ", (await $.wcall([$t38, $t39, $t40], "IntToStr", [(await $.idx((await $.wv([$t38, $t39, $t40], "Branch", C, false)), [(await $.wv([$t38, $t39, $t40], "ItemIndex", C, false))]))], C)))], C)));
      }
    }
    await $.stmt($.wcall([$t38, $t39], "Open", [], C));
    await $.stmt($.wcall([$t38, $t39], "First", [], C));
    while ($.truthy($.not((await $.wv([$t38, $t39], "EOF", C, false))))) {
      { const $t41 = await $.iset((await $.mv((await $.wv([$t38, $t39], "Sheet", C, false)), "Cells")), [(await $.wcall([$t38, $t39], "IntToStr", [$.add($.add((await $.wcall([$t38, $t39], "StrToInt", [(await $.mv((await $.wcall([$t38, $t39], "FieldByName", ["MONTH"], C)), "AsString"))], C)), (await $.wv([$t38, $t39], "stopRow", { get: async () => L0["stoprow"], set: async (v) => { L0["stoprow"] = v; }, local: true }, false))), 3)], C)), $.add((await $.wv([$t38, $t39], "n", { get: async () => L0["n"], set: async (v) => { L0["n"] = v; }, local: true }, false)), 5)], (await $.mv((await $.wcall([$t38, $t39], "FieldByName", ["ACTIVE"], C)), "AsString"))); if ($t41 !== undefined) { await $.mset((await $.wv([$t38, $t39], "Sheet", C, false)), "Cells", $t41); } }
      { const $t42 = await $.iset((await $.mv((await $.wv([$t38, $t39], "Sheet", C, false)), "Cells")), [(await $.wcall([$t38, $t39], "IntToStr", [$.add($.add((await $.wcall([$t38, $t39], "StrToInt", [(await $.mv((await $.wcall([$t38, $t39], "FieldByName", ["MONTH"], C)), "AsString"))], C)), (await $.wv([$t38, $t39], "stopRow", { get: async () => L0["stoprow"], set: async (v) => { L0["stoprow"] = v; }, local: true }, false))), 3)], C)), $.add((await $.wv([$t38, $t39], "n", { get: async () => L0["n"], set: async (v) => { L0["n"] = v; }, local: true }, false)), 6)], (await $.mv((await $.wcall([$t38, $t39], "FieldByName", ["PASSIVE"], C)), "AsString"))); if ($t42 !== undefined) { await $.mset((await $.wv([$t38, $t39], "Sheet", C, false)), "Cells", $t42); } }
      await $.stmt($.wcall([$t38, $t39], "Next", [], C));
      await $.tick();
    }
    await $.stmt($.wcall([$t38, $t39], "Close", [], C));
  }
  { const $t43 = $.add(L0["stoprow"], 15);
    L0["i"] = $.add(L0["stoprow"], 4);
    let $t44 = true;
    for (;;) {
      if (!$t44) { L0["i"] = $.succ(L0["i"], 1); }
      $t44 = false;
      if (!($.ord(L0["i"]) <= $.ord($t43))) break;
      { const $t45 = await $.iset((await $.mv((await $.v(C, "Sheet")), "Cells")), [(await $.call(C, "IntToStr", [L0["i"]])), $.add(L0["n"], 7)], (await $.idx((await $.v(C, "Months")), [$.sub($.sub(L0["i"], L0["stoprow"]), 3)]))); if ($t45 !== undefined) { await $.mset((await $.v(C, "Sheet")), "Cells", $t45); } }
      await $.tick();
    }
  }
  { const $t46 = (await $.lowHigh("high", "kredit_num_column", async () => (await $.v(C, "kredit_num_column"))));
    L0["i"] = (await $.lowHigh("low", "kredit_num_column", async () => (await $.v(C, "kredit_num_column"))));
    let $t47 = true;
    for (;;) {
      if (!$t47) { L0["i"] = $.succ(L0["i"], 1); }
      $t47 = false;
      if (!($.ord(L0["i"]) <= $.ord($t46))) break;
      { const $t48 = await $.iset((await $.mv((await $.v(C, "Sheet")), "Cells")), [(await $.call(C, "IntToStr", [$.add(L0["stoprow"], 17)])), $.add(L0["i"], 2)], $.add($.add($.add($.add($.add($.add("=SUM(", (await $.callv(L0["getexlcol"], [$.add(L0["i"], 1)]))), (await $.call(C, "IntToStr", [$.add(L0["stoprow"], 4)]))), ":"), (await $.callv(L0["getexlcol"], [$.add(L0["i"], 1)]))), (await $.call(C, "IntToStr", [$.add(L0["stoprow"], 15)]))), ")")); if ($t48 !== undefined) { await $.mset((await $.v(C, "Sheet")), "Cells", $t48); } }
      await $.tick();
    }
  }
  L0["col"] = $.add((await $.lowHigh("high", "kredit_num_column", async () => (await $.v(C, "kredit_num_column")))), 1);
  { const $t49 = 2;
    L0["i"] = 1;
    let $t50 = true;
    for (;;) {
      if (!$t50) { L0["i"] = $.succ(L0["i"], 1); }
      $t50 = false;
      if (!($.ord(L0["i"]) <= $.ord($t49))) break;
      await $.mset((await $.idx((await $.mv((await $.v(C, "XL")), "Range")), [$.add((await $.callv(L0["getexlcol"], [$.add(L0["col"], L0["i"])])), (await $.call(C, "IntToStr", [$.add(L0["stoprow"], 17)])))])), "value", $.add($.add($.add($.add($.add($.add("=SUM(", (await $.callv(L0["getexlcol"], [$.add(L0["col"], L0["i"])]))), (await $.call(C, "IntToStr", [$.add(L0["stoprow"], 4)]))), ":"), (await $.callv(L0["getexlcol"], [$.add(L0["col"], L0["i"])]))), (await $.call(C, "IntToStr", [$.add(L0["stoprow"], 15)]))), ")"));
      await $.tick();
    }
  }
  await $.mset((await $.idx((await $.mv((await $.v(C, "XL")), "Range")), [$.add((await $.callv(L0["getexlcol"], [$.add(L0["col"], 3)])), (await $.call(C, "IntToStr", [$.add(L0["stoprow"], 17)])))])), "value", (await $.mv((await $.idx((await $.mv((await $.v(C, "XL")), "Range")), [$.add((await $.callv(L0["getexlcol"], [$.add(L0["col"], 3)])), (await $.call(C, "IntToStr", [$.add(L0["stoprow"], 15)])))])), "value")));
  await $.mset((await $.idx((await $.mv((await $.v(C, "XL")), "Range")), [$.add((await $.callv(L0["getexlcol"], [$.add(L0["col"], 4)])), (await $.call(C, "IntToStr", [$.add(L0["stoprow"], 17)])))])), "value", (await $.mv((await $.idx((await $.mv((await $.v(C, "XL")), "Range")), [$.add((await $.callv(L0["getexlcol"], [$.add(L0["col"], 4)])), (await $.call(C, "IntToStr", [$.add(L0["stoprow"], 15)])))])), "value")));
  await $.mcall((await $.idx((await $.mv((await $.v(C, "XL")), "Range")), [$.add("A", (await $.call(C, "InTtoStr", [L0["stoprow"]]))), $.add((await $.callv(L0["getexlcol"], [$.add(L0["n"], 6)])), (await $.call(C, "IntToStr", [$.add(L0["stoprow"], 17)])))])), "Select", []);
  await $.mset((await $.mv((await $.mv((await $.v(C, "XL")), "Selection")), "Font")), "name", "Tahoma");
  await $.mset((await $.mv((await $.mv((await $.v(C, "XL")), "Selection")), "Borders")), "Color", 0);
  await $.mcall((await $.idx((await $.mv((await $.v(C, "XL")), "Range")), [$.add("A", (await $.call(C, "InTtoStr", [L0["stoprow"]]))), $.add((await $.callv(L0["getexlcol"], [$.add(L0["n"], 6)])), (await $.call(C, "IntToStr", [L0["stoprow"]])))])), "Select", []);
  await $.mset((await $.mv((await $.mv((await $.v(C, "XL")), "Selection")), "Font")), "Size", 15);
  await $.mset((await $.mv((await $.mv((await $.v(C, "XL")), "Selection")), "Font")), "Bold", true);
  await $.mcall((await $.idx((await $.mv((await $.v(C, "XL")), "Range")), [$.add("A", (await $.call(C, "InTtoStr", [$.add(L0["stoprow"], 1)]))), $.add((await $.callv(L0["getexlcol"], [$.add(L0["n"], 6)])), (await $.call(C, "IntToStr", [$.add(L0["stoprow"], 3)])))])), "Select", []);
  await $.mset((await $.mv((await $.mv((await $.v(C, "XL")), "Selection")), "Font")), "Bold", true);
  await $.mcall((await $.idx((await $.mv((await $.v(C, "XL")), "Range")), [$.add("A", (await $.call(C, "InTtoStr", [L0["stoprow"]]))), $.add("A", (await $.call(C, "IntToStr", [$.add(L0["stoprow"], 15)])))])), "Select", []);
  await $.mset((await $.mv((await $.mv((await $.v(C, "XL")), "Selection")), "Font")), "Bold", true);
  await $.mset((await $.mv((await $.v(C, "XL")), "Selection")), "ColumnWidth", 25);
  await $.mcall((await $.idx((await $.mv((await $.v(C, "XL")), "Range")), [$.add((await $.callv(L0["getexlcol"], [$.add(L0["n"], 4)])), (await $.call(C, "IntToStr", [L0["stoprow"]]))), $.add((await $.callv(L0["getexlcol"], [$.add(L0["n"], 6)])), (await $.call(C, "IntToStr", [$.add(L0["stoprow"], 17)])))])), "Select", []);
  await $.mset((await $.mv((await $.mv((await $.v(C, "XL")), "Selection")), "Font")), "Bold", true);
  await $.mset((await $.mv((await $.v(C, "XL")), "Selection")), "ColumnWidth", 25);
  await $.mcall((await $.idx((await $.mv((await $.v(C, "XL")), "Range")), [$.add("B", (await $.call(C, "IntToStr", [$.add(L0["stoprow"], 3)]))), $.add((await $.callv(L0["getexlcol"], [$.add(L0["n"], 6)])), (await $.call(C, "IntToStr", [$.add(L0["stoprow"], 17)])))])), "Select", []);
  await $.mset((await $.mv((await $.v(C, "XL")), "Selection")), "Style", "Comma");
  await $.mset((await $.mv((await $.v(C, "XL")), "Selection")), "ColumnWidth", 25);
  return L0.result;
}, {"params": ["stopRow", "bal", "activ", "passiv", "name"], "kind": "procedure", "ptypes": ["Integer", "WideString", "Real", "Real", "WideString"]});
  U.func("ExoprtExcel", async function ExoprtExcel(Self, p0, p1, p2, p3) {
  const C = $.chain(Self, U);
  const L0 = {"beginturn": $.copyArg(p0), "endturn": $.copyArg(p1), "type_": $.copyArg(p2), "bal": (p3 === undefined ? "" : p3), result: undefined, "row": 0};
  await $.fixArgs(L0, ["beginturn", "endturn", "type_", "bal"]);
  try {
    await $.set(C, "XL", (await $.call(C, "CreateOLEObject", ["Excel.Application"])));
    await $.mcall((await $.mv((await $.v(C, "XL")), "WorkBooks")), "add", []);
    await $.set(C, "Sheet", (await $.idx((await $.mv((await $.mv((await $.mv((await $.v(C, "XL")), "Application")), "Worksheets")), "Item")), [1])));
  } catch ($t51) {
    $.rethrowControl($t51);
    $.handled($t51);
    await $.stmt((await $.call(C, "ShowMessage", ["Can not create Excel file!"])));
    return L0.result;
  }
  await $.set(C, "minDate", L0["beginturn"]);
  await $.set(C, "maxDate", L0["endturn"]);
  {
    const $t52 = (await $.v(C, "MasterBook"));
    const $t53 = (await $.wv([$t52], "DataSetGetBalName", C, false));
    await $.stmt($.wcall([$t52, $t53], "Close", [], C));
    await $.stmt((await $.wcall([$t52, $t53], "SetVariable", ["minDat", (await $.wv([$t52, $t53], "mindate", C, false))], C)));
    {
      const $t54 = (await $.wv([$t52, $t53], "CBBranch", C, false));
      if ($.truthy($.eq((await $.wv([$t52, $t53, $t54], "ItemIndex", C, false)), 0))) {
        await $.stmt((await $.wcall([$t52, $t53, $t54], "setVariable", ["fil", " "], C)));
      } else {
        await $.stmt((await $.wcall([$t52, $t53, $t54], "setVariable", ["fil", $.add(" and filial = ", (await $.wcall([$t52, $t53, $t54], "IntToStr", [(await $.idx((await $.wv([$t52, $t53, $t54], "Branch", C, false)), [(await $.wv([$t52, $t53, $t54], "ItemIndex", C, false))]))], C)))], C)));
      }
    }
    await $.stmt($.wcall([$t52, $t53], "Open", [], C));
    if ($.truthy($.eq((await $.wv([$t52, $t53], "Type_", { get: async () => L0["type_"], set: async (v) => { L0["type_"] = v; }, local: true }, false)), (await $.wv([$t52, $t53], "rtAll", C, false))))) {
      await $.wset([$t52, $t53], "Row", 1, { get: async () => L0["row"], set: async (v) => { L0["row"] = v; }, local: true });
      await $.mset((await $.wv([$t52, $t53], "ProgressBar", C, false)), "MaxValue", (await $.wv([$t52, $t53], "RecordCount", C, false)));
      await $.stmt($.wcall([$t52, $t53], "First", [], C));
      while ($.truthy($.not((await $.wv([$t52, $t53], "EOF", C, false))))) {
        await $.stmt((await $.wcall([$t52, $t53], "SetCell", [(await $.wv([$t52, $t53], "row", { get: async () => L0["row"], set: async (v) => { L0["row"] = v; }, local: true }, false)), (await $.mv((await $.wcall([$t52, $t53], "FieldByName", ["BAL_CN"], C)), "asString")), (await $.mv((await $.wcall([$t52, $t53], "FieldByName", ["ACTIVE"], C)), "AsFloat")), (await $.mv((await $.wcall([$t52, $t53], "FieldByName", ["PASSIV"], C)), "AsFloat")), (await $.mv((await $.wcall([$t52, $t53], "FieldByName", ["BALNAME"], C)), "asString"))], C)));
        await $.stmt((await $.wcall([$t52, $t53], "inc", [$.ref(async () => (await $.wv([$t52, $t53], "row", { get: async () => L0["row"], set: async (v) => { L0["row"] = v; }, local: true }, false)), async ($t55) => { await $.wset([$t52, $t53], "row", $t55, { get: async () => L0["row"], set: async (v) => { L0["row"] = v; }, local: true }); }), 21], C)));
        await $.mset((await $.wv([$t52, $t53], "ProgressBar", C, false)), "Progress", $.add((await $.mv((await $.wv([$t52, $t53], "ProgressBar", C, false)), "Progress")), 1));
        await $.stmt($.wcall([$t52, $t53], "Next", [], C));
        await $.tick();
      }
    } else {
      await $.stmt((await $.wcall([$t52, $t53], "Locate", ["BAL_CN", (await $.wv([$t52, $t53], "Bal", { get: async () => L0["bal"], set: async (v) => { L0["bal"] = v; }, local: true }, false)), []], C)));
      await $.stmt((await $.wcall([$t52, $t53], "SetCell", [1, (await $.wv([$t52, $t53], "Bal", { get: async () => L0["bal"], set: async (v) => { L0["bal"] = v; }, local: true }, false)), (await $.mv((await $.wcall([$t52, $t53], "FieldByName", ["ACTIVE"], C)), "AsFloat")), (await $.mv((await $.wcall([$t52, $t53], "FieldByName", ["PASSIV"], C)), "AsFloat")), (await $.mv((await $.wcall([$t52, $t53], "FieldByName", ["BALNAME"], C)), "asString"))], C)));
    }
    await $.stmt($.wcall([$t52, $t53], "Close", [], C));
  }
  try {
    await $.mcall((await $.idx((await $.mv((await $.v(C, "XL")), "Range")), ["A1"])), "Select", []);
    await $.mset((await $.v(C, "XL")), "visible", true);
    await $.mset((await $.mv((await $.v(C, "MasterBook")), "ProgressBar")), "Progress", 100);
  } finally {
    await $.stmt((await $.call(C, "Finalize", [(await $.v(C, "Sheet"))])));
    await $.stmt((await $.call(C, "Finalize", [(await $.v(C, "xl"))])));
    await $.mset((await $.mv((await $.v(C, "MasterBook")), "ProgressBar")), "Progress", 0);
  }
  return L0.result;
}, {"params": ["BeginTurn", "EndTurn", "Type_", "Bal"], "kind": "procedure", "ptypes": ["TDate", "TDate", "TRepType", "WideString"]});
  return U;
}
