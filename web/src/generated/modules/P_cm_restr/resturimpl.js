// Generated from resturimpl.pas by pas2js — do not edit by hand; regenerate instead.
/* eslint-disable */
// @ts-nocheck

export default function define($) {
  const U = $.unit("resturimpl", ["Windows", "Messages", "SysUtils", "Classes", "Graphics", "Controls", "Forms", "Dialogs", "StdCtrls", "CheckLst", "Evanescence", "Buttons", "Oracle", "Db", "OracleData", "CommonDecls", "sboapiDataModuleImpl"]);
  const C = [U];
  U.defClass("TMainfrm", "TForm", {"groupbox14": {"name": "GroupBox14", "type": "TGroupBox"}, "speedbutton1": {"name": "SpeedButton1", "type": "TSpeedButton"}, "speedbutton2": {"name": "SpeedButton2", "type": "TSpeedButton"}, "ladditiongrants": {"name": "lAdditionGrants", "type": "TEvanescence"}, "ausergrants": {"name": "AUserGrants", "type": "TEvanescence"}, "checkbox2": {"name": "CheckBox2", "type": "TCheckBox"}, "checkbox1": {"name": "CheckBox1", "type": "TCheckBox"}, "resdataset": {"name": "ResDataSet", "type": "TOracleDataSet"}, "resadddataset": {"name": "ResAddDataSet", "type": "TOracleDataSet"}, "resdatasource": {"name": "ResDataSource", "type": "TDataSource"}, "resadddatasource": {"name": "ResAddDataSource", "type": "TDataSource"}, "iupackage": {"name": "IUPackage", "type": "TOraclePackage"}, "button1": {"name": "Button1", "type": "TButton"}, "resdatasetid": {"name": "ResDataSetID", "type": "TFloatField"}, "resdatasetseynbol": {"name": "ResDataSetSEYNBOL", "type": "TWideStringField"}, "resdatasetnmae": {"name": "ResDataSetNMAE", "type": "TWideStringField"}}, {});
  U.init(async () => {
    U.var_("Mainfrm", null, "TMainfrm");
  });
  U.func("InitPlugin", async function InitPlugin(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"s": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["s"]);
  await $.mcall((await $.v(C, "Mainfrm")), "ShowModal", []);
  return L0.result;
}, {"params": ["s"], "kind": "procedure", "ptypes": ["String"]});
  U.method("TMainfrm", "FormShow", async function FormShow(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "i": 0};
  await $.fixArgs(L0, ["sender"]);
  await $.mcall((await $.v(C, "ResDataSet")), "close", []);
  await $.stmt((await $.mcall((await $.v(C, "ResDataSet")), "SetVariable", ["CRID", (await $.v(C, "Get_SelectedCrdID"))])));
  await $.mcall((await $.v(C, "ResDataSet")), "open", []);
  await $.mcall((await $.v(C, "ResAddDataSet")), "close", []);
  await $.stmt((await $.mcall((await $.v(C, "ResAddDataSet")), "SetVariable", ["CRID", (await $.v(C, "Get_SelectedCrdID"))])));
  await $.mcall((await $.v(C, "ResAddDataSet")), "open", []);
  { const $t1 = $.sub((await $.v(C, "ComponentCount")), 1);
    L0["i"] = 0;
    let $t2 = true;
    for (;;) {
      if (!$t2) { L0["i"] = $.succ(L0["i"], 1); }
      $t2 = false;
      if (!($.ord(L0["i"]) <= $.ord($t1))) break;
      if ($.truthy($.eq((await $.mv((await $.idx((await $.v(C, "Components")), [L0["i"]])), "Tag")), 3112))) {
        await $.mcall((await $.idx((await $.v(C, "Components")), [L0["i"]])), "Open", []);
        await $.mcall((await $.idx((await $.v(C, "Components")), [L0["i"]])), "CheckAll", []);
      }
      await $.tick();
    }
  }
  await $.mcall((await $.v(C, "lAdditionGrants")), "UncheckAll", []);
  await $.mcall((await $.v(C, "AUserGrants")), "UncheckAll", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TMainfrm", "CheckBox1Click", async function CheckBox1Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.eq((await $.mv((await $.v(C, "CheckBox1")), "Checked")), true))) {
    await $.mcall((await $.v(C, "AUserGrants")), "CheckAll", []);
    if ($.truthy($.gt((await $.mv((await $.mv((await $.v(C, "AUserGrants")), "GetCheckedKeyList")), "Count")), 0))) {
      await $.mset((await $.v(C, "SpeedButton2")), "Enabled", true);
    }
  } else {
    await $.mcall((await $.v(C, "AUserGrants")), "UncheckAll", []);
    await $.mset((await $.v(C, "SpeedButton2")), "Enabled", false);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TMainfrm", "SpeedButton1Click", async function SpeedButton1Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "i": 0};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t3 = (await $.wobj(C, "lAdditionGrants"));
    { const $t4 = $.sub((await $.mv((await $.wv([$t3], "KeyItems", C, false)), "Count")), 1);
      await $.wset([$t3], "i", 0, { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true });
      let $t5 = true;
      for (;;) {
        if (!$t5) { await $.wset([$t3], "i", $.succ((await $.wv([$t3], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false)), 1), { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }); }
        $t5 = false;
        if (!($.ord((await $.wv([$t3], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false))) <= $.ord($t4))) break;
        if ($.truthy((await $.idx((await $.wv([$t3], "Checked", C, false)), [(await $.wv([$t3], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false))])))) {
          await $.stmt((await $.mcall((await $.wv([$t3], "IUPackage", C, false)), "CallProcedure", ["add_Rest", ["p_id", (await $.idx((await $.wv([$t3], "KeyItems", C, false)), [(await $.wv([$t3], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false))])), "p_creditid", (await $.wv([$t3], "Get_SelectedCrdID", C, false))]])));
        }
        await $.tick();
      }
    }
    await $.mcall((await $.wv([$t3], "ResDataSet", C, false)), "Refresh", []);
    await $.mcall((await $.wv([$t3], "ResAddDataSet", C, false)), "Refresh", []);
    await $.mcall((await $.wv([$t3], "lAdditionGrants", C, false)), "RefreshList", []);
    await $.mcall((await $.wv([$t3], "AUserGrants", C, false)), "RefreshList", []);
    await $.mset((await $.wv([$t3], "SpeedButton1", C, false)), "Enabled", (await $.wv([$t3], "false", C, false)));
    await $.mset((await $.wv([$t3], "SpeedButton2", C, false)), "Enabled", (await $.wv([$t3], "false", C, false)));
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TMainfrm", "SpeedButton2Click", async function SpeedButton2Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "i": 0};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t6 = (await $.wobj(C, "AUserGrants"));
    { const $t7 = $.sub((await $.mv((await $.wv([$t6], "KeyItems", C, false)), "Count")), 1);
      await $.wset([$t6], "i", 0, { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true });
      let $t8 = true;
      for (;;) {
        if (!$t8) { await $.wset([$t6], "i", $.succ((await $.wv([$t6], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false)), 1), { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }); }
        $t8 = false;
        if (!($.ord((await $.wv([$t6], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false))) <= $.ord($t7))) break;
        if ($.truthy((await $.idx((await $.wv([$t6], "Checked", C, false)), [(await $.wv([$t6], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false))])))) {
          await $.stmt((await $.mcall((await $.wv([$t6], "IUPackage", C, false)), "CallProcedure", ["del_res", ["p_id", (await $.idx((await $.wv([$t6], "KeyItems", C, false)), [(await $.wv([$t6], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false))])), "p_creditid", (await $.wv([$t6], "Get_SelectedCrdID", C, false))]])));
        }
        await $.tick();
      }
    }
    await $.mcall((await $.wv([$t6], "ResDataSet", C, false)), "Refresh", []);
    await $.mcall((await $.wv([$t6], "ResAddDataSet", C, false)), "Refresh", []);
    await $.mcall((await $.wv([$t6], "lAdditionGrants", C, false)), "RefreshList", []);
    await $.mcall((await $.wv([$t6], "AUserGrants", C, false)), "RefreshList", []);
    await $.mset((await $.wv([$t6], "SpeedButton1", C, false)), "Enabled", (await $.wv([$t6], "false", C, false)));
    await $.mset((await $.wv([$t6], "SpeedButton2", C, false)), "Enabled", (await $.wv([$t6], "false", C, false)));
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TMainfrm", "FormDestroy", async function FormDestroy(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mcall((await $.v(C, "ResDataSet")), "close", []);
  await $.mcall((await $.v(C, "ResAddDataSet")), "close", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TMainfrm", "lAdditionGrantsClickCheck", async function lAdditionGrantsClickCheck(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.gt((await $.mv((await $.mv((await $.v(C, "lAdditionGrants")), "GetCheckedKeyList")), "Count")), 0))) {
    await $.mset((await $.v(C, "SpeedButton1")), "Enabled", true);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TMainfrm", "CheckBox2Click", async function CheckBox2Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.eq((await $.mv((await $.v(C, "CheckBox2")), "Checked")), true))) {
    await $.mcall((await $.v(C, "lAdditionGrants")), "CheckAll", []);
    if ($.truthy($.gt((await $.mv((await $.mv((await $.v(C, "lAdditionGrants")), "GetCheckedKeyList")), "Count")), 0))) {
      await $.mset((await $.v(C, "SpeedButton1")), "Enabled", true);
    }
  } else {
    await $.mcall((await $.v(C, "lAdditionGrants")), "UncheckAll", []);
    await $.mset((await $.v(C, "SpeedButton1")), "Enabled", false);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TMainfrm", "AUserGrantsClickCheck", async function AUserGrantsClickCheck(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.gt((await $.mv((await $.mv((await $.v(C, "AUserGrants")), "GetCheckedKeyList")), "Count")), 0))) {
    await $.mset((await $.v(C, "SpeedButton2")), "Enabled", true);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TMainfrm", "Button1Click", async function Button1Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.stmt($.call(C, "close", []));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.setInitialization(async function __initialization(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: undefined};
  await $.set(C, "Mainfrm", (await $.mcall((await $.v(C, "TMainfrm")), "Create", [(await $.v(C, "CommonApplication"))])));
  return L0.result;
});
  return U;
}
