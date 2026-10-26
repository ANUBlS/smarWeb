// Generated from UnitRepTurn.pas by pas2js — do not edit by hand; regenerate instead.
/* eslint-disable */
// @ts-nocheck

export default function define($) {
  const U = $.unit("UnitRepTurn", ["Windows", "SysUtils", "Messages", "Classes", "Graphics", "Controls", "StdCtrls", "ExtCtrls", "Forms", "Quickrpt", "QRCtrls", "UnitDateExch", "sboapiDataModuleImpl", "SBTranslateProc"]);
  const C = [U];
  U.defClass("TQRepTurn", "TQuickRep", {"qrband1": {"name": "QRBand1", "type": "TQRBand"}, "qrdbtext1": {"name": "QRDBText1", "type": "TQRDBText"}, "qrdbtext2": {"name": "QRDBText2", "type": "TQRDBText"}, "qrdbtext6": {"name": "QRDBText6", "type": "TQRDBText"}, "qrdbtext3": {"name": "QRDBText3", "type": "TQRDBText"}, "qrdbtext7": {"name": "QRDBText7", "type": "TQRDBText"}, "qrdbtext4": {"name": "QRDBText4", "type": "TQRDBText"}, "qrdbtext5": {"name": "QRDBText5", "type": "TQRDBText"}, "qrband2": {"name": "QRBand2", "type": "TQRBand"}, "qrlabel1": {"name": "QRLabel1", "type": "TQRLabel"}, "qrlabel2": {"name": "QRLabel2", "type": "TQRLabel"}, "qrlabel3": {"name": "QRLabel3", "type": "TQRLabel"}, "qrlabel4": {"name": "QRLabel4", "type": "TQRLabel"}, "qrlabel5": {"name": "QRLabel5", "type": "TQRLabel"}, "qrlabel6": {"name": "QRLabel6", "type": "TQRLabel"}, "qrlabel7": {"name": "QRLabel7", "type": "TQRLabel"}, "qrlabel8": {"name": "QRLabel8", "type": "TQRLabel"}, "qrdbtext8": {"name": "QRDBText8", "type": "TQRDBText"}}, {});
  U.init(async () => {
    U.var_("QRepTurn", null, "TQRepTurn");
  });
  U.method("TQRepTurn", "QuickRepBeforePrint", async function QuickRepBeforePrint(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "printreport": $.asRef(p1), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.stmt((await $.mcall((await $.v(C, "SBTranslateProc")), "TranslateAllCompQuickRep", [Self, (await $.mv((await $.v(C, "sboapiDataModule")), "OrPack_SL"))])));
  return L0.result;
}, {"params": ["Sender", "PrintReport"], "kind": "procedure", "ptypes": ["TCustomQuickRep", "Boolean"]});
  return U;
}
