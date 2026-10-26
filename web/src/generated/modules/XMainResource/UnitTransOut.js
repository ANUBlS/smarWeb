// Generated from UnitTransOut.pas by pas2js — do not edit by hand; regenerate instead.
/* eslint-disable */
// @ts-nocheck

export default function define($) {
  const U = $.unit("UnitTransOut", ["Windows", "Messages", "SysUtils", "Classes", "Graphics", "Controls", "Forms", "Grids", "DBGridEh", "StdCtrls", "Buttons", "ComCtrls", "DBGridEhGrouping", "GridsEh", "unitdata", "sboapiDataModuleImpl", "SBTranslateProc"]);
  const C = [U];
  U.defClass("TFormTransOut", "TForm", {"progressbar": {"name": "ProgressBar", "type": "TProgressBar"}, "btntrans": {"name": "BtnTrans", "type": "TBitBtn"}, "dbgridehshowtrans": {"name": "DBGridEhShowTrans", "type": "TDBGridEh"}, "btntransshow": {"name": "BtnTransShow", "type": "TBitBtn"}}, {});
  U.init(async () => {
    U.var_("FormTransOut", null, "TFormTransOut");
  });
  U.method("TFormTransOut", "BtnTransShowClick", async function BtnTransShowClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFormTransOut", "FormCreate", async function FormCreate(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.stmt((await $.mcall((await $.v(C, "SBTranslateProc")), "TranslateAllCompForms", [Self, (await $.mv((await $.v(C, "sboapiDataModule")), "OrPack_SL"))])));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFormTransOut", "BtnTransClick", async function BtnTransClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  return U;
}
