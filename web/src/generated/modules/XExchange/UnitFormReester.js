// Generated from UnitFormReester.pas by pas2js — do not edit by hand; regenerate instead.
/* eslint-disable */
// @ts-nocheck

export default function define($) {
  const U = $.unit("UnitFormReester", ["Windows", "Messages", "SysUtils", "Variants", "Classes", "Graphics", "Controls", "Forms", "Dialogs", "ExtCtrls", "QuickRpt", "qrpBaseCtrls", "QRCtrls", "UnitDateExch", "sboapiDataModuleImpl", "SBTranslateProc"]);
  const C = [U];
  U.defClass("TFormReestr", "TForm", {"qrpquickrep1": {"name": "QRPQuickrep1", "type": "TQRPQuickrep"}, "titleband1": {"name": "TitleBand1", "type": "TQRBand"}, "qrlabel2": {"name": "QRLabel2", "type": "TQRLabel"}, "qrlabel3": {"name": "QRLabel3", "type": "TQRLabel"}, "qrlabel5": {"name": "QRLabel5", "type": "TQRLabel"}, "qrlabel6": {"name": "QRLabel6", "type": "TQRLabel"}, "qrmemo1": {"name": "QRMemo1", "type": "TQRMemo"}, "qrshape1": {"name": "QRShape1", "type": "TQRShape"}, "qrshape3": {"name": "QRShape3", "type": "TQRShape"}, "qrshape5": {"name": "QRShape5", "type": "TQRShape"}, "qrband1": {"name": "QRBand1", "type": "TQRBand"}, "qrband2": {"name": "QRBand2", "type": "TQRBand"}, "qrmemo2": {"name": "QRMemo2", "type": "TQRMemo"}, "qrshape2": {"name": "QRShape2", "type": "TQRShape"}, "qrshape4": {"name": "QRShape4", "type": "TQRShape"}, "qrshape6": {"name": "QRShape6", "type": "TQRShape"}, "qrmemo3": {"name": "QRMemo3", "type": "TQRMemo"}, "qrshape7": {"name": "QRShape7", "type": "TQRShape"}, "qrshape8": {"name": "QRShape8", "type": "TQRShape"}, "qrshape9": {"name": "QRShape9", "type": "TQRShape"}, "qrshape10": {"name": "QRShape10", "type": "TQRShape"}, "qrshape11": {"name": "QRShape11", "type": "TQRShape"}, "qrshape12": {"name": "QRShape12", "type": "TQRShape"}, "qrdbtext1": {"name": "QRDBText1", "type": "TQRDBText"}, "qrdbtext2": {"name": "QRDBText2", "type": "TQRDBText"}, "qrdbtext3": {"name": "QRDBText3", "type": "TQRDBText"}, "qrdbtext4": {"name": "QRDBText4", "type": "TQRDBText"}, "qrdbtext5": {"name": "QRDBText5", "type": "TQRDBText"}, "qrdbtext6": {"name": "QRDBText6", "type": "TQRDBText"}, "qrdbtext7": {"name": "QRDBText7", "type": "TQRDBText"}, "qrshape13": {"name": "QRShape13", "type": "TQRShape"}, "qrshape14": {"name": "QRShape14", "type": "TQRShape"}, "qrshape15": {"name": "QRShape15", "type": "TQRShape"}, "qrshape16": {"name": "QRShape16", "type": "TQRShape"}, "qrshape17": {"name": "QRShape17", "type": "TQRShape"}, "qrshape18": {"name": "QRShape18", "type": "TQRShape"}, "qrlabel1": {"name": "QRLabel1", "type": "TQRLabel"}, "qrexpr1": {"name": "QRExpr1", "type": "TQRExpr"}, "qrexpr2": {"name": "QRExpr2", "type": "TQRExpr"}}, {});
  U.init(async () => {
    U.var_("FormReestr", null, "TFormReestr");
  });
  U.method("TFormReestr", "QRPQuickrep1BeforePrint", async function QRPQuickrep1BeforePrint(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "printreport": $.asRef(p1), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.stmt((await $.mcall((await $.v(C, "SBTranslateProc")), "TranslateAllCompQuickRep", [(await $.v(C, "QRPQuickrep1")), (await $.mv((await $.v(C, "sboapiDataModule")), "OrPack_SL"))])));
  return L0.result;
}, {"params": ["Sender", "PrintReport"], "kind": "procedure", "ptypes": ["TCustomQuickRep", "Boolean"]});
  return U;
}
