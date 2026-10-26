// Generated from PdfForm.pas by pas2js — do not edit by hand; regenerate instead.
/* eslint-disable */
// @ts-nocheck

export default function define($) {
  const U = $.unit("PdfForm", ["Windows", "Messages", "SysUtils", "Variants", "Classes", "Graphics", "Controls", "Forms", "Dialogs", "StdCtrls", "XFSCtrls", "Grids", "XDBGrids", "ExtCtrls", "DB", "ShellAPI", "UnitDataModuleCourt"]);
  const C = [U];
  U.defClass("TFormPdf", "TForm", {"xfpanel1": {"name": "XFPanel1", "type": "TXFPanel"}, "xdbgrid1": {"name": "XDBGrid1", "type": "TXDBGrid"}, "xfpanel2": {"name": "XFPanel2", "type": "TXFPanel"}, "xfbutton1": {"name": "XFButton1", "type": "TXFButton"}, "xfbutton2": {"name": "XFButton2", "type": "TXFButton"}, "xfbutton3": {"name": "XFButton3", "type": "TXFButton"}, "odexport": {"name": "ODExport", "type": "TOpenDialog"}, "sdimport": {"name": "SDImport", "type": "TSaveDialog"}, "xfbutton4": {"name": "XFButton4", "type": "TXFButton"}}, {});
  U.init(async () => {
    U.var_("FormPdf", null, "TFormPdf");
  });
  U.method("TFormPdf", "XFButton1Click", async function XFButton1Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy((await $.mv((await $.v(C, "ODExport")), "Execute")))) {
    {
      const $t1 = (await $.v(C, "DataModuleCourt"));
      await $.mcall((await $.wv([$t1], "ODSPdf", C, false)), "Open", []);
      await $.mcall((await $.wv([$t1], "ODSPdf", C, false)), "insert", []);
      await $.mset((await $.mcall((await $.wv([$t1], "ODSPdf", C, false)), "FieldByName", ["name"])), "AsString", $.add((await $.wcall([$t1], "ChangeFileExt", [(await $.wcall([$t1], "ExtractFileName", [(await $.mv((await $.wv([$t1], "ODExport", C, false)), "Filename"))], C)), ""], C)), ".pdf"));
      await $.stmt((await $.mcall((await $.wcall([$t1], "tblobfield", [(await $.mcall((await $.wv([$t1], "ODSPdf", C, false)), "FieldByName", ["pdf"]))], C)), "LoadFromFile", [(await $.mv((await $.wv([$t1], "ODExport", C, false)), "FileName"))])));
      await $.mcall((await $.wv([$t1], "ODSPdf", C, false)), "Post", []);
      await $.mcall((await $.wv([$t1], "ODSPdf", C, false)), "Refresh", []);
      await $.stmt((await $.wcall([$t1], "ShowMessage", ["Fayıl qəbul olundu"], C)));
    }
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFormPdf", "XFButton2Click", async function XFButton2Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "ptkwrd": null};
  await $.fixArgs(L0, ["sender"]);
  L0["ptkwrd"] = (await $.mv((await $.v(C, "Tmemorystream")), "Create"));
  await $.stmt((await $.mcall((await $.call(C, "tblobfield", [(await $.mcall((await $.mv((await $.v(C, "DataModuleCourt")), "ODSPdf")), "FieldByName", ["pdf"]))])), "SaveToStream", [L0["ptkwrd"]])));
  await $.mset(L0["ptkwrd"], "Position", 0);
  await $.mset((await $.v(C, "SDImport")), "FileName", (await $.mv((await $.mcall((await $.mv((await $.v(C, "DataModuleCourt")), "ODSPdf")), "FieldByName", ["name"])), "AsString")));
  if ($.truthy((await $.mv((await $.v(C, "SDImport")), "Execute")))) {
    await $.stmt((await $.mcall(L0["ptkwrd"], "SaveToFile", [(await $.mv((await $.v(C, "SDImport")), "FileName"))])));
  }
  await $.mcall(L0["ptkwrd"], "Free", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFormPdf", "XFButton3Click", async function XFButton3Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mcall((await $.mv((await $.v(C, "DataModuleCourt")), "ODSPdf")), "edit", []);
  await $.mcall((await $.mv((await $.v(C, "XDBGrid1")), "SelectedRows")), "Delete", []);
  await $.mcall((await $.mv((await $.v(C, "DataModuleCourt")), "ODSPdf")), "Refresh", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFormPdf", "XFButton4Click", async function XFButton4Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "ptkwrd": null};
  await $.fixArgs(L0, ["sender"]);
  await $.stmt((await $.call(C, "ShowMessage", ["Texniki işlər gedir yekunlaşdırdıqda sizə xəbər veriləcək"])));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  return U;
}
