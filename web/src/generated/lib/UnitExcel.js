// Generated from UnitExcel.pas by pas2js — do not edit by hand; regenerate instead.
/* eslint-disable */
// @ts-nocheck

export default function define($) {
  const U = $.unit("UnitExcel", ["Windows", "Messages", "SysUtils", "Classes", "Graphics", "Controls", "Forms", "Dialogs", "ExtCtrls", "Buttons", "ComCtrls", "ComObj", "sboapiDataModuleImpl", "SBTranslateProc"]);
  const C = [U];
  U.defClass("TFormExcel", "TForm", {"panelmain": {"name": "PanelMain", "type": "TPanel"}, "datetimepicker1": {"name": "DateTimePicker1", "type": "TDateTimePicker"}, "datetimepicker2": {"name": "DateTimePicker2", "type": "TDateTimePicker"}, "spbtnexcel": {"name": "SpBtnExcel", "type": "TSpeedButton"}}, {});
  U.init(async () => {
    U.var_("FormExcel", null, "TFormExcel");
    U.var_("Exl", null, "Variant");
    U.var_("Sheet", null, "Variant");
  });
  U.func("DestroySheet", async function DestroySheet(Self) {
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
  U.func("ShowSheet", async function ShowSheet(Self) {
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
  U.func("CreateSheet", async function CreateSheet(Self) {
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
  U.method("TFormExcel", "FormCreate", async function FormCreate(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.stmt((await $.mcall((await $.v(C, "SBTranslateProc")), "TranslateAllCompForms", [Self, (await $.mv((await $.v(C, "sboapiDataModule")), "OrPack_SL"))])));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFormExcel", "SpBtnExcelClick", async function SpBtnExcelClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  try {
    await $.mset((await $.v(C, "Screen")), "Cursor", (await $.v(C, "crSQLWait")));
    await $.stmt($.call(C, "CreateSheet", []));
    await $.stmt($.call(C, "ShowSheet", []));
  } finally {
    await $.mset((await $.v(C, "Screen")), "Cursor", (await $.v(C, "crDefault")));
    await $.stmt($.call(C, "DestroySheet", []));
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  return U;
}
