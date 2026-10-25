// Generated from TrDescrForm_Unit.pas by pas2js — do not edit by hand; regenerate instead.
/* eslint-disable */
// @ts-nocheck

export default function define($) {
  const U = $.unit("TrDescrForm_Unit", ["Windows", "Messages", "SysUtils", "Classes", "Graphics", "Controls", "Forms", "Dialogs", "Grids", "DBGrids", "StdCtrls", "Db", "OracleData", "sboapiDataModuleImpl"]);
  const C = [U];
  U.defClass("TTrDescrForm", "TForm", {"datasource1": {"name": "DataSource1", "type": "TDataSource"}, "dbgrid1": {"name": "DBGrid1", "type": "TDBGrid"}, "okbutton": {"name": "OkButton", "type": "TButton"}, "cancelbutton": {"name": "CancelButton", "type": "TButton"}, "descrtable": {"name": "DescrTable", "type": "TOracleDataSet"}, "fcommited": {"name": "FCommited", "type": "Boolean"}}, {"commited": {"name": "Commited", "read": "FCommited"}, "value": {"name": "Value", "read": "GetValue"}});
  U.init(async () => {
    U.var_("TrDescrForm", null, "TTrDescrForm");
  });
  U.method("TTrDescrForm", "FormCreate", async function FormCreate(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.set(C, "FCommited", false);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TTrDescrForm", "OkButtonClick", async function OkButtonClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.set(C, "FCommited", true);
  await $.stmt($.call(C, "Close", []));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TTrDescrForm", "GetValue", async function GetValue(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: ''};
  L0["result"] = (await $.mv((await $.mcall((await $.v(C, "DescrTable")), "FieldByName", ["NAME"])), "AsString"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TTrDescrForm", "DBGrid1DblClick", async function DBGrid1DblClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.set(C, "FCommited", true);
  await $.stmt($.call(C, "Close", []));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TTrDescrForm", "FormKeyPress", async function FormKeyPress(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "key": $.asRef(p1), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.eq((await $.call(C, "Ord", [(await L0["key"].get())])), (await $.v(C, "VK_RETURN"))))) {
    if ($.truthy($.eq((await $.mv((await $.v(C, "DescrTable")), "State")), (await $.v(C, "dsBrowse"))))) {
      await $.set(C, "FCommited", true);
      await $.stmt($.call(C, "Close", []));
    }
  } else {
    if ($.truthy($.eq((await $.call(C, "Ord", [(await L0["key"].get())])), (await $.v(C, "VK_ESCAPE"))))) {
      await $.stmt($.call(C, "Close", []));
    }
  }
  return L0.result;
}, {"params": ["Sender", "Key"], "kind": "procedure", "ptypes": ["TObject", "Char"]});
  U.method("TTrDescrForm", "CancelButtonClick", async function CancelButtonClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.stmt($.call(C, "Close", []));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  return U;
}
