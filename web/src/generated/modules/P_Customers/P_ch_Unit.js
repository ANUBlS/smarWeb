// Generated from P_ch_Unit.pas by pas2js — do not edit by hand; regenerate instead.
/* eslint-disable */
// @ts-nocheck

export default function define($) {
  const U = $.unit("P_ch_Unit", ["Windows", "Messages", "SysUtils", "Classes", "Graphics", "Controls", "Forms", "Dialogs", "StdCtrls", "ExtCtrls", "P_Co_MemorialRep_Unit", "P_CO_MemorialRep1_Unit", "P_CO_Memorial_Unit", "P_Datamod_Unit"]);
  const C = [U];
  U.defClass("TP_Ch_Form", "TForm", {"panel1": {"name": "Panel1", "type": "TPanel"}, "label1": {"name": "Label1", "type": "TLabel"}, "label2": {"name": "Label2", "type": "TLabel"}, "button1": {"name": "Button1", "type": "TButton"}, "ch_1": {"name": "ch_1", "type": "TCheckBox"}, "ch_2": {"name": "ch_2", "type": "TCheckBox"}}, {});
  U.init(async () => {
    U.var_("P_Ch_Form", null, "TP_Ch_Form");
  });
  U.method("TP_Ch_Form", "Button1Click", async function Button1Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy((await $.mv((await $.v(C, "ch_1")), "checked")))) {
    if ($.truthy($.not((await $.mv((await $.mv((await $.v(C, "P_Datamodule")), "DebetTransactionsData")), "IsEmpty"))))) {
      await $.mcall((await $.v(C, "P_CO_MemorialRep")), "preview", []);
    } else {
      await $.stmt((await $.call(C, "ShowMessage", ["Heç bir əməliyyat qeyd olunmayıb"])));
    }
  }
  if ($.truthy((await $.mv((await $.v(C, "ch_2")), "checked")))) {
    if ($.truthy($.not((await $.mv((await $.mv((await $.v(C, "P_Datamodule")), "CreditTransactionsData")), "IsEmpty"))))) {
      await $.mcall((await $.v(C, "P_CO_MemorialRep1")), "preview", []);
    } else {
      await $.stmt((await $.call(C, "ShowMessage", ["Heç bir əməliyyat qeyd olunmayıb"])));
    }
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  return U;
}
