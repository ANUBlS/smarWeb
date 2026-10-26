// Generated from UnitHuquqi.pas by pas2js — do not edit by hand; regenerate instead.
/* eslint-disable */
// @ts-nocheck

export default function define($) {
  const U = $.unit("UnitHuquqi", ["Windows", "SysUtils", "Messages", "Classes", "Graphics", "Controls", "StdCtrls", "ExtCtrls", "dialogs", "Forms", "Quickrpt", "QRCtrls", "DB", "OracleData", "sboapiDataModuleImpl", "SBTranslateProc", "GoAml_serviceImpl"]);
  const C = [U];
  U.defClass("TrepH", "TQuickRep", {"qrshape2": {"name": "QRShape2", "type": "TQRShape"}, "qrsubdetail1": {"name": "QRSubDetail1", "type": "TQRSubDetail"}, "qrloopband1": {"name": "QRLoopBand1", "type": "TQRLoopBand"}, "qrmemo1": {"name": "QRMemo1", "type": "TQRMemo"}, "qrlabel1": {"name": "QRLabel1", "type": "TQRLabel"}, "qrlabel2": {"name": "QRLabel2", "type": "TQRLabel"}, "qrlabel3": {"name": "QRLabel3", "type": "TQRLabel"}, "qrlabel4": {"name": "QRLabel4", "type": "TQRLabel"}, "qrlabel7": {"name": "QRLabel7", "type": "TQRLabel"}, "qrshape3": {"name": "QRShape3", "type": "TQRShape"}, "qrshape1": {"name": "QRShape1", "type": "TQRShape"}, "qrshape4": {"name": "QRShape4", "type": "TQRShape"}, "qrshape5": {"name": "QRShape5", "type": "TQRShape"}, "qrshape6": {"name": "QRShape6", "type": "TQRShape"}, "qrshape7": {"name": "QRShape7", "type": "TQRShape"}, "qrshape8": {"name": "QRShape8", "type": "TQRShape"}, "qrshape9": {"name": "QRShape9", "type": "TQRShape"}, "qrshape10": {"name": "QRShape10", "type": "TQRShape"}, "qrlabel9": {"name": "QRLabel9", "type": "TQRLabel"}, "t": {"name": "T", "type": "TQRLabel"}, "qrlabel11": {"name": "QRLabel11", "type": "TQRLabel"}, "qrlabel12": {"name": "QRLabel12", "type": "TQRLabel"}, "qrlabel13": {"name": "QRLabel13", "type": "TQRLabel"}, "qrlabel14": {"name": "QRLabel14", "type": "TQRLabel"}, "qrlabel15": {"name": "QRLabel15", "type": "TQRLabel"}, "qrlabel16": {"name": "QRLabel16", "type": "TQRLabel"}, "qrshape11": {"name": "QRShape11", "type": "TQRShape"}, "qrshape12": {"name": "QRShape12", "type": "TQRShape"}, "qrshape13": {"name": "QRShape13", "type": "TQRShape"}, "qrlabel10": {"name": "QRLabel10", "type": "TQRLabel"}, "qrlabel17": {"name": "QRLabel17", "type": "TQRLabel"}, "qrshape14": {"name": "QRShape14", "type": "TQRShape"}, "qrshape15": {"name": "QRShape15", "type": "TQRShape"}, "qrlabel18": {"name": "QRLabel18", "type": "TQRLabel"}, "qrlabel19": {"name": "QRLabel19", "type": "TQRLabel"}, "qrlabel20": {"name": "QRLabel20", "type": "TQRLabel"}}, {});
  U.init(async () => {
    U.var_("repH", null, "TrepH");
  });
  U.method("TrepH", "QuickRepBeforePrint", async function QuickRepBeforePrint(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "printreport": $.asRef(p1), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.stmt((await $.mcall((await $.v(C, "SBTranslateProc")), "TranslateAllCompQuickRep", [Self, (await $.mv((await $.v(C, "sboapiDataModule")), "OrPack_SL"))])));
  return L0.result;
}, {"params": ["Sender", "PrintReport"], "kind": "procedure", "ptypes": ["TCustomQuickRep", "Boolean"]});
  return U;
}
