// Generated from ControlDatModImpl.pas by pas2js — do not edit by hand; regenerate instead.
/* eslint-disable */
// @ts-nocheck

export default function define($) {
  const U = $.unit("ControlDatModImpl", ["Windows", "Messages", "SysUtils", "Classes", "Graphics", "Controls", "Forms", "Dialogs", "Oracle", "Db", "OracleData", "sboapiDataModuleImpl"]);
  const C = [U];
  U.defClass("TControlDatMod", "TDataModule", {"cm_control": {"name": "CM_CONTROL", "type": "TOraclePackage"}, "resultsdatset": {"name": "ResultsDatSet", "type": "TOracleDataSet"}, "resultdatsrc": {"name": "ResultDatSrc", "type": "TDataSource"}, "resultsdatsetnumberofcredit": {"name": "ResultsDatSetNUMBEROFCREDIT", "type": "TWideStringField"}, "resultsdatsetcustname": {"name": "ResultsDatSetCUSTNAME", "type": "TWideStringField"}, "resultsdatsetdrest": {"name": "ResultsDatSetDREST", "type": "TFloatField"}, "resultsdatsetdinterestrest": {"name": "ResultsDatSetDINTERESTREST", "type": "TFloatField"}, "resultsdatsetdduerest": {"name": "ResultsDatSetDDUEREST", "type": "TFloatField"}, "resultsdatsetddueinterestrest": {"name": "ResultsDatSetDDUEINTERESTREST", "type": "TFloatField"}, "branchs": {"name": "Branchs", "type": "TOracleDataSet"}, "branchsdatscr": {"name": "BranchsDatScr", "type": "TDataSource"}, "branchsid": {"name": "BranchsID", "type": "TFloatField"}, "branchsname": {"name": "BranchsNAME", "type": "TWideStringField"}, "oracledataset1": {"name": "OracleDataSet1", "type": "TOracleDataSet"}, "oracledataset1id": {"name": "OracleDataSet1ID", "type": "TFloatField"}, "oracledataset2": {"name": "OracleDataSet2", "type": "TOracleDataSet"}, "oracledataset2id": {"name": "OracleDataSet2ID", "type": "TFloatField"}, "oracledataset2numberofcredit": {"name": "OracleDataSet2NUMBEROFCREDIT", "type": "TWideStringField"}, "oracledataset2dateofconclusion": {"name": "OracleDataSet2DATEOFCONCLUSION", "type": "TDateTimeField"}, "oracledataset2rest": {"name": "OracleDataSet2REST", "type": "TFloatField"}, "oracledataset2interestrest": {"name": "OracleDataSet2INTERESTREST", "type": "TFloatField"}, "oracledataset2interest": {"name": "OracleDataSet2INTEREST", "type": "TFloatField"}}, {});
  U.init(async () => {
    U.var_("ControlDatMod", null, "TControlDatMod");
  });
  return U;
}
