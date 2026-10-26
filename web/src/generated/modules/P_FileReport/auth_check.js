// Generated from auth_check.pas by pas2js — do not edit by hand; regenerate instead.
/* eslint-disable */
// @ts-nocheck

export default function define($) {
  const U = $.unit("auth_check", ["Windows", "Messages", "SysUtils", "Variants", "Classes", "Graphics", "Controls", "Forms", "Dialogs", "Grids", "DBGrids", "StdCtrls", "ExtCtrls", "Data_Unit", "datnamount"]);
  const C = [U];
  U.defClass("TAuth_check_frm", "TForm", {"panel1": {"name": "Panel1", "type": "TPanel"}, "button1": {"name": "Button1", "type": "TButton"}, "gridbeneficiary": {"name": "GridBeneficiary", "type": "TDBGrid"}, "edit1": {"name": "Edit1", "type": "TEdit"}}, {});
  U.init(async () => {
    U.var_("Auth_check_frm", null, "TAuth_check_frm");
  });
  U.method("TAuth_check_frm", "Button1Click", async function Button1Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.stmt((await $.mcall((await $.mv((await $.v(C, "DataMod")), "Ins")), "CallProcedure", ["xs_Batchs_VerifStatus2", [(await $.mv((await $.v(C, "edit1")), "Text"))]])));
  await $.stmt((await $.mcall((await $.mv((await $.v(C, "DataMod")), "Ins")), "CallProcedure", ["xs_beneficiary_VerifStatus2", [(await $.mv((await $.v(C, "edit1")), "Text"))]])));
  await $.stmt($.call(C, "close", []));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  return U;
}
