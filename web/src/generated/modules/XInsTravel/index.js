// Generated module manifest
export default {
 "name": "XInsTravel",
 "dir": "Insurance/MainTravel",
 "mainForm": "TMainTravel",
 "units": [
  {
   "unit": "DMMainTravelImpl",
   "file": "DMMainTravelImpl",
   "form": "TDMMainTravel",
   "ok": 3,
   "fail": 0,
   "activeForm": null,
   "classes": [
    "TDMMainTravel"
   ],
   "source": "Insurance/MainTravel/DMMainTravelImpl.pas"
  },
  {
   "unit": "MainTravelImpl",
   "file": "MainTravelImpl",
   "form": "TMainTravel",
   "ok": 67,
   "fail": 0,
   "activeForm": "TMainTravel",
   "classes": [
    "TMainTravel"
   ],
   "source": "Insurance/MainTravel/MainTravelImpl.pas"
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
  "inscontracterminated.bpl": "P_InsContracterminated",
  "inspayment.bpl": "P_InsPayment",
  "inspaymentplan.bpl": "P_InsPaymentPlan",
  "loss.bpl": "P_Loss",
  "travelblank.bpl": "P_TravelBlank"
 }
};
