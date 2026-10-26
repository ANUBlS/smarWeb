// Generated from UnitEmbasyTrans.pas by pas2js — do not edit by hand; regenerate instead.
/* eslint-disable */
// @ts-nocheck

export default function define($) {
  const U = $.unit("UnitEmbasyTrans", ["Windows", "Messages", "SysUtils", "Variants", "Classes", "Graphics", "Controls", "Forms", "Dialogs", "ExtCtrls", "XFSCtrls", "DB", "OracleData", "Grids", "XDBGrids", "StdCtrls", "Buttons", "sboapiDataModuleImpl", "Unitembassy", "PCustServiceFormImpl1", "UnitDataModPCustService", "UntQRReceiptSefr"]);
  const C = [U];
  U.defClass("TForm_embasTrans", "TForm", {"xfpanel1": {"name": "XFPanel1", "type": "TXFPanel"}, "xfpanel2": {"name": "XFPanel2", "type": "TXFPanel"}, "xdbgrid1": {"name": "XDBGrid1", "type": "TXDBGrid"}, "ods_embstrans": {"name": "ods_embstrans", "type": "TOracleDataSet"}, "dsrc_embstrans": {"name": "Dsrc_embstrans", "type": "TDataSource"}, "ods_embstransname": {"name": "ods_embstransNAME", "type": "TWideStringField"}, "ods_embstransbal_cn1": {"name": "ods_embstransBAL_CN1", "type": "TFloatField"}, "ods_embstransacc_no": {"name": "ods_embstransACC_NO", "type": "TWideStringField"}, "xfbitbtn1": {"name": "XFBitBtn1", "type": "TXFBitBtn"}, "xfbitbtn2": {"name": "XFBitBtn2", "type": "TXFBitBtn"}, "ods_embstranscustid": {"name": "ods_embstransCUSTID", "type": "TIntegerField"}, "ods_embstransacc_id": {"name": "ods_embstransACC_ID", "type": "TFloatField"}, "ods_embstranscustname": {"name": "ods_embstransCUSTNAME", "type": "TWideStringField"}, "ods_embstranssex": {"name": "ods_embstransSEX", "type": "TWideStringField"}, "ods_embstranscust_name": {"name": "ods_embstransCUST_NAME", "type": "TWideStringField"}, "ods_embstranspok_ostat": {"name": "ods_embstransPOK_OSTAT", "type": "TFloatField"}}, {});
  U.init(async () => {
    U.var_("Form_embasTrans", null, "TForm_embasTrans");
  });
  U.method("TForm_embasTrans", "XFBitBtn1Click", async function XFBitBtn1Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "f": false, "ac_id": 0};
  await $.fixArgs(L0, ["sender"]);
  L0["f"] = (await $.mcall((await $.mv((await $.v(C, "DataModPCustService")), "SB_ACA")), "CallBooleanFunction", ["checkadvancedobjectaccess", ["SEFRSTATUS"]]));
  if ($.truthy($.eq(L0["f"], false))) {
    await $.stmt((await $.call(C, "showmessage", ["Sizin bu  məktubu yığmaq hüquqnuz  yoxdur  !"])));
    return L0.result;
  }
  L0["ac_id"] = (await $.mv((await $.mcall((await $.mv((await $.mv((await $.mv((await $.v(C, "Form_embassy")), "XDBGrid2")), "DataSource")), "DataSet")), "FieldByName", ["id"])), "AsInteger"));
  await $.set(C, "transid_sefrlik", (await $.mcall((await $.mv((await $.v(C, "DataModPCustService")), "PG_PCustService")), "CallIntegerFunction", ["sefr_trans", [L0["ac_id"], (await $.call(C, "strtoint", [(await $.v(C, "tacc"))])), (await $.mv((await $.v(C, "ods_embstransACC_ID")), "AsInteger"))]])));
  {
    const $t1 = (await $.v(C, "Form_embassy"));
    const $t2 = (await $.wv([$t1], "ods_embassytrans_info", C, false));
    await $.stmt($.wcall([$t1, $t2], "close", [], C));
    await $.stmt((await $.wcall([$t1, $t2], "SetVariable", ["trid", (await $.wv([$t1, $t2], "transid_sefrlik", C, false))], C)));
    await $.stmt((await $.wcall([$t1, $t2], "SetVariable", ["dat", (await $.mv((await $.wv([$t1, $t2], "sysdatTEK_DAT", C, false)), "AsDateTime"))], C)));
    await $.stmt($.wcall([$t1, $t2], "open", [], C));
  }
  if ($.truthy($.gt((await $.v(C, "transid_sefrlik")), 0))) {
    {
      const $t3 = (await $.v(C, "QRPTReceiptSefr"));
      if ($.truthy($.eq((await $.mv((await $.mv((await $.wv([$t3], "Form_embasTrans", C, false)), "ods_embstransBAL_CN1")), "AsString")), "1001"))) {
        await $.mset((await $.wv([$t3], "QRMain", C, false)), "Enabled", (await $.wv([$t3], "true", C, false)));
        await $.mset((await $.wv([$t3], "QRChildFirst", C, false)), "Enabled", (await $.wv([$t3], "true", C, false)));
        await $.mset((await $.wv([$t3], "QRChildSecond", C, false)), "Enabled", (await $.wv([$t3], "true", C, false)));
      } else {
        await $.mset((await $.wv([$t3], "QRMain", C, false)), "Enabled", (await $.wv([$t3], "false", C, false)));
        await $.mset((await $.wv([$t3], "QRChildFirst", C, false)), "Enabled", (await $.wv([$t3], "false", C, false)));
        await $.mset((await $.wv([$t3], "QRChildSecond", C, false)), "Enabled", (await $.wv([$t3], "false", C, false)));
      }
      await $.mset((await $.wv([$t3], "QRLBankName", C, false)), "Caption", (await $.mv((await $.mv((await $.wv([$t3], "Form_embassy", C, false)), "ods_bankinfBANK")), "AsString")));
      await $.mset((await $.wv([$t3], "QRLBankName1", C, false)), "Caption", (await $.mv((await $.mv((await $.wv([$t3], "Form_embassy", C, false)), "ods_bankinfBANK")), "AsString")));
      await $.mset((await $.wv([$t3], "QRLBankName2", C, false)), "Caption", (await $.mv((await $.mv((await $.wv([$t3], "Form_embassy", C, false)), "ods_bankinfBANK")), "AsString")));
      await $.mset((await $.wv([$t3], "QRLBankInn", C, false)), "Caption", (await $.mv((await $.mv((await $.wv([$t3], "Form_embassy", C, false)), "ods_bankinfINN")), "AsString")));
      await $.mset((await $.wv([$t3], "QRLBankInn1", C, false)), "Caption", (await $.mv((await $.mv((await $.wv([$t3], "Form_embassy", C, false)), "ods_bankinfINN")), "AsString")));
      await $.mset((await $.wv([$t3], "QRLBankInn2", C, false)), "Caption", (await $.mv((await $.mv((await $.wv([$t3], "Form_embassy", C, false)), "ods_bankinfINN")), "AsString")));
      await $.mset((await $.wv([$t3], "QRLAmount", C, false)), "Caption", (await $.mv((await $.mv((await $.wv([$t3], "Form_embassy", C, false)), "ods_embassytrans_infoAMMOUNT_YAZ")), "AsString")));
      await $.mset((await $.wv([$t3], "QRLAmount1", C, false)), "Caption", (await $.mv((await $.mv((await $.wv([$t3], "Form_embassy", C, false)), "ods_embassytrans_infoAMMOUNT_YAZ")), "AsString")));
      await $.mset((await $.wv([$t3], "QRLAmount2", C, false)), "Caption", (await $.mv((await $.mv((await $.wv([$t3], "Form_embassy", C, false)), "ods_embassytrans_infoAMMOUNT_YAZ")), "AsString")));
      await $.mset((await $.wv([$t3], "QRDBText1", C, false)), "dataset", (await $.mv((await $.wv([$t3], "Form_embassy", C, false)), "ods_embassytrans_info")));
      await $.mset((await $.wv([$t3], "QRDBText3", C, false)), "dataset", (await $.mv((await $.wv([$t3], "Form_embassy", C, false)), "ods_embassytrans_info")));
      await $.mset((await $.wv([$t3], "QRDBText21", C, false)), "dataset", (await $.mv((await $.wv([$t3], "Form_embassy", C, false)), "ods_embassytrans_info")));
      await $.mset((await $.wv([$t3], "QRDBText23", C, false)), "dataset", (await $.mv((await $.wv([$t3], "Form_embassy", C, false)), "ods_embassytrans_info")));
      await $.mset((await $.wv([$t3], "QRDBText41", C, false)), "dataset", (await $.mv((await $.wv([$t3], "Form_embassy", C, false)), "ods_embassytrans_info")));
      await $.mset((await $.wv([$t3], "QRDBText39", C, false)), "dataset", (await $.mv((await $.wv([$t3], "Form_embassy", C, false)), "ods_embassytrans_info")));
      await $.mset((await $.wv([$t3], "QRDBText6", C, false)), "dataset", (await $.mv((await $.wv([$t3], "Form_embasTrans", C, false)), "ods_embstrans")));
      await $.mset((await $.wv([$t3], "QRDBText20", C, false)), "dataset", (await $.mv((await $.wv([$t3], "Form_embasTrans", C, false)), "ods_embstrans")));
      await $.mset((await $.wv([$t3], "QRDBText36", C, false)), "dataset", (await $.mv((await $.wv([$t3], "Form_embasTrans", C, false)), "ods_embstrans")));
      await $.stmt($.wcall([$t3], "Preview", [], C));
    }
  }
  await $.mcall((await $.mv((await $.v(C, "sboapiDataModule")), "SBSession")), "Commit", []);
  await $.mcall((await $.v(C, "Form_embasTrans")), "Close", []);
  await $.mcall((await $.v(C, "Form_embassy")), "Close", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TForm_embasTrans", "XFBitBtn2Click", async function XFBitBtn2Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mcall((await $.v(C, "Form_embasTrans")), "Close", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  return U;
}
