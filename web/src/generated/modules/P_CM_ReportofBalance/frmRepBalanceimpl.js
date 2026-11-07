// Generated from frmRepBalanceimpl.pas by pas2js — do not edit by hand; regenerate instead.
/* eslint-disable */
// @ts-nocheck

export default function define($) {
  const U = $.unit("frmRepBalanceimpl", ["Windows", "Messages", "SysUtils", "Classes", "Graphics", "Controls", "Forms", "Dialogs", "StdCtrls", "Mask", "DBCtrlsEh", "DBLookupEh", "ExtCtrls", "Buttons", "ComCtrls", "Db", "OracleData", "CMExcelExport", "Oracle", "Gauges", "commondecls", "sboapiDataModuleImpl", "sbsystem"]);
  const C = [U];
  U.defClass("TFrmrep", "TForm", {"panel1": {"name": "Panel1", "type": "TPanel"}, "groupbox1": {"name": "GroupBox1", "type": "TGroupBox"}, "checkbox1": {"name": "CheckBox1", "type": "TCheckBox"}, "dblookupcomboboxeh1": {"name": "DBLookupComboboxEh1", "type": "TDBLookupComboboxEh"}, "groupbox3": {"name": "GroupBox3", "type": "TGroupBox"}, "dblookupcomboboxeh2": {"name": "DBLookupComboboxEh2", "type": "TDBLookupComboboxEh"}, "checkbox2": {"name": "CheckBox2", "type": "TCheckBox"}, "panel5": {"name": "Panel5", "type": "TPanel"}, "groupbox7": {"name": "GroupBox7", "type": "TGroupBox"}, "checkbox7": {"name": "CheckBox7", "type": "TCheckBox"}, "dblookupcomboboxeh7": {"name": "DBLookupComboboxEh7", "type": "TDBLookupComboboxEh"}, "groupbox9": {"name": "GroupBox9", "type": "TGroupBox"}, "checkbox8": {"name": "CheckBox8", "type": "TCheckBox"}, "dblookupcomboboxeh8": {"name": "DBLookupComboboxEh8", "type": "TDBLookupComboboxEh"}, "bitbtn1": {"name": "BitBtn1", "type": "TBitBtn"}, "bitbtn2": {"name": "BitBtn2", "type": "TBitBtn"}, "panel9": {"name": "Panel9", "type": "TPanel"}, "groupbox10": {"name": "GroupBox10", "type": "TGroupBox"}, "checkbox10": {"name": "CheckBox10", "type": "TCheckBox"}, "groupbox11": {"name": "GroupBox11", "type": "TGroupBox"}, "label1": {"name": "Label1", "type": "TLabel"}, "label2": {"name": "Label2", "type": "TLabel"}, "begindate": {"name": "BeginDate", "type": "TDateTimePicker"}, "enddate": {"name": "EndDate", "type": "TDateTimePicker"}, "valutes": {"name": "Valutes", "type": "TOracleDataSet"}, "valutesvalute": {"name": "ValutesVALUTE", "type": "TIntegerField"}, "filials": {"name": "Filials", "type": "TOracleDataSet"}, "filialsid": {"name": "FilialsID", "type": "TFloatField"}, "filialsname": {"name": "FilialsNAME", "type": "TWideStringField"}, "customertypes": {"name": "CustomerTypes", "type": "TOracleDataSet"}, "customertypesid": {"name": "CustomerTypesID", "type": "TFloatField"}, "customertypesdescription": {"name": "CustomerTypesDESCRIPTION", "type": "TWideStringField"}, "persons": {"name": "Persons", "type": "TOracleDataSet"}, "personsid": {"name": "PersonsID", "type": "TFloatField"}, "personsname": {"name": "PersonsNAME", "type": "TWideStringField"}, "personsdescripion": {"name": "PersonsDESCRIPION", "type": "TWideStringField"}, "dblookupcomboboxeh9": {"name": "DBLookupComboboxEh9", "type": "TDBLookupComboboxEh"}, "credittypes": {"name": "CreditTypes", "type": "TOracleDataSet"}, "credittypesid": {"name": "CreditTypesID", "type": "TFloatField"}, "credittypesrenewablestatus": {"name": "CreditTypesRENEWABLESTATUS", "type": "TFloatField"}, "credittypesitype": {"name": "CreditTypesITYPE", "type": "TFloatField"}, "credittypesiclass": {"name": "CreditTypesICLASS", "type": "TFloatField"}, "credittypesdescription": {"name": "CreditTypesDESCRIPTION", "type": "TWideStringField"}, "credittypescardtype": {"name": "CreditTypesCARDTYPE", "type": "TFloatField"}, "results": {"name": "Results", "type": "TOracleDataSet"}, "credtypedatscr": {"name": "CredTypeDatScr", "type": "TDataSource"}, "personsdatsrc": {"name": "PersonsDatSrc", "type": "TDataSource"}, "custtypedatsrc": {"name": "CustTypeDatSrc", "type": "TDataSource"}, "filialsdatsrc": {"name": "FilialsDatSrc", "type": "TDataSource"}, "valutesdatsrc": {"name": "ValutesDatSrc", "type": "TDataSource"}, "resultsbalance": {"name": "ResultsBALANCE", "type": "TFloatField"}, "resultsnumberofcredit": {"name": "ResultsNUMBEROFCREDIT", "type": "TWideStringField"}, "resultsname": {"name": "ResultsNAME", "type": "TWideStringField"}, "resultsdateofconclusion": {"name": "ResultsDATEOFCONCLUSION", "type": "TDateTimeField"}, "resultsduedatefirstcontract": {"name": "ResultsDUEDATEFIRSTCONTRACT", "type": "TDateTimeField"}, "cm_sd": {"name": "cm_sd", "type": "TOraclePackage"}, "resultsannualyinterestrate": {"name": "ResultsANNUALYINTERESTRATE", "type": "TFloatField"}, "active": {"name": "Active", "type": "TOracleDataSet"}, "resultsval_name": {"name": "ResultsVAL_NAME", "type": "TWideStringField"}, "resultsdescripion": {"name": "ResultsDESCRIPION", "type": "TWideStringField"}, "resultsdovrunevveli": {"name": "ResultsDOVRUNEVVELI", "type": "TFloatField"}, "resultsdovrunsonu": {"name": "ResultsDOVRUNSONU", "type": "TFloatField"}, "resultsodenish": {"name": "ResultsODENISH", "type": "TFloatField"}, "resultstranshe": {"name": "ResultsTRANSHE", "type": "TFloatField"}, "resultsperiod": {"name": "ResultsPERIOD", "type": "TWideStringField"}, "gauge1": {"name": "Gauge1", "type": "TGauge"}, "excelexport": {"name": "ExcelExport", "type": "TCMExcelExport"}, "valutesvalu_name": {"name": "ValutesVALU_NAME", "type": "TWideStringField"}}, {});
  U.init(async () => {
    U.var_("Frmrep", null, "TFrmrep");
  });
  U.func("InitPlugin", async function InitPlugin(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"s": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["s"]);
  await $.mcall((await $.v(C, "Frmrep")), "Showmodal", []);
  return L0.result;
}, {"params": ["S"], "kind": "procedure", "ptypes": ["String"]});
  U.method("TFrmrep", "BuildFilterString", async function BuildFilterString(Self) {
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
  await $.stmt((await $.callv(L0["concatfilter"], [$.ref(async () => L0["result"], async ($t1) => { L0["result"] = $t1; }), "CURRENCY", (await $.mv((await $.v(C, "CheckBox1")), "Checked")), (await $.mv((await $.v(C, "DBLookupComboboxEh1")), "KeyValue"))])));
  await $.stmt((await $.callv(L0["concatfilter"], [$.ref(async () => L0["result"], async ($t2) => { L0["result"] = $t2; }), "BRANCHID", (await $.mv((await $.v(C, "CheckBox2")), "Checked")), (await $.mv((await $.v(C, "DBLookupComboboxEh2")), "KeyValue"))])));
  await $.stmt((await $.callv(L0["concatfilter"], [$.ref(async () => L0["result"], async ($t3) => { L0["result"] = $t3; }), "PERSONALTYPE", (await $.mv((await $.v(C, "CheckBox8")), "Checked")), (await $.mv((await $.v(C, "DBLookupComboboxEh8")), "KeyValue"))])));
  await $.stmt((await $.callv(L0["concatfilter"], [$.ref(async () => L0["result"], async ($t4) => { L0["result"] = $t4; }), "CUSTOMERTYPE", (await $.mv((await $.v(C, "CheckBox7")), "Checked")), (await $.mv((await $.v(C, "DBLookupComboboxEh7")), "KeyValue"))])));
  await $.stmt((await $.callv(L0["concatfilter"], [$.ref(async () => L0["result"], async ($t5) => { L0["result"] = $t5; }), "CREDITTYPE", (await $.mv((await $.v(C, "CheckBox10")), "Checked")), (await $.mv((await $.v(C, "DBLookupComboboxEh9")), "KeyValue"))])));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TFrmrep", "FormCanResize", async function FormCanResize(Self, p0, p1, p2, p3) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "newwidth": $.asRef(p1), "newheight": $.asRef(p2), "resize": $.asRef(p3), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await L0["resize"].set(false);
  return L0.result;
}, {"params": ["Sender", "NewWidth", "NewHeight", "Resize"], "kind": "procedure", "ptypes": ["TObject", "Integer", "Integer", "Boolean"]});
  U.method("TFrmrep", "FormKeyPress", async function FormKeyPress(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "key": $.asRef(p1), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.eq((await $.call(C, "ord", [(await L0["key"].get())])), (await $.v(C, "VK_ESCAPE"))))) {
    await $.stmt($.call(C, "close", []));
  }
  return L0.result;
}, {"params": ["Sender", "Key"], "kind": "procedure", "ptypes": ["TObject", "Char"]});
  U.method("TFrmrep", "FormShow", async function FormShow(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mset((await $.v(C, "BeginDate")), "DateTime", (await $.v(C, "Get_CurrentDate")));
  await $.mset((await $.v(C, "EndDate")), "DateTime", (await $.v(C, "Get_CurrentDate")));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFrmrep", "FormCreate", async function FormCreate(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mcall((await $.v(C, "Valutes")), "Open", []);
  await $.mcall((await $.v(C, "Filials")), "Open", []);
  await $.mcall((await $.v(C, "CustomerTypes")), "Open", []);
  await $.mcall((await $.v(C, "Persons")), "Open", []);
  await $.mcall((await $.v(C, "CreditTypes")), "Open", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFrmrep", "FormDestroy", async function FormDestroy(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mcall((await $.v(C, "Valutes")), "CloseAll", []);
  await $.mcall((await $.v(C, "Filials")), "CloseAll", []);
  await $.mcall((await $.v(C, "CustomerTypes")), "CloseAll", []);
  await $.mcall((await $.v(C, "Persons")), "CloseAll", []);
  await $.mcall((await $.v(C, "CreditTypes")), "CloseAll", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFrmrep", "BitBtn1Click", async function BitBtn1Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "startdate": 0, "findate": 0, "i": 0, "s": '', "cs": ''};
  await $.fixArgs(L0, ["sender"]);
  L0["startdate"] = (await $.call(C, "integer", [(await $.call(C, "trunc", [(await $.mv((await $.v(C, "BeginDate")), "DateTime"))]))]));
  L0["findate"] = (await $.call(C, "integer", [(await $.call(C, "trunc", [(await $.mv((await $.v(C, "EndDate")), "DateTime"))]))]));
  L0["s"] = (await $.v(C, "BuildFilterString"));
  {
    const $t6 = (await $.wobj(C, "active"));
    if ($.truthy((await $.wv([$t6], "Active", C, false)))) {
      await $.stmt($.wcall([$t6], "CloseAll", [], C));
    }
    await $.stmt((await $.wcall([$t6], "SetVariable", ["dat", (await $.wv([$t6], "StartDate", { get: async () => L0["startdate"], set: async (v) => { L0["startdate"] = v; }, local: true }, false))], C)));
    if ($.truthy($.ne((await $.wv([$t6], "s", { get: async () => L0["s"], set: async (v) => { L0["s"] = v; }, local: true }, false)), ""))) {
      { const $t7 = await $.iset((await $.wv([$t6], "SQL", C, false)), [2], $.add(" and ", (await $.wv([$t6], "s", { get: async () => L0["s"], set: async (v) => { L0["s"] = v; }, local: true }, false)))); if ($t7 !== undefined) { await $.wset([$t6], "SQL", $t7, C); } }
    } else {
      { const $t8 = await $.iset((await $.wv([$t6], "SQL", C, false)), [2], ""); if ($t8 !== undefined) { await $.wset([$t6], "SQL", $t8, C); } }
    }
    await $.stmt($.wcall([$t6], "open", [], C));
  }
  await $.mset((await $.v(C, "Gauge1")), "Visible", true);
  await $.mcall((await $.v(C, "active")), "First", []);
  {
    const $t9 = (await $.wobj(C, "active"));
    while ($.truthy($.not((await $.wv([$t9], "EOF", C, false))))) {
      await $.stmt((await $.mcall((await $.wv([$t9], "cm_sd", C, false)), "CallProcedure", ["prepare_sddata", ["p_id", (await $.mv((await $.wcall([$t9], "FieldByName", ["ID"], C)), "AsInteger")), "p_bdat", (await $.wv([$t9], "StartDate", { get: async () => L0["startdate"], set: async (v) => { L0["startdate"] = v; }, local: true }, false)), "p_edat", (await $.wv([$t9], "FinDate", { get: async () => L0["findate"], set: async (v) => { L0["findate"] = v; }, local: true }, false))]])));
      await $.mset((await $.wv([$t9], "Gauge1", C, false)), "Progress", (await $.wcall([$t9], "trunc", [$.fdiv($.mul((await $.wv([$t9], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false)), 100), (await $.wv([$t9], "RecordCount", C, false)))], C)));
      await $.wset([$t9], "i", $.add((await $.wv([$t9], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false)), 1), { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true });
      await $.stmt($.wcall([$t9], "Next", [], C));
      await $.tick();
    }
  }
  await $.mcall((await $.v(C, "Results")), "open", []);
  {
    const $t10 = (await $.wobj(C, "ExcelExport"));
    await $.stmt($.wcall([$t10], "Connect", [], C));
    await $.stmt((await $.wcall([$t10], "ExportDataset", [(await $.wv([$t10], "Results", C, false)), "Hesabat", (await $.wv([$t10], "True", C, false))], C)));
    await $.stmt($.wcall([$t10], "Disconnect", [], C));
  }
  await $.mcall((await $.v(C, "Results")), "close", []);
  await $.mset((await $.v(C, "Gauge1")), "Visible", false);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFrmrep", "BitBtn2Click", async function BitBtn2Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.stmt($.call(C, "Close", []));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.setInitialization(async function __initialization(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: undefined};
  await $.set(C, "Frmrep", (await $.mcall((await $.v(C, "TFrmrep")), "create", [(await $.v(C, "CommonApplication"))])));
  return L0.result;
});
  return U;
}
