// Generated from ExpireDataModuleImpl.pas by pas2js — do not edit by hand; regenerate instead.
/* eslint-disable */
// @ts-nocheck

export default function define($) {
  const U = $.unit("ExpireDataModuleImpl", ["Windows", "Messages", "SysUtils", "Classes", "Graphics", "Controls", "Forms", "NLSDialogs", "Db", "OracleData", "Oracle", "sboapiDataModuleImpl"]);
  const C = [U];
  U.defClass("TExpireDataModule", "TDataModule", {"loanrest": {"name": "LoanRest", "type": "TOracleDataSet"}, "loanrestrest": {"name": "LoanRestREST", "type": "TFloatField"}, "loanrestacc_no": {"name": "LoanRestACC_NO", "type": "TWideStringField"}, "dsloanrest": {"name": "DSLoanRest", "type": "TDataSource"}, "duerest": {"name": "DueRest", "type": "TOracleDataSet"}, "duerestduerest": {"name": "DueRestDUEREST", "type": "TFloatField"}, "dsduerest": {"name": "DSDueRest", "type": "TDataSource"}, "sreserves": {"name": "SReserves", "type": "TOracleDataSet"}, "datasrcsreserves": {"name": "DataSrcSReserves", "type": "TDataSource"}, "sreservesid": {"name": "SReservesID", "type": "TFloatField"}, "sreservespercent": {"name": "SReservesPERCENT", "type": "TFloatField"}, "sreservesdescription": {"name": "SReservesDESCRIPTION", "type": "TWideStringField"}, "sreservesfulldesc": {"name": "SReservesFullDesc", "type": "TWideStringField"}, "creditinfo": {"name": "CreditInfo", "type": "TOracleDataSet"}, "datasrccreditinfo": {"name": "DataSrcCreditInfo", "type": "TDataSource"}, "cm_expire": {"name": "CM_EXPIRE", "type": "TOraclePackage"}, "expiredata": {"name": "ExpireData", "type": "TOracleDataSet"}, "datasrcexpire": {"name": "DataSrcExpire", "type": "TDataSource"}, "expiredataid": {"name": "ExpireDataID", "type": "TFloatField"}, "expiredatacreditid": {"name": "ExpireDataCREDITID", "type": "TFloatField"}, "expiredataexpdate": {"name": "ExpireDataEXPDATE", "type": "TDateTimeField"}, "expiredataexpamount": {"name": "ExpireDataEXPAMOUNT", "type": "TFloatField"}, "duerestacc_no": {"name": "DueRestACC_NO", "type": "TWideStringField"}, "expiredataintrest": {"name": "ExpireDataINTREST", "type": "TFloatField"}}, {});
  U.init(async () => {
    U.var_("ExpireDataModule", null, "TExpireDataModule");
  });
  U.method("TExpireDataModule", "PReservesCalcFields", async function PReservesCalcFields(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"dataset": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["dataset"]);
  L0["sformat"] = " [ %d %% ]";
  {
    const $t1 = L0["dataset"];
    await $.mset((await $.wcall([$t1], "FieldByName", ["FullDesc"], C)), "AsString", $.add((await $.mv((await $.wcall([$t1], "FieldByName", ["Description"], C)), "AsString")), (await $.wcall([$t1], "Format", [(await $.wv([$t1], "SFormat", { get: async () => L0["sformat"], set: async (v) => { L0["sformat"] = v; }, local: true }, false)), [(await $.mv((await $.wcall([$t1], "FieldByName", ["Percent"], C)), "AsInteger"))]], C))));
  }
  return L0.result;
}, {"params": ["DataSet"], "kind": "procedure", "ptypes": ["TDataSet"]});
  return U;
}
