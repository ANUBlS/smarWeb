// Generated from CalendarDatamodLmpl.pas by pas2js — do not edit by hand; regenerate instead.
/* eslint-disable */
// @ts-nocheck

export default function define($) {
  const U = $.unit("CalendarDatamodLmpl", ["Windows", "Messages", "SysUtils", "Classes", "Graphics", "Controls", "Forms", "Dialogs", "Db", "OracleData", "Oracle", "sboapiDataModuleImpl"]);
  const C = [U];
  U.defClass("TCalendarDataMod", "TDataModule", {"datasource1": {"name": "DataSource1", "type": "TDataSource"}, "oracledataset1": {"name": "OracleDataSet1", "type": "TOracleDataSet"}, "oracledataset2": {"name": "OracleDataSet2", "type": "TOracleDataSet"}, "oraclepackage1": {"name": "OraclePackage1", "type": "TOraclePackage"}, "oracledataset2jan": {"name": "OracleDataSet2JAN", "type": "TDateTimeField"}, "oracledataset2feb": {"name": "OracleDataSet2FEB", "type": "TDateTimeField"}, "oracledataset2mar": {"name": "OracleDataSet2MAR", "type": "TDateTimeField"}, "oracledataset2apr": {"name": "OracleDataSet2APR", "type": "TDateTimeField"}, "oracledataset2may": {"name": "OracleDataSet2MAY", "type": "TDateTimeField"}, "oracledataset2jun": {"name": "OracleDataSet2JUN", "type": "TDateTimeField"}, "oracledataset2jul": {"name": "OracleDataSet2JUL", "type": "TDateTimeField"}, "oracledataset2aug": {"name": "OracleDataSet2AUG", "type": "TDateTimeField"}, "oracledataset2sep": {"name": "OracleDataSet2SEP", "type": "TDateTimeField"}, "oracledataset2oct": {"name": "OracleDataSet2OCT", "type": "TDateTimeField"}, "oracledataset2nov": {"name": "OracleDataSet2NOV", "type": "TDateTimeField"}, "oracledataset2dec": {"name": "OracleDataSet2DEC", "type": "TDateTimeField"}, "oracledataset3": {"name": "OracleDataSet3", "type": "TOracleDataSet"}, "datasource2": {"name": "DataSource2", "type": "TDataSource"}, "oracledataset1id": {"name": "OracleDataSet1ID", "type": "TFloatField"}, "oracledataset1description": {"name": "OracleDataSet1DESCRIPTION", "type": "TWideStringField"}, "oracledataset1holiday_date": {"name": "OracleDataSet1HOLIDAY_DATE", "type": "TDateTimeField"}, "oracledataset3id": {"name": "OracleDataSet3ID", "type": "TFloatField"}, "oracledataset3holiday_date": {"name": "OracleDataSet3HOLIDAY_DATE", "type": "TDateTimeField"}, "oracledataset3description": {"name": "OracleDataSet3DESCRIPTION", "type": "TWideStringField"}}, {});
  U.init(async () => {
    U.var_("CalendarDataMod", null, "TCalendarDataMod");
  });
  U.method("TCalendarDataMod", "DataModuleCreate", async function DataModuleCreate(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mcall((await $.v(C, "OracleDataSet1")), "open", []);
  await $.mcall((await $.v(C, "OracleDataSet2")), "open", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TCalendarDataMod", "DataModuleDestroy", async function DataModuleDestroy(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mcall((await $.v(C, "OracleDataSet1")), "close", []);
  await $.mcall((await $.v(C, "OracleDataSet2")), "close", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  return U;
}
