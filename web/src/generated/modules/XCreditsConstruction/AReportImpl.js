// Generated from AReportImpl.pas by pas2js — do not edit by hand; regenerate instead.
/* eslint-disable */
// @ts-nocheck

export default function define($) {
  const U = $.unit("AReportImpl", ["Windows", "Messages", "SysUtils", "Variants", "Classes", "Graphics", "Controls", "Forms", "Dialogs", "StdCtrls", "ComCtrls", "Buttons", "comobj", "DatModConstructionImpl"]);
  const C = [U];
  U.defClass("TReportFrm", "TForm", {"speedbutton1": {"name": "SpeedButton1", "type": "TSpeedButton"}, "datetimepicker1": {"name": "DateTimePicker1", "type": "TDateTimePicker"}, "label1": {"name": "Label1", "type": "TLabel"}, "speedbutton2": {"name": "SpeedButton2", "type": "TSpeedButton"}}, {});
  U.init(async () => {
    U.var_("ReportFrm", null, "TReportFrm");
    U.var_("exl", null, "variant");
    U.var_("sheet", null, "variant");
  });
  U.method("TReportFrm", "FormCanResize", async function FormCanResize(Self, p0, p1, p2, p3) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "newwidth": $.asRef(p1), "newheight": $.asRef(p2), "resize": $.asRef(p3), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await L0["resize"].set(false);
  return L0.result;
}, {"params": ["Sender", "NewWidth", "NewHeight", "Resize"], "kind": "procedure", "ptypes": ["TObject", "Integer", "Integer", "Boolean"]});
  U.method("TReportFrm", "FormCreate", async function FormCreate(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mset((await $.v(C, "DateTimePicker1")), "DateTime", (await $.mv((await $.mcall((await $.mv((await $.v(C, "DatModConstruction")), "sysdat")), "fieldbyname", ["tek_dat"])), "asdatetime")));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TReportFrm", "FormKeyPress", async function FormKeyPress(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "key": $.asRef(p1), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.eq((await $.call(C, "ord", [(await L0["key"].get())])), (await $.v(C, "VK_RETURN"))))) {
    await $.mcall((await $.v(C, "SpeedButton1")), "Click", []);
  }
  return L0.result;
}, {"params": ["Sender", "Key"], "kind": "procedure", "ptypes": ["TObject", "Char"]});
  U.method("TReportFrm", "SpeedButton1Click", async function SpeedButton1Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "restsstr": '', "chpaystr": '', "additionalparams": '', "filterstr": '', "checkstr": '', "sysdat": 0, "creid": 0, "s": 0, "l": 0, "cell": 0, "r": 0, "i": 0, "j": 0, "k": 0, "m": 0, "w": 0, "tt": 0, "dat": 0, "dd": 0, "rc": 0, "t_val": 0, "bash": '', "ll": 0, "vv": 0, "ss": 0};
  await $.fixArgs(L0, ["sender"]);
  L0["number_format"] = "#,##0.00";
  L0["number_format_r"] = "#,##0.00%";
  L0["n"] = "yyy";
  L0["d"] = 2;
  L0["f"] = 3;
  L0["createsheet"] = $.fn(async function CreateSheet() {
  const L1 = {result: undefined};
  try {
    await $.set(C, "Exl", (await $.call(C, "CreateOleObject", ["Excel.Application"])));
    await $.mcall((await $.mv((await $.v(C, "Exl")), "WorkBooks")), "add", []);
    await $.set(C, "Sheet", (await $.idx((await $.mv((await $.mv((await $.mv((await $.v(C, "Exl")), "Application")), "Worksheets")), "Item")), [1])));
  } catch ($t1) {
    $.rethrowControl($t1);
    $.handled($t1);
  }
  return L1.result;
});
  L0["destroysheet"] = $.fn(async function DestroySheet() {
  const L1 = {result: undefined};
  try {
    await $.stmt((await $.call(C, "Finalize", [(await $.v(C, "Sheet"))])));
    await $.stmt((await $.call(C, "Finalize", [(await $.v(C, "Exl"))])));
  } catch ($t2) {
    $.rethrowControl($t2);
    $.handled($t2);
  }
  return L1.result;
});
  L0["showsheet"] = $.fn(async function ShowSheet() {
  const L1 = {result: undefined};
  try {
    await $.mset((await $.v(C, "Exl")), "Visible", true);
  } catch ($t3) {
    $.rethrowControl($t3);
    $.handled($t3);
    await $.stmt($.callv(L0["destroysheet"], []));
  }
  return L1.result;
});
  L0["sysdat"] = (await $.call(C, "Integer", [(await $.call(C, "trunc", [(await $.mv((await $.v(C, "DateTimePicker1")), "Date"))]))]));
  L0["creid"] = (await $.mv((await $.mcall((await $.mv((await $.v(C, "DatModConstruction")), "Credits")), "FieldByName", ["id"])), "AsInteger"));
  await $.stmt((await $.mcall((await $.mv((await $.v(C, "DatModConstruction")), "sbcm_construction")), "CallProcedure", ["report", ["p_id", L0["creid"], "p_dat", L0["sysdat"]]])));
  await $.mcall((await $.mv((await $.v(C, "DatModConstruction")), "reppay")), "Close", []);
  await $.mcall((await $.mv((await $.v(C, "DatModConstruction")), "reppay")), "open", []);
  await $.stmt($.callv(L0["createsheet"], []));
  try {
    await $.mset((await $.idx((await $.mv((await $.v(C, "Sheet")), "Range")), ["A1:A60000"])), "ColumnWidth", 3);
    await $.mset((await $.idx((await $.mv((await $.v(C, "Sheet")), "Range")), ["B1:B60000"])), "ColumnWidth", 10);
    await $.mset((await $.idx((await $.mv((await $.v(C, "Sheet")), "Range")), ["C1:C60000"])), "ColumnWidth", 12);
    await $.mset((await $.idx((await $.mv((await $.v(C, "Sheet")), "Range")), ["D1:D60000"])), "ColumnWidth", 13);
    await $.mset((await $.idx((await $.mv((await $.v(C, "Sheet")), "Range")), ["E1:E60000"])), "ColumnWidth", 18);
    await $.mset((await $.idx((await $.mv((await $.v(C, "Sheet")), "Range")), ["F1:F60000"])), "ColumnWidth", 8);
    await $.mset((await $.idx((await $.mv((await $.v(C, "Sheet")), "Range")), ["G1:G60000"])), "ColumnWidth", 10);
    await $.mset((await $.idx((await $.mv((await $.v(C, "Sheet")), "Range")), ["H1:H60000"])), "ColumnWidth", 8);
    await $.mset((await $.idx((await $.mv((await $.v(C, "Sheet")), "Range")), ["I1:I60000"])), "ColumnWidth", 18);
    await $.mset((await $.idx((await $.mv((await $.v(C, "Sheet")), "Range")), ["J1:J60000"])), "ColumnWidth", 7);
    await $.mset((await $.idx((await $.mv((await $.v(C, "Sheet")), "Range")), ["K1:K60000"])), "ColumnWidth", 9);
    { const $t4 = await $.iset((await $.mv((await $.v(C, "Sheet")), "Cells")), [2, 5], $.add($.add("Alıcının fərdi ödəniş cədvəli  ", (await $.call(C, "datetostr", [L0["sysdat"]]))), " tarixinə vəziyyət")); if ($t4 !== undefined) { await $.mset((await $.v(C, "Sheet")), "Cells", $t4); } }
    await $.mset((await $.mv((await $.idx((await $.mv((await $.v(C, "Sheet")), "Cells")), [2, 5])), "Font")), "Bold", true);
    await $.mset((await $.mv((await $.idx((await $.mv((await $.v(C, "Sheet")), "Cells")), [2, 5])), "Font")), "Color", (await $.v(C, "clolive")));
    await $.mset((await $.mv((await $.idx((await $.mv((await $.v(C, "Sheet")), "Cells")), [2, 5])), "Font")), "size", 17);
    L0["k"] = 12;
    L0["i"] = 0;
    { const $t5 = await $.iset((await $.mv((await $.v(C, "sheet")), "Cells")), [$.add(L0["i"], 3), 3], "S.S.A :"); if ($t5 !== undefined) { await $.mset((await $.v(C, "sheet")), "Cells", $t5); } }
    await $.mset((await $.mv((await $.idx((await $.mv((await $.v(C, "Sheet")), "Cells")), [$.add(L0["i"], 3), 3])), "Font")), "Bold", true);
    await $.mset((await $.mv((await $.idx((await $.mv((await $.v(C, "Sheet")), "Cells")), [$.add(L0["i"], 3), 3])), "Font")), "Color", (await $.v(C, "clNavy")));
    await $.mset((await $.mv((await $.idx((await $.mv((await $.v(C, "Sheet")), "Cells")), [$.add(L0["i"], 3), 3])), "Font")), "size", 13);
    await $.mset((await $.mv((await $.idx((await $.mv((await $.v(C, "Sheet")), "Cells")), [$.add(L0["i"], 3), 4])), "Font")), "Bold", true);
    await $.mset((await $.mv((await $.idx((await $.mv((await $.v(C, "Sheet")), "Cells")), [$.add(L0["i"], 3), 4])), "Font")), "size", 12);
    { const $t6 = await $.iset((await $.mv((await $.v(C, "sheet")), "Cells")), [$.add(L0["i"], 3), 4], (await $.mv((await $.mcall((await $.mv((await $.v(C, "DatModConstruction")), "Credits")), "FieldByName", ["custname"])), "AsString"))); if ($t6 !== undefined) { await $.mset((await $.v(C, "sheet")), "Cells", $t6); } }
    { const $t7 = await $.iset((await $.mv((await $.v(C, "sheet")), "Cells")), [$.add(L0["i"], 4), 3], "Kod :"); if ($t7 !== undefined) { await $.mset((await $.v(C, "sheet")), "Cells", $t7); } }
    await $.mset((await $.mv((await $.idx((await $.mv((await $.v(C, "Sheet")), "Cells")), [$.add(L0["i"], 4), 3])), "Font")), "Bold", true);
    await $.mset((await $.mv((await $.idx((await $.mv((await $.v(C, "Sheet")), "Cells")), [$.add(L0["i"], 4), 3])), "Font")), "Color", (await $.v(C, "clNavy")));
    await $.mset((await $.mv((await $.idx((await $.mv((await $.v(C, "Sheet")), "Cells")), [$.add(L0["i"], 4), 3])), "Font")), "size", 13);
    await $.mset((await $.idx((await $.mv((await $.v(C, "Sheet")), "Cells")), [$.add(L0["i"], L0["k"]), 6])), "NumberFormat", "@");
    await $.mset((await $.mv((await $.idx((await $.mv((await $.v(C, "Sheet")), "Cells")), [$.add(L0["i"], 4), 4])), "Font")), "Bold", true);
    await $.mset((await $.mv((await $.idx((await $.mv((await $.v(C, "Sheet")), "Cells")), [$.add(L0["i"], 4), 4])), "Font")), "size", 12);
    { const $t8 = await $.iset((await $.mv((await $.v(C, "sheet")), "Cells")), [$.add(L0["i"], 4), 4], (await $.mv((await $.mcall((await $.mv((await $.v(C, "DatModConstruction")), "Credits")), "FieldByName", ["code"])), "AsString"))); if ($t8 !== undefined) { await $.mset((await $.v(C, "sheet")), "Cells", $t8); } }
    { const $t9 = await $.iset((await $.mv((await $.v(C, "sheet")), "Cells")), [$.add(L0["i"], 5), 3], "Müqavilə:"); if ($t9 !== undefined) { await $.mset((await $.v(C, "sheet")), "Cells", $t9); } }
    await $.mset((await $.mv((await $.idx((await $.mv((await $.v(C, "Sheet")), "Cells")), [$.add(L0["i"], 5), 3])), "Font")), "Bold", true);
    await $.mset((await $.mv((await $.idx((await $.mv((await $.v(C, "Sheet")), "Cells")), [$.add(L0["i"], 5), 3])), "Font")), "Color", (await $.v(C, "clNavy")));
    await $.mset((await $.mv((await $.idx((await $.mv((await $.v(C, "Sheet")), "Cells")), [$.add(L0["i"], 5), 3])), "Font")), "size", 13);
    await $.mset((await $.mv((await $.idx((await $.mv((await $.v(C, "Sheet")), "Cells")), [$.add(L0["i"], 5), 4])), "Font")), "Bold", true);
    await $.mset((await $.mv((await $.idx((await $.mv((await $.v(C, "Sheet")), "Cells")), [$.add(L0["i"], 5), 4])), "Font")), "size", 12);
    { const $t10 = await $.iset((await $.mv((await $.v(C, "sheet")), "Cells")), [$.add(L0["i"], 5), 4], $.add($.add((await $.mv((await $.mcall((await $.mv((await $.v(C, "DatModConstruction")), "Credits")), "FieldByName", ["ContNum"])), "AsString")), " ,tarix: "), (await $.call(C, "datetostr", [(await $.mv((await $.mcall((await $.mv((await $.v(C, "DatModConstruction")), "Credits")), "FieldByName", ["opendate"])), "AsDateTime"))])))); if ($t10 !== undefined) { await $.mset((await $.v(C, "sheet")), "Cells", $t10); } }
    { const $t11 = await $.iset((await $.mv((await $.v(C, "sheet")), "Cells")), [$.add(L0["i"], 6), 3], "Ünvan:"); if ($t11 !== undefined) { await $.mset((await $.v(C, "sheet")), "Cells", $t11); } }
    await $.mset((await $.mv((await $.idx((await $.mv((await $.v(C, "Sheet")), "Cells")), [$.add(L0["i"], 6), 3])), "Font")), "Bold", true);
    await $.mset((await $.mv((await $.idx((await $.mv((await $.v(C, "Sheet")), "Cells")), [$.add(L0["i"], 6), 3])), "Font")), "Color", (await $.v(C, "clNavy")));
    await $.mset((await $.mv((await $.idx((await $.mv((await $.v(C, "Sheet")), "Cells")), [$.add(L0["i"], 6), 3])), "Font")), "size", 13);
    await $.mset((await $.mv((await $.idx((await $.mv((await $.v(C, "Sheet")), "Cells")), [$.add(L0["i"], 6), 4])), "Font")), "Bold", true);
    await $.mset((await $.mv((await $.idx((await $.mv((await $.v(C, "Sheet")), "Cells")), [$.add(L0["i"], 6), 4])), "Font")), "size", 12);
    { const $t12 = await $.iset((await $.mv((await $.v(C, "sheet")), "Cells")), [$.add(L0["i"], 6), 4], (await $.mv((await $.mcall((await $.mv((await $.v(C, "DatModConstruction")), "Credits")), "FieldByName", ["address"])), "AsString"))); if ($t12 !== undefined) { await $.mset((await $.v(C, "sheet")), "Cells", $t12); } }
    { const $t13 = await $.iset((await $.mv((await $.v(C, "sheet")), "Cells")), [$.add(L0["i"], 7), 3], "Aylıq ödəniş:"); if ($t13 !== undefined) { await $.mset((await $.v(C, "sheet")), "Cells", $t13); } }
    await $.mset((await $.mv((await $.idx((await $.mv((await $.v(C, "Sheet")), "Cells")), [$.add(L0["i"], 7), 3])), "Font")), "Bold", true);
    await $.mset((await $.mv((await $.idx((await $.mv((await $.v(C, "Sheet")), "Cells")), [$.add(L0["i"], 7), 3])), "Font")), "Color", (await $.v(C, "clNavy")));
    await $.mset((await $.mv((await $.idx((await $.mv((await $.v(C, "Sheet")), "Cells")), [$.add(L0["i"], 7), 3])), "Font")), "size", 11);
    await $.mset((await $.mv((await $.idx((await $.mv((await $.v(C, "Sheet")), "Cells")), [$.add(L0["i"], 7), 4])), "Font")), "Bold", true);
    await $.mset((await $.mv((await $.idx((await $.mv((await $.v(C, "Sheet")), "Cells")), [$.add(L0["i"], 7), 4])), "Font")), "size", 12);
    { const $t14 = await $.iset((await $.mv((await $.v(C, "sheet")), "Cells")), [$.add(L0["i"], 7), 4], (await $.mv((await $.mcall((await $.mv((await $.v(C, "DatModConstruction")), "Credits")), "FieldByName", ["monthpay"])), "asfloat"))); if ($t14 !== undefined) { await $.mset((await $.v(C, "sheet")), "Cells", $t14); } }
    { const $t15 = await $.iset((await $.mv((await $.v(C, "sheet")), "Cells")), [$.add(L0["i"], 8), 3], "Ödəniş günü:"); if ($t15 !== undefined) { await $.mset((await $.v(C, "sheet")), "Cells", $t15); } }
    await $.mset((await $.mv((await $.idx((await $.mv((await $.v(C, "Sheet")), "Cells")), [$.add(L0["i"], 8), 3])), "Font")), "Bold", true);
    await $.mset((await $.mv((await $.idx((await $.mv((await $.v(C, "Sheet")), "Cells")), [$.add(L0["i"], 8), 3])), "Font")), "Color", (await $.v(C, "clNavy")));
    await $.mset((await $.mv((await $.idx((await $.mv((await $.v(C, "Sheet")), "Cells")), [$.add(L0["i"], 8), 3])), "Font")), "size", 11);
    await $.mset((await $.mv((await $.idx((await $.mv((await $.v(C, "Sheet")), "Cells")), [$.add(L0["i"], 8), 4])), "Font")), "Bold", true);
    await $.mset((await $.mv((await $.idx((await $.mv((await $.v(C, "Sheet")), "Cells")), [$.add(L0["i"], 8), 4])), "Font")), "size", 12);
    { const $t16 = await $.iset((await $.mv((await $.v(C, "sheet")), "Cells")), [$.add(L0["i"], 8), 4], 30); if ($t16 !== undefined) { await $.mset((await $.v(C, "sheet")), "Cells", $t16); } }
    { const $t17 = await $.iset((await $.mv((await $.v(C, "sheet")), "Cells")), [$.add(L0["i"], 10), 3], "Mənzilin dəyəri"); if ($t17 !== undefined) { await $.mset((await $.v(C, "sheet")), "Cells", $t17); } }
    await $.mset((await $.mv((await $.idx((await $.mv((await $.v(C, "Sheet")), "Cells")), [$.add(L0["i"], 10), 3])), "Font")), "Bold", true);
    await $.mset((await $.mv((await $.idx((await $.mv((await $.v(C, "Sheet")), "Cells")), [$.add(L0["i"], 10), 3])), "Font")), "size", 11);
    { const $t18 = await $.iset((await $.mv((await $.v(C, "sheet")), "Cells")), [$.add(L0["i"], 11), 3], (await $.mv((await $.mcall((await $.mv((await $.v(C, "DatModConstruction")), "Credits")), "FieldByName", ["CREDITAMOUNT"])), "asfloat"))); if ($t18 !== undefined) { await $.mset((await $.v(C, "sheet")), "Cells", $t18); } }
    await $.mset((await $.mv((await $.idx((await $.mv((await $.v(C, "Sheet")), "Cells")), [$.add(L0["i"], 11), 3])), "Font")), "size", 10);
    { const $t19 = await $.iset((await $.mv((await $.v(C, "sheet")), "Cells")), [$.add(L0["i"], 10), 4], "Sahə üzrə ödənilib"); if ($t19 !== undefined) { await $.mset((await $.v(C, "sheet")), "Cells", $t19); } }
    await $.mset((await $.mv((await $.idx((await $.mv((await $.v(C, "Sheet")), "Cells")), [$.add(L0["i"], 10), 4])), "Font")), "Bold", true);
    await $.mset((await $.mv((await $.idx((await $.mv((await $.v(C, "Sheet")), "Cells")), [$.add(L0["i"], 10), 4])), "Font")), "size", 11);
    { const $t20 = await $.iset((await $.mv((await $.v(C, "sheet")), "Cells")), [$.add(L0["i"], 11), 4], (await $.mv((await $.mcall((await $.mv((await $.v(C, "DatModConstruction")), "Credits")), "FieldByName", ["INITIALAMOUNT"])), "asfloat"))); if ($t20 !== undefined) { await $.mset((await $.v(C, "sheet")), "Cells", $t20); } }
    await $.mset((await $.mv((await $.idx((await $.mv((await $.v(C, "Sheet")), "Cells")), [$.add(L0["i"], 11), 4])), "Font")), "size", 10);
    { const $t21 = await $.iset((await $.mv((await $.v(C, "sheet")), "Cells")), [$.add(L0["i"], 10), 5], "Kredit üzrə ödənilib"); if ($t21 !== undefined) { await $.mset((await $.v(C, "sheet")), "Cells", $t21); } }
    await $.mset((await $.mv((await $.idx((await $.mv((await $.v(C, "Sheet")), "Cells")), [$.add(L0["i"], 10), 5])), "Font")), "Bold", true);
    await $.mset((await $.mv((await $.idx((await $.mv((await $.v(C, "Sheet")), "Cells")), [$.add(L0["i"], 10), 5])), "Font")), "size", 11);
    { const $t22 = await $.iset((await $.mv((await $.v(C, "sheet")), "Cells")), [$.add(L0["i"], 10), 6], "Qalıq:"); if ($t22 !== undefined) { await $.mset((await $.v(C, "sheet")), "Cells", $t22); } }
    await $.mset((await $.mv((await $.idx((await $.mv((await $.v(C, "Sheet")), "Cells")), [$.add(L0["i"], 10), 6])), "Font")), "Bold", true);
    await $.mset((await $.mv((await $.idx((await $.mv((await $.v(C, "Sheet")), "Cells")), [$.add(L0["i"], 10), 6])), "Font")), "size", 11);
    { const $t23 = await $.iset((await $.mv((await $.v(C, "sheet")), "Cells")), [$.add(L0["i"], 11), 6], "=sum(C11-(D11+E11))"); if ($t23 !== undefined) { await $.mset((await $.v(C, "sheet")), "Cells", $t23); } }
    await $.mset((await $.mv((await $.idx((await $.mv((await $.v(C, "Sheet")), "Cells")), [$.add(L0["i"], 11), 6])), "Font")), "size", 10);
    await $.mset((await $.mv((await $.idx((await $.mv((await $.v(C, "Sheet")), "Range")), [$.add($.add($.add("C", (await $.call(C, "IntToStr", [10]))), ":F"), (await $.call(C, "inttostr", [11])))])), "Borders")), "Color", (await $.v(C, "clred")));
    await $.stmt($.callv(L0["showsheet"], []));
    L0["i"] = 1;
    { const $t24 = await $.iset((await $.mv((await $.v(C, "Sheet")), "Cells")), [$.add(L0["i"], L0["k"]), 1], "S/N"); if ($t24 !== undefined) { await $.mset((await $.v(C, "Sheet")), "Cells", $t24); } }
    await $.mset((await $.mv((await $.idx((await $.mv((await $.v(C, "Sheet")), "Cells")), [$.add(L0["i"], L0["k"]), 1])), "Font")), "Bold", true);
    await $.mset((await $.mv((await $.idx((await $.mv((await $.v(C, "Sheet")), "Cells")), [$.add(L0["i"], L0["k"]), 1])), "Font")), "Color", (await $.v(C, "clblack")));
    { const $t25 = await $.iset((await $.mv((await $.v(C, "Sheet")), "Cells")), [$.add(L0["i"], L0["k"]), 2], "Tarix"); if ($t25 !== undefined) { await $.mset((await $.v(C, "Sheet")), "Cells", $t25); } }
    await $.mset((await $.mv((await $.idx((await $.mv((await $.v(C, "Sheet")), "Cells")), [$.add(L0["i"], L0["k"]), 2])), "Font")), "Bold", true);
    await $.mset((await $.mv((await $.idx((await $.mv((await $.v(C, "Sheet")), "Cells")), [$.add(L0["i"], L0["k"]), 2])), "Font")), "Color", (await $.v(C, "clblack")));
    { const $t26 = await $.iset((await $.mv((await $.v(C, "Sheet")), "Cells")), [$.add(L0["i"], L0["k"]), 3], "Ödənilməli"); if ($t26 !== undefined) { await $.mset((await $.v(C, "Sheet")), "Cells", $t26); } }
    await $.mset((await $.mv((await $.idx((await $.mv((await $.v(C, "Sheet")), "Cells")), [$.add(L0["i"], L0["k"]), 3])), "Font")), "Bold", true);
    await $.mset((await $.mv((await $.idx((await $.mv((await $.v(C, "Sheet")), "Cells")), [$.add(L0["i"], L0["k"]), 3])), "Font")), "Color", (await $.v(C, "clblack")));
    { const $t27 = await $.iset((await $.mv((await $.v(C, "Sheet")), "Cells")), [$.add(L0["i"], L0["k"]), 4], "Ödənilib"); if ($t27 !== undefined) { await $.mset((await $.v(C, "Sheet")), "Cells", $t27); } }
    await $.mset((await $.mv((await $.idx((await $.mv((await $.v(C, "Sheet")), "Cells")), [$.add(L0["i"], L0["k"]), 4])), "Font")), "Bold", true);
    await $.mset((await $.mv((await $.idx((await $.mv((await $.v(C, "Sheet")), "Cells")), [$.add(L0["i"], L0["k"]), 4])), "Font")), "Color", (await $.v(C, "clblack")));
    { const $t28 = await $.iset((await $.mv((await $.v(C, "Sheet")), "Cells")), [$.add(L0["i"], L0["k"]), 5], "Ödəmə növü"); if ($t28 !== undefined) { await $.mset((await $.v(C, "Sheet")), "Cells", $t28); } }
    await $.mset((await $.mv((await $.idx((await $.mv((await $.v(C, "Sheet")), "Cells")), [$.add(L0["i"], L0["k"]), 5])), "Font")), "Bold", true);
    await $.mset((await $.mv((await $.idx((await $.mv((await $.v(C, "Sheet")), "Cells")), [$.add(L0["i"], L0["k"]), 5])), "Font")), "Color", (await $.v(C, "clblack")));
    { const $t29 = await $.iset((await $.mv((await $.v(C, "Sheet")), "Cells")), [$.add(L0["i"], L0["k"]), 6], "Gecikmə günləri"); if ($t29 !== undefined) { await $.mset((await $.v(C, "Sheet")), "Cells", $t29); } }
    await $.mset((await $.mv((await $.idx((await $.mv((await $.v(C, "Sheet")), "Cells")), [$.add(L0["i"], L0["k"]), 6])), "Font")), "Bold", true);
    await $.mset((await $.mv((await $.idx((await $.mv((await $.v(C, "Sheet")), "Cells")), [$.add(L0["i"], L0["k"]), 6])), "Font")), "Color", (await $.v(C, "clblack")));
    await $.mset((await $.idx((await $.mv((await $.v(C, "Sheet")), "Cells")), [$.add(L0["i"], L0["k"]), 6])), "WrapText", true);
    { const $t30 = await $.iset((await $.mv((await $.v(C, "Sheet")), "Cells")), [$.add(L0["i"], L0["k"]), 7], "Hesablanmış cərimə"); if ($t30 !== undefined) { await $.mset((await $.v(C, "Sheet")), "Cells", $t30); } }
    await $.mset((await $.mv((await $.idx((await $.mv((await $.v(C, "Sheet")), "Cells")), [$.add(L0["i"], L0["k"]), 7])), "Font")), "Bold", true);
    await $.mset((await $.mv((await $.idx((await $.mv((await $.v(C, "Sheet")), "Cells")), [$.add(L0["i"], L0["k"]), 7])), "Font")), "Color", (await $.v(C, "clblack")));
    await $.mset((await $.idx((await $.mv((await $.v(C, "Sheet")), "Cells")), [$.add(L0["i"], L0["k"]), 7])), "WrapText", true);
    { const $t31 = await $.iset((await $.mv((await $.v(C, "Sheet")), "Cells")), [$.add(L0["i"], L0["k"]), 8], " Ödənilmiş cərimə"); if ($t31 !== undefined) { await $.mset((await $.v(C, "Sheet")), "Cells", $t31); } }
    await $.mset((await $.mv((await $.idx((await $.mv((await $.v(C, "Sheet")), "Cells")), [$.add(L0["i"], L0["k"]), 8])), "Font")), "Bold", true);
    await $.mset((await $.mv((await $.idx((await $.mv((await $.v(C, "Sheet")), "Cells")), [$.add(L0["i"], L0["k"]), 8])), "Font")), "Color", (await $.v(C, "clblack")));
    await $.mset((await $.idx((await $.mv((await $.v(C, "Sheet")), "Cells")), [$.add(L0["i"], L0["k"]), 8])), "WrapText", true);
    { const $t32 = await $.iset((await $.mv((await $.v(C, "Sheet")), "Cells")), [$.add(L0["i"], L0["k"]), 9], "Ödəmə növü"); if ($t32 !== undefined) { await $.mset((await $.v(C, "Sheet")), "Cells", $t32); } }
    await $.mset((await $.mv((await $.idx((await $.mv((await $.v(C, "Sheet")), "Cells")), [$.add(L0["i"], L0["k"]), 9])), "Font")), "Bold", true);
    await $.mset((await $.mv((await $.idx((await $.mv((await $.v(C, "Sheet")), "Cells")), [$.add(L0["i"], L0["k"]), 9])), "Font")), "Color", (await $.v(C, "clblack")));
    await $.mset((await $.idx((await $.mv((await $.v(C, "Sheet")), "Cells")), [$.add(L0["i"], L0["k"]), 9])), "WrapText", true);
    { const $t33 = await $.iset((await $.mv((await $.v(C, "Sheet")), "Cells")), [$.add(L0["i"], L0["k"]), 10], "Cərimə borcu"); if ($t33 !== undefined) { await $.mset((await $.v(C, "Sheet")), "Cells", $t33); } }
    await $.mset((await $.mv((await $.idx((await $.mv((await $.v(C, "Sheet")), "Cells")), [$.add(L0["i"], L0["k"]), 10])), "Font")), "Bold", true);
    await $.mset((await $.mv((await $.idx((await $.mv((await $.v(C, "Sheet")), "Cells")), [$.add(L0["i"], L0["k"]), 10])), "Font")), "Color", (await $.v(C, "clblack")));
    await $.mset((await $.idx((await $.mv((await $.v(C, "Sheet")), "Cells")), [$.add(L0["i"], L0["k"]), 10])), "WrapText", true);
    { const $t34 = await $.iset((await $.mv((await $.v(C, "Sheet")), "Cells")), [$.add(L0["i"], L0["k"]), 11], "Cəmi borc"); if ($t34 !== undefined) { await $.mset((await $.v(C, "Sheet")), "Cells", $t34); } }
    await $.mset((await $.mv((await $.idx((await $.mv((await $.v(C, "Sheet")), "Cells")), [$.add(L0["i"], L0["k"]), 11])), "Font")), "Bold", true);
    await $.mset((await $.mv((await $.idx((await $.mv((await $.v(C, "Sheet")), "Cells")), [$.add(L0["i"], L0["k"]), 11])), "Font")), "Color", (await $.v(C, "clblack")));
    L0["rc"] = (await $.mv((await $.mv((await $.v(C, "DatModConstruction")), "reppay")), "RecordCount"));
    { const $t35 = L0["rc"];
      L0["i"] = 1;
      let $t36 = true;
      for (;;) {
        if (!$t36) { L0["i"] = $.succ(L0["i"], 1); }
        $t36 = false;
        if (!($.ord(L0["i"]) <= $.ord($t35))) break;
        if ($.truthy($.ne((await $.mv((await $.mcall((await $.mv((await $.v(C, "DatModConstruction")), "reppay")), "FieldByName", ["kod"])), "asinteger")), 0))) {
          await $.mset((await $.mv((await $.idx((await $.mv((await $.v(C, "Sheet")), "Cells")), [$.add($.add(L0["i"], L0["k"]), 1), 2])), "Font")), "Color", (await $.v(C, "clBlue")));
          await $.mset((await $.mv((await $.idx((await $.mv((await $.v(C, "Sheet")), "Cells")), [$.add($.add(L0["i"], L0["k"]), 1), 2])), "Font")), "Bold", true);
          await $.mset((await $.mv((await $.idx((await $.mv((await $.v(C, "Sheet")), "Cells")), [$.add($.add(L0["i"], L0["k"]), 1), 3])), "Font")), "Color", (await $.v(C, "clBlue")));
          await $.mset((await $.mv((await $.idx((await $.mv((await $.v(C, "Sheet")), "Cells")), [$.add($.add(L0["i"], L0["k"]), 1), 4])), "Font")), "Color", (await $.v(C, "clBlue")));
        }
        await $.mset((await $.mv((await $.idx((await $.mv((await $.v(C, "Sheet")), "Cells")), [$.add($.add(L0["i"], L0["k"]), 1), 1])), "Font")), "Bold", true);
        { const $t37 = await $.iset((await $.mv((await $.v(C, "Sheet")), "Cells")), [$.add($.add(L0["i"], L0["k"]), 1), 1], L0["i"]); if ($t37 !== undefined) { await $.mset((await $.v(C, "Sheet")), "Cells", $t37); } }
        { const $t38 = await $.iset((await $.mv((await $.v(C, "Sheet")), "Cells")), [$.add($.add(L0["i"], L0["k"]), 1), 2], (await $.mv((await $.mcall((await $.mv((await $.v(C, "DatModConstruction")), "reppay")), "FieldByName", ["dat"])), "asdatetime"))); if ($t38 !== undefined) { await $.mset((await $.v(C, "Sheet")), "Cells", $t38); } }
        { const $t39 = await $.iset((await $.mv((await $.v(C, "Sheet")), "Cells")), [$.add($.add(L0["i"], L0["k"]), 1), 3], (await $.mv((await $.mcall((await $.mv((await $.v(C, "DatModConstruction")), "reppay")), "FieldByName", ["MONTHSPAY"])), "AsFloat"))); if ($t39 !== undefined) { await $.mset((await $.v(C, "Sheet")), "Cells", $t39); } }
        { const $t40 = await $.iset((await $.mv((await $.v(C, "Sheet")), "Cells")), [$.add($.add(L0["i"], L0["k"]), 1), 4], (await $.mv((await $.mcall((await $.mv((await $.v(C, "DatModConstruction")), "reppay")), "FieldByName", ["PAYAMMOUNT"])), "AsFloat"))); if ($t40 !== undefined) { await $.mset((await $.v(C, "Sheet")), "Cells", $t40); } }
        { const $t41 = await $.iset((await $.mv((await $.v(C, "Sheet")), "Cells")), [$.add($.add(L0["i"], L0["k"]), 1), 5], (await $.mv((await $.mcall((await $.mv((await $.v(C, "DatModConstruction")), "reppay")), "FieldByName", ["MAINDESCRIPTION"])), "AsString"))); if ($t41 !== undefined) { await $.mset((await $.v(C, "Sheet")), "Cells", $t41); } }
        await $.mset((await $.idx((await $.mv((await $.v(C, "Sheet")), "Cells")), [$.add($.add(L0["i"], L0["k"]), 1), 5])), "WrapText", true);
        { const $t42 = await $.iset((await $.mv((await $.v(C, "Sheet")), "Cells")), [$.add($.add(L0["i"], L0["k"]), 1), 6], (await $.mv((await $.mcall((await $.mv((await $.v(C, "DatModConstruction")), "reppay")), "FieldByName", ["duedaycount"])), "AsInteger"))); if ($t42 !== undefined) { await $.mset((await $.v(C, "Sheet")), "Cells", $t42); } }
        { const $t43 = await $.iset((await $.mv((await $.v(C, "Sheet")), "Cells")), [$.add($.add(L0["i"], L0["k"]), 1), 7], (await $.mv((await $.mcall((await $.mv((await $.v(C, "DatModConstruction")), "reppay")), "FieldByName", ["persenammount"])), "AsFloat"))); if ($t43 !== undefined) { await $.mset((await $.v(C, "Sheet")), "Cells", $t43); } }
        { const $t44 = await $.iset((await $.mv((await $.v(C, "Sheet")), "Cells")), [$.add($.add(L0["i"], L0["k"]), 1), 8], (await $.mv((await $.mcall((await $.mv((await $.v(C, "DatModConstruction")), "reppay")), "FieldByName", ["paydueammount"])), "AsFloat"))); if ($t44 !== undefined) { await $.mset((await $.v(C, "Sheet")), "Cells", $t44); } }
        { const $t45 = await $.iset((await $.mv((await $.v(C, "Sheet")), "Cells")), [$.add($.add(L0["i"], L0["k"]), 1), 9], (await $.mv((await $.mcall((await $.mv((await $.v(C, "DatModConstruction")), "reppay")), "FieldByName", ["duedecription"])), "AsString"))); if ($t45 !== undefined) { await $.mset((await $.v(C, "Sheet")), "Cells", $t45); } }
        await $.mset((await $.idx((await $.mv((await $.v(C, "Sheet")), "Cells")), [$.add($.add(L0["i"], L0["k"]), 1), 9])), "WrapText", true);
        { const $t46 = await $.iset((await $.mv((await $.v(C, "Sheet")), "Cells")), [$.add($.add(L0["i"], L0["k"]), 1), 10], (await $.mv((await $.mcall((await $.mv((await $.v(C, "DatModConstruction")), "reppay")), "FieldByName", ["cermeborc"])), "AsFloat"))); if ($t46 !== undefined) { await $.mset((await $.v(C, "Sheet")), "Cells", $t46); } }
        { const $t47 = await $.iset((await $.mv((await $.v(C, "Sheet")), "Cells")), [$.add($.add(L0["i"], L0["k"]), 1), 11], (await $.mv((await $.mcall((await $.mv((await $.v(C, "DatModConstruction")), "reppay")), "FieldByName", ["sumdueammount"])), "AsFloat"))); if ($t47 !== undefined) { await $.mset((await $.v(C, "Sheet")), "Cells", $t47); } }
        await $.mcall((await $.mv((await $.v(C, "DatModConstruction")), "reppay")), "Next", []);
        await $.tick();
      }
    }
    await $.mset((await $.mv((await $.idx((await $.mv((await $.v(C, "Sheet")), "Cells")), [$.add($.add(L0["rc"], L0["k"]), 2), 1])), "Font")), "Bold", true);
    { const $t48 = await $.iset((await $.mv((await $.v(C, "Sheet")), "Cells")), [$.add($.add(L0["rc"], L0["k"]), 2), 1], "Cəmi"); if ($t48 !== undefined) { await $.mset((await $.v(C, "Sheet")), "Cells", $t48); } }
    await $.mset((await $.mv((await $.idx((await $.mv((await $.v(C, "Sheet")), "Cells")), [$.add($.add(L0["rc"], L0["k"]), 2), 1])), "Font")), "Color", (await $.v(C, "clGreen")));
    await $.mset((await $.mv((await $.idx((await $.mv((await $.v(C, "Sheet")), "Cells")), [$.add($.add(L0["rc"], L0["k"]), 2), 3])), "Font")), "Bold", true);
    await $.mset((await $.mv((await $.idx((await $.mv((await $.v(C, "Sheet")), "Cells")), [$.add($.add(L0["rc"], L0["k"]), 2), 3])), "Font")), "Color", (await $.v(C, "clGreen")));
    { const $t49 = await $.iset((await $.mv((await $.v(C, "Sheet")), "Cells")), [$.add($.add(L0["rc"], L0["k"]), 2), 3], $.add($.add("=sum(C14:C", (await $.call(C, "inttostr", [$.add(L0["rc"], 13)]))), ")")); if ($t49 !== undefined) { await $.mset((await $.v(C, "Sheet")), "Cells", $t49); } }
    await $.mset((await $.mv((await $.idx((await $.mv((await $.v(C, "Sheet")), "Cells")), [$.add($.add(L0["rc"], L0["k"]), 2), 4])), "Font")), "Bold", true);
    await $.mset((await $.mv((await $.idx((await $.mv((await $.v(C, "Sheet")), "Cells")), [$.add($.add(L0["rc"], L0["k"]), 2), 4])), "Font")), "Color", (await $.v(C, "clGreen")));
    { const $t50 = await $.iset((await $.mv((await $.v(C, "Sheet")), "Cells")), [$.add($.add(L0["rc"], L0["k"]), 2), 4], $.add($.add("=sum(D14:D", (await $.call(C, "inttostr", [$.add(L0["rc"], 13)]))), ")")); if ($t50 !== undefined) { await $.mset((await $.v(C, "Sheet")), "Cells", $t50); } }
    { const $t51 = await $.iset((await $.mv((await $.v(C, "sheet")), "Cells")), [11, 5], $.add($.add("=sum(D14:D", (await $.call(C, "inttostr", [$.add(L0["rc"], 13)]))), ")")); if ($t51 !== undefined) { await $.mset((await $.v(C, "sheet")), "Cells", $t51); } }
    await $.mset((await $.mv((await $.idx((await $.mv((await $.v(C, "Sheet")), "Cells")), [11, 5])), "Font")), "size", 10);
    L0["bash"] = (await $.call(C, "inttostr", [$.add(L0["k"], 1)]));
    await $.mset((await $.mv((await $.idx((await $.mv((await $.v(C, "Sheet")), "Range")), [$.add($.add($.add("A", L0["bash"]), ":K"), (await $.call(C, "inttostr", [$.add($.add($.add(L0["m"], L0["k"]), 1), L0["rc"])])))])), "Borders")), "Color", (await $.v(C, "clBlack")));
  } finally {
    await $.mcall((await $.idx((await $.mv((await $.v(C, "Exl")), "Range")), ["A1:A1"])), "Select", []);
    await $.mset((await $.v(C, "Screen")), "Cursor", (await $.v(C, "crDefault")));
    await $.stmt($.callv(L0["destroysheet"], []));
    await $.mcall((await $.mv((await $.v(C, "DatModConstruction")), "reppay")), "EnableControls", []);
  }
  await $.mcall((await $.mv((await $.mv((await $.v(C, "DatModConstruction")), "reppay")), "Session")), "Commit", []);
  await $.mcall((await $.mv((await $.v(C, "DatModConstruction")), "reppay")), "close", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TReportFrm", "SpeedButton2Click", async function SpeedButton2Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.stmt($.call(C, "close", []));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  return U;
}
