// Generated from Universalİmpl.pas by pas2js — do not edit by hand; regenerate instead.
/* eslint-disable */
// @ts-nocheck

export default function define($) {
  const U = $.unit("Universalİmpl", ["Windows", "Messages", "SysUtils", "Variants", "Classes", "Graphics", "Controls", "Forms", "Dialogs", "StdCtrls", "CheckLst", "Evanescence", "ComCtrls", "DBGridEh", "Mask", "DBCtrlsEh", "DBLookupEh", "CMExcelExport", "CommonDecls", "sbsystem", "DmUniversalImpl", "Unit2"]);
  const C = [U];
  U.defClass("TMainForm", "TForm", {"groupbox1": {"name": "GroupBox1", "type": "TGroupBox"}, "dtpb": {"name": "DTPB", "type": "TDateTimePicker"}, "dtpe": {"name": "DTPE", "type": "TDateTimePicker"}, "label1": {"name": "Label1", "type": "TLabel"}, "label2": {"name": "Label2", "type": "TLabel"}, "challbranch": {"name": "challBranch", "type": "TButton"}, "unchallbranch": {"name": "unchallBranch", "type": "TButton"}, "label3": {"name": "Label3", "type": "TLabel"}, "lookbranch": {"name": "LookBranch", "type": "TEvanescence"}, "groupbox2": {"name": "GroupBox2", "type": "TGroupBox"}, "dblookupcomboboxeh2": {"name": "DBLookupComboboxEh2", "type": "TDBLookupComboboxEh"}, "button1": {"name": "Button1", "type": "TButton"}, "button2": {"name": "Button2", "type": "TButton"}, "misexcelexport": {"name": "MisExcelExport", "type": "TCMExcelExport"}, "excelexport": {"name": "ExcelExport", "type": "TCMExcelExport"}, "label5": {"name": "Label5", "type": "TLabel"}}, {});
  U.init(async () => {
    U.const("rsErrorUsrGrp", "Ən azı bir istifadəçi qurupu seçilməlidir!");
    U.const("rsErrorPersonaltype", "Ən azı bir müştəri tipi seçilməlidir !");
    U.const("rsInfScriptStarted", "Hesabat alınır ");
    U.const("rsPleaseWait", "Zəhmət olmasa bir az gözləyin!  ");
    U.const("rsInfRowsExported", "%d sətir ixrac olundu");
    U.const("rsInfExportFinished", "İxrac qurtardı");
    U.var_("MainForm", null, "TMainForm");
  });
  U.func("InitPlugin", async function InitPlugin(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"s": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["s"]);
  await $.mcall((await $.v(C, "MainForm")), "ShowModal", []);
  return L0.result;
}, {"params": ["s"], "kind": "procedure", "ptypes": ["String"]});
  U.method("TMainForm", "Button1Click", async function Button1Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "additionalparams": '', "i": 0};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy(($.ne((await $.mv((await $.mv((await $.v(C, "LookBranch")), "GetCheckedKeyList")), "Count")), (await $.mv((await $.mv((await $.v(C, "LookBranch")), "Items")), "Count")))))) {
    L0["additionalparams"] = $.add($.add($.add($.add(L0["additionalparams"], " AND p.BRANCHID in("), (await $.mv((await $.mv((await $.v(C, "LookBranch")), "GetCheckedKeyList")), "CommaText"))), ")"), "\r\n");
  }
  if ($.truthy($.eq((await $.mv((await $.v(C, "DBLookupComboboxEh2")), "Text")), ""))) {
    await $.stmt((await $.call(C, "ShowMessage", ["hesabat növünü seçməmisiz!"])));
    return L0.result;
  }
  if ($.truthy($.eq((await $.mv((await $.v(C, "DBLookupComboboxEh2")), "KeyValue")), 1))) {
    {
      const $t1 = (await $.wobj(C, "dmuni"));
      const $t2 = (await $.wv([$t1], "OracleDataSet2", C, false));
      await $.stmt($.wcall([$t1, $t2], "Close", [], C));
      if ($.truthy($.ne((await $.wv([$t1, $t2], "ADDITIONALPARAMS", { get: async () => L0["additionalparams"], set: async (v) => { L0["additionalparams"] = v; }, local: true }, false)), ""))) {
        { const $t3 = await $.iset((await $.wv([$t1, $t2], "SQL", C, false)), [47], (await $.wv([$t1, $t2], "ADDITIONALPARAMS", { get: async () => L0["additionalparams"], set: async (v) => { L0["additionalparams"] = v; }, local: true }, false))); if ($t3 !== undefined) { await $.wset([$t1, $t2], "SQL", $t3, C); } }
      } else {
        { const $t4 = await $.iset((await $.wv([$t1, $t2], "SQL", C, false)), [47], ""); if ($t4 !== undefined) { await $.wset([$t1, $t2], "SQL", $t4, C); } }
      }
      await $.stmt((await $.wcall([$t1, $t2], "SetVariable", ["dat", (await $.wcall([$t1, $t2], "integer", [(await $.wcall([$t1, $t2], "trunc", [(await $.mv((await $.wv([$t1, $t2], "DTPE", C, false)), "DateTime"))], C))], C))], C)));
      await $.stmt($.wcall([$t1, $t2], "Open", [], C));
    }
    if ($.truthy($.eq((await $.mv((await $.mv((await $.v(C, "dmuni")), "OracleDataSet2")), "RecordCount")), 0))) {
      await $.stmt((await $.call(C, "ShowMessage", ["Heç bir məlumat yoxdur"])));
      return L0.result;
    }
    {
      const $t5 = (await $.wobj(C, "ExcelExport"));
      await $.stmt($.wcall([$t5], "Connect", [], C));
      await $.stmt((await $.wcall([$t5], "ExportDataset", [(await $.mv((await $.wv([$t5], "dmuni", C, false)), "OracleDataSet2")), "UNIVERSAL", (await $.wv([$t5], "true", C, false)), (await $.wv([$t5], "false", C, false))], C)));
      await $.stmt($.wcall([$t5], "Disconnect", [], C));
    }
  }
  if ($.truthy($.eq((await $.mv((await $.v(C, "DBLookupComboboxEh2")), "KeyValue")), 2))) {
    await $.mcall((await $.mv((await $.v(C, "dmuni")), "BONS")), "Close", []);
    await $.stmt((await $.mcall((await $.mv((await $.v(C, "dmuni")), "BONS")), "SetVariable", ["dat", (await $.call(C, "integer", [(await $.call(C, "trunc", [(await $.mv((await $.v(C, "DTPE")), "DateTime"))]))]))])));
    await $.mcall((await $.mv((await $.v(C, "dmuni")), "BONS")), "open", []);
    {
      const $t6 = (await $.wobj(C, "ExcelExport"));
      await $.stmt($.wcall([$t6], "Connect", [], C));
      await $.stmt((await $.wcall([$t6], "ExportDataset", [(await $.mv((await $.wv([$t6], "dmuni", C, false)), "BONS")), "UNIVERSAL", (await $.wv([$t6], "true", C, false)), (await $.wv([$t6], "false", C, false))], C)));
      await $.stmt($.wcall([$t6], "Disconnect", [], C));
    }
  }
  if ($.truthy($.eq((await $.mv((await $.v(C, "DBLookupComboboxEh2")), "KeyValue")), 4))) {
    await $.mcall((await $.mv((await $.v(C, "dmuni")), "OracleDataSet3")), "Close", []);
    await $.stmt((await $.mcall((await $.mv((await $.v(C, "dmuni")), "OracleDataSet3")), "SetVariable", ["bdat", (await $.call(C, "integer", [(await $.call(C, "trunc", [(await $.mv((await $.v(C, "DTPB")), "DateTime"))]))]))])));
    await $.stmt((await $.mcall((await $.mv((await $.v(C, "dmuni")), "OracleDataSet3")), "SetVariable", ["edat", (await $.call(C, "integer", [(await $.call(C, "trunc", [(await $.mv((await $.v(C, "DTPE")), "DateTime"))]))]))])));
    await $.mcall((await $.mv((await $.v(C, "dmuni")), "OracleDataSet3")), "open", []);
    {
      const $t7 = (await $.wobj(C, "ExcelExport"));
      await $.stmt($.wcall([$t7], "Connect", [], C));
      await $.stmt((await $.wcall([$t7], "ExportDataset", [(await $.mv((await $.wv([$t7], "dmuni", C, false)), "OracleDataSet3")), "UNIVERSAL", (await $.wv([$t7], "true", C, false)), (await $.wv([$t7], "false", C, false))], C)));
      await $.stmt($.wcall([$t7], "Disconnect", [], C));
    }
  }
  if ($.truthy($.eq((await $.mv((await $.v(C, "DBLookupComboboxEh2")), "KeyValue")), 5))) {
    await $.mcall((await $.mv((await $.v(C, "dmuni")), "OracleDataSet4")), "Close", []);
    await $.stmt((await $.mcall((await $.mv((await $.v(C, "dmuni")), "OracleDataSet4")), "SetVariable", ["bdat", (await $.call(C, "integer", [(await $.call(C, "trunc", [(await $.mv((await $.v(C, "DTPB")), "DateTime"))]))]))])));
    await $.stmt((await $.mcall((await $.mv((await $.v(C, "dmuni")), "OracleDataSet4")), "SetVariable", ["edat", (await $.call(C, "integer", [(await $.call(C, "trunc", [(await $.mv((await $.v(C, "DTPE")), "DateTime"))]))]))])));
    await $.mcall((await $.mv((await $.v(C, "dmuni")), "OracleDataSet4")), "open", []);
    {
      const $t8 = (await $.wobj(C, "ExcelExport"));
      await $.stmt($.wcall([$t8], "Connect", [], C));
      await $.stmt((await $.wcall([$t8], "ExportDataset", [(await $.mv((await $.wv([$t8], "dmuni", C, false)), "OracleDataSet4")), "UNIVERSAL", (await $.wv([$t8], "true", C, false)), (await $.wv([$t8], "false", C, false))], C)));
      await $.stmt($.wcall([$t8], "Disconnect", [], C));
    }
  }
  if ($.truthy($.eq((await $.mv((await $.v(C, "DBLookupComboboxEh2")), "KeyValue")), 6))) {
    await $.stmt((await $.call(C, "LogInformation", [(await $.v(C, "rsInfScriptStarted"))])));
    await $.mcall((await $.mv((await $.v(C, "dmuni")), "Prognoz")), "Close", []);
    await $.stmt((await $.mcall((await $.mv((await $.v(C, "dmuni")), "Prognoz")), "SetVariable", ["dat", (await $.call(C, "integer", [(await $.call(C, "trunc", [(await $.mv((await $.v(C, "DTPB")), "DateTime"))]))]))])));
    await $.mcall((await $.mv((await $.v(C, "dmuni")), "Prognoz")), "open", []);
    L0["i"] = 1;
    await $.mcall((await $.v(C, "form2")), "Show", []);
    {
      const $t9 = (await $.mv((await $.v(C, "dmuni")), "Prognoz"));
      while ($.truthy($.not((await $.wv([$t9], "EOF", C, false))))) {
        if ($.truthy($.gt((await $.mv((await $.wcall([$t9], "FieldByName", ["per"], C)), "AsFloat")), 0))) {
          await $.stmt((await $.mcall((await $.mv((await $.wv([$t9], "dmuni", C, false)), "OraclePackage1")), "CallProcedure", ["insertannutyschedule", ["p_creditid", (await $.mv((await $.wcall([$t9], "FieldByName", ["ID"], C)), "AsInteger")), "p_amount", (await $.mv((await $.wcall([$t9], "FieldByName", ["rest"], C)), "AsFloat")), "p_rate", (await $.mv((await $.wcall([$t9], "FieldByName", ["annualyinterestrate"], C)), "AsFloat")), "p_firstpaydate", (await $.mv((await $.wcall([$t9], "FieldByName", ["FPAYDAT"], C)), "AsDateTime")), "p_startdate", (await $.mv((await $.wv([$t9], "DTPB", C, false)), "DateTime")), "p_periods", (await $.mv((await $.wcall([$t9], "FieldByName", ["per"], C)), "AsFloat")), "p_periodrate", 1, "p_optype", (await $.wv([$t9], "false", C, false)), "p_dovr", 0, "p_status", 0]])));
        }
        await $.mset((await $.mv((await $.wv([$t9], "form2", C, false)), "Gauge1")), "Progress", (await $.wcall([$t9], "trunc", [$.fdiv($.mul((await $.wv([$t9], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false)), 100), (await $.wv([$t9], "RecordCount", C, false)))], C)));
        await $.wset([$t9], "i", $.add((await $.wv([$t9], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false)), 1), { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true });
        await $.stmt($.wcall([$t9], "Next", [], C));
        await $.tick();
      }
    }
    await $.stmt((await $.call(C, "LogInformation", [(await $.v(C, "rsPleaseWait"))])));
    await $.mcall((await $.mv((await $.v(C, "dmuni")), "OracleDataSet5")), "Close", []);
    await $.stmt((await $.mcall((await $.mv((await $.v(C, "dmuni")), "OracleDataSet5")), "SetVariable", ["dat", (await $.call(C, "integer", [(await $.call(C, "trunc", [(await $.mv((await $.v(C, "DTPB")), "DateTime"))]))]))])));
    await $.mcall((await $.mv((await $.v(C, "dmuni")), "OracleDataSet5")), "open", []);
    await $.mcall((await $.v(C, "form2")), "Close", []);
    {
      const $t10 = (await $.wobj(C, "ExcelExport"));
      await $.stmt($.wcall([$t10], "Connect", [], C));
      await $.stmt((await $.wcall([$t10], "ExportDataset", [(await $.mv((await $.wv([$t10], "dmuni", C, false)), "OracleDataSet5")), "UNIVERSAL", (await $.wv([$t10], "true", C, false)), (await $.wv([$t10], "false", C, false))], C)));
      await $.stmt($.wcall([$t10], "Disconnect", [], C));
    }
    await $.stmt((await $.call(C, "LogInformation", [(await $.v(C, "rsInfExportFinished"))])));
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TMainForm", "Button2Click", async function Button2Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.stmt($.call(C, "close", []));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TMainForm", "challBranchClick", async function challBranchClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mcall((await $.v(C, "LookBranch")), "CheckAll", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TMainForm", "FormCanResize", async function FormCanResize(Self, p0, p1, p2, p3) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "newwidth": $.asRef(p1), "newheight": $.asRef(p2), "resize": $.asRef(p3), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await L0["resize"].set(false);
  return L0.result;
}, {"params": ["Sender", "NewWidth", "NewHeight", "Resize"], "kind": "procedure", "ptypes": ["TObject", "Integer", "Integer", "Boolean"]});
  U.method("TMainForm", "FormCreate", async function FormCreate(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "i": 0};
  await $.fixArgs(L0, ["sender"]);
  await $.set(C, "DmUni", (await $.mcall((await $.v(C, "TDmUni")), "Create", [Self])));
  await $.set(C, "form2", (await $.mcall((await $.v(C, "Tform2")), "Create", [Self])));
  { const $t11 = $.sub((await $.v(C, "ComponentCount")), 1);
    L0["i"] = 0;
    let $t12 = true;
    for (;;) {
      if (!$t12) { L0["i"] = $.succ(L0["i"], 1); }
      $t12 = false;
      if (!($.ord(L0["i"]) <= $.ord($t11))) break;
      if ($.truthy($.eq((await $.mv((await $.idx((await $.v(C, "Components")), [L0["i"]])), "Tag")), 3112))) {
        await $.mcall((await $.idx((await $.v(C, "Components")), [L0["i"]])), "Open", []);
        await $.mcall((await $.idx((await $.v(C, "Components")), [L0["i"]])), "CheckAll", []);
      }
      await $.tick();
    }
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TMainForm", "FormShow", async function FormShow(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "i": 0};
  await $.fixArgs(L0, ["sender"]);
  await $.mset((await $.v(C, "DTPB")), "Date", (await $.v(C, "Get_CurrentDate")));
  await $.mset((await $.v(C, "DTPE")), "Date", (await $.v(C, "Get_CurrentDate")));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TMainForm", "unchallBranchClick", async function unchallBranchClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mcall((await $.v(C, "LookBranch")), "UncheckAll", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.setInitialization(async function __initialization(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: undefined};
  await $.set(C, "MainForm", (await $.mcall((await $.v(C, "TMainForm")), "Create", [(await $.v(C, "CommonApplication"))])));
  return L0.result;
});
  return U;
}
