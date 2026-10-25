// Generated from PercentConvertingDataModule.pas by pas2js — do not edit by hand; regenerate instead.
/* eslint-disable */
// @ts-nocheck

export default function define($) {
  const U = $.unit("PercentConvertingDataModule", ["Windows", "Messages", "SysUtils", "Classes", "Graphics", "Controls", "Forms", "Dialogs", "Oracle", "Db", "OracleData", "sboapiDataModuleImpl"]);
  const C = [U];
  U.defClass("TDataModPercentConv", "TDataModule", {"calcedpercents": {"name": "CalcedPercents", "type": "TOracleDataSet"}, "datasrccalcedpercents": {"name": "DataSrcCalcedPercents", "type": "TDataSource"}, "calcedpercentspack": {"name": "CalcedPercentsPack", "type": "TOraclePackage"}, "calcedpercentscontractid": {"name": "CalcedPercentsCONTRACTID", "type": "TFloatField"}, "calcedpercentscontractcurrencyid": {"name": "CalcedPercentsCONTRACTCURRENCYID", "type": "TFloatField"}, "calcedpercentscontractcurrencyname": {"name": "CalcedPercentsCONTRACTCURRENCYNAME", "type": "TStringField"}, "calcedpercentscontractno": {"name": "CalcedPercentsCONTRACTNO", "type": "TStringField"}, "calcedpercentscontractaccno": {"name": "CalcedPercentsCONTRACTACCNO", "type": "TStringField"}, "calcedpercentscontractaccname": {"name": "CalcedPercentsCONTRACTACCNAME", "type": "TStringField"}, "calcedpercentsfacticaldebt": {"name": "CalcedPercentsFACTICALDEBT", "type": "TFloatField"}, "calcedpercentsfacticalinterestdebt": {"name": "CalcedPercentsFACTICALINTERESTDEBT", "type": "TFloatField"}, "calcedpercentsinterestbalance": {"name": "CalcedPercentsINTERESTBALANCE", "type": "TFloatField"}, "calcedpercentscalcedmaindebt": {"name": "CalcedPercentsCALCEDMAINDEBT", "type": "TFloatField"}, "calcedpercentscalcedoverduedebt": {"name": "CalcedPercentsCALCEDOVERDUEDEBT", "type": "TFloatField"}, "calcedpercentsoverduedebt": {"name": "CalcedPercentsOVERDUEDEBT", "type": "TFloatField"}, "calcedpercentsoverdueinterestdebt": {"name": "CalcedPercentsOVERDUEINTERESTDEBT", "type": "TFloatField"}}, {});
  U.init(async () => {
    U.var_("DataModPercentConv", null, "TDataModPercentConv");
  });
  U.method("TDataModPercentConv", "DataModuleCreate", async function DataModuleCreate(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t1 = (await $.v(C, "CalcedPercents"));
    await $.stmt((await $.wcall([$t1], "SetVariable", ["ORDERCLAUSE", "ContractCurrencyID,ContractNo"], C)));
    await $.stmt($.wcall([$t1], "Open", [], C));
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TDataModPercentConv", "CalcedPercentsAfterPost", async function CalcedPercentsAfterPost(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"dataset": $.copyArg(p0), result: undefined, "savedpos": null};
  await $.fixArgs(L0, ["dataset"]);
  {
    const $t2 = L0["dataset"];
    await $.wset([$t2], "SavedPos", (await $.wv([$t2], "GetBookmark", C, false)), { get: async () => L0["savedpos"], set: async (v) => { L0["savedpos"] = v; }, local: true });
    await $.stmt($.wcall([$t2], "Refresh", [], C));
    await $.stmt((await $.wcall([$t2], "GotoBookmark", [(await $.wv([$t2], "SavedPos", { get: async () => L0["savedpos"], set: async (v) => { L0["savedpos"] = v; }, local: true }, false))], C)));
  }
  return L0.result;
}, {"params": ["DataSet"], "kind": "procedure", "ptypes": ["TDataSet"]});
  U.method("TDataModPercentConv", "CalcedPercentsBeforeDelete", async function CalcedPercentsBeforeDelete(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"dataset": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["dataset"]);
  await $.mcall(L0["dataset"], "Cancel", []);
  $.abort();
  return L0.result;
}, {"params": ["DataSet"], "kind": "procedure", "ptypes": ["TDataSet"]});
  return U;
}
