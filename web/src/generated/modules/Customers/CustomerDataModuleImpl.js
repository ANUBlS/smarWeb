// Generated from CustomerDataModuleImpl.pas by pas2js — do not edit by hand; regenerate instead.
/* eslint-disable */
// @ts-nocheck

export default function define($) {
  const U = $.unit("CustomerDataModuleImpl", ["Windows", "Messages", "SysUtils", "Classes", "Graphics", "Controls", "Forms", "Dialogs", "Db", "DBTables", "OracleData", "Oracle", "sboapiDataModuleImpl", "SBCore", "SBCustomer", "CustomerPropertiesForm_Unit"]);
  const C = [U];
  U.defClass("TCustomerDataModule", "TDataModule", {"customers": {"name": "Customers", "type": "TDataSource"}, "relationdata": {"name": "RelationData", "type": "TOracleDataSet"}, "relation": {"name": "Relation", "type": "TDataSource"}, "clientgroupdata": {"name": "ClientGroupData", "type": "TOracleDataSet"}, "clientgroup": {"name": "ClientGroup", "type": "TDataSource"}, "estatetypedata": {"name": "EstateTypeData", "type": "TOracleDataSet"}, "estatetype": {"name": "EstateType", "type": "TDataSource"}, "organizationtypedata": {"name": "OrganizationTypeData", "type": "TOracleDataSet"}, "organizationtype": {"name": "OrganizationType", "type": "TDataSource"}, "actionareadata": {"name": "ActionAreaData", "type": "TOracleDataSet"}, "actionarea": {"name": "ActionArea", "type": "TDataSource"}, "branchdata": {"name": "BranchData", "type": "TOracleDataSet"}, "branch": {"name": "Branch", "type": "TDataSource"}, "currencydata": {"name": "CurrencyData", "type": "TOracleDataSet"}, "taxareadata": {"name": "TaxAreaData", "type": "TOracleDataSet"}, "taxarea": {"name": "TaxArea", "type": "TDataSource"}, "currencydatavalute": {"name": "CurrencyDataVALUTE", "type": "TIntegerField"}, "currencydatadebet": {"name": "CurrencyDataDEBET", "type": "TFloatField"}, "currencydatakredit": {"name": "CurrencyDataKREDIT", "type": "TFloatField"}, "currencydataustorg": {"name": "CurrencyDataUSTORG", "type": "TFloatField"}, "currencydataustpok": {"name": "CurrencyDataUSTPOK", "type": "TFloatField"}, "currencydatausing": {"name": "CurrencyDataUSING", "type": "TIntegerField"}, "currencydatapristavka": {"name": "CurrencyDataPRISTAVKA", "type": "TFloatField"}, "currencydataust_pok1": {"name": "CurrencyDataUST_POK1", "type": "TFloatField"}, "currencydataf5501p": {"name": "CurrencyDataF5501P", "type": "TFloatField"}, "currencydataf5501v": {"name": "CurrencyDataF5501V", "type": "TFloatField"}, "currencydatasdebet": {"name": "CurrencyDataSDEBET", "type": "TFloatField"}, "currencydatascredit": {"name": "CurrencyDataSCREDIT", "type": "TFloatField"}, "currencydatalimit": {"name": "CurrencyDataLIMIT", "type": "TFloatField"}, "relationdataid": {"name": "RelationDataID", "type": "TFloatField"}, "clientgroupdataid": {"name": "ClientGroupDataID", "type": "TFloatField"}, "estatetypedataid": {"name": "EstateTypeDataID", "type": "TFloatField"}, "organizationtypedataid": {"name": "OrganizationTypeDataID", "type": "TFloatField"}, "actionareadataid": {"name": "ActionAreaDataID", "type": "TFloatField"}, "branchdataid": {"name": "BranchDataID", "type": "TFloatField"}, "taxareadataid": {"name": "TaxAreaDataID", "type": "TFloatField"}, "activecustomerlist": {"name": "ActiveCustomerList", "type": "TOracleDataSet"}, "opcust": {"name": "OPCust", "type": "TOraclePackage"}, "filialsdata": {"name": "FilialsData", "type": "TOracleDataSet"}, "filials": {"name": "Filials", "type": "TDataSource"}, "currencydataval_name": {"name": "CurrencyDataVAL_NAME", "type": "TWideStringField"}, "currencydatavalu_name": {"name": "CurrencyDataVALU_NAME", "type": "TWideStringField"}, "relationdataname": {"name": "RelationDataNAME", "type": "TWideStringField"}, "clientgroupdataname": {"name": "ClientGroupDataNAME", "type": "TWideStringField"}, "estatetypedataname": {"name": "EstateTypeDataNAME", "type": "TWideStringField"}, "organizationtypedataname": {"name": "OrganizationTypeDataNAME", "type": "TWideStringField"}, "actionareadataname": {"name": "ActionAreaDataNAME", "type": "TWideStringField"}, "branchdataname": {"name": "BranchDataNAME", "type": "TWideStringField"}, "taxareadataname": {"name": "TaxAreaDataNAME", "type": "TWideStringField"}, "currencydatavalu_short": {"name": "CurrencyDataVALU_SHORT", "type": "TWideStringField"}, "currencydatavalu_gen": {"name": "CurrencyDataVALU_GEN", "type": "TWideStringField"}, "currencydatavalu_az": {"name": "CurrencyDataVALU_AZ", "type": "TWideStringField"}, "currencydatavalu_other": {"name": "CurrencyDataVALU_OTHER", "type": "TWideStringField"}, "currencydatavalu_inter": {"name": "CurrencyDataVALU_INTER", "type": "TWideStringField"}, "currencydatavalu_bala": {"name": "CurrencyDataVALU_BALA", "type": "TWideStringField"}, "currencydatacountry": {"name": "CurrencyDataCOUNTRY", "type": "TWideStringField"}, "currencydataoffical": {"name": "CurrencyDataOFFICAL", "type": "TWideStringField"}, "activecustomerlistid": {"name": "ActiveCustomerListID", "type": "TIntegerField"}, "activecustomerlistop_id": {"name": "ActiveCustomerListOP_ID", "type": "TFloatField"}, "activecustomerlistopen_dat": {"name": "ActiveCustomerListOPEN_DAT", "type": "TDateTimeField"}, "activecustomerlistclose_dat": {"name": "ActiveCustomerListCLOSE_DAT", "type": "TDateTimeField"}, "activecustomerlistnerezident": {"name": "ActiveCustomerListNEREZIDENT", "type": "TFloatField"}, "activecustomerlistprinad_kod": {"name": "ActiveCustomerListPRINAD_KOD", "type": "TFloatField"}, "activecustomerlistname": {"name": "ActiveCustomerListNAME", "type": "TWideStringField"}, "activecustomerlistshort_name": {"name": "ActiveCustomerListSHORT_NAME", "type": "TWideStringField"}, "activecustomerlistgroup_klie": {"name": "ActiveCustomerListGROUP_KLIE", "type": "TFloatField"}, "activecustomerlistvid_sob": {"name": "ActiveCustomerListVID_SOB", "type": "TFloatField"}, "activecustomerlistorg_sob": {"name": "ActiveCustomerListORG_SOB", "type": "TFloatField"}, "activecustomerlistsfera_dey": {"name": "ActiveCustomerListSFERA_DEY", "type": "TFloatField"}, "activecustomerlistotrasl": {"name": "ActiveCustomerListOTRASL", "type": "TFloatField"}, "activecustomerlistnalog_kod": {"name": "ActiveCustomerListNALOG_KOD", "type": "TFloatField"}, "activecustomerlistkod_okpro": {"name": "ActiveCustomerListKOD_OKPRO", "type": "TWideStringField"}, "activecustomerlistinn": {"name": "ActiveCustomerListINN", "type": "TWideStringField"}, "activecustomerlistdat_nal": {"name": "ActiveCustomerListDAT_NAL", "type": "TDateTimeField"}, "activecustomerlistdat_ustav": {"name": "ActiveCustomerListDAT_USTAV", "type": "TDateTimeField"}, "activecustomerlisttip": {"name": "ActiveCustomerListTIP", "type": "TWideStringField"}, "activecustomerlistname1": {"name": "ActiveCustomerListNAME1", "type": "TWideStringField"}, "activecustomerlistbik": {"name": "ActiveCustomerListBIK", "type": "TWideStringField"}}, {});
  U.init(async () => {
    U.var_("CustomerDataModule", null, "TCustomerDataModule");
  });
  U.method("TCustomerDataModule", "ActiveCustomerListApplyRecord", async function ActiveCustomerListApplyRecord(Self, p0, p1, p2, p3) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "action": $.copyArg(p1), "applied": $.asRef(p2), "newrowid": $.asRef(p3), result: undefined, "customerinfo": $.rec("tcustomer")};
  await $.fixArgs(L0, ["sender", "action"]);
  {
    const $t1 = L0["sender"];
    const $t2 = (await $.wv([$t1], "CustomerInfo", { get: async () => L0["customerinfo"], set: async (v) => { L0["customerinfo"] = v; }, local: true }, false));
    await $.wset([$t1, $t2], "Name", (await $.mv((await $.wcall([$t1, $t2], "FieldByName", ["NAME"], C)), "AsString")), C);
    await $.wset([$t1, $t2], "ShortName", (await $.mv((await $.wcall([$t1, $t2], "FieldByName", ["Short_Name"], C)), "AsString")), C);
    await $.wset([$t1, $t2], "OpenDate", (await $.mv((await $.wcall([$t1, $t2], "FieldByName", ["OPEN_DAT"], C)), "AsDateTime")), C);
    await $.wset([$t1, $t2], "CloseDate", (await $.mv((await $.wcall([$t1, $t2], "FieldByName", ["CLOSE_DAT"], C)), "AsDateTime")), C);
    await $.wset([$t1, $t2], "RelationID", (await $.mv((await $.wcall([$t1, $t2], "FieldByName", ["PRINAD_KOD"], C)), "AsInteger")), C);
    await $.wset([$t1, $t2], "GroupID", (await $.mv((await $.wcall([$t1, $t2], "FieldByName", ["GROUP_KLIE"], C)), "AsInteger")), C);
    await $.wset([$t1, $t2], "EstateType", (await $.mv((await $.wcall([$t1, $t2], "FieldByName", ["VID_SOB"], C)), "AsInteger")), C);
    await $.wset([$t1, $t2], "OrganizationType", (await $.mv((await $.wcall([$t1, $t2], "FieldByName", ["ORG_SOB"], C)), "AsInteger")), C);
    await $.wset([$t1, $t2], "ActionArea", (await $.mv((await $.wcall([$t1, $t2], "FieldByName", ["SFERA_DEY"], C)), "AsInteger")), C);
    await $.wset([$t1, $t2], "BranchID", (await $.mv((await $.wcall([$t1, $t2], "FieldByName", ["OTRASL"], C)), "AsInteger")), C);
    await $.wset([$t1, $t2], "TaxAreaID", (await $.mv((await $.wcall([$t1, $t2], "FieldByName", ["NALOG_KOD"], C)), "AsInteger")), C);
    await $.wset([$t1, $t2], "IsResident", $.eq((await $.mv((await $.wcall([$t1, $t2], "FieldByName", ["NEREZIDENT"], C)), "AsInteger")), 1), C);
    await $.wset([$t1, $t2], "TaxIDString", (await $.mv((await $.wcall([$t1, $t2], "FieldByName", ["INN"], C)), "AsString")), C);
    await $.wset([$t1, $t2], "BankIDString", (await $.mv((await $.wcall([$t1, $t2], "FieldByName", ["BIK"], C)), "AsString")), C);
    await $.wset([$t1, $t2], "OKPRO", (await $.mv((await $.wcall([$t1, $t2], "FieldByName", ["KOD_OKPRO"], C)), "AsString")), C);
    await $.wset([$t1, $t2], "TaxDepartmentRegDate", (await $.mv((await $.wcall([$t1, $t2], "FieldByName", ["DAT_NAL"], C)), "AsDateTime")), C);
    await $.wset([$t1, $t2], "CapitalRegDate", (await $.mv((await $.wcall([$t1, $t2], "FieldByName", ["DAT_USTAV"], C)), "AsDateTime")), C);
  }
  await L0["applied"].set(true);
  { const $t3 = L0["action"];
    if ($.eq($t3, "I")) {
      await $.stmt((await $.call(C, "Sb_AddCustomer", [L0["customerinfo"]])));
    }
    else if ($.eq($t3, "U")) {
      await $.stmt((await $.call(C, "Sb_EditCustomer", [(await $.mv((await $.mcall(L0["sender"], "FieldByName", ["ID"])), "AsInteger")), L0["customerinfo"]])));
    }
    else {
      await L0["applied"].set(false);
    }
  }
  return L0.result;
}, {"params": ["Sender", "Action", "Applied", "NewRowId"], "kind": "procedure", "ptypes": ["TOracleDataSet", "Char", "Boolean", "String"]});
  U.method("TCustomerDataModule", "CurrencyIDByIndex", async function CurrencyIDByIndex(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"aindex": $.copyArg(p0), result: 0};
  await $.fixArgs(L0, ["aindex"]);
  {
    const $t4 = (await $.v(C, "CurrencyData"));
    await $.wset([$t4], "RecNo", (await $.wv([$t4], "AIndex", { get: async () => L0["aindex"], set: async (v) => { L0["aindex"] = v; }, local: true }, false)), C);
    await $.wset([$t4], "Result", (await $.mv((await $.wcall([$t4], "FieldByName", ["VALUTE"], C)), "AsInteger")), { get: async () => L0["result"], set: async (v) => { L0["result"] = v; }, local: true });
  }
  return L0.result;
}, {"params": ["AIndex"], "kind": "function", "ptypes": ["Integer"]});
  U.func("Initialize", async function Initialize(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: undefined};
  await $.set(C, "CustomerDataModule", (await $.mcall((await $.v(C, "TCustomerDataModule")), "Create", [null])));
  return L0.result;
}, {"params": [], "kind": "procedure", "ptypes": []});
  U.func("Cleanup", async function Cleanup(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: undefined};
  await $.mcall((await $.v(C, "CustomerDataModule")), "Free", []);
  return L0.result;
}, {"params": [], "kind": "procedure", "ptypes": []});
  U.method("TCustomerDataModule", "ActiveCustomerListCalcFields", async function ActiveCustomerListCalcFields(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"dataset": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["dataset"]);
  return L0.result;
}, {"params": ["DataSet"], "kind": "procedure", "ptypes": ["TDataSet"]});
  return U;
}
