// Generated from UnitProc_type.pas by pas2js — do not edit by hand; regenerate instead.
/* eslint-disable */
// @ts-nocheck

export default function define($) {
  const U = $.unit("UnitProc_type", ["Windows", "Messages", "SysUtils", "Variants", "Classes", "Graphics", "Controls", "Forms", "Dialogs", "StdCtrls", "XFSCtrls", "ExtCtrls", "UnitDataBussProc"]);
  const C = [U];
  U.defClass("TFormBussProc_type", "TForm", {"xfpanel1": {"name": "XFPanel1", "type": "TXFPanel"}, "xfradiogroup1": {"name": "XFRadioGroup1", "type": "TXFRadioGroup"}}, {});
  U.init(async () => {
    U.var_("FormBussProc_type", null, "TFormBussProc_type");
  });
  U.method("TFormBussProc_type", "XFRadioGroup1Click", async function XFRadioGroup1Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  { const $t1 = (await $.mv((await $.v(C, "XFRadioGroup1")), "ItemIndex"));
    if ($.eq($t1, 0)) {
      {
        const $t2 = (await $.mv((await $.v(C, "DataModule_bussProc")), "ODS_BussProc"));
        await $.stmt($.wcall([$t2], "close", [], C));
        await $.stmt((await $.wcall([$t2], "SetVariable", ["custtype", " in 1"], C)));
        await $.stmt($.wcall([$t2], "open", [], C));
      }
    }
    else if ($.eq($t1, 1)) {
      {
        const $t3 = (await $.mv((await $.v(C, "DataModule_bussProc")), "ODS_BussProc"));
        await $.stmt($.wcall([$t3], "close", [], C));
        await $.stmt((await $.wcall([$t3], "SetVariable", ["custtype", " in 2"], C)));
        await $.stmt($.wcall([$t3], "open", [], C));
      }
    }
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  return U;
}
