// Generated from Excelform.pas by pas2js — do not edit by hand; regenerate instead.
/* eslint-disable */
// @ts-nocheck

export default function define($) {
  const U = $.unit("Excelform", ["Windows", "Messages", "SysUtils", "Classes", "Graphics", "Controls", "Forms", "Dialogs", "StdCtrls", "ExtCtrls", "comobj", "SBTranslateProc", "sboapiDataModuleImpl"]);
  const C = [U];
  U.defClass("TExcels", "TForm", {"excels": {"name": "Excels", "type": "TRadioGroup"}, "button1": {"name": "Button1", "type": "TButton"}}, {});
  U.init(async () => {
    U.var_("Excels", null, "TExcels");
  });
  U.method("TExcels", "Button1Click", async function Button1Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "excel": null};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.eq((await $.mv((await $.v(C, "Excels")), "ItemIndex")), 0))) {
    L0["excel"] = (await $.call(C, "CreateOleObject", ["Excel.Application"]));
    await $.mcall((await $.mv(L0["excel"], "Workbooks")), "Add", []);
    await $.mset((await $.idx((await $.mv((await $.mv(L0["excel"], "Sheets")), "Item")), [1])), "Name", "CARDS");
    await $.mset((await $.idx((await $.mv((await $.idx((await $.mv((await $.idx((await $.mv(L0["excel"], "WorkBooks")), [1])), "WorkSheets")), [1])), "Columns")), [1])), "ColumnWidth", 40);
    { const $t1 = await $.iset((await $.mv(L0["excel"], "Range")), ["a1"], "Kart №"); if ($t1 !== undefined) { await $.mset(L0["excel"], "Range", $t1); } }
    await $.mset((await $.mv((await $.idx((await $.mv(L0["excel"], "Range")), ["a1"])), "Font")), "Name", "Arial AzLat");
    await $.mset((await $.mv((await $.idx((await $.mv(L0["excel"], "Range")), ["a1"])), "Font")), "Bold", true);
    await $.mset((await $.mv((await $.idx((await $.mv(L0["excel"], "Range")), ["a1:a12"])), "Borders")), "LineStyle", 1);
    await $.mset(L0["excel"], "Visible", true);
  }
  if ($.truthy($.eq((await $.mv((await $.v(C, "Excels")), "ItemIndex")), 2))) {
    L0["excel"] = (await $.call(C, "CreateOleObject", ["Excel.Application"]));
    await $.mcall((await $.mv(L0["excel"], "Workbooks")), "Add", []);
    await $.mset((await $.idx((await $.mv((await $.mv(L0["excel"], "Sheets")), "Item")), [1])), "Name", "CARDS");
    await $.mset((await $.idx((await $.mv((await $.idx((await $.mv((await $.idx((await $.mv(L0["excel"], "WorkBooks")), [1])), "WorkSheets")), [1])), "Columns")), [1])), "ColumnWidth", 40);
    await $.mset((await $.idx((await $.mv((await $.idx((await $.mv((await $.idx((await $.mv(L0["excel"], "WorkBooks")), [1])), "WorkSheets")), [1])), "Columns")), [2])), "ColumnWidth", 20);
    { const $t2 = await $.iset((await $.mv(L0["excel"], "Range")), ["a1"], "Kart №"); if ($t2 !== undefined) { await $.mset(L0["excel"], "Range", $t2); } }
    await $.mset((await $.mv((await $.idx((await $.mv(L0["excel"], "Range")), ["a1"])), "Font")), "Name", "Arial AzLat");
    await $.mset((await $.mv((await $.idx((await $.mv(L0["excel"], "Range")), ["a1"])), "Font")), "Bold", true);
    { const $t3 = await $.iset((await $.mv(L0["excel"], "Range")), ["b1"], "Tarix"); if ($t3 !== undefined) { await $.mset(L0["excel"], "Range", $t3); } }
    await $.mset((await $.mv((await $.idx((await $.mv(L0["excel"], "Range")), ["b1"])), "Font")), "Name", "Arial AzLat");
    await $.mset((await $.mv((await $.idx((await $.mv(L0["excel"], "Range")), ["b1"])), "Font")), "Bold", true);
    await $.mset((await $.mv((await $.idx((await $.mv(L0["excel"], "Range")), ["a1:b12"])), "Borders")), "LineStyle", 1);
    await $.mset(L0["excel"], "Visible", true);
  }
  if ($.truthy($.eq((await $.mv((await $.v(C, "Excels")), "ItemIndex")), 1))) {
    L0["excel"] = (await $.call(C, "CreateOleObject", ["Excel.Application"]));
    await $.mcall((await $.mv(L0["excel"], "Workbooks")), "Add", []);
    await $.mset((await $.idx((await $.mv((await $.mv(L0["excel"], "Sheets")), "Item")), [1])), "Name", "CARDS");
    await $.mset((await $.idx((await $.mv((await $.idx((await $.mv((await $.idx((await $.mv(L0["excel"], "WorkBooks")), [1])), "WorkSheets")), [1])), "Columns")), [1])), "ColumnWidth", 5);
    await $.mset((await $.idx((await $.mv((await $.idx((await $.mv((await $.idx((await $.mv(L0["excel"], "WorkBooks")), [1])), "WorkSheets")), [1])), "Columns")), [2])), "ColumnWidth", 12);
    await $.mset((await $.idx((await $.mv((await $.idx((await $.mv((await $.idx((await $.mv(L0["excel"], "WorkBooks")), [1])), "WorkSheets")), [1])), "Columns")), [3])), "ColumnWidth", 12);
    await $.mset((await $.idx((await $.mv((await $.idx((await $.mv((await $.idx((await $.mv(L0["excel"], "WorkBooks")), [1])), "WorkSheets")), [1])), "Columns")), [4])), "ColumnWidth", 10);
    await $.mset((await $.idx((await $.mv((await $.idx((await $.mv((await $.idx((await $.mv(L0["excel"], "WorkBooks")), [1])), "WorkSheets")), [1])), "Columns")), [5])), "ColumnWidth", 10);
    await $.mset((await $.idx((await $.mv((await $.idx((await $.mv((await $.idx((await $.mv(L0["excel"], "WorkBooks")), [1])), "WorkSheets")), [1])), "Columns")), [6])), "ColumnWidth", 20);
    await $.mset((await $.idx((await $.mv((await $.idx((await $.mv((await $.idx((await $.mv(L0["excel"], "WorkBooks")), [1])), "WorkSheets")), [1])), "Columns")), [7])), "ColumnWidth", 10);
    await $.mset((await $.idx((await $.mv((await $.idx((await $.mv((await $.idx((await $.mv(L0["excel"], "WorkBooks")), [1])), "WorkSheets")), [1])), "Columns")), [8])), "ColumnWidth", 20);
    await $.mset((await $.idx((await $.mv((await $.idx((await $.mv((await $.idx((await $.mv(L0["excel"], "WorkBooks")), [1])), "WorkSheets")), [1])), "Columns")), [9])), "ColumnWidth", 20);
    await $.mset((await $.idx((await $.mv((await $.idx((await $.mv((await $.idx((await $.mv(L0["excel"], "WorkBooks")), [1])), "WorkSheets")), [1])), "Columns")), [10])), "ColumnWidth", 20);
    await $.mset((await $.idx((await $.mv((await $.idx((await $.mv((await $.idx((await $.mv(L0["excel"], "WorkBooks")), [1])), "WorkSheets")), [1])), "Columns")), [11])), "ColumnWidth", 20);
    await $.mset((await $.idx((await $.mv((await $.idx((await $.mv((await $.idx((await $.mv(L0["excel"], "WorkBooks")), [1])), "WorkSheets")), [1])), "Columns")), [12])), "ColumnWidth", 20);
    { const $t4 = await $.iset((await $.mv(L0["excel"], "Range")), ["a1"], "#"); if ($t4 !== undefined) { await $.mset(L0["excel"], "Range", $t4); } }
    { const $t5 = await $.iset((await $.mv(L0["excel"], "Range")), ["b1"], "Ad"); if ($t5 !== undefined) { await $.mset(L0["excel"], "Range", $t5); } }
    { const $t6 = await $.iset((await $.mv(L0["excel"], "Range")), ["c1"], "Soyad"); if ($t6 !== undefined) { await $.mset(L0["excel"], "Range", $t6); } }
    { const $t7 = await $.iset((await $.mv(L0["excel"], "Range")), ["d1"], "Dogum Tarixi"); if ($t7 !== undefined) { await $.mset(L0["excel"], "Range", $t7); } }
    { const $t8 = await $.iset((await $.mv(L0["excel"], "Range")), ["e1"], "Shexsiyyet vesiqesi ID"); if ($t8 !== undefined) { await $.mset(L0["excel"], "Range", $t8); } }
    { const $t9 = await $.iset((await $.mv(L0["excel"], "Range")), ["f1"], "Rezident Q/Rezident"); if ($t9 !== undefined) { await $.mset(L0["excel"], "Range", $t9); } }
    { const $t10 = await $.iset((await $.mv(L0["excel"], "Range")), ["g1"], "Shexsi kod"); if ($t10 !== undefined) { await $.mset(L0["excel"], "Range", $t10); } }
    { const $t11 = await $.iset((await $.mv(L0["excel"], "Range")), ["h1"], "Telefon"); if ($t11 !== undefined) { await $.mset(L0["excel"], "Range", $t11); } }
    { const $t12 = await $.iset((await $.mv(L0["excel"], "Range")), ["i1"], "Kart Novu"); if ($t12 !== undefined) { await $.mset(L0["excel"], "Range", $t12); } }
    { const $t13 = await $.iset((await $.mv(L0["excel"], "Range")), ["j1"], "Hesab Nomresi"); if ($t13 !== undefined) { await $.mset(L0["excel"], "Range", $t13); } }
    { const $t14 = await $.iset((await $.mv(L0["excel"], "Range")), ["k1"], "Address"); if ($t14 !== undefined) { await $.mset(L0["excel"], "Range", $t14); } }
    { const $t15 = await $.iset((await $.mv(L0["excel"], "Range")), ["l1"], "Şirkət adı"); if ($t15 !== undefined) { await $.mset(L0["excel"], "Range", $t15); } }
    await $.mset((await $.mv((await $.idx((await $.mv(L0["excel"], "Range")), ["a1:l100"])), "Font")), "Name", "Arial AzLat");
    await $.mset((await $.mv((await $.idx((await $.mv(L0["excel"], "Range")), ["a1:l100"])), "Font")), "Bold", true);
    await $.mset((await $.mv((await $.idx((await $.mv(L0["excel"], "Range")), ["a1:l100"])), "Borders")), "LineStyle", 1);
    await $.mset(L0["excel"], "Visible", true);
  }
  if ($.truthy($.eq((await $.mv((await $.v(C, "Excels")), "ItemIndex")), 3))) {
    L0["excel"] = (await $.call(C, "CreateOleObject", ["Excel.Application"]));
    await $.mcall((await $.mv(L0["excel"], "Workbooks")), "Add", []);
    await $.mset((await $.idx((await $.mv((await $.mv(L0["excel"], "Sheets")), "Item")), [1])), "Name", "CARDS");
    await $.mset((await $.idx((await $.mv((await $.idx((await $.mv((await $.idx((await $.mv(L0["excel"], "WorkBooks")), [1])), "WorkSheets")), [1])), "Columns")), [1])), "ColumnWidth", 10);
    await $.mset((await $.idx((await $.mv((await $.idx((await $.mv((await $.idx((await $.mv(L0["excel"], "WorkBooks")), [1])), "WorkSheets")), [1])), "Columns")), [2])), "ColumnWidth", 20);
    await $.mset((await $.idx((await $.mv((await $.idx((await $.mv((await $.idx((await $.mv(L0["excel"], "WorkBooks")), [1])), "WorkSheets")), [1])), "Columns")), [3])), "ColumnWidth", 20);
    await $.mset((await $.idx((await $.mv((await $.idx((await $.mv((await $.idx((await $.mv(L0["excel"], "WorkBooks")), [1])), "WorkSheets")), [1])), "Columns")), [4])), "ColumnWidth", 20);
    await $.mset((await $.idx((await $.mv((await $.idx((await $.mv((await $.idx((await $.mv(L0["excel"], "WorkBooks")), [1])), "WorkSheets")), [1])), "Columns")), [5])), "ColumnWidth", 10);
    await $.mset((await $.idx((await $.mv((await $.idx((await $.mv((await $.idx((await $.mv(L0["excel"], "WorkBooks")), [1])), "WorkSheets")), [1])), "Columns")), [6])), "ColumnWidth", 20);
    { const $t16 = await $.iset((await $.mv(L0["excel"], "Range")), ["b3"], "Müəssisə "); if ($t16 !== undefined) { await $.mset(L0["excel"], "Range", $t16); } }
    { const $t17 = await $.iset((await $.mv(L0["excel"], "Range")), ["b5"], "Tarix  "); if ($t17 !== undefined) { await $.mset(L0["excel"], "Range", $t17); } }
    { const $t18 = await $.iset((await $.mv(L0["excel"], "Range")), ["b6"], "Təyinat  "); if ($t18 !== undefined) { await $.mset(L0["excel"], "Range", $t18); } }
    { const $t19 = await $.iset((await $.mv(L0["excel"], "Range")), ["a9"], "Sıra №"); if ($t19 !== undefined) { await $.mset(L0["excel"], "Range", $t19); } }
    { const $t20 = await $.iset((await $.mv(L0["excel"], "Range")), ["b9"], "Adı Soyadı"); if ($t20 !== undefined) { await $.mset(L0["excel"], "Range", $t20); } }
    { const $t21 = await $.iset((await $.mv(L0["excel"], "Range")), ["c9"], "Kredit Hesabı"); if ($t21 !== undefined) { await $.mset(L0["excel"], "Range", $t21); } }
    { const $t22 = await $.iset((await $.mv(L0["excel"], "Range")), ["d9"], "Məbləğ"); if ($t22 !== undefined) { await $.mset(L0["excel"], "Range", $t22); } }
    { const $t23 = await $.iset((await $.mv(L0["excel"], "Range")), ["e9"], "Valyuta"); if ($t23 !== undefined) { await $.mset(L0["excel"], "Range", $t23); } }
    { const $t24 = await $.iset((await $.mv(L0["excel"], "Range")), ["f9"], "Debet hesabı"); if ($t24 !== undefined) { await $.mset(L0["excel"], "Range", $t24); } }
    await $.mset((await $.mv((await $.idx((await $.mv(L0["excel"], "Range")), ["a1:f100"])), "Font")), "Name", "Arial AzLat");
    await $.mset((await $.mv((await $.idx((await $.mv(L0["excel"], "Range")), ["a1:f100"])), "Font")), "Bold", true);
    await $.mset((await $.mv((await $.idx((await $.mv(L0["excel"], "Range")), ["a9:f100"])), "Borders")), "LineStyle", 1);
    await $.mset(L0["excel"], "Visible", true);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TExcels", "FormCreate", async function FormCreate(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.stmt((await $.mcall((await $.v(C, "SBTranslateProc")), "TranslateAllCompForms", [Self, (await $.mv((await $.v(C, "sboapiDataModule")), "OrPack_SL"))])));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  return U;
}
