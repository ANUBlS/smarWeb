// Generated module manifest
export default {
 "name": "P_ResponsibilityBlank",
 "dir": "Insurance/ResponsibilityBlank",
 "mainForm": null,
 "units": [
  {
   "unit": "DMResponsibilityBlankImpl",
   "file": "DMResponsibilityBlankImpl",
   "form": "TDMResponsibilityBlank",
   "ok": 1,
   "fail": 0,
   "activeForm": null,
   "classes": [
    "TDMResponsibilityBlank"
   ],
   "source": "Insurance/ResponsibilityBlank/DMResponsibilityBlankImpl.pas"
  },
  {
   "unit": "FrmResponsibilityBlankImpl",
   "file": "FrmResponsibilityBlankImpl",
   "form": "TFrmResponsibilityBlank",
   "ok": 7,
   "fail": 0,
   "activeForm": null,
   "classes": [
    "TFrmResponsibilityBlank"
   ],
   "source": "Insurance/ResponsibilityBlank/FrmResponsibilityBlankImpl.pas"
  }
 ],
 "lib": [
  "CommanParametrs",
  "OraVariables",
  "SBAccount",
  "SBAlert",
  "SBAppInfo",
  "SBCore",
  "SBCustomer",
  "SBDecls",
  "SBInstallation",
  "SBLogin",
  "SBMessage",
  "SBMessages",
  "SBModules",
  "SBOConnectCached",
  "SBODecls",
  "SBOInitPkg",
  "SBOracleLogOn",
  "SBOutput",
  "SBSecurity",
  "SBSessionMgr",
  "SBSettings",
  "SBSrvIntf",
  "SBSystem",
  "SBTransaction",
  "SBUtils",
  "UnitChangePasswordForm",
  "UnitSBOraLogOn",
  "sboapiDataModuleImpl"
 ],
 "plugins": {
  "reinsurance.bpl": "P_Reinsurance"
 },
 "exports": [
  "InitPlugin"
 ]
};
