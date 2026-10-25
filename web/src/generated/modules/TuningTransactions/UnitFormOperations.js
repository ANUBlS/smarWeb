// Generated from UnitFormOperations.pas by pas2js — do not edit by hand; regenerate instead.
/* eslint-disable */
// @ts-nocheck

export default function define($) {
  const U = $.unit("UnitFormOperations", ["Windows", "Messages", "SysUtils", "Classes", "Graphics", "Controls", "Forms", "Dialogs", "StdCtrls", "ExtCtrls", "Mask", "DBCtrls", "Db", "DBViewComboBox", "ActnList", "DataModuleImpl", "TuningTransactionImpl", "sboapiDataModuleImpl", "SBTranslateProc"]);
  const C = [U];
  U.defClass("TFormOperations", "TForm", {"groupbox1": {"name": "GroupBox1", "type": "TGroupBox"}, "panel1": {"name": "Panel1", "type": "TPanel"}, "panel2": {"name": "Panel2", "type": "TPanel"}, "operationname": {"name": "OperationName", "type": "TDBEdit"}, "panel3": {"name": "Panel3", "type": "TPanel"}, "panel4": {"name": "Panel4", "type": "TPanel"}, "assignment": {"name": "Assignment", "type": "TDBEdit"}, "panel5": {"name": "Panel5", "type": "TPanel"}, "panel6": {"name": "Panel6", "type": "TPanel"}, "comassignment": {"name": "ComAssignment", "type": "TDBEdit"}, "panel7": {"name": "Panel7", "type": "TPanel"}, "panel8": {"name": "Panel8", "type": "TPanel"}, "buttoncommit": {"name": "ButtonCommit", "type": "TButton"}, "buttoncancel": {"name": "ButtonCancel", "type": "TButton"}, "cbcheckuser": {"name": "CBCheckUser", "type": "TComboBox"}, "actionlist1": {"name": "ActionList1", "type": "TActionList"}, "actioncommit": {"name": "ActionCommit", "type": "TAction"}, "actioncancel": {"name": "ActionCancel", "type": "TAction"}, "edebt": {"name": "EDebt", "type": "TEdit"}, "ecredit": {"name": "ECredit", "type": "TEdit"}, "eadditionaldebt": {"name": "EAdditionalDebt", "type": "TEdit"}, "eadditionalcredit": {"name": "EAdditionalCredit", "type": "TEdit"}, "dblookupdebt": {"name": "DBLookupDebt", "type": "TDBLookupComboBox"}, "dblookupcredit": {"name": "DBLookupCredit", "type": "TDBLookupComboBox"}, "dblookupadditionaldebt": {"name": "DBLookupAdditionalDebt", "type": "TDBLookupComboBox"}, "dblookupadditionalcredit": {"name": "DBLookupAdditionalCredit", "type": "TDBLookupComboBox"}, "searchfield": {"name": "SearchField", "type": "String"}, "dblookup": {"name": "DBLookup", "type": "TDBLookupComboBox"}, "currentedit": {"name": "CurrentEdit", "type": "TEdit"}}, {});
  U.init(async () => {
    U.var_("FormOperations", null, "TFormOperations");
  });
  U.method("TFormOperations", "SetSelectedText", async function SetSelectedText(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"edit": $.copyArg(p0), "s": $.copyArg(p1), result: undefined, "lastlen": 0};
  await $.fixArgs(L0, ["edit", "s"]);
  {
    const $t1 = L0["edit"];
    await $.wset([$t1], "LastLen", (await $.wcall([$t1], "Length", [(await $.wv([$t1], "Text", C, false))], C)), { get: async () => L0["lastlen"], set: async (v) => { L0["lastlen"] = v; }, local: true });
    if ($.truthy((await $.wv([$t1], "Focused", C, false)))) {
      await $.wset([$t1], "Text", (await $.wv([$t1], "S", { get: async () => L0["s"], set: async (v) => { L0["s"] = v; }, local: true }, false)), C);
      await $.wset([$t1], "SelStart", (await $.wv([$t1], "LastLen", { get: async () => L0["lastlen"], set: async (v) => { L0["lastlen"] = v; }, local: true }, false)), C);
      await $.wset([$t1], "SelLength", $.sub((await $.wcall([$t1], "Length", [(await $.wv([$t1], "S", { get: async () => L0["s"], set: async (v) => { L0["s"] = v; }, local: true }, false))], C)), (await $.wv([$t1], "LastLen", { get: async () => L0["lastlen"], set: async (v) => { L0["lastlen"] = v; }, local: true }, false))), C);
    }
    await $.wset([$t1], "Color", (await $.wv([$t1], "clWhite", C, false)), C);
  }
  return L0.result;
}, {"params": ["Edit", "S"], "kind": "procedure", "ptypes": ["TEdit", "String"]});
  U.method("TFormOperations", "SafelyCancel", async function SafelyCancel(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: undefined};
  {
    const $t2 = (await $.v(C, "TuningDataModule"));
    const $t3 = (await $.wv([$t2], "ODSSettings", C, false));
    if ($.truthy($.in_((await $.wv([$t2, $t3], "State", C, false)), [(await $.wv([$t2, $t3], "dsInsert", C, false)), (await $.wv([$t2, $t3], "dsEdit", C, false))]))) {
      await $.stmt($.wcall([$t2, $t3], "Cancel", [], C));
    }
  }
  return L0.result;
}, {"params": [], "kind": "procedure", "ptypes": []});
  U.method("TFormOperations", "SaveOperations", async function SaveOperations(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: undefined};
  {
    const $t4 = (await $.v(C, "TuningDataModule"));
    const $t5 = (await $.wv([$t4], "ODSSettings", C, false));
    if ($.truthy($.in_((await $.wv([$t4, $t5], "State", C, false)), [(await $.wv([$t4, $t5], "dsInsert", C, false)), (await $.wv([$t4, $t5], "dsEdit", C, false))]))) {
      await $.stmt($.wcall([$t4, $t5], "Post", [], C));
    }
  }
  return L0.result;
}, {"params": [], "kind": "procedure", "ptypes": []});
  U.method("TFormOperations", "SetDetails", async function SetDetails(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: undefined};
  {
    const $t6 = (await $.v(C, "TuningDataModule"));
    const $t7 = (await $.wv([$t6], "ODSSettings", C, false));
    if ($.truthy($.in_((await $.wv([$t6, $t7], "State", C, false)), [(await $.wv([$t6, $t7], "dsInsert", C, false)), (await $.wv([$t6, $t7], "dsEdit", C, false))]))) {
      await $.mset((await $.wcall([$t6, $t7], "FieldByName", ["UserID"], C)), "AsInteger", (await $.mv((await $.wv([$t6, $t7], "CBCheckUser", C, false)), "ItemIndex")));
    }
  }
  return L0.result;
}, {"params": [], "kind": "procedure", "ptypes": []});
  U.method("TFormOperations", "FormKeyDown", async function FormKeyDown(Self, p0, p1, p2) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "key": $.asRef(p1), "shift": $.copyArg(p2), result: undefined};
  await $.fixArgs(L0, ["sender", "shift"]);
  if ($.truthy(($.eq((await L0["key"].get()), (await $.v(C, "VK_ESCAPE")))))) {
    await $.stmt($.call(C, "Close", []));
  }
  return L0.result;
}, {"params": ["Sender", "Key", "Shift"], "kind": "procedure", "ptypes": ["TObject", "Word", "TShiftState"]});
  U.method("TFormOperations", "FormClose", async function FormClose(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "action": $.asRef(p1), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.stmt($.call(C, "SafelyCancel", []));
  return L0.result;
}, {"params": ["Sender", "Action"], "kind": "procedure", "ptypes": ["TObject", "TCloseAction"]});
  U.method("TFormOperations", "FormCreate", async function FormCreate(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.stmt((await $.mcall((await $.v(C, "SBTranslateProc")), "TranslateAllCompForms", [Self, (await $.mv((await $.v(C, "sboapiDataModule")), "OrPack_SL"))])));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFormOperations", "FormActivate", async function FormActivate(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mset(L0["sender"], "ActiveControl", (await $.v(C, "OperationName")));
  {
    const $t8 = (await $.v(C, "TuningTransaction"));
    { const $t9 = (await $.wv([$t8], "OperationMode", C, false));
      if ($.eq($t9, (await $.wv([$t8], "omInsert", C, false)))) {
        await $.mset((await $.wv([$t8], "CBCheckUser", C, false)), "ItemIndex", 0);
      }
      else if ($.eq($t9, (await $.wv([$t8], "omUpdate", C, false)))) {
        if ($.truthy($.eq((await $.mv((await $.mcall((await $.mv((await $.wv([$t8], "TuningDataModule", C, false)), "ODSSettings")), "FieldByName", ["UserID"])), "AsInteger")), 0))) {
          await $.mset((await $.wv([$t8], "CBCheckUser", C, false)), "itemindex", 0);
        } else {
          await $.mset((await $.wv([$t8], "CBCheckUser", C, false)), "itemindex", 1);
        }
      }
    }
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFormOperations", "ActionCommitExecute", async function ActionCommitExecute(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.stmt($.call(C, "SetDetails", []));
  await $.stmt($.call(C, "SaveOperations", []));
  await $.mcall((await $.v(C, "TuningTransaction")), "Refresh", []);
  await $.mcall((await $.mv((await $.v(C, "TuningDataModule")), "ODSSettings")), "Refresh", []);
  await $.stmt($.call(C, "Close", []));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFormOperations", "ActionCancelExecute", async function ActionCancelExecute(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.stmt($.call(C, "SafelyCancel", []));
  await $.stmt($.call(C, "Close", []));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFormOperations", "ActionCommitUpdate", async function ActionCommitUpdate(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t10 = (L0["sender"]);
    await $.wset([$t10], "Enabled", $.ne((await $.wcall([$t10], "Trim", [(await $.mv((await $.wv([$t10], "OperationName", C, false)), "Text"))], C)), ""), C);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFormOperations", "EDebtChange", async function EDebtChange(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t11 = (await $.call(C, "TEdit", [L0["sender"]]));
    if ($.truthy($.not((await $.wv([$t11], "Focused", C, false))))) {
      return L0.result;
    }
    await $.wset([$t11], "SearchField", (await $.wcall([$t11], "Copy", [(await $.wv([$t11], "Name", C, false)), 2, (await $.wcall([$t11], "length", [(await $.wv([$t11], "Name", C, false))], C))], C)), C);
    if ($.truthy($.eq((await $.wcall([$t11], "Trim", [(await $.wv([$t11], "Text", C, false))], C)), ""))) {
      await $.mcall((await $.mcall((await $.mv((await $.mv((await $.wv([$t11], "DBLookup", C, false)), "DataSource")), "DataSet")), "FieldByName", [(await $.wv([$t11], "SearchField", C, false))])), "Clear", []);
      await $.wset([$t11], "Color", (await $.wv([$t11], "clWhite", C, false)), C);
    } else {
      if ($.truthy((await $.mcall((await $.mv((await $.mv((await $.wv([$t11], "DBLookup", C, false)), "ListSource")), "DataSet")), "Locate", ["acc_no", (await $.wv([$t11], "Text", C, false)), [(await $.wv([$t11], "loCaseInsensitive", C, false)), (await $.wv([$t11], "loPartialKey", C, false))]])))) {
        await $.wset([$t11], "Color", (await $.wv([$t11], "clWhite", C, false)), C);
      } else {
        await $.wset([$t11], "Color", (await $.wv([$t11], "clRed", C, false)), C);
      }
    }
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFormOperations", "EDebtEnter", async function EDebtEnter(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "componentname": ''};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t12 = (L0["sender"]);
    await $.wset([$t12], "ComponentName", $.add("DBLookup", (await $.wcall([$t12], "Copy", [(await $.wv([$t12], "Name", C, false)), 2, (await $.wcall([$t12], "length", [(await $.wv([$t12], "Name", C, false))], C))], C))), { get: async () => L0["componentname"], set: async (v) => { L0["componentname"] = v; }, local: true });
  }
  await $.set(C, "CurrentEdit", (await $.call(C, "TEdit", [L0["sender"]])));
  await $.set(C, "DBLookup", (await $.call(C, "TDBLookupComboBox", [(await $.call(C, "FindComponent", [L0["componentname"]]))])));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFormOperations", "EDebtKeyDown", async function EDebtKeyDown(Self, p0, p1, p2) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "key": $.asRef(p1), "shift": $.copyArg(p2), result: undefined};
  await $.fixArgs(L0, ["sender", "shift"]);
  {
    const $t13 = L0["sender"];
    if ($.truthy((await $.or_(($.eq((await $.wv([$t13], "Key", { get: async () => await L0["key"].get(), set: async (v) => { await L0["key"].set(v); }, local: true }, false)), (await $.wv([$t13], "VK_DELETE", C, false)))), async () => ($.eq((await $.wv([$t13], "Key", { get: async () => await L0["key"].get(), set: async (v) => { await L0["key"].set(v); }, local: true }, false)), (await $.wv([$t13], "VK_BACK", C, false)))))))) {
      await $.wset([$t13], "Tag", 1, C);
    } else {
      await $.wset([$t13], "Tag", 0, C);
    }
  }
  return L0.result;
}, {"params": ["Sender", "Key", "Shift"], "kind": "procedure", "ptypes": ["TObject", "Word", "TShiftState"]});
  U.method("TFormOperations", "EDebtExit", async function EDebtExit(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mset(L0["sender"], "Text", "");
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFormOperations", "FormShow", async function FormShow(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t14 = (await $.v(C, "TuningDataModule"));
    if ($.truthy($.not(((await $.mv((await $.wv([$t14], "ODSDebtAccount", C, false)), "Active")))))) {
      await $.mcall((await $.wv([$t14], "ODSDebtAccount", C, false)), "Open", []);
    }
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  return U;
}
