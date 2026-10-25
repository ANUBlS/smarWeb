// Generated from co_AccGetReport.pas by pas2js — do not edit by hand; regenerate instead.
/* eslint-disable */
// @ts-nocheck

export default function define($) {
  const U = $.unit("co_AccGetReport", ["SysUtils", "CO_Datamod_impl", "CO_Statement_unit", "Oracle", "Oracledata", "Dialogs", "Graphics"]);
  const C = [U];
  U.init(async () => {
    U.const("FinishPosition", 0);
    U.var_("Val_name", '', "String");
    U.var_("Accname", '', "String");
    U.var_("BegDat", 0, "TDateTime");
    U.var_("EndDat", 0, "TDateTime");
    U.var_("acc_id", 0, "Real");
  });
  U.func("SetFilterByVisibleValue", async function SetFilterByVisibleValue(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: undefined};
  {
    const $t1 = (await $.v(C, "co_statement"));
    const $t2 = (await $.wv([$t1], "CO_Datamod", C, false));
    const $t3 = (await $.wv([$t1, $t2], "OraDataSetMainExell", C, false));
    if ($.truthy((await $.mv((await $.wv([$t1, $t2, $t3], "CBTurnOver", C, false)), "Checked")))) {
      await $.wset([$t1, $t2, $t3], "Filtered", (await $.wv([$t1, $t2, $t3], "False", C, false)), C);
      await $.wset([$t1, $t2, $t3], "Filter", "(debet<>0) or (kredit<>0)", C);
      await $.wset([$t1, $t2, $t3], "Filtered", (await $.wv([$t1, $t2, $t3], "True", C, false)), C);
    } else {
      await $.wset([$t1, $t2, $t3], "Filter", "", C);
      await $.wset([$t1, $t2, $t3], "Filtered", (await $.wv([$t1, $t2, $t3], "False", C, false)), C);
    }
  }
  return L0.result;
}, {"params": [], "kind": "procedure", "ptypes": []});
  U.func("SetFotherReportCaption", async function SetFotherReportCaption(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"finishpos": $.copyArg(p0), result: undefined, "ostat": 0, "pok_ostat": 0};
  await $.fixArgs(L0, ["finishpos"]);
  { const $t4 = await $.iset((await $.mv((await $.v(C, "Sheet")), "Cells")), [L0["finishpos"], 2], "Günün sonuna qalıq:"); if ($t4 !== undefined) { await $.mset((await $.v(C, "Sheet")), "Cells", $t4); } }
  { const $t5 = await $.iset((await $.mv((await $.v(C, "Sheet")), "Cells")), [$.add(L0["finishpos"], 1), 2], "Valyutada:"); if ($t5 !== undefined) { await $.mset((await $.v(C, "Sheet")), "Cells", $t5); } }
  { const $t6 = await $.iset((await $.mv((await $.v(C, "Sheet")), "Cells")), [$.add(L0["finishpos"], 2), 2], "Ekvivalent:"); if ($t6 !== undefined) { await $.mset((await $.v(C, "Sheet")), "Cells", $t6); } }
  { const $t7 = await $.iset((await $.mv((await $.v(C, "Sheet")), "Cells")), [$.add((await $.v(C, "FinishPosition")), 3), 2], "Rəsmi məzənnə:"); if ($t7 !== undefined) { await $.mset((await $.v(C, "Sheet")), "Cells", $t7); } }
  {
    const $t8 = (await $.v(C, "CO_DataMod"));
    const $t9 = (await $.wv([$t8], "OraPackVExtraction", C, false));
    await $.stmt((await $.wcall([$t8, $t9], "CallProcedure", ["get_ostat", [(await $.wv([$t8, $t9], "acc_id", C, false)), (await $.wv([$t8, $t9], "EndDat", C, false)), "CURR", (await $.wv([$t8, $t9], "ostat", { get: async () => L0["ostat"], set: async (v) => { L0["ostat"] = v; }, local: true }, false)), (await $.wv([$t8, $t9], "pok_ostat", { get: async () => L0["pok_ostat"], set: async (v) => { L0["pok_ostat"] = v; }, local: true }, false))]], C)));
    { const $t10 = await $.iset((await $.mv((await $.wv([$t8, $t9], "Sheet", C, false)), "Cells")), [$.add((await $.wv([$t8, $t9], "FinishPos", { get: async () => L0["finishpos"], set: async (v) => { L0["finishpos"] = v; }, local: true }, false)), 1), 3], (await $.wcall([$t8, $t9], "FormatFloat", ["#,##0.00", (await $.wcall([$t8, $t9], "Abs", [(await $.wcall([$t8, $t9], "GetParameter", [3], C))], C))], C))); if ($t10 !== undefined) { await $.mset((await $.wv([$t8, $t9], "Sheet", C, false)), "Cells", $t10); } }
    { const $t11 = await $.iset((await $.mv((await $.wv([$t8, $t9], "Sheet", C, false)), "Cells")), [$.add((await $.wv([$t8, $t9], "FinishPos", { get: async () => L0["finishpos"], set: async (v) => { L0["finishpos"] = v; }, local: true }, false)), 2), 3], (await $.wcall([$t8, $t9], "FormatFloat", ["#,##0.00", (await $.wcall([$t8, $t9], "Abs", [(await $.wcall([$t8, $t9], "GetParameter", [4], C))], C))], C))); if ($t11 !== undefined) { await $.mset((await $.wv([$t8, $t9], "Sheet", C, false)), "Cells", $t11); } }
    { const $t12 = await $.iset((await $.mv((await $.wv([$t8, $t9], "Sheet", C, false)), "Cells")), [$.add((await $.wv([$t8, $t9], "FinishPosition", C, false)), 3), 3], (await $.wcall([$t8, $t9], "FloatToStr", [(await $.wcall([$t8, $t9], "CallFloatFunction", ["get_rate", [(await $.wv([$t8, $t9], "Acc_id", C, false)), (await $.wv([$t8, $t9], "EndDat", C, false))]], C))], C))); if ($t12 !== undefined) { await $.mset((await $.wv([$t8, $t9], "Sheet", C, false)), "Cells", $t12); } }
  }
  await $.mcall((await $.idx((await $.mv((await $.v(C, "Exl")), "Rows")), [$.add($.add((await $.call(C, "intToStr", [L0["finishpos"]])), ":"), (await $.call(C, "intToStr", [$.add(L0["finishpos"], 3)])))])), "Select", []);
  await $.mset((await $.mv((await $.mv((await $.v(C, "Exl")), "Selection")), "Font")), "Bold", true);
  await $.mset((await $.mv((await $.mv((await $.v(C, "Exl")), "Selection")), "Font")), "Name", "Arial AzLat");
  await $.set(C, "FinishPosition", $.add(L0["finishpos"], 3));
  return L0.result;
}, {"params": ["FinishPos"], "kind": "procedure", "ptypes": ["LongWord"]});
  U.func("ExportToExcelBySubAcc", async function ExportToExcelBySubAcc(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"acc": $.copyArg(p0), "byval": $.copyArg(p1), result: undefined, "begpos": 0};
  await $.fixArgs(L0, ["acc", "byval"]);
  {
    const $t13 = (await $.v(C, "CO_Statement"));
    const $t14 = (await $.wv([$t13], "CO_DataMod", C, false));
    const $t15 = (await $.wv([$t13, $t14], "OraDataSetMainExell", C, false));
    try {
      await $.stmt($.wcall([$t13, $t14, $t15], "SetFilterByVisibleValue", [], C));
      await $.stmt($.wcall([$t13, $t14, $t15], "Close", [], C));
      await $.stmt((await $.wcall([$t13, $t14, $t15], "SetVariable", ["acc_id", (await $.wv([$t13, $t14, $t15], "acc_id", C, false))], C)));
      await $.stmt((await $.wcall([$t13, $t14, $t15], "SetVariable", ["BeginDat", (await $.wv([$t13, $t14, $t15], "BegDat", C, false))], C)));
      await $.stmt((await $.wcall([$t13, $t14, $t15], "SetVariable", ["EndDat", (await $.wv([$t13, $t14, $t15], "EndDat", C, false))], C)));
      if ($.truthy((await $.wv([$t13, $t14, $t15], "ByVal", { get: async () => L0["byval"], set: async (v) => { L0["byval"] = v; }, local: true }, false)))) {
        await $.stmt((await $.wcall([$t13, $t14, $t15], "SetVariable", ["ByValD", "Ammount_c"], C)));
        await $.stmt((await $.wcall([$t13, $t14, $t15], "SetVariable", ["ByValK", "Ammount"], C)));
      } else {
        await $.stmt((await $.wcall([$t13, $t14, $t15], "SetVariable", ["ByValD", "LAmmount"], C)));
        await $.stmt((await $.wcall([$t13, $t14, $t15], "SetVariable", ["ByValK", "LAmmount"], C)));
      }
      await $.stmt($.wcall([$t13, $t14, $t15], "Open", [], C));
      if ($.truthy((await $.and_(((await $.mv((await $.wv([$t13, $t14, $t15], "CBTurnOver", C, false)), "Checked"))), async () => ((await $.wv([$t13, $t14, $t15], "IsEmpty", C, false))))))) {
        return L0.result;
      }
      await $.wset([$t13, $t14, $t15], "BegPos", $.add((await $.wv([$t13, $t14, $t15], "FinishPosition", C, false)), 9), { get: async () => L0["begpos"], set: async (v) => { L0["begpos"] = v; }, local: true });
      await $.stmt((await $.wcall([$t13, $t14, $t15], "ExportData", [(await $.wv([$t13, $t14, $t15], "OraDataSetMainExell", C, false)), $.add((await $.wv([$t13, $t14, $t15], "FinishPosition", C, false)), 9)], C)));
      await $.stmt((await $.wcall([$t13, $t14, $t15], "SetFotherReportCaption", [(await $.wv([$t13, $t14, $t15], "FinishPosition", C, false))], C)));
      await $.stmt((await $.wcall([$t13, $t14, $t15], "FormingData", [(await $.wv([$t13, $t14, $t15], "BegPos", { get: async () => L0["begpos"], set: async (v) => { L0["begpos"] = v; }, local: true }, false)), (await $.wv([$t13, $t14, $t15], "FinishPosition", C, false))], C)));
      await $.stmt($.wcall([$t13, $t14, $t15], "Close", [], C));
      await $.mcall((await $.idx((await $.mv((await $.wv([$t13, $t14, $t15], "Exl", C, false)), "Cells")), [1, 1])), "Select", []);
    } catch ($t16) {
      $.rethrowControl($t16);
      if ($.excIs($t16, "EOracleError")) {
        L0["e"] = $.exc($t16);
        await $.stmt((await $.wcall([$t13, $t14, $t15], "ShowMessage", [(await $.mv((await $.wv([$t13, $t14, $t15], "E", { get: async () => L0["e"], set: async (v) => { L0["e"] = v; }, local: true }, false)), "Message"))], C)));
      }
      else { throw $t16; }
    }
  }
  return L0.result;
}, {"params": ["Acc", "ByVal"], "kind": "procedure", "ptypes": ["String", "Boolean"]});
  U.func("FormingData", async function FormingData(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"beginpos": $.copyArg(p0), "finishpos": $.copyArg(p1), result: undefined};
  await $.fixArgs(L0, ["beginpos", "finishpos"]);
  await $.mcall((await $.idx((await $.mv((await $.v(C, "Exl")), "Rows")), [$.add($.add((await $.call(C, "intToStr", [L0["beginpos"]])), ":"), (await $.call(C, "intToStr", [L0["finishpos"]])))])), "Select", []);
  await $.mset((await $.mv((await $.mv((await $.v(C, "Exl")), "Selection")), "Font")), "Name", "Arial AzLat");
  await $.mcall((await $.idx((await $.mv((await $.v(C, "Exl")), "Range")), [$.add($.add($.add($.add((await $.call(C, "CHR", [$.add(64, 4)])), (await $.call(C, "IntToStr", [$.add(L0["beginpos"], 1)]))), ":"), (await $.call(C, "CHR", [$.add(64, 5)]))), (await $.call(C, "IntToStr", [L0["finishpos"]])))])), "Select", []);
  await $.mset((await $.mv((await $.v(C, "Exl")), "Selection")), "Style", "Comma");
  return L0.result;
}, {"params": ["BeginPos", "FinishPos"], "kind": "procedure", "ptypes": ["LongWord", "LongWord"]});
  U.func("ExportData", async function ExportData(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"dataset": $.copyArg(p0), "position": $.copyArg(p1), result: undefined, "col": 0, "row": 0};
  await $.fixArgs(L0, ["dataset", "position"]);
  {
    const $t17 = L0["dataset"];
    { const $t18 = $.sub((await $.wv([$t17], "FieldCount", C, false)), 4);
      await $.wset([$t17], "Col", 0, { get: async () => L0["col"], set: async (v) => { L0["col"] = v; }, local: true });
      let $t19 = true;
      for (;;) {
        if (!$t19) { await $.wset([$t17], "Col", $.succ((await $.wv([$t17], "Col", { get: async () => L0["col"], set: async (v) => { L0["col"] = v; }, local: true }, false)), 1), { get: async () => L0["col"], set: async (v) => { L0["col"] = v; }, local: true }); }
        $t19 = false;
        if (!($.ord((await $.wv([$t17], "Col", { get: async () => L0["col"], set: async (v) => { L0["col"] = v; }, local: true }, false))) <= $.ord($t18))) break;
        { const $t20 = await $.iset((await $.mv((await $.wv([$t17], "Sheet", C, false)), "Cells")), [(await $.wv([$t17], "Position", { get: async () => L0["position"], set: async (v) => { L0["position"] = v; }, local: true }, false)), $.add((await $.wv([$t17], "Col", { get: async () => L0["col"], set: async (v) => { L0["col"] = v; }, local: true }, false)), 1)], (await $.mv((await $.idx((await $.wv([$t17], "Fields", C, false)), [(await $.wv([$t17], "Col", { get: async () => L0["col"], set: async (v) => { L0["col"] = v; }, local: true }, false))])), "DisplayLabel"))); if ($t20 !== undefined) { await $.mset((await $.wv([$t17], "Sheet", C, false)), "Cells", $t20); } }
        await $.mset((await $.mv((await $.mv((await $.wv([$t17], "Exl", C, false)), "Selection")), "Font")), "Bold", (await $.wv([$t17], "True", C, false)));
        await $.tick();
      }
    }
    if ($.truthy($.not((await $.wv([$t17], "IsEmpty", C, false))))) {
      await $.stmt($.wcall([$t17], "First", [], C));
      await $.stmt((await $.wcall([$t17], "inc", [$.ref(async () => (await $.wv([$t17], "Position", { get: async () => L0["position"], set: async (v) => { L0["position"] = v; }, local: true }, false)), async ($t21) => { await $.wset([$t17], "Position", $t21, { get: async () => L0["position"], set: async (v) => { L0["position"] = v; }, local: true }); }), 1], C)));
      { const $t22 = $.sub($.add((await $.wv([$t17], "Position", { get: async () => L0["position"], set: async (v) => { L0["position"] = v; }, local: true }, false)), (await $.wv([$t17], "RecordCount", C, false))), 1);
        await $.wset([$t17], "Row", (await $.wv([$t17], "Position", { get: async () => L0["position"], set: async (v) => { L0["position"] = v; }, local: true }, false)), { get: async () => L0["row"], set: async (v) => { L0["row"] = v; }, local: true });
        let $t23 = true;
        for (;;) {
          if (!$t23) { await $.wset([$t17], "Row", $.succ((await $.wv([$t17], "Row", { get: async () => L0["row"], set: async (v) => { L0["row"] = v; }, local: true }, false)), 1), { get: async () => L0["row"], set: async (v) => { L0["row"] = v; }, local: true }); }
          $t23 = false;
          if (!($.ord((await $.wv([$t17], "Row", { get: async () => L0["row"], set: async (v) => { L0["row"] = v; }, local: true }, false))) <= $.ord($t22))) break;
          { const $t24 = $.sub((await $.wv([$t17], "FieldCount", C, false)), 4);
            await $.wset([$t17], "Col", 0, { get: async () => L0["col"], set: async (v) => { L0["col"] = v; }, local: true });
            let $t25 = true;
            for (;;) {
              if (!$t25) { await $.wset([$t17], "Col", $.succ((await $.wv([$t17], "Col", { get: async () => L0["col"], set: async (v) => { L0["col"] = v; }, local: true }, false)), 1), { get: async () => L0["col"], set: async (v) => { L0["col"] = v; }, local: true }); }
              $t25 = false;
              if (!($.ord((await $.wv([$t17], "Col", { get: async () => L0["col"], set: async (v) => { L0["col"] = v; }, local: true }, false))) <= $.ord($t24))) break;
              { const $t26 = await $.iset((await $.mv((await $.wv([$t17], "Sheet", C, false)), "Cells")), [(await $.wv([$t17], "Position", { get: async () => L0["position"], set: async (v) => { L0["position"] = v; }, local: true }, false)), $.add((await $.wv([$t17], "Col", { get: async () => L0["col"], set: async (v) => { L0["col"] = v; }, local: true }, false)), 1)], (await $.mv((await $.idx((await $.wv([$t17], "Fields", C, false)), [(await $.wv([$t17], "Col", { get: async () => L0["col"], set: async (v) => { L0["col"] = v; }, local: true }, false))])), "asString"))); if ($t26 !== undefined) { await $.mset((await $.wv([$t17], "Sheet", C, false)), "Cells", $t26); } }
              await $.tick();
            }
          }
          await $.stmt((await $.wcall([$t17], "inc", [$.ref(async () => (await $.wv([$t17], "Position", { get: async () => L0["position"], set: async (v) => { L0["position"] = v; }, local: true }, false)), async ($t27) => { await $.wset([$t17], "Position", $t27, { get: async () => L0["position"], set: async (v) => { L0["position"] = v; }, local: true }); }), 1], C)));
          if ($.truthy($.ne((await $.mv((await $.idx((await $.wv([$t17], "Fields", C, false)), [3])), "asFloat")), 0))) {
            { const $t28 = await $.iset((await $.mv((await $.wv([$t17], "Sheet", C, false)), "Cells")), [(await $.wv([$t17], "Position", { get: async () => L0["position"], set: async (v) => { L0["position"] = v; }, local: true }, false)), 4], (await $.mv((await $.idx((await $.wv([$t17], "Fields", C, false)), [6])), "asString"))); if ($t28 !== undefined) { await $.mset((await $.wv([$t17], "Sheet", C, false)), "Cells", $t28); } }
          } else {
            { const $t29 = await $.iset((await $.mv((await $.wv([$t17], "Sheet", C, false)), "Cells")), [(await $.wv([$t17], "Position", { get: async () => L0["position"], set: async (v) => { L0["position"] = v; }, local: true }, false)), 5], (await $.mv((await $.idx((await $.wv([$t17], "Fields", C, false)), [8])), "asString"))); if ($t29 !== undefined) { await $.mset((await $.wv([$t17], "Sheet", C, false)), "Cells", $t29); } }
          }
          await $.mcall((await $.idx((await $.mv((await $.wv([$t17], "Exl", C, false)), "Range")), [$.add($.add($.add($.add((await $.wcall([$t17], "CHR", [$.add(64, 4)], C)), (await $.wcall([$t17], "IntToStr", [(await $.wv([$t17], "Position", { get: async () => L0["position"], set: async (v) => { L0["position"] = v; }, local: true }, false))], C))), ":"), (await $.wcall([$t17], "CHR", [$.add(64, 5)], C))), (await $.wcall([$t17], "IntToStr", [(await $.wv([$t17], "Position", { get: async () => L0["position"], set: async (v) => { L0["position"] = v; }, local: true }, false))], C)))])), "Select", []);
          await $.mset((await $.mv((await $.mv((await $.wv([$t17], "Exl", C, false)), "Selection")), "Interior")), "ColorIndex", 14);
          await $.stmt((await $.wcall([$t17], "inc", [$.ref(async () => (await $.wv([$t17], "Position", { get: async () => L0["position"], set: async (v) => { L0["position"] = v; }, local: true }, false)), async ($t30) => { await $.wset([$t17], "Position", $t30, { get: async () => L0["position"], set: async (v) => { L0["position"] = v; }, local: true }); }), 1], C)));
          await $.stmt($.wcall([$t17], "Next", [], C));
          await $.tick();
        }
      }
    }
    await $.wset([$t17], "FinishPosition", (await $.wv([$t17], "Position", { get: async () => L0["position"], set: async (v) => { L0["position"] = v; }, local: true }, false)), C);
  }
  return L0.result;
}, {"params": ["DataSet", "Position"], "kind": "procedure", "ptypes": ["TOracleDataSet", "LongWord"]});
  U.func("GetByBal", async function GetByBal(Self, p0, p1, p2) {
  const C = $.chain(Self, U);
  const L0 = {"bal": $.copyArg(p0), "bdat": $.copyArg(p1), "edat": $.copyArg(p2), result: undefined};
  await $.fixArgs(L0, ["bal", "bdat", "edat"]);
  {
    const $t31 = (await $.v(C, "CO_DataMod"));
    const $t32 = (await $.wv([$t31], "OraPackVExtraction", C, false));
    if ($.truthy($.eq((await $.wcall([$t31, $t32], "CallFloatFunction", ["check_bal_number", [(await $.wv([$t31, $t32], "Bal", { get: async () => L0["bal"], set: async (v) => { L0["bal"] = v; }, local: true }, false))]], C)), 0))) {
      await $.stmt((await $.wcall([$t31, $t32], "ShowMessage", [$.add($.add("Sub Account: \"", (await $.wv([$t31, $t32], "Bal", { get: async () => L0["bal"], set: async (v) => { L0["bal"] = v; }, local: true }, false))), "\" not found")], C)));
    } else {
      {
        const $t33 = (await $.wv([$t31, $t32], "CO_DataMod", C, false));
        const $t34 = (await $.wv([$t31, $t32, $t33], "OraDataSetBalcns", C, false));
        await $.stmt((await $.wcall([$t31, $t32, $t33, $t34], "SetVariable", ["balcn", (await $.wv([$t31, $t32, $t33, $t34], "Bal", { get: async () => L0["bal"], set: async (v) => { L0["bal"] = v; }, local: true }, false))], C)));
        await $.stmt($.wcall([$t31, $t32, $t33, $t34], "Open", [], C));
        await $.stmt($.wcall([$t31, $t32, $t33, $t34], "First", [], C));
        while ($.truthy($.not((await $.wv([$t31, $t32, $t33, $t34], "EOF", C, false))))) {
          await $.stmt($.wcall([$t31, $t32, $t33, $t34], "Next", [], C));
          await $.tick();
        }
        await $.stmt($.wcall([$t31, $t32, $t33, $t34], "Close", [], C));
      }
    }
  }
  return L0.result;
}, {"params": ["Bal", "BDat", "EDat"], "kind": "procedure", "ptypes": ["String", "TDateTime", "TDateTime"]});
  U.func("GetAll", async function GetAll(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"bdat": $.copyArg(p0), "edat": $.copyArg(p1), result: undefined};
  await $.fixArgs(L0, ["bdat", "edat"]);
  {
    const $t35 = (await $.v(C, "CO_DataMod"));
    const $t36 = (await $.wv([$t35], "OraDataSetTurnBals", C, false));
    await $.stmt($.wcall([$t35, $t36], "Open", [], C));
    await $.stmt($.wcall([$t35, $t36], "First", [], C));
    while ($.truthy($.not((await $.wv([$t35, $t36], "EOF", C, false))))) {
      await $.stmt((await $.wcall([$t35, $t36], "GetByBal", [(await $.mv((await $.idx((await $.wv([$t35, $t36], "Fields", C, false)), [0])), "Value")), (await $.wv([$t35, $t36], "BDat", { get: async () => L0["bdat"], set: async (v) => { L0["bdat"] = v; }, local: true }, false)), (await $.wv([$t35, $t36], "EDat", { get: async () => L0["edat"], set: async (v) => { L0["edat"] = v; }, local: true }, false))], C)));
      await $.stmt($.wcall([$t35, $t36], "Next", [], C));
      await $.tick();
    }
    await $.stmt($.wcall([$t35, $t36], "Close", [], C));
  }
  return L0.result;
}, {"params": ["BDat", "EDat"], "kind": "procedure", "ptypes": ["TDateTime", "TDateTime"]});
  return U;
}
