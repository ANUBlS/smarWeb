// Generated module manifest
export default {
 "name": "P_CargoBlank",
 "dir": "Insurance/CargoBlank",
 "mainForm": null,
 "units": [
  {
   "unit": "DMCargoBlankImpl",
   "file": "DMCargoBlankImpl",
   "form": "TDMCargoBlank",
   "ok": 2,
   "fail": 0,
   "activeForm": null,
   "classes": [
    "TDMCargoBlank"
   ],
   "source": "Insurance/CargoBlank/DMCargoBlankImpl.pas"
  },
  {
   "unit": "FrmCargoBlankimpl",
   "file": "FrmCargoBlankimpl",
   "form": "TFrmCargoBlank",
   "ok": 16,
   "fail": 0,
   "activeForm": null,
   "classes": [
    "TFrmCargoBlank"
   ],
   "source": "Insurance/CargoBlank/FrmCargoBlankimpl.pas"
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
