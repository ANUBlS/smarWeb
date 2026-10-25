// Generated from SBStoredProc.pas by pas2js — do not edit by hand; regenerate instead.
/* eslint-disable */
// @ts-nocheck

export default function define($) {
  const U = $.unit("SBStoredProc", ["Classes", "CheckLst"]);
  const C = [U];
  U.init(async () => {
  });
  U.func("StrToComma", async function StrToComma(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"s": $.copyArg(p0), "commadelimiter": (p1 === undefined ? "'" : p1), result: '', "stringlist": null};
  await $.fixArgs(L0, ["s", "commadelimiter"]);
  L0["reverse"] = $.fn(async function Reverse(p0, p1) {
  const L1 = {"s": $.copyArg(p0), "stringlist": $.copyArg(p1), result: undefined, "p": 0, "paredstr": ''};
  await $.fixArgs(L1, ["s", "stringlist"]);
  L1["p"] = (await $.call(C, "Pos", [",", L1["s"]]));
  if ($.truthy($.ne(L1["p"], 0))) {
    L1["paredstr"] = $.add($.add(L0["commadelimiter"], (await $.call(C, "Copy", [L1["s"], 1, $.sub(L1["p"], 1)]))), L0["commadelimiter"]);
    await $.stmt((await $.mcall(L1["stringlist"], "Add", [L1["paredstr"]])));
    await $.stmt((await $.call(C, "Delete", [$.ref(async () => L1["s"], async ($t1) => { L1["s"] = $t1; }), 1, L1["p"]])));
    await $.stmt((await $.callv(L0["reverse"], [L1["s"], L1["stringlist"]])));
  } else {
    await $.stmt((await $.mcall(L1["stringlist"], "Add", [$.add($.add(L0["commadelimiter"], L1["s"]), L0["commadelimiter"])])));
  }
  return L1.result;
});
  L0["s"] = (await $.call(C, "TrimAll", [L0["s"]]));
  L0["stringlist"] = (await $.mv((await $.v(C, "TStringList")), "Create"));
  await $.stmt((await $.callv(L0["reverse"], [L0["s"], L0["stringlist"]])));
  L0["result"] = (await $.mv(L0["stringlist"], "CommaText"));
  return L0.result;
}, {"params": ["S", "CommaDelimiter"], "kind": "function", "ptypes": ["String", "char"]});
  U.func("TrimAll", async function TrimAll(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"s": $.copyArg(p0), "commadelimiter": (p1 === undefined ? " " : p1), result: '', "p": 0};
  await $.fixArgs(L0, ["s", "commadelimiter"]);
  L0["p"] = 1;
  while ($.truthy($.gt(L0["p"], 0))) {
    L0["p"] = (await $.call(C, "Pos", [L0["commadelimiter"], L0["s"]]));
    await $.stmt((await $.call(C, "Delete", [$.ref(async () => L0["s"], async ($t2) => { L0["s"] = $t2; }), L0["p"], 1])));
    await $.tick();
  }
  L0["result"] = L0["s"];
  return L0.result;
}, {"params": ["S", "CommaDelimiter"], "kind": "function", "ptypes": ["String", "char"]});
  U.func("DeleteGaps", async function DeleteGaps(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"s": $.asRef(p0), "commadelimiter": (p1 === undefined ? " " : p1), result: '', "p": 0};
  await $.fixArgs(L0, ["commadelimiter"]);
  L0["p"] = (await $.call(C, "Pos", [L0["commadelimiter"], (await L0["s"].get())]));
  if ($.truthy($.gt(L0["p"], 0))) {
    await $.stmt((await $.call(C, "Delete", [$.ref(async () => (await L0["s"].get()), async ($t3) => { await L0["s"].set($t3); }), L0["p"], 1])));
    await $.stmt((await $.callv(L0["deletegaps"], [$.ref(async () => (await L0["s"].get()), async ($t4) => { await L0["s"].set($t4); }), L0["commadelimiter"]])));
  }
  L0["result"] = (await L0["s"].get());
  return L0.result;
}, {"params": ["S", "CommaDelimiter"], "kind": "function", "ptypes": ["String", "char"]});
  U.func("WillEnabled", async function WillEnabled(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: false, "i": 0, "icount": 0, "ischecked": false};
  await $.fixArgs(L0, ["sender"]);
  L0["i"] = 0;
  L0["ischecked"] = false;
  {
    const $t5 = L0["sender"];
    await $.wset([$t5], "icount", (await $.mv((await $.wv([$t5], "Items", C, false)), "Count")), { get: async () => L0["icount"], set: async (v) => { L0["icount"] = v; }, local: true });
    while ($.truthy((await $.and_(($.le((await $.wv([$t5], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false)), $.sub((await $.wv([$t5], "icount", { get: async () => L0["icount"], set: async (v) => { L0["icount"] = v; }, local: true }, false)), 1))), async () => ($.not((await $.wv([$t5], "IsChecked", { get: async () => L0["ischecked"], set: async (v) => { L0["ischecked"] = v; }, local: true }, false)))))))) {
      await $.wset([$t5], "IsChecked", (await $.idx((await $.wv([$t5], "Checked", C, false)), [(await $.wv([$t5], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false))])), { get: async () => L0["ischecked"], set: async (v) => { L0["ischecked"] = v; }, local: true });
      await $.stmt((await $.wcall([$t5], "inc", [$.ref(async () => (await $.wv([$t5], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false)), async ($t6) => { await $.wset([$t5], "i", $t6, { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }); })], C)));
      await $.tick();
    }
  }
  L0["result"] = L0["ischecked"];
  return L0.result;
}, {"params": ["Sender"], "kind": "function", "ptypes": ["TCheckListBox"]});
  U.func("IsEnabled", async function IsEnabled(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: false, "i": 0, "icount": 0, "ischecked": false};
  await $.fixArgs(L0, ["sender"]);
  L0["i"] = 0;
  L0["ischecked"] = true;
  {
    const $t7 = L0["sender"];
    await $.wset([$t7], "icount", (await $.mv((await $.wv([$t7], "Items", C, false)), "Count")), { get: async () => L0["icount"], set: async (v) => { L0["icount"] = v; }, local: true });
    while ($.truthy((await $.and_(($.le((await $.wv([$t7], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false)), $.sub((await $.wv([$t7], "icount", { get: async () => L0["icount"], set: async (v) => { L0["icount"] = v; }, local: true }, false)), 1))), async () => ((await $.wv([$t7], "IsChecked", { get: async () => L0["ischecked"], set: async (v) => { L0["ischecked"] = v; }, local: true }, false))))))) {
      await $.wset([$t7], "IsChecked", (await $.and_((await $.wv([$t7], "IsChecked", { get: async () => L0["ischecked"], set: async (v) => { L0["ischecked"] = v; }, local: true }, false)), async () => (await $.idx((await $.wv([$t7], "Checked", C, false)), [(await $.wv([$t7], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false))])))), { get: async () => L0["ischecked"], set: async (v) => { L0["ischecked"] = v; }, local: true });
      await $.stmt((await $.wcall([$t7], "inc", [$.ref(async () => (await $.wv([$t7], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false)), async ($t8) => { await $.wset([$t7], "i", $t8, { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }); })], C)));
      await $.tick();
    }
  }
  L0["result"] = L0["ischecked"];
  return L0.result;
}, {"params": ["Sender"], "kind": "function", "ptypes": ["TCheckListBox"]});
  return U;
}
