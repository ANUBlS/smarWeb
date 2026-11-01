// Generated from UnitFormcust_other_change.pas by pas2js — do not edit by hand; regenerate instead.
/* eslint-disable */
// @ts-nocheck

export default function define($) {
  const U = $.unit("UnitFormcust_other_change", ["Windows", "Messages", "SysUtils", "Variants", "Classes", "Graphics", "Controls", "Forms", "Dialogs", "DBGridEhGrouping", "DB", "OracleData", "GridsEh", "DBGridEh"]);
  const C = [U];
  U.defClass("TFormcust_other_change", "TForm", {"dbgrideh1": {"name": "DBGridEh1", "type": "TDBGridEh"}, "oracledataset1": {"name": "OracleDataSet1", "type": "TOracleDataSet"}, "oracledataset1name": {"name": "OracleDataSet1NAME", "type": "TWideStringField"}, "datasource1": {"name": "DataSource1", "type": "TDataSource"}, "v_name": {"name": "v_name", "type": "String"}}, {});
  U.init(async () => {
    U.var_("Formcust_other_change", null, "TFormcust_other_change");
  });
  U.method("TFormcust_other_change", "DBGridEh1DblClick", async function DBGridEh1DblClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.set(C, "v_name", (await $.mv((await $.v(C, "OracleDataSet1NAME")), "AsString")));
  await $.mcall((await $.v(C, "Formcust_other_change")), "Close", []);
  await $.mcall((await $.v(C, "OracleDataSet1")), "Refresh", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  return U;
}
