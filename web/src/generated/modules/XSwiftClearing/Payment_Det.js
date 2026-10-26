// Generated from Payment_Det.pas by pas2js — do not edit by hand; regenerate instead.
/* eslint-disable */
// @ts-nocheck

export default function define($) {
  const U = $.unit("Payment_Det", ["Windows", "Messages", "SysUtils", "Classes", "Graphics", "Controls", "Forms", "Dialogs", "ComCtrls", "StdCtrls", "ExtCtrls", "Buttons", "DBCtrls", "CurrencyEdit", "swift_unit", "TransTypeUnit", "Data_Unit", "Transaction_Unit", "sboapiDataModuleImpl"]);
  const C = [U];
  U.defClass("TPaymentDetalsForm", "TForm", {"accountgb": {"name": "AccountGB", "type": "TGroupBox"}, "panel1": {"name": "Panel1", "type": "TPanel"}, "panel6": {"name": "Panel6", "type": "TPanel"}, "groupbox3": {"name": "GroupBox3", "type": "TGroupBox"}, "p13": {"name": "P13", "type": "TPanel"}, "edit_referens": {"name": "Edit_Referens", "type": "TEdit"}, "panel3": {"name": "Panel3", "type": "TPanel"}, "groupbox1": {"name": "GroupBox1", "type": "TGroupBox"}, "p18": {"name": "P18", "type": "TPanel"}, "edit_client_name": {"name": "Edit_Client_Name", "type": "TEdit"}, "p19": {"name": "P19", "type": "TPanel"}, "edit_client_code": {"name": "Edit_Client_Code", "type": "TEdit"}, "p17": {"name": "P17", "type": "TPanel"}, "p20": {"name": "P20", "type": "TPanel"}, "edit_client_voen": {"name": "Edit_Client_Voen", "type": "TEdit"}, "p14": {"name": "P14", "type": "TPanel"}, "combo_valute": {"name": "Combo_Valute", "type": "TComboBox"}, "p16": {"name": "P16", "type": "TPanel"}, "edit_transcode": {"name": "Edit_TransCode", "type": "TEdit"}, "button4": {"name": "Button4", "type": "TButton"}, "groupbox2": {"name": "GroupBox2", "type": "TGroupBox"}, "p7": {"name": "P7", "type": "TPanel"}, "p12": {"name": "P12", "type": "TPanel"}, "edit_bik": {"name": "Edit_Bik", "type": "TEdit"}, "p11": {"name": "P11", "type": "TPanel"}, "combo_bankname": {"name": "Combo_BankName", "type": "TComboBox"}, "edit_account_sub": {"name": "Edit_Account_Sub", "type": "TEdit"}, "p8": {"name": "P8", "type": "TPanel"}, "edit_bankcode": {"name": "Edit_BankCode", "type": "TEdit"}, "p9": {"name": "P9", "type": "TPanel"}, "edit_account": {"name": "Edit_account", "type": "TEdit"}, "p10": {"name": "P10", "type": "TPanel"}, "edit_voen": {"name": "Edit_Voen", "type": "TEdit"}, "groupbox4": {"name": "GroupBox4", "type": "TGroupBox"}, "p2": {"name": "P2", "type": "TPanel"}, "edit_bankcode_self": {"name": "Edit_BankCode_Self", "type": "TEdit"}, "p3": {"name": "P3", "type": "TPanel"}, "edit_account_self": {"name": "Edit_account_Self", "type": "TEdit"}, "p4": {"name": "P4", "type": "TPanel"}, "edit_voen_self": {"name": "Edit_Voen_Self", "type": "TEdit"}, "p5": {"name": "P5", "type": "TPanel"}, "edit_account_sub_self": {"name": "Edit_account_sub_Self", "type": "TEdit"}, "p6": {"name": "P6", "type": "TPanel"}, "edit_bik_self": {"name": "Edit_BIK_Self", "type": "TEdit"}, "p1": {"name": "P1", "type": "TPanel"}, "edit_bankname_self": {"name": "Edit_BankName_Self", "type": "TEdit"}, "edit_client_acc_no": {"name": "Edit_Client_acc_no", "type": "TEdit"}, "groupbox5": {"name": "GroupBox5", "type": "TGroupBox"}, "p15": {"name": "P15", "type": "TPanel"}, "edit_amount1": {"name": "Edit_Amount1", "type": "TEdit"}, "speedbutton1": {"name": "SpeedButton1", "type": "TSpeedButton"}, "edit_tey1": {"name": "Edit_tey1", "type": "TEdit"}, "edit_tey2": {"name": "Edit_tey2", "type": "TEdit"}, "edit_tey3": {"name": "Edit_tey3", "type": "TEdit"}, "edit_tey4": {"name": "Edit_tey4", "type": "TEdit"}, "button1": {"name": "Button1", "type": "TButton"}, "button2": {"name": "Button2", "type": "TButton"}, "valute_id": {"name": "Valute_ID", "type": "TListBox"}, "bank_id": {"name": "Bank_ID", "type": "TListBox"}, "groupbox6": {"name": "GroupBox6", "type": "TGroupBox"}, "edit_inf1": {"name": "Edit_inf1", "type": "TEdit"}, "edit_inf2": {"name": "Edit_inf2", "type": "TEdit"}, "edit_inf3": {"name": "Edit_inf3", "type": "TEdit"}, "button3": {"name": "Button3", "type": "TButton"}, "speedbutton2": {"name": "SpeedButton2", "type": "TSpeedButton"}, "edit_amount": {"name": "Edit_amount", "type": "TCurrencyEdit"}, "bnf_count": {"name": "bnf_count", "type": "integer"}}, {});
  U.init(async () => {
    U.var_("PaymentDetalsForm", null, "TPaymentDetalsForm");
  });
  U.func("checkfield", async function checkfield(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: false};
  if ($.truthy((await $.or_((await $.or_((await $.or_((await $.or_((await $.or_((await $.or_((await $.or_((await $.or_((await $.or_((await $.or_((await $.or_((await $.or_(($.eq((await $.call(C, "Trim", [(await $.mv((await $.mv((await $.v(C, "PaymentDetalsForm")), "Edit_Referens")), "Text"))])), "")), async () => ($.eq((await $.call(C, "Trim", [(await $.mv((await $.mv((await $.v(C, "PaymentDetalsForm")), "Edit_Amount")), "Text"))])), "")))), async () => ($.eq((await $.call(C, "Trim", [(await $.mv((await $.mv((await $.v(C, "PaymentDetalsForm")), "Edit_TransCode")), "Text"))])), "")))), async () => ($.eq((await $.mv((await $.mv((await $.v(C, "PaymentDetalsForm")), "Combo_BankName")), "ItemIndex")), (-(1)))))), async () => ($.eq((await $.call(C, "Trim", [(await $.mv((await $.mv((await $.v(C, "PaymentDetalsForm")), "Edit_BankCode")), "Text"))])), "")))), async () => ($.eq((await $.call(C, "Trim", [(await $.mv((await $.mv((await $.v(C, "PaymentDetalsForm")), "Edit_account")), "Text"))])), "")))), async () => ($.eq((await $.call(C, "Trim", [(await $.mv((await $.mv((await $.v(C, "PaymentDetalsForm")), "Edit_Voen")), "Text"))])), "")))), async () => ($.eq((await $.call(C, "Trim", [(await $.mv((await $.mv((await $.v(C, "PaymentDetalsForm")), "Edit_Account_Sub")), "Text"))])), "")))), async () => ($.eq((await $.call(C, "Trim", [(await $.mv((await $.mv((await $.v(C, "PaymentDetalsForm")), "Edit_Bik")), "Text"))])), "")))), async () => ($.eq((await $.call(C, "Trim", [(await $.mv((await $.mv((await $.v(C, "PaymentDetalsForm")), "Edit_Client_acc_no")), "Text"))])), "")))), async () => ($.eq((await $.call(C, "Trim", [(await $.mv((await $.mv((await $.v(C, "PaymentDetalsForm")), "Edit_Client_Name")), "Text"))])), "")))), async () => ($.eq((await $.call(C, "Trim", [(await $.mv((await $.mv((await $.v(C, "PaymentDetalsForm")), "Edit_Client_Voen")), "Text"))])), "")))), async () => ($.eq((await $.call(C, "Trim", [(await $.mv((await $.mv((await $.v(C, "PaymentDetalsForm")), "Edit_tey1")), "Text"))])), "")))))) {
    L0["result"] = false;
    await $.stmt((await $.call(C, "ShowMessage", ["Melumat Tam deyil !"])));
  } else {
    L0["result"] = true;
  }
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TPaymentDetalsForm", "SpeedButton1Click", async function SpeedButton1Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "i": 0};
  await $.fixArgs(L0, ["sender"]);
  await $.mset((await $.v(C, "TransCodeForm")), "typecode", 0);
  await $.mset((await $.v(C, "TransCodeForm")), "typetext", "");
  { const $t1 = $.sub((await $.mv((await $.mv((await $.mv((await $.v(C, "TransCodeForm")), "TreeView1")), "Items")), "Count")), 1);
    L0["i"] = 0;
    let $t2 = true;
    for (;;) {
      if (!$t2) { L0["i"] = $.succ(L0["i"], 1); }
      $t2 = false;
      if (!($.ord(L0["i"]) <= $.ord($t1))) break;
      await $.mset((await $.idx((await $.mv((await $.mv((await $.v(C, "TransCodeForm")), "TreeView1")), "Items")), [L0["i"]])), "Expanded", false);
      await $.tick();
    }
  }
  await $.mcall((await $.v(C, "TransCodeForm")), "ShowModal", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TPaymentDetalsForm", "Button1Click", async function Button1Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy((await $.v(C, "mess_edit")))) {
    if ($.truthy((await $.or_(($.eq((await $.v(C, "checkfield")), false)), async () => ($.eq((await $.mv((await $.mcall((await $.mv((await $.v(C, "DataMod")), "HoxMessages_out")), "fieldbyname", ["status"])), "AsInteger")), 2)))))) {
      return L0.result;
    }
    await $.stmt((await $.mcall((await $.mv((await $.v(C, "DataMod")), "INS")), "Callprocedure", ["UPD_MESS_OUT", [(await $.mv((await $.mcall((await $.mv((await $.v(C, "DataMod")), "HoxMessages_out")), "fieldbyname", ["ID"])), "ASINteger")), (await $.call(C, "strtofloat", [(await $.idx((await $.mv((await $.v(C, "Bank_ID")), "Items")), [(await $.mv((await $.v(C, "Combo_BankName")), "itemindex"))]))])), (await $.call(C, "strtofloat", [(await $.mv((await $.v(C, "Edit_Account_Sub")), "text"))])), (await $.mv((await $.v(C, "Edit_Client_acc_no")), "text")), (await $.mv((await $.v(C, "edit_client_name")), "text")), (await $.mv((await $.v(C, "edit_client_code")), "text")), (await $.call(C, "strtofloat", [(await $.mv((await $.v(C, "Edit_Client_Voen")), "text"))])), $.add($.add($.add((await $.call(C, "trim", [(await $.mv((await $.v(C, "edit_tey1")), "text"))])), (await $.call(C, "trim", [(await $.mv((await $.v(C, "edit_tey2")), "text"))]))), (await $.call(C, "trim", [(await $.mv((await $.v(C, "edit_tey3")), "text"))]))), (await $.call(C, "trim", [(await $.mv((await $.v(C, "edit_tey4")), "text"))]))), (await $.call(C, "strtofloat", [(await $.mv((await $.v(C, "Edit_TransCode")), "text"))])), $.add($.add((await $.call(C, "trim", [(await $.mv((await $.v(C, "edit_inf1")), "text"))])), (await $.call(C, "trim", [(await $.mv((await $.v(C, "edit_inf2")), "text"))]))), (await $.call(C, "trim", [(await $.mv((await $.v(C, "edit_inf3")), "text"))]))), (await $.mcall((await $.mv((await $.v(C, "DataMod")), "GetSysDate")), "CallDateFunction", ["get_date", []])), (await $.call(C, "strtofloat", [(await $.idx((await $.mv((await $.v(C, "valute_id")), "items")), [(await $.mv((await $.v(C, "combo_valute")), "itemindex"))]))])), (await $.mv((await $.v(C, "edit_referens")), "text")), (await $.mv((await $.v(C, "Edit_Amount")), "value")), (await $.v(C, "bnf_count"))]])));
    await $.mcall((await $.mv((await $.v(C, "sboapiDataModule")), "SBSession")), "Commit", []);
    await $.stmt((await $.mcall((await $.mv((await $.v(C, "DataMod")), "INS")), "Callprocedure", ["UPD_HOX102_AMOUNT", [(await $.mv((await $.mcall((await $.mv((await $.v(C, "DataMod")), "Hox102_out")), "fieldbyname", ["ID"])), "asinteger"))]])));
    await $.stmt((await $.mcall((await $.mv((await $.v(C, "DataMod")), "Ins")), "callprocedure", ["UPD_MESS_ICON", [(await $.mv((await $.mcall((await $.mv((await $.v(C, "DataMod")), "HoxMessages_out")), "fieldbyname", ["ID"])), "ASinteger")), 0]])));
    await $.stmt((await $.mcall((await $.mv((await $.v(C, "DataMod")), "Ins")), "callintegerfunction", ["UPD_HOX102_ICON", [(await $.mv((await $.mcall((await $.mv((await $.v(C, "DataMod")), "Hox102_out")), "fieldbyname", ["ID"])), "ASinteger")), 0]])));
    await $.mcall((await $.v(C, "Swift_Form")), "RefreshWithPos", []);
  }
  await $.stmt($.call(C, "close", []));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TPaymentDetalsForm", "Button2Click", async function Button2Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy((await $.v(C, "mess_edit")))) {
    await $.mcall((await $.v(C, "Swift_Form")), "showdetals", []);
  } else {
    await $.stmt($.call(C, "close", []));
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TPaymentDetalsForm", "Combo_BankNameChange", async function Combo_BankNameChange(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.stmt((await $.mcall((await $.mv((await $.v(C, "Datamod")), "BankM")), "Locate", ["ID", (await $.idx((await $.mv((await $.v(C, "Bank_ID")), "Items")), [(await $.mv((await $.v(C, "Combo_BankName")), "ItemIndex"))])), []])));
  await $.mset((await $.v(C, "Edit_BankCode")), "Text", (await $.mv((await $.mcall((await $.mv((await $.v(C, "DataMod")), "BankM")), "fieldbyname", ["BankCode"])), "AsString")));
  await $.mset((await $.v(C, "Edit_account")), "Text", (await $.mv((await $.mcall((await $.mv((await $.v(C, "DataMod")), "BankM")), "fieldbyname", ["KRNO"])), "AsString")));
  await $.mset((await $.v(C, "Edit_Voen")), "Text", (await $.mv((await $.mcall((await $.mv((await $.v(C, "DataMod")), "BankM")), "fieldbyname", ["INN"])), "AsString")));
  await $.mset((await $.v(C, "Edit_Bik")), "Text", (await $.mv((await $.mcall((await $.mv((await $.v(C, "DataMod")), "BankM")), "fieldbyname", ["SWIFT"])), "AsString")));
  if ($.truthy((await $.v(C, "mess_edit")))) {
    await $.mset((await $.v(C, "Button2")), "Enabled", true);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TPaymentDetalsForm", "Edit_Client_VoenKeyPress", async function Edit_Client_VoenKeyPress(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "key": $.asRef(p1), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await L0["key"].set((await $.mcall((await $.v(C, "Swift_Form")), "OnlyNumber", [(await L0["key"].get())])));
  return L0.result;
}, {"params": ["Sender", "Key"], "kind": "procedure", "ptypes": ["TObject", "Char"]});
  U.method("TPaymentDetalsForm", "Edit_account_sub_SelfKeyPress", async function Edit_account_sub_SelfKeyPress(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "key": $.asRef(p1), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await L0["key"].set((await $.mcall((await $.v(C, "Swift_Form")), "OnlyNumber", [(await L0["key"].get())])));
  return L0.result;
}, {"params": ["Sender", "Key"], "kind": "procedure", "ptypes": ["TObject", "Char"]});
  U.method("TPaymentDetalsForm", "Edit_Amount1KeyPress", async function Edit_Amount1KeyPress(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "key": $.asRef(p1), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await L0["key"].set((await $.mcall((await $.v(C, "Swift_Form")), "OnlyNumber", [(await L0["key"].get())])));
  return L0.result;
}, {"params": ["Sender", "Key"], "kind": "procedure", "ptypes": ["TObject", "Char"]});
  U.method("TPaymentDetalsForm", "Button4Click", async function Button4Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.eq((await $.v(C, "checkfield")), false))) {
    return L0.result;
  }
  await $.set(C, "bnf_count", $.add((await $.v(C, "bnf_count")), 1));
  await $.stmt((await $.mcall((await $.mv((await $.v(C, "DataMod")), "INS")), "Callprocedure", ["Inst_HOXMESS_OUT", [(await $.v(C, "new_id")), (await $.call(C, "strtofloat", [(await $.idx((await $.mv((await $.v(C, "Bank_ID")), "Items")), [(await $.mv((await $.v(C, "Combo_BankName")), "itemindex"))]))])), (await $.call(C, "strtofloat", [(await $.mv((await $.v(C, "Edit_Account_Sub")), "text"))])), (await $.mv((await $.v(C, "Edit_Client_acc_no")), "text")), (await $.mv((await $.v(C, "edit_client_name")), "text")), (await $.mv((await $.v(C, "edit_client_code")), "text")), (await $.call(C, "strtofloat", [(await $.mv((await $.v(C, "Edit_Client_Voen")), "text"))])), $.add($.add($.add((await $.call(C, "trim", [(await $.mv((await $.v(C, "edit_tey1")), "text"))])), (await $.call(C, "trim", [(await $.mv((await $.v(C, "edit_tey2")), "text"))]))), (await $.call(C, "trim", [(await $.mv((await $.v(C, "edit_tey3")), "text"))]))), (await $.call(C, "trim", [(await $.mv((await $.v(C, "edit_tey4")), "text"))]))), (await $.call(C, "strtofloat", [(await $.mv((await $.v(C, "Edit_TransCode")), "text"))])), $.add($.add((await $.call(C, "trim", [(await $.mv((await $.v(C, "edit_inf1")), "text"))])), (await $.call(C, "trim", [(await $.mv((await $.v(C, "edit_inf2")), "text"))]))), (await $.call(C, "trim", [(await $.mv((await $.v(C, "edit_inf3")), "text"))]))), (await $.mcall((await $.mv((await $.v(C, "DataMod")), "GetSysDate")), "CallDateFunction", ["get_date", []])), (await $.call(C, "strtofloat", [(await $.idx((await $.mv((await $.v(C, "valute_id")), "items")), [(await $.mv((await $.v(C, "combo_valute")), "itemindex"))]))])), (await $.mv((await $.v(C, "edit_referens")), "text")), (await $.mv((await $.v(C, "Edit_Amount")), "value")), (await $.v(C, "bnf_count"))]])));
  if ($.truthy((await $.v(C, "after_add")))) {
    await $.mcall((await $.mv((await $.v(C, "sboapiDataModule")), "SBSession")), "Commit", []);
    await $.stmt((await $.mcall((await $.mv((await $.v(C, "DataMod")), "INS")), "Callprocedure", ["UPD_HOX102_AMOUNT", [(await $.mv((await $.mcall((await $.mv((await $.v(C, "DataMod")), "Hox102_out")), "fieldbyname", ["ID"])), "asinteger"))]])));
    await $.stmt((await $.mcall((await $.mv((await $.v(C, "DataMod")), "Ins")), "callintegerfunction", ["UPD_HOX102_ICON", [(await $.mv((await $.mcall((await $.mv((await $.v(C, "DataMod")), "Hox102_out")), "fieldbyname", ["ID"])), "ASinteger")), 0]])));
    await $.mcall((await $.v(C, "Swift_Form")), "RefreshWithPos", []);
  } else {
    await $.mset((await $.mv((await $.v(C, "TransForm")), "Edit_BNF")), "Text", $.add("\\BNF\\", (await $.call(C, "inttostr", [(await $.mv((await $.v(C, "PaymentDetalsForm")), "bnf_count"))]))));
    await $.mset((await $.mv((await $.v(C, "TransForm")), "Edit_Amount")), "text", (await $.call(C, "floattostr", [$.add((await $.mv((await $.mv((await $.v(C, "TransForm")), "Edit_Amount")), "value")), (await $.mv((await $.v(C, "edit_Amount")), "value")))])));
  }
  await $.mset((await $.v(C, "Combo_BankName")), "ItemIndex", (-(1)));
  await $.mcall((await $.v(C, "Edit_BIK")), "Clear", []);
  await $.mcall((await $.v(C, "Edit_BankCode")), "clear", []);
  await $.mcall((await $.v(C, "Edit_account")), "Clear", []);
  await $.mcall((await $.v(C, "Edit_account_sub")), "Clear", []);
  await $.mcall((await $.v(C, "Edit_Voen")), "Clear", []);
  await $.mcall((await $.v(C, "Edit_Amount")), "Clear", []);
  await $.mcall((await $.v(C, "Edit_TransCode")), "Clear", []);
  if ($.truthy($.eq((await $.mv((await $.v(C, "Edit_Referens")), "Text")), ""))) {
    await $.mset((await $.mv((await $.v(C, "PaymentDetalsForm")), "Edit_Referens")), "Text", $.add("MBA", (await $.call(C, "inttostr", [(await $.mcall((await $.mv((await $.v(C, "DataMod")), "INS")), "Callintegerfunction", ["new_mess_reference", []]))]))));
  }
  await $.mcall((await $.v(C, "Edit_Client_Name")), "Clear", []);
  await $.mcall((await $.v(C, "Edit_Client_Code")), "clear", []);
  await $.mcall((await $.v(C, "Edit_Client_acc_no")), "Clear", []);
  await $.mcall((await $.v(C, "Edit_Client_Voen")), "Clear", []);
  await $.mcall((await $.v(C, "Edit_Referens")), "Clear", []);
  await $.mcall((await $.v(C, "Edit_inf1")), "Clear", []);
  await $.mcall((await $.v(C, "Edit_inf2")), "Clear", []);
  await $.mcall((await $.v(C, "Edit_inf3")), "Clear", []);
  await $.mcall((await $.v(C, "Edit_tey1")), "Clear", []);
  await $.mcall((await $.v(C, "Edit_tey2")), "Clear", []);
  await $.mcall((await $.v(C, "Edit_tey3")), "Clear", []);
  await $.mcall((await $.v(C, "Edit_tey4")), "Clear", []);
  await $.mset((await $.mv((await $.v(C, "TransForm")), "Button1")), "Enabled", true);
  await $.mset((await $.mv((await $.v(C, "PaymentDetalsForm")), "Button1")), "Enabled", true);
  await $.mcall((await $.mv((await $.v(C, "DataMod")), "HoxMessages_out")), "Last", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TPaymentDetalsForm", "Edit_tey1Change", async function Edit_tey1Change(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy((await $.mv((await $.v(C, "PaymentDetalsForm")), "Visible")))) {
    if ($.truthy($.eq((await $.call(C, "Length", [(await $.mv((L0["sender"]), "Text"))])), 35))) {
      await $.mcall((await $.v(C, "Edit_tey2")), "SetFocus", []);
    }
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TPaymentDetalsForm", "Edit_tey2Change", async function Edit_tey2Change(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy((await $.mv((await $.v(C, "PaymentDetalsForm")), "Visible")))) {
    if ($.truthy($.eq((await $.call(C, "Length", [(await $.mv((L0["sender"]), "Text"))])), 35))) {
      await $.mcall((await $.v(C, "Edit_tey3")), "SetFocus", []);
    }
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TPaymentDetalsForm", "Edit_tey3Change", async function Edit_tey3Change(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy((await $.mv((await $.v(C, "PaymentDetalsForm")), "Visible")))) {
    if ($.truthy($.eq((await $.call(C, "Length", [(await $.mv((L0["sender"]), "Text"))])), 35))) {
      await $.mcall((await $.v(C, "Edit_tey4")), "SetFocus", []);
    }
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TPaymentDetalsForm", "Edit_inf1Change", async function Edit_inf1Change(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy((await $.mv((await $.v(C, "PaymentDetalsForm")), "Visible")))) {
    if ($.truthy($.eq((await $.call(C, "Length", [(await $.mv((L0["sender"]), "Text"))])), 35))) {
      await $.mcall((await $.v(C, "Edit_inf2")), "SetFocus", []);
    }
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TPaymentDetalsForm", "Edit_inf2Change", async function Edit_inf2Change(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy((await $.mv((await $.v(C, "PaymentDetalsForm")), "Visible")))) {
    if ($.truthy($.eq((await $.call(C, "Length", [(await $.mv((L0["sender"]), "Text"))])), 35))) {
      await $.mcall((await $.v(C, "Edit_inf3")), "SetFocus", []);
    }
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TPaymentDetalsForm", "FormKeyUp", async function FormKeyUp(Self, p0, p1, p2) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "key": $.asRef(p1), "shift": $.copyArg(p2), result: undefined};
  await $.fixArgs(L0, ["sender", "shift"]);
  if ($.truthy($.eq((await L0["key"].get()), (await $.v(C, "Vk_escape"))))) {
    await $.stmt($.call(C, "close", []));
  }
  return L0.result;
}, {"params": ["Sender", "Key", "Shift"], "kind": "procedure", "ptypes": ["TObject", "Word", "TShiftState"]});
  U.method("TPaymentDetalsForm", "FormClose", async function FormClose(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "action": $.asRef(p1), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.set(C, "after_add", false);
  await $.set(C, "mess_edit", false);
  await $.mset((await $.v(C, "Button4")), "Visible", true);
  await $.mset((await $.v(C, "Button1")), "Caption", "Son");
  return L0.result;
}, {"params": ["Sender", "Action"], "kind": "procedure", "ptypes": ["TObject", "TCloseAction"]});
  U.method("TPaymentDetalsForm", "Button3Click", async function Button3Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.stmt($.call(C, "close", []));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TPaymentDetalsForm", "SpeedButton2Click", async function SpeedButton2Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mset((await $.mv((await $.v(C, "PaymentDetalsForm")), "Edit_Referens")), "Text", $.add("MBA", (await $.call(C, "inttostr", [(await $.mcall((await $.mv((await $.v(C, "DataMod")), "INS")), "Callintegerfunction", ["new_mess_reference", []]))]))));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TPaymentDetalsForm", "Edit_BankName_SelfChange", async function Edit_BankName_SelfChange(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy((await $.v(C, "mess_edit")))) {
    await $.mset((await $.v(C, "Button2")), "Enabled", true);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  return U;
}
