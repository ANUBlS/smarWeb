// Generated from ReportsheduleUnit.pas by pas2js — do not edit by hand; regenerate instead.
/* eslint-disable */
// @ts-nocheck

export default function define($) {
  const U = $.unit("ReportsheduleUnit", ["Windows", "Messages", "SysUtils", "Classes", "Graphics", "Controls", "Forms", "Dialogs", "ExtCtrls", "QuickRpt", "Qrctrls", "StatementDataModule", "SBTranslateProc", "sboapiDataModuleimpl"]);
  const C = [U];
  U.defClass("TReportSheduleForm", "TForm", {"quickreptr": {"name": "QuickRepTR", "type": "TQuickRep"}, "titleband1": {"name": "TitleBand1", "type": "TQRBand"}, "qrdbimage1": {"name": "QRDBImage1", "type": "TQRDBImage"}, "qrlabel2": {"name": "QRLabel2", "type": "TQRLabel"}, "qrshape1": {"name": "QRShape1", "type": "TQRShape"}, "qrshape2": {"name": "QRShape2", "type": "TQRShape"}, "qrshape3": {"name": "QRShape3", "type": "TQRShape"}, "qrlabel1": {"name": "QRLabel1", "type": "TQRLabel"}, "qrshape4": {"name": "QRShape4", "type": "TQRShape"}, "qrlabel4": {"name": "QRLabel4", "type": "TQRLabel"}, "qrlabel5": {"name": "QRLabel5", "type": "TQRLabel"}, "qrlabel6": {"name": "QRLabel6", "type": "TQRLabel"}, "qrshape6": {"name": "QRShape6", "type": "TQRShape"}, "qrshape10": {"name": "QRShape10", "type": "TQRShape"}, "qrshape5": {"name": "QRShape5", "type": "TQRShape"}, "qrlabel3": {"name": "QRLabel3", "type": "TQRLabel"}, "qrdbtext1": {"name": "QRDBText1", "type": "TQRDBText"}, "qrdbtext2": {"name": "QRDBText2", "type": "TQRDBText"}, "qrlabel7": {"name": "QRLabel7", "type": "TQRLabel"}, "qrdbtext3": {"name": "QRDBText3", "type": "TQRDBText"}, "qrlvoen": {"name": "QRLVoen", "type": "TQRLabel"}, "qrdbtext4": {"name": "QRDBText4", "type": "TQRDBText"}, "qrlvoen1": {"name": "QRLVoen1", "type": "TQRLabel"}, "qrdbtext5": {"name": "QRDBText5", "type": "TQRDBText"}, "qrlabel9": {"name": "QRLabel9", "type": "TQRLabel"}, "facticaldebtchild1": {"name": "FacticalDebtChild1", "type": "TQRChildBand"}, "qrshape7": {"name": "QRShape7", "type": "TQRShape"}, "qrshape8": {"name": "QRShape8", "type": "TQRShape"}, "qrshape9": {"name": "QRShape9", "type": "TQRShape"}, "qrdbtext6": {"name": "QRDBText6", "type": "TQRDBText"}, "qrdbtext7": {"name": "QRDBText7", "type": "TQRDBText"}, "qrdbtext8": {"name": "QRDBText8", "type": "TQRDBText"}, "qrdbtext27": {"name": "QRDBText27", "type": "TQRDBText"}, "sumaryband": {"name": "SumaryBand", "type": "TQRBand"}, "qrlabel10": {"name": "QRLabel10", "type": "TQRLabel"}, "qrlabel12": {"name": "QRLabel12", "type": "TQRLabel"}, "qrdbtext29": {"name": "QRDBText29", "type": "TQRDBText"}, "qrlabel13": {"name": "QRLabel13", "type": "TQRLabel"}, "qrlabel14": {"name": "QRLabel14", "type": "TQRLabel"}, "qrlcontractno1": {"name": "QRLContractno1", "type": "TQRLabel"}, "qrlabel8": {"name": "QRLabel8", "type": "TQRLabel"}, "qrlabel15": {"name": "QRLabel15", "type": "TQRLabel"}, "qrlabel16": {"name": "QRLabel16", "type": "TQRLabel"}, "qrlabel17": {"name": "QRLabel17", "type": "TQRLabel"}, "qrlabel18": {"name": "QRLabel18", "type": "TQRLabel"}, "qrshape11": {"name": "QRShape11", "type": "TQRShape"}, "qrlabel20": {"name": "QRLabel20", "type": "TQRLabel"}, "qrlabel19": {"name": "QRLabel19", "type": "TQRLabel"}}, {});
  U.init(async () => {
    U.var_("ReportSheduleForm", null, "TReportSheduleForm");
  });
  U.method("TReportSheduleForm", "QuickRepTRBeforePrint", async function QuickRepTRBeforePrint(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "printreport": $.asRef(p1), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.stmt((await $.mcall((await $.v(C, "SBTranslateProc")), "TranslateAllCompQuickRep", [(await $.v(C, "QuickRepTR")), (await $.mv((await $.v(C, "sboapiDataModule")), "OrPack_SL"))])));
  return L0.result;
}, {"params": ["Sender", "PrintReport"], "kind": "procedure", "ptypes": ["TCustomQuickRep", "Boolean"]});
  return U;
}
