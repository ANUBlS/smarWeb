// Generated from Unit3.pas by pas2js — do not edit by hand; regenerate instead.
/* eslint-disable */
// @ts-nocheck

export default function define($) {
  const U = $.unit("Unit3", ["Windows", "Messages", "SysUtils", "Classes", "Graphics", "Controls", "Forms", "Dialogs", "ComCtrls", "OleServer", "ExcelXP", "StdCtrls", "Buttons", "Variants", "UnitData", "sboapiDataModuleImpl", "SBTranslateProc"]);
  const C = [U];
  U.defClass("TForm_enter", "TForm", {"label1": {"name": "Label1", "type": "TLabel"}, "datetimepicker1": {"name": "DateTimePicker1", "type": "TDateTimePicker"}, "ok_excel": {"name": "Ok_excel", "type": "TBitBtn"}, "excelapplication1": {"name": "ExcelApplication1", "type": "TExcelApplication"}, "progressbar1": {"name": "ProgressBar1", "type": "TProgressBar"}}, {});
  U.init(async () => {
    U.var_("Form_enter", null, "TForm_enter");
  });
  U.method("TForm_enter", "FormCreate", async function FormCreate(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.stmt((await $.mcall((await $.v(C, "SBTranslateProc")), "TranslateAllCompForms", [Self, (await $.mv((await $.v(C, "sboapiDataModule")), "OrPack_SL"))])));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TForm_enter", "Ok_excelClick", async function Ok_excelClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "vv": 0, "i": 0, "j": 0, "k": 0, "n": 0, "v": null, "sheet": null, "a": 0, "sum": 0, "sum1": 0, "sum2": 0, "sum3": 0};
  await $.fixArgs(L0, ["sender"]);
  L0["a"] = (await $.call(C, "integer", [(await $.call(C, "trunc", [(await $.mv((await $.v(C, "DateTimePicker1")), "DateTime"))]))]));
  {
    const $t1 = (await $.mv((await $.v(C, "DataModWares")), "OracleDataSet6"));
    await $.stmt($.wcall([$t1], "close", [], C));
    await $.stmt((await $.wcall([$t1], "SetVariable", ["ENT", (await $.wv([$t1], "a", { get: async () => L0["a"], set: async (v) => { L0["a"] = v; }, local: true }, false))], C)));
    await $.stmt($.wcall([$t1], "open", [], C));
  }
  await $.mcall((await $.v(C, "ExcelApplication1")), "Connect", []);
  await $.stmt((await $.mcall((await $.mv((await $.v(C, "ExcelApplication1")), "Workbooks")), "Add", [(await $.v(C, "EmptyParam")), 0])));
  L0["i"] = 1;
  L0["j"] = 1;
  L0["sheet"] = (await $.idx((await $.mv((await $.mv((await $.v(C, "ExcelApplication1")), "Worksheets")), "Item")), [1]));
  await $.mset((await $.idx((await $.mv(L0["sheet"], "Range")), ["A1:A60000", "A1:A60000"])), "ColumnWidth", 45);
  await $.mset((await $.idx((await $.mv(L0["sheet"], "Range")), ["B1:B60000", "B1:B60000"])), "ColumnWidth", 10);
  await $.mset((await $.idx((await $.mv(L0["sheet"], "Range")), ["C1:C60000", "C1:C60000"])), "ColumnWidth", 9);
  await $.mset((await $.idx((await $.mv(L0["sheet"], "Range")), ["D1:D60000", "D1:D60000"])), "ColumnWidth", 11);
  await $.mset((await $.idx((await $.mv(L0["sheet"], "Range")), ["E1:E60000", "E1:E60000"])), "ColumnWidth", 10);
  await $.mset((await $.idx((await $.mv(L0["sheet"], "Range")), ["F1:F60000", "F1:F60000"])), "ColumnWidth", 10);
  await $.mset((await $.idx((await $.mv(L0["sheet"], "Range")), ["G1:G60000", "G1:G60000"])), "ColumnWidth", 10);
  await $.mset((await $.idx((await $.mv(L0["sheet"], "Range")), ["H1:H60000", "H1:H60000"])), "ColumnWidth", 10);
  await $.mset((await $.idx((await $.mv(L0["sheet"], "Range")), ["I1:I60000", "I1:I60000"])), "ColumnWidth", 10);
  await $.mset((await $.idx((await $.mv(L0["sheet"], "Range")), ["J1:I60000", "J1:I60000"])), "ColumnWidth", 10);
  await $.mcall((await $.mv((await $.v(C, "DataModWares")), "OracleDataSet6")), "Open", []);
  await $.mcall((await $.mv((await $.v(C, "DataModWares")), "OracleDataSet6")), "First", []);
  await $.mset((await $.v(C, "ProgressBar1")), "Max", (await $.mv((await $.mv((await $.v(C, "DataModWares")), "OracleDataSet6")), "RecordCount")));
  { const $t2 = await $.iset((await $.mv((await $.mv(L0["sheet"], "Cells")), "Item")), [L0["i"], 4], (await $.mv((await $.v(C, "DateTimePicker1")), "DateTime"))); if ($t2 !== undefined) { await $.mset((await $.mv(L0["sheet"], "Cells")), "Item", $t2); } }
  await $.mset((await $.mv((await $.idx((await $.mv((await $.mv(L0["sheet"], "Cells")), "Item")), [L0["i"], 4])), "Font")), "Name", "Tahoma");
  await $.mset((await $.mv((await $.idx((await $.mv((await $.mv(L0["sheet"], "Cells")), "Item")), [L0["i"], 4])), "Font")), "Color", (await $.v(C, "clblack")));
  await $.mset((await $.mv((await $.idx((await $.mv((await $.mv(L0["sheet"], "Cells")), "Item")), [L0["i"], 4])), "Font")), "bold", true);
  await $.mset((await $.mv((await $.idx((await $.mv((await $.mv(L0["sheet"], "Cells")), "Item")), [L0["i"], 5])), "Font")), "Name", "Tahoma");
  await $.mset((await $.mv((await $.idx((await $.mv((await $.mv(L0["sheet"], "Cells")), "Item")), [L0["i"], 5])), "Font")), "Color", (await $.v(C, "clblack")));
  await $.mset((await $.mv((await $.idx((await $.mv((await $.mv(L0["sheet"], "Cells")), "Item")), [L0["i"], 5])), "Font")), "bold", true);
  await $.mset((await $.mv((await $.idx((await $.mv((await $.mv(L0["sheet"], "Cells")), "Item")), [L0["i"], 5])), "Font")), "Size", 13);
  { const $t3 = await $.iset((await $.mv((await $.mv(L0["sheet"], "Cells")), "Item")), [L0["i"], 5], "  Tarixinə hesabat  "); if ($t3 !== undefined) { await $.mset((await $.mv(L0["sheet"], "Cells")), "Item", $t3); } }
  while ($.truthy($.not((await $.mv((await $.mv((await $.v(C, "DataModWares")), "OracleDataSet6")), "Eof"))))) {
    { const $t4 = await $.iset((await $.mv((await $.mv(L0["sheet"], "Cells")), "Item")), [$.add(L0["i"], 1), 1], (await $.mv((await $.mcall((await $.mv((await $.v(C, "DataModWares")), "OracleDataSet5")), "fieldbyname", ["name"])), "AsString"))); if ($t4 !== undefined) { await $.mset((await $.mv(L0["sheet"], "Cells")), "Item", $t4); } }
    await $.mset((await $.mv((await $.idx((await $.mv((await $.mv(L0["sheet"], "Cells")), "Item")), [$.add(L0["i"], 1), 1])), "Font")), "Name", "Tahoma");
    await $.mset((await $.mv((await $.idx((await $.mv((await $.mv(L0["sheet"], "Cells")), "Item")), [$.add(L0["i"], 1), 1])), "Font")), "Color", (await $.v(C, "clred")));
    await $.mset((await $.mv((await $.idx((await $.mv((await $.mv(L0["sheet"], "Cells")), "Item")), [$.add(L0["i"], 1), 1])), "Font")), "Size", 11);
    { const $t5 = await $.iset((await $.mv((await $.mv(L0["sheet"], "Cells")), "Item")), [$.add(L0["i"], 2), 1], "Vəsaitin adı"); if ($t5 !== undefined) { await $.mset((await $.mv(L0["sheet"], "Cells")), "Item", $t5); } }
    await $.mset((await $.mv((await $.idx((await $.mv((await $.mv(L0["sheet"], "Cells")), "Item")), [$.add(L0["i"], 2), 1])), "Font")), "Name", "Tahoma");
    await $.mset((await $.mv((await $.idx((await $.mv((await $.mv(L0["sheet"], "Cells")), "Item")), [$.add(L0["i"], 2), 1])), "Font")), "Color", (await $.v(C, "clBlue")));
    await $.mset((await $.mv((await $.idx((await $.mv((await $.mv(L0["sheet"], "Cells")), "Item")), [$.add(L0["i"], 2), 1])), "Font")), "Size", 10);
    await $.mset((await $.mv((await $.idx((await $.mv(L0["sheet"], "Range")), ["A1", "I1"])), "Borders")), "Color", (await $.v(C, "clBlack")));
    { const $t6 = await $.iset((await $.mv((await $.mv(L0["sheet"], "Cells")), "Item")), [$.add(L0["i"], 2), 2], "İnventar tarixi"); if ($t6 !== undefined) { await $.mset((await $.mv(L0["sheet"], "Cells")), "Item", $t6); } }
    await $.mset((await $.mv((await $.idx((await $.mv((await $.mv(L0["sheet"], "Cells")), "Item")), [$.add(L0["i"], 2), 2])), "Font")), "Name", "Tahoma");
    await $.mset((await $.mv((await $.idx((await $.mv((await $.mv(L0["sheet"], "Cells")), "Item")), [$.add(L0["i"], 2), 2])), "Font")), "Color", (await $.v(C, "clBlue")));
    await $.mset((await $.mv((await $.idx((await $.mv((await $.mv(L0["sheet"], "Cells")), "Item")), [$.add(L0["i"], 2), 2])), "Font")), "Size", 10);
    { const $t7 = await $.iset((await $.mv((await $.mv(L0["sheet"], "Cells")), "Item")), [$.add(L0["i"], 2), 3], "İlkin dəyər"); if ($t7 !== undefined) { await $.mset((await $.mv(L0["sheet"], "Cells")), "Item", $t7); } }
    await $.mset((await $.mv((await $.idx((await $.mv((await $.mv(L0["sheet"], "Cells")), "Item")), [$.add(L0["i"], 2), 3])), "Font")), "Name", "Tahoma");
    await $.mset((await $.mv((await $.idx((await $.mv((await $.mv(L0["sheet"], "Cells")), "Item")), [$.add(L0["i"], 2), 3])), "Font")), "Color", (await $.v(C, "clBlue")));
    await $.mset((await $.mv((await $.idx((await $.mv((await $.mv(L0["sheet"], "Cells")), "Item")), [$.add(L0["i"], 2), 3])), "Font")), "Size", 10);
    { const $t8 = await $.iset((await $.mv((await $.mv(L0["sheet"], "Cells")), "Item")), [$.add(L0["i"], 2), 4], "Qalıq dəyər"); if ($t8 !== undefined) { await $.mset((await $.mv(L0["sheet"], "Cells")), "Item", $t8); } }
    await $.mset((await $.mv((await $.idx((await $.mv((await $.mv(L0["sheet"], "Cells")), "Item")), [$.add(L0["i"], 2), 4])), "Font")), "Name", "Tahoma");
    await $.mset((await $.mv((await $.idx((await $.mv((await $.mv(L0["sheet"], "Cells")), "Item")), [$.add(L0["i"], 2), 4])), "Font")), "Color", (await $.v(C, "clBlue")));
    await $.mset((await $.mv((await $.idx((await $.mv((await $.mv(L0["sheet"], "Cells")), "Item")), [$.add(L0["i"], 2), 4])), "Font")), "Size", 10);
    { const $t9 = await $.iset((await $.mv((await $.mv(L0["sheet"], "Cells")), "Item")), [$.add(L0["i"], 2), 5], "Yığılmış amortizasiya"); if ($t9 !== undefined) { await $.mset((await $.mv(L0["sheet"], "Cells")), "Item", $t9); } }
    await $.mset((await $.mv((await $.idx((await $.mv((await $.mv(L0["sheet"], "Cells")), "Item")), [$.add(L0["i"], 2), 5])), "Font")), "Name", "Tahoma");
    await $.mset((await $.mv((await $.idx((await $.mv((await $.mv(L0["sheet"], "Cells")), "Item")), [$.add(L0["i"], 2), 5])), "Font")), "Color", (await $.v(C, "clBlue")));
    await $.mset((await $.mv((await $.idx((await $.mv((await $.mv(L0["sheet"], "Cells")), "Item")), [$.add(L0["i"], 2), 5])), "Font")), "Size", 10);
    { const $t10 = await $.iset((await $.mv((await $.mv(L0["sheet"], "Cells")), "Item")), [$.add(L0["i"], 2), 6], "Amortizasiya"); if ($t10 !== undefined) { await $.mset((await $.mv(L0["sheet"], "Cells")), "Item", $t10); } }
    await $.mset((await $.mv((await $.idx((await $.mv((await $.mv(L0["sheet"], "Cells")), "Item")), [$.add(L0["i"], 2), 6])), "Font")), "Name", "Tahoma");
    await $.mset((await $.mv((await $.idx((await $.mv((await $.mv(L0["sheet"], "Cells")), "Item")), [$.add(L0["i"], 2), 6])), "Font")), "Color", (await $.v(C, "clBlue")));
    await $.mset((await $.mv((await $.idx((await $.mv((await $.mv(L0["sheet"], "Cells")), "Item")), [$.add(L0["i"], 2), 6])), "Font")), "Size", 10);
    { const $t11 = await $.iset((await $.mv((await $.mv(L0["sheet"], "Cells")), "Item")), [$.add(L0["i"], 2), 7], "Maliyyə faizi"); if ($t11 !== undefined) { await $.mset((await $.mv(L0["sheet"], "Cells")), "Item", $t11); } }
    await $.mset((await $.mv((await $.idx((await $.mv((await $.mv(L0["sheet"], "Cells")), "Item")), [$.add(L0["i"], 2), 7])), "Font")), "Name", "Tahoma");
    await $.mset((await $.mv((await $.idx((await $.mv((await $.mv(L0["sheet"], "Cells")), "Item")), [$.add(L0["i"], 2), 7])), "Font")), "Color", (await $.v(C, "clBlue")));
    await $.mset((await $.mv((await $.idx((await $.mv((await $.mv(L0["sheet"], "Cells")), "Item")), [$.add(L0["i"], 2), 7])), "Font")), "Size", 10);
    { const $t12 = await $.iset((await $.mv((await $.mv(L0["sheet"], "Cells")), "Item")), [$.add(L0["i"], 2), 8], "İnventar №"); if ($t12 !== undefined) { await $.mset((await $.mv(L0["sheet"], "Cells")), "Item", $t12); } }
    await $.mset((await $.mv((await $.idx((await $.mv((await $.mv(L0["sheet"], "Cells")), "Item")), [$.add(L0["i"], 2), 8])), "Font")), "Name", "Tahoma");
    await $.mset((await $.mv((await $.idx((await $.mv((await $.mv(L0["sheet"], "Cells")), "Item")), [$.add(L0["i"], 2), 8])), "Font")), "Color", (await $.v(C, "clBlue")));
    await $.mset((await $.mv((await $.idx((await $.mv((await $.mv(L0["sheet"], "Cells")), "Item")), [$.add(L0["i"], 2), 8])), "Font")), "Size", 10);
    { const $t13 = await $.iset((await $.mv((await $.mv(L0["sheet"], "Cells")), "Item")), [$.add(L0["i"], 2), 9], "Amortizasiya tarixi"); if ($t13 !== undefined) { await $.mset((await $.mv(L0["sheet"], "Cells")), "Item", $t13); } }
    await $.mset((await $.mv((await $.idx((await $.mv((await $.mv(L0["sheet"], "Cells")), "Item")), [$.add(L0["i"], 2), 9])), "Font")), "Name", "Tahoma");
    await $.mset((await $.mv((await $.idx((await $.mv((await $.mv(L0["sheet"], "Cells")), "Item")), [$.add(L0["i"], 2), 9])), "Font")), "Color", (await $.v(C, "clBlue")));
    await $.mset((await $.mv((await $.idx((await $.mv((await $.mv(L0["sheet"], "Cells")), "Item")), [$.add(L0["i"], 2), 9])), "Font")), "Size", 10);
    { const $t14 = await $.iset((await $.mv((await $.mv(L0["sheet"], "Cells")), "Item")), [$.add(L0["i"], 2), 10], "Silinmə tarixi"); if ($t14 !== undefined) { await $.mset((await $.mv(L0["sheet"], "Cells")), "Item", $t14); } }
    await $.mset((await $.mv((await $.idx((await $.mv((await $.mv(L0["sheet"], "Cells")), "Item")), [$.add(L0["i"], 2), 10])), "Font")), "Name", "Tahoma");
    await $.mset((await $.mv((await $.idx((await $.mv((await $.mv(L0["sheet"], "Cells")), "Item")), [$.add(L0["i"], 2), 10])), "Font")), "Color", (await $.v(C, "clBlue")));
    await $.mset((await $.mv((await $.idx((await $.mv((await $.mv(L0["sheet"], "Cells")), "Item")), [$.add(L0["i"], 2), 10])), "Font")), "Size", 10);
    await $.mset((await $.mv((await $.idx((await $.mv((await $.mv(L0["sheet"], "Cells")), "Item")), [L0["i"], 3])), "font")), "color", (await $.v(C, "clred")));
    await $.mset((await $.mv((await $.idx((await $.mv((await $.mv(L0["sheet"], "Cells")), "Item")), [L0["i"], 4])), "font")), "color", (await $.v(C, "clred")));
    await $.mset((await $.mv((await $.idx((await $.mv((await $.mv(L0["sheet"], "Cells")), "Item")), [L0["i"], 5])), "font")), "color", (await $.v(C, "clred")));
    await $.mset((await $.mv((await $.idx((await $.mv((await $.mv(L0["sheet"], "Cells")), "Item")), [L0["i"], 6])), "font")), "color", (await $.v(C, "clred")));
    L0["sum"] = 0;
    L0["sum1"] = 0;
    L0["sum2"] = 0;
    L0["sum3"] = 0;
    while ($.truthy($.not((await $.mv((await $.mv((await $.v(C, "DataModWares")), "OracleDataSet6")), "Eof"))))) {
      L0["j"] = L0["i"];
      { const $t15 = await $.iset((await $.mv((await $.mv(L0["sheet"], "Cells")), "Item")), [$.add(L0["i"], 3), 1], (await $.mv((await $.mcall((await $.mv((await $.v(C, "DataModWares")), "OracleDataSet6")), "fieldbyname", ["WARES_NAME"])), "AsString"))); if ($t15 !== undefined) { await $.mset((await $.mv(L0["sheet"], "Cells")), "Item", $t15); } }
      await $.mset((await $.mv((await $.idx((await $.mv((await $.mv(L0["sheet"], "Cells")), "Item")), [$.add(L0["i"], 3), 1])), "Font")), "Name", "Tahoma");
      { const $t16 = await $.iset((await $.mv((await $.mv(L0["sheet"], "Cells")), "Item")), [$.add(L0["i"], 3), 2], (await $.mv((await $.mcall((await $.mv((await $.v(C, "DataModWares")), "OracleDataSet6")), "fieldbyname", ["INVENTAR_DATE"])), "AsString"))); if ($t16 !== undefined) { await $.mset((await $.mv(L0["sheet"], "Cells")), "Item", $t16); } }
      { const $t17 = await $.iset((await $.mv((await $.mv(L0["sheet"], "Cells")), "Item")), [$.add(L0["i"], 3), 3], (await $.mv((await $.mcall((await $.mv((await $.v(C, "DataModWares")), "OracleDataSet6")), "fieldbyname", ["FIRST_PRICE"])), "AsString"))); if ($t17 !== undefined) { await $.mset((await $.mv(L0["sheet"], "Cells")), "Item", $t17); } }
      { const $t18 = await $.iset((await $.mv((await $.mv(L0["sheet"], "Cells")), "Item")), [$.add(L0["i"], 3), 4], (await $.mv((await $.mcall((await $.mv((await $.v(C, "DataModWares")), "OracleDataSet6")), "fieldbyname", ["REMAINDER"])), "AsString"))); if ($t18 !== undefined) { await $.mset((await $.mv(L0["sheet"], "Cells")), "Item", $t18); } }
      { const $t19 = await $.iset((await $.mv((await $.mv(L0["sheet"], "Cells")), "Item")), [$.add(L0["i"], 3), 5], (await $.mv((await $.mcall((await $.mv((await $.v(C, "DataModWares")), "OracleDataSet6")), "fieldbyname", ["ALL_AMORT"])), "AsString"))); if ($t19 !== undefined) { await $.mset((await $.mv(L0["sheet"], "Cells")), "Item", $t19); } }
      { const $t20 = await $.iset((await $.mv((await $.mv(L0["sheet"], "Cells")), "Item")), [$.add(L0["i"], 3), 6], (await $.mv((await $.mcall((await $.mv((await $.v(C, "DataModWares")), "OracleDataSet6")), "fieldbyname", ["AMORT"])), "AsString"))); if ($t20 !== undefined) { await $.mset((await $.mv(L0["sheet"], "Cells")), "Item", $t20); } }
      { const $t21 = await $.iset((await $.mv((await $.mv(L0["sheet"], "Cells")), "Item")), [$.add(L0["i"], 3), 7], (await $.mv((await $.mcall((await $.mv((await $.v(C, "DataModWares")), "OracleDataSet6")), "fieldbyname", ["PERCENT"])), "AsString"))); if ($t21 !== undefined) { await $.mset((await $.mv(L0["sheet"], "Cells")), "Item", $t21); } }
      { const $t22 = await $.iset((await $.mv((await $.mv(L0["sheet"], "Cells")), "Item")), [$.add(L0["i"], 3), 8], (await $.mv((await $.mcall((await $.mv((await $.v(C, "DataModWares")), "OracleDataSet6")), "fieldbyname", ["INVENTAR_NO"])), "AsString"))); if ($t22 !== undefined) { await $.mset((await $.mv(L0["sheet"], "Cells")), "Item", $t22); } }
      { const $t23 = await $.iset((await $.mv((await $.mv(L0["sheet"], "Cells")), "Item")), [$.add(L0["i"], 3), 9], (await $.mv((await $.mcall((await $.mv((await $.v(C, "DataModWares")), "OracleDataSet6")), "fieldbyname", ["AMORT_DATE"])), "AsString"))); if ($t23 !== undefined) { await $.mset((await $.mv(L0["sheet"], "Cells")), "Item", $t23); } }
      { const $t24 = await $.iset((await $.mv((await $.mv(L0["sheet"], "Cells")), "Item")), [$.add(L0["i"], 3), 10], (await $.mv((await $.mcall((await $.mv((await $.v(C, "DataModWares")), "OracleDataSet6")), "fieldbyname", ["DEL_DATE"])), "AsString"))); if ($t24 !== undefined) { await $.mset((await $.mv(L0["sheet"], "Cells")), "Item", $t24); } }
      await $.stmt((await $.call(C, "inc", [$.ref(async () => L0["i"], async ($t25) => { L0["i"] = $t25; })])));
      L0["sum"] = $.add(L0["sum"], (await $.mv((await $.mcall((await $.mv((await $.v(C, "DataModWares")), "OracleDataSet6")), "fieldbyname", ["FIRST_PRICE"])), "AsFloat")));
      L0["sum1"] = $.add(L0["sum1"], (await $.mv((await $.mcall((await $.mv((await $.v(C, "DataModWares")), "OracleDataSet6")), "fieldbyname", ["REMAINDER"])), "AsFloat")));
      L0["sum2"] = $.add(L0["sum2"], (await $.mv((await $.mcall((await $.mv((await $.v(C, "DataModWares")), "OracleDataSet6")), "fieldbyname", ["ALL_AMORT"])), "AsFloat")));
      L0["sum3"] = $.add(L0["sum3"], (await $.mv((await $.mcall((await $.mv((await $.v(C, "DataModWares")), "OracleDataSet6")), "fieldbyname", ["AMORT"])), "AsFloat")));
      { const $t26 = await $.iset((await $.mv((await $.mv(L0["sheet"], "Cells")), "Item")), [$.add(L0["i"], 3), 3], L0["sum"]); if ($t26 !== undefined) { await $.mset((await $.mv(L0["sheet"], "Cells")), "Item", $t26); } }
      { const $t27 = await $.iset((await $.mv((await $.mv(L0["sheet"], "Cells")), "Item")), [$.add(L0["i"], 3), 4], L0["sum1"]); if ($t27 !== undefined) { await $.mset((await $.mv(L0["sheet"], "Cells")), "Item", $t27); } }
      { const $t28 = await $.iset((await $.mv((await $.mv(L0["sheet"], "Cells")), "Item")), [$.add(L0["i"], 3), 5], L0["sum2"]); if ($t28 !== undefined) { await $.mset((await $.mv(L0["sheet"], "Cells")), "Item", $t28); } }
      { const $t29 = await $.iset((await $.mv((await $.mv(L0["sheet"], "Cells")), "Item")), [$.add(L0["i"], 3), 6], L0["sum3"]); if ($t29 !== undefined) { await $.mset((await $.mv(L0["sheet"], "Cells")), "Item", $t29); } }
      await $.mcall((await $.mv((await $.v(C, "DataModWares")), "OracleDataSet6")), "Next", []);
      await $.tick();
    }
    await $.stmt((await $.mcall((await $.v(C, "ProgressBar1")), "StepBy", [1])));
    await $.stmt((await $.call(C, "inc", [$.ref(async () => L0["i"], async ($t30) => { L0["i"] = $t30; }), 3])));
    await $.mcall((await $.mv((await $.v(C, "DataModWares")), "OracleDataSet5")), "Next", []);
    await $.tick();
  }
  { const $t31 = await $.iset((await $.mv((await $.v(C, "ExcelApplication1")), "Visible")), [0], true); if ($t31 !== undefined) { await $.mset((await $.v(C, "ExcelApplication1")), "Visible", $t31); } }
  await $.mset((await $.v(C, "ProgressBar1")), "max", 0);
  await $.mcall((await $.v(C, "ExcelApplication1")), "Disconnect", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  return U;
}
