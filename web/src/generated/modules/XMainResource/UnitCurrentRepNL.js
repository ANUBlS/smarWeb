// Generated from UnitCurrentRepNL.pas by pas2js — do not edit by hand; regenerate instead.
/* eslint-disable */
// @ts-nocheck

export default function define($) {
  const U = $.unit("UnitCurrentRepNL", ["Windows", "Messages", "SysUtils", "Classes", "Graphics", "Controls", "Forms", "Dialogs", "QuickRpt", "Qrctrls", "ExtCtrls", "QRExport", "UnitData", "quickrep", "sboapiDataModuleImpl", "SBTranslateProc"]);
  const C = [U];
  U.defClass("TFormCurrentRepNL", "TForm", {"quickrepnl": {"name": "QuickRepNL", "type": "TQuickRep"}, "detailband": {"name": "DetailBand", "type": "TQRBand"}, "dbtextwaresname": {"name": "DBTextWaresName", "type": "TQRDBText"}, "dbtextinvdate": {"name": "DBTextInvDate", "type": "TQRDBText"}, "dbtextfirst_price": {"name": "DBTextFirst_Price", "type": "TQRDBText"}, "dbtextall_amort": {"name": "DBTextAll_Amort", "type": "TQRDBText"}, "dbtexamort": {"name": "DBTexAmort", "type": "TQRDBText"}, "dbtextpercent": {"name": "DBTextPercent", "type": "TQRDBText"}, "qrgroupheader": {"name": "QRGroupHeader", "type": "TQRGroup"}, "qrlabelgroupname": {"name": "QRLabelGroupName", "type": "TQRLabel"}, "dbtextgroupname": {"name": "DBTextGroupName", "type": "TQRDBText"}, "qrbandgroupfooter": {"name": "QRBandGroupFooter", "type": "TQRBand"}, "qrexprfirst_price": {"name": "QRExprFirst_Price", "type": "TQRExpr"}, "qrexprall_amort": {"name": "QRExprAll_Amort", "type": "TQRExpr"}, "qrexpramort": {"name": "QRExprAmort", "type": "TQRExpr"}, "qrbandsummary": {"name": "QRBandSummary", "type": "TQRBand"}, "qrexprfirst_pricea": {"name": "QRExprFirst_PriceA", "type": "TQRExpr"}, "qrlabelendsum": {"name": "QRLabelEndSum", "type": "TQRLabel"}, "qrexprall_amorta": {"name": "QRExprAll_AmortA", "type": "TQRExpr"}, "qrexpramorta": {"name": "QRExprAmortA", "type": "TQRExpr"}, "childbandgroup": {"name": "ChildBandGroup", "type": "TQRChildBand"}, "qrlabelwaresname": {"name": "QRLabelWaresName", "type": "TQRLabel"}, "qrlabelinvdate": {"name": "QRLabelInvDate", "type": "TQRLabel"}, "qrlabelpercent": {"name": "QRLabelPercent", "type": "TQRLabel"}, "qrlabelfirst_price": {"name": "QRLabelFirst_Price", "type": "TQRLabel"}, "qrlabelall_amort": {"name": "QRLabelAll_Amort", "type": "TQRLabel"}, "qrlabelamort": {"name": "QRLabelAmort", "type": "TQRLabel"}, "qrlabelremainder": {"name": "QRLabelRemainder", "type": "TQRLabel"}, "dbtextremainder": {"name": "DBTextRemainder", "type": "TQRDBText"}, "qrexprremainder": {"name": "QRExprRemainder", "type": "TQRExpr"}, "qrexprremaindera": {"name": "QRExprRemainderA", "type": "TQRExpr"}, "qrlabel1": {"name": "QRLabel1", "type": "TQRLabel"}, "titleband1": {"name": "TitleBand1", "type": "TQRBand"}, "qrdbtext2": {"name": "QRDBText2", "type": "TQRDBText"}, "qrlabel3": {"name": "QRLabel3", "type": "TQRLabel"}, "qrlabelt": {"name": "QRLabelT", "type": "TQRLabel"}, "qrlabel4": {"name": "QRLabel4", "type": "TQRLabel"}, "qrshape1": {"name": "QRShape1", "type": "TQRShape"}, "qrlabel2": {"name": "QRLabel2", "type": "TQRLabel"}, "qrexprc1": {"name": "QRExprC1", "type": "TQRExpr"}}, {});
  U.init(async () => {
    U.var_("FormCurrentRepNL", null, "TFormCurrentRepNL");
  });
  U.method("TFormCurrentRepNL", "QuickRepNLBeforePrint", async function QuickRepNLBeforePrint(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "printreport": $.asRef(p1), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mset((await $.v(C, "QRLabelT")), "Caption", ((await $.mcall((await $.mv((await $.v(C, "DataModWares")), "SB_MAIN_RESOURCE")), "CallDateFunction", ["last_calc_date", []]))));
  await $.stmt((await $.mcall((await $.v(C, "SBTranslateProc")), "TranslateAllCompQuickRep", [(await $.v(C, "QuickRepNL")), (await $.mv((await $.v(C, "sboapiDataModule")), "OrPack_SL"))])));
  return L0.result;
}, {"params": ["Sender", "PrintReport"], "kind": "procedure", "ptypes": ["TCustomQuickRep", "Boolean"]});
  U.method("TFormCurrentRepNL", "ChildBandGroupAfterPrint", async function ChildBandGroupAfterPrint(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "bandprinted": $.copyArg(p1), result: undefined};
  await $.fixArgs(L0, ["sender", "bandprinted"]);
  await $.mcall((await $.v(C, "QRExprC1")), "Reset", []);
  return L0.result;
}, {"params": ["Sender", "BandPrinted"], "kind": "procedure", "ptypes": ["TQRCustomBand", "Boolean"]});
  return U;
}
