// Generated from ReportImpl.pas by pas2js — do not edit by hand; regenerate instead.
/* eslint-disable */
// @ts-nocheck

export default function define($) {
  const U = $.unit("ReportImpl", ["Windows", "Messages", "SysUtils", "Classes", "Graphics", "Controls", "Forms", "Dialogs", "ComCtrls", "StdCtrls", "Buttons", "Db", "OracleData", "ComObj", "SboAPIDataModuleImpl", "SBTranslateProc"]);
  const C = [U];
  U.defClass("TReport", "TForm", {"bitbtn1": {"name": "BitBtn1", "type": "TBitBtn"}, "bitbtn2": {"name": "BitBtn2", "type": "TBitBtn"}, "datetimepicker1": {"name": "DateTimePicker1", "type": "TDateTimePicker"}, "sysdate": {"name": "sysdate", "type": "TOracleDataSet"}, "main": {"name": "Main", "type": "TOracleDataSet"}, "sysdatetek_dat": {"name": "sysdateTEK_DAT", "type": "TDateTimeField"}, "mainrestpr": {"name": "MainRESTPR", "type": "TFloatField"}, "mainsumhrestoostat": {"name": "MainSUMHRESTOOSTAT", "type": "TFloatField"}, "maininterestpr": {"name": "MainINTERESTPR", "type": "TFloatField"}, "mainsumintrinterestoostat": {"name": "MainSUMINTRINTERESTOOSTAT", "type": "TFloatField"}, "mainname": {"name": "MainNAME", "type": "TWideStringField"}}, {});
  U.init(async () => {
    U.var_("Report", null, "TReport");
    U.var_("Exl", null, "Variant");
    U.var_("Sheet", null, "Variant");
    U.var_("s", 0, "Integer");
    U.var_("l", 0, "Integer");
    U.var_("cell", 0, "Integer");
    U.var_("r", 0, "Integer");
    U.var_("i", 0, "Integer");
    U.var_("j", 0, "Integer");
    U.var_("k", 0, "Integer");
    U.var_("m", 0, "Integer");
    U.var_("w", 0, "Integer");
    U.var_("bash", '', "String");
  });
  U.method("TReport", "FormCanResize", async function FormCanResize(Self, p0, p1, p2, p3) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "newwidth": $.asRef(p1), "newheight": $.asRef(p2), "resize": $.asRef(p3), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await L0["resize"].set(false);
  return L0.result;
}, {"params": ["Sender", "NewWidth", "NewHeight", "Resize"], "kind": "procedure", "ptypes": ["TObject", "Integer", "Integer", "Boolean"]});
  U.method("TReport", "FormCreate", async function FormCreate(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t1 = (await $.wobj(C, "sysdate"));
    await $.stmt($.wcall([$t1], "open", [], C));
    await $.mset((await $.wv([$t1], "DateTimePicker1", C, false)), "DateTime", (await $.mv((await $.wcall([$t1], "fieldbyname", ["tek_dat"], C)), "AsDateTime")));
  }
  await $.stmt((await $.mcall((await $.v(C, "SBTranslateProc")), "TranslateAllCompForms", [Self, (await $.mv((await $.v(C, "sboapiDataModule")), "OrPack_SL"))])));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.func("CreateSheet", async function CreateSheet(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: undefined};
  try {
    await $.set(C, "Exl", (await $.call(C, "CreateOleObject", ["Excel.Application"])));
    await $.mcall((await $.mv((await $.v(C, "Exl")), "WorkBooks")), "add", []);
    await $.set(C, "Sheet", (await $.idx((await $.mv((await $.mv((await $.mv((await $.v(C, "Exl")), "Application")), "Worksheets")), "Item")), [1])));
  } catch ($t2) {
    $.rethrowControl($t2);
    $.handled($t2);
  }
  return L0.result;
}, {"params": [], "kind": "procedure", "ptypes": []});
  U.func("DestroySheet", async function DestroySheet(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: undefined};
  try {
    await $.stmt((await $.call(C, "Finalize", [(await $.v(C, "Sheet"))])));
    await $.stmt((await $.call(C, "Finalize", [(await $.v(C, "Exl"))])));
  } catch ($t3) {
    $.rethrowControl($t3);
    $.handled($t3);
  }
  return L0.result;
}, {"params": [], "kind": "procedure", "ptypes": []});
  U.func("ShowSheet", async function ShowSheet(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: undefined};
  try {
    await $.mset((await $.v(C, "Exl")), "Visible", true);
  } catch ($t4) {
    $.rethrowControl($t4);
    $.handled($t4);
    await $.stmt($.call(C, "DestroySheet", []));
  }
  return L0.result;
}, {"params": [], "kind": "procedure", "ptypes": []});
  U.method("TReport", "BitBtn1Click", async function BitBtn1Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "dat": 0};
  await $.fixArgs(L0, ["sender"]);
  L0["number_format_r"] = "#,##0.00%";
  L0["dat"] = (await $.call(C, "integer", [(await $.call(C, "trunc", [(await $.mv((await $.v(C, "DateTimePicker1")), "DateTime"))]))]));
  {
    const $t5 = (await $.wobj(C, "main"));
    if ($.truthy((await $.wv([$t5], "Active", C, false)))) {
      await $.stmt($.wcall([$t5], "Close", [], C));
    }
    await $.stmt((await $.wcall([$t5], "SetVariable", ["dat", (await $.wv([$t5], "dat", { get: async () => L0["dat"], set: async (v) => { L0["dat"] = v; }, local: true }, false))], C)));
    await $.stmt($.wcall([$t5], "Open", [], C));
  }
  await $.stmt($.call(C, "CreateSheet", []));
  try {
    await $.mset((await $.idx((await $.mv((await $.v(C, "Sheet")), "Range")), ["A1:A60000"])), "ColumnWidth", 9);
    await $.mset((await $.idx((await $.mv((await $.v(C, "Sheet")), "Range")), ["B1:B60000"])), "ColumnWidth", 20);
    await $.mset((await $.idx((await $.mv((await $.v(C, "Sheet")), "Range")), ["C1:C60000"])), "ColumnWidth", 20);
    await $.mset((await $.idx((await $.mv((await $.v(C, "Sheet")), "Range")), ["D1:D60000"])), "ColumnWidth", 20);
    await $.mset((await $.idx((await $.mv((await $.v(C, "Sheet")), "Range")), ["E1:E60000"])), "ColumnWidth", 20);
    await $.mset((await $.idx((await $.mv((await $.v(C, "Sheet")), "Range")), ["F1:F60000"])), "ColumnWidth", 30);
    await $.mset((await $.idx((await $.mv((await $.v(C, "Sheet")), "Range")), ["F1:F60000"])), "NumberFormat", L0["number_format_r"]);
    await $.mset((await $.idx((await $.mv((await $.v(C, "Sheet")), "Range")), ["G1:G60000"])), "ColumnWidth", 20);
    await $.mset((await $.idx((await $.mv((await $.v(C, "Sheet")), "Range")), ["H1:H60000"])), "ColumnWidth", 20);
    await $.mset((await $.idx((await $.mv((await $.v(C, "Sheet")), "Range")), ["J1:J60000"])), "NumberFormat", L0["number_format_r"]);
    { const $t6 = await $.iset((await $.mv((await $.v(C, "Sheet")), "Cells")), [2, 3], "TuranBank ASC-də kredit portfeli və faiz gəlirləri üzrə proqnozun icra vəziyyəti"); if ($t6 !== undefined) { await $.mset((await $.v(C, "Sheet")), "Cells", $t6); } }
    await $.mset((await $.mv((await $.idx((await $.mv((await $.v(C, "Sheet")), "Cells")), [2, 3])), "Font")), "size", 17);
    { const $t7 = await $.iset((await $.mv((await $.v(C, "Sheet")), "Cells")), [3, 2], "Hesabat tarixi "); if ($t7 !== undefined) { await $.mset((await $.v(C, "Sheet")), "Cells", $t7); } }
    await $.mset((await $.mv((await $.idx((await $.mv((await $.v(C, "Sheet")), "Cells")), [3, 2])), "Font")), "Bold", true);
    { const $t8 = await $.iset((await $.mv((await $.v(C, "Sheet")), "Cells")), [3, 3], (await $.mv((await $.v(C, "DateTimePicker1")), "DateTime"))); if ($t8 !== undefined) { await $.mset((await $.v(C, "Sheet")), "Cells", $t8); } }
    { const $t9 = await $.iset((await $.mv((await $.v(C, "Sheet")), "Cells")), [4, 2], "Hesabatın valyutası manatla "); if ($t9 !== undefined) { await $.mset((await $.v(C, "Sheet")), "Cells", $t9); } }
    await $.mset((await $.mv((await $.idx((await $.mv((await $.v(C, "Sheet")), "Cells")), [4, 2])), "Font")), "Bold", true);
    await $.set(C, "k", 5);
    await $.set(C, "i", 0);
    await $.set(C, "r", 0);
    { const $t10 = await $.iset((await $.mv((await $.v(C, "Sheet")), "Cells")), [$.add($.add((await $.v(C, "i")), (await $.v(C, "k"))), 1), 1], "Sıra №"); if ($t10 !== undefined) { await $.mset((await $.v(C, "Sheet")), "Cells", $t10); } }
    await $.mset((await $.mv((await $.idx((await $.mv((await $.v(C, "Sheet")), "Cells")), [$.add($.add((await $.v(C, "i")), (await $.v(C, "k"))), 1), 1])), "Font")), "Bold", true);
    await $.mset((await $.idx((await $.mv((await $.v(C, "Sheet")), "Cells")), [$.add($.add((await $.v(C, "i")), (await $.v(C, "k"))), 1), 2])), "Value", "Filialın adı");
    await $.mset((await $.mv((await $.idx((await $.mv((await $.v(C, "Sheet")), "Cells")), [$.add($.add((await $.v(C, "i")), (await $.v(C, "k"))), 1), 2])), "Font")), "Bold", true);
    await $.mset((await $.idx((await $.mv((await $.v(C, "Sheet")), "Cells")), [$.add($.add((await $.v(C, "i")), (await $.v(C, "k"))), 1), 3])), "Value", "K.P Proqnoz");
    await $.mset((await $.mv((await $.idx((await $.mv((await $.v(C, "Sheet")), "Cells")), [$.add($.add((await $.v(C, "i")), (await $.v(C, "k"))), 1), 3])), "Font")), "Bold", true);
    await $.mset((await $.idx((await $.mv((await $.v(C, "Sheet")), "Cells")), [$.add($.add((await $.v(C, "i")), (await $.v(C, "k"))), 1), 4])), "Value", "K.P Fakt");
    await $.mset((await $.mv((await $.idx((await $.mv((await $.v(C, "Sheet")), "Cells")), [$.add($.add((await $.v(C, "i")), (await $.v(C, "k"))), 1), 4])), "Font")), "Bold", true);
    await $.mset((await $.idx((await $.mv((await $.v(C, "Sheet")), "Cells")), [$.add($.add((await $.v(C, "i")), (await $.v(C, "k"))), 1), 5])), "Value", "Fərq(artma azalma)sütun4-cütun3");
    await $.mset((await $.mv((await $.idx((await $.mv((await $.v(C, "Sheet")), "Cells")), [$.add($.add((await $.v(C, "i")), (await $.v(C, "k"))), 1), 5])), "Font")), "Bold", true);
    await $.mset((await $.idx((await $.mv((await $.v(C, "Sheet")), "Cells")), [$.add($.add((await $.v(C, "i")), (await $.v(C, "k"))), 1), 5])), "WrapText", true);
    await $.mset((await $.idx((await $.mv((await $.v(C, "Sheet")), "Cells")), [$.add($.add((await $.v(C, "i")), (await $.v(C, "k"))), 1), 6])), "Value", "İcra% sütun4/sütun3");
    await $.mset((await $.mv((await $.idx((await $.mv((await $.v(C, "Sheet")), "Cells")), [$.add($.add((await $.v(C, "i")), (await $.v(C, "k"))), 1), 6])), "Font")), "Bold", true);
    await $.mset((await $.idx((await $.mv((await $.v(C, "Sheet")), "Cells")), [$.add($.add((await $.v(C, "i")), (await $.v(C, "k"))), 1), 6])), "WrapText", true);
    await $.mset((await $.idx((await $.mv((await $.v(C, "Sheet")), "Cells")), [$.add($.add((await $.v(C, "i")), (await $.v(C, "k"))), 1), 7])), "Value", "%G. U Proqnoz");
    await $.mset((await $.mv((await $.idx((await $.mv((await $.v(C, "Sheet")), "Cells")), [$.add($.add((await $.v(C, "i")), (await $.v(C, "k"))), 1), 7])), "Font")), "Bold", true);
    await $.mset((await $.idx((await $.mv((await $.v(C, "Sheet")), "Cells")), [$.add($.add((await $.v(C, "i")), (await $.v(C, "k"))), 1), 8])), "Value", "%G. U  Fakt");
    await $.mset((await $.mv((await $.idx((await $.mv((await $.v(C, "Sheet")), "Cells")), [$.add($.add((await $.v(C, "i")), (await $.v(C, "k"))), 1), 8])), "Font")), "Bold", true);
    await $.mset((await $.idx((await $.mv((await $.v(C, "Sheet")), "Cells")), [$.add($.add((await $.v(C, "i")), (await $.v(C, "k"))), 1), 9])), "Value", "Fərq(artma azalma)sütun8-sütun7");
    await $.mset((await $.mv((await $.idx((await $.mv((await $.v(C, "Sheet")), "Cells")), [$.add($.add((await $.v(C, "i")), (await $.v(C, "k"))), 1), 9])), "Font")), "Bold", true);
    await $.mset((await $.idx((await $.mv((await $.v(C, "Sheet")), "Cells")), [$.add($.add((await $.v(C, "i")), (await $.v(C, "k"))), 1), 9])), "WrapText", true);
    await $.mset((await $.idx((await $.mv((await $.v(C, "Sheet")), "Cells")), [$.add($.add((await $.v(C, "i")), (await $.v(C, "k"))), 1), 10])), "Value", "İcra % Sütun8/sütun7");
    await $.mset((await $.mv((await $.idx((await $.mv((await $.v(C, "Sheet")), "Cells")), [$.add($.add((await $.v(C, "i")), (await $.v(C, "k"))), 1), 10])), "Font")), "Bold", true);
    await $.mset((await $.idx((await $.mv((await $.v(C, "Sheet")), "Cells")), [$.add($.add((await $.v(C, "i")), (await $.v(C, "k"))), 1), 10])), "WrapText", true);
    await $.mcall((await $.v(C, "sysdate")), "Close", []);
    await $.mcall((await $.v(C, "sysdate")), "open", []);
    await $.stmt($.call(C, "ShowSheet", []));
    await $.mcall((await $.v(C, "sysdate")), "First", []);
    { const $t11 = (await $.mv((await $.v(C, "main")), "RecordCount"));
      await $.set(C, "i", 1);
      let $t12 = true;
      for (;;) {
        if (!$t12) { await $.set(C, "i", $.succ((await $.v(C, "i")), 1)); }
        $t12 = false;
        if (!($.ord((await $.v(C, "i"))) <= $.ord($t11))) break;
        await $.set(C, "r", $.add((await $.v(C, "r")), 1));
        { const $t13 = await $.iset((await $.mv((await $.v(C, "Sheet")), "Cells")), [$.add($.add((await $.v(C, "i")), (await $.v(C, "k"))), 1), 1], (await $.v(C, "r"))); if ($t13 !== undefined) { await $.mset((await $.v(C, "Sheet")), "Cells", $t13); } }
        { const $t14 = await $.iset((await $.mv((await $.v(C, "Sheet")), "Cells")), [$.add($.add((await $.v(C, "i")), (await $.v(C, "k"))), 1), 2], (await $.mv((await $.mcall((await $.v(C, "main")), "FieldByName", ["name"])), "asstring"))); if ($t14 !== undefined) { await $.mset((await $.v(C, "Sheet")), "Cells", $t14); } }
        { const $t15 = await $.iset((await $.mv((await $.v(C, "Sheet")), "Cells")), [$.add($.add((await $.v(C, "i")), (await $.v(C, "k"))), 1), 3], (await $.mv((await $.mcall((await $.v(C, "main")), "FieldByName", ["restpr"])), "asfloat"))); if ($t15 !== undefined) { await $.mset((await $.v(C, "Sheet")), "Cells", $t15); } }
        { const $t16 = await $.iset((await $.mv((await $.v(C, "Sheet")), "Cells")), [$.add($.add((await $.v(C, "i")), (await $.v(C, "k"))), 1), 4], (await $.mv((await $.mcall((await $.v(C, "main")), "FieldByName", ["sum(h.rest*o.ostat)"])), "asfloat"))); if ($t16 !== undefined) { await $.mset((await $.v(C, "Sheet")), "Cells", $t16); } }
        { const $t17 = await $.iset((await $.mv((await $.v(C, "Sheet")), "Cells")), [$.add($.add((await $.v(C, "i")), (await $.v(C, "k"))), 1), 5], $.sub((await $.mv((await $.mcall((await $.v(C, "main")), "FieldByName", ["sum(h.rest*o.ostat)"])), "asfloat")), (await $.mv((await $.mcall((await $.v(C, "main")), "FieldByName", ["restpr"])), "asfloat")))); if ($t17 !== undefined) { await $.mset((await $.v(C, "Sheet")), "Cells", $t17); } }
        if ($.truthy($.eq(((await $.mv((await $.mcall((await $.v(C, "main")), "FieldByName", ["sum(h.rest*o.ostat)"])), "asfloat"))), 0))) {
          { const $t18 = await $.iset((await $.mv((await $.v(C, "Sheet")), "Cells")), [$.add($.add((await $.v(C, "i")), (await $.v(C, "k"))), 1), 6], 0); if ($t18 !== undefined) { await $.mset((await $.v(C, "Sheet")), "Cells", $t18); } }
        } else {
          { const $t19 = await $.iset((await $.mv((await $.v(C, "Sheet")), "Cells")), [$.add($.add((await $.v(C, "i")), (await $.v(C, "k"))), 1), 6], $.fdiv(((await $.mv((await $.mcall((await $.v(C, "main")), "FieldByName", ["sum(h.rest*o.ostat)"])), "asfloat"))), ((await $.mv((await $.mcall((await $.v(C, "main")), "FieldByName", ["restpr"])), "asfloat"))))); if ($t19 !== undefined) { await $.mset((await $.v(C, "Sheet")), "Cells", $t19); } }
        }
        { const $t20 = await $.iset((await $.mv((await $.v(C, "Sheet")), "Cells")), [$.add($.add((await $.v(C, "i")), (await $.v(C, "k"))), 1), 7], (await $.mv((await $.mcall((await $.v(C, "main")), "FieldByName", ["interestpr"])), "asfloat"))); if ($t20 !== undefined) { await $.mset((await $.v(C, "Sheet")), "Cells", $t20); } }
        { const $t21 = await $.iset((await $.mv((await $.v(C, "Sheet")), "Cells")), [$.add($.add((await $.v(C, "i")), (await $.v(C, "k"))), 1), 8], (await $.mv((await $.mcall((await $.v(C, "main")), "FieldByName", ["sum(intr.interest*o.ostat)"])), "asfloat"))); if ($t21 !== undefined) { await $.mset((await $.v(C, "Sheet")), "Cells", $t21); } }
        { const $t22 = await $.iset((await $.mv((await $.v(C, "Sheet")), "Cells")), [$.add($.add((await $.v(C, "i")), (await $.v(C, "k"))), 1), 9], $.sub((await $.mv((await $.mcall((await $.v(C, "main")), "FieldByName", ["sum(intr.interest*o.ostat)"])), "asfloat")), (await $.mv((await $.mcall((await $.v(C, "main")), "FieldByName", ["interestpr"])), "asfloat")))); if ($t22 !== undefined) { await $.mset((await $.v(C, "Sheet")), "Cells", $t22); } }
        if ($.truthy($.eq((await $.mv((await $.mcall((await $.v(C, "main")), "FieldByName", ["sum(intr.interest*o.ostat)"])), "asfloat")), 0))) {
          { const $t23 = await $.iset((await $.mv((await $.v(C, "Sheet")), "Cells")), [$.add($.add((await $.v(C, "i")), (await $.v(C, "k"))), 1), 10], 0); if ($t23 !== undefined) { await $.mset((await $.v(C, "Sheet")), "Cells", $t23); } }
        } else {
          { const $t24 = await $.iset((await $.mv((await $.v(C, "Sheet")), "Cells")), [$.add($.add((await $.v(C, "i")), (await $.v(C, "k"))), 1), 10], $.fdiv(((await $.mv((await $.mcall((await $.v(C, "main")), "FieldByName", ["sum(intr.interest*o.ostat)"])), "asfloat"))), ((await $.mv((await $.mcall((await $.v(C, "main")), "FieldByName", ["interestpr"])), "asfloat"))))); if ($t24 !== undefined) { await $.mset((await $.v(C, "Sheet")), "Cells", $t24); } }
        }
        await $.mcall((await $.v(C, "main")), "Next", []);
        await $.tick();
      }
    }
    await $.set(C, "w", (await $.mv((await $.v(C, "main")), "RecordCount")));
    { const $t25 = await $.iset((await $.mv((await $.v(C, "Sheet")), "Cells")), [$.add($.add((await $.v(C, "w")), (await $.v(C, "k"))), 2), 1], "Yekun cem"); if ($t25 !== undefined) { await $.mset((await $.v(C, "Sheet")), "Cells", $t25); } }
    await $.mset((await $.mv((await $.idx((await $.mv((await $.v(C, "Sheet")), "Cells")), [$.add($.add((await $.v(C, "w")), (await $.v(C, "k"))), 2), 1])), "Font")), "Bold", true);
    { const $t26 = await $.iset((await $.mv((await $.v(C, "Sheet")), "Cells")), [$.add($.add((await $.v(C, "w")), (await $.v(C, "k"))), 2), 3], $.add($.add("=SUM(C7:C", (await $.call(C, "inttostr", [$.add($.add((await $.v(C, "w")), (await $.v(C, "k"))), 1)]))), ")")); if ($t26 !== undefined) { await $.mset((await $.v(C, "Sheet")), "Cells", $t26); } }
    await $.mset((await $.mv((await $.idx((await $.mv((await $.v(C, "Sheet")), "Cells")), [$.add($.add((await $.v(C, "w")), (await $.v(C, "k"))), 2), 3])), "Font")), "Bold", true);
    { const $t27 = await $.iset((await $.mv((await $.v(C, "Sheet")), "Cells")), [$.add($.add((await $.v(C, "w")), (await $.v(C, "k"))), 2), 4], $.add($.add("=SUM(D7:D", (await $.call(C, "inttostr", [$.add($.add((await $.v(C, "w")), (await $.v(C, "k"))), 1)]))), ")")); if ($t27 !== undefined) { await $.mset((await $.v(C, "Sheet")), "Cells", $t27); } }
    await $.mset((await $.mv((await $.idx((await $.mv((await $.v(C, "Sheet")), "Cells")), [$.add($.add((await $.v(C, "w")), (await $.v(C, "k"))), 2), 4])), "Font")), "Bold", true);
    { const $t28 = await $.iset((await $.mv((await $.v(C, "Sheet")), "Cells")), [$.add($.add((await $.v(C, "w")), (await $.v(C, "k"))), 2), 5], $.add($.add("=SUM(E7:E", (await $.call(C, "inttostr", [$.add($.add((await $.v(C, "w")), (await $.v(C, "k"))), 1)]))), ")")); if ($t28 !== undefined) { await $.mset((await $.v(C, "Sheet")), "Cells", $t28); } }
    await $.mset((await $.mv((await $.idx((await $.mv((await $.v(C, "Sheet")), "Cells")), [$.add($.add((await $.v(C, "w")), (await $.v(C, "k"))), 2), 5])), "Font")), "Bold", true);
    { const $t29 = await $.iset((await $.mv((await $.v(C, "Sheet")), "Cells")), [$.add($.add((await $.v(C, "w")), (await $.v(C, "k"))), 2), 6], $.add($.add($.add("=D", (await $.call(C, "inttostr", [$.add($.add((await $.v(C, "w")), (await $.v(C, "k"))), 2)]))), "/C"), (await $.call(C, "inttostr", [$.add($.add((await $.v(C, "w")), (await $.v(C, "k"))), 2)])))); if ($t29 !== undefined) { await $.mset((await $.v(C, "Sheet")), "Cells", $t29); } }
    await $.mset((await $.mv((await $.idx((await $.mv((await $.v(C, "Sheet")), "Cells")), [$.add($.add((await $.v(C, "w")), (await $.v(C, "k"))), 2), 6])), "Font")), "Bold", true);
    { const $t30 = await $.iset((await $.mv((await $.v(C, "Sheet")), "Cells")), [$.add($.add((await $.v(C, "w")), (await $.v(C, "k"))), 2), 7], $.add($.add("=SUM(G7:G", (await $.call(C, "inttostr", [$.add($.add((await $.v(C, "w")), (await $.v(C, "k"))), 1)]))), ")")); if ($t30 !== undefined) { await $.mset((await $.v(C, "Sheet")), "Cells", $t30); } }
    await $.mset((await $.mv((await $.idx((await $.mv((await $.v(C, "Sheet")), "Cells")), [$.add($.add((await $.v(C, "w")), (await $.v(C, "k"))), 2), 7])), "Font")), "Bold", true);
    { const $t31 = await $.iset((await $.mv((await $.v(C, "Sheet")), "Cells")), [$.add($.add((await $.v(C, "w")), (await $.v(C, "k"))), 2), 8], $.add($.add("=SUM(H7:H", (await $.call(C, "inttostr", [$.add($.add((await $.v(C, "w")), (await $.v(C, "k"))), 1)]))), ")")); if ($t31 !== undefined) { await $.mset((await $.v(C, "Sheet")), "Cells", $t31); } }
    await $.mset((await $.mv((await $.idx((await $.mv((await $.v(C, "Sheet")), "Cells")), [$.add($.add((await $.v(C, "w")), (await $.v(C, "k"))), 2), 8])), "Font")), "Bold", true);
    { const $t32 = await $.iset((await $.mv((await $.v(C, "Sheet")), "Cells")), [$.add($.add((await $.v(C, "w")), (await $.v(C, "k"))), 2), 9], $.add($.add("=SUM(I7:I", (await $.call(C, "inttostr", [$.add($.add((await $.v(C, "w")), (await $.v(C, "k"))), 1)]))), ")")); if ($t32 !== undefined) { await $.mset((await $.v(C, "Sheet")), "Cells", $t32); } }
    await $.mset((await $.mv((await $.idx((await $.mv((await $.v(C, "Sheet")), "Cells")), [$.add($.add((await $.v(C, "w")), (await $.v(C, "k"))), 2), 9])), "Font")), "Bold", true);
    { const $t33 = await $.iset((await $.mv((await $.v(C, "Sheet")), "Cells")), [$.add($.add((await $.v(C, "w")), (await $.v(C, "k"))), 2), 10], $.add($.add($.add("=H", (await $.call(C, "inttostr", [$.add($.add((await $.v(C, "w")), (await $.v(C, "k"))), 2)]))), "/G"), (await $.call(C, "inttostr", [$.add($.add((await $.v(C, "w")), (await $.v(C, "k"))), 2)])))); if ($t33 !== undefined) { await $.mset((await $.v(C, "Sheet")), "Cells", $t33); } }
    await $.mset((await $.mv((await $.idx((await $.mv((await $.v(C, "Sheet")), "Cells")), [$.add($.add((await $.v(C, "w")), (await $.v(C, "k"))), 2), 10])), "Font")), "Bold", true);
    await $.set(C, "bash", (await $.call(C, "inttostr", [$.add((await $.v(C, "k")), 1)])));
    await $.mset((await $.mv((await $.idx((await $.mv((await $.v(C, "Sheet")), "Range")), [$.add($.add($.add("A", (await $.v(C, "bash"))), ":J"), (await $.call(C, "inttostr", [$.add($.add($.add((await $.v(C, "m")), (await $.v(C, "k"))), 1), (await $.mv((await $.v(C, "main")), "RecordCount")))])))])), "Borders")), "Color", (await $.v(C, "clBlack")));
  } finally {
    await $.mcall((await $.idx((await $.mv((await $.v(C, "Exl")), "Range")), ["A1:A1"])), "Select", []);
    await $.mset((await $.v(C, "Screen")), "Cursor", (await $.v(C, "crDefault")));
    await $.stmt($.call(C, "DestroySheet", []));
    await $.mcall((await $.v(C, "main")), "EnableControls", []);
  }
  await $.mcall((await $.v(C, "main")), "close", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TReport", "BitBtn2Click", async function BitBtn2Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.stmt($.call(C, "close", []));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  return U;
}
