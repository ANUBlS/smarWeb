// Generated from DMWReportImpl.pas by pas2js — do not edit by hand; regenerate instead.
/* eslint-disable */
// @ts-nocheck

export default function define($) {
  const U = $.unit("DMWReportImpl", ["Windows", "Messages", "SysUtils", "Classes", "Graphics", "Controls", "Forms", "Dialogs", "Db", "OracleData", "sboapiDatamoduleImpl"]);
  const C = [U];
  U.defClass("TDMWReport", "TDataModule", {"templatesdataset": {"name": "TemplatesDataSet", "type": "TOracleDataSet"}, "templatesdatasetid": {"name": "TemplatesDataSetID", "type": "TFloatField"}, "templatesdatasetpath": {"name": "TemplatesDataSetPATH", "type": "Twidestringfield"}, "templatesdatasetname": {"name": "TemplatesDataSetNAME", "type": "Twidestringfield"}, "templatesdatasrc": {"name": "TemplatesDataSrc", "type": "TDataSource"}, "depositinfodataset": {"name": "DepositInfoDataSet", "type": "TOracleDataSet"}, "depositinfodatasrc": {"name": "DepositInfoDataSrc", "type": "TDataSource"}, "bookmarksdataset": {"name": "BookmarksDataSet", "type": "TOracleDataSet"}, "bookmarksdatasrc": {"name": "BookmarksDataSrc", "type": "TDataSource"}, "fieldsdataset": {"name": "FieldsDataSet", "type": "TOracleDataSet"}, "fieldsdatasetid": {"name": "FieldsDataSetID", "type": "TFloatField"}, "fieldsdatasetfieldname": {"name": "FieldsDataSetFIELDNAME", "type": "Twidestringfield"}, "fieldsdatasetdescription": {"name": "FieldsDataSetDESCRIPTION", "type": "Twidestringfield"}, "fieldsdatasrc": {"name": "FieldsDataSrc", "type": "TDataSource"}, "replacedataset": {"name": "ReplaceDataSet", "type": "TOracleDataSet"}}, {});
  U.init(async () => {
    U.var_("DMWReport", null, "TDMWReport");
  });
  U.method("TDMWReport", "DataModuleCreate", async function DataModuleCreate(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mcall((await $.v(C, "TemplatesDataSet")), "Open", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TDMWReport", "DataModuleDestroy", async function DataModuleDestroy(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mcall((await $.v(C, "TemplatesDataSet")), "CloseAll", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  return U;
}
