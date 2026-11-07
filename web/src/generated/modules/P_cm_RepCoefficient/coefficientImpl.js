// Generated from coefficientImpl.pas by pas2js — do not edit by hand; regenerate instead.
/* eslint-disable */
// @ts-nocheck

export default function define($) {
  const U = $.unit("coefficientImpl", ["Windows", "Messages", "SysUtils", "Classes", "Graphics", "Controls", "Forms", "Dialogs", "DBCtrls", "StdCtrls", "CheckLst", "Evanescence", "ComCtrls", "Buttons", "ExtCtrls", "Db", "CMExcelExport", "OracleData", "Oracle", "ComObj", "Gauges", "sbsystem", "sboapiDataModuleImpl", "SBTranslateProc", "CommonDecls"]);
  const C = [U];
  U.defClass("TFrmCoefficient", "TForm", {"panel1": {"name": "Panel1", "type": "TPanel"}, "speedbutton1": {"name": "SpeedButton1", "type": "TSpeedButton"}, "speedbutton2": {"name": "SpeedButton2", "type": "TSpeedButton"}, "groupbox6": {"name": "GroupBox6", "type": "TGroupBox"}, "cbavalute": {"name": "CBaValute", "type": "TCheckBox"}, "datetimepicker1": {"name": "DateTimePicker1", "type": "TDateTimePicker"}, "groupbox1": {"name": "GroupBox1", "type": "TGroupBox"}, "lookusrgrp": {"name": "LookUsrGrp", "type": "TEvanescence"}, "checkbox2": {"name": "CheckBox2", "type": "TCheckBox"}, "groupbox2": {"name": "GroupBox2", "type": "TGroupBox"}, "cbpersons": {"name": "CBPersons", "type": "TCheckBox"}, "lcbpersons": {"name": "LCBPersons", "type": "TDBLookupComboBox"}, "groupbox3": {"name": "GroupBox3", "type": "TGroupBox"}, "lookpersoneltype": {"name": "LookPersonelType", "type": "TEvanescence"}, "checkbox1": {"name": "CheckBox1", "type": "TCheckBox"}, "persontypes": {"name": "PersonTypes", "type": "TOracleDataSet"}, "datasrcpersontypes": {"name": "DataSrcPersonTypes", "type": "TDataSource"}, "excelexport": {"name": "ExcelExport", "type": "TCMExcelExport"}, "srcpersoneltype": {"name": "srcPersonelType", "type": "TDataSource"}, "personeltypedataset": {"name": "PersonelTypeDataSet", "type": "TOracleDataSet"}, "filialdataset": {"name": "FilialDataSet", "type": "TOracleDataSet"}, "srcfilial": {"name": "srcFilial", "type": "TDataSource"}, "sysdate": {"name": "sysdate", "type": "TOracleDataSet"}, "sysdatetek_dat": {"name": "sysdateTEK_DAT", "type": "TDateTimeField"}, "filialdatasetid": {"name": "FilialDataSetID", "type": "TFloatField"}, "filialdatasetname": {"name": "FilialDataSetNAME", "type": "TwidestringField"}, "active": {"name": "active", "type": "TOracleDataSet"}, "oraclepackage1": {"name": "OraclePackage1", "type": "TOraclePackage"}, "speedbutton3": {"name": "SpeedButton3", "type": "TSpeedButton"}, "activename": {"name": "activeNAME", "type": "TwidestringField"}, "activeportfel": {"name": "activePORTFEL", "type": "TFloatField"}, "activeodenilmelifaiz": {"name": "activeODENILMELIFAIZ", "type": "TFloatField"}, "activeodenilmish": {"name": "activeODENILMISH", "type": "TFloatField"}, "activegec": {"name": "activeGEC", "type": "TFloatField"}, "activegf": {"name": "activeGF", "type": "TFloatField"}, "activef": {"name": "activeF", "type": "TFloatField"}, "main": {"name": "main", "type": "TOracleDataSet"}, "activegecfaizmeb": {"name": "activeGECFAIZMEB", "type": "TFloatField"}, "oracledataset1": {"name": "OracleDataSet1", "type": "TOracleDataSet"}, "widestringfield1": {"name": "WideStringField1", "type": "TWideStringField"}, "floatfield1": {"name": "FloatField1", "type": "TFloatField"}, "floatfield2": {"name": "FloatField2", "type": "TFloatField"}, "floatfield3": {"name": "FloatField3", "type": "TFloatField"}, "floatfield4": {"name": "FloatField4", "type": "TFloatField"}, "floatfield5": {"name": "FloatField5", "type": "TFloatField"}, "floatfield6": {"name": "FloatField6", "type": "TFloatField"}, "floatfield7": {"name": "FloatField7", "type": "TFloatField"}, "oracledataset2": {"name": "OracleDataSet2", "type": "TOracleDataSet"}, "widestringfield2": {"name": "WideStringField2", "type": "TWideStringField"}, "floatfield8": {"name": "FloatField8", "type": "TFloatField"}, "floatfield9": {"name": "FloatField9", "type": "TFloatField"}, "floatfield10": {"name": "FloatField10", "type": "TFloatField"}, "floatfield11": {"name": "FloatField11", "type": "TFloatField"}, "floatfield12": {"name": "FloatField12", "type": "TFloatField"}, "credit": {"name": "credit", "type": "TOracleDataSet"}, "gauge1": {"name": "Gauge1", "type": "TGauge"}, "mainname": {"name": "mainNAME", "type": "TWideStringField"}, "mainportfel": {"name": "mainPORTFEL", "type": "TFloatField"}, "mainodenilmeli": {"name": "mainODENILMELI", "type": "TFloatField"}, "mainodenilmish": {"name": "mainODENILMISH", "type": "TFloatField"}, "mainartiq": {"name": "mainARTIQ", "type": "TFloatField"}, "maingeces": {"name": "mainGECES", "type": "TFloatField"}, "maingec": {"name": "mainGEC", "type": "TFloatField"}}, {});
  U.init(async () => {
    U.const("rsErrorUsrGrp", "Ən azı bir istifadəçi qrupu seçilməlidir!");
    U.const("rsErrorPersonaltype", "Ən azı bir müştəri tipi seçilməlidir!");
    U.var_("FrmCoefficient", null, "TFrmCoefficient");
    U.var_("Exl", null, "Variant");
    U.var_("Sheet", null, "Variant");
  });
  U.func("InitPlugin", async function InitPlugin(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"s": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["s"]);
  await $.mcall((await $.v(C, "FrmCoefficient")), "ShowModal", []);
  return L0.result;
}, {"params": ["s"], "kind": "procedure", "ptypes": ["String"]});
  U.method("TFrmCoefficient", "CheckBox2Click", async function CheckBox2Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.eq((await $.mv((await $.v(C, "CheckBox2")), "Checked")), true))) {
    await $.mcall((await $.v(C, "LookUsrGrp")), "CheckAll", []);
  } else {
    await $.mcall((await $.v(C, "LookUsrGrp")), "UncheckAll", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFrmCoefficient", "CheckBox1Click", async function CheckBox1Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.eq((await $.mv((await $.v(C, "CheckBox1")), "Checked")), true))) {
    await $.mcall((await $.v(C, "LookPersonelType")), "CheckAll", []);
  } else {
    await $.mcall((await $.v(C, "LookPersonelType")), "UncheckAll", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFrmCoefficient", "FormCreate", async function FormCreate(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "i": 0};
  await $.fixArgs(L0, ["sender"]);
  await $.mcall((await $.v(C, "PersonTypes")), "open", []);
  await $.mcall((await $.v(C, "FilialDataSet")), "open", []);
  await $.mcall((await $.v(C, "PersonelTypeDataSet")), "open", []);
  await $.mcall((await $.v(C, "sysdate")), "open", []);
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
  await $.stmt((await $.mcall((await $.v(C, "SBTranslateProc")), "TranslateAllCompForms", [Self, (await $.mv((await $.v(C, "sboapiDataModule")), "OrPack_SL"))])));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFrmCoefficient", "FormDestroy", async function FormDestroy(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mcall((await $.v(C, "PersonTypes")), "close", []);
  await $.mcall((await $.v(C, "FilialDataSet")), "close", []);
  await $.mcall((await $.v(C, "PersonelTypeDataSet")), "close", []);
  await $.mcall((await $.v(C, "sysdate")), "close", []);
  await $.mcall((await $.v(C, "active")), "close", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFrmCoefficient", "BuildFilterString", async function BuildFilterString(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: ''};
  L0["concatfilter"] = $.fn(async function ConcatFilter(p0, p1, p2, p3) {
  const L1 = {"s": $.asRef(p0), "prefix": $.copyArg(p1), "checked": $.copyArg(p2), "keyvalue": $.copyArg(p3), result: undefined, "temp": ''};
  await $.fixArgs(L1, ["prefix", "checked", "keyvalue"]);
  L1["csformat"] = "(%s=%s)";
  if ($.truthy(L1["checked"])) {
    L1["temp"] = (await $.call(C, "Format", [L1["csformat"], [L1["prefix"], L1["keyvalue"]]]));
    if ($.truthy($.eq((await L1["s"].get()), ""))) {
      await L1["s"].set(L1["temp"]);
    } else {
      await L1["s"].set($.add($.add((await L1["s"].get()), "and "), L1["temp"]));
    }
  }
  return L1.result;
});
  L0["result"] = "";
  await $.stmt((await $.callv(L0["concatfilter"], [$.ref(async () => L0["result"], async ($t3) => { L0["result"] = $t3; }), "p.PERSONALTYPE", (await $.mv((await $.v(C, "CBPersons")), "Checked")), (await $.mv((await $.v(C, "LCBPersons")), "KeyValue"))])));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.func("ErrorInCheck", async function ErrorInCheck(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"look": $.copyArg(p0), "errormsg": (p1 === undefined ? "" : p1), result: false};
  await $.fixArgs(L0, ["look", "errormsg"]);
  L0["result"] = true;
  if ($.truthy($.eq((await $.mv((await $.mv(L0["look"], "GetCheckedKeyList")), "Count")), 0))) {
    L0["result"] = false;
  }
  if ($.truthy((await $.and_(($.ne(L0["errormsg"], "")), async () => ($.not(L0["result"])))))) {
    await $.stmt((await $.call(C, "ShowMessage", [L0["errormsg"]])));
  }
  return L0.result;
}, {"params": ["Look", "ErrorMsg"], "kind": "function", "ptypes": ["TEvanescence", "String"]});
  U.func("CreateSheet", async function CreateSheet(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: undefined};
  try {
    await $.set(C, "Exl", (await $.call(C, "CreateOleObject", ["Excel.Application"])));
    await $.mcall((await $.mv((await $.v(C, "Exl")), "WorkBooks")), "add", []);
    await $.set(C, "Sheet", (await $.idx((await $.mv((await $.mv((await $.mv((await $.v(C, "Exl")), "Application")), "Worksheets")), "Item")), [1])));
  } catch ($t4) {
    $.rethrowControl($t4);
    $.handled($t4);
  }
  return L0.result;
}, {"params": [], "kind": "procedure", "ptypes": []});
  U.func("DestroySheet", async function DestroySheet(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: undefined};
  try {
    await $.stmt((await $.call(C, "Finalize", [(await $.v(C, "Sheet"))])));
    await $.stmt((await $.call(C, "Finalize", [(await $.v(C, "Exl"))])));
  } catch ($t5) {
    $.rethrowControl($t5);
    $.handled($t5);
  }
  return L0.result;
}, {"params": [], "kind": "procedure", "ptypes": []});
  U.func("ShowSheet", async function ShowSheet(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: undefined};
  try {
    await $.mset((await $.v(C, "Exl")), "Visible", true);
  } catch ($t6) {
    $.rethrowControl($t6);
    $.handled($t6);
    await $.stmt($.call(C, "DestroySheet", []));
  }
  return L0.result;
}, {"params": [], "kind": "procedure", "ptypes": []});
  U.method("TFrmCoefficient", "SpeedButton1Click", async function SpeedButton1Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "ss": 0, "i": 0, "dat": 0, "aa": 0, "s": 0, "l": 0, "cell": 0, "r": 0, "h": 0, "j": 0, "k": 0, "m": 0, "w": 0, "bash": '', "restsstr": '', "chpaystr": '', "additionalparams": '', "filterstr": '', "checkstr": ''};
  await $.fixArgs(L0, ["sender"]);
  L0["number_format_r"] = "#,##0.00%";
  L0["rscreditnumber"] = "%d - № li kredit : ";
  if ($.truthy((await $.mv((await $.v(C, "active")), "Active")))) {
    await $.mcall((await $.v(C, "active")), "close", []);
  }
  L0["dat"] = (await $.call(C, "integer", [(await $.call(C, "trunc", [(await $.mv((await $.v(C, "DateTimePicker1")), "DateTime"))]))]));
  L0["filterstr"] = "";
  L0["checkstr"] = "";
  L0["chpaystr"] = "";
  if ($.truthy((await $.and_(($.ne(L0["checkstr"], "")), async () => ($.ne(L0["filterstr"], "")))))) {
    L0["filterstr"] = $.add($.add(L0["filterstr"], " AND "), L0["checkstr"]);
  }
  if ($.truthy((await $.and_(($.ne(L0["checkstr"], "")), async () => ($.eq(L0["filterstr"], "")))))) {
    L0["filterstr"] = L0["checkstr"];
  }
  L0["filterstr"] = $.add(L0["filterstr"], L0["chpaystr"]);
  if ($.truthy($.ne(L0["filterstr"], ""))) {
    L0["additionalparams"] = $.add(" AND ", L0["filterstr"]);
  } else {
    L0["additionalparams"] = "";
  }
  if ($.truthy($.not((await $.call(C, "ErrorInCheck", [(await $.v(C, "LookUsrGrp")), (await $.v(C, "rsErrorUsrGrp"))]))))) {
    return L0.result;
  }
  if ($.truthy($.not((await $.call(C, "ErrorInCheck", [(await $.v(C, "LookPersonelType")), (await $.v(C, "rsErrorPersonaltype"))]))))) {
    return L0.result;
  }
  if ($.truthy(($.ne((await $.mv((await $.mv((await $.v(C, "LookUsrGrp")), "GetCheckedKeyList")), "Count")), (await $.mv((await $.mv((await $.v(C, "LookUsrGrp")), "Items")), "Count")))))) {
    L0["additionalparams"] = $.add($.add($.add($.add(L0["additionalparams"], " AND p.branchid in("), (await $.mv((await $.mv((await $.v(C, "LookUsrGrp")), "GetCheckedKeyList")), "CommaText"))), ")"), "\r\n");
  }
  if ($.truthy(($.ne((await $.mv((await $.mv((await $.v(C, "LookPersonelType")), "GetCheckedKeyList")), "Count")), (await $.mv((await $.mv((await $.v(C, "LookPersonelType")), "Items")), "Count")))))) {
    L0["additionalparams"] = $.add($.add($.add($.add(L0["additionalparams"], " AND p.CUSTOMERTYPE in("), (await $.mv((await $.mv((await $.v(C, "LookPersonelType")), "GetCheckedKeyList")), "CommaText"))), ")"), "\r\n");
  }
  if ($.truthy($.ne(L0["restsstr"], ""))) {
    L0["additionalparams"] = $.add($.add(L0["additionalparams"], " and "), L0["restsstr"]);
  }
  {
    const $t7 = (await $.wobj(C, "credit"));
    if ($.truthy((await $.wv([$t7], "Active", C, false)))) {
      await $.stmt($.wcall([$t7], "CloseAll", [], C));
    }
    if ($.truthy($.ne((await $.wv([$t7], "ADDITIONALPARAMS", { get: async () => L0["additionalparams"], set: async (v) => { L0["additionalparams"] = v; }, local: true }, false)), ""))) {
      { const $t8 = await $.iset((await $.wv([$t7], "SQL", C, false)), [3], (await $.wv([$t7], "ADDITIONALPARAMS", { get: async () => L0["additionalparams"], set: async (v) => { L0["additionalparams"] = v; }, local: true }, false))); if ($t8 !== undefined) { await $.wset([$t7], "SQL", $t8, C); } }
    } else {
      { const $t9 = await $.iset((await $.wv([$t7], "SQL", C, false)), [3], ""); if ($t9 !== undefined) { await $.wset([$t7], "SQL", $t9, C); } }
    }
    await $.stmt($.wcall([$t7], "open", [], C));
  }
  await $.mset((await $.v(C, "Gauge1")), "Visible", true);
  L0["ss"] = 1;
  await $.stmt((await $.call(C, "LogInformation", ["İxrac Başladı"])));
  {
    const $t10 = (await $.wobj(C, "credit"));
    while ($.truthy($.not((await $.wv([$t10], "EOF", C, false))))) {
      try {
        await $.mset((await $.wv([$t10], "Gauge1", C, false)), "Progress", (await $.wcall([$t10], "trunc", [$.fdiv($.mul((await $.wv([$t10], "ss", { get: async () => L0["ss"], set: async (v) => { L0["ss"] = v; }, local: true }, false)), 100), (await $.mv((await $.wv([$t10], "credit", C, false)), "RecordCount")))], C)));
        await $.wset([$t10], "ss", $.add((await $.wv([$t10], "ss", { get: async () => L0["ss"], set: async (v) => { L0["ss"] = v; }, local: true }, false)), 1), { get: async () => L0["ss"], set: async (v) => { L0["ss"] = v; }, local: true });
        await $.stmt((await $.mcall((await $.wv([$t10], "OraclePackage1", C, false)), "CallProcedure", ["insinfof1", ["p_id", (await $.mv((await $.wcall([$t10], "FieldByName", ["ID"], C)), "AsInteger")), "p_bdate", (await $.wv([$t10], "dat", { get: async () => L0["dat"], set: async (v) => { L0["dat"] = v; }, local: true }, false)), "p_edate", (await $.wv([$t10], "dat", { get: async () => L0["dat"], set: async (v) => { L0["dat"] = v; }, local: true }, false))]])));
      } catch ($t11) {
        $.rethrowControl($t11);
        if ($.excIs($t11, "Exception")) {
          L0["e"] = $.exc($t11);
          await $.stmt((await $.wcall([$t10], "LogError", [$.add((await $.wcall([$t10], "Format", [(await $.wv([$t10], "rsCreditNumber", { get: async () => L0["rscreditnumber"], set: async (v) => { L0["rscreditnumber"] = v; }, local: true }, false)), [(await $.mv((await $.wcall([$t10], "FieldByName", ["ID"], C)), "AsInteger"))]], C)), (await $.mv((await $.wv([$t10], "E", { get: async () => L0["e"], set: async (v) => { L0["e"] = v; }, local: true }, false)), "Message")))], C)));
        }
        else { throw $t11; }
      }
      await $.stmt($.wcall([$t10], "Next", [], C));
      await $.mcall((await $.wv([$t10], "CommonApplication", C, false)), "ProcessMessages", []);
      await $.tick();
    }
  }
  await $.mcall((await $.v(C, "active")), "open", []);
  await $.stmt($.call(C, "CreateSheet", []));
  try {
    await $.mset((await $.v(C, "Gauge1")), "Visible", false);
    await $.mset((await $.idx((await $.mv((await $.v(C, "Sheet")), "Range")), ["A1:A60000"])), "ColumnWidth", 8);
    await $.mset((await $.idx((await $.mv((await $.v(C, "Sheet")), "Range")), ["B1:B60000"])), "ColumnWidth", 18);
    await $.mset((await $.idx((await $.mv((await $.v(C, "Sheet")), "Range")), ["C1:C60000"])), "ColumnWidth", 25);
    await $.mset((await $.idx((await $.mv((await $.v(C, "Sheet")), "Range")), ["D1:D60000"])), "ColumnWidth", 25);
    await $.mset((await $.idx((await $.mv((await $.v(C, "Sheet")), "Range")), ["E1:E60000"])), "ColumnWidth", 25);
    await $.mset((await $.idx((await $.mv((await $.v(C, "Sheet")), "Range")), ["F1:F60000"])), "ColumnWidth", 25);
    await $.mset((await $.idx((await $.mv((await $.v(C, "Sheet")), "Range")), ["G1:G60000"])), "ColumnWidth", 35);
    await $.mset((await $.idx((await $.mv((await $.v(C, "Sheet")), "Range")), ["H1:H60000"])), "ColumnWidth", 35);
    await $.mset((await $.idx((await $.mv((await $.v(C, "Sheet")), "Range")), ["H1:H60000"])), "NumberFormat", L0["number_format_r"]);
    await $.mset((await $.idx((await $.mv((await $.v(C, "Sheet")), "Range")), ["I1:I60000"])), "ColumnWidth", 25);
    await $.mset((await $.idx((await $.mv((await $.v(C, "Sheet")), "Range")), ["I1:I60000"])), "NumberFormat", L0["number_format_r"]);
    { const $t12 = await $.iset((await $.mv((await $.v(C, "Sheet")), "Cells")), [2, 5], "TuranBank ASC-də % borcu üzrə ödəniş əmsalı"); if ($t12 !== undefined) { await $.mset((await $.v(C, "Sheet")), "Cells", $t12); } }
    await $.mset((await $.mv((await $.idx((await $.mv((await $.v(C, "Sheet")), "Cells")), [2, 5])), "Font")), "Name", "Azl Sans Serif");
    await $.mset((await $.mv((await $.idx((await $.mv((await $.v(C, "Sheet")), "Cells")), [2, 5])), "Font")), "Bold", true);
    await $.mset((await $.mv((await $.idx((await $.mv((await $.v(C, "Sheet")), "Cells")), [2, 5])), "Font")), "size", 22);
    L0["k"] = 5;
    L0["i"] = 0;
    { const $t13 = await $.iset((await $.mv((await $.v(C, "sheet")), "Cells")), [$.add($.add(L0["i"], L0["k"]), 1), 1], "Sıra №"); if ($t13 !== undefined) { await $.mset((await $.v(C, "sheet")), "Cells", $t13); } }
    await $.mset((await $.mv((await $.idx((await $.mv((await $.v(C, "Sheet")), "Cells")), [$.add($.add(L0["i"], L0["k"]), 1), 1])), "Font")), "Bold", true);
    await $.mset((await $.mv((await $.idx((await $.mv((await $.v(C, "Sheet")), "Cells")), [$.add($.add(L0["i"], L0["k"]), 1), 1])), "Font")), "Color", (await $.v(C, "clBlack")));
    { const $t14 = await $.iset((await $.mv((await $.v(C, "sheet")), "Cells")), [$.add($.add(L0["i"], L0["k"]), 1), 2], "Filial"); if ($t14 !== undefined) { await $.mset((await $.v(C, "sheet")), "Cells", $t14); } }
    await $.mset((await $.mv((await $.idx((await $.mv((await $.v(C, "Sheet")), "Cells")), [$.add($.add(L0["i"], L0["k"]), 1), 2])), "Font")), "Bold", true);
    await $.mset((await $.mv((await $.idx((await $.mv((await $.v(C, "Sheet")), "Cells")), [$.add($.add(L0["i"], L0["k"]), 1), 2])), "Font")), "Color", (await $.v(C, "clBlack")));
    { const $t15 = await $.iset((await $.mv((await $.v(C, "sheet")), "Cells")), [$.add($.add(L0["i"], L0["k"]), 1), 3], "Kredit portfel"); if ($t15 !== undefined) { await $.mset((await $.v(C, "sheet")), "Cells", $t15); } }
    await $.mset((await $.mv((await $.idx((await $.mv((await $.v(C, "Sheet")), "Cells")), [$.add($.add(L0["i"], L0["k"]), 1), 3])), "Font")), "Bold", true);
    await $.mset((await $.mv((await $.idx((await $.mv((await $.v(C, "Sheet")), "Cells")), [$.add($.add(L0["i"], L0["k"]), 1), 3])), "Font")), "Color", (await $.v(C, "clBlack")));
    { const $t16 = await $.iset((await $.mv((await $.v(C, "sheet")), "Cells")), [$.add($.add(L0["i"], L0["k"]), 1), 4], "Hesabat tarixinə ödənilməli faiz borcu"); if ($t16 !== undefined) { await $.mset((await $.v(C, "sheet")), "Cells", $t16); } }
    await $.mset((await $.mv((await $.idx((await $.mv((await $.v(C, "Sheet")), "Cells")), [$.add($.add(L0["i"], L0["k"]), 1), 4])), "Font")), "Bold", true);
    await $.mset((await $.mv((await $.idx((await $.mv((await $.v(C, "Sheet")), "Cells")), [$.add($.add(L0["i"], L0["k"]), 1), 4])), "Font")), "Color", (await $.v(C, "clBlack")));
    await $.mset((await $.idx((await $.mv((await $.v(C, "Sheet")), "Cells")), [$.add($.add(L0["i"], L0["k"]), 1), 4])), "WrapText", true);
    { const $t17 = await $.iset((await $.mv((await $.v(C, "sheet")), "Cells")), [$.add($.add(L0["i"], L0["k"]), 1), 5], "Hesabat tarixinə ödənilmiş faiz borcu"); if ($t17 !== undefined) { await $.mset((await $.v(C, "sheet")), "Cells", $t17); } }
    await $.mset((await $.mv((await $.idx((await $.mv((await $.v(C, "Sheet")), "Cells")), [$.add($.add(L0["i"], L0["k"]), 1), 5])), "Font")), "Bold", true);
    await $.mset((await $.mv((await $.idx((await $.mv((await $.v(C, "Sheet")), "Cells")), [$.add($.add(L0["i"], L0["k"]), 1), 5])), "Font")), "Color", (await $.v(C, "clBlack")));
    await $.mset((await $.idx((await $.mv((await $.v(C, "Sheet")), "Cells")), [$.add($.add(L0["i"], L0["k"]), 1), 5])), "WrapText", true);
    { const $t18 = await $.iset((await $.mv((await $.v(C, "sheet")), "Cells")), [$.add($.add(L0["i"], L0["k"]), 1), 6], "Gecikdirilmiş faiz borcu"); if ($t18 !== undefined) { await $.mset((await $.v(C, "sheet")), "Cells", $t18); } }
    await $.mset((await $.mv((await $.idx((await $.mv((await $.v(C, "Sheet")), "Cells")), [$.add($.add(L0["i"], L0["k"]), 1), 6])), "Font")), "Bold", true);
    await $.mset((await $.mv((await $.idx((await $.mv((await $.v(C, "Sheet")), "Cells")), [$.add($.add(L0["i"], L0["k"]), 1), 6])), "Font")), "Color", (await $.v(C, "clBlack")));
    await $.mset((await $.idx((await $.mv((await $.v(C, "Sheet")), "Cells")), [$.add($.add(L0["i"], L0["k"]), 1), 6])), "WrapText", true);
    { const $t19 = await $.iset((await $.mv((await $.v(C, "sheet")), "Cells")), [$.add($.add(L0["i"], L0["k"]), 1), 7], "Gecikdirilmiş faiz borcu üzrə qlıq məbləğ"); if ($t19 !== undefined) { await $.mset((await $.v(C, "sheet")), "Cells", $t19); } }
    await $.mset((await $.mv((await $.idx((await $.mv((await $.v(C, "Sheet")), "Cells")), [$.add($.add(L0["i"], L0["k"]), 1), 7])), "Font")), "Bold", true);
    await $.mset((await $.mv((await $.idx((await $.mv((await $.v(C, "Sheet")), "Cells")), [$.add($.add(L0["i"], L0["k"]), 1), 7])), "Font")), "Color", (await $.v(C, "clBlack")));
    await $.mset((await $.idx((await $.mv((await $.v(C, "Sheet")), "Cells")), [$.add($.add(L0["i"], L0["k"]), 1), 7])), "WrapText", true);
    { const $t20 = await $.iset((await $.mv((await $.v(C, "sheet")), "Cells")), [$.add($.add(L0["i"], L0["k"]), 1), 8], "Gecikdirilmiş faiz borcu üzrə qlıq məbləğin kreditin portfelinde xüsusi çəkisi sütun7/sütun3"); if ($t20 !== undefined) { await $.mset((await $.v(C, "sheet")), "Cells", $t20); } }
    await $.mset((await $.mv((await $.idx((await $.mv((await $.v(C, "Sheet")), "Cells")), [$.add($.add(L0["i"], L0["k"]), 1), 8])), "Font")), "Bold", true);
    await $.mset((await $.mv((await $.idx((await $.mv((await $.v(C, "Sheet")), "Cells")), [$.add($.add(L0["i"], L0["k"]), 1), 8])), "Font")), "Color", (await $.v(C, "clBlack")));
    await $.mset((await $.idx((await $.mv((await $.v(C, "Sheet")), "Cells")), [$.add($.add(L0["i"], L0["k"]), 1), 8])), "WrapText", true);
    { const $t21 = await $.iset((await $.mv((await $.v(C, "sheet")), "Cells")), [$.add($.add(L0["i"], L0["k"]), 1), 9], "Ödənilmiş faiz(% nisbətilə sütun5.sütun4)"); if ($t21 !== undefined) { await $.mset((await $.v(C, "sheet")), "Cells", $t21); } }
    await $.mset((await $.mv((await $.idx((await $.mv((await $.v(C, "Sheet")), "Cells")), [$.add($.add(L0["i"], L0["k"]), 1), 9])), "Font")), "Bold", true);
    await $.mset((await $.mv((await $.idx((await $.mv((await $.v(C, "Sheet")), "Cells")), [$.add($.add(L0["i"], L0["k"]), 1), 9])), "Font")), "Color", (await $.v(C, "clBlack")));
    await $.mset((await $.idx((await $.mv((await $.v(C, "Sheet")), "Cells")), [$.add($.add(L0["i"], L0["k"]), 1), 9])), "WrapText", true);
    await $.stmt($.call(C, "ShowSheet", []));
    L0["j"] = 0;
    { const $t22 = (await $.mv((await $.v(C, "active")), "RecordCount"));
      L0["i"] = 1;
      let $t23 = true;
      for (;;) {
        if (!$t23) { L0["i"] = $.succ(L0["i"], 1); }
        $t23 = false;
        if (!($.ord(L0["i"]) <= $.ord($t22))) break;
        L0["j"] = $.add(L0["j"], 1);
        { const $t24 = await $.iset((await $.mv((await $.v(C, "Sheet")), "Cells")), [$.add($.add(L0["i"], L0["k"]), 1), 1], L0["j"]); if ($t24 !== undefined) { await $.mset((await $.v(C, "Sheet")), "Cells", $t24); } }
        { const $t25 = await $.iset((await $.mv((await $.v(C, "Sheet")), "Cells")), [$.add($.add(L0["i"], L0["k"]), 1), 2], (await $.mv((await $.mcall((await $.v(C, "active")), "FieldByName", ["Name"])), "AsString"))); if ($t25 !== undefined) { await $.mset((await $.v(C, "Sheet")), "Cells", $t25); } }
        { const $t26 = await $.iset((await $.mv((await $.v(C, "Sheet")), "Cells")), [$.add($.add(L0["i"], L0["k"]), 1), 3], (await $.mv((await $.mcall((await $.v(C, "active")), "FieldByName", ["PORTFEL"])), "Asfloat"))); if ($t26 !== undefined) { await $.mset((await $.v(C, "Sheet")), "Cells", $t26); } }
        { const $t27 = await $.iset((await $.mv((await $.v(C, "Sheet")), "Cells")), [$.add($.add(L0["i"], L0["k"]), 1), 4], (await $.mv((await $.mcall((await $.v(C, "active")), "FieldByName", ["ODENILMELIFAIZ"])), "Asfloat"))); if ($t27 !== undefined) { await $.mset((await $.v(C, "Sheet")), "Cells", $t27); } }
        { const $t28 = await $.iset((await $.mv((await $.v(C, "Sheet")), "Cells")), [$.add($.add(L0["i"], L0["k"]), 1), 5], (await $.mv((await $.mcall((await $.v(C, "active")), "FieldByName", ["ODENILMISH"])), "Asfloat"))); if ($t28 !== undefined) { await $.mset((await $.v(C, "Sheet")), "Cells", $t28); } }
        { const $t29 = await $.iset((await $.mv((await $.v(C, "Sheet")), "Cells")), [$.add($.add(L0["i"], L0["k"]), 1), 6], (await $.mv((await $.mcall((await $.v(C, "active")), "FieldByName", ["GECFAIZMEB"])), "Asfloat"))); if ($t29 !== undefined) { await $.mset((await $.v(C, "Sheet")), "Cells", $t29); } }
        { const $t30 = await $.iset((await $.mv((await $.v(C, "Sheet")), "Cells")), [$.add($.add(L0["i"], L0["k"]), 1), 7], (await $.mv((await $.mcall((await $.v(C, "active")), "FieldByName", ["GEC"])), "Asfloat"))); if ($t30 !== undefined) { await $.mset((await $.v(C, "Sheet")), "Cells", $t30); } }
        { const $t31 = await $.iset((await $.mv((await $.v(C, "Sheet")), "Cells")), [$.add($.add(L0["i"], L0["k"]), 1), 8], (await $.mv((await $.mcall((await $.v(C, "active")), "FieldByName", ["GF"])), "Asfloat"))); if ($t31 !== undefined) { await $.mset((await $.v(C, "Sheet")), "Cells", $t31); } }
        { const $t32 = await $.iset((await $.mv((await $.v(C, "Sheet")), "Cells")), [$.add($.add(L0["i"], L0["k"]), 1), 9], (await $.mv((await $.mcall((await $.v(C, "active")), "FieldByName", ["F"])), "Asfloat"))); if ($t32 !== undefined) { await $.mset((await $.v(C, "Sheet")), "Cells", $t32); } }
        await $.mcall((await $.v(C, "active")), "Next", []);
        await $.tick();
      }
    }
    L0["w"] = (await $.mv((await $.v(C, "active")), "RecordCount"));
    { const $t33 = await $.iset((await $.mv((await $.v(C, "Sheet")), "Cells")), [$.add($.add(L0["w"], L0["k"]), 2), 1], "Yekun cem"); if ($t33 !== undefined) { await $.mset((await $.v(C, "Sheet")), "Cells", $t33); } }
    await $.mset((await $.mv((await $.idx((await $.mv((await $.v(C, "Sheet")), "Cells")), [$.add($.add(L0["w"], L0["k"]), 2), 1])), "Font")), "Name", "Azl Sans Serif");
    await $.mset((await $.mv((await $.idx((await $.mv((await $.v(C, "Sheet")), "Cells")), [$.add($.add(L0["w"], L0["k"]), 2), 1])), "Font")), "Bold", true);
    await $.mset((await $.mv((await $.idx((await $.mv((await $.v(C, "Sheet")), "Cells")), [$.add($.add(L0["w"], L0["k"]), 2), 1])), "Font")), "Color", (await $.v(C, "clred")));
    await $.mset((await $.mv((await $.idx((await $.mv((await $.v(C, "Sheet")), "Cells")), [$.add($.add(L0["w"], L0["k"]), 2), 3])), "Font")), "Color", (await $.v(C, "clred")));
    { const $t34 = await $.iset((await $.mv((await $.v(C, "Sheet")), "Cells")), [$.add($.add(L0["w"], L0["k"]), 2), 3], $.add($.add("=SUM(C7:C", (await $.call(C, "inttostr", [$.add(L0["w"], 6)]))), ")")); if ($t34 !== undefined) { await $.mset((await $.v(C, "Sheet")), "Cells", $t34); } }
    await $.mset((await $.mv((await $.idx((await $.mv((await $.v(C, "Sheet")), "Cells")), [$.add($.add(L0["w"], L0["k"]), 2), 3])), "Font")), "Color", (await $.v(C, "clred")));
    await $.mset((await $.mv((await $.idx((await $.mv((await $.v(C, "Sheet")), "Cells")), [$.add($.add(L0["w"], L0["k"]), 2), 4])), "Font")), "Color", (await $.v(C, "clred")));
    { const $t35 = await $.iset((await $.mv((await $.v(C, "Sheet")), "Cells")), [$.add($.add(L0["w"], L0["k"]), 2), 4], $.add($.add("=SUM(D7:D", (await $.call(C, "inttostr", [$.add(L0["w"], 6)]))), ")")); if ($t35 !== undefined) { await $.mset((await $.v(C, "Sheet")), "Cells", $t35); } }
    await $.mset((await $.mv((await $.idx((await $.mv((await $.v(C, "Sheet")), "Cells")), [$.add($.add(L0["w"], L0["k"]), 2), 4])), "Font")), "Color", (await $.v(C, "clred")));
    await $.mset((await $.mv((await $.idx((await $.mv((await $.v(C, "Sheet")), "Cells")), [$.add($.add(L0["w"], L0["k"]), 2), 5])), "Font")), "Color", (await $.v(C, "clred")));
    { const $t36 = await $.iset((await $.mv((await $.v(C, "Sheet")), "Cells")), [$.add($.add(L0["w"], L0["k"]), 2), 5], $.add($.add("=SUM(E7:E", (await $.call(C, "inttostr", [$.add(L0["w"], 6)]))), ")")); if ($t36 !== undefined) { await $.mset((await $.v(C, "Sheet")), "Cells", $t36); } }
    await $.mset((await $.mv((await $.idx((await $.mv((await $.v(C, "Sheet")), "Cells")), [$.add($.add(L0["w"], L0["k"]), 2), 5])), "Font")), "Color", (await $.v(C, "clred")));
    await $.mset((await $.mv((await $.idx((await $.mv((await $.v(C, "Sheet")), "Cells")), [$.add($.add(L0["w"], L0["k"]), 2), 6])), "Font")), "Color", (await $.v(C, "clred")));
    { const $t37 = await $.iset((await $.mv((await $.v(C, "Sheet")), "Cells")), [$.add($.add(L0["w"], L0["k"]), 2), 6], $.add($.add("=SUM(F7:F", (await $.call(C, "inttostr", [$.add(L0["w"], 6)]))), ")")); if ($t37 !== undefined) { await $.mset((await $.v(C, "Sheet")), "Cells", $t37); } }
    await $.mset((await $.mv((await $.idx((await $.mv((await $.v(C, "Sheet")), "Cells")), [$.add($.add(L0["w"], L0["k"]), 2), 6])), "Font")), "Color", (await $.v(C, "clred")));
    await $.mset((await $.mv((await $.idx((await $.mv((await $.v(C, "Sheet")), "Cells")), [$.add($.add(L0["w"], L0["k"]), 2), 7])), "Font")), "Color", (await $.v(C, "clred")));
    { const $t38 = await $.iset((await $.mv((await $.v(C, "Sheet")), "Cells")), [$.add($.add(L0["w"], L0["k"]), 2), 7], $.add($.add("=SUM(G7:G", (await $.call(C, "inttostr", [$.add(L0["w"], 6)]))), ")")); if ($t38 !== undefined) { await $.mset((await $.v(C, "Sheet")), "Cells", $t38); } }
    await $.mset((await $.mv((await $.idx((await $.mv((await $.v(C, "Sheet")), "Cells")), [$.add($.add(L0["w"], L0["k"]), 2), 7])), "Font")), "Color", (await $.v(C, "clred")));
    await $.mset((await $.mv((await $.idx((await $.mv((await $.v(C, "Sheet")), "Cells")), [$.add($.add(L0["w"], L0["k"]), 2), 8])), "Font")), "Color", (await $.v(C, "clred")));
    { const $t39 = await $.iset((await $.mv((await $.v(C, "Sheet")), "Cells")), [$.add($.add(L0["w"], L0["k"]), 2), 8], $.add($.add($.add($.add("=G", (await $.call(C, "inttostr", [$.add(L0["w"], 7)]))), "/"), "C"), (await $.call(C, "inttostr", [$.add(L0["w"], 7)])))); if ($t39 !== undefined) { await $.mset((await $.v(C, "Sheet")), "Cells", $t39); } }
    await $.mset((await $.mv((await $.idx((await $.mv((await $.v(C, "Sheet")), "Cells")), [$.add($.add(L0["w"], L0["k"]), 2), 8])), "Font")), "Color", (await $.v(C, "clred")));
    await $.mset((await $.mv((await $.idx((await $.mv((await $.v(C, "Sheet")), "Cells")), [$.add($.add(L0["w"], L0["k"]), 2), 9])), "Font")), "Color", (await $.v(C, "clred")));
    { const $t40 = await $.iset((await $.mv((await $.v(C, "Sheet")), "Cells")), [$.add($.add(L0["w"], L0["k"]), 2), 9], $.add($.add($.add($.add("=E", (await $.call(C, "inttostr", [$.add(L0["w"], 7)]))), "/"), "D"), (await $.call(C, "inttostr", [$.add(L0["w"], 7)])))); if ($t40 !== undefined) { await $.mset((await $.v(C, "Sheet")), "Cells", $t40); } }
    await $.mset((await $.mv((await $.idx((await $.mv((await $.v(C, "Sheet")), "Cells")), [$.add($.add(L0["w"], L0["k"]), 2), 9])), "Font")), "Color", (await $.v(C, "clred")));
    L0["bash"] = (await $.call(C, "inttostr", [$.add(L0["k"], 1)]));
    await $.mcall((await $.idx((await $.mv((await $.v(C, "Exl")), "Range")), [$.add($.add($.add("A", L0["bash"]), ":I"), (await $.call(C, "inttostr", [$.add($.add(L0["m"], L0["k"]), 1)])))])), "select", []);
    await $.mset((await $.mv((await $.idx((await $.mv((await $.v(C, "Sheet")), "Range")), [$.add($.add($.add("A", L0["bash"]), ":I"), (await $.call(C, "inttostr", [$.add($.add(L0["m"], L0["k"]), 1)])))])), "Borders")), "Color", (await $.v(C, "clBlack")));
    await $.mcall((await $.mv((await $.v(C, "active")), "Session")), "Commit", []);
  } finally {
    await $.mcall((await $.idx((await $.mv((await $.v(C, "Exl")), "Range")), ["A1:A1"])), "Select", []);
    await $.mset((await $.v(C, "Screen")), "Cursor", (await $.v(C, "crDefault")));
    await $.stmt($.call(C, "DestroySheet", []));
    await $.mcall((await $.v(C, "active")), "EnableControls", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFrmCoefficient", "SpeedButton2Click", async function SpeedButton2Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.stmt($.call(C, "close", []));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFrmCoefficient", "SpeedButton3Click", async function SpeedButton3Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "ss": 0, "i": 0, "dat": 0, "aa": 0, "s": 0, "l": 0, "cell": 0, "r": 0, "h": 0, "j": 0, "k": 0, "m": 0, "w": 0, "bash": '', "restsstr": '', "chpaystr": '', "additionalparams": '', "filterstr": '', "checkstr": ''};
  await $.fixArgs(L0, ["sender"]);
  L0["number_format_r"] = "#,##0.00%";
  L0["rscreditnumber"] = "%d - № li kredit : ";
  L0["dat"] = (await $.call(C, "integer", [(await $.call(C, "trunc", [(await $.mv((await $.v(C, "DateTimePicker1")), "DateTime"))]))]));
  L0["filterstr"] = "";
  L0["checkstr"] = "";
  L0["chpaystr"] = "";
  if ($.truthy((await $.and_(($.ne(L0["checkstr"], "")), async () => ($.ne(L0["filterstr"], "")))))) {
    L0["filterstr"] = $.add($.add(L0["filterstr"], " AND "), L0["checkstr"]);
  }
  if ($.truthy((await $.and_(($.ne(L0["checkstr"], "")), async () => ($.eq(L0["filterstr"], "")))))) {
    L0["filterstr"] = L0["checkstr"];
  }
  L0["filterstr"] = $.add(L0["filterstr"], L0["chpaystr"]);
  if ($.truthy($.ne(L0["filterstr"], ""))) {
    L0["additionalparams"] = $.add(" AND ", L0["filterstr"]);
  } else {
    L0["additionalparams"] = "";
  }
  if ($.truthy($.not((await $.call(C, "ErrorInCheck", [(await $.v(C, "LookUsrGrp")), (await $.v(C, "rsErrorUsrGrp"))]))))) {
    return L0.result;
  }
  if ($.truthy($.not((await $.call(C, "ErrorInCheck", [(await $.v(C, "LookPersonelType")), (await $.v(C, "rsErrorPersonaltype"))]))))) {
    return L0.result;
  }
  if ($.truthy(($.ne((await $.mv((await $.mv((await $.v(C, "LookUsrGrp")), "GetCheckedKeyList")), "Count")), (await $.mv((await $.mv((await $.v(C, "LookUsrGrp")), "Items")), "Count")))))) {
    L0["additionalparams"] = $.add($.add($.add($.add(L0["additionalparams"], " AND p.branchid in("), (await $.mv((await $.mv((await $.v(C, "LookUsrGrp")), "GetCheckedKeyList")), "CommaText"))), ")"), "\r\n");
  }
  if ($.truthy(($.ne((await $.mv((await $.mv((await $.v(C, "LookPersonelType")), "GetCheckedKeyList")), "Count")), (await $.mv((await $.mv((await $.v(C, "LookPersonelType")), "Items")), "Count")))))) {
    L0["additionalparams"] = $.add($.add($.add($.add(L0["additionalparams"], " AND p.CUSTOMERTYPE in("), (await $.mv((await $.mv((await $.v(C, "LookPersonelType")), "GetCheckedKeyList")), "CommaText"))), ")"), "\r\n");
  }
  if ($.truthy($.ne(L0["restsstr"], ""))) {
    L0["additionalparams"] = $.add($.add(L0["additionalparams"], " and "), L0["restsstr"]);
  }
  {
    const $t41 = (await $.wobj(C, "credit"));
    if ($.truthy((await $.wv([$t41], "Active", C, false)))) {
      await $.stmt($.wcall([$t41], "CloseAll", [], C));
    }
    if ($.truthy($.ne((await $.wv([$t41], "ADDITIONALPARAMS", { get: async () => L0["additionalparams"], set: async (v) => { L0["additionalparams"] = v; }, local: true }, false)), ""))) {
      { const $t42 = await $.iset((await $.wv([$t41], "SQL", C, false)), [3], (await $.wv([$t41], "ADDITIONALPARAMS", { get: async () => L0["additionalparams"], set: async (v) => { L0["additionalparams"] = v; }, local: true }, false))); if ($t42 !== undefined) { await $.wset([$t41], "SQL", $t42, C); } }
    } else {
      { const $t43 = await $.iset((await $.wv([$t41], "SQL", C, false)), [3], ""); if ($t43 !== undefined) { await $.wset([$t41], "SQL", $t43, C); } }
    }
    await $.stmt($.wcall([$t41], "open", [], C));
  }
  if ($.truthy((await $.mv((await $.v(C, "main")), "Active")))) {
    await $.mcall((await $.v(C, "main")), "close", []);
  }
  await $.mset((await $.v(C, "Gauge1")), "Visible", true);
  L0["ss"] = 1;
  await $.stmt((await $.call(C, "LogInformation", ["İxrac Başladı"])));
  {
    const $t44 = (await $.wobj(C, "credit"));
    while ($.truthy($.not((await $.wv([$t44], "EOF", C, false))))) {
      try {
        await $.mset((await $.wv([$t44], "Gauge1", C, false)), "Progress", (await $.wcall([$t44], "trunc", [$.fdiv($.mul((await $.wv([$t44], "ss", { get: async () => L0["ss"], set: async (v) => { L0["ss"] = v; }, local: true }, false)), 100), (await $.mv((await $.wv([$t44], "credit", C, false)), "RecordCount")))], C)));
        await $.wset([$t44], "ss", $.add((await $.wv([$t44], "ss", { get: async () => L0["ss"], set: async (v) => { L0["ss"] = v; }, local: true }, false)), 1), { get: async () => L0["ss"], set: async (v) => { L0["ss"] = v; }, local: true });
        await $.stmt((await $.mcall((await $.wv([$t44], "OraclePackage1", C, false)), "CallProcedure", ["insinfof1", ["p_id", (await $.mv((await $.wcall([$t44], "FieldByName", ["ID"], C)), "AsInteger")), "p_bdate", (await $.wv([$t44], "dat", { get: async () => L0["dat"], set: async (v) => { L0["dat"] = v; }, local: true }, false)), "p_edate", (await $.wv([$t44], "dat", { get: async () => L0["dat"], set: async (v) => { L0["dat"] = v; }, local: true }, false))]])));
      } catch ($t45) {
        $.rethrowControl($t45);
        if ($.excIs($t45, "Exception")) {
          L0["e"] = $.exc($t45);
          await $.stmt((await $.wcall([$t44], "LogError", [$.add((await $.wcall([$t44], "Format", [(await $.wv([$t44], "rsCreditNumber", { get: async () => L0["rscreditnumber"], set: async (v) => { L0["rscreditnumber"] = v; }, local: true }, false)), [(await $.mv((await $.wcall([$t44], "FieldByName", ["ID"], C)), "AsInteger"))]], C)), (await $.mv((await $.wv([$t44], "E", { get: async () => L0["e"], set: async (v) => { L0["e"] = v; }, local: true }, false)), "Message")))], C)));
        }
        else { throw $t45; }
      }
      await $.stmt($.wcall([$t44], "Next", [], C));
      await $.mcall((await $.wv([$t44], "CommonApplication", C, false)), "ProcessMessages", []);
      await $.tick();
    }
  }
  await $.mcall((await $.v(C, "main")), "open", []);
  await $.stmt($.call(C, "CreateSheet", []));
  try {
    await $.mset((await $.v(C, "Gauge1")), "Visible", false);
    await $.mset((await $.idx((await $.mv((await $.v(C, "Sheet")), "Range")), ["A1:A60000"])), "ColumnWidth", 8);
    await $.mset((await $.idx((await $.mv((await $.v(C, "Sheet")), "Range")), ["B1:B60000"])), "ColumnWidth", 18);
    await $.mset((await $.idx((await $.mv((await $.v(C, "Sheet")), "Range")), ["C1:C60000"])), "ColumnWidth", 20);
    await $.mset((await $.idx((await $.mv((await $.v(C, "Sheet")), "Range")), ["D1:D60000"])), "ColumnWidth", 20);
    await $.mset((await $.idx((await $.mv((await $.v(C, "Sheet")), "Range")), ["E1:E60000"])), "ColumnWidth", 20);
    await $.mset((await $.idx((await $.mv((await $.v(C, "Sheet")), "Range")), ["F1:F60000"])), "ColumnWidth", 20);
    await $.mset((await $.idx((await $.mv((await $.v(C, "Sheet")), "Range")), ["G1:G60000"])), "ColumnWidth", 20);
    await $.mset((await $.idx((await $.mv((await $.v(C, "Sheet")), "Range")), ["H1:H60000"])), "ColumnWidth", 20);
    await $.mset((await $.idx((await $.mv((await $.v(C, "Sheet")), "Range")), ["I1:I60000"])), "ColumnWidth", 20);
    await $.mset((await $.idx((await $.mv((await $.v(C, "Sheet")), "Range")), ["I1:I60000"])), "NumberFormat", L0["number_format_r"]);
    await $.mset((await $.idx((await $.mv((await $.v(C, "Sheet")), "Range")), ["J1:J60000"])), "ColumnWidth", 20);
    await $.mset((await $.idx((await $.mv((await $.v(C, "Sheet")), "Range")), ["J1:J60000"])), "NumberFormat", L0["number_format_r"]);
    await $.mset((await $.idx((await $.mv((await $.v(C, "Sheet")), "Range")), ["K1:K60000"])), "ColumnWidth", 25);
    await $.mset((await $.idx((await $.mv((await $.v(C, "Sheet")), "Range")), ["K1:K60000"])), "NumberFormat", L0["number_format_r"]);
    { const $t46 = await $.iset((await $.mv((await $.v(C, "Sheet")), "Cells")), [2, 5], "TuranBank ASC-də əsas borc üzrə ödəniş əmsalı"); if ($t46 !== undefined) { await $.mset((await $.v(C, "Sheet")), "Cells", $t46); } }
    await $.mset((await $.mv((await $.idx((await $.mv((await $.v(C, "Sheet")), "Cells")), [2, 5])), "Font")), "Bold", true);
    await $.mset((await $.mv((await $.idx((await $.mv((await $.v(C, "Sheet")), "Cells")), [2, 5])), "Font")), "Color", (await $.v(C, "clBlue")));
    await $.mset((await $.mv((await $.idx((await $.mv((await $.v(C, "Sheet")), "Cells")), [2, 5])), "Font")), "size", 22);
    { const $t47 = await $.iset((await $.mv((await $.v(C, "sheet")), "Cells")), [3, 2], "Hesabat tarixi"); if ($t47 !== undefined) { await $.mset((await $.v(C, "sheet")), "Cells", $t47); } }
    await $.mset((await $.mv((await $.idx((await $.mv((await $.v(C, "Sheet")), "Cells")), [3, 2])), "Font")), "Bold", true);
    await $.mset((await $.mv((await $.idx((await $.mv((await $.v(C, "Sheet")), "Cells")), [3, 2])), "Font")), "Color", (await $.v(C, "clBlack")));
    { const $t48 = await $.iset((await $.mv((await $.v(C, "sheet")), "Cells")), [3, 3], L0["dat"]); if ($t48 !== undefined) { await $.mset((await $.v(C, "sheet")), "Cells", $t48); } }
    { const $t49 = await $.iset((await $.mv((await $.v(C, "sheet")), "Cells")), [4, 2], "Kreditin valyutası "); if ($t49 !== undefined) { await $.mset((await $.v(C, "sheet")), "Cells", $t49); } }
    await $.mset((await $.mv((await $.idx((await $.mv((await $.v(C, "Sheet")), "Cells")), [4, 2])), "Font")), "Bold", true);
    await $.mset((await $.mv((await $.idx((await $.mv((await $.v(C, "Sheet")), "Cells")), [4, 2])), "Font")), "Color", (await $.v(C, "clBlack")));
    { const $t50 = await $.iset((await $.mv((await $.v(C, "sheet")), "Cells")), [4, 3], "Manatla"); if ($t50 !== undefined) { await $.mset((await $.v(C, "sheet")), "Cells", $t50); } }
    L0["k"] = 5;
    L0["i"] = 0;
    { const $t51 = await $.iset((await $.mv((await $.v(C, "sheet")), "Cells")), [$.add($.add(L0["i"], L0["k"]), 1), 1], "Sıra №"); if ($t51 !== undefined) { await $.mset((await $.v(C, "sheet")), "Cells", $t51); } }
    await $.mset((await $.mv((await $.idx((await $.mv((await $.v(C, "Sheet")), "Cells")), [$.add($.add(L0["i"], L0["k"]), 1), 1])), "Font")), "Bold", true);
    await $.mset((await $.mv((await $.idx((await $.mv((await $.v(C, "Sheet")), "Cells")), [$.add($.add(L0["i"], L0["k"]), 1), 1])), "Font")), "Color", (await $.v(C, "clBlack")));
    { const $t52 = await $.iset((await $.mv((await $.v(C, "sheet")), "Cells")), [$.add($.add(L0["i"], L0["k"]), 1), 2], "Filial"); if ($t52 !== undefined) { await $.mset((await $.v(C, "sheet")), "Cells", $t52); } }
    await $.mset((await $.mv((await $.idx((await $.mv((await $.v(C, "Sheet")), "Cells")), [$.add($.add(L0["i"], L0["k"]), 1), 2])), "Font")), "Bold", true);
    await $.mset((await $.mv((await $.idx((await $.mv((await $.v(C, "Sheet")), "Cells")), [$.add($.add(L0["i"], L0["k"]), 1), 2])), "Font")), "Color", (await $.v(C, "clBlack")));
    { const $t53 = await $.iset((await $.mv((await $.v(C, "sheet")), "Cells")), [$.add($.add(L0["i"], L0["k"]), 1), 3], "Kredit portfeli"); if ($t53 !== undefined) { await $.mset((await $.v(C, "sheet")), "Cells", $t53); } }
    await $.mset((await $.mv((await $.idx((await $.mv((await $.v(C, "Sheet")), "Cells")), [$.add($.add(L0["i"], L0["k"]), 1), 3])), "Font")), "Bold", true);
    await $.mset((await $.mv((await $.idx((await $.mv((await $.v(C, "Sheet")), "Cells")), [$.add($.add(L0["i"], L0["k"]), 1), 3])), "Font")), "Color", (await $.v(C, "clBlack")));
    { const $t54 = await $.iset((await $.mv((await $.v(C, "sheet")), "Cells")), [$.add($.add(L0["i"], L0["k"]), 1), 4], "Hesabat tarixində ödənilməli əsas borc"); if ($t54 !== undefined) { await $.mset((await $.v(C, "sheet")), "Cells", $t54); } }
    await $.mset((await $.mv((await $.idx((await $.mv((await $.v(C, "Sheet")), "Cells")), [$.add($.add(L0["i"], L0["k"]), 1), 4])), "Font")), "Bold", true);
    await $.mset((await $.mv((await $.idx((await $.mv((await $.v(C, "Sheet")), "Cells")), [$.add($.add(L0["i"], L0["k"]), 1), 4])), "Font")), "Color", (await $.v(C, "clBlack")));
    await $.mset((await $.idx((await $.mv((await $.v(C, "Sheet")), "Cells")), [$.add($.add(L0["i"], L0["k"]), 1), 4])), "WrapText", true);
    { const $t55 = await $.iset((await $.mv((await $.v(C, "sheet")), "Cells")), [$.add($.add(L0["i"], L0["k"]), 1), 5], "Hesabat tarixində ödənilmiş əsas borc"); if ($t55 !== undefined) { await $.mset((await $.v(C, "sheet")), "Cells", $t55); } }
    await $.mset((await $.mv((await $.idx((await $.mv((await $.v(C, "Sheet")), "Cells")), [$.add($.add(L0["i"], L0["k"]), 1), 5])), "Font")), "Bold", true);
    await $.mset((await $.mv((await $.idx((await $.mv((await $.v(C, "Sheet")), "Cells")), [$.add($.add(L0["i"], L0["k"]), 1), 5])), "Font")), "Color", (await $.v(C, "clBlack")));
    await $.mset((await $.idx((await $.mv((await $.v(C, "Sheet")), "Cells")), [$.add($.add(L0["i"], L0["k"]), 1), 5])), "WrapText", true);
    { const $t56 = await $.iset((await $.mv((await $.v(C, "sheet")), "Cells")), [$.add($.add(L0["i"], L0["k"]), 1), 6], "Əsas borc üzrə artıq ödəmə"); if ($t56 !== undefined) { await $.mset((await $.v(C, "sheet")), "Cells", $t56); } }
    await $.mset((await $.mv((await $.idx((await $.mv((await $.v(C, "Sheet")), "Cells")), [$.add($.add(L0["i"], L0["k"]), 1), 6])), "Font")), "Bold", true);
    await $.mset((await $.mv((await $.idx((await $.mv((await $.v(C, "Sheet")), "Cells")), [$.add($.add(L0["i"], L0["k"]), 1), 6])), "Font")), "Color", (await $.v(C, "clBlack")));
    await $.mset((await $.idx((await $.mv((await $.v(C, "Sheet")), "Cells")), [$.add($.add(L0["i"], L0["k"]), 1), 6])), "WrapText", true);
    { const $t57 = await $.iset((await $.mv((await $.v(C, "sheet")), "Cells")), [$.add($.add(L0["i"], L0["k"]), 1), 7], "Geikdirilmiş əsas borc"); if ($t57 !== undefined) { await $.mset((await $.v(C, "sheet")), "Cells", $t57); } }
    await $.mset((await $.mv((await $.idx((await $.mv((await $.v(C, "Sheet")), "Cells")), [$.add($.add(L0["i"], L0["k"]), 1), 7])), "Font")), "Bold", true);
    await $.mset((await $.mv((await $.idx((await $.mv((await $.v(C, "Sheet")), "Cells")), [$.add($.add(L0["i"], L0["k"]), 1), 7])), "Font")), "Color", (await $.v(C, "clBlack")));
    await $.mset((await $.idx((await $.mv((await $.v(C, "Sheet")), "Cells")), [$.add($.add(L0["i"], L0["k"]), 1), 7])), "WrapText", true);
    { const $t58 = await $.iset((await $.mv((await $.v(C, "sheet")), "Cells")), [$.add($.add(L0["i"], L0["k"]), 1), 8], "Gecikdirilmiş əsas borc üzrə qalıq məbləği"); if ($t58 !== undefined) { await $.mset((await $.v(C, "sheet")), "Cells", $t58); } }
    await $.mset((await $.mv((await $.idx((await $.mv((await $.v(C, "Sheet")), "Cells")), [$.add($.add(L0["i"], L0["k"]), 1), 8])), "Font")), "Bold", true);
    await $.mset((await $.mv((await $.idx((await $.mv((await $.v(C, "Sheet")), "Cells")), [$.add($.add(L0["i"], L0["k"]), 1), 8])), "Font")), "Color", (await $.v(C, "clBlack")));
    await $.mset((await $.idx((await $.mv((await $.v(C, "Sheet")), "Cells")), [$.add($.add(L0["i"], L0["k"]), 1), 8])), "WrapText", true);
    { const $t59 = await $.iset((await $.mv((await $.v(C, "sheet")), "Cells")), [$.add($.add(L0["i"], L0["k"]), 1), 9], "Gecikdirilmiş əsas borcun kredit portfelinə nisbəti % lə)"); if ($t59 !== undefined) { await $.mset((await $.v(C, "sheet")), "Cells", $t59); } }
    await $.mset((await $.mv((await $.idx((await $.mv((await $.v(C, "Sheet")), "Cells")), [$.add($.add(L0["i"], L0["k"]), 1), 9])), "Font")), "Bold", true);
    await $.mset((await $.mv((await $.idx((await $.mv((await $.v(C, "Sheet")), "Cells")), [$.add($.add(L0["i"], L0["k"]), 1), 9])), "Font")), "Color", (await $.v(C, "clBlack")));
    await $.mset((await $.idx((await $.mv((await $.v(C, "Sheet")), "Cells")), [$.add($.add(L0["i"], L0["k"]), 1), 9])), "WrapText", true);
    { const $t60 = await $.iset((await $.mv((await $.v(C, "sheet")), "Cells")), [$.add($.add(L0["i"], L0["k"]), 1), 10], "Gecikdirilmiş əsas borc üzrə qalıq məbləğin kreditin portfelinə nisbəti % lə)"); if ($t60 !== undefined) { await $.mset((await $.v(C, "sheet")), "Cells", $t60); } }
    await $.mset((await $.mv((await $.idx((await $.mv((await $.v(C, "Sheet")), "Cells")), [$.add($.add(L0["i"], L0["k"]), 1), 10])), "Font")), "Bold", true);
    await $.mset((await $.mv((await $.idx((await $.mv((await $.v(C, "Sheet")), "Cells")), [$.add($.add(L0["i"], L0["k"]), 1), 10])), "Font")), "Color", (await $.v(C, "clBlack")));
    await $.mset((await $.idx((await $.mv((await $.v(C, "Sheet")), "Cells")), [$.add($.add(L0["i"], L0["k"]), 1), 10])), "WrapText", true);
    { const $t61 = await $.iset((await $.mv((await $.v(C, "sheet")), "Cells")), [$.add($.add(L0["i"], L0["k"]), 1), 11], "Ödəniş faizi (% nisbəti ilə)"); if ($t61 !== undefined) { await $.mset((await $.v(C, "sheet")), "Cells", $t61); } }
    await $.mset((await $.mv((await $.idx((await $.mv((await $.v(C, "Sheet")), "Cells")), [$.add($.add(L0["i"], L0["k"]), 1), 11])), "Font")), "Bold", true);
    await $.mset((await $.mv((await $.idx((await $.mv((await $.v(C, "Sheet")), "Cells")), [$.add($.add(L0["i"], L0["k"]), 1), 11])), "Font")), "Color", (await $.v(C, "clBlack")));
    await $.mset((await $.idx((await $.mv((await $.v(C, "Sheet")), "Cells")), [$.add($.add(L0["i"], L0["k"]), 1), 11])), "WrapText", true);
    await $.stmt($.call(C, "ShowSheet", []));
    L0["j"] = 0;
    { const $t62 = (await $.mv((await $.v(C, "main")), "RecordCount"));
      L0["i"] = 1;
      let $t63 = true;
      for (;;) {
        if (!$t63) { L0["i"] = $.succ(L0["i"], 1); }
        $t63 = false;
        if (!($.ord(L0["i"]) <= $.ord($t62))) break;
        L0["j"] = $.add(L0["j"], 1);
        { const $t64 = await $.iset((await $.mv((await $.v(C, "Sheet")), "Cells")), [$.add($.add(L0["i"], L0["k"]), 1), 1], L0["j"]); if ($t64 !== undefined) { await $.mset((await $.v(C, "Sheet")), "Cells", $t64); } }
        { const $t65 = await $.iset((await $.mv((await $.v(C, "Sheet")), "Cells")), [$.add($.add(L0["i"], L0["k"]), 1), 2], (await $.mv((await $.mcall((await $.v(C, "main")), "FieldByName", ["Name"])), "AsString"))); if ($t65 !== undefined) { await $.mset((await $.v(C, "Sheet")), "Cells", $t65); } }
        { const $t66 = await $.iset((await $.mv((await $.v(C, "Sheet")), "Cells")), [$.add($.add(L0["i"], L0["k"]), 1), 3], (await $.mv((await $.mcall((await $.v(C, "main")), "FieldByName", ["PORTFEL"])), "Asfloat"))); if ($t66 !== undefined) { await $.mset((await $.v(C, "Sheet")), "Cells", $t66); } }
        { const $t67 = await $.iset((await $.mv((await $.v(C, "Sheet")), "Cells")), [$.add($.add(L0["i"], L0["k"]), 1), 4], (await $.mv((await $.mcall((await $.v(C, "main")), "FieldByName", ["ODENILMELI"])), "Asfloat"))); if ($t67 !== undefined) { await $.mset((await $.v(C, "Sheet")), "Cells", $t67); } }
        { const $t68 = await $.iset((await $.mv((await $.v(C, "Sheet")), "Cells")), [$.add($.add(L0["i"], L0["k"]), 1), 5], (await $.mv((await $.mcall((await $.v(C, "main")), "FieldByName", ["ODENILMISH"])), "Asfloat"))); if ($t68 !== undefined) { await $.mset((await $.v(C, "Sheet")), "Cells", $t68); } }
        { const $t69 = await $.iset((await $.mv((await $.v(C, "Sheet")), "Cells")), [$.add($.add(L0["i"], L0["k"]), 1), 6], (await $.mv((await $.mcall((await $.v(C, "main")), "FieldByName", ["ARTIQ"])), "Asfloat"))); if ($t69 !== undefined) { await $.mset((await $.v(C, "Sheet")), "Cells", $t69); } }
        { const $t70 = await $.iset((await $.mv((await $.v(C, "Sheet")), "Cells")), [$.add($.add(L0["i"], L0["k"]), 1), 7], (await $.mv((await $.mcall((await $.v(C, "main")), "FieldByName", ["GECES"])), "Asfloat"))); if ($t70 !== undefined) { await $.mset((await $.v(C, "Sheet")), "Cells", $t70); } }
        { const $t71 = await $.iset((await $.mv((await $.v(C, "Sheet")), "Cells")), [$.add($.add(L0["i"], L0["k"]), 1), 9], $.add($.add($.add($.add("=G", (await $.call(C, "inttostr", [$.add(L0["j"], 6)]))), "/"), "C"), (await $.call(C, "inttostr", [$.add(L0["j"], 6)])))); if ($t71 !== undefined) { await $.mset((await $.v(C, "Sheet")), "Cells", $t71); } }
        { const $t72 = await $.iset((await $.mv((await $.v(C, "Sheet")), "Cells")), [$.add($.add(L0["i"], L0["k"]), 1), 8], (await $.mv((await $.mcall((await $.v(C, "main")), "FieldByName", ["GEC"])), "Asfloat"))); if ($t72 !== undefined) { await $.mset((await $.v(C, "Sheet")), "Cells", $t72); } }
        await $.mset((await $.mv((await $.idx((await $.mv((await $.v(C, "Sheet")), "Cells")), [$.add($.add(L0["i"], L0["k"]), 1), 10])), "Font")), "Bold", true);
        { const $t73 = await $.iset((await $.mv((await $.v(C, "Sheet")), "Cells")), [$.add($.add(L0["i"], L0["k"]), 1), 10], $.add($.add($.add($.add("=H", (await $.call(C, "inttostr", [$.add(L0["j"], 6)]))), "/"), "C"), (await $.call(C, "inttostr", [$.add(L0["j"], 6)])))); if ($t73 !== undefined) { await $.mset((await $.v(C, "Sheet")), "Cells", $t73); } }
        { const $t74 = await $.iset((await $.mv((await $.v(C, "Sheet")), "Cells")), [$.add($.add(L0["i"], L0["k"]), 1), 11], $.add($.add($.add($.add($.add($.add($.add("=(E", (await $.call(C, "inttostr", [$.add(L0["j"], 6)]))), "-"), "F"), (await $.call(C, "inttostr", [$.add(L0["j"], 6)]))), ")/"), "D"), (await $.call(C, "inttostr", [$.add(L0["j"], 6)])))); if ($t74 !== undefined) { await $.mset((await $.v(C, "Sheet")), "Cells", $t74); } }
        { const $t75 = await $.iset((await $.mv((await $.v(C, "Sheet")), "Cells")), [$.add($.add(L0["i"], L0["k"]), 1), 12], (await $.mv((await $.mcall((await $.v(C, "main")), "FieldByName", ["GECES"])), "Asfloat"))); if ($t75 !== undefined) { await $.mset((await $.v(C, "Sheet")), "Cells", $t75); } }
        await $.mcall((await $.v(C, "main")), "Next", []);
        await $.tick();
      }
    }
    L0["w"] = (await $.mv((await $.v(C, "main")), "RecordCount"));
    { const $t76 = await $.iset((await $.mv((await $.v(C, "Sheet")), "Cells")), [$.add($.add(L0["w"], L0["k"]), 2), 1], "Yekun cem"); if ($t76 !== undefined) { await $.mset((await $.v(C, "Sheet")), "Cells", $t76); } }
    await $.mset((await $.mv((await $.idx((await $.mv((await $.v(C, "Sheet")), "Cells")), [$.add($.add(L0["w"], L0["k"]), 2), 1])), "Font")), "Bold", true);
    { const $t77 = await $.iset((await $.mv((await $.v(C, "Sheet")), "Cells")), [$.add($.add(L0["w"], L0["k"]), 2), 3], $.add($.add("=SUM(C7:C", (await $.call(C, "inttostr", [$.add(L0["w"], 6)]))), ")")); if ($t77 !== undefined) { await $.mset((await $.v(C, "Sheet")), "Cells", $t77); } }
    await $.mset((await $.mv((await $.idx((await $.mv((await $.v(C, "Sheet")), "Cells")), [$.add($.add(L0["w"], L0["k"]), 2), 3])), "Font")), "Bold", true);
    { const $t78 = await $.iset((await $.mv((await $.v(C, "Sheet")), "Cells")), [$.add($.add(L0["w"], L0["k"]), 2), 4], $.add($.add("=SUM(D7:D", (await $.call(C, "inttostr", [$.add(L0["w"], 6)]))), ")")); if ($t78 !== undefined) { await $.mset((await $.v(C, "Sheet")), "Cells", $t78); } }
    await $.mset((await $.mv((await $.idx((await $.mv((await $.v(C, "Sheet")), "Cells")), [$.add($.add(L0["w"], L0["k"]), 2), 4])), "Font")), "Bold", true);
    { const $t79 = await $.iset((await $.mv((await $.v(C, "Sheet")), "Cells")), [$.add($.add(L0["w"], L0["k"]), 2), 5], $.add($.add("=SUM(E7:E", (await $.call(C, "inttostr", [$.add(L0["w"], 6)]))), ")")); if ($t79 !== undefined) { await $.mset((await $.v(C, "Sheet")), "Cells", $t79); } }
    await $.mset((await $.mv((await $.idx((await $.mv((await $.v(C, "Sheet")), "Cells")), [$.add($.add(L0["w"], L0["k"]), 2), 5])), "Font")), "Bold", true);
    { const $t80 = await $.iset((await $.mv((await $.v(C, "Sheet")), "Cells")), [$.add($.add(L0["w"], L0["k"]), 2), 6], $.add($.add("=SUM(F7:F", (await $.call(C, "inttostr", [$.add(L0["w"], 6)]))), ")")); if ($t80 !== undefined) { await $.mset((await $.v(C, "Sheet")), "Cells", $t80); } }
    await $.mset((await $.mv((await $.idx((await $.mv((await $.v(C, "Sheet")), "Cells")), [$.add($.add(L0["w"], L0["k"]), 2), 6])), "Font")), "Bold", true);
    { const $t81 = await $.iset((await $.mv((await $.v(C, "Sheet")), "Cells")), [$.add($.add(L0["w"], L0["k"]), 2), 7], $.add($.add("=SUM(G7:G", (await $.call(C, "inttostr", [$.add(L0["w"], 6)]))), ")")); if ($t81 !== undefined) { await $.mset((await $.v(C, "Sheet")), "Cells", $t81); } }
    await $.mset((await $.mv((await $.idx((await $.mv((await $.v(C, "Sheet")), "Cells")), [$.add($.add(L0["w"], L0["k"]), 2), 7])), "Font")), "Bold", true);
    { const $t82 = await $.iset((await $.mv((await $.v(C, "Sheet")), "Cells")), [$.add($.add(L0["w"], L0["k"]), 2), 8], $.add($.add("=SUM(H7:H", (await $.call(C, "inttostr", [$.add(L0["w"], 6)]))), ")")); if ($t82 !== undefined) { await $.mset((await $.v(C, "Sheet")), "Cells", $t82); } }
    await $.mset((await $.mv((await $.idx((await $.mv((await $.v(C, "Sheet")), "Cells")), [$.add($.add(L0["w"], L0["k"]), 2), 8])), "Font")), "Bold", true);
    { const $t83 = await $.iset((await $.mv((await $.v(C, "Sheet")), "Cells")), [$.add($.add(L0["w"], L0["k"]), 2), 9], $.add($.add($.add("=G", (await $.call(C, "inttostr", [$.add(L0["w"], 7)]))), "/C"), (await $.call(C, "inttostr", [$.add(L0["w"], 7)])))); if ($t83 !== undefined) { await $.mset((await $.v(C, "Sheet")), "Cells", $t83); } }
    await $.mset((await $.mv((await $.idx((await $.mv((await $.v(C, "Sheet")), "Cells")), [$.add($.add(L0["w"], L0["k"]), 2), 9])), "Font")), "Bold", true);
    { const $t84 = await $.iset((await $.mv((await $.v(C, "Sheet")), "Cells")), [$.add($.add(L0["w"], L0["k"]), 2), 10], $.add($.add($.add("=H", (await $.call(C, "inttostr", [$.add(L0["w"], 7)]))), "/C"), (await $.call(C, "inttostr", [$.add(L0["w"], 7)])))); if ($t84 !== undefined) { await $.mset((await $.v(C, "Sheet")), "Cells", $t84); } }
    await $.mset((await $.mv((await $.idx((await $.mv((await $.v(C, "Sheet")), "Cells")), [$.add($.add(L0["w"], L0["k"]), 2), 10])), "Font")), "Bold", true);
    { const $t85 = await $.iset((await $.mv((await $.v(C, "Sheet")), "Cells")), [$.add($.add(L0["w"], L0["k"]), 2), 11], $.add($.add($.add($.add($.add("=(E", (await $.call(C, "inttostr", [$.add(L0["w"], 7)]))), "-F"), (await $.call(C, "inttostr", [$.add(L0["w"], 7)]))), ")/D"), (await $.call(C, "inttostr", [$.add(L0["w"], 7)])))); if ($t85 !== undefined) { await $.mset((await $.v(C, "Sheet")), "Cells", $t85); } }
    await $.mset((await $.mv((await $.idx((await $.mv((await $.v(C, "Sheet")), "Cells")), [$.add($.add(L0["w"], L0["k"]), 2), 11])), "Font")), "Bold", true);
    L0["bash"] = (await $.call(C, "inttostr", [$.add(L0["k"], 1)]));
    await $.mcall((await $.idx((await $.mv((await $.v(C, "Exl")), "Range")), [$.add($.add($.add("A", L0["bash"]), ":K"), (await $.call(C, "inttostr", [$.add($.add(L0["w"], L0["k"]), 1)])))])), "select", []);
    await $.mset((await $.mv((await $.idx((await $.mv((await $.v(C, "Sheet")), "Range")), [$.add($.add($.add("A", L0["bash"]), ":K"), (await $.call(C, "inttostr", [$.add($.add(L0["w"], L0["k"]), 1)])))])), "Borders")), "Color", (await $.v(C, "clBlack")));
    await $.mcall((await $.mv((await $.v(C, "main")), "Session")), "Commit", []);
  } finally {
    await $.mcall((await $.idx((await $.mv((await $.v(C, "Exl")), "Range")), ["A1:A1"])), "Select", []);
    await $.mset((await $.v(C, "Screen")), "Cursor", (await $.v(C, "crDefault")));
    await $.stmt($.call(C, "DestroySheet", []));
    await $.mcall((await $.v(C, "active")), "EnableControls", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.setInitialization(async function __initialization(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: undefined};
  await $.set(C, "FrmCoefficient", (await $.mcall((await $.v(C, "TFrmCoefficient")), "Create", [(await $.v(C, "Application"))])));
  return L0.result;
});
  return U;
}
