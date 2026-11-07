// Generated from admUsersDelImplpas.pas by pas2js — do not edit by hand; regenerate instead.
/* eslint-disable */
// @ts-nocheck

export default function define($) {
  const U = $.unit("admUsersDelImplpas", ["Windows", "Messages", "SysUtils", "Classes", "Graphics", "Controls", "Forms", "Dialogs", "StdCtrls", "Mask", "DBCtrlsEh", "DBLookupEh", "Buttons", "ExtCtrls", "CheckLst", "Evanescence", "ActnList", "admDataModule", "SBTranslateProc", "sboapiDataModuleimpl"]);
  const C = [U];
  U.defClass("TfrmUsersDel", "TForm", {"panel1": {"name": "Panel1", "type": "TPanel"}, "btndel": {"name": "btnDel", "type": "TSpeedButton"}, "btnclose": {"name": "btnClose", "type": "TSpeedButton"}, "lcredusers": {"name": "lCredUsers", "type": "TEvanescence"}, "actnsusers": {"name": "actnsUsers", "type": "TActionList"}, "actusersdel": {"name": "actUsersDel", "type": "TAction"}, "label1": {"name": "Label1", "type": "TLabel"}}, {});
  U.init(async () => {
    U.var_("frmUsersDel", null, "TfrmUsersDel");
  });
  U.method("TfrmUsersDel", "btnDelClick", async function btnDelClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t1 = (await $.wobj(C, "admDM"));
    await $.stmt((await $.mcall((await $.wv([$t1], "CM_ADMIN", C, false)), "CallProcedure", ["deluser", [(await $.mv((await $.wv([$t1], "CredUsersDataSetNAME", C, false)), "AsString"))]])));
    await $.stmt((await $.wcall([$t1], "RefreshDataSet", [(await $.wv([$t1], "CredUsersDataSet", C, false))], C)));
    await $.stmt((await $.wcall([$t1], "RefreshDataSet", [(await $.wv([$t1], "SmartUsersDataSet", C, false))], C)));
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TfrmUsersDel", "lCredUsersClick", async function lCredUsersClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mset((await $.v(C, "actUsersDel")), "Enabled", $.gt((await $.mv((await $.mv((await $.v(C, "lCredUsers")), "GetCheckedKeyList")), "Count")), 0));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TfrmUsersDel", "actUsersDelExecute", async function actUsersDelExecute(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "i": 0};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t2 = (await $.wobj(C, "lCredUsers"));
    const $t3 = (await $.wv([$t2], "admDM", C, false));
    { const $t4 = $.sub((await $.mv((await $.wv([$t2, $t3], "Items", C, false)), "Count")), 1);
      await $.wset([$t2, $t3], "i", 0, { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true });
      let $t5 = true;
      for (;;) {
        if (!$t5) { await $.wset([$t2, $t3], "i", $.succ((await $.wv([$t2, $t3], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false)), 1), { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }); }
        $t5 = false;
        if (!($.ord((await $.wv([$t2, $t3], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false))) <= $.ord($t4))) break;
        if ($.truthy((await $.idx((await $.wv([$t2, $t3], "Checked", C, false)), [(await $.wv([$t2, $t3], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false))])))) {
          await $.stmt((await $.mcall((await $.wv([$t2, $t3], "CM_ADMIN", C, false)), "CallProcedure", ["deluser", [(await $.idx((await $.wv([$t2, $t3], "Items", C, false)), [(await $.wv([$t2, $t3], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false))]))]])));
        }
        await $.tick();
      }
    }
    await $.stmt((await $.wcall([$t2, $t3], "RefreshDataSet", [(await $.wv([$t2, $t3], "SmartUsersDataSet", C, false))], C)));
    await $.stmt((await $.wcall([$t2, $t3], "RefreshDataSet", [(await $.wv([$t2, $t3], "CredUsersDataSet", C, false))], C)));
    await $.stmt($.wcall([$t2, $t3], "RefreshList", [], C));
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TfrmUsersDel", "lCredUsersKeyUp", async function lCredUsersKeyUp(Self, p0, p1, p2) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "key": $.asRef(p1), "shift": $.copyArg(p2), result: undefined};
  await $.fixArgs(L0, ["sender", "shift"]);
  if ($.truthy($.eq((await L0["key"].get()), (await $.v(C, "VK_SPACE"))))) {
    await $.stmt((await $.call(C, "lCredUsersClick", [L0["sender"]])));
  }
  return L0.result;
}, {"params": ["Sender", "Key", "Shift"], "kind": "procedure", "ptypes": ["TObject", "Word", "TShiftState"]});
  U.method("TfrmUsersDel", "btnCloseClick", async function btnCloseClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.stmt($.call(C, "Close", []));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TfrmUsersDel", "FormCreate", async function FormCreate(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.stmt((await $.mcall((await $.v(C, "SBTranslateProc")), "TranslateAllCompForms", [Self, (await $.mv((await $.v(C, "sboapiDataModule")), "OrPack_SL"))])));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TfrmUsersDel", "FormKeyDown", async function FormKeyDown(Self, p0, p1, p2) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "key": $.asRef(p1), "shift": $.copyArg(p2), result: undefined};
  await $.fixArgs(L0, ["sender", "shift"]);
  if ($.truthy($.eq((await L0["key"].get()), (await $.v(C, "VK_RETURN"))))) {
    await $.stmt((await $.call(C, "actUsersDelExecute", [L0["sender"]])));
  }
  if ($.truthy($.eq((await L0["key"].get()), (await $.v(C, "VK_ESCAPE"))))) {
    await $.stmt((await $.call(C, "btnCloseClick", [L0["sender"]])));
  }
  return L0.result;
}, {"params": ["Sender", "Key", "Shift"], "kind": "procedure", "ptypes": ["TObject", "Word", "TShiftState"]});
  return U;
}
