// Generated from AccountDataModuleImpl.pas by pas2js — do not edit by hand; regenerate instead.
/* eslint-disable */
// @ts-nocheck

export default function define($) {
  const U = $.unit("AccountDataModuleImpl", ["Windows", "Messages", "SysUtils", "Classes", "Graphics", "Controls", "Forms", "Dialogs", "Oracle", "Db", "OracleData", "sboapiDataModuleImpl"]);
  const C = [U];
  $.defRecord("taccount", {"id": () => 0, "customerid": () => 0, "accno": () => '', "operatorid": () => 0, "currencyid": () => 0, "name": () => '', "opendate": () => 0, "limit": () => 0, "closedate": () => 0, "balance1": () => 0, "balance2": () => 0, "balance3": () => 0, "balance4": () => 0, "filialid": () => 0, "simotcet": () => 0, "tipacc": () => '', "oldaccno": () => '', "pairaccid": () => 0, "insider": () => '', "tempid": () => 0});
  U.defClass("Tout_accdatamodule", "TDataModule", {"branches": {"name": "Branches", "type": "TOracleDataSet"}, "branchesdata": {"name": "BranchesData", "type": "TDataSource"}, "users": {"name": "Users", "type": "TOracleDataSet"}, "usersdata": {"name": "UsersData", "type": "TDataSource"}, "currency": {"name": "Currency", "type": "TOracleDataSet"}, "currencydata": {"name": "CurrencyData", "type": "TDataSource"}, "accflags": {"name": "AccFlags", "type": "TOracleDataSet"}, "accflagsdata": {"name": "AccFlagsData", "type": "TDataSource"}, "balacc": {"name": "BalAcc", "type": "TOracleDataSet"}, "balaccdata": {"name": "BalAccData", "type": "TDataSource"}, "account": {"name": "Account", "type": "TOracleDataSet"}, "accountdata": {"name": "AccountData", "type": "TDataSource"}, "tenostat": {"name": "Tenostat", "type": "TOracleDataSet"}, "datatenostat": {"name": "DataTenostat", "type": "TDataSource"}, "lazyrest": {"name": "Lazyrest", "type": "TOracleDataSet"}, "datalazyrest": {"name": "DataLazyrest", "type": "TDataSource"}, "out_sbop": {"name": "OUT_SBOP", "type": "TOraclePackage"}, "reportsymbol": {"name": "ReportSymbol", "type": "TOracleDataSet"}, "reportsymboldata": {"name": "ReportSymbolData", "type": "TDataSource"}, "customersdata": {"name": "CustomersData", "type": "TDataSource"}, "pairaccount": {"name": "PairAccount", "type": "TOracleDataSet"}, "pairaccountdata": {"name": "PairAccountData", "type": "TDataSource"}, "sysdat": {"name": "Sysdat", "type": "TOracleDataSet"}, "out_sbutil": {"name": "OUT_SBUTIL", "type": "TOraclePackage"}, "sb_aca": {"name": "SB_ACA", "type": "TOraclePackage"}, "branchesid": {"name": "BranchesID", "type": "TFloatField"}, "branchesname": {"name": "BranchesNAME", "type": "TWideStringField"}, "usersid": {"name": "UsersID", "type": "TFloatField"}, "usersname": {"name": "UsersNAME", "type": "TWideStringField"}, "currencyvalu_name": {"name": "CurrencyVALU_NAME", "type": "TWideStringField"}, "accflagssymbol": {"name": "AccFlagsSYMBOL", "type": "TWideStringField"}, "accflagsname": {"name": "AccFlagsNAME", "type": "TWideStringField"}, "sysdattek_dat": {"name": "SysdatTEK_DAT", "type": "TDateTimeField"}, "lazyrestacc_id": {"name": "LazyrestACC_ID", "type": "TFloatField"}, "lazyrestostat": {"name": "LazyrestOSTAT", "type": "TFloatField"}, "lazyrestpok_ostat": {"name": "LazyrestPOK_OSTAT", "type": "TFloatField"}, "tenostatacc_id": {"name": "TenostatACC_ID", "type": "TFloatField"}, "tenostatostat": {"name": "TenostatOSTAT", "type": "TFloatField"}, "tenostatpok_ostat": {"name": "TenostatPOK_OSTAT", "type": "TFloatField"}, "reportsymbolid": {"name": "ReportSymbolID", "type": "TFloatField"}, "reportsymbolname": {"name": "ReportSymbolNAME", "type": "TWideStringField"}, "reportsymbolkod": {"name": "ReportSymbolKOD", "type": "TFloatField"}, "pairaccountid": {"name": "PairAccountID", "type": "TFloatField"}, "pairaccountacc_no": {"name": "PairAccountACC_NO", "type": "TWideStringField"}, "pairaccountstatus": {"name": "PairAccountSTATUS", "type": "TFloatField"}, "balaccbal_cn": {"name": "BalAccBAL_CN", "type": "TWideStringField"}, "balaccbalname": {"name": "BalAccBALNAME", "type": "TWideStringField"}, "accountid": {"name": "AccountID", "type": "TFloatField"}, "accountkli_id": {"name": "AccountKLI_ID", "type": "TFloatField"}, "accountop_id": {"name": "AccountOP_ID", "type": "TFloatField"}, "accountacc_no": {"name": "AccountACC_NO", "type": "TWideStringField"}, "accountval_acc": {"name": "AccountVAL_ACC", "type": "TIntegerField"}, "accountname": {"name": "AccountNAME", "type": "TWideStringField"}, "accountopen_dat": {"name": "AccountOPEN_DAT", "type": "TDateTimeField"}, "accountclose_dat": {"name": "AccountCLOSE_DAT", "type": "TDateTimeField"}, "accountbal_cn1": {"name": "AccountBAL_CN1", "type": "TFloatField"}, "accountbal_cn2": {"name": "AccountBAL_CN2", "type": "TFloatField"}, "accountbal_cn3": {"name": "AccountBAL_CN3", "type": "TFloatField"}, "accountbal_cn4": {"name": "AccountBAL_CN4", "type": "TFloatField"}, "accountfilial": {"name": "AccountFILIAL", "type": "TIntegerField"}, "accountsim_otcet": {"name": "AccountSIM_OTCET", "type": "TFloatField"}, "accounttipacc": {"name": "AccountTIPACC", "type": "TWideStringField"}, "accountlimit": {"name": "AccountLIMIT", "type": "TFloatField"}, "accountold_acc_no": {"name": "AccountOLD_ACC_NO", "type": "TWideStringField"}, "accountpair_acc": {"name": "AccountPAIR_ACC", "type": "TFloatField"}, "accountinsider": {"name": "AccountINSIDER", "type": "TWideStringField"}, "currencyvalute": {"name": "CurrencyVALUTE", "type": "TIntegerField"}, "accountstatu1": {"name": "AccountSTATU1", "type": "TFloatField"}, "balaccnew": {"name": "BalAccnew", "type": "TOracleDataSet"}, "balaccnewdata": {"name": "BalAccnewData", "type": "TDataSource"}, "balaccnewbal_cn": {"name": "BalAccnewBAL_CN", "type": "TWideStringField"}, "balaccnewbalname": {"name": "BalAccnewBALNAME", "type": "TWideStringField"}, "customers": {"name": "Customers", "type": "TOracleDataSet"}, "integerfield1": {"name": "IntegerField1", "type": "TIntegerField"}, "widestringfield1": {"name": "WideStringField1", "type": "TWideStringField"}, "accounttempid": {"name": "AccountTEMPID", "type": "TFloatField"}, "accountexpert": {"name": "AccountEXPERT", "type": "TWideStringField"}}, {});
  U.init(async () => {
    U.const("cs_add_account", "add_account");
    U.const("cs_upd_account", "upd_account");
    U.const("cs_close_account", "close_account");
    U.const("cs_generateID", "GenerateID");
    U.const("cs_flagexsist", "FlagExsist");
    U.var_("out_accdatamodule", null, "Tout_accdatamodule");
  });
  U.method("Tout_accdatamodule", "AddAccount", async function AddAccount(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"account": $.copyArg(p0), result: 0};
  await $.fixArgs(L0, ["account"]);
  {
    const $t1 = (await $.v(C, "OUT_SBOP"));
    const $t2 = (await $.wv([$t1], "Account", { get: async () => L0["account"], set: async (v) => { L0["account"] = v; }, local: true }, false));
    await $.wset([$t1, $t2], "Result", (await $.wcall([$t1, $t2], "CallIntegerFunction", [(await $.wv([$t1, $t2], "cs_add_account", C, false)), ["customerid", (await $.wv([$t1, $t2], "CustomerID", C, false)), "op_id", (await $.wv([$t1, $t2], "OperatorID", C, false)), "accno", (await $.wv([$t1, $t2], "AccNo", C, false)), "currencyid", (await $.wv([$t1, $t2], "CurrencyID", C, false)), "name", (await $.wv([$t1, $t2], "Name", C, false)), "open_dat", (await $.wv([$t1, $t2], "OpenDate", C, false)), "balcn", (await $.wv([$t1, $t2], "Balance1", C, false)), "limit", (await $.wv([$t1, $t2], "Limit", C, false)), "close_dat", (await $.wv([$t1, $t2], "CloseDate", C, false)), "bal_cn2", (await $.wv([$t1, $t2], "Balance2", C, false)), "bal_cn3", (await $.wv([$t1, $t2], "Balance3", C, false)), "bal_cn4", (await $.wv([$t1, $t2], "Balance4", C, false)), "filial", (await $.wv([$t1, $t2], "FilialID", C, false)), "sim_otcet", (await $.wv([$t1, $t2], "Simotcet", C, false)), "typeacc", (await $.wv([$t1, $t2], "Tipacc", C, false)), "old_acc_no", (await $.wv([$t1, $t2], "OldAccNo", C, false)), "pair_acc", (await $.wv([$t1, $t2], "PairAccID", C, false)), "insider", (await $.wv([$t1, $t2], "Insider", C, false)), "v_tempid", (await $.wv([$t1, $t2], "tempid", C, false))]], C)), { get: async () => L0["result"], set: async (v) => { L0["result"] = v; }, local: true });
  }
  return L0.result;
}, {"params": ["Account"], "kind": "function", "ptypes": ["TAccount"]});
  U.method("Tout_accdatamodule", "UpdateAccount", async function UpdateAccount(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"account": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["account"]);
  {
    const $t3 = (await $.v(C, "OUT_SBOP"));
    const $t4 = (await $.wv([$t3], "Account", { get: async () => L0["account"], set: async (v) => { L0["account"] = v; }, local: true }, false));
    await $.stmt((await $.wcall([$t3, $t4], "CallProcedure", [(await $.wv([$t3, $t4], "cs_upd_account", C, false)), ["v_id", (await $.wv([$t3, $t4], "ID", C, false)), "v_customerid", (await $.wv([$t3, $t4], "CustomerID", C, false)), "v_op_id", (await $.wv([$t3, $t4], "OperatorID", C, false)), "v_accno", (await $.wv([$t3, $t4], "AccNo", C, false)), "v_currencyid", (await $.wv([$t3, $t4], "CurrencyID", C, false)), "v_name", (await $.wv([$t3, $t4], "Name", C, false)), "v_open_dat", (await $.wv([$t3, $t4], "OpenDate", C, false)), "v_balcn", (await $.wv([$t3, $t4], "Balance1", C, false)), "v_limit", (await $.wv([$t3, $t4], "Limit", C, false)), "v_close_dat", (await $.wv([$t3, $t4], "CloseDate", C, false)), "v_bal_cn2", (await $.wv([$t3, $t4], "Balance2", C, false)), "v_bal_cn3", (await $.wv([$t3, $t4], "Balance3", C, false)), "v_bal_cn4", (await $.wv([$t3, $t4], "Balance4", C, false)), "v_filial", (await $.wv([$t3, $t4], "FilialID", C, false)), "v_sim_otcet", (await $.wv([$t3, $t4], "Simotcet", C, false)), "v_typeacc", (await $.wv([$t3, $t4], "Tipacc", C, false)), "v_old_acc_no", (await $.wv([$t3, $t4], "OldAccNo", C, false)), "v_pair_acc", (await $.wv([$t3, $t4], "PairAccID", C, false)), "v_insider", (await $.wv([$t3, $t4], "Insider", C, false)), "v_tempid", (await $.wv([$t3, $t4], "tempid", C, false))]], C)));
  }
  return L0.result;
}, {"params": ["Account"], "kind": "procedure", "ptypes": ["TAccount"]});
  U.method("Tout_accdatamodule", "CloseAccount", async function CloseAccount(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"accountid": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["accountid"]);
  {
    const $t5 = (await $.v(C, "OUT_SBOP"));
    const $t6 = (await $.wv([$t5], "Account", C, false));
    await $.stmt((await $.wcall([$t5, $t6], "CallProcedure", [(await $.wv([$t5, $t6], "cs_close_account", C, false)), ["accid", (await $.wv([$t5, $t6], "AccountID", { get: async () => L0["accountid"], set: async (v) => { L0["accountid"] = v; }, local: true }, false)), "doclose", 1]], C)));
  }
  return L0.result;
}, {"params": ["AccountID"], "kind": "procedure", "ptypes": ["Longint"]});
  U.method("Tout_accdatamodule", "GenerateID", async function GenerateID(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: 0};
  {
    const $t7 = (await $.v(C, "OUT_SBOP"));
    await $.wset([$t7], "Result", (await $.wcall([$t7], "CallIntegerFunction", [(await $.wv([$t7], "cs_generateID", C, false)), []], C)), { get: async () => L0["result"], set: async (v) => { L0["result"] = v; }, local: true });
  }
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("Tout_accdatamodule", "FlagExsist", async function FlagExsist(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"accid": $.copyArg(p0), "ch": $.copyArg(p1), result: false};
  await $.fixArgs(L0, ["accid", "ch"]);
  {
    const $t8 = (await $.v(C, "OUT_SBUTIL"));
    await $.wset([$t8], "Result", (await $.wcall([$t8], "CallBooleanFunction", [(await $.wv([$t8], "cs_flagexsist", C, false)), ["AccID", (await $.wv([$t8], "AccID", { get: async () => L0["accid"], set: async (v) => { L0["accid"] = v; }, local: true }, false)), "FlagChar", (await $.wv([$t8], "ch", { get: async () => L0["ch"], set: async (v) => { L0["ch"] = v; }, local: true }, false))]], C)), { get: async () => L0["result"], set: async (v) => { L0["result"] = v; }, local: true });
  }
  return L0.result;
}, {"params": ["AccID", "Ch"], "kind": "function", "ptypes": ["Integer", "Char"]});
  U.method("Tout_accdatamodule", "AccountApplyRecord", async function AccountApplyRecord(Self, p0, p1, p2, p3) {
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
  U.method("Tout_accdatamodule", "PairAccountBeforeOpen", async function PairAccountBeforeOpen(Self, p0) {
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
  U.method("Tout_accdatamodule", "Customers_AfterScroll", async function Customers_AfterScroll(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"dataset": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["dataset"]);
  if ($.truthy($.in_((await $.mv((await $.v(C, "Account")), "State")), [(await $.v(C, "dsInsert")), (await $.v(C, "dsEdit"))]))) {
    await $.mset((await $.mcall((await $.v(C, "Account")), "FieldByName", ["Name"])), "AsString", (await $.mv((await $.mcall(L0["dataset"], "FieldByName", ["Name"])), "AsString")));
  }
  return L0.result;
}, {"params": ["DataSet"], "kind": "procedure", "ptypes": ["TDataSet"]});
  U.method("Tout_accdatamodule", "Refresh_", async function Refresh_(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"datasetname": $.copyArg(p0), result: undefined, "i": 0};
  await $.fixArgs(L0, ["datasetname"]);
  L0["c_err_message"] = " Table or View in Dataset \"%s\" does not exist! ";
  {
    const $t13 = (await $.v(C, "out_accdatamodule"));
    await $.mcall((await $.wv([$t13], "Account", C, false)), "Close", []);
    await $.mcall((await $.wv([$t13], "Customers", C, false)), "Close", []);
    await $.mcall((await $.wv([$t13], "Users", C, false)), "Close", []);
    await $.mcall((await $.wv([$t13], "Branches", C, false)), "Close", []);
    await $.mcall((await $.wv([$t13], "Currency", C, false)), "Close", []);
    await $.mcall((await $.wv([$t13], "AccFlags", C, false)), "Close", []);
    await $.mcall((await $.wv([$t13], "BalAcc", C, false)), "Close", []);
    await $.mcall((await $.wv([$t13], "BalAccnew", C, false)), "Close", []);
    await $.mcall((await $.wv([$t13], "Tenostat", C, false)), "Close", []);
    await $.mcall((await $.wv([$t13], "Lazyrest", C, false)), "Close", []);
    await $.mcall((await $.wv([$t13], "ReportSymbol", C, false)), "Close", []);
    await $.mcall((await $.wv([$t13], "PairAccount", C, false)), "Close", []);
    await $.mcall((await $.wv([$t13], "Sysdat", C, false)), "Close", []);
    await $.mcall((await $.wv([$t13], "Account", C, false)), "Open", []);
    await $.mcall((await $.wv([$t13], "Customers", C, false)), "Open", []);
    await $.mcall((await $.wv([$t13], "Users", C, false)), "Open", []);
    await $.mcall((await $.wv([$t13], "Branches", C, false)), "Open", []);
    await $.mcall((await $.wv([$t13], "Currency", C, false)), "Open", []);
    await $.mcall((await $.wv([$t13], "AccFlags", C, false)), "Open", []);
    await $.mcall((await $.wv([$t13], "BalAcc", C, false)), "Open", []);
    await $.mcall((await $.wv([$t13], "BalAccnew", C, false)), "Open", []);
    await $.mcall((await $.wv([$t13], "Tenostat", C, false)), "Open", []);
    await $.mcall((await $.wv([$t13], "Lazyrest", C, false)), "Open", []);
    await $.mcall((await $.wv([$t13], "ReportSymbol", C, false)), "Open", []);
    await $.mcall((await $.wv([$t13], "PairAccount", C, false)), "Open", []);
    await $.mcall((await $.wv([$t13], "Sysdat", C, false)), "Open", []);
  }
  return L0.result;
}, {"params": ["DataSetName"], "kind": "procedure", "ptypes": ["String"]});
  return U;
}
