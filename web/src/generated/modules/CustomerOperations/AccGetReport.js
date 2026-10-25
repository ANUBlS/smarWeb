// Generated from AccGetReport.pas by pas2js — do not edit by hand; regenerate instead.
/* eslint-disable */
// @ts-nocheck

export default function define($) {
  const U = $.unit("AccGetReport", ["SysUtils", "Oracle", "OracleData", "StatementDataModule", "StatementImpl", "Dialogs", "Graphics"]);
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
    const $t1 = (await $.v(C, "StatementX"));
    const $t2 = (await $.wv([$t1], "StatementDataModNew", C, false));
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
  U.func("SetHeaderReportCaption", async function SetHeaderReportCaption(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"acc": $.copyArg(p0), result: undefined, "ostat": 0, "pok_ostat": 0};
  await $.fixArgs(L0, ["acc"]);
  {
    const $t4 = (await $.v(C, "StatementDataModNew"));
    const $t5 = (await $.wv([$t4], "OraDataSetMainExell", C, false));
    const $t6 = (await $.wv([$t4, $t5], "OraPackVExtraction", C, false));
    try {
      await $.mcall((await $.idx((await $.mv((await $.wv([$t4, $t5, $t6], "Exl", C, false)), "Range")), ["A:A"])), "select", []);
      await $.mset((await $.mv((await $.wv([$t4, $t5, $t6], "Exl", C, false)), "Selection")), "NumberFormat", "m/d/yyyy");
      { const $t8 = await $.iset((await $.mv((await $.wv([$t4, $t5, $t6], "Sheet", C, false)), "Cells")), [$.add((await $.wv([$t4, $t5, $t6], "FinishPosition", C, false)), 1), 5], $.add("Hesab No:  ", (await $.wv([$t4, $t5, $t6], "Acc", { get: async () => L0["acc"], set: async (v) => { L0["acc"] = v; }, local: true }, false)))); if ($t8 !== undefined) { await $.mset((await $.wv([$t4, $t5, $t6], "Sheet", C, false)), "Cells", $t8); } }
      { const $t9 = await $.iset((await $.mv((await $.wv([$t4, $t5, $t6], "Sheet", C, false)), "Cells")), [$.add((await $.wv([$t4, $t5, $t6], "FinishPosition", C, false)), 2), 5], $.add("Hesabın adı:  ", (await $.wv([$t4, $t5, $t6], "Accname", C, false)))); if ($t9 !== undefined) { await $.mset((await $.wv([$t4, $t5, $t6], "Sheet", C, false)), "Cells", $t9); } }
      { const $t10 = await $.iset((await $.mv((await $.wv([$t4, $t5, $t6], "Sheet", C, false)), "Cells")), [$.add((await $.wv([$t4, $t5, $t6], "FinishPosition", C, false)), 3), 2], "Əməlliyatın tarixi:"); if ($t10 !== undefined) { await $.mset((await $.wv([$t4, $t5, $t6], "Sheet", C, false)), "Cells", $t10); } }
      { const $t11 = await $.iset((await $.mv((await $.wv([$t4, $t5, $t6], "Sheet", C, false)), "Cells")), [$.add((await $.wv([$t4, $t5, $t6], "FinishPosition", C, false)), 3), 3], (await $.wcall([$t4, $t5, $t6], "FormatDateTime", ["dd-mmm-yyyy", (await $.wv([$t4, $t5, $t6], "BegDat", C, false))], C))); if ($t11 !== undefined) { await $.mset((await $.wv([$t4, $t5, $t6], "Sheet", C, false)), "Cells", $t11); } }
      { const $t12 = await $.iset((await $.mv((await $.wv([$t4, $t5, $t6], "Sheet", C, false)), "Cells")), [$.add((await $.wv([$t4, $t5, $t6], "FinishPosition", C, false)), 3), 4], (await $.wcall([$t4, $t5, $t6], "FormatDateTime", ["dd-mmm-yyyy", (await $.wv([$t4, $t5, $t6], "EndDat", C, false))], C))); if ($t12 !== undefined) { await $.mset((await $.wv([$t4, $t5, $t6], "Sheet", C, false)), "Cells", $t12); } }
      { const $t13 = await $.iset((await $.mv((await $.wv([$t4, $t5, $t6], "Sheet", C, false)), "Cells")), [$.add((await $.wv([$t4, $t5, $t6], "FinishPosition", C, false)), 4), 2], "Valyuta:"); if ($t13 !== undefined) { await $.mset((await $.wv([$t4, $t5, $t6], "Sheet", C, false)), "Cells", $t13); } }
      { const $t14 = await $.iset((await $.mv((await $.wv([$t4, $t5, $t6], "Sheet", C, false)), "Cells")), [$.add((await $.wv([$t4, $t5, $t6], "FinishPosition", C, false)), 4), 3], (await $.wv([$t4, $t5, $t6], "Val_name", C, false))); if ($t14 !== undefined) { await $.mset((await $.wv([$t4, $t5, $t6], "Sheet", C, false)), "Cells", $t14); } }
      { const $t15 = await $.iset((await $.mv((await $.wv([$t4, $t5, $t6], "Sheet", C, false)), "Cells")), [$.add((await $.wv([$t4, $t5, $t6], "FinishPosition", C, false)), 5), 2], "Günün əvvəlinə qalıq:"); if ($t15 !== undefined) { await $.mset((await $.wv([$t4, $t5, $t6], "Sheet", C, false)), "Cells", $t15); } }
      { const $t16 = await $.iset((await $.mv((await $.wv([$t4, $t5, $t6], "Sheet", C, false)), "Cells")), [$.add((await $.wv([$t4, $t5, $t6], "FinishPosition", C, false)), 6), 2], "Valyutada:"); if ($t16 !== undefined) { await $.mset((await $.wv([$t4, $t5, $t6], "Sheet", C, false)), "Cells", $t16); } }
      { const $t17 = await $.iset((await $.mv((await $.wv([$t4, $t5, $t6], "Sheet", C, false)), "Cells")), [$.add((await $.wv([$t4, $t5, $t6], "FinishPosition", C, false)), 7), 2], "Ekvivalent:"); if ($t17 !== undefined) { await $.mset((await $.wv([$t4, $t5, $t6], "Sheet", C, false)), "Cells", $t17); } }
      { const $t18 = await $.iset((await $.mv((await $.wv([$t4, $t5, $t6], "Sheet", C, false)), "Cells")), [$.add((await $.wv([$t4, $t5, $t6], "FinishPosition", C, false)), 8), 2], "Rəsmi məzənnə:"); if ($t18 !== undefined) { await $.mset((await $.wv([$t4, $t5, $t6], "Sheet", C, false)), "Cells", $t18); } }
      { const $t19 = await $.iset((await $.mv((await $.wv([$t4, $t5, $t6], "Sheet", C, false)), "Cells")), [$.add((await $.wv([$t4, $t5, $t6], "FinishPosition", C, false)), 8), 3], (await $.wcall([$t4, $t5, $t6], "FloatToStr", [(await $.wcall([$t4, $t5, $t6], "CallFloatFunction", ["get_rate", [(await $.wv([$t4, $t5, $t6], "Acc_id", C, false)), (await $.wv([$t4, $t5, $t6], "BegDat", C, false))]], C))], C))); if ($t19 !== undefined) { await $.mset((await $.wv([$t4, $t5, $t6], "Sheet", C, false)), "Cells", $t19); } }
      await $.stmt((await $.wcall([$t4, $t5, $t6], "CallProcedure", ["get_ostat", [(await $.wv([$t4, $t5, $t6], "acc_id", C, false)), (await $.wv([$t4, $t5, $t6], "BegDat", C, false)), "OLD", (await $.wv([$t4, $t5, $t6], "ostat", { get: async () => L0["ostat"], set: async (v) => { L0["ostat"] = v; }, local: true }, false)), (await $.wv([$t4, $t5, $t6], "pok_ostat", { get: async () => L0["pok_ostat"], set: async (v) => { L0["pok_ostat"] = v; }, local: true }, false))]], C)));
      { const $t20 = await $.iset((await $.mv((await $.wv([$t4, $t5, $t6], "Sheet", C, false)), "Cells")), [$.add((await $.wv([$t4, $t5, $t6], "FinishPosition", C, false)), 6), 3], (await $.wcall([$t4, $t5, $t6], "FormatFloat", ["#,##0.00", (await $.wcall([$t4, $t5, $t6], "Abs", [(await $.wcall([$t4, $t5, $t6], "GetParameter", [3], C))], C))], C))); if ($t20 !== undefined) { await $.mset((await $.wv([$t4, $t5, $t6], "Sheet", C, false)), "Cells", $t20); } }
      { const $t21 = await $.iset((await $.mv((await $.wv([$t4, $t5, $t6], "Sheet", C, false)), "Cells")), [$.add((await $.wv([$t4, $t5, $t6], "FinishPosition", C, false)), 7), 3], (await $.wcall([$t4, $t5, $t6], "FormatFloat", ["#,##0.00", (await $.wcall([$t4, $t5, $t6], "Abs", [(await $.wcall([$t4, $t5, $t6], "GetParameter", [4], C))], C))], C))); if ($t21 !== undefined) { await $.mset((await $.wv([$t4, $t5, $t6], "Sheet", C, false)), "Cells", $t21); } }
      await $.mcall((await $.idx((await $.mv((await $.wv([$t4, $t5, $t6], "Exl", C, false)), "Rows")), [$.add($.add((await $.wcall([$t4, $t5, $t6], "IntToStr", [$.add((await $.wv([$t4, $t5, $t6], "FinishPosition", C, false)), 1)], C)), ":"), (await $.wcall([$t4, $t5, $t6], "IntToStr", [$.add((await $.wv([$t4, $t5, $t6], "FinishPosition", C, false)), 9)], C)))])), "Select", []);
      await $.mset((await $.mv((await $.mv((await $.wv([$t4, $t5, $t6], "Exl", C, false)), "Selection")), "Font")), "Bold", (await $.wv([$t4, $t5, $t6], "True", C, false)));
      await $.mset((await $.mv((await $.mv((await $.wv([$t4, $t5, $t6], "Exl", C, false)), "Selection")), "Font")), "Name", "Arial AzLat");
    } catch ($t7) {
      $.rethrowControl($t7);
      if ($.excIs($t7, "EOracleError")) {
        L0["e"] = $.exc($t7);
        await $.stmt((await $.wcall([$t4, $t5, $t6], "showmessage", [(await $.mv((await $.wv([$t4, $t5, $t6], "E", { get: async () => L0["e"], set: async (v) => { L0["e"] = v; }, local: true }, false)), "Message"))], C)));
      }
      else { throw $t7; }
    }
  }
  return L0.result;
}, {"params": ["Acc"], "kind": "procedure", "ptypes": ["String"]});
  U.func("SetFotherReportCaption", async function SetFotherReportCaption(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"finishpos": $.copyArg(p0), result: undefined, "ostat": 0, "pok_ostat": 0};
  await $.fixArgs(L0, ["finishpos"]);
  { const $t22 = await $.iset((await $.mv((await $.v(C, "Sheet")), "Cells")), [L0["finishpos"], 2], "Günün sonuna qalıq:"); if ($t22 !== undefined) { await $.mset((await $.v(C, "Sheet")), "Cells", $t22); } }
  { const $t23 = await $.iset((await $.mv((await $.v(C, "Sheet")), "Cells")), [$.add(L0["finishpos"], 1), 2], "Valyutada:"); if ($t23 !== undefined) { await $.mset((await $.v(C, "Sheet")), "Cells", $t23); } }
  { const $t24 = await $.iset((await $.mv((await $.v(C, "Sheet")), "Cells")), [$.add(L0["finishpos"], 2), 2], "Ekvivalent:"); if ($t24 !== undefined) { await $.mset((await $.v(C, "Sheet")), "Cells", $t24); } }
  { const $t25 = await $.iset((await $.mv((await $.v(C, "Sheet")), "Cells")), [$.add((await $.v(C, "FinishPosition")), 3), 2], "Rəsmi məzənnə:"); if ($t25 !== undefined) { await $.mset((await $.v(C, "Sheet")), "Cells", $t25); } }
  {
    const $t26 = (await $.v(C, "StatementDataModNew"));
    const $t27 = (await $.wv([$t26], "OraPackVExtraction", C, false));
    await $.stmt((await $.wcall([$t26, $t27], "CallProcedure", ["get_ostat", [(await $.wv([$t26, $t27], "acc_id", C, false)), (await $.wv([$t26, $t27], "EndDat", C, false)), "CURR", (await $.wv([$t26, $t27], "ostat", { get: async () => L0["ostat"], set: async (v) => { L0["ostat"] = v; }, local: true }, false)), (await $.wv([$t26, $t27], "pok_ostat", { get: async () => L0["pok_ostat"], set: async (v) => { L0["pok_ostat"] = v; }, local: true }, false))]], C)));
    { const $t28 = await $.iset((await $.mv((await $.wv([$t26, $t27], "Sheet", C, false)), "Cells")), [$.add((await $.wv([$t26, $t27], "FinishPos", { get: async () => L0["finishpos"], set: async (v) => { L0["finishpos"] = v; }, local: true }, false)), 1), 3], (await $.wcall([$t26, $t27], "FormatFloat", ["#,##0.00", (await $.wcall([$t26, $t27], "Abs", [(await $.wcall([$t26, $t27], "GetParameter", [3], C))], C))], C))); if ($t28 !== undefined) { await $.mset((await $.wv([$t26, $t27], "Sheet", C, false)), "Cells", $t28); } }
    { const $t29 = await $.iset((await $.mv((await $.wv([$t26, $t27], "Sheet", C, false)), "Cells")), [$.add((await $.wv([$t26, $t27], "FinishPos", { get: async () => L0["finishpos"], set: async (v) => { L0["finishpos"] = v; }, local: true }, false)), 2), 3], (await $.wcall([$t26, $t27], "FormatFloat", ["#,##0.00", (await $.wcall([$t26, $t27], "Abs", [(await $.wcall([$t26, $t27], "GetParameter", [4], C))], C))], C))); if ($t29 !== undefined) { await $.mset((await $.wv([$t26, $t27], "Sheet", C, false)), "Cells", $t29); } }
    { const $t30 = await $.iset((await $.mv((await $.wv([$t26, $t27], "Sheet", C, false)), "Cells")), [$.add((await $.wv([$t26, $t27], "FinishPosition", C, false)), 3), 3], (await $.wcall([$t26, $t27], "FloatToStr", [(await $.wcall([$t26, $t27], "CallFloatFunction", ["get_rate", [(await $.wv([$t26, $t27], "Acc_id", C, false)), (await $.wv([$t26, $t27], "EndDat", C, false))]], C))], C))); if ($t30 !== undefined) { await $.mset((await $.wv([$t26, $t27], "Sheet", C, false)), "Cells", $t30); } }
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
    const $t31 = (await $.v(C, "StatementX"));
    const $t32 = (await $.wv([$t31], "StatementDataModNew", C, false));
    const $t33 = (await $.wv([$t31, $t32], "OraDataSetMainExell", C, false));
    try {
      await $.stmt($.wcall([$t31, $t32, $t33], "SetFilterByVisibleValue", [], C));
      await $.stmt($.wcall([$t31, $t32, $t33], "Close", [], C));
      await $.stmt((await $.wcall([$t31, $t32, $t33], "SetVariable", ["acc_id", (await $.wv([$t31, $t32, $t33], "acc_id", C, false))], C)));
      await $.stmt((await $.wcall([$t31, $t32, $t33], "SetVariable", ["BeginDat", (await $.wv([$t31, $t32, $t33], "BegDat", C, false))], C)));
      await $.stmt((await $.wcall([$t31, $t32, $t33], "SetVariable", ["EndDat", (await $.wv([$t31, $t32, $t33], "EndDat", C, false))], C)));
      if ($.truthy((await $.wv([$t31, $t32, $t33], "ByVal", { get: async () => L0["byval"], set: async (v) => { L0["byval"] = v; }, local: true }, false)))) {
        await $.stmt((await $.wcall([$t31, $t32, $t33], "SetVariable", ["ByValD", "Ammount_c"], C)));
        await $.stmt((await $.wcall([$t31, $t32, $t33], "SetVariable", ["ByValK", "Ammount"], C)));
      } else {
        await $.stmt((await $.wcall([$t31, $t32, $t33], "SetVariable", ["ByValD", "LAmmount"], C)));
        await $.stmt((await $.wcall([$t31, $t32, $t33], "SetVariable", ["ByValK", "LAmmount"], C)));
      }
      await $.stmt($.wcall([$t31, $t32, $t33], "Open", [], C));
      if ($.truthy((await $.and_(((await $.mv((await $.wv([$t31, $t32, $t33], "CBTurnOver", C, false)), "Checked"))), async () => ((await $.wv([$t31, $t32, $t33], "IsEmpty", C, false))))))) {
        return L0.result;
      }
      await $.stmt((await $.wcall([$t31, $t32, $t33], "SetHeaderReportCaption", [(await $.wv([$t31, $t32, $t33], "Acc", { get: async () => L0["acc"], set: async (v) => { L0["acc"] = v; }, local: true }, false))], C)));
      await $.wset([$t31, $t32, $t33], "BegPos", $.add((await $.wv([$t31, $t32, $t33], "FinishPosition", C, false)), 9), { get: async () => L0["begpos"], set: async (v) => { L0["begpos"] = v; }, local: true });
      await $.stmt((await $.wcall([$t31, $t32, $t33], "ExportData", [(await $.wv([$t31, $t32, $t33], "OraDataSetMainExell", C, false)), $.add((await $.wv([$t31, $t32, $t33], "FinishPosition", C, false)), 9)], C)));
      await $.stmt((await $.wcall([$t31, $t32, $t33], "SetFotherReportCaption", [(await $.wv([$t31, $t32, $t33], "FinishPosition", C, false))], C)));
      await $.stmt((await $.wcall([$t31, $t32, $t33], "FormingData", [(await $.wv([$t31, $t32, $t33], "BegPos", { get: async () => L0["begpos"], set: async (v) => { L0["begpos"] = v; }, local: true }, false)), (await $.wv([$t31, $t32, $t33], "FinishPosition", C, false))], C)));
      await $.stmt($.wcall([$t31, $t32, $t33], "Close", [], C));
      await $.mcall((await $.idx((await $.mv((await $.wv([$t31, $t32, $t33], "Exl", C, false)), "Cells")), [1, 1])), "Select", []);
    } catch ($t34) {
      $.rethrowControl($t34);
      if ($.excIs($t34, "EOracleError")) {
        L0["e"] = $.exc($t34);
        await $.stmt((await $.wcall([$t31, $t32, $t33], "ShowMessage", [(await $.mv((await $.wv([$t31, $t32, $t33], "E", { get: async () => L0["e"], set: async (v) => { L0["e"] = v; }, local: true }, false)), "Message"))], C)));
      }
      else { throw $t34; }
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
    const $t35 = L0["dataset"];
    { const $t36 = $.sub((await $.wv([$t35], "FieldCount", C, false)), 4);
      await $.wset([$t35], "Col", 0, { get: async () => L0["col"], set: async (v) => { L0["col"] = v; }, local: true });
      let $t37 = true;
      for (;;) {
        if (!$t37) { await $.wset([$t35], "Col", $.succ((await $.wv([$t35], "Col", { get: async () => L0["col"], set: async (v) => { L0["col"] = v; }, local: true }, false)), 1), { get: async () => L0["col"], set: async (v) => { L0["col"] = v; }, local: true }); }
        $t37 = false;
        if (!($.ord((await $.wv([$t35], "Col", { get: async () => L0["col"], set: async (v) => { L0["col"] = v; }, local: true }, false))) <= $.ord($t36))) break;
        { const $t38 = await $.iset((await $.mv((await $.wv([$t35], "Sheet", C, false)), "Cells")), [(await $.wv([$t35], "Position", { get: async () => L0["position"], set: async (v) => { L0["position"] = v; }, local: true }, false)), $.add((await $.wv([$t35], "Col", { get: async () => L0["col"], set: async (v) => { L0["col"] = v; }, local: true }, false)), 1)], (await $.mv((await $.idx((await $.wv([$t35], "Fields", C, false)), [(await $.wv([$t35], "Col", { get: async () => L0["col"], set: async (v) => { L0["col"] = v; }, local: true }, false))])), "DisplayLabel"))); if ($t38 !== undefined) { await $.mset((await $.wv([$t35], "Sheet", C, false)), "Cells", $t38); } }
        await $.mset((await $.mv((await $.mv((await $.wv([$t35], "Exl", C, false)), "Selection")), "Font")), "Bold", (await $.wv([$t35], "True", C, false)));
        await $.tick();
      }
    }
    if ($.truthy($.not((await $.wv([$t35], "IsEmpty", C, false))))) {
      await $.stmt($.wcall([$t35], "First", [], C));
      await $.stmt((await $.wcall([$t35], "inc", [$.ref(async () => (await $.wv([$t35], "Position", { get: async () => L0["position"], set: async (v) => { L0["position"] = v; }, local: true }, false)), async ($t39) => { await $.wset([$t35], "Position", $t39, { get: async () => L0["position"], set: async (v) => { L0["position"] = v; }, local: true }); }), 1], C)));
      { const $t40 = $.sub($.add((await $.wv([$t35], "Position", { get: async () => L0["position"], set: async (v) => { L0["position"] = v; }, local: true }, false)), (await $.wv([$t35], "RecordCount", C, false))), 1);
        await $.wset([$t35], "Row", (await $.wv([$t35], "Position", { get: async () => L0["position"], set: async (v) => { L0["position"] = v; }, local: true }, false)), { get: async () => L0["row"], set: async (v) => { L0["row"] = v; }, local: true });
        let $t41 = true;
        for (;;) {
          if (!$t41) { await $.wset([$t35], "Row", $.succ((await $.wv([$t35], "Row", { get: async () => L0["row"], set: async (v) => { L0["row"] = v; }, local: true }, false)), 1), { get: async () => L0["row"], set: async (v) => { L0["row"] = v; }, local: true }); }
          $t41 = false;
          if (!($.ord((await $.wv([$t35], "Row", { get: async () => L0["row"], set: async (v) => { L0["row"] = v; }, local: true }, false))) <= $.ord($t40))) break;
          { const $t42 = $.sub((await $.wv([$t35], "FieldCount", C, false)), 4);
            await $.wset([$t35], "Col", 0, { get: async () => L0["col"], set: async (v) => { L0["col"] = v; }, local: true });
            let $t43 = true;
            for (;;) {
              if (!$t43) { await $.wset([$t35], "Col", $.succ((await $.wv([$t35], "Col", { get: async () => L0["col"], set: async (v) => { L0["col"] = v; }, local: true }, false)), 1), { get: async () => L0["col"], set: async (v) => { L0["col"] = v; }, local: true }); }
              $t43 = false;
              if (!($.ord((await $.wv([$t35], "Col", { get: async () => L0["col"], set: async (v) => { L0["col"] = v; }, local: true }, false))) <= $.ord($t42))) break;
              { const $t44 = await $.iset((await $.mv((await $.wv([$t35], "Sheet", C, false)), "Cells")), [(await $.wv([$t35], "Position", { get: async () => L0["position"], set: async (v) => { L0["position"] = v; }, local: true }, false)), $.add((await $.wv([$t35], "Col", { get: async () => L0["col"], set: async (v) => { L0["col"] = v; }, local: true }, false)), 1)], (await $.mv((await $.idx((await $.wv([$t35], "Fields", C, false)), [(await $.wv([$t35], "Col", { get: async () => L0["col"], set: async (v) => { L0["col"] = v; }, local: true }, false))])), "asString"))); if ($t44 !== undefined) { await $.mset((await $.wv([$t35], "Sheet", C, false)), "Cells", $t44); } }
              await $.tick();
            }
          }
          await $.stmt((await $.wcall([$t35], "inc", [$.ref(async () => (await $.wv([$t35], "Position", { get: async () => L0["position"], set: async (v) => { L0["position"] = v; }, local: true }, false)), async ($t45) => { await $.wset([$t35], "Position", $t45, { get: async () => L0["position"], set: async (v) => { L0["position"] = v; }, local: true }); }), 1], C)));
          if ($.truthy($.ne((await $.mv((await $.idx((await $.wv([$t35], "Fields", C, false)), [3])), "asFloat")), 0))) {
            { const $t46 = await $.iset((await $.mv((await $.wv([$t35], "Sheet", C, false)), "Cells")), [(await $.wv([$t35], "Position", { get: async () => L0["position"], set: async (v) => { L0["position"] = v; }, local: true }, false)), 4], (await $.mv((await $.idx((await $.wv([$t35], "Fields", C, false)), [6])), "asString"))); if ($t46 !== undefined) { await $.mset((await $.wv([$t35], "Sheet", C, false)), "Cells", $t46); } }
          } else {
            { const $t47 = await $.iset((await $.mv((await $.wv([$t35], "Sheet", C, false)), "Cells")), [(await $.wv([$t35], "Position", { get: async () => L0["position"], set: async (v) => { L0["position"] = v; }, local: true }, false)), 5], (await $.mv((await $.idx((await $.wv([$t35], "Fields", C, false)), [8])), "asString"))); if ($t47 !== undefined) { await $.mset((await $.wv([$t35], "Sheet", C, false)), "Cells", $t47); } }
          }
          await $.mcall((await $.idx((await $.mv((await $.wv([$t35], "Exl", C, false)), "Range")), [$.add($.add($.add($.add((await $.wcall([$t35], "CHR", [$.add(64, 4)], C)), (await $.wcall([$t35], "IntToStr", [(await $.wv([$t35], "Position", { get: async () => L0["position"], set: async (v) => { L0["position"] = v; }, local: true }, false))], C))), ":"), (await $.wcall([$t35], "CHR", [$.add(64, 5)], C))), (await $.wcall([$t35], "IntToStr", [(await $.wv([$t35], "Position", { get: async () => L0["position"], set: async (v) => { L0["position"] = v; }, local: true }, false))], C)))])), "Select", []);
          await $.mset((await $.mv((await $.mv((await $.wv([$t35], "Exl", C, false)), "Selection")), "Interior")), "ColorIndex", 14);
          await $.stmt((await $.wcall([$t35], "inc", [$.ref(async () => (await $.wv([$t35], "Position", { get: async () => L0["position"], set: async (v) => { L0["position"] = v; }, local: true }, false)), async ($t48) => { await $.wset([$t35], "Position", $t48, { get: async () => L0["position"], set: async (v) => { L0["position"] = v; }, local: true }); }), 1], C)));
          await $.stmt($.wcall([$t35], "Next", [], C));
          await $.tick();
        }
      }
    }
    await $.wset([$t35], "FinishPosition", (await $.wv([$t35], "Position", { get: async () => L0["position"], set: async (v) => { L0["position"] = v; }, local: true }, false)), C);
  }
  return L0.result;
}, {"params": ["DataSet", "Position"], "kind": "procedure", "ptypes": ["TOracleDataSet", "LongWord"]});
  U.func("GetBySubAccout", async function GetBySubAccout(Self, p0, p1, p2, p3) {
  const C = $.chain(Self, U);
  const L0 = {"acc": $.copyArg(p0), "byval": $.copyArg(p1), "bdat": $.copyArg(p2), "edat": $.copyArg(p3), result: undefined};
  await $.fixArgs(L0, ["acc", "byval", "bdat", "edat"]);
  {
    const $t49 = (await $.v(C, "StatementDataModNew"));
    const $t50 = (await $.wv([$t49], "OraPackVExtraction", C, false));
    await $.wset([$t49, $t50], "acc_id", (await $.wcall([$t49, $t50], "CallFloatFunction", ["check_account_number", [(await $.wv([$t49, $t50], "Acc", { get: async () => L0["acc"], set: async (v) => { L0["acc"] = v; }, local: true }, false)), (await $.wv([$t49, $t50], "Val_name", C, false)), (await $.wv([$t49, $t50], "Accname", C, false))]], C)), C);
    await $.wset([$t49, $t50], "BegDat", (await $.wv([$t49, $t50], "BDat", { get: async () => L0["bdat"], set: async (v) => { L0["bdat"] = v; }, local: true }, false)), C);
    await $.wset([$t49, $t50], "EndDat", (await $.wv([$t49, $t50], "EDat", { get: async () => L0["edat"], set: async (v) => { L0["edat"] = v; }, local: true }, false)), C);
    await $.wset([$t49, $t50], "AccName", (await $.wcall([$t49, $t50], "GetParameter", [2], C)), C);
    await $.wset([$t49, $t50], "val_name", (await $.wcall([$t49, $t50], "GetParameter", [1], C)), C);
    if ($.truthy($.eq((await $.wv([$t49, $t50], "val_name", C, false)), ""))) {
      await $.stmt((await $.wcall([$t49, $t50], "ShowMessage", [$.add($.add("Sub Account: \"", (await $.wv([$t49, $t50], "Acc", { get: async () => L0["acc"], set: async (v) => { L0["acc"] = v; }, local: true }, false))), "\" not found")], C)));
    } else {
      await $.stmt((await $.wcall([$t49, $t50], "ExportToExcelBySubAcc", [(await $.wv([$t49, $t50], "Acc", { get: async () => L0["acc"], set: async (v) => { L0["acc"] = v; }, local: true }, false)), (await $.wv([$t49, $t50], "ByVal", { get: async () => L0["byval"], set: async (v) => { L0["byval"] = v; }, local: true }, false))], C)));
    }
  }
  return L0.result;
}, {"params": ["Acc", "ByVal", "BDat", "EDat"], "kind": "procedure", "ptypes": ["String", "Boolean", "TDateTime", "TDateTime"]});
  U.func("GetByBal", async function GetByBal(Self, p0, p1, p2) {
  const C = $.chain(Self, U);
  const L0 = {"bal": $.copyArg(p0), "bdat": $.copyArg(p1), "edat": $.copyArg(p2), result: undefined};
  await $.fixArgs(L0, ["bal", "bdat", "edat"]);
  {
    const $t51 = (await $.v(C, "StatementDataModNew"));
    const $t52 = (await $.wv([$t51], "OraPackVExtraction", C, false));
    if ($.truthy($.eq((await $.wcall([$t51, $t52], "CallFloatFunction", ["check_bal_number", [(await $.wv([$t51, $t52], "Bal", { get: async () => L0["bal"], set: async (v) => { L0["bal"] = v; }, local: true }, false))]], C)), 0))) {
      await $.stmt((await $.wcall([$t51, $t52], "ShowMessage", [$.add($.add("Sub Account: \"", (await $.wv([$t51, $t52], "Bal", { get: async () => L0["bal"], set: async (v) => { L0["bal"] = v; }, local: true }, false))), "\" not found")], C)));
    } else {
      {
        const $t53 = (await $.wv([$t51, $t52], "StatementDataModNew", C, false));
        const $t54 = (await $.wv([$t51, $t52, $t53], "OraDataSetBalcns", C, false));
        await $.stmt((await $.wcall([$t51, $t52, $t53, $t54], "SetVariable", ["balcn", (await $.wv([$t51, $t52, $t53, $t54], "Bal", { get: async () => L0["bal"], set: async (v) => { L0["bal"] = v; }, local: true }, false))], C)));
        await $.stmt($.wcall([$t51, $t52, $t53, $t54], "Open", [], C));
        await $.stmt($.wcall([$t51, $t52, $t53, $t54], "First", [], C));
        while ($.truthy($.not((await $.wv([$t51, $t52, $t53, $t54], "EOF", C, false))))) {
          await $.stmt((await $.wcall([$t51, $t52, $t53, $t54], "GetBySubAccout", [(await $.mv((await $.idx((await $.wv([$t51, $t52, $t53, $t54], "Fields", C, false)), [0])), "asString")), (await $.wv([$t51, $t52, $t53, $t54], "False", C, false)), (await $.wv([$t51, $t52, $t53, $t54], "BDat", { get: async () => L0["bdat"], set: async (v) => { L0["bdat"] = v; }, local: true }, false)), (await $.wv([$t51, $t52, $t53, $t54], "EDat", { get: async () => L0["edat"], set: async (v) => { L0["edat"] = v; }, local: true }, false))], C)));
          await $.stmt($.wcall([$t51, $t52, $t53, $t54], "Next", [], C));
          await $.tick();
        }
        await $.stmt($.wcall([$t51, $t52, $t53, $t54], "Close", [], C));
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
    const $t55 = (await $.v(C, "StatementDataModNew"));
    const $t56 = (await $.wv([$t55], "OraDataSetTurnBals", C, false));
    await $.stmt($.wcall([$t55, $t56], "Open", [], C));
    await $.stmt($.wcall([$t55, $t56], "First", [], C));
    while ($.truthy($.not((await $.wv([$t55, $t56], "EOF", C, false))))) {
      await $.stmt((await $.wcall([$t55, $t56], "GetByBal", [(await $.mv((await $.idx((await $.wv([$t55, $t56], "Fields", C, false)), [0])), "Value")), (await $.wv([$t55, $t56], "BDat", { get: async () => L0["bdat"], set: async (v) => { L0["bdat"] = v; }, local: true }, false)), (await $.wv([$t55, $t56], "EDat", { get: async () => L0["edat"], set: async (v) => { L0["edat"] = v; }, local: true }, false))], C)));
      await $.stmt($.wcall([$t55, $t56], "Next", [], C));
      await $.tick();
    }
    await $.stmt($.wcall([$t55, $t56], "Close", [], C));
  }
  return L0.result;
}, {"params": ["BDat", "EDat"], "kind": "procedure", "ptypes": ["TDateTime", "TDateTime"]});
  return U;
}
