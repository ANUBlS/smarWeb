// Generated from DatModConstimpl.pas by pas2js — do not edit by hand; regenerate instead.
/* eslint-disable */
// @ts-nocheck

export default function define($) {
  const U = $.unit("DatModConstimpl", ["Windows", "Messages", "SysUtils", "Classes", "Graphics", "Controls", "Forms", "Dialogs", "Oracle", "Db", "OracleData", "sboapiDataModuleImpl"]);
  const C = [U];
  U.defClass("TDatModConstr", "TDataModule", {"pledgetypesdatsrc": {"name": "pledgetypesDatSrc", "type": "TDataSource"}, "pledgetypes": {"name": "pledgetypes", "type": "TOracleDataSet"}, "pledgetypesid": {"name": "pledgetypesID", "type": "TFloatField"}, "pledgetypestype": {"name": "pledgetypesTYPE", "type": "TStringField"}, "customersdatsur": {"name": "CustomersDatSur", "type": "TDataSource"}, "customers": {"name": "Customers", "type": "TOracleDataSet"}, "customersid": {"name": "CustomersID", "type": "TFloatField"}, "valutesdatsrc": {"name": "ValutesDatSrc", "type": "TDataSource"}, "valutes": {"name": "Valutes", "type": "TOracleDataSet"}, "filialsdatsrc": {"name": "FilialsDatSrc", "type": "TDataSource"}, "filials": {"name": "Filials", "type": "TOracleDataSet"}, "filialsid": {"name": "FilialsID", "type": "TFloatField"}, "creditsdatsrc": {"name": "CreditsDatSrc", "type": "TDataSource"}, "credits": {"name": "Credits", "type": "TOracleDataSet"}, "creditsid": {"name": "CreditsID", "type": "TFloatField"}, "creditscontractno": {"name": "CreditsCONTRACTNO", "type": "TStringField"}, "creditscustname": {"name": "CreditsCUSTNAME", "type": "TStringField"}, "creditsaccno": {"name": "CreditsACCNO", "type": "TStringField"}, "creditsclosedate": {"name": "CreditsCLOSEDATE", "type": "TDateTimeField"}, "creditsopendate": {"name": "CreditsOPENDATE", "type": "TDateTimeField"}, "creditsval_name": {"name": "CreditsVAL_NAME", "type": "TStringField"}, "creditscreditamount": {"name": "CreditsCREDITAMOUNT", "type": "TFloatField"}, "creditsamountflatkv": {"name": "CreditsAMOUNTFLATKV", "type": "TFloatField"}, "creditsbuildingno": {"name": "CreditsBUILDINGNO", "type": "TStringField"}, "creditsblokno": {"name": "CreditsBLOKNO", "type": "TStringField"}, "creditsflatno": {"name": "CreditsFLATNO", "type": "TStringField"}, "creditsrest": {"name": "CreditsREST", "type": "TFloatField"}, "creditspayamt": {"name": "CreditsPAYAMT", "type": "TFloatField"}, "creditsstatus": {"name": "CreditsSTATUS", "type": "TFloatField"}, "creditsbranchid": {"name": "CreditsBRANCHID", "type": "TFloatField"}, "creditsusid": {"name": "CreditsUSID", "type": "TFloatField"}, "creditscompanyid": {"name": "CreditsCOMPANYID", "type": "TFloatField"}, "creditsbuildingid": {"name": "CreditsBUILDINGID", "type": "TFloatField"}, "creditsflatid": {"name": "CreditsFLATID", "type": "TFloatField"}, "creditpurposedatsrc": {"name": "CreditPurposeDatSrc", "type": "TDataSource"}, "cc_general": {"name": "CC_GENERAL", "type": "TOraclePackage"}, "componies": {"name": "Componies", "type": "TOracleDataSet"}, "componiesdatscr": {"name": "ComponiesDatScr", "type": "TDataSource"}, "buildingsdatsrc": {"name": "buildingsDatSrc", "type": "TDataSource"}, "buildings": {"name": "buildings", "type": "TOracleDataSet"}, "buildingsid": {"name": "buildingsID", "type": "TFloatField"}, "buildingscomp_id": {"name": "buildingsCOMP_ID", "type": "TFloatField"}, "flatsdatsrc": {"name": "FlatsDatSrc", "type": "TDataSource"}, "flats": {"name": "Flats", "type": "TOracleDataSet"}, "flatsid": {"name": "FlatsID", "type": "TFloatField"}, "flatsbld_id": {"name": "FlatsBLD_ID", "type": "TFloatField"}, "users": {"name": "Users", "type": "TOracleDataSet"}, "usersid": {"name": "UsersID", "type": "TFloatField"}, "usersdatsrc": {"name": "UsersDatSrc", "type": "TDataSource"}, "componiesid": {"name": "ComponiesID", "type": "TIntegerField"}, "accounts": {"name": "Accounts", "type": "TOracleDataSet"}, "accountsid": {"name": "AccountsID", "type": "TFloatField"}, "accountsdatsrc": {"name": "AccountsDatSrc", "type": "TDataSource"}, "filialsname": {"name": "FilialsNAME", "type": "TWideStringField"}, "filialskod_filial": {"name": "FilialsKOD_FILIAL", "type": "TWideStringField"}, "customersbyr_name": {"name": "CustomersBYR_NAME", "type": "TWideStringField"}, "componiescomp_name": {"name": "ComponiesCOMP_NAME", "type": "TWideStringField"}, "buildingsbld_name": {"name": "buildingsBLD_NAME", "type": "TWideStringField"}, "flatsflatnumber": {"name": "FlatsFLATNUMBER", "type": "TWideStringField"}, "usersname": {"name": "UsersNAME", "type": "TWideStringField"}, "accountsname": {"name": "AccountsNAME", "type": "TWideStringField"}, "accountsacc_no": {"name": "AccountsACC_NO", "type": "TWideStringField"}, "creditpurpose": {"name": "CreditPurpose", "type": "TOracleDataSet"}, "creditpurposecontnum": {"name": "CreditPurposeCONTNUM", "type": "TWideStringField"}, "creditpurposebuyer": {"name": "CreditPurposeBUYER", "type": "TFloatField"}, "creditpurposeaccid": {"name": "CreditPurposeACCID", "type": "TFloatField"}, "creditpurposebranchid": {"name": "CreditPurposeBRANCHID", "type": "TFloatField"}, "creditpurposeflatid": {"name": "CreditPurposeFLATID", "type": "TFloatField"}, "creditpurposecontcur": {"name": "CreditPurposeCONTCUR", "type": "TFloatField"}, "creditpurposecontamount": {"name": "CreditPurposeCONTAMOUNT", "type": "TFloatField"}, "creditpurposeopendate": {"name": "CreditPurposeOPENDATE", "type": "TDateTimeField"}, "creditpurposeexpdate": {"name": "CreditPurposeEXPDATE", "type": "TDateTimeField"}, "creditpurposeclosedate": {"name": "CreditPurposeCLOSEDATE", "type": "TDateTimeField"}, "creditpurposeinterestrate": {"name": "CreditPurposeINTERESTRATE", "type": "TFloatField"}, "creditpurposeinitialamount": {"name": "CreditPurposeINITIALAMOUNT", "type": "TFloatField"}, "creditpurposeuserid": {"name": "CreditPurposeUSERID", "type": "TFloatField"}, "creditpurposedueinterestrate": {"name": "CreditPurposeDUEINTERESTRATE", "type": "TFloatField"}, "creditpurposeperiodcontracts": {"name": "CreditPurposePeriodContracts", "type": "TFloatField"}, "creditpurposesquaremetramount": {"name": "CreditPurposeSQUAREMETRAMOUNT", "type": "TFloatField"}, "creditpurposefullammount": {"name": "CreditPurposefullammount", "type": "TFloatField"}, "creditpurposearea": {"name": "CreditPurposeAREA", "type": "TFloatField"}, "creditpurposemonthspay": {"name": "CreditPurposemonthspay", "type": "TFloatField"}, "creditpurposerest": {"name": "CreditPurposeREST", "type": "TFloatField"}, "creditpurposerestt": {"name": "CreditPurposerestt", "type": "TFloatField"}, "creditpurposebuyarea": {"name": "CreditPurposebuyarea", "type": "TFloatField"}, "creditpurposeprice1": {"name": "CreditPurposePRICE1", "type": "TFloatField"}, "creditpurposenote": {"name": "CreditPurposeNOTE", "type": "TFloatField"}, "sysdat": {"name": "SysDat", "type": "TOracleDataSet"}, "sysdattek_dat": {"name": "SysDatTEK_DAT", "type": "TDateTimeField"}, "sysdatpred_dat": {"name": "SysDatPRED_DAT", "type": "TDateTimeField"}, "sysdatarc_day": {"name": "SysDatARC_DAY", "type": "TDateTimeField"}, "sysdatclose": {"name": "SysDatCLOSE", "type": "TIntegerField"}, "oracledataset1": {"name": "OracleDataSet1", "type": "TOracleDataSet"}, "datasource1": {"name": "DataSource1", "type": "TDataSource"}, "cc_settings": {"name": "cc_settings", "type": "TOracleDataSet"}, "cc_settingsacccur": {"name": "cc_settingsACCCUR", "type": "TFloatField"}, "cc_settingsaccbalcn": {"name": "cc_settingsACCBALCN", "type": "TFloatField"}, "cc_settingsacccust": {"name": "cc_settingsACCCUST", "type": "TFloatField"}, "cc_settingsaccbranch": {"name": "cc_settingsACCBRANCH", "type": "TFloatField"}, "cc_settingsaccsymb": {"name": "cc_settingsACCSYMB", "type": "TWideStringField"}, "sbop": {"name": "SBOP", "type": "TOraclePackage"}, "cc_bookmarkdataset": {"name": "cc_bookmarkDataSet", "type": "TOracleDataSet"}, "templates": {"name": "Templates", "type": "TOracleDataSet"}, "templatesid": {"name": "TemplatesID", "type": "TFloatField"}, "templatesname": {"name": "TemplatesNAME", "type": "TWideStringField"}, "templatespath": {"name": "TemplatesPATH", "type": "TWideStringField"}, "templatescusttype": {"name": "TemplatesCUSTTYPE", "type": "TIntegerField"}, "dstemplates": {"name": "DSTemplates", "type": "TDataSource"}, "replacecustdataset": {"name": "ReplaceCustDataSet", "type": "TOracleDataSet"}, "creditpurposepricecred": {"name": "CreditPurposePRICECRED", "type": "TFloatField"}}, {});
  U.init(async () => {
    U.var_("DatModConstr", null, "TDatModConstr");
  });
  U.method("TDatModConstr", "CopyOfCreditPurposeCalcFields", async function CopyOfCreditPurposeCalcFields(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"dataset": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["dataset"]);
  {
    const $t1 = L0["dataset"];
    await $.mset((await $.wcall([$t1], "FieldByName", ["fullammount"], C)), "Asfloat", 0);
    await $.mset((await $.wcall([$t1], "FieldByName", ["PeriodContracts"], C)), "AsInteger", (await $.wcall([$t1], "trunc", [(await $.mcall((await $.wv([$t1], "CC_GENERAL", C, false)), "CallIntegerFunction", ["GetPeriod", ["bdat", (await $.mv((await $.wcall([$t1], "FieldByname", ["opendate"], C)), "AsDateTime")), "edat", (await $.mv((await $.wcall([$t1], "FieldByname", ["expdate"], C)), "AsDateTime"))]]))], C)));
    await $.mset((await $.wcall([$t1], "FieldByName", ["fullammount"], C)), "Asfloat", $.mul((await $.mv((await $.wcall([$t1], "FieldByName", ["AREA"], C)), "Asfloat")), (await $.mv((await $.wcall([$t1], "FieldByName", ["SQUAREMETRAMOUNT"], C)), "Asfloat"))));
    if ($.truthy($.gt((await $.mv((await $.wcall([$t1], "FieldByName", ["fullammount"], C)), "Asfloat")), 0))) {
      await $.mset((await $.wcall([$t1], "FieldByName", ["restt"], C)), "Asfloat", $.sub((await $.mv((await $.wcall([$t1], "FieldByName", ["fullammount"], C)), "Asfloat")), (await $.mv((await $.wcall([$t1], "FieldByName", ["INITIALAMOUNT"], C)), "Asfloat"))));
    }
    if ($.truthy((await $.and_(($.gt((await $.mv((await $.wcall([$t1], "FieldByName", ["INITIALAMOUNT"], C)), "Asfloat")), 0)), async () => ($.gt((await $.mv((await $.wcall([$t1], "FieldByName", ["price1"], C)), "Asfloat")), 0)))))) {
      await $.mset((await $.wcall([$t1], "FieldByName", ["buyarea"], C)), "Asfloat", $.fdiv((await $.mv((await $.wcall([$t1], "FieldByName", ["INITIALAMOUNT"], C)), "Asfloat")), (await $.mv((await $.wcall([$t1], "FieldByName", ["price1"], C)), "Asfloat"))));
    } else {
      await $.mset((await $.wcall([$t1], "FieldByName", ["buyarea"], C)), "Asfloat", 0);
    }
    if ($.truthy($.gt((await $.mv((await $.wcall([$t1], "FieldByName", ["PeriodContracts"], C)), "Asfloat")), 0))) {
      await $.mset((await $.wcall([$t1], "FieldByName", ["monthspay"], C)), "AsFloat", $.fdiv((await $.mv((await $.wcall([$t1], "FieldByName", ["restt"], C)), "AsFloat")), (await $.mv((await $.wcall([$t1], "FieldByName", ["PeriodContracts"], C)), "AsFloat"))));
    } else {
      await $.mset((await $.wcall([$t1], "FieldByName", ["monthspay"], C)), "Asfloat", 0);
    }
  }
  return L0.result;
}, {"params": ["DataSet"], "kind": "procedure", "ptypes": ["TDataSet"]});
  U.method("TDatModConstr", "CreditPurpose555ApplyRecord", async function CreditPurpose555ApplyRecord(Self, p0, p1, p2, p3) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "action": $.copyArg(p1), "applied": $.asRef(p2), "newrowid": $.asRef(p3), result: undefined, "contnum": '', "buyer": 0, "accid": 0, "branchid": 0, "contcur": 0, "flatid": 0, "contamount": 0, "opendate": 0, "expdate": 0, "closedate": 0, "interestrate": 0, "initialamount": 0, "dueinterestrate": 0, "result": 0, "squaremetramount": 0, "note": 0, "monthpay": 0};
  await $.fixArgs(L0, ["sender", "action"]);
  L0["result"] = 0;
  {
    const $t2 = L0["sender"];
    await $.wset([$t2], "ContNum", (await $.mv((await $.wcall([$t2], "FieldByName", ["ContNum"], C)), "AsString")), { get: async () => L0["contnum"], set: async (v) => { L0["contnum"] = v; }, local: true });
    await $.wset([$t2], "Buyer", (await $.mv((await $.wcall([$t2], "FieldByName", ["Buyer"], C)), "Asinteger")), { get: async () => L0["buyer"], set: async (v) => { L0["buyer"] = v; }, local: true });
    await $.wset([$t2], "AccID", (await $.mv((await $.wcall([$t2], "FieldByName", ["AccID"], C)), "Asinteger")), { get: async () => L0["accid"], set: async (v) => { L0["accid"] = v; }, local: true });
    await $.wset([$t2], "BranchID", (await $.mv((await $.wcall([$t2], "FieldByName", ["BranchID"], C)), "Asinteger")), { get: async () => L0["branchid"], set: async (v) => { L0["branchid"] = v; }, local: true });
    await $.wset([$t2], "FlatID", (await $.mv((await $.wcall([$t2], "FieldByName", ["FlatID"], C)), "Asinteger")), { get: async () => L0["flatid"], set: async (v) => { L0["flatid"] = v; }, local: true });
    await $.wset([$t2], "contcur", (await $.mv((await $.wcall([$t2], "FieldByName", ["contcur"], C)), "Asinteger")), { get: async () => L0["contcur"], set: async (v) => { L0["contcur"] = v; }, local: true });
    await $.wset([$t2], "ContAmount", (await $.mv((await $.wcall([$t2], "FieldByName", ["ContAmount"], C)), "AsFloat")), { get: async () => L0["contamount"], set: async (v) => { L0["contamount"] = v; }, local: true });
    await $.wset([$t2], "opendate", (await $.mv((await $.wcall([$t2], "FieldByName", ["opendate"], C)), "asdatetime")), { get: async () => L0["opendate"], set: async (v) => { L0["opendate"] = v; }, local: true });
    await $.wset([$t2], "ExpDate", (await $.mv((await $.wcall([$t2], "FieldByName", ["ExpDate"], C)), "asdatetime")), { get: async () => L0["expdate"], set: async (v) => { L0["expdate"] = v; }, local: true });
    await $.wset([$t2], "closedate", (await $.mv((await $.wcall([$t2], "FieldByName", ["closedate"], C)), "asdatetime")), { get: async () => L0["closedate"], set: async (v) => { L0["closedate"] = v; }, local: true });
    await $.wset([$t2], "interestrate", (await $.mv((await $.wcall([$t2], "FieldByName", ["interestrate"], C)), "asinteger")), { get: async () => L0["interestrate"], set: async (v) => { L0["interestrate"] = v; }, local: true });
    await $.wset([$t2], "InitialAmount", (await $.mv((await $.wcall([$t2], "FieldByName", ["InitialAmount"], C)), "AsFloat")), { get: async () => L0["initialamount"], set: async (v) => { L0["initialamount"] = v; }, local: true });
    await $.wset([$t2], "DUEINTERESTRATE", (await $.mv((await $.wcall([$t2], "FieldByName", ["DUEINTERESTRATE"], C)), "AsFloat")), { get: async () => L0["dueinterestrate"], set: async (v) => { L0["dueinterestrate"] = v; }, local: true });
    await $.wset([$t2], "SQUAREMETRAMOUNT", (await $.mv((await $.wcall([$t2], "FieldByName", ["SQUAREMETRAMOUNT"], C)), "AsFloat")), { get: async () => L0["squaremetramount"], set: async (v) => { L0["squaremetramount"] = v; }, local: true });
    await $.wset([$t2], "note", (await $.mv((await $.wcall([$t2], "FieldByName", ["Note"], C)), "AsInteger")), { get: async () => L0["note"], set: async (v) => { L0["note"] = v; }, local: true });
    await $.wset([$t2], "monthpay", (await $.mv((await $.wcall([$t2], "FieldByName", ["monthspay"], C)), "AsFloat")), { get: async () => L0["monthpay"], set: async (v) => { L0["monthpay"] = v; }, local: true });
  }
  { const $t3 = L0["action"];
    if ($.eq($t3, "I")) {
      {
        const $t4 = (await $.v(C, "CC_GENERAL"));
        await $.wset([$t4], "Result", (await $.wcall([$t4], "CallIntegerFunction", ["add_Contract", ["p_ContNum", (await $.wv([$t4], "ContNum", { get: async () => L0["contnum"], set: async (v) => { L0["contnum"] = v; }, local: true }, false)), "p_Buyer", (await $.wv([$t4], "Buyer", { get: async () => L0["buyer"], set: async (v) => { L0["buyer"] = v; }, local: true }, false)), "p_AccID", (await $.wv([$t4], "AccID", { get: async () => L0["accid"], set: async (v) => { L0["accid"] = v; }, local: true }, false)), "p_BranchID", (await $.wv([$t4], "BranchID", { get: async () => L0["branchid"], set: async (v) => { L0["branchid"] = v; }, local: true }, false)), "p_FlatID", (await $.wv([$t4], "FlatID", { get: async () => L0["flatid"], set: async (v) => { L0["flatid"] = v; }, local: true }, false)), "p_contcur", (await $.wv([$t4], "contcur", { get: async () => L0["contcur"], set: async (v) => { L0["contcur"] = v; }, local: true }, false)), "p_ContAmount", (await $.wv([$t4], "ContAmount", { get: async () => L0["contamount"], set: async (v) => { L0["contamount"] = v; }, local: true }, false)), "p_opendate", (await $.wv([$t4], "opendate", { get: async () => L0["opendate"], set: async (v) => { L0["opendate"] = v; }, local: true }, false)), "p_ExpDate", (await $.wv([$t4], "ExpDate", { get: async () => L0["expdate"], set: async (v) => { L0["expdate"] = v; }, local: true }, false)), "p_closedate", (await $.wv([$t4], "closedate", { get: async () => L0["closedate"], set: async (v) => { L0["closedate"] = v; }, local: true }, false)), "p_interestrate", 0, "p_InitialAmount", (await $.wv([$t4], "InitialAmount", { get: async () => L0["initialamount"], set: async (v) => { L0["initialamount"] = v; }, local: true }, false)), "p_DUEINTERESTRATE", (await $.wv([$t4], "DUEINTERESTRATE", { get: async () => L0["dueinterestrate"], set: async (v) => { L0["dueinterestrate"] = v; }, local: true }, false)), "p_SQUAREMETRAMOUNT", (await $.wv([$t4], "SQUAREMETRAMOUNT", { get: async () => L0["squaremetramount"], set: async (v) => { L0["squaremetramount"] = v; }, local: true }, false)), "p_note", (await $.wv([$t4], "note", { get: async () => L0["note"], set: async (v) => { L0["note"] = v; }, local: true }, false)), "p_monthpay", (await $.wv([$t4], "monthpay", { get: async () => L0["monthpay"], set: async (v) => { L0["monthpay"] = v; }, local: true }, false))]], C)), { get: async () => L0["result"], set: async (v) => { L0["result"] = v; }, local: true });
      }
      await L0["applied"].set(true);
    }
    else if ($.eq($t3, "U")) {
      {
        const $t5 = (await $.v(C, "CC_GENERAL"));
        await $.wset([$t5], "Result", (await $.wcall([$t5], "CallIntegerFunction", ["upd_Contracts", ["p_ID", (await $.mv((await $.mcall((await $.wv([$t5], "Credits", C, false)), "FieldByName", ["ID"])), "AsInteger")), "p_ContNum", (await $.wv([$t5], "ContNum", { get: async () => L0["contnum"], set: async (v) => { L0["contnum"] = v; }, local: true }, false)), "p_Buyer", (await $.wv([$t5], "Buyer", { get: async () => L0["buyer"], set: async (v) => { L0["buyer"] = v; }, local: true }, false)), "p_AccID", (await $.wv([$t5], "AccID", { get: async () => L0["accid"], set: async (v) => { L0["accid"] = v; }, local: true }, false)), "p_BranchID", (await $.wv([$t5], "BranchID", { get: async () => L0["branchid"], set: async (v) => { L0["branchid"] = v; }, local: true }, false)), "p_FlatID", (await $.wv([$t5], "FlatID", { get: async () => L0["flatid"], set: async (v) => { L0["flatid"] = v; }, local: true }, false)), "p_contcur", (await $.wv([$t5], "contcur", { get: async () => L0["contcur"], set: async (v) => { L0["contcur"] = v; }, local: true }, false)), "p_ContAmount", (await $.wv([$t5], "ContAmount", { get: async () => L0["contamount"], set: async (v) => { L0["contamount"] = v; }, local: true }, false)), "p_opendate", (await $.wv([$t5], "opendate", { get: async () => L0["opendate"], set: async (v) => { L0["opendate"] = v; }, local: true }, false)), "p_ExpDate", (await $.wv([$t5], "ExpDate", { get: async () => L0["expdate"], set: async (v) => { L0["expdate"] = v; }, local: true }, false)), "p_closedate", (await $.wv([$t5], "closedate", { get: async () => L0["closedate"], set: async (v) => { L0["closedate"] = v; }, local: true }, false)), "p_interestrate", 0, "p_InitialAmount", (await $.wv([$t5], "InitialAmount", { get: async () => L0["initialamount"], set: async (v) => { L0["initialamount"] = v; }, local: true }, false)), "p_DUEINTERESTRATE", (await $.wv([$t5], "DUEINTERESTRATE", { get: async () => L0["dueinterestrate"], set: async (v) => { L0["dueinterestrate"] = v; }, local: true }, false)), "p_SQUAREMETRAMOUNT", (await $.wv([$t5], "SQUAREMETRAMOUNT", { get: async () => L0["squaremetramount"], set: async (v) => { L0["squaremetramount"] = v; }, local: true }, false)), "p_note", (await $.wv([$t5], "note", { get: async () => L0["note"], set: async (v) => { L0["note"] = v; }, local: true }, false)), "p_monthpay", (await $.wv([$t5], "monthpay", { get: async () => L0["monthpay"], set: async (v) => { L0["monthpay"] = v; }, local: true }, false))]], C)), { get: async () => L0["result"], set: async (v) => { L0["result"] = v; }, local: true });
      }
      await L0["applied"].set(true);
    }
  }
  return L0.result;
}, {"params": ["Sender", "Action", "Applied", "NewRowId"], "kind": "procedure", "ptypes": ["TOracleDataSet", "Char", "Boolean", "String"]});
  U.method("TDatModConstr", "CreditPurpose555CalcFields", async function CreditPurpose555CalcFields(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"dataset": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["dataset"]);
  {
    const $t6 = L0["dataset"];
    await $.mset((await $.wcall([$t6], "FieldByName", ["fullammount"], C)), "Asfloat", 0);
    await $.mset((await $.wcall([$t6], "FieldByName", ["PeriodContracts"], C)), "AsInteger", (await $.wcall([$t6], "trunc", [(await $.mcall((await $.wv([$t6], "CC_GENERAL", C, false)), "CallIntegerFunction", ["GetPeriod", ["bdat", (await $.mv((await $.wcall([$t6], "FieldByname", ["opendate"], C)), "AsDateTime")), "edat", (await $.mv((await $.wcall([$t6], "FieldByname", ["expdate"], C)), "AsDateTime"))]]))], C)));
    await $.mset((await $.wcall([$t6], "FieldByName", ["fullammount"], C)), "Asfloat", $.mul((await $.mv((await $.wcall([$t6], "FieldByName", ["AREA"], C)), "Asfloat")), (await $.mv((await $.wcall([$t6], "FieldByName", ["SQUAREMETRAMOUNT"], C)), "Asfloat"))));
    if ($.truthy($.gt((await $.mv((await $.wcall([$t6], "FieldByName", ["fullammount"], C)), "Asfloat")), 0))) {
      await $.mset((await $.wcall([$t6], "FieldByName", ["restt"], C)), "Asfloat", $.sub((await $.mv((await $.wcall([$t6], "FieldByName", ["fullammount"], C)), "Asfloat")), (await $.mv((await $.wcall([$t6], "FieldByName", ["INITIALAMOUNT"], C)), "Asfloat"))));
    }
    if ($.truthy((await $.and_(($.gt((await $.mv((await $.wcall([$t6], "FieldByName", ["INITIALAMOUNT"], C)), "Asfloat")), 0)), async () => ($.gt((await $.mv((await $.wcall([$t6], "FieldByName", ["price1"], C)), "Asfloat")), 0)))))) {
      await $.mset((await $.wcall([$t6], "FieldByName", ["buyarea"], C)), "Asfloat", $.fdiv((await $.mv((await $.wcall([$t6], "FieldByName", ["INITIALAMOUNT"], C)), "Asfloat")), (await $.mv((await $.wcall([$t6], "FieldByName", ["price1"], C)), "Asfloat"))));
    } else {
      await $.mset((await $.wcall([$t6], "FieldByName", ["buyarea"], C)), "Asfloat", 0);
    }
    if ($.truthy($.gt((await $.mv((await $.wcall([$t6], "FieldByName", ["PeriodContracts"], C)), "Asfloat")), 0))) {
      await $.mset((await $.wcall([$t6], "FieldByName", ["monthspay"], C)), "AsFloat", $.fdiv((await $.mv((await $.wcall([$t6], "FieldByName", ["restt"], C)), "AsFloat")), (await $.mv((await $.wcall([$t6], "FieldByName", ["PeriodContracts"], C)), "AsFloat"))));
    } else {
      await $.mset((await $.wcall([$t6], "FieldByName", ["monthspay"], C)), "Asfloat", 0);
    }
  }
  return L0.result;
}, {"params": ["DataSet"], "kind": "procedure", "ptypes": ["TDataSet"]});
  U.method("TDatModConstr", "CreditPurposeApplyRecord", async function CreditPurposeApplyRecord(Self, p0, p1, p2, p3) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "action": $.copyArg(p1), "applied": $.asRef(p2), "newrowid": $.asRef(p3), result: undefined, "contnum": '', "buyer": 0, "accid": 0, "branchid": 0, "contcur": 0, "flatid": 0, "contamount": 0, "opendate": 0, "expdate": 0, "closedate": 0, "interestrate": 0, "initialamount": 0, "dueinterestrate": 0, "result": 0, "squaremetramount": 0, "note": 0, "monthpay": 0, "pricecred": 0};
  await $.fixArgs(L0, ["sender", "action"]);
  L0["result"] = 0;
  {
    const $t7 = L0["sender"];
    await $.wset([$t7], "ContNum", (await $.mv((await $.wcall([$t7], "FieldByName", ["ContNum"], C)), "AsString")), { get: async () => L0["contnum"], set: async (v) => { L0["contnum"] = v; }, local: true });
    await $.wset([$t7], "Buyer", (await $.mv((await $.wcall([$t7], "FieldByName", ["Buyer"], C)), "Asinteger")), { get: async () => L0["buyer"], set: async (v) => { L0["buyer"] = v; }, local: true });
    await $.wset([$t7], "AccID", (await $.mv((await $.wcall([$t7], "FieldByName", ["AccID"], C)), "Asinteger")), { get: async () => L0["accid"], set: async (v) => { L0["accid"] = v; }, local: true });
    await $.wset([$t7], "BranchID", (await $.mv((await $.wcall([$t7], "FieldByName", ["BranchID"], C)), "Asinteger")), { get: async () => L0["branchid"], set: async (v) => { L0["branchid"] = v; }, local: true });
    await $.wset([$t7], "FlatID", (await $.mv((await $.wcall([$t7], "FieldByName", ["FlatID"], C)), "Asinteger")), { get: async () => L0["flatid"], set: async (v) => { L0["flatid"] = v; }, local: true });
    await $.wset([$t7], "contcur", (await $.mv((await $.wcall([$t7], "FieldByName", ["contcur"], C)), "Asinteger")), { get: async () => L0["contcur"], set: async (v) => { L0["contcur"] = v; }, local: true });
    await $.wset([$t7], "ContAmount", (await $.mv((await $.wcall([$t7], "FieldByName", ["ContAmount"], C)), "AsFloat")), { get: async () => L0["contamount"], set: async (v) => { L0["contamount"] = v; }, local: true });
    await $.wset([$t7], "opendate", (await $.mv((await $.wcall([$t7], "FieldByName", ["opendate"], C)), "asdatetime")), { get: async () => L0["opendate"], set: async (v) => { L0["opendate"] = v; }, local: true });
    await $.wset([$t7], "ExpDate", (await $.mv((await $.wcall([$t7], "FieldByName", ["ExpDate"], C)), "asdatetime")), { get: async () => L0["expdate"], set: async (v) => { L0["expdate"] = v; }, local: true });
    await $.wset([$t7], "closedate", (await $.mv((await $.wcall([$t7], "FieldByName", ["closedate"], C)), "asdatetime")), { get: async () => L0["closedate"], set: async (v) => { L0["closedate"] = v; }, local: true });
    await $.wset([$t7], "interestrate", (await $.mv((await $.wcall([$t7], "FieldByName", ["interestrate"], C)), "asinteger")), { get: async () => L0["interestrate"], set: async (v) => { L0["interestrate"] = v; }, local: true });
    await $.wset([$t7], "InitialAmount", (await $.mv((await $.wcall([$t7], "FieldByName", ["InitialAmount"], C)), "AsFloat")), { get: async () => L0["initialamount"], set: async (v) => { L0["initialamount"] = v; }, local: true });
    await $.wset([$t7], "DUEINTERESTRATE", (await $.mv((await $.wcall([$t7], "FieldByName", ["DUEINTERESTRATE"], C)), "AsFloat")), { get: async () => L0["dueinterestrate"], set: async (v) => { L0["dueinterestrate"] = v; }, local: true });
    await $.wset([$t7], "SQUAREMETRAMOUNT", (await $.mv((await $.wcall([$t7], "FieldByName", ["SQUAREMETRAMOUNT"], C)), "AsFloat")), { get: async () => L0["squaremetramount"], set: async (v) => { L0["squaremetramount"] = v; }, local: true });
    await $.wset([$t7], "note", (await $.mv((await $.wcall([$t7], "FieldByName", ["Note"], C)), "AsInteger")), { get: async () => L0["note"], set: async (v) => { L0["note"] = v; }, local: true });
    await $.wset([$t7], "monthpay", (await $.mv((await $.wcall([$t7], "FieldByName", ["monthspay"], C)), "AsFloat")), { get: async () => L0["monthpay"], set: async (v) => { L0["monthpay"] = v; }, local: true });
    await $.wset([$t7], "pricecred", (await $.mv((await $.wcall([$t7], "FieldByName", ["pricecred"], C)), "AsFloat")), { get: async () => L0["pricecred"], set: async (v) => { L0["pricecred"] = v; }, local: true });
  }
  { const $t8 = L0["action"];
    if ($.eq($t8, "I")) {
      {
        const $t9 = (await $.v(C, "CC_GENERAL"));
        await $.wset([$t9], "Result", (await $.wcall([$t9], "CallIntegerFunction", ["add_Contract", ["p_ContNum", (await $.wv([$t9], "ContNum", { get: async () => L0["contnum"], set: async (v) => { L0["contnum"] = v; }, local: true }, false)), "p_Buyer", (await $.wv([$t9], "Buyer", { get: async () => L0["buyer"], set: async (v) => { L0["buyer"] = v; }, local: true }, false)), "p_AccID", (await $.wv([$t9], "AccID", { get: async () => L0["accid"], set: async (v) => { L0["accid"] = v; }, local: true }, false)), "p_BranchID", (await $.wv([$t9], "BranchID", { get: async () => L0["branchid"], set: async (v) => { L0["branchid"] = v; }, local: true }, false)), "p_FlatID", (await $.wv([$t9], "FlatID", { get: async () => L0["flatid"], set: async (v) => { L0["flatid"] = v; }, local: true }, false)), "p_contcur", (await $.wv([$t9], "contcur", { get: async () => L0["contcur"], set: async (v) => { L0["contcur"] = v; }, local: true }, false)), "p_ContAmount", (await $.wv([$t9], "ContAmount", { get: async () => L0["contamount"], set: async (v) => { L0["contamount"] = v; }, local: true }, false)), "p_opendate", (await $.wv([$t9], "opendate", { get: async () => L0["opendate"], set: async (v) => { L0["opendate"] = v; }, local: true }, false)), "p_ExpDate", (await $.wv([$t9], "ExpDate", { get: async () => L0["expdate"], set: async (v) => { L0["expdate"] = v; }, local: true }, false)), "p_closedate", (await $.wv([$t9], "closedate", { get: async () => L0["closedate"], set: async (v) => { L0["closedate"] = v; }, local: true }, false)), "p_interestrate", 0, "p_InitialAmount", (await $.wv([$t9], "InitialAmount", { get: async () => L0["initialamount"], set: async (v) => { L0["initialamount"] = v; }, local: true }, false)), "p_DUEINTERESTRATE", (await $.wv([$t9], "DUEINTERESTRATE", { get: async () => L0["dueinterestrate"], set: async (v) => { L0["dueinterestrate"] = v; }, local: true }, false)), "p_SQUAREMETRAMOUNT", (await $.wv([$t9], "SQUAREMETRAMOUNT", { get: async () => L0["squaremetramount"], set: async (v) => { L0["squaremetramount"] = v; }, local: true }, false)), "p_note", (await $.wv([$t9], "note", { get: async () => L0["note"], set: async (v) => { L0["note"] = v; }, local: true }, false)), "p_monthpay", (await $.wv([$t9], "monthpay", { get: async () => L0["monthpay"], set: async (v) => { L0["monthpay"] = v; }, local: true }, false)), "p_pricecred", (await $.wv([$t9], "pricecred", { get: async () => L0["pricecred"], set: async (v) => { L0["pricecred"] = v; }, local: true }, false))]], C)), { get: async () => L0["result"], set: async (v) => { L0["result"] = v; }, local: true });
      }
      await L0["applied"].set(true);
    }
    else if ($.eq($t8, "U")) {
      {
        const $t10 = (await $.v(C, "CC_GENERAL"));
        await $.wset([$t10], "Result", (await $.wcall([$t10], "CallIntegerFunction", ["upd_Contracts", ["p_ID", (await $.mv((await $.mcall((await $.wv([$t10], "Credits", C, false)), "FieldByName", ["ID"])), "AsInteger")), "p_ContNum", (await $.wv([$t10], "ContNum", { get: async () => L0["contnum"], set: async (v) => { L0["contnum"] = v; }, local: true }, false)), "p_Buyer", (await $.wv([$t10], "Buyer", { get: async () => L0["buyer"], set: async (v) => { L0["buyer"] = v; }, local: true }, false)), "p_AccID", (await $.wv([$t10], "AccID", { get: async () => L0["accid"], set: async (v) => { L0["accid"] = v; }, local: true }, false)), "p_BranchID", (await $.wv([$t10], "BranchID", { get: async () => L0["branchid"], set: async (v) => { L0["branchid"] = v; }, local: true }, false)), "p_FlatID", (await $.wv([$t10], "FlatID", { get: async () => L0["flatid"], set: async (v) => { L0["flatid"] = v; }, local: true }, false)), "p_contcur", (await $.wv([$t10], "contcur", { get: async () => L0["contcur"], set: async (v) => { L0["contcur"] = v; }, local: true }, false)), "p_ContAmount", (await $.wv([$t10], "ContAmount", { get: async () => L0["contamount"], set: async (v) => { L0["contamount"] = v; }, local: true }, false)), "p_opendate", (await $.wv([$t10], "opendate", { get: async () => L0["opendate"], set: async (v) => { L0["opendate"] = v; }, local: true }, false)), "p_ExpDate", (await $.wv([$t10], "ExpDate", { get: async () => L0["expdate"], set: async (v) => { L0["expdate"] = v; }, local: true }, false)), "p_closedate", (await $.wv([$t10], "closedate", { get: async () => L0["closedate"], set: async (v) => { L0["closedate"] = v; }, local: true }, false)), "p_interestrate", 0, "p_InitialAmount", (await $.wv([$t10], "InitialAmount", { get: async () => L0["initialamount"], set: async (v) => { L0["initialamount"] = v; }, local: true }, false)), "p_DUEINTERESTRATE", (await $.wv([$t10], "DUEINTERESTRATE", { get: async () => L0["dueinterestrate"], set: async (v) => { L0["dueinterestrate"] = v; }, local: true }, false)), "p_SQUAREMETRAMOUNT", (await $.wv([$t10], "SQUAREMETRAMOUNT", { get: async () => L0["squaremetramount"], set: async (v) => { L0["squaremetramount"] = v; }, local: true }, false)), "p_note", (await $.wv([$t10], "note", { get: async () => L0["note"], set: async (v) => { L0["note"] = v; }, local: true }, false)), "p_monthpay", (await $.wv([$t10], "monthpay", { get: async () => L0["monthpay"], set: async (v) => { L0["monthpay"] = v; }, local: true }, false)), "p_pricecred", (await $.wv([$t10], "pricecred", { get: async () => L0["pricecred"], set: async (v) => { L0["pricecred"] = v; }, local: true }, false))]], C)), { get: async () => L0["result"], set: async (v) => { L0["result"] = v; }, local: true });
      }
      await L0["applied"].set(true);
    }
  }
  return L0.result;
}, {"params": ["Sender", "Action", "Applied", "NewRowId"], "kind": "procedure", "ptypes": ["TOracleDataSet", "Char", "Boolean", "String"]});
  U.method("TDatModConstr", "CreditPurposeCalcFields", async function CreditPurposeCalcFields(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"dataset": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["dataset"]);
  {
    const $t11 = L0["dataset"];
    await $.mset((await $.wcall([$t11], "FieldByName", ["fullammount"], C)), "Asfloat", 0);
    await $.mset((await $.wcall([$t11], "FieldByName", ["PeriodContracts"], C)), "AsInteger", (await $.wcall([$t11], "trunc", [(await $.mcall((await $.wv([$t11], "cc_general", C, false)), "CallIntegerFunction", ["GetPeriod", ["bdat", (await $.mv((await $.wcall([$t11], "FieldByname", ["opendate"], C)), "AsDateTime")), "edat", (await $.mv((await $.wcall([$t11], "FieldByname", ["expdate"], C)), "AsDateTime"))]]))], C)));
    await $.mset((await $.wcall([$t11], "FieldByName", ["fullammount"], C)), "Asfloat", $.mul((await $.mv((await $.wcall([$t11], "FieldByName", ["AREA"], C)), "Asfloat")), (await $.mv((await $.wcall([$t11], "FieldByName", ["SQUAREMETRAMOUNT"], C)), "Asfloat"))));
    if ($.truthy($.gt((await $.mv((await $.wcall([$t11], "FieldByName", ["fullammount"], C)), "Asfloat")), 0))) {
      await $.mset((await $.wcall([$t11], "FieldByName", ["restt"], C)), "Asfloat", $.sub((await $.mv((await $.wcall([$t11], "FieldByName", ["fullammount"], C)), "Asfloat")), (await $.mv((await $.wcall([$t11], "FieldByName", ["INITIALAMOUNT"], C)), "Asfloat"))));
    }
    if ($.truthy((await $.and_(($.gt((await $.mv((await $.wcall([$t11], "FieldByName", ["INITIALAMOUNT"], C)), "Asfloat")), 0)), async () => ($.gt((await $.mv((await $.wcall([$t11], "FieldByName", ["pricecred"], C)), "Asfloat")), 0)))))) {
      await $.mset((await $.wcall([$t11], "FieldByName", ["buyarea"], C)), "Asfloat", $.fdiv((await $.mv((await $.wcall([$t11], "FieldByName", ["INITIALAMOUNT"], C)), "Asfloat")), (await $.mv((await $.wcall([$t11], "FieldByName", ["pricecred"], C)), "Asfloat"))));
    } else {
      await $.mset((await $.wcall([$t11], "FieldByName", ["buyarea"], C)), "Asfloat", 0);
    }
    if ($.truthy($.gt((await $.mv((await $.wcall([$t11], "FieldByName", ["fullammount"], C)), "Asfloat")), 0))) {
      await $.mset((await $.wcall([$t11], "FieldByName", ["restt"], C)), "Asfloat", $.sub((await $.mv((await $.wcall([$t11], "FieldByName", ["fullammount"], C)), "Asfloat")), (await $.mv((await $.wcall([$t11], "FieldByName", ["INITIALAMOUNT"], C)), "Asfloat"))));
    }
    if ($.truthy($.gt((await $.mv((await $.wcall([$t11], "FieldByName", ["PeriodContracts"], C)), "Asfloat")), 0))) {
      await $.mset((await $.wcall([$t11], "FieldByName", ["monthspay"], C)), "AsFloat", $.fdiv((await $.mv((await $.wcall([$t11], "FieldByName", ["restt"], C)), "AsFloat")), (await $.mv((await $.wcall([$t11], "FieldByName", ["PeriodContracts"], C)), "AsFloat"))));
    } else {
      await $.mset((await $.wcall([$t11], "FieldByName", ["monthspay"], C)), "Asfloat", 0);
    }
  }
  return L0.result;
}, {"params": ["DataSet"], "kind": "procedure", "ptypes": ["TDataSet"]});
  U.method("TDatModConstr", "DataModuleCreate", async function DataModuleCreate(Self, p0) {
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
  U.method("TDatModConstr", "CopyOfCreditPurposeApplyRecord", async function CopyOfCreditPurposeApplyRecord(Self, p0, p1, p2, p3) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "action": $.copyArg(p1), "applied": $.asRef(p2), "newrowid": $.asRef(p3), result: undefined, "contnum": '', "buyer": 0, "accid": 0, "branchid": 0, "contcur": 0, "flatid": 0, "contamount": 0, "opendate": 0, "expdate": 0, "closedate": 0, "interestrate": 0, "initialamount": 0, "dueinterestrate": 0, "result": 0};
  await $.fixArgs(L0, ["sender", "action"]);
  L0["result"] = 0;
  {
    const $t12 = L0["sender"];
    await $.wset([$t12], "ContNum", (await $.mv((await $.wcall([$t12], "FieldByName", ["ContNum"], C)), "AsString")), { get: async () => L0["contnum"], set: async (v) => { L0["contnum"] = v; }, local: true });
    await $.wset([$t12], "Buyer", (await $.mv((await $.wcall([$t12], "FieldByName", ["Buyer"], C)), "Asinteger")), { get: async () => L0["buyer"], set: async (v) => { L0["buyer"] = v; }, local: true });
    await $.wset([$t12], "AccID", (await $.mv((await $.wcall([$t12], "FieldByName", ["AccID"], C)), "Asinteger")), { get: async () => L0["accid"], set: async (v) => { L0["accid"] = v; }, local: true });
    await $.wset([$t12], "BranchID", (await $.mv((await $.wcall([$t12], "FieldByName", ["BranchID"], C)), "Asinteger")), { get: async () => L0["branchid"], set: async (v) => { L0["branchid"] = v; }, local: true });
    await $.wset([$t12], "FlatID", (await $.mv((await $.wcall([$t12], "FieldByName", ["FlatID"], C)), "Asinteger")), { get: async () => L0["flatid"], set: async (v) => { L0["flatid"] = v; }, local: true });
    await $.wset([$t12], "contcur", (await $.mv((await $.wcall([$t12], "FieldByName", ["contcur"], C)), "Asinteger")), { get: async () => L0["contcur"], set: async (v) => { L0["contcur"] = v; }, local: true });
    await $.wset([$t12], "ContAmount", (await $.mv((await $.wcall([$t12], "FieldByName", ["ContAmount"], C)), "AsFloat")), { get: async () => L0["contamount"], set: async (v) => { L0["contamount"] = v; }, local: true });
    await $.wset([$t12], "opendate", (await $.mv((await $.wcall([$t12], "FieldByName", ["opendate"], C)), "asdatetime")), { get: async () => L0["opendate"], set: async (v) => { L0["opendate"] = v; }, local: true });
    await $.wset([$t12], "ExpDate", (await $.mv((await $.wcall([$t12], "FieldByName", ["ExpDate"], C)), "asdatetime")), { get: async () => L0["expdate"], set: async (v) => { L0["expdate"] = v; }, local: true });
    await $.wset([$t12], "closedate", (await $.mv((await $.wcall([$t12], "FieldByName", ["closedate"], C)), "asdatetime")), { get: async () => L0["closedate"], set: async (v) => { L0["closedate"] = v; }, local: true });
    await $.wset([$t12], "interestrate", (await $.mv((await $.wcall([$t12], "FieldByName", ["interestrate"], C)), "asinteger")), { get: async () => L0["interestrate"], set: async (v) => { L0["interestrate"] = v; }, local: true });
    await $.wset([$t12], "InitialAmount", (await $.mv((await $.wcall([$t12], "FieldByName", ["InitialAmount"], C)), "AsFloat")), { get: async () => L0["initialamount"], set: async (v) => { L0["initialamount"] = v; }, local: true });
    await $.wset([$t12], "DUEINTERESTRATE", (await $.mv((await $.wcall([$t12], "FieldByName", ["DUEINTERESTRATE"], C)), "AsFloat")), { get: async () => L0["dueinterestrate"], set: async (v) => { L0["dueinterestrate"] = v; }, local: true });
  }
  { const $t13 = L0["action"];
    if ($.eq($t13, "I")) {
      {
        const $t14 = (await $.v(C, "CC_GENERAL"));
        await $.wset([$t14], "Result", (await $.wcall([$t14], "CallIntegerFunction", ["add_Contract", ["p_ContNum", (await $.wv([$t14], "ContNum", { get: async () => L0["contnum"], set: async (v) => { L0["contnum"] = v; }, local: true }, false)), "p_Buyer", (await $.wv([$t14], "Buyer", { get: async () => L0["buyer"], set: async (v) => { L0["buyer"] = v; }, local: true }, false)), "p_AccID", (await $.wv([$t14], "AccID", { get: async () => L0["accid"], set: async (v) => { L0["accid"] = v; }, local: true }, false)), "p_BranchID", (await $.wv([$t14], "BranchID", { get: async () => L0["branchid"], set: async (v) => { L0["branchid"] = v; }, local: true }, false)), "p_FlatID", (await $.wv([$t14], "FlatID", { get: async () => L0["flatid"], set: async (v) => { L0["flatid"] = v; }, local: true }, false)), "p_contcur", (await $.wv([$t14], "contcur", { get: async () => L0["contcur"], set: async (v) => { L0["contcur"] = v; }, local: true }, false)), "p_ContAmount", (await $.wv([$t14], "ContAmount", { get: async () => L0["contamount"], set: async (v) => { L0["contamount"] = v; }, local: true }, false)), "p_opendate", (await $.wv([$t14], "opendate", { get: async () => L0["opendate"], set: async (v) => { L0["opendate"] = v; }, local: true }, false)), "p_ExpDate", (await $.wv([$t14], "ExpDate", { get: async () => L0["expdate"], set: async (v) => { L0["expdate"] = v; }, local: true }, false)), "p_closedate", (await $.wv([$t14], "closedate", { get: async () => L0["closedate"], set: async (v) => { L0["closedate"] = v; }, local: true }, false)), "p_interestrate", 0, "p_InitialAmount", (await $.wv([$t14], "InitialAmount", { get: async () => L0["initialamount"], set: async (v) => { L0["initialamount"] = v; }, local: true }, false)), "p_DUEINTERESTRATE", (await $.wv([$t14], "DUEINTERESTRATE", { get: async () => L0["dueinterestrate"], set: async (v) => { L0["dueinterestrate"] = v; }, local: true }, false))]], C)), { get: async () => L0["result"], set: async (v) => { L0["result"] = v; }, local: true });
      }
      await L0["applied"].set(true);
    }
    else if ($.eq($t13, "U")) {
      {
        const $t15 = (await $.v(C, "CC_GENERAL"));
        await $.wset([$t15], "Result", (await $.wcall([$t15], "CallIntegerFunction", ["upd_Contracts", ["p_ID", (await $.mv((await $.mcall((await $.wv([$t15], "Credits", C, false)), "FieldByName", ["ID"])), "AsInteger")), "p_ContNum", (await $.wv([$t15], "ContNum", { get: async () => L0["contnum"], set: async (v) => { L0["contnum"] = v; }, local: true }, false)), "p_Buyer", (await $.wv([$t15], "Buyer", { get: async () => L0["buyer"], set: async (v) => { L0["buyer"] = v; }, local: true }, false)), "p_AccID", (await $.wv([$t15], "AccID", { get: async () => L0["accid"], set: async (v) => { L0["accid"] = v; }, local: true }, false)), "p_BranchID", (await $.wv([$t15], "BranchID", { get: async () => L0["branchid"], set: async (v) => { L0["branchid"] = v; }, local: true }, false)), "p_FlatID", (await $.wv([$t15], "FlatID", { get: async () => L0["flatid"], set: async (v) => { L0["flatid"] = v; }, local: true }, false)), "p_ContAmount", (await $.wv([$t15], "ContAmount", { get: async () => L0["contamount"], set: async (v) => { L0["contamount"] = v; }, local: true }, false)), "p_opendate", (await $.wv([$t15], "opendate", { get: async () => L0["opendate"], set: async (v) => { L0["opendate"] = v; }, local: true }, false)), "p_ExpDate", (await $.wv([$t15], "ExpDate", { get: async () => L0["expdate"], set: async (v) => { L0["expdate"] = v; }, local: true }, false)), "p_closedate", (await $.wv([$t15], "closedate", { get: async () => L0["closedate"], set: async (v) => { L0["closedate"] = v; }, local: true }, false)), "p_interestrate", 0, "p_InitialAmount", (await $.wv([$t15], "InitialAmount", { get: async () => L0["initialamount"], set: async (v) => { L0["initialamount"] = v; }, local: true }, false)), "p_DUEINTERESTRATE", (await $.wv([$t15], "DUEINTERESTRATE", { get: async () => L0["dueinterestrate"], set: async (v) => { L0["dueinterestrate"] = v; }, local: true }, false))]], C)), { get: async () => L0["result"], set: async (v) => { L0["result"] = v; }, local: true });
      }
      await L0["applied"].set(true);
    }
  }
  return L0.result;
}, {"params": ["Sender", "Action", "Applied", "NewRowId"], "kind": "procedure", "ptypes": ["TOracleDataSet", "Char", "Boolean", "String"]});
  U.method("TDatModConstr", "DataModuleDestroy", async function DataModuleDestroy(Self, p0) {
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
