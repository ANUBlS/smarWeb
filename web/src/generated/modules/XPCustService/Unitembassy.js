// Generated from Unitembassy.pas by pas2js — do not edit by hand; regenerate instead.
/* eslint-disable */
// @ts-nocheck

export default function define($) {
  const U = $.unit("Unitembassy", ["Windows", "Messages", "SysUtils", "Variants", "Classes", "Graphics", "Controls", "Forms", "Dialogs", "Grids", "XDBGrids", "ExtCtrls", "XFSCtrls", "DB", "OracleData", "StdCtrls", "sboapiDataModuleImpl", "PCustServiceFormImpl1", "UnitDataModPCustService", "UntQRReceiptSefr", "UnitEmbasyTrans"]);
  const C = [U];
  U.defClass("TForm_embassy", "TForm", {"xdbgrid1": {"name": "XDBGrid1", "type": "TXDBGrid"}, "ods_embassy": {"name": "ods_embassy", "type": "TOracleDataSet"}, "xfpanel1": {"name": "XFPanel1", "type": "TXFPanel"}, "dsrc_embassy": {"name": "dsrc_embassy", "type": "TDataSource"}, "ods_embassyid": {"name": "ods_embassyID", "type": "TFloatField"}, "ods_embassyaz_name": {"name": "ods_embassyAZ_NAME", "type": "TWideStringField"}, "ods_embassyeng_name": {"name": "ods_embassyENG_NAME", "type": "TWideStringField"}, "xfbutton1": {"name": "XFButton1", "type": "TXFButton"}, "xfbutton2": {"name": "XFButton2", "type": "TXFButton"}, "ods_embassytrans_info": {"name": "ods_embassytrans_info", "type": "TOracleDataSet"}, "ods_bankinf": {"name": "ods_bankinf", "type": "TOracleDataSet"}, "ods_bankinfbank": {"name": "ods_bankinfBANK", "type": "TWideStringField"}, "ods_bankinfinn": {"name": "ods_bankinfINN", "type": "TWideStringField"}, "ods_embassytrans_infoammount": {"name": "ods_embassytrans_infoAMMOUNT", "type": "TFloatField"}, "ods_embassytrans_infoacc_no": {"name": "ods_embassytrans_infoACC_NO", "type": "TWideStringField"}, "ods_embassytrans_infoteyinat": {"name": "ods_embassytrans_infoTEYINAT", "type": "TWideStringField"}, "ods_embassytrans_infokass": {"name": "ods_embassytrans_infoKASS", "type": "TWideStringField"}, "ods_embassytrans_infoammount_yaz": {"name": "ods_embassytrans_infoAMMOUNT_YAZ", "type": "TWideStringField"}, "sysdat": {"name": "sysdat", "type": "TOracleDataSet"}, "ods_embassytrans_infoostat": {"name": "ods_embassytrans_infoOSTAT", "type": "TFloatField"}, "ods_embassytrans_infoval_name": {"name": "ods_embassytrans_infoVAL_NAME", "type": "TWideStringField"}, "ods_bankinfsedrfil": {"name": "ods_bankinfSEDRFIL", "type": "TWideStringField"}, "ods_embassytrans_infoostat_yaz": {"name": "ods_embassytrans_infoOSTAT_YAZ", "type": "TWideStringField"}, "ods_bankinfassistant": {"name": "ods_bankinfASSISTANT", "type": "TWideStringField"}, "xdbgrid2": {"name": "XDBGrid2", "type": "TXDBGrid"}, "ods_cust_acc": {"name": "ods_cust_acc", "type": "TOracleDataSet"}, "dsrc_cust_acc": {"name": "dsrc_cust_acc", "type": "TDataSource"}, "ods_cust_accostat": {"name": "ods_cust_accOSTAT", "type": "TFloatField"}, "ods_cust_accacc_no": {"name": "ods_cust_accACC_NO", "type": "TWideStringField"}, "ods_cust_accval_name": {"name": "ods_cust_accVAL_NAME", "type": "TWideStringField"}, "ods_cust_acccustname": {"name": "ods_cust_accCUSTNAME", "type": "TWideStringField"}, "ods_cust_accsex": {"name": "ods_cust_accSEX", "type": "TWideStringField"}, "sysdatdat": {"name": "sysdatDAT", "type": "TWideStringField"}, "sysdattek_dat": {"name": "sysdatTEK_DAT", "type": "TDateTimeField"}, "ods_cust_accval_acc": {"name": "ods_cust_accVAL_ACC", "type": "TIntegerField"}, "ods_kurstudey": {"name": "ods_kurstudey", "type": "TOracleDataSet"}, "ods_kurstudeyval_kod": {"name": "ods_kurstudeyVAL_KOD", "type": "TIntegerField"}, "ods_kurstudeyostat": {"name": "ods_kurstudeyOSTAT", "type": "TFloatField"}, "ods_kurstudeydat": {"name": "ods_kurstudeyDAT", "type": "TDateTimeField"}, "ods_cust_accpok_ostat": {"name": "ods_cust_accPOK_OSTAT", "type": "TFloatField"}, "ods_cust_accid": {"name": "ods_cust_accID", "type": "TFloatField"}}, {});
  U.init(async () => {
    U.var_("Form_embassy", null, "TForm_embassy");
  });
  U.method("TForm_embassy", "FormCreate", async function FormCreate(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.set(C, "QRPTReceiptSefr", (await $.mcall((await $.v(C, "TQRPTReceiptSefr")), "Create", [Self])));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TForm_embassy", "FormShow", async function FormShow(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mcall((await $.v(C, "sysdat")), "Close", []);
  await $.mcall((await $.v(C, "sysdat")), "open", []);
  {
    const $t1 = (await $.v(C, "Form_embassy"));
    const $t2 = (await $.wv([$t1], "ods_cust_acc", C, false));
    await $.stmt($.wcall([$t1, $t2], "close", [], C));
    await $.stmt((await $.wcall([$t1, $t2], "SetVariable", ["dat", (await $.mv((await $.wv([$t1, $t2], "sysdatTEK_DAT", C, false)), "AsDateTime"))], C)));
    await $.stmt((await $.wcall([$t1, $t2], "SetVariable", ["CUSTID", (await $.wv([$t1, $t2], "tacc", C, false))], C)));
    await $.stmt($.wcall([$t1, $t2], "open", [], C));
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TForm_embassy", "XFButton1Click", async function XFButton1Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy((await $.or_(($.lt((await $.mv((await $.v(C, "ods_cust_accOSTAT")), "asinteger")), 0)), async () => ($.eq((await $.mv((await $.v(C, "ods_cust_acc")), "RecordCount")), 0)))))) {
    await $.stmt((await $.call(C, "showmessage", ["Müştəri hesabı seçilməyib  !"])));
    return L0.result;
  }
  if ($.truthy(($.lt((await $.mv((await $.v(C, "ods_cust_accOSTAT")), "AsInteger")), 0)))) {
    await $.stmt((await $.call(C, "showmessage", ["Seçilmiş hesabın qalğı yoxdu  !"])));
    return L0.result;
  }
  await $.set(C, "Form_embasTrans", (await $.mcall((await $.v(C, "TForm_embasTrans")), "Create", [Self])));
  await $.mcall((await $.mv((await $.v(C, "Form_embasTrans")), "ods_embstrans")), "Close", []);
  await $.stmt((await $.mcall((await $.mv((await $.v(C, "Form_embasTrans")), "ods_embstrans")), "SetVariable", ["custid", (await $.v(C, "tacc"))])));
  await $.mcall((await $.mv((await $.v(C, "Form_embasTrans")), "ods_embstrans")), "Open", []);
  await $.mcall((await $.v(C, "Form_embasTrans")), "ShowModal", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TForm_embassy", "XFButton2Click", async function XFButton2Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mcall((await $.v(C, "Form_embassy")), "Close", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  return U;
}
