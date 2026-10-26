// Generated from frmReportofBalanceImpl_new.pas by pas2js — do not edit by hand; regenerate instead.
/* eslint-disable */
// @ts-nocheck

export default function define($) {
  const U = $.unit("frmReportofBalanceImpl_new", ["Windows", "Messages", "SysUtils", "Classes", "Graphics", "Controls", "Forms", "Dialogs", "StdCtrls", "Buttons", "Db", "CMExcelExport", "OracleData", "ComCtrls", "Mask", "DBCtrlsEh", "DBLookupEh", "ExtCtrls", "sboapiDataModuleImpl", "CommonDeclsImpl_new", "SBTranslateProc"]);
  const C = [U];
  U.defClass("TfrmReport_new", "TForm", {"bitbtn1": {"name": "BitBtn1", "type": "TBitBtn"}, "bitbtn2": {"name": "BitBtn2", "type": "TBitBtn"}, "credittypes": {"name": "CreditTypes", "type": "TOracleDataSet"}, "credittypesid": {"name": "CreditTypesID", "type": "TFloatField"}, "credittypestype": {"name": "CreditTypesTYPE", "type": "TWideStringField"}, "customertypes": {"name": "CustomerTypes", "type": "TOracleDataSet"}, "customertypesid": {"name": "CustomerTypesID", "type": "TFloatField"}, "customertypescategory": {"name": "CustomerTypesCATEGORY", "type": "TWideStringField"}, "excelexport": {"name": "ExcelExport", "type": "TCMExcelExport"}, "filials": {"name": "Filials", "type": "TOracleDataSet"}, "filialsid": {"name": "FilialsID", "type": "TFloatField"}, "filialsname": {"name": "FilialsNAME", "type": "TWideStringField"}, "query": {"name": "query", "type": "TOracleDataSet"}, "querysmr": {"name": "querySMR", "type": "TFloatField"}, "panel1": {"name": "Panel1", "type": "TPanel"}, "groupbox1": {"name": "GroupBox1", "type": "TGroupBox"}, "checkbox1": {"name": "CheckBox1", "type": "TCheckBox"}, "dblookupcomboboxeh1": {"name": "DBLookupComboboxEh1", "type": "TDBLookupComboboxEh"}, "groupbox3": {"name": "GroupBox3", "type": "TGroupBox"}, "dblookupcomboboxeh2": {"name": "DBLookupComboboxEh2", "type": "TDBLookupComboboxEh"}, "checkbox2": {"name": "CheckBox2", "type": "TCheckBox"}, "panel5": {"name": "Panel5", "type": "TPanel"}, "groupbox7": {"name": "GroupBox7", "type": "TGroupBox"}, "checkbox7": {"name": "CheckBox7", "type": "TCheckBox"}, "dblookupcomboboxeh7": {"name": "DBLookupComboboxEh7", "type": "TDBLookupComboboxEh"}, "groupbox9": {"name": "GroupBox9", "type": "TGroupBox"}, "checkbox8": {"name": "CheckBox8", "type": "TCheckBox"}, "dblookupcomboboxeh8": {"name": "DBLookupComboboxEh8", "type": "TDBLookupComboboxEh"}, "panel9": {"name": "Panel9", "type": "TPanel"}, "groupbox10": {"name": "GroupBox10", "type": "TGroupBox"}, "checkbox10": {"name": "CheckBox10", "type": "TCheckBox"}, "dblookupcomboboxeh9": {"name": "DBLookupComboboxEh9", "type": "TDBLookupComboboxEh"}, "groupbox11": {"name": "GroupBox11", "type": "TGroupBox"}, "label1": {"name": "Label1", "type": "TLabel"}, "label2": {"name": "Label2", "type": "TLabel"}, "begindate": {"name": "BeginDate", "type": "TDateTimePicker"}, "enddate": {"name": "EndDate", "type": "TDateTimePicker"}, "persons": {"name": "Persons", "type": "TOracleDataSet"}, "personsid": {"name": "PersonsID", "type": "TFloatField"}, "personsname": {"name": "PersonsNAME", "type": "TWideStringField"}, "results": {"name": "Results", "type": "TOracleDataSet"}, "resultscontractno": {"name": "ResultsCONTRACTNO", "type": "TWideStringField"}, "resultsopendate": {"name": "ResultsOPENDATE", "type": "TDateTimeField"}, "resultsclosedate": {"name": "ResultsCLOSEDATE", "type": "TDateTimeField"}, "resultsbalance": {"name": "ResultsBALANCE", "type": "TFloatField"}, "resultsintrate": {"name": "ResultsINTRATE", "type": "TFloatField"}, "resultsperiod": {"name": "ResultsPERIOD", "type": "TWideStringField"}, "resultsvalute": {"name": "ResultsVALUTE", "type": "TWideStringField"}, "resultsbrest": {"name": "ResultsBREST", "type": "TFloatField"}, "resultstramt": {"name": "ResultsTRAMT", "type": "TFloatField"}, "resultspayamt": {"name": "ResultsPAYAMT", "type": "TFloatField"}, "resultserest": {"name": "ResultsEREST", "type": "TFloatField"}, "resultsroundint": {"name": "ResultsROUNDINT", "type": "TFloatField"}, "valutes": {"name": "Valutes", "type": "TOracleDataSet"}, "valutesvalute": {"name": "ValutesVALUTE", "type": "TIntegerField"}, "valutesvalu_name": {"name": "ValutesVALU_NAME", "type": "TWideStringField"}, "valutesdatsrc": {"name": "ValutesDatSrc", "type": "TDataSource"}, "filialsdatsrc": {"name": "FilialsDatSrc", "type": "TDataSource"}, "custtypedatsrc": {"name": "CustTypeDatSrc", "type": "TDataSource"}, "personsdatsrc": {"name": "PersonsDatSrc", "type": "TDataSource"}, "credtypedatscr": {"name": "CredTypeDatScr", "type": "TDataSource"}}, {});
  U.init(async () => {
    U.var_("frmReport_new", null, "TfrmReport_new");
  });
  U.func("exportproc", async function exportproc(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"s": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["s"]);
  await $.mcall((await $.v(C, "frmReport_new")), "ShowModal", []);
  return L0.result;
}, {"params": ["S"], "kind": "procedure", "ptypes": ["String"]});
  U.method("TfrmReport_new", "BitBtn1Click", async function BitBtn1Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "startdate": 0, "findate": 0, "s": '', "cs": '', "sm": 0};
  await $.fixArgs(L0, ["sender"]);
  L0["sm"] = 0;
  L0["startdate"] = (await $.call(C, "integer", [(await $.call(C, "trunc", [(await $.mv((await $.v(C, "BeginDate")), "DateTime"))]))]));
  L0["findate"] = (await $.call(C, "integer", [(await $.call(C, "trunc", [(await $.mv((await $.v(C, "EndDate")), "DateTime"))]))]));
  L0["cs"] = " order by  balance ";
  L0["s"] = (await $.v(C, "BuildFilterString"));
  {
    const $t1 = (await $.v(C, "query"));
    if ($.truthy((await $.wv([$t1], "Active", C, false)))) {
      await $.stmt($.wcall([$t1], "close", [], C));
    }
    if ($.truthy($.ne((await $.wv([$t1], "s", { get: async () => L0["s"], set: async (v) => { L0["s"] = v; }, local: true }, false)), ""))) {
      { const $t2 = await $.iset((await $.wv([$t1], "sql", C, false)), [1], $.add($.add(" where id# in (select id from sbcm_contracts where ", (await $.wv([$t1], "s", { get: async () => L0["s"], set: async (v) => { L0["s"] = v; }, local: true }, false))), " and type# in (3,4) )")); if ($t2 !== undefined) { await $.wset([$t1], "sql", $t2, C); } }
    }
    await $.stmt($.wcall([$t1], "open", [], C));
    await $.wset([$t1], "sm", (await $.mv((await $.wcall([$t1], "fieldByName", ["SMR"], C)), "AsFloat")), { get: async () => L0["sm"], set: async (v) => { L0["sm"] = v; }, local: true });
    if ($.truthy($.eq((await $.wv([$t1], "sm", { get: async () => L0["sm"], set: async (v) => { L0["sm"] = v; }, local: true }, false)), 0))) {
      await $.wset([$t1], "sm", 1, { get: async () => L0["sm"], set: async (v) => { L0["sm"] = v; }, local: true });
    }
  }
  {
    const $t3 = (await $.v(C, "Results"));
    if ($.truthy($.ne((await $.wv([$t3], "s", { get: async () => L0["s"], set: async (v) => { L0["s"] = v; }, local: true }, false)), ""))) {
      await $.wset([$t3], "s", $.add($.add($.add(" where  ", (await $.wv([$t3], "s", { get: async () => L0["s"], set: async (v) => { L0["s"] = v; }, local: true }, false))), " and type# in (3,4) "), (await $.wv([$t3], "cs", { get: async () => L0["cs"], set: async (v) => { L0["cs"] = v; }, local: true }, false))), { get: async () => L0["s"], set: async (v) => { L0["s"] = v; }, local: true });
    } else {
      await $.wset([$t3], "s", $.add(" where  type# in (3,4) ", (await $.wv([$t3], "cs", { get: async () => L0["cs"], set: async (v) => { L0["cs"] = v; }, local: true }, false))), { get: async () => L0["s"], set: async (v) => { L0["s"] = v; }, local: true });
    }
    { const $t4 = await $.iset((await $.wv([$t3], "SQL", C, false)), [13], (await $.wv([$t3], "s", { get: async () => L0["s"], set: async (v) => { L0["s"] = v; }, local: true }, false))); if ($t4 !== undefined) { await $.wset([$t3], "SQL", $t4, C); } }
    if ($.truthy((await $.wv([$t3], "Active", C, false)))) {
      await $.stmt($.wcall([$t3], "CloseAll", [], C));
    }
    await $.stmt((await $.wcall([$t3], "SetVariable", ["bdat", (await $.wv([$t3], "StartDate", { get: async () => L0["startdate"], set: async (v) => { L0["startdate"] = v; }, local: true }, false))], C)));
    await $.stmt((await $.wcall([$t3], "SetVariable", ["edat", (await $.wv([$t3], "FinDate", { get: async () => L0["findate"], set: async (v) => { L0["findate"] = v; }, local: true }, false))], C)));
    await $.stmt((await $.wcall([$t3], "SetVariable", ["sm", (await $.wv([$t3], "sm", { get: async () => L0["sm"], set: async (v) => { L0["sm"] = v; }, local: true }, false))], C)));
    await $.stmt($.wcall([$t3], "Open", [], C));
    {
      const $t5 = (await $.wv([$t3], "ExcelExport", C, false));
      await $.stmt($.wcall([$t3, $t5], "Connect", [], C));
      await $.stmt((await $.wcall([$t3, $t5], "ExportDataset", [(await $.wv([$t3, $t5], "Results", C, false)), "Hesabat", (await $.wv([$t3, $t5], "True", C, false))], C)));
      await $.stmt($.wcall([$t3, $t5], "Disconnect", [], C));
    }
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TfrmReport_new", "BitBtn2Click", async function BitBtn2Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.stmt($.call(C, "Close", []));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TfrmReport_new", "BuildFilterString", async function BuildFilterString(Self) {
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
  await $.stmt((await $.callv(L0["concatfilter"], [L0["result"], "CURRENCY", (await $.mv((await $.v(C, "CheckBox1")), "Checked")), (await $.mv((await $.v(C, "DBLookupComboboxEh1")), "KeyValue"))])));
  await $.stmt((await $.callv(L0["concatfilter"], [L0["result"], "BRANCHID", (await $.mv((await $.v(C, "CheckBox2")), "Checked")), (await $.mv((await $.v(C, "DBLookupComboboxEh2")), "KeyValue"))])));
  await $.stmt((await $.callv(L0["concatfilter"], [L0["result"], "PERSONALTYPE", (await $.mv((await $.v(C, "CheckBox8")), "Checked")), (await $.mv((await $.v(C, "DBLookupComboboxEh8")), "KeyValue"))])));
  await $.stmt((await $.callv(L0["concatfilter"], [L0["result"], "CLIENTTYPE", (await $.mv((await $.v(C, "CheckBox7")), "Checked")), (await $.mv((await $.v(C, "DBLookupComboboxEh7")), "KeyValue"))])));
  await $.stmt((await $.callv(L0["concatfilter"], [L0["result"], "CONTRACTTYPE", (await $.mv((await $.v(C, "CheckBox10")), "Checked")), (await $.mv((await $.v(C, "DBLookupComboboxEh9")), "KeyValue"))])));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TfrmReport_new", "FormCanResize", async function FormCanResize(Self, p0, p1, p2, p3) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "newwidth": $.asRef(p1), "newheight": $.asRef(p2), "resize": $.asRef(p3), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await L0["resize"].set(false);
  return L0.result;
}, {"params": ["Sender", "NewWidth", "NewHeight", "Resize"], "kind": "procedure", "ptypes": ["TObject", "Integer", "Integer", "Boolean"]});
  U.method("TfrmReport_new", "FormCreate", async function FormCreate(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mcall((await $.v(C, "Valutes")), "Open", []);
  await $.mcall((await $.v(C, "Filials")), "Open", []);
  await $.mcall((await $.v(C, "CustomerTypes")), "Open", []);
  await $.mcall((await $.v(C, "Persons")), "Open", []);
  await $.mcall((await $.v(C, "CreditTypes")), "Open", []);
  await $.stmt((await $.mcall((await $.v(C, "SBTranslateProc")), "TranslateAllCompForms", [Self, (await $.mv((await $.v(C, "sboapiDataModule")), "OrPack_SL"))])));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TfrmReport_new", "FormDestroy", async function FormDestroy(Self, p0) {
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
  U.method("TfrmReport_new", "FormKeyPress", async function FormKeyPress(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "key": $.asRef(p1), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.eq((await $.call(C, "Ord", [(await L0["key"].get())])), (await $.v(C, "VK_ESCAPE"))))) {
    await $.stmt($.call(C, "close", []));
  }
  return L0.result;
}, {"params": ["Sender", "Key"], "kind": "procedure", "ptypes": ["TObject", "Char"]});
  U.setInitialization(async function __initialization(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: undefined};
  await $.set(C, "frmReport_new", (await $.mcall((await $.v(C, "TfrmReport_new")), "Create", [(await $.v(C, "CommonApplication"))])));
  return L0.result;
});
  return U;
}
