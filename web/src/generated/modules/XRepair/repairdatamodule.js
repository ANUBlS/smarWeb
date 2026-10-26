// Generated from repairdatamodule.pas by pas2js — do not edit by hand; regenerate instead.
/* eslint-disable */
// @ts-nocheck

export default function define($) {
  const U = $.unit("repairdatamodule", ["Windows", "Messages", "SysUtils", "Classes", "Graphics", "Controls", "Forms", "Dialogs", "Db", "OracleData", "Oracle", "sboapidatamoduleimpl", "RepairMainFormImpl"]);
  const C = [U];
  U.defClass("TDataMod", "TDataModule", {"p_correct": {"name": "p_correct", "type": "TOraclePackage"}, "dstransaction": {"name": "DsTransaction", "type": "TDataSource"}, "transactions": {"name": "Transactions", "type": "TOracleDataSet"}, "dsbankday": {"name": "DsBankDay", "type": "TDataSource"}, "bankday": {"name": "BankDay", "type": "TOracleDataSet"}, "dsdebitrate": {"name": "DSDebitRate", "type": "TDataSource"}, "debitrate": {"name": "DebitRate", "type": "TOracleDataSet"}, "creditrate": {"name": "CreditRate", "type": "TOracleDataSet"}, "dscreditrate": {"name": "DSCreditRate", "type": "TDataSource"}, "tfilial_d": {"name": "tFilial_D", "type": "TOracleDataSet"}, "dsfilial_d": {"name": "dsFilial_D", "type": "TDataSource"}, "dsuser": {"name": "dsUser", "type": "TDataSource"}, "users": {"name": "Users", "type": "TOracleDataSet"}, "dsdcurrency": {"name": "dsDCurrency", "type": "TDataSource"}, "dcurrency": {"name": "DCurrency", "type": "TOracleDataSet"}, "dsccurrency": {"name": "dsCCurrency", "type": "TDataSource"}, "ccurrency": {"name": "CCurrency", "type": "TOracleDataSet"}, "dsdebitacc": {"name": "dsDebitAcc", "type": "TDataSource"}, "debitaccount": {"name": "DebitAccount", "type": "TOracleDataSet"}, "dscreditacc": {"name": "dsCreditAcc", "type": "TDataSource"}, "creditaccount": {"name": "CreditAccount", "type": "TOracleDataSet"}, "dsdescription": {"name": "dsDescription", "type": "TDataSource"}, "descriptiondata": {"name": "DescriptionDATA", "type": "TOracleDataSet"}, "dsinbalancesymbols": {"name": "dsInBalanceSymbols", "type": "TDataSource"}, "inbalancesymbolsdata": {"name": "InBalanceSymbolsData", "type": "TOracleDataSet"}, "dsoutbalancechar": {"name": "dsOutBalanceChar", "type": "TDataSource"}, "outbalancechardata": {"name": "OutBalanceCharData", "type": "TOracleDataSet"}}, {});
  U.init(async () => {
    U.var_("DataMod", null, "TDataMod");
  });
  U.method("TDataMod", "TransactionsAfterScroll", async function TransactionsAfterScroll(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"dataset": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["dataset"]);
  {
    const $t1 = (await $.v(C, "RepairMainForm"));
    await $.mset((await $.wv([$t1], "LTrDate", C, false)), "Caption", (await $.mv((await $.mcall((await $.wv([$t1], "Transactions", C, false)), "FieldByName", ["DAT"])), "asstring")));
    await $.mset((await $.wv([$t1], "LD_Currency", C, false)), "Caption", (await $.mv((await $.mcall((await $.wv([$t1], "Transactions", C, false)), "FieldByName", ["D$"])), "asstring")));
    await $.mset((await $.wv([$t1], "LC_Currency", C, false)), "Caption", (await $.mv((await $.mcall((await $.wv([$t1], "Transactions", C, false)), "FieldByName", ["C$"])), "asstring")));
    await $.mset((await $.wv([$t1], "LRate_D", C, false)), "Caption", (await $.mcall((await $.wv([$t1], "P_Correct", C, false)), "CallFloatFunction", ["GetRate", ["CurrencyID", (await $.wcall([$t1], "StrToInt", [(await $.mv((await $.wv([$t1], "LD_Currency", C, false)), "Caption"))], C)), "ArchiveDate", (await $.wcall([$t1], "FormatDateTime", ["d-mmmm-yy", (await $.wcall([$t1], "StrToDate", [(await $.mv((await $.wv([$t1], "LTrDate", C, false)), "Caption"))], C))], C))]])));
    await $.mset((await $.wv([$t1], "LRate_C", C, false)), "Caption", (await $.mcall((await $.wv([$t1], "P_Correct", C, false)), "CallFloatFunction", ["GetRate", ["CurrencyID", (await $.wcall([$t1], "StrToInt", [(await $.mv((await $.wv([$t1], "LC_Currency", C, false)), "Caption"))], C)), "ArchiveDate", (await $.wcall([$t1], "FormatDateTime", ["d-mmmm-yy", (await $.wcall([$t1], "StrToDate", [(await $.mv((await $.wv([$t1], "LTrDate", C, false)), "Caption"))], C))], C))]])));
    await $.mset((await $.wv([$t1], "LTrDate", C, false)), "Caption", (await $.mv((await $.mcall((await $.wv([$t1], "Transactions", C, false)), "FieldByName", ["DAT"])), "asstring")));
    await $.mset((await $.wv([$t1], "LTrRate_D", C, false)), "Caption", (await $.mv((await $.mcall((await $.wv([$t1], "Transactions", C, false)), "FieldByName", ["Rate_d"])), "asstring")));
    await $.mset((await $.wv([$t1], "LTrRate_C", C, false)), "Caption", (await $.mv((await $.mcall((await $.wv([$t1], "Transactions", C, false)), "FieldByName", ["Rate_c"])), "asstring")));
  }
  return L0.result;
}, {"params": ["DataSet"], "kind": "procedure", "ptypes": ["TDataSet"]});
  return U;
}
