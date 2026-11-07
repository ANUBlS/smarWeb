// Generated from UnitDataModDailyOper.pas by pas2js — do not edit by hand; regenerate instead.
/* eslint-disable */
// @ts-nocheck

export default function define($) {
  const U = $.unit("UnitDataModDailyOper", ["Windows", "Messages", "SysUtils", "Classes", "Graphics", "Controls", "Forms", "Dialogs", "Db", "OracleData", "CMOracleApiDataModuleImpl"]);
  const C = [U];
  U.defClass("TDataModDailyOper", "TDataModule", {"ds_cmactive": {"name": "DS_CMACTIVE", "type": "TDataSource"}, "ods_cmactive": {"name": "ODS_CMACTIVE", "type": "TOracleDataSet"}, "ods_filial": {"name": "ODS_FILIAL", "type": "TOracleDataSet"}, "ds_filial": {"name": "DS_FILIAL", "type": "TDataSource"}, "odstime": {"name": "odstime", "type": "TOracleDataSet"}, "ods_valuta": {"name": "ODS_Valuta", "type": "TOracleDataSet"}, "datasource1": {"name": "DataSource1", "type": "TDataSource"}, "ods_cmactiv_ehtiyat": {"name": "ODS_CMACTIV_EHTIYAT", "type": "TOracleDataSet"}, "ds_cmactiv_ehtiyat": {"name": "DS_CMACTIV_EHTIYAT", "type": "TDataSource"}}, {});
  U.init(async () => {
    U.var_("DataModDailyOper", null, "TDataModDailyOper");
  });
  U.method("TDataModDailyOper", "DataModuleCreate", async function DataModuleCreate(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mcall((await $.v(C, "ODS_Valuta")), "Open", []);
  await $.mcall((await $.v(C, "ODS_FILIAL")), "Open", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  return U;
}
