// Generated from DataModuleUWUnit.pas by pas2js — do not edit by hand; regenerate instead.
/* eslint-disable */
// @ts-nocheck

export default function define($) {
  const U = $.unit("DataModuleUWUnit", ["Windows", "Messages", "SysUtils", "Classes", "Graphics", "Controls", "Forms", "Dialogs", "Db", "OracleData", "sboapiDataModuleImpl"]);
  const C = [U];
  U.defClass("TUWDataModule", "TDataModule", {"contracttypedata": {"name": "ContractTypeData", "type": "TOracleDataSet"}, "datasrccontracttype": {"name": "DataSrcContractType", "type": "TDataSource"}, "contracttypedatatypediscription": {"name": "ContractTypeDataTYPEDISCRIPTION", "type": "TStringField"}, "contracttypedatatype": {"name": "ContractTypeDataTYPE", "type": "TStringField"}, "contracttypedatadepositkind": {"name": "ContractTypeDataDEPOSITKIND", "type": "TStringField"}, "otherdeposits": {"name": "OtherDeposits", "type": "TOracleDataSet"}, "datasrcotherdeposit": {"name": "DataSrcOtherDeposit", "type": "TDataSource"}, "otherdepositstotaldeposits": {"name": "OtherDepositsTOTALDEPOSITS", "type": "TFloatField"}}, {});
  U.init(async () => {
    U.var_("UWDataModule", null, "TUWDataModule");
  });
  return U;
}
