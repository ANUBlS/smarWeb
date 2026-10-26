// Generated from USReport.pas by pas2js — do not edit by hand; regenerate instead.
/* eslint-disable */
// @ts-nocheck

export default function define($) {
  const U = $.unit("USReport", ["Windows", "Messages", "SysUtils", "Classes", "Graphics", "Controls", "Forms", "Dialogs", "Qrctrls", "QuickRpt", "ExtCtrls", "DataUnitFullMotor"]);
  const C = [U];
  U.defClass("TFormReportS", "TForm", {"squickrep": {"name": "SQuickRep", "type": "TQuickRep"}, "qrband1": {"name": "QRBand1", "type": "TQRBand"}, "qrlabel1": {"name": "QRLabel1", "type": "TQRLabel"}, "qrsubdetail1": {"name": "QRSubDetail1", "type": "TQRSubDetail"}, "qrlabel2": {"name": "QRLabel2", "type": "TQRLabel"}, "qrlabel3": {"name": "QRLabel3", "type": "TQRLabel"}, "qrdbtext2": {"name": "QRDBText2", "type": "TQRDBText"}, "qrlabel4": {"name": "QRLabel4", "type": "TQRLabel"}, "qrdbtext3": {"name": "QRDBText3", "type": "TQRDBText"}, "qrlabel5": {"name": "QRLabel5", "type": "TQRLabel"}, "qrdbtext4": {"name": "QRDBText4", "type": "TQRDBText"}, "qrlabel6": {"name": "QRLabel6", "type": "TQRLabel"}, "qrdbtext5": {"name": "QRDBText5", "type": "TQRDBText"}, "qrlabel7": {"name": "QRLabel7", "type": "TQRLabel"}, "qrdbtext6": {"name": "QRDBText6", "type": "TQRDBText"}, "qrlabel8": {"name": "QRLabel8", "type": "TQRLabel"}, "qrlabel9": {"name": "QRLabel9", "type": "TQRLabel"}, "qrdbtext8": {"name": "QRDBText8", "type": "TQRDBText"}, "qrlabel10": {"name": "QRLabel10", "type": "TQRLabel"}, "qrdbtext9": {"name": "QRDBText9", "type": "TQRDBText"}, "qrlabel11": {"name": "QRLabel11", "type": "TQRLabel"}, "qrlabel12": {"name": "QRLabel12", "type": "TQRLabel"}, "qrdbtext11": {"name": "QRDBText11", "type": "TQRDBText"}, "qrlabel13": {"name": "QRLabel13", "type": "TQRLabel"}, "qrlabel14": {"name": "QRLabel14", "type": "TQRLabel"}, "qrlabel15": {"name": "QRLabel15", "type": "TQRLabel"}, "qrdbtext7": {"name": "QRDBText7", "type": "TQRDBText"}, "qrdbtext10": {"name": "QRDBText10", "type": "TQRDBText"}, "qrdbtext12": {"name": "QRDBText12", "type": "TQRDBText"}, "qrlabel18": {"name": "QRLabel18", "type": "TQRLabel"}, "qrlabel19": {"name": "QRLabel19", "type": "TQRLabel"}, "qrshape1": {"name": "QRShape1", "type": "TQRShape"}, "qrshape2": {"name": "QRShape2", "type": "TQRShape"}, "qrlabel16": {"name": "QRLabel16", "type": "TQRLabel"}}, {});
  U.init(async () => {
    U.var_("FormReportS", null, "TFormReportS");
  });
  U.method("TFormReportS", "SQuickRepBeforePrint", async function SQuickRepBeforePrint(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "printreport": $.asRef(p1), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  return L0.result;
}, {"params": ["Sender", "PrintReport"], "kind": "procedure", "ptypes": ["TCustomQuickRep", "Boolean"]});
  return U;
}
