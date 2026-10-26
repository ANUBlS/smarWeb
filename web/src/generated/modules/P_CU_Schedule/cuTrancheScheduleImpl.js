// Generated from cuTrancheScheduleImpl.pas by pas2js — do not edit by hand; regenerate instead.
/* eslint-disable */
// @ts-nocheck

export default function define($) {
  const U = $.unit("cuTrancheScheduleImpl", ["Windows", "Messages", "SysUtils", "Classes", "Graphics", "Controls", "Forms", "Dialogs", "ExtCtrls", "StdCtrls", "DBCtrls", "Grids", "DBGrids", "Mask", "DBGridEh", "Buttons", "ComCtrls", "ActnList", "ImgList", "ToolWin", "CMCurrencyEdit", "cuTrancheScheduleDataModuleImpl", "cuCommonDecls", "cuTrSchedAddImpl", "cuTrSchedUpdImpl", "SbSystem"]);
  const C = [U];
  U.defClass("TTrancheScheduleForm", "TForm", {"groupbox1": {"name": "GroupBox1", "type": "TGroupBox"}, "dbedit5": {"name": "DBEdit5", "type": "TDBEdit"}, "toolbar1": {"name": "ToolBar1", "type": "TToolBar"}, "schdulegrid": {"name": "SchduleGrid", "type": "TDBGridEh"}, "scheludeactionlist": {"name": "ScheludeActionList", "type": "TActionList"}, "toolbarimages": {"name": "ToolBarImages", "type": "TImageList"}, "actsave": {"name": "actSave", "type": "TAction"}, "actexit": {"name": "actExit", "type": "TAction"}, "actadd": {"name": "actAdd", "type": "TAction"}, "actedit": {"name": "actEdit", "type": "TAction"}, "actdel": {"name": "actDel", "type": "TAction"}, "toolbutton4": {"name": "ToolButton4", "type": "TToolButton"}, "coolbar1": {"name": "CoolBar1", "type": "TCoolBar"}, "toolbar2": {"name": "ToolBar2", "type": "TToolBar"}, "toolbutton5": {"name": "ToolButton5", "type": "TToolButton"}, "toolbutton8": {"name": "ToolButton8", "type": "TToolButton"}, "toolbutton6": {"name": "ToolButton6", "type": "TToolButton"}, "toolbutton9": {"name": "ToolButton9", "type": "TToolButton"}, "toolbutton7": {"name": "ToolButton7", "type": "TToolButton"}, "toolbutton2": {"name": "ToolButton2", "type": "TToolButton"}, "label2": {"name": "Label2", "type": "TLabel"}, "dbedit1": {"name": "DBEdit1", "type": "TDBEdit"}, "label1": {"name": "Label1", "type": "TLabel"}, "dbedit2": {"name": "DBEdit2", "type": "TDBEdit"}, "label3": {"name": "Label3", "type": "TLabel"}}, {});
  U.init(async () => {
    U.const("er_Dublicate", "Tarix təkrarlanır");
    U.var_("TrancheScheduleForm", null, "TTrancheScheduleForm");
  });
  U.method("TTrancheScheduleForm", "ShowTrancheSchedule", async function ShowTrancheSchedule(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: undefined, "creditid": 0};
  L0["rsscheludecaption"] = "%s № li müqavilə üçün verilmə planı.";
  await $.set(C, "TrancheSheduleDataMod", (await $.mcall((await $.v(C, "TTrancheSheduleDataMod")), "Create", [Self])));
  await $.set(C, "frmAddTrSched", (await $.mcall((await $.v(C, "TfrmAddTrSched")), "Create", [Self])));
  await $.set(C, "frmUpdTrSched", (await $.mcall((await $.v(C, "TfrmUpdTrSched")), "Create", [Self])));
  await $.set(C, "Caption", (await $.call(C, "Format", [L0["rsscheludecaption"], [(await $.v(C, "Get_SelectedCrdNo"))]])));
  L0["creditid"] = (await $.v(C, "Get_SelectedCrdID"));
  {
    const $t1 = (await $.v(C, "TrancheSheduleDataMod"));
    await $.stmt((await $.mcall((await $.wv([$t1], "AboutContractDataSet", C, false)), "SetVariable", ["ID", (await $.wv([$t1], "CreditID", { get: async () => L0["creditid"], set: async (v) => { L0["creditid"] = v; }, local: true }, false))])));
    await $.mcall((await $.wv([$t1], "AboutContractDataSet", C, false)), "Open", []);
    await $.stmt((await $.mcall((await $.wv([$t1], "TrancheScheduleDataSet", C, false)), "SetVariable", ["CREDITID", (await $.wv([$t1], "CreditID", { get: async () => L0["creditid"], set: async (v) => { L0["creditid"] = v; }, local: true }, false))])));
    await $.mcall((await $.wv([$t1], "TrancheScheduleDataSet", C, false)), "Open", []);
  }
  await $.stmt($.call(C, "ShowModal", []));
  return L0.result;
}, {"params": [], "kind": "procedure", "ptypes": []});
  U.method("TTrancheScheduleForm", "FormKeyPress", async function FormKeyPress(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "key": $.asRef(p1), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.eq((await $.call(C, "ORD", [(await L0["key"].get())])), (await $.v(C, "VK_ESCAPE"))))) {
    await L0["key"].set("\u0000");
    await $.stmt($.call(C, "Close", []));
  }
  return L0.result;
}, {"params": ["Sender", "Key"], "kind": "procedure", "ptypes": ["TObject", "Char"]});
  U.method("TTrancheScheduleForm", "actExitExecute", async function actExitExecute(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.stmt($.call(C, "Close", []));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TTrancheScheduleForm", "actSaveExecute", async function actSaveExecute(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mcall((await $.mv((await $.mv((await $.v(C, "TrancheSheduleDataMod")), "TrancheScheduleDataSet")), "Session")), "Commit", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TTrancheScheduleForm", "actAddExecute", async function actAddExecute(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t2 = (await $.v(C, "frmAddTrSched"));
    const $t3 = (await $.wv([$t2], "TrancheSheduleDataMod", C, false));
    await $.mset((await $.wv([$t2, $t3], "trchDate", C, false)), "Date", (await $.wv([$t2, $t3], "Get_CurrentDate", C, false)));
    await $.mset((await $.wv([$t2, $t3], "trchAmount", C, false)), "Text", "0");
    await $.stmt($.wcall([$t2, $t3], "ShowModal", [], C));
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TTrancheScheduleForm", "actEditExecute", async function actEditExecute(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t4 = (await $.v(C, "frmUpdTrSched"));
    const $t5 = (await $.wv([$t4], "TrancheSheduleDataMod", C, false));
    await $.mset((await $.wv([$t4, $t5], "trchDate", C, false)), "Date", (await $.mv((await $.wv([$t4, $t5], "TrancheScheduleDataSetTRCHDATE", C, false)), "AsDateTime")));
    await $.mset((await $.wv([$t4, $t5], "trchAmount", C, false)), "Text", (await $.mv((await $.wv([$t4, $t5], "TrancheScheduleDataSetTRCHAMOUNT", C, false)), "AsString")));
    await $.stmt($.wcall([$t4, $t5], "ShowModal", [], C));
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TTrancheScheduleForm", "actDelExecute", async function actDelExecute(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  L0["rs_deltrancheschedule"] = "%d nömrəli plan silinəcək. Razısınızmı?";
  {
    const $t6 = (await $.v(C, "TrancheSheduleDataMod"));
    const $t7 = (await $.wv([$t6], "CM_SCHEDULE", C, false));
    if ($.truthy($.eq((await $.wcall([$t6, $t7], "MessageDlg", [(await $.wcall([$t6, $t7], "Format", [(await $.wv([$t6, $t7], "rs_DelTrancheSchedule", { get: async () => L0["rs_deltrancheschedule"], set: async (v) => { L0["rs_deltrancheschedule"] = v; }, local: true }, false)), [(await $.mv((await $.wv([$t6, $t7], "TrancheScheduleDataSetID", C, false)), "AsInteger"))]], C)), (await $.wv([$t6, $t7], "mtConfirmation", C, false)), [(await $.wv([$t6, $t7], "mbYes", C, false)), (await $.wv([$t6, $t7], "mbNo", C, false))], 0], C)), (await $.wv([$t6, $t7], "IDYES", C, false))))) {
      await $.stmt((await $.wcall([$t6, $t7], "CallProcedure", ["TrSchedule_Del", [(await $.mv((await $.wv([$t6, $t7], "TrancheScheduleDataSetID", C, false)), "AsVariant"))]], C)));
      await $.mcall((await $.wv([$t6, $t7], "Session", C, false)), "Commit", []);
      await $.mcall((await $.wv([$t6, $t7], "TrancheScheduleDataSet", C, false)), "Refresh", []);
    }
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TTrancheScheduleForm", "SchduleGridKeyPress", async function SchduleGridKeyPress(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "key": $.asRef(p1), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.eq((await $.call(C, "ord", [(await L0["key"].get())])), (await $.v(C, "VK_RETURN"))))) {
    await $.stmt((await $.call(C, "actEditExecute", [L0["sender"]])));
  }
  return L0.result;
}, {"params": ["Sender", "Key"], "kind": "procedure", "ptypes": ["TObject", "Char"]});
  U.method("TTrancheScheduleForm", "FormCanResize", async function FormCanResize(Self, p0, p1, p2, p3) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "newwidth": $.asRef(p1), "newheight": $.asRef(p2), "resize": $.asRef(p3), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await L0["resize"].set(false);
  return L0.result;
}, {"params": ["Sender", "NewWidth", "NewHeight", "Resize"], "kind": "procedure", "ptypes": ["TObject", "Integer", "Integer", "Boolean"]});
  return U;
}
