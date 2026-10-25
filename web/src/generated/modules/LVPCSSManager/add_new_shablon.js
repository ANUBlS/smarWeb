// Generated from add_new_shablon.pas by pas2js — do not edit by hand; regenerate instead.
/* eslint-disable */
// @ts-nocheck

export default function define($) {
  const U = $.unit("add_new_shablon", ["Windows", "Messages", "SysUtils", "Classes", "Graphics", "Controls", "Forms", "Dialogs", "StdCtrls", "Payment_Det", "Data_Unit"]);
  const C = [U];
  U.defClass("TAdd_new", "TForm", {"groupbox1": {"name": "GroupBox1", "type": "TGroupBox"}, "edit_new_shablon_name": {"name": "Edit_New_Shablon_name", "type": "TEdit"}, "button_new_shablon": {"name": "Button_New_shablon", "type": "TButton"}}, {});
  U.init(async () => {
    U.var_("Add_new", null, "TAdd_new");
  });
  U.method("TAdd_new", "Button_New_shablonClick", async function Button_New_shablonClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.ne((await $.mv((await $.v(C, "Edit_New_Shablon_name")), "Text")), ""))) {
    await $.stmt((await $.mcall((await $.mv((await $.v(C, "DataMod")), "INS")), "Callprocedure", ["xs_Beneficiary_shablon_insert", [(await $.idx((await $.v(C, "insert_shablon")), [1])), (await $.idx((await $.v(C, "insert_shablon")), [2])), (await $.idx((await $.v(C, "insert_shablon")), [3])), (await $.idx((await $.v(C, "insert_shablon")), [4])), (await $.idx((await $.v(C, "insert_shablon")), [5])), (await $.idx((await $.v(C, "insert_shablon")), [6])), (await $.idx((await $.v(C, "insert_shablon")), [7])), (await $.idx((await $.v(C, "insert_shablon")), [8])), (await $.idx((await $.v(C, "insert_shablon")), [9])), (await $.idx((await $.v(C, "insert_shablon")), [10])), (await $.idx((await $.v(C, "insert_shablon")), [11])), (await $.idx((await $.v(C, "insert_shablon")), [12])), (await $.idx((await $.v(C, "insert_shablon")), [13])), (await $.idx((await $.v(C, "insert_shablon")), [14])), (await $.idx((await $.v(C, "insert_shablon")), [15]))]])));
  } else {
    await $.stmt((await $.call(C, "MessageDlg", ["Melumat duzgun deyil !", (await $.v(C, "mtWarning")), [(await $.v(C, "mbok"))], 0])));
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  return U;
}
