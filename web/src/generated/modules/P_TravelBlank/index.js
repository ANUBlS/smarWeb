// Generated module manifest
export default {
 "name": "P_TravelBlank",
 "dir": "Insurance/TravelBlank",
 "mainForm": null,
 "units": [
  {
   "unit": "DMTravelBlankImpl",
   "file": "DMTravelBlankImpl",
   "form": "TDMTravelBlank",
   "ok": 2,
   "fail": 0,
   "activeForm": null,
   "classes": [
    "TDMTravelBlank"
   ],
   "source": "Insurance/TravelBlank/DMTravelBlankImpl.pas"
  },
  {
   "unit": "FrmTravelBlankImpl",
   "file": "FrmTravelBlankImpl",
   "form": "TFrmTravelBlank",
   "ok": 16,
   "fail": 0,
   "activeForm": null,
   "classes": [
    "TFrmTravelBlank"
   ],
   "source": "Insurance/TravelBlank/FrmTravelBlankImpl.pas"
  }
 ],
 "lib": [
  "CMCurrencyEdit",
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
  "loss.bpl": "P_Loss",
  "reinsurance.bpl": "P_Reinsurance"
 },
 "exports": [
  "InitPlugin"
 ]
};
