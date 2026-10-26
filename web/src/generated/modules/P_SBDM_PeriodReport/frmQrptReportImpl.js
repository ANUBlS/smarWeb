// Generated from frmQrptReportImpl.pas by pas2js — do not edit by hand; regenerate instead.
/* eslint-disable */
// @ts-nocheck

export default function define($) {
  const U = $.unit("frmQrptReportImpl", ["Windows", "Messages", "SysUtils", "Classes", "Graphics", "Controls", "Forms", "Dialogs", "ExtCtrls", "QuickRpt", "Qrctrls", "dmPeriodReportImpl", "SBTranslateProc", "sboapiDataModuleimpl"]);
  const C = [U];
  U.defClass("TfrmQrptReport", "TForm", {"qrepperiod": {"name": "QRepPeriod", "type": "TQuickRep"}, "detailband1": {"name": "DetailBand1", "type": "TQRBand"}, "titleband1": {"name": "TitleBand1", "type": "TQRBand"}, "qrlabel1": {"name": "QRLabel1", "type": "TQRLabel"}, "qrlabel2": {"name": "QRLabel2", "type": "TQRLabel"}, "qrdbtext1": {"name": "QRDBText1", "type": "TQRDBText"}, "qrlabel3": {"name": "QRLabel3", "type": "TQRLabel"}, "qrdbtext2": {"name": "QRDBText2", "type": "TQRDBText"}, "qrlabel4": {"name": "QRLabel4", "type": "TQRLabel"}, "qrdbtext3": {"name": "QRDBText3", "type": "TQRDBText"}, "qrlabel5": {"name": "QRLabel5", "type": "TQRLabel"}, "qrlabel7": {"name": "QRLabel7", "type": "TQRLabel"}, "qrlabel8": {"name": "QRLabel8", "type": "TQRLabel"}, "qrdbtext4": {"name": "QRDBText4", "type": "TQRDBText"}, "qrdbtext6": {"name": "QRDBText6", "type": "TQRDBText"}, "qrdbtext7": {"name": "QRDBText7", "type": "TQRDBText"}, "qrlabel10": {"name": "QRLabel10", "type": "TQRLabel"}, "qrdbtext9": {"name": "QRDBText9", "type": "TQRDBText"}, "qrdbtext11": {"name": "QRDBText11", "type": "TQRDBText"}, "qrdbtext13": {"name": "QRDBText13", "type": "TQRDBText"}, "qrlabel12": {"name": "QRLabel12", "type": "TQRLabel"}, "qrlabel14": {"name": "QRLabel14", "type": "TQRLabel"}, "qrlabel15": {"name": "QRLabel15", "type": "TQRLabel"}, "qrlabel18": {"name": "QRLabel18", "type": "TQRLabel"}, "qrdbtext15": {"name": "QRDBText15", "type": "TQRDBText"}, "qrdbtext19": {"name": "QRDBText19", "type": "TQRDBText"}, "qrlabel20": {"name": "QRLabel20", "type": "TQRLabel"}, "qrdbtext17": {"name": "QRDBText17", "type": "TQRDBText"}}, {});
  U.init(async () => {
    U.var_("frmQrptReport", null, "TfrmQrptReport");
  });
  U.method("TfrmQrptReport", "QRepPeriodBeforePrint", async function QRepPeriodBeforePrint(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "printreport": $.asRef(p1), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.stmt((await $.mcall((await $.v(C, "SBTranslateProc")), "TranslateAllCompQuickRep", [(await $.v(C, "QRepPeriod")), (await $.mv((await $.v(C, "sboapiDataModule")), "OrPack_SL"))])));
  return L0.result;
}, {"params": ["Sender", "PrintReport"], "kind": "procedure", "ptypes": ["TCustomQuickRep", "Boolean"]});
  return U;
}
