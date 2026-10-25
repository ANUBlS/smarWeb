// Generated from UntRptMainF.pas by pas2js — do not edit by hand; regenerate instead.
/* eslint-disable */
// @ts-nocheck

export default function define($) {
  const U = $.unit("UntRptMainF", ["Windows", "SysUtils", "Messages", "Classes", "Graphics", "Controls", "StdCtrls", "ExtCtrls", "Forms", "Quickrpt", "QRCtrls", "QRExport", "MFDataModule"]);
  const C = [U];
  U.defClass("TRptDepartments", "TQuickRep", {"qrband1": {"name": "QRBand1", "type": "TQRBand"}, "qrlabel1": {"name": "QRLabel1", "type": "TQRLabel"}, "qrband3": {"name": "QRBand3", "type": "TQRBand"}, "qrgroup2": {"name": "QRGroup2", "type": "TQRGroup"}, "qrexpr1": {"name": "QRExpr1", "type": "TQRExpr"}, "qrdbtext1": {"name": "QRDBText1", "type": "TQRDBText"}, "qrdbtext2": {"name": "QRDBText2", "type": "TQRDBText"}, "qrdbtext3": {"name": "QRDBText3", "type": "TQRDBText"}, "qrdbtext4": {"name": "QRDBText4", "type": "TQRDBText"}, "qrdbtext5": {"name": "QRDBText5", "type": "TQRDBText"}, "qrmainname": {"name": "QRMainName", "type": "TQRLabel"}, "qrlabel2": {"name": "QRLabel2", "type": "TQRLabel"}, "qrlabel3": {"name": "QRLabel3", "type": "TQRLabel"}, "qrlabel4": {"name": "QRLabel4", "type": "TQRLabel"}, "qrlabel5": {"name": "QRLabel5", "type": "TQRLabel"}, "qrlabel6": {"name": "QRLabel6", "type": "TQRLabel"}, "qrcount": {"name": "QRCount", "type": "TQRExpr"}, "qrband2": {"name": "QRBand2", "type": "TQRBand"}, "qrexpr3": {"name": "QRExpr3", "type": "TQRExpr"}, "qrexpr4": {"name": "QRExpr4", "type": "TQRExpr"}, "qrexpr5": {"name": "QRExpr5", "type": "TQRExpr"}, "qrlabel7": {"name": "QRLabel7", "type": "TQRLabel"}, "qrband4": {"name": "QRBand4", "type": "TQRBand"}, "qrexpr2": {"name": "QRExpr2", "type": "TQRExpr"}, "qrexpr6": {"name": "QRExpr6", "type": "TQRExpr"}, "qrexpr7": {"name": "QRExpr7", "type": "TQRExpr"}, "qrlabel8": {"name": "QRLabel8", "type": "TQRLabel"}, "qrlabel9": {"name": "QRLabel9", "type": "TQRLabel"}, "qrexpr8": {"name": "QRExpr8", "type": "TQRExpr"}, "qrlabel10": {"name": "QRLabel10", "type": "TQRLabel"}, "qrshape1": {"name": "QRShape1", "type": "TQRShape"}, "qrdbtext6": {"name": "QRDBText6", "type": "TQRDBText"}, "qrdateformat": {"name": "QRDateFormat", "type": "TQRLabel"}, "qrtextfilter1": {"name": "QRTextFilter1", "type": "TQRTextFilter"}, "qrlabel11": {"name": "QRLabel11", "type": "TQRLabel"}, "qrdbtext7": {"name": "QRDBText7", "type": "TQRDBText"}, "qrexpr9": {"name": "QRExpr9", "type": "TQRExpr"}, "qrexpr10": {"name": "QRExpr10", "type": "TQRExpr"}}, {});
  U.init(async () => {
    U.var_("RptDepartments", null, "TRptDepartments");
  });
  U.method("TRptDepartments", "QRGroup2AfterPrint", async function QRGroup2AfterPrint(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "bandprinted": $.copyArg(p1), result: undefined};
  await $.fixArgs(L0, ["sender", "bandprinted"]);
  await $.mcall((await $.v(C, "QRCount")), "Reset", []);
  return L0.result;
}, {"params": ["Sender", "BandPrinted"], "kind": "procedure", "ptypes": ["TQRCustomBand", "Boolean"]});
  return U;
}
