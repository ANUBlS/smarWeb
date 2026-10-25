// Generated from BanksDataModule.pas by pas2js — do not edit by hand; regenerate instead.
/* eslint-disable */
// @ts-nocheck

export default function define($) {
  const U = $.unit("BanksDataModule", ["Windows", "Messages", "SysUtils", "Classes", "Graphics", "Controls", "Forms", "Dialogs", "Db", "OracleData", "sboapiDataModuleImpl"]);
  const C = [U];
  U.defClass("TDataModuleBanks", "TDataModule", {"dsbanks": {"name": "DSBanks", "type": "TDataSource"}, "banks": {"name": "Banks", "type": "TOracleDataSet"}, "banksid": {"name": "BanksID", "type": "TFloatField"}, "bankskrno": {"name": "BanksKRNO", "type": "TWideStringField"}, "banksname": {"name": "BanksNAME", "type": "TWideStringField"}, "banksinn": {"name": "BanksINN", "type": "TWideStringField"}, "banksswift": {"name": "BanksSWIFT", "type": "TWideStringField"}, "banksbankcode": {"name": "BanksBANKCODE", "type": "TWideStringField"}, "bankssubkrno": {"name": "BanksSUBKRNO", "type": "TWideStringField"}, "banksbank_kod": {"name": "BanksBANK_KOD", "type": "TFloatField"}, "bankslicense_date": {"name": "BanksLICENSE_DATE", "type": "TDateTimeField"}, "bankstax_regcode": {"name": "BanksTAX_REGCODE", "type": "TWideStringField"}, "banksours": {"name": "BanksOURS", "type": "TFloatField"}, "banksval_code": {"name": "BanksVAL_CODE", "type": "TWideStringField"}}, {});
  U.init(async () => {
    U.var_("DataModuleBanks", null, "TDataModuleBanks");
  });
  U.method("TDataModuleBanks", "BanksAfterPost", async function BanksAfterPost(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"dataset": $.copyArg(p0), result: undefined, "bankcode": 0};
  await $.fixArgs(L0, ["dataset"]);
  {
    const $t1 = L0["dataset"];
    await $.wset([$t1], "BankCode", (await $.mv((await $.wcall([$t1], "FieldByName", ["BankCode"], C)), "AsInteger")), { get: async () => L0["bankcode"], set: async (v) => { L0["bankcode"] = v; }, local: true });
    try {
      await $.stmt($.wcall([$t1], "DisableControls", [], C));
      await $.stmt($.wcall([$t1], "Refresh", [], C));
      await $.stmt((await $.wcall([$t1], "Locate", ["BankCode", (await $.wv([$t1], "BankCode", { get: async () => L0["bankcode"], set: async (v) => { L0["bankcode"] = v; }, local: true }, false)), []], C)));
    } finally {
      await $.stmt($.wcall([$t1], "EnableControls", [], C));
    }
  }
  return L0.result;
}, {"params": ["DataSet"], "kind": "procedure", "ptypes": ["TDataSet"]});
  return U;
}
