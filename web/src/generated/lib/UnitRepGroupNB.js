// Generated from UnitRepGroupNB.pas by pas2js — do not edit by hand; regenerate instead.
/* eslint-disable */
// @ts-nocheck

export default function define($) {
  const U = $.unit("UnitRepGroupNB", ["Windows", "SysUtils", "Messages", "Classes", "Graphics", "Controls", "StdCtrls", "ExtCtrls", "Forms", "Quickrpt", "QRCtrls", "UnitData", "sboapiDataModuleImpl", "SBTranslateProc"]);
  const C = [U];
  U.defClass("TQRepGroupAll", "TQuickRep", {"qrbandsummary": {"name": "QRBandSummary", "type": "TQRBand"}, "qrexprfirst_pricea": {"name": "QRExprFirst_PriceA", "type": "TQRExpr"}, "qrlabelendsum": {"name": "QRLabelEndSum", "type": "TQRLabel"}, "qrexprremaindera": {"name": "QRExprRemainderA", "type": "TQRExpr"}, "qrexprall_amorta": {"name": "QRExprAll_AmortA", "type": "TQRExpr"}, "qrexpramorta": {"name": "QRExprAmortA", "type": "TQRExpr"}, "detailband": {"name": "DetailBand", "type": "TQRBand"}, "dbtextwaresname": {"name": "DBTextWaresName", "type": "TQRDBText"}, "dbtextinvdate": {"name": "DBTextInvDate", "type": "TQRDBText"}, "dbtextfirst_price": {"name": "DBTextFirst_Price", "type": "TQRDBText"}, "dbtextremainder": {"name": "DBTextRemainder", "type": "TQRDBText"}, "dbtextall_amort": {"name": "DBTextAll_Amort", "type": "TQRDBText"}, "dbtexamort": {"name": "DBTexAmort", "type": "TQRDBText"}, "dbtextpercent": {"name": "DBTextPercent", "type": "TQRDBText"}, "qrband1": {"name": "QRBand1", "type": "TQRBand"}, "qrlabelwaresname": {"name": "QRLabelWaresName", "type": "TQRLabel"}, "qrlabelinvdate": {"name": "QRLabelInvDate", "type": "TQRLabel"}, "qrlabelpercent": {"name": "QRLabelPercent", "type": "TQRLabel"}, "qrlabelfirst_price": {"name": "QRLabelFirst_Price", "type": "TQRLabel"}, "qrlabelremainder": {"name": "QRLabelRemainder", "type": "TQRLabel"}, "qrlabelall_amort": {"name": "QRLabelAll_Amort", "type": "TQRLabel"}, "qrlabelamort": {"name": "QRLabelAmort", "type": "TQRLabel"}, "qrlabelred": {"name": "QRLabelRED", "type": "TQRLabel"}}, {});
  U.init(async () => {
    U.var_("QRepGroupAll", null, "TQRepGroupAll");
  });
  U.method("TQRepGroupAll", "QuickRepBeforePrint", async function QuickRepBeforePrint(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "printreport": $.asRef(p1), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.stmt((await $.mcall((await $.v(C, "SBTranslateProc")), "TranslateAllCompQuickRep", [Self, (await $.mv((await $.v(C, "sboapiDataModule")), "OrPack_SL"))])));
  return L0.result;
}, {"params": ["Sender", "PrintReport"], "kind": "procedure", "ptypes": ["TCustomQuickRep", "Boolean"]});
  return U;
}
