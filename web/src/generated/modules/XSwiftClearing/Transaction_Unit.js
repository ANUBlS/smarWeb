// Generated from Transaction_Unit.pas by pas2js — do not edit by hand; regenerate instead.
/* eslint-disable */
// @ts-nocheck

export default function define($) {
  const U = $.unit("Transaction_Unit", ["Windows", "Messages", "SysUtils", "Classes", "Graphics", "Controls", "Forms", "Dialogs", "StdCtrls", "ActnList", "HintBox", "ComCtrls", "CurrencyEdit", "DBViewComboBox", "Mask", "DBCtrls", "ExtCtrls", "SearchEdit", "Buttons", "Payment_Det", "data_unit", "Swift_Unit", "sboapiDataModuleImpl"]);
  const C = [U];
  U.defClass("TTransForm", "TForm", {"button1": {"name": "Button1", "type": "TButton"}, "button2": {"name": "Button2", "type": "TButton"}, "accountgb": {"name": "AccountGB", "type": "TGroupBox"}, "button_add": {"name": "Button_add", "type": "TButton"}, "panel1": {"name": "Panel1", "type": "TPanel"}, "panel6": {"name": "Panel6", "type": "TPanel"}, "groupbox3": {"name": "GroupBox3", "type": "TGroupBox"}, "p1": {"name": "P1", "type": "TPanel"}, "edit_sender": {"name": "Edit_Sender", "type": "TEdit"}, "p2": {"name": "P2", "type": "TPanel"}, "edit_referens": {"name": "Edit_Referens", "type": "TEdit"}, "p3": {"name": "P3", "type": "TPanel"}, "edit8": {"name": "Edit8", "type": "TEdit"}, "p4": {"name": "P4", "type": "TPanel"}, "edit_bankcode": {"name": "Edit_BankCode", "type": "TEdit"}, "p7": {"name": "P7", "type": "TPanel"}, "edit_account_sub": {"name": "Edit_account_sub", "type": "TEdit"}, "p5": {"name": "P5", "type": "TPanel"}, "edit_account": {"name": "Edit_Account", "type": "TEdit"}, "p8": {"name": "P8", "type": "TPanel"}, "edit_bik": {"name": "Edit_Bik", "type": "TEdit"}, "panel3": {"name": "Panel3", "type": "TPanel"}, "groupbox2": {"name": "GroupBox2", "type": "TGroupBox"}, "p16": {"name": "P16", "type": "TPanel"}, "edit_amount1": {"name": "Edit_Amount1", "type": "TEdit"}, "p15": {"name": "P15", "type": "TPanel"}, "combo_valute": {"name": "Combo_valute", "type": "TComboBox"}, "p14": {"name": "P14", "type": "TPanel"}, "combo_date": {"name": "Combo_date", "type": "TDateTimePicker"}, "groupbox1": {"name": "GroupBox1", "type": "TGroupBox"}, "p11": {"name": "P11", "type": "TPanel"}, "edit_clientname": {"name": "Edit_clientName", "type": "TEdit"}, "p12": {"name": "P12", "type": "TPanel"}, "p10": {"name": "P10", "type": "TPanel"}, "p13": {"name": "P13", "type": "TPanel"}, "edit_client_code": {"name": "Edit_Client_code", "type": "TEdit"}, "p6": {"name": "P6", "type": "TPanel"}, "edit_voen": {"name": "Edit_voen", "type": "TEdit"}, "panel20": {"name": "Panel20", "type": "TPanel"}, "edit_bnf": {"name": "Edit_BNF", "type": "TEdit"}, "accsearch": {"name": "AccSearch", "type": "TSearchEdit"}, "valute_id": {"name": "Valute_ID", "type": "TListBox"}, "dbedit_voen": {"name": "DBEdit_Voen", "type": "TDBEdit"}, "edit_acc_id": {"name": "Edit_acc_id", "type": "TDBEdit"}, "speedbutton1": {"name": "SpeedButton1", "type": "TSpeedButton"}, "p_view": {"name": "P_view", "type": "TPanel"}, "label2": {"name": "Label2", "type": "TLabel"}, "dbtext4": {"name": "DBText4", "type": "TDBText"}, "label3": {"name": "Label3", "type": "TLabel"}, "p9": {"name": "P9", "type": "TPanel"}, "combobox_cd": {"name": "ComboBox_CD", "type": "TComboBox"}, "panel2": {"name": "Panel2", "type": "TPanel"}, "dbtext1": {"name": "DBText1", "type": "TDBText"}, "panel4": {"name": "Panel4", "type": "TPanel"}, "edit_amount": {"name": "Edit_amount", "type": "TCurrencyEdit"}, "dbedit_ostat": {"name": "DBEdit_ostat", "type": "TDBEdit"}, "dbedit_pokostat": {"name": "DBEdit_pokostat", "type": "TDBEdit"}, "panel5": {"name": "Panel5", "type": "TPanel"}, "radiobutton1": {"name": "RadioButton1", "type": "TRadioButton"}, "radiobutton2": {"name": "RadioButton2", "type": "TRadioButton"}}, {});
  U.init(async () => {
    U.var_("TransForm", null, "TTransForm");
  });
  U.func("checkfield", async function checkfield(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"all": $.copyArg(p0), result: false};
  await $.fixArgs(L0, ["all"]);
  await $.mcall((await $.mv((await $.v(C, "DataMod")), "ForCHECK")), "Close", []);
  await $.mcall((await $.mv((await $.mv((await $.v(C, "DataMod")), "ForCHECK")), "SQL")), "Clear", []);
  await $.stmt((await $.mcall((await $.mv((await $.mv((await $.v(C, "DataMod")), "ForCHECK")), "SQL")), "Add", [$.add($.add("Select * from account where acc_no = '", (await $.mv((await $.mv((await $.v(C, "TransForm")), "AccSearch")), "Text"))), "'")])));
  await $.mcall((await $.mv((await $.v(C, "DataMod")), "ForCHECK")), "Open", []);
  if ($.truthy((await $.or_((await $.or_((await $.or_((await $.or_((await $.or_(($.eq((await $.call(C, "Trim", [(await $.mv((await $.mv((await $.v(C, "TransForm")), "AccSearch")), "Text"))])), "")), async () => ($.lt((await $.call(C, "Length", [(await $.mv((await $.mv((await $.v(C, "TransForm")), "AccSearch")), "Text"))])), 16)))), async () => ($.eq((await $.mv((await $.mv((await $.v(C, "TransForm")), "DBEdit_Voen")), "Text")), "")))), async () => ($.eq((await $.mv((await $.mv((await $.v(C, "TransForm")), "AccSearch")), "Color")), (await $.v(C, "clred")))))), async () => ($.eq((await $.call(C, "Trim", [(await $.mv((await $.mv((await $.v(C, "TransForm")), "Edit_clientName")), "Text"))])), "")))), async () => ($.eq((await $.mv((await $.mv((await $.v(C, "DataMod")), "ForCHECK")), "RecordCount")), 0)))))) {
    L0["result"] = false;
    await $.stmt((await $.call(C, "ShowMessage", ["Melumat Tam deyil !"])));
  } else {
    L0["result"] = true;
  }
  if ($.truthy(L0["all"])) {
    if ($.truthy(($.eq((await $.mv((await $.mv((await $.v(C, "TransForm")), "Edit_Amount")), "Text")), "0")))) {
      L0["result"] = false;
      await $.stmt((await $.call(C, "ShowMessage", ["Melumat Tam deyil !"])));
    }
  }
  return L0.result;
}, {"params": ["all"], "kind": "function", "ptypes": ["Boolean"]});
  U.method("TTransForm", "Button3Click", async function Button3Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.stmt($.call(C, "close", []));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TTransForm", "Button_addClick", async function Button_addClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.eq((await $.call(C, "checkfield", [false])), false))) {
    return L0.result;
  }
  if ($.truthy($.ne((await $.idx((await $.mv((await $.v(C, "Valute_ID")), "Items")), [(await $.mv((await $.v(C, "Combo_valute")), "ItemIndex"))])), (await $.mv((await $.mcall((await $.mv((await $.v(C, "DataMod")), "Account_data")), "FieldByName", ["val_acc"])), "AsString"))))) {
    await $.stmt((await $.call(C, "ShowMessage", ["Bu hesab secilmish valutaya uygun deyil !"])));
    return L0.result;
  }
  await $.mset((await $.mv((await $.v(C, "PaymentDetalsForm")), "Edit_BankName_Self")), "Text", (await $.mv((await $.mcall((await $.mv((await $.v(C, "DataMod")), "BankInfo")), "fieldbyname", ["BANK"])), "AsString")));
  await $.mset((await $.mv((await $.v(C, "PaymentDetalsForm")), "Edit_BIK_Self")), "Text", (await $.mv((await $.mcall((await $.mv((await $.v(C, "DataMod")), "BankInfo")), "fieldbyname", ["SWIFT"])), "AsString")));
  await $.mset((await $.mv((await $.v(C, "PaymentDetalsForm")), "Edit_BankCode_Self")), "Text", (await $.mv((await $.mcall((await $.mv((await $.v(C, "DataMod")), "BankInfo")), "fieldbyname", ["KOD_B"])), "AsString")));
  await $.mset((await $.mv((await $.v(C, "PaymentDetalsForm")), "Edit_account_Self")), "Text", (await $.mv((await $.mcall((await $.mv((await $.v(C, "DataMod")), "BankInfo")), "fieldbyname", ["KRNO"])), "AsString")));
  await $.mset((await $.mv((await $.v(C, "PaymentDetalsForm")), "Edit_Voen_Self")), "Text", (await $.mv((await $.mcall((await $.mv((await $.v(C, "DataMod")), "BankInfo")), "fieldbyname", ["INN"])), "AsString")));
  await $.mset((await $.mv((await $.v(C, "PaymentDetalsForm")), "Combo_Valute")), "ItemIndex", (await $.mv((await $.v(C, "Combo_valute")), "ItemIndex")));
  await $.mset((await $.mv((await $.v(C, "PaymentDetalsForm")), "Edit_account_sub_Self")), "Text", (await $.mv((await $.v(C, "Edit_account_sub")), "text")));
  await $.mset((await $.mv((await $.v(C, "PaymentDetalsForm")), "Combo_BankName")), "ItemIndex", (-(1)));
  await $.mcall((await $.mv((await $.v(C, "PaymentDetalsForm")), "Edit_BIK")), "Clear", []);
  await $.mcall((await $.mv((await $.v(C, "PaymentDetalsForm")), "Edit_BankCode")), "clear", []);
  await $.mcall((await $.mv((await $.v(C, "PaymentDetalsForm")), "Edit_Referens")), "Clear", []);
  await $.mcall((await $.mv((await $.v(C, "PaymentDetalsForm")), "Edit_account")), "Clear", []);
  await $.mcall((await $.mv((await $.v(C, "PaymentDetalsForm")), "Edit_Voen")), "Clear", []);
  await $.mcall((await $.mv((await $.v(C, "PaymentDetalsForm")), "Edit_Amount")), "Clear", []);
  await $.mcall((await $.mv((await $.v(C, "PaymentDetalsForm")), "Edit_TransCode")), "Clear", []);
  await $.mcall((await $.mv((await $.v(C, "PaymentDetalsForm")), "Edit_Client_Name")), "Clear", []);
  await $.mcall((await $.mv((await $.v(C, "PaymentDetalsForm")), "Edit_Client_Code")), "clear", []);
  await $.mcall((await $.mv((await $.v(C, "PaymentDetalsForm")), "Edit_Client_acc_no")), "Clear", []);
  await $.mcall((await $.mv((await $.v(C, "PaymentDetalsForm")), "Edit_Client_Voen")), "Clear", []);
  await $.mcall((await $.mv((await $.v(C, "PaymentDetalsForm")), "Edit_inf1")), "Clear", []);
  await $.mcall((await $.mv((await $.v(C, "PaymentDetalsForm")), "Edit_inf2")), "Clear", []);
  await $.mcall((await $.mv((await $.v(C, "PaymentDetalsForm")), "Edit_inf3")), "Clear", []);
  await $.mcall((await $.mv((await $.v(C, "PaymentDetalsForm")), "Edit_tey1")), "Clear", []);
  await $.mcall((await $.mv((await $.v(C, "PaymentDetalsForm")), "Edit_tey2")), "Clear", []);
  await $.mcall((await $.mv((await $.v(C, "PaymentDetalsForm")), "Edit_tey3")), "Clear", []);
  await $.mcall((await $.mv((await $.v(C, "PaymentDetalsForm")), "Edit_tey4")), "Clear", []);
  await $.mset((await $.mv((await $.v(C, "PaymentDetalsForm")), "Button1")), "Enabled", false);
  await $.mset((await $.mv((await $.v(C, "PaymentDetalsForm")), "Button2")), "Enabled", false);
  await $.mcall((await $.v(C, "PaymentDetalsForm")), "ShowModal", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TTransForm", "Button2Click", async function Button2Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mcall((await $.mv((await $.v(C, "sboapiDataModule")), "SBSession")), "Rollback", []);
  await $.stmt($.call(C, "close", []));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TTransForm", "DBEdit_VoenKeyPress", async function DBEdit_VoenKeyPress(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "key": $.asRef(p1), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await L0["key"].set((await $.mcall((await $.v(C, "Swift_Form")), "OnlyNumber", [(await L0["key"].get())])));
  return L0.result;
}, {"params": ["Sender", "Key"], "kind": "procedure", "ptypes": ["TObject", "Char"]});
  U.method("TTransForm", "Edit_account_subKeyPress", async function Edit_account_subKeyPress(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "key": $.asRef(p1), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await L0["key"].set((await $.mcall((await $.v(C, "Swift_Form")), "OnlyNumber", [(await L0["key"].get())])));
  return L0.result;
}, {"params": ["Sender", "Key"], "kind": "procedure", "ptypes": ["TObject", "Char"]});
  U.method("TTransForm", "Button1Click", async function Button1Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy((await $.or_(($.eq((await $.call(C, "checkfield", [true])), false)), async () => ($.eq((await $.call(C, "Trim", [(await $.mv((await $.mv((await $.v(C, "TransForm")), "Edit_Referens")), "Text"))])), "")))))) {
    return L0.result;
  }
  await $.set(C, "trans_date", (await $.call(C, "trunc", [(await $.mv((await $.v(C, "Combo_date")), "DateTime"))])));
  if ($.truthy($.ne((await $.mv((await $.v(C, "Edit_BNF")), "Text")), "/BNF/0"))) {
    await $.stmt((await $.mcall((await $.mv((await $.v(C, "DataMod")), "INS")), "CallProcedure", ["UPD_HOX102_OUT", [(await $.v(C, "new_id")), "CREDIT", (await $.call(C, "strtoint", [(await $.mv((await $.v(C, "Edit_acc_id")), "text"))])), (await $.mv((await $.v(C, "edit_clientname")), "text")), (await $.mv((await $.v(C, "edit_client_code")), "text")), (await $.mv((await $.v(C, "edit_referens")), "text")), (await $.call(C, "strtofloat", [(await $.mv((await $.v(C, "edit_amount")), "text"))])), (await $.call(C, "strtofloat", [(await $.idx((await $.mv((await $.v(C, "valute_id")), "items")), [(await $.mv((await $.v(C, "combo_valute")), "itemindex"))]))])), (await $.mcall((await $.mv((await $.v(C, "DataMod")), "GetSysDate")), "CallDateFunction", ["get_date", []]))]])));
  }
  await $.mcall((await $.mv((await $.v(C, "sboapiDataModule")), "SBSession")), "Commit", []);
  await $.mcall((await $.v(C, "Swift_Form")), "RefreshDATA", []);
  await $.stmt($.call(C, "close", []));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TTransForm", "FormKeyUp", async function FormKeyUp(Self, p0, p1, p2) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "key": $.asRef(p1), "shift": $.copyArg(p2), result: undefined};
  await $.fixArgs(L0, ["sender", "shift"]);
  if ($.truthy($.eq((await L0["key"].get()), (await $.v(C, "Vk_escape"))))) {
    await $.stmt($.call(C, "close", []));
  }
  return L0.result;
}, {"params": ["Sender", "Key", "Shift"], "kind": "procedure", "ptypes": ["TObject", "Word", "TShiftState"]});
  U.method("TTransForm", "SpeedButton1Click", async function SpeedButton1Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.eq((await $.call(C, "trim", [(await $.mv((await $.v(C, "Edit_Referens")), "text"))])), ""))) {
    await $.mset((await $.v(C, "Edit_Referens")), "text", (await $.mcall((await $.mv((await $.v(C, "DataMod")), "Reference")), "CallStringfunction", ["new_refenrece", [(await $.call(C, "strtoint", [(await $.idx((await $.mv((await $.v(C, "valute_id")), "items")), [(await $.mv((await $.v(C, "combo_valute")), "itemindex"))]))])), (await $.call(C, "formatdatetime", ["yymmdd", (await $.v(C, "date"))]))]])));
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TTransForm", "AccSearchChange", async function AccSearchChange(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy((await $.or_(($.eq((await $.mv((await $.v(C, "accSearch")), "Text")), "")), async () => ($.eq((await $.mv((await $.v(C, "AccSearch")), "Color")), (await $.v(C, "clRed")))))))) {
    await $.mcall((await $.v(C, "DBEdit_Voen")), "Clear", []);
    await $.mcall((await $.v(C, "DBEdit_ostat")), "Clear", []);
    await $.mcall((await $.v(C, "DBEdit_pokostat")), "Clear", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TTransForm", "P_viewEnter", async function P_viewEnter(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mcall((await $.v(C, "GroupBox2")), "SetFocus", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  return U;
}
