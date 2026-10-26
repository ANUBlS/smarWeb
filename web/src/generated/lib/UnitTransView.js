// Generated from UnitTransView.pas by pas2js — do not edit by hand; regenerate instead.
/* eslint-disable */
// @ts-nocheck

export default function define($) {
  const U = $.unit("UnitTransView", ["Windows", "Messages", "SysUtils", "Classes", "Graphics", "Controls", "Forms", "Dialogs", "Grids", "DBGrids", "ExtCtrls", "StdCtrls", "Mask", "DBCtrls", "UnitData", "SBTranslateProc", "sboapiDataModuleImpl"]);
  const C = [U];
  U.defClass("TFormTransView", "TForm", {"groupboxacc": {"name": "GroupBoxAcc", "type": "TGroupBox"}, "dbgridmainstate": {"name": "DBGridMainState", "type": "TDBGrid"}, "paneln": {"name": "PanelN", "type": "TPanel"}, "groupboxtrans": {"name": "GroupBoxTrans", "type": "TGroupBox"}, "dbgridextracttrans": {"name": "DBGridExtractTrans", "type": "TDBGrid"}, "dbeditturnbeg": {"name": "DBEditTurnBeg", "type": "TDBEdit"}, "dbeditturnend": {"name": "DBEditTurnEnd", "type": "TDBEdit"}, "labelturnfirst": {"name": "LabelTurnFirst", "type": "TLabel"}, "labelturnend": {"name": "LabelTurnEnd", "type": "TLabel"}}, {});
  U.init(async () => {
    U.var_("FormTransView", null, "TFormTransView");
  });
  U.method("TFormTransView", "FormCreate", async function FormCreate(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.stmt((await $.mcall((await $.v(C, "SBTranslateProc")), "TranslateAllCompForms", [Self, (await $.mv((await $.v(C, "sboapiDataModule")), "OrPack_SL"))])));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  return U;
}
