// Generated from DMCorrectorCardPerImpl.pas by pas2js — do not edit by hand; regenerate instead.
/* eslint-disable */
// @ts-nocheck

export default function define($) {
  const U = $.unit("DMCorrectorCardPerImpl", ["Windows", "Messages", "SysUtils", "Classes", "Graphics", "Controls", "Forms", "Dialogs", "Db", "OracleData", "sboapiDataModuleImpl"]);
  const C = [U];
  U.defClass("TDMCorrectorCardPer", "TDataModule", {"tranchesdatsrc": {"name": "TranchesDatSrc", "type": "TDataSource"}, "tranches": {"name": "Tranches", "type": "TOracleDataSet"}, "tranchesid": {"name": "TranchesID", "type": "TFloatField"}, "tranchestranchedate": {"name": "TranchesTRANCHEDATE", "type": "TDateTimeField"}, "tranchestrancheamount": {"name": "TranchesTRANCHEAMOUNT", "type": "TFloatField"}, "restsdatsrc": {"name": "RestsDatSrc", "type": "TDataSource"}, "rests": {"name": "Rests", "type": "TOracleDataSet"}, "reststranchid": {"name": "RestsTRANCHID", "type": "TFloatField"}, "restsrest": {"name": "RestsREST", "type": "TFloatField"}, "restsintrest": {"name": "RestsINTREST", "type": "TFloatField"}, "restshdate": {"name": "RestsHDATE", "type": "TDateTimeField"}, "int": {"name": "Int", "type": "TOracleDataSet"}, "intdatsrc": {"name": "IntDatSrc", "type": "TDataSource"}, "inthdate": {"name": "IntHDATE", "type": "TDateTimeField"}, "inttranchid": {"name": "IntTRANCHID", "type": "TFloatField"}, "intinterest": {"name": "IntINTEREST", "type": "TFloatField"}, "restspartkey": {"name": "RestsPARTKEY", "type": "TFloatField"}, "intpartkey": {"name": "IntPARTKEY", "type": "TFloatField"}, "cardsorts": {"name": "cardsorts", "type": "TOracleDataSet"}, "cardsortsdatsrc": {"name": "cardsortsDatSrc", "type": "TDataSource"}, "restscardid": {"name": "RestsCARDID", "type": "TFloatField"}, "restscardsort": {"name": "Restscardsort", "type": "TStringField"}, "intcardid": {"name": "IntCARDID", "type": "TFloatField"}, "intcardsort": {"name": "Intcardsort", "type": "TStringField"}, "cardsortsid": {"name": "cardsortsID", "type": "TFloatField"}, "cardsortsdescription": {"name": "cardsortsDESCRIPTION", "type": "TWideStringField"}}, {});
  U.init(async () => {
    U.var_("DMCorrectorCardPer", null, "TDMCorrectorCardPer");
  });
  U.method("TDMCorrectorCardPer", "RestsBeforePost", async function RestsBeforePost(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"dataset": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["dataset"]);
  {
    const $t1 = L0["dataset"];
    await $.mset((await $.wcall([$t1], "FieldByName", ["Tranchid"], C)), "AsInteger", (await $.mv((await $.mcall((await $.wv([$t1], "Tranches", C, false)), "FieldByName", ["ID"])), "AsInteger")));
  }
  return L0.result;
}, {"params": ["DataSet"], "kind": "procedure", "ptypes": ["TDataSet"]});
  U.method("TDMCorrectorCardPer", "IntBeforePost", async function IntBeforePost(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"dataset": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["dataset"]);
  {
    const $t2 = L0["dataset"];
    await $.mset((await $.wcall([$t2], "FieldByName", ["Tranchid"], C)), "AsInteger", (await $.mv((await $.mcall((await $.wv([$t2], "Tranches", C, false)), "FieldByName", ["ID"])), "AsInteger")));
  }
  return L0.result;
}, {"params": ["DataSet"], "kind": "procedure", "ptypes": ["TDataSet"]});
  return U;
}
