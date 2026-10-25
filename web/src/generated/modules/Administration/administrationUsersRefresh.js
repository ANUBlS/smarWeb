// Generated from administrationUsersRefresh.pas by pas2js — do not edit by hand; regenerate instead.
/* eslint-disable */
// @ts-nocheck

export default function define($) {
  const U = $.unit("administrationUsersRefresh", ["Windows", "Messages", "SysUtils", "Classes", "Graphics", "Controls", "Forms", "Dialogs", "ExtCtrls", "StdCtrls", "Buttons", "CheckLst", "ComCtrls", "Gauges", "AdministrationDataModule"]);
  const C = [U];
  U.defClass("TRefreshThread", "TThread", {}, {});
  U.defClass("TfmUsersRefresh", "TForm", {"panel1": {"name": "Panel1", "type": "TPanel"}, "panel2": {"name": "Panel2", "type": "TPanel"}, "btapply": {"name": "btApply", "type": "TBitBtn"}, "btexit": {"name": "btExit", "type": "TBitBtn"}, "groupbox1": {"name": "GroupBox1", "type": "TGroupBox"}, "gbdatabaseobjects": {"name": "gbDatabaseObjects", "type": "TGroupBox"}, "cbtables": {"name": "cbTables", "type": "TCheckBox"}, "cbviews": {"name": "cbViews", "type": "TCheckBox"}, "cbpackages": {"name": "cbPackages", "type": "TCheckBox"}, "cbprocedures": {"name": "cbProcedures", "type": "TCheckBox"}, "cbfunctions": {"name": "cbFunctions", "type": "TCheckBox"}, "cbsynonyms": {"name": "cbSynonyms", "type": "TCheckBox"}, "cball": {"name": "cbAll", "type": "TCheckBox"}, "btmainbar": {"name": "btMainBar", "type": "TGauge"}, "rgrules": {"name": "rgRules", "type": "TRadioGroup"}, "ok": {"name": "Ok", "type": "TBitBtn"}, "pb1": {"name": "PB1", "type": "TProgressBar"}, "groupbox2": {"name": "GroupBox2", "type": "TGroupBox"}, "clbusers": {"name": "clbUsers", "type": "TCheckListBox"}, "errorstr": {"name": "ErrorStr", "type": "String"}}, {});
  U.init(async () => {
    U.const("WM_EXCEPTIONSMESSAGE", $.add((await $.v(C, "WM_USER")), 401));
    U.const("Inc_Step", 10);
    U.const("Oper_count", 7);
    U.var_("fmUsersRefresh", null, "TfmUsersRefresh");
    U.var_("CanClose", true, "Boolean");
    U.var_("Ref", null, "TRefreshThread");
  });
  U.method("TRefreshThread", "Execute", async function Execute(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: undefined};
  try {
    await $.stmt($.call(C, "RefreshSynonyms", []));
    await $.stmt((await $.call(C, "Synchronize", [(await $.v(C, "EndExecuting"))])));
  } catch ($t1) {
    $.rethrowControl($t1);
    if ($.excIs($t1, "Exception")) {
      L0["e"] = $.exc($t1);
      if ($.truthy((await $.call(C, "Assigned", [(await $.v(C, "fmUsersRefresh"))])))) {
        {
          const $t2 = (await $.v(C, "fmUsersRefresh"));
          await $.wset([$t2], "ErrorStr", (await $.mv((await $.wv([$t2], "E", { get: async () => L0["e"], set: async (v) => { L0["e"] = v; }, local: true }, false)), "Message")), C);
          await $.stmt((await $.wcall([$t2], "PostMessage", [(await $.mv((await $.wv([$t2], "fmUsersRefresh", C, false)), "Handle")), (await $.wv([$t2], "WM_EXCEPTIONSMESSAGE", C, false)), (await $.wcall([$t2], "Integer", [(await $.wv([$t2], "E", { get: async () => L0["e"], set: async (v) => { L0["e"] = v; }, local: true }, false))], C)), 0], C)));
        }
      }
    }
    else { throw $t1; }
  }
  return L0.result;
}, {"params": [], "kind": "procedure", "ptypes": []});
  U.method("TRefreshThread", "CreateSynonyms", async function CreateSynonyms(Self, p0, p1, p2) {
  const C = $.chain(Self, U);
  const L0 = {"obtype": $.copyArg(p0), "sowner": $.copyArg(p1), "suser": $.copyArg(p2), result: undefined};
  await $.fixArgs(L0, ["obtype", "sowner", "suser"]);
  {
    const $t3 = (await $.mv((await $.v(C, "AdministrationData")), "pcADM"));
    await $.stmt((await $.wcall([$t3], "CallProcedure", ["create_synonyms", [(await $.wv([$t3], "ObType", { get: async () => L0["obtype"], set: async (v) => { L0["obtype"] = v; }, local: true }, false)), (await $.wv([$t3], "Sowner", { get: async () => L0["sowner"], set: async (v) => { L0["sowner"] = v; }, local: true }, false)), (await $.wv([$t3], "Suser", { get: async () => L0["suser"], set: async (v) => { L0["suser"] = v; }, local: true }, false)), (await $.wv([$t3], "True", C, false))]], C)));
  }
  return L0.result;
}, {"params": ["ObType", "Sowner", "Suser"], "kind": "procedure", "ptypes": ["String", "String", "String"]});
  U.method("TRefreshThread", "DropSynonyms", async function DropSynonyms(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sowner": $.copyArg(p0), "suser": $.copyArg(p1), result: undefined};
  await $.fixArgs(L0, ["sowner", "suser"]);
  {
    const $t4 = (await $.mv((await $.v(C, "AdministrationData")), "pcADM"));
    await $.stmt((await $.wcall([$t4], "CallProcedure", ["DropAllSynonims", [(await $.wv([$t4], "Sowner", { get: async () => L0["sowner"], set: async (v) => { L0["sowner"] = v; }, local: true }, false)), (await $.wv([$t4], "Suser", { get: async () => L0["suser"], set: async (v) => { L0["suser"] = v; }, local: true }, false))]], C)));
  }
  return L0.result;
}, {"params": ["Sowner", "Suser"], "kind": "procedure", "ptypes": ["String", "String"]});
  U.method("TRefreshThread", "IncrementStep", async function IncrementStep(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: undefined};
  if ($.truthy((await $.call(C, "Assigned", [(await $.v(C, "fmUsersRefresh"))])))) {
    {
      const $t5 = (await $.v(C, "fmUsersRefresh"));
      await $.mset((await $.wv([$t5], "btMainBar", C, false)), "Progress", $.add((await $.mv((await $.wv([$t5], "btMainBar", C, false)), "Progress")), (await $.wv([$t5], "Inc_Step", C, false))));
    }
  }
  return L0.result;
}, {"params": [], "kind": "procedure", "ptypes": []});
  U.method("TRefreshThread", "EndExecuting", async function EndExecuting(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: undefined};
  {
    const $t6 = (await $.v(C, "fmUsersRefresh"));
    await $.mset((await $.wv([$t6], "btApply", C, false)), "Enabled", (await $.wv([$t6], "True", C, false)));
  }
  return L0.result;
}, {"params": [], "kind": "procedure", "ptypes": []});
  U.method("TRefreshThread", "Snd", async function Snd(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: undefined};
  await $.stmt((await $.call(C, "Synchronize", [(await $.v(C, "IncrementStep"))])));
  return L0.result;
}, {"params": [], "kind": "procedure", "ptypes": []});
  U.method("TRefreshThread", "RefreshSynonyms", async function RefreshSynonyms(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: undefined, "i": 0};
  L0["getcount"] = $.fn(async function GetCount() {
  const L1 = {result: 0, "z": 0};
  L1["result"] = 0;
  {
    const $t7 = (await $.mv((await $.v(C, "fmUsersRefresh")), "clbUsers"));
    if ($.truthy((await $.wv([$t7], "Enabled", C, false)))) {
      { const $t8 = $.sub((await $.mv((await $.wv([$t7], "Items", C, false)), "Count")), 1);
        await $.wset([$t7], "z", 0, { get: async () => L1["z"], set: async (v) => { L1["z"] = v; }, local: true });
        let $t9 = true;
        for (;;) {
          if (!$t9) { await $.wset([$t7], "z", $.succ((await $.wv([$t7], "z", { get: async () => L1["z"], set: async (v) => { L1["z"] = v; }, local: true }, false)), 1), { get: async () => L1["z"], set: async (v) => { L1["z"] = v; }, local: true }); }
          $t9 = false;
          if (!($.ord((await $.wv([$t7], "z", { get: async () => L1["z"], set: async (v) => { L1["z"] = v; }, local: true }, false))) <= $.ord($t8))) break;
          if ($.truthy((await $.idx((await $.wv([$t7], "Checked", C, false)), [(await $.wv([$t7], "z", { get: async () => L1["z"], set: async (v) => { L1["z"] = v; }, local: true }, false))])))) {
            await $.stmt((await $.wcall([$t7], "Inc", [$.ref(async () => (await $.wv([$t7], "Result", { get: async () => L1["result"], set: async (v) => { L1["result"] = v; }, local: true }, false)), async ($t10) => { await $.wset([$t7], "Result", $t10, { get: async () => L1["result"], set: async (v) => { L1["result"] = v; }, local: true }); })], C)));
          }
          await $.tick();
        }
      }
    } else {
      await $.wset([$t7], "Result", $.sub((await $.mv((await $.wv([$t7], "Items", C, false)), "Count")), 1), { get: async () => L1["result"], set: async (v) => { L1["result"] = v; }, local: true });
    }
  }
  return L1.result;
});
  {
    const $t11 = (await $.v(C, "fmUsersRefresh"));
    await $.mset((await $.wv([$t11], "btMainBar", C, false)), "MaxValue", $.mul($.mul((await $.wv([$t11], "GetCount", { get: async () => L0["getcount"], set: async (v) => { L0["getcount"] = v; }, local: true }, false)), (await $.wv([$t11], "Oper_count", C, false))), 10));
    if ($.truthy((await $.mv((await $.wv([$t11], "cbTables", C, false)), "Checked")))) {
      await $.stmt((await $.wcall([$t11], "CreateSynonyms", ["TABLE", (await $.wv([$t11], "Sm_Own", C, false)), ""], C)));
    }
    await $.stmt($.wcall([$t11], "Snd", [], C));
    if ($.truthy((await $.mv((await $.wv([$t11], "cbViews", C, false)), "Checked")))) {
      await $.stmt((await $.wcall([$t11], "CreateSynonyms", ["VIEW", (await $.wv([$t11], "Sm_Own", C, false)), ""], C)));
    }
    await $.stmt($.wcall([$t11], "Snd", [], C));
    if ($.truthy((await $.mv((await $.wv([$t11], "cbPackages", C, false)), "Checked")))) {
      await $.stmt((await $.wcall([$t11], "CreateSynonyms", ["PACKAGE", (await $.wv([$t11], "Sm_Own", C, false)), ""], C)));
    }
    await $.stmt($.wcall([$t11], "Snd", [], C));
    if ($.truthy((await $.mv((await $.wv([$t11], "cbProcedures", C, false)), "Checked")))) {
      await $.stmt((await $.wcall([$t11], "CreateSynonyms", ["PROCEDURE", (await $.wv([$t11], "Sm_Own", C, false)), ""], C)));
    }
    await $.stmt($.wcall([$t11], "Snd", [], C));
    if ($.truthy((await $.mv((await $.wv([$t11], "cbFunctions", C, false)), "Checked")))) {
      await $.stmt((await $.wcall([$t11], "CreateSynonyms", ["FUNCTION", (await $.wv([$t11], "Sm_Own", C, false)), ""], C)));
    }
    await $.stmt($.wcall([$t11], "Snd", [], C));
    if ($.truthy((await $.mv((await $.wv([$t11], "cbSynonyms", C, false)), "Checked")))) {
      await $.stmt((await $.wcall([$t11], "CreateSynonyms", ["SYNONYM", (await $.wv([$t11], "Sm_Own", C, false)), ""], C)));
    }
    await $.stmt($.wcall([$t11], "Snd", [], C));
  }
  return L0.result;
}, {"params": [], "kind": "procedure", "ptypes": []});
  U.method("TfmUsersRefresh", "cbAllClick", async function cbAllClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mset((await $.v(C, "clbUsers")), "Enabled", $.not(((await $.mv((await $.v(C, "cbAll")), "Checked")))));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TfmUsersRefresh", "WM_EXCEPTIONMESSAGE", async function WM_EXCEPTIONMESSAGE(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"message": $.asRef(p0), result: undefined};
  throw $.raise((await $.mcall((await $.v(C, "Exception")), "Create", [(await $.v(C, "ErrorStr"))])));
  return L0.result;
}, {"params": ["Message"], "kind": "procedure", "ptypes": ["TMessage"]});
  U.method("TfmUsersRefresh", "FormCreate", async function FormCreate(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "ownerts": 0, "i": 0};
  await $.fixArgs(L0, ["sender"]);
  L0["getownerdatats"] = $.fn(async function GetOwnerDatats() {
  const L1 = {result: 0};
  {
    const $t12 = (await $.mv((await $.v(C, "AdministrationData")), "pcADM"));
    try {
      await $.wset([$t12], "Result", (await $.wcall([$t12], "CallIntegerFunction", ["getusertablespaceid", [(await $.wv([$t12], "Sm_Own", C, false))]], C)), { get: async () => L1["result"], set: async (v) => { L1["result"] = v; }, local: true });
    } catch ($t13) {
      $.rethrowControl($t13);
      $.handled($t13);
      await $.wset([$t12], "Result", (-(1)), { get: async () => L1["result"], set: async (v) => { L1["result"] = v; }, local: true });
    }
  }
  return L1.result;
});
  await $.set(C, "fmUsersRefresh", Self);
  await $.mcall((await $.mv((await $.v(C, "clbUsers")), "Items")), "Clear", []);
  L0["ownerts"] = L0["getownerdatats"];
  {
    const $t14 = (await $.mv((await $.v(C, "AdministrationData")), "UsersData"));
    await $.stmt($.wcall([$t14], "First", [], C));
    while ($.truthy($.not(((await $.wv([$t14], "EOF", C, false)))))) {
      {
        const $t15 = (await $.wv([$t14], "clbUsers", C, false));
        if ($.truthy((await $.or_(($.eq((await $.mv((await $.wcall([$t14, $t15], "FieldByName", ["DATATS#"], C)), "AsInteger")), (await $.wv([$t14, $t15], "OwnerTS", { get: async () => L0["ownerts"], set: async (v) => { L0["ownerts"] = v; }, local: true }, false)))), async () => ($.eq((await $.wv([$t14, $t15], "OwnerTS", { get: async () => L0["ownerts"], set: async (v) => { L0["ownerts"] = v; }, local: true }, false)), (-(1)))))))) {
          await $.stmt((await $.mcall((await $.wv([$t14, $t15], "Items", C, false)), "Add", [(await $.mv((await $.wcall([$t14, $t15], "FieldByName", ["NAME"], C)), "AsString"))])));
          if ($.truthy($.eq((await $.mv((await $.wcall([$t14, $t15], "FieldByName", ["NAME"], C)), "AsString")), (await $.wv([$t14, $t15], "Sm_Own", C, false))))) {
            { const $t16 = await $.iset((await $.wv([$t14, $t15], "ItemEnabled", C, false)), [$.sub((await $.mv((await $.wv([$t14, $t15], "Items", C, false)), "Count")), 1)], (await $.wv([$t14, $t15], "False", C, false))); if ($t16 !== undefined) { await $.wset([$t14, $t15], "ItemEnabled", $t16, C); } }
          }
        }
      }
      await $.stmt($.wcall([$t14], "Next", [], C));
      await $.tick();
    }
  }
  {
    const $t17 = (await $.v(C, "fmUsersRefresh"));
    const $t18 = (await $.mv((await $.wv([$t17], "fmUsersRefresh", C, false)), "clbUsers"));
    const $t19 = (await $.wv([$t17, $t18], "AdministrationData", C, false));
    { const $t20 = $.sub((await $.mv((await $.mv((await $.mv((await $.wv([$t17, $t18, $t19], "fmUsersRefresh", C, false)), "clbUsers")), "Items")), "Count")), 1);
      await $.wset([$t17, $t18, $t19], "i", 0, { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true });
      let $t21 = true;
      for (;;) {
        if (!$t21) { await $.wset([$t17, $t18, $t19], "i", $.succ((await $.wv([$t17, $t18, $t19], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false)), 1), { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }); }
        $t21 = false;
        if (!($.ord((await $.wv([$t17, $t18, $t19], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false))) <= $.ord($t20))) break;
        await $.stmt((await $.idx((await $.mv((await $.mv((await $.wv([$t17, $t18, $t19], "clbUsers", C, false)), "Items")), "Strings")), [(await $.wv([$t17, $t18, $t19], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false))])));
        await $.mcall((await $.wv([$t17, $t18, $t19], "checksynonyms", C, false)), "close", []);
        await $.stmt((await $.mcall((await $.wv([$t17, $t18, $t19], "checksynonyms", C, false)), "SetVariable", ["USRNM", (await $.idx((await $.mv((await $.mv((await $.wv([$t17, $t18, $t19], "clbUsers", C, false)), "Items")), "Strings")), [(await $.wv([$t17, $t18, $t19], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false))]))])));
        await $.mcall((await $.wv([$t17, $t18, $t19], "checksynonyms", C, false)), "open", []);
        if ($.truthy($.gt((await $.mv((await $.wv([$t17, $t18, $t19], "checksynonyms", C, false)), "RecordCount")), 0))) {
          { const $t22 = await $.iset((await $.mv((await $.wv([$t17, $t18, $t19], "clbUsers", C, false)), "Checked")), [(await $.wv([$t17, $t18, $t19], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false))], (await $.wv([$t17, $t18, $t19], "true", C, false))); if ($t22 !== undefined) { await $.mset((await $.wv([$t17, $t18, $t19], "clbUsers", C, false)), "Checked", $t22); } }
        } else {
          { const $t23 = await $.iset((await $.mv((await $.wv([$t17, $t18, $t19], "clbUsers", C, false)), "Checked")), [(await $.wv([$t17, $t18, $t19], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false))], (await $.wv([$t17, $t18, $t19], "false", C, false))); if ($t23 !== undefined) { await $.mset((await $.wv([$t17, $t18, $t19], "clbUsers", C, false)), "Checked", $t23); } }
        }
        await $.tick();
      }
    }
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TfmUsersRefresh", "btApplyClick", async function btApplyClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mset((await $.v(C, "btApply")), "Enabled", false);
  await $.mset((await $.v(C, "btMainBar")), "Progress", 0);
  await $.set(C, "Ref", (await $.mcall((await $.v(C, "TRefreshThread")), "Create", [true])));
  try {
    await $.mset((await $.v(C, "Ref")), "Priority", (await $.v(C, "tpLowest")));
    await $.mcall((await $.v(C, "Ref")), "Resume", []);
    await $.set(C, "CanClose", false);
  } catch ($t24) {
    $.rethrowControl($t24);
    $.handled($t24);
    await $.mcall((await $.v(C, "Ref")), "Terminate", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TfmUsersRefresh", "FormActivate", async function FormActivate(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "i": 0};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t25 = (await $.v(C, "fmUsersRefresh"));
    const $t26 = (await $.mv((await $.wv([$t25], "fmUsersRefresh", C, false)), "clbUsers"));
    const $t27 = (await $.wv([$t25, $t26], "AdministrationData", C, false));
    { const $t28 = $.sub((await $.mv((await $.mv((await $.mv((await $.wv([$t25, $t26, $t27], "fmUsersRefresh", C, false)), "clbUsers")), "Items")), "Count")), 1);
      await $.wset([$t25, $t26, $t27], "i", 0, { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true });
      let $t29 = true;
      for (;;) {
        if (!$t29) { await $.wset([$t25, $t26, $t27], "i", $.succ((await $.wv([$t25, $t26, $t27], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false)), 1), { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }); }
        $t29 = false;
        if (!($.ord((await $.wv([$t25, $t26, $t27], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false))) <= $.ord($t28))) break;
        await $.stmt((await $.idx((await $.mv((await $.mv((await $.wv([$t25, $t26, $t27], "clbUsers", C, false)), "Items")), "Strings")), [(await $.wv([$t25, $t26, $t27], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false))])));
        await $.mcall((await $.wv([$t25, $t26, $t27], "checksynonyms", C, false)), "close", []);
        await $.stmt((await $.mcall((await $.wv([$t25, $t26, $t27], "checksynonyms", C, false)), "SetVariable", ["USRNM", (await $.idx((await $.mv((await $.mv((await $.wv([$t25, $t26, $t27], "clbUsers", C, false)), "Items")), "Strings")), [(await $.wv([$t25, $t26, $t27], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false))]))])));
        await $.mcall((await $.wv([$t25, $t26, $t27], "checksynonyms", C, false)), "open", []);
        if ($.truthy($.gt((await $.mv((await $.wv([$t25, $t26, $t27], "checksynonyms", C, false)), "RecordCount")), 0))) {
          { const $t30 = await $.iset((await $.mv((await $.wv([$t25, $t26, $t27], "clbUsers", C, false)), "Checked")), [(await $.wv([$t25, $t26, $t27], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false))], (await $.wv([$t25, $t26, $t27], "true", C, false))); if ($t30 !== undefined) { await $.mset((await $.wv([$t25, $t26, $t27], "clbUsers", C, false)), "Checked", $t30); } }
        } else {
          { const $t31 = await $.iset((await $.mv((await $.wv([$t25, $t26, $t27], "clbUsers", C, false)), "Checked")), [(await $.wv([$t25, $t26, $t27], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false))], (await $.wv([$t25, $t26, $t27], "false", C, false))); if ($t31 !== undefined) { await $.mset((await $.wv([$t25, $t26, $t27], "clbUsers", C, false)), "Checked", $t31); } }
        }
        await $.tick();
      }
    }
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TfmUsersRefresh", "FormClose", async function FormClose(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "action": $.asRef(p1), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.not(((await $.v(C, "CanClose")))))) {
    await $.set(C, "CanClose", (await $.mv((await $.v(C, "btApply")), "Enabled")));
  }
  if ($.truthy((await $.v(C, "CanClose")))) {
    if ($.truthy((await $.call(C, "Assigned", [(await $.v(C, "Ref"))])))) {
      await $.mcall((await $.v(C, "Ref")), "Terminate", []);
    }
    await L0["action"].set((await $.v(C, "caFree")));
  } else {
    await L0["action"].set((await $.v(C, "caNone")));
  }
  return L0.result;
}, {"params": ["Sender", "Action"], "kind": "procedure", "ptypes": ["TObject", "TCloseAction"]});
  U.method("TfmUsersRefresh", "FormDestroy", async function FormDestroy(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.set(C, "fmUsersRefresh", null);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TfmUsersRefresh", "OkClick", async function OkClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "i": 0, "sowner": ''};
  await $.fixArgs(L0, ["sender"]);
  L0["sowner"] = "SMART";
  {
    const $t32 = (await $.v(C, "fmUsersRefresh"));
    const $t33 = (await $.mv((await $.wv([$t32], "fmUsersRefresh", C, false)), "clbUsers"));
    const $t34 = (await $.wv([$t32, $t33], "AdministrationData", C, false));
    { const $t35 = $.sub((await $.mv((await $.mv((await $.mv((await $.wv([$t32, $t33, $t34], "fmUsersRefresh", C, false)), "clbUsers")), "Items")), "Count")), 1);
      await $.wset([$t32, $t33, $t34], "i", 0, { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true });
      let $t36 = true;
      for (;;) {
        if (!$t36) { await $.wset([$t32, $t33, $t34], "i", $.succ((await $.wv([$t32, $t33, $t34], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false)), 1), { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }); }
        $t36 = false;
        if (!($.ord((await $.wv([$t32, $t33, $t34], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false))) <= $.ord($t35))) break;
        await $.stmt((await $.mcall((await $.wv([$t32, $t33, $t34], "pcADM", C, false)), "CallProcedure", ["branchgrant", [(await $.idx((await $.mv((await $.mv((await $.wv([$t32, $t33, $t34], "clbUsers", C, false)), "Items")), "Strings")), [(await $.wv([$t32, $t33, $t34], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false))])), (await $.wv([$t32, $t33, $t34], "sowner", { get: async () => L0["sowner"], set: async (v) => { L0["sowner"] = v; }, local: true }, false)), (await $.idx((await $.mv((await $.wv([$t32, $t33, $t34], "clbUsers", C, false)), "Checked")), [(await $.wv([$t32, $t33, $t34], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false))]))]])));
        await $.tick();
      }
    }
  }
  if ($.truthy($.eq((await $.mv((await $.v(C, "rgRules")), "ItemIndex")), 1))) {
    {
      const $t37 = (await $.mv((await $.v(C, "AdministrationData")), "pcADM"));
      await $.stmt((await $.wcall([$t37], "CallProcedure", ["DropAllSynonims", ["", ""]], C)));
    }
  }
  {
    const $t38 = (await $.v(C, "fmUsersRefresh"));
    await $.mset((await $.wv([$t38], "PB1", C, false)), "Position", 10);
    if ($.truthy((await $.mv((await $.wv([$t38], "cbTables", C, false)), "Checked")))) {
      await $.stmt((await $.mcall((await $.wv([$t38], "Ref", C, false)), "CreateSynonyms", ["TABLE", (await $.wv([$t38], "Sm_Own", C, false)), ""])));
    }
    await $.mset((await $.wv([$t38], "PB1", C, false)), "Position", 30);
    if ($.truthy((await $.mv((await $.wv([$t38], "cbViews", C, false)), "Checked")))) {
      await $.stmt((await $.mcall((await $.wv([$t38], "Ref", C, false)), "CreateSynonyms", ["VIEW", (await $.wv([$t38], "Sm_Own", C, false)), ""])));
    }
    await $.mset((await $.wv([$t38], "PB1", C, false)), "Position", 60);
    if ($.truthy((await $.mv((await $.wv([$t38], "cbPackages", C, false)), "Checked")))) {
      await $.stmt((await $.mcall((await $.wv([$t38], "Ref", C, false)), "CreateSynonyms", ["PACKAGE", (await $.wv([$t38], "Sm_Own", C, false)), ""])));
    }
    await $.mset((await $.wv([$t38], "PB1", C, false)), "Position", 70);
    if ($.truthy((await $.mv((await $.wv([$t38], "cbProcedures", C, false)), "Checked")))) {
      await $.stmt((await $.mcall((await $.wv([$t38], "Ref", C, false)), "CreateSynonyms", ["PROCEDURE", (await $.wv([$t38], "Sm_Own", C, false)), ""])));
    }
    await $.mset((await $.wv([$t38], "PB1", C, false)), "Position", 80);
    if ($.truthy((await $.mv((await $.wv([$t38], "cbFunctions", C, false)), "Checked")))) {
      await $.stmt((await $.mcall((await $.wv([$t38], "Ref", C, false)), "CreateSynonyms", ["FUNCTION", (await $.wv([$t38], "Sm_Own", C, false)), ""])));
    }
    await $.mset((await $.wv([$t38], "PB1", C, false)), "Position", 90);
    if ($.truthy((await $.mv((await $.wv([$t38], "cbSynonyms", C, false)), "Checked")))) {
      await $.stmt((await $.mcall((await $.wv([$t38], "Ref", C, false)), "CreateSynonyms", ["SYNONYM", (await $.wv([$t38], "Sm_Own", C, false)), ""])));
    }
    await $.mset((await $.wv([$t38], "PB1", C, false)), "Position", 100);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TfmUsersRefresh", "rgRulesClick", async function rgRulesClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "i": 0};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t39 = (await $.v(C, "gbDatabaseObjects"));
    { const $t40 = $.sub((await $.wv([$t39], "ControlCount", C, false)), 1);
      await $.wset([$t39], "i", 0, { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true });
      let $t41 = true;
      for (;;) {
        if (!$t41) { await $.wset([$t39], "i", $.succ((await $.wv([$t39], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false)), 1), { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }); }
        $t41 = false;
        if (!($.ord((await $.wv([$t39], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false))) <= $.ord($t40))) break;
        if ($.truthy(($.is_((await $.idx((await $.wv([$t39], "Controls", C, false)), [(await $.wv([$t39], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false))])), "TCheckBox")))) {
          await $.mset((await $.wcall([$t39], "TCheckBox", [(await $.idx((await $.wv([$t39], "Controls", C, false)), [(await $.wv([$t39], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false))]))], C)), "Checked", $.eq((await $.mv((await $.wcall([$t39], "TRadioGroup", [(await $.wv([$t39], "Sender", { get: async () => L0["sender"], set: async (v) => { L0["sender"] = v; }, local: true }, false))], C)), "ItemIndex")), 1));
        }
        await $.tick();
      }
    }
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  return U;
}
