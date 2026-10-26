// Generated from TrancheScheduleDataModuleImpl.pas by pas2js — do not edit by hand; regenerate instead.
/* eslint-disable */
// @ts-nocheck

export default function define($) {
  const U = $.unit("TrancheScheduleDataModuleImpl", ["Windows", "Messages", "SysUtils", "Classes", "Graphics", "Controls", "Forms", "Dialogs", "Db", "OracleData", "Oracle", "sboapiDataModuleImpl"]);
  const C = [U];
  U.defClass("TTrancheSheduleDataMod", "TDataModule", {"aboutcontractdataset": {"name": "AboutContractDataSet", "type": "TOracleDataSet"}, "aboutcontractsdatasrc": {"name": "AboutContractsDataSrc", "type": "TDataSource"}, "tranchescheduledataset": {"name": "TrancheScheduleDataSet", "type": "TOracleDataSet"}, "tranchescheduledatasrc": {"name": "TrancheScheduleDataSrc", "type": "TDataSource"}, "cm_schedule": {"name": "CM_SCHEDULE", "type": "TOraclePackage"}, "tranchescheduledatasetid": {"name": "TrancheScheduleDataSetID", "type": "TFloatField"}, "tranchescheduledatasetcreditid": {"name": "TrancheScheduleDataSetCREDITID", "type": "TFloatField"}, "tranchescheduledatasettrchdate": {"name": "TrancheScheduleDataSetTRCHDATE", "type": "TDateTimeField"}, "tranchescheduledatasettrchamount": {"name": "TrancheScheduleDataSetTRCHAMOUNT", "type": "TFloatField"}}, {});
  U.init(async () => {
    U.var_("TrancheSheduleDataMod", null, "TTrancheSheduleDataMod");
  });
  U.method("TTrancheSheduleDataMod", "DataModuleCreate", async function DataModuleCreate(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "i": 0};
  await $.fixArgs(L0, ["sender"]);
  { const $t1 = $.sub((await $.v(C, "ComponentCount")), 1);
    L0["i"] = 0;
    let $t2 = true;
    for (;;) {
      if (!$t2) { L0["i"] = $.succ(L0["i"], 1); }
      $t2 = false;
      if (!($.ord(L0["i"]) <= $.ord($t1))) break;
      if ($.truthy($.eq((await $.mv((await $.idx((await $.v(C, "Components")), [L0["i"]])), "Tag")), 1))) {
        await $.mcall((await $.idx((await $.v(C, "Components")), [L0["i"]])), "Open", []);
      }
      await $.tick();
    }
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  return U;
}
