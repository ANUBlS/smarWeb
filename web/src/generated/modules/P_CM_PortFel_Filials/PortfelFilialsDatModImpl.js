// Generated from PortfelFilialsDatModImpl.pas by pas2js — do not edit by hand; regenerate instead.
/* eslint-disable */
// @ts-nocheck

export default function define($) {
  const U = $.unit("PortfelFilialsDatModImpl", ["Windows", "Messages", "SysUtils", "Classes", "Graphics", "Controls", "Forms", "Dialogs", "Oracle", "Db", "OracleData", "sboapiDataModuleImpl"]);
  const C = [U];
  U.defClass("TPFDataMod", "TDataModule", {"branches": {"name": "Branches", "type": "TOracleDataSet"}, "cm_ak_reports": {"name": "CM_AK_REPORTS", "type": "TOraclePackage"}, "branchesdatscr": {"name": "BranchesDatScr", "type": "TDataSource"}, "persons": {"name": "Persons", "type": "TOracleDataSet"}, "personsdatsrc": {"name": "PersonsDatSrc", "type": "TDataSource"}, "results": {"name": "Results", "type": "TOracleDataSet"}, "branchesid": {"name": "BranchesID", "type": "TFloatField"}, "branchesname": {"name": "BranchesNAME", "type": "TWideStringField"}, "personsid": {"name": "PersonsID", "type": "TFloatField"}, "personsdescripion": {"name": "PersonsDESCRIPION", "type": "TWideStringField"}, "resultspersonsname": {"name": "ResultsPERSONSNAME", "type": "TWideStringField"}, "resultsfilialname": {"name": "ResultsFILIALNAME", "type": "TWideStringField"}, "resultsfacticalrest": {"name": "ResultsFACTICALREST", "type": "TFloatField"}, "resultsrest": {"name": "ResultsREST", "type": "TFloatField"}, "resultsrestdue": {"name": "ResultsRESTDUE", "type": "TFloatField"}, "resultstramt": {"name": "ResultsTRAMT", "type": "TFloatField"}, "resultspayamt": {"name": "ResultsPAYAMT", "type": "TFloatField"}, "resultspaydue": {"name": "ResultsPAYDUE", "type": "TFloatField"}, "resultsexpamt": {"name": "ResultsEXPAMT", "type": "TFloatField"}, "resultslastfacticalrest": {"name": "ResultsLASTFACTICALREST", "type": "TFloatField"}, "resultslastrest": {"name": "ResultsLASTREST", "type": "TFloatField"}, "resultslastduerest": {"name": "ResultsLASTDUEREST", "type": "TFloatField"}, "resultspercentexp": {"name": "ResultsPERCENTEXP", "type": "TFloatField"}, "resultstranchplamt": {"name": "ResultsTRANCHPLAMT", "type": "TFloatField"}, "resultspayplamt": {"name": "ResultsPAYPLAMT", "type": "TFloatField"}}, {});
  U.init(async () => {
    U.var_("PFDataMod", null, "TPFDataMod");
  });
  U.method("TPFDataMod", "DataModuleCreate", async function DataModuleCreate(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mcall((await $.v(C, "Branches")), "Open", []);
  await $.mcall((await $.v(C, "Persons")), "open", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TPFDataMod", "DataModuleDestroy", async function DataModuleDestroy(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mcall((await $.v(C, "Branches")), "CloseAll", []);
  await $.mcall((await $.v(C, "Persons")), "CloseAll", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  return U;
}
