// Generated from N2SdUnit.pas by pas2js — do not edit by hand; regenerate instead.
/* eslint-disable */
// @ts-nocheck

export default function define($) {
  const U = $.unit("N2SdUnit", ["Windows", "Messages", "SysUtils", "Classes", "Graphics", "Controls", "Forms", "Dialogs", "CMExcelExport", "Buttons", "ComCtrls", "StdCtrls", "Mask", "DBCtrlsEh", "DBLookupEh", "ExtCtrls", "CommonDecls", "PrUnit", "DatModN2SdImpl", "SbSystem", "SBTranslateProc", "sboapiDataModuleimpl"]);
  const C = [U];
  U.defClass("TFormSd", "TForm", {"panel1": {"name": "Panel1", "type": "TPanel"}, "panel2": {"name": "Panel2", "type": "TPanel"}, "groupbox1": {"name": "GroupBox1", "type": "TGroupBox"}, "groupbox4": {"name": "GroupBox4", "type": "TGroupBox"}, "dblookupcomboboxehbr": {"name": "DBLookupComboboxEhBr", "type": "TDBLookupComboboxEh"}, "checkboxbr": {"name": "CheckBoxBr", "type": "TCheckBox"}, "panel3": {"name": "Panel3", "type": "TPanel"}, "groupbox2": {"name": "GroupBox2", "type": "TGroupBox"}, "dblookupcomboboxehreg": {"name": "DBLookupComboboxEhReg", "type": "TDBLookupComboboxEh"}, "checkboxreg": {"name": "CheckBoxReg", "type": "TCheckBox"}, "groupbox3": {"name": "GroupBox3", "type": "TGroupBox"}, "dblookupcomboboxehval": {"name": "DBLookupComboboxEhVal", "type": "TDBLookupComboboxEh"}, "checkboxval": {"name": "CheckBoxVal", "type": "TCheckBox"}, "groupbox5": {"name": "GroupBox5", "type": "TGroupBox"}, "label1": {"name": "Label1", "type": "TLabel"}, "label2": {"name": "Label2", "type": "TLabel"}, "begindate": {"name": "BeginDate", "type": "TDateTimePicker"}, "enddate": {"name": "EndDate", "type": "TDateTimePicker"}, "chbperiod": {"name": "ChBPeriod", "type": "TCheckBox"}, "speedbutton1": {"name": "SpeedButton1", "type": "TSpeedButton"}, "speedbutton2": {"name": "SpeedButton2", "type": "TSpeedButton"}, "dblookupcomboboxehpr": {"name": "DBLookupComboboxEhPR", "type": "TDBLookupComboboxEh"}, "cmexcelexport1": {"name": "CMExcelExport1", "type": "TCMExcelExport"}, "progressbar": {"name": "ProgressBar", "type": "TProgressBar"}}, {});
  U.init(async () => {
    U.var_("FormSd", null, "TFormSd");
  });
  U.func("InitPlugin", async function InitPlugin(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"s": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["s"]);
  await $.mcall((await $.v(C, "FormSd")), "ShowModal", []);
  return L0.result;
}, {"params": ["s"], "kind": "procedure", "ptypes": ["String"]});
  U.method("TFormSd", "BuildFilterString", async function BuildFilterString(Self) {
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
      await L1["s"].set($.add($.add((await L1["s"].get()), "AND"), L1["temp"]));
    }
  }
  return L1.result;
});
  L0["result"] = "";
  await $.stmt((await $.callv(L0["concatfilter"], [$.ref(async () => L0["result"], async ($t1) => { L0["result"] = $t1; }), "CURRENCY", (await $.mv((await $.v(C, "CheckBoxVal")), "Checked")), (await $.mv((await $.v(C, "DBLookupComboboxEhVal")), "KeyValue"))])));
  await $.stmt((await $.callv(L0["concatfilter"], [$.ref(async () => L0["result"], async ($t2) => { L0["result"] = $t2; }), "BRANCHID", (await $.mv((await $.v(C, "CheckBoxBr")), "Checked")), (await $.mv((await $.v(C, "DBLookupComboboxEhBr")), "KeyValue"))])));
  await $.stmt((await $.callv(L0["concatfilter"], [$.ref(async () => L0["result"], async ($t3) => { L0["result"] = $t3; }), "PERIOD", (await $.mv((await $.v(C, "ChBPeriod")), "Checked")), (await $.mv((await $.v(C, "DBLookupComboboxEhPR")), "KeyValue"))])));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TFormSd", "FormCreate", async function FormCreate(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mset((await $.v(C, "BeginDate")), "DateTime", (await $.v(C, "Get_CurrentDate")));
  await $.mset((await $.v(C, "EndDate")), "DateTime", (await $.v(C, "Get_CurrentDate")));
  await $.set(C, "DatModN2Sd", (await $.mcall((await $.v(C, "TDatModN2Sd")), "Create", [Self])));
  await $.stmt((await $.mcall((await $.v(C, "SBTranslateProc")), "TranslateAllCompForms", [Self, (await $.mv((await $.v(C, "sboapiDataModule")), "OrPack_SL"))])));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFormSd", "SpeedButton1Click", async function SpeedButton1Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "filterstr": '', "bdate": 0, "edate": 0, "s": '', "d": ''};
  await $.fixArgs(L0, ["sender"]);
  L0["bdate"] = (await $.mv((await $.v(C, "Begindate")), "DateTime"));
  L0["edate"] = (await $.mv((await $.v(C, "EndDate")), "DateTime"));
  L0["filterstr"] = (await $.v(C, "BuildFilterString"));
  if ($.truthy((await $.mv((await $.v(C, "CheckBoxReg")), "Checked")))) {
    L0["s"] = $.add($.add("where id in (select creditid from cm_business_plan bp,agro_region r,agro_village v  where v.depend_id = r.ID and  bp.villageid = v.ID and  r.id= ", (await $.mv((await $.mcall((await $.mv((await $.v(C, "DatModN2Sd")), "RegDatSet")), "FieldByName", ["ID"])), "AsString"))), " )");
  } else {
    L0["s"] = "";
  }
  {
    const $t4 = (await $.wobj(C, "DatModN2Sd"));
    {
      const $t5 = (await $.wv([$t4], "CrdinfoDatSet", C, false));
      await $.wset([$t4, $t5], "Filtered", (await $.wv([$t4, $t5], "False", C, false)), C);
      await $.wset([$t4, $t5], "Filter", (await $.wv([$t4, $t5], "FilterStr", { get: async () => L0["filterstr"], set: async (v) => { L0["filterstr"] = v; }, local: true }, false)), C);
      await $.wset([$t4, $t5], "Filtered", (await $.wv([$t4, $t5], "True", C, false)), C);
      await $.stmt($.wcall([$t4, $t5], "close", [], C));
      { const $t6 = await $.iset((await $.wv([$t4, $t5], "SQL", C, false)), [3], (await $.wv([$t4, $t5], "S", { get: async () => L0["s"], set: async (v) => { L0["s"] = v; }, local: true }, false))); if ($t6 !== undefined) { await $.wset([$t4, $t5], "SQL", $t6, C); } }
      await $.stmt($.wcall([$t4, $t5], "open", [], C));
      await $.mcall((await $.wv([$t4, $t5], "Session", C, false)), "Commit", []);
      {
        const $t7 = (await $.wv([$t4, $t5], "ProgressBar", C, false));
        await $.wset([$t4, $t5, $t7], "Position", 0, C);
        await $.wset([$t4, $t5, $t7], "Max", (await $.wv([$t4, $t5, $t7], "RecordCount", C, false)), C);
        await $.wset([$t4, $t5, $t7], "Step", 1, C);
      }
      await $.mset((await $.wv([$t4, $t5], "FormSd", C, false)), "Height", 207);
      await $.mcall(Self, "Update", []);
      await $.stmt($.wcall([$t4, $t5], "First", [], C));
      while ($.truthy($.not((await $.wv([$t4, $t5], "EOF", C, false))))) {
        await $.stmt((await $.mcall((await $.wv([$t4, $t5], "CM_N3_SD", C, false)), "CallProcedure", ["pn2_sdf", ["p_creditid", (await $.mv((await $.wcall([$t4, $t5], "FieldByName", ["ID"], C)), "AsInteger")), "p_bdate", (await $.wv([$t4, $t5], "bdate", { get: async () => L0["bdate"], set: async (v) => { L0["bdate"] = v; }, local: true }, false)), "p_edate", (await $.wv([$t4, $t5], "edate", { get: async () => L0["edate"], set: async (v) => { L0["edate"] = v; }, local: true }, false))]])));
        await $.mset((await $.wv([$t4, $t5], "ProgressBar", C, false)), "Position", $.add((await $.wv([$t4, $t5], "RecNo", C, false)), 1));
        await $.stmt($.wcall([$t4, $t5], "Next", [], C));
        await $.tick();
      }
      await $.mset((await $.wv([$t4, $t5], "FormSd", C, false)), "Height", 188);
    }
    {
      const $t8 = (await $.wv([$t4], "ResultDatSet", C, false));
      if ($.truthy((await $.wv([$t4, $t8], "Active", C, false)))) {
        await $.stmt($.wcall([$t4, $t8], "CloseAll", [], C));
      }
      await $.stmt($.wcall([$t4, $t8], "Open", [], C));
    }
    {
      const $t9 = (await $.wv([$t4], "CMExcelExport1", C, false));
      await $.stmt($.wcall([$t4, $t9], "Connect", [], C));
      await $.stmt((await $.wcall([$t4, $t9], "ExportDataset", [(await $.wv([$t4, $t9], "ResultDatSet", C, false)), "Forma N2-SD", (await $.wv([$t4, $t9], "true", C, false))], C)));
      await $.stmt($.wcall([$t4, $t9], "Disconnect", [], C));
    }
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFormSd", "SpeedButton2Click", async function SpeedButton2Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.stmt($.call(C, "close", []));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.setInitialization(async function __initialization(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: undefined};
  await $.set(C, "FormSd", (await $.mcall((await $.v(C, "TFormSd")), "Create", [(await $.v(C, "CommonApplication"))])));
  return L0.result;
});
  return U;
}
