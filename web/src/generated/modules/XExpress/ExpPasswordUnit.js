// Generated from ExpPasswordUnit.pas by pas2js — do not edit by hand; regenerate instead.
/* eslint-disable */
// @ts-nocheck

export default function define($) {
  const U = $.unit("ExpPasswordUnit", ["Windows", "Messages", "SysUtils", "Variants", "Classes", "Graphics", "Controls", "Forms", "Dialogs", "StdCtrls", "ExtCtrls", "CMHintBox", "ExpDataModuleUnit", "ExpUnitImpl", "ExpUnitNewImpl"]);
  const C = [U];
  U.defClass("TExpPasswordForm", "TForm", {"groupbox1": {"name": "GroupBox1", "type": "TGroupBox"}, "button1": {"name": "Button1", "type": "TButton"}, "button2": {"name": "Button2", "type": "TButton"}, "editpassword": {"name": "EditPassword", "type": "TEdit"}, "cmhintbox1": {"name": "CMHintBox1", "type": "TCMHintBox"}}, {});
  U.init(async () => {
    U.var_("ExpPasswordForm", null, "TExpPasswordForm");
  });
  U.method("TExpPasswordForm", "Button1Click", async function Button1Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "s": ''};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t1 = (await $.v(C, "ExpDataModule"));
    const $t2 = (await $.wv([$t1], "ExpIncomingPassword", C, false));
    await $.wset([$t1, $t2], "s", (await $.mv((await $.wv([$t1, $t2], "EditPassword", C, false)), "Text")), { get: async () => L0["s"], set: async (v) => { L0["s"] = v; }, local: true });
    await $.stmt($.wcall([$t1, $t2], "close", [], C));
    await $.stmt((await $.wcall([$t1, $t2], "SetVariable", ["v_password", (await $.wv([$t1, $t2], "s", { get: async () => L0["s"], set: async (v) => { L0["s"] = v; }, local: true }, false))], C)));
    await $.stmt($.wcall([$t1, $t2], "Open", [], C));
    if ($.truthy($.gt((await $.wv([$t1, $t2], "RecordCount", C, false)), 0))) {
      await $.mset((await $.wv([$t1, $t2], "ExpFormNew", C, false)), "FForm", 2);
      await $.mset((await $.mv((await $.wv([$t1, $t2], "ExpFormNew", C, false)), "Button1")), "Visible", (await $.wv([$t1, $t2], "True", C, false)));
      await $.mcall((await $.wv([$t1, $t2], "ExpFormNew", C, false)), "ShowModal", []);
    } else {
      await $.stmt((await $.mcall((await $.wv([$t1, $t2], "CMHintBox1", C, false)), "ShowMessage", ["Şifrə düzgün deyil!"])));
      await $.mcall((await $.wv([$t1, $t2], "EditPassword", C, false)), "clear", []);
    }
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TExpPasswordForm", "Button2Click", async function Button2Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.stmt($.call(C, "close", []));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TExpPasswordForm", "FormClose", async function FormClose(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "action": $.asRef(p1), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mset((await $.v(C, "ExpFormNew")), "FForm", 0);
  return L0.result;
}, {"params": ["Sender", "Action"], "kind": "procedure", "ptypes": ["TObject", "TCloseAction"]});
  return U;
}
