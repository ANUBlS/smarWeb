// Generated from UnitCM_DailyOper.pas by pas2js — do not edit by hand; regenerate instead.
/* eslint-disable */
// @ts-nocheck

export default function define($) {
  const U = $.unit("UnitCM_DailyOper", ["Windows", "Messages", "SysUtils", "Classes", "Graphics", "Controls", "Forms", "Dialogs", "Grids", "DBGrids", "StdCtrls", "CheckLst", "ExtCtrls", "ComCtrls", "CMExcelExport", "CommonDecls", "systemstate", "UnitDataModDailyOper"]);
  const C = [U];
  U.defClass("TFormDailyOper", "TForm", {"chboxfilial": {"name": "ChBoxFilial", "type": "TCheckListBox"}, "excelexporter": {"name": "ExcelExporter", "type": "TCMExcelExport"}, "panel1": {"name": "Panel1", "type": "TPanel"}, "chboxselectall": {"name": "ChBoxSelectAll", "type": "TCheckBox"}, "btnok": {"name": "BtnOK", "type": "TButton"}, "btnexcel": {"name": "BtnExcel", "type": "TButton"}, "dtpickerpaydate": {"name": "DTPickerPayDate", "type": "TDateTimePicker"}, "combobox1": {"name": "ComboBox1", "type": "TComboBox"}, "button1": {"name": "Button1", "type": "TButton"}, "label2": {"name": "Label2", "type": "TLabel"}, "label1": {"name": "Label1", "type": "TLabel"}, "cmexcelexport1": {"name": "CMExcelExport1", "type": "TCMExcelExport"}, "excelehtiyat": {"name": "excelehtiyat", "type": "TButton"}}, {});
  U.init(async () => {
    U.var_("FormDailyOper", null, "TFormDailyOper");
    U.var_("filialStr", '', "String");
  });
  U.func("InitPlugin", async function InitPlugin(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"s": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["s"]);
  await $.mcall((await $.v(C, "FormDailyOper")), "ShowModal", []);
  return L0.result;
}, {"params": ["s"], "kind": "procedure", "ptypes": ["String"]});
  U.method("TFormDailyOper", "filialyaz", async function filialyaz(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: undefined, "i": 0};
  await $.set(C, "filialStr", "");
  { const $t1 = $.sub((await $.mv((await $.mv((await $.v(C, "DataModDailyOper")), "ODS_FILIAL")), "RecordCount")), 1);
    L0["i"] = 0;
    let $t2 = true;
    for (;;) {
      if (!$t2) { L0["i"] = $.succ(L0["i"], 1); }
      $t2 = false;
      if (!($.ord(L0["i"]) <= $.ord($t1))) break;
      if ($.truthy($.eq((await $.idx((await $.mv((await $.v(C, "ChBoxFilial")), "Checked")), [L0["i"]])), true))) {
        if ($.truthy($.eq((await $.v(C, "filialStr")), ""))) {
          await $.set(C, "filialStr", $.add($.add("'", (await $.idx((await $.mv((await $.v(C, "ChBoxFilial")), "Items")), [L0["i"]]))), "'"));
        } else {
          await $.set(C, "filialStr", $.add($.add($.add($.add((await $.v(C, "filialStr")), ","), "'"), (await $.idx((await $.mv((await $.v(C, "ChBoxFilial")), "Items")), [L0["i"]]))), "'"));
        }
      }
      await $.tick();
    }
  }
  return L0.result;
}, {"params": [], "kind": "procedure", "ptypes": []});
  U.method("TFormDailyOper", "FormCreate", async function FormCreate(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "i": 0};
  await $.fixArgs(L0, ["sender"]);
  await $.set(C, "DataModDailyOper", (await $.mcall((await $.v(C, "TDataModDailyOper")), "Create", [Self])));
  await $.mcall((await $.mv((await $.v(C, "DataModDailyOper")), "ODS_Valuta")), "First", []);
  { const $t3 = $.sub((await $.mv((await $.mv((await $.v(C, "DataModDailyOper")), "ODS_Valuta")), "RecordCount")), 1);
    L0["i"] = 0;
    let $t4 = true;
    for (;;) {
      if (!$t4) { L0["i"] = $.succ(L0["i"], 1); }
      $t4 = false;
      if (!($.ord(L0["i"]) <= $.ord($t3))) break;
      await $.stmt((await $.mcall((await $.mv((await $.v(C, "ComboBox1")), "Items")), "Add", [(await $.mv((await $.mcall((await $.mv((await $.v(C, "DataModDailyOper")), "ODS_Valuta")), "fieldbyname", ["val_name"])), "AsString"))])));
      await $.mcall((await $.mv((await $.v(C, "DataModDailyOper")), "ODS_Valuta")), "Next", []);
      await $.tick();
    }
  }
  await $.mset((await $.v(C, "ComboBox1")), "ItemIndex", 0);
  await $.mcall((await $.mv((await $.v(C, "DataModDailyOper")), "ODS_FILIAL")), "First", []);
  { const $t5 = $.sub((await $.mv((await $.mv((await $.v(C, "DataModDailyOper")), "ODS_FILIAL")), "RecordCount")), 1);
    L0["i"] = 0;
    let $t6 = true;
    for (;;) {
      if (!$t6) { L0["i"] = $.succ(L0["i"], 1); }
      $t6 = false;
      if (!($.ord(L0["i"]) <= $.ord($t5))) break;
      await $.stmt((await $.mcall((await $.mv((await $.v(C, "ChBoxFilial")), "Items")), "Add", [(await $.mv((await $.mcall((await $.mv((await $.v(C, "DataModDailyOper")), "ODS_FILIAL")), "fieldbyname", ["name"])), "AsString"))])));
      { const $t7 = await $.iset((await $.mv((await $.v(C, "ChBoxFilial")), "Checked")), [L0["i"]], true); if ($t7 !== undefined) { await $.mset((await $.v(C, "ChBoxFilial")), "Checked", $t7); } }
      await $.mset((await $.v(C, "ChBoxSelectAll")), "Checked", true);
      await $.mcall((await $.mv((await $.v(C, "DataModDailyOper")), "ODS_FILIAL")), "Next", []);
      await $.tick();
    }
  }
  await $.mset((await $.v(C, "DTPickerPayDate")), "Date", (await $.mv((await $.mcall((await $.mv((await $.v(C, "DataModDailyOper")), "odstime")), "fieldbyname", ["tek_dat"])), "AsDateTime")));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFormDailyOper", "BtnOKClick", async function BtnOKClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "valutastr": '', "tarix": 0};
  await $.fixArgs(L0, ["sender"]);
  await $.stmt($.call(C, "filialyaz", []));
  if ($.truthy($.eq((await $.mv((await $.v(C, "ComboBox1")), "ItemIndex")), 0))) {
    {
      const $t8 = (await $.mv((await $.v(C, "DataModDailyOper")), "ODS_CMACTIVE"));
      await $.stmt($.wcall([$t8], "Close", [], C));
      await $.wset([$t8], "tarix", (await $.wcall([$t8], "TRUNC", [(await $.mv((await $.wv([$t8], "DTPickerPayDate", C, false)), "Date"))], C)), { get: async () => L0["tarix"], set: async (v) => { L0["tarix"] = v; }, local: true });
      await $.stmt((await $.wcall([$t8], "SetVariable", ["v_PayDate", (await $.wv([$t8], "tarix", { get: async () => L0["tarix"], set: async (v) => { L0["tarix"] = v; }, local: true }, false))], C)));
      await $.stmt((await $.wcall([$t8], "SetVariable", ["k_givendate", (await $.wv([$t8], "tarix", { get: async () => L0["tarix"], set: async (v) => { L0["tarix"] = v; }, local: true }, false))], C)));
      await $.stmt((await $.wcall([$t8], "SetVariable", ["h_date", (await $.wv([$t8], "tarix", { get: async () => L0["tarix"], set: async (v) => { L0["tarix"] = v; }, local: true }, false))], C)));
      { const $t9 = await $.iset((await $.wv([$t8], "SQL", C, false)), [20], $.add($.add(" and f.name in (", (await $.wv([$t8], "filialStr", C, false))), ") ")); if ($t9 !== undefined) { await $.wset([$t8], "SQL", $t9, C); } }
      { const $t10 = await $.iset((await $.wv([$t8], "SQL", C, false)), [21], ""); if ($t10 !== undefined) { await $.wset([$t8], "SQL", $t10, C); } }
      await $.stmt($.wcall([$t8], "Open", [], C));
    }
  } else {
    {
      const $t11 = (await $.mv((await $.v(C, "DataModDailyOper")), "ODS_CMACTIVE"));
      await $.wset([$t11], "valutaStr", (await $.mv((await $.wv([$t11], "ComboBox1", C, false)), "Text")), { get: async () => L0["valutastr"], set: async (v) => { L0["valutastr"] = v; }, local: true });
      await $.stmt($.wcall([$t11], "close", [], C));
      await $.wset([$t11], "tarix", (await $.wcall([$t11], "TRUNC", [(await $.mv((await $.wv([$t11], "DTPickerPayDate", C, false)), "Date"))], C)), { get: async () => L0["tarix"], set: async (v) => { L0["tarix"] = v; }, local: true });
      await $.stmt((await $.wcall([$t11], "SetVariable", ["v_PayDate", (await $.wv([$t11], "tarix", { get: async () => L0["tarix"], set: async (v) => { L0["tarix"] = v; }, local: true }, false))], C)));
      await $.stmt((await $.wcall([$t11], "SetVariable", ["k_givendate", (await $.wv([$t11], "tarix", { get: async () => L0["tarix"], set: async (v) => { L0["tarix"] = v; }, local: true }, false))], C)));
      await $.stmt((await $.wcall([$t11], "SetVariable", ["h_date", (await $.wv([$t11], "tarix", { get: async () => L0["tarix"], set: async (v) => { L0["tarix"] = v; }, local: true }, false))], C)));
      { const $t12 = await $.iset((await $.wv([$t11], "SQL", C, false)), [20], $.add($.add(" and f.name in (", (await $.wv([$t11], "filialStr", C, false))), ") ")); if ($t12 !== undefined) { await $.wset([$t11], "SQL", $t12, C); } }
      { const $t13 = await $.iset((await $.wv([$t11], "SQL", C, false)), [21], $.add($.add(" and j.val_name='", (await $.wv([$t11], "valutaStr", { get: async () => L0["valutastr"], set: async (v) => { L0["valutastr"] = v; }, local: true }, false))), "' ")); if ($t13 !== undefined) { await $.wset([$t11], "SQL", $t13, C); } }
      await $.stmt($.wcall([$t11], "Open", [], C));
    }
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFormDailyOper", "BtnExcelClick", async function BtnExcelClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mset((await $.v(C, "BtnExcel")), "Cursor", (await $.v(C, "crSQLWait")));
  await $.mcall((await $.v(C, "Application")), "ProcessMessages", []);
  await $.mcall((await $.v(C, "BtnOK")), "Click", []);
  {
    const $t14 = (await $.wobj(C, "ExcelExporter"));
    if ($.truthy($.not((await $.wv([$t14], "Connected", C, false))))) {
      await $.stmt($.wcall([$t14], "Connect", [], C));
    }
    await $.stmt((await $.wcall([$t14], "ExportDataset", [(await $.mv((await $.wv([$t14], "DataModDailyOper", C, false)), "ODS_CMACTIVE")), "Customers", (await $.wv([$t14], "true", C, false))], C)));
    await $.stmt($.wcall([$t14], "Disconnect", [], C));
  }
  await $.mset((await $.v(C, "BtnExcel")), "Cursor", (await $.v(C, "crDefault")));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFormDailyOper", "ChBoxSelectAllClick", async function ChBoxSelectAllClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "i": 0};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.eq((await $.mv((await $.v(C, "ChBoxSelectAll")), "Checked")), true))) {
    { const $t15 = $.sub((await $.mv((await $.mv((await $.v(C, "ChBoxFilial")), "Items")), "Count")), 1);
      L0["i"] = 0;
      let $t16 = true;
      for (;;) {
        if (!$t16) { L0["i"] = $.succ(L0["i"], 1); }
        $t16 = false;
        if (!($.ord(L0["i"]) <= $.ord($t15))) break;
        { const $t17 = await $.iset((await $.mv((await $.v(C, "ChBoxFilial")), "Checked")), [L0["i"]], true); if ($t17 !== undefined) { await $.mset((await $.v(C, "ChBoxFilial")), "Checked", $t17); } }
        await $.tick();
      }
    }
  } else {
    { const $t18 = $.sub((await $.mv((await $.mv((await $.v(C, "ChBoxFilial")), "Items")), "Count")), 1);
      L0["i"] = 0;
      let $t19 = true;
      for (;;) {
        if (!$t19) { L0["i"] = $.succ(L0["i"], 1); }
        $t19 = false;
        if (!($.ord(L0["i"]) <= $.ord($t18))) break;
        { const $t20 = await $.iset((await $.mv((await $.v(C, "ChBoxFilial")), "Checked")), [L0["i"]], false); if ($t20 !== undefined) { await $.mset((await $.v(C, "ChBoxFilial")), "Checked", $t20); } }
        await $.tick();
      }
    }
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFormDailyOper", "checkvalutaClick", async function checkvalutaClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFormDailyOper", "Button1Click", async function Button1Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "i": 0};
  await $.fixArgs(L0, ["sender"]);
  await $.mset((await $.v(C, "ComboBox1")), "ItemIndex", 0);
  await $.mset((await $.v(C, "DTPickerPayDate")), "Date", (await $.mv((await $.mcall((await $.mv((await $.v(C, "DataModDailyOper")), "odstime")), "fieldbyname", ["tek_dat"])), "AsDateTime")));
  { const $t21 = $.sub((await $.mv((await $.mv((await $.v(C, "DataModDailyOper")), "ODS_FILIAL")), "RecordCount")), 1);
    L0["i"] = 0;
    let $t22 = true;
    for (;;) {
      if (!$t22) { L0["i"] = $.succ(L0["i"], 1); }
      $t22 = false;
      if (!($.ord(L0["i"]) <= $.ord($t21))) break;
      { const $t23 = await $.iset((await $.mv((await $.v(C, "ChBoxFilial")), "Checked")), [L0["i"]], true); if ($t23 !== undefined) { await $.mset((await $.v(C, "ChBoxFilial")), "Checked", $t23); } }
      await $.mset((await $.v(C, "ChBoxSelectAll")), "Checked", true);
      await $.tick();
    }
  }
  await $.mcall((await $.v(C, "FormDailyOper")), "close", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFormDailyOper", "excelehtiyatClick", async function excelehtiyatClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "tarix": 0, "valutastr": ''};
  await $.fixArgs(L0, ["sender"]);
  await $.stmt($.call(C, "filialyaz", []));
  if ($.truthy($.eq((await $.mv((await $.v(C, "ComboBox1")), "ItemIndex")), 0))) {
    {
      const $t24 = (await $.mv((await $.v(C, "DataModDailyOper")), "ODS_CMACTIV_EHTIYAT"));
      await $.stmt($.wcall([$t24], "Close", [], C));
      await $.wset([$t24], "tarix", (await $.wcall([$t24], "TRUNC", [(await $.mv((await $.wv([$t24], "DTPickerPayDate", C, false)), "Date"))], C)), { get: async () => L0["tarix"], set: async (v) => { L0["tarix"] = v; }, local: true });
      await $.stmt((await $.wcall([$t24], "SetVariable", ["v_PayDate", (await $.wv([$t24], "tarix", { get: async () => L0["tarix"], set: async (v) => { L0["tarix"] = v; }, local: true }, false))], C)));
      await $.stmt((await $.wcall([$t24], "SetVariable", ["k_givendate", (await $.wv([$t24], "tarix", { get: async () => L0["tarix"], set: async (v) => { L0["tarix"] = v; }, local: true }, false))], C)));
      await $.stmt((await $.wcall([$t24], "SetVariable", ["h_date", (await $.wv([$t24], "tarix", { get: async () => L0["tarix"], set: async (v) => { L0["tarix"] = v; }, local: true }, false))], C)));
      { const $t25 = await $.iset((await $.wv([$t24], "SQL", C, false)), [20], $.add($.add(" and f.name in (", (await $.wv([$t24], "filialStr", C, false))), ") ")); if ($t25 !== undefined) { await $.wset([$t24], "SQL", $t25, C); } }
      await $.stmt($.wcall([$t24], "Open", [], C));
    }
  } else {
    {
      const $t26 = (await $.mv((await $.v(C, "DataModDailyOper")), "ODS_CMACTIV_EHTIYAT"));
      await $.wset([$t26], "valutaStr", (await $.mv((await $.wv([$t26], "ComboBox1", C, false)), "Text")), { get: async () => L0["valutastr"], set: async (v) => { L0["valutastr"] = v; }, local: true });
      await $.stmt($.wcall([$t26], "close", [], C));
      await $.wset([$t26], "tarix", (await $.wcall([$t26], "TRUNC", [(await $.mv((await $.wv([$t26], "DTPickerPayDate", C, false)), "Date"))], C)), { get: async () => L0["tarix"], set: async (v) => { L0["tarix"] = v; }, local: true });
      await $.stmt((await $.wcall([$t26], "SetVariable", ["v_PayDate", (await $.wv([$t26], "tarix", { get: async () => L0["tarix"], set: async (v) => { L0["tarix"] = v; }, local: true }, false))], C)));
      await $.stmt((await $.wcall([$t26], "SetVariable", ["k_givendate", (await $.wv([$t26], "tarix", { get: async () => L0["tarix"], set: async (v) => { L0["tarix"] = v; }, local: true }, false))], C)));
      await $.stmt((await $.wcall([$t26], "SetVariable", ["h_date", (await $.wv([$t26], "tarix", { get: async () => L0["tarix"], set: async (v) => { L0["tarix"] = v; }, local: true }, false))], C)));
      { const $t27 = await $.iset((await $.wv([$t26], "SQL", C, false)), [20], $.add($.add(" and f.name in (", (await $.wv([$t26], "filialStr", C, false))), ") ")); if ($t27 !== undefined) { await $.wset([$t26], "SQL", $t27, C); } }
      { const $t28 = await $.iset((await $.wv([$t26], "SQL", C, false)), [21], $.add($.add(" and j.val_name='", (await $.wv([$t26], "valutaStr", { get: async () => L0["valutastr"], set: async (v) => { L0["valutastr"] = v; }, local: true }, false))), "' ")); if ($t28 !== undefined) { await $.wset([$t26], "SQL", $t28, C); } }
      await $.stmt($.wcall([$t26], "Open", [], C));
    }
  }
  {
    const $t29 = (await $.wobj(C, "ExcelExporter"));
    if ($.truthy($.not((await $.wv([$t29], "Connected", C, false))))) {
      await $.stmt($.wcall([$t29], "Connect", [], C));
    }
    await $.stmt((await $.wcall([$t29], "ExportDataset", [(await $.mv((await $.wv([$t29], "DataModDailyOper", C, false)), "ODS_CMACTIV_EHTIYAT")), "Customers", (await $.wv([$t29], "true", C, false))], C)));
    await $.stmt($.wcall([$t29], "Disconnect", [], C));
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.setInitialization(async function __initialization(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: undefined};
  await $.set(C, "FormDailyOper", (await $.mcall((await $.v(C, "TFormDailyOper")), "Create", [(await $.v(C, "CommonApplication"))])));
  return L0.result;
});
  return U;
}
