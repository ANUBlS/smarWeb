// Generated from Unit7.pas by pas2js — do not edit by hand; regenerate instead.
/* eslint-disable */
// @ts-nocheck

export default function define($) {
  const U = $.unit("Unit7", ["Windows", "Messages", "SysUtils", "Variants", "Classes", "Graphics", "Controls", "Forms", "Dialogs", "QuickRpt", "QRCtrls", "ExtCtrls", "qrpBaseCtrls", "DB", "OracleData", "StatementFrmImpl", "unitdata", "SBTranslateProc", "sboapiDataModuleImpl"]);
  const C = [U];
  U.defClass("TForm7", "TForm", {"qrpquicact": {"name": "QRPQuicAct", "type": "TQRPQuickrep"}, "qrband1": {"name": "QRBand1", "type": "TQRBand"}, "qrlabel1": {"name": "QRLabel1", "type": "TQRLabel"}, "qrlabellastostat": {"name": "QRLabelLastOstat", "type": "TQRLabel"}, "qrlabelvalend": {"name": "QRLabelValEnd", "type": "TQRLabel"}, "qrlabel3": {"name": "QRLabel3", "type": "TQRLabel"}, "qrmemo1": {"name": "QRMemo1", "type": "TQRMemo"}, "qrmemo2": {"name": "QRMemo2", "type": "TQRMemo"}, "qrlabel13": {"name": "QRLabel13", "type": "TQRLabel"}, "dbtextopendate": {"name": "DBTextOpenDate", "type": "TQRDBText"}, "qrlabel2": {"name": "QRLabel2", "type": "TQRLabel"}, "qrlabel10": {"name": "QRLabel10", "type": "TQRLabel"}, "qrlabel14": {"name": "QRLabel14", "type": "TQRLabel"}, "qrlabel15": {"name": "QRLabel15", "type": "TQRLabel"}, "qrlabel16": {"name": "QRLabel16", "type": "TQRLabel"}, "qrlabel17": {"name": "QRLabel17", "type": "TQRLabel"}, "qrlabel21": {"name": "QRLabel21", "type": "TQRLabel"}, "qrlabel22": {"name": "QRLabel22", "type": "TQRLabel"}, "qrlabel23": {"name": "QRLabel23", "type": "TQRLabel"}, "qrlabel24": {"name": "QRLabel24", "type": "TQRLabel"}, "qrlabel25": {"name": "QRLabel25", "type": "TQRLabel"}, "qrshape1": {"name": "QRShape1", "type": "TQRShape"}, "qrshape2": {"name": "QRShape2", "type": "TQRShape"}, "qrshape3": {"name": "QRShape3", "type": "TQRShape"}, "qrshape4": {"name": "QRShape4", "type": "TQRShape"}, "qrshape5": {"name": "QRShape5", "type": "TQRShape"}, "qrshape6": {"name": "QRShape6", "type": "TQRShape"}, "qrshape7": {"name": "QRShape7", "type": "TQRShape"}, "qrshape8": {"name": "QRShape8", "type": "TQRShape"}, "qrlabel26": {"name": "QRLabel26", "type": "TQRLabel"}, "qrshape9": {"name": "QRShape9", "type": "TQRShape"}, "qrshape10": {"name": "QRShape10", "type": "TQRShape"}, "qrlabel27": {"name": "QRLabel27", "type": "TQRLabel"}, "qrshape11": {"name": "QRShape11", "type": "TQRShape"}, "qrlabel28": {"name": "QRLabel28", "type": "TQRLabel"}, "qrsubdetail": {"name": "QRSubDetail", "type": "TQRSubDetail"}, "qrdbtext3": {"name": "QRDBText3", "type": "TQRDBText"}, "qrdbtext4": {"name": "QRDBText4", "type": "TQRDBText"}, "qrshape13": {"name": "QRShape13", "type": "TQRShape"}, "qrshape14": {"name": "QRShape14", "type": "TQRShape"}, "qrshape15": {"name": "QRShape15", "type": "TQRShape"}, "qrshape16": {"name": "QRShape16", "type": "TQRShape"}, "qrshape17": {"name": "QRShape17", "type": "TQRShape"}, "qrshape18": {"name": "QRShape18", "type": "TQRShape"}, "qrshape19": {"name": "QRShape19", "type": "TQRShape"}, "qrshape20": {"name": "QRShape20", "type": "TQRShape"}, "qrshape21": {"name": "QRShape21", "type": "TQRShape"}, "qrshape22": {"name": "QRShape22", "type": "TQRShape"}, "qrshape23": {"name": "QRShape23", "type": "TQRShape"}, "qrdbtext1": {"name": "QRDBText1", "type": "TQRDBText"}, "qrdbtext2": {"name": "QRDBText2", "type": "TQRDBText"}, "qrdbtext5": {"name": "QRDBText5", "type": "TQRDBText"}, "qrdbtext6": {"name": "QRDBText6", "type": "TQRDBText"}, "qrdbtext7": {"name": "QRDBText7", "type": "TQRDBText"}, "qrdbtext8": {"name": "QRDBText8", "type": "TQRDBText"}, "groupfooterband": {"name": "GroupFooterBand", "type": "TQRBand"}, "qrshapefooter": {"name": "QRShapeFooter", "type": "TQRShape"}, "qrlabel6": {"name": "QRLabel6", "type": "TQRLabel"}, "oracledataset1": {"name": "OracleDataSet1", "type": "TOracleDataSet"}, "oracledataset1tar": {"name": "OracleDataSet1TAR", "type": "TWideStringField"}, "oracledataset1work_place": {"name": "OracleDataSet1WORK_PLACE", "type": "TWideStringField"}, "oracledataset1work_post": {"name": "OracleDataSet1WORK_POST", "type": "TWideStringField"}, "oracledataset1work_adress": {"name": "OracleDataSet1WORK_ADRESS", "type": "TWideStringField"}, "oracledataset1inn": {"name": "OracleDataSet1INN", "type": "TWideStringField"}, "odsxx": {"name": "odsxx", "type": "TOracleDataSet"}, "qrlabel4": {"name": "QRLabel4", "type": "TQRLabel"}, "qrlabel7": {"name": "QRLabel7", "type": "TQRLabel"}, "qrlabel8": {"name": "QRLabel8", "type": "TQRLabel"}, "qrlabel19": {"name": "QRLabel19", "type": "TQRLabel"}, "qrlabel20": {"name": "QRLabel20", "type": "TQRLabel"}, "qrlabel9": {"name": "QRLabel9", "type": "TQRLabel"}, "qrlabel11": {"name": "QRLabel11", "type": "TQRLabel"}, "qrlabel12": {"name": "QRLabel12", "type": "TQRLabel"}, "qrlabel29": {"name": "QRLabel29", "type": "TQRLabel"}, "qrlabel18": {"name": "QRLabel18", "type": "TQRLabel"}, "qrlabel30": {"name": "QRLabel30", "type": "TQRLabel"}, "qrlabel31": {"name": "QRLabel31", "type": "TQRLabel"}, "qrlabel32": {"name": "QRLabel32", "type": "TQRLabel"}, "qrlabel36": {"name": "QRLabel36", "type": "TQRLabel"}, "qrlabel38": {"name": "QRLabel38", "type": "TQRLabel"}, "qrshapebottom": {"name": "QRShapeBottom", "type": "TQRShape"}, "qrexpr1": {"name": "QRExpr1", "type": "TQRExpr"}, "qrexpr2": {"name": "QRExpr2", "type": "TQRExpr"}, "qrexpr4": {"name": "QRExpr4", "type": "TQRExpr"}, "qrexpr3": {"name": "QRExpr3", "type": "TQRExpr"}, "odsxxdat": {"name": "odsxxDAT", "type": "TDateTimeField"}, "odsxxinv_num": {"name": "odsxxINV_NUM", "type": "TWideStringField"}, "odsxxinv_date": {"name": "odsxxINV_DATE", "type": "TDateTimeField"}, "odsxxdebit": {"name": "odsxxDEBIT", "type": "TFloatField"}, "odsxxcredit": {"name": "odsxxCREDIT", "type": "TFloatField"}, "odsxxtrans_date": {"name": "odsxxTRANS_DATE", "type": "TDateTimeField"}, "odsxxpar1": {"name": "odsxxPAR1", "type": "TWideStringField"}, "odsxxpar3": {"name": "odsxxPAR3", "type": "TWideStringField"}, "odsxxpar4": {"name": "odsxxPAR4", "type": "TWideStringField"}, "odsxxpar5": {"name": "odsxxPAR5", "type": "TWideStringField"}, "odsxxpar6": {"name": "odsxxPAR6", "type": "TWideStringField"}, "odsxxpar7": {"name": "odsxxPAR7", "type": "TWideStringField"}, "odsxxpar8": {"name": "odsxxPAR8", "type": "TWideStringField"}, "odsxxpar9": {"name": "odsxxPAR9", "type": "TWideStringField"}, "odsxxmebleg": {"name": "odsxxMEBLEG", "type": "TFloatField"}, "odsxxpar13": {"name": "odsxxPAR13", "type": "TFloatField"}, "odsxxpar14": {"name": "odsxxPAR14", "type": "TFloatField"}, "odsxxpar15": {"name": "odsxxPAR15", "type": "TFloatField"}, "odsxxdebt": {"name": "odsxxDEBT", "type": "TFloatField"}, "odsxxammount": {"name": "odsxxAMMOUNT", "type": "TFloatField"}, "odsxxodenis": {"name": "odsxxODENIS", "type": "TFloatField"}, "odsxxrn": {"name": "odsxxRN", "type": "TFloatField"}, "odsxxpar11": {"name": "odsxxPAR11", "type": "TFloatField"}, "oracledataset2": {"name": "OracleDataSet2", "type": "TOracleDataSet"}, "oracledataset2dat": {"name": "OracleDataSet2DAT", "type": "TDateTimeField"}}, {});
  U.init(async () => {
    U.var_("Form7", null, "TForm7");
  });
  U.method("TForm7", "QRBand1AfterPrint", async function QRBand1AfterPrint(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "bandprinted": $.copyArg(p1), result: undefined};
  await $.fixArgs(L0, ["sender", "bandprinted"]);
  await $.mcall((await $.v(C, "QRExpr1")), "Reset", []);
  await $.mcall((await $.v(C, "QRExpr2")), "Reset", []);
  await $.mcall((await $.v(C, "QRExpr3")), "Reset", []);
  await $.mcall((await $.v(C, "QRExpr4")), "Reset", []);
  return L0.result;
}, {"params": ["Sender", "BandPrinted"], "kind": "procedure", "ptypes": ["TQRCustomBand", "Boolean"]});
  U.method("TForm7", "QRBand1BeforePrint", async function QRBand1BeforePrint(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "printband": $.asRef(p1), result: undefined, "name": '', "text": '', "tarx": '', "acc_no": '', "i": 0, "s": null, "s1": null, "s2": null, "s3": null, "s4": null, "s5": null, "s6": null, "s7": null};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t1 = (await $.v(C, "oracledataset1"));
    await $.stmt($.wcall([$t1], "close", [], C));
    await $.stmt((await $.wcall([$t1], "SetVariable", ["v_id", (await $.mv((await $.mcall((await $.mv((await $.wv([$t1], "DataModSTX", C, false)), "ODSMainState")), "FieldByName", ["CUSTOMERID"])), "AsInteger"))], C)));
    await $.stmt($.wcall([$t1], "open", [], C));
  }
  await $.mset((await $.v(C, "QRLabel10")), "Caption", $.add($.add((await $.mv((await $.v(C, "OracleDataSet1WORK_POST")), "AsString")), "/"), (await $.mv((await $.v(C, "OracleDataSet1TAR")), "AsString"))));
  L0["tarx"] = $.add($.add($.add($.add((await $.mv((await $.v(C, "OracleDataSet1WORK_PLACE")), "AsString")), " -ci  il   tarixli - "), (await $.mv((await $.v(C, "OracleDataSet1WORK_POST")), "AsString"))), "  "), (await $.mv((await $.v(C, "OracleDataSet1WORK_ADRESS")), "AsString")));
  L0["name"] = "         Biz aşağda imza edənlər bir tərəfdən     adsoyad                                    (İcraçı).digər tərəfdən ";
  L0["name"] = (await $.call(C, "StringReplace", [L0["name"], "adsoyad", (await $.mv((await $.mv((await $.v(C, "DataModSTX")), "ODSMainStateACCOUNTNAME")), "asstring")), [(await $.v(C, "rfReplaceAll")), (await $.v(C, "rfIgnoreCase"))]]));
  { const $t2 = await $.iset((await $.mv((await $.v(C, "QRMemo1")), "Lines")), [0], L0["name"]); if ($t2 !== undefined) { await $.mset((await $.v(C, "QRMemo1")), "Lines", $t2); } }
  L0["acc_no"] = $.add(L0["tarx"], "  İcraçı   hesabno ");
  L0["acc_no"] = (await $.call(C, "StringReplace", [L0["acc_no"], "hesabno", (await $.mv((await $.mv((await $.v(C, "DataModSTX")), "ODSMainStateACCOUNTNUMBER")), "asstring")), [(await $.v(C, "rfReplaceAll")), (await $.v(C, "rfIgnoreCase"))]]));
  { const $t3 = await $.iset((await $.mv((await $.v(C, "QRMemo1")), "Lines")), [4], L0["acc_no"]); if ($t3 !== undefined) { await $.mset((await $.v(C, "QRMemo1")), "Lines", $t3); } }
  L0["text"] = "DNN  yük tarix   -ci  ildə aşağıda göstərən məbləğdə yükdaşıma xidmətlərini yerinə yetirmişdir";
  L0["text"] = (await $.call(C, "StringReplace", [L0["text"], "tarix ", (await $.mv((await $.v(C, "OracleDataSet1TAR")), "AsString")), [(await $.v(C, "rfReplaceAll")), (await $.v(C, "rfIgnoreCase"))]]));
  { const $t4 = await $.iset((await $.mv((await $.v(C, "QRMemo1")), "Lines")), [6], L0["text"]); if ($t4 !== undefined) { await $.mset((await $.v(C, "QRMemo1")), "Lines", $t4); } }
  await $.mset((await $.v(C, "QRLabel31")), "Caption", (await $.mv((await $.mv((await $.v(C, "DataModSTX")), "ODSMainStateACCOUNTNUMBER")), "asstring")));
  await $.mset((await $.v(C, "QRLabel32")), "Caption", (await $.mv((await $.v(C, "OracleDataSet1inn")), "AsString")));
  L0["s1"] = 0;
  L0["s2"] = 0;
  await $.mcall((await $.v(C, "odsxx")), "First", []);
  { const $t5 = $.sub((await $.mv((await $.v(C, "odsxx")), "RecordCount")), 1);
    L0["i"] = 0;
    let $t6 = true;
    for (;;) {
      if (!$t6) { L0["i"] = $.succ(L0["i"], 1); }
      $t6 = false;
      if (!($.ord(L0["i"]) <= $.ord($t5))) break;
      L0["s"] = (await $.mv((await $.mcall((await $.v(C, "odsxx")), "FieldByName", ["ammount"])), "AsVariant"));
      L0["s3"] = (await $.mv((await $.mcall((await $.v(C, "odsxx")), "FieldByName", ["odenis"])), "AsVariant"));
      L0["s1"] = $.add(L0["s1"], (await $.call(C, "abs", [L0["s"]])));
      L0["s2"] = $.add(L0["s2"], (await $.call(C, "abs", [L0["s3"]])));
      await $.mcall((await $.v(C, "odsxx")), "Next", []);
      await $.tick();
    }
  }
  L0["s5"] = (await $.call(C, "FormatFloat", ["#,##0.00", ((await $.mv((await $.mcall((await $.mv((await $.v(C, "DataModSTX")), "ODSMainState")), "FieldByName", ["POKOSTAT"])), "AsCurrency")))]));
  L0["s4"] = $.sub($.add(L0["s1"], L0["s5"]), L0["s2"]);
  await $.mset((await $.v(C, "QRLabelValEnd")), "Caption", (await $.call(C, "FormatFloat", ["#,##0.00", L0["s4"]])));
  await $.mset((await $.v(C, "QRLabel15")), "Caption", (await $.call(C, "DateToStr", [(await $.mv((await $.mv((await $.v(C, "StatementFrm")), "DTP_Begin")), "DateTime"))])));
  await $.mset((await $.v(C, "QRLabel16")), "Caption", (await $.call(C, "DateToStr", [(await $.mv((await $.mv((await $.v(C, "StatementFrm")), "DTP_End")), "DateTime"))])));
  return L0.result;
}, {"params": ["Sender", "PrintBand"], "kind": "procedure", "ptypes": ["TQRCustomBand", "Boolean"]});
  U.method("TForm7", "QRPQuicActBeforePrint", async function QRPQuicActBeforePrint(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "printreport": $.asRef(p1), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.stmt((await $.mcall((await $.v(C, "SBTranslateProc")), "TranslateAllCompQuickRep", [(await $.v(C, "QRPQuicAct")), (await $.mv((await $.v(C, "sboapiDataModule")), "OrPack_SL"))])));
  return L0.result;
}, {"params": ["Sender", "PrintReport"], "kind": "procedure", "ptypes": ["TCustomQuickRep", "Boolean"]});
  return U;
}
