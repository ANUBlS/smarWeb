// Generated from SelDialog.pas by pas2js — do not edit by hand; regenerate instead.
/* eslint-disable */
// @ts-nocheck

export default function define($) {
  const U = $.unit("SelDialog", ["Windows", "Messages", "SysUtils", "Classes", "Graphics", "Controls", "Forms", "Dialogs", "StdCtrls", "FileCtrl", "Buttons", "AppEvnts", "Properties_Unit"]);
  const C = [U];
  U.defClass("TSelDirFrm", "TForm", {"directorylistbox1": {"name": "DirectoryListBox1", "type": "TDirectoryListBox"}, "drivecombobox1": {"name": "DriveComboBox1", "type": "TDriveComboBox"}, "but_ok": {"name": "But_Ok", "type": "TBitBtn"}, "but_cancel": {"name": "But_cancel", "type": "TBitBtn"}, "applicationevents1": {"name": "ApplicationEvents1", "type": "TApplicationEvents"}}, {});
  U.init(async () => {
    U.var_("SelDirFrm", null, "TSelDirFrm");
  });
  U.method("TSelDirFrm", "But_cancelClick", async function But_cancelClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.stmt($.call(C, "close", []));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TSelDirFrm", "DriveComboBox1Change", async function DriveComboBox1Change(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TSelDirFrm", "But_OkClick", async function But_OkClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy((await $.mv((await $.v(C, "PropertiesForm")), "GetIndir")))) {
    await $.mset((await $.mv((await $.v(C, "PropertiesForm")), "Edit_IN_Dir")), "Text", (await $.mv((await $.v(C, "DirectoryListBox1")), "Directory")));
  } else {
    if ($.truthy((await $.mv((await $.v(C, "PropertiesForm")), "GetOutdir")))) {
      await $.mset((await $.mv((await $.v(C, "PropertiesForm")), "Edit_OUT_Dir")), "Text", (await $.mv((await $.v(C, "DirectoryListBox1")), "Directory")));
    } else {
      if ($.truthy((await $.mv((await $.v(C, "PropertiesForm")), "sw_GetIndir")))) {
        await $.mset((await $.mv((await $.v(C, "PropertiesForm")), "Edit_swIN")), "Text", (await $.mv((await $.v(C, "DirectoryListBox1")), "Directory")));
      } else {
        if ($.truthy((await $.mv((await $.v(C, "PropertiesForm")), "sw_GetOutdir")))) {
          await $.mset((await $.mv((await $.v(C, "PropertiesForm")), "Edit_swOUT")), "Text", (await $.mv((await $.v(C, "DirectoryListBox1")), "Directory")));
        }
      }
    }
  }
  await $.mset((await $.v(C, "PropertiesForm")), "Getindir", false);
  await $.mset((await $.v(C, "PropertiesForm")), "GetOutdir", false);
  await $.mset((await $.v(C, "PropertiesForm")), "sw_Getindir", false);
  await $.mset((await $.v(C, "PropertiesForm")), "sw_GetOutdir", false);
  await $.stmt($.call(C, "close", []));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  return U;
}
