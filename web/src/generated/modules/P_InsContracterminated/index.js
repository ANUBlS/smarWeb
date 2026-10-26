// Generated module manifest
export default {
 "name": "P_InsContracterminated",
 "dir": "Insurance/Contracterminated",
 "mainForm": null,
 "units": [
  {
   "unit": "DMTerminatedImpl",
   "file": "DMTerminatedImpl",
   "form": "TDMTerminated",
   "ok": 2,
   "fail": 0,
   "activeForm": null,
   "classes": [
    "TDMTerminated"
   ],
   "source": "Insurance/Contracterminated/DMTerminatedImpl.pas"
  },
  {
   "unit": "FrmMainImpl",
   "file": "FrmMainImpl",
   "form": "TFrmMain",
   "ok": 11,
   "fail": 0,
   "activeForm": null,
   "classes": [
    "TFrmMain"
   ],
   "source": "Insurance/Contracterminated/FrmMainImpl.pas"
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
  "paymenterminateimpl.bpl": "P_PaymenTerminateimpl"
 },
 "exports": [
  "InitPlugin"
 ]
};
