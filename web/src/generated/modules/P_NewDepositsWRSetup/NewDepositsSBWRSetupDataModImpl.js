// Generated from NewDepositsSBWRSetupDataModImpl.pas by pas2js — do not edit by hand; regenerate instead.
/* eslint-disable */
// @ts-nocheck

export default function define($) {
  const U = $.unit("NewDepositsSBWRSetupDataModImpl", ["Windows", "Messages", "SysUtils", "Classes", "Graphics", "Controls", "Forms", "Dialogs", "OracleData", "Oracle", "Db", "sboapiDatamoduleImpl"]);
  const C = [U];
  U.defClass("TNewDepositsSBWRSetupDataMod", "TDataModule", {"sbwrtemplatesdset": {"name": "SBWRTemplatesDSet", "type": "TOracleDataSet"}, "sbwrtemplatesdsetid": {"name": "SBWRTemplatesDSetID", "type": "TFloatField"}, "sbwrtemplatesdsetname": {"name": "SBWRTemplatesDSetNAME", "type": "TWideStringField"}, "sbwrtemplatesdsetpath": {"name": "SBWRTemplatesDSetPATH", "type": "TWideStringField"}, "sbwrtemplatesdsrc": {"name": "SBWRTemplatesDSrc", "type": "TDataSource"}, "sbcm_wr_tools": {"name": "SBCM_WR_TOOLS", "type": "TOraclePackage"}, "sbwrbookmarksdset": {"name": "SBWRBookmarksDSet", "type": "TOracleDataSet"}, "sbwrbookmarksdsetid": {"name": "SBWRBookmarksDSetID", "type": "TFloatField"}, "sbwrbookmarksdsettemplateid": {"name": "SBWRBookmarksDSetTEMPLATEID", "type": "TFloatField"}, "sbwrbookmarksdsetfieldid": {"name": "SBWRBookmarksDSetFIELDID", "type": "TFloatField"}, "sbwrbookmarksdsetbookmarkname": {"name": "SBWRBookmarksDSetBOOKMARKNAME", "type": "TWideStringField"}, "sbwrbookmarksdsrc": {"name": "SBWRBookmarksDSrc", "type": "TDataSource"}, "sbwrfieldsdset": {"name": "SBWRFieldsDSet", "type": "TOracleDataSet"}, "sbwrfieldsdsrc": {"name": "SBWRFieldsDSrc", "type": "TDataSource"}, "opendlg": {"name": "OpenDlg", "type": "TOpenDialog"}, "sboracledsettamplates": {"name": "SBOracleDSetTamplates", "type": "TOracleDataSet"}, "sboracledsettamplatesid": {"name": "SBOracleDSetTamplatesID", "type": "TFloatField"}, "sboracledsettamplatesname": {"name": "SBOracleDSetTamplatesNAME", "type": "TWideStringField"}, "sboracledsettamplatespath": {"name": "SBOracleDSetTamplatesPATH", "type": "TWideStringField"}, "sbdsourcetamplates": {"name": "SBDSourceTamplates", "type": "TDataSource"}, "sbdminfodataset": {"name": "SBDMInfoDataSet", "type": "TOracleDataSet"}, "sbdminfodatasrc": {"name": "SBDMInfoDataSrc", "type": "TDataSource"}, "sbreplacedataset": {"name": "SBReplaceDataSet", "type": "TOracleDataSet"}}, {});
  U.init(async () => {
    U.var_("NewDepositsSBWRSetupDataMod", null, "TNewDepositsSBWRSetupDataMod");
  });
  return U;
}
