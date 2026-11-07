// Generated from DailyImpl.pas by pas2js — do not edit by hand; regenerate instead.
/* eslint-disable */
// @ts-nocheck

export default function define($) {
  const U = $.unit("DailyImpl", ["Windows", "Messages", "SysUtils", "Classes", "Graphics", "Controls", "Forms", "Dialogs", "ExtCtrls", "StdCtrls", "CheckLst", "Evanescence", "Db", "OracleData", "ComCtrls", "Buttons", "Oracle", "CMExcelExport", "CommonDecls", "sbsystem", "sboapiDataModuleImpl", "ComObj"]);
  const C = [U];
  U.defClass("TFrmDaily", "TForm", {"panel1": {"name": "Panel1", "type": "TPanel"}, "panel2": {"name": "Panel2", "type": "TPanel"}, "label1": {"name": "Label1", "type": "TLabel"}, "datetimepicker1": {"name": "DateTimePicker1", "type": "TDateTimePicker"}, "filialdataset": {"name": "FilialDataSet", "type": "TOracleDataSet"}, "filialdatasetid": {"name": "FilialDataSetID", "type": "TFloatField"}, "filialdatasetname": {"name": "FilialDataSetNAME", "type": "TWideStringField"}, "srcfilial": {"name": "srcFilial", "type": "TDataSource"}, "groupbox1": {"name": "GroupBox1", "type": "TGroupBox"}, "lookfilgrp": {"name": "LookFilGrp", "type": "TEvanescence"}, "checkbox2": {"name": "CheckBox2", "type": "TCheckBox"}, "groupbox2": {"name": "GroupBox2", "type": "TGroupBox"}, "lookvalgrp": {"name": "LookVAlGrp", "type": "TEvanescence"}, "checkbox1": {"name": "CheckBox1", "type": "TCheckBox"}, "oracledataset1": {"name": "OracleDataSet1", "type": "TOracleDataSet"}, "datasource1": {"name": "DataSource1", "type": "TDataSource"}, "sysdate": {"name": "sysdate", "type": "TOracleDataSet"}, "speedbutton2": {"name": "SpeedButton2", "type": "TSpeedButton"}, "speedbutton1": {"name": "SpeedButton1", "type": "TSpeedButton"}, "main": {"name": "Main", "type": "TOracleDataSet"}, "oraclepackage1": {"name": "OraclePackage1", "type": "TOraclePackage"}, "mainname": {"name": "MainNAME", "type": "TWideStringField"}, "mainborcalan": {"name": "MainBORCALAN", "type": "TWideStringField"}, "mainacc_no": {"name": "MainACC_NO", "type": "TWideStringField"}, "mainnumberofcredit": {"name": "MainNUMBEROFCREDIT", "type": "TWideStringField"}, "mainval_name": {"name": "MainVAL_NAME", "type": "TWideStringField"}, "mainpay": {"name": "MainPAY", "type": "TWideStringField"}, "mainpayek": {"name": "MainPAYEK", "type": "TFloatField"}, "mainreate": {"name": "MainREATE", "type": "TWideStringField"}, "maingunver_faiz": {"name": "MainGUNVER_FAIZ", "type": "TWideStringField"}, "mainrest": {"name": "MainREST", "type": "TFloatField"}, "mainguns_qaliqek": {"name": "MainGUNS_QALIQEK", "type": "TFloatField"}, "mainpurposeofcredit": {"name": "MainPURPOSEOFCREDIT", "type": "TWideStringField"}, "mainkred_meb": {"name": "MainKRED_MEB", "type": "TWideStringField"}, "mainkred_meb_ek": {"name": "MainKRED_MEB_EK", "type": "TFloatField"}, "mainc": {"name": "MainC", "type": "TFloatField"}, "rest": {"name": "Rest", "type": "TOracleDataSet"}, "mainmonth": {"name": "MainMONTH", "type": "TFloatField"}}, {});
  U.init(async () => {
    U.var_("FrmDaily", null, "TFrmDaily");
    U.var_("Exl", null, "Variant");
    U.var_("Sheet", null, "Variant");
  });
  U.func("InitPlugin", async function InitPlugin(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"s": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["s"]);
  await $.mcall((await $.v(C, "FrmDaily")), "ShowModal", []);
  return L0.result;
}, {"params": ["s"], "kind": "procedure", "ptypes": ["String"]});
  U.method("TFrmDaily", "FormCanResize", async function FormCanResize(Self, p0, p1, p2, p3) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "newwidth": $.asRef(p1), "newheight": $.asRef(p2), "resize": $.asRef(p3), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await L0["resize"].set(false);
  return L0.result;
}, {"params": ["Sender", "NewWidth", "NewHeight", "Resize"], "kind": "procedure", "ptypes": ["TObject", "Integer", "Integer", "Boolean"]});
  U.method("TFrmDaily", "CheckBox2Click", async function CheckBox2Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.eq((await $.mv((await $.v(C, "CheckBox2")), "Checked")), true))) {
    await $.mcall((await $.v(C, "LookFilGrp")), "CheckAll", []);
  } else {
    await $.mcall((await $.v(C, "LookFilGrp")), "UncheckAll", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFrmDaily", "CheckBox1Click", async function CheckBox1Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.eq((await $.mv((await $.v(C, "CheckBox1")), "Checked")), true))) {
    await $.mcall((await $.v(C, "LookVAlGrp")), "CheckAll", []);
  } else {
    await $.mcall((await $.v(C, "LookVAlGrp")), "UncheckAll", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFrmDaily", "FormCreate", async function FormCreate(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "i": 0};
  await $.fixArgs(L0, ["sender"]);
  await $.mcall((await $.v(C, "sysdate")), "open", []);
  await $.mcall((await $.v(C, "FilialDataSet")), "open", []);
  await $.mcall((await $.v(C, "OracleDataSet1")), "open", []);
  await $.mset((await $.v(C, "DateTimePicker1")), "DateTime", (await $.mv((await $.mcall((await $.v(C, "sysdate")), "fieldbyname", ["tek_dat"])), "asdatetime")));
  { const $t1 = $.sub((await $.v(C, "ComponentCount")), 1);
    L0["i"] = 0;
    let $t2 = true;
    for (;;) {
      if (!$t2) { L0["i"] = $.succ(L0["i"], 1); }
      $t2 = false;
      if (!($.ord(L0["i"]) <= $.ord($t1))) break;
      if ($.truthy($.eq((await $.mv((await $.idx((await $.v(C, "Components")), [L0["i"]])), "Tag")), 3112))) {
        await $.mcall((await $.idx((await $.v(C, "Components")), [L0["i"]])), "Open", []);
        await $.mcall((await $.idx((await $.v(C, "Components")), [L0["i"]])), "CheckAll", []);
      }
      await $.tick();
    }
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFrmDaily", "SpeedButton2Click", async function SpeedButton2Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.stmt($.call(C, "close", []));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFrmDaily", "SpeedButton1Click", async function SpeedButton1Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "restsstr": '', "chpaystr": '', "additionalparams": '', "filterstr": '', "checkstr": '', "sysdat": 0, "s": 0, "l": 0, "cell": 0, "r": 0, "i": 0, "j": 0, "k": 0, "m": 0, "w": 0, "tt": 0, "dat": 0, "dd": 0, "t_val": 0, "bash": ''};
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
  } catch ($t3) {
    $.rethrowControl($t3);
    $.handled($t3);
  }
  return L1.result;
});
  L0["destroysheet"] = $.fn(async function DestroySheet() {
  const L1 = {result: undefined};
  try {
    await $.stmt((await $.call(C, "Finalize", [(await $.v(C, "Sheet"))])));
    await $.stmt((await $.call(C, "Finalize", [(await $.v(C, "Exl"))])));
  } catch ($t4) {
    $.rethrowControl($t4);
    $.handled($t4);
  }
  return L1.result;
});
  L0["showsheet"] = $.fn(async function ShowSheet() {
  const L1 = {result: undefined};
  try {
    await $.mset((await $.v(C, "Exl")), "Visible", true);
  } catch ($t5) {
    $.rethrowControl($t5);
    $.handled($t5);
    await $.stmt($.callv(L0["destroysheet"], []));
  }
  return L1.result;
});
  L0["sysdat"] = (await $.call(C, "integer", [(await $.call(C, "trunc", [(await $.mv((await $.v(C, "DateTimePicker1")), "DateTime"))]))]));
  if ($.truthy(($.ne((await $.mv((await $.mv((await $.v(C, "LookFilGrp")), "GetCheckedKeyList")), "Count")), (await $.mv((await $.mv((await $.v(C, "LookFilGrp")), "Items")), "Count")))))) {
    L0["additionalparams"] = $.add($.add($.add($.add(L0["additionalparams"], " and p.branchid in("), (await $.mv((await $.mv((await $.v(C, "LookFilGrp")), "GetCheckedKeyList")), "CommaText"))), ")"), "\r\n");
  }
  if ($.truthy(($.ne((await $.mv((await $.mv((await $.v(C, "LookVAlGrp")), "GetCheckedKeyList")), "Count")), (await $.mv((await $.mv((await $.v(C, "LookVAlGrp")), "Items")), "Count")))))) {
    L0["additionalparams"] = $.add($.add($.add($.add(L0["additionalparams"], " and p.currency in("), (await $.mv((await $.mv((await $.v(C, "LookVAlGrp")), "GetCheckedKeyList")), "CommaText"))), ")"), "\r\n");
  }
  {
    const $t6 = (await $.wobj(C, "Main"));
    if ($.truthy((await $.wv([$t6], "Active", C, false)))) {
      await $.stmt($.wcall([$t6], "CloseAll", [], C));
    }
    await $.stmt((await $.wcall([$t6], "SetVariable", ["sysdat", (await $.wv([$t6], "sysdat", { get: async () => L0["sysdat"], set: async (v) => { L0["sysdat"] = v; }, local: true }, false))], C)));
    if ($.truthy($.ne((await $.wv([$t6], "ADDITIONALPARAMS", { get: async () => L0["additionalparams"], set: async (v) => { L0["additionalparams"] = v; }, local: true }, false)), ""))) {
      { const $t7 = await $.iset((await $.wv([$t6], "SQL", C, false)), [17], (await $.wv([$t6], "ADDITIONALPARAMS", { get: async () => L0["additionalparams"], set: async (v) => { L0["additionalparams"] = v; }, local: true }, false))); if ($t7 !== undefined) { await $.wset([$t6], "SQL", $t7, C); } }
    } else {
      { const $t8 = await $.iset((await $.wv([$t6], "SQL", C, false)), [17], ""); if ($t8 !== undefined) { await $.wset([$t6], "SQL", $t8, C); } }
    }
    await $.stmt($.wcall([$t6], "open", [], C));
  }
  {
    const $t9 = (await $.wobj(C, "Rest"));
    if ($.truthy((await $.wv([$t9], "Active", C, false)))) {
      await $.stmt($.wcall([$t9], "CloseAll", [], C));
    }
    await $.stmt((await $.wcall([$t9], "SetVariable", ["dat", (await $.wv([$t9], "sysdat", { get: async () => L0["sysdat"], set: async (v) => { L0["sysdat"] = v; }, local: true }, false))], C)));
    if ($.truthy($.ne((await $.wv([$t9], "ADDITIONALPARAMS", { get: async () => L0["additionalparams"], set: async (v) => { L0["additionalparams"] = v; }, local: true }, false)), ""))) {
      { const $t10 = await $.iset((await $.wv([$t9], "SQL", C, false)), [10], (await $.wv([$t9], "ADDITIONALPARAMS", { get: async () => L0["additionalparams"], set: async (v) => { L0["additionalparams"] = v; }, local: true }, false))); if ($t10 !== undefined) { await $.wset([$t9], "SQL", $t10, C); } }
    } else {
      { const $t11 = await $.iset((await $.wv([$t9], "SQL", C, false)), [10], ""); if ($t11 !== undefined) { await $.wset([$t9], "SQL", $t11, C); } }
    }
    await $.stmt($.wcall([$t9], "open", [], C));
  }
  await $.stmt($.callv(L0["createsheet"], []));
  try {
    await $.mset((await $.idx((await $.mv((await $.v(C, "Sheet")), "Range")), ["A1:A60000"])), "ColumnWidth", 10);
    await $.mset((await $.idx((await $.mv((await $.v(C, "Sheet")), "Range")), ["B1:B60000"])), "ColumnWidth", 15);
    await $.mset((await $.idx((await $.mv((await $.v(C, "Sheet")), "Range")), ["C1:C60000"])), "ColumnWidth", 19);
    await $.mset((await $.idx((await $.mv((await $.v(C, "Sheet")), "Range")), ["D1:D60000"])), "ColumnWidth", 19);
    await $.mset((await $.idx((await $.mv((await $.v(C, "Sheet")), "Range")), ["E1:E60000"])), "ColumnWidth", 20);
    await $.mset((await $.idx((await $.mv((await $.v(C, "Sheet")), "Range")), ["F1:F60000"])), "ColumnWidth", 19);
    await $.mset((await $.idx((await $.mv((await $.v(C, "Sheet")), "Range")), ["G1:G60000"])), "ColumnWidth", 35);
    await $.mset((await $.idx((await $.mv((await $.v(C, "Sheet")), "Range")), ["P1:P60000"])), "ColumnWidth", 35);
    { const $t12 = await $.iset((await $.mv((await $.v(C, "Sheet")), "Cells")), [2, 5], $.add((await $.call(C, "datetostr", [L0["sysdat"]])), "-inə kredit əməliyyatları barədə məlumat")); if ($t12 !== undefined) { await $.mset((await $.v(C, "Sheet")), "Cells", $t12); } }
    await $.mset((await $.mv((await $.idx((await $.mv((await $.v(C, "Sheet")), "Cells")), [2, 5])), "Font")), "Name", "Tahoma");
    await $.mset((await $.mv((await $.idx((await $.mv((await $.v(C, "Sheet")), "Cells")), [2, 5])), "Font")), "Bold", true);
    await $.mset((await $.mv((await $.idx((await $.mv((await $.v(C, "Sheet")), "Cells")), [2, 5])), "Font")), "Color", (await $.v(C, "clBlue")));
    await $.mset((await $.mv((await $.idx((await $.mv((await $.v(C, "Sheet")), "Cells")), [2, 5])), "Font")), "size", 22);
    L0["k"] = 7;
    L0["i"] = 0;
    { const $t13 = await $.iset((await $.mv((await $.v(C, "sheet")), "Cells")), [$.add(L0["i"], 3), 15], " Manatla"); if ($t13 !== undefined) { await $.mset((await $.v(C, "sheet")), "Cells", $t13); } }
    await $.mset((await $.mv((await $.idx((await $.mv((await $.v(C, "Sheet")), "Cells")), [$.add(L0["i"], 3), 15])), "Font")), "Name", "Tahoma");
    await $.mset((await $.mv((await $.idx((await $.mv((await $.v(C, "Sheet")), "Cells")), [$.add(L0["i"], 3), 15])), "Font")), "Bold", true);
    await $.mset((await $.mv((await $.idx((await $.mv((await $.v(C, "Sheet")), "Cells")), [$.add(L0["i"], 3), 15])), "Font")), "Color", (await $.v(C, "clred")));
    { const $t14 = await $.iset((await $.mv((await $.v(C, "Sheet")), "Cells")), [$.add(L0["i"], 4), 15], " Manat"); if ($t14 !== undefined) { await $.mset((await $.v(C, "Sheet")), "Cells", $t14); } }
    await $.mset((await $.mv((await $.idx((await $.mv((await $.v(C, "Sheet")), "Cells")), [$.add(L0["i"], 4), 15])), "Font")), "Name", "Azl Sans Serif");
    await $.mset((await $.mv((await $.idx((await $.mv((await $.v(C, "Sheet")), "Cells")), [$.add(L0["i"], 4), 15])), "Font")), "Bold", true);
    await $.mset((await $.mv((await $.idx((await $.mv((await $.v(C, "Sheet")), "Cells")), [$.add(L0["i"], 4), 15])), "Font")), "Color", (await $.v(C, "clred")));
    { const $t15 = await $.iset((await $.mv((await $.v(C, "Sheet")), "Cells")), [$.add(L0["i"], 5), 15], " USD"); if ($t15 !== undefined) { await $.mset((await $.v(C, "Sheet")), "Cells", $t15); } }
    await $.mset((await $.mv((await $.idx((await $.mv((await $.v(C, "Sheet")), "Cells")), [$.add(L0["i"], 5), 15])), "Font")), "Name", "Azl Sans Serif");
    await $.mset((await $.mv((await $.idx((await $.mv((await $.v(C, "Sheet")), "Cells")), [$.add(L0["i"], 5), 15])), "Font")), "Bold", true);
    await $.mset((await $.mv((await $.idx((await $.mv((await $.v(C, "Sheet")), "Cells")), [$.add(L0["i"], 5), 15])), "Font")), "Color", (await $.v(C, "clred")));
    { const $t16 = await $.iset((await $.mv((await $.v(C, "Sheet")), "Cells")), [$.add(L0["i"], 6), 15], " EUR"); if ($t16 !== undefined) { await $.mset((await $.v(C, "Sheet")), "Cells", $t16); } }
    await $.mset((await $.mv((await $.idx((await $.mv((await $.v(C, "Sheet")), "Cells")), [$.add(L0["i"], 6), 15])), "Font")), "Name", "Azl Sans Serif");
    await $.mset((await $.mv((await $.idx((await $.mv((await $.v(C, "Sheet")), "Cells")), [$.add(L0["i"], 6), 15])), "Font")), "Bold", true);
    await $.mset((await $.mv((await $.idx((await $.mv((await $.v(C, "Sheet")), "Cells")), [$.add(L0["i"], 6), 15])), "Font")), "Color", (await $.v(C, "clred")));
    { const $t17 = await $.iset((await $.mv((await $.v(C, "sheet")), "Cells")), [$.add(L0["i"], 3), 16], (await $.mv((await $.mcall((await $.v(C, "Rest")), "FieldByName", ["rest"])), "asfloat"))); if ($t17 !== undefined) { await $.mset((await $.v(C, "sheet")), "Cells", $t17); } }
    await $.mset((await $.mv((await $.idx((await $.mv((await $.v(C, "Sheet")), "Cells")), [$.add(L0["i"], 3), 16])), "Font")), "Name", "Azl Sans Serif");
    await $.mset((await $.mv((await $.idx((await $.mv((await $.v(C, "Sheet")), "Cells")), [$.add(L0["i"], 3), 16])), "Font")), "Bold", true);
    await $.mset((await $.mv((await $.idx((await $.mv((await $.v(C, "Sheet")), "Cells")), [$.add(L0["i"], 3), 16])), "Font")), "Color", (await $.v(C, "clred")));
    { const $t18 = await $.iset((await $.mv((await $.v(C, "Sheet")), "Cells")), [$.add(L0["i"], 4), 16], (await $.mv((await $.mcall((await $.v(C, "Rest")), "FieldByName", ["AZN"])), "asfloat"))); if ($t18 !== undefined) { await $.mset((await $.v(C, "Sheet")), "Cells", $t18); } }
    await $.mset((await $.mv((await $.idx((await $.mv((await $.v(C, "Sheet")), "Cells")), [$.add(L0["i"], 4), 16])), "Font")), "Name", "Azl Sans Serif");
    await $.mset((await $.mv((await $.idx((await $.mv((await $.v(C, "Sheet")), "Cells")), [$.add(L0["i"], 4), 16])), "Font")), "Bold", true);
    { const $t19 = await $.iset((await $.mv((await $.v(C, "Sheet")), "Cells")), [$.add(L0["i"], 5), 16], (await $.mv((await $.mcall((await $.v(C, "Rest")), "FieldByName", ["USD"])), "asfloat"))); if ($t19 !== undefined) { await $.mset((await $.v(C, "Sheet")), "Cells", $t19); } }
    await $.mset((await $.mv((await $.idx((await $.mv((await $.v(C, "Sheet")), "Cells")), [$.add(L0["i"], 5), 16])), "Font")), "Name", "Azl Sans Serif");
    await $.mset((await $.mv((await $.idx((await $.mv((await $.v(C, "Sheet")), "Cells")), [$.add(L0["i"], 5), 16])), "Font")), "Bold", true);
    { const $t20 = await $.iset((await $.mv((await $.v(C, "Sheet")), "Cells")), [$.add(L0["i"], 6), 16], (await $.mv((await $.mcall((await $.v(C, "Rest")), "FieldByName", ["eur"])), "asfloat"))); if ($t20 !== undefined) { await $.mset((await $.v(C, "Sheet")), "Cells", $t20); } }
    await $.mset((await $.mv((await $.idx((await $.mv((await $.v(C, "Sheet")), "Cells")), [$.add(L0["i"], 6), 16])), "Font")), "Name", "Azl Sans Serif");
    await $.mset((await $.mv((await $.idx((await $.mv((await $.v(C, "Sheet")), "Cells")), [$.add(L0["i"], 6), 16])), "Font")), "Bold", true);
    { const $t21 = await $.iset((await $.mv((await $.v(C, "Sheet")), "Cells")), [$.add($.add(L0["i"], L0["k"]), 1), 1], "Sıra №"); if ($t21 !== undefined) { await $.mset((await $.v(C, "Sheet")), "Cells", $t21); } }
    await $.mset((await $.mv((await $.idx((await $.mv((await $.v(C, "Sheet")), "Cells")), [$.add($.add(L0["i"], L0["k"]), 1), 1])), "Font")), "Name", "Azl Sans Serif");
    await $.mset((await $.mv((await $.idx((await $.mv((await $.v(C, "Sheet")), "Cells")), [$.add($.add(L0["i"], L0["k"]), 1), 1])), "Font")), "Bold", true);
    await $.mset((await $.mv((await $.idx((await $.mv((await $.v(C, "Sheet")), "Cells")), [$.add($.add(L0["i"], L0["k"]), 1), 1])), "Font")), "Color", (await $.v(C, "clBlue")));
    await $.mset((await $.idx((await $.mv((await $.v(C, "Sheet")), "Cells")), [$.add($.add(L0["i"], L0["k"]), 1), 2])), "Value", "Borcalanın adı");
    await $.mset((await $.mv((await $.idx((await $.mv((await $.v(C, "Sheet")), "Cells")), [$.add($.add(L0["i"], L0["k"]), 1), 2])), "Font")), "Name", "Azl Sans Serif");
    await $.mset((await $.mv((await $.idx((await $.mv((await $.v(C, "Sheet")), "Cells")), [$.add($.add(L0["i"], L0["k"]), 1), 2])), "Font")), "Bold", true);
    await $.mset((await $.mv((await $.idx((await $.mv((await $.v(C, "Sheet")), "Cells")), [$.add($.add(L0["i"], L0["k"]), 1), 2])), "Font")), "Color", (await $.v(C, "clBlue")));
    await $.mset((await $.idx((await $.mv((await $.v(C, "Sheet")), "Cells")), [$.add($.add(L0["i"], L0["k"]), 1), 3])), "Value", "Filialın adı");
    await $.mset((await $.mv((await $.idx((await $.mv((await $.v(C, "Sheet")), "Cells")), [$.add($.add(L0["i"], L0["k"]), 1), 3])), "Font")), "Name", "Azl Sans Serif");
    await $.mset((await $.mv((await $.idx((await $.mv((await $.v(C, "Sheet")), "Cells")), [$.add($.add(L0["i"], L0["k"]), 1), 3])), "Font")), "Bold", true);
    await $.mset((await $.mv((await $.idx((await $.mv((await $.v(C, "Sheet")), "Cells")), [$.add($.add(L0["i"], L0["k"]), 1), 3])), "Font")), "Color", (await $.v(C, "clBlue")));
    { const $t22 = await $.iset((await $.mv((await $.v(C, "Sheet")), "Cells")), [$.add($.add(L0["i"], L0["k"]), 1), 4], " Ssuda hesabının №"); if ($t22 !== undefined) { await $.mset((await $.v(C, "Sheet")), "Cells", $t22); } }
    await $.mset((await $.mv((await $.idx((await $.mv((await $.v(C, "Sheet")), "Cells")), [$.add($.add(L0["i"], L0["k"]), 1), 4])), "Font")), "Name", "Azl Sans Serif");
    await $.mset((await $.mv((await $.idx((await $.mv((await $.v(C, "Sheet")), "Cells")), [$.add($.add(L0["i"], L0["k"]), 1), 4])), "Font")), "Bold", true);
    await $.mset((await $.mv((await $.idx((await $.mv((await $.v(C, "Sheet")), "Cells")), [$.add($.add(L0["i"], L0["k"]), 1), 4])), "Font")), "Color", (await $.v(C, "clBlue")));
    { const $t23 = await $.iset((await $.mv((await $.v(C, "Sheet")), "Cells")), [$.add($.add(L0["i"], L0["k"]), 1), 5], "Müqavilənin №"); if ($t23 !== undefined) { await $.mset((await $.v(C, "Sheet")), "Cells", $t23); } }
    await $.mset((await $.mv((await $.idx((await $.mv((await $.v(C, "Sheet")), "Cells")), [$.add($.add(L0["i"], L0["k"]), 1), 5])), "Font")), "Name", "Azl Sans Serif");
    await $.mset((await $.mv((await $.idx((await $.mv((await $.v(C, "Sheet")), "Cells")), [$.add($.add(L0["i"], L0["k"]), 1), 5])), "Font")), "Bold", true);
    await $.mset((await $.mv((await $.idx((await $.mv((await $.v(C, "Sheet")), "Cells")), [$.add($.add(L0["i"], L0["k"]), 1), 5])), "Font")), "Color", (await $.v(C, "clBlue")));
    { const $t24 = await $.iset((await $.mv((await $.v(C, "Sheet")), "Cells")), [$.add($.add(L0["i"], L0["k"]), 1), 6], "Kreditin valyutası "); if ($t24 !== undefined) { await $.mset((await $.v(C, "Sheet")), "Cells", $t24); } }
    await $.mset((await $.mv((await $.idx((await $.mv((await $.v(C, "Sheet")), "Cells")), [$.add($.add(L0["i"], L0["k"]), 1), 6])), "Font")), "Name", "Azl Sans Serif");
    await $.mset((await $.mv((await $.idx((await $.mv((await $.v(C, "Sheet")), "Cells")), [$.add($.add(L0["i"], L0["k"]), 1), 6])), "Font")), "Bold", true);
    await $.mset((await $.mv((await $.idx((await $.mv((await $.v(C, "Sheet")), "Cells")), [$.add($.add(L0["i"], L0["k"]), 1), 6])), "Font")), "Color", (await $.v(C, "clBlue")));
    { const $t25 = await $.iset((await $.mv((await $.v(C, "Sheet")), "Cells")), [$.add($.add(L0["i"], L0["k"]), 1), 7], "GƏÖ kreditin valyutasında məbləği"); if ($t25 !== undefined) { await $.mset((await $.v(C, "Sheet")), "Cells", $t25); } }
    await $.mset((await $.mv((await $.idx((await $.mv((await $.v(C, "Sheet")), "Cells")), [$.add($.add(L0["i"], L0["k"]), 1), 7])), "Font")), "Name", "Azl Sans Serif");
    await $.mset((await $.mv((await $.idx((await $.mv((await $.v(C, "Sheet")), "Cells")), [$.add($.add(L0["i"], L0["k"]), 1), 7])), "Font")), "Bold", true);
    await $.mset((await $.mv((await $.idx((await $.mv((await $.v(C, "Sheet")), "Cells")), [$.add($.add(L0["i"], L0["k"]), 1), 7])), "Font")), "Color", (await $.v(C, "clRed")));
    { const $t26 = await $.iset((await $.mv((await $.v(C, "Sheet")), "Cells")), [$.add($.add(L0["i"], L0["k"]), 1), 8], "GƏÖ Manat ekvivalentinde məbləği"); if ($t26 !== undefined) { await $.mset((await $.v(C, "Sheet")), "Cells", $t26); } }
    await $.mset((await $.mv((await $.idx((await $.mv((await $.v(C, "Sheet")), "Cells")), [$.add($.add(L0["i"], L0["k"]), 1), 8])), "Font")), "Name", "Azl Sans Serif");
    await $.mset((await $.mv((await $.idx((await $.mv((await $.v(C, "Sheet")), "Cells")), [$.add($.add(L0["i"], L0["k"]), 1), 8])), "Font")), "Bold", true);
    await $.mset((await $.mv((await $.idx((await $.mv((await $.v(C, "Sheet")), "Cells")), [$.add($.add(L0["i"], L0["k"]), 1), 8])), "Font")), "Color", (await $.v(C, "clRed")));
    { const $t27 = await $.iset((await $.mv((await $.v(C, "Sheet")), "Cells")), [$.add($.add(L0["i"], L0["k"]), 1), 9], "GƏÖ İllik % dərəcəsi"); if ($t27 !== undefined) { await $.mset((await $.v(C, "Sheet")), "Cells", $t27); } }
    await $.mset((await $.mv((await $.idx((await $.mv((await $.v(C, "Sheet")), "Cells")), [$.add($.add(L0["i"], L0["k"]), 1), 9])), "Font")), "Name", "Azl Sans Serif");
    await $.mset((await $.mv((await $.idx((await $.mv((await $.v(C, "Sheet")), "Cells")), [$.add($.add(L0["i"], L0["k"]), 1), 9])), "Font")), "Bold", true);
    await $.mset((await $.mv((await $.idx((await $.mv((await $.v(C, "Sheet")), "Cells")), [$.add($.add(L0["i"], L0["k"]), 1), 9])), "Font")), "Color", (await $.v(C, "clRed")));
    { const $t28 = await $.iset((await $.mv((await $.v(C, "Sheet")), "Cells")), [$.add($.add(L0["i"], L0["k"]), 1), 10], "GƏB kreditin valyutasında məbləği"); if ($t28 !== undefined) { await $.mset((await $.v(C, "Sheet")), "Cells", $t28); } }
    await $.mset((await $.mv((await $.idx((await $.mv((await $.v(C, "Sheet")), "Cells")), [$.add($.add(L0["i"], L0["k"]), 1), 10])), "Font")), "Name", "Azl Sans Serif");
    await $.mset((await $.mv((await $.idx((await $.mv((await $.v(C, "Sheet")), "Cells")), [$.add($.add(L0["i"], L0["k"]), 1), 10])), "Font")), "Bold", true);
    await $.mset((await $.mv((await $.idx((await $.mv((await $.v(C, "Sheet")), "Cells")), [$.add($.add(L0["i"], L0["k"]), 1), 10])), "Font")), "Color", (await $.v(C, "clGreen")));
    { const $t29 = await $.iset((await $.mv((await $.v(C, "Sheet")), "Cells")), [$.add($.add(L0["i"], L0["k"]), 1), 11], "GƏB Manat ekvivalentinde məbləği"); if ($t29 !== undefined) { await $.mset((await $.v(C, "Sheet")), "Cells", $t29); } }
    await $.mset((await $.mv((await $.idx((await $.mv((await $.v(C, "Sheet")), "Cells")), [$.add($.add(L0["i"], L0["k"]), 1), 11])), "Font")), "Name", "Azl Sans Serif");
    await $.mset((await $.mv((await $.idx((await $.mv((await $.v(C, "Sheet")), "Cells")), [$.add($.add(L0["i"], L0["k"]), 1), 11])), "Font")), "Bold", true);
    await $.mset((await $.mv((await $.idx((await $.mv((await $.v(C, "Sheet")), "Cells")), [$.add($.add(L0["i"], L0["k"]), 1), 11])), "Font")), "Color", (await $.v(C, "clGreen")));
    { const $t30 = await $.iset((await $.mv((await $.v(C, "Sheet")), "Cells")), [$.add($.add(L0["i"], L0["k"]), 1), 12], "GƏB Kreditim müddəti ayla"); if ($t30 !== undefined) { await $.mset((await $.v(C, "Sheet")), "Cells", $t30); } }
    await $.mset((await $.mv((await $.idx((await $.mv((await $.v(C, "Sheet")), "Cells")), [$.add($.add(L0["i"], L0["k"]), 1), 12])), "Font")), "Name", "Azl Sans Serif");
    await $.mset((await $.mv((await $.idx((await $.mv((await $.v(C, "Sheet")), "Cells")), [$.add($.add(L0["i"], L0["k"]), 1), 12])), "Font")), "Bold", true);
    await $.mset((await $.mv((await $.idx((await $.mv((await $.v(C, "Sheet")), "Cells")), [$.add($.add(L0["i"], L0["k"]), 1), 12])), "Font")), "Color", (await $.v(C, "clGreen")));
    { const $t31 = await $.iset((await $.mv((await $.v(C, "Sheet")), "Cells")), [$.add($.add(L0["i"], L0["k"]), 1), 13], "GƏB İllik % dərcəsi"); if ($t31 !== undefined) { await $.mset((await $.v(C, "Sheet")), "Cells", $t31); } }
    await $.mset((await $.mv((await $.idx((await $.mv((await $.v(C, "Sheet")), "Cells")), [$.add($.add(L0["i"], L0["k"]), 1), 13])), "Font")), "Name", "Azl Sans Serif");
    await $.mset((await $.mv((await $.idx((await $.mv((await $.v(C, "Sheet")), "Cells")), [$.add($.add(L0["i"], L0["k"]), 1), 13])), "Font")), "Bold", true);
    await $.mset((await $.mv((await $.idx((await $.mv((await $.v(C, "Sheet")), "Cells")), [$.add($.add(L0["i"], L0["k"]), 1), 13])), "Font")), "Color", (await $.v(C, "clGreen")));
    { const $t32 = await $.iset((await $.mv((await $.v(C, "Sheet")), "Cells")), [$.add($.add(L0["i"], L0["k"]), 1), 14], "GS Kreditin valyutasında məbləği "); if ($t32 !== undefined) { await $.mset((await $.v(C, "Sheet")), "Cells", $t32); } }
    await $.mset((await $.mv((await $.idx((await $.mv((await $.v(C, "Sheet")), "Cells")), [$.add($.add(L0["i"], L0["k"]), 1), 14])), "Font")), "Name", "Azl Sans Serif");
    await $.mset((await $.mv((await $.idx((await $.mv((await $.v(C, "Sheet")), "Cells")), [$.add($.add(L0["i"], L0["k"]), 1), 14])), "Font")), "Bold", true);
    await $.mset((await $.mv((await $.idx((await $.mv((await $.v(C, "Sheet")), "Cells")), [$.add($.add(L0["i"], L0["k"]), 1), 14])), "Font")), "Color", (await $.v(C, "clBlue")));
    { const $t33 = await $.iset((await $.mv((await $.v(C, "Sheet")), "Cells")), [$.add($.add(L0["i"], L0["k"]), 1), 15], "GS Manat ekvivalentinde məbləği "); if ($t33 !== undefined) { await $.mset((await $.v(C, "Sheet")), "Cells", $t33); } }
    await $.mset((await $.mv((await $.idx((await $.mv((await $.v(C, "Sheet")), "Cells")), [$.add($.add(L0["i"], L0["k"]), 1), 15])), "Font")), "Name", "Azl Sans Serif");
    await $.mset((await $.mv((await $.idx((await $.mv((await $.v(C, "Sheet")), "Cells")), [$.add($.add(L0["i"], L0["k"]), 1), 15])), "Font")), "Bold", true);
    await $.mset((await $.mv((await $.idx((await $.mv((await $.v(C, "Sheet")), "Cells")), [$.add($.add(L0["i"], L0["k"]), 1), 15])), "Font")), "Color", (await $.v(C, "clBlue")));
    { const $t34 = await $.iset((await $.mv((await $.v(C, "Sheet")), "Cells")), [$.add($.add(L0["i"], L0["k"]), 1), 16], " Kredit məhsulunun adı"); if ($t34 !== undefined) { await $.mset((await $.v(C, "Sheet")), "Cells", $t34); } }
    await $.mset((await $.mv((await $.idx((await $.mv((await $.v(C, "Sheet")), "Cells")), [$.add($.add(L0["i"], L0["k"]), 1), 16])), "Font")), "Name", "Azl Sans Serif");
    await $.mset((await $.mv((await $.idx((await $.mv((await $.v(C, "Sheet")), "Cells")), [$.add($.add(L0["i"], L0["k"]), 1), 16])), "Font")), "Bold", true);
    await $.mset((await $.mv((await $.idx((await $.mv((await $.v(C, "Sheet")), "Cells")), [$.add($.add(L0["i"], L0["k"]), 1), 16])), "Font")), "Color", (await $.v(C, "clBlue")));
    await $.stmt($.callv(L0["showsheet"], []));
    L0["r"] = 0;
    { const $t35 = (await $.mv((await $.v(C, "main")), "RecordCount"));
      L0["i"] = 1;
      let $t36 = true;
      for (;;) {
        if (!$t36) { L0["i"] = $.succ(L0["i"], 1); }
        $t36 = false;
        if (!($.ord(L0["i"]) <= $.ord($t35))) break;
        L0["r"] = $.add(L0["r"], 1);
        await $.mset((await $.mv((await $.idx((await $.mv((await $.v(C, "Sheet")), "Cells")), [$.add($.add(L0["i"], L0["k"]), 1), 1])), "Font")), "Name", "Azl Sans Serif");
        await $.mset((await $.mv((await $.idx((await $.mv((await $.v(C, "Sheet")), "Cells")), [$.add($.add(L0["i"], L0["k"]), 1), 1])), "Font")), "Bold", true);
        { const $t37 = await $.iset((await $.mv((await $.v(C, "Sheet")), "Cells")), [$.add($.add(L0["i"], L0["k"]), 1), 1], L0["r"]); if ($t37 !== undefined) { await $.mset((await $.v(C, "Sheet")), "Cells", $t37); } }
        await $.mset((await $.mv((await $.idx((await $.mv((await $.v(C, "Sheet")), "Cells")), [$.add($.add(L0["i"], L0["k"]), 1), 2])), "Font")), "Name", "Azl Sans Serif");
        await $.mset((await $.mv((await $.idx((await $.mv((await $.v(C, "Sheet")), "Cells")), [$.add($.add(L0["i"], L0["k"]), 1), 2])), "Font")), "Bold", true);
        { const $t38 = await $.iset((await $.mv((await $.v(C, "Sheet")), "Cells")), [$.add($.add(L0["i"], L0["k"]), 1), 2], (await $.mv((await $.mcall((await $.v(C, "main")), "FieldByName", ["borcalan"])), "AsString"))); if ($t38 !== undefined) { await $.mset((await $.v(C, "Sheet")), "Cells", $t38); } }
        await $.mset((await $.mv((await $.idx((await $.mv((await $.v(C, "Sheet")), "Cells")), [$.add($.add(L0["i"], L0["k"]), 1), 3])), "Font")), "Name", "Azl Sans Serif");
        await $.mset((await $.mv((await $.idx((await $.mv((await $.v(C, "Sheet")), "Cells")), [$.add($.add(L0["i"], L0["k"]), 1), 3])), "Font")), "Bold", true);
        { const $t39 = await $.iset((await $.mv((await $.v(C, "Sheet")), "Cells")), [$.add($.add(L0["i"], L0["k"]), 1), 3], (await $.mv((await $.mcall((await $.v(C, "main")), "FieldByName", ["name"])), "AsString"))); if ($t39 !== undefined) { await $.mset((await $.v(C, "Sheet")), "Cells", $t39); } }
        await $.mset((await $.mv((await $.idx((await $.mv((await $.v(C, "Sheet")), "Cells")), [$.add($.add(L0["i"], L0["k"]), 1), 4])), "Font")), "Name", "Azl Sans Serif");
        await $.mset((await $.mv((await $.idx((await $.mv((await $.v(C, "Sheet")), "Cells")), [$.add($.add(L0["i"], L0["k"]), 1), 4])), "Font")), "Bold", true);
        { const $t40 = await $.iset((await $.mv((await $.v(C, "Sheet")), "Cells")), [$.add($.add(L0["i"], L0["k"]), 1), 4], (await $.mv((await $.mcall((await $.v(C, "main")), "FieldByName", ["acc_no"])), "AsString"))); if ($t40 !== undefined) { await $.mset((await $.v(C, "Sheet")), "Cells", $t40); } }
        await $.mset((await $.mv((await $.idx((await $.mv((await $.v(C, "Sheet")), "Cells")), [$.add($.add(L0["i"], L0["k"]), 1), 5])), "Font")), "Name", "Azl Sans Serif");
        await $.mset((await $.mv((await $.idx((await $.mv((await $.v(C, "Sheet")), "Cells")), [$.add($.add(L0["i"], L0["k"]), 1), 5])), "Font")), "Bold", true);
        { const $t41 = await $.iset((await $.mv((await $.v(C, "Sheet")), "Cells")), [$.add($.add(L0["i"], L0["k"]), 1), 5], (await $.mv((await $.mcall((await $.v(C, "main")), "FieldByName", ["numberofcredit"])), "AsString"))); if ($t41 !== undefined) { await $.mset((await $.v(C, "Sheet")), "Cells", $t41); } }
        await $.mset((await $.mv((await $.idx((await $.mv((await $.v(C, "Sheet")), "Cells")), [$.add($.add(L0["i"], L0["k"]), 1), 6])), "Font")), "Name", "Azl Sans Serif");
        await $.mset((await $.mv((await $.idx((await $.mv((await $.v(C, "Sheet")), "Cells")), [$.add($.add(L0["i"], L0["k"]), 1), 6])), "Font")), "Bold", true);
        { const $t42 = await $.iset((await $.mv((await $.v(C, "Sheet")), "Cells")), [$.add($.add(L0["i"], L0["k"]), 1), 6], (await $.mv((await $.mcall((await $.v(C, "main")), "FieldByName", ["VAL_NAME"])), "AsString"))); if ($t42 !== undefined) { await $.mset((await $.v(C, "Sheet")), "Cells", $t42); } }
        await $.mset((await $.mv((await $.idx((await $.mv((await $.v(C, "Sheet")), "Cells")), [$.add($.add(L0["i"], L0["k"]), 1), 7])), "Font")), "Name", "Azl Sans Serif");
        await $.mset((await $.mv((await $.idx((await $.mv((await $.v(C, "Sheet")), "Cells")), [$.add($.add(L0["i"], L0["k"]), 1), 7])), "Font")), "Bold", true);
        { const $t43 = await $.iset((await $.mv((await $.v(C, "Sheet")), "Cells")), [$.add($.add(L0["i"], L0["k"]), 1), 7], (await $.mv((await $.mcall((await $.v(C, "main")), "FieldByName", ["pay"])), "AsString"))); if ($t43 !== undefined) { await $.mset((await $.v(C, "Sheet")), "Cells", $t43); } }
        await $.mset((await $.mv((await $.idx((await $.mv((await $.v(C, "Sheet")), "Cells")), [$.add($.add(L0["i"], L0["k"]), 1), 8])), "Font")), "Name", "Azl Sans Serif");
        await $.mset((await $.mv((await $.idx((await $.mv((await $.v(C, "Sheet")), "Cells")), [$.add($.add(L0["i"], L0["k"]), 1), 8])), "Font")), "Bold", true);
        { const $t44 = await $.iset((await $.mv((await $.v(C, "Sheet")), "Cells")), [$.add($.add(L0["i"], L0["k"]), 1), 8], (await $.mv((await $.mcall((await $.v(C, "main")), "FieldByName", ["payek"])), "AsString"))); if ($t44 !== undefined) { await $.mset((await $.v(C, "Sheet")), "Cells", $t44); } }
        await $.mset((await $.mv((await $.idx((await $.mv((await $.v(C, "Sheet")), "Cells")), [$.add($.add(L0["i"], L0["k"]), 1), 9])), "Font")), "Name", "Azl Sans Serif");
        await $.mset((await $.mv((await $.idx((await $.mv((await $.v(C, "Sheet")), "Cells")), [$.add($.add(L0["i"], L0["k"]), 1), 9])), "Font")), "Bold", true);
        { const $t45 = await $.iset((await $.mv((await $.v(C, "Sheet")), "Cells")), [$.add($.add(L0["i"], L0["k"]), 1), 9], (await $.mv((await $.mcall((await $.v(C, "main")), "FieldByName", ["reate"])), "AsString"))); if ($t45 !== undefined) { await $.mset((await $.v(C, "Sheet")), "Cells", $t45); } }
        await $.mset((await $.mv((await $.idx((await $.mv((await $.v(C, "Sheet")), "Cells")), [$.add($.add(L0["i"], L0["k"]), 1), 10])), "Font")), "Name", "Azl Sans Serif");
        await $.mset((await $.mv((await $.idx((await $.mv((await $.v(C, "Sheet")), "Cells")), [$.add($.add(L0["i"], L0["k"]), 1), 10])), "Font")), "Bold", true);
        { const $t46 = await $.iset((await $.mv((await $.v(C, "Sheet")), "Cells")), [$.add($.add(L0["i"], L0["k"]), 1), 10], (await $.mv((await $.mcall((await $.v(C, "main")), "FieldByName", ["KRED_MEB"])), "asfloat"))); if ($t46 !== undefined) { await $.mset((await $.v(C, "Sheet")), "Cells", $t46); } }
        await $.mset((await $.mv((await $.idx((await $.mv((await $.v(C, "Sheet")), "Cells")), [$.add($.add(L0["i"], L0["k"]), 1), 11])), "Font")), "Name", "Azl Sans Serif");
        await $.mset((await $.mv((await $.idx((await $.mv((await $.v(C, "Sheet")), "Cells")), [$.add($.add(L0["i"], L0["k"]), 1), 11])), "Font")), "Bold", true);
        { const $t47 = await $.iset((await $.mv((await $.v(C, "Sheet")), "Cells")), [$.add($.add(L0["i"], L0["k"]), 1), 11], (await $.mv((await $.mcall((await $.v(C, "main")), "FieldByName", ["KRED_MEB_EK"])), "asfloat"))); if ($t47 !== undefined) { await $.mset((await $.v(C, "Sheet")), "Cells", $t47); } }
        await $.mset((await $.mv((await $.idx((await $.mv((await $.v(C, "Sheet")), "Cells")), [$.add($.add(L0["i"], L0["k"]), 1), 12])), "Font")), "Name", "Azl Sans Serif");
        await $.mset((await $.mv((await $.idx((await $.mv((await $.v(C, "Sheet")), "Cells")), [$.add($.add(L0["i"], L0["k"]), 1), 12])), "Font")), "Bold", true);
        { const $t48 = await $.iset((await $.mv((await $.v(C, "Sheet")), "Cells")), [$.add($.add(L0["i"], L0["k"]), 1), 12], (await $.mv((await $.mcall((await $.v(C, "main")), "FieldByName", ["month"])), "asinteger"))); if ($t48 !== undefined) { await $.mset((await $.v(C, "Sheet")), "Cells", $t48); } }
        await $.mset((await $.mv((await $.idx((await $.mv((await $.v(C, "Sheet")), "Cells")), [$.add($.add(L0["i"], L0["k"]), 1), 13])), "Font")), "Name", "Azl Sans Serif");
        await $.mset((await $.mv((await $.idx((await $.mv((await $.v(C, "Sheet")), "Cells")), [$.add($.add(L0["i"], L0["k"]), 1), 13])), "Font")), "Bold", true);
        { const $t49 = await $.iset((await $.mv((await $.v(C, "Sheet")), "Cells")), [$.add($.add(L0["i"], L0["k"]), 1), 13], (await $.mv((await $.mcall((await $.v(C, "main")), "FieldByName", ["GUNVER_FAIZ"])), "AsString"))); if ($t49 !== undefined) { await $.mset((await $.v(C, "Sheet")), "Cells", $t49); } }
        await $.mset((await $.mv((await $.idx((await $.mv((await $.v(C, "Sheet")), "Cells")), [$.add($.add(L0["i"], L0["k"]), 1), 14])), "Font")), "Name", "Azl Sans Serif");
        await $.mset((await $.mv((await $.idx((await $.mv((await $.v(C, "Sheet")), "Cells")), [$.add($.add(L0["i"], L0["k"]), 1), 14])), "Font")), "Bold", true);
        { const $t50 = await $.iset((await $.mv((await $.v(C, "Sheet")), "Cells")), [$.add($.add(L0["i"], L0["k"]), 1), 14], (await $.mv((await $.mcall((await $.v(C, "main")), "FieldByName", ["rest"])), "asfloat"))); if ($t50 !== undefined) { await $.mset((await $.v(C, "Sheet")), "Cells", $t50); } }
        await $.mset((await $.mv((await $.idx((await $.mv((await $.v(C, "Sheet")), "Cells")), [$.add($.add(L0["i"], L0["k"]), 1), 15])), "Font")), "Name", "Azl Sans Serif");
        await $.mset((await $.mv((await $.idx((await $.mv((await $.v(C, "Sheet")), "Cells")), [$.add($.add(L0["i"], L0["k"]), 1), 15])), "Font")), "Bold", true);
        { const $t51 = await $.iset((await $.mv((await $.v(C, "Sheet")), "Cells")), [$.add($.add(L0["i"], L0["k"]), 1), 15], (await $.mv((await $.mcall((await $.v(C, "main")), "FieldByName", ["GUNS_QALIQEK"])), "asfloat"))); if ($t51 !== undefined) { await $.mset((await $.v(C, "Sheet")), "Cells", $t51); } }
        await $.mset((await $.mv((await $.idx((await $.mv((await $.v(C, "Sheet")), "Cells")), [$.add($.add(L0["i"], L0["k"]), 1), 16])), "Font")), "Name", "Azl Sans Serif");
        await $.mset((await $.mv((await $.idx((await $.mv((await $.v(C, "Sheet")), "Cells")), [$.add($.add(L0["i"], L0["k"]), 1), 16])), "Font")), "Bold", true);
        { const $t52 = await $.iset((await $.mv((await $.v(C, "Sheet")), "Cells")), [$.add($.add(L0["i"], L0["k"]), 1), 16], (await $.mv((await $.mcall((await $.v(C, "main")), "FieldByName", ["PURPOSEOFCREDIT"])), "AsString"))); if ($t52 !== undefined) { await $.mset((await $.v(C, "Sheet")), "Cells", $t52); } }
        await $.mcall((await $.idx((await $.mv((await $.v(C, "Exl")), "Range")), [$.add($.add($.add("B", (await $.call(C, "Inttostr", [$.add($.add(L0["i"], L0["k"]), 1)]))), ":D"), (await $.call(C, "Inttostr", [$.add($.add(L0["i"], L0["k"]), 1)])))])), "Select", []);
        await $.mset((await $.mv((await $.mv((await $.v(C, "Exl")), "Selection")), "Interior")), "ColorIndex", 8);
        await $.mcall((await $.v(C, "main")), "Next", []);
        await $.tick();
      }
    }
    L0["m"] = (await $.mv((await $.v(C, "main")), "RecordCount"));
    await $.mset((await $.mv((await $.idx((await $.mv((await $.v(C, "Sheet")), "Cells")), [$.add($.add(L0["i"], L0["k"]), 2), 15])), "Font")), "Name", "Azl Sans Serif");
    await $.mset((await $.mv((await $.idx((await $.mv((await $.v(C, "Sheet")), "Cells")), [$.add($.add(L0["i"], L0["k"]), 2), 15])), "Font")), "Bold", true);
    { const $t53 = await $.iset((await $.mv((await $.v(C, "Sheet")), "Cells")), [$.add($.add(L0["i"], L0["k"]), 2), 15], "Kredit əməliyyatları üzrə fərq"); if ($t53 !== undefined) { await $.mset((await $.v(C, "Sheet")), "Cells", $t53); } }
    await $.mset((await $.mv((await $.idx((await $.mv((await $.v(C, "Sheet")), "Cells")), [$.add($.add(L0["i"], L0["k"]), 2), 15])), "Font")), "Color", (await $.v(C, "clred")));
    await $.mset((await $.mv((await $.idx((await $.mv((await $.v(C, "Sheet")), "Cells")), [$.add($.add(L0["i"], L0["k"]), 2), 16])), "Font")), "Name", "Azl Sans Serif");
    await $.mset((await $.mv((await $.idx((await $.mv((await $.v(C, "Sheet")), "Cells")), [$.add($.add(L0["i"], L0["k"]), 2), 16])), "Font")), "Bold", true);
    { const $t54 = await $.iset((await $.mv((await $.v(C, "Sheet")), "Cells")), [$.add($.add(L0["i"], L0["k"]), 2), 16], (await $.mv((await $.mcall((await $.v(C, "rest")), "FieldByName", ["ferq"])), "AsString"))); if ($t54 !== undefined) { await $.mset((await $.v(C, "Sheet")), "Cells", $t54); } }
    await $.mset((await $.mv((await $.idx((await $.mv((await $.v(C, "Sheet")), "Cells")), [$.add($.add(L0["i"], L0["k"]), 2), 16])), "Font")), "Color", (await $.v(C, "clBlue")));
    await $.mset((await $.mv((await $.idx((await $.mv((await $.v(C, "Sheet")), "Cells")), [$.add($.add(L0["i"], L0["k"]), 3), 15])), "Font")), "Name", "Azl Sans Serif");
    await $.mset((await $.mv((await $.idx((await $.mv((await $.v(C, "Sheet")), "Cells")), [$.add($.add(L0["i"], L0["k"]), 3), 15])), "Font")), "Bold", true);
    { const $t55 = await $.iset((await $.mv((await $.v(C, "Sheet")), "Cells")), [$.add($.add(L0["i"], L0["k"]), 3), 15], "Günün sonuna qalıq"); if ($t55 !== undefined) { await $.mset((await $.v(C, "Sheet")), "Cells", $t55); } }
    await $.mset((await $.mv((await $.idx((await $.mv((await $.v(C, "Sheet")), "Cells")), [$.add($.add(L0["i"], L0["k"]), 3), 15])), "Font")), "Color", (await $.v(C, "clred")));
    await $.mset((await $.mv((await $.idx((await $.mv((await $.v(C, "Sheet")), "Cells")), [$.add($.add(L0["i"], L0["k"]), 3), 16])), "Font")), "Name", "Azl Sans Serif");
    await $.mset((await $.mv((await $.idx((await $.mv((await $.v(C, "Sheet")), "Cells")), [$.add($.add(L0["i"], L0["k"]), 3), 16])), "Font")), "Bold", true);
    { const $t56 = await $.iset((await $.mv((await $.v(C, "Sheet")), "Cells")), [$.add($.add(L0["i"], L0["k"]), 3), 16], (await $.mv((await $.mcall((await $.v(C, "rest")), "FieldByName", ["gununsonuna"])), "AsString"))); if ($t56 !== undefined) { await $.mset((await $.v(C, "Sheet")), "Cells", $t56); } }
    await $.mset((await $.mv((await $.idx((await $.mv((await $.v(C, "Sheet")), "Cells")), [$.add($.add(L0["i"], L0["k"]), 3), 16])), "Font")), "Color", (await $.v(C, "clBlue")));
    L0["bash"] = (await $.call(C, "inttostr", [$.add(L0["k"], 1)]));
    await $.mcall((await $.idx((await $.mv((await $.v(C, "Exl")), "Range")), [$.add($.add($.add("A", L0["bash"]), ":P"), (await $.call(C, "inttostr", [$.add($.add(L0["m"], L0["k"]), 1)])))])), "select", []);
    await $.mset((await $.mv((await $.idx((await $.mv((await $.v(C, "Sheet")), "Range")), [$.add($.add($.add("A", L0["bash"]), ":P"), (await $.call(C, "inttostr", [$.add($.add(L0["m"], L0["k"]), 1)])))])), "Borders")), "Color", (await $.v(C, "clBlack")));
  } finally {
    await $.mcall((await $.idx((await $.mv((await $.v(C, "Exl")), "Range")), ["A1:A1"])), "Select", []);
    await $.mset((await $.v(C, "Screen")), "Cursor", (await $.v(C, "crDefault")));
    await $.stmt($.callv(L0["destroysheet"], []));
    await $.mcall((await $.v(C, "main")), "EnableControls", []);
  }
  await $.mcall((await $.v(C, "main")), "close", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.setInitialization(async function __initialization(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: undefined};
  await $.set(C, "FrmDaily", (await $.mcall((await $.v(C, "TFrmDaily")), "Create", [(await $.v(C, "CommonApplication"))])));
  return L0.result;
});
  return U;
}
