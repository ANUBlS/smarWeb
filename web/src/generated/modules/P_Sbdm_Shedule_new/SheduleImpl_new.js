// Generated from SheduleImpl_new.pas by pas2js — do not edit by hand; regenerate instead.
/* eslint-disable */
// @ts-nocheck

export default function define($) {
  const U = $.unit("SheduleImpl_new", ["Windows", "Messages", "SysUtils", "Classes", "Graphics", "Controls", "Forms", "LDialogs", "StdCtrls", "Mask", "DBCtrls", "ComCtrls", "ToolWin", "ActnList", "ImgList", "Grids", "DBGridEh", "NewCommonDeclsImpl", "ScheduleDataModuleImpl_new", "PaymentSheduleimpl_new", "SBTranslateProc", "sboapiDataModuleimpl"]);
  const C = [U];
  U.defClass("Tform1", "TForm", {"groupbox1": {"name": "GroupBox1", "type": "TGroupBox"}, "dbedit5": {"name": "DBEdit5", "type": "TDBEdit"}, "groupbox2": {"name": "GroupBox2", "type": "TGroupBox"}, "label1": {"name": "Label1", "type": "TLabel"}, "label2": {"name": "Label2", "type": "TLabel"}, "label3": {"name": "Label3", "type": "TLabel"}, "label7": {"name": "Label7", "type": "TLabel"}, "dbedit1": {"name": "DBEdit1", "type": "TDBEdit"}, "dbedit2": {"name": "DBEdit2", "type": "TDBEdit"}, "dbedit3": {"name": "DBEdit3", "type": "TDBEdit"}, "dbedit4": {"name": "DBEdit4", "type": "TDBEdit"}, "schdulegrid": {"name": "SchduleGrid", "type": "TDBGridEh"}, "scheludeactionlist": {"name": "ScheludeActionList", "type": "TActionList"}, "actionsave": {"name": "ActionSave", "type": "TAction"}, "actionprint": {"name": "ActionPrint", "type": "TAction"}, "actionclose": {"name": "ActionClose", "type": "TAction"}, "actionadd": {"name": "ActionAdd", "type": "TAction"}, "actionedit": {"name": "ActionEdit", "type": "TAction"}, "actiondelete": {"name": "ActionDelete", "type": "TAction"}, "actionrefresh": {"name": "ActionRefresh", "type": "TAction"}, "actionannuty": {"name": "ActionAnnuty", "type": "TAction"}, "actionchange": {"name": "ActionChange", "type": "TAction"}, "actionpr": {"name": "ActionPr", "type": "TAction"}, "toolbar1": {"name": "ToolBar1", "type": "TToolBar"}, "toolbutton8": {"name": "ToolButton8", "type": "TToolButton"}, "toolbutton1": {"name": "ToolButton1", "type": "TToolButton"}, "toolbutton4": {"name": "ToolButton4", "type": "TToolButton"}, "toolbutton2": {"name": "ToolButton2", "type": "TToolButton"}, "toolbutton5": {"name": "ToolButton5", "type": "TToolButton"}, "toolbutton6": {"name": "ToolButton6", "type": "TToolButton"}, "toolbutton7": {"name": "ToolButton7", "type": "TToolButton"}, "toolbutton9": {"name": "ToolButton9", "type": "TToolButton"}, "toolbar2": {"name": "ToolBar2", "type": "TToolBar"}, "toolbutton10": {"name": "ToolButton10", "type": "TToolButton"}, "toolbutton11": {"name": "ToolButton11", "type": "TToolButton"}, "toolbutton12": {"name": "ToolButton12", "type": "TToolButton"}, "toolbutton13": {"name": "ToolButton13", "type": "TToolButton"}, "toolbutton14": {"name": "ToolButton14", "type": "TToolButton"}, "toolbutton15": {"name": "ToolButton15", "type": "TToolButton"}, "toolbutton16": {"name": "ToolButton16", "type": "TToolButton"}, "toolbutton17": {"name": "ToolButton17", "type": "TToolButton"}, "toolbutton18": {"name": "ToolButton18", "type": "TToolButton"}, "toolbutton3": {"name": "ToolButton3", "type": "TToolButton"}, "toolbutton19": {"name": "ToolButton19", "type": "TToolButton"}, "toolbarimages": {"name": "ToolBarImages", "type": "TImageList"}}, {});
  U.init(async () => {
    U.var_("form1", null, "Tform1");
    U.var_("depositid", 0, "integer");
  });
  U.func("exportproc", async function exportproc(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"s": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["s"]);
  L0["rsscheludecaption"] = "%s № li müqavilə üçün ödəmə planı.";
  await $.mset((await $.v(C, "form1")), "Caption", (await $.call(C, "Format", [L0["rsscheludecaption"], [(await $.v(C, "Get_SelectedContNo"))]])));
  await $.set(C, "depositid", (await $.v(C, "Get_SelectedContID")));
  {
    const $t1 = (await $.mv((await $.v(C, "ScheduleDataModule_new")), "sbdm_customers"));
    await $.stmt($.wcall([$t1], "close", [], C));
    await $.stmt($.wcall([$t1], "ClearVariables", [], C));
    await $.stmt((await $.wcall([$t1], "SetVariable", ["ID", (await $.wv([$t1], "depositid", C, false))], C)));
    await $.stmt($.wcall([$t1], "Open", [], C));
  }
  {
    const $t2 = (await $.mv((await $.v(C, "ScheduleDataModule_new")), "OracleDataSet1"));
    await $.stmt($.wcall([$t2], "close", [], C));
    await $.stmt($.wcall([$t2], "ClearVariables", [], C));
    await $.stmt((await $.wcall([$t2], "SetVariable", ["ID", (await $.wv([$t2], "depositid", C, false))], C)));
    await $.stmt($.wcall([$t2], "Open", [], C));
  }
  {
    const $t3 = (await $.mv((await $.v(C, "ScheduleDataModule_new")), "OracleDataSet2"));
    await $.stmt($.wcall([$t3], "close", [], C));
    await $.stmt($.wcall([$t3], "ClearVariables", [], C));
    await $.stmt((await $.wcall([$t3], "SetVariable", ["id", (await $.wv([$t3], "depositid", C, false))], C)));
    await $.stmt($.wcall([$t3], "Open", [], C));
  }
  {
    const $t4 = (await $.mv((await $.v(C, "ScheduleDataModule_new")), "OracleDataSet3"));
    await $.stmt($.wcall([$t4], "close", [], C));
    await $.stmt($.wcall([$t4], "ClearVariables", [], C));
    await $.stmt((await $.wcall([$t4], "SetVariable", ["v_id", (await $.wv([$t4], "depositid", C, false))], C)));
    await $.stmt($.wcall([$t4], "Open", [], C));
  }
  await $.mcall((await $.v(C, "form1")), "ShowModal", []);
  return L0.result;
}, {"params": ["S"], "kind": "procedure", "ptypes": ["String"]});
  U.method("Tform1", "FormCanResize", async function FormCanResize(Self, p0, p1, p2, p3) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "newwidth": $.asRef(p1), "newheight": $.asRef(p2), "resize": $.asRef(p3), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await L0["resize"].set(false);
  return L0.result;
}, {"params": ["Sender", "NewWidth", "NewHeight", "Resize"], "kind": "procedure", "ptypes": ["TObject", "Integer", "Integer", "Boolean"]});
  U.method("Tform1", "FormCreate", async function FormCreate(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.stmt((await $.mcall((await $.v(C, "SBTranslateProc")), "TranslateAllCompForms", [Self, (await $.mv((await $.v(C, "sboapiDataModule")), "OrPack_SL"))])));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("Tform1", "ToolButton14Click", async function ToolButton14Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "i": 0};
  await $.fixArgs(L0, ["sender"]);
  L0["rs_delshedulepayments"] = " Silinməsinə Əminsinizmi? ";
  if ($.truthy($.eq((await $.call(C, "MessageDlg", [L0["rs_delshedulepayments"], (await $.v(C, "mtConfirmation")), [(await $.v(C, "mbYes")), (await $.v(C, "mbNo"))], 0])), (await $.v(C, "mrNO"))))) {
    return L0.result;
  }
  {
    const $t5 = (await $.v(C, "SchduleGrid"));
    { const $t6 = 0;
      await $.wset([$t5], "I", $.sub((await $.mv((await $.wv([$t5], "SelectedRows", C, false)), "Count")), 1), { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true });
      let $t7 = true;
      for (;;) {
        if (!$t7) { await $.wset([$t5], "I", $.succ((await $.wv([$t5], "I", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false)), -1), { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }); }
        $t7 = false;
        if (!($.ord((await $.wv([$t5], "I", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false))) >= $.ord($t6))) break;
        await $.stmt((await $.mcall((await $.mv((await $.wv([$t5], "DataSource", C, false)), "DataSet")), "GotoBookmark", [(await $.wcall([$t5], "Pointer", [(await $.idx((await $.wv([$t5], "SelectedRows", C, false)), [(await $.wv([$t5], "I", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false))]))], C))])));
        await $.mcall((await $.mv((await $.wv([$t5], "DataSource", C, false)), "DataSet")), "Delete", []);
        await $.tick();
      }
    }
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("Tform1", "ToolButton18Click", async function ToolButton18Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "interval": null};
  await $.fixArgs(L0, ["sender"]);
  await $.set(C, "PaymentShedule_new", (await $.mcall((await $.v(C, "TPaymentShedule_new")), "Create", [Self])));
  {
    const $t8 = (await $.v(C, "PaymentShedule_new"));
    const $t9 = (await $.wv([$t8], "ScheduleDataModule_new", C, false));
    const $t10 = (await $.wv([$t8, $t9], "sbcm_percent_converting", C, false));
    await $.wset([$t8, $t9, $t10], "interval", (await $.wcall([$t8, $t9, $t10], "CallIntegerFunction", ["getdateinterval", [(await $.wcall([$t8, $t9, $t10], "strtodate", [(await $.mv((await $.wv([$t8, $t9, $t10], "DBEdit3", C, false)), "text"))], C)), (await $.wcall([$t8, $t9, $t10], "strtodate", [(await $.mv((await $.wv([$t8, $t9, $t10], "DBEdit4", C, false)), "text"))], C))]], C)), { get: async () => L0["interval"], set: async (v) => { L0["interval"] = v; }, local: true });
    await $.mset((await $.wv([$t8, $t9, $t10], "CMCurrencyEdit1", C, false)), "Value", (await $.wcall([$t8, $t9, $t10], "CallIntegerFunction", ["getconverteddebt", [(await $.wv([$t8, $t9, $t10], "interval", { get: async () => L0["interval"], set: async (v) => { L0["interval"] = v; }, local: true }, false)), (await $.wcall([$t8, $t9, $t10], "strtofloat", [(await $.mv((await $.wv([$t8, $t9, $t10], "DBEdit1", C, false)), "text"))], C)), (await $.wcall([$t8, $t9, $t10], "strtofloat", [(await $.mv((await $.wv([$t8, $t9, $t10], "DBEdit2", C, false)), "text"))], C))]], C)));
    await $.mset((await $.wv([$t8, $t9, $t10], "Edit1", C, false)), "Text", (await $.mv((await $.wv([$t8, $t9, $t10], "OracleDataSet3DATEINTERVAL", C, false)), "AsString")));
    await $.mset((await $.wv([$t8, $t9, $t10], "ToolButton1", C, false)), "Enabled", (await $.wv([$t8, $t9, $t10], "true", C, false)));
    await $.mset((await $.wv([$t8, $t9, $t10], "ToolButton14", C, false)), "Enabled", (await $.wv([$t8, $t9, $t10], "true", C, false)));
    await $.stmt($.wcall([$t8, $t9, $t10], "ShowModal", [], C));
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("Tform1", "ToolButton1Click", async function ToolButton1Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t11 = (await $.v(C, "ScheduleDataModule_new"));
    const $t12 = (await $.mv((await $.wv([$t11], "OracleDataSet2", C, false)), "Session"));
    await $.stmt((await $.wcall([$t11, $t12], "ApplyUpdates", [[(await $.wv([$t11, $t12], "OracleDataSet2", C, false))], (await $.wv([$t11, $t12], "True", C, false))], C)));
    await $.stmt($.wcall([$t11, $t12], "Commit", [], C));
    await $.mset((await $.wv([$t11, $t12], "ToolButton1", C, false)), "Enabled", (await $.wv([$t11, $t12], "FALSE", C, false)));
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.setInitialization(async function __initialization(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: undefined};
  await $.set(C, "form1", (await $.mcall((await $.v(C, "Tform1")), "Create", [(await $.v(C, "CommonApplication"))])));
  await $.set(C, "ScheduleDataModule_new", (await $.mcall((await $.v(C, "TScheduleDataModule_new")), "Create", [(await $.v(C, "CommonApplication"))])));
  return L0.result;
});
  return U;
}
