// Generated from AccountDataModuleImpl.pas by pas2js — do not edit by hand; regenerate instead.
/* eslint-disable */
// @ts-nocheck

export default function define($) {
  const U = $.unit("AccountDataModuleImpl", ["Windows", "Messages", "SysUtils", "Classes", "Graphics", "Controls", "Forms", "Dialogs", "Db", "OracleData", "Oracle", "sboapiDataModuleImpl"]);
  const C = [U];
  $.defRecord("taccount", {"id": () => 0, "customerid": () => 0, "customerid2": () => 0, "accno": () => '', "operatorid": () => 0, "currencyid": () => 0, "name": () => '', "opendate": () => 0, "limit": () => 0, "closedate": () => 0, "balance1": () => 0, "balance2": () => 0, "balance3": () => 0, "balance4": () => 0, "filialid": () => 0, "simotcet": () => 0, "tipacc": () => '', "oldaccno": () => '', "pairaccid": () => 0, "insider": () => '', "proc_dat": () => 0, "tempid": () => 0});
  U.defClass("TAccDataModule", "TDataModule", {"branches": {"name": "Branches", "type": "TOracleDataSet"}, "branchesdata": {"name": "BranchesData", "type": "TDataSource"}, "users": {"name": "Users", "type": "TOracleDataSet"}, "usersdata": {"name": "UsersData", "type": "TDataSource"}, "currency": {"name": "Currency", "type": "TOracleDataSet"}, "currencydata": {"name": "CurrencyData", "type": "TDataSource"}, "accflags": {"name": "AccFlags", "type": "TOracleDataSet"}, "accflagsdata": {"name": "AccFlagsData", "type": "TDataSource"}, "balacc": {"name": "BalAcc", "type": "TOracleDataSet"}, "balaccdata": {"name": "BalAccData", "type": "TDataSource"}, "account": {"name": "Account", "type": "TOracleDataSet"}, "accountdata": {"name": "AccountData", "type": "TDataSource"}, "tenostat": {"name": "Tenostat", "type": "TOracleDataSet"}, "tenostatostat": {"name": "TenostatOSTAT", "type": "TFloatField"}, "tenostatpok_ostat": {"name": "TenostatPOK_OSTAT", "type": "TFloatField"}, "tenostatacc_id": {"name": "TenostatACC_ID", "type": "TFloatField"}, "datatenostat": {"name": "DataTenostat", "type": "TDataSource"}, "lazyrest": {"name": "Lazyrest", "type": "TOracleDataSet"}, "datalazyrest": {"name": "DataLazyrest", "type": "TDataSource"}, "lazyrestacc_id": {"name": "LazyrestACC_ID", "type": "TFloatField"}, "lazyrestostat": {"name": "LazyrestOSTAT", "type": "TFloatField"}, "lazyrestpok_ostat": {"name": "LazyrestPOK_OSTAT", "type": "TFloatField"}, "branchesid": {"name": "BranchesID", "type": "TFloatField"}, "usersid": {"name": "UsersID", "type": "TFloatField"}, "sbop": {"name": "SBOP", "type": "TOraclePackage"}, "reportsymbol": {"name": "ReportSymbol", "type": "TOracleDataSet"}, "reportsymboldata": {"name": "ReportSymbolData", "type": "TDataSource"}, "customersdata": {"name": "CustomersData", "type": "TDataSource"}, "pairaccount": {"name": "PairAccount", "type": "TOracleDataSet"}, "pairaccountdata": {"name": "PairAccountData", "type": "TDataSource"}, "sysdat": {"name": "Sysdat", "type": "TOracleDataSet"}, "sbutil": {"name": "SBUTIL", "type": "TOraclePackage"}, "branchesname": {"name": "BranchesNAME", "type": "TWideStringField"}, "usersname": {"name": "UsersNAME", "type": "TWideStringField"}, "accflagssymbol": {"name": "AccFlagsSYMBOL", "type": "TWideStringField"}, "accflagsname": {"name": "AccFlagsNAME", "type": "TWideStringField"}, "balaccbalname": {"name": "BalAccBALNAME", "type": "TWideStringField"}, "balaccbal_cn": {"name": "BalAccBAL_CN", "type": "TWideStringField"}, "sb_aca": {"name": "SB_ACA", "type": "TOraclePackage"}, "ods_balspr2": {"name": "ODS_balspr2", "type": "TOracleDataSet"}, "ds_balspr2": {"name": "DS_balspr2", "type": "TDataSource"}, "ods_balspr2bal_cn": {"name": "ODS_balspr2BAL_CN", "type": "TWideStringField"}, "ods_balspr2balname": {"name": "ODS_balspr2BALNAME", "type": "TWideStringField"}, "pg_pcustservice": {"name": "PG_PCustService", "type": "TOraclePackage"}, "dssettings": {"name": "DSsettings", "type": "TOracleDataSet"}, "dssettingsid": {"name": "DSsettingsID", "type": "TFloatField"}, "dssettingsparentid": {"name": "DSsettingsPARENTID", "type": "TFloatField"}, "dssettingsname": {"name": "DSsettingsNAME", "type": "TWideStringField"}, "dssettingsdescription": {"name": "DSsettingsDESCRIPTION", "type": "TWideStringField"}, "dssettingsvalue": {"name": "DSsettingsVALUE", "type": "TWideStringField"}, "dssettingsvaluelist": {"name": "DSsettingsVALUELIST", "type": "TWideStringField"}, "dssettingsdisplay_value_list": {"name": "DSsettingsDISPLAY_VALUE_LIST", "type": "TWideStringField"}, "user_branches": {"name": "user_Branches", "type": "TOracleDataSet"}, "floatfield1": {"name": "FloatField1", "type": "TFloatField"}, "widestringfield1": {"name": "WideStringField1", "type": "TWideStringField"}, "user_branchesdata": {"name": "user_BranchesData", "type": "TDataSource"}, "currencyvalute": {"name": "CurrencyVALUTE", "type": "TIntegerField"}, "currencyvalu_name": {"name": "CurrencyVALU_NAME", "type": "TWideStringField"}, "sb_aca11": {"name": "SB_ACA11", "type": "TOraclePackage"}, "account_old": {"name": "Account_Old", "type": "TOracleDataSet"}, "floatfield2": {"name": "FloatField2", "type": "TFloatField"}, "floatfield3": {"name": "FloatField3", "type": "TFloatField"}, "widestringfield2": {"name": "WideStringField2", "type": "TWideStringField"}, "widestringfield3": {"name": "WideStringField3", "type": "TWideStringField"}, "widestringfield4": {"name": "WideStringField4", "type": "TWideStringField"}, "widestringfield5": {"name": "WideStringField5", "type": "TWideStringField"}, "datetimefield1": {"name": "DateTimeField1", "type": "TDateTimeField"}, "datetimefield2": {"name": "DateTimeField2", "type": "TDateTimeField"}, "floatfield4": {"name": "FloatField4", "type": "TFloatField"}, "floatfield5": {"name": "FloatField5", "type": "TFloatField"}, "floatfield6": {"name": "FloatField6", "type": "TFloatField"}, "floatfield7": {"name": "FloatField7", "type": "TFloatField"}, "floatfield8": {"name": "FloatField8", "type": "TFloatField"}, "integerfield1": {"name": "IntegerField1", "type": "TIntegerField"}, "floatfield9": {"name": "FloatField9", "type": "TFloatField"}, "widestringfield6": {"name": "WideStringField6", "type": "TWideStringField"}, "floatfield10": {"name": "FloatField10", "type": "TFloatField"}, "widestringfield7": {"name": "WideStringField7", "type": "TWideStringField"}, "floatfield11": {"name": "FloatField11", "type": "TFloatField"}, "widestringfield8": {"name": "WideStringField8", "type": "TWideStringField"}, "widestringfield9": {"name": "WideStringField9", "type": "TWideStringField"}, "widestringfield10": {"name": "WideStringField10", "type": "TWideStringField"}, "integerfield2": {"name": "IntegerField2", "type": "TIntegerField"}, "floatfield12": {"name": "FloatField12", "type": "TFloatField"}, "widestringfield11": {"name": "WideStringField11", "type": "TWideStringField"}, "accountid": {"name": "AccountID", "type": "TFloatField"}, "accountkli_id": {"name": "AccountKLI_ID", "type": "TFloatField"}, "accountop_id": {"name": "AccountOP_ID", "type": "TFloatField"}, "accountacc_no": {"name": "AccountACC_NO", "type": "TWideStringField"}, "accountval_acc": {"name": "AccountVAL_ACC", "type": "TIntegerField"}, "accountcurrencyname": {"name": "AccountCURRENCYNAME", "type": "TWideStringField"}, "accountname": {"name": "AccountNAME", "type": "TWideStringField"}, "accountopen_dat": {"name": "AccountOPEN_DAT", "type": "TDateTimeField"}, "accountclose_dat": {"name": "AccountCLOSE_DAT", "type": "TDateTimeField"}, "accountstatu1": {"name": "AccountSTATU1", "type": "TFloatField"}, "accountbal_cn1": {"name": "AccountBAL_CN1", "type": "TFloatField"}, "accountbal_cn2": {"name": "AccountBAL_CN2", "type": "TFloatField"}, "accountbal_cn3": {"name": "AccountBAL_CN3", "type": "TFloatField"}, "accountbal_cn4": {"name": "AccountBAL_CN4", "type": "TFloatField"}, "accountfilial": {"name": "AccountFILIAL", "type": "TIntegerField"}, "accountsim_otcet": {"name": "AccountSIM_OTCET", "type": "TFloatField"}, "accounttipacc": {"name": "AccountTIPACC", "type": "TWideStringField"}, "accountlimit": {"name": "AccountLIMIT", "type": "TFloatField"}, "accountold_acc_no": {"name": "AccountOLD_ACC_NO", "type": "TWideStringField"}, "accountpair_acc": {"name": "AccountPAIR_ACC", "type": "TFloatField"}, "accountname1": {"name": "AccountNAME1", "type": "TWideStringField"}, "accountinsider": {"name": "AccountINSIDER", "type": "TWideStringField"}, "accountuserinsert": {"name": "AccountUSERINSERT", "type": "TWideStringField"}, "sbaca": {"name": "SBACA", "type": "TOraclePackage"}, "customers": {"name": "Customers", "type": "TOracleDataSet"}, "ods_accnolength": {"name": "ODS_AccNoLength", "type": "TOracleDataSet"}, "accountkli_id2": {"name": "AccountKLI_ID2", "type": "TFloatField"}, "customerscust_type": {"name": "CustomersCUST_TYPE", "type": "TIntegerField"}, "customersname": {"name": "CustomersNAME", "type": "TWideStringField"}, "customersid": {"name": "CustomersID", "type": "TIntegerField"}, "oraclequery1": {"name": "OracleQuery1", "type": "TOracleQuery"}, "accountprocuration_dat": {"name": "AccountPROCURATION_DAT", "type": "TDateTimeField"}, "accounttempid": {"name": "AccountTEMPID", "type": "TFloatField"}, "accountexpert": {"name": "AccountEXPERT", "type": "TWideStringField"}}, {});
  U.init(async () => {
    U.const("cs_add_account", "add_account");
    U.const("cs_upd_account", "upd_account");
    U.const("cs_close_account", "close_account");
    U.const("cs_generateID", "GenerateID");
    U.const("cs_flagexsist", "FlagExsist");
    U.var_("AccDataModule", null, "TAccDataModule");
  });
  U.method("TAccDataModule", "AddAccount", async function AddAccount(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"account": $.copyArg(p0), result: 0};
  await $.fixArgs(L0, ["account"]);
  {
    const $t1 = (await $.v(C, "SBOP"));
    const $t2 = (await $.wv([$t1], "Account", { get: async () => L0["account"], set: async (v) => { L0["account"] = v; }, local: true }, false));
    await $.wset([$t1, $t2], "Result", (await $.wcall([$t1, $t2], "CallIntegerFunction", [(await $.wv([$t1, $t2], "cs_add_account", C, false)), ["customerid", (await $.wv([$t1, $t2], "CustomerID", C, false)), "op_id", (await $.wv([$t1, $t2], "OperatorID", C, false)), "accno", (await $.wv([$t1, $t2], "AccNo", C, false)), "currencyid", (await $.wv([$t1, $t2], "CurrencyID", C, false)), "name", (await $.wv([$t1, $t2], "Name", C, false)), "open_dat", (await $.wv([$t1, $t2], "OpenDate", C, false)), "balcn", (await $.wv([$t1, $t2], "Balance1", C, false)), "limit", (await $.wv([$t1, $t2], "Limit", C, false)), "close_dat", (await $.wv([$t1, $t2], "CloseDate", C, false)), "bal_cn2", (await $.wv([$t1, $t2], "Balance2", C, false)), "bal_cn3", (await $.wv([$t1, $t2], "Balance3", C, false)), "bal_cn4", (await $.wv([$t1, $t2], "Balance4", C, false)), "filial", (await $.wv([$t1, $t2], "FilialID", C, false)), "sim_otcet", (await $.wv([$t1, $t2], "Simotcet", C, false)), "typeacc", (await $.wv([$t1, $t2], "Tipacc", C, false)), "old_acc_no", (await $.wv([$t1, $t2], "OldAccNo", C, false)), "pair_acc", (await $.wv([$t1, $t2], "PairAccID", C, false)), "insider", (await $.wv([$t1, $t2], "Insider", C, false)), "v_kli_id2", (await $.wv([$t1, $t2], "CustomerID2", C, false)), "v_procuration_dat", (await $.wv([$t1, $t2], "proc_dat", C, false)), "v_tempid", (await $.wv([$t1, $t2], "tempid", C, false))]], C)), { get: async () => L0["result"], set: async (v) => { L0["result"] = v; }, local: true });
  }
  return L0.result;
}, {"params": ["Account"], "kind": "function", "ptypes": ["TAccount"]});
  U.method("TAccDataModule", "UpdateAccount", async function UpdateAccount(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"account": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["account"]);
  {
    const $t3 = (await $.v(C, "SBOP"));
    const $t4 = (await $.wv([$t3], "Account", { get: async () => L0["account"], set: async (v) => { L0["account"] = v; }, local: true }, false));
    await $.stmt((await $.wcall([$t3, $t4], "CallProcedure", [(await $.wv([$t3, $t4], "cs_upd_account", C, false)), ["v_id", (await $.wv([$t3, $t4], "ID", C, false)), "v_customerid", (await $.wv([$t3, $t4], "CustomerID", C, false)), "v_op_id", (await $.wv([$t3, $t4], "OperatorID", C, false)), "v_accno", (await $.wv([$t3, $t4], "AccNo", C, false)), "v_currencyid", (await $.wv([$t3, $t4], "CurrencyID", C, false)), "v_name", (await $.wv([$t3, $t4], "Name", C, false)), "v_open_dat", (await $.wv([$t3, $t4], "OpenDate", C, false)), "v_balcn", (await $.wv([$t3, $t4], "Balance1", C, false)), "v_limit", (await $.wv([$t3, $t4], "Limit", C, false)), "v_close_dat", (await $.wv([$t3, $t4], "CloseDate", C, false)), "v_bal_cn2", (await $.wv([$t3, $t4], "Balance2", C, false)), "v_bal_cn3", (await $.wv([$t3, $t4], "Balance3", C, false)), "v_bal_cn4", (await $.wv([$t3, $t4], "Balance4", C, false)), "v_filial", (await $.wv([$t3, $t4], "FilialID", C, false)), "v_sim_otcet", (await $.wv([$t3, $t4], "Simotcet", C, false)), "v_typeacc", (await $.wv([$t3, $t4], "Tipacc", C, false)), "v_old_acc_no", (await $.wv([$t3, $t4], "OldAccNo", C, false)), "v_pair_acc", (await $.wv([$t3, $t4], "PairAccID", C, false)), "v_insider", (await $.wv([$t3, $t4], "Insider", C, false)), "v_kli_id2", (await $.wv([$t3, $t4], "CustomerID2", C, false)), "v_procuration_dat", (await $.wv([$t3, $t4], "proc_dat", C, false)), "v_tempid", (await $.wv([$t3, $t4], "tempid", C, false))]], C)));
  }
  return L0.result;
}, {"params": ["Account"], "kind": "procedure", "ptypes": ["TAccount"]});
  U.method("TAccDataModule", "CloseAccount", async function CloseAccount(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"accountid": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["accountid"]);
  {
    const $t5 = (await $.v(C, "SBOP"));
    const $t6 = (await $.wv([$t5], "Account", C, false));
    await $.stmt((await $.wcall([$t5, $t6], "CallProcedure", [(await $.wv([$t5, $t6], "cs_close_account", C, false)), ["accid", (await $.wv([$t5, $t6], "AccountID", { get: async () => L0["accountid"], set: async (v) => { L0["accountid"] = v; }, local: true }, false)), "doclose", 1]], C)));
  }
  return L0.result;
}, {"params": ["AccountID"], "kind": "procedure", "ptypes": ["Longint"]});
  U.method("TAccDataModule", "GenerateID", async function GenerateID(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: 0};
  {
    const $t7 = (await $.v(C, "SBOP"));
    await $.wset([$t7], "Result", (await $.wcall([$t7], "CallIntegerFunction", [(await $.wv([$t7], "cs_generateID", C, false)), []], C)), { get: async () => L0["result"], set: async (v) => { L0["result"] = v; }, local: true });
  }
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TAccDataModule", "FlagExsist", async function FlagExsist(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"accid": $.copyArg(p0), "ch": $.copyArg(p1), result: false};
  await $.fixArgs(L0, ["accid", "ch"]);
  {
    const $t8 = (await $.v(C, "SBUTIL"));
    await $.wset([$t8], "Result", (await $.wcall([$t8], "CallBooleanFunction", [(await $.wv([$t8], "cs_flagexsist", C, false)), ["AccID", (await $.wv([$t8], "AccID", { get: async () => L0["accid"], set: async (v) => { L0["accid"] = v; }, local: true }, false)), "FlagChar", (await $.wv([$t8], "ch", { get: async () => L0["ch"], set: async (v) => { L0["ch"] = v; }, local: true }, false))]], C)), { get: async () => L0["result"], set: async (v) => { L0["result"] = v; }, local: true });
  }
  return L0.result;
}, {"params": ["AccID", "Ch"], "kind": "function", "ptypes": ["Integer", "Char"]});
  U.method("TAccDataModule", "AccountApplyRecord", async function AccountApplyRecord(Self, p0, p1, p2, p3) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "action": $.copyArg(p1), "applied": $.asRef(p2), "newrowid": $.asRef(p3), result: undefined, "accountinfo": $.rec("taccount")};
  await $.fixArgs(L0, ["sender", "action"]);
  L0["buildaccount"] = $.fn(async function BuildAccount() {
  const L1 = {result: undefined};
  {
    const $t9 = L0["sender"];
    const $t10 = (await $.wv([$t9], "AccountInfo", { get: async () => L0["accountinfo"], set: async (v) => { L0["accountinfo"] = v; }, local: true }, false));
    await $.wset([$t9, $t10], "ID", (await $.mv((await $.wcall([$t9, $t10], "FieldByName", ["ID"], C)), "AsInteger")), C);
    await $.wset([$t9, $t10], "CustomerID", (await $.mv((await $.wcall([$t9, $t10], "FieldByName", ["kli_ID"], C)), "AsInteger")), C);
    await $.wset([$t9, $t10], "AccNo", (await $.mv((await $.wcall([$t9, $t10], "FieldByName", ["acc_no"], C)), "AsString")), C);
    await $.wset([$t9, $t10], "AccNo", (await $.wcall([$t9, $t10], "StringReplace", [(await $.wv([$t9, $t10], "AccNo", C, false)), " ", "", [(await $.wv([$t9, $t10], "rfReplaceAll", C, false))]], C)), C);
    await $.wset([$t9, $t10], "OperatorID", (await $.mv((await $.wcall([$t9, $t10], "FieldByName", ["op_id"], C)), "AsInteger")), C);
    await $.wset([$t9, $t10], "CurrencyID", (await $.mv((await $.wcall([$t9, $t10], "FieldByName", ["val_acc"], C)), "AsInteger")), C);
    await $.wset([$t9, $t10], "Name", (await $.mv((await $.wcall([$t9, $t10], "FieldByName", ["name"], C)), "AsString")), C);
    await $.wset([$t9, $t10], "OpenDate", (await $.mv((await $.wcall([$t9, $t10], "FieldByName", ["open_dat"], C)), "AsDateTime")), C);
    await $.wset([$t9, $t10], "Limit", (await $.mv((await $.wcall([$t9, $t10], "FieldByName", ["limit"], C)), "AsCurrency")), C);
    await $.wset([$t9, $t10], "CloseDate", (await $.mv((await $.wcall([$t9, $t10], "FieldByName", ["close_dat"], C)), "AsDateTime")), C);
    await $.wset([$t9, $t10], "Balance1", (await $.mv((await $.wcall([$t9, $t10], "FieldByName", ["bal_cn1"], C)), "AsInteger")), C);
    await $.wset([$t9, $t10], "Balance2", (await $.mv((await $.wcall([$t9, $t10], "FieldByName", ["bal_cn2"], C)), "AsInteger")), C);
    await $.wset([$t9, $t10], "Balance3", (await $.mv((await $.wcall([$t9, $t10], "FieldByName", ["bal_cn3"], C)), "AsInteger")), C);
    await $.wset([$t9, $t10], "Balance4", (await $.mv((await $.wcall([$t9, $t10], "FieldByName", ["bal_cn4"], C)), "AsInteger")), C);
    await $.wset([$t9, $t10], "FilialID", (await $.mv((await $.wcall([$t9, $t10], "FieldByName", ["filial"], C)), "AsInteger")), C);
    await $.wset([$t9, $t10], "Simotcet", (await $.mv((await $.wcall([$t9, $t10], "FieldByName", ["sim_otcet"], C)), "AsInteger")), C);
    await $.wset([$t9, $t10], "Tipacc", (await $.mv((await $.wcall([$t9, $t10], "FieldByName", ["tipacc"], C)), "AsString")), C);
    await $.wset([$t9, $t10], "OldAccNo", (await $.mv((await $.wcall([$t9, $t10], "FieldByName", ["old_acc_no"], C)), "AsString")), C);
    await $.wset([$t9, $t10], "PairAccID", (await $.mv((await $.wcall([$t9, $t10], "FieldByName", ["pair_acc"], C)), "AsInteger")), C);
    await $.wset([$t9, $t10], "Insider", (await $.mv((await $.wcall([$t9, $t10], "FieldByName", ["insider"], C)), "AsString")), C);
    await $.wset([$t9, $t10], "CustomerID2", (await $.mv((await $.wcall([$t9, $t10], "FieldByName", ["kli_id2"], C)), "AsInteger")), C);
    await $.wset([$t9, $t10], "proc_dat", (await $.mv((await $.wcall([$t9, $t10], "FieldByName", ["procuration_dat"], C)), "AsDateTime")), C);
    await $.wset([$t9, $t10], "tempid", (await $.mv((await $.wcall([$t9, $t10], "FieldByName", ["tempid"], C)), "AsInteger")), C);
  }
  return L1.result;
});
  { const $t11 = L0["action"];
    if ($.eq($t11, "I")) {
      await $.stmt($.callv(L0["buildaccount"], []));
      await $.stmt((await $.call(C, "AddAccount", [L0["accountinfo"]])));
      await L0["applied"].set(true);
    }
    else if ($.eq($t11, "U")) {
      await $.stmt($.callv(L0["buildaccount"], []));
      await $.stmt((await $.call(C, "UpdateAccount", [L0["accountinfo"]])));
      await L0["applied"].set(true);
    }
    else if ($.eq($t11, "L") || $.eq($t11, "R") || $.eq($t11, "C")) {
      await L0["applied"].set(true);
    }
    else {
      await L0["applied"].set(false);
    }
  }
  return L0.result;
}, {"params": ["Sender", "Action", "Applied", "NewRowId"], "kind": "procedure", "ptypes": ["TOracleDataSet", "Char", "Boolean", "String"]});
  U.method("TAccDataModule", "PairAccountBeforeOpen", async function PairAccountBeforeOpen(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"dataset": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["dataset"]);
  {
    const $t12 = L0["dataset"];
    await $.wset([$t12], "Filtered", (await $.wv([$t12], "False", C, false)), C);
    await $.wset([$t12], "Filter", "Status = 1", C);
    await $.wset([$t12], "Filtered", (await $.wv([$t12], "True", C, false)), C);
  }
  return L0.result;
}, {"params": ["DataSet"], "kind": "procedure", "ptypes": ["TDataSet"]});
  U.method("TAccDataModule", "DataModuleCreate", async function DataModuleCreate(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TAccDataModule", "DataModuleDestroy", async function DataModuleDestroy(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mcall((await $.mv((await $.v(C, "AccDataModule")), "DSsettings")), "Close", []);
  await $.mcall((await $.mv((await $.v(C, "AccDataModule")), "ODS_AccNoLength")), "Close", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TAccDataModule", "Debug", async function Debug(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"dataset": $.copyArg(p0), result: undefined, "index": 0, "indexcount": 0, "list": null, "fieldname": ''};
  await $.fixArgs(L0, ["dataset"]);
  L0["value"] = "FieldName = %s / FieldValue = \"%s\" / FieldSize = %d";
  L0["list"] = (await $.mv((await $.v(C, "TStringList")), "Create"));
  {
    const $t13 = L0["dataset"];
    try {
      await $.wset([$t13], "IndexCount", (await $.wv([$t13], "FieldCount", C, false)), { get: async () => L0["indexcount"], set: async (v) => { L0["indexcount"] = v; }, local: true });
      { const $t14 = $.sub((await $.wv([$t13], "IndexCount", { get: async () => L0["indexcount"], set: async (v) => { L0["indexcount"] = v; }, local: true }, false)), 1);
        await $.wset([$t13], "Index", 0, { get: async () => L0["index"], set: async (v) => { L0["index"] = v; }, local: true });
        let $t15 = true;
        for (;;) {
          if (!$t15) { await $.wset([$t13], "Index", $.succ((await $.wv([$t13], "Index", { get: async () => L0["index"], set: async (v) => { L0["index"] = v; }, local: true }, false)), 1), { get: async () => L0["index"], set: async (v) => { L0["index"] = v; }, local: true }); }
          $t15 = false;
          if (!($.ord((await $.wv([$t13], "Index", { get: async () => L0["index"], set: async (v) => { L0["index"] = v; }, local: true }, false))) <= $.ord($t14))) break;
          await $.wset([$t13], "FieldName", (await $.wcall([$t13], "Copy", [(await $.mv((await $.idx((await $.wv([$t13], "Fields", C, false)), [(await $.wv([$t13], "Index", { get: async () => L0["index"], set: async (v) => { L0["index"] = v; }, local: true }, false))])), "Name")), $.add((await $.wcall([$t13], "Length", [(await $.wv([$t13], "Name", C, false))], C)), 1), $.sub((await $.wcall([$t13], "Length", [(await $.mv((await $.idx((await $.wv([$t13], "Fields", C, false)), [(await $.wv([$t13], "Index", { get: async () => L0["index"], set: async (v) => { L0["index"] = v; }, local: true }, false))])), "Name"))], C)), (await $.wcall([$t13], "Length", [(await $.wv([$t13], "Name", C, false))], C)))], C)), { get: async () => L0["fieldname"], set: async (v) => { L0["fieldname"] = v; }, local: true });
          await $.stmt((await $.mcall((await $.wv([$t13], "List", { get: async () => L0["list"], set: async (v) => { L0["list"] = v; }, local: true }, false)), "Add", [(await $.wcall([$t13], "Format", [(await $.wv([$t13], "Value", { get: async () => L0["value"], set: async (v) => { L0["value"] = v; }, local: true }, false)), [(await $.wv([$t13], "FieldName", { get: async () => L0["fieldname"], set: async (v) => { L0["fieldname"] = v; }, local: true }, false)), (await $.mv((await $.wcall([$t13], "FieldByName", [(await $.wv([$t13], "FieldName", { get: async () => L0["fieldname"], set: async (v) => { L0["fieldname"] = v; }, local: true }, false))], C)), "AsString")), (await $.mv((await $.idx((await $.wv([$t13], "Fields", C, false)), [(await $.wv([$t13], "Index", { get: async () => L0["index"], set: async (v) => { L0["index"] = v; }, local: true }, false))])), "Size"))]], C))])));
          await $.tick();
        }
      }
      await $.stmt((await $.mcall((await $.wv([$t13], "List", { get: async () => L0["list"], set: async (v) => { L0["list"] = v; }, local: true }, false)), "SaveToFile", ["C:\\temp.txt"])));
    } finally {
      await $.mcall((await $.wv([$t13], "List", { get: async () => L0["list"], set: async (v) => { L0["list"] = v; }, local: true }, false)), "Free", []);
    }
  }
  return L0.result;
}, {"params": ["DataSet"], "kind": "procedure", "ptypes": ["TOracleDataSet"]});
  U.method("TAccDataModule", "Customers_AfterScroll", async function Customers_AfterScroll(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"dataset": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["dataset"]);
  if ($.truthy($.in_((await $.mv((await $.v(C, "Account")), "State")), [(await $.v(C, "dsInsert")), (await $.v(C, "dsEdit"))]))) {
    await $.mset((await $.mcall((await $.v(C, "Account")), "FieldByName", ["Name"])), "AsString", (await $.mv((await $.mcall(L0["dataset"], "FieldByName", ["Name"])), "AsString")));
  }
  return L0.result;
}, {"params": ["DataSet"], "kind": "procedure", "ptypes": ["TDataSet"]});
  U.method("TAccDataModule", "Refresh_", async function Refresh_(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"datasetname": $.copyArg(p0), result: undefined, "i": 0};
  await $.fixArgs(L0, ["datasetname"]);
  L0["c_err_message"] = " Table or View in Dataset \"%s\" does not exist! ";
  { const $t16 = $.sub((await $.v(C, "ComponentCount")), 1);
    L0["i"] = 0;
    let $t17 = true;
    for (;;) {
      if (!$t17) { L0["i"] = $.succ(L0["i"], 1); }
      $t17 = false;
      if (!($.ord(L0["i"]) <= $.ord($t16))) break;
      if ($.truthy((await $.and_(($.is_((await $.idx((await $.v(C, "Components")), [L0["i"]])), "TOracleDataSet")), async () => ($.ne((await $.mv((await $.idx((await $.v(C, "Components")), [L0["i"]])), "Name")), L0["datasetname"])))))) {
        try {
          await $.mcall((await $.idx((await $.v(C, "Components")), [L0["i"]])), "Close", []);
          await $.mcall((await $.idx((await $.v(C, "Components")), [L0["i"]])), "Open", []);
        } catch ($t18) {
          $.rethrowControl($t18);
          $.handled($t18);
          throw $.raise((await $.mcall((await $.v(C, "Exception")), "Create", [(await $.call(C, "Format", [L0["c_err_message"], [(await $.mv(((await $.idx((await $.v(C, "Components")), [L0["i"]]))), "Name"))]]))])));
        }
      }
      await $.tick();
    }
  }
  return L0.result;
}, {"params": ["DataSetName"], "kind": "procedure", "ptypes": ["String"]});
  return U;
}
