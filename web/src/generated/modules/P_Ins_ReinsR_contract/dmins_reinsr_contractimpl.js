// Generated from dmins_reinsr_contractimpl.pas by pas2js — do not edit by hand; regenerate instead.
/* eslint-disable */
// @ts-nocheck

export default function define($) {
  const U = $.unit("dmins_reinsr_contractimpl", ["SysUtils", "Classes", "DB", "OracleData", "sboapiDataModuleImpl", "CommanParametrs"]);
  const C = [U];
  U.defClass("Tdmins_reinsr_contract", "TDataModule", {"ds_ins_reinsr_contract": {"name": "ds_ins_reinsr_contract", "type": "TOracleDataSet"}, "dsr_ins_reinsr_contract": {"name": "dsr_ins_reinsr_contract", "type": "TDataSource"}, "ds_ins_reinsr_contractid": {"name": "ds_ins_reinsr_contractID", "type": "TIntegerField"}, "ds_ins_reinsr_contractname": {"name": "ds_ins_reinsr_contractNAME", "type": "TWideStringField"}, "dsins_dict_companie": {"name": "DSins_dict_companie", "type": "TOracleDataSet"}, "dsrins_dict_companie": {"name": "DSrins_dict_companie", "type": "TDataSource"}, "dsins_dict_companieid": {"name": "DSins_dict_companieID", "type": "TFloatField"}, "dsins_dict_companiename": {"name": "DSins_dict_companieNAME", "type": "TWideStringField"}, "dsr_contracts": {"name": "dsr_contracts", "type": "TDataSource"}, "ds_contracts": {"name": "ds_contracts", "type": "TOracleDataSet"}, "ds_contractstype_id": {"name": "ds_contractsTYPE_ID", "type": "TFloatField"}, "ds_contractsbegin_date": {"name": "ds_contractsBEGIN_DATE", "type": "TDateTimeField"}, "ds_contractsend_date": {"name": "ds_contractsEND_DATE", "type": "TDateTimeField"}, "ds_contractsammount": {"name": "ds_contractsAMMOUNT", "type": "TFloatField"}, "ds_contractspolicy_num": {"name": "ds_contractsPOLICY_NUM", "type": "TWideStringField"}, "ds_contractsinssumm": {"name": "ds_contractsINSSUMM", "type": "TFloatField"}, "ds_contractsfranshiz": {"name": "ds_contractsFRANSHIZ", "type": "TFloatField"}, "ds_contractsreins": {"name": "ds_contractsREINS", "type": "TFloatField"}, "ds_contractsid": {"name": "ds_contractsID", "type": "TFloatField"}, "dssysdat": {"name": "DSsysdat", "type": "TOracleDataSet"}, "dssysdattek_dat": {"name": "DSsysdatTEK_DAT", "type": "TDateTimeField"}, "dssysdatpred_dat": {"name": "DSsysdatPRED_DAT", "type": "TDateTimeField"}, "dssysdatarc_day": {"name": "DSsysdatARC_DAY", "type": "TDateTimeField"}, "dssysdatclose": {"name": "DSsysdatCLOSE", "type": "TIntegerField"}, "dsrins_rein_other_info": {"name": "dsrins_rein_other_info", "type": "TDataSource"}, "dsins_rein_other_info": {"name": "dsins_rein_other_info", "type": "TOracleDataSet"}, "dsins_rein_other_infoid": {"name": "dsins_rein_other_infoID", "type": "TFloatField"}, "dsins_rein_other_infocustid": {"name": "dsins_rein_other_infoCUSTID", "type": "TFloatField"}, "dsins_rein_other_inforeins_part_komis": {"name": "dsins_rein_other_infoREINS_PART_KOMIS", "type": "TFloatField"}, "dsins_rein_other_inforeins_ammount": {"name": "dsins_rein_other_infoREINS_AMMOUNT", "type": "TFloatField"}, "dsins_rein_other_inforeins_bruto_ammount": {"name": "dsins_rein_other_infoREINS_BRUTO_AMMOUNT", "type": "TFloatField"}, "dsins_rein_other_infoins__pred_ammount": {"name": "dsins_rein_other_infoINS__PRED_AMMOUNT", "type": "TFloatField"}, "dsins_rein_other_infoins_id": {"name": "dsins_rein_other_infoINS_ID", "type": "TFloatField"}, "dsins_rein_other_infoins_type": {"name": "dsins_rein_other_infoINS_TYPE", "type": "TFloatField"}, "dsins_rein_other_infoins_ammount": {"name": "dsins_rein_other_infoINS_AMMOUNT", "type": "TFloatField"}, "dsreins": {"name": "dsreins", "type": "TOracleDataSet"}, "dsrreins": {"name": "dsrreins", "type": "TDataSource"}, "dsins_rein_other_infoins_pred_info": {"name": "dsins_rein_other_infoINS_PRED_INFO", "type": "TWideStringField"}, "dsins_rein_other_infocid": {"name": "dsins_rein_other_infoCID", "type": "TFloatField"}, "ds_contractsfilial": {"name": "ds_contractsFILIAL", "type": "TFloatField"}, "dsins_rein_other_infocust_name": {"name": "dsins_rein_other_infoCUST_NAME", "type": "TWideStringField"}}, {});
  U.init(async () => {
    U.var_("dmins_reinsr_contract", null, "Tdmins_reinsr_contract");
  });
  U.method("Tdmins_reinsr_contract", "DataModuleCreate", async function DataModuleCreate(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mcall((await $.v(C, "ds_ins_reinsr_contract")), "Open", []);
  await $.mcall((await $.v(C, "DSins_dict_companie")), "Open", []);
  await $.mcall((await $.v(C, "DSsysdat")), "Open", []);
  await $.mcall((await $.v(C, "dsreins")), "Open", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("Tdmins_reinsr_contract", "DataModuleDestroy", async function DataModuleDestroy(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mcall((await $.v(C, "ds_ins_reinsr_contract")), "close", []);
  await $.mcall((await $.v(C, "DSins_dict_companie")), "close", []);
  await $.mcall((await $.v(C, "DSsysdat")), "close", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("Tdmins_reinsr_contract", "ds_contractsAfterInsert", async function ds_contractsAfterInsert(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"dataset": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["dataset"]);
  await $.mset((await $.mcall((await $.v(C, "ds_contracts")), "FieldByName", ["filial"])), "asinteger", 0);
  await $.mset((await $.mcall((await $.v(C, "ds_contracts")), "FieldByName", ["reins"])), "asinteger", 1);
  return L0.result;
}, {"params": ["DataSet"], "kind": "procedure", "ptypes": ["TDataSet"]});
  return U;
}
