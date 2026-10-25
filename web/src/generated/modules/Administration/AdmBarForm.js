// Generated from AdmBarForm.pas by pas2js — do not edit by hand; regenerate instead.
/* eslint-disable */
// @ts-nocheck

export default function define($) {
  const U = $.unit("AdmBarForm", ["Windows", "Messages", "SysUtils", "Classes", "Graphics", "Controls", "Forms", "Dialogs", "StdCtrls", "ComCtrls", "Buttons", "ExtCtrls", "Gauges"]);
  const C = [U];
  U.defClass("TBarForm", "TForm", {"panel1": {"name": "Panel1", "type": "TPanel"}, "bartitle": {"name": "BarTitle", "type": "TGroupBox"}, "barcaption": {"name": "BarCaption", "type": "TLabel"}, "bar": {"name": "Bar", "type": "TProgressBar"}, "canclosebarform": {"name": "CanCloseBarForm", "type": "Boolean"}}, {});
  U.init(async () => {
    U.var_("BarForm", null, "TBarForm");
  });
  U.method("TBarForm", "FormCreate", async function FormCreate(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.set(C, "CanCloseBarForm", false);
  await $.mset((await $.v(C, "Bar")), "Step", 1);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TBarForm", "WMUser", async function WMUser(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"message": $.asRef(p0), result: undefined};
  await $.mcall((await $.v(C, "Bar")), "StepIt", []);
  await $.set(C, "CanCloseBarForm", $.eq((await $.mv((await $.v(C, "Bar")), "Position")), (await $.mv((await $.v(C, "Bar")), "Max"))));
  return L0.result;
}, {"params": ["Message"], "kind": "procedure", "ptypes": ["TMessage"]});
  U.method("TBarForm", "FormCloseQuery", async function FormCloseQuery(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "canclose": $.asRef(p1), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await L0["canclose"].set((await $.v(C, "CanCloseBarForm")));
  return L0.result;
}, {"params": ["Sender", "CanClose"], "kind": "procedure", "ptypes": ["TObject", "Boolean"]});
  U.method("TBarForm", "Execute", async function Execute(Self, p0, p1, p2, p3, p4) {
  const C = $.chain(Self, U);
  const L0 = {"header": $.copyArg(p0), "title": $.copyArg(p1), "caption": $.copyArg(p2), "barstep": $.copyArg(p3), "barmax": $.copyArg(p4), result: undefined};
  await $.fixArgs(L0, ["header", "title", "caption", "barstep", "barmax"]);
  L0["caption"] = L0["header"];
  await $.mset((await $.v(C, "BarTitle")), "Caption", L0["title"]);
  await $.mset((await $.v(C, "BarCaption")), "Caption", L0["caption"]);
  await $.mset((await $.v(C, "Bar")), "Step", L0["barstep"]);
  await $.mset((await $.v(C, "Bar")), "Max", L0["barmax"]);
  await $.stmt($.call(C, "Show", []));
  return L0.result;
}, {"params": ["Header", "Title", "Caption", "BarStep", "BarMax"], "kind": "procedure", "ptypes": ["String", "String", "String", "Integer", "Integer"]});
  U.method("TBarForm", "FormDeactivate", async function FormDeactivate(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t1 = (await $.call(C, "TForm", [Self]));
    if ($.truthy((await $.wv([$t1], "Visible", C, false)))) {
      await $.stmt($.wcall([$t1], "SetFocus", [], C));
      await $.stmt($.wcall([$t1], "Beep", [], C));
    }
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TBarForm", "FormClose", async function FormClose(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "action": $.asRef(p1), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy((await $.v(C, "CanCloseBarForm")))) {
    await $.stmt($.call(C, "Close", []));
    await $.stmt($.call(C, "Release", []));
  }
  return L0.result;
}, {"params": ["Sender", "Action"], "kind": "procedure", "ptypes": ["TObject", "TCloseAction"]});
  return U;
}
