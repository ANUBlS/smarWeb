// Generated from FrmAddBuugcetimpl.pas by pas2js — do not edit by hand; regenerate instead.
/* eslint-disable */
// @ts-nocheck

export default function define($) {
  const U = $.unit("FrmAddBuugcetimpl", ["Windows", "Messages", "SysUtils", "Classes", "Graphics", "Controls", "Forms", "Dialogs", "Grids", "DBGridEh", "StdCtrls", "ExtCtrls", "Mask", "DBCtrlsEh"]);
  const C = [U];
  U.defClass("TBudgetAddFr", "TForm", {"groupbox1": {"name": "GroupBox1", "type": "TGroupBox"}, "fitablehmcb": {"name": "FitableHmCb", "type": "TComboBox"}, "dbgrideh1": {"name": "DBGridEh1", "type": "TDBGridEh"}, "panel1": {"name": "Panel1", "type": "TPanel"}, "addname": {"name": "AddName", "type": "TDBEditEh"}, "label1": {"name": "Label1", "type": "TLabel"}}, {});
  U.init(async () => {
    U.var_("BudgetAddFr", null, "TBudgetAddFr");
  });
  U.method("TBudgetAddFr", "FormCreate", async function FormCreate(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mset((await $.v(C, "ComboBox1")), "ItemIndex", 0);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  return U;
}
