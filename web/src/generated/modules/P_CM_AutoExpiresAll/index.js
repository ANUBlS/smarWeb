// Generated module manifest
export default {
 "name": "P_CM_AutoExpiresAll",
 "dir": "Packages/Cr_Credit/CR_Filter/CR_AutoExpiresAll",
 "mainForm": null,
 "units": [
  {
   "unit": "CreditPropertiesUnitImpl",
   "file": "CreditPropertiesUnitImpl",
   "form": "TFrmCreditProperties",
   "ok": 3,
   "fail": 0,
   "activeForm": null,
   "classes": [
    "TFrmCreditProperties"
   ],
   "source": "Packages/Cr_Credit/CR_Filter/CR_AutoExpiresAll/CreditPropertiesUnitImpl.pas"
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
   "source": "Packages/Cr_Credit/CR_Filter/CR_AutoExpiresAll/DatModAexUnitImpl.pas"
  },
  {
   "unit": "FrmAExUnitImpl",
   "file": "FrmAExUnitImpl",
   "form": "TFrmAEx",
   "ok": 21,
   "fail": 0,
   "activeForm": null,
   "classes": [
    "TFrmAEx"
   ],
   "source": "Packages/Cr_Credit/CR_Filter/CR_AutoExpiresAll/FrmAExUnitImpl.pas"
  }
 ],
 "lib": [
  "CMHintBox",
  "CMOracleAPIDataModuleImpl",
  "CommonDecls",
  "FrmChangePasswordImpl",
  "FrmConnectionImpl",
  "LogoutputImpl",
  "OraLogon",
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
  "SystemState",
  "TemporaryTransactionsViewFormImpl",
  "UnitChangePasswordForm",
  "UnitSBOraLogOn",
  "sboapiDataModuleImpl"
 ],
 "plugins": {
  "cm_payment.bpl": "P_CM_Payment"
 },
 "exports": [
  "ShowExpires",
  "InitPlugin"
 ]
};
