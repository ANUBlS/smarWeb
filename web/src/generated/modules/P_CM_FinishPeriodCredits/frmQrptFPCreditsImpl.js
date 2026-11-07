// Generated from frmQrptFPCreditsImpl.pas by pas2js — do not edit by hand; regenerate instead.
/* eslint-disable */
// @ts-nocheck

export default function define($) {
  const U = $.unit("frmQrptFPCreditsImpl", ["Windows", "Messages", "SysUtils", "Classes", "Graphics", "Controls", "Forms", "Dialogs", "ExtCtrls", "QuickRpt", "Qrctrls", "dmFinishPeriodCreditsImpl", "SBTranslateProc", "sboapiDataModuleimpl"]);
  const C = [U];
  U.defClass("TfrmQrptFPCredits", "TForm", {"fpcreditsqrp": {"name": "FPCreditsQRp", "type": "TQuickRep"}, "titleband1": {"name": "TitleBand1", "type": "TQRBand"}, "detailband1": {"name": "DetailBand1", "type": "TQRBand"}, "qrlabel1": {"name": "QRLabel1", "type": "TQRLabel"}, "qrlabel2": {"name": "QRLabel2", "type": "TQRLabel"}, "qrlabel3": {"name": "QRLabel3", "type": "TQRLabel"}, "qrlabel4": {"name": "QRLabel4", "type": "TQRLabel"}, "qrlabel5": {"name": "QRLabel5", "type": "TQRLabel"}, "qrlabel6": {"name": "QRLabel6", "type": "TQRLabel"}, "qrlabel7": {"name": "QRLabel7", "type": "TQRLabel"}, "qrlabel8": {"name": "QRLabel8", "type": "TQRLabel"}, "qrlabel9": {"name": "QRLabel9", "type": "TQRLabel"}, "qrlabel10": {"name": "QRLabel10", "type": "TQRLabel"}, "qrshape11": {"name": "QRShape11", "type": "TQRShape"}, "qrdbtext9": {"name": "QRDBText9", "type": "TQRDBText"}, "qrshape8": {"name": "QRShape8", "type": "TQRShape"}, "qrdbtext8": {"name": "QRDBText8", "type": "TQRDBText"}, "qrshape7": {"name": "QRShape7", "type": "TQRShape"}, "qrdbtext7": {"name": "QRDBText7", "type": "TQRDBText"}, "qrshape6": {"name": "QRShape6", "type": "TQRShape"}, "qrdbtext6": {"name": "QRDBText6", "type": "TQRDBText"}, "qrshape5": {"name": "QRShape5", "type": "TQRShape"}, "qrdbtext5": {"name": "QRDBText5", "type": "TQRDBText"}, "qrshape4": {"name": "QRShape4", "type": "TQRShape"}, "qrdbtext4": {"name": "QRDBText4", "type": "TQRDBText"}, "qrshape3": {"name": "QRShape3", "type": "TQRShape"}, "qrdbtext3": {"name": "QRDBText3", "type": "TQRDBText"}, "qrshape2": {"name": "QRShape2", "type": "TQRShape"}, "qrdbtext2": {"name": "QRDBText2", "type": "TQRDBText"}, "qrshape1": {"name": "QRShape1", "type": "TQRShape"}, "qrdbtext1": {"name": "QRDBText1", "type": "TQRDBText"}}, {});
  U.init(async () => {
    U.var_("frmQrptFPCredits", null, "TfrmQrptFPCredits");
  });
  U.method("TfrmQrptFPCredits", "FPCreditsQRpBeforePrint", async function FPCreditsQRpBeforePrint(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "printreport": $.asRef(p1), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.stmt((await $.mcall((await $.v(C, "SBTranslateProc")), "TranslateAllCompQuickRep", [(await $.v(C, "FPCreditsQRp")), (await $.mv((await $.v(C, "sboapiDataModule")), "OrPack_SL"))])));
  return L0.result;
}, {"params": ["Sender", "PrintReport"], "kind": "procedure", "ptypes": ["TCustomQuickRep", "Boolean"]});
  return U;
}
