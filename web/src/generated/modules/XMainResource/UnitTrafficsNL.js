// Generated from UnitTrafficsNL.pas by pas2js — do not edit by hand; regenerate instead.
/* eslint-disable */
// @ts-nocheck

export default function define($) {
  const U = $.unit("UnitTrafficsNL", ["Windows", "Messages", "SysUtils", "Classes", "Graphics", "Controls", "Forms", "Dialogs", "Qrctrls", "QuickRpt", "ExtCtrls", "UnitData", "sboapiDataModuleImpl", "SBTranslateProc"]);
  const C = [U];
  U.defClass("TFormTrafficsNL", "TForm", {"quickrep": {"name": "QuickRep", "type": "TQuickRep"}, "qrband2": {"name": "QRBand2", "type": "TQRBand"}, "qrdbtextamortdate": {"name": "QRDBTextAmortDate", "type": "TQRDBText"}, "qrdbtextremainder": {"name": "QRDBTextRemainder", "type": "TQRDBText"}, "qrdbtextall_amort": {"name": "QRDBTextall_amort", "type": "TQRDBText"}, "qrdbtextamort": {"name": "QRDBTextamort", "type": "TQRDBText"}, "qrband1": {"name": "QRBand1", "type": "TQRBand"}, "qrlabelwares_name": {"name": "QRLabelWares_Name", "type": "TQRLabel"}, "qrdbtextwares_name": {"name": "QRDBTextwares_name", "type": "TQRDBText"}, "qrlabelfirst_price": {"name": "QRLabelFirst_Price", "type": "TQRLabel"}, "qrdbtextfirst_price": {"name": "QRDBTextFIRST_PRICE", "type": "TQRDBText"}, "qrlabelamort_date": {"name": "QRLabelAmort_Date", "type": "TQRLabel"}, "qrlabel4": {"name": "QRLabel4", "type": "TQRLabel"}, "qrlabel5": {"name": "QRLabel5", "type": "TQRLabel"}, "qrlabel6": {"name": "QRLabel6", "type": "TQRLabel"}, "qrlabelpercent": {"name": "QRLabelPercent", "type": "TQRLabel"}, "qrdbtext1": {"name": "QRDBText1", "type": "TQRDBText"}, "qrlabel2": {"name": "QRLabel2", "type": "TQRLabel"}, "qrdbtext2": {"name": "QRDBText2", "type": "TQRDBText"}}, {});
  U.init(async () => {
    U.var_("FormTrafficsNL", null, "TFormTrafficsNL");
  });
  U.method("TFormTrafficsNL", "QuickRepBeforePrint", async function QuickRepBeforePrint(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "printreport": $.asRef(p1), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.stmt((await $.mcall((await $.v(C, "SBTranslateProc")), "TranslateAllCompQuickRep", [(await $.v(C, "QuickRep")), (await $.mv((await $.v(C, "sboapiDataModule")), "OrPack_SL"))])));
  return L0.result;
}, {"params": ["Sender", "PrintReport"], "kind": "procedure", "ptypes": ["TCustomQuickRep", "Boolean"]});
  return U;
}
