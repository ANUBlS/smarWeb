// Generated from MemorialRep.pas by pas2js — do not edit by hand; regenerate instead.
/* eslint-disable */
// @ts-nocheck

export default function define($) {
  const U = $.unit("MemorialRep", ["Windows", "SysUtils", "Messages", "Classes", "Graphics", "Controls", "StdCtrls", "ExtCtrls", "Forms", "Quickrpt", "QRCtrls", "CO_Datamod_impl", "SBTranslateProc", "sboapiDataModuleImpl"]);
  const C = [U];
  U.defClass("TCO_MemorialRep", "TQuickRep", {"qrsubdetail1": {"name": "QRSubDetail1", "type": "TQRSubDetail"}, "qrdbtext6": {"name": "QRDBText6", "type": "TQRDBText"}, "qrdbtext1": {"name": "QRDBText1", "type": "TQRDBText"}, "qrdbtext2": {"name": "QRDBText2", "type": "TQRDBText"}, "qrdbtext14": {"name": "QRDBText14", "type": "TQRDBText"}, "qrdbtext9": {"name": "QRDBText9", "type": "TQRDBText"}, "qrdbtext8": {"name": "QRDBText8", "type": "TQRDBText"}, "qrchildband1": {"name": "QRChildBand1", "type": "TQRChildBand"}, "qrlabeltitle": {"name": "QRLabelTitle", "type": "TQRLabel"}, "qrdbtext5": {"name": "QRDBText5", "type": "TQRDBText"}, "summaryband1": {"name": "SummaryBand1", "type": "TQRBand"}, "qrlabel2": {"name": "QRLabel2", "type": "TQRLabel"}, "qrband1": {"name": "QRBand1", "type": "TQRBand"}, "qrlv": {"name": "QRLV", "type": "TQRLabel"}, "qrlm": {"name": "QRLM", "type": "TQRLabel"}, "qrshape1": {"name": "QRShape1", "type": "TQRShape"}, "qrshape2": {"name": "QRShape2", "type": "TQRShape"}, "qrld": {"name": "QRLD", "type": "TQRLabel"}, "qrshape5": {"name": "QRShape5", "type": "TQRShape"}, "qrlk": {"name": "QRLK", "type": "TQRLabel"}, "qrshape7": {"name": "QRShape7", "type": "TQRShape"}, "qrlmeb": {"name": "QRLMEB", "type": "TQRLabel"}, "qrshape10": {"name": "QRShape10", "type": "TQRShape"}, "qrshape6": {"name": "QRShape6", "type": "TQRShape"}, "qrshape8": {"name": "QRShape8", "type": "TQRShape"}, "qrlabel1": {"name": "QRLabel1", "type": "TQRLabel"}, "qrlabel3": {"name": "QRLabel3", "type": "TQRLabel"}, "qrdbtext11": {"name": "QRDBText11", "type": "TQRDBText"}, "qrlabel5": {"name": "QRLabel5", "type": "TQRLabel"}, "qrdbtext10": {"name": "QRDBText10", "type": "TQRDBText"}, "qrdbtext12": {"name": "QRDBText12", "type": "TQRDBText"}, "qrlxv": {"name": "QRLXV", "type": "TQRLabel"}, "qrlabel4": {"name": "QRLabel4", "type": "TQRLabel"}, "qrdbtext3": {"name": "QRDBText3", "type": "TQRDBText"}, "qrdbtext16": {"name": "QRDBText16", "type": "TQRDBText"}, "qrshape3": {"name": "QRShape3", "type": "TQRShape"}, "qrlabel6": {"name": "QRLabel6", "type": "TQRLabel"}, "qrshape4": {"name": "QRShape4", "type": "TQRShape"}, "c_val": {"name": "c_val", "type": "TQRLabel"}, "qrdbtext7": {"name": "QRDBText7", "type": "TQRDBText"}, "d_name": {"name": "d_name", "type": "TQRLabel"}}, {});
  U.init(async () => {
    U.var_("CO_MemorialRep", null, "TCO_MemorialRep");
  });
  U.method("TCO_MemorialRep", "QuickRepBeforePrint", async function QuickRepBeforePrint(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "printreport": $.asRef(p1), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mset((await $.v(C, "c_val")), "caption", (await $.mv((await $.mcall((await $.mv((await $.v(C, "CO_DataMod")), "Account")), "fieldbyname", ["accval"])), "asstring")));
  await $.mset((await $.v(C, "d_name")), "caption", (await $.mv((await $.mcall((await $.mv((await $.v(C, "CO_DataMod")), "Account")), "fieldbyname", ["accname"])), "asstring")));
  await $.stmt((await $.mcall((await $.v(C, "SBTranslateProc")), "TranslateAllCompQuickRep", [Self, (await $.mv((await $.v(C, "sboapiDataModule")), "OrPack_SL"))])));
  return L0.result;
}, {"params": ["Sender", "PrintReport"], "kind": "procedure", "ptypes": ["TCustomQuickRep", "Boolean"]});
  return U;
}
