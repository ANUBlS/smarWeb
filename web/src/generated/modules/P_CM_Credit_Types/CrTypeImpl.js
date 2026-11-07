// Generated from CrTypeImpl.pas by pas2js — do not edit by hand; regenerate instead.
/* eslint-disable */
// @ts-nocheck

export default function define($) {
  const U = $.unit("CrTypeImpl", ["Windows", "Messages", "SysUtils", "Classes", "Graphics", "Controls", "Forms", "Dialogs", "Db", "OracleData", "CMExcelExport", "StdCtrls", "CheckLst", "Evanescence", "ComCtrls", "ExtCtrls", "Buttons", "KeyListBox", "DBCtrls", "Grids", "DBGrids", "sboapiDataModuleImpl"]);
  const C = [U];
  U.defClass("TCrTypeMainForm", "TForm", {"splitter1": {"name": "Splitter1", "type": "TSplitter"}, "groupbox2": {"name": "GroupBox2", "type": "TGroupBox"}, "dbgrid2": {"name": "DBGrid2", "type": "TDBGrid"}, "dbnavigator2": {"name": "DBNavigator2", "type": "TDBNavigator"}, "groupbox1": {"name": "GroupBox1", "type": "TGroupBox"}, "dbgrid1": {"name": "DBGrid1", "type": "TDBGrid"}, "dbnavigator1": {"name": "DBNavigator1", "type": "TDBNavigator"}, "odsvillages": {"name": "ODSVillages", "type": "TOracleDataSet"}, "odsregions": {"name": "ODSRegions", "type": "TOracleDataSet"}, "dsvillages": {"name": "DSVillages", "type": "TDataSource"}, "dsranges": {"name": "DSRanges", "type": "TDataSource"}, "groupbox3": {"name": "GroupBox3", "type": "TGroupBox"}, "dbgrid3": {"name": "DBGrid3", "type": "TDBGrid"}, "dbnavigator3": {"name": "DBNavigator3", "type": "TDBNavigator"}, "datasource1": {"name": "DataSource1", "type": "TDataSource"}, "oracledataset1": {"name": "OracleDataSet1", "type": "TOracleDataSet"}, "odsregionsid": {"name": "ODSRegionsID", "type": "TFloatField"}, "odsregionsname": {"name": "ODSRegionsNAME", "type": "TWideStringField"}, "odsregionsname_eng": {"name": "ODSRegionsNAME_ENG", "type": "TWideStringField"}, "odsregionszonaid": {"name": "ODSRegionsZONAID", "type": "TFloatField"}, "odsvillagesid": {"name": "ODSVillagesID", "type": "TFloatField"}, "odsvillagesname": {"name": "ODSVillagesNAME", "type": "TWideStringField"}, "odsvillagesdepend_id": {"name": "ODSVillagesDEPEND_ID", "type": "TFloatField"}, "oracledataset1id": {"name": "OracleDataSet1ID", "type": "TFloatField"}, "oracledataset1name": {"name": "OracleDataSet1NAME", "type": "TWideStringField"}}, {});
  U.init(async () => {
    U.var_("CrTypeMainForm", null, "TCrTypeMainForm");
  });
  U.method("TCrTypeMainForm", "FormCreate", async function FormCreate(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mcall((await $.v(C, "ODSRegions")), "Open", []);
  await $.mcall((await $.v(C, "ODSVillages")), "Open", []);
  await $.mcall((await $.v(C, "OracleDataSet1")), "open", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TCrTypeMainForm", "FormDestroy", async function FormDestroy(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mcall((await $.v(C, "ODSRegions")), "CloseAll", []);
  await $.mcall((await $.v(C, "ODSVillages")), "CloseAll", []);
  await $.mcall((await $.v(C, "OracleDataSet1")), "CloseAll", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  return U;
}
