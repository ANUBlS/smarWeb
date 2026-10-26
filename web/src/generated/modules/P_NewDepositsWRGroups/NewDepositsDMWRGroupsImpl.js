// Generated from NewDepositsDMWRGroupsImpl.pas by pas2js — do not edit by hand; regenerate instead.
/* eslint-disable */
// @ts-nocheck

export default function define($) {
  const U = $.unit("NewDepositsDMWRGroupsImpl", ["Windows", "Messages", "SysUtils", "Classes", "Graphics", "Controls", "Forms", "Dialogs", "Db", "OracleData", "Oracle", "sboapiDatamoduleImpl"]);
  const C = [U];
  U.defClass("TNewDepositsDMWRGroups", "TDataModule", {"dmtypes": {"name": "DMtypes", "type": "TOracleDataSet"}, "dmtypesdatasrc": {"name": "DMtypesDataSrc", "type": "TDataSource"}, "dmwrtemplates": {"name": "DmWrTemplates", "type": "TOracleDataSet"}, "dmwrtemplatesdatasrc": {"name": "DmWrTemplatesDataSrc", "type": "TDataSource"}, "dmwrgroups": {"name": "DmWrGroups", "type": "TOracleDataSet"}, "dmwrgroupsdatasrc": {"name": "DmWrGroupsDataSrc", "type": "TDataSource"}, "dmwrgroupsid": {"name": "DmWrGroupsID", "type": "TFloatField"}, "dmwrgroupsdtypeid": {"name": "DmWrGroupsDTYPEID", "type": "TFloatField"}, "dmwrgroupstempid": {"name": "DmWrGroupsTEMPID", "type": "TFloatField"}, "dm_rpdepository": {"name": "dm_rpdepository", "type": "TOraclePackage"}, "dmwrgroupstempname": {"name": "DmWrGroupsTempName", "type": "TWideStringField"}}, {});
  U.init(async () => {
    U.var_("NewDepositsDMWRGroups", null, "TNewDepositsDMWRGroups");
  });
  U.method("TNewDepositsDMWRGroups", "DataModuleCreate", async function DataModuleCreate(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mcall((await $.v(C, "DMtypes")), "Open", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TNewDepositsDMWRGroups", "DataModuleDestroy", async function DataModuleDestroy(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mcall((await $.v(C, "DMtypes")), "CloseAll", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  return U;
}
