// Generated from UnitTraffics.pas by pas2js — do not edit by hand; regenerate instead.
/* eslint-disable */
// @ts-nocheck

export default function define($) {
  const U = $.unit("UnitTraffics", ["Windows", "Messages", "SysUtils", "Classes", "Graphics", "Controls", "Forms", "Dialogs", "ExtCtrls", "QuickRpt", "Qrctrls", "UnitData", "sboapiDataModuleImpl", "SBTranslateProc"]);
  const C = [U];
  U.defClass("TFormTraffics", "TForm", {"quickrep": {"name": "QuickRep", "type": "TQuickRep"}, "qrband1": {"name": "QRBand1", "type": "TQRBand"}, "qrlabel1": {"name": "QRLabel1", "type": "TQRLabel"}, "qrdbtextwares_name": {"name": "QRDBTextwares_name", "type": "TQRDBText"}, "qrlabel2": {"name": "QRLabel2", "type": "TQRLabel"}, "qrdbtextfirst_price": {"name": "QRDBTextFIRST_PRICE", "type": "TQRDBText"}, "qrlabel3": {"name": "QRLabel3", "type": "TQRLabel"}, "qrlabel4": {"name": "QRLabel4", "type": "TQRLabel"}, "qrlabel5": {"name": "QRLabel5", "type": "TQRLabel"}, "qrlabel6": {"name": "QRLabel6", "type": "TQRLabel"}, "qrband2": {"name": "QRBand2", "type": "TQRBand"}, "qrdbtextamortdate": {"name": "QRDBTextAmortDate", "type": "TQRDBText"}, "qrdbtextremainder": {"name": "QRDBTextRemainder", "type": "TQRDBText"}, "qrdbtextall_amort": {"name": "QRDBTextall_amort", "type": "TQRDBText"}, "qrdbtextamort": {"name": "QRDBTextamort", "type": "TQRDBText"}, "qrlabel7": {"name": "QRLabel7", "type": "TQRLabel"}, "qrdbtext1": {"name": "QRDBText1", "type": "TQRDBText"}, "qrdbtext2": {"name": "QRDBText2", "type": "TQRDBText"}, "qrlabel8": {"name": "QRLabel8", "type": "TQRLabel"}}, {});
  U.init(async () => {
    U.var_("FormTraffics", null, "TFormTraffics");
  });
  U.method("TFormTraffics", "QuickRepBeforePrint", async function QuickRepBeforePrint(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "printreport": $.asRef(p1), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.stmt((await $.mcall((await $.v(C, "SBTranslateProc")), "TranslateAllCompQuickRep", [(await $.v(C, "QuickRep")), (await $.mv((await $.v(C, "sboapiDataModule")), "OrPack_SL"))])));
  return L0.result;
}, {"params": ["Sender", "PrintReport"], "kind": "procedure", "ptypes": ["TCustomQuickRep", "Boolean"]});
  return U;
}
