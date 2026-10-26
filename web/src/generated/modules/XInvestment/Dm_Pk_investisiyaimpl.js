// Generated from Dm_Pk_investisiyaimpl.pas by pas2js — do not edit by hand; regenerate instead.
/* eslint-disable */
// @ts-nocheck

export default function define($) {
  const U = $.unit("Dm_Pk_investisiyaimpl", ["SysUtils", "Classes", "ImgList", "Controls", "DB", "OracleData", "Oracle", "sboapiDataModuleImpl", "Frm_pk_Investisiya"]);
  const C = [U];
  U.defClass("TDm_Pk_investisiya", "TDataModule", {"dsvalute": {"name": "DsValute", "type": "TOracleDataSet"}, "dsvalutevalute": {"name": "DsValuteVALUTE", "type": "TIntegerField"}, "dsvaluteval_name": {"name": "DsValuteVAL_NAME", "type": "TWideStringField"}, "dsrvalute": {"name": "DsrValute", "type": "TDataSource"}, "ds_cust": {"name": "Ds_Cust", "type": "TOracleDataSet"}, "ds_custid": {"name": "Ds_CustID", "type": "TIntegerField"}, "ds_custname": {"name": "Ds_CustNAME", "type": "TWideStringField"}, "dsr_cust": {"name": "Dsr_Cust", "type": "TDataSource"}, "dsinvest_type": {"name": "dsinvest_type", "type": "TOracleDataSet"}, "dsinvest_typeid": {"name": "dsinvest_typeID", "type": "TFloatField"}, "dsinvest_typename": {"name": "dsinvest_typeNAME", "type": "TWideStringField"}, "dsrinvest_type": {"name": "dsrinvest_type", "type": "TDataSource"}, "pk_ins_investment": {"name": "pk_ins_Investment", "type": "TOraclePackage"}, "dsmain_contracts": {"name": "DsMain_Contracts", "type": "TOracleDataSet"}, "dsmain_contractsid": {"name": "DsMain_ContractsID", "type": "TFloatField"}, "dsmain_contractscontr_type": {"name": "DsMain_ContractsCONTR_TYPE", "type": "TWideStringField"}, "dsmain_contractsbegin_date": {"name": "DsMain_ContractsBEGIN_DATE", "type": "TDateTimeField"}, "dsmain_contractsend_date": {"name": "DsMain_ContractsEND_DATE", "type": "TDateTimeField"}, "dsmain_contractsammount": {"name": "DsMain_ContractsAMMOUNT", "type": "TFloatField"}, "dsmain_contractsmusteri": {"name": "DsMain_ContractsMUSTERI", "type": "TWideStringField"}, "dsmain_contractscontract_name": {"name": "DsMain_ContractsCONTRACT_NAME", "type": "TWideStringField"}, "dsmain_contractsmuddetli": {"name": "DsMain_ContractsMUDDETLI", "type": "TWideStringField"}, "dsmain_contractsval_name": {"name": "DsMain_ContractsVAL_NAME", "type": "TWideStringField"}, "dsmain_contractsstatus": {"name": "DsMain_ContractsSTATUS", "type": "TIntegerField"}, "dsmain_contractspercent": {"name": "DsMain_ContractsPERCENT", "type": "TIntegerField"}, "dsrmain_contracts": {"name": "DsrMain_Contracts", "type": "TDataSource"}, "dsmain_contractsper_ammount": {"name": "DsMain_ContractsPER_AMMOUNT", "type": "TFloatField"}, "dsmain_contractsfilial": {"name": "DsMain_ContractsFILIAL", "type": "TWideStringField"}, "dsmain_contractsmain_acc_id": {"name": "DsMain_ContractsMAIN_ACC_ID", "type": "TWideStringField"}, "dsmain_contractsper_acc_id": {"name": "DsMain_ContractsPER_ACC_ID", "type": "TWideStringField"}, "dsmain_contractscalc_day_per": {"name": "DsMain_ContractsCALC_DAY_PER", "type": "TFloatField"}, "dsmain_contractsomv": {"name": "DsMain_ContractsOMV", "type": "TFloatField"}, "dsmain_contractsremainder_per_ammount": {"name": "DsMain_ContractsREMAINDER_PER_AMMOUNT", "type": "TFloatField"}, "dsmain_contractsesas_qaliq": {"name": "DsMain_ContractsESAS_QALIQ", "type": "TFloatField"}, "dsmain_contractsfaiz_qaliq": {"name": "DsMain_ContractsFAIZ_QALIQ", "type": "TFloatField"}, "dsmain_contractsclose_prefix": {"name": "DsMain_ContractsCLOSE_PREFIX", "type": "TFloatField"}}, {});
  U.init(async () => {
    U.var_("Dm_Pk_investisiya", null, "TDm_Pk_investisiya");
  });
  U.method("TDm_Pk_investisiya", "DataModuleCreate", async function DataModuleCreate(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mcall((await $.v(C, "DsValute")), "Open", []);
  await $.mcall((await $.v(C, "Ds_Cust")), "Open", []);
  await $.mcall((await $.v(C, "dsinvest_type")), "Open", []);
  await $.mcall((await $.v(C, "DsMain_Contracts")), "Open", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TDm_Pk_investisiya", "DataModuleDestroy", async function DataModuleDestroy(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mcall((await $.v(C, "DsValute")), "close", []);
  await $.mcall((await $.v(C, "Ds_Cust")), "Close", []);
  await $.mcall((await $.v(C, "dsinvest_type")), "Close", []);
  await $.mcall((await $.v(C, "DsMain_Contracts")), "Close", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  return U;
}
