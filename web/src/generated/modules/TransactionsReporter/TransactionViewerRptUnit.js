// Generated from TransactionViewerRptUnit.pas by pas2js — do not edit by hand; regenerate instead.
/* eslint-disable */
// @ts-nocheck

export default function define($) {
  const U = $.unit("TransactionViewerRptUnit", ["Windows", "SysUtils", "Messages", "Classes", "Graphics", "Controls", "StdCtrls", "ExtCtrls", "Forms", "Quickrpt", "QRCtrls", "TransactionsViewerDataModuleUnit", "SBTranslateProc", "sboapiDataModuleImpl"]);
  const C = [U];
  U.defClass("TTransactionsRpt", "TQuickRep", {"qrband1": {"name": "QRBand1", "type": "TQRBand"}, "qrlabel1": {"name": "QRLabel1", "type": "TQRLabel"}, "qrlabel2": {"name": "QRLabel2", "type": "TQRLabel"}, "qrdbimage1": {"name": "QRDBImage1", "type": "TQRDBImage"}, "qrlabel3": {"name": "QRLabel3", "type": "TQRLabel"}, "qrdbtext2": {"name": "QRDBText2", "type": "TQRDBText"}, "qrdbtext3": {"name": "QRDBText3", "type": "TQRDBText"}, "qrchildband1": {"name": "QRChildBand1", "type": "TQRChildBand"}, "qrlabel4": {"name": "QRLabel4", "type": "TQRLabel"}, "qrlabel5": {"name": "QRLabel5", "type": "TQRLabel"}, "qrlabel6": {"name": "QRLabel6", "type": "TQRLabel"}, "qrlabel7": {"name": "QRLabel7", "type": "TQRLabel"}, "qrlabel8": {"name": "QRLabel8", "type": "TQRLabel"}, "qrlabel9": {"name": "QRLabel9", "type": "TQRLabel"}, "qrlabel10": {"name": "QRLabel10", "type": "TQRLabel"}, "qrlabel11": {"name": "QRLabel11", "type": "TQRLabel"}, "detailband": {"name": "DetailBand", "type": "TQRBand"}, "qrdbtext6": {"name": "QRDBText6", "type": "TQRDBText"}, "qrdbtext7": {"name": "QRDBText7", "type": "TQRDBText"}, "qrdbtext8": {"name": "QRDBText8", "type": "TQRDBText"}, "qrdbtext9": {"name": "QRDBText9", "type": "TQRDBText"}, "qrdbtext10": {"name": "QRDBText10", "type": "TQRDBText"}, "qrdbtext11": {"name": "QRDBText11", "type": "TQRDBText"}, "qrdbtext12": {"name": "QRDBText12", "type": "TQRDBText"}, "qrband3": {"name": "QRBand3", "type": "TQRBand"}, "qrdbtext13": {"name": "QRDBText13", "type": "TQRDBText"}, "qrdbtext14": {"name": "QRDBText14", "type": "TQRDBText"}, "qrexpr1": {"name": "QRExpr1", "type": "TQRExpr"}, "qrexpr2": {"name": "QRExpr2", "type": "TQRExpr"}, "qrexpr3": {"name": "QRExpr3", "type": "TQRExpr"}, "qrlabel15": {"name": "QRLabel15", "type": "TQRLabel"}, "qrexpr5": {"name": "QRExpr5", "type": "TQRExpr"}, "qrchildband2": {"name": "QRChildBand2", "type": "TQRChildBand"}, "qrdbtext5": {"name": "QRDBText5", "type": "TQRDBText"}, "qrsysdata1": {"name": "QRSysData1", "type": "TQRSysData"}, "qrdbtext1": {"name": "QRDBText1", "type": "TQRDBText"}, "qrlabel17": {"name": "QRLabel17", "type": "TQRLabel"}, "qrdbtext15": {"name": "QRDBText15", "type": "TQRDBText"}, "qrdbtext4": {"name": "QRDBText4", "type": "TQRDBText"}, "qrdbtext16": {"name": "QRDBText16", "type": "TQRDBText"}, "managertitle": {"name": "MANAGERTITLE", "type": "TQRLabel"}, "accountanttitle": {"name": "ACCOUNTANTTITLE", "type": "TQRLabel"}}, {});
  U.init(async () => {
    U.var_("TransactionsRpt", null, "TTransactionsRpt");
  });
  U.method("TTransactionsRpt", "QuickRepBeforePrint", async function QuickRepBeforePrint(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "printreport": $.asRef(p1), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mcall((await $.mv((await $.v(C, "TransDataModule")), "BankInfo")), "Open", []);
  await $.stmt((await $.mcall((await $.v(C, "SBTranslateProc")), "TranslateExchCompQuickRep", [Self, (await $.mv((await $.v(C, "sboapiDataModule")), "OrPack_SL"))])));
  await $.mset((await $.v(C, "MANAGERTITLE")), "caption", (await $.mv((await $.mcall((await $.mv((await $.v(C, "TransDataModule")), "BankInfo")), "fieldbyname", ["MANAGERTITLE"])), "asstring")));
  await $.mset((await $.v(C, "ACCOUNTANTTITLE")), "caption", (await $.mv((await $.mcall((await $.mv((await $.v(C, "TransDataModule")), "BankInfo")), "fieldbyname", ["ACCOUNTANTTITLE"])), "asstring")));
  return L0.result;
}, {"params": ["Sender", "PrintReport"], "kind": "procedure", "ptypes": ["TCustomQuickRep", "Boolean"]});
  return U;
}
