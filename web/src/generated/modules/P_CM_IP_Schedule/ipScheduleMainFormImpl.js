// Generated from ipScheduleMainFormImpl.pas by pas2js — do not edit by hand; regenerate instead.
/* eslint-disable */
// @ts-nocheck

export default function define($) {
  const U = $.unit("ipScheduleMainFormImpl", ["Windows", "Messages", "SysUtils", "Classes", "Graphics", "Controls", "Forms", "Dialogs", "NLSLocalizer", "Grids", "DBGrids", "ExtCtrls", "StdCtrls", "Mask", "DBCtrls", "ToolWin", "ComCtrls", "ImgList", "ActnList", "DBGridEh", "DBCtrlsEh", "CMCurrencyEdit", "Buttons", "DB", "CMExcelExport", "ipScheduleDataModuleImpl", "CommonDecls", "SystemState", "ipSheduleAddUnt", "ipAnnutyPaymentFormImpl", "ipChangeScheduleImpl"]);
  const C = [U];
  U.defClass("TScheduleForm", "TForm", {"localizer": {"name": "Localizer", "type": "TNLSLocalizer"}, "toolbarimages": {"name": "ToolBarImages", "type": "TImageList"}, "scheludeactionlist": {"name": "ScheludeActionList", "type": "TActionList"}, "actionsave": {"name": "ActionSave", "type": "TAction"}, "actionprint": {"name": "ActionPrint", "type": "TAction"}, "actionclose": {"name": "ActionClose", "type": "TAction"}, "groupbox1": {"name": "GroupBox1", "type": "TGroupBox"}, "groupbox2": {"name": "GroupBox2", "type": "TGroupBox"}, "label1": {"name": "Label1", "type": "TLabel"}, "label2": {"name": "Label2", "type": "TLabel"}, "label3": {"name": "Label3", "type": "TLabel"}, "label7": {"name": "Label7", "type": "TLabel"}, "dbedit1": {"name": "DBEdit1", "type": "TDBEdit"}, "dbedit2": {"name": "DBEdit2", "type": "TDBEdit"}, "dbedit3": {"name": "DBEdit3", "type": "TDBEdit"}, "dbedit4": {"name": "DBEdit4", "type": "TDBEdit"}, "toolbar1": {"name": "ToolBar1", "type": "TToolBar"}, "toolbutton1": {"name": "ToolButton1", "type": "TToolButton"}, "toolbutton2": {"name": "ToolButton2", "type": "TToolButton"}, "toolbutton4": {"name": "ToolButton4", "type": "TToolButton"}, "toolbutton5": {"name": "ToolButton5", "type": "TToolButton"}, "toolbutton6": {"name": "ToolButton6", "type": "TToolButton"}, "toolbutton7": {"name": "ToolButton7", "type": "TToolButton"}, "toolbutton9": {"name": "ToolButton9", "type": "TToolButton"}, "schdulegrid": {"name": "SchduleGrid", "type": "TDBGridEh"}, "toolbutton8": {"name": "ToolButton8", "type": "TToolButton"}, "toolbar2": {"name": "ToolBar2", "type": "TToolBar"}, "toolbutton10": {"name": "ToolButton10", "type": "TToolButton"}, "toolbutton11": {"name": "ToolButton11", "type": "TToolButton"}, "toolbutton12": {"name": "ToolButton12", "type": "TToolButton"}, "toolbutton13": {"name": "ToolButton13", "type": "TToolButton"}, "toolbutton14": {"name": "ToolButton14", "type": "TToolButton"}, "toolbutton15": {"name": "ToolButton15", "type": "TToolButton"}, "toolbutton16": {"name": "ToolButton16", "type": "TToolButton"}, "toolbutton17": {"name": "ToolButton17", "type": "TToolButton"}, "toolbutton18": {"name": "ToolButton18", "type": "TToolButton"}, "dbedit5": {"name": "DBEdit5", "type": "TDBEdit"}, "actionadd": {"name": "ActionAdd", "type": "TAction"}, "actionedit": {"name": "ActionEdit", "type": "TAction"}, "actiondelete": {"name": "ActionDelete", "type": "TAction"}, "actionrefresh": {"name": "ActionRefresh", "type": "TAction"}, "actionannuty": {"name": "ActionAnnuty", "type": "TAction"}, "excelexport": {"name": "ExcelExport", "type": "TCMExcelExport"}, "dbedit6": {"name": "DBEdit6", "type": "TDBEdit"}, "label4": {"name": "Label4", "type": "TLabel"}, "actionchangeschedule": {"name": "ActionChangeSchedule", "type": "TAction"}, "toolbutton3": {"name": "ToolButton3", "type": "TToolButton"}, "toolbutton19": {"name": "ToolButton19", "type": "TToolButton"}}, {});
  U.init(async () => {
    U.var_("ScheduleForm", null, "TScheduleForm");
    U.var_("CreditID", 0, "Integer");
  });
  U.method("TScheduleForm", "ShowPaymentSchedule", async function ShowPaymentSchedule(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: undefined};
  L0["rsscheludecaption"] = "%s № li müqavilə üçün ödəmə planı.";
  await $.set(C, "ScheduleDataModule", (await $.mcall((await $.v(C, "TScheduleDataModule")), "Create", [Self])));
  await $.set(C, "AddEditForm", (await $.mcall((await $.v(C, "TAddEditForm")), "Create", [Self])));
  await $.set(C, "AnnutyForm", (await $.mcall((await $.v(C, "TAnnutyForm")), "Create", [Self])));
  await $.set(C, "FrmChangeSchedule", (await $.mcall((await $.v(C, "TFrmChangeSchedule")), "Create", [Self])));
  await $.mset((await $.v(C, "Localizer")), "Caption", (await $.call(C, "Format", [L0["rsscheludecaption"], [(await $.v(C, "Get_SelectedCrdNo"))]])));
  await $.set(C, "CreditID", (await $.v(C, "Get_SelectedCrdID")));
  {
    const $t1 = (await $.wobj(C, "ScheduleDataModule"));
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
    {
      const $t5 = (await $.wv([$t1], "IPInfo", C, false));
      await $.stmt($.wcall([$t1, $t5], "ClearVariables", [], C));
      await $.stmt((await $.wcall([$t1, $t5], "SetVariable", ["CrdID", (await $.wv([$t1, $t5], "CreditID", C, false))], C)));
      await $.stmt($.wcall([$t1, $t5], "Open", [], C));
    }
  }
  await $.stmt($.call(C, "ShowModal", []));
  return L0.result;
}, {"params": [], "kind": "procedure", "ptypes": []});
  U.method("TScheduleForm", "FormDestroy", async function FormDestroy(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mcall((await $.v(C, "ScheduleDataModule")), "Free", []);
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
        await $.wset([$t10], "SavePlace", (await $.wv([$t10], "GetBookmark", C, false)), { get: async () => L0["saveplace"], set: async (v) => { L0["saveplace"] = v; }, local: true });
        await $.stmt($.wcall([$t10], "Refresh", [], C));
        if ($.truthy((await $.wcall([$t10], "BookmarkValid", [(await $.wv([$t10], "SavePlace", { get: async () => L0["saveplace"], set: async (v) => { L0["saveplace"] = v; }, local: true }, false))], C)))) {
          await $.stmt((await $.wcall([$t10], "GotoBookmark", [(await $.wv([$t10], "SavePlace", { get: async () => L0["saveplace"], set: async (v) => { L0["saveplace"] = v; }, local: true }, false))], C)));
        }
        await $.stmt((await $.wcall([$t10], "FreeBookmark", [(await $.wv([$t10], "SavePlace", { get: async () => L0["saveplace"], set: async (v) => { L0["saveplace"] = v; }, local: true }, false))], C)));
      } else {
        await $.stmt($.wcall([$t10], "Cancel", [], C));
      }
    }
  } else {
    {
      const $t11 = (await $.mv((await $.v(C, "ScheduleDataModule")), "ScheduleData"));
      if ($.truthy((await $.wv([$t11], "PlaneEdit", { get: async () => L0["planeedit"], set: async (v) => { L0["planeedit"] = v; }, local: true }, false)))) {
        await $.stmt($.wcall([$t11], "Post", [], C));
        await $.wset([$t11], "SavePlace", (await $.wv([$t11], "GetBookmark", C, false)), { get: async () => L0["saveplace"], set: async (v) => { L0["saveplace"] = v; }, local: true });
        await $.stmt($.wcall([$t11], "Refresh", [], C));
        if ($.truthy((await $.wcall([$t11], "BookmarkValid", [(await $.wv([$t11], "SavePlace", { get: async () => L0["saveplace"], set: async (v) => { L0["saveplace"] = v; }, local: true }, false))], C)))) {
          await $.stmt((await $.wcall([$t11], "GotoBookmark", [(await $.wv([$t11], "SavePlace", { get: async () => L0["saveplace"], set: async (v) => { L0["saveplace"] = v; }, local: true }, false))], C)));
        }
        await $.stmt((await $.wcall([$t11], "FreeBookmark", [(await $.wv([$t11], "SavePlace", { get: async () => L0["saveplace"], set: async (v) => { L0["saveplace"] = v; }, local: true }, false))], C)));
      } else {
        await $.stmt($.wcall([$t11], "Cancel", [], C));
      }
    }
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TScheduleForm", "ActionDeleteExecute", async function ActionDeleteExecute(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "i": 0};
  await $.fixArgs(L0, ["sender"]);
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
  const L0 = {"sender": $.copyArg(p0), result: undefined, "payment": null, "annualyrate": 0, "annualyratebank": 0, "creditid": 0, "startdate": 0, "savepoint": null};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t19 = (await $.mv((await $.v(C, "ScheduleDataModule")), "CreditInfo"));
    await $.wset([$t19], "AnnualyRate", (await $.mv((await $.wcall([$t19], "FieldByName", ["ANNUALYINTERESTRATE"], C)), "AsFloat")), { get: async () => L0["annualyrate"], set: async (v) => { L0["annualyrate"] = v; }, local: true });
    await $.wset([$t19], "AnnualyRateBank", (await $.mv((await $.wcall([$t19], "FieldByName", ["ANNUALBANKRATE"], C)), "AsFloat")), { get: async () => L0["annualyratebank"], set: async (v) => { L0["annualyratebank"] = v; }, local: true });
    await $.wset([$t19], "StartDate", (await $.mv((await $.mcall((await $.mv((await $.wv([$t19], "ScheduleDataModule", C, false)), "IPInfo")), "FieldByName", ["BANKOPENDATE"])), "AsDateTime")), { get: async () => L0["startdate"], set: async (v) => { L0["startdate"] = v; }, local: true });
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
          await $.stmt((await $.wcall([$t20, $t22, $t23], "ShowMessage", [(await $.wcall([$t20, $t22, $t23], "IntToStr", [(await $.wv([$t20, $t22, $t23], "NPeriods", C, false))], C))], C)));
          await $.stmt((await $.wcall([$t20, $t22, $t23], "CallProcedure", ["InsertAnnutySchedule", ["p_CreditID", (await $.wv([$t20, $t22, $t23], "CreditID", { get: async () => L0["creditid"], set: async (v) => { L0["creditid"] = v; }, local: true }, false)), "p_Amount", (await $.wv([$t20, $t22, $t23], "Amount", C, false)), "p_Rate", (await $.wv([$t20, $t22, $t23], "AnnualyRateBank", { get: async () => L0["annualyratebank"], set: async (v) => { L0["annualyratebank"] = v; }, local: true }, false)), "p_IPRate", (await $.wv([$t20, $t22, $t23], "AnnualyRate", { get: async () => L0["annualyrate"], set: async (v) => { L0["annualyrate"] = v; }, local: true }, false)), "p_FirstPayDate", (await $.wv([$t20, $t22, $t23], "FirstPayDate", C, false)), "p_StartDate", (await $.wv([$t20, $t22, $t23], "StartDate", { get: async () => L0["startdate"], set: async (v) => { L0["startdate"] = v; }, local: true }, false)), "p_Periods", (await $.wv([$t20, $t22, $t23], "NPeriods", C, false)), "p_PeriodRate", (await $.wv([$t20, $t22, $t23], "PeriodRate", C, false))]], C)));
        } else {
          await $.stmt((await $.wcall([$t20, $t22, $t23], "CallProcedure", ["InsertEqualSchedule", ["p_CreditID", (await $.wv([$t20, $t22, $t23], "CreditID", { get: async () => L0["creditid"], set: async (v) => { L0["creditid"] = v; }, local: true }, false)), "p_Amount", (await $.wv([$t20, $t22, $t23], "Amount", C, false)), "p_Rate", (await $.wv([$t20, $t22, $t23], "AnnualyRate", { get: async () => L0["annualyrate"], set: async (v) => { L0["annualyrate"] = v; }, local: true }, false)), "p_IpRate", (await $.wv([$t20, $t22, $t23], "AnnualyRateBank", { get: async () => L0["annualyratebank"], set: async (v) => { L0["annualyratebank"] = v; }, local: true }, false)), "p_FirstPayDate", (await $.wv([$t20, $t22, $t23], "FirstPayDate", C, false)), "p_StartDate", (await $.wv([$t20, $t22, $t23], "StartDate", { get: async () => L0["startdate"], set: async (v) => { L0["startdate"] = v; }, local: true }, false)), "p_Periods", (await $.wv([$t20, $t22, $t23], "NPeriods", C, false)), "p_PeriodRate", (await $.wv([$t20, $t22, $t23], "PeriodRate", C, false))]], C)));
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
    const $t25 = (await $.wobj(C, "ExcelExport"));
    await $.stmt($.wcall([$t25], "connect", [], C));
    {
      const $t26 = (await $.wv([$t25], "ScheduleDataModule", C, false));
      await $.mcall((await $.wv([$t25, $t26], "Exportdata", C, false)), "CloseAll", []);
      await $.stmt((await $.mcall((await $.wv([$t25, $t26], "Exportdata", C, false)), "SetVariable", ["crdid", (await $.mv((await $.mcall((await $.wv([$t25, $t26], "ScheduleData", C, false)), "FieldByName", ["CreditID"])), "AsInteger"))])));
      await $.mcall((await $.wv([$t25, $t26], "Exportdata", C, false)), "Open", []);
    }
    await $.stmt((await $.wcall([$t25], "ExportDataset", [(await $.mv((await $.wv([$t25], "ScheduleDataModule", C, false)), "Exportdata")), "Ödəmə planı", (await $.wv([$t25], "true", C, false))], C)));
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
  U.method("TScheduleForm", "ActionChangeScheduleExecute", async function ActionChangeScheduleExecute(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mcall((await $.v(C, "FrmChangeSchedule")), "ShowModal", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  return U;
}
