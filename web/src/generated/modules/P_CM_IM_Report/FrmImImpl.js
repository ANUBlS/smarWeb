// Generated from FrmImImpl.pas by pas2js — do not edit by hand; regenerate instead.
/* eslint-disable */
// @ts-nocheck

export default function define($) {
  const U = $.unit("FrmImImpl", ["Windows", "Messages", "SysUtils", "Classes", "Graphics", "Controls", "Forms", "Dialogs", "CMExcelExport", "DBCtrls", "StdCtrls", "ExtCtrls", "Db", "OracleData", "CheckLst", "Evanescence", "ComCtrls", "Buttons", "NLSLocalizer", "CommonDecls", "systemstate", "CMOracleApiDataModuleImpl"]);
  const C = [U];
  U.defClass("TFrmIm", "TForm", {"panel1": {"name": "Panel1", "type": "TPanel"}, "groupbox6": {"name": "GroupBox6", "type": "TGroupBox"}, "cbavalute": {"name": "CBaValute", "type": "TCheckBox"}, "groupbox1": {"name": "GroupBox1", "type": "TGroupBox"}, "groupbox2": {"name": "GroupBox2", "type": "TGroupBox"}, "cbpersons": {"name": "CBPersons", "type": "TCheckBox"}, "lcbpersons": {"name": "LCBPersons", "type": "TDBLookupComboBox"}, "groupbox3": {"name": "GroupBox3", "type": "TGroupBox"}, "excelexport": {"name": "ExcelExport", "type": "TCMExcelExport"}, "lookusrgrp": {"name": "LookUsrGrp", "type": "TEvanescence"}, "lookpersoneltype": {"name": "LookPersonelType", "type": "TEvanescence"}, "usrgrpdataset": {"name": "UsrGrpDataSet", "type": "TOracleDataSet"}, "srcusrgrp": {"name": "srcUsrGrp", "type": "TDataSource"}, "srcpersoneltype": {"name": "srcPersonelType", "type": "TDataSource"}, "personeltypedataset": {"name": "PersonelTypeDataSet", "type": "TOracleDataSet"}, "checkbox1": {"name": "CheckBox1", "type": "TCheckBox"}, "checkbox2": {"name": "CheckBox2", "type": "TCheckBox"}, "datetimepicker1": {"name": "DateTimePicker1", "type": "TDateTimePicker"}, "persontypes": {"name": "PersonTypes", "type": "TOracleDataSet"}, "datasrcpersontypes": {"name": "DataSrcPersonTypes", "type": "TDataSource"}, "speedbutton1": {"name": "SpeedButton1", "type": "TSpeedButton"}, "speedbutton2": {"name": "SpeedButton2", "type": "TSpeedButton"}, "main": {"name": "Main", "type": "TOracleDataSet"}, "oracledataset1": {"name": "OracleDataSet1", "type": "TOracleDataSet"}, "oracledataset1tek_dat": {"name": "OracleDataSet1TEK_DAT", "type": "TDateTimeField"}, "nlslocalizer1": {"name": "NLSLocalizer1", "type": "TNLSLocalizer"}, "mainnumberofcredit": {"name": "MainNUMBEROFCREDIT", "type": "TStringField"}, "mainannualyinterestrate": {"name": "MainANNUALYINTERESTRATE", "type": "TFloatField"}, "mainrest": {"name": "MainREST", "type": "TFloatField"}, "maininterestrest": {"name": "MainINTERESTREST", "type": "TFloatField"}, "mainduerest": {"name": "MainDUEREST", "type": "TFloatField"}, "maindueinterestrest": {"name": "MainDUEINTERESTREST", "type": "TFloatField"}, "mainssuda": {"name": "MainSSUDA", "type": "TStringField"}, "mainfaizhes": {"name": "MainFAIZHES", "type": "TStringField"}, "maingecssuda": {"name": "MainGECSSUDA", "type": "TStringField"}, "maingecfaizhes": {"name": "MainGECFAIZHES", "type": "TStringField"}, "mainname": {"name": "MainNAME", "type": "TStringField"}, "maindateofconclusion": {"name": "MainDATEOFCONCLUSION", "type": "TDateTimeField"}, "mainduedatefirstcontract": {"name": "MainDUEDATEFIRSTCONTRACT", "type": "TDateTimeField"}, "mainnewfinanceamount": {"name": "MainNEWFINANCEAMOUNT", "type": "TFloatField"}, "maincreditlineamount": {"name": "MainCREDITLINEAMOUNT", "type": "TFloatField"}, "mainipotekapridmentinindri": {"name": "MainIpotekapridmentinindri", "type": "TFloatField"}, "maindsdesigner": {"name": "MainDSDesigner", "type": "TStringField"}, "maindescription": {"name": "MainDESCRIPTION", "type": "TStringField"}}, {});
  U.init(async () => {
    U.const("rsErrorUsrGrp", "Ən azı bir istifadəçi qrupu seçilməlidir!");
    U.const("rsErrorPersonaltype", "Ən azı bir müştəri tipi seçilməlidir!");
    U.const("rsInfScriptStarted", "Hesabat alınır ");
    U.const("rsPleaseWait", "Zəhmət olmasa bir az gözləyin!  ");
    U.const("rsInfRowsExported", "%d sətir ixrac olundu");
    U.const("rsInfExportFinished", "İxrac qurtardı");
    U.var_("FrmIm", null, "TFrmIm");
  });
  U.func("InitPlugin", async function InitPlugin(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"s": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["s"]);
  await $.mcall((await $.v(C, "FrmIm")), "ShowModal", []);
  return L0.result;
}, {"params": ["s"], "kind": "procedure", "ptypes": ["String"]});
  U.method("TFrmIm", "FormCreate", async function FormCreate(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "i": 0};
  await $.fixArgs(L0, ["sender"]);
  await $.mcall((await $.v(C, "OracleDataSet1")), "open", []);
  await $.mcall((await $.v(C, "PersonTypes")), "open", []);
  await $.mcall((await $.v(C, "UsrGrpDataSet")), "open", []);
  await $.mcall((await $.v(C, "PersonelTypeDataSet")), "open", []);
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
  U.method("TFrmIm", "FormShow", async function FormShow(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "i": 0};
  await $.fixArgs(L0, ["sender"]);
  await $.mset((await $.v(C, "DateTimePicker1")), "DateTime", (await $.mv((await $.mcall((await $.v(C, "OracleDataSet1")), "fieldbyname", ["tek_dat"])), "asdatetime")));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFrmIm", "CheckBox1Click", async function CheckBox1Click(Self, p0) {
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
  U.method("TFrmIm", "CheckBox2Click", async function CheckBox2Click(Self, p0) {
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
  U.method("TFrmIm", "BuildFilterString", async function BuildFilterString(Self) {
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
  U.method("TFrmIm", "SpeedButton1Click", async function SpeedButton1Click(Self, p0) {
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
    const $t4 = (await $.wobj(C, "main"));
    if ($.truthy((await $.wv([$t4], "Active", C, false)))) {
      await $.stmt($.wcall([$t4], "CloseAll", [], C));
    }
    await $.stmt((await $.wcall([$t4], "SetVariable", ["dat", (await $.wv([$t4], "dat", { get: async () => L0["dat"], set: async (v) => { L0["dat"] = v; }, local: true }, false))], C)));
    if ($.truthy($.ne((await $.wv([$t4], "BuildFilterString", C, false)), ""))) {
      await $.wset([$t4], "FilterStr", $.add(" and ", (await $.wv([$t4], "BuildFilterString", C, false))), { get: async () => L0["filterstr"], set: async (v) => { L0["filterstr"] = v; }, local: true });
      { const $t5 = await $.iset((await $.wv([$t4], "SQL", C, false)), [14], (await $.wv([$t4], "FilterStr", { get: async () => L0["filterstr"], set: async (v) => { L0["filterstr"] = v; }, local: true }, false))); if ($t5 !== undefined) { await $.wset([$t4], "SQL", $t5, C); } }
    } else {
      { const $t6 = await $.iset((await $.wv([$t4], "SQL", C, false)), [14], ""); if ($t6 !== undefined) { await $.wset([$t4], "SQL", $t6, C); } }
    }
    if ($.truthy($.ne((await $.wv([$t4], "ADDITIONALPARAMS", { get: async () => L0["additionalparams"], set: async (v) => { L0["additionalparams"] = v; }, local: true }, false)), ""))) {
      { const $t7 = await $.iset((await $.wv([$t4], "SQL", C, false)), [15], (await $.wv([$t4], "ADDITIONALPARAMS", { get: async () => L0["additionalparams"], set: async (v) => { L0["additionalparams"] = v; }, local: true }, false))); if ($t7 !== undefined) { await $.wset([$t4], "SQL", $t7, C); } }
    } else {
      { const $t8 = await $.iset((await $.wv([$t4], "SQL", C, false)), [15], ""); if ($t8 !== undefined) { await $.wset([$t4], "SQL", $t8, C); } }
    }
    await $.stmt($.wcall([$t4], "open", [], C));
    await $.stmt((await $.wcall([$t4], "LogInformation", [(await $.wv([$t4], "rsPleaseWait", C, false))], C)));
  }
  {
    const $t9 = (await $.wobj(C, "ExcelExport"));
    await $.stmt($.wcall([$t9], "Connect", [], C));
    await $.stmt((await $.wcall([$t9], "ExportDataset", [(await $.wv([$t9], "Main", C, false)), "IM Hesabati", (await $.wv([$t9], "True", C, false)), (await $.wv([$t9], "false", C, false))], C)));
    await $.stmt($.wcall([$t9], "Disconnect", [], C));
  }
  await $.stmt((await $.call(C, "LogInformation", [(await $.v(C, "rsInfExportFinished"))])));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFrmIm", "FormDestroy", async function FormDestroy(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mcall((await $.v(C, "OracleDataSet1")), "close", []);
  await $.mcall((await $.v(C, "PersonTypes")), "close", []);
  await $.mcall((await $.v(C, "UsrGrpDataSet")), "close", []);
  await $.mcall((await $.v(C, "PersonelTypeDataSet")), "close", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFrmIm", "SpeedButton2Click", async function SpeedButton2Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.stmt($.call(C, "close", []));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFrmIm", "FormCanResize", async function FormCanResize(Self, p0, p1, p2, p3) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "newwidth": $.asRef(p1), "newheight": $.asRef(p2), "resize": $.asRef(p3), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await L0["resize"].set(true);
  return L0.result;
}, {"params": ["Sender", "NewWidth", "NewHeight", "Resize"], "kind": "procedure", "ptypes": ["TObject", "Integer", "Integer", "Boolean"]});
  U.setInitialization(async function __initialization(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: undefined};
  await $.set(C, "FrmIm", (await $.mcall((await $.v(C, "TFrmIm")), "Create", [(await $.v(C, "CommonApplication"))])));
  return L0.result;
});
  return U;
}
