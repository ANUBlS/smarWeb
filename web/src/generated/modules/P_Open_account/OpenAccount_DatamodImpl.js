// Generated from OpenAccount_DatamodImpl.pas by pas2js — do not edit by hand; regenerate instead.
/* eslint-disable */
// @ts-nocheck

export default function define($) {
  const U = $.unit("OpenAccount_DatamodImpl", ["SysUtils", "Classes", "DB", "OracleData", "Messages", "Dialogs", "sboapiDataModuleImpl", "OpenAccount"]);
  const C = [U];
  U.defClass("TOpenAccount_DataModule", "TDataModule", {"ods_bal_spr_parts": {"name": "ODS_bal_spr_parts", "type": "TOracleDataSet"}, "dsrc_bal_spr_parts": {"name": "DSRC_bal_spr_parts", "type": "TDataSource"}, "dsrc_bal_spr_groups": {"name": "DSRC_bal_spr_groups", "type": "TDataSource"}, "dsrc_bal_spr1": {"name": "DSRC_bal_spr1", "type": "TDataSource"}, "ods_bal_spr_groups": {"name": "ODS_bal_spr_groups", "type": "TOracleDataSet"}, "ods_bal_spr1": {"name": "ODS_Bal_spr1", "type": "TOracleDataSet"}, "ods_bal_spr_partspart": {"name": "ODS_bal_spr_partsPART", "type": "TIntegerField"}, "ods_bal_spr_partspartname": {"name": "ODS_bal_spr_partsPARTNAME", "type": "TWideStringField"}, "ods_bal_spr_partssearch": {"name": "ODS_bal_spr_partsSEARCH", "type": "TWideStringField"}, "ods_bal_spr_groupsgrp": {"name": "ODS_bal_spr_groupsGRP", "type": "TIntegerField"}, "ods_bal_spr_groupsgrpname": {"name": "ODS_bal_spr_groupsGRPNAME", "type": "TWideStringField"}, "ods_bal_spr_groupssearch": {"name": "ODS_bal_spr_groupsSEARCH", "type": "TWideStringField"}, "ods_bal_spr1bal_cn": {"name": "ODS_Bal_spr1BAL_CN", "type": "TFloatField"}, "ods_bal_spr1balname": {"name": "ODS_Bal_spr1BALNAME", "type": "TWideStringField"}, "ods_bal_spr_groupsger1": {"name": "ODS_bal_spr_groupsGER1", "type": "TWideStringField"}, "ods_bal_spr_partspart1": {"name": "ODS_bal_spr_partsPART1", "type": "TWideStringField"}}, {});
  U.init(async () => {
    U.var_("OpenAccount_DataModule", null, "TOpenAccount_DataModule");
  });
  U.method("TOpenAccount_DataModule", "ODS_bal_spr_groupsAfterScroll", async function ODS_bal_spr_groupsAfterScroll(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"dataset": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["dataset"]);
  await $.mcall((await $.v(C, "ODS_bal_spr1")), "Close", []);
  { const $t1 = await $.iset((await $.mv((await $.v(C, "ODS_bal_spr1")), "SQL")), [2], $.add($.add("and nvl(upper((bal_cn||' '|| balname)),0) like upper ('", (await $.mv((await $.mcall((await $.v(C, "ODS_bal_spr_groups")), "FieldByName", ["grp"])), "AsString"))), "%')")); if ($t1 !== undefined) { await $.mset((await $.v(C, "ODS_bal_spr1")), "SQL", $t1); } }
  await $.mcall((await $.v(C, "ODS_bal_spr1")), "Open", []);
  return L0.result;
}, {"params": ["DataSet"], "kind": "procedure", "ptypes": ["TDataSet"]});
  U.method("TOpenAccount_DataModule", "ODS_bal_spr_partsAfterScroll", async function ODS_bal_spr_partsAfterScroll(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"dataset": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["dataset"]);
  if ($.truthy($.ne((await $.mv((await $.mv((await $.v(C, "OpenAccountForm")), "edit4")), "Text")), ""))) {
    await $.mcall((await $.v(C, "ODS_bal_spr_groups")), "Close", []);
    { const $t2 = await $.iset((await $.mv((await $.v(C, "ODS_bal_spr_groups")), "SQL")), [2], $.add($.add("and nvl(upper((grp||' '|| grpname)),0) like upper ('", (await $.mv((await $.mcall((await $.v(C, "ODS_bal_spr_parts")), "FieldByName", ["PART"])), "AsString"))), "%')")); if ($t2 !== undefined) { await $.mset((await $.v(C, "ODS_bal_spr_groups")), "SQL", $t2); } }
    await $.mcall((await $.v(C, "ODS_bal_spr_groups")), "Open", []);
  }
  return L0.result;
}, {"params": ["DataSet"], "kind": "procedure", "ptypes": ["TDataSet"]});
  return U;
}
