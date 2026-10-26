// Generated from dmDepositContractImpl.pas by pas2js — do not edit by hand; regenerate instead.
/* eslint-disable */
// @ts-nocheck

export default function define($) {
  const U = $.unit("dmDepositContractImpl", ["Windows", "Messages", "SysUtils", "Classes", "Graphics", "Controls", "Forms", "Dialogs", "Db", "OracleData", "Oracle", "sboapiDataModuleImpl", "ContractCommonDecls", "CommonDeclsImpl", "frmDepositContractImpl"]);
  const C = [U];
  U.defClass("TdmDepositContract", "TDataModule", {"clienttypes": {"name": "ClientTypes", "type": "TOracleDataSet"}, "clienttypesdatsrc": {"name": "ClientTypesDatSrc", "type": "TDataSource"}, "filals": {"name": "Filals", "type": "TOracleDataSet"}, "filalsdatsrc": {"name": "FilalsDatSrc", "type": "TDataSource"}, "persons": {"name": "persons", "type": "TOracleDataSet"}, "personsdatsrc": {"name": "personsDatSrc", "type": "TDataSource"}, "valutes": {"name": "valutes", "type": "TOracleDataSet"}, "valutesdatsrc": {"name": "valutesDatSrc", "type": "TDataSource"}, "customers": {"name": "Customers", "type": "TOracleDataSet"}, "customersdatsrc": {"name": "CustomersDatSrc", "type": "TDataSource"}, "depositaccs": {"name": "DepositAccs", "type": "TOracleDataSet"}, "depositporpsdatsrc": {"name": "DepositPorpsDatSrc", "type": "TDataSource"}, "depositporps": {"name": "DepositPorps", "type": "TOracleDataSet"}, "depositaccsdatsrc": {"name": "DepositAccsDatSrc", "type": "TDataSource"}, "deposittypes1": {"name": "DepositTypes1", "type": "TOracleDataSet"}, "deposittypesdatsrc": {"name": "DepositTypesDatSrc", "type": "TDataSource"}, "filalsid": {"name": "FilalsID", "type": "TFloatField"}, "filalsname": {"name": "FilalsNAME", "type": "Twidestringfield"}, "deposittypes1id": {"name": "DepositTypes1ID", "type": "TFloatField"}, "deposittypes1type": {"name": "DepositTypes1TYPE", "type": "Twidestringfield"}, "clienttypesid": {"name": "ClientTypesID", "type": "TFloatField"}, "clienttypescategory": {"name": "ClientTypesCATEGORY", "type": "Twidestringfield"}, "valutesvalute": {"name": "valutesVALUTE", "type": "TIntegerField"}, "valutesvalu_name": {"name": "valutesVALU_NAME", "type": "Twidestringfield"}, "depositaccsid": {"name": "DepositAccsID", "type": "TFloatField"}, "depositaccscustid": {"name": "DepositAccsCUSTID", "type": "TFloatField"}, "depositaccsaccno": {"name": "DepositAccsACCNO", "type": "Twidestringfield"}, "depositaccsclientname": {"name": "DepositAccsCLIENTNAME", "type": "Twidestringfield"}, "depositaccsval_acc": {"name": "DepositAccsVAL_ACC", "type": "TIntegerField"}, "clientaccs": {"name": "ClientAccs", "type": "TOracleDataSet"}, "clientaccsdatsrc": {"name": "ClientaccsDatSrc", "type": "TDataSource"}, "interestsaccs": {"name": "InterestsAccs", "type": "TOracleDataSet"}, "interestsaccsdatsrc": {"name": "InterestsAccsDatSrc", "type": "TDataSource"}, "clientaccsid": {"name": "ClientAccsID", "type": "TFloatField"}, "clientaccscustid": {"name": "ClientAccsCUSTID", "type": "TFloatField"}, "clientaccsaccno": {"name": "ClientAccsACCNO", "type": "Twidestringfield"}, "clientaccsclientname": {"name": "ClientAccsCLIENTNAME", "type": "Twidestringfield"}, "clientaccsval_acc": {"name": "ClientAccsVAL_ACC", "type": "TIntegerField"}, "interestsaccsid": {"name": "InterestsAccsID", "type": "TFloatField"}, "interestsaccscustid": {"name": "InterestsAccsCUSTID", "type": "TFloatField"}, "interestsaccsaccno": {"name": "InterestsAccsACCNO", "type": "Twidestringfield"}, "interestsaccsclientname": {"name": "InterestsAccsCLIENTNAME", "type": "Twidestringfield"}, "interestsaccsval_acc": {"name": "InterestsAccsVAL_ACC", "type": "TIntegerField"}, "creditaccs": {"name": "CreditAccs", "type": "TOracleDataSet"}, "creditaccsdatsrc": {"name": "CreditAccsDatSrc", "type": "TDataSource"}, "sbcm_contract": {"name": "sbcm_contract", "type": "TOraclePackage"}, "depositporpsperiodcontracts": {"name": "DepositPorpsPeriodContracts", "type": "TIntegerField"}, "depositporpsopendate": {"name": "DepositPorpsOPENDATE", "type": "TDateTimeField"}, "depositporpsclosedate": {"name": "DepositPorpsCLOSEDATE", "type": "TDateTimeField"}, "depositporpsamount": {"name": "DepositPorpsAMOUNT", "type": "TFloatField"}, "depositporpscontractno": {"name": "DepositPorpsCONTRACTNO", "type": "Twidestringfield"}, "depositporpscontracttype": {"name": "DepositPorpsCONTRACTTYPE", "type": "TIntegerField"}, "depositporpsclienttype": {"name": "DepositPorpsCLIENTTYPE", "type": "TFloatField"}, "depositporpsbranchid": {"name": "DepositPorpsBRANCHID", "type": "TFloatField"}, "depositporpscurrency": {"name": "DepositPorpsCURRENCY", "type": "TFloatField"}, "depositporpspersonaltype": {"name": "DepositPorpsPERSONALTYPE", "type": "TFloatField"}, "depositporpscustomerid": {"name": "DepositPorpsCUSTOMERID", "type": "TFloatField"}, "depositporpsoverdueinterest": {"name": "DepositPorpsOVERDUEINTEREST", "type": "TFloatField"}, "depositporpsdueinterest": {"name": "DepositPorpsDUEINTEREST", "type": "TFloatField"}, "depositporpscontractaccid": {"name": "DepositPorpsCONTRACTACCID", "type": "TFloatField"}, "depositporpsclientaccid": {"name": "DepositPorpsCLIENTACCID", "type": "TFloatField"}, "depositporpsinterestaccid": {"name": "DepositPorpsINTERESTACCID", "type": "TFloatField"}, "customersid": {"name": "CustomersID", "type": "TIntegerField"}, "customersname": {"name": "CustomersNAME", "type": "Twidestringfield"}, "depositporpsfirstinterestpaydat": {"name": "DepositPorpsFIRSTINTERESTPAYDAT", "type": "TDateTimeField"}, "depcapperiod": {"name": "DepCapperiod", "type": "TOracleDataSet"}, "depperiods": {"name": "DepPeriods", "type": "TOracleDataSet"}, "depperiodsid": {"name": "DepPeriodsID", "type": "TFloatField"}, "depperiodsperiod": {"name": "DepPeriodsPERIOD", "type": "TFloatField"}, "depperiodsdescription": {"name": "DepPeriodsDESCRIPTION", "type": "Twidestringfield"}, "depperiodsdepid": {"name": "DepPeriodsDEPID", "type": "TFloatField"}, "depperiodsds": {"name": "DepPeriodsds", "type": "TDataSource"}, "depcapperiodds": {"name": "DepCapperiodds", "type": "TDataSource"}, "depcapperiodid": {"name": "DepCapperiodID", "type": "TFloatField"}, "depcapperiodperiod": {"name": "DepCapperiodPERIOD", "type": "TFloatField"}, "depcapperioddescription": {"name": "DepCapperiodDESCRIPTION", "type": "Twidestringfield"}, "depcapperiodperiodid": {"name": "DepCapperiodPERIODID", "type": "TFloatField"}, "depositporpscapitalperid": {"name": "DepositPorpsCAPITALPERID", "type": "TFloatField"}, "depositporpsperiodid": {"name": "DepositPorpsPERIODID", "type": "TFloatField"}, "booroweraccs": {"name": "BoorowerAccs", "type": "TOracleDataSet"}, "booroweraccsid": {"name": "BoorowerAccsID", "type": "TFloatField"}, "booroweraccscustid": {"name": "BoorowerAccsCUSTID", "type": "TFloatField"}, "booroweraccsaccno": {"name": "BoorowerAccsACCNO", "type": "Twidestringfield"}, "booroweraccsclientname": {"name": "BoorowerAccsCLIENTNAME", "type": "Twidestringfield"}, "booroweraccsval_acc": {"name": "BoorowerAccsVAL_ACC", "type": "TIntegerField"}, "booroweraccsds": {"name": "BoorowerAccsds", "type": "TDataSource"}, "depositporpsbooroweraccid": {"name": "DepositPorpsBOOROWERACCID", "type": "TFloatField"}, "depositporpssid": {"name": "DepositPorpsSID", "type": "TFloatField"}, "usrs": {"name": "usrs", "type": "TOracleDataSet"}, "usrsid": {"name": "usrsID", "type": "TFloatField"}, "usrsname": {"name": "usrsNAME", "type": "Twidestringfield"}, "depositporpsusername": {"name": "DepositPorpsUSERNAME", "type": "Twidestringfield"}, "depositporpsautopr": {"name": "DepositPorpsAUTOPR", "type": "TFloatField"}, "depositporpsinterest": {"name": "DepositPorpsINTEREST", "type": "Twidestringfield"}}, {});
  U.init(async () => {
    U.var_("dmDepositContract", null, "TdmDepositContract");
  });
  U.method("TdmDepositContract", "RefreshDataSets", async function RefreshDataSets(Self) {
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
  return L0.result;
}, {"params": [], "kind": "procedure", "ptypes": []});
  U.method("TdmDepositContract", "DataModuleCreate", async function DataModuleCreate(Self, p0) {
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
  U.method("TdmDepositContract", "DataModuleDestroy", async function DataModuleDestroy(Self, p0) {
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
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TdmDepositContract", "DepositPorpsApplyRecord", async function DepositPorpsApplyRecord(Self, p0, p1, p2, p3) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "action": $.copyArg(p1), "applied": $.asRef(p2), "newrowid": $.asRef(p3), result: undefined};
  await $.fixArgs(L0, ["sender", "action"]);
  {
    const $t1 = (await $.v(C, "SaveDeposit"));
    const $t2 = (await $.wv([$t1], "sbcm_contract", C, false));
    { const $t3 = (await $.wv([$t1, $t2], "Action", { get: async () => L0["action"], set: async (v) => { L0["action"] = v; }, local: true }, false));
      if ($.eq($t3, "I")) {
        await $.stmt((await $.wcall([$t1, $t2], "CallProcedure", ["NewDeposit", ["p_Type", (await $.wv([$t1, $t2], "TypeD", C, false)), "p_OpenDate", (await $.wv([$t1, $t2], "OpenDate", C, false)), "p_CloseDate", (await $.wv([$t1, $t2], "CloseDate", C, false)), "p_Amount", (await $.wv([$t1, $t2], "Amount", C, false)), "p_ContractNo", (await $.wv([$t1, $t2], "ContractNo", C, false)), "p_ContractType", (await $.wv([$t1, $t2], "ContractType", C, false)), "p_ClientType", (await $.wv([$t1, $t2], "ClientType", C, false)), "p_ContractAccID", (await $.wv([$t1, $t2], "ContractAccID", C, false)), "p_ClientAccID", (await $.wv([$t1, $t2], "ClientAccID", C, false)), "p_InterestAccID", (await $.wv([$t1, $t2], "InterestAccID", C, false)), "p_BoorowerAccID", (await $.wv([$t1, $t2], "BoorowerAccID", C, false)), "p_Percent", (await $.wv([$t1, $t2], "Interest", C, false)), "p_OverduePercent", (await $.wv([$t1, $t2], "overdueinterest", C, false)), "p_DuePercent", (await $.wv([$t1, $t2], "dueinterest", C, false)), "p_personaltype", (await $.wv([$t1, $t2], "personaltype", C, false)), "p_currency", (await $.wv([$t1, $t2], "currency", C, false)), "p_branchid", (await $.wv([$t1, $t2], "branchid", C, false)), "p_customerid", (await $.wv([$t1, $t2], "Customerid", C, false)), "p_stopCalcdate", (await $.wv([$t1, $t2], "FirstPayDateforInt", C, false)), "p_PeriodID", (await $.wv([$t1, $t2], "PeriodID", C, false)), "p_capitalperid", (await $.wv([$t1, $t2], "capitalperid", C, false)), "p_autopr", (await $.wv([$t1, $t2], "autopr", C, false))]], C)));
        await $.wset([$t1, $t2], "Applied", (await $.wv([$t1, $t2], "True", C, false)), { get: async () => await L0["applied"].get(), set: async (v) => { await L0["applied"].set(v); }, local: true });
      }
      else if ($.eq($t3, "U")) {
        await $.stmt((await $.wcall([$t1, $t2], "CallProcedure", ["UpdateDeposit", ["p_ContractID", (await $.wv([$t1, $t2], "Get_SelectedContID", C, false)), "p_Type", (await $.wv([$t1, $t2], "TypeD", C, false)), "p_OpenDate", (await $.wv([$t1, $t2], "OpenDate", C, false)), "p_CloseDate", (await $.wv([$t1, $t2], "CloseDate", C, false)), "p_Amount", (await $.wv([$t1, $t2], "Amount", C, false)), "p_ContractNo", (await $.wv([$t1, $t2], "ContractNo", C, false)), "p_ContractType", (await $.wv([$t1, $t2], "ContractType", C, false)), "p_ClientType", (await $.wv([$t1, $t2], "ClientType", C, false)), "p_ContractAccID", (await $.wv([$t1, $t2], "ContractAccID", C, false)), "p_ClientAccID", (await $.wv([$t1, $t2], "ClientAccID", C, false)), "p_InterestAccID", (await $.wv([$t1, $t2], "InterestAccID", C, false)), "p_BoorowerAccID", (await $.wv([$t1, $t2], "BoorowerAccID", C, false)), "p_Percent", (await $.wv([$t1, $t2], "Interest", C, false)), "p_OverduePercent", (await $.wv([$t1, $t2], "overdueinterest", C, false)), "p_DuePercent", (await $.wv([$t1, $t2], "dueinterest", C, false)), "p_personaltype", (await $.wv([$t1, $t2], "personaltype", C, false)), "p_currency", (await $.wv([$t1, $t2], "currency", C, false)), "p_branchid", (await $.wv([$t1, $t2], "branchid", C, false)), "p_customerid", (await $.wv([$t1, $t2], "Customerid", C, false)), "p_stopCalcdate", (await $.wv([$t1, $t2], "FirstPayDateforInt", C, false)), "p_PeriodID", (await $.wv([$t1, $t2], "PeriodID", C, false)), "p_capitalperid", (await $.wv([$t1, $t2], "capitalperid", C, false)), "p_autopr", (await $.wv([$t1, $t2], "autopr", C, false))]], C)));
        await $.wset([$t1, $t2], "Applied", (await $.wv([$t1, $t2], "True", C, false)), { get: async () => await L0["applied"].get(), set: async (v) => { await L0["applied"].set(v); }, local: true });
      }
    }
  }
  return L0.result;
}, {"params": ["Sender", "Action", "Applied", "NewRowId"], "kind": "procedure", "ptypes": ["TOracleDataSet", "Char", "Boolean", "String"]});
  U.method("TdmDepositContract", "DepositPorpsCalcFields", async function DepositPorpsCalcFields(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"dataset": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["dataset"]);
  {
    const $t4 = L0["dataset"];
    await $.mset((await $.wcall([$t4], "FieldByName", ["PeriodContracts"], C)), "AsInteger", (await $.mcall((await $.wv([$t4], "sbcm_contract", C, false)), "CallIntegerFunction", ["GetPeriod", ["bdat", (await $.mv((await $.wcall([$t4], "FieldByname", ["opendate"], C)), "AsDateTime")), "edat", (await $.mv((await $.wcall([$t4], "FieldByname", ["closedate"], C)), "AsDateTime"))]])));
  }
  return L0.result;
}, {"params": ["DataSet"], "kind": "procedure", "ptypes": ["TDataSet"]});
  U.method("TdmDepositContract", "DepositPorpsCUSTOMERIDChange", async function DepositPorpsCUSTOMERIDChange(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t5 = (await $.v(C, "frmDepositContract"));
    await $.stmt($.wcall([$t5], "ShowAccounts", [], C));
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TField"]});
  return U;
}
