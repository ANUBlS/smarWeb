// Generated from ScheduleDataModuleImpl.pas by pas2js — do not edit by hand; regenerate instead.
/* eslint-disable */
// @ts-nocheck

export default function define($) {
  const U = $.unit("ScheduleDataModuleImpl", ["Windows", "Messages", "SysUtils", "Classes", "Graphics", "Controls", "Forms", "Dialogs", "Db", "OracleData", "Oracle", "sboapiDataModuleImpl"]);
  const C = [U];
  U.defClass("TScheduleDataModule", "TDataModule", {"datasrcscheduledata": {"name": "DataSrcScheduleData", "type": "TDataSource"}, "scheduledata": {"name": "ScheduleData", "type": "TOracleDataSet"}, "boorowerinfo": {"name": "BoorowerInfo", "type": "TOracleDataSet"}, "dsboorowerinfo": {"name": "DSBoorowerInfo", "type": "TDataSource"}, "scheduledataid": {"name": "ScheduleDataID", "type": "TFloatField"}, "scheduledatacreditid": {"name": "ScheduleDataCREDITID", "type": "TFloatField"}, "scheduledatapaymentdate": {"name": "ScheduleDataPAYMENTDATE", "type": "TDateTimeField"}, "scheduledataprincipal": {"name": "ScheduleDataPRINCIPAL", "type": "TFloatField"}, "scheduledatainterest": {"name": "ScheduleDataINTEREST", "type": "TFloatField"}, "scheduledataseqno": {"name": "ScheduleDataSeqNo", "type": "TIntegerField"}, "creditinfo": {"name": "CreditInfo", "type": "TOracleDataSet"}, "floatfield1": {"name": "FloatField1", "type": "TFloatField"}, "floatfield2": {"name": "FloatField2", "type": "TFloatField"}, "floatfield3": {"name": "FloatField3", "type": "TFloatField"}, "floatfield4": {"name": "FloatField4", "type": "TFloatField"}, "datetimefield1": {"name": "DateTimeField1", "type": "TDateTimeField"}, "datetimefield2": {"name": "DateTimeField2", "type": "TDateTimeField"}, "floatfield5": {"name": "FloatField5", "type": "TFloatField"}, "datasrccreditinfo": {"name": "DataSrcCreditInfo", "type": "TDataSource"}, "cm_schedule": {"name": "CM_SCHEDULE", "type": "TOraclePackage"}, "scheduledatatotalpay": {"name": "ScheduleDataTOTALPAY", "type": "TFloatField"}, "exportdata": {"name": "ExportData", "type": "TOracleDataSet"}, "exportdatapaymentdate": {"name": "ExportDataPAYMENTDATE", "type": "TDateTimeField"}, "exportdataprincipal": {"name": "ExportDataPRINCIPAL", "type": "TFloatField"}, "exportdatainterest": {"name": "ExportDataINTEREST", "type": "TFloatField"}, "scheduledatarest": {"name": "ScheduleDataREST", "type": "TFloatField"}, "exportdatarest": {"name": "ExportDataREST", "type": "TFloatField"}, "boorowerinfocustaccno": {"name": "BoorowerInfoCUSTACCNO", "type": "TWideStringField"}, "boorowerinfoloanaccno": {"name": "BoorowerInfoLOANACCNO", "type": "TWideStringField"}, "creditinfoperiod": {"name": "CreditInfoPERIOD", "type": "TFloatField"}, "bankinfo": {"name": "BankInfo", "type": "TOracleDataSet"}, "bankinfologo": {"name": "BankInfoLOGO", "type": "TBlobField"}, "bankinfobank": {"name": "BankInfoBANK", "type": "TWideStringField"}, "creditinforest": {"name": "CreditInfoREST", "type": "TFloatField"}, "filialinfods": {"name": "FilialInfods", "type": "TDataSource"}, "filialinfo": {"name": "FilialInfo", "type": "TOracleDataSet"}, "filialinfoname": {"name": "FilialInfoNAME", "type": "TWideStringField"}, "filialinfoid": {"name": "FilialInfoID", "type": "TFloatField"}, "creditinfobranchid": {"name": "CreditInfoBRANCHID", "type": "TFloatField"}, "headofficeid": {"name": "HeadOfficeID", "type": "TOracleDataSet"}, "headofficeidminid": {"name": "HeadOfficeIDMINID", "type": "TFloatField"}, "creditinfoval_name": {"name": "CreditInfoVAL_NAME", "type": "TWideStringField"}, "adm": {"name": "adm", "type": "TOraclePackage"}, "boorowerinfoname": {"name": "BoorowerInfoNAME", "type": "TWideStringField"}, "bankinfoaz_name": {"name": "BankInfoAZ_NAME", "type": "TWideStringField"}, "creditinfoannualbankrate": {"name": "CreditInfoANNUALBANKRATE", "type": "TFloatField"}, "creditinfoannualypenaltyrate": {"name": "CreditInfoANNUALYPENALTYRATE", "type": "TFloatField"}, "creditinfoenddat": {"name": "CreditInfoENDDAT", "type": "TDateTimeField"}, "creditinfointcalcmethod": {"name": "CreditInfoINTCALCMETHOD", "type": "TFloatField"}, "creditinfoannualyinterestrate1": {"name": "CreditInfoANNUALYINTERESTRATE1", "type": "TFloatField"}, "creditinfonumber_tex": {"name": "CreditInfoNUMBER_TEX", "type": "TWideStringField"}, "creditinfofifd": {"name": "CreditInfoFIFD", "type": "TFloatField"}}, {});
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
  await L0["applied"].set(true);
  {
    const $t1 = L0["sender"];
    await $.wset([$t1], "ID", (await $.mv((await $.wcall([$t1], "FieldByName", ["ID"], C)), "AsInteger")), { get: async () => L0["id"], set: async (v) => { L0["id"] = v; }, local: true });
    await $.wset([$t1], "CreditID", (await $.mv((await $.wcall([$t1], "FieldByName", ["CreditID"], C)), "AsInteger")), { get: async () => L0["creditid"], set: async (v) => { L0["creditid"] = v; }, local: true });
    await $.wset([$t1], "PayDate", (await $.mv((await $.wcall([$t1], "FieldByName", ["PaymentDate"], C)), "AsDateTime")), { get: async () => L0["paydate"], set: async (v) => { L0["paydate"] = v; }, local: true });
    await $.wset([$t1], "Principial", (await $.mv((await $.wcall([$t1], "FieldByName", ["PRINCIPAL"], C)), "AsFloat")), { get: async () => L0["principial"], set: async (v) => { L0["principial"] = v; }, local: true });
    await $.wset([$t1], "Interest", (await $.mv((await $.wcall([$t1], "FieldByName", ["Interest"], C)), "AsFloat")), { get: async () => L0["interest"], set: async (v) => { L0["interest"] = v; }, local: true });
  }
  { const $t2 = L0["action"];
    if ($.eq($t2, "I") || $.eq($t2, "U")) {
      {
        const $t3 = (await $.v(C, "CM_SCHEDULE"));
        await $.wset([$t3], "ID", (await $.wcall([$t3], "CallIntegerFunction", ["PaymentSchedule_AddEdit", ["p_ID", (await $.wv([$t3], "ID", { get: async () => L0["id"], set: async (v) => { L0["id"] = v; }, local: true }, false)), "p_CreditID", (await $.wv([$t3], "CreditID", { get: async () => L0["creditid"], set: async (v) => { L0["creditid"] = v; }, local: true }, false)), "p_PayDate", (await $.wv([$t3], "PayDate", { get: async () => L0["paydate"], set: async (v) => { L0["paydate"] = v; }, local: true }, false)), "p_Principial", (await $.wv([$t3], "Principial", { get: async () => L0["principial"], set: async (v) => { L0["principial"] = v; }, local: true }, false)), "p_Interest", (await $.wv([$t3], "Interest", { get: async () => L0["interest"], set: async (v) => { L0["interest"] = v; }, local: true }, false))]], C)), { get: async () => L0["id"], set: async (v) => { L0["id"] = v; }, local: true });
      }
    }
    else if ($.eq($t2, "D")) {
      {
        const $t4 = (await $.v(C, "CM_SCHEDULE"));
        await $.stmt((await $.wcall([$t4], "CallProcedure", ["PaymentSchedule_Delete", ["p_ID", (await $.wv([$t4], "ID", { get: async () => L0["id"], set: async (v) => { L0["id"] = v; }, local: true }, false))]], C)));
      }
    }
    else {
      await L0["applied"].set(false);
    }
  }
  return L0.result;
}, {"params": ["Sender", "Action", "Applied", "NewRowId"], "kind": "procedure", "ptypes": ["TOracleDataSet", "Char", "Boolean", "String"]});
  U.method("TScheduleDataModule", "ScheduleDataCalcFields", async function ScheduleDataCalcFields(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"dataset": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["dataset"]);
  {
    const $t5 = L0["dataset"];
    await $.mset((await $.wcall([$t5], "FieldByName", ["TOTALPAY"], C)), "AsFloat", $.add((await $.mv((await $.wcall([$t5], "FieldByName", ["PRINCIPAL"], C)), "AsFloat")), (await $.mv((await $.wcall([$t5], "FieldByName", ["INTEREST"], C)), "AsFloat"))));
  }
  return L0.result;
}, {"params": ["DataSet"], "kind": "procedure", "ptypes": ["TDataSet"]});
  U.method("TScheduleDataModule", "DataModuleCreate", async function DataModuleCreate(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  return U;
}
