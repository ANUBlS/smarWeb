// Generated from UnitReportR.pas by pas2js — do not edit by hand; regenerate instead.
/* eslint-disable */
// @ts-nocheck

export default function define($) {
  const U = $.unit("UnitReportR", ["Windows", "Messages", "SysUtils", "Classes", "Graphics", "Controls", "Forms", "Dialogs", "ExtCtrls", "QuickRpt", "Qrctrls", "unitdata", "SBTranslateProc", "sboapiDataModuleImpl"]);
  const C = [U];
  U.defClass("TFormRepR", "TForm", {"qrep": {"name": "QRep", "type": "TQuickRep"}, "qrbanddetail": {"name": "QRBandDetail", "type": "TQRBand"}, "qrshapeh": {"name": "QRShapeH", "type": "TQRShape"}, "qrshapev": {"name": "QRShapeV", "type": "TQRShape"}, "qrlabeldat": {"name": "QRLabelDat", "type": "TQRLabel"}, "qrlabel_val": {"name": "QRLabel_Val", "type": "TQRLabel"}, "qrlabelpairacc": {"name": "QRLabelPairAcc", "type": "TQRLabel"}, "qrlabeldebt": {"name": "QRLabelDebt", "type": "TQRLabel"}, "qrlabelcredit": {"name": "QRLabelCredit", "type": "TQRLabel"}, "qrsubdetail": {"name": "QRSubDetail", "type": "TQRSubDetail"}, "qrdbtextdat": {"name": "QRDBTextDat", "type": "TQRDBText"}, "qrdbtextcurr": {"name": "QRDBTextCurr", "type": "TQRDBText"}, "qrdbtextpairacc": {"name": "QRDBTextPairAcc", "type": "TQRDBText"}, "qrdbtextldebit": {"name": "QRDBTextLDebit", "type": "TQRDBText"}, "qrdbtextlkredit": {"name": "QRDBTextLKredit", "type": "TQRDBText"}, "qrdbtexttey": {"name": "QRDBTextTey", "type": "TQRDBText"}, "groupfooterband": {"name": "GroupFooterBand", "type": "TQRBand"}, "qrexprsumldebit": {"name": "QRExprSumLDebit", "type": "TQRExpr"}, "qrexprsumlkredit": {"name": "QRExprSumLKredit", "type": "TQRExpr"}, "qrexprsumkredit": {"name": "QRExprSumKredit", "type": "TQRExpr"}, "qrexprsumdebit": {"name": "QRExprSumDebit", "type": "TQRExpr"}, "qrshapefooter": {"name": "QRShapeFooter", "type": "TQRShape"}, "qrshapebottom": {"name": "QRShapeBottom", "type": "TQRShape"}, "qrlabellastostat": {"name": "QRLabelLastOstat", "type": "TQRLabel"}, "qrexprvalend": {"name": "QRExprValEnd", "type": "TQRExpr"}, "qrexprmanend": {"name": "QRExprManEnd", "type": "TQRExpr"}, "qrexprmezend": {"name": "QRExprMezEnd", "type": "TQRExpr"}, "qrlabelcount": {"name": "QRLabelCount", "type": "TQRLabel"}, "qrexprcount": {"name": "QRExprCount", "type": "TQRExpr"}, "dbtextapend": {"name": "DBTextApEnd", "type": "TQRDBText"}, "qrlabelvalend": {"name": "QRLabelValEnd", "type": "TQRLabel"}, "qrlabelmanend": {"name": "QRLabelManEnd", "type": "TQRLabel"}, "qrrateend": {"name": "QRRateEnd", "type": "TQRLabel"}, "qrlabelspec": {"name": "QRLabelSpec", "type": "TQRLabel"}, "chband": {"name": "ChBand", "type": "TQRChildBand"}, "dbtextdebit": {"name": "DBTextDebit", "type": "TQRDBText"}, "dbtextkredit": {"name": "DBTextKredit", "type": "TQRDBText"}, "qrlabelacc_no": {"name": "QRLabelAcc_No", "type": "TQRLabel"}, "qrdbtext_accno": {"name": "QRDBText_AccNo", "type": "TQRDBText"}, "dbtextopendate": {"name": "DBTextOpenDate", "type": "TQRDBText"}, "qrlabelmbeg": {"name": "QRLabelMBeg", "type": "TQRLabel"}, "qrlabelmend": {"name": "QRLabelMEnd", "type": "TQRLabel"}, "qrlabelacc_name": {"name": "QRLabelAcc_Name", "type": "TQRLabel"}, "qrdbtextaccmame": {"name": "QRDBTextAccMame", "type": "TQRDBText"}, "qrlabelvoin": {"name": "QRLabelVoin", "type": "TQRLabel"}, "dbtextvoin": {"name": "DBTextVoin", "type": "TQRDBText"}, "qrlabelval": {"name": "QRLabelVal", "type": "TQRLabel"}, "dbtextval": {"name": "DBTextVal", "type": "TQRDBText"}, "qrlabeldateinterval": {"name": "QRLabelDateInterval", "type": "TQRLabel"}, "qrd_begin": {"name": "QRD_Begin", "type": "TQRLabel"}, "qrd_end": {"name": "QRD_End", "type": "TQRLabel"}, "qrlabellastopdate": {"name": "QRLabelLastOpDATE", "type": "TQRLabel"}, "dbtextlastopdate": {"name": "DBTextLastOpDate", "type": "TQRDBText"}, "qrlabelfirstostat": {"name": "QRLabelFirstOstat", "type": "TQRLabel"}, "qrexprvalbeg": {"name": "QRExprValBeg", "type": "TQRExpr"}, "qrlabelvalbeg": {"name": "QRLabelValBeg", "type": "TQRLabel"}, "qrexprmanbeg": {"name": "QRExprManBeg", "type": "TQRExpr"}, "qrlabelmanbeg": {"name": "QRLabelManBeg", "type": "TQRLabel"}, "qrexprmezbeg": {"name": "QRExprMezBeg", "type": "TQRExpr"}, "qrratebeg": {"name": "QRRateBeg", "type": "TQRLabel"}, "qrdbtextbank": {"name": "QRDBTextBank", "type": "TQRDBText"}, "dbtextapbeg": {"name": "DBTextApBeg", "type": "TQRDBText"}, "qrlabel2": {"name": "QRLabel2", "type": "TQRLabel"}, "qrdbtext1": {"name": "QRDBText1", "type": "TQRDBText"}, "qrdbtext2": {"name": "QRDBText2", "type": "TQRDBText"}, "qrlabel1": {"name": "QRLabel1", "type": "TQRLabel"}, "qrdbtext3": {"name": "QRDBText3", "type": "TQRDBText"}, "qrimage1": {"name": "QRImage1", "type": "TQRImage"}}, {});
  U.init(async () => {
    U.var_("FormRepR", null, "TFormRepR");
  });
  U.method("TFormRepR", "QRSubDetailAfterPrint", async function QRSubDetailAfterPrint(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "bandprinted": $.copyArg(p1), result: undefined};
  await $.fixArgs(L0, ["sender", "bandprinted"]);
  if ($.truthy((await $.and_(($.eq((await $.mv((await $.mcall((await $.mv((await $.v(C, "DataModSTX")), "ODSExtractTrans")), "FieldByName", ["DEBIT"])), "AsCurrency")), 0)), async () => ($.eq((await $.mv((await $.mcall((await $.mv((await $.v(C, "DataModSTX")), "ODSExtractTrans")), "FieldByName", ["KREDIT"])), "AsCurrency")), 0)))))) {
    await $.mset((await $.v(C, "ChBand")), "Enabled", false);
  } else {
    if ($.truthy((await $.and_(($.eq((await $.mv((await $.mcall((await $.mv((await $.v(C, "DataModSTX")), "ODSExtractTrans")), "FieldByName", ["PairCurrencyid"])), "AsInteger")), 0)), async () => ($.eq((await $.mv((await $.mcall((await $.mv((await $.v(C, "DataModSTX")), "ODSExtractTrans")), "FieldByName", ["Currencyid"])), "AsInteger")), 0)))))) {
      await $.mset((await $.v(C, "ChBand")), "Enabled", false);
    } else {
      await $.mset((await $.v(C, "ChBand")), "Enabled", true);
    }
  }
  if ($.truthy((await $.and_(($.eq((await $.mv((await $.mv((await $.v(C, "QRExprSumDebit")), "Value")), "dblResult")), 0)), async () => ($.eq((await $.mv((await $.mv((await $.v(C, "QRExprSumKredit")), "Value")), "dblResult")), 0)))))) {
    await $.mset((await $.v(C, "QRExprSumDebit")), "Enabled", false);
    await $.mset((await $.v(C, "QRExprSumKredit")), "Enabled", false);
  } else {
    if ($.truthy((await $.and_(($.eq((await $.mv((await $.mv((await $.v(C, "QRExprSumLDebit")), "Value")), "dblResult")), (await $.mv((await $.mv((await $.v(C, "QRExprSumDebit")), "Value")), "dblResult")))), async () => ($.eq((await $.mv((await $.mv((await $.v(C, "QRExprSumLKredit")), "Value")), "dblResult")), (await $.mv((await $.mv((await $.v(C, "QRExprSumKredit")), "Value")), "dblResult")))))))) {
      await $.mset((await $.v(C, "QRExprSumDebit")), "Enabled", false);
      await $.mset((await $.v(C, "QRExprSumKredit")), "Enabled", false);
    } else {
      await $.mset((await $.v(C, "QRExprSumDebit")), "Enabled", true);
      await $.mset((await $.v(C, "QRExprSumKredit")), "Enabled", true);
    }
  }
  return L0.result;
}, {"params": ["Sender", "BandPrinted"], "kind": "procedure", "ptypes": ["TQRCustomBand", "Boolean"]});
  U.method("TFormRepR", "QRBandDetailAfterPrint", async function QRBandDetailAfterPrint(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "bandprinted": $.copyArg(p1), result: undefined};
  await $.fixArgs(L0, ["sender", "bandprinted"]);
  await $.mcall((await $.v(C, "QRExprSumDebit")), "Reset", []);
  await $.mcall((await $.v(C, "QRExprSumKredit")), "Reset", []);
  await $.mcall((await $.v(C, "QRExprSumLDebit")), "Reset", []);
  await $.mcall((await $.v(C, "QRExprSumLKredit")), "Reset", []);
  return L0.result;
}, {"params": ["Sender", "BandPrinted"], "kind": "procedure", "ptypes": ["TQRCustomBand", "Boolean"]});
  U.method("TFormRepR", "QRBandDetailBeforePrint", async function QRBandDetailBeforePrint(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "printband": $.asRef(p1), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.gt((await $.mv((await $.mcall((await $.mv((await $.v(C, "DataModSTX")), "ODSMainState")), "FieldByName", ["credid"])), "AsFloat")), 0))) {
    await $.mset((await $.v(C, "QRLabel1")), "enabled", true);
    await $.mset((await $.v(C, "QRDBText3")), "enabled", true);
  } else {
    await $.mset((await $.v(C, "QRLabel1")), "enabled", false);
    await $.mset((await $.v(C, "QRDBText3")), "enabled", false);
  }
  if ($.truthy($.eq((await $.mv(L0["sender"], "ControlCount")), 0))) {
    {
      const $t1 = (await $.v(C, "QRBandDetail"));
      while ($.truthy($.gt((await $.wv([$t1], "ControlCount", C, false)), 0))) {
        await $.mset((await $.idx((await $.wv([$t1], "Controls", C, false)), [0])), "Parent", (await $.wv([$t1], "Sender", { get: async () => L0["sender"], set: async (v) => { L0["sender"] = v; }, local: true }, false)));
        await $.tick();
      }
    }
  }
  if ($.truthy($.eq((await $.mv((await $.v(C, "QRD_Begin")), "Caption")), (await $.mv((await $.v(C, "QRD_End")), "Caption"))))) {
    await $.mset((await $.v(C, "QRD_End")), "Caption", "");
  }
  await $.mset((await $.v(C, "QRLabelValBeg")), "Caption", (await $.call(C, "FormatFloat", ["#,##0.00", (await $.call(C, "ABS", [(await $.mv((await $.mcall((await $.mv((await $.v(C, "DataModSTX")), "ODSMainState")), "FieldByName", ["Ostat"])), "AsCurrency"))]))])));
  await $.mset((await $.v(C, "QRLabelValEnd")), "Caption", (await $.call(C, "FormatFloat", ["#,##0.00", (await $.call(C, "ABS", [(await $.mv((await $.mcall((await $.mv((await $.v(C, "DataModSTX")), "ODSMainState")), "FieldByName", ["EndOstat"])), "AsCurrency"))]))])));
  await $.mset((await $.v(C, "QRRateBeg")), "Caption", (await $.call(C, "FormatFloat", ["#,##0.0000", (await $.call(C, "ABS", [(await $.mv((await $.mcall((await $.mv((await $.v(C, "DataModSTX")), "RatesDataSetBegin")), "FieldByName", ["Ostat"])), "AsCurrency"))]))])));
  await $.mset((await $.v(C, "QRRateEnd")), "Caption", (await $.call(C, "FormatFloat", ["#,##0.0000", (await $.call(C, "ABS", [(await $.mv((await $.mcall((await $.mv((await $.v(C, "DataModSTX")), "RatesDataSet")), "FieldByName", ["Ostat"])), "AsCurrency"))]))])));
  if ($.truthy($.eq((await $.mv((await $.mcall((await $.mv((await $.v(C, "DataModSTX")), "ODSMainState")), "FieldByName", ["CurrencyId"])), "AsCurrency")), 0))) {
    await $.mset((await $.v(C, "QRLabelManBeg")), "Enabled", false);
    await $.mset((await $.v(C, "QRLabelManEnd")), "Enabled", false);
    await $.mset((await $.v(C, "QRRateBeg")), "Enabled", false);
    await $.mset((await $.v(C, "QRRateEnd")), "Enabled", false);
  } else {
    await $.mset((await $.v(C, "QRLabelManBeg")), "Enabled", true);
    await $.mset((await $.v(C, "QRLabelManEnd")), "Enabled", true);
    await $.mset((await $.v(C, "QRRateBeg")), "Enabled", true);
    await $.mset((await $.v(C, "QRRateEnd")), "Enabled", true);
    await $.mset((await $.v(C, "QRLabelManBeg")), "Caption", (await $.call(C, "FormatFloat", ["#,##0.00", (await $.call(C, "ABS", [(await $.mv((await $.mcall((await $.mv((await $.v(C, "DataModSTX")), "ODSMainState")), "FieldByName", ["PokOstat"])), "AsCurrency"))]))])));
    await $.mset((await $.v(C, "QRLabelManEnd")), "Caption", (await $.call(C, "FormatFloat", ["#,##0.00", (await $.call(C, "ABS", [(await $.mv((await $.mcall((await $.mv((await $.v(C, "DataModSTX")), "ODSMainState")), "FieldByName", ["EndPokOstat"])), "AsCurrency"))]))])));
  }
  return L0.result;
}, {"params": ["Sender", "PrintBand"], "kind": "procedure", "ptypes": ["TQRCustomBand", "Boolean"]});
  U.method("TFormRepR", "QRepBeforePrint", async function QRepBeforePrint(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "printreport": $.asRef(p1), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.stmt((await $.mcall((await $.v(C, "SBTranslateProc")), "TranslateAllCompQuickRep", [(await $.v(C, "QRep")), (await $.mv((await $.v(C, "sboapiDataModule")), "OrPack_SL"))])));
  return L0.result;
}, {"params": ["Sender", "PrintReport"], "kind": "procedure", "ptypes": ["TCustomQuickRep", "Boolean"]});
  return U;
}
