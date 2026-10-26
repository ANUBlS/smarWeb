// Generated from CRADatModImpl.pas by pas2js — do not edit by hand; regenerate instead.
/* eslint-disable */
// @ts-nocheck

export default function define($) {
  const U = $.unit("CRADatModImpl", ["Windows", "Messages", "SysUtils", "Classes", "Graphics", "Controls", "Forms", "Dialogs", "Db", "OracleData", "Oracle", "sboapiDataModuleImpl"]);
  const C = [U];
  U.defClass("TCRADatMod", "TDataModule", {"purpose": {"name": "Purpose", "type": "TOracleDataSet"}, "currency": {"name": "Currency", "type": "TOracleDataSet"}, "branches": {"name": "Branches", "type": "TOracleDataSet"}, "contaccs": {"name": "ContAccs", "type": "TOracleDataSet"}, "intaccs": {"name": "IntAccs", "type": "TOracleDataSet"}, "categories": {"name": "Categories", "type": "TOracleDataSet"}, "persons": {"name": "Persons", "type": "TOracleDataSet"}, "purposedatsrc": {"name": "PurposeDatSrc", "type": "TDataSource"}, "currencydatsrc": {"name": "CurrencyDatSrc", "type": "TDataSource"}, "branchesdatsrc": {"name": "BranchesDatSrc", "type": "TDataSource"}, "contaccsdatsrc": {"name": "ContAccsDatSrc", "type": "TDataSource"}, "intaccsdatsrc": {"name": "IntAccsDatSrc", "type": "TDataSource"}, "categoriesdatsrc": {"name": "CategoriesDatSrc", "type": "TDataSource"}, "personsdatsrc": {"name": "PersonsDatSrc", "type": "TDataSource"}, "currencyvalute": {"name": "CurrencyVALUTE", "type": "TIntegerField"}, "currencyval_name": {"name": "CurrencyVAL_NAME", "type": "Twidestringfield"}, "currencyvalu_name": {"name": "CurrencyVALU_NAME", "type": "Twidestringfield"}, "branchesid": {"name": "BranchesID", "type": "TFloatField"}, "branchesname": {"name": "BranchesNAME", "type": "Twidestringfield"}, "contracts": {"name": "Contracts", "type": "TOracleDataSet"}, "contractsdatsrc": {"name": "ContractsDatSrc", "type": "TDataSource"}, "contractsannualinterest": {"name": "ContractsANNUALINTEREST", "type": "TFloatField"}, "contractsopendate": {"name": "ContractsOPENDATE", "type": "TDateTimeField"}, "contractsclosedate": {"name": "ContractsCLOSEDATE", "type": "TDateTimeField"}, "contractscontractno": {"name": "ContractsCONTRACTNO", "type": "Twidestringfield"}, "contractscontractaccno": {"name": "ContractsCONTRACTACCNO", "type": "Twidestringfield"}, "contractsinterestaccno": {"name": "ContractsINTERESTACCNO", "type": "Twidestringfield"}, "branchkod": {"name": "BranchKod", "type": "TOracleDataSet"}, "branchkodkod_fil": {"name": "BranchKodKOD_FIL", "type": "TIntegerField"}, "bankdate": {"name": "BankDate", "type": "TOracleDataSet"}, "bankdatetek_dat": {"name": "BankDateTEK_DAT", "type": "TDateTimeField"}, "cra_contract": {"name": "CRA_CONTRACT", "type": "TOraclePackage"}, "contractsval_name": {"name": "ContractsVAL_NAME", "type": "Twidestringfield"}, "contractsid": {"name": "ContractsID", "type": "TFloatField"}, "contractsaccname": {"name": "ContractsACCNAME", "type": "Twidestringfield"}, "purposecurrency": {"name": "PurposeCURRENCY", "type": "TFloatField"}, "purposeannualinterest": {"name": "PurposeANNUALINTEREST", "type": "TFloatField"}, "purposeopendate": {"name": "PurposeOPENDATE", "type": "TDateTimeField"}, "purposeclosedate": {"name": "PurposeCLOSEDATE", "type": "TDateTimeField"}, "purposecontractno": {"name": "PurposeCONTRACTNO", "type": "Twidestringfield"}, "purposepersonaltype": {"name": "PurposePERSONALTYPE", "type": "TFloatField"}, "purposeclienttype": {"name": "PurposeCLIENTTYPE", "type": "TFloatField"}, "purposebranchid": {"name": "PurposeBRANCHID", "type": "TFloatField"}, "purposecontractaccid": {"name": "PurposeCONTRACTACCID", "type": "TFloatField"}, "purposeinterestaccid": {"name": "PurposeINTERESTACCID", "type": "TFloatField"}, "contractsstatus": {"name": "ContractsSTATUS", "type": "TFloatField"}, "contractscontrest": {"name": "ContractsCONTREST", "type": "TFloatField"}, "contractsintrest": {"name": "ContractsINTREST", "type": "TFloatField"}, "corrector": {"name": "Corrector", "type": "TOracleDataSet"}, "correctorcontractno": {"name": "CorrectorCONTRACTNO", "type": "Twidestringfield"}, "correctorlastprocessdate": {"name": "CorrectorLASTPROCESSDATE", "type": "TDateTimeField"}, "correctordatsrc": {"name": "CorrectorDatSrc", "type": "TDataSource"}, "sb_aca": {"name": "SB_ACA", "type": "TOraclePackage"}, "flastcontractid": {"name": "FLastContractID", "type": "integer"}}, {});
  U.init(async () => {
    U.var_("CRADatMod", null, "TCRADatMod");
  });
  U.method("TCRADatMod", "DataModuleCreate", async function DataModuleCreate(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mcall((await $.v(C, "Currency")), "Open", []);
  await $.mcall((await $.v(C, "Categories")), "Open", []);
  await $.mcall((await $.v(C, "ContAccs")), "Open", []);
  await $.mcall((await $.v(C, "IntAccs")), "Open", []);
  await $.mcall((await $.v(C, "Branches")), "Open", []);
  {
    const $t1 = (await $.v(C, "Contracts"));
    await $.stmt((await $.wcall([$t1], "SetVariable", ["OrderClause", "contractaccno"], C)));
    await $.stmt($.wcall([$t1], "Open", [], C));
  }
  await $.mcall((await $.v(C, "Persons")), "Open", []);
  await $.mcall((await $.v(C, "BankDate")), "Open", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TCRADatMod", "DataModuleDestroy", async function DataModuleDestroy(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mcall((await $.v(C, "Currency")), "CloseAll", []);
  await $.mcall((await $.v(C, "Categories")), "CloseAll", []);
  await $.mcall((await $.v(C, "ContAccs")), "CloseAll", []);
  await $.mcall((await $.v(C, "IntAccs")), "CloseAll", []);
  await $.mcall((await $.v(C, "Branches")), "CloseAll", []);
  await $.mcall((await $.v(C, "Contracts")), "CloseAll", []);
  await $.mcall((await $.v(C, "Persons")), "CloseAll", []);
  await $.mcall((await $.v(C, "BankDate")), "CloseAll", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TCRADatMod", "PurposeApplyRecord", async function PurposeApplyRecord(Self, p0, p1, p2, p3) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "action": $.copyArg(p1), "applied": $.asRef(p2), "newrowid": $.asRef(p3), result: undefined, "currency": 0, "personaltype": 0, "clienttype": 0, "branchid": 0, "contractaccid": 0, "interestaccid": 0, "opendate": 0, "closedate": 0, "annualintrest": 0, "contractno": ''};
  await $.fixArgs(L0, ["sender", "action"]);
  {
    const $t2 = L0["sender"];
    await $.wset([$t2], "currency", (await $.mv((await $.wcall([$t2], "FieldByName", ["CURRENCY"], C)), "AsInteger")), { get: async () => L0["currency"], set: async (v) => { L0["currency"] = v; }, local: true });
    await $.wset([$t2], "personaltype", (await $.mv((await $.wcall([$t2], "FieldByName", ["personaltype"], C)), "AsInteger")), { get: async () => L0["personaltype"], set: async (v) => { L0["personaltype"] = v; }, local: true });
    await $.wset([$t2], "clienttype", (await $.mv((await $.wcall([$t2], "FieldByName", ["clienttype"], C)), "AsInteger")), { get: async () => L0["clienttype"], set: async (v) => { L0["clienttype"] = v; }, local: true });
    await $.wset([$t2], "branchid", (await $.mv((await $.wcall([$t2], "FieldByName", ["branchid"], C)), "AsInteger")), { get: async () => L0["branchid"], set: async (v) => { L0["branchid"] = v; }, local: true });
    await $.wset([$t2], "contractaccid", (await $.mv((await $.wcall([$t2], "FieldByName", ["contractaccid"], C)), "AsInteger")), { get: async () => L0["contractaccid"], set: async (v) => { L0["contractaccid"] = v; }, local: true });
    await $.wset([$t2], "interestaccid", (await $.mv((await $.wcall([$t2], "FieldByName", ["interestaccid"], C)), "AsInteger")), { get: async () => L0["interestaccid"], set: async (v) => { L0["interestaccid"] = v; }, local: true });
    await $.wset([$t2], "opendate", (await $.mv((await $.wcall([$t2], "FieldByName", ["opendate"], C)), "AsDateTime")), { get: async () => L0["opendate"], set: async (v) => { L0["opendate"] = v; }, local: true });
    await $.wset([$t2], "closedate", (await $.mv((await $.wcall([$t2], "FieldByName", ["closedate"], C)), "AsDateTime")), { get: async () => L0["closedate"], set: async (v) => { L0["closedate"] = v; }, local: true });
    await $.wset([$t2], "annualIntRest", (await $.mv((await $.wcall([$t2], "FieldByName", ["ANNUALINTEREST"], C)), "AsFloat")), { get: async () => L0["annualintrest"], set: async (v) => { L0["annualintrest"] = v; }, local: true });
    await $.wset([$t2], "contractno", (await $.mv((await $.wcall([$t2], "FieldByName", ["contractno"], C)), "AsString")), { get: async () => L0["contractno"], set: async (v) => { L0["contractno"] = v; }, local: true });
  }
  { const $t3 = L0["action"];
    if ($.eq($t3, "I")) {
      await $.stmt((await $.mcall((await $.v(C, "CRA_CONTRACT")), "CallProcedure", ["add_cra_contracts", ["currency", L0["currency"], "personaltype", L0["personaltype"], "clienttype", L0["clienttype"], "branchid", L0["branchid"], "contractaccid", L0["contractaccid"], "interestaccid", L0["interestaccid"], "opendate", L0["opendate"], "closedate", L0["closedate"], "annualIntRest", L0["annualintrest"], "contractno", L0["contractno"]]])));
    }
    else if ($.eq($t3, "U")) {
      await $.stmt((await $.mcall((await $.v(C, "CRA_CONTRACT")), "CallProcedure", ["Edit_cra_contracts", ["ContractID", (await $.mcall((await $.v(C, "Purpose")), "GetVariable", ["ContID"])), "currency", L0["currency"], "personaltype", L0["personaltype"], "clienttype", L0["clienttype"], "branchid", L0["branchid"], "contractaccid", L0["contractaccid"], "interestaccid", L0["interestaccid"], "opendate", L0["opendate"], "closedate", L0["closedate"], "annualIntRest", L0["annualintrest"], "contractno", L0["contractno"]]])));
    }
  }
  await L0["applied"].set(true);
  return L0.result;
}, {"params": ["Sender", "Action", "Applied", "NewRowId"], "kind": "procedure", "ptypes": ["TOracleDataSet", "Char", "Boolean", "String"]});
  return U;
}
