// Generated from TurnOverReport.pas by pas2js — do not edit by hand; regenerate instead.
/* eslint-disable */
// @ts-nocheck

export default function define($) {
  const U = $.unit("TurnOverReport", ["Windows", "SysUtils", "Messages", "Classes", "Graphics", "Controls", "StdCtrls", "ExtCtrls", "Forms", "Quickrpt", "QRCtrls", "ExpertDataModule", "SBTranslateProc", "sboapiDataModuleImpl"]);
  const C = [U];
  U.defClass("TReportTurnOver", "TQuickRep", {"qrbandtitle": {"name": "QRBandTitle", "type": "TQRBand"}, "qrlabel8": {"name": "QRLabel8", "type": "TQRLabel"}, "qrlabeldate": {"name": "QRLabelDate", "type": "TQRLabel"}, "qrgroupoperation": {"name": "QRGroupOperation", "type": "TQRGroup"}, "qrdbtext1": {"name": "QRDBText1", "type": "TQRDBText"}, "qrgroupbalance": {"name": "QRGroupBalance", "type": "TQRGroup"}, "qrbanddetail": {"name": "QRBandDetail", "type": "TQRBand"}, "qrlabel7": {"name": "QRLabel7", "type": "TQRLabel"}, "qrlabel6": {"name": "QRLabel6", "type": "TQRLabel"}, "qrlabel9": {"name": "QRLabel9", "type": "TQRLabel"}, "qrlabel10": {"name": "QRLabel10", "type": "TQRLabel"}, "qrlabel1": {"name": "QRLabel1", "type": "TQRLabel"}, "qrlabel2": {"name": "QRLabel2", "type": "TQRLabel"}, "qrdbtext2": {"name": "QRDBText2", "type": "TQRDBText"}, "qrdbtext3": {"name": "QRDBText3", "type": "TQRDBText"}, "qrdbtext4": {"name": "QRDBText4", "type": "TQRDBText"}, "qrdbtext5": {"name": "QRDBText5", "type": "TQRDBText"}, "qrdbtext6": {"name": "QRDBText6", "type": "TQRDBText"}, "qrdbtext7": {"name": "QRDBText7", "type": "TQRDBText"}, "qrbandsumbalance": {"name": "QRBandSumBalance", "type": "TQRBand"}, "qrbandsumoperation": {"name": "QRBandSumOperation", "type": "TQRBand"}, "qrexpr1": {"name": "QRExpr1", "type": "TQRExpr"}, "qrexpr2": {"name": "QRExpr2", "type": "TQRExpr"}}, {});
  U.init(async () => {
    U.var_("ReportTurnOver", null, "TReportTurnOver");
  });
  U.method("TReportTurnOver", "QuickRepBeforePrint", async function QuickRepBeforePrint(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "printreport": $.asRef(p1), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.stmt((await $.mcall((await $.v(C, "SBTranslateProc")), "TranslateAllCompQuickRep", [Self, (await $.mv((await $.v(C, "sboapiDataModule")), "OrPack_SL"))])));
  return L0.result;
}, {"params": ["Sender", "PrintReport"], "kind": "procedure", "ptypes": ["TCustomQuickRep", "Boolean"]});
  return U;
}
