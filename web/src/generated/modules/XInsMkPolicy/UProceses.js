// Generated from UProceses.pas by pas2js — do not edit by hand; regenerate instead.
/* eslint-disable */
// @ts-nocheck

export default function define($) {
  const U = $.unit("UProceses", ["Windows", "Messages", "SysUtils", "Classes", "Graphics", "Controls", "Forms", "Dialogs", "StdCtrls", "Buttons", "Oracle", "UMKPolicyImpl"]);
  const C = [U];
  U.defClass("TfmProceses", "TForm", {"bitbtn1": {"name": "BitBtn1", "type": "TBitBtn"}, "groupbox1": {"name": "GroupBox1", "type": "TGroupBox"}, "bitbtn2": {"name": "BitBtn2", "type": "TBitBtn"}, "cbpolnum": {"name": "cbPolNum", "type": "TCheckBox"}, "cbaccounts": {"name": "cbAccounts", "type": "TCheckBox"}, "cbtransactions": {"name": "cbTransactions", "type": "TCheckBox"}}, {});
  U.init(async () => {
    U.var_("fmProceses", null, "TfmProceses");
  });
  U.method("TfmProceses", "BitBtn1Click", async function BitBtn1Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t1 = (await $.v(C, "fmMKPolicy"));
    const $t2 = (await $.wv([$t1], "ODSReport", C, false));
    const $t3 = (await $.wv([$t1, $t2], "OPMKKASCO", C, false));
    await $.stmt((await $.mcall((await $.wv([$t1, $t2, $t3], "ODSReport", C, false)), "SetVariable", ["CID", (await $.wv([$t1, $t2, $t3], "CID", C, false))])));
    await $.stmt($.wcall([$t1, $t2, $t3], "Open", [], C));
    try {
      await $.stmt((await $.wcall([$t1, $t2, $t3], "CallBooleanFunction", ["buildpolice", [(await $.wv([$t1, $t2, $t3], "CID", C, false)), (await $.mv((await $.wv([$t1, $t2, $t3], "cbPolNum", C, false)), "Checked")), (await $.mv((await $.wv([$t1, $t2, $t3], "cbAccounts", C, false)), "Checked")), (await $.mv((await $.wv([$t1, $t2, $t3], "cbTransactions", C, false)), "Checked"))]], C)));
    } catch ($t4) {
      $.rethrowControl($t4);
      if ($.excIs($t4, "EOracleError")) {
        L0["e"] = $.exc($t4);
        await $.stmt((await $.wcall([$t1, $t2, $t3], "ShowMessage", [(await $.mv((await $.wv([$t1, $t2, $t3], "E", { get: async () => L0["e"], set: async (v) => { L0["e"] = v; }, local: true }, false)), "Message"))], C)));
        $.abort();
      }
      else { throw $t4; }
    }
    await $.stmt($.wcall([$t1, $t2, $t3], "Close", [], C));
  }
  await $.set(C, "ModalResult", (await $.v(C, "mrOk")));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  return U;
}
