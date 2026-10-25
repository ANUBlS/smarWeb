// Generated from StatementReportUnit.pas by pas2js — do not edit by hand; regenerate instead.
/* eslint-disable */
// @ts-nocheck

export default function define($) {
  const U = $.unit("StatementReportUnit", ["Windows", "Messages", "SysUtils", "Classes", "Graphics", "Controls", "Forms", "Dialogs", "ExtCtrls", "QuickRpt", "Qrctrls", "StatementImpl", "StatementDataModule"]);
  const C = [U];
  U.defClass("TStatementReport", "TForm", {"quickrep1": {"name": "QuickRep1", "type": "TQuickRep"}, "detailband1": {"name": "DetailBand1", "type": "TQRBand"}, "qrlabel2": {"name": "QRLabel2", "type": "TQRLabel"}, "qrlabel3": {"name": "QRLabel3", "type": "TQRLabel"}, "qrlabel4": {"name": "QRLabel4", "type": "TQRLabel"}, "qrlabel5": {"name": "QRLabel5", "type": "TQRLabel"}, "qrlabel6": {"name": "QRLabel6", "type": "TQRLabel"}, "qrdbtext1": {"name": "QRDBText1", "type": "TQRDBText"}, "qrdbtext2": {"name": "QRDBText2", "type": "TQRDBText"}, "qrdbtext3": {"name": "QRDBText3", "type": "TQRDBText"}, "qrlabel9": {"name": "QRLabel9", "type": "TQRLabel"}, "qrexpr5": {"name": "QRExpr5", "type": "TQRExpr"}, "qrexpr7": {"name": "QRExpr7", "type": "TQRExpr"}, "qrdbtext14": {"name": "QRDBText14", "type": "TQRDBText"}, "qrdbimage1": {"name": "QRDBImage1", "type": "TQRDBImage"}, "qrdbtext17": {"name": "QRDBText17", "type": "TQRDBText"}, "qrlabel10": {"name": "QRLabel10", "type": "TQRLabel"}, "qrdbtext15": {"name": "QRDBText15", "type": "TQRDBText"}, "qrlabel11": {"name": "QRLabel11", "type": "TQRLabel"}, "qrlabel16": {"name": "QRLabel16", "type": "TQRLabel"}, "qrlabel17": {"name": "QRLabel17", "type": "TQRLabel"}, "qrlabel18": {"name": "QRLabel18", "type": "TQRLabel"}, "qrlabel19": {"name": "QRLabel19", "type": "TQRLabel"}, "qrlabel20": {"name": "QRLabel20", "type": "TQRLabel"}, "qrlabel7": {"name": "QRLabel7", "type": "TQRLabel"}, "qrlabel1": {"name": "QRLabel1", "type": "TQRLabel"}, "qrlabel15": {"name": "QRLabel15", "type": "TQRLabel"}, "qrlabel22": {"name": "QRLabel22", "type": "TQRLabel"}, "qrshape3": {"name": "QRShape3", "type": "TQRShape"}, "qrdbtext5": {"name": "QRDBText5", "type": "TQRDBText"}, "qrlabel13": {"name": "QRLabel13", "type": "TQRLabel"}, "qrlabel24": {"name": "QRLabel24", "type": "TQRLabel"}, "qrlabel25": {"name": "QRLabel25", "type": "TQRLabel"}, "qrdbtext16": {"name": "QRDBText16", "type": "TQRDBText"}, "qrsubdetail1": {"name": "QRSubDetail1", "type": "TQRSubDetail"}, "qrdbtext6": {"name": "QRDBText6", "type": "TQRDBText"}, "qrdbtext8": {"name": "QRDBText8", "type": "TQRDBText"}, "qrdbtext9": {"name": "QRDBText9", "type": "TQRDBText"}, "qrdbtext10": {"name": "QRDBText10", "type": "TQRDBText"}, "qrdbtext11": {"name": "QRDBText11", "type": "TQRDBText"}, "qrdbtext4": {"name": "QRDBText4", "type": "TQRDBText"}, "childband1": {"name": "ChildBand1", "type": "TQRChildBand"}, "qrdbtext12": {"name": "QRDBText12", "type": "TQRDBText"}, "qrdbtext13": {"name": "QRDBText13", "type": "TQRDBText"}, "groupfooterband1": {"name": "GroupFooterBand1", "type": "TQRBand"}, "qrlabel12": {"name": "QRLabel12", "type": "TQRLabel"}, "qrexpr13": {"name": "QRExpr13", "type": "TQRExpr"}, "qrexpr15": {"name": "QRExpr15", "type": "TQRExpr"}, "qrdbtext19": {"name": "QRDBText19", "type": "TQRDBText"}, "qrlabel14": {"name": "QRLabel14", "type": "TQRLabel"}, "qrexpr16": {"name": "QRExpr16", "type": "TQRExpr"}, "qrexpr11": {"name": "QRExpr11", "type": "TQRExpr"}, "qrexpr12": {"name": "QRExpr12", "type": "TQRExpr"}, "qrshape1": {"name": "QRShape1", "type": "TQRShape"}, "qrexpr1": {"name": "QRExpr1", "type": "TQRExpr"}, "qrexpr2": {"name": "QRExpr2", "type": "TQRExpr"}, "qrshape2": {"name": "QRShape2", "type": "TQRShape"}, "qrlabel8": {"name": "QRLabel8", "type": "TQRLabel"}, "qrlabel21": {"name": "QRLabel21", "type": "TQRLabel"}, "qrexpr4": {"name": "QRExpr4", "type": "TQRExpr"}, "qrrateend": {"name": "QRRateEnd", "type": "TQRLabel"}, "qrexpr6": {"name": "QRExpr6", "type": "TQRExpr"}, "qrratebeg": {"name": "QRRateBeg", "type": "TQRLabel"}, "qrshape4": {"name": "QRShape4", "type": "TQRShape"}}, {});
  U.init(async () => {
    U.var_("StatementReport", null, "TStatementReport");
  });
  U.method("TStatementReport", "DetailBand1BeforePrint", async function DetailBand1BeforePrint(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "printband": $.asRef(p1), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.eq((await $.call(C, "Trunc", [(await $.v(C, "D1"))])), (await $.call(C, "Trunc", [(await $.v(C, "D2"))]))))) {
    await $.mset((await $.v(C, "QRLabel7")), "Enabled", false);
  } else {
    await $.mset((await $.v(C, "QRLabel7")), "Enabled", true);
    await $.mset((await $.v(C, "QRLabel7")), "Caption", (await $.call(C, "DateToStr", [(await $.v(C, "D2"))])));
  }
  await $.mset((await $.v(C, "QRLabel22")), "Caption", (await $.call(C, "DateToStr", [(await $.v(C, "D1"))])));
  await $.mset((await $.v(C, "QRLabel1")), "Caption", (await $.call(C, "FormatFloat", ["#,##0.00", (await $.call(C, "ABS", [(await $.mv((await $.mcall((await $.mv((await $.v(C, "StatementDataModNew")), "Extraction_ODSt")), "FieldByName", ["Ostat"])), "AsCurrency"))]))])));
  await $.mset((await $.v(C, "QRLabel8")), "Caption", (await $.call(C, "FormatFloat", ["#,##0.00", (await $.call(C, "ABS", [(await $.mv((await $.mcall((await $.mv((await $.v(C, "StatementDataModNew")), "Extraction_ODSt")), "FieldByName", ["EndOstat"])), "AsCurrency"))]))])));
  await $.mset((await $.v(C, "QRRateBeg")), "Caption", (await $.call(C, "FormatFloat", ["#,##0.0000", (await $.call(C, "ABS", [(await $.mv((await $.mcall((await $.mv((await $.v(C, "StatementDataModNew")), "RatesDataSetBegin")), "FieldByName", ["Ostat"])), "AsCurrency"))]))])));
  await $.mset((await $.v(C, "QRRateEnd")), "Caption", (await $.call(C, "FormatFloat", ["#,##0.0000", (await $.call(C, "ABS", [(await $.mv((await $.mcall((await $.mv((await $.v(C, "StatementDataModNew")), "RatesDataSet")), "FieldByName", ["Ostat"])), "AsCurrency"))]))])));
  if ($.truthy($.eq((await $.mv((await $.mcall((await $.mv((await $.v(C, "StatementDataModNew")), "Extraction_ODSt")), "FieldByName", ["Currencyid"])), "AsCurrency")), 0))) {
    await $.mset((await $.v(C, "QRLabel15")), "Enabled", false);
    await $.mset((await $.v(C, "QRLabel21")), "Enabled", false);
    await $.mset((await $.v(C, "QRRateBeg")), "Enabled", false);
    await $.mset((await $.v(C, "QRRateEnd")), "Enabled", false);
  } else {
    await $.mset((await $.v(C, "QRRateBeg")), "Enabled", true);
    await $.mset((await $.v(C, "QRRateEnd")), "Enabled", true);
    await $.mset((await $.v(C, "QRLabel15")), "Enabled", true);
    await $.mset((await $.v(C, "QRLabel21")), "Enabled", true);
    await $.mset((await $.v(C, "QRLabel15")), "Caption", (await $.call(C, "FormatFloat", ["#,##0.00", (await $.call(C, "ABS", [(await $.mv((await $.mcall((await $.mv((await $.v(C, "StatementDataModNew")), "Extraction_ODSt")), "FieldByName", ["Pok_Ostat"])), "AsCurrency"))]))])));
    await $.mset((await $.v(C, "QRLabel21")), "Caption", (await $.call(C, "FormatFloat", ["#,##0.00", (await $.call(C, "ABS", [(await $.mv((await $.mcall((await $.mv((await $.v(C, "StatementDataModNew")), "Extraction_ODSt")), "FieldByName", ["EndPok_Ostat"])), "AsCurrency"))]))])));
  }
  return L0.result;
}, {"params": ["Sender", "PrintBand"], "kind": "procedure", "ptypes": ["TQRCustomBand", "Boolean"]});
  U.method("TStatementReport", "QRSubDetail1AfterPrint", async function QRSubDetail1AfterPrint(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "bandprinted": $.copyArg(p1), result: undefined};
  await $.fixArgs(L0, ["sender", "bandprinted"]);
  if ($.truthy(((await $.and_(($.eq((await $.mv((await $.mcall((await $.mv((await $.v(C, "StatementDataModNew")), "ExtractionTrans_ODSt")), "FieldByName", ["DEBIT"])), "AsCurrency")), 0)), async () => ($.eq((await $.mv((await $.mcall((await $.mv((await $.v(C, "StatementDataModNew")), "ExtractionTrans_ODSt")), "FieldByName", ["KREDIT"])), "AsCurrency")), 0))))))) {
    await $.mset((await $.v(C, "ChildBand1")), "Enabled", false);
  } else {
    if ($.truthy((await $.and_(($.eq((await $.mv((await $.mcall((await $.mv((await $.v(C, "StatementDataModNew")), "ExtractionTrans_ODSt")), "FieldByName", ["PairCurrencyid"])), "AsInteger")), 0)), async () => ($.eq((await $.mv((await $.mcall((await $.mv((await $.v(C, "StatementDataModNew")), "Extraction_ODSt")), "FieldByName", ["Currencyid"])), "AsInteger")), 0)))))) {
      await $.mset((await $.v(C, "ChildBand1")), "Enabled", false);
    } else {
      await $.mset((await $.v(C, "ChildBand1")), "Enabled", true);
    }
  }
  if ($.truthy((await $.and_(($.eq((await $.mv((await $.mv((await $.v(C, "QRExpr11")), "Value")), "dblResult")), 0)), async () => ($.eq((await $.mv((await $.mv((await $.v(C, "QRExpr12")), "Value")), "dblResult")), 0)))))) {
    await $.mset((await $.v(C, "QRExpr11")), "Enabled", false);
    await $.mset((await $.v(C, "QRExpr12")), "Enabled", false);
  } else {
    if ($.truthy((await $.and_(($.eq((await $.mv((await $.mv((await $.v(C, "QRExpr2")), "Value")), "dblResult")), (await $.mv((await $.mv((await $.v(C, "QRExpr11")), "Value")), "dblResult")))), async () => ($.eq((await $.mv((await $.mv((await $.v(C, "QRExpr1")), "Value")), "dblResult")), (await $.mv((await $.mv((await $.v(C, "QRExpr12")), "Value")), "dblResult")))))))) {
      await $.mset((await $.v(C, "QRExpr11")), "Enabled", false);
      await $.mset((await $.v(C, "QRExpr12")), "Enabled", false);
    } else {
      await $.mset((await $.v(C, "QRExpr11")), "Enabled", true);
      await $.mset((await $.v(C, "QRExpr12")), "Enabled", true);
    }
  }
  return L0.result;
}, {"params": ["Sender", "BandPrinted"], "kind": "procedure", "ptypes": ["TQRCustomBand", "Boolean"]});
  U.method("TStatementReport", "DetailBand1AfterPrint", async function DetailBand1AfterPrint(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "bandprinted": $.copyArg(p1), result: undefined};
  await $.fixArgs(L0, ["sender", "bandprinted"]);
  await $.mcall((await $.v(C, "QRExpr1")), "Reset", []);
  await $.mcall((await $.v(C, "QRExpr2")), "Reset", []);
  await $.mcall((await $.v(C, "QRExpr11")), "Reset", []);
  await $.mcall((await $.v(C, "QRExpr12")), "Reset", []);
  return L0.result;
}, {"params": ["Sender", "BandPrinted"], "kind": "procedure", "ptypes": ["TQRCustomBand", "Boolean"]});
  return U;
}
