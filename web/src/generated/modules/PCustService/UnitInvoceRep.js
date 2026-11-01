// Generated from UnitInvoceRep.pas by pas2js — do not edit by hand; regenerate instead.
/* eslint-disable */
// @ts-nocheck

export default function define($) {
  const U = $.unit("UnitInvoceRep", ["Windows", "SysUtils", "Messages", "Classes", "Graphics", "Controls", "StdCtrls", "ExtCtrls", "Forms", "Quickrpt", "QRCtrls", "Db", "OracleData", "SBTranslateProc", "sboapiDataModuleImpl", "Unitqaime"]);
  const C = [U];
  U.defClass("TQRptInvoceRep", "TQuickRep", {"qrband1": {"name": "QRBand1", "type": "TQRBand"}, "qrdbtext1": {"name": "QRDBText1", "type": "TQRDBText"}, "qrlabel1": {"name": "QRLabel1", "type": "TQRLabel"}, "qrlabel2": {"name": "QRLabel2", "type": "TQRLabel"}, "qrlabel3": {"name": "QRLabel3", "type": "TQRLabel"}, "qrlabel4": {"name": "QRLabel4", "type": "TQRLabel"}, "qrlabel5": {"name": "QRLabel5", "type": "TQRLabel"}, "qrlabel6": {"name": "QRLabel6", "type": "TQRLabel"}, "qrlabel7": {"name": "QRLabel7", "type": "TQRLabel"}, "qrlabel8": {"name": "QRLabel8", "type": "TQRLabel"}, "qrlabel9": {"name": "QRLabel9", "type": "TQRLabel"}, "qrdbtext2": {"name": "QRDBText2", "type": "TQRDBText"}, "qrdbtext3": {"name": "QRDBText3", "type": "TQRDBText"}, "qrdbtext4": {"name": "QRDBText4", "type": "TQRDBText"}, "qrdbtext5": {"name": "QRDBText5", "type": "TQRDBText"}, "qrdbtext6": {"name": "QRDBText6", "type": "TQRDBText"}, "qrdbtext7": {"name": "QRDBText7", "type": "TQRDBText"}, "qrdbtext8": {"name": "QRDBText8", "type": "TQRDBText"}, "qrdbtext9": {"name": "QRDBText9", "type": "TQRDBText"}, "qrdbtext10": {"name": "QRDBText10", "type": "TQRDBText"}, "ods_cap": {"name": "ods_cap", "type": "TOracleDataSet"}, "ods_capinv_num": {"name": "ods_capINV_NUM", "type": "TWideStringField"}, "ods_capinv_date": {"name": "ods_capINV_DATE", "type": "TDateTimeField"}, "ods_captrans_id": {"name": "ods_capTRANS_ID", "type": "TFloatField"}, "ods_captrans_date": {"name": "ods_capTRANS_DATE", "type": "TDateTimeField"}, "ods_cappar1": {"name": "ods_capPAR1", "type": "TWideStringField"}, "ods_cappar2": {"name": "ods_capPAR2", "type": "TWideStringField"}, "ods_cappar3": {"name": "ods_capPAR3", "type": "TWideStringField"}, "ods_cappar4": {"name": "ods_capPAR4", "type": "TWideStringField"}, "ods_cappar5": {"name": "ods_capPAR5", "type": "TWideStringField"}, "ods_cappar6": {"name": "ods_capPAR6", "type": "TWideStringField"}, "ods_cappar12": {"name": "ods_capPAR12", "type": "TFloatField"}, "ods_captarif": {"name": "ods_capTARIF", "type": "TWideStringField"}, "ods_cappar11": {"name": "ods_capPAR11", "type": "TFloatField"}, "ods_cappar13": {"name": "ods_capPAR13", "type": "TFloatField"}, "ods_cappar7": {"name": "ods_capPAR7", "type": "TWideStringField"}, "ods_cappar8": {"name": "ods_capPAR8", "type": "TWideStringField"}, "dsrc_cap": {"name": "dsrc_cap", "type": "TDataSource"}}, {});
  U.init(async () => {
    U.var_("QRptInvoceRep", null, "TQRptInvoceRep");
  });
  U.method("TQRptInvoceRep", "QuickRepBeforePrint", async function QuickRepBeforePrint(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "printreport": $.asRef(p1), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.stmt((await $.mcall((await $.v(C, "SBTranslateProc")), "TranslateAllCompQuickRep", [Self, (await $.mv((await $.v(C, "sboapiDataModule")), "OrPack_SL"))])));
  return L0.result;
}, {"params": ["Sender", "PrintReport"], "kind": "procedure", "ptypes": ["TCustomQuickRep", "Boolean"]});
  return U;
}
