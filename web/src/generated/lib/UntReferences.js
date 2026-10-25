// Generated from UntReferences.pas by pas2js — do not edit by hand; regenerate instead.
/* eslint-disable */
// @ts-nocheck

export default function define($) {
  const U = $.unit("UntReferences", ["Windows", "Messages", "SysUtils", "Classes", "Graphics", "Controls", "Forms", "Dialogs", "OracleData", "Db", "ComCtrls", "Oracle", "StdCtrls", "Grids", "DBGrids", "DBCtrls", "ExtCtrls", "UntReferencesDataMod", "DateIntervalUnit", "SBTranslateProc", "sboapiDataModuleimpl"]);
  const C = [U];
  U.defClass("TFrmReferences", "TForm", {"mainpagecontroller": {"name": "MainPageController", "type": "TPageControl"}, "tabsheettree": {"name": "TabSheetTree", "type": "TTabSheet"}, "selectionstabsheet": {"name": "SelectionsTabSheet", "type": "TTabSheet"}, "refertabsheet": {"name": "ReferTabSheet", "type": "TTabSheet"}, "statusbar": {"name": "StatusBar", "type": "TStatusBar"}, "groupbox1": {"name": "GroupBox1", "type": "TGroupBox"}, "groupbox2": {"name": "GroupBox2", "type": "TGroupBox"}, "tv": {"name": "TV", "type": "TTreeView"}, "groupbox3": {"name": "GroupBox3", "type": "TGroupBox"}, "groupbox4": {"name": "GroupBox4", "type": "TGroupBox"}, "acczonesgrid": {"name": "AccZonesGrid", "type": "TDBGrid"}, "acczoneinfogrid": {"name": "AccZoneInfoGrid", "type": "TDBGrid"}, "panel1": {"name": "Panel1", "type": "TPanel"}, "dbnavigator": {"name": "DBNavigator", "type": "TDBNavigator"}, "valuescombobox": {"name": "ValuesComboBox", "type": "TComboBox"}, "valuesedit": {"name": "ValuesEdit", "type": "TEdit"}, "btnapply": {"name": "BtnApply", "type": "TButton"}, "groupbox5": {"name": "GroupBox5", "type": "TGroupBox"}, "credittypesgrid": {"name": "CreditTypesGrid", "type": "TDBGrid"}, "tabsheet1": {"name": "TabSheet1", "type": "TTabSheet"}, "groupbox6": {"name": "GroupBox6", "type": "TGroupBox"}, "groupbox7": {"name": "GroupBox7", "type": "TGroupBox"}, "pledgegrid": {"name": "PledgeGrid", "type": "TDBGrid"}, "dbgrid2": {"name": "DBGrid2", "type": "TDBGrid"}, "groupbox8": {"name": "GroupBox8", "type": "TGroupBox"}, "dbgridctegory": {"name": "DBGridCtegory", "type": "TDBGrid"}, "groupbox9": {"name": "GroupBox9", "type": "TGroupBox"}, "dbgridmovies": {"name": "DBGridMovies", "type": "TDBGrid"}, "groupbox10": {"name": "GroupBox10", "type": "TGroupBox"}, "dbgridaccounts": {"name": "DBGridAccounts", "type": "TDBGrid"}, "panel2": {"name": "Panel2", "type": "TPanel"}, "dbnavigator1": {"name": "DBNavigator1", "type": "TDBNavigator"}, "tabsheetreliability": {"name": "TabSheetReliability", "type": "TTabSheet"}, "groupbox11": {"name": "GroupBox11", "type": "TGroupBox"}, "panel3": {"name": "Panel3", "type": "TPanel"}, "dbnavigator2": {"name": "DBNavigator2", "type": "TDBNavigator"}, "panel4": {"name": "Panel4", "type": "TPanel"}, "panel5": {"name": "Panel5", "type": "TPanel"}, "dbgridreliability": {"name": "DBGridReliability", "type": "TDBGrid"}, "label1": {"name": "Label1", "type": "TLabel"}, "label2": {"name": "Label2", "type": "TLabel"}, "label3": {"name": "Label3", "type": "TLabel"}, "tabsheet2": {"name": "TabSheet2", "type": "TTabSheet"}, "dbgrid1": {"name": "DBGrid1", "type": "TDBGrid"}, "panel6": {"name": "Panel6", "type": "TPanel"}, "dbnavigator3": {"name": "DBNavigator3", "type": "TDBNavigator"}, "tabsheet3": {"name": "TabSheet3", "type": "TTabSheet"}, "dbgrid3": {"name": "DBGrid3", "type": "TDBGrid"}, "treeitems": {"name": "TreeItems", "type": "TList"}}, {});
  U.init(async () => {
    U.var_("FrmReferences", null, "TFrmReferences");
  });
  U.method("TFrmReferences", "TVBuild", async function TVBuild(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: undefined};
  await $.mcall((await $.mv((await $.v(C, "TV")), "Items")), "Clear", []);
  await $.stmt((await $.call(C, "TVAddNode", [null, (-(1))])));
  await $.mcall((await $.mv((await $.v(C, "DataModReferences")), "ReferLink")), "Refresh", []);
  return L0.result;
}, {"params": [], "kind": "procedure", "ptypes": []});
  U.method("TFrmReferences", "TVAddNode", async function TVAddNode(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"node": $.copyArg(p0), "id": $.copyArg(p1), result: undefined};
  await $.fixArgs(L0, ["node", "id"]);
  {
    const $t1 = (await $.mcall((await $.v(C, "TOracleDataSet")), "Create", [null]));
    try {
      await $.wset([$t1], "Session", (await $.mv((await $.mv((await $.wv([$t1], "DataModReferences", C, false)), "TVSubItems")), "Session")), C);
      await $.stmt((await $.mcall((await $.wv([$t1], "SQL", C, false)), "Assign", [(await $.mv((await $.mv((await $.wv([$t1], "DataModReferences", C, false)), "TVSubItems")), "SQL"))])));
      await $.stmt((await $.wcall([$t1], "DeclareVariable", ["ParentID", (await $.wv([$t1], "otInteger", C, false))], C)));
      await $.stmt((await $.wcall([$t1], "SetVariable", ["ParentID", (await $.wv([$t1], "ID", { get: async () => L0["id"], set: async (v) => { L0["id"] = v; }, local: true }, false))], C)));
      await $.stmt($.wcall([$t1], "Open", [], C));
      await $.stmt($.wcall([$t1], "First", [], C));
      while ($.truthy($.not((await $.wv([$t1], "EOF", C, false))))) {
        await $.stmt((await $.mcall((await $.wv([$t1], "TreeItems", C, false)), "Add", [(await $.wcall([$t1], "Pointer", [(await $.mv((await $.wcall([$t1], "FieldByName", ["ID"], C)), "AsInteger"))], C))])));
        await $.stmt((await $.wcall([$t1], "TVAddNode", [(await $.mcall((await $.mv((await $.wv([$t1], "TV", C, false)), "Items")), "AddChild", [(await $.wv([$t1], "Node", { get: async () => L0["node"], set: async (v) => { L0["node"] = v; }, local: true }, false)), (await $.mv((await $.wcall([$t1], "FieldByName", ["LName"], C)), "AsString"))])), (await $.mv((await $.wcall([$t1], "FieldByName", ["ID"], C)), "AsInteger"))], C)));
        await $.stmt($.wcall([$t1], "Next", [], C));
        await $.tick();
      }
    } finally {
      await $.stmt($.wcall([$t1], "Free", [], C));
    }
  }
  return L0.result;
}, {"params": ["Node", "ID"], "kind": "procedure", "ptypes": ["TTreeNode", "Integer"]});
  U.method("TFrmReferences", "FormCreate", async function FormCreate(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.set(C, "DataModReferences", (await $.mcall((await $.v(C, "TDataModReferences")), "Create", [Self])));
  await $.set(C, "FrmDateInterval", (await $.mcall((await $.v(C, "TFrmDateInterval")), "Create", [Self])));
  await $.set(C, "TreeItems", (await $.mv((await $.v(C, "TList")), "Create")));
  {
    const $t2 = (await $.mv((await $.v(C, "DataModReferences")), "BalanceLink"));
    try {
      await $.stmt($.wcall([$t2], "Execute", [], C));
      await $.mcall((await $.mv((await $.idx((await $.mv((await $.wv([$t2], "AccZoneInfoGrid", C, false)), "Columns")), [1])), "PickList")), "Clear", []);
      while ($.truthy($.not((await $.wv([$t2], "EOF", C, false))))) {
        await $.stmt((await $.mcall((await $.mv((await $.idx((await $.mv((await $.wv([$t2], "AccZoneInfoGrid", C, false)), "Columns")), [1])), "PickList")), "Add", [(await $.wcall([$t2], "FieldAsString", ["Bal_Cn"], C))])));
        await $.stmt($.wcall([$t2], "Next", [], C));
        await $.tick();
      }
    } finally {
      await $.stmt($.wcall([$t2], "Close", [], C));
    }
  }
  await $.stmt((await $.mcall((await $.v(C, "SBTranslateProc")), "TranslateAllCompForms", [Self, (await $.mv((await $.v(C, "sboapiDataModule")), "OrPack_SL"))])));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFrmReferences", "FormDestroy", async function FormDestroy(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mcall((await $.v(C, "TreeItems")), "Free", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFrmReferences", "FormShow", async function FormShow(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.stmt($.call(C, "TVBuild", []));
  await $.mset((await $.v(C, "ValuesComboBox")), "Enabled", false);
  await $.mset((await $.v(C, "ValuesEdit")), "Enabled", false);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFrmReferences", "TVChange", async function TVChange(Self, p0, p1) {
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
    await $.stmt((await $.call(C, "Delete", [$.ref(async () => L1["data"], async ($t3) => { L1["data"] = $t3; }), 1, L1["index"]])));
    L1["index"] = (await $.call(C, "Pos", [";", L1["data"]]));
    await $.tick();
  }
  await $.stmt((await $.mcall(L1["sourcelist"], "Add", [L1["data"]])));
  return L1.result;
});
  L0["targetitemid"] = (await $.call(C, "Integer", [(await $.idx((await $.mv((await $.v(C, "TreeItems")), "Items")), [(await $.mv(L0["node"], "AbsoluteIndex"))]))]));
  {
    const $t4 = (await $.v(C, "DataModReferences"));
    {
      const $t5 = (await $.wv([$t4], "ReferLink", C, false));
      await $.stmt((await $.wcall([$t4, $t5], "Locate", ["ID", (await $.wv([$t4, $t5], "TargetItemID", { get: async () => L0["targetitemid"], set: async (v) => { L0["targetitemid"] = v; }, local: true }, false)), []], C)));
      if ($.truthy($.not((await $.mv((await $.wcall([$t4, $t5], "FieldByName", ["Value"], C)), "IsNull"))))) {
        if ($.truthy((await $.mv((await $.wcall([$t4, $t5], "FieldByName", ["SourceList"], C)), "IsNull")))) {
          await $.mset((await $.wv([$t4, $t5], "ValuesComboBox", C, false)), "Enabled", (await $.wv([$t4, $t5], "False", C, false)));
          await $.mset((await $.wv([$t4, $t5], "ValuesEdit", C, false)), "Enabled", (await $.wv([$t4, $t5], "True", C, false)));
          await $.mset((await $.wv([$t4, $t5], "ValuesEdit", C, false)), "Text", (await $.mv((await $.wcall([$t4, $t5], "FieldByName", ["Value"], C)), "AsString")));
        } else {
          await $.mset((await $.wv([$t4, $t5], "ValuesComboBox", C, false)), "Enabled", (await $.wv([$t4, $t5], "True", C, false)));
          await $.mset((await $.wv([$t4, $t5], "ValuesEdit", C, false)), "Enabled", (await $.wv([$t4, $t5], "False", C, false)));
          await $.stmt((await $.wcall([$t4, $t5], "ExpandItems", [(await $.mv((await $.wv([$t4, $t5], "ValuesComboBox", C, false)), "Items")), (await $.mv((await $.wcall([$t4, $t5], "FieldByName", ["SourceList"], C)), "AsString"))], { get: async () => L0["expanditems"], set: async (v) => { L0["expanditems"] = v; }, local: true })));
          await $.mset((await $.wv([$t4, $t5], "ValuesComboBox", C, false)), "ItemIndex", (await $.mcall((await $.mv((await $.wv([$t4, $t5], "ValuesComboBox", C, false)), "Items")), "IndexOf", [(await $.mv((await $.wcall([$t4, $t5], "FieldByName", ["Value"], C)), "AsString"))])));
        }
      } else {
        await $.mset((await $.wv([$t4, $t5], "ValuesComboBox", C, false)), "Enabled", (await $.wv([$t4, $t5], "False", C, false)));
        await $.mset((await $.wv([$t4, $t5], "ValuesEdit", C, false)), "Enabled", (await $.wv([$t4, $t5], "False", C, false)));
      }
    }
  }
  await $.mset((await $.v(C, "BtnApply")), "Enabled", (await $.or_((await $.mv((await $.v(C, "ValuesComboBox")), "Enabled")), async () => (await $.mv((await $.v(C, "ValuesEdit")), "Enabled")))));
  return L0.result;
}, {"params": ["Sender", "Node"], "kind": "procedure", "ptypes": ["TObject", "TTreeNode"]});
  U.method("TFrmReferences", "BtnApplyClick", async function BtnApplyClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "newvalue": ''};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy((await $.mv((await $.v(C, "ValuesComboBox")), "Enabled")))) {
    L0["newvalue"] = (await $.idx((await $.mv((await $.mv((await $.v(C, "ValuesComboBox")), "Items")), "Strings")), [(await $.mv((await $.v(C, "ValuesComboBox")), "ItemIndex"))]));
  } else {
    L0["newvalue"] = (await $.mv((await $.v(C, "ValuesEdit")), "Text"));
  }
  {
    const $t6 = (await $.v(C, "DataModReferences"));
    {
      const $t7 = (await $.wv([$t6], "ReferLink", C, false));
      const $t8 = (await $.wv([$t6, $t7], "ReferPackage", C, false));
      await $.stmt((await $.wcall([$t6, $t7, $t8], "CallProcedure", ["UPD_SBCM_REFERENCES", [(await $.mv((await $.wcall([$t6, $t7, $t8], "FieldByName", ["ID"], C)), "Value")), (await $.mv((await $.wcall([$t6, $t7, $t8], "FieldByName", ["Name"], C)), "Value")), (await $.mv((await $.wcall([$t6, $t7, $t8], "FieldByName", ["LName"], C)), "Value")), (await $.mv((await $.wcall([$t6, $t7, $t8], "FieldByName", ["ParentID"], C)), "Value")), (await $.wv([$t6, $t7, $t8], "NewValue", { get: async () => L0["newvalue"], set: async (v) => { L0["newvalue"] = v; }, local: true }, false)), (await $.mv((await $.wcall([$t6, $t7, $t8], "FieldByName", ["SourceList"], C)), "Value"))]], C)));
      await $.stmt($.wcall([$t6, $t7, $t8], "Refresh", [], C));
    }
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFrmReferences", "MainPageControllerChange", async function MainPageControllerChange(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.eq((await $.mv((await $.v(C, "MainPageController")), "ActivePageIndex")), 3))) {
    await $.mcall((await $.mv((await $.v(C, "DataModReferences")), "CategoriesMaster")), "Refresh", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFrmReferences", "DBGrid1EditButtonClick", async function DBGrid1EditButtonClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t9 = (await $.v(C, "FrmDateInterval"));
    const $t10 = (await $.mv((await $.mv(((await $.wv([$t9], "Sender", { get: async () => L0["sender"], set: async (v) => { L0["sender"] = v; }, local: true }, false))), "DataSource")), "DataSet"));
    await $.mset((await $.wv([$t9, $t10], "DateTrack", C, false)), "Position", (await $.mv((await $.wcall([$t9, $t10], "FieldByName", ["DateInterval"], C)), "AsInteger")));
    if ($.truthy($.eq((await $.wv([$t9, $t10], "ShowModal", C, false)), (await $.wv([$t9, $t10], "mrOk", C, false))))) {
      await $.stmt($.wcall([$t9, $t10], "Edit", [], C));
      await $.mset((await $.wcall([$t9, $t10], "FieldByName", ["DateInterval"], C)), "AsInteger", (await $.mv((await $.wv([$t9, $t10], "DateTrack", C, false)), "Position")));
    }
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  return U;
}
