// Generated from TrCreditCDatModImpl.pas by pas2js — do not edit by hand; regenerate instead.
/* eslint-disable */
// @ts-nocheck

export default function define($) {
  const U = $.unit("TrCreditCDatModImpl", ["Windows", "Messages", "SysUtils", "Classes", "Graphics", "Controls", "Forms", "Dialogs", "Db", "OracleData", "Oracle", "sboapiDataModuleImpl"]);
  const C = [U];
  U.defClass("TCreditCardDatMod", "TDataModule", {"creditcards": {"name": "CreditCards", "type": "TOracleDataSet"}, "creditcardsdatsrc": {"name": "CreditCardsDatSrc", "type": "TDataSource"}, "transactions": {"name": "Transactions", "type": "TOracleDataSet"}, "transactionsdatsrc": {"name": "TransactionsDatSrc", "type": "TDataSource"}, "controls": {"name": "Controls", "type": "TOracleDataSet"}, "controlsdatsrc": {"name": "ControlsDatSrc", "type": "TDataSource"}, "creditcardsid": {"name": "CreditCardsID", "type": "TFloatField"}, "branches": {"name": "Branches", "type": "TOracleDataSet"}, "branchesdatsrc": {"name": "BranchesDatSrc", "type": "TDataSource"}, "branchesid": {"name": "BranchesID", "type": "TFloatField"}, "branchesname": {"name": "BranchesNAME", "type": "TWideStringField"}, "controlsnumberofcredit": {"name": "ControlsNUMBEROFCREDIT", "type": "TWideStringField"}, "controlscontractno": {"name": "ControlsCONTRACTNO", "type": "TWideStringField"}, "controlscustrest": {"name": "ControlsCUSTREST", "type": "TFloatField"}, "controlsrest": {"name": "ControlsREST", "type": "TFloatField"}, "cm_cards": {"name": "CM_CARDS", "type": "TOraclePackage"}, "transactionsdebitaccno": {"name": "TransactionsDEBITACCNO", "type": "TWideStringField"}, "transactionsdebitcurrency": {"name": "TransactionsDEBITCURRENCY", "type": "TWideStringField"}, "transactionscreditaccno": {"name": "TransactionsCREDITACCNO", "type": "TWideStringField"}, "transactionsostat": {"name": "TransactionsOSTAT", "type": "TFloatField"}, "transactionscreditcurrency": {"name": "TransactionsCREDITCURRENCY", "type": "TWideStringField"}, "transactionstrdate": {"name": "TransactionsTRDATE", "type": "TDateTimeField"}, "transactionscanprocess": {"name": "TransactionsCANPROCESS", "type": "TFloatField"}, "transactionsinbalancechar": {"name": "TransactionsINBALANCECHAR", "type": "TWideStringField"}, "transactionsflags": {"name": "TransactionsFLAGS", "type": "TFloatField"}, "transactionsdebitamount": {"name": "TransactionsDEBITAMOUNT", "type": "TFloatField"}, "transactionscreditamount": {"name": "TransactionsCREDITAMOUNT", "type": "TFloatField"}, "transactionsnatamount": {"name": "TransactionsNATAMOUNT", "type": "TFloatField"}, "transactionstrdescription": {"name": "TransactionsTRDESCRIPTION", "type": "TWideStringField"}}, {});
  U.init(async () => {
    U.var_("CreditCardDatMod", null, "TCreditCardDatMod");
  });
  U.method("TCreditCardDatMod", "DataModuleCreate", async function DataModuleCreate(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mcall((await $.v(C, "Branches")), "Open", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TCreditCardDatMod", "DataModuleDestroy", async function DataModuleDestroy(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mcall((await $.v(C, "Branches")), "CloseAll", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  return U;
}
