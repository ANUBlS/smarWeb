// Generated module manifest
export default {
 "name": "XNewDeposits",
 "dir": "NewDepositsManager/NewDepositsManager",
 "mainForm": "TNewDepositsManagerImpl",
 "units": [
  {
   "unit": "NewDepositDataModule",
   "file": "NewDepositDataModule",
   "form": "TNewDepsitDataModule",
   "ok": 2,
   "fail": 0,
   "activeForm": null,
   "classes": [
    "TNewDepsitDataModule"
   ],
   "source": "NewDepositsManager/NewDepositsManager/NewDepositDataModule.pas"
  },
  {
   "unit": "NewDepositsManagerForm",
   "file": "NewDepositsManagerForm",
   "form": "TNewDepositsManagerImpl",
   "ok": 116,
   "fail": 0,
   "activeForm": "TNewDepositsManagerImpl",
   "classes": [
    "TNewDepositsManagerImpl"
   ],
   "source": "NewDepositsManager/NewDepositsManager/NewDepositsManagerForm.pas"
  }
 ],
 "lib": [
  "NewCommonDeclsImpl",
  "NewTemporaryTransactionsFormImpl",
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
  "newdepositsapplymoney.bpl": "P_NewDepositsApplyMoney",
  "newdepositsbalancesettings.bpl": "P_NewDepositsBalanceSettings",
  "newdepositscapitalize.bpl": "P_NewDepositsCapitalize",
  "newdepositscontract.bpl": "P_NewDepositsContract_2",
  "newdepositscontrol.bpl": "P_NewDepositsControl",
  "newdepositsextractmoney.bpl": "P_NewDepositsExtractMoney",
  "newdepositsfilter.bpl": "P_NewDepositsFilter",
  "newdepositslogs.bpl": "P_NewDepositsLogs",
  "newdepositspercentconverting.bpl": "P_NewDepositsPercentConverting",
  "newdepositspercentsettings.bpl": "P_NewDepositsPercentSettings",
  "newdepositsprolongation.bpl": "P_NewDepositsProlongation",
  "newdepositsreport.bpl": "P_NewDepositsReport",
  "newdepositssettings.bpl": "P_NewDepositsSettings",
  "newdepositsshedule.bpl": "P_NewDepositsShedule",
  "newdepositsuntimelyetmoney.bpl": "P_NewDepositsUntimelyEtMoney",
  "newdepositswreport.bpl": "P_NewDepositsWReport",
  "newdepositswrgroups.bpl": "P_NewDepositsWRGroups",
  "newdepositswrsetup.bpl": "P_NewDepositsWRSetup",
  "sb_general.bpl": "P_Sb_General"
 }
};
