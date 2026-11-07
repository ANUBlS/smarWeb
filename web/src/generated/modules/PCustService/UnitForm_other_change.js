// Generated from UnitForm_other_change.pas by pas2js — do not edit by hand; regenerate instead.
/* eslint-disable */
// @ts-nocheck

export default function define($) {
  const U = $.unit("UnitForm_other_change", ["Windows", "Messages", "SysUtils", "Variants", "Classes", "Graphics", "Controls", "Forms", "Dialogs", "DBGridEhGrouping", "DB", "OracleData", "GridsEh", "DBGridEh", "sboapiDataModuleImpl"]);
  const C = [U];
  U.defClass("TForm_other_change", "TForm", {"dbgrideh1": {"name": "DBGridEh1", "type": "TDBGridEh"}, "oracledataset1": {"name": "OracleDataSet1", "type": "TOracleDataSet"}, "datasource1": {"name": "DataSource1", "type": "TDataSource"}, "oracledataset1name": {"name": "OracleDataSet1NAME", "type": "TWideStringField"}, "v_name": {"name": "v_name", "type": "String"}}, {});
  U.init(async () => {
    U.var_("Form_other_change", null, "TForm_other_change");
  });
  U.method("TForm_other_change", "DBGridEh1DblClick", async function DBGridEh1DblClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.set(C, "v_name", (await $.mv((await $.v(C, "OracleDataSet1NAME")), "AsString")));
  await $.mcall((await $.v(C, "Form_other_change")), "Close", []);
  await $.mcall((await $.v(C, "OracleDataSet1")), "Refresh", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  return U;
}
