// Generated from prognozImpl.pas by pas2js — do not edit by hand; regenerate instead.
/* eslint-disable */
// @ts-nocheck

export default function define($) {
  const U = $.unit("prognozImpl", ["Windows", "Messages", "SysUtils", "Classes", "Graphics", "Controls", "Forms", "Dialogs", "Db", "OracleData", "ComCtrls", "StdCtrls", "Mask", "DBCtrlsEh", "DBLookupEh", "Buttons", "CMExcelExport", "NLSLocalizer", "Gauges", "ExtCtrls", "sboapiDataModuleImpl", "CommonDeclsImpl", "SBTranslateProc"]);
  const C = [U];
  U.defClass("TPrognoz", "TForm", {"groupbox1": {"name": "GroupBox1", "type": "TGroupBox"}, "groupbox2": {"name": "GroupBox2", "type": "TGroupBox"}, "groupbox3": {"name": "GroupBox3", "type": "TGroupBox"}, "lcbfilials": {"name": "LCBFilials", "type": "TDBLookupComboboxEh"}, "cbfilial": {"name": "CBFilial", "type": "TCheckBox"}, "groupbox4": {"name": "GroupBox4", "type": "TGroupBox"}, "cbavalute": {"name": "CBAvalute", "type": "TCheckBox"}, "lcbvalutes": {"name": "LCBValutes", "type": "TDBLookupComboboxEh"}, "datetimepicker1": {"name": "DateTimePicker1", "type": "TDateTimePicker"}, "datetimepicker2": {"name": "DateTimePicker2", "type": "TDateTimePicker"}, "valutes": {"name": "valutes", "type": "TOracleDataSet"}, "valutesvalute": {"name": "valutesVALUTE", "type": "TIntegerField"}, "filials": {"name": "Filials", "type": "TOracleDataSet"}, "filialsid": {"name": "FilialsID", "type": "TFloatField"}, "filialsdatsrc": {"name": "FilialsDatSrc", "type": "TDataSource"}, "valutesdatsrc": {"name": "valutesDatSrc", "type": "TDataSource"}, "sysdat": {"name": "Sysdat", "type": "TOracleDataSet"}, "checkbox1": {"name": "CheckBox1", "type": "TCheckBox"}, "checkbox2": {"name": "CheckBox2", "type": "TCheckBox"}, "prognoz": {"name": "prognoz", "type": "TOracleDataSet"}, "speedbutton2": {"name": "SpeedButton2", "type": "TSpeedButton"}, "excelexport": {"name": "ExcelExport", "type": "TCMExcelExport"}, "animate1": {"name": "Animate1", "type": "TAnimate"}, "speedbutton1": {"name": "SpeedButton1", "type": "TSpeedButton"}, "valutesvalu_name": {"name": "valutesVALU_NAME", "type": "TWideStringField"}, "filialsname": {"name": "FilialsNAME", "type": "TWideStringField"}, "prognozcontractno": {"name": "prognozCONTRACTNO", "type": "TWideStringField"}, "prognozval_name": {"name": "prognozVAL_NAME", "type": "TWideStringField"}, "prognozfilname": {"name": "prognozFILNAME", "type": "TWideStringField"}, "prognozopendate": {"name": "prognozOPENDATE", "type": "TDateTimeField"}, "prognozclosedate": {"name": "prognozCLOSEDATE", "type": "TDateTimeField"}, "prognozintres": {"name": "prognozINTRES", "type": "TWideStringField"}, "prognozcustname": {"name": "prognozCUSTNAME", "type": "TWideStringField"}, "prognozfacticaldebt": {"name": "prognozFACTICALDEBT", "type": "TFloatField"}, "prognozinterestaccno": {"name": "prognozINTERESTACCNO", "type": "TWideStringField"}, "prognozpok_ostat": {"name": "prognozPOK_OSTAT", "type": "TFloatField"}, "prognozprognoz": {"name": "prognozPROGNOZ", "type": "TFloatField"}, "prognozsumprognoz": {"name": "prognozSUMPROGNOZ", "type": "TFloatField"}}, {});
  U.init(async () => {
    U.var_("Prognoz", null, "TPrognoz");
  });
  U.func("exportproc", async function exportproc(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"s": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["s"]);
  await $.mcall((await $.v(C, "Prognoz")), "ShowModal", []);
  return L0.result;
}, {"params": ["S"], "kind": "procedure", "ptypes": ["String"]});
  U.method("TPrognoz", "FormCreate", async function FormCreate(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mcall((await $.v(C, "valutes")), "Open", []);
  await $.mcall((await $.v(C, "Filials")), "open", []);
  await $.mcall((await $.v(C, "Sysdat")), "open", []);
  await $.mset((await $.v(C, "DateTimePicker1")), "DateTime", (await $.mv((await $.mcall((await $.v(C, "sysdat")), "fieldbyname", ["tek_dat"])), "AsDateTime")));
  await $.mset((await $.v(C, "DateTimePicker2")), "DateTime", (await $.mv((await $.mcall((await $.v(C, "sysdat")), "fieldbyname", ["tek_dat"])), "AsDateTime")));
  await $.stmt((await $.mcall((await $.v(C, "SBTranslateProc")), "TranslateAllCompForms", [Self, (await $.mv((await $.v(C, "sboapiDataModule")), "OrPack_SL"))])));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TPrognoz", "BuildFilterString", async function BuildFilterString(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: ''};
  L0["concatfilter"] = $.fn(async function ConcatFilter(p0, p1, p2, p3) {
  const L1 = {"s": $.asRef(p0), "prefix": $.copyArg(p1), "checked": $.copyArg(p2), "keyvalue": $.copyArg(p3), result: undefined, "temp": ''};
  await $.fixArgs(L1, ["prefix", "checked", "keyvalue"]);
  L1["csformat"] = "(%s=%s)";
  if ($.truthy(L1["checked"])) {
    L1["temp"] = (await $.call(C, "Format", [L1["csformat"], [L1["prefix"], L1["keyvalue"]]]));
    if ($.truthy($.eq((await L1["s"].get()), ""))) {
      await L1["s"].set($.add("and", L1["temp"]));
    } else {
      await L1["s"].set($.add($.add((await L1["s"].get()), "and "), L1["temp"]));
    }
  }
  return L1.result;
});
  L0["result"] = "";
  await $.stmt((await $.callv(L0["concatfilter"], [L0["result"], "cont.CURRENCY", (await $.mv((await $.v(C, "CBaValute")), "Checked")), (await $.mv((await $.v(C, "LCBValutes")), "KeyValue"))])));
  await $.stmt((await $.callv(L0["concatfilter"], [L0["result"], "cont.BRANCHID", (await $.mv((await $.v(C, "CBFilial")), "Checked")), (await $.mv((await $.v(C, "LCBFilials")), "KeyValue"))])));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TPrognoz", "FormDestroy", async function FormDestroy(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mcall((await $.v(C, "valutes")), "close", []);
  await $.mcall((await $.v(C, "Filials")), "close", []);
  await $.mcall((await $.v(C, "Sysdat")), "close", []);
  await $.mcall((await $.v(C, "prognoz")), "Closeall", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TPrognoz", "FormKeyPress", async function FormKeyPress(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "key": $.asRef(p1), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.eq((await $.call(C, "Ord", [(await L0["key"].get())])), (await $.v(C, "VK_ESCAPE"))))) {
    await $.stmt($.call(C, "Close", []));
  }
  return L0.result;
}, {"params": ["Sender", "Key"], "kind": "procedure", "ptypes": ["TObject", "Char"]});
  U.method("TPrognoz", "FormCanResize", async function FormCanResize(Self, p0, p1, p2, p3) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "newwidth": $.asRef(p1), "newheight": $.asRef(p2), "resize": $.asRef(p3), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await L0["resize"].set(false);
  return L0.result;
}, {"params": ["Sender", "NewWidth", "NewHeight", "Resize"], "kind": "procedure", "ptypes": ["TObject", "Integer", "Integer", "Boolean"]});
  U.method("TPrognoz", "SpeedButton1Click", async function SpeedButton1Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "dat": 0};
  await $.fixArgs(L0, ["sender"]);
  L0["dat"] = (await $.call(C, "integer", [(await $.call(C, "trunc", [(await $.mv((await $.v(C, "DateTimePicker2")), "DateTime"))]))]));
  await $.mset((await $.v(C, "Animate1")), "Visible", true);
  await $.mset((await $.v(C, "Animate1")), "Active", true);
  {
    const $t1 = (await $.v(C, "prognoz"));
    if ($.truthy((await $.wv([$t1], "Active", C, false)))) {
      await $.stmt($.wcall([$t1], "CloseAll", [], C));
    }
    { const $t2 = await $.iset((await $.wv([$t1], "SQL", C, false)), [14], (await $.wv([$t1], "BuildFilterString", C, false))); if ($t2 !== undefined) { await $.wset([$t1], "SQL", $t2, C); } }
    await $.stmt((await $.wcall([$t1], "SetVariable", ["dat", (await $.wv([$t1], "dat", { get: async () => L0["dat"], set: async (v) => { L0["dat"] = v; }, local: true }, false))], C)));
    await $.stmt($.wcall([$t1], "open", [], C));
  }
  {
    const $t3 = (await $.v(C, "ExcelExport"));
    await $.stmt($.wcall([$t3], "Connect", [], C));
    await $.stmt((await $.wcall([$t3], "ExportDataset", [(await $.wv([$t3], "prognoz", C, false)), "Report", (await $.wv([$t3], "true", C, false))], C)));
    await $.stmt($.wcall([$t3], "Disconnect", [], C));
  }
  await $.mset((await $.v(C, "Animate1")), "Visible", false);
  await $.mset((await $.v(C, "Animate1")), "Active", false);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TPrognoz", "SpeedButton2Click", async function SpeedButton2Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.stmt($.call(C, "close", []));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.setInitialization(async function __initialization(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: undefined};
  await $.set(C, "Prognoz", (await $.mcall((await $.v(C, "TPrognoz")), "Create", [(await $.v(C, "CommonApplication"))])));
  return L0.result;
});
  return U;
}
