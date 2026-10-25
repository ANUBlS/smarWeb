// Generated from DepositDataModuleUnit.pas by pas2js — do not edit by hand; regenerate instead.
/* eslint-disable */
// @ts-nocheck

export default function define($) {
  const U = $.unit("DepositDataModuleUnit", ["Windows", "Messages", "SysUtils", "Classes", "Graphics", "Controls", "Forms", "Dialogs", "Db", "OracleData", "sboapiDataModuleImpl"]);
  const C = [U];
  U.defClass("TDepositDataModule", "TDataModule", {"deposits": {"name": "Deposits", "type": "TOracleDataSet"}, "datasrcdeposit": {"name": "DataSrcDeposit", "type": "TDataSource"}, "overduepercents": {"name": "OverduePercents", "type": "TOracleDataSet"}, "percents": {"name": "Percents", "type": "TOracleDataSet"}, "depositsid": {"name": "DepositsID", "type": "TFloatField"}, "depositscontractno": {"name": "DepositsCONTRACTNO", "type": "TStringField"}, "depositsopendate": {"name": "DepositsOPENDATE", "type": "TDateTimeField"}, "depositsclosedate": {"name": "DepositsCLOSEDATE", "type": "TDateTimeField"}, "depositsamount": {"name": "DepositsAMOUNT", "type": "TFloatField"}, "depositscontracttype": {"name": "DepositsCONTRACTTYPE", "type": "TIntegerField"}, "depositsclienttype": {"name": "DepositsCLIENTTYPE", "type": "TFloatField"}, "depositscontractaccid": {"name": "DepositsCONTRACTACCID", "type": "TFloatField"}, "depositsclientaccid": {"name": "DepositsCLIENTACCID", "type": "TFloatField"}, "depositsinterestaccid": {"name": "DepositsINTERESTACCID", "type": "TFloatField"}, "depositsfacticaldebt": {"name": "DepositsFACTICALDEBT", "type": "TFloatField"}, "depositsfacticalinterestdebt": {"name": "DepositsFACTICALINTERESTDEBT", "type": "TFloatField"}, "depositscalculationenabled": {"name": "DepositsCALCULATIONENABLED", "type": "TFloatField"}, "depositslastprocessdate": {"name": "DepositsLASTPROCESSDATE", "type": "TDateTimeField"}, "depositscontractaccno": {"name": "DepositsCONTRACTACCNO", "type": "TStringField"}, "depositsclientaccno": {"name": "DepositsCLIENTACCNO", "type": "TStringField"}, "depositsinterestaccno": {"name": "DepositsINTERESTACCNO", "type": "TStringField"}, "depositscontractcurrency": {"name": "DepositsCONTRACTCURRENCY", "type": "TStringField"}, "depositsclientcurrency": {"name": "DepositsCLIENTCURRENCY", "type": "TStringField"}, "depositsinterestcurrency": {"name": "DepositsINTERESTCURRENCY", "type": "TStringField"}, "depositscontractaccname": {"name": "DepositsCONTRACTACCNAME", "type": "TStringField"}, "depositsclientaccname": {"name": "DepositsCLIENTACCNAME", "type": "TStringField"}, "depositsinterestaccname": {"name": "DepositsINTERESTACCNAME", "type": "TStringField"}, "depositscontractcurrencyid": {"name": "DepositsCONTRACTCURRENCYID", "type": "TFloatField"}, "percentsid": {"name": "PercentsID", "type": "TFloatField"}, "percentshdate": {"name": "PercentsHDATE", "type": "TDateTimeField"}, "percentsinterest": {"name": "PercentsINTEREST", "type": "TFloatField"}, "overduepercentsid": {"name": "OverduePercentsID", "type": "TFloatField"}, "overduepercentshdate": {"name": "OverduePercentsHDATE", "type": "TDateTimeField"}, "overduepercentsoverdueinterest": {"name": "OverduePercentsOVERDUEINTEREST", "type": "TFloatField"}, "depositsstatus": {"name": "DepositsSTATUS", "type": "TFloatField"}, "depositslastwcdate": {"name": "DepositsLASTWCDATE", "type": "TDateTimeField"}, "depositstotalcalcedinterest": {"name": "DepositsTOTALCALCEDINTEREST", "type": "TFloatField"}}, {});
  U.init(async () => {
    U.var_("DepositDataModule", null, "TDepositDataModule");
  });
  U.method("TDepositDataModule", "DataModuleCreate", async function DataModuleCreate(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.stmt((await $.mcall((await $.v(C, "Deposits")), "SetVariable", ["OrderClause", "ID"])));
  await $.mcall((await $.v(C, "Deposits")), "Open", []);
  await $.mcall((await $.v(C, "Percents")), "Open", []);
  await $.mcall((await $.v(C, "OverduePercents")), "Open", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TDepositDataModule", "DataModuleDestroy", async function DataModuleDestroy(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mcall((await $.v(C, "Deposits")), "CloseAll", []);
  await $.mcall((await $.v(C, "Percents")), "CloseAll", []);
  await $.mcall((await $.v(C, "OverduePercents")), "CloseAll", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  return U;
}
