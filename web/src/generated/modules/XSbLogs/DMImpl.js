// Generated from DMImpl.pas by pas2js — do not edit by hand; regenerate instead.
/* eslint-disable */
// @ts-nocheck

export default function define($) {
  const U = $.unit("DMImpl", ["Windows", "Messages", "SysUtils", "Classes", "Graphics", "Controls", "Forms", "Dialogs", "Db", "OracleData", "Oracle", "sboapidatamoduleimpl"]);
  const C = [U];
  U.defClass("TDataModuleLogs", "TDataModule", {"odstables": {"name": "odsTables", "type": "TOracleDataSet"}, "tables": {"name": "Tables", "type": "TDataSource"}, "logtable": {"name": "LogTable", "type": "TDataSource"}, "odslogq": {"name": "odsLogQ", "type": "TOracleDataSet"}, "odstablesid": {"name": "odsTablesID", "type": "TFloatField"}, "odstablesname": {"name": "odsTablesNAME", "type": "TStringField"}, "odstablesqueryst": {"name": "odsTablesQUERYST", "type": "TStringField"}, "odstablesdescrt": {"name": "odsTablesDESCRT", "type": "TStringField"}, "sb_adm": {"name": "SB_ADM", "type": "TOraclePackage"}}, {});
  U.init(async () => {
    U.var_("DataModuleLogs", null, "TDataModuleLogs");
  });
  U.method("TDataModuleLogs", "DataModuleCreate", async function DataModuleCreate(Self, p0) {
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
      if ($.truthy((await $.and_(($.is_((await $.idx((await $.v(C, "Components")), [L0["i"]])), "TOracleDataSet")), async () => ($.eq((await $.mv((await $.idx((await $.v(C, "Components")), [L0["i"]])), "tag")), 1)))))) {
        await $.mcall((await $.idx((await $.v(C, "Components")), [L0["i"]])), "Open", []);
      }
      await $.tick();
    }
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  return U;
}
