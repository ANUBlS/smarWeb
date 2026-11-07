// Generated from UnitN3SD.pas by pas2js — do not edit by hand; regenerate instead.
/* eslint-disable */
// @ts-nocheck

export default function define($) {
  const U = $.unit("UnitN3SD", ["Windows", "Messages", "SysUtils", "Classes", "Graphics", "Controls", "Forms", "NLSLocalizer", "ComCtrls", "StdCtrls", "Mask", "DBCtrlsEh", "ExtCtrls", "Buttons", "CMExcelExport", "DBLookupEh", "CommonDecls", "UnitProgress", "DatModN3SDImpl", "SbSystem", "SBTranslateProc", "sboapiDataModuleimpl"]);
  const C = [U];
  U.defClass("TFormN3SD", "TForm", {"speedbutton1": {"name": "SpeedButton1", "type": "TSpeedButton"}, "speedbutton2": {"name": "SpeedButton2", "type": "TSpeedButton"}, "panel1": {"name": "Panel1", "type": "TPanel"}, "panel2": {"name": "Panel2", "type": "TPanel"}, "groupbox1": {"name": "GroupBox1", "type": "TGroupBox"}, "groupbox4": {"name": "GroupBox4", "type": "TGroupBox"}, "dblookupcomboboxehbr": {"name": "DBLookupComboboxEhBr", "type": "TDBLookupComboboxEh"}, "checkboxbr": {"name": "CheckBoxBr", "type": "TCheckBox"}, "panel3": {"name": "Panel3", "type": "TPanel"}, "groupbox2": {"name": "GroupBox2", "type": "TGroupBox"}, "dblookupcomboboxehreg": {"name": "DBLookupComboboxEhReg", "type": "TDBLookupComboboxEh"}, "checkboxreg": {"name": "CheckBoxReg", "type": "TCheckBox"}, "groupbox3": {"name": "GroupBox3", "type": "TGroupBox"}, "dblookupcomboboxehcust": {"name": "DBLookupComboboxEhCust", "type": "TDBLookupComboboxEh"}, "checkboxcust": {"name": "CheckBoxCust", "type": "TCheckBox"}, "dblookupcomboboxehvid": {"name": "DBLookupComboboxEhVid", "type": "TDBLookupComboboxEh"}, "checkboxvid": {"name": "CheckBoxVid", "type": "TCheckBox"}, "groupbox5": {"name": "GroupBox5", "type": "TGroupBox"}, "enddate": {"name": "EndDate", "type": "TDateTimePicker"}, "label1": {"name": "Label1", "type": "TLabel"}, "label2": {"name": "Label2", "type": "TLabel"}, "begindate": {"name": "BeginDate", "type": "TDateTimePicker"}, "excelexport": {"name": "ExcelExport", "type": "TCMExcelExport"}, "speedbutton3": {"name": "SpeedButton3", "type": "TSpeedButton"}, "progressbar": {"name": "ProgressBar", "type": "TProgressBar"}}, {});
  U.init(async () => {
    U.var_("FormN3SD", null, "TFormN3SD");
  });
  U.func("InitPlugin", async function InitPlugin(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"s": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["s"]);
  await $.mcall((await $.v(C, "FormN3SD")), "ShowModal", []);
  return L0.result;
}, {"params": ["s"], "kind": "procedure", "ptypes": ["String"]});
  U.method("TFormN3SD", "BuildFilterString", async function BuildFilterString(Self) {
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
      await L1["s"].set($.add($.add((await L1["s"].get()), "AND "), L1["temp"]));
    }
  }
  return L1.result;
});
  L0["result"] = "";
  await $.stmt((await $.callv(L0["concatfilter"], [$.ref(async () => L0["result"], async ($t1) => { L0["result"] = $t1; }), "CUSTOMERTYPE", (await $.mv((await $.v(C, "CheckBoxCust")), "Checked")), (await $.mv((await $.v(C, "DBLookupComboboxEhCust")), "KeyValue"))])));
  await $.stmt((await $.callv(L0["concatfilter"], [$.ref(async () => L0["result"], async ($t2) => { L0["result"] = $t2; }), "BRANCHID", (await $.mv((await $.v(C, "CheckBoxBr")), "Checked")), (await $.mv((await $.v(C, "DBLookupComboboxEhBr")), "KeyValue"))])));
  await $.stmt((await $.callv(L0["concatfilter"], [$.ref(async () => L0["result"], async ($t3) => { L0["result"] = $t3; }), "VILLAGEID", (await $.mv((await $.v(C, "CheckBoxReg")), "Checked")), (await $.mv((await $.v(C, "DBLookupComboboxEhReg")), "KeyValue"))])));
  await $.stmt((await $.callv(L0["concatfilter"], [$.ref(async () => L0["result"], async ($t4) => { L0["result"] = $t4; }), "VID_SOB", (await $.mv((await $.v(C, "CheckBoxvid")), "Checked")), (await $.mv((await $.v(C, "DBLookupComboboxEhVid")), "KeyValue"))])));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TFormN3SD", "FormKeyPress", async function FormKeyPress(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "key": $.asRef(p1), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.eq((await $.call(C, "Ord", [(await L0["key"].get())])), (await $.v(C, "VK_ESCAPE"))))) {
    await $.set(C, "ModalResult", (await $.v(C, "mrCancel")));
  }
  return L0.result;
}, {"params": ["Sender", "Key"], "kind": "procedure", "ptypes": ["TObject", "Char"]});
  U.method("TFormN3SD", "FormCanResize", async function FormCanResize(Self, p0, p1, p2, p3) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "newwidth": $.asRef(p1), "newheight": $.asRef(p2), "resize": $.asRef(p3), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await L0["resize"].set(false);
  return L0.result;
}, {"params": ["Sender", "NewWidth", "NewHeight", "Resize"], "kind": "procedure", "ptypes": ["TObject", "Integer", "Integer", "Boolean"]});
  U.method("TFormN3SD", "FormCreate", async function FormCreate(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mset((await $.v(C, "BeginDate")), "DateTime", (await $.v(C, "Get_CurrentDate")));
  await $.mset((await $.v(C, "EndDate")), "DateTime", (await $.v(C, "Get_CurrentDate")));
  await $.set(C, "DatModN3SD", (await $.mcall((await $.v(C, "TDatModN3SD")), "Create", [Self])));
  {
    const $t5 = (await $.wobj(C, "DatModN3SD"));
    await $.mcall((await $.wv([$t5], "CatDatSet", C, false)), "Open", []);
    await $.mcall((await $.wv([$t5], "RegDatSet", C, false)), "Open", []);
    await $.mcall((await $.wv([$t5], "FilialDatSet", C, false)), "Open", []);
    await $.mcall((await $.wv([$t5], "VidDatSet", C, false)), "Open", []);
    await $.mcall((await $.wv([$t5], "Crdinfo", C, false)), "Open", []);
  }
  await $.set(C, "FormProgress", (await $.mcall((await $.v(C, "TFormProgress")), "Create", [Self])));
  await $.stmt((await $.mcall((await $.v(C, "SBTranslateProc")), "TranslateAllCompForms", [Self, (await $.mv((await $.v(C, "sboapiDataModule")), "OrPack_SL"))])));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFormN3SD", "FormDestroy", async function FormDestroy(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t6 = (await $.wobj(C, "DatModN3SD"));
    await $.mcall((await $.wv([$t6], "N3SDDataSet", C, false)), "CloseAll", []);
    await $.mcall((await $.wv([$t6], "CatDatSet", C, false)), "CloseAll", []);
    await $.mcall((await $.wv([$t6], "RegDatSet", C, false)), "CloseAll", []);
    await $.mcall((await $.wv([$t6], "FilialDatSet", C, false)), "CloseAll", []);
    await $.mcall((await $.wv([$t6], "VidDatSet", C, false)), "CloseAll", []);
    await $.mcall((await $.wv([$t6], "Crdinfo", C, false)), "CloseAll", []);
  }
  await $.mcall((await $.v(C, "DatModN3SD")), "Free", []);
  await $.mcall((await $.v(C, "FormProgress")), "Free", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFormN3SD", "SpeedButton2Click", async function SpeedButton2Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.stmt($.call(C, "Close", []));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFormN3SD", "SpeedButton1Click", async function SpeedButton1Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "bdate": 0, "edate": 0, "rcount": 0};
  await $.fixArgs(L0, ["sender"]);
  await $.mset((await $.v(C, "ProgressBar")), "Visible", true);
  L0["bdate"] = (await $.mv((await $.v(C, "BeginDate")), "DateTime"));
  L0["edate"] = (await $.mv((await $.v(C, "EndDate")), "DateTime"));
  {
    const $t7 = (await $.mv((await $.v(C, "DatModN3SD")), "Crdinfo"));
    await $.wset([$t7], "Filtered", (await $.wv([$t7], "False", C, false)), C);
    await $.wset([$t7], "Filter", (await $.wv([$t7], "BuildFilterString", C, false)), C);
    await $.wset([$t7], "Filtered", (await $.wv([$t7], "True", C, false)), C);
    await $.mcall((await $.wv([$t7], "Session", C, false)), "Commit", []);
    await $.wset([$t7], "Rcount", (await $.wv([$t7], "RecordCount", C, false)), { get: async () => L0["rcount"], set: async (v) => { L0["rcount"] = v; }, local: true });
    {
      const $t8 = (await $.wv([$t7], "ProgressBar", C, false));
      await $.wset([$t7, $t8], "Position", 0, C);
      await $.wset([$t7, $t8], "Max", (await $.wv([$t7, $t8], "Rcount", { get: async () => L0["rcount"], set: async (v) => { L0["rcount"] = v; }, local: true }, false)), C);
      await $.wset([$t7, $t8], "Step", 1, C);
    }
    await $.mcall(Self, "Update", []);
    await $.stmt($.wcall([$t7], "First", [], C));
    await $.stmt((await $.wcall([$t7], "LogInformation", ["İxrac başladı", (await $.wv([$t7], "true", C, false))], C)));
    while ($.truthy($.not((await $.wv([$t7], "EOF", C, false))))) {
      await $.stmt((await $.mcall((await $.mv((await $.wv([$t7], "DatModN3SD", C, false)), "CM_N3_SD")), "CallProcedure", ["pn3_sdf", ["p_creditid", (await $.mv((await $.wcall([$t7], "FieldByName", ["ID"], C)), "AsInteger")), "p_bdate", (await $.wv([$t7], "bdate", { get: async () => L0["bdate"], set: async (v) => { L0["bdate"] = v; }, local: true }, false)), "p_edate", (await $.wv([$t7], "edate", { get: async () => L0["edate"], set: async (v) => { L0["edate"] = v; }, local: true }, false))]])));
      await $.mset((await $.wv([$t7], "ProgressBar", C, false)), "Position", $.add((await $.wv([$t7], "RecNo", C, false)), 1));
      await $.stmt($.wcall([$t7], "Next", [], C));
      await $.tick();
    }
    await $.mset((await $.wv([$t7], "ProgressBar", C, false)), "Visible", (await $.wv([$t7], "false", C, false)));
    await $.stmt((await $.wcall([$t7], "LogInformation", ["İxrac qurtardı", (await $.wv([$t7], "true", C, false))], C)));
  }
  {
    const $t9 = (await $.wobj(C, "DatModN3SD"));
    await $.mcall((await $.wv([$t9], "N3SDDataSet", C, false)), "CloseAll", []);
    await $.mcall((await $.wv([$t9], "N3SDDataSet", C, false)), "Open", []);
    {
      const $t10 = (await $.wv([$t9], "ExcelExport", C, false));
      await $.stmt($.wcall([$t9, $t10], "Connect", [], C));
      await $.stmt((await $.wcall([$t9, $t10], "ExportDataset", [(await $.wv([$t9, $t10], "N3SDDataSet", C, false)), "N3-SD", (await $.wv([$t9, $t10], "true", C, false))], C)));
      await $.stmt($.wcall([$t9, $t10], "Disconnect", [], C));
    }
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFormN3SD", "SpeedButton3Click", async function SpeedButton3Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.set(C, "FormProgress", (await $.mcall((await $.v(C, "TFormProgress")), "Create", [Self])));
  await $.mcall((await $.v(C, "FormProgress")), "ShowModal", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFormN3SD", "Button1Click", async function Button1Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mset((await $.v(C, "ProgressBar")), "Visible", true);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.setInitialization(async function __initialization(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: undefined};
  await $.set(C, "FormN3SD", (await $.mcall((await $.v(C, "TFormN3SD")), "Create", [(await $.v(C, "CommonApplication"))])));
  return L0.result;
});
  return U;
}
