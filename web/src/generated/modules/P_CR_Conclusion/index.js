// Generated module manifest
export default {
 "name": "P_CR_Conclusion",
 "dir": "Packages/Cr_Credit/CR_Conclusion",
 "mainForm": null,
 "units": [
  {
   "unit": "crConclusionCommonDecls",
   "file": "crConclusionCommonDecls",
   "form": null,
   "ok": 0,
   "fail": 0,
   "activeForm": null,
   "classes": [],
   "source": "Packages/Cr_Credit/CR_Conclusion/crConclusionCommonDecls.pas"
  },
  {
   "unit": "crConclusionMainUnitImpl",
   "file": "crConclusionMainUnitImpl",
   "form": "TConclusionForm",
   "ok": 54,
   "fail": 0,
   "activeForm": null,
   "classes": [
    "TConclusionForm"
   ],
   "source": "Packages/Cr_Credit/CR_Conclusion/crConclusionMainUnitImpl.pas"
  },
  {
   "unit": "crCreateCMAccountsImpl",
   "file": "crCreateCMAccountsImpl",
   "form": "TFormCreateCMAccounts",
   "ok": 5,
   "fail": 0,
   "activeForm": null,
   "classes": [
    "TFormCreateCMAccounts"
   ],
   "source": "Packages/Cr_Credit/CR_Conclusion/crCreateCMAccountsImpl.pas"
  },
  {
   "unit": "crDataModuleConclusion",
   "file": "crDataModuleConclusion",
   "form": "TCRDataModuleConcl",
   "ok": 8,
   "fail": 0,
   "activeForm": null,
   "classes": [
    "TCRDataModuleConcl"
   ],
   "source": "Packages/Cr_Credit/CR_Conclusion/crDataModuleConclusion.pas"
  },
  {
   "unit": "crLoanBalAccsUnit",
   "file": "crLoanBalAccsUnit",
   "form": "TFormLoanBalance",
   "ok": 4,
   "fail": 0,
   "activeForm": null,
   "classes": [
    "TFormLoanBalance"
   ],
   "source": "Packages/Cr_Credit/CR_Conclusion/crLoanBalAccsUnit.pas"
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
  "crCommonDecls",
  "crLogoutputImpl",
  "crTemporaryTransactionsViewFormImpl",
  "sboapiDataModuleImpl"
 ],
 "plugins": {
  "cm_customer.bpl": "P_CM_Customer"
 },
 "exports": [
  "InitPlugin"
 ]
};
