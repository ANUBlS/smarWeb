// Generated from CO_PhotoLogo.pas by pas2js — do not edit by hand; regenerate instead.
/* eslint-disable */
// @ts-nocheck

export default function define($) {
  const U = $.unit("CO_PhotoLogo", ["Windows", "Messages", "SysUtils", "Variants", "Classes", "Graphics", "Controls", "Forms", "Dialogs", "StdCtrls", "Buttons", "ExtCtrls", "SBTranslateProc", "sboapiDataModuleImpl"]);
  const C = [U];
  U.defClass("TFrmLoqo", "TForm", {"panel4": {"name": "Panel4", "type": "TPanel"}, "image1": {"name": "Image1", "type": "TImage"}, "bitbtn4": {"name": "BitBtn4", "type": "TBitBtn"}, "bitbtn1": {"name": "BitBtn1", "type": "TBitBtn"}, "panel3": {"name": "Panel3", "type": "TPanel"}, "image2": {"name": "Image2", "type": "TImage"}, "bitbtn5": {"name": "BitBtn5", "type": "TBitBtn"}, "bitbtn2": {"name": "BitBtn2", "type": "TBitBtn"}, "panel6": {"name": "Panel6", "type": "TPanel"}, "image3": {"name": "Image3", "type": "TImage"}, "bitbtn6": {"name": "BitBtn6", "type": "TBitBtn"}, "bitbtn3": {"name": "BitBtn3", "type": "TBitBtn"}}, {});
  U.init(async () => {
    U.var_("FrmLoqo", null, "TFrmLoqo");
  });
  U.method("TFrmLoqo", "FormCreate", async function FormCreate(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.stmt((await $.mcall((await $.v(C, "SBTranslateProc")), "TranslateAllCompForms", [Self, (await $.mv((await $.v(C, "sboapiDataModule")), "OrPack_SL"))])));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  return U;
}
