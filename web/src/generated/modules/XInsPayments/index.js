// Generated module manifest
export default {
 "name": "XInsPayments",
 "dir": "Packages/Insurance/InsPayments",
 "mainForm": "TfmPaymentsMain",
 "units": [
  {
   "unit": "InsDataMod",
   "file": "InsDataMod",
   "form": "TPayDataMod",
   "ok": 0,
   "fail": 0,
   "activeForm": null,
   "classes": [
    "TPayDataMod"
   ],
   "source": "Packages/Insurance/InsPayments/InsDataMod.pas"
  },
  {
   "unit": "InsNewPayment",
   "file": "InsNewPayment",
   "form": "TfmNewPayments",
   "ok": 5,
   "fail": 0,
   "activeForm": null,
   "classes": [
    "TfmNewPayments"
   ],
   "source": "Packages/Insurance/InsPayments/InsNewPayment.pas"
  },
  {
   "unit": "PaymentsMainImpl",
   "file": "PaymentsMainImpl",
   "form": "TfmPaymentsMain",
   "ok": 64,
   "fail": 0,
   "activeForm": "TfmPaymentsMain",
   "classes": [
    "TfmPaymentsMain"
   ],
   "source": "Packages/Insurance/InsPayments/PaymentsMainImpl.pas"
  }
 ],
 "lib": [
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
 "plugins": {}
};
