// Generated from FrmMsgImpl.pas by pas2js — do not edit by hand; regenerate instead.
/* eslint-disable */
// @ts-nocheck

export default function define($) {
  const U = $.unit("FrmMsgImpl", ["Windows", "Messages", "SysUtils", "Classes", "Graphics", "Controls", "Forms", "Dialogs", "Db", "OracleData", "NLSLocalizer", "DBCtrls", "StdCtrls", "CheckLst", "Evanescence", "ComCtrls", "Buttons", "ExtCtrls", "CMExcelExport", "CommonDecls", "systemstate", "CMOracleApiDataModuleImpl", "Mesage"]);
  const C = [U];
  U.defClass("TFrmMsg", "TForm", {"panel1": {"name": "Panel1", "type": "TPanel"}, "speedbutton1": {"name": "SpeedButton1", "type": "TSpeedButton"}, "speedbutton2": {"name": "SpeedButton2", "type": "TSpeedButton"}, "groupbox6": {"name": "GroupBox6", "type": "TGroupBox"}, "cbavalute": {"name": "CBaValute", "type": "TCheckBox"}, "datetimepicker1": {"name": "DateTimePicker1", "type": "TDateTimePicker"}, "groupbox1": {"name": "GroupBox1", "type": "TGroupBox"}, "lookusrgrp": {"name": "LookUsrGrp", "type": "TEvanescence"}, "checkbox2": {"name": "CheckBox2", "type": "TCheckBox"}, "groupbox2": {"name": "GroupBox2", "type": "TGroupBox"}, "cbpersons": {"name": "CBPersons", "type": "TCheckBox"}, "lcbpersons": {"name": "LCBPersons", "type": "TDBLookupComboBox"}, "groupbox3": {"name": "GroupBox3", "type": "TGroupBox"}, "lookpersoneltype": {"name": "LookPersonelType", "type": "TEvanescence"}, "checkbox1": {"name": "CheckBox1", "type": "TCheckBox"}, "srcusrgrp": {"name": "srcUsrGrp", "type": "TDataSource"}, "nlslocalizer1": {"name": "NLSLocalizer1", "type": "TNLSLocalizer"}, "usrgrpdataset": {"name": "UsrGrpDataSet", "type": "TOracleDataSet"}, "personeltypedataset": {"name": "PersonelTypeDataSet", "type": "TOracleDataSet"}, "persontypes": {"name": "PersonTypes", "type": "TOracleDataSet"}, "datasrcpersontypes": {"name": "DataSrcPersonTypes", "type": "TDataSource"}, "srcpersoneltype": {"name": "srcPersonelType", "type": "TDataSource"}, "oracledataset1": {"name": "OracleDataSet1", "type": "TOracleDataSet"}, "stringfield1": {"name": "StringField1", "type": "TStringField"}, "stringfield2": {"name": "StringField2", "type": "TStringField"}, "floatfield1": {"name": "FloatField1", "type": "TFloatField"}, "floatfield2": {"name": "FloatField2", "type": "TFloatField"}, "stringfield3": {"name": "StringField3", "type": "TStringField"}, "datetimefield1": {"name": "DateTimeField1", "type": "TDateTimeField"}, "stringfield4": {"name": "StringField4", "type": "TStringField"}, "stringfield5": {"name": "StringField5", "type": "TStringField"}, "datetimefield2": {"name": "DateTimeField2", "type": "TDateTimeField"}, "oracledataset2": {"name": "OracleDataSet2", "type": "TOracleDataSet"}, "oracledataset2description": {"name": "OracleDataSet2DESCRIPTION", "type": "TStringField"}, "oracledataset2name": {"name": "OracleDataSet2NAME", "type": "TStringField"}, "oracledataset2creditlineamount": {"name": "OracleDataSet2CREDITLINEAMOUNT", "type": "TFloatField"}, "oracledataset2period": {"name": "OracleDataSet2PERIOD", "type": "TFloatField"}, "oracledataset2numberofcredit": {"name": "OracleDataSet2NUMBEROFCREDIT", "type": "TStringField"}, "oracledataset2dateofconclusion": {"name": "OracleDataSet2DATEOFCONCLUSION", "type": "TDateTimeField"}, "oracledataset2in_description": {"name": "OracleDataSet2IN_DESCRIPTION", "type": "TStringField"}, "oracledataset2insuranceno": {"name": "OracleDataSet2INSURANCENO", "type": "TStringField"}, "oracledataset2insurancedate": {"name": "OracleDataSet2INSURANCEDATE", "type": "TDateTimeField"}, "excelexport": {"name": "ExcelExport", "type": "TCMExcelExport"}, "oracledataset3": {"name": "OracleDataSet3", "type": "TOracleDataSet"}, "oracledataset1tek_dat": {"name": "OracleDataSet1TEK_DAT", "type": "TDateTimeField"}, "oracledataset4": {"name": "OracleDataSet4", "type": "TOracleDataSet"}, "oracledataset5": {"name": "OracleDataSet5", "type": "TOracleDataSet"}, "oracledataset6": {"name": "OracleDataSet6", "type": "TOracleDataSet"}, "oracledataset7": {"name": "OracleDataSet7", "type": "TOracleDataSet"}, "oracledataset1dd": {"name": "OracleDataSet1DD", "type": "TFloatField"}, "oracledataset1dsdesigner": {"name": "OracleDataSet1DSDesigner", "type": "TFloatField"}, "oracledataset2dsdesigner": {"name": "OracleDataSet2DSDesigner", "type": "TStringField"}, "oracledataset2dsdesigner2": {"name": "OracleDataSet2DSDesigner2", "type": "TDateTimeField"}, "oracledataset2dsdesigner3": {"name": "OracleDataSet2DSDesigner3", "type": "TFloatField"}, "oracledataset2dsdesigner4": {"name": "OracleDataSet2DSDesigner4", "type": "TDateTimeField"}, "oracledataset2dsdesigner5": {"name": "OracleDataSet2DSDesigner5", "type": "TStringField"}, "oracledataset1dsdesigner2": {"name": "OracleDataSet1DSDesigner2", "type": "TStringField"}, "oracledataset1dsdesigner3": {"name": "OracleDataSet1DSDesigner3", "type": "TStringField"}, "oracledataset1dsdesigner4": {"name": "OracleDataSet1DSDesigner4", "type": "TDateTimeField"}, "oracledataset1dsdesigner5": {"name": "OracleDataSet1DSDesigner5", "type": "TFloatField"}, "oracledataset1dsdesigner6": {"name": "OracleDataSet1DSDesigner6", "type": "TDateTimeField"}, "oracledataset1dsdesigner7": {"name": "OracleDataSet1DSDesigner7", "type": "TStringField"}}, {});
  U.init(async () => {
    U.const("rsErrorUsrGrp", "Ən azı bir istifadəçi qrupu seçilməlidir!");
    U.const("rsErrorPersonaltype", "Ən azı bir müştəri tipi seçilməlidir!");
    U.const("rsInfScriptStarted", "Hesabat alınır ");
    U.const("rsPleaseWait", "Zəhmət olmasa bir az gözləyin!  ");
    U.const("rsInfRowsExported", "%d sətir ixrac olundu");
    U.const("rsInfExportFinished", "İxrac qurtardı");
    U.var_("FrmMsg", null, "TFrmMsg");
  });
  U.method("TFrmMsg", "FormCreate", async function FormCreate(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mcall((await $.v(C, "OracleDataSet3")), "open", []);
  await $.mcall((await $.v(C, "PersonTypes")), "open", []);
  await $.mcall((await $.v(C, "UsrGrpDataSet")), "open", []);
  await $.mcall((await $.v(C, "PersonelTypeDataSet")), "open", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFrmMsg", "FormShow", async function FormShow(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "i": 0};
  await $.fixArgs(L0, ["sender"]);
  await $.mset((await $.v(C, "DateTimePicker1")), "DateTime", (await $.mv((await $.mcall((await $.v(C, "OracleDataSet3")), "fieldbyname", ["tek_dat"])), "asdatetime")));
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
  U.method("TFrmMsg", "BuildFilterString", async function BuildFilterString(Self) {
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
  U.method("TFrmMsg", "SpeedButton1Click", async function SpeedButton1Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "dat": 0, "restsstr": '', "chpaystr": '', "additionalparams": '', "filterstr": '', "checkstr": ''};
  await $.fixArgs(L0, ["sender"]);
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
    L0["additionalparams"] = $.add($.add($.add($.add(L0["additionalparams"], " AND p.USRGROUP in("), (await $.mv((await $.mv((await $.v(C, "LookUsrGrp")), "GetCheckedKeyList")), "CommaText"))), ")"), "\r\n");
  }
  if ($.truthy(($.ne((await $.mv((await $.mv((await $.v(C, "LookPersonelType")), "GetCheckedKeyList")), "Count")), (await $.mv((await $.mv((await $.v(C, "LookPersonelType")), "Items")), "Count")))))) {
    L0["additionalparams"] = $.add($.add($.add($.add(L0["additionalparams"], " AND p.CUSTOMERTYPE in("), (await $.mv((await $.mv((await $.v(C, "LookPersonelType")), "GetCheckedKeyList")), "CommaText"))), ")"), "\r\n");
  }
  if ($.truthy($.ne(L0["restsstr"], ""))) {
    L0["additionalparams"] = $.add($.add(L0["additionalparams"], " and "), L0["restsstr"]);
  }
  await $.stmt((await $.call(C, "LogInformation", [(await $.v(C, "rsInfScriptStarted"))])));
  {
    const $t4 = (await $.wobj(C, "OracleDataSet1"));
    if ($.truthy((await $.wv([$t4], "Active", C, false)))) {
      await $.stmt($.wcall([$t4], "CloseAll", [], C));
    }
    await $.stmt((await $.wcall([$t4], "SetVariable", ["dat", (await $.wv([$t4], "dat", { get: async () => L0["dat"], set: async (v) => { L0["dat"] = v; }, local: true }, false))], C)));
    if ($.truthy($.ne((await $.wv([$t4], "BuildFilterString", C, false)), ""))) {
      await $.wset([$t4], "FilterStr", $.add(" and ", (await $.wv([$t4], "BuildFilterString", C, false))), { get: async () => L0["filterstr"], set: async (v) => { L0["filterstr"] = v; }, local: true });
      { const $t5 = await $.iset((await $.wv([$t4], "SQL", C, false)), [25], (await $.wv([$t4], "FilterStr", { get: async () => L0["filterstr"], set: async (v) => { L0["filterstr"] = v; }, local: true }, false))); if ($t5 !== undefined) { await $.wset([$t4], "SQL", $t5, C); } }
    } else {
      { const $t6 = await $.iset((await $.wv([$t4], "SQL", C, false)), [25], ""); if ($t6 !== undefined) { await $.wset([$t4], "SQL", $t6, C); } }
    }
    if ($.truthy($.ne((await $.wv([$t4], "ADDITIONALPARAMS", { get: async () => L0["additionalparams"], set: async (v) => { L0["additionalparams"] = v; }, local: true }, false)), ""))) {
      { const $t7 = await $.iset((await $.wv([$t4], "SQL", C, false)), [26], (await $.wv([$t4], "ADDITIONALPARAMS", { get: async () => L0["additionalparams"], set: async (v) => { L0["additionalparams"] = v; }, local: true }, false))); if ($t7 !== undefined) { await $.wset([$t4], "SQL", $t7, C); } }
    } else {
      { const $t8 = await $.iset((await $.wv([$t4], "SQL", C, false)), [26], ""); if ($t8 !== undefined) { await $.wset([$t4], "SQL", $t8, C); } }
    }
    await $.stmt($.wcall([$t4], "open", [], C));
  }
  {
    const $t9 = (await $.wobj(C, "OracleDataSet2"));
    if ($.truthy((await $.wv([$t9], "Active", C, false)))) {
      await $.stmt($.wcall([$t9], "CloseAll", [], C));
    }
    if ($.truthy($.ne((await $.wv([$t9], "BuildFilterString", C, false)), ""))) {
      await $.wset([$t9], "FilterStr", $.add(" and ", (await $.wv([$t9], "BuildFilterString", C, false))), { get: async () => L0["filterstr"], set: async (v) => { L0["filterstr"] = v; }, local: true });
      { const $t10 = await $.iset((await $.wv([$t9], "SQL", C, false)), [36], (await $.wv([$t9], "FilterStr", { get: async () => L0["filterstr"], set: async (v) => { L0["filterstr"] = v; }, local: true }, false))); if ($t10 !== undefined) { await $.wset([$t9], "SQL", $t10, C); } }
    } else {
      { const $t11 = await $.iset((await $.wv([$t9], "SQL", C, false)), [36], ""); if ($t11 !== undefined) { await $.wset([$t9], "SQL", $t11, C); } }
    }
    if ($.truthy($.ne((await $.wv([$t9], "ADDITIONALPARAMS", { get: async () => L0["additionalparams"], set: async (v) => { L0["additionalparams"] = v; }, local: true }, false)), ""))) {
      { const $t12 = await $.iset((await $.wv([$t9], "SQL", C, false)), [37], (await $.wv([$t9], "ADDITIONALPARAMS", { get: async () => L0["additionalparams"], set: async (v) => { L0["additionalparams"] = v; }, local: true }, false))); if ($t12 !== undefined) { await $.wset([$t9], "SQL", $t12, C); } }
    } else {
      { const $t13 = await $.iset((await $.wv([$t9], "SQL", C, false)), [37], ""); if ($t13 !== undefined) { await $.wset([$t9], "SQL", $t13, C); } }
    }
    await $.stmt($.wcall([$t9], "open", [], C));
  }
  {
    const $t14 = (await $.wobj(C, "OracleDataSet4"));
    if ($.truthy((await $.wv([$t14], "Active", C, false)))) {
      await $.stmt($.wcall([$t14], "CloseAll", [], C));
    }
    if ($.truthy($.ne((await $.wv([$t14], "BuildFilterString", C, false)), ""))) {
      await $.wset([$t14], "FilterStr", $.add(" and ", (await $.wv([$t14], "BuildFilterString", C, false))), { get: async () => L0["filterstr"], set: async (v) => { L0["filterstr"] = v; }, local: true });
      { const $t15 = await $.iset((await $.wv([$t14], "SQL", C, false)), [27], (await $.wv([$t14], "FilterStr", { get: async () => L0["filterstr"], set: async (v) => { L0["filterstr"] = v; }, local: true }, false))); if ($t15 !== undefined) { await $.wset([$t14], "SQL", $t15, C); } }
    } else {
      { const $t16 = await $.iset((await $.wv([$t14], "SQL", C, false)), [27], ""); if ($t16 !== undefined) { await $.wset([$t14], "SQL", $t16, C); } }
    }
    if ($.truthy($.ne((await $.wv([$t14], "ADDITIONALPARAMS", { get: async () => L0["additionalparams"], set: async (v) => { L0["additionalparams"] = v; }, local: true }, false)), ""))) {
      { const $t17 = await $.iset((await $.wv([$t14], "SQL", C, false)), [28], (await $.wv([$t14], "ADDITIONALPARAMS", { get: async () => L0["additionalparams"], set: async (v) => { L0["additionalparams"] = v; }, local: true }, false))); if ($t17 !== undefined) { await $.wset([$t14], "SQL", $t17, C); } }
    } else {
      { const $t18 = await $.iset((await $.wv([$t14], "SQL", C, false)), [28], ""); if ($t18 !== undefined) { await $.wset([$t14], "SQL", $t18, C); } }
    }
    await $.stmt($.wcall([$t14], "open", [], C));
  }
  {
    const $t19 = (await $.wobj(C, "OracleDataSet5"));
    if ($.truthy((await $.wv([$t19], "Active", C, false)))) {
      await $.stmt($.wcall([$t19], "CloseAll", [], C));
    }
    if ($.truthy($.ne((await $.wv([$t19], "BuildFilterString", C, false)), ""))) {
      await $.wset([$t19], "FilterStr", $.add(" and ", (await $.wv([$t19], "BuildFilterString", C, false))), { get: async () => L0["filterstr"], set: async (v) => { L0["filterstr"] = v; }, local: true });
      { const $t20 = await $.iset((await $.wv([$t19], "SQL", C, false)), [31], (await $.wv([$t19], "FilterStr", { get: async () => L0["filterstr"], set: async (v) => { L0["filterstr"] = v; }, local: true }, false))); if ($t20 !== undefined) { await $.wset([$t19], "SQL", $t20, C); } }
    } else {
      { const $t21 = await $.iset((await $.wv([$t19], "SQL", C, false)), [31], ""); if ($t21 !== undefined) { await $.wset([$t19], "SQL", $t21, C); } }
    }
    if ($.truthy($.ne((await $.wv([$t19], "ADDITIONALPARAMS", { get: async () => L0["additionalparams"], set: async (v) => { L0["additionalparams"] = v; }, local: true }, false)), ""))) {
      { const $t22 = await $.iset((await $.wv([$t19], "SQL", C, false)), [32], (await $.wv([$t19], "ADDITIONALPARAMS", { get: async () => L0["additionalparams"], set: async (v) => { L0["additionalparams"] = v; }, local: true }, false))); if ($t22 !== undefined) { await $.wset([$t19], "SQL", $t22, C); } }
    } else {
      { const $t23 = await $.iset((await $.wv([$t19], "SQL", C, false)), [32], ""); if ($t23 !== undefined) { await $.wset([$t19], "SQL", $t23, C); } }
    }
    await $.stmt($.wcall([$t19], "open", [], C));
  }
  {
    const $t24 = (await $.wobj(C, "OracleDataSet6"));
    if ($.truthy((await $.wv([$t24], "Active", C, false)))) {
      await $.stmt($.wcall([$t24], "CloseAll", [], C));
    }
    await $.stmt((await $.wcall([$t24], "SetVariable", ["dat", (await $.wv([$t24], "dat", { get: async () => L0["dat"], set: async (v) => { L0["dat"] = v; }, local: true }, false))], C)));
    if ($.truthy($.ne((await $.wv([$t24], "BuildFilterString", C, false)), ""))) {
      await $.wset([$t24], "FilterStr", $.add(" and ", (await $.wv([$t24], "BuildFilterString", C, false))), { get: async () => L0["filterstr"], set: async (v) => { L0["filterstr"] = v; }, local: true });
      { const $t25 = await $.iset((await $.wv([$t24], "SQL", C, false)), [33], (await $.wv([$t24], "FilterStr", { get: async () => L0["filterstr"], set: async (v) => { L0["filterstr"] = v; }, local: true }, false))); if ($t25 !== undefined) { await $.wset([$t24], "SQL", $t25, C); } }
    } else {
      { const $t26 = await $.iset((await $.wv([$t24], "SQL", C, false)), [33], ""); if ($t26 !== undefined) { await $.wset([$t24], "SQL", $t26, C); } }
    }
    if ($.truthy($.ne((await $.wv([$t24], "ADDITIONALPARAMS", { get: async () => L0["additionalparams"], set: async (v) => { L0["additionalparams"] = v; }, local: true }, false)), ""))) {
      { const $t27 = await $.iset((await $.wv([$t24], "SQL", C, false)), [34], (await $.wv([$t24], "ADDITIONALPARAMS", { get: async () => L0["additionalparams"], set: async (v) => { L0["additionalparams"] = v; }, local: true }, false))); if ($t27 !== undefined) { await $.wset([$t24], "SQL", $t27, C); } }
    } else {
      { const $t28 = await $.iset((await $.wv([$t24], "SQL", C, false)), [34], ""); if ($t28 !== undefined) { await $.wset([$t24], "SQL", $t28, C); } }
    }
    await $.stmt($.wcall([$t24], "open", [], C));
  }
  {
    const $t29 = (await $.wobj(C, "OracleDataSet7"));
    if ($.truthy((await $.wv([$t29], "Active", C, false)))) {
      await $.stmt($.wcall([$t29], "CloseAll", [], C));
    }
    if ($.truthy($.ne((await $.wv([$t29], "BuildFilterString", C, false)), ""))) {
      await $.wset([$t29], "FilterStr", $.add(" and ", (await $.wv([$t29], "BuildFilterString", C, false))), { get: async () => L0["filterstr"], set: async (v) => { L0["filterstr"] = v; }, local: true });
      { const $t30 = await $.iset((await $.wv([$t29], "SQL", C, false)), [33], (await $.wv([$t29], "FilterStr", { get: async () => L0["filterstr"], set: async (v) => { L0["filterstr"] = v; }, local: true }, false))); if ($t30 !== undefined) { await $.wset([$t29], "SQL", $t30, C); } }
    } else {
      { const $t31 = await $.iset((await $.wv([$t29], "SQL", C, false)), [33], ""); if ($t31 !== undefined) { await $.wset([$t29], "SQL", $t31, C); } }
    }
    if ($.truthy($.ne((await $.wv([$t29], "ADDITIONALPARAMS", { get: async () => L0["additionalparams"], set: async (v) => { L0["additionalparams"] = v; }, local: true }, false)), ""))) {
      { const $t32 = await $.iset((await $.wv([$t29], "SQL", C, false)), [34], (await $.wv([$t29], "ADDITIONALPARAMS", { get: async () => L0["additionalparams"], set: async (v) => { L0["additionalparams"] = v; }, local: true }, false))); if ($t32 !== undefined) { await $.wset([$t29], "SQL", $t32, C); } }
    } else {
      { const $t33 = await $.iset((await $.wv([$t29], "SQL", C, false)), [34], ""); if ($t33 !== undefined) { await $.wset([$t29], "SQL", $t33, C); } }
    }
    await $.stmt($.wcall([$t29], "open", [], C));
  }
  await $.stmt((await $.call(C, "LogInformation", [(await $.v(C, "rsPleaseWait"))])));
  {
    const $t34 = (await $.wobj(C, "ExcelExport"));
    await $.stmt($.wcall([$t34], "Connect", [], C));
    await $.stmt((await $.wcall([$t34], "ExportDataset", [(await $.wv([$t34], "OracleDataSet7", C, false)), "ferdi qeza vaxti bitmish", (await $.wv([$t34], "true", C, false)), (await $.wv([$t34], "false", C, false))], C)));
    await $.stmt((await $.wcall([$t34], "ExportDataset", [(await $.wv([$t34], "OracleDataSet6", C, false)), "ferdi qeza iki aydan az qalmish", (await $.wv([$t34], "true", C, false)), (await $.wv([$t34], "false", C, false))], C)));
    await $.stmt((await $.wcall([$t34], "ExportDataset", [(await $.wv([$t34], "OracleDataSet5", C, false)), "ferdi qeza", (await $.wv([$t34], "true", C, false)), (await $.wv([$t34], "false", C, false))], C)));
    await $.stmt((await $.wcall([$t34], "ExportDataset", [(await $.wv([$t34], "OracleDataSet1", C, false)), "iki aydan az qalmish", (await $.wv([$t34], "true", C, false)), (await $.wv([$t34], "false", C, false))], C)));
    await $.stmt((await $.wcall([$t34], "ExportDataset", [(await $.wv([$t34], "OracleDataSet2", C, false)), "sistem tarixinden kicik", (await $.wv([$t34], "true", C, false)), (await $.wv([$t34], "false", C, false))], C)));
    await $.stmt((await $.wcall([$t34], "ExportDataset", [(await $.wv([$t34], "OracleDataSet4", C, false)), "Predment", (await $.wv([$t34], "true", C, false)), (await $.wv([$t34], "false", C, false))], C)));
    await $.stmt($.wcall([$t34], "Disconnect", [], C));
  }
  await $.stmt((await $.call(C, "LogInformation", [(await $.v(C, "rsInfExportFinished"))])));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFrmMsg", "CheckBox1Click", async function CheckBox1Click(Self, p0) {
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
  U.method("TFrmMsg", "CheckBox2Click", async function CheckBox2Click(Self, p0) {
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
  U.method("TFrmMsg", "FormCanResize", async function FormCanResize(Self, p0, p1, p2, p3) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "newwidth": $.asRef(p1), "newheight": $.asRef(p2), "resize": $.asRef(p3), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await L0["resize"].set(false);
  return L0.result;
}, {"params": ["Sender", "NewWidth", "NewHeight", "Resize"], "kind": "procedure", "ptypes": ["TObject", "Integer", "Integer", "Boolean"]});
  U.method("TFrmMsg", "SpeedButton2Click", async function SpeedButton2Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.stmt($.call(C, "close", []));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFrmMsg", "FormKeyPress", async function FormKeyPress(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "key": $.asRef(p1), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.eq(((await $.call(C, "ord", [(await L0["key"].get())]))), (await $.v(C, "VK_ESCAPE"))))) {
    await $.stmt($.call(C, "close", []));
  }
  return L0.result;
}, {"params": ["Sender", "Key"], "kind": "procedure", "ptypes": ["TObject", "Char"]});
  return U;
}
