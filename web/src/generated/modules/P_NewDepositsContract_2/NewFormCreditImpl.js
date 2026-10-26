// Generated from NewFormCreditImpl.pas by pas2js — do not edit by hand; regenerate instead.
/* eslint-disable */
// @ts-nocheck

export default function define($) {
  const U = $.unit("NewFormCreditImpl", ["Windows", "Messages", "SysUtils", "Variants", "Classes", "Graphics", "Controls", "Forms", "Dialogs", "StdCtrls", "Buttons", "XFSCtrls", "Grids", "XDBGrids", "ExtCtrls", "sboapiDataModuleImpl", "NewDepositsContractImpl", "NewFormDepositContractImpl", "NewContractCommonDecls"]);
  const C = [U];
  U.defClass("TFormCredit", "TForm", {"xfpanel1": {"name": "XFPanel1", "type": "TXFPanel"}, "xdbgrid1": {"name": "XDBGrid1", "type": "TXDBGrid"}, "xfpanel2": {"name": "XFPanel2", "type": "TXFPanel"}, "xfbitbtn1": {"name": "XFBitBtn1", "type": "TXFBitBtn"}}, {});
  U.init(async () => {
    U.var_("FormCredit", null, "TFormCredit");
  });
  U.method("TFormCredit", "FormShow", async function FormShow(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t1 = (await $.v(C, "NewDataModDepositsContract"));
    await $.mcall((await $.wv([$t1], "CreditContractno", C, false)), "Close", []);
    await $.stmt((await $.mcall((await $.wv([$t1], "CreditContractno", C, false)), "SetVariable", ["contractid", (await $.mv((await $.wv([$t1], "DepositPorpsSID", C, false)), "AsInteger"))])));
    await $.mcall((await $.wv([$t1], "CreditContractno", C, false)), "Open", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFormCredit", "XFBitBtn1Click", async function XFBitBtn1Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.stmt($.call(C, "Close", []));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  return U;
}
