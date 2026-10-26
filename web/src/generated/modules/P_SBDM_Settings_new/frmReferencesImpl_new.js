// Generated from frmReferencesImpl_new.pas by pas2js — do not edit by hand; regenerate instead.
/* eslint-disable */
// @ts-nocheck

export default function define($) {
  const U = $.unit("frmReferencesImpl_new", ["Windows", "Messages", "SysUtils", "Classes", "Graphics", "Controls", "Forms", "Dialogs", "OracleData", "Db", "ComCtrls", "Oracle", "StdCtrls", "Grids", "DBGrids", "DBCtrls", "ExtCtrls", "DMReferences_new", "SBTranslateProc", "sboapiDataModuleimpl"]);
  const C = [U];
  U.defClass("TfrmReferences_new", "TForm", {"groupbox1": {"name": "GroupBox1", "type": "TGroupBox"}, "valuescombobox": {"name": "ValuesComboBox", "type": "TComboBox"}, "valuesedit": {"name": "ValuesEdit", "type": "TEdit"}, "btnapply": {"name": "BtnApply", "type": "TButton"}, "groupbox2": {"name": "GroupBox2", "type": "TGroupBox"}, "tv": {"name": "TV", "type": "TTreeView"}, "statusbar": {"name": "StatusBar", "type": "TStatusBar"}, "treeitems": {"name": "TreeItems", "type": "TList"}}, {});
  U.init(async () => {
    U.var_("frmReferences_new", null, "TfrmReferences_new");
  });
  U.method("TFrmReferences_new", "TVBuild", async function TVBuild(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: undefined};
  await $.mcall((await $.mv((await $.v(C, "TV")), "Items")), "Clear", []);
  await $.stmt((await $.call(C, "TVAddNode", [null, (-(1))])));
  await $.mcall((await $.mv((await $.v(C, "DataModReferences_new")), "ReferLink")), "Refresh", []);
  return L0.result;
}, {"params": [], "kind": "procedure", "ptypes": []});
  U.method("TfrmReferences_new", "TVChange", async function TVChange(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "node": $.copyArg(p1), result: undefined, "targetitemid": 0};
  await $.fixArgs(L0, ["sender", "node"]);
  L0["expanditems"] = $.fn(async function ExpandItems(p0, p1) {
  const L1 = {"sourcelist": $.copyArg(p0), "value": $.copyArg(p1), result: undefined, "index": 0, "data": ''};
  await $.fixArgs(L1, ["sourcelist", "value"]);
  await $.mcall(L1["sourcelist"], "Clear", []);
  L1["data"] = L1["value"];
  L1["index"] = (await $.call(C, "Pos", [";", L1["data"]]));
  while ($.truthy($.ne(L1["index"], 0))) {
    await $.stmt((await $.mcall(L1["sourcelist"], "Add", [(await $.call(C, "Copy", [L1["data"], 1, $.sub(L1["index"], 1)]))])));
    await $.stmt((await $.call(C, "Delete", [$.ref(async () => L1["data"], async ($t1) => { L1["data"] = $t1; }), 1, L1["index"]])));
    L1["index"] = (await $.call(C, "Pos", [";", L1["data"]]));
    await $.tick();
  }
  await $.stmt((await $.mcall(L1["sourcelist"], "Add", [L1["data"]])));
  return L1.result;
});
  L0["targetitemid"] = (await $.call(C, "Integer", [(await $.idx((await $.mv((await $.v(C, "TreeItems")), "Items")), [(await $.mv(L0["node"], "AbsoluteIndex"))]))]));
  {
    const $t2 = (await $.v(C, "DataModReferences_new"));
    {
      const $t3 = (await $.wv([$t2], "ReferLink", C, false));
      await $.stmt((await $.wcall([$t2, $t3], "Locate", ["ID", (await $.wv([$t2, $t3], "TargetItemID", { get: async () => L0["targetitemid"], set: async (v) => { L0["targetitemid"] = v; }, local: true }, false)), []], C)));
      if ($.truthy($.not((await $.mv((await $.wcall([$t2, $t3], "FieldByName", ["Value"], C)), "IsNull"))))) {
        if ($.truthy((await $.mv((await $.wcall([$t2, $t3], "FieldByName", ["SourceList"], C)), "IsNull")))) {
          await $.mset((await $.wv([$t2, $t3], "ValuesComboBox", C, false)), "Enabled", (await $.wv([$t2, $t3], "False", C, false)));
          await $.mset((await $.wv([$t2, $t3], "ValuesEdit", C, false)), "Enabled", (await $.wv([$t2, $t3], "True", C, false)));
          await $.mset((await $.wv([$t2, $t3], "ValuesEdit", C, false)), "Text", (await $.mv((await $.wcall([$t2, $t3], "FieldByName", ["Value"], C)), "AsString")));
        } else {
          await $.mset((await $.wv([$t2, $t3], "ValuesComboBox", C, false)), "Enabled", (await $.wv([$t2, $t3], "True", C, false)));
          await $.mset((await $.wv([$t2, $t3], "ValuesEdit", C, false)), "Enabled", (await $.wv([$t2, $t3], "False", C, false)));
          await $.stmt((await $.wcall([$t2, $t3], "ExpandItems", [(await $.mv((await $.wv([$t2, $t3], "ValuesComboBox", C, false)), "Items")), (await $.mv((await $.wcall([$t2, $t3], "FieldByName", ["SourceList"], C)), "AsString"))], { get: async () => L0["expanditems"], set: async (v) => { L0["expanditems"] = v; }, local: true })));
          await $.mset((await $.wv([$t2, $t3], "ValuesComboBox", C, false)), "ItemIndex", (await $.mcall((await $.mv((await $.wv([$t2, $t3], "ValuesComboBox", C, false)), "Items")), "IndexOf", [(await $.mv((await $.wcall([$t2, $t3], "FieldByName", ["Value"], C)), "AsString"))])));
        }
      } else {
        await $.mset((await $.wv([$t2, $t3], "ValuesComboBox", C, false)), "Enabled", (await $.wv([$t2, $t3], "False", C, false)));
        await $.mset((await $.wv([$t2, $t3], "ValuesEdit", C, false)), "Enabled", (await $.wv([$t2, $t3], "False", C, false)));
      }
    }
  }
  await $.mset((await $.v(C, "BtnApply")), "Enabled", (await $.or_((await $.mv((await $.v(C, "ValuesComboBox")), "Enabled")), async () => (await $.mv((await $.v(C, "ValuesEdit")), "Enabled")))));
  return L0.result;
}, {"params": ["Sender", "Node"], "kind": "procedure", "ptypes": ["TObject", "TTreeNode"]});
  U.method("TfrmReferences_new", "BtnApplyClick", async function BtnApplyClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "newvalue": ''};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy((await $.mv((await $.v(C, "ValuesComboBox")), "Enabled")))) {
    L0["newvalue"] = (await $.idx((await $.mv((await $.mv((await $.v(C, "ValuesComboBox")), "Items")), "Strings")), [(await $.mv((await $.v(C, "ValuesComboBox")), "ItemIndex"))]));
  } else {
    L0["newvalue"] = (await $.mv((await $.v(C, "ValuesEdit")), "Text"));
  }
  {
    const $t4 = (await $.v(C, "DataModReferences_new"));
    {
      const $t5 = (await $.wv([$t4], "ReferLink", C, false));
      const $t6 = (await $.wv([$t4, $t5], "ReferPackage", C, false));
      await $.stmt((await $.wcall([$t4, $t5, $t6], "CallProcedure", ["UPD_SBCM_REFERENCES", [(await $.mv((await $.wcall([$t4, $t5, $t6], "FieldByName", ["ID"], C)), "Value")), (await $.mv((await $.wcall([$t4, $t5, $t6], "FieldByName", ["Name"], C)), "Value")), (await $.mv((await $.wcall([$t4, $t5, $t6], "FieldByName", ["LName"], C)), "Value")), (await $.mv((await $.wcall([$t4, $t5, $t6], "FieldByName", ["ParentID"], C)), "Value")), (await $.wv([$t4, $t5, $t6], "NewValue", { get: async () => L0["newvalue"], set: async (v) => { L0["newvalue"] = v; }, local: true }, false)), (await $.mv((await $.wcall([$t4, $t5, $t6], "FieldByName", ["SourceList"], C)), "Value"))]], C)));
      await $.stmt($.wcall([$t4, $t5, $t6], "Refresh", [], C));
    }
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TfrmReferences_new", "FormCanResize", async function FormCanResize(Self, p0, p1, p2, p3) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "newwidth": $.asRef(p1), "newheight": $.asRef(p2), "resize": $.asRef(p3), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await L0["resize"].set(false);
  return L0.result;
}, {"params": ["Sender", "NewWidth", "NewHeight", "Resize"], "kind": "procedure", "ptypes": ["TObject", "Integer", "Integer", "Boolean"]});
  U.method("TfrmReferences_new", "FormCreate", async function FormCreate(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.set(C, "DataModReferences_new", (await $.mcall((await $.v(C, "TDataModReferences_new")), "Create", [Self])));
  await $.set(C, "TreeItems", (await $.mv((await $.v(C, "TList")), "Create")));
  await $.stmt((await $.mcall((await $.v(C, "SBTranslateProc")), "TranslateAllCompForms", [Self, (await $.mv((await $.v(C, "sboapiDataModule")), "OrPack_SL"))])));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TfrmReferences_new", "FormDestroy", async function FormDestroy(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mcall((await $.v(C, "TreeItems")), "Free", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TfrmReferences_new", "FormKeyPress", async function FormKeyPress(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "key": $.asRef(p1), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.eq((await $.call(C, "Ord", [(await L0["key"].get())])), (await $.v(C, "VK_ESCAPE"))))) {
    await $.stmt($.call(C, "Close", []));
  }
  return L0.result;
}, {"params": ["Sender", "Key"], "kind": "procedure", "ptypes": ["TObject", "Char"]});
  U.method("TfrmReferences_new", "FormShow", async function FormShow(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.stmt($.call(C, "TVBuild", []));
  await $.mset((await $.v(C, "ValuesComboBox")), "Enabled", false);
  await $.mset((await $.v(C, "ValuesEdit")), "Enabled", false);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFrmReferences_new", "TVAddNode", async function TVAddNode(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"node": $.copyArg(p0), "id": $.copyArg(p1), result: undefined};
  await $.fixArgs(L0, ["node", "id"]);
  {
    const $t7 = (await $.mcall((await $.v(C, "TOracleDataSet")), "Create", [null]));
    try {
      await $.wset([$t7], "Session", (await $.mv((await $.mv((await $.wv([$t7], "DataModReferences_new", C, false)), "TVSubItems")), "Session")), C);
      await $.stmt((await $.mcall((await $.wv([$t7], "SQL", C, false)), "Assign", [(await $.mv((await $.mv((await $.wv([$t7], "DataModReferences_new", C, false)), "TVSubItems")), "SQL"))])));
      await $.stmt((await $.wcall([$t7], "DeclareVariable", ["ParentID", (await $.wv([$t7], "otInteger", C, false))], C)));
      await $.stmt((await $.wcall([$t7], "SetVariable", ["ParentID", (await $.wv([$t7], "ID", { get: async () => L0["id"], set: async (v) => { L0["id"] = v; }, local: true }, false))], C)));
      await $.stmt($.wcall([$t7], "Open", [], C));
      await $.stmt($.wcall([$t7], "First", [], C));
      while ($.truthy($.not((await $.wv([$t7], "EOF", C, false))))) {
        await $.stmt((await $.mcall((await $.wv([$t7], "TreeItems", C, false)), "Add", [(await $.wcall([$t7], "Pointer", [(await $.mv((await $.wcall([$t7], "FieldByName", ["ID"], C)), "AsInteger"))], C))])));
        await $.stmt((await $.wcall([$t7], "TVAddNode", [(await $.mcall((await $.mv((await $.wv([$t7], "TV", C, false)), "Items")), "AddChild", [(await $.wv([$t7], "Node", { get: async () => L0["node"], set: async (v) => { L0["node"] = v; }, local: true }, false)), (await $.mv((await $.wcall([$t7], "FieldByName", ["LName"], C)), "AsString"))])), (await $.mv((await $.wcall([$t7], "FieldByName", ["ID"], C)), "AsInteger"))], C)));
        await $.stmt($.wcall([$t7], "Next", [], C));
        await $.tick();
      }
    } finally {
      await $.stmt($.wcall([$t7], "Free", [], C));
    }
  }
  return L0.result;
}, {"params": ["Node", "ID"], "kind": "procedure", "ptypes": ["TTreeNode", "Integer"]});
  return U;
}
