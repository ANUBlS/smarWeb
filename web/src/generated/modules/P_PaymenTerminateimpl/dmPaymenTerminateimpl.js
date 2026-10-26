// Generated from dmPaymenTerminateimpl.pas by pas2js — do not edit by hand; regenerate instead.
/* eslint-disable */
// @ts-nocheck

export default function define($) {
  const U = $.unit("dmPaymenTerminateimpl", ["SysUtils", "Classes", "DB", "OracleData", "Oracle", "sboapiDataModuleimpl", "SBTranslateProc", "CommanParametrs"]);
  const C = [U];
  U.defClass("TdmPaymentTer", "TDataModule", {"dsrsysdat": {"name": "DSRSysdat", "type": "TDataSource"}, "dssysdat": {"name": "DSSysdat", "type": "TOracleDataSet"}, "dssysdattek_dat": {"name": "DSSysdatTEK_DAT", "type": "TDateTimeField"}, "dssysdatpred_dat": {"name": "DSSysdatPRED_DAT", "type": "TDateTimeField"}, "dssysdatarc_day": {"name": "DSSysdatARC_DAY", "type": "TDateTimeField"}, "dssysdatclose": {"name": "DSSysdatCLOSE", "type": "TIntegerField"}, "dspaymentter": {"name": "DSPaymentTer", "type": "TOracleDataSet"}, "dsrpaymentter": {"name": "DSRPaymentTer", "type": "TDataSource"}, "dsterbarderosay": {"name": "DSTerBarderoSay", "type": "TOracleDataSet"}, "dsterbarderosaysay": {"name": "DSTerBarderoSaySAY", "type": "TFloatField"}, "dsrpaymentloss": {"name": "DSRPaymentLoss", "type": "TDataSource"}, "dspaymentterreal": {"name": "DSPaymentTerReal", "type": "TOracleDataSet"}, "dsrpaymentterreal": {"name": "DSRPaymentTerReal", "type": "TDataSource"}, "dspaymentacc": {"name": "DSpaymentAcc", "type": "TOracleDataSet"}, "dspaymentaccid": {"name": "DSpaymentAccID", "type": "TFloatField"}, "dspaymentaccacc_no": {"name": "DSpaymentAccACC_NO", "type": "TWideStringField"}, "dsrpaymentacc": {"name": "DSRpaymentAcc", "type": "TDataSource"}, "dspaymentterrealcid": {"name": "DSPaymentTerRealCID", "type": "TFloatField"}, "dspaymentterrealtraid": {"name": "DSPaymentTerRealTRAID", "type": "TFloatField"}, "dspaymentterrealpaydate": {"name": "DSPaymentTerRealPAYDATE", "type": "TDateTimeField"}, "dspaymentterrealmebleg": {"name": "DSPaymentTerRealMEBLEG", "type": "TFloatField"}, "dspaymentterrealname": {"name": "DSPaymentTerRealNAME", "type": "TWideStringField"}, "dspaymentterid": {"name": "DSPaymentTerID", "type": "TFloatField"}, "dspaymenttercid": {"name": "DSPaymentTerCID", "type": "TFloatField"}, "dspaymentterstage_tesdiq_dat": {"name": "DSPaymentTerSTAGE_TESDIQ_DAT", "type": "TDateTimeField"}, "dspaymenttermebleg": {"name": "DSPaymentTerMEBLEG", "type": "TFloatField"}, "dspaymenttername": {"name": "DSPaymentTerNAME", "type": "TWideStringField"}, "sb_aca": {"name": "sb_aca", "type": "TOraclePackage"}, "pins_common": {"name": "Pins_common", "type": "TOraclePackage"}, "dspaymentterrealid": {"name": "DSPaymentTerRealID", "type": "TFloatField"}, "dsqaliq": {"name": "DSqaliq", "type": "TOracleDataSet"}, "dsqaliqqaliq": {"name": "DSqaliqQALIQ", "type": "TFloatField"}}, {});
  U.init(async () => {
    U.var_("dmPaymentTer", null, "TdmPaymentTer");
  });
  U.method("TdmPaymentTer", "DataModuleCreate", async function DataModuleCreate(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mcall((await $.v(C, "DSSysdat")), "Open", []);
  await $.mcall((await $.v(C, "DSpaymentAcc")), "Open", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TdmPaymentTer", "DataModuleDestroy", async function DataModuleDestroy(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mcall((await $.v(C, "DSSysdat")), "close", []);
  await $.mcall((await $.v(C, "DSpaymentAcc")), "close", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  return U;
}
