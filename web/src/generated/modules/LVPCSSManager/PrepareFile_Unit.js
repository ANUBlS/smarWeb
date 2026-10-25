// Generated from PrepareFile_Unit.pas by pas2js — do not edit by hand; regenerate instead.
/* eslint-disable */
// @ts-nocheck

export default function define($) {
  const U = $.unit("PrepareFile_Unit", ["Windows", "Messages", "SysUtils", "Classes", "Graphics", "Controls", "Forms", "Dialogs", "ExtCtrls", "StdCtrls", "ComCtrls", "Buttons", "CurrencyEdit", "Grids", "DBGrids", "Db", "OracleData", "sboapiDataModuleImpl", "ToolWin", "Oracle", "FileCtrl", "CryptoUnit", "Payment_Det", "Data_Unit", "LVPCSSImpl"]);
  const C = [U];
  U.defClass("TPrepareFile_Form", "TForm", {"progressbar1": {"name": "ProgressBar1", "type": "TProgressBar"}, "button_file": {"name": "Button_file", "type": "TBitBtn"}, "bitbtn1": {"name": "BitBtn1", "type": "TBitBtn"}, "panel6": {"name": "Panel6", "type": "TPanel"}, "panel7": {"name": "Panel7", "type": "TPanel"}, "panel1": {"name": "Panel1", "type": "TPanel"}, "edit_sender": {"name": "Edit_sender", "type": "TEdit"}, "panel4": {"name": "Panel4", "type": "TPanel"}, "edit_receiver": {"name": "Edit_receiver", "type": "TEdit"}, "panel8": {"name": "Panel8", "type": "TPanel"}, "panel2": {"name": "Panel2", "type": "TPanel"}, "speedbutton1": {"name": "SpeedButton1", "type": "TSpeedButton"}, "edit_reference": {"name": "Edit_reference", "type": "TEdit"}, "panel9": {"name": "Panel9", "type": "TPanel"}, "panel3": {"name": "Panel3", "type": "TPanel"}, "edit_count": {"name": "Edit_count", "type": "TEdit"}, "panel5": {"name": "Panel5", "type": "TPanel"}, "currencyedit1": {"name": "CurrencyEdit1", "type": "TCurrencyEdit"}, "panel11": {"name": "Panel11", "type": "TPanel"}, "edit1": {"name": "Edit1", "type": "TEdit"}, "sendingbatchs": {"name": "SendingBatchs", "type": "TOracleDataSet"}, "readybatchs": {"name": "ReadyBatchs", "type": "TOracleDataSet"}, "ds_readybatchs": {"name": "DS_ReadyBatchs", "type": "TDataSource"}, "ds_sendingbatchs": {"name": "DS_SendingBatchs", "type": "TDataSource"}, "toolbar1": {"name": "ToolBar1", "type": "TToolBar"}, "all_to_nosend": {"name": "All_to_Nosend", "type": "TSpeedButton"}, "but_nosend": {"name": "But_noSend", "type": "TSpeedButton"}, "all_to_send": {"name": "All_to_send", "type": "TSpeedButton"}, "but_tosend": {"name": "But_tosend", "type": "TSpeedButton"}, "toolbutton1": {"name": "ToolButton1", "type": "TToolButton"}, "readybatchsid": {"name": "ReadyBatchsID", "type": "TFloatField"}, "readybatchsf_id": {"name": "ReadyBatchsF_ID", "type": "TFloatField"}, "readybatchsopercode": {"name": "ReadyBatchsOPERCODE", "type": "TStringField"}, "readybatchsacc_id": {"name": "ReadyBatchsACC_ID", "type": "TFloatField"}, "readybatchsclient_name": {"name": "ReadyBatchsCLIENT_NAME", "type": "TStringField"}, "readybatchsclient_code": {"name": "ReadyBatchsCLIENT_CODE", "type": "TStringField"}, "readybatchstrans_ref": {"name": "ReadyBatchsTRANS_REF", "type": "TStringField"}, "readybatchsamount": {"name": "ReadyBatchsAMOUNT", "type": "TFloatField"}, "readybatchsval_acc": {"name": "ReadyBatchsVAL_ACC", "type": "TIntegerField"}, "readybatchstransdate": {"name": "ReadyBatchsTRANSDATE", "type": "TDateTimeField"}, "readybatchssend": {"name": "ReadyBatchsSEND", "type": "TIntegerField"}, "readybatchsstatus": {"name": "ReadyBatchsSTATUS", "type": "TIntegerField"}, "readybatchsacc_no": {"name": "ReadyBatchsACC_NO", "type": "TStringField"}, "readybatchsval_name": {"name": "ReadyBatchsVAL_NAME", "type": "TStringField"}, "sendingbatchsid": {"name": "SendingBatchsID", "type": "TFloatField"}, "sendingbatchsf_id": {"name": "SendingBatchsF_ID", "type": "TFloatField"}, "sendingbatchsopercode": {"name": "SendingBatchsOPERCODE", "type": "TStringField"}, "sendingbatchsacc_id": {"name": "SendingBatchsACC_ID", "type": "TFloatField"}, "sendingbatchsclient_name": {"name": "SendingBatchsCLIENT_NAME", "type": "TStringField"}, "sendingbatchsclient_code": {"name": "SendingBatchsCLIENT_CODE", "type": "TStringField"}, "sendingbatchstrans_ref": {"name": "SendingBatchsTRANS_REF", "type": "TStringField"}, "sendingbatchsamount": {"name": "SendingBatchsAMOUNT", "type": "TFloatField"}, "sendingbatchsval_acc": {"name": "SendingBatchsVAL_ACC", "type": "TIntegerField"}, "sendingbatchstransdate": {"name": "SendingBatchsTRANSDATE", "type": "TDateTimeField"}, "sendingbatchssend": {"name": "SendingBatchsSEND", "type": "TIntegerField"}, "sendingbatchsstatus": {"name": "SendingBatchsSTATUS", "type": "TIntegerField"}, "sendingbatchsacc_no": {"name": "SendingBatchsACC_NO", "type": "TStringField"}, "sendingbatchsval_name": {"name": "SendingBatchsVAL_NAME", "type": "TStringField"}, "convert_pack": {"name": "Convert_pack", "type": "TOraclePackage"}, "xs_batchs": {"name": "xs_batchs", "type": "TOracleDataSet"}, "messages": {"name": "Messages", "type": "TOracleDataSet"}, "datatemp": {"name": "DataTemp", "type": "TOracleDataSet"}, "but_batch": {"name": "but_batch", "type": "TBitBtn"}, "toolbutton2": {"name": "ToolButton2", "type": "TToolButton"}, "panel10": {"name": "Panel10", "type": "TPanel"}, "gridreadybatchs": {"name": "GridReadyBatchs", "type": "TDBGrid"}, "panel12": {"name": "Panel12", "type": "TPanel"}, "gridsendingbatchs": {"name": "GridSendingBatchs", "type": "TDBGrid"}, "xmlfile": {"name": "XMLFile", "type": "TextFile"}}, {});
  U.init(async () => {
    U.var_("PrepareFile_Form", null, "TPrepareFile_Form");
  });
  U.func("ChangeDecimal", async function ChangeDecimal(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"r": $.copyArg(p0), result: ''};
  await $.fixArgs(L0, ["r"]);
  L0["result"] = (await $.call(C, "StringReplace", [(await $.call(C, "formatfloat", ["##0.00", L0["r"]])), (await $.v(C, "DecimalSeparator")), ",", [(await $.v(C, "rfReplaceAll")), (await $.v(C, "rfIgnoreCase"))]]));
  return L0.result;
}, {"params": ["r"], "kind": "function", "ptypes": ["real"]});
  U.func("SetStringLength", async function SetStringLength(Self, p0, p1, p2) {
  const C = $.chain(Self, U);
  const L0 = {"orgstr": $.copyArg(p0), "len": $.copyArg(p1), "addstr": $.copyArg(p2), result: '', "tempstr": '', "i": 0};
  await $.fixArgs(L0, ["orgstr", "len", "addstr"]);
  L0["tempstr"] = L0["orgstr"];
  { const $t1 = $.sub(L0["len"], 1);
    L0["i"] = (await $.call(C, "length", [L0["tempstr"]]));
    let $t2 = true;
    for (;;) {
      if (!$t2) { L0["i"] = $.succ(L0["i"], 1); }
      $t2 = false;
      if (!($.ord(L0["i"]) <= $.ord($t1))) break;
      L0["tempstr"] = $.add(L0["addstr"], L0["tempstr"]);
      await $.tick();
    }
  }
  L0["result"] = L0["tempstr"];
  return L0.result;
}, {"params": ["orgStr", "len", "addstr"], "kind": "function", "ptypes": ["String", "integer", "String"]});
  U.method("TPrepareFile_Form", "CreateFile", async function CreateFile(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: undefined, "mess_count": 0, "stmessage": '', "messagebody": '', "filename": '', "tempstr": '', "tempstr1": '', "tempstr2": '', "sum_amount": 0, "sum_all_amount": 0, "dir": '', "l_chin": ''};
  L0["addstr"] = $.fn(async function AddStr(p0, p1, p2) {
  const L1 = {"bodys": $.asRef(p0), "adds": $.copyArg(p1), "newrow": $.copyArg(p2), result: undefined};
  await $.fixArgs(L1, ["adds", "newrow"]);
  await L1["bodys"].set($.add((await L1["bodys"].get()), L1["adds"]));
  if ($.truthy(L1["newrow"])) {
    await L1["bodys"].set($.add((await L1["bodys"].get()), "\n"));
  }
  return L1.result;
});
  await $.mset((await $.v(C, "ProgressBar1")), "Position", 0);
  await $.mcall((await $.v(C, "DataTemp")), "Close", []);
  await $.mcall((await $.mv((await $.v(C, "DataTemp")), "SQL")), "Clear", []);
  await $.stmt((await $.mcall((await $.mv((await $.v(C, "DataTemp")), "SQL")), "Add", ["Select * from xs_config"])));
  await $.mcall((await $.v(C, "DataTemp")), "Open", []);
  L0["sum_all_amount"] = 0;
  if ($.truthy($.not((await $.call(C, "DirectoryExists", [(await $.mv((await $.mcall((await $.v(C, "DataTemp")), "fieldbyname", ["out_dir"])), "AsString"))]))))) {
    await $.stmt((await $.call(C, "MkDir", [(await $.mv((await $.mcall((await $.v(C, "DataTemp")), "fieldbyname", ["out_dir"])), "AsString"))])));
  }
  L0["dir"] = $.add($.add($.add((await $.mv((await $.mcall((await $.v(C, "DataTemp")), "fieldbyname", ["out_dir"])), "AsString")), "\\"), (await $.call(C, "FormatDateTime", ["ddmmyy", (await $.v(C, "date"))]))), "\\");
  if ($.truthy($.not((await $.call(C, "DirectoryExists", [L0["dir"]]))))) {
    await $.stmt((await $.call(C, "MkDir", [L0["dir"]])));
  }
  if ($.truthy($.eq((await $.call(C, "Trim", [(await $.mv((await $.v(C, "Edit_reference")), "Text"))])), ""))) {
    return L0.result;
  }
  L0["filename"] = $.add($.add(L0["dir"], (await $.mv((await $.v(C, "Edit_reference")), "Text"))), ".xml");
  await $.mcall((await $.v(C, "ProgressBar1")), "Show", []);
  await $.stmt((await $.call(C, "AssignFile", [$.ref(async () => (await $.v(C, "XMLFile")), async ($t3) => { await $.set(C, "XMLFile", $t3); }), L0["filename"]])));
  await $.stmt((await $.call(C, "Rewrite", [$.ref(async () => (await $.v(C, "XMLFile")), async ($t4) => { await $.set(C, "XMLFile", $t4); })])));
  await $.stmt((await $.call(C, "Writeln", [(await $.v(C, "XMLFile")), "<?xml version=\"1.0\" encoding=\"latin1\" ?>"])));
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
  L0["messagebody"] = "";
  await $.mcall((await $.v(C, "xs_batchs")), "Refresh", []);
  await $.mcall((await $.v(C, "xs_batchs")), "First", []);
  while ($.truthy($.not((await $.mv((await $.v(C, "xs_batchs")), "Eof"))))) {
    await $.mcall((await $.v(C, "Application")), "ProcessMessages", []);
    await $.stmt((await $.call(C, "Writeln", [(await $.v(C, "XMLFile")), "<batch>"])));
    await $.stmt((await $.call(C, "Write", [(await $.v(C, "XMLFile")), "<body>"])));
    L0["messagebody"] = "";
    await $.stmt((await $.callv(L0["addstr"], [L0["messagebody"], $.add(":20:", (await $.mv((await $.mcall((await $.v(C, "xs_batchs")), "fieldbyname", ["TRANS_REF"])), "asstring"))), true])));
    await $.stmt((await $.callv(L0["addstr"], [L0["messagebody"], $.add(":23:", (await $.mv((await $.mcall((await $.v(C, "xs_batchs")), "fieldbyname", ["OPERCODE"])), "asstring"))), true])));
    await $.stmt((await $.callv(L0["addstr"], [L0["messagebody"], $.add(":50K:/", (await $.mv((await $.mcall((await $.v(C, "xs_batchs")), "fieldbyname", ["ACC_NO"])), "asstring"))), true])));
    await $.stmt((await $.callv(L0["addstr"], [L0["messagebody"], (await $.mv((await $.mcall((await $.v(C, "xs_batchs")), "fieldbyname", ["CLIENT_NAME"])), "asstring")), true])));
    if ($.truthy($.eq((await $.mv((await $.mcall((await $.v(C, "xs_batchs")), "fieldbyname", ["CLIENT_CODE"])), "AsString")), ""))) {
      L0["stmessage"] = "";
    } else {
      L0["stmessage"] = (await $.mv((await $.mcall((await $.v(C, "xs_batchs")), "fieldbyname", ["CLIENT_CODE"])), "AsString"));
    }
    await $.stmt((await $.callv(L0["addstr"], [L0["messagebody"], $.add((await $.mv((await $.mcall((await $.v(C, "xs_batchs")), "fieldbyname", ["CLIENT_INN"])), "asstring")), "/"), true])));
    L0["stmessage"] = "";
    await $.mcall((await $.v(C, "DataTemp")), "Close", []);
    await $.mcall((await $.mv((await $.v(C, "DataTemp")), "SQL")), "Clear", []);
    await $.stmt((await $.mcall((await $.mv((await $.v(C, "DataTemp")), "SQL")), "Add", [$.add($.add("select a.filial as Branch, c.inn from account a,customers c where (a.kli_ID=c.id)and(a.id='", (await $.mv((await $.mcall((await $.v(C, "xs_batchs")), "fieldbyname", ["acc_id"])), "AsString"))), "')")])));
    await $.mcall((await $.v(C, "DataTemp")), "Open", []);
    L0["tempstr"] = (await $.mv((await $.mcall((await $.v(C, "DataTemp")), "FieldByName", ["Branch"])), "AsString"));
    await $.mcall((await $.v(C, "DataTemp")), "Close", []);
    await $.mcall((await $.mv((await $.v(C, "DataTemp")), "SQL")), "Clear", []);
    await $.stmt((await $.mcall((await $.mv((await $.v(C, "DataTemp")), "SQL")), "Add", [$.add("Select kod_b,krno,inn,swift from bankinfo_t where kod_fil=", L0["tempstr"])])));
    await $.mcall((await $.v(C, "DataTemp")), "Open", []);
    L0["stmessage"] = (await $.mv((await $.mcall((await $.v(C, "DataTemp")), "fieldbyname", ["SWIFT"])), "AsString"));
    L0["tempstr"] = (await $.mv((await $.mcall((await $.v(C, "DataTemp")), "fieldbyname", ["KOD_B"])), "asstring"));
    L0["tempstr1"] = (await $.call(C, "SetStringLength", [(await $.mv((await $.mcall((await $.v(C, "DataTemp")), "fieldbyname", ["KRNO"])), "asstring")), 13, "0"]));
    L0["tempstr2"] = (await $.mv((await $.mcall((await $.v(C, "DataTemp")), "fieldbyname", ["INN"])), "asstring"));
    await $.stmt((await $.callv(L0["addstr"], [L0["messagebody"], $.add($.add(L0["tempstr"], "/"), L0["tempstr2"]), true])));
    await $.stmt((await $.callv(L0["addstr"], [L0["messagebody"], L0["tempstr1"], true])));
    await $.mcall((await $.v(C, "DataTemp")), "Close", []);
    await $.mcall((await $.mv((await $.v(C, "DataTemp")), "SQL")), "Clear", []);
    await $.stmt((await $.mcall((await $.mv((await $.v(C, "DataTemp")), "SQL")), "Add", ["Select account from xs_config"])));
    await $.mcall((await $.v(C, "DataTemp")), "Open", []);
    await $.stmt((await $.callv(L0["addstr"], [L0["messagebody"], $.add(":52A:/D/", (await $.mv((await $.mcall((await $.v(C, "DataTemp")), "fieldbyname", ["ACCOUNT"])), "asstring"))), true])));
    await $.stmt((await $.callv(L0["addstr"], [L0["messagebody"], L0["stmessage"], true])));
    L0["stmessage"] = "";
    L0["mess_count"] = 0;
    L0["sum_amount"] = 0;
    await $.mcall((await $.v(C, "Messages")), "Close", []);
    await $.mcall((await $.mv((await $.v(C, "Messages")), "SQL")), "Clear", []);
    await $.stmt((await $.mcall((await $.mv((await $.v(C, "Messages")), "SQL")), "Add", [$.add($.add("select x.*, v.val_name from xs_beneficiary x, avalute v where (x.BatchId='", (await $.mv((await $.mcall((await $.v(C, "xs_batchs")), "fieldbyname", ["ID"])), "AsString"))), "')and (x.val_cod=v.valute)")])));
    await $.mcall((await $.v(C, "Messages")), "Open", []);
    await $.mcall((await $.v(C, "Messages")), "First", []);
    while ($.truthy($.not((await $.mv((await $.v(C, "messages")), "eof"))))) {
      await $.mset((await $.v(C, "ProgressBar1")), "Max", $.idiv((await $.mv((await $.v(C, "Messages")), "RecordCount")), (await $.mv((await $.v(C, "xs_batchs")), "RecordCount"))));
      await $.mcall((await $.v(C, "Application")), "ProcessMessages", []);
      await $.mset((await $.v(C, "ProgressBar1")), "Position", $.add((await $.mv((await $.v(C, "ProgressBar1")), "Position")), 10));
      await $.stmt((await $.callv(L0["addstr"], [L0["messagebody"], $.add(":21:", (await $.mv((await $.mcall((await $.v(C, "messages")), "fieldbyname", ["MESS_REFERENCE"])), "asstring"))), true])));
      await $.stmt((await $.callv(L0["addstr"], [L0["messagebody"], $.add($.add(":32B:", (await $.mv((await $.mcall((await $.v(C, "messages")), "fieldbyname", ["VAL_NAME"])), "asstring"))), (await $.call(C, "ChangeDecimal", [(await $.mv((await $.mcall((await $.v(C, "messages")), "fieldbyname", ["AMOUNT"])), "asfloat"))]))), true])));
      L0["tempstr1"] = (await $.call(C, "SetStringLength", [(await $.mv((await $.mcall((await $.v(C, "messages")), "fieldbyname", ["REC_BANK_SUB_ACC"])), "asstring")), 13, "0"]));
      await $.stmt((await $.callv(L0["addstr"], [L0["messagebody"], $.add(":57A:/C/", L0["tempstr1"]), true])));
      await $.mcall((await $.v(C, "DataTemp")), "Close", []);
      await $.mcall((await $.mv((await $.v(C, "DataTemp")), "SQL")), "Clear", []);
      await $.stmt((await $.mcall((await $.mv((await $.v(C, "DataTemp")), "SQL")), "Add", [$.add($.add("Select swift from bankm where id='", (await $.mv((await $.mcall((await $.v(C, "messages")), "fieldbyname", ["REC_BANK_ID"])), "AsString"))), "'")])));
      await $.mcall((await $.v(C, "DataTemp")), "Open", []);
      await $.stmt((await $.callv(L0["addstr"], [L0["messagebody"], (await $.mv((await $.mcall((await $.v(C, "DataTemp")), "fieldbyname", ["SWIFT"])), "asstring")), true])));
      await $.stmt((await $.callv(L0["addstr"], [L0["messagebody"], $.add(":59:/", (await $.mv((await $.mcall((await $.v(C, "messages")), "fieldbyname", ["CLIENT_ACC_NO"])), "asstring"))), true])));
      await $.stmt((await $.callv(L0["addstr"], [L0["messagebody"], (await $.mv((await $.mcall((await $.v(C, "messages")), "fieldbyname", ["CLIENT_NAME"])), "asstring")), true])));
      if ($.truthy($.eq((await $.call(C, "trim", [(await $.mv((await $.mcall((await $.v(C, "Messages")), "fieldbyname", ["CLIENT_CODE"])), "AsString"))])), ""))) {
        L0["stmessage"] = "";
      } else {
        L0["stmessage"] = (await $.mv((await $.mcall((await $.v(C, "Messages")), "fieldbyname", ["CLIENT_CODE"])), "AsString"));
      }
      await $.stmt((await $.callv(L0["addstr"], [L0["messagebody"], $.add((await $.mv((await $.mcall((await $.v(C, "messages")), "fieldbyname", ["CLIENT_INN"])), "asstring")), "/"), true])));
      L0["stmessage"] = "";
      await $.mcall((await $.v(C, "DataTemp")), "Close", []);
      await $.mcall((await $.mv((await $.v(C, "DataTemp")), "SQL")), "Clear", []);
      await $.stmt((await $.mcall((await $.mv((await $.v(C, "DataTemp")), "SQL")), "Add", [$.add($.add("Select krno,inn,bankcode from bankm where id='", (await $.mv((await $.mcall((await $.v(C, "messages")), "fieldbyname", ["REC_BANK_ID"])), "AsString"))), "'")])));
      await $.mcall((await $.v(C, "DataTemp")), "Open", []);
      L0["tempstr"] = (await $.call(C, "SetStringLength", [(await $.mv((await $.mcall((await $.v(C, "DataTemp")), "fieldbyname", ["KRNO"])), "asstring")), 13, "0"]));
      await $.stmt((await $.callv(L0["addstr"], [L0["messagebody"], $.add($.add((await $.mv((await $.mcall((await $.v(C, "DataTemp")), "fieldbyname", ["BANKCODE"])), "asstring")), "/"), (await $.mv((await $.mcall((await $.v(C, "DataTemp")), "fieldbyname", ["INN"])), "asstring"))), true])));
      await $.stmt((await $.callv(L0["addstr"], [L0["messagebody"], L0["tempstr"], true])));
      L0["stmessage"] = (await $.mcall((await $.v(C, "LVPCSSForm")), "StrPart", [(await $.mv((await $.mcall((await $.v(C, "Messages")), "fieldbyname", ["REMIT_INF"])), "AsString")), "|", 1]));
      if ($.truthy($.ne((await $.call(C, "trim", [L0["stmessage"]])), ""))) {
        await $.stmt((await $.callv(L0["addstr"], [L0["messagebody"], $.add(":70:", L0["stmessage"]), true])));
      }
      L0["stmessage"] = (await $.mcall((await $.v(C, "LVPCSSForm")), "StrPart", [(await $.mv((await $.mcall((await $.v(C, "Messages")), "fieldbyname", ["REMIT_INF"])), "AsString")), "|", 2]));
      if ($.truthy($.ne((await $.call(C, "trim", [L0["stmessage"]])), ""))) {
        await $.stmt((await $.callv(L0["addstr"], [L0["messagebody"], L0["stmessage"], true])));
      }
      L0["stmessage"] = (await $.mcall((await $.v(C, "LVPCSSForm")), "StrPart", [(await $.mv((await $.mcall((await $.v(C, "Messages")), "fieldbyname", ["REMIT_INF"])), "AsString")), "|", 3]));
      if ($.truthy($.ne((await $.call(C, "trim", [L0["stmessage"]])), ""))) {
        await $.stmt((await $.callv(L0["addstr"], [L0["messagebody"], L0["stmessage"], true])));
      }
      L0["stmessage"] = (await $.mcall((await $.v(C, "LVPCSSForm")), "StrPart", [(await $.mv((await $.mcall((await $.v(C, "Messages")), "fieldbyname", ["REMIT_INF"])), "AsString")), "|", 4]));
      if ($.truthy($.ne((await $.call(C, "trim", [L0["stmessage"]])), ""))) {
        await $.stmt((await $.callv(L0["addstr"], [L0["messagebody"], L0["stmessage"], true])));
      }
      await $.stmt((await $.callv(L0["addstr"], [L0["messagebody"], $.add(":26T:", (await $.mv((await $.mcall((await $.v(C, "messages")), "fieldbyname", ["TRANS_COD"])), "asstring"))), true])));
      L0["stmessage"] = (await $.mcall((await $.v(C, "LVPCSSForm")), "StrPart", [(await $.mv((await $.mcall((await $.v(C, "messages")), "fieldbyname", ["ADD_INF"])), "asstring")), "|", 1]));
      if ($.truthy($.ne((await $.call(C, "trim", [L0["stmessage"]])), ""))) {
        await $.stmt((await $.callv(L0["addstr"], [L0["messagebody"], $.add(":77B:", L0["stmessage"]), true])));
      }
      L0["stmessage"] = (await $.mcall((await $.v(C, "LVPCSSForm")), "StrPart", [(await $.mv((await $.mcall((await $.v(C, "messages")), "fieldbyname", ["ADD_INF"])), "asstring")), "|", 2]));
      if ($.truthy($.ne((await $.call(C, "trim", [L0["stmessage"]])), ""))) {
        await $.stmt((await $.callv(L0["addstr"], [L0["messagebody"], L0["stmessage"], true])));
      }
      L0["stmessage"] = (await $.mcall((await $.v(C, "LVPCSSForm")), "StrPart", [(await $.mv((await $.mcall((await $.v(C, "messages")), "fieldbyname", ["ADD_INF"])), "asstring")), "|", 3]));
      if ($.truthy($.ne((await $.call(C, "trim", [L0["stmessage"]])), ""))) {
        await $.stmt((await $.callv(L0["addstr"], [L0["messagebody"], L0["stmessage"], true])));
      }
      L0["mess_count"] = $.add(L0["mess_count"], 1);
      L0["sum_amount"] = $.add(L0["sum_amount"], (await $.mv((await $.mcall((await $.v(C, "messages")), "fieldbyname", ["AMOUNT"])), "AsFloat")));
      await $.mcall((await $.v(C, "Messages")), "Next", []);
      await $.tick();
    }
    await $.stmt((await $.callv(L0["addstr"], [L0["messagebody"], $.add($.add($.add(":32A:", (await $.call(C, "formatdatetime", ["yymmdd", (await $.mv((await $.mcall((await $.v(C, "messages")), "fieldbyname", ["val_date"])), "AsDateTime"))]))), (await $.mv((await $.mcall((await $.v(C, "xs_batchs")), "fieldbyname", ["VAL_NAME"])), "asstring"))), (await $.call(C, "ChangeDecimal", [L0["sum_amount"]]))), true])));
    await $.stmt((await $.callv(L0["addstr"], [L0["messagebody"], $.add(":72:/BNF/", (await $.call(C, "inttostr", [L0["mess_count"]]))), false])));
    await $.stmt((await $.call(C, "Write", [(await $.v(C, "XMLFile")), L0["messagebody"]])));
    await $.stmt((await $.call(C, "Writeln", [(await $.v(C, "XMLFile")), "</body>"])));
    await $.stmt((await $.call(C, "Writeln", [(await $.v(C, "XMLFile")), $.add($.add("<sign>", (await $.call(C, "SetSign", ["", "", L0["messagebody"]]))), "</sign>")])));
    L0["l_chin"] = $.add($.add("<sign>", (await $.call(C, "SetSign", ["", "", L0["messagebody"]]))), "</sign>");
    if ($.truthy($.ne((await $.call(C, "length", [L0["l_chin"]])), 301))) {
      await $.stmt((await $.call(C, "MessageDlg", [$.add($.add($.add($.add("DEFAULT KEY SECHILMEYIB", (await $.call(C, "CHR", [13]))), "LUTFEN DEFAULT KEY-i"), (await $.call(C, "CHR", [13]))), "KEY MANAGER PROGRAMI ILE FLOPPY DIKDEN SECHIN!"), (await $.v(C, "mtWarning")), [(await $.v(C, "mbok"))], 0])));
    }
    await $.stmt((await $.call(C, "WriteLn", [(await $.v(C, "XMLFile")), "</batch>"])));
    L0["sum_all_amount"] = $.add(L0["sum_all_amount"], (await $.mv((await $.mcall((await $.v(C, "xs_batchs")), "fieldbyname", ["AMOUNT"])), "asfloat")));
    await $.mcall((await $.v(C, "xs_batchs")), "Next", []);
    await $.tick();
  }
  await $.stmt((await $.call(C, "Writeln", [(await $.v(C, "XMLFile")), "</block4>"])));
  await $.stmt((await $.call(C, "Writeln", [(await $.v(C, "XMLFile")), $.add($.add("<msg_num_of_batches>", (await $.call(C, "inttostr", [(await $.mv((await $.v(C, "xs_batchs")), "recordcount"))]))), "</msg_num_of_batches>")])));
  await $.stmt((await $.call(C, "Writeln", [(await $.v(C, "XMLFile")), $.add($.add("<msg_amount>", (await $.call(C, "ChangeDecimal", [(await $.mv((await $.v(C, "CurrencyEdit1")), "Value"))]))), "</msg_amount>")])));
  await $.stmt((await $.call(C, "Writeln", [(await $.v(C, "XMLFile")), "</SWIFT_msg_fields>"])));
  await $.stmt((await $.call(C, "CloseFile", [$.ref(async () => (await $.v(C, "XMLFile")), async ($t5) => { await $.set(C, "XMLFile", $t5); })])));
  return L0.result;
}, {"params": [], "kind": "procedure", "ptypes": []});
  U.method("TPrepareFile_Form", "CreateBatchFile", async function CreateBatchFile(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: undefined, "mess_count": 0, "batchnom": 0, "stmessage": '', "messagebody": '', "filename": '', "tempstr": '', "tempstr1": '', "tempstr2": '', "sum_amount": 0, "dir": ''};
  L0["addstr"] = $.fn(async function AddStr(p0, p1, p2) {
  const L1 = {"bodys": $.asRef(p0), "adds": $.copyArg(p1), "newrow": $.copyArg(p2), result: undefined};
  await $.fixArgs(L1, ["adds", "newrow"]);
  await L1["bodys"].set($.add((await L1["bodys"].get()), L1["adds"]));
  if ($.truthy(L1["newrow"])) {
    await L1["bodys"].set($.add((await L1["bodys"].get()), "\n"));
  }
  return L1.result;
});
  await $.mset((await $.v(C, "ProgressBar1")), "Position", 0);
  await $.mcall((await $.mv((await $.v(C, "DataMod")), "DataTemp")), "Close", []);
  await $.mcall((await $.mv((await $.mv((await $.v(C, "DataMod")), "DataTemp")), "SQL")), "Clear", []);
  await $.stmt((await $.mcall((await $.mv((await $.mv((await $.v(C, "DataMod")), "DataTemp")), "SQL")), "Add", ["Select * from xs_config"])));
  await $.mcall((await $.mv((await $.v(C, "DataMod")), "DataTemp")), "Open", []);
  await $.mcall((await $.v(C, "xs_batchs")), "Close", []);
  await $.mcall((await $.mv((await $.v(C, "xs_batchs")), "SQL")), "Clear", []);
  await $.stmt((await $.mcall((await $.mv((await $.v(C, "xs_batchs")), "SQL")), "Add", [(await $.mv((await $.mcall((await $.mv((await $.v(C, "DataMod")), "DataTemp")), "fieldbyname", ["fs_script"])), "AsString"))])));
  await $.mcall((await $.v(C, "xs_batchs")), "open", []);
  if ($.truthy($.not((await $.call(C, "DirectoryExists", [$.add($.add((await $.mv((await $.mcall((await $.mv((await $.v(C, "DataMod")), "DataTemp")), "fieldbyname", ["out_dir"])), "AsString")), "\\"), (await $.call(C, "FormatDateTime", ["ddmmyy", (await $.v(C, "date"))])))]))))) {
    await $.stmt((await $.call(C, "MkDir", [$.add($.add((await $.mv((await $.mcall((await $.mv((await $.v(C, "DataMod")), "DataTemp")), "fieldbyname", ["out_dir"])), "AsString")), "\\"), (await $.call(C, "FormatDateTime", ["ddmmyy", (await $.v(C, "date"))])))])));
  }
  L0["dir"] = $.add($.add($.add((await $.mv((await $.mcall((await $.mv((await $.v(C, "DataMod")), "DataTemp")), "fieldbyname", ["out_dir"])), "AsString")), "\\"), (await $.call(C, "FormatDateTime", ["ddmmyy", (await $.v(C, "date"))]))), "\\Batches\\");
  if ($.truthy($.not((await $.call(C, "DirectoryExists", [L0["dir"]]))))) {
    await $.stmt((await $.call(C, "MkDir", [L0["dir"]])));
  }
  if ($.truthy($.eq((await $.call(C, "Trim", [(await $.mv((await $.v(C, "Edit_reference")), "Text"))])), ""))) {
    return L0.result;
  }
  L0["batchnom"] = 0;
  while ($.truthy($.not((await $.mv((await $.v(C, "xs_batchs")), "Eof"))))) {
    L0["batchnom"] = $.add(L0["batchnom"], 1);
    L0["filename"] = $.add($.add($.add($.add(L0["dir"], (await $.mv((await $.v(C, "Edit_reference")), "Text"))), "-"), (await $.call(C, "inttostr", [L0["batchnom"]]))), ".xml");
    await $.mcall((await $.v(C, "ProgressBar1")), "Show", []);
    await $.stmt((await $.call(C, "AssignFile", [$.ref(async () => (await $.v(C, "XMLFile")), async ($t6) => { await $.set(C, "XMLFile", $t6); }), L0["filename"]])));
    await $.stmt((await $.call(C, "Rewrite", [$.ref(async () => (await $.v(C, "XMLFile")), async ($t7) => { await $.set(C, "XMLFile", $t7); })])));
    await $.stmt((await $.call(C, "Writeln", [(await $.v(C, "XMLFile")), "<?xml version=\"1.0\" encoding=\"latin1\" ?>"])));
    await $.stmt((await $.call(C, "Writeln", [(await $.v(C, "XMLFile")), "<SWIFT_msg_fields>"])));
    await $.stmt((await $.call(C, "Writeln", [(await $.v(C, "XMLFile")), $.add($.add("<msg_sender>", (await $.mv((await $.v(C, "Edit_sender")), "text"))), "</msg_sender>")])));
    await $.stmt((await $.call(C, "Writeln", [(await $.v(C, "XMLFile")), $.add($.add("<msg_receiver>", (await $.mv((await $.v(C, "Edit_receiver")), "text"))), "</msg_receiver>")])));
    await $.stmt((await $.call(C, "Writeln", [(await $.v(C, "XMLFile")), $.add($.add("<msg_user_reference>", (await $.mv((await $.mcall((await $.v(C, "xs_batchs")), "FieldByName", ["trans_ref"])), "AsString"))), "</msg_user_reference>")])));
    await $.stmt((await $.call(C, "Writeln", [(await $.v(C, "XMLFile")), "<msg_type>102</msg_type>"])));
    await $.stmt((await $.call(C, "Writeln", [(await $.v(C, "XMLFile")), "<msg_num_of_batches>1</msg_num_of_batches>"])));
    await $.stmt((await $.call(C, "Writeln", [(await $.v(C, "XMLFile")), $.add($.add("<msg_amount>", (await $.call(C, "ChangeDecimal", [(await $.mv((await $.mcall((await $.v(C, "xs_batchs")), "fieldbyname", ["Amount"])), "AsFloat"))]))), "</msg_amount>")])));
    await $.stmt((await $.call(C, "Writeln", [(await $.v(C, "XMLFile")), "<block4>"])));
    await $.mcall((await $.v(C, "Application")), "ProcessMessages", []);
    await $.stmt((await $.call(C, "Writeln", [(await $.v(C, "XMLFile")), "<batch>"])));
    await $.stmt((await $.call(C, "Writeln", [(await $.v(C, "XMLFile")), $.add("<body>:20:", (await $.mv((await $.mcall((await $.v(C, "xs_batchs")), "fieldbyname", ["TRANS_REF"])), "asstring")))])));
    await $.stmt((await $.call(C, "Writeln", [(await $.v(C, "XMLFile")), $.add(":23:", (await $.mv((await $.mcall((await $.v(C, "xs_batchs")), "fieldbyname", ["OPERCODE"])), "asstring")))])));
    await $.stmt((await $.call(C, "Writeln", [(await $.v(C, "XMLFile")), $.add(":50K:/", (await $.mv((await $.mcall((await $.v(C, "xs_batchs")), "fieldbyname", ["ACC_NO"])), "asstring")))])));
    await $.stmt((await $.call(C, "Writeln", [(await $.v(C, "XMLFile")), (await $.mv((await $.mcall((await $.v(C, "xs_batchs")), "fieldbyname", ["CLIENT_NAME"])), "asstring"))])));
    if ($.truthy($.eq((await $.call(C, "Trim", [(await $.mv((await $.mcall((await $.v(C, "xs_batchs")), "fieldbyname", ["CLIENT_CODE"])), "AsString"))])), ""))) {
      L0["stmessage"] = "/";
    } else {
      L0["stmessage"] = (await $.mv((await $.mcall((await $.v(C, "xs_batchs")), "fieldbyname", ["CLIENT_CODE"])), "AsString"));
    }
    await $.stmt((await $.call(C, "Writeln", [(await $.v(C, "XMLFile")), L0["stmessage"]])));
    L0["stmessage"] = "";
    await $.mcall((await $.v(C, "DataTemp")), "Close", []);
    await $.mcall((await $.mv((await $.v(C, "DataTemp")), "SQL")), "Clear", []);
    await $.stmt((await $.mcall((await $.mv((await $.v(C, "DataTemp")), "SQL")), "Add", [$.add($.add("select c.inn from account a,customers c where (a.kli_ID=c.id)and(a.id='", (await $.mv((await $.mcall((await $.v(C, "xs_batchs")), "fieldbyname", ["acc_id"])), "AsString"))), "')")])));
    await $.mcall((await $.v(C, "DataTemp")), "Open", []);
    await $.stmt((await $.call(C, "Writeln", [(await $.v(C, "XMLFile")), (await $.mv((await $.mcall((await $.v(C, "xs_batchs")), "fieldbyname", ["CLIENT_INN"])), "asstring"))])));
    await $.mcall((await $.v(C, "DataTemp")), "Close", []);
    await $.mcall((await $.mv((await $.v(C, "DataTemp")), "SQL")), "Clear", []);
    await $.stmt((await $.mcall((await $.mv((await $.v(C, "DataTemp")), "SQL")), "Add", ["Select kod_b,krno,inn,swift from bankinfo"])));
    await $.mcall((await $.v(C, "DataTemp")), "Open", []);
    L0["stmessage"] = (await $.mv((await $.mcall((await $.v(C, "DataTemp")), "fieldbyname", ["SWIFT"])), "AsString"));
    L0["tempstr"] = (await $.mv((await $.mcall((await $.v(C, "DataTemp")), "fieldbyname", ["KOD_B"])), "asstring"));
    L0["tempstr1"] = (await $.call(C, "SetStringLength", [(await $.mv((await $.mcall((await $.v(C, "DataTemp")), "fieldbyname", ["KRNO"])), "asstring")), 13, "0"]));
    L0["tempstr2"] = (await $.mv((await $.mcall((await $.v(C, "DataTemp")), "fieldbyname", ["INN"])), "asstring"));
    if ($.truthy((await $.and_(($.gt((await $.mv((await $.mcall((await $.v(C, "xs_batchs")), "FieldByName", ["filial"])), "AsInteger")), 0)), async () => ($.ne((await $.mv((await $.mcall((await $.v(C, "xs_batchs")), "FieldByName", ["filial"])), "AsInteger")), (await $.v(C, "null")))))))) {
      await $.mcall((await $.v(C, "DataTemp")), "Close", []);
      await $.mcall((await $.mv((await $.v(C, "DataTemp")), "SQL")), "Clear", []);
      await $.stmt((await $.mcall((await $.mv((await $.v(C, "DataTemp")), "SQL")), "Add", [$.add($.add("Select kod_bFil,inn_Fil from Filialinfo where kod_fil='", (await $.mv((await $.mcall((await $.v(C, "xs_batchs")), "FieldByName", ["filial"])), "AsString"))), "'")])));
      await $.mcall((await $.v(C, "DataTemp")), "Open", []);
      L0["tempstr"] = (await $.mv((await $.mcall((await $.v(C, "DataTemp")), "fieldbyname", ["KOD_BFIL"])), "asstring"));
      L0["tempstr2"] = (await $.mv((await $.mcall((await $.v(C, "DataTemp")), "fieldbyname", ["INN_FIL"])), "asstring"));
    }
    await $.stmt((await $.call(C, "Writeln", [(await $.v(C, "XMLFile")), $.add($.add($.add($.add(L0["tempstr"], "/"), L0["tempstr1"]), "/"), L0["tempstr2"])])));
    await $.mcall((await $.v(C, "DataTemp")), "Close", []);
    await $.mcall((await $.mv((await $.v(C, "DataTemp")), "SQL")), "Clear", []);
    await $.stmt((await $.mcall((await $.mv((await $.v(C, "DataTemp")), "SQL")), "Add", ["Select account from xs_config"])));
    await $.mcall((await $.v(C, "DataTemp")), "Open", []);
    await $.stmt((await $.call(C, "Writeln", [(await $.v(C, "XMLFile")), $.add(":52A:/D/", (await $.mv((await $.mcall((await $.v(C, "DataTemp")), "fieldbyname", ["ACCOUNT"])), "asstring")))])));
    await $.stmt((await $.call(C, "Writeln", [(await $.v(C, "XMLFile")), L0["stmessage"]])));
    L0["stmessage"] = "";
    L0["mess_count"] = 0;
    L0["sum_amount"] = 0;
    await $.mcall((await $.v(C, "Messages")), "Close", []);
    await $.mcall((await $.mv((await $.v(C, "Messages")), "SQL")), "Clear", []);
    await $.stmt((await $.mcall((await $.mv((await $.v(C, "Messages")), "SQL")), "Add", [$.add($.add("select x.*, v.val_name from xs_beneficiary x, avalute v where (x.xs_batchs_id='", (await $.mv((await $.mcall((await $.v(C, "xs_batchs")), "fieldbyname", ["ID"])), "AsString"))), "')and (x.val_cod=v.valute)")])));
    await $.mcall((await $.v(C, "Messages")), "Open", []);
    while ($.truthy($.not((await $.mv((await $.v(C, "messages")), "eof"))))) {
      await $.mset((await $.v(C, "ProgressBar1")), "Max", $.idiv((await $.mv((await $.v(C, "Messages")), "RecordCount")), (await $.mv((await $.v(C, "xs_batchs")), "RecordCount"))));
      await $.mcall((await $.v(C, "Application")), "ProcessMessages", []);
      await $.mset((await $.v(C, "ProgressBar1")), "Position", $.add((await $.mv((await $.v(C, "ProgressBar1")), "Position")), 10));
      await $.stmt((await $.call(C, "Writeln", [(await $.v(C, "XMLFile")), $.add(":21:", (await $.mv((await $.mcall((await $.v(C, "messages")), "fieldbyname", ["MESS_REFERENCE"])), "asstring")))])));
      await $.stmt((await $.call(C, "Writeln", [(await $.v(C, "XMLFile")), $.add($.add(":32B:", (await $.mv((await $.mcall((await $.v(C, "messages")), "fieldbyname", ["VAL_NAME"])), "asstring"))), (await $.call(C, "ChangeDecimal", [(await $.mv((await $.mcall((await $.v(C, "messages")), "fieldbyname", ["AMOUNT"])), "asfloat"))])))])));
      L0["tempstr1"] = (await $.call(C, "SetStringLength", [(await $.mv((await $.mcall((await $.v(C, "messages")), "fieldbyname", ["REC_BANK_SUB_ACC"])), "asstring")), 13, "0"]));
      await $.stmt((await $.call(C, "Writeln", [(await $.v(C, "XMLFile")), $.add(":57A:/C/", L0["tempstr1"])])));
      await $.mcall((await $.v(C, "DataTemp")), "Close", []);
      await $.mcall((await $.mv((await $.v(C, "DataTemp")), "SQL")), "Clear", []);
      await $.stmt((await $.mcall((await $.mv((await $.v(C, "DataTemp")), "SQL")), "Add", [$.add($.add("Select swift from bankm where id='", (await $.mv((await $.mcall((await $.v(C, "messages")), "fieldbyname", ["REC_BANK_ID"])), "AsString"))), "'")])));
      await $.mcall((await $.v(C, "DataTemp")), "Open", []);
      await $.stmt((await $.call(C, "Writeln", [(await $.v(C, "XMLFile")), (await $.mv((await $.mcall((await $.v(C, "DataTemp")), "fieldbyname", ["SWIFT"])), "asstring"))])));
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
      await $.mcall((await $.v(C, "DataTemp")), "Close", []);
      await $.mcall((await $.mv((await $.v(C, "DataTemp")), "SQL")), "Clear", []);
      await $.stmt((await $.mcall((await $.mv((await $.v(C, "DataTemp")), "SQL")), "Add", [$.add($.add("Select krno,inn,bankcode from bankm where id='", (await $.mv((await $.mcall((await $.v(C, "messages")), "fieldbyname", ["REC_BANK_ID"])), "AsString"))), "'")])));
      await $.mcall((await $.v(C, "DataTemp")), "Open", []);
      L0["tempstr"] = (await $.call(C, "SetStringLength", [(await $.mv((await $.mcall((await $.v(C, "DataTemp")), "fieldbyname", ["KRNO"])), "asstring")), 13, "0"]));
      await $.stmt((await $.call(C, "Writeln", [(await $.v(C, "XMLFile")), $.add($.add($.add($.add((await $.mv((await $.mcall((await $.v(C, "DataTemp")), "fieldbyname", ["BANKCODE"])), "asstring")), "/"), L0["tempstr"]), "/"), (await $.mv((await $.mcall((await $.v(C, "DataTemp")), "fieldbyname", ["INN"])), "asstring")))])));
      L0["stmessage"] = (await $.mcall((await $.v(C, "LVPCSSForm")), "StrPart", [(await $.mv((await $.mcall((await $.v(C, "Messages")), "fieldbyname", ["REMIT_INF"])), "AsString")), "|", 1]));
      if ($.truthy($.ne((await $.call(C, "trim", [L0["stmessage"]])), ""))) {
        await $.stmt((await $.callv(L0["addstr"], [L0["messagebody"], $.add(":70:", L0["stmessage"]), true])));
      }
      L0["stmessage"] = (await $.mcall((await $.v(C, "LVPCSSForm")), "StrPart", [(await $.mv((await $.mcall((await $.v(C, "Messages")), "fieldbyname", ["REMIT_INF"])), "AsString")), "|", 2]));
      if ($.truthy($.ne((await $.call(C, "trim", [L0["stmessage"]])), ""))) {
        await $.stmt((await $.callv(L0["addstr"], [L0["messagebody"], L0["stmessage"], true])));
      }
      L0["stmessage"] = (await $.mcall((await $.v(C, "LVPCSSForm")), "StrPart", [(await $.mv((await $.mcall((await $.v(C, "Messages")), "fieldbyname", ["REMIT_INF"])), "AsString")), "|", 3]));
      if ($.truthy($.ne((await $.call(C, "trim", [L0["stmessage"]])), ""))) {
        await $.stmt((await $.callv(L0["addstr"], [L0["messagebody"], L0["stmessage"], true])));
      }
      L0["stmessage"] = (await $.mcall((await $.v(C, "LVPCSSForm")), "StrPart", [(await $.mv((await $.mcall((await $.v(C, "Messages")), "fieldbyname", ["REMIT_INF"])), "AsString")), "|", 4]));
      if ($.truthy($.ne((await $.call(C, "trim", [L0["stmessage"]])), ""))) {
        await $.stmt((await $.callv(L0["addstr"], [L0["messagebody"], L0["stmessage"], true])));
      }
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
      L0["stmessage"] = (await $.call(C, "Trim", [(await $.call(C, "copy", [(await $.mv((await $.mcall((await $.v(C, "messages")), "fieldbyname", ["ADD_INF"])), "asstring")), 0, 35]))]));
      if ($.truthy($.ne((await $.call(C, "trim", [L0["stmessage"]])), ""))) {
        await $.stmt((await $.call(C, "Writeln", [(await $.v(C, "XMLFile")), $.add(":77B:", L0["stmessage"])])));
      }
      L0["stmessage"] = (await $.call(C, "Trim", [(await $.call(C, "copy", [(await $.mv((await $.mcall((await $.v(C, "messages")), "fieldbyname", ["ADD_INF"])), "asstring")), 35, 35]))]));
      if ($.truthy($.ne((await $.call(C, "trim", [L0["stmessage"]])), ""))) {
        await $.stmt((await $.call(C, "Writeln", [(await $.v(C, "XMLFile")), L0["stmessage"]])));
      }
      L0["stmessage"] = (await $.call(C, "Trim", [(await $.call(C, "copy", [(await $.mv((await $.mcall((await $.v(C, "messages")), "fieldbyname", ["ADD_INF"])), "asstring")), 70, 35]))]));
      if ($.truthy($.ne((await $.call(C, "trim", [L0["stmessage"]])), ""))) {
        await $.stmt((await $.call(C, "Writeln", [(await $.v(C, "XMLFile")), L0["stmessage"]])));
      }
      L0["stmessage"] = (await $.call(C, "Trim", [(await $.call(C, "copy", [(await $.mv((await $.mcall((await $.v(C, "messages")), "fieldbyname", ["ADD_INF"])), "asstring")), 105, 35]))]));
      if ($.truthy($.ne((await $.call(C, "trim", [L0["stmessage"]])), ""))) {
        await $.stmt((await $.call(C, "Writeln", [(await $.v(C, "XMLFile")), L0["stmessage"]])));
      }
      L0["mess_count"] = $.add(L0["mess_count"], 1);
      L0["sum_amount"] = $.add(L0["sum_amount"], (await $.mv((await $.mcall((await $.v(C, "messages")), "fieldbyname", ["AMOUNT"])), "AsFloat")));
      await $.mcall((await $.v(C, "Messages")), "Next", []);
      await $.tick();
    }
    await $.stmt((await $.call(C, "Writeln", [(await $.v(C, "XMLFile")), $.add($.add($.add(":32A:", (await $.call(C, "formatdatetime", ["yymmdd", (await $.mv((await $.mcall((await $.v(C, "messages")), "fieldbyname", ["val_date"])), "AsDateTime"))]))), (await $.mv((await $.mcall((await $.v(C, "xs_batchs")), "fieldbyname", ["VAL_NAME"])), "asstring"))), (await $.call(C, "ChangeDecimal", [L0["sum_amount"]])))])));
    await $.stmt((await $.call(C, "Writeln", [(await $.v(C, "XMLFile")), $.add($.add(":72:/BNF/", (await $.call(C, "inttostr", [L0["mess_count"]]))), "</body>")])));
    await $.stmt((await $.call(C, "Writeln", [(await $.v(C, "XMLFile")), "<sign></sign>"])));
    await $.stmt((await $.call(C, "Writeln", [(await $.v(C, "XMLFile")), "</batch>"])));
    await $.stmt((await $.call(C, "Writeln", [(await $.v(C, "XMLFile")), "</block4>"])));
    await $.stmt((await $.call(C, "Writeln", [(await $.v(C, "XMLFile")), "</SWIFT_msg_fields>"])));
    await $.stmt((await $.call(C, "CloseFile", [$.ref(async () => (await $.v(C, "XMLFile")), async ($t8) => { await $.set(C, "XMLFile", $t8); })])));
    await $.mcall((await $.v(C, "xs_batchs")), "Next", []);
    await $.tick();
  }
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
  if ($.truthy($.gt((await $.mv((await $.v(C, "SendingBatchs")), "RecordCount")), 0))) {
    await $.mset((await $.v(C, "Edit_Reference")), "Text", (await $.mcall((await $.mv((await $.v(C, "DataMod")), "INS")), "CallStringfunction", ["GetNewFileReference", []])));
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TPrepareFile_Form", "But_tosendClick", async function But_tosendClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.gt((await $.mv((await $.mcall((await $.v(C, "ReadyBatchs")), "FieldByName", ["AMOUNT"])), "AsFloat")), (await $.mv((await $.mcall((await $.mv((await $.v(C, "DataMod")), "XS_CONFIG")), "FieldByName", ["amount_limit"])), "AsFloat"))))) {
    await $.stmt((await $.call(C, "MessageDlg", [$.add($.add($.add($.add($.add($.add($.add($.add($.add("\"", (await $.call(C, "formatfloat", ["##,##.00", (await $.mv((await $.mcall((await $.v(C, "ReadyBatchs")), "FieldByName", ["amount"])), "Asfloat"))]))), "\""), " meblegi qoyulmus limiti kecir!"), "\r"), "("), (await $.call(C, "formatfloat", ["##,##.00", (await $.mv((await $.mcall((await $.v(C, "ReadyBatchs")), "FieldByName", ["amount"])), "AsFloat"))]))), ">"), (await $.call(C, "formatfloat", ["##,##.00", (await $.mv((await $.mcall((await $.mv((await $.v(C, "DataMod")), "XS_CONFIG")), "FieldByName", ["amount_limit"])), "AsFloat"))]))), ")"), (await $.v(C, "mtWarning")), [(await $.v(C, "mbok"))], 0])));
    return L0.result;
  }
  if ($.truthy(($.eq((await $.mv((await $.v(C, "ReadyBatchs")), "RecordCount")), 0)))) {
    await $.stmt((await $.call(C, "MessageDlg", ["Testiq olunmus \"Batch\" yoxdur !", (await $.v(C, "mtWarning")), [(await $.v(C, "mbok"))], 0])));
    return L0.result;
  }
  try {
    await $.mset((await $.v(C, "Screen")), "Cursor", (await $.v(C, "crSQLWait")));
    await $.stmt((await $.mcall((await $.v(C, "Convert_pack")), "CallProcedure", ["BatchToSendingBatchs", [(await $.mv((await $.mcall((await $.v(C, "ReadyBatchs")), "fieldbyname", ["id"])), "asinteger")), 0]])));
    await $.mcall((await $.v(C, "ReadyBatchs")), "Refresh", []);
    await $.mcall((await $.v(C, "SendingBatchs")), "Refresh", []);
    await $.mset((await $.v(C, "CurrencyEdit1")), "Value", (await $.mcall((await $.v(C, "Convert_pack")), "CallFloatFunction", ["GetBatchAmount", []])));
    await $.mset((await $.v(C, "Edit_count")), "Text", (await $.call(C, "IntToStr", [(await $.mv((await $.v(C, "SendingBatchs")), "RecordCount"))])));
  } finally {
    await $.mset((await $.v(C, "Screen")), "Cursor", (await $.v(C, "crDefault")));
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TPrepareFile_Form", "But_noSendClick", async function But_noSendClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy(($.eq((await $.mv((await $.v(C, "SendingBatchs")), "RecordCount")), 0)))) {
    return L0.result;
  }
  await $.stmt((await $.mcall((await $.v(C, "Convert_pack")), "CallProcedure", ["BatchToReadyBatchs", [(await $.mv((await $.mcall((await $.v(C, "SendingBatchs")), "fieldbyname", ["id"])), "asinteger")), 0]])));
  try {
    await $.mset((await $.v(C, "Screen")), "Cursor", (await $.v(C, "crSQLWait")));
    await $.mcall((await $.v(C, "ReadyBatchs")), "Refresh", []);
    await $.mcall((await $.v(C, "SendingBatchs")), "Refresh", []);
    await $.mset((await $.v(C, "CurrencyEdit1")), "Value", (await $.mcall((await $.v(C, "Convert_pack")), "CallFloatFunction", ["GetBatchAmount", []])));
    await $.mset((await $.v(C, "Edit_count")), "Text", (await $.call(C, "inttostr", [(await $.mv((await $.v(C, "SendingBatchs")), "RecordCount"))])));
  } finally {
    await $.mset((await $.v(C, "Screen")), "Cursor", (await $.v(C, "crDefault")));
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TPrepareFile_Form", "FormClose", async function FormClose(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "action": $.asRef(p1), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mcall((await $.v(C, "ReadyBatchs")), "Close", []);
  await $.mcall((await $.v(C, "SendingBatchs")), "Close", []);
  await $.mset((await $.v(C, "ProgressBar1")), "Position", 0);
  return L0.result;
}, {"params": ["Sender", "Action"], "kind": "procedure", "ptypes": ["TObject", "TCloseAction"]});
  U.method("TPrepareFile_Form", "All_to_sendClick", async function All_to_sendClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.gt((await $.mv((await $.mcall((await $.v(C, "ReadyBatchs")), "FieldByName", ["AMOUNT"])), "AsFloat")), (await $.mv((await $.mcall((await $.mv((await $.v(C, "DataMod")), "XS_CONFIG")), "FieldByName", ["Amount_limit"])), "AsFloat"))))) {
    await $.stmt((await $.call(C, "MessageDlg", [$.add($.add($.add($.add($.add($.add($.add($.add($.add("\"", (await $.call(C, "formatfloat", ["##,##.00", (await $.mv((await $.mcall((await $.v(C, "ReadyBatchs")), "FieldByName", ["amount"])), "Asfloat"))]))), "\""), " meblegi qoyulmus limiti kecir!"), "\r"), "("), (await $.call(C, "formatfloat", ["##,##.00", (await $.mv((await $.mcall((await $.v(C, "ReadyBatchs")), "FieldByName", ["amount"])), "AsFloat"))]))), ">"), (await $.call(C, "formatfloat", ["##,##.00", (await $.mv((await $.mcall((await $.mv((await $.v(C, "DataMod")), "XS_CONFIG")), "FieldByName", ["amount_limit"])), "AsFloat"))]))), ")"), (await $.v(C, "mtWarning")), [(await $.v(C, "mbok"))], 0])));
    return L0.result;
  }
  if ($.truthy(($.eq((await $.mv((await $.v(C, "ReadyBatchs")), "RecordCount")), 0)))) {
    await $.stmt((await $.call(C, "MessageDlg", ["Testiq olunmus \"Batch\" yoxdur !", (await $.v(C, "mtWarning")), [(await $.v(C, "mbok"))], 0])));
    return L0.result;
  }
  try {
    await $.mset((await $.v(C, "Screen")), "Cursor", (await $.v(C, "crSQLWait")));
    await $.stmt((await $.mcall((await $.v(C, "Convert_pack")), "CallProcedure", ["BatchToSendingBatchs", [0, 1]])));
    await $.mcall((await $.v(C, "ReadyBatchs")), "Refresh", []);
    await $.mcall((await $.v(C, "SendingBatchs")), "Refresh", []);
    await $.mset((await $.v(C, "CurrencyEdit1")), "Value", (await $.mcall((await $.v(C, "Convert_pack")), "CallFloatFunction", ["GetBatchAmount", []])));
    await $.mset((await $.v(C, "Edit_count")), "Text", (await $.call(C, "inttostr", [(await $.mv((await $.v(C, "SendingBatchs")), "RecordCount"))])));
  } finally {
    await $.mset((await $.v(C, "Screen")), "Cursor", (await $.v(C, "crDefault")));
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TPrepareFile_Form", "All_to_NosendClick", async function All_to_NosendClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.eq((await $.mv((await $.v(C, "SendingBatchs")), "RecordCount")), 0))) {
    return L0.result;
  }
  await $.stmt((await $.mcall((await $.v(C, "Convert_pack")), "CallProcedure", ["BatchToReadyBatchs", [0, 1]])));
  try {
    await $.mset((await $.v(C, "Screen")), "Cursor", (await $.v(C, "crSQLWait")));
    await $.mcall((await $.v(C, "ReadyBatchs")), "Refresh", []);
    await $.mcall((await $.v(C, "SendingBatchs")), "Refresh", []);
    await $.mset((await $.v(C, "CurrencyEdit1")), "Value", (await $.mcall((await $.v(C, "Convert_pack")), "CallFloatFunction", ["GetBatchAmount", []])));
    await $.mset((await $.v(C, "Edit_count")), "Text", (await $.call(C, "inttostr", [(await $.mv((await $.v(C, "SendingBatchs")), "RecordCount"))])));
  } finally {
    await $.mset((await $.v(C, "Screen")), "Cursor", (await $.v(C, "crDefault")));
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TPrepareFile_Form", "Button_fileClick", async function Button_fileClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.eq((await $.mv((await $.v(C, "SendingBatchs")), "RecordCount")), 0))) {
    return L0.result;
  }
  if ($.truthy($.eq((await $.call(C, "Trim", [(await $.mv((await $.v(C, "Edit_reference")), "Text"))])), ""))) {
    await $.stmt((await $.call(C, "MessageDlg", ["Qeydiyyat №-si verilmeyib !", (await $.v(C, "mtWarning")), [(await $.v(C, "mbok"))], 0])));
    return L0.result;
  }
  await $.mset((await $.v(C, "screen")), "Cursor", (await $.v(C, "crSQLWait")));
  await $.stmt($.call(C, "CreateFile", []));
  await $.stmt((await $.mcall((await $.v(C, "Convert_pack")), "CallProcedure", ["xs_SentInfo_insert", ["S", (await $.mv((await $.v(C, "edit_sender")), "text")), (await $.mv((await $.v(C, "edit_receiver")), "text")), (await $.mv((await $.v(C, "Edit1")), "text")), "N", "N", "C099", (await $.v(C, "date")), (await $.mv((await $.v(C, "edit_reference")), "text")), 0]])));
  await $.mcall((await $.v(C, "Edit_reference")), "Clear", []);
  await $.mset((await $.v(C, "Edit_count")), "Text", "0");
  await $.mset((await $.v(C, "CurrencyEdit1")), "Text", "0");
  await $.mcall((await $.v(C, "ReadyBatchs")), "Refresh", []);
  await $.mcall((await $.v(C, "SendingBatchs")), "Refresh", []);
  await $.mcall((await $.v(C, "LVPCSSForm")), "RefreshDataBatchs", []);
  await $.mcall((await $.v(C, "ProgressBar1")), "Hide", []);
  await $.mset((await $.v(C, "screen")), "Cursor", (await $.v(C, "crDefault")));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TPrepareFile_Form", "FormKeyUp", async function FormKeyUp(Self, p0, p1, p2) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "key": $.asRef(p1), "shift": $.copyArg(p2), result: undefined};
  await $.fixArgs(L0, ["sender", "shift"]);
  if ($.truthy($.eq((await L0["key"].get()), (await $.v(C, "Vk_escape"))))) {
    await $.stmt($.call(C, "close", []));
  }
  return L0.result;
}, {"params": ["Sender", "Key", "Shift"], "kind": "procedure", "ptypes": ["TObject", "Word", "TShiftState"]});
  U.method("TPrepareFile_Form", "but_batchClick", async function but_batchClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.eq((await $.mv((await $.v(C, "SendingBatchs")), "RecordCount")), 0))) {
    return L0.result;
  }
  if ($.truthy($.eq((await $.call(C, "Trim", [(await $.mv((await $.v(C, "Edit_reference")), "Text"))])), ""))) {
    await $.stmt((await $.call(C, "MessageDlg", ["Qeydiyyat №-si verilmeyib !", (await $.v(C, "mtWarning")), [(await $.v(C, "mbok"))], 0])));
    return L0.result;
  }
  await $.mset((await $.v(C, "screen")), "Cursor", (await $.v(C, "crSQLWait")));
  await $.stmt($.call(C, "CreateBatchFile", []));
  await $.mcall((await $.v(C, "Button_file")), "Click", []);
  await $.mcall((await $.v(C, "Edit_reference")), "Clear", []);
  await $.mset((await $.v(C, "Edit_count")), "Text", "0");
  await $.mset((await $.v(C, "CurrencyEdit1")), "Text", "0");
  await $.mcall((await $.v(C, "ReadyBatchs")), "Refresh", []);
  await $.mcall((await $.v(C, "SendingBatchs")), "Refresh", []);
  await $.mcall((await $.v(C, "LVPCSSForm")), "RefreshDataBatchs", []);
  await $.mcall((await $.v(C, "ProgressBar1")), "Hide", []);
  await $.mset((await $.v(C, "screen")), "Cursor", (await $.v(C, "crDefault")));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TPrepareFile_Form", "Edit_referenceKeyPress", async function Edit_referenceKeyPress(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "key": $.asRef(p1), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy(($.not(($.in_((await L0["key"].get()), [...$.range("0","9"), ...$.range("a","z"), ...$.range("A","Z"), "/", "-", ":", "(", ")", ".", ",", "'", "+", "{", "}", " ", "\b"])))))) {
    await L0["key"].set("\u0000");
  }
  return L0.result;
}, {"params": ["Sender", "Key"], "kind": "procedure", "ptypes": ["TObject", "Char"]});
  return U;
}
