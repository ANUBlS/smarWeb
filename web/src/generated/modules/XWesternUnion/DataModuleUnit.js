// Generated from DataModuleUnit.pas by pas2js — do not edit by hand; regenerate instead.
/* eslint-disable */
// @ts-nocheck

export default function define($) {
  const U = $.unit("DataModuleUnit", ["Windows", "Messages", "SysUtils", "Classes", "Graphics", "Controls", "Forms", "Dialogs", "sboapiDataModuleImpl", "Db", "OracleData", "Oracle", "WesternUnionImpl"]);
  const C = [U];
  U.defClass("TDataModWU", "TDataModule", {"datawuincoming": {"name": "DataWUIncoming", "type": "TOracleDataSet"}, "dswesternunion": {"name": "DSWesternUnion", "type": "TDataSource"}, "temppack": {"name": "TempPack", "type": "TOraclePackage"}, "datatempfile": {"name": "DataTempFile", "type": "TOracleDataSet"}, "dataaccount": {"name": "DataAccount", "type": "TOracleDataSet"}, "dsaccount": {"name": "DSAccount", "type": "TDataSource"}, "datavalute": {"name": "DataValute", "type": "TOracleDataSet"}, "dsvalute": {"name": "DSValute", "type": "TDataSource"}, "dataconfig": {"name": "DataConfig", "type": "TOracleDataSet"}, "dsconfig": {"name": "DSConfig", "type": "TDataSource"}, "databranch": {"name": "DataBranch", "type": "TOracleDataSet"}, "dsbranch": {"name": "DSBranch", "type": "TDataSource"}, "datareport": {"name": "DataReport", "type": "TOracleDataSet"}, "dsreport": {"name": "DSReport", "type": "TDataSource"}, "datareportdsdesigner": {"name": "DataReportDSDesigner", "type": "TDateTimeField"}, "datareportdsdesigner2": {"name": "DataReportDSDesigner2", "type": "TStringField"}, "datareportdsdesigner3": {"name": "DataReportDSDesigner3", "type": "TFloatField"}, "datareportdsdesigner4": {"name": "DataReportDSDesigner4", "type": "TFloatField"}, "datareportdsdesigner5": {"name": "DataReportDSDesigner5", "type": "TStringField"}, "datareportdsdesigner6": {"name": "DataReportDSDesigner6", "type": "TStringField"}, "datareportbranchid": {"name": "DataReportBRANCHID", "type": "TFloatField"}, "datareportdsdesigner7": {"name": "DataReportDSDesigner7", "type": "TStringField"}, "datareportcomplex": {"name": "DataReportComplex", "type": "TOracleDataSet"}, "dsreportcomplex": {"name": "DSReportComplex", "type": "TDataSource"}}, {});
  U.init(async () => {
    U.var_("DataModWU", null, "TDataModWU");
  });
  U.method("TDataModWU", "DataReportEditError", async function DataReportEditError(Self, p0, p1, p2) {
  const C = $.chain(Self, U);
  const L0 = {"dataset": $.copyArg(p0), "e": $.copyArg(p1), "action": $.asRef(p2), result: undefined};
  await $.fixArgs(L0, ["dataset", "e"]);
  {
    const $t1 = (await $.v(C, "WesternUnionForm"));
    await $.mset((await $.mv((await $.wv([$t1], "ListBoxErrors", C, false)), "Items")), "Text", $.add($.add($.add($.add("[Warning] ", (await $.wcall([$t1], "TimeToStr", [(await $.wv([$t1], "Time", C, false))], C))), "  "), (await $.mv((await $.wv([$t1], "E", { get: async () => L0["e"], set: async (v) => { L0["e"] = v; }, local: true }, false)), "Message"))), (await $.mv((await $.mv((await $.wv([$t1], "ListBoxErrors", C, false)), "Items")), "Text"))));
    await $.mset((await $.wv([$t1], "ListBoxErrors", C, false)), "ItemIndex", 0);
  }
  return L0.result;
}, {"params": ["DataSet", "E", "Action"], "kind": "procedure", "ptypes": ["TDataSet", "EDatabaseError", "TDataAction"]});
  return U;
}
