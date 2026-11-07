// Generated from admexpertimpl.pas by pas2js — do not edit by hand; regenerate instead.
/* eslint-disable */
// @ts-nocheck

export default function define($) {
  const U = $.unit("admexpertimpl", ["Windows", "Messages", "SysUtils", "Classes", "Graphics", "Controls", "Forms", "Dialogs", "Grids", "DBGridEh", "StdCtrls", "Buttons", "ExtCtrls", "CheckLst", "Evanescence", "ActnList", "admDataModule", "sboapiDataModuleImpl", "SBTranslateProc"]);
  const C = [U];
  U.defClass("TExpertDel", "TForm", {"panel1": {"name": "Panel1", "type": "TPanel"}, "speedbutton1": {"name": "SpeedButton1", "type": "TSpeedButton"}, "speedbutton2": {"name": "SpeedButton2", "type": "TSpeedButton"}, "speedbutton3": {"name": "SpeedButton3", "type": "TSpeedButton"}, "speedbutton4": {"name": "SpeedButton4", "type": "TSpeedButton"}, "btncommit": {"name": "btnCommit", "type": "TSpeedButton"}, "btnclose": {"name": "btnClose", "type": "TSpeedButton"}, "label1": {"name": "Label1", "type": "TLabel"}, "label2": {"name": "Label2", "type": "TLabel"}, "ladditiongrants": {"name": "lAdditionGrants", "type": "TEvanescence"}, "ausergrants": {"name": "AUserGrants", "type": "TEvanescence"}}, {});
  U.init(async () => {
    U.var_("ExpertDel", null, "TExpertDel");
  });
  U.method("TExpertDel", "SpeedButton1Click", async function SpeedButton1Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "i": 0};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t1 = (await $.wobj(C, "admDM"));
    const $t2 = (await $.wv([$t1], "lAdditionGrants", C, false));
    { const $t3 = $.sub((await $.mv((await $.wv([$t1, $t2], "KeyItems", C, false)), "Count")), 1);
      await $.wset([$t1, $t2], "i", 0, { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true });
      let $t4 = true;
      for (;;) {
        if (!$t4) { await $.wset([$t1, $t2], "i", $.succ((await $.wv([$t1, $t2], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false)), 1), { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }); }
        $t4 = false;
        if (!($.ord((await $.wv([$t1, $t2], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false))) <= $.ord($t3))) break;
        if ($.truthy((await $.idx((await $.wv([$t1, $t2], "Checked", C, false)), [(await $.wv([$t1, $t2], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false))])))) {
          await $.stmt((await $.mcall((await $.wv([$t1, $t2], "CM_ADMIN", C, false)), "CallProcedure", ["addAdditionusergrant", [(await $.idx((await $.wv([$t1, $t2], "KeyItems", C, false)), [(await $.wv([$t1, $t2], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false))])), (await $.mv((await $.wv([$t1, $t2], "CredUsersDataSetSYSTEMID", C, false)), "AsInteger"))]])));
        }
        await $.tick();
      }
    }
    await $.stmt((await $.wcall([$t1, $t2], "RefreshDataSet", [(await $.wv([$t1, $t2], "AdditionDSet", C, false))], C)));
    await $.stmt((await $.wcall([$t1, $t2], "RefreshDataSet", [(await $.wv([$t1, $t2], "AdditionSrcGRDSet", C, false))], C)));
    await $.mcall((await $.wv([$t1, $t2], "lAdditionGrants", C, false)), "RefreshList", []);
    await $.mcall((await $.wv([$t1, $t2], "AUserGrants", C, false)), "RefreshList", []);
    await $.mset((await $.wv([$t1, $t2], "SpeedButton1", C, false)), "Enabled", (await $.wv([$t1, $t2], "false", C, false)));
    await $.mset((await $.wv([$t1, $t2], "SpeedButton2", C, false)), "Enabled", (await $.wv([$t1, $t2], "false", C, false)));
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TExpertDel", "lAdditionGrantsClickCheck", async function lAdditionGrantsClickCheck(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.gt((await $.mv((await $.mv((await $.v(C, "lAdditionGrants")), "GetCheckedKeyList")), "Count")), 0))) {
    await $.mset((await $.v(C, "SpeedButton1")), "Enabled", true);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TExpertDel", "AUserGrantsClickCheck", async function AUserGrantsClickCheck(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.gt((await $.mv((await $.mv((await $.v(C, "AUserGrants")), "GetCheckedKeyList")), "Count")), 0))) {
    await $.mset((await $.v(C, "SpeedButton2")), "Enabled", true);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TExpertDel", "SpeedButton2Click", async function SpeedButton2Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "i": 0};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t5 = (await $.wobj(C, "admDM"));
    const $t6 = (await $.wv([$t5], "AUserGrants", C, false));
    { const $t7 = $.sub((await $.mv((await $.wv([$t5, $t6], "KeyItems", C, false)), "Count")), 1);
      await $.wset([$t5, $t6], "i", 0, { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true });
      let $t8 = true;
      for (;;) {
        if (!$t8) { await $.wset([$t5, $t6], "i", $.succ((await $.wv([$t5, $t6], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false)), 1), { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }); }
        $t8 = false;
        if (!($.ord((await $.wv([$t5, $t6], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false))) <= $.ord($t7))) break;
        if ($.truthy((await $.idx((await $.wv([$t5, $t6], "Checked", C, false)), [(await $.wv([$t5, $t6], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false))])))) {
          await $.stmt((await $.mcall((await $.wv([$t5, $t6], "CM_ADMIN", C, false)), "CallProcedure", ["deluserAdditio", [(await $.idx((await $.wv([$t5, $t6], "KeyItems", C, false)), [(await $.wv([$t5, $t6], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false))])), (await $.mv((await $.wv([$t5, $t6], "CredUsersDataSetSYSTEMID", C, false)), "AsInteger"))]])));
        }
        await $.tick();
      }
    }
    await $.stmt((await $.wcall([$t5, $t6], "RefreshDataSet", [(await $.wv([$t5, $t6], "AdditionDSet", C, false))], C)));
    await $.stmt((await $.wcall([$t5, $t6], "RefreshDataSet", [(await $.wv([$t5, $t6], "AdditionSrcGRDSet", C, false))], C)));
    await $.mcall((await $.wv([$t5, $t6], "lAdditionGrants", C, false)), "RefreshList", []);
    await $.mcall((await $.wv([$t5, $t6], "AUserGrants", C, false)), "RefreshList", []);
    await $.mset((await $.wv([$t5, $t6], "SpeedButton1", C, false)), "Enabled", (await $.wv([$t5, $t6], "false", C, false)));
    await $.mset((await $.wv([$t5, $t6], "SpeedButton2", C, false)), "Enabled", (await $.wv([$t5, $t6], "false", C, false)));
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TExpertDel", "btnCommitClick", async function btnCommitClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mcall((await $.mv((await $.v(C, "sboapiDataModule")), "SBSession")), "Commit", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TExpertDel", "btnCloseClick", async function btnCloseClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.stmt($.call(C, "Close", []));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TExpertDel", "FormCreate", async function FormCreate(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.stmt((await $.mcall((await $.v(C, "SBTranslateProc")), "TranslateAllCompForms", [Self, (await $.mv((await $.v(C, "sboapiDataModule")), "OrPack_SL"))])));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TExpertDel", "FormKeyDown", async function FormKeyDown(Self, p0, p1, p2) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "key": $.asRef(p1), "shift": $.copyArg(p2), result: undefined};
  await $.fixArgs(L0, ["sender", "shift"]);
  if ($.truthy($.eq((await L0["key"].get()), (await $.v(C, "VK_ESCAPE"))))) {
    await $.stmt((await $.call(C, "btnCloseClick", [L0["sender"]])));
  }
  return L0.result;
}, {"params": ["Sender", "Key", "Shift"], "kind": "procedure", "ptypes": ["TObject", "Word", "TShiftState"]});
  return U;
}
