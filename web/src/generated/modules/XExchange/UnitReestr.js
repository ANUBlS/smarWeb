// Generated from UnitReestr.pas by pas2js — do not edit by hand; regenerate instead.
/* eslint-disable */
// @ts-nocheck

export default function define($) {
  const U = $.unit("UnitReestr", ["Windows", "SysUtils", "Messages", "Classes", "Graphics", "Controls", "StdCtrls", "ExtCtrls", "Forms", "Quickrpt", "QRCtrls", "UnitDateExch", "sboapiDataModuleImpl", "SBTranslateProc", "UnitFormReester", "UnitReestrEnd"]);
  const C = [U];
  U.defClass("TFormReestrReport", "TQuickRep", {"qrband1": {"name": "QRBand1", "type": "TQRBand"}, "qrlabel2": {"name": "QRLabel2", "type": "TQRLabel"}, "qrdatereestr": {"name": "QRDateReestr", "type": "TQRLabel"}, "qrbankname": {"name": "QRBankName", "type": "TQRLabel"}, "detailband1": {"name": "DetailBand1", "type": "TQRBand"}, "qrshape3": {"name": "QRShape3", "type": "TQRShape"}, "qrshape4": {"name": "QRShape4", "type": "TQRShape"}, "qrdbtext1": {"name": "QRDBText1", "type": "TQRDBText"}, "qrshape5": {"name": "QRShape5", "type": "TQRShape"}, "qrdbtext2": {"name": "QRDBText2", "type": "TQRDBText"}, "qrshape1": {"name": "QRShape1", "type": "TQRShape"}, "qrshape6": {"name": "QRShape6", "type": "TQRShape"}, "qrlabel1": {"name": "QRLabel1", "type": "TQRLabel"}, "qrcompositereport1": {"name": "QRCompositeReport1", "type": "TQRCompositeReport"}, "qrband2": {"name": "QRBand2", "type": "TQRBand"}}, {});
  U.init(async () => {
    U.var_("FormReestrReport", null, "TFormReestrReport");
  });
  U.method("TFormReestrReport", "QRCompositeReport1AddReports", async function QRCompositeReport1AddReports(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.stmt((await $.mcall((await $.mv((await $.v(C, "QRCompositeReport1")), "Reports")), "Add", [(await $.v(C, "FormReestrReport"))])));
  await $.stmt((await $.mcall((await $.mv((await $.v(C, "QRCompositeReport1")), "Reports")), "Add", [(await $.mv((await $.v(C, "FormReestr")), "QRPQuickrep1"))])));
  await $.stmt((await $.mcall((await $.mv((await $.v(C, "QRCompositeReport1")), "Reports")), "Add", [(await $.mv((await $.v(C, "FormReestrEnd")), "QuickRep1"))])));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFormReestrReport", "QuickRepBeforePrint", async function QuickRepBeforePrint(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "printreport": $.asRef(p1), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.stmt((await $.mcall((await $.v(C, "SBTranslateProc")), "TranslateAllCompQuickRep", [Self, (await $.mv((await $.v(C, "sboapiDataModule")), "OrPack_SL"))])));
  return L0.result;
}, {"params": ["Sender", "PrintReport"], "kind": "procedure", "ptypes": ["TCustomQuickRep", "Boolean"]});
  return U;
}
