// Generated from RAUnit.pas by pas2js — do not edit by hand; regenerate instead.
/* eslint-disable */
// @ts-nocheck

export default function define($) {
  const U = $.unit("RAUnit", ["Windows", "Messages", "SysUtils", "Classes", "Graphics", "Controls", "Forms", "Dialogs", "Buttons", "StdCtrls", "RADatModImpl", "CommonDecls", "ReserveProgressFormImplpas"]);
  const C = [U];
  U.defClass("TRAForm", "TForm", {"speedbutton1": {"name": "SpeedButton1", "type": "TSpeedButton"}, "speedbutton2": {"name": "SpeedButton2", "type": "TSpeedButton"}}, {});
  U.init(async () => {
    U.var_("RAForm", null, "TRAForm");
  });
  U.func("InitPlugin", async function InitPlugin(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"s": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["s"]);
  await $.mcall((await $.v(C, "RAForm")), "ShowModal", []);
  return L0.result;
}, {"params": ["s"], "kind": "procedure", "ptypes": ["String"]});
  U.method("TRAForm", "SpeedButton1Click", async function SpeedButton1Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "r": 0};
  await $.fixArgs(L0, ["sender"]);
  L0["can_i_do_it"] = "Yenidən qiymətləndirim?";
  L0["sdone"] = "Yenidən qiymətləndirmə bitdi !";
  L0["correctsinglerow"] = $.fn(async function CorrectSingleRow(p0, p1) {
  const L1 = {"crdid": $.copyArg(p0), "num": $.copyArg(p1), result: undefined};
  await $.fixArgs(L1, ["crdid", "num"]);
  {
    const $t1 = (await $.mv((await $.v(C, "RAllDatMod")), "CM_RESERVE_COUNT_NEW"));
    try {
      await $.stmt((await $.wcall([$t1], "CallProcedure", ["reserve_contr_new", ["p_CreditID", (await $.wv([$t1], "CrdID", { get: async () => L1["crdid"], set: async (v) => { L1["crdid"] = v; }, local: true }, false))]], C)));
    } catch ($t2) {
      $.rethrowControl($t2);
      if ($.excIs($t2, "EXCEPTION")) {
        L1["e"] = $.exc($t2);
        await $.stmt((await $.wcall([$t1], "LogError", [$.add($.add((await $.wv([$t1], "Num", { get: async () => L1["num"], set: async (v) => { L1["num"] = v; }, local: true }, false)), " -- "), (await $.mv((await $.wv([$t1], "E", { get: async () => L1["e"], set: async (v) => { L1["e"] = v; }, local: true }, false)), "Message")))], C)));
      }
      else { throw $t2; }
    }
  }
  return L1.result;
});
  if ($.truthy($.ne((await $.call(C, "MessageDlg", [L0["can_i_do_it"], (await $.v(C, "mtConfirmation")), [(await $.v(C, "mbYes")), (await $.v(C, "mbNo"))], 0])), (await $.v(C, "mrYes"))))) {
    return L0.result;
  }
  {
    const $t3 = (await $.mv((await $.v(C, "RAllDatMod")), "CreditsInfo"));
    if ($.truthy((await $.wv([$t3], "Active", C, false)))) {
      await $.stmt($.wcall([$t3], "Refresh", [], C));
    } else {
      await $.stmt($.wcall([$t3], "Open", [], C));
    }
    await $.wset([$t3], "R", (await $.wv([$t3], "RecordCount", C, false)), { get: async () => L0["r"], set: async (v) => { L0["r"] = v; }, local: true });
    if ($.truthy($.le((await $.wv([$t3], "R", { get: async () => L0["r"], set: async (v) => { L0["r"] = v; }, local: true }, false)), 0))) {
      return L0.result;
    }
    {
      const $t4 = (await $.mv((await $.wv([$t3], "ProgressForm", C, false)), "ProgressShower"));
      await $.wset([$t3, $t4], "Position", 0, C);
      await $.wset([$t3, $t4], "Max", (await $.wv([$t3, $t4], "R", { get: async () => L0["r"], set: async (v) => { L0["r"] = v; }, local: true }, false)), C);
      await $.wset([$t3, $t4], "Step", 1, C);
    }
    await $.mcall((await $.wv([$t3], "ProgressForm", C, false)), "Show", []);
    await $.mcall((await $.wv([$t3], "ProgressForm", C, false)), "Update", []);
    await $.mcall(Self, "Update", []);
    await $.stmt($.wcall([$t3], "FIRST", [], C));
    while ($.truthy($.not((await $.wv([$t3], "EOF", C, false))))) {
      await $.stmt((await $.wcall([$t3], "CorrectSingleRow", [(await $.mv((await $.wcall([$t3], "FieldByName", ["ID"], C)), "AsInteger")), (await $.mv((await $.wcall([$t3], "FieldByName", ["NUMBEROFCREDIT"], C)), "AsString"))], { get: async () => L0["correctsinglerow"], set: async (v) => { L0["correctsinglerow"] = v; }, local: true })));
      await $.mset((await $.mv((await $.wv([$t3], "ProgressForm", C, false)), "ProgressShower")), "Position", $.add((await $.wv([$t3], "RecNo", C, false)), 1));
      await $.stmt($.wcall([$t3], "NEXT", [], C));
      await $.tick();
    }
    await $.stmt($.wcall([$t3], "CloseAll", [], C));
  }
  await $.mcall((await $.v(C, "ProgressForm")), "Close", []);
  await $.stmt((await $.call(C, "ShowMessage", [L0["sdone"]])));
  await $.stmt($.call(C, "close", []));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TRAForm", "FormCreate", async function FormCreate(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.set(C, "RAllDatMod", (await $.mcall((await $.v(C, "TRAllDatMod")), "Create", [Self])));
  await $.set(C, "ProgressForm", (await $.mcall((await $.v(C, "TProgressForm")), "Create", [Self])));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TRAForm", "FormDestroy", async function FormDestroy(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mcall((await $.v(C, "RAllDatMod")), "Free", []);
  await $.mcall((await $.v(C, "ProgressForm")), "Free", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TRAForm", "SpeedButton2Click", async function SpeedButton2Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "r": 0};
  await $.fixArgs(L0, ["sender"]);
  L0["can_i_do_it"] = "Faiz borcu üzrə ehtiyatlar yenidən qiymətləndiriləcək Əminsinizmi?";
  L0["sdone"] = "Yenidən qiymətləndirmə bitdi !";
  L0["correctsinglerow"] = $.fn(async function CorrectSingleRow(p0, p1) {
  const L1 = {"crdid": $.copyArg(p0), "num": $.copyArg(p1), result: undefined};
  await $.fixArgs(L1, ["crdid", "num"]);
  {
    const $t5 = (await $.mv((await $.v(C, "RAllDatMod")), "CM_RESERVE_COUNT_NEW"));
    try {
      await $.stmt((await $.wcall([$t5], "CallProcedure", ["percent_after_months_all", ["p_CreditID", (await $.wv([$t5], "CrdID", { get: async () => L1["crdid"], set: async (v) => { L1["crdid"] = v; }, local: true }, false))]], C)));
    } catch ($t6) {
      $.rethrowControl($t6);
      if ($.excIs($t6, "EXCEPTION")) {
        L1["e"] = $.exc($t6);
        await $.stmt((await $.wcall([$t5], "LogError", [$.add($.add((await $.wv([$t5], "Num", { get: async () => L1["num"], set: async (v) => { L1["num"] = v; }, local: true }, false)), " -- "), (await $.mv((await $.wv([$t5], "E", { get: async () => L1["e"], set: async (v) => { L1["e"] = v; }, local: true }, false)), "Message")))], C)));
      }
      else { throw $t6; }
    }
  }
  return L1.result;
});
  if ($.truthy($.ne((await $.call(C, "MessageDlg", [L0["can_i_do_it"], (await $.v(C, "mtConfirmation")), [(await $.v(C, "mbYes")), (await $.v(C, "mbNo"))], 0])), (await $.v(C, "mrYes"))))) {
    return L0.result;
  }
  {
    const $t7 = (await $.mv((await $.v(C, "RAllDatMod")), "CreditsInfo"));
    if ($.truthy((await $.wv([$t7], "Active", C, false)))) {
      await $.stmt($.wcall([$t7], "Refresh", [], C));
    } else {
      await $.stmt($.wcall([$t7], "Open", [], C));
    }
    await $.wset([$t7], "R", (await $.wv([$t7], "RecordCount", C, false)), { get: async () => L0["r"], set: async (v) => { L0["r"] = v; }, local: true });
    if ($.truthy($.le((await $.wv([$t7], "R", { get: async () => L0["r"], set: async (v) => { L0["r"] = v; }, local: true }, false)), 0))) {
      return L0.result;
    }
    {
      const $t8 = (await $.mv((await $.wv([$t7], "ProgressForm", C, false)), "ProgressShower"));
      await $.wset([$t7, $t8], "Position", 0, C);
      await $.wset([$t7, $t8], "Max", (await $.wv([$t7, $t8], "R", { get: async () => L0["r"], set: async (v) => { L0["r"] = v; }, local: true }, false)), C);
      await $.wset([$t7, $t8], "Step", 1, C);
    }
    await $.mcall((await $.wv([$t7], "ProgressForm", C, false)), "Show", []);
    await $.mcall((await $.wv([$t7], "ProgressForm", C, false)), "Update", []);
    await $.mcall(Self, "Update", []);
    await $.stmt($.wcall([$t7], "FIRST", [], C));
    await $.stmt((await $.mcall((await $.mv((await $.wv([$t7], "RAllDatMod", C, false)), "CM_RESERVE_COUNT_NEW")), "CallProcedure", ["percent_after_months_pr_all", []])));
    while ($.truthy($.not((await $.wv([$t7], "EOF", C, false))))) {
      await $.stmt((await $.wcall([$t7], "CorrectSingleRow", [(await $.mv((await $.wcall([$t7], "FieldByName", ["ID"], C)), "AsInteger")), (await $.mv((await $.wcall([$t7], "FieldByName", ["NUMBEROFCREDIT"], C)), "AsString"))], { get: async () => L0["correctsinglerow"], set: async (v) => { L0["correctsinglerow"] = v; }, local: true })));
      await $.mset((await $.mv((await $.wv([$t7], "ProgressForm", C, false)), "ProgressShower")), "Position", $.add((await $.wv([$t7], "RecNo", C, false)), 1));
      await $.stmt($.wcall([$t7], "NEXT", [], C));
      await $.tick();
    }
    await $.stmt($.wcall([$t7], "CloseAll", [], C));
  }
  await $.mcall((await $.v(C, "ProgressForm")), "Close", []);
  await $.stmt((await $.call(C, "ShowMessage", [L0["sdone"]])));
  await $.stmt($.call(C, "close", []));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.setInitialization(async function __initialization(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: undefined};
  await $.set(C, "RAForm", (await $.mcall((await $.v(C, "TRAForm")), "Create", [(await $.v(C, "CommonApplication"))])));
  return L0.result;
});
  return U;
}
