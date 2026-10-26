// Generated from Uninfo.pas by pas2js — do not edit by hand; regenerate instead.
/* eslint-disable */
// @ts-nocheck

export default function define($) {
  const U = $.unit("Uninfo", ["Windows", "Messages", "SysUtils", "Classes", "Graphics", "Controls", "Forms", "Dialogs", "StdCtrls", "Gauges", "ExtCtrls"]);
  const C = [U];
  U.defClass("Tfrminfo", "TForm", {"lbtext": {"name": "lbtext", "type": "TLabel"}, "timer1": {"name": "Timer1", "type": "TTimer"}, "gcprog": {"name": "gcprog", "type": "TGauge"}, "bevel1": {"name": "Bevel1", "type": "TBevel"}}, {});
  U.init(async () => {
    U.var_("frminfo", null, "Tfrminfo");
  });
  U.method("Tfrminfo", "Timer1Timer", async function Timer1Timer(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "x": null};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t1 = (await $.v(C, "gcprog"));
    await $.wset([$t1], "Progress", $.add((await $.wv([$t1], "Progress", C, false)), 2), C);
    if ($.truthy($.eq((await $.wv([$t1], "Progress", C, false)), (await $.wv([$t1], "MaxValue", C, false))))) {
      await $.wset([$t1], "MaxValue", 0, C);
      await $.wset([$t1], "x", (await $.wv([$t1], "Forecolor", C, false)), { get: async () => L0["x"], set: async (v) => { L0["x"] = v; }, local: true });
      await $.wset([$t1], "ForeColor", (await $.wv([$t1], "BackColor", C, false)), C);
      await $.wset([$t1], "BackColor", (await $.wv([$t1], "X", { get: async () => L0["x"], set: async (v) => { L0["x"] = v; }, local: true }, false)), C);
      await $.wset([$t1], "MaxValue", 100, C);
    }
  }
  await $.stmt($.call(C, "refresh", []));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("Tfrminfo", "FormShow", async function FormShow(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mset((await $.v(C, "gcprog")), "MaxValue", 100);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  return U;
}
