// Generated from NewDepositsContractImpl.pas by pas2js — do not edit by hand; regenerate instead.
/* eslint-disable */
// @ts-nocheck

export default function define($) {
  const U = $.unit("NewDepositsContractImpl", ["Windows", "Messages", "SysUtils", "Classes", "Graphics", "Controls", "Forms", "Dialogs", "Db", "OracleData", "Oracle", "sboapiDataModuleImpl", "NewContractCommonDecls", "NewCommonDeclsImpl", "NewFormDepositContractImpl"]);
  const C = [U];
  U.defClass("TNewDataModDepositsContract", "TDataModule", {"clienttypes": {"name": "ClientTypes", "type": "TOracleDataSet"}, "clienttypesid": {"name": "ClientTypesID", "type": "TFloatField"}, "clienttypescategory": {"name": "ClientTypesCATEGORY", "type": "TWideStringField"}, "clienttypesdatsrc": {"name": "ClientTypesDatSrc", "type": "TDataSource"}, "filals": {"name": "Filals", "type": "TOracleDataSet"}, "filalsid": {"name": "FilalsID", "type": "TFloatField"}, "filalsname": {"name": "FilalsNAME", "type": "TWideStringField"}, "filalsdatsrc": {"name": "FilalsDatSrc", "type": "TDataSource"}, "persons": {"name": "persons", "type": "TOracleDataSet"}, "personsdatsrc": {"name": "personsDatSrc", "type": "TDataSource"}, "valutes": {"name": "valutes", "type": "TOracleDataSet"}, "valutesvalute": {"name": "valutesVALUTE", "type": "TIntegerField"}, "valutesvalu_name": {"name": "valutesVALU_NAME", "type": "TWideStringField"}, "valutesdatsrc": {"name": "valutesDatSrc", "type": "TDataSource"}, "customers": {"name": "Customers", "type": "TOracleDataSet"}, "customersid": {"name": "CustomersID", "type": "TIntegerField"}, "customersname": {"name": "CustomersNAME", "type": "TWideStringField"}, "customersdatsrc": {"name": "CustomersDatSrc", "type": "TDataSource"}, "depositaccs": {"name": "DepositAccs", "type": "TOracleDataSet"}, "depositaccsid": {"name": "DepositAccsID", "type": "TFloatField"}, "depositaccscustid": {"name": "DepositAccsCUSTID", "type": "TFloatField"}, "depositaccsaccno": {"name": "DepositAccsACCNO", "type": "TWideStringField"}, "depositaccsclientname": {"name": "DepositAccsCLIENTNAME", "type": "TWideStringField"}, "depositaccsval_acc": {"name": "DepositAccsVAL_ACC", "type": "TIntegerField"}, "depositporpsdatsrc": {"name": "DepositPorpsDatSrc", "type": "TDataSource"}, "depositporps": {"name": "DepositPorps", "type": "TOracleDataSet"}, "depositporpsbranchid": {"name": "DepositPorpsBRANCHID", "type": "TFloatField"}, "depositporpscontractno": {"name": "DepositPorpsCONTRACTNO", "type": "TWideStringField"}, "depositporpsperiodcontracts": {"name": "DepositPorpsPeriodContracts", "type": "TIntegerField"}, "depositporpsopendate": {"name": "DepositPorpsOPENDATE", "type": "TDateTimeField"}, "depositporpsclosedate": {"name": "DepositPorpsCLOSEDATE", "type": "TDateTimeField"}, "depositporpsinterest": {"name": "DepositPorpsINTEREST", "type": "TWideStringField"}, "depositporpsdueinterest": {"name": "DepositPorpsDUEINTEREST", "type": "TFloatField"}, "depositporpsoverdueinterest": {"name": "DepositPorpsOVERDUEINTEREST", "type": "TFloatField"}, "depositporpscontracttype": {"name": "DepositPorpsCONTRACTTYPE", "type": "TIntegerField"}, "depositporpspersonaltype": {"name": "DepositPorpsPERSONALTYPE", "type": "TFloatField"}, "depositporpscurrency": {"name": "DepositPorpsCURRENCY", "type": "TFloatField"}, "depositporpsamount": {"name": "DepositPorpsAMOUNT", "type": "TFloatField"}, "depositporpscustomerid": {"name": "DepositPorpsCUSTOMERID", "type": "TFloatField"}, "depositporpscontractaccid": {"name": "DepositPorpsCONTRACTACCID", "type": "TFloatField"}, "depositporpsclientaccid": {"name": "DepositPorpsCLIENTACCID", "type": "TFloatField"}, "depositporpsinterestaccid": {"name": "DepositPorpsINTERESTACCID", "type": "TFloatField"}, "depositporpsbooroweraccid": {"name": "DepositPorpsBOOROWERACCID", "type": "TFloatField"}, "depositporpsfirstinterestpaydat": {"name": "DepositPorpsFIRSTINTERESTPAYDAT", "type": "TDateTimeField"}, "depositporpsperiodid": {"name": "DepositPorpsPERIODID", "type": "TFloatField"}, "depositporpsautopr": {"name": "DepositPorpsAUTOPR", "type": "TFloatField"}, "depositporpscapitalperid": {"name": "DepositPorpsCAPITALPERID", "type": "TFloatField"}, "depositporpssid": {"name": "DepositPorpsSID", "type": "TFloatField"}, "depositporpsusername": {"name": "DepositPorpsUSERNAME", "type": "TWideStringField"}, "depositaccsdatsrc": {"name": "DepositAccsDatSrc", "type": "TDataSource"}, "deposittypes1": {"name": "DepositTypes1", "type": "TOracleDataSet"}, "deposittypes1id": {"name": "DepositTypes1ID", "type": "TFloatField"}, "deposittypes1type": {"name": "DepositTypes1TYPE", "type": "TWideStringField"}, "deposittypesdatsrc": {"name": "DepositTypesDatSrc", "type": "TDataSource"}, "clientaccs": {"name": "ClientAccs", "type": "TOracleDataSet"}, "clientaccsid": {"name": "ClientAccsID", "type": "TFloatField"}, "clientaccscustid": {"name": "ClientAccsCUSTID", "type": "TFloatField"}, "clientaccsaccno": {"name": "ClientAccsACCNO", "type": "TWideStringField"}, "clientaccsclientname": {"name": "ClientAccsCLIENTNAME", "type": "TWideStringField"}, "clientaccsval_acc": {"name": "ClientAccsVAL_ACC", "type": "TIntegerField"}, "clientaccsdatsrc": {"name": "ClientaccsDatSrc", "type": "TDataSource"}, "interestsaccs": {"name": "InterestsAccs", "type": "TOracleDataSet"}, "interestsaccsid": {"name": "InterestsAccsID", "type": "TFloatField"}, "interestsaccscustid": {"name": "InterestsAccsCUSTID", "type": "TFloatField"}, "interestsaccsaccno": {"name": "InterestsAccsACCNO", "type": "TWideStringField"}, "interestsaccsclientname": {"name": "InterestsAccsCLIENTNAME", "type": "TWideStringField"}, "interestsaccsval_acc": {"name": "InterestsAccsVAL_ACC", "type": "TIntegerField"}, "interestsaccsdatsrc": {"name": "InterestsAccsDatSrc", "type": "TDataSource"}, "creditaccs": {"name": "CreditAccs", "type": "TOracleDataSet"}, "creditaccsdatsrc": {"name": "CreditAccsDatSrc", "type": "TDataSource"}, "sbcm_contract": {"name": "sbcm_contract", "type": "TOraclePackage"}, "depcapperiod": {"name": "DepCapperiod", "type": "TOracleDataSet"}, "depcapperiodid": {"name": "DepCapperiodID", "type": "TFloatField"}, "depcapperiodperiod": {"name": "DepCapperiodPERIOD", "type": "TFloatField"}, "depcapperioddescription": {"name": "DepCapperiodDESCRIPTION", "type": "TWideStringField"}, "depcapperiodperiodid": {"name": "DepCapperiodPERIODID", "type": "TFloatField"}, "depperiods": {"name": "DepPeriods", "type": "TOracleDataSet"}, "depperiodsid": {"name": "DepPeriodsID", "type": "TFloatField"}, "depperiodsperiod": {"name": "DepPeriodsPERIOD", "type": "TFloatField"}, "depperiodsdescription": {"name": "DepPeriodsDESCRIPTION", "type": "TWideStringField"}, "depperiodsdepid": {"name": "DepPeriodsDEPID", "type": "TFloatField"}, "depperiodsds": {"name": "DepPeriodsds", "type": "TDataSource"}, "depcapperiodds": {"name": "DepCapperiodds", "type": "TDataSource"}, "booroweraccs": {"name": "BoorowerAccs", "type": "TOracleDataSet"}, "booroweraccsid": {"name": "BoorowerAccsID", "type": "TFloatField"}, "booroweraccscustid": {"name": "BoorowerAccsCUSTID", "type": "TFloatField"}, "booroweraccsaccno": {"name": "BoorowerAccsACCNO", "type": "TWideStringField"}, "booroweraccsclientname": {"name": "BoorowerAccsCLIENTNAME", "type": "TWideStringField"}, "booroweraccsval_acc": {"name": "BoorowerAccsVAL_ACC", "type": "TIntegerField"}, "booroweraccsds": {"name": "BoorowerAccsds", "type": "TDataSource"}, "usrs": {"name": "usrs", "type": "TOracleDataSet"}, "usrsid": {"name": "usrsID", "type": "TFloatField"}, "usrsname": {"name": "usrsNAME", "type": "TWideStringField"}, "dsbefo_interestpeytacc": {"name": "DSBEFO_INTERESTPEYTACC", "type": "TOracleDataSet"}, "dsbefo_interestpeytaccid": {"name": "DSBEFO_INTERESTPEYTACCID", "type": "TFloatField"}, "dsbefo_interestpeytacccustid": {"name": "DSBEFO_INTERESTPEYTACCCUSTID", "type": "TFloatField"}, "dsbefo_interestpeytaccaccno": {"name": "DSBEFO_INTERESTPEYTACCACCNO", "type": "TWideStringField"}, "dsbefo_interestpeytaccclientname": {"name": "DSBEFO_INTERESTPEYTACCCLIENTNAME", "type": "TWideStringField"}, "dsbefo_interestpeytaccval_acc": {"name": "DSBEFO_INTERESTPEYTACCVAL_ACC", "type": "TIntegerField"}, "dsrbefo_interestpeytacc": {"name": "DSRBEFO_INTERESTPEYTACC", "type": "TDataSource"}, "dssbcm_dep_t_befoperc": {"name": "DSsbcm_dep_t_Befoperc", "type": "TOracleDataSet"}, "dssbcm_dep_t_befopercid": {"name": "DSsbcm_dep_t_BefopercID", "type": "TFloatField"}, "dssbcm_dep_t_befoperctype": {"name": "DSsbcm_dep_t_BefopercTYPE", "type": "TWideStringField"}, "dssbcm_dep_t_befopercadditionaltype": {"name": "DSsbcm_dep_t_BefopercADDITIONALTYPE", "type": "TWideStringField"}, "dssbcm_dep_t_befopercwithdrawtype": {"name": "DSsbcm_dep_t_BefopercWITHDRAWTYPE", "type": "TWideStringField"}, "dssbcm_dep_t_befopercdateinterval": {"name": "DSsbcm_dep_t_BefopercDATEINTERVAL", "type": "TIntegerField"}, "dsrsbcm_dep_t_befoperc": {"name": "DSRsbcm_dep_t_Befoperc", "type": "TDataSource"}, "depositporpsbefo_interestpeytaccid": {"name": "DepositPorpsBEFO_INTERESTPEYTACCID", "type": "TFloatField"}, "deposittypes1withdrawtype": {"name": "DepositTypes1WITHDRAWTYPE", "type": "TWideStringField"}, "personsid": {"name": "personsID", "type": "TFloatField"}, "personsname": {"name": "personsNAME", "type": "TWideStringField"}, "depositporpsclienttype": {"name": "DepositPorpsCLIENTTYPE", "type": "TFloatField"}, "depperiodsperiod_type": {"name": "DepPeriodsPERIOD_TYPE", "type": "TWideStringField"}}, {});
  U.init(async () => {
    U.var_("NewDataModDepositsContract", null, "TNewDataModDepositsContract");
  });
  U.method("TNewDataModDepositsContract", "RefreshDataSets", async function RefreshDataSets(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: undefined};
  await $.mcall((await $.v(C, "valutes")), "Refresh", []);
  await $.mcall((await $.v(C, "Filals")), "Refresh", []);
  await $.mcall((await $.v(C, "DepositTypes1")), "Refresh", []);
  await $.mcall((await $.v(C, "ClientTypes")), "Refresh", []);
  await $.mcall((await $.v(C, "persons")), "Refresh", []);
  await $.mcall((await $.v(C, "Customers")), "Refresh", []);
  await $.mcall((await $.v(C, "DepositAccs")), "Refresh", []);
  await $.mcall((await $.v(C, "ClientAccs")), "Refresh", []);
  await $.mcall((await $.v(C, "InterestsAccs")), "Refresh", []);
  await $.mcall((await $.v(C, "DSBEFO_INTERESTPEYTACC")), "Refresh", []);
  return L0.result;
}, {"params": [], "kind": "procedure", "ptypes": []});
  U.method("TNewDataModDepositsContract", "DataModuleCreate", async function DataModuleCreate(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mcall((await $.v(C, "valutes")), "Open", []);
  await $.mcall((await $.v(C, "Filals")), "Open", []);
  await $.mcall((await $.v(C, "DepositTypes1")), "Open", []);
  await $.mcall((await $.v(C, "ClientTypes")), "Open", []);
  await $.mcall((await $.v(C, "persons")), "Open", []);
  await $.mcall((await $.v(C, "Customers")), "Open", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TNewDataModDepositsContract", "DataModuleDestroy", async function DataModuleDestroy(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mcall((await $.v(C, "valutes")), "CloseAll", []);
  await $.mcall((await $.v(C, "Filals")), "CloseAll", []);
  await $.mcall((await $.v(C, "DepositTypes1")), "CloseAll", []);
  await $.mcall((await $.v(C, "ClientTypes")), "CloseAll", []);
  await $.mcall((await $.v(C, "persons")), "CloseAll", []);
  await $.mcall((await $.v(C, "Customers")), "CloseAll", []);
  await $.mcall((await $.v(C, "ClientAccs")), "CloseAll", []);
  await $.mcall((await $.v(C, "BoorowerAccs")), "CloseAll", []);
  await $.mcall((await $.v(C, "DSBEFO_INTERESTPEYTACC")), "CloseAll", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TNewDataModDepositsContract", "DepositPorpsApplyRecord", async function DepositPorpsApplyRecord(Self, p0, p1, p2, p3) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "action": $.copyArg(p1), "applied": $.asRef(p2), "newrowid": $.asRef(p3), result: undefined};
  await $.fixArgs(L0, ["sender", "action"]);
  {
    const $t1 = (await $.v(C, "SaveDeposit"));
    const $t2 = (await $.wv([$t1], "sbcm_contract", C, false));
    { const $t3 = (await $.wv([$t1, $t2], "Action", { get: async () => L0["action"], set: async (v) => { L0["action"] = v; }, local: true }, false));
      if ($.eq($t3, "I")) {
        await $.stmt((await $.wcall([$t1, $t2], "CallProcedure", ["NewDeposit", ["p_Type", (await $.wv([$t1, $t2], "TypeD", C, false)), "p_OpenDate", (await $.wv([$t1, $t2], "OpenDate", C, false)), "p_CloseDate", (await $.wv([$t1, $t2], "CloseDate", C, false)), "p_Amount", (await $.wv([$t1, $t2], "Amount", C, false)), "p_ContractNo", (await $.wv([$t1, $t2], "ContractNo", C, false)), "p_ContractType", (await $.wv([$t1, $t2], "ContractType", C, false)), "p_ClientType", (await $.wv([$t1, $t2], "ClientType", C, false)), "p_ContractAccID", (await $.wv([$t1, $t2], "ContractAccID", C, false)), "p_ClientAccID", (await $.wv([$t1, $t2], "ClientAccID", C, false)), "p_InterestAccID", (await $.wv([$t1, $t2], "InterestAccID", C, false)), "p_BoorowerAccID", (await $.wv([$t1, $t2], "BoorowerAccID", C, false)), "p_Percent", (await $.wv([$t1, $t2], "Interest", C, false)), "p_OverduePercent", (await $.wv([$t1, $t2], "overdueinterest", C, false)), "p_DuePercent", (await $.wv([$t1, $t2], "dueinterest", C, false)), "p_personaltype", (await $.wv([$t1, $t2], "personaltype", C, false)), "p_currency", (await $.wv([$t1, $t2], "currency", C, false)), "p_branchid", (await $.wv([$t1, $t2], "branchid", C, false)), "p_customerid", (await $.wv([$t1, $t2], "Customerid", C, false)), "p_stopCalcdate", (await $.wv([$t1, $t2], "FirstPayDateforInt", C, false)), "p_PeriodID", (await $.wv([$t1, $t2], "PeriodID", C, false)), "p_capitalperid", (await $.wv([$t1, $t2], "capitalperid", C, false)), "p_autopr", (await $.wv([$t1, $t2], "autopr", C, false)), "p_BEFO_INTERESTPEYTACCID", (await $.wv([$t1, $t2], "BEFO_INTERESTPEYTACCID", C, false))]], C)));
        await $.wset([$t1, $t2], "Applied", (await $.wv([$t1, $t2], "True", C, false)), { get: async () => await L0["applied"].get(), set: async (v) => { await L0["applied"].set(v); }, local: true });
      }
      else if ($.eq($t3, "U")) {
        await $.stmt((await $.wcall([$t1, $t2], "CallProcedure", ["UpdateDeposit", ["p_ContractID", (await $.wv([$t1, $t2], "Get_SelectedContID", C, false)), "p_Type", (await $.wv([$t1, $t2], "TypeD", C, false)), "p_OpenDate", (await $.wv([$t1, $t2], "OpenDate", C, false)), "p_CloseDate", (await $.wv([$t1, $t2], "CloseDate", C, false)), "p_Amount", (await $.wv([$t1, $t2], "Amount", C, false)), "p_ContractNo", (await $.wv([$t1, $t2], "ContractNo", C, false)), "p_ContractType", (await $.wv([$t1, $t2], "ContractType", C, false)), "p_ClientType", (await $.wv([$t1, $t2], "ClientType", C, false)), "p_ContractAccID", (await $.wv([$t1, $t2], "ContractAccID", C, false)), "p_ClientAccID", (await $.wv([$t1, $t2], "ClientAccID", C, false)), "p_InterestAccID", (await $.wv([$t1, $t2], "InterestAccID", C, false)), "p_BoorowerAccID", (await $.wv([$t1, $t2], "BoorowerAccID", C, false)), "p_Percent", (await $.wv([$t1, $t2], "Interest", C, false)), "p_OverduePercent", (await $.wv([$t1, $t2], "overdueinterest", C, false)), "p_DuePercent", (await $.wv([$t1, $t2], "dueinterest", C, false)), "p_personaltype", (await $.wv([$t1, $t2], "personaltype", C, false)), "p_currency", (await $.wv([$t1, $t2], "currency", C, false)), "p_branchid", (await $.wv([$t1, $t2], "branchid", C, false)), "p_customerid", (await $.wv([$t1, $t2], "Customerid", C, false)), "p_stopCalcdate", (await $.wv([$t1, $t2], "FirstPayDateforInt", C, false)), "p_PeriodID", (await $.wv([$t1, $t2], "PeriodID", C, false)), "p_capitalperid", (await $.wv([$t1, $t2], "capitalperid", C, false)), "p_autopr", (await $.wv([$t1, $t2], "autopr", C, false)), "p_BEFO_INTERESTPEYTACCID", (await $.wv([$t1, $t2], "BEFO_INTERESTPEYTACCID", C, false))]], C)));
        await $.wset([$t1, $t2], "Applied", (await $.wv([$t1, $t2], "True", C, false)), { get: async () => await L0["applied"].get(), set: async (v) => { await L0["applied"].set(v); }, local: true });
      }
    }
  }
  return L0.result;
}, {"params": ["Sender", "Action", "Applied", "NewRowId"], "kind": "procedure", "ptypes": ["TOracleDataSet", "Char", "Boolean", "String"]});
  U.method("TNewDataModDepositsContract", "DepositPorpsCalcFields", async function DepositPorpsCalcFields(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"dataset": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["dataset"]);
  {
    const $t4 = L0["dataset"];
    await $.mset((await $.wcall([$t4], "FieldByName", ["PeriodContracts"], C)), "AsInteger", (await $.mcall((await $.wv([$t4], "sbcm_contract", C, false)), "CallIntegerFunction", ["GetPeriod", ["bdat", (await $.mv((await $.wcall([$t4], "FieldByname", ["opendate"], C)), "AsDateTime")), "edat", (await $.mv((await $.wcall([$t4], "FieldByname", ["closedate"], C)), "AsDateTime"))]])));
  }
  return L0.result;
}, {"params": ["DataSet"], "kind": "procedure", "ptypes": ["TDataSet"]});
  U.method("TNewDataModDepositsContract", "DepositPorpsCUSTOMERIDChange", async function DepositPorpsCUSTOMERIDChange(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t5 = (await $.v(C, "NewFormDepositContract"));
    await $.stmt($.wcall([$t5], "ShowAccounts", [], C));
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TField"]});
  return U;
}
