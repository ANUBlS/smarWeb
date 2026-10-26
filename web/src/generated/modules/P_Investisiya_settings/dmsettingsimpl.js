// Generated from dmsettingsimpl.pas by pas2js — do not edit by hand; regenerate instead.
/* eslint-disable */
// @ts-nocheck

export default function define($) {
  const U = $.unit("dmsettingsimpl", ["SysUtils", "Classes", "DB", "OracleData", "CommanParametrs", "sboapiDataModuleImpl"]);
  const C = [U];
  U.defClass("Tdmsettings", "TDataModule", {"dsinvesttype": {"name": "DsInvestType", "type": "TOracleDataSet"}, "ds_i̇nvest_time": {"name": "Ds_İnvest_time", "type": "TOracleDataSet"}, "dsrinvesttype": {"name": "DsrInvestType", "type": "TDataSource"}, "dsr_i̇nvest_time": {"name": "Dsr_İnvest_time", "type": "TDataSource"}, "dsinvesttypeid": {"name": "DsInvestTypeID", "type": "TFloatField"}, "dsinvesttypename": {"name": "DsInvestTypeNAME", "type": "TWideStringField"}, "ds_i̇nvest_timeid": {"name": "Ds_İnvest_timeID", "type": "TFloatField"}, "ds_i̇nvest_timename": {"name": "Ds_İnvest_timeNAME", "type": "TWideStringField"}, "dsins_acc_typesb": {"name": "DSins_acc_typesB", "type": "TOracleDataSet"}, "dsins_acc_typesbid": {"name": "DSins_acc_typesBID", "type": "TFloatField"}, "dsins_acc_typesbname": {"name": "DSins_acc_typesBNAME", "type": "TWideStringField"}, "dsins_acc_bal_cn": {"name": "DSins_acc_bal_cn", "type": "TOracleDataSet"}, "dsins_acc_bal_cndict_id": {"name": "DSins_acc_bal_cnDICT_ID", "type": "TFloatField"}, "dsins_acc_bal_cnbal_cn": {"name": "DSins_acc_bal_cnBAL_CN", "type": "TFloatField"}, "dsrins_acc_bal_cn": {"name": "DSRins_acc_bal_cn", "type": "TDataSource"}, "dsrins_acc_typesb": {"name": "DSRins_acc_typesB", "type": "TDataSource"}}, {});
  U.init(async () => {
    U.var_("dmsettings", null, "Tdmsettings");
  });
  U.method("Tdmsettings", "DataModuleCreate", async function DataModuleCreate(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mcall((await $.v(C, "DsInvestType")), "Open", []);
  await $.mcall((await $.v(C, "Ds_İnvest_time")), "Open", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("Tdmsettings", "DataModuleDestroy", async function DataModuleDestroy(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mcall((await $.v(C, "DsInvestType")), "Close", []);
  await $.mcall((await $.v(C, "Ds_İnvest_time")), "Close", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  return U;
}
