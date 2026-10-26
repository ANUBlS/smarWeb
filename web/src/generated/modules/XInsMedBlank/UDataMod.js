// Generated from UDataMod.pas by pas2js — do not edit by hand; regenerate instead.
/* eslint-disable */
// @ts-nocheck

export default function define($) {
  const U = $.unit("UDataMod", ["Windows", "Messages", "SysUtils", "Classes", "Graphics", "Controls", "Forms", "Dialogs", "Db", "OracleData", "Oracle", "sboapiDataModuleImpl"]);
  const C = [U];
  U.defClass("TMedBDataMod", "TDataModule", {"odsmedical": {"name": "ODSMedical", "type": "TOracleDataSet"}, "odsmedicalid": {"name": "ODSMedicalID", "type": "TIntegerField"}, "odsmedicalempnum": {"name": "ODSMedicalEMPNUM", "type": "TIntegerField"}, "odsmedicalgroupa": {"name": "ODSMedicalGROUPA", "type": "TIntegerField"}, "odsmedicalgroupacoverage": {"name": "ODSMedicalGROUPACOVERAGE", "type": "TStringField"}, "odsmedicalgroupb": {"name": "ODSMedicalGROUPB", "type": "TIntegerField"}, "odsmedicalgroupbcoverage": {"name": "ODSMedicalGROUPBCOVERAGE", "type": "TStringField"}, "odsmedicalgroupc": {"name": "ODSMedicalGROUPC", "type": "TIntegerField"}, "odsmedicalgroupccoverage": {"name": "ODSMedicalGROUPCCOVERAGE", "type": "TStringField"}, "odsmedicalinsprogram": {"name": "ODSMedicalINSPROGRAM", "type": "TStringField"}, "odsmedicalserv_id": {"name": "ODSMedicalSERV_ID", "type": "TIntegerField"}, "odsmedicalbegindate": {"name": "ODSMedicalBEGINDATE", "type": "TDateTimeField"}, "odsmedicalenddate": {"name": "ODSMedicalENDDATE", "type": "TDateTimeField"}, "odsmedicalemps_id": {"name": "ODSMedicalEMPS_ID", "type": "TStringField"}, "odsmedicalinpatserv": {"name": "ODSMedicalINPATSERV", "type": "TIntegerField"}, "odsmedicaloutpatserv": {"name": "ODSMedicalOUTPATSERV", "type": "TIntegerField"}, "odsmedicalemeraid": {"name": "ODSMedicalEMERAID", "type": "TIntegerField"}, "odsmedicalprescdrugs": {"name": "ODSMedicalPRESCDRUGS", "type": "TIntegerField"}, "odsmedicaldentserv": {"name": "ODSMedicalDENTSERV", "type": "TIntegerField"}, "odsmedicalprophyserv": {"name": "ODSMedicalPROPHYSERV", "type": "TIntegerField"}, "odsmedicalprophyins": {"name": "ODSMedicalPROPHYINS", "type": "TIntegerField"}, "odsmedicalsanatorium": {"name": "ODSMedicalSANATORIUM", "type": "TIntegerField"}, "odsmedicalchildbirth": {"name": "ODSMedicalCHILDBIRTH", "type": "TIntegerField"}, "odsmedicalprivatedrserv": {"name": "ODSMedicalPRIVATEDRSERV", "type": "TIntegerField"}, "odsmedicalmedicalevac": {"name": "ODSMedicalMEDICALEVAC", "type": "TIntegerField"}, "odsmedicalprostins": {"name": "ODSMedicalPROSTINS", "type": "TIntegerField"}, "odsmedicalchemoradiotherapy": {"name": "ODSMedicalCHEMORADIOTHERAPY", "type": "TIntegerField"}, "odsmedicalkli_id": {"name": "ODSMedicalKLI_ID", "type": "TIntegerField"}, "odscusts": {"name": "ODSCusts", "type": "TOracleDataSet"}, "odscustsid": {"name": "ODSCustsID", "type": "TIntegerField"}, "odscustsname": {"name": "ODSCustsNAME", "type": "TStringField"}, "odscustsaddress": {"name": "ODSCustsADDRESS", "type": "TStringField"}, "dscusts": {"name": "DSCusts", "type": "TDataSource"}, "odsmedservices": {"name": "ODSMedServices", "type": "TOracleDataSet"}, "odsmedservicesid": {"name": "ODSMedServicesID", "type": "TFloatField"}, "odsmedservicesname": {"name": "ODSMedServicesNAME", "type": "TStringField"}, "dsmedservices": {"name": "DSMedServices", "type": "TDataSource"}, "odsemployees": {"name": "ODSEmployees", "type": "TOracleDataSet"}, "odsemployeesid": {"name": "ODSEmployeesID", "type": "TIntegerField"}, "odsemployeesmed_id": {"name": "ODSEmployeesMED_ID", "type": "TIntegerField"}, "odsemployeesname": {"name": "ODSEmployeesNAME", "type": "TStringField"}, "odsemployeessurname": {"name": "ODSEmployeesSURNAME", "type": "TStringField"}, "odsemployeesfathername": {"name": "ODSEmployeesFATHERNAME", "type": "TStringField"}, "odsemployeesdateofbirth": {"name": "ODSEmployeesDATEOFBIRTH", "type": "TDateTimeField"}, "odsemployeessex": {"name": "ODSEmployeesSEX", "type": "TIntegerField"}, "odsemployeesocc_id": {"name": "ODSEmployeesOCC_ID", "type": "TIntegerField"}, "odsemployeesgroup_": {"name": "ODSEmployeesGROUP_", "type": "TStringField"}, "dsemployees": {"name": "DSEmployees", "type": "TDataSource"}, "odsoccupation": {"name": "ODSOccupation", "type": "TOracleDataSet"}, "dsoccupation": {"name": "DSOccupation", "type": "TDataSource"}, "odsemployeesocccombo": {"name": "ODSEmployeesOCCCombo", "type": "TStringField"}, "dsmedical": {"name": "DSMedical", "type": "TDataSource"}, "odsoccupationid": {"name": "ODSOccupationID", "type": "TFloatField"}, "odsoccupationname": {"name": "ODSOccupationNAME", "type": "TStringField"}, "opcommon": {"name": "OPCOMMON", "type": "TOraclePackage"}}, {});
  U.init(async () => {
    U.var_("MedBDataMod", null, "TMedBDataMod");
  });
  U.method("TMedBDataMod", "ODSEmployeesAfterInsert", async function ODSEmployeesAfterInsert(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"dataset": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["dataset"]);
  {
    const $t1 = L0["dataset"];
    await $.mset((await $.wcall([$t1], "FieldByName", ["MED_ID"], C)), "AsFloat", (await $.mv((await $.wv([$t1], "ODSMedicalID", C, false)), "Value")));
  }
  return L0.result;
}, {"params": ["DataSet"], "kind": "procedure", "ptypes": ["TDataSet"]});
  U.method("TMedBDataMod", "DataModuleCreate", async function DataModuleCreate(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mcall((await $.v(C, "ODSCusts")), "Open", []);
  await $.mcall((await $.v(C, "ODSMedServices")), "Open", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  return U;
}
