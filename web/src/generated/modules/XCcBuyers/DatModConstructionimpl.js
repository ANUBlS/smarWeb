// Generated from DatModConstructionimpl.pas by pas2js — do not edit by hand; regenerate instead.
/* eslint-disable */
// @ts-nocheck

export default function define($) {
  const U = $.unit("DatModConstructionimpl", ["Windows", "Messages", "SysUtils", "Classes", "Graphics", "Controls", "Forms", "Dialogs", "Oracle", "Db", "OracleData", "sboapiDataModuleImpl"]);
  const C = [U];
  U.defClass("TDatModConstruction", "TDataModule", {"pledgetypesdatsrc": {"name": "pledgetypesDatSrc", "type": "TDataSource"}, "pledgetypes": {"name": "pledgetypes", "type": "TOracleDataSet"}, "pledgetypesid": {"name": "pledgetypesID", "type": "TFloatField"}, "pledgetypestype": {"name": "pledgetypesTYPE", "type": "TStringField"}, "customersdatsur": {"name": "CustomersDatSur", "type": "TDataSource"}, "customers": {"name": "Customers", "type": "TOracleDataSet"}, "customersid": {"name": "CustomersID", "type": "TFloatField"}, "customersbyr_name": {"name": "CustomersBYR_NAME", "type": "TStringField"}, "valutesdatsrc": {"name": "ValutesDatSrc", "type": "TDataSource"}, "valutes": {"name": "Valutes", "type": "TOracleDataSet"}, "filialsdatsrc": {"name": "FilialsDatSrc", "type": "TDataSource"}, "filials": {"name": "Filials", "type": "TOracleDataSet"}, "filialsid": {"name": "FilialsID", "type": "TFloatField"}, "filialsname": {"name": "FilialsNAME", "type": "TStringField"}, "creditsdatsrc": {"name": "CreditsDatSrc", "type": "TDataSource"}, "credits": {"name": "Credits", "type": "TOracleDataSet"}, "creditsid": {"name": "CreditsID", "type": "TFloatField"}, "creditscontractno": {"name": "CreditsCONTRACTNO", "type": "TStringField"}, "creditscustname": {"name": "CreditsCUSTNAME", "type": "TStringField"}, "creditsaccno": {"name": "CreditsACCNO", "type": "TStringField"}, "creditsclosedate": {"name": "CreditsCLOSEDATE", "type": "TDateTimeField"}, "creditsopendate": {"name": "CreditsOPENDATE", "type": "TDateTimeField"}, "creditsval_name": {"name": "CreditsVAL_NAME", "type": "TStringField"}, "creditscreditamount": {"name": "CreditsCREDITAMOUNT", "type": "TFloatField"}, "creditsamountflatkv": {"name": "CreditsAMOUNTFLATKV", "type": "TFloatField"}, "creditsbuildingno": {"name": "CreditsBUILDINGNO", "type": "TStringField"}, "creditsblokno": {"name": "CreditsBLOKNO", "type": "TStringField"}, "creditsflatno": {"name": "CreditsFLATNO", "type": "TStringField"}, "creditsrest": {"name": "CreditsREST", "type": "TFloatField"}, "creditspayamt": {"name": "CreditsPAYAMT", "type": "TFloatField"}, "creditsstatus": {"name": "CreditsSTATUS", "type": "TFloatField"}, "creditsbranchid": {"name": "CreditsBRANCHID", "type": "TFloatField"}, "creditsusid": {"name": "CreditsUSID", "type": "TFloatField"}, "creditscompanyid": {"name": "CreditsCOMPANYID", "type": "TFloatField"}, "creditsbuildingid": {"name": "CreditsBUILDINGID", "type": "TFloatField"}, "creditsflatid": {"name": "CreditsFLATID", "type": "TFloatField"}, "creditpurpose": {"name": "CreditPurpose", "type": "TOracleDataSet"}, "creditpurposedatsrc": {"name": "CreditPurposeDatSrc", "type": "TDataSource"}, "cc_general": {"name": "CC_GENERAL", "type": "TOraclePackage"}, "componies": {"name": "Componies", "type": "TOracleDataSet"}, "componiescomp_name": {"name": "ComponiesCOMP_NAME", "type": "TStringField"}, "componiesdatscr": {"name": "ComponiesDatScr", "type": "TDataSource"}, "buildingsdatsrc": {"name": "buildingsDatSrc", "type": "TDataSource"}, "buildings": {"name": "buildings", "type": "TOracleDataSet"}, "buildingsid": {"name": "buildingsID", "type": "TFloatField"}, "buildingsbld_name": {"name": "buildingsBLD_NAME", "type": "TStringField"}, "buildingscomp_id": {"name": "buildingsCOMP_ID", "type": "TFloatField"}, "flatsdatsrc": {"name": "FlatsDatSrc", "type": "TDataSource"}, "flats": {"name": "Flats", "type": "TOracleDataSet"}, "flatsid": {"name": "FlatsID", "type": "TFloatField"}, "flatsflatnumber": {"name": "FlatsFLATNUMBER", "type": "TStringField"}, "flatsbld_id": {"name": "FlatsBLD_ID", "type": "TFloatField"}, "users": {"name": "Users", "type": "TOracleDataSet"}, "usersid": {"name": "UsersID", "type": "TFloatField"}, "usersname": {"name": "UsersNAME", "type": "TStringField"}, "usersdatsrc": {"name": "UsersDatSrc", "type": "TDataSource"}, "creditpurposecontnum": {"name": "CreditPurposeCONTNUM", "type": "TStringField"}, "creditpurposebuyer": {"name": "CreditPurposeBUYER", "type": "TFloatField"}, "creditpurposeaccid": {"name": "CreditPurposeACCID", "type": "TFloatField"}, "creditpurposebranchid": {"name": "CreditPurposeBRANCHID", "type": "TFloatField"}, "creditpurposeflatid": {"name": "CreditPurposeFLATID", "type": "TFloatField"}, "creditpurposecontcur": {"name": "CreditPurposeCONTCUR", "type": "TFloatField"}, "creditpurposecontamount": {"name": "CreditPurposeCONTAMOUNT", "type": "TFloatField"}, "creditpurposeopendate": {"name": "CreditPurposeOPENDATE", "type": "TDateTimeField"}, "creditpurposeexpdate": {"name": "CreditPurposeEXPDATE", "type": "TDateTimeField"}, "creditpurposeclosedate": {"name": "CreditPurposeCLOSEDATE", "type": "TDateTimeField"}, "creditpurposeinterestrate": {"name": "CreditPurposeINTERESTRATE", "type": "TFloatField"}, "creditpurposeinitialamount": {"name": "CreditPurposeINITIALAMOUNT", "type": "TFloatField"}, "creditpurposeuserid": {"name": "CreditPurposeUSERID", "type": "TFloatField"}, "creditpurposedueinterestrate": {"name": "CreditPurposeDUEINTERESTRATE", "type": "TFloatField"}, "componiesid": {"name": "ComponiesID", "type": "TIntegerField"}, "accounts": {"name": "Accounts", "type": "TOracleDataSet"}, "accountsid": {"name": "AccountsID", "type": "TFloatField"}, "accountsname": {"name": "AccountsNAME", "type": "TStringField"}, "accountsacc_no": {"name": "AccountsACC_NO", "type": "TStringField"}, "accountsdatsrc": {"name": "AccountsDatSrc", "type": "TDataSource"}}, {});
  U.init(async () => {
    U.var_("DatModConstruction", null, "TDatModConstruction");
  });
  U.method("TDatModConstruction", "DataModuleCreate", async function DataModuleCreate(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mcall((await $.v(C, "Customers")), "Open", []);
  await $.mcall((await $.v(C, "CreditPurpose")), "Open", []);
  await $.mcall((await $.v(C, "Valutes")), "Open", []);
  await $.mcall((await $.v(C, "Filials")), "Open", []);
  await $.mcall((await $.v(C, "Componies")), "open", []);
  await $.mcall((await $.v(C, "buildings")), "open", []);
  await $.mcall((await $.v(C, "Flats")), "open", []);
  await $.mcall((await $.v(C, "Users")), "Open", []);
  await $.mcall((await $.v(C, "Accounts")), "open", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TDatModConstruction", "CreditPurposeApplyRecord", async function CreditPurposeApplyRecord(Self, p0, p1, p2, p3) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "action": $.copyArg(p1), "applied": $.asRef(p2), "newrowid": $.asRef(p3), result: undefined, "contnum": '', "buyer": 0, "accid": 0, "branchid": 0, "contcur": 0, "flatid": 0, "contamount": 0, "opendate": 0, "expdate": 0, "closedate": 0, "interestrate": 0, "initialamount": 0, "dueinterestrate": 0, "result": 0};
  await $.fixArgs(L0, ["sender", "action"]);
  L0["result"] = 0;
  {
    const $t1 = L0["sender"];
    await $.wset([$t1], "ContNum", (await $.mv((await $.wcall([$t1], "FieldByName", ["ContNum"], C)), "AsString")), { get: async () => L0["contnum"], set: async (v) => { L0["contnum"] = v; }, local: true });
    await $.wset([$t1], "Buyer", (await $.mv((await $.wcall([$t1], "FieldByName", ["Buyer"], C)), "Asinteger")), { get: async () => L0["buyer"], set: async (v) => { L0["buyer"] = v; }, local: true });
    await $.wset([$t1], "AccID", (await $.mv((await $.wcall([$t1], "FieldByName", ["AccID"], C)), "Asinteger")), { get: async () => L0["accid"], set: async (v) => { L0["accid"] = v; }, local: true });
    await $.wset([$t1], "BranchID", (await $.mv((await $.wcall([$t1], "FieldByName", ["BranchID"], C)), "Asinteger")), { get: async () => L0["branchid"], set: async (v) => { L0["branchid"] = v; }, local: true });
    await $.wset([$t1], "FlatID", (await $.mv((await $.wcall([$t1], "FieldByName", ["FlatID"], C)), "Asinteger")), { get: async () => L0["flatid"], set: async (v) => { L0["flatid"] = v; }, local: true });
    await $.wset([$t1], "contcur", (await $.mv((await $.wcall([$t1], "FieldByName", ["contcur"], C)), "Asinteger")), { get: async () => L0["contcur"], set: async (v) => { L0["contcur"] = v; }, local: true });
    await $.wset([$t1], "ContAmount", (await $.mv((await $.wcall([$t1], "FieldByName", ["ContAmount"], C)), "AsFloat")), { get: async () => L0["contamount"], set: async (v) => { L0["contamount"] = v; }, local: true });
    await $.wset([$t1], "opendate", (await $.mv((await $.wcall([$t1], "FieldByName", ["opendate"], C)), "asdatetime")), { get: async () => L0["opendate"], set: async (v) => { L0["opendate"] = v; }, local: true });
    await $.wset([$t1], "ExpDate", (await $.mv((await $.wcall([$t1], "FieldByName", ["ExpDate"], C)), "asdatetime")), { get: async () => L0["expdate"], set: async (v) => { L0["expdate"] = v; }, local: true });
    await $.wset([$t1], "closedate", (await $.mv((await $.wcall([$t1], "FieldByName", ["closedate"], C)), "asdatetime")), { get: async () => L0["closedate"], set: async (v) => { L0["closedate"] = v; }, local: true });
    await $.wset([$t1], "interestrate", (await $.mv((await $.wcall([$t1], "FieldByName", ["interestrate"], C)), "asinteger")), { get: async () => L0["interestrate"], set: async (v) => { L0["interestrate"] = v; }, local: true });
    await $.wset([$t1], "InitialAmount", (await $.mv((await $.wcall([$t1], "FieldByName", ["InitialAmount"], C)), "AsFloat")), { get: async () => L0["initialamount"], set: async (v) => { L0["initialamount"] = v; }, local: true });
    await $.wset([$t1], "DUEINTERESTRATE", (await $.mv((await $.wcall([$t1], "FieldByName", ["DUEINTERESTRATE"], C)), "AsFloat")), { get: async () => L0["dueinterestrate"], set: async (v) => { L0["dueinterestrate"] = v; }, local: true });
  }
  { const $t2 = L0["action"];
    if ($.eq($t2, "I")) {
      {
        const $t3 = (await $.v(C, "CC_GENERAL"));
        await $.wset([$t3], "Result", (await $.wcall([$t3], "CallIntegerFunction", ["add_Contract", ["p_ContNum", (await $.wv([$t3], "ContNum", { get: async () => L0["contnum"], set: async (v) => { L0["contnum"] = v; }, local: true }, false)), "p_Buyer", (await $.wv([$t3], "Buyer", { get: async () => L0["buyer"], set: async (v) => { L0["buyer"] = v; }, local: true }, false)), "p_AccID", (await $.wv([$t3], "AccID", { get: async () => L0["accid"], set: async (v) => { L0["accid"] = v; }, local: true }, false)), "p_BranchID", (await $.wv([$t3], "BranchID", { get: async () => L0["branchid"], set: async (v) => { L0["branchid"] = v; }, local: true }, false)), "p_FlatID", (await $.wv([$t3], "FlatID", { get: async () => L0["flatid"], set: async (v) => { L0["flatid"] = v; }, local: true }, false)), "p_contcur", (await $.wv([$t3], "contcur", { get: async () => L0["contcur"], set: async (v) => { L0["contcur"] = v; }, local: true }, false)), "p_ContAmount", (await $.wv([$t3], "ContAmount", { get: async () => L0["contamount"], set: async (v) => { L0["contamount"] = v; }, local: true }, false)), "p_opendate", (await $.wv([$t3], "opendate", { get: async () => L0["opendate"], set: async (v) => { L0["opendate"] = v; }, local: true }, false)), "p_ExpDate", (await $.wv([$t3], "ExpDate", { get: async () => L0["expdate"], set: async (v) => { L0["expdate"] = v; }, local: true }, false)), "p_closedate", (await $.wv([$t3], "closedate", { get: async () => L0["closedate"], set: async (v) => { L0["closedate"] = v; }, local: true }, false)), "p_interestrate", 0, "p_InitialAmount", (await $.wv([$t3], "InitialAmount", { get: async () => L0["initialamount"], set: async (v) => { L0["initialamount"] = v; }, local: true }, false)), "p_DUEINTERESTRATE", (await $.wv([$t3], "DUEINTERESTRATE", { get: async () => L0["dueinterestrate"], set: async (v) => { L0["dueinterestrate"] = v; }, local: true }, false))]], C)), { get: async () => L0["result"], set: async (v) => { L0["result"] = v; }, local: true });
      }
      await L0["applied"].set(true);
    }
    else if ($.eq($t2, "U")) {
      {
        const $t4 = (await $.v(C, "CC_GENERAL"));
        await $.wset([$t4], "Result", (await $.wcall([$t4], "CallIntegerFunction", ["upd_Contracts", ["p_ID", (await $.mv((await $.mcall((await $.wv([$t4], "Credits", C, false)), "FieldByName", ["ID"])), "AsInteger")), "p_ContNum", (await $.wv([$t4], "ContNum", { get: async () => L0["contnum"], set: async (v) => { L0["contnum"] = v; }, local: true }, false)), "p_Buyer", (await $.wv([$t4], "Buyer", { get: async () => L0["buyer"], set: async (v) => { L0["buyer"] = v; }, local: true }, false)), "p_AccID", (await $.wv([$t4], "AccID", { get: async () => L0["accid"], set: async (v) => { L0["accid"] = v; }, local: true }, false)), "p_BranchID", (await $.wv([$t4], "BranchID", { get: async () => L0["branchid"], set: async (v) => { L0["branchid"] = v; }, local: true }, false)), "p_FlatID", (await $.wv([$t4], "FlatID", { get: async () => L0["flatid"], set: async (v) => { L0["flatid"] = v; }, local: true }, false)), "p_ContAmount", (await $.wv([$t4], "ContAmount", { get: async () => L0["contamount"], set: async (v) => { L0["contamount"] = v; }, local: true }, false)), "p_opendate", (await $.wv([$t4], "opendate", { get: async () => L0["opendate"], set: async (v) => { L0["opendate"] = v; }, local: true }, false)), "p_ExpDate", (await $.wv([$t4], "ExpDate", { get: async () => L0["expdate"], set: async (v) => { L0["expdate"] = v; }, local: true }, false)), "p_closedate", (await $.wv([$t4], "closedate", { get: async () => L0["closedate"], set: async (v) => { L0["closedate"] = v; }, local: true }, false)), "p_interestrate", 0, "p_InitialAmount", (await $.wv([$t4], "InitialAmount", { get: async () => L0["initialamount"], set: async (v) => { L0["initialamount"] = v; }, local: true }, false)), "p_DUEINTERESTRATE", (await $.wv([$t4], "DUEINTERESTRATE", { get: async () => L0["dueinterestrate"], set: async (v) => { L0["dueinterestrate"] = v; }, local: true }, false))]], C)), { get: async () => L0["result"], set: async (v) => { L0["result"] = v; }, local: true });
      }
      await L0["applied"].set(true);
    }
  }
  return L0.result;
}, {"params": ["Sender", "Action", "Applied", "NewRowId"], "kind": "procedure", "ptypes": ["TOracleDataSet", "Char", "Boolean", "String"]});
  U.method("TDatModConstruction", "DataModuleDestroy", async function DataModuleDestroy(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mcall((await $.v(C, "Customers")), "closeall", []);
  await $.mcall((await $.v(C, "CreditPurpose")), "closeall", []);
  await $.mcall((await $.v(C, "Valutes")), "closeall", []);
  await $.mcall((await $.v(C, "Filials")), "closeall", []);
  await $.mcall((await $.v(C, "Componies")), "closeall", []);
  await $.mcall((await $.v(C, "buildings")), "closeall", []);
  await $.mcall((await $.v(C, "Flats")), "closeall", []);
  await $.mcall((await $.v(C, "Users")), "closeall", []);
  await $.mcall((await $.v(C, "Accounts")), "closeall", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  return U;
}
