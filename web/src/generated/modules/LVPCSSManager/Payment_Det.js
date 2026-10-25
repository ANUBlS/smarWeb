// Generated from Payment_Det.pas by pas2js — do not edit by hand; regenerate instead.
/* eslint-disable */
// @ts-nocheck

export default function define($) {
  const U = $.unit("Payment_Det", ["Windows", "Messages", "SysUtils", "Classes", "Graphics", "Controls", "Forms", "Dialogs", "ComCtrls", "StdCtrls", "ExtCtrls", "Buttons", "DBCtrls", "CurrencyEdit", "SearchEdit", "Mask", "DBCtrlsEh", "DBViewComboBox", "CMDBSearchEdit", "TransTypeUnit", "Data_Unit", "Transaction_Unit", "sboapiDataModuleImpl", "LVPCSSImpl", "add_new_shablon", "Get_to_shablon_unit"]);
  const C = [U];
  U.defClass("TPaymentDetalsForm", "TForm", {"accountgb": {"name": "AccountGB", "type": "TGroupBox"}, "panel1": {"name": "Panel1", "type": "TPanel"}, "panel6": {"name": "Panel6", "type": "TPanel"}, "groupbox3": {"name": "GroupBox3", "type": "TGroupBox"}, "p13": {"name": "P13", "type": "TPanel"}, "edit_referens": {"name": "Edit_Referens", "type": "TEdit"}, "panel3": {"name": "Panel3", "type": "TPanel"}, "groupbox1": {"name": "GroupBox1", "type": "TGroupBox"}, "p18": {"name": "P18", "type": "TPanel"}, "edit_client_name": {"name": "Edit_Client_Name", "type": "TEdit"}, "p19": {"name": "P19", "type": "TPanel"}, "edit_client_code": {"name": "Edit_Client_Code", "type": "TEdit"}, "p17": {"name": "P17", "type": "TPanel"}, "p20": {"name": "P20", "type": "TPanel"}, "edit_client_voen": {"name": "Edit_Client_Voen", "type": "TEdit"}, "p14": {"name": "P14", "type": "TPanel"}, "combo_valute": {"name": "Combo_Valute", "type": "TComboBox"}, "p16": {"name": "P16", "type": "TPanel"}, "edit_transcode": {"name": "Edit_TransCode", "type": "TEdit"}, "button4": {"name": "Button4", "type": "TButton"}, "groupbox2": {"name": "GroupBox2", "type": "TGroupBox"}, "p7": {"name": "P7", "type": "TPanel"}, "p12": {"name": "P12", "type": "TPanel"}, "edit_bik": {"name": "Edit_Bik", "type": "TEdit"}, "p11": {"name": "P11", "type": "TPanel"}, "combo_bankname": {"name": "Combo_BankName", "type": "TComboBox"}, "edit_account_sub": {"name": "Edit_Account_Sub", "type": "TEdit"}, "p8": {"name": "P8", "type": "TPanel"}, "edit_bankcode": {"name": "Edit_BankCode", "type": "TEdit"}, "p9": {"name": "P9", "type": "TPanel"}, "edit_account": {"name": "Edit_account", "type": "TEdit"}, "p10": {"name": "P10", "type": "TPanel"}, "edit_voen": {"name": "Edit_Voen", "type": "TEdit"}, "groupbox4": {"name": "GroupBox4", "type": "TGroupBox"}, "p2": {"name": "P2", "type": "TPanel"}, "edit_bankcode_self": {"name": "Edit_BankCode_Self", "type": "TEdit"}, "p3": {"name": "P3", "type": "TPanel"}, "edit_account_self": {"name": "Edit_account_Self", "type": "TEdit"}, "p4": {"name": "P4", "type": "TPanel"}, "edit_voen_self": {"name": "Edit_Voen_Self", "type": "TEdit"}, "p5": {"name": "P5", "type": "TPanel"}, "edit_account_sub_self": {"name": "Edit_account_sub_Self", "type": "TEdit"}, "p6": {"name": "P6", "type": "TPanel"}, "edit_bik_self": {"name": "Edit_BIK_Self", "type": "TEdit"}, "p1": {"name": "P1", "type": "TPanel"}, "edit_bankname_self": {"name": "Edit_BankName_Self", "type": "TEdit"}, "edit_client_acc_no": {"name": "Edit_Client_acc_no", "type": "TEdit"}, "groupbox5": {"name": "GroupBox5", "type": "TGroupBox"}, "p15": {"name": "P15", "type": "TPanel"}, "edit_amount1": {"name": "Edit_Amount1", "type": "TEdit"}, "speedbutton1": {"name": "SpeedButton1", "type": "TSpeedButton"}, "edit_tey1": {"name": "Edit_tey1", "type": "TEdit"}, "edit_tey2": {"name": "Edit_tey2", "type": "TEdit"}, "edit_tey3": {"name": "Edit_tey3", "type": "TEdit"}, "edit_tey4": {"name": "Edit_tey4", "type": "TEdit"}, "buttonfinish": {"name": "ButtonFinish", "type": "TButton"}, "button2": {"name": "Button2", "type": "TButton"}, "valute_id": {"name": "Valute_ID", "type": "TListBox"}, "bank_id": {"name": "Bank_ID", "type": "TListBox"}, "groupbox6": {"name": "GroupBox6", "type": "TGroupBox"}, "edit_inf1": {"name": "Edit_inf1", "type": "TEdit"}, "edit_inf2": {"name": "Edit_inf2", "type": "TEdit"}, "edit_inf3": {"name": "Edit_inf3", "type": "TEdit"}, "button3": {"name": "Button3", "type": "TButton"}, "speedbutton2": {"name": "SpeedButton2", "type": "TSpeedButton"}, "edit_amount": {"name": "Edit_amount", "type": "TCurrencyEdit"}, "p21": {"name": "P21", "type": "TPanel"}, "button1": {"name": "Button1", "type": "TButton"}, "button5": {"name": "Button5", "type": "TButton"}, "groupbox7": {"name": "GroupBox7", "type": "TGroupBox"}, "rb_102t": {"name": "RB_102T", "type": "TRadioButton"}, "rb_102": {"name": "RB_102", "type": "TRadioButton"}, "dbcombobox_institution": {"name": "DBComboBox_Institution", "type": "TDBLookupComboBox"}, "dbcombobox_budgetlevel": {"name": "DBComboBox_BudgetLevel", "type": "TDBLookupComboBox"}, "dbcombobox_destination": {"name": "DBComboBox_Destination", "type": "TDBLookupComboBox"}, "searchbankm": {"name": "SearchBankM", "type": "TSearchEdit"}, "bnf_count": {"name": "bnf_count", "type": "integer"}}, {});
  U.init(async () => {
    U.var_("PaymentDetalsForm", null, "TPaymentDetalsForm");
    U.var_("insert_shablon", $.sarr(), "array");
  });
  U.func("CheckField", async function CheckField(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: false, "i": 0};
  if ($.truthy((await $.or_((await $.or_((await $.or_((await $.or_((await $.or_((await $.or_((await $.or_((await $.or_((await $.or_((await $.or_((await $.or_((await $.or_(($.eq((await $.call(C, "Trim", [(await $.mv((await $.mv((await $.v(C, "PaymentDetalsForm")), "Edit_Referens")), "Text"))])), "")), async () => ($.eq((await $.mv((await $.mv((await $.v(C, "PaymentDetalsForm")), "Edit_Amount")), "Value")), 0)))), async () => ($.eq((await $.call(C, "Trim", [(await $.mv((await $.mv((await $.v(C, "PaymentDetalsForm")), "Edit_TransCode")), "Text"))])), "")))), async () => ($.eq((await $.mv((await $.mv((await $.v(C, "PaymentDetalsForm")), "Combo_BankName")), "ItemIndex")), (-(1)))))), async () => ($.eq((await $.call(C, "Trim", [(await $.mv((await $.mv((await $.v(C, "PaymentDetalsForm")), "Edit_BankCode")), "Text"))])), "")))), async () => ($.eq((await $.call(C, "Trim", [(await $.mv((await $.mv((await $.v(C, "PaymentDetalsForm")), "Edit_account")), "Text"))])), "")))), async () => ($.eq((await $.call(C, "Trim", [(await $.mv((await $.mv((await $.v(C, "PaymentDetalsForm")), "Edit_Voen")), "Text"))])), "")))), async () => ($.eq((await $.call(C, "Trim", [(await $.mv((await $.mv((await $.v(C, "PaymentDetalsForm")), "Edit_Account_Sub")), "Text"))])), "")))), async () => ($.eq((await $.call(C, "Trim", [(await $.mv((await $.mv((await $.v(C, "PaymentDetalsForm")), "Edit_Bik")), "Text"))])), "")))), async () => ($.eq((await $.call(C, "Trim", [(await $.mv((await $.mv((await $.v(C, "PaymentDetalsForm")), "Edit_Client_acc_no")), "Text"))])), "")))), async () => ($.eq((await $.call(C, "Trim", [(await $.mv((await $.mv((await $.v(C, "PaymentDetalsForm")), "Edit_Client_Name")), "Text"))])), "")))), async () => ($.eq((await $.call(C, "Trim", [(await $.mv((await $.mv((await $.v(C, "PaymentDetalsForm")), "Edit_Client_Voen")), "Text"))])), "")))), async () => ($.eq((await $.call(C, "Trim", [(await $.mv((await $.mv((await $.v(C, "PaymentDetalsForm")), "Edit_tey1")), "Text"))])), "")))))) {
    L0["result"] = false;
    await $.stmt((await $.call(C, "MessageDlg", ["Melumat Tam deyil !", (await $.v(C, "mtWarning")), [(await $.v(C, "mbok"))], 0])));
    return L0.result;
  } else {
    L0["result"] = true;
  }
  {
    const $t1 = (await $.v(C, "PaymentDetalsForm"));
    { const $t2 = $.sub((await $.wv([$t1], "ComponentCount", C, false)), 1);
      await $.wset([$t1], "i", 0, { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true });
      let $t3 = true;
      for (;;) {
        if (!$t3) { await $.wset([$t1], "i", $.succ((await $.wv([$t1], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false)), 1), { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }); }
        $t3 = false;
        if (!($.ord((await $.wv([$t1], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false))) <= $.ord($t2))) break;
        if ($.truthy($.eq((await $.mv((await $.idx((await $.wv([$t1], "Components", C, false)), [(await $.wv([$t1], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false))])), "ClassName")), "TEdit"))) {
          if ($.truthy((await $.and_(($.ne((await $.mv(((await $.idx((await $.wv([$t1], "Components", C, false)), [(await $.wv([$t1], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false))]))), "Text")), "")), async () => ((await $.or_((await $.or_((await $.or_((await $.or_((await $.or_((await $.or_(($.eq((await $.mv((await $.idx((await $.wv([$t1], "Components", C, false)), [(await $.wv([$t1], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false))])), "Name")), "Edit_tey1")), async () => ($.eq((await $.mv((await $.idx((await $.wv([$t1], "Components", C, false)), [(await $.wv([$t1], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false))])), "Name")), "Edit_tey2")))), async () => ($.eq((await $.mv((await $.idx((await $.wv([$t1], "Components", C, false)), [(await $.wv([$t1], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false))])), "Name")), "Edit_tey3")))), async () => ($.eq((await $.mv((await $.idx((await $.wv([$t1], "Components", C, false)), [(await $.wv([$t1], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false))])), "Name")), "Edit_tey4")))), async () => ($.eq((await $.mv((await $.idx((await $.wv([$t1], "Components", C, false)), [(await $.wv([$t1], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false))])), "Name")), "Edit_inf1")))), async () => ($.eq((await $.mv((await $.idx((await $.wv([$t1], "Components", C, false)), [(await $.wv([$t1], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false))])), "Name")), "Edit_inf2")))), async () => ($.eq((await $.mv((await $.idx((await $.wv([$t1], "Components", C, false)), [(await $.wv([$t1], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false))])), "Name")), "Edit_inf3"))))))))) {
            if ($.truthy(($.in_((await $.idx((await $.mv(((await $.idx((await $.wv([$t1], "Components", C, false)), [(await $.wv([$t1], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false))]))), "Text")), [1])), [...$.range("0","9"), ...$.range("A","Z")])))) {
              await $.wset([$t1], "Result", (await $.wv([$t1], "true", C, false)), { get: async () => L0["result"], set: async (v) => { L0["result"] = v; }, local: true });
            } else {
              await $.wset([$t1], "Result", (await $.wv([$t1], "false", C, false)), { get: async () => L0["result"], set: async (v) => { L0["result"] = v; }, local: true });
              await $.stmt((await $.wcall([$t1], "MessageDlg", ["Melumat duzgun deyil !", (await $.wv([$t1], "mtWarning", C, false)), [(await $.wv([$t1], "mbok", C, false))], 0], C)));
              return L0.result;
            }
          }
        }
        await $.tick();
      }
    }
  }
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TPaymentDetalsForm", "SpeedButton1Click", async function SpeedButton1Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "i": 0};
  await $.fixArgs(L0, ["sender"]);
  await $.mset((await $.v(C, "TransCodeForm")), "typecode", 0);
  await $.mset((await $.v(C, "TransCodeForm")), "typetext", "");
  { const $t4 = $.sub((await $.mv((await $.mv((await $.mv((await $.v(C, "TransCodeForm")), "TreeView1")), "Items")), "Count")), 1);
    L0["i"] = 0;
    let $t5 = true;
    for (;;) {
      if (!$t5) { L0["i"] = $.succ(L0["i"], 1); }
      $t5 = false;
      if (!($.ord(L0["i"]) <= $.ord($t4))) break;
      await $.mset((await $.idx((await $.mv((await $.mv((await $.v(C, "TransCodeForm")), "TreeView1")), "Items")), [L0["i"]])), "Expanded", false);
      await $.tick();
    }
  }
  await $.mcall((await $.v(C, "TransCodeForm")), "ShowModal", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TPaymentDetalsForm", "ButtonFinishClick", async function ButtonFinishClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "format": ''};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy((await $.v(C, "mess_edit")))) {
    if ($.truthy((await $.mv((await $.v(C, "RB_102T")), "Checked")))) {
      L0["format"] = "MT102T";
    }
    if ($.truthy((await $.mv((await $.v(C, "RB_102")), "Checked")))) {
      L0["format"] = "MT102";
    }
    if ($.truthy((await $.or_(($.eq((await $.v(C, "checkfield")), false)), async () => ($.eq((await $.mv((await $.mcall((await $.mv((await $.v(C, "DataMod")), "XS_BENEFICIARY")), "fieldbyname", ["status"])), "AsInteger")), 2)))))) {
      return L0.result;
    }
    await $.stmt((await $.mcall((await $.mv((await $.v(C, "DataMod")), "INS")), "Callprocedure", ["xs_Beneficiary_update", [(await $.mv((await $.mcall((await $.mv((await $.v(C, "DataMod")), "XS_BENEFICIARY")), "fieldbyname", ["ID"])), "AsInteger")), (await $.call(C, "strtofloat", [(await $.idx((await $.mv((await $.v(C, "Bank_ID")), "Items")), [(await $.mv((await $.v(C, "Combo_BankName")), "itemindex"))]))])), (await $.call(C, "strtofloat", [(await $.mv((await $.v(C, "Edit_Account_Sub")), "text"))])), (await $.mv((await $.v(C, "Edit_Client_acc_no")), "text")), (await $.mv((await $.v(C, "edit_client_name")), "text")), (await $.mv((await $.v(C, "edit_client_code")), "text")), (await $.mv((await $.v(C, "Edit_Client_Voen")), "text")), $.add($.add($.add($.add($.add($.add($.add((await $.mv((await $.v(C, "edit_tey1")), "text")), "|"), (await $.mv((await $.v(C, "edit_tey2")), "text"))), "|"), (await $.mv((await $.v(C, "edit_tey3")), "text"))), "|"), (await $.mv((await $.v(C, "Edit_tey4")), "Text"))), "|"), (await $.call(C, "strtofloat", [(await $.mv((await $.v(C, "Edit_TransCode")), "text"))])), $.add($.add($.add($.add($.add((await $.mv((await $.v(C, "edit_inf1")), "text")), "|"), (await $.mv((await $.v(C, "edit_inf2")), "text"))), "|"), (await $.mv((await $.v(C, "edit_inf3")), "text"))), "|"), (await $.call(C, "strtofloat", [(await $.idx((await $.mv((await $.v(C, "valute_id")), "items")), [(await $.mv((await $.v(C, "combo_valute")), "itemindex"))]))])), (await $.mv((await $.v(C, "edit_referens")), "text")), (await $.mv((await $.v(C, "Edit_Amount")), "value")), (await $.v(C, "bnf_count"))]])));
    await $.mcall((await $.mv((await $.v(C, "sboapiDataModule")), "SBSession")), "Commit", []);
    await $.stmt((await $.mcall((await $.mv((await $.v(C, "DataMod")), "INS")), "Callprocedure", ["xs_BatchAmount_update", [(await $.mv((await $.mcall((await $.mv((await $.v(C, "DataMod")), "XS_BATCHS")), "fieldbyname", ["ID"])), "asinteger"))]])));
    await $.stmt((await $.mcall((await $.mv((await $.v(C, "DataMod")), "INS")), "Callprocedure", ["xs_format_update", [(await $.mv((await $.mcall((await $.mv((await $.v(C, "DataMod")), "XS_BATCHS")), "fieldbyname", ["ID"])), "asinteger")), L0["format"]]])));
    await $.stmt((await $.mcall((await $.mv((await $.v(C, "DataMod")), "Ins")), "callprocedure", ["xs_beneficiary_ChangeStatus", [(await $.mv((await $.mcall((await $.mv((await $.v(C, "DataMod")), "XS_BENEFICIARY")), "fieldbyname", ["ID"])), "ASinteger")), 0]])));
    await $.stmt((await $.mcall((await $.mv((await $.v(C, "DataMod")), "Ins")), "callintegerfunction", ["xs_Batchs_ChangeStatus", [(await $.mv((await $.mcall((await $.mv((await $.v(C, "DataMod")), "XS_BATCHS")), "fieldbyname", ["ID"])), "ASinteger")), 0]])));
    await $.mcall((await $.mv((await $.v(C, "DataMod")), "XS_BENEFICIARY")), "RefreshRecord", []);
    await $.mcall((await $.mv((await $.v(C, "DataMod")), "XS_BATCHS")), "RefreshRecord", []);
  } else {
    if ($.truthy($.eq((await $.v(C, "CheckField")), false))) {
      return L0.result;
    }
    await $.mcall((await $.v(C, "Button4")), "Click", []);
  }
  await $.stmt($.call(C, "close", []));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TPaymentDetalsForm", "Button2Click", async function Button2Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy((await $.v(C, "mess_edit")))) {
    await $.mcall((await $.v(C, "LVPCSSForm")), "showdetals", []);
  } else {
    await $.stmt($.call(C, "close", []));
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TPaymentDetalsForm", "Combo_BankNameChange", async function Combo_BankNameChange(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "tempstr": ''};
  await $.fixArgs(L0, ["sender"]);
  await $.stmt((await $.mcall((await $.mv((await $.v(C, "Datamod")), "DataBankM")), "Locate", ["ID", (await $.idx((await $.mv((await $.v(C, "Bank_ID")), "Items")), [(await $.mv((await $.v(C, "Combo_BankName")), "ItemIndex"))])), []])));
  await $.mset((await $.v(C, "Bank_ID")), "ItemIndex", (await $.mv((await $.v(C, "Combo_BankName")), "ItemIndex")));
  await $.mset((await $.v(C, "Edit_BankCode")), "Text", (await $.mv((await $.mcall((await $.mv((await $.v(C, "DataMod")), "DataBankM")), "fieldbyname", ["BankCode"])), "AsString")));
  await $.mset((await $.v(C, "Edit_account")), "Text", (await $.mv((await $.mcall((await $.mv((await $.v(C, "DataMod")), "DataBankM")), "fieldbyname", ["KRNO"])), "AsString")));
  await $.mset((await $.v(C, "Edit_Voen")), "Text", (await $.mv((await $.mcall((await $.mv((await $.v(C, "DataMod")), "DataBankM")), "fieldbyname", ["INN"])), "AsString")));
  await $.mset((await $.v(C, "Edit_Bik")), "Text", (await $.mv((await $.mcall((await $.mv((await $.v(C, "DataMod")), "DataBankM")), "fieldbyname", ["SWIFT"])), "AsString")));
  L0["tempstr"] = (await $.mv((await $.mcall((await $.mv((await $.v(C, "DataMod")), "DataBankM")), "fieldbyname", ["KRNO"])), "AsString"));
  await $.mset((await $.v(C, "Edit_Account_Sub")), "Text", (await $.mv((await $.mcall((await $.mv((await $.v(C, "DataMod")), "DataBankM")), "fieldbyname", ["SUBKRNO"])), "AsString")));
  if ($.truthy((await $.v(C, "mess_edit")))) {
    await $.mset((await $.v(C, "Button2")), "Enabled", true);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TPaymentDetalsForm", "Edit_Client_VoenKeyPress", async function Edit_Client_VoenKeyPress(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "key": $.asRef(p1), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await L0["key"].set((await $.mcall((await $.v(C, "LVPCSSForm")), "OnlyNumber", [(await L0["key"].get())])));
  return L0.result;
}, {"params": ["Sender", "Key"], "kind": "procedure", "ptypes": ["TObject", "Char"]});
  U.method("TPaymentDetalsForm", "Edit_account_sub_SelfKeyPress", async function Edit_account_sub_SelfKeyPress(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "key": $.asRef(p1), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await L0["key"].set((await $.mcall((await $.v(C, "LVPCSSForm")), "OnlyNumber", [(await L0["key"].get())])));
  return L0.result;
}, {"params": ["Sender", "Key"], "kind": "procedure", "ptypes": ["TObject", "Char"]});
  U.method("TPaymentDetalsForm", "Edit_Amount1KeyPress", async function Edit_Amount1KeyPress(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "key": $.asRef(p1), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await L0["key"].set((await $.mcall((await $.v(C, "LVPCSSForm")), "OnlyNumber", [(await L0["key"].get())])));
  return L0.result;
}, {"params": ["Sender", "Key"], "kind": "procedure", "ptypes": ["TObject", "Char"]});
  U.method("TPaymentDetalsForm", "Button4Click", async function Button4Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.eq((await $.v(C, "CheckField")), false))) {
    return L0.result;
  }
  await $.set(C, "bnf_count", $.add((await $.v(C, "bnf_count")), 1));
  await $.stmt((await $.mcall((await $.mv((await $.v(C, "DataMod")), "INS")), "Callprocedure", ["xs_beneficiary_insert", [(await $.v(C, "new_id")), (await $.call(C, "strtofloat", [(await $.idx((await $.mv((await $.v(C, "Bank_ID")), "Items")), [(await $.mv((await $.v(C, "Combo_BankName")), "itemindex"))]))])), (await $.call(C, "strtofloat", [(await $.mv((await $.v(C, "Edit_Account_Sub")), "text"))])), (await $.mv((await $.v(C, "Edit_Client_acc_no")), "text")), (await $.mv((await $.v(C, "edit_client_name")), "text")), (await $.mv((await $.v(C, "edit_client_code")), "text")), (await $.mv((await $.v(C, "Edit_Client_Voen")), "text")), $.add($.add($.add($.add($.add($.add($.add((await $.mv((await $.v(C, "edit_tey1")), "text")), "|"), (await $.mv((await $.v(C, "edit_tey2")), "text"))), "|"), (await $.mv((await $.v(C, "edit_tey3")), "text"))), "|"), (await $.mv((await $.v(C, "Edit_tey4")), "text"))), "|"), (await $.call(C, "strtofloat", [(await $.mv((await $.v(C, "Edit_TransCode")), "text"))])), $.add($.add($.add($.add($.add((await $.mv((await $.v(C, "edit_inf1")), "text")), "|"), (await $.mv((await $.v(C, "edit_inf2")), "text"))), "|"), (await $.mv((await $.v(C, "edit_inf3")), "text"))), "|"), (await $.call(C, "strtofloat", [(await $.idx((await $.mv((await $.v(C, "valute_id")), "items")), [(await $.mv((await $.v(C, "combo_valute")), "itemindex"))]))])), (await $.mv((await $.v(C, "edit_referens")), "text")), (await $.mv((await $.v(C, "Edit_Amount")), "value")), (await $.v(C, "bnf_count"))]])));
  if ($.truthy((await $.v(C, "after_add")))) {
    await $.mcall((await $.mv((await $.v(C, "sboapiDataModule")), "SBSession")), "Commit", []);
    await $.stmt((await $.mcall((await $.mv((await $.v(C, "DataMod")), "INS")), "Callprocedure", ["xs_BatchAmount_update", [(await $.mv((await $.mcall((await $.mv((await $.v(C, "DataMod")), "XS_BATCHS")), "fieldbyname", ["ID"])), "asinteger"))]])));
    await $.stmt((await $.mcall((await $.mv((await $.v(C, "DataMod")), "Ins")), "callintegerfunction", ["xs_Batchs_ChangeStatus", [(await $.mv((await $.mcall((await $.mv((await $.v(C, "DataMod")), "XS_BATCHS")), "fieldbyname", ["ID"])), "ASinteger")), 0]])));
    await $.mcall((await $.mv((await $.v(C, "DataMod")), "XS_BATCHS")), "RefreshRecord", []);
    await $.mcall((await $.mv((await $.v(C, "DataMod")), "XS_BENEFICIARY")), "Refresh", []);
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
    await $.mset((await $.mv((await $.v(C, "PaymentDetalsForm")), "Edit_Referens")), "Text", (await $.mcall((await $.mv((await $.v(C, "DataMod")), "INS")), "CallStringFunction", ["GetNewBeneficiaryReference", []])));
  }
  await $.mcall((await $.v(C, "Edit_Client_Name")), "Clear", []);
  await $.mset((await $.v(C, "Edit_Client_Code")), "Text", "/");
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
  if ($.truthy((await $.mv((await $.v(C, "RB_102T")), "Checked")))) {
    await $.mset((await $.v(C, "RB_102T")), "Checked", false);
    await $.mset((await $.v(C, "RB_102")), "Checked", true);
    await $.mset((await $.v(C, "RB_102")), "Checked", false);
    await $.mset((await $.v(C, "RB_102T")), "Checked", true);
  }
  await $.mset((await $.mv((await $.v(C, "TransForm")), "ButtonPost")), "Enabled", true);
  await $.mset((await $.mv((await $.v(C, "PaymentDetalsForm")), "ButtonFinish")), "Enabled", true);
  await $.mcall((await $.mv((await $.v(C, "DataMod")), "XS_BENEFICIARY")), "Last", []);
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
  await $.mset((await $.v(C, "ButtonFinish")), "Caption", "SON");
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
  await $.mset((await $.v(C, "Button1")), "Enabled", true);
  await $.mset((await $.mv((await $.v(C, "PaymentDetalsForm")), "Edit_Referens")), "Text", (await $.mcall((await $.mv((await $.v(C, "DataMod")), "INS")), "CallStringFunction", ["GetNewBeneficiaryReference", []])));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TPaymentDetalsForm", "Edit_BankName_SelfChange", async function Edit_BankName_SelfChange(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "i": 0};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.gt((await $.call(C, "Length", [(await $.mv((await $.v(C, "Edit_Client_Name")), "Text"))])), 0))) {
    { const $t6 = (await $.call(C, "length", [(await $.mv((await $.v(C, "Edit_Client_Name")), "Text"))]));
      L0["i"] = 0;
      let $t7 = true;
      for (;;) {
        if (!$t7) { L0["i"] = $.succ(L0["i"], 1); }
        $t7 = false;
        if (!($.ord(L0["i"]) <= $.ord($t6))) break;
        if ($.truthy($.in_((await $.idx((await $.mv((await $.v(C, "Edit_Client_Name")), "Text")), [L0["i"]])), [...$.range("a","ə"), ...$.range("A","Ə")]))) {
          await $.mset((await $.v(C, "Edit_Client_Name")), "Text", "/");
        }
        await $.tick();
      }
    }
  }
  if ($.truthy((await $.v(C, "mess_edit")))) {
    await $.mset((await $.v(C, "ButtonFinish")), "Enabled", true);
    await $.mset((await $.v(C, "Button2")), "Enabled", true);
  }
  if ($.truthy($.eq((await $.call(C, "Length", [(await $.mv((L0["sender"]), "text"))])), 35))) {
    if ($.truthy((await $.mv((await $.v(C, "PaymentDetalsForm")), "Visible")))) {
      await $.mcall((await $.call(C, "FindNextControl", [(L0["sender"]), true, false, false])), "SetFocus", []);
    }
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TPaymentDetalsForm", "SearchBankMChange", async function SearchBankMChange(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy((await $.and_(($.ne((await $.mv((await $.v(C, "SearchBankM")), "Color")), (await $.v(C, "clred")))), async () => ($.ne((await $.mv((await $.v(C, "SearchBankM")), "Text")), "")))))) {
    await $.mset((await $.v(C, "Combo_BankName")), "ItemIndex", (await $.mcall((await $.mv((await $.v(C, "Bank_ID")), "Items")), "IndexOf", [(await $.mv((await $.mcall((await $.mv((await $.v(C, "DataMod")), "DataBankM")), "fieldbyname", ["id"])), "asstring"))])));
    await $.stmt((await $.mcall((await $.v(C, "Combo_BankName")), "OnChange", [Self])));
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TPaymentDetalsForm", "GroupBox6Enter", async function GroupBox6Enter(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy((await $.mv((await $.v(C, "Edit_tey1")), "Visible")))) {
    await $.mcall((await $.v(C, "Edit_inf1")), "SetFocus", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TPaymentDetalsForm", "SearchBankMExit", async function SearchBankMExit(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mcall((await $.v(C, "SearchBankM")), "Clear", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TPaymentDetalsForm", "Edit_ReferensChange", async function Edit_ReferensChange(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy((await $.v(C, "mess_edit")))) {
    await $.mset((await $.v(C, "ButtonFinish")), "Enabled", true);
    await $.mset((await $.v(C, "Button2")), "Enabled", true);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TPaymentDetalsForm", "Edit_ReferensKeyPress", async function Edit_ReferensKeyPress(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "key": $.asRef(p1), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy((await $.and_(((await $.or_(($.not(($.in_((await L0["key"].get()), [...$.range("0","9"), ...$.range("a","z"), ...$.range("A","Z"), "/", "-", ":", "(", ")", ".", ",", "'", "+", "{", "}", " ", "\b"])))), async () => ($.eq((await $.mv((await $.call(C, "TEdit", [L0["sender"]])), "Text")), "/"))))), async () => ($.ne((await L0["key"].get()), "\b")))))) {
    await L0["key"].set("\u0000");
  }
  return L0.result;
}, {"params": ["Sender", "Key"], "kind": "procedure", "ptypes": ["TObject", "Char"]});
  U.method("TPaymentDetalsForm", "Button1Click", async function Button1Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mset((await $.v(C, "Button1")), "Enabled", false);
  { const $t8 = await $.iset((await $.v(C, "insert_shablon")), [1], (await $.call(C, "StringReplace", [(await $.call(C, "trim", [(await $.mv((await $.v(C, "Edit_amount")), "Text"))])), ",", "", [(await $.v(C, "rfReplaceAll")), (await $.v(C, "rfIgnoreCase"))]]))); if ($t8 !== undefined) { await $.set(C, "insert_shablon", $t8); } }
  { const $t9 = await $.iset((await $.v(C, "insert_shablon")), [2], (await $.mv((await $.v(C, "Edit_TransCode")), "Text"))); if ($t9 !== undefined) { await $.set(C, "insert_shablon", $t9); } }
  { const $t10 = await $.iset((await $.v(C, "insert_shablon")), [3], (await $.mv((await $.v(C, "Combo_BankName")), "Text"))); if ($t10 !== undefined) { await $.set(C, "insert_shablon", $t10); } }
  { const $t11 = await $.iset((await $.v(C, "insert_shablon")), [4], (await $.mv((await $.v(C, "Edit_Client_acc_no")), "Text"))); if ($t11 !== undefined) { await $.set(C, "insert_shablon", $t11); } }
  { const $t12 = await $.iset((await $.v(C, "insert_shablon")), [5], (await $.mv((await $.v(C, "Edit_Client_Name")), "Text"))); if ($t12 !== undefined) { await $.set(C, "insert_shablon", $t12); } }
  { const $t13 = await $.iset((await $.v(C, "insert_shablon")), [6], (await $.mv((await $.v(C, "Edit_Client_Code")), "Text"))); if ($t13 !== undefined) { await $.set(C, "insert_shablon", $t13); } }
  { const $t14 = await $.iset((await $.v(C, "insert_shablon")), [7], (await $.mv((await $.v(C, "Edit_Client_Voen")), "Text"))); if ($t14 !== undefined) { await $.set(C, "insert_shablon", $t14); } }
  { const $t15 = await $.iset((await $.v(C, "insert_shablon")), [8], (await $.mv((await $.v(C, "Edit_tey1")), "Text"))); if ($t15 !== undefined) { await $.set(C, "insert_shablon", $t15); } }
  { const $t16 = await $.iset((await $.v(C, "insert_shablon")), [9], (await $.mv((await $.v(C, "Edit_tey2")), "Text"))); if ($t16 !== undefined) { await $.set(C, "insert_shablon", $t16); } }
  { const $t17 = await $.iset((await $.v(C, "insert_shablon")), [10], (await $.mv((await $.v(C, "Edit_tey3")), "Text"))); if ($t17 !== undefined) { await $.set(C, "insert_shablon", $t17); } }
  { const $t18 = await $.iset((await $.v(C, "insert_shablon")), [11], (await $.mv((await $.v(C, "Edit_tey4")), "Text"))); if ($t18 !== undefined) { await $.set(C, "insert_shablon", $t18); } }
  { const $t19 = await $.iset((await $.v(C, "insert_shablon")), [12], (await $.mv((await $.v(C, "Edit_inf1")), "Text"))); if ($t19 !== undefined) { await $.set(C, "insert_shablon", $t19); } }
  { const $t20 = await $.iset((await $.v(C, "insert_shablon")), [13], (await $.mv((await $.v(C, "Edit_inf2")), "Text"))); if ($t20 !== undefined) { await $.set(C, "insert_shablon", $t20); } }
  { const $t21 = await $.iset((await $.v(C, "insert_shablon")), [14], (await $.mv((await $.v(C, "Edit_inf3")), "Text"))); if ($t21 !== undefined) { await $.set(C, "insert_shablon", $t21); } }
  { const $t22 = await $.iset((await $.v(C, "insert_shablon")), [15], (await $.mv((await $.v(C, "Edit_Referens")), "Text"))); if ($t22 !== undefined) { await $.set(C, "insert_shablon", $t22); } }
  { const $t23 = await $.iset((await $.v(C, "insert_shablon")), [16], (await $.mv((await $.v(C, "Edit_BankCode")), "Text"))); if ($t23 !== undefined) { await $.set(C, "insert_shablon", $t23); } }
  { const $t24 = await $.iset((await $.v(C, "insert_shablon")), [17], (await $.call(C, "trim", [(await $.mv((await $.mv((await $.mv((await $.v(C, "Transaction_Unit")), "TransForm")), "Edit_clientName")), "Text"))]))); if ($t24 !== undefined) { await $.set(C, "insert_shablon", $t24); } }
  await $.stmt((await $.mcall((await $.mv((await $.v(C, "DataMod")), "INS")), "Callprocedure", ["xs_Beneficiary_shablon_insert", [(await $.idx((await $.v(C, "insert_shablon")), [1])), (await $.idx((await $.v(C, "insert_shablon")), [2])), (await $.idx((await $.v(C, "insert_shablon")), [3])), (await $.idx((await $.v(C, "insert_shablon")), [4])), (await $.idx((await $.v(C, "insert_shablon")), [5])), (await $.idx((await $.v(C, "insert_shablon")), [6])), (await $.idx((await $.v(C, "insert_shablon")), [7])), (await $.idx((await $.v(C, "insert_shablon")), [8])), (await $.idx((await $.v(C, "insert_shablon")), [9])), (await $.idx((await $.v(C, "insert_shablon")), [10])), (await $.idx((await $.v(C, "insert_shablon")), [11])), (await $.idx((await $.v(C, "insert_shablon")), [12])), (await $.idx((await $.v(C, "insert_shablon")), [13])), (await $.idx((await $.v(C, "insert_shablon")), [14])), (await $.idx((await $.v(C, "insert_shablon")), [15])), (await $.idx((await $.v(C, "insert_shablon")), [16])), (await $.idx((await $.v(C, "insert_shablon")), [17]))]])));
  await $.stmt((await $.call(C, "MessageDlg", ["Melumat yadda saxlanildi!", (await $.v(C, "mtInformation")), [(await $.v(C, "mbok"))], 0])));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TPaymentDetalsForm", "Button5Click", async function Button5Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.not((await $.call(C, "Assigned", [(await $.v(C, "Form_get_to_shablon"))]))))) {
    await $.set(C, "Form_get_to_shablon", (await $.mcall((await $.v(C, "TForm_get_to_shablon")), "Create", [Self])));
  }
  await $.mcall((await $.mv((await $.v(C, "DataMod")), "ODS_shablon")), "close", []);
  await $.mcall((await $.mv((await $.v(C, "DataMod")), "ODS_shablon")), "open", []);
  await $.mcall((await $.v(C, "Form_get_to_shablon")), "ShowModal", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TPaymentDetalsForm", "Combo_BankNameKeyPress", async function Combo_BankNameKeyPress(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "key": $.asRef(p1), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await L0["key"].set("\u0000");
  return L0.result;
}, {"params": ["Sender", "Key"], "kind": "procedure", "ptypes": ["TObject", "Char"]});
  U.method("TPaymentDetalsForm", "Edit_amountEnter", async function Edit_amountEnter(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.eq((await $.mv((await $.v(C, "Edit_amount")), "Text")), "0"))) {
    await $.mcall((await $.v(C, "Edit_amount")), "Clear", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TPaymentDetalsForm", "Edit_amountExit", async function Edit_amountExit(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.eq((await $.mv((await $.v(C, "Edit_amount")), "Text")), ""))) {
    await $.mset((await $.v(C, "Edit_amount")), "Text", "0");
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TPaymentDetalsForm", "RB_102TClick", async function RB_102TClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy((await $.mv((await $.v(C, "RB_102T")), "Checked")))) {
    await $.mset((await $.v(C, "Button1")), "Visible", false);
    await $.mset((await $.v(C, "Button5")), "Visible", false);
    await $.mset((await $.v(C, "DBComboBox_Institution")), "Visible", true);
    await $.mset((await $.v(C, "DBComboBox_BudgetLevel")), "Visible", true);
    await $.mset((await $.v(C, "DBComboBox_Destination")), "Visible", true);
    await $.mcall((await $.mv((await $.v(C, "DataMod")), "ODS_Institution")), "Open", []);
    await $.mcall((await $.mv((await $.v(C, "DataMod")), "ODS_BudgetLevel")), "Open", []);
    await $.mcall((await $.mv((await $.v(C, "DataMod")), "ODS_Destination")), "Open", []);
    await $.mset((await $.v(C, "DBComboBox_Institution")), "KeyValue", (await $.v(C, "null")));
    await $.mset((await $.v(C, "DBComboBox_BudgetLevel")), "KeyValue", (await $.v(C, "null")));
    await $.mset((await $.v(C, "DBComboBox_Destination")), "KeyValue", (await $.v(C, "null")));
    await $.mcall((await $.v(C, "Edit_tey1")), "Clear", []);
    await $.mcall((await $.v(C, "Edit_tey2")), "Clear", []);
    await $.mcall((await $.v(C, "Edit_tey3")), "Clear", []);
    await $.mcall((await $.v(C, "Edit_tey4")), "Clear", []);
    await $.mcall((await $.v(C, "Edit_Client_Name")), "Clear", []);
    await $.mcall((await $.v(C, "Edit_Client_Code")), "Clear", []);
    await $.mcall((await $.v(C, "Edit_Client_Voen")), "Clear", []);
    await $.mcall((await $.v(C, "Edit_Client_acc_no")), "Clear", []);
    await $.mset((await $.v(C, "Edit_Client_Name")), "Enabled", false);
    await $.mset((await $.v(C, "Edit_Client_Code")), "Enabled", false);
    await $.mset((await $.v(C, "Edit_Client_Voen")), "Enabled", false);
    await $.mset((await $.v(C, "Edit_Client_acc_no")), "Enabled", false);
    await $.mset((await $.mv((await $.v(C, "Datamod")), "DataBankM")), "Filter", "BANKCODE=210005");
    await $.mset((await $.mv((await $.v(C, "DataMod")), "DataBankM")), "Filtered", true);
    await $.mset((await $.v(C, "SearchBankM")), "Text", "210005");
    await $.stmt((await $.call(C, "SearchBankMChange", [Self])));
    await $.stmt((await $.call(C, "Combo_BankNameChange", [Self])));
    await $.mset((await $.v(C, "SearchBankM")), "Enabled", false);
    await $.mset((await $.v(C, "Combo_BankName")), "Enabled", false);
    if ($.truthy(((await $.and_(($.gt((await $.mv((await $.mcall((await $.mv((await $.v(C, "DataMod")), "XS_BATCHS")), "FieldByName", ["status"])), "AsInteger")), 0)), async () => ($.gt((await $.mv((await $.mcall((await $.mv((await $.v(C, "DataMod")), "XS_BENEFICIARY")), "FieldByName", ["status"])), "AsInteger")), 0))))))) {
      await $.mset((await $.v(C, "DBComboBox_Institution")), "Visible", true);
      await $.mset((await $.v(C, "DBComboBox_BudgetLevel")), "Visible", true);
      await $.mset((await $.v(C, "DBComboBox_Destination")), "Visible", true);
    }
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TPaymentDetalsForm", "RB_102Click", async function RB_102Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy((await $.mv((await $.v(C, "RB_102")), "Checked")))) {
    await $.mset((await $.v(C, "Button1")), "Visible", true);
    await $.mset((await $.v(C, "Button5")), "Visible", true);
    await $.mset((await $.v(C, "DBComboBox_Institution")), "Visible", false);
    await $.mset((await $.v(C, "DBComboBox_BudgetLevel")), "Visible", false);
    await $.mset((await $.v(C, "DBComboBox_Destination")), "Visible", false);
    await $.mcall((await $.mv((await $.v(C, "DataMod")), "ODS_Institution")), "Close", []);
    await $.mcall((await $.mv((await $.v(C, "DataMod")), "ODS_BudgetLevel")), "Close", []);
    await $.mcall((await $.mv((await $.v(C, "DataMod")), "ODS_Destination")), "Close", []);
    await $.mset((await $.v(C, "Edit_Client_Name")), "Enabled", true);
    await $.mset((await $.v(C, "Edit_Client_Code")), "Enabled", true);
    await $.mset((await $.v(C, "Edit_Client_Voen")), "Enabled", true);
    await $.mset((await $.v(C, "Edit_Client_acc_no")), "Enabled", true);
    await $.mcall((await $.v(C, "Edit_tey1")), "Clear", []);
    await $.mcall((await $.v(C, "Edit_tey2")), "Clear", []);
    await $.mcall((await $.v(C, "Edit_tey3")), "Clear", []);
    await $.mcall((await $.v(C, "Edit_tey4")), "Clear", []);
    await $.mcall((await $.v(C, "Edit_Client_Name")), "Clear", []);
    await $.mcall((await $.v(C, "Edit_Client_Code")), "Clear", []);
    await $.mcall((await $.v(C, "Edit_Client_Voen")), "Clear", []);
    await $.mcall((await $.v(C, "Edit_Client_acc_no")), "Clear", []);
    await $.mset((await $.v(C, "Edit_Client_Code")), "Text", "/");
    await $.mset((await $.mv((await $.v(C, "Datamod")), "DataBankM")), "Filter", "");
    await $.mset((await $.mv((await $.v(C, "DataMod")), "DataBankM")), "Filtered", false);
    await $.mcall((await $.mv((await $.v(C, "DataMod")), "DataBankM")), "Refresh", []);
    await $.mset((await $.v(C, "SearchBankM")), "Enabled", true);
    await $.mset((await $.v(C, "Combo_BankName")), "Enabled", true);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  return U;
}
