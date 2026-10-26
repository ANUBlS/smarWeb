// Generated from UnitDat.pas by pas2js — do not edit by hand; regenerate instead.
/* eslint-disable */
// @ts-nocheck

export default function define($) {
  const U = $.unit("UnitDat", ["Windows", "Messages", "SysUtils", "Classes", "Graphics", "Controls", "Forms", "Dialogs", "StdCtrls", "ExtCtrls", "ComCtrls", "Oracle", "ComObj", "ComServ", "MainResourceImpl", "UnitData", "UnitFilter", "sboapiDataModuleImpl", "SBTranslateProc"]);
  const C = [U];
  U.defClass("TFormDat", "TForm", {"panel1": {"name": "Panel1", "type": "TPanel"}, "label1": {"name": "Label1", "type": "TLabel"}, "dtpbegin": {"name": "DTPBegin", "type": "TDateTimePicker"}, "dtpend": {"name": "DTPEnd", "type": "TDateTimePicker"}, "buttonok": {"name": "ButtonOk", "type": "TButton"}, "radiogexcel": {"name": "RadioGExcel", "type": "TRadioGroup"}}, {});
  U.init(async () => {
    U.var_("FormDat", null, "TFormDat");
    U.var_("Exl", null, "Variant");
    U.var_("Sheet", null, "Variant");
    U.var_("f_status", '', "String");
  });
  U.method("TFormDat", "DestroySheet", async function DestroySheet(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: undefined};
  try {
    await $.stmt((await $.call(C, "Finalize", [(await $.v(C, "Sheet"))])));
    await $.stmt((await $.call(C, "Finalize", [(await $.v(C, "Exl"))])));
  } catch ($t1) {
    $.rethrowControl($t1);
    $.handled($t1);
  }
  return L0.result;
}, {"params": [], "kind": "procedure", "ptypes": []});
  U.method("TFormDat", "ShowSheet", async function ShowSheet(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: undefined};
  try {
    await $.mset((await $.v(C, "Exl")), "Visible", true);
  } catch ($t2) {
    $.rethrowControl($t2);
    $.handled($t2);
    await $.stmt($.call(C, "DestroySheet", []));
  }
  return L0.result;
}, {"params": [], "kind": "procedure", "ptypes": []});
  U.method("TFormDat", "CreateSheet", async function CreateSheet(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: undefined};
  try {
    await $.set(C, "Exl", (await $.call(C, "CreateOleObject", ["Excel.Application"])));
    await $.mcall((await $.mv((await $.v(C, "Exl")), "WorkBooks")), "add", []);
    await $.set(C, "Sheet", (await $.idx((await $.mv((await $.mv((await $.mv((await $.v(C, "Exl")), "Application")), "Worksheets")), "Item")), [1])));
  } catch ($t3) {
    $.rethrowControl($t3);
    $.handled($t3);
  }
  return L0.result;
}, {"params": [], "kind": "procedure", "ptypes": []});
  U.method("TFormDat", "ExportDataTable", async function ExportDataTable(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: undefined, "first_date": 0, "last_date": 0, "bstrparam": ''};
  L0["first_date"] = (await $.call(C, "Integer", [(await $.call(C, "Trunc", [(await $.mv((await $.mv((await $.v(C, "FormDat")), "DTPBegin")), "DateTime"))]))]));
  L0["last_date"] = (await $.call(C, "Integer", [(await $.call(C, "Trunc", [(await $.mv((await $.mv((await $.v(C, "FormDat")), "DTPEnd")), "DateTime"))]))]));
  {
    const $t4 = (await $.v(C, "DataModWares"));
    await $.wset([$t4], "BStrParam", (await $.mcall((await $.wv([$t4], "SB_MAIN_RESOURCE", C, false)), "CallStringFunction", ["get_view_turn_sql", [(await $.wv([$t4], "First_Date", { get: async () => L0["first_date"], set: async (v) => { L0["first_date"] = v; }, local: true }, false)), (await $.wv([$t4], "Last_Date", { get: async () => L0["last_date"], set: async (v) => { L0["last_date"] = v; }, local: true }, false))]])), { get: async () => L0["bstrparam"], set: async (v) => { L0["bstrparam"] = v; }, local: true });
    {
      const $t5 = (await $.wv([$t4], "ODSGroupXLS", C, false));
      await $.stmt($.wcall([$t4, $t5], "Close", [], C));
      await $.wset([$t4, $t5], "Filtered", (await $.wv([$t4, $t5], "false", C, false)), C);
      await $.wset([$t4, $t5], "Filter", (await $.mv((await $.wv([$t4, $t5], "ODSGroups", C, false)), "Filter")), C);
      await $.wset([$t4, $t5], "Filtered", (await $.wv([$t4, $t5], "true", C, false)), C);
      await $.stmt($.wcall([$t4, $t5], "Open", [], C));
      await $.stmt($.wcall([$t4, $t5], "First", [], C));
    }
    {
      const $t6 = (await $.wv([$t4], "ODSWaresXLS", C, false));
      await $.stmt($.wcall([$t4, $t6], "Close", [], C));
      await $.mcall((await $.wv([$t4, $t6], "SQL", C, false)), "Clear", []);
      await $.stmt((await $.wcall([$t4, $t6], "DeclareVariable", ["groups_id", (await $.wv([$t4, $t6], "otInteger", C, false))], C)));
      await $.stmt((await $.mcall((await $.wv([$t4, $t6], "SQL", C, false)), "Add", [(await $.wv([$t4, $t6], "BStrParam", { get: async () => L0["bstrparam"], set: async (v) => { L0["bstrparam"] = v; }, local: true }, false))])));
      await $.wset([$t4, $t6], "Filtered", (await $.wv([$t4, $t6], "false", C, false)), C);
      await $.wset([$t4, $t6], "Filter", (await $.mv((await $.wv([$t4, $t6], "ODSWares", C, false)), "Filter")), C);
      await $.wset([$t4, $t6], "Filtered", (await $.wv([$t4, $t6], "true", C, false)), C);
      await $.stmt($.wcall([$t4, $t6], "Open", [], C));
    }
  }
  return L0.result;
}, {"params": [], "kind": "procedure", "ptypes": []});
  U.method("TFormDat", "ExcelFormat", async function ExcelFormat(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"status": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["status"]);
  if ($.truthy($.eq(L0["status"], "NB"))) {
    await $.mset((await $.idx((await $.mv((await $.v(C, "Sheet")), "Range")), ["A1:A60000"])), "ColumnWidth", 4);
    await $.mset((await $.idx((await $.mv((await $.v(C, "Sheet")), "Range")), ["B1:B60000"])), "ColumnWidth", 15);
    await $.mset((await $.idx((await $.mv((await $.v(C, "Sheet")), "Range")), ["C1:C60000"])), "ColumnWidth", 4);
    await $.mset((await $.idx((await $.mv((await $.v(C, "Sheet")), "Range")), ["D1:D60000"])), "ColumnWidth", 12);
    await $.mset((await $.idx((await $.mv((await $.v(C, "Sheet")), "Range")), ["E1:E60000"])), "ColumnWidth", 13);
    await $.mset((await $.idx((await $.mv((await $.v(C, "Sheet")), "Range")), ["F1:F60000"])), "ColumnWidth", 13);
    await $.mset((await $.idx((await $.mv((await $.v(C, "Sheet")), "Range")), ["G1:G60000"])), "ColumnWidth", 13);
    await $.mset((await $.idx((await $.mv((await $.v(C, "Sheet")), "Range")), ["H1:H60000"])), "ColumnWidth", 13);
    await $.mset((await $.idx((await $.mv((await $.v(C, "Sheet")), "Range")), ["E1:E60000"])), "NumberFormat", "#,##0.00");
    await $.mset((await $.idx((await $.mv((await $.v(C, "Sheet")), "Range")), ["F1:F60000"])), "NumberFormat", "#,##0.00");
    await $.mset((await $.idx((await $.mv((await $.v(C, "Sheet")), "Range")), ["G1:G60000"])), "NumberFormat", "#,##0.00");
    await $.mset((await $.idx((await $.mv((await $.v(C, "Sheet")), "Range")), ["H1:H60000"])), "NumberFormat", "#,##0.00");
  }
  if ($.truthy($.eq(L0["status"], "NL"))) {
    await $.mset((await $.idx((await $.mv((await $.v(C, "Sheet")), "Range")), ["A1:A60000"])), "ColumnWidth", 4);
    await $.mset((await $.idx((await $.mv((await $.v(C, "Sheet")), "Range")), ["B1:B60000"])), "ColumnWidth", 15);
    await $.mset((await $.idx((await $.mv((await $.v(C, "Sheet")), "Range")), ["C1:C60000"])), "ColumnWidth", 4);
    await $.mset((await $.idx((await $.mv((await $.v(C, "Sheet")), "Range")), ["D1:D60000"])), "ColumnWidth", 12);
    await $.mset((await $.idx((await $.mv((await $.v(C, "Sheet")), "Range")), ["E1:E60000"])), "ColumnWidth", 13);
    await $.mset((await $.idx((await $.mv((await $.v(C, "Sheet")), "Range")), ["F1:F60000"])), "ColumnWidth", 13);
    await $.mset((await $.idx((await $.mv((await $.v(C, "Sheet")), "Range")), ["G1:G60000"])), "ColumnWidth", 13);
    await $.mset((await $.idx((await $.mv((await $.v(C, "Sheet")), "Range")), ["H1:H60000"])), "ColumnWidth", 13);
    await $.mset((await $.idx((await $.mv((await $.v(C, "Sheet")), "Range")), ["E1:E60000"])), "NumberFormat", "#,##0.00");
    await $.mset((await $.idx((await $.mv((await $.v(C, "Sheet")), "Range")), ["F1:F60000"])), "NumberFormat", "#,##0.00");
    await $.mset((await $.idx((await $.mv((await $.v(C, "Sheet")), "Range")), ["G1:G60000"])), "NumberFormat", "#,##0.00");
    await $.mset((await $.idx((await $.mv((await $.v(C, "Sheet")), "Range")), ["H1:H60000"])), "NumberFormat", "#,##0.00");
  }
  if ($.truthy($.eq(L0["status"], "Both"))) {
    await $.mset((await $.idx((await $.mv((await $.v(C, "Sheet")), "Range")), ["A1:A60000"])), "ColumnWidth", 4);
    await $.mset((await $.idx((await $.mv((await $.v(C, "Sheet")), "Range")), ["B1:B60000"])), "ColumnWidth", 15);
    await $.mset((await $.idx((await $.mv((await $.v(C, "Sheet")), "Range")), ["C1:C60000"])), "ColumnWidth", 4);
    await $.mset((await $.idx((await $.mv((await $.v(C, "Sheet")), "Range")), ["D1:D60000"])), "ColumnWidth", 12);
    await $.mset((await $.idx((await $.mv((await $.v(C, "Sheet")), "Range")), ["E1:E60000"])), "ColumnWidth", 13);
    await $.mset((await $.idx((await $.mv((await $.v(C, "Sheet")), "Range")), ["F1:F60000"])), "ColumnWidth", 13);
    await $.mset((await $.idx((await $.mv((await $.v(C, "Sheet")), "Range")), ["G1:G60000"])), "ColumnWidth", 13);
    await $.mset((await $.idx((await $.mv((await $.v(C, "Sheet")), "Range")), ["H1:H60000"])), "ColumnWidth", 13);
    await $.mset((await $.idx((await $.mv((await $.v(C, "Sheet")), "Range")), ["I1:I60000"])), "ColumnWidth", 4);
    await $.mset((await $.idx((await $.mv((await $.v(C, "Sheet")), "Range")), ["J1:J60000"])), "ColumnWidth", 13);
    await $.mset((await $.idx((await $.mv((await $.v(C, "Sheet")), "Range")), ["K1:K60000"])), "ColumnWidth", 13);
    await $.mset((await $.idx((await $.mv((await $.v(C, "Sheet")), "Range")), ["L1:L60000"])), "ColumnWidth", 13);
    await $.mset((await $.idx((await $.mv((await $.v(C, "Sheet")), "Range")), ["M1:M60000"])), "ColumnWidth", 13);
    await $.mset((await $.idx((await $.mv((await $.v(C, "Sheet")), "Range")), ["E1:E60000"])), "NumberFormat", "#,##0.00");
    await $.mset((await $.idx((await $.mv((await $.v(C, "Sheet")), "Range")), ["F1:F60000"])), "NumberFormat", "#,##0.00");
    await $.mset((await $.idx((await $.mv((await $.v(C, "Sheet")), "Range")), ["G1:G60000"])), "NumberFormat", "#,##0.00");
    await $.mset((await $.idx((await $.mv((await $.v(C, "Sheet")), "Range")), ["H1:H60000"])), "NumberFormat", "#,##0.00");
    await $.mset((await $.idx((await $.mv((await $.v(C, "Sheet")), "Range")), ["J1:J60000"])), "NumberFormat", "#,##0.00");
    await $.mset((await $.idx((await $.mv((await $.v(C, "Sheet")), "Range")), ["K1:K60000"])), "NumberFormat", "#,##0.00");
    await $.mset((await $.idx((await $.mv((await $.v(C, "Sheet")), "Range")), ["L1:L60000"])), "NumberFormat", "#,##0.00");
    await $.mset((await $.idx((await $.mv((await $.v(C, "Sheet")), "Range")), ["M1:M60000"])), "NumberFormat", "#,##0.00");
  }
  return L0.result;
}, {"params": ["status"], "kind": "procedure", "ptypes": ["String"]});
  U.method("TFormDat", "ColumnHeader", async function ColumnHeader(Self, p0, p1, p2) {
  const C = $.chain(Self, U);
  const L0 = {"i": $.copyArg(p0), "k": $.copyArg(p1), "status": $.copyArg(p2), result: undefined};
  await $.fixArgs(L0, ["i", "k", "status"]);
  if ($.truthy($.eq(L0["status"], "NB"))) {
    { const $t7 = await $.iset((await $.mv((await $.v(C, "Sheet")), "Cells")), [$.add($.add(L0["i"], L0["k"]), 1), 1], "ID"); if ($t7 !== undefined) { await $.mset((await $.v(C, "Sheet")), "Cells", $t7); } }
    await $.mset((await $.mv((await $.idx((await $.mv((await $.v(C, "Sheet")), "Cells")), [$.add($.add(L0["i"], L0["k"]), 1), 1])), "Font")), "Name", "Tahoma");
    await $.mset((await $.mv((await $.idx((await $.mv((await $.v(C, "Sheet")), "Cells")), [$.add($.add(L0["i"], L0["k"]), 1), 1])), "Font")), "Color", (await $.v(C, "clBlue")));
    { const $t8 = await $.iset((await $.mv((await $.v(C, "Sheet")), "Cells")), [$.add($.add(L0["i"], L0["k"]), 1), 2], "Vəsaitin adı"); if ($t8 !== undefined) { await $.mset((await $.v(C, "Sheet")), "Cells", $t8); } }
    await $.mset((await $.mv((await $.idx((await $.mv((await $.v(C, "Sheet")), "Cells")), [$.add($.add(L0["i"], L0["k"]), 1), 2])), "Font")), "Name", "Tahoma");
    await $.mset((await $.mv((await $.idx((await $.mv((await $.v(C, "Sheet")), "Cells")), [$.add($.add(L0["i"], L0["k"]), 1), 2])), "Font")), "Color", (await $.v(C, "clBlue")));
    await $.mset((await $.idx((await $.mv((await $.v(C, "Sheet")), "Cells")), [$.add($.add(L0["i"], L0["k"]), 1), 3])), "Value", "Faiz");
    await $.mset((await $.mv((await $.idx((await $.mv((await $.v(C, "Sheet")), "Cells")), [$.add($.add(L0["i"], L0["k"]), 1), 3])), "Font")), "Name", "Tahoma");
    await $.mset((await $.mv((await $.idx((await $.mv((await $.v(C, "Sheet")), "Cells")), [$.add($.add(L0["i"], L0["k"]), 1), 3])), "Font")), "Color", (await $.v(C, "clBlue")));
    { const $t9 = await $.iset((await $.mv((await $.v(C, "Sheet")), "Cells")), [$.add($.add(L0["i"], L0["k"]), 1), 4], "İnv. Tarixi"); if ($t9 !== undefined) { await $.mset((await $.v(C, "Sheet")), "Cells", $t9); } }
    await $.mset((await $.mv((await $.idx((await $.mv((await $.v(C, "Sheet")), "Cells")), [$.add($.add(L0["i"], L0["k"]), 1), 4])), "Font")), "Name", "Tahoma");
    await $.mset((await $.mv((await $.idx((await $.mv((await $.v(C, "Sheet")), "Cells")), [$.add($.add(L0["i"], L0["k"]), 1), 4])), "Font")), "Color", (await $.v(C, "clBlue")));
    { const $t10 = await $.iset((await $.mv((await $.v(C, "Sheet")), "Cells")), [$.add($.add(L0["i"], L0["k"]), 1), 5], "İlkin dəyəri"); if ($t10 !== undefined) { await $.mset((await $.v(C, "Sheet")), "Cells", $t10); } }
    await $.mset((await $.mv((await $.idx((await $.mv((await $.v(C, "Sheet")), "Cells")), [$.add($.add(L0["i"], L0["k"]), 1), 5])), "Font")), "Name", "Tahoma");
    await $.mset((await $.mv((await $.idx((await $.mv((await $.v(C, "Sheet")), "Cells")), [$.add($.add(L0["i"], L0["k"]), 1), 5])), "Font")), "Color", (await $.v(C, "clBlue")));
    { const $t11 = await $.iset((await $.mv((await $.v(C, "Sheet")), "Cells")), [$.add($.add(L0["i"], L0["k"]), 1), 6], "Qalıq dəyəri"); if ($t11 !== undefined) { await $.mset((await $.v(C, "Sheet")), "Cells", $t11); } }
    await $.mset((await $.mv((await $.idx((await $.mv((await $.v(C, "Sheet")), "Cells")), [$.add($.add(L0["i"], L0["k"]), 1), 6])), "Font")), "Name", "Tahoma");
    await $.mset((await $.mv((await $.idx((await $.mv((await $.v(C, "Sheet")), "Cells")), [$.add($.add(L0["i"], L0["k"]), 1), 6])), "Font")), "Color", (await $.v(C, "clBlue")));
    { const $t12 = await $.iset((await $.mv((await $.v(C, "Sheet")), "Cells")), [$.add($.add(L0["i"], L0["k"]), 1), 7], "Amortizasiya"); if ($t12 !== undefined) { await $.mset((await $.v(C, "Sheet")), "Cells", $t12); } }
    await $.mset((await $.mv((await $.idx((await $.mv((await $.v(C, "Sheet")), "Cells")), [$.add($.add(L0["i"], L0["k"]), 1), 7])), "Font")), "Name", "Tahoma");
    await $.mset((await $.mv((await $.idx((await $.mv((await $.v(C, "Sheet")), "Cells")), [$.add($.add(L0["i"], L0["k"]), 1), 7])), "Font")), "Color", (await $.v(C, "clBlue")));
    { const $t13 = await $.iset((await $.mv((await $.v(C, "Sheet")), "Cells")), [$.add($.add(L0["i"], L0["k"]), 1), 8], "Yığ. Amort"); if ($t13 !== undefined) { await $.mset((await $.v(C, "Sheet")), "Cells", $t13); } }
    await $.mset((await $.mv((await $.idx((await $.mv((await $.v(C, "Sheet")), "Cells")), [$.add($.add(L0["i"], L0["k"]), 1), 8])), "Font")), "Name", "Tahoma");
    await $.mset((await $.mv((await $.idx((await $.mv((await $.v(C, "Sheet")), "Cells")), [$.add($.add(L0["i"], L0["k"]), 1), 8])), "Font")), "Color", (await $.v(C, "clBlue")));
    { const $t14 = await $.iset((await $.mv((await $.v(C, "Sheet")), "Cells")), [$.add($.add(L0["i"], L0["k"]), 1), 9], "Amort. Tarixi"); if ($t14 !== undefined) { await $.mset((await $.v(C, "Sheet")), "Cells", $t14); } }
    await $.mset((await $.mv((await $.idx((await $.mv((await $.v(C, "Sheet")), "Cells")), [$.add($.add(L0["i"], L0["k"]), 1), 9])), "Font")), "Name", "Tahoma");
    await $.mset((await $.mv((await $.idx((await $.mv((await $.v(C, "Sheet")), "Cells")), [$.add($.add(L0["i"], L0["k"]), 1), 9])), "Font")), "Color", (await $.v(C, "clBlue")));
    { const $t15 = await $.iset((await $.mv((await $.v(C, "Sheet")), "Cells")), [$.add($.add(L0["i"], L0["k"]), 1), 10], "Inventar №"); if ($t15 !== undefined) { await $.mset((await $.v(C, "Sheet")), "Cells", $t15); } }
    await $.mset((await $.mv((await $.idx((await $.mv((await $.v(C, "Sheet")), "Cells")), [$.add($.add(L0["i"], L0["k"]), 1), 10])), "Font")), "Name", "Tahoma");
    await $.mset((await $.mv((await $.idx((await $.mv((await $.v(C, "Sheet")), "Cells")), [$.add($.add(L0["i"], L0["k"]), 1), 10])), "Font")), "Color", (await $.v(C, "clBlue")));
  }
  if ($.truthy($.eq(L0["status"], "NL"))) {
    { const $t16 = await $.iset((await $.mv((await $.v(C, "Sheet")), "Cells")), [$.add($.add(L0["i"], L0["k"]), 1), 1], "ID"); if ($t16 !== undefined) { await $.mset((await $.v(C, "Sheet")), "Cells", $t16); } }
    await $.mset((await $.mv((await $.idx((await $.mv((await $.v(C, "Sheet")), "Cells")), [$.add($.add(L0["i"], L0["k"]), 1), 1])), "Font")), "Name", "Tahoma");
    await $.mset((await $.mv((await $.idx((await $.mv((await $.v(C, "Sheet")), "Cells")), [$.add($.add(L0["i"], L0["k"]), 1), 1])), "Font")), "Color", (await $.v(C, "clBlue")));
    { const $t17 = await $.iset((await $.mv((await $.v(C, "Sheet")), "Cells")), [$.add($.add(L0["i"], L0["k"]), 1), 2], "ID"); if ($t17 !== undefined) { await $.mset((await $.v(C, "Sheet")), "Cells", $t17); } }
    await $.mset((await $.mv((await $.idx((await $.mv((await $.v(C, "Sheet")), "Cells")), [$.add($.add(L0["i"], L0["k"]), 1), 2])), "Font")), "Name", "Tahoma");
    await $.mset((await $.mv((await $.idx((await $.mv((await $.v(C, "Sheet")), "Cells")), [$.add($.add(L0["i"], L0["k"]), 1), 2])), "Font")), "Color", (await $.v(C, "clBlue")));
    await $.mset((await $.idx((await $.mv((await $.v(C, "Sheet")), "Cells")), [$.add($.add(L0["i"], L0["k"]), 1), 3])), "Value", "Faiz");
    await $.mset((await $.mv((await $.idx((await $.mv((await $.v(C, "Sheet")), "Cells")), [$.add($.add(L0["i"], L0["k"]), 1), 3])), "Font")), "Name", "Tahoma");
    await $.mset((await $.mv((await $.idx((await $.mv((await $.v(C, "Sheet")), "Cells")), [$.add($.add(L0["i"], L0["k"]), 1), 3])), "Font")), "Color", (await $.v(C, "clBlue")));
    { const $t18 = await $.iset((await $.mv((await $.v(C, "Sheet")), "Cells")), [$.add($.add(L0["i"], L0["k"]), 1), 4], "İnventar tar."); if ($t18 !== undefined) { await $.mset((await $.v(C, "Sheet")), "Cells", $t18); } }
    await $.mset((await $.mv((await $.idx((await $.mv((await $.v(C, "Sheet")), "Cells")), [$.add($.add(L0["i"], L0["k"]), 1), 4])), "Font")), "Name", "Tahoma");
    await $.mset((await $.mv((await $.idx((await $.mv((await $.v(C, "Sheet")), "Cells")), [$.add($.add(L0["i"], L0["k"]), 1), 4])), "Font")), "Color", (await $.v(C, "clBlue")));
    { const $t19 = await $.iset((await $.mv((await $.v(C, "Sheet")), "Cells")), [$.add($.add(L0["i"], L0["k"]), 1), 5], "İlin əvv. dəy."); if ($t19 !== undefined) { await $.mset((await $.v(C, "Sheet")), "Cells", $t19); } }
    await $.mset((await $.mv((await $.idx((await $.mv((await $.v(C, "Sheet")), "Cells")), [$.add($.add(L0["i"], L0["k"]), 1), 5])), "Font")), "Name", "Tahoma");
    await $.mset((await $.mv((await $.idx((await $.mv((await $.v(C, "Sheet")), "Cells")), [$.add($.add(L0["i"], L0["k"]), 1), 5])), "Font")), "Color", (await $.v(C, "clBlue")));
    { const $t20 = await $.iset((await $.mv((await $.v(C, "Sheet")), "Cells")), [$.add($.add(L0["i"], L0["k"]), 1), 6], "Qalıq dəyəri"); if ($t20 !== undefined) { await $.mset((await $.v(C, "Sheet")), "Cells", $t20); } }
    await $.mset((await $.mv((await $.idx((await $.mv((await $.v(C, "Sheet")), "Cells")), [$.add($.add(L0["i"], L0["k"]), 1), 6])), "Font")), "Name", "Tahoma");
    await $.mset((await $.mv((await $.idx((await $.mv((await $.v(C, "Sheet")), "Cells")), [$.add($.add(L0["i"], L0["k"]), 1), 6])), "Font")), "Color", (await $.v(C, "clBlue")));
    { const $t21 = await $.iset((await $.mv((await $.v(C, "Sheet")), "Cells")), [$.add($.add(L0["i"], L0["k"]), 1), 7], "Amortizasiya"); if ($t21 !== undefined) { await $.mset((await $.v(C, "Sheet")), "Cells", $t21); } }
    await $.mset((await $.mv((await $.idx((await $.mv((await $.v(C, "Sheet")), "Cells")), [$.add($.add(L0["i"], L0["k"]), 1), 7])), "Font")), "Name", "Tahoma");
    await $.mset((await $.mv((await $.idx((await $.mv((await $.v(C, "Sheet")), "Cells")), [$.add($.add(L0["i"], L0["k"]), 1), 7])), "Font")), "Color", (await $.v(C, "clBlue")));
    { const $t22 = await $.iset((await $.mv((await $.v(C, "Sheet")), "Cells")), [$.add($.add(L0["i"], L0["k"]), 1), 8], "Yığ. Amort"); if ($t22 !== undefined) { await $.mset((await $.v(C, "Sheet")), "Cells", $t22); } }
    await $.mset((await $.mv((await $.idx((await $.mv((await $.v(C, "Sheet")), "Cells")), [$.add($.add(L0["i"], L0["k"]), 1), 8])), "Font")), "Name", "Tahoma");
    await $.mset((await $.mv((await $.idx((await $.mv((await $.v(C, "Sheet")), "Cells")), [$.add($.add(L0["i"], L0["k"]), 1), 8])), "Font")), "Color", (await $.v(C, "clBlue")));
    { const $t23 = await $.iset((await $.mv((await $.v(C, "Sheet")), "Cells")), [$.add($.add(L0["i"], L0["k"]), 1), 9], "Amort. tarixi"); if ($t23 !== undefined) { await $.mset((await $.v(C, "Sheet")), "Cells", $t23); } }
    await $.mset((await $.mv((await $.idx((await $.mv((await $.v(C, "Sheet")), "Cells")), [$.add($.add(L0["i"], L0["k"]), 1), 9])), "Font")), "Name", "Tahoma");
    await $.mset((await $.mv((await $.idx((await $.mv((await $.v(C, "Sheet")), "Cells")), [$.add($.add(L0["i"], L0["k"]), 1), 9])), "Font")), "Color", (await $.v(C, "clBlue")));
    { const $t24 = await $.iset((await $.mv((await $.v(C, "Sheet")), "Cells")), [$.add($.add(L0["i"], L0["k"]), 1), 10], "Inventar №"); if ($t24 !== undefined) { await $.mset((await $.v(C, "Sheet")), "Cells", $t24); } }
    await $.mset((await $.mv((await $.idx((await $.mv((await $.v(C, "Sheet")), "Cells")), [$.add($.add(L0["i"], L0["k"]), 1), 10])), "Font")), "Name", "Tahoma");
    await $.mset((await $.mv((await $.idx((await $.mv((await $.v(C, "Sheet")), "Cells")), [$.add($.add(L0["i"], L0["k"]), 1), 10])), "Font")), "Color", (await $.v(C, "clBlue")));
  }
  if ($.truthy($.eq(L0["status"], "Both"))) {
    { const $t25 = await $.iset((await $.mv((await $.v(C, "Sheet")), "Cells")), [$.add($.add(L0["i"], L0["k"]), 1), 1], "ID"); if ($t25 !== undefined) { await $.mset((await $.v(C, "Sheet")), "Cells", $t25); } }
    await $.mset((await $.mv((await $.idx((await $.mv((await $.v(C, "Sheet")), "Cells")), [$.add($.add(L0["i"], L0["k"]), 1), 1])), "Font")), "Name", "Tahoma");
    await $.mset((await $.mv((await $.idx((await $.mv((await $.v(C, "Sheet")), "Cells")), [$.add($.add(L0["i"], L0["k"]), 1), 1])), "Font")), "Color", (await $.v(C, "clBlue")));
    { const $t26 = await $.iset((await $.mv((await $.v(C, "Sheet")), "Cells")), [$.add($.add(L0["i"], L0["k"]), 1), 2], "Vəsaitin adı"); if ($t26 !== undefined) { await $.mset((await $.v(C, "Sheet")), "Cells", $t26); } }
    await $.mset((await $.mv((await $.idx((await $.mv((await $.v(C, "Sheet")), "Cells")), [$.add($.add(L0["i"], L0["k"]), 1), 2])), "Font")), "Name", "Tahoma");
    await $.mset((await $.mv((await $.idx((await $.mv((await $.v(C, "Sheet")), "Cells")), [$.add($.add(L0["i"], L0["k"]), 1), 2])), "Font")), "Color", (await $.v(C, "clBlue")));
    await $.mset((await $.idx((await $.mv((await $.v(C, "Sheet")), "Cells")), [$.add($.add(L0["i"], L0["k"]), 1), 3])), "Value", "Faiz");
    await $.mset((await $.mv((await $.idx((await $.mv((await $.v(C, "Sheet")), "Cells")), [$.add($.add(L0["i"], L0["k"]), 1), 3])), "Font")), "Name", "Tahoma");
    await $.mset((await $.mv((await $.idx((await $.mv((await $.v(C, "Sheet")), "Cells")), [$.add($.add(L0["i"], L0["k"]), 1), 3])), "Font")), "Color", (await $.v(C, "clBlue")));
    { const $t27 = await $.iset((await $.mv((await $.v(C, "Sheet")), "Cells")), [$.add($.add(L0["i"], L0["k"]), 1), 4], "İnv. Tarixi"); if ($t27 !== undefined) { await $.mset((await $.v(C, "Sheet")), "Cells", $t27); } }
    await $.mset((await $.mv((await $.idx((await $.mv((await $.v(C, "Sheet")), "Cells")), [$.add($.add(L0["i"], L0["k"]), 1), 4])), "Font")), "Name", "Tahoma");
    await $.mset((await $.mv((await $.idx((await $.mv((await $.v(C, "Sheet")), "Cells")), [$.add($.add(L0["i"], L0["k"]), 1), 4])), "Font")), "Color", (await $.v(C, "clBlue")));
    { const $t28 = await $.iset((await $.mv((await $.v(C, "Sheet")), "Cells")), [$.add($.add(L0["i"], L0["k"]), 1), 5], "İlkin dəyəri"); if ($t28 !== undefined) { await $.mset((await $.v(C, "Sheet")), "Cells", $t28); } }
    await $.mset((await $.mv((await $.idx((await $.mv((await $.v(C, "Sheet")), "Cells")), [$.add($.add(L0["i"], L0["k"]), 1), 5])), "Font")), "Name", "Tahoma");
    await $.mset((await $.mv((await $.idx((await $.mv((await $.v(C, "Sheet")), "Cells")), [$.add($.add(L0["i"], L0["k"]), 1), 5])), "Font")), "Color", (await $.v(C, "clBlue")));
    { const $t29 = await $.iset((await $.mv((await $.v(C, "Sheet")), "Cells")), [$.add($.add(L0["i"], L0["k"]), 1), 6], "Qalıq dəyəri"); if ($t29 !== undefined) { await $.mset((await $.v(C, "Sheet")), "Cells", $t29); } }
    await $.mset((await $.mv((await $.idx((await $.mv((await $.v(C, "Sheet")), "Cells")), [$.add($.add(L0["i"], L0["k"]), 1), 6])), "Font")), "Name", "Tahoma");
    await $.mset((await $.mv((await $.idx((await $.mv((await $.v(C, "Sheet")), "Cells")), [$.add($.add(L0["i"], L0["k"]), 1), 6])), "Font")), "Color", (await $.v(C, "clBlue")));
    { const $t30 = await $.iset((await $.mv((await $.v(C, "Sheet")), "Cells")), [$.add($.add(L0["i"], L0["k"]), 1), 7], "Amortizasiya"); if ($t30 !== undefined) { await $.mset((await $.v(C, "Sheet")), "Cells", $t30); } }
    await $.mset((await $.mv((await $.idx((await $.mv((await $.v(C, "Sheet")), "Cells")), [$.add($.add(L0["i"], L0["k"]), 1), 7])), "Font")), "Name", "Tahoma");
    await $.mset((await $.mv((await $.idx((await $.mv((await $.v(C, "Sheet")), "Cells")), [$.add($.add(L0["i"], L0["k"]), 1), 7])), "Font")), "Color", (await $.v(C, "clBlue")));
    { const $t31 = await $.iset((await $.mv((await $.v(C, "Sheet")), "Cells")), [$.add($.add(L0["i"], L0["k"]), 1), 8], "Yığ. Amort"); if ($t31 !== undefined) { await $.mset((await $.v(C, "Sheet")), "Cells", $t31); } }
    await $.mset((await $.mv((await $.idx((await $.mv((await $.v(C, "Sheet")), "Cells")), [$.add($.add(L0["i"], L0["k"]), 1), 8])), "Font")), "Name", "Tahoma");
    await $.mset((await $.mv((await $.idx((await $.mv((await $.v(C, "Sheet")), "Cells")), [$.add($.add(L0["i"], L0["k"]), 1), 8])), "Font")), "Color", (await $.v(C, "clBlue")));
    await $.mset((await $.idx((await $.mv((await $.v(C, "Sheet")), "Cells")), [$.add($.add(L0["i"], L0["k"]), 1), 9])), "Value", "Faiz Vergi");
    await $.mset((await $.mv((await $.idx((await $.mv((await $.v(C, "Sheet")), "Cells")), [$.add($.add(L0["i"], L0["k"]), 1), 9])), "Font")), "Name", "Tahoma");
    await $.mset((await $.mv((await $.idx((await $.mv((await $.v(C, "Sheet")), "Cells")), [$.add($.add(L0["i"], L0["k"]), 1), 9])), "Font")), "Color", (await $.v(C, "clBlue")));
    { const $t32 = await $.iset((await $.mv((await $.v(C, "Sheet")), "Cells")), [$.add($.add(L0["i"], L0["k"]), 1), 10], "ilin əvv. dəy."); if ($t32 !== undefined) { await $.mset((await $.v(C, "Sheet")), "Cells", $t32); } }
    await $.mset((await $.mv((await $.idx((await $.mv((await $.v(C, "Sheet")), "Cells")), [$.add($.add(L0["i"], L0["k"]), 1), 10])), "Font")), "Name", "Tahoma");
    await $.mset((await $.mv((await $.idx((await $.mv((await $.v(C, "Sheet")), "Cells")), [$.add($.add(L0["i"], L0["k"]), 1), 10])), "Font")), "Color", (await $.v(C, "clBlue")));
    { const $t33 = await $.iset((await $.mv((await $.v(C, "Sheet")), "Cells")), [$.add($.add(L0["i"], L0["k"]), 1), 11], "Qalıq dəyəri"); if ($t33 !== undefined) { await $.mset((await $.v(C, "Sheet")), "Cells", $t33); } }
    await $.mset((await $.mv((await $.idx((await $.mv((await $.v(C, "Sheet")), "Cells")), [$.add($.add(L0["i"], L0["k"]), 1), 11])), "Font")), "Name", "Tahoma");
    await $.mset((await $.mv((await $.idx((await $.mv((await $.v(C, "Sheet")), "Cells")), [$.add($.add(L0["i"], L0["k"]), 1), 11])), "Font")), "Color", (await $.v(C, "clBlue")));
    { const $t34 = await $.iset((await $.mv((await $.v(C, "Sheet")), "Cells")), [$.add($.add(L0["i"], L0["k"]), 1), 12], "Amortizasiya"); if ($t34 !== undefined) { await $.mset((await $.v(C, "Sheet")), "Cells", $t34); } }
    await $.mset((await $.mv((await $.idx((await $.mv((await $.v(C, "Sheet")), "Cells")), [$.add($.add(L0["i"], L0["k"]), 1), 12])), "Font")), "Name", "Tahoma");
    await $.mset((await $.mv((await $.idx((await $.mv((await $.v(C, "Sheet")), "Cells")), [$.add($.add(L0["i"], L0["k"]), 1), 12])), "Font")), "Color", (await $.v(C, "clBlue")));
    { const $t35 = await $.iset((await $.mv((await $.v(C, "Sheet")), "Cells")), [$.add($.add(L0["i"], L0["k"]), 1), 13], "Yığ. Amort"); if ($t35 !== undefined) { await $.mset((await $.v(C, "Sheet")), "Cells", $t35); } }
    await $.mset((await $.mv((await $.idx((await $.mv((await $.v(C, "Sheet")), "Cells")), [$.add($.add(L0["i"], L0["k"]), 1), 13])), "Font")), "Name", "Tahoma");
    await $.mset((await $.mv((await $.idx((await $.mv((await $.v(C, "Sheet")), "Cells")), [$.add($.add(L0["i"], L0["k"]), 1), 13])), "Font")), "Color", (await $.v(C, "clBlue")));
    { const $t36 = await $.iset((await $.mv((await $.v(C, "Sheet")), "Cells")), [$.add($.add(L0["i"], L0["k"]), 1), 14], "Amort. Tarixi"); if ($t36 !== undefined) { await $.mset((await $.v(C, "Sheet")), "Cells", $t36); } }
    await $.mset((await $.mv((await $.idx((await $.mv((await $.v(C, "Sheet")), "Cells")), [$.add($.add(L0["i"], L0["k"]), 1), 14])), "Font")), "Name", "Tahoma");
    await $.mset((await $.mv((await $.idx((await $.mv((await $.v(C, "Sheet")), "Cells")), [$.add($.add(L0["i"], L0["k"]), 1), 14])), "Font")), "Color", (await $.v(C, "clBlue")));
    { const $t37 = await $.iset((await $.mv((await $.v(C, "Sheet")), "Cells")), [$.add($.add(L0["i"], L0["k"]), 1), 15], "Inventar №"); if ($t37 !== undefined) { await $.mset((await $.v(C, "Sheet")), "Cells", $t37); } }
    await $.mset((await $.mv((await $.idx((await $.mv((await $.v(C, "Sheet")), "Cells")), [$.add($.add(L0["i"], L0["k"]), 1), 15])), "Font")), "Name", "Tahoma");
    await $.mset((await $.mv((await $.idx((await $.mv((await $.v(C, "Sheet")), "Cells")), [$.add($.add(L0["i"], L0["k"]), 1), 15])), "Font")), "Color", (await $.v(C, "clBlue")));
  }
  return L0.result;
}, {"params": ["i", "k", "status"], "kind": "procedure", "ptypes": ["integer", "integer", "String"]});
  U.method("TFormDat", "ExportToExcel", async function ExportToExcel(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"status": $.copyArg(p0), result: undefined, "i": 0, "j": 0, "k": 0, "m": 0, "e_first_price": 0, "e_remainder": 0, "e_amort": 0, "e_all_amort": 0, "e_tax_first_price": 0, "e_tax_remainder": 0, "e_tax_amort": 0, "e_tax_all_amort": 0};
  await $.fixArgs(L0, ["status"]);
  L0["f"] = 3;
  L0["dd"] = 2;
  try {
    await $.mset((await $.v(C, "Screen")), "Cursor", (await $.v(C, "crSQLWait")));
    await $.stmt($.call(C, "CreateSheet", []));
    await $.stmt($.call(C, "ExportDataTable", []));
    L0["k"] = 0;
    {
      const $t38 = (await $.v(C, "DataModWares"));
      if ($.truthy($.eq((await $.wv([$t38], "status", { get: async () => L0["status"], set: async (v) => { L0["status"] = v; }, local: true }, false)), "NB"))) {
        await $.stmt((await $.wcall([$t38], "ExcelFormat", ["NB"], C)));
        await $.mset((await $.idx((await $.mv((await $.idx((await $.mv((await $.wv([$t38], "Exl", C, false)), "WorkBooks")), [1])), "WorkSheets")), [1])), "name", " Milli Bank ");
        { const $t39 = (await $.mv((await $.wv([$t38], "ODSGroupXLS", C, false)), "RecordCount"));
          await $.wset([$t38], "i", 1, { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true });
          let $t40 = true;
          for (;;) {
            if (!$t40) { await $.wset([$t38], "i", $.succ((await $.wv([$t38], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false)), 1), { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }); }
            $t40 = false;
            if (!($.ord((await $.wv([$t38], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false))) <= $.ord($t39))) break;
            { const $t41 = await $.iset((await $.mv((await $.wv([$t38], "Sheet", C, false)), "Cells")), [$.add((await $.wv([$t38], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false)), (await $.wv([$t38], "k", { get: async () => L0["k"], set: async (v) => { L0["k"] = v; }, local: true }, false))), 1], " Grup :"); if ($t41 !== undefined) { await $.mset((await $.wv([$t38], "Sheet", C, false)), "Cells", $t41); } }
            await $.mset((await $.mv((await $.idx((await $.mv((await $.wv([$t38], "Sheet", C, false)), "Cells")), [$.add((await $.wv([$t38], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false)), (await $.wv([$t38], "k", { get: async () => L0["k"], set: async (v) => { L0["k"] = v; }, local: true }, false))), 1])), "Font")), "Bold", (await $.wv([$t38], "true", C, false)));
            { const $t42 = await $.iset((await $.mv((await $.wv([$t38], "Sheet", C, false)), "Cells")), [$.add((await $.wv([$t38], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false)), (await $.wv([$t38], "k", { get: async () => L0["k"], set: async (v) => { L0["k"] = v; }, local: true }, false))), 2], (await $.mv((await $.mcall((await $.wv([$t38], "ODSGroupXLS", C, false)), "FieldByName", ["Name"])), "AsString"))); if ($t42 !== undefined) { await $.mset((await $.wv([$t38], "Sheet", C, false)), "Cells", $t42); } }
            await $.mset((await $.mv((await $.idx((await $.mv((await $.wv([$t38], "Sheet", C, false)), "Cells")), [$.add((await $.wv([$t38], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false)), (await $.wv([$t38], "k", { get: async () => L0["k"], set: async (v) => { L0["k"] = v; }, local: true }, false))), 2])), "Font")), "Bold", (await $.wv([$t38], "true", C, false)));
            await $.mset((await $.mv((await $.idx((await $.mv((await $.wv([$t38], "Sheet", C, false)), "Cells")), [$.add((await $.wv([$t38], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false)), (await $.wv([$t38], "k", { get: async () => L0["k"], set: async (v) => { L0["k"] = v; }, local: true }, false))), 2])), "Font")), "Name", "Tahoma");
            await $.mset((await $.mv((await $.idx((await $.mv((await $.wv([$t38], "Sheet", C, false)), "Cells")), [$.add((await $.wv([$t38], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false)), (await $.wv([$t38], "k", { get: async () => L0["k"], set: async (v) => { L0["k"] = v; }, local: true }, false))), 2])), "Font")), "Color", (await $.wv([$t38], "clNavy", C, false)));
            await $.stmt((await $.wcall([$t38], "ColumnHeader", [(await $.wv([$t38], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false)), (await $.wv([$t38], "k", { get: async () => L0["k"], set: async (v) => { L0["k"] = v; }, local: true }, false)), "NB"], C)));
            await $.wset([$t38], "e_First_Price", 0, { get: async () => L0["e_first_price"], set: async (v) => { L0["e_first_price"] = v; }, local: true });
            await $.wset([$t38], "e_Remainder", 0, { get: async () => L0["e_remainder"], set: async (v) => { L0["e_remainder"] = v; }, local: true });
            await $.wset([$t38], "e_All_Amort", 0, { get: async () => L0["e_all_amort"], set: async (v) => { L0["e_all_amort"] = v; }, local: true });
            await $.wset([$t38], "e_Amort", 0, { get: async () => L0["e_amort"], set: async (v) => { L0["e_amort"] = v; }, local: true });
            { const $t43 = (await $.mv((await $.wv([$t38], "ODSWaresXLS", C, false)), "RecordCount"));
              await $.wset([$t38], "j", 1, { get: async () => L0["j"], set: async (v) => { L0["j"] = v; }, local: true });
              let $t44 = true;
              for (;;) {
                if (!$t44) { await $.wset([$t38], "j", $.succ((await $.wv([$t38], "j", { get: async () => L0["j"], set: async (v) => { L0["j"] = v; }, local: true }, false)), 1), { get: async () => L0["j"], set: async (v) => { L0["j"] = v; }, local: true }); }
                $t44 = false;
                if (!($.ord((await $.wv([$t38], "j", { get: async () => L0["j"], set: async (v) => { L0["j"] = v; }, local: true }, false))) <= $.ord($t43))) break;
                await $.wset([$t38], "e_First_Price", $.add((await $.wv([$t38], "e_First_Price", { get: async () => L0["e_first_price"], set: async (v) => { L0["e_first_price"] = v; }, local: true }, false)), (await $.mv((await $.mcall((await $.wv([$t38], "ODSWaresXLS", C, false)), "FieldByName", ["First_Price"])), "AsFloat"))), { get: async () => L0["e_first_price"], set: async (v) => { L0["e_first_price"] = v; }, local: true });
                await $.wset([$t38], "e_Remainder", $.add((await $.wv([$t38], "e_Remainder", { get: async () => L0["e_remainder"], set: async (v) => { L0["e_remainder"] = v; }, local: true }, false)), (await $.mv((await $.mcall((await $.wv([$t38], "ODSWaresXLS", C, false)), "FieldByName", ["Remainder"])), "AsFloat"))), { get: async () => L0["e_remainder"], set: async (v) => { L0["e_remainder"] = v; }, local: true });
                await $.wset([$t38], "e_Amort", $.add((await $.wv([$t38], "e_Amort", { get: async () => L0["e_amort"], set: async (v) => { L0["e_amort"] = v; }, local: true }, false)), (await $.mv((await $.mcall((await $.wv([$t38], "ODSWaresXLS", C, false)), "FieldByName", ["Amort"])), "AsFloat"))), { get: async () => L0["e_amort"], set: async (v) => { L0["e_amort"] = v; }, local: true });
                await $.wset([$t38], "e_All_Amort", $.add((await $.wv([$t38], "e_All_Amort", { get: async () => L0["e_all_amort"], set: async (v) => { L0["e_all_amort"] = v; }, local: true }, false)), (await $.mv((await $.mcall((await $.wv([$t38], "ODSWaresXLS", C, false)), "FieldByName", ["All_Amort"])), "AsFloat"))), { get: async () => L0["e_all_amort"], set: async (v) => { L0["e_all_amort"] = v; }, local: true });
                { const $t45 = await $.iset((await $.mv((await $.wv([$t38], "Sheet", C, false)), "Cells")), [$.add($.add($.add((await $.wv([$t38], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false)), (await $.wv([$t38], "k", { get: async () => L0["k"], set: async (v) => { L0["k"] = v; }, local: true }, false))), (await $.wv([$t38], "j", { get: async () => L0["j"], set: async (v) => { L0["j"] = v; }, local: true }, false))), 1), 1], (await $.mv((await $.mcall((await $.wv([$t38], "ODSWaresXLS", C, false)), "FieldByName", ["wares_id"])), "AsFloat"))); if ($t45 !== undefined) { await $.mset((await $.wv([$t38], "Sheet", C, false)), "Cells", $t45); } }
                { const $t46 = await $.iset((await $.mv((await $.wv([$t38], "Sheet", C, false)), "Cells")), [$.add($.add($.add((await $.wv([$t38], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false)), (await $.wv([$t38], "k", { get: async () => L0["k"], set: async (v) => { L0["k"] = v; }, local: true }, false))), (await $.wv([$t38], "j", { get: async () => L0["j"], set: async (v) => { L0["j"] = v; }, local: true }, false))), 1), 2], (await $.mv((await $.mcall((await $.wv([$t38], "ODSWaresXLS", C, false)), "FieldByName", ["wares_name"])), "AsString"))); if ($t46 !== undefined) { await $.mset((await $.wv([$t38], "Sheet", C, false)), "Cells", $t46); } }
                await $.mset((await $.mv((await $.idx((await $.mv((await $.wv([$t38], "Sheet", C, false)), "Cells")), [$.add($.add($.add((await $.wv([$t38], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false)), (await $.wv([$t38], "k", { get: async () => L0["k"], set: async (v) => { L0["k"] = v; }, local: true }, false))), (await $.wv([$t38], "j", { get: async () => L0["j"], set: async (v) => { L0["j"] = v; }, local: true }, false))), 1), 2])), "Font")), "Name", "Tahoma");
                { const $t47 = await $.iset((await $.mv((await $.wv([$t38], "Sheet", C, false)), "Cells")), [$.add($.add($.add((await $.wv([$t38], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false)), (await $.wv([$t38], "k", { get: async () => L0["k"], set: async (v) => { L0["k"] = v; }, local: true }, false))), (await $.wv([$t38], "j", { get: async () => L0["j"], set: async (v) => { L0["j"] = v; }, local: true }, false))), 1), 3], (await $.mv((await $.mcall((await $.wv([$t38], "ODSWaresXLS", C, false)), "FieldByName", ["percent"])), "AsFloat"))); if ($t47 !== undefined) { await $.mset((await $.wv([$t38], "Sheet", C, false)), "Cells", $t47); } }
                { const $t48 = await $.iset((await $.mv((await $.wv([$t38], "Sheet", C, false)), "Cells")), [$.add($.add($.add((await $.wv([$t38], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false)), (await $.wv([$t38], "k", { get: async () => L0["k"], set: async (v) => { L0["k"] = v; }, local: true }, false))), (await $.wv([$t38], "j", { get: async () => L0["j"], set: async (v) => { L0["j"] = v; }, local: true }, false))), 1), 4], (await $.mv((await $.mcall((await $.wv([$t38], "ODSWaresXLS", C, false)), "FieldByName", ["inventar_date"])), "AsDateTime"))); if ($t48 !== undefined) { await $.mset((await $.wv([$t38], "Sheet", C, false)), "Cells", $t48); } }
                { const $t49 = await $.iset((await $.mv((await $.wv([$t38], "Sheet", C, false)), "Cells")), [$.add($.add($.add((await $.wv([$t38], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false)), (await $.wv([$t38], "k", { get: async () => L0["k"], set: async (v) => { L0["k"] = v; }, local: true }, false))), (await $.wv([$t38], "j", { get: async () => L0["j"], set: async (v) => { L0["j"] = v; }, local: true }, false))), 1), 5], (await $.mv((await $.mcall((await $.wv([$t38], "ODSWaresXLS", C, false)), "FieldByName", ["first_price"])), "AsFloat"))); if ($t49 !== undefined) { await $.mset((await $.wv([$t38], "Sheet", C, false)), "Cells", $t49); } }
                { const $t50 = await $.iset((await $.mv((await $.wv([$t38], "Sheet", C, false)), "Cells")), [$.add($.add($.add((await $.wv([$t38], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false)), (await $.wv([$t38], "k", { get: async () => L0["k"], set: async (v) => { L0["k"] = v; }, local: true }, false))), (await $.wv([$t38], "j", { get: async () => L0["j"], set: async (v) => { L0["j"] = v; }, local: true }, false))), 1), 6], (await $.mv((await $.mcall((await $.wv([$t38], "ODSWaresXLS", C, false)), "FieldByName", ["remainder"])), "AsFloat"))); if ($t50 !== undefined) { await $.mset((await $.wv([$t38], "Sheet", C, false)), "Cells", $t50); } }
                { const $t51 = await $.iset((await $.mv((await $.wv([$t38], "Sheet", C, false)), "Cells")), [$.add($.add($.add((await $.wv([$t38], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false)), (await $.wv([$t38], "k", { get: async () => L0["k"], set: async (v) => { L0["k"] = v; }, local: true }, false))), (await $.wv([$t38], "j", { get: async () => L0["j"], set: async (v) => { L0["j"] = v; }, local: true }, false))), 1), 7], (await $.mv((await $.mcall((await $.wv([$t38], "ODSWaresXLS", C, false)), "FieldByName", ["amort"])), "AsFloat"))); if ($t51 !== undefined) { await $.mset((await $.wv([$t38], "Sheet", C, false)), "Cells", $t51); } }
                { const $t52 = await $.iset((await $.mv((await $.wv([$t38], "Sheet", C, false)), "Cells")), [$.add($.add($.add((await $.wv([$t38], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false)), (await $.wv([$t38], "k", { get: async () => L0["k"], set: async (v) => { L0["k"] = v; }, local: true }, false))), (await $.wv([$t38], "j", { get: async () => L0["j"], set: async (v) => { L0["j"] = v; }, local: true }, false))), 1), 8], (await $.mv((await $.mcall((await $.wv([$t38], "ODSWaresXLS", C, false)), "FieldByName", ["all_amort"])), "AsFloat"))); if ($t52 !== undefined) { await $.mset((await $.wv([$t38], "Sheet", C, false)), "Cells", $t52); } }
                { const $t53 = await $.iset((await $.mv((await $.wv([$t38], "Sheet", C, false)), "Cells")), [$.add($.add($.add((await $.wv([$t38], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false)), (await $.wv([$t38], "k", { get: async () => L0["k"], set: async (v) => { L0["k"] = v; }, local: true }, false))), (await $.wv([$t38], "j", { get: async () => L0["j"], set: async (v) => { L0["j"] = v; }, local: true }, false))), 1), 9], (await $.mv((await $.mcall((await $.wv([$t38], "ODSWaresXLS", C, false)), "FieldByName", ["amort_date"])), "AsDateTime"))); if ($t53 !== undefined) { await $.mset((await $.wv([$t38], "Sheet", C, false)), "Cells", $t53); } }
                { const $t54 = await $.iset((await $.mv((await $.wv([$t38], "Sheet", C, false)), "Cells")), [$.add($.add($.add((await $.wv([$t38], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false)), (await $.wv([$t38], "k", { get: async () => L0["k"], set: async (v) => { L0["k"] = v; }, local: true }, false))), (await $.wv([$t38], "j", { get: async () => L0["j"], set: async (v) => { L0["j"] = v; }, local: true }, false))), 1), 10], (await $.mv((await $.mcall((await $.wv([$t38], "ODSWaresXLS", C, false)), "FieldByName", ["inventar_no"])), "AsString"))); if ($t54 !== undefined) { await $.mset((await $.wv([$t38], "Sheet", C, false)), "Cells", $t54); } }
                await $.mcall((await $.wv([$t38], "ODSWaresXLS", C, false)), "Next", []);
                await $.tick();
              }
            }
            await $.wset([$t38], "m", (await $.mv((await $.wv([$t38], "ODSWaresXLS", C, false)), "RecordCount")), { get: async () => L0["m"], set: async (v) => { L0["m"] = v; }, local: true });
            if ($.truthy($.eq((await $.mv((await $.wv([$t38], "DTPBegin", C, false)), "DateTime")), (await $.mv((await $.wv([$t38], "DTPEnd", C, false)), "DateTime"))))) {
              { const $t55 = await $.iset((await $.mv((await $.wv([$t38], "Sheet", C, false)), "Cells")), [$.add($.add($.add((await $.wv([$t38], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false)), (await $.wv([$t38], "k", { get: async () => L0["k"], set: async (v) => { L0["k"] = v; }, local: true }, false))), (await $.wv([$t38], "m", { get: async () => L0["m"], set: async (v) => { L0["m"] = v; }, local: true }, false))), 2), 5], (await $.wcall([$t38], "FormatFloat", ["#,##0.00", (await $.wv([$t38], "e_First_Price", { get: async () => L0["e_first_price"], set: async (v) => { L0["e_first_price"] = v; }, local: true }, false))], C))); if ($t55 !== undefined) { await $.mset((await $.wv([$t38], "Sheet", C, false)), "Cells", $t55); } }
              { const $t56 = await $.iset((await $.mv((await $.wv([$t38], "Sheet", C, false)), "Cells")), [$.add($.add($.add((await $.wv([$t38], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false)), (await $.wv([$t38], "k", { get: async () => L0["k"], set: async (v) => { L0["k"] = v; }, local: true }, false))), (await $.wv([$t38], "m", { get: async () => L0["m"], set: async (v) => { L0["m"] = v; }, local: true }, false))), 2), 6], (await $.wcall([$t38], "FormatFloat", ["#,##0.00", (await $.wv([$t38], "e_Remainder", { get: async () => L0["e_remainder"], set: async (v) => { L0["e_remainder"] = v; }, local: true }, false))], C))); if ($t56 !== undefined) { await $.mset((await $.wv([$t38], "Sheet", C, false)), "Cells", $t56); } }
              { const $t57 = await $.iset((await $.mv((await $.wv([$t38], "Sheet", C, false)), "Cells")), [$.add($.add($.add((await $.wv([$t38], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false)), (await $.wv([$t38], "k", { get: async () => L0["k"], set: async (v) => { L0["k"] = v; }, local: true }, false))), (await $.wv([$t38], "m", { get: async () => L0["m"], set: async (v) => { L0["m"] = v; }, local: true }, false))), 2), 7], (await $.wcall([$t38], "FormatFloat", ["#,##0.00", (await $.wv([$t38], "e_Amort", { get: async () => L0["e_amort"], set: async (v) => { L0["e_amort"] = v; }, local: true }, false))], C))); if ($t57 !== undefined) { await $.mset((await $.wv([$t38], "Sheet", C, false)), "Cells", $t57); } }
              { const $t58 = await $.iset((await $.mv((await $.wv([$t38], "Sheet", C, false)), "Cells")), [$.add($.add($.add((await $.wv([$t38], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false)), (await $.wv([$t38], "k", { get: async () => L0["k"], set: async (v) => { L0["k"] = v; }, local: true }, false))), (await $.wv([$t38], "m", { get: async () => L0["m"], set: async (v) => { L0["m"] = v; }, local: true }, false))), 2), 8], (await $.wcall([$t38], "FormatFloat", ["#,##0.00", (await $.wv([$t38], "e_All_Amort", { get: async () => L0["e_all_amort"], set: async (v) => { L0["e_all_amort"] = v; }, local: true }, false))], C))); if ($t58 !== undefined) { await $.mset((await $.wv([$t38], "Sheet", C, false)), "Cells", $t58); } }
            }
            await $.wset([$t38], "k", $.add($.add((await $.wv([$t38], "k", { get: async () => L0["k"], set: async (v) => { L0["k"] = v; }, local: true }, false)), (await $.wv([$t38], "m", { get: async () => L0["m"], set: async (v) => { L0["m"] = v; }, local: true }, false))), 3), { get: async () => L0["k"], set: async (v) => { L0["k"] = v; }, local: true });
            await $.mcall((await $.wv([$t38], "ODSGroupXLS", C, false)), "Next", []);
            await $.tick();
          }
        }
      }
      if ($.truthy($.eq((await $.wv([$t38], "status", { get: async () => L0["status"], set: async (v) => { L0["status"] = v; }, local: true }, false)), "NL"))) {
        await $.stmt((await $.wcall([$t38], "ExcelFormat", ["NL"], C)));
        await $.mset((await $.idx((await $.mv((await $.idx((await $.mv((await $.wv([$t38], "Exl", C, false)), "WorkBooks")), [1])), "WorkSheets")), [1])), "name", " Vergi ");
        { const $t59 = (await $.mv((await $.wv([$t38], "ODSGroupXLS", C, false)), "RecordCount"));
          await $.wset([$t38], "i", 1, { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true });
          let $t60 = true;
          for (;;) {
            if (!$t60) { await $.wset([$t38], "i", $.succ((await $.wv([$t38], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false)), 1), { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }); }
            $t60 = false;
            if (!($.ord((await $.wv([$t38], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false))) <= $.ord($t59))) break;
            { const $t61 = await $.iset((await $.mv((await $.wv([$t38], "Sheet", C, false)), "Cells")), [$.add((await $.wv([$t38], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false)), (await $.wv([$t38], "k", { get: async () => L0["k"], set: async (v) => { L0["k"] = v; }, local: true }, false))), 1], " Grup :"); if ($t61 !== undefined) { await $.mset((await $.wv([$t38], "Sheet", C, false)), "Cells", $t61); } }
            await $.mset((await $.mv((await $.idx((await $.mv((await $.wv([$t38], "Sheet", C, false)), "Cells")), [$.add((await $.wv([$t38], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false)), (await $.wv([$t38], "k", { get: async () => L0["k"], set: async (v) => { L0["k"] = v; }, local: true }, false))), 1])), "Font")), "Bold", (await $.wv([$t38], "true", C, false)));
            { const $t62 = await $.iset((await $.mv((await $.wv([$t38], "Sheet", C, false)), "Cells")), [$.add((await $.wv([$t38], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false)), (await $.wv([$t38], "k", { get: async () => L0["k"], set: async (v) => { L0["k"] = v; }, local: true }, false))), 2], (await $.mv((await $.mcall((await $.wv([$t38], "ODSGroupXLS", C, false)), "FieldByName", ["Name"])), "AsString"))); if ($t62 !== undefined) { await $.mset((await $.wv([$t38], "Sheet", C, false)), "Cells", $t62); } }
            await $.mset((await $.mv((await $.idx((await $.mv((await $.wv([$t38], "Sheet", C, false)), "Cells")), [$.add((await $.wv([$t38], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false)), (await $.wv([$t38], "k", { get: async () => L0["k"], set: async (v) => { L0["k"] = v; }, local: true }, false))), 2])), "Font")), "Bold", (await $.wv([$t38], "true", C, false)));
            await $.mset((await $.mv((await $.idx((await $.mv((await $.wv([$t38], "Sheet", C, false)), "Cells")), [$.add((await $.wv([$t38], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false)), (await $.wv([$t38], "k", { get: async () => L0["k"], set: async (v) => { L0["k"] = v; }, local: true }, false))), 2])), "Font")), "Name", "Tahoma");
            await $.mset((await $.mv((await $.idx((await $.mv((await $.wv([$t38], "Sheet", C, false)), "Cells")), [$.add((await $.wv([$t38], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false)), (await $.wv([$t38], "k", { get: async () => L0["k"], set: async (v) => { L0["k"] = v; }, local: true }, false))), 2])), "Font")), "Color", (await $.wv([$t38], "clBlue", C, false)));
            await $.stmt((await $.wcall([$t38], "ColumnHeader", [(await $.wv([$t38], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false)), (await $.wv([$t38], "k", { get: async () => L0["k"], set: async (v) => { L0["k"] = v; }, local: true }, false)), "NL"], C)));
            await $.wset([$t38], "e_Tax_First_Price", 0, { get: async () => L0["e_tax_first_price"], set: async (v) => { L0["e_tax_first_price"] = v; }, local: true });
            await $.wset([$t38], "e_Tax_Remainder", 0, { get: async () => L0["e_tax_remainder"], set: async (v) => { L0["e_tax_remainder"] = v; }, local: true });
            await $.wset([$t38], "e_Tax_All_Amort", 0, { get: async () => L0["e_tax_all_amort"], set: async (v) => { L0["e_tax_all_amort"] = v; }, local: true });
            await $.wset([$t38], "e_Tax_Amort", 0, { get: async () => L0["e_tax_amort"], set: async (v) => { L0["e_tax_amort"] = v; }, local: true });
            { const $t63 = (await $.mv((await $.wv([$t38], "ODSWaresXLS", C, false)), "RecordCount"));
              await $.wset([$t38], "j", 1, { get: async () => L0["j"], set: async (v) => { L0["j"] = v; }, local: true });
              let $t64 = true;
              for (;;) {
                if (!$t64) { await $.wset([$t38], "j", $.succ((await $.wv([$t38], "j", { get: async () => L0["j"], set: async (v) => { L0["j"] = v; }, local: true }, false)), 1), { get: async () => L0["j"], set: async (v) => { L0["j"] = v; }, local: true }); }
                $t64 = false;
                if (!($.ord((await $.wv([$t38], "j", { get: async () => L0["j"], set: async (v) => { L0["j"] = v; }, local: true }, false))) <= $.ord($t63))) break;
                await $.wset([$t38], "e_Tax_First_Price", $.add((await $.wv([$t38], "e_Tax_First_Price", { get: async () => L0["e_tax_first_price"], set: async (v) => { L0["e_tax_first_price"] = v; }, local: true }, false)), (await $.mv((await $.mcall((await $.wv([$t38], "ODSWaresXLS", C, false)), "FieldByName", ["tax_First_Price"])), "AsFloat"))), { get: async () => L0["e_tax_first_price"], set: async (v) => { L0["e_tax_first_price"] = v; }, local: true });
                await $.wset([$t38], "e_Tax_Remainder", $.add((await $.wv([$t38], "e_Tax_Remainder", { get: async () => L0["e_tax_remainder"], set: async (v) => { L0["e_tax_remainder"] = v; }, local: true }, false)), (await $.mv((await $.mcall((await $.wv([$t38], "ODSWaresXLS", C, false)), "FieldByName", ["tax_Remainder"])), "AsFloat"))), { get: async () => L0["e_tax_remainder"], set: async (v) => { L0["e_tax_remainder"] = v; }, local: true });
                await $.wset([$t38], "e_Tax_Amort", $.add((await $.wv([$t38], "e_Tax_Amort", { get: async () => L0["e_tax_amort"], set: async (v) => { L0["e_tax_amort"] = v; }, local: true }, false)), (await $.mv((await $.mcall((await $.wv([$t38], "ODSWaresXLS", C, false)), "FieldByName", ["tax_Amort"])), "AsFloat"))), { get: async () => L0["e_tax_amort"], set: async (v) => { L0["e_tax_amort"] = v; }, local: true });
                await $.wset([$t38], "e_Tax_All_Amort", $.add((await $.wv([$t38], "e_Tax_All_Amort", { get: async () => L0["e_tax_all_amort"], set: async (v) => { L0["e_tax_all_amort"] = v; }, local: true }, false)), (await $.mv((await $.mcall((await $.wv([$t38], "ODSWaresXLS", C, false)), "FieldByName", ["tax_All_Amort"])), "AsFloat"))), { get: async () => L0["e_tax_all_amort"], set: async (v) => { L0["e_tax_all_amort"] = v; }, local: true });
                { const $t65 = await $.iset((await $.mv((await $.wv([$t38], "Sheet", C, false)), "Cells")), [$.add($.add($.add((await $.wv([$t38], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false)), (await $.wv([$t38], "k", { get: async () => L0["k"], set: async (v) => { L0["k"] = v; }, local: true }, false))), (await $.wv([$t38], "j", { get: async () => L0["j"], set: async (v) => { L0["j"] = v; }, local: true }, false))), 1), 1], (await $.mv((await $.mcall((await $.wv([$t38], "ODSWaresXLS", C, false)), "FieldByName", ["wares_id"])), "AsFloat"))); if ($t65 !== undefined) { await $.mset((await $.wv([$t38], "Sheet", C, false)), "Cells", $t65); } }
                { const $t66 = await $.iset((await $.mv((await $.wv([$t38], "Sheet", C, false)), "Cells")), [$.add($.add($.add((await $.wv([$t38], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false)), (await $.wv([$t38], "k", { get: async () => L0["k"], set: async (v) => { L0["k"] = v; }, local: true }, false))), (await $.wv([$t38], "j", { get: async () => L0["j"], set: async (v) => { L0["j"] = v; }, local: true }, false))), 1), 2], (await $.mv((await $.mcall((await $.wv([$t38], "ODSWaresXLS", C, false)), "FieldByName", ["wares_name"])), "AsString"))); if ($t66 !== undefined) { await $.mset((await $.wv([$t38], "Sheet", C, false)), "Cells", $t66); } }
                await $.mset((await $.mv((await $.idx((await $.mv((await $.wv([$t38], "Sheet", C, false)), "Cells")), [$.add($.add($.add((await $.wv([$t38], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false)), (await $.wv([$t38], "k", { get: async () => L0["k"], set: async (v) => { L0["k"] = v; }, local: true }, false))), (await $.wv([$t38], "j", { get: async () => L0["j"], set: async (v) => { L0["j"] = v; }, local: true }, false))), 1), 2])), "Font")), "Name", "Tahoma");
                { const $t67 = await $.iset((await $.mv((await $.wv([$t38], "Sheet", C, false)), "Cells")), [$.add($.add($.add((await $.wv([$t38], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false)), (await $.wv([$t38], "k", { get: async () => L0["k"], set: async (v) => { L0["k"] = v; }, local: true }, false))), (await $.wv([$t38], "j", { get: async () => L0["j"], set: async (v) => { L0["j"] = v; }, local: true }, false))), 1), 3], (await $.mv((await $.mcall((await $.wv([$t38], "ODSWaresXLS", C, false)), "FieldByName", ["tax_percent"])), "AsFloat"))); if ($t67 !== undefined) { await $.mset((await $.wv([$t38], "Sheet", C, false)), "Cells", $t67); } }
                { const $t68 = await $.iset((await $.mv((await $.wv([$t38], "Sheet", C, false)), "Cells")), [$.add($.add($.add((await $.wv([$t38], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false)), (await $.wv([$t38], "k", { get: async () => L0["k"], set: async (v) => { L0["k"] = v; }, local: true }, false))), (await $.wv([$t38], "j", { get: async () => L0["j"], set: async (v) => { L0["j"] = v; }, local: true }, false))), 1), 4], (await $.mv((await $.mcall((await $.wv([$t38], "ODSWaresXLS", C, false)), "FieldByName", ["inventar_date"])), "AsDateTime"))); if ($t68 !== undefined) { await $.mset((await $.wv([$t38], "Sheet", C, false)), "Cells", $t68); } }
                { const $t69 = await $.iset((await $.mv((await $.wv([$t38], "Sheet", C, false)), "Cells")), [$.add($.add($.add((await $.wv([$t38], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false)), (await $.wv([$t38], "k", { get: async () => L0["k"], set: async (v) => { L0["k"] = v; }, local: true }, false))), (await $.wv([$t38], "j", { get: async () => L0["j"], set: async (v) => { L0["j"] = v; }, local: true }, false))), 1), 5], (await $.mv((await $.mcall((await $.wv([$t38], "ODSWaresXLS", C, false)), "FieldByName", ["tax_first_price"])), "AsFloat"))); if ($t69 !== undefined) { await $.mset((await $.wv([$t38], "Sheet", C, false)), "Cells", $t69); } }
                { const $t70 = await $.iset((await $.mv((await $.wv([$t38], "Sheet", C, false)), "Cells")), [$.add($.add($.add((await $.wv([$t38], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false)), (await $.wv([$t38], "k", { get: async () => L0["k"], set: async (v) => { L0["k"] = v; }, local: true }, false))), (await $.wv([$t38], "j", { get: async () => L0["j"], set: async (v) => { L0["j"] = v; }, local: true }, false))), 1), 6], (await $.mv((await $.mcall((await $.wv([$t38], "ODSWaresXLS", C, false)), "FieldByName", ["tax_remainder"])), "AsFloat"))); if ($t70 !== undefined) { await $.mset((await $.wv([$t38], "Sheet", C, false)), "Cells", $t70); } }
                { const $t71 = await $.iset((await $.mv((await $.wv([$t38], "Sheet", C, false)), "Cells")), [$.add($.add($.add((await $.wv([$t38], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false)), (await $.wv([$t38], "k", { get: async () => L0["k"], set: async (v) => { L0["k"] = v; }, local: true }, false))), (await $.wv([$t38], "j", { get: async () => L0["j"], set: async (v) => { L0["j"] = v; }, local: true }, false))), 1), 7], (await $.mv((await $.mcall((await $.wv([$t38], "ODSWaresXLS", C, false)), "FieldByName", ["tax_amort"])), "AsFloat"))); if ($t71 !== undefined) { await $.mset((await $.wv([$t38], "Sheet", C, false)), "Cells", $t71); } }
                { const $t72 = await $.iset((await $.mv((await $.wv([$t38], "Sheet", C, false)), "Cells")), [$.add($.add($.add((await $.wv([$t38], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false)), (await $.wv([$t38], "k", { get: async () => L0["k"], set: async (v) => { L0["k"] = v; }, local: true }, false))), (await $.wv([$t38], "j", { get: async () => L0["j"], set: async (v) => { L0["j"] = v; }, local: true }, false))), 1), 8], (await $.mv((await $.mcall((await $.wv([$t38], "ODSWaresXLS", C, false)), "FieldByName", ["tax_all_amort"])), "AsFloat"))); if ($t72 !== undefined) { await $.mset((await $.wv([$t38], "Sheet", C, false)), "Cells", $t72); } }
                { const $t73 = await $.iset((await $.mv((await $.wv([$t38], "Sheet", C, false)), "Cells")), [$.add($.add($.add((await $.wv([$t38], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false)), (await $.wv([$t38], "k", { get: async () => L0["k"], set: async (v) => { L0["k"] = v; }, local: true }, false))), (await $.wv([$t38], "j", { get: async () => L0["j"], set: async (v) => { L0["j"] = v; }, local: true }, false))), 1), 9], (await $.mv((await $.mcall((await $.wv([$t38], "ODSWaresXLS", C, false)), "FieldByName", ["amort_date"])), "AsDateTime"))); if ($t73 !== undefined) { await $.mset((await $.wv([$t38], "Sheet", C, false)), "Cells", $t73); } }
                { const $t74 = await $.iset((await $.mv((await $.wv([$t38], "Sheet", C, false)), "Cells")), [$.add($.add($.add((await $.wv([$t38], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false)), (await $.wv([$t38], "k", { get: async () => L0["k"], set: async (v) => { L0["k"] = v; }, local: true }, false))), (await $.wv([$t38], "j", { get: async () => L0["j"], set: async (v) => { L0["j"] = v; }, local: true }, false))), 1), 10], (await $.mv((await $.mcall((await $.wv([$t38], "ODSWaresXLS", C, false)), "FieldByName", ["inventar_no"])), "AsString"))); if ($t74 !== undefined) { await $.mset((await $.wv([$t38], "Sheet", C, false)), "Cells", $t74); } }
                await $.mcall((await $.wv([$t38], "ODSWaresXLS", C, false)), "Next", []);
                await $.tick();
              }
            }
            await $.wset([$t38], "m", (await $.mv((await $.wv([$t38], "ODSWaresXLS", C, false)), "RecordCount")), { get: async () => L0["m"], set: async (v) => { L0["m"] = v; }, local: true });
            if ($.truthy($.eq((await $.mv((await $.wv([$t38], "DTPBegin", C, false)), "DateTime")), (await $.mv((await $.wv([$t38], "DTPEnd", C, false)), "DateTime"))))) {
              { const $t75 = await $.iset((await $.mv((await $.wv([$t38], "Sheet", C, false)), "Cells")), [$.add($.add($.add((await $.wv([$t38], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false)), (await $.wv([$t38], "k", { get: async () => L0["k"], set: async (v) => { L0["k"] = v; }, local: true }, false))), (await $.wv([$t38], "m", { get: async () => L0["m"], set: async (v) => { L0["m"] = v; }, local: true }, false))), 2), 5], (await $.wcall([$t38], "FormatFloat", ["#,##0.00", (await $.wv([$t38], "e_Tax_First_Price", { get: async () => L0["e_tax_first_price"], set: async (v) => { L0["e_tax_first_price"] = v; }, local: true }, false))], C))); if ($t75 !== undefined) { await $.mset((await $.wv([$t38], "Sheet", C, false)), "Cells", $t75); } }
              { const $t76 = await $.iset((await $.mv((await $.wv([$t38], "Sheet", C, false)), "Cells")), [$.add($.add($.add((await $.wv([$t38], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false)), (await $.wv([$t38], "k", { get: async () => L0["k"], set: async (v) => { L0["k"] = v; }, local: true }, false))), (await $.wv([$t38], "m", { get: async () => L0["m"], set: async (v) => { L0["m"] = v; }, local: true }, false))), 2), 6], (await $.wcall([$t38], "FormatFloat", ["#,##0.00", (await $.wv([$t38], "e_Tax_Remainder", { get: async () => L0["e_tax_remainder"], set: async (v) => { L0["e_tax_remainder"] = v; }, local: true }, false))], C))); if ($t76 !== undefined) { await $.mset((await $.wv([$t38], "Sheet", C, false)), "Cells", $t76); } }
              { const $t77 = await $.iset((await $.mv((await $.wv([$t38], "Sheet", C, false)), "Cells")), [$.add($.add($.add((await $.wv([$t38], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false)), (await $.wv([$t38], "k", { get: async () => L0["k"], set: async (v) => { L0["k"] = v; }, local: true }, false))), (await $.wv([$t38], "m", { get: async () => L0["m"], set: async (v) => { L0["m"] = v; }, local: true }, false))), 2), 7], (await $.wcall([$t38], "FormatFloat", ["#,##0.00", (await $.wv([$t38], "e_Tax_Amort", { get: async () => L0["e_tax_amort"], set: async (v) => { L0["e_tax_amort"] = v; }, local: true }, false))], C))); if ($t77 !== undefined) { await $.mset((await $.wv([$t38], "Sheet", C, false)), "Cells", $t77); } }
              { const $t78 = await $.iset((await $.mv((await $.wv([$t38], "Sheet", C, false)), "Cells")), [$.add($.add($.add((await $.wv([$t38], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false)), (await $.wv([$t38], "k", { get: async () => L0["k"], set: async (v) => { L0["k"] = v; }, local: true }, false))), (await $.wv([$t38], "m", { get: async () => L0["m"], set: async (v) => { L0["m"] = v; }, local: true }, false))), 2), 8], (await $.wcall([$t38], "FormatFloat", ["#,##0.00", (await $.wv([$t38], "e_Tax_All_Amort", { get: async () => L0["e_tax_all_amort"], set: async (v) => { L0["e_tax_all_amort"] = v; }, local: true }, false))], C))); if ($t78 !== undefined) { await $.mset((await $.wv([$t38], "Sheet", C, false)), "Cells", $t78); } }
            }
            await $.wset([$t38], "k", $.add($.add((await $.wv([$t38], "k", { get: async () => L0["k"], set: async (v) => { L0["k"] = v; }, local: true }, false)), (await $.wv([$t38], "m", { get: async () => L0["m"], set: async (v) => { L0["m"] = v; }, local: true }, false))), 3), { get: async () => L0["k"], set: async (v) => { L0["k"] = v; }, local: true });
            await $.mcall((await $.wv([$t38], "ODSGroupXLS", C, false)), "Next", []);
            await $.tick();
          }
        }
      }
      if ($.truthy($.eq((await $.wv([$t38], "status", { get: async () => L0["status"], set: async (v) => { L0["status"] = v; }, local: true }, false)), "Both"))) {
        await $.stmt((await $.wcall([$t38], "ExcelFormat", ["Both"], C)));
        await $.mset((await $.idx((await $.mv((await $.idx((await $.mv((await $.wv([$t38], "Exl", C, false)), "WorkBooks")), [1])), "WorkSheets")), [1])), "name", " Milli Bank ve Vergi ");
        { const $t79 = (await $.mv((await $.wv([$t38], "ODSGroupXLS", C, false)), "RecordCount"));
          await $.wset([$t38], "i", 1, { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true });
          let $t80 = true;
          for (;;) {
            if (!$t80) { await $.wset([$t38], "i", $.succ((await $.wv([$t38], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false)), 1), { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }); }
            $t80 = false;
            if (!($.ord((await $.wv([$t38], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false))) <= $.ord($t79))) break;
            { const $t81 = await $.iset((await $.mv((await $.wv([$t38], "Sheet", C, false)), "Cells")), [$.add((await $.wv([$t38], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false)), (await $.wv([$t38], "k", { get: async () => L0["k"], set: async (v) => { L0["k"] = v; }, local: true }, false))), 1], " Grup :"); if ($t81 !== undefined) { await $.mset((await $.wv([$t38], "Sheet", C, false)), "Cells", $t81); } }
            await $.mset((await $.mv((await $.idx((await $.mv((await $.wv([$t38], "Sheet", C, false)), "Cells")), [$.add((await $.wv([$t38], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false)), (await $.wv([$t38], "k", { get: async () => L0["k"], set: async (v) => { L0["k"] = v; }, local: true }, false))), 1])), "Font")), "Bold", (await $.wv([$t38], "true", C, false)));
            { const $t82 = await $.iset((await $.mv((await $.wv([$t38], "Sheet", C, false)), "Cells")), [$.add((await $.wv([$t38], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false)), (await $.wv([$t38], "k", { get: async () => L0["k"], set: async (v) => { L0["k"] = v; }, local: true }, false))), 2], (await $.mv((await $.mcall((await $.wv([$t38], "ODSGroupXLS", C, false)), "FieldByName", ["Name"])), "AsString"))); if ($t82 !== undefined) { await $.mset((await $.wv([$t38], "Sheet", C, false)), "Cells", $t82); } }
            await $.mset((await $.mv((await $.idx((await $.mv((await $.wv([$t38], "Sheet", C, false)), "Cells")), [$.add((await $.wv([$t38], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false)), (await $.wv([$t38], "k", { get: async () => L0["k"], set: async (v) => { L0["k"] = v; }, local: true }, false))), 2])), "Font")), "Bold", (await $.wv([$t38], "true", C, false)));
            await $.mset((await $.mv((await $.idx((await $.mv((await $.wv([$t38], "Sheet", C, false)), "Cells")), [$.add((await $.wv([$t38], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false)), (await $.wv([$t38], "k", { get: async () => L0["k"], set: async (v) => { L0["k"] = v; }, local: true }, false))), 2])), "Font")), "Name", "Tahoma");
            await $.mset((await $.mv((await $.idx((await $.mv((await $.wv([$t38], "Sheet", C, false)), "Cells")), [$.add((await $.wv([$t38], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false)), (await $.wv([$t38], "k", { get: async () => L0["k"], set: async (v) => { L0["k"] = v; }, local: true }, false))), 2])), "Font")), "Color", (await $.wv([$t38], "clBlue", C, false)));
            await $.stmt((await $.wcall([$t38], "ColumnHeader", [(await $.wv([$t38], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false)), (await $.wv([$t38], "k", { get: async () => L0["k"], set: async (v) => { L0["k"] = v; }, local: true }, false)), "Both"], C)));
            await $.wset([$t38], "e_First_Price", 0, { get: async () => L0["e_first_price"], set: async (v) => { L0["e_first_price"] = v; }, local: true });
            await $.wset([$t38], "e_Remainder", 0, { get: async () => L0["e_remainder"], set: async (v) => { L0["e_remainder"] = v; }, local: true });
            await $.wset([$t38], "e_All_Amort", 0, { get: async () => L0["e_all_amort"], set: async (v) => { L0["e_all_amort"] = v; }, local: true });
            await $.wset([$t38], "e_Amort", 0, { get: async () => L0["e_amort"], set: async (v) => { L0["e_amort"] = v; }, local: true });
            await $.wset([$t38], "e_Tax_First_Price", 0, { get: async () => L0["e_tax_first_price"], set: async (v) => { L0["e_tax_first_price"] = v; }, local: true });
            await $.wset([$t38], "e_Tax_Remainder", 0, { get: async () => L0["e_tax_remainder"], set: async (v) => { L0["e_tax_remainder"] = v; }, local: true });
            await $.wset([$t38], "e_Tax_All_Amort", 0, { get: async () => L0["e_tax_all_amort"], set: async (v) => { L0["e_tax_all_amort"] = v; }, local: true });
            await $.wset([$t38], "e_Tax_Amort", 0, { get: async () => L0["e_tax_amort"], set: async (v) => { L0["e_tax_amort"] = v; }, local: true });
            { const $t83 = (await $.mv((await $.wv([$t38], "ODSWaresXLS", C, false)), "RecordCount"));
              await $.wset([$t38], "j", 1, { get: async () => L0["j"], set: async (v) => { L0["j"] = v; }, local: true });
              let $t84 = true;
              for (;;) {
                if (!$t84) { await $.wset([$t38], "j", $.succ((await $.wv([$t38], "j", { get: async () => L0["j"], set: async (v) => { L0["j"] = v; }, local: true }, false)), 1), { get: async () => L0["j"], set: async (v) => { L0["j"] = v; }, local: true }); }
                $t84 = false;
                if (!($.ord((await $.wv([$t38], "j", { get: async () => L0["j"], set: async (v) => { L0["j"] = v; }, local: true }, false))) <= $.ord($t83))) break;
                await $.wset([$t38], "e_First_Price", $.add((await $.wv([$t38], "e_First_Price", { get: async () => L0["e_first_price"], set: async (v) => { L0["e_first_price"] = v; }, local: true }, false)), (await $.mv((await $.mcall((await $.wv([$t38], "ODSWaresXLS", C, false)), "FieldByName", ["First_Price"])), "AsFloat"))), { get: async () => L0["e_first_price"], set: async (v) => { L0["e_first_price"] = v; }, local: true });
                await $.wset([$t38], "e_Remainder", $.add((await $.wv([$t38], "e_Remainder", { get: async () => L0["e_remainder"], set: async (v) => { L0["e_remainder"] = v; }, local: true }, false)), (await $.mv((await $.mcall((await $.wv([$t38], "ODSWaresXLS", C, false)), "FieldByName", ["Remainder"])), "AsFloat"))), { get: async () => L0["e_remainder"], set: async (v) => { L0["e_remainder"] = v; }, local: true });
                await $.wset([$t38], "e_Amort", $.add((await $.wv([$t38], "e_Amort", { get: async () => L0["e_amort"], set: async (v) => { L0["e_amort"] = v; }, local: true }, false)), (await $.mv((await $.mcall((await $.wv([$t38], "ODSWaresXLS", C, false)), "FieldByName", ["Amort"])), "AsFloat"))), { get: async () => L0["e_amort"], set: async (v) => { L0["e_amort"] = v; }, local: true });
                await $.wset([$t38], "e_All_Amort", $.add((await $.wv([$t38], "e_All_Amort", { get: async () => L0["e_all_amort"], set: async (v) => { L0["e_all_amort"] = v; }, local: true }, false)), (await $.mv((await $.mcall((await $.wv([$t38], "ODSWaresXLS", C, false)), "FieldByName", ["All_Amort"])), "AsFloat"))), { get: async () => L0["e_all_amort"], set: async (v) => { L0["e_all_amort"] = v; }, local: true });
                await $.wset([$t38], "e_Tax_First_Price", $.add((await $.wv([$t38], "e_Tax_First_Price", { get: async () => L0["e_tax_first_price"], set: async (v) => { L0["e_tax_first_price"] = v; }, local: true }, false)), (await $.mv((await $.mcall((await $.wv([$t38], "ODSWaresXLS", C, false)), "FieldByName", ["Tax_First_Price"])), "AsFloat"))), { get: async () => L0["e_tax_first_price"], set: async (v) => { L0["e_tax_first_price"] = v; }, local: true });
                await $.wset([$t38], "e_Tax_Remainder", $.add((await $.wv([$t38], "e_Tax_Remainder", { get: async () => L0["e_tax_remainder"], set: async (v) => { L0["e_tax_remainder"] = v; }, local: true }, false)), (await $.mv((await $.mcall((await $.wv([$t38], "ODSWaresXLS", C, false)), "FieldByName", ["Tax_Remainder"])), "AsFloat"))), { get: async () => L0["e_tax_remainder"], set: async (v) => { L0["e_tax_remainder"] = v; }, local: true });
                await $.wset([$t38], "e_Tax_Amort", $.add((await $.wv([$t38], "e_Tax_Amort", { get: async () => L0["e_tax_amort"], set: async (v) => { L0["e_tax_amort"] = v; }, local: true }, false)), (await $.mv((await $.mcall((await $.wv([$t38], "ODSWaresXLS", C, false)), "FieldByName", ["Tax_Amort"])), "AsFloat"))), { get: async () => L0["e_tax_amort"], set: async (v) => { L0["e_tax_amort"] = v; }, local: true });
                await $.wset([$t38], "e_Tax_All_Amort", $.add((await $.wv([$t38], "e_Tax_All_Amort", { get: async () => L0["e_tax_all_amort"], set: async (v) => { L0["e_tax_all_amort"] = v; }, local: true }, false)), (await $.mv((await $.mcall((await $.wv([$t38], "ODSWaresXLS", C, false)), "FieldByName", ["Tax_All_Amort"])), "AsFloat"))), { get: async () => L0["e_tax_all_amort"], set: async (v) => { L0["e_tax_all_amort"] = v; }, local: true });
                { const $t85 = await $.iset((await $.mv((await $.wv([$t38], "Sheet", C, false)), "Cells")), [$.add($.add($.add((await $.wv([$t38], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false)), (await $.wv([$t38], "k", { get: async () => L0["k"], set: async (v) => { L0["k"] = v; }, local: true }, false))), (await $.wv([$t38], "j", { get: async () => L0["j"], set: async (v) => { L0["j"] = v; }, local: true }, false))), 1), 1], (await $.mv((await $.mcall((await $.wv([$t38], "ODSWaresXLS", C, false)), "FieldByName", ["wares_id"])), "AsFloat"))); if ($t85 !== undefined) { await $.mset((await $.wv([$t38], "Sheet", C, false)), "Cells", $t85); } }
                { const $t86 = await $.iset((await $.mv((await $.wv([$t38], "Sheet", C, false)), "Cells")), [$.add($.add($.add((await $.wv([$t38], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false)), (await $.wv([$t38], "k", { get: async () => L0["k"], set: async (v) => { L0["k"] = v; }, local: true }, false))), (await $.wv([$t38], "j", { get: async () => L0["j"], set: async (v) => { L0["j"] = v; }, local: true }, false))), 1), 2], (await $.mv((await $.mcall((await $.wv([$t38], "ODSWaresXLS", C, false)), "FieldByName", ["wares_name"])), "AsString"))); if ($t86 !== undefined) { await $.mset((await $.wv([$t38], "Sheet", C, false)), "Cells", $t86); } }
                await $.mset((await $.mv((await $.idx((await $.mv((await $.wv([$t38], "Sheet", C, false)), "Cells")), [$.add($.add($.add((await $.wv([$t38], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false)), (await $.wv([$t38], "k", { get: async () => L0["k"], set: async (v) => { L0["k"] = v; }, local: true }, false))), (await $.wv([$t38], "j", { get: async () => L0["j"], set: async (v) => { L0["j"] = v; }, local: true }, false))), 1), 2])), "Font")), "Name", "Tahoma");
                { const $t87 = await $.iset((await $.mv((await $.wv([$t38], "Sheet", C, false)), "Cells")), [$.add($.add($.add((await $.wv([$t38], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false)), (await $.wv([$t38], "k", { get: async () => L0["k"], set: async (v) => { L0["k"] = v; }, local: true }, false))), (await $.wv([$t38], "j", { get: async () => L0["j"], set: async (v) => { L0["j"] = v; }, local: true }, false))), 1), 3], (await $.mv((await $.mcall((await $.wv([$t38], "ODSWaresXLS", C, false)), "FieldByName", ["percent"])), "AsFloat"))); if ($t87 !== undefined) { await $.mset((await $.wv([$t38], "Sheet", C, false)), "Cells", $t87); } }
                { const $t88 = await $.iset((await $.mv((await $.wv([$t38], "Sheet", C, false)), "Cells")), [$.add($.add($.add((await $.wv([$t38], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false)), (await $.wv([$t38], "k", { get: async () => L0["k"], set: async (v) => { L0["k"] = v; }, local: true }, false))), (await $.wv([$t38], "j", { get: async () => L0["j"], set: async (v) => { L0["j"] = v; }, local: true }, false))), 1), 4], (await $.mv((await $.mcall((await $.wv([$t38], "ODSWaresXLS", C, false)), "FieldByName", ["inventar_date"])), "AsDateTime"))); if ($t88 !== undefined) { await $.mset((await $.wv([$t38], "Sheet", C, false)), "Cells", $t88); } }
                { const $t89 = await $.iset((await $.mv((await $.wv([$t38], "Sheet", C, false)), "Cells")), [$.add($.add($.add((await $.wv([$t38], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false)), (await $.wv([$t38], "k", { get: async () => L0["k"], set: async (v) => { L0["k"] = v; }, local: true }, false))), (await $.wv([$t38], "j", { get: async () => L0["j"], set: async (v) => { L0["j"] = v; }, local: true }, false))), 1), 5], (await $.mv((await $.mcall((await $.wv([$t38], "ODSWaresXLS", C, false)), "FieldByName", ["first_price"])), "AsFloat"))); if ($t89 !== undefined) { await $.mset((await $.wv([$t38], "Sheet", C, false)), "Cells", $t89); } }
                { const $t90 = await $.iset((await $.mv((await $.wv([$t38], "Sheet", C, false)), "Cells")), [$.add($.add($.add((await $.wv([$t38], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false)), (await $.wv([$t38], "k", { get: async () => L0["k"], set: async (v) => { L0["k"] = v; }, local: true }, false))), (await $.wv([$t38], "j", { get: async () => L0["j"], set: async (v) => { L0["j"] = v; }, local: true }, false))), 1), 6], (await $.mv((await $.mcall((await $.wv([$t38], "ODSWaresXLS", C, false)), "FieldByName", ["remainder"])), "AsFloat"))); if ($t90 !== undefined) { await $.mset((await $.wv([$t38], "Sheet", C, false)), "Cells", $t90); } }
                { const $t91 = await $.iset((await $.mv((await $.wv([$t38], "Sheet", C, false)), "Cells")), [$.add($.add($.add((await $.wv([$t38], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false)), (await $.wv([$t38], "k", { get: async () => L0["k"], set: async (v) => { L0["k"] = v; }, local: true }, false))), (await $.wv([$t38], "j", { get: async () => L0["j"], set: async (v) => { L0["j"] = v; }, local: true }, false))), 1), 7], (await $.mv((await $.mcall((await $.wv([$t38], "ODSWaresXLS", C, false)), "FieldByName", ["amort"])), "AsFloat"))); if ($t91 !== undefined) { await $.mset((await $.wv([$t38], "Sheet", C, false)), "Cells", $t91); } }
                { const $t92 = await $.iset((await $.mv((await $.wv([$t38], "Sheet", C, false)), "Cells")), [$.add($.add($.add((await $.wv([$t38], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false)), (await $.wv([$t38], "k", { get: async () => L0["k"], set: async (v) => { L0["k"] = v; }, local: true }, false))), (await $.wv([$t38], "j", { get: async () => L0["j"], set: async (v) => { L0["j"] = v; }, local: true }, false))), 1), 8], (await $.mv((await $.mcall((await $.wv([$t38], "ODSWaresXLS", C, false)), "FieldByName", ["all_amort"])), "AsFloat"))); if ($t92 !== undefined) { await $.mset((await $.wv([$t38], "Sheet", C, false)), "Cells", $t92); } }
                { const $t93 = await $.iset((await $.mv((await $.wv([$t38], "Sheet", C, false)), "Cells")), [$.add($.add($.add((await $.wv([$t38], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false)), (await $.wv([$t38], "k", { get: async () => L0["k"], set: async (v) => { L0["k"] = v; }, local: true }, false))), (await $.wv([$t38], "j", { get: async () => L0["j"], set: async (v) => { L0["j"] = v; }, local: true }, false))), 1), 9], (await $.mv((await $.mcall((await $.wv([$t38], "ODSWaresXLS", C, false)), "FieldByName", ["tax_percent"])), "AsFloat"))); if ($t93 !== undefined) { await $.mset((await $.wv([$t38], "Sheet", C, false)), "Cells", $t93); } }
                { const $t94 = await $.iset((await $.mv((await $.wv([$t38], "Sheet", C, false)), "Cells")), [$.add($.add($.add((await $.wv([$t38], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false)), (await $.wv([$t38], "k", { get: async () => L0["k"], set: async (v) => { L0["k"] = v; }, local: true }, false))), (await $.wv([$t38], "j", { get: async () => L0["j"], set: async (v) => { L0["j"] = v; }, local: true }, false))), 1), 10], (await $.mv((await $.mcall((await $.wv([$t38], "ODSWaresXLS", C, false)), "FieldByName", ["tax_first_price"])), "AsFloat"))); if ($t94 !== undefined) { await $.mset((await $.wv([$t38], "Sheet", C, false)), "Cells", $t94); } }
                { const $t95 = await $.iset((await $.mv((await $.wv([$t38], "Sheet", C, false)), "Cells")), [$.add($.add($.add((await $.wv([$t38], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false)), (await $.wv([$t38], "k", { get: async () => L0["k"], set: async (v) => { L0["k"] = v; }, local: true }, false))), (await $.wv([$t38], "j", { get: async () => L0["j"], set: async (v) => { L0["j"] = v; }, local: true }, false))), 1), 11], (await $.mv((await $.mcall((await $.wv([$t38], "ODSWaresXLS", C, false)), "FieldByName", ["tax_remainder"])), "AsFloat"))); if ($t95 !== undefined) { await $.mset((await $.wv([$t38], "Sheet", C, false)), "Cells", $t95); } }
                { const $t96 = await $.iset((await $.mv((await $.wv([$t38], "Sheet", C, false)), "Cells")), [$.add($.add($.add((await $.wv([$t38], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false)), (await $.wv([$t38], "k", { get: async () => L0["k"], set: async (v) => { L0["k"] = v; }, local: true }, false))), (await $.wv([$t38], "j", { get: async () => L0["j"], set: async (v) => { L0["j"] = v; }, local: true }, false))), 1), 12], (await $.mv((await $.mcall((await $.wv([$t38], "ODSWaresXLS", C, false)), "FieldByName", ["tax_amort"])), "AsFloat"))); if ($t96 !== undefined) { await $.mset((await $.wv([$t38], "Sheet", C, false)), "Cells", $t96); } }
                { const $t97 = await $.iset((await $.mv((await $.wv([$t38], "Sheet", C, false)), "Cells")), [$.add($.add($.add((await $.wv([$t38], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false)), (await $.wv([$t38], "k", { get: async () => L0["k"], set: async (v) => { L0["k"] = v; }, local: true }, false))), (await $.wv([$t38], "j", { get: async () => L0["j"], set: async (v) => { L0["j"] = v; }, local: true }, false))), 1), 13], (await $.mv((await $.mcall((await $.wv([$t38], "ODSWaresXLS", C, false)), "FieldByName", ["tax_all_amort"])), "AsFloat"))); if ($t97 !== undefined) { await $.mset((await $.wv([$t38], "Sheet", C, false)), "Cells", $t97); } }
                { const $t98 = await $.iset((await $.mv((await $.wv([$t38], "Sheet", C, false)), "Cells")), [$.add($.add($.add((await $.wv([$t38], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false)), (await $.wv([$t38], "k", { get: async () => L0["k"], set: async (v) => { L0["k"] = v; }, local: true }, false))), (await $.wv([$t38], "j", { get: async () => L0["j"], set: async (v) => { L0["j"] = v; }, local: true }, false))), 1), 14], (await $.mv((await $.mcall((await $.wv([$t38], "ODSWaresXLS", C, false)), "FieldByName", ["amort_date"])), "AsDateTime"))); if ($t98 !== undefined) { await $.mset((await $.wv([$t38], "Sheet", C, false)), "Cells", $t98); } }
                { const $t99 = await $.iset((await $.mv((await $.wv([$t38], "Sheet", C, false)), "Cells")), [$.add($.add($.add((await $.wv([$t38], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false)), (await $.wv([$t38], "k", { get: async () => L0["k"], set: async (v) => { L0["k"] = v; }, local: true }, false))), (await $.wv([$t38], "j", { get: async () => L0["j"], set: async (v) => { L0["j"] = v; }, local: true }, false))), 1), 15], (await $.mv((await $.mcall((await $.wv([$t38], "ODSWaresXLS", C, false)), "FieldByName", ["inventar_no"])), "AsString"))); if ($t99 !== undefined) { await $.mset((await $.wv([$t38], "Sheet", C, false)), "Cells", $t99); } }
                await $.mcall((await $.wv([$t38], "ODSWaresXLS", C, false)), "Next", []);
                await $.tick();
              }
            }
            await $.wset([$t38], "m", (await $.mv((await $.wv([$t38], "ODSWaresXLS", C, false)), "RecordCount")), { get: async () => L0["m"], set: async (v) => { L0["m"] = v; }, local: true });
            if ($.truthy($.eq((await $.mv((await $.wv([$t38], "DTPBegin", C, false)), "DateTime")), (await $.mv((await $.wv([$t38], "DTPEnd", C, false)), "DateTime"))))) {
              { const $t100 = await $.iset((await $.mv((await $.wv([$t38], "Sheet", C, false)), "Cells")), [$.add($.add($.add((await $.wv([$t38], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false)), (await $.wv([$t38], "k", { get: async () => L0["k"], set: async (v) => { L0["k"] = v; }, local: true }, false))), (await $.wv([$t38], "m", { get: async () => L0["m"], set: async (v) => { L0["m"] = v; }, local: true }, false))), 2), 5], (await $.wcall([$t38], "FormatFloat", ["#,##0.00", (await $.wv([$t38], "e_First_Price", { get: async () => L0["e_first_price"], set: async (v) => { L0["e_first_price"] = v; }, local: true }, false))], C))); if ($t100 !== undefined) { await $.mset((await $.wv([$t38], "Sheet", C, false)), "Cells", $t100); } }
              { const $t101 = await $.iset((await $.mv((await $.wv([$t38], "Sheet", C, false)), "Cells")), [$.add($.add($.add((await $.wv([$t38], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false)), (await $.wv([$t38], "k", { get: async () => L0["k"], set: async (v) => { L0["k"] = v; }, local: true }, false))), (await $.wv([$t38], "m", { get: async () => L0["m"], set: async (v) => { L0["m"] = v; }, local: true }, false))), 2), 6], (await $.wcall([$t38], "FormatFloat", ["#,##0.00", (await $.wv([$t38], "e_Remainder", { get: async () => L0["e_remainder"], set: async (v) => { L0["e_remainder"] = v; }, local: true }, false))], C))); if ($t101 !== undefined) { await $.mset((await $.wv([$t38], "Sheet", C, false)), "Cells", $t101); } }
              { const $t102 = await $.iset((await $.mv((await $.wv([$t38], "Sheet", C, false)), "Cells")), [$.add($.add($.add((await $.wv([$t38], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false)), (await $.wv([$t38], "k", { get: async () => L0["k"], set: async (v) => { L0["k"] = v; }, local: true }, false))), (await $.wv([$t38], "m", { get: async () => L0["m"], set: async (v) => { L0["m"] = v; }, local: true }, false))), 2), 7], (await $.wcall([$t38], "FormatFloat", ["#,##0.00", (await $.wv([$t38], "e_Amort", { get: async () => L0["e_amort"], set: async (v) => { L0["e_amort"] = v; }, local: true }, false))], C))); if ($t102 !== undefined) { await $.mset((await $.wv([$t38], "Sheet", C, false)), "Cells", $t102); } }
              { const $t103 = await $.iset((await $.mv((await $.wv([$t38], "Sheet", C, false)), "Cells")), [$.add($.add($.add((await $.wv([$t38], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false)), (await $.wv([$t38], "k", { get: async () => L0["k"], set: async (v) => { L0["k"] = v; }, local: true }, false))), (await $.wv([$t38], "m", { get: async () => L0["m"], set: async (v) => { L0["m"] = v; }, local: true }, false))), 2), 8], (await $.wcall([$t38], "FormatFloat", ["#,##0.00", (await $.wv([$t38], "e_All_Amort", { get: async () => L0["e_all_amort"], set: async (v) => { L0["e_all_amort"] = v; }, local: true }, false))], C))); if ($t103 !== undefined) { await $.mset((await $.wv([$t38], "Sheet", C, false)), "Cells", $t103); } }
              { const $t104 = await $.iset((await $.mv((await $.wv([$t38], "Sheet", C, false)), "Cells")), [$.add($.add($.add((await $.wv([$t38], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false)), (await $.wv([$t38], "k", { get: async () => L0["k"], set: async (v) => { L0["k"] = v; }, local: true }, false))), (await $.wv([$t38], "m", { get: async () => L0["m"], set: async (v) => { L0["m"] = v; }, local: true }, false))), 2), 10], (await $.wcall([$t38], "FormatFloat", ["#,##0.00", (await $.wv([$t38], "e_Tax_First_Price", { get: async () => L0["e_tax_first_price"], set: async (v) => { L0["e_tax_first_price"] = v; }, local: true }, false))], C))); if ($t104 !== undefined) { await $.mset((await $.wv([$t38], "Sheet", C, false)), "Cells", $t104); } }
              { const $t105 = await $.iset((await $.mv((await $.wv([$t38], "Sheet", C, false)), "Cells")), [$.add($.add($.add((await $.wv([$t38], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false)), (await $.wv([$t38], "k", { get: async () => L0["k"], set: async (v) => { L0["k"] = v; }, local: true }, false))), (await $.wv([$t38], "m", { get: async () => L0["m"], set: async (v) => { L0["m"] = v; }, local: true }, false))), 2), 11], (await $.wcall([$t38], "FormatFloat", ["#,##0.00", (await $.wv([$t38], "e_Tax_Remainder", { get: async () => L0["e_tax_remainder"], set: async (v) => { L0["e_tax_remainder"] = v; }, local: true }, false))], C))); if ($t105 !== undefined) { await $.mset((await $.wv([$t38], "Sheet", C, false)), "Cells", $t105); } }
              { const $t106 = await $.iset((await $.mv((await $.wv([$t38], "Sheet", C, false)), "Cells")), [$.add($.add($.add((await $.wv([$t38], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false)), (await $.wv([$t38], "k", { get: async () => L0["k"], set: async (v) => { L0["k"] = v; }, local: true }, false))), (await $.wv([$t38], "m", { get: async () => L0["m"], set: async (v) => { L0["m"] = v; }, local: true }, false))), 2), 12], (await $.wcall([$t38], "FormatFloat", ["#,##0.00", (await $.wv([$t38], "e_Tax_Amort", { get: async () => L0["e_tax_amort"], set: async (v) => { L0["e_tax_amort"] = v; }, local: true }, false))], C))); if ($t106 !== undefined) { await $.mset((await $.wv([$t38], "Sheet", C, false)), "Cells", $t106); } }
              { const $t107 = await $.iset((await $.mv((await $.wv([$t38], "Sheet", C, false)), "Cells")), [$.add($.add($.add((await $.wv([$t38], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false)), (await $.wv([$t38], "k", { get: async () => L0["k"], set: async (v) => { L0["k"] = v; }, local: true }, false))), (await $.wv([$t38], "m", { get: async () => L0["m"], set: async (v) => { L0["m"] = v; }, local: true }, false))), 2), 13], (await $.wcall([$t38], "FormatFloat", ["#,##0.00", (await $.wv([$t38], "e_Tax_All_Amort", { get: async () => L0["e_tax_all_amort"], set: async (v) => { L0["e_tax_all_amort"] = v; }, local: true }, false))], C))); if ($t107 !== undefined) { await $.mset((await $.wv([$t38], "Sheet", C, false)), "Cells", $t107); } }
            }
            await $.wset([$t38], "k", $.add($.add((await $.wv([$t38], "k", { get: async () => L0["k"], set: async (v) => { L0["k"] = v; }, local: true }, false)), (await $.wv([$t38], "m", { get: async () => L0["m"], set: async (v) => { L0["m"] = v; }, local: true }, false))), 3), { get: async () => L0["k"], set: async (v) => { L0["k"] = v; }, local: true });
            await $.mcall((await $.wv([$t38], "ODSGroupXLS", C, false)), "Next", []);
            await $.tick();
          }
        }
      }
    }
    await $.stmt($.call(C, "ShowSheet", []));
  } finally {
    await $.mcall((await $.idx((await $.mv((await $.v(C, "Exl")), "Range")), ["A1:A1"])), "Select", []);
    await $.mset((await $.v(C, "Screen")), "Cursor", (await $.v(C, "crDefault")));
    await $.stmt($.call(C, "DestroySheet", []));
    await $.stmt($.call(C, "Close", []));
  }
  return L0.result;
}, {"params": ["status"], "kind": "procedure", "ptypes": ["String"]});
  U.method("TFormDat", "ButtonOkClick", async function ButtonOkClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  { const $t108 = (await $.mv((await $.v(C, "RadioGExcel")), "ItemIndex"));
    if ($.eq($t108, 0)) {
      await $.stmt((await $.call(C, "ExportToExcel", ["NB"])));
    }
    else if ($.eq($t108, 1)) {
      await $.stmt((await $.call(C, "ExportToExcel", ["NL"])));
    }
    else if ($.eq($t108, 2)) {
      await $.stmt((await $.call(C, "ExportToExcel", ["Both"])));
    }
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFormDat", "FormActivate", async function FormActivate(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mset((await $.v(C, "DTPBegin")), "Date", (await $.mcall((await $.mv((await $.v(C, "DataModWares")), "SB_MAIN_RESOURCE")), "CallDateFunction", ["get_date", []])));
  await $.mset((await $.v(C, "DTPEnd")), "Date", (await $.mcall((await $.mv((await $.v(C, "DataModWares")), "SB_MAIN_RESOURCE")), "CallDateFunction", ["get_date", []])));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFormDat", "FormCreate", async function FormCreate(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.stmt((await $.mcall((await $.v(C, "SBTranslateProc")), "TranslateAllCompForms", [Self, (await $.mv((await $.v(C, "sboapiDataModule")), "OrPack_SL"))])));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  return U;
}
