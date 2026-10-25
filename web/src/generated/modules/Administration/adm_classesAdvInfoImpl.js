// Generated from adm_classesAdvInfoImpl.pas by pas2js — do not edit by hand; regenerate instead.
/* eslint-disable */
// @ts-nocheck

export default function define($) {
  const U = $.unit("adm_classesAdvInfoImpl", ["Windows", "Messages", "SysUtils", "Classes", "Graphics", "Controls", "Forms", "Dialogs", "StdCtrls", "CheckLst", "Evanescence", "DBCtrls", "Buttons", "Grids", "DBGrids", "ExtCtrls", "AdministrationDataModule"]);
  const C = [U];
  U.defClass("TfrmClassesAdvInfo", "TForm", {"panel1": {"name": "Panel1", "type": "TPanel"}, "btnapply": {"name": "btnApply", "type": "TBitBtn"}, "btnclose": {"name": "btnClose", "type": "TBitBtn"}, "panel2": {"name": "Panel2", "type": "TPanel"}, "panel3": {"name": "Panel3", "type": "TPanel"}, "evflags": {"name": "evFlags", "type": "TEvanescence"}, "evbalaccs": {"name": "evBalAccs", "type": "TEvanescence"}, "cboptype": {"name": "cbOpType", "type": "TDBLookupComboBox"}, "label2": {"name": "Label2", "type": "TLabel"}, "label1": {"name": "Label1", "type": "TLabel"}, "checkbox1": {"name": "CheckBox1", "type": "TCheckBox"}}, {});
  U.init(async () => {
    U.var_("frmClassesAdvInfo", null, "TfrmClassesAdvInfo");
  });
  U.method("TfrmClassesAdvInfo", "cbOpTypeCloseUp", async function cbOpTypeCloseUp(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "i": 0};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t1 = (await $.v(C, "AdministrationData"));
    const $t2 = (await $.wv([$t1], "odsClsBalAcc", C, false));
    await $.stmt($.wcall([$t1, $t2], "Close", [], C));
    await $.mcall((await $.wv([$t1, $t2], "evBalAccs", C, false)), "Close", []);
    await $.stmt((await $.wcall([$t1, $t2], "SetVariable", ["op", (await $.mv((await $.wv([$t1, $t2], "cbOpType", C, false)), "KeyValue"))], C)));
    await $.stmt((await $.wcall([$t1, $t2], "SetVariable", ["classname", (await $.mv((await $.mcall((await $.wv([$t1, $t2], "Classesdata", C, false)), "FieldByName", ["obj"])), "AsString"))], C)));
    await $.mcall((await $.wv([$t1, $t2], "evBalAccs", C, false)), "Open", []);
    { const $t3 = $.sub((await $.mv((await $.mv((await $.wv([$t1, $t2], "evBalAccs", C, false)), "Items")), "Count")), 1);
      await $.wset([$t1, $t2], "i", 0, { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true });
      let $t4 = true;
      for (;;) {
        if (!$t4) { await $.wset([$t1, $t2], "i", $.succ((await $.wv([$t1, $t2], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false)), 1), { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }); }
        $t4 = false;
        if (!($.ord((await $.wv([$t1, $t2], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false))) <= $.ord($t3))) break;
        await $.stmt((await $.wcall([$t1, $t2], "Locate", ["bal_cn", (await $.idx((await $.mv((await $.wv([$t1, $t2], "evBalAccs", C, false)), "Items")), [(await $.wv([$t1, $t2], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false))])), []], C)));
        { const $t5 = await $.iset((await $.mv((await $.wv([$t1, $t2], "evBalAccs", C, false)), "Checked")), [(await $.wv([$t1, $t2], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false))], $.eq((await $.mv((await $.wv([$t1, $t2], "odsClsBalAccACC", C, false)), "AsInteger")), 1)); if ($t5 !== undefined) { await $.mset((await $.wv([$t1, $t2], "evBalAccs", C, false)), "Checked", $t5); } }
        await $.tick();
      }
    }
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TfrmClassesAdvInfo", "applybalaccs", async function applybalaccs(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"optyp": $.copyArg(p0), result: undefined, "i": 0};
  await $.fixArgs(L0, ["optyp"]);
  {
    const $t6 = (await $.v(C, "AdministrationData"));
    await $.stmt((await $.mcall((await $.wv([$t6], "pcADM", C, false)), "CallProcedure", ["delclassbalacc", [(await $.mv((await $.mcall((await $.wv([$t6], "Classesdata", C, false)), "FieldByName", ["obj"])), "AsString")), (await $.wv([$t6], "optyp", { get: async () => L0["optyp"], set: async (v) => { L0["optyp"] = v; }, local: true }, false))]])));
    { const $t7 = $.sub((await $.mv((await $.mv((await $.wv([$t6], "evBalAccs", C, false)), "Items")), "Count")), 1);
      await $.wset([$t6], "i", 0, { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true });
      let $t8 = true;
      for (;;) {
        if (!$t8) { await $.wset([$t6], "i", $.succ((await $.wv([$t6], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false)), 1), { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }); }
        $t8 = false;
        if (!($.ord((await $.wv([$t6], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false))) <= $.ord($t7))) break;
        if ($.truthy((await $.idx((await $.mv((await $.wv([$t6], "evBalAccs", C, false)), "Checked")), [(await $.wv([$t6], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false))])))) {
          await $.stmt((await $.mcall((await $.wv([$t6], "pcADM", C, false)), "CallProcedure", ["addclassbalacc", [(await $.mv((await $.mcall((await $.wv([$t6], "Classesdata", C, false)), "FieldByName", ["obj"])), "AsVariant")), (await $.idx((await $.mv((await $.wv([$t6], "evBalAccs", C, false)), "items")), [(await $.wv([$t6], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false))])), (await $.wv([$t6], "optyp", { get: async () => L0["optyp"], set: async (v) => { L0["optyp"] = v; }, local: true }, false))]])));
        }
        await $.tick();
      }
    }
  }
  return L0.result;
}, {"params": ["optyp"], "kind": "procedure", "ptypes": ["integer"]});
  U.method("TfrmClassesAdvInfo", "applyflags", async function applyflags(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: undefined, "i": 0};
  {
    const $t9 = (await $.v(C, "AdministrationData"));
    await $.stmt((await $.mcall((await $.wv([$t9], "pcADM", C, false)), "CallProcedure", ["delclassflag", [(await $.mv((await $.mcall((await $.wv([$t9], "Classesdata", C, false)), "FieldByName", ["obj"])), "AsString"))]])));
    { const $t10 = $.sub((await $.mv((await $.mv((await $.wv([$t9], "evFlags", C, false)), "Items")), "Count")), 1);
      await $.wset([$t9], "i", 0, { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true });
      let $t11 = true;
      for (;;) {
        if (!$t11) { await $.wset([$t9], "i", $.succ((await $.wv([$t9], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false)), 1), { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }); }
        $t11 = false;
        if (!($.ord((await $.wv([$t9], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false))) <= $.ord($t10))) break;
        if ($.truthy((await $.idx((await $.mv((await $.wv([$t9], "evFlags", C, false)), "Checked")), [(await $.wv([$t9], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false))])))) {
          await $.stmt((await $.mcall((await $.wv([$t9], "odsAccFlags", C, false)), "Locate", ["description", (await $.idx((await $.mv((await $.wv([$t9], "evFlags", C, false)), "Items")), [(await $.wv([$t9], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false))])), []])));
          await $.stmt((await $.mcall((await $.wv([$t9], "pcADM", C, false)), "CallProcedure", ["addclassflag", [(await $.mv((await $.mcall((await $.wv([$t9], "Classesdata", C, false)), "FieldByName", ["obj"])), "AsVariant")), (await $.mv((await $.wv([$t9], "odsAccFlagsSYMBOL", C, false)), "AsVariant"))]])));
        }
        await $.tick();
      }
    }
  }
  return L0.result;
}, {"params": [], "kind": "procedure", "ptypes": []});
  U.method("TfrmClassesAdvInfo", "btnApplyClick", async function btnApplyClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.stmt((await $.call(C, "applybalaccs", [(await $.mv((await $.v(C, "cbOpType")), "KeyValue"))])));
  await $.stmt($.call(C, "applyflags", []));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TfrmClassesAdvInfo", "cbOpTypeMouseDown", async function cbOpTypeMouseDown(Self, p0, p1, p2, p3, p4) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "button": $.copyArg(p1), "shift": $.copyArg(p2), "x": $.copyArg(p3), "y": $.copyArg(p4), result: undefined};
  await $.fixArgs(L0, ["sender", "button", "shift", "x", "y"]);
  await $.stmt((await $.call(C, "applybalaccs", [(await $.mv((L0["sender"]), "KeyValue"))])));
  return L0.result;
}, {"params": ["Sender", "Button", "Shift", "X", "Y"], "kind": "procedure", "ptypes": ["TObject", "TMouseButton", "TShiftState", "Integer", "Integer"]});
  U.method("TfrmClassesAdvInfo", "btnCloseClick", async function btnCloseClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.stmt($.call(C, "Close", []));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TfrmClassesAdvInfo", "CheckBox1Click", async function CheckBox1Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy((await $.mv((L0["sender"]), "checked")))) {
    await $.mcall((await $.v(C, "evBalAccs")), "CheckAll", []);
  } else {
    await $.mcall((await $.v(C, "evBalAccs")), "UncheckAll", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  return U;
}
