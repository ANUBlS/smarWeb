// Generated from AccountDataModuleImpl.pas by pas2js — do not edit by hand; regenerate instead.
/* eslint-disable */
// @ts-nocheck

export default function define($) {
  const U = $.unit("AccountDataModuleImpl", ["Windows", "Messages", "SysUtils", "Classes", "Graphics", "Controls", "Forms", "Dialogs", "Db", "OracleData", "Oracle", "sboapiDataModuleImpl", "SBAccount", "SBCore"]);
  const C = [U];
  U.defClass("TAccountDataModule", "TDataModule", {"saccs": {"name": "SAccs", "type": "TDataSource"}, "saccsdata": {"name": "SAccsData", "type": "TOracleDataSet"}, "customers": {"name": "Customers", "type": "TDataSource"}, "customersdata": {"name": "CustomersData", "type": "TOracleDataSet"}, "currency": {"name": "Currency", "type": "TDataSource"}, "currencydata": {"name": "CurrencyData", "type": "TOracleDataSet"}, "reportsymboldata": {"name": "ReportSymbolData", "type": "TOracleDataSet"}, "reportsymbol": {"name": "ReportSymbol", "type": "TDataSource"}, "accounts": {"name": "Accounts", "type": "TDataSource"}, "accountsdata": {"name": "AccountsData", "type": "TOracleDataSet"}, "accountsdataaccid": {"name": "AccountsDataACCID", "type": "TFloatField"}, "accountsdataaccno": {"name": "AccountsDataACCNO", "type": "TStringField"}, "accountsdataaccname": {"name": "AccountsDataACCNAME", "type": "TStringField"}, "accountsdataopendate": {"name": "AccountsDataOPENDATE", "type": "TDateTimeField"}, "accountsdataclosedate": {"name": "AccountsDataCLOSEDATE", "type": "TDateTimeField"}, "accountsdatacurrencyid": {"name": "AccountsDataCURRENCYID", "type": "TIntegerField"}, "accountsdatasacc": {"name": "AccountsDataSACC", "type": "TFloatField"}, "accountsdatacustomerid": {"name": "AccountsDataCUSTOMERID", "type": "TFloatField"}, "accountsdatapairacc": {"name": "AccountsDataPAIRACC", "type": "TFloatField"}, "accountsdataacclimit": {"name": "AccountsDataACCLIMIT", "type": "TFloatField"}, "accountsdatareportsymbol": {"name": "AccountsDataREPORTSYMBOL", "type": "TFloatField"}, "accountsdatafilialid": {"name": "AccountsDataFILIALID", "type": "TIntegerField"}, "accountsdatainsider": {"name": "AccountsDataINSIDER", "type": "TStringField"}, "accountsdataamount": {"name": "AccountsDataAMOUNT", "type": "TFloatField"}, "accountsdatalamount": {"name": "AccountsDataLAMOUNT", "type": "TFloatField"}, "accountsdatadebitturnover": {"name": "AccountsDataDEBITTURNOVER", "type": "TFloatField"}, "accountsdatacreditturnover": {"name": "AccountsDataCREDITTURNOVER", "type": "TFloatField"}, "accountsdatadebitlturnover": {"name": "AccountsDataDEBITLTURNOVER", "type": "TFloatField"}, "accountsdatacreditlturnover": {"name": "AccountsDataCREDITLTURNOVER", "type": "TFloatField"}, "accountsdatacurrencysname": {"name": "AccountsDataCURRENCYSNAME", "type": "TStringField"}, "accountsdatadaystartamount": {"name": "AccountsDataDAYSTARTAMOUNT", "type": "TFloatField"}, "accountsdatadaystartlamount": {"name": "AccountsDataDAYSTARTLAMOUNT", "type": "TFloatField"}, "accountsdatasid": {"name": "AccountsDataSID", "type": "TFloatField"}, "accountsdatasacc2": {"name": "AccountsDataSACC2", "type": "TFloatField"}, "accountsdatasacc3": {"name": "AccountsDataSACC3", "type": "TFloatField"}, "accountsdatasacc4": {"name": "AccountsDataSACC4", "type": "TFloatField"}, "saccs2": {"name": "SAccs2", "type": "TDataSource"}, "saccsdata2": {"name": "SAccsData2", "type": "TOracleDataSet"}, "saccs3": {"name": "SAccs3", "type": "TDataSource"}, "saccsdata3": {"name": "SAccsData3", "type": "TOracleDataSet"}, "saccs4": {"name": "SAccs4", "type": "TDataSource"}, "saccsdata4": {"name": "SAccsData4", "type": "TOracleDataSet"}, "filials": {"name": "Filials", "type": "TDataSource"}, "filialsdata": {"name": "FilialsData", "type": "TOracleDataSet"}, "accountsdatadelayedamount": {"name": "AccountsDataDELAYEDAMOUNT", "type": "TFloatField"}, "accountsdatadelayedlamount": {"name": "AccountsDataDELAYEDLAMOUNT", "type": "TFloatField"}, "accflagsdata": {"name": "AccFlagsData", "type": "TOracleDataSet"}, "accflags": {"name": "AccFlags", "type": "TDataSource"}, "accountsdataaccflags": {"name": "AccountsDataACCFLAGS", "type": "TStringField"}, "accountflagsdata": {"name": "AccountFlagsData", "type": "TOracleDataSet"}, "datasrcaccountflagsdata": {"name": "DataSrcAccountFlagsData", "type": "TDataSource"}, "accountflagsdatasymbol": {"name": "AccountFlagsDataSYMBOL", "type": "TStringField"}, "accountflagsdataname": {"name": "AccountFlagsDataNAME", "type": "TStringField"}, "accountflagsdatadescription": {"name": "AccountFlagsDataDESCRIPTION", "type": "TStringField"}, "accflagsdatasymbol": {"name": "AccFlagsDataSYMBOL", "type": "TStringField"}, "accflagsdataname": {"name": "AccFlagsDataNAME", "type": "TStringField"}, "accflagsdatadescription": {"name": "AccFlagsDataDESCRIPTION", "type": "TStringField"}, "sb_aca": {"name": "SB_ACA", "type": "TOraclePackage"}, "flastaccountid": {"name": "FLastAccountID", "type": "Integer"}, "faccountflags": {"name": "FAccountFlags", "type": "String"}}, {"lastaccountid": {"name": "LastAccountID", "read": "FLastAccountID"}, "accountflags": {"name": "AccountFlags", "read": "FAccountFlags", "write": "FAccountFlags"}});
  U.init(async () => {
    U.var_("AccountDataModule", null, "TAccountDataModule");
  });
  U.method("TAccountDataModule", "AccountsDataApplyRecord", async function AccountsDataApplyRecord(Self, p0, p1, p2, p3) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "action": $.copyArg(p1), "applied": $.asRef(p2), "newrowid": $.asRef(p3), result: undefined, "accountinfo": $.rec("taccount")};
  await $.fixArgs(L0, ["sender", "action"]);
  {
    const $t1 = (await $.v(C, "AccountsData"));
    const $t2 = (await $.wv([$t1], "AccountInfo", { get: async () => L0["accountinfo"], set: async (v) => { L0["accountinfo"] = v; }, local: true }, false));
    await $.wset([$t1, $t2], "AccNo", (await $.mv((await $.wcall([$t1, $t2], "FieldByName", ["AccNo"], C)), "AsString")), C);
    await $.wset([$t1, $t2], "Name", (await $.mv((await $.wcall([$t1, $t2], "FieldByName", ["AccName"], C)), "AsString")), C);
    await $.wset([$t1, $t2], "CustomerID", (await $.mv((await $.wcall([$t1, $t2], "FieldByName", ["CustomerID"], C)), "AsInteger")), C);
    await $.wset([$t1, $t2], "CurrencyID", (await $.mv((await $.wcall([$t1, $t2], "FieldByName", ["CurrencyID"], C)), "AsInteger")), C);
    await $.wset([$t1, $t2], "OpenDate", (await $.mv((await $.wcall([$t1, $t2], "FieldByName", ["OpenDate"], C)), "AsDateTime")), C);
    await $.mset((await $.wv([$t1, $t2], "SAccs", C, false)), "Acc1", (await $.mv((await $.wcall([$t1, $t2], "FieldByName", ["SAcc"], C)), "AsInteger")));
    await $.mset((await $.wv([$t1, $t2], "SAccs", C, false)), "Acc2", (await $.mv((await $.wcall([$t1, $t2], "FieldByName", ["SAcc2"], C)), "AsInteger")));
    await $.mset((await $.wv([$t1, $t2], "SAccs", C, false)), "Acc3", (await $.mv((await $.wcall([$t1, $t2], "FieldByName", ["SAcc3"], C)), "AsInteger")));
    await $.mset((await $.wv([$t1, $t2], "SAccs", C, false)), "Acc4", (await $.mv((await $.wcall([$t1, $t2], "FieldByName", ["SAcc4"], C)), "AsInteger")));
    await $.wset([$t1, $t2], "Limit", (await $.mv((await $.wcall([$t1, $t2], "FieldByName", ["AccLimit"], C)), "AsCurrency")), C);
    await $.wset([$t1, $t2], "CloseDate", (await $.mv((await $.wcall([$t1, $t2], "FieldByName", ["CloseDate"], C)), "AsDateTime")), C);
    await $.wset([$t1, $t2], "ReportSymbol", (await $.mv((await $.wcall([$t1, $t2], "FieldByName", ["ReportSymbol"], C)), "AsInteger")), C);
    await $.wset([$t1, $t2], "PairAccID", (await $.mv((await $.wcall([$t1, $t2], "FieldByName", ["PairAcc"], C)), "AsInteger")), C);
    await $.wset([$t1, $t2], "FilialID", (await $.mv((await $.wcall([$t1, $t2], "FieldByName", ["FilialID"], C)), "AsInteger")), C);
    await $.wset([$t1, $t2], "AccFlags", (await $.mv((await $.wcall([$t1, $t2], "FieldByName", ["AccFlags"], C)), "AsString")), C);
  }
  { const $t3 = L0["action"];
    if ($.eq($t3, "I")) {
      await $.set(C, "FLastAccountID", (await $.call(C, "Sb_AddAccount", [L0["accountinfo"]])));
      await L0["applied"].set(true);
    }
    else if ($.eq($t3, "U")) {
      await $.set(C, "FLastAccountID", (await $.mv((await $.mcall(L0["sender"], "FieldByName", ["AccID"])), "AsInteger")));
      await $.stmt((await $.call(C, "Sb_EditAccount", [(await $.v(C, "FLastAccountID")), L0["accountinfo"]])));
      await L0["applied"].set(true);
    }
  }
  if ($.truthy((await L0["applied"].get()))) {
    await $.stmt($.call(C, "Sb_Commit", []));
  }
  return L0.result;
}, {"params": ["Sender", "Action", "Applied", "NewRowId"], "kind": "procedure", "ptypes": ["TOracleDataSet", "Char", "Boolean", "String"]});
  U.func("Initialize", async function Initialize(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: undefined};
  if ($.truthy($.not((await $.call(C, "Assigned", [(await $.v(C, "AccountDataModule"))]))))) {
    await $.set(C, "AccountDataModule", (await $.mcall((await $.v(C, "TAccountDataModule")), "Create", [null])));
  }
  return L0.result;
}, {"params": [], "kind": "procedure", "ptypes": []});
  U.func("Cleanup", async function Cleanup(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: undefined};
  try {
    await $.mcall((await $.v(C, "AccountDataModule")), "Free", []);
  } finally {
    await $.set(C, "AccountDataModule", null);
  }
  return L0.result;
}, {"params": [], "kind": "procedure", "ptypes": []});
  U.method("TAccountDataModule", "AccountsDataAfterFetchRecord", async function AccountsDataAfterFetchRecord(Self, p0, p1, p2) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "filteraccept": $.copyArg(p1), "action": $.asRef(p2), result: undefined};
  await $.fixArgs(L0, ["sender", "filteraccept"]);
  L0["fetchreclimit"] = 50;
  {
    const $t4 = L0["sender"];
    if ($.truthy($.eq((await $.wv([$t4], "RecordCount", C, false)), (await $.wv([$t4], "FetchRecLimit", { get: async () => L0["fetchreclimit"], set: async (v) => { L0["fetchreclimit"] = v; }, local: true }, false))))) {
      await $.wset([$t4], "Action", (await $.wv([$t4], "afPause", C, false)), { get: async () => await L0["action"].get(), set: async (v) => { await L0["action"].set(v); }, local: true });
    }
  }
  return L0.result;
}, {"params": ["Sender", "FilterAccept", "Action"], "kind": "procedure", "ptypes": ["TOracleDataSet", "Boolean", "TAfterFetchRecordAction"]});
  return U;
}
