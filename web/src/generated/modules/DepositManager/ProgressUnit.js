// Generated from ProgressUnit.pas by pas2js — do not edit by hand; regenerate instead.
/* eslint-disable */
// @ts-nocheck

export default function define($) {
  const U = $.unit("ProgressUnit", ["Windows", "Messages", "SysUtils", "Classes", "Graphics", "Controls", "Forms", "Dialogs", "StdCtrls", "ComCtrls", "ExtCtrls"]);
  const C = [U];
  U.defClass("TProgressForm", "TForm", {"panel1": {"name": "Panel1", "type": "TPanel"}, "statictext1": {"name": "StaticText1", "type": "TStaticText"}, "currentdeposit": {"name": "CurrentDeposit", "type": "TStaticText"}, "progressbar": {"name": "ProgressBar", "type": "TProgressBar"}, "btndetails": {"name": "BtnDetails", "type": "TButton"}, "btnclose": {"name": "BtnClose", "type": "TButton"}, "detailsmemo": {"name": "DetailsMemo", "type": "TMemo"}, "groupbox1": {"name": "GroupBox1", "type": "TGroupBox"}, "lblresult": {"name": "LblResult", "type": "TLabel"}, "stcapitalizationscount": {"name": "STCapitalizationsCount", "type": "TStaticText"}, "stwithdrawscount": {"name": "STWithdrawsCount", "type": "TStaticText"}, "stcontractscount": {"name": "STContractsCount", "type": "TStaticText"}}, {});
  U.init(async () => {
    U.var_("ProgressForm", null, "TProgressForm");
  });
  U.method("TProgressForm", "BtnDetailsClick", async function BtnDetailsClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mset((await $.v(C, "DetailsMemo")), "Visible", $.not((await $.mv((await $.v(C, "DetailsMemo")), "Visible"))));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TProgressForm", "BtnCloseClick", async function BtnCloseClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.stmt($.call(C, "Close", []));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TProgressForm", "FormShow", async function FormShow(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mset((await $.v(C, "LblResult")), "Caption", "");
  await $.mset((await $.v(C, "STContractsCount")), "Caption", "");
  await $.mset((await $.v(C, "STCapitalizationsCount")), "Caption", "");
  await $.mset((await $.v(C, "STWithdrawsCount")), "Caption", "");
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  return U;
}
