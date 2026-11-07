// Generated from uBankSetMainImpl.pas by pas2js — do not edit by hand; regenerate instead.
/* eslint-disable */
// @ts-nocheck

export default function define($) {
  const U = $.unit("uBankSetMainImpl", ["Windows", "Messages", "SysUtils", "Classes", "Graphics", "Controls", "Forms", "Dialogs", "ExtCtrls", "DBCtrls", "Grids", "DBGrids", "Db", "OracleData", "sboapiDataModuleImpl"]);
  const C = [U];
  U.defClass("TfrmBankSet", "TForm", {"bsettings": {"name": "BSettings", "type": "TOracleDataSet"}, "bset": {"name": "bSet", "type": "TDataSource"}, "dbgrid1": {"name": "DBGrid1", "type": "TDBGrid"}, "dbnavigator1": {"name": "DBNavigator1", "type": "TDBNavigator"}}, {});
  U.init(async () => {
    U.var_("frmBankSet", null, "TfrmBankSet");
  });
  U.func("InitPlugin", async function InitPlugin(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"s": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["s"]);
  await $.mcall((await $.v(C, "frmBankSet")), "ShowModal", []);
  return L0.result;
}, {"params": ["S"], "kind": "procedure", "ptypes": ["String"]});
  U.method("TfrmBankSet", "FormCreate", async function FormCreate(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mcall((await $.v(C, "BSettings")), "Open", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.setInitialization(async function __initialization(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: undefined};
  await $.set(C, "frmBankSet", (await $.mcall((await $.v(C, "TfrmBankSet")), "Create", [(await $.v(C, "Application"))])));
  return L0.result;
});
  return U;
}
