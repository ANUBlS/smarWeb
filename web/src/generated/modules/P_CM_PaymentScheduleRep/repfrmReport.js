// Generated from repfrmReport.pas by pas2js — do not edit by hand; regenerate instead.
/* eslint-disable */
// @ts-nocheck

export default function define($) {
  const U = $.unit("repfrmReport", ["Windows", "Messages", "SysUtils", "Classes", "Graphics", "Controls", "Forms", "Dialogs", "ExtCtrls", "QuickRpt", "Qrctrls", "repScheduleDataModuleImpl"]);
  const C = [U];
  U.defClass("TfrmRep", "TForm", {"qrpfrmrep": {"name": "QrpfrmRep", "type": "TQuickRep"}, "qrband1": {"name": "QRBand1", "type": "TQRBand"}, "qrdbtext1": {"name": "QRDBText1", "type": "TQRDBText"}, "customername": {"name": "CustomerName", "type": "TQRDBText"}, "qrlabel1": {"name": "QRLabel1", "type": "TQRLabel"}, "qrlabel2": {"name": "QRLabel2", "type": "TQRLabel"}, "qrlabel3": {"name": "QRLabel3", "type": "TQRLabel"}, "qrlabel4": {"name": "QRLabel4", "type": "TQRLabel"}, "qrlabel5": {"name": "QRLabel5", "type": "TQRLabel"}, "qrlabel6": {"name": "QRLabel6", "type": "TQRLabel"}, "qrlabel7": {"name": "QRLabel7", "type": "TQRLabel"}, "qrlabel8": {"name": "QRLabel8", "type": "TQRLabel"}, "qrlabel9": {"name": "QRLabel9", "type": "TQRLabel"}, "facticalint": {"name": "FacticalInt", "type": "TQRDBText"}, "monthpayment": {"name": "MonthPayment", "type": "TQRDBText"}, "creditdate": {"name": "Creditdate", "type": "TQRDBText"}, "annint": {"name": "AnnInt", "type": "TQRDBText"}, "period": {"name": "Period", "type": "TQRDBText"}, "creditamount": {"name": "Creditamount", "type": "TQRDBText"}, "loanaccno": {"name": "Loanaccno", "type": "TQRDBText"}, "custaccno": {"name": "CustAccno", "type": "TQRDBText"}, "qrdbimage2": {"name": "QRDBImage2", "type": "TQRDBImage"}, "qrgroup1": {"name": "QRGroup1", "type": "TQRGroup"}, "qrlabel10": {"name": "QRLabel10", "type": "TQRLabel"}, "qrlabel11": {"name": "QRLabel11", "type": "TQRLabel"}, "qrlabel12": {"name": "QRLabel12", "type": "TQRLabel"}, "qrshape1": {"name": "QRShape1", "type": "TQRShape"}, "qrlabel14": {"name": "QRLabel14", "type": "TQRLabel"}, "qrlabel15": {"name": "QRLabel15", "type": "TQRLabel"}, "qrband2": {"name": "QRBand2", "type": "TQRBand"}, "seqno": {"name": "SeqNo", "type": "TQRDBText"}, "qrdbtext8": {"name": "QRDBText8", "type": "TQRDBText"}, "qrdbtext9": {"name": "QRDBText9", "type": "TQRDBText"}, "qrdbtext5": {"name": "QRDBText5", "type": "TQRDBText"}, "qrdbtext2": {"name": "QRDBText2", "type": "TQRDBText"}, "fullintpayment": {"name": "FullIntPayment", "type": "TQRLabel"}}, {});
  U.init(async () => {
    U.var_("frmRep", null, "TfrmRep");
  });
  U.method("TfrmRep", "CalcFullIntPayment", async function CalcFullIntPayment(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: 0};
  L0["result"] = 0;
  {
    const $t1 = (await $.wobj(C, "ScheduleDataModule"));
    const $t2 = (await $.wv([$t1], "ScheduleData", C, false));
    await $.stmt($.wcall([$t1, $t2], "First", [], C));
    while ($.truthy($.not((await $.wv([$t1, $t2], "EOF", C, false))))) {
      await $.wset([$t1, $t2], "Result", $.add((await $.wv([$t1, $t2], "Result", { get: async () => L0["result"], set: async (v) => { L0["result"] = v; }, local: true }, false)), (await $.mv((await $.wcall([$t1, $t2], "FieldbyName", ["INTEREST"], C)), "AsFloat"))), { get: async () => L0["result"], set: async (v) => { L0["result"] = v; }, local: true });
      await $.stmt($.wcall([$t1, $t2], "next", [], C));
      await $.tick();
    }
  }
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TfrmRep", "QrpfrmRepPreview", async function QrpfrmRepPreview(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  return U;
}
