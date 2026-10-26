// Generated from Unit3.pas by pas2js — do not edit by hand; regenerate instead.
/* eslint-disable */
// @ts-nocheck

export default function define($) {
  const U = $.unit("Unit3", ["Windows", "Messages", "SysUtils", "Variants", "Classes", "Graphics", "Controls", "Forms", "Dialogs", "CMExcelExport", "StdCtrls", "ComCtrls", "BlankDMImpl"]);
  const C = [U];
  U.defClass("TForm3", "TForm", {"edit1": {"name": "Edit1", "type": "TEdit"}, "edit2": {"name": "Edit2", "type": "TEdit"}, "datetimepicker1": {"name": "DateTimePicker1", "type": "TDateTimePicker"}, "datetimepicker2": {"name": "DateTimePicker2", "type": "TDateTimePicker"}, "button1": {"name": "Button1", "type": "TButton"}, "excelexport": {"name": "ExcelExport", "type": "TCMExcelExport"}}, {});
  U.init(async () => {
    U.var_("Form3", null, "TForm3");
  });
  U.method("TForm3", "Button1Click", async function Button1Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mcall((await $.mv((await $.v(C, "BlankDM")), "ins_bonushesabat")), "CloseAll", []);
  await $.stmt((await $.mcall((await $.mv((await $.v(C, "BlankDM")), "ins_bonushesabat")), "SetVariable", ["dat1", (await $.mv((await $.v(C, "DateTimePicker1")), "Date"))])));
  await $.stmt((await $.mcall((await $.mv((await $.v(C, "BlankDM")), "ins_bonushesabat")), "SetVariable", ["dat2", (await $.mv((await $.v(C, "DateTimePicker2")), "Date"))])));
  await $.stmt((await $.mcall((await $.mv((await $.v(C, "BlankDM")), "ins_bonushesabat")), "SetVariable", ["blacndb", (await $.mv((await $.v(C, "edit1")), "text"))])));
  await $.stmt((await $.mcall((await $.mv((await $.v(C, "BlankDM")), "ins_bonushesabat")), "SetVariable", ["blacnkr", (await $.mv((await $.v(C, "edit2")), "text"))])));
  await $.mcall((await $.mv((await $.v(C, "BlankDM")), "ins_bonushesabat")), "Open", []);
  {
    const $t1 = (await $.v(C, "ExcelExport"));
    await $.stmt($.wcall([$t1], "Connect", [], C));
    await $.stmt((await $.wcall([$t1], "ExportDataset", [(await $.mv((await $.wv([$t1], "BlankDM", C, false)), "ins_bonushesabat")), "Bonus Hesabatg.", (await $.wv([$t1], "True", C, false)), (await $.wv([$t1], "false", C, false))], C)));
    await $.stmt($.wcall([$t1], "Disconnect", [], C));
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  return U;
}
