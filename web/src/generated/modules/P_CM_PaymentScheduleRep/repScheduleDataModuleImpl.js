// Generated from repScheduleDataModuleImpl.pas by pas2js — do not edit by hand; regenerate instead.
/* eslint-disable */
// @ts-nocheck

export default function define($) {
  const U = $.unit("repScheduleDataModuleImpl", ["Windows", "Messages", "SysUtils", "Classes", "Graphics", "Controls", "Forms", "Dialogs", "Db", "OracleData", "Oracle", "CMOracleAPIDataModuleImpl"]);
  const C = [U];
  U.defClass("TScheduleDataModule", "TDataModule", {"datasrcscheduledata": {"name": "DataSrcScheduleData", "type": "TDataSource"}, "scheduledata": {"name": "ScheduleData", "type": "TOracleDataSet"}, "boorowerinfo": {"name": "BoorowerInfo", "type": "TOracleDataSet"}, "dsboorowerinfo": {"name": "DSBoorowerInfo", "type": "TDataSource"}, "scheduledataid": {"name": "ScheduleDataID", "type": "TFloatField"}, "scheduledatacreditid": {"name": "ScheduleDataCREDITID", "type": "TFloatField"}, "scheduledatapaymentdate": {"name": "ScheduleDataPAYMENTDATE", "type": "TDateTimeField"}, "scheduledataprincipal": {"name": "ScheduleDataPRINCIPAL", "type": "TFloatField"}, "scheduledatainterest": {"name": "ScheduleDataINTEREST", "type": "TFloatField"}, "scheduledataseqno": {"name": "ScheduleDataSeqNo", "type": "TIntegerField"}, "creditinfo": {"name": "CreditInfo", "type": "TOracleDataSet"}, "floatfield1": {"name": "FloatField1", "type": "TFloatField"}, "floatfield2": {"name": "FloatField2", "type": "TFloatField"}, "floatfield3": {"name": "FloatField3", "type": "TFloatField"}, "floatfield4": {"name": "FloatField4", "type": "TFloatField"}, "datetimefield1": {"name": "DateTimeField1", "type": "TDateTimeField"}, "datetimefield2": {"name": "DateTimeField2", "type": "TDateTimeField"}, "floatfield5": {"name": "FloatField5", "type": "TFloatField"}, "datasrccreditinfo": {"name": "DataSrcCreditInfo", "type": "TDataSource"}, "boorowerinfoname": {"name": "BoorowerInfoNAME", "type": "TStringField"}, "cm_schedule": {"name": "CM_SCHEDULE", "type": "TOraclePackage"}, "scheduledatatotalpay": {"name": "ScheduleDataTOTALPAY", "type": "TFloatField"}, "exportdata": {"name": "ExportData", "type": "TOracleDataSet"}, "exportdatapaymentdate": {"name": "ExportDataPAYMENTDATE", "type": "TDateTimeField"}, "exportdataprincipal": {"name": "ExportDataPRINCIPAL", "type": "TFloatField"}, "exportdatainterest": {"name": "ExportDataINTEREST", "type": "TFloatField"}, "scheduledatarest": {"name": "ScheduleDataREST", "type": "TFloatField"}, "exportdatarest": {"name": "ExportDataREST", "type": "TFloatField"}, "boorowerinfocustaccno": {"name": "BoorowerInfoCUSTACCNO", "type": "TStringField"}, "boorowerinfoloanaccno": {"name": "BoorowerInfoLOANACCNO", "type": "TStringField"}, "creditinfoperiod": {"name": "CreditInfoPERIOD", "type": "TFloatField"}, "bankinfo": {"name": "BankInfo", "type": "TOracleDataSet"}, "bankinfologo": {"name": "BankInfoLOGO", "type": "TBlobField"}, "bankinfobank": {"name": "BankInfoBANK", "type": "TStringField"}, "creditinforest": {"name": "CreditInfoREST", "type": "TFloatField"}, "boorowerinfobooroweraccrest": {"name": "BoorowerInfoBOOROWERACCREST", "type": "TFloatField"}, "boorowerinfobooroweraccid": {"name": "BoorowerInfoBOOROWERACCID", "type": "TFloatField"}}, {});
  U.init(async () => {
    U.var_("ScheduleDataModule", null, "TScheduleDataModule");
  });
  U.method("TScheduleDataModule", "ScheduleDataSeqNoGetText", async function ScheduleDataSeqNoGetText(Self, p0, p1, p2) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "text": $.asRef(p1), "displaytext": $.copyArg(p2), result: undefined};
  await $.fixArgs(L0, ["sender", "displaytext"]);
  await L0["text"].set((await $.call(C, "IntToStr", [(await $.mv((await $.mv(L0["sender"], "DataSet")), "RecNo"))])));
  return L0.result;
}, {"params": ["Sender", "Text", "DisplayText"], "kind": "procedure", "ptypes": ["TField", "String", "Boolean"]});
  U.method("TScheduleDataModule", "ScheduleDataApplyRecord", async function ScheduleDataApplyRecord(Self, p0, p1, p2, p3) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "action": $.copyArg(p1), "applied": $.asRef(p2), "newrowid": $.asRef(p3), result: undefined, "id": 0, "creditid": 0, "paydate": 0, "principial": 0, "interest": 0};
  await $.fixArgs(L0, ["sender", "action"]);
  return L0.result;
}, {"params": ["Sender", "Action", "Applied", "NewRowId"], "kind": "procedure", "ptypes": ["TOracleDataSet", "Char", "Boolean", "String"]});
  U.method("TScheduleDataModule", "ScheduleDataCalcFields", async function ScheduleDataCalcFields(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"dataset": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["dataset"]);
  {
    const $t1 = L0["dataset"];
    await $.mset((await $.wcall([$t1], "FieldByName", ["TOTALPAY"], C)), "AsFloat", $.add((await $.mv((await $.wcall([$t1], "FieldByName", ["PRINCIPAL"], C)), "AsFloat")), (await $.mv((await $.wcall([$t1], "FieldByName", ["INTEREST"], C)), "AsFloat"))));
  }
  return L0.result;
}, {"params": ["DataSet"], "kind": "procedure", "ptypes": ["TDataSet"]});
  return U;
}
