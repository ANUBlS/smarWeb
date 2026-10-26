// Generated from frmCalcPerProgressImpl.pas by pas2js — do not edit by hand; regenerate instead.
/* eslint-disable */
// @ts-nocheck

export default function define($) {
  const U = $.unit("frmCalcPerProgressImpl", ["Windows", "Messages", "SysUtils", "Classes", "Graphics", "Controls", "Forms", "Dialogs", "StdCtrls", "ComCtrls", "ExtCtrls", "SBTranslateProc", "sboapiDataModuleimpl"]);
  const C = [U];
  U.defClass("TfrmCalcPerProgress", "TForm", {"panel1": {"name": "Panel1", "type": "TPanel"}, "statictext1": {"name": "StaticText1", "type": "TStaticText"}, "currentdeposit": {"name": "CurrentDeposit", "type": "TStaticText"}, "progressbar": {"name": "ProgressBar", "type": "TProgressBar"}, "btndetails": {"name": "BtnDetails", "type": "TButton"}, "btnclose": {"name": "BtnClose", "type": "TButton"}, "groupbox1": {"name": "GroupBox1", "type": "TGroupBox"}, "lblresult": {"name": "LblResult", "type": "TLabel"}, "stcapitalizationscount": {"name": "STCapitalizationsCount", "type": "TStaticText"}, "stwithdrawscount": {"name": "STWithdrawsCount", "type": "TStaticText"}, "stcontractscount": {"name": "STContractsCount", "type": "TStaticText"}, "detailsmemo": {"name": "DetailsMemo", "type": "TMemo"}}, {});
  U.init(async () => {
    U.var_("frmCalcPerProgress", null, "TfrmCalcPerProgress");
  });
  U.method("TfrmCalcPerProgress", "FormCreate", async function FormCreate(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.stmt((await $.mcall((await $.v(C, "SBTranslateProc")), "TranslateAllCompForms", [Self, (await $.mv((await $.v(C, "sboapiDataModule")), "OrPack_SL"))])));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TfrmCalcPerProgress", "FormKeyPress", async function FormKeyPress(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "key": $.asRef(p1), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.eq((await $.call(C, "Ord", [(await L0["key"].get())])), (await $.v(C, "VK_ESCAPE"))))) {
    await $.stmt($.call(C, "Close", []));
  }
  return L0.result;
}, {"params": ["Sender", "Key"], "kind": "procedure", "ptypes": ["TObject", "Char"]});
  U.method("TfrmCalcPerProgress", "BtnDetailsClick", async function BtnDetailsClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mset((await $.v(C, "DetailsMemo")), "Visible", $.not((await $.mv((await $.v(C, "DetailsMemo")), "Visible"))));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TfrmCalcPerProgress", "BtnCloseClick", async function BtnCloseClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.stmt($.call(C, "Close", []));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  return U;
}
