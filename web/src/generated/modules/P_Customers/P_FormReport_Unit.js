// Generated from P_FormReport_Unit.pas by pas2js — do not edit by hand; regenerate instead.
/* eslint-disable */
// @ts-nocheck

export default function define($) {
  const U = $.unit("P_FormReport_Unit", ["Windows", "Messages", "SysUtils", "Classes", "Graphics", "Controls", "Forms", "Dialogs", "QuickRpt", "Qrctrls", "ExtCtrls", "P_Datamod_Unit", "sboapiDataModuleImpl", "SBTranslateProc"]);
  const C = [U];
  U.defClass("TP_FormReport", "TForm", {"qrep": {"name": "QRep", "type": "TQuickRep"}, "qrbanddetail": {"name": "QRBandDetail", "type": "TQRBand"}, "qrlabelacc_no": {"name": "QRLabelAcc_No", "type": "TQRLabel"}, "qrdbtext_accno": {"name": "QRDBText_AccNo", "type": "TQRDBText"}, "qrlabelacc_name": {"name": "QRLabelAcc_Name", "type": "TQRLabel"}, "qrdbtextaccmame": {"name": "QRDBTextAccMame", "type": "TQRDBText"}, "qrd_begin": {"name": "QRD_Begin", "type": "TQRLabel"}, "qrd_end": {"name": "QRD_End", "type": "TQRLabel"}, "qrshapeh": {"name": "QRShapeH", "type": "TQRShape"}, "qrshapev": {"name": "QRShapeV", "type": "TQRShape"}, "qrlabeldat": {"name": "QRLabelDat", "type": "TQRLabel"}, "qrlabel_val": {"name": "QRLabel_Val", "type": "TQRLabel"}, "qrlabelpairacc": {"name": "QRLabelPairAcc", "type": "TQRLabel"}, "qrlabeldebt": {"name": "QRLabelDebt", "type": "TQRLabel"}, "qrlabelcredit": {"name": "QRLabelCredit", "type": "TQRLabel"}, "qrlabeltey": {"name": "QRLabelTey", "type": "TQRLabel"}, "qrlabeldateinterval": {"name": "QRLabelDateInterval", "type": "TQRLabel"}, "qrlabelvoin": {"name": "QRLabelVoin", "type": "TQRLabel"}, "dbtextvoin": {"name": "DBTextVoin", "type": "TQRDBText"}, "qrlabelval": {"name": "QRLabelVal", "type": "TQRLabel"}, "dbtextval": {"name": "DBTextVal", "type": "TQRDBText"}, "qrlabellastopdate": {"name": "QRLabelLastOpDATE", "type": "TQRLabel"}, "dbtextlastopdate": {"name": "DBTextLastOpDate", "type": "TQRDBText"}, "dbtextopendate": {"name": "DBTextOpenDate", "type": "TQRDBText"}, "qrlabelfirstostat": {"name": "QRLabelFirstOstat", "type": "TQRLabel"}, "qrexprvalbeg": {"name": "QRExprValBeg", "type": "TQRExpr"}, "qrexprmanbeg": {"name": "QRExprManBeg", "type": "TQRExpr"}, "qrexprmezbeg": {"name": "QRExprMezBeg", "type": "TQRExpr"}, "dbtextapbeg": {"name": "DBTextApBeg", "type": "TQRDBText"}, "qrlabelvalbeg": {"name": "QRLabelValBeg", "type": "TQRLabel"}, "qrlabelmanbeg": {"name": "QRLabelManBeg", "type": "TQRLabel"}, "qrratebeg": {"name": "QRRateBeg", "type": "TQRLabel"}, "qrlabelmbeg": {"name": "QRLabelMBeg", "type": "TQRLabel"}, "qrlabelmend": {"name": "QRLabelMEnd", "type": "TQRLabel"}, "dbimagebank": {"name": "DBImageBank", "type": "TQRDBImage"}, "qrdbtextbank": {"name": "QRDBTextBank", "type": "TQRDBText"}, "qrsubdetail": {"name": "QRSubDetail", "type": "TQRSubDetail"}, "qrdbtextdat": {"name": "QRDBTextDat", "type": "TQRDBText"}, "qrdbtextcurr": {"name": "QRDBTextCurr", "type": "TQRDBText"}, "qrdbtextpairacc": {"name": "QRDBTextPairAcc", "type": "TQRDBText"}, "qrdbtextldebit": {"name": "QRDBTextLDebit", "type": "TQRDBText"}, "qrdbtextlkredit": {"name": "QRDBTextLKredit", "type": "TQRDBText"}, "qrdbtexttey": {"name": "QRDBTextTey", "type": "TQRDBText"}, "chband": {"name": "ChBand", "type": "TQRChildBand"}, "dbtextdebit": {"name": "DBTextDebit", "type": "TQRDBText"}, "dbtextkredit": {"name": "DBTextKredit", "type": "TQRDBText"}, "groupfooterband": {"name": "GroupFooterBand", "type": "TQRBand"}, "qrexprsumldebit": {"name": "QRExprSumLDebit", "type": "TQRExpr"}, "qrexprsumlkredit": {"name": "QRExprSumLKredit", "type": "TQRExpr"}, "qrexprsumkredit": {"name": "QRExprSumKredit", "type": "TQRExpr"}, "qrexprsumdebit": {"name": "QRExprSumDebit", "type": "TQRExpr"}, "qrshapefooter": {"name": "QRShapeFooter", "type": "TQRShape"}, "qrshapebottom": {"name": "QRShapeBottom", "type": "TQRShape"}, "qrlabellastostat": {"name": "QRLabelLastOstat", "type": "TQRLabel"}, "qrexprvalend": {"name": "QRExprValEnd", "type": "TQRExpr"}, "qrexprmanend": {"name": "QRExprManEnd", "type": "TQRExpr"}, "qrexprmezend": {"name": "QRExprMezEnd", "type": "TQRExpr"}, "qrlabelcount": {"name": "QRLabelCount", "type": "TQRLabel"}, "qrexprcount": {"name": "QRExprCount", "type": "TQRExpr"}, "dbtextapend": {"name": "DBTextApEnd", "type": "TQRDBText"}, "qrlabelvalend": {"name": "QRLabelValEnd", "type": "TQRLabel"}, "qrlabelmanend": {"name": "QRLabelManEnd", "type": "TQRLabel"}, "qrrateend": {"name": "QRRateEnd", "type": "TQRLabel"}}, {});
  U.init(async () => {
    U.var_("P_FormReport", null, "TP_FormReport");
  });
  U.method("TP_FormReport", "QRBandDetailAfterPrint", async function QRBandDetailAfterPrint(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "bandprinted": $.copyArg(p1), result: undefined};
  await $.fixArgs(L0, ["sender", "bandprinted"]);
  await $.mcall((await $.v(C, "QRExprSumDebit")), "Reset", []);
  await $.mcall((await $.v(C, "QRExprSumKredit")), "Reset", []);
  await $.mcall((await $.v(C, "QRExprSumLDebit")), "Reset", []);
  await $.mcall((await $.v(C, "QRExprSumLKredit")), "Reset", []);
  return L0.result;
}, {"params": ["Sender", "BandPrinted"], "kind": "procedure", "ptypes": ["TQRCustomBand", "Boolean"]});
  U.method("TP_FormReport", "QRBandDetailBeforePrint", async function QRBandDetailBeforePrint(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "printband": $.asRef(p1), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.eq((await $.mv((await $.v(C, "QRD_Begin")), "Caption")), (await $.mv((await $.v(C, "QRD_End")), "Caption"))))) {
    await $.mset((await $.v(C, "QRD_End")), "Caption", "");
  }
  await $.mset((await $.v(C, "QRLabelValBeg")), "Caption", (await $.call(C, "FormatFloat", ["#,##0.00", (await $.call(C, "ABS", [(await $.mv((await $.mcall((await $.mv((await $.v(C, "P_DataModule")), "ODSMainState")), "FieldByName", ["Ostat"])), "AsCurrency"))]))])));
  await $.mset((await $.v(C, "QRLabelValEnd")), "Caption", (await $.call(C, "FormatFloat", ["#,##0.00", (await $.call(C, "ABS", [(await $.mv((await $.mcall((await $.mv((await $.v(C, "P_DataModule")), "ODSMainState")), "FieldByName", ["EndOstat"])), "AsCurrency"))]))])));
  await $.mset((await $.v(C, "QRRateBeg")), "Caption", (await $.call(C, "FormatFloat", ["#,##0.0000", (await $.call(C, "ABS", [(await $.mv((await $.mcall((await $.mv((await $.v(C, "P_DataModule")), "RatesDataSetBegin")), "FieldByName", ["Ostat"])), "AsCurrency"))]))])));
  await $.mset((await $.v(C, "QRRateEnd")), "Caption", (await $.call(C, "FormatFloat", ["#,##0.0000", (await $.call(C, "ABS", [(await $.mv((await $.mcall((await $.mv((await $.v(C, "P_DataModule")), "RatesDataSet")), "FieldByName", ["Ostat"])), "AsCurrency"))]))])));
  if ($.truthy($.eq((await $.mv((await $.mcall((await $.mv((await $.v(C, "P_DataModule")), "ODSMainState")), "FieldByName", ["CurrencyId"])), "AsCurrency")), 0))) {
    await $.mset((await $.v(C, "QRLabelManBeg")), "Enabled", false);
    await $.mset((await $.v(C, "QRLabelManEnd")), "Enabled", false);
    await $.mset((await $.v(C, "QRRateBeg")), "Enabled", false);
    await $.mset((await $.v(C, "QRRateEnd")), "Enabled", false);
  } else {
    await $.mset((await $.v(C, "QRLabelManBeg")), "Enabled", true);
    await $.mset((await $.v(C, "QRLabelManEnd")), "Enabled", true);
    await $.mset((await $.v(C, "QRRateBeg")), "Enabled", true);
    await $.mset((await $.v(C, "QRRateEnd")), "Enabled", true);
    await $.mset((await $.v(C, "QRLabelManBeg")), "Caption", (await $.call(C, "FormatFloat", ["#,##0.00", (await $.call(C, "ABS", [(await $.mv((await $.mcall((await $.mv((await $.v(C, "P_DataModule")), "ODSMainState")), "FieldByName", ["PokOstat"])), "AsCurrency"))]))])));
    await $.mset((await $.v(C, "QRLabelManEnd")), "Caption", (await $.call(C, "FormatFloat", ["#,##0.00", (await $.call(C, "ABS", [(await $.mv((await $.mcall((await $.mv((await $.v(C, "P_DataModule")), "ODSMainState")), "FieldByName", ["EndPokOstat"])), "AsCurrency"))]))])));
  }
  return L0.result;
}, {"params": ["Sender", "PrintBand"], "kind": "procedure", "ptypes": ["TQRCustomBand", "Boolean"]});
  U.method("TP_FormReport", "QRepBeforePrint", async function QRepBeforePrint(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "printreport": $.asRef(p1), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.stmt((await $.mcall((await $.v(C, "SBTranslateProc")), "TranslateAllCompQuickRep", [(await $.v(C, "QRep")), (await $.mv((await $.v(C, "sboapiDataModule")), "OrPack_SL"))])));
  return L0.result;
}, {"params": ["Sender", "PrintReport"], "kind": "procedure", "ptypes": ["TCustomQuickRep", "Boolean"]});
  return U;
}
