// Generated from NewDepositsSheduleImpl.pas by pas2js — do not edit by hand; regenerate instead.
/* eslint-disable */
// @ts-nocheck

export default function define($) {
  const U = $.unit("NewDepositsSheduleImpl", ["Windows", "Messages", "SysUtils", "Classes", "Graphics", "Controls", "Forms", "LDialogs", "StdCtrls", "Mask", "DBCtrls", "ComCtrls", "ToolWin", "ActnList", "ImgList", "Grids", "DBGridEh", "GridsEh", "DBGridEhGrouping", "NewCommonDeclsImpl", "NewDepositsScheduleDataModuleImpl", "NewDepositsPaymentSheduleimpl", "SBTranslateProc", "sboapiDataModuleimpl"]);
  const C = [U];
  U.defClass("TNewDepositsFrmShedule", "TForm", {"groupbox1": {"name": "GroupBox1", "type": "TGroupBox"}, "dbedit5": {"name": "DBEdit5", "type": "TDBEdit"}, "groupbox2": {"name": "GroupBox2", "type": "TGroupBox"}, "label1": {"name": "Label1", "type": "TLabel"}, "label2": {"name": "Label2", "type": "TLabel"}, "label3": {"name": "Label3", "type": "TLabel"}, "label7": {"name": "Label7", "type": "TLabel"}, "dbedit1": {"name": "DBEdit1", "type": "TDBEdit"}, "dbedit2": {"name": "DBEdit2", "type": "TDBEdit"}, "dbedit3": {"name": "DBEdit3", "type": "TDBEdit"}, "dbedit4": {"name": "DBEdit4", "type": "TDBEdit"}, "schdulegrid": {"name": "SchduleGrid", "type": "TDBGridEh"}, "scheludeactionlist": {"name": "ScheludeActionList", "type": "TActionList"}, "actionsave": {"name": "ActionSave", "type": "TAction"}, "actionprint": {"name": "ActionPrint", "type": "TAction"}, "actionclose": {"name": "ActionClose", "type": "TAction"}, "actionadd": {"name": "ActionAdd", "type": "TAction"}, "actionedit": {"name": "ActionEdit", "type": "TAction"}, "actiondelete": {"name": "ActionDelete", "type": "TAction"}, "actionrefresh": {"name": "ActionRefresh", "type": "TAction"}, "actionannuty": {"name": "ActionAnnuty", "type": "TAction"}, "actionchange": {"name": "ActionChange", "type": "TAction"}, "actionpr": {"name": "ActionPr", "type": "TAction"}, "toolbar1": {"name": "ToolBar1", "type": "TToolBar"}, "toolbutton8": {"name": "ToolButton8", "type": "TToolButton"}, "toolbutton1": {"name": "ToolButton1", "type": "TToolButton"}, "toolbutton4": {"name": "ToolButton4", "type": "TToolButton"}, "toolbutton2": {"name": "ToolButton2", "type": "TToolButton"}, "toolbutton5": {"name": "ToolButton5", "type": "TToolButton"}, "toolbutton6": {"name": "ToolButton6", "type": "TToolButton"}, "toolbutton7": {"name": "ToolButton7", "type": "TToolButton"}, "toolbutton9": {"name": "ToolButton9", "type": "TToolButton"}, "toolbar2": {"name": "ToolBar2", "type": "TToolBar"}, "toolbutton10": {"name": "ToolButton10", "type": "TToolButton"}, "toolbutton11": {"name": "ToolButton11", "type": "TToolButton"}, "toolbutton12": {"name": "ToolButton12", "type": "TToolButton"}, "toolbutton13": {"name": "ToolButton13", "type": "TToolButton"}, "toolbutton14": {"name": "ToolButton14", "type": "TToolButton"}, "toolbutton15": {"name": "ToolButton15", "type": "TToolButton"}, "toolbutton16": {"name": "ToolButton16", "type": "TToolButton"}, "toolbutton17": {"name": "ToolButton17", "type": "TToolButton"}, "toolbutton18": {"name": "ToolButton18", "type": "TToolButton"}, "toolbutton3": {"name": "ToolButton3", "type": "TToolButton"}, "toolbutton19": {"name": "ToolButton19", "type": "TToolButton"}, "toolbarimages": {"name": "ToolBarImages", "type": "TImageList"}}, {});
  U.init(async () => {
    U.var_("NewDepositsFrmShedule", null, "TNewDepositsFrmShedule");
    U.var_("depositid", 0, "integer");
  });
  U.func("exportproc", async function exportproc(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"s": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["s"]);
  L0["rsscheludecaption"] = "%s № li müqavilə üçün ödəmə planı.";
  await $.mset((await $.v(C, "NewDepositsFrmShedule")), "Caption", (await $.call(C, "Format", [L0["rsscheludecaption"], [(await $.v(C, "Get_SelectedContNo"))]])));
  await $.set(C, "depositid", (await $.v(C, "Get_SelectedContID")));
  {
    const $t1 = (await $.mv((await $.v(C, "NewDepositsScheduleDataModule")), "CustName"));
    await $.stmt($.wcall([$t1], "close", [], C));
    await $.stmt($.wcall([$t1], "ClearVariables", [], C));
    await $.stmt((await $.wcall([$t1], "SetVariable", ["ID", (await $.wv([$t1], "depositid", C, false))], C)));
    await $.stmt($.wcall([$t1], "Open", [], C));
  }
  {
    const $t2 = (await $.mv((await $.v(C, "NewDepositsScheduleDataModule")), "OracleDataSet1"));
    await $.stmt($.wcall([$t2], "close", [], C));
    await $.stmt($.wcall([$t2], "ClearVariables", [], C));
    await $.stmt((await $.wcall([$t2], "SetVariable", ["ID", (await $.wv([$t2], "depositid", C, false))], C)));
    await $.stmt($.wcall([$t2], "Open", [], C));
  }
  {
    const $t3 = (await $.mv((await $.v(C, "NewDepositsScheduleDataModule")), "OracleDataSet2"));
    await $.stmt($.wcall([$t3], "close", [], C));
    await $.stmt($.wcall([$t3], "ClearVariables", [], C));
    await $.stmt((await $.wcall([$t3], "SetVariable", ["id", (await $.wv([$t3], "depositid", C, false))], C)));
    await $.stmt($.wcall([$t3], "Open", [], C));
  }
  await $.mcall((await $.v(C, "NewDepositsFrmShedule")), "ShowModal", []);
  return L0.result;
}, {"params": ["S"], "kind": "procedure", "ptypes": ["String"]});
  U.method("TNewDepositsFrmShedule", "FormCanResize", async function FormCanResize(Self, p0, p1, p2, p3) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "newwidth": $.asRef(p1), "newheight": $.asRef(p2), "resize": $.asRef(p3), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await L0["resize"].set(false);
  return L0.result;
}, {"params": ["Sender", "NewWidth", "NewHeight", "Resize"], "kind": "procedure", "ptypes": ["TObject", "Integer", "Integer", "Boolean"]});
  U.method("TNewDepositsFrmShedule", "FormCreate", async function FormCreate(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.stmt((await $.mcall((await $.v(C, "SBTranslateProc")), "TranslateAllCompForms", [Self, (await $.mv((await $.v(C, "sboapiDataModule")), "OrPack_SL"))])));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TNewDepositsFrmShedule", "ToolButton14Click", async function ToolButton14Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "i": 0};
  await $.fixArgs(L0, ["sender"]);
  L0["rs_delshedulepayments"] = " Silinməsinə Əminsinizmi? ";
  if ($.truthy($.eq((await $.call(C, "MessageDlg", [L0["rs_delshedulepayments"], (await $.v(C, "mtConfirmation")), [(await $.v(C, "mbYes")), (await $.v(C, "mbNo"))], 0])), (await $.v(C, "mrNO"))))) {
    return L0.result;
  }
  {
    const $t4 = (await $.v(C, "SchduleGrid"));
    { const $t5 = 0;
      await $.wset([$t4], "I", $.sub((await $.mv((await $.wv([$t4], "SelectedRows", C, false)), "Count")), 1), { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true });
      let $t6 = true;
      for (;;) {
        if (!$t6) { await $.wset([$t4], "I", $.succ((await $.wv([$t4], "I", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false)), -1), { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }); }
        $t6 = false;
        if (!($.ord((await $.wv([$t4], "I", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false))) >= $.ord($t5))) break;
        await $.stmt((await $.mcall((await $.mv((await $.wv([$t4], "DataSource", C, false)), "DataSet")), "GotoBookmark", [(await $.wcall([$t4], "Pointer", [(await $.idx((await $.wv([$t4], "SelectedRows", C, false)), [(await $.wv([$t4], "I", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false))]))], C))])));
        await $.mcall((await $.mv((await $.wv([$t4], "DataSource", C, false)), "DataSet")), "Delete", []);
        await $.tick();
      }
    }
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TNewDepositsFrmShedule", "ToolButton18Click", async function ToolButton18Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "interval": null, "dayinterval": null, "countinterval": null};
  await $.fixArgs(L0, ["sender"]);
  await $.set(C, "NewDepositsPaymentShedule", (await $.mcall((await $.v(C, "TNewDepositsPaymentShedule")), "Create", [Self])));
  {
    const $t7 = (await $.v(C, "NewDepositsPaymentShedule"));
    const $t8 = (await $.wv([$t7], "NewDepositsScheduleDataModule", C, false));
    const $t9 = (await $.wv([$t7, $t8], "dm_calculator", C, false));
    await $.mset((await $.wv([$t7, $t8, $t9], "DateTimePicker1", C, false)), "DateTime", (await $.mcall((await $.wv([$t7, $t8, $t9], "dm_stored_programs", C, false)), "CallDateFunction", ["GetFirstPaymentDate", [(await $.wv([$t7, $t8, $t9], "depositid", C, false))]])));
    await $.wset([$t7, $t8, $t9], "interval", (await $.wcall([$t7, $t8, $t9], "CallIntegerFunction", ["getdateinterval", [(await $.wcall([$t7, $t8, $t9], "strtodate", [(await $.mv((await $.wv([$t7, $t8, $t9], "DBEdit3", C, false)), "text"))], C)), (await $.wcall([$t7, $t8, $t9], "strtodate", [(await $.mv((await $.wv([$t7, $t8, $t9], "DBEdit4", C, false)), "text"))], C))]], C)), { get: async () => L0["interval"], set: async (v) => { L0["interval"] = v; }, local: true });
    await $.mset((await $.wv([$t7, $t8, $t9], "CMCurrencyRest", C, false)), "Value", (await $.mcall((await $.wv([$t7, $t8, $t9], "dm_stored_programs", C, false)), "CallIntegerFunction", ["GetFacticalDebt", [(await $.wv([$t7, $t8, $t9], "depositid", C, false))]])));
    await $.wset([$t7, $t8, $t9], "Dayinterval", $.fdiv((await $.mcall((await $.wv([$t7, $t8, $t9], "dm_stored_programs", C, false)), "CallIntegerFunction", ["GetDepTypeDay", [(await $.wv([$t7, $t8, $t9], "depositid", C, false))]])), 10), { get: async () => L0["dayinterval"], set: async (v) => { L0["dayinterval"] = v; }, local: true });
    await $.wset([$t7, $t8, $t9], "Countinterval", $.fdiv((await $.wv([$t7, $t8, $t9], "interval", { get: async () => L0["interval"], set: async (v) => { L0["interval"] = v; }, local: true }, false)), (await $.wv([$t7, $t8, $t9], "Dayinterval", { get: async () => L0["dayinterval"], set: async (v) => { L0["dayinterval"] = v; }, local: true }, false))), { get: async () => L0["countinterval"], set: async (v) => { L0["countinterval"] = v; }, local: true });
    await $.mset((await $.wv([$t7, $t8, $t9], "EditPeriod", C, false)), "Text", (await $.wv([$t7, $t8, $t9], "Dayinterval", { get: async () => L0["dayinterval"], set: async (v) => { L0["dayinterval"] = v; }, local: true }, false)));
    await $.mset((await $.wv([$t7, $t8, $t9], "ToolButton1", C, false)), "Enabled", (await $.wv([$t7, $t8, $t9], "true", C, false)));
    await $.mset((await $.wv([$t7, $t8, $t9], "ToolButton14", C, false)), "Enabled", (await $.wv([$t7, $t8, $t9], "true", C, false)));
    await $.stmt($.wcall([$t7, $t8, $t9], "ShowModal", [], C));
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TNewDepositsFrmShedule", "ToolButton1Click", async function ToolButton1Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t10 = (await $.v(C, "NewDepositsScheduleDataModule"));
    const $t11 = (await $.mv((await $.wv([$t10], "OracleDataSet2", C, false)), "Session"));
    await $.stmt((await $.wcall([$t10, $t11], "ApplyUpdates", [[(await $.wv([$t10, $t11], "OracleDataSet2", C, false))], (await $.wv([$t10, $t11], "True", C, false))], C)));
    await $.stmt($.wcall([$t10, $t11], "Commit", [], C));
    await $.mset((await $.wv([$t10, $t11], "ToolButton1", C, false)), "Enabled", (await $.wv([$t10, $t11], "FALSE", C, false)));
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.setInitialization(async function __initialization(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: undefined};
  await $.set(C, "NewDepositsFrmShedule", (await $.mcall((await $.v(C, "TNewDepositsFrmShedule")), "Create", [(await $.v(C, "CommonApplication"))])));
  await $.set(C, "NewDepositsScheduleDataModule", (await $.mcall((await $.v(C, "TNewDepositsScheduleDataModule")), "Create", [(await $.v(C, "CommonApplication"))])));
  return L0.result;
});
  return U;
}
