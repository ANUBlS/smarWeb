// Generated from cm_Payandshd_repimpl.pas by pas2js — do not edit by hand; regenerate instead.
/* eslint-disable */
// @ts-nocheck

export default function define($) {
  const U = $.unit("cm_Payandshd_repimpl", ["Windows", "Messages", "SysUtils", "Classes", "Graphics", "Controls", "Forms", "Dialogs", "Buttons", "Oracle", "Db", "OracleData", "StdCtrls", "CheckLst", "Evanescence", "ExtCtrls", "CMExcelExport", "Gauges", "ComCtrls", "CommonDecls", "systemstate", "CMOracleApiDataModuleImpl", "ComObj"]);
  const C = [U];
  U.defClass("TRepFrm", "TForm", {"oracledataset9": {"name": "OracleDataSet9", "type": "TOracleDataSet"}, "oracledataset10": {"name": "OracleDataSet10", "type": "TOracleDataSet"}, "oracledataset10month": {"name": "OracleDataSet10MONTH", "type": "TFloatField"}, "oracledataset11": {"name": "OracleDataSet11", "type": "TOracleDataSet"}, "oraclepackage1": {"name": "OraclePackage1", "type": "TOraclePackage"}, "oracledataset8": {"name": "OracleDataSet8", "type": "TOracleDataSet"}, "panel1": {"name": "Panel1", "type": "TPanel"}, "speedbutton1": {"name": "SpeedButton1", "type": "TSpeedButton"}, "speedbutton2": {"name": "SpeedButton2", "type": "TSpeedButton"}, "groupbox1": {"name": "GroupBox1", "type": "TGroupBox"}, "lookusrgrp": {"name": "LookUsrGrp", "type": "TEvanescence"}, "checkbox2": {"name": "CheckBox2", "type": "TCheckBox"}, "groupbox3": {"name": "GroupBox3", "type": "TGroupBox"}, "lookpersoneltype": {"name": "LookPersonelType", "type": "TEvanescence"}, "checkbox1": {"name": "CheckBox1", "type": "TCheckBox"}, "srcusrgrp": {"name": "srcUsrGrp", "type": "TDataSource"}, "usrgrpdataset": {"name": "UsrGrpDataSet", "type": "TOracleDataSet"}, "personeltypedataset": {"name": "PersonelTypeDataSet", "type": "TOracleDataSet"}, "srcpersoneltype": {"name": "srcPersonelType", "type": "TDataSource"}, "speedbutton3": {"name": "SpeedButton3", "type": "TSpeedButton"}, "oracledataset1": {"name": "OracleDataSet1", "type": "TOracleDataSet"}, "oracledataset1numberofcredit": {"name": "OracleDataSet1NUMBEROFCREDIT", "type": "TStringField"}, "oracledataset1description": {"name": "OracleDataSet1DESCRIPTION", "type": "TStringField"}, "oracledataset1name": {"name": "OracleDataSet1NAME", "type": "TStringField"}, "oracledataset1creditlineamount": {"name": "OracleDataSet1CREDITLINEAMOUNT", "type": "TFloatField"}, "oracledataset1newfinanceamount": {"name": "OracleDataSet1NEWFINANCEAMOUNT", "type": "TFloatField"}, "oracledataset1dateofconclusion": {"name": "OracleDataSet1DATEOFCONCLUSION", "type": "TDateTimeField"}, "oracledataset1duedatefirstcontract": {"name": "OracleDataSet1DUEDATEFIRSTCONTRACT", "type": "TDateTimeField"}, "oracledataset1dovr": {"name": "OracleDataSet1DOVR", "type": "TFloatField"}, "oracledataset1annualyinterestrate": {"name": "OracleDataSet1ANNUALYINTERESTRATE", "type": "TFloatField"}, "oracledataset1rest": {"name": "OracleDataSet1REST", "type": "TFloatField"}, "oracledataset1interestrest": {"name": "OracleDataSet1INTERESTREST", "type": "TFloatField"}, "oracledataset1annutiet": {"name": "OracleDataSet1ANNUTIET", "type": "TFloatField"}, "oracledataset1monthlyprofit": {"name": "OracleDataSet1MONTHLYPROFIT", "type": "TFloatField"}, "oracledataset1alevpredcost": {"name": "OracleDataSet1ALEVPREDCOST", "type": "TFloatField"}, "oracledataset1predcost": {"name": "OracleDataSet1PREDCOST", "type": "TFloatField"}, "oracledataset1krev": {"name": "OracleDataSet1krev", "type": "TFloatField"}, "oracledataset1krip": {"name": "OracleDataSet1krip", "type": "TFloatField"}, "oracledataset1anngelir": {"name": "OracleDataSet1anngelir", "type": "TFloatField"}, "excelexport": {"name": "ExcelExport", "type": "TCMExcelExport"}, "gauge1": {"name": "Gauge1", "type": "TGauge"}, "oracledataset1ymdate": {"name": "OracleDataSet1YMDATE", "type": "TDateTimeField"}, "oracledataset1annualbankrate": {"name": "OracleDataSet1ANNUALBANKRATE", "type": "TFloatField"}, "panel2": {"name": "Panel2", "type": "TPanel"}, "datetimepicker1": {"name": "DateTimePicker1", "type": "TDateTimePicker"}, "datetimepicker2": {"name": "DateTimePicker2", "type": "TDateTimePicker"}, "label1": {"name": "Label1", "type": "TLabel"}, "label2": {"name": "Label2", "type": "TLabel"}, "sysdat": {"name": "sysdat", "type": "TOracleDataSet"}, "oracledataset11dat": {"name": "OracleDataSet11DAT", "type": "TDateTimeField"}}, {});
  U.init(async () => {
    U.var_("RepFrm", null, "TRepFrm");
    U.var_("Exl", null, "Variant");
    U.var_("Sheet", null, "Variant");
  });
  U.func("InitPlugin", async function InitPlugin(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"s": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["s"]);
  await $.mcall((await $.v(C, "RepFrm")), "ShowModal", []);
  return L0.result;
}, {"params": ["s"], "kind": "procedure", "ptypes": ["String"]});
  U.method("TRepFrm", "SpeedButton1Click", async function SpeedButton1Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "s": 0, "l": 0, "cell": 0, "r": 0, "i": 0, "j": 0, "k": 0, "m": 0, "w": 0, "bdat": 0, "edat": 0, "tt": 0, "dat": 0, "dd": 0, "dy": 0, "dm": 0, "ddd": 0, "t_val": 0, "restsstr": '', "chpaystr": '', "additionalparams": '', "filterstr": '', "checkstr": ''};
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
  L0["bdat"] = (await $.call(C, "integer", [(await $.call(C, "trunc", [(await $.mv((await $.v(C, "DateTimePicker1")), "DateTime"))]))]));
  L0["edat"] = (await $.call(C, "integer", [(await $.call(C, "trunc", [(await $.mv((await $.v(C, "DateTimePicker2")), "DateTime"))]))]));
  {
    const $t4 = (await $.wobj(C, "OracleDataSet10"));
    if ($.truthy((await $.wv([$t4], "Active", C, false)))) {
      await $.stmt($.wcall([$t4], "CloseAll", [], C));
    }
    await $.stmt((await $.wcall([$t4], "SetVariable", ["bdat", (await $.wv([$t4], "bdat", { get: async () => L0["bdat"], set: async (v) => { L0["bdat"] = v; }, local: true }, false))], C)));
    await $.stmt((await $.wcall([$t4], "SetVariable", ["edat", (await $.wv([$t4], "edat", { get: async () => L0["edat"], set: async (v) => { L0["edat"] = v; }, local: true }, false))], C)));
    await $.stmt($.wcall([$t4], "open", [], C));
  }
  {
    const $t5 = (await $.wobj(C, "OracleDataSet11"));
    if ($.truthy((await $.wv([$t5], "Active", C, false)))) {
      await $.stmt($.wcall([$t5], "CloseAll", [], C));
    }
    await $.stmt((await $.wcall([$t5], "SetVariable", ["bdat", (await $.wv([$t5], "bdat", { get: async () => L0["bdat"], set: async (v) => { L0["bdat"] = v; }, local: true }, false))], C)));
    await $.stmt((await $.wcall([$t5], "SetVariable", ["edat", (await $.wv([$t5], "edat", { get: async () => L0["edat"], set: async (v) => { L0["edat"] = v; }, local: true }, false))], C)));
    await $.stmt($.wcall([$t5], "open", [], C));
  }
  await $.mset((await $.v(C, "Gauge1")), "Visible", true);
  L0["filterstr"] = "";
  L0["checkstr"] = "";
  L0["chpaystr"] = "";
  if ($.truthy((await $.and_(($.ne(L0["checkstr"], "")), async () => ($.ne(L0["filterstr"], "")))))) {
    L0["filterstr"] = $.add($.add(L0["filterstr"], " AND "), L0["checkstr"]);
  }
  if ($.truthy(($.ne((await $.mv((await $.mv((await $.v(C, "LookUsrGrp")), "GetCheckedKeyList")), "Count")), (await $.mv((await $.mv((await $.v(C, "LookUsrGrp")), "Items")), "Count")))))) {
    L0["additionalparams"] = $.add($.add($.add($.add(L0["additionalparams"], " and p.USRGROUP in("), (await $.mv((await $.mv((await $.v(C, "LookUsrGrp")), "GetCheckedKeyList")), "CommaText"))), ")"), "\r\n");
  }
  if ($.truthy(($.ne((await $.mv((await $.mv((await $.v(C, "LookPersonelType")), "GetCheckedKeyList")), "Count")), (await $.mv((await $.mv((await $.v(C, "LookPersonelType")), "Items")), "Count")))))) {
    L0["additionalparams"] = $.add($.add($.add($.add(L0["additionalparams"], " and p.CUSTOMERTYPE in("), (await $.mv((await $.mv((await $.v(C, "LookPersonelType")), "GetCheckedKeyList")), "CommaText"))), ")"), "\r\n");
  }
  {
    const $t6 = (await $.wobj(C, "OracleDataSet9"));
    if ($.truthy((await $.wv([$t6], "Active", C, false)))) {
      await $.stmt($.wcall([$t6], "CloseAll", [], C));
    }
    if ($.truthy($.ne((await $.wv([$t6], "ADDITIONALPARAMS", { get: async () => L0["additionalparams"], set: async (v) => { L0["additionalparams"] = v; }, local: true }, false)), ""))) {
      { const $t7 = await $.iset((await $.wv([$t6], "SQL", C, false)), [3], (await $.wv([$t6], "ADDITIONALPARAMS", { get: async () => L0["additionalparams"], set: async (v) => { L0["additionalparams"] = v; }, local: true }, false))); if ($t7 !== undefined) { await $.wset([$t6], "SQL", $t7, C); } }
    } else {
      { const $t8 = await $.iset((await $.wv([$t6], "SQL", C, false)), [3], ""); if ($t8 !== undefined) { await $.wset([$t6], "SQL", $t8, C); } }
    }
    await $.stmt($.wcall([$t6], "open", [], C));
  }
  await $.stmt($.callv(L0["createsheet"], []));
  try {
    await $.mset((await $.idx((await $.mv((await $.v(C, "Sheet")), "Range")), ["A1:A60000"])), "ColumnWidth", 20);
    L0["j"] = 0;
    L0["k"] = 0;
    L0["i"] = 0;
    L0["s"] = 1;
    { const $t9 = await $.iset((await $.mv((await $.v(C, "Sheet")), "Cells")), [$.add($.add(L0["i"], L0["k"]), 1), 1], "           Müqavilənin №"); if ($t9 !== undefined) { await $.mset((await $.v(C, "Sheet")), "Cells", $t9); } }
    await $.mset((await $.mv((await $.idx((await $.mv((await $.v(C, "Sheet")), "Cells")), [$.add($.add(L0["i"], L0["k"]), 1), 1])), "Font")), "Name", "Azl Sans Serif");
    await $.mset((await $.mv((await $.idx((await $.mv((await $.v(C, "Sheet")), "Cells")), [$.add($.add(L0["i"], L0["k"]), 1), 1])), "Font")), "Bold", true);
    await $.mset((await $.mv((await $.idx((await $.mv((await $.v(C, "Sheet")), "Cells")), [$.add($.add(L0["i"], L0["k"]), 1), 1])), "Font")), "Color", (await $.v(C, "clBlue")));
    { const $t10 = (await $.mv((await $.mcall((await $.v(C, "OracleDataSet10")), "FieldByName", ["month"])), "asinteger"));
      L0["i"] = 1;
      let $t11 = true;
      for (;;) {
        if (!$t11) { L0["i"] = $.succ(L0["i"], 1); }
        $t11 = false;
        if (!($.ord(L0["i"]) <= $.ord($t10))) break;
        await $.mset((await $.mv((await $.idx((await $.mv((await $.v(C, "Sheet")), "Cells")), [1, $.add(1, L0["s"])])), "Font")), "Name", "Azl Sans Serif");
        await $.mset((await $.mv((await $.idx((await $.mv((await $.v(C, "Sheet")), "Cells")), [1, $.add(1, L0["s"])])), "Font")), "Bold", true);
        { const $t12 = await $.iset((await $.mv((await $.v(C, "Sheet")), "Cells")), [1, $.add(1, L0["s"])], (await $.mv((await $.mcall((await $.v(C, "OracleDataSet10")), "FieldByName", ["month"])), "AsString"))); if ($t12 !== undefined) { await $.mset((await $.v(C, "Sheet")), "Cells", $t12); } }
        await $.mset((await $.idx((await $.mv((await $.v(C, "Sheet")), "Cells")), [1, $.add(1, L0["s"])])), "ColumnWidth", 15);
        L0["dat"] = ($.add((await $.mv((await $.mcall((await $.v(C, "OracleDataSet11")), "FieldByName", ["dat"])), "AsDateTime")), L0["j"]));
        { const $t13 = await $.iset((await $.mv((await $.v(C, "Sheet")), "Cells")), [1, $.add(1, L0["s"])], $.add(($.add($.add($.add($.add((await $.call(C, "FormatDateTime", ["01", L0["dat"]])), "-"), (await $.call(C, "FormatDateTime", ["MMM", L0["dat"]]))), "-"), (await $.call(C, "FormatDateTime", ["YYYY", L0["dat"]])))), "=>")); if ($t13 !== undefined) { await $.mset((await $.v(C, "Sheet")), "Cells", $t13); } }
        await $.mset((await $.mv((await $.idx((await $.mv((await $.v(C, "Sheet")), "Cells")), [1, $.add(2, L0["s"])])), "Font")), "Name", "Azl Sans Serif");
        await $.mset((await $.idx((await $.mv((await $.v(C, "Sheet")), "Cells")), [1, $.add(2, L0["s"])])), "ColumnWidth", 14);
        { const $t14 = await $.iset((await $.mv((await $.v(C, "Sheet")), "Cells")), [1, $.add(2, L0["s"])], "Ödəməli Ə.B "); if ($t14 !== undefined) { await $.mset((await $.v(C, "Sheet")), "Cells", $t14); } }
        await $.mset((await $.mv((await $.idx((await $.mv((await $.v(C, "Sheet")), "Cells")), [1, $.add(3, L0["s"])])), "Font")), "Name", "Azl Sans Serif");
        await $.mset((await $.idx((await $.mv((await $.v(C, "Sheet")), "Cells")), [1, $.add(3, L0["s"])])), "ColumnWidth", 14);
        { const $t15 = await $.iset((await $.mv((await $.v(C, "Sheet")), "Cells")), [1, $.add(3, L0["s"])], "Ödəməli F.B "); if ($t15 !== undefined) { await $.mset((await $.v(C, "Sheet")), "Cells", $t15); } }
        await $.mset((await $.mv((await $.idx((await $.mv((await $.v(C, "Sheet")), "Cells")), [1, $.add(4, L0["s"])])), "Font")), "Name", "Azl Sans Serif");
        await $.mset((await $.idx((await $.mv((await $.v(C, "Sheet")), "Cells")), [1, $.add(4, L0["s"])])), "ColumnWidth", 20);
        { const $t16 = await $.iset((await $.mv((await $.v(C, "Sheet")), "Cells")), [1, $.add(4, L0["s"])], "Cəmi ödənilməlidir F.B |"); if ($t16 !== undefined) { await $.mset((await $.v(C, "Sheet")), "Cells", $t16); } }
        await $.mset((await $.mv((await $.idx((await $.mv((await $.v(C, "Sheet")), "Cells")), [1, $.add(5, L0["s"])])), "Font")), "Name", "Azl Sans Serif");
        await $.mset((await $.idx((await $.mv((await $.v(C, "Sheet")), "Cells")), [1, $.add(5, L0["s"])])), "ColumnWidth", 14);
        { const $t17 = await $.iset((await $.mv((await $.v(C, "Sheet")), "Cells")), [1, $.add(5, L0["s"])], "Ödəməlmiş Ə.B "); if ($t17 !== undefined) { await $.mset((await $.v(C, "Sheet")), "Cells", $t17); } }
        await $.mset((await $.mv((await $.idx((await $.mv((await $.v(C, "Sheet")), "Cells")), [1, $.add(6, L0["s"])])), "Font")), "Name", "Azl Sans Serif");
        await $.mset((await $.idx((await $.mv((await $.v(C, "Sheet")), "Cells")), [1, $.add(6, L0["s"])])), "ColumnWidth", 14);
        { const $t18 = await $.iset((await $.mv((await $.v(C, "Sheet")), "Cells")), [1, $.add(6, L0["s"])], "Ödəməlmiş F.B "); if ($t18 !== undefined) { await $.mset((await $.v(C, "Sheet")), "Cells", $t18); } }
        await $.mset((await $.mv((await $.idx((await $.mv((await $.v(C, "Sheet")), "Cells")), [1, $.add(7, L0["s"])])), "Font")), "Name", "Azl Sans Serif");
        await $.mset((await $.idx((await $.mv((await $.v(C, "Sheet")), "Cells")), [1, $.add(7, L0["s"])])), "ColumnWidth", 20);
        { const $t19 = await $.iset((await $.mv((await $.v(C, "Sheet")), "Cells")), [1, $.add(7, L0["s"])], "Cəmi ödənilmişdir F.B |"); if ($t19 !== undefined) { await $.mset((await $.v(C, "Sheet")), "Cells", $t19); } }
        L0["s"] = $.add(L0["s"], 7);
        L0["j"] = $.add(L0["j"], 31);
        await $.tick();
      }
    }
    { const $t20 = (await $.mv((await $.v(C, "OracleDataSet9")), "RecordCount"));
      L0["r"] = 1;
      let $t21 = true;
      for (;;) {
        if (!$t21) { L0["r"] = $.succ(L0["r"], 1); }
        $t21 = false;
        if (!($.ord(L0["r"]) <= $.ord($t20))) break;
        { const $t22 = await $.iset((await $.mv((await $.v(C, "Sheet")), "Cells")), [$.add(L0["r"], 1), 1], (await $.mv((await $.mcall((await $.v(C, "OracleDataSet9")), "fieldbyname", ["numberofcredit"])), "asstring"))); if ($t22 !== undefined) { await $.mset((await $.v(C, "Sheet")), "Cells", $t22); } }
        await $.mset((await $.mv((await $.idx((await $.mv((await $.v(C, "Sheet")), "Cells")), [$.add(L0["r"], 1), 1])), "Font")), "Name", "Azl Sans Serif");
        await $.mset((await $.mv((await $.idx((await $.mv((await $.v(C, "Sheet")), "Cells")), [$.add(L0["r"], 1), 1])), "Font")), "Bold", true);
        await $.mset((await $.mv((await $.idx((await $.mv((await $.v(C, "Sheet")), "Cells")), [$.add(L0["r"], 1), 1])), "Font")), "Color", (await $.v(C, "clBlue")));
        L0["s"] = 1;
        L0["j"] = 0;
        { const $t23 = (await $.mv((await $.mcall((await $.v(C, "OracleDataSet10")), "FieldByName", ["month"])), "asinteger"));
          L0["l"] = 1;
          let $t24 = true;
          for (;;) {
            if (!$t24) { L0["l"] = $.succ(L0["l"], 1); }
            $t24 = false;
            if (!($.ord(L0["l"]) <= $.ord($t23))) break;
            L0["tt"] = ($.add((await $.mv((await $.mcall((await $.v(C, "OracleDataSet11")), "FieldByName", ["dat"])), "AsDateTime")), L0["j"]));
            await $.stmt((await $.call(C, "DecodeDate", [L0["tt"], $.ref(async () => L0["dy"], async ($t25) => { L0["dy"] = $t25; }), $.ref(async () => L0["dm"], async ($t26) => { L0["dm"] = $t26; }), $.ref(async () => L0["ddd"], async ($t27) => { L0["ddd"] = $t27; })])));
            if ($.truthy($.eq($.sub(L0["dm"], 1), 0))) {
              L0["dm"] = 12;
              L0["dy"] = L0["dy"];
            } else {
              L0["dm"] = L0["dm"];
            }
            L0["dd"] = (await $.call(C, "EncodeDate", [L0["dy"], L0["dm"], 1]));
            await $.mset((await $.mv((await $.idx((await $.mv((await $.v(C, "Sheet")), "Cells")), [$.add(1, L0["r"]), $.add(1, L0["s"])])), "Font")), "Name", "Azl Sans Serif");
            await $.mset((await $.mv((await $.idx((await $.mv((await $.v(C, "Sheet")), "Cells")), [$.add(1, L0["r"]), $.add(1, L0["s"])])), "Font")), "Bold", true);
            await $.mset((await $.mv((await $.idx((await $.mv((await $.v(C, "Sheet")), "Cells")), [$.add(1, L0["r"]), $.add(1, L0["s"])])), "Font")), "Color", (await $.v(C, "clRed")));
            { const $t28 = await $.iset((await $.mv((await $.v(C, "Sheet")), "Cells")), [$.add(1, L0["r"]), $.add(1, L0["s"])], "           --   "); if ($t28 !== undefined) { await $.mset((await $.v(C, "Sheet")), "Cells", $t28); } }
            await $.mset((await $.mv((await $.idx((await $.mv((await $.v(C, "Sheet")), "Cells")), [$.add(1, L0["r"]), $.add(2, L0["s"])])), "Font")), "Name", "Azl Sans Serif");
            await $.mset((await $.idx((await $.mv((await $.v(C, "Sheet")), "Cells")), [$.add(1, L0["r"]), $.add(2, L0["s"])])), "ColumnWidth", 14);
            { const $t29 = await $.iset((await $.mv((await $.v(C, "Sheet")), "Cells")), [$.add(1, L0["r"]), $.add(2, L0["s"])], (await $.mcall((await $.v(C, "OraclePackage1")), "CallFloatFunction", ["get_PRINCIPAL", [(await $.mv((await $.mcall((await $.v(C, "OracleDataSet9")), "FieldByName", ["ID"])), "AsInteger")), L0["dd"]]]))); if ($t29 !== undefined) { await $.mset((await $.v(C, "Sheet")), "Cells", $t29); } }
            await $.mset((await $.mv((await $.idx((await $.mv((await $.v(C, "Sheet")), "Cells")), [$.add(1, L0["r"]), $.add(3, L0["s"])])), "Font")), "Name", "Azl Sans Serif");
            { const $t30 = await $.iset((await $.mv((await $.v(C, "Sheet")), "Cells")), [$.add(1, L0["r"]), $.add(3, L0["s"])], (await $.mcall((await $.v(C, "OraclePackage1")), "CallFloatFunction", ["get_she_int", [(await $.mv((await $.mcall((await $.v(C, "OracleDataSet9")), "FieldByName", ["ID"])), "AsInteger")), L0["dd"]]]))); if ($t30 !== undefined) { await $.mset((await $.v(C, "Sheet")), "Cells", $t30); } }
            await $.mset((await $.mv((await $.idx((await $.mv((await $.v(C, "Sheet")), "Cells")), [$.add(1, L0["r"]), $.add(4, L0["s"])])), "Font")), "Name", "Azl Sans Serif");
            { const $t31 = await $.iset((await $.mv((await $.v(C, "Sheet")), "Cells")), [$.add(1, L0["r"]), $.add(4, L0["s"])], $.add((await $.mcall((await $.v(C, "OraclePackage1")), "CallFloatFunction", ["get_PRINCIPAL", [(await $.mv((await $.mcall((await $.v(C, "OracleDataSet9")), "FieldByName", ["ID"])), "AsInteger")), L0["dd"]]])), (await $.mcall((await $.v(C, "OraclePackage1")), "CallFloatFunction", ["get_she_int", [(await $.mv((await $.mcall((await $.v(C, "OracleDataSet9")), "FieldByName", ["ID"])), "AsInteger")), L0["dd"]]])))); if ($t31 !== undefined) { await $.mset((await $.v(C, "Sheet")), "Cells", $t31); } }
            await $.mset((await $.mv((await $.idx((await $.mv((await $.v(C, "Sheet")), "Cells")), [$.add(1, L0["r"]), $.add(5, L0["s"])])), "Font")), "Name", "Azl Sans Serif");
            { const $t32 = await $.iset((await $.mv((await $.v(C, "Sheet")), "Cells")), [$.add(1, L0["r"]), $.add(5, L0["s"])], (await $.mcall((await $.v(C, "OraclePackage1")), "CallFloatFunction", ["get_Payrest", [(await $.mv((await $.mcall((await $.v(C, "OracleDataSet9")), "FieldByName", ["ID"])), "AsInteger")), L0["dd"]]]))); if ($t32 !== undefined) { await $.mset((await $.v(C, "Sheet")), "Cells", $t32); } }
            await $.mset((await $.mv((await $.idx((await $.mv((await $.v(C, "Sheet")), "Cells")), [$.add(1, L0["r"]), $.add(6, L0["s"])])), "Font")), "Name", "Azl Sans Serif");
            { const $t33 = await $.iset((await $.mv((await $.v(C, "Sheet")), "Cells")), [$.add(1, L0["r"]), $.add(6, L0["s"])], (await $.mcall((await $.v(C, "OraclePackage1")), "CallFloatFunction", ["get_PayInt", [(await $.mv((await $.mcall((await $.v(C, "OracleDataSet9")), "FieldByName", ["ID"])), "AsInteger")), L0["dd"]]]))); if ($t33 !== undefined) { await $.mset((await $.v(C, "Sheet")), "Cells", $t33); } }
            await $.mset((await $.mv((await $.idx((await $.mv((await $.v(C, "Sheet")), "Cells")), [$.add(1, L0["r"]), $.add(7, L0["s"])])), "Font")), "Name", "Azl Sans Serif");
            { const $t34 = await $.iset((await $.mv((await $.v(C, "Sheet")), "Cells")), [$.add(1, L0["r"]), $.add(7, L0["s"])], $.add((await $.mcall((await $.v(C, "OraclePackage1")), "CallFloatFunction", ["get_Payrest", [(await $.mv((await $.mcall((await $.v(C, "OracleDataSet9")), "FieldByName", ["ID"])), "AsInteger")), L0["dd"]]])), (await $.mcall((await $.v(C, "OraclePackage1")), "CallFloatFunction", ["get_PayInt", [(await $.mv((await $.mcall((await $.v(C, "OracleDataSet9")), "FieldByName", ["ID"])), "AsInteger")), L0["dd"]]])))); if ($t34 !== undefined) { await $.mset((await $.v(C, "Sheet")), "Cells", $t34); } }
            L0["s"] = $.add(L0["s"], 7);
            L0["j"] = $.add(L0["j"], 31);
            await $.tick();
          }
        }
        await $.mset((await $.v(C, "Gauge1")), "Progress", (await $.call(C, "trunc", [$.fdiv($.mul(L0["r"], 100), (await $.mv((await $.v(C, "OracleDataSet9")), "RecordCount")))])));
        await $.mcall((await $.v(C, "OracleDataSet9")), "next", []);
        await $.tick();
      }
    }
    await $.mset((await $.v(C, "Gauge1")), "Visible", false);
    await $.stmt($.callv(L0["showsheet"], []));
  } finally {
    await $.mcall((await $.idx((await $.mv((await $.v(C, "Exl")), "Range")), ["A1:A1"])), "Select", []);
    await $.mset((await $.v(C, "Screen")), "Cursor", (await $.v(C, "crDefault")));
    await $.stmt($.callv(L0["destroysheet"], []));
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TRepFrm", "FormCreate", async function FormCreate(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "i": 0};
  await $.fixArgs(L0, ["sender"]);
  { const $t35 = $.sub((await $.v(C, "ComponentCount")), 1);
    L0["i"] = 0;
    let $t36 = true;
    for (;;) {
      if (!$t36) { L0["i"] = $.succ(L0["i"], 1); }
      $t36 = false;
      if (!($.ord(L0["i"]) <= $.ord($t35))) break;
      if ($.truthy($.eq((await $.mv((await $.idx((await $.v(C, "Components")), [L0["i"]])), "Tag")), 3112))) {
        await $.mcall((await $.idx((await $.v(C, "Components")), [L0["i"]])), "Open", []);
        await $.mcall((await $.idx((await $.v(C, "Components")), [L0["i"]])), "CheckAll", []);
      }
      await $.tick();
    }
  }
  await $.mcall((await $.v(C, "UsrGrpDataSet")), "open", []);
  await $.mcall((await $.v(C, "PersonelTypeDataSet")), "open", []);
  await $.mcall((await $.v(C, "OracleDataSet8")), "open", []);
  await $.mcall((await $.v(C, "sysdat")), "open", []);
  await $.mset((await $.v(C, "DateTimePicker1")), "DateTime", (await $.mv((await $.mcall((await $.v(C, "sysdat")), "fieldbyname", ["tek_dat"])), "AsDateTime")));
  await $.mset((await $.v(C, "DateTimePicker2")), "DateTime", (await $.mv((await $.mcall((await $.v(C, "sysdat")), "fieldbyname", ["tek_dat"])), "AsDateTime")));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TRepFrm", "SpeedButton2Click", async function SpeedButton2Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.stmt($.call(C, "close", []));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TRepFrm", "FormShow", async function FormShow(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "i": 0};
  await $.fixArgs(L0, ["sender"]);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TRepFrm", "CheckBox2Click", async function CheckBox2Click(Self, p0) {
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
  U.method("TRepFrm", "CheckBox1Click", async function CheckBox1Click(Self, p0) {
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
  U.method("TRepFrm", "OracleDataSet1CalcFields", async function OracleDataSet1CalcFields(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"dataset": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["dataset"]);
  L0["number_format"] = "0.0000";
  if ($.truthy($.eq((await $.mv((await $.mcall((await $.v(C, "OracleDataSet1")), "FieldByName", ["alevpredcost"])), "asFloat")), 0))) {
    await $.mset((await $.mcall((await $.v(C, "OracleDataSet1")), "FieldByName", ["kr/ev"])), "asFloat", 0);
  } else {
    await $.mset((await $.mcall((await $.v(C, "OracleDataSet1")), "FieldByName", ["kr/ev"])), "asFloat", (await $.call(C, "StrToFloat", [(await $.call(C, "FormatFloat", [L0["number_format"], $.fdiv((await $.mv((await $.mcall((await $.v(C, "OracleDataSet1")), "FieldByName", ["NEWFINANCEAMOUNT"])), "asFloat")), (await $.mv((await $.mcall((await $.v(C, "OracleDataSet1")), "FieldByName", ["alevpredcost"])), "asfloat")))]))])));
  }
  if ($.truthy($.eq((await $.mv((await $.mcall((await $.v(C, "OracleDataSet1")), "FieldByName", ["predcost"])), "asFloat")), 0))) {
    await $.mset((await $.mcall((await $.v(C, "OracleDataSet1")), "FieldByName", ["kr/ip"])), "asFloat", 0);
  } else {
    await $.mset((await $.mcall((await $.v(C, "OracleDataSet1")), "FieldByName", ["kr/ip"])), "asFloat", (await $.call(C, "StrToFloat", [(await $.call(C, "FormatFloat", [L0["number_format"], $.fdiv((await $.mv((await $.mcall((await $.v(C, "OracleDataSet1")), "FieldByName", ["NEWFINANCEAMOUNT"])), "asFloat")), (await $.mv((await $.mcall((await $.v(C, "OracleDataSet1")), "FieldByName", ["predcost"])), "asFloat")))]))])));
  }
  if ($.truthy($.eq((await $.mv((await $.mcall((await $.v(C, "OracleDataSet1")), "FieldByName", ["MONTHLYPROFIT"])), "asFloat")), 0))) {
    await $.mset((await $.mcall((await $.v(C, "OracleDataSet1")), "FieldByName", ["ann/gelir"])), "asFloat", 0);
  } else {
    await $.mset((await $.mcall((await $.v(C, "OracleDataSet1")), "FieldByName", ["ann/gelir"])), "asFloat", (await $.call(C, "StrToFloat", [(await $.call(C, "FormatFloat", [L0["number_format"], $.fdiv((await $.mv((await $.mcall((await $.v(C, "OracleDataSet1")), "FieldByName", ["ANNUTIET"])), "asFloat")), (await $.mv((await $.mcall((await $.v(C, "OracleDataSet1")), "FieldByName", ["MONTHLYPROFIT"])), "asFloat")))]))])));
  }
  return L0.result;
}, {"params": ["DataSet"], "kind": "procedure", "ptypes": ["TDataSet"]});
  U.method("TRepFrm", "SpeedButton3Click", async function SpeedButton3Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "restsstr": '', "chpaystr": '', "additionalparams": '', "filterstr": '', "checkstr": ''};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy(($.ne((await $.mv((await $.mv((await $.v(C, "LookUsrGrp")), "GetCheckedKeyList")), "Count")), (await $.mv((await $.mv((await $.v(C, "LookUsrGrp")), "Items")), "Count")))))) {
    L0["additionalparams"] = $.add($.add($.add($.add(L0["additionalparams"], " and p.USRGROUP in("), (await $.mv((await $.mv((await $.v(C, "LookUsrGrp")), "GetCheckedKeyList")), "CommaText"))), ")"), "\r\n");
  }
  if ($.truthy(($.ne((await $.mv((await $.mv((await $.v(C, "LookPersonelType")), "GetCheckedKeyList")), "Count")), (await $.mv((await $.mv((await $.v(C, "LookPersonelType")), "Items")), "Count")))))) {
    L0["additionalparams"] = $.add($.add($.add($.add(L0["additionalparams"], " and p.CUSTOMERTYPE in("), (await $.mv((await $.mv((await $.v(C, "LookPersonelType")), "GetCheckedKeyList")), "CommaText"))), ")"), "\r\n");
  }
  {
    const $t37 = (await $.wobj(C, "OracleDataSet1"));
    if ($.truthy((await $.wv([$t37], "Active", C, false)))) {
      await $.stmt($.wcall([$t37], "CloseAll", [], C));
    }
    if ($.truthy($.ne((await $.wv([$t37], "ADDITIONALPARAMS", { get: async () => L0["additionalparams"], set: async (v) => { L0["additionalparams"] = v; }, local: true }, false)), ""))) {
      { const $t38 = await $.iset((await $.wv([$t37], "SQL", C, false)), [13], (await $.wv([$t37], "ADDITIONALPARAMS", { get: async () => L0["additionalparams"], set: async (v) => { L0["additionalparams"] = v; }, local: true }, false))); if ($t38 !== undefined) { await $.wset([$t37], "SQL", $t38, C); } }
    } else {
      { const $t39 = await $.iset((await $.wv([$t37], "SQL", C, false)), [13], ""); if ($t39 !== undefined) { await $.wset([$t37], "SQL", $t39, C); } }
    }
    await $.stmt($.wcall([$t37], "open", [], C));
  }
  {
    const $t40 = (await $.wobj(C, "ExcelExport"));
    await $.stmt($.wcall([$t40], "Connect", [], C));
    await $.stmt((await $.wcall([$t40], "ExportDataset", [(await $.wv([$t40], "OracleDataSet1", C, false)), "------------", (await $.wv([$t40], "True", C, false)), (await $.wv([$t40], "false", C, false))], C)));
    await $.stmt($.wcall([$t40], "Disconnect", [], C));
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TRepFrm", "FormDestroy", async function FormDestroy(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mcall((await $.v(C, "UsrGrpDataSet")), "close", []);
  await $.mcall((await $.v(C, "PersonelTypeDataSet")), "close", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.setInitialization(async function __initialization(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: undefined};
  await $.set(C, "RepFrm", (await $.mcall((await $.v(C, "TRepFrm")), "Create", [(await $.v(C, "CommonApplication"))])));
  return L0.result;
});
  return U;
}
