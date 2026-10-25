// Generated from MainReportUnit.pas by pas2js — do not edit by hand; regenerate instead.
/* eslint-disable */
// @ts-nocheck

export default function define($) {
  const U = $.unit("MainReportUnit", ["Windows", "SysUtils", "Messages", "Classes", "Graphics", "Controls", "StdCtrls", "ExtCtrls", "Forms", "Quickrpt", "QRCtrls", "QRExport", "ExpertDataModule", "SBTranslateProc", "sboapiDataModuleImpl"]);
  const C = [U];
  U.defClass("TMainReport", "TQuickRep", {"qrband4": {"name": "QRBand4", "type": "TQRBand"}, "qrlabel8": {"name": "QRLabel8", "type": "TQRLabel"}, "qrgroupoperation": {"name": "QRGroupOperation", "type": "TQRGroup"}, "qrdbtext1": {"name": "QRDBText1", "type": "TQRDBText"}, "qrband1": {"name": "QRBand1", "type": "TQRBand"}, "qrgroupbalance": {"name": "QRGroupBalance", "type": "TQRGroup"}, "qrband2": {"name": "QRBand2", "type": "TQRBand"}, "qrband3": {"name": "QRBand3", "type": "TQRBand"}, "qrdbtext2": {"name": "QRDBText2", "type": "TQRDBText"}, "qrexpr1": {"name": "QRExpr1", "type": "TQRExpr"}, "qrdbname": {"name": "QRDBName", "type": "TQRDBText"}, "qrdbcurrencyname": {"name": "QRDBCurrencyName", "type": "TQRDBText"}, "qrexpr2": {"name": "QRExpr2", "type": "TQRExpr"}, "qrdbtext6": {"name": "QRDBText6", "type": "TQRDBText"}, "qrlabel7": {"name": "QRLabel7", "type": "TQRLabel"}, "qrlabel6": {"name": "QRLabel6", "type": "TQRLabel"}, "qrexpr4": {"name": "QRExpr4", "type": "TQRExpr"}, "qrexpr6": {"name": "QRExpr6", "type": "TQRExpr"}, "qrlabeldate": {"name": "QRLabelDate", "type": "TQRLabel"}, "qrexpr3": {"name": "QRExpr3", "type": "TQRExpr"}, "qrexprsumostat": {"name": "QRExprSumOstat", "type": "TQRExpr"}, "qrexprtotal": {"name": "QRExprTotal", "type": "TQRExpr"}, "qrtextfilter1": {"name": "QRTextFilter1", "type": "TQRTextFilter"}}, {});
  U.init(async () => {
    U.var_("MainReport", null, "TMainReport");
  });
  U.method("TMainReport", "QRGroupBalanceAfterPrint", async function QRGroupBalanceAfterPrint(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "bandprinted": $.copyArg(p1), result: undefined};
  await $.fixArgs(L0, ["sender", "bandprinted"]);
  await $.mcall((await $.v(C, "QRExpr1")), "Reset", []);
  return L0.result;
}, {"params": ["Sender", "BandPrinted"], "kind": "procedure", "ptypes": ["TQRCustomBand", "Boolean"]});
  U.method("TMainReport", "QuickRepBeforePrint", async function QuickRepBeforePrint(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "printreport": $.asRef(p1), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.stmt((await $.mcall((await $.v(C, "SBTranslateProc")), "TranslateAllCompQuickRep", [Self, (await $.mv((await $.v(C, "sboapiDataModule")), "OrPack_SL"))])));
  return L0.result;
}, {"params": ["Sender", "PrintReport"], "kind": "procedure", "ptypes": ["TCustomQuickRep", "Boolean"]});
  return U;
}
