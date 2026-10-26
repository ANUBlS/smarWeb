// Generated from OrderReportUnit.pas by pas2js — do not edit by hand; regenerate instead.
/* eslint-disable */
// @ts-nocheck

export default function define($) {
  const U = $.unit("OrderReportUnit", ["Windows", "SysUtils", "Messages", "Classes", "Graphics", "Controls", "StdCtrls", "ExtCtrls", "Forms", "Quickrpt", "QRCtrls", "OrderDataModuleUnit", "sboapiDataModuleImpl", "SBTranslateProc"]);
  const C = [U];
  U.defClass("TOrderRpt", "TQuickRep", {"pageheaderband1": {"name": "PageHeaderBand1", "type": "TQRBand"}, "qrlabel1": {"name": "QRLabel1", "type": "TQRLabel"}, "qrlcontractnum": {"name": "QRLContractNum", "type": "TQRLabel"}, "qrldate": {"name": "QRLDate", "type": "TQRLabel"}, "qrband1": {"name": "QRBand1", "type": "TQRBand"}, "qrchildband1": {"name": "QRChildBand1", "type": "TQRChildBand"}, "qrmemo": {"name": "QRMemo", "type": "TQRMemo"}, "qrlabel2": {"name": "QRLabel2", "type": "TQRLabel"}, "qrdbtext1": {"name": "QRDBText1", "type": "TQRDBText"}, "qrlabel3": {"name": "QRLabel3", "type": "TQRLabel"}, "qrlabel4": {"name": "QRLabel4", "type": "TQRLabel"}, "qrlabel5": {"name": "QRLabel5", "type": "TQRLabel"}, "chef": {"name": "Chef", "type": "TQRLabel"}, "creditchef": {"name": "CreditChef", "type": "TQRLabel"}, "manager": {"name": "Manager", "type": "TQRLabel"}}, {});
  U.init(async () => {
    U.var_("OrderRpt", null, "TOrderRpt");
  });
  U.method("TOrderRpt", "QuickRepBeforePrint", async function QuickRepBeforePrint(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "printreport": $.asRef(p1), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.stmt((await $.mcall((await $.v(C, "SBTranslateProc")), "TranslateAllCompQuickRep", [Self, (await $.mv((await $.v(C, "sboapiDataModule")), "OrPack_SL"))])));
  return L0.result;
}, {"params": ["Sender", "PrintReport"], "kind": "procedure", "ptypes": ["TCustomQuickRep", "Boolean"]});
  return U;
}
