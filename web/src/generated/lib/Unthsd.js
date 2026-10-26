// Generated from Unthsd.pas by pas2js — do not edit by hand; regenerate instead.
/* eslint-disable */
// @ts-nocheck

export default function define($) {
  const U = $.unit("Unthsd", ["Classes", "Uninfo", "zamirImpl1"]);
  const C = [U];
  U.defClass("ThSD", "TThread", {"x": {"name": "x", "type": "integer"}, "mypotstart": {"name": "mypotstart", "type": "Boolean"}}, {});
  U.init(async () => {
  });
  U.method("ThSD", "createform", async function createform(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: undefined};
  {
    const $t1 = (await $.v(C, "frminfo"));
    await $.wset([$t1], "frminfo", (await $.mcall((await $.wv([$t1], "Tfrminfo", C, false)), "Create", [null])), C);
    await $.stmt($.wcall([$t1], "Show", [], C));
  }
  return L0.result;
}, {"params": [], "kind": "procedure", "ptypes": []});
  U.method("ThSD", "updateprog", async function updateprog(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: undefined};
  await $.stmt((await $.mcall((await $.v(C, "frminfo")), "Timer1Timer", [null])));
  await $.mcall((await $.v(C, "frminfo")), "Update", []);
  return L0.result;
}, {"params": [], "kind": "procedure", "ptypes": []});
  U.method("thsd", "Execute", async function Execute(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: undefined};
  await $.stmt((await $.call(C, "Synchronize", [(await $.v(C, "createform"))])));
  while ($.truthy((true))) {
    if ($.truthy((await $.v(C, "stopFlag")))) {
      await $.mcall((await $.v(C, "frminfo")), "Free", []);
    } else {
      await $.stmt($.call(C, "updateprog", []));
    }
    await $.tick();
  }
  return L0.result;
}, {"params": [], "kind": "procedure", "ptypes": []});
  return U;
}
