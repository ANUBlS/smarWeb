// Generated from UnitDataModBBPayings.pas by pas2js — do not edit by hand; regenerate instead.
/* eslint-disable */
// @ts-nocheck

export default function define($) {
  const U = $.unit("UnitDataModBBPayings", ["Windows", "Messages", "SysUtils", "Classes", "Graphics", "Controls", "Forms", "Dialogs", "Db", "OracleData", "Oracle", "sboapidatamoduleimpl"]);
  const C = [U];
  U.defClass("TDataModBBPayings", "TDataModule", {"ods_abnservices": {"name": "ODS_ABNServices", "type": "TOracleDataSet"}, "ds_abnservices": {"name": "DS_ABNServices", "type": "TDataSource"}, "ods_contracts": {"name": "ODS_Contracts", "type": "TOracleDataSet"}, "ds_contracts": {"name": "DS_Contracts", "type": "TDataSource"}, "ods_services": {"name": "ODS_Services", "type": "TOracleDataSet"}, "ds_services": {"name": "DS_Services", "type": "TDataSource"}, "orpack_cablemanager": {"name": "OrPack_CableManager", "type": "TOraclePackage"}, "orpack_sbop": {"name": "OrPack_SBOP", "type": "TOraclePackage"}, "ods_abnservicesid": {"name": "ODS_ABNServicesID", "type": "TFloatField"}, "ods_abnservicesabn_name": {"name": "ODS_ABNServicesABN_NAME", "type": "TStringField"}, "ods_abnservicescontract_id": {"name": "ODS_ABNServicesCONTRACT_ID", "type": "TFloatField"}, "ods_abnservicescontract_num": {"name": "ODS_ABNServicesCONTRACT_NUM", "type": "TStringField"}, "ods_abnservicesreg_time": {"name": "ODS_ABNServicesREG_TIME", "type": "TDateTimeField"}, "ods_abnservicessrv_id": {"name": "ODS_ABNServicesSRV_ID", "type": "TFloatField"}, "ods_abnservicesservice": {"name": "ODS_ABNServicesSERVICE", "type": "TStringField"}, "ods_abnservicesamount": {"name": "ODS_ABNServicesAMOUNT", "type": "TFloatField"}, "ods_abnservicesamount_eqv": {"name": "ODS_ABNServicesAMOUNT_EQV", "type": "TFloatField"}, "ods_abnservicescurr_code": {"name": "ODS_ABNServicesCURR_CODE", "type": "TFloatField"}, "ods_abnservicesstatus": {"name": "ODS_ABNServicesSTATUS", "type": "TFloatField"}, "ods_abnservicesdone_time": {"name": "ODS_ABNServicesDONE_TIME", "type": "TDateTimeField"}, "ods_abnservicessys_date": {"name": "ODS_ABNServicesSYS_DATE", "type": "TDateTimeField"}, "ods_abnservicespaymethod": {"name": "ODS_ABNServicesPAYMETHOD", "type": "TFloatField"}}, {});
  U.init(async () => {
    U.var_("DataModBBPayings", null, "TDataModBBPayings");
  });
  return U;
}
