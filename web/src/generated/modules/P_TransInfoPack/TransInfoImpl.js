// Generated from TransInfoImpl.pas by pas2js — do not edit by hand; regenerate instead.
/* eslint-disable */
// @ts-nocheck

export default function define($) {
  const U = $.unit("TransInfoImpl", ["Windows", "Messages", "SysUtils", "Variants", "Classes", "Graphics", "Controls", "Forms", "Dialogs", "DBCtrls", "CommonDecls", "StdCtrls", "ComCtrls", "Mask", "CurrencyEdit", "Buttons", "DMTransInfo"]);
  const C = [U];
  U.defClass("TTransInfo", "TForm", {"groupbox1": {"name": "GroupBox1", "type": "TGroupBox"}, "label8": {"name": "Label8", "type": "TLabel"}, "label7": {"name": "Label7", "type": "TLabel"}, "dblcb_mmx_transaction_item_type": {"name": "DBLCB_mmx_transaction_item_type", "type": "TDBLookupComboBox"}, "groupbox2": {"name": "GroupBox2", "type": "TGroupBox"}, "dblcb_mmx_fromfunds": {"name": "DBLCB_mmx_fromfunds", "type": "TDBLookupComboBox"}, "dblcb_mmx_reportcode": {"name": "DBLCB_mmx_reportcode", "type": "TDBLookupComboBox"}, "dblcb_mmx_transmode": {"name": "DBLCB_mmx_transmode", "type": "TDBLookupComboBox"}, "reason_memo": {"name": "Reason_Memo", "type": "TMemo"}, "label1": {"name": "Label1", "type": "TLabel"}, "label2": {"name": "Label2", "type": "TLabel"}, "label3": {"name": "Label3", "type": "TLabel"}, "label4": {"name": "Label4", "type": "TLabel"}, "memo_transmode_comment": {"name": "Memo_transmode_comment", "type": "TMemo"}, "memo_fromfundscomment": {"name": "Memo_fromfundsComment", "type": "TMemo"}, "label5": {"name": "Label5", "type": "TLabel"}, "label6": {"name": "Label6", "type": "TLabel"}, "label9": {"name": "Label9", "type": "TLabel"}, "memo_itemdesc": {"name": "Memo_ItemDesc", "type": "TMemo"}, "edit_itemmake": {"name": "Edit_ItemMake", "type": "TEdit"}, "label10": {"name": "Label10", "type": "TLabel"}, "label11": {"name": "Label11", "type": "TLabel"}, "edit_previously_registered_to": {"name": "Edit_previously_registered_to", "type": "TEdit"}, "edit_presently_registered_to": {"name": "Edit_presently_registered_to", "type": "TEdit"}, "label12": {"name": "Label12", "type": "TLabel"}, "label13": {"name": "Label13", "type": "TLabel"}, "dblcb_mmx_trans_item_status": {"name": "DBLCB_MMX_TRANS_ITEM_STATUS", "type": "TDBLookupComboBox"}, "label14": {"name": "Label14", "type": "TLabel"}, "memo_status_comments": {"name": "Memo_status_comments", "type": "TMemo"}, "label15": {"name": "Label15", "type": "TLabel"}, "label16": {"name": "Label16", "type": "TLabel"}, "label17": {"name": "Label17", "type": "TLabel"}, "edit_item_size": {"name": "Edit_item_size", "type": "TEdit"}, "edit_item_size_uom": {"name": "Edit_item_size_uom", "type": "TEdit"}, "groupbox3": {"name": "GroupBox3", "type": "TGroupBox"}, "label18": {"name": "Label18", "type": "TLabel"}, "label19": {"name": "Label19", "type": "TLabel"}, "label20": {"name": "Label20", "type": "TLabel"}, "label21": {"name": "Label21", "type": "TLabel"}, "edit_registration_number": {"name": "Edit_registration_number", "type": "TEdit"}, "edit_identification_number": {"name": "Edit_Identification_number", "type": "TEdit"}, "memo_itemcomments": {"name": "Memo_ItemComments", "type": "TMemo"}, "dtp_item_registration_date": {"name": "DTP_item_registration_date", "type": "TDateTimePicker"}, "label22": {"name": "Label22", "type": "TLabel"}, "label23": {"name": "Label23", "type": "TLabel"}, "label24": {"name": "Label24", "type": "TLabel"}, "label25": {"name": "Label25", "type": "TLabel"}, "label26": {"name": "Label26", "type": "TLabel"}, "label27": {"name": "Label27", "type": "TLabel"}, "dblcb_mmx_contact_type": {"name": "DBLCB_mmx_contact_type", "type": "TDBLookupComboBox"}, "edit_itemadress": {"name": "Edit_ItemAdress", "type": "TEdit"}, "dblcb_itemcity": {"name": "DBLCB_ItemCity", "type": "TDBLookupComboBox"}, "edit_itemstate": {"name": "Edit_ItemState", "type": "TEdit"}, "edit_itemzip": {"name": "Edit_ItemZip", "type": "TEdit"}, "dblcb_itemcountry": {"name": "DBLCB_ItemCountry", "type": "TDBLookupComboBox"}, "label28": {"name": "Label28", "type": "TLabel"}, "dblcb_mmx_tofunds": {"name": "DBLCB_mmx_tofunds", "type": "TDBLookupComboBox"}, "memo_tofundscomment": {"name": "Memo_tofundsComment", "type": "TMemo"}, "label29": {"name": "Label29", "type": "TLabel"}, "label30": {"name": "Label30", "type": "TLabel"}, "label31": {"name": "Label31", "type": "TLabel"}, "label32": {"name": "Label32", "type": "TLabel"}, "label33": {"name": "Label33", "type": "TLabel"}, "label34": {"name": "Label34", "type": "TLabel"}, "label35": {"name": "Label35", "type": "TLabel"}, "label36": {"name": "Label36", "type": "TLabel"}, "label37": {"name": "Label37", "type": "TLabel"}, "label38": {"name": "Label38", "type": "TLabel"}, "edit1": {"name": "Edit1", "type": "TEdit"}, "label39": {"name": "Label39", "type": "TLabel"}, "label40": {"name": "Label40", "type": "TLabel"}, "label41": {"name": "Label41", "type": "TLabel"}, "label42": {"name": "Label42", "type": "TLabel"}, "edit_estimated_value": {"name": "Edit_estimated_value", "type": "TCurrencyEdit"}, "edit_disposed_value": {"name": "Edit_disposed_value", "type": "TCurrencyEdit"}, "btnok": {"name": "BtnOk", "type": "TBitBtn"}, "btncancel": {"name": "BtnCancel", "type": "TBitBtn"}, "p_reportcode": {"name": "p_reportcode", "type": "String"}, "p_reason": {"name": "p_Reason", "type": "String"}, "p_transmode_comment": {"name": "p_transmode_comment", "type": "String"}, "p_fromfunds_code": {"name": "p_fromfunds_code", "type": "String"}, "p_fromfundscomment": {"name": "p_fromfundsComment", "type": "String"}, "p_tofunds_code": {"name": "p_tofunds_code", "type": "String"}, "p_tofundscomment": {"name": "p_tofundsComment", "type": "String"}, "p_contact_type": {"name": "p_contact_type", "type": "String"}, "p_itemadress": {"name": "p_ItemAdress", "type": "String"}, "p_itemcountry": {"name": "p_ItemCountry", "type": "String"}, "p_itemstate": {"name": "p_ItemState", "type": "String"}, "p_itemzip": {"name": "p_ItemZip", "type": "String"}, "p_transaction_item_type": {"name": "p_transaction_item_type", "type": "String"}, "p_itemmake": {"name": "p_ItemMake", "type": "String"}, "p_itemdesc": {"name": "p_ItemDesc", "type": "String"}, "p_previously_registered_to": {"name": "p_previously_registered_to", "type": "String"}, "p_presently_registered_to": {"name": "p_presently_registered_to", "type": "String"}, "p_trans_item_status": {"name": "p_TRANS_ITEM_STATUS", "type": "String"}, "p_status_comments": {"name": "p_status_comments", "type": "String"}, "p_item_size_uom": {"name": "p_item_size_uom", "type": "String"}, "p_registration_number": {"name": "p_registration_number", "type": "String"}, "p_identification_number": {"name": "p_Identification_number", "type": "String"}, "p_itemcomments": {"name": "p_ItemComments", "type": "String"}, "p_itemcity": {"name": "p_ItemCity", "type": "String"}, "p_estimated_value": {"name": "p_estimated_value", "type": "Real"}, "p_item_size": {"name": "p_item_size", "type": "Real"}, "p_disposed_value": {"name": "p_disposed_value", "type": "Real"}, "p_transmode_code": {"name": "p_transmode_code", "type": "Real"}, "v_trid": {"name": "v_trID", "type": "Real"}, "p_transaction_id": {"name": "p_transaction_id", "type": "Integer"}, "p_item_registration_date": {"name": "p_item_registration_date", "type": "TdateTime"}, "isedit": {"name": "isedit", "type": "Boolean"}}, {});
  U.init(async () => {
    U.var_("TransInfo", null, "TTransInfo");
    U.var_("isOk", false, "Boolean");
  });
  U.func("InitPlugin", async function InitPlugin(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"s": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["s"]);
  if ($.truthy($.eq(L0["s"], "TransInfoImpl"))) {
    await $.mcall((await $.v(C, "TransInfo")), "Showmodal", []);
  }
  return L0.result;
}, {"params": ["s"], "kind": "procedure", "ptypes": ["String"]});
  U.method("TTransInfo", "BtnCancelClick", async function BtnCancelClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.stmt($.call(C, "clearAmmounts", []));
  await $.mcall((await $.v(C, "TransInfo")), "Close", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TTransInfo", "BtnOkClick", async function BtnOkClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.eq((await $.v(C, "isEdit")), true))) {
    await $.stmt($.call(C, "UpdateTransInfo", []));
    if ($.truthy((await $.v(C, "isOK")))) {
      await $.stmt($.call(C, "ClearAmmounts", []));
      await $.mcall((await $.v(C, "TransInfo")), "Close", []);
    }
  } else {
    await $.stmt($.call(C, "SaveTransInfo", []));
    if ($.truthy((await $.v(C, "isOK")))) {
      await $.stmt($.call(C, "ClearAmmounts", []));
      await $.mcall((await $.v(C, "TransInfo")), "Close", []);
    }
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TTransInfo", "Edit_disposed_valueKeyPress", async function Edit_disposed_valueKeyPress(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "key": $.asRef(p1), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.not(($.in_((await L0["key"].get()), [...$.range("0","9"), ".", "\b"]))))) {
    await L0["key"].set("\u0000");
  }
  return L0.result;
}, {"params": ["Sender", "Key"], "kind": "procedure", "ptypes": ["TObject", "Char"]});
  U.method("TTransInfo", "Edit_estimated_valueKeyPress", async function Edit_estimated_valueKeyPress(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "key": $.asRef(p1), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.not(($.in_((await L0["key"].get()), [...$.range("0","9"), ".", "\b"]))))) {
    await L0["key"].set("\u0000");
  }
  return L0.result;
}, {"params": ["Sender", "Key"], "kind": "procedure", "ptypes": ["TObject", "Char"]});
  U.method("TTransInfo", "FormClose", async function FormClose(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "action": $.asRef(p1), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mset((await $.mv((await $.v(C, "TransInfo")), "BtnCancel")), "Enabled", true);
  return L0.result;
}, {"params": ["Sender", "Action"], "kind": "procedure", "ptypes": ["TObject", "TCloseAction"]});
  U.method("TTransInfo", "FormCreate", async function FormCreate(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.set(C, "DM", (await $.mcall((await $.v(C, "TDm")), "Create", [Self])));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TTransInfo", "FormShow", async function FormShow(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t1 = (await $.v(C, "DM"));
    await $.mcall((await $.wv([$t1], "ODS_mmx_transaction_item_type", C, false)), "Open", []);
    await $.mcall((await $.wv([$t1], "ODS_mmx_reportcode", C, false)), "Open", []);
    await $.mcall((await $.wv([$t1], "ODS_mmx_transmode", C, false)), "Open", []);
    await $.mcall((await $.wv([$t1], "ODS_mmx_contact_type", C, false)), "Open", []);
    await $.mcall((await $.wv([$t1], "ODS_mmx_fromfunds", C, false)), "Open", []);
    await $.mcall((await $.wv([$t1], "ODS_mmx_tofunds", C, false)), "Open", []);
    await $.mcall((await $.wv([$t1], "ODS_MMX_TRANS_ITEM_STATUS", C, false)), "Open", []);
    await $.mcall((await $.wv([$t1], "ODS_Countries", C, false)), "Open", []);
    await $.mcall((await $.wv([$t1], "ODS_Cityes", C, false)), "Open", []);
  }
  if ($.truthy($.eq((await $.v(C, "isEdit")), true))) {
    await $.stmt($.call(C, "ShowTransInfo", []));
  } else {
    await $.stmt($.call(C, "ClearAmmounts", []));
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TTransInfo", "ClearAmmounts", async function ClearAmmounts(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: undefined};
  await $.mset((await $.v(C, "DBLCB_mmx_reportcode")), "Keyvalue", (await $.v(C, "null")));
  await $.mcall((await $.v(C, "Reason_Memo")), "Clear", []);
  await $.mset((await $.v(C, "DBLCB_mmx_transmode")), "KeyValue", (await $.v(C, "null")));
  await $.mcall((await $.v(C, "Memo_transmode_comment")), "Clear", []);
  await $.mset((await $.v(C, "DBLCB_mmx_fromfunds")), "KeyValue", (await $.v(C, "null")));
  await $.mcall((await $.v(C, "Memo_fromfundsComment")), "Clear", []);
  await $.mset((await $.v(C, "DBLCB_mmx_tofunds")), "KeyValue", (await $.v(C, "null")));
  await $.mcall((await $.v(C, "Memo_tofundsComment")), "Clear", []);
  await $.mset((await $.v(C, "DBLCB_mmx_contact_type")), "KeyValue", (await $.v(C, "Null")));
  await $.mcall((await $.v(C, "Edit_ItemAdress")), "Clear", []);
  await $.mset((await $.v(C, "DBLCB_ItemCountry")), "KeyValue", (await $.v(C, "null")));
  await $.mset((await $.v(C, "DBLCB_ItemCity")), "KeyValue", (await $.v(C, "null")));
  await $.mcall((await $.v(C, "Edit_ItemState")), "Clear", []);
  await $.mcall((await $.v(C, "Edit_ItemZip")), "Clear", []);
  await $.mset((await $.v(C, "DBLCB_mmx_transaction_item_type")), "KeyValue", (await $.v(C, "null")));
  await $.mcall((await $.v(C, "Edit_ItemMake")), "Clear", []);
  await $.mcall((await $.v(C, "Memo_ItemDesc")), "Clear", []);
  await $.mcall((await $.v(C, "Edit_previously_registered_to")), "Clear", []);
  await $.mcall((await $.v(C, "Edit_presently_registered_to")), "Clear", []);
  await $.mset((await $.v(C, "Edit_estimated_value")), "Value", 0);
  await $.mset((await $.v(C, "DBLCB_MMX_TRANS_ITEM_STATUS")), "KeyValue", (await $.v(C, "null")));
  await $.mcall((await $.v(C, "Memo_status_comments")), "Clear", []);
  await $.mset((await $.v(C, "Edit_disposed_value")), "Value", 0);
  await $.mset((await $.v(C, "Edit_item_size")), "Text", "0");
  await $.mcall((await $.v(C, "Edit_item_size_uom")), "Clear", []);
  await $.mset((await $.v(C, "DTP_item_registration_date")), "DateTime", (await $.v(C, "date")));
  await $.mcall((await $.v(C, "Edit_registration_number")), "Clear", []);
  await $.mcall((await $.v(C, "Edit_Identification_number")), "Clear", []);
  await $.mcall((await $.v(C, "Memo_ItemComments")), "Clear", []);
  return L0.result;
}, {"params": [], "kind": "procedure", "ptypes": []});
  U.method("TTransInfo", "ShowTransInfo", async function ShowTransInfo(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: undefined};
  {
    const $t2 = (await $.mv((await $.v(C, "DM")), "ODS_TransInfo"));
    await $.stmt($.wcall([$t2], "Close", [], C));
    await $.stmt((await $.wcall([$t2], "SetVariable", ["v_TransID", (await $.wv([$t2], "v_trID", C, false))], C)));
    await $.stmt($.wcall([$t2], "Open", [], C));
    await $.mset((await $.wv([$t2], "DBLCB_mmx_reportcode", C, false)), "Keyvalue", (await $.mv((await $.wcall([$t2], "FieldByName", ["report_code"], C)), "AsString")));
    await $.mset((await $.wv([$t2], "Reason_Memo", C, false)), "Text", (await $.mv((await $.wcall([$t2], "FieldByName", ["reason"], C)), "AsString")));
    await $.mset((await $.wv([$t2], "DBLCB_mmx_transmode", C, false)), "KeyValue", (await $.mv((await $.wcall([$t2], "FieldByName", ["transmode_code"], C)), "asString")));
    await $.mset((await $.wv([$t2], "Memo_transmode_comment", C, false)), "Text", (await $.mv((await $.wcall([$t2], "FieldByName", ["transmode_comment"], C)), "asString")));
    await $.mset((await $.wv([$t2], "DBLCB_mmx_fromfunds", C, false)), "KeyValue", (await $.mv((await $.wcall([$t2], "FieldByName", ["from_funds_code"], C)), "asString")));
    await $.mset((await $.wv([$t2], "Memo_fromfundsComment", C, false)), "Text", (await $.mv((await $.wcall([$t2], "FieldByName", ["from_funds_comment"], C)), "asString")));
    await $.mset((await $.wv([$t2], "DBLCB_mmx_tofunds", C, false)), "KeyValue", (await $.mv((await $.wcall([$t2], "FieldByName", ["to_funds_code"], C)), "asString")));
    await $.mset((await $.wv([$t2], "Memo_tofundsComment", C, false)), "Text", (await $.mv((await $.wcall([$t2], "FieldByName", ["to_funds_comment"], C)), "asString")));
    await $.mset((await $.wv([$t2], "DBLCB_mmx_contact_type", C, false)), "KeyValue", (await $.mv((await $.wcall([$t2], "FieldByName", ["contact_type"], C)), "asString")));
    await $.mset((await $.wv([$t2], "Edit_ItemAdress", C, false)), "Text", (await $.mv((await $.wcall([$t2], "FieldByName", ["itemadress"], C)), "asString")));
    await $.mset((await $.wv([$t2], "DBLCB_ItemCountry", C, false)), "KeyValue", (await $.mv((await $.wcall([$t2], "FieldByName", ["itemcountry"], C)), "asString")));
    await $.mset((await $.wv([$t2], "DBLCB_ItemCity", C, false)), "KeyValue", (await $.mv((await $.wcall([$t2], "FieldByName", ["itemcity"], C)), "asString")));
    await $.mset((await $.wv([$t2], "Edit_ItemState", C, false)), "Text", (await $.mv((await $.wcall([$t2], "FieldByName", ["itemstate"], C)), "asString")));
    await $.mset((await $.wv([$t2], "Edit_ItemZip", C, false)), "Text", (await $.mv((await $.wcall([$t2], "FieldByName", ["itemzip"], C)), "asString")));
    await $.mset((await $.wv([$t2], "DBLCB_mmx_transaction_item_type", C, false)), "KeyValue", (await $.mv((await $.wcall([$t2], "FieldByName", ["item_type"], C)), "asString")));
    await $.mset((await $.wv([$t2], "Edit_ItemMake", C, false)), "Text", (await $.mv((await $.wcall([$t2], "FieldByName", ["item_make"], C)), "asString")));
    await $.mset((await $.wv([$t2], "Memo_ItemDesc", C, false)), "Text", (await $.mv((await $.wcall([$t2], "FieldByName", ["description"], C)), "asString")));
    await $.mset((await $.wv([$t2], "Edit_previously_registered_to", C, false)), "Text", (await $.mv((await $.wcall([$t2], "FieldByName", ["previously_registered_to"], C)), "asString")));
    await $.mset((await $.wv([$t2], "Edit_presently_registered_to", C, false)), "Text", (await $.mv((await $.wcall([$t2], "FieldByName", ["presently_registered_to"], C)), "asString")));
    await $.mset((await $.wv([$t2], "Edit_estimated_value", C, false)), "Value", (await $.mv((await $.wcall([$t2], "FieldByName", ["estimated_value"], C)), "asFloat")));
    await $.mset((await $.wv([$t2], "DBLCB_MMX_TRANS_ITEM_STATUS", C, false)), "KeyValue", (await $.mv((await $.wcall([$t2], "FieldByName", ["status_code"], C)), "asString")));
    await $.mset((await $.wv([$t2], "Memo_status_comments", C, false)), "Text", (await $.mv((await $.wcall([$t2], "FieldByName", ["status_comments"], C)), "asString")));
    await $.mset((await $.wv([$t2], "Edit_disposed_value", C, false)), "Value", (await $.mv((await $.wcall([$t2], "FieldByName", ["disposed_value"], C)), "asFloat")));
    await $.mset((await $.wv([$t2], "Edit_item_size", C, false)), "Text", (await $.mv((await $.wcall([$t2], "FieldByName", ["item_size"], C)), "asString")));
    await $.mset((await $.wv([$t2], "Edit_item_size_uom", C, false)), "Text", (await $.mv((await $.wcall([$t2], "FieldByName", ["item_size_uom"], C)), "asString")));
    await $.mset((await $.wv([$t2], "DTP_item_registration_date", C, false)), "DateTime", (await $.mv((await $.wcall([$t2], "FieldByName", ["item_registration_date"], C)), "asDateTime")));
    await $.mset((await $.wv([$t2], "Edit_registration_number", C, false)), "Text", (await $.mv((await $.wcall([$t2], "FieldByName", ["item_registration_number"], C)), "asString")));
    await $.mset((await $.wv([$t2], "Edit_Identification_number", C, false)), "Text", (await $.mv((await $.wcall([$t2], "FieldByName", ["item_identification_number"], C)), "asString")));
    await $.mset((await $.wv([$t2], "Memo_ItemComments", C, false)), "Text", (await $.mv((await $.wcall([$t2], "FieldByName", ["item_comments"], C)), "asString")));
  }
  return L0.result;
}, {"params": [], "kind": "procedure", "ptypes": []});
  U.method("TTransInfo", "SaveTransInfo", async function SaveTransInfo(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: undefined};
  await $.set(C, "isOk", false);
  if ($.truthy($.not(($.eq((await $.mv((await $.v(C, "DBLCB_mmx_reportcode")), "KeyValue")), (await $.v(C, "null"))))))) {
    await $.set(C, "p_reportcode", (await $.mv((await $.v(C, "DBLCB_mmx_reportcode")), "KeyValue")));
  } else {
    await $.stmt((await $.call(C, "showmessage", ["Məlumatın növü daxil edilməlidir!"])));
    return L0.result;
  }
  if ($.truthy($.eq((await $.mv((await $.mv((await $.v(C, "DM")), "ODS_mmx_reportcodeNAME")), "Text")), "STR"))) {
    if ($.truthy($.ne((await $.call(C, "trim", [(await $.mv((await $.v(C, "Reason_Memo")), "Text"))])), ""))) {
      await $.set(C, "p_Reason", (await $.mv((await $.v(C, "Reason_Memo")), "Text")));
    } else {
      await $.stmt((await $.call(C, "showmessage", ["Məlumatın göndərilməsi üçün səbəbin nə olduğunu daxil edilməlidir!"])));
      return L0.result;
    }
  }
  if ($.truthy($.not(($.eq((await $.mv((await $.v(C, "DBLCB_mmx_transmode")), "KeyValue")), (await $.v(C, "null"))))))) {
    await $.set(C, "p_transmode_code", (await $.mv((await $.v(C, "DBLCB_mmx_transmode")), "KeyValue")));
  } else {
    await $.stmt((await $.call(C, "showmessage", ["Əməliyyatın növü daxil edilməlidir!"])));
    return L0.result;
  }
  if ($.truthy($.eq((await $.mv((await $.mv((await $.v(C, "DM")), "ODS_mmx_transmodeNAME")), "AsInteger")), 9999))) {
    if ($.truthy($.ne((await $.call(C, "trim", [(await $.mv((await $.v(C, "Memo_transmode_comment")), "Text"))])), ""))) {
      await $.set(C, "p_transmode_comment", (await $.mv((await $.v(C, "Memo_transmode_comment")), "Text")));
    } else {
      await $.stmt((await $.call(C, "showmessage", ["Əməliyyatın növünün izahı daxil edilməlidir!"])));
      return L0.result;
    }
  }
  if ($.truthy($.not(($.eq((await $.mv((await $.v(C, "DBLCB_mmx_fromfunds")), "KeyValue")), (await $.v(C, "null"))))))) {
    await $.set(C, "p_fromfunds_code", (await $.mv((await $.v(C, "DBLCB_mmx_fromfunds")), "KeyValue")));
  } else {
    await $.stmt((await $.call(C, "showmessage", ["Əməliyyatın predmeti olan vəsaitlərin növü daxil edilməlidir!"])));
    return L0.result;
  }
  if ($.truthy($.eq((await $.mv((await $.mv((await $.v(C, "DM")), "ODS_mmx_fromfundsSYMBOL")), "Text")), "O"))) {
    if ($.truthy($.ne((await $.call(C, "trim", [(await $.mv((await $.v(C, "Memo_fromfundsComment")), "Text"))])), ""))) {
      await $.set(C, "p_fromfundsComment", (await $.mv((await $.v(C, "Memo_fromfundsComment")), "Text")));
    } else {
      await $.stmt((await $.call(C, "showmessage", ["Vəsaitin növünün izahı daxil edilməlidir!"])));
      return L0.result;
    }
  }
  if ($.truthy($.not(($.eq((await $.mv((await $.v(C, "DBLCB_mmx_tofunds")), "KeyValue")), (await $.v(C, "null"))))))) {
    await $.set(C, "p_tofunds_code", (await $.mv((await $.v(C, "DBLCB_mmx_tofunds")), "KeyValue")));
  } else {
    await $.stmt((await $.call(C, "showmessage", ["Əməliyyatın predmeti olan vəsaitlərin növü daxil edilməlidir!"])));
    return L0.result;
  }
  if ($.truthy($.eq((await $.mv((await $.mv((await $.v(C, "DM")), "ODS_mmx_tofundsSYMBOL")), "Text")), "O"))) {
    if ($.truthy($.ne((await $.call(C, "trim", [(await $.mv((await $.v(C, "Memo_tofundsComment")), "Text"))])), ""))) {
      await $.set(C, "p_tofundsComment", (await $.mv((await $.v(C, "Memo_tofundsComment")), "Text")));
    } else {
      await $.stmt((await $.call(C, "showmessage", ["Vəsaitin növünün izahı daxil edilməlidir!"])));
      return L0.result;
    }
  }
  if ($.truthy($.not(($.eq((await $.mv((await $.v(C, "DBLCB_mmx_contact_type")), "KeyValue")), (await $.v(C, "null"))))))) {
    await $.set(C, "p_contact_type", (await $.mv((await $.v(C, "DBLCB_mmx_contact_type")), "KeyValue")));
  } else {
    await $.stmt((await $.call(C, "showmessage", ["Əşyanın yerləşdiyi adress tipi daxil edilməlidir!"])));
    return L0.result;
  }
  await $.set(C, "p_ItemAdress", (await $.mv((await $.v(C, "Edit_ItemAdress")), "Text")));
  if ($.truthy($.not(($.eq((await $.mv((await $.v(C, "DBLCB_ItemCountry")), "KeyValue")), (await $.v(C, "null"))))))) {
    await $.set(C, "p_ItemCountry", (await $.mv((await $.v(C, "DBLCB_ItemCountry")), "KeyValue")));
  } else {
    await $.stmt((await $.call(C, "showmessage", ["Ölkə daxil edilməlidir!"])));
    return L0.result;
  }
  await $.set(C, "p_ItemCity", (await $.mv((await $.mcall((await $.mv((await $.v(C, "DM")), "ODS_Cityes")), "FieldByName", ["city_name"])), "AsString")));
  await $.set(C, "p_ItemState", (await $.mv((await $.v(C, "Edit_ItemState")), "Text")));
  await $.set(C, "p_ItemZip", (await $.mv((await $.v(C, "Edit_ItemZip")), "Text")));
  if ($.truthy($.not(($.eq((await $.mv((await $.v(C, "DBLCB_mmx_transaction_item_type")), "KeyValue")), (await $.v(C, "null"))))))) {
    await $.set(C, "p_transaction_item_type", (await $.mv((await $.v(C, "DBLCB_mmx_transaction_item_type")), "KeyValue")));
  } else {
    await $.stmt((await $.call(C, "showmessage", ["Əşyanın növü daxil edilməlidir!"])));
    return L0.result;
  }
  await $.set(C, "p_ItemMake", (await $.mv((await $.v(C, "Edit_ItemMake")), "Text")));
  await $.set(C, "p_ItemDesc", (await $.mv((await $.v(C, "Memo_ItemDesc")), "Text")));
  await $.set(C, "p_previously_registered_to", (await $.mv((await $.v(C, "Edit_previously_registered_to")), "Text")));
  await $.set(C, "p_presently_registered_to", (await $.mv((await $.v(C, "Edit_presently_registered_to")), "Text")));
  await $.set(C, "p_estimated_value", (await $.mv((await $.v(C, "Edit_estimated_value")), "Value")));
  if ($.truthy($.not(($.eq((await $.mv((await $.v(C, "DBLCB_MMX_TRANS_ITEM_STATUS")), "KeyValue")), (await $.v(C, "null"))))))) {
    await $.set(C, "p_TRANS_ITEM_STATUS", (await $.mv((await $.v(C, "DBLCB_MMX_TRANS_ITEM_STATUS")), "KeyValue")));
  } else {
    await $.stmt((await $.call(C, "showmessage", ["Əşyanın statusu daxil edilməlidir!"])));
    return L0.result;
  }
  await $.set(C, "p_status_comments", (await $.mv((await $.v(C, "Memo_status_comments")), "Text")));
  await $.set(C, "p_disposed_value", (await $.mv((await $.v(C, "Edit_disposed_value")), "Value")));
  await $.set(C, "p_item_size", (await $.call(C, "strtofloat", [(await $.mv((await $.v(C, "Edit_item_size")), "Text"))])));
  await $.set(C, "p_item_size_uom", (await $.mv((await $.v(C, "Edit_item_size_uom")), "Text")));
  await $.set(C, "p_item_registration_date", (await $.mv((await $.v(C, "DTP_item_registration_date")), "Date")));
  await $.set(C, "p_registration_number", (await $.mv((await $.v(C, "Edit_registration_number")), "Text")));
  await $.set(C, "p_Identification_number", (await $.mv((await $.v(C, "Edit_Identification_number")), "Text")));
  await $.set(C, "p_ItemComments", (await $.mv((await $.v(C, "Memo_ItemComments")), "Text")));
  await $.set(C, "p_transaction_id", (-(1)));
  await $.set(C, "isOk", true);
  return L0.result;
}, {"params": [], "kind": "procedure", "ptypes": []});
  U.method("TTransInfo", "UpdateTransInfo", async function UpdateTransInfo(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: undefined};
  await $.set(C, "isOK", false);
  {
    const $t3 = (await $.mv((await $.v(C, "DM")), "ODS_TransInfo"));
    await $.stmt($.wcall([$t3], "Close", [], C));
    await $.stmt((await $.wcall([$t3], "SetVariable", ["v_TransID", (await $.wv([$t3], "v_trID", C, false))], C)));
    await $.stmt($.wcall([$t3], "Open", [], C));
    await $.stmt($.wcall([$t3], "Edit", [], C));
    await $.mset((await $.wcall([$t3], "FieldByName", ["report_code"], C)), "AsString", (await $.mv((await $.wv([$t3], "DBLCB_mmx_reportcode", C, false)), "Keyvalue")));
    await $.mset((await $.wcall([$t3], "FieldByName", ["reason"], C)), "AsString", (await $.mv((await $.wv([$t3], "Reason_Memo", C, false)), "Text")));
    await $.mset((await $.wcall([$t3], "FieldByName", ["transmode_code"], C)), "asString", (await $.mv((await $.wv([$t3], "DBLCB_mmx_transmode", C, false)), "KeyValue")));
    await $.mset((await $.wcall([$t3], "FieldByName", ["transmode_comment"], C)), "asString", (await $.mv((await $.wv([$t3], "Memo_transmode_comment", C, false)), "Text")));
    await $.mset((await $.wcall([$t3], "FieldByName", ["from_funds_code"], C)), "asString", (await $.mv((await $.wv([$t3], "DBLCB_mmx_fromfunds", C, false)), "KeyValue")));
    await $.mset((await $.wcall([$t3], "FieldByName", ["from_funds_comment"], C)), "asString", (await $.mv((await $.wv([$t3], "Memo_fromfundsComment", C, false)), "Text")));
    await $.mset((await $.wcall([$t3], "FieldByName", ["to_funds_code"], C)), "asString", (await $.mv((await $.wv([$t3], "DBLCB_mmx_tofunds", C, false)), "KeyValue")));
    await $.mset((await $.wcall([$t3], "FieldByName", ["to_funds_comment"], C)), "asString", (await $.mv((await $.wv([$t3], "Memo_tofundsComment", C, false)), "Text")));
    await $.mset((await $.wcall([$t3], "FieldByName", ["contact_type"], C)), "asString", (await $.mv((await $.wv([$t3], "DBLCB_mmx_contact_type", C, false)), "KeyValue")));
    await $.mset((await $.wcall([$t3], "FieldByName", ["itemadress"], C)), "asString", (await $.mv((await $.wv([$t3], "Edit_ItemAdress", C, false)), "Text")));
    await $.mset((await $.wcall([$t3], "FieldByName", ["itemcountry"], C)), "asString", (await $.mv((await $.wv([$t3], "DBLCB_ItemCountry", C, false)), "KeyValue")));
    await $.mset((await $.wcall([$t3], "FieldByName", ["itemcity"], C)), "asString", (await $.mv((await $.wv([$t3], "DBLCB_ItemCity", C, false)), "KeyValue")));
    await $.mset((await $.wcall([$t3], "FieldByName", ["itemstate"], C)), "asString", (await $.mv((await $.wv([$t3], "Edit_ItemState", C, false)), "Text")));
    await $.mset((await $.wcall([$t3], "FieldByName", ["itemzip"], C)), "asString", (await $.mv((await $.wv([$t3], "Edit_ItemZip", C, false)), "Text")));
    await $.mset((await $.wcall([$t3], "FieldByName", ["item_type"], C)), "asString", (await $.mv((await $.wv([$t3], "DBLCB_mmx_transaction_item_type", C, false)), "KeyValue")));
    await $.mset((await $.wcall([$t3], "FieldByName", ["item_make"], C)), "asString", (await $.mv((await $.wv([$t3], "Edit_ItemMake", C, false)), "Text")));
    await $.mset((await $.wcall([$t3], "FieldByName", ["description"], C)), "asString", (await $.mv((await $.wv([$t3], "Memo_ItemDesc", C, false)), "Text")));
    await $.mset((await $.wcall([$t3], "FieldByName", ["previously_registered_to"], C)), "asString", (await $.mv((await $.wv([$t3], "Edit_previously_registered_to", C, false)), "Text")));
    await $.mset((await $.wcall([$t3], "FieldByName", ["presently_registered_to"], C)), "asString", (await $.mv((await $.wv([$t3], "Edit_presently_registered_to", C, false)), "Text")));
    await $.mset((await $.wcall([$t3], "FieldByName", ["estimated_value"], C)), "asFloat", (await $.mv((await $.wv([$t3], "Edit_estimated_value", C, false)), "Value")));
    await $.mset((await $.wcall([$t3], "FieldByName", ["status_code"], C)), "asString", (await $.mv((await $.wv([$t3], "DBLCB_MMX_TRANS_ITEM_STATUS", C, false)), "KeyValue")));
    await $.mset((await $.wcall([$t3], "FieldByName", ["status_comments"], C)), "asString", (await $.mv((await $.wv([$t3], "Memo_status_comments", C, false)), "Text")));
    await $.mset((await $.wcall([$t3], "FieldByName", ["disposed_value"], C)), "asFloat", (await $.mv((await $.wv([$t3], "Edit_disposed_value", C, false)), "Value")));
    await $.mset((await $.wcall([$t3], "FieldByName", ["item_size"], C)), "asString", (await $.mv((await $.wv([$t3], "Edit_item_size", C, false)), "Text")));
    await $.mset((await $.wcall([$t3], "FieldByName", ["item_size_uom"], C)), "asString", (await $.mv((await $.wv([$t3], "Edit_item_size_uom", C, false)), "Text")));
    await $.mset((await $.wcall([$t3], "FieldByName", ["item_registration_date"], C)), "asDateTime", (await $.mv((await $.wv([$t3], "DTP_item_registration_date", C, false)), "DateTime")));
    await $.mset((await $.wcall([$t3], "FieldByName", ["item_registration_number"], C)), "asString", (await $.mv((await $.wv([$t3], "Edit_registration_number", C, false)), "Text")));
    await $.mset((await $.wcall([$t3], "FieldByName", ["item_identification_number"], C)), "asString", (await $.mv((await $.wv([$t3], "Edit_Identification_number", C, false)), "Text")));
    await $.mset((await $.wcall([$t3], "FieldByName", ["item_comments"], C)), "asString", (await $.mv((await $.wv([$t3], "Memo_ItemComments", C, false)), "Text")));
    await $.stmt($.wcall([$t3], "Post", [], C));
  }
  await $.set(C, "isOK", true);
  return L0.result;
}, {"params": [], "kind": "procedure", "ptypes": []});
  U.setInitialization(async function __initialization(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: undefined};
  await $.set(C, "TransInfo", (await $.mcall((await $.v(C, "TTransInfo")), "Create", [(await $.v(C, "commonapplication"))])));
  return L0.result;
});
  return U;
}
