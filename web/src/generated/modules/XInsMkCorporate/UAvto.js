// Generated from UAvto.pas by pas2js — do not edit by hand; regenerate instead.
/* eslint-disable */
// @ts-nocheck

export default function define($) {
  const U = $.unit("UAvto", ["Windows", "Messages", "SysUtils", "Classes", "Graphics", "Controls", "Forms", "Dialogs", "StdCtrls", "Grids", "DBGrids", "ExtCtrls", "DBCtrls", "DModuleInsKorporativ", "UInsKorporativKasco"]);
  const C = [U];
  U.defClass("TfrmAvto", "TForm", {"groupbox1": {"name": "GroupBox1", "type": "TGroupBox"}, "dbgrid1": {"name": "DBGrid1", "type": "TDBGrid"}, "dbnavigator1": {"name": "DBNavigator1", "type": "TDBNavigator"}}, {});
  U.init(async () => {
    U.var_("frmAvto", null, "TfrmAvto");
  });
  U.method("TfrmAvto", "FormActivate", async function FormActivate(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mcall((await $.mv((await $.v(C, "DModuleKorporativ")), "ODSMotorkasko")), "Close", []);
  await $.stmt((await $.mcall((await $.mv((await $.v(C, "DModuleKorporativ")), "ODSMotorkasko")), "SetVariable", ["cid", (await $.mv((await $.mv((await $.v(C, "DModuleKorporativ")), "ODSContractsID")), "value"))])));
  await $.mcall((await $.mv((await $.v(C, "DModuleKorporativ")), "ODSMotorkasko")), "Open", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TfrmAvto", "FormDestroy", async function FormDestroy(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "s": 0, "i": 0};
  await $.fixArgs(L0, ["sender"]);
  L0["s"] = 0;
  {
    const $t1 = (await $.mv((await $.v(C, "DModuleKorporativ")), "ODSMotorkasko"));
    await $.stmt($.wcall([$t1], "Close", [], C));
    await $.stmt((await $.wcall([$t1], "SetVariable", ["cid", (await $.mv((await $.mv((await $.wv([$t1], "DModuleKorporativ", C, false)), "ODSContractsID")), "value"))], C)));
    await $.stmt($.wcall([$t1], "Open", [], C));
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  return U;
}
