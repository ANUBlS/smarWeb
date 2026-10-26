// Generated from DMSec.pas by pas2js — do not edit by hand; regenerate instead.
/* eslint-disable */
// @ts-nocheck

export default function define($) {
  const U = $.unit("DMSec", ["SysUtils", "Classes", "DB", "OracleData", "ImgList", "Controls", "Oracle", "AddUnit2", "Unit1", "Commonimpl", "CommanParametrs", "sboapiDataModuleImpl"]);
  const C = [U];
  U.defClass("TDmexpired_sec", "TDataModule", {"imagelist": {"name": "ImageList", "type": "TImageList"}, "dsravalute": {"name": "dsravalute", "type": "TDataSource"}, "avalute": {"name": "Avalute", "type": "TOracleDataSet"}, "sysdat": {"name": "Sysdat", "type": "TOracleDataSet"}, "sysdattek_dat": {"name": "SysdatTEK_DAT", "type": "TDateTimeField"}, "avalutevalute": {"name": "AvaluteVALUTE", "type": "TIntegerField"}, "avaluteval_name": {"name": "AvaluteVAL_NAME", "type": "TWideStringField"}, "avalutevalu_name": {"name": "AvaluteVALU_NAME", "type": "TWideStringField"}, "avalutevalu_short": {"name": "AvaluteVALU_SHORT", "type": "TWideStringField"}, "dsexp_sec_ins": {"name": "dsexp_sec_ins", "type": "TOracleDataSet"}, "dsrexp_sec_ins": {"name": "dsrexp_sec_ins", "type": "TDataSource"}, "pg_expired_securities": {"name": "PG_EXPIRED_SECURITIES", "type": "TOraclePackage"}, "dsexp_sec_insid": {"name": "dsexp_sec_insID", "type": "TFloatField"}, "dsexp_sec_insname": {"name": "dsexp_sec_insNAME", "type": "TWideStringField"}, "dsexp_sec_insacc_bal": {"name": "dsexp_sec_insACC_BAL", "type": "TWideStringField"}, "dsexp_sec_insisin": {"name": "dsexp_sec_insISIN", "type": "TWideStringField"}, "dsexp_sec_insval_name": {"name": "dsexp_sec_insVAL_NAME", "type": "TWideStringField"}, "dsexp_sec_insobtain_date": {"name": "dsexp_sec_insOBTAIN_DATE", "type": "TDateTimeField"}, "dsexp_sec_insreturn_date": {"name": "dsexp_sec_insRETURN_DATE", "type": "TDateTimeField"}, "dsexp_sec_inserase_date": {"name": "dsexp_sec_insERASE_DATE", "type": "TDateTimeField"}, "dsexp_sec_insnominal_ammount": {"name": "dsexp_sec_insNOMINAL_AMMOUNT", "type": "TFloatField"}}, {});
  U.init(async () => {
    U.var_("Dmexpired_sec", null, "TDmexpired_sec");
    U.var_("edit_insert", false, "Boolean");
  });
  U.method("TDmexpired_sec", "DataModuleCreate", async function DataModuleCreate(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mcall((await $.v(C, "dsexp_sec_ins")), "Open", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TDmexpired_sec", "DataModuleDestroy", async function DataModuleDestroy(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mcall((await $.v(C, "dsexp_sec_ins")), "Close", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  return U;
}
