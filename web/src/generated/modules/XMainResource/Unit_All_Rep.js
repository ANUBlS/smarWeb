// Generated from Unit_All_Rep.pas by pas2js — do not edit by hand; regenerate instead.
/* eslint-disable */
// @ts-nocheck

export default function define($) {
  const U = $.unit("Unit_All_Rep", ["Windows", "SysUtils", "Messages", "Classes", "Graphics", "Controls", "StdCtrls", "ExtCtrls", "Forms", "Quickrpt", "QRCtrls", "UnitData", "sboapiDataModuleImpl", "SBTranslateProc"]);
  const C = [U];
  U.defClass("TQRep_All", "TQuickRep", {"qrgroupheader": {"name": "QRGroupHeader", "type": "TQRGroup"}, "qrlabelgroupname": {"name": "QRLabelGroupName", "type": "TQRLabel"}, "dbtextgroupname": {"name": "DBTextGroupName", "type": "TQRDBText"}, "childbandgroup": {"name": "ChildBandGroup", "type": "TQRChildBand"}, "qrlabelwaresname": {"name": "QRLabelWaresName", "type": "TQRLabel"}, "qrlabelinvdate": {"name": "QRLabelInvDate", "type": "TQRLabel"}, "qrlabelpercent": {"name": "QRLabelPercent", "type": "TQRLabel"}, "qrlabelfirst_price": {"name": "QRLabelFirst_Price", "type": "TQRLabel"}, "qrlabelremainder": {"name": "QRLabelRemainder", "type": "TQRLabel"}, "qrlabelall_amort": {"name": "QRLabelAll_Amort", "type": "TQRLabel"}, "qrlabelamort": {"name": "QRLabelAmort", "type": "TQRLabel"}, "detailband": {"name": "DetailBand", "type": "TQRBand"}, "dbtextwaresname": {"name": "DBTextWaresName", "type": "TQRDBText"}, "dbtextinvdate": {"name": "DBTextInvDate", "type": "TQRDBText"}, "dbtextfirst_price": {"name": "DBTextFirst_Price", "type": "TQRDBText"}, "dbtextremainder": {"name": "DBTextRemainder", "type": "TQRDBText"}, "dbtextall_amort": {"name": "DBTextAll_Amort", "type": "TQRDBText"}, "dbtexamort": {"name": "DBTexAmort", "type": "TQRDBText"}, "dbtextpercent": {"name": "DBTextPercent", "type": "TQRDBText"}, "qrbandgroupfooter": {"name": "QRBandGroupFooter", "type": "TQRBand"}, "qrexprfirst_price": {"name": "QRExprFirst_Price", "type": "TQRExpr"}, "qrexprremainder": {"name": "QRExprRemainder", "type": "TQRExpr"}, "qrexprall_amort": {"name": "QRExprAll_Amort", "type": "TQRExpr"}, "qrexpramort": {"name": "QRExprAmort", "type": "TQRExpr"}, "qrbandsummary": {"name": "QRBandSummary", "type": "TQRBand"}, "qrexprfirst_pricea": {"name": "QRExprFirst_PriceA", "type": "TQRExpr"}, "qrlabelendsum": {"name": "QRLabelEndSum", "type": "TQRLabel"}, "qrexprremaindera": {"name": "QRExprRemainderA", "type": "TQRExpr"}, "qrexprall_amorta": {"name": "QRExprAll_AmortA", "type": "TQRExpr"}, "qrexpramorta": {"name": "QRExprAmortA", "type": "TQRExpr"}}, {});
  U.init(async () => {
    U.var_("QRep_All", null, "TQRep_All");
  });
  U.method("TQRep_All", "QuickRepBeforePrint", async function QuickRepBeforePrint(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "printreport": $.asRef(p1), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.stmt((await $.mcall((await $.v(C, "SBTranslateProc")), "TranslateAllCompQuickRep", [Self, (await $.mv((await $.v(C, "sboapiDataModule")), "OrPack_SL"))])));
  return L0.result;
}, {"params": ["Sender", "PrintReport"], "kind": "procedure", "ptypes": ["TCustomQuickRep", "Boolean"]});
  return U;
}
