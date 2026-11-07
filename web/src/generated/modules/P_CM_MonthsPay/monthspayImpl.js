// Generated from monthspayImpl.pas by pas2js — do not edit by hand; regenerate instead.
/* eslint-disable */
// @ts-nocheck

export default function define($) {
  const U = $.unit("monthspayImpl", ["Windows", "Messages", "SysUtils", "Classes", "Graphics", "Controls", "Forms", "Dialogs", "CMExcelExport", "Db", "OracleData", "StdCtrls", "CheckLst", "Evanescence", "ComCtrls", "Buttons", "ExtCtrls", "Gauges", "Oracle", "CommonDecls", "Sbsystem", "SboApiDataModuleImpl", "ComObj", "SBTranslateProc"]);
  const C = [U];
  U.defClass("TFrmMonthsPay", "TForm", {"panel1": {"name": "Panel1", "type": "TPanel"}, "speedbutton2": {"name": "SpeedButton2", "type": "TSpeedButton"}, "speedbutton1": {"name": "SpeedButton1", "type": "TSpeedButton"}, "panel2": {"name": "Panel2", "type": "TPanel"}, "label1": {"name": "Label1", "type": "TLabel"}, "datetimepicker1": {"name": "DateTimePicker1", "type": "TDateTimePicker"}, "groupbox1": {"name": "GroupBox1", "type": "TGroupBox"}, "lookfilgrp": {"name": "LookFilGrp", "type": "TEvanescence"}, "checkbox2": {"name": "CheckBox2", "type": "TCheckBox"}, "groupbox2": {"name": "GroupBox2", "type": "TGroupBox"}, "lookvalgrp": {"name": "LookVAlGrp", "type": "TEvanescence"}, "checkbox1": {"name": "CheckBox1", "type": "TCheckBox"}, "filialdataset": {"name": "FilialDataSet", "type": "TOracleDataSet"}, "filialdatasetid": {"name": "FilialDataSetID", "type": "TFloatField"}, "filialdatasetname": {"name": "FilialDataSetNAME", "type": "Twidestringfield"}, "oracledataset1": {"name": "OracleDataSet1", "type": "TOracleDataSet"}, "datasource1": {"name": "DataSource1", "type": "TDataSource"}, "excelexport": {"name": "ExcelExport", "type": "TCMExcelExport"}, "srcfilial": {"name": "srcFilial", "type": "TDataSource"}, "sysdate": {"name": "sysdate", "type": "TOracleDataSet"}, "main": {"name": "Main", "type": "TOracleDataSet"}, "mainname": {"name": "MainNAME", "type": "Twidestringfield"}, "maincelbeden": {"name": "MainCELBEDEN", "type": "Twidestringfield"}, "maindateofconclusion": {"name": "MainDATEOFCONCLUSION", "type": "TDateTimeField"}, "mainduedatefirstcontract": {"name": "MainDUEDATEFIRSTCONTRACT", "type": "TDateTimeField"}, "mainsahebolusu": {"name": "MainSAHEBOLUSU", "type": "Twidestringfield"}, "mainoddat": {"name": "MainODDAT", "type": "TDateTimeField"}, "mainval_name": {"name": "MainVAL_NAME", "type": "Twidestringfield"}, "mainayliqodenish": {"name": "Mainayliqodenish", "type": "TFloatField"}, "mainverilmish": {"name": "MainVERILMISH", "type": "TFloatField"}, "mainodenilmish": {"name": "MainODENILMISH", "type": "TFloatField"}, "mainrest": {"name": "MainREST", "type": "TFloatField"}, "mainstafka": {"name": "MainSTAFKA", "type": "Twidestringfield"}, "maincarihes": {"name": "MainCARIHES", "type": "Twidestringfield"}, "maincarihq": {"name": "MainCARIHQ", "type": "TFloatField"}, "mainduerest": {"name": "MainDUEREST", "type": "TFloatField"}, "maincariayd_od": {"name": "MainCARIAYD_OD", "type": "TFloatField"}, "maincemi_od": {"name": "MainCEMI_OD", "type": "TFloatField"}, "maingecgun": {"name": "MainGECGUN", "type": "TFloatField"}, "maingecfaiz": {"name": "MainGECFAIZ", "type": "TFloatField"}, "maincarihes_faiz": {"name": "MainCARIHES_FAIZ", "type": "TFloatField"}, "mainfull_faiz": {"name": "MainFULL_FAIZ", "type": "TFloatField"}, "mainget_gec_faizgun": {"name": "MainGET_GEC_FAIZGUN", "type": "TFloatField"}, "mainrownum": {"name": "MainROWNUM", "type": "TFloatField"}, "mainumumigecgun": {"name": "Mainumumigecgun", "type": "TIntegerField"}, "credit": {"name": "credit", "type": "TOracleDataSet"}, "gauge1": {"name": "Gauge1", "type": "TGauge"}, "oraclepackage1": {"name": "OraclePackage1", "type": "TOraclePackage"}}, {});
  U.init(async () => {
    U.var_("FrmMonthsPay", null, "TFrmMonthsPay");
  });
  U.func("InitPlugin", async function InitPlugin(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"s": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["s"]);
  await $.mcall((await $.v(C, "FrmMonthsPay")), "ShowModal", []);
  return L0.result;
}, {"params": ["s"], "kind": "procedure", "ptypes": ["String"]});
  U.method("TFrmMonthsPay", "CheckBox2Click", async function CheckBox2Click(Self, p0) {
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
  U.method("TFrmMonthsPay", "CheckBox1Click", async function CheckBox1Click(Self, p0) {
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
  U.method("TFrmMonthsPay", "FormCreate", async function FormCreate(Self, p0) {
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
  await $.stmt((await $.mcall((await $.v(C, "SBTranslateProc")), "TranslateAllCompForms", [Self, (await $.mv((await $.v(C, "sboapiDataModule")), "OrPack_SL"))])));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFrmMonthsPay", "FormCanResize", async function FormCanResize(Self, p0, p1, p2, p3) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "newwidth": $.asRef(p1), "newheight": $.asRef(p2), "resize": $.asRef(p3), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await L0["resize"].set(false);
  return L0.result;
}, {"params": ["Sender", "NewWidth", "NewHeight", "Resize"], "kind": "procedure", "ptypes": ["TObject", "Integer", "Integer", "Boolean"]});
  U.method("TFrmMonthsPay", "SpeedButton1Click", async function SpeedButton1Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "sysdat": 0, "restsstr": '', "chpaystr": '', "additionalparams": '', "filterstr": '', "checkstr": '', "i": 0};
  await $.fixArgs(L0, ["sender"]);
  L0["sysdat"] = (await $.call(C, "integer", [(await $.call(C, "trunc", [(await $.mv((await $.v(C, "DateTimePicker1")), "DateTime"))]))]));
  if ($.truthy(($.ne((await $.mv((await $.mv((await $.v(C, "LookFilGrp")), "GetCheckedKeyList")), "Count")), (await $.mv((await $.mv((await $.v(C, "LookFilGrp")), "Items")), "Count")))))) {
    L0["additionalparams"] = $.add($.add($.add($.add(L0["additionalparams"], " where p.branchid in("), (await $.mv((await $.mv((await $.v(C, "LookFilGrp")), "GetCheckedKeyList")), "CommaText"))), ")"), "\r\n");
  }
  if ($.truthy(($.ne((await $.mv((await $.mv((await $.v(C, "LookVAlGrp")), "GetCheckedKeyList")), "Count")), (await $.mv((await $.mv((await $.v(C, "LookVAlGrp")), "Items")), "Count")))))) {
    L0["additionalparams"] = $.add($.add($.add($.add(L0["additionalparams"], " and p.currency in("), (await $.mv((await $.mv((await $.v(C, "LookVAlGrp")), "GetCheckedKeyList")), "CommaText"))), ")"), "\r\n");
  }
  {
    const $t3 = (await $.wobj(C, "credit"));
    if ($.truthy((await $.wv([$t3], "Active", C, false)))) {
      await $.stmt($.wcall([$t3], "CloseAll", [], C));
    }
    if ($.truthy($.ne((await $.wv([$t3], "ADDITIONALPARAMS", { get: async () => L0["additionalparams"], set: async (v) => { L0["additionalparams"] = v; }, local: true }, false)), ""))) {
      { const $t4 = await $.iset((await $.wv([$t3], "SQL", C, false)), [3], (await $.wv([$t3], "ADDITIONALPARAMS", { get: async () => L0["additionalparams"], set: async (v) => { L0["additionalparams"] = v; }, local: true }, false))); if ($t4 !== undefined) { await $.wset([$t3], "SQL", $t4, C); } }
    } else {
      { const $t5 = await $.iset((await $.wv([$t3], "SQL", C, false)), [3], ""); if ($t5 !== undefined) { await $.wset([$t3], "SQL", $t5, C); } }
    }
    await $.stmt($.wcall([$t3], "open", [], C));
  }
  await $.mset((await $.v(C, "Gauge1")), "Visible", true);
  L0["i"] = 1;
  {
    const $t6 = (await $.wobj(C, "credit"));
    while ($.truthy($.not((await $.wv([$t6], "EOF", C, false))))) {
      await $.stmt((await $.mcall((await $.wv([$t6], "OraclePackage1", C, false)), "CallProcedure", ["monthspayreport", ["p_id", (await $.mv((await $.wcall([$t6], "FieldByName", ["ID"], C)), "AsInteger")), "p_bdate", (await $.wv([$t6], "sysdat", { get: async () => L0["sysdat"], set: async (v) => { L0["sysdat"] = v; }, local: true }, false))]])));
      await $.mset((await $.wv([$t6], "Gauge1", C, false)), "Progress", (await $.wcall([$t6], "trunc", [$.fdiv($.mul((await $.wv([$t6], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false)), 100), (await $.wv([$t6], "RecordCount", C, false)))], C)));
      await $.wset([$t6], "i", $.add((await $.wv([$t6], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false)), 1), { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true });
      await $.stmt($.wcall([$t6], "Next", [], C));
      await $.tick();
    }
  }
  {
    const $t7 = (await $.wobj(C, "Main"));
    if ($.truthy((await $.wv([$t7], "Active", C, false)))) {
      await $.stmt($.wcall([$t7], "CloseAll", [], C));
    }
    await $.stmt((await $.wcall([$t7], "SetVariable", ["dat", (await $.wv([$t7], "sysdat", { get: async () => L0["sysdat"], set: async (v) => { L0["sysdat"] = v; }, local: true }, false))], C)));
    await $.stmt($.wcall([$t7], "open", [], C));
  }
  {
    const $t8 = (await $.wobj(C, "ExcelExport"));
    await $.stmt($.wcall([$t8], "Connect", [], C));
    await $.stmt((await $.wcall([$t8], "ExportDataset", [(await $.wv([$t8], "Main", C, false)), "Purdensal", (await $.wv([$t8], "True", C, false)), (await $.wv([$t8], "false", C, false))], C)));
    await $.stmt($.wcall([$t8], "Disconnect", [], C));
  }
  await $.mset((await $.v(C, "Gauge1")), "Visible", false);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFrmMonthsPay", "SpeedButton2Click", async function SpeedButton2Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.stmt($.call(C, "close", []));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFrmMonthsPay", "MainCalcFields", async function MainCalcFields(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"dataset": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["dataset"]);
  if ($.truthy($.gt((await $.mv((await $.mcall((await $.v(C, "main")), "fieldbyname", ["GECGUN"])), "asinteger")), (await $.mv((await $.mcall((await $.v(C, "main")), "fieldbyname", ["GET_GEC_FAIZGUN"])), "asinteger"))))) {
    await $.mset((await $.mcall((await $.v(C, "main")), "fieldbyname", ["umumigecgun"])), "asinteger", (await $.mv((await $.mcall((await $.v(C, "main")), "fieldbyname", ["GECGUN"])), "asinteger")));
  } else {
    await $.mset((await $.mcall((await $.v(C, "main")), "fieldbyname", ["umumigecgun"])), "asinteger", (await $.mv((await $.mcall((await $.v(C, "main")), "fieldbyname", ["GET_GEC_FAIZGUN"])), "asinteger")));
  }
  return L0.result;
}, {"params": ["DataSet"], "kind": "procedure", "ptypes": ["TDataSet"]});
  U.setInitialization(async function __initialization(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: undefined};
  await $.set(C, "FrmMonthsPay", (await $.mcall((await $.v(C, "TFrmMonthsPay")), "Create", [(await $.v(C, "CommonApplication"))])));
  return L0.result;
});
  return U;
}
