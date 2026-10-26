// Generated from PrepareFile_Unit.pas by pas2js — do not edit by hand; regenerate instead.
/* eslint-disable */
// @ts-nocheck

export default function define($) {
  const U = $.unit("PrepareFile_Unit", ["Windows", "Messages", "SysUtils", "Classes", "Graphics", "Controls", "Forms", "Dialogs", "ExtCtrls", "StdCtrls", "ComCtrls", "Buttons", "CurrencyEdit", "Grids", "DBGrids", "Db", "OracleData", "sboapiDataModuleImpl", "ToolWin", "Oracle", "FileCtrl", "Payment_Det", "Data_Unit", "Swift_Unit"]);
  const C = [U];
  U.defClass("TPrepareFile_Form", "TForm", {"progressbar1": {"name": "ProgressBar1", "type": "TProgressBar"}, "but_cancel": {"name": "But_cancel", "type": "TBitBtn"}, "bitbtn1": {"name": "BitBtn1", "type": "TBitBtn"}, "panel6": {"name": "Panel6", "type": "TPanel"}, "gridmt102": {"name": "GridMT102", "type": "TDBGrid"}, "panel7": {"name": "Panel7", "type": "TPanel"}, "panel1": {"name": "Panel1", "type": "TPanel"}, "edit_sender": {"name": "Edit_sender", "type": "TEdit"}, "panel4": {"name": "Panel4", "type": "TPanel"}, "edit_receiver": {"name": "Edit_receiver", "type": "TEdit"}, "panel8": {"name": "Panel8", "type": "TPanel"}, "panel2": {"name": "Panel2", "type": "TPanel"}, "speedbutton1": {"name": "SpeedButton1", "type": "TSpeedButton"}, "edit_reference": {"name": "Edit_reference", "type": "TEdit"}, "panel9": {"name": "Panel9", "type": "TPanel"}, "panel3": {"name": "Panel3", "type": "TPanel"}, "edit_count": {"name": "Edit_count", "type": "TEdit"}, "panel5": {"name": "Panel5", "type": "TPanel"}, "currencyedit1": {"name": "CurrencyEdit1", "type": "TCurrencyEdit"}, "panel11": {"name": "Panel11", "type": "TPanel"}, "edit1": {"name": "Edit1", "type": "TEdit"}, "tosend": {"name": "ToSend", "type": "TOracleDataSet"}, "nosend": {"name": "NoSend", "type": "TOracleDataSet"}, "nosend_datasource": {"name": "NoSend_DataSource", "type": "TDataSource"}, "tosend_datasource": {"name": "ToSend_DataSource", "type": "TDataSource"}, "toolbar1": {"name": "ToolBar1", "type": "TToolBar"}, "all_to_nosend": {"name": "All_to_Nosend", "type": "TSpeedButton"}, "but_nosend": {"name": "But_noSend", "type": "TSpeedButton"}, "all_to_send": {"name": "All_to_send", "type": "TSpeedButton"}, "but_tosend": {"name": "But_tosend", "type": "TSpeedButton"}, "toolbutton1": {"name": "ToolButton1", "type": "TToolButton"}, "dbgrid1": {"name": "DBGrid1", "type": "TDBGrid"}, "nosendid": {"name": "NoSendID", "type": "TFloatField"}, "nosendf_id": {"name": "NoSendF_ID", "type": "TFloatField"}, "nosendopercode": {"name": "NoSendOPERCODE", "type": "TStringField"}, "nosendacc_id": {"name": "NoSendACC_ID", "type": "TFloatField"}, "nosendclient_name": {"name": "NoSendCLIENT_NAME", "type": "TStringField"}, "nosendclient_code": {"name": "NoSendCLIENT_CODE", "type": "TStringField"}, "nosendtrans_ref": {"name": "NoSendTRANS_REF", "type": "TStringField"}, "nosendamount": {"name": "NoSendAMOUNT", "type": "TFloatField"}, "nosendval_acc": {"name": "NoSendVAL_ACC", "type": "TIntegerField"}, "nosendtransdate": {"name": "NoSendTRANSDATE", "type": "TDateTimeField"}, "nosendsend": {"name": "NoSendSEND", "type": "TIntegerField"}, "nosendstatus": {"name": "NoSendSTATUS", "type": "TIntegerField"}, "nosendacc_no": {"name": "NoSendACC_NO", "type": "TStringField"}, "nosendval_name": {"name": "NoSendVAL_NAME", "type": "TStringField"}, "tosendid": {"name": "ToSendID", "type": "TFloatField"}, "tosendf_id": {"name": "ToSendF_ID", "type": "TFloatField"}, "tosendopercode": {"name": "ToSendOPERCODE", "type": "TStringField"}, "tosendacc_id": {"name": "ToSendACC_ID", "type": "TFloatField"}, "tosendclient_name": {"name": "ToSendCLIENT_NAME", "type": "TStringField"}, "tosendclient_code": {"name": "ToSendCLIENT_CODE", "type": "TStringField"}, "tosendtrans_ref": {"name": "ToSendTRANS_REF", "type": "TStringField"}, "tosendamount": {"name": "ToSendAMOUNT", "type": "TFloatField"}, "tosendval_acc": {"name": "ToSendVAL_ACC", "type": "TIntegerField"}, "tosendtransdate": {"name": "ToSendTRANSDATE", "type": "TDateTimeField"}, "tosendsend": {"name": "ToSendSEND", "type": "TIntegerField"}, "tosendstatus": {"name": "ToSendSTATUS", "type": "TIntegerField"}, "tosendacc_no": {"name": "ToSendACC_NO", "type": "TStringField"}, "tosendval_name": {"name": "ToSendVAL_NAME", "type": "TStringField"}, "convert_pack": {"name": "Convert_pack", "type": "TOraclePackage"}, "mt102": {"name": "MT102", "type": "TOracleDataSet"}, "messages": {"name": "Messages", "type": "TOracleDataSet"}, "forall": {"name": "ForAll", "type": "TOracleDataSet"}, "xmlfile": {"name": "XMLFile", "type": "TextFile"}}, {});
  U.init(async () => {
    U.var_("PrepareFile_Form", null, "TPrepareFile_Form");
  });
  U.method("TPrepareFile_Form", "CreateFileForHOx", async function CreateFileForHOx(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: undefined, "i": 0, "j": 0, "mess_count": 0, "stmessage": '', "filename": '', "sum_amount": 0, "sum_all_amount": 0};
  await $.mset((await $.v(C, "ProgressBar1")), "Position", 0);
  await $.mcall((await $.v(C, "ForAll")), "Close", []);
  await $.mcall((await $.mv((await $.v(C, "ForAll")), "SQL")), "Clear", []);
  await $.stmt((await $.mcall((await $.mv((await $.v(C, "ForAll")), "SQL")), "Add", ["Select hox_out_dir from hoxsw_proper"])));
  await $.mcall((await $.v(C, "ForAll")), "Open", []);
  await $.mcall((await $.v(C, "MT102")), "Close", []);
  await $.mcall((await $.mv((await $.v(C, "MT102")), "SQL")), "Clear", []);
  await $.stmt((await $.mcall((await $.mv((await $.v(C, "MT102")), "SQL")), "Add", ["select h.*,a.acc_no,v.val_name from hox102_out h,account a,avalute v where h.acc_id = a.id and v.valute=h.val_acc and(h.send=1)and(h.status=1)"])));
  await $.mcall((await $.v(C, "MT102")), "open", []);
  L0["sum_all_amount"] = 0;
  if ($.truthy($.not((await $.call(C, "DirectoryExists", [(await $.mv((await $.mcall((await $.v(C, "ForAll")), "fieldbyname", ["hox_out_dir"])), "AsString"))]))))) {
    await $.stmt((await $.call(C, "ShowMessage", [$.add((await $.mv((await $.mcall((await $.v(C, "ForAll")), "fieldbyname", ["hox_out_dir"])), "AsString")), " Directory not exists !")])));
    return L0.result;
  }
  if ($.truthy($.eq((await $.call(C, "Trim", [(await $.mv((await $.v(C, "Edit_reference")), "Text"))])), ""))) {
    return L0.result;
  }
  L0["filename"] = $.add($.add($.add((await $.mv((await $.mcall((await $.v(C, "ForAll")), "fieldbyname", ["hox_out_dir"])), "AsString")), "\\"), (await $.mv((await $.v(C, "Edit_reference")), "Text"))), ".xml");
  await $.mcall((await $.v(C, "ProgressBar1")), "Show", []);
  await $.stmt((await $.call(C, "AssignFile", [$.ref(async () => (await $.v(C, "XMLFile")), async ($t1) => { await $.set(C, "XMLFile", $t1); }), L0["filename"]])));
  await $.stmt((await $.call(C, "Rewrite", [$.ref(async () => (await $.v(C, "XMLFile")), async ($t2) => { await $.set(C, "XMLFile", $t2); })])));
  await $.stmt((await $.call(C, "Writeln", [(await $.v(C, "XMLFile")), "<SWIFT_msg_fields>"])));
  await $.stmt((await $.call(C, "Writeln", [(await $.v(C, "XMLFile")), " <msg_format>S</msg_format>"])));
  await $.stmt((await $.call(C, "Writeln", [(await $.v(C, "XMLFile")), " <msg_sub_format>I</msg_sub_format>"])));
  await $.stmt((await $.call(C, "Writeln", [(await $.v(C, "XMLFile")), $.add($.add(" <msg_sender>", (await $.mv((await $.v(C, "Edit_sender")), "text"))), "</msg_sender>")])));
  await $.stmt((await $.call(C, "Writeln", [(await $.v(C, "XMLFile")), $.add($.add(" <msg_receiver>", (await $.mv((await $.v(C, "Edit_receiver")), "text"))), "</msg_receiver>")])));
  await $.stmt((await $.call(C, "Writeln", [(await $.v(C, "XMLFile")), $.add($.add(" <msg_type>", (await $.mv((await $.v(C, "edit1")), "text"))), "</msg_type>")])));
  await $.stmt((await $.call(C, "Writeln", [(await $.v(C, "XMLFile")), " <msg_priority>N</msg_priority>"])));
  await $.stmt((await $.call(C, "Writeln", [(await $.v(C, "XMLFile")), " <msg_del_notif_rq>N</msg_del_notif_rq>"])));
  await $.stmt((await $.call(C, "Writeln", [(await $.v(C, "XMLFile")), " <msg_user_priority>C099</msg_user_priority>"])));
  await $.stmt((await $.call(C, "Writeln", [(await $.v(C, "XMLFile")), $.add($.add(" <msg_user_reference>", (await $.mv((await $.v(C, "Edit_reference")), "Text"))), "</msg_user_reference>")])));
  await $.stmt((await $.call(C, "Writeln", [(await $.v(C, "XMLFile")), "<block4>"])));
  while ($.truthy($.not((await $.mv((await $.v(C, "MT102")), "Eof"))))) {
    await $.mcall((await $.v(C, "Application")), "ProcessMessages", []);
    await $.stmt((await $.call(C, "Writeln", [(await $.v(C, "XMLFile")), "<batch>"])));
    await $.stmt((await $.call(C, "Writeln", [(await $.v(C, "XMLFile")), $.add("<body>:20:", (await $.mv((await $.mcall((await $.v(C, "mt102")), "fieldbyname", ["TRANS_REF"])), "asstring")))])));
    await $.stmt((await $.call(C, "Writeln", [(await $.v(C, "XMLFile")), $.add(":23:", (await $.mv((await $.mcall((await $.v(C, "mt102")), "fieldbyname", ["OPERCODE"])), "asstring")))])));
    await $.stmt((await $.call(C, "Writeln", [(await $.v(C, "XMLFile")), $.add(":50K:/", (await $.mv((await $.mcall((await $.v(C, "mt102")), "fieldbyname", ["ACC_NO"])), "asstring")))])));
    await $.stmt((await $.call(C, "Writeln", [(await $.v(C, "XMLFile")), (await $.mv((await $.mcall((await $.v(C, "mt102")), "fieldbyname", ["CLIENT_NAME"])), "asstring"))])));
    if ($.truthy($.eq((await $.mv((await $.mcall((await $.v(C, "mt102")), "fieldbyname", ["CLIENT_CODE"])), "AsString")), ""))) {
      L0["stmessage"] = "/";
    } else {
      L0["stmessage"] = (await $.mv((await $.mcall((await $.v(C, "mt102")), "fieldbyname", ["CLIENT_CODE"])), "AsString"));
    }
    await $.stmt((await $.call(C, "Writeln", [(await $.v(C, "XMLFile")), L0["stmessage"]])));
    L0["stmessage"] = "";
    await $.mcall((await $.v(C, "ForAll")), "Close", []);
    await $.mcall((await $.mv((await $.v(C, "ForAll")), "SQL")), "Clear", []);
    await $.stmt((await $.mcall((await $.mv((await $.v(C, "ForAll")), "SQL")), "Add", [$.add($.add("select c.inn from account a,customers c where (a.kli_ID=c.id)and(a.id='", (await $.mv((await $.mcall((await $.v(C, "MT102")), "fieldbyname", ["acc_id"])), "AsString"))), "')")])));
    await $.mcall((await $.v(C, "ForAll")), "Open", []);
    await $.stmt((await $.call(C, "Writeln", [(await $.v(C, "XMLFile")), (await $.mv((await $.mcall((await $.v(C, "forall")), "fieldbyname", ["INN"])), "asstring"))])));
    await $.mcall((await $.v(C, "ForAll")), "Close", []);
    await $.mcall((await $.mv((await $.v(C, "ForAll")), "SQL")), "Clear", []);
    await $.stmt((await $.mcall((await $.mv((await $.v(C, "ForAll")), "SQL")), "Add", ["Select kod_b,krno,inn,swift from bankinfo"])));
    await $.mcall((await $.v(C, "ForAll")), "Open", []);
    L0["stmessage"] = (await $.mv((await $.mcall((await $.v(C, "ForAll")), "fieldbyname", ["SWIFT"])), "AsString"));
    await $.stmt((await $.call(C, "Writeln", [(await $.v(C, "XMLFile")), $.add($.add($.add($.add((await $.mv((await $.mcall((await $.v(C, "forall")), "fieldbyname", ["KOD_B"])), "asstring")), "/"), (await $.mv((await $.mcall((await $.v(C, "forall")), "fieldbyname", ["KRNO"])), "asstring"))), "/"), (await $.mv((await $.mcall((await $.v(C, "forall")), "fieldbyname", ["INN"])), "asstring")))])));
    await $.mcall((await $.v(C, "ForAll")), "Close", []);
    await $.mcall((await $.mv((await $.v(C, "ForAll")), "SQL")), "Clear", []);
    await $.stmt((await $.mcall((await $.mv((await $.v(C, "ForAll")), "SQL")), "Add", ["Select hoxaccount from hoxsw_proper"])));
    await $.mcall((await $.v(C, "ForAll")), "Open", []);
    await $.stmt((await $.call(C, "Writeln", [(await $.v(C, "XMLFile")), $.add(":52A:/D/", (await $.mv((await $.mcall((await $.v(C, "forall")), "fieldbyname", ["HOXACCOUNT"])), "asstring")))])));
    await $.stmt((await $.call(C, "Writeln", [(await $.v(C, "XMLFile")), L0["stmessage"]])));
    L0["stmessage"] = "";
    L0["mess_count"] = 0;
    L0["sum_amount"] = 0;
    await $.mcall((await $.v(C, "Messages")), "Close", []);
    await $.mcall((await $.mv((await $.v(C, "Messages")), "SQL")), "Clear", []);
    await $.stmt((await $.mcall((await $.mv((await $.v(C, "Messages")), "SQL")), "Add", [$.add($.add("select m.*, v.val_name from hoxMessage_out m, avalute v where (m.mt102_id='", (await $.mv((await $.mcall((await $.v(C, "MT102")), "fieldbyname", ["ID"])), "AsString"))), "')and (m.val_cod=v.valute)")])));
    await $.mcall((await $.v(C, "Messages")), "Open", []);
    while ($.truthy($.not((await $.mv((await $.v(C, "messages")), "eof"))))) {
      await $.mcall((await $.v(C, "Application")), "ProcessMessages", []);
      await $.mset((await $.v(C, "ProgressBar1")), "Position", $.add((await $.mv((await $.v(C, "ProgressBar1")), "Position")), 10));
      await $.stmt((await $.call(C, "Writeln", [(await $.v(C, "XMLFile")), $.add(":21:", (await $.mv((await $.mcall((await $.v(C, "messages")), "fieldbyname", ["MESS_REFERENCE"])), "asstring")))])));
      await $.stmt((await $.call(C, "Writeln", [(await $.v(C, "XMLFile")), $.add($.add(":32B:", (await $.mv((await $.mcall((await $.v(C, "messages")), "fieldbyname", ["VAL_NAME"])), "asstring"))), (await $.call(C, "formatfloat", ["0.00", (await $.mv((await $.mcall((await $.v(C, "messages")), "fieldbyname", ["AMOUNT"])), "asfloat"))])))])));
      await $.stmt((await $.call(C, "Writeln", [(await $.v(C, "XMLFile")), $.add(":57A:/C/", (await $.mv((await $.mcall((await $.v(C, "messages")), "fieldbyname", ["REC_BANK_SUB_ACC"])), "asstring")))])));
      await $.mcall((await $.v(C, "ForAll")), "Close", []);
      await $.mcall((await $.mv((await $.v(C, "ForAll")), "SQL")), "Clear", []);
      await $.stmt((await $.mcall((await $.mv((await $.v(C, "ForAll")), "SQL")), "Add", [$.add($.add("Select swift from bankm where id='", (await $.mv((await $.mcall((await $.v(C, "messages")), "fieldbyname", ["REC_BANK_ID"])), "AsString"))), "'")])));
      await $.mcall((await $.v(C, "ForAll")), "Open", []);
      await $.stmt((await $.call(C, "Writeln", [(await $.v(C, "XMLFile")), (await $.mv((await $.mcall((await $.v(C, "Forall")), "fieldbyname", ["SWIFT"])), "asstring"))])));
      await $.stmt((await $.call(C, "Writeln", [(await $.v(C, "XMLFile")), $.add(":59:/", (await $.mv((await $.mcall((await $.v(C, "messages")), "fieldbyname", ["CLIENT_ACC_NO"])), "asstring")))])));
      await $.stmt((await $.call(C, "Writeln", [(await $.v(C, "XMLFile")), (await $.mv((await $.mcall((await $.v(C, "messages")), "fieldbyname", ["CLIENT_NAME"])), "asstring"))])));
      if ($.truthy($.eq((await $.mv((await $.mcall((await $.v(C, "Messages")), "fieldbyname", ["CLIENT_CODE"])), "AsString")), ""))) {
        L0["stmessage"] = "/";
      } else {
        L0["stmessage"] = (await $.mv((await $.mcall((await $.v(C, "Messages")), "fieldbyname", ["CLIENT_CODE"])), "AsString"));
      }
      await $.stmt((await $.call(C, "Writeln", [(await $.v(C, "XMLFile")), L0["stmessage"]])));
      L0["stmessage"] = "";
      await $.stmt((await $.call(C, "Writeln", [(await $.v(C, "XMLFile")), (await $.mv((await $.mcall((await $.v(C, "messages")), "fieldbyname", ["CLIENT_INN"])), "asstring"))])));
      await $.mcall((await $.v(C, "ForAll")), "Close", []);
      await $.mcall((await $.mv((await $.v(C, "ForAll")), "SQL")), "Clear", []);
      await $.stmt((await $.mcall((await $.mv((await $.v(C, "ForAll")), "SQL")), "Add", [$.add($.add("Select krno,inn,bankcode from bankm where id='", (await $.mv((await $.mcall((await $.v(C, "messages")), "fieldbyname", ["REC_BANK_ID"])), "AsString"))), "'")])));
      await $.mcall((await $.v(C, "ForAll")), "Open", []);
      await $.stmt((await $.call(C, "Writeln", [(await $.v(C, "XMLFile")), $.add($.add($.add($.add((await $.mv((await $.mcall((await $.v(C, "forall")), "fieldbyname", ["BANKCODE"])), "asstring")), "/"), (await $.mv((await $.mcall((await $.v(C, "forall")), "fieldbyname", ["KRNO"])), "asstring"))), "/"), (await $.mv((await $.mcall((await $.v(C, "forall")), "fieldbyname", ["INN"])), "asstring")))])));
      L0["stmessage"] = (await $.call(C, "copy", [(await $.mv((await $.mcall((await $.v(C, "messages")), "fieldbyname", ["REMIT_INF"])), "asstring")), 0, 35]));
      if ($.truthy($.ne((await $.call(C, "trim", [L0["stmessage"]])), ""))) {
        await $.stmt((await $.call(C, "Writeln", [(await $.v(C, "XMLFile")), $.add(":70:", L0["stmessage"])])));
      }
      L0["stmessage"] = (await $.call(C, "copy", [(await $.mv((await $.mcall((await $.v(C, "messages")), "fieldbyname", ["REMIT_INF"])), "asstring")), 35, 35]));
      if ($.truthy($.ne((await $.call(C, "trim", [L0["stmessage"]])), ""))) {
        await $.stmt((await $.call(C, "Writeln", [(await $.v(C, "XMLFile")), L0["stmessage"]])));
      }
      L0["stmessage"] = (await $.call(C, "copy", [(await $.mv((await $.mcall((await $.v(C, "messages")), "fieldbyname", ["REMIT_INF"])), "asstring")), 70, 35]));
      if ($.truthy($.ne((await $.call(C, "trim", [L0["stmessage"]])), ""))) {
        await $.stmt((await $.call(C, "Writeln", [(await $.v(C, "XMLFile")), L0["stmessage"]])));
      }
      L0["stmessage"] = (await $.call(C, "copy", [(await $.mv((await $.mcall((await $.v(C, "messages")), "fieldbyname", ["REMIT_INF"])), "asstring")), 105, 35]));
      if ($.truthy($.ne((await $.call(C, "trim", [L0["stmessage"]])), ""))) {
        await $.stmt((await $.call(C, "Writeln", [(await $.v(C, "XMLFile")), L0["stmessage"]])));
      }
      await $.stmt((await $.call(C, "Writeln", [(await $.v(C, "XMLFile")), $.add(":26T:", (await $.mv((await $.mcall((await $.v(C, "messages")), "fieldbyname", ["TRANS_COD"])), "asstring")))])));
      if ($.truthy($.ne((await $.call(C, "trim", [(await $.mv((await $.mcall((await $.v(C, "messages")), "fieldbyname", ["ADD_INF"])), "asstring"))])), ""))) {
        await $.stmt((await $.call(C, "Writeln", [(await $.v(C, "XMLFile")), $.add(":77B:", (await $.mv((await $.mcall((await $.v(C, "messages")), "fieldbyname", ["ADD_INF"])), "asstring")))])));
      }
      L0["mess_count"] = $.add(L0["mess_count"], 1);
      L0["sum_amount"] = $.add(L0["sum_amount"], (await $.mv((await $.mcall((await $.v(C, "messages")), "fieldbyname", ["AMOUNT"])), "AsFloat")));
      await $.mcall((await $.v(C, "Messages")), "Next", []);
      await $.tick();
    }
    await $.stmt((await $.call(C, "Writeln", [(await $.v(C, "XMLFile")), $.add($.add($.add(":32A:", (await $.call(C, "formatdatetime", ["yymmdd", (await $.mv((await $.mcall((await $.v(C, "messages")), "fieldbyname", ["val_date"])), "AsDateTime"))]))), (await $.mv((await $.mcall((await $.v(C, "mt102")), "fieldbyname", ["VAL_NAME"])), "asstring"))), (await $.call(C, "formatfloat", ["0.00", L0["sum_amount"]])))])));
    await $.stmt((await $.call(C, "Writeln", [(await $.v(C, "XMLFile")), $.add(":72:/BNF/", (await $.call(C, "inttostr", [L0["mess_count"]])))])));
    await $.stmt((await $.call(C, "Writeln", [(await $.v(C, "XMLFile")), "</body>"])));
    await $.stmt((await $.call(C, "Writeln", [(await $.v(C, "XMLFile")), "<sign></sign>"])));
    await $.stmt((await $.call(C, "Writeln", [(await $.v(C, "XMLFile")), "</batch>"])));
    L0["sum_all_amount"] = $.add(L0["sum_all_amount"], (await $.mv((await $.mcall((await $.v(C, "MT102")), "fieldbyname", ["AMOUNT"])), "asfloat")));
    await $.mcall((await $.v(C, "MT102")), "Next", []);
    await $.tick();
  }
  await $.stmt((await $.call(C, "Writeln", [(await $.v(C, "XMLFile")), "</block4>"])));
  await $.stmt((await $.call(C, "Writeln", [(await $.v(C, "XMLFile")), $.add($.add("<msg_num_of_batches>", (await $.call(C, "inttostr", [(await $.mv((await $.v(C, "mt102")), "recordcount"))]))), "</msg_num_of_batches>")])));
  await $.stmt((await $.call(C, "Writeln", [(await $.v(C, "XMLFile")), $.add($.add("<msg_amount>", (await $.call(C, "formatfloat", ["0.00", (await $.mv((await $.v(C, "CurrencyEdit1")), "Value"))]))), "</msg_amount>")])));
  await $.stmt((await $.call(C, "Writeln", [(await $.v(C, "XMLFile")), "</SWIFT_msg_fields>"])));
  await $.stmt((await $.call(C, "CloseFile", [$.ref(async () => (await $.v(C, "XMLFile")), async ($t3) => { await $.set(C, "XMLFile", $t3); })])));
  return L0.result;
}, {"params": [], "kind": "procedure", "ptypes": []});
  U.method("TPrepareFile_Form", "BitBtn1Click", async function BitBtn1Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.stmt($.call(C, "close", []));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TPrepareFile_Form", "SpeedButton1Click", async function SpeedButton1Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mset((await $.v(C, "Edit_Reference")), "Text", $.add((await $.call(C, "inttostr", [(await $.mcall((await $.mv((await $.v(C, "DataMod")), "INS")), "Callintegerfunction", ["new_file_reference", []]))])), (await $.call(C, "formatdatetime", ["yymmdd", (await $.v(C, "date"))]))));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TPrepareFile_Form", "But_tosendClick", async function But_tosendClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy(($.eq((await $.mv((await $.v(C, "NoSend")), "RecordCount")), 0)))) {
    await $.stmt((await $.call(C, "ShowMessage", ["Testiq olunmus Emeliyyat Bloku yoxdur !"])));
    return L0.result;
  }
  await $.stmt((await $.mcall((await $.v(C, "Convert_pack")), "CallProcedure", ["ToandNo_send", [(await $.mv((await $.mcall((await $.v(C, "NoSend")), "fieldbyname", ["id"])), "asinteger")), 1, 0]])));
  await $.mcall((await $.v(C, "NoSend")), "Refresh", []);
  await $.mcall((await $.v(C, "ToSend")), "Refresh", []);
  await $.mset((await $.v(C, "CurrencyEdit1")), "Value", (await $.mcall((await $.v(C, "Convert_pack")), "CallFloatFunction", ["SumofAmount", []])));
  await $.mset((await $.v(C, "Edit_count")), "Text", (await $.call(C, "inttostr", [(await $.mv((await $.v(C, "ToSend")), "RecordCount"))])));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TPrepareFile_Form", "But_noSendClick", async function But_noSendClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy(($.eq((await $.mv((await $.v(C, "ToSend")), "RecordCount")), 0)))) {
    return L0.result;
  }
  await $.stmt((await $.mcall((await $.v(C, "Convert_pack")), "CallProcedure", ["ToandNo_send", [(await $.mv((await $.mcall((await $.v(C, "toSend")), "fieldbyname", ["id"])), "asinteger")), 0, 0]])));
  await $.mcall((await $.v(C, "NoSend")), "Refresh", []);
  await $.mcall((await $.v(C, "ToSend")), "Refresh", []);
  await $.mset((await $.v(C, "CurrencyEdit1")), "Value", (await $.mcall((await $.v(C, "Convert_pack")), "CallFloatFunction", ["SumofAmount", []])));
  await $.mset((await $.v(C, "Edit_count")), "Text", (await $.call(C, "inttostr", [(await $.mv((await $.v(C, "ToSend")), "RecordCount"))])));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TPrepareFile_Form", "FormClose", async function FormClose(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "action": $.asRef(p1), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.stmt((await $.mcall((await $.v(C, "Convert_pack")), "CallProcedure", ["ConvertTonoSend", []])));
  await $.mcall((await $.v(C, "NoSend")), "Close", []);
  await $.mcall((await $.v(C, "ToSend")), "Close", []);
  return L0.result;
}, {"params": ["Sender", "Action"], "kind": "procedure", "ptypes": ["TObject", "TCloseAction"]});
  U.method("TPrepareFile_Form", "All_to_sendClick", async function All_to_sendClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.eq((await $.mv((await $.v(C, "NoSend")), "RecordCount")), 0))) {
    await $.stmt((await $.call(C, "ShowMessage", ["Testiq olunmus Emeliyyat Bloku yoxdur !"])));
    return L0.result;
  }
  await $.stmt((await $.mcall((await $.v(C, "Convert_pack")), "CallProcedure", ["ToandNo_send", [(await $.mv((await $.mcall((await $.v(C, "NoSend")), "fieldbyname", ["id"])), "asinteger")), 1, 1]])));
  await $.mcall((await $.v(C, "NoSend")), "Refresh", []);
  await $.mcall((await $.v(C, "ToSend")), "Refresh", []);
  await $.mset((await $.v(C, "CurrencyEdit1")), "Value", (await $.mcall((await $.v(C, "Convert_pack")), "CallFloatFunction", ["SumofAmount", []])));
  await $.mset((await $.v(C, "Edit_count")), "Text", (await $.call(C, "inttostr", [(await $.mv((await $.v(C, "ToSend")), "RecordCount"))])));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TPrepareFile_Form", "All_to_NosendClick", async function All_to_NosendClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.eq((await $.mv((await $.v(C, "ToSend")), "RecordCount")), 0))) {
    return L0.result;
  }
  await $.stmt((await $.mcall((await $.v(C, "Convert_pack")), "CallProcedure", ["ToandNo_send", [(await $.mv((await $.mcall((await $.v(C, "ToSend")), "fieldbyname", ["id"])), "asinteger")), 0, 1]])));
  await $.mcall((await $.v(C, "NoSend")), "Refresh", []);
  await $.mcall((await $.v(C, "ToSend")), "Refresh", []);
  await $.mset((await $.v(C, "CurrencyEdit1")), "Value", (await $.mcall((await $.v(C, "Convert_pack")), "CallFloatFunction", ["SumofAmount", []])));
  await $.mset((await $.v(C, "Edit_count")), "Text", (await $.call(C, "inttostr", [(await $.mv((await $.v(C, "ToSend")), "RecordCount"))])));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TPrepareFile_Form", "But_cancelClick", async function But_cancelClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.stmt($.call(C, "CreateFileForHOx", []));
  if ($.truthy($.eq((await $.call(C, "Trim", [(await $.mv((await $.v(C, "Edit_reference")), "Text"))])), ""))) {
    await $.stmt((await $.call(C, "ShowMessage", ["Qeydiyyat №-si verilmeyib !"])));
    return L0.result;
  }
  await $.stmt((await $.mcall((await $.v(C, "Convert_pack")), "CallProcedure", ["INS_MT150", ["S", (await $.mv((await $.v(C, "edit_sender")), "text")), (await $.mv((await $.v(C, "edit_receiver")), "text")), (await $.mv((await $.v(C, "Edit1")), "text")), "N", "N", "C099", (await $.v(C, "date")), (await $.mv((await $.v(C, "edit_reference")), "text"))]])));
  await $.mcall((await $.v(C, "Edit_reference")), "Clear", []);
  await $.mset((await $.v(C, "Edit_count")), "Text", "0");
  await $.mset((await $.v(C, "CurrencyEdit1")), "Text", "0");
  await $.mcall((await $.v(C, "NoSend")), "Refresh", []);
  await $.mcall((await $.v(C, "ToSend")), "Refresh", []);
  await $.mcall((await $.v(C, "Swift_Form")), "RefreshDATA", []);
  await $.mset((await $.v(C, "ProgressBar1")), "Position", 100);
  await $.mcall((await $.v(C, "ProgressBar1")), "Hide", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  return U;
}
