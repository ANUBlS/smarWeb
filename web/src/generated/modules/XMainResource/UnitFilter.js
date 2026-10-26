// Generated from UnitFilter.pas by pas2js — do not edit by hand; regenerate instead.
/* eslint-disable */
// @ts-nocheck

export default function define($) {
  const U = $.unit("UnitFilter", ["Windows", "Messages", "SysUtils", "Classes", "Graphics", "Controls", "Forms", "Dialogs", "ExtCtrls", "StdCtrls", "Buttons", "CheckLst", "Oracle", "DB", "OracleData", "unitdata", "sboapiDataModuleImpl", "SBTranslateProc"]);
  const C = [U];
  U.defClass("TFormFilter", "TForm", {"panelmain": {"name": "PanelMain", "type": "TPanel"}, "panelbottom": {"name": "PanelBottom", "type": "TPanel"}, "bitbtnok": {"name": "BitBtnOk", "type": "TBitBtn"}, "gboxgroupcheck": {"name": "GBoxGroupCheck", "type": "TGroupBox"}, "chlistboxgr": {"name": "ChListBoxGr", "type": "TCheckListBox"}, "btnexit": {"name": "BtnExit", "type": "TBitBtn"}, "chboxall": {"name": "ChBoxAll", "type": "TCheckBox"}, "gboxkeepengsektor": {"name": "GBoxKeepengSektor", "type": "TGroupBox"}, "chboxcheckallsek": {"name": "ChBoxCheckAllSek", "type": "TCheckBox"}, "chlistboxsektor": {"name": "ChListBoxSektor", "type": "TCheckListBox"}, "groupbox1": {"name": "GroupBox1", "type": "TGroupBox"}, "groupbox2": {"name": "GroupBox2", "type": "TGroupBox"}, "chlistboxwares": {"name": "ChListBoxWares", "type": "TCheckListBox"}, "chlistboxuser": {"name": "ChListBoxUser", "type": "TCheckListBox"}, "chboxwares": {"name": "ChBoxWares", "type": "TCheckBox"}, "chboxuser": {"name": "ChBoxUser", "type": "TCheckBox"}}, {});
  U.init(async () => {
    U.var_("FormFilter", null, "TFormFilter");
  });
  U.func("count_comma", async function count_comma(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"str": $.copyArg(p0), result: 0, "i": 0, "t": 0};
  await $.fixArgs(L0, ["str"]);
  L0["t"] = 1;
  { const $t1 = (await $.call(C, "length", [L0["str"]]));
    L0["i"] = 1;
    let $t2 = true;
    for (;;) {
      if (!$t2) { L0["i"] = $.succ(L0["i"], 1); }
      $t2 = false;
      if (!($.ord(L0["i"]) <= $.ord($t1))) break;
      if ($.truthy($.eq((await $.idx(L0["str"], [L0["i"]])), ","))) {
        L0["t"] = $.add(L0["t"], 1);
      }
      await $.tick();
    }
  }
  if ($.truthy($.ne(L0["t"], 1))) {
    L0["t"] = $.sub(L0["t"], 1);
  }
  L0["result"] = L0["t"];
  return L0.result;
}, {"params": ["Str"], "kind": "function", "ptypes": ["String"]});
  U.method("TFormFilter", "FilterStr", async function FilterStr(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"chlistbox": $.copyArg(p0), "filterfieldname": $.copyArg(p1), result: '', "i": 0, "s": ''};
  await $.fixArgs(L0, ["chlistbox", "filterfieldname"]);
  L0["s"] = "";
  {
    const $t3 = L0["chlistbox"];
    { const $t4 = $.sub((await $.mv((await $.wv([$t3], "Items", C, false)), "Count")), 1);
      await $.wset([$t3], "I", 0, { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true });
      let $t5 = true;
      for (;;) {
        if (!$t5) { await $.wset([$t3], "I", $.succ((await $.wv([$t3], "I", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false)), 1), { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }); }
        $t5 = false;
        if (!($.ord((await $.wv([$t3], "I", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false))) <= $.ord($t4))) break;
        if ($.truthy($.eq((await $.idx((await $.wv([$t3], "Checked", C, false)), [(await $.wv([$t3], "I", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false))])), (await $.wv([$t3], "true", C, false))))) {
          await $.wset([$t3], "S", $.add($.add($.add($.add($.add($.add((await $.wv([$t3], "S", { get: async () => L0["s"], set: async (v) => { L0["s"] = v; }, local: true }, false)), "("), ""), (await $.wv([$t3], "FilterFieldName", { get: async () => L0["filterfieldname"], set: async (v) => { L0["filterfieldname"] = v; }, local: true }, false))), "='"), (await $.idx((await $.wv([$t3], "Items", C, false)), [(await $.wv([$t3], "I", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false))]))), "') or "), { get: async () => L0["s"], set: async (v) => { L0["s"] = v; }, local: true });
        }
        await $.wset([$t3], "ItemIndex", $.add((await $.wv([$t3], "ItemIndex", C, false)), 1), C);
        await $.tick();
      }
    }
    await $.wset([$t3], "S", (await $.wcall([$t3], "Copy", [(await $.wv([$t3], "S", { get: async () => L0["s"], set: async (v) => { L0["s"] = v; }, local: true }, false)), 1, $.sub((await $.wcall([$t3], "length", [(await $.wv([$t3], "S", { get: async () => L0["s"], set: async (v) => { L0["s"] = v; }, local: true }, false))], C)), 4)], C)), { get: async () => L0["s"], set: async (v) => { L0["s"] = v; }, local: true });
  }
  L0.result = L0["s"];
  return L0.result;
}, {"params": ["ChListBox", "FilterFieldName"], "kind": "function", "ptypes": ["TCheckListBox", "String"]});
  U.method("TFormFilter", "FillListBox", async function FillListBox(Self, p0, p1, p2) {
  const C = $.chain(Self, U);
  const L0 = {"datasetlist": $.copyArg(p0), "fieldname": $.copyArg(p1), "chlistbox": $.copyArg(p2), result: undefined, "i": 0};
  await $.fixArgs(L0, ["datasetlist", "fieldname", "chlistbox"]);
  if ($.truthy($.eq((await $.mv((await $.mv(L0["chlistbox"], "Items")), "Text")), ""))) {
    await $.mcall(L0["chlistbox"], "Clear", []);
    {
      const $t6 = L0["datasetlist"];
      await $.stmt($.wcall([$t6], "Open", [], C));
      await $.stmt($.wcall([$t6], "Refresh", [], C));
      await $.stmt($.wcall([$t6], "First", [], C));
      { const $t7 = (await $.wv([$t6], "RecordCount", C, false));
        await $.wset([$t6], "i", 1, { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true });
        let $t8 = true;
        for (;;) {
          if (!$t8) { await $.wset([$t6], "i", $.succ((await $.wv([$t6], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false)), 1), { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }); }
          $t8 = false;
          if (!($.ord((await $.wv([$t6], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false))) <= $.ord($t7))) break;
          {
            const $t9 = (await $.wv([$t6], "ChListBox", { get: async () => L0["chlistbox"], set: async (v) => { L0["chlistbox"] = v; }, local: true }, false));
            if ($.truthy($.ne((await $.mv((await $.wcall([$t6, $t9], "FieldByName", [(await $.wv([$t6, $t9], "FieldName", { get: async () => L0["fieldname"], set: async (v) => { L0["fieldname"] = v; }, local: true }, false))], C)), "AsString")), ""))) {
              await $.stmt((await $.mcall((await $.wv([$t6, $t9], "Items", C, false)), "Add", [(await $.mv((await $.wcall([$t6, $t9], "FieldByName", [(await $.wv([$t6, $t9], "FieldName", { get: async () => L0["fieldname"], set: async (v) => { L0["fieldname"] = v; }, local: true }, false))], C)), "AsString"))])));
            }
          }
          await $.stmt($.wcall([$t6], "Next", [], C));
          await $.tick();
        }
      }
    }
  }
  return L0.result;
}, {"params": ["DataSetList", "FieldName", "ChListBox"], "kind": "procedure", "ptypes": ["TOracleDataSet", "String", "TCheckListBox"]});
  U.method("TFormFilter", "ChBoxCheckAll", async function ChBoxCheckAll(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"b": $.copyArg(p0), "chlistbox": $.copyArg(p1), result: undefined, "i": 0};
  await $.fixArgs(L0, ["b", "chlistbox"]);
  {
    const $t10 = L0["chlistbox"];
    await $.wset([$t10], "ItemIndex", 0, C);
    { const $t11 = $.sub((await $.mv((await $.wv([$t10], "Items", C, false)), "Count")), 1);
      await $.wset([$t10], "i", 0, { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true });
      let $t12 = true;
      for (;;) {
        if (!$t12) { await $.wset([$t10], "i", $.succ((await $.wv([$t10], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false)), 1), { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }); }
        $t12 = false;
        if (!($.ord((await $.wv([$t10], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false))) <= $.ord($t11))) break;
        if ($.truthy($.eq((await $.wv([$t10], "b", { get: async () => L0["b"], set: async (v) => { L0["b"] = v; }, local: true }, false)), (await $.wv([$t10], "true", C, false))))) {
          { const $t13 = await $.iset((await $.wv([$t10], "Checked", C, false)), [(await $.wv([$t10], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false))], (await $.wv([$t10], "true", C, false))); if ($t13 !== undefined) { await $.wset([$t10], "Checked", $t13, C); } }
        } else {
          { const $t14 = await $.iset((await $.wv([$t10], "Checked", C, false)), [(await $.wv([$t10], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false))], (await $.wv([$t10], "false", C, false))); if ($t14 !== undefined) { await $.wset([$t10], "Checked", $t14, C); } }
        }
        await $.wset([$t10], "ItemIndex", $.add((await $.wv([$t10], "ItemIndex", C, false)), 1), C);
        await $.tick();
      }
    }
    await $.wset([$t10], "ItemIndex", 0, C);
  }
  return L0.result;
}, {"params": ["b", "ChListBox"], "kind": "procedure", "ptypes": ["boolean", "TCheckListBox"]});
  U.method("TFormFilter", "FilteredDataSet", async function FilteredDataSet(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"datasetlist": $.copyArg(p0), "filteredstr": $.copyArg(p1), result: undefined};
  await $.fixArgs(L0, ["datasetlist", "filteredstr"]);
  {
    const $t15 = L0["datasetlist"];
    await $.stmt($.wcall([$t15], "Close", [], C));
    await $.wset([$t15], "Filtered", (await $.wv([$t15], "false", C, false)), C);
    await $.wset([$t15], "Filter", (await $.wv([$t15], "FilteredStr", { get: async () => L0["filteredstr"], set: async (v) => { L0["filteredstr"] = v; }, local: true }, false)), C);
    await $.wset([$t15], "Filtered", (await $.wv([$t15], "true", C, false)), C);
    await $.stmt($.wcall([$t15], "Open", [], C));
  }
  return L0.result;
}, {"params": ["DataSetList", "FilteredStr"], "kind": "procedure", "ptypes": ["TOracleDataSet", "String"]});
  U.method("TFormFilter", "BitBtnOkClick", async function BitBtnOkClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "filter_keeping_sec": '', "filter_wares_name": '', "filter_user_name": '', "bool_keeping_sec": false, "bool_wares_name": false, "bool_user_name": false, "allfilterwares": '', "allfiltergroup": ''};
  await $.fixArgs(L0, ["sender"]);
  L0["sfilter"] = $.fn(async function SFilter(p0, p1, p2) {
  const L1 = {"s": $.asRef(p0), "filtervalue": $.copyArg(p1), "checked": $.copyArg(p2), result: undefined, "temp": ''};
  await $.fixArgs(L1, ["filtervalue", "checked"]);
  L1["sformat"] = "(%s)";
  if ($.truthy(L1["checked"])) {
    L1["temp"] = (await $.call(C, "Format", [L1["sformat"], [L1["filtervalue"]]]));
    if ($.truthy($.eq((await L1["s"].get()), ""))) {
      await L1["s"].set(L1["temp"]);
    } else {
      await L1["s"].set($.add($.add((await L1["s"].get()), " and "), L1["temp"]));
    }
  }
  return L1.result;
});
  try {
    await $.mset((await $.v(C, "Screen")), "Cursor", (await $.v(C, "crSQLWait")));
    L0["allfiltergroup"] = (await $.call(C, "FilterStr", [(await $.v(C, "ChListBoxGr")), "name"]));
    L0["filter_keeping_sec"] = (await $.call(C, "FilterStr", [(await $.v(C, "ChListBoxSektor")), "keeping_sec"]));
    L0["filter_wares_name"] = (await $.call(C, "FilterStr", [(await $.v(C, "ChListBoxWares")), "wares_name"]));
    L0["filter_user_name"] = (await $.call(C, "FilterStr", [(await $.v(C, "ChListBoxUser")), "user_name"]));
    if ($.truthy($.eq(L0["filter_keeping_sec"], ""))) {
      L0["bool_keeping_sec"] = false;
    } else {
      L0["bool_keeping_sec"] = true;
    }
    if ($.truthy($.eq(L0["filter_wares_name"], ""))) {
      L0["bool_wares_name"] = false;
    } else {
      L0["bool_wares_name"] = true;
    }
    if ($.truthy($.eq(L0["filter_user_name"], ""))) {
      L0["bool_user_name"] = false;
    } else {
      L0["bool_user_name"] = true;
    }
    await $.stmt((await $.callv(L0["sfilter"], [L0["allfilterwares"], L0["filter_keeping_sec"], L0["bool_keeping_sec"]])));
    await $.stmt((await $.callv(L0["sfilter"], [L0["allfilterwares"], L0["filter_wares_name"], L0["bool_wares_name"]])));
    await $.stmt((await $.callv(L0["sfilter"], [L0["allfilterwares"], L0["filter_user_name"], L0["bool_user_name"]])));
    {
      const $t16 = (await $.v(C, "DataModWares"));
      await $.stmt((await $.wcall([$t16], "FilteredDataSet", [(await $.wv([$t16], "ODSGroups", C, false)), (await $.wv([$t16], "AllFilterGroup", { get: async () => L0["allfiltergroup"], set: async (v) => { L0["allfiltergroup"] = v; }, local: true }, false))], C)));
      await $.stmt((await $.wcall([$t16], "FilteredDataSet", [(await $.wv([$t16], "ODSWares", C, false)), (await $.wv([$t16], "AllFilterWares", { get: async () => L0["allfilterwares"], set: async (v) => { L0["allfilterwares"] = v; }, local: true }, false))], C)));
    }
  } finally {
    await $.mset((await $.v(C, "Screen")), "Cursor", (await $.v(C, "crDefault")));
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFormFilter", "BtnExitClick", async function BtnExitClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.stmt($.call(C, "Close", []));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFormFilter", "ChBoxAllClick", async function ChBoxAllClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.stmt((await $.call(C, "ChBoxCheckAll", [(await $.mv((await $.v(C, "ChBoxAll")), "Checked")), (await $.v(C, "ChListBoxGr"))])));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFormFilter", "ChBoxCheckAllSekClick", async function ChBoxCheckAllSekClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.stmt((await $.call(C, "ChBoxCheckAll", [(await $.mv((await $.v(C, "ChBoxCheckAllSek")), "Checked")), (await $.v(C, "ChListBoxSektor"))])));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFormFilter", "FormActivate", async function FormActivate(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  try {
    await $.mset((await $.v(C, "Screen")), "Cursor", (await $.v(C, "crSQLWait")));
    {
      const $t17 = (await $.v(C, "DataModWares"));
      await $.stmt((await $.wcall([$t17], "FillListBox", [(await $.wv([$t17], "ODSFilterGroup", C, false)), "name", (await $.wv([$t17], "ChListBoxGr", C, false))], C)));
      await $.stmt((await $.wcall([$t17], "FillListBox", [(await $.wv([$t17], "ODSFilterWares", C, false)), "keeping_sec", (await $.wv([$t17], "ChListBoxSektor", C, false))], C)));
      await $.stmt((await $.wcall([$t17], "FillListBox", [(await $.wv([$t17], "ODSFilterWares", C, false)), "wares_name", (await $.wv([$t17], "ChListBoxWares", C, false))], C)));
      await $.stmt((await $.wcall([$t17], "FillListBox", [(await $.wv([$t17], "ODSFilterWares", C, false)), "user_name", (await $.wv([$t17], "ChListBoxUser", C, false))], C)));
    }
  } finally {
    await $.mset((await $.v(C, "Screen")), "Cursor", (await $.v(C, "crDefault")));
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFormFilter", "FormCreate", async function FormCreate(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.stmt((await $.mcall((await $.v(C, "SBTranslateProc")), "TranslateAllCompForms", [Self, (await $.mv((await $.v(C, "sboapiDataModule")), "OrPack_SL"))])));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFormFilter", "ChBoxWaresClick", async function ChBoxWaresClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.stmt((await $.call(C, "ChBoxCheckAll", [(await $.mv((await $.v(C, "ChBoxWares")), "Checked")), (await $.v(C, "ChListBoxWares"))])));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFormFilter", "ChBoxUserClick", async function ChBoxUserClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.stmt((await $.call(C, "ChBoxCheckAll", [(await $.mv((await $.v(C, "ChBoxUser")), "Checked")), (await $.v(C, "ChListBoxUser"))])));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  return U;
}
