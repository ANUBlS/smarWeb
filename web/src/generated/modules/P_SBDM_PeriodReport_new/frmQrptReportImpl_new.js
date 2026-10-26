// Generated from frmQrptReportImpl_new.pas by pas2js — do not edit by hand; regenerate instead.
/* eslint-disable */
// @ts-nocheck

export default function define($) {
  const U = $.unit("frmQrptReportImpl_new", ["Windows", "Messages", "SysUtils", "Classes", "Graphics", "Controls", "Forms", "Dialogs", "ExtCtrls", "QuickRpt", "Qrctrls", "dmPeriodReportImpl_new", "SBTranslateProc", "sboapiDataModuleimpl"]);
  const C = [U];
  U.defClass("TfrmQrptReport_new", "TForm", {"qrepperiod": {"name": "QRepPeriod", "type": "TQuickRep"}, "detailband1": {"name": "DetailBand1", "type": "TQRBand"}, "qrdbtext1": {"name": "QRDBText1", "type": "TQRDBText"}, "qrdbtext2": {"name": "QRDBText2", "type": "TQRDBText"}, "qrdbtext3": {"name": "QRDBText3", "type": "TQRDBText"}, "qrdbtext4": {"name": "QRDBText4", "type": "TQRDBText"}, "qrdbtext6": {"name": "QRDBText6", "type": "TQRDBText"}, "qrdbtext7": {"name": "QRDBText7", "type": "TQRDBText"}, "qrdbtext9": {"name": "QRDBText9", "type": "TQRDBText"}, "qrdbtext11": {"name": "QRDBText11", "type": "TQRDBText"}, "qrdbtext13": {"name": "QRDBText13", "type": "TQRDBText"}, "qrdbtext15": {"name": "QRDBText15", "type": "TQRDBText"}, "qrdbtext19": {"name": "QRDBText19", "type": "TQRDBText"}, "qrdbtext17": {"name": "QRDBText17", "type": "TQRDBText"}, "titleband1": {"name": "TitleBand1", "type": "TQRBand"}, "qrlabel1": {"name": "QRLabel1", "type": "TQRLabel"}, "qrlabel2": {"name": "QRLabel2", "type": "TQRLabel"}, "qrlabel3": {"name": "QRLabel3", "type": "TQRLabel"}, "qrlabel4": {"name": "QRLabel4", "type": "TQRLabel"}, "qrlabel5": {"name": "QRLabel5", "type": "TQRLabel"}, "qrlabel7": {"name": "QRLabel7", "type": "TQRLabel"}, "qrlabel8": {"name": "QRLabel8", "type": "TQRLabel"}, "qrlabel10": {"name": "QRLabel10", "type": "TQRLabel"}, "qrlabel12": {"name": "QRLabel12", "type": "TQRLabel"}, "qrlabel14": {"name": "QRLabel14", "type": "TQRLabel"}, "qrlabel15": {"name": "QRLabel15", "type": "TQRLabel"}, "qrlabel18": {"name": "QRLabel18", "type": "TQRLabel"}, "qrlabel20": {"name": "QRLabel20", "type": "TQRLabel"}}, {});
  U.init(async () => {
    U.var_("frmQrptReport_new", null, "TfrmQrptReport_new");
  });
  U.method("TfrmQrptReport_new", "QRepPeriodBeforePrint", async function QRepPeriodBeforePrint(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "printreport": $.asRef(p1), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.stmt((await $.mcall((await $.v(C, "SBTranslateProc")), "TranslateAllCompQuickRep", [(await $.v(C, "QRepPeriod")), (await $.mv((await $.v(C, "sboapiDataModule")), "OrPack_SL"))])));
  return L0.result;
}, {"params": ["Sender", "PrintReport"], "kind": "procedure", "ptypes": ["TCustomQuickRep", "Boolean"]});
  return U;
}
