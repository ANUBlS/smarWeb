// Generated from UAccDModule.pas by pas2js — do not edit by hand; regenerate instead.
/* eslint-disable */
// @ts-nocheck

export default function define($) {
  const U = $.unit("UAccDModule", ["Windows", "Messages", "SysUtils", "Classes", "Graphics", "Controls", "Forms", "Dialogs", "Db", "OracleData", "UAccountDoc", "sboapidatamoduleimpl"]);
  const C = [U];
  U.defClass("TAccountDModule", "TDataModule", {"account": {"name": "Account", "type": "TOracleDataSet"}, "accountid": {"name": "AccountID", "type": "TFloatField"}, "accountkli_id": {"name": "AccountKLI_ID", "type": "TFloatField"}, "accountop_id": {"name": "AccountOP_ID", "type": "TFloatField"}, "accountacc_no": {"name": "AccountACC_NO", "type": "TStringField"}, "accountval_acc": {"name": "AccountVAL_ACC", "type": "TIntegerField"}, "accountname": {"name": "AccountNAME", "type": "TStringField"}, "accountopen_dat": {"name": "AccountOPEN_DAT", "type": "TDateTimeField"}, "accountclose_dat": {"name": "AccountCLOSE_DAT", "type": "TDateTimeField"}, "accountstatus": {"name": "AccountSTATUS", "type": "TFloatField"}, "accountbal_cn1": {"name": "AccountBAL_CN1", "type": "TFloatField"}, "accountbal_cn2": {"name": "AccountBAL_CN2", "type": "TFloatField"}, "accountbal_cn3": {"name": "AccountBAL_CN3", "type": "TFloatField"}, "accountbal_cn4": {"name": "AccountBAL_CN4", "type": "TFloatField"}, "accountfilial": {"name": "AccountFILIAL", "type": "TIntegerField"}, "accountsim_otcet": {"name": "AccountSIM_OTCET", "type": "TFloatField"}, "accounttipacc": {"name": "AccountTIPACC", "type": "TStringField"}, "accountlimit": {"name": "AccountLIMIT", "type": "TFloatField"}, "accountold_acc_no": {"name": "AccountOLD_ACC_NO", "type": "TStringField"}, "accountpair_acc": {"name": "AccountPAIR_ACC", "type": "TFloatField"}, "accountinsider": {"name": "AccountINSIDER", "type": "TStringField"}, "accountdata": {"name": "AccountData", "type": "TDataSource"}}, {});
  U.init(async () => {
    U.var_("AccountDModule", null, "TAccountDModule");
  });
  return U;
}
