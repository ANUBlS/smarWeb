// Generated from CalcInOBMainUnit.pas by pas2js — do not edit by hand; regenerate instead.
/* eslint-disable */
// @ts-nocheck

export default function define($) {
  const U = $.unit("CalcInOBMainUnit", ["Windows", "Messages", "SysUtils", "Classes", "Graphics", "Controls", "Forms", "NLSDialogs", "Grids", "DBGridEh", "ImgList", "NLSLocalizer", "CMExcelExport", "ComCtrls", "ToolWin", "ExtCtrls", "ActnList", "StdCtrls", "DB", "Oracle", "OracleData", "Mask", "DBCtrlsEh", "COBDatModImpl", "CommonDecls", "SystemState", "ProgressUnit"]);
  const C = [U];
  U.defClass("TCOBMainForm", "TForm", {"panel1": {"name": "Panel1", "type": "TPanel"}, "panel2": {"name": "Panel2", "type": "TPanel"}, "excelexport": {"name": "ExcelExport", "type": "TCMExcelExport"}, "nlslocalizer1": {"name": "NLSLocalizer1", "type": "TNLSLocalizer"}, "imagelist1": {"name": "ImageList1", "type": "TImageList"}, "cobgrid": {"name": "COBGrid", "type": "TDBGridEh"}, "actionlist1": {"name": "ActionList1", "type": "TActionList"}, "actncalcint": {"name": "ActnCalcInt", "type": "TAction"}, "actnacceptint": {"name": "ActnAcceptInt", "type": "TAction"}, "actncancelint": {"name": "ActnCancelInt", "type": "TAction"}, "toolbar1": {"name": "ToolBar1", "type": "TToolBar"}, "toolbutton1": {"name": "ToolButton1", "type": "TToolButton"}, "toolbutton2": {"name": "ToolButton2", "type": "TToolButton"}, "toolbutton3": {"name": "ToolButton3", "type": "TToolButton"}, "toolbutton4": {"name": "ToolButton4", "type": "TToolButton"}, "toolbutton5": {"name": "ToolButton5", "type": "TToolButton"}, "toolbutton6": {"name": "ToolButton6", "type": "TToolButton"}, "toolbutton7": {"name": "ToolButton7", "type": "TToolButton"}, "toolbutton8": {"name": "ToolButton8", "type": "TToolButton"}, "actnexcelimp": {"name": "ActnExcelImp", "type": "TAction"}, "toolbutton9": {"name": "ToolButton9", "type": "TToolButton"}, "actnclose": {"name": "ActnClose", "type": "TAction"}, "groupbox1": {"name": "GroupBox1", "type": "TGroupBox"}, "editnumberofcredit": {"name": "EditNUMBEROFCREDIT", "type": "TEdit"}, "editcontractaccno": {"name": "EditCONTRACTACCNO", "type": "TEdit"}, "editval_name": {"name": "EditVAL_NAME", "type": "TEdit"}, "editname": {"name": "EditNAME", "type": "TEdit"}, "groupbox2": {"name": "GroupBox2", "type": "TGroupBox"}, "dbdatetimeediteh1": {"name": "DBDateTimeEditEh1", "type": "TDBDateTimeEditEh"}, "toolbutton10": {"name": "ToolButton10", "type": "TToolButton"}}, {});
  U.init(async () => {
    U.const("DataColIndex", 4);
    U.var_("COBMainForm", null, "TCOBMainForm");
  });
  U.method("TCOBMainForm", "PrepareProgress", async function PrepareProgress(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"progcnt": $.copyArg(p0), "opdesc": $.copyArg(p1), result: undefined};
  await $.fixArgs(L0, ["progcnt", "opdesc"]);
  {
    const $t1 = (await $.wobj(C, "ProgressForm"));
    const $t2 = (await $.wv([$t1], "ProgressShower", C, false));
    await $.wset([$t1, $t2], "Position", 0, C);
    await $.wset([$t1, $t2], "Max", (await $.wv([$t1, $t2], "ProgCnt", { get: async () => L0["progcnt"], set: async (v) => { L0["progcnt"] = v; }, local: true }, false)), C);
    await $.wset([$t1, $t2], "Step", 1, C);
    await $.mset((await $.wv([$t1, $t2], "NLSLocalizer1", C, false)), "Caption", (await $.wv([$t1, $t2], "opDesc", { get: async () => L0["opdesc"], set: async (v) => { L0["opdesc"] = v; }, local: true }, false)));
  }
  await $.mcall((await $.v(C, "ProgressForm")), "Show", []);
  return L0.result;
}, {"params": ["ProgCnt", "opDesc"], "kind": "procedure", "ptypes": ["Integer", "String"]});
  U.method("TCOBMainForm", "FindNextRecord", async function FindNextRecord(Self, p0, p1, p2) {
  const C = $.chain(Self, U);
  const L0 = {"dataset": $.copyArg(p0), "fieldname": $.copyArg(p1), "value": $.copyArg(p2), result: false, "searchoptions": null};
  await $.fixArgs(L0, ["dataset", "fieldname", "value"]);
  L0["rsrecordrecachedeof"] = "Axtarış cərgənin sonuna çatıb .";
  L0["rscontinuefromtop"] = "Əvvəldən axtarmaqla davam etmək istiyirsiniz?";
  L0["rsrecordnotfound"] = "Yazı tapılmadı.";
  L0["searchoptions"] = [(await $.v(C, "srIgnoreCase")), (await $.v(C, "srPartialMatch"))];
  {
    const $t3 = (L0["dataset"]);
    await $.wset([$t3], "Result", (await $.wcall([$t3], "SearchRecord", [(await $.wv([$t3], "FieldName", { get: async () => L0["fieldname"], set: async (v) => { L0["fieldname"] = v; }, local: true }, false)), (await $.wv([$t3], "Value", { get: async () => L0["value"], set: async (v) => { L0["value"] = v; }, local: true }, false)), $.add((await $.wv([$t3], "SearchOptions", { get: async () => L0["searchoptions"], set: async (v) => { L0["searchoptions"] = v; }, local: true }, false)), [(await $.wv([$t3], "srFromCurrent", C, false)), (await $.wv([$t3], "srForward", C, false))])], C)), { get: async () => L0["result"], set: async (v) => { L0["result"] = v; }, local: true });
    if ($.truthy($.not((await $.wv([$t3], "Result", { get: async () => L0["result"], set: async (v) => { L0["result"] = v; }, local: true }, false))))) {
      if ($.truthy($.eq((await $.wcall([$t3], "MessageDlg", [$.add($.add((await $.wv([$t3], "rsRecordRecachedEOF", { get: async () => L0["rsrecordrecachedeof"], set: async (v) => { L0["rsrecordrecachedeof"] = v; }, local: true }, false)), "\n\r"), (await $.wv([$t3], "rsContinueFromTop", { get: async () => L0["rscontinuefromtop"], set: async (v) => { L0["rscontinuefromtop"] = v; }, local: true }, false))), (await $.wv([$t3], "mtInformation", C, false)), [(await $.wv([$t3], "mbNo", C, false)), (await $.wv([$t3], "mbYes", C, false))], 0], C)), (await $.wv([$t3], "mrYes", C, false))))) {
        await $.wset([$t3], "Result", (await $.wcall([$t3], "SearchRecord", [(await $.wv([$t3], "FieldName", { get: async () => L0["fieldname"], set: async (v) => { L0["fieldname"] = v; }, local: true }, false)), (await $.wv([$t3], "Value", { get: async () => L0["value"], set: async (v) => { L0["value"] = v; }, local: true }, false)), $.add((await $.wv([$t3], "SearchOptions", { get: async () => L0["searchoptions"], set: async (v) => { L0["searchoptions"] = v; }, local: true }, false)), [(await $.wv([$t3], "srFromBeginning", C, false))])], C)), { get: async () => L0["result"], set: async (v) => { L0["result"] = v; }, local: true });
        if ($.truthy($.not((await $.wv([$t3], "Result", { get: async () => L0["result"], set: async (v) => { L0["result"] = v; }, local: true }, false))))) {
          await $.stmt((await $.wcall([$t3], "MessageDlg", [(await $.wv([$t3], "rsRecordNotFound", { get: async () => L0["rsrecordnotfound"], set: async (v) => { L0["rsrecordnotfound"] = v; }, local: true }, false)), (await $.wv([$t3], "mtInformation", C, false)), [(await $.wv([$t3], "mbOk", C, false))], 0], C)));
        }
      }
    }
  }
  return L0.result;
}, {"params": ["DataSet", "FieldName", "Value"], "kind": "function", "ptypes": ["TDataSet", "String", "String"]});
  U.method("TCOBMainForm", "SafelyRefresh", async function SafelyRefresh(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"safely": $.copyArg(p0), result: undefined, "saveplace": null};
  await $.fixArgs(L0, ["safely"]);
  {
    const $t4 = (await $.wobj(C, "COBGrid"));
    const $t5 = (await $.mv((await $.wv([$t4], "DataSource", C, false)), "DataSet"));
    await $.wset([$t4, $t5], "SavePlace", (await $.wv([$t4, $t5], "GetBookmark", C, false)), { get: async () => L0["saveplace"], set: async (v) => { L0["saveplace"] = v; }, local: true });
    await $.stmt($.wcall([$t4, $t5], "Refresh", [], C));
    await $.mcall((await $.wv([$t4, $t5], "SelectedRows", C, false)), "Clear", []);
    if ($.truthy((await $.wv([$t4, $t5], "Safely", { get: async () => L0["safely"], set: async (v) => { L0["safely"] = v; }, local: true }, false)))) {
      await $.stmt((await $.wcall([$t4, $t5], "GotoBookmark", [(await $.wv([$t4, $t5], "SavePlace", { get: async () => L0["saveplace"], set: async (v) => { L0["saveplace"] = v; }, local: true }, false))], C)));
    }
  }
  return L0.result;
}, {"params": ["Safely"], "kind": "procedure", "ptypes": ["Boolean"]});
  U.func("InitPlugin", async function InitPlugin(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"s": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["s"]);
  {
    const $t6 = (await $.wobj(C, "COBDatMod"));
    await $.mcall((await $.wv([$t6], "INTCACHEDatSet", C, false)), "Open", []);
    await $.mcall((await $.wv([$t6], "DateInOut", C, false)), "Open", []);
  }
  await $.mcall((await $.v(C, "COBMainForm")), "ShowModal", []);
  return L0.result;
}, {"params": ["S"], "kind": "procedure", "ptypes": ["String"]});
  U.method("TCOBMainForm", "FormCreate", async function FormCreate(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.set(C, "COBDatMod", (await $.mcall((await $.v(C, "TCOBDatMod")), "Create", [Self])));
  await $.set(C, "ProgressForm", (await $.mcall((await $.v(C, "TProgressForm")), "Create", [Self])));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TCOBMainForm", "FormDestroy", async function FormDestroy(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t7 = (await $.wobj(C, "COBDatMod"));
    await $.mcall((await $.wv([$t7], "INTCACHEDatSet", C, false)), "Close", []);
    await $.stmt($.wcall([$t7], "Free", [], C));
  }
  await $.mcall((await $.v(C, "ProgressForm")), "Free", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TCOBMainForm", "ActnCalcIntExecute", async function ActnCalcIntExecute(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "i": 0, "selectedrowscnt": 0, "crdid": 0, "crdstatus": 0, "crdno": '', "p_date": 0, "endofmonth": false};
  await $.fixArgs(L0, ["sender"]);
  L0["rsacceptcalced"] = "Faizlər hesablanır əminsinizmi?";
  L0["rsprogresscaption"] = "                            Faizlər hesablanır. gözləyin.   .....";
  L0["p_date"] = (await $.call(C, "integer", [(await $.call(C, "trunc", [(await $.mv((await $.mcall((await $.mv((await $.mv((await $.v(C, "DBDateTimeEditEh1")), "DataSource")), "DataSet")), "FieldByName", ["Tek_Dat"])), "AsDateTime"))]))]));
  L0["endofmonth"] = false;
  {
    const $t8 = (await $.wobj(C, "COBGrid"));
    const $t9 = (await $.mv((await $.wv([$t8], "DataSource", C, false)), "DataSet"));
    await $.wset([$t8, $t9], "SelectedRowsCnt", (await $.mv((await $.wv([$t8, $t9], "SelectedRows", C, false)), "Count")), { get: async () => L0["selectedrowscnt"], set: async (v) => { L0["selectedrowscnt"] = v; }, local: true });
    if ($.truthy($.gt((await $.wv([$t8, $t9], "SelectedRowsCnt", { get: async () => L0["selectedrowscnt"], set: async (v) => { L0["selectedrowscnt"] = v; }, local: true }, false)), 1))) {
      if ($.truthy($.eq($.not((await $.wcall([$t8, $t9], "MessageDlg", [(await $.wv([$t8, $t9], "rsAcceptCalced", { get: async () => L0["rsacceptcalced"], set: async (v) => { L0["rsacceptcalced"] = v; }, local: true }, false)), (await $.wv([$t8, $t9], "mtConfirmation", C, false)), [(await $.wv([$t8, $t9], "mbYes", C, false)), (await $.wv([$t8, $t9], "mbNo", C, false))], 0], C))), (await $.wv([$t8, $t9], "mrYes", C, false))))) {
        return L0.result;
      }
      await $.stmt((await $.wcall([$t8, $t9], "PrepareProgress", [(await $.wv([$t8, $t9], "SelectedRowsCnt", { get: async () => L0["selectedrowscnt"], set: async (v) => { L0["selectedrowscnt"] = v; }, local: true }, false)), (await $.wv([$t8, $t9], "rsProgressCaption", { get: async () => L0["rsprogresscaption"], set: async (v) => { L0["rsprogresscaption"] = v; }, local: true }, false))], C)));
      { const $t10 = $.sub((await $.wv([$t8, $t9], "SelectedRowsCnt", { get: async () => L0["selectedrowscnt"], set: async (v) => { L0["selectedrowscnt"] = v; }, local: true }, false)), 1);
        await $.wset([$t8, $t9], "I", 0, { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true });
        let $t11 = true;
        for (;;) {
          if (!$t11) { await $.wset([$t8, $t9], "I", $.succ((await $.wv([$t8, $t9], "I", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false)), 1), { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }); }
          $t11 = false;
          if (!($.ord((await $.wv([$t8, $t9], "I", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false))) <= $.ord($t10))) break;
          await $.stmt((await $.wcall([$t8, $t9], "GotoBookmark", [(await $.wcall([$t8, $t9], "Pointer", [(await $.idx((await $.wv([$t8, $t9], "SelectedRows", C, false)), [(await $.wv([$t8, $t9], "I", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false))]))], C))], C)));
          await $.wset([$t8, $t9], "CrdID", (await $.mv((await $.wcall([$t8, $t9], "FieldByName", ["ID"], C)), "AsInteger")), { get: async () => L0["crdid"], set: async (v) => { L0["crdid"] = v; }, local: true });
          await $.wset([$t8, $t9], "CrdNo", (await $.mv((await $.wcall([$t8, $t9], "FieldByName", ["NumberOfCredit"], C)), "AsString")), { get: async () => L0["crdno"], set: async (v) => { L0["crdno"] = v; }, local: true });
          await $.wset([$t8, $t9], "CrdStatus", (await $.mv((await $.wcall([$t8, $t9], "FieldByName", ["TrProcessed"], C)), "AsInteger")), { get: async () => L0["crdstatus"], set: async (v) => { L0["crdstatus"] = v; }, local: true });
          if ($.truthy($.in_((await $.wv([$t8, $t9], "CrdStatus", { get: async () => L0["crdstatus"], set: async (v) => { L0["crdstatus"] = v; }, local: true }, false)), [0, 1]))) {
            {
              const $t12 = (await $.wv([$t8, $t9], "COBDatMod", C, false));
              const $t13 = (await $.wv([$t8, $t9, $t12], "CM_CALCINOUTBALANCE", C, false));
              await $.stmt((await $.wcall([$t8, $t9, $t12, $t13], "CallProcedure", ["CalcPrecents", [(await $.wv([$t8, $t9, $t12, $t13], "CrdID", { get: async () => L0["crdid"], set: async (v) => { L0["crdid"] = v; }, local: true }, false)), (await $.wv([$t8, $t9, $t12, $t13], "P_Date", { get: async () => L0["p_date"], set: async (v) => { L0["p_date"] = v; }, local: true }, false)), (await $.wv([$t8, $t9, $t12, $t13], "EndOfMonth", { get: async () => L0["endofmonth"], set: async (v) => { L0["endofmonth"] = v; }, local: true }, false))]], C)));
            }
            await $.stmt((await $.wcall([$t8, $t9], "LogInformation", [$.add((await $.wv([$t8, $t9], "CrdNo", { get: async () => L0["crdno"], set: async (v) => { L0["crdno"] = v; }, local: true }, false)), " - № li kredit üçün faizlər  hesablanıb olunub !")], C)));
          } else {
            await $.stmt((await $.wcall([$t8, $t9], "LogWarning", [(await $.wv([$t8, $t9], "CrdNo", { get: async () => L0["crdno"], set: async (v) => { L0["crdno"] = v; }, local: true }, false))], C)));
          }
          await $.mset((await $.mv((await $.wv([$t8, $t9], "ProgressForm", C, false)), "ProgressShower")), "Position", $.add((await $.wv([$t8, $t9], "I", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false)), 1));
          await $.tick();
        }
      }
      await $.mcall((await $.wv([$t8, $t9], "ProgressForm", C, false)), "Close", []);
    } else {
      await $.wset([$t8, $t9], "CrdID", (await $.mv((await $.wcall([$t8, $t9], "FieldByName", ["ID"], C)), "AsInteger")), { get: async () => L0["crdid"], set: async (v) => { L0["crdid"] = v; }, local: true });
      await $.wset([$t8, $t9], "CrdNo", (await $.mv((await $.wcall([$t8, $t9], "FieldByName", ["NumberOfCredit"], C)), "AsString")), { get: async () => L0["crdno"], set: async (v) => { L0["crdno"] = v; }, local: true });
      await $.wset([$t8, $t9], "CrdStatus", (await $.mv((await $.wcall([$t8, $t9], "FieldByName", ["TrProcessed"], C)), "AsInteger")), { get: async () => L0["crdstatus"], set: async (v) => { L0["crdstatus"] = v; }, local: true });
      if ($.truthy($.in_((await $.wv([$t8, $t9], "CrdStatus", { get: async () => L0["crdstatus"], set: async (v) => { L0["crdstatus"] = v; }, local: true }, false)), [0, 1]))) {
        {
          const $t14 = (await $.wv([$t8, $t9], "COBDatMod", C, false));
          const $t15 = (await $.wv([$t8, $t9, $t14], "CM_CALCINOUTBALANCE", C, false));
          await $.stmt((await $.wcall([$t8, $t9, $t14, $t15], "CallProcedure", ["CalcPrecents", [(await $.wv([$t8, $t9, $t14, $t15], "CrdID", { get: async () => L0["crdid"], set: async (v) => { L0["crdid"] = v; }, local: true }, false)), (await $.wv([$t8, $t9, $t14, $t15], "P_Date", { get: async () => L0["p_date"], set: async (v) => { L0["p_date"] = v; }, local: true }, false)), (await $.wv([$t8, $t9, $t14, $t15], "EndOfMonth", { get: async () => L0["endofmonth"], set: async (v) => { L0["endofmonth"] = v; }, local: true }, false))]], C)));
        }
        await $.stmt((await $.wcall([$t8, $t9], "LogInformation", [$.add((await $.wv([$t8, $t9], "CrdNo", { get: async () => L0["crdno"], set: async (v) => { L0["crdno"] = v; }, local: true }, false)), " - № li kredit üçün faizlər  hesablanıb !")], C)));
      } else {
        await $.stmt((await $.wcall([$t8, $t9], "LogWarning", [$.add((await $.wv([$t8, $t9], "CrdNo", { get: async () => L0["crdno"], set: async (v) => { L0["crdno"] = v; }, local: true }, false)), " - № li kredit üçün faizlər artıq hesablanıb !")], C)));
      }
    }
  }
  await $.stmt((await $.call(C, "SafelyRefresh", [false])));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TCOBMainForm", "ActnAcceptIntExecute", async function ActnAcceptIntExecute(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "i": 0, "selectedrowscnt": 0, "crdid": 0, "crdno": '', "crdstatus": 0};
  await $.fixArgs(L0, ["sender"]);
  L0["rsacceptcalced"] = "Faizlər təsdiq olunur əminsinizmi?";
  L0["rsprogresscaption"] = "                Hesablanmış Faizlər təsdiq olunur. gözləyin.   .....";
  {
    const $t16 = (await $.wobj(C, "COBGrid"));
    const $t17 = (await $.mv((await $.wv([$t16], "DataSource", C, false)), "DataSet"));
    await $.wset([$t16, $t17], "SelectedRowsCnt", (await $.mv((await $.wv([$t16, $t17], "SelectedRows", C, false)), "Count")), { get: async () => L0["selectedrowscnt"], set: async (v) => { L0["selectedrowscnt"] = v; }, local: true });
    if ($.truthy($.gt((await $.wv([$t16, $t17], "SelectedRowsCnt", { get: async () => L0["selectedrowscnt"], set: async (v) => { L0["selectedrowscnt"] = v; }, local: true }, false)), 1))) {
      if ($.truthy($.eq($.not((await $.wcall([$t16, $t17], "MessageDlg", [(await $.wv([$t16, $t17], "rsAcceptCalced", { get: async () => L0["rsacceptcalced"], set: async (v) => { L0["rsacceptcalced"] = v; }, local: true }, false)), (await $.wv([$t16, $t17], "mtConfirmation", C, false)), [(await $.wv([$t16, $t17], "mbYes", C, false)), (await $.wv([$t16, $t17], "mbNo", C, false))], 0], C))), (await $.wv([$t16, $t17], "mrYes", C, false))))) {
        return L0.result;
      }
      await $.stmt((await $.wcall([$t16, $t17], "PrepareProgress", [(await $.wv([$t16, $t17], "SelectedRowsCnt", { get: async () => L0["selectedrowscnt"], set: async (v) => { L0["selectedrowscnt"] = v; }, local: true }, false)), (await $.wv([$t16, $t17], "rsProgressCaption", { get: async () => L0["rsprogresscaption"], set: async (v) => { L0["rsprogresscaption"] = v; }, local: true }, false))], C)));
      { const $t18 = $.sub((await $.wv([$t16, $t17], "SelectedRowsCnt", { get: async () => L0["selectedrowscnt"], set: async (v) => { L0["selectedrowscnt"] = v; }, local: true }, false)), 1);
        await $.wset([$t16, $t17], "I", 0, { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true });
        let $t19 = true;
        for (;;) {
          if (!$t19) { await $.wset([$t16, $t17], "I", $.succ((await $.wv([$t16, $t17], "I", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false)), 1), { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }); }
          $t19 = false;
          if (!($.ord((await $.wv([$t16, $t17], "I", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false))) <= $.ord($t18))) break;
          await $.stmt((await $.wcall([$t16, $t17], "GotoBookmark", [(await $.wcall([$t16, $t17], "Pointer", [(await $.idx((await $.wv([$t16, $t17], "SelectedRows", C, false)), [(await $.wv([$t16, $t17], "I", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false))]))], C))], C)));
          await $.wset([$t16, $t17], "CrdID", (await $.mv((await $.wcall([$t16, $t17], "FieldByName", ["ID"], C)), "AsInteger")), { get: async () => L0["crdid"], set: async (v) => { L0["crdid"] = v; }, local: true });
          await $.wset([$t16, $t17], "CrdNo", (await $.mv((await $.wcall([$t16, $t17], "FieldByName", ["NumberOfCredit"], C)), "AsString")), { get: async () => L0["crdno"], set: async (v) => { L0["crdno"] = v; }, local: true });
          await $.wset([$t16, $t17], "CrdStatus", (await $.mv((await $.wcall([$t16, $t17], "FieldByName", ["TrProcessed"], C)), "AsInteger")), { get: async () => L0["crdstatus"], set: async (v) => { L0["crdstatus"] = v; }, local: true });
          if ($.truthy($.in_((await $.wv([$t16, $t17], "CrdStatus", { get: async () => L0["crdstatus"], set: async (v) => { L0["crdstatus"] = v; }, local: true }, false)), [0, 1]))) {
            {
              const $t20 = (await $.wv([$t16, $t17], "COBDatMod", C, false));
              const $t21 = (await $.wv([$t16, $t17, $t20], "CM_CALCINOUTBALANCE", C, false));
              await $.stmt((await $.wcall([$t16, $t17, $t20, $t21], "CallProcedure", ["AcceptCalcedPrecentInOB", [(await $.wv([$t16, $t17, $t20, $t21], "CrdID", { get: async () => L0["crdid"], set: async (v) => { L0["crdid"] = v; }, local: true }, false))]], C)));
            }
            await $.stmt((await $.wcall([$t16, $t17], "LogInformation", [$.add((await $.wv([$t16, $t17], "CrdNo", { get: async () => L0["crdno"], set: async (v) => { L0["crdno"] = v; }, local: true }, false)), " - № li kredit üçün faizlər  təsdiq olunub !")], C)));
          } else {
            await $.stmt((await $.wcall([$t16, $t17], "LogWarning", [(await $.wv([$t16, $t17], "CrdNo", { get: async () => L0["crdno"], set: async (v) => { L0["crdno"] = v; }, local: true }, false))], C)));
          }
          await $.mset((await $.mv((await $.wv([$t16, $t17], "ProgressForm", C, false)), "ProgressShower")), "Position", $.add((await $.wv([$t16, $t17], "I", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false)), 1));
          await $.tick();
        }
      }
      await $.mcall((await $.wv([$t16, $t17], "ProgressForm", C, false)), "Close", []);
    } else {
      await $.wset([$t16, $t17], "CrdID", (await $.mv((await $.wcall([$t16, $t17], "FieldByName", ["ID"], C)), "AsInteger")), { get: async () => L0["crdid"], set: async (v) => { L0["crdid"] = v; }, local: true });
      await $.wset([$t16, $t17], "CrdNo", (await $.mv((await $.wcall([$t16, $t17], "FieldByName", ["NumberOfCredit"], C)), "AsString")), { get: async () => L0["crdno"], set: async (v) => { L0["crdno"] = v; }, local: true });
      await $.wset([$t16, $t17], "CrdStatus", (await $.mv((await $.wcall([$t16, $t17], "FieldByName", ["TrProcessed"], C)), "AsInteger")), { get: async () => L0["crdstatus"], set: async (v) => { L0["crdstatus"] = v; }, local: true });
      if ($.truthy($.in_((await $.wv([$t16, $t17], "CrdStatus", { get: async () => L0["crdstatus"], set: async (v) => { L0["crdstatus"] = v; }, local: true }, false)), [0, 1]))) {
        {
          const $t22 = (await $.wv([$t16, $t17], "COBDatMod", C, false));
          const $t23 = (await $.wv([$t16, $t17, $t22], "CM_CALCINOUTBALANCE", C, false));
          await $.stmt((await $.wcall([$t16, $t17, $t22, $t23], "CallProcedure", ["AcceptCalcedPrecentInOB", [(await $.wv([$t16, $t17, $t22, $t23], "CrdID", { get: async () => L0["crdid"], set: async (v) => { L0["crdid"] = v; }, local: true }, false))]], C)));
        }
        await $.stmt((await $.wcall([$t16, $t17], "LogInformation", [$.add((await $.wv([$t16, $t17], "CrdNo", { get: async () => L0["crdno"], set: async (v) => { L0["crdno"] = v; }, local: true }, false)), " - № li kredit üçün faizlər  təsdiq olunub !")], C)));
      } else {
        await $.stmt((await $.wcall([$t16, $t17], "LogWarning", [(await $.wv([$t16, $t17], "CrdNo", { get: async () => L0["crdno"], set: async (v) => { L0["crdno"] = v; }, local: true }, false))], C)));
      }
    }
  }
  await $.stmt((await $.call(C, "SafelyRefresh", [false])));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TCOBMainForm", "ActnCancelIntExecute", async function ActnCancelIntExecute(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "i": 0, "selectedrowscnt": 0, "crdid": 0, "crdno": '', "crdstatus": 0};
  await $.fixArgs(L0, ["sender"]);
  L0["rsacceptcalced"] = " hesablanır faizlər inkar olunur əminsinizmi?";
  {
    const $t24 = (await $.wobj(C, "COBGrid"));
    const $t25 = (await $.mv((await $.wv([$t24], "DataSource", C, false)), "DataSet"));
    await $.wset([$t24, $t25], "SelectedRowsCnt", (await $.mv((await $.wv([$t24, $t25], "SelectedRows", C, false)), "Count")), { get: async () => L0["selectedrowscnt"], set: async (v) => { L0["selectedrowscnt"] = v; }, local: true });
    if ($.truthy($.eq($.not((await $.wcall([$t24, $t25], "MessageDlg", [(await $.wv([$t24, $t25], "rsAcceptCalced", { get: async () => L0["rsacceptcalced"], set: async (v) => { L0["rsacceptcalced"] = v; }, local: true }, false)), (await $.wv([$t24, $t25], "mtConfirmation", C, false)), [(await $.wv([$t24, $t25], "mbYes", C, false)), (await $.wv([$t24, $t25], "mbNo", C, false))], 0], C))), (await $.wv([$t24, $t25], "mrYes", C, false))))) {
      return L0.result;
    }
    { const $t26 = $.sub((await $.wv([$t24, $t25], "SelectedRowsCnt", { get: async () => L0["selectedrowscnt"], set: async (v) => { L0["selectedrowscnt"] = v; }, local: true }, false)), 1);
      await $.wset([$t24, $t25], "I", 0, { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true });
      let $t27 = true;
      for (;;) {
        if (!$t27) { await $.wset([$t24, $t25], "I", $.succ((await $.wv([$t24, $t25], "I", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false)), 1), { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }); }
        $t27 = false;
        if (!($.ord((await $.wv([$t24, $t25], "I", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false))) <= $.ord($t26))) break;
        await $.stmt((await $.wcall([$t24, $t25], "GotoBookmark", [(await $.wcall([$t24, $t25], "Pointer", [(await $.idx((await $.wv([$t24, $t25], "SelectedRows", C, false)), [(await $.wv([$t24, $t25], "I", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false))]))], C))], C)));
        await $.wset([$t24, $t25], "CrdID", (await $.mv((await $.wcall([$t24, $t25], "FieldByName", ["ID"], C)), "AsInteger")), { get: async () => L0["crdid"], set: async (v) => { L0["crdid"] = v; }, local: true });
        await $.wset([$t24, $t25], "CrdNo", (await $.mv((await $.wcall([$t24, $t25], "FieldByName", ["NumberOfCredit"], C)), "AsString")), { get: async () => L0["crdno"], set: async (v) => { L0["crdno"] = v; }, local: true });
        await $.wset([$t24, $t25], "CrdStatus", (await $.mv((await $.wcall([$t24, $t25], "FieldByName", ["TrProcessed"], C)), "AsInteger")), { get: async () => L0["crdstatus"], set: async (v) => { L0["crdstatus"] = v; }, local: true });
        if ($.truthy($.in_((await $.wv([$t24, $t25], "CrdStatus", { get: async () => L0["crdstatus"], set: async (v) => { L0["crdstatus"] = v; }, local: true }, false)), [0, 1]))) {
          {
            const $t28 = (await $.wv([$t24, $t25], "COBDatMod", C, false));
            const $t29 = (await $.wv([$t24, $t25, $t28], "CM_CALCINOUTBALANCE", C, false));
            await $.stmt((await $.wcall([$t24, $t25, $t28, $t29], "CallProcedure", ["CancelCalculation", [(await $.wv([$t24, $t25, $t28, $t29], "CrdID", { get: async () => L0["crdid"], set: async (v) => { L0["crdid"] = v; }, local: true }, false))]], C)));
          }
          await $.stmt((await $.wcall([$t24, $t25], "LogInformation", [$.add((await $.wv([$t24, $t25], "CrdNo", { get: async () => L0["crdno"], set: async (v) => { L0["crdno"] = v; }, local: true }, false)), " - № li kredit üçün faizlər  inkar olunurb !")], C)));
        } else {
          await $.stmt((await $.wcall([$t24, $t25], "LogWarning", [(await $.wv([$t24, $t25], "CrdNo", { get: async () => L0["crdno"], set: async (v) => { L0["crdno"] = v; }, local: true }, false))], C)));
        }
        await $.tick();
      }
    }
  }
  await $.stmt((await $.call(C, "SafelyRefresh", [false])));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TCOBMainForm", "ActnExcelImpExecute", async function ActnExcelImpExecute(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t30 = (await $.wobj(C, "ExcelExport"));
    await $.stmt($.wcall([$t30], "Connect", [], C));
    await $.stmt((await $.wcall([$t30], "ExportDataset", [(await $.mv((await $.mv((await $.wv([$t30], "COBGrid", C, false)), "DataSource")), "DataSet")), "Interests", (await $.wv([$t30], "True", C, false))], C)));
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TCOBMainForm", "COBGridColumnMoved", async function COBGridColumnMoved(Self, p0, p1, p2) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "fromindex": $.copyArg(p1), "toindex": $.copyArg(p2), result: undefined};
  await $.fixArgs(L0, ["sender", "fromindex", "toindex"]);
  L0["findspecialrowindex"] = $.fn(async function FindSpecialRowIndex() {
  const L1 = {result: 0};
  L1["result"] = 0;
  {
    const $t31 = L0["sender"];
    while ($.truthy((await $.and_(($.lt((await $.wv([$t31], "Result", { get: async () => L1["result"], set: async (v) => { L1["result"] = v; }, local: true }, false)), (await $.mv((await $.wv([$t31], "Columns", C, false)), "Count")))), async () => ($.ne((await $.mv((await $.idx((await $.wv([$t31], "Columns", C, false)), [(await $.wv([$t31], "Result", { get: async () => L1["result"], set: async (v) => { L1["result"] = v; }, local: true }, false))])), "Tag")), 1)))))) {
      await $.stmt((await $.wcall([$t31], "Inc", [$.ref(async () => (await $.wv([$t31], "Result", { get: async () => L1["result"], set: async (v) => { L1["result"] = v; }, local: true }, false)), async ($t32) => { await $.wset([$t31], "Result", $t32, { get: async () => L1["result"], set: async (v) => { L1["result"] = v; }, local: true }); })], C)));
      await $.tick();
    }
  }
  return L1.result;
});
  await $.set(C, "DataColIndex", (await $.callv(L0["findspecialrowindex"], [])));
  return L0.result;
}, {"params": ["Sender", "FromIndex", "ToIndex"], "kind": "procedure", "ptypes": ["TObject", "Integer", "Integer"]});
  U.method("TCOBMainForm", "COBGridDrawColumnCell", async function COBGridDrawColumnCell(Self, p0, p1, p2, p3, p4) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "rect": $.copyArg(p1), "datacol": $.copyArg(p2), "column": $.copyArg(p3), "state": $.copyArg(p4), result: undefined, "imageindex": 0};
  await $.fixArgs(L0, ["sender", "rect", "datacol", "column", "state"]);
  {
    const $t33 = L0["sender"];
    if ($.truthy($.gt((await $.mv((await $.mv((await $.wv([$t33], "DataSource", C, false)), "DataSet")), "RecordCount")), 0))) {
      await $.wset([$t33], "ImageIndex", (await $.mv((await $.mcall((await $.mv((await $.wv([$t33], "DataSource", C, false)), "DataSet")), "FieldByName", ["TrProcessed"])), "AsInteger")), { get: async () => L0["imageindex"], set: async (v) => { L0["imageindex"] = v; }, local: true });
      if ($.truthy(($.eq((await $.wv([$t33], "DataCol", { get: async () => L0["datacol"], set: async (v) => { L0["datacol"] = v; }, local: true }, false)), (await $.wv([$t33], "DataColIndex", C, false)))))) {
        await $.stmt((await $.mcall((await $.wv([$t33], "ImageList1", C, false)), "Draw", [(await $.wv([$t33], "Canvas", C, false)), (await $.mv((await $.wv([$t33], "Rect", { get: async () => L0["rect"], set: async (v) => { L0["rect"] = v; }, local: true }, false)), "Left")), (await $.mv((await $.wv([$t33], "Rect", { get: async () => L0["rect"], set: async (v) => { L0["rect"] = v; }, local: true }, false)), "Top")), (await $.wv([$t33], "ImageIndex", { get: async () => L0["imageindex"], set: async (v) => { L0["imageindex"] = v; }, local: true }, false)), (await $.wv([$t33], "True", C, false))])));
      } else {
        await $.stmt((await $.wcall([$t33], "DefaultDrawColumnCell", [(await $.wv([$t33], "Rect", { get: async () => L0["rect"], set: async (v) => { L0["rect"] = v; }, local: true }, false)), (await $.wv([$t33], "DataCol", { get: async () => L0["datacol"], set: async (v) => { L0["datacol"] = v; }, local: true }, false)), (await $.wv([$t33], "Column", { get: async () => L0["column"], set: async (v) => { L0["column"] = v; }, local: true }, false)), (await $.wv([$t33], "State", { get: async () => L0["state"], set: async (v) => { L0["state"] = v; }, local: true }, false))], C)));
      }
    }
  }
  return L0.result;
}, {"params": ["Sender", "Rect", "DataCol", "Column", "State"], "kind": "procedure", "ptypes": ["TObject", "TRect", "Integer", "TColumnEh", "TGridDrawState"]});
  U.method("TCOBMainForm", "ActnCloseExecute", async function ActnCloseExecute(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.stmt($.call(C, "Close", []));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TCOBMainForm", "EditNUMBEROFCREDITKeyPress", async function EditNUMBEROFCREDITKeyPress(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "key": $.asRef(p1), result: undefined, "fieldtosearch": '', "searchvalue": ''};
  await $.fixArgs(L0, ["sender"]);
  L0["rsnothingtosearch"] = "Axtarılmalı olanı daxil edin!";
  if ($.truthy($.eq((await $.call(C, "ORD", [(await L0["key"].get())])), (await $.v(C, "VK_RETURN"))))) {
    await $.mcall((await $.mv((await $.v(C, "COBGrid")), "SelectedRows")), "Clear", []);
    L0["fieldtosearch"] = (await $.call(C, "Copy", [(await $.mv((L0["sender"]), "Name")), 5, (await $.call(C, "Length", [(await $.mv((L0["sender"]), "Name"))]))]));
    L0["searchvalue"] = (await $.mv((L0["sender"]), "Text"));
    if ($.truthy($.eq(L0["searchvalue"], ""))) {
      throw $.raise((await $.mcall((await $.v(C, "ESearchError")), "Create", [L0["rsnothingtosearch"]])));
    }
    await $.stmt((await $.call(C, "FindNextRecord", [(await $.mv((await $.mv((await $.v(C, "COBGrid")), "DataSource")), "DataSet")), L0["fieldtosearch"], L0["searchvalue"]])));
    await L0["key"].set("\u0000");
  }
  return L0.result;
}, {"params": ["Sender", "Key"], "kind": "procedure", "ptypes": ["TObject", "Char"]});
  U.method("TCOBMainForm", "EditNUMBEROFCREDITExit", async function EditNUMBEROFCREDITExit(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mset(L0["sender"], "Text", "");
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TCOBMainForm", "EditCONTRACTACCNOKeyPress", async function EditCONTRACTACCNOKeyPress(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "key": $.asRef(p1), result: undefined, "fieldtosearch": '', "searchvalue": ''};
  await $.fixArgs(L0, ["sender"]);
  L0["rsnothingtosearch"] = "Axtarılmalı olanı daxil edin!";
  if ($.truthy($.eq((await $.call(C, "ORD", [(await L0["key"].get())])), (await $.v(C, "VK_RETURN"))))) {
    await $.mcall((await $.mv((await $.v(C, "COBGrid")), "SelectedRows")), "Clear", []);
    L0["fieldtosearch"] = (await $.call(C, "Copy", [(await $.mv((L0["sender"]), "Name")), 5, (await $.call(C, "Length", [(await $.mv((L0["sender"]), "Name"))]))]));
    L0["searchvalue"] = (await $.mv((L0["sender"]), "Text"));
    if ($.truthy($.eq(L0["searchvalue"], ""))) {
      throw $.raise((await $.mcall((await $.v(C, "ESearchError")), "Create", [L0["rsnothingtosearch"]])));
    }
    await $.stmt((await $.call(C, "FindNextRecord", [(await $.mv((await $.mv((await $.v(C, "COBGrid")), "DataSource")), "DataSet")), L0["fieldtosearch"], L0["searchvalue"]])));
    await L0["key"].set("\u0000");
  }
  return L0.result;
}, {"params": ["Sender", "Key"], "kind": "procedure", "ptypes": ["TObject", "Char"]});
  U.method("TCOBMainForm", "EditVAL_NAMEKeyPress", async function EditVAL_NAMEKeyPress(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "key": $.asRef(p1), result: undefined, "fieldtosearch": '', "searchvalue": ''};
  await $.fixArgs(L0, ["sender"]);
  L0["rsnothingtosearch"] = "Axtarılmalı olanı daxil edin!";
  if ($.truthy($.eq((await $.call(C, "ORD", [(await L0["key"].get())])), (await $.v(C, "VK_RETURN"))))) {
    await $.mcall((await $.mv((await $.v(C, "COBGrid")), "SelectedRows")), "Clear", []);
    L0["fieldtosearch"] = (await $.call(C, "Copy", [(await $.mv((L0["sender"]), "Name")), 5, (await $.call(C, "Length", [(await $.mv((L0["sender"]), "Name"))]))]));
    L0["searchvalue"] = (await $.mv((L0["sender"]), "Text"));
    if ($.truthy($.eq(L0["searchvalue"], ""))) {
      throw $.raise((await $.mcall((await $.v(C, "ESearchError")), "Create", [L0["rsnothingtosearch"]])));
    }
    await $.stmt((await $.call(C, "FindNextRecord", [(await $.mv((await $.mv((await $.v(C, "COBGrid")), "DataSource")), "DataSet")), L0["fieldtosearch"], L0["searchvalue"]])));
    await L0["key"].set("\u0000");
  }
  return L0.result;
}, {"params": ["Sender", "Key"], "kind": "procedure", "ptypes": ["TObject", "Char"]});
  U.method("TCOBMainForm", "EditNAMEKeyPress", async function EditNAMEKeyPress(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "key": $.asRef(p1), result: undefined, "fieldtosearch": '', "searchvalue": ''};
  await $.fixArgs(L0, ["sender"]);
  L0["rsnothingtosearch"] = "Axtarılmalı olanı daxil edin!";
  if ($.truthy($.eq((await $.call(C, "ORD", [(await L0["key"].get())])), (await $.v(C, "VK_RETURN"))))) {
    await $.mcall((await $.mv((await $.v(C, "COBGrid")), "SelectedRows")), "Clear", []);
    L0["fieldtosearch"] = (await $.call(C, "Copy", [(await $.mv((L0["sender"]), "Name")), 5, (await $.call(C, "Length", [(await $.mv((L0["sender"]), "Name"))]))]));
    L0["searchvalue"] = (await $.mv((L0["sender"]), "Text"));
    if ($.truthy($.eq(L0["searchvalue"], ""))) {
      throw $.raise((await $.mcall((await $.v(C, "ESearchError")), "Create", [L0["rsnothingtosearch"]])));
    }
    await $.stmt((await $.call(C, "FindNextRecord", [(await $.mv((await $.mv((await $.v(C, "COBGrid")), "DataSource")), "DataSet")), L0["fieldtosearch"], L0["searchvalue"]])));
    await L0["key"].set("\u0000");
  }
  return L0.result;
}, {"params": ["Sender", "Key"], "kind": "procedure", "ptypes": ["TObject", "Char"]});
  U.method("TCOBMainForm", "EditNAMEExit", async function EditNAMEExit(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mset(L0["sender"], "Text", "");
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TCOBMainForm", "EditVAL_NAMEExit", async function EditVAL_NAMEExit(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mset(L0["sender"], "Text", "");
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TCOBMainForm", "EditCONTRACTACCNOExit", async function EditCONTRACTACCNOExit(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mset(L0["sender"], "Text", "");
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TCOBMainForm", "ToolButton10Click", async function ToolButton10Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mcall((await $.mv((await $.v(C, "COBDatMod")), "INTCACHEDatSet")), "Refresh", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.setInitialization(async function __initialization(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: undefined};
  await $.set(C, "COBMainForm", (await $.mcall((await $.v(C, "TCOBMainForm")), "Create", [(await $.v(C, "CommonApplication"))])));
  return L0.result;
});
  return U;
}
