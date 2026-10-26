// Generated from uNewUSImpl.pas by pas2js — do not edit by hand; regenerate instead.
/* eslint-disable */
// @ts-nocheck

export default function define($) {
  const U = $.unit("uNewUSImpl", ["Windows", "Messages", "SysUtils", "Classes", "Graphics", "Controls", "Forms", "Dialogs", "Db", "OracleData", "Grids", "DBGrids", "ExtCtrls", "DBCtrls", "sboapidatamoduleimpl"]);
  const C = [U];
  U.defClass("TfrmNewUS", "TForm", {"utables": {"name": "uTables", "type": "TOracleDataSet"}, "ucolumns": {"name": "uColumns", "type": "TOracleDataSet"}, "columns": {"name": "Columns", "type": "TDataSource"}, "tables": {"name": "Tables", "type": "TDataSource"}, "dbgrid1": {"name": "DBGrid1", "type": "TDBGrid"}, "dbgrid2": {"name": "DBGrid2", "type": "TDBGrid"}, "utablesid": {"name": "uTablesID", "type": "TFloatField"}, "utablesname": {"name": "uTablesNAME", "type": "TStringField"}, "utablesqueryst": {"name": "uTablesQUERYST", "type": "TStringField"}, "utablesdescrt": {"name": "uTablesDESCRT", "type": "TStringField"}, "utablesordercol": {"name": "uTablesORDERCOL", "type": "TStringField"}, "ucolumnscolumnid": {"name": "uColumnsCOLUMNID", "type": "TFloatField"}, "ucolumnscolumntitle": {"name": "uColumnsCOLUMNTITLE", "type": "TStringField"}, "ucolumnscolumnwidth": {"name": "uColumnsCOLUMNWIDTH", "type": "TFloatField"}, "ucolumnstableid": {"name": "uColumnsTABLEID", "type": "TFloatField"}, "splitter1": {"name": "Splitter1", "type": "TSplitter"}, "dbnavigator1": {"name": "DBNavigator1", "type": "TDBNavigator"}, "dbnavigator2": {"name": "DBNavigator2", "type": "TDBNavigator"}}, {});
  U.init(async () => {
    U.var_("frmNewUS", null, "TfrmNewUS");
  });
  return U;
}
