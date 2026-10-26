// Generated from Unit_interval.pas by pas2js — do not edit by hand; regenerate instead.
/* eslint-disable */
// @ts-nocheck

export default function define($) {
  const U = $.unit("Unit_interval", ["Windows", "Messages", "SysUtils", "Variants", "Classes", "Graphics", "Controls", "Forms", "Dialogs", "StdCtrls", "Buttons", "XFSCtrls", "ComCtrls", "ExtCtrls", "UnitAdifData"]);
  const C = [U];
  U.defClass("TForm_Interval", "TForm", {"xfpanel1": {"name": "XFPanel1", "type": "TXFPanel"}, "xflabel1": {"name": "XFLabel1", "type": "TXFLabel"}, "xflabel2": {"name": "XFLabel2", "type": "TXFLabel"}, "datetim_begin": {"name": "DateTim_begin", "type": "TDateTimePicker"}, "datetim_end": {"name": "DateTim_end", "type": "TDateTimePicker"}, "xfbitbtn1": {"name": "XFBitBtn1", "type": "TXFBitBtn"}}, {});
  U.init(async () => {
    U.var_("Form_Interval", null, "TForm_Interval");
  });
  U.method("TForm_Interval", "FormShow", async function FormShow(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mset((await $.v(C, "DateTim_begin")), "DateTime", (await $.mv((await $.mcall((await $.mv((await $.v(C, "Adif_Data")), "Sysdat")), "FieldByName", ["tek_dat"])), "AsDateTime")));
  await $.mset((await $.v(C, "DateTim_end")), "DateTime", (await $.mv((await $.mcall((await $.mv((await $.v(C, "Adif_Data")), "Sysdat")), "FieldByName", ["tek_dat"])), "AsDateTime")));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TForm_Interval", "XFBitBtn1Click", async function XFBitBtn1Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "dat_begin": 0, "dat_end": 0};
  await $.fixArgs(L0, ["sender"]);
  L0["dat_begin"] = (await $.mv((await $.v(C, "DateTim_begin")), "DateTime"));
  L0["dat_end"] = (await $.mv((await $.v(C, "DateTim_end")), "DateTime"));
  {
    const $t1 = (await $.v(C, "Adif_Data"));
    const $t2 = (await $.wv([$t1], "ods_account", C, false));
    await $.stmt($.wcall([$t1, $t2], "close", [], C));
    await $.stmt((await $.wcall([$t1, $t2], "SetVariable", ["d1", (await $.wv([$t1, $t2], "dat_begin", { get: async () => L0["dat_begin"], set: async (v) => { L0["dat_begin"] = v; }, local: true }, false))], C)));
    await $.stmt((await $.wcall([$t1, $t2], "SetVariable", ["d2", (await $.wv([$t1, $t2], "dat_end", { get: async () => L0["dat_end"], set: async (v) => { L0["dat_end"] = v; }, local: true }, false))], C)));
    await $.stmt($.wcall([$t1, $t2], "open", [], C));
  }
  await $.mcall((await $.v(C, "Form_Interval")), "Close", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  return U;
}
