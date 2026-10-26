// Generated from ArSFDataModuleImpl.pas by pas2js — do not edit by hand; regenerate instead.
/* eslint-disable */
// @ts-nocheck

export default function define($) {
  const U = $.unit("ArSFDataModuleImpl", ["Windows", "Messages", "SysUtils", "Classes", "Graphics", "Controls", "Forms", "Dialogs", "Db", "OracleData", "sboapiDataModuleImpl"]);
  const C = [U];
  U.defClass("TArSFDataModule", "TDataModule", {"enabledfieldsdata": {"name": "EnabledFieldsData", "type": "TOracleDataSet"}, "enabledfieldsdataseqno": {"name": "EnabledFieldsDataSEQNO", "type": "TFloatField"}, "enabledfieldsdatafielddesc": {"name": "EnabledFieldsDataFIELDDESC", "type": "TWideStringField"}, "dsenabledfieldsdata": {"name": "DSEnabledFieldsData", "type": "TDataSource"}, "enabledfieldsdatafieldname": {"name": "EnabledFieldsDataFIELDNAME", "type": "TWideStringField"}}, {});
  U.init(async () => {
    U.var_("ArSFDataModule", null, "TArSFDataModule");
  });
  U.method("TArSFDataModule", "DataModuleCreate", async function DataModuleCreate(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mcall((await $.v(C, "EnabledFieldsData")), "Open", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TArSFDataModule", "DataModuleDestroy", async function DataModuleDestroy(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mcall((await $.v(C, "EnabledFieldsData")), "CloseAll", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  return U;
}
