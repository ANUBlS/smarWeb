// Generated from CableAbout.pas by pas2js — do not edit by hand; regenerate instead.
/* eslint-disable */
// @ts-nocheck

export default function define($) {
  const U = $.unit("CableAbout", ["Windows", "Messages", "SysUtils", "Classes", "Graphics", "Controls", "Forms", "Dialogs", "StdCtrls", "ExtCtrls", "Buttons"]);
  const C = [U];
  U.defClass("TCableManAbout", "TForm", {"ctlimage": {"name": "CtlImage", "type": "TSpeedButton"}, "namelbl": {"name": "NameLbl", "type": "TLabel"}, "okbtn": {"name": "OkBtn", "type": "TButton"}, "copyrightlbl": {"name": "CopyrightLbl", "type": "TLabel"}, "desclbl": {"name": "DescLbl", "type": "TLabel"}}, {});
  U.init(async () => {
  });
  U.func("ShowCableManAbout", async function ShowCableManAbout(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: undefined};
  {
    const $t1 = (await $.mcall((await $.v(C, "TCableManAbout")), "Create", [null]));
    try {
      await $.stmt($.wcall([$t1], "ShowModal", [], C));
    } finally {
      await $.stmt($.wcall([$t1], "Free", [], C));
    }
  }
  return L0.result;
}, {"params": [], "kind": "procedure", "ptypes": []});
  return U;
}
