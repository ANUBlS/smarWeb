// Generated from unitfilter.pas by pas2js — do not edit by hand; regenerate instead.
/* eslint-disable */
// @ts-nocheck

export default function define($) {
  const U = $.unit("unitfilter", ["Windows", "Messages", "SysUtils", "Classes", "Graphics", "Controls", "Forms", "Dialogs", "StdCtrls"]);
  const C = [U];
  U.defClass("Tfilter", "TForm", {"groupbox1": {"name": "GroupBox1", "type": "TGroupBox"}, "label1": {"name": "Label1", "type": "TLabel"}, "editballist": {"name": "EditBalList", "type": "TEdit"}, "cbdebt": {"name": "CBDebt", "type": "TCheckBox"}, "cbkred": {"name": "CBKred", "type": "TCheckBox"}, "checkboxbalance": {"name": "CheckBoxBalance", "type": "TCheckBox"}, "comboboxplan": {"name": "ComboBoxPlan", "type": "TComboBox"}, "buttonok": {"name": "ButtonOk", "type": "TButton"}, "buttoncancel": {"name": "ButtonCancel", "type": "TButton"}}, {});
  U.init(async () => {
    U.var_("filter", null, "Tfilter");
  });
  U.method("Tfilter", "CheckBoxBalanceClick", async function CheckBoxBalanceClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mset((await $.v(C, "ComboBoxPlan")), "Enabled", (await $.mv((await $.v(C, "CheckBoxBalance")), "Checked")));
  if ($.truthy((await $.mv((await $.v(C, "ComboBoxPlan")), "Enabled")))) {
    await $.mset((await $.v(C, "ComboBoxPlan")), "ItemIndex", 0);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("Tfilter", "FormKeyPress", async function FormKeyPress(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "key": $.asRef(p1), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.eq((await L0["key"].get()), "\u001b"))) {
    await $.stmt($.call(C, "Close", []));
  }
  return L0.result;
}, {"params": ["Sender", "Key"], "kind": "procedure", "ptypes": ["TObject", "Char"]});
  return U;
}
