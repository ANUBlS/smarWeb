// Generated from datnamount.pas by pas2js — do not edit by hand; regenerate instead.
/* eslint-disable */
// @ts-nocheck

export default function define($) {
  const U = $.unit("datnamount", ["Windows", "Messages", "SysUtils", "Variants", "Classes", "Graphics", "Controls", "Forms", "Dialogs", "Data_Unit", "StdCtrls", "ComCtrls"]);
  const C = [U];
  U.defClass("Tmnt", "TForm", {"datetimepicker1": {"name": "DateTimePicker1", "type": "TDateTimePicker"}, "edit1": {"name": "Edit1", "type": "TEdit"}, "btnsave": {"name": "btnsave", "type": "TButton"}, "edit2": {"name": "Edit2", "type": "TEdit"}}, {});
  U.init(async () => {
    U.var_("mnt", null, "Tmnt");
  });
  U.method("Tmnt", "btnsaveClick", async function btnsaveClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.stmt((await $.mcall((await $.mv((await $.v(C, "DataMod")), "INS")), "CallProcedure", ["xs_MT996", [(await $.mv((await $.v(C, "edit2")), "Text")), (await $.mv((await $.v(C, "DateTimePicker1")), "DateTime")), (await $.mv((await $.v(C, "edit1")), "Text"))]])));
  await $.stmt((await $.call(C, "ShowMessage", ["Mandatin maksimum mələgi və son tarix qeyd edildi."])));
  await $.stmt($.call(C, "close", []));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  return U;
}
