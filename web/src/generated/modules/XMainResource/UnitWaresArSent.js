// Generated from UnitWaresArSent.pas by pas2js — do not edit by hand; regenerate instead.
/* eslint-disable */
// @ts-nocheck

export default function define($) {
  const U = $.unit("UnitWaresArSent", ["Windows", "Messages", "SysUtils", "Classes", "Graphics", "Controls", "Forms", "Dialogs", "Grids", "DBGridEh", "StdCtrls", "Buttons", "DBGridEhGrouping", "GridsEh", "sboapiDataModuleImpl", "UnitData", "UnitDat", "SBTranslateProc"]);
  const C = [U];
  U.defClass("TArWaresS", "TForm", {"dbgridehgroupnb": {"name": "DBGridEhGroupNB", "type": "TDBGridEh"}, "dbgridwaresnb": {"name": "DBGridWaresNB", "type": "TDBGridEh"}, "groupbox1": {"name": "GroupBox1", "type": "TGroupBox"}, "lbarwarescommit": {"name": "lbArWaresCommit", "type": "TLabel"}, "btnarwarescommit": {"name": "btnArWaresCommit", "type": "TBitBtn"}}, {});
  U.init(async () => {
    U.var_("ArWaresS", null, "TArWaresS");
  });
  U.method("TArWaresS", "FormCreate", async function FormCreate(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.stmt((await $.mcall((await $.v(C, "SBTranslateProc")), "TranslateAllCompForms", [Self, (await $.mv((await $.v(C, "sboapiDataModule")), "OrPack_SL"))])));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  return U;
}
