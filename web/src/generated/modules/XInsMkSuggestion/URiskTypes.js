// Generated from URiskTypes.pas by pas2js — do not edit by hand; regenerate instead.
/* eslint-disable */
// @ts-nocheck

export default function define($) {
  const U = $.unit("URiskTypes", ["Windows", "Messages", "SysUtils", "Classes", "Graphics", "Controls", "Forms", "Dialogs", "StdCtrls", "Buttons", "Grids", "DBGrids", "MKSuggestionImpl"]);
  const C = [U];
  U.defClass("TfmRiskTypes", "TForm", {"dbgrid1": {"name": "DBGrid1", "type": "TDBGrid"}, "btadd": {"name": "btAdd", "type": "TBitBtn"}, "btok": {"name": "btOk", "type": "TBitBtn"}}, {});
  U.init(async () => {
    U.var_("fmRiskTypes", null, "TfmRiskTypes");
  });
  U.method("TfmRiskTypes", "btOkClick", async function btOkClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.set(C, "ModalResult", (await $.v(C, "mrOk")));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  return U;
}
