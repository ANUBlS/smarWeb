// Generated from ReCalculationMainForm.pas by pas2js — do not edit by hand; regenerate instead.
/* eslint-disable */
// @ts-nocheck

export default function define($) {
  const U = $.unit("ReCalculationMainForm", ["Windows", "Messages", "SysUtils", "Classes", "Graphics", "Controls", "Forms", "Dialogs", "ComCtrls", "StdCtrls", "Grids", "DBGridEh", "DBSumLst", "ToolWin", "ExtCtrls", "ImgList", "DB", "ActnList", "Oracle", "OracleData", "CMExcelExport", "Menus", "DBGridEhGrouping", "GridsEh", "CommonDecls", "ProgressFormImpl", "ReCalculationDataModuleImpl", "sbSystem", "FilterDataModuleImpl", "FilterUnitImpl", "newProgressimpl"]);
  const C = [U];
  U.defClass("ESearchError", "Exception", {}, {});
  U.defClass("TPRMainForm", "TForm", {"calcgrid": {"name": "CalcGrid", "type": "TDBGridEh"}, "imagelist1": {"name": "ImageList1", "type": "TImageList"}, "panel1": {"name": "Panel1", "type": "TPanel"}, "toolbar1": {"name": "ToolBar1", "type": "TToolBar"}, "actionlist1": {"name": "ActionList1", "type": "TActionList"}, "actncalculate": {"name": "ActnCalculate", "type": "TAction"}, "actnacceptcalc": {"name": "ActnAcceptCalc", "type": "TAction"}, "actnrejectcalc": {"name": "ActnRejectCalc", "type": "TAction"}, "panel2": {"name": "Panel2", "type": "TPanel"}, "actnrefresh": {"name": "ActnRefresh", "type": "TAction"}, "excelexport": {"name": "ExcelExport", "type": "TCMExcelExport"}, "groupbox2": {"name": "GroupBox2", "type": "TGroupBox"}, "cbeom": {"name": "CBEOM", "type": "TCheckBox"}, "dtpcalcdate": {"name": "DTPCalcDate", "type": "TDateTimePicker"}, "toolbutton1": {"name": "ToolButton1", "type": "TToolButton"}, "toolbutton2": {"name": "ToolButton2", "type": "TToolButton"}, "toolbutton3": {"name": "ToolButton3", "type": "TToolButton"}, "toolbutton4": {"name": "ToolButton4", "type": "TToolButton"}, "toolbutton5": {"name": "ToolButton5", "type": "TToolButton"}, "toolbutton6": {"name": "ToolButton6", "type": "TToolButton"}, "toolbutton7": {"name": "ToolButton7", "type": "TToolButton"}, "toolbutton8": {"name": "ToolButton8", "type": "TToolButton"}, "toolbutton9": {"name": "ToolButton9", "type": "TToolButton"}, "toolbutton10": {"name": "ToolButton10", "type": "TToolButton"}, "actnexport": {"name": "ActnExport", "type": "TAction"}, "editnumberofcredit": {"name": "EditNumberOfCredit", "type": "TEdit"}, "editcontractaccno": {"name": "EditCONTRACTACCNO", "type": "TEdit"}, "editval_name": {"name": "EditVAL_NAME", "type": "TEdit"}, "editname": {"name": "EditNAME", "type": "TEdit"}, "toolbutton11": {"name": "ToolButton11", "type": "TToolButton"}, "toolbutton12": {"name": "ToolButton12", "type": "TToolButton"}, "actnfilter": {"name": "ActnFilter", "type": "TAction"}, "pmcalcinterests": {"name": "PmCalcInterests", "type": "TPopupMenu"}, "n1": {"name": "N1", "type": "TMenuItem"}, "n2": {"name": "N2", "type": "TMenuItem"}, "actncalcallintrest": {"name": "ActnCalcAllintrest", "type": "TAction"}, "toolbutton13": {"name": "ToolButton13", "type": "TToolButton"}}, {});
  U.init(async () => {
    U.const("LoadingFailed", true);
    U.const("DataColIndex", 4);
    U.var_("PRMainForm", null, "TPRMainForm");
  });
  U.method("TPRMainForm", "PrepareProgress", async function PrepareProgress(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"progcnt": $.copyArg(p0), "opdesc": $.copyArg(p1), result: undefined};
  await $.fixArgs(L0, ["progcnt", "opdesc"]);
  {
    const $t1 = (await $.wobj(C, "NewProgressForm"));
    const $t2 = (await $.wv([$t1], "ProgressShower", C, false));
    await $.wset([$t1, $t2], "Position", 0, C);
    await $.wset([$t1, $t2], "Max", (await $.wv([$t1, $t2], "ProgCnt", { get: async () => L0["progcnt"], set: async (v) => { L0["progcnt"] = v; }, local: true }, false)), C);
    await $.wset([$t1, $t2], "Step", 1, C);
    await $.wset([$t1, $t2], "Caption", (await $.wv([$t1, $t2], "opDesc", { get: async () => L0["opdesc"], set: async (v) => { L0["opdesc"] = v; }, local: true }, false)), C);
  }
  await $.mcall((await $.v(C, "NewProgressForm")), "Show", []);
  return L0.result;
}, {"params": ["ProgCnt", "opDesc"], "kind": "procedure", "ptypes": ["Integer", "String"]});
  U.method("TPRMainForm", "ExcuseMeUser", async function ExcuseMeUser(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"question": $.copyArg(p0), result: false};
  await $.fixArgs(L0, ["question"]);
  L0["result"] = $.eq((await $.call(C, "MessageDlg", [L0["question"], (await $.v(C, "mtConfirmation")), [(await $.v(C, "mbYes")), (await $.v(C, "mbNo"))], 0])), (await $.v(C, "mrYes")));
  return L0.result;
}, {"params": ["Question"], "kind": "function", "ptypes": ["String"]});
  U.method("TPRMainForm", "SafelyRefresh", async function SafelyRefresh(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"safely": $.copyArg(p0), result: undefined, "saveplace": null};
  await $.fixArgs(L0, ["safely"]);
  {
    const $t3 = (await $.wobj(C, "CalcGrid"));
    const $t4 = (await $.mv((await $.wv([$t3], "DataSource", C, false)), "DataSet"));
    await $.wset([$t3, $t4], "SavePlace", (await $.wv([$t3, $t4], "GetBookmark", C, false)), { get: async () => L0["saveplace"], set: async (v) => { L0["saveplace"] = v; }, local: true });
    await $.stmt($.wcall([$t3, $t4], "Refresh", [], C));
    await $.mcall((await $.wv([$t3, $t4], "SelectedRows", C, false)), "Clear", []);
    if ($.truthy((await $.wv([$t3, $t4], "Safely", { get: async () => L0["safely"], set: async (v) => { L0["safely"] = v; }, local: true }, false)))) {
      await $.stmt((await $.wcall([$t3, $t4], "GotoBookmark", [(await $.wv([$t3, $t4], "SavePlace", { get: async () => L0["saveplace"], set: async (v) => { L0["saveplace"] = v; }, local: true }, false))], C)));
    }
  }
  return L0.result;
}, {"params": ["Safely"], "kind": "procedure", "ptypes": ["Boolean"]});
  U.method("TPRMainForm", "CalcIntForOne", async function CalcIntForOne(Self, p0, p1, p2, p3) {
  const C = $.chain(Self, U);
  const L0 = {"id": $.copyArg(p0), "date": $.copyArg(p1), "endofmonth": $.copyArg(p2), "number": $.copyArg(p3), result: undefined};
  await $.fixArgs(L0, ["id", "date", "endofmonth", "number"]);
  L0["rsprocessinfo"] = "%s - № Lİ kredit üçün faiz hesablanır ...";
  L0["rscreditnumber"] = "%s - № Li kredit : ";
  L0["rsprocessed"] = "Hesablandı.";
  {
    const $t5 = (await $.mv((await $.v(C, "PRDataModule")), "CalculatorPackage"));
    try {
      await $.stmt((await $.wcall([$t5], "LogInformation", [(await $.wcall([$t5], "Format", [(await $.wv([$t5], "rsProcessInfo", { get: async () => L0["rsprocessinfo"], set: async (v) => { L0["rsprocessinfo"] = v; }, local: true }, false)), [(await $.wv([$t5], "Number", { get: async () => L0["number"], set: async (v) => { L0["number"] = v; }, local: true }, false))]], C))], C)));
      await $.stmt((await $.wcall([$t5], "CallProcedure", ["CalcPercents", ["p_CreditID", (await $.wv([$t5], "ID", { get: async () => L0["id"], set: async (v) => { L0["id"] = v; }, local: true }, false)), "p_Date", (await $.wv([$t5], "Date", { get: async () => L0["date"], set: async (v) => { L0["date"] = v; }, local: true }, false)), "p_holidat", (await $.mv((await $.mcall((await $.mv((await $.wv([$t5], "PRDataModule", C, false)), "OracleDataSet1")), "FieldByName", ["dat"])), "AsDateTime")), "p_EndOfMonth", (await $.wv([$t5], "EndOfMonth", { get: async () => L0["endofmonth"], set: async (v) => { L0["endofmonth"] = v; }, local: true }, false))]], C)));
      await $.stmt((await $.wcall([$t5], "LogInformation", [(await $.wv([$t5], "rsProcessed", { get: async () => L0["rsprocessed"], set: async (v) => { L0["rsprocessed"] = v; }, local: true }, false))], C)));
    } catch ($t6) {
      $.rethrowControl($t6);
      if ($.excIs($t6, "Exception")) {
        L0["e"] = $.exc($t6);
        await $.stmt((await $.wcall([$t5], "LogError", [$.add((await $.wcall([$t5], "Format", [(await $.wv([$t5], "rsCreditNumber", { get: async () => L0["rscreditnumber"], set: async (v) => { L0["rscreditnumber"] = v; }, local: true }, false)), [(await $.wv([$t5], "Number", { get: async () => L0["number"], set: async (v) => { L0["number"] = v; }, local: true }, false))]], C)), (await $.mv((await $.wv([$t5], "E", { get: async () => L0["e"], set: async (v) => { L0["e"] = v; }, local: true }, false)), "Message")))], C)));
      }
      else { throw $t6; }
    }
  }
  return L0.result;
}, {"params": ["ID", "Date", "EndOfMonth", "Number"], "kind": "procedure", "ptypes": ["Integer", "TDateTime", "Boolean", "String"]});
  U.method("TPRMainForm", "CancelCalcIntForOne", async function CancelCalcIntForOne(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"id": $.copyArg(p0), "number": $.copyArg(p1), result: undefined};
  await $.fixArgs(L0, ["id", "number"]);
  L0["rsprocessinfo"] = "%s - № Li kredit üçün hesablanmış faizlər ləğv olunur ...";
  L0["rscreditnumber"] = "%s - № Li kredit : ";
  L0["rsprocessed"] = "Ləğv olundu.";
  {
    const $t7 = (await $.mv((await $.v(C, "PRDataModule")), "CalculatorPackage"));
    try {
      await $.stmt((await $.wcall([$t7], "LogInformation", [(await $.wcall([$t7], "Format", [(await $.wv([$t7], "rsProcessInfo", { get: async () => L0["rsprocessinfo"], set: async (v) => { L0["rsprocessinfo"] = v; }, local: true }, false)), [(await $.wv([$t7], "Number", { get: async () => L0["number"], set: async (v) => { L0["number"] = v; }, local: true }, false))]], C))], C)));
      await $.stmt((await $.wcall([$t7], "CallProcedure", ["CancelCalculation", ["p_CreditID", (await $.wv([$t7], "ID", { get: async () => L0["id"], set: async (v) => { L0["id"] = v; }, local: true }, false))]], C)));
      await $.stmt((await $.wcall([$t7], "LogInformation", [(await $.wv([$t7], "rsProcessed", { get: async () => L0["rsprocessed"], set: async (v) => { L0["rsprocessed"] = v; }, local: true }, false))], C)));
    } catch ($t8) {
      $.rethrowControl($t8);
      if ($.excIs($t8, "Exception")) {
        L0["e"] = $.exc($t8);
        await $.stmt((await $.wcall([$t7], "LogError", [$.add((await $.wcall([$t7], "Format", [(await $.wv([$t7], "rsCreditNumber", { get: async () => L0["rscreditnumber"], set: async (v) => { L0["rscreditnumber"] = v; }, local: true }, false)), [(await $.wv([$t7], "Number", { get: async () => L0["number"], set: async (v) => { L0["number"] = v; }, local: true }, false))]], C)), (await $.mv((await $.wv([$t7], "E", { get: async () => L0["e"], set: async (v) => { L0["e"] = v; }, local: true }, false)), "Message")))], C)));
      }
      else { throw $t8; }
    }
  }
  return L0.result;
}, {"params": ["ID", "Number"], "kind": "procedure", "ptypes": ["Integer", "String"]});
  U.method("TPRMainForm", "AcceptCalcedIntForOne", async function AcceptCalcedIntForOne(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"id": $.copyArg(p0), "number": $.copyArg(p1), result: undefined};
  await $.fixArgs(L0, ["id", "number"]);
  L0["rsprocessinfo"] = "%s - № Li kredit üçün hesablanmış faizlər təstiq olunur ...";
  L0["rscreditnumber"] = "%s - № li kredit : ";
  L0["rsprocessed"] = "Təstiq olundu.";
  {
    const $t9 = (await $.mv((await $.v(C, "PRDataModule")), "CalculatorPackage"));
    try {
      await $.stmt((await $.wcall([$t9], "LogInformation", [(await $.wcall([$t9], "Format", [(await $.wv([$t9], "rsProcessInfo", { get: async () => L0["rsprocessinfo"], set: async (v) => { L0["rsprocessinfo"] = v; }, local: true }, false)), [(await $.wv([$t9], "Number", { get: async () => L0["number"], set: async (v) => { L0["number"] = v; }, local: true }, false))]], C))], C)));
      await $.stmt((await $.wcall([$t9], "CallProcedure", ["AcceptCalcedPercents", ["p_CreditID", (await $.wv([$t9], "ID", { get: async () => L0["id"], set: async (v) => { L0["id"] = v; }, local: true }, false)), "p_holidat", (await $.mv((await $.mcall((await $.mv((await $.wv([$t9], "PRDataModule", C, false)), "OracleDataSet1")), "FieldByName", ["dat"])), "AsDateTime"))]], C)));
      await $.stmt((await $.wcall([$t9], "LogInformation", [(await $.wv([$t9], "rsProcessed", { get: async () => L0["rsprocessed"], set: async (v) => { L0["rsprocessed"] = v; }, local: true }, false))], C)));
    } catch ($t10) {
      $.rethrowControl($t10);
      if ($.excIs($t10, "Exception")) {
        L0["e"] = $.exc($t10);
        await $.stmt((await $.wcall([$t9], "LogError", [$.add((await $.wcall([$t9], "Format", [(await $.wv([$t9], "rsCreditNumber", { get: async () => L0["rscreditnumber"], set: async (v) => { L0["rscreditnumber"] = v; }, local: true }, false)), [(await $.wv([$t9], "Number", { get: async () => L0["number"], set: async (v) => { L0["number"] = v; }, local: true }, false))]], C)), (await $.mv((await $.wv([$t9], "E", { get: async () => L0["e"], set: async (v) => { L0["e"] = v; }, local: true }, false)), "Message")))], C)));
      }
      else { throw $t10; }
    }
  }
  return L0.result;
}, {"params": ["ID", "Number"], "kind": "procedure", "ptypes": ["Integer", "String"]});
  U.method("TPRMainForm", "ShowInterestCalculator", async function ShowInterestCalculator(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: undefined};
  L0["rsloadingfailed"] = "Yükləmə vaxtı səhv baş vermişdir.";
  if ($.truthy($.not((await $.v(C, "LoadingFailed"))))) {
    await $.stmt($.call(C, "ShowModal", []));
  } else {
    await $.stmt((await $.call(C, "LogError", [L0["rsloadingfailed"]])));
  }
  return L0.result;
}, {"params": [], "kind": "procedure", "ptypes": []});
  U.func("InitPlugin", async function InitPlugin(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"s": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["s"]);
  await $.mcall((await $.v(C, "PRMainForm")), "ShowInterestCalculator", []);
  return L0.result;
}, {"params": ["S"], "kind": "procedure", "ptypes": ["String"]});
  U.method("TPRMainForm", "FormDestroy", async function FormDestroy(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mcall((await $.v(C, "PRDataModule")), "Free", []);
  await $.mcall((await $.v(C, "ProgressForm")), "Free", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TPRMainForm", "CalcGridDrawColumnCell", async function CalcGridDrawColumnCell(Self, p0, p1, p2, p3, p4) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "rect": $.copyArg(p1), "datacol": $.copyArg(p2), "column": $.copyArg(p3), "state": $.copyArg(p4), result: undefined, "imageindex": 0};
  await $.fixArgs(L0, ["sender", "rect", "datacol", "column", "state"]);
  {
    const $t11 = L0["sender"];
    if ($.truthy($.gt((await $.mv((await $.mv((await $.wv([$t11], "DataSource", C, false)), "DataSet")), "RecordCount")), 0))) {
      await $.wset([$t11], "ImageIndex", (await $.mv((await $.mcall((await $.mv((await $.wv([$t11], "DataSource", C, false)), "DataSet")), "FieldByName", ["TrProcessed"])), "AsInteger")), { get: async () => L0["imageindex"], set: async (v) => { L0["imageindex"] = v; }, local: true });
      if ($.truthy(($.eq((await $.wv([$t11], "DataCol", { get: async () => L0["datacol"], set: async (v) => { L0["datacol"] = v; }, local: true }, false)), (await $.wv([$t11], "DataColIndex", C, false)))))) {
        await $.stmt((await $.mcall((await $.wv([$t11], "ImageList1", C, false)), "Draw", [(await $.wv([$t11], "Canvas", C, false)), (await $.mv((await $.wv([$t11], "Rect", { get: async () => L0["rect"], set: async (v) => { L0["rect"] = v; }, local: true }, false)), "Left")), (await $.mv((await $.wv([$t11], "Rect", { get: async () => L0["rect"], set: async (v) => { L0["rect"] = v; }, local: true }, false)), "Top")), (await $.wv([$t11], "ImageIndex", { get: async () => L0["imageindex"], set: async (v) => { L0["imageindex"] = v; }, local: true }, false)), (await $.wv([$t11], "True", C, false))])));
      } else {
        await $.stmt((await $.wcall([$t11], "DefaultDrawColumnCell", [(await $.wv([$t11], "Rect", { get: async () => L0["rect"], set: async (v) => { L0["rect"] = v; }, local: true }, false)), (await $.wv([$t11], "DataCol", { get: async () => L0["datacol"], set: async (v) => { L0["datacol"] = v; }, local: true }, false)), (await $.wv([$t11], "Column", { get: async () => L0["column"], set: async (v) => { L0["column"] = v; }, local: true }, false)), (await $.wv([$t11], "State", { get: async () => L0["state"], set: async (v) => { L0["state"] = v; }, local: true }, false))], C)));
      }
    }
  }
  return L0.result;
}, {"params": ["Sender", "Rect", "DataCol", "Column", "State"], "kind": "procedure", "ptypes": ["TObject", "TRect", "Integer", "TColumnEh", "TGridDrawState"]});
  U.method("TPRMainForm", "FormCreate", async function FormCreate(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.set(C, "PRDataModule", (await $.mcall((await $.v(C, "TPRDataModule")), "Create", [Self])));
  await $.set(C, "NewProgressForm", (await $.mcall((await $.v(C, "TNewProgressForm")), "Create", [Self])));
  await $.set(C, "FilterDataModule", (await $.mcall((await $.v(C, "TFilterDataModule")), "Create", [Self])));
  await $.set(C, "FilterMainForm", (await $.mcall((await $.v(C, "TFilterMainForm")), "Create", [Self])));
  await $.mset((await $.v(C, "FilterMainForm")), "FFilterGrid", (await $.v(C, "CalcGrid")));
  await $.mset((await $.v(C, "DTPCalcDate")), "DateTime", (await $.v(C, "Get_CurrentDate")));
  await $.set(C, "LoadingFailed", false);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TPRMainForm", "ActnCalculateUpdate", async function ActnCalculateUpdate(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t12 = (await $.mv((await $.mv((await $.v(C, "CalcGrid")), "DataSource")), "DataSet"));
    await $.mset((await $.wv([$t12], "Sender", { get: async () => L0["sender"], set: async (v) => { L0["sender"] = v; }, local: true }, false)), "Enabled", (await $.and_((await $.wv([$t12], "Active", C, false)), async () => ($.in_((await $.mv((await $.wcall([$t12], "FieldByName", ["TrProcessed"], C)), "AsInteger")), [0, 1])))));
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TPRMainForm", "ActnCalculateExecute", async function ActnCalculateExecute(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "i": 0, "selectedrowscnt": 0, "crdid": 0, "crdno": '', "date": 0, "endofmonth": false, "crdstatus": 0};
  await $.fixArgs(L0, ["sender"]);
  L0["rsconfirmforone"] = "%s  - № li kredit üçün %s. Əminsiniz?";
  L0["rsconfirmforall"] = "%d - sayda kredit üçün %s. Əminsiniz?";
  L0["rscalcpercent"] = "Faiz hesablanacaq";
  L0["rsalreadycalced"] = "%s - № li kredit üçün faizlər artıq hesablanıb !";
  L0["rsprogresscaption"] = "                            Faizlər hesablanır. gözləyin.   .....";
  await $.mcall((await $.mv((await $.v(C, "PRDataModule")), "OracleDataSet1")), "Refresh", []);
  L0["date"] = (await $.call(C, "Integer", [(await $.call(C, "Trunc", [(await $.mv((await $.v(C, "DTPCalcDate")), "DateTime"))]))]));
  L0["endofmonth"] = (await $.mv((await $.v(C, "CBEOM")), "Checked"));
  {
    const $t13 = (await $.wobj(C, "CalcGrid"));
    const $t14 = (await $.mv((await $.wv([$t13], "DataSource", C, false)), "DataSet"));
    await $.wset([$t13, $t14], "SelectedRowsCnt", (await $.mv((await $.wv([$t13, $t14], "SelectedRows", C, false)), "Count")), { get: async () => L0["selectedrowscnt"], set: async (v) => { L0["selectedrowscnt"] = v; }, local: true });
    if ($.truthy($.gt((await $.wv([$t13, $t14], "SelectedRowsCnt", { get: async () => L0["selectedrowscnt"], set: async (v) => { L0["selectedrowscnt"] = v; }, local: true }, false)), 1))) {
      if ($.truthy($.not((await $.wcall([$t13, $t14], "ExcuseMeUser", [(await $.wcall([$t13, $t14], "Format", [(await $.wv([$t13, $t14], "rsConfirmForAll", { get: async () => L0["rsconfirmforall"], set: async (v) => { L0["rsconfirmforall"] = v; }, local: true }, false)), [(await $.wv([$t13, $t14], "SelectedRowsCnt", { get: async () => L0["selectedrowscnt"], set: async (v) => { L0["selectedrowscnt"] = v; }, local: true }, false)), (await $.wv([$t13, $t14], "rsCalcPercent", { get: async () => L0["rscalcpercent"], set: async (v) => { L0["rscalcpercent"] = v; }, local: true }, false))]], C))], C))))) {
        return L0.result;
      }
      await $.mcall(Self, "Update", []);
      await $.stmt((await $.wcall([$t13, $t14], "PrepareProgress", [(await $.wv([$t13, $t14], "SelectedRowsCnt", { get: async () => L0["selectedrowscnt"], set: async (v) => { L0["selectedrowscnt"] = v; }, local: true }, false)), (await $.wv([$t13, $t14], "rsProgressCaption", { get: async () => L0["rsprogresscaption"], set: async (v) => { L0["rsprogresscaption"] = v; }, local: true }, false))], C)));
      { const $t15 = $.sub((await $.wv([$t13, $t14], "SelectedRowsCnt", { get: async () => L0["selectedrowscnt"], set: async (v) => { L0["selectedrowscnt"] = v; }, local: true }, false)), 1);
        await $.wset([$t13, $t14], "I", 0, { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true });
        let $t16 = true;
        for (;;) {
          if (!$t16) { await $.wset([$t13, $t14], "I", $.succ((await $.wv([$t13, $t14], "I", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false)), 1), { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }); }
          $t16 = false;
          if (!($.ord((await $.wv([$t13, $t14], "I", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false))) <= $.ord($t15))) break;
          await $.stmt((await $.wcall([$t13, $t14], "GotoBookmark", [(await $.wcall([$t13, $t14], "Pointer", [(await $.idx((await $.wv([$t13, $t14], "SelectedRows", C, false)), [(await $.wv([$t13, $t14], "I", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false))]))], C))], C)));
          await $.wset([$t13, $t14], "CrdID", (await $.mv((await $.wcall([$t13, $t14], "FieldByName", ["ID"], C)), "AsInteger")), { get: async () => L0["crdid"], set: async (v) => { L0["crdid"] = v; }, local: true });
          await $.wset([$t13, $t14], "CrdNo", (await $.mv((await $.wcall([$t13, $t14], "FieldByName", ["NumberOfCredit"], C)), "AsString")), { get: async () => L0["crdno"], set: async (v) => { L0["crdno"] = v; }, local: true });
          await $.wset([$t13, $t14], "CrdStatus", (await $.mv((await $.wcall([$t13, $t14], "FieldByName", ["TrProcessed"], C)), "AsInteger")), { get: async () => L0["crdstatus"], set: async (v) => { L0["crdstatus"] = v; }, local: true });
          if ($.truthy($.in_((await $.wv([$t13, $t14], "CrdStatus", { get: async () => L0["crdstatus"], set: async (v) => { L0["crdstatus"] = v; }, local: true }, false)), [0, 1]))) {
            await $.stmt((await $.wcall([$t13, $t14], "CalcIntForOne", [(await $.wv([$t13, $t14], "CrdID", { get: async () => L0["crdid"], set: async (v) => { L0["crdid"] = v; }, local: true }, false)), (await $.wv([$t13, $t14], "Date", { get: async () => L0["date"], set: async (v) => { L0["date"] = v; }, local: true }, false)), (await $.wv([$t13, $t14], "EndOfMonth", { get: async () => L0["endofmonth"], set: async (v) => { L0["endofmonth"] = v; }, local: true }, false)), (await $.wv([$t13, $t14], "CrdNo", { get: async () => L0["crdno"], set: async (v) => { L0["crdno"] = v; }, local: true }, false))], C)));
          } else {
            await $.stmt((await $.wcall([$t13, $t14], "LogWarning", [(await $.wcall([$t13, $t14], "Format", [(await $.wv([$t13, $t14], "rsAlreadyCalced", { get: async () => L0["rsalreadycalced"], set: async (v) => { L0["rsalreadycalced"] = v; }, local: true }, false)), [(await $.wv([$t13, $t14], "CrdNo", { get: async () => L0["crdno"], set: async (v) => { L0["crdno"] = v; }, local: true }, false))]], C))], C)));
          }
          await $.mset((await $.mv((await $.wv([$t13, $t14], "NewProgressForm", C, false)), "ProgressShower")), "Position", $.add((await $.wv([$t13, $t14], "I", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false)), 1));
          await $.tick();
        }
      }
      await $.mcall((await $.wv([$t13, $t14], "newProgressForm", C, false)), "Close", []);
    } else {
      await $.wset([$t13, $t14], "CrdID", (await $.mv((await $.wcall([$t13, $t14], "FieldByName", ["ID"], C)), "AsInteger")), { get: async () => L0["crdid"], set: async (v) => { L0["crdid"] = v; }, local: true });
      await $.wset([$t13, $t14], "CrdNo", (await $.mv((await $.wcall([$t13, $t14], "FieldByName", ["NumberOfCredit"], C)), "AsString")), { get: async () => L0["crdno"], set: async (v) => { L0["crdno"] = v; }, local: true });
      await $.wset([$t13, $t14], "CrdStatus", (await $.mv((await $.wcall([$t13, $t14], "FieldByName", ["TrProcessed"], C)), "AsInteger")), { get: async () => L0["crdstatus"], set: async (v) => { L0["crdstatus"] = v; }, local: true });
      if ($.truthy($.not((await $.wcall([$t13, $t14], "ExcuseMeUser", [(await $.wcall([$t13, $t14], "Format", [(await $.wv([$t13, $t14], "rsConfirmForOne", { get: async () => L0["rsconfirmforone"], set: async (v) => { L0["rsconfirmforone"] = v; }, local: true }, false)), [(await $.wv([$t13, $t14], "CrdNo", { get: async () => L0["crdno"], set: async (v) => { L0["crdno"] = v; }, local: true }, false)), (await $.wv([$t13, $t14], "rsCalcPercent", { get: async () => L0["rscalcpercent"], set: async (v) => { L0["rscalcpercent"] = v; }, local: true }, false))]], C))], C))))) {
        return L0.result;
      }
      if ($.truthy($.in_((await $.wv([$t13, $t14], "CrdStatus", { get: async () => L0["crdstatus"], set: async (v) => { L0["crdstatus"] = v; }, local: true }, false)), [0, 1]))) {
        await $.stmt((await $.wcall([$t13, $t14], "CalcIntForOne", [(await $.wv([$t13, $t14], "CrdID", { get: async () => L0["crdid"], set: async (v) => { L0["crdid"] = v; }, local: true }, false)), (await $.wv([$t13, $t14], "Date", { get: async () => L0["date"], set: async (v) => { L0["date"] = v; }, local: true }, false)), (await $.wv([$t13, $t14], "EndOfMonth", { get: async () => L0["endofmonth"], set: async (v) => { L0["endofmonth"] = v; }, local: true }, false)), (await $.wv([$t13, $t14], "CrdNo", { get: async () => L0["crdno"], set: async (v) => { L0["crdno"] = v; }, local: true }, false))], C)));
      } else {
        await $.stmt((await $.wcall([$t13, $t14], "LogWarning", [(await $.wcall([$t13, $t14], "Format", [(await $.wv([$t13, $t14], "rsAlreadyCalced", { get: async () => L0["rsalreadycalced"], set: async (v) => { L0["rsalreadycalced"] = v; }, local: true }, false)), [(await $.wv([$t13, $t14], "CrdNo", { get: async () => L0["crdno"], set: async (v) => { L0["crdno"] = v; }, local: true }, false))]], C))], C)));
      }
    }
    await $.stmt((await $.wcall([$t13, $t14], "SafelyRefresh", [(await $.wv([$t13, $t14], "False", C, false))], C)));
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TPRMainForm", "ActnAcceptCalcExecute", async function ActnAcceptCalcExecute(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "i": 0, "selectedrowscnt": 0, "crdid": 0, "crdno": '', "crdstatus": 0};
  await $.fixArgs(L0, ["sender"]);
  L0["rsconfirmforone"] = "%s  - № li kredit üçün %s. Əminsiniz?";
  L0["rsconfirmforall"] = "%d - sayda kredit üçün %s. Əminsiniz?";
  L0["rscalcpercent"] = "Hesablanmış faizlər təstiq olunacaq";
  L0["rsalreadycalced"] = "%s - № li kredit üçün hələ hesablanmayıb və ya  təstiq olunub !";
  L0["rsprogresscaption"] = "                        Faizlər təstiq olunur . gözləyin.   .....";
  await $.mcall((await $.mv((await $.v(C, "PRDataModule")), "OracleDataSet1")), "Refresh", []);
  {
    const $t17 = (await $.wobj(C, "CalcGrid"));
    const $t18 = (await $.mv((await $.wv([$t17], "DataSource", C, false)), "DataSet"));
    await $.wset([$t17, $t18], "SelectedRowsCnt", (await $.mv((await $.wv([$t17, $t18], "SelectedRows", C, false)), "Count")), { get: async () => L0["selectedrowscnt"], set: async (v) => { L0["selectedrowscnt"] = v; }, local: true });
    if ($.truthy($.gt((await $.wv([$t17, $t18], "SelectedRowsCnt", { get: async () => L0["selectedrowscnt"], set: async (v) => { L0["selectedrowscnt"] = v; }, local: true }, false)), 1))) {
      if ($.truthy($.not((await $.wcall([$t17, $t18], "ExcuseMeUser", [(await $.wcall([$t17, $t18], "Format", [(await $.wv([$t17, $t18], "rsConfirmForAll", { get: async () => L0["rsconfirmforall"], set: async (v) => { L0["rsconfirmforall"] = v; }, local: true }, false)), [(await $.wv([$t17, $t18], "SelectedRowsCnt", { get: async () => L0["selectedrowscnt"], set: async (v) => { L0["selectedrowscnt"] = v; }, local: true }, false)), (await $.wv([$t17, $t18], "rsCalcPercent", { get: async () => L0["rscalcpercent"], set: async (v) => { L0["rscalcpercent"] = v; }, local: true }, false))]], C))], C))))) {
        return L0.result;
      }
      await $.mcall(Self, "Update", []);
      await $.stmt((await $.wcall([$t17, $t18], "PrepareProgress", [(await $.wv([$t17, $t18], "SelectedRowsCnt", { get: async () => L0["selectedrowscnt"], set: async (v) => { L0["selectedrowscnt"] = v; }, local: true }, false)), (await $.wv([$t17, $t18], "rsProgressCaption", { get: async () => L0["rsprogresscaption"], set: async (v) => { L0["rsprogresscaption"] = v; }, local: true }, false))], C)));
      { const $t19 = $.sub((await $.wv([$t17, $t18], "SelectedRowsCnt", { get: async () => L0["selectedrowscnt"], set: async (v) => { L0["selectedrowscnt"] = v; }, local: true }, false)), 1);
        await $.wset([$t17, $t18], "I", 0, { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true });
        let $t20 = true;
        for (;;) {
          if (!$t20) { await $.wset([$t17, $t18], "I", $.succ((await $.wv([$t17, $t18], "I", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false)), 1), { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }); }
          $t20 = false;
          if (!($.ord((await $.wv([$t17, $t18], "I", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false))) <= $.ord($t19))) break;
          await $.stmt((await $.wcall([$t17, $t18], "GotoBookmark", [(await $.wcall([$t17, $t18], "Pointer", [(await $.idx((await $.wv([$t17, $t18], "SelectedRows", C, false)), [(await $.wv([$t17, $t18], "I", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false))]))], C))], C)));
          await $.wset([$t17, $t18], "CrdID", (await $.mv((await $.wcall([$t17, $t18], "FieldByName", ["ID"], C)), "AsInteger")), { get: async () => L0["crdid"], set: async (v) => { L0["crdid"] = v; }, local: true });
          await $.wset([$t17, $t18], "CrdNo", (await $.mv((await $.wcall([$t17, $t18], "FieldByName", ["NumberOfCredit"], C)), "AsString")), { get: async () => L0["crdno"], set: async (v) => { L0["crdno"] = v; }, local: true });
          await $.wset([$t17, $t18], "CrdStatus", (await $.mv((await $.wcall([$t17, $t18], "FieldByName", ["TrProcessed"], C)), "AsInteger")), { get: async () => L0["crdstatus"], set: async (v) => { L0["crdstatus"] = v; }, local: true });
          if ($.truthy($.in_((await $.wv([$t17, $t18], "CrdStatus", { get: async () => L0["crdstatus"], set: async (v) => { L0["crdstatus"] = v; }, local: true }, false)), [0, 1]))) {
            await $.stmt((await $.wcall([$t17, $t18], "AcceptCalcedIntForOne", [(await $.wv([$t17, $t18], "CrdID", { get: async () => L0["crdid"], set: async (v) => { L0["crdid"] = v; }, local: true }, false)), (await $.wv([$t17, $t18], "CrdNo", { get: async () => L0["crdno"], set: async (v) => { L0["crdno"] = v; }, local: true }, false))], C)));
          } else {
            await $.stmt((await $.wcall([$t17, $t18], "LogWarning", [(await $.wcall([$t17, $t18], "Format", [(await $.wv([$t17, $t18], "rsAlreadyCalced", { get: async () => L0["rsalreadycalced"], set: async (v) => { L0["rsalreadycalced"] = v; }, local: true }, false)), [(await $.wv([$t17, $t18], "CrdNo", { get: async () => L0["crdno"], set: async (v) => { L0["crdno"] = v; }, local: true }, false))]], C))], C)));
          }
          await $.mset((await $.mv((await $.wv([$t17, $t18], "NewProgressForm", C, false)), "ProgressShower")), "Position", $.add((await $.wv([$t17, $t18], "I", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false)), 1));
          await $.tick();
        }
      }
      await $.mcall((await $.wv([$t17, $t18], "newProgressForm", C, false)), "Close", []);
    } else {
      await $.wset([$t17, $t18], "CrdID", (await $.mv((await $.wcall([$t17, $t18], "FieldByName", ["ID"], C)), "AsInteger")), { get: async () => L0["crdid"], set: async (v) => { L0["crdid"] = v; }, local: true });
      await $.wset([$t17, $t18], "CrdNo", (await $.mv((await $.wcall([$t17, $t18], "FieldByName", ["NumberOfCredit"], C)), "AsString")), { get: async () => L0["crdno"], set: async (v) => { L0["crdno"] = v; }, local: true });
      await $.wset([$t17, $t18], "CrdStatus", (await $.mv((await $.wcall([$t17, $t18], "FieldByName", ["TrProcessed"], C)), "AsInteger")), { get: async () => L0["crdstatus"], set: async (v) => { L0["crdstatus"] = v; }, local: true });
      if ($.truthy($.not((await $.wcall([$t17, $t18], "ExcuseMeUser", [(await $.wcall([$t17, $t18], "Format", [(await $.wv([$t17, $t18], "rsConfirmForOne", { get: async () => L0["rsconfirmforone"], set: async (v) => { L0["rsconfirmforone"] = v; }, local: true }, false)), [(await $.wv([$t17, $t18], "CrdNo", { get: async () => L0["crdno"], set: async (v) => { L0["crdno"] = v; }, local: true }, false)), (await $.wv([$t17, $t18], "rsCalcPercent", { get: async () => L0["rscalcpercent"], set: async (v) => { L0["rscalcpercent"] = v; }, local: true }, false))]], C))], C))))) {
        return L0.result;
      }
      if ($.truthy($.in_((await $.wv([$t17, $t18], "CrdStatus", { get: async () => L0["crdstatus"], set: async (v) => { L0["crdstatus"] = v; }, local: true }, false)), [0, 1]))) {
        await $.stmt((await $.wcall([$t17, $t18], "AcceptCalcedIntForOne", [(await $.wv([$t17, $t18], "CrdID", { get: async () => L0["crdid"], set: async (v) => { L0["crdid"] = v; }, local: true }, false)), (await $.wv([$t17, $t18], "CrdNo", { get: async () => L0["crdno"], set: async (v) => { L0["crdno"] = v; }, local: true }, false))], C)));
      } else {
        await $.stmt((await $.wcall([$t17, $t18], "LogWarning", [(await $.wcall([$t17, $t18], "Format", [(await $.wv([$t17, $t18], "rsAlreadyCalced", { get: async () => L0["rsalreadycalced"], set: async (v) => { L0["rsalreadycalced"] = v; }, local: true }, false)), [(await $.wv([$t17, $t18], "CrdNo", { get: async () => L0["crdno"], set: async (v) => { L0["crdno"] = v; }, local: true }, false))]], C))], C)));
      }
    }
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TPRMainForm", "ActnRejectCalcExecute", async function ActnRejectCalcExecute(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "i": 0, "selectedrowscnt": 0, "crdid": 0, "crdno": '', "crdstatus": 0};
  await $.fixArgs(L0, ["sender"]);
  L0["rsconfirmforone"] = "%s  - № li kredit üçün %s. Əminsiniz?";
  L0["rsconfirmforall"] = "%d - sayda kredit üçün %s. Əminsiniz?";
  L0["rscalcpercent"] = "Hesablanmış faizlər ləğv olunacaq";
  L0["rsalreadycalced"] = "%s - № li kredit üçün faizlər hələ hesablanmayıb !";
  L0["rsprogresscaption"] = "                       Faizlər ləğv olunur. gözləyin.   .....";
  {
    const $t21 = (await $.wobj(C, "CalcGrid"));
    const $t22 = (await $.mv((await $.wv([$t21], "DataSource", C, false)), "DataSet"));
    await $.wset([$t21, $t22], "SelectedRowsCnt", (await $.mv((await $.wv([$t21, $t22], "SelectedRows", C, false)), "Count")), { get: async () => L0["selectedrowscnt"], set: async (v) => { L0["selectedrowscnt"] = v; }, local: true });
    if ($.truthy($.gt((await $.wv([$t21, $t22], "SelectedRowsCnt", { get: async () => L0["selectedrowscnt"], set: async (v) => { L0["selectedrowscnt"] = v; }, local: true }, false)), 1))) {
      if ($.truthy($.not((await $.wcall([$t21, $t22], "ExcuseMeUser", [(await $.wcall([$t21, $t22], "Format", [(await $.wv([$t21, $t22], "rsConfirmForAll", { get: async () => L0["rsconfirmforall"], set: async (v) => { L0["rsconfirmforall"] = v; }, local: true }, false)), [(await $.wv([$t21, $t22], "SelectedRowsCnt", { get: async () => L0["selectedrowscnt"], set: async (v) => { L0["selectedrowscnt"] = v; }, local: true }, false)), (await $.wv([$t21, $t22], "rsCalcPercent", { get: async () => L0["rscalcpercent"], set: async (v) => { L0["rscalcpercent"] = v; }, local: true }, false))]], C))], C))))) {
        return L0.result;
      }
      await $.mcall(Self, "Update", []);
      await $.stmt((await $.wcall([$t21, $t22], "PrepareProgress", [(await $.wv([$t21, $t22], "SelectedRowsCnt", { get: async () => L0["selectedrowscnt"], set: async (v) => { L0["selectedrowscnt"] = v; }, local: true }, false)), (await $.wv([$t21, $t22], "rsProgressCaption", { get: async () => L0["rsprogresscaption"], set: async (v) => { L0["rsprogresscaption"] = v; }, local: true }, false))], C)));
      { const $t23 = $.sub((await $.wv([$t21, $t22], "SelectedRowsCnt", { get: async () => L0["selectedrowscnt"], set: async (v) => { L0["selectedrowscnt"] = v; }, local: true }, false)), 1);
        await $.wset([$t21, $t22], "I", 0, { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true });
        let $t24 = true;
        for (;;) {
          if (!$t24) { await $.wset([$t21, $t22], "I", $.succ((await $.wv([$t21, $t22], "I", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false)), 1), { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }); }
          $t24 = false;
          if (!($.ord((await $.wv([$t21, $t22], "I", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false))) <= $.ord($t23))) break;
          await $.stmt((await $.wcall([$t21, $t22], "GotoBookmark", [(await $.wcall([$t21, $t22], "Pointer", [(await $.idx((await $.wv([$t21, $t22], "SelectedRows", C, false)), [(await $.wv([$t21, $t22], "I", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false))]))], C))], C)));
          await $.wset([$t21, $t22], "CrdID", (await $.mv((await $.wcall([$t21, $t22], "FieldByName", ["ID"], C)), "AsInteger")), { get: async () => L0["crdid"], set: async (v) => { L0["crdid"] = v; }, local: true });
          await $.wset([$t21, $t22], "CrdNo", (await $.mv((await $.wcall([$t21, $t22], "FieldByName", ["NumberOfCredit"], C)), "AsString")), { get: async () => L0["crdno"], set: async (v) => { L0["crdno"] = v; }, local: true });
          await $.wset([$t21, $t22], "CrdStatus", (await $.mv((await $.wcall([$t21, $t22], "FieldByName", ["TrProcessed"], C)), "AsInteger")), { get: async () => L0["crdstatus"], set: async (v) => { L0["crdstatus"] = v; }, local: true });
          if ($.truthy($.in_((await $.wv([$t21, $t22], "CrdStatus", { get: async () => L0["crdstatus"], set: async (v) => { L0["crdstatus"] = v; }, local: true }, false)), [1, 2]))) {
            await $.stmt((await $.wcall([$t21, $t22], "CancelCalcIntForOne", [(await $.wv([$t21, $t22], "CrdID", { get: async () => L0["crdid"], set: async (v) => { L0["crdid"] = v; }, local: true }, false)), (await $.wv([$t21, $t22], "CrdNo", { get: async () => L0["crdno"], set: async (v) => { L0["crdno"] = v; }, local: true }, false))], C)));
          } else {
            await $.stmt((await $.wcall([$t21, $t22], "LogWarning", [(await $.wcall([$t21, $t22], "Format", [(await $.wv([$t21, $t22], "rsAlreadyCalced", { get: async () => L0["rsalreadycalced"], set: async (v) => { L0["rsalreadycalced"] = v; }, local: true }, false)), [(await $.wv([$t21, $t22], "CrdNo", { get: async () => L0["crdno"], set: async (v) => { L0["crdno"] = v; }, local: true }, false))]], C))], C)));
          }
          await $.mset((await $.mv((await $.wv([$t21, $t22], "newProgressForm", C, false)), "ProgressShower")), "Position", $.add((await $.wv([$t21, $t22], "I", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false)), 1));
          await $.tick();
        }
      }
      await $.mcall((await $.wv([$t21, $t22], "newProgressForm", C, false)), "Close", []);
    } else {
      await $.wset([$t21, $t22], "CrdID", (await $.mv((await $.wcall([$t21, $t22], "FieldByName", ["ID"], C)), "AsInteger")), { get: async () => L0["crdid"], set: async (v) => { L0["crdid"] = v; }, local: true });
      await $.wset([$t21, $t22], "CrdNo", (await $.mv((await $.wcall([$t21, $t22], "FieldByName", ["NumberOfCredit"], C)), "AsString")), { get: async () => L0["crdno"], set: async (v) => { L0["crdno"] = v; }, local: true });
      await $.wset([$t21, $t22], "CrdStatus", (await $.mv((await $.wcall([$t21, $t22], "FieldByName", ["TrProcessed"], C)), "AsInteger")), { get: async () => L0["crdstatus"], set: async (v) => { L0["crdstatus"] = v; }, local: true });
      if ($.truthy($.not((await $.wcall([$t21, $t22], "ExcuseMeUser", [(await $.wcall([$t21, $t22], "Format", [(await $.wv([$t21, $t22], "rsConfirmForOne", { get: async () => L0["rsconfirmforone"], set: async (v) => { L0["rsconfirmforone"] = v; }, local: true }, false)), [(await $.wv([$t21, $t22], "CrdNo", { get: async () => L0["crdno"], set: async (v) => { L0["crdno"] = v; }, local: true }, false)), (await $.wv([$t21, $t22], "rsCalcPercent", { get: async () => L0["rscalcpercent"], set: async (v) => { L0["rscalcpercent"] = v; }, local: true }, false))]], C))], C))))) {
        return L0.result;
      }
      if ($.truthy($.in_((await $.wv([$t21, $t22], "CrdStatus", { get: async () => L0["crdstatus"], set: async (v) => { L0["crdstatus"] = v; }, local: true }, false)), [1, 2]))) {
        await $.stmt((await $.wcall([$t21, $t22], "CancelCalcIntForOne", [(await $.wv([$t21, $t22], "CrdID", { get: async () => L0["crdid"], set: async (v) => { L0["crdid"] = v; }, local: true }, false)), (await $.wv([$t21, $t22], "CrdNo", { get: async () => L0["crdno"], set: async (v) => { L0["crdno"] = v; }, local: true }, false))], C)));
      } else {
        await $.stmt((await $.wcall([$t21, $t22], "LogWarning", [(await $.wcall([$t21, $t22], "Format", [(await $.wv([$t21, $t22], "rsAlreadyCalced", { get: async () => L0["rsalreadycalced"], set: async (v) => { L0["rsalreadycalced"] = v; }, local: true }, false)), [(await $.wv([$t21, $t22], "CrdNo", { get: async () => L0["crdno"], set: async (v) => { L0["crdno"] = v; }, local: true }, false))]], C))], C)));
      }
    }
    await $.stmt((await $.wcall([$t21, $t22], "SafelyRefresh", [(await $.wv([$t21, $t22], "False", C, false))], C)));
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TPRMainForm", "CalcGridColumnMoved", async function CalcGridColumnMoved(Self, p0, p1, p2) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "fromindex": $.copyArg(p1), "toindex": $.copyArg(p2), result: undefined};
  await $.fixArgs(L0, ["sender", "fromindex", "toindex"]);
  L0["findspecialrowindex"] = $.fn(async function FindSpecialRowIndex() {
  const L1 = {result: 0};
  L1["result"] = 0;
  {
    const $t25 = L0["sender"];
    while ($.truthy((await $.and_(($.lt((await $.wv([$t25], "Result", { get: async () => L1["result"], set: async (v) => { L1["result"] = v; }, local: true }, false)), (await $.mv((await $.wv([$t25], "Columns", C, false)), "Count")))), async () => ($.ne((await $.mv((await $.idx((await $.wv([$t25], "Columns", C, false)), [(await $.wv([$t25], "Result", { get: async () => L1["result"], set: async (v) => { L1["result"] = v; }, local: true }, false))])), "Tag")), 1)))))) {
      await $.stmt((await $.wcall([$t25], "Inc", [$.ref(async () => (await $.wv([$t25], "Result", { get: async () => L1["result"], set: async (v) => { L1["result"] = v; }, local: true }, false)), async ($t26) => { await $.wset([$t25], "Result", $t26, { get: async () => L1["result"], set: async (v) => { L1["result"] = v; }, local: true }); })], C)));
      await $.tick();
    }
  }
  return L1.result;
});
  await $.set(C, "DataColIndex", (await $.callv(L0["findspecialrowindex"], [])));
  return L0.result;
}, {"params": ["Sender", "FromIndex", "ToIndex"], "kind": "procedure", "ptypes": ["TObject", "Integer", "Integer"]});
  U.method("TPRMainForm", "FormClose", async function FormClose(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "action": $.asRef(p1), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mcall((await $.v(C, "newProgressForm")), "Close", []);
  return L0.result;
}, {"params": ["Sender", "Action"], "kind": "procedure", "ptypes": ["TObject", "TCloseAction"]});
  U.method("TPRMainForm", "ActnRefreshExecute", async function ActnRefreshExecute(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.stmt((await $.call(C, "SafelyRefresh", [true])));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TPRMainForm", "ActnAcceptCalcUpdate", async function ActnAcceptCalcUpdate(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t27 = (await $.mv((await $.mv((await $.v(C, "CalcGrid")), "DataSource")), "DataSet"));
    await $.mset((await $.wv([$t27], "Sender", { get: async () => L0["sender"], set: async (v) => { L0["sender"] = v; }, local: true }, false)), "Enabled", (await $.and_((await $.wv([$t27], "Active", C, false)), async () => ($.eq((await $.mv((await $.wcall([$t27], "FieldByName", ["TrProcessed"], C)), "AsInteger")), 1)))));
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TPRMainForm", "ActnRejectCalcUpdate", async function ActnRejectCalcUpdate(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t28 = (await $.mv((await $.mv((await $.v(C, "CalcGrid")), "DataSource")), "DataSet"));
    await $.mset((await $.wv([$t28], "Sender", { get: async () => L0["sender"], set: async (v) => { L0["sender"] = v; }, local: true }, false)), "Enabled", (await $.and_((await $.wv([$t28], "Active", C, false)), async () => ($.in_((await $.mv((await $.wcall([$t28], "FieldByName", ["TrProcessed"], C)), "AsInteger")), [1, 2])))));
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TPRMainForm", "CalcGridTitleBtnClick", async function CalcGridTitleBtnClick(Self, p0, p1, p2) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "acol": $.copyArg(p1), "column": $.copyArg(p2), result: undefined, "sortfield": ''};
  await $.fixArgs(L0, ["sender", "acol", "column"]);
  if ($.truthy($.ne(L0["acol"], (await $.v(C, "DataColIndex"))))) {
    L0["sortfield"] = (await $.mv(L0["column"], "FieldName"));
  } else {
    L0["sortfield"] = "TRPROCESSED";
  }
  if ($.truthy($.eq((await $.mv((await $.mv(L0["column"], "Title")), "SortMarker")), (await $.v(C, "smDownEh"))))) {
    L0["sortfield"] = $.add(L0["sortfield"], " DESC");
  }
  {
    const $t29 = L0["sender"];
    const $t30 = (await $.wcall([$t29], "TOracleDataSet", [(await $.mv((await $.wv([$t29], "DataSource", C, false)), "DataSet"))], C));
    await $.stmt($.wcall([$t29, $t30], "ClearVariables", [], C));
    await $.stmt((await $.wcall([$t29, $t30], "SetVariable", ["OrderField", (await $.wv([$t29, $t30], "SortField", { get: async () => L0["sortfield"], set: async (v) => { L0["sortfield"] = v; }, local: true }, false))], C)));
    await $.stmt((await $.wcall([$t29, $t30], "SafelyRefresh", [(await $.wv([$t29, $t30], "True", C, false))], C)));
  }
  return L0.result;
}, {"params": ["Sender", "ACol", "Column"], "kind": "procedure", "ptypes": ["TObject", "Integer", "TColumnEh"]});
  U.method("TPRMainForm", "ActnExportExecute", async function ActnExportExecute(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t31 = (await $.wobj(C, "ExcelExport"));
    await $.stmt($.wcall([$t31], "Connect", [], C));
    await $.stmt((await $.wcall([$t31], "ExportDataset", [(await $.mv((await $.mv((await $.wv([$t31], "CalcGrid", C, false)), "DataSource")), "DataSet")), "Interests", (await $.wv([$t31], "True", C, false))], C)));
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TPRMainForm", "FindNextRecord", async function FindNextRecord(Self, p0, p1, p2) {
  const C = $.chain(Self, U);
  const L0 = {"dataset": $.copyArg(p0), "fieldname": $.copyArg(p1), "value": $.copyArg(p2), result: false, "searchoptions": null};
  await $.fixArgs(L0, ["dataset", "fieldname", "value"]);
  L0["rsrecordrecachedeof"] = "Axtarış cərgənin sonuna çatıb .";
  L0["rscontinuefromtop"] = "Əvvəldən axtarmaqla davam etmək istəyirsiniz?";
  L0["rsrecordnotfound"] = "Yazı tapılmadı.";
  L0["searchoptions"] = [(await $.v(C, "srIgnoreCase")), (await $.v(C, "srPartialMatch"))];
  {
    const $t32 = (L0["dataset"]);
    await $.wset([$t32], "Result", (await $.wcall([$t32], "SearchRecord", [(await $.wv([$t32], "FieldName", { get: async () => L0["fieldname"], set: async (v) => { L0["fieldname"] = v; }, local: true }, false)), (await $.wv([$t32], "Value", { get: async () => L0["value"], set: async (v) => { L0["value"] = v; }, local: true }, false)), $.add((await $.wv([$t32], "SearchOptions", { get: async () => L0["searchoptions"], set: async (v) => { L0["searchoptions"] = v; }, local: true }, false)), [(await $.wv([$t32], "srFromCurrent", C, false)), (await $.wv([$t32], "srForward", C, false))])], C)), { get: async () => L0["result"], set: async (v) => { L0["result"] = v; }, local: true });
    if ($.truthy($.not((await $.wv([$t32], "Result", { get: async () => L0["result"], set: async (v) => { L0["result"] = v; }, local: true }, false))))) {
      if ($.truthy($.eq((await $.wcall([$t32], "MessageDlg", [$.add($.add((await $.wv([$t32], "rsRecordRecachedEOF", { get: async () => L0["rsrecordrecachedeof"], set: async (v) => { L0["rsrecordrecachedeof"] = v; }, local: true }, false)), "\n\r"), (await $.wv([$t32], "rsContinueFromTop", { get: async () => L0["rscontinuefromtop"], set: async (v) => { L0["rscontinuefromtop"] = v; }, local: true }, false))), (await $.wv([$t32], "mtInformation", C, false)), [(await $.wv([$t32], "mbNo", C, false)), (await $.wv([$t32], "mbYes", C, false))], 0], C)), (await $.wv([$t32], "mrYes", C, false))))) {
        await $.wset([$t32], "Result", (await $.wcall([$t32], "SearchRecord", [(await $.wv([$t32], "FieldName", { get: async () => L0["fieldname"], set: async (v) => { L0["fieldname"] = v; }, local: true }, false)), (await $.wv([$t32], "Value", { get: async () => L0["value"], set: async (v) => { L0["value"] = v; }, local: true }, false)), $.add((await $.wv([$t32], "SearchOptions", { get: async () => L0["searchoptions"], set: async (v) => { L0["searchoptions"] = v; }, local: true }, false)), [(await $.wv([$t32], "srFromBeginning", C, false))])], C)), { get: async () => L0["result"], set: async (v) => { L0["result"] = v; }, local: true });
        if ($.truthy($.not((await $.wv([$t32], "Result", { get: async () => L0["result"], set: async (v) => { L0["result"] = v; }, local: true }, false))))) {
          await $.stmt((await $.wcall([$t32], "MessageDlg", [(await $.wv([$t32], "rsRecordNotFound", { get: async () => L0["rsrecordnotfound"], set: async (v) => { L0["rsrecordnotfound"] = v; }, local: true }, false)), (await $.wv([$t32], "mtInformation", C, false)), [(await $.wv([$t32], "mbOk", C, false))], 0], C)));
        }
      }
    }
  }
  return L0.result;
}, {"params": ["DataSet", "FieldName", "Value"], "kind": "function", "ptypes": ["TDataSet", "String", "String"]});
  U.method("TPRMainForm", "EditNumberOfCreditKeyPress", async function EditNumberOfCreditKeyPress(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "key": $.asRef(p1), result: undefined, "fieldtosearch": '', "searchvalue": ''};
  await $.fixArgs(L0, ["sender"]);
  L0["rsnothingtosearch"] = "Axtarılmalı olanı daxil edin";
  if ($.truthy($.eq((await $.call(C, "ORD", [(await L0["key"].get())])), (await $.v(C, "VK_RETURN"))))) {
    await $.mcall((await $.mv((await $.v(C, "CalcGrid")), "SelectedRows")), "Clear", []);
    L0["fieldtosearch"] = (await $.call(C, "Copy", [(await $.mv((L0["sender"]), "Name")), 5, (await $.call(C, "Length", [(await $.mv((L0["sender"]), "Name"))]))]));
    L0["searchvalue"] = (await $.mv((L0["sender"]), "Text"));
    if ($.truthy($.eq(L0["searchvalue"], ""))) {
      throw $.raise((await $.mcall((await $.v(C, "ESearchError")), "Create", [L0["rsnothingtosearch"]])));
    }
    await $.stmt((await $.call(C, "FindNextRecord", [(await $.mv((await $.mv((await $.v(C, "CalcGrid")), "DataSource")), "DataSet")), L0["fieldtosearch"], L0["searchvalue"]])));
    await L0["key"].set("\u0000");
  }
  return L0.result;
}, {"params": ["Sender", "Key"], "kind": "procedure", "ptypes": ["TObject", "Char"]});
  U.method("TPRMainForm", "EditNumberOfCreditExit", async function EditNumberOfCreditExit(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mset(L0["sender"], "Text", "");
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TPRMainForm", "ActnFilterExecute", async function ActnFilterExecute(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mcall((await $.v(C, "FilterMainForm")), "ShowModal", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TPRMainForm", "ActnFilterUpdate", async function ActnFilterUpdate(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mset(L0["sender"], "Enabled", $.not((await $.v(C, "LoadingFailed"))));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TPRMainForm", "ActnCalcAllintrestExecute", async function ActnCalcAllintrestExecute(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "crdid": 0, "i": 0, "rowcnt": 0, "currdat": 0};
  await $.fixArgs(L0, ["sender"]);
  L0["rsprogresscaption"] = "                        Faizler tesdiq olunur. gözləyin.   .....";
  L0["rsconfirmforall"] = "%d -  sayda kredit üçün %s. Əminsiniz?";
  L0["rscalcpercent"] = " faizlər hesablanıb, təsdiq olunacaq";
  await $.mcall((await $.mv((await $.v(C, "PRDataModule")), "OracleDataSet1")), "Refresh", []);
  L0["i"] = 1;
  L0["currdat"] = (await $.call(C, "integer", [(await $.call(C, "trunc", [(await $.mv((await $.v(C, "DTPCalcDate")), "datetime"))]))]));
  await $.mcall((await $.mv((await $.v(C, "PRDataModule")), "IntCache")), "CloseAll", []);
  await $.mcall((await $.mv((await $.v(C, "PRDataModule")), "IntCache")), "Open", []);
  L0["rowcnt"] = (await $.mv((await $.mv((await $.v(C, "PRDataModule")), "IntCache")), "RecordCount"));
  if ($.truthy($.not((await $.call(C, "ExcuseMeUser", [(await $.call(C, "Format", [L0["rsconfirmforall"], [L0["rowcnt"], L0["rscalcpercent"]]]))]))))) {
    return L0.result;
  }
  await $.stmt((await $.call(C, "PrepareProgress", [L0["rowcnt"], L0["rsprogresscaption"]])));
  {
    const $t33 = (await $.wobj(C, "PRDataModule"));
    const $t34 = (await $.wv([$t33], "IntCache", C, false));
    const $t35 = (await $.wv([$t33, $t34], "CalculatorPackage", C, false));
    await $.stmt($.wcall([$t33, $t34, $t35], "First", [], C));
    while ($.truthy($.not((await $.wv([$t33, $t34, $t35], "EOF", C, false))))) {
      try {
        await $.wset([$t33, $t34, $t35], "crdid", (await $.mv((await $.wcall([$t33, $t34, $t35], "FieldByName", ["ID"], C)), "AsInteger")), { get: async () => L0["crdid"], set: async (v) => { L0["crdid"] = v; }, local: true });
        await $.stmt((await $.wcall([$t33, $t34, $t35], "CallProcedure", ["CalcPercents", ["p_CreditID", (await $.wv([$t33, $t34, $t35], "crdid", { get: async () => L0["crdid"], set: async (v) => { L0["crdid"] = v; }, local: true }, false)), "p_date", (await $.wv([$t33, $t34, $t35], "Currdat", { get: async () => L0["currdat"], set: async (v) => { L0["currdat"] = v; }, local: true }, false)), "p_holidat", (await $.mv((await $.mcall((await $.mv((await $.wv([$t33, $t34, $t35], "PRDataModule", C, false)), "OracleDataSet1")), "FieldByName", ["dat"])), "AsDateTime")), "p_EndOfMonth", (await $.wv([$t33, $t34, $t35], "false", C, false))]], C)));
        await $.stmt((await $.wcall([$t33, $t34, $t35], "CallProcedure", ["AcceptCalcedPercents", ["p_CreditID", (await $.wv([$t33, $t34, $t35], "crdid", { get: async () => L0["crdid"], set: async (v) => { L0["crdid"] = v; }, local: true }, false)), "p_holidat", (await $.mv((await $.mcall((await $.mv((await $.wv([$t33, $t34, $t35], "PRDataModule", C, false)), "OracleDataSet1")), "FieldByName", ["dat"])), "AsDateTime"))]], C)));
      } catch ($t36) {
        $.rethrowControl($t36);
        if ($.excIs($t36, "Exception")) {
          L0["e"] = $.exc($t36);
          await $.stmt((await $.wcall([$t33, $t34, $t35], "LogError", [(await $.mv((await $.wv([$t33, $t34, $t35], "E", { get: async () => L0["e"], set: async (v) => { L0["e"] = v; }, local: true }, false)), "Message"))], C)));
        }
        else { throw $t36; }
      }
      await $.stmt($.wcall([$t33, $t34, $t35], "Next", [], C));
      await $.mset((await $.mv((await $.wv([$t33, $t34, $t35], "newProgressForm", C, false)), "ProgressShower")), "Position", $.add((await $.wv([$t33, $t34, $t35], "I", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false)), 1));
      await $.wset([$t33, $t34, $t35], "i", $.add((await $.wv([$t33, $t34, $t35], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false)), 1), { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true });
      await $.tick();
    }
  }
  await $.mcall((await $.v(C, "newProgressForm")), "Close", []);
  await $.stmt((await $.call(C, "SafelyRefresh", [false])));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TPRMainForm", "ActnCalcAllintrestUpdate", async function ActnCalcAllintrestUpdate(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t37 = (await $.mv((await $.mv((await $.v(C, "CalcGrid")), "DataSource")), "DataSet"));
    await $.mset((await $.wv([$t37], "Sender", { get: async () => L0["sender"], set: async (v) => { L0["sender"] = v; }, local: true }, false)), "Enabled", (await $.and_((await $.wv([$t37], "Active", C, false)), async () => ($.in_((await $.mv((await $.wcall([$t37], "FieldByName", ["TrProcessed"], C)), "AsInteger")), [0, 1])))));
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.setInitialization(async function __initialization(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: undefined};
  await $.set(C, "PRMainForm", (await $.mcall((await $.v(C, "TPRMainForm")), "Create", [(await $.v(C, "CommonApplication"))])));
  return L0.result;
});
  return U;
}
