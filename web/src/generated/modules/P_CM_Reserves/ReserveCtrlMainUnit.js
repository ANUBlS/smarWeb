// Generated from ReserveCtrlMainUnit.pas by pas2js — do not edit by hand; regenerate instead.
/* eslint-disable */
// @ts-nocheck

export default function define($) {
  const U = $.unit("ReserveCtrlMainUnit", ["Windows", "Messages", "SysUtils", "Classes", "Graphics", "Controls", "Forms", "NLSDialogs", "NLSLocalizer", "StdCtrls", "ReserveContDataModule", "CommonDecls", "ReserveProgressFormImpl"]);
  const C = [U];
  U.defClass("TReserveContMainForm", "TForm", {"nlslocalizer1": {"name": "NLSLocalizer1", "type": "TNLSLocalizer"}, "startbutton": {"name": "StartButton", "type": "TButton"}}, {});
  U.init(async () => {
    U.var_("ReserveContMainForm", null, "TReserveContMainForm");
  });
  U.method("TReserveContMainForm", "FormCanResize", async function FormCanResize(Self, p0, p1, p2, p3) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "newwidth": $.asRef(p1), "newheight": $.asRef(p2), "resize": $.asRef(p3), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await L0["resize"].set(false);
  return L0.result;
}, {"params": ["Sender", "NewWidth", "NewHeight", "Resize"], "kind": "procedure", "ptypes": ["TObject", "Integer", "Integer", "Boolean"]});
  U.method("TReserveContMainForm", "FormCreate", async function FormCreate(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.set(C, "ReserveContDataMod", (await $.mcall((await $.v(C, "TReserveContDataMod")), "Create", [Self])));
  await $.set(C, "ProgressForm", (await $.mcall((await $.v(C, "TProgressForm")), "Create", [Self])));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.func("InitPlugin", async function InitPlugin(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"s": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["s"]);
  await $.mcall((await $.v(C, "ReserveContMainForm")), "ShowModal", []);
  return L0.result;
}, {"params": ["S"], "kind": "procedure", "ptypes": ["String"]});
  U.method("TReserveContMainForm", "StartButtonClick", async function StartButtonClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "r": 0};
  await $.fixArgs(L0, ["sender"]);
  L0["can_i_do_it"] = "Yenidən qiymətləndirim?";
  L0["sdone"] = "Yenidən qiymətləndirmə bitdi !";
  L0["correctsinglerow"] = $.fn(async function CorrectSingleRow(p0, p1) {
  const L1 = {"crdid": $.copyArg(p0), "num": $.copyArg(p1), result: undefined};
  await $.fixArgs(L1, ["crdid", "num"]);
  {
    const $t1 = (await $.mv((await $.v(C, "ReserveContDataMod")), "CM_RESERVE_CONTR"));
    try {
      await $.stmt((await $.wcall([$t1], "CallProcedure", ["CorrectReserve", ["p_CreditID", (await $.wv([$t1], "CrdID", { get: async () => L1["crdid"], set: async (v) => { L1["crdid"] = v; }, local: true }, false))]], C)));
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
    const $t3 = (await $.mv((await $.v(C, "ReserveContDataMod")), "CreditsInfo"));
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
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TReserveContMainForm", "FormDestroy", async function FormDestroy(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mcall((await $.v(C, "ReserveContDataMod")), "Free", []);
  await $.mcall((await $.v(C, "ProgressForm")), "Free", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.setInitialization(async function __initialization(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: undefined};
  await $.set(C, "ReserveContMainForm", (await $.mcall((await $.v(C, "TReserveContMainForm")), "Create", [(await $.v(C, "CommonApplication"))])));
  return L0.result;
});
  return U;
}
