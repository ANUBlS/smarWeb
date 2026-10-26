// Generated from Form_ExcelSheetsUnit.pas by pas2js — do not edit by hand; regenerate instead.
/* eslint-disable */
// @ts-nocheck

export default function define($) {
  const U = $.unit("Form_ExcelSheetsUnit", ["Windows", "Messages", "SysUtils", "Variants", "Classes", "Graphics", "Controls", "Forms", "Dialogs", "StdCtrls", "CheckLst", "ExtCtrls"]);
  const C = [U];
  U.defClass("TForm_ExcelSheets", "TForm", {"panel1": {"name": "Panel1", "type": "TPanel"}, "checklistbox1": {"name": "CheckListBox1", "type": "TCheckListBox"}, "button1": {"name": "Button1", "type": "TButton"}, "button2": {"name": "Button2", "type": "TButton"}}, {});
  U.init(async () => {
    U.var_("Form_ExcelSheets", null, "TForm_ExcelSheets");
  });
  U.method("TForm_ExcelSheets", "Button1Click", async function Button1Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.stmt($.call(C, "close", []));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  return U;
}
