// Generated from UntConvertionProgress.pas by pas2js — do not edit by hand; regenerate instead.
/* eslint-disable */
// @ts-nocheck

export default function define($) {
  const U = $.unit("UntConvertionProgress", ["Windows", "Messages", "SysUtils", "Classes", "Graphics", "Controls", "Forms", "Dialogs", "StdCtrls", "ExtCtrls", "ComCtrls"]);
  const C = [U];
  U.defClass("TFrmProgress", "TForm", {"groupbox1": {"name": "GroupBox1", "type": "TGroupBox"}, "label2": {"name": "Label2", "type": "TLabel"}, "btndetails": {"name": "BtnDetails", "type": "TButton"}, "progressbar": {"name": "ProgressBar", "type": "TProgressBar"}, "notememo": {"name": "NoteMemo", "type": "TMemo"}, "lblresult": {"name": "LblResult", "type": "TLabel"}, "currentcontractlabel": {"name": "CurrentContractLabel", "type": "TStaticText"}}, {});
  U.init(async () => {
    U.var_("FrmProgress", null, "TFrmProgress");
  });
  U.method("TFrmProgress", "BtnDetailsClick", async function BtnDetailsClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mset((await $.v(C, "NoteMemo")), "Visible", $.not((await $.mv((await $.v(C, "NoteMemo")), "Visible"))));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  return U;
}
