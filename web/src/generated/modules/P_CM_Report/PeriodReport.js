// Generated from PeriodReport.pas by pas2js — do not edit by hand; regenerate instead.
/* eslint-disable */
// @ts-nocheck

export default function define($) {
  const U = $.unit("PeriodReport", ["Windows", "Messages", "SysUtils", "Classes", "Graphics", "Controls", "Forms", "Dialogs", "NLSLocalizer", "CMExcelExport", "Oracle", "Db", "OracleData", "StdCtrls", "Mask", "DBCtrlsEh", "DBLookupEh", "ExtCtrls", "ComCtrls", "Grids", "DBGrids", "DBGridEh", "sboapiDataModuleImpl", "CommonDecls", "MISProgressFormImpl", "sbsystem"]);
  const C = [U];
  U.defClass("TPeriodReportForm", "TForm", {"creditsds": {"name": "CreditsDS", "type": "TOracleDataSet"}, "cm_ak_reports": {"name": "CM_AK_REPORTS", "type": "TOraclePackage"}, "dscurrencys": {"name": "DSCurrencys", "type": "TDataSource"}, "currencys": {"name": "Currencys", "type": "TOracleDataSet"}, "dsbranches": {"name": "DSBranches", "type": "TDataSource"}, "branches": {"name": "Branches", "type": "TOracleDataSet"}, "dsusergroups": {"name": "DSUserGroups", "type": "TDataSource"}, "usergroups": {"name": "UserGroups", "type": "TOracleDataSet"}, "dspersons": {"name": "DSPersons", "type": "TDataSource"}, "persons": {"name": "Persons", "type": "TOracleDataSet"}, "dscategories": {"name": "DSCategories", "type": "TDataSource"}, "categories": {"name": "Categories", "type": "TOracleDataSet"}, "panel1": {"name": "Panel1", "type": "TPanel"}, "groupbox1": {"name": "GroupBox1", "type": "TGroupBox"}, "checkbox1": {"name": "CheckBox1", "type": "TCheckBox"}, "dblookupcomboboxeh1": {"name": "DBLookupComboboxEh1", "type": "TDBLookupComboboxEh"}, "groupbox2": {"name": "GroupBox2", "type": "TGroupBox"}, "dblookupcomboboxeh3": {"name": "DBLookupComboboxEh3", "type": "TDBLookupComboboxEh"}, "checkbox3": {"name": "CheckBox3", "type": "TCheckBox"}, "groupbox3": {"name": "GroupBox3", "type": "TGroupBox"}, "dblookupcomboboxeh2": {"name": "DBLookupComboboxEh2", "type": "TDBLookupComboboxEh"}, "checkbox2": {"name": "CheckBox2", "type": "TCheckBox"}, "panel5": {"name": "Panel5", "type": "TPanel"}, "groupbox7": {"name": "GroupBox7", "type": "TGroupBox"}, "checkbox7": {"name": "CheckBox7", "type": "TCheckBox"}, "dblookupcomboboxeh7": {"name": "DBLookupComboboxEh7", "type": "TDBLookupComboboxEh"}, "groupbox9": {"name": "GroupBox9", "type": "TGroupBox"}, "checkbox8": {"name": "CheckBox8", "type": "TCheckBox"}, "dblookupcomboboxeh8": {"name": "DBLookupComboboxEh8", "type": "TDBLookupComboboxEh"}, "groupbox4": {"name": "GroupBox4", "type": "TGroupBox"}, "bdatep": {"name": "BDateP", "type": "TDateTimePicker"}, "edatep": {"name": "EDateP", "type": "TDateTimePicker"}, "label1": {"name": "Label1", "type": "TLabel"}, "label2": {"name": "Label2", "type": "TLabel"}, "resultds": {"name": "ResultDS", "type": "TOracleDataSet"}, "button1": {"name": "Button1", "type": "TButton"}, "button2": {"name": "Button2", "type": "TButton"}, "kera": {"name": "Kera", "type": "TCMExcelExport"}, "resultdsnumberofcredit": {"name": "ResultDSNUMBEROFCREDIT", "type": "TWideStringField"}, "resultdscontractno": {"name": "ResultDSCONTRACTNO", "type": "TWideStringField"}, "resultdsinterestaccno": {"name": "ResultDSINTERESTACCNO", "type": "TWideStringField"}, "resultdsdueloanaccno": {"name": "ResultDSDUELOANACCNO", "type": "TWideStringField"}, "resultdsdueinterestaccno": {"name": "ResultDSDUEINTERESTACCNO", "type": "TWideStringField"}, "resultdspresaccno": {"name": "ResultDSPRESACCNO", "type": "TWideStringField"}, "resultdssecrestaccno": {"name": "ResultDSSECRESTACCNO", "type": "TWideStringField"}, "resultdspbmain": {"name": "ResultDSPBMAIN", "type": "TFloatField"}, "resultdspebmain": {"name": "ResultDSPEBMAIN", "type": "TFloatField"}, "resultdspbint": {"name": "ResultDSPBINT", "type": "TFloatField"}, "resultdspebint": {"name": "ResultDSPEBINT", "type": "TFloatField"}, "resultdspbduemain": {"name": "ResultDSPBDUEMAIN", "type": "TFloatField"}, "resultdspebduemain": {"name": "ResultDSPEBDUEMAIN", "type": "TFloatField"}, "resultdspbdueint": {"name": "ResultDSPBDUEINT", "type": "TFloatField"}, "resultdspebdueint": {"name": "ResultDSPEBDUEINT", "type": "TFloatField"}, "resultdspaymain": {"name": "ResultDSPAYMAIN", "type": "TFloatField"}, "resultdsepaymain": {"name": "ResultDSEPAYMAIN", "type": "TFloatField"}, "resultdspayint": {"name": "ResultDSPAYINT", "type": "TFloatField"}, "resultdsepayint": {"name": "ResultDSEPAYINT", "type": "TFloatField"}, "resultdspaydue": {"name": "ResultDSPAYDUE", "type": "TFloatField"}, "resultdsepaydue": {"name": "ResultDSEPAYDUE", "type": "TFloatField"}, "resultdspaydueint": {"name": "ResultDSPAYDUEINT", "type": "TFloatField"}, "resultdsepaydueint": {"name": "ResultDSEPAYDUEINT", "type": "TFloatField"}, "resultdstranchemain": {"name": "ResultDSTRANCHEMAIN", "type": "TFloatField"}, "resultdsetranchemain": {"name": "ResultDSETRANCHEMAIN", "type": "TFloatField"}, "resultdspemain": {"name": "ResultDSPEMAIN", "type": "TFloatField"}, "resultdsepemain": {"name": "ResultDSEPEMAIN", "type": "TFloatField"}, "resultdspeint": {"name": "ResultDSPEINT", "type": "TFloatField"}, "resultdsepeint": {"name": "ResultDSEPEINT", "type": "TFloatField"}, "resultdspeduemain": {"name": "ResultDSPEDUEMAIN", "type": "TFloatField"}, "resultdsepeduemain": {"name": "ResultDSEPEDUEMAIN", "type": "TFloatField"}, "resultdspedueint": {"name": "ResultDSPEDUEINT", "type": "TFloatField"}, "resultdsepedueint": {"name": "ResultDSEPEDUEINT", "type": "TFloatField"}, "resultdscrdperiod": {"name": "ResultDSCRDPERIOD", "type": "TFloatField"}, "resultdsbalcn": {"name": "ResultDSBALCN", "type": "TFloatField"}, "resultdsname": {"name": "ResultDSNAME", "type": "TWideStringField"}, "resultdsperson": {"name": "ResultDSPERSON", "type": "TWideStringField"}, "resultdsproject": {"name": "ResultDSPROJECT", "type": "TWideStringField"}, "resultdsfilial": {"name": "ResultDSFILIAL", "type": "TWideStringField"}, "resultdsval_name": {"name": "ResultDSVAL_NAME", "type": "TWideStringField"}, "resultdsdateofconclusion": {"name": "ResultDSDATEOFCONCLUSION", "type": "TDateTimeField"}, "resultdsduedatefirstcontract": {"name": "ResultDSDUEDATEFIRSTCONTRACT", "type": "TDateTimeField"}, "groupbox5": {"name": "GroupBox5", "type": "TGroupBox"}, "label3": {"name": "Label3", "type": "TLabel"}, "label4": {"name": "Label4", "type": "TLabel"}, "datetimepicker1": {"name": "DateTimePicker1", "type": "TDateTimePicker"}, "datetimepicker2": {"name": "DateTimePicker2", "type": "TDateTimePicker"}, "resultdscreditid": {"name": "ResultDSCREDITID", "type": "TFloatField"}, "resultdsannualyinterestrate": {"name": "ResultDSANNUALYINTERESTRATE", "type": "TFloatField"}}, {});
  U.init(async () => {
    U.var_("PeriodReportForm", null, "TPeriodReportForm");
  });
  U.method("TPeriodReportForm", "PrepareProgress", async function PrepareProgress(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"progcnt": $.copyArg(p0), "opdesc": $.copyArg(p1), result: undefined};
  await $.fixArgs(L0, ["progcnt", "opdesc"]);
  {
    const $t1 = (await $.wobj(C, "MISProgressForm"));
    const $t2 = (await $.wv([$t1], "ProgressShower", C, false));
    await $.wset([$t1, $t2], "Position", 0, C);
    await $.wset([$t1, $t2], "Max", (await $.wv([$t1, $t2], "ProgCnt", { get: async () => L0["progcnt"], set: async (v) => { L0["progcnt"] = v; }, local: true }, false)), C);
    await $.wset([$t1, $t2], "Step", 1, C);
  }
  await $.mcall((await $.v(C, "MISProgressForm")), "Show", []);
  return L0.result;
}, {"params": ["ProgCnt", "opDesc"], "kind": "procedure", "ptypes": ["Integer", "String"]});
  U.method("TPeriodReportForm", "InsertOneRow", async function InsertOneRow(Self, p0, p1, p2) {
  const C = $.chain(Self, U);
  const L0 = {"pid": $.copyArg(p0), "bdate": $.copyArg(p1), "edate": $.copyArg(p2), result: undefined};
  await $.fixArgs(L0, ["pid", "bdate", "edate"]);
  L0["rscreditnumber"] = "%d - № li kredit : ";
  {
    const $t3 = (await $.wobj(C, "CM_AK_REPORTS"));
    try {
      await $.stmt((await $.wcall([$t3], "CallProcedure", ["insinfod", ["p_ID", (await $.wv([$t3], "pID", { get: async () => L0["pid"], set: async (v) => { L0["pid"] = v; }, local: true }, false)), "p_bDate", (await $.wv([$t3], "bDate", { get: async () => L0["bdate"], set: async (v) => { L0["bdate"] = v; }, local: true }, false)), "p_eDate", (await $.wv([$t3], "eDate", { get: async () => L0["edate"], set: async (v) => { L0["edate"] = v; }, local: true }, false))]], C)));
    } catch ($t4) {
      $.rethrowControl($t4);
      if ($.excIs($t4, "Exception")) {
        L0["e"] = $.exc($t4);
        await $.stmt((await $.wcall([$t3], "LogError", [$.add((await $.wcall([$t3], "Format", [(await $.wv([$t3], "rsCreditNumber", { get: async () => L0["rscreditnumber"], set: async (v) => { L0["rscreditnumber"] = v; }, local: true }, false)), [(await $.wv([$t3], "pid", { get: async () => L0["pid"], set: async (v) => { L0["pid"] = v; }, local: true }, false))]], C)), (await $.mv((await $.wv([$t3], "E", { get: async () => L0["e"], set: async (v) => { L0["e"] = v; }, local: true }, false)), "Message")))], C)));
      }
      else { throw $t4; }
    }
  }
  return L0.result;
}, {"params": ["PID", "BDate", "EDate"], "kind": "procedure", "ptypes": ["Integer", "TDateTime", "TDateTime"]});
  U.method("TPeriodReportForm", "BuildFilterString", async function BuildFilterString(Self) {
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
  await $.stmt((await $.callv(L0["concatfilter"], [$.ref(async () => L0["result"], async ($t5) => { L0["result"] = $t5; }), "CURRENCY", (await $.mv((await $.v(C, "CheckBox1")), "Checked")), (await $.mv((await $.v(C, "DBLookupComboboxEh1")), "KeyValue"))])));
  await $.stmt((await $.callv(L0["concatfilter"], [$.ref(async () => L0["result"], async ($t6) => { L0["result"] = $t6; }), "BRANCHID", (await $.mv((await $.v(C, "CheckBox2")), "Checked")), (await $.mv((await $.v(C, "DBLookupComboboxEh2")), "KeyValue"))])));
  await $.stmt((await $.callv(L0["concatfilter"], [$.ref(async () => L0["result"], async ($t7) => { L0["result"] = $t7; }), "USRGROUP", (await $.mv((await $.v(C, "CheckBox3")), "Checked")), (await $.mv((await $.v(C, "DBLookupComboboxEh3")), "KeyValue"))])));
  await $.stmt((await $.callv(L0["concatfilter"], [$.ref(async () => L0["result"], async ($t8) => { L0["result"] = $t8; }), "PERSONALTYPE", (await $.mv((await $.v(C, "CheckBox7")), "Checked")), (await $.mv((await $.v(C, "DBLookupComboboxEh7")), "KeyValue"))])));
  await $.stmt((await $.callv(L0["concatfilter"], [$.ref(async () => L0["result"], async ($t9) => { L0["result"] = $t9; }), "CUSTOMERTYPE", (await $.mv((await $.v(C, "CheckBox8")), "Checked")), (await $.mv((await $.v(C, "DBLookupComboboxEh8")), "KeyValue"))])));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TPeriodReportForm", "FormCanResize", async function FormCanResize(Self, p0, p1, p2, p3) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "newwidth": $.asRef(p1), "newheight": $.asRef(p2), "resize": $.asRef(p3), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await L0["resize"].set(false);
  return L0.result;
}, {"params": ["Sender", "NewWidth", "NewHeight", "Resize"], "kind": "procedure", "ptypes": ["TObject", "Integer", "Integer", "Boolean"]});
  U.method("TPeriodReportForm", "ShowMe", async function ShowMe(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: undefined};
  await $.mcall((await $.v(C, "Currencys")), "Open", []);
  await $.mcall((await $.v(C, "Branches")), "Open", []);
  await $.mcall((await $.v(C, "Persons")), "Open", []);
  await $.mcall((await $.v(C, "Categories")), "Open", []);
  await $.mcall((await $.v(C, "UserGroups")), "Open", []);
  await $.stmt($.call(C, "ShowModal", []));
  return L0.result;
}, {"params": [], "kind": "procedure", "ptypes": []});
  U.method("TPeriodReportForm", "Button1Click", async function Button1Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "cs": '', "s": '', "crdid": 0, "edate": 0, "hdate": 0};
  await $.fixArgs(L0, ["sender"]);
  L0["rsprogresscaption"] = "                 Hesabat alınır.gözləyin.   .....";
  L0["hdate"] = (await $.mv((await $.v(C, "DateTimePicker1")), "DateTime"));
  L0["edate"] = (await $.mv((await $.v(C, "DateTimePicker2")), "DateTime"));
  L0["s"] = "";
  if ($.truthy($.ne((await $.v(C, "BuildFilterString")), ""))) {
    L0["s"] = $.add("and ", (await $.v(C, "BuildFilterString")));
  }
  if ($.truthy($.ne(L0["s"], ""))) {
    L0["cs"] = L0["s"];
  }
  { const $t10 = await $.iset((await $.mv((await $.v(C, "CreditsDS")), "SQL")), [2], L0["cs"]); if ($t10 !== undefined) { await $.mset((await $.v(C, "CreditsDS")), "SQL", $t10); } }
  {
    const $t11 = (await $.wobj(C, "CreditsDS"));
    await $.mcall((await $.wv([$t11], "Session", C, false)), "Commit", []);
    if ($.truthy((await $.wv([$t11], "Active", C, false)))) {
      await $.stmt($.wcall([$t11], "CloseAll", [], C));
    }
    await $.stmt($.wcall([$t11], "ClearVariables", [], C));
    await $.stmt((await $.wcall([$t11], "SetVariable", ["HDATE", (await $.wv([$t11], "HDATE", { get: async () => L0["hdate"], set: async (v) => { L0["hdate"] = v; }, local: true }, false))], C)));
    await $.stmt((await $.wcall([$t11], "SetVariable", ["EDATE", (await $.wv([$t11], "EDATE", { get: async () => L0["edate"], set: async (v) => { L0["edate"] = v; }, local: true }, false))], C)));
    await $.stmt($.wcall([$t11], "Open", [], C));
    await $.stmt($.wcall([$t11], "First", [], C));
    await $.stmt((await $.wcall([$t11], "PrepareProgress", [(await $.wv([$t11], "RecordCount", C, false)), (await $.wv([$t11], "rsProgressCaption", { get: async () => L0["rsprogresscaption"], set: async (v) => { L0["rsprogresscaption"] = v; }, local: true }, false))], C)));
    while ($.truthy($.not((await $.wv([$t11], "Eof", C, false))))) {
      await $.wset([$t11], "CrdID", (await $.mv((await $.wcall([$t11], "FieldByName", ["ID"], C)), "AsInteger")), { get: async () => L0["crdid"], set: async (v) => { L0["crdid"] = v; }, local: true });
      await $.stmt((await $.wcall([$t11], "InsertOneRow", [(await $.wv([$t11], "CrdID", { get: async () => L0["crdid"], set: async (v) => { L0["crdid"] = v; }, local: true }, false)), (await $.wcall([$t11], "Integer", [(await $.wcall([$t11], "Trunc", [(await $.mv((await $.wv([$t11], "BDateP", C, false)), "DateTime"))], C))], C)), (await $.wcall([$t11], "Integer", [(await $.wcall([$t11], "Trunc", [(await $.mv((await $.wv([$t11], "EDateP", C, false)), "DateTime"))], C))], C))], C)));
      await $.mset((await $.mv((await $.wv([$t11], "MISProgressForm", C, false)), "ProgressShower")), "Position", (await $.wv([$t11], "RecNo", C, false)));
      await $.stmt($.wcall([$t11], "Next", [], C));
      await $.mcall((await $.wv([$t11], "CommonApplication", C, false)), "ProcessMessages", []);
      await $.tick();
    }
    await $.mcall((await $.wv([$t11], "MISProgressForm", C, false)), "Close", []);
  }
  {
    const $t12 = (await $.wobj(C, "ResultDS"));
    if ($.truthy($.not((await $.wv([$t12], "Active", C, false))))) {
      await $.stmt($.wcall([$t12], "Open", [], C));
    } else {
      await $.stmt($.wcall([$t12], "Refresh", [], C));
    }
  }
  await $.stmt((await $.call(C, "LogInformation", [(await $.call(C, "IntToStr", [(await $.mv((await $.v(C, "ResultDS")), "RecordCount"))]))])));
  {
    const $t13 = (await $.wobj(C, "Kera"));
    await $.stmt($.wcall([$t13], "Connect", [], C));
    await $.stmt((await $.wcall([$t13], "ExportDataset", [(await $.wv([$t13], "ResultDS", C, false)), "SD1", (await $.wv([$t13], "True", C, false))], C)));
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TPeriodReportForm", "FormCreate", async function FormCreate(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.set(C, "MISProgressForm", (await $.mcall((await $.v(C, "TMISProgressForm")), "Create", [Self])));
  await $.mset((await $.v(C, "BDateP")), "DateTime", (await $.v(C, "Get_CurrentDate")));
  await $.mset((await $.v(C, "EDateP")), "DateTime", (await $.v(C, "Get_CurrentDate")));
  await $.mset((await $.v(C, "DateTimePicker1")), "DateTime", (await $.v(C, "Get_CurrentDate")));
  await $.mset((await $.v(C, "DateTimePicker2")), "DateTime", (await $.v(C, "Get_CurrentDate")));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  return U;
}
