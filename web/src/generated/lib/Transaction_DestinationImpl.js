// Generated from Transaction_DestinationImpl.pas by pas2js — do not edit by hand; regenerate instead.
/* eslint-disable */
// @ts-nocheck

export default function define($) {
  const U = $.unit("Transaction_DestinationImpl", ["Windows", "Messages", "SysUtils", "Classes", "Graphics", "Controls", "Forms", "Dialogs", "StdCtrls", "Grids", "DBGrids", "Db", "OracleData", "ExtCtrls", "DBCtrls", "sboapiDataModuleImpl", "SBTranslateProc"]);
  const C = [U];
  U.defClass("TTransactionDestinationForm", "TForm", {"griddest": {"name": "GridDest", "type": "TDBGrid"}, "buttoncancel": {"name": "ButtonCancel", "type": "TButton"}, "buttonok": {"name": "ButtonOk", "type": "TButton"}, "trdest": {"name": "TrDest", "type": "TOracleDataSet"}, "trdestdata": {"name": "TrDestData", "type": "TDataSource"}, "dbnavigator1": {"name": "DBNavigator1", "type": "TDBNavigator"}}, {"value": {"name": "Value", "read": "GetValue"}});
  U.init(async () => {
    U.var_("TransactionDestinationForm", null, "TTransactionDestinationForm");
  });
  U.method("TTransactionDestinationForm", "GetValue", async function GetValue(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: ''};
  L0["result"] = (await $.mv((await $.mcall((await $.v(C, "TrDest")), "FieldByName", ["NAME"])), "AsString"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TTransactionDestinationForm", "ButtonCancelClick", async function ButtonCancelClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.stmt($.call(C, "Close", []));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TTransactionDestinationForm", "MouseWheelHandler", async function MouseWheelHandler(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"message": $.asRef(p0), result: undefined};
  await $.inherited(Self, "TTransactionDestinationForm", "MouseWheelHandler", null, arguments);
  if ($.truthy((await $.mv((await $.v(C, "GridDest")), "Focused")))) {
    await $.mcall((await $.mv((await $.v(C, "GridDest")), "SelectedRows")), "Clear", []);
    {
      const $t1 = (await $.call(C, "TCMMouseWheel", [(await L0["message"].get())]));
      const $t2 = (await $.mv((await $.mv((await $.wv([$t1], "GridDest", C, false)), "DataSource")), "DataSet"));
      if ($.truthy($.lt((await $.wv([$t1, $t2], "WheelDelta", C, false)), 0))) {
        await $.stmt($.wcall([$t1, $t2], "Next", [], C));
      } else {
        await $.stmt($.wcall([$t1, $t2], "Prior", [], C));
      }
    }
    await $.mcall((await $.v(C, "GridDest")), "Repaint", []);
  }
  return L0.result;
}, {"params": ["Message"], "kind": "procedure", "ptypes": ["TMessage"]});
  U.method("TTransactionDestinationForm", "GridDestDblClick", async function GridDestDblClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.not(($.in_((await $.mv((await $.mv((await $.v(C, "GridDest")), "DataSource")), "State")), [(await $.v(C, "dsInsert")), (await $.v(C, "dsEdit"))]))))) {
    await $.set(C, "ModalResult", (await $.v(C, "mrOk")));
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TTransactionDestinationForm", "FormCreate", async function FormCreate(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.stmt((await $.mcall((await $.v(C, "SBTranslateProc")), "TranslateAllCompForms", [Self, (await $.mv((await $.v(C, "sboapiDataModule")), "OrPack_SL"))])));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TTransactionDestinationForm", "FormKeyDown", async function FormKeyDown(Self, p0, p1, p2) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "key": $.asRef(p1), "shift": $.copyArg(p2), result: undefined};
  await $.fixArgs(L0, ["sender", "shift"]);
  if ($.truthy($.eq((await $.call(C, "Ord", [(await L0["key"].get())])), (await $.v(C, "VK_RETURN"))))) {
    await $.set(C, "ModalResult", (await $.v(C, "mrOk")));
  } else {
    if ($.truthy($.eq((await L0["key"].get()), (await $.v(C, "VK_ESCAPE"))))) {
      await $.stmt($.call(C, "Close", []));
    }
  }
  return L0.result;
}, {"params": ["Sender", "Key", "Shift"], "kind": "procedure", "ptypes": ["TObject", "Word", "TShiftState"]});
  return U;
}
