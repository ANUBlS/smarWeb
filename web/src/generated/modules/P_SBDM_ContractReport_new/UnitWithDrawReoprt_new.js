// Generated from UnitWithDrawReoprt_new.pas by pas2js — do not edit by hand; regenerate instead.
/* eslint-disable */
// @ts-nocheck

export default function define($) {
  const U = $.unit("UnitWithDrawReoprt_new", ["Windows", "Messages", "SysUtils", "Classes", "Graphics", "Controls", "Forms", "Dialogs", "ExtCtrls", "QuickRpt", "Qrctrls", "UnitContractReport_new", "SBTranslateProc", "sboapiDataModuleimpl"]);
  const C = [U];
  U.defClass("TfrmWithDrawReoprt_new", "TForm", {"qrpwithdraw": {"name": "QRPWithDraw", "type": "TQuickRep"}, "detailband1": {"name": "DetailBand1", "type": "TQRBand"}, "qrdbtext5": {"name": "QRDBText5", "type": "TQRDBText"}, "qrdbtext6": {"name": "QRDBText6", "type": "TQRDBText"}, "qrdbtext15": {"name": "QRDBText15", "type": "TQRDBText"}, "summaryband1": {"name": "SummaryBand1", "type": "TQRBand"}, "titleband1": {"name": "TitleBand1", "type": "TQRBand"}, "qrdbtext1": {"name": "QRDBText1", "type": "TQRDBText"}, "qrlabel1": {"name": "QRLabel1", "type": "TQRLabel"}, "qrlabel2": {"name": "QRLabel2", "type": "TQRLabel"}, "qrlabel3": {"name": "QRLabel3", "type": "TQRLabel"}, "qrdbtext2": {"name": "QRDBText2", "type": "TQRDBText"}, "qrdbtext3": {"name": "QRDBText3", "type": "TQRDBText"}, "qrdbtext4": {"name": "QRDBText4", "type": "TQRDBText"}, "qrdbtext7": {"name": "QRDBText7", "type": "TQRDBText"}, "qrdbtext8": {"name": "QRDBText8", "type": "TQRDBText"}, "qrdbtext9": {"name": "QRDBText9", "type": "TQRDBText"}, "qrdbtext10": {"name": "QRDBText10", "type": "TQRDBText"}, "qrdbtext11": {"name": "QRDBText11", "type": "TQRDBText"}, "qrlabel4": {"name": "QRLabel4", "type": "TQRLabel"}, "qrlabel5": {"name": "QRLabel5", "type": "TQRLabel"}, "qrlabel6": {"name": "QRLabel6", "type": "TQRLabel"}, "qrlabel7": {"name": "QRLabel7", "type": "TQRLabel"}, "qrlabel8": {"name": "QRLabel8", "type": "TQRLabel"}, "qrlabel9": {"name": "QRLabel9", "type": "TQRLabel"}, "qrlabel10": {"name": "QRLabel10", "type": "TQRLabel"}, "qrlabel11": {"name": "QRLabel11", "type": "TQRLabel"}, "qrlabel12": {"name": "QRLabel12", "type": "TQRLabel"}, "qrlabel13": {"name": "QRLabel13", "type": "TQRLabel"}, "qrlabel14": {"name": "QRLabel14", "type": "TQRLabel"}, "qrdbtext12": {"name": "QRDBText12", "type": "TQRDBText"}, "qrdbtext13": {"name": "QRDBText13", "type": "TQRDBText"}, "qrdbtext14": {"name": "QRDBText14", "type": "TQRDBText"}, "qrlabel15": {"name": "QRLabel15", "type": "TQRLabel"}, "qrshape1": {"name": "QRShape1", "type": "TQRShape"}, "qrlabel16": {"name": "QRLabel16", "type": "TQRLabel"}, "qrdbtext16": {"name": "QRDBText16", "type": "TQRDBText"}, "qrlabel17": {"name": "QRLabel17", "type": "TQRLabel"}, "qrdbtext17": {"name": "QRDBText17", "type": "TQRDBText"}, "qrdbtext18": {"name": "QRDBText18", "type": "TQRDBText"}, "qrlabel18": {"name": "QRLabel18", "type": "TQRLabel"}}, {});
  U.init(async () => {
    U.var_("frmWithDrawReoprt_new", null, "TfrmWithDrawReoprt_new");
  });
  U.method("TfrmWithDrawReoprt_new", "QRPWithDrawBeforePrint", async function QRPWithDrawBeforePrint(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "printreport": $.asRef(p1), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.stmt((await $.mcall((await $.v(C, "SBTranslateProc")), "TranslateAllCompQuickRep", [(await $.v(C, "QRPWithDraw")), (await $.mv((await $.v(C, "sboapiDataModule")), "OrPack_SL"))])));
  return L0.result;
}, {"params": ["Sender", "PrintReport"], "kind": "procedure", "ptypes": ["TCustomQuickRep", "Boolean"]});
  return U;
}
