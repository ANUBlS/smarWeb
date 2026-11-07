// Generated from admUserGrantsImpl.pas by pas2js — do not edit by hand; regenerate instead.
/* eslint-disable */
// @ts-nocheck

export default function define($) {
  const U = $.unit("admUserGrantsImpl", ["Windows", "Messages", "SysUtils", "Classes", "Graphics", "Controls", "Forms", "Dialogs", "StdCtrls", "CheckLst", "Evanescence", "DBCtrls", "ExtCtrls", "Grids", "DBGrids", "Buttons", "ActnList", "NLSLocalizer", "admDataModule", "sboapiDataModuleImpl", "SBTranslateProc"]);
  const C = [U];
  U.defClass("TfrmUserGrants", "TForm", {"panel1": {"name": "Panel1", "type": "TPanel"}, "speedbutton1": {"name": "SpeedButton1", "type": "TSpeedButton"}, "speedbutton2": {"name": "SpeedButton2", "type": "TSpeedButton"}, "speedbutton3": {"name": "SpeedButton3", "type": "TSpeedButton"}, "speedbutton4": {"name": "SpeedButton4", "type": "TSpeedButton"}, "btncommit": {"name": "btnCommit", "type": "TSpeedButton"}, "btnclose": {"name": "btnClose", "type": "TSpeedButton"}, "label1": {"name": "Label1", "type": "TLabel"}, "label2": {"name": "Label2", "type": "TLabel"}, "lothergrants": {"name": "lOtherGrants", "type": "TEvanescence"}, "lusergrants": {"name": "lUserGrants", "type": "TEvanescence"}, "actsmain": {"name": "actsMain", "type": "TActionList"}, "actaddusergrants": {"name": "actAddUserGrants", "type": "TAction"}, "actdelusergrants": {"name": "actDelUserGrants", "type": "TAction"}, "actcommit": {"name": "actCommit", "type": "TAction"}, "actrollback": {"name": "actRollback", "type": "TAction"}, "cbfullcontrol": {"name": "cbFullControl", "type": "TCheckBox"}}, {});
  U.init(async () => {
    U.var_("frmUserGrants", null, "TfrmUserGrants");
  });
  U.method("TfrmUserGrants", "lOtherGrantsClickCheck", async function lOtherGrantsClickCheck(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mset((await $.v(C, "actAddUserGrants")), "Enabled", $.gt((await $.mv((await $.mv((await $.v(C, "lOtherGrants")), "GetCheckedKeyList")), "Count")), 0));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TfrmUserGrants", "lUserGrantsClickCheck", async function lUserGrantsClickCheck(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mset((await $.v(C, "actDelUserGrants")), "Enabled", $.gt((await $.mv((await $.mv((await $.v(C, "lUserGrants")), "GetCheckedKeyList")), "Count")), 0));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TfrmUserGrants", "lOtherGrantsKeyUp", async function lOtherGrantsKeyUp(Self, p0, p1, p2) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "key": $.asRef(p1), "shift": $.copyArg(p2), result: undefined};
  await $.fixArgs(L0, ["sender", "shift"]);
  if ($.truthy($.eq((await L0["key"].get()), (await $.v(C, "VK_SPACE"))))) {
    await $.stmt((await $.call(C, "lOtherGrantsClickCheck", [L0["sender"]])));
  }
  return L0.result;
}, {"params": ["Sender", "Key", "Shift"], "kind": "procedure", "ptypes": ["TObject", "Word", "TShiftState"]});
  U.method("TfrmUserGrants", "lUserGrantsKeyUp", async function lUserGrantsKeyUp(Self, p0, p1, p2) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "key": $.asRef(p1), "shift": $.copyArg(p2), result: undefined};
  await $.fixArgs(L0, ["sender", "shift"]);
  if ($.truthy($.eq((await L0["key"].get()), (await $.v(C, "VK_SPACE"))))) {
    await $.stmt((await $.call(C, "lUserGrantsClickCheck", [L0["sender"]])));
  }
  return L0.result;
}, {"params": ["Sender", "Key", "Shift"], "kind": "procedure", "ptypes": ["TObject", "Word", "TShiftState"]});
  U.method("TfrmUserGrants", "actAddUserGrantsExecute", async function actAddUserGrantsExecute(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "i": 0};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t1 = (await $.wobj(C, "admDM"));
    const $t2 = (await $.wv([$t1], "lOtherGrants", C, false));
    { const $t3 = $.sub((await $.mv((await $.wv([$t1, $t2], "KeyItems", C, false)), "Count")), 1);
      await $.wset([$t1, $t2], "i", 0, { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true });
      let $t4 = true;
      for (;;) {
        if (!$t4) { await $.wset([$t1, $t2], "i", $.succ((await $.wv([$t1, $t2], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false)), 1), { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }); }
        $t4 = false;
        if (!($.ord((await $.wv([$t1, $t2], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false))) <= $.ord($t3))) break;
        if ($.truthy((await $.idx((await $.wv([$t1, $t2], "Checked", C, false)), [(await $.wv([$t1, $t2], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false))])))) {
          await $.stmt((await $.mcall((await $.wv([$t1, $t2], "CM_ADMIN", C, false)), "CallProcedure", ["addusergrant", [(await $.idx((await $.wv([$t1, $t2], "KeyItems", C, false)), [(await $.wv([$t1, $t2], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false))])), (await $.mv((await $.wv([$t1, $t2], "CredUsersDataSetSYSTEMID", C, false)), "AsInteger"))]])));
        }
        await $.tick();
      }
    }
    await $.stmt((await $.wcall([$t1, $t2], "RefreshDataSet", [(await $.wv([$t1, $t2], "OtherGrantsDataSet", C, false))], C)));
    await $.stmt((await $.wcall([$t1, $t2], "RefreshDataSet", [(await $.wv([$t1, $t2], "UserGrantsDataSet", C, false))], C)));
    await $.mcall((await $.wv([$t1, $t2], "lOtherGrants", C, false)), "RefreshList", []);
    await $.mcall((await $.wv([$t1, $t2], "lUserGrants", C, false)), "RefreshList", []);
    await $.stmt((await $.wcall([$t1, $t2], "lOtherGrantsClickCheck", [(await $.wv([$t1, $t2], "Sender", { get: async () => L0["sender"], set: async (v) => { L0["sender"] = v; }, local: true }, false))], C)));
    await $.stmt((await $.wcall([$t1, $t2], "lUserGrantsClickCheck", [(await $.wv([$t1, $t2], "Sender", { get: async () => L0["sender"], set: async (v) => { L0["sender"] = v; }, local: true }, false))], C)));
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TfrmUserGrants", "actDelUserGrantsExecute", async function actDelUserGrantsExecute(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "i": 0};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t5 = (await $.wobj(C, "admDM"));
    const $t6 = (await $.wv([$t5], "lUserGrants", C, false));
    { const $t7 = $.sub((await $.mv((await $.wv([$t5, $t6], "KeyItems", C, false)), "Count")), 1);
      await $.wset([$t5, $t6], "i", 0, { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true });
      let $t8 = true;
      for (;;) {
        if (!$t8) { await $.wset([$t5, $t6], "i", $.succ((await $.wv([$t5, $t6], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false)), 1), { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }); }
        $t8 = false;
        if (!($.ord((await $.wv([$t5, $t6], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false))) <= $.ord($t7))) break;
        if ($.truthy((await $.idx((await $.wv([$t5, $t6], "Checked", C, false)), [(await $.wv([$t5, $t6], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false))])))) {
          await $.stmt((await $.mcall((await $.wv([$t5, $t6], "CM_ADMIN", C, false)), "CallProcedure", ["delusergrant", [(await $.idx((await $.wv([$t5, $t6], "KeyItems", C, false)), [(await $.wv([$t5, $t6], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false))])), (await $.mv((await $.wv([$t5, $t6], "CredUsersDataSetSYSTEMID", C, false)), "AsInteger"))]])));
        }
        await $.tick();
      }
    }
    await $.stmt((await $.wcall([$t5, $t6], "RefreshDataSet", [(await $.wv([$t5, $t6], "OtherGrantsDataSet", C, false))], C)));
    await $.stmt((await $.wcall([$t5, $t6], "RefreshDataSet", [(await $.wv([$t5, $t6], "UserGrantsDataSet", C, false))], C)));
    await $.mcall((await $.wv([$t5, $t6], "lOtherGrants", C, false)), "RefreshList", []);
    await $.mcall((await $.wv([$t5, $t6], "lUserGrants", C, false)), "RefreshList", []);
    await $.stmt((await $.wcall([$t5, $t6], "lOtherGrantsClickCheck", [(await $.wv([$t5, $t6], "Sender", { get: async () => L0["sender"], set: async (v) => { L0["sender"] = v; }, local: true }, false))], C)));
    await $.stmt((await $.wcall([$t5, $t6], "lUserGrantsClickCheck", [(await $.wv([$t5, $t6], "Sender", { get: async () => L0["sender"], set: async (v) => { L0["sender"] = v; }, local: true }, false))], C)));
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TfrmUserGrants", "SpeedButton3Click", async function SpeedButton3Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mcall((await $.v(C, "lOtherGrants")), "ToggleAll", []);
  await $.stmt((await $.call(C, "lOtherGrantsClickCheck", [L0["sender"]])));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TfrmUserGrants", "SpeedButton4Click", async function SpeedButton4Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mcall((await $.v(C, "lUserGrants")), "ToggleAll", []);
  await $.stmt((await $.call(C, "lUserGrantsClickCheck", [L0["sender"]])));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TfrmUserGrants", "actCommitExecute", async function actCommitExecute(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mcall((await $.mv((await $.v(C, "sboapiDataModule")), "SBSession")), "Commit", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TfrmUserGrants", "actRollbackExecute", async function actRollbackExecute(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mcall((await $.mv((await $.v(C, "sboapiDataModule")), "SBSession")), "Rollback", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TfrmUserGrants", "FormCloseQuery", async function FormCloseQuery(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "canclose": $.asRef(p1), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.stmt((await $.call(C, "actRollbackExecute", [L0["sender"]])));
  return L0.result;
}, {"params": ["Sender", "CanClose"], "kind": "procedure", "ptypes": ["TObject", "Boolean"]});
  U.method("TfrmUserGrants", "FormCreate", async function FormCreate(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.stmt((await $.mcall((await $.v(C, "SBTranslateProc")), "TranslateAllCompForms", [Self, (await $.mv((await $.v(C, "sboapiDataModule")), "OrPack_SL"))])));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TfrmUserGrants", "btnCloseClick", async function btnCloseClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.stmt($.call(C, "Close", []));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TfrmUserGrants", "FormKeyDown", async function FormKeyDown(Self, p0, p1, p2) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "key": $.asRef(p1), "shift": $.copyArg(p2), result: undefined};
  await $.fixArgs(L0, ["sender", "shift"]);
  if ($.truthy($.eq((await L0["key"].get()), (await $.v(C, "VK_ESCAPE"))))) {
    await $.stmt((await $.call(C, "btnCloseClick", [L0["sender"]])));
  }
  return L0.result;
}, {"params": ["Sender", "Key", "Shift"], "kind": "procedure", "ptypes": ["TObject", "Word", "TShiftState"]});
  U.method("TfrmUserGrants", "cbFullControlClick", async function cbFullControlClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t9 = (await $.wobj(C, "admDM"));
    if ($.truthy((await $.mv((await $.wv([$t9], "cbFullControl", C, false)), "Checked")))) {
      await $.stmt((await $.mcall((await $.wv([$t9], "CM_ADMIN", C, false)), "CallProcedure", ["addcontroltype", [1, (await $.mv((await $.wv([$t9], "CredUsersDataSetNAME", C, false)), "AsString"))]])));
    } else {
      await $.stmt((await $.mcall((await $.wv([$t9], "CM_ADMIN", C, false)), "CallProcedure", ["addcontroltype", [0, (await $.mv((await $.wv([$t9], "CredUsersDataSetNAME", C, false)), "AsString"))]])));
    }
    await $.mcall((await $.wv([$t9], "UserTypeDataSet", C, false)), "Refresh", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  return U;
}
