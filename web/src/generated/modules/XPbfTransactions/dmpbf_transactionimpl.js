// Generated from dmpbf_transactionimpl.pas by pas2js — do not edit by hand; regenerate instead.
/* eslint-disable */
// @ts-nocheck

export default function define($) {
  const U = $.unit("dmpbf_transactionimpl", ["Windows", "Messages", "SysUtils", "Classes", "Graphics", "Controls", "Forms", "Dialogs", "Db", "OracleData", "Oracle", "sboapiDataModuleImpl"]);
  const C = [U];
  U.defClass("Tdmpbf_transaction", "TDataModule", {"transactionsdata": {"name": "TransactionsData", "type": "TDataSource"}, "pbftransactions": {"name": "PBFTransactions", "type": "TOracleDataSet"}, "pbftransactionstransactiondate": {"name": "PBFTransactionsTRANSACTIONDATE", "type": "TDateTimeField"}, "pbftransactionsdebitaccno": {"name": "PBFTransactionsDEBITACCNO", "type": "TWideStringField"}, "pbftransactionscreditaccno": {"name": "PBFTransactionsCREDITACCNO", "type": "TWideStringField"}, "pbftransactionscreditcurrencysname": {"name": "PBFTransactionsCREDITCURRENCYSNAME", "type": "TWideStringField"}, "pbftransactionsdebitamount": {"name": "PBFTransactionsDEBITAMOUNT", "type": "TFloatField"}, "pbftransactionscreditamount": {"name": "PBFTransactionsCREDITAMOUNT", "type": "TFloatField"}, "pbftransactionslamount": {"name": "PBFTransactionsLAMOUNT", "type": "TFloatField"}, "pbftransactionsnum": {"name": "PBFTransactionsNUM", "type": "TFloatField"}, "pbftransactionsdebitcurrencysname": {"name": "PBFTransactionsDEBITCURRENCYSNAME", "type": "TWideStringField"}, "pbfoperationsds": {"name": "PBFOperationsds", "type": "TDataSource"}, "pbfoperations": {"name": "PBFOperations", "type": "TOracleDataSet"}, "pbfoperationsid": {"name": "PBFOperationsID", "type": "TFloatField"}, "pbfoperationsname": {"name": "PBFOperationsNAME", "type": "TWideStringField"}, "pbfoperationshdate": {"name": "PBFOperationsHDATE", "type": "TDateTimeField"}, "pbfoperationsclientaccid": {"name": "PBFOperationsCLIENTACCID", "type": "TFloatField"}, "pbfoperationsamount": {"name": "PBFOperationsAMOUNT", "type": "TFloatField"}, "currdat": {"name": "CurrDat", "type": "TOracleDataSet"}, "currdattek_dat": {"name": "CurrDatTEK_DAT", "type": "TDateTimeField"}, "currdatpred_dat": {"name": "CurrDatPRED_DAT", "type": "TDateTimeField"}, "pbfaccs": {"name": "PBFAccs", "type": "TOracleDataSet"}, "pbfaccsds": {"name": "PBFAccsds", "type": "TDataSource"}, "pbftransaction": {"name": "PBFTransaction", "type": "TOraclePackage"}, "pbftransactionsopname": {"name": "PBFTransactionsOPNAME", "type": "TWideStringField"}, "pbftransactionsid": {"name": "PBFTransactionsID", "type": "TFloatField"}, "pbfvalutes": {"name": "PBFValutes", "type": "TOracleDataSet"}, "pbffilials": {"name": "PBFFilials", "type": "TOracleDataSet"}, "pbfoptypes": {"name": "PBFOptypes", "type": "TOracleDataSet"}, "pbfusers": {"name": "pbfusers", "type": "TOracleDataSet"}, "pbfvalutesvalute": {"name": "PBFValutesVALUTE", "type": "TIntegerField"}, "pbfvalutesvalu_name": {"name": "PBFValutesVALU_NAME", "type": "TWideStringField"}, "pbfvalutesds": {"name": "PBFValutesds", "type": "TDataSource"}, "pbffilialsid": {"name": "PBFFilialsID", "type": "TFloatField"}, "pbffilialsname": {"name": "PBFFilialsNAME", "type": "TWideStringField"}, "pbffilialsds": {"name": "PBFFilialsds", "type": "TDataSource"}, "pbfoptypesds": {"name": "PBFOptypesds", "type": "TDataSource"}, "pbfoptypesoperationtype": {"name": "PBFOptypesOPERATIONTYPE", "type": "TWideStringField"}, "pbfusersid": {"name": "pbfusersID", "type": "TFloatField"}, "pbfusersname": {"name": "pbfusersNAME", "type": "TWideStringField"}, "pbfusersds": {"name": "pbfusersds", "type": "TDataSource"}, "pbftransactionsval_acc": {"name": "PBFTransactionsVAL_ACC", "type": "TFloatField"}, "pbftransactionsdebitfilial": {"name": "PBFTransactionsDEBITFILIAL", "type": "TIntegerField"}, "pbftransactionscreditfilial": {"name": "PBFTransactionsCREDITFILIAL", "type": "TIntegerField"}, "pbftransactionsfromfiltofil": {"name": "PBFTransactionsFROMFILTOFIL", "type": "TWideStringField"}, "pbftransactionsusername": {"name": "PBFTransactionsUSERNAME", "type": "TWideStringField"}, "pbfreportds": {"name": "PBFReportDs", "type": "TOracleDataSet"}, "pbftransactionsclientaccid": {"name": "PBFTransactionsCLIENTACCID", "type": "TFloatField"}, "pbftransactionsname": {"name": "PBFTransactionsNAME", "type": "TWideStringField"}, "pbftransactionsstatus": {"name": "PBFTransactionsSTATUS", "type": "TFloatField"}, "pbftransactionspaymentno": {"name": "PBFTransactionsPAYMENTNO", "type": "TWideStringField"}, "pbfreportdspe_bank": {"name": "PBFReportDsPE_BANK", "type": "TWideStringField"}, "pbfreportdspe_kod_b": {"name": "PBFReportDsPE_KOD_B", "type": "TFloatField"}, "pbfreportdspe_inn": {"name": "PBFReportDsPE_INN", "type": "TWideStringField"}, "pbfreportdspe_swift": {"name": "PBFReportDsPE_SWIFT", "type": "TWideStringField"}, "pbfreportdspc_accno": {"name": "PBFReportDsPC_ACCNO", "type": "TWideStringField"}, "pbfreportdsvalute": {"name": "PBFReportDsVALUTE", "type": "TWideStringField"}, "pbfreportdsre_bank": {"name": "PBFReportDsRE_BANK", "type": "TWideStringField"}, "pbfreportdsre_kod_b": {"name": "PBFReportDsRE_KOD_B", "type": "TFloatField"}, "pbfreportdsre_inn": {"name": "PBFReportDsRE_INN", "type": "TWideStringField"}, "pbfreportdsre_krno": {"name": "PBFReportDsRE_KRNO", "type": "TWideStringField"}, "pbfreportdsre_swift": {"name": "PBFReportDsRE_SWIFT", "type": "TWideStringField"}, "pbfreportdsrc_name": {"name": "PBFReportDsRC_NAME", "type": "TWideStringField"}, "pbfreportdsrc_account": {"name": "PBFReportDsRC_ACCOUNT", "type": "TWideStringField"}, "pbfreportdsstamp": {"name": "PBFReportDsSTAMP", "type": "TBlobField"}, "pbfreportdschiefsign": {"name": "PBFReportDsCHIEFSIGN", "type": "TBlobField"}, "pbfreportdsaccoutantsign": {"name": "PBFReportDsACCOUTANTSIGN", "type": "TBlobField"}, "pbfreportdspaymentno": {"name": "PBFReportDsPAYMENTNO", "type": "TWideStringField"}, "pbftransactionsoptype": {"name": "PBFTransactionsOPTYPE", "type": "TWideStringField"}, "pbfreportdssedr": {"name": "PBFReportDsSEDR", "type": "TWideStringField"}, "pbfreportdsbuhaltr": {"name": "PBFReportDsBUHALTR", "type": "TWideStringField"}, "pbfreportdspee_krno": {"name": "PBFReportDspee_krno", "type": "TWideStringField"}, "kindofaccs": {"name": "kindofaccs", "type": "TOracleDataSet"}, "kindofaccsacc_no": {"name": "kindofaccsACC_NO", "type": "TWideStringField"}, "pbfopertiontypes": {"name": "PBFOpertionTypes", "type": "TOracleDataSet"}, "pbfopertiontypesid": {"name": "PBFOpertionTypesID", "type": "TFloatField"}, "pbfopertiontypesname": {"name": "PBFOpertionTypesNAME", "type": "TWideStringField"}, "pbfdesc": {"name": "PBFDesc", "type": "TOracleDataSet"}, "pbfdescdescription": {"name": "PBFDescDESCRIPTION", "type": "TWideStringField"}, "pbfreportdspe_krno": {"name": "PBFReportDsPE_KRNO", "type": "TWideStringField"}, "pbfreportdsrc_inn": {"name": "PBFReportDsRC_INN", "type": "TWideStringField"}, "opertype": {"name": "OperType", "type": "String"}, "opertype1": {"name": "OperType1", "type": "String"}, "trdat": {"name": "TrDat", "type": "Tdatetime"}}, {});
  U.init(async () => {
    U.var_("dmpbf_transaction", null, "Tdmpbf_transaction");
  });
  U.method("Tdmpbf_transaction", "DataModuleCreate", async function DataModuleCreate(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mcall((await $.v(C, "CurrDat")), "open", []);
  await $.mcall((await $.v(C, "PBFAccs")), "open", []);
  await $.mcall((await $.v(C, "kindofaccs")), "open", []);
  await $.mcall((await $.v(C, "PBFOpertionTypes")), "open", []);
  {
    const $t1 = (await $.v(C, "PBFTransactions"));
    await $.stmt((await $.wcall([$t1], "SetVariable", ["TransactionDate", (await $.mv((await $.mcall((await $.wv([$t1], "CurrDat", C, false)), "FieldByName", ["TEK_DAT"])), "AsDateTime"))], C)));
    await $.stmt((await $.wcall([$t1], "SetVariable", ["orderfield", "id"], C)));
    await $.stmt($.wcall([$t1], "open", [], C));
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("Tdmpbf_transaction", "DataModuleDestroy", async function DataModuleDestroy(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mcall((await $.v(C, "CurrDat")), "Close", []);
  await $.mcall((await $.v(C, "PBFAccs")), "Close", []);
  await $.mcall((await $.v(C, "PBFTransactions")), "Close", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("Tdmpbf_transaction", "PBFOperationsApplyRecord", async function PBFOperationsApplyRecord(Self, p0, p1, p2, p3) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "action": $.copyArg(p1), "applied": $.asRef(p2), "newrowid": $.asRef(p3), result: undefined};
  await $.fixArgs(L0, ["sender", "action"]);
  {
    const $t2 = (await $.v(C, "PBFTransaction"));
    const $t3 = ((await $.wv([$t2], "Sender", { get: async () => L0["sender"], set: async (v) => { L0["sender"] = v; }, local: true }, false)));
    { const $t4 = (await $.wv([$t2, $t3], "Action", { get: async () => L0["action"], set: async (v) => { L0["action"] = v; }, local: true }, false));
      if ($.eq($t4, "I")) {
        if ($.truthy($.eq((await $.wv([$t2, $t3], "OperType", C, false)), "KREDIT"))) {
          await $.stmt((await $.wcall([$t2, $t3], "CallProcedure", ["add_FullOperation", ["v_name", (await $.mv((await $.wcall([$t2, $t3], "FieldByName", ["name"], C)), "AsString")), "v_clientaccid", (await $.mv((await $.wcall([$t2, $t3], "FieldByName", ["clientaccid"], C)), "AsInteger")), "v_amount", (await $.mv((await $.wcall([$t2, $t3], "FieldByName", ["amount"], C)), "AsFloat")), "v_hdate", (await $.wv([$t2, $t3], "TrDat", C, false))]], C)));
        } else {
          await $.stmt((await $.wcall([$t2, $t3], "CallProcedure", ["add_OtherTypeOp", ["OpType", (await $.wv([$t2, $t3], "OperType1", C, false)), "amount", (await $.mv((await $.wcall([$t2, $t3], "FieldByName", ["amount"], C)), "AsFloat")), "name", (await $.mv((await $.wcall([$t2, $t3], "FieldByName", ["name"], C)), "AsString")), "v_hdate", (await $.wv([$t2, $t3], "TrDat", C, false))]], C)));
        }
        await $.wset([$t2, $t3], "Applied", (await $.wv([$t2, $t3], "True", C, false)), { get: async () => await L0["applied"].get(), set: async (v) => { await L0["applied"].set(v); }, local: true });
      }
      else if ($.eq($t4, "U")) {
        if ($.truthy($.eq((await $.wv([$t2, $t3], "OperType", C, false)), "KREDIT"))) {
          await $.stmt((await $.wcall([$t2, $t3], "CallProcedure", ["edit_FullOperation", ["vID", (await $.mv((await $.wcall([$t2, $t3], "FieldByName", ["ID"], C)), "AsInteger")), "vname", (await $.mv((await $.wcall([$t2, $t3], "FieldByName", ["name"], C)), "AsString")), "vclientaccid", (await $.mv((await $.wcall([$t2, $t3], "FieldByName", ["clientaccid"], C)), "AsInteger")), "vamount", (await $.mv((await $.wcall([$t2, $t3], "FieldByName", ["amount"], C)), "AsFloat"))]], C)));
        } else {
          await $.stmt((await $.wcall([$t2, $t3], "CallProcedure", ["edit_OtherTypeOp", ["vOptype", (await $.wv([$t2, $t3], "OperType1", C, false)), "vID", (await $.mv((await $.wcall([$t2, $t3], "FieldByName", ["ID"], C)), "AsInteger")), "vamount", (await $.mv((await $.wcall([$t2, $t3], "FieldByName", ["amount"], C)), "AsFloat"))]], C)));
        }
        await $.wset([$t2, $t3], "Applied", (await $.wv([$t2, $t3], "True", C, false)), { get: async () => await L0["applied"].get(), set: async (v) => { await L0["applied"].set(v); }, local: true });
      }
    }
  }
  return L0.result;
}, {"params": ["Sender", "Action", "Applied", "NewRowId"], "kind": "procedure", "ptypes": ["TOracleDataSet", "Char", "Boolean", "String"]});
  U.method("Tdmpbf_transaction", "PBFReportDsCalcFields", async function PBFReportDsCalcFields(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"dataset": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["dataset"]);
  {
    const $t5 = (await $.v(C, "PBFReportDs"));
    await $.mset((await $.wcall([$t5], "fieldbyname", ["pee_krno"], C)), "asstring", (await $.mv((await $.wcall([$t5], "fieldbyname", ["PE_KRNO"], C)), "asstring")));
  }
  return L0.result;
}, {"params": ["DataSet"], "kind": "procedure", "ptypes": ["TDataSet"]});
  return U;
}
