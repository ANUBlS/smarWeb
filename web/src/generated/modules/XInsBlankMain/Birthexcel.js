// Generated from Birthexcel.pas by pas2js — do not edit by hand; regenerate instead.
/* eslint-disable */
// @ts-nocheck

export default function define($) {
  const U = $.unit("Birthexcel", ["Windows", "Messages", "SysUtils", "Variants", "Classes", "Graphics", "Controls", "Forms", "Dialogs", "ComCtrls", "StdCtrls", "CMExcelExport", "BlankDMImpl"]);
  const C = [U];
  U.defClass("TForm5", "TForm", {"button1": {"name": "Button1", "type": "TButton"}, "datetimepicker1": {"name": "DateTimePicker1", "type": "TDateTimePicker"}, "excelexport": {"name": "ExcelExport", "type": "TCMExcelExport"}, "memo1": {"name": "Memo1", "type": "TMemo"}}, {});
  U.init(async () => {
    U.var_("Form5", null, "TForm5");
  });
  U.method("TForm5", "Button1Click", async function Button1Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "aa": ''};
  await $.fixArgs(L0, ["sender"]);
  L0["aa"] = (await $.call(C, "formatdatetime", ["DD/MM/YYYY", (await $.mv((await $.v(C, "DateTimePicker1")), "DateTime"))]));
  await $.mcall((await $.mv((await $.v(C, "BlankDM")), "dsbirth")), "CloseAll", []);
  { const $t1 = await $.iset((await $.mv((await $.mv((await $.v(C, "BlankDM")), "dsbirth")), "SQL")), [21], $.add($.add($.add($.add($.add($.add($.add("  and EXTRACT( day from ics.dateofbirth)=", "'"), (await $.call(C, "formatdatetime", ["DD", (await $.mv((await $.v(C, "DateTimePicker1")), "DateTime"))]))), "'"), " and EXTRACT( month from ics.dateofbirth)="), "'"), (await $.call(C, "formatdatetime", ["MM", (await $.mv((await $.v(C, "DateTimePicker1")), "DateTime"))]))), "'")); if ($t1 !== undefined) { await $.mset((await $.mv((await $.v(C, "BlankDM")), "dsbirth")), "SQL", $t1); } }
  await $.mset((await $.v(C, "Memo1")), "Text", (await $.mv((await $.mv((await $.mv((await $.v(C, "BlankDM")), "dsbirth")), "SQL")), "Text")));
  await $.mcall((await $.mv((await $.v(C, "BlankDM")), "dsbirth")), "Open", []);
  if ($.truthy($.eq((await $.mv((await $.mv((await $.v(C, "BlankDM")), "dsbirth")), "RecordCount")), 0))) {
    await $.stmt((await $.call(C, "ShowMessage", ["Seçilmiş tarixədə doğum günü olan müştəri yoxdur !!! "])));
    return L0.result;
  }
  if ($.truthy((await $.or_(($.eq((await $.mv((await $.mcall((await $.mv((await $.v(C, "BlankDM")), "dsbirth")), "FieldByName", ["user"])), "AsString")), "SEDR")), async () => ($.eq((await $.mv((await $.mcall((await $.mv((await $.v(C, "BlankDM")), "dsbirth")), "FieldByName", ["user"])), "AsString")), "SATISH_MUD")))))) {
    await $.mset((await $.mcall((await $.mv((await $.v(C, "BlankDM")), "dsbirth")), "FieldByName", ["mobilephone"])), "Visible", true);
    await $.mset((await $.mcall((await $.mv((await $.v(C, "BlankDM")), "dsbirth")), "FieldByName", ["USER_ADI"])), "Visible", true);
  }
  {
    const $t2 = (await $.v(C, "ExcelExport"));
    await $.stmt($.wcall([$t2], "Connect", [], C));
    await $.stmt((await $.wcall([$t2], "ExportDataset", [(await $.mv((await $.wv([$t2], "BlankDM", C, false)), "dsbirth")), "Butun sıgortalar.", (await $.wv([$t2], "True", C, false)), (await $.wv([$t2], "false", C, false))], C)));
    await $.stmt($.wcall([$t2], "Disconnect", [], C));
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  return U;
}
