// Generated from CorrectorDataModule.pas by pas2js — do not edit by hand; regenerate instead.
/* eslint-disable */
// @ts-nocheck

export default function define($) {
  const U = $.unit("CorrectorDataModule", ["Windows", "Messages", "SysUtils", "Classes", "Graphics", "Controls", "Forms", "Dialogs", "Db", "OracleData", "Variants", "Oracle", "sboapiDataModuleImpl"]);
  const C = [U];
  U.defClass("TCorrectorDataMod", "TDataModule", {"correctdata": {"name": "CorrectData", "type": "TOracleDataSet"}, "dscorrectdata": {"name": "DSCorrectData", "type": "TDataSource"}, "correctdatanum": {"name": "CorrectDataNUM", "type": "TWideStringField"}, "correctdataname": {"name": "CorrectDataNAME", "type": "TWideStringField"}, "correctdatarest": {"name": "CorrectDataREST", "type": "TFloatField"}, "correctdatainterestrest": {"name": "CorrectDataINTERESTREST", "type": "TFloatField"}, "correctdataduerest": {"name": "CorrectDataDUEREST", "type": "TFloatField"}, "correctdatadueinterestrest": {"name": "CorrectDataDUEINTERESTREST", "type": "TFloatField"}, "correctdatagivenamount": {"name": "CorrectDataGIVENAMOUNT", "type": "TFloatField"}, "correctdataobligation": {"name": "CorrectDataOBLIGATION", "type": "TFloatField"}, "correctdatapenaltyrest": {"name": "CorrectDataPENALTYREST", "type": "TFloatField"}, "oracpakec": {"name": "OracPakec", "type": "TOraclePackage"}, "correctdatacreditid": {"name": "CorrectDataCREDITID", "type": "TFloatField"}, "ods_user": {"name": "ods_user", "type": "TOracleDataSet"}, "ods_useruid": {"name": "ods_userUID", "type": "TFloatField"}, "foldpenaltyrest": {"name": "FOldPenaltyRest", "type": "Double"}, "foldrest": {"name": "FOldREST", "type": "Double"}, "foldinterestrest": {"name": "FOldINTERESTREST", "type": "Double"}, "foldduerest": {"name": "FOldDUEREST", "type": "Double"}, "folddueinterestrest": {"name": "FOldDUEINTERESTREST", "type": "Double"}}, {});
  U.init(async () => {
    U.var_("CorrectorDataMod", null, "TCorrectorDataMod");
  });
  U.method("TCorrectorDataMod", "CorrectDataBeforeEdit", async function CorrectDataBeforeEdit(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"dataset": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["dataset"]);
  await $.set(C, "FOldPenaltyRest", (await $.mv((await $.mcall(L0["dataset"], "FieldByName", ["PENALTYREST"])), "AsFloat")));
  await $.set(C, "FOldREST", (await $.mv((await $.mcall(L0["dataset"], "FieldByName", ["rest"])), "AsFloat")));
  await $.set(C, "FOldINTERESTREST", (await $.mv((await $.mcall(L0["dataset"], "FieldByName", ["INTERESTREST"])), "AsFloat")));
  await $.set(C, "FOldDUEREST", (await $.mv((await $.mcall(L0["dataset"], "FieldByName", ["DUEREST"])), "AsFloat")));
  await $.set(C, "FOldDUEINTERESTREST", (await $.mv((await $.mcall(L0["dataset"], "FieldByName", ["DUEINTERESTREST"])), "AsFloat")));
  return L0.result;
}, {"params": ["DataSet"], "kind": "procedure", "ptypes": ["TDataSet"]});
  U.method("TCorrectorDataMod", "CorrectDataBeforePost", async function CorrectDataBeforePost(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"dataset": $.copyArg(p0), result: undefined, "newval": 0, "newval1": 0, "newval2": 0, "newval3": 0, "newval4": 0, "creditid": 0, "userid": 0};
  await $.fixArgs(L0, ["dataset"]);
  L0["newval"] = (await $.mv((await $.mcall(L0["dataset"], "FieldByName", ["rest"])), "AsFloat"));
  L0["newval1"] = (await $.mv((await $.mcall(L0["dataset"], "FieldByName", ["INTERESTREST"])), "AsFloat"));
  L0["newval2"] = (await $.mv((await $.mcall(L0["dataset"], "FieldByName", ["DUEREST"])), "AsFloat"));
  L0["newval3"] = (await $.mv((await $.mcall(L0["dataset"], "FieldByName", ["DUEINTERESTREST"])), "AsFloat"));
  L0["newval4"] = (await $.mv((await $.mcall(L0["dataset"], "FieldByName", ["PENALTYREST"])), "AsFloat"));
  L0["creditid"] = (await $.mv((await $.mcall(L0["dataset"], "FieldByName", ["CREDITID"])), "AsInteger"));
  L0["userid"] = (await $.mv((await $.v(C, "ods_userUID")), "AsInteger"));
  if ($.truthy($.ne((await $.v(C, "FOldREST")), L0["newval"]))) {
    await $.stmt((await $.mcall((await $.mv((await $.v(C, "CorrectorDataMod")), "OracPakec")), "CallProcedure", ["cm_history_audit", [L0["creditid"], L0["userid"], (await $.v(C, "FOldREST")), L0["newval"], "Esas"]])));
  }
  if ($.truthy($.ne((await $.v(C, "FOldINTERESTREST")), L0["newval1"]))) {
    await $.stmt((await $.mcall((await $.mv((await $.v(C, "CorrectorDataMod")), "OracPakec")), "CallProcedure", ["cm_history_audit", [L0["creditid"], L0["userid"], (await $.v(C, "FOldINTERESTREST")), L0["newval1"], "Fazi"]])));
  }
  if ($.truthy($.ne((await $.v(C, "FOldDUEREST")), L0["newval2"]))) {
    await $.stmt((await $.mcall((await $.mv((await $.v(C, "CorrectorDataMod")), "OracPakec")), "CallProcedure", ["cm_history_audit", [L0["creditid"], L0["userid"], (await $.v(C, "FOldDUEREST")), L0["newval2"], "Gecikmis Esas"]])));
  }
  if ($.truthy($.ne((await $.v(C, "FOldDUEINTERESTREST")), L0["newval3"]))) {
    await $.stmt((await $.mcall((await $.mv((await $.v(C, "CorrectorDataMod")), "OracPakec")), "CallProcedure", ["cm_history_audit", [L0["creditid"], L0["userid"], (await $.v(C, "FOldDUEINTERESTREST")), L0["newval3"], "Gecikmis Fazi"]])));
  }
  if ($.truthy($.ne((await $.v(C, "FOldPenaltyRest")), L0["newval4"]))) {
    await $.stmt((await $.mcall((await $.mv((await $.v(C, "CorrectorDataMod")), "OracPakec")), "CallProcedure", ["cm_history_audit", [L0["creditid"], L0["userid"], (await $.v(C, "FOldPenaltyRest")), L0["newval4"], "Penya"]])));
  }
  return L0.result;
}, {"params": ["DataSet"], "kind": "procedure", "ptypes": ["TDataSet"]});
  U.method("TCorrectorDataMod", "DataModuleCreate", async function DataModuleCreate(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mcall((await $.v(C, "ods_user")), "Open", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TCorrectorDataMod", "DataModuleDestroy", async function DataModuleDestroy(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mcall((await $.v(C, "ods_user")), "Close", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  return U;
}
