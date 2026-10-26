// Generated module manifest
export default {
 "name": "XInsCargo",
 "dir": "Insurance/Maincargo",
 "mainForm": "TMaincargo",
 "units": [
  {
   "unit": "DMMainCargoimpl",
   "file": "DMMainCargoimpl",
   "form": "TDMMainCargo",
   "ok": 2,
   "fail": 0,
   "activeForm": null,
   "classes": [
    "TDMMainCargo"
   ],
   "source": "Insurance/Maincargo/DMMainCargoimpl.pas"
  },
  {
   "unit": "MaincargoImpl",
   "file": "MaincargoImpl",
   "form": "TMaincargo",
   "ok": 67,
   "fail": 0,
   "activeForm": "TMaincargo",
   "classes": [
    "TMaincargo"
   ],
   "source": "Insurance/Maincargo/MaincargoImpl.pas"
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
  "cargoblank.bpl": "P_CargoBlank",
  "inscontracterminated.bpl": "P_InsContracterminated",
  "inspayment.bpl": "P_InsPayment",
  "inspaymentplan.bpl": "P_InsPaymentPlan",
  "loss.bpl": "P_Loss"
 }
};
