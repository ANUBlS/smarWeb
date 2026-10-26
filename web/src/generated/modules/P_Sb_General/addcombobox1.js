// Generated from addcombobox1.pas by pas2js — do not edit by hand; regenerate instead.
/* eslint-disable */
// @ts-nocheck

export default function define($) {
  const U = $.unit("addcombobox1", ["oracledata", "StdCtrls", "Dialogs"]);
  const C = [U];
  U.init(async () => {
  });
  U.func("combobox_add", async function combobox_add(Self, p0, p1, p2) {
  const C = $.chain(Self, U);
  const L0 = {"dataset": $.copyArg(p0), "combobox": $.copyArg(p1), "field": $.copyArg(p2), result: undefined};
  await $.fixArgs(L0, ["dataset", "combobox", "field"]);
  await $.mcall(L0["combobox"], "Clear", []);
  {
    const $t1 = L0["dataset"];
    await $.stmt($.wcall([$t1], "First", [], C));
    while ($.truthy($.not((await $.wv([$t1], "Eof", C, false))))) {
      await $.stmt((await $.mcall((await $.mv((await $.wv([$t1], "Combobox", { get: async () => L0["combobox"], set: async (v) => { L0["combobox"] = v; }, local: true }, false)), "Items")), "Add", [(await $.mv((await $.wcall([$t1], "FieldByName", [(await $.wv([$t1], "Field", { get: async () => L0["field"], set: async (v) => { L0["field"] = v; }, local: true }, false))], C)), "AsString"))])));
      await $.mcall((await $.wv([$t1], "Dataset", { get: async () => L0["dataset"], set: async (v) => { L0["dataset"] = v; }, local: true }, false)), "Next", []);
      await $.tick();
    }
    await $.stmt($.wcall([$t1], "First", [], C));
  }
  return L0.result;
}, {"params": ["Dataset", "Combobox", "Field"], "kind": "procedure", "ptypes": ["TOracleDataSet", "TCombobox", "String"]});
  U.func("combobox_change", async function combobox_change(Self, p0, p1, p2) {
  const C = $.chain(Self, U);
  const L0 = {"dataset": $.copyArg(p0), "combobox": $.copyArg(p1), "field": $.copyArg(p2), result: null, "i": 0};
  await $.fixArgs(L0, ["dataset", "combobox", "field"]);
  {
    const $t2 = L0["dataset"];
    await $.stmt($.wcall([$t2], "First", [], C));
    { const $t3 = (await $.mv((await $.wv([$t2], "Combobox", { get: async () => L0["combobox"], set: async (v) => { L0["combobox"] = v; }, local: true }, false)), "itemindex"));
      await $.wset([$t2], "i", 0, { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true });
      let $t4 = true;
      for (;;) {
        if (!$t4) { await $.wset([$t2], "i", $.succ((await $.wv([$t2], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false)), 1), { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }); }
        $t4 = false;
        if (!($.ord((await $.wv([$t2], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false))) <= $.ord($t3))) break;
        if ($.truthy($.not((await $.mv((await $.wcall([$t2], "FieldByName", [(await $.wv([$t2], "Field", { get: async () => L0["field"], set: async (v) => { L0["field"] = v; }, local: true }, false))], C)), "isNull"))))) {
          L0.result = ((await $.mv((await $.wcall([$t2], "FieldByName", [(await $.wv([$t2], "Field", { get: async () => L0["field"], set: async (v) => { L0["field"] = v; }, local: true }, false))], C)), "AsString")));
        }
        await $.mcall((await $.wv([$t2], "Dataset", { get: async () => L0["dataset"], set: async (v) => { L0["dataset"] = v; }, local: true }, false)), "Next", []);
        await $.tick();
      }
    }
    await $.stmt($.wcall([$t2], "First", [], C));
  }
  return L0.result;
}, {"params": ["Dataset", "Combobox", "Field"], "kind": "function", "ptypes": ["TOracleDataSet", "TCombobox", "String"]});
  U.func("combobox_open", async function combobox_open(Self, p0, p1, p2, p3, p4, p5) {
  const C = $.chain(Self, U);
  const L0 = {"dataset1": $.copyArg(p0), "dataset2": $.copyArg(p1), "combobox": $.copyArg(p2), "field1": $.copyArg(p3), "field2": $.copyArg(p4), "field3": $.copyArg(p5), result: null, "i": 0, "id2": '', "id1": ''};
  await $.fixArgs(L0, ["dataset1", "dataset2", "combobox", "field1", "field2", "field3"]);
  L0.result = (-(1));
  L0["id2"] = (await $.mv((await $.mcall(L0["dataset1"], "FieldByName", [L0["field1"]])), "AsString"));
  if ($.truthy($.not((await $.mcall(L0["dataset2"], "Locate", [L0["field2"], L0["id2"], []]))))) {
    return L0.result;
  }
  L0["id1"] = (await $.mv((await $.mcall(L0["dataset2"], "FieldByName", [L0["field3"]])), "AsString"));
  { const $t5 = $.sub((await $.mv((await $.mv(L0["combobox"], "Items")), "Count")), 1);
    L0["i"] = 0;
    let $t6 = true;
    for (;;) {
      if (!$t6) { L0["i"] = $.succ(L0["i"], 1); }
      $t6 = false;
      if (!($.ord(L0["i"]) <= $.ord($t5))) break;
      if ($.truthy($.eq((await $.idx((await $.mv(L0["combobox"], "Items")), [L0["i"]])), L0["id1"]))) {
        L0.result = L0["i"];
        break;
      }
      await $.tick();
    }
  }
  return L0.result;
}, {"params": ["Dataset1", "Dataset2", "Combobox", "Field1", "Field2", "Field3"], "kind": "function", "ptypes": ["TOracleDataSet", "TOracleDataSet", "TCombobox", "String", "String", "WideString"]});
  U.func("combobox_open_2", async function combobox_open_2(Self, p0, p1, p2, p3, p4, p5) {
  const C = $.chain(Self, U);
  const L0 = {"dataset1": $.copyArg(p0), "dataset2": $.copyArg(p1), "combobox": $.copyArg(p2), "field1": $.copyArg(p3), "field2": $.copyArg(p4), "field3": $.copyArg(p5), result: null, "i": 0, "id2": 0, "id1": ''};
  await $.fixArgs(L0, ["dataset1", "dataset2", "combobox", "field1", "field2", "field3"]);
  L0.result = (-(1));
  L0["id2"] = (await $.mv((await $.mcall(L0["dataset1"], "FieldByName", [L0["field1"]])), "asInteger"));
  if ($.truthy($.not((await $.mcall(L0["dataset2"], "Locate", [L0["field2"], L0["id2"], []]))))) {
    return L0.result;
  }
  L0["id1"] = (await $.mv((await $.mcall(L0["dataset2"], "FieldByName", [L0["field3"]])), "AsString"));
  { const $t7 = $.sub((await $.mv((await $.mv(L0["combobox"], "Items")), "Count")), 1);
    L0["i"] = 0;
    let $t8 = true;
    for (;;) {
      if (!$t8) { L0["i"] = $.succ(L0["i"], 1); }
      $t8 = false;
      if (!($.ord(L0["i"]) <= $.ord($t7))) break;
      if ($.truthy($.eq((await $.idx((await $.mv(L0["combobox"], "Items")), [L0["i"]])), L0["id1"]))) {
        L0.result = L0["i"];
        break;
      }
      await $.tick();
    }
  }
  return L0.result;
}, {"params": ["Dataset1", "Dataset2", "Combobox", "Field1", "Field2", "Field3"], "kind": "function", "ptypes": ["TOracleDataSet", "TOracleDataSet", "TCombobox", "String", "String", "WideString"]});
  return U;
}
