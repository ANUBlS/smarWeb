// Generated from UnitReestrEnd.pas by pas2js — do not edit by hand; regenerate instead.
/* eslint-disable */
// @ts-nocheck

export default function define($) {
  const U = $.unit("UnitReestrEnd", ["Windows", "Messages", "SysUtils", "Variants", "Classes", "Graphics", "Controls", "Forms", "Dialogs", "QRCtrls", "QuickRpt", "ExtCtrls", "UnitDateExch", "sboapiDataModuleImpl", "SBTranslateProc"]);
  const C = [U];
  U.defClass("TFormReestrEnd", "TForm", {"quickrep1": {"name": "QuickRep1", "type": "TQuickRep"}, "titleband1": {"name": "TitleBand1", "type": "TQRBand"}, "detailband1": {"name": "DetailBand1", "type": "TQRBand"}, "qrlabel1": {"name": "QRLabel1", "type": "TQRLabel"}, "qrexpr1": {"name": "QRExpr1", "type": "TQRExpr"}, "qrdbtext1": {"name": "QRDBText1", "type": "TQRDBText"}, "qrshape1": {"name": "QRShape1", "type": "TQRShape"}, "qrshape2": {"name": "QRShape2", "type": "TQRShape"}, "qrshape3": {"name": "QRShape3", "type": "TQRShape"}, "qrshape4": {"name": "QRShape4", "type": "TQRShape"}, "qrexpr2": {"name": "QRExpr2", "type": "TQRExpr"}}, {});
  U.init(async () => {
    U.var_("FormReestrEnd", null, "TFormReestrEnd");
  });
  U.method("TFormReestrEnd", "QuickRep1BeforePrint", async function QuickRep1BeforePrint(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "printreport": $.asRef(p1), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.stmt((await $.mcall((await $.v(C, "SBTranslateProc")), "TranslateAllCompQuickRep", [(await $.v(C, "QuickRep1")), (await $.mv((await $.v(C, "sboapiDataModule")), "OrPack_SL"))])));
  return L0.result;
}, {"params": ["Sender", "PrintReport"], "kind": "procedure", "ptypes": ["TCustomQuickRep", "Boolean"]});
  return U;
}
