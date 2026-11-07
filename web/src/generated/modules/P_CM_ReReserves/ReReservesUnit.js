// Generated from ReReservesUnit.pas by pas2js — do not edit by hand; regenerate instead.
/* eslint-disable */
// @ts-nocheck

export default function define($) {
  const U = $.unit("ReReservesUnit", ["Windows", "Messages", "SysUtils", "Classes", "Graphics", "Controls", "Forms", "NLSDialogs", "NLSLocalizer", "StdCtrls", "ReReservesDatModImpl", "CommonDecls", "ProgressUnit"]);
  const C = [U];
  U.defClass("TReReservesForm", "TForm", {"button1": {"name": "Button1", "type": "TButton"}, "nlslocalizer1": {"name": "NLSLocalizer1", "type": "TNLSLocalizer"}}, {});
  U.init(async () => {
    U.var_("ReReservesForm", null, "TReReservesForm");
  });
  U.func("InitPlugin", async function InitPlugin(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"s": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["s"]);
  await $.mcall((await $.v(C, "ReReservesForm")), "ShowModal", []);
  return L0.result;
}, {"params": ["s"], "kind": "procedure", "ptypes": ["String"]});
  U.method("TReReservesForm", "Button1Click", async function Button1Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "i": 0, "slectedrowcnt": 0, "crdid": 0};
  await $.fixArgs(L0, ["sender"]);
  L0["can_rereserveinf"] = "Seçilmiş ehtiyatların qiymətləndirilməsinə əminsinizmi?";
  {
    const $t1 = (await $.mv((await $.v(C, "ProgressForm")), "ProgressBar"));
    await $.wset([$t1], "Position", 0, C);
    await $.wset([$t1], "Max", (await $.mv((await $.mv((await $.wv([$t1], "CommonDBGrid", C, false)), "SelectedRows")), "Count")), C);
    await $.wset([$t1], "Step", 1, C);
  }
  if ($.truthy($.ne((await $.call(C, "MessageDlg", [L0["can_rereserveinf"], (await $.v(C, "mtInformation")), [(await $.v(C, "mbYes")), (await $.v(C, "mbNo"))], 0])), (await $.v(C, "mrYes"))))) {
    return L0.result;
  }
  await $.mcall((await $.v(C, "ProgressForm")), "Show", []);
  await $.mcall((await $.v(C, "ProgressForm")), "Update", []);
  await $.mcall(Self, "Update", []);
  if ($.truthy($.gt((await $.mv((await $.mv((await $.v(C, "CommonDBGrid")), "SelectedRows")), "Count")), 1))) {
    {
      const $t2 = (await $.wobj(C, "CommonDBGrid"));
      const $t3 = (await $.mv((await $.wv([$t2], "DataSource", C, false)), "DataSet"));
      await $.wset([$t2, $t3], "SlectedRowCnt", (await $.mv((await $.wv([$t2, $t3], "SelectedRows", C, false)), "Count")), { get: async () => L0["slectedrowcnt"], set: async (v) => { L0["slectedrowcnt"] = v; }, local: true });
      { const $t4 = $.sub((await $.wv([$t2, $t3], "SlectedRowCnt", { get: async () => L0["slectedrowcnt"], set: async (v) => { L0["slectedrowcnt"] = v; }, local: true }, false)), 1);
        await $.wset([$t2, $t3], "i", 0, { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true });
        let $t5 = true;
        for (;;) {
          if (!$t5) { await $.wset([$t2, $t3], "i", $.succ((await $.wv([$t2, $t3], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false)), 1), { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }); }
          $t5 = false;
          if (!($.ord((await $.wv([$t2, $t3], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false))) <= $.ord($t4))) break;
          await $.stmt((await $.wcall([$t2, $t3], "GotoBookmark", [(await $.wcall([$t2, $t3], "Pointer", [(await $.idx((await $.wv([$t2, $t3], "SelectedRows", C, false)), [(await $.wv([$t2, $t3], "I", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false))]))], C))], C)));
          await $.wset([$t2, $t3], "CrdId", (await $.mv((await $.wcall([$t2, $t3], "FieldByName", ["ID"], C)), "AsInteger")), { get: async () => L0["crdid"], set: async (v) => { L0["crdid"] = v; }, local: true });
          {
            const $t6 = (await $.wv([$t2, $t3], "ReReservesDatMod", C, false));
            await $.stmt((await $.mcall((await $.wv([$t2, $t3, $t6], "cm_reserve_contr", C, false)), "CallProcedure", ["CorrectReserve", [(await $.wv([$t2, $t3, $t6], "CrdId", { get: async () => L0["crdid"], set: async (v) => { L0["crdid"] = v; }, local: true }, false))]])));
          }
          await $.mset((await $.mv((await $.wv([$t2, $t3], "ProgressForm", C, false)), "ProgressBar")), "Position", $.add((await $.wv([$t2, $t3], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false)), 1));
          await $.tick();
        }
      }
    }
  } else {
    {
      const $t7 = (await $.wobj(C, "CommonDBGrid"));
      const $t8 = (await $.mv((await $.wv([$t7], "DataSource", C, false)), "DataSet"));
      await $.wset([$t7, $t8], "CrdId", (await $.mv((await $.wcall([$t7, $t8], "FieldByName", ["ID"], C)), "AsInteger")), { get: async () => L0["crdid"], set: async (v) => { L0["crdid"] = v; }, local: true });
      {
        const $t9 = (await $.wv([$t7, $t8], "ReReservesDatMod", C, false));
        await $.stmt((await $.mcall((await $.wv([$t7, $t8, $t9], "cm_reserve_contr", C, false)), "CallProcedure", ["CorrectReserve", [(await $.wv([$t7, $t8, $t9], "CrdId", { get: async () => L0["crdid"], set: async (v) => { L0["crdid"] = v; }, local: true }, false))]])));
      }
    }
  }
  await $.mcall((await $.v(C, "ProgressForm")), "Close", []);
  await $.stmt((await $.call(C, "ShowMessage", ["Qiymətləndirilmə bitdi !"])));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TReReservesForm", "FormCanResize", async function FormCanResize(Self, p0, p1, p2, p3) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "newwidth": $.asRef(p1), "newheight": $.asRef(p2), "resize": $.asRef(p3), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await L0["resize"].set(false);
  return L0.result;
}, {"params": ["Sender", "NewWidth", "NewHeight", "Resize"], "kind": "procedure", "ptypes": ["TObject", "Integer", "Integer", "Boolean"]});
  U.method("TReReservesForm", "FormCreate", async function FormCreate(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.set(C, "ReReservesDatMod", (await $.mcall((await $.v(C, "TReReservesDatMod")), "Create", [Self])));
  await $.set(C, "ProgressForm", (await $.mcall((await $.v(C, "TProgressForm")), "Create", [Self])));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TReReservesForm", "FormDestroy", async function FormDestroy(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mcall((await $.v(C, "ReReservesDatMod")), "Free", []);
  await $.mcall((await $.v(C, "ProgressForm")), "Free", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TReReservesForm", "FormKeyPress", async function FormKeyPress(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "key": $.asRef(p1), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.eq((await $.call(C, "ord", [(await L0["key"].get())])), (await $.v(C, "VK_ESCAPE"))))) {
    await $.stmt($.call(C, "close", []));
  }
  return L0.result;
}, {"params": ["Sender", "Key"], "kind": "procedure", "ptypes": ["TObject", "Char"]});
  U.setInitialization(async function __initialization(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: undefined};
  await $.set(C, "ReReservesForm", (await $.mcall((await $.v(C, "TReReservesForm")), "Create", [(await $.v(C, "CommonApplication"))])));
  return L0.result;
});
  return U;
}
