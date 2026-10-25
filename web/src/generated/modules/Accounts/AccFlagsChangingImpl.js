// Generated from AccFlagsChangingImpl.pas by pas2js — do not edit by hand; regenerate instead.
/* eslint-disable */
// @ts-nocheck

export default function define($) {
  const U = $.unit("AccFlagsChangingImpl", ["Windows", "Messages", "SysUtils", "Classes", "Graphics", "Controls", "Forms", "Dialogs", "StdCtrls", "CheckLst"]);
  const C = [U];
  U.defClass("TAccFlagsForm", "TForm", {"clbaccflags": {"name": "CLBAccFlags", "type": "TCheckListBox"}, "applybutton": {"name": "ApplyButton", "type": "TButton"}, "result": {"name": "Result", "type": "String"}, "fmodified": {"name": "FModified", "type": "Boolean"}}, {});
  U.init(async () => {
    U.var_("AccFlagsForm", null, "TAccFlagsForm");
  });
  U.method("TAccFlagsForm", "CLBAccFlagsClickCheck", async function CLBAccFlagsClickCheck(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.set(C, "FModified", true);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TAccFlagsForm", "ApplyButtonClick", async function ApplyButtonClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  L0["buildaccflags"] = $.fn(async function BuildAccFlags() {
  const L1 = {result: '', "i": 0, "s": ''};
  L1["result"] = "";
  {
    const $t1 = (await $.v(C, "CLBAccFlags"));
    { const $t2 = $.sub((await $.mv((await $.wv([$t1], "Items", C, false)), "Count")), 1);
      await $.wset([$t1], "I", 0, { get: async () => L1["i"], set: async (v) => { L1["i"] = v; }, local: true });
      let $t3 = true;
      for (;;) {
        if (!$t3) { await $.wset([$t1], "I", $.succ((await $.wv([$t1], "I", { get: async () => L1["i"], set: async (v) => { L1["i"] = v; }, local: true }, false)), 1), { get: async () => L1["i"], set: async (v) => { L1["i"] = v; }, local: true }); }
        $t3 = false;
        if (!($.ord((await $.wv([$t1], "I", { get: async () => L1["i"], set: async (v) => { L1["i"] = v; }, local: true }, false))) <= $.ord($t2))) break;
        if ($.truthy((await $.idx((await $.wv([$t1], "Checked", C, false)), [(await $.wv([$t1], "I", { get: async () => L1["i"], set: async (v) => { L1["i"] = v; }, local: true }, false))])))) {
          await $.wset([$t1], "S", (await $.idx((await $.wv([$t1], "Items", C, false)), [(await $.wv([$t1], "I", { get: async () => L1["i"], set: async (v) => { L1["i"] = v; }, local: true }, false))])), { get: async () => L1["s"], set: async (v) => { L1["s"] = v; }, local: true });
          if ($.truthy($.eq((await $.wv([$t1], "Result", { get: async () => L1["result"], set: async (v) => { L1["result"] = v; }, local: true }, false)), ""))) {
            await $.wset([$t1], "Result", $.add((await $.wv([$t1], "Result", { get: async () => L1["result"], set: async (v) => { L1["result"] = v; }, local: true }, false)), (await $.idx((await $.wv([$t1], "S", { get: async () => L1["s"], set: async (v) => { L1["s"] = v; }, local: true }, false)), [1]))), { get: async () => L1["result"], set: async (v) => { L1["result"] = v; }, local: true });
          } else {
            await $.wset([$t1], "Result", $.add($.add((await $.wv([$t1], "Result", { get: async () => L1["result"], set: async (v) => { L1["result"] = v; }, local: true }, false)), ","), (await $.idx((await $.wv([$t1], "S", { get: async () => L1["s"], set: async (v) => { L1["s"] = v; }, local: true }, false)), [1]))), { get: async () => L1["result"], set: async (v) => { L1["result"] = v; }, local: true });
          }
        }
        await $.tick();
      }
    }
  }
  return L1.result;
});
  L0["result"] = L0["buildaccflags"];
  await $.set(C, "ModalResult", (await $.v(C, "mrOK")));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TAccFlagsForm", "FormKeyDown", async function FormKeyDown(Self, p0, p1, p2) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "key": $.asRef(p1), "shift": $.copyArg(p2), result: undefined};
  await $.fixArgs(L0, ["sender", "shift"]);
  if ($.truthy($.eq((await L0["key"].get()), (await $.v(C, "VK_ESCAPE"))))) {
    await $.set(C, "ModalResult", (await $.v(C, "mrCancel")));
  }
  return L0.result;
}, {"params": ["Sender", "Key", "Shift"], "kind": "procedure", "ptypes": ["TObject", "Word", "TShiftState"]});
  return U;
}
