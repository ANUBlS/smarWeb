// Generated from ReferencesImpl.pas by pas2js — do not edit by hand; regenerate instead.
/* eslint-disable */
// @ts-nocheck

export default function define($) {
  const U = $.unit("ReferencesImpl", ["Windows", "Messages", "SysUtils", "Classes", "Graphics", "Controls", "Forms", "Dialogs", "ComCtrls", "ExtCtrls", "Db", "OracleData", "Oracle", "StdCtrls", "NLSLocalizer", "ActnList", "sboapiDataModuleImpl"]);
  const C = [U];
  U.defClass("TMainReferForm", "TForm", {"panel1": {"name": "Panel1", "type": "TPanel"}, "statusbar1": {"name": "StatusBar1", "type": "TStatusBar"}, "tv": {"name": "TV", "type": "TTreeView"}, "refers": {"name": "Refers", "type": "TOracleDataSet"}, "temp": {"name": "Temp", "type": "TOracleDataSet"}, "cmbboxvalue": {"name": "CmbBoxValue", "type": "TComboBox"}, "button1": {"name": "Button1", "type": "TButton"}, "setuppackage": {"name": "SetupPackage", "type": "TOraclePackage"}, "actionlst": {"name": "ActionLst", "type": "TActionList"}, "saveactn": {"name": "SaveActn", "type": "TAction"}, "refersid": {"name": "RefersID", "type": "TFloatField"}, "refersparentid": {"name": "RefersPARENTID", "type": "TFloatField"}, "refersiname": {"name": "RefersINAME", "type": "TWideStringField"}, "refersdescription": {"name": "RefersDESCRIPTION", "type": "TWideStringField"}, "refersintegervalue": {"name": "RefersINTEGERVALUE", "type": "TFloatField"}, "referscharvalue": {"name": "RefersCHARVALUE", "type": "TWideStringField"}, "refersavailablevalues": {"name": "RefersAVAILABLEVALUES", "type": "TWideStringField"}, "treelst": {"name": "TreeLst", "type": "TList"}}, {});
  U.init(async () => {
    U.var_("MainReferForm", null, "TMainReferForm");
  });
  U.method("TMainReferForm", "TVAddNode", async function TVAddNode(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"node": $.copyArg(p0), "id": $.copyArg(p1), result: undefined};
  await $.fixArgs(L0, ["node", "id"]);
  {
    const $t1 = (await $.mcall((await $.v(C, "TOracleDataSet")), "Create", [null]));
    try {
      await $.wset([$t1], "Session", (await $.mv((await $.wv([$t1], "Temp", C, false)), "Session")), C);
      await $.stmt((await $.mcall((await $.wv([$t1], "SQL", C, false)), "Assign", [(await $.mv((await $.wv([$t1], "Temp", C, false)), "SQL"))])));
      await $.stmt((await $.wcall([$t1], "DeclareVariable", ["AParentID", (await $.wv([$t1], "otInteger", C, false))], C)));
      await $.stmt((await $.wcall([$t1], "SetVariable", ["AParentID", (await $.wv([$t1], "ID", { get: async () => L0["id"], set: async (v) => { L0["id"] = v; }, local: true }, false))], C)));
      await $.stmt($.wcall([$t1], "Open", [], C));
      await $.stmt($.wcall([$t1], "First", [], C));
      while ($.truthy($.not((await $.wv([$t1], "EOF", C, false))))) {
        await $.stmt((await $.mcall((await $.wv([$t1], "TreeLst", C, false)), "Add", [(await $.wcall([$t1], "Pointer", [(await $.mv((await $.wcall([$t1], "FieldByName", ["ID"], C)), "AsInteger"))], C))])));
        await $.stmt((await $.wcall([$t1], "TVAddNode", [(await $.mcall((await $.mv((await $.wv([$t1], "TV", C, false)), "Items")), "AddChild", [(await $.wv([$t1], "Node", { get: async () => L0["node"], set: async (v) => { L0["node"] = v; }, local: true }, false)), (await $.mv((await $.wcall([$t1], "FieldByName", ["DESCRIPTION"], C)), "AsString"))])), (await $.mv((await $.wcall([$t1], "FieldByName", ["ID"], C)), "AsInteger"))], C)));
        await $.stmt($.wcall([$t1], "Next", [], C));
        await $.tick();
      }
    } finally {
      await $.stmt($.wcall([$t1], "Free", [], C));
    }
  }
  return L0.result;
}, {"params": ["Node", "ID"], "kind": "procedure", "ptypes": ["TTreeNode", "Integer"]});
  U.method("TMainReferForm", "FormCreate", async function FormCreate(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.set(C, "TreeLst", (await $.mv((await $.v(C, "TList")), "Create")));
  await $.mcall((await $.v(C, "Refers")), "Open", []);
  await $.stmt((await $.call(C, "TVAddNode", [null, 0])));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TMainReferForm", "FormDestroy", async function FormDestroy(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mcall((await $.v(C, "TreeLst")), "Free", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TMainReferForm", "TVChange", async function TVChange(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "node": $.copyArg(p1), result: undefined, "nodeid": 0, "refid": 0, "valuelist": ''};
  await $.fixArgs(L0, ["sender", "node"]);
  L0["nodeid"] = (await $.mv(L0["node"], "AbsoluteIndex"));
  L0["refid"] = (await $.call(C, "Integer", [(await $.idx((await $.v(C, "TreeLst")), [L0["nodeid"]]))]));
  {
    const $t2 = (await $.wobj(C, "Refers"));
    if ($.truthy((await $.wcall([$t2], "Locate", ["ID", (await $.wv([$t2], "RefID", { get: async () => L0["refid"], set: async (v) => { L0["refid"] = v; }, local: true }, false)), []], C)))) {
      if ($.truthy($.ne((await $.mv((await $.wcall([$t2], "FieldByName", ["ParentID"], C)), "AsInteger")), 0))) {
        await $.mset((await $.wv([$t2], "CmbBoxValue", C, false)), "Enabled", (await $.wv([$t2], "True", C, false)));
        if ($.truthy($.not((await $.mv((await $.wcall([$t2], "FieldByName", ["AVAILABLEVALUES"], C)), "IsNull"))))) {
          await $.wset([$t2], "ValueList", (await $.mv((await $.wcall([$t2], "FieldByName", ["AVAILABLEVALUES"], C)), "AsString")), { get: async () => L0["valuelist"], set: async (v) => { L0["valuelist"] = v; }, local: true });
          await $.mset((await $.wv([$t2], "CmbBoxValue", C, false)), "Style", (await $.wv([$t2], "csDropDownList", C, false)));
          await $.mset((await $.mv((await $.wv([$t2], "CmbBoxValue", C, false)), "Items")), "CommaText", (await $.wv([$t2], "ValueList", { get: async () => L0["valuelist"], set: async (v) => { L0["valuelist"] = v; }, local: true }, false)));
          await $.mset((await $.wv([$t2], "CmbBoxValue", C, false)), "ItemIndex", (await $.mv((await $.wcall([$t2], "FieldByName", ["IntegerValue"], C)), "AsInteger")));
        } else {
          await $.mset((await $.wv([$t2], "CmbBoxValue", C, false)), "Style", (await $.wv([$t2], "csSimple", C, false)));
          await $.mset((await $.wv([$t2], "CmbBoxValue", C, false)), "Text", (await $.mv((await $.wcall([$t2], "FieldByName", ["IntegerValue"], C)), "AsString")));
        }
      } else {
        {
          const $t3 = (await $.wv([$t2], "CmbBoxValue", C, false));
          await $.wset([$t2, $t3], "Style", (await $.wv([$t2, $t3], "csSimple", C, false)), C);
          await $.wset([$t2, $t3], "Text", "", C);
          await $.wset([$t2, $t3], "Enabled", (await $.wv([$t2, $t3], "False", C, false)), C);
        }
      }
    }
  }
  return L0.result;
}, {"params": ["Sender", "Node"], "kind": "procedure", "ptypes": ["TObject", "TTreeNode"]});
  U.method("TMainReferForm", "SaveActnExecute", async function SaveActnExecute(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "id": 0, "value": 0};
  await $.fixArgs(L0, ["sender"]);
  L0["saferefresh"] = $.fn(async function SafeRefresh() {
  const L1 = {result: undefined, "saveplace": null};
  {
    const $t4 = (await $.wobj(C, "Refers"));
    await $.wset([$t4], "SavePlace", (await $.wv([$t4], "GetBookmark", C, false)), { get: async () => L1["saveplace"], set: async (v) => { L1["saveplace"] = v; }, local: true });
    await $.stmt($.wcall([$t4], "Refresh", [], C));
    await $.stmt((await $.wcall([$t4], "GotoBookmark", [(await $.wv([$t4], "SavePlace", { get: async () => L1["saveplace"], set: async (v) => { L1["saveplace"] = v; }, local: true }, false))], C)));
  }
  return L1.result;
});
  L0["id"] = (await $.mv((await $.v(C, "RefersID")), "AsInteger"));
  try {
    L0["value"] = (await $.call(C, "StrToInt", [(await $.mv((await $.v(C, "CmbBoxValue")), "Text"))]));
  } catch ($t5) {
    $.rethrowControl($t5);
    $.handled($t5);
    L0["value"] = (await $.mv((await $.v(C, "CmbBoxValue")), "ItemIndex"));
  }
  {
    const $t6 = (await $.wobj(C, "SetupPackage"));
    await $.stmt((await $.wcall([$t6], "CallProcedure", ["SetSetupIntValue", ["p_ID", (await $.wv([$t6], "ID", { get: async () => L0["id"], set: async (v) => { L0["id"] = v; }, local: true }, false)), "p_NewValue", (await $.wv([$t6], "Value", { get: async () => L0["value"], set: async (v) => { L0["value"] = v; }, local: true }, false))]], C)));
  }
  await $.stmt($.callv(L0["saferefresh"], []));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TMainReferForm", "SaveActnUpdate", async function SaveActnUpdate(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mset((await $.v(C, "SaveActn")), "Enabled", (await $.mv((await $.v(C, "CmbBoxValue")), "Enabled")));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TMainReferForm", "FormKeyPress", async function FormKeyPress(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "key": $.asRef(p1), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.eq((await $.call(C, "ORD", [(await L0["key"].get())])), (await $.v(C, "VK_ESCAPE"))))) {
    await $.stmt($.call(C, "Close", []));
  }
  return L0.result;
}, {"params": ["Sender", "Key"], "kind": "procedure", "ptypes": ["TObject", "Char"]});
  return U;
}
