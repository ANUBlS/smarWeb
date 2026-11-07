// Generated module manifest
export default {
 "name": "P_CM_AutoExpiresAll_2",
 "dir": "Packages/SB_Credit/CM_AutoExpiresAll",
 "mainForm": null,
 "units": [
  {
   "unit": "CreditPropertiesUnitImpl",
   "file": "CreditPropertiesUnitImpl",
   "form": "TFrmCreditProperties",
   "ok": 4,
   "fail": 0,
   "activeForm": null,
   "classes": [
    "TFrmCreditProperties"
   ],
   "source": "Packages/SB_Credit/CM_AutoExpiresAll/CreditPropertiesUnitImpl.pas"
  },
  {
   "unit": "DatModAexUnitImpl",
   "file": "DatModAexUnitImpl",
   "form": "TDatModAex",
   "ok": 2,
   "fail": 0,
   "activeForm": null,
   "classes": [
    "TDatModAex"
   ],
   "source": "Packages/SB_Credit/CM_AutoExpiresAll/DatModAexUnitImpl.pas"
  },
  {
   "unit": "FrmAExUnitImpl",
   "file": "FrmAExUnitImpl",
   "form": "TFrmAEx",
   "ok": 23,
   "fail": 0,
   "activeForm": null,
   "classes": [
    "TFrmAEx"
   ],
   "source": "Packages/SB_Credit/CM_AutoExpiresAll/FrmAExUnitImpl.pas"
  }
 ],
 "lib": [
  "CommonDecls",
  "LogoutputImpl",
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
  "TemporaryTransactionsViewFormImpl",
  "UnitChangePasswordForm",
  "UnitSBOraLogOn",
  "sboapiDataModuleImpl"
 ],
 "plugins": {
  "cm_payment.bpl": "P_CM_Payment",
  "sb_general.bpl": "P_Sb_General"
 },
 "exports": [
  "ShowExpires",
  "InitPlugin"
 ]
};
