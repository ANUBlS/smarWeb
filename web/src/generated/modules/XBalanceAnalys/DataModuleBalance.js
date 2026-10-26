// Generated from DataModuleBalance.pas by pas2js — do not edit by hand; regenerate instead.
/* eslint-disable */
// @ts-nocheck

export default function define($) {
  const U = $.unit("DataModuleBalance", ["Windows", "Messages", "SysUtils", "Classes", "Graphics", "Controls", "Forms", "Dialogs", "Db", "OracleData", "Oracle", "sboapiDataModuleImpl", "BalanceAnalysImpl"]);
  const C = [U];
  U.defClass("TDataModulBalance", "TDataModule", {"databalance": {"name": "DataBalance", "type": "TDataSource"}, "balance": {"name": "Balance", "type": "TOracleDataSet"}, "dataaccount": {"name": "DataAccount", "type": "TDataSource"}, "account": {"name": "Account", "type": "TOracleDataSet"}, "datatransaction": {"name": "DataTransaction", "type": "TDataSource"}, "transaction": {"name": "Transaction", "type": "TOracleDataSet"}, "dataoperator": {"name": "DataOperator", "type": "TDataSource"}, "operators": {"name": "Operators", "type": "TOracleDataSet"}, "datacurrency": {"name": "DataCurrency", "type": "TDataSource"}, "operationtype": {"name": "OperationType", "type": "TOracleQuery"}, "balancebalanceaccount": {"name": "BalanceBALANCEACCOUNT", "type": "TFloatField"}, "balancefirstactive": {"name": "BalanceFIRSTACTIVE", "type": "TFloatField"}, "balancefirstpassive": {"name": "BalanceFIRSTPASSIVE", "type": "TFloatField"}, "balancedturnover": {"name": "BalanceDTURNOVER", "type": "TFloatField"}, "balancecturnover": {"name": "BalanceCTURNOVER", "type": "TFloatField"}, "balancelastactive": {"name": "BalanceLASTACTIVE", "type": "TFloatField"}, "balancelastpassive": {"name": "BalanceLASTPASSIVE", "type": "TFloatField"}, "perioddata": {"name": "PeriodData", "type": "TOracleDataSet"}, "sysdat": {"name": "SysDat", "type": "TOracleDataSet"}, "currency": {"name": "Currency", "type": "TOracleDataSet"}, "accountaccountid": {"name": "AccountACCOUNTID", "type": "TFloatField"}, "accountaccno": {"name": "AccountACCNO", "type": "TWideStringField"}, "accountcurrencyid": {"name": "AccountCURRENCYID", "type": "TIntegerField"}, "accountbranchid": {"name": "AccountBRANCHID", "type": "TIntegerField"}, "accountbalanceno": {"name": "AccountBALANCENO", "type": "TFloatField"}, "accountbeginactive": {"name": "AccountBEGINACTIVE", "type": "TFloatField"}, "accountbeginpassive": {"name": "AccountBEGINPASSIVE", "type": "TFloatField"}, "accountdturnover": {"name": "AccountDTURNOVER", "type": "TFloatField"}, "accountcturnover": {"name": "AccountCTURNOVER", "type": "TFloatField"}, "accountendactive": {"name": "AccountENDACTIVE", "type": "TFloatField"}, "accountendpassive": {"name": "AccountENDPASSIVE", "type": "TFloatField"}, "transactionid": {"name": "TransactionID", "type": "TFloatField"}, "transactionoperatorid": {"name": "TransactionOPERATORID", "type": "TFloatField"}, "transactionoperationtype": {"name": "TransactionOPERATIONTYPE", "type": "TIntegerField"}, "transactiondat": {"name": "TransactionDAT", "type": "TDateTimeField"}, "transactiondebt": {"name": "TransactionDEBT", "type": "TFloatField"}, "transactiondebtacc": {"name": "TransactionDEBTACC", "type": "TWideStringField"}, "transactiondvalname": {"name": "TransactionDVALNAME", "type": "TWideStringField"}, "transactionkredit": {"name": "TransactionKREDIT", "type": "TFloatField"}, "transactioncreditacc": {"name": "TransactionCREDITACC", "type": "TWideStringField"}, "transactioncvalname": {"name": "TransactionCVALNAME", "type": "TWideStringField"}, "transactionammount": {"name": "TransactionAMMOUNT", "type": "TFloatField"}, "transactionammount_c": {"name": "TransactionAMMOUNT_C", "type": "TFloatField"}, "transactionlammount": {"name": "TransactionLAMMOUNT", "type": "TFloatField"}, "transactionname": {"name": "TransactionNAME", "type": "TWideStringField"}, "accountname": {"name": "AccountNAME", "type": "TWideStringField"}, "transactionusername": {"name": "TransactionUSERNAME", "type": "TWideStringField"}, "datadebttransaction": {"name": "DatadebtTransaction", "type": "TDataSource"}, "debttransaction": {"name": "debtTransaction", "type": "TOracleDataSet"}, "datetimefield1": {"name": "DateTimeField1", "type": "TDateTimeField"}, "widestringfield1": {"name": "WideStringField1", "type": "TWideStringField"}, "widestringfield2": {"name": "WideStringField2", "type": "TWideStringField"}, "widestringfield3": {"name": "WideStringField3", "type": "TWideStringField"}, "widestringfield4": {"name": "WideStringField4", "type": "TWideStringField"}, "floatfield1": {"name": "FloatField1", "type": "TFloatField"}, "floatfield2": {"name": "FloatField2", "type": "TFloatField"}, "floatfield3": {"name": "FloatField3", "type": "TFloatField"}, "widestringfield5": {"name": "WideStringField5", "type": "TWideStringField"}, "floatfield4": {"name": "FloatField4", "type": "TFloatField"}, "floatfield5": {"name": "FloatField5", "type": "TFloatField"}, "integerfield1": {"name": "IntegerField1", "type": "TIntegerField"}, "floatfield6": {"name": "FloatField6", "type": "TFloatField"}, "floatfield7": {"name": "FloatField7", "type": "TFloatField"}, "widestringfield6": {"name": "WideStringField6", "type": "TWideStringField"}, "datacredtransaction": {"name": "DatacredTransaction", "type": "TDataSource"}, "credtransaction": {"name": "credTransaction", "type": "TOracleDataSet"}, "datetimefield2": {"name": "DateTimeField2", "type": "TDateTimeField"}, "widestringfield7": {"name": "WideStringField7", "type": "TWideStringField"}, "widestringfield8": {"name": "WideStringField8", "type": "TWideStringField"}, "widestringfield9": {"name": "WideStringField9", "type": "TWideStringField"}, "widestringfield10": {"name": "WideStringField10", "type": "TWideStringField"}, "floatfield8": {"name": "FloatField8", "type": "TFloatField"}, "floatfield9": {"name": "FloatField9", "type": "TFloatField"}, "floatfield10": {"name": "FloatField10", "type": "TFloatField"}, "widestringfield11": {"name": "WideStringField11", "type": "TWideStringField"}, "floatfield11": {"name": "FloatField11", "type": "TFloatField"}, "floatfield12": {"name": "FloatField12", "type": "TFloatField"}, "integerfield2": {"name": "IntegerField2", "type": "TIntegerField"}, "floatfield13": {"name": "FloatField13", "type": "TFloatField"}, "floatfield14": {"name": "FloatField14", "type": "TFloatField"}, "widestringfield12": {"name": "WideStringField12", "type": "TWideStringField"}, "datacredbal_acc": {"name": "Datacredbal_acc", "type": "TDataSource"}, "credbal_acc": {"name": "credbal_acc", "type": "TOracleDataSet"}, "credbal_acccem": {"name": "credbal_accCEM", "type": "TFloatField"}, "credbal_accdebetbalans": {"name": "credbal_accDEBETBALANS", "type": "TFloatField"}, "credbal_acckreditbalans": {"name": "credbal_accKREDITBALANS", "type": "TFloatField"}, "datacdebtbal_acc": {"name": "Datacdebtbal_acc", "type": "TDataSource"}, "debtbal_acc": {"name": "debtbal_acc", "type": "TOracleDataSet"}, "floatfield15": {"name": "FloatField15", "type": "TFloatField"}, "floatfield16": {"name": "FloatField16", "type": "TFloatField"}, "floatfield17": {"name": "FloatField17", "type": "TFloatField"}, "operatorsid": {"name": "OperatorsID", "type": "TFloatField"}, "operatorsname": {"name": "OperatorsNAME", "type": "TWideStringField"}, "operatorsctime": {"name": "OperatorsCTIME", "type": "TDateTimeField"}, "currencyvalute": {"name": "CurrencyVALUTE", "type": "TIntegerField"}, "currencyvalu_name": {"name": "CurrencyVALU_NAME", "type": "TWideStringField"}, "sysdattek_dat": {"name": "SysDatTEK_DAT", "type": "TDateTimeField"}, "transactionkreditbalans": {"name": "TransactionKREDITBALANS", "type": "TFloatField"}, "transactiondebetbalans": {"name": "TransactionDEBETBALANS", "type": "TFloatField"}, "debttransactionkreditbalans": {"name": "debtTransactionKREDITBALANS", "type": "TFloatField"}, "debttransactiondebetbalans": {"name": "debtTransactionDEBETBALANS", "type": "TFloatField"}, "credtransactionkreditbalans": {"name": "credTransactionKREDITBALANS", "type": "TFloatField"}, "credtransactiondebetbalans": {"name": "credTransactionDEBETBALANS", "type": "TFloatField"}}, {});
  U.init(async () => {
    U.var_("DataModulBalance", null, "TDataModulBalance");
  });
  U.method("TDataModulBalance", "OperationTypeThreadRecord", async function OperationTypeThreadRecord(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t1 = (await $.v(C, "FormBalanceAnalys"));
    const $t2 = (await $.wv([$t1], "CBBranches", C, false));
    const $t3 = (await $.wv([$t1, $t2], "Items", C, false));
    await $.stmt((await $.wcall([$t1, $t2, $t3], "Add", [(await $.mcall((await $.wv([$t1, $t2, $t3], "Sender", { get: async () => L0["sender"], set: async (v) => { L0["sender"] = v; }, local: true }, false)), "Field", ["name"]))], C)));
    { const $t4 = await $.iset((await $.wv([$t1, $t2, $t3], "Checked", C, false)), [$.sub((await $.wv([$t1, $t2, $t3], "Count", C, false)), 1)], (await $.wv([$t1, $t2, $t3], "True", C, false))); if ($t4 !== undefined) { await $.wset([$t1, $t2, $t3], "Checked", $t4, C); } }
    await $.stmt((await $.mcall((await $.wcall([$t1, $t2, $t3], "TStringList", [(await $.wcall([$t1, $t2, $t3], "Pointer", [(await $.mv((await $.wv([$t1, $t2, $t3], "CBBranches", C, false)), "Tag"))], C))], C)), "Add", [(await $.mcall((await $.wv([$t1, $t2, $t3], "Sender", { get: async () => L0["sender"], set: async (v) => { L0["sender"] = v; }, local: true }, false)), "Field", ["ID"]))])));
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TOracleQuery"]});
  U.method("TDataModulBalance", "BalanceAfterScroll", async function BalanceAfterScroll(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"dataset": $.copyArg(p0), result: undefined, "balanceno": ''};
  await $.fixArgs(L0, ["dataset"]);
  L0["balanceno"] = (await $.mv((await $.mcall(L0["dataset"], "FieldByName", ["BalanceAccount"])), "AsString"));
  {
    const $t5 = (await $.v(C, "Account"));
    await $.wset([$t5], "Filtered", (await $.wv([$t5], "False", C, false)), C);
    await $.wset([$t5], "Filter", $.add("BalanceNo = ", (await $.wv([$t5], "BalanceNo", { get: async () => L0["balanceno"], set: async (v) => { L0["balanceno"] = v; }, local: true }, false))), C);
    await $.wset([$t5], "Filtered", (await $.wv([$t5], "True", C, false)), C);
  }
  return L0.result;
}, {"params": ["DataSet"], "kind": "procedure", "ptypes": ["TDataSet"]});
  U.method("TDataModulBalance", "AccountAfterScroll", async function AccountAfterScroll(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"dataset": $.copyArg(p0), result: undefined, "accountid": '', "kreditbal": ''};
  await $.fixArgs(L0, ["dataset"]);
  {
    const $t6 = (await $.mcall(L0["dataset"], "FieldByName", ["AccountID"]));
    if ($.truthy((await $.wv([$t6], "IsNull", C, false)))) {
      await $.wset([$t6], "AccountID", "-1", { get: async () => L0["accountid"], set: async (v) => { L0["accountid"] = v; }, local: true });
    } else {
      await $.wset([$t6], "AccountID", (await $.wv([$t6], "AsString", C, false)), { get: async () => L0["accountid"], set: async (v) => { L0["accountid"] = v; }, local: true });
    }
  }
  {
    const $t7 = (await $.v(C, "Transaction"));
    await $.wset([$t7], "Filtered", (await $.wv([$t7], "False", C, false)), C);
    await $.wset([$t7], "Filter", $.add($.add($.add($.add($.add("(Debt = ", (await $.wv([$t7], "AccountID", { get: async () => L0["accountid"], set: async (v) => { L0["accountid"] = v; }, local: true }, false))), ") OR ("), "Kredit = "), (await $.wv([$t7], "AccountID", { get: async () => L0["accountid"], set: async (v) => { L0["accountid"] = v; }, local: true }, false))), ")"), C);
    await $.wset([$t7], "Filtered", (await $.wv([$t7], "True", C, false)), C);
  }
  return L0.result;
}, {"params": ["DataSet"], "kind": "procedure", "ptypes": ["TDataSet"]});
  return U;
}
