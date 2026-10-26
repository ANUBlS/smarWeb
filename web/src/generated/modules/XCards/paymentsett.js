// Generated from paymentsett.pas by pas2js — do not edit by hand; regenerate instead.
/* eslint-disable */
// @ts-nocheck

export default function define($) {
  const U = $.unit("paymentsett", ["Windows", "Messages", "SysUtils", "Variants", "Classes", "Graphics", "Controls", "Forms", "Dialogs", "Grids", "DBGrids", "Unit18"]);
  const C = [U];
  U.defClass("TPaymentset", "TForm", {"dbgrid1": {"name": "DBGrid1", "type": "TDBGrid"}}, {});
  U.init(async () => {
    U.var_("Paymentset", null, "TPaymentset");
  });
  U.method("TPaymentset", "FormShow", async function FormShow(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mcall((await $.mv((await $.v(C, "DataMod_CARDS")), "Card_vidop")), "Open", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  return U;
}
