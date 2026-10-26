// Generated from ScheduleMainFormImpl.pas by pas2js — do not edit by hand; regenerate instead.
/* eslint-disable */
// @ts-nocheck

export default function define($) {
  const U = $.unit("ScheduleMainFormImpl", ["Windows", "Messages", "SysUtils", "Classes", "Graphics", "Controls", "Forms", "Dialogs", "Grids", "DBGrids", "ExtCtrls", "StdCtrls", "Mask", "DBCtrls", "ToolWin", "ComCtrls", "ImgList", "ActnList", "DBGridEh", "DBCtrlsEh", "CMCurrencyEdit", "Buttons", "DB", "CMExcelExport", "DBGridEhGrouping", "GridsEh", "ScheduleDataModuleImpl", "CommonDecls", "SbSystem", "SheduleAddUnt", "AnnutyPaymentFormImpl", "frmReportTypeImpl", "ReportImpl", "ChangeScheduleImpl", "sboapiDataModuleImpl", "SBTranslateProc"]);
  const C = [U];
  U.defClass("TScheduleForm", "TForm", {"toolbarimages": {"name": "ToolBarImages", "type": "TImageList"}, "scheludeactionlist": {"name": "ScheludeActionList", "type": "TActionList"}, "actionsave": {"name": "ActionSave", "type": "TAction"}, "actionprint": {"name": "ActionPrint", "type": "TAction"}, "actionclose": {"name": "ActionClose", "type": "TAction"}, "groupbox1": {"name": "GroupBox1", "type": "TGroupBox"}, "groupbox2": {"name": "GroupBox2", "type": "TGroupBox"}, "label1": {"name": "Label1", "type": "TLabel"}, "label2": {"name": "Label2", "type": "TLabel"}, "label3": {"name": "Label3", "type": "TLabel"}, "label7": {"name": "Label7", "type": "TLabel"}, "dbedit1": {"name": "DBEdit1", "type": "TDBEdit"}, "dbedit2": {"name": "DBEdit2", "type": "TDBEdit"}, "dbedit3": {"name": "DBEdit3", "type": "TDBEdit"}, "dbedit4": {"name": "DBEdit4", "type": "TDBEdit"}, "toolbar1": {"name": "ToolBar1", "type": "TToolBar"}, "toolbutton1": {"name": "ToolButton1", "type": "TToolButton"}, "toolbutton2": {"name": "ToolButton2", "type": "TToolButton"}, "toolbutton4": {"name": "ToolButton4", "type": "TToolButton"}, "toolbutton5": {"name": "ToolButton5", "type": "TToolButton"}, "toolbutton6": {"name": "ToolButton6", "type": "TToolButton"}, "toolbutton7": {"name": "ToolButton7", "type": "TToolButton"}, "toolbutton9": {"name": "ToolButton9", "type": "TToolButton"}, "schdulegrid": {"name": "SchduleGrid", "type": "TDBGridEh"}, "toolbutton8": {"name": "ToolButton8", "type": "TToolButton"}, "toolbar2": {"name": "ToolBar2", "type": "TToolBar"}, "toolbutton10": {"name": "ToolButton10", "type": "TToolButton"}, "toolbutton11": {"name": "ToolButton11", "type": "TToolButton"}, "toolbutton12": {"name": "ToolButton12", "type": "TToolButton"}, "toolbutton13": {"name": "ToolButton13", "type": "TToolButton"}, "toolbutton14": {"name": "ToolButton14", "type": "TToolButton"}, "toolbutton15": {"name": "ToolButton15", "type": "TToolButton"}, "toolbutton16": {"name": "ToolButton16", "type": "TToolButton"}, "toolbutton17": {"name": "ToolButton17", "type": "TToolButton"}, "toolbutton18": {"name": "ToolButton18", "type": "TToolButton"}, "dbedit5": {"name": "DBEdit5", "type": "TDBEdit"}, "actionadd": {"name": "ActionAdd", "type": "TAction"}, "actionedit": {"name": "ActionEdit", "type": "TAction"}, "actiondelete": {"name": "ActionDelete", "type": "TAction"}, "actionrefresh": {"name": "ActionRefresh", "type": "TAction"}, "actionannuty": {"name": "ActionAnnuty", "type": "TAction"}, "toolbutton3": {"name": "ToolButton3", "type": "TToolButton"}, "toolbutton19": {"name": "ToolButton19", "type": "TToolButton"}, "actionchange": {"name": "ActionChange", "type": "TAction"}, "actionpr": {"name": "ActionPr", "type": "TAction"}}, {});
  U.init(async () => {
    U.var_("ScheduleForm", null, "TScheduleForm");
    U.var_("CreditID", 0, "Integer");
  });
  U.method("TScheduleForm", "ShowPaymentSchedule", async function ShowPaymentSchedule(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: undefined};
  L0["rsscheludecaption"] = "%s № li müqavilə üçün ödəmə planı.";
  await $.set(C, "ScheduleDataModule", (await $.mcall((await $.v(C, "TScheduleDataModule")), "Create", [Self])));
  await $.set(C, "frmReportType", (await $.mcall((await $.v(C, "TfrmReportType")), "Create", [Self])));
  await $.set(C, "ReportForm", (await $.mcall((await $.v(C, "TReportForm")), "create", [Self])));
  await $.set(C, "AddEditForm", (await $.mcall((await $.v(C, "TAddEditForm")), "Create", [Self])));
  await $.set(C, "AnnutyForm", (await $.mcall((await $.v(C, "TAnnutyForm")), "Create", [Self])));
  await $.set(C, "FrmChangeSchedule", (await $.mcall((await $.v(C, "TFrmChangeSchedule")), "Create", [Self])));
  await $.set(C, "Caption", (await $.call(C, "Format", [L0["rsscheludecaption"], [(await $.v(C, "Get_SelectedCrdNo"))]])));
  await $.set(C, "CreditID", (await $.v(C, "Get_SelectedCrdID")));
  {
    const $t1 = (await $.v(C, "ScheduleDataModule"));
    {
      const $t2 = (await $.wv([$t1], "ScheduleData", C, false));
      await $.stmt($.wcall([$t1, $t2], "ClearVariables", [], C));
      await $.stmt((await $.wcall([$t1, $t2], "SetVariable", ["CreditID", (await $.wv([$t1, $t2], "CreditID", C, false))], C)));
      await $.stmt($.wcall([$t1, $t2], "Open", [], C));
    }
    {
      const $t3 = (await $.wv([$t1], "BoorowerInfo", C, false));
      await $.stmt($.wcall([$t1, $t3], "ClearVariables", [], C));
      await $.stmt((await $.wcall([$t1, $t3], "SetVariable", ["CreditID", (await $.wv([$t1, $t3], "CreditID", C, false))], C)));
      await $.stmt($.wcall([$t1, $t3], "Open", [], C));
    }
    {
      const $t4 = (await $.wv([$t1], "CreditInfo", C, false));
      await $.stmt($.wcall([$t1, $t4], "ClearVariables", [], C));
      await $.stmt((await $.wcall([$t1, $t4], "SetVariable", ["ID", (await $.wv([$t1, $t4], "CreditID", C, false))], C)));
      await $.stmt($.wcall([$t1, $t4], "Open", [], C));
    }
    await $.mcall((await $.wv([$t1], "BankInfo", C, false)), "open", []);
    await $.mcall((await $.wv([$t1], "HeadOfficeID", C, false)), "open", []);
    if ($.truthy((await $.mv((await $.wv([$t1], "FilialInfo", C, false)), "Active")))) {
      await $.mcall((await $.wv([$t1], "FilialInfo", C, false)), "CloseAll", []);
    }
    await $.stmt((await $.mcall((await $.wv([$t1], "FilialInfo", C, false)), "SetVariable", ["brid", (await $.mv((await $.mcall((await $.wv([$t1], "CreditInfo", C, false)), "FieldByName", ["BranchID"])), "AsInteger"))])));
    await $.mcall((await $.wv([$t1], "FilialInfo", C, false)), "Open", []);
    await $.mset((await $.mv((await $.wv([$t1], "ReportForm", C, false)), "QRLabel11")), "Caption", (await $.mv((await $.mcall((await $.wv([$t1], "FilialInfo", C, false)), "fieldByName", ["name"])), "asstring")));
    if ($.truthy($.eq((await $.mv((await $.mcall((await $.wv([$t1], "FilialInfo", C, false)), "FieldByName", ["ID"])), "AsInteger")), (await $.mv((await $.mcall((await $.wv([$t1], "HeadOfficeID", C, false)), "FieldbyName", ["minid"])), "AsInteger"))))) {
      await $.mset((await $.mv((await $.wv([$t1], "ReportForm", C, false)), "QRLabel10")), "caption", "Müştəri xidmətləri departamentinin direktoru______________________________");
    } else {
      await $.mset((await $.mv((await $.wv([$t1], "ReportForm", C, false)), "QRLabel10")), "caption", "Filial direktoru                                                         ______________________________");
    }
  }
  await $.stmt($.call(C, "ShowModal", []));
  return L0.result;
}, {"params": [], "kind": "procedure", "ptypes": []});
  U.method("TScheduleForm", "FormDestroy", async function FormDestroy(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mcall((await $.v(C, "frmReportType")), "Free", []);
  await $.mcall((await $.v(C, "ReportForm")), "Free", []);
  await $.mcall((await $.v(C, "AddEditForm")), "Free", []);
  await $.mcall((await $.v(C, "AnnutyForm")), "Free", []);
  await $.mcall((await $.v(C, "FrmChangeSchedule")), "Free", []);
  await $.mcall((await $.v(C, "ScheduleDataModule")), "Free", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TScheduleForm", "FormClose", async function FormClose(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "action": $.asRef(p1), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t5 = (await $.v(C, "ScheduleDataModule"));
    {
      const $t6 = (await $.mv((await $.wv([$t5], "ScheduleData", C, false)), "Session"));
      await $.stmt($.wcall([$t5, $t6], "Rollback", [], C));
    }
    await $.mcall((await $.wv([$t5], "ScheduleData", C, false)), "CloseAll", []);
    await $.mcall((await $.wv([$t5], "CreditInfo", C, false)), "CloseAll", []);
    await $.mcall((await $.wv([$t5], "BoorowerInfo", C, false)), "CloseAll", []);
  }
  return L0.result;
}, {"params": ["Sender", "Action"], "kind": "procedure", "ptypes": ["TObject", "TCloseAction"]});
  U.method("TScheduleForm", "FormCreate", async function FormCreate(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.stmt((await $.mcall((await $.v(C, "SBTranslateProc")), "TranslateAllCompForms", [Self, (await $.mv((await $.v(C, "sboapiDataModule")), "OrPack_SL"))])));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TScheduleForm", "ActionCloseExecute", async function ActionCloseExecute(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.stmt($.call(C, "Close", []));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TScheduleForm", "ActionAddExecute", async function ActionAddExecute(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "saveplace": null, "count": 0};
  await $.fixArgs(L0, ["sender"]);
  L0["planeinsert"] = $.fn(async function PlaneInsert() {
  const L1 = {result: false};
  {
    const $t7 = (await $.mv((await $.v(C, "ScheduleDataModule")), "ScheduleData"));
    await $.stmt($.wcall([$t7], "Insert", [], C));
    await $.mset((await $.wcall([$t7], "FieldByName", ["CreditID"], C)), "AsInteger", (await $.wv([$t7], "CreditID", C, false)));
  }
  L1["result"] = $.eq((await $.mv((await $.v(C, "AddEditForm")), "ShowModal")), (await $.v(C, "mrOk")));
  return L1.result;
});
  L0["planeedit"] = $.fn(async function PlaneEdit() {
  const L1 = {result: false};
  {
    const $t8 = (await $.mv((await $.v(C, "ScheduleDataModule")), "ScheduleData"));
    await $.stmt($.wcall([$t8], "Edit", [], C));
  }
  L1["result"] = $.eq((await $.mv((await $.v(C, "AddEditForm")), "ShowModal")), (await $.v(C, "mrOk")));
  return L1.result;
});
  L0["count"] = (await $.mcall((await $.mv((await $.v(C, "ScheduleDataModule")), "adm")), "CallIntegerFunction", ["getadmaddition", ["PAYMENTSHE"]]));
  if ($.truthy($.eq(L0["count"], 0))) {
    await $.stmt((await $.call(C, "showmessage", [$.add($.add("Sizin dəyişmək hüququnuz yoxdur!", "\r"), "Əlavə məlumat üçün sistem administratoruna müracət edin.")])));
    return L0.result;
  }
  if ($.truthy($.eq((await $.mv((L0["sender"]), "Tag")), 1))) {
    {
      const $t9 = (await $.mv((await $.v(C, "ScheduleDataModule")), "ScheduleData"));
      if ($.truthy((await $.wv([$t9], "PlaneInsert", { get: async () => L0["planeinsert"], set: async (v) => { L0["planeinsert"] = v; }, local: true }, false)))) {
        await $.stmt($.wcall([$t9], "Post", [], C));
        await $.stmt((await $.mcall((await $.wv([$t9], "ScheduleForm", C, false)), "ActionSaveExecute", [(await $.wv([$t9], "Sender", { get: async () => L0["sender"], set: async (v) => { L0["sender"] = v; }, local: true }, false))])));
        await $.stmt($.wcall([$t9], "Refresh", [], C));
      }
    }
  } else {
    {
      const $t10 = (await $.mv((await $.v(C, "ScheduleDataModule")), "ScheduleData"));
      if ($.truthy((await $.wv([$t10], "PlaneEdit", { get: async () => L0["planeedit"], set: async (v) => { L0["planeedit"] = v; }, local: true }, false)))) {
        await $.stmt($.wcall([$t10], "Post", [], C));
        await $.stmt((await $.mcall((await $.wv([$t10], "ScheduleForm", C, false)), "ActionSaveExecute", [(await $.wv([$t10], "Sender", { get: async () => L0["sender"], set: async (v) => { L0["sender"] = v; }, local: true }, false))])));
        await $.stmt($.wcall([$t10], "Refresh", [], C));
      }
    }
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TScheduleForm", "ActionDeleteExecute", async function ActionDeleteExecute(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "count": 0, "i": 0};
  await $.fixArgs(L0, ["sender"]);
  L0["rs_delshedulepayments"] = " Silinməsinə əminsinizmi? ";
  {
    const $t11 = (await $.v(C, "ScheduleDataModule"));
    const $t12 = (await $.wv([$t11], "adm", C, false));
    await $.wset([$t11, $t12], "count", (await $.wcall([$t11, $t12], "CallIntegerFunction", ["getadmaddition", ["PAYMENTSHE"]], C)), { get: async () => L0["count"], set: async (v) => { L0["count"] = v; }, local: true });
  }
  if ($.truthy($.eq(L0["count"], 0))) {
    await $.stmt((await $.call(C, "showmessage", [$.add($.add("Sizin dəyişmək hüququnuz yoxdur!", "\r"), "Əlavə məlumat üçün sistem administratoruna müracət edin.")])));
    return L0.result;
  }
  if ($.truthy($.eq((await $.call(C, "MessageDlg", [L0["rs_delshedulepayments"], (await $.v(C, "mtConfirmation")), [(await $.v(C, "mbYes")), (await $.v(C, "mbNo"))], 0])), (await $.v(C, "mrNO"))))) {
    return L0.result;
  }
  {
    const $t13 = (await $.v(C, "SchduleGrid"));
    { const $t14 = 0;
      await $.wset([$t13], "I", $.sub((await $.mv((await $.wv([$t13], "SelectedRows", C, false)), "Count")), 1), { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true });
      let $t15 = true;
      for (;;) {
        if (!$t15) { await $.wset([$t13], "I", $.succ((await $.wv([$t13], "I", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false)), -1), { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }); }
        $t15 = false;
        if (!($.ord((await $.wv([$t13], "I", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false))) >= $.ord($t14))) break;
        await $.stmt((await $.mcall((await $.mv((await $.wv([$t13], "DataSource", C, false)), "DataSet")), "GotoBookmark", [(await $.wcall([$t13], "Pointer", [(await $.idx((await $.wv([$t13], "SelectedRows", C, false)), [(await $.wv([$t13], "I", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false))]))], C))])));
        await $.mcall((await $.mv((await $.wv([$t13], "DataSource", C, false)), "DataSet")), "Delete", []);
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
    const $t16 = (await $.mv((await $.v(C, "ScheduleDataModule")), "ScheduleData"));
    await $.stmt($.wcall([$t16], "Refresh", [], C));
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TScheduleForm", "ActionSaveExecute", async function ActionSaveExecute(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t17 = (await $.v(C, "ScheduleDataModule"));
    const $t18 = (await $.mv((await $.wv([$t17], "ScheduleData", C, false)), "Session"));
    await $.stmt((await $.wcall([$t17, $t18], "ApplyUpdates", [[(await $.wv([$t17, $t18], "ScheduleData", C, false))], (await $.wv([$t17, $t18], "True", C, false))], C)));
    await $.stmt($.wcall([$t17, $t18], "Commit", [], C));
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TScheduleForm", "ActionSaveUpdate", async function ActionSaveUpdate(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t19 = (await $.mv((await $.v(C, "ScheduleDataModule")), "ScheduleData"));
    await $.mset((await $.wv([$t19], "Sender", { get: async () => L0["sender"], set: async (v) => { L0["sender"] = v; }, local: true }, false)), "Enabled", (await $.and_((await $.wv([$t19], "Active", C, false)), async () => (await $.wv([$t19], "UpdatesPending", C, false)))));
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TScheduleForm", "ActionAnnutyExecute", async function ActionAnnutyExecute(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "payment": null, "annualyrate": 0, "creditid": 0, "startdate": 0, "savepoint": null};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t20 = (await $.mv((await $.v(C, "ScheduleDataModule")), "CreditInfo"));
    await $.wset([$t20], "AnnualyRate", (await $.mv((await $.wcall([$t20], "FieldByName", ["ANNUALYINTERESTRATE"], C)), "AsFloat")), { get: async () => L0["annualyrate"], set: async (v) => { L0["annualyrate"] = v; }, local: true });
    await $.wset([$t20], "StartDate", (await $.mv((await $.wcall([$t20], "FieldByName", ["DATEOFCONCLUSION"], C)), "AsDateTime")), { get: async () => L0["startdate"], set: async (v) => { L0["startdate"] = v; }, local: true });
    await $.wset([$t20], "CreditID", (await $.mv((await $.wcall([$t20], "FieldByName", ["ID"], C)), "AsInteger")), { get: async () => L0["creditid"], set: async (v) => { L0["creditid"] = v; }, local: true });
  }
  {
    const $t21 = (await $.v(C, "AnnutyForm"));
    if ($.truthy($.not((await $.wcall([$t21], "AnnutyPayment_Get", [$.ref(async () => (await $.wv([$t21], "Payment", { get: async () => L0["payment"], set: async (v) => { L0["payment"] = v; }, local: true }, false)), async ($t22) => { await $.wset([$t21], "Payment", $t22, { get: async () => L0["payment"], set: async (v) => { L0["payment"] = v; }, local: true }); })], C))))) {
      return L0.result;
    }
    {
      const $t23 = (await $.wv([$t21], "Payment", { get: async () => L0["payment"], set: async (v) => { L0["payment"] = v; }, local: true }, false));
      {
        const $t24 = (await $.mv((await $.wv([$t21, $t23], "ScheduleDataModule", C, false)), "CM_SCHEDULE"));
        if ($.truthy((await $.wv([$t21, $t23, $t24], "PaymentType", C, false)))) {
          await $.stmt((await $.wcall([$t21, $t23, $t24], "CallProcedure", ["InsertAnnutySchedule", ["p_CreditID", (await $.wv([$t21, $t23, $t24], "CreditID", { get: async () => L0["creditid"], set: async (v) => { L0["creditid"] = v; }, local: true }, false)), "p_Amount", (await $.wv([$t21, $t23, $t24], "Amount", C, false)), "p_Rate", (await $.wv([$t21, $t23, $t24], "AnnualyRate", { get: async () => L0["annualyrate"], set: async (v) => { L0["annualyrate"] = v; }, local: true }, false)), "p_FirstPayDate", (await $.wv([$t21, $t23, $t24], "FirstPayDate", C, false)), "p_StartDate", (await $.wv([$t21, $t23, $t24], "StartDate", { get: async () => L0["startdate"], set: async (v) => { L0["startdate"] = v; }, local: true }, false)), "p_Periods", $.sub((await $.wv([$t21, $t23, $t24], "NPeriods", C, false)), (await $.wv([$t21, $t23, $t24], "dovr", C, false))), "p_PeriodRate", (await $.wv([$t21, $t23, $t24], "PeriodRate", C, false)), "p_dovr", (await $.wv([$t21, $t23, $t24], "dovr", C, false))]], C)));
        } else {
          await $.stmt((await $.wcall([$t21, $t23, $t24], "CallProcedure", ["InsertEqualSchedule", ["p_CreditID", (await $.wv([$t21, $t23, $t24], "CreditID", { get: async () => L0["creditid"], set: async (v) => { L0["creditid"] = v; }, local: true }, false)), "p_Amount", (await $.wv([$t21, $t23, $t24], "Amount", C, false)), "p_Rate", (await $.wv([$t21, $t23, $t24], "AnnualyRate", { get: async () => L0["annualyrate"], set: async (v) => { L0["annualyrate"] = v; }, local: true }, false)), "p_FirstPayDate", (await $.wv([$t21, $t23, $t24], "FirstPayDate", C, false)), "p_StartDate", (await $.wv([$t21, $t23, $t24], "StartDate", { get: async () => L0["startdate"], set: async (v) => { L0["startdate"] = v; }, local: true }, false)), "p_Periods", $.sub((await $.wv([$t21, $t23, $t24], "NPeriods", C, false)), (await $.wv([$t21, $t23, $t24], "dovr", C, false))), "p_PeriodRate", (await $.wv([$t21, $t23, $t24], "PeriodRate", C, false)), "p_dovr", (await $.wv([$t21, $t23, $t24], "dovr", C, false))]], C)));
        }
      }
      {
        const $t25 = (await $.mv((await $.wv([$t21, $t23], "ScheduleDataModule", C, false)), "ScheduleData"));
        await $.wset([$t21, $t23, $t25], "SavePoint", (await $.wv([$t21, $t23, $t25], "GetBookmark", C, false)), { get: async () => L0["savepoint"], set: async (v) => { L0["savepoint"] = v; }, local: true });
        await $.stmt($.wcall([$t21, $t23, $t25], "Refresh", [], C));
        if ($.truthy((await $.wcall([$t21, $t23, $t25], "BookmarkValid", [(await $.wv([$t21, $t23, $t25], "SavePoint", { get: async () => L0["savepoint"], set: async (v) => { L0["savepoint"] = v; }, local: true }, false))], C)))) {
          await $.stmt((await $.wcall([$t21, $t23, $t25], "GotoBookmark", [(await $.wv([$t21, $t23, $t25], "SavePoint", { get: async () => L0["savepoint"], set: async (v) => { L0["savepoint"] = v; }, local: true }, false))], C)));
        }
        await $.stmt((await $.wcall([$t21, $t23, $t25], "FreeBookmark", [(await $.wv([$t21, $t23, $t25], "SavePoint", { get: async () => L0["savepoint"], set: async (v) => { L0["savepoint"] = v; }, local: true }, false))], C)));
        await $.stmt($.wcall([$t21, $t23, $t25], "Edit", [], C));
        await $.stmt($.wcall([$t21, $t23, $t25], "Post", [], C));
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
    const $t26 = (await $.v(C, "ScheduleDataModule"));
    const $t27 = (await $.wv([$t26], "ExportData", C, false));
    if ($.truthy((await $.wv([$t26, $t27], "Active", C, false)))) {
      await $.stmt($.wcall([$t26, $t27], "close", [], C));
    }
    await $.stmt((await $.wcall([$t26, $t27], "setvariable", ["Creditid", (await $.wv([$t26, $t27], "Get_SelectedCrdID", C, false))], C)));
    await $.stmt($.wcall([$t26, $t27], "open", [], C));
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
      const $t28 = (await $.v(C, "SchduleGrid"));
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
  const L0 = {"sender": $.copyArg(p0), result: undefined, "count": 0};
  await $.fixArgs(L0, ["sender"]);
  L0["count"] = (await $.mcall((await $.mv((await $.v(C, "ScheduleDataModule")), "adm")), "CallIntegerFunction", ["getadmaddition", ["PAYMENTSHE"]]));
  if ($.truthy($.eq(L0["count"], 0))) {
    await $.stmt((await $.call(C, "showmessage", [$.add($.add("Sizin dəyişmək hüququnuz yoxdur!", "\r"), "Əlavə məlumat üçün sistem administratoruna müracət edin.")])));
    return L0.result;
  }
  await $.mcall((await $.v(C, "FrmChangeSchedule")), "ShowModal", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TScheduleForm", "ActionPrintUpdate", async function ActionPrintUpdate(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t31 = (await $.v(C, "ScheduleDataModule"));
    const $t32 = (await $.wv([$t31], "ScheduleData", C, false));
    await $.mset((await $.wv([$t31, $t32], "Sender", { get: async () => L0["sender"], set: async (v) => { L0["sender"] = v; }, local: true }, false)), "Enabled", (await $.and_((await $.wv([$t31, $t32], "Active", C, false)), async () => ($.gt((await $.wv([$t31, $t32], "RecordCount", C, false)), 0)))));
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
  return U;
}
