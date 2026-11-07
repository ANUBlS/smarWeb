// Generated from ProgressUnit.pas by pas2js — do not edit by hand; regenerate instead.
/* eslint-disable */
// @ts-nocheck

export default function define($) {
  const U = $.unit("ProgressUnit", ["Windows", "Messages", "SysUtils", "Classes", "Graphics", "Controls", "Forms", "Dialogs", "ComCtrls"]);
  const C = [U];
  U.defClass("TProgressForm", "TForm", {"progressshower": {"name": "ProgressShower", "type": "TProgressBar"}}, {});
  U.init(async () => {
    U.var_("ProgressForm", null, "TProgressForm");
  });
  return U;
}
