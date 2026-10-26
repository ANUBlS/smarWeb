// Generated from DMWReportImpl_new.pas by pas2js — do not edit by hand; regenerate instead.
/* eslint-disable */
// @ts-nocheck

export default function define($) {
  const U = $.unit("DMWReportImpl_new", ["Windows", "Messages", "SysUtils", "Classes", "Graphics", "Controls", "Forms", "Dialogs", "Db", "OracleData", "sboapiDatamoduleImpl"]);
  const C = [U];
  U.defClass("TDMWReport_new", "TDataModule", {"templatesdataset": {"name": "TemplatesDataSet", "type": "TOracleDataSet"}, "templatesdatasetid": {"name": "TemplatesDataSetID", "type": "TFloatField"}, "templatesdatasetpath": {"name": "TemplatesDataSetPATH", "type": "TWideStringField"}, "templatesdatasetname": {"name": "TemplatesDataSetNAME", "type": "TWideStringField"}, "templatesdatasrc": {"name": "TemplatesDataSrc", "type": "TDataSource"}, "depositinfodataset": {"name": "DepositInfoDataSet", "type": "TOracleDataSet"}, "depositinfodatasrc": {"name": "DepositInfoDataSrc", "type": "TDataSource"}, "bookmarksdataset": {"name": "BookmarksDataSet", "type": "TOracleDataSet"}, "bookmarksdatasrc": {"name": "BookmarksDataSrc", "type": "TDataSource"}, "fieldsdataset": {"name": "FieldsDataSet", "type": "TOracleDataSet"}, "fieldsdatasetid": {"name": "FieldsDataSetID", "type": "TFloatField"}, "fieldsdatasetfieldname": {"name": "FieldsDataSetFIELDNAME", "type": "TWideStringField"}, "fieldsdatasetdescription": {"name": "FieldsDataSetDESCRIPTION", "type": "TWideStringField"}, "fieldsdatasrc": {"name": "FieldsDataSrc", "type": "TDataSource"}, "replacedataset": {"name": "ReplaceDataSet", "type": "TOracleDataSet"}}, {});
  U.init(async () => {
    U.var_("DMWReport_new", null, "TDMWReport_new");
  });
  U.method("TDMWReport_new", "DataModuleCreate", async function DataModuleCreate(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mcall((await $.v(C, "TemplatesDataSet")), "Open", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TDMWReport_new", "DataModuleDestroy", async function DataModuleDestroy(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mcall((await $.v(C, "TemplatesDataSet")), "CloseAll", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  return U;
}
