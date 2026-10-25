// Generated from AdministrationUtils.pas by pas2js — do not edit by hand; regenerate instead.
/* eslint-disable */
// @ts-nocheck

export default function define($) {
  const U = $.unit("AdministrationUtils", ["SysUtils", "grids"]);
  const C = [U];
  U.init(async () => {
  });
  U.func("ReinitializeRows", async function ReinitializeRows(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sg": $.copyArg(p0), result: undefined, "i": 0, "z": 0, "delrow": false};
  await $.fixArgs(L0, ["sg"]);
  {
    const $t1 = L0["sg"];
    await $.wset([$t1], "DelRow", (await $.wv([$t1], "True", C, false)), { get: async () => L0["delrow"], set: async (v) => { L0["delrow"] = v; }, local: true });
    { const $t2 = 0;
      await $.wset([$t1], "i", $.sub((await $.wv([$t1], "RowCount", C, false)), 1), { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true });
      let $t3 = true;
      for (;;) {
        if (!$t3) { await $.wset([$t1], "i", $.succ((await $.wv([$t1], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false)), -1), { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }); }
        $t3 = false;
        if (!($.ord((await $.wv([$t1], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false))) >= $.ord($t2))) break;
        { const $t4 = $.sub((await $.wv([$t1], "ColCount", C, false)), 1);
          await $.wset([$t1], "z", 0, { get: async () => L0["z"], set: async (v) => { L0["z"] = v; }, local: true });
          let $t5 = true;
          for (;;) {
            if (!$t5) { await $.wset([$t1], "z", $.succ((await $.wv([$t1], "z", { get: async () => L0["z"], set: async (v) => { L0["z"] = v; }, local: true }, false)), 1), { get: async () => L0["z"], set: async (v) => { L0["z"] = v; }, local: true }); }
            $t5 = false;
            if (!($.ord((await $.wv([$t1], "z", { get: async () => L0["z"], set: async (v) => { L0["z"] = v; }, local: true }, false))) <= $.ord($t4))) break;
            await $.wset([$t1], "DelRow", (await $.and_((await $.wv([$t1], "DelRow", { get: async () => L0["delrow"], set: async (v) => { L0["delrow"] = v; }, local: true }, false)), async () => ($.eq((await $.idx((await $.wv([$t1], "Cells", C, false)), [(await $.wv([$t1], "z", { get: async () => L0["z"], set: async (v) => { L0["z"] = v; }, local: true }, false)), (await $.wv([$t1], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false))])), (await $.wv([$t1], "EmptyStr", C, false)))))), { get: async () => L0["delrow"], set: async (v) => { L0["delrow"] = v; }, local: true });
            await $.tick();
          }
        }
        if ($.truthy((await $.wv([$t1], "DelRow", { get: async () => L0["delrow"], set: async (v) => { L0["delrow"] = v; }, local: true }, false)))) {
          await $.wset([$t1], "RowCount", $.sub((await $.wv([$t1], "RowCount", C, false)), 1), C);
          await $.wset([$t1], "DelRow", (await $.wv([$t1], "True", C, false)), { get: async () => L0["delrow"], set: async (v) => { L0["delrow"] = v; }, local: true });
        }
        await $.tick();
      }
    }
  }
  return L0.result;
}, {"params": ["SG"], "kind": "procedure", "ptypes": ["TStringGrid"]});
  U.func("DeleteCell", async function DeleteCell(Self, p0, p1, p2) {
  const C = $.chain(Self, U);
  const L0 = {"sg": $.copyArg(p0), "dcoll": $.copyArg(p1), "drow": $.copyArg(p2), result: undefined, "i": 0};
  await $.fixArgs(L0, ["sg", "dcoll", "drow"]);
  {
    const $t6 = L0["sg"];
    { const $t7 = $.sub((await $.wv([$t6], "RowCount", C, false)), 1);
      await $.wset([$t6], "i", (await $.wv([$t6], "DRow", { get: async () => L0["drow"], set: async (v) => { L0["drow"] = v; }, local: true }, false)), { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true });
      let $t8 = true;
      for (;;) {
        if (!$t8) { await $.wset([$t6], "i", $.succ((await $.wv([$t6], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false)), 1), { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }); }
        $t8 = false;
        if (!($.ord((await $.wv([$t6], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false))) <= $.ord($t7))) break;
        { const $t9 = await $.iset((await $.wv([$t6], "Cells", C, false)), [(await $.wv([$t6], "DColl", { get: async () => L0["dcoll"], set: async (v) => { L0["dcoll"] = v; }, local: true }, false)), (await $.wv([$t6], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false))], (await $.idx((await $.wv([$t6], "Cells", C, false)), [(await $.wv([$t6], "DColl", { get: async () => L0["dcoll"], set: async (v) => { L0["dcoll"] = v; }, local: true }, false)), $.add((await $.wv([$t6], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false)), 1)]))); if ($t9 !== undefined) { await $.wset([$t6], "Cells", $t9, C); } }
        { const $t10 = await $.iset((await $.wv([$t6], "Cells", C, false)), [(await $.wv([$t6], "DColl", { get: async () => L0["dcoll"], set: async (v) => { L0["dcoll"] = v; }, local: true }, false)), $.add((await $.wv([$t6], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false)), 1)], (await $.wv([$t6], "EmptyStr", C, false))); if ($t10 !== undefined) { await $.wset([$t6], "Cells", $t10, C); } }
        await $.tick();
      }
    }
  }
  return L0.result;
}, {"params": ["SG", "DColl", "DRow"], "kind": "procedure", "ptypes": ["TStringGrid", "Integer", "Integer"]});
  U.func("DeleteLast", async function DeleteLast(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sg": $.copyArg(p0), "dcoll": $.copyArg(p1), result: undefined, "i": 0};
  await $.fixArgs(L0, ["sg", "dcoll"]);
  {
    const $t11 = L0["sg"];
    { const $t12 = 0;
      await $.wset([$t11], "i", $.sub((await $.wv([$t11], "RowCount", C, false)), 1), { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true });
      let $t13 = true;
      for (;;) {
        if (!$t13) { await $.wset([$t11], "i", $.succ((await $.wv([$t11], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false)), -1), { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }); }
        $t13 = false;
        if (!($.ord((await $.wv([$t11], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false))) >= $.ord($t12))) break;
        if ($.truthy($.ne((await $.idx((await $.wv([$t11], "Cells", C, false)), [(await $.wv([$t11], "DColl", { get: async () => L0["dcoll"], set: async (v) => { L0["dcoll"] = v; }, local: true }, false)), (await $.wv([$t11], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false))])), (await $.wv([$t11], "EmptyStr", C, false))))) {
          await $.stmt((await $.wcall([$t11], "DeleteCell", [(await $.wv([$t11], "SG", { get: async () => L0["sg"], set: async (v) => { L0["sg"] = v; }, local: true }, false)), (await $.wv([$t11], "DColl", { get: async () => L0["dcoll"], set: async (v) => { L0["dcoll"] = v; }, local: true }, false)), (await $.wv([$t11], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false))], C)));
          break;
        }
        await $.tick();
      }
    }
  }
  return L0.result;
}, {"params": ["SG", "DColl"], "kind": "procedure", "ptypes": ["TStringGrid", "Integer"]});
  U.func("CopyCell", async function CopyCell(Self, p0, p1, p2, p3) {
  const C = $.chain(Self, U);
  const L0 = {"sg": $.copyArg(p0), "dcoll": $.copyArg(p1), "drow": $.copyArg(p2), "icoll": $.copyArg(p3), result: undefined, "i": 0, "addrow": false};
  await $.fixArgs(L0, ["sg", "dcoll", "drow", "icoll"]);
  {
    const $t14 = L0["sg"];
    await $.wset([$t14], "AddRow", (await $.wv([$t14], "True", C, false)), { get: async () => L0["addrow"], set: async (v) => { L0["addrow"] = v; }, local: true });
    { const $t15 = $.sub((await $.wv([$t14], "RowCount", C, false)), 1);
      await $.wset([$t14], "i", 0, { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true });
      let $t16 = true;
      for (;;) {
        if (!$t16) { await $.wset([$t14], "i", $.succ((await $.wv([$t14], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false)), 1), { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }); }
        $t16 = false;
        if (!($.ord((await $.wv([$t14], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false))) <= $.ord($t15))) break;
        if ($.truthy(($.eq((await $.idx((await $.wv([$t14], "Cells", C, false)), [(await $.wv([$t14], "IColl", { get: async () => L0["icoll"], set: async (v) => { L0["icoll"] = v; }, local: true }, false)), (await $.wv([$t14], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false))])), (await $.wv([$t14], "EmptyStr", C, false)))))) {
          await $.wset([$t14], "AddRow", (await $.wv([$t14], "False", C, false)), { get: async () => L0["addrow"], set: async (v) => { L0["addrow"] = v; }, local: true });
          { const $t17 = await $.iset((await $.wv([$t14], "Cells", C, false)), [(await $.wv([$t14], "IColl", { get: async () => L0["icoll"], set: async (v) => { L0["icoll"] = v; }, local: true }, false)), (await $.wv([$t14], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false))], (await $.idx((await $.wv([$t14], "Cells", C, false)), [(await $.wv([$t14], "DColl", { get: async () => L0["dcoll"], set: async (v) => { L0["dcoll"] = v; }, local: true }, false)), (await $.wv([$t14], "DRow", { get: async () => L0["drow"], set: async (v) => { L0["drow"] = v; }, local: true }, false))]))); if ($t17 !== undefined) { await $.wset([$t14], "Cells", $t17, C); } }
          break;
        }
        await $.tick();
      }
    }
    if ($.truthy((await $.wv([$t14], "AddRow", { get: async () => L0["addrow"], set: async (v) => { L0["addrow"] = v; }, local: true }, false)))) {
      await $.wset([$t14], "RowCount", $.add((await $.wv([$t14], "RowCount", C, false)), 1), C);
      { const $t18 = await $.iset((await $.wv([$t14], "Cells", C, false)), [(await $.wv([$t14], "IColl", { get: async () => L0["icoll"], set: async (v) => { L0["icoll"] = v; }, local: true }, false)), $.sub((await $.wv([$t14], "RowCount", C, false)), 1)], (await $.idx((await $.wv([$t14], "Cells", C, false)), [(await $.wv([$t14], "DColl", { get: async () => L0["dcoll"], set: async (v) => { L0["dcoll"] = v; }, local: true }, false)), (await $.wv([$t14], "DRow", { get: async () => L0["drow"], set: async (v) => { L0["drow"] = v; }, local: true }, false))]))); if ($t18 !== undefined) { await $.wset([$t14], "Cells", $t18, C); } }
    }
  }
  return L0.result;
}, {"params": ["SG", "DColl", "DRow", "IColl"], "kind": "procedure", "ptypes": ["TStringGrid", "Integer", "Integer", "Integer"]});
  U.func("CutCell", async function CutCell(Self, p0, p1, p2, p3) {
  const C = $.chain(Self, U);
  const L0 = {"sg": $.copyArg(p0), "dcoll": $.copyArg(p1), "drow": $.copyArg(p2), "icoll": $.copyArg(p3), result: undefined};
  await $.fixArgs(L0, ["sg", "dcoll", "drow", "icoll"]);
  await $.stmt((await $.call(C, "CopyCell", [L0["sg"], L0["dcoll"], L0["drow"], L0["icoll"]])));
  await $.stmt((await $.call(C, "DeleteCell", [L0["sg"], L0["dcoll"], L0["drow"]])));
  return L0.result;
}, {"params": ["SG", "DColl", "DRow", "IColl"], "kind": "procedure", "ptypes": ["TStringGrid", "Integer", "Integer", "Integer"]});
  U.func("DeleteCellRect", async function DeleteCellRect(Self, p0, p1, p2) {
  const C = $.chain(Self, U);
  const L0 = {"sg": $.copyArg(p0), "dcoll": $.copyArg(p1), "drow": $.copyArg(p2), result: undefined, "i": 0};
  await $.fixArgs(L0, ["sg", "dcoll", "drow"]);
  {
    const $t19 = L0["sg"];
    const $t20 = (await $.wv([$t19], "Selection", C, false));
    if ($.truthy((await $.or_(($.eq((await $.wv([$t19, $t20], "Left", C, false)), (await $.wv([$t19, $t20], "DColl", { get: async () => L0["dcoll"], set: async (v) => { L0["dcoll"] = v; }, local: true }, false)))), async () => ($.eq((await $.wv([$t19, $t20], "Right", C, false)), (await $.wv([$t19, $t20], "DColl", { get: async () => L0["dcoll"], set: async (v) => { L0["dcoll"] = v; }, local: true }, false)))))))) {
      { const $t21 = (await $.wv([$t19, $t20], "Top", C, false));
        await $.wset([$t19, $t20], "i", (await $.wv([$t19, $t20], "Bottom", C, false)), { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true });
        let $t22 = true;
        for (;;) {
          if (!$t22) { await $.wset([$t19, $t20], "i", $.succ((await $.wv([$t19, $t20], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false)), -1), { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }); }
          $t22 = false;
          if (!($.ord((await $.wv([$t19, $t20], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false))) >= $.ord($t21))) break;
          await $.stmt((await $.wcall([$t19, $t20], "DeleteCell", [(await $.wv([$t19, $t20], "SG", { get: async () => L0["sg"], set: async (v) => { L0["sg"] = v; }, local: true }, false)), (await $.wv([$t19, $t20], "DColl", { get: async () => L0["dcoll"], set: async (v) => { L0["dcoll"] = v; }, local: true }, false)), (await $.wv([$t19, $t20], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false))], C)));
          await $.tick();
        }
      }
    }
  }
  await $.stmt((await $.call(C, "ReinitializeRows", [L0["sg"]])));
  return L0.result;
}, {"params": ["SG", "DColl", "DRow"], "kind": "procedure", "ptypes": ["TStringGrid", "Integer", "Integer"]});
  U.func("CutCellRect", async function CutCellRect(Self, p0, p1, p2, p3) {
  const C = $.chain(Self, U);
  const L0 = {"sg": $.copyArg(p0), "dcoll": $.copyArg(p1), "drow": $.copyArg(p2), "icoll": $.copyArg(p3), result: undefined, "i": 0, "selrect": null};
  await $.fixArgs(L0, ["sg", "dcoll", "drow", "icoll"]);
  {
    const $t23 = L0["sg"];
    const $t24 = (await $.wv([$t23], "Selection", C, false));
    await $.wset([$t23, $t24], "SelRect", (await $.wv([$t23, $t24], "Selection", C, false)), { get: async () => L0["selrect"], set: async (v) => { L0["selrect"] = v; }, local: true });
    if ($.truthy((await $.or_(($.eq((await $.wv([$t23, $t24], "Left", C, false)), (await $.wv([$t23, $t24], "DColl", { get: async () => L0["dcoll"], set: async (v) => { L0["dcoll"] = v; }, local: true }, false)))), async () => ($.eq((await $.wv([$t23, $t24], "Right", C, false)), (await $.wv([$t23, $t24], "DColl", { get: async () => L0["dcoll"], set: async (v) => { L0["dcoll"] = v; }, local: true }, false)))))))) {
      { const $t25 = (await $.wv([$t23, $t24], "Bottom", C, false));
        await $.wset([$t23, $t24], "i", (await $.wv([$t23, $t24], "top", C, false)), { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true });
        let $t26 = true;
        for (;;) {
          if (!$t26) { await $.wset([$t23, $t24], "i", $.succ((await $.wv([$t23, $t24], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false)), 1), { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }); }
          $t26 = false;
          if (!($.ord((await $.wv([$t23, $t24], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false))) <= $.ord($t25))) break;
          await $.stmt((await $.wcall([$t23, $t24], "CopyCell", [(await $.wv([$t23, $t24], "SG", { get: async () => L0["sg"], set: async (v) => { L0["sg"] = v; }, local: true }, false)), (await $.wv([$t23, $t24], "DColl", { get: async () => L0["dcoll"], set: async (v) => { L0["dcoll"] = v; }, local: true }, false)), (await $.wv([$t23, $t24], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false)), (await $.wv([$t23, $t24], "IColl", { get: async () => L0["icoll"], set: async (v) => { L0["icoll"] = v; }, local: true }, false))], C)));
          await $.tick();
        }
      }
    }
    await $.wset([$t23, $t24], "Selection", (await $.wv([$t23, $t24], "SelRect", { get: async () => L0["selrect"], set: async (v) => { L0["selrect"] = v; }, local: true }, false)), C);
    await $.stmt((await $.wcall([$t23, $t24], "DeleteCellRect", [(await $.wv([$t23, $t24], "SG", { get: async () => L0["sg"], set: async (v) => { L0["sg"] = v; }, local: true }, false)), (await $.wv([$t23, $t24], "DColl", { get: async () => L0["dcoll"], set: async (v) => { L0["dcoll"] = v; }, local: true }, false)), (await $.wv([$t23, $t24], "DRow", { get: async () => L0["drow"], set: async (v) => { L0["drow"] = v; }, local: true }, false))], C)));
  }
  return L0.result;
}, {"params": ["SG", "DColl", "DRow", "IColl"], "kind": "procedure", "ptypes": ["TStringGrid", "Integer", "Integer", "Integer"]});
  U.func("GRFind", async function GRFind(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sg": $.copyArg(p0), "value": $.copyArg(p1), result: false, "i": 0, "z": 0};
  await $.fixArgs(L0, ["sg", "value"]);
  L0["result"] = false;
  {
    const $t27 = L0["sg"];
    { const $t28 = (await $.wv([$t27], "RowCount", C, false));
      await $.wset([$t27], "i", 0, { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true });
      let $t29 = true;
      for (;;) {
        if (!$t29) { await $.wset([$t27], "i", $.succ((await $.wv([$t27], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false)), 1), { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }); }
        $t29 = false;
        if (!($.ord((await $.wv([$t27], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false))) <= $.ord($t28))) break;
        { const $t30 = $.sub((await $.wv([$t27], "ColCount", C, false)), 1);
          await $.wset([$t27], "z", 0, { get: async () => L0["z"], set: async (v) => { L0["z"] = v; }, local: true });
          let $t31 = true;
          for (;;) {
            if (!$t31) { await $.wset([$t27], "z", $.succ((await $.wv([$t27], "z", { get: async () => L0["z"], set: async (v) => { L0["z"] = v; }, local: true }, false)), 1), { get: async () => L0["z"], set: async (v) => { L0["z"] = v; }, local: true }); }
            $t31 = false;
            if (!($.ord((await $.wv([$t27], "z", { get: async () => L0["z"], set: async (v) => { L0["z"] = v; }, local: true }, false))) <= $.ord($t30))) break;
            await $.wset([$t27], "Result", (await $.or_((await $.wv([$t27], "Result", { get: async () => L0["result"], set: async (v) => { L0["result"] = v; }, local: true }, false)), async () => ($.eq((await $.idx((await $.wv([$t27], "Cells", C, false)), [(await $.wv([$t27], "z", { get: async () => L0["z"], set: async (v) => { L0["z"] = v; }, local: true }, false)), (await $.wv([$t27], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false))])), (await $.wv([$t27], "Value", { get: async () => L0["value"], set: async (v) => { L0["value"] = v; }, local: true }, false)))))), { get: async () => L0["result"], set: async (v) => { L0["result"] = v; }, local: true });
            await $.tick();
          }
        }
        await $.tick();
      }
    }
  }
  return L0.result;
}, {"params": ["SG", "Value"], "kind": "function", "ptypes": ["TStringGrid", "String"]});
  U.func("AddToCell", async function AddToCell(Self, p0, p1, p2) {
  const C = $.chain(Self, U);
  const L0 = {"sg": $.copyArg(p0), "incol": $.copyArg(p1), "value": $.copyArg(p2), result: undefined, "i": 0};
  await $.fixArgs(L0, ["sg", "incol", "value"]);
  {
    const $t32 = L0["sg"];
    await $.stmt((await $.wcall([$t32], "ReinitializeRows", [(await $.wv([$t32], "SG", { get: async () => L0["sg"], set: async (v) => { L0["sg"] = v; }, local: true }, false))], C)));
    { const $t33 = $.sub((await $.wv([$t32], "RowCount", C, false)), 1);
      await $.wset([$t32], "i", 0, { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true });
      let $t34 = true;
      for (;;) {
        if (!$t34) { await $.wset([$t32], "i", $.succ((await $.wv([$t32], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false)), 1), { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }); }
        $t34 = false;
        if (!($.ord((await $.wv([$t32], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false))) <= $.ord($t33))) break;
        if ($.truthy(($.eq((await $.idx((await $.wv([$t32], "Cells", C, false)), [(await $.wv([$t32], "InCol", { get: async () => L0["incol"], set: async (v) => { L0["incol"] = v; }, local: true }, false)), (await $.wv([$t32], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false))])), (await $.wv([$t32], "EmptyStr", C, false)))))) {
          { const $t35 = await $.iset((await $.wv([$t32], "Cells", C, false)), [(await $.wv([$t32], "InCol", { get: async () => L0["incol"], set: async (v) => { L0["incol"] = v; }, local: true }, false)), (await $.wv([$t32], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false))], (await $.wv([$t32], "Value", { get: async () => L0["value"], set: async (v) => { L0["value"] = v; }, local: true }, false))); if ($t35 !== undefined) { await $.wset([$t32], "Cells", $t35, C); } }
          return L0.result;
        }
        await $.tick();
      }
    }
    await $.wset([$t32], "RowCount", $.add((await $.wv([$t32], "RowCount", C, false)), 1), C);
    { const $t36 = await $.iset((await $.wv([$t32], "Cells", C, false)), [(await $.wv([$t32], "InCol", { get: async () => L0["incol"], set: async (v) => { L0["incol"] = v; }, local: true }, false)), $.sub((await $.wv([$t32], "RowCount", C, false)), 1)], (await $.wv([$t32], "Value", { get: async () => L0["value"], set: async (v) => { L0["value"] = v; }, local: true }, false))); if ($t36 !== undefined) { await $.wset([$t32], "Cells", $t36, C); } }
  }
  return L0.result;
}, {"params": ["SG", "InCol", "Value"], "kind": "procedure", "ptypes": ["TStringGrid", "Integer", "String"]});
  U.func("ClearGrid", async function ClearGrid(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sg": $.copyArg(p0), result: undefined, "i": 0, "z": 0};
  await $.fixArgs(L0, ["sg"]);
  {
    const $t37 = L0["sg"];
    { const $t38 = (await $.wv([$t37], "RowCount", C, false));
      await $.wset([$t37], "z", 0, { get: async () => L0["z"], set: async (v) => { L0["z"] = v; }, local: true });
      let $t39 = true;
      for (;;) {
        if (!$t39) { await $.wset([$t37], "z", $.succ((await $.wv([$t37], "z", { get: async () => L0["z"], set: async (v) => { L0["z"] = v; }, local: true }, false)), 1), { get: async () => L0["z"], set: async (v) => { L0["z"] = v; }, local: true }); }
        $t39 = false;
        if (!($.ord((await $.wv([$t37], "z", { get: async () => L0["z"], set: async (v) => { L0["z"] = v; }, local: true }, false))) <= $.ord($t38))) break;
        { const $t40 = $.sub((await $.wv([$t37], "ColCount", C, false)), 1);
          await $.wset([$t37], "i", 0, { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true });
          let $t41 = true;
          for (;;) {
            if (!$t41) { await $.wset([$t37], "i", $.succ((await $.wv([$t37], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false)), 1), { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }); }
            $t41 = false;
            if (!($.ord((await $.wv([$t37], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false))) <= $.ord($t40))) break;
            { const $t42 = await $.iset((await $.wv([$t37], "Cells", C, false)), [(await $.wv([$t37], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false)), (await $.wv([$t37], "z", { get: async () => L0["z"], set: async (v) => { L0["z"] = v; }, local: true }, false))], (await $.wv([$t37], "EmptyStr", C, false))); if ($t42 !== undefined) { await $.wset([$t37], "Cells", $t42, C); } }
            await $.tick();
          }
        }
        await $.tick();
      }
    }
    await $.wset([$t37], "RowCount", 0, C);
  }
  return L0.result;
}, {"params": ["Sg"], "kind": "procedure", "ptypes": ["TStringGrid"]});
  return U;
}
