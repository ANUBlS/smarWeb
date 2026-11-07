// Generated from repScheduleMainFormImpl.pas by pas2js — do not edit by hand; regenerate instead.
/* eslint-disable */
// @ts-nocheck

export default function define($) {
  const U = $.unit("repScheduleMainFormImpl", ["Windows", "Messages", "SysUtils", "Classes", "Graphics", "Controls", "Forms", "NLSDialogs", "NLSLocalizer", "Grids", "DBGrids", "ExtCtrls", "StdCtrls", "Mask", "DBCtrls", "ToolWin", "ComCtrls", "ImgList", "ActnList", "DBGridEh", "DBCtrlsEh", "CMCurrencyEdit", "Buttons", "DB", "CMExcelExport", "DBLookupEh", "repScheduleDataModuleImpl", "CommonDecls", "SystemState", "repSheduleAddUnt", "repAnnutyPaymentFormImpl", "repfrmReportTypeImpl", "repReportImpl", "repChangeScheduleImpl"]);
  const C = [U];
  U.defClass("TScheduleForm", "TForm", {"localizer": {"name": "Localizer", "type": "TNLSLocalizer"}, "toolbarimages": {"name": "ToolBarImages", "type": "TImageList"}, "scheludeactionlist": {"name": "ScheludeActionList", "type": "TActionList"}, "actionsave": {"name": "ActionSave", "type": "TAction"}, "actionprint": {"name": "ActionPrint", "type": "TAction"}, "actionclose": {"name": "ActionClose", "type": "TAction"}, "groupbox1": {"name": "GroupBox1", "type": "TGroupBox"}, "groupbox2": {"name": "GroupBox2", "type": "TGroupBox"}, "label1": {"name": "Label1", "type": "TLabel"}, "label2": {"name": "Label2", "type": "TLabel"}, "label3": {"name": "Label3", "type": "TLabel"}, "label7": {"name": "Label7", "type": "TLabel"}, "dbedit1": {"name": "DBEdit1", "type": "TDBEdit"}, "dbedit2": {"name": "DBEdit2", "type": "TDBEdit"}, "dbedit3": {"name": "DBEdit3", "type": "TDBEdit"}, "dbedit4": {"name": "DBEdit4", "type": "TDBEdit"}, "toolbar1": {"name": "ToolBar1", "type": "TToolBar"}, "toolbutton1": {"name": "ToolButton1", "type": "TToolButton"}, "toolbutton2": {"name": "ToolButton2", "type": "TToolButton"}, "toolbutton4": {"name": "ToolButton4", "type": "TToolButton"}, "toolbutton5": {"name": "ToolButton5", "type": "TToolButton"}, "toolbutton6": {"name": "ToolButton6", "type": "TToolButton"}, "toolbutton7": {"name": "ToolButton7", "type": "TToolButton"}, "toolbutton9": {"name": "ToolButton9", "type": "TToolButton"}, "schdulegrid": {"name": "SchduleGrid", "type": "TDBGridEh"}, "toolbutton8": {"name": "ToolButton8", "type": "TToolButton"}, "toolbar2": {"name": "ToolBar2", "type": "TToolBar"}, "toolbutton11": {"name": "ToolButton11", "type": "TToolButton"}, "toolbutton14": {"name": "ToolButton14", "type": "TToolButton"}, "toolbutton15": {"name": "ToolButton15", "type": "TToolButton"}, "toolbutton16": {"name": "ToolButton16", "type": "TToolButton"}, "toolbutton17": {"name": "ToolButton17", "type": "TToolButton"}, "dbedit5": {"name": "DBEdit5", "type": "TDBEdit"}, "actionadd": {"name": "ActionAdd", "type": "TAction"}, "actionedit": {"name": "ActionEdit", "type": "TAction"}, "actiondelete": {"name": "ActionDelete", "type": "TAction"}, "actionrefresh": {"name": "ActionRefresh", "type": "TAction"}, "actionannuty": {"name": "ActionAnnuty", "type": "TAction"}, "excelexport": {"name": "ExcelExport", "type": "TCMExcelExport"}, "toolbutton19": {"name": "ToolButton19", "type": "TToolButton"}, "actionchange": {"name": "ActionChange", "type": "TAction"}, "actionpr": {"name": "ActionPr", "type": "TAction"}, "lcbbooroweraccno": {"name": "LCBBooroweraccno", "type": "TDBLookupComboboxEh"}, "dbediteh1": {"name": "DBEditEh1", "type": "TDBEditEh"}, "label4": {"name": "Label4", "type": "TLabel"}, "edpayamt": {"name": "edPayamt", "type": "TEdit"}}, {});
  U.init(async () => {
    U.var_("ScheduleForm", null, "TScheduleForm");
    U.var_("CreditID", 0, "Integer");
  });
  U.method("TScheduleForm", "ShowPaymentSchedule", async function ShowPaymentSchedule(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: undefined};
  L0["rsscheludecaption"] = "%s № li müqavilə üçün ödəmə planın dəyişilməsi.";
  await $.set(C, "ScheduleDataModule", (await $.mcall((await $.v(C, "TScheduleDataModule")), "Create", [Self])));
  await $.set(C, "frmReportType", (await $.mcall((await $.v(C, "TfrmReportType")), "Create", [Self])));
  await $.set(C, "ReportForm", (await $.mcall((await $.v(C, "TReportForm")), "create", [Self])));
  await $.set(C, "AddEditForm", (await $.mcall((await $.v(C, "TAddEditForm")), "Create", [Self])));
  await $.set(C, "AnnutyForm", (await $.mcall((await $.v(C, "TAnnutyForm")), "Create", [Self])));
  await $.set(C, "FrmChangeSchedule", (await $.mcall((await $.v(C, "TFrmChangeSchedule")), "Create", [Self])));
  await $.mset((await $.v(C, "Localizer")), "Caption", (await $.call(C, "Format", [L0["rsscheludecaption"], [(await $.v(C, "Get_SelectedCrdNo"))]])));
  await $.set(C, "CreditID", (await $.v(C, "Get_SelectedCrdID")));
  {
    const $t1 = (await $.wobj(C, "ScheduleDataModule"));
    {
      const $t2 = (await $.wv([$t1], "CM_SCHEDULE", C, false));
      await $.stmt((await $.wcall([$t1, $t2], "CallProcedure", ["inspaymentschedule", ["p_creditid", (await $.wv([$t1, $t2], "CreditID", C, false))]], C)));
    }
    {
      const $t3 = (await $.wv([$t1], "ScheduleData", C, false));
      await $.stmt($.wcall([$t1, $t3], "ClearVariables", [], C));
      await $.stmt((await $.wcall([$t1, $t3], "SetVariable", ["CreditID", (await $.wv([$t1, $t3], "CreditID", C, false))], C)));
      await $.stmt($.wcall([$t1, $t3], "Open", [], C));
    }
    {
      const $t4 = (await $.wv([$t1], "BoorowerInfo", C, false));
      await $.stmt($.wcall([$t1, $t4], "ClearVariables", [], C));
      await $.stmt((await $.wcall([$t1, $t4], "SetVariable", ["CreditID", (await $.wv([$t1, $t4], "CreditID", C, false))], C)));
      await $.stmt($.wcall([$t1, $t4], "Open", [], C));
    }
    {
      const $t5 = (await $.wv([$t1], "CreditInfo", C, false));
      await $.stmt($.wcall([$t1, $t5], "ClearVariables", [], C));
      await $.stmt((await $.wcall([$t1, $t5], "SetVariable", ["ID", (await $.wv([$t1, $t5], "CreditID", C, false))], C)));
      await $.stmt($.wcall([$t1, $t5], "Open", [], C));
    }
    await $.mcall((await $.wv([$t1], "BankInfo", C, false)), "open", []);
  }
  await $.stmt($.call(C, "ShowModal", []));
  return L0.result;
}, {"params": [], "kind": "procedure", "ptypes": []});
  U.method("TScheduleForm", "FormDestroy", async function FormDestroy(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mcall((await $.v(C, "ScheduleDataModule")), "Free", []);
  await $.mcall((await $.v(C, "frmReportType")), "Free", []);
  await $.mcall((await $.v(C, "FrmChangeSchedule")), "Free", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TScheduleForm", "FormClose", async function FormClose(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "action": $.asRef(p1), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t6 = (await $.wobj(C, "ScheduleDataModule"));
    {
      const $t7 = (await $.mv((await $.wv([$t6], "ScheduleData", C, false)), "Session"));
      await $.stmt($.wcall([$t6, $t7], "Rollback", [], C));
    }
    await $.mcall((await $.wv([$t6], "ScheduleData", C, false)), "CloseAll", []);
    await $.mcall((await $.wv([$t6], "CreditInfo", C, false)), "CloseAll", []);
    await $.mcall((await $.wv([$t6], "BoorowerInfo", C, false)), "CloseAll", []);
  }
  return L0.result;
}, {"params": ["Sender", "Action"], "kind": "procedure", "ptypes": ["TObject", "TCloseAction"]});
  U.method("TScheduleForm", "ActionCloseExecute", async function ActionCloseExecute(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.stmt($.call(C, "Close", []));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TScheduleForm", "ActionAddExecute", async function ActionAddExecute(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "saveplace": null};
  await $.fixArgs(L0, ["sender"]);
  L0["planeinsert"] = $.fn(async function PlaneInsert() {
  const L1 = {result: false};
  {
    const $t8 = (await $.mv((await $.v(C, "ScheduleDataModule")), "ScheduleData"));
    await $.stmt($.wcall([$t8], "Insert", [], C));
    await $.mset((await $.wcall([$t8], "FieldByName", ["CreditID"], C)), "AsInteger", (await $.wv([$t8], "CreditID", C, false)));
  }
  L1["result"] = $.eq((await $.mv((await $.v(C, "AddEditForm")), "ShowModal")), (await $.v(C, "mrOk")));
  return L1.result;
});
  L0["planeedit"] = $.fn(async function PlaneEdit() {
  const L1 = {result: false};
  {
    const $t9 = (await $.mv((await $.v(C, "ScheduleDataModule")), "ScheduleData"));
    await $.stmt($.wcall([$t9], "Edit", [], C));
  }
  L1["result"] = $.eq((await $.mv((await $.v(C, "AddEditForm")), "ShowModal")), (await $.v(C, "mrOk")));
  return L1.result;
});
  if ($.truthy($.eq((await $.mv((L0["sender"]), "Tag")), 1))) {
    {
      const $t10 = (await $.mv((await $.v(C, "ScheduleDataModule")), "ScheduleData"));
      if ($.truthy((await $.wv([$t10], "PlaneInsert", { get: async () => L0["planeinsert"], set: async (v) => { L0["planeinsert"] = v; }, local: true }, false)))) {
        await $.stmt($.wcall([$t10], "Post", [], C));
        await $.stmt((await $.mcall((await $.wv([$t10], "ScheduleForm", C, false)), "ActionSaveExecute", [(await $.wv([$t10], "Sender", { get: async () => L0["sender"], set: async (v) => { L0["sender"] = v; }, local: true }, false))])));
        await $.stmt($.wcall([$t10], "Refresh", [], C));
      }
    }
  } else {
    {
      const $t11 = (await $.mv((await $.v(C, "ScheduleDataModule")), "ScheduleData"));
      if ($.truthy((await $.wv([$t11], "PlaneEdit", { get: async () => L0["planeedit"], set: async (v) => { L0["planeedit"] = v; }, local: true }, false)))) {
        await $.stmt($.wcall([$t11], "Post", [], C));
        await $.stmt((await $.mcall((await $.wv([$t11], "ScheduleForm", C, false)), "ActionSaveExecute", [(await $.wv([$t11], "Sender", { get: async () => L0["sender"], set: async (v) => { L0["sender"] = v; }, local: true }, false))])));
        await $.stmt($.wcall([$t11], "Refresh", [], C));
      }
    }
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TScheduleForm", "ActionDeleteExecute", async function ActionDeleteExecute(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "i": 0};
  await $.fixArgs(L0, ["sender"]);
  L0["rs_delshedulepayments"] = " Silinməsinə əminsinizmi? ";
  if ($.truthy($.eq((await $.call(C, "MessageDlg", [L0["rs_delshedulepayments"], (await $.v(C, "mtConfirmation")), [(await $.v(C, "mbYes")), (await $.v(C, "mbNo"))], 0])), (await $.v(C, "mrNO"))))) {
    return L0.result;
  }
  {
    const $t12 = (await $.wobj(C, "SchduleGrid"));
    { const $t13 = 0;
      await $.wset([$t12], "I", $.sub((await $.mv((await $.wv([$t12], "SelectedRows", C, false)), "Count")), 1), { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true });
      let $t14 = true;
      for (;;) {
        if (!$t14) { await $.wset([$t12], "I", $.succ((await $.wv([$t12], "I", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false)), -1), { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }); }
        $t14 = false;
        if (!($.ord((await $.wv([$t12], "I", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false))) >= $.ord($t13))) break;
        await $.stmt((await $.mcall((await $.mv((await $.wv([$t12], "DataSource", C, false)), "DataSet")), "GotoBookmark", [(await $.wcall([$t12], "Pointer", [(await $.idx((await $.wv([$t12], "SelectedRows", C, false)), [(await $.wv([$t12], "I", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false))]))], C))])));
        await $.mcall((await $.mv((await $.wv([$t12], "DataSource", C, false)), "DataSet")), "Delete", []);
        await $.tick();
      }
    }
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TScheduleForm", "ActionRefreshExecute", async function ActionRefreshExecute(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t15 = (await $.mv((await $.v(C, "ScheduleDataModule")), "ScheduleData"));
    await $.stmt($.wcall([$t15], "Refresh", [], C));
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TScheduleForm", "ActionSaveExecute", async function ActionSaveExecute(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t16 = (await $.wobj(C, "ScheduleDataModule"));
    const $t17 = (await $.mv((await $.wv([$t16], "ScheduleData", C, false)), "Session"));
    await $.stmt((await $.wcall([$t16, $t17], "ApplyUpdates", [[(await $.wv([$t16, $t17], "ScheduleData", C, false))], (await $.wv([$t16, $t17], "True", C, false))], C)));
    await $.stmt($.wcall([$t16, $t17], "Commit", [], C));
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TScheduleForm", "ActionSaveUpdate", async function ActionSaveUpdate(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t18 = (await $.mv((await $.v(C, "ScheduleDataModule")), "ScheduleData"));
    await $.mset((await $.wv([$t18], "Sender", { get: async () => L0["sender"], set: async (v) => { L0["sender"] = v; }, local: true }, false)), "Enabled", (await $.and_((await $.wv([$t18], "Active", C, false)), async () => (await $.wv([$t18], "UpdatesPending", C, false)))));
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TScheduleForm", "ActionAnnutyExecute", async function ActionAnnutyExecute(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "payment": null, "annualyrate": 0, "creditid": 0, "startdate": 0, "savepoint": null};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t19 = (await $.mv((await $.v(C, "ScheduleDataModule")), "CreditInfo"));
    await $.wset([$t19], "AnnualyRate", (await $.mv((await $.wcall([$t19], "FieldByName", ["ANNUALYINTERESTRATE"], C)), "AsFloat")), { get: async () => L0["annualyrate"], set: async (v) => { L0["annualyrate"] = v; }, local: true });
    await $.wset([$t19], "StartDate", (await $.mv((await $.wcall([$t19], "FieldByName", ["DATEOFCONCLUSION"], C)), "AsDateTime")), { get: async () => L0["startdate"], set: async (v) => { L0["startdate"] = v; }, local: true });
    await $.wset([$t19], "CreditID", (await $.mv((await $.wcall([$t19], "FieldByName", ["ID"], C)), "AsInteger")), { get: async () => L0["creditid"], set: async (v) => { L0["creditid"] = v; }, local: true });
  }
  {
    const $t20 = (await $.wobj(C, "AnnutyForm"));
    if ($.truthy($.not((await $.wcall([$t20], "AnnutyPayment_Get", [$.ref(async () => (await $.wv([$t20], "Payment", { get: async () => L0["payment"], set: async (v) => { L0["payment"] = v; }, local: true }, false)), async ($t21) => { await $.wset([$t20], "Payment", $t21, { get: async () => L0["payment"], set: async (v) => { L0["payment"] = v; }, local: true }); })], C))))) {
      return L0.result;
    }
    {
      const $t22 = (await $.wv([$t20], "Payment", { get: async () => L0["payment"], set: async (v) => { L0["payment"] = v; }, local: true }, false));
      {
        const $t23 = (await $.mv((await $.wv([$t20, $t22], "ScheduleDataModule", C, false)), "CM_SCHEDULE"));
        if ($.truthy((await $.wv([$t20, $t22, $t23], "PaymentType", C, false)))) {
          await $.stmt((await $.wcall([$t20, $t22, $t23], "CallProcedure", ["InsertAnnutySchedule", ["p_CreditID", (await $.wv([$t20, $t22, $t23], "CreditID", { get: async () => L0["creditid"], set: async (v) => { L0["creditid"] = v; }, local: true }, false)), "p_Amount", (await $.wv([$t20, $t22, $t23], "Amount", C, false)), "p_Rate", (await $.wv([$t20, $t22, $t23], "AnnualyRate", { get: async () => L0["annualyrate"], set: async (v) => { L0["annualyrate"] = v; }, local: true }, false)), "p_FirstPayDate", (await $.wv([$t20, $t22, $t23], "FirstPayDate", C, false)), "p_StartDate", (await $.wv([$t20, $t22, $t23], "StartDate", { get: async () => L0["startdate"], set: async (v) => { L0["startdate"] = v; }, local: true }, false)), "p_Periods", (await $.wv([$t20, $t22, $t23], "NPeriods", C, false)), "p_PeriodRate", (await $.wv([$t20, $t22, $t23], "PeriodRate", C, false))]], C)));
        } else {
          await $.stmt((await $.wcall([$t20, $t22, $t23], "CallProcedure", ["InsertEqualSchedule", ["p_CreditID", (await $.wv([$t20, $t22, $t23], "CreditID", { get: async () => L0["creditid"], set: async (v) => { L0["creditid"] = v; }, local: true }, false)), "p_Amount", (await $.wv([$t20, $t22, $t23], "Amount", C, false)), "p_Rate", (await $.wv([$t20, $t22, $t23], "AnnualyRate", { get: async () => L0["annualyrate"], set: async (v) => { L0["annualyrate"] = v; }, local: true }, false)), "p_FirstPayDate", (await $.wv([$t20, $t22, $t23], "FirstPayDate", C, false)), "p_StartDate", (await $.wv([$t20, $t22, $t23], "StartDate", { get: async () => L0["startdate"], set: async (v) => { L0["startdate"] = v; }, local: true }, false)), "p_Periods", (await $.wv([$t20, $t22, $t23], "NPeriods", C, false)), "p_PeriodRate", (await $.wv([$t20, $t22, $t23], "PeriodRate", C, false))]], C)));
        }
      }
      {
        const $t24 = (await $.mv((await $.wv([$t20, $t22], "ScheduleDataModule", C, false)), "ScheduleData"));
        await $.wset([$t20, $t22, $t24], "SavePoint", (await $.wv([$t20, $t22, $t24], "GetBookmark", C, false)), { get: async () => L0["savepoint"], set: async (v) => { L0["savepoint"] = v; }, local: true });
        await $.stmt($.wcall([$t20, $t22, $t24], "Refresh", [], C));
        if ($.truthy((await $.wcall([$t20, $t22, $t24], "BookmarkValid", [(await $.wv([$t20, $t22, $t24], "SavePoint", { get: async () => L0["savepoint"], set: async (v) => { L0["savepoint"] = v; }, local: true }, false))], C)))) {
          await $.stmt((await $.wcall([$t20, $t22, $t24], "GotoBookmark", [(await $.wv([$t20, $t22, $t24], "SavePoint", { get: async () => L0["savepoint"], set: async (v) => { L0["savepoint"] = v; }, local: true }, false))], C)));
        }
        await $.stmt((await $.wcall([$t20, $t22, $t24], "FreeBookmark", [(await $.wv([$t20, $t22, $t24], "SavePoint", { get: async () => L0["savepoint"], set: async (v) => { L0["savepoint"] = v; }, local: true }, false))], C)));
        await $.stmt($.wcall([$t20, $t22, $t24], "Edit", [], C));
        await $.stmt($.wcall([$t20, $t22, $t24], "Post", [], C));
      }
    }
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TScheduleForm", "FormKeyPress", async function FormKeyPress(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "key": $.asRef(p1), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.eq((await $.call(C, "ORD", [(await L0["key"].get())])), (await $.v(C, "VK_ESCAPE"))))) {
    await $.stmt((await $.call(C, "ActionCloseExecute", [null])));
  }
  return L0.result;
}, {"params": ["Sender", "Key"], "kind": "procedure", "ptypes": ["TObject", "Char"]});
  U.method("TScheduleForm", "ActionPrintExecute", async function ActionPrintExecute(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t25 = (await $.wobj(C, "ScheduleDataModule"));
    const $t26 = (await $.wv([$t25], "ExportData", C, false));
    if ($.truthy((await $.wv([$t25, $t26], "Active", C, false)))) {
      await $.stmt($.wcall([$t25, $t26], "close", [], C));
    }
    await $.stmt((await $.wcall([$t25, $t26], "setvariable", ["Creditid", (await $.wv([$t25, $t26], "Get_SelectedCrdID", C, false))], C)));
    await $.stmt($.wcall([$t25, $t26], "open", [], C));
    {
      const $t27 = (await $.wv([$t25, $t26], "ExcelExport", C, false));
      await $.stmt($.wcall([$t25, $t26, $t27], "connect", [], C));
      await $.stmt((await $.wcall([$t25, $t26, $t27], "ExportDataset", [(await $.wv([$t25, $t26, $t27], "ExportData", C, false)), "Ödəmə planı", (await $.wv([$t25, $t26, $t27], "true", C, false))], C)));
    }
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TScheduleForm", "FormCanResize", async function FormCanResize(Self, p0, p1, p2, p3) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "newwidth": $.asRef(p1), "newheight": $.asRef(p2), "resize": $.asRef(p3), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await L0["resize"].set(false);
  return L0.result;
}, {"params": ["Sender", "NewWidth", "NewHeight", "Resize"], "kind": "procedure", "ptypes": ["TObject", "Integer", "Integer", "Boolean"]});
  U.method("TScheduleForm", "SchduleGridKeyPress", async function SchduleGridKeyPress(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "key": $.asRef(p1), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.eq((await $.call(C, "ord", [(await L0["key"].get())])), 1))) {
    {
      const $t28 = (await $.wobj(C, "SchduleGrid"));
      const $t29 = (await $.wv([$t28], "SelectedRows", C, false));
      const $t30 = (await $.mv((await $.wv([$t28, $t29], "DataSource", C, false)), "DataSet"));
      await $.stmt($.wcall([$t28, $t29, $t30], "DisableControls", [], C));
      try {
        await $.stmt($.wcall([$t28, $t29, $t30], "First", [], C));
        while ($.truthy($.not((await $.wv([$t28, $t29, $t30], "Eof", C, false))))) {
          await $.wset([$t28, $t29, $t30], "CurrentRowSelected", (await $.wv([$t28, $t29, $t30], "True", C, false)), C);
          await $.stmt($.wcall([$t28, $t29, $t30], "Next", [], C));
          await $.tick();
        }
      } finally {
        await $.stmt($.wcall([$t28, $t29, $t30], "EnableControls", [], C));
      }
    }
  }
  return L0.result;
}, {"params": ["Sender", "Key"], "kind": "procedure", "ptypes": ["TObject", "Char"]});
  U.method("TScheduleForm", "ActionChangeExecute", async function ActionChangeExecute(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "payamt": 0, "boorrest": 0};
  await $.fixArgs(L0, ["sender"]);
  L0["payamt"] = (await $.call(C, "StrToFloat", [(await $.mv((await $.v(C, "edPayamt")), "Text"))]));
  {
    const $t31 = (await $.wobj(C, "ScheduleDataModule"));
    const $t32 = (await $.wv([$t31], "BoorowerInfo", C, false));
    await $.wset([$t31, $t32], "BoorRest", (await $.mv((await $.wcall([$t31, $t32], "FieldByName", ["BOOROWERACCREST"], C)), "AsFloat")), { get: async () => L0["boorrest"], set: async (v) => { L0["boorrest"] = v; }, local: true });
  }
  if ($.truthy(($.ge(L0["boorrest"], L0["payamt"])))) {
    {
      const $t33 = (await $.wobj(C, "FrmChangeSchedule"));
      await $.wset([$t33], "PayAmt", (await $.wcall([$t33], "StrToFloat", [(await $.mv((await $.wv([$t33], "edPayamt", C, false)), "Text"))], C)), { get: async () => L0["payamt"], set: async (v) => { L0["payamt"] = v; }, local: true });
      await $.stmt($.wcall([$t33], "ShowModal", [], C));
    }
  } else {
    await $.stmt((await $.call(C, "MessageDlg", ["Cari hesabın qalığından artıq ödəniş aparmaq olmaz!", (await $.v(C, "mtInformation")), [(await $.v(C, "mbOk"))], 0])));
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TScheduleForm", "ActionPrintUpdate", async function ActionPrintUpdate(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t34 = (await $.wobj(C, "ScheduleDataModule"));
    const $t35 = (await $.wv([$t34], "ScheduleData", C, false));
    await $.mset((await $.wv([$t34, $t35], "Sender", { get: async () => L0["sender"], set: async (v) => { L0["sender"] = v; }, local: true }, false)), "Enabled", (await $.and_((await $.wv([$t34, $t35], "Active", C, false)), async () => ($.gt((await $.wv([$t34, $t35], "RecordCount", C, false)), 0)))));
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TScheduleForm", "ActionPrExecute", async function ActionPrExecute(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mcall((await $.v(C, "frmReportType")), "ShowModal", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TScheduleForm", "FormShow", async function FormShow(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t36 = (await $.wobj(C, "ScheduleDataModule"));
    const $t37 = (await $.wv([$t36], "BoorowerInfo", C, false));
    await $.mset((await $.wv([$t36, $t37], "LCBBooroweraccno", C, false)), "KeyValue", (await $.mv((await $.wcall([$t36, $t37], "FieldByName", ["BooroweraccID"], C)), "AsInteger")));
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  return U;
}
