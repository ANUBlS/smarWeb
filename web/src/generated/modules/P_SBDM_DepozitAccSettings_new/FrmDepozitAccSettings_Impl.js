// Generated from FrmDepozitAccSettings_Impl.pas by pas2js — do not edit by hand; regenerate instead.
/* eslint-disable */
// @ts-nocheck

export default function define($) {
  const U = $.unit("FrmDepozitAccSettings_Impl", ["Windows", "Messages", "SysUtils", "Variants", "Classes", "Graphics", "Controls", "Forms", "Dialogs", "ExtCtrls", "ComCtrls", "DBCtrls", "XDBCtrls", "DB", "OracleData", "StdCtrls", "XDBGrids", "Grids", "DBGrids", "sboapiDataModuleImpl", "CommonDeclsImpl", "SBTranslateProc"]);
  const C = [U];
  U.defClass("TFrmDepozitAccSettings", "TForm", {"statusbar1": {"name": "StatusBar1", "type": "TStatusBar"}}, {});
  U.init(async () => {
    U.var_("FrmDepozitAccSettings", null, "TFrmDepozitAccSettings");
  });
  U.func("exportproc", async function exportproc(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"s": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["s"]);
  await $.mcall((await $.v(C, "FrmDepozitAccSettings")), "ShowModal", []);
  return L0.result;
}, {"params": ["S"], "kind": "procedure", "ptypes": ["String"]});
  U.setInitialization(async function __initialization(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: undefined};
  await $.set(C, "FrmDepozitAccSettings", (await $.mcall((await $.v(C, "TFrmDepozitAccSettings")), "Create", [(await $.v(C, "CommonApplication"))])));
  return L0.result;
});
  return U;
}
