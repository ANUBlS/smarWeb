// Generated from UnitRepGroupNL.pas by pas2js — do not edit by hand; regenerate instead.
/* eslint-disable */
// @ts-nocheck

export default function define($) {
  const U = $.unit("UnitRepGroupNL", ["Windows", "SysUtils", "Messages", "Classes", "Graphics", "Controls", "StdCtrls", "ExtCtrls", "Forms", "Quickrpt", "QRCtrls", "UnitData", "sboapiDataModuleImpl", "SBTranslateProc"]);
  const C = [U];
  U.defClass("TQRepGroupAllNL", "TQuickRep", {"qrbandsummarynl": {"name": "QRBandSummaryNL", "type": "TQRBand"}, "qrexprfirst_priceanl": {"name": "QRExprFirst_PriceANL", "type": "TQRExpr"}, "qrlabelendsumnl": {"name": "QRLabelEndSumNL", "type": "TQRLabel"}, "qrexprremainderanl": {"name": "QRExprRemainderANL", "type": "TQRExpr"}, "qrexprall_amortanl": {"name": "QRExprAll_AmortANL", "type": "TQRExpr"}, "qrexpramortanl": {"name": "QRExprAmortANL", "type": "TQRExpr"}, "detailbandnl": {"name": "DetailBandNL", "type": "TQRBand"}, "dbtextwaresnamenl": {"name": "DBTextWaresNameNL", "type": "TQRDBText"}, "dbtextinvdatenl": {"name": "DBTextInvDateNL", "type": "TQRDBText"}, "dbtextfirst_pricenl": {"name": "DBTextFirst_PriceNL", "type": "TQRDBText"}, "dbtextremaindernl": {"name": "DBTextRemainderNL", "type": "TQRDBText"}, "dbtextall_amortnl": {"name": "DBTextAll_AmortNL", "type": "TQRDBText"}, "dbtexamortnl": {"name": "DBTexAmortNL", "type": "TQRDBText"}, "dbtextpercentnl": {"name": "DBTextPercentNL", "type": "TQRDBText"}, "qrbandnl": {"name": "QRBandNL", "type": "TQRBand"}, "qrlabelwaresnamenl": {"name": "QRLabelWaresNameNL", "type": "TQRLabel"}, "qrlabelinvdatenl": {"name": "QRLabelInvDateNL", "type": "TQRLabel"}, "qrlabelpercentnl": {"name": "QRLabelPercentNL", "type": "TQRLabel"}, "qrlabelfirst_pricenl": {"name": "QRLabelFirst_PriceNL", "type": "TQRLabel"}, "qrlabelremaindernl": {"name": "QRLabelRemainderNL", "type": "TQRLabel"}, "qrlabelall_amortnl": {"name": "QRLabelAll_AmortNL", "type": "TQRLabel"}, "qrlabelamortnl": {"name": "QRLabelAmortNL", "type": "TQRLabel"}, "qrlabelder": {"name": "QRLabelDER", "type": "TQRLabel"}, "qrlabel1": {"name": "QRLabel1", "type": "TQRLabel"}, "qrdbtext1": {"name": "QRDBText1", "type": "TQRDBText"}, "qrexpr1": {"name": "QRExpr1", "type": "TQRExpr"}}, {});
  U.init(async () => {
    U.var_("QRepGroupAllNL", null, "TQRepGroupAllNL");
  });
  U.method("TQRepGroupAllNL", "QuickRepBeforePrint", async function QuickRepBeforePrint(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "printreport": $.asRef(p1), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.stmt((await $.mcall((await $.v(C, "SBTranslateProc")), "TranslateAllCompQuickRep", [Self, (await $.mv((await $.v(C, "sboapiDataModule")), "OrPack_SL"))])));
  return L0.result;
}, {"params": ["Sender", "PrintReport"], "kind": "procedure", "ptypes": ["TCustomQuickRep", "Boolean"]});
  return U;
}
